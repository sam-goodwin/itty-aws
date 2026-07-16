import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";

// Input Schema
export interface RetrieveMetricsInput {}
export const RetrieveMetricsInput = /*@__PURE__*/ Schema.Struct({}).pipe(
  T.Http({ method: "GET", path: "/metrics.json" }),
) as unknown as Schema.Codec<RetrieveMetricsInput>;

// Output Schema
export type RetrieveMetricsOutput = unknown;
export const RetrieveMetricsOutput =
  /*@__PURE__*/ Schema.Unknown as unknown as Schema.Codec<RetrieveMetricsOutput>;

// The operation
/**
 * Get current RAM, CPU, Disk & Network usage metrics.
 *
 * Retrieve the metrics.
 */
export const retrieveMetrics = /*@__PURE__*/ API.make(() => ({
  inputSchema: RetrieveMetricsInput,
  outputSchema: RetrieveMetricsOutput,
}));
