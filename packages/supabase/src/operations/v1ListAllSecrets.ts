import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { BadRequest, Forbidden } from "../errors.ts";

// Input Schema
export interface V1ListAllSecretsInput {
  ref: string;
}
export const V1ListAllSecretsInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  ref: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({ method: "GET", path: "/v1/projects/{ref}/secrets" }),
) as unknown as Schema.Codec<V1ListAllSecretsInput>;

// Output Schema
export type V1ListAllSecretsOutput = {
  name: string;
  value: string;
  updated_at?: string;
}[];
export const V1ListAllSecretsOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Array(
  Schema.Struct({
    name: Schema.String,
    value: Schema.String,
    updated_at: Schema.optional(Schema.String),
  }),
) as unknown as Schema.Codec<V1ListAllSecretsOutput>;

// The operation
/**
 * List all secrets
 *
 * Returns all secrets you've previously added to the specified project.
 *
 * @param ref - Project ref
 */
export const v1ListAllSecrets = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: V1ListAllSecretsInput,
  outputSchema: V1ListAllSecretsOutput,
  errors: [BadRequest, Forbidden] as const,
}));
