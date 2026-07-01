import * as Schema from "effect/Schema";
import { API } from "../../client.ts";
import * as T from "../../traits.ts";

// Input Schema
export interface ErrorTrackingIssuesExistsRetrieveInput {
  project_id: string;
}
export const ErrorTrackingIssuesExistsRetrieveInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    project_id: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/api/projects/{project_id}/error_tracking/issues/exists/",
    }),
  ) as unknown as Schema.Codec<ErrorTrackingIssuesExistsRetrieveInput>;

// Output Schema
export type ErrorTrackingIssuesExistsRetrieveOutput = void;
export const ErrorTrackingIssuesExistsRetrieveOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void as unknown as Schema.Codec<ErrorTrackingIssuesExistsRetrieveOutput>;

// The operation
/**
 *
 * @param project_id - Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
 */
export const errorTrackingIssuesExistsRetrieve =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: ErrorTrackingIssuesExistsRetrieveInput,
    outputSchema: ErrorTrackingIssuesExistsRetrieveOutput,
  }));
