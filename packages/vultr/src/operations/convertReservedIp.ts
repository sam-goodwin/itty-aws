import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { BadRequest, NotFound } from "../errors.ts";

// Input Schema
export const ConvertReservedIpInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
  {
    ip_address: Schema.String,
    label: Schema.optional(Schema.String),
  },
).pipe(T.Http({ method: "POST", path: "/reserved-ips/convert" }));
export type ConvertReservedIpInput = typeof ConvertReservedIpInput.Type;

// Output Schema
export const ConvertReservedIpOutput =
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
export type ConvertReservedIpOutput = typeof ConvertReservedIpOutput.Type;

// The operation
/**
 * Convert Instance IP to Reserved IP
 *
 * Convert the `ip_address` of an existing [instance](#operation/list-instances) into a Reserved IP.
 */
export const convertReservedIp = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: ConvertReservedIpInput,
  outputSchema: ConvertReservedIpOutput,
  errors: [BadRequest, NotFound] as const,
}));
