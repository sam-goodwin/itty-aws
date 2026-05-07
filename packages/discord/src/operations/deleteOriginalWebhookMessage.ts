import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { BadRequest, Forbidden, NotFound } from "../errors.ts";

// Input Schema
export const DeleteOriginalWebhookMessageInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    webhook_id: Schema.String.pipe(T.PathParam()),
    webhook_token: Schema.String.pipe(T.PathParam()),
    thread_id: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/webhooks/{webhook_id}/{webhook_token}/messages/@original",
    }),
  );
export type DeleteOriginalWebhookMessageInput =
  typeof DeleteOriginalWebhookMessageInput.Type;

// Output Schema
export const DeleteOriginalWebhookMessageOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type DeleteOriginalWebhookMessageOutput =
  typeof DeleteOriginalWebhookMessageOutput.Type;

// The operation
export const deleteOriginalWebhookMessage =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: DeleteOriginalWebhookMessageInput,
    outputSchema: DeleteOriginalWebhookMessageOutput,
    errors: [BadRequest, Forbidden, NotFound] as const,
  }));
