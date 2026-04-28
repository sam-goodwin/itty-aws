import * as Schema from "effect/Schema";
import { API } from "../../client";
import * as T from "../../traits";
import { BadRequest, Forbidden, NotFound } from "../../errors";

// Input Schema
export const ErrorTrackingGroupingRulesUpdateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.String.pipe(T.PathParam()),
    project_id: Schema.String.pipe(T.PathParam()),
    filters: Schema.Unknown,
    assignee: Schema.NullOr(
      Schema.Struct({
        type: Schema.optional(Schema.Literals(["user", "role"])),
        id: Schema.optional(Schema.Unknown),
      }),
    ),
    description: Schema.optional(Schema.NullOr(Schema.String)),
    issue: Schema.NullOr(Schema.Record(Schema.String, Schema.String)),
    order_key: Schema.Number,
    disabled_data: Schema.optional(Schema.NullOr(Schema.Unknown)),
    created_at: Schema.String,
    updated_at: Schema.String,
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/api/environments/{project_id}/error_tracking/grouping_rules/{id}/",
    }),
  );
export type ErrorTrackingGroupingRulesUpdateInput =
  typeof ErrorTrackingGroupingRulesUpdateInput.Type;

// Output Schema
export const ErrorTrackingGroupingRulesUpdateOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.String,
    filters: Schema.Unknown,
    assignee: Schema.NullOr(
      Schema.Struct({
        type: Schema.optional(Schema.Literals(["user", "role"])),
        id: Schema.optional(Schema.Unknown),
      }),
    ),
    description: Schema.optional(Schema.NullOr(Schema.String)),
    issue: Schema.NullOr(Schema.Record(Schema.String, Schema.String)),
    order_key: Schema.Number,
    disabled_data: Schema.optional(Schema.NullOr(Schema.Unknown)),
    created_at: Schema.String,
    updated_at: Schema.String,
  });
export type ErrorTrackingGroupingRulesUpdateOutput =
  typeof ErrorTrackingGroupingRulesUpdateOutput.Type;

// The operation
/**
 *
 * @param id - A UUID string identifying this error tracking grouping rule.
 * @param project_id - Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
 */
export const errorTrackingGroupingRulesUpdate =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: ErrorTrackingGroupingRulesUpdateInput,
    outputSchema: ErrorTrackingGroupingRulesUpdateOutput,
    errors: [BadRequest, Forbidden, NotFound] as const,
  }));
