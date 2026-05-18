import { Effect } from "effect";
import { describe, expect, it } from "vitest";
import { BadRequest, NotFound } from "../src/errors.ts";
import { getProjectVersions } from "../src/operations/getProjectVersions.ts";
import { getVersion } from "../src/operations/getVersion.ts";
import { runEffect, testRunId } from "./setup.ts";

describe("getVersion", () => {
  it("returns the version metadata for a known stable version", async () => {
    // Fetch the current version list for `sodium` and use the first id, since
    // Modrinth's per-version ids are stable identifiers but the latest one
    // changes over time as new releases are published.
    const versions = await runEffect(
      getProjectVersions({
        id_or_slug: "sodium",
        include_changelog: false,
      }),
    );
    expect(versions.length).toBeGreaterThan(0);
    const id = versions[0]!.id;

    const version = await runEffect(getVersion({ id }));

    expect(version.id).toBe(id);
    expect(typeof version.project_id).toBe("string");
    expect(typeof version.version_number).toBe("string");
    expect(Array.isArray(version.files)).toBe(true);
  });

  it("returns BadRequest for a malformed version id", async () => {
    // Modrinth version ids are 8-character base62 strings. A value with
    // hyphens fails the format validation and yields a 400 invalid_input.
    const error = await runEffect(
      getVersion({ id: "not-a-valid-id" }).pipe(Effect.flip),
    );

    expect(error._tag).toBe("BadRequest");
    expect(error).toBeInstanceOf(BadRequest);
  });

  it("returns NotFound for a version id that does not exist", async () => {
    // An 8-character base62 id with the testRunId baked in is well-formed
    // but guaranteed not to exist; Modrinth returns 404 for it.
    const id = `zz${testRunId.slice(0, 6)}`;
    const error = await runEffect(getVersion({ id }).pipe(Effect.flip));

    expect(error._tag).toBe("NotFound");
    expect(error).toBeInstanceOf(NotFound);
  });
});
