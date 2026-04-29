import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";

// Input Schema
export const DebugInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).pipe(
  T.Http({ method: "GET", path: "/debug" }),
);
export type DebugInput = typeof DebugInput.Type;

// Output Schema
export const DebugOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  version: Schema.optional(Schema.String),
});
export type DebugOutput = typeof DebugOutput.Type;

// The operation
/**
 * Print debugging information
 */
export const debug = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: DebugInput,
  outputSchema: DebugOutput,
}));
