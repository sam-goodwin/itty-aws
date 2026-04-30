import { Effect } from "effect";
import { describe, expect, it } from "vitest";
import { GroupsControllerList } from "../src/operations/GroupsControllerList.ts";
import { OrganizationsControllerCreate } from "../src/operations/OrganizationsControllerCreate.ts";
import { OrganizationsControllerDeleteOrganization } from "../src/operations/OrganizationsControllerDeleteOrganization.ts";
import { runEffect, testRunId } from "./setup.ts";

describe("GroupsControllerList", () => {
  it(
    "lists groups for an organization",
    async () => {
      const result = await runEffect(
        Effect.gen(function* () {
          const created = yield* OrganizationsControllerCreate({
            name: `distilled-workos-groups-list-${testRunId}`,
          });
          return yield* GroupsControllerList({
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
      for (const group of result.data) {
        expect(typeof group.id).toBe("string");
        expect(typeof group.organization_id).toBe("string");
        expect(typeof group.name).toBe("string");
        expect(typeof group.created_at).toBe("string");
        expect(typeof group.updated_at).toBe("string");
      }
    },
    { timeout: 60_000 },
  );

  it(
    "fails with NotFound for a non-existent organization id",
    async () => {
      const error = await runEffect(
        GroupsControllerList({
          organizationId: `organization_does_not_exist_${testRunId}`,
        }).pipe(Effect.flip),
      );
      expect(error._tag).toBe("NotFound");
    },
    { timeout: 30_000 },
  );

  it(
    "fails with Forbidden when listing groups in a different tenant",
    async () => {
      const error = await runEffect(
        GroupsControllerList({
          organizationId: "org_01HFGZ6QYV0000000000000000",
        }).pipe(Effect.flip),
      );
      expect(["Forbidden", "NotFound"]).toContain(error._tag);
    },
    { timeout: 30_000 },
  );
});
