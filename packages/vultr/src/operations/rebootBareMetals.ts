import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { BadRequest, NotFound } from "../errors.ts";

// Input Schema
export const RebootBareMetalsInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  baremetal_ids: Schema.optional(Schema.Array(Schema.String)),
}).pipe(T.Http({ method: "POST", path: "/bare-metals/reboot" }));
export type RebootBareMetalsInput = typeof RebootBareMetalsInput.Type;

// Output Schema
export const RebootBareMetalsOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type RebootBareMetalsOutput = typeof RebootBareMetalsOutput.Type;

// The operation
/**
 * Reboot Bare Metals
 *
 * Reboot Bare Metals.
 */
export const rebootBareMetals = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: RebootBareMetalsInput,
  outputSchema: RebootBareMetalsOutput,
  errors: [BadRequest, NotFound] as const,
}));
