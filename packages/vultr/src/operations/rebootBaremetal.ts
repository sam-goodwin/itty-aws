import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { BadRequest, NotFound } from "../errors.ts";

// Input Schema
export const RebootBaremetalInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  baremetalId: Schema.String.pipe(T.PathParam()),
}).pipe(T.Http({ method: "POST", path: "/bare-metals/{baremetalId}/reboot" }));
export type RebootBaremetalInput = typeof RebootBaremetalInput.Type;

// Output Schema
export const RebootBaremetalOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type RebootBaremetalOutput = typeof RebootBaremetalOutput.Type;

// The operation
/**
 * Reboot Bare Metal
 *
 * Reboot the Bare Metal instance.
 *
 * @param baremetalId - The [Bare Metal id](#operation/list-baremetals).
 */
export const rebootBaremetal = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: RebootBaremetalInput,
  outputSchema: RebootBaremetalOutput,
  errors: [BadRequest, NotFound] as const,
}));
