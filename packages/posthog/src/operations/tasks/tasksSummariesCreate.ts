import * as Schema from "effect/Schema";
import { API } from "../../client.ts";
import * as T from "../../traits.ts";

// Input Schema
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
  );
export type TasksSummariesCreateInput = typeof TasksSummariesCreateInput.Type;

// Output Schema
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
        latest_run: Schema.optional(Schema.Unknown),
      }),
    ),
  });
export type TasksSummariesCreateOutput = typeof TasksSummariesCreateOutput.Type;

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
