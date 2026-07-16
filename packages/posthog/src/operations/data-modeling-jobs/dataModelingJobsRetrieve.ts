import * as Schema from "effect/Schema";
import { API } from "../../client.ts";
import * as T from "../../traits.ts";

// Input Schema
export interface DataModelingJobsRetrieveInput {
  id: string;
  project_id: string;
}
export const DataModelingJobsRetrieveInput =
  /*@__PURE__*/ Schema.Struct({
    id: Schema.String.pipe(T.PathParam()),
    project_id: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/api/projects/{project_id}/data_modeling_jobs/{id}/",
    }),
  ) as unknown as Schema.Codec<DataModelingJobsRetrieveInput>;

// Output Schema
export interface DataModelingJobsRetrieveOutput {
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
export const DataModelingJobsRetrieveOutput =
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
  }) as unknown as Schema.Codec<DataModelingJobsRetrieveOutput>;

// The operation
/**
 * List data modeling jobs which are "runs" for our saved queries.
 *
 * @param id - A UUID string identifying this data modeling job.
 * @param project_id - Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
 */
export const dataModelingJobsRetrieve = /*@__PURE__*/ API.make(() => ({
  inputSchema: DataModelingJobsRetrieveInput,
  outputSchema: DataModelingJobsRetrieveOutput,
}));
