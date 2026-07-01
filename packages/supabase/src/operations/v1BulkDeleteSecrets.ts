import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { BadRequest, Forbidden } from "../errors.ts";

// Input Schema
export interface V1BulkDeleteSecretsInput {
  ref: string;
}
export const V1BulkDeleteSecretsInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    ref: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({ method: "DELETE", path: "/v1/projects/{ref}/secrets" }),
  ) as unknown as Schema.Codec<V1BulkDeleteSecretsInput>;

// Output Schema
export type V1BulkDeleteSecretsOutput = void;
export const V1BulkDeleteSecretsOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void as unknown as Schema.Codec<V1BulkDeleteSecretsOutput>;

// The operation
/**
 * Bulk delete secrets
 *
 * Deletes all secrets with the given names from the specified project
 *
 * @param ref - Project ref
 */
export const v1BulkDeleteSecrets = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: V1BulkDeleteSecretsInput,
  outputSchema: V1BulkDeleteSecretsOutput,
  errors: [BadRequest, Forbidden] as const,
}));
