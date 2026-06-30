import * as Schema from "effect/Schema";
import { API } from "../../client.ts";
import * as T from "../../traits.ts";
import { BadRequest, Forbidden, NotFound } from "../../errors.ts";

// Input Schema
export interface TasksStagedArtifactsFinalizeUploadCreateInput {
  id: string;
  project_id: string;
  artifacts?: {
    id?: string;
    name?: string;
    type?:
      | "plan"
      | "context"
      | "reference"
      | "output"
      | "artifact"
      | "tree_snapshot"
      | "user_attachment"
      | "skill_bundle";
    source?: string;
    storage_path?: string;
    content_type?: string;
    metadata?: {
      skill_name: string;
      skill_source: "user" | "repo" | "marketplace" | "codex";
      content_sha256: string;
      bundle_format: "zip";
      schema_version: number;
    };
  }[];
}
export const TasksStagedArtifactsFinalizeUploadCreateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.String.pipe(T.PathParam()),
    project_id: Schema.String.pipe(T.PathParam()),
    artifacts: Schema.optional(
      Schema.Array(
        Schema.Struct({
          id: Schema.optional(Schema.String),
          name: Schema.optional(Schema.String),
          type: Schema.optional(
            Schema.Literals([
              "plan",
              "context",
              "reference",
              "output",
              "artifact",
              "tree_snapshot",
              "user_attachment",
              "skill_bundle",
            ]),
          ),
          source: Schema.optional(Schema.String),
          storage_path: Schema.optional(Schema.String),
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
        }),
      ),
    ),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/api/projects/{project_id}/tasks/{id}/staged_artifacts/finalize_upload/",
    }),
  ) as unknown as Schema.Codec<TasksStagedArtifactsFinalizeUploadCreateInput>;

// Output Schema
export interface TasksStagedArtifactsFinalizeUploadCreateOutput {
  artifacts?: {
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
}
export const TasksStagedArtifactsFinalizeUploadCreateOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    artifacts: Schema.optional(
      Schema.Array(
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
    ),
  }) as unknown as Schema.Codec<TasksStagedArtifactsFinalizeUploadCreateOutput>;

// The operation
/**
 * Finalize staged direct uploads for task attachments
 *
 * Verify staged S3 uploads and cache their metadata so they can be attached to the next run created for this task.
 *
 * @param project_id - Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
 */
export const tasksStagedArtifactsFinalizeUploadCreate =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: TasksStagedArtifactsFinalizeUploadCreateInput,
    outputSchema: TasksStagedArtifactsFinalizeUploadCreateOutput,
    errors: [BadRequest, Forbidden, NotFound] as const,
  }));
