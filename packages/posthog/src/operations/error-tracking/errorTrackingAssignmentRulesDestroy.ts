import * as Schema from "effect/Schema";
import { API } from "../../client.ts";
import * as T from "../../traits.ts";
import { Forbidden, NotFound } from "../../errors.ts";

// Input Schema
export const ErrorTrackingAssignmentRulesDestroyInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.String.pipe(T.PathParam()),
    project_id: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/api/environments/{project_id}/error_tracking/assignment_rules/{id}/",
    }),
  );
export type ErrorTrackingAssignmentRulesDestroyInput =
  typeof ErrorTrackingAssignmentRulesDestroyInput.Type;

// Output Schema
export const ErrorTrackingAssignmentRulesDestroyOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type ErrorTrackingAssignmentRulesDestroyOutput =
  typeof ErrorTrackingAssignmentRulesDestroyOutput.Type;

// The operation
/**
 *
 * @param id - A UUID string identifying this error tracking assignment rule.
 * @param project_id - Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
 */
export const errorTrackingAssignmentRulesDestroy =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: ErrorTrackingAssignmentRulesDestroyInput,
    outputSchema: ErrorTrackingAssignmentRulesDestroyOutput,
    errors: [Forbidden, NotFound] as const,
  }));
