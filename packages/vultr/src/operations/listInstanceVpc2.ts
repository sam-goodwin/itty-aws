import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { BadRequest, NotFound } from "../errors.ts";

// Input Schema
export const ListInstanceVpc2Input = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  instanceId: Schema.String.pipe(T.PathParam()),
  per_page: Schema.optional(Schema.Number),
  cursor: Schema.optional(Schema.String),
}).pipe(T.Http({ method: "GET", path: "/instances/{instanceId}/vpc2" }));
export type ListInstanceVpc2Input = typeof ListInstanceVpc2Input.Type;

// Output Schema
export const ListInstanceVpc2Output = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
  {
    vpcs: Schema.optional(
      Schema.Array(
        Schema.Struct({
          id: Schema.String,
          mac_address: Schema.optional(Schema.String),
          ip_address: Schema.optional(Schema.String),
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
export type ListInstanceVpc2Output = typeof ListInstanceVpc2Output.Type;

// The operation
/**
 * List Instance VPC 2.0 Networks
 *
 * List the VPC 2.0 networks for an Instance.
 *
 * @param instanceId - The [Instance ID](#operation/list-instances).
 * @param per_page - Number of items requested per page. Default is 100 and Max is 500.
 * @param cursor - Cursor for paging. See [Meta and Pagination](#section/Introduction/Meta-and-Pagination).
 */
export const listInstanceVpc2 = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: ListInstanceVpc2Input,
  outputSchema: ListInstanceVpc2Output,
  errors: [BadRequest, NotFound] as const,
}));
