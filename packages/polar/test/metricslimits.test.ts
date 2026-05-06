import { describe, expect, it } from "vitest";
import { metricslimits } from "../src/operations/metricslimits.ts";
import { hasLivePolarCredentials, runEffect } from "./setup.ts";

const describeLive = hasLivePolarCredentials ? describe : describe.skip;

describeLive("metricslimits", () => {
  it("returns the metrics interval limits", { timeout: 30_000 }, async () => {
    const result = await runEffect(metricslimits({}));

    expect(typeof result.min_date).toBe("string");
    expect(result.min_date.length).toBeGreaterThan(0);

    const intervals = result.intervals;
    for (const key of ["hour", "day", "week", "month", "year"] as const) {
      const limit = intervals[key];
      expect(typeof limit.min_days).toBe("number");
      expect(typeof limit.max_days).toBe("number");
      expect(limit.min_days).toBeGreaterThanOrEqual(0);
      expect(limit.max_days).toBeGreaterThanOrEqual(limit.min_days);
    }
  });
});
