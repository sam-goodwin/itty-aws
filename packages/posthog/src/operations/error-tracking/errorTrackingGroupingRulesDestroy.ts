import * as Schema from "effect/Schema";
import { API } from "../../client";
import * as T from "../../traits";
import { Forbidden, NotFound } from "../../errors";

// Input Schema
export const ErrorTrackingGroupingRulesDestroyInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.String.pipe(T.PathParam()),
    project_id: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/api/environments/{project_id}/error_tracking/grouping_rules/{id}/",
    }),
  );
export type ErrorTrackingGroupingRulesDestroyInput =
  typeof ErrorTrackingGroupingRulesDestroyInput.Type;

// Output Schema
export const ErrorTrackingGroupingRulesDestroyOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type ErrorTrackingGroupingRulesDestroyOutput =
  typeof ErrorTrackingGroupingRulesDestroyOutput.Type;

// The operation
/**
 *
 * @param id - A UUID string identifying this error tracking grouping rule.
 * @param project_id - Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
 */
export const errorTrackingGroupingRulesDestroy =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: ErrorTrackingGroupingRulesDestroyInput,
    outputSchema: ErrorTrackingGroupingRulesDestroyOutput,
    errors: [Forbidden, NotFound] as const,
  }));
