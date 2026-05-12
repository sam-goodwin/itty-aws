import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { BadRequest, NotFound } from "../errors.ts";

// Input Schema
export const CreateInstanceIpv4Input =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    instanceId: Schema.String.pipe(T.PathParam()),
    reboot: Schema.optional(Schema.Boolean),
  }).pipe(T.Http({ method: "POST", path: "/instances/{instanceId}/ipv4" }));
export type CreateInstanceIpv4Input = typeof CreateInstanceIpv4Input.Type;

// Output Schema
export const CreateInstanceIpv4Output = /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type CreateInstanceIpv4Output = typeof CreateInstanceIpv4Output.Type;

// The operation
/**
 * Create IPv4
 *
 * Create an IPv4 address for an Instance.
 *
 * @param instanceId - The [Instance ID](#operation/list-instances).
 */
export const createInstanceIpv4 = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: CreateInstanceIpv4Input,
  outputSchema: CreateInstanceIpv4Output,
  errors: [BadRequest, NotFound] as const,
}));
