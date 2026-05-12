import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { BadRequest, NotFound } from "../errors.ts";

// Input Schema
export const CreateVpc2Input = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  region: Schema.String,
  description: Schema.optional(Schema.String),
  ip_type: Schema.optional(Schema.Unknown),
  ip_block: Schema.optional(Schema.String),
  prefix_length: Schema.optional(Schema.Number),
}).pipe(T.Http({ method: "POST", path: "/vpc2" }));
export type CreateVpc2Input = typeof CreateVpc2Input.Type;

// Output Schema
export const CreateVpc2Output = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  vpc: Schema.optional(
    Schema.Struct({
      id: Schema.String,
      region: Schema.optional(Schema.String),
      date_created: Schema.optional(Schema.String),
      description: Schema.optional(Schema.String),
      ip_block: Schema.optional(Schema.String),
      prefix_length: Schema.optional(Schema.Number),
    }),
  ),
});
export type CreateVpc2Output = typeof CreateVpc2Output.Type;

// The operation
/**
 * Create a VPC 2.0 network
 *
 * Create a new VPC 2.0 network in a `region`. VPCs should use [RFC1918 private address space](https://tools.ietf.org/html/rfc1918):
 * 10.0.0.0    - 10.255.255.255  (10/8 prefix)
 * 172.16.0.0  - 172.31.255.255  (172.16/12 prefix)
 * 192.168.0.0 - 192.168.255.255 (192.168/16 prefix)
 */
export const createVpc2 = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: CreateVpc2Input,
  outputSchema: CreateVpc2Output,
  errors: [BadRequest, NotFound] as const,
}));
