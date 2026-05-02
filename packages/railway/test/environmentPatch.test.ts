import { Effect, Layer, Redacted } from "effect";
import * as FetchHttpClient from "effect/unstable/http/FetchHttpClient";
import { describe, expect, it } from "vitest";
import { Credentials } from "../src/credentials.ts";
import { apiToken } from "../src/operations/apiToken.ts";
import { deployments } from "../src/operations/deployments.ts";
import { environmentPatch } from "../src/operations/environmentPatch.ts";
import { environmentPatches } from "../src/operations/environmentPatches.ts";
import { projects } from "../src/operations/projects.ts";
import { runEffect } from "./setup.ts";

const NON_EXISTENT_UUID = "00000000-0000-0000-0000-000000000000";

describe("environmentPatch", () => {
  it("happy path - returns patch details by id", async () => {
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

        let patchId: string | null = null;
        outer: for (const projectEdge of projectsPage.edges) {
          const deploysPage = yield* deployments({
            first: 5,
            input: { projectId: projectEdge.node.id },
          });
          const seenEnvIds = new Set<string>();
          for (const dep of deploysPage.edges) {
            const envId = dep.node.environmentId;
            if (seenEnvIds.has(envId)) continue;
            seenEnvIds.add(envId);
            const patchesPage = yield* environmentPatches({
              environmentId: envId,
              first: 1,
            });
            if (patchesPage.edges.length > 0) {
              patchId = patchesPage.edges[0]!.node.id;
              break outer;
            }
          }
        }

        expect(patchId).not.toBeNull();

        const patch = yield* environmentPatch({ id: patchId! });
        expect(patch.id).toBe(patchId);
        expect(typeof patch.environmentId).toBe("string");
        expect(typeof patch.createdAt).toBe("string");
        expect(typeof patch.updatedAt).toBe("string");
        expect(["APPLYING", "COMMITTED", "STAGED"]).toContain(patch.status);
        expect(typeof patch.environment.id).toBe("string");
        expect(typeof patch.environment.projectId).toBe("string");
        return patch;
      }),
    );

    expect(result.id).toBeDefined();
  }, 60_000);

  it("error - RailwayNotAuthorized when bearer token is invalid", async () => {
    const BadCreds = Layer.succeed(Credentials, {
      apiToken: Redacted.make("not-a-real-token-deadbeef"),
      apiBaseUrl: "https://backboard.railway.com",
    });

    const error = await Effect.runPromise(
      environmentPatch({ id: NON_EXISTENT_UUID }).pipe(
        Effect.flip,
        Effect.provide(Layer.merge(BadCreds, FetchHttpClient.layer)),
      ) as Effect.Effect<{ _tag: string }, never, never>,
    );

    expect(error._tag).toBe("RailwayNotAuthorized");
  }, 30_000);

  it("error - non-existent patch id surfaces RailwayNotAuthorized", async () => {
    const error = await runEffect(
      environmentPatch({ id: NON_EXISTENT_UUID }).pipe(Effect.flip),
    );

    expect((error as { _tag: string })._tag).toBe("RailwayNotAuthorized");
  }, 30_000);
});
