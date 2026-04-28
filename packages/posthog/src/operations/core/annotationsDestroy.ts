import * as Schema from "effect/Schema";
import { API } from "../../client";
import * as T from "../../traits";
import { Forbidden, NotFound } from "../../errors";

// Input Schema
export const AnnotationsDestroyInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.Number.pipe(T.PathParam()),
    project_id: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/api/projects/{project_id}/annotations/{id}/",
    }),
  );
export type AnnotationsDestroyInput = typeof AnnotationsDestroyInput.Type;

// Output Schema
export const AnnotationsDestroyOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type AnnotationsDestroyOutput = typeof AnnotationsDestroyOutput.Type;

// The operation
/**
 * Hard delete of this model is not allowed. Use a patch API call to set "deleted" to true
 *
 * @param id - A unique integer value identifying this annotation.
 * @param project_id - Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
 */
export const annotationsDestroy = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: AnnotationsDestroyInput,
  outputSchema: AnnotationsDestroyOutput,
  errors: [Forbidden, NotFound] as const,
}));
