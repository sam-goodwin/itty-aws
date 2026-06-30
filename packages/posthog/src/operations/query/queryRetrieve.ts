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
  query_status: Schema.optional(
    Schema.Struct({
      complete: Schema.optional(Schema.Unknown),
      dashboard_id: Schema.optional(Schema.Unknown),
      end_time: Schema.optional(Schema.Unknown),
      error: Schema.optional(Schema.Unknown),
      error_message: Schema.optional(Schema.Unknown),
      expiration_time: Schema.optional(Schema.Unknown),
      id: Schema.optional(Schema.String),
      insight_id: Schema.optional(Schema.Unknown),
      labels: Schema.optional(Schema.Unknown),
      pickup_time: Schema.optional(Schema.Unknown),
      query_async: Schema.optional(Schema.Boolean),
      query_progress: Schema.optional(Schema.Unknown),
      results: Schema.optional(Schema.Unknown),
      start_time: Schema.optional(Schema.Unknown),
      task_id: Schema.optional(Schema.Unknown),
      team_id: Schema.optional(Schema.Number),
    }),
  ),
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
