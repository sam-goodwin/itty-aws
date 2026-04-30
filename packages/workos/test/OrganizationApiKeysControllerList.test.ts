import { Effect } from "effect";
import { describe, expect, it } from "vitest";
import { OrganizationApiKeysControllerList } from "../src/operations/OrganizationApiKeysControllerList.ts";
import { OrganizationsControllerCreate } from "../src/operations/OrganizationsControllerCreate.ts";
import { OrganizationsControllerDeleteOrganization } from "../src/operations/OrganizationsControllerDeleteOrganization.ts";
import { runEffect, testRunId } from "./setup.ts";

describe("OrganizationApiKeysControllerList", () => {
  it(
    "lists API keys for an organization",
    async () => {
      const result = await runEffect(
        Effect.gen(function* () {
          const created = yield* OrganizationsControllerCreate({
            name: `distilled-workos-api-keys-list-${testRunId}`,
          });
          return yield* OrganizationApiKeysControllerList({
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
      for (const key of result.data) {
        expect(typeof key.id).toBe("string");
        expect(typeof key.name).toBe("string");
        expect(typeof key.obfuscated_value).toBe("string");
        expect(Array.isArray(key.permissions)).toBe(true);
      }
    },
    { timeout: 60_000 },
  );

  it(
    "fails with NotFound for a non-existent organization id",
    async () => {
      const error = await runEffect(
        OrganizationApiKeysControllerList({
          organizationId: `organization_does_not_exist_${testRunId}`,
        }).pipe(Effect.flip),
      );
      expect(error._tag).toBe("NotFound");
    },
    { timeout: 30_000 },
  );
});
