import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";

// Input Schema
export const GetAnalyticsStatusInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).pipe(
    T.Http({ method: "GET", path: "/analytics/status" }),
  );
export type GetAnalyticsStatusInput = typeof GetAnalyticsStatusInput.Type;

// Output Schema
export const GetAnalyticsStatusOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    popular_prefix_queries: Schema.optional(Schema.Number),
    nohits_prefix_queries: Schema.optional(Schema.Number),
    log_prefix_queries: Schema.optional(Schema.Number),
    query_log_events: Schema.optional(Schema.Number),
    query_counter_events: Schema.optional(Schema.Number),
    doc_log_events: Schema.optional(Schema.Number),
    doc_counter_events: Schema.optional(Schema.Number),
  });
export type GetAnalyticsStatusOutput = typeof GetAnalyticsStatusOutput.Type;

// The operation
/**
 * Get analytics subsystem status
 *
 * Returns sizes of internal analytics buffers and queues.
 */
export const getAnalyticsStatus = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: GetAnalyticsStatusInput,
  outputSchema: GetAnalyticsStatusOutput,
}));
