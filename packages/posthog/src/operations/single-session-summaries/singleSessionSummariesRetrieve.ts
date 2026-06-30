import * as Schema from "effect/Schema";
import { API } from "../../client.ts";
import * as T from "../../traits.ts";

// Input Schema
export const SingleSessionSummariesRetrieveInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    project_id: Schema.String.pipe(T.PathParam()),
    session_id: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/api/projects/{project_id}/single_session_summaries/{session_id}/",
    }),
  );
export type SingleSessionSummariesRetrieveInput =
  typeof SingleSessionSummariesRetrieveInput.Type;

// Output Schema
export const SingleSessionSummariesRetrieveOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
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
    created_by: Schema.Unknown,
  });
export type SingleSessionSummariesRetrieveOutput =
  typeof SingleSessionSummariesRetrieveOutput.Type;

// The operation
/**
 * Get the latest stored AI summary for a single session by `session_id`. Returns the full `summary` JSON (segments with named timeline, per-action `abandonment` / `confusion` / `exception` flags, segment outcomes, headline `session_outcome`, optional `sentiment`), the `exception_event_ids` array, the `extra_summary_context` (e.g. `focus_area`) used at generation time, and the `run_metadata` (LLM model used, whether visual confirmation was applied). 404 if no summary has been generated for this session yet — to trigger generation, use the existing `session-recording-summarize` flow rather than this endpoint.
 *
 * @param project_id - Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
 */
export const singleSessionSummariesRetrieve =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: SingleSessionSummariesRetrieveInput,
    outputSchema: SingleSessionSummariesRetrieveOutput,
  }));
