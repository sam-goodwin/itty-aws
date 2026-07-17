import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { BadRequest, Forbidden } from "../errors.ts";

// Input Schema
export interface V1BulkCreateSecretsInput {
  ref: string;
}
export const V1BulkCreateSecretsInput =
  /*@__PURE__*/ Schema.Struct({
    ref: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({ method: "POST", path: "/v1/projects/{ref}/secrets" }),
  ) as unknown as Schema.Codec<V1BulkCreateSecretsInput>;

// Output Schema
export type V1BulkCreateSecretsOutput = void;
export const V1BulkCreateSecretsOutput =
  /*@__PURE__*/ Schema.Void as unknown as Schema.Codec<V1BulkCreateSecretsOutput>;

// The operation
/**
 * Bulk create secrets
 *
 * Creates multiple secrets and adds them to the specified project.
 *
 * @param ref - Project ref
 */
export const v1BulkCreateSecrets = /*@__PURE__*/ API.make(() => ({
  inputSchema: V1BulkCreateSecretsInput,
  outputSchema: V1BulkCreateSecretsOutput,
  errors: [BadRequest, Forbidden] as const,
}));
