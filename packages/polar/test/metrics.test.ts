import * as Effect from "effect/Effect";
import { describe, expect, it } from "vitest";
import { metricscreateDashboard } from "../src/operations/metricscreateDashboard.ts";
import { metricsdeleteDashboard } from "../src/operations/metricsdeleteDashboard.ts";
import { metricsget } from "../src/operations/metricsget.ts";
import { metricsgetDashboard } from "../src/operations/metricsgetDashboard.ts";
import { metricslimits } from "../src/operations/metricslimits.ts";
import { metricslistDashboards } from "../src/operations/metricslistDashboards.ts";
import { metricsupdateDashboard } from "../src/operations/metricsupdateDashboard.ts";
import {
  hasLivePolarCredentials,
  organizationId,
  runEffect,
  testRunId,
} from "./setup.ts";

const describeLive = hasLivePolarCredentials ? describe : describe.skip;

describeLive("Metrics", () => {
  it(
    "reads metrics and manages metric dashboards",
    { timeout: 120_000 },
    async () => {
      const name = `distilled-polar-metrics-${testRunId}`;
      const updatedName = `${name}-updated`;

      const result = await runEffect(
        Effect.gen(function* () {
          const limits = yield* metricslimits({});
          const metrics = yield* metricsget({
            start_date: "2026-01-01",
            end_date: "2026-01-02",
            interval: "day",
            organization_id: organizationId,
          });
          const created = yield* metricscreateDashboard({
            name,
            metrics: ["revenue"],
            organization_id: organizationId,
          });

          return yield* Effect.gen(function* () {
            const fetched = yield* metricsgetDashboard({ id: created.id });
            const listed = yield* metricslistDashboards({
              organization_id: organizationId,
            });
            const updated = yield* metricsupdateDashboard({
              id: created.id,
              name: updatedName,
              metrics: ["revenue", "orders"],
            });
            const deleted = yield* metricsdeleteDashboard({ id: created.id });

            return {
              limits,
              metrics,
              created,
              fetched,
              listed,
              updated,
              deleted,
            };
          }).pipe(
            Effect.ensuring(
              metricsdeleteDashboard({ id: created.id }).pipe(Effect.ignore),
            ),
          );
        }),
      );

      expect(result.limits.min_date).toBeTruthy();
      expect(Array.isArray(result.metrics.periods)).toBe(true);
      expect(result.created.name).toBe(name);
      expect(result.fetched.id).toBe(result.created.id);
      expect(
        result.listed.some((dashboard) => dashboard.id === result.created.id),
      ).toBe(true);
      expect(result.updated.name).toBe(updatedName);
      expect(result.updated.metrics).toContain("orders");
      expect(result.deleted).toBeUndefined();
    },
  );
});
