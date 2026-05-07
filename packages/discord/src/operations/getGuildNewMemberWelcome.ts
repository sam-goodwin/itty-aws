import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { BadRequest, Forbidden, NotFound } from "../errors.ts";

// Input Schema
export const GetGuildNewMemberWelcomeInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    guild_id: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({ method: "GET", path: "/guilds/{guild_id}/new-member-welcome" }),
  );
export type GetGuildNewMemberWelcomeInput =
  typeof GetGuildNewMemberWelcomeInput.Type;

// Output Schema
export const GetGuildNewMemberWelcomeOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    guild_id: Schema.String,
    enabled: Schema.Boolean,
    welcome_message: Schema.optional(
      Schema.Struct({
        author_ids: Schema.Array(Schema.String),
        message: Schema.String,
      }),
    ),
    new_member_actions: Schema.Array(
      Schema.Struct({
        channel_id: Schema.String,
        action_type: Schema.Unknown,
        title: Schema.String,
        description: Schema.String,
        emoji: Schema.optional(
          Schema.Struct({
            id: Schema.Unknown,
            name: Schema.NullOr(Schema.String),
            animated: Schema.Boolean,
          }),
        ),
        icon: Schema.optional(Schema.String),
      }),
    ),
    resource_channels: Schema.Array(
      Schema.Struct({
        channel_id: Schema.String,
        title: Schema.String,
        emoji: Schema.optional(
          Schema.Struct({
            id: Schema.Unknown,
            name: Schema.NullOr(Schema.String),
            animated: Schema.Boolean,
          }),
        ),
        icon: Schema.optional(Schema.String),
        description: Schema.String,
      }),
    ),
  });
export type GetGuildNewMemberWelcomeOutput =
  typeof GetGuildNewMemberWelcomeOutput.Type;

// The operation
export const getGuildNewMemberWelcome = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: GetGuildNewMemberWelcomeInput,
    outputSchema: GetGuildNewMemberWelcomeOutput,
    errors: [BadRequest, Forbidden, NotFound] as const,
  }),
);
