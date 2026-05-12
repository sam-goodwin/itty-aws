import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { BadRequest, NotFound } from "../errors.ts";

// Input Schema
export const HaltInstancesInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  instance_ids: Schema.optional(Schema.Array(Schema.String)),
}).pipe(T.Http({ method: "POST", path: "/instances/halt" }));
export type HaltInstancesInput = typeof HaltInstancesInput.Type;

// Output Schema
export const HaltInstancesOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type HaltInstancesOutput = typeof HaltInstancesOutput.Type;

// The operation
/**
 * Halt Instances
 *
 * Halt Instances.
 */
export const haltInstances = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: HaltInstancesInput,
  outputSchema: HaltInstancesOutput,
  errors: [BadRequest, NotFound] as const,
}));
