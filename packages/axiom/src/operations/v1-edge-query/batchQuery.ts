import * as Schema from "effect/Schema";
import { API } from "../../client";
import * as T from "../../traits";

// Input Schema
export const BatchQueryInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  maxConcurrency: Schema.optional(Schema.Number),
  nocache: Schema.optional(Schema.Boolean),
  "apl-source": Schema.optional(Schema.String),
  "apl-source-id": Schema.optional(Schema.String),
}).pipe(T.Http({ method: "POST", path: "/v1/query/batch" }));
export type BatchQueryInput = typeof BatchQueryInput.Type;

// Output Schema
export const BatchQueryOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type BatchQueryOutput = typeof BatchQueryOutput.Type;

// The operation
/**
 *
 * @param maxConcurrency - Maximum number of concurrent queries to execute
 * @param nocache - Whether to bypass cache for all queries in the batch
 * @param apl-source - Contains the source of the APL query (for example console, dashboard, etc.)
 * @param apl-source-id - Contains the id of the source, for example dashboard_id
 */
export const batchQuery = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: BatchQueryInput,
  outputSchema: BatchQueryOutput,
}));
