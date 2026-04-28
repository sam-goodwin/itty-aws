import * as Schema from "effect/Schema";
import { API } from "../../client";
import * as T from "../../traits";
import { Forbidden, NotFound } from "../../errors";

// Input Schema
export const ErrorTrackingReleasesRetrieveInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.String.pipe(T.PathParam()),
    project_id: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/api/projects/{project_id}/error_tracking/releases/{id}/",
    }),
  );
export type ErrorTrackingReleasesRetrieveInput =
  typeof ErrorTrackingReleasesRetrieveInput.Type;

// Output Schema
export const ErrorTrackingReleasesRetrieveOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.String,
    hash_id: Schema.String,
    team_id: Schema.Number,
    created_at: Schema.String,
    metadata: Schema.optional(Schema.NullOr(Schema.Unknown)),
    version: Schema.String,
    project: Schema.String,
  });
export type ErrorTrackingReleasesRetrieveOutput =
  typeof ErrorTrackingReleasesRetrieveOutput.Type;

// The operation
/**
 *
 * @param id - A UUID string identifying this error tracking release.
 * @param project_id - Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
 */
export const errorTrackingReleasesRetrieve =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: ErrorTrackingReleasesRetrieveInput,
    outputSchema: ErrorTrackingReleasesRetrieveOutput,
    errors: [Forbidden, NotFound] as const,
  }));
