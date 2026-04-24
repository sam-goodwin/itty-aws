import * as Schema from "effect/Schema";
import { API } from "../../client";
import * as T from "../../traits";

// Input Schema
export const QueryMetricsInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  format: Schema.optional(Schema.Literals(["metrics-v1", "metrics-v2"])),
  endTime: Schema.String,
  mpl: Schema.optional(Schema.String),
  startTime: Schema.String,
}).pipe(T.Http({ method: "POST", path: "/v1/query/_mpl" }));
export type QueryMetricsInput = typeof QueryMetricsInput.Type;

// Output Schema
export const QueryMetricsOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Unknown;
export type QueryMetricsOutput = typeof QueryMetricsOutput.Type;

// The operation
/**
 *
 * @param format - Response format. If omitted, the Accept header is used for content negotiation. Defaults to metrics-v2 when neither is specified.
 */
export const queryMetrics = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: QueryMetricsInput,
  outputSchema: QueryMetricsOutput,
}));
