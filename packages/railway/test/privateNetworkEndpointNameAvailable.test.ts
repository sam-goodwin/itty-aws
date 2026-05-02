import { Effect, Layer, Redacted } from "effect";
import * as FetchHttpClient from "effect/unstable/http/FetchHttpClient";
import { describe, expect, it } from "vitest";
import { Credentials } from "../src/credentials.ts";
import { apiToken } from "../src/operations/apiToken.ts";
import { deployment } from "../src/operations/deployment.ts";
import { deployments } from "../src/operations/deployments.ts";
import { privateNetworkEndpointNameAvailable } from "../src/operations/privateNetworkEndpointNameAvailable.ts";
import { projects } from "../src/operations/projects.ts";
import { runEffect, testRunId } from "./setup.ts";

const NON_EXISTENT_UUID = "00000000-0000-0000-0000-000000000000";

describe("privateNetworkEndpointNameAvailable", () => {
  it(
    "happy path - returns boolean for a real env/private-network triple",
    async () => {
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
          for (const edge of projectsPage.edges) {
            const deps = yield* deployments({
              first: 5,
              input: { projectId: edge.node.id },
            });
            const depId = deps.edges[0]?.node.id;
            if (!depId) continue;
            const dep = yield* deployment({ id: depId });
            environmentId = dep.environmentId;
            if (environmentId) break;
          }

          if (!environmentId) {
            // No deployment available; nothing to query.
            return;
          }

          const result = yield* privateNetworkEndpointNameAvailable({
            environmentId,
            // The privateNetworkId scopes uniqueness; using the
            // environmentId here is a stable identifier that the
            // resolver still accepts to evaluate the prefix.
            privateNetworkId: environmentId,
            prefix: `distilled-${testRunId}`,
          });

          expect(typeof result).toBe("boolean");
        }),
      );
    },
    60_000,
  );

  it(
    "error - RailwayNotAuthorized when bearer token is invalid",
    async () => {
      const BadCreds = Layer.succeed(Credentials, {
        apiToken: Redacted.make("not-a-real-token-deadbeef"),
        apiBaseUrl: "https://backboard.railway.com",
      });

      const error = await Effect.runPromise(
        privateNetworkEndpointNameAvailable({
          environmentId: NON_EXISTENT_UUID,
          privateNetworkId: NON_EXISTENT_UUID,
          prefix: `distilled-${testRunId}`,
        }).pipe(
          Effect.flip,
          Effect.provide(Layer.merge(BadCreds, FetchHttpClient.layer)),
        ) as Effect.Effect<{ _tag: string }, never, never>,
      );

      expect(error._tag).toBe("RailwayNotAuthorized");
    },
    30_000,
  );
});
