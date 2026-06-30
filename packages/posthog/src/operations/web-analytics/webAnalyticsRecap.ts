import * as Schema from "effect/Schema";
import { API } from "../../client.ts";
import * as T from "../../traits.ts";

// Input Schema
export const WebAnalyticsRecapInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
  {
    project_id: Schema.String.pipe(T.PathParam()),
    compare: Schema.optional(Schema.Boolean),
    days: Schema.optional(Schema.Number),
  },
).pipe(
  T.Http({
    method: "GET",
    path: "/api/projects/{project_id}/web_analytics/recap/",
  }),
);
export type WebAnalyticsRecapInput = typeof WebAnalyticsRecapInput.Type;

// Output Schema
export const WebAnalyticsRecapOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    visitors: Schema.Struct({
      current: Schema.optional(Schema.Number),
      previous: Schema.optional(Schema.NullOr(Schema.Number)),
      change: Schema.optional(Schema.Unknown),
    }),
    pageviews: Schema.Struct({
      current: Schema.optional(Schema.Number),
      previous: Schema.optional(Schema.NullOr(Schema.Number)),
      change: Schema.optional(Schema.Unknown),
    }),
    sessions: Schema.Struct({
      current: Schema.optional(Schema.Number),
      previous: Schema.optional(Schema.NullOr(Schema.Number)),
      change: Schema.optional(Schema.Unknown),
    }),
    bounce_rate: Schema.Struct({
      current: Schema.optional(Schema.Number),
      previous: Schema.optional(Schema.NullOr(Schema.Number)),
      change: Schema.optional(Schema.Unknown),
    }),
    avg_session_duration: Schema.Struct({
      current: Schema.optional(Schema.String),
      previous: Schema.optional(Schema.NullOr(Schema.String)),
      change: Schema.optional(Schema.Unknown),
    }),
    top_pages: Schema.Array(
      Schema.Struct({
        host: Schema.optional(Schema.String),
        path: Schema.optional(Schema.String),
        visitors: Schema.optional(Schema.Number),
        change: Schema.optional(Schema.Unknown),
      }),
    ),
    top_sources: Schema.Array(
      Schema.Struct({
        name: Schema.optional(Schema.String),
        visitors: Schema.optional(Schema.Number),
        change: Schema.optional(Schema.Unknown),
      }),
    ),
    goals: Schema.Array(
      Schema.Struct({
        name: Schema.optional(Schema.String),
        conversions: Schema.optional(Schema.Number),
        change: Schema.optional(Schema.Unknown),
      }),
    ),
    dashboard_url: Schema.String,
    persona: Schema.Struct({
      id: Schema.String,
      name: Schema.String,
      emoji: Schema.String,
      blurb: Schema.String,
      color: Schema.String,
    }),
    highlights: Schema.Array(
      Schema.Struct({
        id: Schema.String,
        emoji: Schema.String,
        title: Schema.String,
        value: Schema.String,
        detail: Schema.String,
      }),
    ),
    period_label: Schema.String,
    period_start: Schema.String,
    period_end: Schema.String,
    project_name: Schema.String,
    recap_url: Schema.String,
  });
export type WebAnalyticsRecapOutput = typeof WebAnalyticsRecapOutput.Type;

// The operation
/**
 * Weekly web analytics recap
 *
 * The 'Wrapped'-style weekly recap: everything in the weekly digest (visitors, pageviews, sessions, bounce rate, average session duration with period-over-period comparisons, top pages, top sources, and goals) plus a single derived weekly persona and a short list of screenshot-worthy highlights for the period.
 *
 * @param compare - When true (default), include period-over-period change for each metric comparing against the prior equal-length period. Set to false to skip the comparison query.
 * @param days - Lookback window in days (1–90). Defaults to 7.
 * @param project_id - Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
 */
export const webAnalyticsRecap = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: WebAnalyticsRecapInput,
  outputSchema: WebAnalyticsRecapOutput,
}));
