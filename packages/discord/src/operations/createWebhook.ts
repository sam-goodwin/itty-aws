import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { BadRequest, Forbidden, NotFound } from "../errors.ts";

// Input Schema
export const CreateWebhookInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  channel_id: Schema.String.pipe(T.PathParam()),
  name: Schema.String,
  avatar: Schema.optional(Schema.NullOr(Schema.String)),
}).pipe(T.Http({ method: "POST", path: "/channels/{channel_id}/webhooks" }));
export type CreateWebhookInput = typeof CreateWebhookInput.Type;

// Output Schema
export const CreateWebhookOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  application_id: Schema.Unknown,
  avatar: Schema.NullOr(Schema.String),
  channel_id: Schema.Unknown,
  guild_id: Schema.optional(Schema.Unknown),
  id: Schema.String,
  name: Schema.String,
  type: Schema.Unknown,
  user: Schema.optional(
    Schema.Struct({
      id: Schema.String,
      username: Schema.String,
      avatar: Schema.NullOr(Schema.String),
      discriminator: Schema.String,
      public_flags: Schema.Number,
      flags: Schema.Number,
      bot: Schema.optional(Schema.Boolean),
      system: Schema.optional(Schema.Boolean),
      banner: Schema.optional(Schema.NullOr(Schema.String)),
      accent_color: Schema.optional(Schema.NullOr(Schema.Number)),
      global_name: Schema.NullOr(Schema.String),
      avatar_decoration_data: Schema.optional(Schema.Unknown),
      collectibles: Schema.optional(Schema.Unknown),
      primary_guild: Schema.Unknown,
    }),
  ),
  token: Schema.optional(Schema.String),
  url: Schema.optional(Schema.String),
});
export type CreateWebhookOutput = typeof CreateWebhookOutput.Type;

// The operation
export const createWebhook = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: CreateWebhookInput,
  outputSchema: CreateWebhookOutput,
  errors: [BadRequest, Forbidden, NotFound] as const,
}));
