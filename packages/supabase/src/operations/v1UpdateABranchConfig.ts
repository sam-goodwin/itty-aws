import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { BadRequest, Forbidden, NotFound } from "../errors.ts";

// Input Schema
export interface V1UpdateABranchConfigInput {
  branch_id_or_ref: string;
  branch_name?: string;
  git_branch?: string;
  reset_on_push?: boolean;
  persistent?: boolean;
  status?:
    | "CREATING_PROJECT"
    | "RUNNING_MIGRATIONS"
    | "MIGRATIONS_PASSED"
    | "MIGRATIONS_FAILED"
    | "FUNCTIONS_DEPLOYED"
    | "FUNCTIONS_FAILED";
  request_review?: boolean;
  notify_url?: string;
}
export const V1UpdateABranchConfigInput =
  /*@__PURE__*/ Schema.Struct({
    branch_id_or_ref: Schema.String.pipe(T.PathParam()),
    branch_name: Schema.optional(Schema.String),
    git_branch: Schema.optional(Schema.String),
    reset_on_push: Schema.optional(Schema.Boolean),
    persistent: Schema.optional(Schema.Boolean),
    status: Schema.optional(
      Schema.Literals([
        "CREATING_PROJECT",
        "RUNNING_MIGRATIONS",
        "MIGRATIONS_PASSED",
        "MIGRATIONS_FAILED",
        "FUNCTIONS_DEPLOYED",
        "FUNCTIONS_FAILED",
      ]),
    ),
    request_review: Schema.optional(Schema.Boolean),
    notify_url: Schema.optional(Schema.String),
  }).pipe(
    T.Http({ method: "PATCH", path: "/v1/branches/{branch_id_or_ref}" }),
  ) as unknown as Schema.Codec<V1UpdateABranchConfigInput>;

// Output Schema
export interface V1UpdateABranchConfigOutput {
  id: string;
  name: string;
  project_ref: string;
  parent_project_ref: string;
  is_default: boolean;
  git_branch?: string;
  pr_number?: number;
  latest_check_run_id?: number;
  persistent: boolean;
  status:
    | "CREATING_PROJECT"
    | "RUNNING_MIGRATIONS"
    | "MIGRATIONS_PASSED"
    | "MIGRATIONS_FAILED"
    | "FUNCTIONS_DEPLOYED"
    | "FUNCTIONS_FAILED";
  created_at: string;
  updated_at: string;
  review_requested_at?: string;
  with_data: boolean;
  notify_url?: string;
  deletion_scheduled_at?: string;
  preview_project_status?:
    | "INACTIVE"
    | "ACTIVE_HEALTHY"
    | "ACTIVE_UNHEALTHY"
    | "COMING_UP"
    | "UNKNOWN"
    | "GOING_DOWN"
    | "INIT_FAILED"
    | "REMOVED"
    | "RESTORING"
    | "UPGRADING"
    | "PAUSING"
    | "RESTORE_FAILED"
    | "RESTARTING"
    | "PAUSE_FAILED"
    | "RESIZING";
}
export const V1UpdateABranchConfigOutput =
  /*@__PURE__*/ Schema.Struct({
    id: Schema.String,
    name: Schema.String,
    project_ref: Schema.String,
    parent_project_ref: Schema.String,
    is_default: Schema.Boolean,
    git_branch: Schema.optional(Schema.String),
    pr_number: Schema.optional(Schema.Number),
    latest_check_run_id: Schema.optional(Schema.Number),
    persistent: Schema.Boolean,
    status: Schema.Literals([
      "CREATING_PROJECT",
      "RUNNING_MIGRATIONS",
      "MIGRATIONS_PASSED",
      "MIGRATIONS_FAILED",
      "FUNCTIONS_DEPLOYED",
      "FUNCTIONS_FAILED",
    ]),
    created_at: Schema.String,
    updated_at: Schema.String,
    review_requested_at: Schema.optional(Schema.String),
    with_data: Schema.Boolean,
    notify_url: Schema.optional(Schema.String),
    deletion_scheduled_at: Schema.optional(Schema.String),
    preview_project_status: Schema.optional(
      Schema.Literals([
        "INACTIVE",
        "ACTIVE_HEALTHY",
        "ACTIVE_UNHEALTHY",
        "COMING_UP",
        "UNKNOWN",
        "GOING_DOWN",
        "INIT_FAILED",
        "REMOVED",
        "RESTORING",
        "UPGRADING",
        "PAUSING",
        "RESTORE_FAILED",
        "RESTARTING",
        "PAUSE_FAILED",
        "RESIZING",
      ]),
    ),
  }) as unknown as Schema.Codec<V1UpdateABranchConfigOutput>;

// The operation
/**
 * Update database branch config
 *
 * Updates the configuration of the specified database branch
 *
 * @param branch_id_or_ref - Branch ref or deprecated branch ID
 */
export const v1UpdateABranchConfig = /*@__PURE__*/ API.make(() => ({
  inputSchema: V1UpdateABranchConfigInput,
  outputSchema: V1UpdateABranchConfigOutput,
  errors: [BadRequest, Forbidden, NotFound] as const,
}));
