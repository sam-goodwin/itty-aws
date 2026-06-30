import * as Schema from "effect/Schema";
import { API } from "../../client.ts";
import * as T from "../../traits.ts";

// Input Schema
export const MarketingAnalyticsSuggestConversionGoalsRetrieveInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    project_id: Schema.String.pipe(T.PathParam()),
    min_count: Schema.optional(Schema.Number),
    top_n: Schema.optional(Schema.Number),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/api/projects/{project_id}/marketing_analytics/suggest_conversion_goals/",
    }),
  );
export type MarketingAnalyticsSuggestConversionGoalsRetrieveInput =
  typeof MarketingAnalyticsSuggestConversionGoalsRetrieveInput.Type;

// Output Schema
export const MarketingAnalyticsSuggestConversionGoalsRetrieveOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    candidates: Schema.Array(
      Schema.Struct({
        event_name: Schema.String,
        last_30d_count: Schema.Number,
        distinct_users_30d: Schema.Number,
        pct_with_utm_source: Schema.Number,
        pct_with_utm_campaign: Schema.Number,
        top_utm_sources: Schema.Array(Schema.Array(Schema.Unknown)),
        is_already_a_goal: Schema.Boolean,
        suggestion_score: Schema.Number,
        suggestion_reason: Schema.String,
      }),
    ),
    lookback_days: Schema.Number,
    excluded_events_count: Schema.Number,
  });
export type MarketingAnalyticsSuggestConversionGoalsRetrieveOutput =
  typeof MarketingAnalyticsSuggestConversionGoalsRetrieveOutput.Type;

// The operation
/**
 * Suggest conversion goals
 *
 * Rank existing custom events as conversion-goal candidates by volume, UTM-tag coverage, and unique users, excluding system/autocaptured events. Read-only.
 *
 * @param min_count - Minimum 30d event count to be a candidate
 * @param project_id - Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
 * @param top_n - Max candidates to return
 */
export const marketingAnalyticsSuggestConversionGoalsRetrieve =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: MarketingAnalyticsSuggestConversionGoalsRetrieveInput,
    outputSchema: MarketingAnalyticsSuggestConversionGoalsRetrieveOutput,
  }));
