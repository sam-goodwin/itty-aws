import { Effect } from "effect";
import { afterAll, beforeAll, describe, expect, it } from "vitest";
import { deleteConversationModel } from "../src/operations/deleteConversationModel";
import { runEffect, testRunId } from "./setup";

const apiBaseUrl = process.env.TYPESENSE_API_URL;
const apiKey = process.env.TYPESENSE_API_KEY;
const openaiApiKey = process.env.OPENAI_API_KEY;

const historyCollection = `distilled-typesense-delconv-hist-${testRunId}`;
let createdModelId: string | undefined;

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

describe("deleteConversationModel", () => {
  beforeAll(async () => {
    // Conversation models require a backing collection (the "history
    // collection") with a fixed schema.
    const createCol = await rawFetch("POST", "/collections", {
      name: historyCollection,
      fields: [
        { name: "conversation_id", type: "string" },
        { name: "model_id", type: "string" },
        { name: "timestamp", type: "int32" },
        { name: "role", type: "string", index: false },
        { name: "message", type: "string", index: false },
      ],
    });
    if (!createCol.ok && createCol.status !== 409) {
      throw new Error(
        `Failed to create history collection: ${createCol.status} ${await createCol.text()}`,
      );
    }

    if (!openaiApiKey) {
      throw new Error(
        "OPENAI_API_KEY must be set to run the deleteConversationModel happy-path test",
      );
    }

    // Typesense validates the LLM API key by making a real call when the
    // model is created, so we provision the model out-of-band so the
    // happy-path test can focus on the delete operation.
    const createModel = await rawFetch("POST", "/conversations/models", {
      model_name: "openai/gpt-3.5-turbo",
      api_key: openaiApiKey,
      system_prompt: "You are a helpful assistant.",
      max_bytes: 16384,
      history_collection: historyCollection,
    });
    if (!createModel.ok) {
      throw new Error(
        `Failed to create conversation model: ${createModel.status} ${await createModel.text()}`,
      );
    }
    const json = (await createModel.json()) as { id: string };
    createdModelId = json.id;
  }, 60_000);

  afterAll(async () => {
    // Defensive: the model is normally deleted by the happy-path test, but
    // ensure both model and history collection are gone if the test failed
    // early.
    if (createdModelId) {
      await rawFetch(
        "DELETE",
        `/conversations/models/${createdModelId}`,
      ).catch(() => {});
    }
    await rawFetch("DELETE", `/collections/${historyCollection}`).catch(
      () => {},
    );
  }, 30_000);

  it(
    "deletes an existing conversation model and returns its id",
    async () => {
      if (!createdModelId) {
        throw new Error("conversation model was not provisioned in beforeAll");
      }

      const result = await runEffect(
        deleteConversationModel({ modelId: createdModelId }),
      );

      expect(result.id).toBe(createdModelId);
    },
    { timeout: 30_000 },
  );

  it(
    "fails with NotFound when the conversation model does not exist",
    async () => {
      const error = await runEffect(
        deleteConversationModel({
          modelId: `does-not-exist-${testRunId}`,
        }).pipe(Effect.flip),
      );

      expect((error as { _tag: string })._tag).toBe("NotFound");
    },
    { timeout: 30_000 },
  );
});
