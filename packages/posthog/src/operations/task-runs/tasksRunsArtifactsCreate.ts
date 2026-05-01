import * as Schema from "effect/Schema";
import { API } from "../../client.ts";
import * as T from "../../traits.ts";
import { BadRequest, Forbidden, NotFound } from "../../errors.ts";

// Input Schema
export const TasksRunsArtifactsCreateInput =
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
        content: Schema.String,
        content_encoding: Schema.optional(Schema.Literals(["utf-8", "base64"])),
        content_type: Schema.optional(Schema.String),
      }),
    ),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/api/projects/{project_id}/tasks/{task_id}/runs/{id}/artifacts/",
    }),
  );
export type TasksRunsArtifactsCreateInput =
  typeof TasksRunsArtifactsCreateInput.Type;

// Output Schema
export const TasksRunsArtifactsCreateOutput =
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
export type TasksRunsArtifactsCreateOutput =
  typeof TasksRunsArtifactsCreateOutput.Type;

// The operation
/**
 * Upload artifacts for a task run
 *
 * Persist task artifacts to S3 and attach them to the run manifest.
 *
 * @param id - A UUID string identifying this task run.
 * @param project_id - Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
 */
export const tasksRunsArtifactsCreate = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: TasksRunsArtifactsCreateInput,
    outputSchema: TasksRunsArtifactsCreateOutput,
    errors: [BadRequest, Forbidden, NotFound] as const,
  }),
);
