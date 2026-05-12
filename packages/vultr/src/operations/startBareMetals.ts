import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { BadRequest, NotFound } from "../errors.ts";

// Input Schema
export const StartBareMetalsInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  baremetal_ids: Schema.optional(Schema.Array(Schema.String)),
}).pipe(T.Http({ method: "POST", path: "/bare-metals/start" }));
export type StartBareMetalsInput = typeof StartBareMetalsInput.Type;

// Output Schema
export const StartBareMetalsOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type StartBareMetalsOutput = typeof StartBareMetalsOutput.Type;

// The operation
/**
 * Start Bare Metals
 *
 * Start Bare Metals.
 */
export const startBareMetals = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: StartBareMetalsInput,
  outputSchema: StartBareMetalsOutput,
  errors: [BadRequest, NotFound] as const,
}));
