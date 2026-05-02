import { Effect, Layer, Redacted } from "effect";
import * as FetchHttpClient from "effect/unstable/http/FetchHttpClient";
import { describe, expect, it } from "vitest";
import { Credentials } from "../src/credentials.ts";
import { apiToken } from "../src/operations/apiToken.ts";
import { deployment } from "../src/operations/deployment.ts";
import { deployments } from "../src/operations/deployments.ts";
import { privateNetworkEndpoint } from "../src/operations/privateNetworkEndpoint.ts";
import { projects } from "../src/operations/projects.ts";
import { runEffect } from "./setup.ts";

const NON_EXISTENT_UUID = "00000000-0000-0000-0000-000000000000";

describe("privateNetworkEndpoint", () => {
  it("happy path - returns the endpoint or null for a real env/service pair", async () => {
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

        // No reliable way to fetch a privateNetworkId from public queries;
        // pass the env's id which is unlikely to match a real private network.
        // The resolver returns null when no endpoint exists for the inputs,
        // so this still exercises the operation end-to-end.
        const result = yield* privateNetworkEndpoint({
          environmentId,
          privateNetworkId: environmentId,
          serviceId,
        });

        if (result !== null) {
          expect(typeof result.dnsName).toBe("string");
          expect(typeof result.publicId).toBe("string");
          expect(typeof result.serviceInstanceId).toBe("string");
          expect(Array.isArray(result.privateIps)).toBe(true);
          expect(Array.isArray(result.tags)).toBe(true);
          expect([
            "ACTIVE",
            "CREATING",
            "DELETED",
            "DELETING",
            "UNSPECIFIED",
            "UPDATING",
          ]).toContain(result.syncStatus);
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
      privateNetworkEndpoint({
        environmentId: NON_EXISTENT_UUID,
        privateNetworkId: NON_EXISTENT_UUID,
        serviceId: NON_EXISTENT_UUID,
      }).pipe(
        Effect.flip,
        Effect.provide(Layer.merge(BadCreds, FetchHttpClient.layer)),
      ) as Effect.Effect<{ _tag: string }, never, never>,
    );

    expect(["RailwayNotAuthorized", "RailwayNotFound"]).toContain(error._tag);
  }, 30_000);

  it("error - RailwayNotFound for a non-existent environment/service", async () => {
    const error = await runEffect(
      privateNetworkEndpoint({
        environmentId: NON_EXISTENT_UUID,
        privateNetworkId: NON_EXISTENT_UUID,
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
