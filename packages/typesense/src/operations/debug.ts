import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";

// Input Schema
export interface DebugInput {}
export const DebugInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).pipe(
  T.Http({ method: "GET", path: "/debug" }),
) as unknown as Schema.Codec<DebugInput>;

// Output Schema
export interface DebugOutput {
  version?: string;
}
export const DebugOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  version: Schema.optional(Schema.String),
}) as unknown as Schema.Codec<DebugOutput>;

// The operation
/**
 * Print debugging information
 */
export const debug = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: DebugInput,
  outputSchema: DebugOutput,
}));
