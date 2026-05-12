import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { BadRequest, Forbidden } from "../errors.ts";

// Input Schema
export const DeleteInstanceIpv4Input =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    instanceId: Schema.String.pipe(T.PathParam()),
    ipv4: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({ method: "DELETE", path: "/instances/{instanceId}/ipv4/{ipv4}" }),
  );
export type DeleteInstanceIpv4Input = typeof DeleteInstanceIpv4Input.Type;

// Output Schema
export const DeleteInstanceIpv4Output = /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type DeleteInstanceIpv4Output = typeof DeleteInstanceIpv4Output.Type;

// The operation
/**
 * Delete IPv4 Address
 *
 * Delete an IPv4 address from an Instance.
 *
 * @param instanceId - The [Instance ID](#operation/list-instances).
 * @param ipv4 - The IPv4 address.
 */
export const deleteInstanceIpv4 = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: DeleteInstanceIpv4Input,
  outputSchema: DeleteInstanceIpv4Output,
  errors: [BadRequest, Forbidden] as const,
}));
