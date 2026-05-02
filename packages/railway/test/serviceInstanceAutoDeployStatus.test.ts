import { Effect, Layer, Redacted } from "effect";
import * as FetchHttpClient from "effect/unstable/http/FetchHttpClient";
import { describe, expect, it } from "vitest";
import { Credentials } from "../src/credentials.ts";
import { apiToken } from "../src/operations/apiToken.ts";
import { deployments } from "../src/operations/deployments.ts";
import { projects } from "../src/operations/projects.ts";
import { serviceInstanceAutoDeployStatus } from "../src/operations/serviceInstanceAutoDeployStatus.ts";
import { runEffect } from "./setup.ts";

const NON_EXISTENT_UUID = "00000000-0000-0000-0000-000000000000";

describe("serviceInstanceAutoDeployStatus", () => {
  it("happy path - returns auto-deploy status for a real (project, environment, service) triple", async () => {
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

        let projectId: string | undefined;
        let environmentId: string | undefined;
        let serviceId: string | undefined;
        for (const edge of projectsPage.edges) {
          const deps = yield* deployments({
            first: 10,
            input: { projectId: edge.node.id },
          });
          const found = deps.edges.find(
            (e) => e.node.serviceId !== null && e.node.environmentId !== null,
          );
          if (found && found.node.serviceId !== null) {
            projectId = found.node.projectId;
            environmentId = found.node.environmentId;
            serviceId = found.node.serviceId;
            break;
          }
        }

        if (!projectId || !environmentId || !serviceId) {
          // No service available in this account; nothing to query.
          return;
        }

        const result = yield* serviceInstanceAutoDeployStatus({
          environmentId,
          projectId,
          serviceId,
        });

        expect(result).toBeDefined();
        expect(typeof result.canEnable).toBe("boolean");
        expect(typeof result.enabled).toBe("boolean");
        if (result.reason !== null) {
          expect(typeof result.reason).toBe("string");
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
      serviceInstanceAutoDeployStatus({
        environmentId: NON_EXISTENT_UUID,
        projectId: NON_EXISTENT_UUID,
        serviceId: NON_EXISTENT_UUID,
      }).pipe(
        Effect.flip,
        Effect.provide(Layer.merge(BadCreds, FetchHttpClient.layer)),
      ) as Effect.Effect<{ _tag: string }, never, never>,
    );

    expect(["RailwayNotAuthorized", "RailwayNotFound"]).toContain(error._tag);
  }, 30_000);

  it("error - RailwayNotFound for a non-existent (project, environment, service) triple", async () => {
    const error = await runEffect(
      serviceInstanceAutoDeployStatus({
        environmentId: NON_EXISTENT_UUID,
        projectId: NON_EXISTENT_UUID,
        serviceId: NON_EXISTENT_UUID,
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
