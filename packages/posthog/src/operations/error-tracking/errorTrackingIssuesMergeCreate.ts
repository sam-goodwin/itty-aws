import * as Schema from "effect/Schema";
import { API } from "../../client.ts";
import * as T from "../../traits.ts";
import { BadRequest, Forbidden, NotFound } from "../../errors.ts";

// Input Schema
export const ErrorTrackingIssuesMergeCreateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.String.pipe(T.PathParam()),
    project_id: Schema.String.pipe(T.PathParam()),
    ids: Schema.Array(Schema.String),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/api/environments/{project_id}/error_tracking/issues/{id}/merge/",
    }),
  );
export type ErrorTrackingIssuesMergeCreateInput =
  typeof ErrorTrackingIssuesMergeCreateInput.Type;

// Output Schema
export const ErrorTrackingIssuesMergeCreateOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    success: Schema.Boolean,
  });
export type ErrorTrackingIssuesMergeCreateOutput =
  typeof ErrorTrackingIssuesMergeCreateOutput.Type;

// The operation
/**
 *
 * @param id - A UUID string identifying this error tracking issue.
 * @param project_id - Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
 */
export const errorTrackingIssuesMergeCreate =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: ErrorTrackingIssuesMergeCreateInput,
    outputSchema: ErrorTrackingIssuesMergeCreateOutput,
    errors: [BadRequest, Forbidden, NotFound] as const,
  }));
