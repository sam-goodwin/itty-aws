import * as Schema from "effect/Schema";
import { API } from "../../client.ts";
import * as T from "../../traits.ts";

// Input Schema
export const MarketingAnalyticsDiagnoseRetrieveInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    project_id: Schema.String.pipe(T.PathParam()),
    attribution_lookback_days: Schema.optional(Schema.Number),
    include_conversion_goals: Schema.optional(Schema.Boolean),
    source_type: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/api/projects/{project_id}/marketing_analytics/diagnose/",
    }),
  );
export type MarketingAnalyticsDiagnoseRetrieveInput =
  typeof MarketingAnalyticsDiagnoseRetrieveInput.Type;

// Output Schema
export const MarketingAnalyticsDiagnoseRetrieveOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    integrations: Schema.Array(
      Schema.Struct({
        integration_key: Schema.String,
        source_type: Schema.String,
        display_name: Schema.String,
        overall_status: Schema.String,
        diagnosis: Schema.String,
        data_source: Schema.optional(Schema.Unknown),
        attribution: Schema.optional(Schema.Unknown),
        recommended_actions: Schema.Array(
          Schema.Struct({
            title: Schema.String,
            detail: Schema.String,
            severity: Schema.String,
            target_tool: Schema.NullOr(Schema.String),
          }),
        ),
      }),
    ),
    overall_status: Schema.String,
    summary: Schema.String,
    conversion_goals: Schema.optional(Schema.Unknown),
    recommended_actions: Schema.Array(
      Schema.Struct({
        title: Schema.String,
        detail: Schema.String,
        severity: Schema.String,
        target_tool: Schema.NullOr(Schema.String),
      }),
    ),
  });
export type MarketingAnalyticsDiagnoseRetrieveOutput =
  typeof MarketingAnalyticsDiagnoseRetrieveOutput.Type;

// The operation
/**
 * Diagnose marketing analytics
 *
 * Aggregate data-source sync health, UTM attribution health, and conversion-goal config into a single per-integration diagnostic with recommended actions. Read-only.
 *
 * @param attribution_lookback_days - Lookback window for attribution health (1-365 days); defaults to 7
 * @param include_conversion_goals - Whether to include the conversion-goal summary in the diagnostic
 * @param project_id - Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
 * @param source_type - Optional integration filter
 */
export const marketingAnalyticsDiagnoseRetrieve =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: MarketingAnalyticsDiagnoseRetrieveInput,
    outputSchema: MarketingAnalyticsDiagnoseRetrieveOutput,
  }));
