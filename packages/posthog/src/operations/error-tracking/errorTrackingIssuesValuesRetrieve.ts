import * as Schema from "effect/Schema";
import { API } from "../../client.ts";
import * as T from "../../traits.ts";
import { Forbidden, NotFound } from "../../errors.ts";

// Input Schema
export const ErrorTrackingIssuesValuesRetrieveInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    project_id: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/api/environments/{project_id}/error_tracking/issues/values/",
    }),
  );
export type ErrorTrackingIssuesValuesRetrieveInput =
  typeof ErrorTrackingIssuesValuesRetrieveInput.Type;

// Output Schema
export const ErrorTrackingIssuesValuesRetrieveOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type ErrorTrackingIssuesValuesRetrieveOutput =
  typeof ErrorTrackingIssuesValuesRetrieveOutput.Type;

// The operation
/**
 *
 * @param project_id - Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
 */
export const errorTrackingIssuesValuesRetrieve =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: ErrorTrackingIssuesValuesRetrieveInput,
    outputSchema: ErrorTrackingIssuesValuesRetrieveOutput,
    errors: [Forbidden, NotFound] as const,
  }));
