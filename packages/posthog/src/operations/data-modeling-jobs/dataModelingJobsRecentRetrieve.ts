import * as Schema from "effect/Schema";
import { API } from "../../client.ts";
import * as T from "../../traits.ts";

// Input Schema
export const DataModelingJobsRecentRetrieveInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    project_id: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/api/projects/{project_id}/data_modeling_jobs/recent/",
    }),
  );
export type DataModelingJobsRecentRetrieveInput =
  typeof DataModelingJobsRecentRetrieveInput.Type;

// Output Schema
export const DataModelingJobsRecentRetrieveOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
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
  });
export type DataModelingJobsRecentRetrieveOutput =
  typeof DataModelingJobsRecentRetrieveOutput.Type;

// The operation
/**
 * Get the most recent non-running job for each saved query from the v2 backend.
 *
 * @param project_id - Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
 */
export const dataModelingJobsRecentRetrieve =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: DataModelingJobsRecentRetrieveInput,
    outputSchema: DataModelingJobsRecentRetrieveOutput,
  }));
