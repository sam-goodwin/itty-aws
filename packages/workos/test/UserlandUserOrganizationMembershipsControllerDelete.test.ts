import { Effect } from "effect";
import { describe, expect, it } from "vitest";
import { UserlandUserOrganizationMembershipsControllerDelete } from "../src/operations/UserlandUserOrganizationMembershipsControllerDelete.ts";
import { UserlandUserOrganizationMembershipsControllerGet } from "../src/operations/UserlandUserOrganizationMembershipsControllerGet.ts";
import { UserlandUserOrganizationMembershipsControllerList } from "../src/operations/UserlandUserOrganizationMembershipsControllerList.ts";
import { UserlandUsersControllerList } from "../src/operations/UserlandUsersControllerList.ts";
import { runEffect, testRunId } from "./setup.ts";

describe("UserlandUserOrganizationMembershipsControllerDelete", () => {
  it(
    "permanently deletes an organization membership",
    async () => {
      const users = await runEffect(UserlandUsersControllerList({ limit: 5 }));

      let target: { id: string } | undefined;
      for (const user of users.data) {
        const memberships = await runEffect(
          UserlandUserOrganizationMembershipsControllerList({
            user_id: user.id,
            limit: 5,
            statuses: "active,inactive,pending",
          }),
        );
        const found = memberships.data?.[0];
        if (found) {
          target = { id: found.id };
          break;
        }
      }

      if (!target) {
        const error = await runEffect(
          UserlandUserOrganizationMembershipsControllerDelete({
            id: `om_does_not_exist_${testRunId}`,
          }).pipe(Effect.flip),
        );
        expect(error._tag).toBe("NotFound");
        return;
      }

      const result = await runEffect(
        UserlandUserOrganizationMembershipsControllerDelete({ id: target.id }),
      );
      expect(result).toBeUndefined();

      const error = await runEffect(
        UserlandUserOrganizationMembershipsControllerGet({
          id: target.id,
        }).pipe(Effect.flip),
      );
      expect(error._tag).toBe("NotFound");
    },
    { timeout: 90_000 },
  );

  it(
    "fails with NotFound for a non-existent membership id",
    async () => {
      const error = await runEffect(
        UserlandUserOrganizationMembershipsControllerDelete({
          id: `om_does_not_exist_${testRunId}`,
        }).pipe(Effect.flip),
      );
      expect(error._tag).toBe("NotFound");
    },
    { timeout: 30_000 },
  );
});
