import * as Schema from "effect/Schema";
import { API } from "../../client.ts";
import * as T from "../../traits.ts";

// Input Schema
export interface ErrorTrackingFingerprintsDestroyInput {
  id: string;
  project_id: string;
}
export const ErrorTrackingFingerprintsDestroyInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.String.pipe(T.PathParam()),
    project_id: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/api/projects/{project_id}/error_tracking/fingerprints/{id}/",
    }),
  ) as unknown as Schema.Codec<ErrorTrackingFingerprintsDestroyInput>;

// Output Schema
export type ErrorTrackingFingerprintsDestroyOutput = void;
export const ErrorTrackingFingerprintsDestroyOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void as unknown as Schema.Codec<ErrorTrackingFingerprintsDestroyOutput>;

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
  }));
