import * as Schema from "effect/Schema";
import { API } from "../../client.ts";
import * as T from "../../traits.ts";

// Input Schema
export const VisionScannersObservationsListInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    project_id: Schema.String.pipe(T.PathParam()),
    scanner_id: Schema.String.pipe(T.PathParam()),
    limit: Schema.optional(Schema.Number),
    offset: Schema.optional(Schema.Number),
    order_by: Schema.optional(
      Schema.Literals([
        "-completed_at",
        "-created_at",
        "-recording_subject_email",
        "-result_score",
        "-result_verdict",
        "-scanner_version",
        "-started_at",
        "-status",
        "completed_at",
        "created_at",
        "recording_subject_email",
        "result_score",
        "result_verdict",
        "scanner_version",
        "started_at",
        "status",
      ]),
    ),
    recording_subject: Schema.optional(Schema.String),
    session_id: Schema.optional(Schema.String),
    status: Schema.optional(Schema.String),
    tags: Schema.optional(Schema.String),
    triggered_by: Schema.optional(Schema.String),
    verdict: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/api/projects/{project_id}/vision/scanners/{scanner_id}/observations/",
    }),
  );
export type VisionScannersObservationsListInput =
  typeof VisionScannersObservationsListInput.Type;

// Output Schema
export const VisionScannersObservationsListOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    count: Schema.Number,
    next: Schema.optional(Schema.NullOr(Schema.String)),
    previous: Schema.optional(Schema.NullOr(Schema.String)),
    results: Schema.Array(
      Schema.Struct({
        id: Schema.String,
        scanner_id: Schema.String,
        session_id: Schema.String,
        status: Schema.Literals([
          "pending",
          "running",
          "succeeded",
          "failed",
          "ineligible",
        ]),
        error_reason: Schema.String,
        workflow_id: Schema.String,
        scanner_snapshot: Schema.Unknown,
        scanner_result: Schema.Unknown,
        triggered_by: Schema.Literals(["schedule", "on_demand"]),
        triggered_by_user: Schema.Unknown,
        distinct_id: Schema.NullOr(Schema.String),
        recording_subject_email: Schema.NullOr(Schema.String),
        previous_observation_id: Schema.NullOr(Schema.String),
        next_observation_id: Schema.NullOr(Schema.String),
        started_at: Schema.optional(Schema.NullOr(Schema.String)),
        completed_at: Schema.optional(Schema.NullOr(Schema.String)),
        created_at: Schema.String,
      }),
    ),
  });
export type VisionScannersObservationsListOutput =
  typeof VisionScannersObservationsListOutput.Type;

// The operation
/**
 * Read-only access to observations produced by a scanner.
 *
 * @param limit - Number of results to return per page.
 * @param offset - The initial index from which to return the results.
 * @param order_by - Sort observations. Plain keys: created_at, started_at, completed_at, status, recording_subject_email. JSONB keys: result_score (scorer), result_verdict (monitor), scanner_version. Prefix with `-` for descending.
 * @param project_id - Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
 * @param recording_subject - Filter to observations whose recording subject email contains this value (case-insensitive).
 * @param session_id - Filter to observations of one or more session recordings. Accepts a comma-separated list.
 * @param status - Filter by observation status. Accepts a comma-separated list.
 * @param tags - Filter classifier observations whose fixed or freeform tags include any of the given values (comma-separated). Matches if the tag appears in either `tags` or `tags_freeform`.
 * @param triggered_by - Filter by trigger source (schedule or on_demand). Accepts a comma-separated list.
 * @param verdict - Filter monitor observations by verdict. Accepts a comma-separated list (e.g. `yes,inconclusive`).
 */
export const visionScannersObservationsList =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: VisionScannersObservationsListInput,
    outputSchema: VisionScannersObservationsListOutput,
  }));
