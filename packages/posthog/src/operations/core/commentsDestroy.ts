import * as Schema from "effect/Schema";
import { API } from "../../client";
import * as T from "../../traits";
import { Forbidden, NotFound } from "../../errors";

// Input Schema
export const CommentsDestroyInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  id: Schema.String.pipe(T.PathParam()),
  project_id: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "DELETE",
    path: "/api/projects/{project_id}/comments/{id}/",
  }),
);
export type CommentsDestroyInput = typeof CommentsDestroyInput.Type;

// Output Schema
export const CommentsDestroyOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type CommentsDestroyOutput = typeof CommentsDestroyOutput.Type;

// The operation
/**
 * Hard delete of this model is not allowed. Use a patch API call to set "deleted" to true
 *
 * @param id - A UUID string identifying this comment.
 * @param project_id - Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
 */
export const commentsDestroy = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: CommentsDestroyInput,
  outputSchema: CommentsDestroyOutput,
  errors: [Forbidden, NotFound] as const,
}));
