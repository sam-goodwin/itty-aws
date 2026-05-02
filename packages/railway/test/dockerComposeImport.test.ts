import { Effect, Layer, Redacted } from "effect";
import * as FetchHttpClient from "effect/unstable/http/FetchHttpClient";
import { describe, expect, it } from "vitest";
import { Credentials } from "../src/credentials.ts";
import { dockerComposeImport } from "../src/operations/dockerComposeImport.ts";
import { projectCreate } from "../src/operations/projectCreate.ts";
import { projectDelete } from "../src/operations/projectDelete.ts";
import { runEffect, testRunId } from "./setup.ts";

const NON_EXISTENT_UUID = "00000000-0000-0000-0000-000000000000";

const projectName = (name: string) => `distilled-railway-${name}-${testRunId}`;

const composeYaml = `services:
  web:
    image: nginx:latest
`;

describe("dockerComposeImport", () => {
  it("happy path - imports a docker compose yaml into a freshly provisioned project", async () => {
    const projName = projectName("dci");

    await runEffect(
      Effect.gen(function* () {
        const project = yield* projectCreate({
          input: { name: projName },
        });
        return yield* Effect.gen(function* () {
          const baseEnvId = project.baseEnvironmentId;
          if (!baseEnvId) {
            throw new Error(
              "test setup: created project has no baseEnvironmentId",
            );
          }

          const result = yield* dockerComposeImport({
            environmentId: baseEnvId,
            projectId: project.id,
            skipStagingPatch: true,
            yaml: composeYaml,
          });

          expect(Array.isArray(result.errors)).toBe(true);
          for (const e of result.errors) {
            expect(typeof e).toBe("string");
          }
        }).pipe(
          Effect.ensuring(
            projectDelete({ id: project.id }).pipe(Effect.ignore),
          ),
        );
      }),
    );
  }, 180_000);

  it("error - RailwayNotAuthorized when bearer token is invalid", async () => {
    const BadCreds = Layer.succeed(Credentials, {
      apiToken: Redacted.make("not-a-real-token-deadbeef"),
      apiBaseUrl: "https://backboard.railway.com",
    });
    const error = await Effect.runPromise(
      dockerComposeImport({
        environmentId: NON_EXISTENT_UUID,
        projectId: NON_EXISTENT_UUID,
        yaml: composeYaml,
      }).pipe(
        Effect.flip,
        Effect.provide(Layer.merge(BadCreds, FetchHttpClient.layer)),
      ) as Effect.Effect<{ _tag: string }, never, never>,
    );
    expect(["RailwayNotAuthorized", "RailwayNotFound"]).toContain(error._tag);
  }, 30_000);

  it("error - RailwayInvalidInput for an empty projectId", async () => {
    const error = await runEffect(
      dockerComposeImport({
        environmentId: NON_EXISTENT_UUID,
        projectId: "",
        yaml: composeYaml,
      }).pipe(Effect.flip),
    );
    expect((error as { _tag: string })._tag).toBe("RailwayInvalidInput");
  }, 30_000);
});
