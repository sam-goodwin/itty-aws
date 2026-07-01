import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { BadRequest, Forbidden } from "../errors.ts";

// Input Schema
export interface V1UpdatePostgresConfigInput {
  ref: string;
  effective_cache_size?: string;
  logical_decoding_work_mem?: string;
  "cron.log_statement"?: boolean;
  log_autovacuum_min_duration?: string;
  log_checkpoints?: boolean;
  log_connections?: boolean;
  log_disconnections?: boolean;
  log_duration?: boolean;
  log_lock_waits?: boolean;
  log_recovery_conflict_waits?: boolean;
  log_replication_commands?: boolean;
  log_startup_progress_interval?: string;
  log_temp_files?: string;
  maintenance_work_mem?: string;
  track_activity_query_size?: string;
  max_connections?: number;
  max_locks_per_transaction?: number;
  max_parallel_maintenance_workers?: number;
  max_parallel_workers?: number;
  max_parallel_workers_per_gather?: number;
  max_replication_slots?: number;
  max_slot_wal_keep_size?: string;
  max_standby_archive_delay?: string;
  max_standby_streaming_delay?: string;
  max_wal_size?: string;
  max_wal_senders?: number;
  max_worker_processes?: number;
  session_replication_role?: "origin" | "replica" | "local";
  shared_buffers?: string;
  statement_timeout?: string;
  track_commit_timestamp?: boolean;
  wal_keep_size?: string;
  wal_sender_timeout?: string;
  work_mem?: string;
  checkpoint_timeout?: string;
  hot_standby_feedback?: boolean;
  restart_database?: boolean;
}
export const V1UpdatePostgresConfigInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    ref: Schema.String.pipe(T.PathParam()),
    effective_cache_size: Schema.optional(Schema.String),
    logical_decoding_work_mem: Schema.optional(Schema.String),
    "cron.log_statement": Schema.optional(Schema.Boolean),
    log_autovacuum_min_duration: Schema.optional(Schema.String),
    log_checkpoints: Schema.optional(Schema.Boolean),
    log_connections: Schema.optional(Schema.Boolean),
    log_disconnections: Schema.optional(Schema.Boolean),
    log_duration: Schema.optional(Schema.Boolean),
    log_lock_waits: Schema.optional(Schema.Boolean),
    log_recovery_conflict_waits: Schema.optional(Schema.Boolean),
    log_replication_commands: Schema.optional(Schema.Boolean),
    log_startup_progress_interval: Schema.optional(Schema.String),
    log_temp_files: Schema.optional(Schema.String),
    maintenance_work_mem: Schema.optional(Schema.String),
    track_activity_query_size: Schema.optional(Schema.String),
    max_connections: Schema.optional(Schema.Number),
    max_locks_per_transaction: Schema.optional(Schema.Number),
    max_parallel_maintenance_workers: Schema.optional(Schema.Number),
    max_parallel_workers: Schema.optional(Schema.Number),
    max_parallel_workers_per_gather: Schema.optional(Schema.Number),
    max_replication_slots: Schema.optional(Schema.Number),
    max_slot_wal_keep_size: Schema.optional(Schema.String),
    max_standby_archive_delay: Schema.optional(Schema.String),
    max_standby_streaming_delay: Schema.optional(Schema.String),
    max_wal_size: Schema.optional(Schema.String),
    max_wal_senders: Schema.optional(Schema.Number),
    max_worker_processes: Schema.optional(Schema.Number),
    session_replication_role: Schema.optional(
      Schema.Literals(["origin", "replica", "local"]),
    ),
    shared_buffers: Schema.optional(Schema.String),
    statement_timeout: Schema.optional(Schema.String),
    track_commit_timestamp: Schema.optional(Schema.Boolean),
    wal_keep_size: Schema.optional(Schema.String),
    wal_sender_timeout: Schema.optional(Schema.String),
    work_mem: Schema.optional(Schema.String),
    checkpoint_timeout: Schema.optional(Schema.String),
    hot_standby_feedback: Schema.optional(Schema.Boolean),
    restart_database: Schema.optional(Schema.Boolean),
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/v1/projects/{ref}/config/database/postgres",
    }),
  ) as unknown as Schema.Codec<V1UpdatePostgresConfigInput>;

// Output Schema
export interface V1UpdatePostgresConfigOutput {
  effective_cache_size?: string;
  logical_decoding_work_mem?: string;
  "cron.log_statement"?: boolean;
  log_autovacuum_min_duration?: string;
  log_checkpoints?: boolean;
  log_connections?: boolean;
  log_disconnections?: boolean;
  log_duration?: boolean;
  log_lock_waits?: boolean;
  log_recovery_conflict_waits?: boolean;
  log_replication_commands?: boolean;
  log_startup_progress_interval?: string;
  log_temp_files?: string;
  maintenance_work_mem?: string;
  track_activity_query_size?: string;
  max_connections?: number;
  max_locks_per_transaction?: number;
  max_parallel_maintenance_workers?: number;
  max_parallel_workers?: number;
  max_parallel_workers_per_gather?: number;
  max_replication_slots?: number;
  max_slot_wal_keep_size?: string;
  max_standby_archive_delay?: string;
  max_standby_streaming_delay?: string;
  max_wal_size?: string;
  max_wal_senders?: number;
  max_worker_processes?: number;
  session_replication_role?: "origin" | "replica" | "local";
  shared_buffers?: string;
  statement_timeout?: string;
  track_commit_timestamp?: boolean;
  wal_keep_size?: string;
  wal_sender_timeout?: string;
  work_mem?: string;
  checkpoint_timeout?: string;
  hot_standby_feedback?: boolean;
}
export const V1UpdatePostgresConfigOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    effective_cache_size: Schema.optional(Schema.String),
    logical_decoding_work_mem: Schema.optional(Schema.String),
    "cron.log_statement": Schema.optional(Schema.Boolean),
    log_autovacuum_min_duration: Schema.optional(Schema.String),
    log_checkpoints: Schema.optional(Schema.Boolean),
    log_connections: Schema.optional(Schema.Boolean),
    log_disconnections: Schema.optional(Schema.Boolean),
    log_duration: Schema.optional(Schema.Boolean),
    log_lock_waits: Schema.optional(Schema.Boolean),
    log_recovery_conflict_waits: Schema.optional(Schema.Boolean),
    log_replication_commands: Schema.optional(Schema.Boolean),
    log_startup_progress_interval: Schema.optional(Schema.String),
    log_temp_files: Schema.optional(Schema.String),
    maintenance_work_mem: Schema.optional(Schema.String),
    track_activity_query_size: Schema.optional(Schema.String),
    max_connections: Schema.optional(Schema.Number),
    max_locks_per_transaction: Schema.optional(Schema.Number),
    max_parallel_maintenance_workers: Schema.optional(Schema.Number),
    max_parallel_workers: Schema.optional(Schema.Number),
    max_parallel_workers_per_gather: Schema.optional(Schema.Number),
    max_replication_slots: Schema.optional(Schema.Number),
    max_slot_wal_keep_size: Schema.optional(Schema.String),
    max_standby_archive_delay: Schema.optional(Schema.String),
    max_standby_streaming_delay: Schema.optional(Schema.String),
    max_wal_size: Schema.optional(Schema.String),
    max_wal_senders: Schema.optional(Schema.Number),
    max_worker_processes: Schema.optional(Schema.Number),
    session_replication_role: Schema.optional(
      Schema.Literals(["origin", "replica", "local"]),
    ),
    shared_buffers: Schema.optional(Schema.String),
    statement_timeout: Schema.optional(Schema.String),
    track_commit_timestamp: Schema.optional(Schema.Boolean),
    wal_keep_size: Schema.optional(Schema.String),
    wal_sender_timeout: Schema.optional(Schema.String),
    work_mem: Schema.optional(Schema.String),
    checkpoint_timeout: Schema.optional(Schema.String),
    hot_standby_feedback: Schema.optional(Schema.Boolean),
  }) as unknown as Schema.Codec<V1UpdatePostgresConfigOutput>;

// The operation
/**
 * Updates project's Postgres config
 *
 * @param ref - Project ref
 */
export const v1UpdatePostgresConfig = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: V1UpdatePostgresConfigInput,
    outputSchema: V1UpdatePostgresConfigOutput,
    errors: [BadRequest, Forbidden] as const,
  }),
);
