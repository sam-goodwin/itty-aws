import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { BadRequest, NotFound } from "../errors.ts";

// Input Schema
export const DeleteBlockInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  blockId: Schema.String.pipe(T.PathParam()),
}).pipe(T.Http({ method: "DELETE", path: "/blocks/{blockId}" }));
export type DeleteBlockInput = typeof DeleteBlockInput.Type;

// Output Schema
export const DeleteBlockOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type DeleteBlockOutput = typeof DeleteBlockOutput.Type;

// The operation
/**
 * Delete Block Storage
 *
 * Delete Block Storage.
 *
 * @param blockId - The [Block Storage id](#operation/list-blocks).
 */
export const deleteBlock = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: DeleteBlockInput,
  outputSchema: DeleteBlockOutput,
  errors: [BadRequest, NotFound] as const,
}));
