import { Effect, Layer, Redacted } from "effect";
import * as FetchHttpClient from "effect/unstable/http/FetchHttpClient";
import { describe, expect, it } from "vitest";
import { Credentials } from "../src/credentials.ts";
import { templateMetrics } from "../src/operations/templateMetrics.ts";
import { templates } from "../src/operations/templates.ts";
import { runEffect } from "./setup.ts";

const NON_EXISTENT_UUID = "00000000-0000-0000-0000-000000000000";

describe("templateMetrics", () => {
  it("happy path - returns metrics for a real template id", async () => {
    await runEffect(
      Effect.gen(function* () {
        const page = yield* templates({ first: 1, verified: true });
        const id = page.edges[0]?.node.id;
        if (!id) {
          // No templates available; nothing to query.
          return;
        }

        const result = yield* templateMetrics({ id });

        expect(result).toBeDefined();
        expect(typeof result.activeDeployments).toBe("number");
        expect(typeof result.deploymentsLast90Days).toBe("number");
        expect(typeof result.earningsLast30Days).toBe("number");
        expect(typeof result.earningsLast90Days).toBe("number");
        expect(typeof result.eligibleForSupportBonus).toBe("boolean");
        expect(typeof result.supportHealth).toBe("number");
        expect(typeof result.templateHealth).toBe("number");
        expect(typeof result.totalDeployments).toBe("number");
        expect(typeof result.totalEarnings).toBe("number");
        expect(result.activeDeployments).toBeGreaterThanOrEqual(0);
        expect(result.totalDeployments).toBeGreaterThanOrEqual(0);
      }),
    );
  }, 60_000);

  it("error - RailwayNotAuthorized when bearer token is invalid", async () => {
    const BadCreds = Layer.succeed(Credentials, {
      apiToken: Redacted.make("not-a-real-token-deadbeef"),
      apiBaseUrl: "https://backboard.railway.com",
    });

    const error = await Effect.runPromise(
      templateMetrics({ id: NON_EXISTENT_UUID }).pipe(
        Effect.flip,
        Effect.provide(Layer.merge(BadCreds, FetchHttpClient.layer)),
      ) as Effect.Effect<{ _tag: string }, never, never>,
    );

    expect(error._tag).toBe("RailwayNotAuthorized");
  }, 30_000);

  it("error - non-existent template id surfaces RailwayNotAuthorized", async () => {
    const error = await runEffect(
      templateMetrics({ id: NON_EXISTENT_UUID }).pipe(Effect.flip),
    );

    expect((error as { _tag: string })._tag).toBe("RailwayNotAuthorized");
  }, 30_000);
});
