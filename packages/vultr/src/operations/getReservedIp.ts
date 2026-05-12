import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { BadRequest, NotFound } from "../errors.ts";

// Input Schema
export const GetReservedIpInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  reservedIp: Schema.String.pipe(T.PathParam()),
}).pipe(T.Http({ method: "GET", path: "/reserved-ips/{reservedIp}" }));
export type GetReservedIpInput = typeof GetReservedIpInput.Type;

// Output Schema
export const GetReservedIpOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  reserved_ip: Schema.optional(
    Schema.Struct({
      id: Schema.optional(Schema.String),
      region: Schema.optional(Schema.String),
      ip_type: Schema.optional(Schema.String),
      subnet: Schema.optional(Schema.String),
      subnet_size: Schema.optional(Schema.Number),
      label: Schema.optional(Schema.String),
      instance_id: Schema.optional(Schema.String),
    }),
  ),
});
export type GetReservedIpOutput = typeof GetReservedIpOutput.Type;

// The operation
/**
 * Get Reserved IP
 *
 * Get information about a Reserved IP.
 *
 * @param reservedIp - The [Reserved IP id](#operation/list-reserved-ips).
 */
export const getReservedIp = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: GetReservedIpInput,
  outputSchema: GetReservedIpOutput,
  errors: [BadRequest, NotFound] as const,
}));
