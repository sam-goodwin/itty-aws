import * as Schema from "effect/Schema";
import { API } from "../../client.ts";
import * as T from "../../traits.ts";

// Input Schema
export const ErrorTrackingIssuesCohortUpdateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.String.pipe(T.PathParam()),
    project_id: Schema.String.pipe(T.PathParam()),
    status: Schema.String,
    name: Schema.NullOr(Schema.String),
    description: Schema.NullOr(Schema.String),
    first_seen: Schema.NullOr(Schema.String),
    assignee: Schema.Unknown,
    external_issues: Schema.Array(
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
    cohort: Schema.Unknown,
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/api/projects/{project_id}/error_tracking/issues/{id}/cohort/",
    }),
  );
export type ErrorTrackingIssuesCohortUpdateInput =
  typeof ErrorTrackingIssuesCohortUpdateInput.Type;

// Output Schema
export const ErrorTrackingIssuesCohortUpdateOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type ErrorTrackingIssuesCohortUpdateOutput =
  typeof ErrorTrackingIssuesCohortUpdateOutput.Type;

// The operation
/**
 *
 * @param project_id - Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
 */
export const errorTrackingIssuesCohortUpdate =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: ErrorTrackingIssuesCohortUpdateInput,
    outputSchema: ErrorTrackingIssuesCohortUpdateOutput,
  }));
