import * as Schema from "effect/Schema";
import { API } from "../../client.ts";
import * as T from "../../traits.ts";

// Input Schema
export interface ErrorTrackingStackFramesDestroyInput {
  id: string;
  project_id: string;
}
export const ErrorTrackingStackFramesDestroyInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.String.pipe(T.PathParam()),
    project_id: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/api/projects/{project_id}/error_tracking/stack_frames/{id}/",
    }),
  ) as unknown as Schema.Codec<ErrorTrackingStackFramesDestroyInput>;

// Output Schema
export type ErrorTrackingStackFramesDestroyOutput = void;
export const ErrorTrackingStackFramesDestroyOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void as unknown as Schema.Codec<ErrorTrackingStackFramesDestroyOutput>;

// The operation
/**
 * Hard delete of this model is not allowed. Use a patch API call to set "deleted" to true
 *
 * @param project_id - Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
 */
export const errorTrackingStackFramesDestroy =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: ErrorTrackingStackFramesDestroyInput,
    outputSchema: ErrorTrackingStackFramesDestroyOutput,
  }));
