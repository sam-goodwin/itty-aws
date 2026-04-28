import * as Schema from "effect/Schema";
import { API } from "../../client";
import * as T from "../../traits";
import { Forbidden, NotFound } from "../../errors";

// Input Schema
export const ErrorTrackingReleasesHashRetrieveInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    hash_id: Schema.String.pipe(T.PathParam()),
    project_id: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/api/projects/{project_id}/error_tracking/releases/hash/{hash_id}/",
    }),
  );
export type ErrorTrackingReleasesHashRetrieveInput =
  typeof ErrorTrackingReleasesHashRetrieveInput.Type;

// Output Schema
export const ErrorTrackingReleasesHashRetrieveOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type ErrorTrackingReleasesHashRetrieveOutput =
  typeof ErrorTrackingReleasesHashRetrieveOutput.Type;

// The operation
/**
 *
 * @param project_id - Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
 */
export const errorTrackingReleasesHashRetrieve =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: ErrorTrackingReleasesHashRetrieveInput,
    outputSchema: ErrorTrackingReleasesHashRetrieveOutput,
    errors: [Forbidden, NotFound] as const,
  }));
