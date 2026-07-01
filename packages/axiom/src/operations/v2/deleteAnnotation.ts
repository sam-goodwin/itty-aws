import * as Schema from "effect/Schema";
import { API } from "../../client.ts";
import * as T from "../../traits.ts";
import { BadRequest, NotFound } from "../../errors.ts";

// Input Schema
export interface DeleteAnnotationInput {
  id: string;
}
export const DeleteAnnotationInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  id: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({ method: "DELETE", path: "/v2/annotations/{id}" }),
) as unknown as Schema.Codec<DeleteAnnotationInput>;

// Output Schema
export type DeleteAnnotationOutput = void;
export const DeleteAnnotationOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void as unknown as Schema.Codec<DeleteAnnotationOutput>;

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
