import { Effect } from "effect";
import { describe, expect, it } from "vitest";
import { createNLSearchModel } from "../src/operations/createNLSearchModel";
import { deleteNLSearchModel } from "../src/operations/deleteNLSearchModel";
import { runEffect, testRunId } from "./setup";

const openaiApiKey = process.env.OPENAI_API_KEY;

describe("deleteNLSearchModel", () => {
  it(
    "deletes an existing NL search model and returns its id",
    async () => {
      // Typesense validates the LLM API key by making a real call when the
      // model is created, so provisioning a model requires OPENAI_API_KEY.
      if (!openaiApiKey) {
        throw new Error(
          "OPENAI_API_KEY must be set to run the deleteNLSearchModel happy-path test",
        );
      }

      let createdId: string | undefined;

      const effect = Effect.gen(function* () {
        // Schema.Struct({}) preserves unknown keys on encode; the real body
        // is the NL-search-model configuration.
        const created = yield* createNLSearchModel({
          id: `distilled-typesense-delnl-${testRunId}`,
          model_name: "openai/gpt-3.5-turbo",
          api_key: openaiApiKey,
          max_bytes: 16384,
          temperature: 0,
          system_prompt:
            "You translate natural-language queries into Typesense search parameters.",
        } as never);

        const model = created as { id: string };
        createdId = model.id;

        const result = yield* deleteNLSearchModel({ modelId: model.id });
        expect(result.id).toBe(model.id);

        // The model is deleted — clear the captured id so the cleanup
        // finalizer doesn't try to delete again (which would 404).
        createdId = undefined;
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
    "fails with NotFound when the NL search model does not exist",
    async () => {
      const error = await runEffect(
        deleteNLSearchModel({
          modelId: `does-not-exist-${testRunId}`,
        }).pipe(Effect.flip),
      );

      expect((error as { _tag: string })._tag).toBe("NotFound");
    },
    { timeout: 30_000 },
  );
});
