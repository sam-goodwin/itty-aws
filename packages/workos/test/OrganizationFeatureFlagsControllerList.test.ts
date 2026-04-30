import { Effect } from "effect";
import { describe, expect, it } from "vitest";
import { OrganizationFeatureFlagsControllerList } from "../src/operations/OrganizationFeatureFlagsControllerList.ts";
import { OrganizationsControllerCreate } from "../src/operations/OrganizationsControllerCreate.ts";
import { OrganizationsControllerDeleteOrganization } from "../src/operations/OrganizationsControllerDeleteOrganization.ts";
import { runEffect, testRunId } from "./setup.ts";

describe("OrganizationFeatureFlagsControllerList", () => {
  it(
    "lists feature flags for an organization",
    async () => {
      const result = await runEffect(
        Effect.gen(function* () {
          const created = yield* OrganizationsControllerCreate({
            name: `distilled-workos-org-flags-list-${testRunId}`,
          });
          return yield* OrganizationFeatureFlagsControllerList({
            organizationId: created.id,
            limit: 5,
          }).pipe(
            Effect.ensuring(
              OrganizationsControllerDeleteOrganization({
                id: created.id,
              }).pipe(Effect.ignore),
            ),
          );
        }),
      );
      expect(result).toBeDefined();
      expect(result.object).toBe("list");
      expect(Array.isArray(result.data)).toBe(true);
      expect(result.data.length).toBeLessThanOrEqual(5);
      expect(result.list_metadata).toBeDefined();
      for (const flag of result.data) {
        expect(typeof flag.id).toBe("string");
        expect(typeof flag.slug).toBe("string");
        expect(typeof flag.name).toBe("string");
        expect(typeof flag.enabled).toBe("boolean");
        expect(typeof flag.default_value).toBe("boolean");
        expect(Array.isArray(flag.tags)).toBe(true);
      }
    },
    { timeout: 60_000 },
  );

  it(
    "fails with NotFound for a non-existent organization id",
    async () => {
      const error = await runEffect(
        OrganizationFeatureFlagsControllerList({
          organizationId: `organization_does_not_exist_${testRunId}`,
        }).pipe(Effect.flip),
      );
      expect(error._tag).toBe("NotFound");
    },
    { timeout: 30_000 },
  );
});
