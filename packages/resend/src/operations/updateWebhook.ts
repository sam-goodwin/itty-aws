import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { NotFound, UnprocessableEntity } from "../errors.ts";

// Input Schema
export const UpdateWebhookInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  webhook_id: Schema.String.pipe(T.PathParam()),
  endpoint: Schema.optional(Schema.String),
  events: Schema.optional(Schema.Array(Schema.String)),
  status: Schema.optional(Schema.Literals(["enabled", "disabled"])),
}).pipe(T.Http({ method: "PATCH", path: "/webhooks/{webhook_id}" }));
export type UpdateWebhookInput = typeof UpdateWebhookInput.Type;

// Output Schema
export const UpdateWebhookOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  object: Schema.optional(Schema.String),
  id: Schema.optional(Schema.String),
});
export type UpdateWebhookOutput = typeof UpdateWebhookOutput.Type;

// The operation
/**
 * Update an existing webhook
 *
 * @param webhook_id - The Webhook ID.
 */
export const updateWebhook = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: UpdateWebhookInput,
  outputSchema: UpdateWebhookOutput,
  errors: [NotFound, UnprocessableEntity] as const,
}));
