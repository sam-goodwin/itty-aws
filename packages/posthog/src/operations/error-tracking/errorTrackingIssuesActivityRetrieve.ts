import * as Schema from "effect/Schema";
import { API } from "../../client.ts";
import * as T from "../../traits.ts";

// Input Schema
export interface ErrorTrackingIssuesActivityRetrieveInput {
  id: string;
  project_id: string;
}
export const ErrorTrackingIssuesActivityRetrieveInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.String.pipe(T.PathParam()),
    project_id: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/api/projects/{project_id}/error_tracking/issues/{id}/activity/",
    }),
  ) as unknown as Schema.Codec<ErrorTrackingIssuesActivityRetrieveInput>;

// Output Schema
export type ErrorTrackingIssuesActivityRetrieveOutput = void;
export const ErrorTrackingIssuesActivityRetrieveOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void as unknown as Schema.Codec<ErrorTrackingIssuesActivityRetrieveOutput>;

// The operation
/**
 *
 * @param project_id - Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
 */
export const errorTrackingIssuesActivityRetrieve =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: ErrorTrackingIssuesActivityRetrieveInput,
    outputSchema: ErrorTrackingIssuesActivityRetrieveOutput,
  }));
