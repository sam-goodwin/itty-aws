/**
 * Cloudflare RULESETS API
 *
 * Generated from Cloudflare TypeScript SDK.
 * DO NOT EDIT - regenerate with: bun scripts/generate.ts --service rulesets
 */

import * as stream from "effect/Stream";
import * as Schema from "effect/Schema";
import type * as HttpClient from "effect/unstable/http/HttpClient";
import * as API from "../client/api.ts";
import * as T from "../traits.ts";
import type { Credentials } from "../credentials.ts";
import { type DefaultErrors } from "../errors.ts";
import { SensitiveString } from "../sensitive.ts";

// =============================================================================
// Shared Types
// =============================================================================

export interface ActionParameters {
  automaticHttpsRewrites?: boolean | null;
  autominify?: Autominify | null;
  bic?: boolean | null;
  disableApps?: true | null;
  disablePayPerCrawl?: true | null;
  disableRum?: true | null;
  disableZaraz?: true | null;
  emailObfuscation?: boolean | null;
  fonts?: boolean | null;
  hotlinkProtection?: boolean | null;
  mirage?: boolean | null;
  opportunisticEncryption?: boolean | null;
  polish?: "off" | "lossless" | "lossy" | "webp" | null;
  requestBodyBuffering?: "none" | "standard" | "full" | null;
  responseBodyBuffering?: "none" | "standard" | null;
  rocketLoader?: boolean | null;
  securityLevel?:
    | "off"
    | "essentially_off"
    | "low"
    | "medium"
    | "high"
    | "under_attack"
    | null;
  serverSideExcludes?: boolean | null;
  ssl?: "off" | "flexible" | "full" | "strict" | "origin_pull" | null;
  sxg?: boolean | null;
}

export const ActionParameters: Schema.Schema<ActionParameters> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      automaticHttpsRewrites: Schema.optional(
        Schema.Union([Schema.Boolean, Schema.Null]),
      ),
      autominify: Schema.optional(Schema.Union([Autominify, Schema.Null])),
      bic: Schema.optional(Schema.Union([Schema.Boolean, Schema.Null])),
      disableApps: Schema.optional(
        Schema.Union([Schema.Literal(true), Schema.Null]),
      ),
      disablePayPerCrawl: Schema.optional(
        Schema.Union([Schema.Literal(true), Schema.Null]),
      ),
      disableRum: Schema.optional(
        Schema.Union([Schema.Literal(true), Schema.Null]),
      ),
      disableZaraz: Schema.optional(
        Schema.Union([Schema.Literal(true), Schema.Null]),
      ),
      emailObfuscation: Schema.optional(
        Schema.Union([Schema.Boolean, Schema.Null]),
      ),
      fonts: Schema.optional(Schema.Union([Schema.Boolean, Schema.Null])),
      hotlinkProtection: Schema.optional(
        Schema.Union([Schema.Boolean, Schema.Null]),
      ),
      mirage: Schema.optional(Schema.Union([Schema.Boolean, Schema.Null])),
      opportunisticEncryption: Schema.optional(
        Schema.Union([Schema.Boolean, Schema.Null]),
      ),
      polish: Schema.optional(
        Schema.Union([
          Schema.Literals(["off", "lossless", "lossy", "webp"]),
          Schema.Null,
        ]),
      ),
      requestBodyBuffering: Schema.optional(
        Schema.Union([
          Schema.Literals(["none", "standard", "full"]),
          Schema.Null,
        ]),
      ),
      responseBodyBuffering: Schema.optional(
        Schema.Union([Schema.Literals(["none", "standard"]), Schema.Null]),
      ),
      rocketLoader: Schema.optional(
        Schema.Union([Schema.Boolean, Schema.Null]),
      ),
      securityLevel: Schema.optional(
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
      serverSideExcludes: Schema.optional(
        Schema.Union([Schema.Boolean, Schema.Null]),
      ),
      ssl: Schema.optional(
        Schema.Union([
          Schema.Literals(["off", "flexible", "full", "strict", "origin_pull"]),
          Schema.Null,
        ]),
      ),
      sxg: Schema.optional(Schema.Union([Schema.Boolean, Schema.Null])),
    }).pipe(
      Schema.encodeKeys({
        automaticHttpsRewrites: "automatic_https_rewrites",
        autominify: "autominify",
        bic: "bic",
        disableApps: "disable_apps",
        disablePayPerCrawl: "disable_pay_per_crawl",
        disableRum: "disable_rum",
        disableZaraz: "disable_zaraz",
        emailObfuscation: "email_obfuscation",
        fonts: "fonts",
        hotlinkProtection: "hotlink_protection",
        mirage: "mirage",
        opportunisticEncryption: "opportunistic_encryption",
        polish: "polish",
        requestBodyBuffering: "request_body_buffering",
        responseBodyBuffering: "response_body_buffering",
        rocketLoader: "rocket_loader",
        securityLevel: "security_level",
        serverSideExcludes: "server_side_excludes",
        ssl: "ssl",
        sxg: "sxg",
      }),
    ),
  ) as unknown as Schema.Schema<ActionParameters>;

export interface ActionParametersAsset {
  assetName: string;
  contentType?:
    | "application/json"
    | "text/html"
    | "text/plain"
    | "text/xml"
    | null;
  statusCode?: number | null;
}

export const ActionParametersAsset: Schema.Schema<ActionParametersAsset> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      assetName: Schema.String,
      contentType: Schema.optional(
        Schema.Union([
          Schema.Literals([
            "application/json",
            "text/html",
            "text/plain",
            "text/xml",
          ]),
          Schema.Null,
        ]),
      ),
      statusCode: Schema.optional(Schema.Union([Schema.Number, Schema.Null])),
    }).pipe(
      Schema.encodeKeys({
        assetName: "asset_name",
        contentType: "content_type",
        statusCode: "status_code",
      }),
    ),
  ) as unknown as Schema.Schema<ActionParametersAsset>;

export interface ActionParametersContent {
  content: string;
  contentType?:
    | "application/json"
    | "text/html"
    | "text/plain"
    | "text/xml"
    | null;
  statusCode?: number | null;
}

export const ActionParametersContent: Schema.Schema<ActionParametersContent> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      content: Schema.String,
      contentType: Schema.optional(
        Schema.Union([
          Schema.Literals([
            "application/json",
            "text/html",
            "text/plain",
            "text/xml",
          ]),
          Schema.Null,
        ]),
      ),
      statusCode: Schema.optional(Schema.Union([Schema.Number, Schema.Null])),
    }).pipe(
      Schema.encodeKeys({
        content: "content",
        contentType: "content_type",
        statusCode: "status_code",
      }),
    ),
  ) as unknown as Schema.Schema<ActionParametersContent>;

export interface AfterPosition {
  after?: string | null;
}

export const AfterPosition: Schema.Schema<AfterPosition> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      after: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
    }),
  ) as unknown as Schema.Schema<AfterPosition>;

export interface Algorithm {
  name?: "none" | "auto" | "default" | "gzip" | "brotli" | "zstd" | null;
}

export const Algorithm: Schema.Schema<Algorithm> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      name: Schema.optional(
        Schema.Union([
          Schema.Literals([
            "none",
            "auto",
            "default",
            "gzip",
            "brotli",
            "zstd",
          ]),
          Schema.Null,
        ]),
      ),
    }),
  ) as unknown as Schema.Schema<Algorithm>;

export interface Autominify {
  css?: boolean | null;
  html?: boolean | null;
  js?: boolean | null;
}

export const Autominify: Schema.Schema<Autominify> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      css: Schema.optional(Schema.Union([Schema.Boolean, Schema.Null])),
      html: Schema.optional(Schema.Union([Schema.Boolean, Schema.Null])),
      js: Schema.optional(Schema.Union([Schema.Boolean, Schema.Null])),
    }),
  ) as unknown as Schema.Schema<Autominify>;

export interface BeforePosition {
  before?: string | null;
}

export const BeforePosition: Schema.Schema<BeforePosition> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      before: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
    }),
  ) as unknown as Schema.Schema<BeforePosition>;

export interface BlockRule {
  lastUpdated: string;
  version: string;
  id?: string | null;
  action?: "block" | null;
  actionParameters?: { response?: Response | null } | null;
  categories?: string[] | null;
  description?: string | null;
  enabled?: boolean | null;
  exposedCredentialCheck?: ExposedCredentialCheck | null;
  expression?: string | null;
  logging?: Logging | null;
  ratelimit?: Ratelimit | null;
  ref?: string | null;
}

export const BlockRule: Schema.Schema<BlockRule> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      lastUpdated: Schema.String,
      version: Schema.String,
      id: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
      action: Schema.optional(
        Schema.Union([Schema.Literal("block"), Schema.Null]),
      ),
      actionParameters: Schema.optional(
        Schema.Union([
          Schema.Struct({
            response: Schema.optional(Schema.Union([Response, Schema.Null])),
          }),
          Schema.Null,
        ]),
      ),
      categories: Schema.optional(
        Schema.Union([Schema.Array(Schema.String), Schema.Null]),
      ),
      description: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
      enabled: Schema.optional(Schema.Union([Schema.Boolean, Schema.Null])),
      exposedCredentialCheck: Schema.optional(
        Schema.Union([ExposedCredentialCheck, Schema.Null]),
      ),
      expression: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
      logging: Schema.optional(Schema.Union([Logging, Schema.Null])),
      ratelimit: Schema.optional(Schema.Union([Ratelimit, Schema.Null])),
      ref: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
    }).pipe(
      Schema.encodeKeys({
        lastUpdated: "last_updated",
        version: "version",
        id: "id",
        action: "action",
        actionParameters: "action_parameters",
        categories: "categories",
        description: "description",
        enabled: "enabled",
        exposedCredentialCheck: "exposed_credential_check",
        expression: "expression",
        logging: "logging",
        ratelimit: "ratelimit",
        ref: "ref",
      }),
    ),
  ) as unknown as Schema.Schema<BlockRule>;

export interface BlockRuleParam {
  id?: string | null;
  action?: "block" | null;
  actionParameters?: { response?: Response | null } | null;
  description?: string | null;
  enabled?: boolean | null;
  exposedCredentialCheck?: ExposedCredentialCheck | null;
  expression?: string | null;
  logging?: Logging | null;
  ratelimit?: Ratelimit | null;
  ref?: string | null;
}

export const BlockRuleParam: Schema.Schema<BlockRuleParam> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      id: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
      action: Schema.optional(
        Schema.Union([Schema.Literal("block"), Schema.Null]),
      ),
      actionParameters: Schema.optional(
        Schema.Union([
          Schema.Struct({
            response: Schema.optional(Schema.Union([Response, Schema.Null])),
          }),
          Schema.Null,
        ]),
      ),
      description: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
      enabled: Schema.optional(Schema.Union([Schema.Boolean, Schema.Null])),
      exposedCredentialCheck: Schema.optional(
        Schema.Union([ExposedCredentialCheck, Schema.Null]),
      ),
      expression: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
      logging: Schema.optional(Schema.Union([Logging, Schema.Null])),
      ratelimit: Schema.optional(Schema.Union([Ratelimit, Schema.Null])),
      ref: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
    }).pipe(
      Schema.encodeKeys({
        id: "id",
        action: "action",
        actionParameters: "action_parameters",
        description: "description",
        enabled: "enabled",
        exposedCredentialCheck: "exposed_credential_check",
        expression: "expression",
        logging: "logging",
        ratelimit: "ratelimit",
        ref: "ref",
      }),
    ),
  ) as unknown as Schema.Schema<BlockRuleParam>;

export interface BrowserTTL {
  mode: "respect_origin" | "bypass_by_default" | "override_origin" | "bypass";
  default?: number | null;
}

export const BrowserTTL: Schema.Schema<BrowserTTL> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      mode: Schema.Literals([
        "respect_origin",
        "bypass_by_default",
        "override_origin",
        "bypass",
      ]),
      default: Schema.optional(Schema.Union([Schema.Number, Schema.Null])),
    }),
  ) as unknown as Schema.Schema<BrowserTTL>;

export interface CacheKey {
  cacheByDeviceType?: boolean | null;
  cacheDeceptionArmor?: boolean | null;
  customKey?: CustomKey | null;
  ignoreQueryStringsOrder?: boolean | null;
}

export const CacheKey: Schema.Schema<CacheKey> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      cacheByDeviceType: Schema.optional(
        Schema.Union([Schema.Boolean, Schema.Null]),
      ),
      cacheDeceptionArmor: Schema.optional(
        Schema.Union([Schema.Boolean, Schema.Null]),
      ),
      customKey: Schema.optional(Schema.Union([CustomKey, Schema.Null])),
      ignoreQueryStringsOrder: Schema.optional(
        Schema.Union([Schema.Boolean, Schema.Null]),
      ),
    }).pipe(
      Schema.encodeKeys({
        cacheByDeviceType: "cache_by_device_type",
        cacheDeceptionArmor: "cache_deception_armor",
        customKey: "custom_key",
        ignoreQueryStringsOrder: "ignore_query_strings_order",
      }),
    ),
  ) as unknown as Schema.Schema<CacheKey>;

export interface CacheReserve {
  eligible: boolean;
  minimumFileSize?: number | null;
}

export const CacheReserve: Schema.Schema<CacheReserve> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      eligible: Schema.Boolean,
      minimumFileSize: Schema.optional(
        Schema.Union([Schema.Number, Schema.Null]),
      ),
    }).pipe(
      Schema.encodeKeys({
        eligible: "eligible",
        minimumFileSize: "minimum_file_size",
      }),
    ),
  ) as unknown as Schema.Schema<CacheReserve>;

export interface Category {
  category: string;
  action?: string | null;
  enabled?: boolean | null;
  sensitivityLevel?: "default" | "medium" | "low" | "eoff" | null;
}

export const Category: Schema.Schema<Category> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      category: Schema.String,
      action: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
      enabled: Schema.optional(Schema.Union([Schema.Boolean, Schema.Null])),
      sensitivityLevel: Schema.optional(
        Schema.Union([
          Schema.Literals(["default", "medium", "low", "eoff"]),
          Schema.Null,
        ]),
      ),
    }).pipe(
      Schema.encodeKeys({
        category: "category",
        action: "action",
        enabled: "enabled",
        sensitivityLevel: "sensitivity_level",
      }),
    ),
  ) as unknown as Schema.Schema<Category>;

export interface CompressResponseRule {
  lastUpdated: string;
  version: string;
  id?: string | null;
  action?: "compress_response" | null;
  actionParameters?: { algorithms: Algorithm[] } | null;
  categories?: string[] | null;
  description?: string | null;
  enabled?: boolean | null;
  exposedCredentialCheck?: ExposedCredentialCheck | null;
  expression?: string | null;
  logging?: Logging | null;
  ratelimit?: Ratelimit | null;
  ref?: string | null;
}

export const CompressResponseRule: Schema.Schema<CompressResponseRule> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      lastUpdated: Schema.String,
      version: Schema.String,
      id: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
      action: Schema.optional(
        Schema.Union([Schema.Literal("compress_response"), Schema.Null]),
      ),
      actionParameters: Schema.optional(
        Schema.Union([
          Schema.Struct({
            algorithms: Schema.Array(Algorithm),
          }),
          Schema.Null,
        ]),
      ),
      categories: Schema.optional(
        Schema.Union([Schema.Array(Schema.String), Schema.Null]),
      ),
      description: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
      enabled: Schema.optional(Schema.Union([Schema.Boolean, Schema.Null])),
      exposedCredentialCheck: Schema.optional(
        Schema.Union([ExposedCredentialCheck, Schema.Null]),
      ),
      expression: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
      logging: Schema.optional(Schema.Union([Logging, Schema.Null])),
      ratelimit: Schema.optional(Schema.Union([Ratelimit, Schema.Null])),
      ref: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
    }).pipe(
      Schema.encodeKeys({
        lastUpdated: "last_updated",
        version: "version",
        id: "id",
        action: "action",
        actionParameters: "action_parameters",
        categories: "categories",
        description: "description",
        enabled: "enabled",
        exposedCredentialCheck: "exposed_credential_check",
        expression: "expression",
        logging: "logging",
        ratelimit: "ratelimit",
        ref: "ref",
      }),
    ),
  ) as unknown as Schema.Schema<CompressResponseRule>;

export interface CompressResponseRuleParam {
  id?: string | null;
  action?: "compress_response" | null;
  actionParameters?: { algorithms: Algorithm[] } | null;
  description?: string | null;
  enabled?: boolean | null;
  exposedCredentialCheck?: ExposedCredentialCheck | null;
  expression?: string | null;
  logging?: Logging | null;
  ratelimit?: Ratelimit | null;
  ref?: string | null;
}

export const CompressResponseRuleParam: Schema.Schema<CompressResponseRuleParam> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      id: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
      action: Schema.optional(
        Schema.Union([Schema.Literal("compress_response"), Schema.Null]),
      ),
      actionParameters: Schema.optional(
        Schema.Union([
          Schema.Struct({
            algorithms: Schema.Array(Algorithm),
          }),
          Schema.Null,
        ]),
      ),
      description: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
      enabled: Schema.optional(Schema.Union([Schema.Boolean, Schema.Null])),
      exposedCredentialCheck: Schema.optional(
        Schema.Union([ExposedCredentialCheck, Schema.Null]),
      ),
      expression: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
      logging: Schema.optional(Schema.Union([Logging, Schema.Null])),
      ratelimit: Schema.optional(Schema.Union([Ratelimit, Schema.Null])),
      ref: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
    }).pipe(
      Schema.encodeKeys({
        id: "id",
        action: "action",
        actionParameters: "action_parameters",
        description: "description",
        enabled: "enabled",
        exposedCredentialCheck: "exposed_credential_check",
        expression: "expression",
        logging: "logging",
        ratelimit: "ratelimit",
        ref: "ref",
      }),
    ),
  ) as unknown as Schema.Schema<CompressResponseRuleParam>;

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

export interface CookieField {
  name: string;
}

export const CookieField: Schema.Schema<CookieField> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      name: Schema.String,
    }),
  ) as unknown as Schema.Schema<CookieField>;

export interface CustomKey {
  cookie?: Cookie | null;
  header?: Header | null;
  host?: Host | null;
  queryString?: QueryString | null;
  user?: User | null;
}

export const CustomKey: Schema.Schema<CustomKey> =
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
  ) as unknown as Schema.Schema<CustomKey>;

export interface DdoSDynamicRule {
  lastUpdated: string;
  version: string;
  id?: string | null;
  action?: "ddos_dynamic" | null;
  actionParameters?: unknown | null;
  categories?: string[] | null;
  description?: string | null;
  enabled?: boolean | null;
  exposedCredentialCheck?: ExposedCredentialCheck | null;
  expression?: string | null;
  logging?: Logging | null;
  ratelimit?: Ratelimit | null;
  ref?: string | null;
}

export const DdoSDynamicRule: Schema.Schema<DdoSDynamicRule> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      lastUpdated: Schema.String,
      version: Schema.String,
      id: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
      action: Schema.optional(
        Schema.Union([Schema.Literal("ddos_dynamic"), Schema.Null]),
      ),
      actionParameters: Schema.optional(
        Schema.Union([Schema.Unknown, Schema.Null]),
      ),
      categories: Schema.optional(
        Schema.Union([Schema.Array(Schema.String), Schema.Null]),
      ),
      description: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
      enabled: Schema.optional(Schema.Union([Schema.Boolean, Schema.Null])),
      exposedCredentialCheck: Schema.optional(
        Schema.Union([ExposedCredentialCheck, Schema.Null]),
      ),
      expression: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
      logging: Schema.optional(Schema.Union([Logging, Schema.Null])),
      ratelimit: Schema.optional(Schema.Union([Ratelimit, Schema.Null])),
      ref: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
    }).pipe(
      Schema.encodeKeys({
        lastUpdated: "last_updated",
        version: "version",
        id: "id",
        action: "action",
        actionParameters: "action_parameters",
        categories: "categories",
        description: "description",
        enabled: "enabled",
        exposedCredentialCheck: "exposed_credential_check",
        expression: "expression",
        logging: "logging",
        ratelimit: "ratelimit",
        ref: "ref",
      }),
    ),
  ) as unknown as Schema.Schema<DdoSDynamicRule>;

export interface DdoSDynamicRuleParam {
  id?: string | null;
  action?: "ddos_dynamic" | null;
  actionParameters?: unknown | null;
  description?: string | null;
  enabled?: boolean | null;
  exposedCredentialCheck?: ExposedCredentialCheck | null;
  expression?: string | null;
  logging?: Logging | null;
  ratelimit?: Ratelimit | null;
  ref?: string | null;
}

export const DdoSDynamicRuleParam: Schema.Schema<DdoSDynamicRuleParam> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      id: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
      action: Schema.optional(
        Schema.Union([Schema.Literal("ddos_dynamic"), Schema.Null]),
      ),
      actionParameters: Schema.optional(
        Schema.Union([Schema.Unknown, Schema.Null]),
      ),
      description: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
      enabled: Schema.optional(Schema.Union([Schema.Boolean, Schema.Null])),
      exposedCredentialCheck: Schema.optional(
        Schema.Union([ExposedCredentialCheck, Schema.Null]),
      ),
      expression: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
      logging: Schema.optional(Schema.Union([Logging, Schema.Null])),
      ratelimit: Schema.optional(Schema.Union([Ratelimit, Schema.Null])),
      ref: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
    }).pipe(
      Schema.encodeKeys({
        id: "id",
        action: "action",
        actionParameters: "action_parameters",
        description: "description",
        enabled: "enabled",
        exposedCredentialCheck: "exposed_credential_check",
        expression: "expression",
        logging: "logging",
        ratelimit: "ratelimit",
        ref: "ref",
      }),
    ),
  ) as unknown as Schema.Schema<DdoSDynamicRuleParam>;

export interface EdgeTTL {
  mode: "respect_origin" | "bypass_by_default" | "override_origin";
  default?: number | null;
  statusCodeTtl?: StatusCodeTTL[] | null;
}

export const EdgeTTL: Schema.Schema<EdgeTTL> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      mode: Schema.Literals([
        "respect_origin",
        "bypass_by_default",
        "override_origin",
      ]),
      default: Schema.optional(Schema.Union([Schema.Number, Schema.Null])),
      statusCodeTtl: Schema.optional(
        Schema.Union([Schema.Array(StatusCodeTTL), Schema.Null]),
      ),
    }).pipe(
      Schema.encodeKeys({
        mode: "mode",
        default: "default",
        statusCodeTtl: "status_code_ttl",
      }),
    ),
  ) as unknown as Schema.Schema<EdgeTTL>;

export interface Exclude {
  all?: true | null;
  list?: string[] | null;
}

export const Exclude: Schema.Schema<Exclude> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      all: Schema.optional(Schema.Union([Schema.Literal(true), Schema.Null])),
      list: Schema.optional(
        Schema.Union([Schema.Array(Schema.String), Schema.Null]),
      ),
    }),
  ) as unknown as Schema.Schema<Exclude>;

export interface ExecuteRule {
  lastUpdated: string;
  version: string;
  id?: string | null;
  action?: "execute" | null;
  actionParameters?: {
    id: string;
    matchedData?: MatchedData | null;
    overrides?: Overrides | null;
  } | null;
  categories?: string[] | null;
  description?: string | null;
  enabled?: boolean | null;
  exposedCredentialCheck?: ExposedCredentialCheck | null;
  expression?: string | null;
  logging?: Logging | null;
  ratelimit?: Ratelimit | null;
  ref?: string | null;
}

export const ExecuteRule: Schema.Schema<ExecuteRule> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      lastUpdated: Schema.String,
      version: Schema.String,
      id: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
      action: Schema.optional(
        Schema.Union([Schema.Literal("execute"), Schema.Null]),
      ),
      actionParameters: Schema.optional(
        Schema.Union([
          Schema.Struct({
            id: Schema.String,
            matchedData: Schema.optional(
              Schema.Union([MatchedData, Schema.Null]),
            ),
            overrides: Schema.optional(Schema.Union([Overrides, Schema.Null])),
          }).pipe(
            Schema.encodeKeys({
              id: "id",
              matchedData: "matched_data",
              overrides: "overrides",
            }),
          ),
          Schema.Null,
        ]),
      ),
      categories: Schema.optional(
        Schema.Union([Schema.Array(Schema.String), Schema.Null]),
      ),
      description: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
      enabled: Schema.optional(Schema.Union([Schema.Boolean, Schema.Null])),
      exposedCredentialCheck: Schema.optional(
        Schema.Union([ExposedCredentialCheck, Schema.Null]),
      ),
      expression: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
      logging: Schema.optional(Schema.Union([Logging, Schema.Null])),
      ratelimit: Schema.optional(Schema.Union([Ratelimit, Schema.Null])),
      ref: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
    }).pipe(
      Schema.encodeKeys({
        lastUpdated: "last_updated",
        version: "version",
        id: "id",
        action: "action",
        actionParameters: "action_parameters",
        categories: "categories",
        description: "description",
        enabled: "enabled",
        exposedCredentialCheck: "exposed_credential_check",
        expression: "expression",
        logging: "logging",
        ratelimit: "ratelimit",
        ref: "ref",
      }),
    ),
  ) as unknown as Schema.Schema<ExecuteRule>;

export interface ExecuteRuleParam {
  id?: string | null;
  action?: "execute" | null;
  actionParameters?: {
    id: string;
    matchedData?: MatchedData | null;
    overrides?: Overrides | null;
  } | null;
  description?: string | null;
  enabled?: boolean | null;
  exposedCredentialCheck?: ExposedCredentialCheck | null;
  expression?: string | null;
  logging?: Logging | null;
  ratelimit?: Ratelimit | null;
  ref?: string | null;
}

export const ExecuteRuleParam: Schema.Schema<ExecuteRuleParam> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      id: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
      action: Schema.optional(
        Schema.Union([Schema.Literal("execute"), Schema.Null]),
      ),
      actionParameters: Schema.optional(
        Schema.Union([
          Schema.Struct({
            id: Schema.String,
            matchedData: Schema.optional(
              Schema.Union([MatchedData, Schema.Null]),
            ),
            overrides: Schema.optional(Schema.Union([Overrides, Schema.Null])),
          }).pipe(
            Schema.encodeKeys({
              id: "id",
              matchedData: "matched_data",
              overrides: "overrides",
            }),
          ),
          Schema.Null,
        ]),
      ),
      description: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
      enabled: Schema.optional(Schema.Union([Schema.Boolean, Schema.Null])),
      exposedCredentialCheck: Schema.optional(
        Schema.Union([ExposedCredentialCheck, Schema.Null]),
      ),
      expression: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
      logging: Schema.optional(Schema.Union([Logging, Schema.Null])),
      ratelimit: Schema.optional(Schema.Union([Ratelimit, Schema.Null])),
      ref: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
    }).pipe(
      Schema.encodeKeys({
        id: "id",
        action: "action",
        actionParameters: "action_parameters",
        description: "description",
        enabled: "enabled",
        exposedCredentialCheck: "exposed_credential_check",
        expression: "expression",
        logging: "logging",
        ratelimit: "ratelimit",
        ref: "ref",
      }),
    ),
  ) as unknown as Schema.Schema<ExecuteRuleParam>;

export interface ExposedCredentialCheck {
  passwordExpression: string;
  usernameExpression: string;
}

export const ExposedCredentialCheck: Schema.Schema<ExposedCredentialCheck> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      passwordExpression: SensitiveString,
      usernameExpression: Schema.String,
    }).pipe(
      Schema.encodeKeys({
        passwordExpression: "password_expression",
        usernameExpression: "username_expression",
      }),
    ),
  ) as unknown as Schema.Schema<ExposedCredentialCheck>;

export interface ForceConnectionCloseRule {
  lastUpdated: string;
  version: string;
  id?: string | null;
  action?: "force_connection_close" | null;
  actionParameters?: unknown | null;
  categories?: string[] | null;
  description?: string | null;
  enabled?: boolean | null;
  exposedCredentialCheck?: ExposedCredentialCheck | null;
  expression?: string | null;
  logging?: Logging | null;
  ratelimit?: Ratelimit | null;
  ref?: string | null;
}

export const ForceConnectionCloseRule: Schema.Schema<ForceConnectionCloseRule> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      lastUpdated: Schema.String,
      version: Schema.String,
      id: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
      action: Schema.optional(
        Schema.Union([Schema.Literal("force_connection_close"), Schema.Null]),
      ),
      actionParameters: Schema.optional(
        Schema.Union([Schema.Unknown, Schema.Null]),
      ),
      categories: Schema.optional(
        Schema.Union([Schema.Array(Schema.String), Schema.Null]),
      ),
      description: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
      enabled: Schema.optional(Schema.Union([Schema.Boolean, Schema.Null])),
      exposedCredentialCheck: Schema.optional(
        Schema.Union([ExposedCredentialCheck, Schema.Null]),
      ),
      expression: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
      logging: Schema.optional(Schema.Union([Logging, Schema.Null])),
      ratelimit: Schema.optional(Schema.Union([Ratelimit, Schema.Null])),
      ref: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
    }).pipe(
      Schema.encodeKeys({
        lastUpdated: "last_updated",
        version: "version",
        id: "id",
        action: "action",
        actionParameters: "action_parameters",
        categories: "categories",
        description: "description",
        enabled: "enabled",
        exposedCredentialCheck: "exposed_credential_check",
        expression: "expression",
        logging: "logging",
        ratelimit: "ratelimit",
        ref: "ref",
      }),
    ),
  ) as unknown as Schema.Schema<ForceConnectionCloseRule>;

export interface ForceConnectionCloseRuleParam {
  id?: string | null;
  action?: "force_connection_close" | null;
  actionParameters?: unknown | null;
  description?: string | null;
  enabled?: boolean | null;
  exposedCredentialCheck?: ExposedCredentialCheck | null;
  expression?: string | null;
  logging?: Logging | null;
  ratelimit?: Ratelimit | null;
  ref?: string | null;
}

export const ForceConnectionCloseRuleParam: Schema.Schema<ForceConnectionCloseRuleParam> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      id: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
      action: Schema.optional(
        Schema.Union([Schema.Literal("force_connection_close"), Schema.Null]),
      ),
      actionParameters: Schema.optional(
        Schema.Union([Schema.Unknown, Schema.Null]),
      ),
      description: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
      enabled: Schema.optional(Schema.Union([Schema.Boolean, Schema.Null])),
      exposedCredentialCheck: Schema.optional(
        Schema.Union([ExposedCredentialCheck, Schema.Null]),
      ),
      expression: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
      logging: Schema.optional(Schema.Union([Logging, Schema.Null])),
      ratelimit: Schema.optional(Schema.Union([Ratelimit, Schema.Null])),
      ref: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
    }).pipe(
      Schema.encodeKeys({
        id: "id",
        action: "action",
        actionParameters: "action_parameters",
        description: "description",
        enabled: "enabled",
        exposedCredentialCheck: "exposed_credential_check",
        expression: "expression",
        logging: "logging",
        ratelimit: "ratelimit",
        ref: "ref",
      }),
    ),
  ) as unknown as Schema.Schema<ForceConnectionCloseRuleParam>;

export interface FromList {
  key: string;
  name: string;
}

export const FromList: Schema.Schema<FromList> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      key: Schema.String,
      name: Schema.String,
    }),
  ) as unknown as Schema.Schema<FromList>;

export interface FromValue {
  targetUrl: Query;
  preserveQueryString?: boolean | null;
  statusCode?: "301" | "302" | "303" | "307" | "308" | null;
}

export const FromValue: Schema.Schema<FromValue> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      targetUrl: Query,
      preserveQueryString: Schema.optional(
        Schema.Union([Schema.Boolean, Schema.Null]),
      ),
      statusCode: Schema.optional(
        Schema.Union([
          Schema.Literals(["301", "302", "303", "307", "308"]),
          Schema.Null,
        ]),
      ),
    }).pipe(
      Schema.encodeKeys({
        targetUrl: "target_url",
        preserveQueryString: "preserve_query_string",
        statusCode: "status_code",
      }),
    ),
  ) as unknown as Schema.Schema<FromValue>;

export interface Header {
  checkPresence?: string[] | null;
  contains?: Record<string, unknown> | null;
  excludeOrigin?: boolean | null;
  include?: string[] | null;
}

export const Header: Schema.Schema<Header> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      checkPresence: Schema.optional(
        Schema.Union([Schema.Array(Schema.String), Schema.Null]),
      ),
      contains: Schema.optional(
        Schema.Union([
          Schema.Record(Schema.String, Schema.Unknown),
          Schema.Null,
        ]),
      ),
      excludeOrigin: Schema.optional(
        Schema.Union([Schema.Boolean, Schema.Null]),
      ),
      include: Schema.optional(
        Schema.Union([Schema.Array(Schema.String), Schema.Null]),
      ),
    }).pipe(
      Schema.encodeKeys({
        checkPresence: "check_presence",
        contains: "contains",
        excludeOrigin: "exclude_origin",
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

export interface Include {
  all?: true | null;
  list?: string[] | null;
}

export const Include: Schema.Schema<Include> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      all: Schema.optional(Schema.Union([Schema.Literal(true), Schema.Null])),
      list: Schema.optional(
        Schema.Union([Schema.Array(Schema.String), Schema.Null]),
      ),
    }),
  ) as unknown as Schema.Schema<Include>;

export interface IndexPosition {
  index?: number | null;
}

export const IndexPosition: Schema.Schema<IndexPosition> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      index: Schema.optional(Schema.Union([Schema.Number, Schema.Null])),
    }),
  ) as unknown as Schema.Schema<IndexPosition>;

export interface LogCustomFieldRule {
  lastUpdated: string;
  version: string;
  id?: string | null;
  action?: "log_custom_field" | null;
  actionParameters?: {
    cookieFields?: TransformedRequestField[] | null;
    rawResponseFields?: ResponseField[] | null;
    requestFields?: TransformedRequestField[] | null;
    responseFields?: ResponseField[] | null;
    transformedRequestFields?: TransformedRequestField[] | null;
  } | null;
  categories?: string[] | null;
  description?: string | null;
  enabled?: boolean | null;
  exposedCredentialCheck?: ExposedCredentialCheck | null;
  expression?: string | null;
  logging?: Logging | null;
  ratelimit?: Ratelimit | null;
  ref?: string | null;
}

export const LogCustomFieldRule: Schema.Schema<LogCustomFieldRule> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      lastUpdated: Schema.String,
      version: Schema.String,
      id: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
      action: Schema.optional(
        Schema.Union([Schema.Literal("log_custom_field"), Schema.Null]),
      ),
      actionParameters: Schema.optional(
        Schema.Union([
          Schema.Struct({
            cookieFields: Schema.optional(
              Schema.Union([
                Schema.Array(TransformedRequestField),
                Schema.Null,
              ]),
            ),
            rawResponseFields: Schema.optional(
              Schema.Union([Schema.Array(ResponseField), Schema.Null]),
            ),
            requestFields: Schema.optional(
              Schema.Union([
                Schema.Array(TransformedRequestField),
                Schema.Null,
              ]),
            ),
            responseFields: Schema.optional(
              Schema.Union([Schema.Array(ResponseField), Schema.Null]),
            ),
            transformedRequestFields: Schema.optional(
              Schema.Union([
                Schema.Array(TransformedRequestField),
                Schema.Null,
              ]),
            ),
          }).pipe(
            Schema.encodeKeys({
              cookieFields: "cookie_fields",
              rawResponseFields: "raw_response_fields",
              requestFields: "request_fields",
              responseFields: "response_fields",
              transformedRequestFields: "transformed_request_fields",
            }),
          ),
          Schema.Null,
        ]),
      ),
      categories: Schema.optional(
        Schema.Union([Schema.Array(Schema.String), Schema.Null]),
      ),
      description: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
      enabled: Schema.optional(Schema.Union([Schema.Boolean, Schema.Null])),
      exposedCredentialCheck: Schema.optional(
        Schema.Union([ExposedCredentialCheck, Schema.Null]),
      ),
      expression: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
      logging: Schema.optional(Schema.Union([Logging, Schema.Null])),
      ratelimit: Schema.optional(Schema.Union([Ratelimit, Schema.Null])),
      ref: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
    }).pipe(
      Schema.encodeKeys({
        lastUpdated: "last_updated",
        version: "version",
        id: "id",
        action: "action",
        actionParameters: "action_parameters",
        categories: "categories",
        description: "description",
        enabled: "enabled",
        exposedCredentialCheck: "exposed_credential_check",
        expression: "expression",
        logging: "logging",
        ratelimit: "ratelimit",
        ref: "ref",
      }),
    ),
  ) as unknown as Schema.Schema<LogCustomFieldRule>;

export interface LogCustomFieldRuleParam {
  id?: string | null;
  action?: "log_custom_field" | null;
  actionParameters?: {
    cookieFields?: TransformedRequestField[] | null;
    rawResponseFields?: ResponseField[] | null;
    requestFields?: TransformedRequestField[] | null;
    responseFields?: ResponseField[] | null;
    transformedRequestFields?: TransformedRequestField[] | null;
  } | null;
  description?: string | null;
  enabled?: boolean | null;
  exposedCredentialCheck?: ExposedCredentialCheck | null;
  expression?: string | null;
  logging?: Logging | null;
  ratelimit?: Ratelimit | null;
  ref?: string | null;
}

export const LogCustomFieldRuleParam: Schema.Schema<LogCustomFieldRuleParam> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      id: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
      action: Schema.optional(
        Schema.Union([Schema.Literal("log_custom_field"), Schema.Null]),
      ),
      actionParameters: Schema.optional(
        Schema.Union([
          Schema.Struct({
            cookieFields: Schema.optional(
              Schema.Union([
                Schema.Array(TransformedRequestField),
                Schema.Null,
              ]),
            ),
            rawResponseFields: Schema.optional(
              Schema.Union([Schema.Array(ResponseField), Schema.Null]),
            ),
            requestFields: Schema.optional(
              Schema.Union([
                Schema.Array(TransformedRequestField),
                Schema.Null,
              ]),
            ),
            responseFields: Schema.optional(
              Schema.Union([Schema.Array(ResponseField), Schema.Null]),
            ),
            transformedRequestFields: Schema.optional(
              Schema.Union([
                Schema.Array(TransformedRequestField),
                Schema.Null,
              ]),
            ),
          }).pipe(
            Schema.encodeKeys({
              cookieFields: "cookie_fields",
              rawResponseFields: "raw_response_fields",
              requestFields: "request_fields",
              responseFields: "response_fields",
              transformedRequestFields: "transformed_request_fields",
            }),
          ),
          Schema.Null,
        ]),
      ),
      description: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
      enabled: Schema.optional(Schema.Union([Schema.Boolean, Schema.Null])),
      exposedCredentialCheck: Schema.optional(
        Schema.Union([ExposedCredentialCheck, Schema.Null]),
      ),
      expression: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
      logging: Schema.optional(Schema.Union([Logging, Schema.Null])),
      ratelimit: Schema.optional(Schema.Union([Ratelimit, Schema.Null])),
      ref: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
    }).pipe(
      Schema.encodeKeys({
        id: "id",
        action: "action",
        actionParameters: "action_parameters",
        description: "description",
        enabled: "enabled",
        exposedCredentialCheck: "exposed_credential_check",
        expression: "expression",
        logging: "logging",
        ratelimit: "ratelimit",
        ref: "ref",
      }),
    ),
  ) as unknown as Schema.Schema<LogCustomFieldRuleParam>;

export interface Logging {
  enabled: boolean;
}

export const Logging: Schema.Schema<Logging> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      enabled: Schema.Boolean,
    }),
  ) as unknown as Schema.Schema<Logging>;

export interface LoggingParam {
  enabled: boolean;
}

export const LoggingParam: Schema.Schema<LoggingParam> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      enabled: Schema.Boolean,
    }),
  ) as unknown as Schema.Schema<LoggingParam>;

export interface LogRule {
  lastUpdated: string;
  version: string;
  id?: string | null;
  action?: "log" | null;
  actionParameters?: unknown | null;
  categories?: string[] | null;
  description?: string | null;
  enabled?: boolean | null;
  exposedCredentialCheck?: ExposedCredentialCheck | null;
  expression?: string | null;
  logging?: Logging | null;
  ratelimit?: Ratelimit | null;
  ref?: string | null;
}

export const LogRule: Schema.Schema<LogRule> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      lastUpdated: Schema.String,
      version: Schema.String,
      id: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
      action: Schema.optional(
        Schema.Union([Schema.Literal("log"), Schema.Null]),
      ),
      actionParameters: Schema.optional(
        Schema.Union([Schema.Unknown, Schema.Null]),
      ),
      categories: Schema.optional(
        Schema.Union([Schema.Array(Schema.String), Schema.Null]),
      ),
      description: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
      enabled: Schema.optional(Schema.Union([Schema.Boolean, Schema.Null])),
      exposedCredentialCheck: Schema.optional(
        Schema.Union([ExposedCredentialCheck, Schema.Null]),
      ),
      expression: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
      logging: Schema.optional(Schema.Union([Logging, Schema.Null])),
      ratelimit: Schema.optional(Schema.Union([Ratelimit, Schema.Null])),
      ref: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
    }).pipe(
      Schema.encodeKeys({
        lastUpdated: "last_updated",
        version: "version",
        id: "id",
        action: "action",
        actionParameters: "action_parameters",
        categories: "categories",
        description: "description",
        enabled: "enabled",
        exposedCredentialCheck: "exposed_credential_check",
        expression: "expression",
        logging: "logging",
        ratelimit: "ratelimit",
        ref: "ref",
      }),
    ),
  ) as unknown as Schema.Schema<LogRule>;

export interface LogRuleParam {
  id?: string | null;
  action?: "log" | null;
  actionParameters?: unknown | null;
  description?: string | null;
  enabled?: boolean | null;
  exposedCredentialCheck?: ExposedCredentialCheck | null;
  expression?: string | null;
  logging?: Logging | null;
  ratelimit?: Ratelimit | null;
  ref?: string | null;
}

export const LogRuleParam: Schema.Schema<LogRuleParam> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      id: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
      action: Schema.optional(
        Schema.Union([Schema.Literal("log"), Schema.Null]),
      ),
      actionParameters: Schema.optional(
        Schema.Union([Schema.Unknown, Schema.Null]),
      ),
      description: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
      enabled: Schema.optional(Schema.Union([Schema.Boolean, Schema.Null])),
      exposedCredentialCheck: Schema.optional(
        Schema.Union([ExposedCredentialCheck, Schema.Null]),
      ),
      expression: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
      logging: Schema.optional(Schema.Union([Logging, Schema.Null])),
      ratelimit: Schema.optional(Schema.Union([Ratelimit, Schema.Null])),
      ref: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
    }).pipe(
      Schema.encodeKeys({
        id: "id",
        action: "action",
        actionParameters: "action_parameters",
        description: "description",
        enabled: "enabled",
        exposedCredentialCheck: "exposed_credential_check",
        expression: "expression",
        logging: "logging",
        ratelimit: "ratelimit",
        ref: "ref",
      }),
    ),
  ) as unknown as Schema.Schema<LogRuleParam>;

export interface ManagedChallengeRule {
  lastUpdated: string;
  version: string;
  id?: string | null;
  action?: "managed_challenge" | null;
  actionParameters?: unknown | null;
  categories?: string[] | null;
  description?: string | null;
  enabled?: boolean | null;
  exposedCredentialCheck?: ExposedCredentialCheck | null;
  expression?: string | null;
  logging?: Logging | null;
  ratelimit?: Ratelimit | null;
  ref?: string | null;
}

export const ManagedChallengeRule: Schema.Schema<ManagedChallengeRule> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      lastUpdated: Schema.String,
      version: Schema.String,
      id: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
      action: Schema.optional(
        Schema.Union([Schema.Literal("managed_challenge"), Schema.Null]),
      ),
      actionParameters: Schema.optional(
        Schema.Union([Schema.Unknown, Schema.Null]),
      ),
      categories: Schema.optional(
        Schema.Union([Schema.Array(Schema.String), Schema.Null]),
      ),
      description: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
      enabled: Schema.optional(Schema.Union([Schema.Boolean, Schema.Null])),
      exposedCredentialCheck: Schema.optional(
        Schema.Union([ExposedCredentialCheck, Schema.Null]),
      ),
      expression: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
      logging: Schema.optional(Schema.Union([Logging, Schema.Null])),
      ratelimit: Schema.optional(Schema.Union([Ratelimit, Schema.Null])),
      ref: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
    }).pipe(
      Schema.encodeKeys({
        lastUpdated: "last_updated",
        version: "version",
        id: "id",
        action: "action",
        actionParameters: "action_parameters",
        categories: "categories",
        description: "description",
        enabled: "enabled",
        exposedCredentialCheck: "exposed_credential_check",
        expression: "expression",
        logging: "logging",
        ratelimit: "ratelimit",
        ref: "ref",
      }),
    ),
  ) as unknown as Schema.Schema<ManagedChallengeRule>;

export interface ManagedChallengeRuleParam {
  id?: string | null;
  action?: "managed_challenge" | null;
  actionParameters?: unknown | null;
  description?: string | null;
  enabled?: boolean | null;
  exposedCredentialCheck?: ExposedCredentialCheck | null;
  expression?: string | null;
  logging?: Logging | null;
  ratelimit?: Ratelimit | null;
  ref?: string | null;
}

export const ManagedChallengeRuleParam: Schema.Schema<ManagedChallengeRuleParam> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      id: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
      action: Schema.optional(
        Schema.Union([Schema.Literal("managed_challenge"), Schema.Null]),
      ),
      actionParameters: Schema.optional(
        Schema.Union([Schema.Unknown, Schema.Null]),
      ),
      description: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
      enabled: Schema.optional(Schema.Union([Schema.Boolean, Schema.Null])),
      exposedCredentialCheck: Schema.optional(
        Schema.Union([ExposedCredentialCheck, Schema.Null]),
      ),
      expression: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
      logging: Schema.optional(Schema.Union([Logging, Schema.Null])),
      ratelimit: Schema.optional(Schema.Union([Ratelimit, Schema.Null])),
      ref: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
    }).pipe(
      Schema.encodeKeys({
        id: "id",
        action: "action",
        actionParameters: "action_parameters",
        description: "description",
        enabled: "enabled",
        exposedCredentialCheck: "exposed_credential_check",
        expression: "expression",
        logging: "logging",
        ratelimit: "ratelimit",
        ref: "ref",
      }),
    ),
  ) as unknown as Schema.Schema<ManagedChallengeRuleParam>;

export interface MatchedData {
  publicKey: string;
}

export const MatchedData: Schema.Schema<MatchedData> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      publicKey: Schema.String,
    }).pipe(Schema.encodeKeys({ publicKey: "public_key" })),
  ) as unknown as Schema.Schema<MatchedData>;

export interface Origin {
  host?: string | null;
  port?: number | null;
}

export const Origin: Schema.Schema<Origin> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      host: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
      port: Schema.optional(Schema.Union([Schema.Number, Schema.Null])),
    }),
  ) as unknown as Schema.Schema<Origin>;

export interface Overrides {
  action?: string | null;
  categories?: Category[] | null;
  enabled?: boolean | null;
  rules?: Rule[] | null;
  sensitivityLevel?: "default" | "medium" | "low" | "eoff" | null;
}

export const Overrides: Schema.Schema<Overrides> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      action: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
      categories: Schema.optional(
        Schema.Union([Schema.Array(Category), Schema.Null]),
      ),
      enabled: Schema.optional(Schema.Union([Schema.Boolean, Schema.Null])),
      rules: Schema.optional(Schema.Union([Schema.Array(Rule), Schema.Null])),
      sensitivityLevel: Schema.optional(
        Schema.Union([
          Schema.Literals(["default", "medium", "low", "eoff"]),
          Schema.Null,
        ]),
      ),
    }).pipe(
      Schema.encodeKeys({
        action: "action",
        categories: "categories",
        enabled: "enabled",
        rules: "rules",
        sensitivityLevel: "sensitivity_level",
      }),
    ),
  ) as unknown as Schema.Schema<Overrides>;

export interface Path {
  expression?: string | null;
  value?: string | null;
}

export const Path: Schema.Schema<Path> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      expression: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
      value: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
    }),
  ) as unknown as Schema.Schema<Path>;

export interface Query {
  expression?: string | null;
  value?: string | null;
}

export const Query: Schema.Schema<Query> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      expression: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
      value: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
    }),
  ) as unknown as Schema.Schema<Query>;

export interface QueryString {
  exclude?: Include | null;
  include?: Include | null;
}

export const QueryString: Schema.Schema<QueryString> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      exclude: Schema.optional(Schema.Union([Include, Schema.Null])),
      include: Schema.optional(Schema.Union([Include, Schema.Null])),
    }),
  ) as unknown as Schema.Schema<QueryString>;

export interface Ratelimit {
  characteristics: string[];
  period: number;
  countingExpression?: string | null;
  mitigationTimeout?: number | null;
  requestsPerPeriod?: number | null;
  requestsToOrigin?: boolean | null;
  scorePerPeriod?: number | null;
  scoreResponseHeaderName?: string | null;
}

export const Ratelimit: Schema.Schema<Ratelimit> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      characteristics: Schema.Array(Schema.String),
      period: Schema.Number,
      countingExpression: Schema.optional(
        Schema.Union([Schema.String, Schema.Null]),
      ),
      mitigationTimeout: Schema.optional(
        Schema.Union([Schema.Number, Schema.Null]),
      ),
      requestsPerPeriod: Schema.optional(
        Schema.Union([Schema.Number, Schema.Null]),
      ),
      requestsToOrigin: Schema.optional(
        Schema.Union([Schema.Boolean, Schema.Null]),
      ),
      scorePerPeriod: Schema.optional(
        Schema.Union([Schema.Number, Schema.Null]),
      ),
      scoreResponseHeaderName: Schema.optional(
        Schema.Union([Schema.String, Schema.Null]),
      ),
    }).pipe(
      Schema.encodeKeys({
        characteristics: "characteristics",
        period: "period",
        countingExpression: "counting_expression",
        mitigationTimeout: "mitigation_timeout",
        requestsPerPeriod: "requests_per_period",
        requestsToOrigin: "requests_to_origin",
        scorePerPeriod: "score_per_period",
        scoreResponseHeaderName: "score_response_header_name",
      }),
    ),
  ) as unknown as Schema.Schema<Ratelimit>;

export interface RawResponseField {
  name: string;
  preserveDuplicates?: boolean | null;
}

export const RawResponseField: Schema.Schema<RawResponseField> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      name: Schema.String,
      preserveDuplicates: Schema.optional(
        Schema.Union([Schema.Boolean, Schema.Null]),
      ),
    }).pipe(
      Schema.encodeKeys({
        name: "name",
        preserveDuplicates: "preserve_duplicates",
      }),
    ),
  ) as unknown as Schema.Schema<RawResponseField>;

export interface RedirectRule {
  lastUpdated: string;
  version: string;
  id?: string | null;
  action?: "redirect" | null;
  actionParameters?: {
    fromList?: FromList | null;
    fromValue?: FromValue | null;
  } | null;
  categories?: string[] | null;
  description?: string | null;
  enabled?: boolean | null;
  exposedCredentialCheck?: ExposedCredentialCheck | null;
  expression?: string | null;
  logging?: Logging | null;
  ratelimit?: Ratelimit | null;
  ref?: string | null;
}

export const RedirectRule: Schema.Schema<RedirectRule> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      lastUpdated: Schema.String,
      version: Schema.String,
      id: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
      action: Schema.optional(
        Schema.Union([Schema.Literal("redirect"), Schema.Null]),
      ),
      actionParameters: Schema.optional(
        Schema.Union([
          Schema.Struct({
            fromList: Schema.optional(Schema.Union([FromList, Schema.Null])),
            fromValue: Schema.optional(Schema.Union([FromValue, Schema.Null])),
          }).pipe(
            Schema.encodeKeys({
              fromList: "from_list",
              fromValue: "from_value",
            }),
          ),
          Schema.Null,
        ]),
      ),
      categories: Schema.optional(
        Schema.Union([Schema.Array(Schema.String), Schema.Null]),
      ),
      description: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
      enabled: Schema.optional(Schema.Union([Schema.Boolean, Schema.Null])),
      exposedCredentialCheck: Schema.optional(
        Schema.Union([ExposedCredentialCheck, Schema.Null]),
      ),
      expression: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
      logging: Schema.optional(Schema.Union([Logging, Schema.Null])),
      ratelimit: Schema.optional(Schema.Union([Ratelimit, Schema.Null])),
      ref: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
    }).pipe(
      Schema.encodeKeys({
        lastUpdated: "last_updated",
        version: "version",
        id: "id",
        action: "action",
        actionParameters: "action_parameters",
        categories: "categories",
        description: "description",
        enabled: "enabled",
        exposedCredentialCheck: "exposed_credential_check",
        expression: "expression",
        logging: "logging",
        ratelimit: "ratelimit",
        ref: "ref",
      }),
    ),
  ) as unknown as Schema.Schema<RedirectRule>;

export interface RedirectRuleParam {
  id?: string | null;
  action?: "redirect" | null;
  actionParameters?: {
    fromList?: FromList | null;
    fromValue?: FromValue | null;
  } | null;
  description?: string | null;
  enabled?: boolean | null;
  exposedCredentialCheck?: ExposedCredentialCheck | null;
  expression?: string | null;
  logging?: Logging | null;
  ratelimit?: Ratelimit | null;
  ref?: string | null;
}

export const RedirectRuleParam: Schema.Schema<RedirectRuleParam> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      id: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
      action: Schema.optional(
        Schema.Union([Schema.Literal("redirect"), Schema.Null]),
      ),
      actionParameters: Schema.optional(
        Schema.Union([
          Schema.Struct({
            fromList: Schema.optional(Schema.Union([FromList, Schema.Null])),
            fromValue: Schema.optional(Schema.Union([FromValue, Schema.Null])),
          }).pipe(
            Schema.encodeKeys({
              fromList: "from_list",
              fromValue: "from_value",
            }),
          ),
          Schema.Null,
        ]),
      ),
      description: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
      enabled: Schema.optional(Schema.Union([Schema.Boolean, Schema.Null])),
      exposedCredentialCheck: Schema.optional(
        Schema.Union([ExposedCredentialCheck, Schema.Null]),
      ),
      expression: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
      logging: Schema.optional(Schema.Union([Logging, Schema.Null])),
      ratelimit: Schema.optional(Schema.Union([Ratelimit, Schema.Null])),
      ref: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
    }).pipe(
      Schema.encodeKeys({
        id: "id",
        action: "action",
        actionParameters: "action_parameters",
        description: "description",
        enabled: "enabled",
        exposedCredentialCheck: "exposed_credential_check",
        expression: "expression",
        logging: "logging",
        ratelimit: "ratelimit",
        ref: "ref",
      }),
    ),
  ) as unknown as Schema.Schema<RedirectRuleParam>;

export interface RequestField {
  name: string;
}

export const RequestField: Schema.Schema<RequestField> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      name: Schema.String,
    }),
  ) as unknown as Schema.Schema<RequestField>;

export interface Response {
  content: string;
  contentType: string;
  statusCode: number;
}

export const Response: Schema.Schema<Response> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      content: Schema.String,
      contentType: Schema.String,
      statusCode: Schema.Number,
    }).pipe(
      Schema.encodeKeys({
        content: "content",
        contentType: "content_type",
        statusCode: "status_code",
      }),
    ),
  ) as unknown as Schema.Schema<Response>;

export interface ResponseField {
  name: string;
  preserveDuplicates?: boolean | null;
}

export const ResponseField: Schema.Schema<ResponseField> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      name: Schema.String,
      preserveDuplicates: Schema.optional(
        Schema.Union([Schema.Boolean, Schema.Null]),
      ),
    }).pipe(
      Schema.encodeKeys({
        name: "name",
        preserveDuplicates: "preserve_duplicates",
      }),
    ),
  ) as unknown as Schema.Schema<ResponseField>;

export interface RewriteRule {
  lastUpdated: string;
  version: string;
  id?: string | null;
  action?: "rewrite" | null;
  actionParameters?: {
    headers?: Record<string, unknown> | null;
    uri?: Uripath | Uriquery | null;
  } | null;
  categories?: string[] | null;
  description?: string | null;
  enabled?: boolean | null;
  exposedCredentialCheck?: ExposedCredentialCheck | null;
  expression?: string | null;
  logging?: Logging | null;
  ratelimit?: Ratelimit | null;
  ref?: string | null;
}

export const RewriteRule: Schema.Schema<RewriteRule> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      lastUpdated: Schema.String,
      version: Schema.String,
      id: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
      action: Schema.optional(
        Schema.Union([Schema.Literal("rewrite"), Schema.Null]),
      ),
      actionParameters: Schema.optional(
        Schema.Union([
          Schema.Struct({
            headers: Schema.optional(
              Schema.Union([
                Schema.Record(Schema.String, Schema.Unknown),
                Schema.Null,
              ]),
            ),
            uri: Schema.optional(
              Schema.Union([Schema.Union([Uripath, Uriquery]), Schema.Null]),
            ),
          }),
          Schema.Null,
        ]),
      ),
      categories: Schema.optional(
        Schema.Union([Schema.Array(Schema.String), Schema.Null]),
      ),
      description: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
      enabled: Schema.optional(Schema.Union([Schema.Boolean, Schema.Null])),
      exposedCredentialCheck: Schema.optional(
        Schema.Union([ExposedCredentialCheck, Schema.Null]),
      ),
      expression: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
      logging: Schema.optional(Schema.Union([Logging, Schema.Null])),
      ratelimit: Schema.optional(Schema.Union([Ratelimit, Schema.Null])),
      ref: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
    }).pipe(
      Schema.encodeKeys({
        lastUpdated: "last_updated",
        version: "version",
        id: "id",
        action: "action",
        actionParameters: "action_parameters",
        categories: "categories",
        description: "description",
        enabled: "enabled",
        exposedCredentialCheck: "exposed_credential_check",
        expression: "expression",
        logging: "logging",
        ratelimit: "ratelimit",
        ref: "ref",
      }),
    ),
  ) as unknown as Schema.Schema<RewriteRule>;

export interface RewriteRuleParam {
  id?: string | null;
  action?: "rewrite" | null;
  actionParameters?: {
    headers?: Record<string, unknown> | null;
    uri?: { path: Query } | { query: Query } | null;
  } | null;
  description?: string | null;
  enabled?: boolean | null;
  exposedCredentialCheck?: ExposedCredentialCheck | null;
  expression?: string | null;
  logging?: Logging | null;
  ratelimit?: Ratelimit | null;
  ref?: string | null;
}

export const RewriteRuleParam: Schema.Schema<RewriteRuleParam> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      id: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
      action: Schema.optional(
        Schema.Union([Schema.Literal("rewrite"), Schema.Null]),
      ),
      actionParameters: Schema.optional(
        Schema.Union([
          Schema.Struct({
            headers: Schema.optional(
              Schema.Union([
                Schema.Record(Schema.String, Schema.Unknown),
                Schema.Null,
              ]),
            ),
            uri: Schema.optional(
              Schema.Union([
                Schema.Union([
                  Schema.Struct({
                    path: Query,
                  }),
                  Schema.Struct({
                    query: Query,
                  }),
                ]),
                Schema.Null,
              ]),
            ),
          }),
          Schema.Null,
        ]),
      ),
      description: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
      enabled: Schema.optional(Schema.Union([Schema.Boolean, Schema.Null])),
      exposedCredentialCheck: Schema.optional(
        Schema.Union([ExposedCredentialCheck, Schema.Null]),
      ),
      expression: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
      logging: Schema.optional(Schema.Union([Logging, Schema.Null])),
      ratelimit: Schema.optional(Schema.Union([Ratelimit, Schema.Null])),
      ref: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
    }).pipe(
      Schema.encodeKeys({
        id: "id",
        action: "action",
        actionParameters: "action_parameters",
        description: "description",
        enabled: "enabled",
        exposedCredentialCheck: "exposed_credential_check",
        expression: "expression",
        logging: "logging",
        ratelimit: "ratelimit",
        ref: "ref",
      }),
    ),
  ) as unknown as Schema.Schema<RewriteRuleParam>;

export interface RouteRule {
  lastUpdated: string;
  version: string;
  id?: string | null;
  action?: "route" | null;
  actionParameters?: {
    hostHeader?: string | null;
    origin?: Origin | null;
    sni?: Sni | null;
  } | null;
  categories?: string[] | null;
  description?: string | null;
  enabled?: boolean | null;
  exposedCredentialCheck?: ExposedCredentialCheck | null;
  expression?: string | null;
  logging?: Logging | null;
  ratelimit?: Ratelimit | null;
  ref?: string | null;
}

export const RouteRule: Schema.Schema<RouteRule> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      lastUpdated: Schema.String,
      version: Schema.String,
      id: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
      action: Schema.optional(
        Schema.Union([Schema.Literal("route"), Schema.Null]),
      ),
      actionParameters: Schema.optional(
        Schema.Union([
          Schema.Struct({
            hostHeader: Schema.optional(
              Schema.Union([Schema.String, Schema.Null]),
            ),
            origin: Schema.optional(Schema.Union([Origin, Schema.Null])),
            sni: Schema.optional(Schema.Union([Sni, Schema.Null])),
          }).pipe(
            Schema.encodeKeys({
              hostHeader: "host_header",
              origin: "origin",
              sni: "sni",
            }),
          ),
          Schema.Null,
        ]),
      ),
      categories: Schema.optional(
        Schema.Union([Schema.Array(Schema.String), Schema.Null]),
      ),
      description: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
      enabled: Schema.optional(Schema.Union([Schema.Boolean, Schema.Null])),
      exposedCredentialCheck: Schema.optional(
        Schema.Union([ExposedCredentialCheck, Schema.Null]),
      ),
      expression: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
      logging: Schema.optional(Schema.Union([Logging, Schema.Null])),
      ratelimit: Schema.optional(Schema.Union([Ratelimit, Schema.Null])),
      ref: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
    }).pipe(
      Schema.encodeKeys({
        lastUpdated: "last_updated",
        version: "version",
        id: "id",
        action: "action",
        actionParameters: "action_parameters",
        categories: "categories",
        description: "description",
        enabled: "enabled",
        exposedCredentialCheck: "exposed_credential_check",
        expression: "expression",
        logging: "logging",
        ratelimit: "ratelimit",
        ref: "ref",
      }),
    ),
  ) as unknown as Schema.Schema<RouteRule>;

export interface RouteRuleParam {
  id?: string | null;
  action?: "route" | null;
  actionParameters?: {
    hostHeader?: string | null;
    origin?: Origin | null;
    sni?: Sni | null;
  } | null;
  description?: string | null;
  enabled?: boolean | null;
  exposedCredentialCheck?: ExposedCredentialCheck | null;
  expression?: string | null;
  logging?: Logging | null;
  ratelimit?: Ratelimit | null;
  ref?: string | null;
}

export const RouteRuleParam: Schema.Schema<RouteRuleParam> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      id: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
      action: Schema.optional(
        Schema.Union([Schema.Literal("route"), Schema.Null]),
      ),
      actionParameters: Schema.optional(
        Schema.Union([
          Schema.Struct({
            hostHeader: Schema.optional(
              Schema.Union([Schema.String, Schema.Null]),
            ),
            origin: Schema.optional(Schema.Union([Origin, Schema.Null])),
            sni: Schema.optional(Schema.Union([Sni, Schema.Null])),
          }).pipe(
            Schema.encodeKeys({
              hostHeader: "host_header",
              origin: "origin",
              sni: "sni",
            }),
          ),
          Schema.Null,
        ]),
      ),
      description: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
      enabled: Schema.optional(Schema.Union([Schema.Boolean, Schema.Null])),
      exposedCredentialCheck: Schema.optional(
        Schema.Union([ExposedCredentialCheck, Schema.Null]),
      ),
      expression: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
      logging: Schema.optional(Schema.Union([Logging, Schema.Null])),
      ratelimit: Schema.optional(Schema.Union([Ratelimit, Schema.Null])),
      ref: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
    }).pipe(
      Schema.encodeKeys({
        id: "id",
        action: "action",
        actionParameters: "action_parameters",
        description: "description",
        enabled: "enabled",
        exposedCredentialCheck: "exposed_credential_check",
        expression: "expression",
        logging: "logging",
        ratelimit: "ratelimit",
        ref: "ref",
      }),
    ),
  ) as unknown as Schema.Schema<RouteRuleParam>;

export interface Rule {
  id: string;
  action?: string | null;
  enabled?: boolean | null;
  scoreThreshold?: number | null;
  sensitivityLevel?: "default" | "medium" | "low" | "eoff" | null;
}

export const Rule: Schema.Schema<Rule> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      id: Schema.String,
      action: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
      enabled: Schema.optional(Schema.Union([Schema.Boolean, Schema.Null])),
      scoreThreshold: Schema.optional(
        Schema.Union([Schema.Number, Schema.Null]),
      ),
      sensitivityLevel: Schema.optional(
        Schema.Union([
          Schema.Literals(["default", "medium", "low", "eoff"]),
          Schema.Null,
        ]),
      ),
    }).pipe(
      Schema.encodeKeys({
        id: "id",
        action: "action",
        enabled: "enabled",
        scoreThreshold: "score_threshold",
        sensitivityLevel: "sensitivity_level",
      }),
    ),
  ) as unknown as Schema.Schema<Rule>;

export interface RulesetsChallengeRule {
  lastUpdated: string;
  version: string;
  id?: string | null;
  action?: "challenge" | null;
  actionParameters?: unknown | null;
  categories?: string[] | null;
  description?: string | null;
  enabled?: boolean | null;
  exposedCredentialCheck?: ExposedCredentialCheck | null;
  expression?: string | null;
  logging?: Logging | null;
  ratelimit?: Ratelimit | null;
  ref?: string | null;
}

export const RulesetsChallengeRule: Schema.Schema<RulesetsChallengeRule> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      lastUpdated: Schema.String,
      version: Schema.String,
      id: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
      action: Schema.optional(
        Schema.Union([Schema.Literal("challenge"), Schema.Null]),
      ),
      actionParameters: Schema.optional(
        Schema.Union([Schema.Unknown, Schema.Null]),
      ),
      categories: Schema.optional(
        Schema.Union([Schema.Array(Schema.String), Schema.Null]),
      ),
      description: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
      enabled: Schema.optional(Schema.Union([Schema.Boolean, Schema.Null])),
      exposedCredentialCheck: Schema.optional(
        Schema.Union([ExposedCredentialCheck, Schema.Null]),
      ),
      expression: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
      logging: Schema.optional(Schema.Union([Logging, Schema.Null])),
      ratelimit: Schema.optional(Schema.Union([Ratelimit, Schema.Null])),
      ref: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
    }).pipe(
      Schema.encodeKeys({
        lastUpdated: "last_updated",
        version: "version",
        id: "id",
        action: "action",
        actionParameters: "action_parameters",
        categories: "categories",
        description: "description",
        enabled: "enabled",
        exposedCredentialCheck: "exposed_credential_check",
        expression: "expression",
        logging: "logging",
        ratelimit: "ratelimit",
        ref: "ref",
      }),
    ),
  ) as unknown as Schema.Schema<RulesetsChallengeRule>;

export interface RulesetsJSChallengeRule {
  lastUpdated: string;
  version: string;
  id?: string | null;
  action?: "js_challenge" | null;
  actionParameters?: unknown | null;
  categories?: string[] | null;
  description?: string | null;
  enabled?: boolean | null;
  exposedCredentialCheck?: ExposedCredentialCheck | null;
  expression?: string | null;
  logging?: Logging | null;
  ratelimit?: Ratelimit | null;
  ref?: string | null;
}

export const RulesetsJSChallengeRule: Schema.Schema<RulesetsJSChallengeRule> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      lastUpdated: Schema.String,
      version: Schema.String,
      id: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
      action: Schema.optional(
        Schema.Union([Schema.Literal("js_challenge"), Schema.Null]),
      ),
      actionParameters: Schema.optional(
        Schema.Union([Schema.Unknown, Schema.Null]),
      ),
      categories: Schema.optional(
        Schema.Union([Schema.Array(Schema.String), Schema.Null]),
      ),
      description: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
      enabled: Schema.optional(Schema.Union([Schema.Boolean, Schema.Null])),
      exposedCredentialCheck: Schema.optional(
        Schema.Union([ExposedCredentialCheck, Schema.Null]),
      ),
      expression: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
      logging: Schema.optional(Schema.Union([Logging, Schema.Null])),
      ratelimit: Schema.optional(Schema.Union([Ratelimit, Schema.Null])),
      ref: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
    }).pipe(
      Schema.encodeKeys({
        lastUpdated: "last_updated",
        version: "version",
        id: "id",
        action: "action",
        actionParameters: "action_parameters",
        categories: "categories",
        description: "description",
        enabled: "enabled",
        exposedCredentialCheck: "exposed_credential_check",
        expression: "expression",
        logging: "logging",
        ratelimit: "ratelimit",
        ref: "ref",
      }),
    ),
  ) as unknown as Schema.Schema<RulesetsJSChallengeRule>;

export interface ScoreRule {
  lastUpdated: string;
  version: string;
  id?: string | null;
  action?: "score" | null;
  actionParameters?: { increment: number } | null;
  categories?: string[] | null;
  description?: string | null;
  enabled?: boolean | null;
  exposedCredentialCheck?: ExposedCredentialCheck | null;
  expression?: string | null;
  logging?: Logging | null;
  ratelimit?: Ratelimit | null;
  ref?: string | null;
}

export const ScoreRule: Schema.Schema<ScoreRule> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      lastUpdated: Schema.String,
      version: Schema.String,
      id: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
      action: Schema.optional(
        Schema.Union([Schema.Literal("score"), Schema.Null]),
      ),
      actionParameters: Schema.optional(
        Schema.Union([
          Schema.Struct({
            increment: Schema.Number,
          }),
          Schema.Null,
        ]),
      ),
      categories: Schema.optional(
        Schema.Union([Schema.Array(Schema.String), Schema.Null]),
      ),
      description: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
      enabled: Schema.optional(Schema.Union([Schema.Boolean, Schema.Null])),
      exposedCredentialCheck: Schema.optional(
        Schema.Union([ExposedCredentialCheck, Schema.Null]),
      ),
      expression: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
      logging: Schema.optional(Schema.Union([Logging, Schema.Null])),
      ratelimit: Schema.optional(Schema.Union([Ratelimit, Schema.Null])),
      ref: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
    }).pipe(
      Schema.encodeKeys({
        lastUpdated: "last_updated",
        version: "version",
        id: "id",
        action: "action",
        actionParameters: "action_parameters",
        categories: "categories",
        description: "description",
        enabled: "enabled",
        exposedCredentialCheck: "exposed_credential_check",
        expression: "expression",
        logging: "logging",
        ratelimit: "ratelimit",
        ref: "ref",
      }),
    ),
  ) as unknown as Schema.Schema<ScoreRule>;

export interface ScoreRuleParam {
  id?: string | null;
  action?: "score" | null;
  actionParameters?: { increment: number } | null;
  description?: string | null;
  enabled?: boolean | null;
  exposedCredentialCheck?: ExposedCredentialCheck | null;
  expression?: string | null;
  logging?: Logging | null;
  ratelimit?: Ratelimit | null;
  ref?: string | null;
}

export const ScoreRuleParam: Schema.Schema<ScoreRuleParam> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      id: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
      action: Schema.optional(
        Schema.Union([Schema.Literal("score"), Schema.Null]),
      ),
      actionParameters: Schema.optional(
        Schema.Union([
          Schema.Struct({
            increment: Schema.Number,
          }),
          Schema.Null,
        ]),
      ),
      description: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
      enabled: Schema.optional(Schema.Union([Schema.Boolean, Schema.Null])),
      exposedCredentialCheck: Schema.optional(
        Schema.Union([ExposedCredentialCheck, Schema.Null]),
      ),
      expression: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
      logging: Schema.optional(Schema.Union([Logging, Schema.Null])),
      ratelimit: Schema.optional(Schema.Union([Ratelimit, Schema.Null])),
      ref: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
    }).pipe(
      Schema.encodeKeys({
        id: "id",
        action: "action",
        actionParameters: "action_parameters",
        description: "description",
        enabled: "enabled",
        exposedCredentialCheck: "exposed_credential_check",
        expression: "expression",
        logging: "logging",
        ratelimit: "ratelimit",
        ref: "ref",
      }),
    ),
  ) as unknown as Schema.Schema<ScoreRuleParam>;

export interface ServeErrorRule {
  lastUpdated: string;
  version: string;
  id?: string | null;
  action?: "serve_error" | null;
  actionParameters?: ActionParametersContent | ActionParametersAsset | null;
  categories?: string[] | null;
  description?: string | null;
  enabled?: boolean | null;
  exposedCredentialCheck?: ExposedCredentialCheck | null;
  expression?: string | null;
  logging?: Logging | null;
  ratelimit?: Ratelimit | null;
  ref?: string | null;
}

export const ServeErrorRule: Schema.Schema<ServeErrorRule> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      lastUpdated: Schema.String,
      version: Schema.String,
      id: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
      action: Schema.optional(
        Schema.Union([Schema.Literal("serve_error"), Schema.Null]),
      ),
      actionParameters: Schema.optional(
        Schema.Union([
          Schema.Union([ActionParametersContent, ActionParametersAsset]),
          Schema.Null,
        ]),
      ),
      categories: Schema.optional(
        Schema.Union([Schema.Array(Schema.String), Schema.Null]),
      ),
      description: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
      enabled: Schema.optional(Schema.Union([Schema.Boolean, Schema.Null])),
      exposedCredentialCheck: Schema.optional(
        Schema.Union([ExposedCredentialCheck, Schema.Null]),
      ),
      expression: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
      logging: Schema.optional(Schema.Union([Logging, Schema.Null])),
      ratelimit: Schema.optional(Schema.Union([Ratelimit, Schema.Null])),
      ref: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
    }).pipe(
      Schema.encodeKeys({
        lastUpdated: "last_updated",
        version: "version",
        id: "id",
        action: "action",
        actionParameters: "action_parameters",
        categories: "categories",
        description: "description",
        enabled: "enabled",
        exposedCredentialCheck: "exposed_credential_check",
        expression: "expression",
        logging: "logging",
        ratelimit: "ratelimit",
        ref: "ref",
      }),
    ),
  ) as unknown as Schema.Schema<ServeErrorRule>;

export interface ServeErrorRuleParam {
  id?: string | null;
  action?: "serve_error" | null;
  actionParameters?: ActionParametersContent | ActionParametersAsset | null;
  description?: string | null;
  enabled?: boolean | null;
  exposedCredentialCheck?: ExposedCredentialCheck | null;
  expression?: string | null;
  logging?: Logging | null;
  ratelimit?: Ratelimit | null;
  ref?: string | null;
}

export const ServeErrorRuleParam: Schema.Schema<ServeErrorRuleParam> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      id: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
      action: Schema.optional(
        Schema.Union([Schema.Literal("serve_error"), Schema.Null]),
      ),
      actionParameters: Schema.optional(
        Schema.Union([
          Schema.Union([ActionParametersContent, ActionParametersAsset]),
          Schema.Null,
        ]),
      ),
      description: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
      enabled: Schema.optional(Schema.Union([Schema.Boolean, Schema.Null])),
      exposedCredentialCheck: Schema.optional(
        Schema.Union([ExposedCredentialCheck, Schema.Null]),
      ),
      expression: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
      logging: Schema.optional(Schema.Union([Logging, Schema.Null])),
      ratelimit: Schema.optional(Schema.Union([Ratelimit, Schema.Null])),
      ref: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
    }).pipe(
      Schema.encodeKeys({
        id: "id",
        action: "action",
        actionParameters: "action_parameters",
        description: "description",
        enabled: "enabled",
        exposedCredentialCheck: "exposed_credential_check",
        expression: "expression",
        logging: "logging",
        ratelimit: "ratelimit",
        ref: "ref",
      }),
    ),
  ) as unknown as Schema.Schema<ServeErrorRuleParam>;

export interface ServeStale {
  disableStaleWhileUpdating?: boolean | null;
}

export const ServeStale: Schema.Schema<ServeStale> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      disableStaleWhileUpdating: Schema.optional(
        Schema.Union([Schema.Boolean, Schema.Null]),
      ),
    }).pipe(
      Schema.encodeKeys({
        disableStaleWhileUpdating: "disable_stale_while_updating",
      }),
    ),
  ) as unknown as Schema.Schema<ServeStale>;

export interface SetCacheSettingsRule {
  lastUpdated: string;
  version: string;
  id?: string | null;
  action?: "set_cache_settings" | null;
  actionParameters?: {
    additionalCacheablePorts?: number[] | null;
    browserTtl?: BrowserTTL | null;
    cache?: boolean | null;
    cacheKey?: CacheKey | null;
    cacheReserve?: CacheReserve | null;
    edgeTtl?: EdgeTTL | null;
    originCacheControl?: boolean | null;
    originErrorPagePassthru?: boolean | null;
    readTimeout?: number | null;
    respectStrongEtags?: boolean | null;
    serveStale?: ServeStale | null;
  } | null;
  categories?: string[] | null;
  description?: string | null;
  enabled?: boolean | null;
  exposedCredentialCheck?: ExposedCredentialCheck | null;
  expression?: string | null;
  logging?: Logging | null;
  ratelimit?: Ratelimit | null;
  ref?: string | null;
}

export const SetCacheSettingsRule: Schema.Schema<SetCacheSettingsRule> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      lastUpdated: Schema.String,
      version: Schema.String,
      id: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
      action: Schema.optional(
        Schema.Union([Schema.Literal("set_cache_settings"), Schema.Null]),
      ),
      actionParameters: Schema.optional(
        Schema.Union([
          Schema.Struct({
            additionalCacheablePorts: Schema.optional(
              Schema.Union([Schema.Array(Schema.Number), Schema.Null]),
            ),
            browserTtl: Schema.optional(
              Schema.Union([BrowserTTL, Schema.Null]),
            ),
            cache: Schema.optional(Schema.Union([Schema.Boolean, Schema.Null])),
            cacheKey: Schema.optional(Schema.Union([CacheKey, Schema.Null])),
            cacheReserve: Schema.optional(
              Schema.Union([CacheReserve, Schema.Null]),
            ),
            edgeTtl: Schema.optional(Schema.Union([EdgeTTL, Schema.Null])),
            originCacheControl: Schema.optional(
              Schema.Union([Schema.Boolean, Schema.Null]),
            ),
            originErrorPagePassthru: Schema.optional(
              Schema.Union([Schema.Boolean, Schema.Null]),
            ),
            readTimeout: Schema.optional(
              Schema.Union([Schema.Number, Schema.Null]),
            ),
            respectStrongEtags: Schema.optional(
              Schema.Union([Schema.Boolean, Schema.Null]),
            ),
            serveStale: Schema.optional(
              Schema.Union([ServeStale, Schema.Null]),
            ),
          }).pipe(
            Schema.encodeKeys({
              additionalCacheablePorts: "additional_cacheable_ports",
              browserTtl: "browser_ttl",
              cache: "cache",
              cacheKey: "cache_key",
              cacheReserve: "cache_reserve",
              edgeTtl: "edge_ttl",
              originCacheControl: "origin_cache_control",
              originErrorPagePassthru: "origin_error_page_passthru",
              readTimeout: "read_timeout",
              respectStrongEtags: "respect_strong_etags",
              serveStale: "serve_stale",
            }),
          ),
          Schema.Null,
        ]),
      ),
      categories: Schema.optional(
        Schema.Union([Schema.Array(Schema.String), Schema.Null]),
      ),
      description: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
      enabled: Schema.optional(Schema.Union([Schema.Boolean, Schema.Null])),
      exposedCredentialCheck: Schema.optional(
        Schema.Union([ExposedCredentialCheck, Schema.Null]),
      ),
      expression: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
      logging: Schema.optional(Schema.Union([Logging, Schema.Null])),
      ratelimit: Schema.optional(Schema.Union([Ratelimit, Schema.Null])),
      ref: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
    }).pipe(
      Schema.encodeKeys({
        lastUpdated: "last_updated",
        version: "version",
        id: "id",
        action: "action",
        actionParameters: "action_parameters",
        categories: "categories",
        description: "description",
        enabled: "enabled",
        exposedCredentialCheck: "exposed_credential_check",
        expression: "expression",
        logging: "logging",
        ratelimit: "ratelimit",
        ref: "ref",
      }),
    ),
  ) as unknown as Schema.Schema<SetCacheSettingsRule>;

export interface SetCacheSettingsRuleParam {
  id?: string | null;
  action?: "set_cache_settings" | null;
  actionParameters?: {
    additionalCacheablePorts?: number[] | null;
    browserTtl?: BrowserTTL | null;
    cache?: boolean | null;
    cacheKey?: CacheKey | null;
    cacheReserve?: CacheReserve | null;
    edgeTtl?: EdgeTTL | null;
    originCacheControl?: boolean | null;
    originErrorPagePassthru?: boolean | null;
    readTimeout?: number | null;
    respectStrongEtags?: boolean | null;
    serveStale?: ServeStale | null;
  } | null;
  description?: string | null;
  enabled?: boolean | null;
  exposedCredentialCheck?: ExposedCredentialCheck | null;
  expression?: string | null;
  logging?: Logging | null;
  ratelimit?: Ratelimit | null;
  ref?: string | null;
}

export const SetCacheSettingsRuleParam: Schema.Schema<SetCacheSettingsRuleParam> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      id: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
      action: Schema.optional(
        Schema.Union([Schema.Literal("set_cache_settings"), Schema.Null]),
      ),
      actionParameters: Schema.optional(
        Schema.Union([
          Schema.Struct({
            additionalCacheablePorts: Schema.optional(
              Schema.Union([Schema.Array(Schema.Number), Schema.Null]),
            ),
            browserTtl: Schema.optional(
              Schema.Union([BrowserTTL, Schema.Null]),
            ),
            cache: Schema.optional(Schema.Union([Schema.Boolean, Schema.Null])),
            cacheKey: Schema.optional(Schema.Union([CacheKey, Schema.Null])),
            cacheReserve: Schema.optional(
              Schema.Union([CacheReserve, Schema.Null]),
            ),
            edgeTtl: Schema.optional(Schema.Union([EdgeTTL, Schema.Null])),
            originCacheControl: Schema.optional(
              Schema.Union([Schema.Boolean, Schema.Null]),
            ),
            originErrorPagePassthru: Schema.optional(
              Schema.Union([Schema.Boolean, Schema.Null]),
            ),
            readTimeout: Schema.optional(
              Schema.Union([Schema.Number, Schema.Null]),
            ),
            respectStrongEtags: Schema.optional(
              Schema.Union([Schema.Boolean, Schema.Null]),
            ),
            serveStale: Schema.optional(
              Schema.Union([ServeStale, Schema.Null]),
            ),
          }).pipe(
            Schema.encodeKeys({
              additionalCacheablePorts: "additional_cacheable_ports",
              browserTtl: "browser_ttl",
              cache: "cache",
              cacheKey: "cache_key",
              cacheReserve: "cache_reserve",
              edgeTtl: "edge_ttl",
              originCacheControl: "origin_cache_control",
              originErrorPagePassthru: "origin_error_page_passthru",
              readTimeout: "read_timeout",
              respectStrongEtags: "respect_strong_etags",
              serveStale: "serve_stale",
            }),
          ),
          Schema.Null,
        ]),
      ),
      description: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
      enabled: Schema.optional(Schema.Union([Schema.Boolean, Schema.Null])),
      exposedCredentialCheck: Schema.optional(
        Schema.Union([ExposedCredentialCheck, Schema.Null]),
      ),
      expression: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
      logging: Schema.optional(Schema.Union([Logging, Schema.Null])),
      ratelimit: Schema.optional(Schema.Union([Ratelimit, Schema.Null])),
      ref: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
    }).pipe(
      Schema.encodeKeys({
        id: "id",
        action: "action",
        actionParameters: "action_parameters",
        description: "description",
        enabled: "enabled",
        exposedCredentialCheck: "exposed_credential_check",
        expression: "expression",
        logging: "logging",
        ratelimit: "ratelimit",
        ref: "ref",
      }),
    ),
  ) as unknown as Schema.Schema<SetCacheSettingsRuleParam>;

export interface SetConfigRule {
  lastUpdated: string;
  version: string;
  id?: string | null;
  action?: "set_config" | null;
  actionParameters?: ActionParameters | null;
  categories?: string[] | null;
  description?: string | null;
  enabled?: boolean | null;
  exposedCredentialCheck?: ExposedCredentialCheck | null;
  expression?: string | null;
  logging?: Logging | null;
  ratelimit?: Ratelimit | null;
  ref?: string | null;
}

export const SetConfigRule: Schema.Schema<SetConfigRule> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      lastUpdated: Schema.String,
      version: Schema.String,
      id: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
      action: Schema.optional(
        Schema.Union([Schema.Literal("set_config"), Schema.Null]),
      ),
      actionParameters: Schema.optional(
        Schema.Union([ActionParameters, Schema.Null]),
      ),
      categories: Schema.optional(
        Schema.Union([Schema.Array(Schema.String), Schema.Null]),
      ),
      description: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
      enabled: Schema.optional(Schema.Union([Schema.Boolean, Schema.Null])),
      exposedCredentialCheck: Schema.optional(
        Schema.Union([ExposedCredentialCheck, Schema.Null]),
      ),
      expression: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
      logging: Schema.optional(Schema.Union([Logging, Schema.Null])),
      ratelimit: Schema.optional(Schema.Union([Ratelimit, Schema.Null])),
      ref: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
    }).pipe(
      Schema.encodeKeys({
        lastUpdated: "last_updated",
        version: "version",
        id: "id",
        action: "action",
        actionParameters: "action_parameters",
        categories: "categories",
        description: "description",
        enabled: "enabled",
        exposedCredentialCheck: "exposed_credential_check",
        expression: "expression",
        logging: "logging",
        ratelimit: "ratelimit",
        ref: "ref",
      }),
    ),
  ) as unknown as Schema.Schema<SetConfigRule>;

export interface SetConfigRuleParam {
  id?: string | null;
  action?: "set_config" | null;
  actionParameters?: ActionParameters | null;
  description?: string | null;
  enabled?: boolean | null;
  exposedCredentialCheck?: ExposedCredentialCheck | null;
  expression?: string | null;
  logging?: Logging | null;
  ratelimit?: Ratelimit | null;
  ref?: string | null;
}

export const SetConfigRuleParam: Schema.Schema<SetConfigRuleParam> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      id: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
      action: Schema.optional(
        Schema.Union([Schema.Literal("set_config"), Schema.Null]),
      ),
      actionParameters: Schema.optional(
        Schema.Union([ActionParameters, Schema.Null]),
      ),
      description: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
      enabled: Schema.optional(Schema.Union([Schema.Boolean, Schema.Null])),
      exposedCredentialCheck: Schema.optional(
        Schema.Union([ExposedCredentialCheck, Schema.Null]),
      ),
      expression: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
      logging: Schema.optional(Schema.Union([Logging, Schema.Null])),
      ratelimit: Schema.optional(Schema.Union([Ratelimit, Schema.Null])),
      ref: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
    }).pipe(
      Schema.encodeKeys({
        id: "id",
        action: "action",
        actionParameters: "action_parameters",
        description: "description",
        enabled: "enabled",
        exposedCredentialCheck: "exposed_credential_check",
        expression: "expression",
        logging: "logging",
        ratelimit: "ratelimit",
        ref: "ref",
      }),
    ),
  ) as unknown as Schema.Schema<SetConfigRuleParam>;

export interface SkipRule {
  lastUpdated: string;
  version: string;
  id?: string | null;
  action?: "skip" | null;
  actionParameters?: {
    phase?: "current" | null;
    phases?:
      | (
          | "ddos_l4"
          | "ddos_l7"
          | "http_config_settings"
          | "http_custom_errors"
          | "http_log_custom_fields"
          | "http_ratelimit"
          | "http_request_cache_settings"
          | "http_request_dynamic_redirect"
          | "http_request_firewall_custom"
          | "http_request_firewall_managed"
          | "http_request_late_transform"
          | "http_request_origin"
          | "http_request_redirect"
          | "http_request_sanitize"
          | "http_request_sbfm"
          | "http_request_transform"
          | "http_response_compression"
          | "http_response_firewall_managed"
          | "http_response_headers_transform"
          | "magic_transit"
          | "magic_transit_ids_managed"
          | "magic_transit_managed"
          | "magic_transit_ratelimit"
        )[]
      | null;
    products?:
      | (
          | "bic"
          | "hot"
          | "rateLimit"
          | "securityLevel"
          | "uaBlock"
          | "waf"
          | "zoneLockdown"
        )[]
      | null;
    rules?: Record<string, unknown> | null;
    ruleset?: "current" | null;
    rulesets?: string[] | null;
  } | null;
  categories?: string[] | null;
  description?: string | null;
  enabled?: boolean | null;
  exposedCredentialCheck?: ExposedCredentialCheck | null;
  expression?: string | null;
  logging?: Logging | null;
  ratelimit?: Ratelimit | null;
  ref?: string | null;
}

export const SkipRule: Schema.Schema<SkipRule> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      lastUpdated: Schema.String,
      version: Schema.String,
      id: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
      action: Schema.optional(
        Schema.Union([Schema.Literal("skip"), Schema.Null]),
      ),
      actionParameters: Schema.optional(
        Schema.Union([
          Schema.Struct({
            phase: Schema.optional(
              Schema.Union([Schema.Literal("current"), Schema.Null]),
            ),
            phases: Schema.optional(
              Schema.Union([
                Schema.Array(
                  Schema.Literals([
                    "ddos_l4",
                    "ddos_l7",
                    "http_config_settings",
                    "http_custom_errors",
                    "http_log_custom_fields",
                    "http_ratelimit",
                    "http_request_cache_settings",
                    "http_request_dynamic_redirect",
                    "http_request_firewall_custom",
                    "http_request_firewall_managed",
                    "http_request_late_transform",
                    "http_request_origin",
                    "http_request_redirect",
                    "http_request_sanitize",
                    "http_request_sbfm",
                    "http_request_transform",
                    "http_response_compression",
                    "http_response_firewall_managed",
                    "http_response_headers_transform",
                    "magic_transit",
                    "magic_transit_ids_managed",
                    "magic_transit_managed",
                    "magic_transit_ratelimit",
                  ]),
                ),
                Schema.Null,
              ]),
            ),
            products: Schema.optional(
              Schema.Union([
                Schema.Array(
                  Schema.Literals([
                    "bic",
                    "hot",
                    "rateLimit",
                    "securityLevel",
                    "uaBlock",
                    "waf",
                    "zoneLockdown",
                  ]),
                ),
                Schema.Null,
              ]),
            ),
            rules: Schema.optional(
              Schema.Union([
                Schema.Record(Schema.String, Schema.Unknown),
                Schema.Null,
              ]),
            ),
            ruleset: Schema.optional(
              Schema.Union([Schema.Literal("current"), Schema.Null]),
            ),
            rulesets: Schema.optional(
              Schema.Union([Schema.Array(Schema.String), Schema.Null]),
            ),
          }),
          Schema.Null,
        ]),
      ),
      categories: Schema.optional(
        Schema.Union([Schema.Array(Schema.String), Schema.Null]),
      ),
      description: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
      enabled: Schema.optional(Schema.Union([Schema.Boolean, Schema.Null])),
      exposedCredentialCheck: Schema.optional(
        Schema.Union([ExposedCredentialCheck, Schema.Null]),
      ),
      expression: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
      logging: Schema.optional(Schema.Union([Logging, Schema.Null])),
      ratelimit: Schema.optional(Schema.Union([Ratelimit, Schema.Null])),
      ref: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
    }).pipe(
      Schema.encodeKeys({
        lastUpdated: "last_updated",
        version: "version",
        id: "id",
        action: "action",
        actionParameters: "action_parameters",
        categories: "categories",
        description: "description",
        enabled: "enabled",
        exposedCredentialCheck: "exposed_credential_check",
        expression: "expression",
        logging: "logging",
        ratelimit: "ratelimit",
        ref: "ref",
      }),
    ),
  ) as unknown as Schema.Schema<SkipRule>;

export interface SkipRuleParam {
  id?: string | null;
  action?: "skip" | null;
  actionParameters?: {
    phase?: "current" | null;
    phases?:
      | (
          | "ddos_l4"
          | "ddos_l7"
          | "http_config_settings"
          | "http_custom_errors"
          | "http_log_custom_fields"
          | "http_ratelimit"
          | "http_request_cache_settings"
          | "http_request_dynamic_redirect"
          | "http_request_firewall_custom"
          | "http_request_firewall_managed"
          | "http_request_late_transform"
          | "http_request_origin"
          | "http_request_redirect"
          | "http_request_sanitize"
          | "http_request_sbfm"
          | "http_request_transform"
          | "http_response_compression"
          | "http_response_firewall_managed"
          | "http_response_headers_transform"
          | "magic_transit"
          | "magic_transit_ids_managed"
          | "magic_transit_managed"
          | "magic_transit_ratelimit"
        )[]
      | null;
    products?:
      | (
          | "bic"
          | "hot"
          | "rateLimit"
          | "securityLevel"
          | "uaBlock"
          | "waf"
          | "zoneLockdown"
        )[]
      | null;
    rules?: Record<string, unknown> | null;
    ruleset?: "current" | null;
    rulesets?: string[] | null;
  } | null;
  description?: string | null;
  enabled?: boolean | null;
  exposedCredentialCheck?: ExposedCredentialCheck | null;
  expression?: string | null;
  logging?: Logging | null;
  ratelimit?: Ratelimit | null;
  ref?: string | null;
}

export const SkipRuleParam: Schema.Schema<SkipRuleParam> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      id: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
      action: Schema.optional(
        Schema.Union([Schema.Literal("skip"), Schema.Null]),
      ),
      actionParameters: Schema.optional(
        Schema.Union([
          Schema.Struct({
            phase: Schema.optional(
              Schema.Union([Schema.Literal("current"), Schema.Null]),
            ),
            phases: Schema.optional(
              Schema.Union([
                Schema.Array(
                  Schema.Literals([
                    "ddos_l4",
                    "ddos_l7",
                    "http_config_settings",
                    "http_custom_errors",
                    "http_log_custom_fields",
                    "http_ratelimit",
                    "http_request_cache_settings",
                    "http_request_dynamic_redirect",
                    "http_request_firewall_custom",
                    "http_request_firewall_managed",
                    "http_request_late_transform",
                    "http_request_origin",
                    "http_request_redirect",
                    "http_request_sanitize",
                    "http_request_sbfm",
                    "http_request_transform",
                    "http_response_compression",
                    "http_response_firewall_managed",
                    "http_response_headers_transform",
                    "magic_transit",
                    "magic_transit_ids_managed",
                    "magic_transit_managed",
                    "magic_transit_ratelimit",
                  ]),
                ),
                Schema.Null,
              ]),
            ),
            products: Schema.optional(
              Schema.Union([
                Schema.Array(
                  Schema.Literals([
                    "bic",
                    "hot",
                    "rateLimit",
                    "securityLevel",
                    "uaBlock",
                    "waf",
                    "zoneLockdown",
                  ]),
                ),
                Schema.Null,
              ]),
            ),
            rules: Schema.optional(
              Schema.Union([
                Schema.Record(Schema.String, Schema.Unknown),
                Schema.Null,
              ]),
            ),
            ruleset: Schema.optional(
              Schema.Union([Schema.Literal("current"), Schema.Null]),
            ),
            rulesets: Schema.optional(
              Schema.Union([Schema.Array(Schema.String), Schema.Null]),
            ),
          }),
          Schema.Null,
        ]),
      ),
      description: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
      enabled: Schema.optional(Schema.Union([Schema.Boolean, Schema.Null])),
      exposedCredentialCheck: Schema.optional(
        Schema.Union([ExposedCredentialCheck, Schema.Null]),
      ),
      expression: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
      logging: Schema.optional(Schema.Union([Logging, Schema.Null])),
      ratelimit: Schema.optional(Schema.Union([Ratelimit, Schema.Null])),
      ref: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
    }).pipe(
      Schema.encodeKeys({
        id: "id",
        action: "action",
        actionParameters: "action_parameters",
        description: "description",
        enabled: "enabled",
        exposedCredentialCheck: "exposed_credential_check",
        expression: "expression",
        logging: "logging",
        ratelimit: "ratelimit",
        ref: "ref",
      }),
    ),
  ) as unknown as Schema.Schema<SkipRuleParam>;

export interface Sni {
  value: string;
}

export const Sni: Schema.Schema<Sni> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      value: Schema.String,
    }),
  ) as unknown as Schema.Schema<Sni>;

export interface StatusCodeRange {
  from?: number | null;
  to?: number | null;
}

export const StatusCodeRange: Schema.Schema<StatusCodeRange> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      from: Schema.optional(Schema.Union([Schema.Number, Schema.Null])),
      to: Schema.optional(Schema.Union([Schema.Number, Schema.Null])),
    }),
  ) as unknown as Schema.Schema<StatusCodeRange>;

export interface StatusCodeTTL {
  value: number;
  statusCode?: number | null;
  statusCodeRange?: StatusCodeRange | null;
}

export const StatusCodeTTL: Schema.Schema<StatusCodeTTL> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      value: Schema.Number,
      statusCode: Schema.optional(Schema.Union([Schema.Number, Schema.Null])),
      statusCodeRange: Schema.optional(
        Schema.Union([StatusCodeRange, Schema.Null]),
      ),
    }).pipe(
      Schema.encodeKeys({
        value: "value",
        statusCode: "status_code",
        statusCodeRange: "status_code_range",
      }),
    ),
  ) as unknown as Schema.Schema<StatusCodeTTL>;

export interface TargetURL {
  expression?: string | null;
  value?: string | null;
}

export const TargetURL: Schema.Schema<TargetURL> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      expression: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
      value: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
    }),
  ) as unknown as Schema.Schema<TargetURL>;

export interface TransformedRequestField {
  name: string;
}

export const TransformedRequestField: Schema.Schema<TransformedRequestField> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      name: Schema.String,
    }),
  ) as unknown as Schema.Schema<TransformedRequestField>;

export interface Uripath {
  path: Query;
  origin?: boolean | null;
}

export const Uripath: Schema.Schema<Uripath> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      path: Query,
      origin: Schema.optional(Schema.Union([Schema.Boolean, Schema.Null])),
    }),
  ) as unknown as Schema.Schema<Uripath>;

export interface Uriquery {
  query: Query;
  origin?: boolean | null;
}

export const Uriquery: Schema.Schema<Uriquery> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      query: Query,
      origin: Schema.optional(Schema.Union([Schema.Boolean, Schema.Null])),
    }),
  ) as unknown as Schema.Schema<Uriquery>;

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

// =============================================================================
// Pha
// =============================================================================

export interface GetPhasRequest {}

export const GetPhasRequest = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
  {},
).pipe(
  T.Http({
    method: "GET",
    path: "/{accountOrZone}/{accountOrZoneId}/rulesets/phases/{rulesetPhase}/entrypoint",
  }),
) as unknown as Schema.Schema<GetPhasRequest>;

export interface GetPhasResponse {
  /** The unique ID of the ruleset. */
  id: string;
  /** The kind of the ruleset. */
  kind: "managed" | "custom" | "root" | "zone";
  /** The timestamp of when the ruleset was last modified. */
  lastUpdated: string;
  /** The human-readable name of the ruleset. */
  name: string;
  /** The phase of the ruleset. */
  phase:
    | "ddos_l4"
    | "ddos_l7"
    | "http_config_settings"
    | "http_custom_errors"
    | "http_log_custom_fields"
    | "http_ratelimit"
    | "http_request_cache_settings"
    | "http_request_dynamic_redirect"
    | "http_request_firewall_custom"
    | "http_request_firewall_managed"
    | "http_request_late_transform"
    | "http_request_origin"
    | "http_request_redirect"
    | "http_request_sanitize"
    | "http_request_sbfm"
    | "http_request_transform"
    | "http_response_compression"
    | "http_response_firewall_managed"
    | "http_response_headers_transform"
    | "magic_transit"
    | "magic_transit_ids_managed"
    | "magic_transit_managed"
    | "magic_transit_ratelimit";
  /** The list of rules in the ruleset. */
  rules: (
    | BlockRule
    | RulesetsChallengeRule
    | CompressResponseRule
    | DdoSDynamicRule
    | ExecuteRule
    | ForceConnectionCloseRule
    | RulesetsJSChallengeRule
    | LogRule
    | LogCustomFieldRule
    | ManagedChallengeRule
    | RedirectRule
    | RewriteRule
    | RouteRule
    | ScoreRule
    | ServeErrorRule
    | SetCacheSettingsRule
    | SetConfigRule
    | SkipRule
  )[];
  /** The version of the ruleset. */
  version: string;
  /** An informative description of the ruleset. */
  description?: string | null;
}

export const GetPhasResponse = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  id: Schema.String,
  kind: Schema.Literals(["managed", "custom", "root", "zone"]),
  lastUpdated: Schema.String,
  name: Schema.String,
  phase: Schema.Literals([
    "ddos_l4",
    "ddos_l7",
    "http_config_settings",
    "http_custom_errors",
    "http_log_custom_fields",
    "http_ratelimit",
    "http_request_cache_settings",
    "http_request_dynamic_redirect",
    "http_request_firewall_custom",
    "http_request_firewall_managed",
    "http_request_late_transform",
    "http_request_origin",
    "http_request_redirect",
    "http_request_sanitize",
    "http_request_sbfm",
    "http_request_transform",
    "http_response_compression",
    "http_response_firewall_managed",
    "http_response_headers_transform",
    "magic_transit",
    "magic_transit_ids_managed",
    "magic_transit_managed",
    "magic_transit_ratelimit",
  ]),
  rules: Schema.Array(
    Schema.Union([
      BlockRule,
      RulesetsChallengeRule,
      CompressResponseRule,
      DdoSDynamicRule,
      ExecuteRule,
      ForceConnectionCloseRule,
      RulesetsJSChallengeRule,
      LogRule,
      LogCustomFieldRule,
      ManagedChallengeRule,
      RedirectRule,
      RewriteRule,
      RouteRule,
      ScoreRule,
      ServeErrorRule,
      SetCacheSettingsRule,
      SetConfigRule,
      SkipRule,
    ]),
  ),
  version: Schema.String,
  description: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
})
  .pipe(
    Schema.encodeKeys({
      id: "id",
      kind: "kind",
      lastUpdated: "last_updated",
      name: "name",
      phase: "phase",
      rules: "rules",
      version: "version",
      description: "description",
    }),
  )
  .pipe(T.ResponsePath("result")) as unknown as Schema.Schema<GetPhasResponse>;

export type GetPhasError = DefaultErrors;

export const getPhas: API.OperationMethod<
  GetPhasRequest,
  GetPhasResponse,
  GetPhasError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetPhasRequest,
  output: GetPhasResponse,
  errors: [],
}));

export interface PutPhasRequest {
  /** Path param: The Account ID to use for this endpoint. Mutually exclusive with the Zone ID. */
  accountId?: string;
  /** Path param: The Zone ID to use for this endpoint. Mutually exclusive with the Account ID. */
  zoneId?: string;
  /** Body param: An informative description of the ruleset. */
  description?: string;
  /** Body param: The human-readable name of the ruleset. */
  name?: string;
  /** Body param: The list of rules in the ruleset. */
  rules?: (
    | BlockRuleParam
    | {
        id?: string;
        action?: "challenge";
        actionParameters?: unknown;
        description?: string;
        enabled?: boolean;
        exposedCredentialCheck?: ExposedCredentialCheck;
        expression?: string;
        logging?: Logging;
        ratelimit?: Ratelimit;
        ref?: string;
      }
    | CompressResponseRuleParam
    | DdoSDynamicRuleParam
    | ExecuteRuleParam
    | ForceConnectionCloseRuleParam
    | {
        id?: string;
        action?: "js_challenge";
        actionParameters?: unknown;
        description?: string;
        enabled?: boolean;
        exposedCredentialCheck?: ExposedCredentialCheck;
        expression?: string;
        logging?: Logging;
        ratelimit?: Ratelimit;
        ref?: string;
      }
    | LogRuleParam
    | LogCustomFieldRuleParam
    | ManagedChallengeRuleParam
    | RedirectRuleParam
    | RewriteRuleParam
    | RouteRuleParam
    | ScoreRuleParam
    | ServeErrorRuleParam
    | SetCacheSettingsRuleParam
    | SetConfigRuleParam
    | SkipRuleParam
  )[];
}

export const PutPhasRequest = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  accountId: Schema.String.pipe(T.HttpPath("account_id")),
  zoneId: Schema.String.pipe(T.HttpPath("zone_id")),
  description: Schema.optional(Schema.String),
  name: Schema.optional(Schema.String),
  rules: Schema.optional(
    Schema.Array(
      Schema.Union([
        BlockRuleParam,
        Schema.Struct({
          id: Schema.optional(Schema.String),
          action: Schema.optional(Schema.Literal("challenge")),
          actionParameters: Schema.optional(Schema.Unknown),
          description: Schema.optional(Schema.String),
          enabled: Schema.optional(Schema.Boolean),
          exposedCredentialCheck: Schema.optional(ExposedCredentialCheck),
          expression: Schema.optional(Schema.String),
          logging: Schema.optional(Logging),
          ratelimit: Schema.optional(Ratelimit),
          ref: Schema.optional(Schema.String),
        }).pipe(
          Schema.encodeKeys({
            id: "id",
            action: "action",
            actionParameters: "action_parameters",
            description: "description",
            enabled: "enabled",
            exposedCredentialCheck: "exposed_credential_check",
            expression: "expression",
            logging: "logging",
            ratelimit: "ratelimit",
            ref: "ref",
          }),
        ),
        CompressResponseRuleParam,
        DdoSDynamicRuleParam,
        ExecuteRuleParam,
        ForceConnectionCloseRuleParam,
        Schema.Struct({
          id: Schema.optional(Schema.String),
          action: Schema.optional(Schema.Literal("js_challenge")),
          actionParameters: Schema.optional(Schema.Unknown),
          description: Schema.optional(Schema.String),
          enabled: Schema.optional(Schema.Boolean),
          exposedCredentialCheck: Schema.optional(ExposedCredentialCheck),
          expression: Schema.optional(Schema.String),
          logging: Schema.optional(Logging),
          ratelimit: Schema.optional(Ratelimit),
          ref: Schema.optional(Schema.String),
        }).pipe(
          Schema.encodeKeys({
            id: "id",
            action: "action",
            actionParameters: "action_parameters",
            description: "description",
            enabled: "enabled",
            exposedCredentialCheck: "exposed_credential_check",
            expression: "expression",
            logging: "logging",
            ratelimit: "ratelimit",
            ref: "ref",
          }),
        ),
        LogRuleParam,
        LogCustomFieldRuleParam,
        ManagedChallengeRuleParam,
        RedirectRuleParam,
        RewriteRuleParam,
        RouteRuleParam,
        ScoreRuleParam,
        ServeErrorRuleParam,
        SetCacheSettingsRuleParam,
        SetConfigRuleParam,
        SkipRuleParam,
      ]),
    ),
  ),
}).pipe(
  T.Http({
    method: "PUT",
    path: "/{accountOrZone}/{accountOrZoneId}/rulesets/phases/{rulesetPhase}/entrypoint",
  }),
) as unknown as Schema.Schema<PutPhasRequest>;

export interface PutPhasResponse {
  /** The unique ID of the ruleset. */
  id: string;
  /** The kind of the ruleset. */
  kind: "managed" | "custom" | "root" | "zone";
  /** The timestamp of when the ruleset was last modified. */
  lastUpdated: string;
  /** The human-readable name of the ruleset. */
  name: string;
  /** The phase of the ruleset. */
  phase:
    | "ddos_l4"
    | "ddos_l7"
    | "http_config_settings"
    | "http_custom_errors"
    | "http_log_custom_fields"
    | "http_ratelimit"
    | "http_request_cache_settings"
    | "http_request_dynamic_redirect"
    | "http_request_firewall_custom"
    | "http_request_firewall_managed"
    | "http_request_late_transform"
    | "http_request_origin"
    | "http_request_redirect"
    | "http_request_sanitize"
    | "http_request_sbfm"
    | "http_request_transform"
    | "http_response_compression"
    | "http_response_firewall_managed"
    | "http_response_headers_transform"
    | "magic_transit"
    | "magic_transit_ids_managed"
    | "magic_transit_managed"
    | "magic_transit_ratelimit";
  /** The list of rules in the ruleset. */
  rules: (
    | BlockRule
    | RulesetsChallengeRule
    | CompressResponseRule
    | DdoSDynamicRule
    | ExecuteRule
    | ForceConnectionCloseRule
    | RulesetsJSChallengeRule
    | LogRule
    | LogCustomFieldRule
    | ManagedChallengeRule
    | RedirectRule
    | RewriteRule
    | RouteRule
    | ScoreRule
    | ServeErrorRule
    | SetCacheSettingsRule
    | SetConfigRule
    | SkipRule
  )[];
  /** The version of the ruleset. */
  version: string;
  /** An informative description of the ruleset. */
  description?: string | null;
}

export const PutPhasResponse = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  id: Schema.String,
  kind: Schema.Literals(["managed", "custom", "root", "zone"]),
  lastUpdated: Schema.String,
  name: Schema.String,
  phase: Schema.Literals([
    "ddos_l4",
    "ddos_l7",
    "http_config_settings",
    "http_custom_errors",
    "http_log_custom_fields",
    "http_ratelimit",
    "http_request_cache_settings",
    "http_request_dynamic_redirect",
    "http_request_firewall_custom",
    "http_request_firewall_managed",
    "http_request_late_transform",
    "http_request_origin",
    "http_request_redirect",
    "http_request_sanitize",
    "http_request_sbfm",
    "http_request_transform",
    "http_response_compression",
    "http_response_firewall_managed",
    "http_response_headers_transform",
    "magic_transit",
    "magic_transit_ids_managed",
    "magic_transit_managed",
    "magic_transit_ratelimit",
  ]),
  rules: Schema.Array(
    Schema.Union([
      BlockRule,
      RulesetsChallengeRule,
      CompressResponseRule,
      DdoSDynamicRule,
      ExecuteRule,
      ForceConnectionCloseRule,
      RulesetsJSChallengeRule,
      LogRule,
      LogCustomFieldRule,
      ManagedChallengeRule,
      RedirectRule,
      RewriteRule,
      RouteRule,
      ScoreRule,
      ServeErrorRule,
      SetCacheSettingsRule,
      SetConfigRule,
      SkipRule,
    ]),
  ),
  version: Schema.String,
  description: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
})
  .pipe(
    Schema.encodeKeys({
      id: "id",
      kind: "kind",
      lastUpdated: "last_updated",
      name: "name",
      phase: "phase",
      rules: "rules",
      version: "version",
      description: "description",
    }),
  )
  .pipe(T.ResponsePath("result")) as unknown as Schema.Schema<PutPhasResponse>;

export type PutPhasError = DefaultErrors;

export const putPhas: API.OperationMethod<
  PutPhasRequest,
  PutPhasResponse,
  PutPhasError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: PutPhasRequest,
  output: PutPhasResponse,
  errors: [],
}));

// =============================================================================
// PhasVersion
// =============================================================================

export interface GetPhasVersionRequest {
  rulesetVersion: string;
}

export const GetPhasVersionRequest = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  rulesetVersion: Schema.String.pipe(T.HttpPath("rulesetVersion")),
}).pipe(
  T.Http({
    method: "GET",
    path: "/{accountOrZone}/{accountOrZoneId}/rulesets/phases/{rulesetPhase}/entrypoint/versions/{rulesetVersion}",
  }),
) as unknown as Schema.Schema<GetPhasVersionRequest>;

export interface GetPhasVersionResponse {
  /** The unique ID of the ruleset. */
  id: string;
  /** The kind of the ruleset. */
  kind: "managed" | "custom" | "root" | "zone";
  /** The timestamp of when the ruleset was last modified. */
  lastUpdated: string;
  /** The human-readable name of the ruleset. */
  name: string;
  /** The phase of the ruleset. */
  phase:
    | "ddos_l4"
    | "ddos_l7"
    | "http_config_settings"
    | "http_custom_errors"
    | "http_log_custom_fields"
    | "http_ratelimit"
    | "http_request_cache_settings"
    | "http_request_dynamic_redirect"
    | "http_request_firewall_custom"
    | "http_request_firewall_managed"
    | "http_request_late_transform"
    | "http_request_origin"
    | "http_request_redirect"
    | "http_request_sanitize"
    | "http_request_sbfm"
    | "http_request_transform"
    | "http_response_compression"
    | "http_response_firewall_managed"
    | "http_response_headers_transform"
    | "magic_transit"
    | "magic_transit_ids_managed"
    | "magic_transit_managed"
    | "magic_transit_ratelimit";
  /** The list of rules in the ruleset. */
  rules: (
    | BlockRule
    | RulesetsChallengeRule
    | CompressResponseRule
    | DdoSDynamicRule
    | ExecuteRule
    | ForceConnectionCloseRule
    | RulesetsJSChallengeRule
    | LogRule
    | LogCustomFieldRule
    | ManagedChallengeRule
    | RedirectRule
    | RewriteRule
    | RouteRule
    | ScoreRule
    | ServeErrorRule
    | SetCacheSettingsRule
    | SetConfigRule
    | SkipRule
  )[];
  /** The version of the ruleset. */
  version: string;
  /** An informative description of the ruleset. */
  description?: string | null;
}

export const GetPhasVersionResponse = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
  {
    id: Schema.String,
    kind: Schema.Literals(["managed", "custom", "root", "zone"]),
    lastUpdated: Schema.String,
    name: Schema.String,
    phase: Schema.Literals([
      "ddos_l4",
      "ddos_l7",
      "http_config_settings",
      "http_custom_errors",
      "http_log_custom_fields",
      "http_ratelimit",
      "http_request_cache_settings",
      "http_request_dynamic_redirect",
      "http_request_firewall_custom",
      "http_request_firewall_managed",
      "http_request_late_transform",
      "http_request_origin",
      "http_request_redirect",
      "http_request_sanitize",
      "http_request_sbfm",
      "http_request_transform",
      "http_response_compression",
      "http_response_firewall_managed",
      "http_response_headers_transform",
      "magic_transit",
      "magic_transit_ids_managed",
      "magic_transit_managed",
      "magic_transit_ratelimit",
    ]),
    rules: Schema.Array(
      Schema.Union([
        BlockRule,
        RulesetsChallengeRule,
        CompressResponseRule,
        DdoSDynamicRule,
        ExecuteRule,
        ForceConnectionCloseRule,
        RulesetsJSChallengeRule,
        LogRule,
        LogCustomFieldRule,
        ManagedChallengeRule,
        RedirectRule,
        RewriteRule,
        RouteRule,
        ScoreRule,
        ServeErrorRule,
        SetCacheSettingsRule,
        SetConfigRule,
        SkipRule,
      ]),
    ),
    version: Schema.String,
    description: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
  },
)
  .pipe(
    Schema.encodeKeys({
      id: "id",
      kind: "kind",
      lastUpdated: "last_updated",
      name: "name",
      phase: "phase",
      rules: "rules",
      version: "version",
      description: "description",
    }),
  )
  .pipe(
    T.ResponsePath("result"),
  ) as unknown as Schema.Schema<GetPhasVersionResponse>;

export type GetPhasVersionError = DefaultErrors;

export const getPhasVersion: API.OperationMethod<
  GetPhasVersionRequest,
  GetPhasVersionResponse,
  GetPhasVersionError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetPhasVersionRequest,
  output: GetPhasVersionResponse,
  errors: [],
}));

export interface ListPhasVersionsRequest {}

export const ListPhasVersionsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).pipe(
    T.Http({
      method: "GET",
      path: "/{accountOrZone}/{accountOrZoneId}/rulesets/phases/{rulesetPhase}/entrypoint/versions",
    }),
  ) as unknown as Schema.Schema<ListPhasVersionsRequest>;

export interface ListPhasVersionsResponse {
  result: {
    id: string;
    kind: "managed" | "custom" | "root" | "zone";
    lastUpdated: string;
    name: string;
    phase:
      | "ddos_l4"
      | "ddos_l7"
      | "http_config_settings"
      | "http_custom_errors"
      | "http_log_custom_fields"
      | "http_ratelimit"
      | "http_request_cache_settings"
      | "http_request_dynamic_redirect"
      | "http_request_firewall_custom"
      | "http_request_firewall_managed"
      | "http_request_late_transform"
      | "http_request_origin"
      | "http_request_redirect"
      | "http_request_sanitize"
      | "http_request_sbfm"
      | "http_request_transform"
      | "http_response_compression"
      | "http_response_firewall_managed"
      | "http_response_headers_transform"
      | "magic_transit"
      | "magic_transit_ids_managed"
      | "magic_transit_managed"
      | "magic_transit_ratelimit";
    version: string;
    description?: string | null;
  }[];
}

export const ListPhasVersionsResponse =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    result: Schema.Array(
      Schema.Struct({
        id: Schema.String,
        kind: Schema.Literals(["managed", "custom", "root", "zone"]),
        lastUpdated: Schema.String,
        name: Schema.String,
        phase: Schema.Literals([
          "ddos_l4",
          "ddos_l7",
          "http_config_settings",
          "http_custom_errors",
          "http_log_custom_fields",
          "http_ratelimit",
          "http_request_cache_settings",
          "http_request_dynamic_redirect",
          "http_request_firewall_custom",
          "http_request_firewall_managed",
          "http_request_late_transform",
          "http_request_origin",
          "http_request_redirect",
          "http_request_sanitize",
          "http_request_sbfm",
          "http_request_transform",
          "http_response_compression",
          "http_response_firewall_managed",
          "http_response_headers_transform",
          "magic_transit",
          "magic_transit_ids_managed",
          "magic_transit_managed",
          "magic_transit_ratelimit",
        ]),
        version: Schema.String,
        description: Schema.optional(
          Schema.Union([Schema.String, Schema.Null]),
        ),
      }).pipe(
        Schema.encodeKeys({
          id: "id",
          kind: "kind",
          lastUpdated: "last_updated",
          name: "name",
          phase: "phase",
          version: "version",
          description: "description",
        }),
      ),
    ),
  }) as unknown as Schema.Schema<ListPhasVersionsResponse>;

export type ListPhasVersionsError = DefaultErrors;

export const listPhasVersions: API.PaginatedOperationMethod<
  ListPhasVersionsRequest,
  ListPhasVersionsResponse,
  ListPhasVersionsError,
  Credentials | HttpClient.HttpClient
> & {
  pages: (
    input: ListPhasVersionsRequest,
  ) => stream.Stream<
    ListPhasVersionsResponse,
    ListPhasVersionsError,
    Credentials | HttpClient.HttpClient
  >;
  items: (input: ListPhasVersionsRequest) => stream.Stream<
    {
      id: string;
      kind: "managed" | "custom" | "root" | "zone";
      lastUpdated: string;
      name: string;
      phase:
        | "ddos_l4"
        | "ddos_l7"
        | "http_config_settings"
        | "http_custom_errors"
        | "http_log_custom_fields"
        | "http_ratelimit"
        | "http_request_cache_settings"
        | "http_request_dynamic_redirect"
        | "http_request_firewall_custom"
        | "http_request_firewall_managed"
        | "http_request_late_transform"
        | "http_request_origin"
        | "http_request_redirect"
        | "http_request_sanitize"
        | "http_request_sbfm"
        | "http_request_transform"
        | "http_response_compression"
        | "http_response_firewall_managed"
        | "http_response_headers_transform"
        | "magic_transit"
        | "magic_transit_ids_managed"
        | "magic_transit_managed"
        | "magic_transit_ratelimit";
      version: string;
      description?: string | null;
    },
    ListPhasVersionsError,
    Credentials | HttpClient.HttpClient
  >;
} = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
  input: ListPhasVersionsRequest,
  output: ListPhasVersionsResponse,
  errors: [],
  pagination: {
    mode: "single",
    items: "result",
  } as const,
}));

// =============================================================================
// Rule
// =============================================================================

export interface CreateRuleRequest {
  rulesetId: string;
  /** Path param: The Account ID to use for this endpoint. Mutually exclusive with the Zone ID. */
  accountId?: string;
  /** Path param: The Zone ID to use for this endpoint. Mutually exclusive with the Account ID. */
  zoneId?: string;
  /** Body param: The unique ID of the rule. */
  id?: string;
  /** Body param: The action to perform when the rule matches. */
  action?: "block";
  /** Body param: The parameters configuring the rule's action. */
  actionParameters?: { response?: Response };
  /** Body param: An informative description of the rule. */
  description?: string;
  /** Body param: Whether the rule should be executed. */
  enabled?: boolean;
  /** Body param: Configuration for exposed credential checking. */
  exposedCredentialCheck?: ExposedCredentialCheck;
  /** Body param: The expression defining which traffic will match the rule. */
  expression?: string;
  /** Body param: An object configuring the rule's logging behavior. */
  logging?: Logging;
  /** Body param: An object configuring where the rule will be placed. */
  position?: BeforePosition | AfterPosition | IndexPosition;
  /** Body param: An object configuring the rule's rate limit behavior. */
  ratelimit?: Ratelimit;
  /** Body param: The reference of the rule (the rule's ID by default). */
  ref?: string;
}

export const CreateRuleRequest = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  rulesetId: Schema.String.pipe(T.HttpPath("rulesetId")),
  accountId: Schema.String.pipe(T.HttpPath("account_id")),
  zoneId: Schema.String.pipe(T.HttpPath("zone_id")),
  id: Schema.optional(Schema.String),
  action: Schema.optional(Schema.Literal("block")),
  actionParameters: Schema.optional(
    Schema.Struct({
      response: Schema.optional(Response),
    }),
  ),
  description: Schema.optional(Schema.String),
  enabled: Schema.optional(Schema.Boolean),
  exposedCredentialCheck: Schema.optional(ExposedCredentialCheck),
  expression: Schema.optional(Schema.String),
  logging: Schema.optional(Logging),
  position: Schema.optional(
    Schema.Union([BeforePosition, AfterPosition, IndexPosition]),
  ),
  ratelimit: Schema.optional(Ratelimit),
  ref: Schema.optional(Schema.String),
}).pipe(
  Schema.encodeKeys({
    id: "id",
    action: "action",
    actionParameters: "action_parameters",
    description: "description",
    enabled: "enabled",
    exposedCredentialCheck: "exposed_credential_check",
    expression: "expression",
    logging: "logging",
    position: "position",
    ratelimit: "ratelimit",
    ref: "ref",
  }),
  T.Http({
    method: "POST",
    path: "/{accountOrZone}/{accountOrZoneId}/rulesets/{rulesetId}/rules",
  }),
) as unknown as Schema.Schema<CreateRuleRequest>;

export interface CreateRuleResponse {
  /** The unique ID of the ruleset. */
  id: string;
  /** The kind of the ruleset. */
  kind: "managed" | "custom" | "root" | "zone";
  /** The timestamp of when the ruleset was last modified. */
  lastUpdated: string;
  /** The human-readable name of the ruleset. */
  name: string;
  /** The phase of the ruleset. */
  phase:
    | "ddos_l4"
    | "ddos_l7"
    | "http_config_settings"
    | "http_custom_errors"
    | "http_log_custom_fields"
    | "http_ratelimit"
    | "http_request_cache_settings"
    | "http_request_dynamic_redirect"
    | "http_request_firewall_custom"
    | "http_request_firewall_managed"
    | "http_request_late_transform"
    | "http_request_origin"
    | "http_request_redirect"
    | "http_request_sanitize"
    | "http_request_sbfm"
    | "http_request_transform"
    | "http_response_compression"
    | "http_response_firewall_managed"
    | "http_response_headers_transform"
    | "magic_transit"
    | "magic_transit_ids_managed"
    | "magic_transit_managed"
    | "magic_transit_ratelimit";
  /** The list of rules in the ruleset. */
  rules: (
    | BlockRule
    | RulesetsChallengeRule
    | CompressResponseRule
    | DdoSDynamicRule
    | ExecuteRule
    | ForceConnectionCloseRule
    | RulesetsJSChallengeRule
    | LogRule
    | LogCustomFieldRule
    | ManagedChallengeRule
    | RedirectRule
    | RewriteRule
    | RouteRule
    | ScoreRule
    | ServeErrorRule
    | SetCacheSettingsRule
    | SetConfigRule
    | SkipRule
  )[];
  /** The version of the ruleset. */
  version: string;
  /** An informative description of the ruleset. */
  description?: string | null;
}

export const CreateRuleResponse = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  id: Schema.String,
  kind: Schema.Literals(["managed", "custom", "root", "zone"]),
  lastUpdated: Schema.String,
  name: Schema.String,
  phase: Schema.Literals([
    "ddos_l4",
    "ddos_l7",
    "http_config_settings",
    "http_custom_errors",
    "http_log_custom_fields",
    "http_ratelimit",
    "http_request_cache_settings",
    "http_request_dynamic_redirect",
    "http_request_firewall_custom",
    "http_request_firewall_managed",
    "http_request_late_transform",
    "http_request_origin",
    "http_request_redirect",
    "http_request_sanitize",
    "http_request_sbfm",
    "http_request_transform",
    "http_response_compression",
    "http_response_firewall_managed",
    "http_response_headers_transform",
    "magic_transit",
    "magic_transit_ids_managed",
    "magic_transit_managed",
    "magic_transit_ratelimit",
  ]),
  rules: Schema.Array(
    Schema.Union([
      BlockRule,
      RulesetsChallengeRule,
      CompressResponseRule,
      DdoSDynamicRule,
      ExecuteRule,
      ForceConnectionCloseRule,
      RulesetsJSChallengeRule,
      LogRule,
      LogCustomFieldRule,
      ManagedChallengeRule,
      RedirectRule,
      RewriteRule,
      RouteRule,
      ScoreRule,
      ServeErrorRule,
      SetCacheSettingsRule,
      SetConfigRule,
      SkipRule,
    ]),
  ),
  version: Schema.String,
  description: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
})
  .pipe(
    Schema.encodeKeys({
      id: "id",
      kind: "kind",
      lastUpdated: "last_updated",
      name: "name",
      phase: "phase",
      rules: "rules",
      version: "version",
      description: "description",
    }),
  )
  .pipe(
    T.ResponsePath("result"),
  ) as unknown as Schema.Schema<CreateRuleResponse>;

export type CreateRuleError = DefaultErrors;

export const createRule: API.OperationMethod<
  CreateRuleRequest,
  CreateRuleResponse,
  CreateRuleError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: CreateRuleRequest,
  output: CreateRuleResponse,
  errors: [],
}));

export interface PatchRuleRequest {
  rulesetId: string;
  ruleId: string;
  /** Path param: The Account ID to use for this endpoint. Mutually exclusive with the Zone ID. */
  accountId?: string;
  /** Path param: The Zone ID to use for this endpoint. Mutually exclusive with the Account ID. */
  zoneId?: string;
  /** Body param: The unique ID of the rule. */
  id?: string;
  /** Body param: The action to perform when the rule matches. */
  action?: "block";
  /** Body param: The parameters configuring the rule's action. */
  actionParameters?: { response?: Response };
  /** Body param: An informative description of the rule. */
  description?: string;
  /** Body param: Whether the rule should be executed. */
  enabled?: boolean;
  /** Body param: Configuration for exposed credential checking. */
  exposedCredentialCheck?: ExposedCredentialCheck;
  /** Body param: The expression defining which traffic will match the rule. */
  expression?: string;
  /** Body param: An object configuring the rule's logging behavior. */
  logging?: Logging;
  /** Body param: An object configuring where the rule will be placed. */
  position?: BeforePosition | AfterPosition | IndexPosition;
  /** Body param: An object configuring the rule's rate limit behavior. */
  ratelimit?: Ratelimit;
  /** Body param: The reference of the rule (the rule's ID by default). */
  ref?: string;
}

export const PatchRuleRequest = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  rulesetId: Schema.String.pipe(T.HttpPath("rulesetId")),
  ruleId: Schema.String.pipe(T.HttpPath("ruleId")),
  accountId: Schema.String.pipe(T.HttpPath("account_id")),
  zoneId: Schema.String.pipe(T.HttpPath("zone_id")),
  id: Schema.optional(Schema.String),
  action: Schema.optional(Schema.Literal("block")),
  actionParameters: Schema.optional(
    Schema.Struct({
      response: Schema.optional(Response),
    }),
  ),
  description: Schema.optional(Schema.String),
  enabled: Schema.optional(Schema.Boolean),
  exposedCredentialCheck: Schema.optional(ExposedCredentialCheck),
  expression: Schema.optional(Schema.String),
  logging: Schema.optional(Logging),
  position: Schema.optional(
    Schema.Union([BeforePosition, AfterPosition, IndexPosition]),
  ),
  ratelimit: Schema.optional(Ratelimit),
  ref: Schema.optional(Schema.String),
}).pipe(
  Schema.encodeKeys({
    id: "id",
    action: "action",
    actionParameters: "action_parameters",
    description: "description",
    enabled: "enabled",
    exposedCredentialCheck: "exposed_credential_check",
    expression: "expression",
    logging: "logging",
    position: "position",
    ratelimit: "ratelimit",
    ref: "ref",
  }),
  T.Http({
    method: "PATCH",
    path: "/{accountOrZone}/{accountOrZoneId}/rulesets/{rulesetId}/rules/{ruleId}",
  }),
) as unknown as Schema.Schema<PatchRuleRequest>;

export interface PatchRuleResponse {
  /** The unique ID of the ruleset. */
  id: string;
  /** The kind of the ruleset. */
  kind: "managed" | "custom" | "root" | "zone";
  /** The timestamp of when the ruleset was last modified. */
  lastUpdated: string;
  /** The human-readable name of the ruleset. */
  name: string;
  /** The phase of the ruleset. */
  phase:
    | "ddos_l4"
    | "ddos_l7"
    | "http_config_settings"
    | "http_custom_errors"
    | "http_log_custom_fields"
    | "http_ratelimit"
    | "http_request_cache_settings"
    | "http_request_dynamic_redirect"
    | "http_request_firewall_custom"
    | "http_request_firewall_managed"
    | "http_request_late_transform"
    | "http_request_origin"
    | "http_request_redirect"
    | "http_request_sanitize"
    | "http_request_sbfm"
    | "http_request_transform"
    | "http_response_compression"
    | "http_response_firewall_managed"
    | "http_response_headers_transform"
    | "magic_transit"
    | "magic_transit_ids_managed"
    | "magic_transit_managed"
    | "magic_transit_ratelimit";
  /** The list of rules in the ruleset. */
  rules: (
    | BlockRule
    | RulesetsChallengeRule
    | CompressResponseRule
    | DdoSDynamicRule
    | ExecuteRule
    | ForceConnectionCloseRule
    | RulesetsJSChallengeRule
    | LogRule
    | LogCustomFieldRule
    | ManagedChallengeRule
    | RedirectRule
    | RewriteRule
    | RouteRule
    | ScoreRule
    | ServeErrorRule
    | SetCacheSettingsRule
    | SetConfigRule
    | SkipRule
  )[];
  /** The version of the ruleset. */
  version: string;
  /** An informative description of the ruleset. */
  description?: string | null;
}

export const PatchRuleResponse = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  id: Schema.String,
  kind: Schema.Literals(["managed", "custom", "root", "zone"]),
  lastUpdated: Schema.String,
  name: Schema.String,
  phase: Schema.Literals([
    "ddos_l4",
    "ddos_l7",
    "http_config_settings",
    "http_custom_errors",
    "http_log_custom_fields",
    "http_ratelimit",
    "http_request_cache_settings",
    "http_request_dynamic_redirect",
    "http_request_firewall_custom",
    "http_request_firewall_managed",
    "http_request_late_transform",
    "http_request_origin",
    "http_request_redirect",
    "http_request_sanitize",
    "http_request_sbfm",
    "http_request_transform",
    "http_response_compression",
    "http_response_firewall_managed",
    "http_response_headers_transform",
    "magic_transit",
    "magic_transit_ids_managed",
    "magic_transit_managed",
    "magic_transit_ratelimit",
  ]),
  rules: Schema.Array(
    Schema.Union([
      BlockRule,
      RulesetsChallengeRule,
      CompressResponseRule,
      DdoSDynamicRule,
      ExecuteRule,
      ForceConnectionCloseRule,
      RulesetsJSChallengeRule,
      LogRule,
      LogCustomFieldRule,
      ManagedChallengeRule,
      RedirectRule,
      RewriteRule,
      RouteRule,
      ScoreRule,
      ServeErrorRule,
      SetCacheSettingsRule,
      SetConfigRule,
      SkipRule,
    ]),
  ),
  version: Schema.String,
  description: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
})
  .pipe(
    Schema.encodeKeys({
      id: "id",
      kind: "kind",
      lastUpdated: "last_updated",
      name: "name",
      phase: "phase",
      rules: "rules",
      version: "version",
      description: "description",
    }),
  )
  .pipe(
    T.ResponsePath("result"),
  ) as unknown as Schema.Schema<PatchRuleResponse>;

export type PatchRuleError = DefaultErrors;

export const patchRule: API.OperationMethod<
  PatchRuleRequest,
  PatchRuleResponse,
  PatchRuleError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: PatchRuleRequest,
  output: PatchRuleResponse,
  errors: [],
}));

export interface DeleteRuleRequest {
  rulesetId: string;
  ruleId: string;
}

export const DeleteRuleRequest = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  rulesetId: Schema.String.pipe(T.HttpPath("rulesetId")),
  ruleId: Schema.String.pipe(T.HttpPath("ruleId")),
}).pipe(
  T.Http({
    method: "DELETE",
    path: "/{accountOrZone}/{accountOrZoneId}/rulesets/{rulesetId}/rules/{ruleId}",
  }),
) as unknown as Schema.Schema<DeleteRuleRequest>;

export interface DeleteRuleResponse {
  /** The unique ID of the ruleset. */
  id: string;
  /** The kind of the ruleset. */
  kind: "managed" | "custom" | "root" | "zone";
  /** The timestamp of when the ruleset was last modified. */
  lastUpdated: string;
  /** The human-readable name of the ruleset. */
  name: string;
  /** The phase of the ruleset. */
  phase:
    | "ddos_l4"
    | "ddos_l7"
    | "http_config_settings"
    | "http_custom_errors"
    | "http_log_custom_fields"
    | "http_ratelimit"
    | "http_request_cache_settings"
    | "http_request_dynamic_redirect"
    | "http_request_firewall_custom"
    | "http_request_firewall_managed"
    | "http_request_late_transform"
    | "http_request_origin"
    | "http_request_redirect"
    | "http_request_sanitize"
    | "http_request_sbfm"
    | "http_request_transform"
    | "http_response_compression"
    | "http_response_firewall_managed"
    | "http_response_headers_transform"
    | "magic_transit"
    | "magic_transit_ids_managed"
    | "magic_transit_managed"
    | "magic_transit_ratelimit";
  /** The list of rules in the ruleset. */
  rules: (
    | BlockRule
    | RulesetsChallengeRule
    | CompressResponseRule
    | DdoSDynamicRule
    | ExecuteRule
    | ForceConnectionCloseRule
    | RulesetsJSChallengeRule
    | LogRule
    | LogCustomFieldRule
    | ManagedChallengeRule
    | RedirectRule
    | RewriteRule
    | RouteRule
    | ScoreRule
    | ServeErrorRule
    | SetCacheSettingsRule
    | SetConfigRule
    | SkipRule
  )[];
  /** The version of the ruleset. */
  version: string;
  /** An informative description of the ruleset. */
  description?: string | null;
}

export const DeleteRuleResponse = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  id: Schema.String,
  kind: Schema.Literals(["managed", "custom", "root", "zone"]),
  lastUpdated: Schema.String,
  name: Schema.String,
  phase: Schema.Literals([
    "ddos_l4",
    "ddos_l7",
    "http_config_settings",
    "http_custom_errors",
    "http_log_custom_fields",
    "http_ratelimit",
    "http_request_cache_settings",
    "http_request_dynamic_redirect",
    "http_request_firewall_custom",
    "http_request_firewall_managed",
    "http_request_late_transform",
    "http_request_origin",
    "http_request_redirect",
    "http_request_sanitize",
    "http_request_sbfm",
    "http_request_transform",
    "http_response_compression",
    "http_response_firewall_managed",
    "http_response_headers_transform",
    "magic_transit",
    "magic_transit_ids_managed",
    "magic_transit_managed",
    "magic_transit_ratelimit",
  ]),
  rules: Schema.Array(
    Schema.Union([
      BlockRule,
      RulesetsChallengeRule,
      CompressResponseRule,
      DdoSDynamicRule,
      ExecuteRule,
      ForceConnectionCloseRule,
      RulesetsJSChallengeRule,
      LogRule,
      LogCustomFieldRule,
      ManagedChallengeRule,
      RedirectRule,
      RewriteRule,
      RouteRule,
      ScoreRule,
      ServeErrorRule,
      SetCacheSettingsRule,
      SetConfigRule,
      SkipRule,
    ]),
  ),
  version: Schema.String,
  description: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
})
  .pipe(
    Schema.encodeKeys({
      id: "id",
      kind: "kind",
      lastUpdated: "last_updated",
      name: "name",
      phase: "phase",
      rules: "rules",
      version: "version",
      description: "description",
    }),
  )
  .pipe(
    T.ResponsePath("result"),
  ) as unknown as Schema.Schema<DeleteRuleResponse>;

export type DeleteRuleError = DefaultErrors;

export const deleteRule: API.OperationMethod<
  DeleteRuleRequest,
  DeleteRuleResponse,
  DeleteRuleError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: DeleteRuleRequest,
  output: DeleteRuleResponse,
  errors: [],
}));

// =============================================================================
// Ruleset
// =============================================================================

export interface GetRulesetRequest {
  rulesetId: string;
}

export const GetRulesetRequest = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  rulesetId: Schema.String.pipe(T.HttpPath("rulesetId")),
}).pipe(
  T.Http({
    method: "GET",
    path: "/{accountOrZone}/{accountOrZoneId}/rulesets/{rulesetId}",
  }),
) as unknown as Schema.Schema<GetRulesetRequest>;

export interface GetRulesetResponse {
  /** The unique ID of the ruleset. */
  id: string;
  /** The kind of the ruleset. */
  kind: "managed" | "custom" | "root" | "zone";
  /** The timestamp of when the ruleset was last modified. */
  lastUpdated: string;
  /** The human-readable name of the ruleset. */
  name: string;
  /** The phase of the ruleset. */
  phase:
    | "ddos_l4"
    | "ddos_l7"
    | "http_config_settings"
    | "http_custom_errors"
    | "http_log_custom_fields"
    | "http_ratelimit"
    | "http_request_cache_settings"
    | "http_request_dynamic_redirect"
    | "http_request_firewall_custom"
    | "http_request_firewall_managed"
    | "http_request_late_transform"
    | "http_request_origin"
    | "http_request_redirect"
    | "http_request_sanitize"
    | "http_request_sbfm"
    | "http_request_transform"
    | "http_response_compression"
    | "http_response_firewall_managed"
    | "http_response_headers_transform"
    | "magic_transit"
    | "magic_transit_ids_managed"
    | "magic_transit_managed"
    | "magic_transit_ratelimit";
  /** The list of rules in the ruleset. */
  rules: (
    | BlockRule
    | RulesetsChallengeRule
    | CompressResponseRule
    | DdoSDynamicRule
    | ExecuteRule
    | ForceConnectionCloseRule
    | RulesetsJSChallengeRule
    | LogRule
    | LogCustomFieldRule
    | ManagedChallengeRule
    | RedirectRule
    | RewriteRule
    | RouteRule
    | ScoreRule
    | ServeErrorRule
    | SetCacheSettingsRule
    | SetConfigRule
    | SkipRule
  )[];
  /** The version of the ruleset. */
  version: string;
  /** An informative description of the ruleset. */
  description?: string | null;
}

export const GetRulesetResponse = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  id: Schema.String,
  kind: Schema.Literals(["managed", "custom", "root", "zone"]),
  lastUpdated: Schema.String,
  name: Schema.String,
  phase: Schema.Literals([
    "ddos_l4",
    "ddos_l7",
    "http_config_settings",
    "http_custom_errors",
    "http_log_custom_fields",
    "http_ratelimit",
    "http_request_cache_settings",
    "http_request_dynamic_redirect",
    "http_request_firewall_custom",
    "http_request_firewall_managed",
    "http_request_late_transform",
    "http_request_origin",
    "http_request_redirect",
    "http_request_sanitize",
    "http_request_sbfm",
    "http_request_transform",
    "http_response_compression",
    "http_response_firewall_managed",
    "http_response_headers_transform",
    "magic_transit",
    "magic_transit_ids_managed",
    "magic_transit_managed",
    "magic_transit_ratelimit",
  ]),
  rules: Schema.Array(
    Schema.Union([
      BlockRule,
      RulesetsChallengeRule,
      CompressResponseRule,
      DdoSDynamicRule,
      ExecuteRule,
      ForceConnectionCloseRule,
      RulesetsJSChallengeRule,
      LogRule,
      LogCustomFieldRule,
      ManagedChallengeRule,
      RedirectRule,
      RewriteRule,
      RouteRule,
      ScoreRule,
      ServeErrorRule,
      SetCacheSettingsRule,
      SetConfigRule,
      SkipRule,
    ]),
  ),
  version: Schema.String,
  description: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
})
  .pipe(
    Schema.encodeKeys({
      id: "id",
      kind: "kind",
      lastUpdated: "last_updated",
      name: "name",
      phase: "phase",
      rules: "rules",
      version: "version",
      description: "description",
    }),
  )
  .pipe(
    T.ResponsePath("result"),
  ) as unknown as Schema.Schema<GetRulesetResponse>;

export type GetRulesetError = DefaultErrors;

export const getRuleset: API.OperationMethod<
  GetRulesetRequest,
  GetRulesetResponse,
  GetRulesetError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetRulesetRequest,
  output: GetRulesetResponse,
  errors: [],
}));

export interface ListRulesetsRequest {}

export const ListRulesetsRequest = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
  {},
).pipe(
  T.Http({
    method: "GET",
    path: "/{accountOrZone}/{accountOrZoneId}/rulesets",
  }),
) as unknown as Schema.Schema<ListRulesetsRequest>;

export interface ListRulesetsResponse {
  result: {
    id: string;
    kind: "managed" | "custom" | "root" | "zone";
    lastUpdated: string;
    name: string;
    phase:
      | "ddos_l4"
      | "ddos_l7"
      | "http_config_settings"
      | "http_custom_errors"
      | "http_log_custom_fields"
      | "http_ratelimit"
      | "http_request_cache_settings"
      | "http_request_dynamic_redirect"
      | "http_request_firewall_custom"
      | "http_request_firewall_managed"
      | "http_request_late_transform"
      | "http_request_origin"
      | "http_request_redirect"
      | "http_request_sanitize"
      | "http_request_sbfm"
      | "http_request_transform"
      | "http_response_compression"
      | "http_response_firewall_managed"
      | "http_response_headers_transform"
      | "magic_transit"
      | "magic_transit_ids_managed"
      | "magic_transit_managed"
      | "magic_transit_ratelimit";
    version: string;
    description?: string | null;
  }[];
  resultInfo: {
    count?: number | null;
    cursor?: string | null;
    perPage?: number | null;
  };
}

export const ListRulesetsResponse = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  result: Schema.Array(
    Schema.Struct({
      id: Schema.String,
      kind: Schema.Literals(["managed", "custom", "root", "zone"]),
      lastUpdated: Schema.String,
      name: Schema.String,
      phase: Schema.Literals([
        "ddos_l4",
        "ddos_l7",
        "http_config_settings",
        "http_custom_errors",
        "http_log_custom_fields",
        "http_ratelimit",
        "http_request_cache_settings",
        "http_request_dynamic_redirect",
        "http_request_firewall_custom",
        "http_request_firewall_managed",
        "http_request_late_transform",
        "http_request_origin",
        "http_request_redirect",
        "http_request_sanitize",
        "http_request_sbfm",
        "http_request_transform",
        "http_response_compression",
        "http_response_firewall_managed",
        "http_response_headers_transform",
        "magic_transit",
        "magic_transit_ids_managed",
        "magic_transit_managed",
        "magic_transit_ratelimit",
      ]),
      version: Schema.String,
      description: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
    }).pipe(
      Schema.encodeKeys({
        id: "id",
        kind: "kind",
        lastUpdated: "last_updated",
        name: "name",
        phase: "phase",
        version: "version",
        description: "description",
      }),
    ),
  ),
  resultInfo: Schema.Struct({
    count: Schema.optional(Schema.Union([Schema.Number, Schema.Null])),
    cursor: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
    perPage: Schema.optional(Schema.Union([Schema.Number, Schema.Null])),
  }).pipe(
    Schema.encodeKeys({
      count: "count",
      cursor: "cursor",
      perPage: "per_page",
    }),
  ),
}).pipe(
  Schema.encodeKeys({ result: "result", resultInfo: "result_info" }),
) as unknown as Schema.Schema<ListRulesetsResponse>;

export type ListRulesetsError = DefaultErrors;

export const listRulesets: API.PaginatedOperationMethod<
  ListRulesetsRequest,
  ListRulesetsResponse,
  ListRulesetsError,
  Credentials | HttpClient.HttpClient
> & {
  pages: (
    input: ListRulesetsRequest,
  ) => stream.Stream<
    ListRulesetsResponse,
    ListRulesetsError,
    Credentials | HttpClient.HttpClient
  >;
  items: (input: ListRulesetsRequest) => stream.Stream<
    {
      id: string;
      kind: "managed" | "custom" | "root" | "zone";
      lastUpdated: string;
      name: string;
      phase:
        | "ddos_l4"
        | "ddos_l7"
        | "http_config_settings"
        | "http_custom_errors"
        | "http_log_custom_fields"
        | "http_ratelimit"
        | "http_request_cache_settings"
        | "http_request_dynamic_redirect"
        | "http_request_firewall_custom"
        | "http_request_firewall_managed"
        | "http_request_late_transform"
        | "http_request_origin"
        | "http_request_redirect"
        | "http_request_sanitize"
        | "http_request_sbfm"
        | "http_request_transform"
        | "http_response_compression"
        | "http_response_firewall_managed"
        | "http_response_headers_transform"
        | "magic_transit"
        | "magic_transit_ids_managed"
        | "magic_transit_managed"
        | "magic_transit_ratelimit";
      version: string;
      description?: string | null;
    },
    ListRulesetsError,
    Credentials | HttpClient.HttpClient
  >;
} = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
  input: ListRulesetsRequest,
  output: ListRulesetsResponse,
  errors: [],
  pagination: {
    mode: "cursor",
    inputToken: "cursor",
    outputToken: "resultInfo.cursor",
    items: "result",
    pageSize: "perPage",
  } as const,
}));

export interface CreateRulesetRequest {
  /** Path param: The Account ID to use for this endpoint. Mutually exclusive with the Zone ID. */
  accountId?: string;
  /** Path param: The Zone ID to use for this endpoint. Mutually exclusive with the Account ID. */
  zoneId?: string;
  /** Body param: The kind of the ruleset. */
  kind: "managed" | "custom" | "root" | "zone";
  /** Body param: The human-readable name of the ruleset. */
  name: string;
  /** Body param: The phase of the ruleset. */
  phase:
    | "ddos_l4"
    | "ddos_l7"
    | "http_config_settings"
    | "http_custom_errors"
    | "http_log_custom_fields"
    | "http_ratelimit"
    | "http_request_cache_settings"
    | "http_request_dynamic_redirect"
    | "http_request_firewall_custom"
    | "http_request_firewall_managed"
    | "http_request_late_transform"
    | "http_request_origin"
    | "http_request_redirect"
    | "http_request_sanitize"
    | "http_request_sbfm"
    | "http_request_transform"
    | "http_response_compression"
    | "http_response_firewall_managed"
    | "http_response_headers_transform"
    | "magic_transit"
    | "magic_transit_ids_managed"
    | "magic_transit_managed"
    | "magic_transit_ratelimit";
  /** Body param: An informative description of the ruleset. */
  description?: string;
  /** Body param: The list of rules in the ruleset. */
  rules?: (
    | BlockRuleParam
    | {
        id?: string;
        action?: "challenge";
        actionParameters?: unknown;
        description?: string;
        enabled?: boolean;
        exposedCredentialCheck?: ExposedCredentialCheck;
        expression?: string;
        logging?: Logging;
        ratelimit?: Ratelimit;
        ref?: string;
      }
    | CompressResponseRuleParam
    | DdoSDynamicRuleParam
    | ExecuteRuleParam
    | ForceConnectionCloseRuleParam
    | {
        id?: string;
        action?: "js_challenge";
        actionParameters?: unknown;
        description?: string;
        enabled?: boolean;
        exposedCredentialCheck?: ExposedCredentialCheck;
        expression?: string;
        logging?: Logging;
        ratelimit?: Ratelimit;
        ref?: string;
      }
    | LogRuleParam
    | LogCustomFieldRuleParam
    | ManagedChallengeRuleParam
    | RedirectRuleParam
    | RewriteRuleParam
    | RouteRuleParam
    | ScoreRuleParam
    | ServeErrorRuleParam
    | SetCacheSettingsRuleParam
    | SetConfigRuleParam
    | SkipRuleParam
  )[];
}

export const CreateRulesetRequest = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  accountId: Schema.String.pipe(T.HttpPath("account_id")),
  zoneId: Schema.String.pipe(T.HttpPath("zone_id")),
  kind: Schema.Literals(["managed", "custom", "root", "zone"]),
  name: Schema.String,
  phase: Schema.Literals([
    "ddos_l4",
    "ddos_l7",
    "http_config_settings",
    "http_custom_errors",
    "http_log_custom_fields",
    "http_ratelimit",
    "http_request_cache_settings",
    "http_request_dynamic_redirect",
    "http_request_firewall_custom",
    "http_request_firewall_managed",
    "http_request_late_transform",
    "http_request_origin",
    "http_request_redirect",
    "http_request_sanitize",
    "http_request_sbfm",
    "http_request_transform",
    "http_response_compression",
    "http_response_firewall_managed",
    "http_response_headers_transform",
    "magic_transit",
    "magic_transit_ids_managed",
    "magic_transit_managed",
    "magic_transit_ratelimit",
  ]),
  description: Schema.optional(Schema.String),
  rules: Schema.optional(
    Schema.Array(
      Schema.Union([
        BlockRuleParam,
        Schema.Struct({
          id: Schema.optional(Schema.String),
          action: Schema.optional(Schema.Literal("challenge")),
          actionParameters: Schema.optional(Schema.Unknown),
          description: Schema.optional(Schema.String),
          enabled: Schema.optional(Schema.Boolean),
          exposedCredentialCheck: Schema.optional(ExposedCredentialCheck),
          expression: Schema.optional(Schema.String),
          logging: Schema.optional(Logging),
          ratelimit: Schema.optional(Ratelimit),
          ref: Schema.optional(Schema.String),
        }).pipe(
          Schema.encodeKeys({
            id: "id",
            action: "action",
            actionParameters: "action_parameters",
            description: "description",
            enabled: "enabled",
            exposedCredentialCheck: "exposed_credential_check",
            expression: "expression",
            logging: "logging",
            ratelimit: "ratelimit",
            ref: "ref",
          }),
        ),
        CompressResponseRuleParam,
        DdoSDynamicRuleParam,
        ExecuteRuleParam,
        ForceConnectionCloseRuleParam,
        Schema.Struct({
          id: Schema.optional(Schema.String),
          action: Schema.optional(Schema.Literal("js_challenge")),
          actionParameters: Schema.optional(Schema.Unknown),
          description: Schema.optional(Schema.String),
          enabled: Schema.optional(Schema.Boolean),
          exposedCredentialCheck: Schema.optional(ExposedCredentialCheck),
          expression: Schema.optional(Schema.String),
          logging: Schema.optional(Logging),
          ratelimit: Schema.optional(Ratelimit),
          ref: Schema.optional(Schema.String),
        }).pipe(
          Schema.encodeKeys({
            id: "id",
            action: "action",
            actionParameters: "action_parameters",
            description: "description",
            enabled: "enabled",
            exposedCredentialCheck: "exposed_credential_check",
            expression: "expression",
            logging: "logging",
            ratelimit: "ratelimit",
            ref: "ref",
          }),
        ),
        LogRuleParam,
        LogCustomFieldRuleParam,
        ManagedChallengeRuleParam,
        RedirectRuleParam,
        RewriteRuleParam,
        RouteRuleParam,
        ScoreRuleParam,
        ServeErrorRuleParam,
        SetCacheSettingsRuleParam,
        SetConfigRuleParam,
        SkipRuleParam,
      ]),
    ),
  ),
}).pipe(
  T.Http({
    method: "POST",
    path: "/{accountOrZone}/{accountOrZoneId}/rulesets",
  }),
) as unknown as Schema.Schema<CreateRulesetRequest>;

export interface CreateRulesetResponse {
  /** The unique ID of the ruleset. */
  id: string;
  /** The kind of the ruleset. */
  kind: "managed" | "custom" | "root" | "zone";
  /** The timestamp of when the ruleset was last modified. */
  lastUpdated: string;
  /** The human-readable name of the ruleset. */
  name: string;
  /** The phase of the ruleset. */
  phase:
    | "ddos_l4"
    | "ddos_l7"
    | "http_config_settings"
    | "http_custom_errors"
    | "http_log_custom_fields"
    | "http_ratelimit"
    | "http_request_cache_settings"
    | "http_request_dynamic_redirect"
    | "http_request_firewall_custom"
    | "http_request_firewall_managed"
    | "http_request_late_transform"
    | "http_request_origin"
    | "http_request_redirect"
    | "http_request_sanitize"
    | "http_request_sbfm"
    | "http_request_transform"
    | "http_response_compression"
    | "http_response_firewall_managed"
    | "http_response_headers_transform"
    | "magic_transit"
    | "magic_transit_ids_managed"
    | "magic_transit_managed"
    | "magic_transit_ratelimit";
  /** The list of rules in the ruleset. */
  rules: (
    | BlockRule
    | RulesetsChallengeRule
    | CompressResponseRule
    | DdoSDynamicRule
    | ExecuteRule
    | ForceConnectionCloseRule
    | RulesetsJSChallengeRule
    | LogRule
    | LogCustomFieldRule
    | ManagedChallengeRule
    | RedirectRule
    | RewriteRule
    | RouteRule
    | ScoreRule
    | ServeErrorRule
    | SetCacheSettingsRule
    | SetConfigRule
    | SkipRule
  )[];
  /** The version of the ruleset. */
  version: string;
  /** An informative description of the ruleset. */
  description?: string | null;
}

export const CreateRulesetResponse = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  id: Schema.String,
  kind: Schema.Literals(["managed", "custom", "root", "zone"]),
  lastUpdated: Schema.String,
  name: Schema.String,
  phase: Schema.Literals([
    "ddos_l4",
    "ddos_l7",
    "http_config_settings",
    "http_custom_errors",
    "http_log_custom_fields",
    "http_ratelimit",
    "http_request_cache_settings",
    "http_request_dynamic_redirect",
    "http_request_firewall_custom",
    "http_request_firewall_managed",
    "http_request_late_transform",
    "http_request_origin",
    "http_request_redirect",
    "http_request_sanitize",
    "http_request_sbfm",
    "http_request_transform",
    "http_response_compression",
    "http_response_firewall_managed",
    "http_response_headers_transform",
    "magic_transit",
    "magic_transit_ids_managed",
    "magic_transit_managed",
    "magic_transit_ratelimit",
  ]),
  rules: Schema.Array(
    Schema.Union([
      BlockRule,
      RulesetsChallengeRule,
      CompressResponseRule,
      DdoSDynamicRule,
      ExecuteRule,
      ForceConnectionCloseRule,
      RulesetsJSChallengeRule,
      LogRule,
      LogCustomFieldRule,
      ManagedChallengeRule,
      RedirectRule,
      RewriteRule,
      RouteRule,
      ScoreRule,
      ServeErrorRule,
      SetCacheSettingsRule,
      SetConfigRule,
      SkipRule,
    ]),
  ),
  version: Schema.String,
  description: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
})
  .pipe(
    Schema.encodeKeys({
      id: "id",
      kind: "kind",
      lastUpdated: "last_updated",
      name: "name",
      phase: "phase",
      rules: "rules",
      version: "version",
      description: "description",
    }),
  )
  .pipe(
    T.ResponsePath("result"),
  ) as unknown as Schema.Schema<CreateRulesetResponse>;

export type CreateRulesetError = DefaultErrors;

export const createRuleset: API.OperationMethod<
  CreateRulesetRequest,
  CreateRulesetResponse,
  CreateRulesetError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: CreateRulesetRequest,
  output: CreateRulesetResponse,
  errors: [],
}));

export interface UpdateRulesetRequest {
  rulesetId: string;
  /** Path param: The Account ID to use for this endpoint. Mutually exclusive with the Zone ID. */
  accountId?: string;
  /** Path param: The Zone ID to use for this endpoint. Mutually exclusive with the Account ID. */
  zoneId?: string;
  /** Body param: An informative description of the ruleset. */
  description?: string;
  /** Body param: The kind of the ruleset. */
  kind?: "managed" | "custom" | "root" | "zone";
  /** Body param: The human-readable name of the ruleset. */
  name?: string;
  /** Body param: The phase of the ruleset. */
  phase?:
    | "ddos_l4"
    | "ddos_l7"
    | "http_config_settings"
    | "http_custom_errors"
    | "http_log_custom_fields"
    | "http_ratelimit"
    | "http_request_cache_settings"
    | "http_request_dynamic_redirect"
    | "http_request_firewall_custom"
    | "http_request_firewall_managed"
    | "http_request_late_transform"
    | "http_request_origin"
    | "http_request_redirect"
    | "http_request_sanitize"
    | "http_request_sbfm"
    | "http_request_transform"
    | "http_response_compression"
    | "http_response_firewall_managed"
    | "http_response_headers_transform"
    | "magic_transit"
    | "magic_transit_ids_managed"
    | "magic_transit_managed"
    | "magic_transit_ratelimit";
  /** Body param: The list of rules in the ruleset. */
  rules?: (
    | BlockRuleParam
    | {
        id?: string;
        action?: "challenge";
        actionParameters?: unknown;
        description?: string;
        enabled?: boolean;
        exposedCredentialCheck?: ExposedCredentialCheck;
        expression?: string;
        logging?: Logging;
        ratelimit?: Ratelimit;
        ref?: string;
      }
    | CompressResponseRuleParam
    | DdoSDynamicRuleParam
    | ExecuteRuleParam
    | ForceConnectionCloseRuleParam
    | {
        id?: string;
        action?: "js_challenge";
        actionParameters?: unknown;
        description?: string;
        enabled?: boolean;
        exposedCredentialCheck?: ExposedCredentialCheck;
        expression?: string;
        logging?: Logging;
        ratelimit?: Ratelimit;
        ref?: string;
      }
    | LogRuleParam
    | LogCustomFieldRuleParam
    | ManagedChallengeRuleParam
    | RedirectRuleParam
    | RewriteRuleParam
    | RouteRuleParam
    | ScoreRuleParam
    | ServeErrorRuleParam
    | SetCacheSettingsRuleParam
    | SetConfigRuleParam
    | SkipRuleParam
  )[];
}

export const UpdateRulesetRequest = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  rulesetId: Schema.String.pipe(T.HttpPath("rulesetId")),
  accountId: Schema.String.pipe(T.HttpPath("account_id")),
  zoneId: Schema.String.pipe(T.HttpPath("zone_id")),
  description: Schema.optional(Schema.String),
  kind: Schema.optional(Schema.Literals(["managed", "custom", "root", "zone"])),
  name: Schema.optional(Schema.String),
  phase: Schema.optional(
    Schema.Literals([
      "ddos_l4",
      "ddos_l7",
      "http_config_settings",
      "http_custom_errors",
      "http_log_custom_fields",
      "http_ratelimit",
      "http_request_cache_settings",
      "http_request_dynamic_redirect",
      "http_request_firewall_custom",
      "http_request_firewall_managed",
      "http_request_late_transform",
      "http_request_origin",
      "http_request_redirect",
      "http_request_sanitize",
      "http_request_sbfm",
      "http_request_transform",
      "http_response_compression",
      "http_response_firewall_managed",
      "http_response_headers_transform",
      "magic_transit",
      "magic_transit_ids_managed",
      "magic_transit_managed",
      "magic_transit_ratelimit",
    ]),
  ),
  rules: Schema.optional(
    Schema.Array(
      Schema.Union([
        BlockRuleParam,
        Schema.Struct({
          id: Schema.optional(Schema.String),
          action: Schema.optional(Schema.Literal("challenge")),
          actionParameters: Schema.optional(Schema.Unknown),
          description: Schema.optional(Schema.String),
          enabled: Schema.optional(Schema.Boolean),
          exposedCredentialCheck: Schema.optional(ExposedCredentialCheck),
          expression: Schema.optional(Schema.String),
          logging: Schema.optional(Logging),
          ratelimit: Schema.optional(Ratelimit),
          ref: Schema.optional(Schema.String),
        }).pipe(
          Schema.encodeKeys({
            id: "id",
            action: "action",
            actionParameters: "action_parameters",
            description: "description",
            enabled: "enabled",
            exposedCredentialCheck: "exposed_credential_check",
            expression: "expression",
            logging: "logging",
            ratelimit: "ratelimit",
            ref: "ref",
          }),
        ),
        CompressResponseRuleParam,
        DdoSDynamicRuleParam,
        ExecuteRuleParam,
        ForceConnectionCloseRuleParam,
        Schema.Struct({
          id: Schema.optional(Schema.String),
          action: Schema.optional(Schema.Literal("js_challenge")),
          actionParameters: Schema.optional(Schema.Unknown),
          description: Schema.optional(Schema.String),
          enabled: Schema.optional(Schema.Boolean),
          exposedCredentialCheck: Schema.optional(ExposedCredentialCheck),
          expression: Schema.optional(Schema.String),
          logging: Schema.optional(Logging),
          ratelimit: Schema.optional(Ratelimit),
          ref: Schema.optional(Schema.String),
        }).pipe(
          Schema.encodeKeys({
            id: "id",
            action: "action",
            actionParameters: "action_parameters",
            description: "description",
            enabled: "enabled",
            exposedCredentialCheck: "exposed_credential_check",
            expression: "expression",
            logging: "logging",
            ratelimit: "ratelimit",
            ref: "ref",
          }),
        ),
        LogRuleParam,
        LogCustomFieldRuleParam,
        ManagedChallengeRuleParam,
        RedirectRuleParam,
        RewriteRuleParam,
        RouteRuleParam,
        ScoreRuleParam,
        ServeErrorRuleParam,
        SetCacheSettingsRuleParam,
        SetConfigRuleParam,
        SkipRuleParam,
      ]),
    ),
  ),
}).pipe(
  T.Http({
    method: "PUT",
    path: "/{accountOrZone}/{accountOrZoneId}/rulesets/{rulesetId}",
  }),
) as unknown as Schema.Schema<UpdateRulesetRequest>;

export interface UpdateRulesetResponse {
  /** The unique ID of the ruleset. */
  id: string;
  /** The kind of the ruleset. */
  kind: "managed" | "custom" | "root" | "zone";
  /** The timestamp of when the ruleset was last modified. */
  lastUpdated: string;
  /** The human-readable name of the ruleset. */
  name: string;
  /** The phase of the ruleset. */
  phase:
    | "ddos_l4"
    | "ddos_l7"
    | "http_config_settings"
    | "http_custom_errors"
    | "http_log_custom_fields"
    | "http_ratelimit"
    | "http_request_cache_settings"
    | "http_request_dynamic_redirect"
    | "http_request_firewall_custom"
    | "http_request_firewall_managed"
    | "http_request_late_transform"
    | "http_request_origin"
    | "http_request_redirect"
    | "http_request_sanitize"
    | "http_request_sbfm"
    | "http_request_transform"
    | "http_response_compression"
    | "http_response_firewall_managed"
    | "http_response_headers_transform"
    | "magic_transit"
    | "magic_transit_ids_managed"
    | "magic_transit_managed"
    | "magic_transit_ratelimit";
  /** The list of rules in the ruleset. */
  rules: (
    | BlockRule
    | RulesetsChallengeRule
    | CompressResponseRule
    | DdoSDynamicRule
    | ExecuteRule
    | ForceConnectionCloseRule
    | RulesetsJSChallengeRule
    | LogRule
    | LogCustomFieldRule
    | ManagedChallengeRule
    | RedirectRule
    | RewriteRule
    | RouteRule
    | ScoreRule
    | ServeErrorRule
    | SetCacheSettingsRule
    | SetConfigRule
    | SkipRule
  )[];
  /** The version of the ruleset. */
  version: string;
  /** An informative description of the ruleset. */
  description?: string | null;
}

export const UpdateRulesetResponse = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  id: Schema.String,
  kind: Schema.Literals(["managed", "custom", "root", "zone"]),
  lastUpdated: Schema.String,
  name: Schema.String,
  phase: Schema.Literals([
    "ddos_l4",
    "ddos_l7",
    "http_config_settings",
    "http_custom_errors",
    "http_log_custom_fields",
    "http_ratelimit",
    "http_request_cache_settings",
    "http_request_dynamic_redirect",
    "http_request_firewall_custom",
    "http_request_firewall_managed",
    "http_request_late_transform",
    "http_request_origin",
    "http_request_redirect",
    "http_request_sanitize",
    "http_request_sbfm",
    "http_request_transform",
    "http_response_compression",
    "http_response_firewall_managed",
    "http_response_headers_transform",
    "magic_transit",
    "magic_transit_ids_managed",
    "magic_transit_managed",
    "magic_transit_ratelimit",
  ]),
  rules: Schema.Array(
    Schema.Union([
      BlockRule,
      RulesetsChallengeRule,
      CompressResponseRule,
      DdoSDynamicRule,
      ExecuteRule,
      ForceConnectionCloseRule,
      RulesetsJSChallengeRule,
      LogRule,
      LogCustomFieldRule,
      ManagedChallengeRule,
      RedirectRule,
      RewriteRule,
      RouteRule,
      ScoreRule,
      ServeErrorRule,
      SetCacheSettingsRule,
      SetConfigRule,
      SkipRule,
    ]),
  ),
  version: Schema.String,
  description: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
})
  .pipe(
    Schema.encodeKeys({
      id: "id",
      kind: "kind",
      lastUpdated: "last_updated",
      name: "name",
      phase: "phase",
      rules: "rules",
      version: "version",
      description: "description",
    }),
  )
  .pipe(
    T.ResponsePath("result"),
  ) as unknown as Schema.Schema<UpdateRulesetResponse>;

export type UpdateRulesetError = DefaultErrors;

export const updateRuleset: API.OperationMethod<
  UpdateRulesetRequest,
  UpdateRulesetResponse,
  UpdateRulesetError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: UpdateRulesetRequest,
  output: UpdateRulesetResponse,
  errors: [],
}));

export interface DeleteRulesetRequest {
  rulesetId: string;
}

export const DeleteRulesetRequest = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  rulesetId: Schema.String.pipe(T.HttpPath("rulesetId")),
}).pipe(
  T.Http({
    method: "DELETE",
    path: "/{accountOrZone}/{accountOrZoneId}/rulesets/{rulesetId}",
  }),
) as unknown as Schema.Schema<DeleteRulesetRequest>;

export type DeleteRulesetResponse = unknown;

export const DeleteRulesetResponse =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Unknown as unknown as Schema.Schema<DeleteRulesetResponse>;

export type DeleteRulesetError = DefaultErrors;

export const deleteRuleset: API.OperationMethod<
  DeleteRulesetRequest,
  DeleteRulesetResponse,
  DeleteRulesetError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: DeleteRulesetRequest,
  output: DeleteRulesetResponse,
  errors: [],
}));

// =============================================================================
// Version
// =============================================================================

export interface GetVersionRequest {
  rulesetId: string;
  rulesetVersion: string;
}

export const GetVersionRequest = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  rulesetId: Schema.String.pipe(T.HttpPath("rulesetId")),
  rulesetVersion: Schema.String.pipe(T.HttpPath("rulesetVersion")),
}).pipe(
  T.Http({
    method: "GET",
    path: "/{accountOrZone}/{accountOrZoneId}/rulesets/{rulesetId}/versions/{rulesetVersion}",
  }),
) as unknown as Schema.Schema<GetVersionRequest>;

export interface GetVersionResponse {
  /** The unique ID of the ruleset. */
  id: string;
  /** The kind of the ruleset. */
  kind: "managed" | "custom" | "root" | "zone";
  /** The timestamp of when the ruleset was last modified. */
  lastUpdated: string;
  /** The human-readable name of the ruleset. */
  name: string;
  /** The phase of the ruleset. */
  phase:
    | "ddos_l4"
    | "ddos_l7"
    | "http_config_settings"
    | "http_custom_errors"
    | "http_log_custom_fields"
    | "http_ratelimit"
    | "http_request_cache_settings"
    | "http_request_dynamic_redirect"
    | "http_request_firewall_custom"
    | "http_request_firewall_managed"
    | "http_request_late_transform"
    | "http_request_origin"
    | "http_request_redirect"
    | "http_request_sanitize"
    | "http_request_sbfm"
    | "http_request_transform"
    | "http_response_compression"
    | "http_response_firewall_managed"
    | "http_response_headers_transform"
    | "magic_transit"
    | "magic_transit_ids_managed"
    | "magic_transit_managed"
    | "magic_transit_ratelimit";
  /** The list of rules in the ruleset. */
  rules: (
    | BlockRule
    | RulesetsChallengeRule
    | CompressResponseRule
    | DdoSDynamicRule
    | ExecuteRule
    | ForceConnectionCloseRule
    | RulesetsJSChallengeRule
    | LogRule
    | LogCustomFieldRule
    | ManagedChallengeRule
    | RedirectRule
    | RewriteRule
    | RouteRule
    | ScoreRule
    | ServeErrorRule
    | SetCacheSettingsRule
    | SetConfigRule
    | SkipRule
  )[];
  /** The version of the ruleset. */
  version: string;
  /** An informative description of the ruleset. */
  description?: string | null;
}

export const GetVersionResponse = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  id: Schema.String,
  kind: Schema.Literals(["managed", "custom", "root", "zone"]),
  lastUpdated: Schema.String,
  name: Schema.String,
  phase: Schema.Literals([
    "ddos_l4",
    "ddos_l7",
    "http_config_settings",
    "http_custom_errors",
    "http_log_custom_fields",
    "http_ratelimit",
    "http_request_cache_settings",
    "http_request_dynamic_redirect",
    "http_request_firewall_custom",
    "http_request_firewall_managed",
    "http_request_late_transform",
    "http_request_origin",
    "http_request_redirect",
    "http_request_sanitize",
    "http_request_sbfm",
    "http_request_transform",
    "http_response_compression",
    "http_response_firewall_managed",
    "http_response_headers_transform",
    "magic_transit",
    "magic_transit_ids_managed",
    "magic_transit_managed",
    "magic_transit_ratelimit",
  ]),
  rules: Schema.Array(
    Schema.Union([
      BlockRule,
      RulesetsChallengeRule,
      CompressResponseRule,
      DdoSDynamicRule,
      ExecuteRule,
      ForceConnectionCloseRule,
      RulesetsJSChallengeRule,
      LogRule,
      LogCustomFieldRule,
      ManagedChallengeRule,
      RedirectRule,
      RewriteRule,
      RouteRule,
      ScoreRule,
      ServeErrorRule,
      SetCacheSettingsRule,
      SetConfigRule,
      SkipRule,
    ]),
  ),
  version: Schema.String,
  description: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
})
  .pipe(
    Schema.encodeKeys({
      id: "id",
      kind: "kind",
      lastUpdated: "last_updated",
      name: "name",
      phase: "phase",
      rules: "rules",
      version: "version",
      description: "description",
    }),
  )
  .pipe(
    T.ResponsePath("result"),
  ) as unknown as Schema.Schema<GetVersionResponse>;

export type GetVersionError = DefaultErrors;

export const getVersion: API.OperationMethod<
  GetVersionRequest,
  GetVersionResponse,
  GetVersionError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetVersionRequest,
  output: GetVersionResponse,
  errors: [],
}));

export interface ListVersionsRequest {
  rulesetId: string;
}

export const ListVersionsRequest = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  rulesetId: Schema.String.pipe(T.HttpPath("rulesetId")),
}).pipe(
  T.Http({
    method: "GET",
    path: "/{accountOrZone}/{accountOrZoneId}/rulesets/{rulesetId}/versions",
  }),
) as unknown as Schema.Schema<ListVersionsRequest>;

export interface ListVersionsResponse {
  result: {
    id: string;
    kind: "managed" | "custom" | "root" | "zone";
    lastUpdated: string;
    name: string;
    phase:
      | "ddos_l4"
      | "ddos_l7"
      | "http_config_settings"
      | "http_custom_errors"
      | "http_log_custom_fields"
      | "http_ratelimit"
      | "http_request_cache_settings"
      | "http_request_dynamic_redirect"
      | "http_request_firewall_custom"
      | "http_request_firewall_managed"
      | "http_request_late_transform"
      | "http_request_origin"
      | "http_request_redirect"
      | "http_request_sanitize"
      | "http_request_sbfm"
      | "http_request_transform"
      | "http_response_compression"
      | "http_response_firewall_managed"
      | "http_response_headers_transform"
      | "magic_transit"
      | "magic_transit_ids_managed"
      | "magic_transit_managed"
      | "magic_transit_ratelimit";
    version: string;
    description?: string | null;
  }[];
}

export const ListVersionsResponse = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  result: Schema.Array(
    Schema.Struct({
      id: Schema.String,
      kind: Schema.Literals(["managed", "custom", "root", "zone"]),
      lastUpdated: Schema.String,
      name: Schema.String,
      phase: Schema.Literals([
        "ddos_l4",
        "ddos_l7",
        "http_config_settings",
        "http_custom_errors",
        "http_log_custom_fields",
        "http_ratelimit",
        "http_request_cache_settings",
        "http_request_dynamic_redirect",
        "http_request_firewall_custom",
        "http_request_firewall_managed",
        "http_request_late_transform",
        "http_request_origin",
        "http_request_redirect",
        "http_request_sanitize",
        "http_request_sbfm",
        "http_request_transform",
        "http_response_compression",
        "http_response_firewall_managed",
        "http_response_headers_transform",
        "magic_transit",
        "magic_transit_ids_managed",
        "magic_transit_managed",
        "magic_transit_ratelimit",
      ]),
      version: Schema.String,
      description: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
    }).pipe(
      Schema.encodeKeys({
        id: "id",
        kind: "kind",
        lastUpdated: "last_updated",
        name: "name",
        phase: "phase",
        version: "version",
        description: "description",
      }),
    ),
  ),
}) as unknown as Schema.Schema<ListVersionsResponse>;

export type ListVersionsError = DefaultErrors;

export const listVersions: API.PaginatedOperationMethod<
  ListVersionsRequest,
  ListVersionsResponse,
  ListVersionsError,
  Credentials | HttpClient.HttpClient
> & {
  pages: (
    input: ListVersionsRequest,
  ) => stream.Stream<
    ListVersionsResponse,
    ListVersionsError,
    Credentials | HttpClient.HttpClient
  >;
  items: (input: ListVersionsRequest) => stream.Stream<
    {
      id: string;
      kind: "managed" | "custom" | "root" | "zone";
      lastUpdated: string;
      name: string;
      phase:
        | "ddos_l4"
        | "ddos_l7"
        | "http_config_settings"
        | "http_custom_errors"
        | "http_log_custom_fields"
        | "http_ratelimit"
        | "http_request_cache_settings"
        | "http_request_dynamic_redirect"
        | "http_request_firewall_custom"
        | "http_request_firewall_managed"
        | "http_request_late_transform"
        | "http_request_origin"
        | "http_request_redirect"
        | "http_request_sanitize"
        | "http_request_sbfm"
        | "http_request_transform"
        | "http_response_compression"
        | "http_response_firewall_managed"
        | "http_response_headers_transform"
        | "magic_transit"
        | "magic_transit_ids_managed"
        | "magic_transit_managed"
        | "magic_transit_ratelimit";
      version: string;
      description?: string | null;
    },
    ListVersionsError,
    Credentials | HttpClient.HttpClient
  >;
} = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
  input: ListVersionsRequest,
  output: ListVersionsResponse,
  errors: [],
  pagination: {
    mode: "single",
    items: "result",
  } as const,
}));

export interface DeleteVersionRequest {
  rulesetId: string;
  rulesetVersion: string;
}

export const DeleteVersionRequest = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  rulesetId: Schema.String.pipe(T.HttpPath("rulesetId")),
  rulesetVersion: Schema.String.pipe(T.HttpPath("rulesetVersion")),
}).pipe(
  T.Http({
    method: "DELETE",
    path: "/{accountOrZone}/{accountOrZoneId}/rulesets/{rulesetId}/versions/{rulesetVersion}",
  }),
) as unknown as Schema.Schema<DeleteVersionRequest>;

export type DeleteVersionResponse = unknown;

export const DeleteVersionResponse =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Unknown as unknown as Schema.Schema<DeleteVersionResponse>;

export type DeleteVersionError = DefaultErrors;

export const deleteVersion: API.OperationMethod<
  DeleteVersionRequest,
  DeleteVersionResponse,
  DeleteVersionError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: DeleteVersionRequest,
  output: DeleteVersionResponse,
  errors: [],
}));
