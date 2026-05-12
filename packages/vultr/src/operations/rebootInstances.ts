import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { BadRequest, NotFound } from "../errors.ts";

// Input Schema
export const RebootInstancesInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  instance_ids: Schema.optional(Schema.Array(Schema.String)),
}).pipe(T.Http({ method: "POST", path: "/instances/reboot" }));
export type RebootInstancesInput = typeof RebootInstancesInput.Type;

// Output Schema
export const RebootInstancesOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type RebootInstancesOutput = typeof RebootInstancesOutput.Type;

// The operation
/**
 * Reboot instances
 *
 * Reboot Instances.
 */
export const rebootInstances = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: RebootInstancesInput,
  outputSchema: RebootInstancesOutput,
  errors: [BadRequest, NotFound] as const,
}));
