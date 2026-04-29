import * as Schema from "effect/Schema";
import { API } from "../../client.ts";
import * as T from "../../traits.ts";
import { Forbidden, NotFound } from "../../errors.ts";

// Input Schema
export const ErrorTrackingIssuesRetrieveInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.String.pipe(T.PathParam()),
    project_id: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/api/environments/{project_id}/error_tracking/issues/{id}/",
    }),
  );
export type ErrorTrackingIssuesRetrieveInput =
  typeof ErrorTrackingIssuesRetrieveInput.Type;

// Output Schema
export const ErrorTrackingIssuesRetrieveOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.String,
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
    first_seen: Schema.String,
    assignee: Schema.Struct({
      id: Schema.Unknown,
      type: Schema.String,
    }),
    external_issues: Schema.Array(
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
    cohort: Schema.NullOr(
      Schema.Struct({
        id: Schema.optional(Schema.Number),
        name: Schema.optional(Schema.String),
      }),
    ),
  });
export type ErrorTrackingIssuesRetrieveOutput =
  typeof ErrorTrackingIssuesRetrieveOutput.Type;

// The operation
/**
 *
 * @param id - A UUID string identifying this error tracking issue.
 * @param project_id - Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
 */
export const errorTrackingIssuesRetrieve = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: ErrorTrackingIssuesRetrieveInput,
    outputSchema: ErrorTrackingIssuesRetrieveOutput,
    errors: [Forbidden, NotFound] as const,
  }),
);
