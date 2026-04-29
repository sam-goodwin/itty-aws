import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";

// Input Schema
export const RetrieveMetricsInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
  {},
).pipe(T.Http({ method: "GET", path: "/metrics.json" }));
export type RetrieveMetricsInput = typeof RetrieveMetricsInput.Type;

// Output Schema
export const RetrieveMetricsOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Unknown;
export type RetrieveMetricsOutput = typeof RetrieveMetricsOutput.Type;

// The operation
/**
 * Get current RAM, CPU, Disk & Network usage metrics.
 *
 * Retrieve the metrics.
 */
export const retrieveMetrics = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: RetrieveMetricsInput,
  outputSchema: RetrieveMetricsOutput,
}));
