/**
 * Cloudflare BOT-MANAGEMENT API
 *
 * Generated from Cloudflare TypeScript SDK.
 * DO NOT EDIT - regenerate with: bun scripts/generate.ts --service bot-management
 */

import * as Schema from "@distilled.cloud/core/schema";
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
// Shared nested schemas (hoisted, module-private)
// =============================================================================

interface StaleZoneConfiguration {
  /** Indicates that the zone's wordpress optimization for SBFM is turned on. */
  optimizeWordpress?: boolean | null;
  /** Indicates that the zone's definitely automated requests are being blocked or challenged. */
  sbfmDefinitelyAutomated?: string | null;
  /** Indicates that the zone's likely automated requests are being blocked or challenged. */
  sbfmLikelyAutomated?: string | null;
  /** Indicates that the zone's static resource protection is turned on. */
  sbfmStaticResourceProtection?: string | null;
  /** Indicates that the zone's verified bot requests are being blocked. */
  sbfmVerifiedBots?: string | null;
  /** Indicates that the zone's session score tracking is disabled. */
  suppressSessionScore?: boolean | null;
}
const StaleZoneConfiguration = /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
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
) as unknown as Schema.Codec<StaleZoneConfiguration>;

interface BotFightModeConfiguration {
  /** Enable rule to block AI Scrapers and Crawlers. Please note the value `only_on_ad_pages` is currently not available for Enterprise customers. */
  aiBotsProtection?:
    | "block"
    | "disabled"
    | "only_on_ad_pages"
    | (string & {})
    | null;
  /** Specifies the Robots Access Control License variant to use. */
  cfRobotsVariant?: "off" | "policy_only" | (string & {}) | null;
  /** Enable rule to block content bots. When enabled, blocks automated traffic with low bot scores, excluding safe verified bot categories. Exceptions should be managed via skip rules. */
  contentBotsProtection?: "block" | "disabled" | (string & {}) | null;
  /** Enable rule to punish AI Scrapers and Crawlers via a link maze. */
  crawlerProtection?: "enabled" | "disabled" | (string & {}) | null;
  /** Use lightweight, invisible JavaScript detections to improve Bot Management. [Learn more about JavaScript Detections](https://developers.cloudflare.com/bots/reference/javascript-detections/). */
  enableJs?: boolean | null;
  /** Whether to enable Bot Fight Mode. */
  fightMode: boolean;
  /** Enable cloudflare managed robots.txt. If an existing robots.txt is detected, then managed robots.txt will be prepended to the existing robots.txt. */
  isRobotsTxtManaged?: boolean | null;
  /** A read-only field that shows which unauthorized settings are currently active on the zone. These settings typically result from upgrades or downgrades. */
  staleZoneConfiguration?: {
    optimizeWordpress?: boolean | null;
    sbfmDefinitelyAutomated?: string | null;
    sbfmLikelyAutomated?: string | null;
    sbfmStaticResourceProtection?: string | null;
    sbfmVerifiedBots?: string | null;
    suppressSessionScore?: boolean | null;
  } | null;
  /** A read-only field that indicates whether the zone currently is running the latest ML model. */
  usingLatestModel?: boolean | null;
}
const BotFightModeConfiguration = /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(
  () =>
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
          Schema.Union([Schema.Literals(["block", "disabled"]), Schema.String]),
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
        Schema.Union([StaleZoneConfiguration, Schema.Null]),
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
) as unknown as Schema.Codec<BotFightModeConfiguration>;

interface StaleZoneConfiguration2 {
  /** Indicates that the zone's Bot Fight Mode is turned on. */
  fightMode?: boolean | null;
  /** Indicates that the zone's likely automated requests are being blocked or challenged. */
  sbfmLikelyAutomated?: string | null;
}
const StaleZoneConfiguration2 = /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    fightMode: Schema.optional(Schema.Union([Schema.Boolean, Schema.Null])),
    sbfmLikelyAutomated: Schema.optional(
      Schema.Union([Schema.String, Schema.Null]),
    ),
  }).pipe(
    Schema.encodeKeys({
      fightMode: "fight_mode",
      sbfmLikelyAutomated: "sbfm_likely_automated",
    }),
  ),
) as unknown as Schema.Codec<StaleZoneConfiguration2>;

interface SuperBotFightModeDefinitelyConfiguration {
  /** Enable rule to block AI Scrapers and Crawlers. Please note the value `only_on_ad_pages` is currently not available for Enterprise customers. */
  aiBotsProtection?:
    | "block"
    | "disabled"
    | "only_on_ad_pages"
    | (string & {})
    | null;
  /** Specifies the Robots Access Control License variant to use. */
  cfRobotsVariant?: "off" | "policy_only" | (string & {}) | null;
  /** Enable rule to block content bots. When enabled, blocks automated traffic with low bot scores, excluding safe verified bot categories. Exceptions should be managed via skip rules. */
  contentBotsProtection?: "block" | "disabled" | (string & {}) | null;
  /** Enable rule to punish AI Scrapers and Crawlers via a link maze. */
  crawlerProtection?: "enabled" | "disabled" | (string & {}) | null;
  /** Use lightweight, invisible JavaScript detections to improve Bot Management. [Learn more about JavaScript Detections](https://developers.cloudflare.com/bots/reference/javascript-detections/). */
  enableJs?: boolean | null;
  /** Enable cloudflare managed robots.txt. If an existing robots.txt is detected, then managed robots.txt will be prepended to the existing robots.txt. */
  isRobotsTxtManaged?: boolean | null;
  /** Whether to optimize Super Bot Fight Mode protections for Wordpress. */
  optimizeWordpress?: boolean | null;
  /** Super Bot Fight Mode (SBFM) action to take on definitely automated requests. */
  sbfmDefinitelyAutomated:
    | "allow"
    | "block"
    | "managed_challenge"
    | (string & {});
  /** Super Bot Fight Mode (SBFM) to enable static resource protection. Enable if static resources on your application need bot protection. Note: Static resource protection can also result in legitimate tra */
  sbfmStaticResourceProtection?: boolean | null;
  /** Super Bot Fight Mode (SBFM) action to take on verified bots requests. */
  sbfmVerifiedBots?: "allow" | "block" | (string & {}) | null;
  /** A read-only field that shows which unauthorized settings are currently active on the zone. These settings typically result from upgrades or downgrades. */
  staleZoneConfiguration?: {
    fightMode?: boolean | null;
    sbfmLikelyAutomated?: string | null;
  } | null;
  /** A read-only field that indicates whether the zone currently is running the latest ML model. */
  usingLatestModel?: boolean | null;
}
const SuperBotFightModeDefinitelyConfiguration =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
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
          Schema.Union([Schema.Literals(["block", "disabled"]), Schema.String]),
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
        Schema.Union([StaleZoneConfiguration2, Schema.Null]),
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
  ) as unknown as Schema.Codec<SuperBotFightModeDefinitelyConfiguration>;

interface StaleZoneConfiguration3 {
  /** Indicates that the zone's Bot Fight Mode is turned on. */
  fightMode?: boolean | null;
}
const StaleZoneConfiguration3 = /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    fightMode: Schema.optional(Schema.Union([Schema.Boolean, Schema.Null])),
  }).pipe(Schema.encodeKeys({ fightMode: "fight_mode" })),
) as unknown as Schema.Codec<StaleZoneConfiguration3>;

interface SuperBotFightModeLikelyConfiguration {
  /** Enable rule to block AI Scrapers and Crawlers. Please note the value `only_on_ad_pages` is currently not available for Enterprise customers. */
  aiBotsProtection?:
    | "block"
    | "disabled"
    | "only_on_ad_pages"
    | (string & {})
    | null;
  /** Specifies the Robots Access Control License variant to use. */
  cfRobotsVariant?: "off" | "policy_only" | (string & {}) | null;
  /** Enable rule to block content bots. When enabled, blocks automated traffic with low bot scores, excluding safe verified bot categories. Exceptions should be managed via skip rules. */
  contentBotsProtection?: "block" | "disabled" | (string & {}) | null;
  /** Enable rule to punish AI Scrapers and Crawlers via a link maze. */
  crawlerProtection?: "enabled" | "disabled" | (string & {}) | null;
  /** Use lightweight, invisible JavaScript detections to improve Bot Management. [Learn more about JavaScript Detections](https://developers.cloudflare.com/bots/reference/javascript-detections/). */
  enableJs?: boolean | null;
  /** Enable cloudflare managed robots.txt. If an existing robots.txt is detected, then managed robots.txt will be prepended to the existing robots.txt. */
  isRobotsTxtManaged?: boolean | null;
  /** Whether to optimize Super Bot Fight Mode protections for Wordpress. */
  optimizeWordpress?: boolean | null;
  /** Super Bot Fight Mode (SBFM) action to take on definitely automated requests. */
  sbfmDefinitelyAutomated:
    | "allow"
    | "block"
    | "managed_challenge"
    | (string & {});
  /** Super Bot Fight Mode (SBFM) action to take on likely automated requests. */
  sbfmLikelyAutomated?:
    | "allow"
    | "block"
    | "managed_challenge"
    | (string & {})
    | null;
  /** Super Bot Fight Mode (SBFM) to enable static resource protection. Enable if static resources on your application need bot protection. Note: Static resource protection can also result in legitimate tra */
  sbfmStaticResourceProtection?: boolean | null;
  /** Super Bot Fight Mode (SBFM) action to take on verified bots requests. */
  sbfmVerifiedBots?: "allow" | "block" | (string & {}) | null;
  /** A read-only field that shows which unauthorized settings are currently active on the zone. These settings typically result from upgrades or downgrades. */
  staleZoneConfiguration?: { fightMode?: boolean | null } | null;
  /** A read-only field that indicates whether the zone currently is running the latest ML model. */
  usingLatestModel?: boolean | null;
}
const SuperBotFightModeLikelyConfiguration =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
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
          Schema.Union([Schema.Literals(["block", "disabled"]), Schema.String]),
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
        Schema.Union([StaleZoneConfiguration3, Schema.Null]),
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
  ) as unknown as Schema.Codec<SuperBotFightModeLikelyConfiguration>;

interface StaleZoneConfiguration4 {
  /** Indicates that the zone's Bot Fight Mode is turned on. */
  fightMode?: boolean | null;
  /** Indicates that the zone's wordpress optimization for SBFM is turned on. */
  optimizeWordpress?: boolean | null;
  /** Indicates that the zone's definitely automated requests are being blocked or challenged. */
  sbfmDefinitelyAutomated?: string | null;
  /** Indicates that the zone's likely automated requests are being blocked or challenged. */
  sbfmLikelyAutomated?: string | null;
  /** Indicates that the zone's static resource protection is turned on. */
  sbfmStaticResourceProtection?: string | null;
  /** Indicates that the zone's verified bot requests are being blocked. */
  sbfmVerifiedBots?: string | null;
}
const StaleZoneConfiguration4 = /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    fightMode: Schema.optional(Schema.Union([Schema.Boolean, Schema.Null])),
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
) as unknown as Schema.Codec<StaleZoneConfiguration4>;

interface SubscriptionConfiguration {
  /** Enable rule to block AI Scrapers and Crawlers. Please note the value `only_on_ad_pages` is currently not available for Enterprise customers. */
  aiBotsProtection?:
    | "block"
    | "disabled"
    | "only_on_ad_pages"
    | (string & {})
    | null;
  /** Automatically update to the newest bot detection models created by Cloudflare as they are released. [Learn more.](https://developers.cloudflare.com/bots/reference/machine-learning-models#model-version */
  autoUpdateModel?: boolean | null;
  /** Indicates that the bot management cookie can be placed on end user devices accessing the site. Defaults to true */
  bmCookieEnabled?: boolean | null;
  /** Specifies the Robots Access Control License variant to use. */
  cfRobotsVariant?: "off" | "policy_only" | (string & {}) | null;
  /** Enable rule to block content bots. When enabled, blocks automated traffic with low bot scores, excluding safe verified bot categories. Exceptions should be managed via skip rules. */
  contentBotsProtection?: "block" | "disabled" | (string & {}) | null;
  /** Enable rule to punish AI Scrapers and Crawlers via a link maze. */
  crawlerProtection?: "enabled" | "disabled" | (string & {}) | null;
  /** Use lightweight, invisible JavaScript detections to improve Bot Management. [Learn more about JavaScript Detections](https://developers.cloudflare.com/bots/reference/javascript-detections/). */
  enableJs?: boolean | null;
  /** Enable cloudflare managed robots.txt. If an existing robots.txt is detected, then managed robots.txt will be prepended to the existing robots.txt. */
  isRobotsTxtManaged?: boolean | null;
  /** A read-only field that shows which unauthorized settings are currently active on the zone. These settings typically result from upgrades or downgrades. */
  staleZoneConfiguration?: {
    fightMode?: boolean | null;
    optimizeWordpress?: boolean | null;
    sbfmDefinitelyAutomated?: string | null;
    sbfmLikelyAutomated?: string | null;
    sbfmStaticResourceProtection?: string | null;
    sbfmVerifiedBots?: string | null;
  } | null;
  /** Whether to disable tracking the highest bot score for a session in the Bot Management cookie. */
  suppressSessionScore?: boolean | null;
  /** A read-only field that indicates whether the zone currently is running the latest ML model. */
  usingLatestModel?: boolean | null;
}
const SubscriptionConfiguration = /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(
  () =>
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
          Schema.Union([Schema.Literals(["block", "disabled"]), Schema.String]),
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
        Schema.Union([StaleZoneConfiguration4, Schema.Null]),
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
) as unknown as Schema.Codec<SubscriptionConfiguration>;

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
  ) as unknown as Schema.Codec<GetBotManagementRequest>;

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
      BotFightModeConfiguration,
      SuperBotFightModeDefinitelyConfiguration,
      SuperBotFightModeLikelyConfiguration,
      SubscriptionConfiguration,
    ]).pipe(T.ResponsePath("result")),
  ) as unknown as Schema.Codec<GetBotManagementResponse>;

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
  ) as unknown as Schema.Codec<PutBotManagementRequest>;

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
      BotFightModeConfiguration,
      SuperBotFightModeDefinitelyConfiguration,
      SuperBotFightModeLikelyConfiguration,
      SubscriptionConfiguration,
    ]).pipe(T.ResponsePath("result")),
  ) as unknown as Schema.Codec<PutBotManagementResponse>;

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
