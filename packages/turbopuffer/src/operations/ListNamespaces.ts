import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";

// Input Schema
export const ListNamespacesInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  cursor: Schema.optional(Schema.String),
  prefix: Schema.optional(Schema.String),
  page_size: Schema.optional(Schema.Number),
}).pipe(T.Http({ method: "GET", path: "/v1/namespaces" }));
export type ListNamespacesInput = typeof ListNamespacesInput.Type;

// Output Schema
export const ListNamespacesOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  namespaces: Schema.optional(
    Schema.Array(
      Schema.Struct({
        id: Schema.String,
      }),
    ),
  ),
  next_cursor: Schema.optional(Schema.String),
});
export type ListNamespacesOutput = typeof ListNamespacesOutput.Type;

// The operation
/**
 * List namespaces.
 *
 * @param cursor - Retrieve the next page of results.
 * @param prefix - Retrieve only the namespaces that match the prefix.
 * @param page_size - Limit the number of results per page.
 */
export const ListNamespaces = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: ListNamespacesInput,
  outputSchema: ListNamespacesOutput,
}));
