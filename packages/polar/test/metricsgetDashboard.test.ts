import * as Effect from "effect/Effect";
import * as Ref from "effect/Ref";
import { describe, expect, it } from "vitest";
import { metricscreateDashboard } from "../src/operations/metricscreateDashboard.ts";
import { metricsdeleteDashboard } from "../src/operations/metricsdeleteDashboard.ts";
import { metricsgetDashboard } from "../src/operations/metricsgetDashboard.ts";
import { hasLivePolarCredentials, runEffect, testRunId } from "./setup.ts";

const describeLive = hasLivePolarCredentials ? describe : describe.skip;

describeLive("metricsgetDashboard", () => {
  it("gets a metric dashboard by id", { timeout: 30_000 }, async () => {
    await runEffect(
      Effect.gen(function* () {
        const idRef = yield* Ref.make<string | null>(null);

        yield* Effect.gen(function* () {
          const name = `distilled-polar-mgd-${testRunId}`;
          const created = yield* metricscreateDashboard({
            name,
            metrics: ["revenue"],
          });
          yield* Ref.set(idRef, created.id);

          const fetched = yield* metricsgetDashboard({ id: created.id });
          expect(fetched.id).toBe(created.id);
          expect(fetched.name).toBe(name);
          expect(fetched.organization_id).toBe(created.organization_id);
          expect(typeof fetched.created_at).toBe("string");
          expect(Array.isArray(fetched.metrics)).toBe(true);
          expect(fetched.metrics).toContain("revenue");
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
    "rejects a malformed dashboard id with UnprocessableEntity",
    { timeout: 30_000 },
    async () => {
      const error = await runEffect(
        metricsgetDashboard({ id: "not-a-valid-uuid" }).pipe(Effect.flip),
      );
      expect(error._tag).toBe("RequestValidationError");
    },
  );
});
