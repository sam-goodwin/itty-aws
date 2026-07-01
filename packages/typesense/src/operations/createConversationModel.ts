import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { BadRequest } from "../errors.ts";
import { SensitiveString } from "../sensitive.ts";
import * as Redacted from "effect/Redacted";

// Input Schema
export interface CreateConversationModelInput {
  id?: string;
  model_name: string;
  api_key?: string | Redacted.Redacted<string>;
  history_collection: string;
  account_id?: string;
  system_prompt?: string;
  ttl?: number;
  max_bytes: number;
  vllm_url?: string;
}
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
  }).pipe(
    T.Http({ method: "POST", path: "/conversations/models" }),
  ) as unknown as Schema.Codec<CreateConversationModelInput>;

// Output Schema
export interface CreateConversationModelOutput {
  id: string;
}
export const CreateConversationModelOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.String,
  }) as unknown as Schema.Codec<CreateConversationModelOutput>;

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
