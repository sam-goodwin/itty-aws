import * as Schema from "effect/Schema";
import { API } from "../../client.ts";
import * as T from "../../traits.ts";
import { BadRequest, Forbidden, NotFound } from "../../errors.ts";

// Input Schema
export const ErrorTrackingAssignmentRulesUpdateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.String.pipe(T.PathParam()),
    project_id: Schema.String.pipe(T.PathParam()),
    filters: Schema.optional(
      Schema.NullOr(
        Schema.Struct({
          type: Schema.Literals(["AND", "OR"]),
          values: Schema.Array(Schema.Unknown),
        }),
      ),
    ),
    assignee: Schema.optional(
      Schema.NullOr(
        Schema.Struct({
          type: Schema.Literals(["user", "role"]),
          id: Schema.Unknown,
        }),
      ),
    ),
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/api/environments/{project_id}/error_tracking/assignment_rules/{id}/",
    }),
  );
export type ErrorTrackingAssignmentRulesUpdateInput =
  typeof ErrorTrackingAssignmentRulesUpdateInput.Type;

// Output Schema
export const ErrorTrackingAssignmentRulesUpdateOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type ErrorTrackingAssignmentRulesUpdateOutput =
  typeof ErrorTrackingAssignmentRulesUpdateOutput.Type;

// The operation
/**
 *
 * @param id - A UUID string identifying this error tracking assignment rule.
 * @param project_id - Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
 */
export const errorTrackingAssignmentRulesUpdate =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: ErrorTrackingAssignmentRulesUpdateInput,
    outputSchema: ErrorTrackingAssignmentRulesUpdateOutput,
    errors: [BadRequest, Forbidden, NotFound] as const,
  }));
