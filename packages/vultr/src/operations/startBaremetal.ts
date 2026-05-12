import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { BadRequest, NotFound } from "../errors.ts";

// Input Schema
export const StartBaremetalInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  baremetalId: Schema.String.pipe(T.PathParam()),
}).pipe(T.Http({ method: "POST", path: "/bare-metals/{baremetalId}/start" }));
export type StartBaremetalInput = typeof StartBaremetalInput.Type;

// Output Schema
export const StartBaremetalOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type StartBaremetalOutput = typeof StartBaremetalOutput.Type;

// The operation
/**
 * Start Bare Metal
 *
 * Start the Bare Metal instance.
 *
 * @param baremetalId - The [Bare Metal id](#operation/list-baremetals).
 */
export const startBaremetal = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: StartBaremetalInput,
  outputSchema: StartBaremetalOutput,
  errors: [BadRequest, NotFound] as const,
}));
