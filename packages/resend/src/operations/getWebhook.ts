import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { NotFound } from "../errors.ts";
import { SensitiveOutputString } from "../sensitive.ts";

// Input Schema
export const GetWebhookInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  webhook_id: Schema.String.pipe(T.PathParam()),
}).pipe(T.Http({ method: "GET", path: "/webhooks/{webhook_id}" }));
export type GetWebhookInput = typeof GetWebhookInput.Type;

// Output Schema
export const GetWebhookOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  object: Schema.optional(Schema.String),
  id: Schema.optional(Schema.String),
  endpoint: Schema.optional(Schema.String),
  events: Schema.optional(Schema.NullOr(Schema.Array(Schema.String))),
  status: Schema.optional(Schema.String),
  created_at: Schema.optional(Schema.String),
  signing_secret: Schema.optional(SensitiveOutputString),
});
export type GetWebhookOutput = typeof GetWebhookOutput.Type;

// The operation
/**
 * Retrieve a single webhook
 *
 * @param webhook_id - The Webhook ID.
 */
export const getWebhook = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: GetWebhookInput,
  outputSchema: GetWebhookOutput,
  errors: [NotFound] as const,
}));
