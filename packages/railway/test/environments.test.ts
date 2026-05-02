import { Effect, Layer, Redacted } from "effect";
import * as FetchHttpClient from "effect/unstable/http/FetchHttpClient";
import { describe, expect, it } from "vitest";
import { Credentials } from "../src/credentials.ts";
import { environments } from "../src/operations/environments.ts";
import { projectCreate } from "../src/operations/projectCreate.ts";
import { projectDelete } from "../src/operations/projectDelete.ts";
import { runEffect, testRunId } from "./setup.ts";

const NON_EXISTENT_UUID = "00000000-0000-0000-0000-000000000000";

describe("environments", () => {
  it("happy path - returns paginated environments for a project", async () => {
    const projectName = `distilled-railway-environments-${testRunId}`;

    const result = await runEffect(
      Effect.gen(function* () {
        const project = yield* projectCreate({
          input: { name: projectName },
        });

        return yield* Effect.gen(function* () {
          const envs = yield* environments({
            projectId: project.id,
            first: 10,
          });

          expect(Array.isArray(envs.edges)).toBe(true);
          expect(envs.edges.length).toBeGreaterThan(0);
          expect(typeof envs.pageInfo.hasNextPage).toBe("boolean");
          expect(typeof envs.pageInfo.hasPreviousPage).toBe("boolean");
          for (const edge of envs.edges) {
            expect(typeof edge.cursor).toBe("string");
            expect(typeof edge.node.id).toBe("string");
            expect(typeof edge.node.name).toBe("string");
            expect(edge.node.projectId).toBe(project.id);
            expect(typeof edge.node.canAccess).toBe("boolean");
            expect(typeof edge.node.isEphemeral).toBe("boolean");
            expect(typeof edge.node.createdAt).toBe("string");
            expect(typeof edge.node.updatedAt).toBe("string");
          }
          const baseEnv = envs.edges.find(
            (e) => e.node.id === project.baseEnvironmentId,
          );
          expect(baseEnv).toBeDefined();
          return envs;
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
      environments({
        projectId: NON_EXISTENT_UUID,
        first: 5,
      }).pipe(
        Effect.flip,
        Effect.provide(Layer.merge(BadCreds, FetchHttpClient.layer)),
      ) as Effect.Effect<{ _tag: string }, never, never>,
    );

    expect(["RailwayNotAuthorized", "RailwayNotFound"]).toContain(error._tag);
  }, 30_000);

  it("error - RailwayNotFound for a non-existent project id", async () => {
    const error = await runEffect(
      environments({
        projectId: NON_EXISTENT_UUID,
        first: 5,
      }).pipe(Effect.flip),
    );

    expect((error as { _tag: string })._tag).toBe("RailwayNotFound");
    expect((error as { message: string }).message).toMatch(/not found$/i);
  }, 30_000);
});
