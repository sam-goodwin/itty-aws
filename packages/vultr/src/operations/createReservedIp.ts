import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { BadRequest, NotFound } from "../errors.ts";

// Input Schema
export const CreateReservedIpInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  region: Schema.String,
  ip_type: Schema.String,
  label: Schema.optional(Schema.String),
}).pipe(T.Http({ method: "POST", path: "/reserved-ips" }));
export type CreateReservedIpInput = typeof CreateReservedIpInput.Type;

// Output Schema
export const CreateReservedIpOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
  {
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
  },
);
export type CreateReservedIpOutput = typeof CreateReservedIpOutput.Type;

// The operation
/**
 * Create Reserved IP
 *
 * Create a new Reserved IP. The `region` and `ip_type` attributes are required.
 */
export const createReservedIp = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: CreateReservedIpInput,
  outputSchema: CreateReservedIpOutput,
  errors: [BadRequest, NotFound] as const,
}));
