import * as Schema from "effect/Schema";
import { API } from "../../client.ts";
import * as T from "../../traits.ts";
import { BadRequest, Forbidden, NotFound } from "../../errors.ts";

// Input Schema
export const ErrorTrackingGroupingRulesUpdateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.String.pipe(T.PathParam()),
    project_id: Schema.String.pipe(T.PathParam()),
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
