import { Effect, Layer, Redacted } from "effect";
import * as FetchHttpClient from "effect/unstable/http/FetchHttpClient";
import { describe, expect, it } from "vitest";
import { Credentials } from "../src/credentials";
import { createDataset } from "../src/operations/v2/createDataset";
import { deleteDataset } from "../src/operations/v2/deleteDataset";
import { getVirtualFields } from "../src/operations/v2/getVirtualFields";
import { runEffect, testRunId } from "./setup";

describe("getVirtualFields", () => {
  it(
    "lists virtual fields for an existing dataset",
    async () => {
      const datasetName = `distilled-axiom-vfields-${testRunId}`;

      const effect = Effect.gen(function* () {
        yield* createDataset({
          name: datasetName,
          description: "getVirtualFields test fixture",
        });

        const fields = yield* getVirtualFields({ dataset: datasetName });

        expect(Array.isArray(fields)).toBe(true);

        for (const field of fields) {
          expect(typeof field.id).toBe("string");
          expect(typeof field.name).toBe("string");
          expect(typeof field.expression).toBe("string");
          expect(field.dataset).toBe(datasetName);
        }
      }).pipe(
        Effect.ensuring(
          deleteDataset({ dataset_id: datasetName }).pipe(Effect.ignore),
        ),
      );

      await runEffect(effect);
    },
    { timeout: 60_000 },
  );

  it(
    "returns Unauthorized when the caller's credentials are invalid",
    async () => {
      // Override the shared Credentials layer with a Bearer token that is
      // not authorized. Axiom surfaces this as a 401, which the SDK's matchError maps to the typed Unauthorized class.
      const BadCredentials = Layer.succeed(
        Credentials,
        Effect.succeed({
          apiKey: Redacted.make(`invalid-token-${testRunId}`),
          apiBaseUrl: "https://api.axiom.co",
        }),
      );

      const error = await Effect.runPromise(
        getVirtualFields({
          dataset: `distilled-axiom-vfields-${testRunId}`,
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
