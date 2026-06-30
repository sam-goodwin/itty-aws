import * as Schema from "effect/Schema";
import { API } from "../../client.ts";
import * as T from "../../traits.ts";

// Input Schema
export interface MarketingAnalyticsExplainConversionGoalRetrieveInput {
  project_id: string;
  date_from?: string;
  date_to?: string;
  goal_id: string;
}
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
  ) as unknown as Schema.Codec<MarketingAnalyticsExplainConversionGoalRetrieveInput>;

// Output Schema
export interface MarketingAnalyticsExplainConversionGoalRetrieveOutput {
  goal_id: string;
  goal_name: string;
  kind: string;
  period: { date_from: string | null; date_to: string | null };
  total_count: number;
  integrated_count: number | null;
  events_without_utm_source: number | null;
  events_with_unmatched_utm_source: number | null;
  non_integrated_count: number | null;
  by_event: unknown[][];
  by_utm_source: unknown[][];
  by_matched_integration: unknown[][];
  samples: {
    event_uuid: string;
    timestamp: string;
    distinct_id: string;
    utm_source: string | null;
    utm_campaign: string | null;
    matched_integration: string | null;
  }[];
  notes: string[];
}
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
  }) as unknown as Schema.Codec<MarketingAnalyticsExplainConversionGoalRetrieveOutput>;

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
