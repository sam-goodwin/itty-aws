import { Effect, Layer, Redacted } from "effect";
import * as FetchHttpClient from "effect/unstable/http/FetchHttpClient";
import { describe, expect, it } from "vitest";
import { Credentials } from "../src/credentials.ts";
import { volumeCreate } from "../src/operations/volumeCreate.ts";
import { volumeDelete } from "../src/operations/volumeDelete.ts";
import { getSharedService, runEffect } from "./setup.ts";

const NON_EXISTENT_UUID = "00000000-0000-0000-0000-000000000000";

describe("volumeCreate", () => {
  it("happy path - creates a persistent volume on the shared service", async () => {
    const service = await getSharedService();

    await runEffect(
      Effect.gen(function* () {
        const volume = yield* volumeCreate({
          input: {
            projectId: service.projectId,
            serviceId: service.id,
            mountPath: "/data",
          },
        });

        return yield* Effect.gen(function* () {
          expect(typeof volume.id).toBe("string");
          expect(volume.id.length).toBeGreaterThan(0);
          expect(volume.projectId).toBe(service.projectId);
          expect(typeof volume.name).toBe("string");
        }).pipe(
          Effect.ensuring(
            volumeDelete({ volumeId: volume.id }).pipe(Effect.ignore),
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
    expect(error._tag).toBe("RailwayNotAuthorized");
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
