import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { BadRequest, Forbidden } from "../errors.ts";
import { SensitiveOutputNullableString } from "../sensitive.ts";
import * as Redacted from "effect/Redacted";

// Input Schema
export interface V1GetProjectApiKeysInput {
  ref: string;
  reveal?: boolean;
}
export const V1GetProjectApiKeysInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    ref: Schema.String.pipe(T.PathParam()),
    reveal: Schema.optional(Schema.Boolean),
  }).pipe(
    T.Http({ method: "GET", path: "/v1/projects/{ref}/api-keys" }),
  ) as unknown as Schema.Codec<V1GetProjectApiKeysInput>;

// Output Schema
export type V1GetProjectApiKeysOutput = {
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
}[];
export const V1GetProjectApiKeysOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Array(
    Schema.Struct({
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
    }),
  ) as unknown as Schema.Codec<V1GetProjectApiKeysOutput>;

// The operation
/**
 * Get project api keys
 *
 * @param ref - Project ref
 * @param reveal - Boolean string, true or false
 */
export const v1GetProjectApiKeys = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: V1GetProjectApiKeysInput,
  outputSchema: V1GetProjectApiKeysOutput,
  errors: [BadRequest, Forbidden] as const,
}));
