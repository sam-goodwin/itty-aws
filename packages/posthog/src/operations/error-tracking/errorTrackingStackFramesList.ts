import * as Schema from "effect/Schema";
import { API } from "../../client";
import * as T from "../../traits";
import { BadRequest, Forbidden, NotFound } from "../../errors";

// Input Schema
export const ErrorTrackingStackFramesListInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    project_id: Schema.String.pipe(T.PathParam()),
    limit: Schema.optional(Schema.Number),
    offset: Schema.optional(Schema.Number),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/api/environments/{project_id}/error_tracking/stack_frames/",
    }),
  );
export type ErrorTrackingStackFramesListInput =
  typeof ErrorTrackingStackFramesListInput.Type;

// Output Schema
export const ErrorTrackingStackFramesListOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    count: Schema.Number,
    next: Schema.optional(Schema.NullOr(Schema.String)),
    previous: Schema.optional(Schema.NullOr(Schema.String)),
    results: Schema.Array(
      Schema.Struct({
        id: Schema.String,
        raw_id: Schema.String,
        created_at: Schema.String,
        contents: Schema.Unknown,
        resolved: Schema.Boolean,
        context: Schema.optional(Schema.NullOr(Schema.Unknown)),
        symbol_set_ref: Schema.optional(Schema.String),
        release: Schema.Struct({
          id: Schema.String,
          hash_id: Schema.String,
          team_id: Schema.Number,
          created_at: Schema.String,
          metadata: Schema.optional(Schema.NullOr(Schema.Unknown)),
          version: Schema.String,
          project: Schema.String,
        }),
      }),
    ),
  });
export type ErrorTrackingStackFramesListOutput =
  typeof ErrorTrackingStackFramesListOutput.Type;

// The operation
/**
 *
 * @param limit - Number of results to return per page.
 * @param offset - The initial index from which to return the results.
 * @param project_id - Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
 */
export const errorTrackingStackFramesList =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: ErrorTrackingStackFramesListInput,
    outputSchema: ErrorTrackingStackFramesListOutput,
    errors: [BadRequest, Forbidden, NotFound] as const,
  }));
