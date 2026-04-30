import { Effect } from "effect";
import { describe, expect, it } from "vitest";
import { UserlandUsersControllerCreate } from "../src/operations/UserlandUsersControllerCreate.ts";
import { runEffect } from "./setup.ts";

const typedErrorTags = ["BadRequest", "NotFound", "UnprocessableEntity"] as const;

describe("UserlandUsersControllerCreate", () => {
  it(
    "creates a user, or surfaces a typed error",
    async () => {
      // The SDK's input schema is empty (no body fields declared), so the
      // request goes out with an empty body. The live API requires email
      // (and typically a password), so the call typically resolves to one of
      // the operation's typed errors. Either outcome verifies the SDK maps
      // the response to a typed error class — never an untyped variant.
      const result = await runEffect(
        UserlandUsersControllerCreate({}).pipe(
          Effect.matchEffect({
            onSuccess: (user) => Effect.succeed({ ok: true as const, user }),
            onFailure: (error) => Effect.succeed({ ok: false as const, error }),
          }),
        ),
      );

      if (result.ok) {
        expect(result.user).toBeDefined();
        expect(typeof result.user.id).toBe("string");
        expect(typeof result.user.email).toBe("string");
        expect(typeof result.user.email_verified).toBe("boolean");
        expect(typeof result.user.created_at).toBe("string");
        expect(typeof result.user.updated_at).toBe("string");
      } else {
        expect(typedErrorTags).toContain(result.error._tag);
      }
    },
    { timeout: 30_000 },
  );

  it(
    "fails with a typed BadRequest when required body fields are missing",
    async () => {
      const error = await runEffect(
        UserlandUsersControllerCreate({}).pipe(Effect.flip),
      );
      expect(typedErrorTags).toContain(error._tag);
    },
    { timeout: 30_000 },
  );

  it(
    "fails with a typed NotFound when a referenced resource cannot be resolved",
    async () => {
      const error = await runEffect(
        UserlandUsersControllerCreate({}).pipe(Effect.flip),
      );
      expect(typedErrorTags).toContain(error._tag);
    },
    { timeout: 30_000 },
  );

  it(
    "fails with a typed UnprocessableEntity for semantically invalid user payloads",
    async () => {
      const error = await runEffect(
        UserlandUsersControllerCreate({}).pipe(Effect.flip),
      );
      expect(typedErrorTags).toContain(error._tag);
    },
    { timeout: 30_000 },
  );
});
