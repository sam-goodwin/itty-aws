import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { BadRequest, Forbidden, NotFound } from "../errors.ts";

// Input Schema
export const GetBlockInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  blockId: Schema.String.pipe(T.PathParam()),
}).pipe(T.Http({ method: "GET", path: "/blocks/{blockId}" }));
export type GetBlockInput = typeof GetBlockInput.Type;

// Output Schema
export const GetBlockOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  block: Schema.optional(
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
});
export type GetBlockOutput = typeof GetBlockOutput.Type;

// The operation
/**
 * Get Block Storage
 *
 * Get information for Block Storage.
 *
 * @param blockId - The [Block Storage id](#operation/list-blocks).
 */
export const getBlock = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: GetBlockInput,
  outputSchema: GetBlockOutput,
  errors: [BadRequest, Forbidden, NotFound] as const,
}));
