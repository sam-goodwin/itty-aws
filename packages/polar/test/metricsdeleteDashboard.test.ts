import * as Effect from "effect/Effect";
import { describe, expect, it } from "vitest";
import { metricscreateDashboard } from "../src/operations/metricscreateDashboard.ts";
import { metricsdeleteDashboard } from "../src/operations/metricsdeleteDashboard.ts";
import { metricsgetDashboard } from "../src/operations/metricsgetDashboard.ts";
import { hasLivePolarCredentials, runEffect, testRunId } from "./setup.ts";

const describeLive = hasLivePolarCredentials ? describe : describe.skip;

describeLive("metricsdeleteDashboard", () => {
  it("deletes a metric dashboard", { timeout: 30_000 }, async () => {
    const created = await runEffect(
      metricscreateDashboard({
        name: `distilled-polar-mdd-${testRunId}`,
        metrics: ["revenue"],
      }),
    );

    const result = await runEffect(metricsdeleteDashboard({ id: created.id }));
    expect(result).toBeUndefined();

    const error = await runEffect(
      metricsgetDashboard({ id: created.id }).pipe(Effect.flip),
    );
    expect(error._tag).toBe("ResourceNotFound");
  });

  it(
    "rejects a malformed dashboard id with UnprocessableEntity",
    { timeout: 30_000 },
    async () => {
      const error = await runEffect(
        metricsdeleteDashboard({ id: "not-a-valid-uuid" }).pipe(Effect.flip),
      );
      expect(error._tag).toBe("RequestValidationError");
    },
  );
});
