import { Effect } from "effect";
import { describe, expect, it } from "vitest";
import { UserlandUserInvitesControllerCreate } from "../src/operations/UserlandUserInvitesControllerCreate.ts";
import { UserlandUserInvitesControllerGetByToken } from "../src/operations/UserlandUserInvitesControllerGetByToken.ts";
import { UserlandUserInvitesControllerRevoke } from "../src/operations/UserlandUserInvitesControllerRevoke.ts";
import { runEffect, testRunId } from "./setup.ts";

describe("UserlandUserInvitesControllerGetByToken", () => {
  it(
    "fetches an invitation by its token",
    async () => {
      const email = `distilled-invite-by-token-${testRunId}@example.com`;
      const result = await runEffect(
        Effect.gen(function* () {
          const created = yield* UserlandUserInvitesControllerCreate({
            email,
            expires_in_days: 7,
          });
          return yield* UserlandUserInvitesControllerGetByToken({
            token: created.token,
          }).pipe(
            Effect.ensuring(
              UserlandUserInvitesControllerRevoke({ id: created.id }).pipe(
                Effect.ignore,
              ),
            ),
          );
        }),
      );

      expect(result).toBeDefined();
      expect(typeof result.id).toBe("string");
      expect(result.email).toBe(email);
      expect(typeof result.token).toBe("string");
      expect(["pending", "accepted", "expired", "revoked"]).toContain(
        result.state,
      );
    },
    { timeout: 30_000 },
  );

  it(
    "fails with NotFound for a non-existent token",
    async () => {
      const error = await runEffect(
        UserlandUserInvitesControllerGetByToken({
          token: `invitation_token_does_not_exist_${testRunId}`,
        }).pipe(Effect.flip),
      );
      expect(error._tag).toBe("NotFound");
    },
    { timeout: 30_000 },
  );
});
