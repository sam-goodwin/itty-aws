import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";

// Input Schema
export interface FlushAnalyticsInput {}
export const FlushAnalyticsInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
  {},
).pipe(
  T.Http({ method: "POST", path: "/analytics/flush" }),
) as unknown as Schema.Codec<FlushAnalyticsInput>;

// Output Schema
export interface FlushAnalyticsOutput {
  ok: boolean;
}
export const FlushAnalyticsOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  ok: Schema.Boolean,
}) as unknown as Schema.Codec<FlushAnalyticsOutput>;

// The operation
/**
 * Flush in-memory analytics to disk
 *
 * Triggers a flush of analytics data to persistent storage.
 */
export const flushAnalytics = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: FlushAnalyticsInput,
  outputSchema: FlushAnalyticsOutput,
}));
