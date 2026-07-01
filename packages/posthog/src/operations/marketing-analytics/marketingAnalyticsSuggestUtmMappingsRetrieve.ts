import * as Schema from "effect/Schema";
import { API } from "../../client.ts";
import * as T from "../../traits.ts";

// Input Schema
export interface MarketingAnalyticsSuggestUtmMappingsRetrieveInput {
  project_id: string;
  lookback_days?: number;
  min_event_count?: number;
}
export const MarketingAnalyticsSuggestUtmMappingsRetrieveInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    project_id: Schema.String.pipe(T.PathParam()),
    lookback_days: Schema.optional(Schema.Number),
    min_event_count: Schema.optional(Schema.Number),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/api/projects/{project_id}/marketing_analytics/suggest_utm_mappings/",
    }),
  ) as unknown as Schema.Codec<MarketingAnalyticsSuggestUtmMappingsRetrieveInput>;

// Output Schema
export interface MarketingAnalyticsSuggestUtmMappingsRetrieveOutput {
  source_suggestions: {
    raw_utm_source: string;
    suggested_target: string;
    suggested_target_display_name: string;
    reason: string;
  }[];
  campaign_suggestions: {
    integration: string;
    integration_display_name: string;
    suggested_clean_name: string;
    raw_campaign_values: string[];
    confidence: number;
    method: string;
    reason: string;
  }[];
  raw_unmatched_samples: {
    raw_utm_source: string;
    event_count: number;
    suggested_integration: string | null;
  }[];
  full_utm_source_catalogue: {
    raw_utm_source: string;
    event_count: number;
    matched_integration: string | null;
    matched_integration_display_name: string | null;
    suggested_integration: string | null;
  }[];
  current_mappings: {
    raw_utm_source: string;
    target: string;
    target_display_name: string;
    source: string;
  }[];
  total_unmatched_events_in_window: number;
  total_events_with_utm_in_window: number;
  lookback_days_used: number;
  notes: string[];
}
export const MarketingAnalyticsSuggestUtmMappingsRetrieveOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    source_suggestions: Schema.Array(
      Schema.Struct({
        raw_utm_source: Schema.String,
        suggested_target: Schema.String,
        suggested_target_display_name: Schema.String,
        reason: Schema.String,
      }),
    ),
    campaign_suggestions: Schema.Array(
      Schema.Struct({
        integration: Schema.String,
        integration_display_name: Schema.String,
        suggested_clean_name: Schema.String,
        raw_campaign_values: Schema.Array(Schema.String),
        confidence: Schema.Number,
        method: Schema.String,
        reason: Schema.String,
      }),
    ),
    raw_unmatched_samples: Schema.Array(
      Schema.Struct({
        raw_utm_source: Schema.String,
        event_count: Schema.Number,
        suggested_integration: Schema.NullOr(Schema.String),
      }),
    ),
    full_utm_source_catalogue: Schema.Array(
      Schema.Struct({
        raw_utm_source: Schema.String,
        event_count: Schema.Number,
        matched_integration: Schema.NullOr(Schema.String),
        matched_integration_display_name: Schema.NullOr(Schema.String),
        suggested_integration: Schema.NullOr(Schema.String),
      }),
    ),
    current_mappings: Schema.Array(
      Schema.Struct({
        raw_utm_source: Schema.String,
        target: Schema.String,
        target_display_name: Schema.String,
        source: Schema.String,
      }),
    ),
    total_unmatched_events_in_window: Schema.Number,
    total_events_with_utm_in_window: Schema.Number,
    lookback_days_used: Schema.Number,
    notes: Schema.Array(Schema.String),
  }) as unknown as Schema.Codec<MarketingAnalyticsSuggestUtmMappingsRetrieveOutput>;

// The operation
/**
 * Suggest UTM source mappings
 *
 * Detect unmatched utm_source values from recent events and propose custom_source_mappings entries, alongside the full utm_source catalogue and current mappings. Read-only.
 *
 * @param lookback_days - Days of history to inspect (1-365); defaults to 90
 * @param min_event_count - Only suggest for raw values with >= this many events
 * @param project_id - Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
 */
export const marketingAnalyticsSuggestUtmMappingsRetrieve =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: MarketingAnalyticsSuggestUtmMappingsRetrieveInput,
    outputSchema: MarketingAnalyticsSuggestUtmMappingsRetrieveOutput,
  }));
