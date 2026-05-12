import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import {
  BadRequest,
  Forbidden,
  NotFound,
  UnprocessableEntity,
} from "../errors.ts";

// Input Schema
export const UpdateAdvancedOptionsInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    autovacuum_analyze_scale_factor: Schema.optional(Schema.Unknown),
    autovacuum_analyze_threshold: Schema.optional(Schema.Unknown),
    autovacuum_freeze_max_age: Schema.optional(Schema.Unknown),
    autovacuum_max_workers: Schema.optional(Schema.Unknown),
    autovacuum_naptime: Schema.optional(Schema.Unknown),
    autovacuum_vacuum_cost_delay: Schema.optional(Schema.Unknown),
    autovacuum_vacuum_cost_limit: Schema.optional(Schema.Unknown),
    autovacuum_vacuum_scale_factor: Schema.optional(Schema.Unknown),
    autovacuum_vacuum_threshold: Schema.optional(Schema.Unknown),
    bgwriter_delay: Schema.optional(Schema.Unknown),
    bgwriter_flush_after: Schema.optional(Schema.Unknown),
    bgwriter_lru_maxpages: Schema.optional(Schema.Unknown),
    bgwriter_lru_multiplier: Schema.optional(Schema.Unknown),
    deadlock_timeout: Schema.optional(Schema.Unknown),
    default_toast_compression: Schema.optional(Schema.Unknown),
    idle_in_transaction_session_timeout: Schema.optional(Schema.Unknown),
    jit: Schema.optional(Schema.Boolean),
    log_autovacuum_min_duration: Schema.optional(Schema.Unknown),
    log_error_verbosity: Schema.optional(Schema.Unknown),
    log_line_prefix: Schema.optional(Schema.Unknown),
    log_min_duration_statement: Schema.optional(Schema.Unknown),
    max_files_per_process: Schema.optional(Schema.Unknown),
    max_locks_per_transaction: Schema.optional(Schema.Unknown),
    max_logical_replication_workers: Schema.optional(Schema.Unknown),
    max_parallel_workers: Schema.optional(Schema.Unknown),
    max_parallel_workers_per_gather: Schema.optional(Schema.Unknown),
    max_pred_locks_per_transaction: Schema.optional(Schema.Unknown),
    max_prepared_transactions: Schema.optional(Schema.Unknown),
    max_replication_slots: Schema.optional(Schema.Unknown),
    max_stack_depth: Schema.optional(Schema.Unknown),
    max_standby_archive_delay: Schema.optional(Schema.Unknown),
    max_standby_streaming_delay: Schema.optional(Schema.Unknown),
    max_wal_senders: Schema.optional(Schema.Unknown),
    max_worker_processes: Schema.optional(Schema.Unknown),
    "pg_partman_bgw.interval": Schema.optional(Schema.Unknown),
    "pg_partman_bgw.role": Schema.optional(Schema.String),
    "pg_stat_statements.track": Schema.optional(Schema.Unknown),
    temp_file_limit: Schema.optional(Schema.Unknown),
    track_activity_query_size: Schema.optional(Schema.Unknown),
    track_commit_timestamp: Schema.optional(Schema.Unknown),
    track_functions: Schema.optional(Schema.Unknown),
    track_io_timing: Schema.optional(Schema.Unknown),
    wal_sender_timeout: Schema.optional(Schema.Unknown),
    wal_writer_delay: Schema.optional(Schema.Unknown),
  }).pipe(
    T.Http({ method: "PUT", path: "/databases/{databaseId}/advanced-options" }),
  );
export type UpdateAdvancedOptionsInput = typeof UpdateAdvancedOptionsInput.Type;

// Output Schema
export const UpdateAdvancedOptionsOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type UpdateAdvancedOptionsOutput =
  typeof UpdateAdvancedOptionsOutput.Type;

// The operation
/**
 * Update Advanced Options
 *
 * Updates an advanced configuration option for the Managed Database (PostgreSQL engine types only).
 */
export const updateAdvancedOptions = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: UpdateAdvancedOptionsInput,
    outputSchema: UpdateAdvancedOptionsOutput,
    errors: [BadRequest, Forbidden, NotFound, UnprocessableEntity] as const,
  }),
);
