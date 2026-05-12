import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { BadRequest, NotFound } from "../errors.ts";

// Input Schema
export const HaltBaremetalsInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  baremetal_ids: Schema.optional(Schema.Array(Schema.String)),
}).pipe(T.Http({ method: "POST", path: "/bare-metals/halt" }));
export type HaltBaremetalsInput = typeof HaltBaremetalsInput.Type;

// Output Schema
export const HaltBaremetalsOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type HaltBaremetalsOutput = typeof HaltBaremetalsOutput.Type;

// The operation
/**
 * Halt Bare Metals
 *
 * Halt Bare Metals.
 */
export const haltBaremetals = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: HaltBaremetalsInput,
  outputSchema: HaltBaremetalsOutput,
  errors: [BadRequest, NotFound] as const,
}));
