import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { BadRequest } from "../errors.ts";

// Input Schema
export const DeleteReservedIpInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  reservedIp: Schema.String.pipe(T.PathParam()),
}).pipe(T.Http({ method: "DELETE", path: "/reserved-ips/{reservedIp}" }));
export type DeleteReservedIpInput = typeof DeleteReservedIpInput.Type;

// Output Schema
export const DeleteReservedIpOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type DeleteReservedIpOutput = typeof DeleteReservedIpOutput.Type;

// The operation
/**
 * Delete Reserved IP
 *
 * Delete a Reserved IP.
 *
 * @param reservedIp - The [Reserved IP id](#operation/list-reserved-ips).
 */
export const deleteReservedIp = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: DeleteReservedIpInput,
  outputSchema: DeleteReservedIpOutput,
  errors: [BadRequest] as const,
}));
