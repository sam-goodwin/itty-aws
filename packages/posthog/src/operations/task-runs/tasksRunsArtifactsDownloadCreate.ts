import * as Schema from "effect/Schema";
import { API } from "../../client";
import * as T from "../../traits";
import { BadRequest, Forbidden, NotFound } from "../../errors";

// Input Schema
export const TasksRunsArtifactsDownloadCreateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.String.pipe(T.PathParam()),
    project_id: Schema.String.pipe(T.PathParam()),
    task_id: Schema.String.pipe(T.PathParam()),
    storage_path: Schema.String,
  }).pipe(
    T.Http({
      method: "POST",
      path: "/api/projects/{project_id}/tasks/{task_id}/runs/{id}/artifacts/download/",
    }),
  );
export type TasksRunsArtifactsDownloadCreateInput =
  typeof TasksRunsArtifactsDownloadCreateInput.Type;

// Output Schema
export const TasksRunsArtifactsDownloadCreateOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type TasksRunsArtifactsDownloadCreateOutput =
  typeof TasksRunsArtifactsDownloadCreateOutput.Type;

// The operation
/**
 * Download an artifact through the backend
 *
 * Streams artifact content for a task run artifact after validating that it belongs to the run.
 *
 * @param id - A UUID string identifying this task run.
 * @param project_id - Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
 */
export const tasksRunsArtifactsDownloadCreate =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: TasksRunsArtifactsDownloadCreateInput,
    outputSchema: TasksRunsArtifactsDownloadCreateOutput,
    errors: [BadRequest, Forbidden, NotFound] as const,
  }));
