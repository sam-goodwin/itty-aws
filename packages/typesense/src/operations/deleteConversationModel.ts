import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { NotFound } from "../errors.ts";
import { SensitiveOutputString } from "../sensitive.ts";

// Input Schema
export const DeleteConversationModelInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    modelId: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({ method: "DELETE", path: "/conversations/models/{modelId}" }),
  );
export type DeleteConversationModelInput =
  typeof DeleteConversationModelInput.Type;

// Output Schema
export const DeleteConversationModelOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.String,
    model_name: Schema.String,
    api_key: Schema.optional(SensitiveOutputString),
    history_collection: Schema.String,
    account_id: Schema.optional(Schema.String),
    system_prompt: Schema.optional(Schema.String),
    ttl: Schema.optional(Schema.Number),
    max_bytes: Schema.Number,
    vllm_url: Schema.optional(Schema.String),
  });
export type DeleteConversationModelOutput =
  typeof DeleteConversationModelOutput.Type;

// The operation
/**
 * Delete a conversation model
 *
 * @param modelId - The id of the conversation model to delete
 */
export const deleteConversationModel = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: DeleteConversationModelInput,
    outputSchema: DeleteConversationModelOutput,
    errors: [NotFound] as const,
  }),
);
