import { Effect } from "effect";
import { describe, expect, it } from "vitest";
import { AuthenticationFactorsControllerDelete } from "../src/operations/AuthenticationFactorsControllerDelete.ts";
import { UserlandUserAuthenticationFactorsControllerCreate } from "../src/operations/UserlandUserAuthenticationFactorsControllerCreate.ts";
import { UserlandUsersControllerList } from "../src/operations/UserlandUsersControllerList.ts";
import { runEffect, testRunId } from "./setup.ts";

describe("UserlandUserAuthenticationFactorsControllerCreate", () => {
  it(
    "enrolls a TOTP authentication factor for a user, then cleans up",
    async () => {
      const users = await runEffect(UserlandUsersControllerList({ limit: 1 }));

      if (users.data.length === 0) {
        // Without a seed user we still verify the SDK maps an invalid type
        // payload to a typed UnprocessableEntity for an arbitrary user id.
        const error = await runEffect(
          UserlandUserAuthenticationFactorsControllerCreate({
            userlandUserId: `user_does_not_exist_${testRunId}`,
            type: `not-a-valid-type-${testRunId}`,
          }).pipe(Effect.flip),
        );
        expect(error._tag).toBe("UnprocessableEntity");
        return;
      }

      const seed = users.data[0] as { id: string };
      let createdFactorId: string | undefined;

      await runEffect(
        Effect.gen(function* () {
          const result = yield* UserlandUserAuthenticationFactorsControllerCreate({
            userlandUserId: seed.id,
            type: "totp",
            totp_issuer: `distilled-${testRunId}`,
            totp_user: `distilled-user-${testRunId}@distilled.test`,
          });
          createdFactorId = result.authentication_factor.id;
          expect(result).toBeDefined();
          expect(result.authentication_factor).toBeDefined();
          expect(typeof result.authentication_factor.id).toBe("string");
          expect(result.authentication_factor.type).toBe("totp");
          expect(typeof result.authentication_factor.created_at).toBe("string");
          expect(typeof result.authentication_factor.updated_at).toBe("string");
          expect(result.authentication_factor.totp).toBeDefined();
          expect(result.authentication_factor.totp?.issuer).toBe(
            `distilled-${testRunId}`,
          );
          expect(result.authentication_factor.totp?.user).toBe(
            `distilled-user-${testRunId}@distilled.test`,
          );
          expect(typeof result.authentication_challenge.id).toBe("string");
          expect(result.authentication_challenge.authentication_factor_id).toBe(
            result.authentication_factor.id,
          );
        }).pipe(
          Effect.ensuring(
            Effect.suspend(() =>
              createdFactorId
                ? AuthenticationFactorsControllerDelete({
                    id: createdFactorId,
                  }).pipe(Effect.ignore)
                : Effect.void,
            ),
          ),
        ),
      );
    },
    { timeout: 60_000 },
  );

  it(
    "fails with UnprocessableEntity when type is not a recognized factor type",
    async () => {
      const users = await runEffect(UserlandUsersControllerList({ limit: 1 }));
      const seedUserId =
        users.data.length > 0
          ? (users.data[0] as { id: string }).id
          : `user_does_not_exist_${testRunId}`;

      const error = await runEffect(
        UserlandUserAuthenticationFactorsControllerCreate({
          userlandUserId: seedUserId,
          type: `not-a-valid-type-${testRunId}`,
        }).pipe(Effect.flip),
      );
      expect(error._tag).toBe("UnprocessableEntity");
    },
    { timeout: 30_000 },
  );
});
