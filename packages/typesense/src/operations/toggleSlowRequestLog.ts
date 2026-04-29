import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";

// Input Schema
export const ToggleSlowRequestLogInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    "log-slow-requests-time-ms": Schema.Number,
  }).pipe(T.Http({ method: "POST", path: "/config" }));
export type ToggleSlowRequestLogInput = typeof ToggleSlowRequestLogInput.Type;

// Output Schema
export const ToggleSlowRequestLogOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    success: Schema.Boolean,
  });
export type ToggleSlowRequestLogOutput = typeof ToggleSlowRequestLogOutput.Type;

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
