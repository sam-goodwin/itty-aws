import { Effect } from "effect";
import { describe, expect, it } from "vitest";
import { UserlandUserInvitesControllerCreate } from "../src/operations/UserlandUserInvitesControllerCreate.ts";
import { UserlandUserInvitesControllerRevoke } from "../src/operations/UserlandUserInvitesControllerRevoke.ts";
import { runEffect, testRunId } from "./setup.ts";

describe("UserlandUserInvitesControllerRevoke", () => {
  it(
    "revokes a pending invitation",
    async () => {
      const email = `distilled-invite-revoke-${testRunId}@example.com`;
      const result = await runEffect(
        Effect.gen(function* () {
          const created = yield* UserlandUserInvitesControllerCreate({
            email,
            expires_in_days: 7,
          });
          return yield* UserlandUserInvitesControllerRevoke({
            id: created.id,
          });
        }),
      );

      expect(result).toBeDefined();
      expect(typeof result.id).toBe("string");
      expect(result.email).toBe(email);
      expect(result.state).toBe("revoked");
      expect(typeof result.revoked_at).toBe("string");
    },
    { timeout: 30_000 },
  );

  it(
    "fails with BadRequest for a non-existent invitation id",
    async () => {
      const error = await runEffect(
        UserlandUserInvitesControllerRevoke({
          id: `invitation_does_not_exist_${testRunId}`,
        }).pipe(Effect.flip),
      );
      expect(["BadRequest", "NotFound"]).toContain(error._tag);
    },
    { timeout: 30_000 },
  );
});
