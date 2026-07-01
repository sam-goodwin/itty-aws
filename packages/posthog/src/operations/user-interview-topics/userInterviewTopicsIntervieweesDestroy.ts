import * as Schema from "effect/Schema";
import { API } from "../../client.ts";
import * as T from "../../traits.ts";

// Input Schema
export interface UserInterviewTopicsIntervieweesDestroyInput {
  id: string;
  project_id: string;
  topic_id: string;
}
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
  ) as unknown as Schema.Codec<UserInterviewTopicsIntervieweesDestroyInput>;

// Output Schema
export type UserInterviewTopicsIntervieweesDestroyOutput = void;
export const UserInterviewTopicsIntervieweesDestroyOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void as unknown as Schema.Codec<UserInterviewTopicsIntervieweesDestroyOutput>;

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
