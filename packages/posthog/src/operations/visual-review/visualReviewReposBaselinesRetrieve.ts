import * as Schema from "effect/Schema";
import { API } from "../../client.ts";
import * as T from "../../traits.ts";

// Input Schema
export interface VisualReviewReposBaselinesRetrieveInput {
  id: string;
  project_id: string;
}
export const VisualReviewReposBaselinesRetrieveInput =
  /*@__PURE__*/ Schema.Struct({
    id: Schema.String.pipe(T.PathParam()),
    project_id: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/api/projects/{project_id}/visual_review/repos/{id}/baselines/",
    }),
  ) as unknown as Schema.Codec<VisualReviewReposBaselinesRetrieveInput>;

// Output Schema
export interface VisualReviewReposBaselinesRetrieveOutput {
  entries: {
    quarantine?: {
      created_by?: { id?: number; first_name?: string; email?: string } | null;
      source_run?: {
        id: string;
        branch: string;
        commit_sha: string;
        created_at: string;
        pr_number?: number | null;
      } | null;
      id: string;
      reason: string;
      expires_at: string | null;
      created_at: string;
    } | null;
    identifier: string;
    run_type: string;
    browser: string | null;
    thumbnail_hash: string | null;
    width: number | null;
    height: number | null;
    tolerate_count_30d: number;
    tolerate_count_90d: number;
    is_quarantined: boolean;
    last_run_at: string;
    baseline_change_count: number;
    recent_drift_avg: number | null;
  }[];
  totals: {
    by_run_type: Record<string, number>;
    all_snapshots: number;
    recently_tolerated: number;
    frequently_tolerated: number;
    currently_quarantined: number;
  };
  truncated: boolean;
  generated_at: string;
}
export const VisualReviewReposBaselinesRetrieveOutput =
  /*@__PURE__*/ Schema.Struct({
    entries: Schema.Array(
      Schema.Struct({
        quarantine: Schema.optional(
          Schema.NullOr(
            Schema.Struct({
              created_by: Schema.optional(
                Schema.NullOr(
                  Schema.Struct({
                    id: Schema.optional(Schema.Number),
                    first_name: Schema.optional(Schema.String),
                    email: Schema.optional(Schema.String),
                  }),
                ),
              ),
              source_run: Schema.optional(
                Schema.NullOr(
                  Schema.Struct({
                    id: Schema.String,
                    branch: Schema.String,
                    commit_sha: Schema.String,
                    created_at: Schema.String,
                    pr_number: Schema.optional(Schema.NullOr(Schema.Number)),
                  }),
                ),
              ),
              id: Schema.String,
              reason: Schema.String,
              expires_at: Schema.NullOr(Schema.String),
              created_at: Schema.String,
            }),
          ),
        ),
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
  }) as unknown as Schema.Codec<VisualReviewReposBaselinesRetrieveOutput>;

// The operation
/**
 * Snapshots overview for a repo: every identifier with a current baseline (latest non-superseded master/main run per run_type), plus tolerate counts, active quarantine state, and a 30-day stability sparkline. Capped at 5000 entries — sets `truncated` and returns the most recently active when exceeded. Filtering / faceting / search are all done client-side; this endpoint takes no filter query params.
 *
 * @param project_id - Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
 */
export const visualReviewReposBaselinesRetrieve =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: VisualReviewReposBaselinesRetrieveInput,
    outputSchema: VisualReviewReposBaselinesRetrieveOutput,
  }));
