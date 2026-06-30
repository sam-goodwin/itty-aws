import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { BadRequest } from "../errors.ts";
import { SensitiveString } from "../sensitive.ts";
import * as Redacted from "effect/Redacted";

// Input Schema
export interface CreateNLSearchModelInput {
  model_name?: string;
  api_key?: string | Redacted.Redacted<string>;
  api_url?: string;
  max_bytes?: number;
  temperature?: number;
  system_prompt?: string;
  top_p?: number;
  top_k?: number;
  stop_sequences?: string[];
  api_version?: string;
  project_id?: string;
  access_token?: string | Redacted.Redacted<string>;
  refresh_token?: string | Redacted.Redacted<string>;
  client_id?: string;
  client_secret?: string | Redacted.Redacted<string>;
  region?: string;
  max_output_tokens?: number;
  account_id?: string;
  id?: string;
}
export const CreateNLSearchModelInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    model_name: Schema.optional(Schema.String),
    api_key: Schema.optional(SensitiveString),
    api_url: Schema.optional(Schema.String),
    max_bytes: Schema.optional(Schema.Number),
    temperature: Schema.optional(Schema.Number),
    system_prompt: Schema.optional(Schema.String),
    top_p: Schema.optional(Schema.Number),
    top_k: Schema.optional(Schema.Number),
    stop_sequences: Schema.optional(Schema.Array(Schema.String)),
    api_version: Schema.optional(Schema.String),
    project_id: Schema.optional(Schema.String),
    access_token: Schema.optional(SensitiveString),
    refresh_token: Schema.optional(SensitiveString),
    client_id: Schema.optional(Schema.String),
    client_secret: Schema.optional(SensitiveString),
    region: Schema.optional(Schema.String),
    max_output_tokens: Schema.optional(Schema.Number),
    account_id: Schema.optional(Schema.String),
    id: Schema.optional(Schema.String),
  }).pipe(
    T.Http({ method: "POST", path: "/nl_search_models" }),
  ) as unknown as Schema.Codec<CreateNLSearchModelInput>;

// Output Schema
export interface CreateNLSearchModelOutput {
  id: string;
}
export const CreateNLSearchModelOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.String,
  }) as unknown as Schema.Codec<CreateNLSearchModelOutput>;

// The operation
/**
 * Create a NL search model
 *
 * Create a new NL search model.
 */
export const createNLSearchModel = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: CreateNLSearchModelInput,
  outputSchema: CreateNLSearchModelOutput,
  errors: [BadRequest] as const,
}));
