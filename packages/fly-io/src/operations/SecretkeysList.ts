import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { Forbidden, NotFound } from "../errors.ts";

// Input Schema
export interface SecretkeysListInput {
  app_name: string;
  min_version?: string;
  types?: string;
}
export const SecretkeysListInput = /*@__PURE__*/ Schema.Struct({
  app_name: Schema.String.pipe(T.PathParam()),
  min_version: Schema.optional(Schema.String),
  types: Schema.optional(Schema.String),
}).pipe(
  T.Http({ method: "GET", path: "/apps/{app_name}/secretkeys" }),
) as unknown as Schema.Codec<SecretkeysListInput>;

// Output Schema
export interface SecretkeysListOutput {
  secret_keys?: {
    created_at?: string;
    name?: string;
    public_key?: number[];
    type?: string;
    updated_at?: string;
  }[];
}
export const SecretkeysListOutput = /*@__PURE__*/ Schema.Struct({
  secret_keys: Schema.optional(
    Schema.Array(
      Schema.Struct({
        created_at: Schema.optional(Schema.String),
        name: Schema.optional(Schema.String),
        public_key: Schema.optional(Schema.Array(Schema.Number)),
        type: Schema.optional(Schema.String),
        updated_at: Schema.optional(Schema.String),
      }),
    ),
  ),
}) as unknown as Schema.Codec<SecretkeysListOutput>;

// The operation
/**
 * List secret keys belonging to an app
 *
 * @param app_name - Fly App Name
 * @param min_version - Minimum secrets version to return. Returned when setting a new secret
 * @param types - Comma-seperated list of secret keys to list
 */
export const SecretkeysList = /*@__PURE__*/ API.make(() => ({
  inputSchema: SecretkeysListInput,
  outputSchema: SecretkeysListOutput,
  errors: [Forbidden, NotFound] as const,
}));
