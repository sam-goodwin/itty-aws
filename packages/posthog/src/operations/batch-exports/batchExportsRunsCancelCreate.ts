import * as Schema from "effect/Schema";
import { API } from "../../client.ts";
import * as T from "../../traits.ts";
import { BadRequest, Forbidden, NotFound } from "../../errors.ts";

// Input Schema
export interface BatchExportsRunsCancelCreateInput {
  batch_export_id: string;
  id: string;
  project_id: string;
  status?:
    | "Cancelled"
    | "Completed"
    | "ContinuedAsNew"
    | "Failed"
    | "FailedRetryable"
    | "FailedBilling"
    | "Terminated"
    | "TimedOut"
    | "Running"
    | "Starting";
  records_completed?: number | null;
  records_failed?: number | null;
  latest_error?: string | null;
  data_interval_start?: string | null;
  data_interval_end?: string;
  cursor?: string | null;
  created_at?: string;
  finished_at?: string | null;
  last_updated_at?: string;
  records_total_count?: number | null;
  bytes_exported?: number | null;
  batch_export?: string | null;
  batch_export_on_demand?: string | null;
  backfill?: string | null;
}
export const BatchExportsRunsCancelCreateInput =
  /*@__PURE__*/ Schema.Struct({
    batch_export_id: Schema.String.pipe(T.PathParam()),
    id: Schema.String.pipe(T.PathParam()),
    project_id: Schema.String.pipe(T.PathParam()),
    status: Schema.optional(
      Schema.Literals([
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
    ),
    records_completed: Schema.optional(Schema.NullOr(Schema.Number)),
    records_failed: Schema.optional(Schema.NullOr(Schema.Number)),
    latest_error: Schema.optional(Schema.NullOr(Schema.String)),
    data_interval_start: Schema.optional(Schema.NullOr(Schema.String)),
    data_interval_end: Schema.optional(Schema.String),
    cursor: Schema.optional(Schema.NullOr(Schema.String)),
    created_at: Schema.optional(Schema.String),
    finished_at: Schema.optional(Schema.NullOr(Schema.String)),
    last_updated_at: Schema.optional(Schema.String),
    records_total_count: Schema.optional(Schema.NullOr(Schema.Number)),
    bytes_exported: Schema.optional(Schema.NullOr(Schema.Number)),
    batch_export: Schema.optional(Schema.NullOr(Schema.String)),
    batch_export_on_demand: Schema.optional(Schema.NullOr(Schema.String)),
    backfill: Schema.optional(Schema.NullOr(Schema.String)),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/api/projects/{project_id}/batch_exports/{batch_export_id}/runs/{id}/cancel/",
    }),
  ) as unknown as Schema.Codec<BatchExportsRunsCancelCreateInput>;

// Output Schema
export type BatchExportsRunsCancelCreateOutput = void;
export const BatchExportsRunsCancelCreateOutput =
  /*@__PURE__*/ Schema.Void as unknown as Schema.Codec<BatchExportsRunsCancelCreateOutput>;

// The operation
/**
 * Cancel a batch export run.
 *
 * @param id - A UUID string identifying this batch export run.
 * @param project_id - Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
 */
export const batchExportsRunsCancelCreate =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: BatchExportsRunsCancelCreateInput,
    outputSchema: BatchExportsRunsCancelCreateOutput,
    errors: [BadRequest, Forbidden, NotFound] as const,
  }));
