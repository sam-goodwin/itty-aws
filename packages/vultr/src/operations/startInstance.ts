import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { BadRequest, NotFound } from "../errors.ts";

// Input Schema
export const StartInstanceInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  instanceId: Schema.String.pipe(T.PathParam()),
}).pipe(T.Http({ method: "POST", path: "/instances/{instanceId}/start" }));
export type StartInstanceInput = typeof StartInstanceInput.Type;

// Output Schema
export const StartInstanceOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type StartInstanceOutput = typeof StartInstanceOutput.Type;

// The operation
/**
 * Start instance
 *
 * Start an Instance.
 *
 * @param instanceId - The [Instance ID](#operation/list-instances).
 */
export const startInstance = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: StartInstanceInput,
  outputSchema: StartInstanceOutput,
  errors: [BadRequest, NotFound] as const,
}));
