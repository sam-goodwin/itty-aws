import * as Schema from "effect/Schema";
import { API } from "../../client.ts";
import * as T from "../../traits.ts";
import { BadRequest, Forbidden, NotFound } from "../../errors.ts";

// Input Schema
export const TasksRunsArtifactsPrepareUploadCreateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.String.pipe(T.PathParam()),
    project_id: Schema.String.pipe(T.PathParam()),
    task_id: Schema.String.pipe(T.PathParam()),
    artifacts: Schema.Array(
      Schema.Struct({
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
        size: Schema.Number,
        content_type: Schema.optional(Schema.String),
      }),
    ),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/api/projects/{project_id}/tasks/{task_id}/runs/{id}/artifacts/prepare_upload/",
    }),
  );
export type TasksRunsArtifactsPrepareUploadCreateInput =
  typeof TasksRunsArtifactsPrepareUploadCreateInput.Type;

// Output Schema
export const TasksRunsArtifactsPrepareUploadCreateOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    artifacts: Schema.Array(
      Schema.Struct({
        id: Schema.String,
        name: Schema.String,
        type: Schema.String,
        source: Schema.optional(Schema.String),
        size: Schema.Number,
        content_type: Schema.optional(Schema.String),
        storage_path: Schema.String,
        expires_in: Schema.Number,
        presigned_post: Schema.Struct({
          url: Schema.String,
          fields: Schema.Record(Schema.String, Schema.String),
        }),
      }),
    ),
  });
export type TasksRunsArtifactsPrepareUploadCreateOutput =
  typeof TasksRunsArtifactsPrepareUploadCreateOutput.Type;

// The operation
/**
 * Prepare direct uploads for task run artifacts
 *
 * Reserve S3 object keys for task artifacts and return presigned POST forms for direct uploads.
 *
 * @param id - A UUID string identifying this task run.
 * @param project_id - Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
 */
export const tasksRunsArtifactsPrepareUploadCreate =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: TasksRunsArtifactsPrepareUploadCreateInput,
    outputSchema: TasksRunsArtifactsPrepareUploadCreateOutput,
    errors: [BadRequest, Forbidden, NotFound] as const,
  }));
