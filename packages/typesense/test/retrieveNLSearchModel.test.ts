import { Effect } from "effect";
import { describe, expect, it } from "vitest";
import { createNLSearchModel } from "../src/operations/createNLSearchModel";
import { deleteNLSearchModel } from "../src/operations/deleteNLSearchModel";
import { retrieveNLSearchModel } from "../src/operations/retrieveNLSearchModel";
import { runEffect, testRunId } from "./setup";

const openaiApiKey = process.env.OPENAI_API_KEY;

describe("retrieveNLSearchModel", () => {
  it(
    "retrieves an NL search model by id",
    async () => {
      // Typesense validates the LLM API key by making a real call when the
      // model is created, so provisioning a model requires OPENAI_API_KEY.
      if (!openaiApiKey) {
        throw new Error(
          "OPENAI_API_KEY must be set to run the retrieveNLSearchModel happy-path test",
        );
      }

      let createdId: string | undefined;

      const effect = Effect.gen(function* () {
        const created = yield* createNLSearchModel({
          id: `distilled-typesense-retnl-${testRunId}`,
          model_name: "openai/gpt-3.5-turbo",
          api_key: openaiApiKey,
          max_bytes: 16384,
          temperature: 0,
          system_prompt:
            "You translate natural-language queries into Typesense search parameters.",
        } as never);

        const model = created as { id: string };
        createdId = model.id;

        const retrieved = yield* retrieveNLSearchModel({ modelId: model.id });
        expect(retrieved.id).toBe(model.id);
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
        retrieveNLSearchModel({
          modelId: `does-not-exist-${testRunId}`,
        }).pipe(Effect.flip),
      );

      expect((error as { _tag: string })._tag).toBe("NotFound");
    },
    { timeout: 30_000 },
  );
});
