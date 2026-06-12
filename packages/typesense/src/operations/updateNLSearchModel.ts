import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { BadRequest, NotFound } from "../errors.ts";
import { SensitiveOutputString } from "../sensitive.ts";

// Input Schema
export const UpdateNLSearchModelInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    modelId: Schema.String.pipe(T.PathParam()),
  }).pipe(T.Http({ method: "PUT", path: "/nl_search_models/{modelId}" }));
export type UpdateNLSearchModelInput = typeof UpdateNLSearchModelInput.Type;

// Output Schema
export const UpdateNLSearchModelOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    model_name: Schema.optional(Schema.String),
    api_key: Schema.optional(SensitiveOutputString),
    api_url: Schema.optional(Schema.String),
    max_bytes: Schema.optional(Schema.Number),
    temperature: Schema.optional(Schema.Number),
    system_prompt: Schema.optional(Schema.String),
    top_p: Schema.optional(Schema.Number),
    top_k: Schema.optional(Schema.Number),
    stop_sequences: Schema.optional(Schema.Array(Schema.String)),
    api_version: Schema.optional(Schema.String),
    project_id: Schema.optional(Schema.String),
    access_token: Schema.optional(SensitiveOutputString),
    refresh_token: Schema.optional(SensitiveOutputString),
    client_id: Schema.optional(Schema.String),
    client_secret: Schema.optional(SensitiveOutputString),
    region: Schema.optional(Schema.String),
    max_output_tokens: Schema.optional(Schema.Number),
    account_id: Schema.optional(Schema.String),
    id: Schema.String,
  });
export type UpdateNLSearchModelOutput = typeof UpdateNLSearchModelOutput.Type;

// The operation
/**
 * Update a NL search model
 *
 * Update an existing NL search model.
 *
 * @param modelId - The ID of the NL search model to update
 */
export const updateNLSearchModel = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: UpdateNLSearchModelInput,
  outputSchema: UpdateNLSearchModelOutput,
  errors: [BadRequest, NotFound] as const,
}));
