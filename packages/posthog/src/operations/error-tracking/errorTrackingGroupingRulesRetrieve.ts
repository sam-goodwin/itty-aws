import * as Schema from "effect/Schema";
import { API } from "../../client.ts";
import * as T from "../../traits.ts";
import { Forbidden, NotFound } from "../../errors.ts";

// Input Schema
export const ErrorTrackingGroupingRulesRetrieveInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.String.pipe(T.PathParam()),
    project_id: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/api/environments/{project_id}/error_tracking/grouping_rules/{id}/",
    }),
  );
export type ErrorTrackingGroupingRulesRetrieveInput =
  typeof ErrorTrackingGroupingRulesRetrieveInput.Type;

// Output Schema
export const ErrorTrackingGroupingRulesRetrieveOutput =
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
export type ErrorTrackingGroupingRulesRetrieveOutput =
  typeof ErrorTrackingGroupingRulesRetrieveOutput.Type;

// The operation
/**
 *
 * @param id - A UUID string identifying this error tracking grouping rule.
 * @param project_id - Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
 */
export const errorTrackingGroupingRulesRetrieve =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: ErrorTrackingGroupingRulesRetrieveInput,
    outputSchema: ErrorTrackingGroupingRulesRetrieveOutput,
    errors: [Forbidden, NotFound] as const,
  }));
