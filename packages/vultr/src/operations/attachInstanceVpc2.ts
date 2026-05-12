import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { BadRequest, NotFound } from "../errors.ts";

// Input Schema
export const AttachInstanceVpc2Input =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    instanceId: Schema.String.pipe(T.PathParam()),
    vpc_id: Schema.String,
    ip_address: Schema.optional(Schema.String),
  }).pipe(
    T.Http({ method: "POST", path: "/instances/{instanceId}/vpc2/attach" }),
  );
export type AttachInstanceVpc2Input = typeof AttachInstanceVpc2Input.Type;

// Output Schema
export const AttachInstanceVpc2Output = /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type AttachInstanceVpc2Output = typeof AttachInstanceVpc2Output.Type;

// The operation
/**
 * Attach VPC 2.0 Network to Instance
 *
 * Attach a VPC 2.0 Network to an Instance.
 *
 * @param instanceId - The [Instance ID](#operation/list-instances).
 */
export const attachInstanceVpc2 = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: AttachInstanceVpc2Input,
  outputSchema: AttachInstanceVpc2Output,
  errors: [BadRequest, NotFound] as const,
}));
