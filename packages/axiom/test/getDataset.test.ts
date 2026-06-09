import { Effect, Layer, Redacted } from "effect";
import * as FetchHttpClient from "effect/unstable/http/FetchHttpClient";
import { describe, expect, it } from "vitest";
import { Credentials } from "../src/credentials";
import { createDataset } from "../src/operations/v2/createDataset";
import { deleteDataset } from "../src/operations/v2/deleteDataset";
import { getDataset } from "../src/operations/v2/getDataset";
import { runEffect, testRunId } from "./setup";

describe("getDataset", () => {
  it(
    "returns a dataset by id",
    async () => {
      const datasetName = `distilled-axiom-getds-${testRunId}`;

      const effect = Effect.gen(function* () {
        const created = yield* createDataset({
          name: datasetName,
          description: "getDataset test fixture",
        });

        const fetched = yield* getDataset({ dataset_id: datasetName });

        expect(fetched.name).toBe(datasetName);
        expect(fetched.id).toBe(created.id);
        expect(fetched.description).toBe("getDataset test fixture");
        expect(typeof fetched.created).toBe("string");
        expect(typeof fetched.who).toBe("string");
        expect(fetched.kind).toBeDefined();
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
        getDataset({
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
        getDataset({
          dataset_id: `distilled-axiom-getds-fb-${testRunId}`,
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
