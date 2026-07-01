import * as Schema from "effect/Schema";
import { API } from "../../client.ts";
import * as T from "../../traits.ts";

// Input Schema
export interface SingleSessionSummariesListInput {
  project_id: string;
  created_by?: string;
  date_from?: string;
  date_to?: string;
  distinct_id?: string;
  has_exceptions?: boolean;
  has_visual_confirmation?: boolean;
  limit?: number;
  offset?: number;
  order?:
    | "-created_at"
    | "-session_duration"
    | "-session_start_time"
    | "created_at"
    | "session_duration"
    | "session_start_time";
  outcome?: "failure" | "success" | "unknown";
  session_ids?: string;
}
export const SingleSessionSummariesListInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    project_id: Schema.String.pipe(T.PathParam()),
    created_by: Schema.optional(Schema.String),
    date_from: Schema.optional(Schema.String),
    date_to: Schema.optional(Schema.String),
    distinct_id: Schema.optional(Schema.String),
    has_exceptions: Schema.optional(Schema.Boolean),
    has_visual_confirmation: Schema.optional(Schema.Boolean),
    limit: Schema.optional(Schema.Number),
    offset: Schema.optional(Schema.Number),
    order: Schema.optional(
      Schema.Literals([
        "-created_at",
        "-session_duration",
        "-session_start_time",
        "created_at",
        "session_duration",
        "session_start_time",
      ]),
    ),
    outcome: Schema.optional(
      Schema.Literals(["failure", "success", "unknown"]),
    ),
    session_ids: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/api/projects/{project_id}/single_session_summaries/",
    }),
  ) as unknown as Schema.Codec<SingleSessionSummariesListInput>;

// Output Schema
export interface SingleSessionSummariesListOutput {
  count: number;
  next?: string | null;
  previous?: string | null;
  results: {
    id: string;
    session_id: string;
    distinct_id: string | null;
    session_start_time: string | null;
    session_duration: number | null;
    session_outcome: { success?: boolean; description?: string } | null;
    exception_count: number;
    has_exceptions: boolean;
    model_used: string | null;
    visual_confirmation: boolean;
    extra_summary_context: { focus_area?: string } | null;
    created_at: string;
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
    } | null;
  }[];
}
export const SingleSessionSummariesListOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    count: Schema.Number,
    next: Schema.optional(Schema.NullOr(Schema.String)),
    previous: Schema.optional(Schema.NullOr(Schema.String)),
    results: Schema.Array(
      Schema.Struct({
        id: Schema.String,
        session_id: Schema.String,
        distinct_id: Schema.NullOr(Schema.String),
        session_start_time: Schema.NullOr(Schema.String),
        session_duration: Schema.NullOr(Schema.Number),
        session_outcome: Schema.NullOr(
          Schema.Struct({
            success: Schema.optional(Schema.Boolean),
            description: Schema.optional(Schema.String),
          }),
        ),
        exception_count: Schema.Number,
        has_exceptions: Schema.Boolean,
        model_used: Schema.NullOr(Schema.String),
        visual_confirmation: Schema.Boolean,
        extra_summary_context: Schema.NullOr(
          Schema.Struct({
            focus_area: Schema.optional(Schema.String),
          }),
        ),
        created_at: Schema.String,
        created_by: Schema.NullOr(
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
      }),
    ),
  }) as unknown as Schema.Codec<SingleSessionSummariesListOutput>;

// The operation
/**
 * List stored AI-generated session summaries for the team, one row per session (latest summary kept). Use to discover which sessions have been summarized and to filter for sessions with specific problems — `has_exceptions=true`, `outcome=failure`, or a custom `session_ids` narrowing. Returns lightweight rows without the full summary JSON; use the retrieve endpoint for the per-segment / per-action detail.
 *
 * @param created_by - Filter to summaries triggered by a specific user, identified by `User.uuid`.
 * @param date_from - Inclusive lower bound on `created_at`, accepts relative shorthand like `-7d`.
 * @param date_to - Inclusive upper bound on `created_at`, accepts relative shorthand like `-1d`.
 * @param distinct_id - Filter to summaries for a single user (the session's `distinct_id`).
 * @param has_exceptions - When true, only summaries that surfaced one or more exception events; when false, only summaries without exceptions.
 * @param has_visual_confirmation - When true, only summaries produced via the video-based visual-confirmation workflow.
 * @param limit - Number of results to return per page.
 * @param offset - The initial index from which to return the results.
 * @param order - Ordering field, defaults to `-created_at` (most recent first). Allowed: `created_at`, `session_start_time`, `session_duration` (prefix with `-` for descending).
 * @param outcome - Filter by the summary's recorded `session_outcome.success` field. `success` for true, `failure` for false, `unknown` for summaries without an outcome.
 * @param project_id - Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
 * @param session_ids - Comma-separated list of session IDs to restrict the result to (uses the `(team, session_id)` index).
 */
export const singleSessionSummariesList = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: SingleSessionSummariesListInput,
    outputSchema: SingleSessionSummariesListOutput,
  }),
);
