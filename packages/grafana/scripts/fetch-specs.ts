#!/usr/bin/env bun
/**
 * Fetch the pinned self-hosted Grafana `/apis` OpenAPI snapshots.
 *
 * The checked-in snapshots make generation offline and reproducible. This
 * command is the explicit update path: it downloads each file from the
 * immutable Grafana commit recorded in `specs/manifest.json` and verifies its
 * SHA-256 before replacing the local copy.
 */
import * as crypto from "node:crypto";
import * as fs from "node:fs/promises";
import * as path from "node:path";

const root = path.resolve(import.meta.dir, "..");
const specsDir = path.join(root, "specs");
const manifestPath = path.join(specsDir, "manifest.json");
const manifest = JSON.parse(await fs.readFile(manifestPath, "utf8")) as {
  repository: string;
  directory: string;
  files: Record<string, { commit: string; sha256: string }>;
};

for (const [name, entry] of Object.entries(manifest.files)) {
  const url = `${manifest.repository}/raw/${entry.commit}/${manifest.directory}/${name}`;
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error(
      `failed to fetch ${name}: ${response.status} ${response.statusText}`,
    );
  }
  const bytes = Buffer.from(await response.arrayBuffer());
  const digest = crypto.createHash("sha256").update(bytes).digest("hex");
  if (digest !== entry.sha256) {
    throw new Error(
      `${name}: SHA-256 mismatch, expected ${entry.sha256}, received ${digest}`,
    );
  }
  await fs.writeFile(path.join(specsDir, name), bytes);
  console.log(`updated ${name} (${entry.commit.slice(0, 12)})`);
}
