import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { BadRequest, NotFound } from "../errors.ts";

// Input Schema
export const DetachInstanceVpc2Input =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    instanceId: Schema.String.pipe(T.PathParam()),
    vpc_id: Schema.String,
  }).pipe(
    T.Http({ method: "POST", path: "/instances/{instanceId}/vpc2/detach" }),
  );
export type DetachInstanceVpc2Input = typeof DetachInstanceVpc2Input.Type;

// Output Schema
export const DetachInstanceVpc2Output = /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type DetachInstanceVpc2Output = typeof DetachInstanceVpc2Output.Type;

// The operation
/**
 * Detach VPC 2.0 Network from Instance
 *
 * Detach a VPC 2.0 Network from an Instance.
 *
 * @param instanceId - The [Instance ID](#operation/list-instances).
 */
export const detachInstanceVpc2 = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: DetachInstanceVpc2Input,
  outputSchema: DetachInstanceVpc2Output,
  errors: [BadRequest, NotFound] as const,
}));
