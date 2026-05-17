import * as Effect from "effect/Effect";
import * as Ref from "effect/Ref";
import { describe, expect, it } from "vitest";
import { metricscreateDashboard } from "../src/operations/metricscreateDashboard.ts";
import { metricsdeleteDashboard } from "../src/operations/metricsdeleteDashboard.ts";
import { hasLivePolarCredentials, runEffect, testRunId } from "./setup.ts";

const describeLive = hasLivePolarCredentials ? describe : describe.skip;

describeLive("metricscreateDashboard", () => {
  it("creates a metric dashboard", { timeout: 30_000 }, async () => {
    await runEffect(
      Effect.gen(function* () {
        const idRef = yield* Ref.make<string | null>(null);

        yield* Effect.gen(function* () {
          const name = `distilled-polar-mcd-${testRunId}`;
          const created = yield* metricscreateDashboard({
            name,
            metrics: ["revenue", "orders"],
          });
          yield* Ref.set(idRef, created.id);

          expect(typeof created.id).toBe("string");
          expect(created.id.length).toBeGreaterThan(0);
          expect(created.name).toBe(name);
          expect(typeof created.organization_id).toBe("string");
          expect(typeof created.created_at).toBe("string");
          expect(Array.isArray(created.metrics)).toBe(true);
          expect(created.metrics).toContain("revenue");
          expect(created.metrics).toContain("orders");
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
  });

  it(
    "rejects an unknown metric slug with UnprocessableEntity",
    { timeout: 30_000 },
    async () => {
      const error = await runEffect(
        metricscreateDashboard({
          name: `distilled-polar-mcd-bad-${testRunId}`,
          metrics: ["definitely-not-a-real-metric-slug"],
        }).pipe(Effect.flip),
      );
      expect(error._tag).toBe("RequestValidationError");
    },
  );
});
