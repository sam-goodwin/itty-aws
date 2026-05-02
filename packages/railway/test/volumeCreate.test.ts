import { Effect, Layer, Redacted } from "effect";
import * as FetchHttpClient from "effect/unstable/http/FetchHttpClient";
import { describe, expect, it } from "vitest";
import { Credentials } from "../src/credentials.ts";
import { projectCreate } from "../src/operations/projectCreate.ts";
import { projectDelete } from "../src/operations/projectDelete.ts";
import { serviceCreate } from "../src/operations/serviceCreate.ts";
import { volumeCreate } from "../src/operations/volumeCreate.ts";
import { volumeDelete } from "../src/operations/volumeDelete.ts";
import { runEffect, testRunId } from "./setup.ts";

const NON_EXISTENT_UUID = "00000000-0000-0000-0000-000000000000";

describe("volumeCreate", () => {
  it("happy path - creates a persistent volume on a freshly created service", async () => {
    const projectName = `distilled-railway-vc-${testRunId}`;
    const serviceName = `distilled-railway-vc-svc-${testRunId}`;
    await runEffect(
      Effect.gen(function* () {
        const project = yield* projectCreate({
          input: {
            name: projectName,
            description: "distilled volume create test",
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
          const volume = yield* volumeCreate({
            input: {
              projectId: project.id,
              serviceId: service.id,
              mountPath: "/data",
            },
          });
          return yield* Effect.gen(function* () {
            expect(typeof volume.id).toBe("string");
            expect(volume.id.length).toBeGreaterThan(0);
            expect(volume.projectId).toBe(project.id);
            expect(typeof volume.name).toBe("string");
          }).pipe(
            Effect.ensuring(
              volumeDelete({ volumeId: volume.id }).pipe(Effect.ignore),
            ),
          );
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
      volumeCreate({
        input: {
          projectId: NON_EXISTENT_UUID,
          mountPath: "/data",
        },
      }).pipe(
        Effect.flip,
        Effect.provide(Layer.merge(BadCreds, FetchHttpClient.layer)),
      ) as Effect.Effect<{ _tag: string }, never, never>,
    );
    expect(["RailwayNotAuthorized", "RailwayNotFound"]).toContain(error._tag);
  }, 30_000);

  it("error - RailwayInvalidInput for a non-existent projectId", async () => {
    const error = await runEffect(
      volumeCreate({
        input: {
          projectId: NON_EXISTENT_UUID,
          mountPath: "/data",
        },
      }).pipe(Effect.flip),
    );
    expect((error as { _tag: string })._tag).toBe("RailwayInvalidInput");
  }, 30_000);
});
