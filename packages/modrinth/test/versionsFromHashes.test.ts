import { describe, expect, it } from "vitest";
import { getProjectVersions } from "../src/operations/getProjectVersions.ts";
import { versionsFromHashes } from "../src/operations/versionsFromHashes.ts";
import { runEffect, testRunId } from "./setup.ts";

describe("versionsFromHashes", () => {
  it("returns a record of versions keyed by sha1 hash", async () => {
    // POST /version_files takes an array of sha1/sha512 hashes plus an
    // algorithm and returns a Record<hash, Version> for every hash that
    // resolves. We harvest two real sha1 hashes off sodium's two latest
    // versions so the response actually has entries to assert on.
    const versions = await runEffect(
      getProjectVersions({
        id_or_slug: "sodium",
        include_changelog: false,
      }),
    );
    expect(versions.length).toBeGreaterThanOrEqual(2);
    const sha1A = versions[0]!.files[0]!.hashes.sha1;
    const sha1B = versions[1]!.files[0]!.hashes.sha1;
    expect(typeof sha1A).toBe("string");
    expect(typeof sha1B).toBe("string");

    const result = await runEffect(
      versionsFromHashes({
        hashes: [sha1A as string, sha1B as string],
        algorithm: "sha1",
      }),
    );

    expect(typeof result).toBe("object");
    expect(Object.keys(result).length).toBeGreaterThanOrEqual(1);
    // Modrinth keys the response by the matched file's hash. Both of our
    // requested hashes correspond to sodium versions, so every entry should
    // share the sodium project id.
    for (const version of Object.values(result)) {
      expect(version.project_id).toBe(versions[0]!.project_id);
      expect(typeof version.id).toBe("string");
      expect(typeof version.version_number).toBe("string");
    }
  });

  it("returns a record of versions keyed by sha512 hash", async () => {
    // The same route accepts sha512 hashes when `algorithm` is "sha512".
    const versions = await runEffect(
      getProjectVersions({
        id_or_slug: "sodium",
        include_changelog: false,
      }),
    );
    expect(versions.length).toBeGreaterThan(0);
    const sha512 = versions[0]!.files[0]!.hashes.sha512;
    expect(typeof sha512).toBe("string");

    const result = await runEffect(
      versionsFromHashes({
        hashes: [sha512 as string],
        algorithm: "sha512",
      }),
    );

    const entries = Object.values(result);
    expect(entries.length).toBe(1);
    expect(entries[0]!.id).toBe(versions[0]!.id);
  });

  it("returns an empty record when no hashes match any file", async () => {
    // For hashes that don't match any uploaded file Modrinth returns 200 with
    // an empty object — this is not BadRequest, just a non-match. We bake
    // testRunId into a sha1-shaped string to guarantee no collision with real
    // files.
    const hash = "0".repeat(32) + testRunId;
    const result = await runEffect(
      versionsFromHashes({
        hashes: [hash],
        algorithm: "sha1",
      }),
    );

    expect(result).toEqual({});
  });

  // BadRequest note:
  //   Modrinth's `/version_files` route only returns 400 when the body is
  //   missing `hashes`/`algorithm`, contains non-string elements in `hashes`,
  //   or is not a struct at all. The SDK's typed input schema
  //   (`Schema.Array(Schema.String)` for hashes, `Schema.Literals(["sha1",
  //   "sha512"])` for algorithm) rejects every one of those shapes at
  //   `Schema.encode` time before any HTTP request leaves the client, so
  //   there is no input the typed SDK can send that Modrinth answers with a
  //   400 BadRequest. All malformed-body 400s surface as a synchronous
  //   `SchemaError`, not a `BadRequest`, so they cannot be exercised here
  //   without bypassing the SDK entirely.
});
