import * as Schema from "effect/Schema";
import { API } from "../../client";
import * as T from "../../traits";
import { Forbidden, NotFound } from "../../errors";

// Input Schema
export const CommentsCountRetrieveInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    project_id: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/api/projects/{project_id}/comments/count/",
    }),
  );
export type CommentsCountRetrieveInput = typeof CommentsCountRetrieveInput.Type;

// Output Schema
export const CommentsCountRetrieveOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type CommentsCountRetrieveOutput =
  typeof CommentsCountRetrieveOutput.Type;

// The operation
/**
 *
 * @param project_id - Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
 */
export const commentsCountRetrieve = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: CommentsCountRetrieveInput,
    outputSchema: CommentsCountRetrieveOutput,
    errors: [Forbidden, NotFound] as const,
  }),
);
