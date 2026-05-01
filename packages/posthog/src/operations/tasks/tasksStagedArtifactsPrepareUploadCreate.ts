import * as Schema from "effect/Schema";
import { API } from "../../client.ts";
import * as T from "../../traits.ts";
import { BadRequest, Forbidden, NotFound } from "../../errors.ts";

// Input Schema
export const TasksStagedArtifactsPrepareUploadCreateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.String.pipe(T.PathParam()),
    project_id: Schema.String.pipe(T.PathParam()),
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
      path: "/api/projects/{project_id}/tasks/{id}/staged_artifacts/prepare_upload/",
    }),
  );
export type TasksStagedArtifactsPrepareUploadCreateInput =
  typeof TasksStagedArtifactsPrepareUploadCreateInput.Type;

// Output Schema
export const TasksStagedArtifactsPrepareUploadCreateOutput =
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
export type TasksStagedArtifactsPrepareUploadCreateOutput =
  typeof TasksStagedArtifactsPrepareUploadCreateOutput.Type;

// The operation
/**
 * Prepare staged direct uploads for task attachments
 *
 * Reserve S3 object keys for task attachments before creating a new run and return presigned POST forms for direct uploads.
 *
 * @param id - A UUID string identifying this task.
 * @param project_id - Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
 */
export const tasksStagedArtifactsPrepareUploadCreate =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: TasksStagedArtifactsPrepareUploadCreateInput,
    outputSchema: TasksStagedArtifactsPrepareUploadCreateOutput,
    errors: [BadRequest, Forbidden, NotFound] as const,
  }));
