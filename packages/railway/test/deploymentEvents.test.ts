import { Effect, Layer, Redacted } from "effect";
import * as FetchHttpClient from "effect/unstable/http/FetchHttpClient";
import { describe, expect, it } from "vitest";
import { Credentials } from "../src/credentials.ts";
import { apiToken } from "../src/operations/apiToken.ts";
import { deploymentEvents } from "../src/operations/deploymentEvents.ts";
import { deployments } from "../src/operations/deployments.ts";
import { projects } from "../src/operations/projects.ts";
import { runEffect } from "./setup.ts";

const NON_EXISTENT_UUID = "00000000-0000-0000-0000-000000000000";

describe("deploymentEvents", () => {
  it("happy path - returns paginated events for an existing deployment", async () => {
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

        let deploymentId: string | null = null;
        for (const projectEdge of projectsPage.edges) {
          const deploysPage = yield* deployments({
            first: 1,
            input: { projectId: projectEdge.node.id },
          });
          if (deploysPage.edges.length > 0) {
            deploymentId = deploysPage.edges[0]!.node.id;
            break;
          }
        }

        expect(deploymentId).not.toBeNull();

        const events = yield* deploymentEvents({
          id: deploymentId!,
          first: 10,
        });

        expect(Array.isArray(events.edges)).toBe(true);
        expect(typeof events.pageInfo.hasNextPage).toBe("boolean");
        expect(typeof events.pageInfo.hasPreviousPage).toBe("boolean");
        for (const edge of events.edges) {
          expect(typeof edge.cursor).toBe("string");
          expect(typeof edge.node.id).toBe("string");
          expect(typeof edge.node.createdAt).toBe("string");
          expect(typeof edge.node.step).toBe("string");
        }
        return events;
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
      deploymentEvents({ id: NON_EXISTENT_UUID, first: 5 }).pipe(
        Effect.flip,
        Effect.provide(Layer.merge(BadCreds, FetchHttpClient.layer)),
      ) as Effect.Effect<{ _tag: string }, never, never>,
    );

    expect(["RailwayNotAuthorized", "RailwayNotFound"]).toContain(error._tag);
  }, 30_000);

  it("error - RailwayNotFound for a non-existent deployment id", async () => {
    const error = await runEffect(
      deploymentEvents({ id: NON_EXISTENT_UUID, first: 5 }).pipe(Effect.flip),
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
