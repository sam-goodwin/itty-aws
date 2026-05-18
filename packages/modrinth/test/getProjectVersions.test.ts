import { Effect } from "effect";
import { describe, expect, it } from "vitest";
import { NotFound } from "../src/errors.ts";
import { getProjectVersions } from "../src/operations/getProjectVersions.ts";
import { runEffect, testRunId } from "./setup.ts";

describe("getProjectVersions", () => {
  it("returns the version list for a known stable slug", async () => {
    // `sodium` is a public, long-lived Modrinth project with many published
    // versions; the version list route does not require auth.
    const versions = await runEffect(
      getProjectVersions({
        id_or_slug: "sodium",
        include_changelog: false,
      }),
    );

    expect(Array.isArray(versions)).toBe(true);
    expect(versions.length).toBeGreaterThan(0);
    const first = versions[0]!;
    expect(typeof first.id).toBe("string");
    expect(typeof first.project_id).toBe("string");
    expect(typeof first.version_number).toBe("string");
    expect(Array.isArray(first.files)).toBe(true);
  });

  it("filters versions by loader", async () => {
    // The `loaders` query param accepts a JSON-encoded array of loader names.
    // Filtering `sodium` to fabric must yield only fabric-tagged versions.
    const versions = await runEffect(
      getProjectVersions({
        id_or_slug: "sodium",
        loaders: JSON.stringify(["fabric"]),
        include_changelog: false,
      }),
    );

    expect(Array.isArray(versions)).toBe(true);
    for (const v of versions) {
      expect(v.loaders).toContain("fabric");
    }
  });

  it("returns NotFound for a slug that does not exist", async () => {
    // A run-id-suffixed slug is guaranteed not to exist on Modrinth and the
    // /project/{slug}/version route returns 404 for unknown identifiers.
    const error = await runEffect(
      getProjectVersions({
        id_or_slug: `distilled-mr-missing-${testRunId}`,
      }).pipe(Effect.flip),
    );

    expect(error._tag).toBe("NotFound");
    expect(error).toBeInstanceOf(NotFound);
  });
});
