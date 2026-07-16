import * as Schema from "effect/Schema";
import { API } from "../../client.ts";
import * as T from "../../traits.ts";

// Input Schema
export interface UserInterviewsCreateInput {
  project_id: string;
  id?: string;
  created_by?: {
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
  } | null;
  created_at?: string;
  interviewee_emails?: string[];
  interviewee_identifier?: string;
  topic?: string | null;
  transcript?: string;
  summary?: string;
  classifications?: ("abandoned" | "off-topic")[];
  audio?: string;
}
export const UserInterviewsCreateInput =
  /*@__PURE__*/ Schema.Struct({
    project_id: Schema.String.pipe(T.PathParam()),
    id: Schema.optional(Schema.String),
    created_by: Schema.optional(
      Schema.NullOr(
        Schema.Struct({
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
      ),
    ),
    created_at: Schema.optional(Schema.String),
    interviewee_emails: Schema.optional(Schema.Array(Schema.String)),
    interviewee_identifier: Schema.optional(Schema.String),
    topic: Schema.optional(Schema.NullOr(Schema.String)),
    transcript: Schema.optional(Schema.String),
    summary: Schema.optional(Schema.String),
    classifications: Schema.optional(
      Schema.Array(Schema.Literals(["abandoned", "off-topic"])),
    ),
    audio: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/api/projects/{project_id}/user_interviews/",
    }),
  ) as unknown as Schema.Codec<UserInterviewsCreateInput>;

// Output Schema
export interface UserInterviewsCreateOutput {
  id?: string;
  created_by?: {
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
  } | null;
  created_at?: string;
  interviewee_emails?: string[];
  interviewee_identifier?: string;
  topic?: string | null;
  transcript?: string;
  summary?: string;
  classifications?: ("abandoned" | "off-topic")[];
  audio?: string;
}
export const UserInterviewsCreateOutput =
  /*@__PURE__*/ Schema.Struct({
    id: Schema.optional(Schema.String),
    created_by: Schema.optional(
      Schema.NullOr(
        Schema.Struct({
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
      ),
    ),
    created_at: Schema.optional(Schema.String),
    interviewee_emails: Schema.optional(Schema.Array(Schema.String)),
    interviewee_identifier: Schema.optional(Schema.String),
    topic: Schema.optional(Schema.NullOr(Schema.String)),
    transcript: Schema.optional(Schema.String),
    summary: Schema.optional(Schema.String),
    classifications: Schema.optional(
      Schema.Array(Schema.Literals(["abandoned", "off-topic"])),
    ),
    audio: Schema.optional(Schema.String),
  }) as unknown as Schema.Codec<UserInterviewsCreateOutput>;

// The operation
/**
 *
 * @param project_id - Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
 */
export const userInterviewsCreate = /*@__PURE__*/ API.make(() => ({
  inputSchema: UserInterviewsCreateInput,
  outputSchema: UserInterviewsCreateOutput,
}));
