import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { BadRequest, Forbidden, NotFound } from "../errors.ts";

// Input Schema
export const UpdateWebhookByTokenInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    webhook_id: Schema.String.pipe(T.PathParam()),
    webhook_token: Schema.String.pipe(T.PathParam()),
    name: Schema.optional(Schema.String),
    avatar: Schema.optional(Schema.NullOr(Schema.String)),
  }).pipe(
    T.Http({ method: "PATCH", path: "/webhooks/{webhook_id}/{webhook_token}" }),
  );
export type UpdateWebhookByTokenInput = typeof UpdateWebhookByTokenInput.Type;

// Output Schema
export const UpdateWebhookByTokenOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Unknown;
export type UpdateWebhookByTokenOutput = typeof UpdateWebhookByTokenOutput.Type;

// The operation
export const updateWebhookByToken = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: UpdateWebhookByTokenInput,
    outputSchema: UpdateWebhookByTokenOutput,
    errors: [BadRequest, Forbidden, NotFound] as const,
  }),
);
