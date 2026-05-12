import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { BadRequest, Forbidden } from "../errors.ts";

// Input Schema
export const GetBlockSnapshotInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  snapshotId: Schema.String.pipe(T.PathParam()),
}).pipe(T.Http({ method: "GET", path: "/blocks/snapshots/{snapshotId}" }));
export type GetBlockSnapshotInput = typeof GetBlockSnapshotInput.Type;

// Output Schema
export const GetBlockSnapshotOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
  {
    snapshot: Schema.optional(
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
  },
);
export type GetBlockSnapshotOutput = typeof GetBlockSnapshotOutput.Type;

// The operation
/**
 * Get Block Storage Snapshots
 *
 * Get information for Block Storage Snapshot.
 *
 * @param snapshotId - The [Block Storage snapshot id](#operation/list-block-snapshots).
 */
export const getBlockSnapshot = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: GetBlockSnapshotInput,
  outputSchema: GetBlockSnapshotOutput,
  errors: [BadRequest, Forbidden] as const,
}));
