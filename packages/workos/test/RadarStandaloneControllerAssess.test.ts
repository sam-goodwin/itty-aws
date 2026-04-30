import { Effect } from "effect";
import { describe, expect, it } from "vitest";
import { RadarStandaloneControllerAssess } from "../src/operations/RadarStandaloneControllerAssess.ts";
import { runEffect, testRunId } from "./setup.ts";

describe("RadarStandaloneControllerAssess", () => {
  it(
    "assesses a sign-in attempt and returns a verdict",
    async () => {
      const result = await runEffect(
        RadarStandaloneControllerAssess({
          ip_address: "203.0.113.42",
          user_agent:
            "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36",
          email: `distilled-radar-${testRunId}@example.com`,
          auth_method: "Password",
          action: "login",
        }),
      );
      expect(result).toBeDefined();
      expect(["allow", "block", "challenge"]).toContain(result.verdict);
      expect(typeof result.reason).toBe("string");
      expect(typeof result.attempt_id).toBe("string");
    },
    { timeout: 30_000 },
  );

  it(
    "fails with BadRequest for a malformed ip_address",
    async () => {
      const error = await runEffect(
        RadarStandaloneControllerAssess({
          ip_address: "not-an-ip",
          user_agent:
            "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36",
          email: `distilled-radar-400-${testRunId}@example.com`,
          auth_method: "Password",
          action: "login",
        }).pipe(Effect.flip),
      );
      expect(error._tag).toBe("BadRequest");
    },
    { timeout: 30_000 },
  );
});
