import * as Schema from "effect/Schema";
import { API } from "../../client.ts";
import * as T from "../../traits.ts";
import { BadRequest, Forbidden, NotFound } from "../../errors.ts";

// Input Schema
export const ErrorTrackingSuppressionRulesListInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    project_id: Schema.String.pipe(T.PathParam()),
    limit: Schema.optional(Schema.Number),
    offset: Schema.optional(Schema.Number),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/api/environments/{project_id}/error_tracking/suppression_rules/",
    }),
  );
export type ErrorTrackingSuppressionRulesListInput =
  typeof ErrorTrackingSuppressionRulesListInput.Type;

// Output Schema
export const ErrorTrackingSuppressionRulesListOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    count: Schema.Number,
    next: Schema.optional(Schema.NullOr(Schema.String)),
    previous: Schema.optional(Schema.NullOr(Schema.String)),
    results: Schema.Array(
      Schema.Struct({
        id: Schema.String,
        filters: Schema.Unknown,
        order_key: Schema.Number,
        disabled_data: Schema.optional(Schema.NullOr(Schema.Unknown)),
        sampling_rate: Schema.optional(Schema.Number),
        created_at: Schema.String,
        updated_at: Schema.String,
      }),
    ),
  });
export type ErrorTrackingSuppressionRulesListOutput =
  typeof ErrorTrackingSuppressionRulesListOutput.Type;

// The operation
/**
 *
 * @param limit - Number of results to return per page.
 * @param offset - The initial index from which to return the results.
 * @param project_id - Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
 */
export const errorTrackingSuppressionRulesList =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: ErrorTrackingSuppressionRulesListInput,
    outputSchema: ErrorTrackingSuppressionRulesListOutput,
    errors: [BadRequest, Forbidden, NotFound] as const,
  }));
