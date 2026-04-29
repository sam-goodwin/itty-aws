import { Effect } from "effect";
import { describe, expect, it } from "vitest";
import { AuthenticationFactorsControllerCreate } from "../src/operations/AuthenticationFactorsControllerCreate.ts";
import { AuthenticationFactorsControllerDelete } from "../src/operations/AuthenticationFactorsControllerDelete.ts";
import { AuthenticationFactorsControllerGet } from "../src/operations/AuthenticationFactorsControllerGet.ts";
import { runEffect, testRunId } from "./setup.ts";

describe("AuthenticationFactorsControllerDelete", () => {
  it(
    "deletes an authentication factor",
    async () => {
      const error = await runEffect(
        Effect.gen(function* () {
          const factor = yield* AuthenticationFactorsControllerCreate({
            type: "totp",
            totp_issuer: `distilled-workos-${testRunId}`,
            totp_user: `delete-user-${testRunId}`,
          });

          yield* AuthenticationFactorsControllerDelete({ id: factor.id });

          return yield* AuthenticationFactorsControllerGet({ id: factor.id }).pipe(
            Effect.flip,
          );
        }),
      );

      expect(error._tag).toBe("NotFound");
    },
    { timeout: 30_000 },
  );

  it(
    "fails with NotFound when deleting a non-existent factor id",
    async () => {
      const error = await runEffect(
        AuthenticationFactorsControllerDelete({
          id: `auth_factor_does_not_exist_${testRunId}`,
        }).pipe(Effect.flip),
      );

      expect(error._tag).toBe("NotFound");
    },
    { timeout: 30_000 },
  );
});
