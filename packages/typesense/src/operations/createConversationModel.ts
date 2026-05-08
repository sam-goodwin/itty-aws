import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { BadRequest } from "../errors.ts";
import { SensitiveString } from "../sensitive.ts";

// Input Schema
export const CreateConversationModelInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.optional(Schema.String),
    model_name: Schema.String,
    api_key: Schema.optional(SensitiveString),
    history_collection: Schema.String,
    account_id: Schema.optional(Schema.String),
    system_prompt: Schema.optional(Schema.String),
    ttl: Schema.optional(Schema.Number),
    max_bytes: Schema.Number,
    vllm_url: Schema.optional(Schema.String),
  }).pipe(T.Http({ method: "POST", path: "/conversations/models" }));
export type CreateConversationModelInput =
  typeof CreateConversationModelInput.Type;

// Output Schema
export const CreateConversationModelOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.String,
  });
export type CreateConversationModelOutput =
  typeof CreateConversationModelOutput.Type;

// The operation
/**
 * Create a conversation model
 *
 * Create a Conversation Model
 */
export const createConversationModel = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: CreateConversationModelInput,
    outputSchema: CreateConversationModelOutput,
    errors: [BadRequest] as const,
  }),
);
