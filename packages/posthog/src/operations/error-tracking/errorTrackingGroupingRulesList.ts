import * as Schema from "effect/Schema";
import { ErrorTrackingGroupingRuleSchema } from "./_schemas.ts";
import { API } from "../../client.ts";
import * as T from "../../traits.ts";
import { Forbidden, NotFound } from "../../errors.ts";

// Input Schema
export const ErrorTrackingGroupingRulesListInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    project_id: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/api/environments/{project_id}/error_tracking/grouping_rules/",
    }),
  );
export type ErrorTrackingGroupingRulesListInput =
  typeof ErrorTrackingGroupingRulesListInput.Type;

// Output Schema
export const ErrorTrackingGroupingRulesListOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    results: Schema.optional(
      Schema.Array(Schema.suspend(() => ErrorTrackingGroupingRuleSchema)),
    ),
  });
export type ErrorTrackingGroupingRulesListOutput =
  typeof ErrorTrackingGroupingRulesListOutput.Type;

// The operation
/**
 *
 * @param project_id - Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
 */
export const errorTrackingGroupingRulesList =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: ErrorTrackingGroupingRulesListInput,
    outputSchema: ErrorTrackingGroupingRulesListOutput,
    errors: [Forbidden, NotFound] as const,
  }));
