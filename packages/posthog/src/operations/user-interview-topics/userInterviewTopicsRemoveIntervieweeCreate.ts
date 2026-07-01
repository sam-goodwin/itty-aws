import * as Schema from "effect/Schema";
import { API } from "../../client.ts";
import * as T from "../../traits.ts";

// Input Schema
export interface UserInterviewTopicsRemoveIntervieweeCreateInput {
  id: string;
  project_id: string;
  identifier: string;
}
export const UserInterviewTopicsRemoveIntervieweeCreateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.String.pipe(T.PathParam()),
    project_id: Schema.String.pipe(T.PathParam()),
    identifier: Schema.String,
  }).pipe(
    T.Http({
      method: "POST",
      path: "/api/projects/{project_id}/user_interview_topics/{id}/remove_interviewee/",
    }),
  ) as unknown as Schema.Codec<UserInterviewTopicsRemoveIntervieweeCreateInput>;

// Output Schema
export interface UserInterviewTopicsRemoveIntervieweeCreateOutput {
  id: string;
  created_by: {
    id?: number;
    uuid?: string;
    distinct_id?: string | null;
    first_name?: string;
    last_name?: string;
    email?: string;
    is_email_verified?: boolean | null;
    hedgehog_config?: Record<string, unknown> | null;
    role_at_organization?:
      | "engineering"
      | "data"
      | "product"
      | "founder"
      | "leadership"
      | "marketing"
      | "sales"
      | "other"
      | ""
      | null;
  };
  created_at: string;
  interviewee_emails?: string[];
  interviewee_distinct_ids?: string[];
  topic: string;
  agent_context?: string;
  questions?: string[];
  invite_subject?: string;
  invite_message?: string;
}
export const UserInterviewTopicsRemoveIntervieweeCreateOutput =
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
      role_at_organization: Schema.optional(
        Schema.NullOr(
          Schema.Union([
            Schema.Literals([
              "engineering",
              "data",
              "product",
              "founder",
              "leadership",
              "marketing",
              "sales",
              "other",
            ]),
            Schema.Literals([""]),
          ]),
        ),
      ),
    }),
    created_at: Schema.String,
    interviewee_emails: Schema.optional(Schema.Array(Schema.String)),
    interviewee_distinct_ids: Schema.optional(Schema.Array(Schema.String)),
    topic: Schema.String,
    agent_context: Schema.optional(Schema.String),
    questions: Schema.optional(Schema.Array(Schema.String)),
    invite_subject: Schema.optional(Schema.String),
    invite_message: Schema.optional(Schema.String),
  }) as unknown as Schema.Codec<UserInterviewTopicsRemoveIntervieweeCreateOutput>;

// The operation
/**
 * Remove an interviewee from this topic. Drops the identifier from both `interviewee_emails` and `interviewee_distinct_ids`, and disables any active SharingConfiguration linked to an IntervieweeContext for that identifier on this topic so the removed person can no longer open their interview link. Idempotent — removing an identifier that isn't present is a no-op. Returns the updated topic.
 *
 * @param id - A UUID string identifying this user interview topic.
 * @param project_id - Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
 */
export const userInterviewTopicsRemoveIntervieweeCreate =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: UserInterviewTopicsRemoveIntervieweeCreateInput,
    outputSchema: UserInterviewTopicsRemoveIntervieweeCreateOutput,
  }));
