import * as Schema from "effect/Schema";
import {
  TaskRunArtifactResponseSchema,
  TaskRunDetailStatusEnumSchema,
} from "./_schemas.ts";
import { API } from "../../client.ts";
import * as T from "../../traits.ts";
import { BadRequest, Forbidden, NotFound } from "../../errors.ts";

// Input Schema
export const TasksRunsResumeInCloudCreateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.String.pipe(T.PathParam()),
    project_id: Schema.String.pipe(T.PathParam()),
    task_id: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/api/projects/{project_id}/tasks/{task_id}/runs/{id}/resume_in_cloud/",
    }),
  );
export type TasksRunsResumeInCloudCreateInput =
  typeof TasksRunsResumeInCloudCreateInput.Type;

// Output Schema
export const TasksRunsResumeInCloudCreateOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.optional(Schema.String),
    task: Schema.optional(Schema.String),
    stage: Schema.optional(Schema.NullOr(Schema.String)),
    branch: Schema.optional(Schema.NullOr(Schema.String)),
    status: Schema.optional(
      Schema.suspend(() => TaskRunDetailStatusEnumSchema),
    ),
    environment: Schema.optional(Schema.Literals(["local", "cloud"])),
    runtime_adapter: Schema.optional(Schema.Unknown),
    provider: Schema.optional(Schema.Unknown),
    model: Schema.optional(Schema.NullOr(Schema.String)),
    reasoning_effort: Schema.optional(Schema.Unknown),
    log_url: Schema.optional(Schema.NullOr(Schema.String)),
    error_message: Schema.optional(Schema.NullOr(Schema.String)),
    output: Schema.optional(Schema.NullOr(Schema.Unknown)),
    state: Schema.optional(Schema.Unknown),
    artifacts: Schema.optional(
      Schema.Array(Schema.suspend(() => TaskRunArtifactResponseSchema)),
    ),
    created_at: Schema.optional(Schema.String),
    updated_at: Schema.optional(Schema.String),
    completed_at: Schema.optional(Schema.NullOr(Schema.String)),
  });
export type TasksRunsResumeInCloudCreateOutput =
  typeof TasksRunsResumeInCloudCreateOutput.Type;

// The operation
/**
 * Resume task run in cloud
 *
 * Resume an existing task run in a cloud sandbox. Terminates any existing workflow and starts a new one.
 *
 * @param id - A UUID string identifying this task run.
 * @param project_id - Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
 */
export const tasksRunsResumeInCloudCreate =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: TasksRunsResumeInCloudCreateInput,
    outputSchema: TasksRunsResumeInCloudCreateOutput,
    errors: [BadRequest, Forbidden, NotFound] as const,
  }));
