import * as Schema from "effect/Schema";
import { API } from "../../client.ts";
import * as T from "../../traits.ts";

// Input Schema
export const ErrorTrackingStackFramesRetrieveInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.String.pipe(T.PathParam()),
    project_id: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/api/projects/{project_id}/error_tracking/stack_frames/{id}/",
    }),
  );
export type ErrorTrackingStackFramesRetrieveInput =
  typeof ErrorTrackingStackFramesRetrieveInput.Type;

// Output Schema
export const ErrorTrackingStackFramesRetrieveOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.optional(Schema.String),
    raw_id: Schema.optional(Schema.String),
    created_at: Schema.optional(Schema.String),
    contents: Schema.optional(Schema.Record(Schema.String, Schema.Unknown)),
    resolved: Schema.optional(Schema.Boolean),
    context: Schema.optional(
      Schema.NullOr(Schema.Record(Schema.String, Schema.Unknown)),
    ),
    symbol_set_ref: Schema.optional(Schema.NullOr(Schema.String)),
    release: Schema.optional(Schema.Unknown),
  });
export type ErrorTrackingStackFramesRetrieveOutput =
  typeof ErrorTrackingStackFramesRetrieveOutput.Type;

// The operation
/**
 *
 * @param project_id - Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
 */
export const errorTrackingStackFramesRetrieve =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: ErrorTrackingStackFramesRetrieveInput,
    outputSchema: ErrorTrackingStackFramesRetrieveOutput,
  }));
