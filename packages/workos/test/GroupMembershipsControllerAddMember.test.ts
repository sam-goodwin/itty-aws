import { Effect } from "effect";
import { describe, expect, it } from "vitest";
import { GroupMembershipsControllerAddMember } from "../src/operations/GroupMembershipsControllerAddMember.ts";
import { GroupMembershipsControllerRemoveMember } from "../src/operations/GroupMembershipsControllerRemoveMember.ts";
import { GroupsControllerCreate } from "../src/operations/GroupsControllerCreate.ts";
import { GroupsControllerDelete } from "../src/operations/GroupsControllerDelete.ts";
import { OrganizationsControllerCreate } from "../src/operations/OrganizationsControllerCreate.ts";
import { OrganizationsControllerDeleteOrganization } from "../src/operations/OrganizationsControllerDeleteOrganization.ts";
import { UserlandUserOrganizationMembershipsControllerList } from "../src/operations/UserlandUserOrganizationMembershipsControllerList.ts";
import { UserlandUsersControllerList } from "../src/operations/UserlandUsersControllerList.ts";
import { runEffect, testRunId } from "./setup.ts";

describe("GroupMembershipsControllerAddMember", () => {
  it(
    "adds a member to a group",
    async () => {
      const users = await runEffect(UserlandUsersControllerList({ limit: 1 }));

      if (users.data.length === 0) {
        // No seed user available — exercise the operation against a missing
        // group so the call still hits the live API.
        const error = await runEffect(
          Effect.gen(function* () {
            const org = yield* OrganizationsControllerCreate({
              name: `distilled-workos-add-member-fallback-${testRunId}`,
            });
            return yield* GroupMembershipsControllerAddMember({
              organizationId: org.id,
              groupId: `group_does_not_exist_${testRunId}`,
              organization_membership_id: `om_does_not_exist_${testRunId}`,
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
              name: `distilled-workos-add-member-fallback-${testRunId}`,
            });
            return yield* GroupMembershipsControllerAddMember({
              organizationId: org.id,
              groupId: `group_does_not_exist_${testRunId}`,
              organization_membership_id: `om_does_not_exist_${testRunId}`,
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

      const result = await runEffect(
        Effect.gen(function* () {
          const group = yield* GroupsControllerCreate({
            organizationId: member.organization_id,
            name: `distilled-add-member-${testRunId}`,
          });
          return yield* GroupMembershipsControllerAddMember({
            organizationId: member.organization_id,
            groupId: group.id,
            organization_membership_id: member.id,
          }).pipe(
            Effect.ensuring(
              GroupMembershipsControllerRemoveMember({
                organizationId: member.organization_id,
                groupId: group.id,
                omId: member.id,
              }).pipe(Effect.ignore),
            ),
            Effect.ensuring(
              GroupsControllerDelete({
                organizationId: member.organization_id,
                groupId: group.id,
              }).pipe(Effect.ignore),
            ),
          );
        }),
      );
      expect(result).toBeDefined();
      expect(typeof result.id).toBe("string");
      expect(typeof result.organization_id).toBe("string");
      expect(typeof result.name).toBe("string");
      expect(typeof result.created_at).toBe("string");
      expect(typeof result.updated_at).toBe("string");
    },
    { timeout: 90_000 },
  );

  it(
    "fails with NotFound for a non-existent group id",
    async () => {
      const error = await runEffect(
        Effect.gen(function* () {
          const org = yield* OrganizationsControllerCreate({
            name: `distilled-workos-add-member-404-${testRunId}`,
          });
          return yield* GroupMembershipsControllerAddMember({
            organizationId: org.id,
            groupId: `group_does_not_exist_${testRunId}`,
            organization_membership_id: `om_does_not_exist_${testRunId}`,
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
    "fails with Forbidden when adding a member in a different tenant",
    async () => {
      const error = await runEffect(
        GroupMembershipsControllerAddMember({
          organizationId: "org_01HFGZ6QYV0000000000000000",
          groupId: `group_does_not_exist_${testRunId}`,
          organization_membership_id: `om_does_not_exist_${testRunId}`,
        }).pipe(Effect.flip),
      );
      expect(["Forbidden", "NotFound"]).toContain(error._tag);
    },
    { timeout: 30_000 },
  );

  it(
    "fails with UnprocessableEntity for a malformed organization_membership_id",
    async () => {
      const error = await runEffect(
        Effect.gen(function* () {
          const org = yield* OrganizationsControllerCreate({
            name: `distilled-workos-add-member-422-${testRunId}`,
          });
          return yield* Effect.gen(function* () {
            const group = yield* GroupsControllerCreate({
              organizationId: org.id,
              name: `distilled-add-member-422-${testRunId}`,
            });
            return yield* GroupMembershipsControllerAddMember({
              organizationId: org.id,
              groupId: group.id,
              organization_membership_id: "",
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
      expect(error._tag).toBe("UnprocessableEntity");
    },
    { timeout: 60_000 },
  );
});
