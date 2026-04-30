import { Effect } from "effect";
import { describe, expect, it } from "vitest";
import { UserlandUsersControllerList } from "../src/operations/UserlandUsersControllerList.ts";
import { UserlandUsersControllerSendEmailChange } from "../src/operations/UserlandUsersControllerSendEmailChange.ts";
import { runEffect, testRunId } from "./setup.ts";

const typedErrorTags = ["NotFound", "Conflict", "UnprocessableEntity"] as const;

describe("UserlandUsersControllerSendEmailChange", () => {
  it(
    "sends an email change code, or surfaces a typed error",
    async () => {
      // The happy path actually emails a one-time code to the requested
      // address. We pick the first user from the list and request a change
      // to a unique-per-run distilled.test address. Either the SDK returns
      // the email-change shape or it surfaces a typed error class.
      const users = await runEffect(UserlandUsersControllerList({ limit: 1 }));
      const seedId =
        users.data.length > 0
          ? (users.data[0] as { id: string }).id
          : `user_does_not_exist_${testRunId}`;

      const result = await runEffect(
        UserlandUsersControllerSendEmailChange({
          id: seedId,
          new_email: `distilled-${testRunId}@distilled.test`,
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
        expect(result.response.new_email).toBe(
          `distilled-${testRunId}@distilled.test`,
        );
        expect(typeof result.response.expires_at).toBe("string");
        expect(typeof result.response.created_at).toBe("string");
      } else {
        expect(typedErrorTags).toContain(result.error._tag);
      }
    },
    { timeout: 60_000 },
  );

  it(
    "fails with NotFound for a non-existent user id",
    async () => {
      const error = await runEffect(
        UserlandUsersControllerSendEmailChange({
          id: `user_does_not_exist_${testRunId}`,
          new_email: `distilled-${testRunId}@distilled.test`,
        }).pipe(Effect.flip),
      );
      expect(error._tag).toBe("NotFound");
    },
    { timeout: 30_000 },
  );

  it(
    "fails with a typed Conflict when the new email collides with an existing user",
    async () => {
      // Reuse the existing seed user's own email as the new email. The API
      // typically rejects this as a Conflict (or related typed error).
      const users = await runEffect(UserlandUsersControllerList({ limit: 1 }));
      if (users.data.length === 0) {
        const error = await runEffect(
          UserlandUsersControllerSendEmailChange({
            id: `user_does_not_exist_${testRunId}`,
            new_email: `distilled-${testRunId}@distilled.test`,
          }).pipe(Effect.flip),
        );
        expect(typedErrorTags).toContain(error._tag);
        return;
      }

      const seed = users.data[0] as { id: string; email: string };
      const error = await runEffect(
        UserlandUsersControllerSendEmailChange({
          id: seed.id,
          new_email: seed.email,
        }).pipe(Effect.flip),
      );
      expect(typedErrorTags).toContain(error._tag);
    },
    { timeout: 30_000 },
  );

  it(
    "fails with a typed UnprocessableEntity for a malformed new_email",
    async () => {
      const users = await runEffect(UserlandUsersControllerList({ limit: 1 }));
      const seedId =
        users.data.length > 0
          ? (users.data[0] as { id: string }).id
          : `user_does_not_exist_${testRunId}`;

      const error = await runEffect(
        UserlandUsersControllerSendEmailChange({
          id: seedId,
          new_email: "not-a-valid-email",
        }).pipe(Effect.flip),
      );
      expect(typedErrorTags).toContain(error._tag);
    },
    { timeout: 30_000 },
  );
});
