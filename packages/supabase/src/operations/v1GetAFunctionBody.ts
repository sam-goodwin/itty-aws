import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { BadRequest, Forbidden, NotFound } from "../errors.ts";

// Input Schema
export interface V1GetAFunctionBodyInput {
  ref: string;
  function_slug: string;
}
export const V1GetAFunctionBodyInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    ref: Schema.String.pipe(T.PathParam()),
    function_slug: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/v1/projects/{ref}/functions/{function_slug}/body",
    }),
  ) as unknown as Schema.Codec<V1GetAFunctionBodyInput>;

// Output Schema
export interface V1GetAFunctionBodyOutput {}
export const V1GetAFunctionBodyOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
    {},
  ) as unknown as Schema.Codec<V1GetAFunctionBodyOutput>;

// The operation
/**
 * Retrieve a function body
 *
 * Retrieves a function body for the specified slug and project.
 *
 * @param ref - Project ref
 * @param function_slug - Function slug
 */
export const v1GetAFunctionBody = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: V1GetAFunctionBodyInput,
  outputSchema: V1GetAFunctionBodyOutput,
  errors: [BadRequest, Forbidden, NotFound] as const,
}));
