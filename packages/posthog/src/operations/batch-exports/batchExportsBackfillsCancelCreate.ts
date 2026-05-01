import * as Schema from "effect/Schema";
import { API } from "../../client.ts";
import * as T from "../../traits.ts";
import { BadRequest, Forbidden, NotFound } from "../../errors.ts";

// Input Schema
export const BatchExportsBackfillsCancelCreateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    batch_export_id: Schema.String.pipe(T.PathParam()),
    id: Schema.String.pipe(T.PathParam()),
    project_id: Schema.String.pipe(T.PathParam()),
    progress: Schema.NullOr(
      Schema.Struct({
        total_runs: Schema.optional(Schema.NullOr(Schema.Number)),
        finished_runs: Schema.optional(Schema.NullOr(Schema.Number)),
        progress: Schema.optional(Schema.NullOr(Schema.Number)),
      }),
    ),
    start_at: Schema.optional(Schema.NullOr(Schema.String)),
    end_at: Schema.optional(Schema.NullOr(Schema.String)),
    status: Schema.Literals([
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
    created_at: Schema.String,
    finished_at: Schema.optional(Schema.NullOr(Schema.String)),
    last_updated_at: Schema.String,
    total_records_count: Schema.optional(Schema.NullOr(Schema.Number)),
    adjusted_start_at: Schema.optional(Schema.NullOr(Schema.String)),
    team: Schema.Number,
    batch_export: Schema.String,
  }).pipe(
    T.Http({
      method: "POST",
      path: "/api/projects/{project_id}/batch_exports/{batch_export_id}/backfills/{id}/cancel/",
    }),
  );
export type BatchExportsBackfillsCancelCreateInput =
  typeof BatchExportsBackfillsCancelCreateInput.Type;

// Output Schema
export const BatchExportsBackfillsCancelCreateOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type BatchExportsBackfillsCancelCreateOutput =
  typeof BatchExportsBackfillsCancelCreateOutput.Type;

// The operation
/**
 * Cancel a batch export backfill.
 *
 * @param id - A UUID string identifying this batch export backfill.
 * @param project_id - Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
 */
export const batchExportsBackfillsCancelCreate =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: BatchExportsBackfillsCancelCreateInput,
    outputSchema: BatchExportsBackfillsCancelCreateOutput,
    errors: [BadRequest, Forbidden, NotFound] as const,
  }));
