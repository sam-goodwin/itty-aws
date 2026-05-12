import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { BadRequest, NotFound } from "../errors.ts";

// Input Schema
export const StartInstancesInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  instance_ids: Schema.optional(Schema.Array(Schema.String)),
}).pipe(T.Http({ method: "POST", path: "/instances/start" }));
export type StartInstancesInput = typeof StartInstancesInput.Type;

// Output Schema
export const StartInstancesOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type StartInstancesOutput = typeof StartInstancesOutput.Type;

// The operation
/**
 * Start instances
 *
 * Start Instances.
 */
export const startInstances = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: StartInstancesInput,
  outputSchema: StartInstancesOutput,
  errors: [BadRequest, NotFound] as const,
}));
