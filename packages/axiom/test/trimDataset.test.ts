import { Effect, Layer, Redacted } from "effect";
import * as FetchHttpClient from "effect/unstable/http/FetchHttpClient";
import { describe, expect, it } from "vitest";
import { Credentials } from "../src/credentials";
import { createDataset } from "../src/operations/v2/createDataset";
import { deleteDataset } from "../src/operations/v2/deleteDataset";
import { trimDataset } from "../src/operations/v2/trimDataset";
import { runEffect, testRunId } from "./setup";

describe("trimDataset", () => {
  it(
    "trims an existing dataset by duration",
    async () => {
      const datasetName = `distilled-axiom-trimds-${testRunId}`;

      const effect = Effect.gen(function* () {
        yield* createDataset({
          name: datasetName,
          description: "trimDataset test fixture",
        });

        // Destructive op under test. Output schema is Void — the operation
        // completing without error is the success signal.
        const result = yield* trimDataset({
          dataset_id: datasetName,
          maxDuration: "1h",
        });

        expect(result).toBeUndefined();
      }).pipe(
        Effect.ensuring(
          // Best-effort cleanup.
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
        trimDataset({
          dataset_id: `distilled-axiom-doesnotexist-${testRunId}`,
          maxDuration: "1h",
        }).pipe(Effect.flip),
      );

      expect((error as { _tag: string })._tag).toBe("NotFound");
    },
    { timeout: 30_000 },
  );

  it(
    "returns Unauthorized when the caller's credentials lack dataset write access",
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
        trimDataset({
          dataset_id: `distilled-axiom-trimds-fb-${testRunId}`,
          maxDuration: "1h",
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
