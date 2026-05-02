import { Effect, Layer, Redacted } from "effect";
import * as FetchHttpClient from "effect/unstable/http/FetchHttpClient";
import { describe, expect, it } from "vitest";
import { Credentials } from "../src/credentials.ts";
import { apiToken } from "../src/operations/apiToken.ts";
import { projects } from "../src/operations/projects.ts";
import { runEffect } from "./setup.ts";

describe("projects", () => {
  it("happy path - lists projects for the authenticated user's workspace", async () => {
    await runEffect(
      Effect.gen(function* () {
        const me = yield* apiToken({});
        const workspaceId = me.workspaces[0]?.id;
        expect(workspaceId).toBeDefined();
        if (!workspaceId) return;

        const result = yield* projects({
          workspaceId,
          first: 10,
          orderBy: "CREATED_AT_DESC",
        });

        expect(Array.isArray(result.edges)).toBe(true);
        for (const edge of result.edges) {
          expect(typeof edge.cursor).toBe("string");
          expect(typeof edge.node.id).toBe("string");
          expect(typeof edge.node.name).toBe("string");
          expect(typeof edge.node.createdAt).toBe("string");
          expect(typeof edge.node.updatedAt).toBe("string");
          expect(typeof edge.node.isPublic).toBe("boolean");
          expect(typeof edge.node.isTempProject).toBe("boolean");
          expect(typeof edge.node.botPrEnvironments).toBe("boolean");
          expect(typeof edge.node.focusedPrEnvironments).toBe("boolean");
          expect(typeof edge.node.prDeploys).toBe("boolean");
          expect(["free", "hobby", "pro", "trial"]).toContain(
            edge.node.subscriptionType,
          );
        }

        expect(typeof result.pageInfo.hasNextPage).toBe("boolean");
        expect(typeof result.pageInfo.hasPreviousPage).toBe("boolean");
      }),
    );
  }, 60_000);

  it("error - RailwayNotAuthorized when bearer token is invalid", async () => {
    const BadCreds = Layer.succeed(Credentials, {
      apiToken: Redacted.make("not-a-real-token-deadbeef"),
      apiBaseUrl: "https://backboard.railway.com",
    });

    const error = await Effect.runPromise(
      projects({ first: 10, orderBy: "CREATED_AT_DESC" }).pipe(
        Effect.flip,
        Effect.provide(Layer.merge(BadCreds, FetchHttpClient.layer)),
      ) as Effect.Effect<{ _tag: string }, never, never>,
    );

    expect(["RailwayNotAuthorized", "RailwayNotFound"]).toContain(error._tag);
  }, 30_000);
});
