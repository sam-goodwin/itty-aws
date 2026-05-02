import { Effect, Layer, Redacted } from "effect";
import * as FetchHttpClient from "effect/unstable/http/FetchHttpClient";
import { describe, expect, it } from "vitest";
import { Credentials } from "../src/credentials.ts";
import { apiToken } from "../src/operations/apiToken.ts";
import { deployments } from "../src/operations/deployments.ts";
import { egressGateways } from "../src/operations/egressGateways.ts";
import { projects } from "../src/operations/projects.ts";
import { runEffect } from "./setup.ts";

const NON_EXISTENT_UUID = "00000000-0000-0000-0000-000000000000";

describe("egressGateways", () => {
  it(
    "happy path - returns egress gateways for a service instance",
    async () => {
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
          let serviceId: string | null = null;
          for (const projectEdge of projectsPage.edges) {
            const deploysPage = yield* deployments({
              first: 5,
              input: { projectId: projectEdge.node.id },
            });
            const node = deploysPage.edges.find((e) => e.node.serviceId);
            if (node) {
              environmentId = node.node.environmentId;
              serviceId = node.node.serviceId!;
              break;
            }
          }

          expect(environmentId).not.toBeNull();
          expect(serviceId).not.toBeNull();

          const gateways = yield* egressGateways({
            environmentId: environmentId!,
            serviceId: serviceId!,
          });

          expect(Array.isArray(gateways)).toBe(true);
          for (const gw of gateways) {
            expect(typeof gw.ipv4).toBe("string");
            expect(typeof gw.region).toBe("string");
          }
          return gateways;
        }),
      );

      expect(Array.isArray(result)).toBe(true);
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
        egressGateways({
          environmentId: NON_EXISTENT_UUID,
          serviceId: NON_EXISTENT_UUID,
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
