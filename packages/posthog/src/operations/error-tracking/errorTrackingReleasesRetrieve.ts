import * as Schema from "effect/Schema";
import { API } from "../../client.ts";
import * as T from "../../traits.ts";
import { Forbidden, NotFound } from "../../errors.ts";

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
    id: Schema.optional(Schema.String),
    hash_id: Schema.optional(Schema.String),
    team_id: Schema.optional(Schema.Number),
    created_at: Schema.optional(Schema.String),
    metadata: Schema.optional(Schema.NullOr(Schema.Unknown)),
    version: Schema.optional(Schema.String),
    project: Schema.optional(Schema.String),
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
