import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { BadRequest, NotFound } from "../errors.ts";

// Input Schema
export const GetInstanceIpv6Input = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  instanceId: Schema.String.pipe(T.PathParam()),
}).pipe(T.Http({ method: "GET", path: "/instances/{instanceId}/ipv6" }));
export type GetInstanceIpv6Input = typeof GetInstanceIpv6Input.Type;

// Output Schema
export const GetInstanceIpv6Output = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  ipv6s: Schema.optional(
    Schema.Array(
      Schema.Struct({
        ip: Schema.optional(Schema.String),
        network: Schema.optional(Schema.String),
        network_size: Schema.optional(Schema.Number),
        type: Schema.optional(Schema.String),
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
export type GetInstanceIpv6Output = typeof GetInstanceIpv6Output.Type;

// The operation
/**
 * Get Instance IPv6 Information
 *
 * Get the IPv6 information for an VPS Instance.
 *
 * @param instanceId - The [Instance ID](#operation/list-instances).
 */
export const getInstanceIpv6 = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: GetInstanceIpv6Input,
  outputSchema: GetInstanceIpv6Output,
  errors: [BadRequest, NotFound] as const,
}));
