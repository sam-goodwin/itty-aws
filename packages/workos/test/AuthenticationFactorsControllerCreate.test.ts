import { Effect } from "effect";
import { describe, expect, it } from "vitest";
import { AuthenticationFactorsControllerCreate } from "../src/operations/AuthenticationFactorsControllerCreate.ts";
import { runEffect, testRunId } from "./setup.ts";

describe("AuthenticationFactorsControllerCreate", () => {
  it(
    "enrolls a TOTP authentication factor",
    async () => {
      const factor = await runEffect(
        AuthenticationFactorsControllerCreate({
          type: "totp",
          totp_issuer: `distilled-workos-${testRunId}`,
          totp_user: `enroll-user-${testRunId}`,
        }),
      );

      expect(factor).toBeDefined();
      expect(typeof factor.id).toBe("string");
      expect(factor.type).toBe("totp");
      expect(factor.totp).toBeDefined();
      expect(factor.totp?.secret).toBeDefined();
      expect(typeof factor.totp?.qr_code).toBe("string");
      expect(typeof factor.totp?.uri).toBe("string");
    },
    { timeout: 30_000 },
  );

  it(
    "fails with UnprocessableEntity when enrolling SMS factor without a phone number",
    async () => {
      const error = await runEffect(
        AuthenticationFactorsControllerCreate({
          type: "sms",
        }).pipe(Effect.flip),
      );

      expect(error._tag).toBe("UnprocessableEntity");
    },
    { timeout: 30_000 },
  );
});
