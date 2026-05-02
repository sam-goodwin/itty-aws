import { Effect, Layer, Redacted } from "effect";
import * as FetchHttpClient from "effect/unstable/http/FetchHttpClient";
import { describe, expect, it } from "vitest";
import { Credentials } from "../src/credentials.ts";
import { bucketCreate } from "../src/operations/bucketCreate.ts";
import { bucketInstanceDetails } from "../src/operations/bucketInstanceDetails.ts";
import { projectCreate } from "../src/operations/projectCreate.ts";
import { projectDelete } from "../src/operations/projectDelete.ts";
import { runEffect, testRunId } from "./setup.ts";

const NON_EXISTENT_UUID = "00000000-0000-0000-0000-000000000000";

describe("bucketInstanceDetails", () => {
  it(
    "happy path - returns null or {objectCount, sizeBytes} for a created bucket",
    async () => {
      const projectName = `distilled-railway-bucket-instance-details-${testRunId}`;

      await runEffect(
        Effect.gen(function* () {
          const project = yield* projectCreate({
            input: { name: projectName },
          });
          const environmentId = project.baseEnvironmentId;
          expect(environmentId).toBeTruthy();

          return yield* Effect.gen(function* () {
            const bucket = yield* bucketCreate({
              input: {
                projectId: project.id,
                environmentId,
                name: `bucket-${testRunId}`,
              },
            });

            const details = yield* bucketInstanceDetails({
              bucketId: bucket.id,
              environmentId: environmentId!,
            });

            if (details !== null) {
              expect(typeof details.objectCount).toBe("string");
              expect(typeof details.sizeBytes).toBe("string");
            }
            return details;
          }).pipe(
            Effect.ensuring(projectDelete({ id: project.id }).pipe(Effect.ignore)),
          );
        }),
      );
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
        bucketInstanceDetails({
          bucketId: NON_EXISTENT_UUID,
          environmentId: NON_EXISTENT_UUID,
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
    "error - RailwayNotFound for a non-existent bucket id",
    async () => {
      const error = await runEffect(
        bucketInstanceDetails({
          bucketId: NON_EXISTENT_UUID,
          environmentId: NON_EXISTENT_UUID,
        }).pipe(Effect.flip),
      );

      expect((error as { _tag: string })._tag).toBe("RailwayNotFound");
      expect((error as { message: string }).message).toMatch(/not found$/i);
    },
    30_000,
  );
});
