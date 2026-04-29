import { Effect } from "effect";
import { describe, expect, it } from "vitest";
import { AuthenticationFactorsControllerCreate } from "../src/operations/AuthenticationFactorsControllerCreate.ts";
import { AuthenticationFactorsControllerGet } from "../src/operations/AuthenticationFactorsControllerGet.ts";
import { runEffect, testRunId } from "./setup.ts";

describe("AuthenticationFactorsControllerGet", () => {
  it(
    "retrieves an authentication factor by id",
    async () => {
      const factor = await runEffect(
        Effect.gen(function* () {
          const created = yield* AuthenticationFactorsControllerCreate({
            type: "totp",
            totp_issuer: `distilled-workos-${testRunId}`,
            totp_user: `get-user-${testRunId}`,
          });

          return yield* AuthenticationFactorsControllerGet({ id: created.id });
        }),
      );

      expect(factor).toBeDefined();
      expect(typeof factor.id).toBe("string");
      expect(factor.type).toBe("totp");
      expect(factor.totp).toBeDefined();
      expect(factor.totp?.issuer).toBe(`distilled-workos-${testRunId}`);
      expect(factor.totp?.user).toBe(`get-user-${testRunId}`);
    },
    { timeout: 30_000 },
  );

  it(
    "fails with NotFound for a non-existent factor id",
    async () => {
      const error = await runEffect(
        AuthenticationFactorsControllerGet({
          id: `auth_factor_does_not_exist_${testRunId}`,
        }).pipe(Effect.flip),
      );

      expect(error._tag).toBe("NotFound");
    },
    { timeout: 30_000 },
  );
});
