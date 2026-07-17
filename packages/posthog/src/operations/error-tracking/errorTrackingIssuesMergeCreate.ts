import * as Schema from "effect/Schema";
import { API } from "../../client.ts";
import * as T from "../../traits.ts";

// Input Schema
export interface ErrorTrackingIssuesMergeCreateInput {
  id: string;
  project_id: string;
  ids?: string[];
}
export const ErrorTrackingIssuesMergeCreateInput =
  /*@__PURE__*/ Schema.Struct({
    id: Schema.String.pipe(T.PathParam()),
    project_id: Schema.String.pipe(T.PathParam()),
    ids: Schema.optional(Schema.Array(Schema.String)),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/api/projects/{project_id}/error_tracking/issues/{id}/merge/",
    }),
  ) as unknown as Schema.Codec<ErrorTrackingIssuesMergeCreateInput>;

// Output Schema
export interface ErrorTrackingIssuesMergeCreateOutput {
  success?: boolean;
}
export const ErrorTrackingIssuesMergeCreateOutput =
  /*@__PURE__*/ Schema.Struct({
    success: Schema.optional(Schema.Boolean),
  }) as unknown as Schema.Codec<ErrorTrackingIssuesMergeCreateOutput>;

// The operation
/**
 *
 * @param project_id - Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
 */
export const errorTrackingIssuesMergeCreate =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: ErrorTrackingIssuesMergeCreateInput,
    outputSchema: ErrorTrackingIssuesMergeCreateOutput,
  }));
