import * as Schema from "effect/Schema";
import { API } from "../../client.ts";
import * as T from "../../traits.ts";
import { BadRequest, Forbidden, NotFound } from "../../errors.ts";

// Input Schema
export interface BatchExportsBackfillsCreateInput {
  batch_export_id: string;
  project_id: string;
  id?: string;
  progress?: {
    total_runs?: number | null;
    finished_runs?: number | null;
    progress?: number | null;
  } | null;
  start_at?: string | null;
  end_at?: string | null;
  status?:
    | "Cancelled"
    | "Completed"
    | "ContinuedAsNew"
    | "Failed"
    | "FailedRetryable"
    | "Terminated"
    | "TimedOut"
    | "Running"
    | "Starting";
  created_at?: string;
  finished_at?: string | null;
  last_updated_at?: string;
  total_records_count?: number | null;
  adjusted_start_at?: string | null;
  team?: number;
  batch_export?: string;
}
export const BatchExportsBackfillsCreateInput =
  /*@__PURE__*/ Schema.Struct({
    batch_export_id: Schema.String.pipe(T.PathParam()),
    project_id: Schema.String.pipe(T.PathParam()),
    id: Schema.optional(Schema.String),
    progress: Schema.optional(
      Schema.NullOr(
        Schema.Struct({
          total_runs: Schema.optional(Schema.NullOr(Schema.Number)),
          finished_runs: Schema.optional(Schema.NullOr(Schema.Number)),
          progress: Schema.optional(Schema.NullOr(Schema.Number)),
        }),
      ),
    ),
    start_at: Schema.optional(Schema.NullOr(Schema.String)),
    end_at: Schema.optional(Schema.NullOr(Schema.String)),
    status: Schema.optional(
      Schema.Literals([
        "Cancelled",
        "Completed",
        "ContinuedAsNew",
        "Failed",
        "FailedRetryable",
        "Terminated",
        "TimedOut",
        "Running",
        "Starting",
      ]),
    ),
    created_at: Schema.optional(Schema.String),
    finished_at: Schema.optional(Schema.NullOr(Schema.String)),
    last_updated_at: Schema.optional(Schema.String),
    total_records_count: Schema.optional(Schema.NullOr(Schema.Number)),
    adjusted_start_at: Schema.optional(Schema.NullOr(Schema.String)),
    team: Schema.optional(Schema.Number),
    batch_export: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/api/projects/{project_id}/batch_exports/{batch_export_id}/backfills/",
    }),
  ) as unknown as Schema.Codec<BatchExportsBackfillsCreateInput>;

// Output Schema
export interface BatchExportsBackfillsCreateOutput {
  id?: string;
  progress?: {
    total_runs?: number | null;
    finished_runs?: number | null;
    progress?: number | null;
  } | null;
  start_at?: string | null;
  end_at?: string | null;
  status?:
    | "Cancelled"
    | "Completed"
    | "ContinuedAsNew"
    | "Failed"
    | "FailedRetryable"
    | "Terminated"
    | "TimedOut"
    | "Running"
    | "Starting";
  created_at?: string;
  finished_at?: string | null;
  last_updated_at?: string;
  total_records_count?: number | null;
  adjusted_start_at?: string | null;
  team?: number;
  batch_export?: string;
}
export const BatchExportsBackfillsCreateOutput =
  /*@__PURE__*/ Schema.Struct({
    id: Schema.optional(Schema.String),
    progress: Schema.optional(
      Schema.NullOr(
        Schema.Struct({
          total_runs: Schema.optional(Schema.NullOr(Schema.Number)),
          finished_runs: Schema.optional(Schema.NullOr(Schema.Number)),
          progress: Schema.optional(Schema.NullOr(Schema.Number)),
        }),
      ),
    ),
    start_at: Schema.optional(Schema.NullOr(Schema.String)),
    end_at: Schema.optional(Schema.NullOr(Schema.String)),
    status: Schema.optional(
      Schema.Literals([
        "Cancelled",
        "Completed",
        "ContinuedAsNew",
        "Failed",
        "FailedRetryable",
        "Terminated",
        "TimedOut",
        "Running",
        "Starting",
      ]),
    ),
    created_at: Schema.optional(Schema.String),
    finished_at: Schema.optional(Schema.NullOr(Schema.String)),
    last_updated_at: Schema.optional(Schema.String),
    total_records_count: Schema.optional(Schema.NullOr(Schema.Number)),
    adjusted_start_at: Schema.optional(Schema.NullOr(Schema.String)),
    team: Schema.optional(Schema.Number),
    batch_export: Schema.optional(Schema.String),
  }) as unknown as Schema.Codec<BatchExportsBackfillsCreateOutput>;

// The operation
/**
 * Create a new backfill for a BatchExport.
 *
 * @param project_id - Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
 */
export const batchExportsBackfillsCreate = /*@__PURE__*/ API.make(() => ({
  inputSchema: BatchExportsBackfillsCreateInput,
  outputSchema: BatchExportsBackfillsCreateOutput,
  errors: [BadRequest, Forbidden, NotFound] as const,
}));
