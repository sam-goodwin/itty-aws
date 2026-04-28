import * as Schema from "effect/Schema";
import { API } from "../../client";
import * as T from "../../traits";
import { Forbidden, NotFound } from "../../errors";

// Input Schema
export const ErrorTrackingSuppressionRulesRetrieveInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.String.pipe(T.PathParam()),
    project_id: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/api/environments/{project_id}/error_tracking/suppression_rules/{id}/",
    }),
  );
export type ErrorTrackingSuppressionRulesRetrieveInput =
  typeof ErrorTrackingSuppressionRulesRetrieveInput.Type;

// Output Schema
export const ErrorTrackingSuppressionRulesRetrieveOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.String,
    filters: Schema.Unknown,
    order_key: Schema.Number,
    disabled_data: Schema.optional(Schema.NullOr(Schema.Unknown)),
    sampling_rate: Schema.optional(Schema.Number),
    created_at: Schema.String,
    updated_at: Schema.String,
  });
export type ErrorTrackingSuppressionRulesRetrieveOutput =
  typeof ErrorTrackingSuppressionRulesRetrieveOutput.Type;

// The operation
/**
 *
 * @param id - A UUID string identifying this error tracking suppression rule.
 * @param project_id - Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
 */
export const errorTrackingSuppressionRulesRetrieve =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: ErrorTrackingSuppressionRulesRetrieveInput,
    outputSchema: ErrorTrackingSuppressionRulesRetrieveOutput,
    errors: [Forbidden, NotFound] as const,
  }));
