import * as Schema from "effect/Schema";
import { API } from "../../client.ts";
import * as T from "../../traits.ts";
import { BadRequest, Forbidden, NotFound } from "../../errors.ts";

// Input Schema
export const BatchExportsRunsCancelCreateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    batch_export_id: Schema.String.pipe(T.PathParam()),
    id: Schema.String.pipe(T.PathParam()),
    project_id: Schema.String.pipe(T.PathParam()),
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
  }).pipe(
    T.Http({
      method: "POST",
      path: "/api/projects/{project_id}/batch_exports/{batch_export_id}/runs/{id}/cancel/",
    }),
  );
export type BatchExportsRunsCancelCreateInput =
  typeof BatchExportsRunsCancelCreateInput.Type;

// Output Schema
export const BatchExportsRunsCancelCreateOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type BatchExportsRunsCancelCreateOutput =
  typeof BatchExportsRunsCancelCreateOutput.Type;

// The operation
/**
 * Cancel a batch export run.
 *
 * @param id - A UUID string identifying this batch export run.
 * @param project_id - Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
 */
export const batchExportsRunsCancelCreate =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: BatchExportsRunsCancelCreateInput,
    outputSchema: BatchExportsRunsCancelCreateOutput,
    errors: [BadRequest, Forbidden, NotFound] as const,
  }));
