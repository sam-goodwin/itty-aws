import * as Schema from "effect/Schema";
import { API } from "../../client.ts";
import * as T from "../../traits.ts";
import { BadRequest, Forbidden, NotFound } from "../../errors.ts";

// Input Schema
export const ErrorTrackingAssignmentRulesReorderPartialUpdateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    project_id: Schema.String.pipe(T.PathParam()),
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
  }).pipe(
    T.Http({
      method: "PATCH",
      path: "/api/environments/{project_id}/error_tracking/assignment_rules/reorder/",
    }),
  );
export type ErrorTrackingAssignmentRulesReorderPartialUpdateInput =
  typeof ErrorTrackingAssignmentRulesReorderPartialUpdateInput.Type;

// Output Schema
export const ErrorTrackingAssignmentRulesReorderPartialUpdateOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type ErrorTrackingAssignmentRulesReorderPartialUpdateOutput =
  typeof ErrorTrackingAssignmentRulesReorderPartialUpdateOutput.Type;

// The operation
/**
 *
 * @param project_id - Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
 */
export const errorTrackingAssignmentRulesReorderPartialUpdate =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: ErrorTrackingAssignmentRulesReorderPartialUpdateInput,
    outputSchema: ErrorTrackingAssignmentRulesReorderPartialUpdateOutput,
    errors: [BadRequest, Forbidden, NotFound] as const,
  }));
