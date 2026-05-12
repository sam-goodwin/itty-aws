import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { BadRequest, Forbidden, NotFound } from "../errors.ts";

// Input Schema
export const CreateBlockInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  region: Schema.String,
  size_gb: Schema.Number,
  label: Schema.optional(Schema.String),
  block_type: Schema.optional(Schema.String),
  snapshot_id: Schema.optional(Schema.String),
  bootable: Schema.optional(Schema.Boolean),
}).pipe(T.Http({ method: "POST", path: "/blocks" }));
export type CreateBlockInput = typeof CreateBlockInput.Type;

// Output Schema
export const CreateBlockOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type CreateBlockOutput = typeof CreateBlockOutput.Type;

// The operation
/**
 * Create Block Storage
 *
 * Create new Block Storage in a `region` with a size of `size_gb`. Size may range between 10 and 40000 depending on the `block_type`.
 */
export const createBlock = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: CreateBlockInput,
  outputSchema: CreateBlockOutput,
  errors: [BadRequest, Forbidden, NotFound] as const,
}));
