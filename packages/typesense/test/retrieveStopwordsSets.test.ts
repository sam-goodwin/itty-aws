import { Effect, Layer, Redacted } from "effect";
import * as FetchHttpClient from "effect/unstable/http/FetchHttpClient";
import { describe, expect, it } from "vitest";
import { Credentials } from "../src/credentials";
import { deleteStopwordsSet } from "../src/operations/deleteStopwordsSet";
import { retrieveStopwordsSets } from "../src/operations/retrieveStopwordsSets";
import { upsertStopwordsSet } from "../src/operations/upsertStopwordsSet";
import { runEffect, testRunId } from "./setup";

describe("retrieveStopwordsSets", () => {
  it(
    "lists all stopwords sets including ones we just created",
    async () => {
      const setId = `distilled-typesense-retstops-${testRunId}`;

      const effect = Effect.gen(function* () {
        yield* upsertStopwordsSet({
          setId,
          stopwords: ["the", "a", "an"],
          locale: "en",
        });

        const result = yield* retrieveStopwordsSets({});
        expect(Array.isArray(result.stopwords)).toBe(true);

        const ours = result.stopwords.find((s) => s.id === setId);
        expect(ours).toBeDefined();
        expect(ours?.stopwords).toContain("the");
        expect(ours?.locale).toBe("en");
      }).pipe(
        Effect.ensuring(deleteStopwordsSet({ setId }).pipe(Effect.ignore)),
      );

      await runEffect(effect);
    },
    { timeout: 30_000 },
  );

  it(
    "returns Unauthorized when the X-TYPESENSE-API-KEY is invalid",
    async () => {
      const apiBaseUrl = process.env.TYPESENSE_API_URL;
      if (!apiBaseUrl) {
        throw new Error(
          "TYPESENSE_API_URL must be set to run typesense tests",
        );
      }
      const BadCredentials = Layer.succeed(Credentials, {
        apiKey: Redacted.make(`invalid-key-${testRunId}`),
        apiBaseUrl,
      });

      const error = await Effect.runPromise(
        retrieveStopwordsSets({}).pipe(
          Effect.flip,
          Effect.provide(Layer.merge(BadCredentials, FetchHttpClient.layer)),
        ) as Effect.Effect<unknown, never, never>,
      );

      expect((error as { _tag: string })._tag).toBe("Unauthorized");
    },
    { timeout: 30_000 },
  );
});
