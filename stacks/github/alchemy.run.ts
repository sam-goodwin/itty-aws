import * as Alchemy from "alchemy";
import * as GitHub from "alchemy/GitHub";
import { localState } from "alchemy/State";
import * as Effect from "effect/Effect";
import * as FileSystem from "effect/FileSystem";
import * as Path from "effect/Path";

/**
 * One GitHub repository per SDK package.
 *
 * Every directory under `packages/` (the SDKs plus `core`) gets a
 * `distilled-<name>` repository under the `alchemy-run` org. Long term these
 * repos hold a per-SDK snapshot so consumers can fetch just the SDK they need
 * at depth 1, instead of cloning this whole monorepo (or its multi-GB spec
 * submodules).
 *
 * The package list is discovered from the filesystem at deploy time, so adding
 * a new SDK package automatically creates its repository on the next deploy.
 *
 * Repositories default to Alchemy's `retain` removal policy: removing a
 * package (or destroying the stack) never deletes a repository on GitHub.
 * State is local (`.alchemy/state`); in CI each run starts from empty state,
 * which is safe here because `GitHub.Repository` converges against the live
 * repository — an existing repo is adopted and its settings synced, not
 * duplicated.
 */

const OWNER = "alchemy-run";

const discoverPackages = Effect.gen(function* () {
  const fs = yield* FileSystem.FileSystem;
  const path = yield* Path.Path;
  const packagesDir = path.join(import.meta.dir, "..", "..", "packages");

  const entries = yield* fs.readDirectory(packagesDir);
  const packages: string[] = [];
  for (const entry of entries.toSorted()) {
    const isPackage = yield* fs.exists(
      path.join(packagesDir, entry, "package.json"),
    );
    if (isPackage) packages.push(entry);
  }
  return packages;
}).pipe(Effect.orDie);

export default Alchemy.Stack(
  "distilled-github",
  {
    providers: GitHub.providers(),
    state: localState(),
  },
  Effect.gen(function* () {
    const packages = yield* discoverPackages;

    const repositories = yield* Effect.all(
      packages.map((pkg) =>
        GitHub.Repository(pkg, {
          owner: OWNER,
          name: `distilled-${pkg}`,
          description:
            pkg === "core"
              ? "Distilled core runtime (@distilled.cloud/core) — snapshot mirror of alchemy-run/distilled"
              : `Distilled ${pkg} SDK (@distilled.cloud/${pkg}) — snapshot mirror of alchemy-run/distilled`,
          visibility: "public",
          autoInit: true,
          hasIssues: false,
          hasProjects: false,
          hasWiki: false,
          deleteBranchOnMerge: true,
          topics: ["distilled", "alchemy", "effect", "sdk"],
        }).pipe(Effect.map((repo) => [pkg, repo.htmlUrl] as const)),
      ),
      { concurrency: 5 },
    );

    return {
      repositories: Object.fromEntries(repositories),
    };
  }),
);
