import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { BadRequest, NotFound } from "../errors.ts";

// Input Schema
export const DetachBlockInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  blockId: Schema.String.pipe(T.PathParam()),
  live: Schema.optional(Schema.Boolean),
}).pipe(T.Http({ method: "POST", path: "/blocks/{blockId}/detach" }));
export type DetachBlockInput = typeof DetachBlockInput.Type;

// Output Schema
export const DetachBlockOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type DetachBlockOutput = typeof DetachBlockOutput.Type;

// The operation
/**
 * Detach Block Storage
 *
 * Detach Block Storage.
 *
 * @param blockId - The [Block Storage id](#operation/list-blocks).
 */
export const detachBlock = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: DetachBlockInput,
  outputSchema: DetachBlockOutput,
  errors: [BadRequest, NotFound] as const,
}));
