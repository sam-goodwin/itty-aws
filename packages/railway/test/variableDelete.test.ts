import { Effect, Layer, Redacted } from "effect";
import * as FetchHttpClient from "effect/unstable/http/FetchHttpClient";
import { describe, expect, it } from "vitest";
import { Credentials } from "../src/credentials.ts";
import { variableCollectionUpsert } from "../src/operations/variableCollectionUpsert.ts";
import { variableDelete } from "../src/operations/variableDelete.ts";
import { getSharedProject, runEffect, testRunId } from "./setup.ts";

const NON_EXISTENT_UUID = "00000000-0000-0000-0000-000000000000";

describe("variableDelete", () => {
  it("happy path - deletes a freshly upserted project variable", async () => {
    const project = await getSharedProject();

    const variableName = `DISTILLED_VD_${testRunId}`;

    await runEffect(
      Effect.gen(function* () {
        const environmentId =
          project.baseEnvironmentId ?? project.primaryEnvironmentId;
        if (!environmentId) {
          throw new Error(
            "test setup: created project has no base/primary environment id",
          );
        }
        yield* variableCollectionUpsert({
          input: {
            projectId: project.id,
            environmentId,
            variables: { [variableName]: "value" },
            skipDeploys: true,
          },
        });
        const result = yield* variableDelete({
          input: {
            projectId: project.id,
            environmentId,
            name: variableName,
          },
        });
        expect(result).toBe(true);
      }),
    );
  }, 120_000);

  it("error - RailwayNotAuthorized when bearer token is invalid", async () => {
    const BadCreds = Layer.succeed(Credentials, {
      apiToken: Redacted.make("not-a-real-token-deadbeef"),
      apiBaseUrl: "https://backboard.railway.com",
    });
    const error = await Effect.runPromise(
      variableDelete({
        input: {
          projectId: NON_EXISTENT_UUID,
          environmentId: NON_EXISTENT_UUID,
          name: "DISTILLED_NONEXISTENT",
        },
      }).pipe(
        Effect.flip,
        Effect.provide(Layer.merge(BadCreds, FetchHttpClient.layer)),
      ) as Effect.Effect<{ _tag: string }, never, never>,
    );
    expect(error._tag).toBe("RailwayNotAuthorized");
  }, 30_000);

  it("error - non-existent project + environment + variable surfaces RailwayNotAuthorized", async () => {
    const error = await runEffect(
      variableDelete({
        input: {
          projectId: NON_EXISTENT_UUID,
          environmentId: NON_EXISTENT_UUID,
          name: "DISTILLED_NONEXISTENT",
        },
      }).pipe(Effect.flip),
    );
    expect((error as { _tag: string })._tag).toBe("RailwayNotAuthorized");
  }, 30_000);
});
