import * as Schema from "effect/Schema";
import { FunctionResponseSchema } from "./_schemas.ts";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { BadRequest, Forbidden } from "../errors.ts";

// Input Schema
export const V1ListAllFunctionsInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    ref: Schema.String.pipe(T.PathParam()),
  }).pipe(T.Http({ method: "GET", path: "/v1/projects/{ref}/functions" }));
export type V1ListAllFunctionsInput = typeof V1ListAllFunctionsInput.Type;

// Output Schema
export const V1ListAllFunctionsOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Array(
    Schema.suspend(() => FunctionResponseSchema),
  );
export type V1ListAllFunctionsOutput = typeof V1ListAllFunctionsOutput.Type;

// The operation
/**
 * List all functions
 *
 * Returns all functions you've previously added to the specified project.
 *
 * @param ref - Project ref
 */
export const v1ListAllFunctions = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: V1ListAllFunctionsInput,
  outputSchema: V1ListAllFunctionsOutput,
  errors: [BadRequest, Forbidden] as const,
}));
