import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { BadRequest, NotFound } from "../errors.ts";

// Input Schema
export const HaltBaremetalInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  baremetalId: Schema.String.pipe(T.PathParam()),
}).pipe(T.Http({ method: "POST", path: "/bare-metals/{baremetalId}/halt" }));
export type HaltBaremetalInput = typeof HaltBaremetalInput.Type;

// Output Schema
export const HaltBaremetalOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type HaltBaremetalOutput = typeof HaltBaremetalOutput.Type;

// The operation
/**
 * Halt Bare Metal
 *
 * Halt the Bare Metal instance.
 *
 * @param baremetalId - The [Bare Metal id](#operation/list-baremetals).
 */
export const haltBaremetal = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: HaltBaremetalInput,
  outputSchema: HaltBaremetalOutput,
  errors: [BadRequest, NotFound] as const,
}));
