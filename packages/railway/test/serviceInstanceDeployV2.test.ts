import { Effect, Layer, Redacted } from "effect";
import * as FetchHttpClient from "effect/unstable/http/FetchHttpClient";
import { describe, expect, it } from "vitest";
import { Credentials } from "../src/credentials.ts";
import { projectCreate } from "../src/operations/projectCreate.ts";
import { projectDelete } from "../src/operations/projectDelete.ts";
import { serviceCreate } from "../src/operations/serviceCreate.ts";
import { serviceInstanceDeployV2 } from "../src/operations/serviceInstanceDeployV2.ts";
import { runEffect, testRunId } from "./setup.ts";

const NON_EXISTENT_UUID = "00000000-0000-0000-0000-000000000000";

describe("serviceInstanceDeployV2", () => {
  it("happy path - deploys a freshly created image-source service and returns a deployment id", async () => {
    const projectName = `distilled-railway-sidv2-${testRunId}`;
    const serviceName = `distilled-railway-sidv2-svc-${testRunId}`;
    await runEffect(
      Effect.gen(function* () {
        const project = yield* projectCreate({
          input: {
            name: projectName,
            description: "distilled service instance deploy v2 test",
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
          const deploymentId = yield* serviceInstanceDeployV2({
            environmentId,
            serviceId: service.id,
          });
          expect(typeof deploymentId).toBe("string");
          expect(deploymentId).toBeTruthy();
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
      serviceInstanceDeployV2({
        environmentId: NON_EXISTENT_UUID,
        serviceId: NON_EXISTENT_UUID,
      }).pipe(
        Effect.flip,
        Effect.provide(Layer.merge(BadCreds, FetchHttpClient.layer)),
      ) as Effect.Effect<{ _tag: string }, never, never>,
    );
    expect(["RailwayNotAuthorized", "RailwayNotFound"]).toContain(error._tag);
  }, 30_000);

  it("error - RailwayNotFound for a non-existent serviceId", async () => {
    const error = await runEffect(
      serviceInstanceDeployV2({
        environmentId: NON_EXISTENT_UUID,
        serviceId: NON_EXISTENT_UUID,
      }).pipe(Effect.flip),
    );
    expect((error as { _tag: string })._tag).toBe("RailwayNotFound");
  }, 30_000);
});
