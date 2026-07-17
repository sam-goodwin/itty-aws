import * as Schema from "effect/Schema";
import { API } from "../../client.ts";
import * as T from "../../traits.ts";

// Input Schema
export interface HealthIssuesSummaryRetrieveInput {
  project_id: string;
}
export const HealthIssuesSummaryRetrieveInput =
  /*@__PURE__*/ Schema.Struct({
    project_id: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/api/projects/{project_id}/health_issues/summary/",
    }),
  ) as unknown as Schema.Codec<HealthIssuesSummaryRetrieveInput>;

// Output Schema
export interface HealthIssuesSummaryRetrieveOutput {
  total: number;
  by_severity: Record<string, number>;
  by_kind: Record<string, number>;
}
export const HealthIssuesSummaryRetrieveOutput =
  /*@__PURE__*/ Schema.Struct({
    total: Schema.Number,
    by_severity: Schema.Record(Schema.String, Schema.Number),
    by_kind: Schema.Record(Schema.String, Schema.Number),
  }) as unknown as Schema.Codec<HealthIssuesSummaryRetrieveOutput>;

// The operation
/**
 * Summarize active health issues
 *
 * Returns aggregated counts of active, non-dismissed health issues for the project, broken down by severity and by kind. Use for a quick overview of overall project health before drilling in with the list endpoint.
 *
 * @param project_id - Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
 */
export const healthIssuesSummaryRetrieve = /*@__PURE__*/ API.make(() => ({
  inputSchema: HealthIssuesSummaryRetrieveInput,
  outputSchema: HealthIssuesSummaryRetrieveOutput,
}));
