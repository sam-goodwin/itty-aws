import * as Schema from "effect/Schema";
import { API } from "../../client.ts";
import * as T from "../../traits.ts";

// Input Schema
export interface UserInterviewsDestroyInput {
  id: string;
  project_id: string;
}
export const UserInterviewsDestroyInput =
  /*@__PURE__*/ Schema.Struct({
    id: Schema.String.pipe(T.PathParam()),
    project_id: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/api/projects/{project_id}/user_interviews/{id}/",
    }),
  ) as unknown as Schema.Codec<UserInterviewsDestroyInput>;

// Output Schema
export type UserInterviewsDestroyOutput = void;
export const UserInterviewsDestroyOutput =
  /*@__PURE__*/ Schema.Void as unknown as Schema.Codec<UserInterviewsDestroyOutput>;

// The operation
/**
 *
 * @param id - A UUID string identifying this user interview.
 * @param project_id - Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
 */
export const userInterviewsDestroy = /*@__PURE__*/ API.make(() => ({
  inputSchema: UserInterviewsDestroyInput,
  outputSchema: UserInterviewsDestroyOutput,
}));
