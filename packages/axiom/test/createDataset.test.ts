import { Effect, Layer, Redacted } from "effect";
import * as FetchHttpClient from "effect/unstable/http/FetchHttpClient";
import { describe, expect, it } from "vitest";
import { Credentials } from "../src/credentials";
import { createDataset } from "../src/operations/v2/createDataset";
import { deleteDataset } from "../src/operations/v2/deleteDataset";
import { runEffect, testRunId } from "./setup";

describe("createDataset", () => {
  it(
    "creates a dataset and returns the expected shape",
    async () => {
      const datasetName = `distilled-axiom-createds-${testRunId}`;

      const effect = Effect.gen(function* () {
        const dataset = yield* createDataset({
          name: datasetName,
          description: "createDataset happy path",
        });

        expect(dataset.name).toBe(datasetName);
        expect(typeof dataset.id).toBe("string");
        expect(dataset.id.length).toBeGreaterThan(0);
        expect(dataset.description).toBe("createDataset happy path");
        expect(typeof dataset.created).toBe("string");
        expect(typeof dataset.who).toBe("string");
        expect(dataset.kind).toBeDefined();
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
    "returns BadRequest for an invalid dataset name format",
    async () => {
      // Probes confirmed axiom returns 400 for invalid dataset name formats
      // (names with characters outside the allowed alphabet).
      const error = await runEffect(
        createDataset({
          name: "invalid name with spaces and !@#$%",
          description: "should fail",
        }).pipe(Effect.flip),
      );

      expect((error as { _tag: string })._tag).toBe("BadRequest");
    },
    { timeout: 30_000 },
  );

  // Removed: the client-side schema requires `name`, so `createDataset({})`
  // fails at encode time before any request is sent. Server-side 422 is not
  // reachable without bypassing the schema.

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
        createDataset({
          name: `distilled-axiom-createds-fb-${testRunId}`,
          description: "should be forbidden",
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
