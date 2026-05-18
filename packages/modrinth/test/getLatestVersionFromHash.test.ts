import { Effect } from "effect";
import { describe, expect, it } from "vitest";
import { NotFound } from "../src/errors.ts";
import { getLatestVersionFromHash } from "../src/operations/getLatestVersionFromHash.ts";
import { getProjectVersions } from "../src/operations/getProjectVersions.ts";
import { runEffect, testRunId } from "./setup.ts";

describe("getLatestVersionFromHash", () => {
  it("resolves the latest version of sodium from a real sha1 hash", async () => {
    // POST /version_file/{hash}/update accepts a sha1/sha512 hash plus loaders
    // and game_versions in the body and returns the latest matching version.
    // We pull a real (sha1, loaders, game_versions) tuple from the public
    // sodium project so the path resolves and Modrinth has a non-empty
    // candidate set.
    const versions = await runEffect(
      getProjectVersions({
        id_or_slug: "sodium",
        include_changelog: false,
      }),
    );
    expect(versions.length).toBeGreaterThan(0);
    const head = versions[0]!;
    const sha1 = head.files[0]!.hashes.sha1;
    expect(typeof sha1).toBe("string");

    const result = await runEffect(
      getLatestVersionFromHash({
        hash: sha1 as string,
        algorithm: "sha1",
        loaders: [...head.loaders],
        game_versions: [...head.game_versions],
      }),
    );

    expect(typeof result.id).toBe("string");
    expect(typeof result.project_id).toBe("string");
    expect(result.project_id).toBe(head.project_id);
  });

  it("returns NotFound for a hash that does not match any file", async () => {
    // A 40-character hex string is shaped like a sha1 hash but with the
    // testRunId baked in is guaranteed not to match any uploaded file;
    // Modrinth returns 404 for it before evaluating the loader/game_version
    // filters.
    const hash = "0".repeat(32) + testRunId;
    const error = await runEffect(
      getLatestVersionFromHash({
        hash,
        algorithm: "sha1",
        loaders: ["fabric"],
        game_versions: ["1.20.1"],
      }).pipe(Effect.flip),
    );

    expect(error._tag).toBe("NotFound");
    expect(error).toBeInstanceOf(NotFound);
  });

  it("returns NotFound when no version matches the requested loaders/game_versions", async () => {
    // The route also returns 404 when the hash resolves but no candidate
    // version satisfies the loader/game_version filter. We reuse a real sodium
    // sha1 hash and pair it with a loader Modrinth knows about but sodium
    // never ships for, so the candidate set is empty and the API responds 404
    // (BadRequest is reserved for malformed bodies that the SDK schema rejects
    // before the request leaves the client).
    const versions = await runEffect(
      getProjectVersions({
        id_or_slug: "sodium",
        include_changelog: false,
      }),
    );
    expect(versions.length).toBeGreaterThan(0);
    const sha1 = versions[0]!.files[0]!.hashes.sha1;
    expect(typeof sha1).toBe("string");

    const error = await runEffect(
      getLatestVersionFromHash({
        hash: sha1 as string,
        algorithm: "sha1",
        loaders: ["forge"],
        game_versions: ["1.7.10"],
      }).pipe(Effect.flip),
    );

    expect(error._tag).toBe("NotFound");
    expect(error).toBeInstanceOf(NotFound);
  });
});
