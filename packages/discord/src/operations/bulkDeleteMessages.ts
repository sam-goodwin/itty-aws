import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { BadRequest, Forbidden, NotFound } from "../errors.ts";

// Input Schema
export const BulkDeleteMessagesInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    channel_id: Schema.String.pipe(T.PathParam()),
    messages: Schema.Array(Schema.String),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/channels/{channel_id}/messages/bulk-delete",
    }),
  );
export type BulkDeleteMessagesInput = typeof BulkDeleteMessagesInput.Type;

// Output Schema
export const BulkDeleteMessagesOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type BulkDeleteMessagesOutput = typeof BulkDeleteMessagesOutput.Type;

// The operation
export const bulkDeleteMessages = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: BulkDeleteMessagesInput,
  outputSchema: BulkDeleteMessagesOutput,
  errors: [BadRequest, Forbidden, NotFound] as const,
}));
