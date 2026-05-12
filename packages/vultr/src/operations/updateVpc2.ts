import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { BadRequest, Forbidden, NotFound } from "../errors.ts";

// Input Schema
export const UpdateVpc2Input = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  vpcId: Schema.String.pipe(T.PathParam()),
  description: Schema.String,
}).pipe(T.Http({ method: "PUT", path: "/vpc2/{vpcId}" }));
export type UpdateVpc2Input = typeof UpdateVpc2Input.Type;

// Output Schema
export const UpdateVpc2Output = /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type UpdateVpc2Output = typeof UpdateVpc2Output.Type;

// The operation
/**
 * Update a VPC 2.0 network
 *
 * Update information for a VPC 2.0 network.
 *
 * @param vpcId - The [VPC ID](#operation/list-vpcs).
 */
export const updateVpc2 = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: UpdateVpc2Input,
  outputSchema: UpdateVpc2Output,
  errors: [BadRequest, Forbidden, NotFound] as const,
}));
