import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { BadRequest, NotFound } from "../errors.ts";
import { SensitiveString } from "../sensitive.ts";

// Input Schema
export const UpdateConversationModelInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    modelId: Schema.String.pipe(T.PathParam()),
    id: Schema.optional(Schema.String),
    model_name: Schema.optional(Schema.String),
    api_key: Schema.optional(SensitiveString),
    history_collection: Schema.optional(Schema.String),
    account_id: Schema.optional(Schema.String),
    system_prompt: Schema.optional(Schema.String),
    ttl: Schema.optional(Schema.Number),
    max_bytes: Schema.optional(Schema.Number),
    vllm_url: Schema.optional(Schema.String),
  }).pipe(T.Http({ method: "PUT", path: "/conversations/models/{modelId}" }));
export type UpdateConversationModelInput =
  typeof UpdateConversationModelInput.Type;

// Output Schema
export const UpdateConversationModelOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.String,
  });
export type UpdateConversationModelOutput =
  typeof UpdateConversationModelOutput.Type;

// The operation
/**
 * Update a conversation model
 *
 * @param modelId - The id of the conversation model to update
 */
export const updateConversationModel = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: UpdateConversationModelInput,
    outputSchema: UpdateConversationModelOutput,
    errors: [BadRequest, NotFound] as const,
  }),
);
