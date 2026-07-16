/**
 * Cloudflare FIREWALL API
 *
 * Generated from Cloudflare TypeScript SDK.
 * DO NOT EDIT - regenerate with: bun scripts/generate.ts --service firewall
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

export class AccessRuleNotFound extends T.applyErrorMatchers(
  Schema.TaggedErrorClass<AccessRuleNotFound>()("AccessRuleNotFound", {
    code: Schema.Number,
    message: Schema.String,
  }),
  [{ code: 10001, message: { includes: "not_found" } }, { status: 404 }],
) {}

export class DuplicateAccessRule extends T.applyErrorMatchers(
  Schema.TaggedErrorClass<DuplicateAccessRule>()("DuplicateAccessRule", {
    code: Schema.Number,
    message: Schema.String,
  }),
  [{ code: 10009, message: { includes: "duplicate_of_existing" } }],
) {}

export class DuplicateLockdown extends T.applyErrorMatchers(
  Schema.TaggedErrorClass<DuplicateLockdown>()("DuplicateLockdown", {
    code: Schema.Number,
    message: Schema.String,
  }),
  [
    {
      code: 10009,
      message: { includes: "zonelockdown.api.duplicate_of_existing" },
    },
  ],
) {}

export class DuplicateUaRule extends T.applyErrorMatchers(
  Schema.TaggedErrorClass<DuplicateUaRule>()("DuplicateUaRule", {
    code: Schema.Number,
    message: Schema.String,
  }),
  [
    {
      code: 10009,
      message: { includes: "firewalluablock.api.duplicate_of_existing" },
    },
  ],
) {}

export class Forbidden extends T.applyErrorMatchers(
  Schema.TaggedErrorClass<Forbidden>()("Forbidden", {
    code: Schema.Number,
    message: Schema.String,
  }),
  [{ status: 403 }],
) {}

export class LockdownNotFound extends T.applyErrorMatchers(
  Schema.TaggedErrorClass<LockdownNotFound>()("LockdownNotFound", {
    code: Schema.Number,
    message: Schema.String,
  }),
  [
    { code: 10001, message: { includes: "zonelockdown.api.not_found" } },
    { status: 404 },
  ],
) {}

export class UaRuleNotFound extends T.applyErrorMatchers(
  Schema.TaggedErrorClass<UaRuleNotFound>()("UaRuleNotFound", {
    code: Schema.Number,
    message: Schema.String,
  }),
  [
    { code: 10001, message: { includes: "firewalluablock.api.not_found" } },
    { status: 404 },
  ],
) {}

// =============================================================================
// Shared nested schemas (hoisted, module-private)
// =============================================================================

interface AccessRuleIPConfiguration {
  /** The configuration target. You must set the target to `ip` when specifying an IP address in the rule. */
  target?: "ip" | null;
  /** The IP address to match. This address will be compared to the IP address of incoming requests. */
  value?: string | null;
}
const AccessRuleIPConfiguration = /*@__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    target: Schema.optional(Schema.Union([Schema.Literal("ip"), Schema.Null])),
    value: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
  }),
) as unknown as Schema.Codec<AccessRuleIPConfiguration>;

interface Ipv6Configuration {
  /** The configuration target. You must set the target to `ip6` when specifying an IPv6 address in the rule. */
  target?: "ip6" | null;
  /** The IPv6 address to match. */
  value?: string | null;
}
const Ipv6Configuration = /*@__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    target: Schema.optional(Schema.Union([Schema.Literal("ip6"), Schema.Null])),
    value: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
  }),
) as unknown as Schema.Codec<Ipv6Configuration>;

interface AccessRuleCIDRConfiguration {
  /** The configuration target. You must set the target to `ip_range` when specifying an IP address range in the rule. */
  target?: "ip_range" | null;
  /** The IP address range to match. You can only use prefix lengths `/16` and `/24` for IPv4 ranges, and prefix lengths `/32`, `/48`, and `/64` for IPv6 ranges. */
  value?: string | null;
}
const AccessRuleCIDRConfiguration = /*@__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    target: Schema.optional(
      Schema.Union([Schema.Literal("ip_range"), Schema.Null]),
    ),
    value: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
  }),
) as unknown as Schema.Codec<AccessRuleCIDRConfiguration>;

interface Asnconfiguration {
  /** The configuration target. You must set the target to `asn` when specifying an Autonomous System Number (ASN) in the rule. */
  target?: "asn" | null;
  /** The AS number to match. */
  value?: string | null;
}
const Asnconfiguration = /*@__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    target: Schema.optional(Schema.Union([Schema.Literal("asn"), Schema.Null])),
    value: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
  }),
) as unknown as Schema.Codec<Asnconfiguration>;

interface CountryConfiguration {
  /** The configuration target. You must set the target to `country` when specifying a country code in the rule. */
  target?: "country" | null;
  /** The two-letter ISO-3166-1 alpha-2 code to match. For more information, refer to [IP Access rules: Parameters](https://developers.cloudflare.com/waf/tools/ip-access-rules/parameters/#country). */
  value?: string | null;
}
const CountryConfiguration = /*@__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    target: Schema.optional(
      Schema.Union([Schema.Literal("country"), Schema.Null]),
    ),
    value: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
  }),
) as unknown as Schema.Codec<CountryConfiguration>;

interface Scope {
  /** Defines an identifier. */
  id?: string | null;
  /** The contact email address of the user. */
  email?: string | null;
  /** Defines the scope of the rule. */
  type?: "user" | "organization" | (string & {}) | null;
}
const Scope = /*@__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    id: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
    email: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
    type: Schema.optional(
      Schema.Union([
        Schema.Union([
          Schema.Literals(["user", "organization"]),
          Schema.String,
        ]),
        Schema.Null,
      ]),
    ),
  }),
) as unknown as Schema.Codec<Scope>;

interface ListAccessRulesResponseResult {
  /** The unique identifier of the IP Access rule. */
  id: string;
  /** The available actions that a rule can apply to a matched request. */
  allowedModes: (
    | "block"
    | "challenge"
    | "whitelist"
    | "js_challenge"
    | "managed_challenge"
    | (string & {})
  )[];
  /** The rule configuration. */
  configuration:
    | { target?: "ip" | null; value?: string | null }
    | { target?: "ip6" | null; value?: string | null }
    | { target?: "ip_range" | null; value?: string | null }
    | { target?: "asn" | null; value?: string | null }
    | { target?: "country" | null; value?: string | null };
  /** The action to apply to a matched request. */
  mode:
    | "block"
    | "challenge"
    | "whitelist"
    | "js_challenge"
    | "managed_challenge"
    | (string & {});
  /** The timestamp of when the rule was created. */
  createdOn?: string | null;
  /** The timestamp of when the rule was last modified. */
  modifiedOn?: string | null;
  /** An informative summary of the rule, typically used as a reminder or explanation. */
  notes?: string | null;
  /** All zones owned by the user will have the rule applied. */
  scope?: {
    id?: string | null;
    email?: string | null;
    type?: "user" | "organization" | (string & {}) | null;
  } | null;
}
const ListAccessRulesResponseResult =
  /*@__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      id: Schema.String,
      allowedModes: Schema.Array(
        Schema.Union([
          Schema.Literals([
            "block",
            "challenge",
            "whitelist",
            "js_challenge",
            "managed_challenge",
          ]),
          Schema.String,
        ]),
      ),
      configuration: Schema.Union([
        AccessRuleIPConfiguration,
        Ipv6Configuration,
        AccessRuleCIDRConfiguration,
        Asnconfiguration,
        CountryConfiguration,
      ]),
      mode: Schema.Union([
        Schema.Literals([
          "block",
          "challenge",
          "whitelist",
          "js_challenge",
          "managed_challenge",
        ]),
        Schema.String,
      ]),
      createdOn: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
      modifiedOn: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
      notes: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
      scope: Schema.optional(Schema.Union([Scope, Schema.Null])),
    }).pipe(
      Schema.encodeKeys({
        id: "id",
        allowedModes: "allowed_modes",
        configuration: "configuration",
        mode: "mode",
        createdOn: "created_on",
        modifiedOn: "modified_on",
        notes: "notes",
        scope: "scope",
      }),
    ),
  ) as unknown as Schema.Codec<ListAccessRulesResponseResult>;

interface ListAccessRulesResponseResultInfo {
  count?: number | null;
  page?: number | null;
  perPage?: number | null;
  totalCount?: number | null;
}
const ListAccessRulesResponseResultInfo =
  /*@__PURE__*/ Schema.suspend(() =>
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
  ) as unknown as Schema.Codec<ListAccessRulesResponseResultInfo>;

interface ListLockdownsResponseResult {
  /** The unique identifier of the Zone Lockdown rule. */
  id: string;
  /** A list of IP addresses or CIDR ranges that will be allowed to access the URLs specified in the Zone Lockdown rule. You can include any number of `ip` or `ip_range` configurations. */
  configurations: (
    | { target?: "ip" | null; value?: string | null }
    | { target?: "ip_range" | null; value?: string | null }
  )[];
  /** The timestamp of when the rule was created. */
  createdOn: string;
  /** An informative summary of the rule. */
  description?: string | null;
  /** The timestamp of when the rule was last modified. */
  modifiedOn: string;
  /** When true, indicates that the rule is currently paused. */
  paused: boolean;
  /** The URLs to include in the rule definition. You can use wildcards. Each entered URL will be escaped before use, which means you can only use simple wildcard patterns. */
  urls: string[];
  priority?: number | null;
}
const ListLockdownsResponseResult = /*@__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    id: Schema.String,
    configurations: Schema.Array(
      Schema.Union([AccessRuleIPConfiguration, AccessRuleCIDRConfiguration]),
    ),
    createdOn: Schema.String,
    description: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
    modifiedOn: Schema.String,
    paused: Schema.Boolean,
    urls: Schema.Array(Schema.String),
    priority: Schema.optional(Schema.Union([Schema.Number, Schema.Null])),
  }).pipe(
    Schema.encodeKeys({
      id: "id",
      configurations: "configurations",
      createdOn: "created_on",
      description: "description",
      modifiedOn: "modified_on",
      paused: "paused",
      urls: "urls",
      priority: "priority",
    }),
  ),
) as unknown as Schema.Codec<ListLockdownsResponseResult>;

interface FirewallFilter {
  /** The unique identifier of the filter. */
  id?: string | null;
  /** An informative summary of the filter. */
  description?: string | null;
  /** The filter expression. For more information, refer to [Expressions](https://developers.cloudflare.com/ruleset-engine/rules-language/expressions/). */
  expression?: string | null;
  /** When true, indicates that the filter is currently paused. */
  paused?: boolean | null;
  /** A short reference tag. Allows you to select related filters. */
  ref?: string | null;
}
const FirewallFilter = /*@__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    id: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
    description: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
    expression: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
    paused: Schema.optional(Schema.Union([Schema.Boolean, Schema.Null])),
    ref: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
  }),
) as unknown as Schema.Codec<FirewallFilter>;

interface DeletedFilter {
  /** The unique identifier of the filter. */
  id: string;
  /** When true, indicates that the firewall rule was deleted. */
  deleted: boolean;
}
const DeletedFilter = /*@__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    id: Schema.String,
    deleted: Schema.Boolean,
  }),
) as unknown as Schema.Codec<DeletedFilter>;

interface BulkPutRulesResponseResult {
  /** The unique identifier of the firewall rule. */
  id?: string | null;
  /** The action to apply to a matched request. The `log` action is only available on an Enterprise plan. */
  action?:
    | "block"
    | "challenge"
    | "js_challenge"
    | "managed_challenge"
    | "allow"
    | "log"
    | "bypass"
    | (string & {})
    | null;
  /** An informative summary of the firewall rule. */
  description?: string | null;
  filter?:
    | {
        id?: string | null;
        description?: string | null;
        expression?: string | null;
        paused?: boolean | null;
        ref?: string | null;
      }
    | { id: string; deleted: boolean }
    | null;
  /** When true, indicates that the firewall rule is currently paused. */
  paused?: boolean | null;
  /** The priority of the rule. Optional value used to define the processing order. A lower number indicates a higher priority. If not provided, rules with a defined priority will be processed before rules  */
  priority?: number | null;
  products?:
    | (
        | "zoneLockdown"
        | "uaBlock"
        | "bic"
        | "hot"
        | "securityLevel"
        | "rateLimit"
        | "waf"
        | (string & {})
      )[]
    | null;
  /** A short reference tag. Allows you to select related firewall rules. */
  ref?: string | null;
}
const BulkPutRulesResponseResult = /*@__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    id: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
    action: Schema.optional(
      Schema.Union([
        Schema.Union([
          Schema.Literals([
            "block",
            "challenge",
            "js_challenge",
            "managed_challenge",
            "allow",
            "log",
            "bypass",
          ]),
          Schema.String,
        ]),
        Schema.Null,
      ]),
    ),
    description: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
    filter: Schema.optional(
      Schema.Union([
        Schema.Union([DeletedFilter, FirewallFilter]),
        Schema.Null,
      ]),
    ),
    paused: Schema.optional(Schema.Union([Schema.Boolean, Schema.Null])),
    priority: Schema.optional(Schema.Union([Schema.Number, Schema.Null])),
    products: Schema.optional(
      Schema.Union([
        Schema.Array(
          Schema.Union([
            Schema.Literals([
              "zoneLockdown",
              "uaBlock",
              "bic",
              "hot",
              "securityLevel",
              "rateLimit",
              "waf",
            ]),
            Schema.String,
          ]),
        ),
        Schema.Null,
      ]),
    ),
    ref: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
  }),
) as unknown as Schema.Codec<BulkPutRulesResponseResult>;

interface Response {
  /** The response body to return. The value must conform to the configured content type. */
  body?: string | null;
  /** The content type of the body. Must be one of the following: `text/plain`, `text/xml`, or `application/json`. */
  contentType?: string | null;
}
const Response = /*@__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    body: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
    contentType: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
  }).pipe(Schema.encodeKeys({ body: "body", contentType: "content_type" })),
) as unknown as Schema.Codec<Response>;

interface Action {
  /** The action to perform. */
  mode?:
    | "simulate"
    | "ban"
    | "challenge"
    | "js_challenge"
    | "managed_challenge"
    | (string & {})
    | null;
  /** A custom content type and reponse to return when the threshold is exceeded. The custom response configured in this object will override the custom error for the zone. This object is optional. Notes: I */
  response?: { body?: string | null; contentType?: string | null } | null;
  /** The time in seconds during which Cloudflare will perform the mitigation action. Must be an integer value greater than or equal to the period. Notes: If "mode" is "challenge", "managed_challenge", or " */
  timeout?: number | null;
}
const Action = /*@__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    mode: Schema.optional(
      Schema.Union([
        Schema.Union([
          Schema.Literals([
            "simulate",
            "ban",
            "challenge",
            "js_challenge",
            "managed_challenge",
          ]),
          Schema.String,
        ]),
        Schema.Null,
      ]),
    ),
    response: Schema.optional(Schema.Union([Response, Schema.Null])),
    timeout: Schema.optional(Schema.Union([Schema.Number, Schema.Null])),
  }),
) as unknown as Schema.Codec<Action>;

interface FirewallFilterParam {
  /** An informative summary of the filter. */
  description?: string | null;
  /** The filter expression. For more information, refer to [Expressions](https://developers.cloudflare.com/ruleset-engine/rules-language/expressions/). */
  expression?: string | null;
  /** When true, indicates that the filter is currently paused. */
  paused?: boolean | null;
  /** A short reference tag. Allows you to select related filters. */
  ref?: string | null;
}
const FirewallFilterParam = /*@__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    description: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
    expression: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
    paused: Schema.optional(Schema.Union([Schema.Boolean, Schema.Null])),
    ref: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
  }),
) as unknown as Schema.Codec<FirewallFilterParam>;

interface Configuration {
  /** The configuration target for this rule. You must set the target to `ua` for User Agent Blocking rules. */
  target?: string | null;
  /** The exact user agent string to match. This value will be compared to the received `User-Agent` HTTP header value. */
  value?: string | null;
}
const Configuration = /*@__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    target: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
    value: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
  }),
) as unknown as Schema.Codec<Configuration>;

interface ListUaRulesResponseResult {
  /** The unique identifier of the User Agent Blocking rule. */
  id?: string | null;
  /** The configuration object for the current rule. */
  configuration?: { target?: string | null; value?: string | null } | null;
  /** An informative summary of the rule. */
  description?: string | null;
  /** The action to apply to a matched request. */
  mode?:
    | "block"
    | "challenge"
    | "js_challenge"
    | "managed_challenge"
    | (string & {})
    | null;
  /** When true, indicates that the rule is currently paused. */
  paused?: boolean | null;
}
const ListUaRulesResponseResult = /*@__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    id: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
    configuration: Schema.optional(Schema.Union([Configuration, Schema.Null])),
    description: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
    mode: Schema.optional(
      Schema.Union([
        Schema.Union([
          Schema.Literals([
            "block",
            "challenge",
            "js_challenge",
            "managed_challenge",
          ]),
          Schema.String,
        ]),
        Schema.Null,
      ]),
    ),
    paused: Schema.optional(Schema.Union([Schema.Boolean, Schema.Null])),
  }),
) as unknown as Schema.Codec<ListUaRulesResponseResult>;

interface Configuration2 {
  /** The configuration target. You must set the target to `ua` when specifying a user agent in the rule. */
  target?: "ua" | null;
  /** the user agent to exactly match */
  value?: string | null;
}
const Configuration2 = /*@__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    target: Schema.optional(Schema.Union([Schema.Literal("ua"), Schema.Null])),
    value: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
  }),
) as unknown as Schema.Codec<Configuration2>;

interface RewriteAction {
  /** The WAF rule action to apply. */
  block?:
    | "challenge"
    | "block"
    | "simulate"
    | "disable"
    | "default"
    | (string & {})
    | null;
  /** The WAF rule action to apply. */
  challenge?:
    | "challenge"
    | "block"
    | "simulate"
    | "disable"
    | "default"
    | (string & {})
    | null;
  /** The WAF rule action to apply. */
  default?:
    | "challenge"
    | "block"
    | "simulate"
    | "disable"
    | "default"
    | (string & {})
    | null;
  /** The WAF rule action to apply. */
  disable?:
    | "challenge"
    | "block"
    | "simulate"
    | "disable"
    | "default"
    | (string & {})
    | null;
  /** The WAF rule action to apply. */
  simulate?:
    | "challenge"
    | "block"
    | "simulate"
    | "disable"
    | "default"
    | (string & {})
    | null;
}
const RewriteAction = /*@__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    block: Schema.optional(
      Schema.Union([
        Schema.Union([
          Schema.Literals([
            "challenge",
            "block",
            "simulate",
            "disable",
            "default",
          ]),
          Schema.String,
        ]),
        Schema.Null,
      ]),
    ),
    challenge: Schema.optional(
      Schema.Union([
        Schema.Union([
          Schema.Literals([
            "challenge",
            "block",
            "simulate",
            "disable",
            "default",
          ]),
          Schema.String,
        ]),
        Schema.Null,
      ]),
    ),
    default: Schema.optional(
      Schema.Union([
        Schema.Union([
          Schema.Literals([
            "challenge",
            "block",
            "simulate",
            "disable",
            "default",
          ]),
          Schema.String,
        ]),
        Schema.Null,
      ]),
    ),
    disable: Schema.optional(
      Schema.Union([
        Schema.Union([
          Schema.Literals([
            "challenge",
            "block",
            "simulate",
            "disable",
            "default",
          ]),
          Schema.String,
        ]),
        Schema.Null,
      ]),
    ),
    simulate: Schema.optional(
      Schema.Union([
        Schema.Union([
          Schema.Literals([
            "challenge",
            "block",
            "simulate",
            "disable",
            "default",
          ]),
          Schema.String,
        ]),
        Schema.Null,
      ]),
    ),
  }),
) as unknown as Schema.Codec<RewriteAction>;

interface ListWafOverridesResponseResult {
  /** The unique identifier of the WAF override. */
  id?: string | null;
  /** An informative summary of the current URI-based WAF override. */
  description?: string | null;
  /** An object that allows you to enable or disable WAF rule groups for the current WAF override. Each key of this object must be the ID of a WAF rule group, and each value must be a valid WAF action (usua */
  groups?: Record<string, unknown> | null;
  /** When true, indicates that the rule is currently paused. */
  paused?: boolean | null;
  /** The relative priority of the current URI-based WAF override when multiple overrides match a single URL. A lower number indicates higher priority. Higher priority overrides may overwrite values set by  */
  priority?: number | null;
  /** Specifies that, when a WAF rule matches, its configured action will be replaced by the action configured in this object. */
  rewriteAction?: {
    block?:
      | "challenge"
      | "block"
      | "simulate"
      | "disable"
      | "default"
      | (string & {})
      | null;
    challenge?:
      | "challenge"
      | "block"
      | "simulate"
      | "disable"
      | "default"
      | (string & {})
      | null;
    default?:
      | "challenge"
      | "block"
      | "simulate"
      | "disable"
      | "default"
      | (string & {})
      | null;
    disable?:
      | "challenge"
      | "block"
      | "simulate"
      | "disable"
      | "default"
      | (string & {})
      | null;
    simulate?:
      | "challenge"
      | "block"
      | "simulate"
      | "disable"
      | "default"
      | (string & {})
      | null;
  } | null;
  /** An object that allows you to override the action of specific WAF rules. Each key of this object must be the ID of a WAF rule, and each value must be a valid WAF action. Unless you are disabling a rule */
  rules?: Record<string, unknown> | null;
  /** The URLs to include in the current WAF override. You can use wildcards. Each entered URL will be escaped before use, which means you can only use simple wildcard patterns. */
  urls?: string[] | null;
}
const ListWafOverridesResponseResult =
  /*@__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      id: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
      description: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
      groups: Schema.optional(
        Schema.Union([
          Schema.Record(Schema.String, Schema.Unknown),
          Schema.Null,
        ]),
      ),
      paused: Schema.optional(Schema.Union([Schema.Boolean, Schema.Null])),
      priority: Schema.optional(Schema.Union([Schema.Number, Schema.Null])),
      rewriteAction: Schema.optional(
        Schema.Union([RewriteAction, Schema.Null]),
      ),
      rules: Schema.optional(
        Schema.Union([
          Schema.Record(Schema.String, Schema.Unknown),
          Schema.Null,
        ]),
      ),
      urls: Schema.optional(
        Schema.Union([Schema.Array(Schema.String), Schema.Null]),
      ),
    }).pipe(
      Schema.encodeKeys({
        id: "id",
        description: "description",
        groups: "groups",
        paused: "paused",
        priority: "priority",
        rewriteAction: "rewrite_action",
        rules: "rules",
        urls: "urls",
      }),
    ),
  ) as unknown as Schema.Codec<ListWafOverridesResponseResult>;

interface Source {
  pointer?: string | null;
}
const Source = /*@__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    pointer: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
  }),
) as unknown as Schema.Codec<Source>;

interface ResponseInfo {
  code: number;
  message: string;
  documentationUrl?: string | null;
  source?: { pointer?: string | null } | null;
}
const ResponseInfo = /*@__PURE__*/ Schema.suspend(() =>
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
) as unknown as Schema.Codec<ResponseInfo>;

interface FirewallAPIResponseSingle {
  errors: {
    code: number;
    message: string;
    documentationUrl?: string | null;
    source?: { pointer?: string | null } | null;
  }[];
  messages: {
    code: number;
    message: string;
    documentationUrl?: string | null;
    source?: { pointer?: string | null } | null;
  }[];
  result: unknown;
  /** Defines whether the API call was successful. */
  success: true;
}
const FirewallAPIResponseSingle = /*@__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    errors: Schema.Array(ResponseInfo),
    messages: Schema.Array(ResponseInfo),
    result: Schema.Unknown,
    success: Schema.Literal(true),
  }),
) as unknown as Schema.Codec<FirewallAPIResponseSingle>;

interface Result {
  result?: unknown | null;
}
const Result = /*@__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    result: Schema.optional(Schema.Union([Schema.Unknown, Schema.Null])),
  }),
) as unknown as Schema.Codec<Result>;

interface ListWafPackageGroupsResponseResult {
  /** Defines the unique identifier of the rule group. */
  id: string;
  /** Defines an informative summary of what the rule group does. */
  description: string | null;
  /** Defines the state of the rules contained in the rule group. When `on`, the rules in the group are configurable/usable. */
  mode: "on" | "off" | (string & {});
  /** Defines the name of the rule group. */
  name: string;
  /** Defines the number of rules in the current rule group. */
  rulesCount: number;
  /** Defines the available states for the rule group. */
  allowedModes?: ("on" | "off" | (string & {}))[] | null;
  /** Defines the number of rules within the group that have been modified from their default configuration. */
  modifiedRulesCount?: number | null;
  /** Defines the unique identifier of a WAF package. */
  packageId?: string | null;
}
const ListWafPackageGroupsResponseResult =
  /*@__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      id: Schema.String,
      description: Schema.Union([Schema.String, Schema.Null]),
      mode: Schema.Union([Schema.Literals(["on", "off"]), Schema.String]),
      name: Schema.String,
      rulesCount: Schema.Number,
      allowedModes: Schema.optional(
        Schema.Union([
          Schema.Array(
            Schema.Union([Schema.Literals(["on", "off"]), Schema.String]),
          ),
          Schema.Null,
        ]),
      ),
      modifiedRulesCount: Schema.optional(
        Schema.Union([Schema.Number, Schema.Null]),
      ),
      packageId: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
    }).pipe(
      Schema.encodeKeys({
        id: "id",
        description: "description",
        mode: "mode",
        name: "name",
        rulesCount: "rules_count",
        allowedModes: "allowed_modes",
        modifiedRulesCount: "modified_rules_count",
        packageId: "package_id",
      }),
    ),
  ) as unknown as Schema.Codec<ListWafPackageGroupsResponseResult>;

interface WafruleGroup {
  /** Defines the unique identifier of the rule group. */
  id?: string | null;
  /** Defines the name of the rule group. */
  name?: string | null;
}
const WafruleGroup = /*@__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    id: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
    name: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
  }),
) as unknown as Schema.Codec<WafruleGroup>;

interface WafmanagedRulesAnomalyRule {
  /** Defines the unique identifier of the WAF rule. */
  id: string;
  /** Defines the available modes for the current WAF rule. Applies to anomaly detection WAF rules. */
  allowedModes: ("on" | "off" | (string & {}))[];
  /** Defines the public description of the WAF rule. */
  description: string;
  /** Defines the rule group to which the current WAF rule belongs. */
  group: { id?: string | null; name?: string | null };
  /** Defines the mode anomaly. When set to `on`, the current WAF rule will be used when evaluating the request. Applies to anomaly detection WAF rules. */
  mode: "on" | "off" | (string & {});
  /** Defines the unique identifier of a WAF package. */
  packageId: string;
  /** Defines the order in which the individual WAF rule is executed within its rule group. */
  priority: string;
}
const WafmanagedRulesAnomalyRule = /*@__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    id: Schema.String,
    allowedModes: Schema.Array(
      Schema.Union([Schema.Literals(["on", "off"]), Schema.String]),
    ),
    description: Schema.String,
    group: WafruleGroup,
    mode: Schema.Union([Schema.Literals(["on", "off"]), Schema.String]),
    packageId: Schema.String,
    priority: Schema.String,
  }).pipe(
    Schema.encodeKeys({
      id: "id",
      allowedModes: "allowed_modes",
      description: "description",
      group: "group",
      mode: "mode",
      packageId: "package_id",
      priority: "priority",
    }),
  ),
) as unknown as Schema.Codec<WafmanagedRulesAnomalyRule>;

interface WafmanagedRulesTraditionalDenyRule {
  /** Defines the unique identifier of the WAF rule. */
  id: string;
  /** Defines the list of possible actions of the WAF rule when it is triggered. */
  allowedModes: (
    | "default"
    | "disable"
    | "simulate"
    | "block"
    | "challenge"
    | (string & {})
  )[];
  /** Defines the default action/mode of a rule. */
  defaultMode: "disable" | "simulate" | "block" | "challenge" | (string & {});
  /** Defines the public description of the WAF rule. */
  description: string;
  /** Defines the rule group to which the current WAF rule belongs. */
  group: { id?: string | null; name?: string | null };
  /** Defines the action that the current WAF rule will perform when triggered. Applies to traditional (deny) WAF rules. */
  mode:
    | "default"
    | "disable"
    | "simulate"
    | "block"
    | "challenge"
    | (string & {});
  /** Defines the unique identifier of a WAF package. */
  packageId: string;
  /** Defines the order in which the individual WAF rule is executed within its rule group. */
  priority: string;
}
const WafmanagedRulesTraditionalDenyRule =
  /*@__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      id: Schema.String,
      allowedModes: Schema.Array(
        Schema.Union([
          Schema.Literals([
            "default",
            "disable",
            "simulate",
            "block",
            "challenge",
          ]),
          Schema.String,
        ]),
      ),
      defaultMode: Schema.Union([
        Schema.Literals(["disable", "simulate", "block", "challenge"]),
        Schema.String,
      ]),
      description: Schema.String,
      group: WafruleGroup,
      mode: Schema.Union([
        Schema.Literals([
          "default",
          "disable",
          "simulate",
          "block",
          "challenge",
        ]),
        Schema.String,
      ]),
      packageId: Schema.String,
      priority: Schema.String,
    }).pipe(
      Schema.encodeKeys({
        id: "id",
        allowedModes: "allowed_modes",
        defaultMode: "default_mode",
        description: "description",
        group: "group",
        mode: "mode",
        packageId: "package_id",
        priority: "priority",
      }),
    ),
  ) as unknown as Schema.Codec<WafmanagedRulesTraditionalDenyRule>;

// =============================================================================
// AccessRule
// =============================================================================

const GetAccessRuleBaseFields = {
  ruleId: Schema.String.pipe(T.HttpPath("ruleId")),
} as const;

interface GetAccessRuleBaseRequest {
  ruleId: string;
}

export interface GetAccessRuleForAccountRequest extends GetAccessRuleBaseRequest {
  /** Path param: The Account ID to use for this endpoint. */
  accountId: string;
}

export interface GetAccessRuleForZoneRequest extends GetAccessRuleBaseRequest {
  /** Path param: The Zone ID to use for this endpoint. */
  zoneId: string;
}

export const GetAccessRuleForAccountRequest =
  /*@__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      accountId: Schema.String.pipe(T.HttpPath("account_id")),
      ...GetAccessRuleBaseFields,
    }).pipe(
      T.Http({
        method: "GET",
        path: "/accounts/{account_id}/firewall/access_rules/rules/{ruleId}",
      }),
    ),
  ) as unknown as Schema.Codec<GetAccessRuleForAccountRequest>;

export const GetAccessRuleForZoneRequest =
  /*@__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      zoneId: Schema.String.pipe(T.HttpPath("zone_id")),
      ...GetAccessRuleBaseFields,
    }).pipe(
      T.Http({
        method: "GET",
        path: "/zones/{zone_id}/firewall/access_rules/rules/{ruleId}",
      }),
    ),
  ) as unknown as Schema.Codec<GetAccessRuleForZoneRequest>;

export interface GetAccessRuleResponse {
  /** The unique identifier of the IP Access rule. */
  id: string;
  /** The available actions that a rule can apply to a matched request. */
  allowedModes: (
    | "block"
    | "challenge"
    | "whitelist"
    | "js_challenge"
    | "managed_challenge"
    | (string & {})
  )[];
  /** The rule configuration. */
  configuration:
    | { target?: "ip" | null; value?: string | null }
    | { target?: "ip6" | null; value?: string | null }
    | { target?: "ip_range" | null; value?: string | null }
    | { target?: "asn" | null; value?: string | null }
    | { target?: "country" | null; value?: string | null };
  /** The action to apply to a matched request. */
  mode:
    | "block"
    | "challenge"
    | "whitelist"
    | "js_challenge"
    | "managed_challenge"
    | (string & {});
  /** The timestamp of when the rule was created. */
  createdOn?: string | null;
  /** The timestamp of when the rule was last modified. */
  modifiedOn?: string | null;
  /** An informative summary of the rule, typically used as a reminder or explanation. */
  notes?: string | null;
  /** All zones owned by the user will have the rule applied. */
  scope?: {
    id?: string | null;
    email?: string | null;
    type?: "user" | "organization" | (string & {}) | null;
  } | null;
}

export const GetAccessRuleResponse = /*@__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    id: Schema.String,
    allowedModes: Schema.Array(
      Schema.Union([
        Schema.Literals([
          "block",
          "challenge",
          "whitelist",
          "js_challenge",
          "managed_challenge",
        ]),
        Schema.String,
      ]),
    ),
    configuration: Schema.Union([
      AccessRuleIPConfiguration,
      Ipv6Configuration,
      AccessRuleCIDRConfiguration,
      Asnconfiguration,
      CountryConfiguration,
    ]),
    mode: Schema.Union([
      Schema.Literals([
        "block",
        "challenge",
        "whitelist",
        "js_challenge",
        "managed_challenge",
      ]),
      Schema.String,
    ]),
    createdOn: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
    modifiedOn: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
    notes: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
    scope: Schema.optional(Schema.Union([Scope, Schema.Null])),
  })
    .pipe(
      Schema.encodeKeys({
        id: "id",
        allowedModes: "allowed_modes",
        configuration: "configuration",
        mode: "mode",
        createdOn: "created_on",
        modifiedOn: "modified_on",
        notes: "notes",
        scope: "scope",
      }),
    )
    .pipe(T.ResponsePath("result")),
) as unknown as Schema.Codec<GetAccessRuleResponse>;

export type GetAccessRuleError = DefaultErrors | AccessRuleNotFound | Forbidden;

export const getAccessRuleForAccount: API.OperationMethod<
  GetAccessRuleForAccountRequest,
  GetAccessRuleResponse,
  GetAccessRuleError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: GetAccessRuleForAccountRequest,
  output: GetAccessRuleResponse,
  errors: [AccessRuleNotFound, Forbidden],
}));

export const getAccessRuleForZone: API.OperationMethod<
  GetAccessRuleForZoneRequest,
  GetAccessRuleResponse,
  GetAccessRuleError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: GetAccessRuleForZoneRequest,
  output: GetAccessRuleResponse,
  errors: [AccessRuleNotFound, Forbidden],
}));

const ListAccessRulesBaseFields = {
  page: Schema.optional(Schema.Number).pipe(T.HttpQuery("page")),
  perPage: Schema.optional(Schema.Number).pipe(T.HttpQuery("per_page")),
  configuration: Schema.optional(
    Schema.Struct({
      target: Schema.optional(
        Schema.Union([
          Schema.Literals(["ip", "ip_range", "asn", "country"]),
          Schema.String,
        ]),
      ),
      value: Schema.optional(Schema.String),
    }),
  ).pipe(T.HttpQuery("configuration")),
  direction: Schema.optional(
    Schema.Union([Schema.Literals(["asc", "desc"]), Schema.String]),
  ).pipe(T.HttpQuery("direction")),
  match: Schema.optional(
    Schema.Union([Schema.Literals(["any", "all"]), Schema.String]),
  ).pipe(T.HttpQuery("match")),
  mode: Schema.optional(
    Schema.Union([
      Schema.Literals([
        "block",
        "challenge",
        "whitelist",
        "js_challenge",
        "managed_challenge",
      ]),
      Schema.String,
    ]),
  ).pipe(T.HttpQuery("mode")),
  notes: Schema.optional(Schema.String).pipe(T.HttpQuery("notes")),
  order: Schema.optional(
    Schema.Union([
      Schema.Literals(["configuration.target", "configuration.value", "mode"]),
      Schema.String,
    ]),
  ).pipe(T.HttpQuery("order")),
} as const;

interface ListAccessRulesBaseRequest {
  page?: number;
  perPage?: number;
  /** Query param */
  configuration?: {
    target?: "ip" | "ip_range" | "asn" | "country" | (string & {});
    value?: string;
  };
  /** Query param: Defines the direction used to sort returned rules. */
  direction?: "asc" | "desc" | (string & {});
  /** Query param: Defines the search requirements. When set to `all`, all the search requirements must match. When set to `any`, only one of the search requirements has to match. */
  match?: "any" | "all" | (string & {});
  /** Query param: The action to apply to a matched request. */
  mode?:
    | "block"
    | "challenge"
    | "whitelist"
    | "js_challenge"
    | "managed_challenge"
    | (string & {});
  /** Query param: Defines the string to search for in the notes of existing IP Access rules. Notes: For example, the string 'attack' would match IP Access rules with notes 'Attack 26/02' and 'Attack 27/02' */
  notes?: string;
  /** Query param: Defines the field used to sort returned rules. */
  order?:
    | "configuration.target"
    | "configuration.value"
    | "mode"
    | (string & {});
}

export interface ListAccessRulesForAccountRequest extends ListAccessRulesBaseRequest {
  /** Path param: The Account ID to use for this endpoint. */
  accountId: string;
}

export interface ListAccessRulesForZoneRequest extends ListAccessRulesBaseRequest {
  /** Path param: The Zone ID to use for this endpoint. */
  zoneId: string;
}

export const ListAccessRulesForAccountRequest =
  /*@__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      accountId: Schema.String.pipe(T.HttpPath("account_id")),
      ...ListAccessRulesBaseFields,
    }).pipe(
      T.Http({
        method: "GET",
        path: "/accounts/{account_id}/firewall/access_rules/rules",
      }),
    ),
  ) as unknown as Schema.Codec<ListAccessRulesForAccountRequest>;

export const ListAccessRulesForZoneRequest =
  /*@__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      zoneId: Schema.String.pipe(T.HttpPath("zone_id")),
      ...ListAccessRulesBaseFields,
    }).pipe(
      T.Http({
        method: "GET",
        path: "/zones/{zone_id}/firewall/access_rules/rules",
      }),
    ),
  ) as unknown as Schema.Codec<ListAccessRulesForZoneRequest>;

export interface ListAccessRulesResponse {
  result: {
    id: string;
    allowedModes: (
      | "block"
      | "challenge"
      | "whitelist"
      | "js_challenge"
      | "managed_challenge"
      | (string & {})
    )[];
    configuration:
      | { target?: "ip" | null; value?: string | null }
      | { target?: "ip6" | null; value?: string | null }
      | { target?: "ip_range" | null; value?: string | null }
      | { target?: "asn" | null; value?: string | null }
      | { target?: "country" | null; value?: string | null };
    mode:
      | "block"
      | "challenge"
      | "whitelist"
      | "js_challenge"
      | "managed_challenge"
      | (string & {});
    createdOn?: string | null;
    modifiedOn?: string | null;
    notes?: string | null;
    scope?: {
      id?: string | null;
      email?: string | null;
      type?: "user" | "organization" | (string & {}) | null;
    } | null;
  }[];
  resultInfo?: {
    count?: number | null;
    page?: number | null;
    perPage?: number | null;
    totalCount?: number | null;
  } | null;
}

export const ListAccessRulesResponse =
  /*@__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      result: Schema.Array(ListAccessRulesResponseResult),
      resultInfo: Schema.optional(
        Schema.Union([ListAccessRulesResponseResultInfo, Schema.Null]),
      ),
    }).pipe(Schema.encodeKeys({ result: "result", resultInfo: "result_info" })),
  ) as unknown as Schema.Codec<ListAccessRulesResponse>;

export type ListAccessRulesError = DefaultErrors | Forbidden;

export const listAccessRulesForAccount: API.PaginatedOperationMethod<
  ListAccessRulesForAccountRequest,
  ListAccessRulesResponse,
  ListAccessRulesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: ListAccessRulesForAccountRequest,
  output: ListAccessRulesResponse,
  errors: [Forbidden],
  pagination: {
    mode: "page",
    inputToken: "page",
    outputToken: "resultInfo.page",
    items: "result",
    pageSize: "perPage",
  } as const,
}));

export const listAccessRulesForZone: API.PaginatedOperationMethod<
  ListAccessRulesForZoneRequest,
  ListAccessRulesResponse,
  ListAccessRulesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: ListAccessRulesForZoneRequest,
  output: ListAccessRulesResponse,
  errors: [Forbidden],
  pagination: {
    mode: "page",
    inputToken: "page",
    outputToken: "resultInfo.page",
    items: "result",
    pageSize: "perPage",
  } as const,
}));

const CreateAccessRuleBaseFields = {
  configuration: Schema.Union([
    AccessRuleIPConfiguration,
    Ipv6Configuration,
    AccessRuleCIDRConfiguration,
    Asnconfiguration,
    CountryConfiguration,
  ]),
  mode: Schema.Union([
    Schema.Literals([
      "block",
      "challenge",
      "whitelist",
      "js_challenge",
      "managed_challenge",
    ]),
    Schema.String,
  ]),
  notes: Schema.optional(Schema.String),
} as const;

interface CreateAccessRuleBaseRequest {
  /** Body param: The rule configuration. */
  configuration:
    | { target?: "ip"; value?: string }
    | { target?: "ip6"; value?: string }
    | { target?: "ip_range"; value?: string }
    | { target?: "asn"; value?: string }
    | { target?: "country"; value?: string };
  /** Body param: The action to apply to a matched request. */
  mode:
    | "block"
    | "challenge"
    | "whitelist"
    | "js_challenge"
    | "managed_challenge"
    | (string & {});
  /** Body param: An informative summary of the rule, typically used as a reminder or explanation. */
  notes?: string;
}

export interface CreateAccessRuleForAccountRequest extends CreateAccessRuleBaseRequest {
  /** Path param: The Account ID to use for this endpoint. */
  accountId: string;
}

export interface CreateAccessRuleForZoneRequest extends CreateAccessRuleBaseRequest {
  /** Path param: The Zone ID to use for this endpoint. */
  zoneId: string;
}

export const CreateAccessRuleForAccountRequest =
  /*@__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      accountId: Schema.String.pipe(T.HttpPath("account_id")),
      ...CreateAccessRuleBaseFields,
    }).pipe(
      T.Http({
        method: "POST",
        path: "/accounts/{account_id}/firewall/access_rules/rules",
      }),
    ),
  ) as unknown as Schema.Codec<CreateAccessRuleForAccountRequest>;

export const CreateAccessRuleForZoneRequest =
  /*@__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      zoneId: Schema.String.pipe(T.HttpPath("zone_id")),
      ...CreateAccessRuleBaseFields,
    }).pipe(
      T.Http({
        method: "POST",
        path: "/zones/{zone_id}/firewall/access_rules/rules",
      }),
    ),
  ) as unknown as Schema.Codec<CreateAccessRuleForZoneRequest>;

export interface CreateAccessRuleResponse {
  /** The unique identifier of the IP Access rule. */
  id: string;
  /** The available actions that a rule can apply to a matched request. */
  allowedModes: (
    | "block"
    | "challenge"
    | "whitelist"
    | "js_challenge"
    | "managed_challenge"
    | (string & {})
  )[];
  /** The rule configuration. */
  configuration:
    | { target?: "ip" | null; value?: string | null }
    | { target?: "ip6" | null; value?: string | null }
    | { target?: "ip_range" | null; value?: string | null }
    | { target?: "asn" | null; value?: string | null }
    | { target?: "country" | null; value?: string | null };
  /** The action to apply to a matched request. */
  mode:
    | "block"
    | "challenge"
    | "whitelist"
    | "js_challenge"
    | "managed_challenge"
    | (string & {});
  /** The timestamp of when the rule was created. */
  createdOn?: string | null;
  /** The timestamp of when the rule was last modified. */
  modifiedOn?: string | null;
  /** An informative summary of the rule, typically used as a reminder or explanation. */
  notes?: string | null;
  /** All zones owned by the user will have the rule applied. */
  scope?: {
    id?: string | null;
    email?: string | null;
    type?: "user" | "organization" | (string & {}) | null;
  } | null;
}

export const CreateAccessRuleResponse =
  /*@__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      id: Schema.String,
      allowedModes: Schema.Array(
        Schema.Union([
          Schema.Literals([
            "block",
            "challenge",
            "whitelist",
            "js_challenge",
            "managed_challenge",
          ]),
          Schema.String,
        ]),
      ),
      configuration: Schema.Union([
        AccessRuleIPConfiguration,
        Ipv6Configuration,
        AccessRuleCIDRConfiguration,
        Asnconfiguration,
        CountryConfiguration,
      ]),
      mode: Schema.Union([
        Schema.Literals([
          "block",
          "challenge",
          "whitelist",
          "js_challenge",
          "managed_challenge",
        ]),
        Schema.String,
      ]),
      createdOn: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
      modifiedOn: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
      notes: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
      scope: Schema.optional(Schema.Union([Scope, Schema.Null])),
    })
      .pipe(
        Schema.encodeKeys({
          id: "id",
          allowedModes: "allowed_modes",
          configuration: "configuration",
          mode: "mode",
          createdOn: "created_on",
          modifiedOn: "modified_on",
          notes: "notes",
          scope: "scope",
        }),
      )
      .pipe(T.ResponsePath("result")),
  ) as unknown as Schema.Codec<CreateAccessRuleResponse>;

export type CreateAccessRuleError =
  | DefaultErrors
  | DuplicateAccessRule
  | Forbidden;

export const createAccessRuleForAccount: API.OperationMethod<
  CreateAccessRuleForAccountRequest,
  CreateAccessRuleResponse,
  CreateAccessRuleError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: CreateAccessRuleForAccountRequest,
  output: CreateAccessRuleResponse,
  errors: [DuplicateAccessRule, Forbidden],
}));

export const createAccessRuleForZone: API.OperationMethod<
  CreateAccessRuleForZoneRequest,
  CreateAccessRuleResponse,
  CreateAccessRuleError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: CreateAccessRuleForZoneRequest,
  output: CreateAccessRuleResponse,
  errors: [DuplicateAccessRule, Forbidden],
}));

const PatchAccessRuleBaseFields = {
  ruleId: Schema.String.pipe(T.HttpPath("ruleId")),
  configuration: Schema.Union([
    AccessRuleIPConfiguration,
    Ipv6Configuration,
    AccessRuleCIDRConfiguration,
    Asnconfiguration,
    CountryConfiguration,
  ]),
  mode: Schema.Union([
    Schema.Literals([
      "block",
      "challenge",
      "whitelist",
      "js_challenge",
      "managed_challenge",
    ]),
    Schema.String,
  ]),
  notes: Schema.optional(Schema.String),
} as const;

interface PatchAccessRuleBaseRequest {
  ruleId: string;
  /** Body param: The rule configuration. */
  configuration:
    | { target?: "ip"; value?: string }
    | { target?: "ip6"; value?: string }
    | { target?: "ip_range"; value?: string }
    | { target?: "asn"; value?: string }
    | { target?: "country"; value?: string };
  /** Body param: The action to apply to a matched request. */
  mode:
    | "block"
    | "challenge"
    | "whitelist"
    | "js_challenge"
    | "managed_challenge"
    | (string & {});
  /** Body param: An informative summary of the rule, typically used as a reminder or explanation. */
  notes?: string;
}

export interface PatchAccessRuleForAccountRequest extends PatchAccessRuleBaseRequest {
  /** Path param: The Account ID to use for this endpoint. */
  accountId: string;
}

export interface PatchAccessRuleForZoneRequest extends PatchAccessRuleBaseRequest {
  /** Path param: The Zone ID to use for this endpoint. */
  zoneId: string;
}

export const PatchAccessRuleForAccountRequest =
  /*@__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      accountId: Schema.String.pipe(T.HttpPath("account_id")),
      ...PatchAccessRuleBaseFields,
    }).pipe(
      T.Http({
        method: "PATCH",
        path: "/accounts/{account_id}/firewall/access_rules/rules/{ruleId}",
      }),
    ),
  ) as unknown as Schema.Codec<PatchAccessRuleForAccountRequest>;

export const PatchAccessRuleForZoneRequest =
  /*@__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      zoneId: Schema.String.pipe(T.HttpPath("zone_id")),
      ...PatchAccessRuleBaseFields,
    }).pipe(
      T.Http({
        method: "PATCH",
        path: "/zones/{zone_id}/firewall/access_rules/rules/{ruleId}",
      }),
    ),
  ) as unknown as Schema.Codec<PatchAccessRuleForZoneRequest>;

export interface PatchAccessRuleResponse {
  /** The unique identifier of the IP Access rule. */
  id: string;
  /** The available actions that a rule can apply to a matched request. */
  allowedModes: (
    | "block"
    | "challenge"
    | "whitelist"
    | "js_challenge"
    | "managed_challenge"
    | (string & {})
  )[];
  /** The rule configuration. */
  configuration:
    | { target?: "ip" | null; value?: string | null }
    | { target?: "ip6" | null; value?: string | null }
    | { target?: "ip_range" | null; value?: string | null }
    | { target?: "asn" | null; value?: string | null }
    | { target?: "country" | null; value?: string | null };
  /** The action to apply to a matched request. */
  mode:
    | "block"
    | "challenge"
    | "whitelist"
    | "js_challenge"
    | "managed_challenge"
    | (string & {});
  /** The timestamp of when the rule was created. */
  createdOn?: string | null;
  /** The timestamp of when the rule was last modified. */
  modifiedOn?: string | null;
  /** An informative summary of the rule, typically used as a reminder or explanation. */
  notes?: string | null;
  /** All zones owned by the user will have the rule applied. */
  scope?: {
    id?: string | null;
    email?: string | null;
    type?: "user" | "organization" | (string & {}) | null;
  } | null;
}

export const PatchAccessRuleResponse =
  /*@__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      id: Schema.String,
      allowedModes: Schema.Array(
        Schema.Union([
          Schema.Literals([
            "block",
            "challenge",
            "whitelist",
            "js_challenge",
            "managed_challenge",
          ]),
          Schema.String,
        ]),
      ),
      configuration: Schema.Union([
        AccessRuleIPConfiguration,
        Ipv6Configuration,
        AccessRuleCIDRConfiguration,
        Asnconfiguration,
        CountryConfiguration,
      ]),
      mode: Schema.Union([
        Schema.Literals([
          "block",
          "challenge",
          "whitelist",
          "js_challenge",
          "managed_challenge",
        ]),
        Schema.String,
      ]),
      createdOn: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
      modifiedOn: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
      notes: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
      scope: Schema.optional(Schema.Union([Scope, Schema.Null])),
    })
      .pipe(
        Schema.encodeKeys({
          id: "id",
          allowedModes: "allowed_modes",
          configuration: "configuration",
          mode: "mode",
          createdOn: "created_on",
          modifiedOn: "modified_on",
          notes: "notes",
          scope: "scope",
        }),
      )
      .pipe(T.ResponsePath("result")),
  ) as unknown as Schema.Codec<PatchAccessRuleResponse>;

export type PatchAccessRuleError =
  | DefaultErrors
  | AccessRuleNotFound
  | Forbidden;

export const patchAccessRuleForAccount: API.OperationMethod<
  PatchAccessRuleForAccountRequest,
  PatchAccessRuleResponse,
  PatchAccessRuleError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: PatchAccessRuleForAccountRequest,
  output: PatchAccessRuleResponse,
  errors: [AccessRuleNotFound, Forbidden],
}));

export const patchAccessRuleForZone: API.OperationMethod<
  PatchAccessRuleForZoneRequest,
  PatchAccessRuleResponse,
  PatchAccessRuleError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: PatchAccessRuleForZoneRequest,
  output: PatchAccessRuleResponse,
  errors: [AccessRuleNotFound, Forbidden],
}));

const DeleteAccessRuleBaseFields = {
  ruleId: Schema.String.pipe(T.HttpPath("ruleId")),
} as const;

interface DeleteAccessRuleBaseRequest {
  ruleId: string;
}

export interface DeleteAccessRuleForAccountRequest extends DeleteAccessRuleBaseRequest {
  /** Path param: The Account ID to use for this endpoint. */
  accountId: string;
}

export interface DeleteAccessRuleForZoneRequest extends DeleteAccessRuleBaseRequest {
  /** Path param: The Zone ID to use for this endpoint. */
  zoneId: string;
}

export const DeleteAccessRuleForAccountRequest =
  /*@__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      accountId: Schema.String.pipe(T.HttpPath("account_id")),
      ...DeleteAccessRuleBaseFields,
    }).pipe(
      T.Http({
        method: "DELETE",
        path: "/accounts/{account_id}/firewall/access_rules/rules/{ruleId}",
      }),
    ),
  ) as unknown as Schema.Codec<DeleteAccessRuleForAccountRequest>;

export const DeleteAccessRuleForZoneRequest =
  /*@__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      zoneId: Schema.String.pipe(T.HttpPath("zone_id")),
      ...DeleteAccessRuleBaseFields,
    }).pipe(
      T.Http({
        method: "DELETE",
        path: "/zones/{zone_id}/firewall/access_rules/rules/{ruleId}",
      }),
    ),
  ) as unknown as Schema.Codec<DeleteAccessRuleForZoneRequest>;

export interface DeleteAccessRuleResponse {
  /** Defines an identifier. */
  id: string;
}

export const DeleteAccessRuleResponse =
  /*@__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      id: Schema.String,
    }).pipe(T.ResponsePath("result")),
  ) as unknown as Schema.Codec<DeleteAccessRuleResponse>;

export type DeleteAccessRuleError =
  | DefaultErrors
  | AccessRuleNotFound
  | Forbidden;

export const deleteAccessRuleForAccount: API.OperationMethod<
  DeleteAccessRuleForAccountRequest,
  DeleteAccessRuleResponse,
  DeleteAccessRuleError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: DeleteAccessRuleForAccountRequest,
  output: DeleteAccessRuleResponse,
  errors: [AccessRuleNotFound, Forbidden],
}));

export const deleteAccessRuleForZone: API.OperationMethod<
  DeleteAccessRuleForZoneRequest,
  DeleteAccessRuleResponse,
  DeleteAccessRuleError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: DeleteAccessRuleForZoneRequest,
  output: DeleteAccessRuleResponse,
  errors: [AccessRuleNotFound, Forbidden],
}));

// =============================================================================
// Lockdown
// =============================================================================

export interface GetLockdownRequest {
  lockDownsId: string;
  /** Defines an identifier. */
  zoneId: string;
}

export const GetLockdownRequest = /*@__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    lockDownsId: Schema.String.pipe(T.HttpPath("lockDownsId")),
    zoneId: Schema.String.pipe(T.HttpPath("zone_id")),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/zones/{zone_id}/firewall/lockdowns/{lockDownsId}",
    }),
  ),
) as unknown as Schema.Codec<GetLockdownRequest>;

export interface GetLockdownResponse {
  /** The unique identifier of the Zone Lockdown rule. */
  id: string;
  /** A list of IP addresses or CIDR ranges that will be allowed to access the URLs specified in the Zone Lockdown rule. You can include any number of `ip` or `ip_range` configurations. */
  configurations: (
    | { target?: "ip" | null; value?: string | null }
    | { target?: "ip_range" | null; value?: string | null }
  )[];
  /** The timestamp of when the rule was created. */
  createdOn: string;
  /** An informative summary of the rule. */
  description?: string | null;
  /** The timestamp of when the rule was last modified. */
  modifiedOn: string;
  /** When true, indicates that the rule is currently paused. */
  paused: boolean;
  /** The URLs to include in the rule definition. You can use wildcards. Each entered URL will be escaped before use, which means you can only use simple wildcard patterns. */
  urls: string[];
  priority?: number | null;
}

export const GetLockdownResponse = /*@__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    id: Schema.String,
    configurations: Schema.Array(
      Schema.Union([AccessRuleIPConfiguration, AccessRuleCIDRConfiguration]),
    ),
    createdOn: Schema.String,
    description: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
    modifiedOn: Schema.String,
    paused: Schema.Boolean,
    urls: Schema.Array(Schema.String),
    priority: Schema.optional(Schema.Union([Schema.Number, Schema.Null])),
  })
    .pipe(
      Schema.encodeKeys({
        id: "id",
        configurations: "configurations",
        createdOn: "created_on",
        description: "description",
        modifiedOn: "modified_on",
        paused: "paused",
        urls: "urls",
        priority: "priority",
      }),
    )
    .pipe(T.ResponsePath("result")),
) as unknown as Schema.Codec<GetLockdownResponse>;

export type GetLockdownError = DefaultErrors | LockdownNotFound | Forbidden;

export const getLockdown: API.OperationMethod<
  GetLockdownRequest,
  GetLockdownResponse,
  GetLockdownError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: GetLockdownRequest,
  output: GetLockdownResponse,
  errors: [LockdownNotFound, Forbidden],
}));

export interface ListLockdownsRequest {
  /** Path param: Defines an identifier. */
  zoneId: string;
  page?: number;
  perPage?: number;
  /** Query param: The timestamp of when the rule was created. */
  createdOn?: string;
  /** Query param: A string to search for in the description of existing rules. */
  description?: string;
  /** Query param: A string to search for in the description of existing rules. */
  descriptionSearch?: string;
  /** Query param: A single IP address to search for in existing rules. */
  ip?: string;
  /** Query param: A single IP address range to search for in existing rules. */
  ipRangeSearch?: string;
  /** Query param: A single IP address to search for in existing rules. */
  ipSearch?: string;
  /** Query param: The timestamp of when the rule was last modified. */
  modifiedOn?: string;
  /** Query param: The priority of the rule to control the processing order. A lower number indicates higher priority. If not provided, any rules with a configured priority will be processed before rules wi */
  priority?: number;
  /** Query param: A single URI to search for in the list of URLs of existing rules. */
  uriSearch?: string;
}

export const ListLockdownsRequest = /*@__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    zoneId: Schema.String.pipe(T.HttpPath("zone_id")),
    page: Schema.optional(Schema.Number).pipe(T.HttpQuery("page")),
    perPage: Schema.optional(Schema.Number).pipe(T.HttpQuery("per_page")),
    createdOn: Schema.optional(Schema.String).pipe(T.HttpQuery("created_on")),
    description: Schema.optional(Schema.String).pipe(
      T.HttpQuery("description"),
    ),
    descriptionSearch: Schema.optional(Schema.String).pipe(
      T.HttpQuery("description_search"),
    ),
    ip: Schema.optional(Schema.String).pipe(T.HttpQuery("ip")),
    ipRangeSearch: Schema.optional(Schema.String).pipe(
      T.HttpQuery("ip_range_search"),
    ),
    ipSearch: Schema.optional(Schema.String).pipe(T.HttpQuery("ip_search")),
    modifiedOn: Schema.optional(Schema.String).pipe(T.HttpQuery("modified_on")),
    priority: Schema.optional(Schema.Number).pipe(T.HttpQuery("priority")),
    uriSearch: Schema.optional(Schema.String).pipe(T.HttpQuery("uri_search")),
  }).pipe(
    T.Http({ method: "GET", path: "/zones/{zone_id}/firewall/lockdowns" }),
  ),
) as unknown as Schema.Codec<ListLockdownsRequest>;

export interface ListLockdownsResponse {
  result: {
    id: string;
    configurations: (
      | { target?: "ip" | null; value?: string | null }
      | { target?: "ip_range" | null; value?: string | null }
    )[];
    createdOn: string;
    description?: string | null;
    modifiedOn: string;
    paused: boolean;
    urls: string[];
    priority?: number | null;
  }[];
  resultInfo?: {
    count?: number | null;
    page?: number | null;
    perPage?: number | null;
    totalCount?: number | null;
  } | null;
}

export const ListLockdownsResponse = /*@__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    result: Schema.Array(ListLockdownsResponseResult),
    resultInfo: Schema.optional(
      Schema.Union([ListAccessRulesResponseResultInfo, Schema.Null]),
    ),
  }).pipe(Schema.encodeKeys({ result: "result", resultInfo: "result_info" })),
) as unknown as Schema.Codec<ListLockdownsResponse>;

export type ListLockdownsError = DefaultErrors | Forbidden;

export const listLockdowns: API.PaginatedOperationMethod<
  ListLockdownsRequest,
  ListLockdownsResponse,
  ListLockdownsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: ListLockdownsRequest,
  output: ListLockdownsResponse,
  errors: [Forbidden],
  pagination: {
    mode: "page",
    inputToken: "page",
    outputToken: "resultInfo.page",
    items: "result",
    pageSize: "perPage",
  } as const,
}));

export interface CreateLockdownRequest {
  /** Path param: Defines an identifier. */
  zoneId: string;
  /** Body param: A list of IP addresses or CIDR ranges that will be allowed to access the URLs specified in the Zone Lockdown rule. You can include any number of `ip` or `ip_range` configurations. */
  configurations: (
    | { target?: "ip"; value?: string }
    | { target?: "ip_range"; value?: string }
  )[];
  /** Body param: The URLs to include in the current WAF override. You can use wildcards. Each entered URL will be escaped before use, which means you can only use simple wildcard patterns. */
  urls: string[];
  /** Body param: An informative summary of the rule. This value is sanitized and any tags will be removed. */
  description?: string;
  /** Body param: When true, indicates that the rule is currently paused. */
  paused?: boolean;
  /** Body param: The priority of the rule to control the processing order. A lower number indicates higher priority. If not provided, any rules with a configured priority will be processed before rules wit */
  priority?: number;
}

export const CreateLockdownRequest = /*@__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    zoneId: Schema.String.pipe(T.HttpPath("zone_id")),
    configurations: Schema.Array(
      Schema.Union([AccessRuleIPConfiguration, AccessRuleCIDRConfiguration]),
    ),
    urls: Schema.Array(Schema.String),
    description: Schema.optional(Schema.String),
    paused: Schema.optional(Schema.Boolean),
    priority: Schema.optional(Schema.Number),
  }).pipe(
    T.Http({ method: "POST", path: "/zones/{zone_id}/firewall/lockdowns" }),
  ),
) as unknown as Schema.Codec<CreateLockdownRequest>;

export interface CreateLockdownResponse {
  /** The unique identifier of the Zone Lockdown rule. */
  id: string;
  /** A list of IP addresses or CIDR ranges that will be allowed to access the URLs specified in the Zone Lockdown rule. You can include any number of `ip` or `ip_range` configurations. */
  configurations: (
    | { target?: "ip" | null; value?: string | null }
    | { target?: "ip_range" | null; value?: string | null }
  )[];
  /** The timestamp of when the rule was created. */
  createdOn: string;
  /** An informative summary of the rule. */
  description?: string | null;
  /** The timestamp of when the rule was last modified. */
  modifiedOn: string;
  /** When true, indicates that the rule is currently paused. */
  paused: boolean;
  /** The URLs to include in the rule definition. You can use wildcards. Each entered URL will be escaped before use, which means you can only use simple wildcard patterns. */
  urls: string[];
  priority?: number | null;
}

export const CreateLockdownResponse =
  /*@__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      id: Schema.String,
      configurations: Schema.Array(
        Schema.Union([AccessRuleIPConfiguration, AccessRuleCIDRConfiguration]),
      ),
      createdOn: Schema.String,
      description: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
      modifiedOn: Schema.String,
      paused: Schema.Boolean,
      urls: Schema.Array(Schema.String),
      priority: Schema.optional(Schema.Union([Schema.Number, Schema.Null])),
    })
      .pipe(
        Schema.encodeKeys({
          id: "id",
          configurations: "configurations",
          createdOn: "created_on",
          description: "description",
          modifiedOn: "modified_on",
          paused: "paused",
          urls: "urls",
          priority: "priority",
        }),
      )
      .pipe(T.ResponsePath("result")),
  ) as unknown as Schema.Codec<CreateLockdownResponse>;

export type CreateLockdownError = DefaultErrors | DuplicateLockdown | Forbidden;

export const createLockdown: API.OperationMethod<
  CreateLockdownRequest,
  CreateLockdownResponse,
  CreateLockdownError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: CreateLockdownRequest,
  output: CreateLockdownResponse,
  errors: [DuplicateLockdown, Forbidden],
}));

export interface UpdateLockdownRequest {
  lockDownsId: string;
  /** Path param: Defines an identifier. */
  zoneId: string;
  /** Body param: A list of IP addresses or CIDR ranges that will be allowed to access the URLs specified in the Zone Lockdown rule. You can include any number of `ip` or `ip_range` configurations. */
  configurations: (
    | { target?: "ip"; value?: string }
    | { target?: "ip_range"; value?: string }
  )[];
  /** Body param: The URLs to include in the current WAF override. You can use wildcards. Each entered URL will be escaped before use, which means you can only use simple wildcard patterns. */
  urls: string[];
  description?: string;
  paused?: boolean;
  priority?: number;
}

export const UpdateLockdownRequest = /*@__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    lockDownsId: Schema.String.pipe(T.HttpPath("lockDownsId")),
    zoneId: Schema.String.pipe(T.HttpPath("zone_id")),
    configurations: Schema.Array(
      Schema.Union([AccessRuleIPConfiguration, AccessRuleCIDRConfiguration]),
    ),
    urls: Schema.Array(Schema.String),
    description: Schema.optional(Schema.String),
    paused: Schema.optional(Schema.Boolean),
    priority: Schema.optional(Schema.Number),
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/zones/{zone_id}/firewall/lockdowns/{lockDownsId}",
    }),
  ),
) as unknown as Schema.Codec<UpdateLockdownRequest>;

export interface UpdateLockdownResponse {
  /** The unique identifier of the Zone Lockdown rule. */
  id: string;
  /** A list of IP addresses or CIDR ranges that will be allowed to access the URLs specified in the Zone Lockdown rule. You can include any number of `ip` or `ip_range` configurations. */
  configurations: (
    | { target?: "ip" | null; value?: string | null }
    | { target?: "ip_range" | null; value?: string | null }
  )[];
  /** The timestamp of when the rule was created. */
  createdOn: string;
  /** An informative summary of the rule. */
  description?: string | null;
  /** The timestamp of when the rule was last modified. */
  modifiedOn: string;
  /** When true, indicates that the rule is currently paused. */
  paused: boolean;
  /** The URLs to include in the rule definition. You can use wildcards. Each entered URL will be escaped before use, which means you can only use simple wildcard patterns. */
  urls: string[];
  priority?: number | null;
}

export const UpdateLockdownResponse =
  /*@__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      id: Schema.String,
      configurations: Schema.Array(
        Schema.Union([AccessRuleIPConfiguration, AccessRuleCIDRConfiguration]),
      ),
      createdOn: Schema.String,
      description: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
      modifiedOn: Schema.String,
      paused: Schema.Boolean,
      urls: Schema.Array(Schema.String),
      priority: Schema.optional(Schema.Union([Schema.Number, Schema.Null])),
    })
      .pipe(
        Schema.encodeKeys({
          id: "id",
          configurations: "configurations",
          createdOn: "created_on",
          description: "description",
          modifiedOn: "modified_on",
          paused: "paused",
          urls: "urls",
          priority: "priority",
        }),
      )
      .pipe(T.ResponsePath("result")),
  ) as unknown as Schema.Codec<UpdateLockdownResponse>;

export type UpdateLockdownError =
  | DefaultErrors
  | LockdownNotFound
  | DuplicateLockdown
  | Forbidden;

export const updateLockdown: API.OperationMethod<
  UpdateLockdownRequest,
  UpdateLockdownResponse,
  UpdateLockdownError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: UpdateLockdownRequest,
  output: UpdateLockdownResponse,
  errors: [LockdownNotFound, DuplicateLockdown, Forbidden],
}));

export interface DeleteLockdownRequest {
  lockDownsId: string;
  /** Defines an identifier. */
  zoneId: string;
}

export const DeleteLockdownRequest = /*@__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    lockDownsId: Schema.String.pipe(T.HttpPath("lockDownsId")),
    zoneId: Schema.String.pipe(T.HttpPath("zone_id")),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/zones/{zone_id}/firewall/lockdowns/{lockDownsId}",
    }),
  ),
) as unknown as Schema.Codec<DeleteLockdownRequest>;

export interface DeleteLockdownResponse {
  /** The unique identifier of the Zone Lockdown rule. */
  id?: string | null;
}

export const DeleteLockdownResponse =
  /*@__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      id: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
    }).pipe(T.ResponsePath("result")),
  ) as unknown as Schema.Codec<DeleteLockdownResponse>;

export type DeleteLockdownError = DefaultErrors | LockdownNotFound | Forbidden;

export const deleteLockdown: API.OperationMethod<
  DeleteLockdownRequest,
  DeleteLockdownResponse,
  DeleteLockdownError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: DeleteLockdownRequest,
  output: DeleteLockdownResponse,
  errors: [LockdownNotFound, Forbidden],
}));

// =============================================================================
// PutRule
// =============================================================================

export interface BulkPutRulesRequest {
  /** Path param: Defines an identifier. */
  zoneId: string;
  /** Body param */
  body: unknown;
}

export const BulkPutRulesRequest = /*@__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    zoneId: Schema.String.pipe(T.HttpPath("zone_id")),
    body: Schema.Unknown.pipe(T.HttpBody()),
  }).pipe(T.Http({ method: "PUT", path: "/zones/{zone_id}/firewall/rules" })),
) as unknown as Schema.Codec<BulkPutRulesRequest>;

export interface BulkPutRulesResponse {
  result: {
    id?: string | null;
    action?:
      | "block"
      | "challenge"
      | "js_challenge"
      | "managed_challenge"
      | "allow"
      | "log"
      | "bypass"
      | (string & {})
      | null;
    description?: string | null;
    filter?:
      | {
          id?: string | null;
          description?: string | null;
          expression?: string | null;
          paused?: boolean | null;
          ref?: string | null;
        }
      | { id: string; deleted: boolean }
      | null;
    paused?: boolean | null;
    priority?: number | null;
    products?:
      | (
          | "zoneLockdown"
          | "uaBlock"
          | "bic"
          | "hot"
          | "securityLevel"
          | "rateLimit"
          | "waf"
          | (string & {})
        )[]
      | null;
    ref?: string | null;
  }[];
}

export const BulkPutRulesResponse = /*@__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    result: Schema.Array(BulkPutRulesResponseResult),
  }),
) as unknown as Schema.Codec<BulkPutRulesResponse>;

export type BulkPutRulesError = DefaultErrors;

export const bulkPutRules: API.PaginatedOperationMethod<
  BulkPutRulesRequest,
  BulkPutRulesResponse,
  BulkPutRulesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: BulkPutRulesRequest,
  output: BulkPutRulesResponse,
  errors: [],
  pagination: {
    mode: "single",
    items: "result",
  } as const,
}));

// =============================================================================
// Rule
// =============================================================================

export interface GetRuleRequest {
  ruleId: string;
  /** Defines an identifier. */
  zoneId: string;
}

export const GetRuleRequest = /*@__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    ruleId: Schema.String.pipe(T.HttpPath("ruleId")),
    zoneId: Schema.String.pipe(T.HttpPath("zone_id")),
  }).pipe(
    T.Http({ method: "GET", path: "/zones/{zone_id}/firewall/rules/{ruleId}" }),
  ),
) as unknown as Schema.Codec<GetRuleRequest>;

export interface GetRuleResponse {
  /** The unique identifier of the firewall rule. */
  id?: string | null;
  /** The action to apply to a matched request. The `log` action is only available on an Enterprise plan. */
  action?:
    | "block"
    | "challenge"
    | "js_challenge"
    | "managed_challenge"
    | "allow"
    | "log"
    | "bypass"
    | (string & {})
    | null;
  /** An informative summary of the firewall rule. */
  description?: string | null;
  filter?:
    | {
        id?: string | null;
        description?: string | null;
        expression?: string | null;
        paused?: boolean | null;
        ref?: string | null;
      }
    | { id: string; deleted: boolean }
    | null;
  /** When true, indicates that the firewall rule is currently paused. */
  paused?: boolean | null;
  /** The priority of the rule. Optional value used to define the processing order. A lower number indicates a higher priority. If not provided, rules with a defined priority will be processed before rules  */
  priority?: number | null;
  products?:
    | (
        | "zoneLockdown"
        | "uaBlock"
        | "bic"
        | "hot"
        | "securityLevel"
        | "rateLimit"
        | "waf"
        | (string & {})
      )[]
    | null;
  /** A short reference tag. Allows you to select related firewall rules. */
  ref?: string | null;
}

export const GetRuleResponse = /*@__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    id: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
    action: Schema.optional(
      Schema.Union([
        Schema.Union([
          Schema.Literals([
            "block",
            "challenge",
            "js_challenge",
            "managed_challenge",
            "allow",
            "log",
            "bypass",
          ]),
          Schema.String,
        ]),
        Schema.Null,
      ]),
    ),
    description: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
    filter: Schema.optional(
      Schema.Union([
        Schema.Union([DeletedFilter, FirewallFilter]),
        Schema.Null,
      ]),
    ),
    paused: Schema.optional(Schema.Union([Schema.Boolean, Schema.Null])),
    priority: Schema.optional(Schema.Union([Schema.Number, Schema.Null])),
    products: Schema.optional(
      Schema.Union([
        Schema.Array(
          Schema.Union([
            Schema.Literals([
              "zoneLockdown",
              "uaBlock",
              "bic",
              "hot",
              "securityLevel",
              "rateLimit",
              "waf",
            ]),
            Schema.String,
          ]),
        ),
        Schema.Null,
      ]),
    ),
    ref: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
  }).pipe(T.ResponsePath("result")),
) as unknown as Schema.Codec<GetRuleResponse>;

export type GetRuleError = DefaultErrors;

export const getRule: API.OperationMethod<
  GetRuleRequest,
  GetRuleResponse,
  GetRuleError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: GetRuleRequest,
  output: GetRuleResponse,
  errors: [],
}));

export interface ListRulesRequest {
  /** Path param: Defines an identifier. */
  zoneId: string;
  page?: number;
  perPage?: number;
  /** Query param: The unique identifier of the firewall rule. */
  id?: string;
  /** Query param: The action to search for. Must be an exact match. */
  action?: string;
  /** Query param: A case-insensitive string to find in the description. */
  description?: string;
  /** Query param: When true, indicates that the firewall rule is currently paused. */
  paused?: boolean;
}

export const ListRulesRequest = /*@__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    zoneId: Schema.String.pipe(T.HttpPath("zone_id")),
    page: Schema.optional(Schema.Number).pipe(T.HttpQuery("page")),
    perPage: Schema.optional(Schema.Number).pipe(T.HttpQuery("per_page")),
    id: Schema.optional(Schema.String).pipe(T.HttpQuery("id")),
    action: Schema.optional(Schema.String).pipe(T.HttpQuery("action")),
    description: Schema.optional(Schema.String).pipe(
      T.HttpQuery("description"),
    ),
    paused: Schema.optional(Schema.Boolean).pipe(T.HttpQuery("paused")),
  }).pipe(T.Http({ method: "GET", path: "/zones/{zone_id}/firewall/rules" })),
) as unknown as Schema.Codec<ListRulesRequest>;

export interface ListRulesResponse {
  result: {
    id?: string | null;
    action?:
      | "block"
      | "challenge"
      | "js_challenge"
      | "managed_challenge"
      | "allow"
      | "log"
      | "bypass"
      | (string & {})
      | null;
    description?: string | null;
    filter?:
      | {
          id?: string | null;
          description?: string | null;
          expression?: string | null;
          paused?: boolean | null;
          ref?: string | null;
        }
      | { id: string; deleted: boolean }
      | null;
    paused?: boolean | null;
    priority?: number | null;
    products?:
      | (
          | "zoneLockdown"
          | "uaBlock"
          | "bic"
          | "hot"
          | "securityLevel"
          | "rateLimit"
          | "waf"
          | (string & {})
        )[]
      | null;
    ref?: string | null;
  }[];
  resultInfo?: {
    count?: number | null;
    page?: number | null;
    perPage?: number | null;
    totalCount?: number | null;
  } | null;
}

export const ListRulesResponse = /*@__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    result: Schema.Array(BulkPutRulesResponseResult),
    resultInfo: Schema.optional(
      Schema.Union([ListAccessRulesResponseResultInfo, Schema.Null]),
    ),
  }).pipe(Schema.encodeKeys({ result: "result", resultInfo: "result_info" })),
) as unknown as Schema.Codec<ListRulesResponse>;

export type ListRulesError = DefaultErrors;

export const listRules: API.PaginatedOperationMethod<
  ListRulesRequest,
  ListRulesResponse,
  ListRulesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: ListRulesRequest,
  output: ListRulesResponse,
  errors: [],
  pagination: {
    mode: "page",
    inputToken: "page",
    outputToken: "resultInfo.page",
    items: "result",
    pageSize: "perPage",
  } as const,
}));

export interface CreateRuleRequest {
  /** Path param: Defines an identifier. */
  zoneId: string;
  /** Body param: The action to perform when the threshold of matched traffic within the configured period is exceeded. */
  action: {
    mode?:
      | "simulate"
      | "ban"
      | "challenge"
      | "js_challenge"
      | "managed_challenge"
      | (string & {});
    response?: { body?: string; contentType?: string };
    timeout?: number;
  };
  /** Body param */
  filter: {
    description?: string;
    expression?: string;
    paused?: boolean;
    ref?: string;
  };
}

export const CreateRuleRequest = /*@__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    zoneId: Schema.String.pipe(T.HttpPath("zone_id")),
    action: Action,
    filter: FirewallFilterParam,
  }).pipe(T.Http({ method: "POST", path: "/zones/{zone_id}/firewall/rules" })),
) as unknown as Schema.Codec<CreateRuleRequest>;

export interface CreateRuleResponse {
  result: {
    id?: string | null;
    action?:
      | "block"
      | "challenge"
      | "js_challenge"
      | "managed_challenge"
      | "allow"
      | "log"
      | "bypass"
      | (string & {})
      | null;
    description?: string | null;
    filter?:
      | {
          id?: string | null;
          description?: string | null;
          expression?: string | null;
          paused?: boolean | null;
          ref?: string | null;
        }
      | { id: string; deleted: boolean }
      | null;
    paused?: boolean | null;
    priority?: number | null;
    products?:
      | (
          | "zoneLockdown"
          | "uaBlock"
          | "bic"
          | "hot"
          | "securityLevel"
          | "rateLimit"
          | "waf"
          | (string & {})
        )[]
      | null;
    ref?: string | null;
  }[];
}

export const CreateRuleResponse = /*@__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    result: Schema.Array(BulkPutRulesResponseResult),
  }),
) as unknown as Schema.Codec<CreateRuleResponse>;

export type CreateRuleError = DefaultErrors;

export const createRule: API.PaginatedOperationMethod<
  CreateRuleRequest,
  CreateRuleResponse,
  CreateRuleError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: CreateRuleRequest,
  output: CreateRuleResponse,
  errors: [],
  pagination: {
    mode: "single",
    items: "result",
  } as const,
}));

export interface UpdateRuleRequest {
  ruleId: string;
  /** Path param: Defines an identifier. */
  zoneId: string;
  /** Body param: The action to perform when the threshold of matched traffic within the configured period is exceeded. */
  action: {
    mode?:
      | "simulate"
      | "ban"
      | "challenge"
      | "js_challenge"
      | "managed_challenge"
      | (string & {});
    response?: { body?: string; contentType?: string };
    timeout?: number;
  };
  /** Body param */
  filter: {
    description?: string;
    expression?: string;
    paused?: boolean;
    ref?: string;
  };
}

export const UpdateRuleRequest = /*@__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    ruleId: Schema.String.pipe(T.HttpPath("ruleId")),
    zoneId: Schema.String.pipe(T.HttpPath("zone_id")),
    action: Action,
    filter: FirewallFilterParam,
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/zones/{zone_id}/firewall/rules/{ruleId}",
    }),
  ),
) as unknown as Schema.Codec<UpdateRuleRequest>;

export interface UpdateRuleResponse {
  /** The unique identifier of the firewall rule. */
  id?: string | null;
  /** The action to apply to a matched request. The `log` action is only available on an Enterprise plan. */
  action?:
    | "block"
    | "challenge"
    | "js_challenge"
    | "managed_challenge"
    | "allow"
    | "log"
    | "bypass"
    | (string & {})
    | null;
  /** An informative summary of the firewall rule. */
  description?: string | null;
  filter?:
    | {
        id?: string | null;
        description?: string | null;
        expression?: string | null;
        paused?: boolean | null;
        ref?: string | null;
      }
    | { id: string; deleted: boolean }
    | null;
  /** When true, indicates that the firewall rule is currently paused. */
  paused?: boolean | null;
  /** The priority of the rule. Optional value used to define the processing order. A lower number indicates a higher priority. If not provided, rules with a defined priority will be processed before rules  */
  priority?: number | null;
  products?:
    | (
        | "zoneLockdown"
        | "uaBlock"
        | "bic"
        | "hot"
        | "securityLevel"
        | "rateLimit"
        | "waf"
        | (string & {})
      )[]
    | null;
  /** A short reference tag. Allows you to select related firewall rules. */
  ref?: string | null;
}

export const UpdateRuleResponse = /*@__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    id: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
    action: Schema.optional(
      Schema.Union([
        Schema.Union([
          Schema.Literals([
            "block",
            "challenge",
            "js_challenge",
            "managed_challenge",
            "allow",
            "log",
            "bypass",
          ]),
          Schema.String,
        ]),
        Schema.Null,
      ]),
    ),
    description: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
    filter: Schema.optional(
      Schema.Union([
        Schema.Union([DeletedFilter, FirewallFilter]),
        Schema.Null,
      ]),
    ),
    paused: Schema.optional(Schema.Union([Schema.Boolean, Schema.Null])),
    priority: Schema.optional(Schema.Union([Schema.Number, Schema.Null])),
    products: Schema.optional(
      Schema.Union([
        Schema.Array(
          Schema.Union([
            Schema.Literals([
              "zoneLockdown",
              "uaBlock",
              "bic",
              "hot",
              "securityLevel",
              "rateLimit",
              "waf",
            ]),
            Schema.String,
          ]),
        ),
        Schema.Null,
      ]),
    ),
    ref: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
  }).pipe(T.ResponsePath("result")),
) as unknown as Schema.Codec<UpdateRuleResponse>;

export type UpdateRuleError = DefaultErrors;

export const updateRule: API.OperationMethod<
  UpdateRuleRequest,
  UpdateRuleResponse,
  UpdateRuleError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: UpdateRuleRequest,
  output: UpdateRuleResponse,
  errors: [],
}));

export interface PatchRuleRequest {
  ruleId: string;
  /** Defines an identifier. */
  zoneId: string;
}

export const PatchRuleRequest = /*@__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    ruleId: Schema.String.pipe(T.HttpPath("ruleId")),
    zoneId: Schema.String.pipe(T.HttpPath("zone_id")),
  }).pipe(
    T.Http({
      method: "PATCH",
      path: "/zones/{zone_id}/firewall/rules/{ruleId}",
    }),
  ),
) as unknown as Schema.Codec<PatchRuleRequest>;

export interface PatchRuleResponse {
  result: {
    id?: string | null;
    action?:
      | "block"
      | "challenge"
      | "js_challenge"
      | "managed_challenge"
      | "allow"
      | "log"
      | "bypass"
      | (string & {})
      | null;
    description?: string | null;
    filter?:
      | {
          id?: string | null;
          description?: string | null;
          expression?: string | null;
          paused?: boolean | null;
          ref?: string | null;
        }
      | { id: string; deleted: boolean }
      | null;
    paused?: boolean | null;
    priority?: number | null;
    products?:
      | (
          | "zoneLockdown"
          | "uaBlock"
          | "bic"
          | "hot"
          | "securityLevel"
          | "rateLimit"
          | "waf"
          | (string & {})
        )[]
      | null;
    ref?: string | null;
  }[];
}

export const PatchRuleResponse = /*@__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    result: Schema.Array(BulkPutRulesResponseResult),
  }),
) as unknown as Schema.Codec<PatchRuleResponse>;

export type PatchRuleError = DefaultErrors;

export const patchRule: API.PaginatedOperationMethod<
  PatchRuleRequest,
  PatchRuleResponse,
  PatchRuleError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: PatchRuleRequest,
  output: PatchRuleResponse,
  errors: [],
  pagination: {
    mode: "single",
    items: "result",
  } as const,
}));

export interface DeleteRuleRequest {
  ruleId: string;
  /** Defines an identifier. */
  zoneId: string;
}

export const DeleteRuleRequest = /*@__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    ruleId: Schema.String.pipe(T.HttpPath("ruleId")),
    zoneId: Schema.String.pipe(T.HttpPath("zone_id")),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/zones/{zone_id}/firewall/rules/{ruleId}",
    }),
  ),
) as unknown as Schema.Codec<DeleteRuleRequest>;

export interface DeleteRuleResponse {
  /** The unique identifier of the firewall rule. */
  id?: string | null;
  /** The action to apply to a matched request. The `log` action is only available on an Enterprise plan. */
  action?:
    | "block"
    | "challenge"
    | "js_challenge"
    | "managed_challenge"
    | "allow"
    | "log"
    | "bypass"
    | (string & {})
    | null;
  /** An informative summary of the firewall rule. */
  description?: string | null;
  filter?:
    | {
        id?: string | null;
        description?: string | null;
        expression?: string | null;
        paused?: boolean | null;
        ref?: string | null;
      }
    | { id: string; deleted: boolean }
    | null;
  /** When true, indicates that the firewall rule is currently paused. */
  paused?: boolean | null;
  /** The priority of the rule. Optional value used to define the processing order. A lower number indicates a higher priority. If not provided, rules with a defined priority will be processed before rules  */
  priority?: number | null;
  products?:
    | (
        | "zoneLockdown"
        | "uaBlock"
        | "bic"
        | "hot"
        | "securityLevel"
        | "rateLimit"
        | "waf"
        | (string & {})
      )[]
    | null;
  /** A short reference tag. Allows you to select related firewall rules. */
  ref?: string | null;
}

export const DeleteRuleResponse = /*@__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    id: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
    action: Schema.optional(
      Schema.Union([
        Schema.Union([
          Schema.Literals([
            "block",
            "challenge",
            "js_challenge",
            "managed_challenge",
            "allow",
            "log",
            "bypass",
          ]),
          Schema.String,
        ]),
        Schema.Null,
      ]),
    ),
    description: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
    filter: Schema.optional(
      Schema.Union([
        Schema.Union([DeletedFilter, FirewallFilter]),
        Schema.Null,
      ]),
    ),
    paused: Schema.optional(Schema.Union([Schema.Boolean, Schema.Null])),
    priority: Schema.optional(Schema.Union([Schema.Number, Schema.Null])),
    products: Schema.optional(
      Schema.Union([
        Schema.Array(
          Schema.Union([
            Schema.Literals([
              "zoneLockdown",
              "uaBlock",
              "bic",
              "hot",
              "securityLevel",
              "rateLimit",
              "waf",
            ]),
            Schema.String,
          ]),
        ),
        Schema.Null,
      ]),
    ),
    ref: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
  }).pipe(T.ResponsePath("result")),
) as unknown as Schema.Codec<DeleteRuleResponse>;

export type DeleteRuleError = DefaultErrors;

export const deleteRule: API.OperationMethod<
  DeleteRuleRequest,
  DeleteRuleResponse,
  DeleteRuleError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: DeleteRuleRequest,
  output: DeleteRuleResponse,
  errors: [],
}));

export interface BulkPatchRulesRequest {
  /** Path param: Defines an identifier. */
  zoneId: string;
  /** Body param */
  body: unknown;
}

export const BulkPatchRulesRequest = /*@__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    zoneId: Schema.String.pipe(T.HttpPath("zone_id")),
    body: Schema.Unknown.pipe(T.HttpBody()),
  }).pipe(T.Http({ method: "PATCH", path: "/zones/{zone_id}/firewall/rules" })),
) as unknown as Schema.Codec<BulkPatchRulesRequest>;

export interface BulkPatchRulesResponse {
  result: {
    id?: string | null;
    action?:
      | "block"
      | "challenge"
      | "js_challenge"
      | "managed_challenge"
      | "allow"
      | "log"
      | "bypass"
      | (string & {})
      | null;
    description?: string | null;
    filter?:
      | {
          id?: string | null;
          description?: string | null;
          expression?: string | null;
          paused?: boolean | null;
          ref?: string | null;
        }
      | { id: string; deleted: boolean }
      | null;
    paused?: boolean | null;
    priority?: number | null;
    products?:
      | (
          | "zoneLockdown"
          | "uaBlock"
          | "bic"
          | "hot"
          | "securityLevel"
          | "rateLimit"
          | "waf"
          | (string & {})
        )[]
      | null;
    ref?: string | null;
  }[];
}

export const BulkPatchRulesResponse =
  /*@__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      result: Schema.Array(BulkPutRulesResponseResult),
    }),
  ) as unknown as Schema.Codec<BulkPatchRulesResponse>;

export type BulkPatchRulesError = DefaultErrors;

export const bulkPatchRules: API.PaginatedOperationMethod<
  BulkPatchRulesRequest,
  BulkPatchRulesResponse,
  BulkPatchRulesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: BulkPatchRulesRequest,
  output: BulkPatchRulesResponse,
  errors: [],
  pagination: {
    mode: "single",
    items: "result",
  } as const,
}));

export interface BulkDeleteRulesRequest {
  /** Defines an identifier. */
  zoneId: string;
}

export const BulkDeleteRulesRequest =
  /*@__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      zoneId: Schema.String.pipe(T.HttpPath("zone_id")),
    }).pipe(
      T.Http({ method: "DELETE", path: "/zones/{zone_id}/firewall/rules" }),
    ),
  ) as unknown as Schema.Codec<BulkDeleteRulesRequest>;

export interface BulkDeleteRulesResponse {
  result: {
    id?: string | null;
    action?:
      | "block"
      | "challenge"
      | "js_challenge"
      | "managed_challenge"
      | "allow"
      | "log"
      | "bypass"
      | (string & {})
      | null;
    description?: string | null;
    filter?:
      | {
          id?: string | null;
          description?: string | null;
          expression?: string | null;
          paused?: boolean | null;
          ref?: string | null;
        }
      | { id: string; deleted: boolean }
      | null;
    paused?: boolean | null;
    priority?: number | null;
    products?:
      | (
          | "zoneLockdown"
          | "uaBlock"
          | "bic"
          | "hot"
          | "securityLevel"
          | "rateLimit"
          | "waf"
          | (string & {})
        )[]
      | null;
    ref?: string | null;
  }[];
}

export const BulkDeleteRulesResponse =
  /*@__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      result: Schema.Array(BulkPutRulesResponseResult),
    }),
  ) as unknown as Schema.Codec<BulkDeleteRulesResponse>;

export type BulkDeleteRulesError = DefaultErrors;

export const bulkDeleteRules: API.PaginatedOperationMethod<
  BulkDeleteRulesRequest,
  BulkDeleteRulesResponse,
  BulkDeleteRulesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: BulkDeleteRulesRequest,
  output: BulkDeleteRulesResponse,
  errors: [],
  pagination: {
    mode: "single",
    items: "result",
  } as const,
}));

// =============================================================================
// UaRule
// =============================================================================

export interface GetUaRuleRequest {
  uaRuleId: string;
  /** Defines an identifier. */
  zoneId: string;
}

export const GetUaRuleRequest = /*@__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    uaRuleId: Schema.String.pipe(T.HttpPath("uaRuleId")),
    zoneId: Schema.String.pipe(T.HttpPath("zone_id")),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/zones/{zone_id}/firewall/ua_rules/{uaRuleId}",
    }),
  ),
) as unknown as Schema.Codec<GetUaRuleRequest>;

export interface GetUaRuleResponse {
  /** The unique identifier of the User Agent Blocking rule. */
  id?: string | null;
  /** The configuration object for the current rule. */
  configuration?: { target?: string | null; value?: string | null } | null;
  /** An informative summary of the rule. */
  description?: string | null;
  /** The action to apply to a matched request. */
  mode?:
    | "block"
    | "challenge"
    | "js_challenge"
    | "managed_challenge"
    | (string & {})
    | null;
  /** When true, indicates that the rule is currently paused. */
  paused?: boolean | null;
}

export const GetUaRuleResponse = /*@__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    id: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
    configuration: Schema.optional(Schema.Union([Configuration, Schema.Null])),
    description: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
    mode: Schema.optional(
      Schema.Union([
        Schema.Union([
          Schema.Literals([
            "block",
            "challenge",
            "js_challenge",
            "managed_challenge",
          ]),
          Schema.String,
        ]),
        Schema.Null,
      ]),
    ),
    paused: Schema.optional(Schema.Union([Schema.Boolean, Schema.Null])),
  }).pipe(T.ResponsePath("result")),
) as unknown as Schema.Codec<GetUaRuleResponse>;

export type GetUaRuleError = DefaultErrors | UaRuleNotFound | Forbidden;

export const getUaRule: API.OperationMethod<
  GetUaRuleRequest,
  GetUaRuleResponse,
  GetUaRuleError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: GetUaRuleRequest,
  output: GetUaRuleResponse,
  errors: [UaRuleNotFound, Forbidden],
}));

export interface ListUaRulesRequest {
  /** Path param: Defines an identifier. */
  zoneId: string;
  page?: number;
  perPage?: number;
  /** Query param: A string to search for in the description of existing rules. */
  description?: string;
  /** Query param: When true, indicates that the rule is currently paused. */
  paused?: boolean;
  /** Query param: A string to search for in the user agent values of existing rules. */
  userAgent?: string;
}

export const ListUaRulesRequest = /*@__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    zoneId: Schema.String.pipe(T.HttpPath("zone_id")),
    page: Schema.optional(Schema.Number).pipe(T.HttpQuery("page")),
    perPage: Schema.optional(Schema.Number).pipe(T.HttpQuery("per_page")),
    description: Schema.optional(Schema.String).pipe(
      T.HttpQuery("description"),
    ),
    paused: Schema.optional(Schema.Boolean).pipe(T.HttpQuery("paused")),
    userAgent: Schema.optional(Schema.String).pipe(T.HttpQuery("user_agent")),
  }).pipe(
    T.Http({ method: "GET", path: "/zones/{zone_id}/firewall/ua_rules" }),
  ),
) as unknown as Schema.Codec<ListUaRulesRequest>;

export interface ListUaRulesResponse {
  result: {
    id?: string | null;
    configuration?: { target?: string | null; value?: string | null } | null;
    description?: string | null;
    mode?:
      | "block"
      | "challenge"
      | "js_challenge"
      | "managed_challenge"
      | (string & {})
      | null;
    paused?: boolean | null;
  }[];
  resultInfo?: {
    count?: number | null;
    page?: number | null;
    perPage?: number | null;
    totalCount?: number | null;
  } | null;
}

export const ListUaRulesResponse = /*@__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    result: Schema.Array(ListUaRulesResponseResult),
    resultInfo: Schema.optional(
      Schema.Union([ListAccessRulesResponseResultInfo, Schema.Null]),
    ),
  }).pipe(Schema.encodeKeys({ result: "result", resultInfo: "result_info" })),
) as unknown as Schema.Codec<ListUaRulesResponse>;

export type ListUaRulesError = DefaultErrors | Forbidden;

export const listUaRules: API.PaginatedOperationMethod<
  ListUaRulesRequest,
  ListUaRulesResponse,
  ListUaRulesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: ListUaRulesRequest,
  output: ListUaRulesResponse,
  errors: [Forbidden],
  pagination: {
    mode: "page",
    inputToken: "page",
    outputToken: "resultInfo.page",
    items: "result",
    pageSize: "perPage",
  } as const,
}));

export interface CreateUaRuleRequest {
  /** Path param: Defines an identifier. */
  zoneId: string;
  /** Body param */
  configuration: { target?: "ua"; value?: string };
  /** Body param: The action to apply to a matched request. */
  mode:
    | "block"
    | "challenge"
    | "whitelist"
    | "js_challenge"
    | "managed_challenge"
    | (string & {});
  /** Body param: An informative summary of the rule. This value is sanitized and any tags will be removed. */
  description?: string;
  /** Body param: When true, indicates that the rule is currently paused. */
  paused?: boolean;
}

export const CreateUaRuleRequest = /*@__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    zoneId: Schema.String.pipe(T.HttpPath("zone_id")),
    configuration: Configuration2,
    mode: Schema.Union([
      Schema.Literals([
        "block",
        "challenge",
        "whitelist",
        "js_challenge",
        "managed_challenge",
      ]),
      Schema.String,
    ]),
    description: Schema.optional(Schema.String),
    paused: Schema.optional(Schema.Boolean),
  }).pipe(
    T.Http({ method: "POST", path: "/zones/{zone_id}/firewall/ua_rules" }),
  ),
) as unknown as Schema.Codec<CreateUaRuleRequest>;

export interface CreateUaRuleResponse {
  /** The unique identifier of the User Agent Blocking rule. */
  id?: string | null;
  /** The configuration object for the current rule. */
  configuration?: { target?: string | null; value?: string | null } | null;
  /** An informative summary of the rule. */
  description?: string | null;
  /** The action to apply to a matched request. */
  mode?:
    | "block"
    | "challenge"
    | "js_challenge"
    | "managed_challenge"
    | (string & {})
    | null;
  /** When true, indicates that the rule is currently paused. */
  paused?: boolean | null;
}

export const CreateUaRuleResponse = /*@__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    id: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
    configuration: Schema.optional(Schema.Union([Configuration, Schema.Null])),
    description: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
    mode: Schema.optional(
      Schema.Union([
        Schema.Union([
          Schema.Literals([
            "block",
            "challenge",
            "js_challenge",
            "managed_challenge",
          ]),
          Schema.String,
        ]),
        Schema.Null,
      ]),
    ),
    paused: Schema.optional(Schema.Union([Schema.Boolean, Schema.Null])),
  }).pipe(T.ResponsePath("result")),
) as unknown as Schema.Codec<CreateUaRuleResponse>;

export type CreateUaRuleError = DefaultErrors | DuplicateUaRule | Forbidden;

export const createUaRule: API.OperationMethod<
  CreateUaRuleRequest,
  CreateUaRuleResponse,
  CreateUaRuleError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: CreateUaRuleRequest,
  output: CreateUaRuleResponse,
  errors: [DuplicateUaRule, Forbidden],
}));

export interface UpdateUaRuleRequest {
  uaRuleId: string;
  /** Path param: Defines an identifier. */
  zoneId: string;
  /** Body param: The rule configuration. */
  configuration:
    | { target?: "ip"; value?: string }
    | { target?: "ip6"; value?: string }
    | { target?: "ip_range"; value?: string }
    | { target?: "asn"; value?: string }
    | { target?: "country"; value?: string }
    | { target?: "ua"; value?: string };
  /** Body param: The action to apply to a matched request. */
  mode:
    | "block"
    | "challenge"
    | "whitelist"
    | "js_challenge"
    | "managed_challenge"
    | (string & {});
  /** Body param: An informative summary of the rule. This value is sanitized and any tags will be removed. */
  description?: string;
  /** Body param: When true, indicates that the rule is currently paused. */
  paused?: boolean;
}

export const UpdateUaRuleRequest = /*@__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    uaRuleId: Schema.String.pipe(T.HttpPath("uaRuleId")),
    zoneId: Schema.String.pipe(T.HttpPath("zone_id")),
    configuration: Schema.Union([
      AccessRuleIPConfiguration,
      Ipv6Configuration,
      AccessRuleCIDRConfiguration,
      Asnconfiguration,
      CountryConfiguration,
      Configuration2,
    ]),
    mode: Schema.Union([
      Schema.Literals([
        "block",
        "challenge",
        "whitelist",
        "js_challenge",
        "managed_challenge",
      ]),
      Schema.String,
    ]),
    description: Schema.optional(Schema.String),
    paused: Schema.optional(Schema.Boolean),
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/zones/{zone_id}/firewall/ua_rules/{uaRuleId}",
    }),
  ),
) as unknown as Schema.Codec<UpdateUaRuleRequest>;

export interface UpdateUaRuleResponse {
  /** The unique identifier of the User Agent Blocking rule. */
  id?: string | null;
  /** The configuration object for the current rule. */
  configuration?: { target?: string | null; value?: string | null } | null;
  /** An informative summary of the rule. */
  description?: string | null;
  /** The action to apply to a matched request. */
  mode?:
    | "block"
    | "challenge"
    | "js_challenge"
    | "managed_challenge"
    | (string & {})
    | null;
  /** When true, indicates that the rule is currently paused. */
  paused?: boolean | null;
}

export const UpdateUaRuleResponse = /*@__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    id: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
    configuration: Schema.optional(Schema.Union([Configuration, Schema.Null])),
    description: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
    mode: Schema.optional(
      Schema.Union([
        Schema.Union([
          Schema.Literals([
            "block",
            "challenge",
            "js_challenge",
            "managed_challenge",
          ]),
          Schema.String,
        ]),
        Schema.Null,
      ]),
    ),
    paused: Schema.optional(Schema.Union([Schema.Boolean, Schema.Null])),
  }).pipe(T.ResponsePath("result")),
) as unknown as Schema.Codec<UpdateUaRuleResponse>;

export type UpdateUaRuleError =
  | DefaultErrors
  | UaRuleNotFound
  | DuplicateUaRule
  | Forbidden;

export const updateUaRule: API.OperationMethod<
  UpdateUaRuleRequest,
  UpdateUaRuleResponse,
  UpdateUaRuleError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: UpdateUaRuleRequest,
  output: UpdateUaRuleResponse,
  errors: [UaRuleNotFound, DuplicateUaRule, Forbidden],
}));

export interface DeleteUaRuleRequest {
  uaRuleId: string;
  /** Defines an identifier. */
  zoneId: string;
}

export const DeleteUaRuleRequest = /*@__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    uaRuleId: Schema.String.pipe(T.HttpPath("uaRuleId")),
    zoneId: Schema.String.pipe(T.HttpPath("zone_id")),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/zones/{zone_id}/firewall/ua_rules/{uaRuleId}",
    }),
  ),
) as unknown as Schema.Codec<DeleteUaRuleRequest>;

export interface DeleteUaRuleResponse {
  /** The unique identifier of the User Agent Blocking rule. */
  id?: string | null;
  /** The configuration object for the current rule. */
  configuration?: { target?: string | null; value?: string | null } | null;
  /** An informative summary of the rule. */
  description?: string | null;
  /** The action to apply to a matched request. */
  mode?:
    | "block"
    | "challenge"
    | "js_challenge"
    | "managed_challenge"
    | (string & {})
    | null;
  /** When true, indicates that the rule is currently paused. */
  paused?: boolean | null;
}

export const DeleteUaRuleResponse = /*@__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    id: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
    configuration: Schema.optional(Schema.Union([Configuration, Schema.Null])),
    description: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
    mode: Schema.optional(
      Schema.Union([
        Schema.Union([
          Schema.Literals([
            "block",
            "challenge",
            "js_challenge",
            "managed_challenge",
          ]),
          Schema.String,
        ]),
        Schema.Null,
      ]),
    ),
    paused: Schema.optional(Schema.Union([Schema.Boolean, Schema.Null])),
  }).pipe(T.ResponsePath("result")),
) as unknown as Schema.Codec<DeleteUaRuleResponse>;

export type DeleteUaRuleError = DefaultErrors | UaRuleNotFound | Forbidden;

export const deleteUaRule: API.OperationMethod<
  DeleteUaRuleRequest,
  DeleteUaRuleResponse,
  DeleteUaRuleError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: DeleteUaRuleRequest,
  output: DeleteUaRuleResponse,
  errors: [UaRuleNotFound, Forbidden],
}));

// =============================================================================
// WafOverride
// =============================================================================

export interface GetWafOverrideRequest {
  overridesId: string;
  /** Defines an identifier. */
  zoneId: string;
}

export const GetWafOverrideRequest = /*@__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    overridesId: Schema.String.pipe(T.HttpPath("overridesId")),
    zoneId: Schema.String.pipe(T.HttpPath("zone_id")),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/zones/{zone_id}/firewall/waf/overrides/{overridesId}",
    }),
  ),
) as unknown as Schema.Codec<GetWafOverrideRequest>;

export interface GetWafOverrideResponse {
  /** The unique identifier of the WAF override. */
  id?: string | null;
  /** An informative summary of the current URI-based WAF override. */
  description?: string | null;
  /** An object that allows you to enable or disable WAF rule groups for the current WAF override. Each key of this object must be the ID of a WAF rule group, and each value must be a valid WAF action (usua */
  groups?: Record<string, unknown> | null;
  /** When true, indicates that the rule is currently paused. */
  paused?: boolean | null;
  /** The relative priority of the current URI-based WAF override when multiple overrides match a single URL. A lower number indicates higher priority. Higher priority overrides may overwrite values set by  */
  priority?: number | null;
  /** Specifies that, when a WAF rule matches, its configured action will be replaced by the action configured in this object. */
  rewriteAction?: {
    block?:
      | "challenge"
      | "block"
      | "simulate"
      | "disable"
      | "default"
      | (string & {})
      | null;
    challenge?:
      | "challenge"
      | "block"
      | "simulate"
      | "disable"
      | "default"
      | (string & {})
      | null;
    default?:
      | "challenge"
      | "block"
      | "simulate"
      | "disable"
      | "default"
      | (string & {})
      | null;
    disable?:
      | "challenge"
      | "block"
      | "simulate"
      | "disable"
      | "default"
      | (string & {})
      | null;
    simulate?:
      | "challenge"
      | "block"
      | "simulate"
      | "disable"
      | "default"
      | (string & {})
      | null;
  } | null;
  /** An object that allows you to override the action of specific WAF rules. Each key of this object must be the ID of a WAF rule, and each value must be a valid WAF action. Unless you are disabling a rule */
  rules?: Record<string, unknown> | null;
  /** The URLs to include in the current WAF override. You can use wildcards. Each entered URL will be escaped before use, which means you can only use simple wildcard patterns. */
  urls?: string[] | null;
}

export const GetWafOverrideResponse =
  /*@__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      id: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
      description: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
      groups: Schema.optional(
        Schema.Union([
          Schema.Record(Schema.String, Schema.Unknown),
          Schema.Null,
        ]),
      ),
      paused: Schema.optional(Schema.Union([Schema.Boolean, Schema.Null])),
      priority: Schema.optional(Schema.Union([Schema.Number, Schema.Null])),
      rewriteAction: Schema.optional(
        Schema.Union([RewriteAction, Schema.Null]),
      ),
      rules: Schema.optional(
        Schema.Union([
          Schema.Record(Schema.String, Schema.Unknown),
          Schema.Null,
        ]),
      ),
      urls: Schema.optional(
        Schema.Union([Schema.Array(Schema.String), Schema.Null]),
      ),
    })
      .pipe(
        Schema.encodeKeys({
          id: "id",
          description: "description",
          groups: "groups",
          paused: "paused",
          priority: "priority",
          rewriteAction: "rewrite_action",
          rules: "rules",
          urls: "urls",
        }),
      )
      .pipe(T.ResponsePath("result")),
  ) as unknown as Schema.Codec<GetWafOverrideResponse>;

export type GetWafOverrideError = DefaultErrors;

export const getWafOverride: API.OperationMethod<
  GetWafOverrideRequest,
  GetWafOverrideResponse,
  GetWafOverrideError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: GetWafOverrideRequest,
  output: GetWafOverrideResponse,
  errors: [],
}));

export interface ListWafOverridesRequest {
  /** Path param: Defines an identifier. */
  zoneId: string;
  page?: number;
  perPage?: number;
}

export const ListWafOverridesRequest =
  /*@__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      zoneId: Schema.String.pipe(T.HttpPath("zone_id")),
      page: Schema.optional(Schema.Number).pipe(T.HttpQuery("page")),
      perPage: Schema.optional(Schema.Number).pipe(T.HttpQuery("per_page")),
    }).pipe(
      T.Http({
        method: "GET",
        path: "/zones/{zone_id}/firewall/waf/overrides",
      }),
    ),
  ) as unknown as Schema.Codec<ListWafOverridesRequest>;

export interface ListWafOverridesResponse {
  result: {
    id?: string | null;
    description?: string | null;
    groups?: Record<string, unknown> | null;
    paused?: boolean | null;
    priority?: number | null;
    rewriteAction?: {
      block?:
        | "challenge"
        | "block"
        | "simulate"
        | "disable"
        | "default"
        | (string & {})
        | null;
      challenge?:
        | "challenge"
        | "block"
        | "simulate"
        | "disable"
        | "default"
        | (string & {})
        | null;
      default?:
        | "challenge"
        | "block"
        | "simulate"
        | "disable"
        | "default"
        | (string & {})
        | null;
      disable?:
        | "challenge"
        | "block"
        | "simulate"
        | "disable"
        | "default"
        | (string & {})
        | null;
      simulate?:
        | "challenge"
        | "block"
        | "simulate"
        | "disable"
        | "default"
        | (string & {})
        | null;
    } | null;
    rules?: Record<string, unknown> | null;
    urls?: string[] | null;
  }[];
  resultInfo?: {
    count?: number | null;
    page?: number | null;
    perPage?: number | null;
    totalCount?: number | null;
  } | null;
}

export const ListWafOverridesResponse =
  /*@__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      result: Schema.Array(ListWafOverridesResponseResult),
      resultInfo: Schema.optional(
        Schema.Union([ListAccessRulesResponseResultInfo, Schema.Null]),
      ),
    }).pipe(Schema.encodeKeys({ result: "result", resultInfo: "result_info" })),
  ) as unknown as Schema.Codec<ListWafOverridesResponse>;

export type ListWafOverridesError = DefaultErrors;

export const listWafOverrides: API.PaginatedOperationMethod<
  ListWafOverridesRequest,
  ListWafOverridesResponse,
  ListWafOverridesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: ListWafOverridesRequest,
  output: ListWafOverridesResponse,
  errors: [],
  pagination: {
    mode: "page",
    inputToken: "page",
    outputToken: "resultInfo.page",
    items: "result",
    pageSize: "perPage",
  } as const,
}));

export interface CreateWafOverrideRequest {
  /** Path param: Defines an identifier. */
  zoneId: string;
  /** Body param: The URLs to include in the current WAF override. You can use wildcards. Each entered URL will be escaped before use, which means you can only use simple wildcard patterns. */
  urls: string[];
}

export const CreateWafOverrideRequest =
  /*@__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      zoneId: Schema.String.pipe(T.HttpPath("zone_id")),
      urls: Schema.Array(Schema.String),
    }).pipe(
      T.Http({
        method: "POST",
        path: "/zones/{zone_id}/firewall/waf/overrides",
      }),
    ),
  ) as unknown as Schema.Codec<CreateWafOverrideRequest>;

export interface CreateWafOverrideResponse {
  /** The unique identifier of the WAF override. */
  id?: string | null;
  /** An informative summary of the current URI-based WAF override. */
  description?: string | null;
  /** An object that allows you to enable or disable WAF rule groups for the current WAF override. Each key of this object must be the ID of a WAF rule group, and each value must be a valid WAF action (usua */
  groups?: Record<string, unknown> | null;
  /** When true, indicates that the rule is currently paused. */
  paused?: boolean | null;
  /** The relative priority of the current URI-based WAF override when multiple overrides match a single URL. A lower number indicates higher priority. Higher priority overrides may overwrite values set by  */
  priority?: number | null;
  /** Specifies that, when a WAF rule matches, its configured action will be replaced by the action configured in this object. */
  rewriteAction?: {
    block?:
      | "challenge"
      | "block"
      | "simulate"
      | "disable"
      | "default"
      | (string & {})
      | null;
    challenge?:
      | "challenge"
      | "block"
      | "simulate"
      | "disable"
      | "default"
      | (string & {})
      | null;
    default?:
      | "challenge"
      | "block"
      | "simulate"
      | "disable"
      | "default"
      | (string & {})
      | null;
    disable?:
      | "challenge"
      | "block"
      | "simulate"
      | "disable"
      | "default"
      | (string & {})
      | null;
    simulate?:
      | "challenge"
      | "block"
      | "simulate"
      | "disable"
      | "default"
      | (string & {})
      | null;
  } | null;
  /** An object that allows you to override the action of specific WAF rules. Each key of this object must be the ID of a WAF rule, and each value must be a valid WAF action. Unless you are disabling a rule */
  rules?: Record<string, unknown> | null;
  /** The URLs to include in the current WAF override. You can use wildcards. Each entered URL will be escaped before use, which means you can only use simple wildcard patterns. */
  urls?: string[] | null;
}

export const CreateWafOverrideResponse =
  /*@__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      id: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
      description: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
      groups: Schema.optional(
        Schema.Union([
          Schema.Record(Schema.String, Schema.Unknown),
          Schema.Null,
        ]),
      ),
      paused: Schema.optional(Schema.Union([Schema.Boolean, Schema.Null])),
      priority: Schema.optional(Schema.Union([Schema.Number, Schema.Null])),
      rewriteAction: Schema.optional(
        Schema.Union([RewriteAction, Schema.Null]),
      ),
      rules: Schema.optional(
        Schema.Union([
          Schema.Record(Schema.String, Schema.Unknown),
          Schema.Null,
        ]),
      ),
      urls: Schema.optional(
        Schema.Union([Schema.Array(Schema.String), Schema.Null]),
      ),
    })
      .pipe(
        Schema.encodeKeys({
          id: "id",
          description: "description",
          groups: "groups",
          paused: "paused",
          priority: "priority",
          rewriteAction: "rewrite_action",
          rules: "rules",
          urls: "urls",
        }),
      )
      .pipe(T.ResponsePath("result")),
  ) as unknown as Schema.Codec<CreateWafOverrideResponse>;

export type CreateWafOverrideError = DefaultErrors;

export const createWafOverride: API.OperationMethod<
  CreateWafOverrideRequest,
  CreateWafOverrideResponse,
  CreateWafOverrideError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: CreateWafOverrideRequest,
  output: CreateWafOverrideResponse,
  errors: [],
}));

export interface UpdateWafOverrideRequest {
  overridesId: string;
  /** Path param: Defines an identifier. */
  zoneId: string;
  /** Body param: Defines an identifier. */
  id: string;
  /** Body param: Specifies that, when a WAF rule matches, its configured action will be replaced by the action configured in this object. */
  rewriteAction: {
    block?:
      | "challenge"
      | "block"
      | "simulate"
      | "disable"
      | "default"
      | (string & {});
    challenge?:
      | "challenge"
      | "block"
      | "simulate"
      | "disable"
      | "default"
      | (string & {});
    default?:
      | "challenge"
      | "block"
      | "simulate"
      | "disable"
      | "default"
      | (string & {});
    disable?:
      | "challenge"
      | "block"
      | "simulate"
      | "disable"
      | "default"
      | (string & {});
    simulate?:
      | "challenge"
      | "block"
      | "simulate"
      | "disable"
      | "default"
      | (string & {});
  };
  /** Body param: An object that allows you to override the action of specific WAF rules. Each key of this object must be the ID of a WAF rule, and each value must be a valid WAF action. Unless you are disa */
  rules: Record<string, unknown>;
  /** Body param: The URLs to include in the current WAF override. You can use wildcards. Each entered URL will be escaped before use, which means you can only use simple wildcard patterns. */
  urls: string[];
}

export const UpdateWafOverrideRequest =
  /*@__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      overridesId: Schema.String.pipe(T.HttpPath("overridesId")),
      zoneId: Schema.String.pipe(T.HttpPath("zone_id")),
      id: Schema.String,
      rewriteAction: RewriteAction,
      rules: Schema.Record(Schema.String, Schema.Unknown),
      urls: Schema.Array(Schema.String),
    }).pipe(
      Schema.encodeKeys({
        id: "id",
        rewriteAction: "rewrite_action",
        rules: "rules",
        urls: "urls",
      }),
      T.Http({
        method: "PUT",
        path: "/zones/{zone_id}/firewall/waf/overrides/{overridesId}",
      }),
    ),
  ) as unknown as Schema.Codec<UpdateWafOverrideRequest>;

export interface UpdateWafOverrideResponse {
  /** The unique identifier of the WAF override. */
  id?: string | null;
  /** An informative summary of the current URI-based WAF override. */
  description?: string | null;
  /** An object that allows you to enable or disable WAF rule groups for the current WAF override. Each key of this object must be the ID of a WAF rule group, and each value must be a valid WAF action (usua */
  groups?: Record<string, unknown> | null;
  /** When true, indicates that the rule is currently paused. */
  paused?: boolean | null;
  /** The relative priority of the current URI-based WAF override when multiple overrides match a single URL. A lower number indicates higher priority. Higher priority overrides may overwrite values set by  */
  priority?: number | null;
  /** Specifies that, when a WAF rule matches, its configured action will be replaced by the action configured in this object. */
  rewriteAction?: {
    block?:
      | "challenge"
      | "block"
      | "simulate"
      | "disable"
      | "default"
      | (string & {})
      | null;
    challenge?:
      | "challenge"
      | "block"
      | "simulate"
      | "disable"
      | "default"
      | (string & {})
      | null;
    default?:
      | "challenge"
      | "block"
      | "simulate"
      | "disable"
      | "default"
      | (string & {})
      | null;
    disable?:
      | "challenge"
      | "block"
      | "simulate"
      | "disable"
      | "default"
      | (string & {})
      | null;
    simulate?:
      | "challenge"
      | "block"
      | "simulate"
      | "disable"
      | "default"
      | (string & {})
      | null;
  } | null;
  /** An object that allows you to override the action of specific WAF rules. Each key of this object must be the ID of a WAF rule, and each value must be a valid WAF action. Unless you are disabling a rule */
  rules?: Record<string, unknown> | null;
  /** The URLs to include in the current WAF override. You can use wildcards. Each entered URL will be escaped before use, which means you can only use simple wildcard patterns. */
  urls?: string[] | null;
}

export const UpdateWafOverrideResponse =
  /*@__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      id: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
      description: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
      groups: Schema.optional(
        Schema.Union([
          Schema.Record(Schema.String, Schema.Unknown),
          Schema.Null,
        ]),
      ),
      paused: Schema.optional(Schema.Union([Schema.Boolean, Schema.Null])),
      priority: Schema.optional(Schema.Union([Schema.Number, Schema.Null])),
      rewriteAction: Schema.optional(
        Schema.Union([RewriteAction, Schema.Null]),
      ),
      rules: Schema.optional(
        Schema.Union([
          Schema.Record(Schema.String, Schema.Unknown),
          Schema.Null,
        ]),
      ),
      urls: Schema.optional(
        Schema.Union([Schema.Array(Schema.String), Schema.Null]),
      ),
    })
      .pipe(
        Schema.encodeKeys({
          id: "id",
          description: "description",
          groups: "groups",
          paused: "paused",
          priority: "priority",
          rewriteAction: "rewrite_action",
          rules: "rules",
          urls: "urls",
        }),
      )
      .pipe(T.ResponsePath("result")),
  ) as unknown as Schema.Codec<UpdateWafOverrideResponse>;

export type UpdateWafOverrideError = DefaultErrors;

export const updateWafOverride: API.OperationMethod<
  UpdateWafOverrideRequest,
  UpdateWafOverrideResponse,
  UpdateWafOverrideError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: UpdateWafOverrideRequest,
  output: UpdateWafOverrideResponse,
  errors: [],
}));

export interface DeleteWafOverrideRequest {
  overridesId: string;
  /** Defines an identifier. */
  zoneId: string;
}

export const DeleteWafOverrideRequest =
  /*@__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      overridesId: Schema.String.pipe(T.HttpPath("overridesId")),
      zoneId: Schema.String.pipe(T.HttpPath("zone_id")),
    }).pipe(
      T.Http({
        method: "DELETE",
        path: "/zones/{zone_id}/firewall/waf/overrides/{overridesId}",
      }),
    ),
  ) as unknown as Schema.Codec<DeleteWafOverrideRequest>;

export interface DeleteWafOverrideResponse {
  /** The unique identifier of the WAF override. */
  id?: string | null;
}

export const DeleteWafOverrideResponse =
  /*@__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      id: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
    }).pipe(T.ResponsePath("result")),
  ) as unknown as Schema.Codec<DeleteWafOverrideResponse>;

export type DeleteWafOverrideError = DefaultErrors;

export const deleteWafOverride: API.OperationMethod<
  DeleteWafOverrideRequest,
  DeleteWafOverrideResponse,
  DeleteWafOverrideError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: DeleteWafOverrideRequest,
  output: DeleteWafOverrideResponse,
  errors: [],
}));

// =============================================================================
// WafPackage
// =============================================================================

export interface GetWafPackageRequest {
  packageId: string;
  /** Defines an identifier. */
  zoneId: string;
}

export const GetWafPackageRequest = /*@__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    packageId: Schema.String.pipe(T.HttpPath("packageId")),
    zoneId: Schema.String.pipe(T.HttpPath("zone_id")),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/zones/{zone_id}/firewall/waf/packages/{packageId}",
    }),
  ),
) as unknown as Schema.Codec<GetWafPackageRequest>;

export type GetWafPackageResponse =
  | {
      errors: {
        code: number;
        message: string;
        documentationUrl?: string | null;
        source?: { pointer?: string | null } | null;
      }[];
      messages: {
        code: number;
        message: string;
        documentationUrl?: string | null;
        source?: { pointer?: string | null } | null;
      }[];
      result: unknown;
      success: true;
    }
  | { result?: unknown | null };

export const GetWafPackageResponse = /*@__PURE__*/ Schema.suspend(() =>
  Schema.Union([FirewallAPIResponseSingle, Result]),
) as unknown as Schema.Codec<GetWafPackageResponse>;

export type GetWafPackageError = DefaultErrors;

export const getWafPackage: API.OperationMethod<
  GetWafPackageRequest,
  GetWafPackageResponse,
  GetWafPackageError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: GetWafPackageRequest,
  output: GetWafPackageResponse,
  errors: [],
}));

export interface ListWafPackagesRequest {
  /** Path param: Defines an identifier. */
  zoneId: string;
  page?: number;
  perPage?: number;
  /** Query param: The direction used to sort returned packages. */
  direction?: "asc" | "desc" | (string & {});
  /** Query param: When set to `all`, all the search requirements must match. When set to `any`, only one of the search requirements has to match. */
  match?: "any" | "all" | (string & {});
  /** Query param: The name of the WAF package. */
  name?: string;
  /** Query param: The field used to sort returned packages. */
  order?: "name";
}

export const ListWafPackagesRequest =
  /*@__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      zoneId: Schema.String.pipe(T.HttpPath("zone_id")),
      page: Schema.optional(Schema.Number).pipe(T.HttpQuery("page")),
      perPage: Schema.optional(Schema.Number).pipe(T.HttpQuery("per_page")),
      direction: Schema.optional(
        Schema.Union([Schema.Literals(["asc", "desc"]), Schema.String]),
      ).pipe(T.HttpQuery("direction")),
      match: Schema.optional(
        Schema.Union([Schema.Literals(["any", "all"]), Schema.String]),
      ).pipe(T.HttpQuery("match")),
      name: Schema.optional(Schema.String).pipe(T.HttpQuery("name")),
      order: Schema.optional(Schema.Literal("name")).pipe(T.HttpQuery("order")),
    }).pipe(
      T.Http({ method: "GET", path: "/zones/{zone_id}/firewall/waf/packages" }),
    ),
  ) as unknown as Schema.Codec<ListWafPackagesRequest>;

export interface ListWafPackagesResponse {
  result: unknown[];
  resultInfo?: {
    count?: number | null;
    page?: number | null;
    perPage?: number | null;
    totalCount?: number | null;
  } | null;
}

export const ListWafPackagesResponse =
  /*@__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      result: Schema.Array(Schema.Unknown),
      resultInfo: Schema.optional(
        Schema.Union([ListAccessRulesResponseResultInfo, Schema.Null]),
      ),
    }).pipe(Schema.encodeKeys({ result: "result", resultInfo: "result_info" })),
  ) as unknown as Schema.Codec<ListWafPackagesResponse>;

export type ListWafPackagesError = DefaultErrors;

export const listWafPackages: API.PaginatedOperationMethod<
  ListWafPackagesRequest,
  ListWafPackagesResponse,
  ListWafPackagesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: ListWafPackagesRequest,
  output: ListWafPackagesResponse,
  errors: [],
  pagination: {
    mode: "page",
    inputToken: "page",
    outputToken: "resultInfo.page",
    items: "result",
    pageSize: "perPage",
  } as const,
}));

// =============================================================================
// WafPackageGroup
// =============================================================================

export interface GetWafPackageGroupRequest {
  packageId: string;
  groupId: string;
  /** Defines an identifier of a schema. */
  zoneId: string;
}

export const GetWafPackageGroupRequest =
  /*@__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      packageId: Schema.String.pipe(T.HttpPath("packageId")),
      groupId: Schema.String.pipe(T.HttpPath("groupId")),
      zoneId: Schema.String.pipe(T.HttpPath("zone_id")),
    }).pipe(
      T.Http({
        method: "GET",
        path: "/zones/{zone_id}/firewall/waf/packages/{packageId}/groups/{groupId}",
      }),
    ),
  ) as unknown as Schema.Codec<GetWafPackageGroupRequest>;

export type GetWafPackageGroupResponse = unknown;

export const GetWafPackageGroupResponse =
  /*@__PURE__*/ Schema.suspend(() =>
    Schema.Unknown.pipe(T.ResponsePath("result")),
  ) as unknown as Schema.Codec<GetWafPackageGroupResponse>;

export type GetWafPackageGroupError = DefaultErrors;

export const getWafPackageGroup: API.OperationMethod<
  GetWafPackageGroupRequest,
  GetWafPackageGroupResponse,
  GetWafPackageGroupError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: GetWafPackageGroupRequest,
  output: GetWafPackageGroupResponse,
  errors: [],
}));

export interface ListWafPackageGroupsRequest {
  packageId: string;
  /** Path param: Defines an identifier of a schema. */
  zoneId: string;
  page?: number;
  perPage?: number;
  /** Query param: Defines the direction used to sort returned rule groups. */
  direction?: "asc" | "desc" | (string & {});
  /** Query param: Defines the condition for search requirements. When set to `all`, all the search requirements must match. When set to `any`, only one of the search requirements has to match. */
  match?: "any" | "all" | (string & {});
  /** Query param: Defines the state of the rules contained in the rule group. When `on`, the rules in the group are configurable/usable. */
  mode?: "on" | "off" | (string & {});
  /** Query param: Defines the name of the rule group. */
  name?: string;
  /** Query param: Defines the field used to sort returned rule groups. */
  order?: "mode" | "rules_count" | (string & {});
  /** Query param: Defines the number of rules in the current rule group. */
  rulesCount?: number;
}

export const ListWafPackageGroupsRequest =
  /*@__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      packageId: Schema.String.pipe(T.HttpPath("packageId")),
      zoneId: Schema.String.pipe(T.HttpPath("zone_id")),
      page: Schema.optional(Schema.Number).pipe(T.HttpQuery("page")),
      perPage: Schema.optional(Schema.Number).pipe(T.HttpQuery("per_page")),
      direction: Schema.optional(
        Schema.Union([Schema.Literals(["asc", "desc"]), Schema.String]),
      ).pipe(T.HttpQuery("direction")),
      match: Schema.optional(
        Schema.Union([Schema.Literals(["any", "all"]), Schema.String]),
      ).pipe(T.HttpQuery("match")),
      mode: Schema.optional(
        Schema.Union([Schema.Literals(["on", "off"]), Schema.String]),
      ).pipe(T.HttpQuery("mode")),
      name: Schema.optional(Schema.String).pipe(T.HttpQuery("name")),
      order: Schema.optional(
        Schema.Union([Schema.Literals(["mode", "rules_count"]), Schema.String]),
      ).pipe(T.HttpQuery("order")),
      rulesCount: Schema.optional(Schema.Number).pipe(
        T.HttpQuery("rules_count"),
      ),
    }).pipe(
      T.Http({
        method: "GET",
        path: "/zones/{zone_id}/firewall/waf/packages/{packageId}/groups",
      }),
    ),
  ) as unknown as Schema.Codec<ListWafPackageGroupsRequest>;

export interface ListWafPackageGroupsResponse {
  result: {
    id: string;
    description: string | null;
    mode: "on" | "off" | (string & {});
    name: string;
    rulesCount: number;
    allowedModes?: ("on" | "off" | (string & {}))[] | null;
    modifiedRulesCount?: number | null;
    packageId?: string | null;
  }[];
  resultInfo?: {
    count?: number | null;
    page?: number | null;
    perPage?: number | null;
    totalCount?: number | null;
  } | null;
}

export const ListWafPackageGroupsResponse =
  /*@__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      result: Schema.Array(ListWafPackageGroupsResponseResult),
      resultInfo: Schema.optional(
        Schema.Union([ListAccessRulesResponseResultInfo, Schema.Null]),
      ),
    }).pipe(Schema.encodeKeys({ result: "result", resultInfo: "result_info" })),
  ) as unknown as Schema.Codec<ListWafPackageGroupsResponse>;

export type ListWafPackageGroupsError = DefaultErrors;

export const listWafPackageGroups: API.PaginatedOperationMethod<
  ListWafPackageGroupsRequest,
  ListWafPackageGroupsResponse,
  ListWafPackageGroupsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: ListWafPackageGroupsRequest,
  output: ListWafPackageGroupsResponse,
  errors: [],
  pagination: {
    mode: "page",
    inputToken: "page",
    outputToken: "resultInfo.page",
    items: "result",
    pageSize: "perPage",
  } as const,
}));

export interface PatchWafPackageGroupRequest {
  packageId: string;
  groupId: string;
  /** Path param: Defines an identifier of a schema. */
  zoneId: string;
  /** Body param: Defines the state of the rules contained in the rule group. When `on`, the rules in the group are configurable/usable. */
  mode?: "on" | "off" | (string & {});
}

export const PatchWafPackageGroupRequest =
  /*@__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      packageId: Schema.String.pipe(T.HttpPath("packageId")),
      groupId: Schema.String.pipe(T.HttpPath("groupId")),
      zoneId: Schema.String.pipe(T.HttpPath("zone_id")),
      mode: Schema.optional(
        Schema.Union([Schema.Literals(["on", "off"]), Schema.String]),
      ),
    }).pipe(
      T.Http({
        method: "PATCH",
        path: "/zones/{zone_id}/firewall/waf/packages/{packageId}/groups/{groupId}",
      }),
    ),
  ) as unknown as Schema.Codec<PatchWafPackageGroupRequest>;

export type PatchWafPackageGroupResponse = unknown;

export const PatchWafPackageGroupResponse =
  /*@__PURE__*/ Schema.suspend(() =>
    Schema.Unknown.pipe(T.ResponsePath("result")),
  ) as unknown as Schema.Codec<PatchWafPackageGroupResponse>;

export type PatchWafPackageGroupError = DefaultErrors;

export const patchWafPackageGroup: API.OperationMethod<
  PatchWafPackageGroupRequest,
  PatchWafPackageGroupResponse,
  PatchWafPackageGroupError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: PatchWafPackageGroupRequest,
  output: PatchWafPackageGroupResponse,
  errors: [],
}));

// =============================================================================
// WafPackageRule
// =============================================================================

export interface GetWafPackageRuleRequest {
  packageId: string;
  ruleId: string;
  /** Defines an identifier of a schema. */
  zoneId: string;
}

export const GetWafPackageRuleRequest =
  /*@__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      packageId: Schema.String.pipe(T.HttpPath("packageId")),
      ruleId: Schema.String.pipe(T.HttpPath("ruleId")),
      zoneId: Schema.String.pipe(T.HttpPath("zone_id")),
    }).pipe(
      T.Http({
        method: "GET",
        path: "/zones/{zone_id}/firewall/waf/packages/{packageId}/rules/{ruleId}",
      }),
    ),
  ) as unknown as Schema.Codec<GetWafPackageRuleRequest>;

export type GetWafPackageRuleResponse = unknown;

export const GetWafPackageRuleResponse =
  /*@__PURE__*/ Schema.suspend(() =>
    Schema.Unknown.pipe(T.ResponsePath("result")),
  ) as unknown as Schema.Codec<GetWafPackageRuleResponse>;

export type GetWafPackageRuleError = DefaultErrors;

export const getWafPackageRule: API.OperationMethod<
  GetWafPackageRuleRequest,
  GetWafPackageRuleResponse,
  GetWafPackageRuleError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: GetWafPackageRuleRequest,
  output: GetWafPackageRuleResponse,
  errors: [],
}));

export interface ListWafPackageRulesRequest {
  packageId: string;
  /** Path param: Defines an identifier of a schema. */
  zoneId: string;
  page?: number;
  perPage?: number;
  /** Query param: Defines the public description of the WAF rule. */
  description?: string;
  /** Query param: Defines the direction used to sort returned rules. */
  direction?: "asc" | "desc" | (string & {});
  /** Query param: Defines the unique identifier of the rule group. */
  groupId?: string;
  /** Query param: Defines the search requirements. When set to `all`, all the search requirements must match. When set to `any`, only one of the search requirements has to match. */
  match?: "any" | "all" | (string & {});
  /** Query param: Defines the action/mode a rule has been overridden to perform. */
  mode?: "DIS" | "CHL" | "BLK" | "SIM" | (string & {});
  /** Query param: Defines the field used to sort returned rules. */
  order?: "priority" | "group_id" | "description" | (string & {});
  /** Query param: Defines the order in which the individual WAF rule is executed within its rule group. */
  priority?: string;
}

export const ListWafPackageRulesRequest =
  /*@__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      packageId: Schema.String.pipe(T.HttpPath("packageId")),
      zoneId: Schema.String.pipe(T.HttpPath("zone_id")),
      page: Schema.optional(Schema.Number).pipe(T.HttpQuery("page")),
      perPage: Schema.optional(Schema.Number).pipe(T.HttpQuery("per_page")),
      description: Schema.optional(Schema.String).pipe(
        T.HttpQuery("description"),
      ),
      direction: Schema.optional(
        Schema.Union([Schema.Literals(["asc", "desc"]), Schema.String]),
      ).pipe(T.HttpQuery("direction")),
      groupId: Schema.optional(Schema.String).pipe(T.HttpQuery("group_id")),
      match: Schema.optional(
        Schema.Union([Schema.Literals(["any", "all"]), Schema.String]),
      ).pipe(T.HttpQuery("match")),
      mode: Schema.optional(
        Schema.Union([
          Schema.Literals(["DIS", "CHL", "BLK", "SIM"]),
          Schema.String,
        ]),
      ).pipe(T.HttpQuery("mode")),
      order: Schema.optional(
        Schema.Union([
          Schema.Literals(["priority", "group_id", "description"]),
          Schema.String,
        ]),
      ).pipe(T.HttpQuery("order")),
      priority: Schema.optional(Schema.String).pipe(T.HttpQuery("priority")),
    }).pipe(
      T.Http({
        method: "GET",
        path: "/zones/{zone_id}/firewall/waf/packages/{packageId}/rules",
      }),
    ),
  ) as unknown as Schema.Codec<ListWafPackageRulesRequest>;

export interface ListWafPackageRulesResponse {
  result: (
    | {
        id: string;
        allowedModes: ("on" | "off" | (string & {}))[];
        description: string;
        group: { id?: string | null; name?: string | null };
        mode: "on" | "off" | (string & {});
        packageId: string;
        priority: string;
      }
    | {
        id: string;
        allowedModes: (
          | "default"
          | "disable"
          | "simulate"
          | "block"
          | "challenge"
          | (string & {})
        )[];
        defaultMode:
          | "disable"
          | "simulate"
          | "block"
          | "challenge"
          | (string & {});
        description: string;
        group: { id?: string | null; name?: string | null };
        mode:
          | "default"
          | "disable"
          | "simulate"
          | "block"
          | "challenge"
          | (string & {});
        packageId: string;
        priority: string;
      }
  )[];
  resultInfo?: {
    count?: number | null;
    page?: number | null;
    perPage?: number | null;
    totalCount?: number | null;
  } | null;
}

export const ListWafPackageRulesResponse =
  /*@__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      result: Schema.Array(
        Schema.Union([
          WafmanagedRulesTraditionalDenyRule,
          WafmanagedRulesAnomalyRule,
        ]),
      ),
      resultInfo: Schema.optional(
        Schema.Union([ListAccessRulesResponseResultInfo, Schema.Null]),
      ),
    }).pipe(Schema.encodeKeys({ result: "result", resultInfo: "result_info" })),
  ) as unknown as Schema.Codec<ListWafPackageRulesResponse>;

export type ListWafPackageRulesError = DefaultErrors;

export const listWafPackageRules: API.PaginatedOperationMethod<
  ListWafPackageRulesRequest,
  ListWafPackageRulesResponse,
  ListWafPackageRulesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: ListWafPackageRulesRequest,
  output: ListWafPackageRulesResponse,
  errors: [],
  pagination: {
    mode: "page",
    inputToken: "page",
    outputToken: "resultInfo.page",
    items: "result",
    pageSize: "perPage",
  } as const,
}));

export interface PatchWafPackageRuleRequest {
  packageId: string;
  ruleId: string;
  /** Path param: Defines an identifier of a schema. */
  zoneId: string;
  /** Body param: Defines the mode/action of the rule when triggered. You must use a value from the `allowed_modes` array of the current rule. */
  mode?:
    | "default"
    | "disable"
    | "simulate"
    | "block"
    | "challenge"
    | "on"
    | "off"
    | (string & {});
}

export const PatchWafPackageRuleRequest =
  /*@__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      packageId: Schema.String.pipe(T.HttpPath("packageId")),
      ruleId: Schema.String.pipe(T.HttpPath("ruleId")),
      zoneId: Schema.String.pipe(T.HttpPath("zone_id")),
      mode: Schema.optional(
        Schema.Union([
          Schema.Literals([
            "default",
            "disable",
            "simulate",
            "block",
            "challenge",
            "on",
            "off",
          ]),
          Schema.String,
        ]),
      ),
    }).pipe(
      T.Http({
        method: "PATCH",
        path: "/zones/{zone_id}/firewall/waf/packages/{packageId}/rules/{ruleId}",
      }),
    ),
  ) as unknown as Schema.Codec<PatchWafPackageRuleRequest>;

export type PatchWafPackageRuleResponse =
  | {
      id: string;
      allowedModes: ("on" | "off" | (string & {}))[];
      description: string;
      group: { id?: string | null; name?: string | null };
      mode: "on" | "off" | (string & {});
      packageId: string;
      priority: string;
    }
  | {
      id: string;
      allowedModes: (
        | "default"
        | "disable"
        | "simulate"
        | "block"
        | "challenge"
        | (string & {})
      )[];
      defaultMode:
        | "disable"
        | "simulate"
        | "block"
        | "challenge"
        | (string & {});
      description: string;
      group: { id?: string | null; name?: string | null };
      mode:
        | "default"
        | "disable"
        | "simulate"
        | "block"
        | "challenge"
        | (string & {});
      packageId: string;
      priority: string;
    };

export const PatchWafPackageRuleResponse =
  /*@__PURE__*/ Schema.suspend(() =>
    Schema.Union([
      WafmanagedRulesTraditionalDenyRule,
      WafmanagedRulesAnomalyRule,
    ]).pipe(T.ResponsePath("result")),
  ) as unknown as Schema.Codec<PatchWafPackageRuleResponse>;

export type PatchWafPackageRuleError = DefaultErrors;

export const patchWafPackageRule: API.OperationMethod<
  PatchWafPackageRuleRequest,
  PatchWafPackageRuleResponse,
  PatchWafPackageRuleError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: PatchWafPackageRuleRequest,
  output: PatchWafPackageRuleResponse,
  errors: [],
}));
