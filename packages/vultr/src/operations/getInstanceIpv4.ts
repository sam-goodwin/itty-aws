import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { BadRequest, NotFound } from "../errors.ts";

// Input Schema
export const GetInstanceIpv4Input = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  instanceId: Schema.String.pipe(T.PathParam()),
  public_network: Schema.optional(Schema.Boolean),
  per_page: Schema.optional(Schema.Number),
  cursor: Schema.optional(Schema.String),
}).pipe(T.Http({ method: "GET", path: "/instances/{instanceId}/ipv4" }));
export type GetInstanceIpv4Input = typeof GetInstanceIpv4Input.Type;

// Output Schema
export const GetInstanceIpv4Output = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  ipv4s: Schema.optional(
    Schema.Array(
      Schema.Struct({
        ip: Schema.optional(Schema.String),
        netmask: Schema.optional(Schema.String),
        gateway: Schema.optional(Schema.String),
        type: Schema.optional(Schema.String),
        reverse: Schema.optional(Schema.String),
        mac_address: Schema.optional(Schema.String),
      }),
    ),
  ),
  meta: Schema.optional(
    Schema.Struct({
      total: Schema.optional(Schema.Number),
      links: Schema.optional(
        Schema.Struct({
          next: Schema.optional(Schema.String),
          prev: Schema.optional(Schema.String),
        }),
      ),
    }),
  ),
});
export type GetInstanceIpv4Output = typeof GetInstanceIpv4Output.Type;

// The operation
/**
 * List Instance IPv4 Information
 *
 * List the IPv4 information for an Instance.
 *
 * @param instanceId - The [Instance ID](#operation/list-instances).
 * @param public_network - If `true`, includes information about the public network adapter (such as MAC address) with the `main_ip` entry.
 * @param per_page - Number of items requested per page. Default is 100 and Max is 500.

 * @param cursor - Cursor for paging. See [Meta and Pagination](#section/Introduction/Meta-and-Pagination).
 */
export const getInstanceIpv4 = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: GetInstanceIpv4Input,
  outputSchema: GetInstanceIpv4Output,
  errors: [BadRequest, NotFound] as const,
}));
