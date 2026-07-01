import * as Schema from "effect/Schema";
import { API } from "../../client.ts";
import * as T from "../../traits.ts";
import { BadRequest, Forbidden, NotFound } from "../../errors.ts";

// Input Schema
export interface HeatmapsListInput {
  project_id: string;
  aggregation?: "unique_visitors" | "total_count";
  cohort_ids?: string;
  date_from?: string;
  date_to?: string;
  filter_test_accounts?: string;
  hide_zero_coordinates?: boolean;
  limit?: number;
  offset?: number;
  type?: string;
  url_exact?: string;
  url_pattern?: string;
  viewport_width_max?: number;
  viewport_width_min?: number;
}
export const HeatmapsListInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  project_id: Schema.String.pipe(T.PathParam()),
  aggregation: Schema.optional(
    Schema.Literals(["unique_visitors", "total_count"]),
  ),
  cohort_ids: Schema.optional(Schema.String),
  date_from: Schema.optional(Schema.String),
  date_to: Schema.optional(Schema.String),
  filter_test_accounts: Schema.optional(Schema.String),
  hide_zero_coordinates: Schema.optional(Schema.Boolean),
  limit: Schema.optional(Schema.Number),
  offset: Schema.optional(Schema.Number),
  type: Schema.optional(Schema.String),
  url_exact: Schema.optional(Schema.String),
  url_pattern: Schema.optional(Schema.String),
  viewport_width_max: Schema.optional(Schema.Number),
  viewport_width_min: Schema.optional(Schema.Number),
}).pipe(
  T.Http({ method: "GET", path: "/api/projects/{project_id}/heatmaps/" }),
) as unknown as Schema.Codec<HeatmapsListInput>;

// Output Schema
export type HeatmapsListOutput = {
  results?: {
    count?: number;
    pointer_y?: number;
    pointer_relative_x?: number;
    pointer_target_fixed?: boolean;
  }[];
  fold?: {
    total_count: number;
    below_fold_count: number;
    pct_below_fold: number;
    median_viewport_height: number | null;
  } | null;
  has_more?: boolean;
}[];
export const HeatmapsListOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Array(
  Schema.Struct({
    results: Schema.optional(
      Schema.Array(
        Schema.Struct({
          count: Schema.optional(Schema.Number),
          pointer_y: Schema.optional(Schema.Number),
          pointer_relative_x: Schema.optional(Schema.Number),
          pointer_target_fixed: Schema.optional(Schema.Boolean),
        }),
      ),
    ),
    fold: Schema.optional(
      Schema.NullOr(
        Schema.Struct({
          total_count: Schema.Number,
          below_fold_count: Schema.Number,
          pct_below_fold: Schema.Number,
          median_viewport_height: Schema.NullOr(Schema.Number),
        }),
      ),
    ),
    has_more: Schema.optional(Schema.Boolean),
  }),
) as unknown as Schema.Codec<HeatmapsListOutput>;

// The operation
/**
 * Aggregated heatmap interactions for a page. For type 'click'/'rageclick'/'mousemove' each result is a point with relative x, absolute client-y, and a count. For type 'scrolldepth' the response is scroll-depth buckets instead (cumulative reach down the page).
 *
 * @param aggregation - How to aggregate counts: 'total_count' (every interaction, default) or 'unique_visitors' (distinct people).

* `unique_visitors` - unique_visitors
* `total_count` - total_count
 * @param cohort_ids - JSON array of cohort IDs (e.g. '[123, 456]') to restrict results to people in those cohorts. Feature-flagged; ignored when the cohort filter is not enabled for the caller.
 * @param date_from - Start of the window. Relative (e.g. '-7d', '-30d', '-1mStart') or an absolute 'YYYY-MM-DD' date. Defaults to '-7d'. Heatmap data is retained for 90 days.
 * @param date_to - End of the window, inclusive. Relative or absolute 'YYYY-MM-DD'. Defaults to today.
 * @param filter_test_accounts - When true, exclude sessions from internal/test accounts using the project's test-account filters.
 * @param hide_zero_coordinates - When true (default), drop interactions recorded at the (0, 0) origin, which are usually noise.
 * @param limit - Maximum number of coordinate points to return, ordered hottest-first by count. Defaults to 500. Pass 0 to fetch the full set (every coordinate) needed to render a complete heatmap overlay. Ignored for the 'scrolldepth' type, which always returns every bucket.
 * @param offset - Number of hottest-first points to skip, for paging through cooler coordinates. Ignored for the 'scrolldepth' type.
 * @param project_id - Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
 * @param type - The interaction type to return. One of: 'click' (default), 'rageclick', 'mousemove', or 'scrolldepth'. Scrolldepth returns scroll buckets instead of x/y coordinates.
 * @param url_exact - Match a single page by exact URL (trailing slash is ignored). Mutually exclusive with url_pattern.
 * @param url_pattern - Match pages by regex against the full current_url (anchored automatically). Use this to aggregate across query strings or path segments. Mutually exclusive with url_exact.
 * @param viewport_width_max - Only include interactions captured at a viewport at most this wide, in CSS pixels.
 * @param viewport_width_min - Only include interactions captured at a viewport at least this wide, in CSS pixels. Use with viewport_width_max to isolate a device class (e.g. 360-768 for mobile).
 */
export const heatmapsList = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: HeatmapsListInput,
  outputSchema: HeatmapsListOutput,
  errors: [BadRequest, Forbidden, NotFound] as const,
}));
