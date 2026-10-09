/**
 * Move module-private schema initializers into chunked builder functions
 * (dev-time only; runtime helper: `@distilled.cloud/core/chunks`).
 *
 *   const Customer = S.suspend(() => ...).annotate({ identifier: "Customer" }) as any as S.Schema<Customer>;
 * becomes
 *   const Customer = /*@__PURE__*\/ __L.at(__c12, 3) as any as S.Schema<Customer>;
 *   ...
 *   function __c12(j: number): any { switch (j) { ... case 3: return S.suspend(() => ...).annotate({ identifier: "Customer" }); } }
 *
 * Builders are function declarations at the end of the module (hoisted, so
 * the consts can name them at import); their bodies run only on first use,
 * after the module has finished evaluating.
 */
import { parseAst } from "rolldown/parseAst";

type Node = { readonly type: string; readonly start: number; readonly end: number } & Record<
  string,
  unknown
>;

/** Schemas per builder function: smaller chunks compile less on first use. */
export const CHUNK_SIZE = 8;

const stripCasts = (n: Node): Node => {
  while (
    n.type === "TSAsExpression" ||
    n.type === "TSSatisfiesExpression" ||
    n.type === "ParenthesizedExpression"
  )
    n = n.expression as Node;
  return n;
};

export const chunkSchemas = (
  code: string,
  filename = "generated.ts",
  chunkSize = CHUNK_SIZE,
): { code: string; chunked: number } => {
  const program = parseAst(code, { sourceType: "module", lang: "ts" }, filename);
  const body = program.body as unknown as Node[];
  const items: Array<{ start: number; end: number; text: string }> = [];
  for (const st of body) {
    // Only module-private consts: exports keep their own initializer.
    if (st.type !== "VariableDeclaration" || (st.declarations as Node[]).length !== 1) continue;
    const d = (st.declarations as Node[])[0]!;
    if (!d.init) continue;
    const inner = stripCasts(d.init as Node);
    if (inner.type !== "CallExpression") continue;
    const text = code.slice(inner.start, inner.end);
    if (/\bAPI\.make/.test(text) || !/\bS\./.test(text)) continue;
    items.push({ start: inner.start, end: inner.end, text });
  }
  if (!items.length) return { code, chunked: 0 };

  const cases: string[][] = [];
  items.forEach((it, i) =>
    (cases[Math.floor(i / chunkSize)] ??= []).push(`case ${i % chunkSize}: return ${it.text};`),
  );

  let out = code;
  for (let i = items.length - 1; i >= 0; i--) {
    const it = items[i]!;
    // The PURE marker in front of the old initializer, if any, now marks the `at` call.
    const marked = /\/\*[@#]__PURE__\*\/\s*$/.test(out.slice(Math.max(0, it.start - 20), it.start));
    out = `${out.slice(0, it.start)}${marked ? "" : "/*@__PURE__*/ "}__L.at(__c${Math.floor(i / chunkSize)}, ${i % chunkSize})${out.slice(it.end)}`;
  }
  const lastImport = [...body].reverse().find((s) => s.type === "ImportDeclaration");
  const at = lastImport ? lastImport.end : 0;
  out = `${out.slice(0, at)}\nimport * as __L from "@distilled.cloud/core/chunks";${out.slice(at)}`;
  out +=
    "\n// Schema builders: each runs one schema initializer, on that schema's first use.\n" +
    cases
      .map(
        (c, k) =>
          `function __c${k}(j: number): any {\n  switch (j) {\n${c.map((x) => `    ${x}`).join("\n")}\n  }\n}`,
      )
      .join("\n");
  return { code: out, chunked: items.length };
};
