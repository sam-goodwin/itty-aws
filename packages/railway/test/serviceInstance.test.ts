import { Effect, Layer, Redacted } from "effect";
import * as FetchHttpClient from "effect/unstable/http/FetchHttpClient";
import { describe, expect, it } from "vitest";
import { Credentials } from "../src/credentials.ts";
import { apiToken } from "../src/operations/apiToken.ts";
import { deployments } from "../src/operations/deployments.ts";
import { projects } from "../src/operations/projects.ts";
import { serviceInstance } from "../src/operations/serviceInstance.ts";
import { runEffect } from "./setup.ts";

const NON_EXISTENT_UUID = "00000000-0000-0000-0000-000000000000";

describe("serviceInstance", () => {
  it("happy path - returns service instance for a real (environmentId, serviceId) pair", async () => {
    await runEffect(
      Effect.gen(function* () {
        const me = yield* apiToken({});
        const workspaceId = me.workspaces[0]?.id;
        expect(workspaceId).toBeDefined();
        if (!workspaceId) return;

        const projectsPage = yield* projects({
          workspaceId,
          first: 20,
          orderBy: "CREATED_AT_DESC",
        });

        let serviceId: string | undefined;
        let environmentId: string | undefined;
        for (const edge of projectsPage.edges) {
          const deps = yield* deployments({
            first: 10,
            input: { projectId: edge.node.id },
          });
          const found = deps.edges.find(
            (e) => e.node.serviceId !== null && e.node.environmentId !== null,
          );
          if (found && found.node.serviceId !== null) {
            serviceId = found.node.serviceId;
            environmentId = found.node.environmentId;
            break;
          }
        }

        if (!serviceId || !environmentId) {
          // No service+environment available in this account; nothing to query.
          return;
        }

        const result = yield* serviceInstance({ environmentId, serviceId });

        expect(result.id).toBeDefined();
        expect(typeof result.id).toBe("string");
        expect(result.environmentId).toBe(environmentId);
        expect(result.serviceId).toBe(serviceId);
        expect(typeof result.serviceName).toBe("string");
        expect(typeof result.createdAt).toBe("string");
        expect(typeof result.updatedAt).toBe("string");
        expect(typeof result.isUpdatable).toBe("boolean");
        expect(typeof result.restartPolicyMaxRetries).toBe("number");
        expect(["HEROKU", "NIXPACKS", "PAKETO", "RAILPACK"]).toContain(
          result.builder,
        );
        expect(["ALWAYS", "NEVER", "ON_FAILURE"]).toContain(
          result.restartPolicyType,
        );

        expect(Array.isArray(result.activeDeployments)).toBe(true);
        expect(Array.isArray(result.watchPatterns)).toBe(true);
        expect(result.domains).toBeDefined();
        expect(Array.isArray(result.domains.customDomains)).toBe(true);
        expect(Array.isArray(result.domains.serviceDomains)).toBe(true);

        expect(result.service).toBeDefined();
        expect(result.service.id).toBe(serviceId);
        expect(typeof result.service.name).toBe("string");
        expect(result.service.project).toBeDefined();
        expect(["free", "hobby", "pro", "trial"]).toContain(
          result.service.project.subscriptionType,
        );

        if (result.latestDeployment !== null) {
          expect(typeof result.latestDeployment.id).toBe("string");
          expect([
            "BUILDING",
            "CRASHED",
            "DEPLOYING",
            "FAILED",
            "INITIALIZING",
            "NEEDS_APPROVAL",
            "QUEUED",
            "REMOVED",
            "REMOVING",
            "SKIPPED",
            "SLEEPING",
            "SUCCESS",
            "WAITING",
          ]).toContain(result.latestDeployment.status);
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
      serviceInstance({
        environmentId: NON_EXISTENT_UUID,
        serviceId: NON_EXISTENT_UUID,
      }).pipe(
        Effect.flip,
        Effect.provide(Layer.merge(BadCreds, FetchHttpClient.layer)),
      ) as Effect.Effect<{ _tag: string }, never, never>,
    );

    expect(error._tag).toBe("RailwayNotAuthorized");
  }, 30_000);

  it("error - non-existent (environmentId, serviceId) surfaces RailwayNotAuthorized", async () => {
    const error = await runEffect(
      serviceInstance({
        environmentId: NON_EXISTENT_UUID,
        serviceId: NON_EXISTENT_UUID,
      }).pipe(Effect.flip),
    );

    expect((error as { _tag: string })._tag).toBe("RailwayNotAuthorized");
  }, 30_000);
});
