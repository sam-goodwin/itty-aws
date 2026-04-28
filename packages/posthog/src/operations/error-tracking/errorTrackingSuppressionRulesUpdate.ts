import * as Schema from "effect/Schema";
import { API } from "../../client";
import * as T from "../../traits";
import { BadRequest, Forbidden, NotFound } from "../../errors";

// Input Schema
export const ErrorTrackingSuppressionRulesUpdateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.String.pipe(T.PathParam()),
    project_id: Schema.String.pipe(T.PathParam()),
    filters: Schema.Unknown,
    order_key: Schema.Number,
    disabled_data: Schema.optional(Schema.NullOr(Schema.Unknown)),
    sampling_rate: Schema.optional(Schema.Number),
    created_at: Schema.String,
    updated_at: Schema.String,
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/api/environments/{project_id}/error_tracking/suppression_rules/{id}/",
    }),
  );
export type ErrorTrackingSuppressionRulesUpdateInput =
  typeof ErrorTrackingSuppressionRulesUpdateInput.Type;

// Output Schema
export const ErrorTrackingSuppressionRulesUpdateOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.String,
    filters: Schema.Unknown,
    order_key: Schema.Number,
    disabled_data: Schema.optional(Schema.NullOr(Schema.Unknown)),
    sampling_rate: Schema.optional(Schema.Number),
    created_at: Schema.String,
    updated_at: Schema.String,
  });
export type ErrorTrackingSuppressionRulesUpdateOutput =
  typeof ErrorTrackingSuppressionRulesUpdateOutput.Type;

// The operation
/**
 *
 * @param id - A UUID string identifying this error tracking suppression rule.
 * @param project_id - Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
 */
export const errorTrackingSuppressionRulesUpdate =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: ErrorTrackingSuppressionRulesUpdateInput,
    outputSchema: ErrorTrackingSuppressionRulesUpdateOutput,
    errors: [BadRequest, Forbidden, NotFound] as const,
  }));
