import { Effect } from "effect";
import { describe, expect, it } from "vitest";
import { NotFound } from "../src/errors.ts";
import { getDependencies } from "../src/operations/getDependencies.ts";
import { runEffect, testRunId } from "./setup.ts";

describe("getDependencies", () => {
  it("returns the dependency projects and versions for a known stable slug", async () => {
    // `sodium` is a public, long-lived Modrinth project; the dependencies
    // route does not require auth and returns the resolved project/version
    // arrays it depends on (which may be empty for some projects).
    const result = await runEffect(getDependencies({ id_or_slug: "sodium" }));

    expect(Array.isArray(result.projects ?? [])).toBe(true);
    expect(Array.isArray(result.versions ?? [])).toBe(true);
  });

  it("returns NotFound for a slug that does not exist", async () => {
    // A run-id-suffixed slug is guaranteed not to exist on Modrinth and the
    // /project/{slug}/dependencies route returns 404 for unknown identifiers.
    const error = await runEffect(
      getDependencies({
        id_or_slug: `distilled-mr-missing-${testRunId}`,
      }).pipe(Effect.flip),
    );

    expect(error._tag).toBe("NotFound");
    expect(error).toBeInstanceOf(NotFound);
  });
});
