import * as Schema from "effect/Schema";
import { SdkAssessmentSchema } from "./_schemas.ts";
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
    overall_health: Schema.optional(
      Schema.Literals(["healthy", "needs_attention"]),
    ),
    health: Schema.optional(Schema.Literals(["success", "warning", "danger"])),
    needs_updating_count: Schema.optional(Schema.Number),
    team_sdk_count: Schema.optional(Schema.Number),
    sdks: Schema.optional(
      Schema.Array(Schema.suspend(() => SdkAssessmentSchema)),
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
