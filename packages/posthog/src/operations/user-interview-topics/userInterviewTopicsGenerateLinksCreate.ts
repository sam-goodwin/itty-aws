import * as Schema from "effect/Schema";
import { API } from "../../client.ts";
import * as T from "../../traits.ts";

// Input Schema
export const UserInterviewTopicsGenerateLinksCreateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.String.pipe(T.PathParam()),
    project_id: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/api/projects/{project_id}/user_interview_topics/{id}/generate_links/",
    }),
  );
export type UserInterviewTopicsGenerateLinksCreateInput =
  typeof UserInterviewTopicsGenerateLinksCreateInput.Type;

// Output Schema
export const UserInterviewTopicsGenerateLinksCreateOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    count: Schema.Number,
    next: Schema.optional(Schema.NullOr(Schema.String)),
    previous: Schema.optional(Schema.NullOr(Schema.String)),
    results: Schema.Array(
      Schema.Struct({
        interviewee_identifier: Schema.String,
        user_name: Schema.String,
        interview_url: Schema.String,
        agent_context: Schema.String,
      }),
    ),
  });
export type UserInterviewTopicsGenerateLinksCreateOutput =
  typeof UserInterviewTopicsGenerateLinksCreateOutput.Type;

// The operation
/**
 * Generate one public interview link per targeted interviewee. Materializes an IntervieweeContext row for every identifier on the topic (without overwriting existing per-person context), and an enabled SharingConfiguration with a unique access token. The URL resolves to the public interview viewer with no PostHog auth required.
 *
 * @param id - A UUID string identifying this user interview topic.
 * @param project_id - Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
 */
export const userInterviewTopicsGenerateLinksCreate =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: UserInterviewTopicsGenerateLinksCreateInput,
    outputSchema: UserInterviewTopicsGenerateLinksCreateOutput,
  }));
