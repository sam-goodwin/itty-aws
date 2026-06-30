import * as Schema from "effect/Schema";
import { API } from "../../client.ts";
import * as T from "../../traits.ts";

// Input Schema
export interface MarketingAnalyticsDiagnoseRetrieveInput {
  project_id: string;
  attribution_lookback_days?: number;
  include_conversion_goals?: boolean;
  source_type?: string;
}
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
  ) as unknown as Schema.Codec<MarketingAnalyticsDiagnoseRetrieveInput>;

// Output Schema
export interface MarketingAnalyticsDiagnoseRetrieveOutput {
  integrations: {
    integration_key: string;
    source_type: string;
    display_name: string;
    overall_status: string;
    diagnosis: string;
    data_source?: {
      source_type: string;
      is_native: boolean;
      display_name: string;
      connected: boolean;
      last_sync_at: string | null;
      last_sync_status: string;
      last_error: string | null;
      rows_last_24h: number;
      rows_last_7d: number;
      sources_map_present: boolean;
      schema_columns_mapped: string[];
      schema_columns_required_missing: string[];
      required_tables: {
        table_name: string;
        present: boolean;
        should_sync: boolean;
        status: string | null;
        last_synced_at: string | null;
      }[];
      settings_url: string;
      schemas_url: string | null;
      diagnosis: string;
      fix_suggestion: string | null;
    } | null;
    attribution?: {
      integration_key: string;
      display_name: string;
      events_with_utm_last_7d: number;
      events_matched_last_7d: number;
      events_unmatched_likely_yours_last_7d: number;
      last_event_with_matching_utm_at: string | null;
      matched_pct: number;
      sample_unmatched_utm_sources: {
        raw_value: string;
        event_count: number;
        suggested_integration: string | null;
      }[];
    } | null;
    recommended_actions: {
      title: string;
      detail: string;
      severity: string;
      target_tool: string | null;
    }[];
  }[];
  overall_status: string;
  summary: string;
  conversion_goals?: {
    goals: {
      id: string;
      name: string;
      kind: string;
      target_label: string;
      last_30d_count: number;
      integrated_count: number | null;
      events_without_utm_source: number | null;
      events_with_unmatched_utm_source: number | null;
      non_integrated_count: number | null;
      integrated_pct: number | null;
      is_misconfigured: boolean;
      misconfig_reason: string | null;
      is_approximate: boolean;
      approximation_reason: string | null;
    }[];
    attribution_window_days: number;
    attribution_mode: string;
    has_misconfigured: boolean;
  } | null;
  recommended_actions: {
    title: string;
    detail: string;
    severity: string;
    target_tool: string | null;
  }[];
}
export const MarketingAnalyticsDiagnoseRetrieveOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    integrations: Schema.Array(
      Schema.Struct({
        integration_key: Schema.String,
        source_type: Schema.String,
        display_name: Schema.String,
        overall_status: Schema.String,
        diagnosis: Schema.String,
        data_source: Schema.optional(
          Schema.NullOr(
            Schema.Struct({
              source_type: Schema.String,
              is_native: Schema.Boolean,
              display_name: Schema.String,
              connected: Schema.Boolean,
              last_sync_at: Schema.NullOr(Schema.String),
              last_sync_status: Schema.String,
              last_error: Schema.NullOr(Schema.String),
              rows_last_24h: Schema.Number,
              rows_last_7d: Schema.Number,
              sources_map_present: Schema.Boolean,
              schema_columns_mapped: Schema.Array(Schema.String),
              schema_columns_required_missing: Schema.Array(Schema.String),
              required_tables: Schema.Array(
                Schema.Struct({
                  table_name: Schema.String,
                  present: Schema.Boolean,
                  should_sync: Schema.Boolean,
                  status: Schema.NullOr(Schema.String),
                  last_synced_at: Schema.NullOr(Schema.String),
                }),
              ),
              settings_url: Schema.String,
              schemas_url: Schema.NullOr(Schema.String),
              diagnosis: Schema.String,
              fix_suggestion: Schema.NullOr(Schema.String),
            }),
          ),
        ),
        attribution: Schema.optional(
          Schema.NullOr(
            Schema.Struct({
              integration_key: Schema.String,
              display_name: Schema.String,
              events_with_utm_last_7d: Schema.Number,
              events_matched_last_7d: Schema.Number,
              events_unmatched_likely_yours_last_7d: Schema.Number,
              last_event_with_matching_utm_at: Schema.NullOr(Schema.String),
              matched_pct: Schema.Number,
              sample_unmatched_utm_sources: Schema.Array(
                Schema.Struct({
                  raw_value: Schema.String,
                  event_count: Schema.Number,
                  suggested_integration: Schema.NullOr(Schema.String),
                }),
              ),
            }),
          ),
        ),
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
    conversion_goals: Schema.optional(
      Schema.NullOr(
        Schema.Struct({
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
        }),
      ),
    ),
    recommended_actions: Schema.Array(
      Schema.Struct({
        title: Schema.String,
        detail: Schema.String,
        severity: Schema.String,
        target_tool: Schema.NullOr(Schema.String),
      }),
    ),
  }) as unknown as Schema.Codec<MarketingAnalyticsDiagnoseRetrieveOutput>;

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
