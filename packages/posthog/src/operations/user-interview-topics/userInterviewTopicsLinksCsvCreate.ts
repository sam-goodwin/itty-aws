import * as Schema from "effect/Schema";
import { API } from "../../client.ts";
import * as T from "../../traits.ts";

// Input Schema
export interface UserInterviewTopicsLinksCsvCreateInput {
  id: string;
  project_id: string;
}
export const UserInterviewTopicsLinksCsvCreateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.String.pipe(T.PathParam()),
    project_id: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/api/projects/{project_id}/user_interview_topics/{id}/links_csv/",
    }),
  ) as unknown as Schema.Codec<UserInterviewTopicsLinksCsvCreateInput>;

// Output Schema
export type UserInterviewTopicsLinksCsvCreateOutput = void;
export const UserInterviewTopicsLinksCsvCreateOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void as unknown as Schema.Codec<UserInterviewTopicsLinksCsvCreateOutput>;

// The operation
/**
 * Same materialization as generate_links, returned as a downloadable CSV. Intended for users who want to mail-merge the per-person interview links into their own email tooling.
 *
 * @param id - A UUID string identifying this user interview topic.
 * @param project_id - Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
 */
export const userInterviewTopicsLinksCsvCreate =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: UserInterviewTopicsLinksCsvCreateInput,
    outputSchema: UserInterviewTopicsLinksCsvCreateOutput,
  }));
