import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { BadRequest, Forbidden, NotFound } from "../errors.ts";

// Input Schema
export const DeleteVpcInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  vpcId: Schema.String.pipe(T.PathParam()),
}).pipe(T.Http({ method: "DELETE", path: "/vpcs/{vpcId}" }));
export type DeleteVpcInput = typeof DeleteVpcInput.Type;

// Output Schema
export const DeleteVpcOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type DeleteVpcOutput = typeof DeleteVpcOutput.Type;

// The operation
/**
 * Delete a VPC
 *
 * Delete a VPC.
 *
 * @param vpcId - The [VPC ID](#operation/list-vpcs).
 */
export const deleteVpc = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: DeleteVpcInput,
  outputSchema: DeleteVpcOutput,
  errors: [BadRequest, Forbidden, NotFound] as const,
}));
