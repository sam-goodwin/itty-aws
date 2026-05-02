import { Effect, Layer, Redacted } from "effect";
import * as FetchHttpClient from "effect/unstable/http/FetchHttpClient";
import { describe, expect, it } from "vitest";
import { Credentials } from "../src/credentials.ts";
import { apiToken } from "../src/operations/apiToken.ts";
import { deployment } from "../src/operations/deployment.ts";
import { deployments } from "../src/operations/deployments.ts";
import { httpMetrics } from "../src/operations/httpMetrics.ts";
import { projects } from "../src/operations/projects.ts";
import { runEffect } from "./setup.ts";

const NON_EXISTENT_UUID = "00000000-0000-0000-0000-000000000000";

describe("httpMetrics", () => {
  it("happy path - returns http metric samples for a real service", async () => {
    await runEffect(
      Effect.gen(function* () {
        const me = yield* apiToken({});
        const workspaceId = me.workspaces[0]?.id;
        expect(workspaceId).toBeDefined();
        if (!workspaceId) return;

        const projectsPage = yield* projects({
          workspaceId,
          first: 20,
          orderBy: { field: "createdAt", direction: "desc" },
        });

        let environmentId: string | undefined;
        let serviceId: string | undefined;
        for (const edge of projectsPage.edges) {
          const deps = yield* deployments({
            first: 5,
            input: { projectId: edge.node.id },
          });
          const depId = deps.edges[0]?.node.id;
          if (!depId) continue;
          const dep = yield* deployment({ id: depId });
          environmentId = dep.environmentId;
          serviceId = dep.serviceId;
          if (environmentId && serviceId) break;
        }

        if (!environmentId || !serviceId) {
          // No deployment available; nothing to query.
          return;
        }

        const endDate = new Date();
        const startDate = new Date(endDate.getTime() - 60 * 60 * 1000);

        const result = yield* httpMetrics({
          environmentId,
          serviceId,
          startDate: startDate.toISOString(),
          endDate: endDate.toISOString(),
          stepSeconds: 300,
        });

        expect(Array.isArray(result.samples)).toBe(true);
        for (const sample of result.samples) {
          expect(typeof sample.ts).toBe("number");
          expect(typeof sample.value).toBe("number");
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
      httpMetrics({
        environmentId: NON_EXISTENT_UUID,
        serviceId: NON_EXISTENT_UUID,
        startDate: startDate.toISOString(),
        endDate: endDate.toISOString(),
        stepSeconds: 300,
      }).pipe(
        Effect.flip,
        Effect.provide(Layer.merge(BadCreds, FetchHttpClient.layer)),
      ) as Effect.Effect<{ _tag: string }, never, never>,
    );

    expect(["RailwayNotAuthorized", "RailwayNotFound"]).toContain(error._tag);
  }, 30_000);

  it("error - RailwayNotFound for non-existent environment/service ids", async () => {
    const endDate = new Date();
    const startDate = new Date(endDate.getTime() - 60 * 60 * 1000);

    const error = await runEffect(
      httpMetrics({
        environmentId: NON_EXISTENT_UUID,
        serviceId: NON_EXISTENT_UUID,
        startDate: startDate.toISOString(),
        endDate: endDate.toISOString(),
        stepSeconds: 300,
      }).pipe(Effect.flip),
    );

    expect((error as { _tag: string })._tag).toBe("RailwayNotFound");
    expect((error as { message: string }).message).toMatch(/not found$/i);
  }, 30_000);
});
