import * as Schema from "effect/Schema";
import { API } from "../../client.ts";
import * as T from "../../traits.ts";

// Input Schema
export interface ErrorTrackingIssuesSplitCreateInput {
  id: string;
  project_id: string;
  fingerprints?: {
    fingerprint?: string;
    name?: string;
    description?: string;
  }[];
}
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
      path: "/api/projects/{project_id}/error_tracking/issues/{id}/split/",
    }),
  ) as unknown as Schema.Codec<ErrorTrackingIssuesSplitCreateInput>;

// Output Schema
export interface ErrorTrackingIssuesSplitCreateOutput {
  success?: boolean;
  new_issue_ids?: string[];
}
export const ErrorTrackingIssuesSplitCreateOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    success: Schema.optional(Schema.Boolean),
    new_issue_ids: Schema.optional(Schema.Array(Schema.String)),
  }) as unknown as Schema.Codec<ErrorTrackingIssuesSplitCreateOutput>;

// The operation
/**
 *
 * @param project_id - Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
 */
export const errorTrackingIssuesSplitCreate =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: ErrorTrackingIssuesSplitCreateInput,
    outputSchema: ErrorTrackingIssuesSplitCreateOutput,
  }));
