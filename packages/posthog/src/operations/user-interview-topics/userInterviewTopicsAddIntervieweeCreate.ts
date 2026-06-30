import * as Schema from "effect/Schema";
import { API } from "../../client.ts";
import * as T from "../../traits.ts";

// Input Schema
export const UserInterviewTopicsAddIntervieweeCreateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.String.pipe(T.PathParam()),
    project_id: Schema.String.pipe(T.PathParam()),
    identifier: Schema.String,
  }).pipe(
    T.Http({
      method: "POST",
      path: "/api/projects/{project_id}/user_interview_topics/{id}/add_interviewee/",
    }),
  );
export type UserInterviewTopicsAddIntervieweeCreateInput =
  typeof UserInterviewTopicsAddIntervieweeCreateInput.Type;

// Output Schema
export const UserInterviewTopicsAddIntervieweeCreateOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.String,
    created_by: Schema.Struct({
      id: Schema.optional(Schema.Number),
      uuid: Schema.optional(Schema.String),
      distinct_id: Schema.optional(Schema.NullOr(Schema.String)),
      first_name: Schema.optional(Schema.String),
      last_name: Schema.optional(Schema.String),
      email: Schema.optional(Schema.String),
      is_email_verified: Schema.optional(Schema.NullOr(Schema.Boolean)),
      hedgehog_config: Schema.optional(
        Schema.NullOr(Schema.Record(Schema.String, Schema.Unknown)),
      ),
      role_at_organization: Schema.optional(Schema.Unknown),
    }),
    created_at: Schema.String,
    interviewee_emails: Schema.optional(Schema.Array(Schema.String)),
    interviewee_distinct_ids: Schema.optional(Schema.Array(Schema.String)),
    topic: Schema.String,
    agent_context: Schema.optional(Schema.String),
    questions: Schema.optional(Schema.Array(Schema.String)),
    invite_subject: Schema.optional(Schema.String),
    invite_message: Schema.optional(Schema.String),
  });
export type UserInterviewTopicsAddIntervieweeCreateOutput =
  typeof UserInterviewTopicsAddIntervieweeCreateOutput.Type;

// The operation
/**
 * Add a single interviewee to this topic. Email-shaped identifiers (including the `Display Name <email@host>` form) are appended to `interviewee_emails`; everything else is appended to `interviewee_distinct_ids`. Idempotent — adding an identifier that's already present leaves the topic unchanged. Returns the updated topic.
 *
 * @param id - A UUID string identifying this user interview topic.
 * @param project_id - Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
 */
export const userInterviewTopicsAddIntervieweeCreate =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: UserInterviewTopicsAddIntervieweeCreateInput,
    outputSchema: UserInterviewTopicsAddIntervieweeCreateOutput,
  }));
