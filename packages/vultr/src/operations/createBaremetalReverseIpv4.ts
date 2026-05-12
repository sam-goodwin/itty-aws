import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { BadRequest, NotFound } from "../errors.ts";

// Input Schema
export const CreateBaremetalReverseIpv4Input =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    baremetalId: Schema.String.pipe(T.PathParam()),
    ip: Schema.String,
    reverse: Schema.String,
  }).pipe(
    T.Http({ method: "POST", path: "/bare-metals/{baremetalId}/ipv4/reverse" }),
  );
export type CreateBaremetalReverseIpv4Input =
  typeof CreateBaremetalReverseIpv4Input.Type;

// Output Schema
export const CreateBaremetalReverseIpv4Output =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type CreateBaremetalReverseIpv4Output =
  typeof CreateBaremetalReverseIpv4Output.Type;

// The operation
/**
 * Create Baremetal Reverse IPv4
 *
 * Create a reverse IPv4 entry for a Bare Metal Instance. The `ip` and `reverse` attributes are required.
 *
 * @param baremetalId - The [Bare Metal ID](#operation/baremetals).
 */
export const createBaremetalReverseIpv4 = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: CreateBaremetalReverseIpv4Input,
    outputSchema: CreateBaremetalReverseIpv4Output,
    errors: [BadRequest, NotFound] as const,
  }),
);
