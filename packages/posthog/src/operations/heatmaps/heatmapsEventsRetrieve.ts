import * as Schema from "effect/Schema";
import { API } from "../../client.ts";
import * as T from "../../traits.ts";
import { Forbidden, NotFound } from "../../errors.ts";

// Input Schema
export interface HeatmapsEventsRetrieveInput {
  project_id: string;
  aggregation?: "unique_visitors" | "total_count";
  cohort_ids?: string;
  date_from?: string;
  date_to?: string;
  filter_test_accounts?: string;
  hide_zero_coordinates?: boolean;
  limit?: number;
  offset?: number;
  points: string;
  type?: string;
  url_exact?: string;
  url_pattern?: string;
  viewport_width_max?: number;
  viewport_width_min?: number;
}
export const HeatmapsEventsRetrieveInput =
  /*@__PURE__*/ Schema.Struct({
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
    points: Schema.String,
    type: Schema.optional(Schema.String),
    url_exact: Schema.optional(Schema.String),
    url_pattern: Schema.optional(Schema.String),
    viewport_width_max: Schema.optional(Schema.Number),
    viewport_width_min: Schema.optional(Schema.Number),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/api/projects/{project_id}/heatmaps/events/",
    }),
  ) as unknown as Schema.Codec<HeatmapsEventsRetrieveInput>;

// Output Schema
export interface HeatmapsEventsRetrieveOutput {
  results: {
    session_id?: string | null;
    distinct_id: string;
    timestamp: string;
    pointer_relative_x: number;
    pointer_y: number;
    current_url: string;
    type: string;
  }[];
  total_count: number;
  has_more: boolean;
}
export const HeatmapsEventsRetrieveOutput =
  /*@__PURE__*/ Schema.Struct({
    results: Schema.Array(
      Schema.Struct({
        session_id: Schema.optional(Schema.NullOr(Schema.String)),
        distinct_id: Schema.String,
        timestamp: Schema.String,
        pointer_relative_x: Schema.Number,
        pointer_y: Schema.Number,
        current_url: Schema.String,
        type: Schema.String,
      }),
    ),
    total_count: Schema.Number,
    has_more: Schema.Boolean,
  }) as unknown as Schema.Codec<HeatmapsEventsRetrieveOutput>;

// The operation
/**
 * Drill into the individual session interactions behind one or more heatmap coordinates. Pass the 'points' you want to inspect (from the heatmaps list response) to get the underlying per-session events, so you can jump to the session recordings that produced a hotspot.
 *
 * @param aggregation - How to aggregate counts: 'total_count' (every interaction, default) or 'unique_visitors' (distinct people).

* `unique_visitors` - unique_visitors
* `total_count` - total_count
 * @param cohort_ids - JSON array of cohort IDs (e.g. '[123, 456]') to restrict results to people in those cohorts. Feature-flagged; ignored when the cohort filter is not enabled for the caller.
 * @param date_from - Start of the window. Relative (e.g. '-7d', '-30d', '-1mStart') or an absolute 'YYYY-MM-DD' date. Defaults to '-7d'. Heatmap data is retained for 90 days.
 * @param date_to - End of the window, inclusive. Relative or absolute 'YYYY-MM-DD'. Defaults to today.
 * @param filter_test_accounts - When true, exclude sessions from internal/test accounts using the project's test-account filters.
 * @param hide_zero_coordinates - When true (default), drop interactions recorded at the (0, 0) origin, which are usually noise.
 * @param limit - Maximum interactions to return (1-100).
 * @param offset - Number of interactions to skip, for pagination.
 * @param points - JSON array of the heatmap coordinates to drill into, e.g. '[{"x": 0.5, "y": 100}]'. Each point needs 'x' (relative x, 0..1) and 'y' (absolute client-y pixels) matching values returned by the heatmaps list endpoint; an optional 'target_fixed' boolean matches fixed-position elements. Returns the individual session interactions behind those spots.
 * @param project_id - Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
 * @param type - The interaction type to return. One of: 'click' (default), 'rageclick', 'mousemove', or 'scrolldepth'. Scrolldepth returns scroll buckets instead of x/y coordinates.
 * @param url_exact - Match a single page by exact URL (trailing slash is ignored). Mutually exclusive with url_pattern.
 * @param url_pattern - Match pages by regex against the full current_url (anchored automatically). Use this to aggregate across query strings or path segments. Mutually exclusive with url_exact.
 * @param viewport_width_max - Only include interactions captured at a viewport at most this wide, in CSS pixels.
 * @param viewport_width_min - Only include interactions captured at a viewport at least this wide, in CSS pixels. Use with viewport_width_max to isolate a device class (e.g. 360-768 for mobile).
 */
export const heatmapsEventsRetrieve = /*@__PURE__*/ API.make(() => ({
  inputSchema: HeatmapsEventsRetrieveInput,
  outputSchema: HeatmapsEventsRetrieveOutput,
  errors: [Forbidden, NotFound] as const,
}));
