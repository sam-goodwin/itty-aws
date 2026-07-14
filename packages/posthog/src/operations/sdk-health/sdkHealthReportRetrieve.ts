import * as Schema from "effect/Schema";
import { API } from "../../client.ts";
import * as T from "../../traits.ts";

// Input Schema
export interface SdkHealthReportRetrieveInput {
  project_id: string;
  force_refresh?: boolean;
}
export const SdkHealthReportRetrieveInput =
  /*@__PURE__*/ Schema.Struct({
    project_id: Schema.String.pipe(T.PathParam()),
    force_refresh: Schema.optional(Schema.Boolean),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/api/projects/{project_id}/sdk_health/report/",
    }),
  ) as unknown as Schema.Codec<SdkHealthReportRetrieveInput>;

// Output Schema
export interface SdkHealthReportRetrieveOutput {
  overall_health?: "healthy" | "needs_attention";
  health?: "success" | "warning" | "danger";
  needs_updating_count?: number;
  team_sdk_count?: number;
  sdks?: {
    lib?: string;
    readable_name?: string;
    latest_version?: string;
    needs_updating?: boolean;
    is_outdated?: boolean;
    is_old?: boolean;
    severity?: "none" | "warning" | "danger";
    reason?: string;
    banners?: string[];
    releases?: {
      version?: string;
      count?: number;
      max_timestamp?: string;
      release_date?: string | null;
      days_since_release?: number | null;
      released_ago?: string | null;
      is_outdated?: boolean;
      is_old?: boolean;
      needs_updating?: boolean;
      is_current_or_newer?: boolean;
      status_reason?: string;
      sql_query?: string;
      activity_page_url?: string;
    }[];
    outdated_traffic_alerts?: {
      version?: string;
      threshold_percent?: number;
    }[];
  }[];
}
export const SdkHealthReportRetrieveOutput =
  /*@__PURE__*/ Schema.Struct({
    overall_health: Schema.optional(
      Schema.Literals(["healthy", "needs_attention"]),
    ),
    health: Schema.optional(Schema.Literals(["success", "warning", "danger"])),
    needs_updating_count: Schema.optional(Schema.Number),
    team_sdk_count: Schema.optional(Schema.Number),
    sdks: Schema.optional(
      Schema.Array(
        Schema.Struct({
          lib: Schema.optional(Schema.String),
          readable_name: Schema.optional(Schema.String),
          latest_version: Schema.optional(Schema.String),
          needs_updating: Schema.optional(Schema.Boolean),
          is_outdated: Schema.optional(Schema.Boolean),
          is_old: Schema.optional(Schema.Boolean),
          severity: Schema.optional(
            Schema.Literals(["none", "warning", "danger"]),
          ),
          reason: Schema.optional(Schema.String),
          banners: Schema.optional(Schema.Array(Schema.String)),
          releases: Schema.optional(
            Schema.Array(
              Schema.Struct({
                version: Schema.optional(Schema.String),
                count: Schema.optional(Schema.Number),
                max_timestamp: Schema.optional(Schema.String),
                release_date: Schema.optional(Schema.NullOr(Schema.String)),
                days_since_release: Schema.optional(
                  Schema.NullOr(Schema.Number),
                ),
                released_ago: Schema.optional(Schema.NullOr(Schema.String)),
                is_outdated: Schema.optional(Schema.Boolean),
                is_old: Schema.optional(Schema.Boolean),
                needs_updating: Schema.optional(Schema.Boolean),
                is_current_or_newer: Schema.optional(Schema.Boolean),
                status_reason: Schema.optional(Schema.String),
                sql_query: Schema.optional(Schema.String),
                activity_page_url: Schema.optional(Schema.String),
              }),
            ),
          ),
          outdated_traffic_alerts: Schema.optional(
            Schema.Array(
              Schema.Struct({
                version: Schema.optional(Schema.String),
                threshold_percent: Schema.optional(Schema.Number),
              }),
            ),
          ),
        }),
      ),
    ),
  }) as unknown as Schema.Codec<SdkHealthReportRetrieveOutput>;

// The operation
/**
 * Get SDK health report for a project
 *
 * Returns a pre-digested health assessment of the PostHog SDKs the project is using. Covers which SDKs are current vs outdated (smart-semver rules with grace periods and traffic-percentage thresholds), per-version breakdown, and a human-readable reason for each assessment. Use this to diagnose SDK version issues, surface upgrade recommendations, or check overall SDK health.
 *
 * @param force_refresh - When true, bypasses the Redis cache and re-queries ClickHouse for SDK usage. Use sparingly — data is refreshed every 12 hours by a background job.
 * @param project_id - Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
 */
export const sdkHealthReportRetrieve = /*@__PURE__*/ API.make(() => ({
  inputSchema: SdkHealthReportRetrieveInput,
  outputSchema: SdkHealthReportRetrieveOutput,
}));
