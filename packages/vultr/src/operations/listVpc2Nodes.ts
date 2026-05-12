import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { BadRequest, Forbidden, NotFound } from "../errors.ts";

// Input Schema
export const ListVpc2NodesInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  vpcId: Schema.String.pipe(T.PathParam()),
  per_page: Schema.optional(Schema.Number),
  cursor: Schema.optional(Schema.String),
}).pipe(T.Http({ method: "GET", path: "/vpc2/{vpcId}/nodes" }));
export type ListVpc2NodesInput = typeof ListVpc2NodesInput.Type;

// Output Schema
export const ListVpc2NodesOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  vpc: Schema.optional(
    Schema.Struct({
      id: Schema.String,
      region: Schema.optional(Schema.String),
      date_created: Schema.optional(Schema.String),
      description: Schema.optional(Schema.String),
      ip_block: Schema.optional(Schema.String),
      prefix_length: Schema.optional(Schema.Number),
    }),
  ),
});
export type ListVpc2NodesOutput = typeof ListVpc2NodesOutput.Type;

// The operation
/**
 * Get a list of nodes attached to a VPC 2.0 network
 *
 * Get a list of nodes attached to a VPC 2.0 network.
 *
 * @param vpcId - The [VPC ID](#operation/list-vpcs).
 * @param per_page - Number of items requested per page. Default is 100 and Max is 500.
 * @param cursor - Cursor for paging. See [Meta and Pagination](#section/Introduction/Meta-and-Pagination).
 */
export const listVpc2Nodes = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: ListVpc2NodesInput,
  outputSchema: ListVpc2NodesOutput,
  errors: [BadRequest, Forbidden, NotFound] as const,
}));
