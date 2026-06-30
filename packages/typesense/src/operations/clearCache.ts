import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";

// Input Schema
export interface ClearCacheInput {}
export const ClearCacheInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
  {},
).pipe(
  T.Http({ method: "POST", path: "/operations/cache/clear" }),
) as unknown as Schema.Codec<ClearCacheInput>;

// Output Schema
export interface ClearCacheOutput {
  success: boolean;
}
export const ClearCacheOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  success: Schema.Boolean,
}) as unknown as Schema.Codec<ClearCacheOutput>;

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
