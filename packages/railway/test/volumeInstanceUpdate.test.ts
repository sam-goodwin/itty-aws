import { Effect, Layer, Redacted } from "effect";
import * as FetchHttpClient from "effect/unstable/http/FetchHttpClient";
import { describe, expect, it } from "vitest";
import { Credentials } from "../src/credentials.ts";
import { projectCreate } from "../src/operations/projectCreate.ts";
import { projectDelete } from "../src/operations/projectDelete.ts";
import { serviceCreate } from "../src/operations/serviceCreate.ts";
import { volumeCreate } from "../src/operations/volumeCreate.ts";
import { volumeDelete } from "../src/operations/volumeDelete.ts";
import { volumeInstanceUpdate } from "../src/operations/volumeInstanceUpdate.ts";
import { runEffect, testRunId } from "./setup.ts";

const NON_EXISTENT_UUID = "00000000-0000-0000-0000-000000000000";

describe("volumeInstanceUpdate", () => {
  it(
    "happy path - updates the mount path of a freshly created volume",
    async () => {
      const projectName = `distilled-railway-viu-${testRunId}`;
      const serviceName = `distilled-railway-viu-svc-${testRunId}`;
      await runEffect(
        Effect.gen(function* () {
          const project = yield* projectCreate({
            input: {
              name: projectName,
              description: "distilled volume instance update test",
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
              const result = yield* volumeInstanceUpdate({
                volumeId: volume.id,
                input: { mountPath: "/data2" },
              });
              expect(result).toBe(true);
            }).pipe(
              Effect.ensuring(
                volumeDelete({ volumeId: volume.id }).pipe(Effect.ignore),
              ),
            );
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
        volumeInstanceUpdate({
          volumeId: NON_EXISTENT_UUID,
          input: { mountPath: "/data" },
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
    "error - RailwayNotFound for a non-existent volumeId",
    async () => {
      const error = await runEffect(
        volumeInstanceUpdate({
          volumeId: NON_EXISTENT_UUID,
          input: { mountPath: "/data" },
        }).pipe(Effect.flip),
      );
      expect((error as { _tag: string })._tag).toBe("RailwayNotFound");
    },
    30_000,
  );

  it(
    "error - RailwayInvalidInput for an empty volumeId",
    async () => {
      const error = await runEffect(
        volumeInstanceUpdate({
          volumeId: "",
          input: { mountPath: "/data" },
        }).pipe(Effect.flip),
      );
      expect((error as { _tag: string })._tag).toBe("RailwayInvalidInput");
    },
    30_000,
  );
});
