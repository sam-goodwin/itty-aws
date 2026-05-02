import { Effect, Layer, Redacted } from "effect";
import * as FetchHttpClient from "effect/unstable/http/FetchHttpClient";
import { describe, expect, it } from "vitest";
import { Credentials } from "../src/credentials.ts";
import { apiToken } from "../src/operations/apiToken.ts";
import { deployments } from "../src/operations/deployments.ts";
import { environmentPatches } from "../src/operations/environmentPatches.ts";
import { environmentStagedChanges } from "../src/operations/environmentStagedChanges.ts";
import { projects } from "../src/operations/projects.ts";
import { runEffect } from "./setup.ts";

const NON_EXISTENT_UUID = "00000000-0000-0000-0000-000000000000";

describe("environmentStagedChanges", () => {
  it("happy path - returns the latest staged commit for an environment", async () => {
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
              environmentId = envId;
              break outer;
            }
          }
        }

        expect(environmentId).not.toBeNull();

        const staged = yield* environmentStagedChanges({
          environmentId: environmentId!,
        });

        expect(typeof staged.id).toBe("string");
        expect(staged.environmentId).toBe(environmentId);
        expect(typeof staged.createdAt).toBe("string");
        expect(typeof staged.updatedAt).toBe("string");
        expect(["APPLYING", "COMMITTED", "STAGED"]).toContain(staged.status);
        expect(typeof staged.environment.id).toBe("string");
        expect(typeof staged.environment.projectId).toBe("string");
        return staged;
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
      environmentStagedChanges({
        environmentId: NON_EXISTENT_UUID,
      }).pipe(
        Effect.flip,
        Effect.provide(Layer.merge(BadCreds, FetchHttpClient.layer)),
      ) as Effect.Effect<{ _tag: string }, never, never>,
    );

    expect(["RailwayNotAuthorized", "RailwayNotFound"]).toContain(error._tag);
  }, 30_000);

  it("error - RailwayNotFound for a non-existent environment id", async () => {
    const error = await runEffect(
      environmentStagedChanges({
        environmentId: NON_EXISTENT_UUID,
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
