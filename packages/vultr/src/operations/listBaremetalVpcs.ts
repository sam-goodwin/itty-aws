import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { BadRequest, NotFound } from "../errors.ts";

// Input Schema
export const ListBaremetalVpcsInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
  {
    baremetalId: Schema.String.pipe(T.PathParam()),
  },
).pipe(T.Http({ method: "GET", path: "/bare-metals/{baremetalId}/vpcs" }));
export type ListBaremetalVpcsInput = typeof ListBaremetalVpcsInput.Type;

// Output Schema
export const ListBaremetalVpcsOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    vpcs: Schema.optional(
      Schema.Array(
        Schema.Struct({
          id: Schema.optional(Schema.String),
          mac_address: Schema.optional(Schema.String),
          ip_address: Schema.optional(Schema.String),
        }),
      ),
    ),
  });
export type ListBaremetalVpcsOutput = typeof ListBaremetalVpcsOutput.Type;

// The operation
/**
 * List Bare Metal Instance VPC Networks
 *
 * List the VPC networks for a Bare Metal Instance.
 *
 * @param baremetalId - The [Bare Metal ID](#operation/list-baremetals).
 */
export const listBaremetalVpcs = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: ListBaremetalVpcsInput,
  outputSchema: ListBaremetalVpcsOutput,
  errors: [BadRequest, NotFound] as const,
}));
