import { Effect, Layer, Redacted } from "effect";
import * as FetchHttpClient from "effect/unstable/http/FetchHttpClient";
import { describe, expect, it } from "vitest";
import { Credentials } from "../src/credentials.ts";
import { adminVolumeInstancesForVolume } from "../src/operations/adminVolumeInstancesForVolume.ts";
import { projectCreate } from "../src/operations/projectCreate.ts";
import { projectDelete } from "../src/operations/projectDelete.ts";
import { volumeCreate } from "../src/operations/volumeCreate.ts";
import { volumeDelete } from "../src/operations/volumeDelete.ts";
import { runEffect, testRunId } from "./setup.ts";

const NON_EXISTENT_UUID = "00000000-0000-0000-0000-000000000000";

describe("adminVolumeInstancesForVolume", () => {
  it(
    "happy path - returns array of volume instances for a created volume",
    async () => {
      const projectName = `distilled-railway-admin-volume-instances-${testRunId}`;

      const result = await runEffect(
        Effect.gen(function* () {
          const project = yield* projectCreate({
            input: { name: projectName },
          });

          return yield* Effect.gen(function* () {
            const volume = yield* volumeCreate({
              input: {
                projectId: project.id,
                mountPath: "/data",
              },
            });

            return yield* Effect.gen(function* () {
              const instances = yield* adminVolumeInstancesForVolume({
                volumeId: volume.id,
              });
              expect(Array.isArray(instances)).toBe(true);
              for (const inst of instances) {
                expect(typeof inst.id).toBe("string");
                expect(inst.volumeId).toBe(volume.id);
              }
              return instances;
            }).pipe(
              Effect.ensuring(volumeDelete({ volumeId: volume.id }).pipe(Effect.ignore)),
            );
          }).pipe(
            Effect.ensuring(projectDelete({ id: project.id }).pipe(Effect.ignore)),
          );
        }),
      );

      expect(Array.isArray(result)).toBe(true);
    },
    60_000,
  );

  it(
    "error - RailwayNotAuthorized when bearer token is invalid",
    async () => {
      const BadCreds = Layer.succeed(Credentials, {
        apiToken: Redacted.make("not-a-real-token-deadbeef"),
        apiBaseUrl: "https://backboard.railway.com",
      });

      const error = await Effect.runPromise(
        adminVolumeInstancesForVolume({ volumeId: NON_EXISTENT_UUID }).pipe(
          Effect.flip,
          Effect.provide(Layer.merge(BadCreds, FetchHttpClient.layer)),
        ) as Effect.Effect<{ _tag: string }, never, never>,
      );

      expect(error._tag).toBe("RailwayNotAuthorized");
    },
    30_000,
  );

  it(
    "error - RailwayNotFound for non-existent volume id",
    async () => {
      const error = await runEffect(
        adminVolumeInstancesForVolume({ volumeId: NON_EXISTENT_UUID }).pipe(
          Effect.flip,
        ),
      );

      expect((error as { _tag: string })._tag).toBe("RailwayNotFound");
      expect((error as { message: string }).message).toMatch(/not found$/i);
    },
    30_000,
  );
});
