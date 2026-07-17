import * as Schema from "effect/Schema";
import { API } from "../../client.ts";
import * as T from "../../traits.ts";

// Input Schema
export interface MarketingAnalyticsUtmAuditRetrieveInput {
  project_id: string;
  date_from?: string;
  date_to?: string;
}
export const MarketingAnalyticsUtmAuditRetrieveInput =
  /*@__PURE__*/ Schema.Struct({
    project_id: Schema.String.pipe(T.PathParam()),
    date_from: Schema.optional(Schema.String),
    date_to: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/api/projects/{project_id}/marketing_analytics/utm_audit/",
    }),
  ) as unknown as Schema.Codec<MarketingAnalyticsUtmAuditRetrieveInput>;

// Output Schema
export interface MarketingAnalyticsUtmAuditRetrieveOutput {
  total_campaigns: number;
  campaigns_with_issues: number;
  campaigns_without_issues: number;
  total_spend_at_risk: number;
  results: {
    campaign_name: string;
    campaign_id: string;
    source_name: string;
    spend: number;
    clicks: number;
    impressions: number;
    has_utm_events: boolean;
    event_count: number;
    issues: { field: string; severity: "error" | "warning"; message: string }[];
  }[];
  all_utm_events: {
    utm_campaign: string;
    utm_source: string;
    event_count: number;
    campaign_match: "none" | "auto" | "mapped";
    source_match: "none" | "auto" | "mapped";
    matched_campaign: string | null;
  }[];
}
export const MarketingAnalyticsUtmAuditRetrieveOutput =
  /*@__PURE__*/ Schema.Struct({
    total_campaigns: Schema.Number,
    campaigns_with_issues: Schema.Number,
    campaigns_without_issues: Schema.Number,
    total_spend_at_risk: Schema.Number,
    results: Schema.Array(
      Schema.Struct({
        campaign_name: Schema.String,
        campaign_id: Schema.String,
        source_name: Schema.String,
        spend: Schema.Number,
        clicks: Schema.Number,
        impressions: Schema.Number,
        has_utm_events: Schema.Boolean,
        event_count: Schema.Number,
        issues: Schema.Array(
          Schema.Struct({
            field: Schema.String,
            severity: Schema.Literals(["error", "warning"]),
            message: Schema.String,
          }),
        ),
      }),
    ),
    all_utm_events: Schema.Array(
      Schema.Struct({
        utm_campaign: Schema.String,
        utm_source: Schema.String,
        event_count: Schema.Number,
        campaign_match: Schema.Literals(["none", "auto", "mapped"]),
        source_match: Schema.Literals(["none", "auto", "mapped"]),
        matched_campaign: Schema.NullOr(Schema.String),
      }),
    ),
  }) as unknown as Schema.Codec<MarketingAnalyticsUtmAuditRetrieveOutput>;

// The operation
/**
 * Run UTM audit
 *
 * Cross-reference campaigns with spend from ad platforms against pageview events with UTM parameters to identify tracking issues.
 *
 * @param date_from - Start date for the audit period
 * @param date_to - End date for the audit period
 * @param project_id - Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
 */
export const marketingAnalyticsUtmAuditRetrieve =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: MarketingAnalyticsUtmAuditRetrieveInput,
    outputSchema: MarketingAnalyticsUtmAuditRetrieveOutput,
  }));
