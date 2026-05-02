import { Effect, Layer, Redacted } from "effect";
import * as FetchHttpClient from "effect/unstable/http/FetchHttpClient";
import { describe, expect, it } from "vitest";
import { Credentials } from "../src/credentials.ts";
import { projectCreate } from "../src/operations/projectCreate.ts";
import { projectDelete } from "../src/operations/projectDelete.ts";
import { variableUpsert } from "../src/operations/variableUpsert.ts";
import { runEffect, testRunId } from "./setup.ts";

const NON_EXISTENT_UUID = "00000000-0000-0000-0000-000000000000";

describe("variableUpsert", () => {
  it("happy path - upserts a single project variable on a freshly created project", async () => {
    const projectName = `distilled-railway-vu-${testRunId}`;
    const variableName = `DISTILLED_VU_${testRunId}`;
    await runEffect(
      Effect.gen(function* () {
        const project = yield* projectCreate({
          input: {
            name: projectName,
            description: "distilled variable upsert test",
          },
        });
        return yield* Effect.gen(function* () {
          const environmentId =
            project.baseEnvironmentId ?? project.primaryEnvironmentId;
          if (!environmentId) {
            throw new Error(
              "test setup: created project has no base/primary environment id",
            );
          }
          const result = yield* variableUpsert({
            input: {
              projectId: project.id,
              environmentId,
              name: variableName,
              value: "value",
              skipDeploys: true,
            },
          });
          expect(result).toBe(true);
        }).pipe(
          Effect.ensuring(
            projectDelete({ id: project.id }).pipe(Effect.ignore),
          ),
        );
      }),
    );
  }, 120_000);

  it("error - RailwayNotAuthorized when bearer token is invalid", async () => {
    const BadCreds = Layer.succeed(Credentials, {
      apiToken: Redacted.make("not-a-real-token-deadbeef"),
      apiBaseUrl: "https://backboard.railway.com",
    });
    const error = await Effect.runPromise(
      variableUpsert({
        input: {
          projectId: NON_EXISTENT_UUID,
          environmentId: NON_EXISTENT_UUID,
          name: "DISTILLED_NONEXISTENT",
          value: "value",
        },
      }).pipe(
        Effect.flip,
        Effect.provide(Layer.merge(BadCreds, FetchHttpClient.layer)),
      ) as Effect.Effect<{ _tag: string }, never, never>,
    );
    expect(error._tag).toBe("RailwayNotAuthorized");
  }, 30_000);

  it("error - RailwayInvalidInput for a non-existent project + environment pair", async () => {
    const error = await runEffect(
      variableUpsert({
        input: {
          projectId: NON_EXISTENT_UUID,
          environmentId: NON_EXISTENT_UUID,
          name: "DISTILLED_NONEXISTENT",
          value: "value",
        },
      }).pipe(Effect.flip),
    );
    expect((error as { _tag: string })._tag).toBe("RailwayInvalidInput");
  }, 30_000);
});
