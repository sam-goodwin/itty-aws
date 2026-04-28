import * as Schema from "effect/Schema";
import { API } from "../../client";
import * as T from "../../traits";
import { Forbidden, NotFound } from "../../errors";

// Input Schema
export const ErrorTrackingReleasesDestroyInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.String.pipe(T.PathParam()),
    project_id: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/api/projects/{project_id}/error_tracking/releases/{id}/",
    }),
  );
export type ErrorTrackingReleasesDestroyInput =
  typeof ErrorTrackingReleasesDestroyInput.Type;

// Output Schema
export const ErrorTrackingReleasesDestroyOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type ErrorTrackingReleasesDestroyOutput =
  typeof ErrorTrackingReleasesDestroyOutput.Type;

// The operation
/**
 *
 * @param id - A UUID string identifying this error tracking release.
 * @param project_id - Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
 */
export const errorTrackingReleasesDestroy =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: ErrorTrackingReleasesDestroyInput,
    outputSchema: ErrorTrackingReleasesDestroyOutput,
    errors: [Forbidden, NotFound] as const,
  }));
