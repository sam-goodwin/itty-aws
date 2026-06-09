import { Effect, Layer, Redacted } from "effect";
import * as FetchHttpClient from "effect/unstable/http/FetchHttpClient";
import { describe, expect, it } from "vitest";
import { Credentials } from "../src/credentials";
import { createDataset } from "../src/operations/v2/createDataset";
import { deleteDataset } from "../src/operations/v2/deleteDataset";
import { getDataset } from "../src/operations/v2/getDataset";
import { runEffect, testRunId } from "./setup";

describe("deleteDataset", () => {
  it(
    "deletes an existing dataset and makes it unfetchable afterwards",
    async () => {
      const datasetName = `distilled-axiom-deleteds-${testRunId}`;

      const effect = Effect.gen(function* () {
        yield* createDataset({
          name: datasetName,
          description: "deleteDataset test fixture",
        });

        // Destructive op under test — must succeed on real data.
        yield* deleteDataset({ dataset_id: datasetName });

        // Verify the dataset is gone: a follow-up GET must surface NotFound.
        const error = yield* getDataset({ dataset_id: datasetName }).pipe(
          Effect.flip,
        );
        expect((error as { _tag: string })._tag).toBe("NotFound");
      }).pipe(
        Effect.ensuring(
          // Safety net in case the test failed before the delete ran.
          deleteDataset({ dataset_id: datasetName }).pipe(Effect.ignore),
        ),
      );

      await runEffect(effect);
    },
    { timeout: 60_000 },
  );

  it(
    "returns NotFound for a dataset name that does not exist",
    async () => {
      const error = await runEffect(
        deleteDataset({
          dataset_id: `distilled-axiom-doesnotexist-${testRunId}`,
        }).pipe(Effect.flip),
      );

      expect((error as { _tag: string })._tag).toBe("NotFound");
    },
    { timeout: 30_000 },
  );

  it(
    "returns Unauthorized when the caller's credentials lack dataset delete access",
    async () => {
      // Override the shared Credentials layer with a Bearer token that is
      // authenticated but not authorized. Axiom surfaces this as a 401, which the SDK's matchError maps to the typed Unauthorized class.
      const BadCredentials = Layer.succeed(
        Credentials,
        Effect.succeed({
          apiKey: Redacted.make(`invalid-token-${testRunId}`),
          apiBaseUrl: "https://api.axiom.co",
        }),
      );

      const error = await Effect.runPromise(
        deleteDataset({
          dataset_id: `distilled-axiom-deleteds-fb-${testRunId}`,
        }).pipe(
          Effect.flip,
          Effect.provide(Layer.merge(BadCredentials, FetchHttpClient.layer)),
        ) as Effect.Effect<unknown, never, never>,
      );

      expect((error as { _tag: string })._tag).toBe("Unauthorized");
    },
    { timeout: 30_000 },
  );
});
