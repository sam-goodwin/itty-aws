import * as Schema from "effect/Schema";
import { API } from "../../client.ts";
import * as T from "../../traits.ts";

// Input Schema
export const UserInterviewTopicsIntervieweesDestroyInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.String.pipe(T.PathParam()),
    project_id: Schema.String.pipe(T.PathParam()),
    topic_id: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/api/projects/{project_id}/user_interview_topics/{topic_id}/interviewees/{id}/",
    }),
  );
export type UserInterviewTopicsIntervieweesDestroyInput =
  typeof UserInterviewTopicsIntervieweesDestroyInput.Type;

// Output Schema
export const UserInterviewTopicsIntervieweesDestroyOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type UserInterviewTopicsIntervieweesDestroyOutput =
  typeof UserInterviewTopicsIntervieweesDestroyOutput.Type;

// The operation
/**
 * Per-interviewee extra context for a user interview topic. At most one row per (topic, interviewee_identifier).
 *
 * @param id - A UUID string identifying this interviewee context.
 * @param project_id - Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
 */
export const userInterviewTopicsIntervieweesDestroy =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: UserInterviewTopicsIntervieweesDestroyInput,
    outputSchema: UserInterviewTopicsIntervieweesDestroyOutput,
  }));
