import { Effect } from "effect";
import { describe, expect, it } from "vitest";
import { UserlandUserOrganizationMembershipsControllerGet } from "../src/operations/UserlandUserOrganizationMembershipsControllerGet.ts";
import { UserlandUserOrganizationMembershipsControllerList } from "../src/operations/UserlandUserOrganizationMembershipsControllerList.ts";
import { UserlandUsersControllerList } from "../src/operations/UserlandUsersControllerList.ts";
import { runEffect, testRunId } from "./setup.ts";

describe("UserlandUserOrganizationMembershipsControllerGet", () => {
  it(
    "fetches an organization membership by id",
    async () => {
      const users = await runEffect(UserlandUsersControllerList({ limit: 1 }));

      if (users.data.length === 0) {
        const error = await runEffect(
          UserlandUserOrganizationMembershipsControllerGet({
            id: `om_does_not_exist_${testRunId}`,
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
          UserlandUserOrganizationMembershipsControllerGet({
            id: `om_does_not_exist_${testRunId}`,
          }).pipe(Effect.flip),
        );
        expect(error._tag).toBe("NotFound");
        return;
      }

      const result = await runEffect(
        UserlandUserOrganizationMembershipsControllerGet({ id: member.id }),
      );
      expect(result).toBeDefined();
      expect(result.id).toBe(member.id);
      expect(typeof result.user_id).toBe("string");
      expect(typeof result.organization_id).toBe("string");
      expect(["active", "inactive", "pending"]).toContain(result.status);
      expect(typeof result.role.slug).toBe("string");
      expect(typeof result.directory_managed).toBe("boolean");
    },
    { timeout: 60_000 },
  );

  it(
    "fails with NotFound for a non-existent membership id",
    async () => {
      const error = await runEffect(
        UserlandUserOrganizationMembershipsControllerGet({
          id: `om_does_not_exist_${testRunId}`,
        }).pipe(Effect.flip),
      );
      expect(error._tag).toBe("NotFound");
    },
    { timeout: 30_000 },
  );
});
