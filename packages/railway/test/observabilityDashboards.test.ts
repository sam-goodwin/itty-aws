import { Effect, Layer, Redacted } from "effect";
import * as FetchHttpClient from "effect/unstable/http/FetchHttpClient";
import { describe, expect, it } from "vitest";
import { Credentials } from "../src/credentials.ts";
import { observabilityDashboards } from "../src/operations/observabilityDashboards.ts";
import { projectCreate } from "../src/operations/projectCreate.ts";
import { projectDelete } from "../src/operations/projectDelete.ts";
import { runEffect, testRunId } from "./setup.ts";

const NON_EXISTENT_UUID = "00000000-0000-0000-0000-000000000000";

describe("observabilityDashboards", () => {
  it("happy path - lists observability dashboards for a freshly created project's base environment", async () => {
    await runEffect(
      Effect.gen(function* () {
        const project = yield* projectCreate({
          input: {
            name: `distilled-railway-obs-dashboards-${testRunId}`,
          },
        });

        yield* Effect.gen(function* () {
          const result = yield* observabilityDashboards({
            environmentId: project.baseEnvironmentId,
            first: 10,
          });

          expect(Array.isArray(result.edges)).toBe(true);
          for (const edge of result.edges) {
            expect(typeof edge.cursor).toBe("string");
            expect(typeof edge.node.id).toBe("string");
          }

          expect(typeof result.pageInfo.hasNextPage).toBe("boolean");
          expect(typeof result.pageInfo.hasPreviousPage).toBe("boolean");
        }).pipe(
          Effect.ensuring(
            projectDelete({ id: project.id }).pipe(Effect.ignore),
          ),
        );
      }),
    );
  }, 60_000);

  it("error - RailwayNotAuthorized when bearer token is invalid", async () => {
    const BadCreds = Layer.succeed(Credentials, {
      apiToken: Redacted.make("not-a-real-token-deadbeef"),
      apiBaseUrl: "https://backboard.railway.com",
    });

    const error = await Effect.runPromise(
      observabilityDashboards({
        environmentId: NON_EXISTENT_UUID,
        first: 10,
      }).pipe(
        Effect.flip,
        Effect.provide(Layer.merge(BadCreds, FetchHttpClient.layer)),
      ) as Effect.Effect<{ _tag: string }, never, never>,
    );

    expect(["RailwayNotAuthorized", "RailwayNotFound"]).toContain(error._tag);
  }, 30_000);

  it("error - RailwayNotFound for a non-existent environmentId", async () => {
    const error = await runEffect(
      observabilityDashboards({
        environmentId: NON_EXISTENT_UUID,
        first: 10,
      }).pipe(Effect.flip),
    );

    expect((error as { _tag: string })._tag).toBe("RailwayNotFound");
    expect((error as { message: string }).message).toMatch(/not found$/i);
  }, 30_000);
});
