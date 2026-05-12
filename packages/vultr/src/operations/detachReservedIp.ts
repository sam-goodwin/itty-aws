import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { BadRequest, NotFound } from "../errors.ts";

// Input Schema
export const DetachReservedIpInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  reservedIp: Schema.String.pipe(T.PathParam()),
}).pipe(T.Http({ method: "POST", path: "/reserved-ips/{reservedIp}/detach" }));
export type DetachReservedIpInput = typeof DetachReservedIpInput.Type;

// Output Schema
export const DetachReservedIpOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type DetachReservedIpOutput = typeof DetachReservedIpOutput.Type;

// The operation
/**
 * Detach Reserved IP
 *
 * Detach a Reserved IP.
 *
 * @param reservedIp - The [Reserved IP id](#operation/list-reserved-ips)
 */
export const detachReservedIp = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: DetachReservedIpInput,
  outputSchema: DetachReservedIpOutput,
  errors: [BadRequest, NotFound] as const,
}));
