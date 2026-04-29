import * as Schema from "effect/Schema";
import { API } from "../../client.ts";
import * as T from "../../traits.ts";
import { BadRequest, Forbidden, NotFound } from "../../errors.ts";

// Input Schema
export const ErrorTrackingSuppressionRulesPartialUpdateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.String.pipe(T.PathParam()),
    project_id: Schema.String.pipe(T.PathParam()),
    filters: Schema.optional(Schema.Unknown),
    order_key: Schema.optional(Schema.Number),
    disabled_data: Schema.optional(Schema.NullOr(Schema.Unknown)),
    sampling_rate: Schema.optional(Schema.Number),
    created_at: Schema.optional(Schema.String),
    updated_at: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "PATCH",
      path: "/api/environments/{project_id}/error_tracking/suppression_rules/{id}/",
    }),
  );
export type ErrorTrackingSuppressionRulesPartialUpdateInput =
  typeof ErrorTrackingSuppressionRulesPartialUpdateInput.Type;

// Output Schema
export const ErrorTrackingSuppressionRulesPartialUpdateOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.String,
    filters: Schema.Unknown,
    order_key: Schema.Number,
    disabled_data: Schema.optional(Schema.NullOr(Schema.Unknown)),
    sampling_rate: Schema.optional(Schema.Number),
    created_at: Schema.String,
    updated_at: Schema.String,
  });
export type ErrorTrackingSuppressionRulesPartialUpdateOutput =
  typeof ErrorTrackingSuppressionRulesPartialUpdateOutput.Type;

// The operation
/**
 *
 * @param id - A UUID string identifying this error tracking suppression rule.
 * @param project_id - Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
 */
export const errorTrackingSuppressionRulesPartialUpdate =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: ErrorTrackingSuppressionRulesPartialUpdateInput,
    outputSchema: ErrorTrackingSuppressionRulesPartialUpdateOutput,
    errors: [BadRequest, Forbidden, NotFound] as const,
  }));
