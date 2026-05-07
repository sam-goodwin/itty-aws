import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { BadRequest, Forbidden, NotFound } from "../errors.ts";

// Input Schema
export const ExecuteWebhookInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  webhook_id: Schema.String.pipe(T.PathParam()),
  webhook_token: Schema.String.pipe(T.PathParam()),
  wait: Schema.optional(Schema.Boolean),
  thread_id: Schema.optional(Schema.String),
  with_components: Schema.optional(Schema.Boolean),
}).pipe(
  T.Http({ method: "POST", path: "/webhooks/{webhook_id}/{webhook_token}" }),
);
export type ExecuteWebhookInput = typeof ExecuteWebhookInput.Type;

// Output Schema
export const ExecuteWebhookOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  type: Schema.Unknown,
  content: Schema.String,
  mentions: Schema.Array(
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
  mention_roles: Schema.Array(Schema.String),
  attachments: Schema.Array(
    Schema.Struct({
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
  ),
  embeds: Schema.Array(
    Schema.Struct({
      type: Schema.String,
      url: Schema.optional(Schema.String),
      title: Schema.optional(Schema.String),
      description: Schema.optional(Schema.String),
      color: Schema.optional(Schema.Number),
      timestamp: Schema.optional(Schema.String),
      fields: Schema.optional(
        Schema.Array(
          Schema.Struct({
            name: Schema.String,
            value: Schema.String,
            inline: Schema.Boolean,
          }),
        ),
      ),
      author: Schema.optional(
        Schema.Struct({
          name: Schema.String,
          url: Schema.optional(Schema.String),
          icon_url: Schema.optional(Schema.String),
          proxy_icon_url: Schema.optional(Schema.String),
        }),
      ),
      provider: Schema.optional(
        Schema.Struct({
          name: Schema.String,
          url: Schema.optional(Schema.String),
        }),
      ),
      image: Schema.optional(
        Schema.Struct({
          url: Schema.optional(Schema.String),
          proxy_url: Schema.optional(Schema.String),
          width: Schema.optional(Schema.Number),
          height: Schema.optional(Schema.Number),
          content_type: Schema.optional(Schema.String),
          placeholder: Schema.optional(Schema.String),
          placeholder_version: Schema.optional(Schema.Number),
          description: Schema.optional(Schema.String),
          flags: Schema.optional(Schema.Number),
        }),
      ),
      thumbnail: Schema.optional(
        Schema.Struct({
          url: Schema.optional(Schema.String),
          proxy_url: Schema.optional(Schema.String),
          width: Schema.optional(Schema.Number),
          height: Schema.optional(Schema.Number),
          content_type: Schema.optional(Schema.String),
          placeholder: Schema.optional(Schema.String),
          placeholder_version: Schema.optional(Schema.Number),
          description: Schema.optional(Schema.String),
          flags: Schema.optional(Schema.Number),
        }),
      ),
      video: Schema.optional(
        Schema.Struct({
          url: Schema.optional(Schema.String),
          proxy_url: Schema.optional(Schema.String),
          width: Schema.optional(Schema.Number),
          height: Schema.optional(Schema.Number),
          content_type: Schema.optional(Schema.String),
          placeholder: Schema.optional(Schema.String),
          placeholder_version: Schema.optional(Schema.Number),
          description: Schema.optional(Schema.String),
          flags: Schema.optional(Schema.Number),
        }),
      ),
      footer: Schema.optional(
        Schema.Struct({
          text: Schema.String,
          icon_url: Schema.optional(Schema.String),
          proxy_icon_url: Schema.optional(Schema.String),
        }),
      ),
      flags: Schema.optional(Schema.NullOr(Schema.Number)),
      components: Schema.optional(
        Schema.Array(
          Schema.Struct({
            type: Schema.Unknown,
            id: Schema.Number,
            accent_color: Schema.NullOr(Schema.Number),
            components: Schema.Array(Schema.Unknown),
            spoiler: Schema.Boolean,
          }),
        ),
      ),
    }),
  ),
  timestamp: Schema.String,
  edited_timestamp: Schema.NullOr(Schema.String),
  flags: Schema.Number,
  components: Schema.Array(Schema.Unknown),
  stickers: Schema.optional(Schema.Array(Schema.Unknown)),
  sticker_items: Schema.optional(
    Schema.Array(
      Schema.Struct({
        id: Schema.String,
        name: Schema.String,
        format_type: Schema.Unknown,
      }),
    ),
  ),
  id: Schema.String,
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
  pinned: Schema.Boolean,
  mention_everyone: Schema.Boolean,
  tts: Schema.Boolean,
  call: Schema.optional(
    Schema.Struct({
      ended_timestamp: Schema.optional(Schema.NullOr(Schema.String)),
      participants: Schema.Array(Schema.String),
    }),
  ),
  activity: Schema.optional(
    Schema.Struct({
      type: Schema.Unknown,
      party_id: Schema.optional(Schema.String),
    }),
  ),
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
    }),
  ),
  application_id: Schema.optional(Schema.String),
  interaction: Schema.optional(
    Schema.Struct({
      id: Schema.String,
      type: Schema.Unknown,
      name: Schema.String,
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
      name_localized: Schema.optional(Schema.String),
    }),
  ),
  nonce: Schema.optional(Schema.Unknown),
  webhook_id: Schema.optional(Schema.String),
  message_reference: Schema.optional(
    Schema.Struct({
      type: Schema.Unknown,
      channel_id: Schema.String,
      message_id: Schema.optional(Schema.String),
      guild_id: Schema.optional(Schema.String),
    }),
  ),
  thread: Schema.optional(
    Schema.Struct({
      id: Schema.String,
      type: Schema.Unknown,
      last_message_id: Schema.optional(Schema.Unknown),
      flags: Schema.Number,
      last_pin_timestamp: Schema.optional(Schema.NullOr(Schema.String)),
      guild_id: Schema.String,
      name: Schema.String,
      parent_id: Schema.optional(Schema.Unknown),
      rate_limit_per_user: Schema.optional(Schema.Number),
      bitrate: Schema.optional(Schema.Number),
      user_limit: Schema.optional(Schema.Number),
      rtc_region: Schema.optional(Schema.NullOr(Schema.String)),
      video_quality_mode: Schema.optional(Schema.Unknown),
      permissions: Schema.optional(Schema.String),
      owner_id: Schema.String,
      thread_metadata: Schema.Struct({
        archived: Schema.Boolean,
        archive_timestamp: Schema.NullOr(Schema.String),
        auto_archive_duration: Schema.Unknown,
        locked: Schema.Boolean,
        create_timestamp: Schema.optional(Schema.String),
        invitable: Schema.optional(Schema.Boolean),
      }),
      message_count: Schema.Number,
      member_count: Schema.Number,
      total_message_sent: Schema.Number,
      applied_tags: Schema.optional(Schema.Array(Schema.String)),
      member: Schema.optional(
        Schema.Struct({
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
        }),
      ),
    }),
  ),
  mention_channels: Schema.optional(
    Schema.Array(
      Schema.Struct({
        id: Schema.String,
        name: Schema.String,
        type: Schema.Unknown,
        guild_id: Schema.String,
      }),
    ),
  ),
  role_subscription_data: Schema.optional(
    Schema.Struct({
      role_subscription_listing_id: Schema.String,
      tier_name: Schema.String,
      total_months_subscribed: Schema.Number,
      is_renewal: Schema.Boolean,
    }),
  ),
  purchase_notification: Schema.optional(
    Schema.Struct({
      type: Schema.Unknown,
      guild_product_purchase: Schema.optional(
        Schema.Struct({
          listing_id: Schema.String,
          product_name: Schema.String,
        }),
      ),
    }),
  ),
  position: Schema.optional(Schema.Number),
  resolved: Schema.optional(
    Schema.Struct({
      users: Schema.optional(
        Schema.NullOr(
          Schema.Record(
            Schema.String,
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
      ),
      members: Schema.optional(
        Schema.NullOr(
          Schema.Record(
            Schema.String,
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
            }),
          ),
        ),
      ),
      channels: Schema.optional(
        Schema.NullOr(Schema.Record(Schema.String, Schema.Unknown)),
      ),
      roles: Schema.optional(
        Schema.NullOr(
          Schema.Record(
            Schema.String,
            Schema.Struct({
              id: Schema.String,
              name: Schema.String,
              description: Schema.NullOr(Schema.String),
              permissions: Schema.String,
              position: Schema.Number,
              color: Schema.Number,
              colors: Schema.Struct({
                primary_color: Schema.Number,
                secondary_color: Schema.NullOr(Schema.Number),
                tertiary_color: Schema.NullOr(Schema.Number),
              }),
              hoist: Schema.Boolean,
              managed: Schema.Boolean,
              mentionable: Schema.Boolean,
              icon: Schema.NullOr(Schema.String),
              unicode_emoji: Schema.NullOr(Schema.String),
              tags: Schema.optional(
                Schema.Struct({
                  premium_subscriber: Schema.optional(Schema.Unknown),
                  bot_id: Schema.optional(Schema.String),
                  integration_id: Schema.optional(Schema.String),
                  subscription_listing_id: Schema.optional(Schema.String),
                  available_for_purchase: Schema.optional(Schema.Unknown),
                  guild_connections: Schema.optional(Schema.Unknown),
                }),
              ),
              flags: Schema.Number,
            }),
          ),
        ),
      ),
    }),
  ),
  poll: Schema.optional(
    Schema.Struct({
      question: Schema.Struct({
        text: Schema.optional(Schema.String),
        emoji: Schema.optional(
          Schema.Struct({
            id: Schema.Unknown,
            name: Schema.NullOr(Schema.String),
            animated: Schema.optional(Schema.Boolean),
          }),
        ),
      }),
      answers: Schema.Array(
        Schema.Struct({
          answer_id: Schema.Number,
          poll_media: Schema.Struct({
            text: Schema.optional(Schema.String),
            emoji: Schema.optional(
              Schema.Struct({
                id: Schema.Unknown,
                name: Schema.NullOr(Schema.String),
                animated: Schema.optional(Schema.Boolean),
              }),
            ),
          }),
        }),
      ),
      expiry: Schema.String,
      allow_multiselect: Schema.Boolean,
      layout_type: Schema.Unknown,
      results: Schema.Struct({
        answer_counts: Schema.Array(
          Schema.Struct({
            id: Schema.Number,
            count: Schema.Number,
            me_voted: Schema.Boolean,
          }),
        ),
        is_finalized: Schema.Boolean,
      }),
    }),
  ),
  shared_client_theme: Schema.optional(
    Schema.Struct({
      colors: Schema.Array(Schema.String),
      gradient_angle: Schema.Number,
      base_mix: Schema.Number,
      base_theme: Schema.Unknown,
    }),
  ),
  interaction_metadata: Schema.optional(Schema.Unknown),
  message_snapshots: Schema.optional(
    Schema.Array(
      Schema.Struct({
        message: Schema.Struct({
          type: Schema.Unknown,
          content: Schema.String,
          mentions: Schema.Array(
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
          mention_roles: Schema.Array(Schema.String),
          attachments: Schema.Array(
            Schema.Struct({
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
                      accent_color: Schema.optional(
                        Schema.NullOr(Schema.Number),
                      ),
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
                  max_participants: Schema.optional(
                    Schema.NullOr(Schema.Number),
                  ),
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
          ),
          embeds: Schema.Array(
            Schema.Struct({
              type: Schema.String,
              url: Schema.optional(Schema.String),
              title: Schema.optional(Schema.String),
              description: Schema.optional(Schema.String),
              color: Schema.optional(Schema.Number),
              timestamp: Schema.optional(Schema.String),
              fields: Schema.optional(
                Schema.Array(
                  Schema.Struct({
                    name: Schema.String,
                    value: Schema.String,
                    inline: Schema.Boolean,
                  }),
                ),
              ),
              author: Schema.optional(
                Schema.Struct({
                  name: Schema.String,
                  url: Schema.optional(Schema.String),
                  icon_url: Schema.optional(Schema.String),
                  proxy_icon_url: Schema.optional(Schema.String),
                }),
              ),
              provider: Schema.optional(
                Schema.Struct({
                  name: Schema.String,
                  url: Schema.optional(Schema.String),
                }),
              ),
              image: Schema.optional(
                Schema.Struct({
                  url: Schema.optional(Schema.String),
                  proxy_url: Schema.optional(Schema.String),
                  width: Schema.optional(Schema.Number),
                  height: Schema.optional(Schema.Number),
                  content_type: Schema.optional(Schema.String),
                  placeholder: Schema.optional(Schema.String),
                  placeholder_version: Schema.optional(Schema.Number),
                  description: Schema.optional(Schema.String),
                  flags: Schema.optional(Schema.Number),
                }),
              ),
              thumbnail: Schema.optional(
                Schema.Struct({
                  url: Schema.optional(Schema.String),
                  proxy_url: Schema.optional(Schema.String),
                  width: Schema.optional(Schema.Number),
                  height: Schema.optional(Schema.Number),
                  content_type: Schema.optional(Schema.String),
                  placeholder: Schema.optional(Schema.String),
                  placeholder_version: Schema.optional(Schema.Number),
                  description: Schema.optional(Schema.String),
                  flags: Schema.optional(Schema.Number),
                }),
              ),
              video: Schema.optional(
                Schema.Struct({
                  url: Schema.optional(Schema.String),
                  proxy_url: Schema.optional(Schema.String),
                  width: Schema.optional(Schema.Number),
                  height: Schema.optional(Schema.Number),
                  content_type: Schema.optional(Schema.String),
                  placeholder: Schema.optional(Schema.String),
                  placeholder_version: Schema.optional(Schema.Number),
                  description: Schema.optional(Schema.String),
                  flags: Schema.optional(Schema.Number),
                }),
              ),
              footer: Schema.optional(
                Schema.Struct({
                  text: Schema.String,
                  icon_url: Schema.optional(Schema.String),
                  proxy_icon_url: Schema.optional(Schema.String),
                }),
              ),
              flags: Schema.optional(Schema.NullOr(Schema.Number)),
              components: Schema.optional(
                Schema.Array(
                  Schema.Struct({
                    type: Schema.Unknown,
                    id: Schema.Number,
                    accent_color: Schema.NullOr(Schema.Number),
                    components: Schema.Array(Schema.Unknown),
                    spoiler: Schema.Boolean,
                  }),
                ),
              ),
            }),
          ),
          timestamp: Schema.String,
          edited_timestamp: Schema.NullOr(Schema.String),
          flags: Schema.Number,
          components: Schema.Array(Schema.Unknown),
          stickers: Schema.optional(Schema.Array(Schema.Unknown)),
          sticker_items: Schema.optional(
            Schema.Array(
              Schema.Struct({
                id: Schema.String,
                name: Schema.String,
                format_type: Schema.Unknown,
              }),
            ),
          ),
        }),
      }),
    ),
  ),
  reactions: Schema.optional(
    Schema.Array(
      Schema.Struct({
        emoji: Schema.Struct({
          id: Schema.Unknown,
          name: Schema.NullOr(Schema.String),
          animated: Schema.optional(Schema.Boolean),
        }),
        count: Schema.Number,
        count_details: Schema.Struct({
          burst: Schema.Number,
          normal: Schema.Number,
        }),
        burst_colors: Schema.Array(Schema.String),
        me_burst: Schema.Boolean,
        me: Schema.Boolean,
      }),
    ),
  ),
  referenced_message: Schema.optional(Schema.Unknown),
});
export type ExecuteWebhookOutput = typeof ExecuteWebhookOutput.Type;

// The operation
export const executeWebhook = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: ExecuteWebhookInput,
  outputSchema: ExecuteWebhookOutput,
  errors: [BadRequest, Forbidden, NotFound] as const,
}));
