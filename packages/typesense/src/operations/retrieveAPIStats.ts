import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";

// Input Schema
export interface RetrieveAPIStatsInput {}
export const RetrieveAPIStatsInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
  {},
).pipe(
  T.Http({ method: "GET", path: "/stats.json" }),
) as unknown as Schema.Codec<RetrieveAPIStatsInput>;

// Output Schema
export interface RetrieveAPIStatsOutput {
  delete_latency_ms?: number;
  delete_requests_per_second?: number;
  import_latency_ms?: number;
  import_requests_per_second?: number;
  latency_ms?: unknown;
  overloaded_requests_per_second?: number;
  pending_write_batches?: number;
  requests_per_second?: unknown;
  search_latency_ms?: number;
  search_requests_per_second?: number;
  total_requests_per_second?: number;
  write_latency_ms?: number;
  write_requests_per_second?: number;
}
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
) as unknown as Schema.Codec<RetrieveAPIStatsOutput>;

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
