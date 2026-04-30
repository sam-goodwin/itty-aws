import { Effect } from "effect";
import { describe, expect, it } from "vitest";
import { GroupsControllerCreate } from "../src/operations/GroupsControllerCreate.ts";
import { GroupsControllerDelete } from "../src/operations/GroupsControllerDelete.ts";
import { GroupsControllerGet } from "../src/operations/GroupsControllerGet.ts";
import { OrganizationsControllerCreate } from "../src/operations/OrganizationsControllerCreate.ts";
import { OrganizationsControllerDeleteOrganization } from "../src/operations/OrganizationsControllerDeleteOrganization.ts";
import { runEffect, testRunId } from "./setup.ts";

describe("GroupsControllerGet", () => {
  it(
    "gets a group by id",
    async () => {
      const groupName = `distilled-group-get-${testRunId}`;
      const result = await runEffect(
        Effect.gen(function* () {
          const org = yield* OrganizationsControllerCreate({
            name: `distilled-workos-groups-get-${testRunId}`,
          });
          return yield* Effect.gen(function* () {
            const created = yield* GroupsControllerCreate({
              organizationId: org.id,
              name: groupName,
            });
            return yield* GroupsControllerGet({
              organizationId: org.id,
              groupId: created.id,
            }).pipe(
              Effect.ensuring(
                GroupsControllerDelete({
                  organizationId: org.id,
                  groupId: created.id,
                }).pipe(Effect.ignore),
              ),
            );
          }).pipe(
            Effect.ensuring(
              OrganizationsControllerDeleteOrganization({
                id: org.id,
              }).pipe(Effect.ignore),
            ),
          );
        }),
      );
      expect(result).toBeDefined();
      expect(typeof result.id).toBe("string");
      expect(typeof result.organization_id).toBe("string");
      expect(result.name).toBe(groupName);
      expect(typeof result.created_at).toBe("string");
      expect(typeof result.updated_at).toBe("string");
    },
    { timeout: 60_000 },
  );

  it(
    "fails with NotFound for a non-existent group id",
    async () => {
      const error = await runEffect(
        Effect.gen(function* () {
          const org = yield* OrganizationsControllerCreate({
            name: `distilled-workos-groups-get-404-${testRunId}`,
          });
          return yield* GroupsControllerGet({
            organizationId: org.id,
            groupId: `group_does_not_exist_${testRunId}`,
          }).pipe(
            Effect.ensuring(
              OrganizationsControllerDeleteOrganization({
                id: org.id,
              }).pipe(Effect.ignore),
            ),
          );
        }).pipe(Effect.flip),
      );
      expect(error._tag).toBe("NotFound");
    },
    { timeout: 60_000 },
  );

  it(
    "fails with Forbidden when getting a group in a different tenant",
    async () => {
      const error = await runEffect(
        GroupsControllerGet({
          organizationId: "org_01HFGZ6QYV0000000000000000",
          groupId: `group_does_not_exist_${testRunId}`,
        }).pipe(Effect.flip),
      );
      expect(["Forbidden", "NotFound"]).toContain(error._tag);
    },
    { timeout: 30_000 },
  );
});
