import * as Schema from "effect/Schema";
import { API } from "../../client.ts";
import * as T from "../../traits.ts";
import { BadRequest, Forbidden, NotFound } from "../../errors.ts";

// Input Schema
export const SdkDoctorReportRetrieveInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    project_id: Schema.String.pipe(T.PathParam()),
    force_refresh: Schema.optional(Schema.Boolean),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/api/projects/{project_id}/sdk_doctor/report/",
    }),
  );
export type SdkDoctorReportRetrieveInput =
  typeof SdkDoctorReportRetrieveInput.Type;

// Output Schema
export const SdkDoctorReportRetrieveOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    overall_health: Schema.Literals(["healthy", "needs_attention"]),
    health: Schema.Literals(["success", "warning", "danger"]),
    needs_updating_count: Schema.Number,
    team_sdk_count: Schema.Number,
    sdks: Schema.Array(
      Schema.Struct({
        lib: Schema.String,
        readable_name: Schema.String,
        latest_version: Schema.String,
        needs_updating: Schema.Boolean,
        is_outdated: Schema.Boolean,
        is_old: Schema.Boolean,
        severity: Schema.Literals(["none", "warning", "danger"]),
        reason: Schema.String,
        banners: Schema.Array(Schema.String),
        releases: Schema.Array(
          Schema.Struct({
            version: Schema.String,
            count: Schema.Number,
            max_timestamp: Schema.String,
            release_date: Schema.NullOr(Schema.String),
            days_since_release: Schema.NullOr(Schema.Number),
            released_ago: Schema.NullOr(Schema.String),
            is_outdated: Schema.Boolean,
            is_old: Schema.Boolean,
            needs_updating: Schema.Boolean,
            is_current_or_newer: Schema.Boolean,
            status_reason: Schema.String,
            sql_query: Schema.String,
            activity_page_url: Schema.String,
          }),
        ),
        outdated_traffic_alerts: Schema.Array(
          Schema.Struct({
            version: Schema.String,
            threshold_percent: Schema.Number,
          }),
        ),
      }),
    ),
  });
export type SdkDoctorReportRetrieveOutput =
  typeof SdkDoctorReportRetrieveOutput.Type;

// The operation
/**
 * Get SDK health report for a project
 *
 * Returns a pre-digested health assessment of the PostHog SDKs the project is using. Covers which SDKs are current vs outdated (smart-semver rules with grace periods and traffic-percentage thresholds), per-version breakdown, and a human-readable reason for each assessment. Use this to diagnose SDK version issues, surface upgrade recommendations, or check overall SDK health.
 *
 * @param force_refresh - When true, bypasses the Redis cache and re-queries ClickHouse for SDK usage. Use sparingly — data is refreshed every 12 hours by a background job.
 * @param project_id - Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
 */
export const sdkDoctorReportRetrieve = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: SdkDoctorReportRetrieveInput,
    outputSchema: SdkDoctorReportRetrieveOutput,
    errors: [BadRequest, Forbidden, NotFound] as const,
  }),
);
