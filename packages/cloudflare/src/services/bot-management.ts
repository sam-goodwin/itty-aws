/**
 * Cloudflare BOT-MANAGEMENT API
 *
 * Generated from Cloudflare TypeScript SDK.
 * DO NOT EDIT - regenerate with: bun scripts/generate.ts --service bot-management
 */

import * as Schema from "effect/Schema";
import type * as HttpClient from "effect/unstable/http/HttpClient";
import * as API from "../client/api.ts";
import * as T from "../traits.ts";
import type { Credentials } from "../credentials.ts";
import { type DefaultErrors } from "../errors.ts";

// =============================================================================
// Errors
// =============================================================================

export class Forbidden extends T.applyErrorMatchers(
  Schema.TaggedErrorClass<Forbidden>()("Forbidden", {
    code: Schema.Number,
    message: Schema.String,
  }),
  [{ status: 403 }],
) {}

// =============================================================================
// BotManagement
// =============================================================================

export interface GetBotManagementRequest {
  /** Identifier. */
  zoneId: string;
}

export const GetBotManagementRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      zoneId: Schema.String.pipe(T.HttpPath("zone_id")),
    }).pipe(T.Http({ method: "GET", path: "/zones/{zone_id}/bot_management" })),
  ) as unknown as Schema.Schema<GetBotManagementRequest>;

export type GetBotManagementResponse =
  | {
      aiBotsProtection?:
        | "block"
        | "disabled"
        | "only_on_ad_pages"
        | (string & {})
        | null;
      cfRobotsVariant?: "off" | "policy_only" | (string & {}) | null;
      contentBotsProtection?: "block" | "disabled" | (string & {}) | null;
      crawlerProtection?: "enabled" | "disabled" | (string & {}) | null;
      enableJs?: boolean | null;
      fightMode: boolean;
      isRobotsTxtManaged?: boolean | null;
      staleZoneConfiguration?: {
        optimizeWordpress?: boolean | null;
        sbfmDefinitelyAutomated?: string | null;
        sbfmLikelyAutomated?: string | null;
        sbfmStaticResourceProtection?: string | null;
        sbfmVerifiedBots?: string | null;
        suppressSessionScore?: boolean | null;
      } | null;
      usingLatestModel?: boolean | null;
    }
  | {
      aiBotsProtection?:
        | "block"
        | "disabled"
        | "only_on_ad_pages"
        | (string & {})
        | null;
      cfRobotsVariant?: "off" | "policy_only" | (string & {}) | null;
      contentBotsProtection?: "block" | "disabled" | (string & {}) | null;
      crawlerProtection?: "enabled" | "disabled" | (string & {}) | null;
      enableJs?: boolean | null;
      isRobotsTxtManaged?: boolean | null;
      optimizeWordpress?: boolean | null;
      sbfmDefinitelyAutomated:
        | "allow"
        | "block"
        | "managed_challenge"
        | (string & {});
      sbfmStaticResourceProtection?: boolean | null;
      sbfmVerifiedBots?: "allow" | "block" | (string & {}) | null;
      staleZoneConfiguration?: {
        fightMode?: boolean | null;
        sbfmLikelyAutomated?: string | null;
      } | null;
      usingLatestModel?: boolean | null;
    }
  | {
      aiBotsProtection?:
        | "block"
        | "disabled"
        | "only_on_ad_pages"
        | (string & {})
        | null;
      cfRobotsVariant?: "off" | "policy_only" | (string & {}) | null;
      contentBotsProtection?: "block" | "disabled" | (string & {}) | null;
      crawlerProtection?: "enabled" | "disabled" | (string & {}) | null;
      enableJs?: boolean | null;
      isRobotsTxtManaged?: boolean | null;
      optimizeWordpress?: boolean | null;
      sbfmDefinitelyAutomated:
        | "allow"
        | "block"
        | "managed_challenge"
        | (string & {});
      sbfmLikelyAutomated?:
        | "allow"
        | "block"
        | "managed_challenge"
        | (string & {})
        | null;
      sbfmStaticResourceProtection?: boolean | null;
      sbfmVerifiedBots?: "allow" | "block" | (string & {}) | null;
      staleZoneConfiguration?: { fightMode?: boolean | null } | null;
      usingLatestModel?: boolean | null;
    }
  | {
      aiBotsProtection?:
        | "block"
        | "disabled"
        | "only_on_ad_pages"
        | (string & {})
        | null;
      autoUpdateModel?: boolean | null;
      bmCookieEnabled?: boolean | null;
      cfRobotsVariant?: "off" | "policy_only" | (string & {}) | null;
      contentBotsProtection?: "block" | "disabled" | (string & {}) | null;
      crawlerProtection?: "enabled" | "disabled" | (string & {}) | null;
      enableJs?: boolean | null;
      isRobotsTxtManaged?: boolean | null;
      staleZoneConfiguration?: {
        fightMode?: boolean | null;
        optimizeWordpress?: boolean | null;
        sbfmDefinitelyAutomated?: string | null;
        sbfmLikelyAutomated?: string | null;
        sbfmStaticResourceProtection?: string | null;
        sbfmVerifiedBots?: string | null;
      } | null;
      suppressSessionScore?: boolean | null;
      usingLatestModel?: boolean | null;
    };

export const GetBotManagementResponse =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Union([
      Schema.Struct({
        aiBotsProtection: Schema.optional(
          Schema.Union([
            Schema.Union([
              Schema.Literals(["block", "disabled", "only_on_ad_pages"]),
              Schema.String,
            ]),
            Schema.Null,
          ]),
        ),
        cfRobotsVariant: Schema.optional(
          Schema.Union([
            Schema.Union([
              Schema.Literals(["off", "policy_only"]),
              Schema.String,
            ]),
            Schema.Null,
          ]),
        ),
        contentBotsProtection: Schema.optional(
          Schema.Union([
            Schema.Union([
              Schema.Literals(["block", "disabled"]),
              Schema.String,
            ]),
            Schema.Null,
          ]),
        ),
        crawlerProtection: Schema.optional(
          Schema.Union([
            Schema.Union([
              Schema.Literals(["enabled", "disabled"]),
              Schema.String,
            ]),
            Schema.Null,
          ]),
        ),
        enableJs: Schema.optional(Schema.Union([Schema.Boolean, Schema.Null])),
        fightMode: Schema.Boolean,
        isRobotsTxtManaged: Schema.optional(
          Schema.Union([Schema.Boolean, Schema.Null]),
        ),
        staleZoneConfiguration: Schema.optional(
          Schema.Union([
            Schema.Struct({
              optimizeWordpress: Schema.optional(
                Schema.Union([Schema.Boolean, Schema.Null]),
              ),
              sbfmDefinitelyAutomated: Schema.optional(
                Schema.Union([Schema.String, Schema.Null]),
              ),
              sbfmLikelyAutomated: Schema.optional(
                Schema.Union([Schema.String, Schema.Null]),
              ),
              sbfmStaticResourceProtection: Schema.optional(
                Schema.Union([Schema.String, Schema.Null]),
              ),
              sbfmVerifiedBots: Schema.optional(
                Schema.Union([Schema.String, Schema.Null]),
              ),
              suppressSessionScore: Schema.optional(
                Schema.Union([Schema.Boolean, Schema.Null]),
              ),
            }).pipe(
              Schema.encodeKeys({
                optimizeWordpress: "optimize_wordpress",
                sbfmDefinitelyAutomated: "sbfm_definitely_automated",
                sbfmLikelyAutomated: "sbfm_likely_automated",
                sbfmStaticResourceProtection: "sbfm_static_resource_protection",
                sbfmVerifiedBots: "sbfm_verified_bots",
                suppressSessionScore: "suppress_session_score",
              }),
            ),
            Schema.Null,
          ]),
        ),
        usingLatestModel: Schema.optional(
          Schema.Union([Schema.Boolean, Schema.Null]),
        ),
      }).pipe(
        Schema.encodeKeys({
          aiBotsProtection: "ai_bots_protection",
          cfRobotsVariant: "cf_robots_variant",
          contentBotsProtection: "content_bots_protection",
          crawlerProtection: "crawler_protection",
          enableJs: "enable_js",
          fightMode: "fight_mode",
          isRobotsTxtManaged: "is_robots_txt_managed",
          staleZoneConfiguration: "stale_zone_configuration",
          usingLatestModel: "using_latest_model",
        }),
      ),
      Schema.Struct({
        aiBotsProtection: Schema.optional(
          Schema.Union([
            Schema.Union([
              Schema.Literals(["block", "disabled", "only_on_ad_pages"]),
              Schema.String,
            ]),
            Schema.Null,
          ]),
        ),
        cfRobotsVariant: Schema.optional(
          Schema.Union([
            Schema.Union([
              Schema.Literals(["off", "policy_only"]),
              Schema.String,
            ]),
            Schema.Null,
          ]),
        ),
        contentBotsProtection: Schema.optional(
          Schema.Union([
            Schema.Union([
              Schema.Literals(["block", "disabled"]),
              Schema.String,
            ]),
            Schema.Null,
          ]),
        ),
        crawlerProtection: Schema.optional(
          Schema.Union([
            Schema.Union([
              Schema.Literals(["enabled", "disabled"]),
              Schema.String,
            ]),
            Schema.Null,
          ]),
        ),
        enableJs: Schema.optional(Schema.Union([Schema.Boolean, Schema.Null])),
        isRobotsTxtManaged: Schema.optional(
          Schema.Union([Schema.Boolean, Schema.Null]),
        ),
        optimizeWordpress: Schema.optional(
          Schema.Union([Schema.Boolean, Schema.Null]),
        ),
        sbfmDefinitelyAutomated: Schema.Union([
          Schema.Literals(["allow", "block", "managed_challenge"]),
          Schema.String,
        ]),
        sbfmStaticResourceProtection: Schema.optional(
          Schema.Union([Schema.Boolean, Schema.Null]),
        ),
        sbfmVerifiedBots: Schema.optional(
          Schema.Union([
            Schema.Union([Schema.Literals(["allow", "block"]), Schema.String]),
            Schema.Null,
          ]),
        ),
        staleZoneConfiguration: Schema.optional(
          Schema.Union([
            Schema.Struct({
              fightMode: Schema.optional(
                Schema.Union([Schema.Boolean, Schema.Null]),
              ),
              sbfmLikelyAutomated: Schema.optional(
                Schema.Union([Schema.String, Schema.Null]),
              ),
            }).pipe(
              Schema.encodeKeys({
                fightMode: "fight_mode",
                sbfmLikelyAutomated: "sbfm_likely_automated",
              }),
            ),
            Schema.Null,
          ]),
        ),
        usingLatestModel: Schema.optional(
          Schema.Union([Schema.Boolean, Schema.Null]),
        ),
      }).pipe(
        Schema.encodeKeys({
          aiBotsProtection: "ai_bots_protection",
          cfRobotsVariant: "cf_robots_variant",
          contentBotsProtection: "content_bots_protection",
          crawlerProtection: "crawler_protection",
          enableJs: "enable_js",
          isRobotsTxtManaged: "is_robots_txt_managed",
          optimizeWordpress: "optimize_wordpress",
          sbfmDefinitelyAutomated: "sbfm_definitely_automated",
          sbfmStaticResourceProtection: "sbfm_static_resource_protection",
          sbfmVerifiedBots: "sbfm_verified_bots",
          staleZoneConfiguration: "stale_zone_configuration",
          usingLatestModel: "using_latest_model",
        }),
      ),
      Schema.Struct({
        aiBotsProtection: Schema.optional(
          Schema.Union([
            Schema.Union([
              Schema.Literals(["block", "disabled", "only_on_ad_pages"]),
              Schema.String,
            ]),
            Schema.Null,
          ]),
        ),
        cfRobotsVariant: Schema.optional(
          Schema.Union([
            Schema.Union([
              Schema.Literals(["off", "policy_only"]),
              Schema.String,
            ]),
            Schema.Null,
          ]),
        ),
        contentBotsProtection: Schema.optional(
          Schema.Union([
            Schema.Union([
              Schema.Literals(["block", "disabled"]),
              Schema.String,
            ]),
            Schema.Null,
          ]),
        ),
        crawlerProtection: Schema.optional(
          Schema.Union([
            Schema.Union([
              Schema.Literals(["enabled", "disabled"]),
              Schema.String,
            ]),
            Schema.Null,
          ]),
        ),
        enableJs: Schema.optional(Schema.Union([Schema.Boolean, Schema.Null])),
        isRobotsTxtManaged: Schema.optional(
          Schema.Union([Schema.Boolean, Schema.Null]),
        ),
        optimizeWordpress: Schema.optional(
          Schema.Union([Schema.Boolean, Schema.Null]),
        ),
        sbfmDefinitelyAutomated: Schema.Union([
          Schema.Literals(["allow", "block", "managed_challenge"]),
          Schema.String,
        ]),
        sbfmLikelyAutomated: Schema.optional(
          Schema.Union([
            Schema.Union([
              Schema.Literals(["allow", "block", "managed_challenge"]),
              Schema.String,
            ]),
            Schema.Null,
          ]),
        ),
        sbfmStaticResourceProtection: Schema.optional(
          Schema.Union([Schema.Boolean, Schema.Null]),
        ),
        sbfmVerifiedBots: Schema.optional(
          Schema.Union([
            Schema.Union([Schema.Literals(["allow", "block"]), Schema.String]),
            Schema.Null,
          ]),
        ),
        staleZoneConfiguration: Schema.optional(
          Schema.Union([
            Schema.Struct({
              fightMode: Schema.optional(
                Schema.Union([Schema.Boolean, Schema.Null]),
              ),
            }).pipe(Schema.encodeKeys({ fightMode: "fight_mode" })),
            Schema.Null,
          ]),
        ),
        usingLatestModel: Schema.optional(
          Schema.Union([Schema.Boolean, Schema.Null]),
        ),
      }).pipe(
        Schema.encodeKeys({
          aiBotsProtection: "ai_bots_protection",
          cfRobotsVariant: "cf_robots_variant",
          contentBotsProtection: "content_bots_protection",
          crawlerProtection: "crawler_protection",
          enableJs: "enable_js",
          isRobotsTxtManaged: "is_robots_txt_managed",
          optimizeWordpress: "optimize_wordpress",
          sbfmDefinitelyAutomated: "sbfm_definitely_automated",
          sbfmLikelyAutomated: "sbfm_likely_automated",
          sbfmStaticResourceProtection: "sbfm_static_resource_protection",
          sbfmVerifiedBots: "sbfm_verified_bots",
          staleZoneConfiguration: "stale_zone_configuration",
          usingLatestModel: "using_latest_model",
        }),
      ),
      Schema.Struct({
        aiBotsProtection: Schema.optional(
          Schema.Union([
            Schema.Union([
              Schema.Literals(["block", "disabled", "only_on_ad_pages"]),
              Schema.String,
            ]),
            Schema.Null,
          ]),
        ),
        autoUpdateModel: Schema.optional(
          Schema.Union([Schema.Boolean, Schema.Null]),
        ),
        bmCookieEnabled: Schema.optional(
          Schema.Union([Schema.Boolean, Schema.Null]),
        ),
        cfRobotsVariant: Schema.optional(
          Schema.Union([
            Schema.Union([
              Schema.Literals(["off", "policy_only"]),
              Schema.String,
            ]),
            Schema.Null,
          ]),
        ),
        contentBotsProtection: Schema.optional(
          Schema.Union([
            Schema.Union([
              Schema.Literals(["block", "disabled"]),
              Schema.String,
            ]),
            Schema.Null,
          ]),
        ),
        crawlerProtection: Schema.optional(
          Schema.Union([
            Schema.Union([
              Schema.Literals(["enabled", "disabled"]),
              Schema.String,
            ]),
            Schema.Null,
          ]),
        ),
        enableJs: Schema.optional(Schema.Union([Schema.Boolean, Schema.Null])),
        isRobotsTxtManaged: Schema.optional(
          Schema.Union([Schema.Boolean, Schema.Null]),
        ),
        staleZoneConfiguration: Schema.optional(
          Schema.Union([
            Schema.Struct({
              fightMode: Schema.optional(
                Schema.Union([Schema.Boolean, Schema.Null]),
              ),
              optimizeWordpress: Schema.optional(
                Schema.Union([Schema.Boolean, Schema.Null]),
              ),
              sbfmDefinitelyAutomated: Schema.optional(
                Schema.Union([Schema.String, Schema.Null]),
              ),
              sbfmLikelyAutomated: Schema.optional(
                Schema.Union([Schema.String, Schema.Null]),
              ),
              sbfmStaticResourceProtection: Schema.optional(
                Schema.Union([Schema.String, Schema.Null]),
              ),
              sbfmVerifiedBots: Schema.optional(
                Schema.Union([Schema.String, Schema.Null]),
              ),
            }).pipe(
              Schema.encodeKeys({
                fightMode: "fight_mode",
                optimizeWordpress: "optimize_wordpress",
                sbfmDefinitelyAutomated: "sbfm_definitely_automated",
                sbfmLikelyAutomated: "sbfm_likely_automated",
                sbfmStaticResourceProtection: "sbfm_static_resource_protection",
                sbfmVerifiedBots: "sbfm_verified_bots",
              }),
            ),
            Schema.Null,
          ]),
        ),
        suppressSessionScore: Schema.optional(
          Schema.Union([Schema.Boolean, Schema.Null]),
        ),
        usingLatestModel: Schema.optional(
          Schema.Union([Schema.Boolean, Schema.Null]),
        ),
      }).pipe(
        Schema.encodeKeys({
          aiBotsProtection: "ai_bots_protection",
          autoUpdateModel: "auto_update_model",
          bmCookieEnabled: "bm_cookie_enabled",
          cfRobotsVariant: "cf_robots_variant",
          contentBotsProtection: "content_bots_protection",
          crawlerProtection: "crawler_protection",
          enableJs: "enable_js",
          isRobotsTxtManaged: "is_robots_txt_managed",
          staleZoneConfiguration: "stale_zone_configuration",
          suppressSessionScore: "suppress_session_score",
          usingLatestModel: "using_latest_model",
        }),
      ),
    ]).pipe(T.ResponsePath("result")),
  ) as unknown as Schema.Schema<GetBotManagementResponse>;

export type GetBotManagementError = DefaultErrors | Forbidden;

export const getBotManagement: API.OperationMethod<
  GetBotManagementRequest,
  GetBotManagementResponse,
  GetBotManagementError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetBotManagementRequest,
  output: GetBotManagementResponse,
  errors: [Forbidden],
}));

export interface PutBotManagementRequest {
  /** Path param: Identifier. */
  zoneId: string;
  /** Body param: Enable rule to block AI Scrapers and Crawlers. Please note the value `only_on_ad_pages` is currently not available for Enterprise customers. */
  aiBotsProtection?: "block" | "disabled" | "only_on_ad_pages" | (string & {});
  /** Body param: Specifies the Robots Access Control License variant to use. */
  cfRobotsVariant?: "off" | "policy_only" | (string & {});
  /** Body param: Enable rule to block content bots. When enabled, blocks automated traffic with low bot scores, excluding safe verified bot categories. Exceptions should be managed via skip rules. */
  contentBotsProtection?: "block" | "disabled" | (string & {});
  /** Body param: Enable rule to punish AI Scrapers and Crawlers via a link maze. */
  crawlerProtection?: "enabled" | "disabled" | (string & {});
  /** Body param: Use lightweight, invisible JavaScript detections to improve Bot Management. [Learn more about JavaScript Detections](https://developers.cloudflare.com/bots/reference/javascript-detections/ */
  enableJs?: boolean;
  /** Body param: Whether to enable Bot Fight Mode. */
  fightMode?: boolean;
  /** Body param: Enable cloudflare managed robots.txt. If an existing robots.txt is detected, then managed robots.txt will be prepended to the existing robots.txt. */
  isRobotsTxtManaged?: boolean;
  /** Body param: Whether to optimize Super Bot Fight Mode protections for Wordpress. */
  optimizeWordpress?: boolean;
  /** Body param: Super Bot Fight Mode (SBFM) action to take on definitely automated requests. */
  sbfmDefinitelyAutomated?:
    | "allow"
    | "block"
    | "managed_challenge"
    | (string & {});
  /** Body param: Super Bot Fight Mode (SBFM) to enable static resource protection. Enable if static resources on your application need bot protection. Note: Static resource protection can also result in le */
  sbfmStaticResourceProtection?: boolean;
  /** Body param: Super Bot Fight Mode (SBFM) action to take on verified bots requests. */
  sbfmVerifiedBots?: "allow" | "block" | (string & {});
  /** Body param: Super Bot Fight Mode (SBFM) action to take on likely automated requests. */
  sbfmLikelyAutomated?: "allow" | "block" | "managed_challenge" | (string & {});
  /** Body param: Automatically update to the newest bot detection models created by Cloudflare as they are released. [Learn more.](https://developers.cloudflare.com/bots/reference/machine-learning-models#m */
  autoUpdateModel?: boolean;
  /** Body param: Indicates that the bot management cookie can be placed on end user devices accessing the site. Defaults to true */
  bmCookieEnabled?: boolean;
  /** Body param: Whether to disable tracking the highest bot score for a session in the Bot Management cookie. */
  suppressSessionScore?: boolean;
}

export const PutBotManagementRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      zoneId: Schema.String.pipe(T.HttpPath("zone_id")),
      aiBotsProtection: Schema.optional(
        Schema.Union([
          Schema.Literals(["block", "disabled", "only_on_ad_pages"]),
          Schema.String,
        ]),
      ),
      cfRobotsVariant: Schema.optional(
        Schema.Union([Schema.Literals(["off", "policy_only"]), Schema.String]),
      ),
      contentBotsProtection: Schema.optional(
        Schema.Union([Schema.Literals(["block", "disabled"]), Schema.String]),
      ),
      crawlerProtection: Schema.optional(
        Schema.Union([Schema.Literals(["enabled", "disabled"]), Schema.String]),
      ),
      enableJs: Schema.optional(Schema.Boolean),
      fightMode: Schema.optional(Schema.Boolean),
      isRobotsTxtManaged: Schema.optional(Schema.Boolean),
      optimizeWordpress: Schema.optional(Schema.Boolean),
      sbfmDefinitelyAutomated: Schema.optional(
        Schema.Union([
          Schema.Literals(["allow", "block", "managed_challenge"]),
          Schema.String,
        ]),
      ),
      sbfmStaticResourceProtection: Schema.optional(Schema.Boolean),
      sbfmVerifiedBots: Schema.optional(
        Schema.Union([Schema.Literals(["allow", "block"]), Schema.String]),
      ),
      sbfmLikelyAutomated: Schema.optional(
        Schema.Union([
          Schema.Literals(["allow", "block", "managed_challenge"]),
          Schema.String,
        ]),
      ),
      autoUpdateModel: Schema.optional(Schema.Boolean),
      bmCookieEnabled: Schema.optional(Schema.Boolean),
      suppressSessionScore: Schema.optional(Schema.Boolean),
    }).pipe(
      Schema.encodeKeys({
        aiBotsProtection: "ai_bots_protection",
        cfRobotsVariant: "cf_robots_variant",
        contentBotsProtection: "content_bots_protection",
        crawlerProtection: "crawler_protection",
        enableJs: "enable_js",
        fightMode: "fight_mode",
        isRobotsTxtManaged: "is_robots_txt_managed",
        optimizeWordpress: "optimize_wordpress",
        sbfmDefinitelyAutomated: "sbfm_definitely_automated",
        sbfmStaticResourceProtection: "sbfm_static_resource_protection",
        sbfmVerifiedBots: "sbfm_verified_bots",
        sbfmLikelyAutomated: "sbfm_likely_automated",
        autoUpdateModel: "auto_update_model",
        bmCookieEnabled: "bm_cookie_enabled",
        suppressSessionScore: "suppress_session_score",
      }),
      T.Http({ method: "PUT", path: "/zones/{zone_id}/bot_management" }),
    ),
  ) as unknown as Schema.Schema<PutBotManagementRequest>;

export type PutBotManagementResponse =
  | {
      aiBotsProtection?:
        | "block"
        | "disabled"
        | "only_on_ad_pages"
        | (string & {})
        | null;
      cfRobotsVariant?: "off" | "policy_only" | (string & {}) | null;
      contentBotsProtection?: "block" | "disabled" | (string & {}) | null;
      crawlerProtection?: "enabled" | "disabled" | (string & {}) | null;
      enableJs?: boolean | null;
      fightMode: boolean;
      isRobotsTxtManaged?: boolean | null;
      staleZoneConfiguration?: {
        optimizeWordpress?: boolean | null;
        sbfmDefinitelyAutomated?: string | null;
        sbfmLikelyAutomated?: string | null;
        sbfmStaticResourceProtection?: string | null;
        sbfmVerifiedBots?: string | null;
        suppressSessionScore?: boolean | null;
      } | null;
      usingLatestModel?: boolean | null;
    }
  | {
      aiBotsProtection?:
        | "block"
        | "disabled"
        | "only_on_ad_pages"
        | (string & {})
        | null;
      cfRobotsVariant?: "off" | "policy_only" | (string & {}) | null;
      contentBotsProtection?: "block" | "disabled" | (string & {}) | null;
      crawlerProtection?: "enabled" | "disabled" | (string & {}) | null;
      enableJs?: boolean | null;
      isRobotsTxtManaged?: boolean | null;
      optimizeWordpress?: boolean | null;
      sbfmDefinitelyAutomated:
        | "allow"
        | "block"
        | "managed_challenge"
        | (string & {});
      sbfmStaticResourceProtection?: boolean | null;
      sbfmVerifiedBots?: "allow" | "block" | (string & {}) | null;
      staleZoneConfiguration?: {
        fightMode?: boolean | null;
        sbfmLikelyAutomated?: string | null;
      } | null;
      usingLatestModel?: boolean | null;
    }
  | {
      aiBotsProtection?:
        | "block"
        | "disabled"
        | "only_on_ad_pages"
        | (string & {})
        | null;
      cfRobotsVariant?: "off" | "policy_only" | (string & {}) | null;
      contentBotsProtection?: "block" | "disabled" | (string & {}) | null;
      crawlerProtection?: "enabled" | "disabled" | (string & {}) | null;
      enableJs?: boolean | null;
      isRobotsTxtManaged?: boolean | null;
      optimizeWordpress?: boolean | null;
      sbfmDefinitelyAutomated:
        | "allow"
        | "block"
        | "managed_challenge"
        | (string & {});
      sbfmLikelyAutomated?:
        | "allow"
        | "block"
        | "managed_challenge"
        | (string & {})
        | null;
      sbfmStaticResourceProtection?: boolean | null;
      sbfmVerifiedBots?: "allow" | "block" | (string & {}) | null;
      staleZoneConfiguration?: { fightMode?: boolean | null } | null;
      usingLatestModel?: boolean | null;
    }
  | {
      aiBotsProtection?:
        | "block"
        | "disabled"
        | "only_on_ad_pages"
        | (string & {})
        | null;
      autoUpdateModel?: boolean | null;
      bmCookieEnabled?: boolean | null;
      cfRobotsVariant?: "off" | "policy_only" | (string & {}) | null;
      contentBotsProtection?: "block" | "disabled" | (string & {}) | null;
      crawlerProtection?: "enabled" | "disabled" | (string & {}) | null;
      enableJs?: boolean | null;
      isRobotsTxtManaged?: boolean | null;
      staleZoneConfiguration?: {
        fightMode?: boolean | null;
        optimizeWordpress?: boolean | null;
        sbfmDefinitelyAutomated?: string | null;
        sbfmLikelyAutomated?: string | null;
        sbfmStaticResourceProtection?: string | null;
        sbfmVerifiedBots?: string | null;
      } | null;
      suppressSessionScore?: boolean | null;
      usingLatestModel?: boolean | null;
    };

export const PutBotManagementResponse =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Union([
      Schema.Struct({
        aiBotsProtection: Schema.optional(
          Schema.Union([
            Schema.Union([
              Schema.Literals(["block", "disabled", "only_on_ad_pages"]),
              Schema.String,
            ]),
            Schema.Null,
          ]),
        ),
        cfRobotsVariant: Schema.optional(
          Schema.Union([
            Schema.Union([
              Schema.Literals(["off", "policy_only"]),
              Schema.String,
            ]),
            Schema.Null,
          ]),
        ),
        contentBotsProtection: Schema.optional(
          Schema.Union([
            Schema.Union([
              Schema.Literals(["block", "disabled"]),
              Schema.String,
            ]),
            Schema.Null,
          ]),
        ),
        crawlerProtection: Schema.optional(
          Schema.Union([
            Schema.Union([
              Schema.Literals(["enabled", "disabled"]),
              Schema.String,
            ]),
            Schema.Null,
          ]),
        ),
        enableJs: Schema.optional(Schema.Union([Schema.Boolean, Schema.Null])),
        fightMode: Schema.Boolean,
        isRobotsTxtManaged: Schema.optional(
          Schema.Union([Schema.Boolean, Schema.Null]),
        ),
        staleZoneConfiguration: Schema.optional(
          Schema.Union([
            Schema.Struct({
              optimizeWordpress: Schema.optional(
                Schema.Union([Schema.Boolean, Schema.Null]),
              ),
              sbfmDefinitelyAutomated: Schema.optional(
                Schema.Union([Schema.String, Schema.Null]),
              ),
              sbfmLikelyAutomated: Schema.optional(
                Schema.Union([Schema.String, Schema.Null]),
              ),
              sbfmStaticResourceProtection: Schema.optional(
                Schema.Union([Schema.String, Schema.Null]),
              ),
              sbfmVerifiedBots: Schema.optional(
                Schema.Union([Schema.String, Schema.Null]),
              ),
              suppressSessionScore: Schema.optional(
                Schema.Union([Schema.Boolean, Schema.Null]),
              ),
            }).pipe(
              Schema.encodeKeys({
                optimizeWordpress: "optimize_wordpress",
                sbfmDefinitelyAutomated: "sbfm_definitely_automated",
                sbfmLikelyAutomated: "sbfm_likely_automated",
                sbfmStaticResourceProtection: "sbfm_static_resource_protection",
                sbfmVerifiedBots: "sbfm_verified_bots",
                suppressSessionScore: "suppress_session_score",
              }),
            ),
            Schema.Null,
          ]),
        ),
        usingLatestModel: Schema.optional(
          Schema.Union([Schema.Boolean, Schema.Null]),
        ),
      }).pipe(
        Schema.encodeKeys({
          aiBotsProtection: "ai_bots_protection",
          cfRobotsVariant: "cf_robots_variant",
          contentBotsProtection: "content_bots_protection",
          crawlerProtection: "crawler_protection",
          enableJs: "enable_js",
          fightMode: "fight_mode",
          isRobotsTxtManaged: "is_robots_txt_managed",
          staleZoneConfiguration: "stale_zone_configuration",
          usingLatestModel: "using_latest_model",
        }),
      ),
      Schema.Struct({
        aiBotsProtection: Schema.optional(
          Schema.Union([
            Schema.Union([
              Schema.Literals(["block", "disabled", "only_on_ad_pages"]),
              Schema.String,
            ]),
            Schema.Null,
          ]),
        ),
        cfRobotsVariant: Schema.optional(
          Schema.Union([
            Schema.Union([
              Schema.Literals(["off", "policy_only"]),
              Schema.String,
            ]),
            Schema.Null,
          ]),
        ),
        contentBotsProtection: Schema.optional(
          Schema.Union([
            Schema.Union([
              Schema.Literals(["block", "disabled"]),
              Schema.String,
            ]),
            Schema.Null,
          ]),
        ),
        crawlerProtection: Schema.optional(
          Schema.Union([
            Schema.Union([
              Schema.Literals(["enabled", "disabled"]),
              Schema.String,
            ]),
            Schema.Null,
          ]),
        ),
        enableJs: Schema.optional(Schema.Union([Schema.Boolean, Schema.Null])),
        isRobotsTxtManaged: Schema.optional(
          Schema.Union([Schema.Boolean, Schema.Null]),
        ),
        optimizeWordpress: Schema.optional(
          Schema.Union([Schema.Boolean, Schema.Null]),
        ),
        sbfmDefinitelyAutomated: Schema.Union([
          Schema.Literals(["allow", "block", "managed_challenge"]),
          Schema.String,
        ]),
        sbfmStaticResourceProtection: Schema.optional(
          Schema.Union([Schema.Boolean, Schema.Null]),
        ),
        sbfmVerifiedBots: Schema.optional(
          Schema.Union([
            Schema.Union([Schema.Literals(["allow", "block"]), Schema.String]),
            Schema.Null,
          ]),
        ),
        staleZoneConfiguration: Schema.optional(
          Schema.Union([
            Schema.Struct({
              fightMode: Schema.optional(
                Schema.Union([Schema.Boolean, Schema.Null]),
              ),
              sbfmLikelyAutomated: Schema.optional(
                Schema.Union([Schema.String, Schema.Null]),
              ),
            }).pipe(
              Schema.encodeKeys({
                fightMode: "fight_mode",
                sbfmLikelyAutomated: "sbfm_likely_automated",
              }),
            ),
            Schema.Null,
          ]),
        ),
        usingLatestModel: Schema.optional(
          Schema.Union([Schema.Boolean, Schema.Null]),
        ),
      }).pipe(
        Schema.encodeKeys({
          aiBotsProtection: "ai_bots_protection",
          cfRobotsVariant: "cf_robots_variant",
          contentBotsProtection: "content_bots_protection",
          crawlerProtection: "crawler_protection",
          enableJs: "enable_js",
          isRobotsTxtManaged: "is_robots_txt_managed",
          optimizeWordpress: "optimize_wordpress",
          sbfmDefinitelyAutomated: "sbfm_definitely_automated",
          sbfmStaticResourceProtection: "sbfm_static_resource_protection",
          sbfmVerifiedBots: "sbfm_verified_bots",
          staleZoneConfiguration: "stale_zone_configuration",
          usingLatestModel: "using_latest_model",
        }),
      ),
      Schema.Struct({
        aiBotsProtection: Schema.optional(
          Schema.Union([
            Schema.Union([
              Schema.Literals(["block", "disabled", "only_on_ad_pages"]),
              Schema.String,
            ]),
            Schema.Null,
          ]),
        ),
        cfRobotsVariant: Schema.optional(
          Schema.Union([
            Schema.Union([
              Schema.Literals(["off", "policy_only"]),
              Schema.String,
            ]),
            Schema.Null,
          ]),
        ),
        contentBotsProtection: Schema.optional(
          Schema.Union([
            Schema.Union([
              Schema.Literals(["block", "disabled"]),
              Schema.String,
            ]),
            Schema.Null,
          ]),
        ),
        crawlerProtection: Schema.optional(
          Schema.Union([
            Schema.Union([
              Schema.Literals(["enabled", "disabled"]),
              Schema.String,
            ]),
            Schema.Null,
          ]),
        ),
        enableJs: Schema.optional(Schema.Union([Schema.Boolean, Schema.Null])),
        isRobotsTxtManaged: Schema.optional(
          Schema.Union([Schema.Boolean, Schema.Null]),
        ),
        optimizeWordpress: Schema.optional(
          Schema.Union([Schema.Boolean, Schema.Null]),
        ),
        sbfmDefinitelyAutomated: Schema.Union([
          Schema.Literals(["allow", "block", "managed_challenge"]),
          Schema.String,
        ]),
        sbfmLikelyAutomated: Schema.optional(
          Schema.Union([
            Schema.Union([
              Schema.Literals(["allow", "block", "managed_challenge"]),
              Schema.String,
            ]),
            Schema.Null,
          ]),
        ),
        sbfmStaticResourceProtection: Schema.optional(
          Schema.Union([Schema.Boolean, Schema.Null]),
        ),
        sbfmVerifiedBots: Schema.optional(
          Schema.Union([
            Schema.Union([Schema.Literals(["allow", "block"]), Schema.String]),
            Schema.Null,
          ]),
        ),
        staleZoneConfiguration: Schema.optional(
          Schema.Union([
            Schema.Struct({
              fightMode: Schema.optional(
                Schema.Union([Schema.Boolean, Schema.Null]),
              ),
            }).pipe(Schema.encodeKeys({ fightMode: "fight_mode" })),
            Schema.Null,
          ]),
        ),
        usingLatestModel: Schema.optional(
          Schema.Union([Schema.Boolean, Schema.Null]),
        ),
      }).pipe(
        Schema.encodeKeys({
          aiBotsProtection: "ai_bots_protection",
          cfRobotsVariant: "cf_robots_variant",
          contentBotsProtection: "content_bots_protection",
          crawlerProtection: "crawler_protection",
          enableJs: "enable_js",
          isRobotsTxtManaged: "is_robots_txt_managed",
          optimizeWordpress: "optimize_wordpress",
          sbfmDefinitelyAutomated: "sbfm_definitely_automated",
          sbfmLikelyAutomated: "sbfm_likely_automated",
          sbfmStaticResourceProtection: "sbfm_static_resource_protection",
          sbfmVerifiedBots: "sbfm_verified_bots",
          staleZoneConfiguration: "stale_zone_configuration",
          usingLatestModel: "using_latest_model",
        }),
      ),
      Schema.Struct({
        aiBotsProtection: Schema.optional(
          Schema.Union([
            Schema.Union([
              Schema.Literals(["block", "disabled", "only_on_ad_pages"]),
              Schema.String,
            ]),
            Schema.Null,
          ]),
        ),
        autoUpdateModel: Schema.optional(
          Schema.Union([Schema.Boolean, Schema.Null]),
        ),
        bmCookieEnabled: Schema.optional(
          Schema.Union([Schema.Boolean, Schema.Null]),
        ),
        cfRobotsVariant: Schema.optional(
          Schema.Union([
            Schema.Union([
              Schema.Literals(["off", "policy_only"]),
              Schema.String,
            ]),
            Schema.Null,
          ]),
        ),
        contentBotsProtection: Schema.optional(
          Schema.Union([
            Schema.Union([
              Schema.Literals(["block", "disabled"]),
              Schema.String,
            ]),
            Schema.Null,
          ]),
        ),
        crawlerProtection: Schema.optional(
          Schema.Union([
            Schema.Union([
              Schema.Literals(["enabled", "disabled"]),
              Schema.String,
            ]),
            Schema.Null,
          ]),
        ),
        enableJs: Schema.optional(Schema.Union([Schema.Boolean, Schema.Null])),
        isRobotsTxtManaged: Schema.optional(
          Schema.Union([Schema.Boolean, Schema.Null]),
        ),
        staleZoneConfiguration: Schema.optional(
          Schema.Union([
            Schema.Struct({
              fightMode: Schema.optional(
                Schema.Union([Schema.Boolean, Schema.Null]),
              ),
              optimizeWordpress: Schema.optional(
                Schema.Union([Schema.Boolean, Schema.Null]),
              ),
              sbfmDefinitelyAutomated: Schema.optional(
                Schema.Union([Schema.String, Schema.Null]),
              ),
              sbfmLikelyAutomated: Schema.optional(
                Schema.Union([Schema.String, Schema.Null]),
              ),
              sbfmStaticResourceProtection: Schema.optional(
                Schema.Union([Schema.String, Schema.Null]),
              ),
              sbfmVerifiedBots: Schema.optional(
                Schema.Union([Schema.String, Schema.Null]),
              ),
            }).pipe(
              Schema.encodeKeys({
                fightMode: "fight_mode",
                optimizeWordpress: "optimize_wordpress",
                sbfmDefinitelyAutomated: "sbfm_definitely_automated",
                sbfmLikelyAutomated: "sbfm_likely_automated",
                sbfmStaticResourceProtection: "sbfm_static_resource_protection",
                sbfmVerifiedBots: "sbfm_verified_bots",
              }),
            ),
            Schema.Null,
          ]),
        ),
        suppressSessionScore: Schema.optional(
          Schema.Union([Schema.Boolean, Schema.Null]),
        ),
        usingLatestModel: Schema.optional(
          Schema.Union([Schema.Boolean, Schema.Null]),
        ),
      }).pipe(
        Schema.encodeKeys({
          aiBotsProtection: "ai_bots_protection",
          autoUpdateModel: "auto_update_model",
          bmCookieEnabled: "bm_cookie_enabled",
          cfRobotsVariant: "cf_robots_variant",
          contentBotsProtection: "content_bots_protection",
          crawlerProtection: "crawler_protection",
          enableJs: "enable_js",
          isRobotsTxtManaged: "is_robots_txt_managed",
          staleZoneConfiguration: "stale_zone_configuration",
          suppressSessionScore: "suppress_session_score",
          usingLatestModel: "using_latest_model",
        }),
      ),
    ]).pipe(T.ResponsePath("result")),
  ) as unknown as Schema.Schema<PutBotManagementResponse>;

export type PutBotManagementError = DefaultErrors | Forbidden;

export const putBotManagement: API.OperationMethod<
  PutBotManagementRequest,
  PutBotManagementResponse,
  PutBotManagementError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: PutBotManagementRequest,
  output: PutBotManagementResponse,
  errors: [Forbidden],
}));
