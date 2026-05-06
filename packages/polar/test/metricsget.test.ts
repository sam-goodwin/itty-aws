import * as Effect from "effect/Effect";
import { describe, expect, it } from "vitest";
import { metricsget } from "../src/operations/metricsget.ts";
import { hasLivePolarCredentials, runEffect } from "./setup.ts";

const describeLive = hasLivePolarCredentials ? describe : describe.skip;

describeLive("metricsget", () => {
  it(
    "returns metrics over a date range with a daily interval",
    { timeout: 30_000 },
    async () => {
      const result = await runEffect(
        metricsget({
          start_date: "2024-01-01",
          end_date: "2024-01-31",
          interval: "day",
          timezone: "UTC",
        }),
      );

      expect(Array.isArray(result.periods)).toBe(true);
      expect(result.periods.length).toBeGreaterThan(0);
      for (const period of result.periods) {
        expect(typeof period.timestamp).toBe("string");
      }
      expect(typeof result.totals).toBe("object");
      expect(typeof result.metrics).toBe("object");
    },
  );

  it(
    "rejects an invalid interval with UnprocessableEntity",
    { timeout: 30_000 },
    async () => {
      const error = await runEffect(
        metricsget({
          start_date: "2024-01-01",
          end_date: "2024-01-31",
          interval: "not-a-real-interval",
          timezone: "UTC",
        }).pipe(Effect.flip),
      );
      expect(error._tag).toBe("RequestValidationError");
    },
  );
});
