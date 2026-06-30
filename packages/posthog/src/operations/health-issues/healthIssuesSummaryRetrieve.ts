import * as Schema from "effect/Schema";
import { API } from "../../client.ts";
import * as T from "../../traits.ts";

// Input Schema
export const HealthIssuesSummaryRetrieveInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    project_id: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/api/projects/{project_id}/health_issues/summary/",
    }),
  );
export type HealthIssuesSummaryRetrieveInput =
  typeof HealthIssuesSummaryRetrieveInput.Type;

// Output Schema
export const HealthIssuesSummaryRetrieveOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    total: Schema.Number,
    by_severity: Schema.Record(Schema.String, Schema.Number),
    by_kind: Schema.Record(Schema.String, Schema.Number),
  });
export type HealthIssuesSummaryRetrieveOutput =
  typeof HealthIssuesSummaryRetrieveOutput.Type;

// The operation
/**
 * Summarize active health issues
 *
 * Returns aggregated counts of active, non-dismissed health issues for the project, broken down by severity and by kind. Use for a quick overview of overall project health before drilling in with the list endpoint.
 *
 * @param project_id - Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
 */
export const healthIssuesSummaryRetrieve = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: HealthIssuesSummaryRetrieveInput,
    outputSchema: HealthIssuesSummaryRetrieveOutput,
  }),
);
