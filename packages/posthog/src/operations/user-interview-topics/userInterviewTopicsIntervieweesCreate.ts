import * as Schema from "effect/Schema";
import { API } from "../../client.ts";
import * as T from "../../traits.ts";

// Input Schema
export interface UserInterviewTopicsIntervieweesCreateInput {
  project_id: string;
  topic_id: string;
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
  interviewee_identifier: string;
  agent_context: string;
}
export const UserInterviewTopicsIntervieweesCreateInput =
  /*@__PURE__*/ Schema.Struct({
    project_id: Schema.String.pipe(T.PathParam()),
    topic_id: Schema.String.pipe(T.PathParam()),
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
    interviewee_identifier: Schema.String,
    agent_context: Schema.String,
  }).pipe(
    T.Http({
      method: "POST",
      path: "/api/projects/{project_id}/user_interview_topics/{topic_id}/interviewees/",
    }),
  ) as unknown as Schema.Codec<UserInterviewTopicsIntervieweesCreateInput>;

// Output Schema
export interface UserInterviewTopicsIntervieweesCreateOutput {
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
  interviewee_identifier: string;
  agent_context: string;
}
export const UserInterviewTopicsIntervieweesCreateOutput =
  /*@__PURE__*/ Schema.Struct({
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
    interviewee_identifier: Schema.String,
    agent_context: Schema.String,
  }) as unknown as Schema.Codec<UserInterviewTopicsIntervieweesCreateOutput>;

// The operation
/**
 * Per-interviewee extra context for a user interview topic. At most one row per (topic, interviewee_identifier).
 *
 * @param project_id - Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
 */
export const userInterviewTopicsIntervieweesCreate =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: UserInterviewTopicsIntervieweesCreateInput,
    outputSchema: UserInterviewTopicsIntervieweesCreateOutput,
  }));
