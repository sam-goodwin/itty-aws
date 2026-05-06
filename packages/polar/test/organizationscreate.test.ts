import * as Effect from "effect/Effect";
import { describe, expect, it } from "vitest";
import { organizationscreate } from "../src/operations/organizationscreate.ts";
import { hasLivePolarCredentials, runEffect, testRunId } from "./setup.ts";

const describeLive = hasLivePolarCredentials ? describe : describe.skip;

describeLive("organizationscreate", () => {
  it(
    "creates a new organization for the authenticated user",
    { timeout: 30_000 },
    async () => {
      const slug = `distilled-orgcreate-${testRunId}`.slice(0, 48);
      const name = `Distilled Test Org ${testRunId}`;

      const created = await runEffect(
        organizationscreate({
          name,
          slug,
        }),
      );

      expect(created.id).toBeTruthy();
      expect(created.name).toBe(name);
      expect(created.slug).toBe(slug);
      expect(typeof created.created_at).toBe("string");
    },
  );

  it(
    "surfaces validation details for an invalid slug",
    { timeout: 30_000 },
    async () => {
      const error = await runEffect(
        organizationscreate({
          name: `Distilled Invalid ${testRunId}`,
          slug: "Invalid Slug With Spaces!",
        }).pipe(Effect.flip),
      );

      expect(error._tag).toBe("RequestValidationError");
      expect(error.message).toContain("slug");
    },
  );
});
