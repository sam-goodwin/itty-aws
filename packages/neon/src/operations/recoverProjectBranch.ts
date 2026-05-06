import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";

// Input Schema
export const RecoverProjectBranchInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    project_id: Schema.String.pipe(T.PathParam()),
    branch_id: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/projects/{project_id}/branches/{branch_id}/recover",
    }),
  );
export type RecoverProjectBranchInput = typeof RecoverProjectBranchInput.Type;

// Output Schema
export const RecoverProjectBranchOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    branch: Schema.Struct({
      id: Schema.String,
      project_id: Schema.String,
      parent_id: Schema.optional(Schema.String),
      parent_lsn: Schema.optional(Schema.String),
      parent_timestamp: Schema.optional(Schema.String),
      name: Schema.String,
      current_state: Schema.String,
      pending_state: Schema.optional(Schema.String),
      state_changed_at: Schema.String,
      logical_size: Schema.optional(Schema.Number),
      creation_source: Schema.String,
      primary: Schema.optional(Schema.Boolean),
      default: Schema.Boolean,
      protected: Schema.Boolean,
      cpu_used_sec: Schema.Number,
      compute_time_seconds: Schema.Number,
      active_time_seconds: Schema.Number,
      written_data_bytes: Schema.Number,
      data_transfer_bytes: Schema.Number,
      created_at: Schema.String,
      updated_at: Schema.String,
      ttl_interval_seconds: Schema.optional(Schema.Number),
      expires_at: Schema.optional(Schema.String),
      last_reset_at: Schema.optional(Schema.String),
      created_by: Schema.optional(
        Schema.Struct({
          name: Schema.optional(Schema.String),
          image: Schema.optional(Schema.String),
        }),
      ),
      init_source: Schema.optional(Schema.String),
      restore_status: Schema.optional(Schema.String),
      restored_from: Schema.optional(Schema.String),
      restored_as: Schema.optional(Schema.String),
      restricted_actions: Schema.optional(
        Schema.Array(
          Schema.Struct({
            name: Schema.String,
            reason: Schema.String,
          }),
        ),
      ),
      recovery: Schema.optional(
        Schema.Struct({
          deleted_at: Schema.String,
          recoverable_until: Schema.String,
          deletion_method: Schema.Literals(["user", "ttl"]),
        }),
      ),
    }),
    endpoints: Schema.optional(
      Schema.Array(
        Schema.Struct({
          host: Schema.String,
          id: Schema.String,
          name: Schema.optional(Schema.String),
          project_id: Schema.String,
          branch_id: Schema.String,
          autoscaling_limit_min_cu: Schema.Number,
          autoscaling_limit_max_cu: Schema.Number,
          region_id: Schema.String,
          type: Schema.Literals(["read_only", "read_write"]),
          current_state: Schema.Literals(["init", "active", "idle"]),
          pending_state: Schema.optional(
            Schema.Literals(["init", "active", "idle"]),
          ),
          settings: Schema.Struct({
            pg_settings: Schema.optional(
              Schema.Record(Schema.String, Schema.String),
            ),
            pgbouncer_settings: Schema.optional(
              Schema.Record(Schema.String, Schema.String),
            ),
            preload_libraries: Schema.optional(
              Schema.Struct({
                use_defaults: Schema.optional(Schema.Boolean),
                enabled_libraries: Schema.optional(Schema.Array(Schema.String)),
              }),
            ),
          }),
          pooler_enabled: Schema.Boolean,
          pooler_mode: Schema.Literals(["transaction"]),
          disabled: Schema.Boolean,
          passwordless_access: Schema.Boolean,
          last_active: Schema.optional(Schema.String),
          creation_source: Schema.String,
          created_at: Schema.String,
          updated_at: Schema.String,
          started_at: Schema.optional(Schema.String),
          suspended_at: Schema.optional(Schema.String),
          proxy_host: Schema.String,
          suspend_timeout_seconds: Schema.Number,
          provisioner: Schema.String,
          compute_release_version: Schema.optional(Schema.String),
        }),
      ),
    ),
  });
export type RecoverProjectBranchOutput = typeof RecoverProjectBranchOutput.Type;

// The operation
/**
 * Recover a deleted branch
 *
 * Recovers a deleted branch during the deletion grace period (7 days).
 * The branch must have been soft deleted and not yet permanently deleted.
 * Recovery restores the branch and its endpoints to an idle state.
 * Connection strings remain valid after recovery.
 * TTL branches become non-TTL branches after recovery.
 * This endpoint is in preview and not available to all users.
 *
 * @param project_id - The Neon project ID
 * @param branch_id - The branch ID
 */
export const recoverProjectBranch = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: RecoverProjectBranchInput,
    outputSchema: RecoverProjectBranchOutput,
  }),
);
