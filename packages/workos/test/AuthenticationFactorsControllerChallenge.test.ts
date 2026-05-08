import { Effect } from "effect";
import { describe, expect, it } from "vitest";
import { AuthenticationFactorsControllerChallenge } from "../src/operations/AuthenticationFactorsControllerChallenge.ts";
import { AuthenticationFactorsControllerCreate } from "../src/operations/AuthenticationFactorsControllerCreate.ts";
import { runEffect, testRunId } from "./setup.ts";

describe("AuthenticationFactorsControllerChallenge", () => {
  it(
    "creates a challenge for an authentication factor",
    async () => {
      const challenge = await runEffect(
        Effect.gen(function* () {
          const factor = yield* AuthenticationFactorsControllerCreate({
            type: "totp",
            totp_issuer: `distilled-workos-${testRunId}`,
            totp_user: `challenge-user-${testRunId}`,
          });

          return yield* AuthenticationFactorsControllerChallenge({
            id: factor.id,
          });
        }),
      );

      expect(challenge).toBeDefined();
      expect(typeof challenge.id).toBe("string");
      expect(typeof challenge.authentication_factor_id).toBe("string");
      expect(typeof challenge.created_at).toBe("string");
    },
    30_000,
  );

  it(
    "fails with NotFound for a non-existent factor id",
    async () => {
      const error = await runEffect(
        AuthenticationFactorsControllerChallenge({
          id: `auth_factor_does_not_exist_${testRunId}`,
        }).pipe(Effect.flip),
      );

      expect(error._tag).toBe("NotFound");
    },
    30_000,
  );

});
