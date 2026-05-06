import { Effect } from "effect";
import { describe, expect, it } from "vitest";
import { AuthenticationChallengesControllerVerify } from "../src/operations/AuthenticationChallengesControllerVerify.ts";
import { AuthenticationFactorsControllerChallenge } from "../src/operations/AuthenticationFactorsControllerChallenge.ts";
import { AuthenticationFactorsControllerCreate } from "../src/operations/AuthenticationFactorsControllerCreate.ts";
import { runEffect, testRunId } from "./setup.ts";

describe("AuthenticationChallengesControllerVerify", () => {
  it(
    "verifies an authentication challenge and returns a valid boolean",
    async () => {
      const result = await runEffect(
        Effect.gen(function* () {
          const factor = yield* AuthenticationFactorsControllerCreate({
            type: "totp",
            totp_issuer: `distilled-workos-${testRunId}`,
            totp_user: `verify-user-${testRunId}`,
          });

          const challenge = yield* AuthenticationFactorsControllerChallenge({
            id: factor.id,
          });

          return yield* AuthenticationChallengesControllerVerify({
            id: challenge.id,
            code: "000000",
          });
        }),
      );

      expect(result).toBeDefined();
      expect(typeof result.valid).toBe("boolean");
      expect(result.challenge).toBeDefined();
      expect(typeof result.challenge.id).toBe("string");
    },
    60_000,
  );

  it(
    "fails with NotFound for a non-existent challenge id",
    async () => {
      const error = await runEffect(
        AuthenticationChallengesControllerVerify({
          id: `auth_challenge_does_not_exist_${testRunId}`,
          code: "000000",
        }).pipe(Effect.flip),
      );

      expect(error._tag).toBe("NotFound");
    },
    30_000,
  );

});
