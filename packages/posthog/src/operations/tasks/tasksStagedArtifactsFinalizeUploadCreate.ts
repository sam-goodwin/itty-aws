import * as Schema from "effect/Schema";
import { API } from "../../client.ts";
import * as T from "../../traits.ts";
import { BadRequest, Forbidden, NotFound } from "../../errors.ts";

// Input Schema
export const TasksStagedArtifactsFinalizeUploadCreateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.String.pipe(T.PathParam()),
    project_id: Schema.String.pipe(T.PathParam()),
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
      path: "/api/projects/{project_id}/tasks/{id}/staged_artifacts/finalize_upload/",
    }),
  );
export type TasksStagedArtifactsFinalizeUploadCreateInput =
  typeof TasksStagedArtifactsFinalizeUploadCreateInput.Type;

// Output Schema
export const TasksStagedArtifactsFinalizeUploadCreateOutput =
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
export type TasksStagedArtifactsFinalizeUploadCreateOutput =
  typeof TasksStagedArtifactsFinalizeUploadCreateOutput.Type;

// The operation
/**
 * Finalize staged direct uploads for task attachments
 *
 * Verify staged S3 uploads and cache their metadata so they can be attached to the next run created for this task.
 *
 * @param id - A UUID string identifying this task.
 * @param project_id - Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
 */
export const tasksStagedArtifactsFinalizeUploadCreate =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: TasksStagedArtifactsFinalizeUploadCreateInput,
    outputSchema: TasksStagedArtifactsFinalizeUploadCreateOutput,
    errors: [BadRequest, Forbidden, NotFound] as const,
  }));
