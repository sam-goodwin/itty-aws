import { Effect } from "effect";
import { describe, expect, it } from "vitest";
import { OrganizationMembershipGroupsControllerListGroups } from "../src/operations/OrganizationMembershipGroupsControllerListGroups.ts";
import { UserlandUserOrganizationMembershipsControllerList } from "../src/operations/UserlandUserOrganizationMembershipsControllerList.ts";
import { UserlandUsersControllerList } from "../src/operations/UserlandUsersControllerList.ts";
import { runEffect, testRunId } from "./setup.ts";

describe("OrganizationMembershipGroupsControllerListGroups", () => {
  it(
    "lists groups for an organization membership",
    async () => {
      const users = await runEffect(UserlandUsersControllerList({ limit: 5 }));

      let target: { id: string } | undefined;
      for (const user of users.data) {
        const memberships = await runEffect(
          UserlandUserOrganizationMembershipsControllerList({
            user_id: user.id,
            limit: 1,
          }),
        );
        const member = memberships.data?.[0];
        if (member) {
          target = { id: member.id };
          break;
        }
      }

      if (!target) {
        const error = await runEffect(
          OrganizationMembershipGroupsControllerListGroups({
            omId: `om_does_not_exist_${testRunId}`,
            limit: 5,
          }).pipe(Effect.flip),
        );
        expect(error._tag).toBe("NotFound");
        return;
      }

      const result = await runEffect(
        OrganizationMembershipGroupsControllerListGroups({
          omId: target.id,
          limit: 5,
        }),
      );
      expect(result).toBeDefined();
      expect(Array.isArray(result.data)).toBe(true);
      expect(result.data.length).toBeLessThanOrEqual(5);
      for (const group of result.data) {
        expect(typeof group.id).toBe("string");
        expect(typeof group.organization_id).toBe("string");
        expect(typeof group.name).toBe("string");
      }
      expect(result.list_metadata).toBeDefined();
    },
    { timeout: 60_000 },
  );

  it(
    "fails with NotFound for a non-existent membership id",
    async () => {
      const error = await runEffect(
        OrganizationMembershipGroupsControllerListGroups({
          omId: `om_does_not_exist_${testRunId}`,
          limit: 5,
        }).pipe(Effect.flip),
      );
      expect(error._tag).toBe("NotFound");
    },
    { timeout: 30_000 },
  );
});
