/**
 * Cloudflare PAGE-RULES API
 *
 * Generated from Cloudflare TypeScript SDK.
 * DO NOT EDIT - regenerate with: bun scripts/generate.ts --service page-rules
 */

import * as Schema from "effect/Schema";
import type * as HttpClient from "effect/unstable/http/HttpClient";
import * as API from "../client/api.ts";
import * as T from "../traits.ts";
import type { Credentials } from "../credentials.ts";
import { type DefaultErrors } from "../errors.ts";

// =============================================================================
// Shared Types
// =============================================================================

export interface AlwaysUseHTTPS {
  id?: "always_use_https" | null;
}

export const AlwaysUseHTTPS: Schema.Schema<AlwaysUseHTTPS> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      id: Schema.optional(
        Schema.Union([Schema.Literal("always_use_https"), Schema.Null]),
      ),
    }),
  ) as unknown as Schema.Schema<AlwaysUseHTTPS>;

export interface AlwaysUseHTTPSParam {
  id?: "always_use_https" | null;
}

export const AlwaysUseHTTPSParam: Schema.Schema<AlwaysUseHTTPSParam> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      id: Schema.optional(
        Schema.Union([Schema.Literal("always_use_https"), Schema.Null]),
      ),
    }),
  ) as unknown as Schema.Schema<AlwaysUseHTTPSParam>;

export interface AutomaticHTTPSRewrites {
  id?: "automatic_https_rewrites" | null;
  value?: "on" | "off" | null;
}

export const AutomaticHTTPSRewrites: Schema.Schema<AutomaticHTTPSRewrites> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      id: Schema.optional(
        Schema.Union([Schema.Literal("automatic_https_rewrites"), Schema.Null]),
      ),
      value: Schema.optional(
        Schema.Union([Schema.Literals(["on", "off"]), Schema.Null]),
      ),
    }),
  ) as unknown as Schema.Schema<AutomaticHTTPSRewrites>;

export interface AutomaticHTTPSRewritesParam {
  id?: "automatic_https_rewrites" | null;
  value?: "on" | "off" | null;
}

export const AutomaticHTTPSRewritesParam: Schema.Schema<AutomaticHTTPSRewritesParam> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      id: Schema.optional(
        Schema.Union([Schema.Literal("automatic_https_rewrites"), Schema.Null]),
      ),
      value: Schema.optional(
        Schema.Union([Schema.Literals(["on", "off"]), Schema.Null]),
      ),
    }),
  ) as unknown as Schema.Schema<AutomaticHTTPSRewritesParam>;

export interface BrowserCacheTTL {
  id?: "browser_cache_ttl" | null;
  value?: number | null;
}

export const BrowserCacheTTL: Schema.Schema<BrowserCacheTTL> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      id: Schema.optional(
        Schema.Union([Schema.Literal("browser_cache_ttl"), Schema.Null]),
      ),
      value: Schema.optional(Schema.Union([Schema.Number, Schema.Null])),
    }),
  ) as unknown as Schema.Schema<BrowserCacheTTL>;

export interface BrowserCacheTTLParam {
  id?: "browser_cache_ttl" | null;
  value?: number | null;
}

export const BrowserCacheTTLParam: Schema.Schema<BrowserCacheTTLParam> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      id: Schema.optional(
        Schema.Union([Schema.Literal("browser_cache_ttl"), Schema.Null]),
      ),
      value: Schema.optional(Schema.Union([Schema.Number, Schema.Null])),
    }),
  ) as unknown as Schema.Schema<BrowserCacheTTLParam>;

export interface BrowserCheck {
  id?: "browser_check" | null;
  value?: "on" | "off" | null;
}

export const BrowserCheck: Schema.Schema<BrowserCheck> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      id: Schema.optional(
        Schema.Union([Schema.Literal("browser_check"), Schema.Null]),
      ),
      value: Schema.optional(
        Schema.Union([Schema.Literals(["on", "off"]), Schema.Null]),
      ),
    }),
  ) as unknown as Schema.Schema<BrowserCheck>;

export interface BrowserCheckParam {
  id?: "browser_check" | null;
  value?: "on" | "off" | null;
}

export const BrowserCheckParam: Schema.Schema<BrowserCheckParam> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      id: Schema.optional(
        Schema.Union([Schema.Literal("browser_check"), Schema.Null]),
      ),
      value: Schema.optional(
        Schema.Union([Schema.Literals(["on", "off"]), Schema.Null]),
      ),
    }),
  ) as unknown as Schema.Schema<BrowserCheckParam>;

export interface BypassCacheOnCookie {
  id?: "bypass_cache_on_cookie" | null;
  value?: string | null;
}

export const BypassCacheOnCookie: Schema.Schema<BypassCacheOnCookie> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      id: Schema.optional(
        Schema.Union([Schema.Literal("bypass_cache_on_cookie"), Schema.Null]),
      ),
      value: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
    }),
  ) as unknown as Schema.Schema<BypassCacheOnCookie>;

export interface CacheByDeviceType {
  id?: "cache_by_device_type" | null;
  value?: "on" | "off" | null;
}

export const CacheByDeviceType: Schema.Schema<CacheByDeviceType> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      id: Schema.optional(
        Schema.Union([Schema.Literal("cache_by_device_type"), Schema.Null]),
      ),
      value: Schema.optional(
        Schema.Union([Schema.Literals(["on", "off"]), Schema.Null]),
      ),
    }),
  ) as unknown as Schema.Schema<CacheByDeviceType>;

export interface CacheDeceptionArmor {
  id?: "cache_deception_armor" | null;
  value?: "on" | "off" | null;
}

export const CacheDeceptionArmor: Schema.Schema<CacheDeceptionArmor> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      id: Schema.optional(
        Schema.Union([Schema.Literal("cache_deception_armor"), Schema.Null]),
      ),
      value: Schema.optional(
        Schema.Union([Schema.Literals(["on", "off"]), Schema.Null]),
      ),
    }),
  ) as unknown as Schema.Schema<CacheDeceptionArmor>;

export interface CacheKeyFields {
  id?: "cache_key_fields" | null;
  value?: Value | null;
}

export const CacheKeyFields: Schema.Schema<CacheKeyFields> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      id: Schema.optional(
        Schema.Union([Schema.Literal("cache_key_fields"), Schema.Null]),
      ),
      value: Schema.optional(Schema.Union([Value, Schema.Null])),
    }),
  ) as unknown as Schema.Schema<CacheKeyFields>;

export interface CacheLevel {
  id?: "cache_level" | null;
  value?:
    | "bypass"
    | "basic"
    | "simplified"
    | "aggressive"
    | "cache_everything"
    | null;
}

export const CacheLevel: Schema.Schema<CacheLevel> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      id: Schema.optional(
        Schema.Union([Schema.Literal("cache_level"), Schema.Null]),
      ),
      value: Schema.optional(
        Schema.Union([
          Schema.Literals([
            "bypass",
            "basic",
            "simplified",
            "aggressive",
            "cache_everything",
          ]),
          Schema.Null,
        ]),
      ),
    }),
  ) as unknown as Schema.Schema<CacheLevel>;

export interface CacheLevelParam {
  id?: "cache_level" | null;
  value?:
    | "bypass"
    | "basic"
    | "simplified"
    | "aggressive"
    | "cache_everything"
    | null;
}

export const CacheLevelParam: Schema.Schema<CacheLevelParam> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      id: Schema.optional(
        Schema.Union([Schema.Literal("cache_level"), Schema.Null]),
      ),
      value: Schema.optional(
        Schema.Union([
          Schema.Literals([
            "bypass",
            "basic",
            "simplified",
            "aggressive",
            "cache_everything",
          ]),
          Schema.Null,
        ]),
      ),
    }),
  ) as unknown as Schema.Schema<CacheLevelParam>;

export interface CacheOnCookie {
  id?: "cache_on_cookie" | null;
  value?: string | null;
}

export const CacheOnCookie: Schema.Schema<CacheOnCookie> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      id: Schema.optional(
        Schema.Union([Schema.Literal("cache_on_cookie"), Schema.Null]),
      ),
      value: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
    }),
  ) as unknown as Schema.Schema<CacheOnCookie>;

export interface CacheTTLByStatus {
  id?: "cache_ttl_by_status" | null;
  value?: Record<string, unknown> | null;
}

export const CacheTTLByStatus: Schema.Schema<CacheTTLByStatus> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      id: Schema.optional(
        Schema.Union([Schema.Literal("cache_ttl_by_status"), Schema.Null]),
      ),
      value: Schema.optional(
        Schema.Union([
          Schema.Record(Schema.String, Schema.Unknown),
          Schema.Null,
        ]),
      ),
    }),
  ) as unknown as Schema.Schema<CacheTTLByStatus>;

export interface Constraint {
  operator: "matches" | "contains" | "equals" | "not_equal" | "not_contain";
  value: string;
}

export const Constraint: Schema.Schema<Constraint> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      operator: Schema.Literals([
        "matches",
        "contains",
        "equals",
        "not_equal",
        "not_contain",
      ]),
      value: Schema.String,
    }),
  ) as unknown as Schema.Schema<Constraint>;

export interface Cookie {
  checkPresence?: string[] | null;
  include?: string[] | null;
}

export const Cookie: Schema.Schema<Cookie> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      checkPresence: Schema.optional(
        Schema.Union([Schema.Array(Schema.String), Schema.Null]),
      ),
      include: Schema.optional(
        Schema.Union([Schema.Array(Schema.String), Schema.Null]),
      ),
    }).pipe(
      Schema.encodeKeys({
        checkPresence: "check_presence",
        include: "include",
      }),
    ),
  ) as unknown as Schema.Schema<Cookie>;

export interface DisableApps {
  id?: "disable_apps" | null;
}

export const DisableApps: Schema.Schema<DisableApps> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      id: Schema.optional(
        Schema.Union([Schema.Literal("disable_apps"), Schema.Null]),
      ),
    }),
  ) as unknown as Schema.Schema<DisableApps>;

export interface DisablePerformance {
  id?: "disable_performance" | null;
}

export const DisablePerformance: Schema.Schema<DisablePerformance> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      id: Schema.optional(
        Schema.Union([Schema.Literal("disable_performance"), Schema.Null]),
      ),
    }),
  ) as unknown as Schema.Schema<DisablePerformance>;

export interface DisableSecurity {
  id?: "disable_security" | null;
}

export const DisableSecurity: Schema.Schema<DisableSecurity> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      id: Schema.optional(
        Schema.Union([Schema.Literal("disable_security"), Schema.Null]),
      ),
    }),
  ) as unknown as Schema.Schema<DisableSecurity>;

export interface DisableZaraz {
  id?: "disable_zaraz" | null;
}

export const DisableZaraz: Schema.Schema<DisableZaraz> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      id: Schema.optional(
        Schema.Union([Schema.Literal("disable_zaraz"), Schema.Null]),
      ),
    }),
  ) as unknown as Schema.Schema<DisableZaraz>;

export interface EdgeCacheTTL {
  id?: "edge_cache_ttl" | null;
  value?: number | null;
}

export const EdgeCacheTTL: Schema.Schema<EdgeCacheTTL> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      id: Schema.optional(
        Schema.Union([Schema.Literal("edge_cache_ttl"), Schema.Null]),
      ),
      value: Schema.optional(Schema.Union([Schema.Number, Schema.Null])),
    }),
  ) as unknown as Schema.Schema<EdgeCacheTTL>;

export interface EmailObfuscation {
  id?: "email_obfuscation" | null;
  value?: "on" | "off" | null;
}

export const EmailObfuscation: Schema.Schema<EmailObfuscation> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      id: Schema.optional(
        Schema.Union([Schema.Literal("email_obfuscation"), Schema.Null]),
      ),
      value: Schema.optional(
        Schema.Union([Schema.Literals(["on", "off"]), Schema.Null]),
      ),
    }),
  ) as unknown as Schema.Schema<EmailObfuscation>;

export interface EmailObfuscationParam {
  id?: "email_obfuscation" | null;
  value?: "on" | "off" | null;
}

export const EmailObfuscationParam: Schema.Schema<EmailObfuscationParam> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      id: Schema.optional(
        Schema.Union([Schema.Literal("email_obfuscation"), Schema.Null]),
      ),
      value: Schema.optional(
        Schema.Union([Schema.Literals(["on", "off"]), Schema.Null]),
      ),
    }),
  ) as unknown as Schema.Schema<EmailObfuscationParam>;

export interface ExplicitCacheControl {
  id?: "explicit_cache_control" | null;
  value?: "on" | "off" | null;
}

export const ExplicitCacheControl: Schema.Schema<ExplicitCacheControl> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      id: Schema.optional(
        Schema.Union([Schema.Literal("explicit_cache_control"), Schema.Null]),
      ),
      value: Schema.optional(
        Schema.Union([Schema.Literals(["on", "off"]), Schema.Null]),
      ),
    }),
  ) as unknown as Schema.Schema<ExplicitCacheControl>;

export interface ForwardingURL {
  id?: "forwarding_url" | null;
  value?: { statusCode?: "301" | "302" | null; url?: string | null } | null;
}

export const ForwardingURL: Schema.Schema<ForwardingURL> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      id: Schema.optional(
        Schema.Union([Schema.Literal("forwarding_url"), Schema.Null]),
      ),
      value: Schema.optional(
        Schema.Union([
          Schema.Struct({
            statusCode: Schema.optional(
              Schema.Union([Schema.Literals(["301", "302"]), Schema.Null]),
            ),
            url: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
          }).pipe(Schema.encodeKeys({ statusCode: "status_code", url: "url" })),
          Schema.Null,
        ]),
      ),
    }),
  ) as unknown as Schema.Schema<ForwardingURL>;

export interface Header {
  checkPresence?: string[] | null;
  exclude?: string[] | null;
  include?: string[] | null;
}

export const Header: Schema.Schema<Header> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      checkPresence: Schema.optional(
        Schema.Union([Schema.Array(Schema.String), Schema.Null]),
      ),
      exclude: Schema.optional(
        Schema.Union([Schema.Array(Schema.String), Schema.Null]),
      ),
      include: Schema.optional(
        Schema.Union([Schema.Array(Schema.String), Schema.Null]),
      ),
    }).pipe(
      Schema.encodeKeys({
        checkPresence: "check_presence",
        exclude: "exclude",
        include: "include",
      }),
    ),
  ) as unknown as Schema.Schema<Header>;

export interface Host {
  resolved?: boolean | null;
}

export const Host: Schema.Schema<Host> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      resolved: Schema.optional(Schema.Union([Schema.Boolean, Schema.Null])),
    }),
  ) as unknown as Schema.Schema<Host>;

export interface HostHeaderOverride {
  id?: "host_header_override" | null;
  value?: string | null;
}

export const HostHeaderOverride: Schema.Schema<HostHeaderOverride> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      id: Schema.optional(
        Schema.Union([Schema.Literal("host_header_override"), Schema.Null]),
      ),
      value: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
    }),
  ) as unknown as Schema.Schema<HostHeaderOverride>;

export interface Ipgeolocation {
  id?: "ip_geolocation" | null;
  value?: "on" | "off" | null;
}

export const Ipgeolocation: Schema.Schema<Ipgeolocation> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      id: Schema.optional(
        Schema.Union([Schema.Literal("ip_geolocation"), Schema.Null]),
      ),
      value: Schema.optional(
        Schema.Union([Schema.Literals(["on", "off"]), Schema.Null]),
      ),
    }),
  ) as unknown as Schema.Schema<Ipgeolocation>;

export interface IpgeolocationParam {
  id?: "ip_geolocation" | null;
  value?: "on" | "off" | null;
}

export const IpgeolocationParam: Schema.Schema<IpgeolocationParam> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      id: Schema.optional(
        Schema.Union([Schema.Literal("ip_geolocation"), Schema.Null]),
      ),
      value: Schema.optional(
        Schema.Union([Schema.Literals(["on", "off"]), Schema.Null]),
      ),
    }),
  ) as unknown as Schema.Schema<IpgeolocationParam>;

export interface Mirage {
  id?: "mirage" | null;
  value?: "on" | "off" | null;
}

export const Mirage: Schema.Schema<Mirage> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      id: Schema.optional(
        Schema.Union([Schema.Literal("mirage"), Schema.Null]),
      ),
      value: Schema.optional(
        Schema.Union([Schema.Literals(["on", "off"]), Schema.Null]),
      ),
    }),
  ) as unknown as Schema.Schema<Mirage>;

export interface MirageParam {
  id?: "mirage" | null;
  value?: "on" | "off" | null;
}

export const MirageParam: Schema.Schema<MirageParam> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      id: Schema.optional(
        Schema.Union([Schema.Literal("mirage"), Schema.Null]),
      ),
      value: Schema.optional(
        Schema.Union([Schema.Literals(["on", "off"]), Schema.Null]),
      ),
    }),
  ) as unknown as Schema.Schema<MirageParam>;

export interface OpportunisticEncryption {
  id?: "opportunistic_encryption" | null;
  value?: "on" | "off" | null;
}

export const OpportunisticEncryption: Schema.Schema<OpportunisticEncryption> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      id: Schema.optional(
        Schema.Union([Schema.Literal("opportunistic_encryption"), Schema.Null]),
      ),
      value: Schema.optional(
        Schema.Union([Schema.Literals(["on", "off"]), Schema.Null]),
      ),
    }),
  ) as unknown as Schema.Schema<OpportunisticEncryption>;

export interface OpportunisticEncryptionParam {
  id?: "opportunistic_encryption" | null;
  value?: "on" | "off" | null;
}

export const OpportunisticEncryptionParam: Schema.Schema<OpportunisticEncryptionParam> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      id: Schema.optional(
        Schema.Union([Schema.Literal("opportunistic_encryption"), Schema.Null]),
      ),
      value: Schema.optional(
        Schema.Union([Schema.Literals(["on", "off"]), Schema.Null]),
      ),
    }),
  ) as unknown as Schema.Schema<OpportunisticEncryptionParam>;

export interface OriginErrorPagePassThru {
  id?: "origin_error_page_pass_thru" | null;
  value?: "on" | "off" | null;
}

export const OriginErrorPagePassThru: Schema.Schema<OriginErrorPagePassThru> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      id: Schema.optional(
        Schema.Union([
          Schema.Literal("origin_error_page_pass_thru"),
          Schema.Null,
        ]),
      ),
      value: Schema.optional(
        Schema.Union([Schema.Literals(["on", "off"]), Schema.Null]),
      ),
    }),
  ) as unknown as Schema.Schema<OriginErrorPagePassThru>;

export interface OriginErrorPagePassThruParam {
  id?: "origin_error_page_pass_thru" | null;
  value?: "on" | "off" | null;
}

export const OriginErrorPagePassThruParam: Schema.Schema<OriginErrorPagePassThruParam> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      id: Schema.optional(
        Schema.Union([
          Schema.Literal("origin_error_page_pass_thru"),
          Schema.Null,
        ]),
      ),
      value: Schema.optional(
        Schema.Union([Schema.Literals(["on", "off"]), Schema.Null]),
      ),
    }),
  ) as unknown as Schema.Schema<OriginErrorPagePassThruParam>;

export interface Polish {
  id?: "polish" | null;
  value?: "off" | "lossless" | "lossy" | null;
}

export const Polish: Schema.Schema<Polish> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      id: Schema.optional(
        Schema.Union([Schema.Literal("polish"), Schema.Null]),
      ),
      value: Schema.optional(
        Schema.Union([
          Schema.Literals(["off", "lossless", "lossy"]),
          Schema.Null,
        ]),
      ),
    }),
  ) as unknown as Schema.Schema<Polish>;

export interface PolishParam {
  id?: "polish" | null;
  value?: "off" | "lossless" | "lossy" | null;
}

export const PolishParam: Schema.Schema<PolishParam> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      id: Schema.optional(
        Schema.Union([Schema.Literal("polish"), Schema.Null]),
      ),
      value: Schema.optional(
        Schema.Union([
          Schema.Literals(["off", "lossless", "lossy"]),
          Schema.Null,
        ]),
      ),
    }),
  ) as unknown as Schema.Schema<PolishParam>;

export interface QueryString {
  exclude?: "*" | string[] | null;
  include?: "*" | string[] | null;
}

export const QueryString: Schema.Schema<QueryString> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      exclude: Schema.optional(
        Schema.Union([
          Schema.Union([Schema.Literal("*"), Schema.Array(Schema.String)]),
          Schema.Null,
        ]),
      ),
      include: Schema.optional(
        Schema.Union([
          Schema.Union([Schema.Literal("*"), Schema.Array(Schema.String)]),
          Schema.Null,
        ]),
      ),
    }),
  ) as unknown as Schema.Schema<QueryString>;

export interface ResolveOverride {
  id?: "resolve_override" | null;
  value?: string | null;
}

export const ResolveOverride: Schema.Schema<ResolveOverride> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      id: Schema.optional(
        Schema.Union([Schema.Literal("resolve_override"), Schema.Null]),
      ),
      value: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
    }),
  ) as unknown as Schema.Schema<ResolveOverride>;

export interface RespectStrongEtag {
  id?: "respect_strong_etag" | null;
  value?: "on" | "off" | null;
}

export const RespectStrongEtag: Schema.Schema<RespectStrongEtag> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      id: Schema.optional(
        Schema.Union([Schema.Literal("respect_strong_etag"), Schema.Null]),
      ),
      value: Schema.optional(
        Schema.Union([Schema.Literals(["on", "off"]), Schema.Null]),
      ),
    }),
  ) as unknown as Schema.Schema<RespectStrongEtag>;

export interface ResponseBuffering {
  id?: "response_buffering" | null;
  value?: "on" | "off" | null;
}

export const ResponseBuffering: Schema.Schema<ResponseBuffering> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      id: Schema.optional(
        Schema.Union([Schema.Literal("response_buffering"), Schema.Null]),
      ),
      value: Schema.optional(
        Schema.Union([Schema.Literals(["on", "off"]), Schema.Null]),
      ),
    }),
  ) as unknown as Schema.Schema<ResponseBuffering>;

export interface ResponseBufferingParam {
  id?: "response_buffering" | null;
  value?: "on" | "off" | null;
}

export const ResponseBufferingParam: Schema.Schema<ResponseBufferingParam> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      id: Schema.optional(
        Schema.Union([Schema.Literal("response_buffering"), Schema.Null]),
      ),
      value: Schema.optional(
        Schema.Union([Schema.Literals(["on", "off"]), Schema.Null]),
      ),
    }),
  ) as unknown as Schema.Schema<ResponseBufferingParam>;

export interface RocketLoader {
  id?: "rocket_loader" | null;
  value?: "on" | "off" | null;
}

export const RocketLoader: Schema.Schema<RocketLoader> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      id: Schema.optional(
        Schema.Union([Schema.Literal("rocket_loader"), Schema.Null]),
      ),
      value: Schema.optional(
        Schema.Union([Schema.Literals(["on", "off"]), Schema.Null]),
      ),
    }),
  ) as unknown as Schema.Schema<RocketLoader>;

export interface RocketLoaderParam {
  id?: "rocket_loader" | null;
  value?: "on" | "off" | null;
}

export const RocketLoaderParam: Schema.Schema<RocketLoaderParam> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      id: Schema.optional(
        Schema.Union([Schema.Literal("rocket_loader"), Schema.Null]),
      ),
      value: Schema.optional(
        Schema.Union([Schema.Literals(["on", "off"]), Schema.Null]),
      ),
    }),
  ) as unknown as Schema.Schema<RocketLoaderParam>;

export interface SecurityLevel {
  id?: "security_level" | null;
  value?:
    | "off"
    | "essentially_off"
    | "low"
    | "medium"
    | "high"
    | "under_attack"
    | null;
}

export const SecurityLevel: Schema.Schema<SecurityLevel> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      id: Schema.optional(
        Schema.Union([Schema.Literal("security_level"), Schema.Null]),
      ),
      value: Schema.optional(
        Schema.Union([
          Schema.Literals([
            "off",
            "essentially_off",
            "low",
            "medium",
            "high",
            "under_attack",
          ]),
          Schema.Null,
        ]),
      ),
    }),
  ) as unknown as Schema.Schema<SecurityLevel>;

export interface SecurityLevelParam {
  id?: "security_level" | null;
  value?:
    | "off"
    | "essentially_off"
    | "low"
    | "medium"
    | "high"
    | "under_attack"
    | null;
}

export const SecurityLevelParam: Schema.Schema<SecurityLevelParam> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      id: Schema.optional(
        Schema.Union([Schema.Literal("security_level"), Schema.Null]),
      ),
      value: Schema.optional(
        Schema.Union([
          Schema.Literals([
            "off",
            "essentially_off",
            "low",
            "medium",
            "high",
            "under_attack",
          ]),
          Schema.Null,
        ]),
      ),
    }),
  ) as unknown as Schema.Schema<SecurityLevelParam>;

export interface SortQueryStringForCache {
  id?: "sort_query_string_for_cache" | null;
  value?: "on" | "off" | null;
}

export const SortQueryStringForCache: Schema.Schema<SortQueryStringForCache> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      id: Schema.optional(
        Schema.Union([
          Schema.Literal("sort_query_string_for_cache"),
          Schema.Null,
        ]),
      ),
      value: Schema.optional(
        Schema.Union([Schema.Literals(["on", "off"]), Schema.Null]),
      ),
    }),
  ) as unknown as Schema.Schema<SortQueryStringForCache>;

export interface SortQueryStringForCacheParam {
  id?: "sort_query_string_for_cache" | null;
  value?: "on" | "off" | null;
}

export const SortQueryStringForCacheParam: Schema.Schema<SortQueryStringForCacheParam> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      id: Schema.optional(
        Schema.Union([
          Schema.Literal("sort_query_string_for_cache"),
          Schema.Null,
        ]),
      ),
      value: Schema.optional(
        Schema.Union([Schema.Literals(["on", "off"]), Schema.Null]),
      ),
    }),
  ) as unknown as Schema.Schema<SortQueryStringForCacheParam>;

export interface Ssl {
  id?: "ssl" | null;
  value?: "off" | "flexible" | "full" | "strict" | "origin_pull" | null;
}

export const Ssl: Schema.Schema<Ssl> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      id: Schema.optional(Schema.Union([Schema.Literal("ssl"), Schema.Null])),
      value: Schema.optional(
        Schema.Union([
          Schema.Literals(["off", "flexible", "full", "strict", "origin_pull"]),
          Schema.Null,
        ]),
      ),
    }),
  ) as unknown as Schema.Schema<Ssl>;

export interface Sslparam {
  id?: "ssl" | null;
  value?: "off" | "flexible" | "full" | "strict" | "origin_pull" | null;
}

export const Sslparam: Schema.Schema<Sslparam> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      id: Schema.optional(Schema.Union([Schema.Literal("ssl"), Schema.Null])),
      value: Schema.optional(
        Schema.Union([
          Schema.Literals(["off", "flexible", "full", "strict", "origin_pull"]),
          Schema.Null,
        ]),
      ),
    }),
  ) as unknown as Schema.Schema<Sslparam>;

export interface Target {
  constraint?: Constraint | null;
  target?: "url" | null;
}

export const Target: Schema.Schema<Target> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      constraint: Schema.optional(Schema.Union([Constraint, Schema.Null])),
      target: Schema.optional(
        Schema.Union([Schema.Literal("url"), Schema.Null]),
      ),
    }),
  ) as unknown as Schema.Schema<Target>;

export interface TargetParam {
  constraint?: Constraint | null;
  target?: "url" | null;
}

export const TargetParam: Schema.Schema<TargetParam> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      constraint: Schema.optional(Schema.Union([Constraint, Schema.Null])),
      target: Schema.optional(
        Schema.Union([Schema.Literal("url"), Schema.Null]),
      ),
    }),
  ) as unknown as Schema.Schema<TargetParam>;

export interface TrueClientIPHeader {
  id?: "true_client_ip_header" | null;
  value?: "on" | "off" | null;
}

export const TrueClientIPHeader: Schema.Schema<TrueClientIPHeader> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      id: Schema.optional(
        Schema.Union([Schema.Literal("true_client_ip_header"), Schema.Null]),
      ),
      value: Schema.optional(
        Schema.Union([Schema.Literals(["on", "off"]), Schema.Null]),
      ),
    }),
  ) as unknown as Schema.Schema<TrueClientIPHeader>;

export interface TrueClientIPHeaderParam {
  id?: "true_client_ip_header" | null;
  value?: "on" | "off" | null;
}

export const TrueClientIPHeaderParam: Schema.Schema<TrueClientIPHeaderParam> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      id: Schema.optional(
        Schema.Union([Schema.Literal("true_client_ip_header"), Schema.Null]),
      ),
      value: Schema.optional(
        Schema.Union([Schema.Literals(["on", "off"]), Schema.Null]),
      ),
    }),
  ) as unknown as Schema.Schema<TrueClientIPHeaderParam>;

export interface User {
  deviceType?: boolean | null;
  geo?: boolean | null;
  lang?: boolean | null;
}

export const User: Schema.Schema<User> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      deviceType: Schema.optional(Schema.Union([Schema.Boolean, Schema.Null])),
      geo: Schema.optional(Schema.Union([Schema.Boolean, Schema.Null])),
      lang: Schema.optional(Schema.Union([Schema.Boolean, Schema.Null])),
    }).pipe(
      Schema.encodeKeys({
        deviceType: "device_type",
        geo: "geo",
        lang: "lang",
      }),
    ),
  ) as unknown as Schema.Schema<User>;

export interface Value {
  cookie?: Cookie | null;
  header?: Header | null;
  host?: Host | null;
  queryString?: QueryString | null;
  user?: User | null;
}

export const Value: Schema.Schema<Value> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      cookie: Schema.optional(Schema.Union([Cookie, Schema.Null])),
      header: Schema.optional(Schema.Union([Header, Schema.Null])),
      host: Schema.optional(Schema.Union([Host, Schema.Null])),
      queryString: Schema.optional(Schema.Union([QueryString, Schema.Null])),
      user: Schema.optional(Schema.Union([User, Schema.Null])),
    }).pipe(
      Schema.encodeKeys({
        cookie: "cookie",
        header: "header",
        host: "host",
        queryString: "query_string",
        user: "user",
      }),
    ),
  ) as unknown as Schema.Schema<Value>;

export interface Waf {
  id?: "waf" | null;
  value?: "on" | "off" | null;
}

export const Waf: Schema.Schema<Waf> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      id: Schema.optional(Schema.Union([Schema.Literal("waf"), Schema.Null])),
      value: Schema.optional(
        Schema.Union([Schema.Literals(["on", "off"]), Schema.Null]),
      ),
    }),
  ) as unknown as Schema.Schema<Waf>;

export interface Wafparam {
  id?: "waf" | null;
  value?: "on" | "off" | null;
}

export const Wafparam: Schema.Schema<Wafparam> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      id: Schema.optional(Schema.Union([Schema.Literal("waf"), Schema.Null])),
      value: Schema.optional(
        Schema.Union([Schema.Literals(["on", "off"]), Schema.Null]),
      ),
    }),
  ) as unknown as Schema.Schema<Wafparam>;

// =============================================================================
// PageRule
// =============================================================================

export interface GetPageRuleRequest {
  pageruleId: string;
  /** Identifier. */
  zoneId: string;
}

export const GetPageRuleRequest = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  pageruleId: Schema.String.pipe(T.HttpPath("pageruleId")),
  zoneId: Schema.String.pipe(T.HttpPath("zone_id")),
}).pipe(
  T.Http({ method: "GET", path: "/zones/{zone_id}/pagerules/{pageruleId}" }),
) as unknown as Schema.Schema<GetPageRuleRequest>;

export interface GetPageRuleResponse {
  /** Identifier. */
  id: string;
  /** The set of actions to perform if the targets of this rule match the request. Actions can redirect to another URL or override settings, but not both. */
  actions: (
    | AlwaysUseHTTPS
    | AutomaticHTTPSRewrites
    | BrowserCacheTTL
    | BrowserCheck
    | BypassCacheOnCookie
    | CacheByDeviceType
    | CacheDeceptionArmor
    | CacheKeyFields
    | CacheLevel
    | CacheOnCookie
    | CacheTTLByStatus
    | DisableApps
    | DisablePerformance
    | DisableSecurity
    | DisableZaraz
    | EdgeCacheTTL
    | EmailObfuscation
    | ExplicitCacheControl
    | ForwardingURL
    | HostHeaderOverride
    | Ipgeolocation
    | Mirage
    | OpportunisticEncryption
    | OriginErrorPagePassThru
    | Polish
    | ResolveOverride
    | RespectStrongEtag
    | ResponseBuffering
    | RocketLoader
    | SecurityLevel
    | SortQueryStringForCache
    | Ssl
    | TrueClientIPHeader
    | Waf
  )[];
  /** The timestamp of when the Page Rule was created. */
  createdOn: string;
  /** The timestamp of when the Page Rule was last modified. */
  modifiedOn: string;
  /** The priority of the rule, used to define which Page Rule is processed over another. A higher number indicates a higher priority. For example, if you have a catch-all Page Rule (rule A: `/images/ `) bu */
  priority: number;
  /** The status of the Page Rule. */
  status: "active" | "disabled";
  /** The rule targets to evaluate on each request. */
  targets: Target[];
}

export const GetPageRuleResponse = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  id: Schema.String,
  actions: Schema.Array(
    Schema.Union([
      AlwaysUseHTTPS,
      AutomaticHTTPSRewrites,
      BrowserCacheTTL,
      BrowserCheck,
      BypassCacheOnCookie,
      CacheByDeviceType,
      CacheDeceptionArmor,
      CacheKeyFields,
      CacheLevel,
      CacheOnCookie,
      CacheTTLByStatus,
      DisableApps,
      DisablePerformance,
      DisableSecurity,
      DisableZaraz,
      EdgeCacheTTL,
      EmailObfuscation,
      ExplicitCacheControl,
      ForwardingURL,
      HostHeaderOverride,
      Ipgeolocation,
      Mirage,
      OpportunisticEncryption,
      OriginErrorPagePassThru,
      Polish,
      ResolveOverride,
      RespectStrongEtag,
      ResponseBuffering,
      RocketLoader,
      SecurityLevel,
      SortQueryStringForCache,
      Ssl,
      TrueClientIPHeader,
      Waf,
    ]),
  ),
  createdOn: Schema.String,
  modifiedOn: Schema.String,
  priority: Schema.Number,
  status: Schema.Literals(["active", "disabled"]),
  targets: Schema.Array(Target),
})
  .pipe(
    Schema.encodeKeys({
      id: "id",
      actions: "actions",
      createdOn: "created_on",
      modifiedOn: "modified_on",
      priority: "priority",
      status: "status",
      targets: "targets",
    }),
  )
  .pipe(
    T.ResponsePath("result"),
  ) as unknown as Schema.Schema<GetPageRuleResponse>;

export type GetPageRuleError = DefaultErrors;

export const getPageRule: API.OperationMethod<
  GetPageRuleRequest,
  GetPageRuleResponse,
  GetPageRuleError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetPageRuleRequest,
  output: GetPageRuleResponse,
  errors: [],
}));

export interface ListPageRulesRequest {
  /** Path param: Identifier. */
  zoneId: string;
  /** Query param: The direction used to sort returned Page Rules. */
  direction?: "asc" | "desc";
  /** Query param: When set to `all`, all the search requirements must match. When set to `any`, only one of the search requirements has to match. */
  match?: "any" | "all";
  /** Query param: The field used to sort returned Page Rules. */
  order?: "status" | "priority";
  /** Query param: The status of the Page Rule. */
  status?: "active" | "disabled";
}

export const ListPageRulesRequest = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  zoneId: Schema.String.pipe(T.HttpPath("zone_id")),
  direction: Schema.optional(Schema.Literals(["asc", "desc"])).pipe(
    T.HttpQuery("direction"),
  ),
  match: Schema.optional(Schema.Literals(["any", "all"])).pipe(
    T.HttpQuery("match"),
  ),
  order: Schema.optional(Schema.Literals(["status", "priority"])).pipe(
    T.HttpQuery("order"),
  ),
  status: Schema.optional(Schema.Literals(["active", "disabled"])).pipe(
    T.HttpQuery("status"),
  ),
}).pipe(
  T.Http({ method: "GET", path: "/zones/{zone_id}/pagerules" }),
) as unknown as Schema.Schema<ListPageRulesRequest>;

export type ListPageRulesResponse = {
  id: string;
  actions: (
    | AlwaysUseHTTPS
    | AutomaticHTTPSRewrites
    | BrowserCacheTTL
    | BrowserCheck
    | BypassCacheOnCookie
    | CacheByDeviceType
    | CacheDeceptionArmor
    | CacheKeyFields
    | CacheLevel
    | CacheOnCookie
    | CacheTTLByStatus
    | DisableApps
    | DisablePerformance
    | DisableSecurity
    | DisableZaraz
    | EdgeCacheTTL
    | EmailObfuscation
    | ExplicitCacheControl
    | ForwardingURL
    | HostHeaderOverride
    | Ipgeolocation
    | Mirage
    | OpportunisticEncryption
    | OriginErrorPagePassThru
    | Polish
    | ResolveOverride
    | RespectStrongEtag
    | ResponseBuffering
    | RocketLoader
    | SecurityLevel
    | SortQueryStringForCache
    | Ssl
    | TrueClientIPHeader
    | Waf
  )[];
  createdOn: string;
  modifiedOn: string;
  priority: number;
  status: "active" | "disabled";
  targets: Target[];
}[];

export const ListPageRulesResponse = /*@__PURE__*/ /*#__PURE__*/ Schema.Array(
  Schema.Struct({
    id: Schema.String,
    actions: Schema.Array(
      Schema.Union([
        AlwaysUseHTTPS,
        AutomaticHTTPSRewrites,
        BrowserCacheTTL,
        BrowserCheck,
        BypassCacheOnCookie,
        CacheByDeviceType,
        CacheDeceptionArmor,
        CacheKeyFields,
        CacheLevel,
        CacheOnCookie,
        CacheTTLByStatus,
        DisableApps,
        DisablePerformance,
        DisableSecurity,
        DisableZaraz,
        EdgeCacheTTL,
        EmailObfuscation,
        ExplicitCacheControl,
        ForwardingURL,
        HostHeaderOverride,
        Ipgeolocation,
        Mirage,
        OpportunisticEncryption,
        OriginErrorPagePassThru,
        Polish,
        ResolveOverride,
        RespectStrongEtag,
        ResponseBuffering,
        RocketLoader,
        SecurityLevel,
        SortQueryStringForCache,
        Ssl,
        TrueClientIPHeader,
        Waf,
      ]),
    ),
    createdOn: Schema.String,
    modifiedOn: Schema.String,
    priority: Schema.Number,
    status: Schema.Literals(["active", "disabled"]),
    targets: Schema.Array(Target),
  }).pipe(
    Schema.encodeKeys({
      id: "id",
      actions: "actions",
      createdOn: "created_on",
      modifiedOn: "modified_on",
      priority: "priority",
      status: "status",
      targets: "targets",
    }),
  ),
).pipe(
  T.ResponsePath("result"),
) as unknown as Schema.Schema<ListPageRulesResponse>;

export type ListPageRulesError = DefaultErrors;

export const listPageRules: API.OperationMethod<
  ListPageRulesRequest,
  ListPageRulesResponse,
  ListPageRulesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: ListPageRulesRequest,
  output: ListPageRulesResponse,
  errors: [],
}));

export interface CreatePageRuleRequest {
  /** Path param: Identifier. */
  zoneId: string;
  /** Body param: The set of actions to perform if the targets of this rule match the request. Actions can redirect to another URL or override settings, but not both. */
  actions: (
    | AlwaysUseHTTPS
    | AutomaticHTTPSRewrites
    | BrowserCacheTTL
    | BrowserCheck
    | BypassCacheOnCookie
    | CacheByDeviceType
    | CacheDeceptionArmor
    | CacheKeyFields
    | CacheLevel
    | CacheOnCookie
    | CacheTTLByStatus
    | DisableApps
    | DisablePerformance
    | DisableSecurity
    | DisableZaraz
    | EdgeCacheTTL
    | EmailObfuscation
    | ExplicitCacheControl
    | ForwardingURL
    | HostHeaderOverride
    | Ipgeolocation
    | Mirage
    | OpportunisticEncryption
    | OriginErrorPagePassThru
    | Polish
    | ResolveOverride
    | RespectStrongEtag
    | ResponseBuffering
    | RocketLoader
    | SecurityLevel
    | SortQueryStringForCache
    | Ssl
    | TrueClientIPHeader
    | Waf
  )[];
  /** Body param: The rule targets to evaluate on each request. */
  targets: Target[];
  /** Body param: The priority of the rule, used to define which Page Rule is processed over another. A higher number indicates a higher priority. For example, if you have a catch-all Page Rule (rule A: `/i */
  priority?: number;
  /** Body param: The status of the Page Rule. */
  status?: "active" | "disabled";
}

export const CreatePageRuleRequest = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  zoneId: Schema.String.pipe(T.HttpPath("zone_id")),
  actions: Schema.Array(
    Schema.Union([
      AlwaysUseHTTPS,
      AutomaticHTTPSRewrites,
      BrowserCacheTTL,
      BrowserCheck,
      BypassCacheOnCookie,
      CacheByDeviceType,
      CacheDeceptionArmor,
      CacheKeyFields,
      CacheLevel,
      CacheOnCookie,
      CacheTTLByStatus,
      DisableApps,
      DisablePerformance,
      DisableSecurity,
      DisableZaraz,
      EdgeCacheTTL,
      EmailObfuscation,
      ExplicitCacheControl,
      ForwardingURL,
      HostHeaderOverride,
      Ipgeolocation,
      Mirage,
      OpportunisticEncryption,
      OriginErrorPagePassThru,
      Polish,
      ResolveOverride,
      RespectStrongEtag,
      ResponseBuffering,
      RocketLoader,
      SecurityLevel,
      SortQueryStringForCache,
      Ssl,
      TrueClientIPHeader,
      Waf,
    ]),
  ),
  targets: Schema.Array(Target),
  priority: Schema.optional(Schema.Number),
  status: Schema.optional(Schema.Literals(["active", "disabled"])),
}).pipe(
  T.Http({ method: "POST", path: "/zones/{zone_id}/pagerules" }),
) as unknown as Schema.Schema<CreatePageRuleRequest>;

export interface CreatePageRuleResponse {
  /** Identifier. */
  id: string;
  /** The set of actions to perform if the targets of this rule match the request. Actions can redirect to another URL or override settings, but not both. */
  actions: (
    | AlwaysUseHTTPS
    | AutomaticHTTPSRewrites
    | BrowserCacheTTL
    | BrowserCheck
    | BypassCacheOnCookie
    | CacheByDeviceType
    | CacheDeceptionArmor
    | CacheKeyFields
    | CacheLevel
    | CacheOnCookie
    | CacheTTLByStatus
    | DisableApps
    | DisablePerformance
    | DisableSecurity
    | DisableZaraz
    | EdgeCacheTTL
    | EmailObfuscation
    | ExplicitCacheControl
    | ForwardingURL
    | HostHeaderOverride
    | Ipgeolocation
    | Mirage
    | OpportunisticEncryption
    | OriginErrorPagePassThru
    | Polish
    | ResolveOverride
    | RespectStrongEtag
    | ResponseBuffering
    | RocketLoader
    | SecurityLevel
    | SortQueryStringForCache
    | Ssl
    | TrueClientIPHeader
    | Waf
  )[];
  /** The timestamp of when the Page Rule was created. */
  createdOn: string;
  /** The timestamp of when the Page Rule was last modified. */
  modifiedOn: string;
  /** The priority of the rule, used to define which Page Rule is processed over another. A higher number indicates a higher priority. For example, if you have a catch-all Page Rule (rule A: `/images/ `) bu */
  priority: number;
  /** The status of the Page Rule. */
  status: "active" | "disabled";
  /** The rule targets to evaluate on each request. */
  targets: Target[];
}

export const CreatePageRuleResponse = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
  {
    id: Schema.String,
    actions: Schema.Array(
      Schema.Union([
        AlwaysUseHTTPS,
        AutomaticHTTPSRewrites,
        BrowserCacheTTL,
        BrowserCheck,
        BypassCacheOnCookie,
        CacheByDeviceType,
        CacheDeceptionArmor,
        CacheKeyFields,
        CacheLevel,
        CacheOnCookie,
        CacheTTLByStatus,
        DisableApps,
        DisablePerformance,
        DisableSecurity,
        DisableZaraz,
        EdgeCacheTTL,
        EmailObfuscation,
        ExplicitCacheControl,
        ForwardingURL,
        HostHeaderOverride,
        Ipgeolocation,
        Mirage,
        OpportunisticEncryption,
        OriginErrorPagePassThru,
        Polish,
        ResolveOverride,
        RespectStrongEtag,
        ResponseBuffering,
        RocketLoader,
        SecurityLevel,
        SortQueryStringForCache,
        Ssl,
        TrueClientIPHeader,
        Waf,
      ]),
    ),
    createdOn: Schema.String,
    modifiedOn: Schema.String,
    priority: Schema.Number,
    status: Schema.Literals(["active", "disabled"]),
    targets: Schema.Array(Target),
  },
)
  .pipe(
    Schema.encodeKeys({
      id: "id",
      actions: "actions",
      createdOn: "created_on",
      modifiedOn: "modified_on",
      priority: "priority",
      status: "status",
      targets: "targets",
    }),
  )
  .pipe(
    T.ResponsePath("result"),
  ) as unknown as Schema.Schema<CreatePageRuleResponse>;

export type CreatePageRuleError = DefaultErrors;

export const createPageRule: API.OperationMethod<
  CreatePageRuleRequest,
  CreatePageRuleResponse,
  CreatePageRuleError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: CreatePageRuleRequest,
  output: CreatePageRuleResponse,
  errors: [],
}));

export interface UpdatePageRuleRequest {
  pageruleId: string;
  /** Path param: Identifier. */
  zoneId: string;
  /** Body param: The set of actions to perform if the targets of this rule match the request. Actions can redirect to another URL or override settings, but not both. */
  actions: (
    | AlwaysUseHTTPS
    | AutomaticHTTPSRewrites
    | BrowserCacheTTL
    | BrowserCheck
    | BypassCacheOnCookie
    | CacheByDeviceType
    | CacheDeceptionArmor
    | CacheKeyFields
    | CacheLevel
    | CacheOnCookie
    | CacheTTLByStatus
    | DisableApps
    | DisablePerformance
    | DisableSecurity
    | DisableZaraz
    | EdgeCacheTTL
    | EmailObfuscation
    | ExplicitCacheControl
    | ForwardingURL
    | HostHeaderOverride
    | Ipgeolocation
    | Mirage
    | OpportunisticEncryption
    | OriginErrorPagePassThru
    | Polish
    | ResolveOverride
    | RespectStrongEtag
    | ResponseBuffering
    | RocketLoader
    | SecurityLevel
    | SortQueryStringForCache
    | Ssl
    | TrueClientIPHeader
    | Waf
  )[];
  /** Body param: The rule targets to evaluate on each request. */
  targets: Target[];
  /** Body param: The priority of the rule, used to define which Page Rule is processed over another. A higher number indicates a higher priority. For example, if you have a catch-all Page Rule (rule A: `/i */
  priority?: number;
  /** Body param: The status of the Page Rule. */
  status?: "active" | "disabled";
}

export const UpdatePageRuleRequest = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  pageruleId: Schema.String.pipe(T.HttpPath("pageruleId")),
  zoneId: Schema.String.pipe(T.HttpPath("zone_id")),
  actions: Schema.Array(
    Schema.Union([
      AlwaysUseHTTPS,
      AutomaticHTTPSRewrites,
      BrowserCacheTTL,
      BrowserCheck,
      BypassCacheOnCookie,
      CacheByDeviceType,
      CacheDeceptionArmor,
      CacheKeyFields,
      CacheLevel,
      CacheOnCookie,
      CacheTTLByStatus,
      DisableApps,
      DisablePerformance,
      DisableSecurity,
      DisableZaraz,
      EdgeCacheTTL,
      EmailObfuscation,
      ExplicitCacheControl,
      ForwardingURL,
      HostHeaderOverride,
      Ipgeolocation,
      Mirage,
      OpportunisticEncryption,
      OriginErrorPagePassThru,
      Polish,
      ResolveOverride,
      RespectStrongEtag,
      ResponseBuffering,
      RocketLoader,
      SecurityLevel,
      SortQueryStringForCache,
      Ssl,
      TrueClientIPHeader,
      Waf,
    ]),
  ),
  targets: Schema.Array(Target),
  priority: Schema.optional(Schema.Number),
  status: Schema.optional(Schema.Literals(["active", "disabled"])),
}).pipe(
  T.Http({ method: "PUT", path: "/zones/{zone_id}/pagerules/{pageruleId}" }),
) as unknown as Schema.Schema<UpdatePageRuleRequest>;

export interface UpdatePageRuleResponse {
  /** Identifier. */
  id: string;
  /** The set of actions to perform if the targets of this rule match the request. Actions can redirect to another URL or override settings, but not both. */
  actions: (
    | AlwaysUseHTTPS
    | AutomaticHTTPSRewrites
    | BrowserCacheTTL
    | BrowserCheck
    | BypassCacheOnCookie
    | CacheByDeviceType
    | CacheDeceptionArmor
    | CacheKeyFields
    | CacheLevel
    | CacheOnCookie
    | CacheTTLByStatus
    | DisableApps
    | DisablePerformance
    | DisableSecurity
    | DisableZaraz
    | EdgeCacheTTL
    | EmailObfuscation
    | ExplicitCacheControl
    | ForwardingURL
    | HostHeaderOverride
    | Ipgeolocation
    | Mirage
    | OpportunisticEncryption
    | OriginErrorPagePassThru
    | Polish
    | ResolveOverride
    | RespectStrongEtag
    | ResponseBuffering
    | RocketLoader
    | SecurityLevel
    | SortQueryStringForCache
    | Ssl
    | TrueClientIPHeader
    | Waf
  )[];
  /** The timestamp of when the Page Rule was created. */
  createdOn: string;
  /** The timestamp of when the Page Rule was last modified. */
  modifiedOn: string;
  /** The priority of the rule, used to define which Page Rule is processed over another. A higher number indicates a higher priority. For example, if you have a catch-all Page Rule (rule A: `/images/ `) bu */
  priority: number;
  /** The status of the Page Rule. */
  status: "active" | "disabled";
  /** The rule targets to evaluate on each request. */
  targets: Target[];
}

export const UpdatePageRuleResponse = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
  {
    id: Schema.String,
    actions: Schema.Array(
      Schema.Union([
        AlwaysUseHTTPS,
        AutomaticHTTPSRewrites,
        BrowserCacheTTL,
        BrowserCheck,
        BypassCacheOnCookie,
        CacheByDeviceType,
        CacheDeceptionArmor,
        CacheKeyFields,
        CacheLevel,
        CacheOnCookie,
        CacheTTLByStatus,
        DisableApps,
        DisablePerformance,
        DisableSecurity,
        DisableZaraz,
        EdgeCacheTTL,
        EmailObfuscation,
        ExplicitCacheControl,
        ForwardingURL,
        HostHeaderOverride,
        Ipgeolocation,
        Mirage,
        OpportunisticEncryption,
        OriginErrorPagePassThru,
        Polish,
        ResolveOverride,
        RespectStrongEtag,
        ResponseBuffering,
        RocketLoader,
        SecurityLevel,
        SortQueryStringForCache,
        Ssl,
        TrueClientIPHeader,
        Waf,
      ]),
    ),
    createdOn: Schema.String,
    modifiedOn: Schema.String,
    priority: Schema.Number,
    status: Schema.Literals(["active", "disabled"]),
    targets: Schema.Array(Target),
  },
)
  .pipe(
    Schema.encodeKeys({
      id: "id",
      actions: "actions",
      createdOn: "created_on",
      modifiedOn: "modified_on",
      priority: "priority",
      status: "status",
      targets: "targets",
    }),
  )
  .pipe(
    T.ResponsePath("result"),
  ) as unknown as Schema.Schema<UpdatePageRuleResponse>;

export type UpdatePageRuleError = DefaultErrors;

export const updatePageRule: API.OperationMethod<
  UpdatePageRuleRequest,
  UpdatePageRuleResponse,
  UpdatePageRuleError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: UpdatePageRuleRequest,
  output: UpdatePageRuleResponse,
  errors: [],
}));

export interface PatchPageRuleRequest {
  pageruleId: string;
  /** Path param: Identifier. */
  zoneId: string;
  /** Body param: The set of actions to perform if the targets of this rule match the request. Actions can redirect to another URL or override settings, but not both. */
  actions?: (
    | AlwaysUseHTTPS
    | AutomaticHTTPSRewrites
    | BrowserCacheTTL
    | BrowserCheck
    | BypassCacheOnCookie
    | CacheByDeviceType
    | CacheDeceptionArmor
    | CacheKeyFields
    | CacheLevel
    | CacheOnCookie
    | CacheTTLByStatus
    | DisableApps
    | DisablePerformance
    | DisableSecurity
    | DisableZaraz
    | EdgeCacheTTL
    | EmailObfuscation
    | ExplicitCacheControl
    | ForwardingURL
    | HostHeaderOverride
    | Ipgeolocation
    | Mirage
    | OpportunisticEncryption
    | OriginErrorPagePassThru
    | Polish
    | ResolveOverride
    | RespectStrongEtag
    | ResponseBuffering
    | RocketLoader
    | SecurityLevel
    | SortQueryStringForCache
    | Ssl
    | TrueClientIPHeader
    | Waf
  )[];
  /** Body param: The priority of the rule, used to define which Page Rule is processed over another. A higher number indicates a higher priority. For example, if you have a catch-all Page Rule (rule A: `/i */
  priority?: number;
  /** Body param: The status of the Page Rule. */
  status?: "active" | "disabled";
  /** Body param: The rule targets to evaluate on each request. */
  targets?: Target[];
}

export const PatchPageRuleRequest = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  pageruleId: Schema.String.pipe(T.HttpPath("pageruleId")),
  zoneId: Schema.String.pipe(T.HttpPath("zone_id")),
  actions: Schema.optional(
    Schema.Array(
      Schema.Union([
        AlwaysUseHTTPS,
        AutomaticHTTPSRewrites,
        BrowserCacheTTL,
        BrowserCheck,
        BypassCacheOnCookie,
        CacheByDeviceType,
        CacheDeceptionArmor,
        CacheKeyFields,
        CacheLevel,
        CacheOnCookie,
        CacheTTLByStatus,
        DisableApps,
        DisablePerformance,
        DisableSecurity,
        DisableZaraz,
        EdgeCacheTTL,
        EmailObfuscation,
        ExplicitCacheControl,
        ForwardingURL,
        HostHeaderOverride,
        Ipgeolocation,
        Mirage,
        OpportunisticEncryption,
        OriginErrorPagePassThru,
        Polish,
        ResolveOverride,
        RespectStrongEtag,
        ResponseBuffering,
        RocketLoader,
        SecurityLevel,
        SortQueryStringForCache,
        Ssl,
        TrueClientIPHeader,
        Waf,
      ]),
    ),
  ),
  priority: Schema.optional(Schema.Number),
  status: Schema.optional(Schema.Literals(["active", "disabled"])),
  targets: Schema.optional(Schema.Array(Target)),
}).pipe(
  T.Http({ method: "PATCH", path: "/zones/{zone_id}/pagerules/{pageruleId}" }),
) as unknown as Schema.Schema<PatchPageRuleRequest>;

export interface PatchPageRuleResponse {
  /** Identifier. */
  id: string;
  /** The set of actions to perform if the targets of this rule match the request. Actions can redirect to another URL or override settings, but not both. */
  actions: (
    | AlwaysUseHTTPS
    | AutomaticHTTPSRewrites
    | BrowserCacheTTL
    | BrowserCheck
    | BypassCacheOnCookie
    | CacheByDeviceType
    | CacheDeceptionArmor
    | CacheKeyFields
    | CacheLevel
    | CacheOnCookie
    | CacheTTLByStatus
    | DisableApps
    | DisablePerformance
    | DisableSecurity
    | DisableZaraz
    | EdgeCacheTTL
    | EmailObfuscation
    | ExplicitCacheControl
    | ForwardingURL
    | HostHeaderOverride
    | Ipgeolocation
    | Mirage
    | OpportunisticEncryption
    | OriginErrorPagePassThru
    | Polish
    | ResolveOverride
    | RespectStrongEtag
    | ResponseBuffering
    | RocketLoader
    | SecurityLevel
    | SortQueryStringForCache
    | Ssl
    | TrueClientIPHeader
    | Waf
  )[];
  /** The timestamp of when the Page Rule was created. */
  createdOn: string;
  /** The timestamp of when the Page Rule was last modified. */
  modifiedOn: string;
  /** The priority of the rule, used to define which Page Rule is processed over another. A higher number indicates a higher priority. For example, if you have a catch-all Page Rule (rule A: `/images/ `) bu */
  priority: number;
  /** The status of the Page Rule. */
  status: "active" | "disabled";
  /** The rule targets to evaluate on each request. */
  targets: Target[];
}

export const PatchPageRuleResponse = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  id: Schema.String,
  actions: Schema.Array(
    Schema.Union([
      AlwaysUseHTTPS,
      AutomaticHTTPSRewrites,
      BrowserCacheTTL,
      BrowserCheck,
      BypassCacheOnCookie,
      CacheByDeviceType,
      CacheDeceptionArmor,
      CacheKeyFields,
      CacheLevel,
      CacheOnCookie,
      CacheTTLByStatus,
      DisableApps,
      DisablePerformance,
      DisableSecurity,
      DisableZaraz,
      EdgeCacheTTL,
      EmailObfuscation,
      ExplicitCacheControl,
      ForwardingURL,
      HostHeaderOverride,
      Ipgeolocation,
      Mirage,
      OpportunisticEncryption,
      OriginErrorPagePassThru,
      Polish,
      ResolveOverride,
      RespectStrongEtag,
      ResponseBuffering,
      RocketLoader,
      SecurityLevel,
      SortQueryStringForCache,
      Ssl,
      TrueClientIPHeader,
      Waf,
    ]),
  ),
  createdOn: Schema.String,
  modifiedOn: Schema.String,
  priority: Schema.Number,
  status: Schema.Literals(["active", "disabled"]),
  targets: Schema.Array(Target),
})
  .pipe(
    Schema.encodeKeys({
      id: "id",
      actions: "actions",
      createdOn: "created_on",
      modifiedOn: "modified_on",
      priority: "priority",
      status: "status",
      targets: "targets",
    }),
  )
  .pipe(
    T.ResponsePath("result"),
  ) as unknown as Schema.Schema<PatchPageRuleResponse>;

export type PatchPageRuleError = DefaultErrors;

export const patchPageRule: API.OperationMethod<
  PatchPageRuleRequest,
  PatchPageRuleResponse,
  PatchPageRuleError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: PatchPageRuleRequest,
  output: PatchPageRuleResponse,
  errors: [],
}));

export interface DeletePageRuleRequest {
  pageruleId: string;
  /** Identifier. */
  zoneId: string;
}

export const DeletePageRuleRequest = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  pageruleId: Schema.String.pipe(T.HttpPath("pageruleId")),
  zoneId: Schema.String.pipe(T.HttpPath("zone_id")),
}).pipe(
  T.Http({ method: "DELETE", path: "/zones/{zone_id}/pagerules/{pageruleId}" }),
) as unknown as Schema.Schema<DeletePageRuleRequest>;

export interface DeletePageRuleResponse {
  /** Identifier. */
  id: string;
}

export const DeletePageRuleResponse = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
  {
    id: Schema.String,
  },
).pipe(
  T.ResponsePath("result"),
) as unknown as Schema.Schema<DeletePageRuleResponse>;

export type DeletePageRuleError = DefaultErrors;

export const deletePageRule: API.OperationMethod<
  DeletePageRuleRequest,
  DeletePageRuleResponse,
  DeletePageRuleError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: DeletePageRuleRequest,
  output: DeletePageRuleResponse,
  errors: [],
}));
