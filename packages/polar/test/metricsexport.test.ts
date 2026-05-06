import * as Effect from "effect/Effect";
import { describe, expect, it } from "vitest";
import { metricsexport } from "../src/operations/metricsexport.ts";
import { hasLivePolarCredentials, runEffect } from "./setup.ts";

const describeLive = hasLivePolarCredentials ? describe : describe.skip;

describeLive("metricsexport", () => {
  it("exports metrics as a CSV string", { timeout: 30_000 }, async () => {
    const result = await runEffect(
      metricsexport({
        start_date: "2024-01-01",
        end_date: "2024-01-31",
        interval: "day",
        timezone: "UTC",
      }),
    );

    expect(typeof result).toBe("string");
    expect(result.length).toBeGreaterThan(0);
    expect(result).toContain(",");
  });

  it(
    "rejects an invalid interval with UnprocessableEntity",
    { timeout: 30_000 },
    async () => {
      const error = await runEffect(
        metricsexport({
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
