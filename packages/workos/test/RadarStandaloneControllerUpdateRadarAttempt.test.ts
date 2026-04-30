import { Effect } from "effect";
import { describe, expect, it } from "vitest";
import { RadarStandaloneControllerAssess } from "../src/operations/RadarStandaloneControllerAssess.ts";
import { RadarStandaloneControllerUpdateRadarAttempt } from "../src/operations/RadarStandaloneControllerUpdateRadarAttempt.ts";
import { runEffect, testRunId } from "./setup.ts";

describe("RadarStandaloneControllerUpdateRadarAttempt", () => {
  it(
    "updates a Radar attempt's status",
    async () => {
      await runEffect(
        Effect.gen(function* () {
          const attempt = yield* RadarStandaloneControllerAssess({
            ip_address: "203.0.113.42",
            user_agent:
              "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36",
            email: `distilled-radar-update-${testRunId}@example.com`,
            auth_method: "Password",
            action: "login",
          });
          return yield* RadarStandaloneControllerUpdateRadarAttempt({
            id: attempt.attempt_id,
            attempt_status: "success",
          });
        }),
      );
    },
    { timeout: 30_000 },
  );

  it(
    "fails with NotFound for a non-existent attempt id",
    async () => {
      const error = await runEffect(
        RadarStandaloneControllerUpdateRadarAttempt({
          id: `radar_attempt_does_not_exist_${testRunId}`,
          attempt_status: "success",
        }).pipe(Effect.flip),
      );
      expect(["BadRequest", "NotFound"]).toContain(error._tag);
    },
    { timeout: 30_000 },
  );

  it(
    "fails with BadRequest for an invalid attempt_status value",
    async () => {
      const error = await runEffect(
        Effect.gen(function* () {
          const attempt = yield* RadarStandaloneControllerAssess({
            ip_address: "203.0.113.42",
            user_agent:
              "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36",
            email: `distilled-radar-update-400-${testRunId}@example.com`,
            auth_method: "Password",
            action: "login",
          });
          return yield* RadarStandaloneControllerUpdateRadarAttempt({
            id: attempt.attempt_id,
            attempt_status: "not-a-valid-status",
          });
        }).pipe(Effect.flip),
      );
      expect(error._tag).toBe("BadRequest");
    },
    { timeout: 30_000 },
  );
});
