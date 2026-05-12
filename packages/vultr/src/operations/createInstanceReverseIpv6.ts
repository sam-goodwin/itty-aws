import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { BadRequest, NotFound } from "../errors.ts";

// Input Schema
export const CreateInstanceReverseIpv6Input =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    instanceId: Schema.String.pipe(T.PathParam()),
    ip: Schema.String,
    reverse: Schema.String,
  }).pipe(
    T.Http({ method: "POST", path: "/instances/{instanceId}/ipv6/reverse" }),
  );
export type CreateInstanceReverseIpv6Input =
  typeof CreateInstanceReverseIpv6Input.Type;

// Output Schema
export const CreateInstanceReverseIpv6Output =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type CreateInstanceReverseIpv6Output =
  typeof CreateInstanceReverseIpv6Output.Type;

// The operation
/**
 * Create Instance Reverse IPv6
 *
 * Create a reverse IPv6 entry for an Instance. The `ip` and `reverse` attributes are required. IP address must be in full, expanded format.
 *
 * @param instanceId - The [Instance ID](#operation/list-instances).
 */
export const createInstanceReverseIpv6 = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: CreateInstanceReverseIpv6Input,
    outputSchema: CreateInstanceReverseIpv6Output,
    errors: [BadRequest, NotFound] as const,
  }),
);
