import * as Schema from "effect/Schema";
import { API } from "../../client.ts";
import * as T from "../../traits.ts";

// Input Schema
export interface UserInterviewTopicsDestroyInput {
  id: string;
  project_id: string;
}
export const UserInterviewTopicsDestroyInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.String.pipe(T.PathParam()),
    project_id: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/api/projects/{project_id}/user_interview_topics/{id}/",
    }),
  ) as unknown as Schema.Codec<UserInterviewTopicsDestroyInput>;

// Output Schema
export type UserInterviewTopicsDestroyOutput = void;
export const UserInterviewTopicsDestroyOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void as unknown as Schema.Codec<UserInterviewTopicsDestroyOutput>;

// The operation
/**
 * Planned user interview topics: who we want to target and what we want to ask about.
 *
 * @param id - A UUID string identifying this user interview topic.
 * @param project_id - Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
 */
export const userInterviewTopicsDestroy = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: UserInterviewTopicsDestroyInput,
    outputSchema: UserInterviewTopicsDestroyOutput,
  }),
);
