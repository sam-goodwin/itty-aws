import * as Schema from "effect/Schema";
import { API } from "../../client.ts";
import * as T from "../../traits.ts";
import { Forbidden, NotFound } from "../../errors.ts";

// Input Schema
export interface QueryLogRetrieveInput {
  id: string;
  project_id: string;
}
export const QueryLogRetrieveInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  id: Schema.String.pipe(T.PathParam()),
  project_id: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({ method: "GET", path: "/api/projects/{project_id}/query/{id}/log/" }),
) as unknown as Schema.Codec<QueryLogRetrieveInput>;

// Output Schema
export type QueryLogRetrieveOutput = Record<string, unknown>;
export const QueryLogRetrieveOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Record(
  Schema.String,
  Schema.Unknown,
) as unknown as Schema.Codec<QueryLogRetrieveOutput>;

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
