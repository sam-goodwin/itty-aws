import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { BadRequest, Forbidden } from "../errors.ts";
import { SensitiveOutputNullableString } from "../sensitive.ts";
import * as Redacted from "effect/Redacted";

// Input Schema
export interface V1CreateProjectApiKeyInput {
  ref: string;
  reveal?: boolean;
  type: "publishable" | "secret";
  name: string;
  description?: string | null;
  secret_jwt_template?: Record<string, unknown> | null;
}
export const V1CreateProjectApiKeyInput =
  /*@__PURE__*/ Schema.Struct({
    ref: Schema.String.pipe(T.PathParam()),
    reveal: Schema.optional(Schema.Boolean),
    type: Schema.Literals(["publishable", "secret"]),
    name: Schema.String,
    description: Schema.optional(Schema.NullOr(Schema.String)),
    secret_jwt_template: Schema.optional(
      Schema.NullOr(Schema.Record(Schema.String, Schema.Unknown)),
    ),
  }).pipe(
    T.Http({ method: "POST", path: "/v1/projects/{ref}/api-keys" }),
  ) as unknown as Schema.Codec<V1CreateProjectApiKeyInput>;

// Output Schema
export interface V1CreateProjectApiKeyOutput {
  api_key?: Redacted.Redacted<string> | null;
  id?: string | null;
  type?: "legacy" | "publishable" | "secret" | null;
  prefix?: string | null;
  name: string;
  description?: string | null;
  hash?: string | null;
  secret_jwt_template?: Record<string, unknown> | null;
  inserted_at?: string | null;
  updated_at?: string | null;
}
export const V1CreateProjectApiKeyOutput =
  /*@__PURE__*/ Schema.Struct({
    api_key: Schema.optional(SensitiveOutputNullableString),
    id: Schema.optional(Schema.NullOr(Schema.String)),
    type: Schema.optional(
      Schema.NullOr(Schema.Literals(["legacy", "publishable", "secret"])),
    ),
    prefix: Schema.optional(Schema.NullOr(Schema.String)),
    name: Schema.String,
    description: Schema.optional(Schema.NullOr(Schema.String)),
    hash: Schema.optional(Schema.NullOr(Schema.String)),
    secret_jwt_template: Schema.optional(
      Schema.NullOr(Schema.Record(Schema.String, Schema.Unknown)),
    ),
    inserted_at: Schema.optional(Schema.NullOr(Schema.String)),
    updated_at: Schema.optional(Schema.NullOr(Schema.String)),
  }) as unknown as Schema.Codec<V1CreateProjectApiKeyOutput>;

// The operation
/**
 * Creates a new API key for the project
 *
 * @param ref - Project ref
 * @param reveal - Boolean string, true or false
 */
export const v1CreateProjectApiKey = /*@__PURE__*/ API.make(() => ({
  inputSchema: V1CreateProjectApiKeyInput,
  outputSchema: V1CreateProjectApiKeyOutput,
  errors: [BadRequest, Forbidden] as const,
}));
