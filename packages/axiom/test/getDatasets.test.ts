import { Effect, Layer, Redacted } from "effect";
import * as FetchHttpClient from "effect/unstable/http/FetchHttpClient";
import { describe, expect, it } from "vitest";
import { Credentials } from "../src/credentials";
import { createDataset } from "../src/operations/v2/createDataset";
import { deleteDataset } from "../src/operations/v2/deleteDataset";
import { getDatasets } from "../src/operations/v2/getDatasets";
import { runEffect, testRunId } from "./setup";

describe("getDatasets", () => {
  it(
    "returns an array of datasets including one we just created",
    async () => {
      const datasetName = `distilled-axiom-getdatasets-${testRunId}`;

      const effect = Effect.gen(function* () {
        // Prerequisite: ensure at least one dataset exists that we own.
        yield* createDataset({
          name: datasetName,
          description: "getDatasets test fixture",
        });

        const datasets = yield* getDatasets({});

        expect(Array.isArray(datasets)).toBe(true);
        // Every element must match the declared shape.
        for (const ds of datasets) {
          expect(typeof ds.id).toBe("string");
          expect(typeof ds.name).toBe("string");
          expect(typeof ds.created).toBe("string");
          expect(typeof ds.who).toBe("string");
        }

        const found = datasets.find((d) => d.name === datasetName);
        expect(found).toBeDefined();
      }).pipe(
        Effect.ensuring(
          // Best-effort cleanup. Ignore failures so a half-setup run still
          // tears down what it can.
          deleteDataset({ dataset_id: datasetName }).pipe(Effect.ignore),
        ),
      );

      await runEffect(effect);
    },
    { timeout: 60_000 },
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
        getDatasets({}).pipe(
          Effect.flip,
          Effect.provide(Layer.merge(BadCredentials, FetchHttpClient.layer)),
        ) as Effect.Effect<unknown, never, never>,
      );

      expect((error as { _tag: string })._tag).toBe("Unauthorized");
    },
    { timeout: 30_000 },
  );
});
