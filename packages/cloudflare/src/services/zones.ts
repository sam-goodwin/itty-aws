/**
 * Cloudflare ZONES API
 *
 * Generated from Cloudflare TypeScript SDK.
 * DO NOT EDIT - regenerate with: bun scripts/generate.ts --service zones
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

export class CustomNameserverSetNotFound extends T.applyErrorMatchers(
  Schema.TaggedErrorClass<CustomNameserverSetNotFound>()(
    "CustomNameserverSetNotFound",
    { code: Schema.Number, message: Schema.String },
  ),
  [
    {
      code: 1001,
      message: { includes: "Custom Nameserver set doesn't exist" },
    },
  ],
) {}

export class DomainNotRegistered extends T.applyErrorMatchers(
  Schema.TaggedErrorClass<DomainNotRegistered>()("DomainNotRegistered", {
    code: Schema.Number,
    message: Schema.String,
  }),
  [{ code: 1099 }],
) {}

export class Forbidden extends T.applyErrorMatchers(
  Schema.TaggedErrorClass<Forbidden>()("Forbidden", {
    code: Schema.Number,
    message: Schema.String,
  }),
  [{ status: 403 }],
) {}

export class InvalidDomain extends T.applyErrorMatchers(
  Schema.TaggedErrorClass<InvalidDomain>()("InvalidDomain", {
    code: Schema.Number,
    message: Schema.String,
  }),
  [{ code: 1002 }],
) {}

export class InvalidZoneIdentifier extends T.applyErrorMatchers(
  Schema.TaggedErrorClass<InvalidZoneIdentifier>()("InvalidZoneIdentifier", {
    code: Schema.Number,
    message: Schema.String,
  }),
  [{ code: 9109, message: { includes: "Invalid zone identifier" } }],
) {}

export class SubdomainNotAllowed extends T.applyErrorMatchers(
  Schema.TaggedErrorClass<SubdomainNotAllowed>()("SubdomainNotAllowed", {
    code: Schema.Number,
    message: Schema.String,
  }),
  [{ code: 1116 }],
) {}

export class ZoneAlreadyExists extends T.applyErrorMatchers(
  Schema.TaggedErrorClass<ZoneAlreadyExists>()("ZoneAlreadyExists", {
    code: Schema.Number,
    message: Schema.String,
  }),
  [{ code: 1061 }],
) {}

export class ZoneCreationBlocked extends T.applyErrorMatchers(
  Schema.TaggedErrorClass<ZoneCreationBlocked>()("ZoneCreationBlocked", {
    code: Schema.Number,
    message: Schema.String,
  }),
  [{ code: 1052 }],
) {}

export class ZoneHoldNotFound extends T.applyErrorMatchers(
  Schema.TaggedErrorClass<ZoneHoldNotFound>()("ZoneHoldNotFound", {
    code: Schema.Number,
    message: Schema.String,
  }),
  [{ code: 1003, message: { includes: "No Zone Hold Found" } }],
) {}

export class ZoneHoldsRequireEnterprise extends T.applyErrorMatchers(
  Schema.TaggedErrorClass<ZoneHoldsRequireEnterprise>()(
    "ZoneHoldsRequireEnterprise",
    { code: Schema.Number, message: Schema.String },
  ),
  [
    {
      code: 1005,
      message: {
        includes: "Zone holds are only available on Enterprise zones",
      },
    },
  ],
) {}

// =============================================================================
// Shared nested schemas (hoisted, module-private)
// =============================================================================

interface Source {
  pointer?: string | null;
}
const Source = /*@__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    pointer: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
  }),
) as unknown as Schema.Codec<Source>;

interface Error2 {
  code: number;
  message: string;
  documentationUrl?: string | null;
  source?: { pointer?: string | null } | null;
}
const Error2 = /*@__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    code: Schema.Number,
    message: Schema.String,
    documentationUrl: Schema.optional(
      Schema.Union([Schema.String, Schema.Null]),
    ),
    source: Schema.optional(Schema.Union([Source, Schema.Null])),
  }).pipe(
    Schema.encodeKeys({
      code: "code",
      message: "message",
      documentationUrl: "documentation_url",
      source: "source",
    }),
  ),
) as unknown as Schema.Codec<Error2>;

interface ResultInfo {
  /** Total number of results for the requested service. */
  count?: number | null;
  /** Current page within paginated list of results. */
  page?: number | null;
  /** Number of results per page of results. */
  perPage?: number | null;
  /** Total results available without any search parameters. */
  totalCount?: number | null;
  /** The number of total pages in the entire result set. */
  totalPages?: number | null;
}
const ResultInfo = /*@__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    count: Schema.optional(Schema.Union([Schema.Number, Schema.Null])),
    page: Schema.optional(Schema.Union([Schema.Number, Schema.Null])),
    perPage: Schema.optional(Schema.Union([Schema.Number, Schema.Null])),
    totalCount: Schema.optional(Schema.Union([Schema.Number, Schema.Null])),
    totalPages: Schema.optional(Schema.Union([Schema.Number, Schema.Null])),
  }).pipe(
    Schema.encodeKeys({
      count: "count",
      page: "page",
      perPage: "per_page",
      totalCount: "total_count",
      totalPages: "total_pages",
    }),
  ),
) as unknown as Schema.Codec<ResultInfo>;

interface ListCursor {
  after?: string | null;
  before?: string | null;
}
const ListCursor = /*@__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    after: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
    before: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
  }),
) as unknown as Schema.Codec<ListCursor>;

interface Environment {
  expression: string;
  lockedOnDeployment: boolean | null;
  name: string;
  position: { after?: string | null; before?: string | null };
  ref: string;
  version: number | null;
  httpApplicationId?: string | null;
}
const Environment = /*@__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    expression: Schema.String,
    lockedOnDeployment: Schema.Union([Schema.Boolean, Schema.Null]),
    name: Schema.String,
    position: ListCursor,
    ref: Schema.String,
    version: Schema.Union([Schema.Number, Schema.Null]),
    httpApplicationId: Schema.optional(
      Schema.Union([Schema.String, Schema.Null]),
    ),
  }).pipe(
    Schema.encodeKeys({
      expression: "expression",
      lockedOnDeployment: "locked_on_deployment",
      name: "name",
      position: "position",
      ref: "ref",
      version: "version",
      httpApplicationId: "http_application_id",
    }),
  ),
) as unknown as Schema.Codec<Environment>;

interface ListPlansResponseResult {
  /** Identifier */
  id?: string | null;
  /** Indicates whether you can subscribe to this plan. */
  canSubscribe?: boolean | null;
  /** The monetary unit in which pricing information is displayed. */
  currency?: string | null;
  /** Indicates whether this plan is managed externally. */
  externallyManaged?: boolean | null;
  /** The frequency at which you will be billed for this plan. */
  frequency?:
    | "weekly"
    | "monthly"
    | "quarterly"
    | "yearly"
    | (string & {})
    | null;
  /** Indicates whether you are currently subscribed to this plan. */
  isSubscribed?: boolean | null;
  /** Indicates whether this plan has a legacy discount applied. */
  legacyDiscount?: boolean | null;
  /** The legacy identifier for this rate plan, if any. */
  legacyId?: string | null;
  /** The plan name. */
  name?: string | null;
  /** The amount you will be billed for this plan. */
  price?: number | null;
}
const ListPlansResponseResult = /*@__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    id: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
    canSubscribe: Schema.optional(Schema.Union([Schema.Boolean, Schema.Null])),
    currency: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
    externallyManaged: Schema.optional(
      Schema.Union([Schema.Boolean, Schema.Null]),
    ),
    frequency: Schema.optional(
      Schema.Union([
        Schema.Union([
          Schema.Literals(["weekly", "monthly", "quarterly", "yearly"]),
          Schema.String,
        ]),
        Schema.Null,
      ]),
    ),
    isSubscribed: Schema.optional(Schema.Union([Schema.Boolean, Schema.Null])),
    legacyDiscount: Schema.optional(
      Schema.Union([Schema.Boolean, Schema.Null]),
    ),
    legacyId: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
    name: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
    price: Schema.optional(Schema.Union([Schema.Number, Schema.Null])),
  }).pipe(
    Schema.encodeKeys({
      id: "id",
      canSubscribe: "can_subscribe",
      currency: "currency",
      externallyManaged: "externally_managed",
      frequency: "frequency",
      isSubscribed: "is_subscribed",
      legacyDiscount: "legacy_discount",
      legacyId: "legacy_id",
      name: "name",
      price: "price",
    }),
  ),
) as unknown as Schema.Codec<ListPlansResponseResult>;

interface Component {
  /** The default amount allocated. */
  default?: number | null;
  /** The unique component. */
  name?:
    | "zones"
    | "page_rules"
    | "dedicated_certificates"
    | "dedicated_certificates_custom"
    | (string & {})
    | null;
  /** The unit price of the addon. */
  unitPrice?: number | null;
}
const Component = /*@__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    default: Schema.optional(Schema.Union([Schema.Number, Schema.Null])),
    name: Schema.optional(
      Schema.Union([
        Schema.Union([
          Schema.Literals([
            "zones",
            "page_rules",
            "dedicated_certificates",
            "dedicated_certificates_custom",
          ]),
          Schema.String,
        ]),
        Schema.Null,
      ]),
    ),
    unitPrice: Schema.optional(Schema.Union([Schema.Number, Schema.Null])),
  }).pipe(
    Schema.encodeKeys({
      default: "default",
      name: "name",
      unitPrice: "unit_price",
    }),
  ),
) as unknown as Schema.Codec<Component>;

interface GetRatePlanResponseResult {
  /** Plan identifier tag. */
  id?: string | null;
  /** Array of available components values for the plan. */
  components?:
    | {
        default?: number | null;
        name?:
          | "zones"
          | "page_rules"
          | "dedicated_certificates"
          | "dedicated_certificates_custom"
          | (string & {})
          | null;
        unitPrice?: number | null;
      }[]
    | null;
  /** The monetary unit in which pricing information is displayed. */
  currency?: string | null;
  /** The duration of the plan subscription. */
  duration?: number | null;
  /** The frequency at which you will be billed for this plan. */
  frequency?:
    | "weekly"
    | "monthly"
    | "quarterly"
    | "yearly"
    | (string & {})
    | null;
  /** The plan name. */
  name?: string | null;
}
const GetRatePlanResponseResult = /*@__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    id: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
    components: Schema.optional(
      Schema.Union([Schema.Array(Component), Schema.Null]),
    ),
    currency: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
    duration: Schema.optional(Schema.Union([Schema.Number, Schema.Null])),
    frequency: Schema.optional(
      Schema.Union([
        Schema.Union([
          Schema.Literals(["weekly", "monthly", "quarterly", "yearly"]),
          Schema.String,
        ]),
        Schema.Null,
      ]),
    ),
    name: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
  }),
) as unknown as Schema.Codec<GetRatePlanResponseResult>;

interface ZeroRTT {
  /** ID of the zone setting. */
  id: "0rtt";
  /** Current value of the zone setting. */
  value: "on" | "off" | (string & {});
  /** Whether or not this setting can be modified for this zone (based on your Cloudflare plan level). */
  editable?: boolean | null;
  /** last time this setting was modified. */
  modifiedOn?: string | null;
}
const ZeroRTT = /*@__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    id: Schema.Literal("0rtt"),
    value: Schema.Union([Schema.Literals(["on", "off"]), Schema.String]),
    editable: Schema.optional(Schema.Union([Schema.Boolean, Schema.Null])),
    modifiedOn: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
  }).pipe(
    Schema.encodeKeys({
      id: "id",
      value: "value",
      editable: "editable",
      modifiedOn: "modified_on",
    }),
  ),
) as unknown as Schema.Codec<ZeroRTT>;

interface AdvancedDDoS {
  /** ID of the zone setting. */
  id: "advanced_ddos";
  /** Current value of the zone setting. */
  value: "on" | "off" | (string & {});
  /** Whether or not this setting can be modified for this zone (based on your Cloudflare plan level). */
  editable?: boolean | null;
  /** last time this setting was modified. */
  modifiedOn?: string | null;
}
const AdvancedDDoS = /*@__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    id: Schema.Literal("advanced_ddos"),
    value: Schema.Union([Schema.Literals(["on", "off"]), Schema.String]),
    editable: Schema.optional(Schema.Union([Schema.Boolean, Schema.Null])),
    modifiedOn: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
  }).pipe(
    Schema.encodeKeys({
      id: "id",
      value: "value",
      editable: "editable",
      modifiedOn: "modified_on",
    }),
  ),
) as unknown as Schema.Codec<AdvancedDDoS>;

interface Value {
  /** Whether the feature is enabled or not. */
  enabled?: boolean | null;
  /** Egress pool id which refers to a grouping of dedicated egress IPs through which Cloudflare will connect to origin. */
  poolId?: string | null;
}
const Value = /*@__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    enabled: Schema.optional(Schema.Union([Schema.Boolean, Schema.Null])),
    poolId: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
  }).pipe(Schema.encodeKeys({ enabled: "enabled", poolId: "pool_id" })),
) as unknown as Schema.Codec<Value>;

interface ZonesCacheRulesAegis {
  /** ID of the zone setting. */
  id: "aegis";
  /** Last time this setting was modified. */
  modifiedOn?: string | null;
  /** Value of the zone setting. */
  value?: { enabled?: boolean | null; poolId?: string | null } | null;
}
const ZonesCacheRulesAegis = /*@__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    id: Schema.Literal("aegis"),
    modifiedOn: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
    value: Schema.optional(Schema.Union([Value, Schema.Null])),
  }).pipe(
    Schema.encodeKeys({ id: "id", modifiedOn: "modified_on", value: "value" }),
  ),
) as unknown as Schema.Codec<ZonesCacheRulesAegis>;

interface AlwaysOnline {
  /** ID of the zone setting. */
  id: "always_online";
  /** Current value of the zone setting. */
  value: "on" | "off" | (string & {});
  /** Whether or not this setting can be modified for this zone (based on your Cloudflare plan level). */
  editable?: boolean | null;
  /** last time this setting was modified. */
  modifiedOn?: string | null;
}
const AlwaysOnline = /*@__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    id: Schema.Literal("always_online"),
    value: Schema.Union([Schema.Literals(["on", "off"]), Schema.String]),
    editable: Schema.optional(Schema.Union([Schema.Boolean, Schema.Null])),
    modifiedOn: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
  }).pipe(
    Schema.encodeKeys({
      id: "id",
      value: "value",
      editable: "editable",
      modifiedOn: "modified_on",
    }),
  ),
) as unknown as Schema.Codec<AlwaysOnline>;

interface ZonesSchemasAlwaysUseHTTPS {
  /** ID of the zone setting. */
  id: "always_use_https";
  /** Current value of the zone setting. */
  value: "on" | "off" | (string & {});
  /** Whether or not this setting can be modified for this zone (based on your Cloudflare plan level). */
  editable?: boolean | null;
  /** last time this setting was modified. */
  modifiedOn?: string | null;
}
const ZonesSchemasAlwaysUseHTTPS = /*@__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    id: Schema.Literal("always_use_https"),
    value: Schema.Union([Schema.Literals(["on", "off"]), Schema.String]),
    editable: Schema.optional(Schema.Union([Schema.Boolean, Schema.Null])),
    modifiedOn: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
  }).pipe(
    Schema.encodeKeys({
      id: "id",
      value: "value",
      editable: "editable",
      modifiedOn: "modified_on",
    }),
  ),
) as unknown as Schema.Codec<ZonesSchemasAlwaysUseHTTPS>;

interface ZonesSchemasAutomaticHTTPSRewrites {
  /** ID of the zone setting. */
  id: "automatic_https_rewrites";
  /** Current value of the zone setting. */
  value: "on" | "off" | (string & {});
  /** Whether or not this setting can be modified for this zone (based on your Cloudflare plan level). */
  editable?: boolean | null;
  /** last time this setting was modified. */
  modifiedOn?: string | null;
}
const ZonesSchemasAutomaticHTTPSRewrites =
  /*@__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      id: Schema.Literal("automatic_https_rewrites"),
      value: Schema.Union([Schema.Literals(["on", "off"]), Schema.String]),
      editable: Schema.optional(Schema.Union([Schema.Boolean, Schema.Null])),
      modifiedOn: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
    }).pipe(
      Schema.encodeKeys({
        id: "id",
        value: "value",
        editable: "editable",
        modifiedOn: "modified_on",
      }),
    ),
  ) as unknown as Schema.Codec<ZonesSchemasAutomaticHTTPSRewrites>;

interface Brotli {
  /** ID of the zone setting. */
  id: "brotli";
  /** Current value of the zone setting. */
  value: "off" | "on" | (string & {});
  /** Whether or not this setting can be modified for this zone (based on your Cloudflare plan level). */
  editable?: boolean | null;
  /** last time this setting was modified. */
  modifiedOn?: string | null;
}
const Brotli = /*@__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    id: Schema.Literal("brotli"),
    value: Schema.Union([Schema.Literals(["off", "on"]), Schema.String]),
    editable: Schema.optional(Schema.Union([Schema.Boolean, Schema.Null])),
    modifiedOn: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
  }).pipe(
    Schema.encodeKeys({
      id: "id",
      value: "value",
      editable: "editable",
      modifiedOn: "modified_on",
    }),
  ),
) as unknown as Schema.Codec<Brotli>;

interface ZonesSchemasBrowserCacheTTL {
  /** ID of the zone setting. */
  id: "browser_cache_ttl";
  /** Current value of the zone setting. */
  value: number;
  /** Whether or not this setting can be modified for this zone (based on your Cloudflare plan level). */
  editable?: boolean | null;
  /** last time this setting was modified. */
  modifiedOn?: string | null;
}
const ZonesSchemasBrowserCacheTTL = /*@__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    id: Schema.Literal("browser_cache_ttl"),
    value: Schema.Number,
    editable: Schema.optional(Schema.Union([Schema.Boolean, Schema.Null])),
    modifiedOn: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
  }).pipe(
    Schema.encodeKeys({
      id: "id",
      value: "value",
      editable: "editable",
      modifiedOn: "modified_on",
    }),
  ),
) as unknown as Schema.Codec<ZonesSchemasBrowserCacheTTL>;

interface ZonesSchemasBrowserCheck {
  /** ID of the zone setting. */
  id: "browser_check";
  /** Current value of the zone setting. */
  value: "on" | "off" | (string & {});
  /** Whether or not this setting can be modified for this zone (based on your Cloudflare plan level). */
  editable?: boolean | null;
  /** last time this setting was modified. */
  modifiedOn?: string | null;
}
const ZonesSchemasBrowserCheck = /*@__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    id: Schema.Literal("browser_check"),
    value: Schema.Union([Schema.Literals(["on", "off"]), Schema.String]),
    editable: Schema.optional(Schema.Union([Schema.Boolean, Schema.Null])),
    modifiedOn: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
  }).pipe(
    Schema.encodeKeys({
      id: "id",
      value: "value",
      editable: "editable",
      modifiedOn: "modified_on",
    }),
  ),
) as unknown as Schema.Codec<ZonesSchemasBrowserCheck>;

interface ZonesSchemasCacheLevel {
  /** ID of the zone setting. */
  id: "cache_level";
  /** Current value of the zone setting. */
  value: "aggressive" | "basic" | "simplified" | (string & {});
  /** Whether or not this setting can be modified for this zone (based on your Cloudflare plan level). */
  editable?: boolean | null;
  /** last time this setting was modified. */
  modifiedOn?: string | null;
}
const ZonesSchemasCacheLevel = /*@__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    id: Schema.Literal("cache_level"),
    value: Schema.Union([
      Schema.Literals(["aggressive", "basic", "simplified"]),
      Schema.String,
    ]),
    editable: Schema.optional(Schema.Union([Schema.Boolean, Schema.Null])),
    modifiedOn: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
  }).pipe(
    Schema.encodeKeys({
      id: "id",
      value: "value",
      editable: "editable",
      modifiedOn: "modified_on",
    }),
  ),
) as unknown as Schema.Codec<ZonesSchemasCacheLevel>;

interface ChallengeTTL {
  /** ID of the zone setting. */
  id: "challenge_ttl";
  /** Current value of the zone setting. */
  value:
    | "300"
    | "900"
    | "1800"
    | "2700"
    | "3600"
    | "7200"
    | "10800"
    | "14400"
    | "28800"
    | "57600"
    | "86400"
    | "604800"
    | "2592000"
    | "31536000"
    | (string & {});
  /** Whether or not this setting can be modified for this zone (based on your Cloudflare plan level). */
  editable?: boolean | null;
  /** last time this setting was modified. */
  modifiedOn?: string | null;
}
const ChallengeTTL = /*@__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    id: Schema.Literal("challenge_ttl"),
    value: Schema.Union([
      Schema.Literals([
        "300",
        "900",
        "1800",
        "2700",
        "3600",
        "7200",
        "10800",
        "14400",
        "28800",
        "57600",
        "86400",
        "604800",
        "2592000",
        "31536000",
      ]),
      Schema.String,
    ]),
    editable: Schema.optional(Schema.Union([Schema.Boolean, Schema.Null])),
    modifiedOn: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
  }).pipe(
    Schema.encodeKeys({
      id: "id",
      value: "value",
      editable: "editable",
      modifiedOn: "modified_on",
    }),
  ),
) as unknown as Schema.Codec<ChallengeTTL>;

interface ZonesChinaNetworkEnabled {
  /** ID of the zone setting. */
  id: "china_network_enabled";
  /** Current value of the zone setting. */
  value: "on" | "off" | (string & {});
  /** Whether or not this setting can be modified for this zone (based on your Cloudflare plan level). */
  editable?: boolean | null;
  /** last time this setting was modified. */
  modifiedOn?: string | null;
}
const ZonesChinaNetworkEnabled = /*@__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    id: Schema.Literal("china_network_enabled"),
    value: Schema.Union([Schema.Literals(["on", "off"]), Schema.String]),
    editable: Schema.optional(Schema.Union([Schema.Boolean, Schema.Null])),
    modifiedOn: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
  }).pipe(
    Schema.encodeKeys({
      id: "id",
      value: "value",
      editable: "editable",
      modifiedOn: "modified_on",
    }),
  ),
) as unknown as Schema.Codec<ZonesChinaNetworkEnabled>;

interface ZonesContentConverter {
  /** ID of the zone setting. */
  id: "content_converter";
  /** Current value of the zone setting. */
  value: "off" | "on" | (string & {});
  /** Whether or not this setting can be modified for this zone (based on your Cloudflare plan level). */
  editable?: boolean | null;
  /** last time this setting was modified. */
  modifiedOn?: string | null;
}
const ZonesContentConverter = /*@__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    id: Schema.Literal("content_converter"),
    value: Schema.Union([Schema.Literals(["off", "on"]), Schema.String]),
    editable: Schema.optional(Schema.Union([Schema.Boolean, Schema.Null])),
    modifiedOn: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
  }).pipe(
    Schema.encodeKeys({
      id: "id",
      value: "value",
      editable: "editable",
      modifiedOn: "modified_on",
    }),
  ),
) as unknown as Schema.Codec<ZonesContentConverter>;

interface Ciphers {
  /** ID of the zone setting. */
  id: "ciphers";
  /** Current value of the zone setting. */
  value: string[];
  /** Whether or not this setting can be modified for this zone (based on your Cloudflare plan level). */
  editable?: boolean | null;
  /** last time this setting was modified. */
  modifiedOn?: string | null;
}
const Ciphers = /*@__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    id: Schema.Literal("ciphers"),
    value: Schema.Array(Schema.String),
    editable: Schema.optional(Schema.Union([Schema.Boolean, Schema.Null])),
    modifiedOn: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
  }).pipe(
    Schema.encodeKeys({
      id: "id",
      value: "value",
      editable: "editable",
      modifiedOn: "modified_on",
    }),
  ),
) as unknown as Schema.Codec<Ciphers>;

interface ZonesCNAMEFlattening {
  /** How to flatten the cname destination. */
  id: "cname_flattening";
  /** @deprecated This zone setting is deprecated; please use the DNS Settings route instead. More information at https://developers.cloudflare.com/fundamentals/api/reference/deprecations/#2025-03-21 */
  value: "flatten_at_root" | "flatten_all" | (string & {});
  /** Whether or not this setting can be modified for this zone (based on your Cloudflare plan level). */
  editable?: boolean | null;
  /** last time this setting was modified. */
  modifiedOn?: string | null;
}
const ZonesCNAMEFlattening = /*@__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    id: Schema.Literal("cname_flattening"),
    value: Schema.Union([
      Schema.Literals(["flatten_at_root", "flatten_all"]),
      Schema.String,
    ]),
    editable: Schema.optional(Schema.Union([Schema.Boolean, Schema.Null])),
    modifiedOn: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
  }).pipe(
    Schema.encodeKeys({
      id: "id",
      value: "value",
      editable: "editable",
      modifiedOn: "modified_on",
    }),
  ),
) as unknown as Schema.Codec<ZonesCNAMEFlattening>;

interface DevelopmentMode {
  /** ID of the zone setting. */
  id: "development_mode";
  /** Current value of the zone setting. */
  value: "on" | "off" | (string & {});
  /** Whether or not this setting can be modified for this zone (based on your Cloudflare plan level). */
  editable?: boolean | null;
  /** last time this setting was modified. */
  modifiedOn?: string | null;
  /** Value of the zone setting. Notes: The interval (in seconds) from when development mode expires (positive integer) or last expired (negative integer) for the domain. If development mode has never been  */
  timeRemaining?: number | null;
}
const DevelopmentMode = /*@__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    id: Schema.Literal("development_mode"),
    value: Schema.Union([Schema.Literals(["on", "off"]), Schema.String]),
    editable: Schema.optional(Schema.Union([Schema.Boolean, Schema.Null])),
    modifiedOn: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
    timeRemaining: Schema.optional(Schema.Union([Schema.Number, Schema.Null])),
  }).pipe(
    Schema.encodeKeys({
      id: "id",
      value: "value",
      editable: "editable",
      modifiedOn: "modified_on",
      timeRemaining: "time_remaining",
    }),
  ),
) as unknown as Schema.Codec<DevelopmentMode>;

interface EarlyHints {
  /** ID of the zone setting. */
  id: "early_hints";
  /** Current value of the zone setting. */
  value: "on" | "off" | (string & {});
  /** Whether or not this setting can be modified for this zone (based on your Cloudflare plan level). */
  editable?: boolean | null;
  /** last time this setting was modified. */
  modifiedOn?: string | null;
}
const EarlyHints = /*@__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    id: Schema.Literal("early_hints"),
    value: Schema.Union([Schema.Literals(["on", "off"]), Schema.String]),
    editable: Schema.optional(Schema.Union([Schema.Boolean, Schema.Null])),
    modifiedOn: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
  }).pipe(
    Schema.encodeKeys({
      id: "id",
      value: "value",
      editable: "editable",
      modifiedOn: "modified_on",
    }),
  ),
) as unknown as Schema.Codec<EarlyHints>;

interface ZonesSchemasEdgeCacheTTL {
  /** ID of the zone setting. */
  id: "edge_cache_ttl";
  /** Current value of the zone setting. */
  value:
    | "30"
    | "60"
    | "300"
    | "1200"
    | "1800"
    | "3600"
    | "7200"
    | "10800"
    | "14400"
    | "18000"
    | "28800"
    | "43200"
    | "57600"
    | "72000"
    | "86400"
    | "172800"
    | "259200"
    | "345600"
    | "432000"
    | "518400"
    | "604800"
    | (string & {});
  /** Whether or not this setting can be modified for this zone (based on your Cloudflare plan level). */
  editable?: boolean | null;
  /** last time this setting was modified. */
  modifiedOn?: string | null;
}
const ZonesSchemasEdgeCacheTTL = /*@__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    id: Schema.Literal("edge_cache_ttl"),
    value: Schema.Union([
      Schema.Literals([
        "30",
        "60",
        "300",
        "1200",
        "1800",
        "3600",
        "7200",
        "10800",
        "14400",
        "18000",
        "28800",
        "43200",
        "57600",
        "72000",
        "86400",
        "172800",
        "259200",
        "345600",
        "432000",
        "518400",
        "604800",
      ]),
      Schema.String,
    ]),
    editable: Schema.optional(Schema.Union([Schema.Boolean, Schema.Null])),
    modifiedOn: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
  }).pipe(
    Schema.encodeKeys({
      id: "id",
      value: "value",
      editable: "editable",
      modifiedOn: "modified_on",
    }),
  ),
) as unknown as Schema.Codec<ZonesSchemasEdgeCacheTTL>;

interface ZonesSchemasEmailObfuscation {
  /** ID of the zone setting. */
  id: "email_obfuscation";
  /** Current value of the zone setting. */
  value: "on" | "off" | (string & {});
  /** Whether or not this setting can be modified for this zone (based on your Cloudflare plan level). */
  editable?: boolean | null;
  /** last time this setting was modified. */
  modifiedOn?: string | null;
}
const ZonesSchemasEmailObfuscation = /*@__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    id: Schema.Literal("email_obfuscation"),
    value: Schema.Union([Schema.Literals(["on", "off"]), Schema.String]),
    editable: Schema.optional(Schema.Union([Schema.Boolean, Schema.Null])),
    modifiedOn: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
  }).pipe(
    Schema.encodeKeys({
      id: "id",
      value: "value",
      editable: "editable",
      modifiedOn: "modified_on",
    }),
  ),
) as unknown as Schema.Codec<ZonesSchemasEmailObfuscation>;

interface H2Prioritization {
  /** ID of the zone setting. */
  id: "h2_prioritization";
  /** Current value of the zone setting. */
  value: "on" | "off" | "custom" | (string & {});
  /** Whether or not this setting can be modified for this zone (based on your Cloudflare plan level). */
  editable?: boolean | null;
  /** last time this setting was modified. */
  modifiedOn?: string | null;
}
const H2Prioritization = /*@__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    id: Schema.Literal("h2_prioritization"),
    value: Schema.Union([
      Schema.Literals(["on", "off", "custom"]),
      Schema.String,
    ]),
    editable: Schema.optional(Schema.Union([Schema.Boolean, Schema.Null])),
    modifiedOn: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
  }).pipe(
    Schema.encodeKeys({
      id: "id",
      value: "value",
      editable: "editable",
      modifiedOn: "modified_on",
    }),
  ),
) as unknown as Schema.Codec<H2Prioritization>;

interface HotlinkProtection {
  /** ID of the zone setting. */
  id: "hotlink_protection";
  /** Current value of the zone setting. */
  value: "on" | "off" | (string & {});
  /** Whether or not this setting can be modified for this zone (based on your Cloudflare plan level). */
  editable?: boolean | null;
  /** last time this setting was modified. */
  modifiedOn?: string | null;
}
const HotlinkProtection = /*@__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    id: Schema.Literal("hotlink_protection"),
    value: Schema.Union([Schema.Literals(["on", "off"]), Schema.String]),
    editable: Schema.optional(Schema.Union([Schema.Boolean, Schema.Null])),
    modifiedOn: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
  }).pipe(
    Schema.encodeKeys({
      id: "id",
      value: "value",
      editable: "editable",
      modifiedOn: "modified_on",
    }),
  ),
) as unknown as Schema.Codec<HotlinkProtection>;

interface Http2 {
  /** ID of the zone setting. */
  id: "http2";
  /** Current value of the zone setting. */
  value: "on" | "off" | (string & {});
  /** Whether or not this setting can be modified for this zone (based on your Cloudflare plan level). */
  editable?: boolean | null;
  /** last time this setting was modified. */
  modifiedOn?: string | null;
}
const Http2 = /*@__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    id: Schema.Literal("http2"),
    value: Schema.Union([Schema.Literals(["on", "off"]), Schema.String]),
    editable: Schema.optional(Schema.Union([Schema.Boolean, Schema.Null])),
    modifiedOn: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
  }).pipe(
    Schema.encodeKeys({
      id: "id",
      value: "value",
      editable: "editable",
      modifiedOn: "modified_on",
    }),
  ),
) as unknown as Schema.Codec<Http2>;

interface Http3 {
  /** ID of the zone setting. */
  id: "http3";
  /** Current value of the zone setting. */
  value: "on" | "off" | (string & {});
  /** Whether or not this setting can be modified for this zone (based on your Cloudflare plan level). */
  editable?: boolean | null;
  /** last time this setting was modified. */
  modifiedOn?: string | null;
}
const Http3 = /*@__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    id: Schema.Literal("http3"),
    value: Schema.Union([Schema.Literals(["on", "off"]), Schema.String]),
    editable: Schema.optional(Schema.Union([Schema.Boolean, Schema.Null])),
    modifiedOn: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
  }).pipe(
    Schema.encodeKeys({
      id: "id",
      value: "value",
      editable: "editable",
      modifiedOn: "modified_on",
    }),
  ),
) as unknown as Schema.Codec<Http3>;

interface ImageResizing {
  /** ID of the zone setting. */
  id: "image_resizing";
  /** Current value of the zone setting. */
  value: "on" | "off" | "open" | (string & {});
  /** Whether or not this setting can be modified for this zone (based on your Cloudflare plan level). */
  editable?: boolean | null;
  /** last time this setting was modified. */
  modifiedOn?: string | null;
}
const ImageResizing = /*@__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    id: Schema.Literal("image_resizing"),
    value: Schema.Union([
      Schema.Literals(["on", "off", "open"]),
      Schema.String,
    ]),
    editable: Schema.optional(Schema.Union([Schema.Boolean, Schema.Null])),
    modifiedOn: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
  }).pipe(
    Schema.encodeKeys({
      id: "id",
      value: "value",
      editable: "editable",
      modifiedOn: "modified_on",
    }),
  ),
) as unknown as Schema.Codec<ImageResizing>;

interface ZonesSchemasIPGeolocation {
  /** ID of the zone setting. */
  id: "ip_geolocation";
  /** Current value of the zone setting. */
  value: "on" | "off" | (string & {});
  /** Whether or not this setting can be modified for this zone (based on your Cloudflare plan level). */
  editable?: boolean | null;
  /** last time this setting was modified. */
  modifiedOn?: string | null;
}
const ZonesSchemasIPGeolocation = /*@__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    id: Schema.Literal("ip_geolocation"),
    value: Schema.Union([Schema.Literals(["on", "off"]), Schema.String]),
    editable: Schema.optional(Schema.Union([Schema.Boolean, Schema.Null])),
    modifiedOn: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
  }).pipe(
    Schema.encodeKeys({
      id: "id",
      value: "value",
      editable: "editable",
      modifiedOn: "modified_on",
    }),
  ),
) as unknown as Schema.Codec<ZonesSchemasIPGeolocation>;

interface Ipv6 {
  /** ID of the zone setting. */
  id: "ipv6";
  /** Current value of the zone setting. */
  value: "off" | "on" | (string & {});
  /** Whether or not this setting can be modified for this zone (based on your Cloudflare plan level). */
  editable?: boolean | null;
  /** last time this setting was modified. */
  modifiedOn?: string | null;
}
const Ipv6 = /*@__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    id: Schema.Literal("ipv6"),
    value: Schema.Union([Schema.Literals(["off", "on"]), Schema.String]),
    editable: Schema.optional(Schema.Union([Schema.Boolean, Schema.Null])),
    modifiedOn: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
  }).pipe(
    Schema.encodeKeys({
      id: "id",
      value: "value",
      editable: "editable",
      modifiedOn: "modified_on",
    }),
  ),
) as unknown as Schema.Codec<Ipv6>;

interface ZonesMaxUpload {
  /** identifier of the zone setting. */
  id: "max_upload";
  /** Current value of the zone setting. */
  value:
    | "100"
    | "125"
    | "150"
    | "175"
    | "200"
    | "225"
    | "250"
    | "275"
    | "300"
    | "325"
    | "350"
    | "375"
    | "400"
    | "425"
    | "450"
    | "475"
    | "500"
    | "1000"
    | (string & {});
  /** Whether or not this setting can be modified for this zone (based on your Cloudflare plan level). */
  editable?: boolean | null;
  /** last time this setting was modified. */
  modifiedOn?: string | null;
}
const ZonesMaxUpload = /*@__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    id: Schema.Literal("max_upload"),
    value: Schema.Union([
      Schema.Literals([
        "100",
        "125",
        "150",
        "175",
        "200",
        "225",
        "250",
        "275",
        "300",
        "325",
        "350",
        "375",
        "400",
        "425",
        "450",
        "475",
        "500",
        "1000",
      ]),
      Schema.String,
    ]),
    editable: Schema.optional(Schema.Union([Schema.Boolean, Schema.Null])),
    modifiedOn: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
  }).pipe(
    Schema.encodeKeys({
      id: "id",
      value: "value",
      editable: "editable",
      modifiedOn: "modified_on",
    }),
  ),
) as unknown as Schema.Codec<ZonesMaxUpload>;

interface MinTLSVersion {
  /** ID of the zone setting. */
  id: "min_tls_version";
  /** Current value of the zone setting. */
  value: "1.0" | "1.1" | "1.2" | "1.3" | (string & {});
  /** Whether or not this setting can be modified for this zone (based on your Cloudflare plan level). */
  editable?: boolean | null;
  /** last time this setting was modified. */
  modifiedOn?: string | null;
}
const MinTLSVersion = /*@__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    id: Schema.Literal("min_tls_version"),
    value: Schema.Union([
      Schema.Literals(["1.0", "1.1", "1.2", "1.3"]),
      Schema.String,
    ]),
    editable: Schema.optional(Schema.Union([Schema.Boolean, Schema.Null])),
    modifiedOn: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
  }).pipe(
    Schema.encodeKeys({
      id: "id",
      value: "value",
      editable: "editable",
      modifiedOn: "modified_on",
    }),
  ),
) as unknown as Schema.Codec<MinTLSVersion>;

interface ZonesSchemasMirage {
  /** ID of the zone setting. */
  id: "mirage";
  /** @deprecated Mirage is being deprecated. More information at https://developers.cloudflare.com/speed/optimization/images/mirage/ */
  value: "on" | "off" | (string & {});
  /** Whether or not this setting can be modified for this zone (based on your Cloudflare plan level). */
  editable?: boolean | null;
  /** last time this setting was modified. */
  modifiedOn?: string | null;
}
const ZonesSchemasMirage = /*@__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    id: Schema.Literal("mirage"),
    value: Schema.Union([Schema.Literals(["on", "off"]), Schema.String]),
    editable: Schema.optional(Schema.Union([Schema.Boolean, Schema.Null])),
    modifiedOn: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
  }).pipe(
    Schema.encodeKeys({
      id: "id",
      value: "value",
      editable: "editable",
      modifiedOn: "modified_on",
    }),
  ),
) as unknown as Schema.Codec<ZonesSchemasMirage>;

interface Value2 {
  enabled?: boolean | null;
}
const Value2 = /*@__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    enabled: Schema.optional(Schema.Union([Schema.Boolean, Schema.Null])),
  }),
) as unknown as Schema.Codec<Value2>;

interface Nel {
  /** Zone setting identifier. */
  id: "nel";
  /** Current value of the zone setting. */
  value: { enabled?: boolean | null };
  /** Whether or not this setting can be modified for this zone (based on your Cloudflare plan level). */
  editable?: boolean | null;
  /** last time this setting was modified. */
  modifiedOn?: string | null;
}
const Nel = /*@__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    id: Schema.Literal("nel"),
    value: Value2,
    editable: Schema.optional(Schema.Union([Schema.Boolean, Schema.Null])),
    modifiedOn: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
  }).pipe(
    Schema.encodeKeys({
      id: "id",
      value: "value",
      editable: "editable",
      modifiedOn: "modified_on",
    }),
  ),
) as unknown as Schema.Codec<Nel>;

interface ZonesSchemasOpportunisticEncryption {
  /** ID of the zone setting. */
  id: "opportunistic_encryption";
  /** Current value of the zone setting. */
  value: "on" | "off" | (string & {});
  /** Whether or not this setting can be modified for this zone (based on your Cloudflare plan level). */
  editable?: boolean | null;
  /** last time this setting was modified. */
  modifiedOn?: string | null;
}
const ZonesSchemasOpportunisticEncryption =
  /*@__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      id: Schema.Literal("opportunistic_encryption"),
      value: Schema.Union([Schema.Literals(["on", "off"]), Schema.String]),
      editable: Schema.optional(Schema.Union([Schema.Boolean, Schema.Null])),
      modifiedOn: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
    }).pipe(
      Schema.encodeKeys({
        id: "id",
        value: "value",
        editable: "editable",
        modifiedOn: "modified_on",
      }),
    ),
  ) as unknown as Schema.Codec<ZonesSchemasOpportunisticEncryption>;

interface OpportunisticOnion {
  /** ID of the zone setting. */
  id: "opportunistic_onion";
  /** Current value of the zone setting. */
  value: "on" | "off" | (string & {});
  /** Whether or not this setting can be modified for this zone (based on your Cloudflare plan level). */
  editable?: boolean | null;
  /** last time this setting was modified. */
  modifiedOn?: string | null;
}
const OpportunisticOnion = /*@__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    id: Schema.Literal("opportunistic_onion"),
    value: Schema.Union([Schema.Literals(["on", "off"]), Schema.String]),
    editable: Schema.optional(Schema.Union([Schema.Boolean, Schema.Null])),
    modifiedOn: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
  }).pipe(
    Schema.encodeKeys({
      id: "id",
      value: "value",
      editable: "editable",
      modifiedOn: "modified_on",
    }),
  ),
) as unknown as Schema.Codec<OpportunisticOnion>;

interface OrangeToOrange {
  /** ID of the zone setting. */
  id: "orange_to_orange";
  /** Current value of the zone setting. */
  value: "on" | "off" | (string & {});
  /** Whether or not this setting can be modified for this zone (based on your Cloudflare plan level). */
  editable?: boolean | null;
  /** last time this setting was modified. */
  modifiedOn?: string | null;
}
const OrangeToOrange = /*@__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    id: Schema.Literal("orange_to_orange"),
    value: Schema.Union([Schema.Literals(["on", "off"]), Schema.String]),
    editable: Schema.optional(Schema.Union([Schema.Boolean, Schema.Null])),
    modifiedOn: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
  }).pipe(
    Schema.encodeKeys({
      id: "id",
      value: "value",
      editable: "editable",
      modifiedOn: "modified_on",
    }),
  ),
) as unknown as Schema.Codec<OrangeToOrange>;

interface ZonesSchemasOriginErrorPagePassThru {
  /** ID of the zone setting. */
  id: "origin_error_page_pass_thru";
  /** Current value of the zone setting. */
  value: "on" | "off" | (string & {});
  /** Whether or not this setting can be modified for this zone (based on your Cloudflare plan level). */
  editable?: boolean | null;
  /** last time this setting was modified. */
  modifiedOn?: string | null;
}
const ZonesSchemasOriginErrorPagePassThru =
  /*@__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      id: Schema.Literal("origin_error_page_pass_thru"),
      value: Schema.Union([Schema.Literals(["on", "off"]), Schema.String]),
      editable: Schema.optional(Schema.Union([Schema.Boolean, Schema.Null])),
      modifiedOn: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
    }).pipe(
      Schema.encodeKeys({
        id: "id",
        value: "value",
        editable: "editable",
        modifiedOn: "modified_on",
      }),
    ),
  ) as unknown as Schema.Codec<ZonesSchemasOriginErrorPagePassThru>;

interface ZonesCacheRulesOriginH2MaxStreams {
  /** Value of the zone setting. */
  id: "origin_h2_max_streams";
  /** Last time this setting was modified. */
  modifiedOn?: string | null;
  /** Value of the Origin H2 Max Streams Setting. */
  value?: number | null;
}
const ZonesCacheRulesOriginH2MaxStreams =
  /*@__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      id: Schema.Literal("origin_h2_max_streams"),
      modifiedOn: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
      value: Schema.optional(Schema.Union([Schema.Number, Schema.Null])),
    }).pipe(
      Schema.encodeKeys({
        id: "id",
        modifiedOn: "modified_on",
        value: "value",
      }),
    ),
  ) as unknown as Schema.Codec<ZonesCacheRulesOriginH2MaxStreams>;

interface ZonesCacheRulesOriginMaxHTTPVersion {
  /** Value of the zone setting. */
  id: "origin_max_http_version";
  /** Last time this setting was modified. */
  modifiedOn?: string | null;
  /** Value of the Origin Max HTTP Version Setting. */
  value?: "2" | "1" | (string & {}) | null;
}
const ZonesCacheRulesOriginMaxHTTPVersion =
  /*@__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      id: Schema.Literal("origin_max_http_version"),
      modifiedOn: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
      value: Schema.optional(
        Schema.Union([
          Schema.Union([Schema.Literals(["2", "1"]), Schema.String]),
          Schema.Null,
        ]),
      ),
    }).pipe(
      Schema.encodeKeys({
        id: "id",
        modifiedOn: "modified_on",
        value: "value",
      }),
    ),
  ) as unknown as Schema.Codec<ZonesCacheRulesOriginMaxHTTPVersion>;

interface ZonesSchemasPolish {
  /** ID of the zone setting. */
  id: "polish";
  /** Current value of the zone setting. */
  value: "off" | "lossless" | "lossy" | (string & {});
  /** Whether or not this setting can be modified for this zone (based on your Cloudflare plan level). */
  editable?: boolean | null;
  /** last time this setting was modified. */
  modifiedOn?: string | null;
}
const ZonesSchemasPolish = /*@__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    id: Schema.Literal("polish"),
    value: Schema.Union([
      Schema.Literals(["off", "lossless", "lossy"]),
      Schema.String,
    ]),
    editable: Schema.optional(Schema.Union([Schema.Boolean, Schema.Null])),
    modifiedOn: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
  }).pipe(
    Schema.encodeKeys({
      id: "id",
      value: "value",
      editable: "editable",
      modifiedOn: "modified_on",
    }),
  ),
) as unknown as Schema.Codec<ZonesSchemasPolish>;

interface PrefetchPreload {
  /** ID of the zone setting. */
  id: "prefetch_preload";
  /** Current value of the zone setting. */
  value: "on" | "off" | (string & {});
  /** Whether or not this setting can be modified for this zone (based on your Cloudflare plan level). */
  editable?: boolean | null;
  /** last time this setting was modified. */
  modifiedOn?: string | null;
}
const PrefetchPreload = /*@__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    id: Schema.Literal("prefetch_preload"),
    value: Schema.Union([Schema.Literals(["on", "off"]), Schema.String]),
    editable: Schema.optional(Schema.Union([Schema.Boolean, Schema.Null])),
    modifiedOn: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
  }).pipe(
    Schema.encodeKeys({
      id: "id",
      value: "value",
      editable: "editable",
      modifiedOn: "modified_on",
    }),
  ),
) as unknown as Schema.Codec<PrefetchPreload>;

interface ZonesPrivacyPass {
  /** ID of the zone setting. */
  id: "privacy_pass";
  /** @deprecated Privacy Pass v1 was deprecated in 2023. (Announcement - https://blog.cloudflare.com/privacy-pass-standard/) and (API deprecation details - https://developers.cloudflare.com/fundamentals/ap */
  value: "on" | "off" | (string & {});
  /** Whether or not this setting can be modified for this zone (based on your Cloudflare plan level). */
  editable?: boolean | null;
  /** last time this setting was modified. */
  modifiedOn?: string | null;
}
const ZonesPrivacyPass = /*@__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    id: Schema.Literal("privacy_pass"),
    value: Schema.Union([Schema.Literals(["on", "off"]), Schema.String]),
    editable: Schema.optional(Schema.Union([Schema.Boolean, Schema.Null])),
    modifiedOn: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
  }).pipe(
    Schema.encodeKeys({
      id: "id",
      value: "value",
      editable: "editable",
      modifiedOn: "modified_on",
    }),
  ),
) as unknown as Schema.Codec<ZonesPrivacyPass>;

interface ProxyReadTimeout {
  /** ID of the zone setting. */
  id: "proxy_read_timeout";
  /** Current value of the zone setting. */
  value: number;
  /** Whether or not this setting can be modified for this zone (based on your Cloudflare plan level). */
  editable?: boolean | null;
  /** last time this setting was modified. */
  modifiedOn?: string | null;
}
const ProxyReadTimeout = /*@__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    id: Schema.Literal("proxy_read_timeout"),
    value: Schema.Number,
    editable: Schema.optional(Schema.Union([Schema.Boolean, Schema.Null])),
    modifiedOn: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
  }).pipe(
    Schema.encodeKeys({
      id: "id",
      value: "value",
      editable: "editable",
      modifiedOn: "modified_on",
    }),
  ),
) as unknown as Schema.Codec<ProxyReadTimeout>;

interface PseudoIPV4 {
  /** Value of the Pseudo IPv4 setting. */
  id: "pseudo_ipv4";
  /** Current value of the zone setting. */
  value: "off" | "add_header" | "overwrite_header" | (string & {});
  /** Whether or not this setting can be modified for this zone (based on your Cloudflare plan level). */
  editable?: boolean | null;
  /** last time this setting was modified. */
  modifiedOn?: string | null;
}
const PseudoIPV4 = /*@__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    id: Schema.Literal("pseudo_ipv4"),
    value: Schema.Union([
      Schema.Literals(["off", "add_header", "overwrite_header"]),
      Schema.String,
    ]),
    editable: Schema.optional(Schema.Union([Schema.Boolean, Schema.Null])),
    modifiedOn: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
  }).pipe(
    Schema.encodeKeys({
      id: "id",
      value: "value",
      editable: "editable",
      modifiedOn: "modified_on",
    }),
  ),
) as unknown as Schema.Codec<PseudoIPV4>;

interface ZonesRedirectsForAITraining {
  /** ID of the zone setting. */
  id: "redirects_for_ai_training";
  /** Current value of the zone setting. */
  value: "off" | "on" | (string & {});
  /** Whether or not this setting can be modified for this zone (based on your Cloudflare plan level). */
  editable?: boolean | null;
  /** last time this setting was modified. */
  modifiedOn?: string | null;
}
const ZonesRedirectsForAITraining = /*@__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    id: Schema.Literal("redirects_for_ai_training"),
    value: Schema.Union([Schema.Literals(["off", "on"]), Schema.String]),
    editable: Schema.optional(Schema.Union([Schema.Boolean, Schema.Null])),
    modifiedOn: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
  }).pipe(
    Schema.encodeKeys({
      id: "id",
      value: "value",
      editable: "editable",
      modifiedOn: "modified_on",
    }),
  ),
) as unknown as Schema.Codec<ZonesRedirectsForAITraining>;

interface ZonesReplaceInsecureJS {
  /** ID of the zone setting. */
  id: "replace_insecure_js";
  /** Current value of the zone setting. */
  value: "on" | "off" | (string & {});
  /** Whether or not this setting can be modified for this zone (based on your Cloudflare plan level). */
  editable?: boolean | null;
  /** last time this setting was modified. */
  modifiedOn?: string | null;
}
const ZonesReplaceInsecureJS = /*@__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    id: Schema.Literal("replace_insecure_js"),
    value: Schema.Union([Schema.Literals(["on", "off"]), Schema.String]),
    editable: Schema.optional(Schema.Union([Schema.Boolean, Schema.Null])),
    modifiedOn: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
  }).pipe(
    Schema.encodeKeys({
      id: "id",
      value: "value",
      editable: "editable",
      modifiedOn: "modified_on",
    }),
  ),
) as unknown as Schema.Codec<ZonesReplaceInsecureJS>;

interface ZonesSchemasResponseBuffering {
  /** ID of the zone setting. */
  id: "response_buffering";
  /** Current value of the zone setting. */
  value: "on" | "off" | (string & {});
  /** Whether or not this setting can be modified for this zone (based on your Cloudflare plan level). */
  editable?: boolean | null;
  /** last time this setting was modified. */
  modifiedOn?: string | null;
}
const ZonesSchemasResponseBuffering =
  /*@__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      id: Schema.Literal("response_buffering"),
      value: Schema.Union([Schema.Literals(["on", "off"]), Schema.String]),
      editable: Schema.optional(Schema.Union([Schema.Boolean, Schema.Null])),
      modifiedOn: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
    }).pipe(
      Schema.encodeKeys({
        id: "id",
        value: "value",
        editable: "editable",
        modifiedOn: "modified_on",
      }),
    ),
  ) as unknown as Schema.Codec<ZonesSchemasResponseBuffering>;

interface ZonesSchemasRocketLoader {
  /** ID of the zone setting. */
  id: "rocket_loader";
  /** Current value of the zone setting. */
  value: "on" | "off" | (string & {});
  /** Whether or not this setting can be modified for this zone (based on your Cloudflare plan level). */
  editable?: boolean | null;
  /** last time this setting was modified. */
  modifiedOn?: string | null;
}
const ZonesSchemasRocketLoader = /*@__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    id: Schema.Literal("rocket_loader"),
    value: Schema.Union([Schema.Literals(["on", "off"]), Schema.String]),
    editable: Schema.optional(Schema.Union([Schema.Boolean, Schema.Null])),
    modifiedOn: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
  }).pipe(
    Schema.encodeKeys({
      id: "id",
      value: "value",
      editable: "editable",
      modifiedOn: "modified_on",
    }),
  ),
) as unknown as Schema.Codec<ZonesSchemasRocketLoader>;

interface AutomaticPlatformOptimization {
  /** Indicates whether or not [cache by device type](https://developers.cloudflare.com/automatic-platform-optimization/reference/cache-device-type/) is enabled. */
  cacheByDeviceType: boolean;
  /** Indicates whether or not Cloudflare proxy is enabled. */
  cf: boolean;
  /** Indicates whether or not Automatic Platform Optimization is enabled. */
  enabled: boolean;
  /** An array of hostnames where Automatic Platform Optimization for WordPress is activated. */
  hostnames: string[];
  /** Indicates whether or not site is powered by WordPress. */
  wordpress: boolean;
  /** Indicates whether or not [Cloudflare for WordPress plugin](https://wordpress.org/plugins/cloudflare/) is installed. */
  wpPlugin: boolean;
}
const AutomaticPlatformOptimization =
  /*@__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      cacheByDeviceType: Schema.Boolean,
      cf: Schema.Boolean,
      enabled: Schema.Boolean,
      hostnames: Schema.Array(Schema.String),
      wordpress: Schema.Boolean,
      wpPlugin: Schema.Boolean,
    }).pipe(
      Schema.encodeKeys({
        cacheByDeviceType: "cache_by_device_type",
        cf: "cf",
        enabled: "enabled",
        hostnames: "hostnames",
        wordpress: "wordpress",
        wpPlugin: "wp_plugin",
      }),
    ),
  ) as unknown as Schema.Codec<AutomaticPlatformOptimization>;

interface ZonesSchemasAutomaticPlatformOptimization {
  /** ID of the zone setting. */
  id: "automatic_platform_optimization";
  /** Current value of the zone setting. */
  value: {
    cacheByDeviceType: boolean;
    cf: boolean;
    enabled: boolean;
    hostnames: string[];
    wordpress: boolean;
    wpPlugin: boolean;
  };
  /** Whether or not this setting can be modified for this zone (based on your Cloudflare plan level). */
  editable?: boolean | null;
  /** last time this setting was modified. */
  modifiedOn?: string | null;
}
const ZonesSchemasAutomaticPlatformOptimization =
  /*@__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      id: Schema.Literal("automatic_platform_optimization"),
      value: AutomaticPlatformOptimization,
      editable: Schema.optional(Schema.Union([Schema.Boolean, Schema.Null])),
      modifiedOn: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
    }).pipe(
      Schema.encodeKeys({
        id: "id",
        value: "value",
        editable: "editable",
        modifiedOn: "modified_on",
      }),
    ),
  ) as unknown as Schema.Codec<ZonesSchemasAutomaticPlatformOptimization>;

interface ZonesSearchForAgents {
  /** ID of the zone setting. */
  id: "search_for_agents";
  /** Current value of the zone setting. */
  value: "off" | "on" | (string & {});
  /** Whether or not this setting can be modified for this zone (based on your Cloudflare plan level). */
  editable?: boolean | null;
  /** last time this setting was modified. */
  modifiedOn?: string | null;
}
const ZonesSearchForAgents = /*@__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    id: Schema.Literal("search_for_agents"),
    value: Schema.Union([Schema.Literals(["off", "on"]), Schema.String]),
    editable: Schema.optional(Schema.Union([Schema.Boolean, Schema.Null])),
    modifiedOn: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
  }).pipe(
    Schema.encodeKeys({
      id: "id",
      value: "value",
      editable: "editable",
      modifiedOn: "modified_on",
    }),
  ),
) as unknown as Schema.Codec<ZonesSearchForAgents>;

interface StrictTransportSecurity {
  /** Whether or not strict transport security is enabled. */
  enabled?: boolean | null;
  /** Include all subdomains for strict transport security. */
  includeSubdomains?: boolean | null;
  /** Max age in seconds of the strict transport security. */
  maxAge?: number | null;
  /** Whether or not to include 'X-Content-Type-Options: nosniff' header. */
  nosniff?: boolean | null;
  /** Enable automatic preload of the HSTS configuration. */
  preload?: boolean | null;
}
const StrictTransportSecurity = /*@__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    enabled: Schema.optional(Schema.Union([Schema.Boolean, Schema.Null])),
    includeSubdomains: Schema.optional(
      Schema.Union([Schema.Boolean, Schema.Null]),
    ),
    maxAge: Schema.optional(Schema.Union([Schema.Number, Schema.Null])),
    nosniff: Schema.optional(Schema.Union([Schema.Boolean, Schema.Null])),
    preload: Schema.optional(Schema.Union([Schema.Boolean, Schema.Null])),
  }).pipe(
    Schema.encodeKeys({
      enabled: "enabled",
      includeSubdomains: "include_subdomains",
      maxAge: "max_age",
      nosniff: "nosniff",
      preload: "preload",
    }),
  ),
) as unknown as Schema.Codec<StrictTransportSecurity>;

interface Value3 {
  /** Strict Transport Security. */
  strictTransportSecurity?: {
    enabled?: boolean | null;
    includeSubdomains?: boolean | null;
    maxAge?: number | null;
    nosniff?: boolean | null;
    preload?: boolean | null;
  } | null;
}
const Value3 = /*@__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    strictTransportSecurity: Schema.optional(
      Schema.Union([StrictTransportSecurity, Schema.Null]),
    ),
  }).pipe(
    Schema.encodeKeys({ strictTransportSecurity: "strict_transport_security" }),
  ),
) as unknown as Schema.Codec<Value3>;

interface SecurityHeaders {
  /** ID of the zone's security header. */
  id: "security_header";
  /** Current value of the zone setting. */
  value: {
    strictTransportSecurity?: {
      enabled?: boolean | null;
      includeSubdomains?: boolean | null;
      maxAge?: number | null;
      nosniff?: boolean | null;
      preload?: boolean | null;
    } | null;
  };
  /** Whether or not this setting can be modified for this zone (based on your Cloudflare plan level). */
  editable?: boolean | null;
  /** last time this setting was modified. */
  modifiedOn?: string | null;
}
const SecurityHeaders = /*@__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    id: Schema.Literal("security_header"),
    value: Value3,
    editable: Schema.optional(Schema.Union([Schema.Boolean, Schema.Null])),
    modifiedOn: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
  }).pipe(
    Schema.encodeKeys({
      id: "id",
      value: "value",
      editable: "editable",
      modifiedOn: "modified_on",
    }),
  ),
) as unknown as Schema.Codec<SecurityHeaders>;

interface ZonesSchemasSecurityLevel {
  /** ID of the zone setting. */
  id: "security_level";
  /** Current value of the zone setting. */
  value:
    | "off"
    | "essentially_off"
    | "low"
    | "medium"
    | "high"
    | "under_attack"
    | (string & {});
  /** Whether or not this setting can be modified for this zone (based on your Cloudflare plan level). */
  editable?: boolean | null;
  /** last time this setting was modified. */
  modifiedOn?: string | null;
}
const ZonesSchemasSecurityLevel = /*@__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    id: Schema.Literal("security_level"),
    value: Schema.Union([
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
    editable: Schema.optional(Schema.Union([Schema.Boolean, Schema.Null])),
    modifiedOn: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
  }).pipe(
    Schema.encodeKeys({
      id: "id",
      value: "value",
      editable: "editable",
      modifiedOn: "modified_on",
    }),
  ),
) as unknown as Schema.Codec<ZonesSchemasSecurityLevel>;

interface ServerSideExcludes {
  /** ID of the zone setting. */
  id: "server_side_exclude";
  /** Current value of the zone setting. */
  value: "on" | "off" | (string & {});
  /** Whether or not this setting can be modified for this zone (based on your Cloudflare plan level). */
  editable?: boolean | null;
  /** last time this setting was modified. */
  modifiedOn?: string | null;
}
const ServerSideExcludes = /*@__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    id: Schema.Literal("server_side_exclude"),
    value: Schema.Union([Schema.Literals(["on", "off"]), Schema.String]),
    editable: Schema.optional(Schema.Union([Schema.Boolean, Schema.Null])),
    modifiedOn: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
  }).pipe(
    Schema.encodeKeys({
      id: "id",
      value: "value",
      editable: "editable",
      modifiedOn: "modified_on",
    }),
  ),
) as unknown as Schema.Codec<ServerSideExcludes>;

interface ZonesSha1Support {
  /** Zone setting identifier. */
  id: "sha1_support";
  /** Current value of the zone setting. */
  value: "off" | "on" | (string & {});
  /** Whether or not this setting can be modified for this zone (based on your Cloudflare plan level). */
  editable?: boolean | null;
  /** last time this setting was modified. */
  modifiedOn?: string | null;
}
const ZonesSha1Support = /*@__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    id: Schema.Literal("sha1_support"),
    value: Schema.Union([Schema.Literals(["off", "on"]), Schema.String]),
    editable: Schema.optional(Schema.Union([Schema.Boolean, Schema.Null])),
    modifiedOn: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
  }).pipe(
    Schema.encodeKeys({
      id: "id",
      value: "value",
      editable: "editable",
      modifiedOn: "modified_on",
    }),
  ),
) as unknown as Schema.Codec<ZonesSha1Support>;

interface ZonesSchemasSortQueryStringForCache {
  /** ID of the zone setting. */
  id: "sort_query_string_for_cache";
  /** Current value of the zone setting. */
  value: "on" | "off" | (string & {});
  /** Whether or not this setting can be modified for this zone (based on your Cloudflare plan level). */
  editable?: boolean | null;
  /** last time this setting was modified. */
  modifiedOn?: string | null;
}
const ZonesSchemasSortQueryStringForCache =
  /*@__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      id: Schema.Literal("sort_query_string_for_cache"),
      value: Schema.Union([Schema.Literals(["on", "off"]), Schema.String]),
      editable: Schema.optional(Schema.Union([Schema.Boolean, Schema.Null])),
      modifiedOn: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
    }).pipe(
      Schema.encodeKeys({
        id: "id",
        value: "value",
        editable: "editable",
        modifiedOn: "modified_on",
      }),
    ),
  ) as unknown as Schema.Codec<ZonesSchemasSortQueryStringForCache>;

interface ZonesSchemasSSL {
  /** ID of the zone setting. */
  id: "ssl";
  /** Current value of the zone setting. */
  value: "off" | "flexible" | "full" | "strict" | (string & {});
  /** Whether or not this setting can be modified for this zone (based on your Cloudflare plan level). */
  editable?: boolean | null;
  /** last time this setting was modified. */
  modifiedOn?: string | null;
}
const ZonesSchemasSSL = /*@__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    id: Schema.Literal("ssl"),
    value: Schema.Union([
      Schema.Literals(["off", "flexible", "full", "strict"]),
      Schema.String,
    ]),
    editable: Schema.optional(Schema.Union([Schema.Boolean, Schema.Null])),
    modifiedOn: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
  }).pipe(
    Schema.encodeKeys({
      id: "id",
      value: "value",
      editable: "editable",
      modifiedOn: "modified_on",
    }),
  ),
) as unknown as Schema.Codec<ZonesSchemasSSL>;

interface Sslrecommender {
  /** Enrollment value for SSL/TLS Recommender. */
  id?: "ssl_recommender" | null;
  /** ssl-recommender enrollment setting. */
  enabled?: boolean | null;
}
const Sslrecommender = /*@__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    id: Schema.optional(
      Schema.Union([Schema.Literal("ssl_recommender"), Schema.Null]),
    ),
    enabled: Schema.optional(Schema.Union([Schema.Boolean, Schema.Null])),
  }),
) as unknown as Schema.Codec<Sslrecommender>;

interface ZonesTLS12Only {
  /** Zone setting identifier. */
  id: "tls_1_2_only";
  /** Current value of the zone setting. */
  value: "off" | "on" | (string & {});
  /** Whether or not this setting can be modified for this zone (based on your Cloudflare plan level). */
  editable?: boolean | null;
  /** last time this setting was modified. */
  modifiedOn?: string | null;
}
const ZonesTLS12Only = /*@__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    id: Schema.Literal("tls_1_2_only"),
    value: Schema.Union([Schema.Literals(["off", "on"]), Schema.String]),
    editable: Schema.optional(Schema.Union([Schema.Boolean, Schema.Null])),
    modifiedOn: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
  }).pipe(
    Schema.encodeKeys({
      id: "id",
      value: "value",
      editable: "editable",
      modifiedOn: "modified_on",
    }),
  ),
) as unknown as Schema.Codec<ZonesTLS12Only>;

interface Tls13 {
  /** ID of the zone setting. */
  id: "tls_1_3";
  /** Current value of the zone setting. */
  value: "on" | "off" | "zrt" | (string & {});
  /** Whether or not this setting can be modified for this zone (based on your Cloudflare plan level). */
  editable?: boolean | null;
  /** last time this setting was modified. */
  modifiedOn?: string | null;
}
const Tls13 = /*@__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    id: Schema.Literal("tls_1_3"),
    value: Schema.Union([Schema.Literals(["on", "off", "zrt"]), Schema.String]),
    editable: Schema.optional(Schema.Union([Schema.Boolean, Schema.Null])),
    modifiedOn: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
  }).pipe(
    Schema.encodeKeys({
      id: "id",
      value: "value",
      editable: "editable",
      modifiedOn: "modified_on",
    }),
  ),
) as unknown as Schema.Codec<Tls13>;

interface TlsclientAuth {
  /** ID of the zone setting. */
  id: "tls_client_auth";
  /** Current value of the zone setting. */
  value: "on" | "off" | (string & {});
  /** Whether or not this setting can be modified for this zone (based on your Cloudflare plan level). */
  editable?: boolean | null;
  /** last time this setting was modified. */
  modifiedOn?: string | null;
}
const TlsclientAuth = /*@__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    id: Schema.Literal("tls_client_auth"),
    value: Schema.Union([Schema.Literals(["on", "off"]), Schema.String]),
    editable: Schema.optional(Schema.Union([Schema.Boolean, Schema.Null])),
    modifiedOn: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
  }).pipe(
    Schema.encodeKeys({
      id: "id",
      value: "value",
      editable: "editable",
      modifiedOn: "modified_on",
    }),
  ),
) as unknown as Schema.Codec<TlsclientAuth>;

interface ZonesTransformations {
  /** ID of the zone setting. Shared between Image Transformations and Video Transformations. */
  id: "transformations";
  /** Current value of the zone setting. */
  value: "on" | "off" | "open" | (string & {});
  /** Whether or not this setting can be modified for this zone (based on your Cloudflare plan level). */
  editable?: boolean | null;
  /** last time this setting was modified. */
  modifiedOn?: string | null;
}
const ZonesTransformations = /*@__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    id: Schema.Literal("transformations"),
    value: Schema.Union([
      Schema.Literals(["on", "off", "open"]),
      Schema.String,
    ]),
    editable: Schema.optional(Schema.Union([Schema.Boolean, Schema.Null])),
    modifiedOn: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
  }).pipe(
    Schema.encodeKeys({
      id: "id",
      value: "value",
      editable: "editable",
      modifiedOn: "modified_on",
    }),
  ),
) as unknown as Schema.Codec<ZonesTransformations>;

interface ZonesTransformationsAllowedOrigins {
  /** ID of the zone setting. Shared between Image Transformations and Video Transformations. */
  id: "transformations_allowed_origins";
  /** Current value of the zone setting. */
  value: string;
  /** Whether or not this setting can be modified for this zone (based on your Cloudflare plan level). */
  editable?: boolean | null;
  /** last time this setting was modified. */
  modifiedOn?: string | null;
}
const ZonesTransformationsAllowedOrigins =
  /*@__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      id: Schema.Literal("transformations_allowed_origins"),
      value: Schema.String,
      editable: Schema.optional(Schema.Union([Schema.Boolean, Schema.Null])),
      modifiedOn: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
    }).pipe(
      Schema.encodeKeys({
        id: "id",
        value: "value",
        editable: "editable",
        modifiedOn: "modified_on",
      }),
    ),
  ) as unknown as Schema.Codec<ZonesTransformationsAllowedOrigins>;

interface ZonesSchemasTrueClientIPHeader {
  /** ID of the zone setting. */
  id: "true_client_ip_header";
  /** Current value of the zone setting. */
  value: "on" | "off" | (string & {});
  /** Whether or not this setting can be modified for this zone (based on your Cloudflare plan level). */
  editable?: boolean | null;
  /** last time this setting was modified. */
  modifiedOn?: string | null;
}
const ZonesSchemasTrueClientIPHeader =
  /*@__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      id: Schema.Literal("true_client_ip_header"),
      value: Schema.Union([Schema.Literals(["on", "off"]), Schema.String]),
      editable: Schema.optional(Schema.Union([Schema.Boolean, Schema.Null])),
      modifiedOn: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
    }).pipe(
      Schema.encodeKeys({
        id: "id",
        value: "value",
        editable: "editable",
        modifiedOn: "modified_on",
      }),
    ),
  ) as unknown as Schema.Codec<ZonesSchemasTrueClientIPHeader>;

interface ZonesSchemasWAF {
  /** ID of the zone setting. */
  id: "waf";
  /** Current value of the zone setting. */
  value: "on" | "off" | (string & {});
  /** Whether or not this setting can be modified for this zone (based on your Cloudflare plan level). */
  editable?: boolean | null;
  /** last time this setting was modified. */
  modifiedOn?: string | null;
}
const ZonesSchemasWAF = /*@__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    id: Schema.Literal("waf"),
    value: Schema.Union([Schema.Literals(["on", "off"]), Schema.String]),
    editable: Schema.optional(Schema.Union([Schema.Boolean, Schema.Null])),
    modifiedOn: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
  }).pipe(
    Schema.encodeKeys({
      id: "id",
      value: "value",
      editable: "editable",
      modifiedOn: "modified_on",
    }),
  ),
) as unknown as Schema.Codec<ZonesSchemasWAF>;

interface WebP {
  /** ID of the zone setting. */
  id: "webp";
  /** Current value of the zone setting. */
  value: "off" | "on" | (string & {});
  /** Whether or not this setting can be modified for this zone (based on your Cloudflare plan level). */
  editable?: boolean | null;
  /** last time this setting was modified. */
  modifiedOn?: string | null;
}
const WebP = /*@__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    id: Schema.Literal("webp"),
    value: Schema.Union([Schema.Literals(["off", "on"]), Schema.String]),
    editable: Schema.optional(Schema.Union([Schema.Boolean, Schema.Null])),
    modifiedOn: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
  }).pipe(
    Schema.encodeKeys({
      id: "id",
      value: "value",
      editable: "editable",
      modifiedOn: "modified_on",
    }),
  ),
) as unknown as Schema.Codec<WebP>;

interface Websocket {
  /** ID of the zone setting. */
  id: "websockets";
  /** Current value of the zone setting. */
  value: "off" | "on" | (string & {});
  /** Whether or not this setting can be modified for this zone (based on your Cloudflare plan level). */
  editable?: boolean | null;
  /** last time this setting was modified. */
  modifiedOn?: string | null;
}
const Websocket = /*@__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    id: Schema.Literal("websockets"),
    value: Schema.Union([Schema.Literals(["off", "on"]), Schema.String]),
    editable: Schema.optional(Schema.Union([Schema.Boolean, Schema.Null])),
    modifiedOn: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
  }).pipe(
    Schema.encodeKeys({
      id: "id",
      value: "value",
      editable: "editable",
      modifiedOn: "modified_on",
    }),
  ),
) as unknown as Schema.Codec<Websocket>;

interface RatePlan {
  /** The ID of the rate plan. */
  id?:
    | "free"
    | "lite"
    | "pro"
    | "pro_plus"
    | "business"
    | "enterprise"
    | "partners_free"
    | "partners_pro"
    | "partners_business"
    | "partners_enterprise"
    | (string & {})
    | null;
  /** The currency applied to the rate plan subscription. */
  currency?: string | null;
  /** Whether this rate plan is managed externally from Cloudflare. */
  externallyManaged?: boolean | null;
  /** Whether a rate plan is enterprise-based (or newly adopted term contract). */
  isContract?: boolean | null;
  /** The full name of the rate plan. */
  publicName?: string | null;
  /** The scope that this rate plan applies to. */
  scope?: string | null;
  /** The list of sets this rate plan applies to. Returns array of strings. */
  sets?: string[] | null;
}
const RatePlan = /*@__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    id: Schema.optional(
      Schema.Union([
        Schema.Union([
          Schema.Literals([
            "free",
            "lite",
            "pro",
            "pro_plus",
            "business",
            "enterprise",
            "partners_free",
            "partners_pro",
            "partners_business",
            "partners_enterprise",
          ]),
          Schema.String,
        ]),
        Schema.Null,
      ]),
    ),
    currency: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
    externallyManaged: Schema.optional(
      Schema.Union([Schema.Boolean, Schema.Null]),
    ),
    isContract: Schema.optional(Schema.Union([Schema.Boolean, Schema.Null])),
    publicName: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
    scope: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
    sets: Schema.optional(
      Schema.Union([Schema.Array(Schema.String), Schema.Null]),
    ),
  }).pipe(
    Schema.encodeKeys({
      id: "id",
      currency: "currency",
      externallyManaged: "externally_managed",
      isContract: "is_contract",
      publicName: "public_name",
      scope: "scope",
      sets: "sets",
    }),
  ),
) as unknown as Schema.Codec<RatePlan>;

interface Account {
  /** Identifier */
  id?: string | null;
  /** The name of the account. */
  name?: string | null;
}
const Account = /*@__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    id: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
    name: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
  }),
) as unknown as Schema.Codec<Account>;

interface Meta {
  /** The zone is only configured for CDN. */
  cdnOnly?: boolean | null;
  /** Number of Custom Certificates the zone can have. */
  customCertificateQuota?: number | null;
  /** The zone is only configured for DNS. */
  dnsOnly?: boolean | null;
  /** The zone is setup with Foundation DNS. */
  foundationDns?: boolean | null;
  /** Number of Page Rules a zone can have. */
  pageRuleQuota?: number | null;
  /** The zone has been flagged for phishing. */
  phishingDetected?: boolean | null;
  step?: number | null;
}
const Meta = /*@__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    cdnOnly: Schema.optional(Schema.Union([Schema.Boolean, Schema.Null])),
    customCertificateQuota: Schema.optional(
      Schema.Union([Schema.Number, Schema.Null]),
    ),
    dnsOnly: Schema.optional(Schema.Union([Schema.Boolean, Schema.Null])),
    foundationDns: Schema.optional(Schema.Union([Schema.Boolean, Schema.Null])),
    pageRuleQuota: Schema.optional(Schema.Union([Schema.Number, Schema.Null])),
    phishingDetected: Schema.optional(
      Schema.Union([Schema.Boolean, Schema.Null]),
    ),
    step: Schema.optional(Schema.Union([Schema.Number, Schema.Null])),
  }).pipe(
    Schema.encodeKeys({
      cdnOnly: "cdn_only",
      customCertificateQuota: "custom_certificate_quota",
      dnsOnly: "dns_only",
      foundationDns: "foundation_dns",
      pageRuleQuota: "page_rule_quota",
      phishingDetected: "phishing_detected",
      step: "step",
    }),
  ),
) as unknown as Schema.Codec<Meta>;

interface Owner {
  /** Identifier */
  id?: string | null;
  /** Name of the owner. */
  name?: string | null;
  /** The type of owner. */
  type?: string | null;
}
const Owner = /*@__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    id: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
    name: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
    type: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
  }),
) as unknown as Schema.Codec<Owner>;

interface Plan {
  /** Identifier */
  id?: string | null;
  /** States if the subscription can be activated. */
  canSubscribe?: boolean | null;
  /** The denomination of the customer. */
  currency?: string | null;
  /** If this Zone is managed by another company. */
  externallyManaged?: boolean | null;
  /** How often the customer is billed. */
  frequency?: string | null;
  /** States if the subscription active. */
  isSubscribed?: boolean | null;
  /** If the legacy discount applies to this Zone. */
  legacyDiscount?: boolean | null;
  /** The legacy name of the plan. */
  legacyId?: string | null;
  /** Name of the owner. */
  name?: string | null;
  /** How much the customer is paying. */
  price?: number | null;
}
const Plan = /*@__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    id: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
    canSubscribe: Schema.optional(Schema.Union([Schema.Boolean, Schema.Null])),
    currency: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
    externallyManaged: Schema.optional(
      Schema.Union([Schema.Boolean, Schema.Null]),
    ),
    frequency: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
    isSubscribed: Schema.optional(Schema.Union([Schema.Boolean, Schema.Null])),
    legacyDiscount: Schema.optional(
      Schema.Union([Schema.Boolean, Schema.Null]),
    ),
    legacyId: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
    name: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
    price: Schema.optional(Schema.Union([Schema.Number, Schema.Null])),
  }).pipe(
    Schema.encodeKeys({
      id: "id",
      canSubscribe: "can_subscribe",
      currency: "currency",
      externallyManaged: "externally_managed",
      frequency: "frequency",
      isSubscribed: "is_subscribed",
      legacyDiscount: "legacy_discount",
      legacyId: "legacy_id",
      name: "name",
      price: "price",
    }),
  ),
) as unknown as Schema.Codec<Plan>;

interface TenantUnit {
  /** Identifier */
  id?: string | null;
}
const TenantUnit = /*@__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    id: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
  }),
) as unknown as Schema.Codec<TenantUnit>;

interface ListZonesResponseResult {
  /** Identifier */
  id: string;
  /** The account the zone belongs to. */
  account: { id?: string | null; name?: string | null };
  /** The last time proof of ownership was detected and the zone was made active. */
  activatedOn: string | null;
  /** When the zone was created. */
  createdOn: string;
  /** The interval (in seconds) from when development mode expires (positive integer) or last expired (negative integer) for the domain. If development mode has never been enabled, this value is 0. */
  developmentMode: number;
  /** Metadata about the zone. */
  meta: {
    cdnOnly?: boolean | null;
    customCertificateQuota?: number | null;
    dnsOnly?: boolean | null;
    foundationDns?: boolean | null;
    pageRuleQuota?: number | null;
    phishingDetected?: boolean | null;
    step?: number | null;
  };
  /** When the zone was last modified. */
  modifiedOn: string;
  /** The domain name. Per [RFC 1035](https://datatracker.ietf.org/doc/html/rfc1035#section-2.3.4) the overall zone name can be up to 253 characters, with each segment ("label") not exceeding 63 characters. */
  name: string;
  /** The name servers Cloudflare assigns to a zone. */
  nameServers: string[];
  /** DNS host at the time of switching to Cloudflare. */
  originalDnshost: string | null;
  /** Original name servers before moving to Cloudflare. */
  originalNameServers: string[] | null;
  /** Registrar for the domain at the time of switching to Cloudflare. */
  originalRegistrar: string | null;
  /** The owner of the zone. */
  owner: { id?: string | null; name?: string | null; type?: string | null };
  /** @deprecated Please use the `/zones/{zone_id}/subscription` API to update a zone's plan. Changing this value will create/cancel associated subscriptions. To view available plans for this zone, see [Zon */
  plan: {
    id?: string | null;
    canSubscribe?: boolean | null;
    currency?: string | null;
    externallyManaged?: boolean | null;
    frequency?: string | null;
    isSubscribed?: boolean | null;
    legacyDiscount?: boolean | null;
    legacyId?: string | null;
    name?: string | null;
    price?: number | null;
  };
  /** Allows the customer to use a custom apex. _Tenants Only Configuration_. */
  cnameSuffix?: string | null;
  /** Indicates whether the zone is only using Cloudflare DNS services. A true value means the zone will not receive security or performance benefits. */
  paused?: boolean | null;
  /** @deprecated This has been replaced by Account memberships. */
  permissions?: string[] | null;
  /** The zone status on Cloudflare. */
  status?:
    | "initializing"
    | "pending"
    | "active"
    | "moved"
    | (string & {})
    | null;
  /** The root organizational unit that this zone belongs to (such as a tenant or organization). */
  tenant?: { id?: string | null; name?: string | null } | null;
  /** The immediate parent organizational unit that this zone belongs to (such as under a tenant or sub-organization). */
  tenantUnit?: { id?: string | null } | null;
  /** A full zone implies that DNS is hosted with Cloudflare. A partial zone is typically a partner-hosted zone or a CNAME setup. */
  type?: "full" | "partial" | "secondary" | "internal" | (string & {}) | null;
  /** An array of domains used for custom name servers. This is only available for Business and Enterprise plans. */
  vanityNameServers?: string[] | null;
  /** Verification key for partial zone setup. */
  verificationKey?: string | null;
}
const ListZonesResponseResult = /*@__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    id: Schema.String,
    account: Account,
    activatedOn: Schema.Union([Schema.String, Schema.Null]),
    createdOn: Schema.String,
    developmentMode: Schema.Number,
    meta: Meta,
    modifiedOn: Schema.String,
    name: Schema.String,
    nameServers: Schema.Array(Schema.String),
    originalDnshost: Schema.Union([Schema.String, Schema.Null]),
    originalNameServers: Schema.Union([
      Schema.Array(Schema.String),
      Schema.Null,
    ]),
    originalRegistrar: Schema.Union([Schema.String, Schema.Null]),
    owner: Owner,
    plan: Plan,
    cnameSuffix: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
    paused: Schema.optional(Schema.Union([Schema.Boolean, Schema.Null])),
    permissions: Schema.optional(
      Schema.Union([Schema.Array(Schema.String), Schema.Null]),
    ),
    status: Schema.optional(
      Schema.Union([
        Schema.Union([
          Schema.Literals(["initializing", "pending", "active", "moved"]),
          Schema.String,
        ]),
        Schema.Null,
      ]),
    ),
    tenant: Schema.optional(Schema.Union([Account, Schema.Null])),
    tenantUnit: Schema.optional(Schema.Union([TenantUnit, Schema.Null])),
    type: Schema.optional(
      Schema.Union([
        Schema.Union([
          Schema.Literals(["full", "partial", "secondary", "internal"]),
          Schema.String,
        ]),
        Schema.Null,
      ]),
    ),
    vanityNameServers: Schema.optional(
      Schema.Union([Schema.Array(Schema.String), Schema.Null]),
    ),
    verificationKey: Schema.optional(
      Schema.Union([Schema.String, Schema.Null]),
    ),
  }).pipe(
    Schema.encodeKeys({
      id: "id",
      account: "account",
      activatedOn: "activated_on",
      createdOn: "created_on",
      developmentMode: "development_mode",
      meta: "meta",
      modifiedOn: "modified_on",
      name: "name",
      nameServers: "name_servers",
      originalDnshost: "original_dnshost",
      originalNameServers: "original_name_servers",
      originalRegistrar: "original_registrar",
      owner: "owner",
      plan: "plan",
      cnameSuffix: "cname_suffix",
      paused: "paused",
      permissions: "permissions",
      status: "status",
      tenant: "tenant",
      tenantUnit: "tenant_unit",
      type: "type",
      vanityNameServers: "vanity_name_servers",
      verificationKey: "verification_key",
    }),
  ),
) as unknown as Schema.Codec<ListZonesResponseResult>;

interface ListZonesResponseResultInfo {
  count?: number | null;
  page?: number | null;
  perPage?: number | null;
  totalCount?: number | null;
}
const ListZonesResponseResultInfo = /*@__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    count: Schema.optional(Schema.Union([Schema.Number, Schema.Null])),
    page: Schema.optional(Schema.Union([Schema.Number, Schema.Null])),
    perPage: Schema.optional(Schema.Union([Schema.Number, Schema.Null])),
    totalCount: Schema.optional(Schema.Union([Schema.Number, Schema.Null])),
  }).pipe(
    Schema.encodeKeys({
      count: "count",
      page: "page",
      perPage: "per_page",
      totalCount: "total_count",
    }),
  ),
) as unknown as Schema.Codec<ListZonesResponseResultInfo>;

// =============================================================================
// ActivationCheck
// =============================================================================

export interface TriggerActivationCheckRequest {
  /** Identifier. */
  zoneId: string;
}

export const TriggerActivationCheckRequest =
  /*@__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      zoneId: Schema.String.pipe(T.HttpPath("zone_id")),
    }).pipe(
      T.Http({ method: "PUT", path: "/zones/{zone_id}/activation_check" }),
    ),
  ) as unknown as Schema.Codec<TriggerActivationCheckRequest>;

export interface TriggerActivationCheckResponse {
  /** Identifier. */
  id?: string | null;
}

export const TriggerActivationCheckResponse =
  /*@__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      id: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
    }).pipe(T.ResponsePath("result")),
  ) as unknown as Schema.Codec<TriggerActivationCheckResponse>;

export type TriggerActivationCheckError = DefaultErrors;

export const triggerActivationCheck: API.OperationMethod<
  TriggerActivationCheckRequest,
  TriggerActivationCheckResponse,
  TriggerActivationCheckError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: TriggerActivationCheckRequest,
  output: TriggerActivationCheckResponse,
  errors: [],
}));

// =============================================================================
// CtAlerting
// =============================================================================

export interface GetCtAlertingRequest {
  /** Identifier. */
  zoneId: string;
}

export const GetCtAlertingRequest = /*@__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    zoneId: Schema.String.pipe(T.HttpPath("zone_id")),
  }).pipe(T.Http({ method: "GET", path: "/zones/{zone_id}/ct/alerting" })),
) as unknown as Schema.Codec<GetCtAlertingRequest>;

export interface GetCtAlertingResponse {
  /** Whether CT alerting is enabled for the zone. */
  enabled: boolean;
  /** Email addresses that receive CT alert notifications. Only present and configurable for Business and Enterprise zones. Maximum of 10 addresses. For Free and Pro zones, notifications are sent to all use */
  emails?: string[] | null;
}

export const GetCtAlertingResponse = /*@__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    enabled: Schema.Boolean,
    emails: Schema.optional(
      Schema.Union([Schema.Array(Schema.String), Schema.Null]),
    ),
  }).pipe(T.ResponsePath("result")),
) as unknown as Schema.Codec<GetCtAlertingResponse>;

export type GetCtAlertingError = DefaultErrors;

export const getCtAlerting: API.OperationMethod<
  GetCtAlertingRequest,
  GetCtAlertingResponse,
  GetCtAlertingError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: GetCtAlertingRequest,
  output: GetCtAlertingResponse,
  errors: [],
}));

export interface PatchCtAlertingRequest {
  /** Path param: Identifier. */
  zoneId: string;
  /** Body param: Whether CT alerting is enabled for the zone. */
  enabled: boolean;
  /** Body param: Email addresses that receive CT alert notifications. Only present and configurable for Business and Enterprise zones. Maximum of 10 addresses. For Free and Pro zones, notifications are sen */
  emails?: string[];
}

export const PatchCtAlertingRequest =
  /*@__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      zoneId: Schema.String.pipe(T.HttpPath("zone_id")),
      enabled: Schema.Boolean,
      emails: Schema.optional(Schema.Array(Schema.String)),
    }).pipe(T.Http({ method: "PATCH", path: "/zones/{zone_id}/ct/alerting" })),
  ) as unknown as Schema.Codec<PatchCtAlertingRequest>;

export interface PatchCtAlertingResponse {
  /** Whether CT alerting is enabled for the zone. */
  enabled: boolean;
  /** Email addresses that receive CT alert notifications. Only present and configurable for Business and Enterprise zones. Maximum of 10 addresses. For Free and Pro zones, notifications are sent to all use */
  emails?: string[] | null;
}

export const PatchCtAlertingResponse =
  /*@__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      enabled: Schema.Boolean,
      emails: Schema.optional(
        Schema.Union([Schema.Array(Schema.String), Schema.Null]),
      ),
    }).pipe(T.ResponsePath("result")),
  ) as unknown as Schema.Codec<PatchCtAlertingResponse>;

export type PatchCtAlertingError = DefaultErrors;

export const patchCtAlerting: API.OperationMethod<
  PatchCtAlertingRequest,
  PatchCtAlertingResponse,
  PatchCtAlertingError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: PatchCtAlertingRequest,
  output: PatchCtAlertingResponse,
  errors: [],
}));

// =============================================================================
// CustomNameserver
// =============================================================================

export interface GetCustomNameserverRequest {
  /** Identifier. */
  zoneId: string;
}

export const GetCustomNameserverRequest =
  /*@__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      zoneId: Schema.String.pipe(T.HttpPath("zone_id")),
    }).pipe(T.Http({ method: "GET", path: "/zones/{zone_id}/custom_ns" })),
  ) as unknown as Schema.Codec<GetCustomNameserverRequest>;

export interface GetCustomNameserverResponse {
  errors?:
    | {
        code: number;
        message: string;
        documentationUrl?: string | null;
        source?: { pointer?: string | null } | null;
      }[]
    | null;
  messages?:
    | {
        code: number;
        message: string;
        documentationUrl?: string | null;
        source?: { pointer?: string | null } | null;
      }[]
    | null;
  /** Whether the API call was successful. */
  success?: true | null;
  /** Whether zone uses account-level custom nameservers. */
  enabled?: boolean | null;
  /** The number of the name server set to assign to the zone. */
  nsSet?: number | null;
  resultInfo?: {
    count?: number | null;
    page?: number | null;
    perPage?: number | null;
    totalCount?: number | null;
    totalPages?: number | null;
  } | null;
}

export const GetCustomNameserverResponse =
  /*@__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      errors: Schema.optional(
        Schema.Union([Schema.Array(Error2), Schema.Null]),
      ),
      messages: Schema.optional(
        Schema.Union([Schema.Array(Error2), Schema.Null]),
      ),
      success: Schema.optional(
        Schema.Union([Schema.Literal(true), Schema.Null]),
      ),
      enabled: Schema.optional(Schema.Union([Schema.Boolean, Schema.Null])),
      nsSet: Schema.optional(Schema.Union([Schema.Number, Schema.Null])),
      resultInfo: Schema.optional(Schema.Union([ResultInfo, Schema.Null])),
    })
      .pipe(
        Schema.encodeKeys({
          errors: "errors",
          messages: "messages",
          success: "success",
          enabled: "enabled",
          nsSet: "ns_set",
          resultInfo: "result_info",
        }),
      )
      .pipe(T.ResponsePath("result")),
  ) as unknown as Schema.Codec<GetCustomNameserverResponse>;

export type GetCustomNameserverError =
  | DefaultErrors
  | InvalidZoneIdentifier
  | Forbidden;

export const getCustomNameserver: API.OperationMethod<
  GetCustomNameserverRequest,
  GetCustomNameserverResponse,
  GetCustomNameserverError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: GetCustomNameserverRequest,
  output: GetCustomNameserverResponse,
  errors: [InvalidZoneIdentifier, Forbidden],
}));

export interface PutCustomNameserverRequest {
  /** Path param: Identifier. */
  zoneId: string;
  /** Body param: Whether zone uses account-level custom nameservers. */
  enabled?: boolean;
  /** Body param: The number of the name server set to assign to the zone. */
  nsSet?: number;
}

export const PutCustomNameserverRequest =
  /*@__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      zoneId: Schema.String.pipe(T.HttpPath("zone_id")),
      enabled: Schema.optional(Schema.Boolean),
      nsSet: Schema.optional(Schema.Number),
    }).pipe(
      Schema.encodeKeys({ enabled: "enabled", nsSet: "ns_set" }),
      T.Http({ method: "PUT", path: "/zones/{zone_id}/custom_ns" }),
    ),
  ) as unknown as Schema.Codec<PutCustomNameserverRequest>;

export interface PutCustomNameserverResponse {
  result: unknown;
}

export const PutCustomNameserverResponse =
  /*@__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      result: Schema.Unknown,
    }),
  ) as unknown as Schema.Codec<PutCustomNameserverResponse>;

export type PutCustomNameserverError =
  | DefaultErrors
  | InvalidZoneIdentifier
  | CustomNameserverSetNotFound
  | Forbidden;

export const putCustomNameserver: API.PaginatedOperationMethod<
  PutCustomNameserverRequest,
  PutCustomNameserverResponse,
  PutCustomNameserverError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: PutCustomNameserverRequest,
  output: PutCustomNameserverResponse,
  errors: [InvalidZoneIdentifier, CustomNameserverSetNotFound, Forbidden],
  pagination: {
    mode: "single",
    items: "result",
  } as const,
}));

// =============================================================================
// Environment
// =============================================================================

export interface ListEnvironmentsRequest {
  /** Identifier of the zone. */
  zoneId: string;
}

export const ListEnvironmentsRequest =
  /*@__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      zoneId: Schema.String.pipe(T.HttpPath("zone_id")),
    }).pipe(T.Http({ method: "GET", path: "/zones/{zone_id}/environments" })),
  ) as unknown as Schema.Codec<ListEnvironmentsRequest>;

export interface ListEnvironmentsResponse {
  environments: {
    expression: string;
    lockedOnDeployment: boolean | null;
    name: string;
    position: { after?: string | null; before?: string | null };
    ref: string;
    version: number | null;
    httpApplicationId?: string | null;
  }[];
}

export const ListEnvironmentsResponse =
  /*@__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      environments: Schema.Array(Environment),
    }).pipe(T.ResponsePath("result")),
  ) as unknown as Schema.Codec<ListEnvironmentsResponse>;

export type ListEnvironmentsError = DefaultErrors;

export const listEnvironments: API.OperationMethod<
  ListEnvironmentsRequest,
  ListEnvironmentsResponse,
  ListEnvironmentsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: ListEnvironmentsRequest,
  output: ListEnvironmentsResponse,
  errors: [],
}));

export interface CreateEnvironmentRequest {
  /** Path param: Identifier of the zone. */
  zoneId: string;
  /** Body param */
  environments: {
    expression: string;
    lockedOnDeployment: boolean | null;
    name: string;
    position: { after?: string; before?: string };
    ref: string;
    version: number | null;
    httpApplicationId?: string | null;
  }[];
}

export const CreateEnvironmentRequest =
  /*@__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      zoneId: Schema.String.pipe(T.HttpPath("zone_id")),
      environments: Schema.Array(Environment),
    }).pipe(T.Http({ method: "POST", path: "/zones/{zone_id}/environments" })),
  ) as unknown as Schema.Codec<CreateEnvironmentRequest>;

export interface CreateEnvironmentResponse {
  environments: {
    expression: string;
    lockedOnDeployment: boolean | null;
    name: string;
    position: { after?: string | null; before?: string | null };
    ref: string;
    version: number | null;
    httpApplicationId?: string | null;
  }[];
}

export const CreateEnvironmentResponse =
  /*@__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      environments: Schema.Array(Environment),
    }).pipe(T.ResponsePath("result")),
  ) as unknown as Schema.Codec<CreateEnvironmentResponse>;

export type CreateEnvironmentError = DefaultErrors;

export const createEnvironment: API.OperationMethod<
  CreateEnvironmentRequest,
  CreateEnvironmentResponse,
  CreateEnvironmentError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: CreateEnvironmentRequest,
  output: CreateEnvironmentResponse,
  errors: [],
}));

export interface UpdateEnvironmentRequest {
  /** Path param: Identifier of the zone. */
  zoneId: string;
  /** Body param */
  environments: {
    expression: string;
    lockedOnDeployment: boolean | null;
    name: string;
    position: { after?: string; before?: string };
    ref: string;
    version: number | null;
    httpApplicationId?: string | null;
  }[];
}

export const UpdateEnvironmentRequest =
  /*@__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      zoneId: Schema.String.pipe(T.HttpPath("zone_id")),
      environments: Schema.Array(Environment),
    }).pipe(T.Http({ method: "PUT", path: "/zones/{zone_id}/environments" })),
  ) as unknown as Schema.Codec<UpdateEnvironmentRequest>;

export interface UpdateEnvironmentResponse {
  environments: {
    expression: string;
    lockedOnDeployment: boolean | null;
    name: string;
    position: { after?: string | null; before?: string | null };
    ref: string;
    version: number | null;
    httpApplicationId?: string | null;
  }[];
}

export const UpdateEnvironmentResponse =
  /*@__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      environments: Schema.Array(Environment),
    }).pipe(T.ResponsePath("result")),
  ) as unknown as Schema.Codec<UpdateEnvironmentResponse>;

export type UpdateEnvironmentError = DefaultErrors;

export const updateEnvironment: API.OperationMethod<
  UpdateEnvironmentRequest,
  UpdateEnvironmentResponse,
  UpdateEnvironmentError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: UpdateEnvironmentRequest,
  output: UpdateEnvironmentResponse,
  errors: [],
}));

export interface PatchEnvironmentRequest {
  /** Path param: Identifier of the zone. */
  zoneId: string;
  /** Body param */
  environments: {
    expression: string;
    lockedOnDeployment: boolean | null;
    name: string;
    position: { after?: string; before?: string };
    ref: string;
    version: number | null;
    httpApplicationId?: string | null;
  }[];
}

export const PatchEnvironmentRequest =
  /*@__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      zoneId: Schema.String.pipe(T.HttpPath("zone_id")),
      environments: Schema.Array(Environment),
    }).pipe(T.Http({ method: "PATCH", path: "/zones/{zone_id}/environments" })),
  ) as unknown as Schema.Codec<PatchEnvironmentRequest>;

export interface PatchEnvironmentResponse {
  environments: {
    expression: string;
    lockedOnDeployment: boolean | null;
    name: string;
    position: { after?: string | null; before?: string | null };
    ref: string;
    version: number | null;
    httpApplicationId?: string | null;
  }[];
}

export const PatchEnvironmentResponse =
  /*@__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      environments: Schema.Array(Environment),
    }).pipe(T.ResponsePath("result")),
  ) as unknown as Schema.Codec<PatchEnvironmentResponse>;

export type PatchEnvironmentError = DefaultErrors;

export const patchEnvironment: API.OperationMethod<
  PatchEnvironmentRequest,
  PatchEnvironmentResponse,
  PatchEnvironmentError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: PatchEnvironmentRequest,
  output: PatchEnvironmentResponse,
  errors: [],
}));

export interface DeleteEnvironmentRequest {
  environmentId: string;
  /** Identifier of the zone. */
  zoneId: string;
}

export const DeleteEnvironmentRequest =
  /*@__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      environmentId: Schema.String.pipe(T.HttpPath("environmentId")),
      zoneId: Schema.String.pipe(T.HttpPath("zone_id")),
    }).pipe(
      T.Http({
        method: "DELETE",
        path: "/zones/{zone_id}/environments/{environmentId}",
      }),
    ),
  ) as unknown as Schema.Codec<DeleteEnvironmentRequest>;

export interface DeleteEnvironmentResponse {
  environments: {
    expression: string;
    lockedOnDeployment: boolean | null;
    name: string;
    position: { after?: string | null; before?: string | null };
    ref: string;
    version: number | null;
    httpApplicationId?: string | null;
  }[];
}

export const DeleteEnvironmentResponse =
  /*@__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      environments: Schema.Array(Environment),
    }).pipe(T.ResponsePath("result")),
  ) as unknown as Schema.Codec<DeleteEnvironmentResponse>;

export type DeleteEnvironmentError = DefaultErrors;

export const deleteEnvironment: API.OperationMethod<
  DeleteEnvironmentRequest,
  DeleteEnvironmentResponse,
  DeleteEnvironmentError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: DeleteEnvironmentRequest,
  output: DeleteEnvironmentResponse,
  errors: [],
}));

export interface RollbackEnvironmentRequest {
  environmentId: string;
  /** Identifier of the zone. */
  zoneId: string;
}

export const RollbackEnvironmentRequest =
  /*@__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      environmentId: Schema.String.pipe(T.HttpPath("environmentId")),
      zoneId: Schema.String.pipe(T.HttpPath("zone_id")),
    }).pipe(
      T.Http({
        method: "POST",
        path: "/zones/{zone_id}/environments/{environmentId}/rollback",
      }),
    ),
  ) as unknown as Schema.Codec<RollbackEnvironmentRequest>;

export interface RollbackEnvironmentResponse {
  environments: {
    expression: string;
    lockedOnDeployment: boolean | null;
    name: string;
    position: { after?: string | null; before?: string | null };
    ref: string;
    version: number | null;
    httpApplicationId?: string | null;
  }[];
}

export const RollbackEnvironmentResponse =
  /*@__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      environments: Schema.Array(Environment),
    }).pipe(T.ResponsePath("result")),
  ) as unknown as Schema.Codec<RollbackEnvironmentResponse>;

export type RollbackEnvironmentError = DefaultErrors;

export const rollbackEnvironment: API.OperationMethod<
  RollbackEnvironmentRequest,
  RollbackEnvironmentResponse,
  RollbackEnvironmentError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: RollbackEnvironmentRequest,
  output: RollbackEnvironmentResponse,
  errors: [],
}));

// =============================================================================
// Hold
// =============================================================================

export interface GetHoldRequest {
  /** Identifier. */
  zoneId: string;
}

export const GetHoldRequest = /*@__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    zoneId: Schema.String.pipe(T.HttpPath("zone_id")),
  }).pipe(T.Http({ method: "GET", path: "/zones/{zone_id}/hold" })),
) as unknown as Schema.Codec<GetHoldRequest>;

export interface GetHoldResponse {
  hold?: boolean | null;
  holdAfter?: string | null;
  includeSubdomains?: unknown | null;
}

export const GetHoldResponse = /*@__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    hold: Schema.optional(Schema.Union([Schema.Boolean, Schema.Null])),
    holdAfter: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
    includeSubdomains: Schema.optional(
      Schema.Union([Schema.Unknown, Schema.Null]),
    ),
  })
    .pipe(
      Schema.encodeKeys({
        hold: "hold",
        holdAfter: "hold_after",
        includeSubdomains: "include_subdomains",
      }),
    )
    .pipe(T.ResponsePath("result")),
) as unknown as Schema.Codec<GetHoldResponse>;

export type GetHoldError = DefaultErrors | InvalidZoneIdentifier | Forbidden;

export const getHold: API.OperationMethod<
  GetHoldRequest,
  GetHoldResponse,
  GetHoldError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: GetHoldRequest,
  output: GetHoldResponse,
  errors: [InvalidZoneIdentifier, Forbidden],
}));

export interface CreateHoldRequest {
  /** Path param: Identifier. */
  zoneId: string;
  /** Query param: If provided, the zone hold will extend to block any subdomain of the given zone, as well as SSL4SaaS Custom Hostnames. For example, a zone hold on a zone with the hostname 'example.com' a */
  includeSubdomains?: boolean;
}

export const CreateHoldRequest = /*@__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    zoneId: Schema.String.pipe(T.HttpPath("zone_id")),
    includeSubdomains: Schema.optional(Schema.Boolean).pipe(
      T.HttpQuery("include_subdomains"),
    ),
  }).pipe(T.Http({ method: "POST", path: "/zones/{zone_id}/hold" })),
) as unknown as Schema.Codec<CreateHoldRequest>;

export interface CreateHoldResponse {
  hold?: boolean | null;
  holdAfter?: string | null;
  includeSubdomains?: unknown | null;
}

export const CreateHoldResponse = /*@__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    hold: Schema.optional(Schema.Union([Schema.Boolean, Schema.Null])),
    holdAfter: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
    includeSubdomains: Schema.optional(
      Schema.Union([Schema.Unknown, Schema.Null]),
    ),
  })
    .pipe(
      Schema.encodeKeys({
        hold: "hold",
        holdAfter: "hold_after",
        includeSubdomains: "include_subdomains",
      }),
    )
    .pipe(T.ResponsePath("result")),
) as unknown as Schema.Codec<CreateHoldResponse>;

export type CreateHoldError =
  | DefaultErrors
  | ZoneHoldsRequireEnterprise
  | InvalidZoneIdentifier
  | Forbidden;

export const createHold: API.OperationMethod<
  CreateHoldRequest,
  CreateHoldResponse,
  CreateHoldError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: CreateHoldRequest,
  output: CreateHoldResponse,
  errors: [ZoneHoldsRequireEnterprise, InvalidZoneIdentifier, Forbidden],
}));

export interface PatchHoldRequest {
  /** Path param: Identifier. */
  zoneId: string;
  /** Body param: If `hold_after` is provided and future-dated, the hold will be temporarily disabled, then automatically re-enabled by the system at the time specified in this RFC3339-formatted timestamp.  */
  holdAfter?: string | null;
  /** Body param: If `true`, the zone hold will extend to block any subdomain of the given zone, as well as SSL4SaaS Custom Hostnames. For example, a zone hold on a zone with the hostname 'example.com' and  */
  includeSubdomains?: boolean;
}

export const PatchHoldRequest = /*@__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    zoneId: Schema.String.pipe(T.HttpPath("zone_id")),
    holdAfter: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
    includeSubdomains: Schema.optional(Schema.Boolean),
  }).pipe(
    Schema.encodeKeys({
      holdAfter: "hold_after",
      includeSubdomains: "include_subdomains",
    }),
    T.Http({ method: "PATCH", path: "/zones/{zone_id}/hold" }),
  ),
) as unknown as Schema.Codec<PatchHoldRequest>;

export interface PatchHoldResponse {
  hold?: boolean | null;
  holdAfter?: string | null;
  includeSubdomains?: unknown | null;
}

export const PatchHoldResponse = /*@__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    hold: Schema.optional(Schema.Union([Schema.Boolean, Schema.Null])),
    holdAfter: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
    includeSubdomains: Schema.optional(
      Schema.Union([Schema.Unknown, Schema.Null]),
    ),
  })
    .pipe(
      Schema.encodeKeys({
        hold: "hold",
        holdAfter: "hold_after",
        includeSubdomains: "include_subdomains",
      }),
    )
    .pipe(T.ResponsePath("result")),
) as unknown as Schema.Codec<PatchHoldResponse>;

export type PatchHoldError =
  | DefaultErrors
  | ZoneHoldNotFound
  | ZoneHoldsRequireEnterprise
  | InvalidZoneIdentifier
  | Forbidden;

export const patchHold: API.OperationMethod<
  PatchHoldRequest,
  PatchHoldResponse,
  PatchHoldError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: PatchHoldRequest,
  output: PatchHoldResponse,
  errors: [
    ZoneHoldNotFound,
    ZoneHoldsRequireEnterprise,
    InvalidZoneIdentifier,
    Forbidden,
  ],
}));

export interface DeleteHoldRequest {
  /** Path param: Identifier. */
  zoneId: string;
  /** Query param: If `hold_after` is provided, the hold will be temporarily disabled, then automatically re-enabled by the system at the time specified in this RFC3339-formatted timestamp. Otherwise, the h */
  holdAfter?: string;
}

export const DeleteHoldRequest = /*@__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    zoneId: Schema.String.pipe(T.HttpPath("zone_id")),
    holdAfter: Schema.optional(Schema.String).pipe(T.HttpQuery("hold_after")),
  }).pipe(T.Http({ method: "DELETE", path: "/zones/{zone_id}/hold" })),
) as unknown as Schema.Codec<DeleteHoldRequest>;

export interface DeleteHoldResponse {
  hold?: boolean | null;
  holdAfter?: string | null;
  includeSubdomains?: unknown | null;
}

export const DeleteHoldResponse = /*@__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    hold: Schema.optional(Schema.Union([Schema.Boolean, Schema.Null])),
    holdAfter: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
    includeSubdomains: Schema.optional(
      Schema.Union([Schema.Unknown, Schema.Null]),
    ),
  })
    .pipe(
      Schema.encodeKeys({
        hold: "hold",
        holdAfter: "hold_after",
        includeSubdomains: "include_subdomains",
      }),
    )
    .pipe(T.ResponsePath("result")),
) as unknown as Schema.Codec<DeleteHoldResponse>;

export type DeleteHoldError = DefaultErrors | InvalidZoneIdentifier | Forbidden;

export const deleteHold: API.OperationMethod<
  DeleteHoldRequest,
  DeleteHoldResponse,
  DeleteHoldError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: DeleteHoldRequest,
  output: DeleteHoldResponse,
  errors: [InvalidZoneIdentifier, Forbidden],
}));

// =============================================================================
// Plan
// =============================================================================

export interface GetPlanRequest {
  planIdentifier: string;
  /** Identifier */
  zoneId: string;
}

export const GetPlanRequest = /*@__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    planIdentifier: Schema.String.pipe(T.HttpPath("planIdentifier")),
    zoneId: Schema.String.pipe(T.HttpPath("zone_id")),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/zones/{zone_id}/available_plans/{planIdentifier}",
    }),
  ),
) as unknown as Schema.Codec<GetPlanRequest>;

export interface GetPlanResponse {
  /** Identifier */
  id?: string | null;
  /** Indicates whether you can subscribe to this plan. */
  canSubscribe?: boolean | null;
  /** The monetary unit in which pricing information is displayed. */
  currency?: string | null;
  /** Indicates whether this plan is managed externally. */
  externallyManaged?: boolean | null;
  /** The frequency at which you will be billed for this plan. */
  frequency?:
    | "weekly"
    | "monthly"
    | "quarterly"
    | "yearly"
    | (string & {})
    | null;
  /** Indicates whether you are currently subscribed to this plan. */
  isSubscribed?: boolean | null;
  /** Indicates whether this plan has a legacy discount applied. */
  legacyDiscount?: boolean | null;
  /** The legacy identifier for this rate plan, if any. */
  legacyId?: string | null;
  /** The plan name. */
  name?: string | null;
  /** The amount you will be billed for this plan. */
  price?: number | null;
}

export const GetPlanResponse = /*@__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    id: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
    canSubscribe: Schema.optional(Schema.Union([Schema.Boolean, Schema.Null])),
    currency: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
    externallyManaged: Schema.optional(
      Schema.Union([Schema.Boolean, Schema.Null]),
    ),
    frequency: Schema.optional(
      Schema.Union([
        Schema.Union([
          Schema.Literals(["weekly", "monthly", "quarterly", "yearly"]),
          Schema.String,
        ]),
        Schema.Null,
      ]),
    ),
    isSubscribed: Schema.optional(Schema.Union([Schema.Boolean, Schema.Null])),
    legacyDiscount: Schema.optional(
      Schema.Union([Schema.Boolean, Schema.Null]),
    ),
    legacyId: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
    name: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
    price: Schema.optional(Schema.Union([Schema.Number, Schema.Null])),
  })
    .pipe(
      Schema.encodeKeys({
        id: "id",
        canSubscribe: "can_subscribe",
        currency: "currency",
        externallyManaged: "externally_managed",
        frequency: "frequency",
        isSubscribed: "is_subscribed",
        legacyDiscount: "legacy_discount",
        legacyId: "legacy_id",
        name: "name",
        price: "price",
      }),
    )
    .pipe(T.ResponsePath("result")),
) as unknown as Schema.Codec<GetPlanResponse>;

export type GetPlanError = DefaultErrors;

export const getPlan: API.OperationMethod<
  GetPlanRequest,
  GetPlanResponse,
  GetPlanError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: GetPlanRequest,
  output: GetPlanResponse,
  errors: [],
}));

export interface ListPlansRequest {
  /** Identifier */
  zoneId: string;
}

export const ListPlansRequest = /*@__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    zoneId: Schema.String.pipe(T.HttpPath("zone_id")),
  }).pipe(T.Http({ method: "GET", path: "/zones/{zone_id}/available_plans" })),
) as unknown as Schema.Codec<ListPlansRequest>;

export interface ListPlansResponse {
  result: {
    id?: string | null;
    canSubscribe?: boolean | null;
    currency?: string | null;
    externallyManaged?: boolean | null;
    frequency?:
      | "weekly"
      | "monthly"
      | "quarterly"
      | "yearly"
      | (string & {})
      | null;
    isSubscribed?: boolean | null;
    legacyDiscount?: boolean | null;
    legacyId?: string | null;
    name?: string | null;
    price?: number | null;
  }[];
}

export const ListPlansResponse = /*@__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    result: Schema.Array(ListPlansResponseResult),
  }),
) as unknown as Schema.Codec<ListPlansResponse>;

export type ListPlansError = DefaultErrors;

export const listPlans: API.PaginatedOperationMethod<
  ListPlansRequest,
  ListPlansResponse,
  ListPlansError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: ListPlansRequest,
  output: ListPlansResponse,
  errors: [],
  pagination: {
    mode: "single",
    items: "result",
  } as const,
}));

// =============================================================================
// RatePlan
// =============================================================================

export interface GetRatePlanRequest {
  /** Identifier */
  zoneId: string;
}

export const GetRatePlanRequest = /*@__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    zoneId: Schema.String.pipe(T.HttpPath("zone_id")),
  }).pipe(
    T.Http({ method: "GET", path: "/zones/{zone_id}/available_rate_plans" }),
  ),
) as unknown as Schema.Codec<GetRatePlanRequest>;

export interface GetRatePlanResponse {
  result: {
    id?: string | null;
    components?:
      | {
          default?: number | null;
          name?:
            | "zones"
            | "page_rules"
            | "dedicated_certificates"
            | "dedicated_certificates_custom"
            | (string & {})
            | null;
          unitPrice?: number | null;
        }[]
      | null;
    currency?: string | null;
    duration?: number | null;
    frequency?:
      | "weekly"
      | "monthly"
      | "quarterly"
      | "yearly"
      | (string & {})
      | null;
    name?: string | null;
  }[];
}

export const GetRatePlanResponse = /*@__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    result: Schema.Array(GetRatePlanResponseResult),
  }),
) as unknown as Schema.Codec<GetRatePlanResponse>;

export type GetRatePlanError = DefaultErrors;

export const getRatePlan: API.PaginatedOperationMethod<
  GetRatePlanRequest,
  GetRatePlanResponse,
  GetRatePlanError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: GetRatePlanRequest,
  output: GetRatePlanResponse,
  errors: [],
  pagination: {
    mode: "single",
    items: "result",
  } as const,
}));

// =============================================================================
// Setting
// =============================================================================

export interface GetSettingRequest {
  settingId: string;
  /** Identifier */
  zoneId: string;
}

export const GetSettingRequest = /*@__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    settingId: Schema.String.pipe(T.HttpPath("settingId")),
    zoneId: Schema.String.pipe(T.HttpPath("zone_id")),
  }).pipe(
    T.Http({ method: "GET", path: "/zones/{zone_id}/settings/{settingId}" }),
  ),
) as unknown as Schema.Codec<GetSettingRequest>;

export type GetSettingResponse =
  | {
      id: "0rtt";
      value: "on" | "off" | (string & {});
      editable?: boolean | null;
      modifiedOn?: string | null;
    }
  | {
      id: "advanced_ddos";
      value: "on" | "off" | (string & {});
      editable?: boolean | null;
      modifiedOn?: string | null;
    }
  | {
      id: "aegis";
      modifiedOn?: string | null;
      value?: { enabled?: boolean | null; poolId?: string | null } | null;
    }
  | {
      id: "always_online";
      value: "on" | "off" | (string & {});
      editable?: boolean | null;
      modifiedOn?: string | null;
    }
  | {
      id: "always_use_https";
      value: "on" | "off" | (string & {});
      editable?: boolean | null;
      modifiedOn?: string | null;
    }
  | {
      id: "automatic_https_rewrites";
      value: "on" | "off" | (string & {});
      editable?: boolean | null;
      modifiedOn?: string | null;
    }
  | {
      id: "brotli";
      value: "off" | "on" | (string & {});
      editable?: boolean | null;
      modifiedOn?: string | null;
    }
  | {
      id: "browser_cache_ttl";
      value: number;
      editable?: boolean | null;
      modifiedOn?: string | null;
    }
  | {
      id: "browser_check";
      value: "on" | "off" | (string & {});
      editable?: boolean | null;
      modifiedOn?: string | null;
    }
  | {
      id: "cache_level";
      value: "aggressive" | "basic" | "simplified" | (string & {});
      editable?: boolean | null;
      modifiedOn?: string | null;
    }
  | {
      id: "challenge_ttl";
      value:
        | "300"
        | "900"
        | "1800"
        | "2700"
        | "3600"
        | "7200"
        | "10800"
        | "14400"
        | "28800"
        | "57600"
        | "86400"
        | "604800"
        | "2592000"
        | "31536000"
        | (string & {});
      editable?: boolean | null;
      modifiedOn?: string | null;
    }
  | {
      id: "china_network_enabled";
      value: "on" | "off" | (string & {});
      editable?: boolean | null;
      modifiedOn?: string | null;
    }
  | {
      id: "content_converter";
      value: "off" | "on" | (string & {});
      editable?: boolean | null;
      modifiedOn?: string | null;
    }
  | {
      id: "ciphers";
      value: string[];
      editable?: boolean | null;
      modifiedOn?: string | null;
    }
  | {
      id: "cname_flattening";
      value: "flatten_at_root" | "flatten_all" | (string & {});
      editable?: boolean | null;
      modifiedOn?: string | null;
    }
  | {
      id: "development_mode";
      value: "on" | "off" | (string & {});
      editable?: boolean | null;
      modifiedOn?: string | null;
      timeRemaining?: number | null;
    }
  | {
      id: "early_hints";
      value: "on" | "off" | (string & {});
      editable?: boolean | null;
      modifiedOn?: string | null;
    }
  | {
      id: "edge_cache_ttl";
      value:
        | "30"
        | "60"
        | "300"
        | "1200"
        | "1800"
        | "3600"
        | "7200"
        | "10800"
        | "14400"
        | "18000"
        | "28800"
        | "43200"
        | "57600"
        | "72000"
        | "86400"
        | "172800"
        | "259200"
        | "345600"
        | "432000"
        | "518400"
        | "604800"
        | (string & {});
      editable?: boolean | null;
      modifiedOn?: string | null;
    }
  | {
      id: "email_obfuscation";
      value: "on" | "off" | (string & {});
      editable?: boolean | null;
      modifiedOn?: string | null;
    }
  | {
      id: "h2_prioritization";
      value: "on" | "off" | "custom" | (string & {});
      editable?: boolean | null;
      modifiedOn?: string | null;
    }
  | {
      id: "hotlink_protection";
      value: "on" | "off" | (string & {});
      editable?: boolean | null;
      modifiedOn?: string | null;
    }
  | {
      id: "http2";
      value: "on" | "off" | (string & {});
      editable?: boolean | null;
      modifiedOn?: string | null;
    }
  | {
      id: "http3";
      value: "on" | "off" | (string & {});
      editable?: boolean | null;
      modifiedOn?: string | null;
    }
  | {
      id: "image_resizing";
      value: "on" | "off" | "open" | (string & {});
      editable?: boolean | null;
      modifiedOn?: string | null;
    }
  | {
      id: "ip_geolocation";
      value: "on" | "off" | (string & {});
      editable?: boolean | null;
      modifiedOn?: string | null;
    }
  | {
      id: "ipv6";
      value: "off" | "on" | (string & {});
      editable?: boolean | null;
      modifiedOn?: string | null;
    }
  | {
      id: "max_upload";
      value:
        | "100"
        | "125"
        | "150"
        | "175"
        | "200"
        | "225"
        | "250"
        | "275"
        | "300"
        | "325"
        | "350"
        | "375"
        | "400"
        | "425"
        | "450"
        | "475"
        | "500"
        | "1000"
        | (string & {});
      editable?: boolean | null;
      modifiedOn?: string | null;
    }
  | {
      id: "min_tls_version";
      value: "1.0" | "1.1" | "1.2" | "1.3" | (string & {});
      editable?: boolean | null;
      modifiedOn?: string | null;
    }
  | {
      id: "mirage";
      value: "on" | "off" | (string & {});
      editable?: boolean | null;
      modifiedOn?: string | null;
    }
  | {
      id: "nel";
      value: { enabled?: boolean | null };
      editable?: boolean | null;
      modifiedOn?: string | null;
    }
  | {
      id: "opportunistic_encryption";
      value: "on" | "off" | (string & {});
      editable?: boolean | null;
      modifiedOn?: string | null;
    }
  | {
      id: "opportunistic_onion";
      value: "on" | "off" | (string & {});
      editable?: boolean | null;
      modifiedOn?: string | null;
    }
  | {
      id: "orange_to_orange";
      value: "on" | "off" | (string & {});
      editable?: boolean | null;
      modifiedOn?: string | null;
    }
  | {
      id: "origin_error_page_pass_thru";
      value: "on" | "off" | (string & {});
      editable?: boolean | null;
      modifiedOn?: string | null;
    }
  | {
      id: "origin_h2_max_streams";
      modifiedOn?: string | null;
      value?: number | null;
    }
  | {
      id: "origin_max_http_version";
      modifiedOn?: string | null;
      value?: "2" | "1" | (string & {}) | null;
    }
  | {
      id: "polish";
      value: "off" | "lossless" | "lossy" | (string & {});
      editable?: boolean | null;
      modifiedOn?: string | null;
    }
  | {
      id: "prefetch_preload";
      value: "on" | "off" | (string & {});
      editable?: boolean | null;
      modifiedOn?: string | null;
    }
  | {
      id: "privacy_pass";
      value: "on" | "off" | (string & {});
      editable?: boolean | null;
      modifiedOn?: string | null;
    }
  | {
      id: "proxy_read_timeout";
      value: number;
      editable?: boolean | null;
      modifiedOn?: string | null;
    }
  | {
      id: "pseudo_ipv4";
      value: "off" | "add_header" | "overwrite_header" | (string & {});
      editable?: boolean | null;
      modifiedOn?: string | null;
    }
  | {
      id: "redirects_for_ai_training";
      value: "off" | "on" | (string & {});
      editable?: boolean | null;
      modifiedOn?: string | null;
    }
  | {
      id: "replace_insecure_js";
      value: "on" | "off" | (string & {});
      editable?: boolean | null;
      modifiedOn?: string | null;
    }
  | {
      id: "response_buffering";
      value: "on" | "off" | (string & {});
      editable?: boolean | null;
      modifiedOn?: string | null;
    }
  | {
      id: "rocket_loader";
      value: "on" | "off" | (string & {});
      editable?: boolean | null;
      modifiedOn?: string | null;
    }
  | {
      id: "automatic_platform_optimization";
      value: {
        cacheByDeviceType: boolean;
        cf: boolean;
        enabled: boolean;
        hostnames: string[];
        wordpress: boolean;
        wpPlugin: boolean;
      };
      editable?: boolean | null;
      modifiedOn?: string | null;
    }
  | {
      id: "search_for_agents";
      value: "off" | "on" | (string & {});
      editable?: boolean | null;
      modifiedOn?: string | null;
    }
  | {
      id: "security_header";
      value: {
        strictTransportSecurity?: {
          enabled?: boolean | null;
          includeSubdomains?: boolean | null;
          maxAge?: number | null;
          nosniff?: boolean | null;
          preload?: boolean | null;
        } | null;
      };
      editable?: boolean | null;
      modifiedOn?: string | null;
    }
  | {
      id: "security_level";
      value:
        | "off"
        | "essentially_off"
        | "low"
        | "medium"
        | "high"
        | "under_attack"
        | (string & {});
      editable?: boolean | null;
      modifiedOn?: string | null;
    }
  | {
      id: "server_side_exclude";
      value: "on" | "off" | (string & {});
      editable?: boolean | null;
      modifiedOn?: string | null;
    }
  | {
      id: "sha1_support";
      value: "off" | "on" | (string & {});
      editable?: boolean | null;
      modifiedOn?: string | null;
    }
  | {
      id: "sort_query_string_for_cache";
      value: "on" | "off" | (string & {});
      editable?: boolean | null;
      modifiedOn?: string | null;
    }
  | {
      id: "ssl";
      value: "off" | "flexible" | "full" | "strict" | (string & {});
      editable?: boolean | null;
      modifiedOn?: string | null;
    }
  | { id?: "ssl_recommender" | null; enabled?: boolean | null }
  | {
      id: "tls_1_2_only";
      value: "off" | "on" | (string & {});
      editable?: boolean | null;
      modifiedOn?: string | null;
    }
  | {
      id: "tls_1_3";
      value: "on" | "off" | "zrt" | (string & {});
      editable?: boolean | null;
      modifiedOn?: string | null;
    }
  | {
      id: "tls_client_auth";
      value: "on" | "off" | (string & {});
      editable?: boolean | null;
      modifiedOn?: string | null;
    }
  | {
      id: "transformations";
      value: "on" | "off" | "open" | (string & {});
      editable?: boolean | null;
      modifiedOn?: string | null;
    }
  | {
      id: "transformations_allowed_origins";
      value: string;
      editable?: boolean | null;
      modifiedOn?: string | null;
    }
  | {
      id: "true_client_ip_header";
      value: "on" | "off" | (string & {});
      editable?: boolean | null;
      modifiedOn?: string | null;
    }
  | {
      id: "waf";
      value: "on" | "off" | (string & {});
      editable?: boolean | null;
      modifiedOn?: string | null;
    }
  | {
      id: "webp";
      value: "off" | "on" | (string & {});
      editable?: boolean | null;
      modifiedOn?: string | null;
    }
  | {
      id: "websockets";
      value: "off" | "on" | (string & {});
      editable?: boolean | null;
      modifiedOn?: string | null;
    };

export const GetSettingResponse = /*@__PURE__*/ Schema.suspend(() =>
  Schema.Union([
    ZeroRTT,
    AdvancedDDoS,
    AlwaysOnline,
    ZonesSchemasAlwaysUseHTTPS,
    ZonesSchemasAutomaticHTTPSRewrites,
    Brotli,
    ZonesSchemasBrowserCacheTTL,
    ZonesSchemasBrowserCheck,
    ZonesSchemasCacheLevel,
    ChallengeTTL,
    ZonesChinaNetworkEnabled,
    ZonesContentConverter,
    Ciphers,
    ZonesCNAMEFlattening,
    DevelopmentMode,
    EarlyHints,
    ZonesSchemasEdgeCacheTTL,
    ZonesSchemasEmailObfuscation,
    H2Prioritization,
    HotlinkProtection,
    Http2,
    Http3,
    ImageResizing,
    ZonesSchemasIPGeolocation,
    Ipv6,
    ZonesMaxUpload,
    MinTLSVersion,
    ZonesSchemasMirage,
    Nel,
    ZonesSchemasOpportunisticEncryption,
    OpportunisticOnion,
    OrangeToOrange,
    ZonesSchemasOriginErrorPagePassThru,
    ZonesSchemasPolish,
    PrefetchPreload,
    ZonesPrivacyPass,
    ProxyReadTimeout,
    PseudoIPV4,
    ZonesRedirectsForAITraining,
    ZonesReplaceInsecureJS,
    ZonesSchemasResponseBuffering,
    ZonesSchemasRocketLoader,
    ZonesSchemasAutomaticPlatformOptimization,
    ZonesSearchForAgents,
    SecurityHeaders,
    ZonesSchemasSecurityLevel,
    ServerSideExcludes,
    ZonesSha1Support,
    ZonesSchemasSortQueryStringForCache,
    ZonesSchemasSSL,
    ZonesTLS12Only,
    Tls13,
    TlsclientAuth,
    ZonesTransformations,
    ZonesTransformationsAllowedOrigins,
    ZonesSchemasTrueClientIPHeader,
    ZonesSchemasWAF,
    WebP,
    Websocket,
    ZonesCacheRulesAegis,
    ZonesCacheRulesOriginH2MaxStreams,
    ZonesCacheRulesOriginMaxHTTPVersion,
    Sslrecommender,
  ]).pipe(T.ResponsePath("result")),
) as unknown as Schema.Codec<GetSettingResponse>;

export type GetSettingError = DefaultErrors | InvalidZoneIdentifier | Forbidden;

export const getSetting: API.OperationMethod<
  GetSettingRequest,
  GetSettingResponse,
  GetSettingError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: GetSettingRequest,
  output: GetSettingResponse,
  errors: [InvalidZoneIdentifier, Forbidden],
}));

export interface PatchSettingRequest {
  settingId: string;
  /** Path param: Identifier */
  zoneId: string;
  /** Body param: ssl-recommender enrollment setting. */
  enabled?: boolean;
  /** Body param: Value of the zone setting. */
  value?: unknown;
}

export const PatchSettingRequest = /*@__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    settingId: Schema.String.pipe(T.HttpPath("settingId")),
    zoneId: Schema.String.pipe(T.HttpPath("zone_id")),
    enabled: Schema.optional(Schema.Boolean),
    value: Schema.optional(Schema.Unknown),
  }).pipe(
    T.Http({
      method: "PATCH",
      path: "/zones/{zone_id}/settings/{settingId}",
    }),
  ),
) as unknown as Schema.Codec<PatchSettingRequest>;

export type PatchSettingResponse =
  | {
      id: "0rtt";
      value: "on" | "off" | (string & {});
      editable?: boolean | null;
      modifiedOn?: string | null;
    }
  | {
      id: "advanced_ddos";
      value: "on" | "off" | (string & {});
      editable?: boolean | null;
      modifiedOn?: string | null;
    }
  | {
      id: "aegis";
      modifiedOn?: string | null;
      value?: { enabled?: boolean | null; poolId?: string | null } | null;
    }
  | {
      id: "always_online";
      value: "on" | "off" | (string & {});
      editable?: boolean | null;
      modifiedOn?: string | null;
    }
  | {
      id: "always_use_https";
      value: "on" | "off" | (string & {});
      editable?: boolean | null;
      modifiedOn?: string | null;
    }
  | {
      id: "automatic_https_rewrites";
      value: "on" | "off" | (string & {});
      editable?: boolean | null;
      modifiedOn?: string | null;
    }
  | {
      id: "brotli";
      value: "off" | "on" | (string & {});
      editable?: boolean | null;
      modifiedOn?: string | null;
    }
  | {
      id: "browser_cache_ttl";
      value: number;
      editable?: boolean | null;
      modifiedOn?: string | null;
    }
  | {
      id: "browser_check";
      value: "on" | "off" | (string & {});
      editable?: boolean | null;
      modifiedOn?: string | null;
    }
  | {
      id: "cache_level";
      value: "aggressive" | "basic" | "simplified" | (string & {});
      editable?: boolean | null;
      modifiedOn?: string | null;
    }
  | {
      id: "challenge_ttl";
      value:
        | "300"
        | "900"
        | "1800"
        | "2700"
        | "3600"
        | "7200"
        | "10800"
        | "14400"
        | "28800"
        | "57600"
        | "86400"
        | "604800"
        | "2592000"
        | "31536000"
        | (string & {});
      editable?: boolean | null;
      modifiedOn?: string | null;
    }
  | {
      id: "china_network_enabled";
      value: "on" | "off" | (string & {});
      editable?: boolean | null;
      modifiedOn?: string | null;
    }
  | {
      id: "content_converter";
      value: "off" | "on" | (string & {});
      editable?: boolean | null;
      modifiedOn?: string | null;
    }
  | {
      id: "ciphers";
      value: string[];
      editable?: boolean | null;
      modifiedOn?: string | null;
    }
  | {
      id: "cname_flattening";
      value: "flatten_at_root" | "flatten_all" | (string & {});
      editable?: boolean | null;
      modifiedOn?: string | null;
    }
  | {
      id: "development_mode";
      value: "on" | "off" | (string & {});
      editable?: boolean | null;
      modifiedOn?: string | null;
      timeRemaining?: number | null;
    }
  | {
      id: "early_hints";
      value: "on" | "off" | (string & {});
      editable?: boolean | null;
      modifiedOn?: string | null;
    }
  | {
      id: "edge_cache_ttl";
      value:
        | "30"
        | "60"
        | "300"
        | "1200"
        | "1800"
        | "3600"
        | "7200"
        | "10800"
        | "14400"
        | "18000"
        | "28800"
        | "43200"
        | "57600"
        | "72000"
        | "86400"
        | "172800"
        | "259200"
        | "345600"
        | "432000"
        | "518400"
        | "604800"
        | (string & {});
      editable?: boolean | null;
      modifiedOn?: string | null;
    }
  | {
      id: "email_obfuscation";
      value: "on" | "off" | (string & {});
      editable?: boolean | null;
      modifiedOn?: string | null;
    }
  | {
      id: "h2_prioritization";
      value: "on" | "off" | "custom" | (string & {});
      editable?: boolean | null;
      modifiedOn?: string | null;
    }
  | {
      id: "hotlink_protection";
      value: "on" | "off" | (string & {});
      editable?: boolean | null;
      modifiedOn?: string | null;
    }
  | {
      id: "http2";
      value: "on" | "off" | (string & {});
      editable?: boolean | null;
      modifiedOn?: string | null;
    }
  | {
      id: "http3";
      value: "on" | "off" | (string & {});
      editable?: boolean | null;
      modifiedOn?: string | null;
    }
  | {
      id: "image_resizing";
      value: "on" | "off" | "open" | (string & {});
      editable?: boolean | null;
      modifiedOn?: string | null;
    }
  | {
      id: "ip_geolocation";
      value: "on" | "off" | (string & {});
      editable?: boolean | null;
      modifiedOn?: string | null;
    }
  | {
      id: "ipv6";
      value: "off" | "on" | (string & {});
      editable?: boolean | null;
      modifiedOn?: string | null;
    }
  | {
      id: "max_upload";
      value:
        | "100"
        | "125"
        | "150"
        | "175"
        | "200"
        | "225"
        | "250"
        | "275"
        | "300"
        | "325"
        | "350"
        | "375"
        | "400"
        | "425"
        | "450"
        | "475"
        | "500"
        | "1000"
        | (string & {});
      editable?: boolean | null;
      modifiedOn?: string | null;
    }
  | {
      id: "min_tls_version";
      value: "1.0" | "1.1" | "1.2" | "1.3" | (string & {});
      editable?: boolean | null;
      modifiedOn?: string | null;
    }
  | {
      id: "mirage";
      value: "on" | "off" | (string & {});
      editable?: boolean | null;
      modifiedOn?: string | null;
    }
  | {
      id: "nel";
      value: { enabled?: boolean | null };
      editable?: boolean | null;
      modifiedOn?: string | null;
    }
  | {
      id: "opportunistic_encryption";
      value: "on" | "off" | (string & {});
      editable?: boolean | null;
      modifiedOn?: string | null;
    }
  | {
      id: "opportunistic_onion";
      value: "on" | "off" | (string & {});
      editable?: boolean | null;
      modifiedOn?: string | null;
    }
  | {
      id: "orange_to_orange";
      value: "on" | "off" | (string & {});
      editable?: boolean | null;
      modifiedOn?: string | null;
    }
  | {
      id: "origin_error_page_pass_thru";
      value: "on" | "off" | (string & {});
      editable?: boolean | null;
      modifiedOn?: string | null;
    }
  | {
      id: "origin_h2_max_streams";
      modifiedOn?: string | null;
      value?: number | null;
    }
  | {
      id: "origin_max_http_version";
      modifiedOn?: string | null;
      value?: "2" | "1" | (string & {}) | null;
    }
  | {
      id: "polish";
      value: "off" | "lossless" | "lossy" | (string & {});
      editable?: boolean | null;
      modifiedOn?: string | null;
    }
  | {
      id: "prefetch_preload";
      value: "on" | "off" | (string & {});
      editable?: boolean | null;
      modifiedOn?: string | null;
    }
  | {
      id: "privacy_pass";
      value: "on" | "off" | (string & {});
      editable?: boolean | null;
      modifiedOn?: string | null;
    }
  | {
      id: "proxy_read_timeout";
      value: number;
      editable?: boolean | null;
      modifiedOn?: string | null;
    }
  | {
      id: "pseudo_ipv4";
      value: "off" | "add_header" | "overwrite_header" | (string & {});
      editable?: boolean | null;
      modifiedOn?: string | null;
    }
  | {
      id: "redirects_for_ai_training";
      value: "off" | "on" | (string & {});
      editable?: boolean | null;
      modifiedOn?: string | null;
    }
  | {
      id: "replace_insecure_js";
      value: "on" | "off" | (string & {});
      editable?: boolean | null;
      modifiedOn?: string | null;
    }
  | {
      id: "response_buffering";
      value: "on" | "off" | (string & {});
      editable?: boolean | null;
      modifiedOn?: string | null;
    }
  | {
      id: "rocket_loader";
      value: "on" | "off" | (string & {});
      editable?: boolean | null;
      modifiedOn?: string | null;
    }
  | {
      id: "automatic_platform_optimization";
      value: {
        cacheByDeviceType: boolean;
        cf: boolean;
        enabled: boolean;
        hostnames: string[];
        wordpress: boolean;
        wpPlugin: boolean;
      };
      editable?: boolean | null;
      modifiedOn?: string | null;
    }
  | {
      id: "search_for_agents";
      value: "off" | "on" | (string & {});
      editable?: boolean | null;
      modifiedOn?: string | null;
    }
  | {
      id: "security_header";
      value: {
        strictTransportSecurity?: {
          enabled?: boolean | null;
          includeSubdomains?: boolean | null;
          maxAge?: number | null;
          nosniff?: boolean | null;
          preload?: boolean | null;
        } | null;
      };
      editable?: boolean | null;
      modifiedOn?: string | null;
    }
  | {
      id: "security_level";
      value:
        | "off"
        | "essentially_off"
        | "low"
        | "medium"
        | "high"
        | "under_attack"
        | (string & {});
      editable?: boolean | null;
      modifiedOn?: string | null;
    }
  | {
      id: "server_side_exclude";
      value: "on" | "off" | (string & {});
      editable?: boolean | null;
      modifiedOn?: string | null;
    }
  | {
      id: "sha1_support";
      value: "off" | "on" | (string & {});
      editable?: boolean | null;
      modifiedOn?: string | null;
    }
  | {
      id: "sort_query_string_for_cache";
      value: "on" | "off" | (string & {});
      editable?: boolean | null;
      modifiedOn?: string | null;
    }
  | {
      id: "ssl";
      value: "off" | "flexible" | "full" | "strict" | (string & {});
      editable?: boolean | null;
      modifiedOn?: string | null;
    }
  | { id?: "ssl_recommender" | null; enabled?: boolean | null }
  | {
      id: "tls_1_2_only";
      value: "off" | "on" | (string & {});
      editable?: boolean | null;
      modifiedOn?: string | null;
    }
  | {
      id: "tls_1_3";
      value: "on" | "off" | "zrt" | (string & {});
      editable?: boolean | null;
      modifiedOn?: string | null;
    }
  | {
      id: "tls_client_auth";
      value: "on" | "off" | (string & {});
      editable?: boolean | null;
      modifiedOn?: string | null;
    }
  | {
      id: "transformations";
      value: "on" | "off" | "open" | (string & {});
      editable?: boolean | null;
      modifiedOn?: string | null;
    }
  | {
      id: "transformations_allowed_origins";
      value: string;
      editable?: boolean | null;
      modifiedOn?: string | null;
    }
  | {
      id: "true_client_ip_header";
      value: "on" | "off" | (string & {});
      editable?: boolean | null;
      modifiedOn?: string | null;
    }
  | {
      id: "waf";
      value: "on" | "off" | (string & {});
      editable?: boolean | null;
      modifiedOn?: string | null;
    }
  | {
      id: "webp";
      value: "off" | "on" | (string & {});
      editable?: boolean | null;
      modifiedOn?: string | null;
    }
  | {
      id: "websockets";
      value: "off" | "on" | (string & {});
      editable?: boolean | null;
      modifiedOn?: string | null;
    };

export const PatchSettingResponse = /*@__PURE__*/ Schema.suspend(() =>
  Schema.Union([
    ZeroRTT,
    AdvancedDDoS,
    AlwaysOnline,
    ZonesSchemasAlwaysUseHTTPS,
    ZonesSchemasAutomaticHTTPSRewrites,
    Brotli,
    ZonesSchemasBrowserCacheTTL,
    ZonesSchemasBrowserCheck,
    ZonesSchemasCacheLevel,
    ChallengeTTL,
    ZonesChinaNetworkEnabled,
    ZonesContentConverter,
    Ciphers,
    ZonesCNAMEFlattening,
    DevelopmentMode,
    EarlyHints,
    ZonesSchemasEdgeCacheTTL,
    ZonesSchemasEmailObfuscation,
    H2Prioritization,
    HotlinkProtection,
    Http2,
    Http3,
    ImageResizing,
    ZonesSchemasIPGeolocation,
    Ipv6,
    ZonesMaxUpload,
    MinTLSVersion,
    ZonesSchemasMirage,
    Nel,
    ZonesSchemasOpportunisticEncryption,
    OpportunisticOnion,
    OrangeToOrange,
    ZonesSchemasOriginErrorPagePassThru,
    ZonesSchemasPolish,
    PrefetchPreload,
    ZonesPrivacyPass,
    ProxyReadTimeout,
    PseudoIPV4,
    ZonesRedirectsForAITraining,
    ZonesReplaceInsecureJS,
    ZonesSchemasResponseBuffering,
    ZonesSchemasRocketLoader,
    ZonesSchemasAutomaticPlatformOptimization,
    ZonesSearchForAgents,
    SecurityHeaders,
    ZonesSchemasSecurityLevel,
    ServerSideExcludes,
    ZonesSha1Support,
    ZonesSchemasSortQueryStringForCache,
    ZonesSchemasSSL,
    ZonesTLS12Only,
    Tls13,
    TlsclientAuth,
    ZonesTransformations,
    ZonesTransformationsAllowedOrigins,
    ZonesSchemasTrueClientIPHeader,
    ZonesSchemasWAF,
    WebP,
    Websocket,
    ZonesCacheRulesAegis,
    ZonesCacheRulesOriginH2MaxStreams,
    ZonesCacheRulesOriginMaxHTTPVersion,
    Sslrecommender,
  ]).pipe(T.ResponsePath("result")),
) as unknown as Schema.Codec<PatchSettingResponse>;

export type PatchSettingError =
  | DefaultErrors
  | InvalidZoneIdentifier
  | Forbidden;

export const patchSetting: API.OperationMethod<
  PatchSettingRequest,
  PatchSettingResponse,
  PatchSettingError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: PatchSettingRequest,
  output: PatchSettingResponse,
  errors: [InvalidZoneIdentifier, Forbidden],
}));

// =============================================================================
// Subscription
// =============================================================================

export interface GetSubscriptionRequest {
  /** Identifier */
  zoneId: string;
}

export const GetSubscriptionRequest =
  /*@__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      zoneId: Schema.String.pipe(T.HttpPath("zone_id")),
    }).pipe(T.Http({ method: "GET", path: "/zones/{zone_id}/subscription" })),
  ) as unknown as Schema.Codec<GetSubscriptionRequest>;

export interface GetSubscriptionResponse {
  /** Subscription identifier tag. */
  id?: string | null;
  /** The monetary unit in which pricing information is displayed. */
  currency?: string | null;
  /** The end of the current period and also when the next billing is due. */
  currentPeriodEnd?: string | null;
  /** When the current billing period started. May match initial_period_start if this is the first period. */
  currentPeriodStart?: string | null;
  /** How often the subscription is renewed automatically. */
  frequency?:
    | "weekly"
    | "monthly"
    | "quarterly"
    | "yearly"
    | "not-applicable"
    | (string & {})
    | null;
  /** The price of the subscription that will be billed, in US dollars. */
  price?: number | null;
  /** The rate plan applied to the subscription. */
  ratePlan?: {
    id?:
      | "free"
      | "lite"
      | "pro"
      | "pro_plus"
      | "business"
      | "enterprise"
      | "partners_free"
      | "partners_pro"
      | "partners_business"
      | "partners_enterprise"
      | (string & {})
      | null;
    currency?: string | null;
    externallyManaged?: boolean | null;
    isContract?: boolean | null;
    publicName?: string | null;
    scope?: string | null;
    sets?: string[] | null;
  } | null;
  /** The state that the subscription is in. */
  state?:
    | "Trial"
    | "Provisioned"
    | "Paid"
    | "AwaitingPayment"
    | "Cancelled"
    | "Failed"
    | "Expired"
    | (string & {})
    | null;
}

export const GetSubscriptionResponse =
  /*@__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      id: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
      currency: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
      currentPeriodEnd: Schema.optional(
        Schema.Union([Schema.String, Schema.Null]),
      ),
      currentPeriodStart: Schema.optional(
        Schema.Union([Schema.String, Schema.Null]),
      ),
      frequency: Schema.optional(
        Schema.Union([
          Schema.Union([
            Schema.Literals([
              "weekly",
              "monthly",
              "quarterly",
              "yearly",
              "not-applicable",
            ]),
            Schema.String,
          ]),
          Schema.Null,
        ]),
      ),
      price: Schema.optional(Schema.Union([Schema.Number, Schema.Null])),
      ratePlan: Schema.optional(Schema.Union([RatePlan, Schema.Null])),
      state: Schema.optional(
        Schema.Union([
          Schema.Union([
            Schema.Literals([
              "Trial",
              "Provisioned",
              "Paid",
              "AwaitingPayment",
              "Cancelled",
              "Failed",
              "Expired",
            ]),
            Schema.String,
          ]),
          Schema.Null,
        ]),
      ),
    })
      .pipe(
        Schema.encodeKeys({
          id: "id",
          currency: "currency",
          currentPeriodEnd: "current_period_end",
          currentPeriodStart: "current_period_start",
          frequency: "frequency",
          price: "price",
          ratePlan: "rate_plan",
          state: "state",
        }),
      )
      .pipe(T.ResponsePath("result")),
  ) as unknown as Schema.Codec<GetSubscriptionResponse>;

export type GetSubscriptionError = DefaultErrors;

export const getSubscription: API.OperationMethod<
  GetSubscriptionRequest,
  GetSubscriptionResponse,
  GetSubscriptionError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: GetSubscriptionRequest,
  output: GetSubscriptionResponse,
  errors: [],
}));

export interface CreateSubscriptionRequest {
  /** Path param: Identifier */
  zoneId: string;
  /** Body param: How often the subscription is renewed automatically. */
  frequency?: "weekly" | "monthly" | "quarterly" | "yearly" | (string & {});
  /** Body param: The rate plan applied to the subscription. */
  ratePlan?: {
    id?:
      | "free"
      | "lite"
      | "pro"
      | "pro_plus"
      | "business"
      | "enterprise"
      | "partners_free"
      | "partners_pro"
      | "partners_business"
      | "partners_enterprise"
      | (string & {});
    currency?: string;
    externallyManaged?: boolean;
    isContract?: boolean;
    publicName?: string;
    scope?: string;
    sets?: string[];
  };
}

export const CreateSubscriptionRequest =
  /*@__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      zoneId: Schema.String.pipe(T.HttpPath("zone_id")),
      frequency: Schema.optional(
        Schema.Union([
          Schema.Literals(["weekly", "monthly", "quarterly", "yearly"]),
          Schema.String,
        ]),
      ),
      ratePlan: Schema.optional(RatePlan),
    }).pipe(
      Schema.encodeKeys({ frequency: "frequency", ratePlan: "rate_plan" }),
      T.Http({ method: "POST", path: "/zones/{zone_id}/subscription" }),
    ),
  ) as unknown as Schema.Codec<CreateSubscriptionRequest>;

export interface CreateSubscriptionResponse {
  /** Subscription identifier tag. */
  id?: string | null;
  /** The monetary unit in which pricing information is displayed. */
  currency?: string | null;
  /** The end of the current period and also when the next billing is due. */
  currentPeriodEnd?: string | null;
  /** When the current billing period started. May match initial_period_start if this is the first period. */
  currentPeriodStart?: string | null;
  /** How often the subscription is renewed automatically. */
  frequency?:
    | "weekly"
    | "monthly"
    | "quarterly"
    | "yearly"
    | "not-applicable"
    | (string & {})
    | null;
  /** The price of the subscription that will be billed, in US dollars. */
  price?: number | null;
  /** The rate plan applied to the subscription. */
  ratePlan?: {
    id?:
      | "free"
      | "lite"
      | "pro"
      | "pro_plus"
      | "business"
      | "enterprise"
      | "partners_free"
      | "partners_pro"
      | "partners_business"
      | "partners_enterprise"
      | (string & {})
      | null;
    currency?: string | null;
    externallyManaged?: boolean | null;
    isContract?: boolean | null;
    publicName?: string | null;
    scope?: string | null;
    sets?: string[] | null;
  } | null;
  /** The state that the subscription is in. */
  state?:
    | "Trial"
    | "Provisioned"
    | "Paid"
    | "AwaitingPayment"
    | "Cancelled"
    | "Failed"
    | "Expired"
    | (string & {})
    | null;
}

export const CreateSubscriptionResponse =
  /*@__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      id: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
      currency: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
      currentPeriodEnd: Schema.optional(
        Schema.Union([Schema.String, Schema.Null]),
      ),
      currentPeriodStart: Schema.optional(
        Schema.Union([Schema.String, Schema.Null]),
      ),
      frequency: Schema.optional(
        Schema.Union([
          Schema.Union([
            Schema.Literals([
              "weekly",
              "monthly",
              "quarterly",
              "yearly",
              "not-applicable",
            ]),
            Schema.String,
          ]),
          Schema.Null,
        ]),
      ),
      price: Schema.optional(Schema.Union([Schema.Number, Schema.Null])),
      ratePlan: Schema.optional(Schema.Union([RatePlan, Schema.Null])),
      state: Schema.optional(
        Schema.Union([
          Schema.Union([
            Schema.Literals([
              "Trial",
              "Provisioned",
              "Paid",
              "AwaitingPayment",
              "Cancelled",
              "Failed",
              "Expired",
            ]),
            Schema.String,
          ]),
          Schema.Null,
        ]),
      ),
    })
      .pipe(
        Schema.encodeKeys({
          id: "id",
          currency: "currency",
          currentPeriodEnd: "current_period_end",
          currentPeriodStart: "current_period_start",
          frequency: "frequency",
          price: "price",
          ratePlan: "rate_plan",
          state: "state",
        }),
      )
      .pipe(T.ResponsePath("result")),
  ) as unknown as Schema.Codec<CreateSubscriptionResponse>;

export type CreateSubscriptionError = DefaultErrors;

export const createSubscription: API.OperationMethod<
  CreateSubscriptionRequest,
  CreateSubscriptionResponse,
  CreateSubscriptionError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: CreateSubscriptionRequest,
  output: CreateSubscriptionResponse,
  errors: [],
}));

export interface UpdateSubscriptionRequest {
  /** Path param: Identifier */
  zoneId: string;
  /** Body param: How often the subscription is renewed automatically. */
  frequency?: "weekly" | "monthly" | "quarterly" | "yearly" | (string & {});
  /** Body param: The rate plan applied to the subscription. */
  ratePlan?: {
    id?:
      | "free"
      | "lite"
      | "pro"
      | "pro_plus"
      | "business"
      | "enterprise"
      | "partners_free"
      | "partners_pro"
      | "partners_business"
      | "partners_enterprise"
      | (string & {});
    currency?: string;
    externallyManaged?: boolean;
    isContract?: boolean;
    publicName?: string;
    scope?: string;
    sets?: string[];
  };
}

export const UpdateSubscriptionRequest =
  /*@__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      zoneId: Schema.String.pipe(T.HttpPath("zone_id")),
      frequency: Schema.optional(
        Schema.Union([
          Schema.Literals(["weekly", "monthly", "quarterly", "yearly"]),
          Schema.String,
        ]),
      ),
      ratePlan: Schema.optional(RatePlan),
    }).pipe(
      Schema.encodeKeys({ frequency: "frequency", ratePlan: "rate_plan" }),
      T.Http({ method: "PUT", path: "/zones/{zone_id}/subscription" }),
    ),
  ) as unknown as Schema.Codec<UpdateSubscriptionRequest>;

export interface UpdateSubscriptionResponse {
  /** Subscription identifier tag. */
  id?: string | null;
  /** The monetary unit in which pricing information is displayed. */
  currency?: string | null;
  /** The end of the current period and also when the next billing is due. */
  currentPeriodEnd?: string | null;
  /** When the current billing period started. May match initial_period_start if this is the first period. */
  currentPeriodStart?: string | null;
  /** How often the subscription is renewed automatically. */
  frequency?:
    | "weekly"
    | "monthly"
    | "quarterly"
    | "yearly"
    | "not-applicable"
    | (string & {})
    | null;
  /** The price of the subscription that will be billed, in US dollars. */
  price?: number | null;
  /** The rate plan applied to the subscription. */
  ratePlan?: {
    id?:
      | "free"
      | "lite"
      | "pro"
      | "pro_plus"
      | "business"
      | "enterprise"
      | "partners_free"
      | "partners_pro"
      | "partners_business"
      | "partners_enterprise"
      | (string & {})
      | null;
    currency?: string | null;
    externallyManaged?: boolean | null;
    isContract?: boolean | null;
    publicName?: string | null;
    scope?: string | null;
    sets?: string[] | null;
  } | null;
  /** The state that the subscription is in. */
  state?:
    | "Trial"
    | "Provisioned"
    | "Paid"
    | "AwaitingPayment"
    | "Cancelled"
    | "Failed"
    | "Expired"
    | (string & {})
    | null;
}

export const UpdateSubscriptionResponse =
  /*@__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      id: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
      currency: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
      currentPeriodEnd: Schema.optional(
        Schema.Union([Schema.String, Schema.Null]),
      ),
      currentPeriodStart: Schema.optional(
        Schema.Union([Schema.String, Schema.Null]),
      ),
      frequency: Schema.optional(
        Schema.Union([
          Schema.Union([
            Schema.Literals([
              "weekly",
              "monthly",
              "quarterly",
              "yearly",
              "not-applicable",
            ]),
            Schema.String,
          ]),
          Schema.Null,
        ]),
      ),
      price: Schema.optional(Schema.Union([Schema.Number, Schema.Null])),
      ratePlan: Schema.optional(Schema.Union([RatePlan, Schema.Null])),
      state: Schema.optional(
        Schema.Union([
          Schema.Union([
            Schema.Literals([
              "Trial",
              "Provisioned",
              "Paid",
              "AwaitingPayment",
              "Cancelled",
              "Failed",
              "Expired",
            ]),
            Schema.String,
          ]),
          Schema.Null,
        ]),
      ),
    })
      .pipe(
        Schema.encodeKeys({
          id: "id",
          currency: "currency",
          currentPeriodEnd: "current_period_end",
          currentPeriodStart: "current_period_start",
          frequency: "frequency",
          price: "price",
          ratePlan: "rate_plan",
          state: "state",
        }),
      )
      .pipe(T.ResponsePath("result")),
  ) as unknown as Schema.Codec<UpdateSubscriptionResponse>;

export type UpdateSubscriptionError = DefaultErrors;

export const updateSubscription: API.OperationMethod<
  UpdateSubscriptionRequest,
  UpdateSubscriptionResponse,
  UpdateSubscriptionError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: UpdateSubscriptionRequest,
  output: UpdateSubscriptionResponse,
  errors: [],
}));

// =============================================================================
// Zone
// =============================================================================

export interface GetZoneRequest {
  /** Identifier */
  zoneId: string;
}

export const GetZoneRequest = /*@__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    zoneId: Schema.String.pipe(T.HttpPath("zone_id")),
  }).pipe(T.Http({ method: "GET", path: "/zones/{zone_id}" })),
) as unknown as Schema.Codec<GetZoneRequest>;

export interface GetZoneResponse {
  /** Identifier */
  id: string;
  /** The account the zone belongs to. */
  account: { id?: string | null; name?: string | null };
  /** The last time proof of ownership was detected and the zone was made active. */
  activatedOn: string | null;
  /** When the zone was created. */
  createdOn: string;
  /** The interval (in seconds) from when development mode expires (positive integer) or last expired (negative integer) for the domain. If development mode has never been enabled, this value is 0. */
  developmentMode: number;
  /** Metadata about the zone. */
  meta: {
    cdnOnly?: boolean | null;
    customCertificateQuota?: number | null;
    dnsOnly?: boolean | null;
    foundationDns?: boolean | null;
    pageRuleQuota?: number | null;
    phishingDetected?: boolean | null;
    step?: number | null;
  };
  /** When the zone was last modified. */
  modifiedOn: string;
  /** The domain name. Per [RFC 1035](https://datatracker.ietf.org/doc/html/rfc1035#section-2.3.4) the overall zone name can be up to 253 characters, with each segment ("label") not exceeding 63 characters. */
  name: string;
  /** The name servers Cloudflare assigns to a zone. */
  nameServers: string[];
  /** DNS host at the time of switching to Cloudflare. */
  originalDnshost: string | null;
  /** Original name servers before moving to Cloudflare. */
  originalNameServers: string[] | null;
  /** Registrar for the domain at the time of switching to Cloudflare. */
  originalRegistrar: string | null;
  /** The owner of the zone. */
  owner: { id?: string | null; name?: string | null; type?: string | null };
  /** @deprecated Please use the `/zones/{zone_id}/subscription` API to update a zone's plan. Changing this value will create/cancel associated subscriptions. To view available plans for this zone, see [Zon */
  plan: {
    id?: string | null;
    canSubscribe?: boolean | null;
    currency?: string | null;
    externallyManaged?: boolean | null;
    frequency?: string | null;
    isSubscribed?: boolean | null;
    legacyDiscount?: boolean | null;
    legacyId?: string | null;
    name?: string | null;
    price?: number | null;
  };
  /** Allows the customer to use a custom apex. _Tenants Only Configuration_. */
  cnameSuffix?: string | null;
  /** Indicates whether the zone is only using Cloudflare DNS services. A true value means the zone will not receive security or performance benefits. */
  paused?: boolean | null;
  /** @deprecated This has been replaced by Account memberships. */
  permissions?: string[] | null;
  /** The zone status on Cloudflare. */
  status?:
    | "initializing"
    | "pending"
    | "active"
    | "moved"
    | (string & {})
    | null;
  /** The root organizational unit that this zone belongs to (such as a tenant or organization). */
  tenant?: { id?: string | null; name?: string | null } | null;
  /** The immediate parent organizational unit that this zone belongs to (such as under a tenant or sub-organization). */
  tenantUnit?: { id?: string | null } | null;
  /** A full zone implies that DNS is hosted with Cloudflare. A partial zone is typically a partner-hosted zone or a CNAME setup. */
  type?: "full" | "partial" | "secondary" | "internal" | (string & {}) | null;
  /** An array of domains used for custom name servers. This is only available for Business and Enterprise plans. */
  vanityNameServers?: string[] | null;
  /** Verification key for partial zone setup. */
  verificationKey?: string | null;
}

export const GetZoneResponse = /*@__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    id: Schema.String,
    account: Account,
    activatedOn: Schema.Union([Schema.String, Schema.Null]),
    createdOn: Schema.String,
    developmentMode: Schema.Number,
    meta: Meta,
    modifiedOn: Schema.String,
    name: Schema.String,
    nameServers: Schema.Array(Schema.String),
    originalDnshost: Schema.Union([Schema.String, Schema.Null]),
    originalNameServers: Schema.Union([
      Schema.Array(Schema.String),
      Schema.Null,
    ]),
    originalRegistrar: Schema.Union([Schema.String, Schema.Null]),
    owner: Owner,
    plan: Plan,
    cnameSuffix: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
    paused: Schema.optional(Schema.Union([Schema.Boolean, Schema.Null])),
    permissions: Schema.optional(
      Schema.Union([Schema.Array(Schema.String), Schema.Null]),
    ),
    status: Schema.optional(
      Schema.Union([
        Schema.Union([
          Schema.Literals(["initializing", "pending", "active", "moved"]),
          Schema.String,
        ]),
        Schema.Null,
      ]),
    ),
    tenant: Schema.optional(Schema.Union([Account, Schema.Null])),
    tenantUnit: Schema.optional(Schema.Union([TenantUnit, Schema.Null])),
    type: Schema.optional(
      Schema.Union([
        Schema.Union([
          Schema.Literals(["full", "partial", "secondary", "internal"]),
          Schema.String,
        ]),
        Schema.Null,
      ]),
    ),
    vanityNameServers: Schema.optional(
      Schema.Union([Schema.Array(Schema.String), Schema.Null]),
    ),
    verificationKey: Schema.optional(
      Schema.Union([Schema.String, Schema.Null]),
    ),
  })
    .pipe(
      Schema.encodeKeys({
        id: "id",
        account: "account",
        activatedOn: "activated_on",
        createdOn: "created_on",
        developmentMode: "development_mode",
        meta: "meta",
        modifiedOn: "modified_on",
        name: "name",
        nameServers: "name_servers",
        originalDnshost: "original_dnshost",
        originalNameServers: "original_name_servers",
        originalRegistrar: "original_registrar",
        owner: "owner",
        plan: "plan",
        cnameSuffix: "cname_suffix",
        paused: "paused",
        permissions: "permissions",
        status: "status",
        tenant: "tenant",
        tenantUnit: "tenant_unit",
        type: "type",
        vanityNameServers: "vanity_name_servers",
        verificationKey: "verification_key",
      }),
    )
    .pipe(T.ResponsePath("result")),
) as unknown as Schema.Codec<GetZoneResponse>;

export type GetZoneError = DefaultErrors | InvalidZoneIdentifier;

export const getZone: API.OperationMethod<
  GetZoneRequest,
  GetZoneResponse,
  GetZoneError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: GetZoneRequest,
  output: GetZoneResponse,
  errors: [InvalidZoneIdentifier],
}));

export interface ListZonesRequest {
  page?: number;
  perPage?: number;
  account?: { id?: string; name?: string };
  /** Direction to order zones. */
  direction?: "asc" | "desc" | (string & {});
  /** Whether to match all search requirements or at least one (any). */
  match?: "any" | "all" | (string & {});
  /** A domain name. Optional filter operators can be provided to extend refine the search:  - `equal` (default) - `not_equal` - `starts_with` - `ends_with` - `contains` - `starts_with_case_sensitive` - `en */
  name?: string;
  /** Field to order zones by. */
  order?:
    | "name"
    | "status"
    | "account.id"
    | "account.name"
    | "plan.id"
    | (string & {});
  /** Specify a zone status to filter by. */
  status?: "initializing" | "pending" | "active" | "moved" | (string & {});
  /** Zone types to filter by. Multiple types can be specified as a comma-separated list (e.g., ?type=full,partial,secondary). When this parameter is not provided, zones with type "internal" are excluded fr */
  type?: ("full" | "partial" | "secondary" | "internal" | (string & {}))[];
}

export const ListZonesRequest = /*@__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    page: Schema.optional(Schema.Number).pipe(T.HttpQuery("page")),
    perPage: Schema.optional(Schema.Number).pipe(T.HttpQuery("per_page")),
    account: Schema.optional(
      Schema.Struct({
        id: Schema.optional(Schema.String),
        name: Schema.optional(Schema.String),
      }),
    ).pipe(T.HttpQuery("account")),
    direction: Schema.optional(
      Schema.Union([Schema.Literals(["asc", "desc"]), Schema.String]),
    ).pipe(T.HttpQuery("direction")),
    match: Schema.optional(
      Schema.Union([Schema.Literals(["any", "all"]), Schema.String]),
    ).pipe(T.HttpQuery("match")),
    name: Schema.optional(Schema.String).pipe(T.HttpQuery("name")),
    order: Schema.optional(
      Schema.Union([
        Schema.Literals([
          "name",
          "status",
          "account.id",
          "account.name",
          "plan.id",
        ]),
        Schema.String,
      ]),
    ).pipe(T.HttpQuery("order")),
    status: Schema.optional(
      Schema.Union([
        Schema.Literals(["initializing", "pending", "active", "moved"]),
        Schema.String,
      ]),
    ).pipe(T.HttpQuery("status")),
    type: Schema.optional(
      Schema.Array(
        Schema.Union([
          Schema.Literals(["full", "partial", "secondary", "internal"]),
          Schema.String,
        ]),
      ),
    ).pipe(T.HttpQuery("type")),
  }).pipe(T.Http({ method: "GET", path: "/zones" })),
) as unknown as Schema.Codec<ListZonesRequest>;

export interface ListZonesResponse {
  result: {
    id: string;
    account: { id?: string | null; name?: string | null };
    activatedOn: string | null;
    createdOn: string;
    developmentMode: number;
    meta: {
      cdnOnly?: boolean | null;
      customCertificateQuota?: number | null;
      dnsOnly?: boolean | null;
      foundationDns?: boolean | null;
      pageRuleQuota?: number | null;
      phishingDetected?: boolean | null;
      step?: number | null;
    };
    modifiedOn: string;
    name: string;
    nameServers: string[];
    originalDnshost: string | null;
    originalNameServers: string[] | null;
    originalRegistrar: string | null;
    owner: { id?: string | null; name?: string | null; type?: string | null };
    plan: {
      id?: string | null;
      canSubscribe?: boolean | null;
      currency?: string | null;
      externallyManaged?: boolean | null;
      frequency?: string | null;
      isSubscribed?: boolean | null;
      legacyDiscount?: boolean | null;
      legacyId?: string | null;
      name?: string | null;
      price?: number | null;
    };
    cnameSuffix?: string | null;
    paused?: boolean | null;
    permissions?: string[] | null;
    status?:
      | "initializing"
      | "pending"
      | "active"
      | "moved"
      | (string & {})
      | null;
    tenant?: { id?: string | null; name?: string | null } | null;
    tenantUnit?: { id?: string | null } | null;
    type?: "full" | "partial" | "secondary" | "internal" | (string & {}) | null;
    vanityNameServers?: string[] | null;
    verificationKey?: string | null;
  }[];
  resultInfo?: {
    count?: number | null;
    page?: number | null;
    perPage?: number | null;
    totalCount?: number | null;
  } | null;
}

export const ListZonesResponse = /*@__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    result: Schema.Array(ListZonesResponseResult),
    resultInfo: Schema.optional(
      Schema.Union([ListZonesResponseResultInfo, Schema.Null]),
    ),
  }).pipe(Schema.encodeKeys({ result: "result", resultInfo: "result_info" })),
) as unknown as Schema.Codec<ListZonesResponse>;

export type ListZonesError = DefaultErrors;

export const listZones: API.PaginatedOperationMethod<
  ListZonesRequest,
  ListZonesResponse,
  ListZonesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: ListZonesRequest,
  output: ListZonesResponse,
  errors: [],
  pagination: {
    mode: "page",
    inputToken: "page",
    outputToken: "resultInfo.page",
    items: "result",
    pageSize: "perPage",
  } as const,
}));

export interface CreateZoneRequest {
  account: { id?: string };
  /** The domain name. Per [RFC 1035](https://datatracker.ietf.org/doc/html/rfc1035#section-2.3.4) the overall zone name can be up to 253 characters, with each segment ("label") not exceeding 63 characters. */
  name: string;
  /** A full zone implies that DNS is hosted with Cloudflare. A partial zone is typically a partner-hosted zone or a CNAME setup. */
  type?: "full" | "partial" | "secondary" | "internal" | (string & {});
}

export const CreateZoneRequest = /*@__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    account: TenantUnit,
    name: Schema.String,
    type: Schema.optional(
      Schema.Union([
        Schema.Literals(["full", "partial", "secondary", "internal"]),
        Schema.String,
      ]),
    ),
  }).pipe(T.Http({ method: "POST", path: "/zones" })),
) as unknown as Schema.Codec<CreateZoneRequest>;

export interface CreateZoneResponse {
  /** Identifier */
  id: string;
  /** The account the zone belongs to. */
  account: { id?: string | null; name?: string | null };
  /** The last time proof of ownership was detected and the zone was made active. */
  activatedOn: string | null;
  /** When the zone was created. */
  createdOn: string;
  /** The interval (in seconds) from when development mode expires (positive integer) or last expired (negative integer) for the domain. If development mode has never been enabled, this value is 0. */
  developmentMode: number;
  /** Metadata about the zone. */
  meta: {
    cdnOnly?: boolean | null;
    customCertificateQuota?: number | null;
    dnsOnly?: boolean | null;
    foundationDns?: boolean | null;
    pageRuleQuota?: number | null;
    phishingDetected?: boolean | null;
    step?: number | null;
  };
  /** When the zone was last modified. */
  modifiedOn: string;
  /** The domain name. Per [RFC 1035](https://datatracker.ietf.org/doc/html/rfc1035#section-2.3.4) the overall zone name can be up to 253 characters, with each segment ("label") not exceeding 63 characters. */
  name: string;
  /** The name servers Cloudflare assigns to a zone. */
  nameServers: string[];
  /** DNS host at the time of switching to Cloudflare. */
  originalDnshost: string | null;
  /** Original name servers before moving to Cloudflare. */
  originalNameServers: string[] | null;
  /** Registrar for the domain at the time of switching to Cloudflare. */
  originalRegistrar: string | null;
  /** The owner of the zone. */
  owner: { id?: string | null; name?: string | null; type?: string | null };
  /** @deprecated Please use the `/zones/{zone_id}/subscription` API to update a zone's plan. Changing this value will create/cancel associated subscriptions. To view available plans for this zone, see [Zon */
  plan: {
    id?: string | null;
    canSubscribe?: boolean | null;
    currency?: string | null;
    externallyManaged?: boolean | null;
    frequency?: string | null;
    isSubscribed?: boolean | null;
    legacyDiscount?: boolean | null;
    legacyId?: string | null;
    name?: string | null;
    price?: number | null;
  };
  /** Allows the customer to use a custom apex. _Tenants Only Configuration_. */
  cnameSuffix?: string | null;
  /** Indicates whether the zone is only using Cloudflare DNS services. A true value means the zone will not receive security or performance benefits. */
  paused?: boolean | null;
  /** @deprecated This has been replaced by Account memberships. */
  permissions?: string[] | null;
  /** The zone status on Cloudflare. */
  status?:
    | "initializing"
    | "pending"
    | "active"
    | "moved"
    | (string & {})
    | null;
  /** The root organizational unit that this zone belongs to (such as a tenant or organization). */
  tenant?: { id?: string | null; name?: string | null } | null;
  /** The immediate parent organizational unit that this zone belongs to (such as under a tenant or sub-organization). */
  tenantUnit?: { id?: string | null } | null;
  /** A full zone implies that DNS is hosted with Cloudflare. A partial zone is typically a partner-hosted zone or a CNAME setup. */
  type?: "full" | "partial" | "secondary" | "internal" | (string & {}) | null;
  /** An array of domains used for custom name servers. This is only available for Business and Enterprise plans. */
  vanityNameServers?: string[] | null;
  /** Verification key for partial zone setup. */
  verificationKey?: string | null;
}

export const CreateZoneResponse = /*@__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    id: Schema.String,
    account: Account,
    activatedOn: Schema.Union([Schema.String, Schema.Null]),
    createdOn: Schema.String,
    developmentMode: Schema.Number,
    meta: Meta,
    modifiedOn: Schema.String,
    name: Schema.String,
    nameServers: Schema.Array(Schema.String),
    originalDnshost: Schema.Union([Schema.String, Schema.Null]),
    originalNameServers: Schema.Union([
      Schema.Array(Schema.String),
      Schema.Null,
    ]),
    originalRegistrar: Schema.Union([Schema.String, Schema.Null]),
    owner: Owner,
    plan: Plan,
    cnameSuffix: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
    paused: Schema.optional(Schema.Union([Schema.Boolean, Schema.Null])),
    permissions: Schema.optional(
      Schema.Union([Schema.Array(Schema.String), Schema.Null]),
    ),
    status: Schema.optional(
      Schema.Union([
        Schema.Union([
          Schema.Literals(["initializing", "pending", "active", "moved"]),
          Schema.String,
        ]),
        Schema.Null,
      ]),
    ),
    tenant: Schema.optional(Schema.Union([Account, Schema.Null])),
    tenantUnit: Schema.optional(Schema.Union([TenantUnit, Schema.Null])),
    type: Schema.optional(
      Schema.Union([
        Schema.Union([
          Schema.Literals(["full", "partial", "secondary", "internal"]),
          Schema.String,
        ]),
        Schema.Null,
      ]),
    ),
    vanityNameServers: Schema.optional(
      Schema.Union([Schema.Array(Schema.String), Schema.Null]),
    ),
    verificationKey: Schema.optional(
      Schema.Union([Schema.String, Schema.Null]),
    ),
  })
    .pipe(
      Schema.encodeKeys({
        id: "id",
        account: "account",
        activatedOn: "activated_on",
        createdOn: "created_on",
        developmentMode: "development_mode",
        meta: "meta",
        modifiedOn: "modified_on",
        name: "name",
        nameServers: "name_servers",
        originalDnshost: "original_dnshost",
        originalNameServers: "original_name_servers",
        originalRegistrar: "original_registrar",
        owner: "owner",
        plan: "plan",
        cnameSuffix: "cname_suffix",
        paused: "paused",
        permissions: "permissions",
        status: "status",
        tenant: "tenant",
        tenantUnit: "tenant_unit",
        type: "type",
        vanityNameServers: "vanity_name_servers",
        verificationKey: "verification_key",
      }),
    )
    .pipe(T.ResponsePath("result")),
) as unknown as Schema.Codec<CreateZoneResponse>;

export type CreateZoneError =
  | DefaultErrors
  | ZoneAlreadyExists
  | ZoneCreationBlocked
  | InvalidDomain
  | DomainNotRegistered
  | SubdomainNotAllowed;

export const createZone: API.OperationMethod<
  CreateZoneRequest,
  CreateZoneResponse,
  CreateZoneError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: CreateZoneRequest,
  output: CreateZoneResponse,
  errors: [
    ZoneAlreadyExists,
    ZoneCreationBlocked,
    InvalidDomain,
    DomainNotRegistered,
    SubdomainNotAllowed,
  ],
}));

export interface PatchZoneRequest {
  /** Path param: Identifier */
  zoneId: string;
  /** Body param: Indicates whether the zone is only using Cloudflare DNS services. A true value means the zone will not receive security or performance benefits. */
  paused?: boolean;
  /** Body param: A full zone implies that DNS is hosted with Cloudflare. A partial zone is typically a partner-hosted zone or a CNAME setup. This parameter is only available to Enterprise customers or if i */
  type?: "full" | "partial" | "secondary" | "internal" | (string & {});
  /** Body param: An array of domains used for custom name servers. This is only available for Business and Enterprise plans. */
  vanityNameServers?: string[];
}

export const PatchZoneRequest = /*@__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    zoneId: Schema.String.pipe(T.HttpPath("zone_id")),
    paused: Schema.optional(Schema.Boolean),
    type: Schema.optional(
      Schema.Union([
        Schema.Literals(["full", "partial", "secondary", "internal"]),
        Schema.String,
      ]),
    ),
    vanityNameServers: Schema.optional(Schema.Array(Schema.String)),
  }).pipe(
    Schema.encodeKeys({
      paused: "paused",
      type: "type",
      vanityNameServers: "vanity_name_servers",
    }),
    T.Http({ method: "PATCH", path: "/zones/{zone_id}" }),
  ),
) as unknown as Schema.Codec<PatchZoneRequest>;

export interface PatchZoneResponse {
  /** Identifier */
  id: string;
  /** The account the zone belongs to. */
  account: { id?: string | null; name?: string | null };
  /** The last time proof of ownership was detected and the zone was made active. */
  activatedOn: string | null;
  /** When the zone was created. */
  createdOn: string;
  /** The interval (in seconds) from when development mode expires (positive integer) or last expired (negative integer) for the domain. If development mode has never been enabled, this value is 0. */
  developmentMode: number;
  /** Metadata about the zone. */
  meta: {
    cdnOnly?: boolean | null;
    customCertificateQuota?: number | null;
    dnsOnly?: boolean | null;
    foundationDns?: boolean | null;
    pageRuleQuota?: number | null;
    phishingDetected?: boolean | null;
    step?: number | null;
  };
  /** When the zone was last modified. */
  modifiedOn: string;
  /** The domain name. Per [RFC 1035](https://datatracker.ietf.org/doc/html/rfc1035#section-2.3.4) the overall zone name can be up to 253 characters, with each segment ("label") not exceeding 63 characters. */
  name: string;
  /** The name servers Cloudflare assigns to a zone. */
  nameServers: string[];
  /** DNS host at the time of switching to Cloudflare. */
  originalDnshost: string | null;
  /** Original name servers before moving to Cloudflare. */
  originalNameServers: string[] | null;
  /** Registrar for the domain at the time of switching to Cloudflare. */
  originalRegistrar: string | null;
  /** The owner of the zone. */
  owner: { id?: string | null; name?: string | null; type?: string | null };
  /** @deprecated Please use the `/zones/{zone_id}/subscription` API to update a zone's plan. Changing this value will create/cancel associated subscriptions. To view available plans for this zone, see [Zon */
  plan: {
    id?: string | null;
    canSubscribe?: boolean | null;
    currency?: string | null;
    externallyManaged?: boolean | null;
    frequency?: string | null;
    isSubscribed?: boolean | null;
    legacyDiscount?: boolean | null;
    legacyId?: string | null;
    name?: string | null;
    price?: number | null;
  };
  /** Allows the customer to use a custom apex. _Tenants Only Configuration_. */
  cnameSuffix?: string | null;
  /** Indicates whether the zone is only using Cloudflare DNS services. A true value means the zone will not receive security or performance benefits. */
  paused?: boolean | null;
  /** @deprecated This has been replaced by Account memberships. */
  permissions?: string[] | null;
  /** The zone status on Cloudflare. */
  status?:
    | "initializing"
    | "pending"
    | "active"
    | "moved"
    | (string & {})
    | null;
  /** The root organizational unit that this zone belongs to (such as a tenant or organization). */
  tenant?: { id?: string | null; name?: string | null } | null;
  /** The immediate parent organizational unit that this zone belongs to (such as under a tenant or sub-organization). */
  tenantUnit?: { id?: string | null } | null;
  /** A full zone implies that DNS is hosted with Cloudflare. A partial zone is typically a partner-hosted zone or a CNAME setup. */
  type?: "full" | "partial" | "secondary" | "internal" | (string & {}) | null;
  /** An array of domains used for custom name servers. This is only available for Business and Enterprise plans. */
  vanityNameServers?: string[] | null;
  /** Verification key for partial zone setup. */
  verificationKey?: string | null;
}

export const PatchZoneResponse = /*@__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    id: Schema.String,
    account: Account,
    activatedOn: Schema.Union([Schema.String, Schema.Null]),
    createdOn: Schema.String,
    developmentMode: Schema.Number,
    meta: Meta,
    modifiedOn: Schema.String,
    name: Schema.String,
    nameServers: Schema.Array(Schema.String),
    originalDnshost: Schema.Union([Schema.String, Schema.Null]),
    originalNameServers: Schema.Union([
      Schema.Array(Schema.String),
      Schema.Null,
    ]),
    originalRegistrar: Schema.Union([Schema.String, Schema.Null]),
    owner: Owner,
    plan: Plan,
    cnameSuffix: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
    paused: Schema.optional(Schema.Union([Schema.Boolean, Schema.Null])),
    permissions: Schema.optional(
      Schema.Union([Schema.Array(Schema.String), Schema.Null]),
    ),
    status: Schema.optional(
      Schema.Union([
        Schema.Union([
          Schema.Literals(["initializing", "pending", "active", "moved"]),
          Schema.String,
        ]),
        Schema.Null,
      ]),
    ),
    tenant: Schema.optional(Schema.Union([Account, Schema.Null])),
    tenantUnit: Schema.optional(Schema.Union([TenantUnit, Schema.Null])),
    type: Schema.optional(
      Schema.Union([
        Schema.Union([
          Schema.Literals(["full", "partial", "secondary", "internal"]),
          Schema.String,
        ]),
        Schema.Null,
      ]),
    ),
    vanityNameServers: Schema.optional(
      Schema.Union([Schema.Array(Schema.String), Schema.Null]),
    ),
    verificationKey: Schema.optional(
      Schema.Union([Schema.String, Schema.Null]),
    ),
  })
    .pipe(
      Schema.encodeKeys({
        id: "id",
        account: "account",
        activatedOn: "activated_on",
        createdOn: "created_on",
        developmentMode: "development_mode",
        meta: "meta",
        modifiedOn: "modified_on",
        name: "name",
        nameServers: "name_servers",
        originalDnshost: "original_dnshost",
        originalNameServers: "original_name_servers",
        originalRegistrar: "original_registrar",
        owner: "owner",
        plan: "plan",
        cnameSuffix: "cname_suffix",
        paused: "paused",
        permissions: "permissions",
        status: "status",
        tenant: "tenant",
        tenantUnit: "tenant_unit",
        type: "type",
        vanityNameServers: "vanity_name_servers",
        verificationKey: "verification_key",
      }),
    )
    .pipe(T.ResponsePath("result")),
) as unknown as Schema.Codec<PatchZoneResponse>;

export type PatchZoneError = DefaultErrors | InvalidZoneIdentifier;

export const patchZone: API.OperationMethod<
  PatchZoneRequest,
  PatchZoneResponse,
  PatchZoneError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: PatchZoneRequest,
  output: PatchZoneResponse,
  errors: [InvalidZoneIdentifier],
}));

export interface DeleteZoneRequest {
  /** Identifier */
  zoneId: string;
}

export const DeleteZoneRequest = /*@__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    zoneId: Schema.String.pipe(T.HttpPath("zone_id")),
  }).pipe(T.Http({ method: "DELETE", path: "/zones/{zone_id}" })),
) as unknown as Schema.Codec<DeleteZoneRequest>;

export interface DeleteZoneResponse {
  /** Identifier */
  id: string;
}

export const DeleteZoneResponse = /*@__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    id: Schema.String,
  }).pipe(T.ResponsePath("result")),
) as unknown as Schema.Codec<DeleteZoneResponse>;

export type DeleteZoneError = DefaultErrors | InvalidZoneIdentifier;

export const deleteZone: API.OperationMethod<
  DeleteZoneRequest,
  DeleteZoneResponse,
  DeleteZoneError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: DeleteZoneRequest,
  output: DeleteZoneResponse,
  errors: [InvalidZoneIdentifier],
}));
