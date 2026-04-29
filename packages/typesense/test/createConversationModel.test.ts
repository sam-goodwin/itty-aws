import { Effect } from "effect";
import { afterAll, beforeAll, describe, expect, it } from "vitest";
import { createConversationModel } from "../src/operations/createConversationModel";
import { deleteConversationModel } from "../src/operations/deleteConversationModel";
import { runEffect, testRunId } from "./setup";

const apiBaseUrl = process.env.TYPESENSE_API_URL;
const apiKey = process.env.TYPESENSE_API_KEY;
const openaiApiKey = process.env.OPENAI_API_KEY;

const historyCollection = `distilled-typesense-conv-hist-${testRunId}`;

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

describe("createConversationModel", () => {
  beforeAll(async () => {
    // Conversation models require a backing collection (the "history
    // collection") with a fixed schema: role, message, timestamp,
    // model_id, conversation_id.
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
    "creates a conversation model and returns its id",
    async () => {
      // Typesense validates the LLM API key by making a real call when the
      // model is created, so this happy path requires OPENAI_API_KEY to be
      // set in the environment.
      if (!openaiApiKey) {
        throw new Error(
          "OPENAI_API_KEY must be set to run the createConversationModel happy-path test",
        );
      }

      let createdId: string | undefined;
      const effect = Effect.gen(function* () {
        // Schema.Struct({}) preserves unknown keys on encode, so we cast the
        // full model body through. The OpenAPI spec models this endpoint
        // with an empty input schema; the real body is the conversation
        // model configuration.
        const created = yield* createConversationModel({
          model_name: "openai/gpt-3.5-turbo",
          api_key: openaiApiKey,
          system_prompt: "You are a helpful assistant.",
          max_bytes: 16384,
          history_collection: historyCollection,
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
    "fails with BadRequest when the model body is empty / missing required fields",
    async () => {
      // Sending POST /conversations/models with an empty body triggers 400
      // because required fields (model_name, history_collection, etc.) are
      // missing.
      const error = await runEffect(
        createConversationModel({}).pipe(Effect.flip),
      );

      expect((error as { _tag: string })._tag).toBe("BadRequest");
    },
    { timeout: 30_000 },
  );
});
