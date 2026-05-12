import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { BadRequest, Forbidden } from "../errors.ts";

// Input Schema
export const DeleteBaremetalReverseIpv6Input =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    baremetalId: Schema.String.pipe(T.PathParam()),
    ipv6: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/bare-metals/{baremetalId}/ipv6/reverse/{ipv6}",
    }),
  );
export type DeleteBaremetalReverseIpv6Input =
  typeof DeleteBaremetalReverseIpv6Input.Type;

// Output Schema
export const DeleteBaremetalReverseIpv6Output =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type DeleteBaremetalReverseIpv6Output =
  typeof DeleteBaremetalReverseIpv6Output.Type;

// The operation
/**
 * Delete BareMetal Reverse IPv6
 *
 * Delete the reverse IPv6 for a Bare metal instance.
 *
 * @param baremetalId - The [Bare Metal id](#operation/list-baremetals).
 * @param ipv6 - The IPv6 address.
 */
export const deleteBaremetalReverseIpv6 = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: DeleteBaremetalReverseIpv6Input,
    outputSchema: DeleteBaremetalReverseIpv6Output,
    errors: [BadRequest, Forbidden] as const,
  }),
);
