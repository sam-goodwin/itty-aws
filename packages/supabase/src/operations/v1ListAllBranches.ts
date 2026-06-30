import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { BadRequest, NotFound } from "../errors.ts";

// Input Schema
export interface V1ListAllBranchesInput {
  ref: string;
}
export const V1ListAllBranchesInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
  {
    ref: Schema.String.pipe(T.PathParam()),
  },
).pipe(
  T.Http({ method: "GET", path: "/v1/projects/{ref}/branches" }),
) as unknown as Schema.Codec<V1ListAllBranchesInput>;

// Output Schema
export type V1ListAllBranchesOutput = {
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
}[];
export const V1ListAllBranchesOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Array(
  Schema.Struct({
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
  }),
) as unknown as Schema.Codec<V1ListAllBranchesOutput>;

// The operation
/**
 * List all database branches
 *
 * Returns all database branches of the specified project.
 *
 * @param ref - Project ref
 */
export const v1ListAllBranches = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: V1ListAllBranchesInput,
  outputSchema: V1ListAllBranchesOutput,
  errors: [BadRequest, NotFound] as const,
}));
