import * as Schema from "effect/Schema";
import { API } from "../../client";
import * as T from "../../traits";
import { BadRequest, Forbidden, NotFound } from "../../errors";

// Input Schema
export const ErrorTrackingReleasesUpdateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.String.pipe(T.PathParam()),
    project_id: Schema.String.pipe(T.PathParam()),
    hash_id: Schema.String,
    team_id: Schema.Number,
    created_at: Schema.String,
    metadata: Schema.optional(Schema.NullOr(Schema.Unknown)),
    version: Schema.String,
    project: Schema.String,
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/api/projects/{project_id}/error_tracking/releases/{id}/",
    }),
  );
export type ErrorTrackingReleasesUpdateInput =
  typeof ErrorTrackingReleasesUpdateInput.Type;

// Output Schema
export const ErrorTrackingReleasesUpdateOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.String,
    hash_id: Schema.String,
    team_id: Schema.Number,
    created_at: Schema.String,
    metadata: Schema.optional(Schema.NullOr(Schema.Unknown)),
    version: Schema.String,
    project: Schema.String,
  });
export type ErrorTrackingReleasesUpdateOutput =
  typeof ErrorTrackingReleasesUpdateOutput.Type;

// The operation
/**
 *
 * @param id - A UUID string identifying this error tracking release.
 * @param project_id - Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
 */
export const errorTrackingReleasesUpdate = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: ErrorTrackingReleasesUpdateInput,
    outputSchema: ErrorTrackingReleasesUpdateOutput,
    errors: [BadRequest, Forbidden, NotFound] as const,
  }),
);
