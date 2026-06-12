import * as Schema from "effect/Schema";
import { ErrorTrackingStackFrameSchema } from "./_schemas.ts";
import { API } from "../../client.ts";
import * as T from "../../traits.ts";
import { BadRequest, Forbidden, NotFound } from "../../errors.ts";

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
    count: Schema.optional(Schema.Number),
    next: Schema.optional(Schema.NullOr(Schema.String)),
    previous: Schema.optional(Schema.NullOr(Schema.String)),
    results: Schema.optional(
      Schema.Array(Schema.suspend(() => ErrorTrackingStackFrameSchema)),
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
