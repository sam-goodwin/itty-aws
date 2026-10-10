/**
 * Turn a tabled service module into data-described operations (dev-time
 * only; runs after `tableSchemas`; runtime: the "Data operations" region of
 * `@distilled.cloud/core/api`).
 *
 *   export const getFile: API.OperationMethod<...> = API.make(() => ({ input: __S(4, __c0, 4), ... }));
 *   function __c0(j: number): any { switch (j) { case 4: return S.Struct({ ... }); } }
 * becomes
 *   export const getFile: API.OperationMethod<...> = API.op((i: any): any =>
 *     i === API.D ? ['{input:#1,...};$3({...})', [__0, __4, ...]] : API.call(getFile, i));
 *   function __d0(): any { return ['...', [__0, ...]]; }
 *   const __0 = __L.at, __4 = S.Struct, ...;
 *
 * Each schema reached by one operation only moves into that operation's
 * arrow. Schemas reached by several roots (operations, error classes, other
 * module-level code) move into shared holders grouped by the exact set of
 * roots that reach them, so a bundle keeps a holder only when it needs all
 * of it. Schema-library and trait
 * functions get short module-level aliases (`__4 = S.Struct`) so holders
 * list them cheaply and a bundler still drops the unused ones. Thunk bodies
 * (`S.suspend(() => ...)`) become entries of their own. Expressions are
 * encoded in the grammar documented in core/api.
 *
 * Error classes become data too: their `extends` expression is entry 0 of a
 * function that stands in for the class until first use (`API.error`):
 *   export class Oops extends S.TaggedError<Oops>()("Oops", { ... }) {}
 * becomes
 *   export const Oops = API.error(function Oops(i) {
 *     return API.newError(i, new.target, ['$1()("Oops",{...})', [...]]);
 *   });
 */
import { parseAst } from "rolldown/parseAst";

type Node = { readonly type: string; readonly start: number; readonly end: number } & Record<
  string,
  any
>;

const isNode = (v: unknown): v is Node =>
  v !== null && typeof v === "object" && typeof (v as Node).type === "string";

const strip = (n: Node): Node => {
  while (
    n.type === "TSAsExpression" ||
    n.type === "TSSatisfiesExpression" ||
    n.type === "TSNonNullExpression" ||
    n.type === "ParenthesizedExpression"
  )
    n = n.expression;
  return n;
};

/** `__S(i, __cK, j)` or `__L.at(__cK, j)` (consts the table pass kept) -> `K:j`, or undefined. */
const tableRef = (n: Node): string | undefined => {
  if (n.type !== "CallExpression") return undefined;
  const c = n.callee;
  const table = c.type === "Identifier" && c.name === "__S";
  const at = c.type === "MemberExpression" && c.object.name === "__L" && c.property.name === "at";
  if (!table && !at) return undefined;
  const [f, j] = (n.arguments as Node[]).slice(table ? 1 : 0);
  const m = /^__c(\d+)$/.exec(f!.name ?? "");
  if (!m || j!.type !== "Literal") throw new Error("datafy: unexpected __S call");
  return `${m[1]}:${j!.value}`;
};

const walk = (n: unknown, visit: (n: Node) => boolean): void => {
  if (Array.isArray(n)) {
    for (const c of n) walk(c, visit);
    return;
  }
  if (!isNode(n) || !visit(n)) return;
  for (const [key, v] of Object.entries(n))
    if (key !== "type" && v !== null && typeof v === "object") walk(v, visit);
};

const IDENT = /^[A-Za-z_$][A-Za-z0-9_$]*$/;

/** Whether `encode` (below) accepts an expression: the grammar's subset of JS. */
const encodable = (n: Node): boolean => {
  n = strip(n);
  if (tableRef(n)) return true;
  switch (n.type) {
    case "Literal": {
      const v = n.value;
      return (
        typeof v === "string" ||
        typeof v === "boolean" ||
        (typeof v === "number" && Number.isFinite(v)) ||
        (v === null && !n.regex && !n.bigint)
      );
    }
    case "TemplateLiteral":
      return !n.expressions.length;
    case "UnaryExpression":
      return (
        n.operator === "void" ||
        (n.operator === "-" &&
          n.argument.type === "Literal" &&
          typeof n.argument.value === "number")
      );
    case "Identifier":
      return true;
    case "MemberExpression":
      return !n.computed && encodable(n.object);
    case "CallExpression":
      return (
        encodable(n.callee) &&
        (n.arguments as Node[]).every((a) => a.type !== "SpreadElement" && encodable(a))
      );
    case "ObjectExpression":
      return (n.properties as Node[]).every(
        (p) =>
          p.type === "Property" &&
          p.kind === "init" &&
          !p.method &&
          ((!p.computed && p.key.type === "Identifier") || p.key.type === "Literal") &&
          encodable(p.value),
      );
    case "ArrayExpression":
      return (n.elements as Array<Node | null>).every(
        (e) => !!e && e.type !== "SpreadElement" && encodable(e),
      );
    case "ArrowFunctionExpression":
      return !n.params.length && n.body.type !== "BlockStatement" && encodable(n.body);
    default:
      return false;
  }
};

/**
 * A JSON string with every non-ASCII character and `;` (the entry separator)
 * escaped: the module source must stay one-byte.
 */
const quote = (s: string): string =>
  JSON.stringify(s).replace(
    /[^\x00-\x3a\x3c-\x7f]/g,
    (c) => `\\u${c.charCodeAt(0).toString(16).padStart(4, "0")}`,
  );

/** Values that get a short module-level alias: namespace members of these imports. */
const VOCAB = /^(?:S|T|__L)\.[A-Za-z_$][\w$]*$/;

/** A data holder being written: its entries and the values they name. */
class Holder {
  readonly entries: string[] = [];
  readonly refs: string[] = ["__0"];
  readonly refIndex = new Map<string, number>([["__0", 0]]);
  /** node key -> entry index in this holder */
  readonly local = new Map<string, number>();
  readonly name: string;
  constructor(name: string) {
    this.name = name;
  }
  ref(text: string): number {
    let i = this.refIndex.get(text);
    if (i === undefined) {
      i = this.refs.length;
      this.refs.push(text);
      this.refIndex.set(text, i);
    }
    return i;
  }
}

export const datafyOperations = (
  code: string,
  filename = "generated.ts",
): { code: string; operations: number; holders: number; errors: number } => {
  if (!/\bfunction __S\(/.test(code)) return { code, operations: 0, holders: 0, errors: 0 };
  const program = parseAst(code, { sourceType: "module", lang: "ts" }, filename);
  const body = program.body as unknown as Node[];
  const text = (n: Node) => code.slice(n.start, n.end);
  // `import * as X`: `X.y` is a plain value; any other receiver keeps `this` in calls.
  const namespaces = new Set<string>();
  for (const st of body)
    if (st.type === "ImportDeclaration" && st.importKind !== "type")
      for (const sp of st.specifiers as Node[])
        if (sp.type === "ImportNamespaceSpecifier") namespaces.add(sp.local.name);
  const isNamespace = (n: Node) => n.type === "Identifier" && namespaces.has(n.name);
  // Emitted JS (lib/) gets no type annotations.
  const ts = !filename.endsWith(".js");
  const any = ts ? ": any" : "";

  // Graph nodes: schemas (`K:j`, from the builders) and constants (`v:NAME`).
  const nodes = new Map<string, Node>();
  const removals: Node[] = [];
  // A root: an operation (`init` is its `API.make(...)` call) or an error
  // class (`init` is its whole statement, `config` its `extends` expression).
  type Op = {
    name: string;
    init: Node;
    paginated: boolean;
    config: Node;
    strategy?: Node;
    error?: { exported: boolean };
  };
  const ops: Op[] = [];
  const errors: Op[] = [];
  const rest: Node[] = [];
  const consts = new Map<string, { st: Node; init: Node }>();
  for (const st of body) {
    const cls = st.type === "ExportNamedDeclaration" ? st.declaration : st;
    if (
      cls?.type === "ClassDeclaration" &&
      cls.id &&
      cls.superClass &&
      !cls.body.body.length &&
      !cls.decorators?.length &&
      encodable(cls.superClass)
    ) {
      errors.push({
        name: cls.id.name,
        init: st,
        paginated: false,
        config: cls.superClass,
        error: { exported: st !== cls },
      });
      continue;
    }
    if (st.type === "FunctionDeclaration" && /^__c\d+$/.test(st.id?.name ?? "")) {
      const k = st.id.name.slice(3);
      const sw = st.body.body[0] as Node;
      if (sw?.type !== "SwitchStatement") throw new Error(`datafy: ${st.id.name} is not a switch`);
      for (const c of sw.cases as Node[]) {
        const ret = c.consequent[0] as Node;
        if (ret?.type !== "ReturnStatement") throw new Error("datafy: case without return");
        nodes.set(`${k}:${c.test.value}`, ret.argument);
      }
      removals.push(st);
      continue;
    }
    if (st.type === "FunctionDeclaration" && st.id?.name === "__S") {
      removals.push(st);
      continue;
    }
    if (st.type === "VariableDeclaration" && st.declarations.length === 1) {
      const d = st.declarations[0] as Node;
      if (d.id.name === "__s") {
        removals.push(st);
        continue;
      }
    }
    const decl = st.type === "ExportNamedDeclaration" ? st.declaration : st;
    if (decl?.type === "VariableDeclaration" && decl.declarations.length === 1) {
      const d = decl.declarations[0] as Node;
      const init = d.init ? strip(d.init) : undefined;
      if (
        init?.type === "CallExpression" &&
        init.callee.type === "MemberExpression" &&
        init.callee.object.name === "API" &&
        (init.callee.property.name === "make" || init.callee.property.name === "makePaginated")
      ) {
        const [fn, strategy] = init.arguments as Node[];
        if (
          fn?.type !== "ArrowFunctionExpression" ||
          fn.params.length ||
          fn.body.type === "BlockStatement"
        )
          throw new Error(`datafy: unexpected operation form in ${d.id.name}`);
        ops.push({
          name: d.id.name,
          init: d.init,
          paginated: init.callee.property.name === "makePaginated",
          config: strip(fn.body),
          strategy,
        });
        continue;
      }
    }
    if (st.type !== "ImportDeclaration") rest.push(st);
  }
  if (!ops.length && !errors.length) return { code, operations: 0, holders: 0, errors: 0 };
  const operations = ops.length;
  // From here on an error class is a root like an operation; its entry 0 is its base class.
  ops.push(...errors);

  // A constant becomes data only if schemas and operation configs are its only readers.
  const identUses = (n: unknown, name: string): number => {
    let count = 0;
    walk(n, (x) => {
      if (x.type === "Identifier" && x.name === name) count++;
      return true;
    });
    return count;
  };
  for (const [name, c] of consts) {
    const outside = rest.filter((st) => st !== c.st).reduce((a, st) => a + identUses(st, name), 0);
    if (outside || identUses(c.init, name)) consts.delete(name);
  }
  for (const [name, c] of consts) {
    nodes.set(`v:${name}`, c.init);
    removals.push(c.st);
  }
  const roots = rest.filter((st) => !removals.includes(st));

  /** Graph nodes an expression names. */
  const refsOf = (n: unknown): Set<string> => {
    const out = new Set<string>();
    walk(n, (x) => {
      const k = tableRef(x);
      if (k) out.add(k);
      else if (x.type === "Identifier" && consts.has(x.name)) out.add(`v:${x.name}`);
      return !k;
    });
    return out;
  };

  // Reachability: which roots reach each node.
  const edges = new Map<string, Set<string>>();
  for (const [k, n] of nodes) edges.set(k, refsOf(n));
  const otherRoots = roots.filter((st) => refsOf(st).size);
  const rootRefs = [...ops.map((o) => refsOf(o.config)), ...otherRoots.map((st) => refsOf(st))];
  const reachedBy = new Map<string, number[]>();
  rootRefs.forEach((start, r) => {
    const seen = new Set<string>();
    const stack = [...start];
    while (stack.length) {
      const k = stack.pop()!;
      if (seen.has(k)) continue;
      seen.add(k);
      if (!nodes.has(k)) throw new Error(`datafy: missing schema ${k}`);
      let list = reachedBy.get(k);
      if (!list) reachedBy.set(k, (list = []));
      list.push(r);
      for (const x of edges.get(k)!) stack.push(x);
    }
  });

  // Placement: an operation's own holder, or a shared holder per root set.
  const opHolders = ops.map((o) => new Holder(o.name));
  const shared = new Map<string, Holder>();
  const home = new Map<string, Holder>();
  for (const k of nodes.keys()) {
    const rs = reachedBy.get(k);
    if (!rs) continue; // unreachable: dropped
    let h: Holder;
    if (rs.length === 1 && rs[0]! < ops.length) h = opHolders[rs[0]!]!;
    else {
      const key = rs.join(",");
      h = shared.get(key) ?? new Holder(`__d${shared.size}`);
      shared.set(key, h);
    }
    home.set(k, h);
  }
  // Entry indexes: operation config first, then nodes in source order.
  for (const h of opHolders) h.entries.push("");
  for (const [k, h] of home) {
    h.local.set(k, h.entries.length);
    h.entries.push("");
  }

  // Aliases: `__0` is `at`; other namespace members are numbered on first use.
  const aliases = new Map<string, string>([["__L.at", "__0"]]);
  const alias = (t: string): string => {
    let a = aliases.get(t);
    if (!a) aliases.set(t, (a = `__${aliases.size}`));
    return a;
  };

  const nodeRef = (k: string, h: Holder): string => {
    const target = home.get(k)!;
    const j = target.local.get(k)!;
    const constant = k.startsWith("v:");
    if (target === h) return `${constant ? "~" : "#"}${j}`;
    return `${constant ? "~" : "^"}${h.ref(target.name)}:${j}`;
  };

  const encode = (n: Node, h: Holder): string => {
    const value = (t: string): string => `$${h.ref(VOCAB.test(t) ? alias(t) : t)}`;
    n = strip(n);
    const k = tableRef(n);
    if (k) return nodeRef(k, h);
    const enc = (x: Node) => encode(x, h);
    switch (n.type) {
      case "Literal": {
        const v = n.value;
        if (typeof v === "string") return quote(v);
        if (typeof v === "number" && Number.isFinite(v)) return String(v);
        if (typeof v === "boolean") return String(v);
        if (v === null && !n.regex && !n.bigint) return "null";
        throw new Error(`datafy: unsupported literal ${text(n)}`);
      }
      case "TemplateLiteral":
        if (n.expressions.length) throw new Error("datafy: template with expressions");
        return quote(n.quasis[0].value.cooked);
      case "UnaryExpression":
        if (
          n.operator === "-" &&
          n.argument.type === "Literal" &&
          typeof n.argument.value === "number"
        )
          return String(-n.argument.value);
        if (n.operator === "void") return "u";
        throw new Error(`datafy: unsupported unary ${text(n)}`);
      case "Identifier":
        if (n.name === "undefined") return "u";
        if (consts.has(n.name)) return nodeRef(`v:${n.name}`, h);
        return value(n.name);
      case "MemberExpression": {
        if (n.computed) throw new Error(`datafy: computed member ${text(n)}`);
        const obj = strip(n.object);
        // `S.String`, `Retry.Retry`: one value.
        if (isNamespace(obj)) return value(`${obj.name}.${n.property.name}`);
        return `${enc(obj)}.${n.property.name}`;
      }
      case "CallExpression": {
        const args = (n.arguments as Node[]).map((a) => {
          if (a.type === "SpreadElement") throw new Error("datafy: spread argument");
          return enc(a);
        });
        const callee = strip(n.callee);
        // `S.Struct(...)` calls the namespace member as a plain function;
        // `x.pipe(...)` on any other receiver is a method call.
        if (
          callee.type === "MemberExpression" &&
          !callee.computed &&
          !isNamespace(strip(callee.object))
        ) {
          const [arg] = n.arguments as Node[];
          const props = arg?.type === "ObjectExpression" ? (arg.properties as Node[]) : [];
          const p = props[0];
          // `.annotate({ identifier: "X" })`, on most schemas: `@"X"`.
          if (
            callee.property.name === "annotate" &&
            n.arguments.length === 1 &&
            props.length === 1 &&
            p!.type === "Property" &&
            !p!.computed &&
            p!.key.name === "identifier" &&
            p!.value.type === "Literal" &&
            typeof p!.value.value === "string"
          )
            return `${enc(callee.object)}@${quote(p!.value.value)}`;
          return `${enc(callee.object)}.${callee.property.name}(${args.join(",")})`;
        }
        return `${enc(callee)}(${args.join(",")})`;
      }
      case "ObjectExpression":
        return `{${(n.properties as Node[])
          .map((p) => {
            if (p.type !== "Property" || p.kind !== "init" || p.method)
              throw new Error(`datafy: unsupported property ${text(p)}`);
            let key: string;
            if (!p.computed && p.key.type === "Identifier") key = p.key.name;
            else if (p.key.type === "Literal") key = String(p.key.value);
            else throw new Error(`datafy: unsupported key ${text(p)}`);
            return `${IDENT.test(key) ? key : quote(key)}:${enc(p.value)}`;
          })
          .join(",")}}`;
      case "ArrayExpression":
        return `[${(n.elements as Array<Node | null>)
          .map((e) => {
            if (!e || e.type === "SpreadElement") throw new Error("datafy: array hole or spread");
            return enc(e);
          })
          .join(",")}]`;
      case "ArrowFunctionExpression":
        if (n.params.length || n.body.type === "BlockStatement")
          throw new Error(`datafy: unsupported function ${text(n).slice(0, 80)}`);
        {
          // The body becomes its own entry, so a reader never has to skip it.
          const j = h.entries.length;
          h.entries.push("");
          h.entries[j] = enc(n.body);
          return `>${j}`;
        }
      default:
        throw new Error(`datafy: unsupported ${n.type}: ${text(n).slice(0, 80)}`);
    }
  };

  const configOf = (o: Op, h: Holder): string => {
    let config = encode(o.config, h);
    if (o.strategy) {
      if (!config.endsWith("}")) throw new Error(`datafy: ${o.name} config is not an object`);
      config = `${config.slice(0, -1)}${config.length > 2 ? "," : ""}strategy:${encode(o.strategy, h)}}`;
    }
    return config;
  };
  for (const [k, h] of home) h.entries[h.local.get(k)!] = encode(nodes.get(k)!, h);
  ops.forEach((o, i) => (opHolders[i]!.entries[0] = configOf(o, opHolders[i]!)));

  // The data string is a single-quoted JS literal.
  const literal = (h: Holder) =>
    `['${h.entries.join(";").replace(/[\\']/g, (c) => `\\${c}`)}', [${h.refs.join(", ")}]]`;

  const edits: Array<[number, number, string]> = [];
  for (const st of removals) {
    let end = st.end;
    while (code[end] === "\n") end++;
    edits.push([st.start, end, ""]);
  }
  ops.forEach((o, i) => {
    if (o.error) {
      // A plain function, not an arrow: it is the class (`new`, `instanceof`, `extends`).
      edits.push([
        o.init.start,
        o.init.end,
        `${o.error.exported ? "export " : ""}const ${o.name}${any} = /*@__PURE__*/ API.error(function ${o.name}(i${any})${any} {\n  return API.newError(i, new.target, ${literal(opHolders[i]!)});\n});`,
      ]);
      return;
    }
    const fn = o.paginated ? "API.opPaginated" : "API.op";
    const marked = /\/\*[@#]__PURE__\*\/\s*$/.test(code.slice(o.init.start - 20, o.init.start));
    edits.push([
      o.init.start,
      o.init.end,
      `${marked ? "" : "/*@__PURE__*/ "}${fn}((i${any})${any} => i === API.D ? ${literal(opHolders[i]!)} : API.call(${o.name}, i))`,
    ]);
  });
  // Module-level code that names a schema at import (error classes).
  for (const st of otherRoots)
    walk(st, (n) => {
      const k = tableRef(n);
      if (!k) return true;
      const target = home.get(k)!;
      edits.push([n.start, n.end, `API.schema(${target.name}, ${target.local.get(k)})`]);
      return false;
    });

  edits.sort((a, b) => b[0] - a[0]);
  let out = code;
  for (const [s, e, t] of edits) out = out.slice(0, s) + t + out.slice(e);
  out = out.replace(/\n*$/, "\n").replace(/^\/\/ Schema table, filled on first reach.*\n/m, "");
  if (shared.size)
    out +=
      "\n// Shared schema data (see `op` in core/api).\n" +
      [...shared.values()]
        .map((h) => `function ${h.name}()${any} {\n  return ${literal(h)};\n}\n`)
        .join("");
  // Aliases go right after the imports: error classes reach schemas while the module evaluates.
  const lastImport = [...body].reverse().find((st) => st.type === "ImportDeclaration");
  const at = lastImport ? lastImport.end : 0;
  const decls = [...aliases].map(([t, a]) => `const ${a} = ${t};`);
  out = `${out.slice(0, at)}\n${decls.join("\n")}${out.slice(at)}`;
  return { code: out, operations, holders: shared.size, errors: errors.length };
};
