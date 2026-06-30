import * as Schema from "effect/Schema";
import { API } from "../../client.ts";
import * as T from "../../traits.ts";

// Input Schema
export const VisionScannersObservationsStatsRetrieveInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    project_id: Schema.String.pipe(T.PathParam()),
    scanner_id: Schema.String.pipe(T.PathParam()),
    recent_days: Schema.optional(Schema.Number),
    recording_subject: Schema.optional(Schema.String),
    session_id: Schema.optional(Schema.String),
    status: Schema.optional(Schema.String),
    tags: Schema.optional(Schema.String),
    triggered_by: Schema.optional(Schema.String),
    verdict: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/api/projects/{project_id}/vision/scanners/{scanner_id}/observations/stats/",
    }),
  );
export type VisionScannersObservationsStatsRetrieveInput =
  typeof VisionScannersObservationsStatsRetrieveInput.Type;

// Output Schema
export const VisionScannersObservationsStatsRetrieveOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    status_counts: Schema.Struct({
      total: Schema.Number,
      succeeded: Schema.Number,
      failed: Schema.Number,
      ineligible: Schema.Number,
      in_flight: Schema.Number,
      success_rate: Schema.NullOr(Schema.Number),
    }),
    coverage: Schema.Struct({
      recent_sessions: Schema.Number,
      total_sessions: Schema.Number,
      recent_days: Schema.Number,
    }),
    available_tags: Schema.Array(Schema.String),
    monitor: Schema.Unknown,
    classifier: Schema.Unknown,
    scorer: Schema.Unknown,
  });
export type VisionScannersObservationsStatsRetrieveOutput =
  typeof VisionScannersObservationsStatsRetrieveOutput.Type;

// The operation
/**
 * Aggregate counts and per-scanner-type distributions over the filtered observation set. Same filters as the list endpoint apply.
 *
 * @param project_id - Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
 * @param recent_days - Window size in days for the coverage `recent_sessions` count. Clamped to [1, 365]. Defaults to 14 when omitted.
 * @param recording_subject - Filter to observations whose recording subject email contains this value (case-insensitive).
 * @param session_id - Filter to observations of one or more session recordings. Accepts a comma-separated list.
 * @param status - Filter by observation status. Accepts a comma-separated list.
 * @param tags - Filter classifier observations whose fixed or freeform tags include any of the given values (comma-separated). Matches if the tag appears in either `tags` or `tags_freeform`.
 * @param triggered_by - Filter by trigger source (schedule or on_demand). Accepts a comma-separated list.
 * @param verdict - Filter monitor observations by verdict. Accepts a comma-separated list (e.g. `yes,inconclusive`).
 */
export const visionScannersObservationsStatsRetrieve =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: VisionScannersObservationsStatsRetrieveInput,
    outputSchema: VisionScannersObservationsStatsRetrieveOutput,
  }));
