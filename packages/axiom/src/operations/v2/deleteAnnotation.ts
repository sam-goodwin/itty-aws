import * as Schema from "effect/Schema";
import { API } from "../../client";
import * as T from "../../traits";
import { BadRequest, NotFound } from "../../errors";

// Input Schema
export const DeleteAnnotationInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  id: Schema.String.pipe(T.PathParam()),
}).pipe(T.Http({ method: "DELETE", path: "/v2/annotations/{id}" }));
export type DeleteAnnotationInput = typeof DeleteAnnotationInput.Type;

// Output Schema
export const DeleteAnnotationOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type DeleteAnnotationOutput = typeof DeleteAnnotationOutput.Type;

// The operation
/**
 * Delete annotation
 *
 * @param id - Unique ID of the annotation
 */
export const deleteAnnotation = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: DeleteAnnotationInput,
  outputSchema: DeleteAnnotationOutput,
  errors: [BadRequest, NotFound] as const,
}));
