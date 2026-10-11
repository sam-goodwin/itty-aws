/**
 * Lazy service modules for Node (run by bundle-lib.ts after a package's
 * chunks are written).
 *
 * A bundled service module (`lib/services/<name>.js`) moves to
 * `lib/services.full/<name>.js`, which is what bundlers resolve. In its
 * place goes a stub: one placeholder per operation and error class from
 * `API.lazyService` (core/src/api.ts), the same named exports, and no
 * operation data. Node resolves the stub (the `module-sync` export
 * condition; bundlers take `module` or `default` first), so importing a
 * service, or every service of a provider, parses no operation until one is
 * used; the first use loads the full module with `require(esm)`, and its
 * definitions become the stub's placeholders. The full module is the
 * bundled module unchanged.
 *
 * Every other `lib/` file that names a service module is pointed at the full
 * one: in place for files only bundlers or lazy code reach, and as a
 * `<file>.full.js` twin for files that are a package's `default` export
 * target (barrels), whose original keeps pointing at the stubs for Node.
 *
 * `node scripts/lazy-services.ts --exports [packages/<pkg> ...]` rewrites the
 * packages' `exports` to that layout; bundle-lib fails when they differ.
 */
import { existsSync, mkdirSync, readdirSync, readFileSync, rmSync, writeFileSync } from "node:fs";
import { createRequire } from "node:module";
import { dirname, join, relative, resolve } from "node:path";

const ROOT = join(import.meta.dirname, "..");
const require = createRequire(join(ROOT, "packages", "core", "package.json"));
const { parseAst } = (await import(require.resolve("rolldown/parseAst"))) as {
  parseAst: (code: string, options: object, filename: string) => any;
};

const FULL = ".full";
const CORE_BASE = "@distilled.cloud/core/_bundle/base";
const KIND: Record<string, string> = { api$op: "o", api$opPaginated: "p", api$error: "e" };

//#region source edits that keep a source map valid

const B64 = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
const vlqDecode = (s: string): number[] => {
  const out: number[] = [];
  let shift = 0;
  let value = 0;
  for (const ch of s) {
    const d = B64.indexOf(ch);
    value += (d & 31) << shift;
    if (d & 32) shift += 5;
    else {
      out.push(value & 1 ? -(value >>> 1) : value >>> 1);
      shift = 0;
      value = 0;
    }
  }
  return out;
};
const vlqEncode = (values: number[]): string =>
  values
    .map((v) => {
      let x = v < 0 ? (-v << 1) | 1 : v << 1;
      let out = "";
      do {
        let d = x & 31;
        x >>>= 5;
        if (x) d |= 32;
        out += B64[d];
      } while (x);
      return out;
    })
    .join("");

/** Inserts `text` at each offset (none may contain a newline); shifts the map's generated columns. */
const insert = (code: string, map: any, edits: { at: number; text: string }[]): string => {
  edits = [...edits].sort((a, b) => a.at - b.at);
  let out = "";
  let last = 0;
  for (const e of edits) {
    out += code.slice(last, e.at) + e.text;
    last = e.at;
  }
  out += code.slice(last);
  if (map) {
    const lineStarts = [0];
    for (let i = 0; i < code.length; i++) if (code.charCodeAt(i) === 10) lineStarts.push(i + 1);
    const byLine = new Map<number, { col: number; len: number }[]>();
    for (const e of edits) {
      let line = 0;
      while (line + 1 < lineStarts.length && lineStarts[line + 1]! <= e.at) line++;
      byLine.set(line, [
        ...(byLine.get(line) ?? []),
        { col: e.at - lineStarts[line]!, len: e.text.length },
      ]);
    }
    map.mappings = (map.mappings as string)
      .split(";")
      .map((segs, l) => {
        const at = byLine.get(l);
        if (!at || !segs) return segs;
        let abs = 0;
        let prevOut = 0;
        return segs
          .split(",")
          .map((seg) => {
            const f = vlqDecode(seg);
            abs += f[0]!;
            const shifted = abs + at.filter((c) => c.col <= abs).reduce((n, c) => n + c.len, 0);
            f[0] = shifted - prevOut;
            prevOut = shifted;
            return vlqEncode(f);
          })
          .join(",");
      })
      .join(";");
  }
  return out;
};

//#endregion

/** `exported name -> kind letter` of a group chunk's re-exports of `API.op` / `opPaginated` / `error`. */
const groupKinds = (file: string): Map<string, string> => {
  const ast = parseAst(readFileSync(file, "utf8"), { sourceType: "module" }, file);
  const local = new Map<string, string>();
  const out = new Map<string, string>();
  for (const n of ast.body)
    if (n.type === "ImportDeclaration" && n.source.value === CORE_BASE)
      for (const s of n.specifiers)
        if (s.type === "ImportSpecifier" && KIND[s.imported.name])
          local.set(s.local.name, KIND[s.imported.name]!);
  for (const n of ast.body)
    if (n.type === "ExportNamedDeclaration" && !n.source)
      for (const s of n.specifiers) {
        const k = local.get(s.local.name);
        if (k) out.set(s.exported.name ?? s.exported.value, k);
      }
  return out;
};

const idOf = (n: any): string => n.name ?? n.value;
const RESERVED = new Set(
  "await break case catch class const continue debugger default delete do else enum export extends false finally for function if implements import in instanceof interface let new null package private protected public return static super switch this throw true try typeof var void while with yield eval arguments undefined NaN Infinity".split(
    " ",
  ),
);
const isBinding = (n: string) => /^[A-Za-z_$][\w$]*$/.test(n) && !RESERVED.has(n);
const shortName = (i: number) => `_${i.toString(36)}`;

/**
 * The stub of one service chunk, and the full module with its definitions
 * bracketed; undefined when the module is not made only of data
 * definitions and re-exports.
 */
const lazyModule = (
  file: string,
  fullSpec: string,
  kindsOf: (source: string) => Map<string, string> | undefined,
  withNames: boolean,
): { stub: string; full: string } | undefined => {
  const code = readFileSync(file, "utf8");
  if (code.includes("api$lazyService"))
    throw new Error(`${file} is already a lazy stub: rebuild the package with bundle-lib`);
  const ast = parseAst(code, { sourceType: "module" }, file);
  const imports = new Map<string, { source: string; imported: string }>();
  const kindOfLocal = new Map<string, string>();
  const sources: string[] = [];
  for (const n of ast.body) {
    if (n.type !== "ImportDeclaration") continue;
    if (!sources.includes(n.source.value)) sources.push(n.source.value);
    const kinds =
      n.source.value === CORE_BASE ? new Map(Object.entries(KIND)) : kindsOf(n.source.value);
    for (const s of n.specifiers) {
      if (s.type !== "ImportSpecifier") return undefined;
      imports.set(s.local.name, { source: n.source.value, imported: idOf(s.imported) });
      const k = kinds?.get(idOf(s.imported));
      if (k) kindOfLocal.set(s.local.name, k);
    }
  }
  if (kindOfLocal.size === 0) return undefined;
  // Definitions in order: `const x = op(...)`, top level only.
  const defs = new Map<string, { kind: string; index: number }>();
  let ops = "";
  let errors = 0;
  let exportNode: any;
  for (const n of ast.body) {
    if (n.type === "VariableDeclaration")
      for (const d of n.declarations) {
        const c = d.init;
        const k =
          c?.type === "CallExpression" &&
          c.callee.type === "Identifier" &&
          kindOfLocal.get(c.callee.name);
        if (!k || d.id.type !== "Identifier") continue;
        if (k === "e") defs.set(d.id.name, { kind: k, index: errors++ });
        else defs.set(d.id.name, { kind: k, index: (ops += k).length - 1 });
      }
    else if (n.type === "ExportNamedDeclaration") {
      if (n.source || n.declaration || exportNode) return undefined;
      exportNode = n;
    } else if (n.type === "ExportAllDeclaration" || n.type === "ExportDefaultDeclaration")
      return undefined;
  }
  if (!exportNode) return undefined;
  // Every call of op / opPaginated / error must be one of those definitions.
  let calls = 0;
  const visit = (node: any): void => {
    if (Array.isArray(node)) return node.forEach(visit);
    if (!node || typeof node !== "object") return;
    if (
      node.type === "CallExpression" &&
      node.callee.type === "Identifier" &&
      kindOfLocal.has(node.callee.name)
    )
      calls++;
    for (const k in node)
      if (k !== "type" && node[k] && typeof node[k] === "object") visit(node[k]);
  };
  visit(ast.body);
  if (calls !== defs.size) return undefined;
  // Export names of each definition, in definition order.
  const opNames: string[][] = Array.from({ length: ops.length }, () => []);
  const errNames: string[][] = Array.from({ length: errors }, () => []);
  const reexports = new Map<string, string[]>();
  for (const s of exportNode.specifiers) {
    const local = idOf(s.local);
    const exported = idOf(s.exported);
    const def = defs.get(local);
    if (def) {
      (def.kind === "e" ? errNames : opNames)[def.index]!.push(exported);
      continue;
    }
    const imp = imports.get(local);
    if (!imp) return undefined;
    const name = isBinding(exported) ? exported : JSON.stringify(exported);
    reexports.set(imp.source, [...(reexports.get(imp.source) ?? []), `${imp.imported} as ${name}`]);
  }
  let next = 0;
  const aliases: string[] = [];
  const decl = (names: string[], make: string) => {
    const [first, ...rest] = names;
    const local =
      first && isBinding(first) && !["$L", "$o", "$e"].includes(first) ? first : shortName(next++);
    if (first && local !== first) aliases.push(`${local} as ${JSON.stringify(first)}`);
    for (const n of rest) aliases.push(`${local} as ${isBinding(n) ? n : JSON.stringify(n)}`);
    return { exported: local === first, text: `${local}=${make}()` };
  };
  const decls = [...errNames.map((n) => decl(n, "$e")), ...opNames.map((n) => decl(n, "$o"))];
  const stub = [
    ...sources.map((s) => `import"${s}";`),
    `import{api$lazyService as $L}from"${CORE_BASE}";`,
    ...[...reexports].map(([s, l]) => `export{${l.join(",")}}from"${s}";`),
    `const{o:$o,e:$e}=/*@__PURE__*/$L(import.meta.url,${JSON.stringify(fullSpec)},"${ops}"${
      withNames
        ? `,()=>${JSON.stringify([...opNames, ...errNames].map((n) => n[0] ?? "-").join(" "))}`
        : ""
    });`,
    // One declaration, so the placeholders are made in definition order.
    ...(decls.length ? [`const ${decls.map((d) => d.text).join(",")};`] : []),
    ...(decls.length
      ? [
          `export{${[...decls.filter((d) => d.exported).map((d) => d.text.split("=")[0]), ...aliases].join(",")}};`,
        ]
      : []),
    "",
  ].join("\n");
  return { stub, full: code };
};

/** `export * as x from "./x.js"` lines become lazy namespaces; other lines stay. */
const lazyBarrel = (code: string): string => {
  const lines = code.split("\n");
  const lazy: string[] = [];
  const aliases: string[] = [];
  const rest = lines.filter((line) => {
    const m = /^export \* as ("[^"]+"|[\w$]+) from ("\.\/[^"]+\.js");$/.exec(line);
    if (!m) return true;
    const name = m[1]!.startsWith('"') ? JSON.parse(m[1]!) : m[1]!;
    if (isBinding(name) && !["$N", "$u"].includes(name)) lazy.push(`${name}=$N($u,${m[2]})`);
    else {
      const local = `_${lazy.length.toString(36)}`;
      lazy.push(`${local}=$N($u,${m[2]})`);
      aliases.push(`${local} as ${JSON.stringify(name)}`);
    }
    return false;
  });
  if (lazy.length === 0) return code;
  const names = lazy.map((l) => l.split("=")[0]!).filter((n) => !n.startsWith("_"));
  return [
    `import{api$lazyNamespace as $N}from"${CORE_BASE}";`,
    ...rest.filter((l) => l.trim()),
    `const $u=import.meta.url,${lazy.join(",")};`,
    `export{${[...names, ...aliases].join(",")}};`,
    "",
  ].join("\n");
};

const SPECIFIER = /(["'`])((?:\.\.?\/)+)([\w./-]+?)\/([\w.-]+\.js)\1/g;

/** Specifiers of `lib/` code that name a module of a service directory, pointed at the full one. */
const toFull = (code: string, map: any, dirs: string[], from: string, lib: string): string => {
  const edits: { at: number; text: string }[] = [];
  for (const m of code.matchAll(SPECIFIER)) {
    const target = relative(lib, resolve(dirname(from), m[2]! + m[3]!))
      .split("\\")
      .join("/");
    if (!dirs.includes(target)) continue;
    edits.push({ at: m.index! + 1 + m[2]!.length + m[3]!.length, text: FULL });
  }
  return edits.length ? insert(code, map, edits) : code;
};

const walkJs = (dir: string, out: string[] = []): string[] => {
  for (const name of readdirSync(dir, { withFileTypes: true })) {
    const p = join(dir, name.name);
    if (name.isDirectory()) walkJs(p, out);
    else if (p.endsWith(".js")) out.push(p);
  }
  return out;
};

const readMap = (file: string) =>
  existsSync(`${file}.map`) ? JSON.parse(readFileSync(`${file}.map`, "utf8")) : undefined;

/**
 * Makes a package's service modules lazy (see the header). `serviceDirs` are
 * lib-relative; returns the lib-relative files written, and the `default`
 * export targets that got a `.full.js` twin.
 */
export const lazyServices = (
  pkgDir: string,
  serviceDirs: string[],
): { written: string[]; twins: string[]; stubs: number; kept: number; dirs: string[] } => {
  const lib = join(pkgDir, "lib");
  const written: string[] = [];
  const kindCache = new Map<string, Map<string, string> | undefined>();
  let stubs = 0;
  let kept = 0;
  // Service modules other lib code imports by path: their stubs may find the
  // full module already evaluated.
  const referenced = new Set<string>();
  for (const file of walkJs(lib)) {
    const r = rel(lib, file);
    if (serviceDirs.some((d) => r.startsWith(`${d}/`) || r.startsWith(`${d}${FULL}/`))) continue;
    for (const m of readFileSync(file, "utf8").matchAll(SPECIFIER))
      referenced.add(resolve(dirname(file), m[2]! + m[3]!, m[4]!));
  }
  const lazyDirs: string[] = [];
  for (const d of serviceDirs) {
    const dir = join(lib, d);
    const fullDir = `${dir}${FULL}`;
    const kindsOf = (source: string) => {
      if (!source.startsWith(".")) return undefined;
      const abs = resolve(dir, source);
      if (!kindCache.has(abs)) kindCache.set(abs, existsSync(abs) ? groupKinds(abs) : undefined);
      return kindCache.get(abs);
    };
    const files = readdirSync(dir).filter((f) => f.endsWith(".js"));
    const lazy = new Map(
      files.map((f) => [
        f,
        f === "index.js"
          ? undefined
          : lazyModule(
              join(dir, f),
              `../${d.split("/").at(-1)}${FULL}/${f}`,
              kindsOf,
              referenced.has(join(dir, f)),
            ),
      ]),
    );
    // Only directories of generated service modules.
    if (![...lazy.values()].some(Boolean)) continue;
    lazyDirs.push(d);
    mkdirSync(fullDir, { recursive: true });
    for (const f of files) {
      const file = join(dir, f);
      const fullFile = join(fullDir, f);
      const l = lazy.get(f);
      const map = readMap(file);
      if (l) {
        writeFileSync(fullFile, l.full);
        if (map) {
          writeFileSync(`${fullFile}.map`, JSON.stringify(map));
          written.push(rel(lib, `${fullFile}.map`));
        }
        writeFileSync(file, l.stub);
        rmSync(`${file}.map`, { force: true });
        stubs++;
      } else if (f === "index.js") {
        // A barrel of sibling modules: the same barrel over the full ones,
        // and for Node namespaces that load their module on first use.
        const code = readFileSync(file, "utf8");
        writeFileSync(fullFile, code);
        writeFileSync(file, lazyBarrel(code));
      } else {
        writeFileSync(fullFile, `export*from"../${d.split("/").at(-1)}/${f}";\n`);
        kept++;
      }
      written.push(rel(lib, fullFile));
    }
  }
  serviceDirs = lazyDirs;
  // Other files naming a service module.
  const defaults = defaultTargets(pkgDir);
  const twins: string[] = [];
  const inService = (r: string) =>
    serviceDirs.some((d) => r.startsWith(`${d}/`) || r.startsWith(`${d}${FULL}/`));
  for (const file of walkJs(lib)) {
    const r = rel(lib, file);
    if (inService(r) || r.endsWith(`${FULL}.js`)) continue;
    const code = readFileSync(file, "utf8");
    const map = readMap(file);
    const out = toFull(code, map, serviceDirs, file, lib);
    if (out === code) continue;
    if (defaults.has(r)) {
      const twin = file.replace(/\.js$/, `${FULL}.js`);
      writeFileSync(twin, out);
      if (map) {
        writeFileSync(`${twin}.map`, JSON.stringify(map));
        written.push(rel(lib, `${twin}.map`));
      }
      written.push(rel(lib, twin));
      twins.push(r);
    } else {
      writeFileSync(file, out);
      if (map) writeFileSync(`${file}.map`, JSON.stringify(map));
    }
  }
  return { written, twins, stubs, kept, dirs: lazyDirs };
};

const rel = (from: string, to: string) => relative(from, to).split("\\").join("/");

/** lib-relative files that are the `default` target of a non-wildcard export. */
const defaultTargets = (pkgDir: string): Set<string> => {
  const pkg = JSON.parse(readFileSync(join(pkgDir, "package.json"), "utf8"));
  const out = new Set<string>();
  for (const [key, v] of Object.entries<any>(pkg.exports ?? {})) {
    if (key.includes("*")) continue;
    const t = typeof v === "string" ? v : v?.default;
    if (typeof t === "string" && t.startsWith("./lib/") && !t.includes(`${FULL}.`))
      out.add(t.slice("./lib/".length));
    const s = typeof v === "object" ? v?.["module-sync"] : undefined;
    if (typeof s === "string" && s.startsWith("./lib/")) out.add(s.slice("./lib/".length));
  }
  return out;
};

/**
 * The `exports` a package needs: Node (`module-sync`) gets stubs and the
 * original barrels, bundlers (`module`, `default`) the full modules.
 */
export const lazyExports = (
  exports: Record<string, any>,
  serviceDirs: string[],
  twins: string[],
) => {
  const out: Record<string, any> = {};
  for (const [key, v] of Object.entries(exports)) {
    if (typeof v !== "object" || v === null) {
      out[key] = v;
      continue;
    }
    const node: string | undefined = v["module-sync"] ?? v.default;
    let full: string | undefined;
    if (typeof node === "string") {
      const wild = /^\.\/lib\/(.+)\/\*\.js$/.exec(node);
      if (wild && serviceDirs.includes(wild[1]!)) full = `./lib/${wild[1]}${FULL}/*.js`;
      else if (twins.includes(node.slice("./lib/".length)))
        full = node.replace(/\.js$/, `${FULL}.js`);
    }
    const { module: _m, "module-sync": _s, default: _d, ...rest } = v;
    out[key] = full
      ? { ...rest, module: full, "module-sync": node, default: full }
      : { ...rest, default: node };
  }
  return out;
};

if (import.meta.main && process.argv[2] === "--exports") {
  const dirs = process.argv.slice(3);
  for (const d of dirs.length
    ? dirs
    : readdirSync(join(ROOT, "packages")).map((p) => `packages/${p}`)) {
    const pkgFile = join(ROOT, d, "package.json");
    if (!existsSync(pkgFile) || !existsSync(join(ROOT, d, "lib"))) continue;
    const pkg = JSON.parse(readFileSync(pkgFile, "utf8"));
    const twinsFile = join(ROOT, d, "lib", ".lazy.json");
    if (!existsSync(twinsFile)) continue;
    const { serviceDirs, twins } = JSON.parse(readFileSync(twinsFile, "utf8"));
    const next = lazyExports(pkg.exports, serviceDirs, twins);
    if (JSON.stringify(next) !== JSON.stringify(pkg.exports)) {
      pkg.exports = next;
      writeFileSync(pkgFile, `${JSON.stringify(pkg, null, 2)}\n`);
      console.log(`lazy-services: ${d}: exports updated`);
    }
  }
}
