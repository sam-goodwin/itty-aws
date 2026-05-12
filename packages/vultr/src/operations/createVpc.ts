import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { BadRequest, NotFound } from "../errors.ts";

// Input Schema
export const CreateVpcInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  region: Schema.String,
  description: Schema.optional(Schema.String),
  v4_subnet: Schema.optional(Schema.String),
  v4_subnet_mask: Schema.optional(Schema.Number),
}).pipe(T.Http({ method: "POST", path: "/vpcs" }));
export type CreateVpcInput = typeof CreateVpcInput.Type;

// Output Schema
export const CreateVpcOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  vpc: Schema.optional(
    Schema.Struct({
      id: Schema.String,
      region: Schema.optional(Schema.String),
      date_created: Schema.optional(Schema.String),
      description: Schema.optional(Schema.String),
      v4_subnet: Schema.optional(Schema.String),
      v4_subnet_mask: Schema.optional(Schema.Number),
    }),
  ),
});
export type CreateVpcOutput = typeof CreateVpcOutput.Type;

// The operation
/**
 * Create a VPC
 *
 * Create a new VPC in a `region`. VPCs should use [RFC1918 private address space](https://tools.ietf.org/html/rfc1918):
 * 10.0.0.0    - 10.255.255.255  (10/8 prefix)
 * 172.16.0.0  - 172.31.255.255  (172.16/12 prefix)
 * 192.168.0.0 - 192.168.255.255 (192.168/16 prefix)
 */
export const createVpc = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: CreateVpcInput,
  outputSchema: CreateVpcOutput,
  errors: [BadRequest, NotFound] as const,
}));
