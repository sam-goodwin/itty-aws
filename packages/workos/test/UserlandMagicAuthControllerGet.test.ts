import { Effect } from "effect";
import { describe, expect, it } from "vitest";
import { UserlandMagicAuthControllerGet } from "../src/operations/UserlandMagicAuthControllerGet.ts";
import { UserlandMagicAuthControllerSendMagicAuthCodeAndReturn } from "../src/operations/UserlandMagicAuthControllerSendMagicAuthCodeAndReturn.ts";
import { runEffect, testRunId } from "./setup.ts";

describe("UserlandMagicAuthControllerGet", () => {
  it(
    "fetches a magic auth code by id",
    async () => {
      const email = `distilled-magic-get-${testRunId}@example.com`;
      const result = await runEffect(
        Effect.gen(function* () {
          const created =
            yield* UserlandMagicAuthControllerSendMagicAuthCodeAndReturn({
              email,
            });
          return yield* UserlandMagicAuthControllerGet({ id: created.id });
        }),
      );

      expect(result).toBeDefined();
      expect(typeof result.id).toBe("string");
      expect(result.email).toBe(email);
      expect(typeof result.user_id).toBe("string");
      expect(typeof result.code).toBe("string");
      expect(typeof result.expires_at).toBe("string");
    },
    { timeout: 30_000 },
  );

  it(
    "fails with NotFound for a non-existent magic auth code id",
    async () => {
      const error = await runEffect(
        UserlandMagicAuthControllerGet({
          id: `magic_auth_does_not_exist_${testRunId}`,
        }).pipe(Effect.flip),
      );
      expect(error._tag).toBe("NotFound");
    },
    { timeout: 30_000 },
  );
});
