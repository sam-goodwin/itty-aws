import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";

// Input Schema
export interface ToggleSlowRequestLogInput {
  "log-slow-requests-time-ms": number;
}
export const ToggleSlowRequestLogInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    "log-slow-requests-time-ms": Schema.Number,
  }).pipe(
    T.Http({ method: "POST", path: "/config" }),
  ) as unknown as Schema.Codec<ToggleSlowRequestLogInput>;

// Output Schema
export interface ToggleSlowRequestLogOutput {
  success: boolean;
}
export const ToggleSlowRequestLogOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    success: Schema.Boolean,
  }) as unknown as Schema.Codec<ToggleSlowRequestLogOutput>;

// The operation
/**
 * Toggle Slow Request Log
 *
 * Enable logging of requests that take over a defined threshold of time. Default is `-1` which disables slow request logging. Slow requests are logged to the primary log file, with the prefix SLOW REQUEST.
 */
export const toggleSlowRequestLog = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: ToggleSlowRequestLogInput,
    outputSchema: ToggleSlowRequestLogOutput,
  }),
);
