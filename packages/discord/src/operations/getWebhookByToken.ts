import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { BadRequest, Forbidden, NotFound } from "../errors.ts";

// Input Schema
export const GetWebhookByTokenInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
  {
    webhook_id: Schema.String.pipe(T.PathParam()),
    webhook_token: Schema.String.pipe(T.PathParam()),
  },
).pipe(
  T.Http({ method: "GET", path: "/webhooks/{webhook_id}/{webhook_token}" }),
);
export type GetWebhookByTokenInput = typeof GetWebhookByTokenInput.Type;

// Output Schema
export const GetWebhookByTokenOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Unknown;
export type GetWebhookByTokenOutput = typeof GetWebhookByTokenOutput.Type;

// The operation
export const getWebhookByToken = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: GetWebhookByTokenInput,
  outputSchema: GetWebhookByTokenOutput,
  errors: [BadRequest, Forbidden, NotFound] as const,
}));
