import * as Schema from "effect/Schema";
import { API } from "../../client";
import * as T from "../../traits";
import { Forbidden, NotFound } from "../../errors";

// Input Schema
export const ErrorTrackingFingerprintsRetrieveInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.String.pipe(T.PathParam()),
    project_id: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/api/environments/{project_id}/error_tracking/fingerprints/{id}/",
    }),
  );
export type ErrorTrackingFingerprintsRetrieveInput =
  typeof ErrorTrackingFingerprintsRetrieveInput.Type;

// Output Schema
export const ErrorTrackingFingerprintsRetrieveOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.String,
    fingerprint: Schema.String,
    issue_id: Schema.String,
    created_at: Schema.String,
  });
export type ErrorTrackingFingerprintsRetrieveOutput =
  typeof ErrorTrackingFingerprintsRetrieveOutput.Type;

// The operation
/**
 *
 * @param id - Fingerprint ID.
 * @param project_id - Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
 */
export const errorTrackingFingerprintsRetrieve =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: ErrorTrackingFingerprintsRetrieveInput,
    outputSchema: ErrorTrackingFingerprintsRetrieveOutput,
    errors: [Forbidden, NotFound] as const,
  }));
