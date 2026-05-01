import * as Schema from "effect/Schema";
import { API } from "../../client.ts";
import * as T from "../../traits.ts";
import { BadRequest, Forbidden, NotFound } from "../../errors.ts";

// Input Schema
export const ErrorTrackingStackFramesBatchGetCreateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    project_id: Schema.String.pipe(T.PathParam()),
    id: Schema.optional(Schema.String),
    raw_id: Schema.optional(Schema.String),
    created_at: Schema.optional(Schema.String),
    contents: Schema.optional(Schema.Unknown),
    resolved: Schema.optional(Schema.Boolean),
    context: Schema.optional(Schema.NullOr(Schema.Unknown)),
    symbol_set_ref: Schema.optional(Schema.String),
    release: Schema.optional(
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
