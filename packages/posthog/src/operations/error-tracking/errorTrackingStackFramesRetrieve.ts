import * as Schema from "effect/Schema";
import { API } from "../../client";
import * as T from "../../traits";
import { Forbidden, NotFound } from "../../errors";

// Input Schema
export const ErrorTrackingStackFramesRetrieveInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.String.pipe(T.PathParam()),
    project_id: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/api/environments/{project_id}/error_tracking/stack_frames/{id}/",
    }),
  );
export type ErrorTrackingStackFramesRetrieveInput =
  typeof ErrorTrackingStackFramesRetrieveInput.Type;

// Output Schema
export const ErrorTrackingStackFramesRetrieveOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
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
  });
export type ErrorTrackingStackFramesRetrieveOutput =
  typeof ErrorTrackingStackFramesRetrieveOutput.Type;

// The operation
/**
 *
 * @param id - A UUID string identifying this error tracking stack frame.
 * @param project_id - Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
 */
export const errorTrackingStackFramesRetrieve =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: ErrorTrackingStackFramesRetrieveInput,
    outputSchema: ErrorTrackingStackFramesRetrieveOutput,
    errors: [Forbidden, NotFound] as const,
  }));
