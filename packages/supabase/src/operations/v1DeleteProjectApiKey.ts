import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { BadRequest, Forbidden, NotFound } from "../errors.ts";
import { SensitiveOutputNullableString } from "../sensitive.ts";
import * as Redacted from "effect/Redacted";

// Input Schema
export interface V1DeleteProjectApiKeyInput {
  ref: string;
  id: string;
  reveal?: boolean;
  was_compromised?: boolean;
  reason?: string;
}
export const V1DeleteProjectApiKeyInput =
  /*@__PURE__*/ Schema.Struct({
    ref: Schema.String.pipe(T.PathParam()),
    id: Schema.String.pipe(T.PathParam()),
    reveal: Schema.optional(Schema.Boolean),
    was_compromised: Schema.optional(Schema.Boolean),
    reason: Schema.optional(Schema.String),
  }).pipe(
    T.Http({ method: "DELETE", path: "/v1/projects/{ref}/api-keys/{id}" }),
  ) as unknown as Schema.Codec<V1DeleteProjectApiKeyInput>;

// Output Schema
export interface V1DeleteProjectApiKeyOutput {
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
export const V1DeleteProjectApiKeyOutput =
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
  }) as unknown as Schema.Codec<V1DeleteProjectApiKeyOutput>;

// The operation
/**
 * Deletes an API key for the project
 *
 * @param ref - Project ref
 * @param reveal - Boolean string, true or false
 * @param was_compromised - Boolean string, true or false
 */
export const v1DeleteProjectApiKey = /*@__PURE__*/ API.make(() => ({
  inputSchema: V1DeleteProjectApiKeyInput,
  outputSchema: V1DeleteProjectApiKeyOutput,
  errors: [BadRequest, Forbidden, NotFound] as const,
}));
