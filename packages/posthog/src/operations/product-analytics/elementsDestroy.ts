import * as Schema from "effect/Schema";
import { API } from "../../client";
import * as T from "../../traits";
import { Forbidden, NotFound } from "../../errors";

// Input Schema
export const ElementsDestroyInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  id: Schema.Number.pipe(T.PathParam()),
  project_id: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "DELETE",
    path: "/api/projects/{project_id}/elements/{id}/",
  }),
);
export type ElementsDestroyInput = typeof ElementsDestroyInput.Type;

// Output Schema
export const ElementsDestroyOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type ElementsDestroyOutput = typeof ElementsDestroyOutput.Type;

// The operation
/**
 *
 * @param id - A unique integer value identifying this element.
 * @param project_id - Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
 */
export const elementsDestroy = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: ElementsDestroyInput,
  outputSchema: ElementsDestroyOutput,
  errors: [Forbidden, NotFound] as const,
}));
