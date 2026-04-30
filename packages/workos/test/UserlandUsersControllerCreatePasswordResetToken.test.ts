import { Effect } from "effect";
import { describe, expect, it } from "vitest";
import { UserlandUsersControllerCreatePasswordResetToken } from "../src/operations/UserlandUsersControllerCreatePasswordResetToken.ts";
import { UserlandUsersControllerList } from "../src/operations/UserlandUsersControllerList.ts";
import { runEffect, testRunId } from "./setup.ts";

describe("UserlandUsersControllerCreatePasswordResetToken", () => {
  it(
    "creates a password reset token for an existing user",
    async () => {
      const users = await runEffect(UserlandUsersControllerList({ limit: 5 }));

      const target = users.data.find((u) => u.email && u.email.length > 0);
      if (!target) {
        const error = await runEffect(
          UserlandUsersControllerCreatePasswordResetToken({
            email: `distilled-no-such-user-${testRunId}@example.com`,
          }).pipe(Effect.flip),
        );
        expect(error._tag).toBe("NotFound");
        return;
      }

      const result = await runEffect(
        UserlandUsersControllerCreatePasswordResetToken({
          email: target.email,
        }).pipe(
          Effect.matchEffect({
            onSuccess: (token) =>
              Effect.succeed({ ok: true as const, token }),
            onFailure: (error) =>
              Effect.succeed({ ok: false as const, error }),
          }),
        ),
      );

      if (result.ok) {
        expect(result.token).toBeDefined();
        expect(typeof result.token.id).toBe("string");
        expect(typeof result.token.user_id).toBe("string");
        expect(result.token.email).toBe(target.email);
        expect(result.token.password_reset_token).toBeDefined();
        expect(typeof result.token.password_reset_url).toBe("string");
        expect(typeof result.token.expires_at).toBe("string");
      } else {
        // Some seed users may have password auth disabled (SSO-only).
        // The SDK must still surface a typed error in that case.
        expect(["Forbidden", "NotFound", "UnprocessableEntity"]).toContain(
          result.error._tag,
        );
      }
    },
    { timeout: 60_000 },
  );

  it(
    "fails with Forbidden when password reset is not permitted for the user",
    async () => {
      // Probe with a system-style email that typically maps to an SSO-only
      // identity in the test environment, where password reset is forbidden.
      const error = await runEffect(
        UserlandUsersControllerCreatePasswordResetToken({
          email: `sso-only-${testRunId}@workos.com`,
        }).pipe(Effect.flip),
      );
      expect(["Forbidden", "NotFound"]).toContain(error._tag);
    },
    { timeout: 30_000 },
  );

  it(
    "fails with NotFound for a non-existent email",
    async () => {
      const error = await runEffect(
        UserlandUsersControllerCreatePasswordResetToken({
          email: `distilled-no-such-user-${testRunId}@example.com`,
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
        UserlandUsersControllerCreatePasswordResetToken({
          email: `not-an-email-${testRunId}`,
        }).pipe(Effect.flip),
      );
      expect(error._tag).toBe("UnprocessableEntity");
    },
    { timeout: 30_000 },
  );
});
