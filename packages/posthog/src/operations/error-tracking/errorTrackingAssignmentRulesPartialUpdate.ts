import * as Schema from "effect/Schema";
import { API } from "../../client.ts";
import * as T from "../../traits.ts";
import { BadRequest, Forbidden, NotFound } from "../../errors.ts";

// Input Schema
export const ErrorTrackingAssignmentRulesPartialUpdateInput =
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
      method: "PATCH",
      path: "/api/environments/{project_id}/error_tracking/assignment_rules/{id}/",
    }),
  );
export type ErrorTrackingAssignmentRulesPartialUpdateInput =
  typeof ErrorTrackingAssignmentRulesPartialUpdateInput.Type;

// Output Schema
export const ErrorTrackingAssignmentRulesPartialUpdateOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type ErrorTrackingAssignmentRulesPartialUpdateOutput =
  typeof ErrorTrackingAssignmentRulesPartialUpdateOutput.Type;

// The operation
/**
 *
 * @param id - A UUID string identifying this error tracking assignment rule.
 * @param project_id - Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
 */
export const errorTrackingAssignmentRulesPartialUpdate =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: ErrorTrackingAssignmentRulesPartialUpdateInput,
    outputSchema: ErrorTrackingAssignmentRulesPartialUpdateOutput,
    errors: [BadRequest, Forbidden, NotFound] as const,
  }));
