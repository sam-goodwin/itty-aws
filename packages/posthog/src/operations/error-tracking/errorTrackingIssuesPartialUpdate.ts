import * as Schema from "effect/Schema";
import { API } from "../../client.ts";
import * as T from "../../traits.ts";

// Input Schema
export const ErrorTrackingIssuesPartialUpdateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.String.pipe(T.PathParam()),
    project_id: Schema.String.pipe(T.PathParam()),
    status: Schema.optional(
      Schema.Literals(["active", "resolved", "suppressed"]),
    ),
    name: Schema.optional(Schema.NullOr(Schema.String)),
    description: Schema.optional(Schema.NullOr(Schema.String)),
  }).pipe(
    T.Http({
      method: "PATCH",
      path: "/api/projects/{project_id}/error_tracking/issues/{id}/",
    }),
  );
export type ErrorTrackingIssuesPartialUpdateInput =
  typeof ErrorTrackingIssuesPartialUpdateInput.Type;

// Output Schema
export const ErrorTrackingIssuesPartialUpdateOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.String,
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
  });
export type ErrorTrackingIssuesPartialUpdateOutput =
  typeof ErrorTrackingIssuesPartialUpdateOutput.Type;

// The operation
/**
 *
 * @param project_id - Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
 */
export const errorTrackingIssuesPartialUpdate =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: ErrorTrackingIssuesPartialUpdateInput,
    outputSchema: ErrorTrackingIssuesPartialUpdateOutput,
  }));
