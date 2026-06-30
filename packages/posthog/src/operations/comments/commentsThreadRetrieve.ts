import * as Schema from "effect/Schema";
import { API } from "../../client.ts";
import * as T from "../../traits.ts";
import { Forbidden, NotFound } from "../../errors.ts";

// Input Schema
export interface CommentsThreadRetrieveInput {
  id: string;
  project_id: string;
}
export const CommentsThreadRetrieveInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.String.pipe(T.PathParam()),
    project_id: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/api/projects/{project_id}/comments/{id}/thread/",
    }),
  ) as unknown as Schema.Codec<CommentsThreadRetrieveInput>;

// Output Schema
export type CommentsThreadRetrieveOutput = void;
export const CommentsThreadRetrieveOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void as unknown as Schema.Codec<CommentsThreadRetrieveOutput>;

// The operation
/**
 *
 * @param id - A UUID string identifying this comment.
 * @param project_id - Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
 */
export const commentsThreadRetrieve = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: CommentsThreadRetrieveInput,
    outputSchema: CommentsThreadRetrieveOutput,
    errors: [Forbidden, NotFound] as const,
  }),
);
