import { Effect, Layer, Redacted } from "effect";
import * as FetchHttpClient from "effect/unstable/http/FetchHttpClient";
import { describe, expect, it } from "vitest";
import { Credentials } from "../src/credentials";
import { createDataset } from "../src/operations/v2/createDataset";
import { deleteDataset } from "../src/operations/v2/deleteDataset";
import { updateDataset } from "../src/operations/v2/updateDataset";
import { runEffect, testRunId } from "./setup";

describe("updateDataset", () => {
  it(
    "updates a dataset's description",
    async () => {
      const datasetName = `distilled-axiom-updateds-${testRunId}`;

      const effect = Effect.gen(function* () {
        const created = yield* createDataset({
          name: datasetName,
          description: "initial description",
        });
        expect(created.description).toBe("initial description");

        const updated = yield* updateDataset({
          dataset_id: datasetName,
          description: "updated description",
        });

        expect(updated.name).toBe(datasetName);
        expect(updated.id).toBe(created.id);
        expect(updated.description).toBe("updated description");
        expect(typeof updated.created).toBe("string");
        expect(typeof updated.who).toBe("string");
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
        updateDataset({
          dataset_id: `distilled-axiom-doesnotexist-${testRunId}`,
          description: "any",
        }).pipe(Effect.flip),
      );

      expect((error as { _tag: string })._tag).toBe("NotFound");
    },
    { timeout: 30_000 },
  );

  // Removed: "returns UnprocessableEntity for a semantically invalid
  // retentionDays". Probed live: axiom accepts a negative retentionDays
  // value and stores it verbatim (200 OK). There is no simple body-shape
  // input that triggers 422 on this endpoint.

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
        updateDataset({
          dataset_id: `distilled-axiom-updateds-fb-${testRunId}`,
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
