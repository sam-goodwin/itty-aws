import { Effect } from "effect";
import { describe, expect, it } from "vitest";
import { UserlandUserInvitesControllerCreate } from "../src/operations/UserlandUserInvitesControllerCreate.ts";
import { UserlandUserInvitesControllerRevoke } from "../src/operations/UserlandUserInvitesControllerRevoke.ts";
import { runEffect, testRunId } from "./setup.ts";

describe("UserlandUserInvitesControllerCreate", () => {
  it(
    "creates an invitation",
    async () => {
      const email = `distilled-invite-${testRunId}@example.com`;
      const invite = await runEffect(
        Effect.gen(function* () {
          const created = yield* UserlandUserInvitesControllerCreate({
            email,
            expires_in_days: 7,
          });
          return created;
        }).pipe(
          Effect.flatMap((created) =>
            UserlandUserInvitesControllerRevoke({ id: created.id }).pipe(
              Effect.ignore,
              Effect.as(created),
            ),
          ),
        ),
      );

      expect(invite).toBeDefined();
      expect(typeof invite.id).toBe("string");
      expect(invite.email).toBe(email);
      expect(["pending", "accepted", "expired", "revoked"]).toContain(
        invite.state,
      );
      expect(typeof invite.token).toBe("string");
      expect(typeof invite.accept_invitation_url).toBe("string");
    },
    { timeout: 30_000 },
  );

  it(
    "fails with BadRequest when the email is empty",
    async () => {
      const error = await runEffect(
        UserlandUserInvitesControllerCreate({ email: "" }).pipe(Effect.flip),
      );
      expect(["BadRequest", "UnprocessableEntity"]).toContain(error._tag);
    },
    { timeout: 30_000 },
  );

  it(
    "fails with NotFound when the organization_id does not exist",
    async () => {
      const error = await runEffect(
        UserlandUserInvitesControllerCreate({
          email: `distilled-invite-notfound-${testRunId}@example.com`,
          organization_id: `organization_does_not_exist_${testRunId}`,
        }).pipe(Effect.flip),
      );
      expect(error._tag).toBe("NotFound");
    },
    { timeout: 30_000 },
  );

  it(
    "fails with UnprocessableEntity for a malformed email",
    async () => {
      const error = await runEffect(
        UserlandUserInvitesControllerCreate({
          email: `not-an-email-${testRunId}`,
        }).pipe(Effect.flip),
      );
      expect(error._tag).toBe("UnprocessableEntity");
    },
    { timeout: 30_000 },
  );
});
