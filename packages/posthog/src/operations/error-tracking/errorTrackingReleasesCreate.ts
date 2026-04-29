import * as Schema from "effect/Schema";
import { API } from "../../client.ts";
import * as T from "../../traits.ts";
import { BadRequest, Forbidden, NotFound } from "../../errors.ts";

// Input Schema
export const ErrorTrackingReleasesCreateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    project_id: Schema.String.pipe(T.PathParam()),
    id: Schema.String,
    hash_id: Schema.String,
    team_id: Schema.Number,
    created_at: Schema.String,
    metadata: Schema.optional(Schema.NullOr(Schema.Unknown)),
    version: Schema.String,
    project: Schema.String,
  }).pipe(
    T.Http({
      method: "POST",
      path: "/api/projects/{project_id}/error_tracking/releases/",
    }),
  );
export type ErrorTrackingReleasesCreateInput =
  typeof ErrorTrackingReleasesCreateInput.Type;

// Output Schema
export const ErrorTrackingReleasesCreateOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.String,
    hash_id: Schema.String,
    team_id: Schema.Number,
    created_at: Schema.String,
    metadata: Schema.optional(Schema.NullOr(Schema.Unknown)),
    version: Schema.String,
    project: Schema.String,
  });
export type ErrorTrackingReleasesCreateOutput =
  typeof ErrorTrackingReleasesCreateOutput.Type;

// The operation
/**
 *
 * @param project_id - Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
 */
export const errorTrackingReleasesCreate = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: ErrorTrackingReleasesCreateInput,
    outputSchema: ErrorTrackingReleasesCreateOutput,
    errors: [BadRequest, Forbidden, NotFound] as const,
  }),
);
