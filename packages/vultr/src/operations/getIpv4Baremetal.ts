import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { BadRequest, NotFound } from "../errors.ts";

// Input Schema
export const GetIpv4BaremetalInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  baremetalId: Schema.String.pipe(T.PathParam()),
}).pipe(T.Http({ method: "GET", path: "/bare-metals/{baremetalId}/ipv4" }));
export type GetIpv4BaremetalInput = typeof GetIpv4BaremetalInput.Type;

// Output Schema
export const GetIpv4BaremetalOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
  {
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
  },
);
export type GetIpv4BaremetalOutput = typeof GetIpv4BaremetalOutput.Type;

// The operation
/**
 * Bare Metal IPv4 Addresses
 *
 * Get the IPv4 information for the Bare Metal instance.
 *
 * @param baremetalId - The [Bare Metal id](#operation/list-baremetals).
 */
export const getIpv4Baremetal = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: GetIpv4BaremetalInput,
  outputSchema: GetIpv4BaremetalOutput,
  errors: [BadRequest, NotFound] as const,
}));
