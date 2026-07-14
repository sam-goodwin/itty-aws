import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { BadRequest, Forbidden, NotFound } from "../errors.ts";
import { SensitiveOutputNullableString } from "../sensitive.ts";
import * as Redacted from "effect/Redacted";

// Input Schema
export interface V1GetProjectApiKeyInput {
  ref: string;
  id: string;
  reveal?: boolean;
}
export const V1GetProjectApiKeyInput =
  /*@__PURE__*/ Schema.Struct({
    ref: Schema.String.pipe(T.PathParam()),
    id: Schema.String.pipe(T.PathParam()),
    reveal: Schema.optional(Schema.Boolean),
  }).pipe(
    T.Http({ method: "GET", path: "/v1/projects/{ref}/api-keys/{id}" }),
  ) as unknown as Schema.Codec<V1GetProjectApiKeyInput>;

// Output Schema
export interface V1GetProjectApiKeyOutput {
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
export const V1GetProjectApiKeyOutput =
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
  }) as unknown as Schema.Codec<V1GetProjectApiKeyOutput>;

// The operation
/**
 * Get API key
 *
 * @param ref - Project ref
 * @param reveal - Boolean string, true or false
 */
export const v1GetProjectApiKey = /*@__PURE__*/ API.make(() => ({
  inputSchema: V1GetProjectApiKeyInput,
  outputSchema: V1GetProjectApiKeyOutput,
  errors: [BadRequest, Forbidden, NotFound] as const,
}));
