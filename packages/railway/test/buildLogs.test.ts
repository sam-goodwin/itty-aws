import { Effect, Layer, Redacted } from "effect";
import * as FetchHttpClient from "effect/unstable/http/FetchHttpClient";
import { describe, expect, it } from "vitest";
import { Credentials } from "../src/credentials.ts";
import { apiToken } from "../src/operations/apiToken.ts";
import { buildLogs } from "../src/operations/buildLogs.ts";
import { deployments } from "../src/operations/deployments.ts";
import { projects } from "../src/operations/projects.ts";
import { runEffect } from "./setup.ts";

const NON_EXISTENT_UUID = "00000000-0000-0000-0000-000000000000";

describe("buildLogs", () => {
  it("happy path - returns build log entries for an existing deployment", async () => {
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

        let deploymentId: string | null = null;
        for (const projectEdge of projectsPage.edges) {
          const deploysPage = yield* deployments({
            first: 1,
            input: { projectId: projectEdge.node.id },
          });
          if (deploysPage.edges.length > 0) {
            deploymentId = deploysPage.edges[0]!.node.id;
            break;
          }
        }

        expect(deploymentId).not.toBeNull();

        const logs = yield* buildLogs({
          deploymentId: deploymentId!,
          limit: 50,
        });
        expect(Array.isArray(logs)).toBe(true);
        for (const entry of logs) {
          expect(typeof entry.message).toBe("string");
          expect(typeof entry.timestamp).toBe("string");
          expect(Array.isArray(entry.attributes)).toBe(true);
        }
        return logs;
      }),
    );

    expect(Array.isArray(result)).toBe(true);
  }, 60_000);

  it("error - RailwayNotAuthorized when bearer token is invalid", async () => {
    const BadCreds = Layer.succeed(Credentials, {
      apiToken: Redacted.make("not-a-real-token-deadbeef"),
      apiBaseUrl: "https://backboard.railway.com",
    });

    const error = await Effect.runPromise(
      buildLogs({ deploymentId: NON_EXISTENT_UUID }).pipe(
        Effect.flip,
        Effect.provide(Layer.merge(BadCreds, FetchHttpClient.layer)),
      ) as Effect.Effect<{ _tag: string }, never, never>,
    );

    expect(["RailwayNotAuthorized", "RailwayNotFound"]).toContain(error._tag);
  }, 30_000);

  it("error - RailwayNotFound for a non-existent deployment id", async () => {
    const error = await runEffect(
      buildLogs({ deploymentId: NON_EXISTENT_UUID }).pipe(Effect.flip),
    );

    expect((error as { _tag: string })._tag).toBe("RailwayNotFound");
    expect((error as { message: string }).message).toMatch(/not found$/i);
  }, 30_000);
});
