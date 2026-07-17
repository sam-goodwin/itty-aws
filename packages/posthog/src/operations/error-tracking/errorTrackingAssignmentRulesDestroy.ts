import * as Schema from "effect/Schema";
import { API } from "../../client.ts";
import * as T from "../../traits.ts";

// Input Schema
export interface ErrorTrackingAssignmentRulesDestroyInput {
  id: string;
  project_id: string;
}
export const ErrorTrackingAssignmentRulesDestroyInput =
  /*@__PURE__*/ Schema.Struct({
    id: Schema.String.pipe(T.PathParam()),
    project_id: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/api/projects/{project_id}/error_tracking/assignment_rules/{id}/",
    }),
  ) as unknown as Schema.Codec<ErrorTrackingAssignmentRulesDestroyInput>;

// Output Schema
export type ErrorTrackingAssignmentRulesDestroyOutput = void;
export const ErrorTrackingAssignmentRulesDestroyOutput =
  /*@__PURE__*/ Schema.Void as unknown as Schema.Codec<ErrorTrackingAssignmentRulesDestroyOutput>;

// The operation
/**
 *
 * @param project_id - Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
 */
export const errorTrackingAssignmentRulesDestroy =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: ErrorTrackingAssignmentRulesDestroyInput,
    outputSchema: ErrorTrackingAssignmentRulesDestroyOutput,
  }));
