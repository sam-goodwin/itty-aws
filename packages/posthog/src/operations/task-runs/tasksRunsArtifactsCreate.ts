import * as Schema from "effect/Schema";
import { API } from "../../client.ts";
import * as T from "../../traits.ts";
import { BadRequest, Forbidden, NotFound } from "../../errors.ts";

// Input Schema
export interface TasksRunsArtifactsCreateInput {
  id: string;
  project_id: string;
  task_id: string;
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
    content?: string;
    content_encoding?: "utf-8" | "base64";
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
export const TasksRunsArtifactsCreateInput =
  /*@__PURE__*/ Schema.Struct({
    id: Schema.String.pipe(T.PathParam()),
    project_id: Schema.String.pipe(T.PathParam()),
    task_id: Schema.String.pipe(T.PathParam()),
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
          content: Schema.optional(Schema.String),
          content_encoding: Schema.optional(
            Schema.Literals(["utf-8", "base64"]),
          ),
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
      path: "/api/projects/{project_id}/tasks/{task_id}/runs/{id}/artifacts/",
    }),
  ) as unknown as Schema.Codec<TasksRunsArtifactsCreateInput>;

// Output Schema
export interface TasksRunsArtifactsCreateOutput {
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
export const TasksRunsArtifactsCreateOutput =
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
          uploaded_at: Schema.optional(Schema.String),
        }),
      ),
    ),
  }) as unknown as Schema.Codec<TasksRunsArtifactsCreateOutput>;

// The operation
/**
 * Upload artifacts for a task run
 *
 * Persist task artifacts to S3 and attach them to the run manifest.
 *
 * @param project_id - Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
 */
export const tasksRunsArtifactsCreate = /*@__PURE__*/ API.make(() => ({
  inputSchema: TasksRunsArtifactsCreateInput,
  outputSchema: TasksRunsArtifactsCreateOutput,
  errors: [BadRequest, Forbidden, NotFound] as const,
}));
