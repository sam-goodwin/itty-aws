import * as Schema from "effect/Schema";
import { API } from "../../client";
import * as T from "../../traits";
import { BadRequest, Forbidden, NotFound } from "../../errors";

// Input Schema
export const ErrorTrackingIssuesAssignPartialUpdateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.String.pipe(T.PathParam()),
    project_id: Schema.String.pipe(T.PathParam()),
    status: Schema.optional(
      Schema.Literals([
        "archived",
        "active",
        "resolved",
        "pending_release",
        "suppressed",
      ]),
    ),
    name: Schema.optional(Schema.NullOr(Schema.String)),
    description: Schema.optional(Schema.NullOr(Schema.String)),
    first_seen: Schema.optional(Schema.String),
    assignee: Schema.optional(
      Schema.Struct({
        id: Schema.Unknown,
        type: Schema.String,
      }),
    ),
    external_issues: Schema.optional(
      Schema.Array(
        Schema.Struct({
          id: Schema.String,
          integration: Schema.Struct({
            id: Schema.Number,
            kind: Schema.String,
            display_name: Schema.String,
          }),
          integration_id: Schema.Number,
          config: Schema.Unknown,
          issue: Schema.String,
          external_url: Schema.String,
        }),
      ),
    ),
    cohort: Schema.optional(
      Schema.NullOr(
        Schema.Struct({
          id: Schema.optional(Schema.Number),
          name: Schema.optional(Schema.String),
        }),
      ),
    ),
  }).pipe(
    T.Http({
      method: "PATCH",
      path: "/api/environments/{project_id}/error_tracking/issues/{id}/assign/",
    }),
  );
export type ErrorTrackingIssuesAssignPartialUpdateInput =
  typeof ErrorTrackingIssuesAssignPartialUpdateInput.Type;

// Output Schema
export const ErrorTrackingIssuesAssignPartialUpdateOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type ErrorTrackingIssuesAssignPartialUpdateOutput =
  typeof ErrorTrackingIssuesAssignPartialUpdateOutput.Type;

// The operation
/**
 *
 * @param id - A UUID string identifying this error tracking issue.
 * @param project_id - Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
 */
export const errorTrackingIssuesAssignPartialUpdate =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: ErrorTrackingIssuesAssignPartialUpdateInput,
    outputSchema: ErrorTrackingIssuesAssignPartialUpdateOutput,
    errors: [BadRequest, Forbidden, NotFound] as const,
  }));
