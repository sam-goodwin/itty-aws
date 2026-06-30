import * as Schema from "effect/Schema";
import { API } from "../../client.ts";
import * as T from "../../traits.ts";

// Input Schema
export const VisionScannersObservationsRetrieveInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.String.pipe(T.PathParam()),
    project_id: Schema.String.pipe(T.PathParam()),
    scanner_id: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/api/projects/{project_id}/vision/scanners/{scanner_id}/observations/{id}/",
    }),
  );
export type VisionScannersObservationsRetrieveInput =
  typeof VisionScannersObservationsRetrieveInput.Type;

// Output Schema
export const VisionScannersObservationsRetrieveOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
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
  });
export type VisionScannersObservationsRetrieveOutput =
  typeof VisionScannersObservationsRetrieveOutput.Type;

// The operation
/**
 * Read-only access to observations produced by a scanner.
 *
 * @param id - A UUID string identifying this replay observation.
 * @param project_id - Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
 */
export const visionScannersObservationsRetrieve =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: VisionScannersObservationsRetrieveInput,
    outputSchema: VisionScannersObservationsRetrieveOutput,
  }));
