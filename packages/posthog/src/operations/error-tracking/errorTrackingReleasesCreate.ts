import * as Schema from "effect/Schema";
import { API } from "../../client.ts";
import * as T from "../../traits.ts";
import { BadRequest, Forbidden, NotFound } from "../../errors.ts";

// Input Schema
export const ErrorTrackingReleasesCreateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    project_id: Schema.String.pipe(T.PathParam()),
    id: Schema.optional(Schema.String),
    hash_id: Schema.optional(Schema.String),
    team_id: Schema.optional(Schema.Number),
    created_at: Schema.optional(Schema.String),
    metadata: Schema.optional(Schema.NullOr(Schema.Unknown)),
    version: Schema.optional(Schema.String),
    project: Schema.optional(Schema.String),
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
    id: Schema.optional(Schema.String),
    hash_id: Schema.optional(Schema.String),
    team_id: Schema.optional(Schema.Number),
    created_at: Schema.optional(Schema.String),
    metadata: Schema.optional(Schema.NullOr(Schema.Unknown)),
    version: Schema.optional(Schema.String),
    project: Schema.optional(Schema.String),
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
