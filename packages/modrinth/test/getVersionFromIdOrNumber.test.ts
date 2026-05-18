import { Effect } from "effect";
import { describe, expect, it } from "vitest";
import { NotFound } from "../src/errors.ts";
import { getProjectVersions } from "../src/operations/getProjectVersions.ts";
import { getVersionFromIdOrNumber } from "../src/operations/getVersionFromIdOrNumber.ts";
import { runEffect, testRunId } from "./setup.ts";

describe("getVersionFromIdOrNumber", () => {
  it("resolves a version by version id under a project slug", async () => {
    // Fetch a current version id from `sodium` and round-trip it through
    // /project/sodium/version/{id}. Modrinth resolves either a version id
    // or a version_number for the second path segment.
    const versions = await runEffect(
      getProjectVersions({
        id_or_slug: "sodium",
        include_changelog: false,
      }),
    );
    expect(versions.length).toBeGreaterThan(0);
    const id = versions[0]!.id;

    const version = await runEffect(
      getVersionFromIdOrNumber({ id_or_slug: "sodium", id_or_number: id }),
    );

    expect(version.id).toBe(id);
    expect(typeof version.project_id).toBe("string");
    expect(typeof version.version_number).toBe("string");
  });

  it("resolves a version by version number under a project slug", async () => {
    // The same route accepts a version_number; Modrinth returns the oldest
    // matching version when the number maps to multiple versions.
    const versions = await runEffect(
      getProjectVersions({
        id_or_slug: "sodium",
        include_changelog: false,
      }),
    );
    expect(versions.length).toBeGreaterThan(0);
    const versionNumber = versions[0]!.version_number;

    const version = await runEffect(
      getVersionFromIdOrNumber({
        id_or_slug: "sodium",
        id_or_number: versionNumber,
      }),
    );

    expect(version.version_number).toBe(versionNumber);
    expect(typeof version.id).toBe("string");
  });

  it("returns NotFound for a version that does not exist on the project", async () => {
    // A run-id-suffixed version_number is guaranteed not to exist on
    // sodium's release list and the route returns 404 for unknown values.
    const error = await runEffect(
      getVersionFromIdOrNumber({
        id_or_slug: "sodium",
        id_or_number: `distilled-mr-missing-${testRunId}`,
      }).pipe(Effect.flip),
    );

    expect(error._tag).toBe("NotFound");
    expect(error).toBeInstanceOf(NotFound);
  });
});
