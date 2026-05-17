import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { BadRequest, Forbidden, NotFound } from "../errors.ts";

// Input Schema
export const GetGuildWebhooksInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  guild_id: Schema.String.pipe(T.PathParam()),
}).pipe(T.Http({ method: "GET", path: "/guilds/{guild_id}/webhooks" }));
export type GetGuildWebhooksInput = typeof GetGuildWebhooksInput.Type;

// Output Schema
export const GetGuildWebhooksOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Array(
  Schema.Unknown,
);
export type GetGuildWebhooksOutput = typeof GetGuildWebhooksOutput.Type;

// The operation
export const getGuildWebhooks = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: GetGuildWebhooksInput,
  outputSchema: GetGuildWebhooksOutput,
  errors: [BadRequest, Forbidden, NotFound] as const,
}));
