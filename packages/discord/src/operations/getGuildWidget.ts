import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { BadRequest, Forbidden, NotFound } from "../errors.ts";

// Input Schema
export const GetGuildWidgetInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  guild_id: Schema.String.pipe(T.PathParam()),
}).pipe(T.Http({ method: "GET", path: "/guilds/{guild_id}/widget.json" }));
export type GetGuildWidgetInput = typeof GetGuildWidgetInput.Type;

// Output Schema
export const GetGuildWidgetOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  id: Schema.String,
  name: Schema.String,
  instant_invite: Schema.NullOr(Schema.String),
  channels: Schema.Array(
    Schema.Struct({
      id: Schema.String,
      name: Schema.String,
      position: Schema.Number,
    }),
  ),
  members: Schema.Array(
    Schema.Struct({
      id: Schema.String,
      username: Schema.String,
      discriminator: Schema.Unknown,
      avatar: Schema.Unknown,
      status: Schema.String,
      avatar_url: Schema.String,
      activity: Schema.optional(
        Schema.Struct({
          name: Schema.String,
        }),
      ),
      deaf: Schema.optional(Schema.Boolean),
      mute: Schema.optional(Schema.Boolean),
      self_deaf: Schema.optional(Schema.Boolean),
      self_mute: Schema.optional(Schema.Boolean),
      suppress: Schema.optional(Schema.Boolean),
      channel_id: Schema.optional(Schema.String),
    }),
  ),
  presence_count: Schema.Number,
});
export type GetGuildWidgetOutput = typeof GetGuildWidgetOutput.Type;

// The operation
export const getGuildWidget = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: GetGuildWidgetInput,
  outputSchema: GetGuildWidgetOutput,
  errors: [BadRequest, Forbidden, NotFound] as const,
}));
