import * as Schema from "effect/Schema";
import { API } from "../../client.ts";
import * as T from "../../traits.ts";
import { Forbidden, NotFound } from "../../errors.ts";

// Input Schema
export const ErrorTrackingSuppressionRulesDestroyInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.String.pipe(T.PathParam()),
    project_id: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/api/environments/{project_id}/error_tracking/suppression_rules/{id}/",
    }),
  );
export type ErrorTrackingSuppressionRulesDestroyInput =
  typeof ErrorTrackingSuppressionRulesDestroyInput.Type;

// Output Schema
export const ErrorTrackingSuppressionRulesDestroyOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type ErrorTrackingSuppressionRulesDestroyOutput =
  typeof ErrorTrackingSuppressionRulesDestroyOutput.Type;

// The operation
/**
 *
 * @param id - A UUID string identifying this error tracking suppression rule.
 * @param project_id - Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
 */
export const errorTrackingSuppressionRulesDestroy =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: ErrorTrackingSuppressionRulesDestroyInput,
    outputSchema: ErrorTrackingSuppressionRulesDestroyOutput,
    errors: [Forbidden, NotFound] as const,
  }));
