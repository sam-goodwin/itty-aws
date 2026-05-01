import * as Schema from "effect/Schema";
import { API } from "../../client.ts";
import * as T from "../../traits.ts";
import { BadRequest, Forbidden, NotFound } from "../../errors.ts";

// Input Schema
export const ErrorTrackingIssuesSplitCreateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.String.pipe(T.PathParam()),
    project_id: Schema.String.pipe(T.PathParam()),
    fingerprints: Schema.optional(
      Schema.Array(
        Schema.Struct({
          fingerprint: Schema.optional(Schema.String),
          name: Schema.optional(Schema.String),
          description: Schema.optional(Schema.String),
        }),
      ),
    ),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/api/environments/{project_id}/error_tracking/issues/{id}/split/",
    }),
  );
export type ErrorTrackingIssuesSplitCreateInput =
  typeof ErrorTrackingIssuesSplitCreateInput.Type;

// Output Schema
export const ErrorTrackingIssuesSplitCreateOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    success: Schema.optional(Schema.Boolean),
    new_issue_ids: Schema.optional(Schema.Array(Schema.String)),
  });
export type ErrorTrackingIssuesSplitCreateOutput =
  typeof ErrorTrackingIssuesSplitCreateOutput.Type;

// The operation
/**
 *
 * @param id - A UUID string identifying this error tracking issue.
 * @param project_id - Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
 */
export const errorTrackingIssuesSplitCreate =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: ErrorTrackingIssuesSplitCreateInput,
    outputSchema: ErrorTrackingIssuesSplitCreateOutput,
    errors: [BadRequest, Forbidden, NotFound] as const,
  }));
