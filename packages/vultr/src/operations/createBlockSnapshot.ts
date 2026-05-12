import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { BadRequest, Forbidden, NotFound } from "../errors.ts";

// Input Schema
export const CreateBlockSnapshotInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    block_id: Schema.String,
    description: Schema.String,
  }).pipe(T.Http({ method: "POST", path: "/blocks/snapshots" }));
export type CreateBlockSnapshotInput = typeof CreateBlockSnapshotInput.Type;

// Output Schema
export const CreateBlockSnapshotOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    block: Schema.optional(
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
  });
export type CreateBlockSnapshotOutput = typeof CreateBlockSnapshotOutput.Type;

// The operation
/**
 * Create Block Storage Snapshot
 *
 * Create new Block Snapshot of a Block Storage subscription.
 */
export const createBlockSnapshot = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: CreateBlockSnapshotInput,
  outputSchema: CreateBlockSnapshotOutput,
  errors: [BadRequest, Forbidden, NotFound] as const,
}));
