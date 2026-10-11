import { spawnSync } from "node:child_process";
import { mkdtempSync, rmSync, writeFileSync } from "node:fs";
import { tmpdir } from "node:os";
import { join } from "node:path";
import { pathToFileURL } from "node:url";
import { afterAll, describe, expect, it } from "vitest";

// Lazy service modules load their full module with `require(esm)`, which
// vitest's module runner does not provide: run the fixtures in Node itself.
const api = pathToFileURL(join(import.meta.dirname, "api.ts")).href;
const dir = mkdtempSync(join(tmpdir(), "distilled-lazy-"));
afterAll(() => rmSync(dir, { recursive: true, force: true }));

/** A full service module as bundle-lib emits it. */
const full = (tag: string) => `import * as API from ${JSON.stringify(api)};
globalThis.loaded = (globalThis.loaded ?? 0) + 1;
class Base extends Error { constructor(p) { super("oops"); this._tag = "Oops"; Object.assign(this, p); } }
const Oops = API.error(function Oops(i) { return API.newError(i, new.target, ["$1", [null, Base]]); });
const getThing = API.op((i) => i === API.D ? ['{input:$1,output:$1,errors:[$2],operationName:"GetThing"}', [null, { ast: "${tag}" }, Oops]] : API.call(getThing, i));
const listThings = API.opPaginated((i) => i === API.D ? ['{input:$1,output:$1,operationName:"ListThings"}', [null, { ast: 1 }]] : API.call(listThings, i));
export { Oops, getThing, listThings };
`;

/** Its stub, as lazy-services.ts emits it. */
const stub = (
  fullFile: string,
  names = "",
) => `import { lazyService as $L } from ${JSON.stringify(api)};
const { o: $o, e: $e } = $L(import.meta.url, "./${fullFile}", "op"${names && `, () => "${names}"`});
const Oops = $e(), getThing = $o(), listThings = $o();
export { Oops, getThing, listThings };
`;

const run = (script: string): any => {
  const file = join(dir, `run-${Math.random().toString(36).slice(2)}.mjs`);
  writeFileSync(file, script);
  const r = spawnSync(process.execPath, ["--no-warnings", file], { encoding: "utf8" });
  if (r.status !== 0) throw new Error(r.stderr);
  return JSON.parse(r.stdout);
};

writeFileSync(join(dir, "a.full.mjs"), full("a"));
writeFileSync(join(dir, "a.mjs"), stub("a.full.mjs"));
writeFileSync(join(dir, "b.full.mjs"), full("b"));
writeFileSync(join(dir, "b.mjs"), stub("b.full.mjs", "getThing listThings Oops"));
writeFileSync(
  join(dir, "barrel.mjs"),
  `import { lazyNamespace as $N } from ${JSON.stringify(api)};\nexport const A = $N(import.meta.url, "./a.mjs");\n`,
);

describe("lazy service modules", () => {
  it("load the full module on first use and adopt its definitions", () => {
    const r = run(`
      const s = await import("./a.mjs");
      const before = globalThis.loaded ?? 0;
      const keys = Object.keys(s);
      const name = s.getThing.operationName;
      const f = await import("./a.full.mjs");
      const e = new s.Oops({ code: 1 });
      console.log(JSON.stringify({
        before, keys, name, after: globalThis.loaded,
        sameOp: f.getThing === s.getThing, sameError: f.Oops === s.Oops,
        errorsAreStubs: s.getThing.errors[0] === s.Oops,
        instance: e instanceof s.Oops, tag: e._tag, code: e.code, className: s.Oops.name,
        ast: s.getThing.input.ast, pages: typeof s.listThings.pages, plainPages: "pages" in s.getThing,
        listName: s.listThings.operationName,
      }));
    `);
    expect(r).toEqual({
      before: 0,
      keys: ["Oops", "getThing", "listThings"],
      name: "GetThing",
      after: 1,
      sameOp: true,
      sameError: true,
      errorsAreStubs: true,
      instance: true,
      tag: "Oops",
      code: 1,
      className: "Oops",
      ast: "a",
      pages: "function",
      plainPages: false,
      listName: "ListThings",
    });
  });

  it("an error class loads the module when constructed first", () => {
    const r = run(`
      const s = await import("./a.mjs");
      const e = new s.Oops({});
      console.log(JSON.stringify({ loaded: globalThis.loaded, instance: e instanceof s.Oops, tag: e._tag }));
    `);
    expect(r).toEqual({ loaded: 1, instance: true, tag: "Oops" });
  });

  it("a full module imported before its stub keeps its objects; the stub reads their data", () => {
    const r = run(`
      const f = await import("./b.full.mjs");
      const s = await import("./b.mjs");
      console.log(JSON.stringify({
        loaded: globalThis.loaded, name: s.getThing.operationName, ast: s.getThing.input.ast,
        distinct: f.getThing !== s.getThing, tag: new s.Oops({})._tag, className: s.Oops.name,
      }));
    `);
    expect(r).toEqual({
      loaded: 1,
      name: "GetThing",
      ast: "b",
      distinct: true,
      tag: "Oops",
      className: "Oops",
    });
  });

  it("a lazy namespace loads its module on first access", () => {
    const r = run(`
      const b = await import("./barrel.mjs");
      const before = globalThis.loaded ?? 0;
      const keys = Object.keys(b.A);
      const s = await import("./a.mjs");
      console.log(JSON.stringify({
        before, keys, same: b.A.getThing === s.getThing, has: "Oops" in b.A,
        spread: Object.keys({ ...b.A }), name: b.A.getThing.operationName,
      }));
    `);
    expect(r).toEqual({
      before: 0,
      keys: ["Oops", "getThing", "listThings"],
      same: true,
      has: true,
      spread: ["Oops", "getThing", "listThings"],
      name: "GetThing",
    });
  });
});
