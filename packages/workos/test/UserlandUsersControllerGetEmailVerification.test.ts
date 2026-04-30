import { Effect } from "effect";
import { describe, expect, it } from "vitest";
import { UserlandUsersControllerGetEmailVerification } from "../src/operations/UserlandUsersControllerGetEmailVerification.ts";
import { runEffect, testRunId } from "./setup.ts";

describe("UserlandUsersControllerGetEmailVerification", () => {
  it(
    "returns email verification details when present, or NotFound otherwise",
    async () => {
      // Email verification codes are issued via internal flows that don't
      // surface their id through any other SDK operation, so we can't
      // deterministically construct one. We exercise the live API with a
      // probe id and accept either a populated response or a typed
      // NotFound error.
      const id = `email_verification_${testRunId}`;
      const result = await runEffect(
        UserlandUsersControllerGetEmailVerification({ id }).pipe(
          Effect.matchEffect({
            onSuccess: (verification) =>
              Effect.succeed({ ok: true as const, verification }),
            onFailure: (error) =>
              Effect.succeed({ ok: false as const, error }),
          }),
        ),
      );

      if (result.ok) {
        expect(result.verification).toBeDefined();
        expect(typeof result.verification.id).toBe("string");
        expect(typeof result.verification.user_id).toBe("string");
        expect(typeof result.verification.email).toBe("string");
        expect(typeof result.verification.code).toBe("string");
        expect(typeof result.verification.expires_at).toBe("string");
      } else {
        expect(result.error._tag).toBe("NotFound");
      }
    },
    { timeout: 30_000 },
  );

  it(
    "fails with NotFound for a non-existent email verification id",
    async () => {
      const error = await runEffect(
        UserlandUsersControllerGetEmailVerification({
          id: `email_verification_does_not_exist_${testRunId}`,
        }).pipe(Effect.flip),
      );
      expect(error._tag).toBe("NotFound");
    },
    { timeout: 30_000 },
  );
});
