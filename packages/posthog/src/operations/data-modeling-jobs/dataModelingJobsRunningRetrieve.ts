import * as Schema from "effect/Schema";
import { API } from "../../client.ts";
import * as T from "../../traits.ts";

// Input Schema
export interface DataModelingJobsRunningRetrieveInput {
  project_id: string;
}
export const DataModelingJobsRunningRetrieveInput =
  /*@__PURE__*/ Schema.Struct({
    project_id: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/api/projects/{project_id}/data_modeling_jobs/running/",
    }),
  ) as unknown as Schema.Codec<DataModelingJobsRunningRetrieveInput>;

// Output Schema
export interface DataModelingJobsRunningRetrieveOutput {
  id: string;
  saved_query_id: string | null;
  status: "Cancelled" | "Completed" | "Failed" | "Running";
  rows_materialized: number;
  error: string | null;
  created_at: string;
  last_run_at: string;
  workflow_id: string | null;
  workflow_run_id: string | null;
  rows_expected: number | null;
}
export const DataModelingJobsRunningRetrieveOutput =
  /*@__PURE__*/ Schema.Struct({
    id: Schema.String,
    saved_query_id: Schema.NullOr(Schema.String),
    status: Schema.Literals(["Cancelled", "Completed", "Failed", "Running"]),
    rows_materialized: Schema.Number,
    error: Schema.NullOr(Schema.String),
    created_at: Schema.String,
    last_run_at: Schema.String,
    workflow_id: Schema.NullOr(Schema.String),
    workflow_run_id: Schema.NullOr(Schema.String),
    rows_expected: Schema.NullOr(Schema.Number),
  }) as unknown as Schema.Codec<DataModelingJobsRunningRetrieveOutput>;

// The operation
/**
 * Get all currently running jobs from the v2 backend.
 *
 * @param project_id - Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
 */
export const dataModelingJobsRunningRetrieve =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: DataModelingJobsRunningRetrieveInput,
    outputSchema: DataModelingJobsRunningRetrieveOutput,
  }));
