import * as Schema from "effect/Schema";
import { API } from "../../client.ts";
import * as T from "../../traits.ts";
import { BadRequest, Forbidden, NotFound } from "../../errors.ts";

// Input Schema
export interface TasksStagedArtifactsPrepareUploadCreateInput {
  id: string;
  project_id: string;
  artifacts?: {
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
    size?: number;
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
export const TasksStagedArtifactsPrepareUploadCreateInput =
  /*@__PURE__*/ Schema.Struct({
    id: Schema.String.pipe(T.PathParam()),
    project_id: Schema.String.pipe(T.PathParam()),
    artifacts: Schema.optional(
      Schema.Array(
        Schema.Struct({
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
        }),
      ),
    ),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/api/projects/{project_id}/tasks/{id}/staged_artifacts/prepare_upload/",
    }),
  ) as unknown as Schema.Codec<TasksStagedArtifactsPrepareUploadCreateInput>;

// Output Schema
export interface TasksStagedArtifactsPrepareUploadCreateOutput {
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
    expires_in?: number;
    presigned_post?: { url?: string; fields?: Record<string, string> };
  }[];
}
export const TasksStagedArtifactsPrepareUploadCreateOutput =
  /*@__PURE__*/ Schema.Struct({
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
          expires_in: Schema.optional(Schema.Number),
          presigned_post: Schema.optional(
            Schema.Struct({
              url: Schema.optional(Schema.String),
              fields: Schema.optional(
                Schema.Record(Schema.String, Schema.String),
              ),
            }),
          ),
        }),
      ),
    ),
  }) as unknown as Schema.Codec<TasksStagedArtifactsPrepareUploadCreateOutput>;

// The operation
/**
 * Prepare staged direct uploads for task attachments
 *
 * Reserve S3 object keys for task attachments before creating a new run and return presigned POST forms for direct uploads.
 *
 * @param project_id - Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
 */
export const tasksStagedArtifactsPrepareUploadCreate =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: TasksStagedArtifactsPrepareUploadCreateInput,
    outputSchema: TasksStagedArtifactsPrepareUploadCreateOutput,
    errors: [BadRequest, Forbidden, NotFound] as const,
  }));
