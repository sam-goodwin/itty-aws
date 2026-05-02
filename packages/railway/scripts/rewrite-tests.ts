#!/usr/bin/env bun
/**
 * Bulk rewrite of trivial `projectCreate / projectDelete` happy-path
 * scaffolds — i.e. tests where the only resource creation is the project
 * itself, and the body just queries against `project.id` /
 * `project.baseEnvironmentId`.
 *
 * Files with nested creations (`volumeCreate`, `serviceCreate`,
 * `environmentCreate`, etc.) are skipped and need hand rewrites.
 */
import { readdirSync, readFileSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const TEST_DIR = join(import.meta.dir, "..", "test");

const ok: string[] = [];
const skipped: { name: string; reason: string }[] = [];

const NESTED_CREATES = [
  "volumeCreate",
  "serviceCreate",
  "environmentCreate",
  "bucketCreate",
  "customDomainCreate",
  "deploymentTriggerCreate",
  "integrationCreate",
  "privateNetworkCreate",
  "privateNetworkEndpointCreate",
  "projectInvitationCreate",
  "projectTokenCreate",
  "notificationRuleCreate",
  "observabilityDashboardCreate",
  "trustedDomainCreate",
  "twoFactorInfoCreate",
  "serviceDomainCreate",
  "sshPublicKeyCreate",
];

const tryRewrite = (
  src: string,
): { rewritten: string } | { error: string } => {
  // Quick check: any nested resource creation? Skip.
  for (const n of NESTED_CREATES) {
    if (new RegExp(`yield\\* ${n}\\(`).test(src)) {
      return { error: `nested ${n}` };
    }
  }

  const lines = src.split("\n");
  const out: string[] = [];
  let i = 0;
  let didWork = false;

  while (i < lines.length) {
    const line = lines[i];

    if (
      !/^(\s+)it\(\s*"happy path[^"]*",\s*async \(\) => \{$/.test(line)
    ) {
      out.push(line);
      i++;
      continue;
    }

    // Find the matching `}, NN_NNN);` close at the same indent.
    const itIndentMatch = line.match(/^(\s+)/);
    const itIndent = itIndentMatch ? itIndentMatch[1] : "  ";
    const closeRe = new RegExp(
      `^${itIndent}\\}, [0-9_]+\\);\\s*$`,
    );
    let blockEnd = -1;
    for (let j = i + 1; j < lines.length; j++) {
      if (closeRe.test(lines[j])) {
        blockEnd = j;
        break;
      }
    }
    if (blockEnd === -1) {
      out.push(line);
      i++;
      continue;
    }

    const block = lines.slice(i, blockEnd + 1);
    const inner = block.slice(1, -1);

    const projectCreateLine = inner.findIndex((l) =>
      /yield\* projectCreate\(/.test(l),
    );
    if (projectCreateLine === -1) {
      out.push(...block);
      i = blockEnd + 1;
      continue;
    }
    const bindMatch = inner[projectCreateLine].match(
      /const (\w+) = yield\* projectCreate\(/,
    );
    if (!bindMatch) {
      out.push(...block);
      i = blockEnd + 1;
      continue;
    }
    const bind = bindMatch[1];

    // Find the inner `yield* Effect.gen(function* () {` line that opens the
    // body, AFTER projectCreate.
    const innerGenIdx = inner.findIndex(
      (l, idx) =>
        idx > projectCreateLine &&
        /yield\* Effect\.gen\(function\* \(\) \{$/.test(l),
    );
    if (innerGenIdx === -1) {
      out.push(...block);
      i = blockEnd + 1;
      continue;
    }
    // Find matching `}).pipe(` after innerGenIdx — at the same indent as
    // `yield* Effect.gen` but `}).pipe(`.
    const genIndentMatch = inner[innerGenIdx].match(/^(\s+)/);
    const genIndent = genIndentMatch ? genIndentMatch[1] : "        ";
    const closePipeIdx = inner.findIndex(
      (l, idx) =>
        idx > innerGenIdx && l === `${genIndent}}).pipe(`,
    );
    if (closePipeIdx === -1) {
      out.push(...block);
      i = blockEnd + 1;
      continue;
    }
    // Verify the ensuring/projectDelete is present after closePipeIdx.
    const ensuringIdx = inner.findIndex(
      (l, idx) =>
        idx > closePipeIdx &&
        new RegExp(`projectDelete\\(\\{ id: ${bind}\\.id \\}\\)`).test(l),
    );
    if (ensuringIdx === -1) {
      out.push(...block);
      i = blockEnd + 1;
      continue;
    }
    // Find the `runEffect(` open BEFORE projectCreate.
    const runEffectIdx = inner.findIndex(
      (l, idx) =>
        idx < projectCreateLine && /runEffect\(\s*$/.test(l),
    );
    if (runEffectIdx === -1) {
      out.push(...block);
      i = blockEnd + 1;
      continue;
    }
    // Find the runEffect close `);` — should appear after ensuringIdx,
    // followed by `}),` (closing outer Effect.gen) and `);` (closing
    // runEffect). Scan forward past ensuringIdx until we hit `);` at the
    // runEffect indent.
    const runEffectIndentMatch = inner[runEffectIdx].match(/^(\s+)/);
    const runEffectIndent = runEffectIndentMatch
      ? runEffectIndentMatch[1]
      : "    ";
    let runEffectCloseIdx = -1;
    for (let j = ensuringIdx + 1; j < inner.length; j++) {
      if (inner[j] === `${runEffectIndent});`) {
        runEffectCloseIdx = j;
        break;
      }
    }
    if (runEffectCloseIdx === -1) {
      out.push(...block);
      i = blockEnd + 1;
      continue;
    }

    // Body of the test = inner Effect.gen body (lines innerGenIdx+1 to
    // closePipeIdx-1).
    const bodyLines = inner.slice(innerGenIdx + 1, closePipeIdx);

    // Drop one indent level (4 spaces).
    const dropIndent = (l: string) =>
      l.startsWith("    ") ? l.slice(4) : l;
    let dedented = bodyLines.map(dropIndent);

    // Strip trailing `return <expr>;` or empty lines.
    while (
      dedented.length > 0 &&
      (/^\s*return [^;]*;\s*$/.test(dedented[dedented.length - 1]) ||
        dedented[dedented.length - 1].trim() === "")
    ) {
      dedented.pop();
    }

    // Rename bind → project.
    const renameRe = new RegExp(`\\b${bind}\\b`, "g");
    dedented = dedented.map((l) => l.replace(renameRe, "project"));

    // The `runEffect(` line — keep it.
    const runEffectOpen = inner[runEffectIdx];

    // Trailing assertions (after runEffectCloseIdx).
    const tail = inner.slice(runEffectCloseIdx + 1);

    // Prelude: lines from start of inner up to runEffectIdx, minus
    // `const projectName = ...` lines.
    const prelude = inner
      .slice(0, runEffectIdx)
      .filter((l) => !/^\s+const projectName = `[^`]*`;\s*$/.test(l));

    // Trim trailing blank lines from the prelude.
    while (
      prelude.length > 0 &&
      prelude[prelude.length - 1].trim() === ""
    ) {
      prelude.pop();
    }

    const newBlock: string[] = [];
    newBlock.push(line);
    newBlock.push(`${itIndent}  const project = await getSharedProject();`);
    if (prelude.length > 0) {
      newBlock.push("");
      newBlock.push(...prelude);
    }
    newBlock.push("");
    newBlock.push(runEffectOpen);
    newBlock.push(`${runEffectIndent}  Effect.gen(function* () {`);
    newBlock.push(...dedented);
    newBlock.push(`${runEffectIndent}  }),`);
    newBlock.push(`${runEffectIndent});`);
    if (tail.length > 0) {
      newBlock.push(...tail);
    }
    newBlock.push(block[block.length - 1]);

    out.push(...newBlock);
    didWork = true;
    i = blockEnd + 1;
  }

  if (!didWork) return { error: "no happy path matched" };
  return { rewritten: out.join("\n") };
};

for (const entry of readdirSync(TEST_DIR)) {
  if (!entry.endsWith(".test.ts")) continue;
  const path = join(TEST_DIR, entry);
  const original = readFileSync(path, "utf8");
  if (
    !original.includes(`from "../src/operations/projectCreate.ts"`) ||
    !original.includes(`from "../src/operations/projectDelete.ts"`)
  ) {
    continue;
  }

  const result = tryRewrite(original);
  if ("error" in result) {
    skipped.push({ name: entry, reason: result.error });
    continue;
  }
  let updated = result.rewritten;

  updated = updated
    .replace(
      /import \{ projectCreate \} from "\.\.\/src\/operations\/projectCreate\.ts";\n/,
      "",
    )
    .replace(
      /import \{ projectDelete \} from "\.\.\/src\/operations\/projectDelete\.ts";\n/,
      "",
    );

  // Recompute whether testRunId is still used in the body.
  const restOfFile = updated.replace(
    /import \{[^}]*\} from "\.\/setup\.ts";/,
    "",
  );
  const usesTestRunId = /[^A-Za-z]testRunId[^A-Za-z]/.test(restOfFile);
  updated = updated.replace(
    /import \{([^}]*)\} from "\.\/setup\.ts";/,
    (_match, group) => {
      const names = new Set(
        group
          .split(",")
          .map((s: string) => s.trim())
          .filter(Boolean)
          .filter((s: string) => !(s === "testRunId" && !usesTestRunId)),
      );
      names.add("getSharedProject");
      names.add("runEffect");
      if (usesTestRunId) names.add("testRunId");
      return `import { ${[...names].sort().join(", ")} } from "./setup.ts";`;
    },
  );

  writeFileSync(path, updated, "utf8");
  ok.push(entry);
}

console.log(`✓ ${ok.length} files rewritten`);
console.log(`✗ ${skipped.length} files skipped`);
for (const f of skipped) {
  console.log(`   - ${f.name}: ${f.reason}`);
}
