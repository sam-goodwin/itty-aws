import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { BadRequest, Forbidden, NotFound } from "../errors.ts";

// Input Schema
export const ListChannelWebhooksInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    channel_id: Schema.String.pipe(T.PathParam()),
  }).pipe(T.Http({ method: "GET", path: "/channels/{channel_id}/webhooks" }));
export type ListChannelWebhooksInput = typeof ListChannelWebhooksInput.Type;

// Output Schema
export const ListChannelWebhooksOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Array(Schema.Unknown);
export type ListChannelWebhooksOutput = typeof ListChannelWebhooksOutput.Type;

// The operation
export const listChannelWebhooks = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: ListChannelWebhooksInput,
  outputSchema: ListChannelWebhooksOutput,
  errors: [BadRequest, Forbidden, NotFound] as const,
}));
