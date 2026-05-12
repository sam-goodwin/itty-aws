import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { BadRequest, NotFound } from "../errors.ts";

// Input Schema
export const PatchReservedIpsReservedIpInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    reservedIp: Schema.String.pipe(T.PathParam()),
    label: Schema.String,
  }).pipe(T.Http({ method: "PATCH", path: "/reserved-ips/{reservedIp}" }));
export type PatchReservedIpsReservedIpInput =
  typeof PatchReservedIpsReservedIpInput.Type;

// Output Schema
export const PatchReservedIpsReservedIpOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
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
export type PatchReservedIpsReservedIpOutput =
  typeof PatchReservedIpsReservedIpOutput.Type;

// The operation
/**
 * Update Reserved IP
 *
 * Update information on a Reserved IP.
 *
 * @param reservedIp - The [Reserved IP id](#operation/list-reserved-ips).
 */
export const patchReservedIpsReservedIp = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: PatchReservedIpsReservedIpInput,
    outputSchema: PatchReservedIpsReservedIpOutput,
    errors: [BadRequest, NotFound] as const,
  }),
);
