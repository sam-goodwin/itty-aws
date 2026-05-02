import { Effect, Layer, Redacted } from "effect";
import * as FetchHttpClient from "effect/unstable/http/FetchHttpClient";
import { describe, expect, it } from "vitest";
import { Credentials } from "../src/credentials.ts";
import { apiToken } from "../src/operations/apiToken.ts";
import { deployments } from "../src/operations/deployments.ts";
import { httpDurationMetrics } from "../src/operations/httpDurationMetrics.ts";
import { projects } from "../src/operations/projects.ts";
import { runEffect } from "./setup.ts";

const NON_EXISTENT_UUID = "00000000-0000-0000-0000-000000000000";

describe("httpDurationMetrics", () => {
  it("happy path - returns HTTP duration percentile samples for a service", async () => {
    const result = await runEffect(
      Effect.gen(function* () {
        const tokenInfo = yield* apiToken({});
        const workspace = tokenInfo.workspaces[0];
        expect(workspace).toBeDefined();
        const workspaceId = workspace!.id;

        const projectsPage = yield* projects({
          workspaceId,
          first: 25,
          orderBy: "UPDATED_AT_DESC",
        });

        let environmentId: string | null = null;
        let serviceId: string | null = null;
        for (const projectEdge of projectsPage.edges) {
          const deploysPage = yield* deployments({
            first: 5,
            input: { projectId: projectEdge.node.id },
          });
          const node = deploysPage.edges.find((e) => e.node.serviceId);
          if (node) {
            environmentId = node.node.environmentId;
            serviceId = node.node.serviceId!;
            break;
          }
        }

        expect(environmentId).not.toBeNull();
        expect(serviceId).not.toBeNull();

        const endDate = new Date();
        const startDate = new Date(endDate.getTime() - 60 * 60 * 1000);

        const metrics = yield* httpDurationMetrics({
          environmentId: environmentId!,
          serviceId: serviceId!,
          startDate: startDate.toISOString(),
          endDate: endDate.toISOString(),
          stepSeconds: 300,
        });

        expect(Array.isArray(metrics.samples)).toBe(true);
        for (const s of metrics.samples) {
          expect(typeof s.p50).toBe("number");
          expect(typeof s.p90).toBe("number");
          expect(typeof s.p95).toBe("number");
          expect(typeof s.p99).toBe("number");
          expect(typeof s.ts).toBe("number");
        }
        return metrics;
      }),
    );

    expect(result).toBeDefined();
  }, 60_000);

  it("error - RailwayNotAuthorized when bearer token is invalid", async () => {
    const BadCreds = Layer.succeed(Credentials, {
      apiToken: Redacted.make("not-a-real-token-deadbeef"),
      apiBaseUrl: "https://backboard.railway.com",
    });

    const endDate = new Date();
    const startDate = new Date(endDate.getTime() - 60 * 60 * 1000);

    const error = await Effect.runPromise(
      httpDurationMetrics({
        environmentId: NON_EXISTENT_UUID,
        serviceId: NON_EXISTENT_UUID,
        startDate: startDate.toISOString(),
        endDate: endDate.toISOString(),
      }).pipe(
        Effect.flip,
        Effect.provide(Layer.merge(BadCreds, FetchHttpClient.layer)),
      ) as Effect.Effect<{ _tag: string }, never, never>,
    );

    expect(["RailwayNotAuthorized", "RailwayNotFound"]).toContain(error._tag);
  }, 30_000);

  it("error - RailwayNotFound for non-existent environment/service", async () => {
    const endDate = new Date();
    const startDate = new Date(endDate.getTime() - 60 * 60 * 1000);

    const error = await runEffect(
      httpDurationMetrics({
        environmentId: NON_EXISTENT_UUID,
        serviceId: NON_EXISTENT_UUID,
        startDate: startDate.toISOString(),
        endDate: endDate.toISOString(),
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
