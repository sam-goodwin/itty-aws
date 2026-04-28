import * as Schema from "effect/Schema";
import { API } from "../../client";
import * as T from "../../traits";
import { BadRequest, Forbidden, NotFound } from "../../errors";

// Input Schema
export const ErrorTrackingIssuesListInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    project_id: Schema.String.pipe(T.PathParam()),
    limit: Schema.optional(Schema.Number),
    offset: Schema.optional(Schema.Number),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/api/environments/{project_id}/error_tracking/issues/",
    }),
  );
export type ErrorTrackingIssuesListInput =
  typeof ErrorTrackingIssuesListInput.Type;

// Output Schema
export const ErrorTrackingIssuesListOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    count: Schema.Number,
    next: Schema.optional(Schema.NullOr(Schema.String)),
    previous: Schema.optional(Schema.NullOr(Schema.String)),
    results: Schema.Array(
      Schema.Struct({
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
      }),
    ),
  });
export type ErrorTrackingIssuesListOutput =
  typeof ErrorTrackingIssuesListOutput.Type;

// The operation
/**
 *
 * @param limit - Number of results to return per page.
 * @param offset - The initial index from which to return the results.
 * @param project_id - Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
 */
export const errorTrackingIssuesList = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: ErrorTrackingIssuesListInput,
    outputSchema: ErrorTrackingIssuesListOutput,
    errors: [BadRequest, Forbidden, NotFound] as const,
  }),
);
