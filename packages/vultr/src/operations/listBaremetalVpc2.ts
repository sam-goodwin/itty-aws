import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { BadRequest, NotFound } from "../errors.ts";

// Input Schema
export const ListBaremetalVpc2Input = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
  {
    baremetalId: Schema.String.pipe(T.PathParam()),
  },
).pipe(T.Http({ method: "GET", path: "/bare-metals/{baremetalId}/vpc2" }));
export type ListBaremetalVpc2Input = typeof ListBaremetalVpc2Input.Type;

// Output Schema
export const ListBaremetalVpc2Output =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    vpcs: Schema.optional(
      Schema.Array(
        Schema.Struct({
          id: Schema.String,
          mac_address: Schema.optional(Schema.String),
          ip_address: Schema.optional(Schema.String),
        }),
      ),
    ),
  });
export type ListBaremetalVpc2Output = typeof ListBaremetalVpc2Output.Type;

// The operation
/**
 * List Bare Metal Instance VPC 2.0 Networks
 *
 * List the VPC 2.0 networks for a Bare Metal Instance.
 *
 * @param baremetalId - The [Bare Metal ID](#operation/list-baremetals).
 */
export const listBaremetalVpc2 = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: ListBaremetalVpc2Input,
  outputSchema: ListBaremetalVpc2Output,
  errors: [BadRequest, NotFound] as const,
}));
