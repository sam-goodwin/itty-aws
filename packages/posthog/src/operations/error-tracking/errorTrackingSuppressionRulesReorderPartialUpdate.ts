import * as Schema from "effect/Schema";
import { API } from "../../client.ts";
import * as T from "../../traits.ts";
import { BadRequest, Forbidden, NotFound } from "../../errors.ts";

// Input Schema
export const ErrorTrackingSuppressionRulesReorderPartialUpdateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    project_id: Schema.String.pipe(T.PathParam()),
    id: Schema.optional(Schema.String),
    filters: Schema.optional(Schema.Unknown),
    order_key: Schema.optional(Schema.Number),
    disabled_data: Schema.optional(Schema.NullOr(Schema.Unknown)),
    sampling_rate: Schema.optional(Schema.Number),
    created_at: Schema.optional(Schema.String),
    updated_at: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "PATCH",
      path: "/api/environments/{project_id}/error_tracking/suppression_rules/reorder/",
    }),
  );
export type ErrorTrackingSuppressionRulesReorderPartialUpdateInput =
  typeof ErrorTrackingSuppressionRulesReorderPartialUpdateInput.Type;

// Output Schema
export const ErrorTrackingSuppressionRulesReorderPartialUpdateOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type ErrorTrackingSuppressionRulesReorderPartialUpdateOutput =
  typeof ErrorTrackingSuppressionRulesReorderPartialUpdateOutput.Type;

// The operation
/**
 *
 * @param project_id - Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
 */
export const errorTrackingSuppressionRulesReorderPartialUpdate =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: ErrorTrackingSuppressionRulesReorderPartialUpdateInput,
    outputSchema: ErrorTrackingSuppressionRulesReorderPartialUpdateOutput,
    errors: [BadRequest, Forbidden, NotFound] as const,
  }));
