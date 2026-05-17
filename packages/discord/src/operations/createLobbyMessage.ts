import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { BadRequest, Forbidden, NotFound } from "../errors.ts";

// Input Schema
export const CreateLobbyMessageInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    lobby_id: Schema.String.pipe(T.PathParam()),
    content: Schema.optional(Schema.NullOr(Schema.String)),
    embeds: Schema.optional(
      Schema.NullOr(
        Schema.Array(
          Schema.Struct({
            type: Schema.optional(Schema.NullOr(Schema.String)),
            url: Schema.optional(Schema.NullOr(Schema.String)),
            title: Schema.optional(Schema.NullOr(Schema.String)),
            color: Schema.optional(Schema.NullOr(Schema.Number)),
            timestamp: Schema.optional(Schema.NullOr(Schema.String)),
            description: Schema.optional(Schema.NullOr(Schema.String)),
            author: Schema.optional(Schema.Unknown),
            image: Schema.optional(Schema.Unknown),
            thumbnail: Schema.optional(Schema.Unknown),
            footer: Schema.optional(Schema.Unknown),
            fields: Schema.optional(
              Schema.NullOr(
                Schema.Array(
                  Schema.Struct({
                    name: Schema.String,
                    value: Schema.String,
                    inline: Schema.optional(Schema.NullOr(Schema.Boolean)),
                  }),
                ),
              ),
            ),
            provider: Schema.optional(Schema.Unknown),
            video: Schema.optional(Schema.Unknown),
          }),
        ),
      ),
    ),
    allowed_mentions: Schema.optional(Schema.Unknown),
    sticker_ids: Schema.optional(Schema.NullOr(Schema.Array(Schema.String))),
    components: Schema.optional(Schema.NullOr(Schema.Array(Schema.Unknown))),
    flags: Schema.optional(Schema.NullOr(Schema.Number)),
    attachments: Schema.optional(
      Schema.NullOr(
        Schema.Array(
          Schema.Struct({
            id: Schema.String,
            filename: Schema.optional(Schema.NullOr(Schema.String)),
            description: Schema.optional(Schema.NullOr(Schema.String)),
            duration_secs: Schema.optional(Schema.NullOr(Schema.Number)),
            waveform: Schema.optional(Schema.NullOr(Schema.String)),
            title: Schema.optional(Schema.NullOr(Schema.String)),
            is_remix: Schema.optional(Schema.NullOr(Schema.Boolean)),
          }),
        ),
      ),
    ),
    poll: Schema.optional(Schema.Unknown),
    shared_client_theme: Schema.optional(Schema.Unknown),
    message_reference: Schema.optional(Schema.Unknown),
    nonce: Schema.optional(Schema.Unknown),
    enforce_nonce: Schema.optional(Schema.NullOr(Schema.Boolean)),
    tts: Schema.optional(Schema.NullOr(Schema.Boolean)),
  }).pipe(T.Http({ method: "POST", path: "/lobbies/{lobby_id}/messages" }));
export type CreateLobbyMessageInput = typeof CreateLobbyMessageInput.Type;

// Output Schema
export const CreateLobbyMessageOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
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
  });
export type CreateLobbyMessageOutput = typeof CreateLobbyMessageOutput.Type;

// The operation
export const createLobbyMessage = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: CreateLobbyMessageInput,
  outputSchema: CreateLobbyMessageOutput,
  errors: [BadRequest, Forbidden, NotFound] as const,
}));
