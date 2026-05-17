import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { BadRequest, Forbidden, NotFound } from "../errors.ts";

// Input Schema
export const GetLobbyMessagesInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  lobby_id: Schema.String.pipe(T.PathParam()),
  limit: Schema.optional(Schema.Number),
}).pipe(T.Http({ method: "GET", path: "/lobbies/{lobby_id}/messages" }));
export type GetLobbyMessagesInput = typeof GetLobbyMessagesInput.Type;

// Output Schema
export const GetLobbyMessagesOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Array(
  Schema.Struct({
    id: Schema.String,
    type: Schema.Unknown,
    content: Schema.String,
    lobby_id: Schema.String,
    channel_id: Schema.String,
    author: Schema.Struct({
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
    metadata: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    moderation_metadata: Schema.optional(
      Schema.Record(Schema.String, Schema.String),
    ),
    flags: Schema.Number,
    application_id: Schema.optional(Schema.String),
  }),
);
export type GetLobbyMessagesOutput = typeof GetLobbyMessagesOutput.Type;

// The operation
export const getLobbyMessages = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: GetLobbyMessagesInput,
  outputSchema: GetLobbyMessagesOutput,
  errors: [BadRequest, Forbidden, NotFound] as const,
}));
