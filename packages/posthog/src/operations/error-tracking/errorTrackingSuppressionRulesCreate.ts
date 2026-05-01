import * as Schema from "effect/Schema";
import { API } from "../../client.ts";
import * as T from "../../traits.ts";
import { BadRequest, Forbidden, NotFound } from "../../errors.ts";

// Input Schema
export const ErrorTrackingSuppressionRulesCreateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    project_id: Schema.String.pipe(T.PathParam()),
    filters: Schema.optional(
      Schema.Struct({
        type: Schema.optional(Schema.Literals(["AND", "OR"])),
        values: Schema.optional(Schema.Array(Schema.Unknown)),
      }),
    ),
    sampling_rate: Schema.optional(Schema.Number),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/api/environments/{project_id}/error_tracking/suppression_rules/",
    }),
  );
export type ErrorTrackingSuppressionRulesCreateInput =
  typeof ErrorTrackingSuppressionRulesCreateInput.Type;

// Output Schema
export const ErrorTrackingSuppressionRulesCreateOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.optional(Schema.String),
    filters: Schema.optional(Schema.Unknown),
    order_key: Schema.optional(Schema.Number),
    disabled_data: Schema.optional(Schema.NullOr(Schema.Unknown)),
    sampling_rate: Schema.optional(Schema.Number),
    created_at: Schema.optional(Schema.String),
    updated_at: Schema.optional(Schema.String),
  });
export type ErrorTrackingSuppressionRulesCreateOutput =
  typeof ErrorTrackingSuppressionRulesCreateOutput.Type;

// The operation
/**
 *
 * @param project_id - Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
 */
export const errorTrackingSuppressionRulesCreate =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: ErrorTrackingSuppressionRulesCreateInput,
    outputSchema: ErrorTrackingSuppressionRulesCreateOutput,
    errors: [BadRequest, Forbidden, NotFound] as const,
  }));
