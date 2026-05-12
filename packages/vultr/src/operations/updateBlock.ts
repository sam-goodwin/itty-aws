import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { BadRequest, Forbidden, NotFound } from "../errors.ts";

// Input Schema
export const UpdateBlockInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  blockId: Schema.String.pipe(T.PathParam()),
  label: Schema.optional(Schema.String),
  size_gb: Schema.optional(Schema.Number),
}).pipe(T.Http({ method: "PATCH", path: "/blocks/{blockId}" }));
export type UpdateBlockInput = typeof UpdateBlockInput.Type;

// Output Schema
export const UpdateBlockOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type UpdateBlockOutput = typeof UpdateBlockOutput.Type;

// The operation
/**
 * Update Block Storage
 *
 * Update information for Block Storage.
 *
 * @param blockId - The [Block Storage id](#operation/list-blocks).
 */
export const updateBlock = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: UpdateBlockInput,
  outputSchema: UpdateBlockOutput,
  errors: [BadRequest, Forbidden, NotFound] as const,
}));
