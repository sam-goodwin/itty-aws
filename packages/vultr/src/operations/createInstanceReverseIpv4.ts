import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { BadRequest, NotFound } from "../errors.ts";

// Input Schema
export const CreateInstanceReverseIpv4Input =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    instanceId: Schema.String.pipe(T.PathParam()),
    ip: Schema.String,
    reverse: Schema.String,
  }).pipe(
    T.Http({ method: "POST", path: "/instances/{instanceId}/ipv4/reverse" }),
  );
export type CreateInstanceReverseIpv4Input =
  typeof CreateInstanceReverseIpv4Input.Type;

// Output Schema
export const CreateInstanceReverseIpv4Output =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type CreateInstanceReverseIpv4Output =
  typeof CreateInstanceReverseIpv4Output.Type;

// The operation
/**
 * Create Instance Reverse IPv4
 *
 * Create a reverse IPv4 entry for an Instance. The `ip` and `reverse` attributes are required.
 *
 * @param instanceId - The [Instance ID](#operation/list-instances).
 */
export const createInstanceReverseIpv4 = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: CreateInstanceReverseIpv4Input,
    outputSchema: CreateInstanceReverseIpv4Output,
    errors: [BadRequest, NotFound] as const,
  }),
);
