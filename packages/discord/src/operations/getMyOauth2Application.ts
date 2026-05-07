import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { BadRequest, Forbidden, NotFound } from "../errors.ts";

// Input Schema
export const GetMyOauth2ApplicationInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).pipe(
    T.Http({ method: "GET", path: "/oauth2/applications/@me" }),
  );
export type GetMyOauth2ApplicationInput =
  typeof GetMyOauth2ApplicationInput.Type;

// Output Schema
export const GetMyOauth2ApplicationOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
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
    redirect_uris: Schema.Array(Schema.String),
    interactions_endpoint_url: Schema.NullOr(Schema.String),
    role_connections_verification_url: Schema.NullOr(Schema.String),
    owner: Schema.Struct({
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
    approximate_guild_count: Schema.Number,
    approximate_user_install_count: Schema.Number,
    approximate_user_authorization_count: Schema.Number,
    event_webhooks_url: Schema.optional(Schema.NullOr(Schema.String)),
    event_webhooks_status: Schema.optional(Schema.Unknown),
    event_webhooks_types: Schema.optional(Schema.Array(Schema.Unknown)),
    explicit_content_filter: Schema.Unknown,
    team: Schema.Unknown,
  });
export type GetMyOauth2ApplicationOutput =
  typeof GetMyOauth2ApplicationOutput.Type;

// The operation
export const getMyOauth2Application = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: GetMyOauth2ApplicationInput,
    outputSchema: GetMyOauth2ApplicationOutput,
    errors: [BadRequest, Forbidden, NotFound] as const,
  }),
);
