import { Effect } from "effect";
import { describe, expect, it } from "vitest";
import { NotFound } from "../src/errors.ts";
import { checkProjectValidity } from "../src/operations/checkProjectValidity.ts";
import { runEffect, testRunId } from "./setup.ts";

describe("checkProjectValidity", () => {
  it("returns the project id for a known stable slug", async () => {
    // `sodium` is a public, long-lived Modrinth project; the validity check
    // does not require auth and resolves the slug to a project id.
    const result = await runEffect(checkProjectValidity({ id_or_slug: "sodium" }));

    expect(typeof result.id).toBe("string");
    expect((result.id ?? "").length).toBeGreaterThan(0);
  });

  it("returns NotFound for a slug that does not exist", async () => {
    // A run-id-suffixed slug is guaranteed not to exist on Modrinth and the
    // /project/{slug}/check route returns 404 for unknown identifiers.
    const error = await runEffect(
      checkProjectValidity({
        id_or_slug: `distilled-mr-missing-${testRunId}`,
      }).pipe(Effect.flip),
    );

    expect(error._tag).toBe("NotFound");
    expect(error).toBeInstanceOf(NotFound);
  });
});
