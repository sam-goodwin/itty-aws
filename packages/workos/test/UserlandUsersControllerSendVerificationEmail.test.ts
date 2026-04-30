import { Effect } from "effect";
import { describe, expect, it } from "vitest";
import { UserlandUsersControllerList } from "../src/operations/UserlandUsersControllerList.ts";
import { UserlandUsersControllerSendVerificationEmail } from "../src/operations/UserlandUsersControllerSendVerificationEmail.ts";
import { runEffect, testRunId } from "./setup.ts";

const typedErrorTags = ["BadRequest", "NotFound"] as const;

describe("UserlandUsersControllerSendVerificationEmail", () => {
  it(
    "sends a verification email, or surfaces a typed error",
    async () => {
      // The API only accepts a path id. Whether the call succeeds depends on
      // whether the seed user's email is already verified — already-verified
      // users typically yield a typed BadRequest. Either outcome verifies the
      // SDK maps the response to a typed shape or a typed error class.
      const users = await runEffect(UserlandUsersControllerList({ limit: 1 }));
      const seedId =
        users.data.length > 0
          ? (users.data[0] as { id: string }).id
          : `user_does_not_exist_${testRunId}`;

      const result = await runEffect(
        UserlandUsersControllerSendVerificationEmail({ id: seedId }).pipe(
          Effect.matchEffect({
            onSuccess: (response) =>
              Effect.succeed({ ok: true as const, response }),
            onFailure: (error) =>
              Effect.succeed({ ok: false as const, error }),
          }),
        ),
      );

      if (result.ok) {
        expect(result.response).toBeDefined();
        expect(typeof result.response.user.id).toBe("string");
        expect(typeof result.response.user.email).toBe("string");
        expect(typeof result.response.user.email_verified).toBe("boolean");
      } else {
        expect(typedErrorTags).toContain(result.error._tag);
      }
    },
    { timeout: 60_000 },
  );

  it(
    "fails with a typed BadRequest when the user's email is already verified or otherwise invalid",
    async () => {
      const users = await runEffect(UserlandUsersControllerList({ limit: 1 }));
      const seedId =
        users.data.length > 0
          ? (users.data[0] as { id: string }).id
          : `user_does_not_exist_${testRunId}`;

      const error = await runEffect(
        UserlandUsersControllerSendVerificationEmail({ id: seedId }).pipe(
          Effect.flip,
        ),
      );
      expect(typedErrorTags).toContain(error._tag);
    },
    { timeout: 30_000 },
  );

  it(
    "fails with NotFound for a non-existent user id",
    async () => {
      const error = await runEffect(
        UserlandUsersControllerSendVerificationEmail({
          id: `user_does_not_exist_${testRunId}`,
        }).pipe(Effect.flip),
      );
      expect(error._tag).toBe("NotFound");
    },
    { timeout: 30_000 },
  );
});
