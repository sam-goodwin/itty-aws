import * as Effect from "effect/Effect";
import * as Ref from "effect/Ref";
import { describe, expect, it } from "vitest";
import { metricscreateDashboard } from "../src/operations/metricscreateDashboard.ts";
import { metricsdeleteDashboard } from "../src/operations/metricsdeleteDashboard.ts";
import { metricsupdateDashboard } from "../src/operations/metricsupdateDashboard.ts";
import { hasLivePolarCredentials, runEffect, testRunId } from "./setup.ts";

const describeLive = hasLivePolarCredentials ? describe : describe.skip;

describeLive("metricsupdateDashboard", () => {
  it(
    "renames a metric dashboard and replaces its metrics",
    { timeout: 30_000 },
    async () => {
      await runEffect(
        Effect.gen(function* () {
          const idRef = yield* Ref.make<string | null>(null);

          yield* Effect.gen(function* () {
            const created = yield* metricscreateDashboard({
              name: `distilled-polar-mud-${testRunId}`,
              metrics: ["revenue"],
            });
            yield* Ref.set(idRef, created.id);

            const renamed = `distilled-polar-mud-renamed-${testRunId}`;
            const updated = yield* metricsupdateDashboard({
              id: created.id,
              name: renamed,
              metrics: ["orders"],
            });

            expect(updated.id).toBe(created.id);
            expect(updated.name).toBe(renamed);
            expect(updated.organization_id).toBe(created.organization_id);
            expect(Array.isArray(updated.metrics)).toBe(true);
            expect(updated.metrics).toContain("orders");
            expect(updated.metrics).not.toContain("revenue");
          }).pipe(
            Effect.ensuring(
              Effect.gen(function* () {
                const id = yield* Ref.get(idRef);
                if (id !== null) {
                  yield* metricsdeleteDashboard({ id }).pipe(Effect.ignore);
                }
              }),
            ),
          );
        }),
      );
    },
  );

  it(
    "rejects a malformed dashboard id with UnprocessableEntity",
    { timeout: 30_000 },
    async () => {
      const error = await runEffect(
        metricsupdateDashboard({
          id: "not-a-valid-uuid",
          name: `distilled-polar-mud-bad-${testRunId}`,
        }).pipe(Effect.flip),
      );
      expect(error._tag).toBe("RequestValidationError");
    },
  );
});
