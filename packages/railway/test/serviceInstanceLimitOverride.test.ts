import { Effect, Layer, Redacted } from "effect";
import * as FetchHttpClient from "effect/unstable/http/FetchHttpClient";
import { describe, expect, it } from "vitest";
import { Credentials } from "../src/credentials.ts";
import { apiToken } from "../src/operations/apiToken.ts";
import { deployments } from "../src/operations/deployments.ts";
import { projects } from "../src/operations/projects.ts";
import { serviceInstanceLimitOverride } from "../src/operations/serviceInstanceLimitOverride.ts";
import { runEffect } from "./setup.ts";

const NON_EXISTENT_UUID = "00000000-0000-0000-0000-000000000000";

describe("serviceInstanceLimitOverride", () => {
  it(
    "happy path - returns limit override (or null) for a real (environment, service) pair",
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
            orderBy: "CREATED_AT_DESC",
          });

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
              environmentId = found.node.environmentId;
              serviceId = found.node.serviceId;
              break;
            }
          }

          if (!environmentId || !serviceId) {
            // No service available in this account; nothing to query.
            return;
          }

          const result = yield* serviceInstanceLimitOverride({ environmentId, serviceId });

          // Result is null when no overrides are set, or an object when overrides exist.
          if (result !== null) {
            expect(typeof result).toBe("object");
          }
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
        serviceInstanceLimitOverride({
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

  it(
    "error - RailwayNotFound for a non-existent (environment, service) pair",
    async () => {
      const error = await runEffect(
        serviceInstanceLimitOverride({
          environmentId: NON_EXISTENT_UUID,
          serviceId: NON_EXISTENT_UUID,
        }).pipe(Effect.flip),
      );

      expect((error as { _tag: string })._tag).toBe("RailwayNotFound");
      expect((error as { message: string }).message).toMatch(/not found$/i);
    },
    30_000,
  );
});
