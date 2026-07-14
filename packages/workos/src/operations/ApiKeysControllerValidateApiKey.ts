import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { UnprocessableEntity } from "../errors.ts";

// Input Schema
export interface ApiKeysControllerValidateApiKeyInput {
  value?: string;
}
export const ApiKeysControllerValidateApiKeyInput =
  /*@__PURE__*/ Schema.Struct({
    value: Schema.optional(Schema.String),
  }).pipe(
    T.Http({ method: "POST", path: "/api_keys/validations" }),
  ) as unknown as Schema.Codec<ApiKeysControllerValidateApiKeyInput>;

// Output Schema
export interface ApiKeysControllerValidateApiKeyOutput {
  api_key?: {
    object?: string;
    id?: string;
    owner?:
      | { type: string; id: string }
      | { type: string; id: string; organization_id: string };
    name?: string;
    obfuscated_value?: string;
    last_used_at?: string | null;
    expires_at?: string | null;
    permissions?: ReadonlyArray<string>;
    created_at?: string;
    updated_at?: string;
  } | null;
  agent_registration_id?: string;
}
export const ApiKeysControllerValidateApiKeyOutput =
  /*@__PURE__*/ Schema.Struct({
    api_key: Schema.optional(
      Schema.NullOr(
        Schema.Struct({
          object: Schema.optional(Schema.String),
          id: Schema.optional(Schema.String),
          owner: Schema.optional(
            Schema.Union([
              Schema.Struct({
                type: Schema.String,
                id: Schema.String,
              }),
              Schema.Struct({
                type: Schema.String,
                id: Schema.String,
                organization_id: Schema.String,
              }),
            ]),
          ),
          name: Schema.optional(Schema.String),
          obfuscated_value: Schema.optional(Schema.String),
          last_used_at: Schema.optional(Schema.NullOr(Schema.String)),
          expires_at: Schema.optional(Schema.NullOr(Schema.String)),
          permissions: Schema.optional(Schema.Array(Schema.String)),
          created_at: Schema.optional(Schema.String),
          updated_at: Schema.optional(Schema.String),
        }),
      ),
    ),
    agent_registration_id: Schema.optional(Schema.String),
  }) as unknown as Schema.Codec<ApiKeysControllerValidateApiKeyOutput>;

// The operation
/**
 * Validate API key
 *
 * Validate an API key value and return the API key object if valid.
 */
export const ApiKeysControllerValidateApiKey =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: ApiKeysControllerValidateApiKeyInput,
    outputSchema: ApiKeysControllerValidateApiKeyOutput,
    errors: [UnprocessableEntity] as const,
  }));
