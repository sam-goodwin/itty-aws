import { Effect, Layer, Redacted } from "effect";
import * as FetchHttpClient from "effect/unstable/http/FetchHttpClient";
import { describe, expect, it } from "vitest";
import { Credentials } from "../src/credentials.ts";
import { apiToken } from "../src/operations/apiToken.ts";
import { deployments } from "../src/operations/deployments.ts";
import { projects } from "../src/operations/projects.ts";
import { runEffect } from "./setup.ts";

describe("deployments", () => {
  it("happy path - returns paginated deployments for a project", async () => {
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

        let projectId: string | null = null;
        if (projectsPage.edges.length > 0) {
          projectId = projectsPage.edges[0]!.node.id;
        }

        expect(projectId).not.toBeNull();

        const deploys = yield* deployments({
          first: 10,
          input: { projectId: projectId! },
        });

        expect(Array.isArray(deploys.edges)).toBe(true);
        expect(typeof deploys.pageInfo.hasNextPage).toBe("boolean");
        expect(typeof deploys.pageInfo.hasPreviousPage).toBe("boolean");
        for (const edge of deploys.edges) {
          expect(typeof edge.cursor).toBe("string");
          expect(typeof edge.node.id).toBe("string");
          expect(typeof edge.node.projectId).toBe("string");
          expect(typeof edge.node.environmentId).toBe("string");
          expect(typeof edge.node.createdAt).toBe("string");
          expect(typeof edge.node.updatedAt).toBe("string");
          expect(typeof edge.node.status).toBe("string");
          expect(typeof edge.node.canRedeploy).toBe("boolean");
          expect(typeof edge.node.canRollback).toBe("boolean");
          expect(typeof edge.node.deploymentStopped).toBe("boolean");
          expect(typeof edge.node.suggestAddServiceDomain).toBe("boolean");
        }
        return deploys;
      }),
    );

    expect(result).toBeDefined();
  }, 60_000);

  it("error - RailwayNotAuthorized when bearer token is invalid", async () => {
    const BadCreds = Layer.succeed(Credentials, {
      apiToken: Redacted.make("not-a-real-token-deadbeef"),
      apiBaseUrl: "https://backboard.railway.com",
    });

    const error = await Effect.runPromise(
      deployments({
        first: 5,
        input: {},
      }).pipe(
        Effect.flip,
        Effect.provide(Layer.merge(BadCreds, FetchHttpClient.layer)),
      ) as Effect.Effect<{ _tag: string }, never, never>,
    );

    expect(["RailwayNotAuthorized", "RailwayNotFound"]).toContain(error._tag);
  }, 30_000);
});
