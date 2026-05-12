import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { BadRequest, NotFound } from "../errors.ts";

// Input Schema
export const DeleteBaremetalInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  baremetalId: Schema.String.pipe(T.PathParam()),
}).pipe(T.Http({ method: "DELETE", path: "/bare-metals/{baremetalId}" }));
export type DeleteBaremetalInput = typeof DeleteBaremetalInput.Type;

// Output Schema
export const DeleteBaremetalOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type DeleteBaremetalOutput = typeof DeleteBaremetalOutput.Type;

// The operation
/**
 * Delete Bare Metal
 *
 * Delete a Bare Metal instance.
 *
 * @param baremetalId - The [Bare Metal id](#operation/list-baremetals).
 */
export const deleteBaremetal = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: DeleteBaremetalInput,
  outputSchema: DeleteBaremetalOutput,
  errors: [BadRequest, NotFound] as const,
}));
