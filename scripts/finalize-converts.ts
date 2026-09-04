#!/usr/bin/env bun
/**
 * Apply convert-time Smithy patches + verbNoun to every package's
 * `.generated-specs`, then compile Smithy → TS. Does not re-fetch specs.
 *
 *   bun scripts/finalize-converts.ts           # all packages
 *   bun scripts/finalize-converts.ts polar fly-io
 */
import { existsSync, readdirSync } from "node:fs";
import { join } from "node:path";
import { spawn } from "node:child_process";
import { finalizeConvert } from "../packages/core/src/codegen/patches.ts";

const repo = join(import.meta.dir, "..");
const only = new Set(process.argv.slice(2));

const pkgs: string[] = [];
for (const name of readdirSync(join(repo, "packages")).sort()) {
  if (only.size && !only.has(name)) continue;
  const pkg = join(repo, "packages", name);
  if (!existsSync(join(pkg, ".generated-specs"))) continue;
  if (!existsSync(join(pkg, "scripts", "generate.ts"))) continue;
  pkgs.push(name);
}

console.log(`finalizeConvert + generate: ${pkgs.length} package(s)`);

for (const name of pkgs) {
  const pkg = join(repo, "packages", name);
  console.log(`\n== ${name} ==`);
  await finalizeConvert({
    root: pkg,
    exclude: (f) => f === "cloudflare.protocols.json",
    // Models may already have Smithy patches baked in; re-apply is skip.
    onStalePatch: "warn",
  });
}

const run = (name: string): Promise<number> =>
  new Promise((resolve) => {
    const child = spawn("bun", ["scripts/generate.ts"], {
      cwd: join(repo, "packages", name),
      stdio: "inherit",
    });
    child.on("close", (code) => resolve(code ?? 1));
  });

const CONCURRENCY = 4;
let next = 0;
const failed: string[] = [];
const workers = Array.from(
  { length: Math.min(CONCURRENCY, pkgs.length) },
  async () => {
    while (next < pkgs.length) {
      const name = pkgs[next++]!;
      console.log(`\n⚙️  generate ${name}`);
      const code = await run(name);
      if (code !== 0) failed.push(name);
    }
  },
);
await Promise.all(workers);

if (failed.length) {
  console.error(`\n❌ generate failed: ${failed.join(", ")}`);
  process.exit(1);
}
console.log(`\n✅ ${pkgs.length} package(s)`);
