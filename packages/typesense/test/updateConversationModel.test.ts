import { Effect } from "effect";
import { afterAll, beforeAll, describe, expect, it } from "vitest";
import { createConversationModel } from "../src/operations/createConversationModel";
import { deleteConversationModel } from "../src/operations/deleteConversationModel";
import { updateConversationModel } from "../src/operations/updateConversationModel";
import { runEffect, testRunId } from "./setup";

const apiBaseUrl = process.env.TYPESENSE_API_URL;
const apiKey = process.env.TYPESENSE_API_KEY;
const openaiApiKey = process.env.OPENAI_API_KEY;

const historyCollection = `distilled-typesense-updconv-hist-${testRunId}`;

const rawFetch = async (
  method: string,
  path: string,
  body?: unknown,
): Promise<Response> => {
  if (!apiBaseUrl || !apiKey) {
    throw new Error(
      "TYPESENSE_API_URL and TYPESENSE_API_KEY must be set to run typesense tests",
    );
  }
  return fetch(`${apiBaseUrl}${path}`, {
    method,
    headers: {
      "X-TYPESENSE-API-KEY": apiKey,
      "Content-Type": "application/json",
    },
    body: body === undefined ? undefined : JSON.stringify(body),
  });
};

describe("updateConversationModel", () => {
  beforeAll(async () => {
    const res = await rawFetch("POST", "/collections", {
      name: historyCollection,
      fields: [
        { name: "conversation_id", type: "string" },
        { name: "model_id", type: "string" },
        { name: "timestamp", type: "int32" },
        { name: "role", type: "string", index: false },
        { name: "message", type: "string", index: false },
      ],
    });
    if (!res.ok && res.status !== 409) {
      throw new Error(
        `Failed to create history collection: ${res.status} ${await res.text()}`,
      );
    }
  }, 30_000);

  afterAll(async () => {
    await rawFetch("DELETE", `/collections/${historyCollection}`).catch(
      () => {},
    );
  }, 30_000);

  it(
    "updates a conversation model and returns its id",
    async () => {
      // Typesense validates the LLM API key by making a real call when the
      // model is created/updated, so this test requires OPENAI_API_KEY.
      if (!openaiApiKey) {
        throw new Error(
          "OPENAI_API_KEY must be set to run the updateConversationModel happy-path test",
        );
      }

      let createdId: string | undefined;
      const effect = Effect.gen(function* () {
        const created = yield* createConversationModel({
          model_name: "openai/gpt-3.5-turbo",
          api_key: openaiApiKey,
          system_prompt: "You are a helpful assistant.",
          max_bytes: 16384,
          history_collection: historyCollection,
        } as never);

        const model = created as { id: string };
        createdId = model.id;

        const updated = yield* updateConversationModel({
          modelId: model.id,
          system_prompt: "You are an even more helpful assistant.",
          max_bytes: 32768,
          api_key: openaiApiKey,
        });

        expect(updated.id).toBe(model.id);
      }).pipe(
        Effect.ensuring(
          Effect.suspend(() =>
            createdId === undefined
              ? Effect.void
              : deleteConversationModel({ modelId: createdId }).pipe(
                  Effect.ignore,
                ),
          ),
        ),
      );

      await runEffect(effect);
    },
    { timeout: 60_000 },
  );

  it(
    "fails with NotFound when the conversation model does not exist",
    async () => {
      const error = await runEffect(
        updateConversationModel({
          modelId: `does-not-exist-${testRunId}`,
          system_prompt: "Updated prompt.",
        }).pipe(Effect.flip),
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
          "OPENAI_API_KEY must be set to run the updateConversationModel BadRequest test",
        );
      }

      let createdId: string | undefined;
      const effect = Effect.gen(function* () {
        // Provision a real model first so the 400 is specifically about the
        // invalid update body and not about the model not existing.
        const created = yield* createConversationModel({
          model_name: "openai/gpt-3.5-turbo",
          api_key: openaiApiKey,
          system_prompt: "You are a helpful assistant.",
          max_bytes: 16384,
          history_collection: historyCollection,
        } as never);

        const model = created as { id: string };
        createdId = model.id;

        // "not-a-real-model" is not in the supported provider/model format,
        // so Typesense rejects it with 400.
        const error = yield* updateConversationModel({
          modelId: model.id,
          model_name: "not-a-real-model",
          api_key: openaiApiKey,
        }).pipe(Effect.flip);

        expect((error as { _tag: string })._tag).toBe("BadRequest");
      }).pipe(
        Effect.ensuring(
          Effect.suspend(() =>
            createdId === undefined
              ? Effect.void
              : deleteConversationModel({ modelId: createdId }).pipe(
                  Effect.ignore,
                ),
          ),
        ),
      );

      await runEffect(effect);
    },
    { timeout: 60_000 },
  );
});
