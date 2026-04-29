import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";

// Input Schema
export const ClearCacheInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
  {},
).pipe(T.Http({ method: "POST", path: "/operations/cache/clear" }));
export type ClearCacheInput = typeof ClearCacheInput.Type;

// Output Schema
export const ClearCacheOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  success: Schema.Boolean,
});
export type ClearCacheOutput = typeof ClearCacheOutput.Type;

// The operation
/**
 * Clear the cached responses of search requests in the LRU cache.
 *
 * Clear the cached responses of search requests that are sent with `use_cache` parameter in the LRU cache.
 */
export const clearCache = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: ClearCacheInput,
  outputSchema: ClearCacheOutput,
}));
