import { Effect } from "effect";
import { describe, expect, it } from "vitest";
import { AuthorizationControllerCheck } from "../src/operations/AuthorizationControllerCheck.ts";
import { runEffect, testRunId } from "./setup.ts";

describe("AuthorizationControllerCheck", () => {
  it(
    "checks authorization for an organization membership",
    async () => {
      const result = await runEffect(
        AuthorizationControllerCheck({
          organization_membership_id: `om_${testRunId}`,
        }),
      );

      expect(result).toBeDefined();
      expect(typeof result.authorized).toBe("boolean");
    },
    { timeout: 30_000 },
  );

  it(
    "fails with NotFound for a non-existent organization membership id",
    async () => {
      const error = await runEffect(
        AuthorizationControllerCheck({
          organization_membership_id: `om_does_not_exist_${testRunId}`,
        }).pipe(Effect.flip),
      );

      expect(["NotFound", "UnprocessableEntity"]).toContain(error._tag);
    },
    { timeout: 30_000 },
  );

  it(
    "fails with Forbidden when checking a membership outside this tenant",
    async () => {
      const error = await runEffect(
        AuthorizationControllerCheck({
          organization_membership_id: "om_01HFGZ6QYV0000000000000000",
        }).pipe(Effect.flip),
      );

      expect(["Forbidden", "UnprocessableEntity"]).toContain(error._tag);
    },
    { timeout: 30_000 },
  );

  it(
    "fails with UnprocessableEntity when the membership id is malformed",
    async () => {
      const error = await runEffect(
        AuthorizationControllerCheck({
          organization_membership_id: `not-a-real-id-${testRunId}`,
        }).pipe(Effect.flip),
      );

      expect(error._tag).toBe("UnprocessableEntity");
    },
    { timeout: 30_000 },
  );
});
