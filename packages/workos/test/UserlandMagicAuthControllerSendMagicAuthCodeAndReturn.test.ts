import { Effect } from "effect";
import { describe, expect, it } from "vitest";
import { UserlandMagicAuthControllerSendMagicAuthCodeAndReturn } from "../src/operations/UserlandMagicAuthControllerSendMagicAuthCodeAndReturn.ts";
import { runEffect, testRunId } from "./setup.ts";

describe("UserlandMagicAuthControllerSendMagicAuthCodeAndReturn", () => {
  it(
    "creates a magic auth code for a valid email",
    async () => {
      const email = `distilled-magic-${testRunId}@example.com`;
      const result = await runEffect(
        UserlandMagicAuthControllerSendMagicAuthCodeAndReturn({ email }),
      );
      expect(result).toBeDefined();
      expect(typeof result.id).toBe("string");
      expect(typeof result.user_id).toBe("string");
      expect(result.email).toBe(email);
      expect(typeof result.code).toBe("string");
      expect(result.code.length).toBeGreaterThan(0);
      expect(typeof result.expires_at).toBe("string");
    },
    { timeout: 30_000 },
  );

  it(
    "fails with BadRequest when email is empty",
    async () => {
      const error = await runEffect(
        UserlandMagicAuthControllerSendMagicAuthCodeAndReturn({
          email: "",
        }).pipe(Effect.flip),
      );
      expect(["BadRequest", "UnprocessableEntity"]).toContain(error._tag);
    },
    { timeout: 30_000 },
  );

  it(
    "fails with UnprocessableEntity for a malformed email",
    async () => {
      const error = await runEffect(
        UserlandMagicAuthControllerSendMagicAuthCodeAndReturn({
          email: `not-an-email-${testRunId}`,
        }).pipe(Effect.flip),
      );
      expect(error._tag).toBe("UnprocessableEntity");
    },
    { timeout: 30_000 },
  );
});
