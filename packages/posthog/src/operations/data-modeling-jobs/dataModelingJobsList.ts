import * as Schema from "effect/Schema";
import { API } from "../../client.ts";
import * as T from "../../traits.ts";

// Input Schema
export interface DataModelingJobsListInput {
  project_id: string;
  limit?: number;
  offset?: number;
  saved_query_id?: string;
}
export const DataModelingJobsListInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    project_id: Schema.String.pipe(T.PathParam()),
    limit: Schema.optional(Schema.Number),
    offset: Schema.optional(Schema.Number),
    saved_query_id: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/api/projects/{project_id}/data_modeling_jobs/",
    }),
  ) as unknown as Schema.Codec<DataModelingJobsListInput>;

// Output Schema
export interface DataModelingJobsListOutput {
  count: number;
  next?: string | null;
  previous?: string | null;
  results: {
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
  }[];
}
export const DataModelingJobsListOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    count: Schema.Number,
    next: Schema.optional(Schema.NullOr(Schema.String)),
    previous: Schema.optional(Schema.NullOr(Schema.String)),
    results: Schema.Array(
      Schema.Struct({
        id: Schema.String,
        saved_query_id: Schema.NullOr(Schema.String),
        status: Schema.Literals([
          "Cancelled",
          "Completed",
          "Failed",
          "Running",
        ]),
        rows_materialized: Schema.Number,
        error: Schema.NullOr(Schema.String),
        created_at: Schema.String,
        last_run_at: Schema.String,
        workflow_id: Schema.NullOr(Schema.String),
        workflow_run_id: Schema.NullOr(Schema.String),
        rows_expected: Schema.NullOr(Schema.Number),
      }),
    ),
  }) as unknown as Schema.Codec<DataModelingJobsListOutput>;

// The operation
/**
 * List data modeling jobs which are "runs" for our saved queries.
 *
 * @param limit - Number of results to return per page.
 * @param offset - The initial index from which to return the results.
 * @param project_id - Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
 */
export const dataModelingJobsList = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: DataModelingJobsListInput,
    outputSchema: DataModelingJobsListOutput,
  }),
);
