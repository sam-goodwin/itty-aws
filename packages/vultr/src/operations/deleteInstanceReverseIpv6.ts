import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { BadRequest, Forbidden } from "../errors.ts";

// Input Schema
export const DeleteInstanceReverseIpv6Input =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    instanceId: Schema.String.pipe(T.PathParam()),
    ipv6: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/instances/{instanceId}/ipv6/reverse/{ipv6}",
    }),
  );
export type DeleteInstanceReverseIpv6Input =
  typeof DeleteInstanceReverseIpv6Input.Type;

// Output Schema
export const DeleteInstanceReverseIpv6Output =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type DeleteInstanceReverseIpv6Output =
  typeof DeleteInstanceReverseIpv6Output.Type;

// The operation
/**
 * Delete Instance Reverse IPv6
 *
 * Delete the reverse IPv6 for an Instance.
 *
 * @param instanceId - The [Instance ID](#operation/list-instances).
 * @param ipv6 - The IPv6 address.
 */
export const deleteInstanceReverseIpv6 = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: DeleteInstanceReverseIpv6Input,
    outputSchema: DeleteInstanceReverseIpv6Output,
    errors: [BadRequest, Forbidden] as const,
  }),
);
