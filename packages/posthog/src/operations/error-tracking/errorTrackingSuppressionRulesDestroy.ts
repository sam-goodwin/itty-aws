import * as Schema from "effect/Schema";
import { API } from "../../client.ts";
import * as T from "../../traits.ts";

// Input Schema
export interface ErrorTrackingSuppressionRulesDestroyInput {
  id: string;
  project_id: string;
}
export const ErrorTrackingSuppressionRulesDestroyInput =
  /*@__PURE__*/ Schema.Struct({
    id: Schema.String.pipe(T.PathParam()),
    project_id: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/api/projects/{project_id}/error_tracking/suppression_rules/{id}/",
    }),
  ) as unknown as Schema.Codec<ErrorTrackingSuppressionRulesDestroyInput>;

// Output Schema
export type ErrorTrackingSuppressionRulesDestroyOutput = void;
export const ErrorTrackingSuppressionRulesDestroyOutput =
  /*@__PURE__*/ Schema.Void as unknown as Schema.Codec<ErrorTrackingSuppressionRulesDestroyOutput>;

// The operation
/**
 *
 * @param project_id - Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
 */
export const errorTrackingSuppressionRulesDestroy =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: ErrorTrackingSuppressionRulesDestroyInput,
    outputSchema: ErrorTrackingSuppressionRulesDestroyOutput,
  }));
