import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { BadRequest, NotFound } from "../errors.ts";

// Input Schema
export const AttachBlockInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  blockId: Schema.String.pipe(T.PathParam()),
  instance_id: Schema.String,
  live: Schema.optional(Schema.Boolean),
}).pipe(T.Http({ method: "POST", path: "/blocks/{blockId}/attach" }));
export type AttachBlockInput = typeof AttachBlockInput.Type;

// Output Schema
export const AttachBlockOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type AttachBlockOutput = typeof AttachBlockOutput.Type;

// The operation
/**
 * Attach Block Storage
 *
 * Attach Block Storage to Instance `instance_id`.
 *
 * @param blockId - The [Block Storage id](#operation/list-blocks).
 */
export const attachBlock = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: AttachBlockInput,
  outputSchema: AttachBlockOutput,
  errors: [BadRequest, NotFound] as const,
}));
