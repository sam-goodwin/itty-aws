import * as Schema from "effect/Schema";
import { API } from "../../client.ts";
import * as T from "../../traits.ts";
import { Forbidden, NotFound } from "../../errors.ts";

// Input Schema
export interface CommentsDestroyInput {
  id: string;
  project_id: string;
}
export const CommentsDestroyInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  id: Schema.String.pipe(T.PathParam()),
  project_id: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "DELETE",
    path: "/api/projects/{project_id}/comments/{id}/",
  }),
) as unknown as Schema.Codec<CommentsDestroyInput>;

// Output Schema
export type CommentsDestroyOutput = void;
export const CommentsDestroyOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void as unknown as Schema.Codec<CommentsDestroyOutput>;

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
