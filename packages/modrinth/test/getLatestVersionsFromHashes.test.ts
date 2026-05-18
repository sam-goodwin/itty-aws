import { describe, expect, it } from "vitest";
import { getLatestVersionsFromHashes } from "../src/operations/getLatestVersionsFromHashes.ts";
import { getProjectVersions } from "../src/operations/getProjectVersions.ts";
import { runEffect, testRunId } from "./setup.ts";

describe("getLatestVersionsFromHashes", () => {
  it("resolves the latest version for each matching sha1 hash", async () => {
    // POST /version_files/update accepts a list of sha1/sha512 hashes plus
    // a loader/game_version filter and returns a Record<hash, Version>
    // keyed by the hash that matched. We pull two real sha1 hashes off the
    // sodium project and use sodium's own loader/game_version set so the
    // candidate filter actually resolves.
    const versions = await runEffect(
      getProjectVersions({
        id_or_slug: "sodium",
        include_changelog: false,
      }),
    );
    expect(versions.length).toBeGreaterThanOrEqual(2);
    const head = versions[0]!;
    const sha1A = head.files[0]!.hashes.sha1;
    const sha1B = versions[1]!.files[0]!.hashes.sha1;
    expect(typeof sha1A).toBe("string");
    expect(typeof sha1B).toBe("string");

    const result = await runEffect(
      getLatestVersionsFromHashes({
        hashes: [sha1A as string, sha1B as string],
        algorithm: "sha1",
        loaders: [...head.loaders],
        game_versions: [...head.game_versions],
      }),
    );

    expect(typeof result).toBe("object");
    const entries = Object.values(result);
    expect(entries.length).toBeGreaterThanOrEqual(1);
    for (const version of entries) {
      expect(version.project_id).toBe(head.project_id);
      expect(typeof version.id).toBe("string");
      expect(typeof version.version_number).toBe("string");
    }
  });

  it("resolves the latest version for each matching sha512 hash", async () => {
    // The same route accepts sha512 hashes when `algorithm` is "sha512".
    const versions = await runEffect(
      getProjectVersions({
        id_or_slug: "sodium",
        include_changelog: false,
      }),
    );
    expect(versions.length).toBeGreaterThan(0);
    const head = versions[0]!;
    const sha512 = head.files[0]!.hashes.sha512;
    expect(typeof sha512).toBe("string");

    const result = await runEffect(
      getLatestVersionsFromHashes({
        hashes: [sha512 as string],
        algorithm: "sha512",
        loaders: [...head.loaders],
        game_versions: [...head.game_versions],
      }),
    );

    const entries = Object.values(result);
    expect(entries.length).toBe(1);
    expect(entries[0]!.project_id).toBe(head.project_id);
  });

  it("returns an empty record when no hash matches the loader/game_version filter", async () => {
    // Real sodium hashes paired with a loader/game_version sodium has never
    // shipped for produces an empty candidate set. Modrinth answers 200 with
    // an empty object — this is the bulk-route equivalent of NotFound for
    // the single-hash endpoint and is *not* a BadRequest.
    const versions = await runEffect(
      getProjectVersions({
        id_or_slug: "sodium",
        include_changelog: false,
      }),
    );
    expect(versions.length).toBeGreaterThan(0);
    const sha1 = versions[0]!.files[0]!.hashes.sha1;
    expect(typeof sha1).toBe("string");

    const result = await runEffect(
      getLatestVersionsFromHashes({
        hashes: [sha1 as string],
        algorithm: "sha1",
        loaders: ["forge"],
        game_versions: ["1.7.10"],
      }),
    );

    expect(result).toEqual({});
  });

  it("returns an empty record for hashes that do not match any uploaded file", async () => {
    // A 40-character hex string shaped like a sha1 hash with testRunId baked
    // in cannot collide with any real file. Modrinth still responds 200 with
    // an empty record rather than 4xx for unmatched hashes.
    const hash = "0".repeat(32) + testRunId;
    const result = await runEffect(
      getLatestVersionsFromHashes({
        hashes: [hash],
        algorithm: "sha1",
        loaders: ["fabric"],
        game_versions: ["1.20.1"],
      }),
    );

    expect(result).toEqual({});
  });

  // BadRequest note:
  //   Modrinth's `/version_files/update` route only returns 400 when the
  //   request body is missing required fields, contains non-string elements
  //   in `hashes`/`loaders`/`game_versions`, or is not a JSON struct at all.
  //   The SDK's typed input schema (`Schema.Array(Schema.String)` for the
  //   three string-array fields and `Schema.Literals(["sha1", "sha512"])`
  //   for `algorithm`) rejects every one of those shapes at `Schema.encode`
  //   time before any HTTP request leaves the client, so there is no input
  //   the typed SDK can send that Modrinth answers with a 400. Such failures
  //   surface as a synchronous `SchemaError`, not a `BadRequest`, so the
  //   `BadRequest` branch is unreachable through the SDK and cannot be
  //   exercised here without bypassing the SDK entirely.
});
