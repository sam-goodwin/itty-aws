import * as Schema from "effect/Schema";
import { API } from "../../client.ts";
import * as T from "../../traits.ts";

// Input Schema
export const WebAnalyticsWeeklyDigestInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    project_id: Schema.String.pipe(T.PathParam()),
    compare: Schema.optional(Schema.Boolean),
    days: Schema.optional(Schema.Number),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/api/projects/{project_id}/web_analytics/weekly_digest/",
    }),
  );
export type WebAnalyticsWeeklyDigestInput =
  typeof WebAnalyticsWeeklyDigestInput.Type;

// Output Schema
export const WebAnalyticsWeeklyDigestOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    visitors: Schema.optional(
      Schema.Struct({
        current: Schema.optional(Schema.Number),
        previous: Schema.optional(Schema.NullOr(Schema.Number)),
        change: Schema.optional(Schema.Unknown),
      }),
    ),
    pageviews: Schema.optional(
      Schema.Struct({
        current: Schema.optional(Schema.Number),
        previous: Schema.optional(Schema.NullOr(Schema.Number)),
        change: Schema.optional(Schema.Unknown),
      }),
    ),
    sessions: Schema.optional(
      Schema.Struct({
        current: Schema.optional(Schema.Number),
        previous: Schema.optional(Schema.NullOr(Schema.Number)),
        change: Schema.optional(Schema.Unknown),
      }),
    ),
    bounce_rate: Schema.optional(
      Schema.Struct({
        current: Schema.optional(Schema.Number),
        previous: Schema.optional(Schema.NullOr(Schema.Number)),
        change: Schema.optional(Schema.Unknown),
      }),
    ),
    avg_session_duration: Schema.optional(
      Schema.Struct({
        current: Schema.optional(Schema.String),
        previous: Schema.optional(Schema.NullOr(Schema.String)),
        change: Schema.optional(Schema.Unknown),
      }),
    ),
    top_pages: Schema.optional(
      Schema.Array(
        Schema.Struct({
          host: Schema.optional(Schema.String),
          path: Schema.optional(Schema.String),
          visitors: Schema.optional(Schema.Number),
          change: Schema.optional(Schema.Unknown),
        }),
      ),
    ),
    top_sources: Schema.optional(
      Schema.Array(
        Schema.Struct({
          name: Schema.optional(Schema.String),
          visitors: Schema.optional(Schema.Number),
          change: Schema.optional(Schema.Unknown),
        }),
      ),
    ),
    goals: Schema.optional(
      Schema.Array(
        Schema.Struct({
          name: Schema.optional(Schema.String),
          conversions: Schema.optional(Schema.Number),
          change: Schema.optional(Schema.Unknown),
        }),
      ),
    ),
    dashboard_url: Schema.optional(Schema.String),
  });
export type WebAnalyticsWeeklyDigestOutput =
  typeof WebAnalyticsWeeklyDigestOutput.Type;

// The operation
/**
 * Summarize web analytics
 *
 * Summarizes a project's web analytics over a lookback window (default 7 days): unique visitors, pageviews, sessions, bounce rate, and average session duration with period-over-period comparisons, plus the top 5 pages, top 5 traffic sources, and goal conversions.
 *
 * @param compare - When true (default), include period-over-period change for each metric comparing against the prior equal-length period. Set to false to skip the comparison query (faster).
 * @param days - Lookback window in days (1–90). Defaults to 7.
 * @param project_id - Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
 */
export const webAnalyticsWeeklyDigest = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: WebAnalyticsWeeklyDigestInput,
    outputSchema: WebAnalyticsWeeklyDigestOutput,
  }),
);
