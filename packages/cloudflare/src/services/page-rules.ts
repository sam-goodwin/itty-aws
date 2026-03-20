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
    | { id?: "always_use_https" | null }
    | { id?: "automatic_https_rewrites" | null; value?: "on" | "off" | null }
    | { id?: "browser_cache_ttl" | null; value?: number | null }
    | { id?: "browser_check" | null; value?: "on" | "off" | null }
    | { id?: "bypass_cache_on_cookie" | null; value?: string | null }
    | { id?: "cache_by_device_type" | null; value?: "on" | "off" | null }
    | { id?: "cache_deception_armor" | null; value?: "on" | "off" | null }
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
    | { id?: "email_obfuscation" | null; value?: "on" | "off" | null }
    | { id?: "explicit_cache_control" | null; value?: "on" | "off" | null }
    | {
        id?: "forwarding_url" | null;
        value?: {
          statusCode?: "301" | "302" | null;
          url?: string | null;
        } | null;
      }
    | { id?: "host_header_override" | null; value?: string | null }
    | { id?: "ip_geolocation" | null; value?: "on" | "off" | null }
    | { id?: "mirage" | null; value?: "on" | "off" | null }
    | { id?: "opportunistic_encryption" | null; value?: "on" | "off" | null }
    | { id?: "origin_error_page_pass_thru" | null; value?: "on" | "off" | null }
    | { id?: "polish" | null; value?: "off" | "lossless" | "lossy" | null }
    | { id?: "resolve_override" | null; value?: string | null }
    | { id?: "respect_strong_etag" | null; value?: "on" | "off" | null }
    | { id?: "response_buffering" | null; value?: "on" | "off" | null }
    | { id?: "rocket_loader" | null; value?: "on" | "off" | null }
    | {
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
    | { id?: "sort_query_string_for_cache" | null; value?: "on" | "off" | null }
    | {
        id?: "ssl" | null;
        value?: "off" | "flexible" | "full" | "strict" | "origin_pull" | null;
      }
    | { id?: "true_client_ip_header" | null; value?: "on" | "off" | null }
    | { id?: "waf" | null; value?: "on" | "off" | null }
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
  targets: {
    constraint?: {
      operator: "matches" | "contains" | "equals" | "not_equal" | "not_contain";
      value: string;
    } | null;
    target?: "url" | null;
  }[];
}

export const GetPageRuleResponse = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  id: Schema.String,
  actions: Schema.Array(
    Schema.Union([
      Schema.Struct({
        id: Schema.optional(
          Schema.Union([Schema.Literal("always_use_https"), Schema.Null]),
        ),
      }),
      Schema.Struct({
        id: Schema.optional(
          Schema.Union([
            Schema.Literal("automatic_https_rewrites"),
            Schema.Null,
          ]),
        ),
        value: Schema.optional(
          Schema.Union([Schema.Literals(["on", "off"]), Schema.Null]),
        ),
      }),
      Schema.Struct({
        id: Schema.optional(
          Schema.Union([Schema.Literal("browser_cache_ttl"), Schema.Null]),
        ),
        value: Schema.optional(Schema.Union([Schema.Number, Schema.Null])),
      }),
      Schema.Struct({
        id: Schema.optional(
          Schema.Union([Schema.Literal("browser_check"), Schema.Null]),
        ),
        value: Schema.optional(
          Schema.Union([Schema.Literals(["on", "off"]), Schema.Null]),
        ),
      }),
      Schema.Struct({
        id: Schema.optional(
          Schema.Union([Schema.Literal("bypass_cache_on_cookie"), Schema.Null]),
        ),
        value: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
      }),
      Schema.Struct({
        id: Schema.optional(
          Schema.Union([Schema.Literal("cache_by_device_type"), Schema.Null]),
        ),
        value: Schema.optional(
          Schema.Union([Schema.Literals(["on", "off"]), Schema.Null]),
        ),
      }),
      Schema.Struct({
        id: Schema.optional(
          Schema.Union([Schema.Literal("cache_deception_armor"), Schema.Null]),
        ),
        value: Schema.optional(
          Schema.Union([Schema.Literals(["on", "off"]), Schema.Null]),
        ),
      }),
      Schema.Struct({
        id: Schema.optional(
          Schema.Union([Schema.Literal("cache_key_fields"), Schema.Null]),
        ),
        value: Schema.optional(
          Schema.Union([
            Schema.Struct({
              cookie: Schema.optional(
                Schema.Union([
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
                  Schema.Null,
                ]),
              ),
              header: Schema.optional(
                Schema.Union([
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
                  Schema.Null,
                ]),
              ),
              host: Schema.optional(
                Schema.Union([
                  Schema.Struct({
                    resolved: Schema.optional(
                      Schema.Union([Schema.Boolean, Schema.Null]),
                    ),
                  }),
                  Schema.Null,
                ]),
              ),
              queryString: Schema.optional(
                Schema.Union([
                  Schema.Struct({
                    exclude: Schema.optional(
                      Schema.Union([
                        Schema.Union([
                          Schema.Literal("*"),
                          Schema.Array(Schema.String),
                        ]),
                        Schema.Null,
                      ]),
                    ),
                    include: Schema.optional(
                      Schema.Union([
                        Schema.Union([
                          Schema.Literal("*"),
                          Schema.Array(Schema.String),
                        ]),
                        Schema.Null,
                      ]),
                    ),
                  }),
                  Schema.Null,
                ]),
              ),
              user: Schema.optional(
                Schema.Union([
                  Schema.Struct({
                    deviceType: Schema.optional(
                      Schema.Union([Schema.Boolean, Schema.Null]),
                    ),
                    geo: Schema.optional(
                      Schema.Union([Schema.Boolean, Schema.Null]),
                    ),
                    lang: Schema.optional(
                      Schema.Union([Schema.Boolean, Schema.Null]),
                    ),
                  }).pipe(
                    Schema.encodeKeys({
                      deviceType: "device_type",
                      geo: "geo",
                      lang: "lang",
                    }),
                  ),
                  Schema.Null,
                ]),
              ),
            }).pipe(
              Schema.encodeKeys({
                cookie: "cookie",
                header: "header",
                host: "host",
                queryString: "query_string",
                user: "user",
              }),
            ),
            Schema.Null,
          ]),
        ),
      }),
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
      Schema.Struct({
        id: Schema.optional(
          Schema.Union([Schema.Literal("cache_on_cookie"), Schema.Null]),
        ),
        value: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
      }),
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
      Schema.Struct({
        id: Schema.optional(
          Schema.Union([Schema.Literal("disable_apps"), Schema.Null]),
        ),
      }),
      Schema.Struct({
        id: Schema.optional(
          Schema.Union([Schema.Literal("disable_performance"), Schema.Null]),
        ),
      }),
      Schema.Struct({
        id: Schema.optional(
          Schema.Union([Schema.Literal("disable_security"), Schema.Null]),
        ),
      }),
      Schema.Struct({
        id: Schema.optional(
          Schema.Union([Schema.Literal("disable_zaraz"), Schema.Null]),
        ),
      }),
      Schema.Struct({
        id: Schema.optional(
          Schema.Union([Schema.Literal("edge_cache_ttl"), Schema.Null]),
        ),
        value: Schema.optional(Schema.Union([Schema.Number, Schema.Null])),
      }),
      Schema.Struct({
        id: Schema.optional(
          Schema.Union([Schema.Literal("email_obfuscation"), Schema.Null]),
        ),
        value: Schema.optional(
          Schema.Union([Schema.Literals(["on", "off"]), Schema.Null]),
        ),
      }),
      Schema.Struct({
        id: Schema.optional(
          Schema.Union([Schema.Literal("explicit_cache_control"), Schema.Null]),
        ),
        value: Schema.optional(
          Schema.Union([Schema.Literals(["on", "off"]), Schema.Null]),
        ),
      }),
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
            }).pipe(
              Schema.encodeKeys({ statusCode: "status_code", url: "url" }),
            ),
            Schema.Null,
          ]),
        ),
      }),
      Schema.Struct({
        id: Schema.optional(
          Schema.Union([Schema.Literal("host_header_override"), Schema.Null]),
        ),
        value: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
      }),
      Schema.Struct({
        id: Schema.optional(
          Schema.Union([Schema.Literal("ip_geolocation"), Schema.Null]),
        ),
        value: Schema.optional(
          Schema.Union([Schema.Literals(["on", "off"]), Schema.Null]),
        ),
      }),
      Schema.Struct({
        id: Schema.optional(
          Schema.Union([Schema.Literal("mirage"), Schema.Null]),
        ),
        value: Schema.optional(
          Schema.Union([Schema.Literals(["on", "off"]), Schema.Null]),
        ),
      }),
      Schema.Struct({
        id: Schema.optional(
          Schema.Union([
            Schema.Literal("opportunistic_encryption"),
            Schema.Null,
          ]),
        ),
        value: Schema.optional(
          Schema.Union([Schema.Literals(["on", "off"]), Schema.Null]),
        ),
      }),
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
      Schema.Struct({
        id: Schema.optional(
          Schema.Union([Schema.Literal("resolve_override"), Schema.Null]),
        ),
        value: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
      }),
      Schema.Struct({
        id: Schema.optional(
          Schema.Union([Schema.Literal("respect_strong_etag"), Schema.Null]),
        ),
        value: Schema.optional(
          Schema.Union([Schema.Literals(["on", "off"]), Schema.Null]),
        ),
      }),
      Schema.Struct({
        id: Schema.optional(
          Schema.Union([Schema.Literal("response_buffering"), Schema.Null]),
        ),
        value: Schema.optional(
          Schema.Union([Schema.Literals(["on", "off"]), Schema.Null]),
        ),
      }),
      Schema.Struct({
        id: Schema.optional(
          Schema.Union([Schema.Literal("rocket_loader"), Schema.Null]),
        ),
        value: Schema.optional(
          Schema.Union([Schema.Literals(["on", "off"]), Schema.Null]),
        ),
      }),
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
      Schema.Struct({
        id: Schema.optional(Schema.Union([Schema.Literal("ssl"), Schema.Null])),
        value: Schema.optional(
          Schema.Union([
            Schema.Literals([
              "off",
              "flexible",
              "full",
              "strict",
              "origin_pull",
            ]),
            Schema.Null,
          ]),
        ),
      }),
      Schema.Struct({
        id: Schema.optional(
          Schema.Union([Schema.Literal("true_client_ip_header"), Schema.Null]),
        ),
        value: Schema.optional(
          Schema.Union([Schema.Literals(["on", "off"]), Schema.Null]),
        ),
      }),
      Schema.Struct({
        id: Schema.optional(Schema.Union([Schema.Literal("waf"), Schema.Null])),
        value: Schema.optional(
          Schema.Union([Schema.Literals(["on", "off"]), Schema.Null]),
        ),
      }),
    ]),
  ),
  createdOn: Schema.String,
  modifiedOn: Schema.String,
  priority: Schema.Number,
  status: Schema.Literals(["active", "disabled"]),
  targets: Schema.Array(
    Schema.Struct({
      constraint: Schema.optional(
        Schema.Union([
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
          Schema.Null,
        ]),
      ),
      target: Schema.optional(
        Schema.Union([Schema.Literal("url"), Schema.Null]),
      ),
    }),
  ),
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
    | { id?: "always_use_https" | null }
    | { id?: "automatic_https_rewrites" | null; value?: "on" | "off" | null }
    | { id?: "browser_cache_ttl" | null; value?: number | null }
    | { id?: "browser_check" | null; value?: "on" | "off" | null }
    | { id?: "bypass_cache_on_cookie" | null; value?: string | null }
    | { id?: "cache_by_device_type" | null; value?: "on" | "off" | null }
    | { id?: "cache_deception_armor" | null; value?: "on" | "off" | null }
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
    | { id?: "email_obfuscation" | null; value?: "on" | "off" | null }
    | { id?: "explicit_cache_control" | null; value?: "on" | "off" | null }
    | {
        id?: "forwarding_url" | null;
        value?: {
          statusCode?: "301" | "302" | null;
          url?: string | null;
        } | null;
      }
    | { id?: "host_header_override" | null; value?: string | null }
    | { id?: "ip_geolocation" | null; value?: "on" | "off" | null }
    | { id?: "mirage" | null; value?: "on" | "off" | null }
    | { id?: "opportunistic_encryption" | null; value?: "on" | "off" | null }
    | { id?: "origin_error_page_pass_thru" | null; value?: "on" | "off" | null }
    | { id?: "polish" | null; value?: "off" | "lossless" | "lossy" | null }
    | { id?: "resolve_override" | null; value?: string | null }
    | { id?: "respect_strong_etag" | null; value?: "on" | "off" | null }
    | { id?: "response_buffering" | null; value?: "on" | "off" | null }
    | { id?: "rocket_loader" | null; value?: "on" | "off" | null }
    | {
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
    | { id?: "sort_query_string_for_cache" | null; value?: "on" | "off" | null }
    | {
        id?: "ssl" | null;
        value?: "off" | "flexible" | "full" | "strict" | "origin_pull" | null;
      }
    | { id?: "true_client_ip_header" | null; value?: "on" | "off" | null }
    | { id?: "waf" | null; value?: "on" | "off" | null }
  )[];
  createdOn: string;
  modifiedOn: string;
  priority: number;
  status: "active" | "disabled";
  targets: {
    constraint?: {
      operator: "matches" | "contains" | "equals" | "not_equal" | "not_contain";
      value: string;
    } | null;
    target?: "url" | null;
  }[];
}[];

export const ListPageRulesResponse = /*@__PURE__*/ /*#__PURE__*/ Schema.Array(
  Schema.Struct({
    id: Schema.String,
    actions: Schema.Array(
      Schema.Union([
        Schema.Struct({
          id: Schema.optional(
            Schema.Union([Schema.Literal("always_use_https"), Schema.Null]),
          ),
        }),
        Schema.Struct({
          id: Schema.optional(
            Schema.Union([
              Schema.Literal("automatic_https_rewrites"),
              Schema.Null,
            ]),
          ),
          value: Schema.optional(
            Schema.Union([Schema.Literals(["on", "off"]), Schema.Null]),
          ),
        }),
        Schema.Struct({
          id: Schema.optional(
            Schema.Union([Schema.Literal("browser_cache_ttl"), Schema.Null]),
          ),
          value: Schema.optional(Schema.Union([Schema.Number, Schema.Null])),
        }),
        Schema.Struct({
          id: Schema.optional(
            Schema.Union([Schema.Literal("browser_check"), Schema.Null]),
          ),
          value: Schema.optional(
            Schema.Union([Schema.Literals(["on", "off"]), Schema.Null]),
          ),
        }),
        Schema.Struct({
          id: Schema.optional(
            Schema.Union([
              Schema.Literal("bypass_cache_on_cookie"),
              Schema.Null,
            ]),
          ),
          value: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
        }),
        Schema.Struct({
          id: Schema.optional(
            Schema.Union([Schema.Literal("cache_by_device_type"), Schema.Null]),
          ),
          value: Schema.optional(
            Schema.Union([Schema.Literals(["on", "off"]), Schema.Null]),
          ),
        }),
        Schema.Struct({
          id: Schema.optional(
            Schema.Union([
              Schema.Literal("cache_deception_armor"),
              Schema.Null,
            ]),
          ),
          value: Schema.optional(
            Schema.Union([Schema.Literals(["on", "off"]), Schema.Null]),
          ),
        }),
        Schema.Struct({
          id: Schema.optional(
            Schema.Union([Schema.Literal("cache_key_fields"), Schema.Null]),
          ),
          value: Schema.optional(
            Schema.Union([
              Schema.Struct({
                cookie: Schema.optional(
                  Schema.Union([
                    Schema.Struct({
                      checkPresence: Schema.optional(
                        Schema.Union([
                          Schema.Array(Schema.String),
                          Schema.Null,
                        ]),
                      ),
                      include: Schema.optional(
                        Schema.Union([
                          Schema.Array(Schema.String),
                          Schema.Null,
                        ]),
                      ),
                    }).pipe(
                      Schema.encodeKeys({
                        checkPresence: "check_presence",
                        include: "include",
                      }),
                    ),
                    Schema.Null,
                  ]),
                ),
                header: Schema.optional(
                  Schema.Union([
                    Schema.Struct({
                      checkPresence: Schema.optional(
                        Schema.Union([
                          Schema.Array(Schema.String),
                          Schema.Null,
                        ]),
                      ),
                      exclude: Schema.optional(
                        Schema.Union([
                          Schema.Array(Schema.String),
                          Schema.Null,
                        ]),
                      ),
                      include: Schema.optional(
                        Schema.Union([
                          Schema.Array(Schema.String),
                          Schema.Null,
                        ]),
                      ),
                    }).pipe(
                      Schema.encodeKeys({
                        checkPresence: "check_presence",
                        exclude: "exclude",
                        include: "include",
                      }),
                    ),
                    Schema.Null,
                  ]),
                ),
                host: Schema.optional(
                  Schema.Union([
                    Schema.Struct({
                      resolved: Schema.optional(
                        Schema.Union([Schema.Boolean, Schema.Null]),
                      ),
                    }),
                    Schema.Null,
                  ]),
                ),
                queryString: Schema.optional(
                  Schema.Union([
                    Schema.Struct({
                      exclude: Schema.optional(
                        Schema.Union([
                          Schema.Union([
                            Schema.Literal("*"),
                            Schema.Array(Schema.String),
                          ]),
                          Schema.Null,
                        ]),
                      ),
                      include: Schema.optional(
                        Schema.Union([
                          Schema.Union([
                            Schema.Literal("*"),
                            Schema.Array(Schema.String),
                          ]),
                          Schema.Null,
                        ]),
                      ),
                    }),
                    Schema.Null,
                  ]),
                ),
                user: Schema.optional(
                  Schema.Union([
                    Schema.Struct({
                      deviceType: Schema.optional(
                        Schema.Union([Schema.Boolean, Schema.Null]),
                      ),
                      geo: Schema.optional(
                        Schema.Union([Schema.Boolean, Schema.Null]),
                      ),
                      lang: Schema.optional(
                        Schema.Union([Schema.Boolean, Schema.Null]),
                      ),
                    }).pipe(
                      Schema.encodeKeys({
                        deviceType: "device_type",
                        geo: "geo",
                        lang: "lang",
                      }),
                    ),
                    Schema.Null,
                  ]),
                ),
              }).pipe(
                Schema.encodeKeys({
                  cookie: "cookie",
                  header: "header",
                  host: "host",
                  queryString: "query_string",
                  user: "user",
                }),
              ),
              Schema.Null,
            ]),
          ),
        }),
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
        Schema.Struct({
          id: Schema.optional(
            Schema.Union([Schema.Literal("cache_on_cookie"), Schema.Null]),
          ),
          value: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
        }),
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
        Schema.Struct({
          id: Schema.optional(
            Schema.Union([Schema.Literal("disable_apps"), Schema.Null]),
          ),
        }),
        Schema.Struct({
          id: Schema.optional(
            Schema.Union([Schema.Literal("disable_performance"), Schema.Null]),
          ),
        }),
        Schema.Struct({
          id: Schema.optional(
            Schema.Union([Schema.Literal("disable_security"), Schema.Null]),
          ),
        }),
        Schema.Struct({
          id: Schema.optional(
            Schema.Union([Schema.Literal("disable_zaraz"), Schema.Null]),
          ),
        }),
        Schema.Struct({
          id: Schema.optional(
            Schema.Union([Schema.Literal("edge_cache_ttl"), Schema.Null]),
          ),
          value: Schema.optional(Schema.Union([Schema.Number, Schema.Null])),
        }),
        Schema.Struct({
          id: Schema.optional(
            Schema.Union([Schema.Literal("email_obfuscation"), Schema.Null]),
          ),
          value: Schema.optional(
            Schema.Union([Schema.Literals(["on", "off"]), Schema.Null]),
          ),
        }),
        Schema.Struct({
          id: Schema.optional(
            Schema.Union([
              Schema.Literal("explicit_cache_control"),
              Schema.Null,
            ]),
          ),
          value: Schema.optional(
            Schema.Union([Schema.Literals(["on", "off"]), Schema.Null]),
          ),
        }),
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
                url: Schema.optional(
                  Schema.Union([Schema.String, Schema.Null]),
                ),
              }).pipe(
                Schema.encodeKeys({ statusCode: "status_code", url: "url" }),
              ),
              Schema.Null,
            ]),
          ),
        }),
        Schema.Struct({
          id: Schema.optional(
            Schema.Union([Schema.Literal("host_header_override"), Schema.Null]),
          ),
          value: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
        }),
        Schema.Struct({
          id: Schema.optional(
            Schema.Union([Schema.Literal("ip_geolocation"), Schema.Null]),
          ),
          value: Schema.optional(
            Schema.Union([Schema.Literals(["on", "off"]), Schema.Null]),
          ),
        }),
        Schema.Struct({
          id: Schema.optional(
            Schema.Union([Schema.Literal("mirage"), Schema.Null]),
          ),
          value: Schema.optional(
            Schema.Union([Schema.Literals(["on", "off"]), Schema.Null]),
          ),
        }),
        Schema.Struct({
          id: Schema.optional(
            Schema.Union([
              Schema.Literal("opportunistic_encryption"),
              Schema.Null,
            ]),
          ),
          value: Schema.optional(
            Schema.Union([Schema.Literals(["on", "off"]), Schema.Null]),
          ),
        }),
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
        Schema.Struct({
          id: Schema.optional(
            Schema.Union([Schema.Literal("resolve_override"), Schema.Null]),
          ),
          value: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
        }),
        Schema.Struct({
          id: Schema.optional(
            Schema.Union([Schema.Literal("respect_strong_etag"), Schema.Null]),
          ),
          value: Schema.optional(
            Schema.Union([Schema.Literals(["on", "off"]), Schema.Null]),
          ),
        }),
        Schema.Struct({
          id: Schema.optional(
            Schema.Union([Schema.Literal("response_buffering"), Schema.Null]),
          ),
          value: Schema.optional(
            Schema.Union([Schema.Literals(["on", "off"]), Schema.Null]),
          ),
        }),
        Schema.Struct({
          id: Schema.optional(
            Schema.Union([Schema.Literal("rocket_loader"), Schema.Null]),
          ),
          value: Schema.optional(
            Schema.Union([Schema.Literals(["on", "off"]), Schema.Null]),
          ),
        }),
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
        Schema.Struct({
          id: Schema.optional(
            Schema.Union([Schema.Literal("ssl"), Schema.Null]),
          ),
          value: Schema.optional(
            Schema.Union([
              Schema.Literals([
                "off",
                "flexible",
                "full",
                "strict",
                "origin_pull",
              ]),
              Schema.Null,
            ]),
          ),
        }),
        Schema.Struct({
          id: Schema.optional(
            Schema.Union([
              Schema.Literal("true_client_ip_header"),
              Schema.Null,
            ]),
          ),
          value: Schema.optional(
            Schema.Union([Schema.Literals(["on", "off"]), Schema.Null]),
          ),
        }),
        Schema.Struct({
          id: Schema.optional(
            Schema.Union([Schema.Literal("waf"), Schema.Null]),
          ),
          value: Schema.optional(
            Schema.Union([Schema.Literals(["on", "off"]), Schema.Null]),
          ),
        }),
      ]),
    ),
    createdOn: Schema.String,
    modifiedOn: Schema.String,
    priority: Schema.Number,
    status: Schema.Literals(["active", "disabled"]),
    targets: Schema.Array(
      Schema.Struct({
        constraint: Schema.optional(
          Schema.Union([
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
            Schema.Null,
          ]),
        ),
        target: Schema.optional(
          Schema.Union([Schema.Literal("url"), Schema.Null]),
        ),
      }),
    ),
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
    | { id?: "always_use_https" }
    | { id?: "automatic_https_rewrites"; value?: "on" | "off" }
    | { id?: "browser_cache_ttl"; value?: number }
    | { id?: "browser_check"; value?: "on" | "off" }
    | { id?: "bypass_cache_on_cookie"; value?: string }
    | { id?: "cache_by_device_type"; value?: "on" | "off" }
    | { id?: "cache_deception_armor"; value?: "on" | "off" }
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
          | "cache_everything";
      }
    | { id?: "cache_on_cookie"; value?: string }
    | { id?: "cache_ttl_by_status"; value?: Record<string, unknown> }
    | { id?: "disable_apps" }
    | { id?: "disable_performance" }
    | { id?: "disable_security" }
    | { id?: "disable_zaraz" }
    | { id?: "edge_cache_ttl"; value?: number }
    | { id?: "email_obfuscation"; value?: "on" | "off" }
    | { id?: "explicit_cache_control"; value?: "on" | "off" }
    | {
        id?: "forwarding_url";
        value?: { statusCode?: "301" | "302"; url?: string };
      }
    | { id?: "host_header_override"; value?: string }
    | { id?: "ip_geolocation"; value?: "on" | "off" }
    | { id?: "mirage"; value?: "on" | "off" }
    | { id?: "opportunistic_encryption"; value?: "on" | "off" }
    | { id?: "origin_error_page_pass_thru"; value?: "on" | "off" }
    | { id?: "polish"; value?: "off" | "lossless" | "lossy" }
    | { id?: "resolve_override"; value?: string }
    | { id?: "respect_strong_etag"; value?: "on" | "off" }
    | { id?: "response_buffering"; value?: "on" | "off" }
    | { id?: "rocket_loader"; value?: "on" | "off" }
    | {
        id?: "security_level";
        value?:
          | "off"
          | "essentially_off"
          | "low"
          | "medium"
          | "high"
          | "under_attack";
      }
    | { id?: "sort_query_string_for_cache"; value?: "on" | "off" }
    | {
        id?: "ssl";
        value?: "off" | "flexible" | "full" | "strict" | "origin_pull";
      }
    | { id?: "true_client_ip_header"; value?: "on" | "off" }
    | { id?: "waf"; value?: "on" | "off" }
  )[];
  /** Body param: The rule targets to evaluate on each request. */
  targets: {
    constraint?: {
      operator: "matches" | "contains" | "equals" | "not_equal" | "not_contain";
      value: string;
    };
    target?: "url";
  }[];
  /** Body param: The priority of the rule, used to define which Page Rule is processed over another. A higher number indicates a higher priority. For example, if you have a catch-all Page Rule (rule A: `/i */
  priority?: number;
  /** Body param: The status of the Page Rule. */
  status?: "active" | "disabled";
}

export const CreatePageRuleRequest = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  zoneId: Schema.String.pipe(T.HttpPath("zone_id")),
  actions: Schema.Array(
    Schema.Union([
      Schema.Struct({
        id: Schema.optional(Schema.Literal("always_use_https")),
      }),
      Schema.Struct({
        id: Schema.optional(Schema.Literal("automatic_https_rewrites")),
        value: Schema.optional(Schema.Literals(["on", "off"])),
      }),
      Schema.Struct({
        id: Schema.optional(Schema.Literal("browser_cache_ttl")),
        value: Schema.optional(Schema.Number),
      }),
      Schema.Struct({
        id: Schema.optional(Schema.Literal("browser_check")),
        value: Schema.optional(Schema.Literals(["on", "off"])),
      }),
      Schema.Struct({
        id: Schema.optional(Schema.Literal("bypass_cache_on_cookie")),
        value: Schema.optional(Schema.String),
      }),
      Schema.Struct({
        id: Schema.optional(Schema.Literal("cache_by_device_type")),
        value: Schema.optional(Schema.Literals(["on", "off"])),
      }),
      Schema.Struct({
        id: Schema.optional(Schema.Literal("cache_deception_armor")),
        value: Schema.optional(Schema.Literals(["on", "off"])),
      }),
      Schema.Struct({
        id: Schema.optional(Schema.Literal("cache_key_fields")),
        value: Schema.optional(
          Schema.Struct({
            cookie: Schema.optional(
              Schema.Struct({
                checkPresence: Schema.optional(Schema.Array(Schema.String)),
                include: Schema.optional(Schema.Array(Schema.String)),
              }).pipe(
                Schema.encodeKeys({
                  checkPresence: "check_presence",
                  include: "include",
                }),
              ),
            ),
            header: Schema.optional(
              Schema.Struct({
                checkPresence: Schema.optional(Schema.Array(Schema.String)),
                exclude: Schema.optional(Schema.Array(Schema.String)),
                include: Schema.optional(Schema.Array(Schema.String)),
              }).pipe(
                Schema.encodeKeys({
                  checkPresence: "check_presence",
                  exclude: "exclude",
                  include: "include",
                }),
              ),
            ),
            host: Schema.optional(
              Schema.Struct({
                resolved: Schema.optional(Schema.Boolean),
              }),
            ),
            queryString: Schema.optional(
              Schema.Struct({
                exclude: Schema.optional(
                  Schema.Union([
                    Schema.Literal("*"),
                    Schema.Array(Schema.String),
                  ]),
                ),
                include: Schema.optional(
                  Schema.Union([
                    Schema.Literal("*"),
                    Schema.Array(Schema.String),
                  ]),
                ),
              }),
            ),
            user: Schema.optional(
              Schema.Struct({
                deviceType: Schema.optional(Schema.Boolean),
                geo: Schema.optional(Schema.Boolean),
                lang: Schema.optional(Schema.Boolean),
              }).pipe(
                Schema.encodeKeys({
                  deviceType: "device_type",
                  geo: "geo",
                  lang: "lang",
                }),
              ),
            ),
          }).pipe(
            Schema.encodeKeys({
              cookie: "cookie",
              header: "header",
              host: "host",
              queryString: "query_string",
              user: "user",
            }),
          ),
        ),
      }),
      Schema.Struct({
        id: Schema.optional(Schema.Literal("cache_level")),
        value: Schema.optional(
          Schema.Literals([
            "bypass",
            "basic",
            "simplified",
            "aggressive",
            "cache_everything",
          ]),
        ),
      }),
      Schema.Struct({
        id: Schema.optional(Schema.Literal("cache_on_cookie")),
        value: Schema.optional(Schema.String),
      }),
      Schema.Struct({
        id: Schema.optional(Schema.Literal("cache_ttl_by_status")),
        value: Schema.optional(Schema.Record(Schema.String, Schema.Unknown)),
      }),
      Schema.Struct({
        id: Schema.optional(Schema.Literal("disable_apps")),
      }),
      Schema.Struct({
        id: Schema.optional(Schema.Literal("disable_performance")),
      }),
      Schema.Struct({
        id: Schema.optional(Schema.Literal("disable_security")),
      }),
      Schema.Struct({
        id: Schema.optional(Schema.Literal("disable_zaraz")),
      }),
      Schema.Struct({
        id: Schema.optional(Schema.Literal("edge_cache_ttl")),
        value: Schema.optional(Schema.Number),
      }),
      Schema.Struct({
        id: Schema.optional(Schema.Literal("email_obfuscation")),
        value: Schema.optional(Schema.Literals(["on", "off"])),
      }),
      Schema.Struct({
        id: Schema.optional(Schema.Literal("explicit_cache_control")),
        value: Schema.optional(Schema.Literals(["on", "off"])),
      }),
      Schema.Struct({
        id: Schema.optional(Schema.Literal("forwarding_url")),
        value: Schema.optional(
          Schema.Struct({
            statusCode: Schema.optional(Schema.Literals(["301", "302"])),
            url: Schema.optional(Schema.String),
          }).pipe(Schema.encodeKeys({ statusCode: "status_code", url: "url" })),
        ),
      }),
      Schema.Struct({
        id: Schema.optional(Schema.Literal("host_header_override")),
        value: Schema.optional(Schema.String),
      }),
      Schema.Struct({
        id: Schema.optional(Schema.Literal("ip_geolocation")),
        value: Schema.optional(Schema.Literals(["on", "off"])),
      }),
      Schema.Struct({
        id: Schema.optional(Schema.Literal("mirage")),
        value: Schema.optional(Schema.Literals(["on", "off"])),
      }),
      Schema.Struct({
        id: Schema.optional(Schema.Literal("opportunistic_encryption")),
        value: Schema.optional(Schema.Literals(["on", "off"])),
      }),
      Schema.Struct({
        id: Schema.optional(Schema.Literal("origin_error_page_pass_thru")),
        value: Schema.optional(Schema.Literals(["on", "off"])),
      }),
      Schema.Struct({
        id: Schema.optional(Schema.Literal("polish")),
        value: Schema.optional(Schema.Literals(["off", "lossless", "lossy"])),
      }),
      Schema.Struct({
        id: Schema.optional(Schema.Literal("resolve_override")),
        value: Schema.optional(Schema.String),
      }),
      Schema.Struct({
        id: Schema.optional(Schema.Literal("respect_strong_etag")),
        value: Schema.optional(Schema.Literals(["on", "off"])),
      }),
      Schema.Struct({
        id: Schema.optional(Schema.Literal("response_buffering")),
        value: Schema.optional(Schema.Literals(["on", "off"])),
      }),
      Schema.Struct({
        id: Schema.optional(Schema.Literal("rocket_loader")),
        value: Schema.optional(Schema.Literals(["on", "off"])),
      }),
      Schema.Struct({
        id: Schema.optional(Schema.Literal("security_level")),
        value: Schema.optional(
          Schema.Literals([
            "off",
            "essentially_off",
            "low",
            "medium",
            "high",
            "under_attack",
          ]),
        ),
      }),
      Schema.Struct({
        id: Schema.optional(Schema.Literal("sort_query_string_for_cache")),
        value: Schema.optional(Schema.Literals(["on", "off"])),
      }),
      Schema.Struct({
        id: Schema.optional(Schema.Literal("ssl")),
        value: Schema.optional(
          Schema.Literals(["off", "flexible", "full", "strict", "origin_pull"]),
        ),
      }),
      Schema.Struct({
        id: Schema.optional(Schema.Literal("true_client_ip_header")),
        value: Schema.optional(Schema.Literals(["on", "off"])),
      }),
      Schema.Struct({
        id: Schema.optional(Schema.Literal("waf")),
        value: Schema.optional(Schema.Literals(["on", "off"])),
      }),
    ]),
  ),
  targets: Schema.Array(
    Schema.Struct({
      constraint: Schema.optional(
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
      ),
      target: Schema.optional(Schema.Literal("url")),
    }),
  ),
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
    | { id?: "always_use_https" | null }
    | { id?: "automatic_https_rewrites" | null; value?: "on" | "off" | null }
    | { id?: "browser_cache_ttl" | null; value?: number | null }
    | { id?: "browser_check" | null; value?: "on" | "off" | null }
    | { id?: "bypass_cache_on_cookie" | null; value?: string | null }
    | { id?: "cache_by_device_type" | null; value?: "on" | "off" | null }
    | { id?: "cache_deception_armor" | null; value?: "on" | "off" | null }
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
    | { id?: "email_obfuscation" | null; value?: "on" | "off" | null }
    | { id?: "explicit_cache_control" | null; value?: "on" | "off" | null }
    | {
        id?: "forwarding_url" | null;
        value?: {
          statusCode?: "301" | "302" | null;
          url?: string | null;
        } | null;
      }
    | { id?: "host_header_override" | null; value?: string | null }
    | { id?: "ip_geolocation" | null; value?: "on" | "off" | null }
    | { id?: "mirage" | null; value?: "on" | "off" | null }
    | { id?: "opportunistic_encryption" | null; value?: "on" | "off" | null }
    | { id?: "origin_error_page_pass_thru" | null; value?: "on" | "off" | null }
    | { id?: "polish" | null; value?: "off" | "lossless" | "lossy" | null }
    | { id?: "resolve_override" | null; value?: string | null }
    | { id?: "respect_strong_etag" | null; value?: "on" | "off" | null }
    | { id?: "response_buffering" | null; value?: "on" | "off" | null }
    | { id?: "rocket_loader" | null; value?: "on" | "off" | null }
    | {
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
    | { id?: "sort_query_string_for_cache" | null; value?: "on" | "off" | null }
    | {
        id?: "ssl" | null;
        value?: "off" | "flexible" | "full" | "strict" | "origin_pull" | null;
      }
    | { id?: "true_client_ip_header" | null; value?: "on" | "off" | null }
    | { id?: "waf" | null; value?: "on" | "off" | null }
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
  targets: {
    constraint?: {
      operator: "matches" | "contains" | "equals" | "not_equal" | "not_contain";
      value: string;
    } | null;
    target?: "url" | null;
  }[];
}

export const CreatePageRuleResponse = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
  {
    id: Schema.String,
    actions: Schema.Array(
      Schema.Union([
        Schema.Struct({
          id: Schema.optional(
            Schema.Union([Schema.Literal("always_use_https"), Schema.Null]),
          ),
        }),
        Schema.Struct({
          id: Schema.optional(
            Schema.Union([
              Schema.Literal("automatic_https_rewrites"),
              Schema.Null,
            ]),
          ),
          value: Schema.optional(
            Schema.Union([Schema.Literals(["on", "off"]), Schema.Null]),
          ),
        }),
        Schema.Struct({
          id: Schema.optional(
            Schema.Union([Schema.Literal("browser_cache_ttl"), Schema.Null]),
          ),
          value: Schema.optional(Schema.Union([Schema.Number, Schema.Null])),
        }),
        Schema.Struct({
          id: Schema.optional(
            Schema.Union([Schema.Literal("browser_check"), Schema.Null]),
          ),
          value: Schema.optional(
            Schema.Union([Schema.Literals(["on", "off"]), Schema.Null]),
          ),
        }),
        Schema.Struct({
          id: Schema.optional(
            Schema.Union([
              Schema.Literal("bypass_cache_on_cookie"),
              Schema.Null,
            ]),
          ),
          value: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
        }),
        Schema.Struct({
          id: Schema.optional(
            Schema.Union([Schema.Literal("cache_by_device_type"), Schema.Null]),
          ),
          value: Schema.optional(
            Schema.Union([Schema.Literals(["on", "off"]), Schema.Null]),
          ),
        }),
        Schema.Struct({
          id: Schema.optional(
            Schema.Union([
              Schema.Literal("cache_deception_armor"),
              Schema.Null,
            ]),
          ),
          value: Schema.optional(
            Schema.Union([Schema.Literals(["on", "off"]), Schema.Null]),
          ),
        }),
        Schema.Struct({
          id: Schema.optional(
            Schema.Union([Schema.Literal("cache_key_fields"), Schema.Null]),
          ),
          value: Schema.optional(
            Schema.Union([
              Schema.Struct({
                cookie: Schema.optional(
                  Schema.Union([
                    Schema.Struct({
                      checkPresence: Schema.optional(
                        Schema.Union([
                          Schema.Array(Schema.String),
                          Schema.Null,
                        ]),
                      ),
                      include: Schema.optional(
                        Schema.Union([
                          Schema.Array(Schema.String),
                          Schema.Null,
                        ]),
                      ),
                    }).pipe(
                      Schema.encodeKeys({
                        checkPresence: "check_presence",
                        include: "include",
                      }),
                    ),
                    Schema.Null,
                  ]),
                ),
                header: Schema.optional(
                  Schema.Union([
                    Schema.Struct({
                      checkPresence: Schema.optional(
                        Schema.Union([
                          Schema.Array(Schema.String),
                          Schema.Null,
                        ]),
                      ),
                      exclude: Schema.optional(
                        Schema.Union([
                          Schema.Array(Schema.String),
                          Schema.Null,
                        ]),
                      ),
                      include: Schema.optional(
                        Schema.Union([
                          Schema.Array(Schema.String),
                          Schema.Null,
                        ]),
                      ),
                    }).pipe(
                      Schema.encodeKeys({
                        checkPresence: "check_presence",
                        exclude: "exclude",
                        include: "include",
                      }),
                    ),
                    Schema.Null,
                  ]),
                ),
                host: Schema.optional(
                  Schema.Union([
                    Schema.Struct({
                      resolved: Schema.optional(
                        Schema.Union([Schema.Boolean, Schema.Null]),
                      ),
                    }),
                    Schema.Null,
                  ]),
                ),
                queryString: Schema.optional(
                  Schema.Union([
                    Schema.Struct({
                      exclude: Schema.optional(
                        Schema.Union([
                          Schema.Union([
                            Schema.Literal("*"),
                            Schema.Array(Schema.String),
                          ]),
                          Schema.Null,
                        ]),
                      ),
                      include: Schema.optional(
                        Schema.Union([
                          Schema.Union([
                            Schema.Literal("*"),
                            Schema.Array(Schema.String),
                          ]),
                          Schema.Null,
                        ]),
                      ),
                    }),
                    Schema.Null,
                  ]),
                ),
                user: Schema.optional(
                  Schema.Union([
                    Schema.Struct({
                      deviceType: Schema.optional(
                        Schema.Union([Schema.Boolean, Schema.Null]),
                      ),
                      geo: Schema.optional(
                        Schema.Union([Schema.Boolean, Schema.Null]),
                      ),
                      lang: Schema.optional(
                        Schema.Union([Schema.Boolean, Schema.Null]),
                      ),
                    }).pipe(
                      Schema.encodeKeys({
                        deviceType: "device_type",
                        geo: "geo",
                        lang: "lang",
                      }),
                    ),
                    Schema.Null,
                  ]),
                ),
              }).pipe(
                Schema.encodeKeys({
                  cookie: "cookie",
                  header: "header",
                  host: "host",
                  queryString: "query_string",
                  user: "user",
                }),
              ),
              Schema.Null,
            ]),
          ),
        }),
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
        Schema.Struct({
          id: Schema.optional(
            Schema.Union([Schema.Literal("cache_on_cookie"), Schema.Null]),
          ),
          value: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
        }),
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
        Schema.Struct({
          id: Schema.optional(
            Schema.Union([Schema.Literal("disable_apps"), Schema.Null]),
          ),
        }),
        Schema.Struct({
          id: Schema.optional(
            Schema.Union([Schema.Literal("disable_performance"), Schema.Null]),
          ),
        }),
        Schema.Struct({
          id: Schema.optional(
            Schema.Union([Schema.Literal("disable_security"), Schema.Null]),
          ),
        }),
        Schema.Struct({
          id: Schema.optional(
            Schema.Union([Schema.Literal("disable_zaraz"), Schema.Null]),
          ),
        }),
        Schema.Struct({
          id: Schema.optional(
            Schema.Union([Schema.Literal("edge_cache_ttl"), Schema.Null]),
          ),
          value: Schema.optional(Schema.Union([Schema.Number, Schema.Null])),
        }),
        Schema.Struct({
          id: Schema.optional(
            Schema.Union([Schema.Literal("email_obfuscation"), Schema.Null]),
          ),
          value: Schema.optional(
            Schema.Union([Schema.Literals(["on", "off"]), Schema.Null]),
          ),
        }),
        Schema.Struct({
          id: Schema.optional(
            Schema.Union([
              Schema.Literal("explicit_cache_control"),
              Schema.Null,
            ]),
          ),
          value: Schema.optional(
            Schema.Union([Schema.Literals(["on", "off"]), Schema.Null]),
          ),
        }),
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
                url: Schema.optional(
                  Schema.Union([Schema.String, Schema.Null]),
                ),
              }).pipe(
                Schema.encodeKeys({ statusCode: "status_code", url: "url" }),
              ),
              Schema.Null,
            ]),
          ),
        }),
        Schema.Struct({
          id: Schema.optional(
            Schema.Union([Schema.Literal("host_header_override"), Schema.Null]),
          ),
          value: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
        }),
        Schema.Struct({
          id: Schema.optional(
            Schema.Union([Schema.Literal("ip_geolocation"), Schema.Null]),
          ),
          value: Schema.optional(
            Schema.Union([Schema.Literals(["on", "off"]), Schema.Null]),
          ),
        }),
        Schema.Struct({
          id: Schema.optional(
            Schema.Union([Schema.Literal("mirage"), Schema.Null]),
          ),
          value: Schema.optional(
            Schema.Union([Schema.Literals(["on", "off"]), Schema.Null]),
          ),
        }),
        Schema.Struct({
          id: Schema.optional(
            Schema.Union([
              Schema.Literal("opportunistic_encryption"),
              Schema.Null,
            ]),
          ),
          value: Schema.optional(
            Schema.Union([Schema.Literals(["on", "off"]), Schema.Null]),
          ),
        }),
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
        Schema.Struct({
          id: Schema.optional(
            Schema.Union([Schema.Literal("resolve_override"), Schema.Null]),
          ),
          value: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
        }),
        Schema.Struct({
          id: Schema.optional(
            Schema.Union([Schema.Literal("respect_strong_etag"), Schema.Null]),
          ),
          value: Schema.optional(
            Schema.Union([Schema.Literals(["on", "off"]), Schema.Null]),
          ),
        }),
        Schema.Struct({
          id: Schema.optional(
            Schema.Union([Schema.Literal("response_buffering"), Schema.Null]),
          ),
          value: Schema.optional(
            Schema.Union([Schema.Literals(["on", "off"]), Schema.Null]),
          ),
        }),
        Schema.Struct({
          id: Schema.optional(
            Schema.Union([Schema.Literal("rocket_loader"), Schema.Null]),
          ),
          value: Schema.optional(
            Schema.Union([Schema.Literals(["on", "off"]), Schema.Null]),
          ),
        }),
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
        Schema.Struct({
          id: Schema.optional(
            Schema.Union([Schema.Literal("ssl"), Schema.Null]),
          ),
          value: Schema.optional(
            Schema.Union([
              Schema.Literals([
                "off",
                "flexible",
                "full",
                "strict",
                "origin_pull",
              ]),
              Schema.Null,
            ]),
          ),
        }),
        Schema.Struct({
          id: Schema.optional(
            Schema.Union([
              Schema.Literal("true_client_ip_header"),
              Schema.Null,
            ]),
          ),
          value: Schema.optional(
            Schema.Union([Schema.Literals(["on", "off"]), Schema.Null]),
          ),
        }),
        Schema.Struct({
          id: Schema.optional(
            Schema.Union([Schema.Literal("waf"), Schema.Null]),
          ),
          value: Schema.optional(
            Schema.Union([Schema.Literals(["on", "off"]), Schema.Null]),
          ),
        }),
      ]),
    ),
    createdOn: Schema.String,
    modifiedOn: Schema.String,
    priority: Schema.Number,
    status: Schema.Literals(["active", "disabled"]),
    targets: Schema.Array(
      Schema.Struct({
        constraint: Schema.optional(
          Schema.Union([
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
            Schema.Null,
          ]),
        ),
        target: Schema.optional(
          Schema.Union([Schema.Literal("url"), Schema.Null]),
        ),
      }),
    ),
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
    | { id?: "always_use_https" }
    | { id?: "automatic_https_rewrites"; value?: "on" | "off" }
    | { id?: "browser_cache_ttl"; value?: number }
    | { id?: "browser_check"; value?: "on" | "off" }
    | { id?: "bypass_cache_on_cookie"; value?: string }
    | { id?: "cache_by_device_type"; value?: "on" | "off" }
    | { id?: "cache_deception_armor"; value?: "on" | "off" }
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
          | "cache_everything";
      }
    | { id?: "cache_on_cookie"; value?: string }
    | { id?: "cache_ttl_by_status"; value?: Record<string, unknown> }
    | { id?: "disable_apps" }
    | { id?: "disable_performance" }
    | { id?: "disable_security" }
    | { id?: "disable_zaraz" }
    | { id?: "edge_cache_ttl"; value?: number }
    | { id?: "email_obfuscation"; value?: "on" | "off" }
    | { id?: "explicit_cache_control"; value?: "on" | "off" }
    | {
        id?: "forwarding_url";
        value?: { statusCode?: "301" | "302"; url?: string };
      }
    | { id?: "host_header_override"; value?: string }
    | { id?: "ip_geolocation"; value?: "on" | "off" }
    | { id?: "mirage"; value?: "on" | "off" }
    | { id?: "opportunistic_encryption"; value?: "on" | "off" }
    | { id?: "origin_error_page_pass_thru"; value?: "on" | "off" }
    | { id?: "polish"; value?: "off" | "lossless" | "lossy" }
    | { id?: "resolve_override"; value?: string }
    | { id?: "respect_strong_etag"; value?: "on" | "off" }
    | { id?: "response_buffering"; value?: "on" | "off" }
    | { id?: "rocket_loader"; value?: "on" | "off" }
    | {
        id?: "security_level";
        value?:
          | "off"
          | "essentially_off"
          | "low"
          | "medium"
          | "high"
          | "under_attack";
      }
    | { id?: "sort_query_string_for_cache"; value?: "on" | "off" }
    | {
        id?: "ssl";
        value?: "off" | "flexible" | "full" | "strict" | "origin_pull";
      }
    | { id?: "true_client_ip_header"; value?: "on" | "off" }
    | { id?: "waf"; value?: "on" | "off" }
  )[];
  /** Body param: The rule targets to evaluate on each request. */
  targets: {
    constraint?: {
      operator: "matches" | "contains" | "equals" | "not_equal" | "not_contain";
      value: string;
    };
    target?: "url";
  }[];
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
      Schema.Struct({
        id: Schema.optional(Schema.Literal("always_use_https")),
      }),
      Schema.Struct({
        id: Schema.optional(Schema.Literal("automatic_https_rewrites")),
        value: Schema.optional(Schema.Literals(["on", "off"])),
      }),
      Schema.Struct({
        id: Schema.optional(Schema.Literal("browser_cache_ttl")),
        value: Schema.optional(Schema.Number),
      }),
      Schema.Struct({
        id: Schema.optional(Schema.Literal("browser_check")),
        value: Schema.optional(Schema.Literals(["on", "off"])),
      }),
      Schema.Struct({
        id: Schema.optional(Schema.Literal("bypass_cache_on_cookie")),
        value: Schema.optional(Schema.String),
      }),
      Schema.Struct({
        id: Schema.optional(Schema.Literal("cache_by_device_type")),
        value: Schema.optional(Schema.Literals(["on", "off"])),
      }),
      Schema.Struct({
        id: Schema.optional(Schema.Literal("cache_deception_armor")),
        value: Schema.optional(Schema.Literals(["on", "off"])),
      }),
      Schema.Struct({
        id: Schema.optional(Schema.Literal("cache_key_fields")),
        value: Schema.optional(
          Schema.Struct({
            cookie: Schema.optional(
              Schema.Struct({
                checkPresence: Schema.optional(Schema.Array(Schema.String)),
                include: Schema.optional(Schema.Array(Schema.String)),
              }).pipe(
                Schema.encodeKeys({
                  checkPresence: "check_presence",
                  include: "include",
                }),
              ),
            ),
            header: Schema.optional(
              Schema.Struct({
                checkPresence: Schema.optional(Schema.Array(Schema.String)),
                exclude: Schema.optional(Schema.Array(Schema.String)),
                include: Schema.optional(Schema.Array(Schema.String)),
              }).pipe(
                Schema.encodeKeys({
                  checkPresence: "check_presence",
                  exclude: "exclude",
                  include: "include",
                }),
              ),
            ),
            host: Schema.optional(
              Schema.Struct({
                resolved: Schema.optional(Schema.Boolean),
              }),
            ),
            queryString: Schema.optional(
              Schema.Struct({
                exclude: Schema.optional(
                  Schema.Union([
                    Schema.Literal("*"),
                    Schema.Array(Schema.String),
                  ]),
                ),
                include: Schema.optional(
                  Schema.Union([
                    Schema.Literal("*"),
                    Schema.Array(Schema.String),
                  ]),
                ),
              }),
            ),
            user: Schema.optional(
              Schema.Struct({
                deviceType: Schema.optional(Schema.Boolean),
                geo: Schema.optional(Schema.Boolean),
                lang: Schema.optional(Schema.Boolean),
              }).pipe(
                Schema.encodeKeys({
                  deviceType: "device_type",
                  geo: "geo",
                  lang: "lang",
                }),
              ),
            ),
          }).pipe(
            Schema.encodeKeys({
              cookie: "cookie",
              header: "header",
              host: "host",
              queryString: "query_string",
              user: "user",
            }),
          ),
        ),
      }),
      Schema.Struct({
        id: Schema.optional(Schema.Literal("cache_level")),
        value: Schema.optional(
          Schema.Literals([
            "bypass",
            "basic",
            "simplified",
            "aggressive",
            "cache_everything",
          ]),
        ),
      }),
      Schema.Struct({
        id: Schema.optional(Schema.Literal("cache_on_cookie")),
        value: Schema.optional(Schema.String),
      }),
      Schema.Struct({
        id: Schema.optional(Schema.Literal("cache_ttl_by_status")),
        value: Schema.optional(Schema.Record(Schema.String, Schema.Unknown)),
      }),
      Schema.Struct({
        id: Schema.optional(Schema.Literal("disable_apps")),
      }),
      Schema.Struct({
        id: Schema.optional(Schema.Literal("disable_performance")),
      }),
      Schema.Struct({
        id: Schema.optional(Schema.Literal("disable_security")),
      }),
      Schema.Struct({
        id: Schema.optional(Schema.Literal("disable_zaraz")),
      }),
      Schema.Struct({
        id: Schema.optional(Schema.Literal("edge_cache_ttl")),
        value: Schema.optional(Schema.Number),
      }),
      Schema.Struct({
        id: Schema.optional(Schema.Literal("email_obfuscation")),
        value: Schema.optional(Schema.Literals(["on", "off"])),
      }),
      Schema.Struct({
        id: Schema.optional(Schema.Literal("explicit_cache_control")),
        value: Schema.optional(Schema.Literals(["on", "off"])),
      }),
      Schema.Struct({
        id: Schema.optional(Schema.Literal("forwarding_url")),
        value: Schema.optional(
          Schema.Struct({
            statusCode: Schema.optional(Schema.Literals(["301", "302"])),
            url: Schema.optional(Schema.String),
          }).pipe(Schema.encodeKeys({ statusCode: "status_code", url: "url" })),
        ),
      }),
      Schema.Struct({
        id: Schema.optional(Schema.Literal("host_header_override")),
        value: Schema.optional(Schema.String),
      }),
      Schema.Struct({
        id: Schema.optional(Schema.Literal("ip_geolocation")),
        value: Schema.optional(Schema.Literals(["on", "off"])),
      }),
      Schema.Struct({
        id: Schema.optional(Schema.Literal("mirage")),
        value: Schema.optional(Schema.Literals(["on", "off"])),
      }),
      Schema.Struct({
        id: Schema.optional(Schema.Literal("opportunistic_encryption")),
        value: Schema.optional(Schema.Literals(["on", "off"])),
      }),
      Schema.Struct({
        id: Schema.optional(Schema.Literal("origin_error_page_pass_thru")),
        value: Schema.optional(Schema.Literals(["on", "off"])),
      }),
      Schema.Struct({
        id: Schema.optional(Schema.Literal("polish")),
        value: Schema.optional(Schema.Literals(["off", "lossless", "lossy"])),
      }),
      Schema.Struct({
        id: Schema.optional(Schema.Literal("resolve_override")),
        value: Schema.optional(Schema.String),
      }),
      Schema.Struct({
        id: Schema.optional(Schema.Literal("respect_strong_etag")),
        value: Schema.optional(Schema.Literals(["on", "off"])),
      }),
      Schema.Struct({
        id: Schema.optional(Schema.Literal("response_buffering")),
        value: Schema.optional(Schema.Literals(["on", "off"])),
      }),
      Schema.Struct({
        id: Schema.optional(Schema.Literal("rocket_loader")),
        value: Schema.optional(Schema.Literals(["on", "off"])),
      }),
      Schema.Struct({
        id: Schema.optional(Schema.Literal("security_level")),
        value: Schema.optional(
          Schema.Literals([
            "off",
            "essentially_off",
            "low",
            "medium",
            "high",
            "under_attack",
          ]),
        ),
      }),
      Schema.Struct({
        id: Schema.optional(Schema.Literal("sort_query_string_for_cache")),
        value: Schema.optional(Schema.Literals(["on", "off"])),
      }),
      Schema.Struct({
        id: Schema.optional(Schema.Literal("ssl")),
        value: Schema.optional(
          Schema.Literals(["off", "flexible", "full", "strict", "origin_pull"]),
        ),
      }),
      Schema.Struct({
        id: Schema.optional(Schema.Literal("true_client_ip_header")),
        value: Schema.optional(Schema.Literals(["on", "off"])),
      }),
      Schema.Struct({
        id: Schema.optional(Schema.Literal("waf")),
        value: Schema.optional(Schema.Literals(["on", "off"])),
      }),
    ]),
  ),
  targets: Schema.Array(
    Schema.Struct({
      constraint: Schema.optional(
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
      ),
      target: Schema.optional(Schema.Literal("url")),
    }),
  ),
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
    | { id?: "always_use_https" | null }
    | { id?: "automatic_https_rewrites" | null; value?: "on" | "off" | null }
    | { id?: "browser_cache_ttl" | null; value?: number | null }
    | { id?: "browser_check" | null; value?: "on" | "off" | null }
    | { id?: "bypass_cache_on_cookie" | null; value?: string | null }
    | { id?: "cache_by_device_type" | null; value?: "on" | "off" | null }
    | { id?: "cache_deception_armor" | null; value?: "on" | "off" | null }
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
    | { id?: "email_obfuscation" | null; value?: "on" | "off" | null }
    | { id?: "explicit_cache_control" | null; value?: "on" | "off" | null }
    | {
        id?: "forwarding_url" | null;
        value?: {
          statusCode?: "301" | "302" | null;
          url?: string | null;
        } | null;
      }
    | { id?: "host_header_override" | null; value?: string | null }
    | { id?: "ip_geolocation" | null; value?: "on" | "off" | null }
    | { id?: "mirage" | null; value?: "on" | "off" | null }
    | { id?: "opportunistic_encryption" | null; value?: "on" | "off" | null }
    | { id?: "origin_error_page_pass_thru" | null; value?: "on" | "off" | null }
    | { id?: "polish" | null; value?: "off" | "lossless" | "lossy" | null }
    | { id?: "resolve_override" | null; value?: string | null }
    | { id?: "respect_strong_etag" | null; value?: "on" | "off" | null }
    | { id?: "response_buffering" | null; value?: "on" | "off" | null }
    | { id?: "rocket_loader" | null; value?: "on" | "off" | null }
    | {
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
    | { id?: "sort_query_string_for_cache" | null; value?: "on" | "off" | null }
    | {
        id?: "ssl" | null;
        value?: "off" | "flexible" | "full" | "strict" | "origin_pull" | null;
      }
    | { id?: "true_client_ip_header" | null; value?: "on" | "off" | null }
    | { id?: "waf" | null; value?: "on" | "off" | null }
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
  targets: {
    constraint?: {
      operator: "matches" | "contains" | "equals" | "not_equal" | "not_contain";
      value: string;
    } | null;
    target?: "url" | null;
  }[];
}

export const UpdatePageRuleResponse = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
  {
    id: Schema.String,
    actions: Schema.Array(
      Schema.Union([
        Schema.Struct({
          id: Schema.optional(
            Schema.Union([Schema.Literal("always_use_https"), Schema.Null]),
          ),
        }),
        Schema.Struct({
          id: Schema.optional(
            Schema.Union([
              Schema.Literal("automatic_https_rewrites"),
              Schema.Null,
            ]),
          ),
          value: Schema.optional(
            Schema.Union([Schema.Literals(["on", "off"]), Schema.Null]),
          ),
        }),
        Schema.Struct({
          id: Schema.optional(
            Schema.Union([Schema.Literal("browser_cache_ttl"), Schema.Null]),
          ),
          value: Schema.optional(Schema.Union([Schema.Number, Schema.Null])),
        }),
        Schema.Struct({
          id: Schema.optional(
            Schema.Union([Schema.Literal("browser_check"), Schema.Null]),
          ),
          value: Schema.optional(
            Schema.Union([Schema.Literals(["on", "off"]), Schema.Null]),
          ),
        }),
        Schema.Struct({
          id: Schema.optional(
            Schema.Union([
              Schema.Literal("bypass_cache_on_cookie"),
              Schema.Null,
            ]),
          ),
          value: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
        }),
        Schema.Struct({
          id: Schema.optional(
            Schema.Union([Schema.Literal("cache_by_device_type"), Schema.Null]),
          ),
          value: Schema.optional(
            Schema.Union([Schema.Literals(["on", "off"]), Schema.Null]),
          ),
        }),
        Schema.Struct({
          id: Schema.optional(
            Schema.Union([
              Schema.Literal("cache_deception_armor"),
              Schema.Null,
            ]),
          ),
          value: Schema.optional(
            Schema.Union([Schema.Literals(["on", "off"]), Schema.Null]),
          ),
        }),
        Schema.Struct({
          id: Schema.optional(
            Schema.Union([Schema.Literal("cache_key_fields"), Schema.Null]),
          ),
          value: Schema.optional(
            Schema.Union([
              Schema.Struct({
                cookie: Schema.optional(
                  Schema.Union([
                    Schema.Struct({
                      checkPresence: Schema.optional(
                        Schema.Union([
                          Schema.Array(Schema.String),
                          Schema.Null,
                        ]),
                      ),
                      include: Schema.optional(
                        Schema.Union([
                          Schema.Array(Schema.String),
                          Schema.Null,
                        ]),
                      ),
                    }).pipe(
                      Schema.encodeKeys({
                        checkPresence: "check_presence",
                        include: "include",
                      }),
                    ),
                    Schema.Null,
                  ]),
                ),
                header: Schema.optional(
                  Schema.Union([
                    Schema.Struct({
                      checkPresence: Schema.optional(
                        Schema.Union([
                          Schema.Array(Schema.String),
                          Schema.Null,
                        ]),
                      ),
                      exclude: Schema.optional(
                        Schema.Union([
                          Schema.Array(Schema.String),
                          Schema.Null,
                        ]),
                      ),
                      include: Schema.optional(
                        Schema.Union([
                          Schema.Array(Schema.String),
                          Schema.Null,
                        ]),
                      ),
                    }).pipe(
                      Schema.encodeKeys({
                        checkPresence: "check_presence",
                        exclude: "exclude",
                        include: "include",
                      }),
                    ),
                    Schema.Null,
                  ]),
                ),
                host: Schema.optional(
                  Schema.Union([
                    Schema.Struct({
                      resolved: Schema.optional(
                        Schema.Union([Schema.Boolean, Schema.Null]),
                      ),
                    }),
                    Schema.Null,
                  ]),
                ),
                queryString: Schema.optional(
                  Schema.Union([
                    Schema.Struct({
                      exclude: Schema.optional(
                        Schema.Union([
                          Schema.Union([
                            Schema.Literal("*"),
                            Schema.Array(Schema.String),
                          ]),
                          Schema.Null,
                        ]),
                      ),
                      include: Schema.optional(
                        Schema.Union([
                          Schema.Union([
                            Schema.Literal("*"),
                            Schema.Array(Schema.String),
                          ]),
                          Schema.Null,
                        ]),
                      ),
                    }),
                    Schema.Null,
                  ]),
                ),
                user: Schema.optional(
                  Schema.Union([
                    Schema.Struct({
                      deviceType: Schema.optional(
                        Schema.Union([Schema.Boolean, Schema.Null]),
                      ),
                      geo: Schema.optional(
                        Schema.Union([Schema.Boolean, Schema.Null]),
                      ),
                      lang: Schema.optional(
                        Schema.Union([Schema.Boolean, Schema.Null]),
                      ),
                    }).pipe(
                      Schema.encodeKeys({
                        deviceType: "device_type",
                        geo: "geo",
                        lang: "lang",
                      }),
                    ),
                    Schema.Null,
                  ]),
                ),
              }).pipe(
                Schema.encodeKeys({
                  cookie: "cookie",
                  header: "header",
                  host: "host",
                  queryString: "query_string",
                  user: "user",
                }),
              ),
              Schema.Null,
            ]),
          ),
        }),
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
        Schema.Struct({
          id: Schema.optional(
            Schema.Union([Schema.Literal("cache_on_cookie"), Schema.Null]),
          ),
          value: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
        }),
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
        Schema.Struct({
          id: Schema.optional(
            Schema.Union([Schema.Literal("disable_apps"), Schema.Null]),
          ),
        }),
        Schema.Struct({
          id: Schema.optional(
            Schema.Union([Schema.Literal("disable_performance"), Schema.Null]),
          ),
        }),
        Schema.Struct({
          id: Schema.optional(
            Schema.Union([Schema.Literal("disable_security"), Schema.Null]),
          ),
        }),
        Schema.Struct({
          id: Schema.optional(
            Schema.Union([Schema.Literal("disable_zaraz"), Schema.Null]),
          ),
        }),
        Schema.Struct({
          id: Schema.optional(
            Schema.Union([Schema.Literal("edge_cache_ttl"), Schema.Null]),
          ),
          value: Schema.optional(Schema.Union([Schema.Number, Schema.Null])),
        }),
        Schema.Struct({
          id: Schema.optional(
            Schema.Union([Schema.Literal("email_obfuscation"), Schema.Null]),
          ),
          value: Schema.optional(
            Schema.Union([Schema.Literals(["on", "off"]), Schema.Null]),
          ),
        }),
        Schema.Struct({
          id: Schema.optional(
            Schema.Union([
              Schema.Literal("explicit_cache_control"),
              Schema.Null,
            ]),
          ),
          value: Schema.optional(
            Schema.Union([Schema.Literals(["on", "off"]), Schema.Null]),
          ),
        }),
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
                url: Schema.optional(
                  Schema.Union([Schema.String, Schema.Null]),
                ),
              }).pipe(
                Schema.encodeKeys({ statusCode: "status_code", url: "url" }),
              ),
              Schema.Null,
            ]),
          ),
        }),
        Schema.Struct({
          id: Schema.optional(
            Schema.Union([Schema.Literal("host_header_override"), Schema.Null]),
          ),
          value: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
        }),
        Schema.Struct({
          id: Schema.optional(
            Schema.Union([Schema.Literal("ip_geolocation"), Schema.Null]),
          ),
          value: Schema.optional(
            Schema.Union([Schema.Literals(["on", "off"]), Schema.Null]),
          ),
        }),
        Schema.Struct({
          id: Schema.optional(
            Schema.Union([Schema.Literal("mirage"), Schema.Null]),
          ),
          value: Schema.optional(
            Schema.Union([Schema.Literals(["on", "off"]), Schema.Null]),
          ),
        }),
        Schema.Struct({
          id: Schema.optional(
            Schema.Union([
              Schema.Literal("opportunistic_encryption"),
              Schema.Null,
            ]),
          ),
          value: Schema.optional(
            Schema.Union([Schema.Literals(["on", "off"]), Schema.Null]),
          ),
        }),
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
        Schema.Struct({
          id: Schema.optional(
            Schema.Union([Schema.Literal("resolve_override"), Schema.Null]),
          ),
          value: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
        }),
        Schema.Struct({
          id: Schema.optional(
            Schema.Union([Schema.Literal("respect_strong_etag"), Schema.Null]),
          ),
          value: Schema.optional(
            Schema.Union([Schema.Literals(["on", "off"]), Schema.Null]),
          ),
        }),
        Schema.Struct({
          id: Schema.optional(
            Schema.Union([Schema.Literal("response_buffering"), Schema.Null]),
          ),
          value: Schema.optional(
            Schema.Union([Schema.Literals(["on", "off"]), Schema.Null]),
          ),
        }),
        Schema.Struct({
          id: Schema.optional(
            Schema.Union([Schema.Literal("rocket_loader"), Schema.Null]),
          ),
          value: Schema.optional(
            Schema.Union([Schema.Literals(["on", "off"]), Schema.Null]),
          ),
        }),
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
        Schema.Struct({
          id: Schema.optional(
            Schema.Union([Schema.Literal("ssl"), Schema.Null]),
          ),
          value: Schema.optional(
            Schema.Union([
              Schema.Literals([
                "off",
                "flexible",
                "full",
                "strict",
                "origin_pull",
              ]),
              Schema.Null,
            ]),
          ),
        }),
        Schema.Struct({
          id: Schema.optional(
            Schema.Union([
              Schema.Literal("true_client_ip_header"),
              Schema.Null,
            ]),
          ),
          value: Schema.optional(
            Schema.Union([Schema.Literals(["on", "off"]), Schema.Null]),
          ),
        }),
        Schema.Struct({
          id: Schema.optional(
            Schema.Union([Schema.Literal("waf"), Schema.Null]),
          ),
          value: Schema.optional(
            Schema.Union([Schema.Literals(["on", "off"]), Schema.Null]),
          ),
        }),
      ]),
    ),
    createdOn: Schema.String,
    modifiedOn: Schema.String,
    priority: Schema.Number,
    status: Schema.Literals(["active", "disabled"]),
    targets: Schema.Array(
      Schema.Struct({
        constraint: Schema.optional(
          Schema.Union([
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
            Schema.Null,
          ]),
        ),
        target: Schema.optional(
          Schema.Union([Schema.Literal("url"), Schema.Null]),
        ),
      }),
    ),
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
    | { id?: "always_use_https" }
    | { id?: "automatic_https_rewrites"; value?: "on" | "off" }
    | { id?: "browser_cache_ttl"; value?: number }
    | { id?: "browser_check"; value?: "on" | "off" }
    | { id?: "bypass_cache_on_cookie"; value?: string }
    | { id?: "cache_by_device_type"; value?: "on" | "off" }
    | { id?: "cache_deception_armor"; value?: "on" | "off" }
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
          | "cache_everything";
      }
    | { id?: "cache_on_cookie"; value?: string }
    | { id?: "cache_ttl_by_status"; value?: Record<string, unknown> }
    | { id?: "disable_apps" }
    | { id?: "disable_performance" }
    | { id?: "disable_security" }
    | { id?: "disable_zaraz" }
    | { id?: "edge_cache_ttl"; value?: number }
    | { id?: "email_obfuscation"; value?: "on" | "off" }
    | { id?: "explicit_cache_control"; value?: "on" | "off" }
    | {
        id?: "forwarding_url";
        value?: { statusCode?: "301" | "302"; url?: string };
      }
    | { id?: "host_header_override"; value?: string }
    | { id?: "ip_geolocation"; value?: "on" | "off" }
    | { id?: "mirage"; value?: "on" | "off" }
    | { id?: "opportunistic_encryption"; value?: "on" | "off" }
    | { id?: "origin_error_page_pass_thru"; value?: "on" | "off" }
    | { id?: "polish"; value?: "off" | "lossless" | "lossy" }
    | { id?: "resolve_override"; value?: string }
    | { id?: "respect_strong_etag"; value?: "on" | "off" }
    | { id?: "response_buffering"; value?: "on" | "off" }
    | { id?: "rocket_loader"; value?: "on" | "off" }
    | {
        id?: "security_level";
        value?:
          | "off"
          | "essentially_off"
          | "low"
          | "medium"
          | "high"
          | "under_attack";
      }
    | { id?: "sort_query_string_for_cache"; value?: "on" | "off" }
    | {
        id?: "ssl";
        value?: "off" | "flexible" | "full" | "strict" | "origin_pull";
      }
    | { id?: "true_client_ip_header"; value?: "on" | "off" }
    | { id?: "waf"; value?: "on" | "off" }
  )[];
  /** Body param: The priority of the rule, used to define which Page Rule is processed over another. A higher number indicates a higher priority. For example, if you have a catch-all Page Rule (rule A: `/i */
  priority?: number;
  /** Body param: The status of the Page Rule. */
  status?: "active" | "disabled";
  /** Body param: The rule targets to evaluate on each request. */
  targets?: {
    constraint?: {
      operator: "matches" | "contains" | "equals" | "not_equal" | "not_contain";
      value: string;
    };
    target?: "url";
  }[];
}

export const PatchPageRuleRequest = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  pageruleId: Schema.String.pipe(T.HttpPath("pageruleId")),
  zoneId: Schema.String.pipe(T.HttpPath("zone_id")),
  actions: Schema.optional(
    Schema.Array(
      Schema.Union([
        Schema.Struct({
          id: Schema.optional(Schema.Literal("always_use_https")),
        }),
        Schema.Struct({
          id: Schema.optional(Schema.Literal("automatic_https_rewrites")),
          value: Schema.optional(Schema.Literals(["on", "off"])),
        }),
        Schema.Struct({
          id: Schema.optional(Schema.Literal("browser_cache_ttl")),
          value: Schema.optional(Schema.Number),
        }),
        Schema.Struct({
          id: Schema.optional(Schema.Literal("browser_check")),
          value: Schema.optional(Schema.Literals(["on", "off"])),
        }),
        Schema.Struct({
          id: Schema.optional(Schema.Literal("bypass_cache_on_cookie")),
          value: Schema.optional(Schema.String),
        }),
        Schema.Struct({
          id: Schema.optional(Schema.Literal("cache_by_device_type")),
          value: Schema.optional(Schema.Literals(["on", "off"])),
        }),
        Schema.Struct({
          id: Schema.optional(Schema.Literal("cache_deception_armor")),
          value: Schema.optional(Schema.Literals(["on", "off"])),
        }),
        Schema.Struct({
          id: Schema.optional(Schema.Literal("cache_key_fields")),
          value: Schema.optional(
            Schema.Struct({
              cookie: Schema.optional(
                Schema.Struct({
                  checkPresence: Schema.optional(Schema.Array(Schema.String)),
                  include: Schema.optional(Schema.Array(Schema.String)),
                }).pipe(
                  Schema.encodeKeys({
                    checkPresence: "check_presence",
                    include: "include",
                  }),
                ),
              ),
              header: Schema.optional(
                Schema.Struct({
                  checkPresence: Schema.optional(Schema.Array(Schema.String)),
                  exclude: Schema.optional(Schema.Array(Schema.String)),
                  include: Schema.optional(Schema.Array(Schema.String)),
                }).pipe(
                  Schema.encodeKeys({
                    checkPresence: "check_presence",
                    exclude: "exclude",
                    include: "include",
                  }),
                ),
              ),
              host: Schema.optional(
                Schema.Struct({
                  resolved: Schema.optional(Schema.Boolean),
                }),
              ),
              queryString: Schema.optional(
                Schema.Struct({
                  exclude: Schema.optional(
                    Schema.Union([
                      Schema.Literal("*"),
                      Schema.Array(Schema.String),
                    ]),
                  ),
                  include: Schema.optional(
                    Schema.Union([
                      Schema.Literal("*"),
                      Schema.Array(Schema.String),
                    ]),
                  ),
                }),
              ),
              user: Schema.optional(
                Schema.Struct({
                  deviceType: Schema.optional(Schema.Boolean),
                  geo: Schema.optional(Schema.Boolean),
                  lang: Schema.optional(Schema.Boolean),
                }).pipe(
                  Schema.encodeKeys({
                    deviceType: "device_type",
                    geo: "geo",
                    lang: "lang",
                  }),
                ),
              ),
            }).pipe(
              Schema.encodeKeys({
                cookie: "cookie",
                header: "header",
                host: "host",
                queryString: "query_string",
                user: "user",
              }),
            ),
          ),
        }),
        Schema.Struct({
          id: Schema.optional(Schema.Literal("cache_level")),
          value: Schema.optional(
            Schema.Literals([
              "bypass",
              "basic",
              "simplified",
              "aggressive",
              "cache_everything",
            ]),
          ),
        }),
        Schema.Struct({
          id: Schema.optional(Schema.Literal("cache_on_cookie")),
          value: Schema.optional(Schema.String),
        }),
        Schema.Struct({
          id: Schema.optional(Schema.Literal("cache_ttl_by_status")),
          value: Schema.optional(Schema.Record(Schema.String, Schema.Unknown)),
        }),
        Schema.Struct({
          id: Schema.optional(Schema.Literal("disable_apps")),
        }),
        Schema.Struct({
          id: Schema.optional(Schema.Literal("disable_performance")),
        }),
        Schema.Struct({
          id: Schema.optional(Schema.Literal("disable_security")),
        }),
        Schema.Struct({
          id: Schema.optional(Schema.Literal("disable_zaraz")),
        }),
        Schema.Struct({
          id: Schema.optional(Schema.Literal("edge_cache_ttl")),
          value: Schema.optional(Schema.Number),
        }),
        Schema.Struct({
          id: Schema.optional(Schema.Literal("email_obfuscation")),
          value: Schema.optional(Schema.Literals(["on", "off"])),
        }),
        Schema.Struct({
          id: Schema.optional(Schema.Literal("explicit_cache_control")),
          value: Schema.optional(Schema.Literals(["on", "off"])),
        }),
        Schema.Struct({
          id: Schema.optional(Schema.Literal("forwarding_url")),
          value: Schema.optional(
            Schema.Struct({
              statusCode: Schema.optional(Schema.Literals(["301", "302"])),
              url: Schema.optional(Schema.String),
            }).pipe(
              Schema.encodeKeys({ statusCode: "status_code", url: "url" }),
            ),
          ),
        }),
        Schema.Struct({
          id: Schema.optional(Schema.Literal("host_header_override")),
          value: Schema.optional(Schema.String),
        }),
        Schema.Struct({
          id: Schema.optional(Schema.Literal("ip_geolocation")),
          value: Schema.optional(Schema.Literals(["on", "off"])),
        }),
        Schema.Struct({
          id: Schema.optional(Schema.Literal("mirage")),
          value: Schema.optional(Schema.Literals(["on", "off"])),
        }),
        Schema.Struct({
          id: Schema.optional(Schema.Literal("opportunistic_encryption")),
          value: Schema.optional(Schema.Literals(["on", "off"])),
        }),
        Schema.Struct({
          id: Schema.optional(Schema.Literal("origin_error_page_pass_thru")),
          value: Schema.optional(Schema.Literals(["on", "off"])),
        }),
        Schema.Struct({
          id: Schema.optional(Schema.Literal("polish")),
          value: Schema.optional(Schema.Literals(["off", "lossless", "lossy"])),
        }),
        Schema.Struct({
          id: Schema.optional(Schema.Literal("resolve_override")),
          value: Schema.optional(Schema.String),
        }),
        Schema.Struct({
          id: Schema.optional(Schema.Literal("respect_strong_etag")),
          value: Schema.optional(Schema.Literals(["on", "off"])),
        }),
        Schema.Struct({
          id: Schema.optional(Schema.Literal("response_buffering")),
          value: Schema.optional(Schema.Literals(["on", "off"])),
        }),
        Schema.Struct({
          id: Schema.optional(Schema.Literal("rocket_loader")),
          value: Schema.optional(Schema.Literals(["on", "off"])),
        }),
        Schema.Struct({
          id: Schema.optional(Schema.Literal("security_level")),
          value: Schema.optional(
            Schema.Literals([
              "off",
              "essentially_off",
              "low",
              "medium",
              "high",
              "under_attack",
            ]),
          ),
        }),
        Schema.Struct({
          id: Schema.optional(Schema.Literal("sort_query_string_for_cache")),
          value: Schema.optional(Schema.Literals(["on", "off"])),
        }),
        Schema.Struct({
          id: Schema.optional(Schema.Literal("ssl")),
          value: Schema.optional(
            Schema.Literals([
              "off",
              "flexible",
              "full",
              "strict",
              "origin_pull",
            ]),
          ),
        }),
        Schema.Struct({
          id: Schema.optional(Schema.Literal("true_client_ip_header")),
          value: Schema.optional(Schema.Literals(["on", "off"])),
        }),
        Schema.Struct({
          id: Schema.optional(Schema.Literal("waf")),
          value: Schema.optional(Schema.Literals(["on", "off"])),
        }),
      ]),
    ),
  ),
  priority: Schema.optional(Schema.Number),
  status: Schema.optional(Schema.Literals(["active", "disabled"])),
  targets: Schema.optional(
    Schema.Array(
      Schema.Struct({
        constraint: Schema.optional(
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
        ),
        target: Schema.optional(Schema.Literal("url")),
      }),
    ),
  ),
}).pipe(
  T.Http({ method: "PATCH", path: "/zones/{zone_id}/pagerules/{pageruleId}" }),
) as unknown as Schema.Schema<PatchPageRuleRequest>;

export interface PatchPageRuleResponse {
  /** Identifier. */
  id: string;
  /** The set of actions to perform if the targets of this rule match the request. Actions can redirect to another URL or override settings, but not both. */
  actions: (
    | { id?: "always_use_https" | null }
    | { id?: "automatic_https_rewrites" | null; value?: "on" | "off" | null }
    | { id?: "browser_cache_ttl" | null; value?: number | null }
    | { id?: "browser_check" | null; value?: "on" | "off" | null }
    | { id?: "bypass_cache_on_cookie" | null; value?: string | null }
    | { id?: "cache_by_device_type" | null; value?: "on" | "off" | null }
    | { id?: "cache_deception_armor" | null; value?: "on" | "off" | null }
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
    | { id?: "email_obfuscation" | null; value?: "on" | "off" | null }
    | { id?: "explicit_cache_control" | null; value?: "on" | "off" | null }
    | {
        id?: "forwarding_url" | null;
        value?: {
          statusCode?: "301" | "302" | null;
          url?: string | null;
        } | null;
      }
    | { id?: "host_header_override" | null; value?: string | null }
    | { id?: "ip_geolocation" | null; value?: "on" | "off" | null }
    | { id?: "mirage" | null; value?: "on" | "off" | null }
    | { id?: "opportunistic_encryption" | null; value?: "on" | "off" | null }
    | { id?: "origin_error_page_pass_thru" | null; value?: "on" | "off" | null }
    | { id?: "polish" | null; value?: "off" | "lossless" | "lossy" | null }
    | { id?: "resolve_override" | null; value?: string | null }
    | { id?: "respect_strong_etag" | null; value?: "on" | "off" | null }
    | { id?: "response_buffering" | null; value?: "on" | "off" | null }
    | { id?: "rocket_loader" | null; value?: "on" | "off" | null }
    | {
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
    | { id?: "sort_query_string_for_cache" | null; value?: "on" | "off" | null }
    | {
        id?: "ssl" | null;
        value?: "off" | "flexible" | "full" | "strict" | "origin_pull" | null;
      }
    | { id?: "true_client_ip_header" | null; value?: "on" | "off" | null }
    | { id?: "waf" | null; value?: "on" | "off" | null }
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
  targets: {
    constraint?: {
      operator: "matches" | "contains" | "equals" | "not_equal" | "not_contain";
      value: string;
    } | null;
    target?: "url" | null;
  }[];
}

export const PatchPageRuleResponse = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  id: Schema.String,
  actions: Schema.Array(
    Schema.Union([
      Schema.Struct({
        id: Schema.optional(
          Schema.Union([Schema.Literal("always_use_https"), Schema.Null]),
        ),
      }),
      Schema.Struct({
        id: Schema.optional(
          Schema.Union([
            Schema.Literal("automatic_https_rewrites"),
            Schema.Null,
          ]),
        ),
        value: Schema.optional(
          Schema.Union([Schema.Literals(["on", "off"]), Schema.Null]),
        ),
      }),
      Schema.Struct({
        id: Schema.optional(
          Schema.Union([Schema.Literal("browser_cache_ttl"), Schema.Null]),
        ),
        value: Schema.optional(Schema.Union([Schema.Number, Schema.Null])),
      }),
      Schema.Struct({
        id: Schema.optional(
          Schema.Union([Schema.Literal("browser_check"), Schema.Null]),
        ),
        value: Schema.optional(
          Schema.Union([Schema.Literals(["on", "off"]), Schema.Null]),
        ),
      }),
      Schema.Struct({
        id: Schema.optional(
          Schema.Union([Schema.Literal("bypass_cache_on_cookie"), Schema.Null]),
        ),
        value: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
      }),
      Schema.Struct({
        id: Schema.optional(
          Schema.Union([Schema.Literal("cache_by_device_type"), Schema.Null]),
        ),
        value: Schema.optional(
          Schema.Union([Schema.Literals(["on", "off"]), Schema.Null]),
        ),
      }),
      Schema.Struct({
        id: Schema.optional(
          Schema.Union([Schema.Literal("cache_deception_armor"), Schema.Null]),
        ),
        value: Schema.optional(
          Schema.Union([Schema.Literals(["on", "off"]), Schema.Null]),
        ),
      }),
      Schema.Struct({
        id: Schema.optional(
          Schema.Union([Schema.Literal("cache_key_fields"), Schema.Null]),
        ),
        value: Schema.optional(
          Schema.Union([
            Schema.Struct({
              cookie: Schema.optional(
                Schema.Union([
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
                  Schema.Null,
                ]),
              ),
              header: Schema.optional(
                Schema.Union([
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
                  Schema.Null,
                ]),
              ),
              host: Schema.optional(
                Schema.Union([
                  Schema.Struct({
                    resolved: Schema.optional(
                      Schema.Union([Schema.Boolean, Schema.Null]),
                    ),
                  }),
                  Schema.Null,
                ]),
              ),
              queryString: Schema.optional(
                Schema.Union([
                  Schema.Struct({
                    exclude: Schema.optional(
                      Schema.Union([
                        Schema.Union([
                          Schema.Literal("*"),
                          Schema.Array(Schema.String),
                        ]),
                        Schema.Null,
                      ]),
                    ),
                    include: Schema.optional(
                      Schema.Union([
                        Schema.Union([
                          Schema.Literal("*"),
                          Schema.Array(Schema.String),
                        ]),
                        Schema.Null,
                      ]),
                    ),
                  }),
                  Schema.Null,
                ]),
              ),
              user: Schema.optional(
                Schema.Union([
                  Schema.Struct({
                    deviceType: Schema.optional(
                      Schema.Union([Schema.Boolean, Schema.Null]),
                    ),
                    geo: Schema.optional(
                      Schema.Union([Schema.Boolean, Schema.Null]),
                    ),
                    lang: Schema.optional(
                      Schema.Union([Schema.Boolean, Schema.Null]),
                    ),
                  }).pipe(
                    Schema.encodeKeys({
                      deviceType: "device_type",
                      geo: "geo",
                      lang: "lang",
                    }),
                  ),
                  Schema.Null,
                ]),
              ),
            }).pipe(
              Schema.encodeKeys({
                cookie: "cookie",
                header: "header",
                host: "host",
                queryString: "query_string",
                user: "user",
              }),
            ),
            Schema.Null,
          ]),
        ),
      }),
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
      Schema.Struct({
        id: Schema.optional(
          Schema.Union([Schema.Literal("cache_on_cookie"), Schema.Null]),
        ),
        value: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
      }),
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
      Schema.Struct({
        id: Schema.optional(
          Schema.Union([Schema.Literal("disable_apps"), Schema.Null]),
        ),
      }),
      Schema.Struct({
        id: Schema.optional(
          Schema.Union([Schema.Literal("disable_performance"), Schema.Null]),
        ),
      }),
      Schema.Struct({
        id: Schema.optional(
          Schema.Union([Schema.Literal("disable_security"), Schema.Null]),
        ),
      }),
      Schema.Struct({
        id: Schema.optional(
          Schema.Union([Schema.Literal("disable_zaraz"), Schema.Null]),
        ),
      }),
      Schema.Struct({
        id: Schema.optional(
          Schema.Union([Schema.Literal("edge_cache_ttl"), Schema.Null]),
        ),
        value: Schema.optional(Schema.Union([Schema.Number, Schema.Null])),
      }),
      Schema.Struct({
        id: Schema.optional(
          Schema.Union([Schema.Literal("email_obfuscation"), Schema.Null]),
        ),
        value: Schema.optional(
          Schema.Union([Schema.Literals(["on", "off"]), Schema.Null]),
        ),
      }),
      Schema.Struct({
        id: Schema.optional(
          Schema.Union([Schema.Literal("explicit_cache_control"), Schema.Null]),
        ),
        value: Schema.optional(
          Schema.Union([Schema.Literals(["on", "off"]), Schema.Null]),
        ),
      }),
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
            }).pipe(
              Schema.encodeKeys({ statusCode: "status_code", url: "url" }),
            ),
            Schema.Null,
          ]),
        ),
      }),
      Schema.Struct({
        id: Schema.optional(
          Schema.Union([Schema.Literal("host_header_override"), Schema.Null]),
        ),
        value: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
      }),
      Schema.Struct({
        id: Schema.optional(
          Schema.Union([Schema.Literal("ip_geolocation"), Schema.Null]),
        ),
        value: Schema.optional(
          Schema.Union([Schema.Literals(["on", "off"]), Schema.Null]),
        ),
      }),
      Schema.Struct({
        id: Schema.optional(
          Schema.Union([Schema.Literal("mirage"), Schema.Null]),
        ),
        value: Schema.optional(
          Schema.Union([Schema.Literals(["on", "off"]), Schema.Null]),
        ),
      }),
      Schema.Struct({
        id: Schema.optional(
          Schema.Union([
            Schema.Literal("opportunistic_encryption"),
            Schema.Null,
          ]),
        ),
        value: Schema.optional(
          Schema.Union([Schema.Literals(["on", "off"]), Schema.Null]),
        ),
      }),
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
      Schema.Struct({
        id: Schema.optional(
          Schema.Union([Schema.Literal("resolve_override"), Schema.Null]),
        ),
        value: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
      }),
      Schema.Struct({
        id: Schema.optional(
          Schema.Union([Schema.Literal("respect_strong_etag"), Schema.Null]),
        ),
        value: Schema.optional(
          Schema.Union([Schema.Literals(["on", "off"]), Schema.Null]),
        ),
      }),
      Schema.Struct({
        id: Schema.optional(
          Schema.Union([Schema.Literal("response_buffering"), Schema.Null]),
        ),
        value: Schema.optional(
          Schema.Union([Schema.Literals(["on", "off"]), Schema.Null]),
        ),
      }),
      Schema.Struct({
        id: Schema.optional(
          Schema.Union([Schema.Literal("rocket_loader"), Schema.Null]),
        ),
        value: Schema.optional(
          Schema.Union([Schema.Literals(["on", "off"]), Schema.Null]),
        ),
      }),
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
      Schema.Struct({
        id: Schema.optional(Schema.Union([Schema.Literal("ssl"), Schema.Null])),
        value: Schema.optional(
          Schema.Union([
            Schema.Literals([
              "off",
              "flexible",
              "full",
              "strict",
              "origin_pull",
            ]),
            Schema.Null,
          ]),
        ),
      }),
      Schema.Struct({
        id: Schema.optional(
          Schema.Union([Schema.Literal("true_client_ip_header"), Schema.Null]),
        ),
        value: Schema.optional(
          Schema.Union([Schema.Literals(["on", "off"]), Schema.Null]),
        ),
      }),
      Schema.Struct({
        id: Schema.optional(Schema.Union([Schema.Literal("waf"), Schema.Null])),
        value: Schema.optional(
          Schema.Union([Schema.Literals(["on", "off"]), Schema.Null]),
        ),
      }),
    ]),
  ),
  createdOn: Schema.String,
  modifiedOn: Schema.String,
  priority: Schema.Number,
  status: Schema.Literals(["active", "disabled"]),
  targets: Schema.Array(
    Schema.Struct({
      constraint: Schema.optional(
        Schema.Union([
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
          Schema.Null,
        ]),
      ),
      target: Schema.optional(
        Schema.Union([Schema.Literal("url"), Schema.Null]),
      ),
    }),
  ),
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
