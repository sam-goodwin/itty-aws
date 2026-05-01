import * as Schema from "effect/Schema";
import { API } from "../../client.ts";
import * as T from "../../traits.ts";
import { BadRequest, Forbidden, NotFound } from "../../errors.ts";

// Input Schema
export const TasksRunsArtifactsPresignCreateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.String.pipe(T.PathParam()),
    project_id: Schema.String.pipe(T.PathParam()),
    task_id: Schema.String.pipe(T.PathParam()),
    storage_path: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/api/projects/{project_id}/tasks/{task_id}/runs/{id}/artifacts/presign/",
    }),
  );
export type TasksRunsArtifactsPresignCreateInput =
  typeof TasksRunsArtifactsPresignCreateInput.Type;

// Output Schema
export const TasksRunsArtifactsPresignCreateOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    url: Schema.optional(Schema.String),
    expires_in: Schema.optional(Schema.Number),
  });
export type TasksRunsArtifactsPresignCreateOutput =
  typeof TasksRunsArtifactsPresignCreateOutput.Type;

// The operation
/**
 * Generate presigned URL for an artifact
 *
 * Returns a temporary, signed URL that can be used to download a specific artifact.
 *
 * @param id - A UUID string identifying this task run.
 * @param project_id - Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
 */
export const tasksRunsArtifactsPresignCreate =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: TasksRunsArtifactsPresignCreateInput,
    outputSchema: TasksRunsArtifactsPresignCreateOutput,
    errors: [BadRequest, Forbidden, NotFound] as const,
  }));
