import * as Schema from "effect/Schema";
import { API } from "../../client.ts";
import * as T from "../../traits.ts";
import { BadRequest, Forbidden, NotFound } from "../../errors.ts";

// Input Schema
export const BatchExportsRunsListInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    batch_export_id: Schema.String.pipe(T.PathParam()),
    project_id: Schema.String.pipe(T.PathParam()),
    cursor: Schema.optional(Schema.String),
    ordering: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/api/projects/{project_id}/batch_exports/{batch_export_id}/runs/",
    }),
  );
export type BatchExportsRunsListInput = typeof BatchExportsRunsListInput.Type;

// Output Schema
export const BatchExportsRunsListOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    next: Schema.optional(Schema.NullOr(Schema.String)),
    previous: Schema.optional(Schema.NullOr(Schema.String)),
    results: Schema.Array(
      Schema.Struct({
        id: Schema.String,
        status: Schema.Literals([
          "Cancelled",
          "Completed",
          "ContinuedAsNew",
          "Failed",
          "FailedRetryable",
          "FailedBilling",
          "Terminated",
          "TimedOut",
          "Running",
          "Starting",
        ]),
        records_completed: Schema.optional(Schema.NullOr(Schema.Number)),
        records_failed: Schema.optional(Schema.NullOr(Schema.Number)),
        latest_error: Schema.optional(Schema.NullOr(Schema.String)),
        data_interval_start: Schema.optional(Schema.NullOr(Schema.String)),
        data_interval_end: Schema.String,
        cursor: Schema.optional(Schema.NullOr(Schema.String)),
        created_at: Schema.String,
        finished_at: Schema.optional(Schema.NullOr(Schema.String)),
        last_updated_at: Schema.String,
        records_total_count: Schema.optional(Schema.NullOr(Schema.Number)),
        bytes_exported: Schema.optional(Schema.NullOr(Schema.Number)),
        batch_export: Schema.String,
        backfill: Schema.optional(Schema.NullOr(Schema.String)),
      }),
    ),
  });
export type BatchExportsRunsListOutput = typeof BatchExportsRunsListOutput.Type;

// The operation
/**
 *
 * @param cursor - The pagination cursor value.
 * @param ordering - Which field to use when ordering the results.
 * @param project_id - Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
 */
export const batchExportsRunsList = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: BatchExportsRunsListInput,
    outputSchema: BatchExportsRunsListOutput,
    errors: [BadRequest, Forbidden, NotFound] as const,
  }),
);
