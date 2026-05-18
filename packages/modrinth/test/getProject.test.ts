import { Effect } from "effect";
import { describe, expect, it } from "vitest";
import { NotFound } from "../src/errors.ts";
import { getProject } from "../src/operations/getProject.ts";
import { runEffect, testRunId } from "./setup.ts";

// A well-known, long-lived public Modrinth project used as a stable read fixture.
// `sodium` has been published and approved on Modrinth for years.
const STABLE_PROJECT_SLUG = "sodium";

describe("getProject", () => {
  it("returns a project when fetched by slug", async () => {
    const result = await runEffect(
      getProject({ id_or_slug: STABLE_PROJECT_SLUG }),
    );

    expect(typeof result.id).toBe("string");
    expect(result.id.length).toBeGreaterThan(0);
    expect(typeof result.team).toBe("string");
    expect(typeof result.published).toBe("string");
    expect(typeof result.updated).toBe("string");
    expect(typeof result.followers).toBe("number");
  });

  it("returns the same project when fetched by id (round-trip via slug)", async () => {
    const bySlug = await runEffect(
      getProject({ id_or_slug: STABLE_PROJECT_SLUG }),
    );
    const byId = await runEffect(getProject({ id_or_slug: bySlug.id }));

    expect(byId.id).toBe(bySlug.id);
    expect(byId.team).toBe(bySlug.team);
  });

  it("returns NotFound for a non-existent project slug", async () => {
    const error = await runEffect(
      getProject({
        id_or_slug: `distilled-mr-missing-${testRunId}`,
      }).pipe(Effect.flip),
    );

    expect(error._tag).toBe("NotFound");
    expect(error).toBeInstanceOf(NotFound);
  });
});
