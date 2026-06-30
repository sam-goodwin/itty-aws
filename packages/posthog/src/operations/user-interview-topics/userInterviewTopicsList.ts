import * as Schema from "effect/Schema";
import { API } from "../../client.ts";
import * as T from "../../traits.ts";

// Input Schema
export interface UserInterviewTopicsListInput {
  project_id: string;
  limit?: number;
  offset?: number;
  search?: string;
}
export const UserInterviewTopicsListInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    project_id: Schema.String.pipe(T.PathParam()),
    limit: Schema.optional(Schema.Number),
    offset: Schema.optional(Schema.Number),
    search: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/api/projects/{project_id}/user_interview_topics/",
    }),
  ) as unknown as Schema.Codec<UserInterviewTopicsListInput>;

// Output Schema
export interface UserInterviewTopicsListOutput {
  count: number;
  next?: string | null;
  previous?: string | null;
  results: {
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
  }[];
}
export const UserInterviewTopicsListOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    count: Schema.Number,
    next: Schema.optional(Schema.NullOr(Schema.String)),
    previous: Schema.optional(Schema.NullOr(Schema.String)),
    results: Schema.Array(
      Schema.Struct({
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
      }),
    ),
  }) as unknown as Schema.Codec<UserInterviewTopicsListOutput>;

// The operation
/**
 * Planned user interview topics: who we want to target and what we want to ask about.
 *
 * @param limit - Number of results to return per page.
 * @param offset - The initial index from which to return the results.
 * @param project_id - Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
 * @param search - A search term.
 */
export const userInterviewTopicsList = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: UserInterviewTopicsListInput,
    outputSchema: UserInterviewTopicsListOutput,
  }),
);
