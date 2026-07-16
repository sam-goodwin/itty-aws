import * as Schema from "effect/Schema";
import { API } from "../../client.ts";
import * as T from "../../traits.ts";

// Input Schema
export interface UserInterviewTopicsIntervieweesRetrieveInput {
  id: string;
  project_id: string;
  topic_id: string;
}
export const UserInterviewTopicsIntervieweesRetrieveInput =
  /*@__PURE__*/ Schema.Struct({
    id: Schema.String.pipe(T.PathParam()),
    project_id: Schema.String.pipe(T.PathParam()),
    topic_id: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/api/projects/{project_id}/user_interview_topics/{topic_id}/interviewees/{id}/",
    }),
  ) as unknown as Schema.Codec<UserInterviewTopicsIntervieweesRetrieveInput>;

// Output Schema
export interface UserInterviewTopicsIntervieweesRetrieveOutput {
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
export const UserInterviewTopicsIntervieweesRetrieveOutput =
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
  }) as unknown as Schema.Codec<UserInterviewTopicsIntervieweesRetrieveOutput>;

// The operation
/**
 * Per-interviewee extra context for a user interview topic. At most one row per (topic, interviewee_identifier).
 *
 * @param id - A UUID string identifying this interviewee context.
 * @param project_id - Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
 */
export const userInterviewTopicsIntervieweesRetrieve =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: UserInterviewTopicsIntervieweesRetrieveInput,
    outputSchema: UserInterviewTopicsIntervieweesRetrieveOutput,
  }));
