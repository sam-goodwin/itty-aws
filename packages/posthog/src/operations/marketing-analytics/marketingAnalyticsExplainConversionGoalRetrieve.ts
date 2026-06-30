import * as Schema from "effect/Schema";
import { API } from "../../client.ts";
import * as T from "../../traits.ts";

// Input Schema
export const MarketingAnalyticsExplainConversionGoalRetrieveInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    project_id: Schema.String.pipe(T.PathParam()),
    date_from: Schema.optional(Schema.String),
    date_to: Schema.optional(Schema.String),
    goal_id: Schema.String,
  }).pipe(
    T.Http({
      method: "GET",
      path: "/api/projects/{project_id}/marketing_analytics/explain_conversion_goal/",
    }),
  );
export type MarketingAnalyticsExplainConversionGoalRetrieveInput =
  typeof MarketingAnalyticsExplainConversionGoalRetrieveInput.Type;

// Output Schema
export const MarketingAnalyticsExplainConversionGoalRetrieveOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    goal_id: Schema.String,
    goal_name: Schema.String,
    kind: Schema.String,
    period: Schema.Struct({
      date_from: Schema.NullOr(Schema.String),
      date_to: Schema.NullOr(Schema.String),
    }),
    total_count: Schema.Number,
    integrated_count: Schema.NullOr(Schema.Number),
    events_without_utm_source: Schema.NullOr(Schema.Number),
    events_with_unmatched_utm_source: Schema.NullOr(Schema.Number),
    non_integrated_count: Schema.NullOr(Schema.Number),
    by_event: Schema.Array(Schema.Array(Schema.Unknown)),
    by_utm_source: Schema.Array(Schema.Array(Schema.Unknown)),
    by_matched_integration: Schema.Array(Schema.Array(Schema.Unknown)),
    samples: Schema.Array(
      Schema.Struct({
        event_uuid: Schema.String,
        timestamp: Schema.String,
        distinct_id: Schema.String,
        utm_source: Schema.NullOr(Schema.String),
        utm_campaign: Schema.NullOr(Schema.String),
        matched_integration: Schema.NullOr(Schema.String),
      }),
    ),
    notes: Schema.Array(Schema.String),
  });
export type MarketingAnalyticsExplainConversionGoalRetrieveOutput =
  typeof MarketingAnalyticsExplainConversionGoalRetrieveOutput.Type;

// The operation
/**
 * Explain a conversion goal
 *
 * Break down a single conversion goal's events over a period by event name, utm_source, and matched integration, with a small sample of events. Read-only.
 *
 * @param date_from - ISO start; defaults to 30 days ago
 * @param date_to - ISO end; defaults to now
 * @param goal_id - Id of the conversion goal to explain (from list_conversion_goals).
 * @param project_id - Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
 */
export const marketingAnalyticsExplainConversionGoalRetrieve =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: MarketingAnalyticsExplainConversionGoalRetrieveInput,
    outputSchema: MarketingAnalyticsExplainConversionGoalRetrieveOutput,
  }));
