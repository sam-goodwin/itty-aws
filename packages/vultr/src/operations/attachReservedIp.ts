import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { BadRequest, NotFound } from "../errors.ts";

// Input Schema
export const AttachReservedIpInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  reservedIp: Schema.String.pipe(T.PathParam()),
  instance_id: Schema.String,
}).pipe(T.Http({ method: "POST", path: "/reserved-ips/{reservedIp}/attach" }));
export type AttachReservedIpInput = typeof AttachReservedIpInput.Type;

// Output Schema
export const AttachReservedIpOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type AttachReservedIpOutput = typeof AttachReservedIpOutput.Type;

// The operation
/**
 * Attach Reserved IP
 *
 * Attach a Reserved IP to an compute instance or a baremetal instance - `instance_id`.
 *
 * @param reservedIp - The [Reserved IP id](#operation/list-reserved-ips)
 */
export const attachReservedIp = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: AttachReservedIpInput,
  outputSchema: AttachReservedIpOutput,
  errors: [BadRequest, NotFound] as const,
}));
