import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { BadRequest, NotFound } from "../errors.ts";

// Input Schema
export const HaltInstanceInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  instanceId: Schema.String.pipe(T.PathParam()),
}).pipe(T.Http({ method: "POST", path: "/instances/{instanceId}/halt" }));
export type HaltInstanceInput = typeof HaltInstanceInput.Type;

// Output Schema
export const HaltInstanceOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type HaltInstanceOutput = typeof HaltInstanceOutput.Type;

// The operation
/**
 * Halt Instance
 *
 * Halt an Instance.
 *
 * @param instanceId - The [Instance ID](#operation/list-instances).
 */
export const haltInstance = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: HaltInstanceInput,
  outputSchema: HaltInstanceOutput,
  errors: [BadRequest, NotFound] as const,
}));
