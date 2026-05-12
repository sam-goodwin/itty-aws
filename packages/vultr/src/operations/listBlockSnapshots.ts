import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { BadRequest } from "../errors.ts";

// Input Schema
export const ListBlockSnapshotsInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    per_page: Schema.optional(Schema.Number),
    cursor: Schema.optional(Schema.String),
  }).pipe(T.Http({ method: "GET", path: "/blocks/snapshots" }));
export type ListBlockSnapshotsInput = typeof ListBlockSnapshotsInput.Type;

// Output Schema
export const ListBlockSnapshotsOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    snapshots: Schema.optional(
      Schema.Array(
        Schema.Struct({
          id: Schema.optional(Schema.String),
          block_id: Schema.optional(Schema.String),
          state: Schema.optional(Schema.String),
          added_at: Schema.optional(Schema.String),
          updated_at: Schema.optional(Schema.String),
          next_invoice_date: Schema.optional(Schema.String),
          next_invoice_price: Schema.optional(Schema.String),
          size: Schema.optional(Schema.Number),
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
export type ListBlockSnapshotsOutput = typeof ListBlockSnapshotsOutput.Type;

// The operation
/**
 * List Block storage snapshots
 *
 * List all Block Storage Snapshots in your account.
 *
 * @param per_page - Number of items requested per page. Default is 100 and Max is 500.
 * @param cursor - Cursor for paging. See [Meta and Pagination](#section/Introduction/Meta-and-Pagination).
 */
export const listBlockSnapshots = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: ListBlockSnapshotsInput,
  outputSchema: ListBlockSnapshotsOutput,
  errors: [BadRequest] as const,
}));
