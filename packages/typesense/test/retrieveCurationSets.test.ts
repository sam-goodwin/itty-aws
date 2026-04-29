import { Effect, Layer, Redacted } from "effect";
import * as FetchHttpClient from "effect/unstable/http/FetchHttpClient";
import { describe, expect, it } from "vitest";
import { Credentials } from "../src/credentials";
import { deleteCurationSet } from "../src/operations/deleteCurationSet";
import { retrieveCurationSets } from "../src/operations/retrieveCurationSets";
import { upsertCurationSet } from "../src/operations/upsertCurationSet";
import { runEffect, testRunId } from "./setup";

describe("retrieveCurationSets", () => {
  it(
    "lists all curation sets including ones we just created",
    async () => {
      const curationSetName = `distilled-typesense-retcurationsets-${testRunId}`;

      const effect = Effect.gen(function* () {
        yield* upsertCurationSet({
          curationSetName,
          items: [
            {
              rule: { query: "shoe", match: "exact" },
              includes: [{ id: "doc-1", position: 1 }],
            },
          ],
          description: "test curation set",
        });

        const result = yield* retrieveCurationSets({});
        expect(Array.isArray(result)).toBe(true);

        const ours = result.find((s) => s.name === curationSetName);
        expect(ours).toBeDefined();
        expect(Array.isArray(ours?.items)).toBe(true);
      }).pipe(
        Effect.ensuring(
          deleteCurationSet({ curationSetName }).pipe(Effect.ignore),
        ),
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
        retrieveCurationSets({}).pipe(
          Effect.flip,
          Effect.provide(Layer.merge(BadCredentials, FetchHttpClient.layer)),
        ) as Effect.Effect<unknown, never, never>,
      );

      expect((error as { _tag: string })._tag).toBe("Unauthorized");
    },
    { timeout: 30_000 },
  );
});
