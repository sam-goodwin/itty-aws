import * as Schema from "effect/Schema";
import { API } from "../../client.ts";
import * as T from "../../traits.ts";

// Input Schema
export const MarketingAnalyticsConversionGoalsRetrieveInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    project_id: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/api/projects/{project_id}/marketing_analytics/conversion_goals/",
    }),
  );
export type MarketingAnalyticsConversionGoalsRetrieveInput =
  typeof MarketingAnalyticsConversionGoalsRetrieveInput.Type;

// Output Schema
export const MarketingAnalyticsConversionGoalsRetrieveOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    goals: Schema.Array(
      Schema.Struct({
        id: Schema.String,
        name: Schema.String,
        kind: Schema.String,
        target_label: Schema.String,
        last_30d_count: Schema.Number,
        integrated_count: Schema.NullOr(Schema.Number),
        events_without_utm_source: Schema.NullOr(Schema.Number),
        events_with_unmatched_utm_source: Schema.NullOr(Schema.Number),
        non_integrated_count: Schema.NullOr(Schema.Number),
        integrated_pct: Schema.NullOr(Schema.Number),
        is_misconfigured: Schema.Boolean,
        misconfig_reason: Schema.NullOr(Schema.String),
        is_approximate: Schema.Boolean,
        approximation_reason: Schema.NullOr(Schema.String),
      }),
    ),
    attribution_window_days: Schema.Number,
    attribution_mode: Schema.String,
    has_misconfigured: Schema.Boolean,
  });
export type MarketingAnalyticsConversionGoalsRetrieveOutput =
  typeof MarketingAnalyticsConversionGoalsRetrieveOutput.Type;

// The operation
/**
 * List conversion goals
 *
 * Read the configured conversion goals for the current project — each with its kind, target, last-30d count, integrated vs non-integrated split, and a misconfiguration flag. Read-only.
 *
 * @param project_id - Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
 */
export const marketingAnalyticsConversionGoalsRetrieve =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: MarketingAnalyticsConversionGoalsRetrieveInput,
    outputSchema: MarketingAnalyticsConversionGoalsRetrieveOutput,
  }));
