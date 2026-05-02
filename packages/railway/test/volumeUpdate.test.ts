import { Effect, Layer, Redacted } from "effect";
import * as FetchHttpClient from "effect/unstable/http/FetchHttpClient";
import { describe, expect, it } from "vitest";
import { Credentials } from "../src/credentials.ts";
import { volumeCreate } from "../src/operations/volumeCreate.ts";
import { volumeDelete } from "../src/operations/volumeDelete.ts";
import { volumeUpdate } from "../src/operations/volumeUpdate.ts";
import { getSharedService, runEffect, testRunId } from "./setup.ts";

const NON_EXISTENT_UUID = "00000000-0000-0000-0000-000000000000";

describe("volumeUpdate", () => {
  it("happy path - renames a freshly created persistent volume", async () => {
    const service = await getSharedService();
    const renamed = `distilled-railway-vu-renamed-${testRunId}`;

    await runEffect(
      Effect.gen(function* () {
        const volume = yield* volumeCreate({
          input: {
            projectId: service.projectId,
            serviceId: service.id,
            mountPath: "/data-up",
          },
        });

        return yield* Effect.gen(function* () {
          const result = yield* volumeUpdate({
            volumeId: volume.id,
            input: { name: renamed },
          });
          expect(result.id).toBe(volume.id);
          expect(result.name).toBe(renamed);
          expect(result.projectId).toBe(service.projectId);
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
      volumeUpdate({
        volumeId: NON_EXISTENT_UUID,
        input: { name: `distilled-railway-vu-${testRunId}` },
      }).pipe(
        Effect.flip,
        Effect.provide(Layer.merge(BadCreds, FetchHttpClient.layer)),
      ) as Effect.Effect<{ _tag: string }, never, never>,
    );
    expect(error._tag).toBe("RailwayNotAuthorized");
  }, 30_000);

  it("error - non-existent volumeId surfaces RailwayNotAuthorized", async () => {
    const error = await runEffect(
      volumeUpdate({
        volumeId: NON_EXISTENT_UUID,
        input: { name: `distilled-railway-vu-${testRunId}` },
      }).pipe(Effect.flip),
    );
    expect((error as { _tag: string })._tag).toBe("RailwayNotAuthorized");
  }, 30_000);

  it("error - RailwayInvalidInput for an empty volumeId", async () => {
    const error = await runEffect(
      volumeUpdate({
        volumeId: "",
        input: { name: `distilled-railway-vu-${testRunId}` },
      }).pipe(Effect.flip),
    );
    expect((error as { _tag: string })._tag).toBe("RailwayInvalidInput");
  }, 30_000);
});
