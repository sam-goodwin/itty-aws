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
// BotManagement
// =============================================================================

export interface GetBotManagementRequest {
  /** Identifier. */
  zoneId: string;
}

export const GetBotManagementRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    zoneId: Schema.String.pipe(T.HttpPath("zone_id")),
  }).pipe(
    T.Http({ method: "GET", path: "/zones/{zone_id}/bot_management" }),
  ) as unknown as Schema.Schema<GetBotManagementRequest>;

export type GetBotManagementResponse =
  | {
      aiBotsProtection?: "block" | "disabled" | "only_on_ad_pages" | null;
      cfRobotsVariant?: "off" | "policy_only" | null;
      crawlerProtection?: "enabled" | "disabled" | null;
      enableJs?: boolean | null;
      fightMode?: boolean | null;
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
      aiBotsProtection?: "block" | "disabled" | "only_on_ad_pages" | null;
      cfRobotsVariant?: "off" | "policy_only" | null;
      crawlerProtection?: "enabled" | "disabled" | null;
      enableJs?: boolean | null;
      isRobotsTxtManaged?: boolean | null;
      optimizeWordpress?: boolean | null;
      sbfmDefinitelyAutomated?: "allow" | "block" | "managed_challenge" | null;
      sbfmStaticResourceProtection?: boolean | null;
      sbfmVerifiedBots?: "allow" | "block" | null;
      staleZoneConfiguration?: {
        fightMode?: boolean | null;
        sbfmLikelyAutomated?: string | null;
      } | null;
      usingLatestModel?: boolean | null;
    }
  | {
      aiBotsProtection?: "block" | "disabled" | "only_on_ad_pages" | null;
      cfRobotsVariant?: "off" | "policy_only" | null;
      crawlerProtection?: "enabled" | "disabled" | null;
      enableJs?: boolean | null;
      isRobotsTxtManaged?: boolean | null;
      optimizeWordpress?: boolean | null;
      sbfmDefinitelyAutomated?: "allow" | "block" | "managed_challenge" | null;
      sbfmLikelyAutomated?: "allow" | "block" | "managed_challenge" | null;
      sbfmStaticResourceProtection?: boolean | null;
      sbfmVerifiedBots?: "allow" | "block" | null;
      staleZoneConfiguration?: { fightMode?: boolean | null } | null;
      usingLatestModel?: boolean | null;
    }
  | {
      aiBotsProtection?: "block" | "disabled" | "only_on_ad_pages" | null;
      autoUpdateModel?: boolean | null;
      bmCookieEnabled?: boolean | null;
      cfRobotsVariant?: "off" | "policy_only" | null;
      crawlerProtection?: "enabled" | "disabled" | null;
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
  /*@__PURE__*/ /*#__PURE__*/ Schema.Union([
    Schema.Struct({
      aiBotsProtection: Schema.optional(
        Schema.Union([
          Schema.Literals(["block", "disabled", "only_on_ad_pages"]),
          Schema.Null,
        ]),
      ),
      cfRobotsVariant: Schema.optional(
        Schema.Union([Schema.Literals(["off", "policy_only"]), Schema.Null]),
      ),
      crawlerProtection: Schema.optional(
        Schema.Union([Schema.Literals(["enabled", "disabled"]), Schema.Null]),
      ),
      enableJs: Schema.optional(Schema.Union([Schema.Boolean, Schema.Null])),
      fightMode: Schema.optional(Schema.Union([Schema.Boolean, Schema.Null])),
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
          Schema.Literals(["block", "disabled", "only_on_ad_pages"]),
          Schema.Null,
        ]),
      ),
      cfRobotsVariant: Schema.optional(
        Schema.Union([Schema.Literals(["off", "policy_only"]), Schema.Null]),
      ),
      crawlerProtection: Schema.optional(
        Schema.Union([Schema.Literals(["enabled", "disabled"]), Schema.Null]),
      ),
      enableJs: Schema.optional(Schema.Union([Schema.Boolean, Schema.Null])),
      isRobotsTxtManaged: Schema.optional(
        Schema.Union([Schema.Boolean, Schema.Null]),
      ),
      optimizeWordpress: Schema.optional(
        Schema.Union([Schema.Boolean, Schema.Null]),
      ),
      sbfmDefinitelyAutomated: Schema.optional(
        Schema.Union([
          Schema.Literals(["allow", "block", "managed_challenge"]),
          Schema.Null,
        ]),
      ),
      sbfmStaticResourceProtection: Schema.optional(
        Schema.Union([Schema.Boolean, Schema.Null]),
      ),
      sbfmVerifiedBots: Schema.optional(
        Schema.Union([Schema.Literals(["allow", "block"]), Schema.Null]),
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
          Schema.Literals(["block", "disabled", "only_on_ad_pages"]),
          Schema.Null,
        ]),
      ),
      cfRobotsVariant: Schema.optional(
        Schema.Union([Schema.Literals(["off", "policy_only"]), Schema.Null]),
      ),
      crawlerProtection: Schema.optional(
        Schema.Union([Schema.Literals(["enabled", "disabled"]), Schema.Null]),
      ),
      enableJs: Schema.optional(Schema.Union([Schema.Boolean, Schema.Null])),
      isRobotsTxtManaged: Schema.optional(
        Schema.Union([Schema.Boolean, Schema.Null]),
      ),
      optimizeWordpress: Schema.optional(
        Schema.Union([Schema.Boolean, Schema.Null]),
      ),
      sbfmDefinitelyAutomated: Schema.optional(
        Schema.Union([
          Schema.Literals(["allow", "block", "managed_challenge"]),
          Schema.Null,
        ]),
      ),
      sbfmLikelyAutomated: Schema.optional(
        Schema.Union([
          Schema.Literals(["allow", "block", "managed_challenge"]),
          Schema.Null,
        ]),
      ),
      sbfmStaticResourceProtection: Schema.optional(
        Schema.Union([Schema.Boolean, Schema.Null]),
      ),
      sbfmVerifiedBots: Schema.optional(
        Schema.Union([Schema.Literals(["allow", "block"]), Schema.Null]),
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
          Schema.Literals(["block", "disabled", "only_on_ad_pages"]),
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
        Schema.Union([Schema.Literals(["off", "policy_only"]), Schema.Null]),
      ),
      crawlerProtection: Schema.optional(
        Schema.Union([Schema.Literals(["enabled", "disabled"]), Schema.Null]),
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
        crawlerProtection: "crawler_protection",
        enableJs: "enable_js",
        isRobotsTxtManaged: "is_robots_txt_managed",
        staleZoneConfiguration: "stale_zone_configuration",
        suppressSessionScore: "suppress_session_score",
        usingLatestModel: "using_latest_model",
      }),
    ),
  ]).pipe(
    T.ResponsePath("result"),
  ) as unknown as Schema.Schema<GetBotManagementResponse>;

export type GetBotManagementError = DefaultErrors;

export const getBotManagement: API.OperationMethod<
  GetBotManagementRequest,
  GetBotManagementResponse,
  GetBotManagementError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetBotManagementRequest,
  output: GetBotManagementResponse,
  errors: [],
}));

export interface PutBotManagementRequest {
  /** Path param: Identifier. */
  zoneId: string;
  /** Body param: Enable rule to block AI Scrapers and Crawlers. Please note the value `only_on_ad_pages` is currently not available for Enterprise customers. */
  aiBotsProtection?: "block" | "disabled" | "only_on_ad_pages";
  /** Body param: Specifies the Robots Access Control License variant to use. */
  cfRobotsVariant?: "off" | "policy_only";
  /** Body param: Enable rule to punish AI Scrapers and Crawlers via a link maze. */
  crawlerProtection?: "enabled" | "disabled";
  /** Body param: Use lightweight, invisible JavaScript detections to improve Bot Management. [Learn more about JavaScript Detections](https://developers.cloudflare.com/bots/reference/javascript-detections/ */
  enableJs?: boolean;
  /** Body param: Whether to enable Bot Fight Mode. */
  fightMode?: boolean;
  /** Body param: Enable cloudflare managed robots.txt. If an existing robots.txt is detected, then managed robots.txt will be prepended to the existing robots.txt. */
  isRobotsTxtManaged?: boolean;
}

export const PutBotManagementRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    zoneId: Schema.String.pipe(T.HttpPath("zone_id")),
    aiBotsProtection: Schema.optional(
      Schema.Literals(["block", "disabled", "only_on_ad_pages"]),
    ),
    cfRobotsVariant: Schema.optional(Schema.Literals(["off", "policy_only"])),
    crawlerProtection: Schema.optional(
      Schema.Literals(["enabled", "disabled"]),
    ),
    enableJs: Schema.optional(Schema.Boolean),
    fightMode: Schema.optional(Schema.Boolean),
    isRobotsTxtManaged: Schema.optional(Schema.Boolean),
  }).pipe(
    Schema.encodeKeys({
      aiBotsProtection: "ai_bots_protection",
      cfRobotsVariant: "cf_robots_variant",
      crawlerProtection: "crawler_protection",
      enableJs: "enable_js",
      fightMode: "fight_mode",
      isRobotsTxtManaged: "is_robots_txt_managed",
    }),
    T.Http({ method: "PUT", path: "/zones/{zone_id}/bot_management" }),
  ) as unknown as Schema.Schema<PutBotManagementRequest>;

export type PutBotManagementResponse =
  | {
      aiBotsProtection?: "block" | "disabled" | "only_on_ad_pages" | null;
      cfRobotsVariant?: "off" | "policy_only" | null;
      crawlerProtection?: "enabled" | "disabled" | null;
      enableJs?: boolean | null;
      fightMode?: boolean | null;
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
      aiBotsProtection?: "block" | "disabled" | "only_on_ad_pages" | null;
      cfRobotsVariant?: "off" | "policy_only" | null;
      crawlerProtection?: "enabled" | "disabled" | null;
      enableJs?: boolean | null;
      isRobotsTxtManaged?: boolean | null;
      optimizeWordpress?: boolean | null;
      sbfmDefinitelyAutomated?: "allow" | "block" | "managed_challenge" | null;
      sbfmStaticResourceProtection?: boolean | null;
      sbfmVerifiedBots?: "allow" | "block" | null;
      staleZoneConfiguration?: {
        fightMode?: boolean | null;
        sbfmLikelyAutomated?: string | null;
      } | null;
      usingLatestModel?: boolean | null;
    }
  | {
      aiBotsProtection?: "block" | "disabled" | "only_on_ad_pages" | null;
      cfRobotsVariant?: "off" | "policy_only" | null;
      crawlerProtection?: "enabled" | "disabled" | null;
      enableJs?: boolean | null;
      isRobotsTxtManaged?: boolean | null;
      optimizeWordpress?: boolean | null;
      sbfmDefinitelyAutomated?: "allow" | "block" | "managed_challenge" | null;
      sbfmLikelyAutomated?: "allow" | "block" | "managed_challenge" | null;
      sbfmStaticResourceProtection?: boolean | null;
      sbfmVerifiedBots?: "allow" | "block" | null;
      staleZoneConfiguration?: { fightMode?: boolean | null } | null;
      usingLatestModel?: boolean | null;
    }
  | {
      aiBotsProtection?: "block" | "disabled" | "only_on_ad_pages" | null;
      autoUpdateModel?: boolean | null;
      bmCookieEnabled?: boolean | null;
      cfRobotsVariant?: "off" | "policy_only" | null;
      crawlerProtection?: "enabled" | "disabled" | null;
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
  /*@__PURE__*/ /*#__PURE__*/ Schema.Union([
    Schema.Struct({
      aiBotsProtection: Schema.optional(
        Schema.Union([
          Schema.Literals(["block", "disabled", "only_on_ad_pages"]),
          Schema.Null,
        ]),
      ),
      cfRobotsVariant: Schema.optional(
        Schema.Union([Schema.Literals(["off", "policy_only"]), Schema.Null]),
      ),
      crawlerProtection: Schema.optional(
        Schema.Union([Schema.Literals(["enabled", "disabled"]), Schema.Null]),
      ),
      enableJs: Schema.optional(Schema.Union([Schema.Boolean, Schema.Null])),
      fightMode: Schema.optional(Schema.Union([Schema.Boolean, Schema.Null])),
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
          Schema.Literals(["block", "disabled", "only_on_ad_pages"]),
          Schema.Null,
        ]),
      ),
      cfRobotsVariant: Schema.optional(
        Schema.Union([Schema.Literals(["off", "policy_only"]), Schema.Null]),
      ),
      crawlerProtection: Schema.optional(
        Schema.Union([Schema.Literals(["enabled", "disabled"]), Schema.Null]),
      ),
      enableJs: Schema.optional(Schema.Union([Schema.Boolean, Schema.Null])),
      isRobotsTxtManaged: Schema.optional(
        Schema.Union([Schema.Boolean, Schema.Null]),
      ),
      optimizeWordpress: Schema.optional(
        Schema.Union([Schema.Boolean, Schema.Null]),
      ),
      sbfmDefinitelyAutomated: Schema.optional(
        Schema.Union([
          Schema.Literals(["allow", "block", "managed_challenge"]),
          Schema.Null,
        ]),
      ),
      sbfmStaticResourceProtection: Schema.optional(
        Schema.Union([Schema.Boolean, Schema.Null]),
      ),
      sbfmVerifiedBots: Schema.optional(
        Schema.Union([Schema.Literals(["allow", "block"]), Schema.Null]),
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
          Schema.Literals(["block", "disabled", "only_on_ad_pages"]),
          Schema.Null,
        ]),
      ),
      cfRobotsVariant: Schema.optional(
        Schema.Union([Schema.Literals(["off", "policy_only"]), Schema.Null]),
      ),
      crawlerProtection: Schema.optional(
        Schema.Union([Schema.Literals(["enabled", "disabled"]), Schema.Null]),
      ),
      enableJs: Schema.optional(Schema.Union([Schema.Boolean, Schema.Null])),
      isRobotsTxtManaged: Schema.optional(
        Schema.Union([Schema.Boolean, Schema.Null]),
      ),
      optimizeWordpress: Schema.optional(
        Schema.Union([Schema.Boolean, Schema.Null]),
      ),
      sbfmDefinitelyAutomated: Schema.optional(
        Schema.Union([
          Schema.Literals(["allow", "block", "managed_challenge"]),
          Schema.Null,
        ]),
      ),
      sbfmLikelyAutomated: Schema.optional(
        Schema.Union([
          Schema.Literals(["allow", "block", "managed_challenge"]),
          Schema.Null,
        ]),
      ),
      sbfmStaticResourceProtection: Schema.optional(
        Schema.Union([Schema.Boolean, Schema.Null]),
      ),
      sbfmVerifiedBots: Schema.optional(
        Schema.Union([Schema.Literals(["allow", "block"]), Schema.Null]),
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
          Schema.Literals(["block", "disabled", "only_on_ad_pages"]),
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
        Schema.Union([Schema.Literals(["off", "policy_only"]), Schema.Null]),
      ),
      crawlerProtection: Schema.optional(
        Schema.Union([Schema.Literals(["enabled", "disabled"]), Schema.Null]),
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
        crawlerProtection: "crawler_protection",
        enableJs: "enable_js",
        isRobotsTxtManaged: "is_robots_txt_managed",
        staleZoneConfiguration: "stale_zone_configuration",
        suppressSessionScore: "suppress_session_score",
        usingLatestModel: "using_latest_model",
      }),
    ),
  ]).pipe(
    T.ResponsePath("result"),
  ) as unknown as Schema.Schema<PutBotManagementResponse>;

export type PutBotManagementError = DefaultErrors;

export const putBotManagement: API.OperationMethod<
  PutBotManagementRequest,
  PutBotManagementResponse,
  PutBotManagementError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: PutBotManagementRequest,
  output: PutBotManagementResponse,
  errors: [],
}));
