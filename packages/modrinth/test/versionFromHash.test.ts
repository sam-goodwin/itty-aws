import { Effect } from "effect";
import { describe, expect, it } from "vitest";
import { NotFound } from "../src/errors.ts";
import { getProjectVersions } from "../src/operations/getProjectVersions.ts";
import { versionFromHash } from "../src/operations/versionFromHash.ts";
import { runEffect, testRunId } from "./setup.ts";

describe("versionFromHash", () => {
  it("resolves a version from a real sha1 hash", async () => {
    // Pull a real (sha1, sha512) pair off the latest sodium version's primary
    // file and round-trip it through GET /version_file/{hash}. The route
    // does not require auth and returns the matching version object.
    const versions = await runEffect(
      getProjectVersions({
        id_or_slug: "sodium",
        include_changelog: false,
      }),
    );
    expect(versions.length).toBeGreaterThan(0);
    const file = versions[0]!.files[0]!;
    const sha1 = file.hashes.sha1;
    expect(typeof sha1).toBe("string");

    const result = await runEffect(
      versionFromHash({ hash: sha1 as string, algorithm: "sha1" }),
    );

    expect(result.id).toBe(versions[0]!.id);
    expect(typeof result.project_id).toBe("string");
    expect(typeof result.version_number).toBe("string");
  });

  it("resolves a version from a real sha512 hash", async () => {
    // The same route accepts sha512 hashes when `algorithm` is set
    // accordingly.
    const versions = await runEffect(
      getProjectVersions({
        id_or_slug: "sodium",
        include_changelog: false,
      }),
    );
    expect(versions.length).toBeGreaterThan(0);
    const file = versions[0]!.files[0]!;
    const sha512 = file.hashes.sha512;
    expect(typeof sha512).toBe("string");

    const result = await runEffect(
      versionFromHash({ hash: sha512 as string, algorithm: "sha512" }),
    );

    expect(result.id).toBe(versions[0]!.id);
  });

  it("returns NotFound for a hash that does not match any file", async () => {
    // A 40-character hex string is shaped like a sha1 hash but with the
    // testRunId baked in is guaranteed not to match any uploaded file.
    const hash = "0".repeat(32) + testRunId;
    const error = await runEffect(
      versionFromHash({ hash, algorithm: "sha1" }).pipe(Effect.flip),
    );

    expect(error._tag).toBe("NotFound");
    expect(error).toBeInstanceOf(NotFound);
  });
});
