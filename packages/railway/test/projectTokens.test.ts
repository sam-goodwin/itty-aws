import { Effect, Layer, Redacted } from "effect";
import * as FetchHttpClient from "effect/unstable/http/FetchHttpClient";
import { describe, expect, it } from "vitest";
import { Credentials } from "../src/credentials.ts";
import { projectTokens } from "../src/operations/projectTokens.ts";
import { getSharedProject, runEffect } from "./setup.ts";

const NON_EXISTENT_UUID = "00000000-0000-0000-0000-000000000000";

describe("projectTokens", () => {
  it("happy path - lists project tokens for a freshly created project", async () => {
    const project = await getSharedProject();

    await runEffect(
      Effect.gen(function* () {
        const result = yield* projectTokens({
          projectId: project.id,
          first: 10,
        });

        expect(Array.isArray(result.edges)).toBe(true);
        for (const edge of result.edges) {
          expect(typeof edge.cursor).toBe("string");
          expect(typeof edge.node.id).toBe("string");
          expect(typeof edge.node.createdAt).toBe("string");
          expect(typeof edge.node.displayToken).toBe("string");
          expect(typeof edge.node.environmentId).toBe("string");
          expect(typeof edge.node.name).toBe("string");
          expect(edge.node.projectId).toBe(project.id);
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
      projectTokens({
        projectId: NON_EXISTENT_UUID,
        first: 10,
      }).pipe(
        Effect.flip,
        Effect.provide(Layer.merge(BadCreds, FetchHttpClient.layer)),
      ) as Effect.Effect<{ _tag: string }, never, never>,
    );

    expect(error._tag).toBe("RailwayNotAuthorized");
  }, 30_000);

  it("error - non-existent projectId surfaces RailwayNotAuthorized", async () => {
    const error = await runEffect(
      projectTokens({
        projectId: NON_EXISTENT_UUID,
        first: 10,
      }).pipe(Effect.flip),
    );

    expect((error as { _tag: string })._tag).toBe("RailwayNotAuthorized");
  }, 30_000);
});
