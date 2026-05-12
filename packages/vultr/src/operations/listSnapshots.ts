import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";

// Input Schema
export const ListSnapshotsInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  description: Schema.optional(Schema.String),
  per_page: Schema.optional(Schema.Number),
  cursor: Schema.optional(Schema.String),
}).pipe(T.Http({ method: "GET", path: "/snapshots" }));
export type ListSnapshotsInput = typeof ListSnapshotsInput.Type;

// Output Schema
export const ListSnapshotsOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  snapshots: Schema.optional(
    Schema.Array(
      Schema.Struct({
        id: Schema.optional(Schema.String),
        date_created: Schema.optional(Schema.String),
        description: Schema.optional(Schema.String),
        size: Schema.optional(Schema.Number),
        status: Schema.optional(Schema.String),
        os_id: Schema.optional(Schema.Number),
        app_id: Schema.optional(Schema.Number),
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
export type ListSnapshotsOutput = typeof ListSnapshotsOutput.Type;

// The operation
/**
 * List Snapshots
 *
 * Get information about all Snapshots in your account.
 *
 * @param description - Filter the list of Snapshots by `description`
 * @param per_page - Number of items requested per page. Default is 100 and Max is 500.
 * @param cursor - Cursor for paging. See [Meta and Pagination](#section/Introduction/Meta-and-Pagination).
 */
export const listSnapshots = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: ListSnapshotsInput,
  outputSchema: ListSnapshotsOutput,
}));
