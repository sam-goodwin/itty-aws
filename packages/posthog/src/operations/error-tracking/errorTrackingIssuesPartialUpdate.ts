import * as Schema from "effect/Schema";
import { API } from "../../client";
import * as T from "../../traits";
import { BadRequest, Forbidden, NotFound } from "../../errors";

// Input Schema
export const ErrorTrackingIssuesPartialUpdateInput =
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
      path: "/api/environments/{project_id}/error_tracking/issues/{id}/",
    }),
  );
export type ErrorTrackingIssuesPartialUpdateInput =
  typeof ErrorTrackingIssuesPartialUpdateInput.Type;

// Output Schema
export const ErrorTrackingIssuesPartialUpdateOutput =
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
export type ErrorTrackingIssuesPartialUpdateOutput =
  typeof ErrorTrackingIssuesPartialUpdateOutput.Type;

// The operation
/**
 *
 * @param id - A UUID string identifying this error tracking issue.
 * @param project_id - Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
 */
export const errorTrackingIssuesPartialUpdate =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: ErrorTrackingIssuesPartialUpdateInput,
    outputSchema: ErrorTrackingIssuesPartialUpdateOutput,
    errors: [BadRequest, Forbidden, NotFound] as const,
  }));
