import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { NotFound } from "../errors.ts";

// Input Schema
export const DeleteWebhookInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  webhook_id: Schema.String.pipe(T.PathParam()),
}).pipe(T.Http({ method: "DELETE", path: "/webhooks/{webhook_id}" }));
export type DeleteWebhookInput = typeof DeleteWebhookInput.Type;

// Output Schema
export const DeleteWebhookOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  object: Schema.optional(Schema.String),
  id: Schema.optional(Schema.String),
  deleted: Schema.optional(Schema.Boolean),
});
export type DeleteWebhookOutput = typeof DeleteWebhookOutput.Type;

// The operation
/**
 * Remove an existing webhook
 *
 * @param webhook_id - The Webhook ID.
 */
export const deleteWebhook = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: DeleteWebhookInput,
  outputSchema: DeleteWebhookOutput,
  errors: [NotFound] as const,
}));
