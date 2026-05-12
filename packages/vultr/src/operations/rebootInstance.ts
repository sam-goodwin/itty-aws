import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { BadRequest, NotFound } from "../errors.ts";

// Input Schema
export const RebootInstanceInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  instanceId: Schema.String.pipe(T.PathParam()),
}).pipe(T.Http({ method: "POST", path: "/instances/{instanceId}/reboot" }));
export type RebootInstanceInput = typeof RebootInstanceInput.Type;

// Output Schema
export const RebootInstanceOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type RebootInstanceOutput = typeof RebootInstanceOutput.Type;

// The operation
/**
 * Reboot Instance
 *
 * Reboot an Instance.
 *
 * @param instanceId - The [Instance ID](#operation/list-instances).
 */
export const rebootInstance = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: RebootInstanceInput,
  outputSchema: RebootInstanceOutput,
  errors: [BadRequest, NotFound] as const,
}));
