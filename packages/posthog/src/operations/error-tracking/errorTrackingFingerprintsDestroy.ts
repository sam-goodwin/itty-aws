import * as Schema from "effect/Schema";
import { API } from "../../client";
import * as T from "../../traits";
import { Forbidden, NotFound } from "../../errors";

// Input Schema
export const ErrorTrackingFingerprintsDestroyInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.String.pipe(T.PathParam()),
    project_id: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/api/environments/{project_id}/error_tracking/fingerprints/{id}/",
    }),
  );
export type ErrorTrackingFingerprintsDestroyInput =
  typeof ErrorTrackingFingerprintsDestroyInput.Type;

// Output Schema
export const ErrorTrackingFingerprintsDestroyOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type ErrorTrackingFingerprintsDestroyOutput =
  typeof ErrorTrackingFingerprintsDestroyOutput.Type;

// The operation
/**
 * Hard delete of this model is not allowed. Use a patch API call to set "deleted" to true
 *
 * @param project_id - Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
 */
export const errorTrackingFingerprintsDestroy =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: ErrorTrackingFingerprintsDestroyInput,
    outputSchema: ErrorTrackingFingerprintsDestroyOutput,
    errors: [Forbidden, NotFound] as const,
  }));
