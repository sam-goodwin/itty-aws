import { Effect } from "effect";
import { describe, expect, it } from "vitest";
import { GroupMembershipsControllerAddMember } from "../src/operations/GroupMembershipsControllerAddMember.ts";
import { GroupMembershipsControllerListMembers } from "../src/operations/GroupMembershipsControllerListMembers.ts";
import { GroupMembershipsControllerRemoveMember } from "../src/operations/GroupMembershipsControllerRemoveMember.ts";
import { GroupsControllerCreate } from "../src/operations/GroupsControllerCreate.ts";
import { GroupsControllerDelete } from "../src/operations/GroupsControllerDelete.ts";
import { OrganizationsControllerCreate } from "../src/operations/OrganizationsControllerCreate.ts";
import { OrganizationsControllerDeleteOrganization } from "../src/operations/OrganizationsControllerDeleteOrganization.ts";
import { UserlandUserOrganizationMembershipsControllerList } from "../src/operations/UserlandUserOrganizationMembershipsControllerList.ts";
import { UserlandUsersControllerList } from "../src/operations/UserlandUsersControllerList.ts";
import { runEffect, testRunId } from "./setup.ts";

describe("GroupMembershipsControllerRemoveMember", () => {
  it(
    "removes a member from a group",
    async () => {
      const users = await runEffect(UserlandUsersControllerList({ limit: 1 }));

      if (users.data.length === 0) {
        const error = await runEffect(
          Effect.gen(function* () {
            const org = yield* OrganizationsControllerCreate({
              name: `distilled-workos-remove-member-fallback-${testRunId}`,
            });
            return yield* GroupMembershipsControllerRemoveMember({
              organizationId: org.id,
              groupId: `group_does_not_exist_${testRunId}`,
              omId: `om_does_not_exist_${testRunId}`,
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
        return;
      }

      const seedUser = users.data[0] as { id: string };
      const memberships = await runEffect(
        UserlandUserOrganizationMembershipsControllerList({
          user_id: seedUser.id,
          limit: 1,
        }),
      );
      const member = memberships.data?.[0];
      if (!member) {
        const error = await runEffect(
          Effect.gen(function* () {
            const org = yield* OrganizationsControllerCreate({
              name: `distilled-workos-remove-member-fallback-${testRunId}`,
            });
            return yield* GroupMembershipsControllerRemoveMember({
              organizationId: org.id,
              groupId: `group_does_not_exist_${testRunId}`,
              omId: `om_does_not_exist_${testRunId}`,
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
        return;
      }

      const orgId = member.organization_id;
      const remainingMembers = await runEffect(
        Effect.gen(function* () {
          const group = yield* GroupsControllerCreate({
            organizationId: orgId,
            name: `distilled-remove-member-${testRunId}`,
          });
          return yield* Effect.gen(function* () {
            yield* GroupMembershipsControllerAddMember({
              organizationId: orgId,
              groupId: group.id,
              organization_membership_id: member.id,
            });
            yield* GroupMembershipsControllerRemoveMember({
              organizationId: orgId,
              groupId: group.id,
              omId: member.id,
            });
            return yield* GroupMembershipsControllerListMembers({
              organizationId: orgId,
              groupId: group.id,
              limit: 100,
            });
          }).pipe(
            Effect.ensuring(
              GroupsControllerDelete({
                organizationId: orgId,
                groupId: group.id,
              }).pipe(Effect.ignore),
            ),
          );
        }),
      );
      expect(remainingMembers).toBeDefined();
      expect(Array.isArray(remainingMembers.data)).toBe(true);
      expect(
        remainingMembers.data.some((m) => m.id === member.id),
      ).toBe(false);
    },
    { timeout: 90_000 },
  );

  it(
    "fails with NotFound for a non-existent membership id",
    async () => {
      const error = await runEffect(
        Effect.gen(function* () {
          const org = yield* OrganizationsControllerCreate({
            name: `distilled-workos-remove-member-404-${testRunId}`,
          });
          return yield* Effect.gen(function* () {
            const group = yield* GroupsControllerCreate({
              organizationId: org.id,
              name: `distilled-remove-member-404-${testRunId}`,
            });
            return yield* GroupMembershipsControllerRemoveMember({
              organizationId: org.id,
              groupId: group.id,
              omId: `om_does_not_exist_${testRunId}`,
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
        }).pipe(Effect.flip),
      );
      expect(error._tag).toBe("NotFound");
    },
    { timeout: 60_000 },
  );

  it(
    "fails with Forbidden when removing a member in a different tenant",
    async () => {
      const error = await runEffect(
        GroupMembershipsControllerRemoveMember({
          organizationId: "org_01HFGZ6QYV0000000000000000",
          groupId: `group_does_not_exist_${testRunId}`,
          omId: `om_does_not_exist_${testRunId}`,
        }).pipe(Effect.flip),
      );
      expect(["Forbidden", "NotFound"]).toContain(error._tag);
    },
    { timeout: 30_000 },
  );
});
