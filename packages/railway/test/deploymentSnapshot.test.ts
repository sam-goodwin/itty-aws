import { Effect, Layer, Redacted } from "effect";
import * as FetchHttpClient from "effect/unstable/http/FetchHttpClient";
import { describe, expect, it } from "vitest";
import { Credentials } from "../src/credentials.ts";
import { apiToken } from "../src/operations/apiToken.ts";
import { deployments } from "../src/operations/deployments.ts";
import { deploymentSnapshot } from "../src/operations/deploymentSnapshot.ts";
import { projects } from "../src/operations/projects.ts";
import { runEffect } from "./setup.ts";

const NON_EXISTENT_UUID = "00000000-0000-0000-0000-000000000000";

describe("deploymentSnapshot", () => {
  it("happy path - returns snapshot (or null) for an existing deployment", async () => {
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

        const snapshot = yield* deploymentSnapshot({
          deploymentId: deploymentId!,
        });

        if (snapshot !== null) {
          expect(typeof snapshot.id).toBe("string");
          expect(typeof snapshot.createdAt).toBe("string");
          expect(typeof snapshot.updatedAt).toBe("string");
        }
        return snapshot;
      }),
    );

    expect(result === null || typeof result === "object").toBe(true);
  }, 60_000);

  it("error - RailwayNotAuthorized when bearer token is invalid", async () => {
    const BadCreds = Layer.succeed(Credentials, {
      apiToken: Redacted.make("not-a-real-token-deadbeef"),
      apiBaseUrl: "https://backboard.railway.com",
    });

    const error = await Effect.runPromise(
      deploymentSnapshot({ deploymentId: NON_EXISTENT_UUID }).pipe(
        Effect.flip,
        Effect.provide(Layer.merge(BadCreds, FetchHttpClient.layer)),
      ) as Effect.Effect<{ _tag: string }, never, never>,
    );

    expect(error._tag).toBe("RailwayNotAuthorized");
  }, 30_000);

  it("error - non-existent deployment id surfaces RailwayNotAuthorized", async () => {
    const error = await runEffect(
      deploymentSnapshot({ deploymentId: NON_EXISTENT_UUID }).pipe(Effect.flip),
    );

    expect((error as { _tag: string })._tag).toBe("RailwayNotAuthorized");
  }, 30_000);
});
