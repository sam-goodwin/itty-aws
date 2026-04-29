import { Effect } from "effect";
import { describe, expect, it } from "vitest";
import { createNLSearchModel } from "../src/operations/createNLSearchModel";
import { deleteNLSearchModel } from "../src/operations/deleteNLSearchModel";
import { runEffect, testRunId } from "./setup";

const openaiApiKey = process.env.OPENAI_API_KEY;

describe("createNLSearchModel", () => {
  it(
    "creates an NL search model and returns its id",
    async () => {
      // Typesense validates the LLM API key by making a real call when the
      // model is created, so this happy path requires OPENAI_API_KEY to be
      // set in the environment.
      if (!openaiApiKey) {
        throw new Error(
          "OPENAI_API_KEY must be set to run the createNLSearchModel happy-path test",
        );
      }

      let createdId: string | undefined;
      const effect = Effect.gen(function* () {
        // Schema.Struct({}) preserves unknown keys on encode, so we cast the
        // full model body through. The OpenAPI spec models this endpoint
        // with an empty input schema; the real body is the NL-search-model
        // configuration.
        const created = yield* createNLSearchModel({
          id: `distilled-typesense-nl-${testRunId}`,
          model_name: "openai/gpt-3.5-turbo",
          api_key: openaiApiKey,
          max_bytes: 16384,
          temperature: 0,
          system_prompt:
            "You translate natural-language queries into Typesense search parameters.",
        } as never);

        const model = created as { id: string };
        createdId = model.id;
        expect(typeof model.id).toBe("string");
        expect(model.id.length).toBeGreaterThan(0);
      }).pipe(
        Effect.ensuring(
          Effect.suspend(() =>
            createdId === undefined
              ? Effect.void
              : deleteNLSearchModel({ modelId: createdId }).pipe(Effect.ignore),
          ),
        ),
      );

      await runEffect(effect);
    },
    { timeout: 60_000 },
  );

  it(
    "fails with BadRequest when the model body is empty / missing required fields",
    async () => {
      // Sending POST /nl_search_models with an empty body triggers 400
      // because required fields (model_name, api_key, etc.) are missing.
      const error = await runEffect(
        createNLSearchModel({}).pipe(Effect.flip),
      );

      expect((error as { _tag: string })._tag).toBe("BadRequest");
    },
    { timeout: 30_000 },
  );
});
