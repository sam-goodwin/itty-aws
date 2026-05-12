import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { BadRequest, Forbidden, NotFound } from "../errors.ts";

// Input Schema
export const UpdateVpcInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  vpcId: Schema.String.pipe(T.PathParam()),
  description: Schema.String,
}).pipe(T.Http({ method: "PUT", path: "/vpcs/{vpcId}" }));
export type UpdateVpcInput = typeof UpdateVpcInput.Type;

// Output Schema
export const UpdateVpcOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type UpdateVpcOutput = typeof UpdateVpcOutput.Type;

// The operation
/**
 * Update a VPC
 *
 * Update information for a VPC.
 *
 * @param vpcId - The [VPC ID](#operation/list-vpcs).
 */
export const updateVpc = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: UpdateVpcInput,
  outputSchema: UpdateVpcOutput,
  errors: [BadRequest, Forbidden, NotFound] as const,
}));
