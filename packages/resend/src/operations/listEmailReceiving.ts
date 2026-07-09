import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";

// Input Schema
export const ListEmailReceivingInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    limit: Schema.optional(Schema.Number),
    after: Schema.optional(Schema.String),
    before: Schema.optional(Schema.String),
  }).pipe(T.Http({ method: "GET", path: "/emails/receiving" }));
export type ListEmailReceivingInput = typeof ListEmailReceivingInput.Type;

// Output Schema
export const ListEmailReceivingOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    object: Schema.optional(Schema.String),
    has_more: Schema.optional(Schema.Boolean),
    data: Schema.optional(
      Schema.Array(
        Schema.Struct({
          id: Schema.optional(Schema.String),
          to: Schema.optional(Schema.Array(Schema.String)),
          from: Schema.optional(Schema.String),
          subject: Schema.optional(Schema.NullOr(Schema.String)),
          message_id: Schema.optional(Schema.String),
          bcc: Schema.optional(Schema.NullOr(Schema.Array(Schema.String))),
          cc: Schema.optional(Schema.NullOr(Schema.Array(Schema.String))),
          reply_to: Schema.optional(Schema.NullOr(Schema.Array(Schema.String))),
          created_at: Schema.optional(Schema.String),
          attachments: Schema.optional(
            Schema.Array(
              Schema.Struct({
                id: Schema.optional(Schema.String),
                filename: Schema.optional(Schema.NullOr(Schema.String)),
                content_type: Schema.optional(Schema.String),
                content_id: Schema.optional(Schema.String),
                content_disposition: Schema.optional(
                  Schema.NullOr(Schema.Literals(["inline", "attachment"])),
                ),
                size: Schema.optional(Schema.Number),
              }),
            ),
          ),
        }),
      ),
    ),
  });
export type ListEmailReceivingOutput = typeof ListEmailReceivingOutput.Type;

// The operation
/**
 * Retrieve a list of received emails
 *
 * @param limit - Maximum number of received emails to return.
 * @param after - Pagination cursor to fetch results after this email ID. Cannot be used with 'before'.
 * @param before - Pagination cursor to fetch results before this email ID. Cannot be used with 'after'.
 */
export const listEmailReceiving = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: ListEmailReceivingInput,
  outputSchema: ListEmailReceivingOutput,
}));
