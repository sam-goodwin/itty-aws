import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { BadRequest, Forbidden, NotFound } from "../errors.ts";

// Input Schema
export const DeleteWebhookByTokenInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    webhook_id: Schema.String.pipe(T.PathParam()),
    webhook_token: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/webhooks/{webhook_id}/{webhook_token}",
    }),
  );
export type DeleteWebhookByTokenInput = typeof DeleteWebhookByTokenInput.Type;

// Output Schema
export const DeleteWebhookByTokenOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type DeleteWebhookByTokenOutput = typeof DeleteWebhookByTokenOutput.Type;

// The operation
export const deleteWebhookByToken = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: DeleteWebhookByTokenInput,
    outputSchema: DeleteWebhookByTokenOutput,
    errors: [BadRequest, Forbidden, NotFound] as const,
  }),
);
