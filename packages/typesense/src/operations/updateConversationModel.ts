import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { BadRequest, NotFound } from "../errors.ts";
import { SensitiveString } from "../sensitive.ts";
import * as Redacted from "effect/Redacted";

// Input Schema
export interface UpdateConversationModelInput {
  modelId: string;
  id?: string;
  model_name?: string;
  api_key?: string | Redacted.Redacted<string>;
  history_collection?: string;
  account_id?: string;
  system_prompt?: string;
  ttl?: number;
  max_bytes?: number;
  vllm_url?: string;
}
export const UpdateConversationModelInput =
  /*@__PURE__*/ Schema.Struct({
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
  }).pipe(
    T.Http({ method: "PUT", path: "/conversations/models/{modelId}" }),
  ) as unknown as Schema.Codec<UpdateConversationModelInput>;

// Output Schema
export interface UpdateConversationModelOutput {
  id: string;
}
export const UpdateConversationModelOutput =
  /*@__PURE__*/ Schema.Struct({
    id: Schema.String,
  }) as unknown as Schema.Codec<UpdateConversationModelOutput>;

// The operation
/**
 * Update a conversation model
 *
 * @param modelId - The id of the conversation model to update
 */
export const updateConversationModel = /*@__PURE__*/ API.make(() => ({
  inputSchema: UpdateConversationModelInput,
  outputSchema: UpdateConversationModelOutput,
  errors: [BadRequest, NotFound] as const,
}));
