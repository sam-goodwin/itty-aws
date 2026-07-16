import * as Schema from "effect/Schema";
import { API } from "../../client.ts";
import * as T from "../../traits.ts";
import { BadRequest, Forbidden, NotFound } from "../../errors.ts";

// Input Schema
export interface TasksRunsCreateInput {
  project_id: string;
  task_id: string;
  environment?: "local" | "cloud";
  mode?: "interactive" | "background";
  branch?: string | null;
  sandbox_environment_id?: string;
  pr_authorship_mode?: "user" | "bot";
  run_source?: "manual" | "signal_report";
  signal_report_id?: string;
  runtime_adapter?: "claude" | "codex";
  model?: string;
  reasoning_effort?: "low" | "medium" | "high" | "xhigh" | "max";
  github_user_token?: string;
  initial_permission_mode?:
    | "default"
    | "acceptEdits"
    | "plan"
    | "bypassPermissions"
    | "auto"
    | "read-only"
    | "full-access";
  home_quick_action?: string;
}
export const TasksRunsCreateInput = /*@__PURE__*/ Schema.Struct({
  project_id: Schema.String.pipe(T.PathParam()),
  task_id: Schema.String.pipe(T.PathParam()),
  environment: Schema.optional(Schema.Literals(["local", "cloud"])),
  mode: Schema.optional(Schema.Literals(["interactive", "background"])),
  branch: Schema.optional(Schema.NullOr(Schema.String)),
  sandbox_environment_id: Schema.optional(Schema.String),
  pr_authorship_mode: Schema.optional(Schema.Literals(["user", "bot"])),
  run_source: Schema.optional(Schema.Literals(["manual", "signal_report"])),
  signal_report_id: Schema.optional(Schema.String),
  runtime_adapter: Schema.optional(Schema.Literals(["claude", "codex"])),
  model: Schema.optional(Schema.String),
  reasoning_effort: Schema.optional(
    Schema.Literals(["low", "medium", "high", "xhigh", "max"]),
  ),
  github_user_token: Schema.optional(Schema.String),
  initial_permission_mode: Schema.optional(
    Schema.Literals([
      "default",
      "acceptEdits",
      "plan",
      "bypassPermissions",
      "auto",
      "read-only",
      "full-access",
    ]),
  ),
  home_quick_action: Schema.optional(Schema.String),
}).pipe(
  T.Http({
    method: "POST",
    path: "/api/projects/{project_id}/tasks/{task_id}/runs/",
  }),
) as unknown as Schema.Codec<TasksRunsCreateInput>;

// Output Schema
export interface TasksRunsCreateOutput {
  id: string;
  task: string;
  stage: string | null;
  branch: string | null;
  status: string;
  environment: string;
  runtime_adapter?: "claude" | "codex" | null;
  provider?: "anthropic" | "openai" | null;
  model?: string | null;
  reasoning_effort?: "low" | "medium" | "high" | "xhigh" | "max" | null;
  log_url?: string | null;
  error_message: string | null;
  output: Record<string, unknown> | null;
  state: Record<string, unknown>;
  artifacts: {
    id?: string;
    name?: string;
    type?: string;
    source?: string;
    size?: number;
    content_type?: string;
    metadata?: {
      skill_name: string;
      skill_source: "user" | "repo" | "marketplace" | "codex";
      content_sha256: string;
      bundle_format: "zip";
      schema_version: number;
    };
    storage_path?: string;
    uploaded_at?: string;
  }[];
  created_at?: string | null;
  updated_at?: string | null;
  completed_at?: string | null;
}
export const TasksRunsCreateOutput = /*@__PURE__*/ Schema.Struct({
  id: Schema.String,
  task: Schema.String,
  stage: Schema.NullOr(Schema.String),
  branch: Schema.NullOr(Schema.String),
  status: Schema.String,
  environment: Schema.String,
  runtime_adapter: Schema.optional(
    Schema.NullOr(Schema.Literals(["claude", "codex"])),
  ),
  provider: Schema.optional(
    Schema.NullOr(Schema.Literals(["anthropic", "openai"])),
  ),
  model: Schema.optional(Schema.NullOr(Schema.String)),
  reasoning_effort: Schema.optional(
    Schema.NullOr(Schema.Literals(["low", "medium", "high", "xhigh", "max"])),
  ),
  log_url: Schema.optional(Schema.NullOr(Schema.String)),
  error_message: Schema.NullOr(Schema.String),
  output: Schema.NullOr(Schema.Record(Schema.String, Schema.Unknown)),
  state: Schema.Record(Schema.String, Schema.Unknown),
  artifacts: Schema.Array(
    Schema.Struct({
      id: Schema.optional(Schema.String),
      name: Schema.optional(Schema.String),
      type: Schema.optional(Schema.String),
      source: Schema.optional(Schema.String),
      size: Schema.optional(Schema.Number),
      content_type: Schema.optional(Schema.String),
      metadata: Schema.optional(
        Schema.Struct({
          skill_name: Schema.String,
          skill_source: Schema.Literals([
            "user",
            "repo",
            "marketplace",
            "codex",
          ]),
          content_sha256: Schema.String,
          bundle_format: Schema.Literals(["zip"]),
          schema_version: Schema.Number,
        }),
      ),
      storage_path: Schema.optional(Schema.String),
      uploaded_at: Schema.optional(Schema.String),
    }),
  ),
  created_at: Schema.optional(Schema.NullOr(Schema.String)),
  updated_at: Schema.optional(Schema.NullOr(Schema.String)),
  completed_at: Schema.optional(Schema.NullOr(Schema.String)),
}) as unknown as Schema.Codec<TasksRunsCreateOutput>;

// The operation
/**
 * Create task run
 *
 * Create a new run for a specific task without starting execution.
 *
 * @param project_id - Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
 */
export const tasksRunsCreate = /*@__PURE__*/ API.make(() => ({
  inputSchema: TasksRunsCreateInput,
  outputSchema: TasksRunsCreateOutput,
  errors: [BadRequest, Forbidden, NotFound] as const,
}));
