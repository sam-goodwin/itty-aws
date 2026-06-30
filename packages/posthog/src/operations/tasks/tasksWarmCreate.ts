import * as Schema from "effect/Schema";
import { API } from "../../client.ts";
import * as T from "../../traits.ts";

// Input Schema
export interface TasksWarmCreateInput {
  project_id: string;
  repository: string;
  github_integration: number;
  branch?: string | null;
  runtime_adapter?: "claude" | "codex" | null;
  model?: string | null;
  reasoning_effort?: "low" | "medium" | "high" | "xhigh" | "max" | null;
}
export const TasksWarmCreateInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  project_id: Schema.String.pipe(T.PathParam()),
  repository: Schema.String,
  github_integration: Schema.Number,
  branch: Schema.optional(Schema.NullOr(Schema.String)),
  runtime_adapter: Schema.optional(
    Schema.NullOr(Schema.Literals(["claude", "codex"])),
  ),
  model: Schema.optional(Schema.NullOr(Schema.String)),
  reasoning_effort: Schema.optional(
    Schema.NullOr(Schema.Literals(["low", "medium", "high", "xhigh", "max"])),
  ),
}).pipe(
  T.Http({ method: "POST", path: "/api/projects/{project_id}/tasks/warm/" }),
) as unknown as Schema.Codec<TasksWarmCreateInput>;

// Output Schema
export interface TasksWarmCreateOutput {
  task_id: string;
  run_id: string;
}
export const TasksWarmCreateOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  task_id: Schema.String,
  run_id: Schema.String,
}) as unknown as Schema.Codec<TasksWarmCreateOutput>;

// The operation
/**
 * Warm a task sandbox
 *
 * Warm a full idling Run for a Code-app cloud task while the user composes: boot a sandbox, clone the repo, check out the branch, and start the agent, then idle awaiting the first message. On submit the normal create+run path transparently reuses and activates this Run; abandoned warms are reaped by the Run's inactivity timeout. Best-effort: returns an empty body when the feature flag is off, the warm pool is full, or the GitHub integration doesn't belong to the team.
 *
 * @param project_id - Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
 */
export const tasksWarmCreate = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: TasksWarmCreateInput,
  outputSchema: TasksWarmCreateOutput,
}));
