import * as Schema from "effect/Schema";
import { API } from "../../client.ts";
import * as T from "../../traits.ts";
import { Forbidden, NotFound } from "../../errors.ts";

// Input Schema
export const QueryRetrieveInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  id: Schema.String.pipe(T.PathParam()),
  project_id: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({ method: "GET", path: "/api/projects/{project_id}/query/{id}/" }),
);
export type QueryRetrieveInput = typeof QueryRetrieveInput.Type;

// Output Schema
export const QueryRetrieveOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  query_status: Schema.Struct({
    complete: Schema.optional(Schema.NullOr(Schema.Boolean)),
    dashboard_id: Schema.optional(Schema.NullOr(Schema.Number)),
    end_time: Schema.optional(Schema.NullOr(Schema.String)),
    error: Schema.optional(Schema.NullOr(Schema.Boolean)),
    error_message: Schema.optional(Schema.NullOr(Schema.String)),
    expiration_time: Schema.optional(Schema.NullOr(Schema.String)),
    id: Schema.String,
    insight_id: Schema.optional(Schema.NullOr(Schema.Number)),
    labels: Schema.optional(Schema.NullOr(Schema.Array(Schema.String))),
    pickup_time: Schema.optional(Schema.NullOr(Schema.String)),
    query_async: Schema.optional(Schema.Literals(["true"])),
    query_progress: Schema.optional(
      Schema.Struct({
        active_cpu_time: Schema.Number,
        bytes_read: Schema.Number,
        estimated_rows_total: Schema.Number,
        rows_read: Schema.Number,
        time_elapsed: Schema.Number,
      }),
    ),
    results: Schema.optional(Schema.NullOr(Schema.Unknown)),
    start_time: Schema.optional(Schema.NullOr(Schema.String)),
    task_id: Schema.optional(Schema.NullOr(Schema.String)),
    team_id: Schema.Number,
  }),
});
export type QueryRetrieveOutput = typeof QueryRetrieveOutput.Type;

// The operation
/**
 * (Experimental)
 *
 * @param project_id - Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
 */
export const queryRetrieve = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: QueryRetrieveInput,
  outputSchema: QueryRetrieveOutput,
  errors: [Forbidden, NotFound] as const,
}));
