/**
 * Shared SDK metadata file convention.
 *
 * Every pipeline agent reads and updates a JSON file at
 * `.ai-workspace/<name>-metadata.json`. It is a free-form cache of everything
 * the agents have learned about the SDK: layout, auth, operations, error
 * classes, test framework, etc. Because every agent reads it first, downstream
 * stages don't have to re-discover facts that earlier stages already figured
 * out.
 *
 * The scripts in this repo don't strictly type or validate the contents —
 * Claude reads and writes it via the normal Read/Write tools. This module
 * exposes the canonical path and a prompt snippet to keep the convention
 * consistent across every agent.
 */
import { Effect } from "effect";
import * as FileSystem from "effect/FileSystem";
import * as Path from "effect/Path";

/** Absolute path to the metadata file for a given SDK. */
export const metadataPath = (
  root: string,
  name: string,
): Effect.Effect<string, never, Path.Path> =>
  Effect.gen(function* () {
    const path = yield* Path.Path;
    return path.join(root, ".ai-workspace", `${name}-metadata.json`);
  });

/** Path relative to the repo root (used in prompts). */
export const metadataRelPath = (name: string): string =>
  `.ai-workspace/${name}-metadata.json`;

/** Ensure the .ai-workspace directory exists. */
export const ensureMetadataDir = (
  root: string,
): Effect.Effect<void, never, FileSystem.FileSystem | Path.Path> =>
  Effect.gen(function* () {
    const fs = yield* FileSystem.FileSystem;
    const path = yield* Path.Path;
    const dir = path.join(root, ".ai-workspace");
    yield* fs.makeDirectory(dir, { recursive: true }).pipe(Effect.ignore);
  });

/**
 * Write the initial metadata skeleton if the file doesn't already exist.
 * Called by create-sdk after scaffolding so downstream agents have something
 * to read and append to.
 *
 * `userNote`, if provided, is stored under the `userNote` key and surfaced
 * to every downstream agent as high-priority guidance from the human. If
 * the metadata file already exists, a new non-empty `userNote` will be
 * merged in (not lost) and older `userNote` content is appended to `notes`.
 */
export const initMetadata = (
  root: string,
  name: string,
  pkgDir: string,
  userNote?: string,
): Effect.Effect<void, never, FileSystem.FileSystem | Path.Path> =>
  Effect.gen(function* () {
    const fs = yield* FileSystem.FileSystem;
    yield* ensureMetadataDir(root);
    const p = yield* metadataPath(root, name);
    const note = userNote?.trim() ?? "";
    const exists = yield* fs.exists(p).pipe(Effect.orElseSucceed(() => false));
    if (exists) {
      if (!note) return;
      // Merge the new note into the existing file without losing other keys.
      const raw = yield* fs
        .readFileString(p)
        .pipe(Effect.orElseSucceed(() => "{}"));
      let parsed: Record<string, unknown> = {};
      try {
        parsed = JSON.parse(raw) as Record<string, unknown>;
      } catch {
        parsed = {};
      }
      const previous =
        typeof parsed.userNote === "string" ? parsed.userNote : "";
      if (previous && previous !== note) {
        const notesArr = Array.isArray(parsed.notes)
          ? (parsed.notes as unknown[])
          : [];
        notesArr.push(`[previous userNote] ${previous}`);
        parsed.notes = notesArr;
      }
      parsed.userNote = note;
      yield* fs
        .writeFileString(p, JSON.stringify(parsed, null, 2))
        .pipe(Effect.ignore);
      return;
    }
    const skeleton = {
      name,
      pkgDir,
      userNote: note || null,
      // Populated by later stages. Free-form — Claude may add more keys.
      layout: null, // "operations" | "services"
      testDir: null, // "tests" | "test"
      framework: null, // "vitest-runEffect" | "vitest-effect"
      setupFile: null,
      baseUrl: null,
      authScheme: null,
      envVars: [],
      operations: [],
      errorClasses: [],
      notes: [],
    };
    yield* fs
      .writeFileString(p, JSON.stringify(skeleton, null, 2))
      .pipe(Effect.ignore);
  });

/**
 * Standard prompt snippet to include in every agent. Instructs Claude to
 * read the metadata file before acting and update it as new facts emerge.
 */
export const metadataPromptSection = (name: string): string => {
  const p = metadataRelPath(name);
  return `
## Shared SDK metadata: ${p}

Every pipeline agent reads and updates \`${p}\` — it's a shared cache of facts
about this SDK. **Read it FIRST** before exploring the package: it likely
already tells you the layout, test framework, operations, error classes, and
auth scheme. That saves time and tokens.

As you discover new facts (or correct stale ones), update the file. Use the
Read and Write tools. The file is JSON and uses these well-known keys:

- \`userNote\`: **HIGH PRIORITY guidance from the human who ran the pipeline.**
  If this is non-null, read it before anything else and treat it as a directive.
  It often contains things like "the spec is at path X in the submodule" or
  "only include operations under scope Y" that you would otherwise have to
  guess. Never overwrite or ignore it.
- \`layout\`: \`"operations"\` (flat, e.g. Neon) or \`"services"\` (grouped, e.g. Cloudflare)
- \`testDir\`: \`"tests"\` or \`"test"\` — whichever directory the SDK uses
- \`framework\`: \`"vitest-runEffect"\` (Neon-style) or \`"vitest-effect"\` (Cloudflare-style)
- \`setupFile\`: relative path to the test helper (e.g. \`tests/setup.ts\`)
- \`baseUrl\`: API base URL (empty string if not yet known)
- \`authScheme\`: short description (e.g. \`"Bearer\"\`, \`"X-API-Key\"\`, \`"OAuth2\"\`)
- \`envVars\`: list of required environment variable names
- \`operations\`: array of \`{ name, file, httpMethod, errors, testFile }\`
- \`errorClasses\`: custom error class names defined in \`src/errors.ts\`
- \`notes\`: free-form strings for gotchas future agents should know

If any of these keys are \`null\`, an empty string, or an empty array, it means
nobody has filled that in yet — populate it once you learn the answer. Do not
delete unknown keys other agents may have added.
`.trim();
};
