import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";

// Input Schema
export const ListSshKeysInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  per_page: Schema.optional(Schema.Number),
  cursor: Schema.optional(Schema.String),
}).pipe(T.Http({ method: "GET", path: "/ssh-keys" }));
export type ListSshKeysInput = typeof ListSshKeysInput.Type;

// Output Schema
export const ListSshKeysOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  ssh_keys: Schema.optional(
    Schema.Array(
      Schema.Struct({
        id: Schema.optional(Schema.String),
        date_created: Schema.optional(Schema.String),
        name: Schema.optional(Schema.String),
        ssh_key: Schema.optional(Schema.String),
      }),
    ),
  ),
  meta: Schema.optional(
    Schema.Struct({
      total: Schema.optional(Schema.Number),
      links: Schema.optional(
        Schema.Struct({
          next: Schema.optional(Schema.String),
          prev: Schema.optional(Schema.String),
        }),
      ),
    }),
  ),
});
export type ListSshKeysOutput = typeof ListSshKeysOutput.Type;

// The operation
/**
 * List SSH Keys
 *
 * List all SSH Keys in your account.
 *
 * @param per_page - Number of items requested per page. Default is 100 and Max is 500.

 * @param cursor - Cursor for paging. See [Meta and Pagination](#section/Introduction/Meta-and-Pagination).
 */
export const listSshKeys = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: ListSshKeysInput,
  outputSchema: ListSshKeysOutput,
}));
