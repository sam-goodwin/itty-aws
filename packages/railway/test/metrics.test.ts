import { Effect, Layer, Redacted } from "effect";
import * as FetchHttpClient from "effect/unstable/http/FetchHttpClient";
import { describe, expect, it } from "vitest";
import { Credentials } from "../src/credentials.ts";
import { apiToken } from "../src/operations/apiToken.ts";
import { metrics } from "../src/operations/metrics.ts";
import { runEffect } from "./setup.ts";

const NON_EXISTENT_UUID = "00000000-0000-0000-0000-000000000000";

describe("metrics", () => {
  it("happy path - returns metric series for the workspace", async () => {
    await runEffect(
      Effect.gen(function* () {
        const me = yield* apiToken({});
        const workspaceId = me.workspaces[0]?.id;
        expect(workspaceId).toBeDefined();
        if (!workspaceId) return;

        const endDate = new Date();
        const startDate = new Date(endDate.getTime() - 60 * 60 * 1000);

        const series = yield* metrics({
          workspaceId,
          measurements: ["CPU_USAGE", "MEMORY_USAGE_GB"],
          startDate: startDate.toISOString(),
          endDate: endDate.toISOString(),
          sampleRateSeconds: 300,
        });

        expect(Array.isArray(series)).toBe(true);
        for (const s of series) {
          expect(typeof s.measurement).toBe("string");
          expect(s.tags).toBeDefined();
          expect(Array.isArray(s.values)).toBe(true);
          for (const v of s.values) {
            expect(typeof v.ts).toBe("number");
            expect(typeof v.value).toBe("number");
          }
        }
      }),
    );
  }, 60_000);

  it("error - RailwayNotAuthorized when bearer token is invalid", async () => {
    const BadCreds = Layer.succeed(Credentials, {
      apiToken: Redacted.make("not-a-real-token-deadbeef"),
      apiBaseUrl: "https://backboard.railway.com",
    });

    const endDate = new Date();
    const startDate = new Date(endDate.getTime() - 60 * 60 * 1000);

    const error = await Effect.runPromise(
      metrics({
        workspaceId: NON_EXISTENT_UUID,
        measurements: ["CPU_USAGE"],
        startDate: startDate.toISOString(),
        endDate: endDate.toISOString(),
        sampleRateSeconds: 300,
      }).pipe(
        Effect.flip,
        Effect.provide(Layer.merge(BadCreds, FetchHttpClient.layer)),
      ) as Effect.Effect<{ _tag: string }, never, never>,
    );

    expect(["RailwayNotAuthorized", "RailwayNotFound"]).toContain(error._tag);
  }, 30_000);

  it("error - RailwayNotFound for a non-existent projectId", async () => {
    const endDate = new Date();
    const startDate = new Date(endDate.getTime() - 60 * 60 * 1000);

    const error = await runEffect(
      metrics({
        projectId: NON_EXISTENT_UUID,
        measurements: ["CPU_USAGE"],
        startDate: startDate.toISOString(),
        endDate: endDate.toISOString(),
        sampleRateSeconds: 300,
      }).pipe(Effect.flip),
    );

    expect([
      "RailwayNotFound",
      "RailwayNotAuthorized",
      "RailwayInvalidInput",
      "UnknownRailwayError",
    ]).toContain((error as { _tag: string })._tag);
    expect((error as { message: string }).message).toMatch(/not found$/i);
  }, 30_000);
});
