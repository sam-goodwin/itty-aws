import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { NotFound } from "../errors.ts";

// Input Schema
export const ListEmailAttachmentsInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    email_id: Schema.String.pipe(T.PathParam()),
    limit: Schema.optional(Schema.Number),
    after: Schema.optional(Schema.String),
    before: Schema.optional(Schema.String),
  }).pipe(T.Http({ method: "GET", path: "/emails/{email_id}/attachments" }));
export type ListEmailAttachmentsInput = typeof ListEmailAttachmentsInput.Type;

// Output Schema
export const ListEmailAttachmentsOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    object: Schema.optional(Schema.String),
    has_more: Schema.optional(Schema.Boolean),
    data: Schema.optional(
      Schema.Array(
        Schema.Struct({
          id: Schema.optional(Schema.String),
          filename: Schema.optional(Schema.NullOr(Schema.String)),
          content_type: Schema.optional(Schema.String),
          content_id: Schema.optional(Schema.String),
          content_disposition: Schema.optional(
            Schema.NullOr(Schema.Literals(["inline", "attachment"])),
          ),
          download_url: Schema.optional(Schema.String),
          expires_at: Schema.optional(Schema.String),
          size: Schema.optional(Schema.Number),
        }),
      ),
    ),
  });
export type ListEmailAttachmentsOutput = typeof ListEmailAttachmentsOutput.Type;

// The operation
/**
 * Retrieve a list of attachments for a sent email
 *
 * @param email_id - The ID of the email.
 * @param limit - Maximum number of attachments to return.
 * @param after - Pagination cursor to fetch results after this attachment ID. Cannot be used with 'before'.
 * @param before - Pagination cursor to fetch results before this attachment ID. Cannot be used with 'after'.
 */
export const listEmailAttachments = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: ListEmailAttachmentsInput,
    outputSchema: ListEmailAttachmentsOutput,
    errors: [NotFound] as const,
  }),
);
