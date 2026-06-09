import { Effect, Layer, Redacted } from "effect";
import { FetchHttpClient } from "effect/unstable/http";
import { describe, expect, it } from "vitest";
import { Credentials } from "../src/credentials";
import { queryApl } from "../src/operations/v1-edge-query/queryApl";
import { createDataset } from "../src/operations/v2/createDataset";
import { deleteDataset } from "../src/operations/v2/deleteDataset";
import { runEffect, testRunId } from "./setup";

describe("queryApl", () => {
  it(
    "runs a tabular APL query against a real dataset",
    async () => {
      const datasetName = `distilled-axiom-queryapl-${testRunId}`;

      const effect = Effect.gen(function* () {
        yield* createDataset({
          name: datasetName,
          description: "queryApl test fixture",
        });

        const result = yield* queryApl({
          format: "tabular",
          apl: `['${datasetName}'] | limit 1`,
        });

        expect(result).toBeDefined();
        expect(typeof result).toBe("object");
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
    "returns Unauthorized when credentials are invalid",
    async () => {
      const badCredentials = Layer.succeed(
        Credentials,
        Effect.succeed({
          apiKey: Redacted.make("invalid-queryapl-token"),
          apiBaseUrl: "https://api.axiom.co",
        }),
      );

      const effect = queryApl({
        format: "tabular",
        apl: `['some-dataset'] | limit 1`,
      }).pipe(
        Effect.flip,
        Effect.provide(badCredentials),
        Effect.provide(FetchHttpClient.layer),
      );

      const error = await Effect.runPromise(effect);
      expect((error as { _tag: string })._tag).toBe("Unauthorized");
    },
    { timeout: 30_000 },
  );

  it(
    "returns BadRequest when the APL query is malformed",
    async () => {
      const error = await runEffect(
        queryApl({
          format: "tabular",
          apl: "this is not valid APL syntax @@@ invalid !!!",
        }).pipe(Effect.flip),
      );

      expect((error as { _tag: string })._tag).toBe("BadRequest");
    },
    { timeout: 30_000 },
  );
});
