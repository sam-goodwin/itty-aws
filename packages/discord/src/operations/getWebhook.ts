import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { BadRequest, Forbidden, NotFound } from "../errors.ts";

// Input Schema
export const GetWebhookInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  webhook_id: Schema.String.pipe(T.PathParam()),
}).pipe(T.Http({ method: "GET", path: "/webhooks/{webhook_id}" }));
export type GetWebhookInput = typeof GetWebhookInput.Type;

// Output Schema
export const GetWebhookOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Unknown;
export type GetWebhookOutput = typeof GetWebhookOutput.Type;

// The operation
export const getWebhook = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: GetWebhookInput,
  outputSchema: GetWebhookOutput,
  errors: [BadRequest, Forbidden, NotFound] as const,
}));
