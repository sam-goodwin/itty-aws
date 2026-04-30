import { Effect } from "effect";
import { describe, expect, it } from "vitest";
import { UserlandUserInvitesControllerCreate } from "../src/operations/UserlandUserInvitesControllerCreate.ts";
import { UserlandUserInvitesControllerGet } from "../src/operations/UserlandUserInvitesControllerGet.ts";
import { UserlandUserInvitesControllerRevoke } from "../src/operations/UserlandUserInvitesControllerRevoke.ts";
import { runEffect, testRunId } from "./setup.ts";

describe("UserlandUserInvitesControllerGet", () => {
  it(
    "fetches an invitation by id",
    async () => {
      const email = `distilled-invite-get-${testRunId}@example.com`;
      const result = await runEffect(
        Effect.gen(function* () {
          const created = yield* UserlandUserInvitesControllerCreate({
            email,
            expires_in_days: 7,
          });
          return yield* UserlandUserInvitesControllerGet({
            id: created.id,
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
    "fails with NotFound for a non-existent invitation id",
    async () => {
      const error = await runEffect(
        UserlandUserInvitesControllerGet({
          id: `invitation_does_not_exist_${testRunId}`,
        }).pipe(Effect.flip),
      );
      expect(error._tag).toBe("NotFound");
    },
    { timeout: 30_000 },
  );
});
