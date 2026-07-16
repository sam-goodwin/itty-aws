import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { BadRequest, Forbidden, NotFound } from "../errors.ts";

// Input Schema
export interface V1DeleteAFunctionInput {
  ref: string;
  function_slug: string;
}
export const V1DeleteAFunctionInput = /*@__PURE__*/ Schema.Struct({
  ref: Schema.String.pipe(T.PathParam()),
  function_slug: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "DELETE",
    path: "/v1/projects/{ref}/functions/{function_slug}",
  }),
) as unknown as Schema.Codec<V1DeleteAFunctionInput>;

// Output Schema
export type V1DeleteAFunctionOutput = void;
export const V1DeleteAFunctionOutput =
  /*@__PURE__*/ Schema.Void as unknown as Schema.Codec<V1DeleteAFunctionOutput>;

// The operation
/**
 * Delete a function
 *
 * Deletes a function with the specified slug from the specified project.
 *
 * @param ref - Project ref
 * @param function_slug - Function slug
 */
export const v1DeleteAFunction = /*@__PURE__*/ API.make(() => ({
  inputSchema: V1DeleteAFunctionInput,
  outputSchema: V1DeleteAFunctionOutput,
  errors: [BadRequest, Forbidden, NotFound] as const,
}));
