import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { BadRequest, Forbidden, NotFound } from "../errors.ts";

// Input Schema
export const GetVpcInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  vpcId: Schema.String.pipe(T.PathParam()),
}).pipe(T.Http({ method: "GET", path: "/vpcs/{vpcId}" }));
export type GetVpcInput = typeof GetVpcInput.Type;

// Output Schema
export const GetVpcOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  vpc: Schema.optional(
    Schema.Struct({
      id: Schema.String,
      region: Schema.optional(Schema.String),
      date_created: Schema.optional(Schema.String),
      description: Schema.optional(Schema.String),
      v4_subnet: Schema.optional(Schema.String),
      v4_subnet_mask: Schema.optional(Schema.Number),
      internet: Schema.optional(
        Schema.Struct({
          connectivity: Schema.optional(Schema.Boolean),
          types: Schema.optional(Schema.Array(Schema.Unknown)),
        }),
      ),
    }),
  ),
});
export type GetVpcOutput = typeof GetVpcOutput.Type;

// The operation
/**
 * Get a VPC
 *
 * Get information about a VPC.
 *
 * @param vpcId - The [VPC ID](#operation/list-vpcs).
 */
export const getVpc = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: GetVpcInput,
  outputSchema: GetVpcOutput,
  errors: [BadRequest, Forbidden, NotFound] as const,
}));
