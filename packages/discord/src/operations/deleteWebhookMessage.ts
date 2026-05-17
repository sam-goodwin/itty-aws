import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { BadRequest, Forbidden, NotFound } from "../errors.ts";

// Input Schema
export const DeleteWebhookMessageInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    webhook_id: Schema.String.pipe(T.PathParam()),
    webhook_token: Schema.String.pipe(T.PathParam()),
    message_id: Schema.String.pipe(T.PathParam()),
    thread_id: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/webhooks/{webhook_id}/{webhook_token}/messages/{message_id}",
    }),
  );
export type DeleteWebhookMessageInput = typeof DeleteWebhookMessageInput.Type;

// Output Schema
export const DeleteWebhookMessageOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type DeleteWebhookMessageOutput = typeof DeleteWebhookMessageOutput.Type;

// The operation
export const deleteWebhookMessage = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: DeleteWebhookMessageInput,
    outputSchema: DeleteWebhookMessageOutput,
    errors: [BadRequest, Forbidden, NotFound] as const,
  }),
);
