import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { Forbidden, NotFound } from "../errors.ts";

// Input Schema
export interface SecretsListInput {
  app_name: string;
  min_version?: string;
  show_secrets?: boolean;
}
export const SecretsListInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  app_name: Schema.String.pipe(T.PathParam()),
  min_version: Schema.optional(Schema.String),
  show_secrets: Schema.optional(Schema.Boolean),
}).pipe(
  T.Http({ method: "GET", path: "/apps/{app_name}/secrets" }),
) as unknown as Schema.Codec<SecretsListInput>;

// Output Schema
export interface SecretsListOutput {
  secrets?: {
    created_at?: string;
    digest?: string;
    name?: string;
    updated_at?: string;
    value?: string;
  }[];
}
export const SecretsListOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  secrets: Schema.optional(
    Schema.Array(
      Schema.Struct({
        created_at: Schema.optional(Schema.String),
        digest: Schema.optional(Schema.String),
        name: Schema.optional(Schema.String),
        updated_at: Schema.optional(Schema.String),
        value: Schema.optional(Schema.String),
      }),
    ),
  ),
}) as unknown as Schema.Codec<SecretsListOutput>;

// The operation
/**
 * List app secrets belonging to an app
 *
 * @param app_name - Fly App Name
 * @param min_version - Minimum secrets version to return. Returned when setting a new secret
 * @param show_secrets - Show the secret values.
 */
export const SecretsList = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: SecretsListInput,
  outputSchema: SecretsListOutput,
  errors: [Forbidden, NotFound] as const,
}));
