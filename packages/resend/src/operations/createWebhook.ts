import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { UnprocessableEntity } from "../errors.ts";
import { SensitiveOutputString } from "../sensitive.ts";

// Input Schema
export const CreateWebhookInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  endpoint: Schema.String,
  events: Schema.Array(Schema.String),
}).pipe(T.Http({ method: "POST", path: "/webhooks" }));
export type CreateWebhookInput = typeof CreateWebhookInput.Type;

// Output Schema
export const CreateWebhookOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  object: Schema.optional(Schema.String),
  id: Schema.optional(Schema.String),
  signing_secret: Schema.optional(SensitiveOutputString),
});
export type CreateWebhookOutput = typeof CreateWebhookOutput.Type;

// The operation
/**
 * Create a new webhook
 */
export const createWebhook = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: CreateWebhookInput,
  outputSchema: CreateWebhookOutput,
  errors: [UnprocessableEntity] as const,
}));
