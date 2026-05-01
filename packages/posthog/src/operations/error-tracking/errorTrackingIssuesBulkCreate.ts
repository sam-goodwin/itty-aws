import * as Schema from "effect/Schema";
import { API } from "../../client.ts";
import * as T from "../../traits.ts";
import { BadRequest, Forbidden, NotFound } from "../../errors.ts";

// Input Schema
export const ErrorTrackingIssuesBulkCreateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    project_id: Schema.String.pipe(T.PathParam()),
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
  }).pipe(
    T.Http({
      method: "POST",
      path: "/api/environments/{project_id}/error_tracking/issues/bulk/",
    }),
  );
export type ErrorTrackingIssuesBulkCreateInput =
  typeof ErrorTrackingIssuesBulkCreateInput.Type;

// Output Schema
export const ErrorTrackingIssuesBulkCreateOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type ErrorTrackingIssuesBulkCreateOutput =
  typeof ErrorTrackingIssuesBulkCreateOutput.Type;

// The operation
/**
 *
 * @param project_id - Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
 */
export const errorTrackingIssuesBulkCreate =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: ErrorTrackingIssuesBulkCreateInput,
    outputSchema: ErrorTrackingIssuesBulkCreateOutput,
    errors: [BadRequest, Forbidden, NotFound] as const,
  }));
