import { Effect, Layer, Redacted } from "effect";
import * as FetchHttpClient from "effect/unstable/http/FetchHttpClient";
import { describe, expect, it } from "vitest";
import { Credentials } from "../src/credentials.ts";
import { environmentPatches } from "../src/operations/environmentPatches.ts";
import { projectCreate } from "../src/operations/projectCreate.ts";
import { projectDelete } from "../src/operations/projectDelete.ts";
import { runEffect, testRunId } from "./setup.ts";

const NON_EXISTENT_UUID = "00000000-0000-0000-0000-000000000000";

describe("environmentPatches", () => {
  it("happy path - returns paginated patches for an existing environment", async () => {
    const projectName = `distilled-railway-env-patches-${testRunId}`;

    const result = await runEffect(
      Effect.gen(function* () {
        const project = yield* projectCreate({
          input: { name: projectName },
        });

        return yield* Effect.gen(function* () {
          const patches = yield* environmentPatches({
            environmentId: project.baseEnvironmentId!,
            first: 10,
          });

          expect(Array.isArray(patches.edges)).toBe(true);
          expect(typeof patches.pageInfo.hasNextPage).toBe("boolean");
          expect(typeof patches.pageInfo.hasPreviousPage).toBe("boolean");
          for (const edge of patches.edges) {
            expect(typeof edge.cursor).toBe("string");
            expect(typeof edge.node.id).toBe("string");
            expect(typeof edge.node.environmentId).toBe("string");
            expect(typeof edge.node.createdAt).toBe("string");
            expect(typeof edge.node.updatedAt).toBe("string");
            expect(["APPLYING", "COMMITTED", "STAGED"]).toContain(
              edge.node.status,
            );
          }
          return patches;
        }).pipe(
          Effect.ensuring(
            projectDelete({ id: project.id }).pipe(Effect.ignore),
          ),
        );
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
      environmentPatches({
        environmentId: NON_EXISTENT_UUID,
        first: 5,
      }).pipe(
        Effect.flip,
        Effect.provide(Layer.merge(BadCreds, FetchHttpClient.layer)),
      ) as Effect.Effect<{ _tag: string }, never, never>,
    );

    expect(["RailwayNotAuthorized", "RailwayNotFound"]).toContain(error._tag);
  }, 30_000);

  it("error - RailwayNotFound for a non-existent environment id", async () => {
    const error = await runEffect(
      environmentPatches({
        environmentId: NON_EXISTENT_UUID,
        first: 5,
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
