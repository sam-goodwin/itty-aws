import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";

// Input Schema
export const HintCacheWarmInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  namespace: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({ method: "GET", path: "/v1/namespaces/{namespace}/hint_cache_warm" }),
);
export type HintCacheWarmInput = typeof HintCacheWarmInput.Type;

// Output Schema
export const HintCacheWarmOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type HintCacheWarmOutput = typeof HintCacheWarmOutput.Type;

// The operation
/**
 * Signal turbopuffer to prepare for low-latency requests.
 *
 * @param namespace - The name of the namespace.
 */
export const HintCacheWarm = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: HintCacheWarmInput,
  outputSchema: HintCacheWarmOutput,
}));
