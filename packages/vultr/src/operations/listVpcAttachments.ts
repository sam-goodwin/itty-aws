import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { BadRequest, Forbidden, NotFound } from "../errors.ts";

// Input Schema
export const ListVpcAttachmentsInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    vpcId: Schema.String.pipe(T.PathParam()),
    per_page: Schema.optional(Schema.Number),
    cursor: Schema.optional(Schema.String),
  }).pipe(T.Http({ method: "GET", path: "/vpcs/{vpcId}/attachments" }));
export type ListVpcAttachmentsInput = typeof ListVpcAttachmentsInput.Type;

// Output Schema
export const ListVpcAttachmentsOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    attachments: Schema.optional(
      Schema.Array(
        Schema.Struct({
          id: Schema.optional(Schema.String),
          type: Schema.optional(Schema.String),
          mac_address: Schema.optional(Schema.String),
          date_added: Schema.optional(Schema.String),
          ip: Schema.optional(
            Schema.Struct({
              v4: Schema.optional(Schema.String),
            }),
          ),
          linked_subscription: Schema.optional(
            Schema.NullOr(
              Schema.Struct({
                type: Schema.optional(Schema.String),
                id: Schema.optional(Schema.String),
              }),
            ),
          ),
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
export type ListVpcAttachmentsOutput = typeof ListVpcAttachmentsOutput.Type;

// The operation
/**
 * List VPC Attachments
 *
 * List VPC Attachments.
 *
 * @param vpcId - The [VPC ID](#operation/list-vpcs).
 * @param per_page - Number of items requested per page. Default is 100 and Max is 500.
 * @param cursor - Cursor for paging. See [Meta and Pagination](#section/Introduction/Meta-and-Pagination).
 */
export const listVpcAttachments = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: ListVpcAttachmentsInput,
  outputSchema: ListVpcAttachmentsOutput,
  errors: [BadRequest, Forbidden, NotFound] as const,
}));
