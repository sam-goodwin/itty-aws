import * as Schema from "effect/Schema";
import { API } from "../../client.ts";
import * as T from "../../traits.ts";
import { Forbidden, NotFound } from "../../errors.ts";

// Input Schema
export const ErrorTrackingStackFramesDestroyInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.String.pipe(T.PathParam()),
    project_id: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/api/environments/{project_id}/error_tracking/stack_frames/{id}/",
    }),
  );
export type ErrorTrackingStackFramesDestroyInput =
  typeof ErrorTrackingStackFramesDestroyInput.Type;

// Output Schema
export const ErrorTrackingStackFramesDestroyOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type ErrorTrackingStackFramesDestroyOutput =
  typeof ErrorTrackingStackFramesDestroyOutput.Type;

// The operation
/**
 * Hard delete of this model is not allowed. Use a patch API call to set "deleted" to true
 *
 * @param id - A UUID string identifying this error tracking stack frame.
 * @param project_id - Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
 */
export const errorTrackingStackFramesDestroy =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: ErrorTrackingStackFramesDestroyInput,
    outputSchema: ErrorTrackingStackFramesDestroyOutput,
    errors: [Forbidden, NotFound] as const,
  }));
