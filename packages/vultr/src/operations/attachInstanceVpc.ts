import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { BadRequest, NotFound } from "../errors.ts";

// Input Schema
export const AttachInstanceVpcInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
  {
    instanceId: Schema.String.pipe(T.PathParam()),
    vpc_id: Schema.optional(Schema.String),
  },
).pipe(T.Http({ method: "POST", path: "/instances/{instanceId}/vpcs/attach" }));
export type AttachInstanceVpcInput = typeof AttachInstanceVpcInput.Type;

// Output Schema
export const AttachInstanceVpcOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type AttachInstanceVpcOutput = typeof AttachInstanceVpcOutput.Type;

// The operation
/**
 * Attach VPC to Instance
 *
 * Attach a VPC to an Instance.
 *
 * @param instanceId - The [Instance ID](#operation/list-instances).
 */
export const attachInstanceVpc = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: AttachInstanceVpcInput,
  outputSchema: AttachInstanceVpcOutput,
  errors: [BadRequest, NotFound] as const,
}));
