/**
 * Cloudflare PAGE-RULES API
 *
 * Generated from Cloudflare TypeScript SDK.
 * DO NOT EDIT - regenerate with: bun scripts/generate.ts --service page-rules
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

export class InvalidZoneIdentifier extends T.applyErrorMatchers(
  Schema.TaggedErrorClass<InvalidZoneIdentifier>()("InvalidZoneIdentifier", {
    code: Schema.Number,
    message: Schema.String,
  }),
  [{ status: 400, message: { includes: "Invalid zone identifier" } }],
) {}

export class PageRuleNotFound extends T.applyErrorMatchers(
  Schema.TaggedErrorClass<PageRuleNotFound>()("PageRuleNotFound", {
    code: Schema.Number,
    message: Schema.String,
  }),
  [{ status: 404 }],
) {}

// =============================================================================
// Shared nested schemas (hoisted, module-private)
// =============================================================================

interface AlwaysUseHTTPS {
  /** If enabled, any ` http://`` URL is converted to  `https://` through a 301 redirect. */
  id?: "always_use_https" | null;
}
const AlwaysUseHTTPS = /*@__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    id: Schema.optional(
      Schema.Union([Schema.Literal("always_use_https"), Schema.Null]),
    ),
  }),
) as unknown as Schema.Codec<AlwaysUseHTTPS>;

interface AutomaticHTTPSRewrites {
  /** Turn on or off Automatic HTTPS Rewrites. */
  id?: "automatic_https_rewrites" | null;
  /** The status of Automatic HTTPS Rewrites. */
  value?: "on" | "off" | (string & {}) | null;
}
const AutomaticHTTPSRewrites = /*@__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    id: Schema.optional(
      Schema.Union([Schema.Literal("automatic_https_rewrites"), Schema.Null]),
    ),
    value: Schema.optional(
      Schema.Union([
        Schema.Union([Schema.Literals(["on", "off"]), Schema.String]),
        Schema.Null,
      ]),
    ),
  }),
) as unknown as Schema.Codec<AutomaticHTTPSRewrites>;

interface BrowserCacheTTL {
  /** Control how long resources cached by client browsers remain valid. */
  id?: "browser_cache_ttl" | null;
  /** The number of seconds to cache resources for. Setting this to 0 enables "Respect Existing Headers". */
  value?: number | null;
}
const BrowserCacheTTL = /*@__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    id: Schema.optional(
      Schema.Union([Schema.Literal("browser_cache_ttl"), Schema.Null]),
    ),
    value: Schema.optional(Schema.Union([Schema.Number, Schema.Null])),
  }),
) as unknown as Schema.Codec<BrowserCacheTTL>;

interface BrowserCheck {
  /** Inspect the visitor's browser for headers commonly associated with spammers and certain bots. */
  id?: "browser_check" | null;
  /** The status of Browser Integrity Check. */
  value?: "on" | "off" | (string & {}) | null;
}
const BrowserCheck = /*@__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    id: Schema.optional(
      Schema.Union([Schema.Literal("browser_check"), Schema.Null]),
    ),
    value: Schema.optional(
      Schema.Union([
        Schema.Union([Schema.Literals(["on", "off"]), Schema.String]),
        Schema.Null,
      ]),
    ),
  }),
) as unknown as Schema.Codec<BrowserCheck>;

interface BypassCacheOnCookie {
  /** Bypass cache and fetch resources from the origin server if a regular expression matches against a cookie name present in the request. */
  id?: "bypass_cache_on_cookie" | null;
  /** The regular expression to use for matching cookie names in the request. Refer to [Bypass Cache on Cookie setting](https://developers.cloudflare.com/rules/page-rules/reference/additional-reference/#byp */
  value?: string | null;
}
const BypassCacheOnCookie = /*@__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    id: Schema.optional(
      Schema.Union([Schema.Literal("bypass_cache_on_cookie"), Schema.Null]),
    ),
    value: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
  }),
) as unknown as Schema.Codec<BypassCacheOnCookie>;

interface CacheByDeviceType {
  /** Separate cached content based on the visitor's device type. */
  id?: "cache_by_device_type" | null;
  /** The status of Cache By Device Type. */
  value?: "on" | "off" | (string & {}) | null;
}
const CacheByDeviceType = /*@__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    id: Schema.optional(
      Schema.Union([Schema.Literal("cache_by_device_type"), Schema.Null]),
    ),
    value: Schema.optional(
      Schema.Union([
        Schema.Union([Schema.Literals(["on", "off"]), Schema.String]),
        Schema.Null,
      ]),
    ),
  }),
) as unknown as Schema.Codec<CacheByDeviceType>;

interface CacheDeceptionArmor {
  /** Protect from web cache deception attacks while still allowing static assets to be cached. This setting verifies that the URL's extension matches the returned `Content-Type`. */
  id?: "cache_deception_armor" | null;
  /** The status of Cache Deception Armor. */
  value?: "on" | "off" | (string & {}) | null;
}
const CacheDeceptionArmor = /*@__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    id: Schema.optional(
      Schema.Union([Schema.Literal("cache_deception_armor"), Schema.Null]),
    ),
    value: Schema.optional(
      Schema.Union([
        Schema.Union([Schema.Literals(["on", "off"]), Schema.String]),
        Schema.Null,
      ]),
    ),
  }),
) as unknown as Schema.Codec<CacheDeceptionArmor>;

interface Cookie {
  /** A list of cookies to check for the presence of, without including their actual values. */
  checkPresence?: string[] | null;
  /** A list of cookies to include. */
  include?: string[] | null;
}
const Cookie = /*@__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    checkPresence: Schema.optional(
      Schema.Union([Schema.Array(Schema.String), Schema.Null]),
    ),
    include: Schema.optional(
      Schema.Union([Schema.Array(Schema.String), Schema.Null]),
    ),
  }).pipe(
    Schema.encodeKeys({ checkPresence: "check_presence", include: "include" }),
  ),
) as unknown as Schema.Codec<Cookie>;

interface Header {
  /** A list of headers to check for the presence of, without including their actual values. */
  checkPresence?: string[] | null;
  /** A list of headers to ignore. */
  exclude?: string[] | null;
  /** A list of headers to include. */
  include?: string[] | null;
}
const Header = /*@__PURE__*/ Schema.suspend(() =>
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
) as unknown as Schema.Codec<Header>;

interface Host {
  /** Whether to include the Host header in the HTTP request sent to the origin. */
  resolved?: boolean | null;
}
const Host = /*@__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    resolved: Schema.optional(Schema.Union([Schema.Boolean, Schema.Null])),
  }),
) as unknown as Schema.Codec<Host>;

interface QueryString {
  /** Ignore all query string parameters. */
  exclude?: "*" | string[] | null;
  /** Include all query string parameters. */
  include?: "*" | string[] | null;
}
const QueryString = /*@__PURE__*/ Schema.suspend(() =>
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
) as unknown as Schema.Codec<QueryString>;

interface User {
  /** Classifies a request as `mobile`, `desktop`, or `tablet` based on the User Agent. */
  deviceType?: boolean | null;
  /** Includes the client's country, derived from the IP address. */
  geo?: boolean | null;
  /** Includes the first language code contained in the `Accept-Language` header sent by the client. */
  lang?: boolean | null;
}
const User = /*@__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    deviceType: Schema.optional(Schema.Union([Schema.Boolean, Schema.Null])),
    geo: Schema.optional(Schema.Union([Schema.Boolean, Schema.Null])),
    lang: Schema.optional(Schema.Union([Schema.Boolean, Schema.Null])),
  }).pipe(
    Schema.encodeKeys({ deviceType: "device_type", geo: "geo", lang: "lang" }),
  ),
) as unknown as Schema.Codec<User>;

interface Value {
  /** Controls which cookies appear in the Cache Key. */
  cookie?: {
    checkPresence?: string[] | null;
    include?: string[] | null;
  } | null;
  /** Controls which headers go into the Cache Key. Exactly one of `include` or `exclude` is expected. */
  header?: {
    checkPresence?: string[] | null;
    exclude?: string[] | null;
    include?: string[] | null;
  } | null;
  /** Determines which host header to include in the Cache Key. */
  host?: { resolved?: boolean | null } | null;
  /** Controls which URL query string parameters go into the Cache Key. Exactly one of `include` or `exclude` is expected. */
  queryString?: {
    exclude?: "*" | string[] | null;
    include?: "*" | string[] | null;
  } | null;
  /** Feature fields to add features about the end-user (client) into the Cache Key. */
  user?: {
    deviceType?: boolean | null;
    geo?: boolean | null;
    lang?: boolean | null;
  } | null;
}
const Value = /*@__PURE__*/ Schema.suspend(() =>
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
) as unknown as Schema.Codec<Value>;

interface CacheKeyFields {
  /** Control specifically what variables to include when deciding which resources to cache. This allows customers to determine what to cache based on something other than just the URL. */
  id?: "cache_key_fields" | null;
  value?: {
    cookie?: {
      checkPresence?: string[] | null;
      include?: string[] | null;
    } | null;
    header?: {
      checkPresence?: string[] | null;
      exclude?: string[] | null;
      include?: string[] | null;
    } | null;
    host?: { resolved?: boolean | null } | null;
    queryString?: {
      exclude?: "*" | string[] | null;
      include?: "*" | string[] | null;
    } | null;
    user?: {
      deviceType?: boolean | null;
      geo?: boolean | null;
      lang?: boolean | null;
    } | null;
  } | null;
}
const CacheKeyFields = /*@__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    id: Schema.optional(
      Schema.Union([Schema.Literal("cache_key_fields"), Schema.Null]),
    ),
    value: Schema.optional(Schema.Union([Value, Schema.Null])),
  }),
) as unknown as Schema.Codec<CacheKeyFields>;

interface CacheLevel {
  /** Apply custom caching based on the option selected. */
  id?: "cache_level" | null;
  /** - `bypass`: Cloudflare does not cache. - `basic`: Delivers resources from cache when there is no query string. - `simplified`: Delivers the same resource to everyone independent of the query string. - */
  value?:
    | "bypass"
    | "basic"
    | "simplified"
    | "aggressive"
    | "cache_everything"
    | (string & {})
    | null;
}
const CacheLevel = /*@__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    id: Schema.optional(
      Schema.Union([Schema.Literal("cache_level"), Schema.Null]),
    ),
    value: Schema.optional(
      Schema.Union([
        Schema.Union([
          Schema.Literals([
            "bypass",
            "basic",
            "simplified",
            "aggressive",
            "cache_everything",
          ]),
          Schema.String,
        ]),
        Schema.Null,
      ]),
    ),
  }),
) as unknown as Schema.Codec<CacheLevel>;

interface CacheOnCookie {
  /** Apply the Cache Everything option (Cache Level setting) based on a regular expression match against a cookie name. */
  id?: "cache_on_cookie" | null;
  /** The regular expression to use for matching cookie names in the request. */
  value?: string | null;
}
const CacheOnCookie = /*@__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    id: Schema.optional(
      Schema.Union([Schema.Literal("cache_on_cookie"), Schema.Null]),
    ),
    value: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
  }),
) as unknown as Schema.Codec<CacheOnCookie>;

interface CacheTTLByStatus {
  /** Enterprise customers can set cache time-to-live (TTL) based on the response status from the origin web server. Cache TTL refers to the duration of a resource in the Cloudflare network before being mar */
  id?: "cache_ttl_by_status" | null;
  /** A JSON object containing status codes and their corresponding TTLs. Each key-value pair in the cache TTL by status cache rule has the following syntax  - `status_code`: An integer value such as 200 or */
  value?: Record<string, unknown> | null;
}
const CacheTTLByStatus = /*@__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    id: Schema.optional(
      Schema.Union([Schema.Literal("cache_ttl_by_status"), Schema.Null]),
    ),
    value: Schema.optional(
      Schema.Union([Schema.Record(Schema.String, Schema.Unknown), Schema.Null]),
    ),
  }),
) as unknown as Schema.Codec<CacheTTLByStatus>;

interface DisableApps {
  /** Turn off all active [Cloudflare Apps](https://developers.cloudflare.com/support/more-dashboard-apps/cloudflare-apps/) (deprecated). */
  id?: "disable_apps" | null;
}
const DisableApps = /*@__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    id: Schema.optional(
      Schema.Union([Schema.Literal("disable_apps"), Schema.Null]),
    ),
  }),
) as unknown as Schema.Codec<DisableApps>;

interface DisablePerformance {
  /** Turn off [Rocket Loader](https://developers.cloudflare.com/speed/optimization/content/rocket-loader/), and [Polish](https://developers.cloudflare.com/images/polish/). */
  id?: "disable_performance" | null;
}
const DisablePerformance = /*@__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    id: Schema.optional(
      Schema.Union([Schema.Literal("disable_performance"), Schema.Null]),
    ),
  }),
) as unknown as Schema.Codec<DisablePerformance>;

interface DisableSecurity {
  /** Turn off [Email Obfuscation](https://developers.cloudflare.com/waf/tools/scrape-shield/email-address-obfuscation/), [Rate Limiting (previous version, deprecated)](https://developers.cloudflare.com/waf */
  id?: "disable_security" | null;
}
const DisableSecurity = /*@__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    id: Schema.optional(
      Schema.Union([Schema.Literal("disable_security"), Schema.Null]),
    ),
  }),
) as unknown as Schema.Codec<DisableSecurity>;

interface DisableZaraz {
  /** Turn off [Zaraz](https://developers.cloudflare.com/zaraz/). */
  id?: "disable_zaraz" | null;
}
const DisableZaraz = /*@__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    id: Schema.optional(
      Schema.Union([Schema.Literal("disable_zaraz"), Schema.Null]),
    ),
  }),
) as unknown as Schema.Codec<DisableZaraz>;

interface EdgeCacheTTL {
  /** Specify how long to cache a resource in the Cloudflare global network. _Edge Cache TTL_ is not visible in response headers. */
  id?: "edge_cache_ttl" | null;
  value?: number | null;
}
const EdgeCacheTTL = /*@__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    id: Schema.optional(
      Schema.Union([Schema.Literal("edge_cache_ttl"), Schema.Null]),
    ),
    value: Schema.optional(Schema.Union([Schema.Number, Schema.Null])),
  }),
) as unknown as Schema.Codec<EdgeCacheTTL>;

interface EmailObfuscation {
  /** Turn on or off  Email Obfuscation  . */
  id?: "email_obfuscation" | null;
  /** The status of Email Obfuscation. */
  value?: "on" | "off" | (string & {}) | null;
}
const EmailObfuscation = /*@__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    id: Schema.optional(
      Schema.Union([Schema.Literal("email_obfuscation"), Schema.Null]),
    ),
    value: Schema.optional(
      Schema.Union([
        Schema.Union([Schema.Literals(["on", "off"]), Schema.String]),
        Schema.Null,
      ]),
    ),
  }),
) as unknown as Schema.Codec<EmailObfuscation>;

interface ExplicitCacheControl {
  /** Origin Cache Control is enabled by default for Free, Pro, and Business domains and disabled by default for Enterprise domains. */
  id?: "explicit_cache_control" | null;
  /** The status of Origin Cache Control. */
  value?: "on" | "off" | (string & {}) | null;
}
const ExplicitCacheControl = /*@__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    id: Schema.optional(
      Schema.Union([Schema.Literal("explicit_cache_control"), Schema.Null]),
    ),
    value: Schema.optional(
      Schema.Union([
        Schema.Union([Schema.Literals(["on", "off"]), Schema.String]),
        Schema.Null,
      ]),
    ),
  }),
) as unknown as Schema.Codec<ExplicitCacheControl>;

interface Value2 {
  /** The status code to use for the URL redirect. 301 is a permanent redirect. 302 is a temporary redirect. */
  statusCode?: "301" | "302" | (string & {}) | null;
  /** The URL to redirect the request to. Notes: ${num} refers to the position of '\ ' in the constraint value. */
  url?: string | null;
}
const Value2 = /*@__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    statusCode: Schema.optional(
      Schema.Union([
        Schema.Union([Schema.Literals(["301", "302"]), Schema.String]),
        Schema.Null,
      ]),
    ),
    url: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
  }).pipe(Schema.encodeKeys({ statusCode: "status_code", url: "url" })),
) as unknown as Schema.Codec<Value2>;

interface ForwardingURL {
  /** Redirects one URL to another using an `HTTP 301/302` redirect. Refer to [Wildcard matching and referencing](https://developers.cloudflare.com/rules/page-rules/reference/wildcard-matching/). */
  id?: "forwarding_url" | null;
  value?: {
    statusCode?: "301" | "302" | (string & {}) | null;
    url?: string | null;
  } | null;
}
const ForwardingURL = /*@__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    id: Schema.optional(
      Schema.Union([Schema.Literal("forwarding_url"), Schema.Null]),
    ),
    value: Schema.optional(Schema.Union([Value2, Schema.Null])),
  }),
) as unknown as Schema.Codec<ForwardingURL>;

interface HostHeaderOverride {
  /** Apply a specific host header. */
  id?: "host_header_override" | null;
  /** The hostname to use in the `Host` header */
  value?: string | null;
}
const HostHeaderOverride = /*@__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    id: Schema.optional(
      Schema.Union([Schema.Literal("host_header_override"), Schema.Null]),
    ),
    value: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
  }),
) as unknown as Schema.Codec<HostHeaderOverride>;

interface Ipgeolocation {
  /** Cloudflare adds a CF-IPCountry HTTP header containing the country code that corresponds to the visitor. */
  id?: "ip_geolocation" | null;
  /** The status of adding the IP Geolocation Header. */
  value?: "on" | "off" | (string & {}) | null;
}
const Ipgeolocation = /*@__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    id: Schema.optional(
      Schema.Union([Schema.Literal("ip_geolocation"), Schema.Null]),
    ),
    value: Schema.optional(
      Schema.Union([
        Schema.Union([Schema.Literals(["on", "off"]), Schema.String]),
        Schema.Null,
      ]),
    ),
  }),
) as unknown as Schema.Codec<Ipgeolocation>;

interface Mirage {
  /** Cloudflare Mirage reduces bandwidth used by images in mobile browsers. It can accelerate loading of image-heavy websites on very slow mobile connections and HTTP/1. */
  id?: "mirage" | null;
  /** The status of Mirage. */
  value?: "on" | "off" | (string & {}) | null;
}
const Mirage = /*@__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    id: Schema.optional(Schema.Union([Schema.Literal("mirage"), Schema.Null])),
    value: Schema.optional(
      Schema.Union([
        Schema.Union([Schema.Literals(["on", "off"]), Schema.String]),
        Schema.Null,
      ]),
    ),
  }),
) as unknown as Schema.Codec<Mirage>;

interface OpportunisticEncryption {
  /** Opportunistic Encryption allows browsers to access HTTP URIs over an encrypted TLS channel. It's not a substitute for HTTPS, but provides additional security for otherwise vulnerable requests. */
  id?: "opportunistic_encryption" | null;
  /** The status of Opportunistic Encryption. */
  value?: "on" | "off" | (string & {}) | null;
}
const OpportunisticEncryption = /*@__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    id: Schema.optional(
      Schema.Union([Schema.Literal("opportunistic_encryption"), Schema.Null]),
    ),
    value: Schema.optional(
      Schema.Union([
        Schema.Union([Schema.Literals(["on", "off"]), Schema.String]),
        Schema.Null,
      ]),
    ),
  }),
) as unknown as Schema.Codec<OpportunisticEncryption>;

interface OriginErrorPagePassThru {
  /** Turn on or off Cloudflare error pages generated from issues sent from the origin server. If enabled, this setting triggers error pages issued by the origin. */
  id?: "origin_error_page_pass_thru" | null;
  /** The status of Origin Error Page Passthru. */
  value?: "on" | "off" | (string & {}) | null;
}
const OriginErrorPagePassThru = /*@__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    id: Schema.optional(
      Schema.Union([
        Schema.Literal("origin_error_page_pass_thru"),
        Schema.Null,
      ]),
    ),
    value: Schema.optional(
      Schema.Union([
        Schema.Union([Schema.Literals(["on", "off"]), Schema.String]),
        Schema.Null,
      ]),
    ),
  }),
) as unknown as Schema.Codec<OriginErrorPagePassThru>;

interface Polish {
  /** Apply options from the Polish feature of the Cloudflare Speed app. */
  id?: "polish" | null;
  /** The level of Polish you want applied to your origin. */
  value?: "off" | "lossless" | "lossy" | (string & {}) | null;
}
const Polish = /*@__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    id: Schema.optional(Schema.Union([Schema.Literal("polish"), Schema.Null])),
    value: Schema.optional(
      Schema.Union([
        Schema.Union([
          Schema.Literals(["off", "lossless", "lossy"]),
          Schema.String,
        ]),
        Schema.Null,
      ]),
    ),
  }),
) as unknown as Schema.Codec<Polish>;

interface ResolveOverride {
  /** Change the origin address to the value specified in this setting. */
  id?: "resolve_override" | null;
  /** The origin address you want to override with. */
  value?: string | null;
}
const ResolveOverride = /*@__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    id: Schema.optional(
      Schema.Union([Schema.Literal("resolve_override"), Schema.Null]),
    ),
    value: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
  }),
) as unknown as Schema.Codec<ResolveOverride>;

interface RespectStrongEtag {
  /** Turn on or off byte-for-byte equivalency checks between the Cloudflare cache and the origin server. */
  id?: "respect_strong_etag" | null;
  /** The status of Respect Strong ETags */
  value?: "on" | "off" | (string & {}) | null;
}
const RespectStrongEtag = /*@__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    id: Schema.optional(
      Schema.Union([Schema.Literal("respect_strong_etag"), Schema.Null]),
    ),
    value: Schema.optional(
      Schema.Union([
        Schema.Union([Schema.Literals(["on", "off"]), Schema.String]),
        Schema.Null,
      ]),
    ),
  }),
) as unknown as Schema.Codec<RespectStrongEtag>;

interface ResponseBuffering {
  /** Turn on or off whether Cloudflare should wait for an entire file from the origin server before forwarding it to the site visitor. By default, Cloudflare sends packets to the client as they arrive from */
  id?: "response_buffering" | null;
  /** The status of Response Buffering */
  value?: "on" | "off" | (string & {}) | null;
}
const ResponseBuffering = /*@__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    id: Schema.optional(
      Schema.Union([Schema.Literal("response_buffering"), Schema.Null]),
    ),
    value: Schema.optional(
      Schema.Union([
        Schema.Union([Schema.Literals(["on", "off"]), Schema.String]),
        Schema.Null,
      ]),
    ),
  }),
) as unknown as Schema.Codec<ResponseBuffering>;

interface RocketLoader {
  /** Turn on or off Rocket Loader in the Cloudflare Speed app. */
  id?: "rocket_loader" | null;
  /** The status of Rocket Loader */
  value?: "on" | "off" | (string & {}) | null;
}
const RocketLoader = /*@__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    id: Schema.optional(
      Schema.Union([Schema.Literal("rocket_loader"), Schema.Null]),
    ),
    value: Schema.optional(
      Schema.Union([
        Schema.Union([Schema.Literals(["on", "off"]), Schema.String]),
        Schema.Null,
      ]),
    ),
  }),
) as unknown as Schema.Codec<RocketLoader>;

interface SecurityLevel {
  /** Control options for the  Security Level  feature from the  Security  app. */
  id?: "security_level" | null;
  value?:
    | "off"
    | "essentially_off"
    | "low"
    | "medium"
    | "high"
    | "under_attack"
    | (string & {})
    | null;
}
const SecurityLevel = /*@__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    id: Schema.optional(
      Schema.Union([Schema.Literal("security_level"), Schema.Null]),
    ),
    value: Schema.optional(
      Schema.Union([
        Schema.Union([
          Schema.Literals([
            "off",
            "essentially_off",
            "low",
            "medium",
            "high",
            "under_attack",
          ]),
          Schema.String,
        ]),
        Schema.Null,
      ]),
    ),
  }),
) as unknown as Schema.Codec<SecurityLevel>;

interface SortQueryStringForCache {
  /** Turn on or off the reordering of query strings. When query strings have the same structure, caching improves. */
  id?: "sort_query_string_for_cache" | null;
  /** The status of Query String Sort */
  value?: "on" | "off" | (string & {}) | null;
}
const SortQueryStringForCache = /*@__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    id: Schema.optional(
      Schema.Union([
        Schema.Literal("sort_query_string_for_cache"),
        Schema.Null,
      ]),
    ),
    value: Schema.optional(
      Schema.Union([
        Schema.Union([Schema.Literals(["on", "off"]), Schema.String]),
        Schema.Null,
      ]),
    ),
  }),
) as unknown as Schema.Codec<SortQueryStringForCache>;

interface Ssl {
  /** Control options for the SSL feature of the Edge Certificates tab in the Cloudflare SSL/TLS app. */
  id?: "ssl" | null;
  /** The encryption mode that Cloudflare uses to connect to your origin server. */
  value?:
    | "off"
    | "flexible"
    | "full"
    | "strict"
    | "origin_pull"
    | (string & {})
    | null;
}
const Ssl = /*@__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    id: Schema.optional(Schema.Union([Schema.Literal("ssl"), Schema.Null])),
    value: Schema.optional(
      Schema.Union([
        Schema.Union([
          Schema.Literals(["off", "flexible", "full", "strict", "origin_pull"]),
          Schema.String,
        ]),
        Schema.Null,
      ]),
    ),
  }),
) as unknown as Schema.Codec<Ssl>;

interface TrueClientIPHeader {
  /** Turn on or off the True-Client-IP Header feature of the Cloudflare Network app. */
  id?: "true_client_ip_header" | null;
  /** The status of True Client IP Header. */
  value?: "on" | "off" | (string & {}) | null;
}
const TrueClientIPHeader = /*@__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    id: Schema.optional(
      Schema.Union([Schema.Literal("true_client_ip_header"), Schema.Null]),
    ),
    value: Schema.optional(
      Schema.Union([
        Schema.Union([Schema.Literals(["on", "off"]), Schema.String]),
        Schema.Null,
      ]),
    ),
  }),
) as unknown as Schema.Codec<TrueClientIPHeader>;

interface Waf {
  /** Turn on or off [WAF managed rules (previous version, deprecated)](https://developers.cloudflare.com/waf/reference/legacy/old-waf-managed-rules/). You cannot enable or disable individual WAF managed ru */
  id?: "waf" | null;
  /** The status of WAF managed rules (previous version). */
  value?: "on" | "off" | (string & {}) | null;
}
const Waf = /*@__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    id: Schema.optional(Schema.Union([Schema.Literal("waf"), Schema.Null])),
    value: Schema.optional(
      Schema.Union([
        Schema.Union([Schema.Literals(["on", "off"]), Schema.String]),
        Schema.Null,
      ]),
    ),
  }),
) as unknown as Schema.Codec<Waf>;

interface Constraint {
  /** The matches operator can use asterisks and pipes as wildcard and 'or' operators. */
  operator:
    | "matches"
    | "contains"
    | "equals"
    | "not_equal"
    | "not_contain"
    | (string & {});
  /** The URL pattern to match against the current request. The pattern may contain up to four asterisks ('\ ') as placeholders. */
  value: string;
}
const Constraint = /*@__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    operator: Schema.Union([
      Schema.Literals([
        "matches",
        "contains",
        "equals",
        "not_equal",
        "not_contain",
      ]),
      Schema.String,
    ]),
    value: Schema.String,
  }),
) as unknown as Schema.Codec<Constraint>;

interface Target {
  /** String constraint. */
  constraint?: {
    operator:
      | "matches"
      | "contains"
      | "equals"
      | "not_equal"
      | "not_contain"
      | (string & {});
    value: string;
  } | null;
  /** A target based on the URL of the request. */
  target?: "url" | null;
}
const Target = /*@__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    constraint: Schema.optional(Schema.Union([Constraint, Schema.Null])),
    target: Schema.optional(Schema.Union([Schema.Literal("url"), Schema.Null])),
  }),
) as unknown as Schema.Codec<Target>;

interface PageRule {
  /** Identifier. */
  id: string;
  /** The set of actions to perform if the targets of this rule match the request. Actions can redirect to another URL or override settings, but not both. */
  actions: (
    | { id?: "always_use_https" | null }
    | {
        id?: "automatic_https_rewrites" | null;
        value?: "on" | "off" | (string & {}) | null;
      }
    | { id?: "browser_cache_ttl" | null; value?: number | null }
    | {
        id?: "browser_check" | null;
        value?: "on" | "off" | (string & {}) | null;
      }
    | { id?: "bypass_cache_on_cookie" | null; value?: string | null }
    | {
        id?: "cache_by_device_type" | null;
        value?: "on" | "off" | (string & {}) | null;
      }
    | {
        id?: "cache_deception_armor" | null;
        value?: "on" | "off" | (string & {}) | null;
      }
    | {
        id?: "cache_key_fields" | null;
        value?: {
          cookie?: {
            checkPresence?: string[] | null;
            include?: string[] | null;
          } | null;
          header?: {
            checkPresence?: string[] | null;
            exclude?: string[] | null;
            include?: string[] | null;
          } | null;
          host?: { resolved?: boolean | null } | null;
          queryString?: {
            exclude?: "*" | string[] | null;
            include?: "*" | string[] | null;
          } | null;
          user?: {
            deviceType?: boolean | null;
            geo?: boolean | null;
            lang?: boolean | null;
          } | null;
        } | null;
      }
    | {
        id?: "cache_level" | null;
        value?:
          | "bypass"
          | "basic"
          | "simplified"
          | "aggressive"
          | "cache_everything"
          | (string & {})
          | null;
      }
    | { id?: "cache_on_cookie" | null; value?: string | null }
    | {
        id?: "cache_ttl_by_status" | null;
        value?: Record<string, unknown> | null;
      }
    | { id?: "disable_apps" | null }
    | { id?: "disable_performance" | null }
    | { id?: "disable_security" | null }
    | { id?: "disable_zaraz" | null }
    | { id?: "edge_cache_ttl" | null; value?: number | null }
    | {
        id?: "email_obfuscation" | null;
        value?: "on" | "off" | (string & {}) | null;
      }
    | {
        id?: "explicit_cache_control" | null;
        value?: "on" | "off" | (string & {}) | null;
      }
    | {
        id?: "forwarding_url" | null;
        value?: {
          statusCode?: "301" | "302" | (string & {}) | null;
          url?: string | null;
        } | null;
      }
    | { id?: "host_header_override" | null; value?: string | null }
    | {
        id?: "ip_geolocation" | null;
        value?: "on" | "off" | (string & {}) | null;
      }
    | { id?: "mirage" | null; value?: "on" | "off" | (string & {}) | null }
    | {
        id?: "opportunistic_encryption" | null;
        value?: "on" | "off" | (string & {}) | null;
      }
    | {
        id?: "origin_error_page_pass_thru" | null;
        value?: "on" | "off" | (string & {}) | null;
      }
    | {
        id?: "polish" | null;
        value?: "off" | "lossless" | "lossy" | (string & {}) | null;
      }
    | { id?: "resolve_override" | null; value?: string | null }
    | {
        id?: "respect_strong_etag" | null;
        value?: "on" | "off" | (string & {}) | null;
      }
    | {
        id?: "response_buffering" | null;
        value?: "on" | "off" | (string & {}) | null;
      }
    | {
        id?: "rocket_loader" | null;
        value?: "on" | "off" | (string & {}) | null;
      }
    | {
        id?: "security_level" | null;
        value?:
          | "off"
          | "essentially_off"
          | "low"
          | "medium"
          | "high"
          | "under_attack"
          | (string & {})
          | null;
      }
    | {
        id?: "sort_query_string_for_cache" | null;
        value?: "on" | "off" | (string & {}) | null;
      }
    | {
        id?: "ssl" | null;
        value?:
          | "off"
          | "flexible"
          | "full"
          | "strict"
          | "origin_pull"
          | (string & {})
          | null;
      }
    | {
        id?: "true_client_ip_header" | null;
        value?: "on" | "off" | (string & {}) | null;
      }
    | { id?: "waf" | null; value?: "on" | "off" | (string & {}) | null }
  )[];
  /** The timestamp of when the Page Rule was created. */
  createdOn: string;
  /** The timestamp of when the Page Rule was last modified. */
  modifiedOn: string;
  /** The priority of the rule, used to define which Page Rule is processed over another. A higher number indicates a higher priority. For example, if you have a catch-all Page Rule (rule A: `/images/ `) bu */
  priority: number;
  /** The status of the Page Rule. */
  status: "active" | "disabled" | (string & {});
  /** The rule targets to evaluate on each request. */
  targets: {
    constraint?: {
      operator:
        | "matches"
        | "contains"
        | "equals"
        | "not_equal"
        | "not_contain"
        | (string & {});
      value: string;
    } | null;
    target?: "url" | null;
  }[];
}
const PageRule = /*@__PURE__*/ Schema.suspend(() =>
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
    status: Schema.Union([
      Schema.Literals(["active", "disabled"]),
      Schema.String,
    ]),
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
) as unknown as Schema.Codec<PageRule>;

// =============================================================================
// PageRule
// =============================================================================

export interface GetPageRuleRequest {
  pageruleId: string;
  /** Identifier. */
  zoneId: string;
}

export const GetPageRuleRequest = /*@__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    pageruleId: Schema.String.pipe(T.HttpPath("pageruleId")),
    zoneId: Schema.String.pipe(T.HttpPath("zone_id")),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/zones/{zone_id}/pagerules/{pageruleId}",
    }),
  ),
) as unknown as Schema.Codec<GetPageRuleRequest>;

export interface GetPageRuleResponse {
  /** Identifier. */
  id: string;
  /** The set of actions to perform if the targets of this rule match the request. Actions can redirect to another URL or override settings, but not both. */
  actions: (
    | { id?: "always_use_https" | null }
    | {
        id?: "automatic_https_rewrites" | null;
        value?: "on" | "off" | (string & {}) | null;
      }
    | { id?: "browser_cache_ttl" | null; value?: number | null }
    | {
        id?: "browser_check" | null;
        value?: "on" | "off" | (string & {}) | null;
      }
    | { id?: "bypass_cache_on_cookie" | null; value?: string | null }
    | {
        id?: "cache_by_device_type" | null;
        value?: "on" | "off" | (string & {}) | null;
      }
    | {
        id?: "cache_deception_armor" | null;
        value?: "on" | "off" | (string & {}) | null;
      }
    | {
        id?: "cache_key_fields" | null;
        value?: {
          cookie?: {
            checkPresence?: string[] | null;
            include?: string[] | null;
          } | null;
          header?: {
            checkPresence?: string[] | null;
            exclude?: string[] | null;
            include?: string[] | null;
          } | null;
          host?: { resolved?: boolean | null } | null;
          queryString?: {
            exclude?: "*" | string[] | null;
            include?: "*" | string[] | null;
          } | null;
          user?: {
            deviceType?: boolean | null;
            geo?: boolean | null;
            lang?: boolean | null;
          } | null;
        } | null;
      }
    | {
        id?: "cache_level" | null;
        value?:
          | "bypass"
          | "basic"
          | "simplified"
          | "aggressive"
          | "cache_everything"
          | (string & {})
          | null;
      }
    | { id?: "cache_on_cookie" | null; value?: string | null }
    | {
        id?: "cache_ttl_by_status" | null;
        value?: Record<string, unknown> | null;
      }
    | { id?: "disable_apps" | null }
    | { id?: "disable_performance" | null }
    | { id?: "disable_security" | null }
    | { id?: "disable_zaraz" | null }
    | { id?: "edge_cache_ttl" | null; value?: number | null }
    | {
        id?: "email_obfuscation" | null;
        value?: "on" | "off" | (string & {}) | null;
      }
    | {
        id?: "explicit_cache_control" | null;
        value?: "on" | "off" | (string & {}) | null;
      }
    | {
        id?: "forwarding_url" | null;
        value?: {
          statusCode?: "301" | "302" | (string & {}) | null;
          url?: string | null;
        } | null;
      }
    | { id?: "host_header_override" | null; value?: string | null }
    | {
        id?: "ip_geolocation" | null;
        value?: "on" | "off" | (string & {}) | null;
      }
    | { id?: "mirage" | null; value?: "on" | "off" | (string & {}) | null }
    | {
        id?: "opportunistic_encryption" | null;
        value?: "on" | "off" | (string & {}) | null;
      }
    | {
        id?: "origin_error_page_pass_thru" | null;
        value?: "on" | "off" | (string & {}) | null;
      }
    | {
        id?: "polish" | null;
        value?: "off" | "lossless" | "lossy" | (string & {}) | null;
      }
    | { id?: "resolve_override" | null; value?: string | null }
    | {
        id?: "respect_strong_etag" | null;
        value?: "on" | "off" | (string & {}) | null;
      }
    | {
        id?: "response_buffering" | null;
        value?: "on" | "off" | (string & {}) | null;
      }
    | {
        id?: "rocket_loader" | null;
        value?: "on" | "off" | (string & {}) | null;
      }
    | {
        id?: "security_level" | null;
        value?:
          | "off"
          | "essentially_off"
          | "low"
          | "medium"
          | "high"
          | "under_attack"
          | (string & {})
          | null;
      }
    | {
        id?: "sort_query_string_for_cache" | null;
        value?: "on" | "off" | (string & {}) | null;
      }
    | {
        id?: "ssl" | null;
        value?:
          | "off"
          | "flexible"
          | "full"
          | "strict"
          | "origin_pull"
          | (string & {})
          | null;
      }
    | {
        id?: "true_client_ip_header" | null;
        value?: "on" | "off" | (string & {}) | null;
      }
    | { id?: "waf" | null; value?: "on" | "off" | (string & {}) | null }
  )[];
  /** The timestamp of when the Page Rule was created. */
  createdOn: string;
  /** The timestamp of when the Page Rule was last modified. */
  modifiedOn: string;
  /** The priority of the rule, used to define which Page Rule is processed over another. A higher number indicates a higher priority. For example, if you have a catch-all Page Rule (rule A: `/images/ `) bu */
  priority: number;
  /** The status of the Page Rule. */
  status: "active" | "disabled" | (string & {});
  /** The rule targets to evaluate on each request. */
  targets: {
    constraint?: {
      operator:
        | "matches"
        | "contains"
        | "equals"
        | "not_equal"
        | "not_contain"
        | (string & {});
      value: string;
    } | null;
    target?: "url" | null;
  }[];
}

export const GetPageRuleResponse = /*@__PURE__*/ Schema.suspend(() =>
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
    status: Schema.Union([
      Schema.Literals(["active", "disabled"]),
      Schema.String,
    ]),
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
    .pipe(T.ResponsePath("result")),
) as unknown as Schema.Codec<GetPageRuleResponse>;

export type GetPageRuleError = DefaultErrors | PageRuleNotFound | Forbidden;

export const getPageRule: API.OperationMethod<
  GetPageRuleRequest,
  GetPageRuleResponse,
  GetPageRuleError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: GetPageRuleRequest,
  output: GetPageRuleResponse,
  errors: [PageRuleNotFound, Forbidden],
}));

export interface ListPageRulesRequest {
  /** Path param: Identifier. */
  zoneId: string;
  /** Query param: The direction used to sort returned Page Rules. */
  direction?: "asc" | "desc" | (string & {});
  /** Query param: When set to `all`, all the search requirements must match. When set to `any`, only one of the search requirements has to match. */
  match?: "any" | "all" | (string & {});
  /** Query param: The field used to sort returned Page Rules. */
  order?: "status" | "priority" | (string & {});
  /** Query param: The status of the Page Rule. */
  status?: "active" | "disabled" | (string & {});
}

export const ListPageRulesRequest = /*@__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    zoneId: Schema.String.pipe(T.HttpPath("zone_id")),
    direction: Schema.optional(
      Schema.Union([Schema.Literals(["asc", "desc"]), Schema.String]),
    ).pipe(T.HttpQuery("direction")),
    match: Schema.optional(
      Schema.Union([Schema.Literals(["any", "all"]), Schema.String]),
    ).pipe(T.HttpQuery("match")),
    order: Schema.optional(
      Schema.Union([Schema.Literals(["status", "priority"]), Schema.String]),
    ).pipe(T.HttpQuery("order")),
    status: Schema.optional(
      Schema.Union([Schema.Literals(["active", "disabled"]), Schema.String]),
    ).pipe(T.HttpQuery("status")),
  }).pipe(T.Http({ method: "GET", path: "/zones/{zone_id}/pagerules" })),
) as unknown as Schema.Codec<ListPageRulesRequest>;

export type ListPageRulesResponse = {
  id: string;
  actions: (
    | { id?: "always_use_https" | null }
    | {
        id?: "automatic_https_rewrites" | null;
        value?: "on" | "off" | (string & {}) | null;
      }
    | { id?: "browser_cache_ttl" | null; value?: number | null }
    | {
        id?: "browser_check" | null;
        value?: "on" | "off" | (string & {}) | null;
      }
    | { id?: "bypass_cache_on_cookie" | null; value?: string | null }
    | {
        id?: "cache_by_device_type" | null;
        value?: "on" | "off" | (string & {}) | null;
      }
    | {
        id?: "cache_deception_armor" | null;
        value?: "on" | "off" | (string & {}) | null;
      }
    | {
        id?: "cache_key_fields" | null;
        value?: {
          cookie?: {
            checkPresence?: string[] | null;
            include?: string[] | null;
          } | null;
          header?: {
            checkPresence?: string[] | null;
            exclude?: string[] | null;
            include?: string[] | null;
          } | null;
          host?: { resolved?: boolean | null } | null;
          queryString?: {
            exclude?: "*" | string[] | null;
            include?: "*" | string[] | null;
          } | null;
          user?: {
            deviceType?: boolean | null;
            geo?: boolean | null;
            lang?: boolean | null;
          } | null;
        } | null;
      }
    | {
        id?: "cache_level" | null;
        value?:
          | "bypass"
          | "basic"
          | "simplified"
          | "aggressive"
          | "cache_everything"
          | (string & {})
          | null;
      }
    | { id?: "cache_on_cookie" | null; value?: string | null }
    | {
        id?: "cache_ttl_by_status" | null;
        value?: Record<string, unknown> | null;
      }
    | { id?: "disable_apps" | null }
    | { id?: "disable_performance" | null }
    | { id?: "disable_security" | null }
    | { id?: "disable_zaraz" | null }
    | { id?: "edge_cache_ttl" | null; value?: number | null }
    | {
        id?: "email_obfuscation" | null;
        value?: "on" | "off" | (string & {}) | null;
      }
    | {
        id?: "explicit_cache_control" | null;
        value?: "on" | "off" | (string & {}) | null;
      }
    | {
        id?: "forwarding_url" | null;
        value?: {
          statusCode?: "301" | "302" | (string & {}) | null;
          url?: string | null;
        } | null;
      }
    | { id?: "host_header_override" | null; value?: string | null }
    | {
        id?: "ip_geolocation" | null;
        value?: "on" | "off" | (string & {}) | null;
      }
    | { id?: "mirage" | null; value?: "on" | "off" | (string & {}) | null }
    | {
        id?: "opportunistic_encryption" | null;
        value?: "on" | "off" | (string & {}) | null;
      }
    | {
        id?: "origin_error_page_pass_thru" | null;
        value?: "on" | "off" | (string & {}) | null;
      }
    | {
        id?: "polish" | null;
        value?: "off" | "lossless" | "lossy" | (string & {}) | null;
      }
    | { id?: "resolve_override" | null; value?: string | null }
    | {
        id?: "respect_strong_etag" | null;
        value?: "on" | "off" | (string & {}) | null;
      }
    | {
        id?: "response_buffering" | null;
        value?: "on" | "off" | (string & {}) | null;
      }
    | {
        id?: "rocket_loader" | null;
        value?: "on" | "off" | (string & {}) | null;
      }
    | {
        id?: "security_level" | null;
        value?:
          | "off"
          | "essentially_off"
          | "low"
          | "medium"
          | "high"
          | "under_attack"
          | (string & {})
          | null;
      }
    | {
        id?: "sort_query_string_for_cache" | null;
        value?: "on" | "off" | (string & {}) | null;
      }
    | {
        id?: "ssl" | null;
        value?:
          | "off"
          | "flexible"
          | "full"
          | "strict"
          | "origin_pull"
          | (string & {})
          | null;
      }
    | {
        id?: "true_client_ip_header" | null;
        value?: "on" | "off" | (string & {}) | null;
      }
    | { id?: "waf" | null; value?: "on" | "off" | (string & {}) | null }
  )[];
  createdOn: string;
  modifiedOn: string;
  priority: number;
  status: "active" | "disabled" | (string & {});
  targets: {
    constraint?: {
      operator:
        | "matches"
        | "contains"
        | "equals"
        | "not_equal"
        | "not_contain"
        | (string & {});
      value: string;
    } | null;
    target?: "url" | null;
  }[];
}[];

export const ListPageRulesResponse = /*@__PURE__*/ Schema.suspend(() =>
  Schema.Array(PageRule).pipe(T.ResponsePath("result")),
) as unknown as Schema.Codec<ListPageRulesResponse>;

export type ListPageRulesError =
  | DefaultErrors
  | Forbidden
  | InvalidZoneIdentifier;

export const listPageRules: API.OperationMethod<
  ListPageRulesRequest,
  ListPageRulesResponse,
  ListPageRulesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: ListPageRulesRequest,
  output: ListPageRulesResponse,
  errors: [Forbidden, InvalidZoneIdentifier],
}));

export interface CreatePageRuleRequest {
  /** Path param: Identifier. */
  zoneId: string;
  /** Body param: The set of actions to perform if the targets of this rule match the request. Actions can redirect to another URL or override settings, but not both. */
  actions: (
    | { id?: "always_use_https" }
    | { id?: "automatic_https_rewrites"; value?: "on" | "off" | (string & {}) }
    | { id?: "browser_cache_ttl"; value?: number }
    | { id?: "browser_check"; value?: "on" | "off" | (string & {}) }
    | { id?: "bypass_cache_on_cookie"; value?: string }
    | { id?: "cache_by_device_type"; value?: "on" | "off" | (string & {}) }
    | { id?: "cache_deception_armor"; value?: "on" | "off" | (string & {}) }
    | {
        id?: "cache_key_fields";
        value?: {
          cookie?: { checkPresence?: string[]; include?: string[] };
          header?: {
            checkPresence?: string[];
            exclude?: string[];
            include?: string[];
          };
          host?: { resolved?: boolean };
          queryString?: { exclude?: "*" | string[]; include?: "*" | string[] };
          user?: { deviceType?: boolean; geo?: boolean; lang?: boolean };
        };
      }
    | {
        id?: "cache_level";
        value?:
          | "bypass"
          | "basic"
          | "simplified"
          | "aggressive"
          | "cache_everything"
          | (string & {});
      }
    | { id?: "cache_on_cookie"; value?: string }
    | { id?: "cache_ttl_by_status"; value?: Record<string, unknown> }
    | { id?: "disable_apps" }
    | { id?: "disable_performance" }
    | { id?: "disable_security" }
    | { id?: "disable_zaraz" }
    | { id?: "edge_cache_ttl"; value?: number }
    | { id?: "email_obfuscation"; value?: "on" | "off" | (string & {}) }
    | { id?: "explicit_cache_control"; value?: "on" | "off" | (string & {}) }
    | {
        id?: "forwarding_url";
        value?: { statusCode?: "301" | "302" | (string & {}); url?: string };
      }
    | { id?: "host_header_override"; value?: string }
    | { id?: "ip_geolocation"; value?: "on" | "off" | (string & {}) }
    | { id?: "mirage"; value?: "on" | "off" | (string & {}) }
    | { id?: "opportunistic_encryption"; value?: "on" | "off" | (string & {}) }
    | {
        id?: "origin_error_page_pass_thru";
        value?: "on" | "off" | (string & {});
      }
    | { id?: "polish"; value?: "off" | "lossless" | "lossy" | (string & {}) }
    | { id?: "resolve_override"; value?: string }
    | { id?: "respect_strong_etag"; value?: "on" | "off" | (string & {}) }
    | { id?: "response_buffering"; value?: "on" | "off" | (string & {}) }
    | { id?: "rocket_loader"; value?: "on" | "off" | (string & {}) }
    | {
        id?: "security_level";
        value?:
          | "off"
          | "essentially_off"
          | "low"
          | "medium"
          | "high"
          | "under_attack"
          | (string & {});
      }
    | {
        id?: "sort_query_string_for_cache";
        value?: "on" | "off" | (string & {});
      }
    | {
        id?: "ssl";
        value?:
          | "off"
          | "flexible"
          | "full"
          | "strict"
          | "origin_pull"
          | (string & {});
      }
    | { id?: "true_client_ip_header"; value?: "on" | "off" | (string & {}) }
    | { id?: "waf"; value?: "on" | "off" | (string & {}) }
  )[];
  /** Body param: The rule targets to evaluate on each request. */
  targets: {
    constraint?: {
      operator:
        | "matches"
        | "contains"
        | "equals"
        | "not_equal"
        | "not_contain"
        | (string & {});
      value: string;
    };
    target?: "url";
  }[];
  /** Body param: The priority of the rule, used to define which Page Rule is processed over another. A higher number indicates a higher priority. For example, if you have a catch-all Page Rule (rule A: `/i */
  priority?: number;
  /** Body param: The status of the Page Rule. */
  status?: "active" | "disabled" | (string & {});
}

export const CreatePageRuleRequest = /*@__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
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
    status: Schema.optional(
      Schema.Union([Schema.Literals(["active", "disabled"]), Schema.String]),
    ),
  }).pipe(T.Http({ method: "POST", path: "/zones/{zone_id}/pagerules" })),
) as unknown as Schema.Codec<CreatePageRuleRequest>;

export interface CreatePageRuleResponse {
  /** Identifier. */
  id: string;
  /** The set of actions to perform if the targets of this rule match the request. Actions can redirect to another URL or override settings, but not both. */
  actions: (
    | { id?: "always_use_https" | null }
    | {
        id?: "automatic_https_rewrites" | null;
        value?: "on" | "off" | (string & {}) | null;
      }
    | { id?: "browser_cache_ttl" | null; value?: number | null }
    | {
        id?: "browser_check" | null;
        value?: "on" | "off" | (string & {}) | null;
      }
    | { id?: "bypass_cache_on_cookie" | null; value?: string | null }
    | {
        id?: "cache_by_device_type" | null;
        value?: "on" | "off" | (string & {}) | null;
      }
    | {
        id?: "cache_deception_armor" | null;
        value?: "on" | "off" | (string & {}) | null;
      }
    | {
        id?: "cache_key_fields" | null;
        value?: {
          cookie?: {
            checkPresence?: string[] | null;
            include?: string[] | null;
          } | null;
          header?: {
            checkPresence?: string[] | null;
            exclude?: string[] | null;
            include?: string[] | null;
          } | null;
          host?: { resolved?: boolean | null } | null;
          queryString?: {
            exclude?: "*" | string[] | null;
            include?: "*" | string[] | null;
          } | null;
          user?: {
            deviceType?: boolean | null;
            geo?: boolean | null;
            lang?: boolean | null;
          } | null;
        } | null;
      }
    | {
        id?: "cache_level" | null;
        value?:
          | "bypass"
          | "basic"
          | "simplified"
          | "aggressive"
          | "cache_everything"
          | (string & {})
          | null;
      }
    | { id?: "cache_on_cookie" | null; value?: string | null }
    | {
        id?: "cache_ttl_by_status" | null;
        value?: Record<string, unknown> | null;
      }
    | { id?: "disable_apps" | null }
    | { id?: "disable_performance" | null }
    | { id?: "disable_security" | null }
    | { id?: "disable_zaraz" | null }
    | { id?: "edge_cache_ttl" | null; value?: number | null }
    | {
        id?: "email_obfuscation" | null;
        value?: "on" | "off" | (string & {}) | null;
      }
    | {
        id?: "explicit_cache_control" | null;
        value?: "on" | "off" | (string & {}) | null;
      }
    | {
        id?: "forwarding_url" | null;
        value?: {
          statusCode?: "301" | "302" | (string & {}) | null;
          url?: string | null;
        } | null;
      }
    | { id?: "host_header_override" | null; value?: string | null }
    | {
        id?: "ip_geolocation" | null;
        value?: "on" | "off" | (string & {}) | null;
      }
    | { id?: "mirage" | null; value?: "on" | "off" | (string & {}) | null }
    | {
        id?: "opportunistic_encryption" | null;
        value?: "on" | "off" | (string & {}) | null;
      }
    | {
        id?: "origin_error_page_pass_thru" | null;
        value?: "on" | "off" | (string & {}) | null;
      }
    | {
        id?: "polish" | null;
        value?: "off" | "lossless" | "lossy" | (string & {}) | null;
      }
    | { id?: "resolve_override" | null; value?: string | null }
    | {
        id?: "respect_strong_etag" | null;
        value?: "on" | "off" | (string & {}) | null;
      }
    | {
        id?: "response_buffering" | null;
        value?: "on" | "off" | (string & {}) | null;
      }
    | {
        id?: "rocket_loader" | null;
        value?: "on" | "off" | (string & {}) | null;
      }
    | {
        id?: "security_level" | null;
        value?:
          | "off"
          | "essentially_off"
          | "low"
          | "medium"
          | "high"
          | "under_attack"
          | (string & {})
          | null;
      }
    | {
        id?: "sort_query_string_for_cache" | null;
        value?: "on" | "off" | (string & {}) | null;
      }
    | {
        id?: "ssl" | null;
        value?:
          | "off"
          | "flexible"
          | "full"
          | "strict"
          | "origin_pull"
          | (string & {})
          | null;
      }
    | {
        id?: "true_client_ip_header" | null;
        value?: "on" | "off" | (string & {}) | null;
      }
    | { id?: "waf" | null; value?: "on" | "off" | (string & {}) | null }
  )[];
  /** The timestamp of when the Page Rule was created. */
  createdOn: string;
  /** The timestamp of when the Page Rule was last modified. */
  modifiedOn: string;
  /** The priority of the rule, used to define which Page Rule is processed over another. A higher number indicates a higher priority. For example, if you have a catch-all Page Rule (rule A: `/images/ `) bu */
  priority: number;
  /** The status of the Page Rule. */
  status: "active" | "disabled" | (string & {});
  /** The rule targets to evaluate on each request. */
  targets: {
    constraint?: {
      operator:
        | "matches"
        | "contains"
        | "equals"
        | "not_equal"
        | "not_contain"
        | (string & {});
      value: string;
    } | null;
    target?: "url" | null;
  }[];
}

export const CreatePageRuleResponse =
  /*@__PURE__*/ Schema.suspend(() =>
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
      status: Schema.Union([
        Schema.Literals(["active", "disabled"]),
        Schema.String,
      ]),
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
      .pipe(T.ResponsePath("result")),
  ) as unknown as Schema.Codec<CreatePageRuleResponse>;

export type CreatePageRuleError = DefaultErrors | Forbidden;

export const createPageRule: API.OperationMethod<
  CreatePageRuleRequest,
  CreatePageRuleResponse,
  CreatePageRuleError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: CreatePageRuleRequest,
  output: CreatePageRuleResponse,
  errors: [Forbidden],
}));

export interface UpdatePageRuleRequest {
  pageruleId: string;
  /** Path param: Identifier. */
  zoneId: string;
  /** Body param: The set of actions to perform if the targets of this rule match the request. Actions can redirect to another URL or override settings, but not both. */
  actions: (
    | { id?: "always_use_https" }
    | { id?: "automatic_https_rewrites"; value?: "on" | "off" | (string & {}) }
    | { id?: "browser_cache_ttl"; value?: number }
    | { id?: "browser_check"; value?: "on" | "off" | (string & {}) }
    | { id?: "bypass_cache_on_cookie"; value?: string }
    | { id?: "cache_by_device_type"; value?: "on" | "off" | (string & {}) }
    | { id?: "cache_deception_armor"; value?: "on" | "off" | (string & {}) }
    | {
        id?: "cache_key_fields";
        value?: {
          cookie?: { checkPresence?: string[]; include?: string[] };
          header?: {
            checkPresence?: string[];
            exclude?: string[];
            include?: string[];
          };
          host?: { resolved?: boolean };
          queryString?: { exclude?: "*" | string[]; include?: "*" | string[] };
          user?: { deviceType?: boolean; geo?: boolean; lang?: boolean };
        };
      }
    | {
        id?: "cache_level";
        value?:
          | "bypass"
          | "basic"
          | "simplified"
          | "aggressive"
          | "cache_everything"
          | (string & {});
      }
    | { id?: "cache_on_cookie"; value?: string }
    | { id?: "cache_ttl_by_status"; value?: Record<string, unknown> }
    | { id?: "disable_apps" }
    | { id?: "disable_performance" }
    | { id?: "disable_security" }
    | { id?: "disable_zaraz" }
    | { id?: "edge_cache_ttl"; value?: number }
    | { id?: "email_obfuscation"; value?: "on" | "off" | (string & {}) }
    | { id?: "explicit_cache_control"; value?: "on" | "off" | (string & {}) }
    | {
        id?: "forwarding_url";
        value?: { statusCode?: "301" | "302" | (string & {}); url?: string };
      }
    | { id?: "host_header_override"; value?: string }
    | { id?: "ip_geolocation"; value?: "on" | "off" | (string & {}) }
    | { id?: "mirage"; value?: "on" | "off" | (string & {}) }
    | { id?: "opportunistic_encryption"; value?: "on" | "off" | (string & {}) }
    | {
        id?: "origin_error_page_pass_thru";
        value?: "on" | "off" | (string & {});
      }
    | { id?: "polish"; value?: "off" | "lossless" | "lossy" | (string & {}) }
    | { id?: "resolve_override"; value?: string }
    | { id?: "respect_strong_etag"; value?: "on" | "off" | (string & {}) }
    | { id?: "response_buffering"; value?: "on" | "off" | (string & {}) }
    | { id?: "rocket_loader"; value?: "on" | "off" | (string & {}) }
    | {
        id?: "security_level";
        value?:
          | "off"
          | "essentially_off"
          | "low"
          | "medium"
          | "high"
          | "under_attack"
          | (string & {});
      }
    | {
        id?: "sort_query_string_for_cache";
        value?: "on" | "off" | (string & {});
      }
    | {
        id?: "ssl";
        value?:
          | "off"
          | "flexible"
          | "full"
          | "strict"
          | "origin_pull"
          | (string & {});
      }
    | { id?: "true_client_ip_header"; value?: "on" | "off" | (string & {}) }
    | { id?: "waf"; value?: "on" | "off" | (string & {}) }
  )[];
  /** Body param: The rule targets to evaluate on each request. */
  targets: {
    constraint?: {
      operator:
        | "matches"
        | "contains"
        | "equals"
        | "not_equal"
        | "not_contain"
        | (string & {});
      value: string;
    };
    target?: "url";
  }[];
  /** Body param: The priority of the rule, used to define which Page Rule is processed over another. A higher number indicates a higher priority. For example, if you have a catch-all Page Rule (rule A: `/i */
  priority?: number;
  /** Body param: The status of the Page Rule. */
  status?: "active" | "disabled" | (string & {});
}

export const UpdatePageRuleRequest = /*@__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
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
    status: Schema.optional(
      Schema.Union([Schema.Literals(["active", "disabled"]), Schema.String]),
    ),
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/zones/{zone_id}/pagerules/{pageruleId}",
    }),
  ),
) as unknown as Schema.Codec<UpdatePageRuleRequest>;

export interface UpdatePageRuleResponse {
  /** Identifier. */
  id: string;
  /** The set of actions to perform if the targets of this rule match the request. Actions can redirect to another URL or override settings, but not both. */
  actions: (
    | { id?: "always_use_https" | null }
    | {
        id?: "automatic_https_rewrites" | null;
        value?: "on" | "off" | (string & {}) | null;
      }
    | { id?: "browser_cache_ttl" | null; value?: number | null }
    | {
        id?: "browser_check" | null;
        value?: "on" | "off" | (string & {}) | null;
      }
    | { id?: "bypass_cache_on_cookie" | null; value?: string | null }
    | {
        id?: "cache_by_device_type" | null;
        value?: "on" | "off" | (string & {}) | null;
      }
    | {
        id?: "cache_deception_armor" | null;
        value?: "on" | "off" | (string & {}) | null;
      }
    | {
        id?: "cache_key_fields" | null;
        value?: {
          cookie?: {
            checkPresence?: string[] | null;
            include?: string[] | null;
          } | null;
          header?: {
            checkPresence?: string[] | null;
            exclude?: string[] | null;
            include?: string[] | null;
          } | null;
          host?: { resolved?: boolean | null } | null;
          queryString?: {
            exclude?: "*" | string[] | null;
            include?: "*" | string[] | null;
          } | null;
          user?: {
            deviceType?: boolean | null;
            geo?: boolean | null;
            lang?: boolean | null;
          } | null;
        } | null;
      }
    | {
        id?: "cache_level" | null;
        value?:
          | "bypass"
          | "basic"
          | "simplified"
          | "aggressive"
          | "cache_everything"
          | (string & {})
          | null;
      }
    | { id?: "cache_on_cookie" | null; value?: string | null }
    | {
        id?: "cache_ttl_by_status" | null;
        value?: Record<string, unknown> | null;
      }
    | { id?: "disable_apps" | null }
    | { id?: "disable_performance" | null }
    | { id?: "disable_security" | null }
    | { id?: "disable_zaraz" | null }
    | { id?: "edge_cache_ttl" | null; value?: number | null }
    | {
        id?: "email_obfuscation" | null;
        value?: "on" | "off" | (string & {}) | null;
      }
    | {
        id?: "explicit_cache_control" | null;
        value?: "on" | "off" | (string & {}) | null;
      }
    | {
        id?: "forwarding_url" | null;
        value?: {
          statusCode?: "301" | "302" | (string & {}) | null;
          url?: string | null;
        } | null;
      }
    | { id?: "host_header_override" | null; value?: string | null }
    | {
        id?: "ip_geolocation" | null;
        value?: "on" | "off" | (string & {}) | null;
      }
    | { id?: "mirage" | null; value?: "on" | "off" | (string & {}) | null }
    | {
        id?: "opportunistic_encryption" | null;
        value?: "on" | "off" | (string & {}) | null;
      }
    | {
        id?: "origin_error_page_pass_thru" | null;
        value?: "on" | "off" | (string & {}) | null;
      }
    | {
        id?: "polish" | null;
        value?: "off" | "lossless" | "lossy" | (string & {}) | null;
      }
    | { id?: "resolve_override" | null; value?: string | null }
    | {
        id?: "respect_strong_etag" | null;
        value?: "on" | "off" | (string & {}) | null;
      }
    | {
        id?: "response_buffering" | null;
        value?: "on" | "off" | (string & {}) | null;
      }
    | {
        id?: "rocket_loader" | null;
        value?: "on" | "off" | (string & {}) | null;
      }
    | {
        id?: "security_level" | null;
        value?:
          | "off"
          | "essentially_off"
          | "low"
          | "medium"
          | "high"
          | "under_attack"
          | (string & {})
          | null;
      }
    | {
        id?: "sort_query_string_for_cache" | null;
        value?: "on" | "off" | (string & {}) | null;
      }
    | {
        id?: "ssl" | null;
        value?:
          | "off"
          | "flexible"
          | "full"
          | "strict"
          | "origin_pull"
          | (string & {})
          | null;
      }
    | {
        id?: "true_client_ip_header" | null;
        value?: "on" | "off" | (string & {}) | null;
      }
    | { id?: "waf" | null; value?: "on" | "off" | (string & {}) | null }
  )[];
  /** The timestamp of when the Page Rule was created. */
  createdOn: string;
  /** The timestamp of when the Page Rule was last modified. */
  modifiedOn: string;
  /** The priority of the rule, used to define which Page Rule is processed over another. A higher number indicates a higher priority. For example, if you have a catch-all Page Rule (rule A: `/images/ `) bu */
  priority: number;
  /** The status of the Page Rule. */
  status: "active" | "disabled" | (string & {});
  /** The rule targets to evaluate on each request. */
  targets: {
    constraint?: {
      operator:
        | "matches"
        | "contains"
        | "equals"
        | "not_equal"
        | "not_contain"
        | (string & {});
      value: string;
    } | null;
    target?: "url" | null;
  }[];
}

export const UpdatePageRuleResponse =
  /*@__PURE__*/ Schema.suspend(() =>
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
      status: Schema.Union([
        Schema.Literals(["active", "disabled"]),
        Schema.String,
      ]),
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
      .pipe(T.ResponsePath("result")),
  ) as unknown as Schema.Codec<UpdatePageRuleResponse>;

export type UpdatePageRuleError = DefaultErrors | PageRuleNotFound | Forbidden;

export const updatePageRule: API.OperationMethod<
  UpdatePageRuleRequest,
  UpdatePageRuleResponse,
  UpdatePageRuleError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: UpdatePageRuleRequest,
  output: UpdatePageRuleResponse,
  errors: [PageRuleNotFound, Forbidden],
}));

export interface PatchPageRuleRequest {
  pageruleId: string;
  /** Path param: Identifier. */
  zoneId: string;
  /** Body param: The set of actions to perform if the targets of this rule match the request. Actions can redirect to another URL or override settings, but not both. */
  actions?: (
    | { id?: "always_use_https" }
    | { id?: "automatic_https_rewrites"; value?: "on" | "off" | (string & {}) }
    | { id?: "browser_cache_ttl"; value?: number }
    | { id?: "browser_check"; value?: "on" | "off" | (string & {}) }
    | { id?: "bypass_cache_on_cookie"; value?: string }
    | { id?: "cache_by_device_type"; value?: "on" | "off" | (string & {}) }
    | { id?: "cache_deception_armor"; value?: "on" | "off" | (string & {}) }
    | {
        id?: "cache_key_fields";
        value?: {
          cookie?: { checkPresence?: string[]; include?: string[] };
          header?: {
            checkPresence?: string[];
            exclude?: string[];
            include?: string[];
          };
          host?: { resolved?: boolean };
          queryString?: { exclude?: "*" | string[]; include?: "*" | string[] };
          user?: { deviceType?: boolean; geo?: boolean; lang?: boolean };
        };
      }
    | {
        id?: "cache_level";
        value?:
          | "bypass"
          | "basic"
          | "simplified"
          | "aggressive"
          | "cache_everything"
          | (string & {});
      }
    | { id?: "cache_on_cookie"; value?: string }
    | { id?: "cache_ttl_by_status"; value?: Record<string, unknown> }
    | { id?: "disable_apps" }
    | { id?: "disable_performance" }
    | { id?: "disable_security" }
    | { id?: "disable_zaraz" }
    | { id?: "edge_cache_ttl"; value?: number }
    | { id?: "email_obfuscation"; value?: "on" | "off" | (string & {}) }
    | { id?: "explicit_cache_control"; value?: "on" | "off" | (string & {}) }
    | {
        id?: "forwarding_url";
        value?: { statusCode?: "301" | "302" | (string & {}); url?: string };
      }
    | { id?: "host_header_override"; value?: string }
    | { id?: "ip_geolocation"; value?: "on" | "off" | (string & {}) }
    | { id?: "mirage"; value?: "on" | "off" | (string & {}) }
    | { id?: "opportunistic_encryption"; value?: "on" | "off" | (string & {}) }
    | {
        id?: "origin_error_page_pass_thru";
        value?: "on" | "off" | (string & {});
      }
    | { id?: "polish"; value?: "off" | "lossless" | "lossy" | (string & {}) }
    | { id?: "resolve_override"; value?: string }
    | { id?: "respect_strong_etag"; value?: "on" | "off" | (string & {}) }
    | { id?: "response_buffering"; value?: "on" | "off" | (string & {}) }
    | { id?: "rocket_loader"; value?: "on" | "off" | (string & {}) }
    | {
        id?: "security_level";
        value?:
          | "off"
          | "essentially_off"
          | "low"
          | "medium"
          | "high"
          | "under_attack"
          | (string & {});
      }
    | {
        id?: "sort_query_string_for_cache";
        value?: "on" | "off" | (string & {});
      }
    | {
        id?: "ssl";
        value?:
          | "off"
          | "flexible"
          | "full"
          | "strict"
          | "origin_pull"
          | (string & {});
      }
    | { id?: "true_client_ip_header"; value?: "on" | "off" | (string & {}) }
    | { id?: "waf"; value?: "on" | "off" | (string & {}) }
  )[];
  /** Body param: The priority of the rule, used to define which Page Rule is processed over another. A higher number indicates a higher priority. For example, if you have a catch-all Page Rule (rule A: `/i */
  priority?: number;
  /** Body param: The status of the Page Rule. */
  status?: "active" | "disabled" | (string & {});
  /** Body param: The rule targets to evaluate on each request. */
  targets?: {
    constraint?: {
      operator:
        | "matches"
        | "contains"
        | "equals"
        | "not_equal"
        | "not_contain"
        | (string & {});
      value: string;
    };
    target?: "url";
  }[];
}

export const PatchPageRuleRequest = /*@__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
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
    status: Schema.optional(
      Schema.Union([Schema.Literals(["active", "disabled"]), Schema.String]),
    ),
    targets: Schema.optional(Schema.Array(Target)),
  }).pipe(
    T.Http({
      method: "PATCH",
      path: "/zones/{zone_id}/pagerules/{pageruleId}",
    }),
  ),
) as unknown as Schema.Codec<PatchPageRuleRequest>;

export interface PatchPageRuleResponse {
  /** Identifier. */
  id: string;
  /** The set of actions to perform if the targets of this rule match the request. Actions can redirect to another URL or override settings, but not both. */
  actions: (
    | { id?: "always_use_https" | null }
    | {
        id?: "automatic_https_rewrites" | null;
        value?: "on" | "off" | (string & {}) | null;
      }
    | { id?: "browser_cache_ttl" | null; value?: number | null }
    | {
        id?: "browser_check" | null;
        value?: "on" | "off" | (string & {}) | null;
      }
    | { id?: "bypass_cache_on_cookie" | null; value?: string | null }
    | {
        id?: "cache_by_device_type" | null;
        value?: "on" | "off" | (string & {}) | null;
      }
    | {
        id?: "cache_deception_armor" | null;
        value?: "on" | "off" | (string & {}) | null;
      }
    | {
        id?: "cache_key_fields" | null;
        value?: {
          cookie?: {
            checkPresence?: string[] | null;
            include?: string[] | null;
          } | null;
          header?: {
            checkPresence?: string[] | null;
            exclude?: string[] | null;
            include?: string[] | null;
          } | null;
          host?: { resolved?: boolean | null } | null;
          queryString?: {
            exclude?: "*" | string[] | null;
            include?: "*" | string[] | null;
          } | null;
          user?: {
            deviceType?: boolean | null;
            geo?: boolean | null;
            lang?: boolean | null;
          } | null;
        } | null;
      }
    | {
        id?: "cache_level" | null;
        value?:
          | "bypass"
          | "basic"
          | "simplified"
          | "aggressive"
          | "cache_everything"
          | (string & {})
          | null;
      }
    | { id?: "cache_on_cookie" | null; value?: string | null }
    | {
        id?: "cache_ttl_by_status" | null;
        value?: Record<string, unknown> | null;
      }
    | { id?: "disable_apps" | null }
    | { id?: "disable_performance" | null }
    | { id?: "disable_security" | null }
    | { id?: "disable_zaraz" | null }
    | { id?: "edge_cache_ttl" | null; value?: number | null }
    | {
        id?: "email_obfuscation" | null;
        value?: "on" | "off" | (string & {}) | null;
      }
    | {
        id?: "explicit_cache_control" | null;
        value?: "on" | "off" | (string & {}) | null;
      }
    | {
        id?: "forwarding_url" | null;
        value?: {
          statusCode?: "301" | "302" | (string & {}) | null;
          url?: string | null;
        } | null;
      }
    | { id?: "host_header_override" | null; value?: string | null }
    | {
        id?: "ip_geolocation" | null;
        value?: "on" | "off" | (string & {}) | null;
      }
    | { id?: "mirage" | null; value?: "on" | "off" | (string & {}) | null }
    | {
        id?: "opportunistic_encryption" | null;
        value?: "on" | "off" | (string & {}) | null;
      }
    | {
        id?: "origin_error_page_pass_thru" | null;
        value?: "on" | "off" | (string & {}) | null;
      }
    | {
        id?: "polish" | null;
        value?: "off" | "lossless" | "lossy" | (string & {}) | null;
      }
    | { id?: "resolve_override" | null; value?: string | null }
    | {
        id?: "respect_strong_etag" | null;
        value?: "on" | "off" | (string & {}) | null;
      }
    | {
        id?: "response_buffering" | null;
        value?: "on" | "off" | (string & {}) | null;
      }
    | {
        id?: "rocket_loader" | null;
        value?: "on" | "off" | (string & {}) | null;
      }
    | {
        id?: "security_level" | null;
        value?:
          | "off"
          | "essentially_off"
          | "low"
          | "medium"
          | "high"
          | "under_attack"
          | (string & {})
          | null;
      }
    | {
        id?: "sort_query_string_for_cache" | null;
        value?: "on" | "off" | (string & {}) | null;
      }
    | {
        id?: "ssl" | null;
        value?:
          | "off"
          | "flexible"
          | "full"
          | "strict"
          | "origin_pull"
          | (string & {})
          | null;
      }
    | {
        id?: "true_client_ip_header" | null;
        value?: "on" | "off" | (string & {}) | null;
      }
    | { id?: "waf" | null; value?: "on" | "off" | (string & {}) | null }
  )[];
  /** The timestamp of when the Page Rule was created. */
  createdOn: string;
  /** The timestamp of when the Page Rule was last modified. */
  modifiedOn: string;
  /** The priority of the rule, used to define which Page Rule is processed over another. A higher number indicates a higher priority. For example, if you have a catch-all Page Rule (rule A: `/images/ `) bu */
  priority: number;
  /** The status of the Page Rule. */
  status: "active" | "disabled" | (string & {});
  /** The rule targets to evaluate on each request. */
  targets: {
    constraint?: {
      operator:
        | "matches"
        | "contains"
        | "equals"
        | "not_equal"
        | "not_contain"
        | (string & {});
      value: string;
    } | null;
    target?: "url" | null;
  }[];
}

export const PatchPageRuleResponse = /*@__PURE__*/ Schema.suspend(() =>
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
    status: Schema.Union([
      Schema.Literals(["active", "disabled"]),
      Schema.String,
    ]),
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
    .pipe(T.ResponsePath("result")),
) as unknown as Schema.Codec<PatchPageRuleResponse>;

export type PatchPageRuleError = DefaultErrors | PageRuleNotFound | Forbidden;

export const patchPageRule: API.OperationMethod<
  PatchPageRuleRequest,
  PatchPageRuleResponse,
  PatchPageRuleError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: PatchPageRuleRequest,
  output: PatchPageRuleResponse,
  errors: [PageRuleNotFound, Forbidden],
}));

export interface DeletePageRuleRequest {
  pageruleId: string;
  /** Identifier. */
  zoneId: string;
}

export const DeletePageRuleRequest = /*@__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    pageruleId: Schema.String.pipe(T.HttpPath("pageruleId")),
    zoneId: Schema.String.pipe(T.HttpPath("zone_id")),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/zones/{zone_id}/pagerules/{pageruleId}",
    }),
  ),
) as unknown as Schema.Codec<DeletePageRuleRequest>;

export interface DeletePageRuleResponse {
  /** Identifier. */
  id: string;
}

export const DeletePageRuleResponse =
  /*@__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      id: Schema.String,
    }).pipe(T.ResponsePath("result")),
  ) as unknown as Schema.Codec<DeletePageRuleResponse>;

export type DeletePageRuleError = DefaultErrors | PageRuleNotFound | Forbidden;

export const deletePageRule: API.OperationMethod<
  DeletePageRuleRequest,
  DeletePageRuleResponse,
  DeletePageRuleError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: DeletePageRuleRequest,
  output: DeletePageRuleResponse,
  errors: [PageRuleNotFound, Forbidden],
}));
