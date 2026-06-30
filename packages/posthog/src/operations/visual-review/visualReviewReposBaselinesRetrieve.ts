import * as Schema from "effect/Schema";
import { API } from "../../client.ts";
import * as T from "../../traits.ts";

// Input Schema
export const VisualReviewReposBaselinesRetrieveInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.String.pipe(T.PathParam()),
    project_id: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/api/projects/{project_id}/visual_review/repos/{id}/baselines/",
    }),
  );
export type VisualReviewReposBaselinesRetrieveInput =
  typeof VisualReviewReposBaselinesRetrieveInput.Type;

// Output Schema
export const VisualReviewReposBaselinesRetrieveOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    entries: Schema.Array(
      Schema.Struct({
        quarantine: Schema.optional(Schema.Unknown),
        identifier: Schema.String,
        run_type: Schema.String,
        browser: Schema.NullOr(Schema.String),
        thumbnail_hash: Schema.NullOr(Schema.String),
        width: Schema.NullOr(Schema.Number),
        height: Schema.NullOr(Schema.Number),
        tolerate_count_30d: Schema.Number,
        tolerate_count_90d: Schema.Number,
        is_quarantined: Schema.Boolean,
        last_run_at: Schema.String,
        baseline_change_count: Schema.Number,
        recent_drift_avg: Schema.NullOr(Schema.Number),
      }),
    ),
    totals: Schema.Struct({
      by_run_type: Schema.Record(Schema.String, Schema.Number),
      all_snapshots: Schema.Number,
      recently_tolerated: Schema.Number,
      frequently_tolerated: Schema.Number,
      currently_quarantined: Schema.Number,
    }),
    truncated: Schema.Boolean,
    generated_at: Schema.String,
  });
export type VisualReviewReposBaselinesRetrieveOutput =
  typeof VisualReviewReposBaselinesRetrieveOutput.Type;

// The operation
/**
 * Snapshots overview for a repo: every identifier with a current baseline (latest non-superseded master/main run per run_type), plus tolerate counts, active quarantine state, and a 30-day stability sparkline. Capped at 5000 entries — sets `truncated` and returns the most recently active when exceeded. Filtering / faceting / search are all done client-side; this endpoint takes no filter query params.
 *
 * @param project_id - Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
 */
export const visualReviewReposBaselinesRetrieve =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: VisualReviewReposBaselinesRetrieveInput,
    outputSchema: VisualReviewReposBaselinesRetrieveOutput,
  }));
