import * as Schema from "effect/Schema";
import { API } from "../../client.ts";
import * as T from "../../traits.ts";

// Input Schema
export const ErrorTrackingIssuesAssignPartialUpdateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.String.pipe(T.PathParam()),
    project_id: Schema.String.pipe(T.PathParam()),
    status: Schema.optional(Schema.String),
    name: Schema.optional(Schema.NullOr(Schema.String)),
    description: Schema.optional(Schema.NullOr(Schema.String)),
    first_seen: Schema.optional(Schema.NullOr(Schema.String)),
    assignee: Schema.optional(Schema.Unknown),
    external_issues: Schema.optional(
      Schema.Array(
        Schema.Struct({
          id: Schema.optional(Schema.String),
          integration: Schema.optional(
            Schema.Struct({
              id: Schema.optional(Schema.Number),
              kind: Schema.optional(Schema.String),
              display_name: Schema.optional(Schema.String),
            }),
          ),
          integration_id: Schema.optional(Schema.Number),
          config: Schema.optional(Schema.Record(Schema.String, Schema.String)),
          issue: Schema.optional(Schema.String),
          external_url: Schema.optional(Schema.String),
        }),
      ),
    ),
    cohort: Schema.optional(Schema.Unknown),
  }).pipe(
    T.Http({
      method: "PATCH",
      path: "/api/projects/{project_id}/error_tracking/issues/{id}/assign/",
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
 * @param project_id - Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
 */
export const errorTrackingIssuesAssignPartialUpdate =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: ErrorTrackingIssuesAssignPartialUpdateInput,
    outputSchema: ErrorTrackingIssuesAssignPartialUpdateOutput,
  }));
