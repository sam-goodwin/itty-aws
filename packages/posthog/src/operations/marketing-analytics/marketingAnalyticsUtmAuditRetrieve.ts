import * as Schema from "effect/Schema";
import { API } from "../../client.ts";
import * as T from "../../traits.ts";

// Input Schema
export const MarketingAnalyticsUtmAuditRetrieveInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    project_id: Schema.String.pipe(T.PathParam()),
    date_from: Schema.optional(Schema.String),
    date_to: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/api/projects/{project_id}/marketing_analytics/utm_audit/",
    }),
  );
export type MarketingAnalyticsUtmAuditRetrieveInput =
  typeof MarketingAnalyticsUtmAuditRetrieveInput.Type;

// Output Schema
export const MarketingAnalyticsUtmAuditRetrieveOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
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
  });
export type MarketingAnalyticsUtmAuditRetrieveOutput =
  typeof MarketingAnalyticsUtmAuditRetrieveOutput.Type;

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
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: MarketingAnalyticsUtmAuditRetrieveInput,
    outputSchema: MarketingAnalyticsUtmAuditRetrieveOutput,
  }));
