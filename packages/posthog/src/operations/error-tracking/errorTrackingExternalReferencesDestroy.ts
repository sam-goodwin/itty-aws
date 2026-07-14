import * as Schema from "effect/Schema";
import { API } from "../../client.ts";
import * as T from "../../traits.ts";

// Input Schema
export interface ErrorTrackingExternalReferencesDestroyInput {
  id: string;
  project_id: string;
}
export const ErrorTrackingExternalReferencesDestroyInput =
  /*@__PURE__*/ Schema.Struct({
    id: Schema.String.pipe(T.PathParam()),
    project_id: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/api/projects/{project_id}/error_tracking/external_references/{id}/",
    }),
  ) as unknown as Schema.Codec<ErrorTrackingExternalReferencesDestroyInput>;

// Output Schema
export type ErrorTrackingExternalReferencesDestroyOutput = void;
export const ErrorTrackingExternalReferencesDestroyOutput =
  /*@__PURE__*/ Schema.Void as unknown as Schema.Codec<ErrorTrackingExternalReferencesDestroyOutput>;

// The operation
/**
 * Hard delete of this model is not allowed. Use a patch API call to set "deleted" to true
 *
 * @param project_id - Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
 */
export const errorTrackingExternalReferencesDestroy =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: ErrorTrackingExternalReferencesDestroyInput,
    outputSchema: ErrorTrackingExternalReferencesDestroyOutput,
  }));
