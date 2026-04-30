import { Effect } from "effect";
import { describe, expect, it } from "vitest";
import { UserlandUserOrganizationMembershipsControllerDeactivate } from "../src/operations/UserlandUserOrganizationMembershipsControllerDeactivate.ts";
import { UserlandUserOrganizationMembershipsControllerList } from "../src/operations/UserlandUserOrganizationMembershipsControllerList.ts";
import { UserlandUserOrganizationMembershipsControllerReactivate } from "../src/operations/UserlandUserOrganizationMembershipsControllerReactivate.ts";
import { UserlandUsersControllerList } from "../src/operations/UserlandUsersControllerList.ts";
import { runEffect, testRunId } from "./setup.ts";

describe("UserlandUserOrganizationMembershipsControllerReactivate", () => {
  it(
    "reactivates an inactive organization membership",
    async () => {
      const users = await runEffect(UserlandUsersControllerList({ limit: 5 }));

      let target: { id: string } | undefined;
      for (const user of users.data) {
        const memberships = await runEffect(
          UserlandUserOrganizationMembershipsControllerList({
            user_id: user.id,
            limit: 5,
            statuses: "active",
          }),
        );
        const active = memberships.data?.find((m) => m.status === "active");
        if (active) {
          target = { id: active.id };
          break;
        }
      }

      if (!target) {
        const error = await runEffect(
          UserlandUserOrganizationMembershipsControllerReactivate({
            id: `om_does_not_exist_${testRunId}`,
          }).pipe(Effect.flip),
        );
        expect(error._tag).toBe("NotFound");
        return;
      }

      const result = await runEffect(
        Effect.gen(function* () {
          yield* UserlandUserOrganizationMembershipsControllerDeactivate({
            id: target.id,
          });
          return yield* UserlandUserOrganizationMembershipsControllerReactivate(
            { id: target.id },
          );
        }).pipe(
          Effect.ensuring(
            UserlandUserOrganizationMembershipsControllerReactivate({
              id: target.id,
            }).pipe(Effect.ignore),
          ),
        ),
      );
      expect(result).toBeDefined();
      expect(result.id).toBe(target.id);
      expect(result.status).toBe("active");
      expect(typeof result.user_id).toBe("string");
      expect(typeof result.organization_id).toBe("string");
      expect(typeof result.role.slug).toBe("string");
    },
    { timeout: 90_000 },
  );

  it(
    "fails with BadRequest when the id is empty",
    async () => {
      const error = await runEffect(
        UserlandUserOrganizationMembershipsControllerReactivate({
          id: "",
        }).pipe(Effect.flip),
      );
      expect(["BadRequest", "NotFound"]).toContain(error._tag);
    },
    { timeout: 30_000 },
  );

  it(
    "fails with NotFound for a non-existent membership id",
    async () => {
      const error = await runEffect(
        UserlandUserOrganizationMembershipsControllerReactivate({
          id: `om_does_not_exist_${testRunId}`,
        }).pipe(Effect.flip),
      );
      expect(error._tag).toBe("NotFound");
    },
    { timeout: 30_000 },
  );

  it(
    "fails with UnprocessableEntity for a malformed membership id",
    async () => {
      const error = await runEffect(
        UserlandUserOrganizationMembershipsControllerReactivate({
          id: `not-a-valid-id-${"x".repeat(300)}-${testRunId}`,
        }).pipe(Effect.flip),
      );
      expect(["NotFound", "UnprocessableEntity"]).toContain(error._tag);
    },
    { timeout: 30_000 },
  );
});
