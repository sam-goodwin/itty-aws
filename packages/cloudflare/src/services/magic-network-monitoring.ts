/**
 * Cloudflare MAGIC-NETWORK-MONITORING API
 *
 * Generated from Cloudflare TypeScript SDK.
 * DO NOT EDIT - regenerate with: bun scripts/generate.ts --service magic-network-monitoring
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

export class DuplicateMnmRuleName extends T.applyErrorMatchers(
  Schema.TaggedErrorClass<DuplicateMnmRuleName>()("DuplicateMnmRuleName", {
    code: Schema.Number,
    message: Schema.String,
  }),
  [{ code: 1008, message: { includes: "rule name must be unique" } }],
) {}

export class Forbidden extends T.applyErrorMatchers(
  Schema.TaggedErrorClass<Forbidden>()("Forbidden", {
    code: Schema.Number,
    message: Schema.String,
  }),
  [{ status: 403 }],
) {}

export class InvalidMnmConfig extends T.applyErrorMatchers(
  Schema.TaggedErrorClass<InvalidMnmConfig>()("InvalidMnmConfig", {
    code: Schema.Number,
    message: Schema.String,
  }),
  [{ code: 1003 }],
) {}

export class MnmConfigAlreadyExists extends T.applyErrorMatchers(
  Schema.TaggedErrorClass<MnmConfigAlreadyExists>()("MnmConfigAlreadyExists", {
    code: Schema.Number,
    message: Schema.String,
  }),
  [{ code: 1005, message: { includes: "already exists" } }],
) {}

export class MnmConfigMissing extends T.applyErrorMatchers(
  Schema.TaggedErrorClass<MnmConfigMissing>()("MnmConfigMissing", {
    code: Schema.Number,
    message: Schema.String,
  }),
  [
    {
      code: 1008,
      message: { includes: "without initial account configuration" },
    },
  ],
) {}

export class MnmConfigNotFound extends T.applyErrorMatchers(
  Schema.TaggedErrorClass<MnmConfigNotFound>()("MnmConfigNotFound", {
    code: Schema.Number,
    message: Schema.String,
  }),
  [{ code: 1004, message: { includes: "not found" } }],
) {}

export class MnmRuleNotFound extends T.applyErrorMatchers(
  Schema.TaggedErrorClass<MnmRuleNotFound>()("MnmRuleNotFound", {
    code: Schema.Number,
    message: Schema.String,
  }),
  [{ code: 1009 }],
) {}

// =============================================================================
// Config
// =============================================================================

export interface GetConfigRequest {
  accountId: string;
}

export const GetConfigRequest = /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    accountId: Schema.String.pipe(T.HttpPath("account_id")),
  }).pipe(T.Http({ method: "GET", path: "/accounts/{account_id}/mnm/config" })),
) as unknown as Schema.Schema<GetConfigRequest>;

export type GetConfigResponse = {
  defaultSampling?: number | null;
  name?: string | null;
  routerIps?: string[] | null;
  warpDevices?: { id: string; name: string; routerIp: string }[] | null;
} | null;

export const GetConfigResponse = /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(
  () =>
    Schema.Union([
      Schema.Struct({
        defaultSampling: Schema.optional(
          Schema.Union([Schema.Number, Schema.Null]),
        ),
        name: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
        routerIps: Schema.optional(
          Schema.Union([Schema.Array(Schema.String), Schema.Null]),
        ),
        warpDevices: Schema.optional(
          Schema.Union([
            Schema.Array(
              Schema.Struct({
                id: Schema.String,
                name: Schema.String,
                routerIp: Schema.String,
              }).pipe(
                Schema.encodeKeys({
                  id: "id",
                  name: "name",
                  routerIp: "router_ip",
                }),
              ),
            ),
            Schema.Null,
          ]),
        ),
      }).pipe(
        Schema.encodeKeys({
          defaultSampling: "default_sampling",
          name: "name",
          routerIps: "router_ips",
          warpDevices: "warp_devices",
        }),
      ),
      Schema.Null,
    ]).pipe(T.ResponsePath("result")),
) as unknown as Schema.Schema<GetConfigResponse>;

export type GetConfigError = DefaultErrors | Forbidden;

export const getConfig: API.OperationMethod<
  GetConfigRequest,
  GetConfigResponse,
  GetConfigError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetConfigRequest,
  output: GetConfigResponse,
  errors: [Forbidden],
}));

export interface CreateConfigRequest {
  /** Path param */
  accountId: string;
  /** Body param: Fallback sampling rate of flow messages being sent in packets per second. This should match the packet sampling rate configured on the router. */
  defaultSampling: number;
  /** Body param: The account name. */
  name: string;
  /** Body param */
  routerIps?: string[];
  /** Body param */
  warpDevices?: { id: string; name: string; routerIp: string }[];
}

export const CreateConfigRequest = /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(
  () =>
    Schema.Struct({
      accountId: Schema.String.pipe(T.HttpPath("account_id")),
      defaultSampling: Schema.Number,
      name: Schema.String,
      routerIps: Schema.optional(Schema.Array(Schema.String)),
      warpDevices: Schema.optional(
        Schema.Array(
          Schema.Struct({
            id: Schema.String,
            name: Schema.String,
            routerIp: Schema.String,
          }).pipe(
            Schema.encodeKeys({
              id: "id",
              name: "name",
              routerIp: "router_ip",
            }),
          ),
        ),
      ),
    }).pipe(
      Schema.encodeKeys({
        defaultSampling: "default_sampling",
        name: "name",
        routerIps: "router_ips",
        warpDevices: "warp_devices",
      }),
      T.Http({ method: "POST", path: "/accounts/{account_id}/mnm/config" }),
    ),
) as unknown as Schema.Schema<CreateConfigRequest>;

export interface CreateConfigResponse {
  /** Fallback sampling rate of flow messages being sent in packets per second. This should match the packet sampling rate configured on the router. */
  defaultSampling: number;
  /** The account name. */
  name: string;
  routerIps: string[];
  warpDevices: { id: string; name: string; routerIp: string }[];
}

export const CreateConfigResponse = /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(
  () =>
    Schema.Struct({
      defaultSampling: Schema.Number,
      name: Schema.String,
      routerIps: Schema.Array(Schema.String),
      warpDevices: Schema.Array(
        Schema.Struct({
          id: Schema.String,
          name: Schema.String,
          routerIp: Schema.String,
        }).pipe(
          Schema.encodeKeys({ id: "id", name: "name", routerIp: "router_ip" }),
        ),
      ),
    })
      .pipe(
        Schema.encodeKeys({
          defaultSampling: "default_sampling",
          name: "name",
          routerIps: "router_ips",
          warpDevices: "warp_devices",
        }),
      )
      .pipe(T.ResponsePath("result")),
) as unknown as Schema.Schema<CreateConfigResponse>;

export type CreateConfigError =
  | DefaultErrors
  | MnmConfigAlreadyExists
  | InvalidMnmConfig
  | Forbidden;

export const createConfig: API.OperationMethod<
  CreateConfigRequest,
  CreateConfigResponse,
  CreateConfigError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: CreateConfigRequest,
  output: CreateConfigResponse,
  errors: [MnmConfigAlreadyExists, InvalidMnmConfig, Forbidden],
}));

export interface UpdateConfigRequest {
  /** Path param */
  accountId: string;
  /** Body param: Fallback sampling rate of flow messages being sent in packets per second. This should match the packet sampling rate configured on the router. */
  defaultSampling: number;
  /** Body param: The account name. */
  name: string;
  /** Body param */
  routerIps?: string[];
  /** Body param */
  warpDevices?: { id: string; name: string; routerIp: string }[];
}

export const UpdateConfigRequest = /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(
  () =>
    Schema.Struct({
      accountId: Schema.String.pipe(T.HttpPath("account_id")),
      defaultSampling: Schema.Number,
      name: Schema.String,
      routerIps: Schema.optional(Schema.Array(Schema.String)),
      warpDevices: Schema.optional(
        Schema.Array(
          Schema.Struct({
            id: Schema.String,
            name: Schema.String,
            routerIp: Schema.String,
          }).pipe(
            Schema.encodeKeys({
              id: "id",
              name: "name",
              routerIp: "router_ip",
            }),
          ),
        ),
      ),
    }).pipe(
      Schema.encodeKeys({
        defaultSampling: "default_sampling",
        name: "name",
        routerIps: "router_ips",
        warpDevices: "warp_devices",
      }),
      T.Http({ method: "PUT", path: "/accounts/{account_id}/mnm/config" }),
    ),
) as unknown as Schema.Schema<UpdateConfigRequest>;

export type UpdateConfigResponse = {
  defaultSampling?: number | null;
  name?: string | null;
  routerIps?: string[] | null;
  warpDevices?: { id: string; name: string; routerIp: string }[] | null;
} | null;

export const UpdateConfigResponse = /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(
  () =>
    Schema.Union([
      Schema.Struct({
        defaultSampling: Schema.optional(
          Schema.Union([Schema.Number, Schema.Null]),
        ),
        name: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
        routerIps: Schema.optional(
          Schema.Union([Schema.Array(Schema.String), Schema.Null]),
        ),
        warpDevices: Schema.optional(
          Schema.Union([
            Schema.Array(
              Schema.Struct({
                id: Schema.String,
                name: Schema.String,
                routerIp: Schema.String,
              }).pipe(
                Schema.encodeKeys({
                  id: "id",
                  name: "name",
                  routerIp: "router_ip",
                }),
              ),
            ),
            Schema.Null,
          ]),
        ),
      }).pipe(
        Schema.encodeKeys({
          defaultSampling: "default_sampling",
          name: "name",
          routerIps: "router_ips",
          warpDevices: "warp_devices",
        }),
      ),
      Schema.Null,
    ]).pipe(T.ResponsePath("result")),
) as unknown as Schema.Schema<UpdateConfigResponse>;

export type UpdateConfigError = DefaultErrors | Forbidden | InvalidMnmConfig;

export const updateConfig: API.OperationMethod<
  UpdateConfigRequest,
  UpdateConfigResponse,
  UpdateConfigError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: UpdateConfigRequest,
  output: UpdateConfigResponse,
  errors: [Forbidden, InvalidMnmConfig],
}));

export interface PatchConfigRequest {
  /** Path param */
  accountId: string;
  /** Body param: Fallback sampling rate of flow messages being sent in packets per second. This should match the packet sampling rate configured on the router. */
  defaultSampling?: number;
  /** Body param: The account name. */
  name?: string;
  /** Body param */
  routerIps?: string[];
  /** Body param */
  warpDevices?: { id: string; name: string; routerIp: string }[];
}

export const PatchConfigRequest = /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(
  () =>
    Schema.Struct({
      accountId: Schema.String.pipe(T.HttpPath("account_id")),
      defaultSampling: Schema.optional(Schema.Number),
      name: Schema.optional(Schema.String),
      routerIps: Schema.optional(Schema.Array(Schema.String)),
      warpDevices: Schema.optional(
        Schema.Array(
          Schema.Struct({
            id: Schema.String,
            name: Schema.String,
            routerIp: Schema.String,
          }).pipe(
            Schema.encodeKeys({
              id: "id",
              name: "name",
              routerIp: "router_ip",
            }),
          ),
        ),
      ),
    }).pipe(
      Schema.encodeKeys({
        defaultSampling: "default_sampling",
        name: "name",
        routerIps: "router_ips",
        warpDevices: "warp_devices",
      }),
      T.Http({ method: "PATCH", path: "/accounts/{account_id}/mnm/config" }),
    ),
) as unknown as Schema.Schema<PatchConfigRequest>;

export interface PatchConfigResponse {
  /** Fallback sampling rate of flow messages being sent in packets per second. This should match the packet sampling rate configured on the router. */
  defaultSampling: number;
  /** The account name. */
  name: string;
  routerIps: string[];
  warpDevices: { id: string; name: string; routerIp: string }[];
}

export const PatchConfigResponse = /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(
  () =>
    Schema.Struct({
      defaultSampling: Schema.Number,
      name: Schema.String,
      routerIps: Schema.Array(Schema.String),
      warpDevices: Schema.Array(
        Schema.Struct({
          id: Schema.String,
          name: Schema.String,
          routerIp: Schema.String,
        }).pipe(
          Schema.encodeKeys({ id: "id", name: "name", routerIp: "router_ip" }),
        ),
      ),
    })
      .pipe(
        Schema.encodeKeys({
          defaultSampling: "default_sampling",
          name: "name",
          routerIps: "router_ips",
          warpDevices: "warp_devices",
        }),
      )
      .pipe(T.ResponsePath("result")),
) as unknown as Schema.Schema<PatchConfigResponse>;

export type PatchConfigError = DefaultErrors;

export const patchConfig: API.OperationMethod<
  PatchConfigRequest,
  PatchConfigResponse,
  PatchConfigError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: PatchConfigRequest,
  output: PatchConfigResponse,
  errors: [],
}));

export interface DeleteConfigRequest {
  accountId: string;
}

export const DeleteConfigRequest = /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(
  () =>
    Schema.Struct({
      accountId: Schema.String.pipe(T.HttpPath("account_id")),
    }).pipe(
      T.Http({ method: "DELETE", path: "/accounts/{account_id}/mnm/config" }),
    ),
) as unknown as Schema.Schema<DeleteConfigRequest>;

export interface DeleteConfigResponse {
  /** Fallback sampling rate of flow messages being sent in packets per second. This should match the packet sampling rate configured on the router. */
  defaultSampling: number;
  /** The account name. */
  name: string;
  routerIps: string[];
  warpDevices: { id: string; name: string; routerIp: string }[];
}

export const DeleteConfigResponse = /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(
  () =>
    Schema.Struct({
      defaultSampling: Schema.Number,
      name: Schema.String,
      routerIps: Schema.Array(Schema.String),
      warpDevices: Schema.Array(
        Schema.Struct({
          id: Schema.String,
          name: Schema.String,
          routerIp: Schema.String,
        }).pipe(
          Schema.encodeKeys({ id: "id", name: "name", routerIp: "router_ip" }),
        ),
      ),
    })
      .pipe(
        Schema.encodeKeys({
          defaultSampling: "default_sampling",
          name: "name",
          routerIps: "router_ips",
          warpDevices: "warp_devices",
        }),
      )
      .pipe(T.ResponsePath("result")),
) as unknown as Schema.Schema<DeleteConfigResponse>;

export type DeleteConfigError = DefaultErrors | MnmConfigNotFound | Forbidden;

export const deleteConfig: API.OperationMethod<
  DeleteConfigRequest,
  DeleteConfigResponse,
  DeleteConfigError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: DeleteConfigRequest,
  output: DeleteConfigResponse,
  errors: [MnmConfigNotFound, Forbidden],
}));

// =============================================================================
// ConfigFull
// =============================================================================

export interface GetConfigFullRequest {
  accountId: string;
}

export const GetConfigFullRequest = /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(
  () =>
    Schema.Struct({
      accountId: Schema.String.pipe(T.HttpPath("account_id")),
    }).pipe(
      T.Http({ method: "GET", path: "/accounts/{account_id}/mnm/config/full" }),
    ),
) as unknown as Schema.Schema<GetConfigFullRequest>;

export interface GetConfigFullResponse {
  /** Fallback sampling rate of flow messages being sent in packets per second. This should match the packet sampling rate configured on the router. */
  defaultSampling: number;
  /** The account name. */
  name: string;
  routerIps: string[];
  warpDevices: { id: string; name: string; routerIp: string }[];
}

export const GetConfigFullResponse = /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(
  () =>
    Schema.Struct({
      defaultSampling: Schema.Number,
      name: Schema.String,
      routerIps: Schema.Array(Schema.String),
      warpDevices: Schema.Array(
        Schema.Struct({
          id: Schema.String,
          name: Schema.String,
          routerIp: Schema.String,
        }).pipe(
          Schema.encodeKeys({ id: "id", name: "name", routerIp: "router_ip" }),
        ),
      ),
    })
      .pipe(
        Schema.encodeKeys({
          defaultSampling: "default_sampling",
          name: "name",
          routerIps: "router_ips",
          warpDevices: "warp_devices",
        }),
      )
      .pipe(T.ResponsePath("result")),
) as unknown as Schema.Schema<GetConfigFullResponse>;

export type GetConfigFullError = DefaultErrors;

export const getConfigFull: API.OperationMethod<
  GetConfigFullRequest,
  GetConfigFullResponse,
  GetConfigFullError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetConfigFullRequest,
  output: GetConfigFullResponse,
  errors: [],
}));

// =============================================================================
// Rule
// =============================================================================

export interface GetRuleRequest {
  ruleId: string;
  accountId: string;
}

export const GetRuleRequest = /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    ruleId: Schema.String.pipe(T.HttpPath("ruleId")),
    accountId: Schema.String.pipe(T.HttpPath("account_id")),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/accounts/{account_id}/mnm/rules/{ruleId}",
    }),
  ),
) as unknown as Schema.Schema<GetRuleRequest>;

export interface GetRuleResponse {
  /** The id of the rule. Must be unique. */
  id: string;
  /** Toggle on if you would like Cloudflare to automatically advertise the IP Prefixes within the rule via Magic Transit when the rule is triggered. Only available for users of Magic Transit. */
  automaticAdvertisement: boolean | null;
  /** The name of the rule. Must be unique. Supports characters A-Z, a-z, 0-9, underscore (\_), dash (-), period (.), and tilde (~). You can’t have a space in the rule name. Max 256 characters. */
  name: string;
  prefixes: string[];
  /** MNM rule type. */
  type: "threshold" | "zscore" | "advanced_ddos" | (string & {});
  /** The number of bits per second for the rule. When this value is exceeded for the set duration, an alert notification is sent. Minimum of 1 and no maximum. */
  bandwidthThreshold?: number | null;
  /** The amount of time that the rule threshold must be exceeded to send an alert notification. The final value must be equivalent to one of the following 8 values ["1m","5m","10m","15m","20m","30m","45m", */
  duration?:
    | "1m"
    | "5m"
    | "10m"
    | "15m"
    | "20m"
    | "30m"
    | "45m"
    | "60m"
    | (string & {})
    | null;
  /** The number of packets per second for the rule. When this value is exceeded for the set duration, an alert notification is sent. Minimum of 1 and no maximum. */
  packetThreshold?: number | null;
  /** Prefix match type to be applied for a prefix auto advertisement when using an advanced_ddos rule. */
  prefixMatch?: "exact" | "subnet" | "supernet" | null;
  /** Level of sensitivity set for zscore rules. */
  zscoreSensitivity?: "low" | "medium" | "high" | null;
  /** Target of the zscore rule analysis. */
  zscoreTarget?: "bits" | "packets" | null;
}

export const GetRuleResponse = /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    id: Schema.String,
    automaticAdvertisement: Schema.Union([Schema.Boolean, Schema.Null]),
    name: Schema.String,
    prefixes: Schema.Array(Schema.String),
    type: Schema.Union([
      Schema.Literals(["threshold", "zscore", "advanced_ddos"]),
      Schema.String,
    ]),
    bandwidthThreshold: Schema.optional(
      Schema.Union([Schema.Number, Schema.Null]),
    ),
    duration: Schema.optional(
      Schema.Union([
        Schema.Union([
          Schema.Literals([
            "1m",
            "5m",
            "10m",
            "15m",
            "20m",
            "30m",
            "45m",
            "60m",
          ]),
          Schema.String,
        ]),
        Schema.Null,
      ]),
    ),
    packetThreshold: Schema.optional(
      Schema.Union([Schema.Number, Schema.Null]),
    ),
    prefixMatch: Schema.optional(
      Schema.Union([
        Schema.Literal("exact"),
        Schema.Literal("subnet"),
        Schema.Literal("supernet"),
        Schema.Null,
      ]),
    ),
    zscoreSensitivity: Schema.optional(
      Schema.Union([
        Schema.Literal("low"),
        Schema.Literal("medium"),
        Schema.Literal("high"),
        Schema.Null,
      ]),
    ),
    zscoreTarget: Schema.optional(
      Schema.Union([
        Schema.Literal("bits"),
        Schema.Literal("packets"),
        Schema.Null,
      ]),
    ),
  })
    .pipe(
      Schema.encodeKeys({
        id: "id",
        automaticAdvertisement: "automatic_advertisement",
        name: "name",
        prefixes: "prefixes",
        type: "type",
        bandwidthThreshold: "bandwidth_threshold",
        duration: "duration",
        packetThreshold: "packet_threshold",
        prefixMatch: "prefix_match",
        zscoreSensitivity: "zscore_sensitivity",
        zscoreTarget: "zscore_target",
      }),
    )
    .pipe(T.ResponsePath("result")),
) as unknown as Schema.Schema<GetRuleResponse>;

export type GetRuleError = DefaultErrors | MnmRuleNotFound | Forbidden;

export const getRule: API.OperationMethod<
  GetRuleRequest,
  GetRuleResponse,
  GetRuleError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetRuleRequest,
  output: GetRuleResponse,
  errors: [MnmRuleNotFound, Forbidden],
}));

export interface ListRulesRequest {
  accountId: string;
}

export const ListRulesRequest = /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    accountId: Schema.String.pipe(T.HttpPath("account_id")),
  }).pipe(T.Http({ method: "GET", path: "/accounts/{account_id}/mnm/rules" })),
) as unknown as Schema.Schema<ListRulesRequest>;

export interface ListRulesResponse {
  result:
    | ({
        id: string;
        automaticAdvertisement: boolean | null;
        name: string;
        prefixes: string[];
        type: "threshold" | "zscore" | "advanced_ddos" | (string & {});
        bandwidthThreshold?: number | null;
        duration?:
          | "1m"
          | "5m"
          | "10m"
          | "15m"
          | "20m"
          | "30m"
          | "45m"
          | "60m"
          | (string & {})
          | null;
        packetThreshold?: number | null;
        prefixMatch?: "exact" | "subnet" | "supernet" | null;
        zscoreSensitivity?: "low" | "medium" | "high" | null;
        zscoreTarget?: "bits" | "packets" | null;
      } | null)[]
    | null;
}

export const ListRulesResponse = /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(
  () =>
    Schema.Struct({
      result: Schema.Union([
        Schema.Array(
          Schema.Union([
            Schema.Struct({
              id: Schema.String,
              automaticAdvertisement: Schema.Union([
                Schema.Boolean,
                Schema.Null,
              ]),
              name: Schema.String,
              prefixes: Schema.Array(Schema.String),
              type: Schema.Union([
                Schema.Literals(["threshold", "zscore", "advanced_ddos"]),
                Schema.String,
              ]),
              bandwidthThreshold: Schema.optional(
                Schema.Union([Schema.Number, Schema.Null]),
              ),
              duration: Schema.optional(
                Schema.Union([
                  Schema.Union([
                    Schema.Literals([
                      "1m",
                      "5m",
                      "10m",
                      "15m",
                      "20m",
                      "30m",
                      "45m",
                      "60m",
                    ]),
                    Schema.String,
                  ]),
                  Schema.Null,
                ]),
              ),
              packetThreshold: Schema.optional(
                Schema.Union([Schema.Number, Schema.Null]),
              ),
              prefixMatch: Schema.optional(
                Schema.Union([
                  Schema.Literal("exact"),
                  Schema.Literal("subnet"),
                  Schema.Literal("supernet"),
                  Schema.Null,
                ]),
              ),
              zscoreSensitivity: Schema.optional(
                Schema.Union([
                  Schema.Literal("low"),
                  Schema.Literal("medium"),
                  Schema.Literal("high"),
                  Schema.Null,
                ]),
              ),
              zscoreTarget: Schema.optional(
                Schema.Union([
                  Schema.Literal("bits"),
                  Schema.Literal("packets"),
                  Schema.Null,
                ]),
              ),
            }).pipe(
              Schema.encodeKeys({
                id: "id",
                automaticAdvertisement: "automatic_advertisement",
                name: "name",
                prefixes: "prefixes",
                type: "type",
                bandwidthThreshold: "bandwidth_threshold",
                duration: "duration",
                packetThreshold: "packet_threshold",
                prefixMatch: "prefix_match",
                zscoreSensitivity: "zscore_sensitivity",
                zscoreTarget: "zscore_target",
              }),
            ),
            Schema.Null,
          ]),
        ),
        Schema.Null,
      ]),
    }),
) as unknown as Schema.Schema<ListRulesResponse>;

export type ListRulesError = DefaultErrors | Forbidden;

export const listRules: API.PaginatedOperationMethod<
  ListRulesRequest,
  ListRulesResponse,
  ListRulesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
  input: ListRulesRequest,
  output: ListRulesResponse,
  errors: [Forbidden],
  pagination: {
    mode: "single",
    items: "result",
  } as const,
}));

export interface CreateRuleRequest {
  /** Path param */
  accountId: string;
  /** Body param: Toggle on if you would like Cloudflare to automatically advertise the IP Prefixes within the rule via Magic Transit when the rule is triggered. Only available for users of Magic Transit. */
  automaticAdvertisement: boolean | null;
  /** Body param: The name of the rule. Must be unique. Supports characters A-Z, a-z, 0-9, underscore (\_), dash (-), period (.), and tilde (~). You can’t have a space in the rule name. Max 256 characters. */
  name: string;
  /** Body param */
  prefixes: string[];
  /** Body param: MNM rule type. */
  type: "threshold" | "zscore" | "advanced_ddos" | (string & {});
  /** Body param: The number of bits per second for the rule. When this value is exceeded for the set duration, an alert notification is sent. Minimum of 1 and no maximum. */
  bandwidthThreshold?: number;
  /** Body param: The amount of time that the rule threshold must be exceeded to send an alert notification. The final value must be equivalent to one of the following 8 values ["1m","5m","10m","15m","20m", */
  duration?:
    | "1m"
    | "5m"
    | "10m"
    | "15m"
    | "20m"
    | "30m"
    | "45m"
    | "60m"
    | (string & {});
  /** Body param: The number of packets per second for the rule. When this value is exceeded for the set duration, an alert notification is sent. Minimum of 1 and no maximum. */
  packetThreshold?: number;
  /** Body param: Prefix match type to be applied for a prefix auto advertisement when using an advanced_ddos rule. */
  prefixMatch?: "exact" | "subnet" | "supernet" | null;
  /** Body param: Level of sensitivity set for zscore rules. */
  zscoreSensitivity?: "low" | "medium" | "high" | null;
  /** Body param: Target of the zscore rule analysis. */
  zscoreTarget?: "bits" | "packets" | null;
}

export const CreateRuleRequest = /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(
  () =>
    Schema.Struct({
      accountId: Schema.String.pipe(T.HttpPath("account_id")),
      automaticAdvertisement: Schema.Union([Schema.Boolean, Schema.Null]),
      name: Schema.String,
      prefixes: Schema.Array(Schema.String),
      type: Schema.Union([
        Schema.Literals(["threshold", "zscore", "advanced_ddos"]),
        Schema.String,
      ]),
      bandwidthThreshold: Schema.optional(Schema.Number),
      duration: Schema.optional(
        Schema.Union([
          Schema.Literals([
            "1m",
            "5m",
            "10m",
            "15m",
            "20m",
            "30m",
            "45m",
            "60m",
          ]),
          Schema.String,
        ]),
      ),
      packetThreshold: Schema.optional(Schema.Number),
      prefixMatch: Schema.optional(
        Schema.Union([
          Schema.Literal("exact"),
          Schema.Literal("subnet"),
          Schema.Literal("supernet"),
          Schema.Null,
        ]),
      ),
      zscoreSensitivity: Schema.optional(
        Schema.Union([
          Schema.Literal("low"),
          Schema.Literal("medium"),
          Schema.Literal("high"),
          Schema.Null,
        ]),
      ),
      zscoreTarget: Schema.optional(
        Schema.Union([
          Schema.Literal("bits"),
          Schema.Literal("packets"),
          Schema.Null,
        ]),
      ),
    }).pipe(
      Schema.encodeKeys({
        automaticAdvertisement: "automatic_advertisement",
        name: "name",
        prefixes: "prefixes",
        type: "type",
        bandwidthThreshold: "bandwidth_threshold",
        duration: "duration",
        packetThreshold: "packet_threshold",
        prefixMatch: "prefix_match",
        zscoreSensitivity: "zscore_sensitivity",
        zscoreTarget: "zscore_target",
      }),
      T.Http({ method: "POST", path: "/accounts/{account_id}/mnm/rules" }),
    ),
) as unknown as Schema.Schema<CreateRuleRequest>;

export interface CreateRuleResponse {
  /** The id of the rule. Must be unique. */
  id: string;
  /** Toggle on if you would like Cloudflare to automatically advertise the IP Prefixes within the rule via Magic Transit when the rule is triggered. Only available for users of Magic Transit. */
  automaticAdvertisement: boolean | null;
  /** The name of the rule. Must be unique. Supports characters A-Z, a-z, 0-9, underscore (\_), dash (-), period (.), and tilde (~). You can’t have a space in the rule name. Max 256 characters. */
  name: string;
  prefixes: string[];
  /** MNM rule type. */
  type: "threshold" | "zscore" | "advanced_ddos" | (string & {});
  /** The number of bits per second for the rule. When this value is exceeded for the set duration, an alert notification is sent. Minimum of 1 and no maximum. */
  bandwidthThreshold?: number | null;
  /** The amount of time that the rule threshold must be exceeded to send an alert notification. The final value must be equivalent to one of the following 8 values ["1m","5m","10m","15m","20m","30m","45m", */
  duration?:
    | "1m"
    | "5m"
    | "10m"
    | "15m"
    | "20m"
    | "30m"
    | "45m"
    | "60m"
    | (string & {})
    | null;
  /** The number of packets per second for the rule. When this value is exceeded for the set duration, an alert notification is sent. Minimum of 1 and no maximum. */
  packetThreshold?: number | null;
  /** Prefix match type to be applied for a prefix auto advertisement when using an advanced_ddos rule. */
  prefixMatch?: "exact" | "subnet" | "supernet" | null;
  /** Level of sensitivity set for zscore rules. */
  zscoreSensitivity?: "low" | "medium" | "high" | null;
  /** Target of the zscore rule analysis. */
  zscoreTarget?: "bits" | "packets" | null;
}

export const CreateRuleResponse = /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(
  () =>
    Schema.Struct({
      id: Schema.String,
      automaticAdvertisement: Schema.Union([Schema.Boolean, Schema.Null]),
      name: Schema.String,
      prefixes: Schema.Array(Schema.String),
      type: Schema.Union([
        Schema.Literals(["threshold", "zscore", "advanced_ddos"]),
        Schema.String,
      ]),
      bandwidthThreshold: Schema.optional(
        Schema.Union([Schema.Number, Schema.Null]),
      ),
      duration: Schema.optional(
        Schema.Union([
          Schema.Union([
            Schema.Literals([
              "1m",
              "5m",
              "10m",
              "15m",
              "20m",
              "30m",
              "45m",
              "60m",
            ]),
            Schema.String,
          ]),
          Schema.Null,
        ]),
      ),
      packetThreshold: Schema.optional(
        Schema.Union([Schema.Number, Schema.Null]),
      ),
      prefixMatch: Schema.optional(
        Schema.Union([
          Schema.Literal("exact"),
          Schema.Literal("subnet"),
          Schema.Literal("supernet"),
          Schema.Null,
        ]),
      ),
      zscoreSensitivity: Schema.optional(
        Schema.Union([
          Schema.Literal("low"),
          Schema.Literal("medium"),
          Schema.Literal("high"),
          Schema.Null,
        ]),
      ),
      zscoreTarget: Schema.optional(
        Schema.Union([
          Schema.Literal("bits"),
          Schema.Literal("packets"),
          Schema.Null,
        ]),
      ),
    })
      .pipe(
        Schema.encodeKeys({
          id: "id",
          automaticAdvertisement: "automatic_advertisement",
          name: "name",
          prefixes: "prefixes",
          type: "type",
          bandwidthThreshold: "bandwidth_threshold",
          duration: "duration",
          packetThreshold: "packet_threshold",
          prefixMatch: "prefix_match",
          zscoreSensitivity: "zscore_sensitivity",
          zscoreTarget: "zscore_target",
        }),
      )
      .pipe(T.ResponsePath("result")),
) as unknown as Schema.Schema<CreateRuleResponse>;

export type CreateRuleError =
  | DefaultErrors
  | DuplicateMnmRuleName
  | MnmConfigMissing
  | Forbidden;

export const createRule: API.OperationMethod<
  CreateRuleRequest,
  CreateRuleResponse,
  CreateRuleError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: CreateRuleRequest,
  output: CreateRuleResponse,
  errors: [DuplicateMnmRuleName, MnmConfigMissing, Forbidden],
}));

export interface UpdateRuleRequest {
  /** Path param */
  accountId: string;
  /** Body param: Toggle on if you would like Cloudflare to automatically advertise the IP Prefixes within the rule via Magic Transit when the rule is triggered. Only available for users of Magic Transit. */
  automaticAdvertisement: boolean | null;
  /** Body param: The name of the rule. Must be unique. Supports characters A-Z, a-z, 0-9, underscore (\_), dash (-), period (.), and tilde (~). You can’t have a space in the rule name. Max 256 characters. */
  name: string;
  /** Body param */
  prefixes: string[];
  /** Body param: MNM rule type. */
  type: "threshold" | "zscore" | "advanced_ddos" | (string & {});
  /** Body param: The number of bits per second for the rule. When this value is exceeded for the set duration, an alert notification is sent. Minimum of 1 and no maximum. */
  bandwidthThreshold?: number;
  /** Body param: The amount of time that the rule threshold must be exceeded to send an alert notification. The final value must be equivalent to one of the following 8 values ["1m","5m","10m","15m","20m", */
  duration?:
    | "1m"
    | "5m"
    | "10m"
    | "15m"
    | "20m"
    | "30m"
    | "45m"
    | "60m"
    | (string & {});
  /** Body param: The number of packets per second for the rule. When this value is exceeded for the set duration, an alert notification is sent. Minimum of 1 and no maximum. */
  packetThreshold?: number;
  /** Body param: Prefix match type to be applied for a prefix auto advertisement when using an advanced_ddos rule. */
  prefixMatch?: "exact" | "subnet" | "supernet" | null;
  /** Body param: Level of sensitivity set for zscore rules. */
  zscoreSensitivity?: "low" | "medium" | "high" | null;
  /** Body param: Target of the zscore rule analysis. */
  zscoreTarget?: "bits" | "packets" | null;
}

export const UpdateRuleRequest = /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(
  () =>
    Schema.Struct({
      accountId: Schema.String.pipe(T.HttpPath("account_id")),
      automaticAdvertisement: Schema.Union([Schema.Boolean, Schema.Null]),
      name: Schema.String,
      prefixes: Schema.Array(Schema.String),
      type: Schema.Union([
        Schema.Literals(["threshold", "zscore", "advanced_ddos"]),
        Schema.String,
      ]),
      bandwidthThreshold: Schema.optional(Schema.Number),
      duration: Schema.optional(
        Schema.Union([
          Schema.Literals([
            "1m",
            "5m",
            "10m",
            "15m",
            "20m",
            "30m",
            "45m",
            "60m",
          ]),
          Schema.String,
        ]),
      ),
      packetThreshold: Schema.optional(Schema.Number),
      prefixMatch: Schema.optional(
        Schema.Union([
          Schema.Literal("exact"),
          Schema.Literal("subnet"),
          Schema.Literal("supernet"),
          Schema.Null,
        ]),
      ),
      zscoreSensitivity: Schema.optional(
        Schema.Union([
          Schema.Literal("low"),
          Schema.Literal("medium"),
          Schema.Literal("high"),
          Schema.Null,
        ]),
      ),
      zscoreTarget: Schema.optional(
        Schema.Union([
          Schema.Literal("bits"),
          Schema.Literal("packets"),
          Schema.Null,
        ]),
      ),
    }).pipe(
      Schema.encodeKeys({
        automaticAdvertisement: "automatic_advertisement",
        name: "name",
        prefixes: "prefixes",
        type: "type",
        bandwidthThreshold: "bandwidth_threshold",
        duration: "duration",
        packetThreshold: "packet_threshold",
        prefixMatch: "prefix_match",
        zscoreSensitivity: "zscore_sensitivity",
        zscoreTarget: "zscore_target",
      }),
      T.Http({ method: "PUT", path: "/accounts/{account_id}/mnm/rules" }),
    ),
) as unknown as Schema.Schema<UpdateRuleRequest>;

export interface UpdateRuleResponse {
  /** The id of the rule. Must be unique. */
  id: string;
  /** Toggle on if you would like Cloudflare to automatically advertise the IP Prefixes within the rule via Magic Transit when the rule is triggered. Only available for users of Magic Transit. */
  automaticAdvertisement: boolean | null;
  /** The name of the rule. Must be unique. Supports characters A-Z, a-z, 0-9, underscore (\_), dash (-), period (.), and tilde (~). You can’t have a space in the rule name. Max 256 characters. */
  name: string;
  prefixes: string[];
  /** MNM rule type. */
  type: "threshold" | "zscore" | "advanced_ddos" | (string & {});
  /** The number of bits per second for the rule. When this value is exceeded for the set duration, an alert notification is sent. Minimum of 1 and no maximum. */
  bandwidthThreshold?: number | null;
  /** The amount of time that the rule threshold must be exceeded to send an alert notification. The final value must be equivalent to one of the following 8 values ["1m","5m","10m","15m","20m","30m","45m", */
  duration?:
    | "1m"
    | "5m"
    | "10m"
    | "15m"
    | "20m"
    | "30m"
    | "45m"
    | "60m"
    | (string & {})
    | null;
  /** The number of packets per second for the rule. When this value is exceeded for the set duration, an alert notification is sent. Minimum of 1 and no maximum. */
  packetThreshold?: number | null;
  /** Prefix match type to be applied for a prefix auto advertisement when using an advanced_ddos rule. */
  prefixMatch?: "exact" | "subnet" | "supernet" | null;
  /** Level of sensitivity set for zscore rules. */
  zscoreSensitivity?: "low" | "medium" | "high" | null;
  /** Target of the zscore rule analysis. */
  zscoreTarget?: "bits" | "packets" | null;
}

export const UpdateRuleResponse = /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(
  () =>
    Schema.Struct({
      id: Schema.String,
      automaticAdvertisement: Schema.Union([Schema.Boolean, Schema.Null]),
      name: Schema.String,
      prefixes: Schema.Array(Schema.String),
      type: Schema.Union([
        Schema.Literals(["threshold", "zscore", "advanced_ddos"]),
        Schema.String,
      ]),
      bandwidthThreshold: Schema.optional(
        Schema.Union([Schema.Number, Schema.Null]),
      ),
      duration: Schema.optional(
        Schema.Union([
          Schema.Union([
            Schema.Literals([
              "1m",
              "5m",
              "10m",
              "15m",
              "20m",
              "30m",
              "45m",
              "60m",
            ]),
            Schema.String,
          ]),
          Schema.Null,
        ]),
      ),
      packetThreshold: Schema.optional(
        Schema.Union([Schema.Number, Schema.Null]),
      ),
      prefixMatch: Schema.optional(
        Schema.Union([
          Schema.Literal("exact"),
          Schema.Literal("subnet"),
          Schema.Literal("supernet"),
          Schema.Null,
        ]),
      ),
      zscoreSensitivity: Schema.optional(
        Schema.Union([
          Schema.Literal("low"),
          Schema.Literal("medium"),
          Schema.Literal("high"),
          Schema.Null,
        ]),
      ),
      zscoreTarget: Schema.optional(
        Schema.Union([
          Schema.Literal("bits"),
          Schema.Literal("packets"),
          Schema.Null,
        ]),
      ),
    })
      .pipe(
        Schema.encodeKeys({
          id: "id",
          automaticAdvertisement: "automatic_advertisement",
          name: "name",
          prefixes: "prefixes",
          type: "type",
          bandwidthThreshold: "bandwidth_threshold",
          duration: "duration",
          packetThreshold: "packet_threshold",
          prefixMatch: "prefix_match",
          zscoreSensitivity: "zscore_sensitivity",
          zscoreTarget: "zscore_target",
        }),
      )
      .pipe(T.ResponsePath("result")),
) as unknown as Schema.Schema<UpdateRuleResponse>;

export type UpdateRuleError = DefaultErrors;

export const updateRule: API.OperationMethod<
  UpdateRuleRequest,
  UpdateRuleResponse,
  UpdateRuleError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: UpdateRuleRequest,
  output: UpdateRuleResponse,
  errors: [],
}));

export interface PatchRuleRequest {
  ruleId: string;
  /** Path param */
  accountId: string;
  /** Body param: Toggle on if you would like Cloudflare to automatically advertise the IP Prefixes within the rule via Magic Transit when the rule is triggered. Only available for users of Magic Transit. */
  automaticAdvertisement: boolean | null;
  /** Body param: The name of the rule. Must be unique. Supports characters A-Z, a-z, 0-9, underscore (\_), dash (-), period (.), and tilde (~). You can’t have a space in the rule name. Max 256 characters. */
  name: string;
  /** Body param */
  prefixes: string[];
  /** Body param: MNM rule type. */
  type: "threshold" | "zscore" | "advanced_ddos" | (string & {});
  /** Body param: The number of bits per second for the rule. When this value is exceeded for the set duration, an alert notification is sent. Minimum of 1 and no maximum. */
  bandwidthThreshold?: number;
  /** Body param: The amount of time that the rule threshold must be exceeded to send an alert notification. The final value must be equivalent to one of the following 8 values ["1m","5m","10m","15m","20m", */
  duration?:
    | "1m"
    | "5m"
    | "10m"
    | "15m"
    | "20m"
    | "30m"
    | "45m"
    | "60m"
    | (string & {});
  /** Body param: The number of packets per second for the rule. When this value is exceeded for the set duration, an alert notification is sent. Minimum of 1 and no maximum. */
  packetThreshold?: number;
  /** Body param: Prefix match type to be applied for a prefix auto advertisement when using an advanced_ddos rule. */
  prefixMatch?: "exact" | "subnet" | "supernet" | null;
  /** Body param: Level of sensitivity set for zscore rules. */
  zscoreSensitivity?: "low" | "medium" | "high" | null;
  /** Body param: Target of the zscore rule analysis. */
  zscoreTarget?: "bits" | "packets" | null;
}

export const PatchRuleRequest = /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    ruleId: Schema.String.pipe(T.HttpPath("ruleId")),
    accountId: Schema.String.pipe(T.HttpPath("account_id")),
    automaticAdvertisement: Schema.Union([Schema.Boolean, Schema.Null]),
    name: Schema.String,
    prefixes: Schema.Array(Schema.String),
    type: Schema.Union([
      Schema.Literals(["threshold", "zscore", "advanced_ddos"]),
      Schema.String,
    ]),
    bandwidthThreshold: Schema.optional(Schema.Number),
    duration: Schema.optional(
      Schema.Union([
        Schema.Literals(["1m", "5m", "10m", "15m", "20m", "30m", "45m", "60m"]),
        Schema.String,
      ]),
    ),
    packetThreshold: Schema.optional(Schema.Number),
    prefixMatch: Schema.optional(
      Schema.Union([
        Schema.Literal("exact"),
        Schema.Literal("subnet"),
        Schema.Literal("supernet"),
        Schema.Null,
      ]),
    ),
    zscoreSensitivity: Schema.optional(
      Schema.Union([
        Schema.Literal("low"),
        Schema.Literal("medium"),
        Schema.Literal("high"),
        Schema.Null,
      ]),
    ),
    zscoreTarget: Schema.optional(
      Schema.Union([
        Schema.Literal("bits"),
        Schema.Literal("packets"),
        Schema.Null,
      ]),
    ),
  }).pipe(
    Schema.encodeKeys({
      automaticAdvertisement: "automatic_advertisement",
      name: "name",
      prefixes: "prefixes",
      type: "type",
      bandwidthThreshold: "bandwidth_threshold",
      duration: "duration",
      packetThreshold: "packet_threshold",
      prefixMatch: "prefix_match",
      zscoreSensitivity: "zscore_sensitivity",
      zscoreTarget: "zscore_target",
    }),
    T.Http({
      method: "PATCH",
      path: "/accounts/{account_id}/mnm/rules/{ruleId}",
    }),
  ),
) as unknown as Schema.Schema<PatchRuleRequest>;

export interface PatchRuleResponse {
  /** The id of the rule. Must be unique. */
  id?: string | null;
  /** Toggle on if you would like Cloudflare to automatically advertise the IP Prefixes within the rule via Magic Transit when the rule is triggered. Only available for users of Magic Transit. */
  automaticAdvertisement: boolean | null;
  /** The name of the rule. Must be unique. Supports characters A-Z, a-z, 0-9, underscore (\_), dash (-), period (.), and tilde (~). You can’t have a space in the rule name. Max 256 characters. */
  name: string;
  prefixes: string[];
  /** MNM rule type. */
  type: "threshold" | "zscore" | "advanced_ddos" | (string & {});
  /** The number of bits per second for the rule. When this value is exceeded for the set duration, an alert notification is sent. Minimum of 1 and no maximum. */
  bandwidthThreshold?: number | null;
  /** The amount of time that the rule threshold must be exceeded to send an alert notification. The final value must be equivalent to one of the following 8 values ["1m","5m","10m","15m","20m","30m","45m", */
  duration?:
    | "1m"
    | "5m"
    | "10m"
    | "15m"
    | "20m"
    | "30m"
    | "45m"
    | "60m"
    | (string & {})
    | null;
  /** The number of packets per second for the rule. When this value is exceeded for the set duration, an alert notification is sent. Minimum of 1 and no maximum. */
  packetThreshold?: number | null;
  /** Prefix match type to be applied for a prefix auto advertisement when using an advanced_ddos rule. */
  prefixMatch?: "exact" | "subnet" | "supernet" | null;
  /** Level of sensitivity set for zscore rules. */
  zscoreSensitivity?: "low" | "medium" | "high" | null;
  /** Target of the zscore rule analysis. */
  zscoreTarget?: "bits" | "packets" | null;
}

export const PatchRuleResponse = /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(
  () =>
    Schema.Struct({
      id: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
      automaticAdvertisement: Schema.Union([Schema.Boolean, Schema.Null]),
      name: Schema.String,
      prefixes: Schema.Array(Schema.String),
      type: Schema.Union([
        Schema.Literals(["threshold", "zscore", "advanced_ddos"]),
        Schema.String,
      ]),
      bandwidthThreshold: Schema.optional(
        Schema.Union([Schema.Number, Schema.Null]),
      ),
      duration: Schema.optional(
        Schema.Union([
          Schema.Union([
            Schema.Literals([
              "1m",
              "5m",
              "10m",
              "15m",
              "20m",
              "30m",
              "45m",
              "60m",
            ]),
            Schema.String,
          ]),
          Schema.Null,
        ]),
      ),
      packetThreshold: Schema.optional(
        Schema.Union([Schema.Number, Schema.Null]),
      ),
      prefixMatch: Schema.optional(
        Schema.Union([
          Schema.Literal("exact"),
          Schema.Literal("subnet"),
          Schema.Literal("supernet"),
          Schema.Null,
        ]),
      ),
      zscoreSensitivity: Schema.optional(
        Schema.Union([
          Schema.Literal("low"),
          Schema.Literal("medium"),
          Schema.Literal("high"),
          Schema.Null,
        ]),
      ),
      zscoreTarget: Schema.optional(
        Schema.Union([
          Schema.Literal("bits"),
          Schema.Literal("packets"),
          Schema.Null,
        ]),
      ),
    })
      .pipe(
        Schema.encodeKeys({
          id: "id",
          automaticAdvertisement: "automatic_advertisement",
          name: "name",
          prefixes: "prefixes",
          type: "type",
          bandwidthThreshold: "bandwidth_threshold",
          duration: "duration",
          packetThreshold: "packet_threshold",
          prefixMatch: "prefix_match",
          zscoreSensitivity: "zscore_sensitivity",
          zscoreTarget: "zscore_target",
        }),
      )
      .pipe(T.ResponsePath("result")),
) as unknown as Schema.Schema<PatchRuleResponse>;

export type PatchRuleError = DefaultErrors | MnmRuleNotFound | Forbidden;

export const patchRule: API.OperationMethod<
  PatchRuleRequest,
  PatchRuleResponse,
  PatchRuleError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: PatchRuleRequest,
  output: PatchRuleResponse,
  errors: [MnmRuleNotFound, Forbidden],
}));

export interface DeleteRuleRequest {
  ruleId: string;
  accountId: string;
}

export const DeleteRuleRequest = /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(
  () =>
    Schema.Struct({
      ruleId: Schema.String.pipe(T.HttpPath("ruleId")),
      accountId: Schema.String.pipe(T.HttpPath("account_id")),
    }).pipe(
      T.Http({
        method: "DELETE",
        path: "/accounts/{account_id}/mnm/rules/{ruleId}",
      }),
    ),
) as unknown as Schema.Schema<DeleteRuleRequest>;

export interface DeleteRuleResponse {
  /** The id of the rule. Must be unique. */
  id: string;
  /** Toggle on if you would like Cloudflare to automatically advertise the IP Prefixes within the rule via Magic Transit when the rule is triggered. Only available for users of Magic Transit. */
  automaticAdvertisement: boolean | null;
  /** The name of the rule. Must be unique. Supports characters A-Z, a-z, 0-9, underscore (\_), dash (-), period (.), and tilde (~). You can’t have a space in the rule name. Max 256 characters. */
  name: string;
  prefixes: string[];
  /** MNM rule type. */
  type: "threshold" | "zscore" | "advanced_ddos" | (string & {});
  /** The number of bits per second for the rule. When this value is exceeded for the set duration, an alert notification is sent. Minimum of 1 and no maximum. */
  bandwidthThreshold?: number | null;
  /** The amount of time that the rule threshold must be exceeded to send an alert notification. The final value must be equivalent to one of the following 8 values ["1m","5m","10m","15m","20m","30m","45m", */
  duration?:
    | "1m"
    | "5m"
    | "10m"
    | "15m"
    | "20m"
    | "30m"
    | "45m"
    | "60m"
    | (string & {})
    | null;
  /** The number of packets per second for the rule. When this value is exceeded for the set duration, an alert notification is sent. Minimum of 1 and no maximum. */
  packetThreshold?: number | null;
  /** Prefix match type to be applied for a prefix auto advertisement when using an advanced_ddos rule. */
  prefixMatch?: "exact" | "subnet" | "supernet" | null;
  /** Level of sensitivity set for zscore rules. */
  zscoreSensitivity?: "low" | "medium" | "high" | null;
  /** Target of the zscore rule analysis. */
  zscoreTarget?: "bits" | "packets" | null;
}

export const DeleteRuleResponse = /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(
  () =>
    Schema.Struct({
      id: Schema.String,
      automaticAdvertisement: Schema.Union([Schema.Boolean, Schema.Null]),
      name: Schema.String,
      prefixes: Schema.Array(Schema.String),
      type: Schema.Union([
        Schema.Literals(["threshold", "zscore", "advanced_ddos"]),
        Schema.String,
      ]),
      bandwidthThreshold: Schema.optional(
        Schema.Union([Schema.Number, Schema.Null]),
      ),
      duration: Schema.optional(
        Schema.Union([
          Schema.Union([
            Schema.Literals([
              "1m",
              "5m",
              "10m",
              "15m",
              "20m",
              "30m",
              "45m",
              "60m",
            ]),
            Schema.String,
          ]),
          Schema.Null,
        ]),
      ),
      packetThreshold: Schema.optional(
        Schema.Union([Schema.Number, Schema.Null]),
      ),
      prefixMatch: Schema.optional(
        Schema.Union([
          Schema.Literal("exact"),
          Schema.Literal("subnet"),
          Schema.Literal("supernet"),
          Schema.Null,
        ]),
      ),
      zscoreSensitivity: Schema.optional(
        Schema.Union([
          Schema.Literal("low"),
          Schema.Literal("medium"),
          Schema.Literal("high"),
          Schema.Null,
        ]),
      ),
      zscoreTarget: Schema.optional(
        Schema.Union([
          Schema.Literal("bits"),
          Schema.Literal("packets"),
          Schema.Null,
        ]),
      ),
    })
      .pipe(
        Schema.encodeKeys({
          id: "id",
          automaticAdvertisement: "automatic_advertisement",
          name: "name",
          prefixes: "prefixes",
          type: "type",
          bandwidthThreshold: "bandwidth_threshold",
          duration: "duration",
          packetThreshold: "packet_threshold",
          prefixMatch: "prefix_match",
          zscoreSensitivity: "zscore_sensitivity",
          zscoreTarget: "zscore_target",
        }),
      )
      .pipe(T.ResponsePath("result")),
) as unknown as Schema.Schema<DeleteRuleResponse>;

export type DeleteRuleError = DefaultErrors | MnmRuleNotFound | Forbidden;

export const deleteRule: API.OperationMethod<
  DeleteRuleRequest,
  DeleteRuleResponse,
  DeleteRuleError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: DeleteRuleRequest,
  output: DeleteRuleResponse,
  errors: [MnmRuleNotFound, Forbidden],
}));

// =============================================================================
// RuleAdvertisement
// =============================================================================

export interface PatchRuleAdvertisementRequest {
  ruleId: string;
  /** Path param */
  accountId: string;
  /** Body param */
  body: unknown;
}

export const PatchRuleAdvertisementRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      ruleId: Schema.String.pipe(T.HttpPath("ruleId")),
      accountId: Schema.String.pipe(T.HttpPath("account_id")),
      body: Schema.Unknown.pipe(T.HttpBody()),
    }).pipe(
      T.Http({
        method: "PATCH",
        path: "/accounts/{account_id}/mnm/rules/{ruleId}/advertisement",
      }),
    ),
  ) as unknown as Schema.Schema<PatchRuleAdvertisementRequest>;

export interface PatchRuleAdvertisementResponse {
  /** Toggle on if you would like Cloudflare to automatically advertise the IP Prefixes within the rule via Magic Transit when the rule is triggered. Only available for users of Magic Transit. */
  automaticAdvertisement: boolean | null;
}

export const PatchRuleAdvertisementResponse =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      automaticAdvertisement: Schema.Union([Schema.Boolean, Schema.Null]),
    })
      .pipe(
        Schema.encodeKeys({
          automaticAdvertisement: "automatic_advertisement",
        }),
      )
      .pipe(T.ResponsePath("result")),
  ) as unknown as Schema.Schema<PatchRuleAdvertisementResponse>;

export type PatchRuleAdvertisementError = DefaultErrors;

export const patchRuleAdvertisement: API.OperationMethod<
  PatchRuleAdvertisementRequest,
  PatchRuleAdvertisementResponse,
  PatchRuleAdvertisementError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: PatchRuleAdvertisementRequest,
  output: PatchRuleAdvertisementResponse,
  errors: [],
}));

// =============================================================================
// VpcFlowToken
// =============================================================================

export interface CreateVpcFlowTokenRequest {
  accountId: string;
}

export const CreateVpcFlowTokenRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      accountId: Schema.String.pipe(T.HttpPath("account_id")),
    }).pipe(
      T.Http({
        method: "POST",
        path: "/accounts/{account_id}/mnm/vpc-flows/token",
      }),
    ),
  ) as unknown as Schema.Schema<CreateVpcFlowTokenRequest>;

export type CreateVpcFlowTokenResponse = string;

export const CreateVpcFlowTokenResponse =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.String.pipe(T.ResponsePath("result")),
  ) as unknown as Schema.Schema<CreateVpcFlowTokenResponse>;

export type CreateVpcFlowTokenError = DefaultErrors;

export const createVpcFlowToken: API.OperationMethod<
  CreateVpcFlowTokenRequest,
  CreateVpcFlowTokenResponse,
  CreateVpcFlowTokenError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: CreateVpcFlowTokenRequest,
  output: CreateVpcFlowTokenResponse,
  errors: [],
}));
