import * as Schema from "effect/Schema";
import { API } from "../../client.ts";
import * as T from "../../traits.ts";
import { BadRequest, Forbidden, NotFound } from "../../errors.ts";

// Input Schema
export const TasksRunsArtifactsFinalizeUploadCreateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.String.pipe(T.PathParam()),
    project_id: Schema.String.pipe(T.PathParam()),
    task_id: Schema.String.pipe(T.PathParam()),
    artifacts: Schema.Array(
      Schema.Struct({
        id: Schema.String,
        name: Schema.String,
        type: Schema.Literals([
          "plan",
          "context",
          "reference",
          "output",
          "artifact",
          "tree_snapshot",
          "user_attachment",
        ]),
        source: Schema.optional(Schema.String),
        storage_path: Schema.String,
        content_type: Schema.optional(Schema.String),
      }),
    ),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/api/projects/{project_id}/tasks/{task_id}/runs/{id}/artifacts/finalize_upload/",
    }),
  );
export type TasksRunsArtifactsFinalizeUploadCreateInput =
  typeof TasksRunsArtifactsFinalizeUploadCreateInput.Type;

// Output Schema
export const TasksRunsArtifactsFinalizeUploadCreateOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    artifacts: Schema.Array(
      Schema.Struct({
        id: Schema.optional(Schema.String),
        name: Schema.String,
        type: Schema.String,
        source: Schema.optional(Schema.String),
        size: Schema.optional(Schema.Number),
        content_type: Schema.optional(Schema.String),
        storage_path: Schema.String,
        uploaded_at: Schema.String,
      }),
    ),
  });
export type TasksRunsArtifactsFinalizeUploadCreateOutput =
  typeof TasksRunsArtifactsFinalizeUploadCreateOutput.Type;

// The operation
/**
 * Finalize direct uploads for task run artifacts
 *
 * Verify directly uploaded S3 objects and attach them to the run artifact manifest.
 *
 * @param id - A UUID string identifying this task run.
 * @param project_id - Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
 */
export const tasksRunsArtifactsFinalizeUploadCreate =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: TasksRunsArtifactsFinalizeUploadCreateInput,
    outputSchema: TasksRunsArtifactsFinalizeUploadCreateOutput,
    errors: [BadRequest, Forbidden, NotFound] as const,
  }));
