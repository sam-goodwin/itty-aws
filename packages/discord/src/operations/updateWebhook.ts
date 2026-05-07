import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { BadRequest, Forbidden, NotFound } from "../errors.ts";

// Input Schema
export const UpdateWebhookInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  webhook_id: Schema.String.pipe(T.PathParam()),
  name: Schema.optional(Schema.String),
  avatar: Schema.optional(Schema.NullOr(Schema.String)),
  channel_id: Schema.optional(Schema.Unknown),
}).pipe(T.Http({ method: "PATCH", path: "/webhooks/{webhook_id}" }));
export type UpdateWebhookInput = typeof UpdateWebhookInput.Type;

// Output Schema
export const UpdateWebhookOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Unknown;
export type UpdateWebhookOutput = typeof UpdateWebhookOutput.Type;

// The operation
export const updateWebhook = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: UpdateWebhookInput,
  outputSchema: UpdateWebhookOutput,
  errors: [BadRequest, Forbidden, NotFound] as const,
}));
