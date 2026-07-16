import * as Schema from "effect/Schema";
import { API } from "../../client.ts";
import * as T from "../../traits.ts";

// Input Schema
export interface ErrorTrackingIssuesValuesRetrieveInput {
  project_id: string;
}
export const ErrorTrackingIssuesValuesRetrieveInput =
  /*@__PURE__*/ Schema.Struct({
    project_id: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/api/projects/{project_id}/error_tracking/issues/values/",
    }),
  ) as unknown as Schema.Codec<ErrorTrackingIssuesValuesRetrieveInput>;

// Output Schema
export type ErrorTrackingIssuesValuesRetrieveOutput = void;
export const ErrorTrackingIssuesValuesRetrieveOutput =
  /*@__PURE__*/ Schema.Void as unknown as Schema.Codec<ErrorTrackingIssuesValuesRetrieveOutput>;

// The operation
/**
 *
 * @param project_id - Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
 */
export const errorTrackingIssuesValuesRetrieve =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: ErrorTrackingIssuesValuesRetrieveInput,
    outputSchema: ErrorTrackingIssuesValuesRetrieveOutput,
  }));
