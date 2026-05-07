import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { BadRequest, Forbidden, NotFound } from "../errors.ts";

// Input Schema
export const GetThreadMemberInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  channel_id: Schema.String.pipe(T.PathParam()),
  user_id: Schema.String.pipe(T.PathParam()),
  with_member: Schema.optional(Schema.Boolean),
}).pipe(
  T.Http({
    method: "GET",
    path: "/channels/{channel_id}/thread-members/{user_id}",
  }),
);
export type GetThreadMemberInput = typeof GetThreadMemberInput.Type;

// Output Schema
export const GetThreadMemberOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  id: Schema.String,
  user_id: Schema.String,
  join_timestamp: Schema.String,
  flags: Schema.Number,
  member: Schema.optional(
    Schema.Struct({
      avatar: Schema.NullOr(Schema.String),
      avatar_decoration_data: Schema.optional(Schema.Unknown),
      banner: Schema.NullOr(Schema.String),
      communication_disabled_until: Schema.NullOr(Schema.String),
      flags: Schema.Number,
      joined_at: Schema.String,
      nick: Schema.NullOr(Schema.String),
      pending: Schema.Boolean,
      premium_since: Schema.NullOr(Schema.String),
      roles: Schema.Array(Schema.String),
      collectibles: Schema.optional(Schema.Unknown),
      user: Schema.Struct({
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
      mute: Schema.Boolean,
      deaf: Schema.Boolean,
    }),
  ),
});
export type GetThreadMemberOutput = typeof GetThreadMemberOutput.Type;

// The operation
export const getThreadMember = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: GetThreadMemberInput,
  outputSchema: GetThreadMemberOutput,
  errors: [BadRequest, Forbidden, NotFound] as const,
}));
