import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { BadRequest, Forbidden, NotFound } from "../errors.ts";

// Input Schema
export const DeleteVpc2Input = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  vpcId: Schema.String.pipe(T.PathParam()),
}).pipe(T.Http({ method: "DELETE", path: "/vpc2/{vpcId}" }));
export type DeleteVpc2Input = typeof DeleteVpc2Input.Type;

// Output Schema
export const DeleteVpc2Output = /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type DeleteVpc2Output = typeof DeleteVpc2Output.Type;

// The operation
/**
 * Delete a VPC 2.0 network
 *
 * Delete a VPC 2.0 network.
 *
 * @param vpcId - The [VPC ID](#operation/list-vpcs).
 */
export const deleteVpc2 = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: DeleteVpc2Input,
  outputSchema: DeleteVpc2Output,
  errors: [BadRequest, Forbidden, NotFound] as const,
}));
