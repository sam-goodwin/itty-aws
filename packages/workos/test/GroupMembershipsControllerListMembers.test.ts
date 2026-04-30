import { Effect } from "effect";
import { describe, expect, it } from "vitest";
import { GroupMembershipsControllerListMembers } from "../src/operations/GroupMembershipsControllerListMembers.ts";
import { GroupsControllerCreate } from "../src/operations/GroupsControllerCreate.ts";
import { GroupsControllerDelete } from "../src/operations/GroupsControllerDelete.ts";
import { OrganizationsControllerCreate } from "../src/operations/OrganizationsControllerCreate.ts";
import { OrganizationsControllerDeleteOrganization } from "../src/operations/OrganizationsControllerDeleteOrganization.ts";
import { runEffect, testRunId } from "./setup.ts";

describe("GroupMembershipsControllerListMembers", () => {
  it(
    "lists members of a group",
    async () => {
      const result = await runEffect(
        Effect.gen(function* () {
          const org = yield* OrganizationsControllerCreate({
            name: `distilled-workos-group-members-list-${testRunId}`,
          });
          return yield* Effect.gen(function* () {
            const group = yield* GroupsControllerCreate({
              organizationId: org.id,
              name: `distilled-group-members-${testRunId}`,
            });
            return yield* GroupMembershipsControllerListMembers({
              organizationId: org.id,
              groupId: group.id,
              limit: 5,
            }).pipe(
              Effect.ensuring(
                GroupsControllerDelete({
                  organizationId: org.id,
                  groupId: group.id,
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
      expect(result.object).toBe("list");
      expect(Array.isArray(result.data)).toBe(true);
      expect(result.data.length).toBeLessThanOrEqual(5);
      expect(result.list_metadata).toBeDefined();
      for (const member of result.data) {
        expect(typeof member.id).toBe("string");
        expect(typeof member.user_id).toBe("string");
        expect(typeof member.organization_id).toBe("string");
        expect(["active", "inactive", "pending"]).toContain(member.status);
        expect(typeof member.directory_managed).toBe("boolean");
      }
    },
    { timeout: 60_000 },
  );

  it(
    "fails with NotFound for a non-existent group id",
    async () => {
      const error = await runEffect(
        Effect.gen(function* () {
          const org = yield* OrganizationsControllerCreate({
            name: `distilled-workos-group-members-404-${testRunId}`,
          });
          return yield* GroupMembershipsControllerListMembers({
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
    "fails with Forbidden when listing members of a group in a different tenant",
    async () => {
      const error = await runEffect(
        GroupMembershipsControllerListMembers({
          organizationId: "org_01HFGZ6QYV0000000000000000",
          groupId: `group_does_not_exist_${testRunId}`,
        }).pipe(Effect.flip),
      );
      expect(["Forbidden", "NotFound"]).toContain(error._tag);
    },
    { timeout: 30_000 },
  );
});
