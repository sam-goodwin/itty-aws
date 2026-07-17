import * as Schema from "effect/Schema";
import { API } from "../../client.ts";
import * as T from "../../traits.ts";

// Input Schema
export interface ErrorTrackingIssuesAllActivityRetrieveInput {
  project_id: string;
}
export const ErrorTrackingIssuesAllActivityRetrieveInput =
  /*@__PURE__*/ Schema.Struct({
    project_id: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/api/projects/{project_id}/error_tracking/issues/activity/",
    }),
  ) as unknown as Schema.Codec<ErrorTrackingIssuesAllActivityRetrieveInput>;

// Output Schema
export type ErrorTrackingIssuesAllActivityRetrieveOutput = void;
export const ErrorTrackingIssuesAllActivityRetrieveOutput =
  /*@__PURE__*/ Schema.Void as unknown as Schema.Codec<ErrorTrackingIssuesAllActivityRetrieveOutput>;

// The operation
/**
 *
 * @param project_id - Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
 */
export const errorTrackingIssuesAllActivityRetrieve =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: ErrorTrackingIssuesAllActivityRetrieveInput,
    outputSchema: ErrorTrackingIssuesAllActivityRetrieveOutput,
  }));
