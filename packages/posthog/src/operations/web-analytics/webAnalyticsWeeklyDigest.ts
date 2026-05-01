import * as Schema from "effect/Schema";
import { API } from "../../client.ts";
import * as T from "../../traits.ts";
import { BadRequest, Forbidden, NotFound } from "../../errors.ts";

// Input Schema
export const WebAnalyticsWeeklyDigestInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    project_id: Schema.String.pipe(T.PathParam()),
    compare: Schema.optional(Schema.Boolean),
    days: Schema.optional(Schema.Number),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/api/environments/{project_id}/web_analytics/weekly_digest/",
    }),
  );
export type WebAnalyticsWeeklyDigestInput =
  typeof WebAnalyticsWeeklyDigestInput.Type;

// Output Schema
export const WebAnalyticsWeeklyDigestOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    visitors: Schema.Struct({
      current: Schema.Number,
      previous: Schema.NullOr(Schema.Number),
      change: Schema.NullOr(
        Schema.Struct({
          percent: Schema.Number,
          direction: Schema.Literals(["Up", "Down"]),
          color: Schema.String,
          text: Schema.String,
          long_text: Schema.String,
        }),
      ),
    }),
    pageviews: Schema.Struct({
      current: Schema.Number,
      previous: Schema.NullOr(Schema.Number),
      change: Schema.NullOr(
        Schema.Struct({
          percent: Schema.Number,
          direction: Schema.Literals(["Up", "Down"]),
          color: Schema.String,
          text: Schema.String,
          long_text: Schema.String,
        }),
      ),
    }),
    sessions: Schema.Struct({
      current: Schema.Number,
      previous: Schema.NullOr(Schema.Number),
      change: Schema.NullOr(
        Schema.Struct({
          percent: Schema.Number,
          direction: Schema.Literals(["Up", "Down"]),
          color: Schema.String,
          text: Schema.String,
          long_text: Schema.String,
        }),
      ),
    }),
    bounce_rate: Schema.Struct({
      current: Schema.Number,
      previous: Schema.NullOr(Schema.Number),
      change: Schema.NullOr(
        Schema.Struct({
          percent: Schema.Number,
          direction: Schema.Literals(["Up", "Down"]),
          color: Schema.String,
          text: Schema.String,
          long_text: Schema.String,
        }),
      ),
    }),
    avg_session_duration: Schema.Struct({
      current: Schema.String,
      previous: Schema.NullOr(Schema.String),
      change: Schema.NullOr(
        Schema.Struct({
          percent: Schema.Number,
          direction: Schema.Literals(["Up", "Down"]),
          color: Schema.String,
          text: Schema.String,
          long_text: Schema.String,
        }),
      ),
    }),
    top_pages: Schema.Array(
      Schema.Struct({
        host: Schema.String,
        path: Schema.String,
        visitors: Schema.Number,
        change: Schema.NullOr(
          Schema.Struct({
            percent: Schema.Number,
            direction: Schema.Literals(["Up", "Down"]),
            color: Schema.String,
            text: Schema.String,
            long_text: Schema.String,
          }),
        ),
      }),
    ),
    top_sources: Schema.Array(
      Schema.Struct({
        name: Schema.String,
        visitors: Schema.Number,
        change: Schema.NullOr(
          Schema.Struct({
            percent: Schema.Number,
            direction: Schema.Literals(["Up", "Down"]),
            color: Schema.String,
            text: Schema.String,
            long_text: Schema.String,
          }),
        ),
      }),
    ),
    goals: Schema.Array(
      Schema.Struct({
        name: Schema.String,
        conversions: Schema.Number,
        change: Schema.NullOr(
          Schema.Struct({
            percent: Schema.Number,
            direction: Schema.Literals(["Up", "Down"]),
            color: Schema.String,
            text: Schema.String,
            long_text: Schema.String,
          }),
        ),
      }),
    ),
    dashboard_url: Schema.String,
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
    errors: [BadRequest, Forbidden, NotFound] as const,
  }),
);
