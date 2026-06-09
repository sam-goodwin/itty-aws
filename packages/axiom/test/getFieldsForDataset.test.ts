import { Effect, Layer, Redacted } from "effect";
import * as FetchHttpClient from "effect/unstable/http/FetchHttpClient";
import { describe, expect, it } from "vitest";
import { Credentials } from "../src/credentials";
import { createDataset } from "../src/operations/v2/createDataset";
import { deleteDataset } from "../src/operations/v2/deleteDataset";
import { getFieldsForDataset } from "../src/operations/v2/getFieldsForDataset";
import { runEffect, testRunId } from "./setup";

describe("getFieldsForDataset", () => {
  it(
    "returns an array of fields for an existing dataset",
    async () => {
      const datasetName = `distilled-axiom-getfields-${testRunId}`;

      const effect = Effect.gen(function* () {
        yield* createDataset({
          name: datasetName,
          description: "getFieldsForDataset test fixture",
        });

        const fields = yield* getFieldsForDataset({ dataset_id: datasetName });

        expect(Array.isArray(fields)).toBe(true);
        // A brand-new dataset with no ingested data may report zero fields,
        // but every element we do see must match the declared shape.
        for (const field of fields) {
          expect(typeof field.name).toBe("string");
          expect(typeof field.type).toBe("string");
        }
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
        getFieldsForDataset({
          dataset_id: `distilled-axiom-doesnotexist-${testRunId}`,
        }).pipe(Effect.flip),
      );

      expect((error as { _tag: string })._tag).toBe("NotFound");
    },
    { timeout: 30_000 },
  );

  it(
    "returns Unauthorized when the caller's credentials lack dataset read access",
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
        getFieldsForDataset({
          dataset_id: `distilled-axiom-getfields-fb-${testRunId}`,
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
