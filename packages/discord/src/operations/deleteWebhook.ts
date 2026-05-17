import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { BadRequest, Forbidden, NotFound } from "../errors.ts";

// Input Schema
export const DeleteWebhookInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  webhook_id: Schema.String.pipe(T.PathParam()),
}).pipe(T.Http({ method: "DELETE", path: "/webhooks/{webhook_id}" }));
export type DeleteWebhookInput = typeof DeleteWebhookInput.Type;

// Output Schema
export const DeleteWebhookOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type DeleteWebhookOutput = typeof DeleteWebhookOutput.Type;

// The operation
export const deleteWebhook = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: DeleteWebhookInput,
  outputSchema: DeleteWebhookOutput,
  errors: [BadRequest, Forbidden, NotFound] as const,
}));
