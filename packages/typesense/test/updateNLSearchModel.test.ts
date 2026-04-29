import { Effect } from "effect";
import { describe, expect, it } from "vitest";
import { createNLSearchModel } from "../src/operations/createNLSearchModel";
import { deleteNLSearchModel } from "../src/operations/deleteNLSearchModel";
import { updateNLSearchModel } from "../src/operations/updateNLSearchModel";
import { runEffect, testRunId } from "./setup";

const openaiApiKey = process.env.OPENAI_API_KEY;

describe("updateNLSearchModel", () => {
  it(
    "updates an NL search model and returns its id",
    async () => {
      // Typesense validates the LLM API key by making a real call when the
      // model is created/updated, so this test requires OPENAI_API_KEY.
      if (!openaiApiKey) {
        throw new Error(
          "OPENAI_API_KEY must be set to run the updateNLSearchModel happy-path test",
        );
      }

      let createdId: string | undefined;
      const effect = Effect.gen(function* () {
        const created = yield* createNLSearchModel({
          id: `distilled-typesense-updnl-${testRunId}`,
          model_name: "openai/gpt-3.5-turbo",
          api_key: openaiApiKey,
          max_bytes: 16384,
          temperature: 0,
          system_prompt:
            "You translate natural-language queries into Typesense search parameters.",
        } as never);

        const model = created as { id: string };
        createdId = model.id;

        // The SDK's input schema only models `modelId` (path param). The
        // real body is the partial NL-model update, which we inject via
        // `as never`.
        const updated = yield* updateNLSearchModel({
          modelId: model.id,
          system_prompt: "Updated system prompt for NL search.",
          max_bytes: 32768,
          api_key: openaiApiKey,
        } as never);

        expect(updated.id).toBe(model.id);
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
        updateNLSearchModel({
          modelId: `does-not-exist-${testRunId}`,
          system_prompt: "Updated prompt.",
        } as never).pipe(Effect.flip),
      );

      expect((error as { _tag: string })._tag).toBe("NotFound");
    },
    { timeout: 30_000 },
  );

  it(
    "fails with BadRequest when the update body has an invalid model_name",
    async () => {
      if (!openaiApiKey) {
        throw new Error(
          "OPENAI_API_KEY must be set to run the updateNLSearchModel BadRequest test",
        );
      }

      let createdId: string | undefined;
      const effect = Effect.gen(function* () {
        // Provision a real model so the 400 is specifically about the
        // invalid update body and not about the model not existing.
        const created = yield* createNLSearchModel({
          id: `distilled-typesense-updnl-bad-${testRunId}`,
          model_name: "openai/gpt-3.5-turbo",
          api_key: openaiApiKey,
          max_bytes: 16384,
          temperature: 0,
          system_prompt:
            "You translate natural-language queries into Typesense search parameters.",
        } as never);

        const model = created as { id: string };
        createdId = model.id;

        const error = yield* updateNLSearchModel({
          modelId: model.id,
          model_name: "not-a-real-model",
          api_key: openaiApiKey,
        } as never).pipe(Effect.flip);

        expect((error as { _tag: string })._tag).toBe("BadRequest");
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
});
