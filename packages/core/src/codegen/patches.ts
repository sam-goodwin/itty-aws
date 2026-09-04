/**
 * RFC-6902 patch application for convert (dev-time only).
 *
 * OpenAPI ops (`/paths`, `/components`, …) apply to the spec before
 * conversion; Smithy ops (`/shapes`, `/metadata`, `/smithy`) apply to the
 * model after conversion. `.generated-specs` is the patched model.
 * `scripts/generate.ts` does not apply patches.
 */
import * as fs from "node:fs/promises";
import * as path from "node:path";
import {
  applyOperation,
  isStaleTargetError,
  type JsonPatchOperation,
  type PatchFile,
} from "../json-patch.ts";
import { verbNounSmithyModel } from "./rewrite-operation-ids.ts";

export type OnStalePatch = "fail" | "warn";

export interface ApplyPatchesResult {
  files: number;
  applied: number;
  stale: number;
  errors: string[];
}

/** Smithy-model JSON pointers — OpenAPI has no `/shapes` tree. */
export const isSmithyPatchPath = (pointer: string): boolean =>
  pointer.startsWith("/shapes") ||
  pointer.startsWith("/metadata") ||
  pointer.startsWith("/smithy");

const exists = async (p: string): Promise<boolean> => {
  try {
    await fs.access(p);
    return true;
  } catch {
    return false;
  }
};

/**
 * RFC-6902 files in `dir`: every `*.json`, `*.manual.json` last (those
 * usually target post-rename shape names). Missing dir → `[]`.
 */
export const listRfc6902PatchFiles = async (dir: string): Promise<string[]> => {
  if (!(await exists(dir))) return [];
  return (await fs.readdir(dir))
    .filter((f) => f.endsWith(".json"))
    .sort(
      (a, b) =>
        Number(a.endsWith(".manual.json")) -
          Number(b.endsWith(".manual.json")) || a.localeCompare(b),
    )
    .map((f) => path.join(dir, f));
};

export const applyRfc6902Files = async (
  target: unknown,
  files: readonly string[],
  opts: {
    readonly onStalePatch?: OnStalePatch;
    readonly include?: (op: JsonPatchOperation) => boolean;
    readonly label?: (file: string) => string;
  } = {},
): Promise<ApplyPatchesResult> => {
  const onStalePatch = opts.onStalePatch ?? "fail";
  const include = opts.include ?? (() => true);
  const result: ApplyPatchesResult = {
    files: 0,
    applied: 0,
    stale: 0,
    errors: [],
  };
  for (const file of files) {
    const parsed = JSON.parse(await fs.readFile(file, "utf8")) as PatchFile;
    const label = opts.label?.(file) ?? path.basename(file);
    result.files++;
    for (const patchOp of parsed.patches ?? []) {
      if (!include(patchOp)) continue;
      try {
        applyOperation(target, patchOp);
        result.applied++;
      } catch (e) {
        const msg = e instanceof Error ? e.message : String(e);
        const line = `${label} [${patchOp.op} ${patchOp.path}]`;
        if (isStaleTargetError(msg)) {
          result.stale++;
          if (onStalePatch === "fail") {
            result.errors.push(`${line}: stale target (${msg})`);
          } else {
            console.warn(`   ⚠️  stale: ${line}`);
          }
        } else {
          result.errors.push(`${line}: ${msg}`);
        }
      }
    }
  }
  return result;
};

/**
 * Apply `patches/<resource>/*.json` to each Smithy model in `specsDir` and
 * write the models back. Used by convert pipelines whose patches target
 * Smithy (Cloudflare, Discord, GraphQL) so generate never sees them.
 */
export const bakeSmithyPatches = async (o: {
  readonly specsDir: string;
  readonly patchesDir: string;
  readonly exclude?: (file: string) => boolean;
  readonly include?: (resource: string) => boolean;
  readonly transform?: (model: any, resource: string) => string | void;
  readonly onStalePatch?: OnStalePatch;
}): Promise<void> => {
  const names = (await fs.readdir(o.specsDir))
    .filter((f) => f.endsWith(".json") && !(o.exclude?.(f) ?? false))
    .sort((a, b) => a.localeCompare(b));
  for (const file of names) {
    const resource = file.replace(/\.json$/, "");
    if (o.include && !o.include(resource)) continue;
    const modelPath = path.join(o.specsDir, file);
    const model = JSON.parse(await fs.readFile(modelPath, "utf8"));
    const files = await listRfc6902PatchFiles(
      path.join(o.patchesDir, resource),
    );
    const applied = await applyRfc6902Files(model, files, {
      onStalePatch: o.onStalePatch,
      include: (op) => isSmithyPatchPath(op.path),
      label: (f) => `${resource}/${path.basename(f)}`,
    });
    if (applied.errors.length) {
      for (const err of applied.errors) console.error(`❌ bad patch: ${err}`);
      throw new Error(
        `${applied.errors.length} patch operation(s) failed for ${resource} — fix the pointers or delete the patch`,
      );
    }
    const note = o.transform?.(model, resource);
    if (note) console.log(`   ${note}`);
    if (applied.files > 0 || o.transform) {
      await fs.writeFile(modelPath, `${JSON.stringify(model, null, 2)}\n`);
    }
    if (applied.files > 0) {
      console.log(
        `   patched ${resource}: ${applied.files} file(s), ${applied.applied} op(s)` +
          (applied.stale ? `, ${applied.stale} stale` : ""),
      );
    }
  }
};

/**
 * Last step of every convert: Smithy RFC-6902 patches, then verbNoun
 * operation names, then an optional model transform. Writes models back so
 * `.generated-specs` is what generate compiles. `outDir` may be nested
 * (GCP `stable/` / `unstable/`).
 */
export const finalizeConvert = async (o: {
  readonly root: string;
  readonly outDir?: string;
  readonly patchesDir?: string | false;
  readonly exclude?: (file: string) => boolean;
  readonly include?: (resource: string) => boolean;
  readonly transform?: (model: any, resource: string) => string | void;
  readonly operationNaming?: "as-is" | "verbNoun";
  readonly onStalePatch?: OnStalePatch;
}): Promise<void> => {
  const specsDir = path.resolve(o.root, o.outDir ?? ".generated-specs");
  if (!(await exists(specsDir))) return;
  const patchesDir =
    o.patchesDir === false
      ? undefined
      : path.resolve(o.root, o.patchesDir ?? "patches");
  const naming = o.operationNaming ?? "verbNoun";

  const walk = async (dir: string): Promise<string[]> => {
    const out: string[] = [];
    for (const ent of await fs.readdir(dir, { withFileTypes: true })) {
      const p = path.join(dir, ent.name);
      if (ent.isDirectory()) {
        out.push(...(await walk(p)));
      } else if (
        ent.name.endsWith(".json") &&
        !(o.exclude?.(ent.name) ?? false)
      ) {
        out.push(p);
      }
    }
    return out;
  };

  const files = (await walk(specsDir)).sort((a, b) => a.localeCompare(b));
  for (const modelPath of files) {
    const resource = path.basename(modelPath, ".json");
    if (o.include && !o.include(resource)) continue;
    const model = JSON.parse(await fs.readFile(modelPath, "utf8"));
    let dirty = false;

    if (patchesDir) {
      const patchFiles = await listRfc6902PatchFiles(
        path.join(patchesDir, resource),
      );
      const applied = await applyRfc6902Files(model, patchFiles, {
        onStalePatch: o.onStalePatch,
        include: (op) => isSmithyPatchPath(op.path),
        label: (f) => `${resource}/${path.basename(f)}`,
      });
      if (applied.errors.length) {
        for (const err of applied.errors) console.error(`❌ bad patch: ${err}`);
        throw new Error(
          `${applied.errors.length} patch operation(s) failed for ${resource} — fix the pointers or delete the patch`,
        );
      }
      if (applied.applied > 0) {
        dirty = true;
        console.log(
          `   patched ${resource}: ${applied.files} file(s), ${applied.applied} op(s)` +
            (applied.stale ? `, ${applied.stale} stale` : ""),
        );
      }
    }

    if (naming === "verbNoun") {
      const { renamed, collisions } = verbNounSmithyModel(model);
      if (renamed > 0) {
        dirty = true;
        console.log(`   verbNoun ${resource}: renamed ${renamed} operation(s)`);
      }
      for (const c of collisions) {
        console.warn(
          `   ⚠️  verbNoun collision ${resource}: ${c} (kept original)`,
        );
      }
    }

    const note = o.transform?.(model, resource);
    if (note) {
      dirty = true;
      console.log(`   ${note}`);
    }

    if (dirty) {
      await fs.writeFile(modelPath, `${JSON.stringify(model, null, 2)}\n`);
    }
  }
};
