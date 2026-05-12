import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { BadRequest, NotFound } from "../errors.ts";

// Input Schema
export const GetIpv6BaremetalInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  baremetalId: Schema.String.pipe(T.PathParam()),
}).pipe(T.Http({ method: "GET", path: "/bare-metals/{baremetalId}/ipv6" }));
export type GetIpv6BaremetalInput = typeof GetIpv6BaremetalInput.Type;

// Output Schema
export const GetIpv6BaremetalOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
  {
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
  },
);
export type GetIpv6BaremetalOutput = typeof GetIpv6BaremetalOutput.Type;

// The operation
/**
 * Bare Metal IPv6 Addresses
 *
 * Get the IPv6 information for the Bare Metal instance.
 *
 * @param baremetalId - The [Bare Metal id](#operation/list-baremetals).
 */
export const getIpv6Baremetal = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: GetIpv6BaremetalInput,
  outputSchema: GetIpv6BaremetalOutput,
  errors: [BadRequest, NotFound] as const,
}));
