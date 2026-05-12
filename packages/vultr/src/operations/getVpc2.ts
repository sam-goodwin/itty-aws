import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { BadRequest, Forbidden, NotFound } from "../errors.ts";

// Input Schema
export const GetVpc2Input = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  vpcId: Schema.String.pipe(T.PathParam()),
}).pipe(T.Http({ method: "GET", path: "/vpc2/{vpcId}" }));
export type GetVpc2Input = typeof GetVpc2Input.Type;

// Output Schema
export const GetVpc2Output = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
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
export type GetVpc2Output = typeof GetVpc2Output.Type;

// The operation
/**
 * Get a VPC 2.0 network
 *
 * Get information about a VPC 2.0 network.
 *
 * @param vpcId - The [VPC ID](#operation/list-vpcs).
 */
export const getVpc2 = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: GetVpc2Input,
  outputSchema: GetVpc2Output,
  errors: [BadRequest, Forbidden, NotFound] as const,
}));
