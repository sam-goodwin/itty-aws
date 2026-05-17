import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { BadRequest, Forbidden, NotFound } from "../errors.ts";

// Input Schema
export const UploadApplicationAttachmentInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    application_id: Schema.String.pipe(T.PathParam()),
    file: Schema.String,
  }).pipe(
    T.Http({
      method: "POST",
      path: "/applications/{application_id}/attachment",
      contentType: "multipart",
    }),
  );
export type UploadApplicationAttachmentInput =
  typeof UploadApplicationAttachmentInput.Type;

// Output Schema
export const UploadApplicationAttachmentOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    attachment: Schema.Struct({
      id: Schema.String,
      filename: Schema.String,
      size: Schema.Number,
      url: Schema.String,
      proxy_url: Schema.String,
      width: Schema.optional(Schema.Number),
      height: Schema.optional(Schema.Number),
      duration_secs: Schema.optional(Schema.Number),
      waveform: Schema.optional(Schema.String),
      description: Schema.optional(Schema.String),
      content_type: Schema.optional(Schema.String),
      ephemeral: Schema.optional(Schema.Boolean),
      flags: Schema.optional(Schema.Number),
      placeholder: Schema.optional(Schema.String),
      placeholder_version: Schema.optional(Schema.Number),
      title: Schema.optional(Schema.NullOr(Schema.String)),
      application: Schema.optional(
        Schema.Struct({
          id: Schema.String,
          name: Schema.String,
          icon: Schema.NullOr(Schema.String),
          description: Schema.String,
          type: Schema.Unknown,
          cover_image: Schema.optional(Schema.String),
          primary_sku_id: Schema.optional(Schema.String),
          bot: Schema.optional(
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
          slug: Schema.optional(Schema.String),
          guild_id: Schema.optional(Schema.String),
          rpc_origins: Schema.optional(Schema.Array(Schema.String)),
          bot_public: Schema.optional(Schema.Boolean),
          bot_require_code_grant: Schema.optional(Schema.Boolean),
          terms_of_service_url: Schema.optional(Schema.String),
          privacy_policy_url: Schema.optional(Schema.String),
          custom_install_url: Schema.optional(Schema.String),
          install_params: Schema.optional(
            Schema.Struct({
              scopes: Schema.Array(Schema.Unknown),
              permissions: Schema.String,
            }),
          ),
          integration_types_config: Schema.optional(
            Schema.Record(
              Schema.String,
              Schema.Struct({
                oauth2_install_params: Schema.optional(
                  Schema.Struct({
                    scopes: Schema.Array(Schema.Unknown),
                    permissions: Schema.String,
                  }),
                ),
              }),
            ),
          ),
          verify_key: Schema.String,
          flags: Schema.Number,
          flags_new: Schema.String,
          max_participants: Schema.optional(Schema.NullOr(Schema.Number)),
          tags: Schema.optional(Schema.Array(Schema.String)),
        }),
      ),
      clip_created_at: Schema.optional(Schema.String),
      clip_participants: Schema.optional(
        Schema.Array(
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
      ),
    }),
  });
export type UploadApplicationAttachmentOutput =
  typeof UploadApplicationAttachmentOutput.Type;

// The operation
export const uploadApplicationAttachment = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: UploadApplicationAttachmentInput,
    outputSchema: UploadApplicationAttachmentOutput,
    errors: [BadRequest, Forbidden, NotFound] as const,
  }),
);
