import * as Schema from "effect/Schema";
import {
  MultiSearchCollectionParametersSchema,
  MultiSearchResultItemSchema,
  SearchResultConversationSchema,
} from "./_schemas.ts";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { BadRequest } from "../errors.ts";

// Input Schema
export const MultiSearchInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  multiSearchParameters: Schema.String,
  union: Schema.optional(Schema.Boolean),
  searches: Schema.Array(
    Schema.suspend(() => MultiSearchCollectionParametersSchema),
  ),
}).pipe(T.Http({ method: "POST", path: "/multi_search" }));
export type MultiSearchInput = typeof MultiSearchInput.Type;

// Output Schema
export const MultiSearchOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  results: Schema.Array(Schema.suspend(() => MultiSearchResultItemSchema)),
  conversation: Schema.optional(
    Schema.suspend(() => SearchResultConversationSchema),
  ),
});
export type MultiSearchOutput = typeof MultiSearchOutput.Type;

// The operation
/**
 * send multiple search requests in a single HTTP request
 *
 * This is especially useful to avoid round-trip network latencies incurred otherwise if each of these requests are sent in separate HTTP requests. You can also use this feature to do a federated search across multiple collections in a single HTTP request.
 */
export const multiSearch = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: MultiSearchInput,
  outputSchema: MultiSearchOutput,
  errors: [BadRequest] as const,
}));
