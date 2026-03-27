import { Effect } from "effect";
import { describe, expect, it } from "vitest";
import { runEffect } from "./setup";
import { getConsumptionHistoryPerAccount } from "../src/operations/getConsumptionHistoryPerAccount";
import { getConsumptionHistoryPerProject } from "../src/operations/getConsumptionHistoryPerProject";

describe("Consumption", () => {
  // Use a recent time range for consumption queries
  const now = new Date();
  const from =
    new Date(now.getTime() - 7 * 24 * 60 * 60 * 1000)
      .toISOString()
      .slice(0, 19) + "Z";
  const to = now.toISOString().slice(0, 19) + "Z";

  describe("getConsumptionHistoryPerAccount", () => {
    it("happy path - retrieves account consumption or gets Forbidden on free plan", async () => {
      await runEffect(
        getConsumptionHistoryPerAccount({
          from,
          to,
          granularity: "daily",
        }).pipe(
          Effect.map((result) => {
            expect(result.periods).toBeDefined();
            expect(Array.isArray(result.periods)).toBe(true);
          }),
          Effect.catch((e) => {
            // Free/Launch plans get Forbidden - this is expected
            expect(e._tag).toBe("Forbidden");
            return Effect.void;
          }),
        ),
      );
    }, 30_000);
  });

  describe("getConsumptionHistoryPerProject", () => {
    it("happy path - retrieves project consumption or gets Forbidden on free plan", async () => {
      await runEffect(
        getConsumptionHistoryPerProject({
          from,
          to,
          granularity: "daily",
        }).pipe(
          Effect.map((result) => {
            expect(result.periods).toBeDefined();
            expect(Array.isArray(result.periods)).toBe(true);
          }),
          Effect.catch((e) => {
            // Free/Launch plans get Forbidden - this is expected
            expect(e._tag).toBe("Forbidden");
            return Effect.void;
          }),
        ),
      );
    }, 30_000);
  });

  // Note: getConsumptionHistoryPerProjectV2 requires org_id which
  // may not be available in all test environments. Skipping.
});
