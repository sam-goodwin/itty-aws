import { stripTypeScriptTypes } from "node:module";
import { describe, expect, test } from "vitest";
import * as API from "../api.ts";
import * as S from "../schema-lite.ts";
import * as T from "../trait.ts";
import { datafyOperations } from "./datafy.ts";

const header = [
  `import * as API from "@distilled.cloud/core/api";`,
  `import * as S from "@distilled.cloud/core/schema-lite";`,
  `import * as __L from "@distilled.cloud/core/schema-lite";`,
  `import * as T from "../traits.ts";`,
].join("\n");

// A tabled module, as `tableSchemas` leaves it.
const tabled = [
  header,
  `const __s: any[] = [];`,
  `const __kept = /*@__PURE__*/ __L.at(__c0, 2);`,
  `const KEYS = { aB: "a_b", "x-y": "x\\u00e9;" };`,
  `export class Oops extends /*@__PURE__*/ S.TaggedError<Oops>()("Oops", { body: S.optional(__S(2, __c0, 2)) }) {}`,
  `export const getThing: API.OperationMethod<any, any, any, any> = /*@__PURE__*/ API.make(() => ({`,
  `  input: __S(0, __c0, 0) as any as S.Schema<any>,`,
  `  output: __S(1, __c0, 1) as any as S.Schema<any>,`,
  `  errors: [Oops],`,
  `}));`,
  `export const listThings: API.PaginatedOperationMethod<any, any, any, any> = /*@__PURE__*/ API.makePaginated(`,
  `  () => ({ input: __S(0, __c0, 0), output: __S(3, __c0, 3), errors: [], pagination: { mode: "cursor", items: "data" } as const }),`,
  `  strategy,`,
  `);`,
  `function __c0(j: number): any {`,
  `  switch (j) {`,
  `    case 0: return S.suspend(() => S.Struct({ id: S.String.pipe(T.Label()), n: S.optional(S.Number) }).pipe(T.Http({ method: "GET", uri: "/t/{id}" }), T.KeyDictionary(KEYS))).annotate({ identifier: "GetThingRequest" });`,
  `    case 1: return S.suspend(() => S.Struct({ tags: S.Array(__S(2, __c0, 2)), lit: S.Literals(["a;b", -1.5, true, null]) })).annotate({ identifier: "Thing", title: "it's \\\\" });`,
  `    case 2: return S.Record(S.String, Sensitive.pipe(S.NullOr));`,
  `    case 3: return S.Struct({ data: S.Array(__S(1, __c0, 1)), kept: __kept });`,
  `  }`,
  `}`,
  `function __S(i: number, f: (j: number) => unknown, j: number): any {`,
  `  return (__s[i] ??= __L.at(f, j));`,
  `}`,
].join("\n");

const Sensitive = S.String;
const strategy = () => {
  throw new Error("unused");
};

/** Evaluate a generated module (imports bound to core) and return its exports. */
const run = (code: string): Record<string, any> => {
  const js = stripTypeScriptTypes(code)
    .replace(/^import .*$/gm, "")
    .replace(/^export /gm, "");
  const names = [...js.matchAll(/^(?:const|class) ([A-Za-z]\w*)/gm)].map((m) => m[1]!);
  return new Function(
    "API",
    "S",
    "__L",
    "T",
    "strategy",
    "Sensitive",
    `${js}\nreturn { ${names.join(", ")} };`,
  )(API, S, S, T, strategy, Sensitive);
};

/** Lite ASTs with every Suspend resolved, as plain data. */
const plain = (n: any, ancestors = new Set<any>()): unknown => {
  if (n === null || typeof n !== "object") return typeof n === "function" ? n.name : n;
  if (ancestors.has(n)) return "<cycle>";
  ancestors.add(n);
  const out: Record<string | symbol, unknown> = {};
  for (const k of Reflect.ownKeys(n)) if (k !== "thunk") out[k] = plain(n[k], ancestors);
  if (n._tag === "Suspend") out.resolved = plain(n.thunk(), ancestors);
  ancestors.delete(n);
  return Array.isArray(n) ? Object.values(out) : out;
};

describe("datafyOperations", () => {
  const { code, operations, holders } = datafyOperations(tabled);

  test("replaces builders and the table with data operations", () => {
    expect(operations).toBe(2);
    expect(holders).toBeGreaterThan(0);
    expect(code).not.toMatch(/function __c0|function __S|const __s/);
    expect(code).toContain(`API.op((i: any): any => i === API.D ? ['`);
    expect(code).toContain(`API.opPaginated(`);
    expect(code).toContain(`API.call(getThing, i)`);
    expect(code).toContain(`const __0 = __L.at;`);
    expect(code).toMatch(/^const __\d+ = S\.Struct;$/m);
    // The module source stays one-byte.
    expect(code).not.toMatch(/[^\x00-\x7f]/);
  });

  test("builds the same schemas, errors and pagination as the code form", () => {
    const before = run(tabled);
    const after = run(code);
    for (const name of ["getThing", "listThings"]) {
      expect(plain(after[name].input.ast)).toEqual(plain(before[name].input.ast));
      expect(plain(after[name].output.ast)).toEqual(plain(before[name].output.ast));
      expect(after[name].errors.map((e: any) => e.identifier)).toEqual(
        before[name].errors.map((e: any) => e.identifier),
      );
    }
    expect(after.listThings.pagination).toEqual(before.listThings.pagination);
    expect(typeof after.listThings.pages).toBe("function");
    expect(plain(after.Oops.fields.body.ast)).toEqual(plain(before.Oops.fields.body.ast));
    // One schema object per entry, shared by every operation that reaches it.
    expect(after.getThing.input).toBe(after.listThings.input);
  });
});
