import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";

// Input Schema
export const RetrieveAPIStatsInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
  {},
).pipe(T.Http({ method: "GET", path: "/stats.json" }));
export type RetrieveAPIStatsInput = typeof RetrieveAPIStatsInput.Type;

// Output Schema
export const RetrieveAPIStatsOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
  {
    delete_latency_ms: Schema.optional(Schema.Number),
    delete_requests_per_second: Schema.optional(Schema.Number),
    import_latency_ms: Schema.optional(Schema.Number),
    import_requests_per_second: Schema.optional(Schema.Number),
    latency_ms: Schema.optional(Schema.Unknown),
    overloaded_requests_per_second: Schema.optional(Schema.Number),
    pending_write_batches: Schema.optional(Schema.Number),
    requests_per_second: Schema.optional(Schema.Unknown),
    search_latency_ms: Schema.optional(Schema.Number),
    search_requests_per_second: Schema.optional(Schema.Number),
    total_requests_per_second: Schema.optional(Schema.Number),
    write_latency_ms: Schema.optional(Schema.Number),
    write_requests_per_second: Schema.optional(Schema.Number),
  },
);
export type RetrieveAPIStatsOutput = typeof RetrieveAPIStatsOutput.Type;

// The operation
/**
 * Get stats about API endpoints.
 *
 * Retrieve the stats about API endpoints.
 */
export const retrieveAPIStats = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: RetrieveAPIStatsInput,
  outputSchema: RetrieveAPIStatsOutput,
}));
