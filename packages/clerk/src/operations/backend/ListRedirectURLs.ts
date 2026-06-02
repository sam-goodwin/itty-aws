import * as Schema from "effect/Schema";
import { API } from "../../backend-client.ts";
import * as T from "../../traits.ts";

// Input Schema
export const ListRedirectURLsInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  paginated: Schema.optional(Schema.Boolean),
  limit: Schema.optional(Schema.Number),
  offset: Schema.optional(Schema.Number),
}).pipe(T.Http({ method: "GET", path: "/redirect_urls" }));
export type ListRedirectURLsInput = typeof ListRedirectURLsInput.Type;

// Output Schema
export const ListRedirectURLsOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Array(
  Schema.Struct({
    object: Schema.Literals(["redirect_url"]),
    id: Schema.String,
    url: Schema.String,
    created_at: Schema.Number,
    updated_at: Schema.Number,
  }),
);
export type ListRedirectURLsOutput = typeof ListRedirectURLsOutput.Type;

// The operation
/**
 * List all redirect URLs
 *
 * Lists all whitelisted redirect_urls for the instance
 *
 * @param paginated - Whether to paginate the results.
If true, the results will be paginated.
If false, the results will not be paginated.
 * @param limit - Applies a limit to the number of results returned.
Can be used for paginating the results together with `offset`.
 * @param offset - Skip the first `offset` results when paginating.
Needs to be an integer greater or equal to zero.
To be used in conjunction with `limit`.
 */
export const ListRedirectURLs = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: ListRedirectURLsInput,
  outputSchema: ListRedirectURLsOutput,
}));
