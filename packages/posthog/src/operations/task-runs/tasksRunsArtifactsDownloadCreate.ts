import * as Schema from "effect/Schema";
import { API } from "../../client.ts";
import * as T from "../../traits.ts";
import { BadRequest, Forbidden, NotFound } from "../../errors.ts";

// Input Schema
export interface TasksRunsArtifactsDownloadCreateInput {
  id: string;
  project_id: string;
  task_id: string;
  storage_path?: string;
}
export const TasksRunsArtifactsDownloadCreateInput =
  /*@__PURE__*/ Schema.Struct({
    id: Schema.String.pipe(T.PathParam()),
    project_id: Schema.String.pipe(T.PathParam()),
    task_id: Schema.String.pipe(T.PathParam()),
    storage_path: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/api/projects/{project_id}/tasks/{task_id}/runs/{id}/artifacts/download/",
    }),
  ) as unknown as Schema.Codec<TasksRunsArtifactsDownloadCreateInput>;

// Output Schema
export type TasksRunsArtifactsDownloadCreateOutput = void;
export const TasksRunsArtifactsDownloadCreateOutput =
  /*@__PURE__*/ Schema.Void as unknown as Schema.Codec<TasksRunsArtifactsDownloadCreateOutput>;

// The operation
/**
 * Download an artifact through the backend
 *
 * Streams artifact content for a task run artifact after validating that it belongs to the run.
 *
 * @param project_id - Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
 */
export const tasksRunsArtifactsDownloadCreate =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: TasksRunsArtifactsDownloadCreateInput,
    outputSchema: TasksRunsArtifactsDownloadCreateOutput,
    errors: [BadRequest, Forbidden, NotFound] as const,
  }));
