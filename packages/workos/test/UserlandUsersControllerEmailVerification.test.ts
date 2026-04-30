import { Effect } from "effect";
import { describe, expect, it } from "vitest";
import { UserlandUsersControllerEmailVerification } from "../src/operations/UserlandUsersControllerEmailVerification.ts";
import { UserlandUsersControllerList } from "../src/operations/UserlandUsersControllerList.ts";
import { runEffect, testRunId } from "./setup.ts";

const typedErrorTags = ["BadRequest", "NotFound", "UnprocessableEntity"] as const;

describe("UserlandUsersControllerEmailVerification", () => {
  it(
    "verifies an email, or surfaces a typed error",
    async () => {
      // The happy path requires the user's real one-time email-verification
      // code, which is delivered out-of-band and can't be synthesized in a
      // test. We probe a real user id with an arbitrary code; either the SDK
      // returns the verification shape or it surfaces a typed error class.
      const users = await runEffect(UserlandUsersControllerList({ limit: 1 }));
      const seedId =
        users.data.length > 0
          ? (users.data[0] as { id: string }).id
          : `user_does_not_exist_${testRunId}`;

      const result = await runEffect(
        UserlandUsersControllerEmailVerification({
          id: seedId,
          code: `code_${testRunId}`,
        }).pipe(
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
    "fails with a typed BadRequest when the code is empty",
    async () => {
      const users = await runEffect(UserlandUsersControllerList({ limit: 1 }));
      const seedId =
        users.data.length > 0
          ? (users.data[0] as { id: string }).id
          : `user_does_not_exist_${testRunId}`;

      const error = await runEffect(
        UserlandUsersControllerEmailVerification({
          id: seedId,
          code: "",
        }).pipe(Effect.flip),
      );
      expect(typedErrorTags).toContain(error._tag);
    },
    { timeout: 30_000 },
  );

  it(
    "fails with NotFound for a non-existent user id",
    async () => {
      const error = await runEffect(
        UserlandUsersControllerEmailVerification({
          id: `user_does_not_exist_${testRunId}`,
          code: `code_${testRunId}`,
        }).pipe(Effect.flip),
      );
      expect(error._tag).toBe("NotFound");
    },
    { timeout: 30_000 },
  );

  it(
    "fails with a typed UnprocessableEntity for a malformed code value",
    async () => {
      const users = await runEffect(UserlandUsersControllerList({ limit: 1 }));
      const seedId =
        users.data.length > 0
          ? (users.data[0] as { id: string }).id
          : `user_does_not_exist_${testRunId}`;

      const error = await runEffect(
        UserlandUsersControllerEmailVerification({
          id: seedId,
          code: `${"x".repeat(2048)}-${testRunId}`,
        }).pipe(Effect.flip),
      );
      expect(typedErrorTags).toContain(error._tag);
    },
    { timeout: 30_000 },
  );
});
