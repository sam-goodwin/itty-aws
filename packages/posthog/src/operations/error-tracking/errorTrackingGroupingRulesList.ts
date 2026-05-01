import * as Schema from "effect/Schema";
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
      Schema.Array(
        Schema.Struct({
          id: Schema.optional(Schema.String),
          filters: Schema.optional(Schema.Unknown),
          assignee: Schema.optional(
            Schema.NullOr(
              Schema.Struct({
                type: Schema.optional(Schema.Literals(["user", "role"])),
                id: Schema.optional(Schema.Unknown),
              }),
            ),
          ),
          description: Schema.optional(Schema.NullOr(Schema.String)),
          issue: Schema.optional(
            Schema.NullOr(Schema.Record(Schema.String, Schema.String)),
          ),
          order_key: Schema.optional(Schema.Number),
          disabled_data: Schema.optional(Schema.NullOr(Schema.Unknown)),
          created_at: Schema.optional(Schema.String),
          updated_at: Schema.optional(Schema.String),
        }),
      ),
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
