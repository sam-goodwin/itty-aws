import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { BadRequest, NotFound } from "../errors.ts";

// Input Schema
export const CreateBaremetalReverseIpv6Input =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    baremetalId: Schema.String.pipe(T.PathParam()),
    ip: Schema.String,
    reverse: Schema.String,
  }).pipe(
    T.Http({ method: "POST", path: "/bare-metals/{baremetalId}/ipv6/reverse" }),
  );
export type CreateBaremetalReverseIpv6Input =
  typeof CreateBaremetalReverseIpv6Input.Type;

// Output Schema
export const CreateBaremetalReverseIpv6Output =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type CreateBaremetalReverseIpv6Output =
  typeof CreateBaremetalReverseIpv6Output.Type;

// The operation
/**
 * Create Baremetal Reverse IPv6
 *
 * Create a reverse IPv6 entry for a Bare Metal Instance. The `ip` and `reverse` attributes are required. IP address must be in full, expanded format.
 *
 * @param baremetalId - The [Bare metal ID](#operation/baremetals).
 */
export const createBaremetalReverseIpv6 = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: CreateBaremetalReverseIpv6Input,
    outputSchema: CreateBaremetalReverseIpv6Output,
    errors: [BadRequest, NotFound] as const,
  }),
);
