import * as Schema from "effect/Schema";
import { API } from "../../client.ts";
import * as T from "../../traits.ts";
import { BadRequest, Forbidden, NotFound } from "../../errors.ts";

// Input Schema
export interface TasksRunsListInput {
  project_id: string;
  task_id: string;
  limit?: number;
  offset?: number;
}
export const TasksRunsListInput = /*@__PURE__*/ Schema.Struct({
  project_id: Schema.String.pipe(T.PathParam()),
  task_id: Schema.String.pipe(T.PathParam()),
  limit: Schema.optional(Schema.Number),
  offset: Schema.optional(Schema.Number),
}).pipe(
  T.Http({
    method: "GET",
    path: "/api/projects/{project_id}/tasks/{task_id}/runs/",
  }),
) as unknown as Schema.Codec<TasksRunsListInput>;

// Output Schema
export interface TasksRunsListOutput {
  count: number;
  next?: string | null;
  previous?: string | null;
  results: {
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
  }[];
}
export const TasksRunsListOutput = /*@__PURE__*/ Schema.Struct({
  count: Schema.Number,
  next: Schema.optional(Schema.NullOr(Schema.String)),
  previous: Schema.optional(Schema.NullOr(Schema.String)),
  results: Schema.Array(
    Schema.Struct({
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
        Schema.NullOr(
          Schema.Literals(["low", "medium", "high", "xhigh", "max"]),
        ),
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
    }),
  ),
}) as unknown as Schema.Codec<TasksRunsListOutput>;

// The operation
/**
 * List task runs
 *
 * Get a list of runs for a specific task.
 *
 * @param limit - Number of results to return per page.
 * @param offset - The initial index from which to return the results.
 * @param project_id - Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
 */
export const tasksRunsList = /*@__PURE__*/ API.make(() => ({
  inputSchema: TasksRunsListInput,
  outputSchema: TasksRunsListOutput,
  errors: [BadRequest, Forbidden, NotFound] as const,
}));
