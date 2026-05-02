import { Effect, Layer, Redacted } from "effect";
import * as FetchHttpClient from "effect/unstable/http/FetchHttpClient";
import { describe, expect, it } from "vitest";
import { Credentials } from "../src/credentials.ts";
import { projectCreate } from "../src/operations/projectCreate.ts";
import { projectDelete } from "../src/operations/projectDelete.ts";
import { serviceCreate } from "../src/operations/serviceCreate.ts";
import { serviceInstanceUpdate } from "../src/operations/serviceInstanceUpdate.ts";
import { runEffect, testRunId } from "./setup.ts";

const NON_EXISTENT_UUID = "00000000-0000-0000-0000-000000000000";

describe("serviceInstanceUpdate", () => {
  it("happy path - updates service instance config on a freshly created service", async () => {
    const projectName = `distilled-railway-siu-${testRunId}`;
    const serviceName = `distilled-railway-siu-svc-${testRunId}`;
    await runEffect(
      Effect.gen(function* () {
        const project = yield* projectCreate({
          input: {
            name: projectName,
            description: "distilled service instance update test",
          },
        });
        return yield* Effect.gen(function* () {
          const service = yield* serviceCreate({
            input: {
              projectId: project.id,
              name: serviceName,
              source: { image: "nginx:latest" },
            },
          });
          const environmentId =
            project.baseEnvironmentId ?? project.primaryEnvironmentId;
          if (!environmentId) {
            throw new Error(
              "test setup: created project has no base/primary environment id",
            );
          }
          const result = yield* serviceInstanceUpdate({
            environmentId,
            serviceId: service.id,
            input: {
              numReplicas: 1,
              restartPolicyType: "ON_FAILURE",
              restartPolicyMaxRetries: 3,
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
      serviceInstanceUpdate({
        environmentId: NON_EXISTENT_UUID,
        serviceId: NON_EXISTENT_UUID,
        input: {
          numReplicas: 1,
        },
      }).pipe(
        Effect.flip,
        Effect.provide(Layer.merge(BadCreds, FetchHttpClient.layer)),
      ) as Effect.Effect<{ _tag: string }, never, never>,
    );
    expect(error._tag).toBe("RailwayNotAuthorized");
  }, 30_000);

  it("error - non-existent serviceId surfaces RailwayNotAuthorized", async () => {
    const error = await runEffect(
      serviceInstanceUpdate({
        environmentId: NON_EXISTENT_UUID,
        serviceId: NON_EXISTENT_UUID,
        input: {
          numReplicas: 1,
        },
      }).pipe(Effect.flip),
    );
    expect((error as { _tag: string })._tag).toBe("RailwayNotAuthorized");
  }, 30_000);

  it("error - RailwayInvalidInput for an empty serviceId", async () => {
    const error = await runEffect(
      serviceInstanceUpdate({
        environmentId: NON_EXISTENT_UUID,
        serviceId: "",
        input: {
          numReplicas: 1,
        },
      }).pipe(Effect.flip),
    );
    expect((error as { _tag: string })._tag).toBe("RailwayInvalidInput");
  }, 30_000);
});
