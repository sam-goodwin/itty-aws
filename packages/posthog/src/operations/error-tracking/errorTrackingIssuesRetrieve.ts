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
    id: Schema.optional(Schema.String),
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
        id: Schema.optional(Schema.Unknown),
        type: Schema.optional(Schema.String),
      }),
    ),
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
          config: Schema.optional(Schema.Unknown),
          issue: Schema.optional(Schema.String),
          external_url: Schema.optional(Schema.String),
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
