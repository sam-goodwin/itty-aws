import * as Schema from "effect/Schema";
import { API } from "../../client";
import * as T from "../../traits";
import { Forbidden, NotFound } from "../../errors";

// Input Schema
export const QueryLogRetrieveInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  id: Schema.String.pipe(T.PathParam()),
  project_id: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({ method: "GET", path: "/api/projects/{project_id}/query/{id}/log/" }),
);
export type QueryLogRetrieveInput = typeof QueryLogRetrieveInput.Type;

// Output Schema
export const QueryLogRetrieveOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Record(
  Schema.String,
  Schema.Unknown,
);
export type QueryLogRetrieveOutput = typeof QueryLogRetrieveOutput.Type;

// The operation
/**
 * Get query log details from query_log_archive table for a specific query_id, the query must have been issued in last 24 hours.
 *
 * @param project_id - Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
 */
export const queryLogRetrieve = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: QueryLogRetrieveInput,
  outputSchema: QueryLogRetrieveOutput,
  errors: [Forbidden, NotFound] as const,
}));
