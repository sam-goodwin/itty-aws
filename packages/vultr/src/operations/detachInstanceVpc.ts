import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { BadRequest, NotFound } from "../errors.ts";

// Input Schema
export const DetachInstanceVpcInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
  {
    instanceId: Schema.String.pipe(T.PathParam()),
    vpc_id: Schema.optional(Schema.String),
  },
).pipe(T.Http({ method: "POST", path: "/instances/{instanceId}/vpcs/detach" }));
export type DetachInstanceVpcInput = typeof DetachInstanceVpcInput.Type;

// Output Schema
export const DetachInstanceVpcOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type DetachInstanceVpcOutput = typeof DetachInstanceVpcOutput.Type;

// The operation
/**
 * Detach VPC from Instance
 *
 * Detach a VPC from an Instance.
 *
 * @param instanceId - The [Instance ID](#operation/list-instances).
 */
export const detachInstanceVpc = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: DetachInstanceVpcInput,
  outputSchema: DetachInstanceVpcOutput,
  errors: [BadRequest, NotFound] as const,
}));
