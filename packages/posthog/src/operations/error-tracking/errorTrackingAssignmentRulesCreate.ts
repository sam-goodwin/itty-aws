import * as Schema from "effect/Schema";
import { API } from "../../client.ts";
import * as T from "../../traits.ts";
import { BadRequest, Forbidden, NotFound } from "../../errors.ts";

// Input Schema
export const ErrorTrackingAssignmentRulesCreateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    project_id: Schema.String.pipe(T.PathParam()),
    filters: Schema.optional(
      Schema.Struct({
        type: Schema.optional(Schema.Literals(["AND", "OR"])),
        values: Schema.optional(Schema.Array(Schema.Unknown)),
      }),
    ),
    assignee: Schema.optional(
      Schema.Struct({
        type: Schema.optional(Schema.Literals(["user", "role"])),
        id: Schema.optional(Schema.Unknown),
      }),
    ),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/api/environments/{project_id}/error_tracking/assignment_rules/",
    }),
  );
export type ErrorTrackingAssignmentRulesCreateInput =
  typeof ErrorTrackingAssignmentRulesCreateInput.Type;

// Output Schema
export const ErrorTrackingAssignmentRulesCreateOutput =
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
    order_key: Schema.optional(Schema.Number),
    disabled_data: Schema.optional(Schema.NullOr(Schema.Unknown)),
    created_at: Schema.optional(Schema.String),
    updated_at: Schema.optional(Schema.String),
  });
export type ErrorTrackingAssignmentRulesCreateOutput =
  typeof ErrorTrackingAssignmentRulesCreateOutput.Type;

// The operation
/**
 *
 * @param project_id - Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
 */
export const errorTrackingAssignmentRulesCreate =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: ErrorTrackingAssignmentRulesCreateInput,
    outputSchema: ErrorTrackingAssignmentRulesCreateOutput,
    errors: [BadRequest, Forbidden, NotFound] as const,
  }));
