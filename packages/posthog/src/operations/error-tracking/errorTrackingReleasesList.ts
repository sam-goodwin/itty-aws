import * as Schema from "effect/Schema";
import { API } from "../../client.ts";
import * as T from "../../traits.ts";
import { BadRequest, Forbidden, NotFound } from "../../errors.ts";

// Input Schema
export const ErrorTrackingReleasesListInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    project_id: Schema.String.pipe(T.PathParam()),
    limit: Schema.optional(Schema.Number),
    offset: Schema.optional(Schema.Number),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/api/projects/{project_id}/error_tracking/releases/",
    }),
  );
export type ErrorTrackingReleasesListInput =
  typeof ErrorTrackingReleasesListInput.Type;

// Output Schema
export const ErrorTrackingReleasesListOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    count: Schema.optional(Schema.Number),
    next: Schema.optional(Schema.NullOr(Schema.String)),
    previous: Schema.optional(Schema.NullOr(Schema.String)),
    results: Schema.optional(
      Schema.Array(
        Schema.Struct({
          id: Schema.optional(Schema.String),
          hash_id: Schema.optional(Schema.String),
          team_id: Schema.optional(Schema.Number),
          created_at: Schema.optional(Schema.String),
          metadata: Schema.optional(Schema.NullOr(Schema.Unknown)),
          version: Schema.optional(Schema.String),
          project: Schema.optional(Schema.String),
        }),
      ),
    ),
  });
export type ErrorTrackingReleasesListOutput =
  typeof ErrorTrackingReleasesListOutput.Type;

// The operation
/**
 *
 * @param limit - Number of results to return per page.
 * @param offset - The initial index from which to return the results.
 * @param project_id - Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
 */
export const errorTrackingReleasesList = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: ErrorTrackingReleasesListInput,
    outputSchema: ErrorTrackingReleasesListOutput,
    errors: [BadRequest, Forbidden, NotFound] as const,
  }),
);
