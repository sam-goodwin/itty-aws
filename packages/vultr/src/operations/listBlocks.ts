import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { BadRequest } from "../errors.ts";

// Input Schema
export const ListBlocksInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  per_page: Schema.optional(Schema.Number),
  cursor: Schema.optional(Schema.String),
}).pipe(T.Http({ method: "GET", path: "/blocks" }));
export type ListBlocksInput = typeof ListBlocksInput.Type;

// Output Schema
export const ListBlocksOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  blocks: Schema.optional(
    Schema.Array(
      Schema.Struct({
        id: Schema.optional(Schema.String),
        date_created: Schema.optional(Schema.String),
        cost: Schema.optional(Schema.Number),
        pending_charges: Schema.optional(Schema.Number),
        status: Schema.optional(Schema.String),
        size_gb: Schema.optional(Schema.Number),
        region: Schema.optional(Schema.String),
        attached_to_instance: Schema.optional(Schema.String),
        attached_to_instance_ip: Schema.optional(Schema.String),
        attached_to_instance_label: Schema.optional(Schema.String),
        label: Schema.optional(Schema.String),
        mount_id: Schema.optional(Schema.String),
        block_type: Schema.optional(Schema.String),
        os_id: Schema.optional(Schema.Number),
        snapshot_id: Schema.optional(Schema.String),
        bootable: Schema.optional(Schema.Boolean),
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
export type ListBlocksOutput = typeof ListBlocksOutput.Type;

// The operation
/**
 * List Block storages
 *
 * List all Block Storage in your account.
 *
 * @param per_page - Number of items requested per page. Default is 100 and Max is 500.
 * @param cursor - Cursor for paging. See [Meta and Pagination](#section/Introduction/Meta-and-Pagination).
 */
export const listBlocks = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: ListBlocksInput,
  outputSchema: ListBlocksOutput,
  errors: [BadRequest] as const,
}));
