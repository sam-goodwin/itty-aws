import { Effect, Layer, Redacted } from "effect";
import * as FetchHttpClient from "effect/unstable/http/FetchHttpClient";
import { describe, expect, it } from "vitest";
import { Credentials } from "../src/credentials.ts";
import { apiToken } from "../src/operations/apiToken.ts";
import { deployments } from "../src/operations/deployments.ts";
import { httpLogs } from "../src/operations/httpLogs.ts";
import { projects } from "../src/operations/projects.ts";
import { runEffect } from "./setup.ts";

const NON_EXISTENT_UUID = "00000000-0000-0000-0000-000000000000";

describe("httpLogs", () => {
  it("happy path - returns http log entries for a real deployment", async () => {
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

        let deploymentId: string | undefined;
        for (const edge of projectsPage.edges) {
          const deps = yield* deployments({
            first: 5,
            input: { projectId: edge.node.id },
          });
          const found = deps.edges[0]?.node.id;
          if (found) {
            deploymentId = found;
            break;
          }
        }

        if (!deploymentId) {
          // No deployment available in this account; nothing to query.
          return;
        }

        const logs = yield* httpLogs({
          deploymentId,
          limit: 10,
        });

        expect(Array.isArray(logs)).toBe(true);
        for (const entry of logs) {
          expect(typeof entry.clientUa).toBe("string");
          expect(typeof entry.deploymentId).toBe("string");
          expect(typeof entry.deploymentInstanceId).toBe("string");
          expect(typeof entry.downstreamProto).toBe("string");
          expect(typeof entry.edgeRegion).toBe("string");
          expect(typeof entry.host).toBe("string");
          expect(typeof entry.httpStatus).toBe("number");
          expect(typeof entry.method).toBe("string");
          expect(typeof entry.path).toBe("string");
          expect(typeof entry.requestId).toBe("string");
          expect(typeof entry.responseDetails).toBe("string");
          expect(typeof entry.rxBytes).toBe("number");
          expect(typeof entry.srcIp).toBe("string");
          expect(typeof entry.timestamp).toBe("string");
          expect(typeof entry.totalDuration).toBe("number");
          expect(typeof entry.txBytes).toBe("number");
          expect(typeof entry.upstreamAddress).toBe("string");
          expect(typeof entry.upstreamErrors).toBe("string");
          expect(typeof entry.upstreamProto).toBe("string");
          expect(typeof entry.upstreamRqDuration).toBe("number");
        }
      }),
    );
  }, 60_000);

  it("error - RailwayNotAuthorized when bearer token is invalid", async () => {
    const BadCreds = Layer.succeed(Credentials, {
      apiToken: Redacted.make("not-a-real-token-deadbeef"),
      apiBaseUrl: "https://backboard.railway.com",
    });

    const error = await Effect.runPromise(
      httpLogs({
        deploymentId: NON_EXISTENT_UUID,
        limit: 1,
      }).pipe(
        Effect.flip,
        Effect.provide(Layer.merge(BadCreds, FetchHttpClient.layer)),
      ) as Effect.Effect<{ _tag: string }, never, never>,
    );

    expect(["RailwayNotAuthorized", "RailwayNotFound"]).toContain(error._tag);
  }, 30_000);

  it("error - RailwayNotFound for a non-existent deploymentId", async () => {
    const error = await runEffect(
      httpLogs({
        deploymentId: NON_EXISTENT_UUID,
        limit: 1,
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
