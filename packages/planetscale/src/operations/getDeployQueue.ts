import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { Forbidden, NotFound } from "../errors.ts";

// Input Schema
export interface GetDeployQueueInput {
  organization: string;
  database: string;
  page?: number;
  per_page?: number;
}
export const GetDeployQueueInput = /*@__PURE__*/ Schema.Struct({
  organization: Schema.String.pipe(T.PathParam()),
  database: Schema.String.pipe(T.PathParam()),
  page: Schema.optional(Schema.Number),
  per_page: Schema.optional(Schema.Number),
}).pipe(
  T.Http({
    method: "GET",
    path: "/organizations/{organization}/databases/{database}/deploy-queue",
  }),
) as unknown as Schema.Codec<GetDeployQueueInput>;

// Output Schema
export interface GetDeployQueueOutput {
  type: string;
  current_page: number;
  next_page: number | null;
  next_page_url: string | null;
  prev_page: number | null;
  prev_page_url: string | null;
  data: {
    id: string;
    auto_cutover: boolean;
    auto_delete_branch: boolean;
    created_at: string;
    cutover_at: string | null;
    cutover_expiring: boolean;
    deploy_check_errors?: string | null;
    finished_at: string | null;
    force_cutover_requested_at: string | null;
    queued_at: string | null;
    ready_to_cutover_at: string | null;
    started_at: string | null;
    state:
      | "pending"
      | "ready"
      | "no_changes"
      | "queued"
      | "submitting"
      | "in_progress"
      | "pending_cutover"
      | "in_progress_vschema"
      | "in_progress_cancel"
      | "in_progress_cutover"
      | "complete"
      | "complete_cancel"
      | "complete_error"
      | "complete_pending_revert"
      | "in_progress_revert"
      | "in_progress_revert_vschema"
      | "complete_revert"
      | "complete_revert_error"
      | "cancelled"
      | "error";
    submitted_at: string | null;
    updated_at: string;
    into_branch: string;
    deploy_request_number: number;
    deployable: boolean;
    preceding_deployments: Record<string, unknown>[];
    deploy_operations: {
      id: string;
      state:
        | "pending"
        | "queued"
        | "in_progress"
        | "complete"
        | "cancelled"
        | "error";
      keyspace_name: string;
      table_name: string;
      operation_name: string;
      eta_seconds: number | null;
      progress_percentage: number | null;
      deploy_error_docs_url: string | null;
      ddl_statement: string;
      syntax_highlighted_ddl: string;
      created_at: string;
      updated_at: string;
      throttled_at: string | null;
      can_drop_data: boolean;
      table_locked: boolean;
      table_recently_used: boolean;
      table_recently_used_at: string | null;
      removed_foreign_key_names: string[] | null;
      deploy_errors: string | null;
    }[];
    deploy_operation_summaries: {
      id: string;
      created_at: string;
      deploy_errors: string;
      ddl_statement: string;
      eta_seconds: number;
      keyspace_name: string;
      operation_name: string;
      progress_percentage: number;
      state: "pending" | "in_progress" | "complete" | "cancelled" | "error";
      syntax_highlighted_ddl: string;
      table_name: string;
      table_recently_used_at: string | null;
      throttled_at: string | null;
      removed_foreign_key_names: string[];
      shard_count: number;
      shard_names: string[];
      can_drop_data: boolean;
      table_recently_used: boolean;
      sharded: boolean;
      operations: {
        id: string;
        shard: string;
        state:
          | "pending"
          | "queued"
          | "in_progress"
          | "complete"
          | "cancelled"
          | "error";
        progress_percentage: number;
        eta_seconds: number;
      }[];
    }[];
    lint_errors: Record<string, unknown>[];
    sequential_diff_dependencies: Record<string, unknown>[];
    lookup_vindex_operations: Record<string, unknown>[];
    throttler_configurations?: Record<string, unknown> | null;
    deployment_revert_request: Record<string, unknown> | null;
    actor?: { id: string; display_name: string; avatar_url: string } | null;
    cutover_actor?: {
      id: string;
      display_name: string;
      avatar_url: string;
    } | null;
    cancelled_actor?: {
      id: string;
      display_name: string;
      avatar_url: string;
    } | null;
    schema_last_updated_at: string | null;
    table_locked: boolean;
    locked_table_name?: string | null;
    instant_ddl: boolean;
    instant_ddl_eligible: boolean;
    queue_paused: boolean;
    queue_pause_reason: string | null;
  }[];
}
export const GetDeployQueueOutput = /*@__PURE__*/ Schema.Struct({
  type: Schema.String,
  current_page: Schema.Number,
  next_page: Schema.NullOr(Schema.Number),
  next_page_url: Schema.NullOr(Schema.String),
  prev_page: Schema.NullOr(Schema.Number),
  prev_page_url: Schema.NullOr(Schema.String),
  data: Schema.Array(
    Schema.Struct({
      id: Schema.String,
      auto_cutover: Schema.Boolean,
      auto_delete_branch: Schema.Boolean,
      created_at: Schema.String,
      cutover_at: Schema.NullOr(Schema.String),
      cutover_expiring: Schema.Boolean,
      deploy_check_errors: Schema.optional(Schema.NullOr(Schema.String)),
      finished_at: Schema.NullOr(Schema.String),
      force_cutover_requested_at: Schema.NullOr(Schema.String),
      queued_at: Schema.NullOr(Schema.String),
      ready_to_cutover_at: Schema.NullOr(Schema.String),
      started_at: Schema.NullOr(Schema.String),
      state: Schema.Literals([
        "pending",
        "ready",
        "no_changes",
        "queued",
        "submitting",
        "in_progress",
        "pending_cutover",
        "in_progress_vschema",
        "in_progress_cancel",
        "in_progress_cutover",
        "complete",
        "complete_cancel",
        "complete_error",
        "complete_pending_revert",
        "in_progress_revert",
        "in_progress_revert_vschema",
        "complete_revert",
        "complete_revert_error",
        "cancelled",
        "error",
      ]),
      submitted_at: Schema.NullOr(Schema.String),
      updated_at: Schema.String,
      into_branch: Schema.String,
      deploy_request_number: Schema.Number,
      deployable: Schema.Boolean,
      preceding_deployments: Schema.Array(
        Schema.Record(Schema.String, Schema.Unknown),
      ),
      deploy_operations: Schema.Array(
        Schema.Struct({
          id: Schema.String,
          state: Schema.Literals([
            "pending",
            "queued",
            "in_progress",
            "complete",
            "cancelled",
            "error",
          ]),
          keyspace_name: Schema.String,
          table_name: Schema.String,
          operation_name: Schema.String,
          eta_seconds: Schema.NullOr(Schema.Number),
          progress_percentage: Schema.NullOr(Schema.Number),
          deploy_error_docs_url: Schema.NullOr(Schema.String),
          ddl_statement: Schema.String,
          syntax_highlighted_ddl: Schema.String,
          created_at: Schema.String,
          updated_at: Schema.String,
          throttled_at: Schema.NullOr(Schema.String),
          can_drop_data: Schema.Boolean,
          table_locked: Schema.Boolean,
          table_recently_used: Schema.Boolean,
          table_recently_used_at: Schema.NullOr(Schema.String),
          removed_foreign_key_names: Schema.NullOr(Schema.Array(Schema.String)),
          deploy_errors: Schema.NullOr(Schema.String),
        }),
      ),
      deploy_operation_summaries: Schema.Array(
        Schema.Struct({
          id: Schema.String,
          created_at: Schema.String,
          deploy_errors: Schema.String,
          ddl_statement: Schema.String,
          eta_seconds: Schema.Number,
          keyspace_name: Schema.String,
          operation_name: Schema.String,
          progress_percentage: Schema.Number,
          state: Schema.Literals([
            "pending",
            "in_progress",
            "complete",
            "cancelled",
            "error",
          ]),
          syntax_highlighted_ddl: Schema.String,
          table_name: Schema.String,
          table_recently_used_at: Schema.NullOr(Schema.String),
          throttled_at: Schema.NullOr(Schema.String),
          removed_foreign_key_names: Schema.Array(Schema.String),
          shard_count: Schema.Number,
          shard_names: Schema.Array(Schema.String),
          can_drop_data: Schema.Boolean,
          table_recently_used: Schema.Boolean,
          sharded: Schema.Boolean,
          operations: Schema.Array(
            Schema.Struct({
              id: Schema.String,
              shard: Schema.String,
              state: Schema.Literals([
                "pending",
                "queued",
                "in_progress",
                "complete",
                "cancelled",
                "error",
              ]),
              progress_percentage: Schema.Number,
              eta_seconds: Schema.Number,
            }),
          ),
        }),
      ),
      lint_errors: Schema.Array(Schema.Record(Schema.String, Schema.Unknown)),
      sequential_diff_dependencies: Schema.Array(
        Schema.Record(Schema.String, Schema.Unknown),
      ),
      lookup_vindex_operations: Schema.Array(
        Schema.Record(Schema.String, Schema.Unknown),
      ),
      throttler_configurations: Schema.optional(
        Schema.NullOr(Schema.Record(Schema.String, Schema.Unknown)),
      ),
      deployment_revert_request: Schema.NullOr(
        Schema.Record(Schema.String, Schema.Unknown),
      ),
      actor: Schema.optional(
        Schema.NullOr(
          Schema.Struct({
            id: Schema.String,
            display_name: Schema.String,
            avatar_url: Schema.String,
          }),
        ),
      ),
      cutover_actor: Schema.optional(
        Schema.NullOr(
          Schema.Struct({
            id: Schema.String,
            display_name: Schema.String,
            avatar_url: Schema.String,
          }),
        ),
      ),
      cancelled_actor: Schema.optional(
        Schema.NullOr(
          Schema.Struct({
            id: Schema.String,
            display_name: Schema.String,
            avatar_url: Schema.String,
          }),
        ),
      ),
      schema_last_updated_at: Schema.NullOr(Schema.String),
      table_locked: Schema.Boolean,
      locked_table_name: Schema.optional(Schema.NullOr(Schema.String)),
      instant_ddl: Schema.Boolean,
      instant_ddl_eligible: Schema.Boolean,
      queue_paused: Schema.Boolean,
      queue_pause_reason: Schema.NullOr(Schema.String),
    }),
  ),
}) as unknown as Schema.Codec<GetDeployQueueOutput>;

// The operation
/**
 * Get the deploy queue
 *
 * The deploy queue returns the current list of deploy requests in the order they will be deployed.
 *
 * @param organization - The name of the deploy request's organization
 * @param database - The name of the deploy request's database
 * @param page - If provided, specifies the page offset of returned results
 * @param per_page - If provided, specifies the number of returned results
 */
export const getDeployQueue = /*@__PURE__*/ API.makePaginated(() => ({
  inputSchema: GetDeployQueueInput,
  outputSchema: GetDeployQueueOutput,
  errors: [Forbidden, NotFound] as const,
  pagination: {
    mode: "page",
    inputToken: "page",
    outputToken: "next_page",
    items: "data",
  },
}));
