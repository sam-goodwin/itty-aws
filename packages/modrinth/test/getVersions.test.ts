import { Effect } from "effect";
import { describe, expect, it } from "vitest";
import { BadRequest } from "../src/errors.ts";
import { getProjectVersions } from "../src/operations/getProjectVersions.ts";
import { getVersions } from "../src/operations/getVersions.ts";
import { runEffect } from "./setup.ts";

describe("getVersions", () => {
  it("returns the requested versions for a list of valid ids", async () => {
    // Fetch the latest sodium version ids and round-trip the first two
    // through GET /versions?ids=[...]. The route does not require auth and
    // returns the matching version objects.
    const sodiumVersions = await runEffect(
      getProjectVersions({
        id_or_slug: "sodium",
        include_changelog: false,
      }),
    );
    expect(sodiumVersions.length).toBeGreaterThan(0);
    const ids = sodiumVersions.slice(0, 2).map((v) => v.id);

    const versions = await runEffect(
      getVersions({ ids: JSON.stringify(ids) }),
    );

    expect(Array.isArray(versions)).toBe(true);
    expect(versions.length).toBe(ids.length);
    for (const id of ids) {
      expect(versions.some((v) => v.id === id)).toBe(true);
    }
  });

  it("returns BadRequest when the ids query is not valid JSON", async () => {
    // Modrinth parses `ids` as a JSON array; a non-JSON value yields a 400
    // invalid_input.
    const error = await runEffect(
      getVersions({ ids: "not-json" }).pipe(Effect.flip),
    );

    expect(error._tag).toBe("BadRequest");
    expect(error).toBeInstanceOf(BadRequest);
  });
});
