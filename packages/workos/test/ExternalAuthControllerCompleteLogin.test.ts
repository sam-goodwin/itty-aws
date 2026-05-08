import { Effect } from "effect";
import { describe, expect, it } from "vitest";
import { ExternalAuthControllerCompleteLogin } from "../src/operations/ExternalAuthControllerCompleteLogin.ts";
import { runEffect, runOrSkipOnEnvLimitation, testRunId } from "./setup.ts";

describe("ExternalAuthControllerCompleteLogin", () => {
  it(
    "completes an external authentication flow and returns a redirect_uri",
    async (ctx) => {
      const result = await runOrSkipOnEnvLimitation(
        ctx,
        ExternalAuthControllerCompleteLogin({
          external_auth_id: `external_auth_${testRunId}`,
          user: {
            id: `external-user-${testRunId}`,
            email: `external-user-${testRunId}@distilled.test`,
            first_name: "Distilled",
            last_name: "Test",
          },
        }),
      );

      expect(result).toBeDefined();
      expect(typeof result.redirect_uri).toBe("string");
    },
    30_000,
  );

  it(
    "fails with NotFound for a non-existent external_auth_id",
    async () => {
      const error = await runEffect(
        ExternalAuthControllerCompleteLogin({
          external_auth_id: `external_auth_does_not_exist_${testRunId}`,
          user: {
            id: `external-user-404-${testRunId}`,
            email: `external-user-404-${testRunId}@distilled.test`,
          },
        }).pipe(Effect.flip),
      );

      expect(error._tag).toBe("NotFound");
    },
    30_000,
  );

  it(
    "fails with BadRequest when the user email is empty",
    async () => {
      const error = await runEffect(
        ExternalAuthControllerCompleteLogin({
          external_auth_id: `external_auth_400_${testRunId}`,
          user: {
            id: `external-user-400-${testRunId}`,
            email: "",
          },
        }).pipe(Effect.flip),
      );

      expect(["BadRequest", "UnprocessableEntity"]).toContain(error._tag);
    },
    30_000,
  );

  it(
    "fails with UnprocessableEntity when the user email is malformed",
    async () => {
      const error = await runEffect(
        ExternalAuthControllerCompleteLogin({
          external_auth_id: `external_auth_422_${testRunId}`,
          user: {
            id: `external-user-422-${testRunId}`,
            email: "not-a-valid-email",
          },
        }).pipe(Effect.flip),
      );

      expect(error._tag).toBe("UnprocessableEntity");
    },
    30_000,
  );
});
