import * as Schema from "effect/Schema";
import { API } from "../../client.ts";
import * as T from "../../traits.ts";
import { BadRequest, Forbidden, NotFound } from "../../errors.ts";

// Input Schema
export const ErrorTrackingReleasesUpdateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.String.pipe(T.PathParam()),
    project_id: Schema.String.pipe(T.PathParam()),
    hash_id: Schema.optional(Schema.String),
    team_id: Schema.optional(Schema.Number),
    created_at: Schema.optional(Schema.String),
    metadata: Schema.optional(Schema.NullOr(Schema.Unknown)),
    version: Schema.optional(Schema.String),
    project: Schema.optional(Schema.String),
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
    id: Schema.optional(Schema.String),
    hash_id: Schema.optional(Schema.String),
    team_id: Schema.optional(Schema.Number),
    created_at: Schema.optional(Schema.String),
    metadata: Schema.optional(Schema.NullOr(Schema.Unknown)),
    version: Schema.optional(Schema.String),
    project: Schema.optional(Schema.String),
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
