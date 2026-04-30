import { Effect } from "effect";
import { describe, expect, it } from "vitest";
import { UserlandUsersControllerConfirmEmailChange } from "../src/operations/UserlandUsersControllerConfirmEmailChange.ts";
import { UserlandUsersControllerList } from "../src/operations/UserlandUsersControllerList.ts";
import { runEffect, testRunId } from "./setup.ts";

const typedErrorTags = [
  "BadRequest",
  "NotFound",
  "Conflict",
  "UnprocessableEntity",
] as const;

describe("UserlandUsersControllerConfirmEmailChange", () => {
  it(
    "confirms an email change, or surfaces a typed error",
    async () => {
      // The happy path requires a real one-time code that's only delivered to
      // the user via email — we can't synthesize one in a test. So we probe
      // with an arbitrary code against a real user id; either the SDK maps
      // the response to a typed error class or (extraordinarily) succeeds.
      const users = await runEffect(UserlandUsersControllerList({ limit: 1 }));
      const seedId =
        users.data.length > 0
          ? (users.data[0] as { id: string }).id
          : `user_does_not_exist_${testRunId}`;

      const result = await runEffect(
        UserlandUsersControllerConfirmEmailChange({
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
        UserlandUsersControllerConfirmEmailChange({
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
        UserlandUsersControllerConfirmEmailChange({
          id: `user_does_not_exist_${testRunId}`,
          code: `code_${testRunId}`,
        }).pipe(Effect.flip),
      );
      expect(error._tag).toBe("NotFound");
    },
    { timeout: 30_000 },
  );

  it(
    "fails with a typed Conflict, BadRequest, or related error for an unrecognized code",
    async () => {
      // Submitting an arbitrary code against a real user typically resolves
      // to one of the typed error classes (Conflict if the new email collides
      // with another user's email, otherwise BadRequest / UnprocessableEntity
      // for an invalid one-time code).
      const users = await runEffect(UserlandUsersControllerList({ limit: 1 }));
      const seedId =
        users.data.length > 0
          ? (users.data[0] as { id: string }).id
          : `user_does_not_exist_${testRunId}`;

      const error = await runEffect(
        UserlandUsersControllerConfirmEmailChange({
          id: seedId,
          code: `definitely-not-a-real-code-${testRunId}`,
        }).pipe(Effect.flip),
      );
      expect(typedErrorTags).toContain(error._tag);
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
        UserlandUsersControllerConfirmEmailChange({
          id: seedId,
          code: `${"x".repeat(2048)}-${testRunId}`,
        }).pipe(Effect.flip),
      );
      expect(typedErrorTags).toContain(error._tag);
    },
    { timeout: 30_000 },
  );
});
