import { Effect, Layer, Redacted } from "effect";
import * as FetchHttpClient from "effect/unstable/http/FetchHttpClient";
import { describe, expect, it } from "vitest";
import { Credentials } from "../src/credentials.ts";
import { apiToken } from "../src/operations/apiToken.ts";
import { deployments } from "../src/operations/deployments.ts";
import { githubPRInfo } from "../src/operations/githubPRInfo.ts";
import { projects } from "../src/operations/projects.ts";
import { runEffect } from "./setup.ts";

const NON_EXISTENT_UUID = "00000000-0000-0000-0000-000000000000";

describe("githubPRInfo", () => {
  it(
    "happy path - returns PR info (or null) for an existing service",
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

          let serviceId: string | null = null;
          for (const projectEdge of projectsPage.edges) {
            const deploysPage = yield* deployments({
              first: 5,
              input: { projectId: projectEdge.node.id },
            });
            const node = deploysPage.edges.find((e) => e.node.serviceId);
            if (node) {
              serviceId = node.node.serviceId!;
              break;
            }
          }

          expect(serviceId).not.toBeNull();

          const info = yield* githubPRInfo({
            serviceId: serviceId!,
            prNumber: 1,
          });

          if (info !== null) {
            expect(typeof info.additions).toBe("number");
            expect(typeof info.deletions).toBe("number");
            expect(typeof info.changedFiles).toBe("number");
            expect(typeof info.author).toBe("string");
            expect(typeof info.body).toBe("string");
            expect(typeof info.title).toBe("string");
            expect(typeof info.state).toBe("string");
            expect(Array.isArray(info.checks)).toBe(true);
            for (const c of info.checks) {
              expect(typeof c.name).toBe("string");
              expect(typeof c.status).toBe("string");
            }
          }
          return info;
        }),
      );

      expect(result === null || typeof result === "object").toBe(true);
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
        githubPRInfo({
          serviceId: NON_EXISTENT_UUID,
          prNumber: 1,
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
    "error - RailwayNotFound for a non-existent service id",
    async () => {
      const error = await runEffect(
        githubPRInfo({
          serviceId: NON_EXISTENT_UUID,
          prNumber: 1,
        }).pipe(Effect.flip),
      );

      expect((error as { _tag: string })._tag).toBe("RailwayNotFound");
      expect((error as { message: string }).message).toMatch(/not found$/i);
    },
    30_000,
  );
});
