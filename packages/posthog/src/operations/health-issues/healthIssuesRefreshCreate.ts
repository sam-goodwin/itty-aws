import * as Schema from "effect/Schema";
import { API } from "../../client.ts";
import * as T from "../../traits.ts";

// Input Schema
export interface HealthIssuesRefreshCreateInput {
  project_id: string;
}
export const HealthIssuesRefreshCreateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    project_id: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/api/projects/{project_id}/health_issues/refresh/",
    }),
  ) as unknown as Schema.Codec<HealthIssuesRefreshCreateInput>;

// Output Schema
export type HealthIssuesRefreshCreateOutput = void;
export const HealthIssuesRefreshCreateOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void as unknown as Schema.Codec<HealthIssuesRefreshCreateOutput>;

// The operation
/**
 *
 * @param project_id - Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
 */
export const healthIssuesRefreshCreate = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: HealthIssuesRefreshCreateInput,
    outputSchema: HealthIssuesRefreshCreateOutput,
  }),
);
