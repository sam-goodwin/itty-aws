import * as Schema from "effect/Schema";
import { API } from "../../client.ts";
import * as T from "../../traits.ts";

// Input Schema
export interface SingleSessionSummariesRetrieveInput {
  project_id: string;
  session_id: string;
}
export const SingleSessionSummariesRetrieveInput =
  /*@__PURE__*/ Schema.Struct({
    project_id: Schema.String.pipe(T.PathParam()),
    session_id: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/api/projects/{project_id}/single_session_summaries/{session_id}/",
    }),
  ) as unknown as Schema.Codec<SingleSessionSummariesRetrieveInput>;

// Output Schema
export interface SingleSessionSummariesRetrieveOutput {
  id: string;
  session_id: string;
  distinct_id: string | null;
  session_start_time: string | null;
  session_duration: number | null;
  summary: Record<string, unknown>;
  exception_event_ids: string[];
  extra_summary_context: { focus_area?: string } | null;
  run_metadata: unknown | null;
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
}
export const SingleSessionSummariesRetrieveOutput =
  /*@__PURE__*/ Schema.Struct({
    id: Schema.String,
    session_id: Schema.String,
    distinct_id: Schema.NullOr(Schema.String),
    session_start_time: Schema.NullOr(Schema.String),
    session_duration: Schema.NullOr(Schema.Number),
    summary: Schema.Record(Schema.String, Schema.Unknown),
    exception_event_ids: Schema.Array(Schema.String),
    extra_summary_context: Schema.NullOr(
      Schema.Struct({
        focus_area: Schema.optional(Schema.String),
      }),
    ),
    run_metadata: Schema.NullOr(Schema.Unknown),
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
  }) as unknown as Schema.Codec<SingleSessionSummariesRetrieveOutput>;

// The operation
/**
 * Get the latest stored AI summary for a single session by `session_id`. Returns the full `summary` JSON (segments with named timeline, per-action `abandonment` / `confusion` / `exception` flags, segment outcomes, headline `session_outcome`, optional `sentiment`), the `exception_event_ids` array, the `extra_summary_context` (e.g. `focus_area`) used at generation time, and the `run_metadata` (LLM model used, whether visual confirmation was applied). 404 if no summary has been generated for this session yet — to trigger generation, use the existing `session-recording-summarize` flow rather than this endpoint.
 *
 * @param project_id - Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
 */
export const singleSessionSummariesRetrieve =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: SingleSessionSummariesRetrieveInput,
    outputSchema: SingleSessionSummariesRetrieveOutput,
  }));
