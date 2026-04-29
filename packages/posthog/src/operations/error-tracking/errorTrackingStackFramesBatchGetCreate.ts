import * as Schema from "effect/Schema";
import { API } from "../../client.ts";
import * as T from "../../traits.ts";
import { BadRequest, Forbidden, NotFound } from "../../errors.ts";

// Input Schema
export const ErrorTrackingStackFramesBatchGetCreateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    project_id: Schema.String.pipe(T.PathParam()),
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
  }).pipe(
    T.Http({
      method: "POST",
      path: "/api/environments/{project_id}/error_tracking/stack_frames/batch_get/",
    }),
  );
export type ErrorTrackingStackFramesBatchGetCreateInput =
  typeof ErrorTrackingStackFramesBatchGetCreateInput.Type;

// Output Schema
export const ErrorTrackingStackFramesBatchGetCreateOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type ErrorTrackingStackFramesBatchGetCreateOutput =
  typeof ErrorTrackingStackFramesBatchGetCreateOutput.Type;

// The operation
/**
 *
 * @param project_id - Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
 */
export const errorTrackingStackFramesBatchGetCreate =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: ErrorTrackingStackFramesBatchGetCreateInput,
    outputSchema: ErrorTrackingStackFramesBatchGetCreateOutput,
    errors: [BadRequest, Forbidden, NotFound] as const,
  }));
