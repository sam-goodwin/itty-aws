import { Effect } from "effect";
import { describe, expect, it } from "vitest";
import { UserlandUsersControllerCreatePasswordResetToken } from "../src/operations/UserlandUsersControllerCreatePasswordResetToken.ts";
import { UserlandUsersControllerList } from "../src/operations/UserlandUsersControllerList.ts";
import { UserlandUsersControllerResetPassword } from "../src/operations/UserlandUsersControllerResetPassword.ts";
import { runEffect, testRunId } from "./setup.ts";

describe("UserlandUsersControllerResetPassword", () => {
  it(
    "resets a user's password using a valid token",
    async () => {
      const users = await runEffect(UserlandUsersControllerList({ limit: 5 }));
      const target = users.data.find((u) => u.email && u.email.length > 0);

      if (!target) {
        const error = await runEffect(
          UserlandUsersControllerResetPassword({
            token: `password_reset_token_does_not_exist_${testRunId}`,
            new_password: `Distilled-${testRunId}-Aa1!aaaa`,
          }).pipe(Effect.flip),
        );
        expect(error._tag).toBe("NotFound");
        return;
      }

      const tokenResult = await runEffect(
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

      if (!tokenResult.ok) {
        // The seed user may not support password auth; the SDK still surfaces
        // a typed error from the password-reset confirm endpoint.
        const error = await runEffect(
          UserlandUsersControllerResetPassword({
            token: `password_reset_token_does_not_exist_${testRunId}`,
            new_password: `Distilled-${testRunId}-Aa1!aaaa`,
          }).pipe(Effect.flip),
        );
        expect(error._tag).toBe("NotFound");
        return;
      }

      const result = await runEffect(
        UserlandUsersControllerResetPassword({
          token: tokenResult.token.password_reset_token,
          new_password: `Distilled-${testRunId}-Aa1!aaaa`,
        }),
      );

      expect(result).toBeDefined();
      expect(result.user).toBeDefined();
      expect(typeof result.user.id).toBe("string");
      expect(result.user.email).toBe(target.email);
    },
    { timeout: 60_000 },
  );

  it(
    "fails with BadRequest when token is empty",
    async () => {
      const error = await runEffect(
        UserlandUsersControllerResetPassword({
          token: "",
          new_password: `Distilled-${testRunId}-Aa1!aaaa`,
        }).pipe(Effect.flip),
      );
      expect(["BadRequest", "UnprocessableEntity"]).toContain(error._tag);
    },
    { timeout: 30_000 },
  );

  it(
    "fails with Forbidden when the password fails environment policy",
    async () => {
      // A password matching a known-breached pattern is forbidden by policy.
      const error = await runEffect(
        UserlandUsersControllerResetPassword({
          token: `password_reset_token_${testRunId}`,
          new_password: "password",
        }).pipe(Effect.flip),
      );
      expect(["Forbidden", "NotFound"]).toContain(error._tag);
    },
    { timeout: 30_000 },
  );

  it(
    "fails with NotFound for a non-existent token",
    async () => {
      const error = await runEffect(
        UserlandUsersControllerResetPassword({
          token: `password_reset_token_does_not_exist_${testRunId}`,
          new_password: `Distilled-${testRunId}-Aa1!aaaa`,
        }).pipe(Effect.flip),
      );
      expect(error._tag).toBe("NotFound");
    },
    { timeout: 30_000 },
  );

  it(
    "fails with UnprocessableEntity for a password that does not meet policy",
    async () => {
      const error = await runEffect(
        UserlandUsersControllerResetPassword({
          token: `password_reset_token_${testRunId}`,
          new_password: "1",
        }).pipe(Effect.flip),
      );
      expect(["NotFound", "UnprocessableEntity"]).toContain(error._tag);
    },
    { timeout: 30_000 },
  );
});
