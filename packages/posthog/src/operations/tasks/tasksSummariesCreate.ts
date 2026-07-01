import * as Schema from "effect/Schema";
import { API } from "../../client.ts";
import * as T from "../../traits.ts";

// Input Schema
export interface TasksSummariesCreateInput {
  project_id: string;
  limit?: number;
  offset?: number;
  ids: string[];
}
export const TasksSummariesCreateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    project_id: Schema.String.pipe(T.PathParam()),
    limit: Schema.optional(Schema.Number),
    offset: Schema.optional(Schema.Number),
    ids: Schema.Array(Schema.String),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/api/projects/{project_id}/tasks/summaries/",
    }),
  ) as unknown as Schema.Codec<TasksSummariesCreateInput>;

// Output Schema
export interface TasksSummariesCreateOutput {
  count: number;
  next?: string | null;
  previous?: string | null;
  results: {
    id: string;
    title: string;
    repository: string | null;
    created_at: string;
    updated_at: string;
    latest_run?: {
      status:
        | "not_started"
        | "queued"
        | "in_progress"
        | "completed"
        | "failed"
        | "cancelled"
        | null;
      environment: "local" | "cloud" | null;
    } | null;
  }[];
}
export const TasksSummariesCreateOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    count: Schema.Number,
    next: Schema.optional(Schema.NullOr(Schema.String)),
    previous: Schema.optional(Schema.NullOr(Schema.String)),
    results: Schema.Array(
      Schema.Struct({
        id: Schema.String,
        title: Schema.String,
        repository: Schema.NullOr(Schema.String),
        created_at: Schema.String,
        updated_at: Schema.String,
        latest_run: Schema.optional(
          Schema.NullOr(
            Schema.Struct({
              status: Schema.NullOr(
                Schema.Literals([
                  "not_started",
                  "queued",
                  "in_progress",
                  "completed",
                  "failed",
                  "cancelled",
                ]),
              ),
              environment: Schema.NullOr(Schema.Literals(["local", "cloud"])),
            }),
          ),
        ),
      }),
    ),
  }) as unknown as Schema.Codec<TasksSummariesCreateOutput>;

// The operation
/**
 * Fetch task summaries by ID
 *
 * Returns summary for the requested tasks: `id`, `title`, `repository`, `created_at`, `updated_at`, and the latest run's `status` and `environment`.
 *
 * @param limit - Page size for the paginated response.
 * @param offset - Offset into the result set for pagination.
 * @param project_id - Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
 */
export const tasksSummariesCreate = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: TasksSummariesCreateInput,
    outputSchema: TasksSummariesCreateOutput,
  }),
);
