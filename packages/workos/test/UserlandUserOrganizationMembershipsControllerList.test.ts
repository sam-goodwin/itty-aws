import { Effect } from "effect";
import { describe, expect, it } from "vitest";
import { OrganizationsControllerCreate } from "../src/operations/OrganizationsControllerCreate.ts";
import { OrganizationsControllerDeleteOrganization } from "../src/operations/OrganizationsControllerDeleteOrganization.ts";
import { UserlandUserOrganizationMembershipsControllerList } from "../src/operations/UserlandUserOrganizationMembershipsControllerList.ts";
import { runEffect, testRunId } from "./setup.ts";

describe("UserlandUserOrganizationMembershipsControllerList", () => {
  it(
    "lists memberships for an organization",
    async () => {
      const name = `distilled-memberships-list-${testRunId}`;
      const result = await runEffect(
        Effect.gen(function* () {
          const org = yield* OrganizationsControllerCreate({ name });
          return yield* UserlandUserOrganizationMembershipsControllerList({
            organization_id: org.id,
            limit: 5,
          }).pipe(
            Effect.ensuring(
              OrganizationsControllerDeleteOrganization({ id: org.id }).pipe(
                Effect.ignore,
              ),
            ),
          );
        }),
      );

      expect(result).toBeDefined();
      if (result.data !== undefined) {
        expect(Array.isArray(result.data)).toBe(true);
        expect(result.data.length).toBeLessThanOrEqual(5);
        for (const membership of result.data) {
          expect(typeof membership.id).toBe("string");
          expect(typeof membership.user_id).toBe("string");
          expect(typeof membership.organization_id).toBe("string");
          expect(["active", "inactive", "pending"]).toContain(
            membership.status,
          );
        }
      }
    },
    { timeout: 60_000 },
  );

  it(
    "fails with BadRequest when neither user_id nor organization_id is provided",
    async () => {
      const error = await runEffect(
        UserlandUserOrganizationMembershipsControllerList({}).pipe(
          Effect.flip,
        ),
      );
      expect(error._tag).toBe("BadRequest");
    },
    { timeout: 30_000 },
  );

  it(
    "fails with NotFound for a non-existent organization_id",
    async () => {
      const error = await runEffect(
        UserlandUserOrganizationMembershipsControllerList({
          organization_id: `organization_does_not_exist_${testRunId}`,
        }).pipe(Effect.flip),
      );
      expect(error._tag).toBe("NotFound");
    },
    { timeout: 30_000 },
  );

  it(
    "fails with UnprocessableEntity when limit exceeds the allowed range",
    async () => {
      const error = await runEffect(
        UserlandUserOrganizationMembershipsControllerList({
          user_id: `user_does_not_exist_${testRunId}`,
          limit: 1000,
        }).pipe(Effect.flip),
      );
      expect(error._tag).toBe("UnprocessableEntity");
    },
    { timeout: 30_000 },
  );
});
