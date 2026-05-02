import { Effect, Layer, Redacted } from "effect";
import * as FetchHttpClient from "effect/unstable/http/FetchHttpClient";
import { describe, expect, it } from "vitest";
import { Credentials } from "../src/credentials.ts";
import { projectCreate } from "../src/operations/projectCreate.ts";
import { projectDelete } from "../src/operations/projectDelete.ts";
import { serviceCreate } from "../src/operations/serviceCreate.ts";
import { serviceInstanceAutoDeployUpdate } from "../src/operations/serviceInstanceAutoDeployUpdate.ts";
import { runEffect, testRunId } from "./setup.ts";

const NON_EXISTENT_UUID = "00000000-0000-0000-0000-000000000000";

describe("serviceInstanceAutoDeployUpdate", () => {
  it(
    "happy path - toggles auto-deploy on a freshly created service",
    async () => {
      const projectName = `distilled-railway-siad-${testRunId}`;
      const serviceName = `distilled-railway-siad-svc-${testRunId}`;
      await runEffect(
        Effect.gen(function* () {
          const project = yield* projectCreate({
            input: {
              name: projectName,
              description: "distilled service instance auto-deploy update test",
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
            const result = yield* serviceInstanceAutoDeployUpdate({
              input: {
                enabled: true,
                environmentId,
                projectId: project.id,
                serviceId: service.id,
              },
            });
            expect(result.enabled).toBe(true);
          }).pipe(
            Effect.ensuring(projectDelete({ id: project.id }).pipe(Effect.ignore)),
          );
        }),
      );
    },
    120_000,
  );

  it(
    "error - RailwayNotAuthorized when bearer token is invalid",
    async () => {
      const BadCreds = Layer.succeed(Credentials, {
        apiToken: Redacted.make("not-a-real-token-deadbeef"),
        apiBaseUrl: "https://backboard.railway.com",
      });
      const error = await Effect.runPromise(
        serviceInstanceAutoDeployUpdate({
          input: {
            enabled: true,
            environmentId: NON_EXISTENT_UUID,
            projectId: NON_EXISTENT_UUID,
            serviceId: NON_EXISTENT_UUID,
          },
        }).pipe(
          Effect.flip,
          Effect.provide(Layer.merge(BadCreds, FetchHttpClient.layer)),
        ) as Effect.Effect<{ _tag: string }, never, never>,
      );
      expect(error._tag).toBe("RailwayNotAuthorized");
    },
    30_000,
  );

  it(
    "error - RailwayNotFound for a non-existent serviceId",
    async () => {
      const error = await runEffect(
        serviceInstanceAutoDeployUpdate({
          input: {
            enabled: true,
            environmentId: NON_EXISTENT_UUID,
            projectId: NON_EXISTENT_UUID,
            serviceId: NON_EXISTENT_UUID,
          },
        }).pipe(Effect.flip),
      );
      expect((error as { _tag: string })._tag).toBe("RailwayNotFound");
    },
    30_000,
  );

  it(
    "error - RailwayInvalidInput for an empty serviceId",
    async () => {
      const error = await runEffect(
        serviceInstanceAutoDeployUpdate({
          input: {
            enabled: true,
            environmentId: NON_EXISTENT_UUID,
            projectId: NON_EXISTENT_UUID,
            serviceId: "",
          },
        }).pipe(Effect.flip),
      );
      expect((error as { _tag: string })._tag).toBe("RailwayInvalidInput");
    },
    30_000,
  );
});
