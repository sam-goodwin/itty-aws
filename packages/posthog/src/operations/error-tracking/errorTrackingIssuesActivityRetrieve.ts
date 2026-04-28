import * as Schema from "effect/Schema";
import { API } from "../../client";
import * as T from "../../traits";
import { Forbidden, NotFound } from "../../errors";

// Input Schema
export const ErrorTrackingIssuesActivityRetrieveInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.String.pipe(T.PathParam()),
    project_id: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/api/environments/{project_id}/error_tracking/issues/{id}/activity/",
    }),
  );
export type ErrorTrackingIssuesActivityRetrieveInput =
  typeof ErrorTrackingIssuesActivityRetrieveInput.Type;

// Output Schema
export const ErrorTrackingIssuesActivityRetrieveOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type ErrorTrackingIssuesActivityRetrieveOutput =
  typeof ErrorTrackingIssuesActivityRetrieveOutput.Type;

// The operation
/**
 *
 * @param id - A UUID string identifying this error tracking issue.
 * @param project_id - Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
 */
export const errorTrackingIssuesActivityRetrieve =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: ErrorTrackingIssuesActivityRetrieveInput,
    outputSchema: ErrorTrackingIssuesActivityRetrieveOutput,
    errors: [Forbidden, NotFound] as const,
  }));
