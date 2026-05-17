import * as Effect from "effect/Effect";
import { describe, expect, it } from "vitest";
import { meterscreate } from "../src/operations/meterscreate.ts";
import { hasLivePolarCredentials, runEffect, testRunId } from "./setup.ts";

const describeLive = hasLivePolarCredentials ? describe : describe.skip;

describeLive("meterscreate", () => {
  it(
    "creates a meter with a count aggregation",
    { timeout: 30_000 },
    async () => {
      const meterName = `distilled-polar-meter-${testRunId}`;

      const meter = await runEffect(
        meterscreate({
          name: meterName,
          filter: {
            conjunction: "and",
            clauses: [
              {
                property: "name",
                operator: "eq",
                value: `distilled-event-${testRunId}`,
              },
            ],
          },
          aggregation: { func: "count" },
          metadata: {
            test_run_id: testRunId,
          },
        }),
      );

      expect(typeof meter.id).toBe("string");
      expect(meter.name).toBe(meterName);
      expect(typeof meter.organization_id).toBe("string");
      expect(typeof meter.created_at).toBe("string");
      expect(meter.unit).toBe("scalar");
      expect(meter.filter.conjunction).toBe("and");
      expect(meter.aggregation.func).toBe("count");
      expect(meter.metadata.test_run_id).toBe(testRunId);
    },
  );

  it(
    "fails with UnprocessableEntity for an invalid aggregation function",
    { timeout: 30_000 },
    async () => {
      // Polar accepts only count/sum/max/min/avg/unique; "median" is rejected
      // with a typed UnprocessableEntity from the validation layer.
      const error = await runEffect(
        meterscreate({
          name: `distilled-polar-meter-bad-${testRunId}`,
          filter: { conjunction: "and", clauses: [] },
          // @ts-expect-error — intentionally invalid aggregation func
          aggregation: { func: "median" },
        }).pipe(Effect.flip),
      );

      expect(error._tag).toBe("RequestValidationError");
    },
  );
});
