import * as Schema from "effect/Schema";
import { API } from "../../client";
import * as T from "../../traits";
import { Forbidden, NotFound } from "../../errors";

// Input Schema
export const UserInterviewsDestroyInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.String.pipe(T.PathParam()),
    project_id: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/api/environments/{project_id}/user_interviews/{id}/",
    }),
  );
export type UserInterviewsDestroyInput = typeof UserInterviewsDestroyInput.Type;

// Output Schema
export const UserInterviewsDestroyOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type UserInterviewsDestroyOutput =
  typeof UserInterviewsDestroyOutput.Type;

// The operation
/**
 *
 * @param id - A UUID string identifying this user interview.
 * @param project_id - Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
 */
export const userInterviewsDestroy = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: UserInterviewsDestroyInput,
    outputSchema: UserInterviewsDestroyOutput,
    errors: [Forbidden, NotFound] as const,
  }),
);
