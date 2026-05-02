import { Effect, Layer, Redacted } from "effect";
import * as FetchHttpClient from "effect/unstable/http/FetchHttpClient";
import { describe, expect, it } from "vitest";
import { Credentials } from "../src/credentials.ts";
import { apiToken } from "../src/operations/apiToken.ts";
import { deployments } from "../src/operations/deployments.ts";
import { deploymentTriggers } from "../src/operations/deploymentTriggers.ts";
import { projects } from "../src/operations/projects.ts";
import { runEffect } from "./setup.ts";

const NON_EXISTENT_UUID = "00000000-0000-0000-0000-000000000000";

describe("deploymentTriggers", () => {
  it("happy path - returns paginated triggers for an existing project/environment/service", async () => {
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
        let environmentId: string | null = null;
        let serviceId: string | null = null;
        for (const projectEdge of projectsPage.edges) {
          const deploysPage = yield* deployments({
            first: 5,
            input: { projectId: projectEdge.node.id },
          });
          const node = deploysPage.edges.find((e) => e.node.serviceId);
          if (node) {
            projectId = node.node.projectId;
            environmentId = node.node.environmentId;
            serviceId = node.node.serviceId!;
            break;
          }
        }

        expect(projectId).not.toBeNull();
        expect(environmentId).not.toBeNull();
        expect(serviceId).not.toBeNull();

        const triggers = yield* deploymentTriggers({
          projectId: projectId!,
          environmentId: environmentId!,
          serviceId: serviceId!,
          first: 10,
        });

        expect(Array.isArray(triggers.edges)).toBe(true);
        expect(typeof triggers.pageInfo.hasNextPage).toBe("boolean");
        expect(typeof triggers.pageInfo.hasPreviousPage).toBe("boolean");
        for (const edge of triggers.edges) {
          expect(typeof edge.cursor).toBe("string");
          expect(typeof edge.node.id).toBe("string");
          expect(typeof edge.node.branch).toBe("string");
          expect(typeof edge.node.checkSuites).toBe("boolean");
          expect(typeof edge.node.environmentId).toBe("string");
          expect(typeof edge.node.projectId).toBe("string");
          expect(typeof edge.node.provider).toBe("string");
          expect(typeof edge.node.repository).toBe("string");
          expect(typeof edge.node.validCheckSuites).toBe("number");
        }
        return triggers;
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
      deploymentTriggers({
        projectId: NON_EXISTENT_UUID,
        environmentId: NON_EXISTENT_UUID,
        serviceId: NON_EXISTENT_UUID,
        first: 5,
      }).pipe(
        Effect.flip,
        Effect.provide(Layer.merge(BadCreds, FetchHttpClient.layer)),
      ) as Effect.Effect<{ _tag: string }, never, never>,
    );

    expect(error._tag).toBe("RailwayNotAuthorized");
  }, 30_000);

  it("error - non-existent project/environment/service surfaces RailwayNotAuthorized", async () => {
    const error = await runEffect(
      deploymentTriggers({
        projectId: NON_EXISTENT_UUID,
        environmentId: NON_EXISTENT_UUID,
        serviceId: NON_EXISTENT_UUID,
        first: 5,
      }).pipe(Effect.flip),
    );

    expect((error as { _tag: string })._tag).toBe("RailwayNotAuthorized");
  }, 30_000);
});
