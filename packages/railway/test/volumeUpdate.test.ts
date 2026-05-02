import { Effect, Layer, Redacted } from "effect";
import * as FetchHttpClient from "effect/unstable/http/FetchHttpClient";
import { describe, expect, it } from "vitest";
import { Credentials } from "../src/credentials.ts";
import { projectCreate } from "../src/operations/projectCreate.ts";
import { projectDelete } from "../src/operations/projectDelete.ts";
import { serviceCreate } from "../src/operations/serviceCreate.ts";
import { volumeCreate } from "../src/operations/volumeCreate.ts";
import { volumeDelete } from "../src/operations/volumeDelete.ts";
import { volumeUpdate } from "../src/operations/volumeUpdate.ts";
import { runEffect, testRunId } from "./setup.ts";

const NON_EXISTENT_UUID = "00000000-0000-0000-0000-000000000000";

describe("volumeUpdate", () => {
  it("happy path - renames a freshly created persistent volume", async () => {
    const projectName = `distilled-railway-vu-${testRunId}`;
    const serviceName = `distilled-railway-vu-svc-${testRunId}`;
    const renamed = `distilled-railway-vu-renamed-${testRunId}`;
    await runEffect(
      Effect.gen(function* () {
        const project = yield* projectCreate({
          input: {
            name: projectName,
            description: "distilled volume update test",
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
            const result = yield* volumeUpdate({
              volumeId: volume.id,
              input: { name: renamed },
            });
            expect(result.id).toBe(volume.id);
            expect(result.name).toBe(renamed);
            expect(result.projectId).toBe(project.id);
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
      volumeUpdate({
        volumeId: NON_EXISTENT_UUID,
        input: { name: `distilled-railway-vu-${testRunId}` },
      }).pipe(
        Effect.flip,
        Effect.provide(Layer.merge(BadCreds, FetchHttpClient.layer)),
      ) as Effect.Effect<{ _tag: string }, never, never>,
    );
    expect(["RailwayNotAuthorized", "RailwayNotFound"]).toContain(error._tag);
  }, 30_000);

  it("error - RailwayNotFound for a non-existent volumeId", async () => {
    const error = await runEffect(
      volumeUpdate({
        volumeId: NON_EXISTENT_UUID,
        input: { name: `distilled-railway-vu-${testRunId}` },
      }).pipe(Effect.flip),
    );
    expect((error as { _tag: string })._tag).toBe("RailwayNotFound");
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
