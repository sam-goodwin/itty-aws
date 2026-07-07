/**
 * Cloudflare WORKERS-FOR-PLATFORMS API
 *
 * Generated from Cloudflare TypeScript SDK.
 * DO NOT EDIT - regenerate with: bun scripts/generate.ts --service workers-for-platforms
 */

import * as Schema from "@distilled.cloud/core/schema";
import type * as HttpClient from "effect/unstable/http/HttpClient";
import * as API from "../client/api.ts";
import * as T from "../traits.ts";
import type { Credentials } from "../credentials.ts";
import { type DefaultErrors } from "../errors.ts";
import { UploadableSchema } from "../schemas.ts";

// =============================================================================
// Errors
// =============================================================================

export class D1DatabaseNotFound extends T.applyErrorMatchers(
  Schema.TaggedErrorClass<D1DatabaseNotFound>()("D1DatabaseNotFound", {
    code: Schema.Number,
    message: Schema.String,
  }),
  [{ code: 10181 }],
) {}

export class DispatchNamespaceAlreadyExists extends T.applyErrorMatchers(
  Schema.TaggedErrorClass<DispatchNamespaceAlreadyExists>()(
    "DispatchNamespaceAlreadyExists",
    { code: Schema.Number, message: Schema.String },
  ),
  [{ code: 100120 }],
) {}

export class DispatchNamespaceNotFound extends T.applyErrorMatchers(
  Schema.TaggedErrorClass<DispatchNamespaceNotFound>()(
    "DispatchNamespaceNotFound",
    { code: Schema.Number, message: Schema.String },
  ),
  [{ code: 100119 }],
) {}

export class DispatchNamespaceScriptNotFound extends T.applyErrorMatchers(
  Schema.TaggedErrorClass<DispatchNamespaceScriptNotFound>()(
    "DispatchNamespaceScriptNotFound",
    { code: Schema.Number, message: Schema.String },
  ),
  [{ code: 10007 }],
) {}

export class DurableObjectClassNotFound extends T.applyErrorMatchers(
  Schema.TaggedErrorClass<DurableObjectClassNotFound>()(
    "DurableObjectClassNotFound",
    { code: Schema.Number, message: Schema.String },
  ),
  [{ code: 10061 }],
) {}

export class Forbidden extends T.applyErrorMatchers(
  Schema.TaggedErrorClass<Forbidden>()("Forbidden", {
    code: Schema.Number,
    message: Schema.String,
  }),
  [{ status: 403 }],
) {}

export class HyperdriveConfigNotFound extends T.applyErrorMatchers(
  Schema.TaggedErrorClass<HyperdriveConfigNotFound>()(
    "HyperdriveConfigNotFound",
    { code: Schema.Number, message: Schema.String },
  ),
  [{ code: 10157 }],
) {}

export class KVNamespaceNotFound extends T.applyErrorMatchers(
  Schema.TaggedErrorClass<KVNamespaceNotFound>()("KVNamespaceNotFound", {
    code: Schema.Number,
    message: Schema.String,
  }),
  [{ code: 10041 }],
) {}

export class MtlsCertificateNotFound extends T.applyErrorMatchers(
  Schema.TaggedErrorClass<MtlsCertificateNotFound>()(
    "MtlsCertificateNotFound",
    { code: Schema.Number, message: Schema.String },
  ),
  [{ code: 100143 }],
) {}

export class QueueNotFound extends T.applyErrorMatchers(
  Schema.TaggedErrorClass<QueueNotFound>()("QueueNotFound", {
    code: Schema.Number,
    message: Schema.String,
  }),
  [{ code: 11000 }],
) {}

export class R2BucketNotFound extends T.applyErrorMatchers(
  Schema.TaggedErrorClass<R2BucketNotFound>()("R2BucketNotFound", {
    code: Schema.Number,
    message: Schema.String,
  }),
  [{ code: 10085 }],
) {}

export class SecretsStoreBindingNotFound extends T.applyErrorMatchers(
  Schema.TaggedErrorClass<SecretsStoreBindingNotFound>()(
    "SecretsStoreBindingNotFound",
    { code: Schema.Number, message: Schema.String },
  ),
  [{ code: 10182 }],
) {}

export class ServiceBindingNotFound extends T.applyErrorMatchers(
  Schema.TaggedErrorClass<ServiceBindingNotFound>()("ServiceBindingNotFound", {
    code: Schema.Number,
    message: Schema.String,
  }),
  [{ code: 10144 }],
) {}

export class VectorizeIndexNotFound extends T.applyErrorMatchers(
  Schema.TaggedErrorClass<VectorizeIndexNotFound>()("VectorizeIndexNotFound", {
    code: Schema.Number,
    message: Schema.String,
  }),
  [{ code: 10159 }],
) {}

// =============================================================================
// Shared nested schemas (hoisted, module-private)
// =============================================================================

interface ListDispatchNamespacesResponseResult {
  /** Identifier. */
  createdBy?: string | null;
  /** When the script was created. */
  createdOn?: string | null;
  /** Identifier. */
  modifiedBy?: string | null;
  /** When the script was last modified. */
  modifiedOn?: string | null;
  /** API Resource UUID tag. */
  namespaceId?: string | null;
  /** Name of the Workers for Platforms dispatch namespace. */
  namespaceName?: string | null;
  /** The current number of scripts in this Dispatch Namespace. */
  scriptCount?: number | null;
  /** Whether the Workers in the namespace are executed in a "trusted" manner. When a Worker is trusted, it has access to the shared caches for the zone in the Cache API, and has access to the `request.cf`  */
  trustedWorkers?: boolean | null;
}
const ListDispatchNamespacesResponseResult =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      createdBy: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
      createdOn: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
      modifiedBy: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
      modifiedOn: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
      namespaceId: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
      namespaceName: Schema.optional(
        Schema.Union([Schema.String, Schema.Null]),
      ),
      scriptCount: Schema.optional(Schema.Union([Schema.Number, Schema.Null])),
      trustedWorkers: Schema.optional(
        Schema.Union([Schema.Boolean, Schema.Null]),
      ),
    }).pipe(
      Schema.encodeKeys({
        createdBy: "created_by",
        createdOn: "created_on",
        modifiedBy: "modified_by",
        modifiedOn: "modified_on",
        namespaceId: "namespace_id",
        namespaceName: "namespace_name",
        scriptCount: "script_count",
        trustedWorkers: "trusted_workers",
      }),
    ),
  ) as unknown as Schema.Codec<ListDispatchNamespacesResponseResult>;

interface NamedHandler {
  /** The names of handlers exported as part of the named export. */
  handlers?: string[] | null;
  /** The name of the export. */
  name?: string | null;
}
const NamedHandler = /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    handlers: Schema.optional(
      Schema.Union([Schema.Array(Schema.String), Schema.Null]),
    ),
    name: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
  }),
) as unknown as Schema.Codec<NamedHandler>;

interface Logs {
  /** Whether logs are enabled for the Worker. */
  enabled: boolean;
  /** Whether [invocation logs](https://developers.cloudflare.com/workers/observability/logs/workers-logs/#invocation-logs) are enabled for the Worker. */
  invocationLogs: boolean;
  /** A list of destinations where logs will be exported to. */
  destinations?: string[] | null;
  /** The sampling rate for logs. From 0 to 1 (1 = 100%, 0.1 = 10%). Default is 1. */
  headSamplingRate?: number | null;
  /** Whether log persistence is enabled for the Worker. */
  persist?: boolean | null;
}
const Logs = /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    enabled: Schema.Boolean,
    invocationLogs: Schema.Boolean,
    destinations: Schema.optional(
      Schema.Union([Schema.Array(Schema.String), Schema.Null]),
    ),
    headSamplingRate: Schema.optional(
      Schema.Union([Schema.Number, Schema.Null]),
    ),
    persist: Schema.optional(Schema.Union([Schema.Boolean, Schema.Null])),
  }).pipe(
    Schema.encodeKeys({
      enabled: "enabled",
      invocationLogs: "invocation_logs",
      destinations: "destinations",
      headSamplingRate: "head_sampling_rate",
      persist: "persist",
    }),
  ),
) as unknown as Schema.Codec<Logs>;

interface Traces {
  /** A list of destinations where traces will be exported to. */
  destinations?: string[] | null;
  /** Whether traces are enabled for the Worker. */
  enabled?: boolean | null;
  /** The sampling rate for traces. From 0 to 1 (1 = 100%, 0.1 = 10%). Default is 1. */
  headSamplingRate?: number | null;
  /** Whether trace persistence is enabled for the Worker. */
  persist?: boolean | null;
  /** Controls how inbound trace context (traceparent/tracestate) headers on incoming requests are handled. "authenticated" (default) honors inbound trace context only when accompanied by a valid trace auth */
  propagationPolicy?: "authenticated" | "accept" | (string & {}) | null;
}
const Traces = /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    destinations: Schema.optional(
      Schema.Union([Schema.Array(Schema.String), Schema.Null]),
    ),
    enabled: Schema.optional(Schema.Union([Schema.Boolean, Schema.Null])),
    headSamplingRate: Schema.optional(
      Schema.Union([Schema.Number, Schema.Null]),
    ),
    persist: Schema.optional(Schema.Union([Schema.Boolean, Schema.Null])),
    propagationPolicy: Schema.optional(
      Schema.Union([
        Schema.Union([
          Schema.Literals(["authenticated", "accept"]),
          Schema.String,
        ]),
        Schema.Null,
      ]),
    ),
  }).pipe(
    Schema.encodeKeys({
      destinations: "destinations",
      enabled: "enabled",
      headSamplingRate: "head_sampling_rate",
      persist: "persist",
      propagationPolicy: "propagation_policy",
    }),
  ),
) as unknown as Schema.Codec<Traces>;

interface Observability {
  /** Whether observability is enabled for the Worker. */
  enabled: boolean;
  /** The sampling rate for incoming requests. From 0 to 1 (1 = 100%, 0.1 = 10%). Default is 1. */
  headSamplingRate?: number | null;
  /** Log settings for the Worker. */
  logs?: {
    enabled: boolean;
    invocationLogs: boolean;
    destinations?: string[] | null;
    headSamplingRate?: number | null;
    persist?: boolean | null;
  } | null;
  /** Trace settings for the Worker. */
  traces?: {
    destinations?: string[] | null;
    enabled?: boolean | null;
    headSamplingRate?: number | null;
    persist?: boolean | null;
    propagationPolicy?: "authenticated" | "accept" | (string & {}) | null;
  } | null;
}
const Observability = /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    enabled: Schema.Boolean,
    headSamplingRate: Schema.optional(
      Schema.Union([Schema.Number, Schema.Null]),
    ),
    logs: Schema.optional(Schema.Union([Logs, Schema.Null])),
    traces: Schema.optional(Schema.Union([Traces, Schema.Null])),
  }).pipe(
    Schema.encodeKeys({
      enabled: "enabled",
      headSamplingRate: "head_sampling_rate",
      logs: "logs",
      traces: "traces",
    }),
  ),
) as unknown as Schema.Codec<Observability>;

interface GetDispatchNamespaceScriptResponseScriptPlacement {
  /** Enables [Smart Placement](https://developers.cloudflare.com/workers/configuration/smart-placement). */
  mode: "smart";
  /** The last time the script was analyzed for [Smart Placement](https://developers.cloudflare.com/workers/configuration/smart-placement). */
  lastAnalyzedAt?: string | null;
  /** Status of [Smart Placement](https://developers.cloudflare.com/workers/configuration/smart-placement). */
  status?:
    | "SUCCESS"
    | "UNSUPPORTED_APPLICATION"
    | "INSUFFICIENT_INVOCATIONS"
    | (string & {})
    | null;
}
const GetDispatchNamespaceScriptResponseScriptPlacement =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      mode: Schema.Literal("smart"),
      lastAnalyzedAt: Schema.optional(
        Schema.Union([Schema.String, Schema.Null]),
      ),
      status: Schema.optional(
        Schema.Union([
          Schema.Union([
            Schema.Literals([
              "SUCCESS",
              "UNSUPPORTED_APPLICATION",
              "INSUFFICIENT_INVOCATIONS",
            ]),
            Schema.String,
          ]),
          Schema.Null,
        ]),
      ),
    }).pipe(
      Schema.encodeKeys({
        mode: "mode",
        lastAnalyzedAt: "last_analyzed_at",
        status: "status",
      }),
    ),
  ) as unknown as Schema.Codec<GetDispatchNamespaceScriptResponseScriptPlacement>;

interface GetDispatchNamespaceScriptResponseScriptPlacement1 {
  /** Cloud region for targeted placement in format 'provider:region'. */
  region: string;
  /** The last time the script was analyzed for [Smart Placement](https://developers.cloudflare.com/workers/configuration/smart-placement). */
  lastAnalyzedAt?: string | null;
  /** Status of [Smart Placement](https://developers.cloudflare.com/workers/configuration/smart-placement). */
  status?:
    | "SUCCESS"
    | "UNSUPPORTED_APPLICATION"
    | "INSUFFICIENT_INVOCATIONS"
    | (string & {})
    | null;
}
const GetDispatchNamespaceScriptResponseScriptPlacement1 =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      region: Schema.String,
      lastAnalyzedAt: Schema.optional(
        Schema.Union([Schema.String, Schema.Null]),
      ),
      status: Schema.optional(
        Schema.Union([
          Schema.Union([
            Schema.Literals([
              "SUCCESS",
              "UNSUPPORTED_APPLICATION",
              "INSUFFICIENT_INVOCATIONS",
            ]),
            Schema.String,
          ]),
          Schema.Null,
        ]),
      ),
    }).pipe(
      Schema.encodeKeys({
        region: "region",
        lastAnalyzedAt: "last_analyzed_at",
        status: "status",
      }),
    ),
  ) as unknown as Schema.Codec<GetDispatchNamespaceScriptResponseScriptPlacement1>;

interface GetDispatchNamespaceScriptResponseScriptPlacement2 {
  /** HTTP hostname for targeted placement. */
  hostname: string;
  /** The last time the script was analyzed for [Smart Placement](https://developers.cloudflare.com/workers/configuration/smart-placement). */
  lastAnalyzedAt?: string | null;
  /** Status of [Smart Placement](https://developers.cloudflare.com/workers/configuration/smart-placement). */
  status?:
    | "SUCCESS"
    | "UNSUPPORTED_APPLICATION"
    | "INSUFFICIENT_INVOCATIONS"
    | (string & {})
    | null;
}
const GetDispatchNamespaceScriptResponseScriptPlacement2 =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      hostname: Schema.String,
      lastAnalyzedAt: Schema.optional(
        Schema.Union([Schema.String, Schema.Null]),
      ),
      status: Schema.optional(
        Schema.Union([
          Schema.Union([
            Schema.Literals([
              "SUCCESS",
              "UNSUPPORTED_APPLICATION",
              "INSUFFICIENT_INVOCATIONS",
            ]),
            Schema.String,
          ]),
          Schema.Null,
        ]),
      ),
    }).pipe(
      Schema.encodeKeys({
        hostname: "hostname",
        lastAnalyzedAt: "last_analyzed_at",
        status: "status",
      }),
    ),
  ) as unknown as Schema.Codec<GetDispatchNamespaceScriptResponseScriptPlacement2>;

interface GetDispatchNamespaceScriptResponseScriptPlacement3 {
  /** TCP host and port for targeted placement. */
  host: string;
  /** The last time the script was analyzed for [Smart Placement](https://developers.cloudflare.com/workers/configuration/smart-placement). */
  lastAnalyzedAt?: string | null;
  /** Status of [Smart Placement](https://developers.cloudflare.com/workers/configuration/smart-placement). */
  status?:
    | "SUCCESS"
    | "UNSUPPORTED_APPLICATION"
    | "INSUFFICIENT_INVOCATIONS"
    | (string & {})
    | null;
}
const GetDispatchNamespaceScriptResponseScriptPlacement3 =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      host: Schema.String,
      lastAnalyzedAt: Schema.optional(
        Schema.Union([Schema.String, Schema.Null]),
      ),
      status: Schema.optional(
        Schema.Union([
          Schema.Union([
            Schema.Literals([
              "SUCCESS",
              "UNSUPPORTED_APPLICATION",
              "INSUFFICIENT_INVOCATIONS",
            ]),
            Schema.String,
          ]),
          Schema.Null,
        ]),
      ),
    }).pipe(
      Schema.encodeKeys({
        host: "host",
        lastAnalyzedAt: "last_analyzed_at",
        status: "status",
      }),
    ),
  ) as unknown as Schema.Codec<GetDispatchNamespaceScriptResponseScriptPlacement3>;

interface GetDispatchNamespaceScriptResponseScriptPlacement4 {
  /** Targeted placement mode. */
  mode: "targeted";
  /** Cloud region for targeted placement in format 'provider:region'. */
  region: string;
  /** The last time the script was analyzed for [Smart Placement](https://developers.cloudflare.com/workers/configuration/smart-placement). */
  lastAnalyzedAt?: string | null;
  /** Status of [Smart Placement](https://developers.cloudflare.com/workers/configuration/smart-placement). */
  status?:
    | "SUCCESS"
    | "UNSUPPORTED_APPLICATION"
    | "INSUFFICIENT_INVOCATIONS"
    | (string & {})
    | null;
}
const GetDispatchNamespaceScriptResponseScriptPlacement4 =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      mode: Schema.Literal("targeted"),
      region: Schema.String,
      lastAnalyzedAt: Schema.optional(
        Schema.Union([Schema.String, Schema.Null]),
      ),
      status: Schema.optional(
        Schema.Union([
          Schema.Union([
            Schema.Literals([
              "SUCCESS",
              "UNSUPPORTED_APPLICATION",
              "INSUFFICIENT_INVOCATIONS",
            ]),
            Schema.String,
          ]),
          Schema.Null,
        ]),
      ),
    }).pipe(
      Schema.encodeKeys({
        mode: "mode",
        region: "region",
        lastAnalyzedAt: "last_analyzed_at",
        status: "status",
      }),
    ),
  ) as unknown as Schema.Codec<GetDispatchNamespaceScriptResponseScriptPlacement4>;

interface GetDispatchNamespaceScriptResponseScriptPlacement5 {
  /** HTTP hostname for targeted placement. */
  hostname: string;
  /** Targeted placement mode. */
  mode: "targeted";
  /** The last time the script was analyzed for [Smart Placement](https://developers.cloudflare.com/workers/configuration/smart-placement). */
  lastAnalyzedAt?: string | null;
  /** Status of [Smart Placement](https://developers.cloudflare.com/workers/configuration/smart-placement). */
  status?:
    | "SUCCESS"
    | "UNSUPPORTED_APPLICATION"
    | "INSUFFICIENT_INVOCATIONS"
    | (string & {})
    | null;
}
const GetDispatchNamespaceScriptResponseScriptPlacement5 =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      hostname: Schema.String,
      mode: Schema.Literal("targeted"),
      lastAnalyzedAt: Schema.optional(
        Schema.Union([Schema.String, Schema.Null]),
      ),
      status: Schema.optional(
        Schema.Union([
          Schema.Union([
            Schema.Literals([
              "SUCCESS",
              "UNSUPPORTED_APPLICATION",
              "INSUFFICIENT_INVOCATIONS",
            ]),
            Schema.String,
          ]),
          Schema.Null,
        ]),
      ),
    }).pipe(
      Schema.encodeKeys({
        hostname: "hostname",
        mode: "mode",
        lastAnalyzedAt: "last_analyzed_at",
        status: "status",
      }),
    ),
  ) as unknown as Schema.Codec<GetDispatchNamespaceScriptResponseScriptPlacement5>;

interface GetDispatchNamespaceScriptResponseScriptPlacement6 {
  /** TCP host and port for targeted placement. */
  host: string;
  /** Targeted placement mode. */
  mode: "targeted";
  /** The last time the script was analyzed for [Smart Placement](https://developers.cloudflare.com/workers/configuration/smart-placement). */
  lastAnalyzedAt?: string | null;
  /** Status of [Smart Placement](https://developers.cloudflare.com/workers/configuration/smart-placement). */
  status?:
    | "SUCCESS"
    | "UNSUPPORTED_APPLICATION"
    | "INSUFFICIENT_INVOCATIONS"
    | (string & {})
    | null;
}
const GetDispatchNamespaceScriptResponseScriptPlacement6 =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      host: Schema.String,
      mode: Schema.Literal("targeted"),
      lastAnalyzedAt: Schema.optional(
        Schema.Union([Schema.String, Schema.Null]),
      ),
      status: Schema.optional(
        Schema.Union([
          Schema.Union([
            Schema.Literals([
              "SUCCESS",
              "UNSUPPORTED_APPLICATION",
              "INSUFFICIENT_INVOCATIONS",
            ]),
            Schema.String,
          ]),
          Schema.Null,
        ]),
      ),
    }).pipe(
      Schema.encodeKeys({
        host: "host",
        mode: "mode",
        lastAnalyzedAt: "last_analyzed_at",
        status: "status",
      }),
    ),
  ) as unknown as Schema.Codec<GetDispatchNamespaceScriptResponseScriptPlacement6>;

interface Region {
  /** Cloud region in format 'provider:region'. */
  region: string;
}
const Region = /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    region: Schema.String,
  }),
) as unknown as Schema.Codec<Region>;

interface Hostname {
  /** HTTP hostname for targeted placement. */
  hostname: string;
}
const Hostname = /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    hostname: Schema.String,
  }),
) as unknown as Schema.Codec<Hostname>;

interface Host {
  /** TCP host:port for targeted placement. */
  host: string;
}
const Host = /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    host: Schema.String,
  }),
) as unknown as Schema.Codec<Host>;

interface GetDispatchNamespaceScriptResponseScriptPlacement7 {
  /** Targeted placement mode. */
  mode: "targeted";
  /** Array of placement targets (currently limited to single target). */
  target: ({ region: string } | { hostname: string } | { host: string })[];
  /** The last time the script was analyzed for [Smart Placement](https://developers.cloudflare.com/workers/configuration/smart-placement). */
  lastAnalyzedAt?: string | null;
  /** Status of [Smart Placement](https://developers.cloudflare.com/workers/configuration/smart-placement). */
  status?:
    | "SUCCESS"
    | "UNSUPPORTED_APPLICATION"
    | "INSUFFICIENT_INVOCATIONS"
    | (string & {})
    | null;
}
const GetDispatchNamespaceScriptResponseScriptPlacement7 =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      mode: Schema.Literal("targeted"),
      target: Schema.Array(Schema.Union([Region, Hostname, Host])),
      lastAnalyzedAt: Schema.optional(
        Schema.Union([Schema.String, Schema.Null]),
      ),
      status: Schema.optional(
        Schema.Union([
          Schema.Union([
            Schema.Literals([
              "SUCCESS",
              "UNSUPPORTED_APPLICATION",
              "INSUFFICIENT_INVOCATIONS",
            ]),
            Schema.String,
          ]),
          Schema.Null,
        ]),
      ),
    }).pipe(
      Schema.encodeKeys({
        mode: "mode",
        target: "target",
        lastAnalyzedAt: "last_analyzed_at",
        status: "status",
      }),
    ),
  ) as unknown as Schema.Codec<GetDispatchNamespaceScriptResponseScriptPlacement7>;

interface ConsumerScript {
  /** Name of Worker that is to be the consumer. */
  service: string;
  /** Optional environment if the Worker utilizes one. */
  environment?: string | null;
  /** Optional dispatch namespace the script belongs to. */
  namespace?: string | null;
}
const ConsumerScript = /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    service: Schema.String,
    environment: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
    namespace: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
  }),
) as unknown as Schema.Codec<ConsumerScript>;

interface Script {
  /** The name used to identify the script. */
  id?: string | null;
  /** Date indicating targeted support in the Workers runtime. Backwards incompatible fixes to the runtime following this date will not affect this Worker. */
  compatibilityDate?: string | null;
  /** Flags that enable or disable certain features in the Workers runtime. Used to enable upcoming features or opt in or out of specific changes not included in a `compatibility_date`. */
  compatibilityFlags?: string[] | null;
  /** When the script was created. */
  createdOn?: string | null;
  /** Hashed script content, can be used in a If-None-Match header when updating. */
  etag?: string | null;
  /** The names of handlers exported as part of the default export. */
  handlers?: string[] | null;
  /** Whether a Worker contains assets. */
  hasAssets?: boolean | null;
  /** Whether a Worker contains modules. */
  hasModules?: boolean | null;
  /** The client most recently used to deploy this Worker. */
  lastDeployedFrom?: string | null;
  /** Whether Logpush is turned on for the Worker. */
  logpush?: boolean | null;
  /** The tag of the Durable Object migration that was most recently applied for this Worker. */
  migrationTag?: string | null;
  /** When the script was last modified. */
  modifiedOn?: string | null;
  /** Named exports, such as Durable Object class implementations and named entrypoints. */
  namedHandlers?: { handlers?: string[] | null; name?: string | null }[] | null;
  /** Observability settings for the Worker. */
  observability?: {
    enabled: boolean;
    headSamplingRate?: number | null;
    logs?: {
      enabled: boolean;
      invocationLogs: boolean;
      destinations?: string[] | null;
      headSamplingRate?: number | null;
      persist?: boolean | null;
    } | null;
    traces?: {
      destinations?: string[] | null;
      enabled?: boolean | null;
      headSamplingRate?: number | null;
      persist?: boolean | null;
      propagationPolicy?: "authenticated" | "accept" | (string & {}) | null;
    } | null;
  } | null;
  /** Configuration for [Smart Placement](https://developers.cloudflare.com/workers/configuration/smart-placement). Specify mode='smart' for Smart Placement, or one of region/hostname/host. */
  placement?:
    | {
        mode: "smart";
        lastAnalyzedAt?: string | null;
        status?:
          | "SUCCESS"
          | "UNSUPPORTED_APPLICATION"
          | "INSUFFICIENT_INVOCATIONS"
          | (string & {})
          | null;
      }
    | {
        region: string;
        lastAnalyzedAt?: string | null;
        status?:
          | "SUCCESS"
          | "UNSUPPORTED_APPLICATION"
          | "INSUFFICIENT_INVOCATIONS"
          | (string & {})
          | null;
      }
    | {
        hostname: string;
        lastAnalyzedAt?: string | null;
        status?:
          | "SUCCESS"
          | "UNSUPPORTED_APPLICATION"
          | "INSUFFICIENT_INVOCATIONS"
          | (string & {})
          | null;
      }
    | {
        host: string;
        lastAnalyzedAt?: string | null;
        status?:
          | "SUCCESS"
          | "UNSUPPORTED_APPLICATION"
          | "INSUFFICIENT_INVOCATIONS"
          | (string & {})
          | null;
      }
    | {
        mode: "targeted";
        region: string;
        lastAnalyzedAt?: string | null;
        status?:
          | "SUCCESS"
          | "UNSUPPORTED_APPLICATION"
          | "INSUFFICIENT_INVOCATIONS"
          | (string & {})
          | null;
      }
    | {
        hostname: string;
        mode: "targeted";
        lastAnalyzedAt?: string | null;
        status?:
          | "SUCCESS"
          | "UNSUPPORTED_APPLICATION"
          | "INSUFFICIENT_INVOCATIONS"
          | (string & {})
          | null;
      }
    | {
        host: string;
        mode: "targeted";
        lastAnalyzedAt?: string | null;
        status?:
          | "SUCCESS"
          | "UNSUPPORTED_APPLICATION"
          | "INSUFFICIENT_INVOCATIONS"
          | (string & {})
          | null;
      }
    | {
        mode: "targeted";
        target: (
          | { region: string }
          | { hostname: string }
          | { host: string }
        )[];
        lastAnalyzedAt?: string | null;
        status?:
          | "SUCCESS"
          | "UNSUPPORTED_APPLICATION"
          | "INSUFFICIENT_INVOCATIONS"
          | (string & {})
          | null;
      }
    | null;
  /** @deprecated Configuration for [Smart Placement](https://developers.cloudflare.com/workers/configuration/smart-placement). Specify mode='smart' for Smart Placement, or one of region/hostname/host. */
  placementMode?: "smart" | "targeted" | (string & {}) | null;
  /** @deprecated Status of [Smart Placement](https://developers.cloudflare.com/workers/configuration/smart-placement). */
  placementStatus?:
    | "SUCCESS"
    | "UNSUPPORTED_APPLICATION"
    | "INSUFFICIENT_INVOCATIONS"
    | (string & {})
    | null;
  /** The immutable ID of the script. */
  tag?: string | null;
  /** Tags associated with the Worker. */
  tags?: string[] | null;
  /** List of Workers that will consume logs from the attached Worker. */
  tailConsumers?:
    | {
        service: string;
        environment?: string | null;
        namespace?: string | null;
      }[]
    | null;
  /** Usage model for the Worker invocations. */
  usageModel?: "standard" | "bundled" | "unbound" | (string & {}) | null;
}
const Script = /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    id: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
    compatibilityDate: Schema.optional(
      Schema.Union([Schema.String, Schema.Null]),
    ),
    compatibilityFlags: Schema.optional(
      Schema.Union([Schema.Array(Schema.String), Schema.Null]),
    ),
    createdOn: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
    etag: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
    handlers: Schema.optional(
      Schema.Union([Schema.Array(Schema.String), Schema.Null]),
    ),
    hasAssets: Schema.optional(Schema.Union([Schema.Boolean, Schema.Null])),
    hasModules: Schema.optional(Schema.Union([Schema.Boolean, Schema.Null])),
    lastDeployedFrom: Schema.optional(
      Schema.Union([Schema.String, Schema.Null]),
    ),
    logpush: Schema.optional(Schema.Union([Schema.Boolean, Schema.Null])),
    migrationTag: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
    modifiedOn: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
    namedHandlers: Schema.optional(
      Schema.Union([Schema.Array(NamedHandler), Schema.Null]),
    ),
    observability: Schema.optional(Schema.Union([Observability, Schema.Null])),
    placement: Schema.optional(
      Schema.Union([
        Schema.Union([
          GetDispatchNamespaceScriptResponseScriptPlacement4,
          GetDispatchNamespaceScriptResponseScriptPlacement5,
          GetDispatchNamespaceScriptResponseScriptPlacement6,
          GetDispatchNamespaceScriptResponseScriptPlacement7,
          GetDispatchNamespaceScriptResponseScriptPlacement,
          GetDispatchNamespaceScriptResponseScriptPlacement1,
          GetDispatchNamespaceScriptResponseScriptPlacement2,
          GetDispatchNamespaceScriptResponseScriptPlacement3,
        ]),
        Schema.Null,
      ]),
    ),
    placementMode: Schema.optional(
      Schema.Union([
        Schema.Union([Schema.Literals(["smart", "targeted"]), Schema.String]),
        Schema.Null,
      ]),
    ),
    placementStatus: Schema.optional(
      Schema.Union([
        Schema.Union([
          Schema.Literals([
            "SUCCESS",
            "UNSUPPORTED_APPLICATION",
            "INSUFFICIENT_INVOCATIONS",
          ]),
          Schema.String,
        ]),
        Schema.Null,
      ]),
    ),
    tag: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
    tags: Schema.optional(
      Schema.Union([Schema.Array(Schema.String), Schema.Null]),
    ),
    tailConsumers: Schema.optional(
      Schema.Union([Schema.Array(ConsumerScript), Schema.Null]),
    ),
    usageModel: Schema.optional(
      Schema.Union([
        Schema.Union([
          Schema.Literals(["standard", "bundled", "unbound"]),
          Schema.String,
        ]),
        Schema.Null,
      ]),
    ),
  }).pipe(
    Schema.encodeKeys({
      id: "id",
      compatibilityDate: "compatibility_date",
      compatibilityFlags: "compatibility_flags",
      createdOn: "created_on",
      etag: "etag",
      handlers: "handlers",
      hasAssets: "has_assets",
      hasModules: "has_modules",
      lastDeployedFrom: "last_deployed_from",
      logpush: "logpush",
      migrationTag: "migration_tag",
      modifiedOn: "modified_on",
      namedHandlers: "named_handlers",
      observability: "observability",
      placement: "placement",
      placementMode: "placement_mode",
      placementStatus: "placement_status",
      tag: "tag",
      tags: "tags",
      tailConsumers: "tail_consumers",
      usageModel: "usage_model",
    }),
  ),
) as unknown as Schema.Codec<Script>;

interface Config {
  /** The contents of a \_headers file (used to attach custom headers on asset responses). */
  headers?: string | null;
  /** The contents of a \_redirects file (used to apply redirects or proxy paths ahead of asset serving). */
  redirects?: string | null;
  /** Determines the redirects and rewrites of requests for HTML content. */
  htmlHandling?:
    | "auto-trailing-slash"
    | "force-trailing-slash"
    | "drop-trailing-slash"
    | "none"
    | (string & {})
    | null;
  /** Determines the response when a request does not match a static asset, and there is no Worker script. */
  notFoundHandling?:
    | "none"
    | "404-page"
    | "single-page-application"
    | (string & {})
    | null;
  /** Contains a list path rules to control routing to either the Worker or assets. Glob (\ ) and negative (!) rules are supported. Rules must start with either '/' or '!/'. At least one non-negative rule m */
  runWorkerFirst?: string[] | boolean | null;
  /** @deprecated When true and the incoming request matches an asset, that will be served instead of invoking the Worker script. When false, requests will always invoke the Worker script. */
  serveDirectly?: boolean | null;
}
const Config = /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    headers: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
    redirects: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
    htmlHandling: Schema.optional(
      Schema.Union([
        Schema.Union([
          Schema.Literals([
            "auto-trailing-slash",
            "force-trailing-slash",
            "drop-trailing-slash",
            "none",
          ]),
          Schema.String,
        ]),
        Schema.Null,
      ]),
    ),
    notFoundHandling: Schema.optional(
      Schema.Union([
        Schema.Union([
          Schema.Literals(["none", "404-page", "single-page-application"]),
          Schema.String,
        ]),
        Schema.Null,
      ]),
    ),
    runWorkerFirst: Schema.optional(
      Schema.Union([
        Schema.Union([Schema.Array(Schema.String), Schema.Boolean]),
        Schema.Null,
      ]),
    ),
    serveDirectly: Schema.optional(Schema.Union([Schema.Boolean, Schema.Null])),
  }).pipe(
    Schema.encodeKeys({
      headers: "_headers",
      redirects: "_redirects",
      htmlHandling: "html_handling",
      notFoundHandling: "not_found_handling",
      runWorkerFirst: "run_worker_first",
      serveDirectly: "serve_directly",
    }),
  ),
) as unknown as Schema.Codec<Config>;

interface Assets {
  /** Configuration for assets within a Worker. */
  config?: {
    headers?: string | null;
    redirects?: string | null;
    htmlHandling?:
      | "auto-trailing-slash"
      | "force-trailing-slash"
      | "drop-trailing-slash"
      | "none"
      | (string & {})
      | null;
    notFoundHandling?:
      | "none"
      | "404-page"
      | "single-page-application"
      | (string & {})
      | null;
    runWorkerFirst?: string[] | boolean | null;
    serveDirectly?: boolean | null;
  } | null;
  /** Token provided upon successful upload of all files from a registered manifest. */
  jwt?: string | null;
}
const Assets = /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    config: Schema.optional(Schema.Union([Config, Schema.Null])),
    jwt: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
  }),
) as unknown as Schema.Codec<Assets>;

interface WorkersBindingKindAI {
  /** A JavaScript variable name for the binding. */
  name: string;
  /** The kind of resource that the binding provides. */
  type: "ai";
}
const WorkersBindingKindAI = /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    name: Schema.String,
    type: Schema.Literal("ai"),
  }),
) as unknown as Schema.Codec<WorkersBindingKindAI>;

interface WorkersBindingKindAISearch {
  /** The user-chosen instance name. Must exist at deploy time. The worker can search, chat, update, and manage items/jobs on this instance. */
  instanceName: string;
  /** A JavaScript variable name for the binding. */
  name: string;
  /** The kind of resource that the binding provides. */
  type: "ai_search";
  /** The namespace the instance belongs to. Defaults to "default" if omitted. Customers who don't use namespaces can simply omit this field. */
  namespace?: string | null;
}
const WorkersBindingKindAISearch = /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(
  () =>
    Schema.Struct({
      instanceName: Schema.String,
      name: Schema.String,
      type: Schema.Literal("ai_search"),
      namespace: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
    }).pipe(
      Schema.encodeKeys({
        instanceName: "instance_name",
        name: "name",
        type: "type",
        namespace: "namespace",
      }),
    ),
) as unknown as Schema.Codec<WorkersBindingKindAISearch>;

interface WorkersBindingKindAISearchNamespace {
  /** A JavaScript variable name for the binding. */
  name: string;
  /** The user-chosen namespace name. Must exist before deploy -- Wrangler handles auto-creation on deploy failure (R2 bucket pattern). The "default" namespace is auto-created by config-api for new accounts */
  namespace: string;
  /** The kind of resource that the binding provides. */
  type: "ai_search_namespace";
}
const WorkersBindingKindAISearchNamespace =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      name: Schema.String,
      namespace: Schema.String,
      type: Schema.Literal("ai_search_namespace"),
    }),
  ) as unknown as Schema.Codec<WorkersBindingKindAISearchNamespace>;

interface WorkersBindingKindAnalyticsEngine {
  /** The name of the dataset to bind to. */
  dataset: string;
  /** A JavaScript variable name for the binding. */
  name: string;
  /** The kind of resource that the binding provides. */
  type: "analytics_engine";
}
const WorkersBindingKindAnalyticsEngine =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      dataset: Schema.String,
      name: Schema.String,
      type: Schema.Literal("analytics_engine"),
    }),
  ) as unknown as Schema.Codec<WorkersBindingKindAnalyticsEngine>;

interface WorkersBindingKindAssets {
  /** A JavaScript variable name for the binding. */
  name: string;
  /** The kind of resource that the binding provides. */
  type: "assets";
}
const WorkersBindingKindAssets = /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(
  () =>
    Schema.Struct({
      name: Schema.String,
      type: Schema.Literal("assets"),
    }),
) as unknown as Schema.Codec<WorkersBindingKindAssets>;

interface WorkersBindingKindBrowser {
  /** A JavaScript variable name for the binding. */
  name: string;
  /** The kind of resource that the binding provides. */
  type: "browser";
}
const WorkersBindingKindBrowser = /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(
  () =>
    Schema.Struct({
      name: Schema.String,
      type: Schema.Literal("browser"),
    }),
) as unknown as Schema.Codec<WorkersBindingKindBrowser>;

interface WorkersBindingKindD1 {
  /** Identifier of the D1 database to bind to. */
  databaseId: string;
  /** A JavaScript variable name for the binding. */
  name: string;
  /** The kind of resource that the binding provides. */
  type: "d1";
  /** @deprecated This property has been renamed to `database_id`. */
  id?: string | null;
}
const WorkersBindingKindD1 = /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    databaseId: Schema.String,
    name: Schema.String,
    type: Schema.Literal("d1"),
    id: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
  }).pipe(
    Schema.encodeKeys({
      databaseId: "database_id",
      name: "name",
      type: "type",
      id: "id",
    }),
  ),
) as unknown as Schema.Codec<WorkersBindingKindD1>;

interface WorkersBindingKindDataBlob {
  /** A JavaScript variable name for the binding. */
  name: string;
  /** The name of the file containing the data content. Only accepted for `service worker syntax` Workers. */
  part: string;
  /** @deprecated The kind of resource that the binding provides. */
  type: "data_blob";
}
const WorkersBindingKindDataBlob = /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(
  () =>
    Schema.Struct({
      name: Schema.String,
      part: Schema.String,
      type: Schema.Literal("data_blob"),
    }),
) as unknown as Schema.Codec<WorkersBindingKindDataBlob>;

interface Param {
  /** Name of the parameter. */
  name: string;
}
const Param = /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    name: Schema.String,
  }),
) as unknown as Schema.Codec<Param>;

interface Worker {
  /** Entrypoint to invoke on the outbound worker. */
  entrypoint?: string | null;
  /** Environment of the outbound worker. */
  environment?: string | null;
  /** Name of the outbound worker. */
  service?: string | null;
}
const Worker = /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    entrypoint: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
    environment: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
    service: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
  }),
) as unknown as Schema.Codec<Worker>;

interface Outbound {
  /** Pass information from the Dispatch Worker to the Outbound Worker through the parameters. */
  params?: { name: string }[] | null;
  /** Outbound worker. */
  worker?: {
    entrypoint?: string | null;
    environment?: string | null;
    service?: string | null;
  } | null;
}
const Outbound = /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    params: Schema.optional(Schema.Union([Schema.Array(Param), Schema.Null])),
    worker: Schema.optional(Schema.Union([Worker, Schema.Null])),
  }),
) as unknown as Schema.Codec<Outbound>;

interface WorkersBindingKindDispatchNamespace {
  /** A JavaScript variable name for the binding. */
  name: string;
  /** The name of the dispatch namespace. */
  namespace: string;
  /** The kind of resource that the binding provides. */
  type: "dispatch_namespace";
  /** Outbound worker. */
  outbound?: {
    params?: { name: string }[] | null;
    worker?: {
      entrypoint?: string | null;
      environment?: string | null;
      service?: string | null;
    } | null;
  } | null;
}
const WorkersBindingKindDispatchNamespace =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      name: Schema.String,
      namespace: Schema.String,
      type: Schema.Literal("dispatch_namespace"),
      outbound: Schema.optional(Schema.Union([Outbound, Schema.Null])),
    }),
  ) as unknown as Schema.Codec<WorkersBindingKindDispatchNamespace>;

interface WorkersBindingKindDurableObjectNamespace {
  /** A JavaScript variable name for the binding. */
  name: string;
  /** The kind of resource that the binding provides. */
  type: "durable_object_namespace";
  /** The exported class name of the Durable Object. */
  className?: string | null;
  /** The dispatch namespace the Durable Object script belongs to. */
  dispatchNamespace?: string | null;
  /** The environment of the script_name to bind to. */
  environment?: string | null;
  /** Namespace identifier tag. */
  namespaceId?: string | null;
  /** The script where the Durable Object is defined, if it is external to this Worker. */
  scriptName?: string | null;
}
const WorkersBindingKindDurableObjectNamespace =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      name: Schema.String,
      type: Schema.Literal("durable_object_namespace"),
      className: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
      dispatchNamespace: Schema.optional(
        Schema.Union([Schema.String, Schema.Null]),
      ),
      environment: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
      namespaceId: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
      scriptName: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
    }).pipe(
      Schema.encodeKeys({
        name: "name",
        type: "type",
        className: "class_name",
        dispatchNamespace: "dispatch_namespace",
        environment: "environment",
        namespaceId: "namespace_id",
        scriptName: "script_name",
      }),
    ),
  ) as unknown as Schema.Codec<WorkersBindingKindDurableObjectNamespace>;

interface WorkersBindingKindHyperdrive {
  /** Identifier of the Hyperdrive connection to bind to. */
  id: string;
  /** A JavaScript variable name for the binding. */
  name: string;
  /** The kind of resource that the binding provides. */
  type: "hyperdrive";
}
const WorkersBindingKindHyperdrive = /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(
  () =>
    Schema.Struct({
      id: Schema.String,
      name: Schema.String,
      type: Schema.Literal("hyperdrive"),
    }),
) as unknown as Schema.Codec<WorkersBindingKindHyperdrive>;

interface WorkersBindingKindInherit {
  /** The name of the inherited binding. */
  name: string;
  /** The kind of resource that the binding provides. */
  type: "inherit";
  /** The old name of the inherited binding. If set, the binding will be renamed from `old_name` to `name` in the new version. If not set, the binding will keep the same name between versions. */
  oldName?: string | null;
  /** Identifier for the version to inherit the binding from, which can be the version ID or the literal "latest" to inherit from the latest version. Defaults to inheriting the binding from the latest versi */
  versionId?: string | null;
}
const WorkersBindingKindInherit = /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(
  () =>
    Schema.Struct({
      name: Schema.String,
      type: Schema.Literal("inherit"),
      oldName: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
      versionId: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
    }).pipe(
      Schema.encodeKeys({
        name: "name",
        type: "type",
        oldName: "old_name",
        versionId: "version_id",
      }),
    ),
) as unknown as Schema.Codec<WorkersBindingKindInherit>;

interface WorkersBindingKindImages {
  /** A JavaScript variable name for the binding. */
  name: string;
  /** The kind of resource that the binding provides. */
  type: "images";
}
const WorkersBindingKindImages = /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(
  () =>
    Schema.Struct({
      name: Schema.String,
      type: Schema.Literal("images"),
    }),
) as unknown as Schema.Codec<WorkersBindingKindImages>;

interface WorkersBindingKindJson {
  /** JSON data to use. */
  json: unknown;
  /** A JavaScript variable name for the binding. */
  name: string;
  /** The kind of resource that the binding provides. */
  type: "json";
}
const WorkersBindingKindJson = /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    json: Schema.Unknown,
    name: Schema.String,
    type: Schema.Literal("json"),
  }),
) as unknown as Schema.Codec<WorkersBindingKindJson>;

interface WorkersBindingKindKVNamespace {
  /** A JavaScript variable name for the binding. */
  name: string;
  /** Namespace identifier tag. */
  namespaceId: string;
  /** The kind of resource that the binding provides. */
  type: "kv_namespace";
}
const WorkersBindingKindKVNamespace =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      name: Schema.String,
      namespaceId: Schema.String,
      type: Schema.Literal("kv_namespace"),
    }).pipe(
      Schema.encodeKeys({
        name: "name",
        namespaceId: "namespace_id",
        type: "type",
      }),
    ),
  ) as unknown as Schema.Codec<WorkersBindingKindKVNamespace>;

interface WorkersBindingKindMedia {
  /** A JavaScript variable name for the binding. */
  name: string;
  /** The kind of resource that the binding provides. */
  type: "media";
}
const WorkersBindingKindMedia = /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    name: Schema.String,
    type: Schema.Literal("media"),
  }),
) as unknown as Schema.Codec<WorkersBindingKindMedia>;

interface WorkersBindingKindMTLSCertificate {
  /** Identifier of the certificate to bind to. */
  certificateId: string;
  /** A JavaScript variable name for the binding. */
  name: string;
  /** The kind of resource that the binding provides. */
  type: "mtls_certificate";
}
const WorkersBindingKindMTLSCertificate =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      certificateId: Schema.String,
      name: Schema.String,
      type: Schema.Literal("mtls_certificate"),
    }).pipe(
      Schema.encodeKeys({
        certificateId: "certificate_id",
        name: "name",
        type: "type",
      }),
    ),
  ) as unknown as Schema.Codec<WorkersBindingKindMTLSCertificate>;

interface WorkersBindingKindPlainText {
  /** A JavaScript variable name for the binding. */
  name: string;
  /** The text value to use. */
  text: string;
  /** The kind of resource that the binding provides. */
  type: "plain_text";
}
const WorkersBindingKindPlainText = /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(
  () =>
    Schema.Struct({
      name: Schema.String,
      text: Schema.String,
      type: Schema.Literal("plain_text"),
    }),
) as unknown as Schema.Codec<WorkersBindingKindPlainText>;

interface WorkersBindingKindPipelines {
  /** A JavaScript variable name for the binding. */
  name: string;
  /** Name of the Pipeline to bind to. */
  pipeline: string;
  /** The kind of resource that the binding provides. */
  type: "pipelines";
}
const WorkersBindingKindPipelines = /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(
  () =>
    Schema.Struct({
      name: Schema.String,
      pipeline: Schema.String,
      type: Schema.Literal("pipelines"),
    }),
) as unknown as Schema.Codec<WorkersBindingKindPipelines>;

interface WorkersBindingKindQueue {
  /** A JavaScript variable name for the binding. */
  name: string;
  /** Name of the Queue to bind to. */
  queueName: string;
  /** The kind of resource that the binding provides. */
  type: "queue";
}
const WorkersBindingKindQueue = /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    name: Schema.String,
    queueName: Schema.String,
    type: Schema.Literal("queue"),
  }).pipe(
    Schema.encodeKeys({ name: "name", queueName: "queue_name", type: "type" }),
  ),
) as unknown as Schema.Codec<WorkersBindingKindQueue>;

interface Simple {
  /** The limit (requests per period). */
  limit: number;
  /** The period in seconds. */
  period: number;
  /** Duration in seconds to apply the mitigation action after the rate limit is exceeded. Valid values are 0 (disabled), 10, or multiples of 60 up to 86400. Must be greater than or equal to the period when */
  mitigationTimeout?: number | null;
}
const Simple = /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    limit: Schema.Number,
    period: Schema.Number,
    mitigationTimeout: Schema.optional(
      Schema.Union([Schema.Number, Schema.Null]),
    ),
  }).pipe(
    Schema.encodeKeys({
      limit: "limit",
      period: "period",
      mitigationTimeout: "mitigation_timeout",
    }),
  ),
) as unknown as Schema.Codec<Simple>;

interface WorkersBindingKindRatelimit {
  /** A JavaScript variable name for the binding. */
  name: string;
  /** Identifier of the rate limit namespace to bind to. */
  namespaceId: string;
  /** The rate limit configuration. */
  simple: { limit: number; period: number; mitigationTimeout?: number | null };
  /** The kind of resource that the binding provides. */
  type: "ratelimit";
}
const WorkersBindingKindRatelimit = /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(
  () =>
    Schema.Struct({
      name: Schema.String,
      namespaceId: Schema.String,
      simple: Simple,
      type: Schema.Literal("ratelimit"),
    }).pipe(
      Schema.encodeKeys({
        name: "name",
        namespaceId: "namespace_id",
        simple: "simple",
        type: "type",
      }),
    ),
) as unknown as Schema.Codec<WorkersBindingKindRatelimit>;

interface WorkersBindingKindR2Bucket {
  /** R2 bucket to bind to. */
  bucketName: string;
  /** A JavaScript variable name for the binding. */
  name: string;
  /** The kind of resource that the binding provides. */
  type: "r2_bucket";
  /** The [jurisdiction](https://developers.cloudflare.com/r2/reference/data-location/#jurisdictional-restrictions) of the R2 bucket. */
  jurisdiction?: "eu" | "fedramp" | "fedramp-high" | (string & {}) | null;
}
const WorkersBindingKindR2Bucket = /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(
  () =>
    Schema.Struct({
      bucketName: Schema.String,
      name: Schema.String,
      type: Schema.Literal("r2_bucket"),
      jurisdiction: Schema.optional(
        Schema.Union([
          Schema.Union([
            Schema.Literals(["eu", "fedramp", "fedramp-high"]),
            Schema.String,
          ]),
          Schema.Null,
        ]),
      ),
    }).pipe(
      Schema.encodeKeys({
        bucketName: "bucket_name",
        name: "name",
        type: "type",
        jurisdiction: "jurisdiction",
      }),
    ),
) as unknown as Schema.Codec<WorkersBindingKindR2Bucket>;

interface WorkersBindingKindSecretText {
  /** A JavaScript variable name for the binding. */
  name: string;
  /** The secret value to use. */
  text: string;
  /** The kind of resource that the binding provides. */
  type: "secret_text";
}
const WorkersBindingKindSecretText = /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(
  () =>
    Schema.Struct({
      name: Schema.String,
      text: Schema.String,
      type: Schema.Literal("secret_text"),
    }),
) as unknown as Schema.Codec<WorkersBindingKindSecretText>;

interface WorkersBindingKindSendEmail {
  /** A JavaScript variable name for the binding. */
  name: string;
  /** The kind of resource that the binding provides. */
  type: "send_email";
  /** List of allowed destination addresses. */
  allowedDestinationAddresses?: string[] | null;
  /** List of allowed sender addresses. */
  allowedSenderAddresses?: string[] | null;
  /** Destination address for the email. */
  destinationAddress?: string | null;
}
const WorkersBindingKindSendEmail = /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(
  () =>
    Schema.Struct({
      name: Schema.String,
      type: Schema.Literal("send_email"),
      allowedDestinationAddresses: Schema.optional(
        Schema.Union([Schema.Array(Schema.String), Schema.Null]),
      ),
      allowedSenderAddresses: Schema.optional(
        Schema.Union([Schema.Array(Schema.String), Schema.Null]),
      ),
      destinationAddress: Schema.optional(
        Schema.Union([Schema.String, Schema.Null]),
      ),
    }).pipe(
      Schema.encodeKeys({
        name: "name",
        type: "type",
        allowedDestinationAddresses: "allowed_destination_addresses",
        allowedSenderAddresses: "allowed_sender_addresses",
        destinationAddress: "destination_address",
      }),
    ),
) as unknown as Schema.Codec<WorkersBindingKindSendEmail>;

interface WorkersBindingKindService {
  /** A JavaScript variable name for the binding. */
  name: string;
  /** Name of Worker to bind to. */
  service: string;
  /** The kind of resource that the binding provides. */
  type: "service";
  /** Entrypoint to invoke on the target Worker. */
  entrypoint?: string | null;
  /** Optional environment if the Worker utilizes one. */
  environment?: string | null;
}
const WorkersBindingKindService = /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(
  () =>
    Schema.Struct({
      name: Schema.String,
      service: Schema.String,
      type: Schema.Literal("service"),
      entrypoint: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
      environment: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
    }),
) as unknown as Schema.Codec<WorkersBindingKindService>;

interface WorkersBindingKindTextBlob {
  /** A JavaScript variable name for the binding. */
  name: string;
  /** The name of the file containing the text content. Only accepted for `service worker syntax` Workers. */
  part: string;
  /** @deprecated The kind of resource that the binding provides. */
  type: "text_blob";
}
const WorkersBindingKindTextBlob = /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(
  () =>
    Schema.Struct({
      name: Schema.String,
      part: Schema.String,
      type: Schema.Literal("text_blob"),
    }),
) as unknown as Schema.Codec<WorkersBindingKindTextBlob>;

interface WorkersBindingKindVectorize {
  /** Name of the Vectorize index to bind to. */
  indexName: string;
  /** A JavaScript variable name for the binding. */
  name: string;
  /** The kind of resource that the binding provides. */
  type: "vectorize";
}
const WorkersBindingKindVectorize = /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(
  () =>
    Schema.Struct({
      indexName: Schema.String,
      name: Schema.String,
      type: Schema.Literal("vectorize"),
    }).pipe(
      Schema.encodeKeys({
        indexName: "index_name",
        name: "name",
        type: "type",
      }),
    ),
) as unknown as Schema.Codec<WorkersBindingKindVectorize>;

interface WorkersBindingKindVersionMetadata {
  /** A JavaScript variable name for the binding. */
  name: string;
  /** The kind of resource that the binding provides. */
  type: "version_metadata";
}
const WorkersBindingKindVersionMetadata =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      name: Schema.String,
      type: Schema.Literal("version_metadata"),
    }),
  ) as unknown as Schema.Codec<WorkersBindingKindVersionMetadata>;

interface WorkersBindingKindSecretsStoreSecret {
  /** A JavaScript variable name for the binding. */
  name: string;
  /** Name of the secret in the store. */
  secretName: string;
  /** ID of the store containing the secret. */
  storeId: string;
  /** The kind of resource that the binding provides. */
  type: "secrets_store_secret";
}
const WorkersBindingKindSecretsStoreSecret =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      name: Schema.String,
      secretName: Schema.String,
      storeId: Schema.String,
      type: Schema.Literal("secrets_store_secret"),
    }).pipe(
      Schema.encodeKeys({
        name: "name",
        secretName: "secret_name",
        storeId: "store_id",
        type: "type",
      }),
    ),
  ) as unknown as Schema.Codec<WorkersBindingKindSecretsStoreSecret>;

interface WorkersBindingKindFlagship {
  /** ID of the Flagship app to bind to for feature flag evaluation. */
  appId: string;
  /** A JavaScript variable name for the binding. */
  name: string;
  /** The kind of resource that the binding provides. */
  type: "flagship";
}
const WorkersBindingKindFlagship = /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(
  () =>
    Schema.Struct({
      appId: Schema.String,
      name: Schema.String,
      type: Schema.Literal("flagship"),
    }).pipe(Schema.encodeKeys({ appId: "app_id", name: "name", type: "type" })),
) as unknown as Schema.Codec<WorkersBindingKindFlagship>;

interface WorkersBindingKindSecretKey {
  /** Algorithm-specific key parameters. [Learn more](https://developer.mozilla.org/en-US/docs/Web/API/SubtleCrypto/importKey#algorithm). */
  algorithm: unknown;
  /** Data format of the key. [Learn more](https://developer.mozilla.org/en-US/docs/Web/API/SubtleCrypto/importKey#format). */
  format: "raw" | "pkcs8" | "spki" | "jwk" | (string & {});
  /** A JavaScript variable name for the binding. */
  name: string;
  /** The kind of resource that the binding provides. */
  type: "secret_key";
  /** Allowed operations with the key. [Learn more](https://developer.mozilla.org/en-US/docs/Web/API/SubtleCrypto/importKey#keyUsages). */
  usages: (
    | "encrypt"
    | "decrypt"
    | "sign"
    | "verify"
    | "deriveKey"
    | "deriveBits"
    | "wrapKey"
    | "unwrapKey"
    | (string & {})
  )[];
  /** Base64-encoded key data. Required if `format` is "raw", "pkcs8", or "spki". */
  keyBase64?: string | null;
  /** Key data in [JSON Web Key](https://developer.mozilla.org/en-US/docs/Web/API/SubtleCrypto/importKey#json_web_key) format. Required if `format` is "jwk". */
  keyJwk?: unknown | null;
}
const WorkersBindingKindSecretKey = /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(
  () =>
    Schema.Struct({
      algorithm: Schema.Unknown,
      format: Schema.Union([
        Schema.Literals(["raw", "pkcs8", "spki", "jwk"]),
        Schema.String,
      ]),
      name: Schema.String,
      type: Schema.Literal("secret_key"),
      usages: Schema.Array(
        Schema.Union([
          Schema.Literals([
            "encrypt",
            "decrypt",
            "sign",
            "verify",
            "deriveKey",
            "deriveBits",
            "wrapKey",
            "unwrapKey",
          ]),
          Schema.String,
        ]),
      ),
      keyBase64: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
      keyJwk: Schema.optional(Schema.Union([Schema.Unknown, Schema.Null])),
    }).pipe(
      Schema.encodeKeys({
        algorithm: "algorithm",
        format: "format",
        name: "name",
        type: "type",
        usages: "usages",
        keyBase64: "key_base64",
        keyJwk: "key_jwk",
      }),
    ),
) as unknown as Schema.Codec<WorkersBindingKindSecretKey>;

interface WorkersBindingKindWorkflow {
  /** A JavaScript variable name for the binding. */
  name: string;
  /** The kind of resource that the binding provides. */
  type: "workflow";
  /** Name of the Workflow to bind to. */
  workflowName: string;
  /** Class name of the Workflow. Should only be provided if the Workflow belongs to this script. */
  className?: string | null;
  /** Script name that contains the Workflow. If not provided, defaults to this script name. */
  scriptName?: string | null;
}
const WorkersBindingKindWorkflow = /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(
  () =>
    Schema.Struct({
      name: Schema.String,
      type: Schema.Literal("workflow"),
      workflowName: Schema.String,
      className: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
      scriptName: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
    }).pipe(
      Schema.encodeKeys({
        name: "name",
        type: "type",
        workflowName: "workflow_name",
        className: "class_name",
        scriptName: "script_name",
      }),
    ),
) as unknown as Schema.Codec<WorkersBindingKindWorkflow>;

interface WorkersBindingKindWasmModule {
  /** A JavaScript variable name for the binding. */
  name: string;
  /** The name of the file containing the WebAssembly module content. Only accepted for `service worker syntax` Workers. */
  part: string;
  /** @deprecated The kind of resource that the binding provides. */
  type: "wasm_module";
}
const WorkersBindingKindWasmModule = /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(
  () =>
    Schema.Struct({
      name: Schema.String,
      part: Schema.String,
      type: Schema.Literal("wasm_module"),
    }),
) as unknown as Schema.Codec<WorkersBindingKindWasmModule>;

interface WorkersBindingKindVPCService {
  /** A JavaScript variable name for the binding. */
  name: string;
  /** Identifier of the VPC service to bind to. */
  serviceId: string;
  /** The kind of resource that the binding provides. */
  type: "vpc_service";
}
const WorkersBindingKindVPCService = /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(
  () =>
    Schema.Struct({
      name: Schema.String,
      serviceId: Schema.String,
      type: Schema.Literal("vpc_service"),
    }).pipe(
      Schema.encodeKeys({
        name: "name",
        serviceId: "service_id",
        type: "type",
      }),
    ),
) as unknown as Schema.Codec<WorkersBindingKindVPCService>;

interface WorkersBindingKindVPCNetwork {
  /** A JavaScript variable name for the binding. */
  name: string;
  /** The kind of resource that the binding provides. */
  type: "vpc_network";
  /** Identifier of the network to bind to. Only "cf1:network" is currently supported. Mutually exclusive with tunnel_id. */
  networkId?: string | null;
  /** UUID of the Cloudflare Tunnel to bind to. Mutually exclusive with network_id. */
  tunnelId?: string | null;
}
const WorkersBindingKindVPCNetwork = /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(
  () =>
    Schema.Struct({
      name: Schema.String,
      type: Schema.Literal("vpc_network"),
      networkId: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
      tunnelId: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
    }).pipe(
      Schema.encodeKeys({
        name: "name",
        type: "type",
        networkId: "network_id",
        tunnelId: "tunnel_id",
      }),
    ),
) as unknown as Schema.Codec<WorkersBindingKindVPCNetwork>;

interface Limits {
  /** The amount of CPU time this Worker can use in milliseconds. */
  cpuMs?: number | null;
  /** The number of subrequests this Worker can make per request. */
  subrequests?: number | null;
}
const Limits = /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    cpuMs: Schema.optional(Schema.Union([Schema.Number, Schema.Null])),
    subrequests: Schema.optional(Schema.Union([Schema.Number, Schema.Null])),
  }).pipe(Schema.encodeKeys({ cpuMs: "cpu_ms", subrequests: "subrequests" })),
) as unknown as Schema.Codec<Limits>;

interface RenamedClass {
  from?: string | null;
  to?: string | null;
}
const RenamedClass = /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    from: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
    to: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
  }),
) as unknown as Schema.Codec<RenamedClass>;

interface TransferredClass {
  from?: string | null;
  fromScript?: string | null;
  to?: string | null;
}
const TransferredClass = /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    from: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
    fromScript: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
    to: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
  }).pipe(
    Schema.encodeKeys({ from: "from", fromScript: "from_script", to: "to" }),
  ),
) as unknown as Schema.Codec<TransferredClass>;

interface SingleStepMigrationParam {
  /** A list of classes to delete Durable Object namespaces from. */
  deletedClasses?: string[] | null;
  /** A list of classes to create Durable Object namespaces from. */
  newClasses?: string[] | null;
  /** A list of classes to create Durable Object namespaces with SQLite from. */
  newSqliteClasses?: string[] | null;
  /** Tag to set as the latest migration tag. */
  newTag?: string | null;
  /** Tag used to verify against the latest migration tag for this Worker. If they don't match, the upload is rejected. */
  oldTag?: string | null;
  /** A list of classes with Durable Object namespaces that were renamed. */
  renamedClasses?: { from?: string | null; to?: string | null }[] | null;
  /** A list of transfers for Durable Object namespaces from a different Worker and class to a class defined in this Worker. */
  transferredClasses?:
    | { from?: string | null; fromScript?: string | null; to?: string | null }[]
    | null;
}
const SingleStepMigrationParam = /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(
  () =>
    Schema.Struct({
      deletedClasses: Schema.optional(
        Schema.Union([Schema.Array(Schema.String), Schema.Null]),
      ),
      newClasses: Schema.optional(
        Schema.Union([Schema.Array(Schema.String), Schema.Null]),
      ),
      newSqliteClasses: Schema.optional(
        Schema.Union([Schema.Array(Schema.String), Schema.Null]),
      ),
      newTag: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
      oldTag: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
      renamedClasses: Schema.optional(
        Schema.Union([Schema.Array(RenamedClass), Schema.Null]),
      ),
      transferredClasses: Schema.optional(
        Schema.Union([Schema.Array(TransferredClass), Schema.Null]),
      ),
    }).pipe(
      Schema.encodeKeys({
        deletedClasses: "deleted_classes",
        newClasses: "new_classes",
        newSqliteClasses: "new_sqlite_classes",
        newTag: "new_tag",
        oldTag: "old_tag",
        renamedClasses: "renamed_classes",
        transferredClasses: "transferred_classes",
      }),
    ),
) as unknown as Schema.Codec<SingleStepMigrationParam>;

interface MigrationStepParam {
  /** A list of classes to delete Durable Object namespaces from. */
  deletedClasses?: string[] | null;
  /** A list of classes to create Durable Object namespaces from. */
  newClasses?: string[] | null;
  /** A list of classes to create Durable Object namespaces with SQLite from. */
  newSqliteClasses?: string[] | null;
  /** A list of classes with Durable Object namespaces that were renamed. */
  renamedClasses?: { from?: string | null; to?: string | null }[] | null;
  /** A list of transfers for Durable Object namespaces from a different Worker and class to a class defined in this Worker. */
  transferredClasses?:
    | { from?: string | null; fromScript?: string | null; to?: string | null }[]
    | null;
}
const MigrationStepParam = /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    deletedClasses: Schema.optional(
      Schema.Union([Schema.Array(Schema.String), Schema.Null]),
    ),
    newClasses: Schema.optional(
      Schema.Union([Schema.Array(Schema.String), Schema.Null]),
    ),
    newSqliteClasses: Schema.optional(
      Schema.Union([Schema.Array(Schema.String), Schema.Null]),
    ),
    renamedClasses: Schema.optional(
      Schema.Union([Schema.Array(RenamedClass), Schema.Null]),
    ),
    transferredClasses: Schema.optional(
      Schema.Union([Schema.Array(TransferredClass), Schema.Null]),
    ),
  }).pipe(
    Schema.encodeKeys({
      deletedClasses: "deleted_classes",
      newClasses: "new_classes",
      newSqliteClasses: "new_sqlite_classes",
      renamedClasses: "renamed_classes",
      transferredClasses: "transferred_classes",
    }),
  ),
) as unknown as Schema.Codec<MigrationStepParam>;

interface WorkersMultipleStepMigrations {
  /** Tag to set as the latest migration tag. */
  newTag?: string | null;
  /** Tag used to verify against the latest migration tag for this Worker. If they don't match, the upload is rejected. */
  oldTag?: string | null;
  /** Migrations to apply in order. */
  steps?:
    | {
        deletedClasses?: string[] | null;
        newClasses?: string[] | null;
        newSqliteClasses?: string[] | null;
        renamedClasses?: { from?: string | null; to?: string | null }[] | null;
        transferredClasses?:
          | {
              from?: string | null;
              fromScript?: string | null;
              to?: string | null;
            }[]
          | null;
      }[]
    | null;
}
const WorkersMultipleStepMigrations =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      newTag: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
      oldTag: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
      steps: Schema.optional(
        Schema.Union([Schema.Array(MigrationStepParam), Schema.Null]),
      ),
    }).pipe(
      Schema.encodeKeys({
        newTag: "new_tag",
        oldTag: "old_tag",
        steps: "steps",
      }),
    ),
  ) as unknown as Schema.Codec<WorkersMultipleStepMigrations>;

interface PutDispatchNamespaceScriptRequestMetadataPlacement {
  /** Enables [Smart Placement](https://developers.cloudflare.com/workers/configuration/smart-placement). */
  mode: "smart";
}
const PutDispatchNamespaceScriptRequestMetadataPlacement =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      mode: Schema.Literal("smart"),
    }),
  ) as unknown as Schema.Codec<PutDispatchNamespaceScriptRequestMetadataPlacement>;

interface PutDispatchNamespaceScriptRequestMetadataPlacement4 {
  /** Targeted placement mode. */
  mode: "targeted";
  /** Cloud region for targeted placement in format 'provider:region'. */
  region: string;
}
const PutDispatchNamespaceScriptRequestMetadataPlacement4 =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      mode: Schema.Literal("targeted"),
      region: Schema.String,
    }),
  ) as unknown as Schema.Codec<PutDispatchNamespaceScriptRequestMetadataPlacement4>;

interface PutDispatchNamespaceScriptRequestMetadataPlacement5 {
  /** HTTP hostname for targeted placement. */
  hostname: string;
  /** Targeted placement mode. */
  mode: "targeted";
}
const PutDispatchNamespaceScriptRequestMetadataPlacement5 =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      hostname: Schema.String,
      mode: Schema.Literal("targeted"),
    }),
  ) as unknown as Schema.Codec<PutDispatchNamespaceScriptRequestMetadataPlacement5>;

interface PutDispatchNamespaceScriptRequestMetadataPlacement6 {
  /** TCP host and port for targeted placement. */
  host: string;
  /** Targeted placement mode. */
  mode: "targeted";
}
const PutDispatchNamespaceScriptRequestMetadataPlacement6 =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      host: Schema.String,
      mode: Schema.Literal("targeted"),
    }),
  ) as unknown as Schema.Codec<PutDispatchNamespaceScriptRequestMetadataPlacement6>;

interface PutDispatchNamespaceScriptRequestMetadataPlacement7 {
  /** Targeted placement mode. */
  mode: "targeted";
  /** Array of placement targets (currently limited to single target). */
  target: ({ region: string } | { hostname: string } | { host: string })[];
}
const PutDispatchNamespaceScriptRequestMetadataPlacement7 =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      mode: Schema.Literal("targeted"),
      target: Schema.Array(Schema.Union([Region, Hostname, Host])),
    }),
  ) as unknown as Schema.Codec<PutDispatchNamespaceScriptRequestMetadataPlacement7>;

interface Metadata {
  /** Configuration for assets within a Worker. */
  assets?: {
    config?: {
      headers?: string | null;
      redirects?: string | null;
      htmlHandling?:
        | "auto-trailing-slash"
        | "force-trailing-slash"
        | "drop-trailing-slash"
        | "none"
        | (string & {})
        | null;
      notFoundHandling?:
        | "none"
        | "404-page"
        | "single-page-application"
        | (string & {})
        | null;
      runWorkerFirst?: string[] | boolean | null;
      serveDirectly?: boolean | null;
    } | null;
    jwt?: string | null;
  } | null;
  /** List of bindings attached to a Worker. You can find more about bindings on our docs: https://developers.cloudflare.com/workers/configuration/multipart-upload-metadata/#bindings. */
  bindings?:
    | (
        | { name: string; type: "ai" }
        | {
            instanceName: string;
            name: string;
            type: "ai_search";
            namespace?: string | null;
          }
        | { name: string; namespace: string; type: "ai_search_namespace" }
        | { dataset: string; name: string; type: "analytics_engine" }
        | { name: string; type: "assets" }
        | { name: string; type: "browser" }
        | { databaseId: string; name: string; type: "d1"; id?: string | null }
        | { name: string; part: string; type: "data_blob" }
        | {
            name: string;
            namespace: string;
            type: "dispatch_namespace";
            outbound?: {
              params?: { name: string }[] | null;
              worker?: {
                entrypoint?: string | null;
                environment?: string | null;
                service?: string | null;
              } | null;
            } | null;
          }
        | {
            name: string;
            type: "durable_object_namespace";
            className?: string | null;
            dispatchNamespace?: string | null;
            environment?: string | null;
            namespaceId?: string | null;
            scriptName?: string | null;
          }
        | { id: string; name: string; type: "hyperdrive" }
        | {
            name: string;
            type: "inherit";
            oldName?: string | null;
            versionId?: string | null;
          }
        | { name: string; type: "images" }
        | { json: unknown; name: string; type: "json" }
        | { name: string; namespaceId: string; type: "kv_namespace" }
        | { name: string; type: "media" }
        | { certificateId: string; name: string; type: "mtls_certificate" }
        | { name: string; text: string; type: "plain_text" }
        | { name: string; pipeline: string; type: "pipelines" }
        | { name: string; queueName: string; type: "queue" }
        | {
            name: string;
            namespaceId: string;
            simple: {
              limit: number;
              period: number;
              mitigationTimeout?: number | null;
            };
            type: "ratelimit";
          }
        | {
            bucketName: string;
            name: string;
            type: "r2_bucket";
            jurisdiction?:
              | "eu"
              | "fedramp"
              | "fedramp-high"
              | (string & {})
              | null;
          }
        | { name: string; text: string; type: "secret_text" }
        | {
            name: string;
            type: "send_email";
            allowedDestinationAddresses?: string[] | null;
            allowedSenderAddresses?: string[] | null;
            destinationAddress?: string | null;
          }
        | {
            name: string;
            service: string;
            type: "service";
            entrypoint?: string | null;
            environment?: string | null;
          }
        | { name: string; part: string; type: "text_blob" }
        | { indexName: string; name: string; type: "vectorize" }
        | { name: string; type: "version_metadata" }
        | {
            name: string;
            secretName: string;
            storeId: string;
            type: "secrets_store_secret";
          }
        | { appId: string; name: string; type: "flagship" }
        | {
            algorithm: unknown;
            format: "raw" | "pkcs8" | "spki" | "jwk" | (string & {});
            name: string;
            type: "secret_key";
            usages: (
              | "encrypt"
              | "decrypt"
              | "sign"
              | "verify"
              | "deriveKey"
              | "deriveBits"
              | "wrapKey"
              | "unwrapKey"
              | (string & {})
            )[];
            keyBase64?: string | null;
            keyJwk?: unknown | null;
          }
        | {
            name: string;
            type: "workflow";
            workflowName: string;
            className?: string | null;
            scriptName?: string | null;
          }
        | { name: string; part: string; type: "wasm_module" }
        | { name: string; serviceId: string; type: "vpc_service" }
        | {
            name: string;
            type: "vpc_network";
            networkId?: string | null;
            tunnelId?: string | null;
          }
      )[]
    | null;
  /** Name of the uploaded file that contains the script (e.g. the file adding a listener to the `fetch` event). Indicates a `service worker syntax` Worker. */
  bodyPart?: string | null;
  /** Date indicating targeted support in the Workers runtime. Backwards incompatible fixes to the runtime following this date will not affect this Worker. */
  compatibilityDate?: string | null;
  /** Flags that enable or disable certain features in the Workers runtime. Used to enable upcoming features or opt in or out of specific changes not included in a `compatibility_date`. */
  compatibilityFlags?: string[] | null;
  /** Retain assets which exist for a previously uploaded Worker version; used in lieu of providing a completion token. An explicit `assets` upload takes precedence over `keep_assets`. */
  keepAssets?: boolean | null;
  /** List of binding types to keep from previous_upload. */
  keepBindings?: string[] | null;
  /** Limits to apply for this Worker. */
  limits?: { cpuMs?: number | null; subrequests?: number | null } | null;
  /** Whether Logpush is turned on for the Worker. */
  logpush?: boolean | null;
  /** Name of the uploaded file that contains the main module (e.g. the file exporting a `fetch` handler). Indicates a `module syntax` Worker. */
  mainModule?: string | null;
  /** Migrations to apply for Durable Objects associated with this Worker. */
  migrations?:
    | {
        deletedClasses?: string[] | null;
        newClasses?: string[] | null;
        newSqliteClasses?: string[] | null;
        newTag?: string | null;
        oldTag?: string | null;
        renamedClasses?: { from?: string | null; to?: string | null }[] | null;
        transferredClasses?:
          | {
              from?: string | null;
              fromScript?: string | null;
              to?: string | null;
            }[]
          | null;
      }
    | {
        newTag?: string | null;
        oldTag?: string | null;
        steps?:
          | {
              deletedClasses?: string[] | null;
              newClasses?: string[] | null;
              newSqliteClasses?: string[] | null;
              renamedClasses?:
                | { from?: string | null; to?: string | null }[]
                | null;
              transferredClasses?:
                | {
                    from?: string | null;
                    fromScript?: string | null;
                    to?: string | null;
                  }[]
                | null;
            }[]
          | null;
      }
    | null;
  /** Observability settings for the Worker. */
  observability?: {
    enabled: boolean;
    headSamplingRate?: number | null;
    logs?: {
      enabled: boolean;
      invocationLogs: boolean;
      destinations?: string[] | null;
      headSamplingRate?: number | null;
      persist?: boolean | null;
    } | null;
    traces?: {
      destinations?: string[] | null;
      enabled?: boolean | null;
      headSamplingRate?: number | null;
      persist?: boolean | null;
      propagationPolicy?: "authenticated" | "accept" | (string & {}) | null;
    } | null;
  } | null;
  /** Configuration for [Smart Placement](https://developers.cloudflare.com/workers/configuration/smart-placement). Specify mode='smart' for Smart Placement, or one of region/hostname/host. */
  placement?:
    | { mode: "smart" }
    | { region: string }
    | { hostname: string }
    | { host: string }
    | { mode: "targeted"; region: string }
    | { hostname: string; mode: "targeted" }
    | { host: string; mode: "targeted" }
    | {
        mode: "targeted";
        target: (
          | { region: string }
          | { hostname: string }
          | { host: string }
        )[];
      }
    | null;
  /** List of strings to use as tags for this Worker. */
  tags?: string[] | null;
  /** List of Workers that will consume logs from the attached Worker. */
  tailConsumers?:
    | {
        service: string;
        environment?: string | null;
        namespace?: string | null;
      }[]
    | null;
  /** Usage model for the Worker invocations. */
  usageModel?: "standard" | "bundled" | "unbound" | (string & {}) | null;
}
const Metadata = /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    assets: Schema.optional(Schema.Union([Assets, Schema.Null])),
    bindings: Schema.optional(
      Schema.Union([
        Schema.Array(
          Schema.Union([
            WorkersBindingKindSecretKey,
            WorkersBindingKindRatelimit,
            WorkersBindingKindSecretsStoreSecret,
            WorkersBindingKindAISearch,
            WorkersBindingKindAISearchNamespace,
            WorkersBindingKindAnalyticsEngine,
            WorkersBindingKindD1,
            WorkersBindingKindDataBlob,
            WorkersBindingKindDispatchNamespace,
            WorkersBindingKindHyperdrive,
            WorkersBindingKindJson,
            WorkersBindingKindKVNamespace,
            WorkersBindingKindMTLSCertificate,
            WorkersBindingKindPlainText,
            WorkersBindingKindPipelines,
            WorkersBindingKindQueue,
            WorkersBindingKindR2Bucket,
            WorkersBindingKindSecretText,
            WorkersBindingKindService,
            WorkersBindingKindTextBlob,
            WorkersBindingKindVectorize,
            WorkersBindingKindFlagship,
            WorkersBindingKindWorkflow,
            WorkersBindingKindWasmModule,
            WorkersBindingKindVPCService,
            WorkersBindingKindAI,
            WorkersBindingKindAssets,
            WorkersBindingKindBrowser,
            WorkersBindingKindDurableObjectNamespace,
            WorkersBindingKindInherit,
            WorkersBindingKindImages,
            WorkersBindingKindMedia,
            WorkersBindingKindSendEmail,
            WorkersBindingKindVersionMetadata,
            WorkersBindingKindVPCNetwork,
          ]),
        ),
        Schema.Null,
      ]),
    ),
    bodyPart: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
    compatibilityDate: Schema.optional(
      Schema.Union([Schema.String, Schema.Null]),
    ),
    compatibilityFlags: Schema.optional(
      Schema.Union([Schema.Array(Schema.String), Schema.Null]),
    ),
    keepAssets: Schema.optional(Schema.Union([Schema.Boolean, Schema.Null])),
    keepBindings: Schema.optional(
      Schema.Union([Schema.Array(Schema.String), Schema.Null]),
    ),
    limits: Schema.optional(Schema.Union([Limits, Schema.Null])),
    logpush: Schema.optional(Schema.Union([Schema.Boolean, Schema.Null])),
    mainModule: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
    migrations: Schema.optional(
      Schema.Union([
        Schema.Union([SingleStepMigrationParam, WorkersMultipleStepMigrations]),
        Schema.Null,
      ]),
    ),
    observability: Schema.optional(Schema.Union([Observability, Schema.Null])),
    placement: Schema.optional(
      Schema.Union([
        Schema.Union([
          PutDispatchNamespaceScriptRequestMetadataPlacement4,
          PutDispatchNamespaceScriptRequestMetadataPlacement5,
          PutDispatchNamespaceScriptRequestMetadataPlacement6,
          PutDispatchNamespaceScriptRequestMetadataPlacement7,
          PutDispatchNamespaceScriptRequestMetadataPlacement,
          Region,
          Hostname,
          Host,
        ]),
        Schema.Null,
      ]),
    ),
    tags: Schema.optional(
      Schema.Union([Schema.Array(Schema.String), Schema.Null]),
    ),
    tailConsumers: Schema.optional(
      Schema.Union([Schema.Array(ConsumerScript), Schema.Null]),
    ),
    usageModel: Schema.optional(
      Schema.Union([
        Schema.Union([
          Schema.Literals(["standard", "bundled", "unbound"]),
          Schema.String,
        ]),
        Schema.Null,
      ]),
    ),
  }).pipe(
    Schema.encodeKeys({
      assets: "assets",
      bindings: "bindings",
      bodyPart: "body_part",
      compatibilityDate: "compatibility_date",
      compatibilityFlags: "compatibility_flags",
      keepAssets: "keep_assets",
      keepBindings: "keep_bindings",
      limits: "limits",
      logpush: "logpush",
      mainModule: "main_module",
      migrations: "migrations",
      observability: "observability",
      placement: "placement",
      tags: "tags",
      tailConsumers: "tail_consumers",
      usageModel: "usage_model",
    }),
  ),
) as unknown as Schema.Codec<Metadata>;

interface WorkersBindingKindSecretText2 {
  /** A JavaScript variable name for the binding. */
  name: string;
  /** The kind of resource that the binding provides. */
  type: "secret_text";
}
const WorkersBindingKindSecretText2 =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      name: Schema.String,
      type: Schema.Literal("secret_text"),
    }),
  ) as unknown as Schema.Codec<WorkersBindingKindSecretText2>;

interface WorkersBindingKindSecretKey2 {
  /** Algorithm-specific key parameters. [Learn more](https://developer.mozilla.org/en-US/docs/Web/API/SubtleCrypto/importKey#algorithm). */
  algorithm: unknown;
  /** Data format of the key. [Learn more](https://developer.mozilla.org/en-US/docs/Web/API/SubtleCrypto/importKey#format). */
  format: "raw" | "pkcs8" | "spki" | "jwk" | (string & {});
  /** A JavaScript variable name for the binding. */
  name: string;
  /** The kind of resource that the binding provides. */
  type: "secret_key";
  /** Allowed operations with the key. [Learn more](https://developer.mozilla.org/en-US/docs/Web/API/SubtleCrypto/importKey#keyUsages). */
  usages: (
    | "encrypt"
    | "decrypt"
    | "sign"
    | "verify"
    | "deriveKey"
    | "deriveBits"
    | "wrapKey"
    | "unwrapKey"
    | (string & {})
  )[];
}
const WorkersBindingKindSecretKey2 = /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(
  () =>
    Schema.Struct({
      algorithm: Schema.Unknown,
      format: Schema.Union([
        Schema.Literals(["raw", "pkcs8", "spki", "jwk"]),
        Schema.String,
      ]),
      name: Schema.String,
      type: Schema.Literal("secret_key"),
      usages: Schema.Array(
        Schema.Union([
          Schema.Literals([
            "encrypt",
            "decrypt",
            "sign",
            "verify",
            "deriveKey",
            "deriveBits",
            "wrapKey",
            "unwrapKey",
          ]),
          Schema.String,
        ]),
      ),
    }),
) as unknown as Schema.Codec<WorkersBindingKindSecretKey2>;

interface WorkerMetadataParam {
  /** Name of the part in the multipart request that contains the script (e.g. the file adding a listener to the `fetch` event). Indicates a `service worker syntax` Worker. */
  bodyPart?: string | null;
  /** Name of the part in the multipart request that contains the main module (e.g. the file exporting a `fetch` handler). Indicates a `module syntax` Worker. */
  mainModule?: string | null;
}
const WorkerMetadataParam = /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    bodyPart: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
    mainModule: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
  }).pipe(
    Schema.encodeKeys({ bodyPart: "body_part", mainModule: "main_module" }),
  ),
) as unknown as Schema.Codec<WorkerMetadataParam>;

interface GetDispatchNamespaceScriptSettingResponsePlacement8 {
  mode?: "smart" | null;
  status?:
    | "SUCCESS"
    | "UNSUPPORTED_APPLICATION"
    | "INSUFFICIENT_INVOCATIONS"
    | (string & {})
    | null;
  lastAnalyzedAt?: string | null;
}
const GetDispatchNamespaceScriptSettingResponsePlacement8 =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      mode: Schema.optional(
        Schema.Union([Schema.Literal("smart"), Schema.Null]),
      ),
      status: Schema.optional(
        Schema.Union([
          Schema.Union([
            Schema.Literals([
              "SUCCESS",
              "UNSUPPORTED_APPLICATION",
              "INSUFFICIENT_INVOCATIONS",
            ]),
            Schema.String,
          ]),
          Schema.Null,
        ]),
      ),
      lastAnalyzedAt: Schema.optional(
        Schema.Union([Schema.String, Schema.Null]),
      ),
    }).pipe(
      Schema.encodeKeys({
        mode: "mode",
        status: "status",
        lastAnalyzedAt: "last_analyzed_at",
      }),
    ),
  ) as unknown as Schema.Codec<GetDispatchNamespaceScriptSettingResponsePlacement8>;

interface Settings {
  /** List of bindings attached to a Worker. You can find more about bindings on our docs: https://developers.cloudflare.com/workers/configuration/multipart-upload-metadata/#bindings. */
  bindings?:
    | (
        | { name: string; type: "ai" }
        | {
            instanceName: string;
            name: string;
            type: "ai_search";
            namespace?: string | null;
          }
        | { name: string; namespace: string; type: "ai_search_namespace" }
        | { dataset: string; name: string; type: "analytics_engine" }
        | { name: string; type: "assets" }
        | { name: string; type: "browser" }
        | { databaseId: string; name: string; type: "d1"; id?: string | null }
        | { name: string; part: string; type: "data_blob" }
        | {
            name: string;
            namespace: string;
            type: "dispatch_namespace";
            outbound?: {
              params?: { name: string }[] | null;
              worker?: {
                entrypoint?: string | null;
                environment?: string | null;
                service?: string | null;
              } | null;
            } | null;
          }
        | {
            name: string;
            type: "durable_object_namespace";
            className?: string | null;
            dispatchNamespace?: string | null;
            environment?: string | null;
            namespaceId?: string | null;
            scriptName?: string | null;
          }
        | { id: string; name: string; type: "hyperdrive" }
        | {
            name: string;
            type: "inherit";
            oldName?: string | null;
            versionId?: string | null;
          }
        | { name: string; type: "images" }
        | { json: unknown; name: string; type: "json" }
        | { name: string; namespaceId: string; type: "kv_namespace" }
        | { name: string; type: "media" }
        | { certificateId: string; name: string; type: "mtls_certificate" }
        | { name: string; text: string; type: "plain_text" }
        | { name: string; pipeline: string; type: "pipelines" }
        | { name: string; queueName: string; type: "queue" }
        | {
            name: string;
            namespaceId: string;
            simple: {
              limit: number;
              period: number;
              mitigationTimeout?: number | null;
            };
            type: "ratelimit";
          }
        | {
            bucketName: string;
            name: string;
            type: "r2_bucket";
            jurisdiction?:
              | "eu"
              | "fedramp"
              | "fedramp-high"
              | (string & {})
              | null;
          }
        | { name: string; text: string; type: "secret_text" }
        | {
            name: string;
            type: "send_email";
            allowedDestinationAddresses?: string[] | null;
            allowedSenderAddresses?: string[] | null;
            destinationAddress?: string | null;
          }
        | {
            name: string;
            service: string;
            type: "service";
            entrypoint?: string | null;
            environment?: string | null;
          }
        | { name: string; part: string; type: "text_blob" }
        | { indexName: string; name: string; type: "vectorize" }
        | { name: string; type: "version_metadata" }
        | {
            name: string;
            secretName: string;
            storeId: string;
            type: "secrets_store_secret";
          }
        | { appId: string; name: string; type: "flagship" }
        | {
            algorithm: unknown;
            format: "raw" | "pkcs8" | "spki" | "jwk" | (string & {});
            name: string;
            type: "secret_key";
            usages: (
              | "encrypt"
              | "decrypt"
              | "sign"
              | "verify"
              | "deriveKey"
              | "deriveBits"
              | "wrapKey"
              | "unwrapKey"
              | (string & {})
            )[];
            keyBase64?: string | null;
            keyJwk?: unknown | null;
          }
        | {
            name: string;
            type: "workflow";
            workflowName: string;
            className?: string | null;
            scriptName?: string | null;
          }
        | { name: string; part: string; type: "wasm_module" }
        | { name: string; serviceId: string; type: "vpc_service" }
        | {
            name: string;
            type: "vpc_network";
            networkId?: string | null;
            tunnelId?: string | null;
          }
      )[]
    | null;
  /** Date indicating targeted support in the Workers runtime. Backwards incompatible fixes to the runtime following this date will not affect this Worker. */
  compatibilityDate?: string | null;
  /** Flags that enable or disable certain features in the Workers runtime. Used to enable upcoming features or opt in or out of specific changes not included in a `compatibility_date`. */
  compatibilityFlags?: string[] | null;
  /** Limits to apply for this Worker. */
  limits?: { cpuMs?: number | null; subrequests?: number | null } | null;
  /** Whether Logpush is turned on for the Worker. */
  logpush?: boolean | null;
  /** Migrations to apply for Durable Objects associated with this Worker. */
  migrations?:
    | {
        deletedClasses?: string[] | null;
        newClasses?: string[] | null;
        newSqliteClasses?: string[] | null;
        newTag?: string | null;
        oldTag?: string | null;
        renamedClasses?: { from?: string | null; to?: string | null }[] | null;
        transferredClasses?:
          | {
              from?: string | null;
              fromScript?: string | null;
              to?: string | null;
            }[]
          | null;
      }
    | {
        newTag?: string | null;
        oldTag?: string | null;
        steps?:
          | {
              deletedClasses?: string[] | null;
              newClasses?: string[] | null;
              newSqliteClasses?: string[] | null;
              renamedClasses?:
                | { from?: string | null; to?: string | null }[]
                | null;
              transferredClasses?:
                | {
                    from?: string | null;
                    fromScript?: string | null;
                    to?: string | null;
                  }[]
                | null;
            }[]
          | null;
      }
    | null;
  /** Observability settings for the Worker. */
  observability?: {
    enabled: boolean;
    headSamplingRate?: number | null;
    logs?: {
      enabled: boolean;
      invocationLogs: boolean;
      destinations?: string[] | null;
      headSamplingRate?: number | null;
      persist?: boolean | null;
    } | null;
    traces?: {
      destinations?: string[] | null;
      enabled?: boolean | null;
      headSamplingRate?: number | null;
      persist?: boolean | null;
      propagationPolicy?: "authenticated" | "accept" | (string & {}) | null;
    } | null;
  } | null;
  /** Configuration for [Smart Placement](https://developers.cloudflare.com/workers/configuration/smart-placement). Specify mode='smart' for Smart Placement, or one of region/hostname/host. */
  placement?:
    | { mode: "smart" }
    | { region: string }
    | { hostname: string }
    | { host: string }
    | { mode: "targeted"; region: string }
    | { hostname: string; mode: "targeted" }
    | { host: string; mode: "targeted" }
    | {
        mode: "targeted";
        target: (
          | { region: string }
          | { hostname: string }
          | { host: string }
        )[];
      }
    | null;
  /** Tags associated with the Worker. */
  tags?: string[] | null;
  /** List of Workers that will consume logs from the attached Worker. */
  tailConsumers?:
    | {
        service: string;
        environment?: string | null;
        namespace?: string | null;
      }[]
    | null;
  /** Usage model for the Worker invocations. */
  usageModel?: "standard" | "bundled" | "unbound" | (string & {}) | null;
}
const Settings = /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    bindings: Schema.optional(
      Schema.Union([
        Schema.Array(
          Schema.Union([
            WorkersBindingKindSecretKey,
            WorkersBindingKindRatelimit,
            WorkersBindingKindSecretsStoreSecret,
            WorkersBindingKindAISearch,
            WorkersBindingKindAISearchNamespace,
            WorkersBindingKindAnalyticsEngine,
            WorkersBindingKindD1,
            WorkersBindingKindDataBlob,
            WorkersBindingKindDispatchNamespace,
            WorkersBindingKindHyperdrive,
            WorkersBindingKindJson,
            WorkersBindingKindKVNamespace,
            WorkersBindingKindMTLSCertificate,
            WorkersBindingKindPlainText,
            WorkersBindingKindPipelines,
            WorkersBindingKindQueue,
            WorkersBindingKindR2Bucket,
            WorkersBindingKindSecretText,
            WorkersBindingKindService,
            WorkersBindingKindTextBlob,
            WorkersBindingKindVectorize,
            WorkersBindingKindFlagship,
            WorkersBindingKindWorkflow,
            WorkersBindingKindWasmModule,
            WorkersBindingKindVPCService,
            WorkersBindingKindAI,
            WorkersBindingKindAssets,
            WorkersBindingKindBrowser,
            WorkersBindingKindDurableObjectNamespace,
            WorkersBindingKindInherit,
            WorkersBindingKindImages,
            WorkersBindingKindMedia,
            WorkersBindingKindSendEmail,
            WorkersBindingKindVersionMetadata,
            WorkersBindingKindVPCNetwork,
          ]),
        ),
        Schema.Null,
      ]),
    ),
    compatibilityDate: Schema.optional(
      Schema.Union([Schema.String, Schema.Null]),
    ),
    compatibilityFlags: Schema.optional(
      Schema.Union([Schema.Array(Schema.String), Schema.Null]),
    ),
    limits: Schema.optional(Schema.Union([Limits, Schema.Null])),
    logpush: Schema.optional(Schema.Union([Schema.Boolean, Schema.Null])),
    migrations: Schema.optional(
      Schema.Union([
        Schema.Union([SingleStepMigrationParam, WorkersMultipleStepMigrations]),
        Schema.Null,
      ]),
    ),
    observability: Schema.optional(Schema.Union([Observability, Schema.Null])),
    placement: Schema.optional(
      Schema.Union([
        Schema.Union([
          PutDispatchNamespaceScriptRequestMetadataPlacement4,
          PutDispatchNamespaceScriptRequestMetadataPlacement5,
          PutDispatchNamespaceScriptRequestMetadataPlacement6,
          PutDispatchNamespaceScriptRequestMetadataPlacement7,
          PutDispatchNamespaceScriptRequestMetadataPlacement,
          Region,
          Hostname,
          Host,
        ]),
        Schema.Null,
      ]),
    ),
    tags: Schema.optional(
      Schema.Union([Schema.Array(Schema.String), Schema.Null]),
    ),
    tailConsumers: Schema.optional(
      Schema.Union([Schema.Array(ConsumerScript), Schema.Null]),
    ),
    usageModel: Schema.optional(
      Schema.Union([
        Schema.Union([
          Schema.Literals(["standard", "bundled", "unbound"]),
          Schema.String,
        ]),
        Schema.Null,
      ]),
    ),
  }).pipe(
    Schema.encodeKeys({
      bindings: "bindings",
      compatibilityDate: "compatibility_date",
      compatibilityFlags: "compatibility_flags",
      limits: "limits",
      logpush: "logpush",
      migrations: "migrations",
      observability: "observability",
      placement: "placement",
      tags: "tags",
      tailConsumers: "tail_consumers",
      usageModel: "usage_model",
    }),
  ),
) as unknown as Schema.Codec<Settings>;

// =============================================================================
// DispatchNamespace
// =============================================================================

export interface GetDispatchNamespaceRequest {
  dispatchNamespace: string;
  /** Identifier. */
  accountId: string;
}

export const GetDispatchNamespaceRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      dispatchNamespace: Schema.String.pipe(T.HttpPath("dispatchNamespace")),
      accountId: Schema.String.pipe(T.HttpPath("account_id")),
    }).pipe(
      T.Http({
        method: "GET",
        path: "/accounts/{account_id}/workers/dispatch/namespaces/{dispatchNamespace}",
      }),
    ),
  ) as unknown as Schema.Codec<GetDispatchNamespaceRequest>;

export interface GetDispatchNamespaceResponse {
  /** Identifier. */
  createdBy?: string | null;
  /** When the script was created. */
  createdOn?: string | null;
  /** Identifier. */
  modifiedBy?: string | null;
  /** When the script was last modified. */
  modifiedOn?: string | null;
  /** API Resource UUID tag. */
  namespaceId?: string | null;
  /** Name of the Workers for Platforms dispatch namespace. */
  namespaceName?: string | null;
  /** The current number of scripts in this Dispatch Namespace. */
  scriptCount?: number | null;
  /** Whether the Workers in the namespace are executed in a "trusted" manner. When a Worker is trusted, it has access to the shared caches for the zone in the Cache API, and has access to the `request.cf`  */
  trustedWorkers?: boolean | null;
}

export const GetDispatchNamespaceResponse =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      createdBy: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
      createdOn: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
      modifiedBy: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
      modifiedOn: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
      namespaceId: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
      namespaceName: Schema.optional(
        Schema.Union([Schema.String, Schema.Null]),
      ),
      scriptCount: Schema.optional(Schema.Union([Schema.Number, Schema.Null])),
      trustedWorkers: Schema.optional(
        Schema.Union([Schema.Boolean, Schema.Null]),
      ),
    })
      .pipe(
        Schema.encodeKeys({
          createdBy: "created_by",
          createdOn: "created_on",
          modifiedBy: "modified_by",
          modifiedOn: "modified_on",
          namespaceId: "namespace_id",
          namespaceName: "namespace_name",
          scriptCount: "script_count",
          trustedWorkers: "trusted_workers",
        }),
      )
      .pipe(T.ResponsePath("result")),
  ) as unknown as Schema.Codec<GetDispatchNamespaceResponse>;

export type GetDispatchNamespaceError =
  | DefaultErrors
  | DispatchNamespaceNotFound
  | Forbidden;

export const getDispatchNamespace: API.OperationMethod<
  GetDispatchNamespaceRequest,
  GetDispatchNamespaceResponse,
  GetDispatchNamespaceError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetDispatchNamespaceRequest,
  output: GetDispatchNamespaceResponse,
  errors: [DispatchNamespaceNotFound, Forbidden],
}));

export interface ListDispatchNamespacesRequest {
  /** Identifier. */
  accountId: string;
}

export const ListDispatchNamespacesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      accountId: Schema.String.pipe(T.HttpPath("account_id")),
    }).pipe(
      T.Http({
        method: "GET",
        path: "/accounts/{account_id}/workers/dispatch/namespaces",
      }),
    ),
  ) as unknown as Schema.Codec<ListDispatchNamespacesRequest>;

export interface ListDispatchNamespacesResponse {
  result: {
    createdBy?: string | null;
    createdOn?: string | null;
    modifiedBy?: string | null;
    modifiedOn?: string | null;
    namespaceId?: string | null;
    namespaceName?: string | null;
    scriptCount?: number | null;
    trustedWorkers?: boolean | null;
  }[];
}

export const ListDispatchNamespacesResponse =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      result: Schema.Array(ListDispatchNamespacesResponseResult),
    }),
  ) as unknown as Schema.Codec<ListDispatchNamespacesResponse>;

export type ListDispatchNamespacesError = DefaultErrors;

export const listDispatchNamespaces: API.PaginatedOperationMethod<
  ListDispatchNamespacesRequest,
  ListDispatchNamespacesResponse,
  ListDispatchNamespacesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
  input: ListDispatchNamespacesRequest,
  output: ListDispatchNamespacesResponse,
  errors: [],
  pagination: {
    mode: "single",
    items: "result",
  } as const,
}));

export interface CreateDispatchNamespaceRequest {
  /** Path param: Identifier. */
  accountId: string;
  /** Body param: The name of the dispatch namespace. */
  name?: string;
}

export const CreateDispatchNamespaceRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      accountId: Schema.String.pipe(T.HttpPath("account_id")),
      name: Schema.optional(Schema.String),
    }).pipe(
      T.Http({
        method: "POST",
        path: "/accounts/{account_id}/workers/dispatch/namespaces",
      }),
    ),
  ) as unknown as Schema.Codec<CreateDispatchNamespaceRequest>;

export interface CreateDispatchNamespaceResponse {
  /** Identifier. */
  createdBy?: string | null;
  /** When the script was created. */
  createdOn?: string | null;
  /** Identifier. */
  modifiedBy?: string | null;
  /** When the script was last modified. */
  modifiedOn?: string | null;
  /** API Resource UUID tag. */
  namespaceId?: string | null;
  /** Name of the Workers for Platforms dispatch namespace. */
  namespaceName?: string | null;
  /** The current number of scripts in this Dispatch Namespace. */
  scriptCount?: number | null;
  /** Whether the Workers in the namespace are executed in a "trusted" manner. When a Worker is trusted, it has access to the shared caches for the zone in the Cache API, and has access to the `request.cf`  */
  trustedWorkers?: boolean | null;
}

export const CreateDispatchNamespaceResponse =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      createdBy: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
      createdOn: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
      modifiedBy: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
      modifiedOn: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
      namespaceId: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
      namespaceName: Schema.optional(
        Schema.Union([Schema.String, Schema.Null]),
      ),
      scriptCount: Schema.optional(Schema.Union([Schema.Number, Schema.Null])),
      trustedWorkers: Schema.optional(
        Schema.Union([Schema.Boolean, Schema.Null]),
      ),
    })
      .pipe(
        Schema.encodeKeys({
          createdBy: "created_by",
          createdOn: "created_on",
          modifiedBy: "modified_by",
          modifiedOn: "modified_on",
          namespaceId: "namespace_id",
          namespaceName: "namespace_name",
          scriptCount: "script_count",
          trustedWorkers: "trusted_workers",
        }),
      )
      .pipe(T.ResponsePath("result")),
  ) as unknown as Schema.Codec<CreateDispatchNamespaceResponse>;

export type CreateDispatchNamespaceError =
  | DefaultErrors
  | DispatchNamespaceAlreadyExists
  | Forbidden;

export const createDispatchNamespace: API.OperationMethod<
  CreateDispatchNamespaceRequest,
  CreateDispatchNamespaceResponse,
  CreateDispatchNamespaceError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: CreateDispatchNamespaceRequest,
  output: CreateDispatchNamespaceResponse,
  errors: [DispatchNamespaceAlreadyExists, Forbidden],
}));

export interface DeleteDispatchNamespaceRequest {
  dispatchNamespace: string;
  /** Identifier. */
  accountId: string;
}

export const DeleteDispatchNamespaceRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      dispatchNamespace: Schema.String.pipe(T.HttpPath("dispatchNamespace")),
      accountId: Schema.String.pipe(T.HttpPath("account_id")),
    }).pipe(
      T.Http({
        method: "DELETE",
        path: "/accounts/{account_id}/workers/dispatch/namespaces/{dispatchNamespace}",
      }),
    ),
  ) as unknown as Schema.Codec<DeleteDispatchNamespaceRequest>;

export type DeleteDispatchNamespaceResponse = unknown;

export const DeleteDispatchNamespaceResponse =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Unknown.pipe(T.ResponsePath("result")),
  ) as unknown as Schema.Codec<DeleteDispatchNamespaceResponse>;

export type DeleteDispatchNamespaceError =
  | DefaultErrors
  | DispatchNamespaceNotFound
  | Forbidden;

export const deleteDispatchNamespace: API.OperationMethod<
  DeleteDispatchNamespaceRequest,
  DeleteDispatchNamespaceResponse,
  DeleteDispatchNamespaceError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: DeleteDispatchNamespaceRequest,
  output: DeleteDispatchNamespaceResponse,
  errors: [DispatchNamespaceNotFound, Forbidden],
}));

// =============================================================================
// DispatchNamespaceScript
// =============================================================================

export interface GetDispatchNamespaceScriptRequest {
  dispatchNamespace: string;
  scriptName: string;
  /** Identifier. */
  accountId: string;
}

export const GetDispatchNamespaceScriptRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      dispatchNamespace: Schema.String.pipe(T.HttpPath("dispatchNamespace")),
      scriptName: Schema.String.pipe(T.HttpPath("scriptName")),
      accountId: Schema.String.pipe(T.HttpPath("account_id")),
    }).pipe(
      T.Http({
        method: "GET",
        path: "/accounts/{account_id}/workers/dispatch/namespaces/{dispatchNamespace}/scripts/{scriptName}",
      }),
    ),
  ) as unknown as Schema.Codec<GetDispatchNamespaceScriptRequest>;

export interface GetDispatchNamespaceScriptResponse {
  /** When the script was created. */
  createdOn?: string | null;
  /** Name of the Workers for Platforms dispatch namespace. */
  dispatchNamespace?: string | null;
  /** When the script was last modified. */
  modifiedOn?: string | null;
  script?: {
    id?: string | null;
    compatibilityDate?: string | null;
    compatibilityFlags?: string[] | null;
    createdOn?: string | null;
    etag?: string | null;
    handlers?: string[] | null;
    hasAssets?: boolean | null;
    hasModules?: boolean | null;
    lastDeployedFrom?: string | null;
    logpush?: boolean | null;
    migrationTag?: string | null;
    modifiedOn?: string | null;
    namedHandlers?:
      | { handlers?: string[] | null; name?: string | null }[]
      | null;
    observability?: {
      enabled: boolean;
      headSamplingRate?: number | null;
      logs?: {
        enabled: boolean;
        invocationLogs: boolean;
        destinations?: string[] | null;
        headSamplingRate?: number | null;
        persist?: boolean | null;
      } | null;
      traces?: {
        destinations?: string[] | null;
        enabled?: boolean | null;
        headSamplingRate?: number | null;
        persist?: boolean | null;
        propagationPolicy?: "authenticated" | "accept" | (string & {}) | null;
      } | null;
    } | null;
    placement?:
      | {
          mode: "smart";
          lastAnalyzedAt?: string | null;
          status?:
            | "SUCCESS"
            | "UNSUPPORTED_APPLICATION"
            | "INSUFFICIENT_INVOCATIONS"
            | (string & {})
            | null;
        }
      | {
          region: string;
          lastAnalyzedAt?: string | null;
          status?:
            | "SUCCESS"
            | "UNSUPPORTED_APPLICATION"
            | "INSUFFICIENT_INVOCATIONS"
            | (string & {})
            | null;
        }
      | {
          hostname: string;
          lastAnalyzedAt?: string | null;
          status?:
            | "SUCCESS"
            | "UNSUPPORTED_APPLICATION"
            | "INSUFFICIENT_INVOCATIONS"
            | (string & {})
            | null;
        }
      | {
          host: string;
          lastAnalyzedAt?: string | null;
          status?:
            | "SUCCESS"
            | "UNSUPPORTED_APPLICATION"
            | "INSUFFICIENT_INVOCATIONS"
            | (string & {})
            | null;
        }
      | {
          mode: "targeted";
          region: string;
          lastAnalyzedAt?: string | null;
          status?:
            | "SUCCESS"
            | "UNSUPPORTED_APPLICATION"
            | "INSUFFICIENT_INVOCATIONS"
            | (string & {})
            | null;
        }
      | {
          hostname: string;
          mode: "targeted";
          lastAnalyzedAt?: string | null;
          status?:
            | "SUCCESS"
            | "UNSUPPORTED_APPLICATION"
            | "INSUFFICIENT_INVOCATIONS"
            | (string & {})
            | null;
        }
      | {
          host: string;
          mode: "targeted";
          lastAnalyzedAt?: string | null;
          status?:
            | "SUCCESS"
            | "UNSUPPORTED_APPLICATION"
            | "INSUFFICIENT_INVOCATIONS"
            | (string & {})
            | null;
        }
      | {
          mode: "targeted";
          target: (
            | { region: string }
            | { hostname: string }
            | { host: string }
          )[];
          lastAnalyzedAt?: string | null;
          status?:
            | "SUCCESS"
            | "UNSUPPORTED_APPLICATION"
            | "INSUFFICIENT_INVOCATIONS"
            | (string & {})
            | null;
        }
      | null;
    placementMode?: "smart" | "targeted" | (string & {}) | null;
    placementStatus?:
      | "SUCCESS"
      | "UNSUPPORTED_APPLICATION"
      | "INSUFFICIENT_INVOCATIONS"
      | (string & {})
      | null;
    tag?: string | null;
    tags?: string[] | null;
    tailConsumers?:
      | {
          service: string;
          environment?: string | null;
          namespace?: string | null;
        }[]
      | null;
    usageModel?: "standard" | "bundled" | "unbound" | (string & {}) | null;
  } | null;
}

export const GetDispatchNamespaceScriptResponse =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      createdOn: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
      dispatchNamespace: Schema.optional(
        Schema.Union([Schema.String, Schema.Null]),
      ),
      modifiedOn: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
      script: Schema.optional(Schema.Union([Script, Schema.Null])),
    })
      .pipe(
        Schema.encodeKeys({
          createdOn: "created_on",
          dispatchNamespace: "dispatch_namespace",
          modifiedOn: "modified_on",
          script: "script",
        }),
      )
      .pipe(T.ResponsePath("result")),
  ) as unknown as Schema.Codec<GetDispatchNamespaceScriptResponse>;

export type GetDispatchNamespaceScriptError =
  | DefaultErrors
  | DispatchNamespaceNotFound
  | DispatchNamespaceScriptNotFound
  | Forbidden;

export const getDispatchNamespaceScript: API.OperationMethod<
  GetDispatchNamespaceScriptRequest,
  GetDispatchNamespaceScriptResponse,
  GetDispatchNamespaceScriptError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetDispatchNamespaceScriptRequest,
  output: GetDispatchNamespaceScriptResponse,
  errors: [
    DispatchNamespaceNotFound,
    DispatchNamespaceScriptNotFound,
    Forbidden,
  ],
}));

export interface PutDispatchNamespaceScriptRequest {
  dispatchNamespace: string;
  scriptName: string;
  /** Path param: Identifier. */
  accountId: string;
  /** Query param: When set to "strict", the upload will fail if any `inherit` type bindings cannot be resolved against the previous version of the script. Without this, unresolvable inherit bindings are si */
  bindingsInherit?: "strict";
  /** Body param: JSON-encoded metadata about the uploaded parts and Worker configuration. */
  metadata: {
    assets?: {
      config?: {
        headers?: string;
        redirects?: string;
        htmlHandling?:
          | "auto-trailing-slash"
          | "force-trailing-slash"
          | "drop-trailing-slash"
          | "none"
          | (string & {});
        notFoundHandling?:
          | "none"
          | "404-page"
          | "single-page-application"
          | (string & {});
        runWorkerFirst?: string[] | boolean;
        serveDirectly?: boolean;
      };
      jwt?: string;
    };
    bindings?: (
      | { name: string; type: "ai" }
      | {
          instanceName: string;
          name: string;
          type: "ai_search";
          namespace?: string;
        }
      | { name: string; namespace: string; type: "ai_search_namespace" }
      | { dataset: string; name: string; type: "analytics_engine" }
      | { name: string; type: "assets" }
      | { name: string; type: "browser" }
      | { databaseId: string; name: string; type: "d1"; id?: string }
      | { name: string; part: string; type: "data_blob" }
      | {
          name: string;
          namespace: string;
          type: "dispatch_namespace";
          outbound?: {
            params?: { name: string }[];
            worker?: {
              entrypoint?: string;
              environment?: string;
              service?: string;
            };
          };
        }
      | {
          name: string;
          type: "durable_object_namespace";
          className?: string;
          dispatchNamespace?: string;
          environment?: string;
          namespaceId?: string;
          scriptName?: string;
        }
      | { id: string; name: string; type: "hyperdrive" }
      | { name: string; type: "inherit"; oldName?: string; versionId?: string }
      | { name: string; type: "images" }
      | { json: unknown; name: string; type: "json" }
      | { name: string; namespaceId: string; type: "kv_namespace" }
      | { name: string; type: "media" }
      | { certificateId: string; name: string; type: "mtls_certificate" }
      | { name: string; text: string; type: "plain_text" }
      | { name: string; pipeline: string; type: "pipelines" }
      | { name: string; queueName: string; type: "queue" }
      | {
          name: string;
          namespaceId: string;
          simple: { limit: number; period: number; mitigationTimeout?: number };
          type: "ratelimit";
        }
      | {
          bucketName: string;
          name: string;
          type: "r2_bucket";
          jurisdiction?: "eu" | "fedramp" | "fedramp-high" | (string & {});
        }
      | { name: string; text: string; type: "secret_text" }
      | {
          name: string;
          type: "send_email";
          allowedDestinationAddresses?: string[];
          allowedSenderAddresses?: string[];
          destinationAddress?: string;
        }
      | {
          name: string;
          service: string;
          type: "service";
          entrypoint?: string;
          environment?: string;
        }
      | { name: string; part: string; type: "text_blob" }
      | { indexName: string; name: string; type: "vectorize" }
      | { name: string; type: "version_metadata" }
      | {
          name: string;
          secretName: string;
          storeId: string;
          type: "secrets_store_secret";
        }
      | { appId: string; name: string; type: "flagship" }
      | {
          algorithm: unknown;
          format: "raw" | "pkcs8" | "spki" | "jwk" | (string & {});
          name: string;
          type: "secret_key";
          usages: (
            | "encrypt"
            | "decrypt"
            | "sign"
            | "verify"
            | "deriveKey"
            | "deriveBits"
            | "wrapKey"
            | "unwrapKey"
            | (string & {})
          )[];
          keyBase64?: string;
          keyJwk?: unknown;
        }
      | {
          name: string;
          type: "workflow";
          workflowName: string;
          className?: string;
          scriptName?: string;
        }
      | { name: string; part: string; type: "wasm_module" }
      | { name: string; serviceId: string; type: "vpc_service" }
      | {
          name: string;
          type: "vpc_network";
          networkId?: string;
          tunnelId?: string;
        }
    )[];
    bodyPart?: string;
    compatibilityDate?: string;
    compatibilityFlags?: string[];
    keepAssets?: boolean;
    keepBindings?: string[];
    limits?: { cpuMs?: number; subrequests?: number };
    logpush?: boolean;
    mainModule?: string;
    migrations?:
      | {
          deletedClasses?: string[];
          newClasses?: string[];
          newSqliteClasses?: string[];
          newTag?: string;
          oldTag?: string;
          renamedClasses?: { from?: string; to?: string }[];
          transferredClasses?: {
            from?: string;
            fromScript?: string;
            to?: string;
          }[];
        }
      | {
          newTag?: string;
          oldTag?: string;
          steps?: {
            deletedClasses?: string[];
            newClasses?: string[];
            newSqliteClasses?: string[];
            renamedClasses?: { from?: string; to?: string }[];
            transferredClasses?: {
              from?: string;
              fromScript?: string;
              to?: string;
            }[];
          }[];
        };
    observability?: {
      enabled: boolean;
      headSamplingRate?: number | null;
      logs?: {
        enabled: boolean;
        invocationLogs: boolean;
        destinations?: string[];
        headSamplingRate?: number | null;
        persist?: boolean;
      } | null;
      traces?: {
        destinations?: string[];
        enabled?: boolean;
        headSamplingRate?: number | null;
        persist?: boolean;
        propagationPolicy?: "authenticated" | "accept" | (string & {});
      } | null;
    };
    placement?:
      | { mode: "smart" }
      | { region: string }
      | { hostname: string }
      | { host: string }
      | { mode: "targeted"; region: string }
      | { hostname: string; mode: "targeted" }
      | { host: string; mode: "targeted" }
      | {
          mode: "targeted";
          target: (
            | { region: string }
            | { hostname: string }
            | { host: string }
          )[];
        };
    tags?: string[];
    tailConsumers?:
      | { service: string; environment?: string; namespace?: string }[]
      | null;
    usageModel?: "standard" | "bundled" | "unbound" | (string & {});
  };
  /** Body param: An array of modules (often JavaScript files) comprising a Worker script. At least one module must be present and referenced in the metadata as `main_module` or `body_part` by filename.<br/ */
  files?: (File | Blob)[];
}

export const PutDispatchNamespaceScriptRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      dispatchNamespace: Schema.String.pipe(T.HttpPath("dispatchNamespace")),
      scriptName: Schema.String.pipe(T.HttpPath("scriptName")),
      accountId: Schema.String.pipe(T.HttpPath("account_id")),
      bindingsInherit: Schema.optional(Schema.Literal("strict")).pipe(
        T.HttpQuery("bindings_inherit"),
      ),
      metadata: Metadata,
      files: Schema.optional(
        Schema.Array(UploadableSchema.pipe(T.HttpFormDataFile())),
      ),
    }).pipe(
      T.Http({
        method: "PUT",
        path: "/accounts/{account_id}/workers/dispatch/namespaces/{dispatchNamespace}/scripts/{scriptName}",
        contentType: "multipart",
      }),
    ),
  ) as unknown as Schema.Codec<PutDispatchNamespaceScriptRequest>;

export interface PutDispatchNamespaceScriptResponse {
  startupTimeMs: number;
  /** The name used to identify the script. */
  id?: string | null;
  /** Date indicating targeted support in the Workers runtime. Backwards incompatible fixes to the runtime following this date will not affect this Worker. */
  compatibilityDate?: string | null;
  /** Flags that enable or disable certain features in the Workers runtime. Used to enable upcoming features or opt in or out of specific changes not included in a `compatibility_date`. */
  compatibilityFlags?: string[] | null;
  /** When the script was created. */
  createdOn?: string | null;
  /** The entry point for the script. */
  entryPoint?: string | null;
  /** Hashed script content, can be used in a If-None-Match header when updating. */
  etag?: string | null;
  /** The names of handlers exported as part of the default export. */
  handlers?: string[] | null;
  /** Whether a Worker contains assets. */
  hasAssets?: boolean | null;
  /** Whether a Worker contains modules. */
  hasModules?: boolean | null;
  /** The client most recently used to deploy this Worker. */
  lastDeployedFrom?: string | null;
  /** Whether Logpush is turned on for the Worker. */
  logpush?: boolean | null;
  /** The tag of the Durable Object migration that was most recently applied for this Worker. */
  migrationTag?: string | null;
  /** When the script was last modified. */
  modifiedOn?: string | null;
  /** Named exports, such as Durable Object class implementations and named entrypoints. */
  namedHandlers?: { handlers?: string[] | null; name?: string | null }[] | null;
  /** Observability settings for the Worker. */
  observability?: {
    enabled: boolean;
    headSamplingRate?: number | null;
    logs?: {
      enabled: boolean;
      invocationLogs: boolean;
      destinations?: string[] | null;
      headSamplingRate?: number | null;
      persist?: boolean | null;
    } | null;
    traces?: {
      destinations?: string[] | null;
      enabled?: boolean | null;
      headSamplingRate?: number | null;
      persist?: boolean | null;
      propagationPolicy?: "authenticated" | "accept" | (string & {}) | null;
    } | null;
  } | null;
  /** Configuration for [Smart Placement](https://developers.cloudflare.com/workers/configuration/smart-placement). Specify mode='smart' for Smart Placement, or one of region/hostname/host. */
  placement?:
    | {
        mode: "smart";
        lastAnalyzedAt?: string | null;
        status?:
          | "SUCCESS"
          | "UNSUPPORTED_APPLICATION"
          | "INSUFFICIENT_INVOCATIONS"
          | (string & {})
          | null;
      }
    | {
        region: string;
        lastAnalyzedAt?: string | null;
        status?:
          | "SUCCESS"
          | "UNSUPPORTED_APPLICATION"
          | "INSUFFICIENT_INVOCATIONS"
          | (string & {})
          | null;
      }
    | {
        hostname: string;
        lastAnalyzedAt?: string | null;
        status?:
          | "SUCCESS"
          | "UNSUPPORTED_APPLICATION"
          | "INSUFFICIENT_INVOCATIONS"
          | (string & {})
          | null;
      }
    | {
        host: string;
        lastAnalyzedAt?: string | null;
        status?:
          | "SUCCESS"
          | "UNSUPPORTED_APPLICATION"
          | "INSUFFICIENT_INVOCATIONS"
          | (string & {})
          | null;
      }
    | {
        mode: "targeted";
        region: string;
        lastAnalyzedAt?: string | null;
        status?:
          | "SUCCESS"
          | "UNSUPPORTED_APPLICATION"
          | "INSUFFICIENT_INVOCATIONS"
          | (string & {})
          | null;
      }
    | {
        hostname: string;
        mode: "targeted";
        lastAnalyzedAt?: string | null;
        status?:
          | "SUCCESS"
          | "UNSUPPORTED_APPLICATION"
          | "INSUFFICIENT_INVOCATIONS"
          | (string & {})
          | null;
      }
    | {
        host: string;
        mode: "targeted";
        lastAnalyzedAt?: string | null;
        status?:
          | "SUCCESS"
          | "UNSUPPORTED_APPLICATION"
          | "INSUFFICIENT_INVOCATIONS"
          | (string & {})
          | null;
      }
    | {
        mode: "targeted";
        target: (
          | { region: string }
          | { hostname: string }
          | { host: string }
        )[];
        lastAnalyzedAt?: string | null;
        status?:
          | "SUCCESS"
          | "UNSUPPORTED_APPLICATION"
          | "INSUFFICIENT_INVOCATIONS"
          | (string & {})
          | null;
      }
    | null;
  /** @deprecated */
  placementMode?: "smart" | "targeted" | (string & {}) | null;
  /** @deprecated */
  placementStatus?:
    | "SUCCESS"
    | "UNSUPPORTED_APPLICATION"
    | "INSUFFICIENT_INVOCATIONS"
    | (string & {})
    | null;
  /** The immutable ID of the script. */
  tag?: string | null;
  /** Tags associated with the Worker. */
  tags?: string[] | null;
  /** List of Workers that will consume logs from the attached Worker. */
  tailConsumers?:
    | {
        service: string;
        environment?: string | null;
        namespace?: string | null;
      }[]
    | null;
  /** Usage model for the Worker invocations. */
  usageModel?: "standard" | "bundled" | "unbound" | (string & {}) | null;
}

export const PutDispatchNamespaceScriptResponse =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      startupTimeMs: Schema.Number,
      id: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
      compatibilityDate: Schema.optional(
        Schema.Union([Schema.String, Schema.Null]),
      ),
      compatibilityFlags: Schema.optional(
        Schema.Union([Schema.Array(Schema.String), Schema.Null]),
      ),
      createdOn: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
      entryPoint: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
      etag: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
      handlers: Schema.optional(
        Schema.Union([Schema.Array(Schema.String), Schema.Null]),
      ),
      hasAssets: Schema.optional(Schema.Union([Schema.Boolean, Schema.Null])),
      hasModules: Schema.optional(Schema.Union([Schema.Boolean, Schema.Null])),
      lastDeployedFrom: Schema.optional(
        Schema.Union([Schema.String, Schema.Null]),
      ),
      logpush: Schema.optional(Schema.Union([Schema.Boolean, Schema.Null])),
      migrationTag: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
      modifiedOn: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
      namedHandlers: Schema.optional(
        Schema.Union([Schema.Array(NamedHandler), Schema.Null]),
      ),
      observability: Schema.optional(
        Schema.Union([Observability, Schema.Null]),
      ),
      placement: Schema.optional(
        Schema.Union([
          Schema.Union([
            GetDispatchNamespaceScriptResponseScriptPlacement4,
            GetDispatchNamespaceScriptResponseScriptPlacement5,
            GetDispatchNamespaceScriptResponseScriptPlacement6,
            GetDispatchNamespaceScriptResponseScriptPlacement7,
            GetDispatchNamespaceScriptResponseScriptPlacement,
            GetDispatchNamespaceScriptResponseScriptPlacement1,
            GetDispatchNamespaceScriptResponseScriptPlacement2,
            GetDispatchNamespaceScriptResponseScriptPlacement3,
          ]),
          Schema.Null,
        ]),
      ),
      placementMode: Schema.optional(
        Schema.Union([
          Schema.Union([Schema.Literals(["smart", "targeted"]), Schema.String]),
          Schema.Null,
        ]),
      ),
      placementStatus: Schema.optional(
        Schema.Union([
          Schema.Union([
            Schema.Literals([
              "SUCCESS",
              "UNSUPPORTED_APPLICATION",
              "INSUFFICIENT_INVOCATIONS",
            ]),
            Schema.String,
          ]),
          Schema.Null,
        ]),
      ),
      tag: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
      tags: Schema.optional(
        Schema.Union([Schema.Array(Schema.String), Schema.Null]),
      ),
      tailConsumers: Schema.optional(
        Schema.Union([Schema.Array(ConsumerScript), Schema.Null]),
      ),
      usageModel: Schema.optional(
        Schema.Union([
          Schema.Union([
            Schema.Literals(["standard", "bundled", "unbound"]),
            Schema.String,
          ]),
          Schema.Null,
        ]),
      ),
    })
      .pipe(
        Schema.encodeKeys({
          startupTimeMs: "startup_time_ms",
          id: "id",
          compatibilityDate: "compatibility_date",
          compatibilityFlags: "compatibility_flags",
          createdOn: "created_on",
          entryPoint: "entry_point",
          etag: "etag",
          handlers: "handlers",
          hasAssets: "has_assets",
          hasModules: "has_modules",
          lastDeployedFrom: "last_deployed_from",
          logpush: "logpush",
          migrationTag: "migration_tag",
          modifiedOn: "modified_on",
          namedHandlers: "named_handlers",
          observability: "observability",
          placement: "placement",
          placementMode: "placement_mode",
          placementStatus: "placement_status",
          tag: "tag",
          tags: "tags",
          tailConsumers: "tail_consumers",
          usageModel: "usage_model",
        }),
      )
      .pipe(T.ResponsePath("result")),
  ) as unknown as Schema.Codec<PutDispatchNamespaceScriptResponse>;

export type PutDispatchNamespaceScriptError =
  | DefaultErrors
  | DispatchNamespaceNotFound
  | Forbidden
  | SecretsStoreBindingNotFound
  | KVNamespaceNotFound
  | R2BucketNotFound
  | D1DatabaseNotFound
  | QueueNotFound
  | ServiceBindingNotFound
  | DurableObjectClassNotFound
  | HyperdriveConfigNotFound
  | VectorizeIndexNotFound
  | MtlsCertificateNotFound;

export const putDispatchNamespaceScript: API.OperationMethod<
  PutDispatchNamespaceScriptRequest,
  PutDispatchNamespaceScriptResponse,
  PutDispatchNamespaceScriptError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: PutDispatchNamespaceScriptRequest,
  output: PutDispatchNamespaceScriptResponse,
  errors: [
    DispatchNamespaceNotFound,
    Forbidden,
    SecretsStoreBindingNotFound,
    KVNamespaceNotFound,
    R2BucketNotFound,
    D1DatabaseNotFound,
    QueueNotFound,
    ServiceBindingNotFound,
    DurableObjectClassNotFound,
    HyperdriveConfigNotFound,
    VectorizeIndexNotFound,
    MtlsCertificateNotFound,
  ],
}));

export interface DeleteDispatchNamespaceScriptRequest {
  dispatchNamespace: string;
  scriptName: string;
  /** Path param: Identifier. */
  accountId: string;
  /** Query param: If set to true, delete will not be stopped by associated service binding, durable object, or other binding. Any of these associated bindings/durable objects will be deleted along with the */
  force?: boolean;
}

export const DeleteDispatchNamespaceScriptRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      dispatchNamespace: Schema.String.pipe(T.HttpPath("dispatchNamespace")),
      scriptName: Schema.String.pipe(T.HttpPath("scriptName")),
      accountId: Schema.String.pipe(T.HttpPath("account_id")),
      force: Schema.optional(Schema.Boolean).pipe(T.HttpQuery("force")),
    }).pipe(
      T.Http({
        method: "DELETE",
        path: "/accounts/{account_id}/workers/dispatch/namespaces/{dispatchNamespace}/scripts/{scriptName}",
      }),
    ),
  ) as unknown as Schema.Codec<DeleteDispatchNamespaceScriptRequest>;

export type DeleteDispatchNamespaceScriptResponse = unknown;

export const DeleteDispatchNamespaceScriptResponse =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Unknown.pipe(T.ResponsePath("result")),
  ) as unknown as Schema.Codec<DeleteDispatchNamespaceScriptResponse>;

export type DeleteDispatchNamespaceScriptError =
  | DefaultErrors
  | DispatchNamespaceScriptNotFound
  | DispatchNamespaceNotFound
  | Forbidden;

export const deleteDispatchNamespaceScript: API.OperationMethod<
  DeleteDispatchNamespaceScriptRequest,
  DeleteDispatchNamespaceScriptResponse,
  DeleteDispatchNamespaceScriptError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: DeleteDispatchNamespaceScriptRequest,
  output: DeleteDispatchNamespaceScriptResponse,
  errors: [
    DispatchNamespaceScriptNotFound,
    DispatchNamespaceNotFound,
    Forbidden,
  ],
}));

// =============================================================================
// DispatchNamespaceScriptAssetUpload
// =============================================================================

export interface CreateDispatchNamespaceScriptAssetUploadRequest {
  dispatchNamespace: string;
  scriptName: string;
  /** Path param: Identifier. */
  accountId: string;
  /** Body param: A manifest ([path]: {hash, size}) map of files to upload. As an example, `/blog/hello-world.html` would be a valid path key. */
  manifest: Record<string, unknown>;
}

export const CreateDispatchNamespaceScriptAssetUploadRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      dispatchNamespace: Schema.String.pipe(T.HttpPath("dispatchNamespace")),
      scriptName: Schema.String.pipe(T.HttpPath("scriptName")),
      accountId: Schema.String.pipe(T.HttpPath("account_id")),
      manifest: Schema.Record(Schema.String, Schema.Unknown),
    }).pipe(
      T.Http({
        method: "POST",
        path: "/accounts/{account_id}/workers/dispatch/namespaces/{dispatchNamespace}/scripts/{scriptName}/assets-upload-session",
      }),
    ),
  ) as unknown as Schema.Codec<CreateDispatchNamespaceScriptAssetUploadRequest>;

export interface CreateDispatchNamespaceScriptAssetUploadResponse {
  /** The requests to make to upload assets. */
  buckets?: string[][] | null;
  /** A JWT to use as authentication for uploading assets. */
  jwt?: string | null;
}

export const CreateDispatchNamespaceScriptAssetUploadResponse =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      buckets: Schema.optional(
        Schema.Union([Schema.Array(Schema.Array(Schema.String)), Schema.Null]),
      ),
      jwt: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
    }).pipe(T.ResponsePath("result")),
  ) as unknown as Schema.Codec<CreateDispatchNamespaceScriptAssetUploadResponse>;

export type CreateDispatchNamespaceScriptAssetUploadError = DefaultErrors;

export const createDispatchNamespaceScriptAssetUpload: API.OperationMethod<
  CreateDispatchNamespaceScriptAssetUploadRequest,
  CreateDispatchNamespaceScriptAssetUploadResponse,
  CreateDispatchNamespaceScriptAssetUploadError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: CreateDispatchNamespaceScriptAssetUploadRequest,
  output: CreateDispatchNamespaceScriptAssetUploadResponse,
  errors: [],
}));

// =============================================================================
// DispatchNamespaceScriptBinding
// =============================================================================

export interface GetDispatchNamespaceScriptBindingRequest {
  dispatchNamespace: string;
  scriptName: string;
  /** Identifier. */
  accountId: string;
}

export const GetDispatchNamespaceScriptBindingRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      dispatchNamespace: Schema.String.pipe(T.HttpPath("dispatchNamespace")),
      scriptName: Schema.String.pipe(T.HttpPath("scriptName")),
      accountId: Schema.String.pipe(T.HttpPath("account_id")),
    }).pipe(
      T.Http({
        method: "GET",
        path: "/accounts/{account_id}/workers/dispatch/namespaces/{dispatchNamespace}/scripts/{scriptName}/bindings",
      }),
    ),
  ) as unknown as Schema.Codec<GetDispatchNamespaceScriptBindingRequest>;

export interface GetDispatchNamespaceScriptBindingResponse {
  result: (
    | { name: string; type: "ai" }
    | {
        instanceName: string;
        name: string;
        type: "ai_search";
        namespace?: string | null;
      }
    | { name: string; namespace: string; type: "ai_search_namespace" }
    | { dataset: string; name: string; type: "analytics_engine" }
    | { name: string; type: "assets" }
    | { name: string; type: "browser" }
    | { databaseId: string; name: string; type: "d1"; id?: string | null }
    | { name: string; part: string; type: "data_blob" }
    | {
        name: string;
        namespace: string;
        type: "dispatch_namespace";
        outbound?: {
          params?: { name: string }[] | null;
          worker?: {
            entrypoint?: string | null;
            environment?: string | null;
            service?: string | null;
          } | null;
        } | null;
      }
    | {
        name: string;
        type: "durable_object_namespace";
        className?: string | null;
        dispatchNamespace?: string | null;
        environment?: string | null;
        namespaceId?: string | null;
        scriptName?: string | null;
      }
    | { id: string; name: string; type: "hyperdrive" }
    | {
        name: string;
        type: "inherit";
        oldName?: string | null;
        versionId?: string | null;
      }
    | { name: string; type: "images" }
    | { json: unknown; name: string; type: "json" }
    | { name: string; namespaceId: string; type: "kv_namespace" }
    | { name: string; type: "media" }
    | { certificateId: string; name: string; type: "mtls_certificate" }
    | { name: string; text: string; type: "plain_text" }
    | { name: string; pipeline: string; type: "pipelines" }
    | { name: string; queueName: string; type: "queue" }
    | {
        name: string;
        namespaceId: string;
        simple: {
          limit: number;
          period: number;
          mitigationTimeout?: number | null;
        };
        type: "ratelimit";
      }
    | {
        bucketName: string;
        name: string;
        type: "r2_bucket";
        jurisdiction?: "eu" | "fedramp" | "fedramp-high" | (string & {}) | null;
      }
    | { name: string; type: "secret_text" }
    | {
        name: string;
        type: "send_email";
        allowedDestinationAddresses?: string[] | null;
        allowedSenderAddresses?: string[] | null;
        destinationAddress?: string | null;
      }
    | {
        name: string;
        service: string;
        type: "service";
        entrypoint?: string | null;
        environment?: string | null;
      }
    | { name: string; part: string; type: "text_blob" }
    | { indexName: string; name: string; type: "vectorize" }
    | { name: string; type: "version_metadata" }
    | {
        name: string;
        secretName: string;
        storeId: string;
        type: "secrets_store_secret";
      }
    | { appId: string; name: string; type: "flagship" }
    | {
        algorithm: unknown;
        format: "raw" | "pkcs8" | "spki" | "jwk" | (string & {});
        name: string;
        type: "secret_key";
        usages: (
          | "encrypt"
          | "decrypt"
          | "sign"
          | "verify"
          | "deriveKey"
          | "deriveBits"
          | "wrapKey"
          | "unwrapKey"
          | (string & {})
        )[];
      }
    | {
        name: string;
        type: "workflow";
        workflowName: string;
        className?: string | null;
        scriptName?: string | null;
      }
    | { name: string; part: string; type: "wasm_module" }
    | { name: string; serviceId: string; type: "vpc_service" }
    | {
        name: string;
        type: "vpc_network";
        networkId?: string | null;
        tunnelId?: string | null;
      }
  )[];
}

export const GetDispatchNamespaceScriptBindingResponse =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      result: Schema.Array(
        Schema.Union([
          WorkersBindingKindSecretKey2,
          WorkersBindingKindRatelimit,
          WorkersBindingKindSecretsStoreSecret,
          WorkersBindingKindAISearch,
          WorkersBindingKindAISearchNamespace,
          WorkersBindingKindAnalyticsEngine,
          WorkersBindingKindD1,
          WorkersBindingKindDataBlob,
          WorkersBindingKindDispatchNamespace,
          WorkersBindingKindHyperdrive,
          WorkersBindingKindJson,
          WorkersBindingKindKVNamespace,
          WorkersBindingKindMTLSCertificate,
          WorkersBindingKindPlainText,
          WorkersBindingKindPipelines,
          WorkersBindingKindQueue,
          WorkersBindingKindR2Bucket,
          WorkersBindingKindService,
          WorkersBindingKindTextBlob,
          WorkersBindingKindVectorize,
          WorkersBindingKindFlagship,
          WorkersBindingKindWorkflow,
          WorkersBindingKindWasmModule,
          WorkersBindingKindVPCService,
          WorkersBindingKindAI,
          WorkersBindingKindAssets,
          WorkersBindingKindBrowser,
          WorkersBindingKindDurableObjectNamespace,
          WorkersBindingKindInherit,
          WorkersBindingKindImages,
          WorkersBindingKindMedia,
          WorkersBindingKindSecretText2,
          WorkersBindingKindSendEmail,
          WorkersBindingKindVersionMetadata,
          WorkersBindingKindVPCNetwork,
        ]),
      ),
    }),
  ) as unknown as Schema.Codec<GetDispatchNamespaceScriptBindingResponse>;

export type GetDispatchNamespaceScriptBindingError = DefaultErrors;

export const getDispatchNamespaceScriptBinding: API.PaginatedOperationMethod<
  GetDispatchNamespaceScriptBindingRequest,
  GetDispatchNamespaceScriptBindingResponse,
  GetDispatchNamespaceScriptBindingError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
  input: GetDispatchNamespaceScriptBindingRequest,
  output: GetDispatchNamespaceScriptBindingResponse,
  errors: [],
  pagination: {
    mode: "single",
    items: "result",
  } as const,
}));

// =============================================================================
// DispatchNamespaceScriptContent
// =============================================================================

export interface GetDispatchNamespaceScriptContentRequest {
  dispatchNamespace: string;
  scriptName: string;
  /** Identifier. */
  accountId: string;
}

export const GetDispatchNamespaceScriptContentRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      dispatchNamespace: Schema.String.pipe(T.HttpPath("dispatchNamespace")),
      scriptName: Schema.String.pipe(T.HttpPath("scriptName")),
      accountId: Schema.String.pipe(T.HttpPath("account_id")),
    }).pipe(
      T.Http({
        method: "GET",
        path: "/accounts/{account_id}/workers/dispatch/namespaces/{dispatchNamespace}/scripts/{scriptName}/content",
      }),
    ),
  ) as unknown as Schema.Codec<GetDispatchNamespaceScriptContentRequest>;

export type GetDispatchNamespaceScriptContentResponse = unknown;

export const GetDispatchNamespaceScriptContentResponse =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(
    () => Schema.Unknown,
  ) as unknown as Schema.Codec<GetDispatchNamespaceScriptContentResponse>;

export type GetDispatchNamespaceScriptContentError = DefaultErrors;

export const getDispatchNamespaceScriptContent: API.OperationMethod<
  GetDispatchNamespaceScriptContentRequest,
  GetDispatchNamespaceScriptContentResponse,
  GetDispatchNamespaceScriptContentError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetDispatchNamespaceScriptContentRequest,
  output: GetDispatchNamespaceScriptContentResponse,
  errors: [],
}));

export interface PutDispatchNamespaceScriptContentRequest {
  dispatchNamespace: string;
  scriptName: string;
  /** Path param: Identifier. */
  accountId: string;
  /** Header param: The multipart name of a script upload part containing script content in service worker format. Alternative to including in a metadata part. */
  cfworkerbodypart?: string;
  /** Header param: The multipart name of a script upload part containing script content in es module format. Alternative to including in a metadata part. */
  cfworkermainmodulepart?: string;
  /** Body param: JSON-encoded metadata about the uploaded parts and Worker configuration. */
  metadata: { bodyPart?: string; mainModule?: string };
  /** Body param: An array of modules (often JavaScript files) comprising a Worker script. At least one module must be present and referenced in the metadata as `main_module` or `body_part` by filename.<br/ */
  files?: (File | Blob)[];
}

export const PutDispatchNamespaceScriptContentRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      dispatchNamespace: Schema.String.pipe(T.HttpPath("dispatchNamespace")),
      scriptName: Schema.String.pipe(T.HttpPath("scriptName")),
      accountId: Schema.String.pipe(T.HttpPath("account_id")),
      cfworkerbodypart: Schema.optional(Schema.String).pipe(
        T.HttpHeader("CF-WORKER-BODY-PART"),
      ),
      cfworkermainmodulepart: Schema.optional(Schema.String).pipe(
        T.HttpHeader("CF-WORKER-MAIN-MODULE-PART"),
      ),
      metadata: WorkerMetadataParam,
      files: Schema.optional(
        Schema.Array(UploadableSchema.pipe(T.HttpFormDataFile())),
      ),
    }).pipe(
      T.Http({
        method: "PUT",
        path: "/accounts/{account_id}/workers/dispatch/namespaces/{dispatchNamespace}/scripts/{scriptName}/content",
        contentType: "multipart",
      }),
    ),
  ) as unknown as Schema.Codec<PutDispatchNamespaceScriptContentRequest>;

export interface PutDispatchNamespaceScriptContentResponse {
  /** The name used to identify the script. */
  id?: string | null;
  /** Date indicating targeted support in the Workers runtime. Backwards incompatible fixes to the runtime following this date will not affect this Worker. */
  compatibilityDate?: string | null;
  /** Flags that enable or disable certain features in the Workers runtime. Used to enable upcoming features or opt in or out of specific changes not included in a `compatibility_date`. */
  compatibilityFlags?: string[] | null;
  /** When the script was created. */
  createdOn?: string | null;
  /** Hashed script content, can be used in a If-None-Match header when updating. */
  etag?: string | null;
  /** The names of handlers exported as part of the default export. */
  handlers?: string[] | null;
  /** Whether a Worker contains assets. */
  hasAssets?: boolean | null;
  /** Whether a Worker contains modules. */
  hasModules?: boolean | null;
  /** The client most recently used to deploy this Worker. */
  lastDeployedFrom?: string | null;
  /** Whether Logpush is turned on for the Worker. */
  logpush?: boolean | null;
  /** The tag of the Durable Object migration that was most recently applied for this Worker. */
  migrationTag?: string | null;
  /** When the script was last modified. */
  modifiedOn?: string | null;
  /** Named exports, such as Durable Object class implementations and named entrypoints. */
  namedHandlers?: { handlers?: string[] | null; name?: string | null }[] | null;
  /** Observability settings for the Worker. */
  observability?: {
    enabled: boolean;
    headSamplingRate?: number | null;
    logs?: {
      enabled: boolean;
      invocationLogs: boolean;
      destinations?: string[] | null;
      headSamplingRate?: number | null;
      persist?: boolean | null;
    } | null;
    traces?: {
      destinations?: string[] | null;
      enabled?: boolean | null;
      headSamplingRate?: number | null;
      persist?: boolean | null;
      propagationPolicy?: "authenticated" | "accept" | (string & {}) | null;
    } | null;
  } | null;
  /** Configuration for [Smart Placement](https://developers.cloudflare.com/workers/configuration/smart-placement). Specify mode='smart' for Smart Placement, or one of region/hostname/host. */
  placement?:
    | {
        mode: "smart";
        lastAnalyzedAt?: string | null;
        status?:
          | "SUCCESS"
          | "UNSUPPORTED_APPLICATION"
          | "INSUFFICIENT_INVOCATIONS"
          | (string & {})
          | null;
      }
    | {
        region: string;
        lastAnalyzedAt?: string | null;
        status?:
          | "SUCCESS"
          | "UNSUPPORTED_APPLICATION"
          | "INSUFFICIENT_INVOCATIONS"
          | (string & {})
          | null;
      }
    | {
        hostname: string;
        lastAnalyzedAt?: string | null;
        status?:
          | "SUCCESS"
          | "UNSUPPORTED_APPLICATION"
          | "INSUFFICIENT_INVOCATIONS"
          | (string & {})
          | null;
      }
    | {
        host: string;
        lastAnalyzedAt?: string | null;
        status?:
          | "SUCCESS"
          | "UNSUPPORTED_APPLICATION"
          | "INSUFFICIENT_INVOCATIONS"
          | (string & {})
          | null;
      }
    | {
        mode: "targeted";
        region: string;
        lastAnalyzedAt?: string | null;
        status?:
          | "SUCCESS"
          | "UNSUPPORTED_APPLICATION"
          | "INSUFFICIENT_INVOCATIONS"
          | (string & {})
          | null;
      }
    | {
        hostname: string;
        mode: "targeted";
        lastAnalyzedAt?: string | null;
        status?:
          | "SUCCESS"
          | "UNSUPPORTED_APPLICATION"
          | "INSUFFICIENT_INVOCATIONS"
          | (string & {})
          | null;
      }
    | {
        host: string;
        mode: "targeted";
        lastAnalyzedAt?: string | null;
        status?:
          | "SUCCESS"
          | "UNSUPPORTED_APPLICATION"
          | "INSUFFICIENT_INVOCATIONS"
          | (string & {})
          | null;
      }
    | {
        mode: "targeted";
        target: (
          | { region: string }
          | { hostname: string }
          | { host: string }
        )[];
        lastAnalyzedAt?: string | null;
        status?:
          | "SUCCESS"
          | "UNSUPPORTED_APPLICATION"
          | "INSUFFICIENT_INVOCATIONS"
          | (string & {})
          | null;
      }
    | null;
  /** @deprecated Configuration for [Smart Placement](https://developers.cloudflare.com/workers/configuration/smart-placement). Specify mode='smart' for Smart Placement, or one of region/hostname/host. */
  placementMode?: "smart" | "targeted" | (string & {}) | null;
  /** @deprecated Status of [Smart Placement](https://developers.cloudflare.com/workers/configuration/smart-placement). */
  placementStatus?:
    | "SUCCESS"
    | "UNSUPPORTED_APPLICATION"
    | "INSUFFICIENT_INVOCATIONS"
    | (string & {})
    | null;
  /** The immutable ID of the script. */
  tag?: string | null;
  /** Tags associated with the Worker. */
  tags?: string[] | null;
  /** List of Workers that will consume logs from the attached Worker. */
  tailConsumers?:
    | {
        service: string;
        environment?: string | null;
        namespace?: string | null;
      }[]
    | null;
  /** Usage model for the Worker invocations. */
  usageModel?: "standard" | "bundled" | "unbound" | (string & {}) | null;
}

export const PutDispatchNamespaceScriptContentResponse =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      id: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
      compatibilityDate: Schema.optional(
        Schema.Union([Schema.String, Schema.Null]),
      ),
      compatibilityFlags: Schema.optional(
        Schema.Union([Schema.Array(Schema.String), Schema.Null]),
      ),
      createdOn: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
      etag: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
      handlers: Schema.optional(
        Schema.Union([Schema.Array(Schema.String), Schema.Null]),
      ),
      hasAssets: Schema.optional(Schema.Union([Schema.Boolean, Schema.Null])),
      hasModules: Schema.optional(Schema.Union([Schema.Boolean, Schema.Null])),
      lastDeployedFrom: Schema.optional(
        Schema.Union([Schema.String, Schema.Null]),
      ),
      logpush: Schema.optional(Schema.Union([Schema.Boolean, Schema.Null])),
      migrationTag: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
      modifiedOn: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
      namedHandlers: Schema.optional(
        Schema.Union([Schema.Array(NamedHandler), Schema.Null]),
      ),
      observability: Schema.optional(
        Schema.Union([Observability, Schema.Null]),
      ),
      placement: Schema.optional(
        Schema.Union([
          Schema.Union([
            GetDispatchNamespaceScriptResponseScriptPlacement4,
            GetDispatchNamespaceScriptResponseScriptPlacement5,
            GetDispatchNamespaceScriptResponseScriptPlacement6,
            GetDispatchNamespaceScriptResponseScriptPlacement7,
            GetDispatchNamespaceScriptResponseScriptPlacement,
            GetDispatchNamespaceScriptResponseScriptPlacement1,
            GetDispatchNamespaceScriptResponseScriptPlacement2,
            GetDispatchNamespaceScriptResponseScriptPlacement3,
          ]),
          Schema.Null,
        ]),
      ),
      placementMode: Schema.optional(
        Schema.Union([
          Schema.Union([Schema.Literals(["smart", "targeted"]), Schema.String]),
          Schema.Null,
        ]),
      ),
      placementStatus: Schema.optional(
        Schema.Union([
          Schema.Union([
            Schema.Literals([
              "SUCCESS",
              "UNSUPPORTED_APPLICATION",
              "INSUFFICIENT_INVOCATIONS",
            ]),
            Schema.String,
          ]),
          Schema.Null,
        ]),
      ),
      tag: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
      tags: Schema.optional(
        Schema.Union([Schema.Array(Schema.String), Schema.Null]),
      ),
      tailConsumers: Schema.optional(
        Schema.Union([Schema.Array(ConsumerScript), Schema.Null]),
      ),
      usageModel: Schema.optional(
        Schema.Union([
          Schema.Union([
            Schema.Literals(["standard", "bundled", "unbound"]),
            Schema.String,
          ]),
          Schema.Null,
        ]),
      ),
    })
      .pipe(
        Schema.encodeKeys({
          id: "id",
          compatibilityDate: "compatibility_date",
          compatibilityFlags: "compatibility_flags",
          createdOn: "created_on",
          etag: "etag",
          handlers: "handlers",
          hasAssets: "has_assets",
          hasModules: "has_modules",
          lastDeployedFrom: "last_deployed_from",
          logpush: "logpush",
          migrationTag: "migration_tag",
          modifiedOn: "modified_on",
          namedHandlers: "named_handlers",
          observability: "observability",
          placement: "placement",
          placementMode: "placement_mode",
          placementStatus: "placement_status",
          tag: "tag",
          tags: "tags",
          tailConsumers: "tail_consumers",
          usageModel: "usage_model",
        }),
      )
      .pipe(T.ResponsePath("result")),
  ) as unknown as Schema.Codec<PutDispatchNamespaceScriptContentResponse>;

export type PutDispatchNamespaceScriptContentError = DefaultErrors;

export const putDispatchNamespaceScriptContent: API.OperationMethod<
  PutDispatchNamespaceScriptContentRequest,
  PutDispatchNamespaceScriptContentResponse,
  PutDispatchNamespaceScriptContentError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: PutDispatchNamespaceScriptContentRequest,
  output: PutDispatchNamespaceScriptContentResponse,
  errors: [],
}));

// =============================================================================
// DispatchNamespaceScriptSecret
// =============================================================================

export interface GetDispatchNamespaceScriptSecretRequest {
  dispatchNamespace: string;
  scriptName: string;
  secretName: string;
  /** Path param: Identifier. */
  accountId: string;
  /** Query param: Flag that indicates whether the secret name is URL encoded. */
  urlEncoded?: boolean;
}

export const GetDispatchNamespaceScriptSecretRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      dispatchNamespace: Schema.String.pipe(T.HttpPath("dispatchNamespace")),
      scriptName: Schema.String.pipe(T.HttpPath("scriptName")),
      secretName: Schema.String.pipe(T.HttpPath("secretName")),
      accountId: Schema.String.pipe(T.HttpPath("account_id")),
      urlEncoded: Schema.optional(Schema.Boolean).pipe(
        T.HttpQuery("url_encoded"),
      ),
    }).pipe(
      T.Http({
        method: "GET",
        path: "/accounts/{account_id}/workers/dispatch/namespaces/{dispatchNamespace}/scripts/{scriptName}/secrets/{secretName}",
      }),
    ),
  ) as unknown as Schema.Codec<GetDispatchNamespaceScriptSecretRequest>;

export type GetDispatchNamespaceScriptSecretResponse =
  | { name: string; type: "secret_text" }
  | {
      algorithm: unknown;
      format: "raw" | "pkcs8" | "spki" | "jwk" | (string & {});
      name: string;
      type: "secret_key";
      usages: (
        | "encrypt"
        | "decrypt"
        | "sign"
        | "verify"
        | "deriveKey"
        | "deriveBits"
        | "wrapKey"
        | "unwrapKey"
        | (string & {})
      )[];
    };

export const GetDispatchNamespaceScriptSecretResponse =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Union([
      WorkersBindingKindSecretKey2,
      WorkersBindingKindSecretText2,
    ]).pipe(T.ResponsePath("result")),
  ) as unknown as Schema.Codec<GetDispatchNamespaceScriptSecretResponse>;

export type GetDispatchNamespaceScriptSecretError = DefaultErrors;

export const getDispatchNamespaceScriptSecret: API.OperationMethod<
  GetDispatchNamespaceScriptSecretRequest,
  GetDispatchNamespaceScriptSecretResponse,
  GetDispatchNamespaceScriptSecretError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetDispatchNamespaceScriptSecretRequest,
  output: GetDispatchNamespaceScriptSecretResponse,
  errors: [],
}));

export interface ListDispatchNamespaceScriptSecretsRequest {
  dispatchNamespace: string;
  scriptName: string;
  /** Identifier. */
  accountId: string;
}

export const ListDispatchNamespaceScriptSecretsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      dispatchNamespace: Schema.String.pipe(T.HttpPath("dispatchNamespace")),
      scriptName: Schema.String.pipe(T.HttpPath("scriptName")),
      accountId: Schema.String.pipe(T.HttpPath("account_id")),
    }).pipe(
      T.Http({
        method: "GET",
        path: "/accounts/{account_id}/workers/dispatch/namespaces/{dispatchNamespace}/scripts/{scriptName}/secrets",
      }),
    ),
  ) as unknown as Schema.Codec<ListDispatchNamespaceScriptSecretsRequest>;

export interface ListDispatchNamespaceScriptSecretsResponse {
  result: (
    | { name: string; type: "secret_text" }
    | {
        algorithm: unknown;
        format: "raw" | "pkcs8" | "spki" | "jwk" | (string & {});
        name: string;
        type: "secret_key";
        usages: (
          | "encrypt"
          | "decrypt"
          | "sign"
          | "verify"
          | "deriveKey"
          | "deriveBits"
          | "wrapKey"
          | "unwrapKey"
          | (string & {})
        )[];
      }
  )[];
}

export const ListDispatchNamespaceScriptSecretsResponse =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      result: Schema.Array(
        Schema.Union([
          WorkersBindingKindSecretKey2,
          WorkersBindingKindSecretText2,
        ]),
      ),
    }),
  ) as unknown as Schema.Codec<ListDispatchNamespaceScriptSecretsResponse>;

export type ListDispatchNamespaceScriptSecretsError = DefaultErrors;

export const listDispatchNamespaceScriptSecrets: API.PaginatedOperationMethod<
  ListDispatchNamespaceScriptSecretsRequest,
  ListDispatchNamespaceScriptSecretsResponse,
  ListDispatchNamespaceScriptSecretsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
  input: ListDispatchNamespaceScriptSecretsRequest,
  output: ListDispatchNamespaceScriptSecretsResponse,
  errors: [],
  pagination: {
    mode: "single",
    items: "result",
  } as const,
}));

export interface PutDispatchNamespaceScriptSecretRequest {
  dispatchNamespace: string;
  scriptName: string;
  /** Path param: Identifier. */
  accountId: string;
  /** Body param: A JavaScript variable name for the binding. */
  name: string;
  /** Body param: The secret value to use. */
  text?: string;
  /** Body param: The kind of resource that the binding provides. */
  type: "secret_text" | "secret_key" | (string & {});
  /** Body param: Algorithm-specific key parameters. [Learn more](https://developer.mozilla.org/en-US/docs/Web/API/SubtleCrypto/importKey#algorithm). */
  algorithm?: unknown;
  /** Body param: Data format of the key. [Learn more](https://developer.mozilla.org/en-US/docs/Web/API/SubtleCrypto/importKey#format). */
  format?: "raw" | "pkcs8" | "spki" | "jwk" | (string & {});
  /** Body param: Allowed operations with the key. [Learn more](https://developer.mozilla.org/en-US/docs/Web/API/SubtleCrypto/importKey#keyUsages). */
  usages?: (
    | "encrypt"
    | "decrypt"
    | "sign"
    | "verify"
    | "deriveKey"
    | "deriveBits"
    | "wrapKey"
    | "unwrapKey"
    | (string & {})
  )[];
  /** Body param: Base64-encoded key data. Required if `format` is "raw", "pkcs8", or "spki". */
  keyBase64?: string;
  /** Body param: Key data in [JSON Web Key](https://developer.mozilla.org/en-US/docs/Web/API/SubtleCrypto/importKey#json_web_key) format. Required if `format` is "jwk". */
  keyJwk?: unknown;
}

export const PutDispatchNamespaceScriptSecretRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      dispatchNamespace: Schema.String.pipe(T.HttpPath("dispatchNamespace")),
      scriptName: Schema.String.pipe(T.HttpPath("scriptName")),
      accountId: Schema.String.pipe(T.HttpPath("account_id")),
      name: Schema.String,
      text: Schema.optional(Schema.String),
      type: Schema.Union([
        Schema.Literals(["secret_text", "secret_key"]),
        Schema.String,
      ]),
      algorithm: Schema.optional(Schema.Unknown),
      format: Schema.optional(
        Schema.Union([
          Schema.Literals(["raw", "pkcs8", "spki", "jwk"]),
          Schema.String,
        ]),
      ),
      usages: Schema.optional(
        Schema.Array(
          Schema.Union([
            Schema.Literals([
              "encrypt",
              "decrypt",
              "sign",
              "verify",
              "deriveKey",
              "deriveBits",
              "wrapKey",
              "unwrapKey",
            ]),
            Schema.String,
          ]),
        ),
      ),
      keyBase64: Schema.optional(Schema.String),
      keyJwk: Schema.optional(Schema.Unknown),
    }).pipe(
      Schema.encodeKeys({
        name: "name",
        text: "text",
        type: "type",
        algorithm: "algorithm",
        format: "format",
        usages: "usages",
        keyBase64: "key_base64",
        keyJwk: "key_jwk",
      }),
      T.Http({
        method: "PUT",
        path: "/accounts/{account_id}/workers/dispatch/namespaces/{dispatchNamespace}/scripts/{scriptName}/secrets",
      }),
    ),
  ) as unknown as Schema.Codec<PutDispatchNamespaceScriptSecretRequest>;

export type PutDispatchNamespaceScriptSecretResponse =
  | { name: string; type: "secret_text" }
  | {
      algorithm: unknown;
      format: "raw" | "pkcs8" | "spki" | "jwk" | (string & {});
      name: string;
      type: "secret_key";
      usages: (
        | "encrypt"
        | "decrypt"
        | "sign"
        | "verify"
        | "deriveKey"
        | "deriveBits"
        | "wrapKey"
        | "unwrapKey"
        | (string & {})
      )[];
    };

export const PutDispatchNamespaceScriptSecretResponse =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Union([
      WorkersBindingKindSecretKey2,
      WorkersBindingKindSecretText2,
    ]).pipe(T.ResponsePath("result")),
  ) as unknown as Schema.Codec<PutDispatchNamespaceScriptSecretResponse>;

export type PutDispatchNamespaceScriptSecretError = DefaultErrors;

export const putDispatchNamespaceScriptSecret: API.OperationMethod<
  PutDispatchNamespaceScriptSecretRequest,
  PutDispatchNamespaceScriptSecretResponse,
  PutDispatchNamespaceScriptSecretError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: PutDispatchNamespaceScriptSecretRequest,
  output: PutDispatchNamespaceScriptSecretResponse,
  errors: [],
}));

export interface DeleteDispatchNamespaceScriptSecretRequest {
  dispatchNamespace: string;
  scriptName: string;
  secretName: string;
  /** Path param: Identifier. */
  accountId: string;
  /** Query param: Flag that indicates whether the secret name is URL encoded. */
  urlEncoded?: boolean;
}

export const DeleteDispatchNamespaceScriptSecretRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      dispatchNamespace: Schema.String.pipe(T.HttpPath("dispatchNamespace")),
      scriptName: Schema.String.pipe(T.HttpPath("scriptName")),
      secretName: Schema.String.pipe(T.HttpPath("secretName")),
      accountId: Schema.String.pipe(T.HttpPath("account_id")),
      urlEncoded: Schema.optional(Schema.Boolean).pipe(
        T.HttpQuery("url_encoded"),
      ),
    }).pipe(
      T.Http({
        method: "DELETE",
        path: "/accounts/{account_id}/workers/dispatch/namespaces/{dispatchNamespace}/scripts/{scriptName}/secrets/{secretName}",
      }),
    ),
  ) as unknown as Schema.Codec<DeleteDispatchNamespaceScriptSecretRequest>;

export type DeleteDispatchNamespaceScriptSecretResponse = unknown;

export const DeleteDispatchNamespaceScriptSecretResponse =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Unknown.pipe(T.ResponsePath("result")),
  ) as unknown as Schema.Codec<DeleteDispatchNamespaceScriptSecretResponse>;

export type DeleteDispatchNamespaceScriptSecretError = DefaultErrors;

export const deleteDispatchNamespaceScriptSecret: API.OperationMethod<
  DeleteDispatchNamespaceScriptSecretRequest,
  DeleteDispatchNamespaceScriptSecretResponse,
  DeleteDispatchNamespaceScriptSecretError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: DeleteDispatchNamespaceScriptSecretRequest,
  output: DeleteDispatchNamespaceScriptSecretResponse,
  errors: [],
}));

export interface BulkUpdateDispatchNamespaceScriptSecretsRequest {
  dispatchNamespace: string;
  scriptName: string;
  /** Path param: Identifier. */
  accountId: string;
  /** Body param: Map of secret names to secret values:  - Set to a secret object to create or update. - Set to `null` to delete. - Omit to leave unchanged. */
  secrets?: Record<string, unknown>;
  /** Body param: Optional version tags to apply to the new script version. */
  versionTags?: Record<string, unknown>;
}

export const BulkUpdateDispatchNamespaceScriptSecretsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      dispatchNamespace: Schema.String.pipe(T.HttpPath("dispatchNamespace")),
      scriptName: Schema.String.pipe(T.HttpPath("scriptName")),
      accountId: Schema.String.pipe(T.HttpPath("account_id")),
      secrets: Schema.optional(Schema.Record(Schema.String, Schema.Unknown)),
      versionTags: Schema.optional(
        Schema.Record(Schema.String, Schema.Unknown),
      ),
    }).pipe(
      Schema.encodeKeys({ secrets: "secrets", versionTags: "version_tags" }),
      T.Http({
        method: "PATCH",
        path: "/accounts/{account_id}/workers/dispatch/namespaces/{dispatchNamespace}/scripts/{scriptName}/secrets-bulk",
      }),
    ),
  ) as unknown as Schema.Codec<BulkUpdateDispatchNamespaceScriptSecretsRequest>;

export type BulkUpdateDispatchNamespaceScriptSecretsResponse = Record<
  string,
  unknown
>;

export const BulkUpdateDispatchNamespaceScriptSecretsResponse =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Record(Schema.String, Schema.Unknown).pipe(T.ResponsePath("result")),
  ) as unknown as Schema.Codec<BulkUpdateDispatchNamespaceScriptSecretsResponse>;

export type BulkUpdateDispatchNamespaceScriptSecretsError = DefaultErrors;

export const bulkUpdateDispatchNamespaceScriptSecrets: API.OperationMethod<
  BulkUpdateDispatchNamespaceScriptSecretsRequest,
  BulkUpdateDispatchNamespaceScriptSecretsResponse,
  BulkUpdateDispatchNamespaceScriptSecretsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: BulkUpdateDispatchNamespaceScriptSecretsRequest,
  output: BulkUpdateDispatchNamespaceScriptSecretsResponse,
  errors: [],
}));

// =============================================================================
// DispatchNamespaceScriptSetting
// =============================================================================

export interface GetDispatchNamespaceScriptSettingRequest {
  dispatchNamespace: string;
  scriptName: string;
  /** Identifier. */
  accountId: string;
}

export const GetDispatchNamespaceScriptSettingRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      dispatchNamespace: Schema.String.pipe(T.HttpPath("dispatchNamespace")),
      scriptName: Schema.String.pipe(T.HttpPath("scriptName")),
      accountId: Schema.String.pipe(T.HttpPath("account_id")),
    }).pipe(
      T.Http({
        method: "GET",
        path: "/accounts/{account_id}/workers/dispatch/namespaces/{dispatchNamespace}/scripts/{scriptName}/settings",
      }),
    ),
  ) as unknown as Schema.Codec<GetDispatchNamespaceScriptSettingRequest>;

export interface GetDispatchNamespaceScriptSettingResponse {
  /** List of bindings attached to a Worker. You can find more about bindings on our docs: https://developers.cloudflare.com/workers/configuration/multipart-upload-metadata/#bindings. */
  bindings?:
    | (
        | { name: string; type: "ai" }
        | {
            instanceName: string;
            name: string;
            type: "ai_search";
            namespace?: string | null;
          }
        | { name: string; namespace: string; type: "ai_search_namespace" }
        | { dataset: string; name: string; type: "analytics_engine" }
        | { name: string; type: "assets" }
        | { name: string; type: "browser" }
        | { databaseId: string; name: string; type: "d1"; id?: string | null }
        | { name: string; part: string; type: "data_blob" }
        | {
            name: string;
            namespace: string;
            type: "dispatch_namespace";
            outbound?: {
              params?: { name: string }[] | null;
              worker?: {
                entrypoint?: string | null;
                environment?: string | null;
                service?: string | null;
              } | null;
            } | null;
          }
        | {
            name: string;
            type: "durable_object_namespace";
            className?: string | null;
            dispatchNamespace?: string | null;
            environment?: string | null;
            namespaceId?: string | null;
            scriptName?: string | null;
          }
        | { id: string; name: string; type: "hyperdrive" }
        | {
            name: string;
            type: "inherit";
            oldName?: string | null;
            versionId?: string | null;
          }
        | { name: string; type: "images" }
        | { json: unknown; name: string; type: "json" }
        | { name: string; namespaceId: string; type: "kv_namespace" }
        | { name: string; type: "media" }
        | { certificateId: string; name: string; type: "mtls_certificate" }
        | { name: string; text: string; type: "plain_text" }
        | { name: string; pipeline: string; type: "pipelines" }
        | { name: string; queueName: string; type: "queue" }
        | {
            name: string;
            namespaceId: string;
            simple: {
              limit: number;
              period: number;
              mitigationTimeout?: number | null;
            };
            type: "ratelimit";
          }
        | {
            bucketName: string;
            name: string;
            type: "r2_bucket";
            jurisdiction?:
              | "eu"
              | "fedramp"
              | "fedramp-high"
              | (string & {})
              | null;
          }
        | { name: string; type: "secret_text" }
        | {
            name: string;
            type: "send_email";
            allowedDestinationAddresses?: string[] | null;
            allowedSenderAddresses?: string[] | null;
            destinationAddress?: string | null;
          }
        | {
            name: string;
            service: string;
            type: "service";
            entrypoint?: string | null;
            environment?: string | null;
          }
        | { name: string; part: string; type: "text_blob" }
        | { indexName: string; name: string; type: "vectorize" }
        | { name: string; type: "version_metadata" }
        | {
            name: string;
            secretName: string;
            storeId: string;
            type: "secrets_store_secret";
          }
        | { appId: string; name: string; type: "flagship" }
        | {
            algorithm: unknown;
            format: "raw" | "pkcs8" | "spki" | "jwk" | (string & {});
            name: string;
            type: "secret_key";
            usages: (
              | "encrypt"
              | "decrypt"
              | "sign"
              | "verify"
              | "deriveKey"
              | "deriveBits"
              | "wrapKey"
              | "unwrapKey"
              | (string & {})
            )[];
          }
        | {
            name: string;
            type: "workflow";
            workflowName: string;
            className?: string | null;
            scriptName?: string | null;
          }
        | { name: string; part: string; type: "wasm_module" }
        | { name: string; serviceId: string; type: "vpc_service" }
        | {
            name: string;
            type: "vpc_network";
            networkId?: string | null;
            tunnelId?: string | null;
          }
      )[]
    | null;
  /** Date indicating targeted support in the Workers runtime. Backwards incompatible fixes to the runtime following this date will not affect this Worker. */
  compatibilityDate?: string | null;
  /** Flags that enable or disable certain features in the Workers runtime. Used to enable upcoming features or opt in or out of specific changes not included in a `compatibility_date`. */
  compatibilityFlags?: string[] | null;
  /** Limits to apply for this Worker. */
  limits?: { cpuMs?: number | null; subrequests?: number | null } | null;
  /** Whether Logpush is turned on for the Worker. */
  logpush?: boolean | null;
  /** Observability settings for the Worker. */
  observability?: {
    enabled: boolean;
    headSamplingRate?: number | null;
    logs?: {
      enabled: boolean;
      invocationLogs: boolean;
      destinations?: string[] | null;
      headSamplingRate?: number | null;
      persist?: boolean | null;
    } | null;
    traces?: {
      destinations?: string[] | null;
      enabled?: boolean | null;
      headSamplingRate?: number | null;
      persist?: boolean | null;
      propagationPolicy?: "authenticated" | "accept" | (string & {}) | null;
    } | null;
  } | null;
  /** Configuration for [Smart Placement](https://developers.cloudflare.com/workers/configuration/smart-placement). Specify mode='smart' for Smart Placement, or one of region/hostname/host. */
  placement?:
    | { mode: "smart" }
    | { region: string }
    | { hostname: string }
    | { host: string }
    | { mode: "targeted"; region: string }
    | { hostname: string; mode: "targeted" }
    | { host: string; mode: "targeted" }
    | {
        mode: "targeted";
        target: (
          | { region: string }
          | { hostname: string }
          | { host: string }
        )[];
      }
    | {
        mode?: "smart" | null;
        status?:
          | "SUCCESS"
          | "UNSUPPORTED_APPLICATION"
          | "INSUFFICIENT_INVOCATIONS"
          | (string & {})
          | null;
        lastAnalyzedAt?: string | null;
      }
    | null;
  /** Tags associated with the Worker. */
  tags?: string[] | null;
  /** List of Workers that will consume logs from the attached Worker. */
  tailConsumers?:
    | {
        service: string;
        environment?: string | null;
        namespace?: string | null;
      }[]
    | null;
  /** Usage model for the Worker invocations. */
  usageModel?: "standard" | "bundled" | "unbound" | (string & {}) | null;
}

export const GetDispatchNamespaceScriptSettingResponse =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      bindings: Schema.optional(
        Schema.Union([
          Schema.Array(
            Schema.Union([
              WorkersBindingKindSecretKey2,
              WorkersBindingKindRatelimit,
              WorkersBindingKindSecretsStoreSecret,
              WorkersBindingKindAISearch,
              WorkersBindingKindAISearchNamespace,
              WorkersBindingKindAnalyticsEngine,
              WorkersBindingKindD1,
              WorkersBindingKindDataBlob,
              WorkersBindingKindDispatchNamespace,
              WorkersBindingKindHyperdrive,
              WorkersBindingKindJson,
              WorkersBindingKindKVNamespace,
              WorkersBindingKindMTLSCertificate,
              WorkersBindingKindPlainText,
              WorkersBindingKindPipelines,
              WorkersBindingKindQueue,
              WorkersBindingKindR2Bucket,
              WorkersBindingKindService,
              WorkersBindingKindTextBlob,
              WorkersBindingKindVectorize,
              WorkersBindingKindFlagship,
              WorkersBindingKindWorkflow,
              WorkersBindingKindWasmModule,
              WorkersBindingKindVPCService,
              WorkersBindingKindAI,
              WorkersBindingKindAssets,
              WorkersBindingKindBrowser,
              WorkersBindingKindDurableObjectNamespace,
              WorkersBindingKindInherit,
              WorkersBindingKindImages,
              WorkersBindingKindMedia,
              WorkersBindingKindSecretText2,
              WorkersBindingKindSendEmail,
              WorkersBindingKindVersionMetadata,
              WorkersBindingKindVPCNetwork,
            ]),
          ),
          Schema.Null,
        ]),
      ),
      compatibilityDate: Schema.optional(
        Schema.Union([Schema.String, Schema.Null]),
      ),
      compatibilityFlags: Schema.optional(
        Schema.Union([Schema.Array(Schema.String), Schema.Null]),
      ),
      limits: Schema.optional(Schema.Union([Limits, Schema.Null])),
      logpush: Schema.optional(Schema.Union([Schema.Boolean, Schema.Null])),
      observability: Schema.optional(
        Schema.Union([Observability, Schema.Null]),
      ),
      placement: Schema.optional(
        Schema.Union([
          Schema.Union([
            PutDispatchNamespaceScriptRequestMetadataPlacement4,
            PutDispatchNamespaceScriptRequestMetadataPlacement5,
            PutDispatchNamespaceScriptRequestMetadataPlacement6,
            PutDispatchNamespaceScriptRequestMetadataPlacement7,
            PutDispatchNamespaceScriptRequestMetadataPlacement,
            Region,
            Hostname,
            Host,
            GetDispatchNamespaceScriptSettingResponsePlacement8,
          ]),
          Schema.Null,
        ]),
      ),
      tags: Schema.optional(
        Schema.Union([Schema.Array(Schema.String), Schema.Null]),
      ),
      tailConsumers: Schema.optional(
        Schema.Union([Schema.Array(ConsumerScript), Schema.Null]),
      ),
      usageModel: Schema.optional(
        Schema.Union([
          Schema.Union([
            Schema.Literals(["standard", "bundled", "unbound"]),
            Schema.String,
          ]),
          Schema.Null,
        ]),
      ),
    })
      .pipe(
        Schema.encodeKeys({
          bindings: "bindings",
          compatibilityDate: "compatibility_date",
          compatibilityFlags: "compatibility_flags",
          limits: "limits",
          logpush: "logpush",
          observability: "observability",
          placement: "placement",
          tags: "tags",
          tailConsumers: "tail_consumers",
          usageModel: "usage_model",
        }),
      )
      .pipe(T.ResponsePath("result")),
  ) as unknown as Schema.Codec<GetDispatchNamespaceScriptSettingResponse>;

export type GetDispatchNamespaceScriptSettingError =
  | DefaultErrors
  | DispatchNamespaceNotFound
  | DispatchNamespaceScriptNotFound
  | Forbidden;

export const getDispatchNamespaceScriptSetting: API.OperationMethod<
  GetDispatchNamespaceScriptSettingRequest,
  GetDispatchNamespaceScriptSettingResponse,
  GetDispatchNamespaceScriptSettingError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetDispatchNamespaceScriptSettingRequest,
  output: GetDispatchNamespaceScriptSettingResponse,
  errors: [
    DispatchNamespaceNotFound,
    DispatchNamespaceScriptNotFound,
    Forbidden,
  ],
}));

export interface PatchDispatchNamespaceScriptSettingRequest {
  dispatchNamespace: string;
  scriptName: string;
  /** Path param: Identifier. */
  accountId: string;
  /** Body param: Script and version settings for Workers for Platforms namespace scripts. Same as script-and-version-settings-item but without annotations, which are not supported for namespace scripts. */
  settings?: {
    bindings?: (
      | { name: string; type: "ai" }
      | {
          instanceName: string;
          name: string;
          type: "ai_search";
          namespace?: string;
        }
      | { name: string; namespace: string; type: "ai_search_namespace" }
      | { dataset: string; name: string; type: "analytics_engine" }
      | { name: string; type: "assets" }
      | { name: string; type: "browser" }
      | { databaseId: string; name: string; type: "d1"; id?: string }
      | { name: string; part: string; type: "data_blob" }
      | {
          name: string;
          namespace: string;
          type: "dispatch_namespace";
          outbound?: {
            params?: { name: string }[];
            worker?: {
              entrypoint?: string;
              environment?: string;
              service?: string;
            };
          };
        }
      | {
          name: string;
          type: "durable_object_namespace";
          className?: string;
          dispatchNamespace?: string;
          environment?: string;
          namespaceId?: string;
          scriptName?: string;
        }
      | { id: string; name: string; type: "hyperdrive" }
      | { name: string; type: "inherit"; oldName?: string; versionId?: string }
      | { name: string; type: "images" }
      | { json: unknown; name: string; type: "json" }
      | { name: string; namespaceId: string; type: "kv_namespace" }
      | { name: string; type: "media" }
      | { certificateId: string; name: string; type: "mtls_certificate" }
      | { name: string; text: string; type: "plain_text" }
      | { name: string; pipeline: string; type: "pipelines" }
      | { name: string; queueName: string; type: "queue" }
      | {
          name: string;
          namespaceId: string;
          simple: { limit: number; period: number; mitigationTimeout?: number };
          type: "ratelimit";
        }
      | {
          bucketName: string;
          name: string;
          type: "r2_bucket";
          jurisdiction?: "eu" | "fedramp" | "fedramp-high" | (string & {});
        }
      | { name: string; text: string; type: "secret_text" }
      | {
          name: string;
          type: "send_email";
          allowedDestinationAddresses?: string[];
          allowedSenderAddresses?: string[];
          destinationAddress?: string;
        }
      | {
          name: string;
          service: string;
          type: "service";
          entrypoint?: string;
          environment?: string;
        }
      | { name: string; part: string; type: "text_blob" }
      | { indexName: string; name: string; type: "vectorize" }
      | { name: string; type: "version_metadata" }
      | {
          name: string;
          secretName: string;
          storeId: string;
          type: "secrets_store_secret";
        }
      | { appId: string; name: string; type: "flagship" }
      | {
          algorithm: unknown;
          format: "raw" | "pkcs8" | "spki" | "jwk" | (string & {});
          name: string;
          type: "secret_key";
          usages: (
            | "encrypt"
            | "decrypt"
            | "sign"
            | "verify"
            | "deriveKey"
            | "deriveBits"
            | "wrapKey"
            | "unwrapKey"
            | (string & {})
          )[];
          keyBase64?: string;
          keyJwk?: unknown;
        }
      | {
          name: string;
          type: "workflow";
          workflowName: string;
          className?: string;
          scriptName?: string;
        }
      | { name: string; part: string; type: "wasm_module" }
      | { name: string; serviceId: string; type: "vpc_service" }
      | {
          name: string;
          type: "vpc_network";
          networkId?: string;
          tunnelId?: string;
        }
    )[];
    compatibilityDate?: string;
    compatibilityFlags?: string[];
    limits?: { cpuMs?: number; subrequests?: number };
    logpush?: boolean;
    migrations?:
      | {
          deletedClasses?: string[];
          newClasses?: string[];
          newSqliteClasses?: string[];
          newTag?: string;
          oldTag?: string;
          renamedClasses?: { from?: string; to?: string }[];
          transferredClasses?: {
            from?: string;
            fromScript?: string;
            to?: string;
          }[];
        }
      | {
          newTag?: string;
          oldTag?: string;
          steps?: {
            deletedClasses?: string[];
            newClasses?: string[];
            newSqliteClasses?: string[];
            renamedClasses?: { from?: string; to?: string }[];
            transferredClasses?: {
              from?: string;
              fromScript?: string;
              to?: string;
            }[];
          }[];
        };
    observability?: {
      enabled: boolean;
      headSamplingRate?: number | null;
      logs?: {
        enabled: boolean;
        invocationLogs: boolean;
        destinations?: string[];
        headSamplingRate?: number | null;
        persist?: boolean;
      } | null;
      traces?: {
        destinations?: string[];
        enabled?: boolean;
        headSamplingRate?: number | null;
        persist?: boolean;
        propagationPolicy?: "authenticated" | "accept" | (string & {});
      } | null;
    };
    placement?:
      | { mode: "smart" }
      | { region: string }
      | { hostname: string }
      | { host: string }
      | { mode: "targeted"; region: string }
      | { hostname: string; mode: "targeted" }
      | { host: string; mode: "targeted" }
      | {
          mode: "targeted";
          target: (
            | { region: string }
            | { hostname: string }
            | { host: string }
          )[];
        };
    tags?: string[] | null;
    tailConsumers?:
      | { service: string; environment?: string; namespace?: string }[]
      | null;
    usageModel?: "standard" | "bundled" | "unbound" | (string & {});
  };
}

export const PatchDispatchNamespaceScriptSettingRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      dispatchNamespace: Schema.String.pipe(T.HttpPath("dispatchNamespace")),
      scriptName: Schema.String.pipe(T.HttpPath("scriptName")),
      accountId: Schema.String.pipe(T.HttpPath("account_id")),
      settings: Schema.optional(Settings),
    }).pipe(
      T.Http({
        method: "PATCH",
        path: "/accounts/{account_id}/workers/dispatch/namespaces/{dispatchNamespace}/scripts/{scriptName}/settings",
        contentType: "multipart",
      }),
    ),
  ) as unknown as Schema.Codec<PatchDispatchNamespaceScriptSettingRequest>;

export interface PatchDispatchNamespaceScriptSettingResponse {
  /** List of bindings attached to a Worker. You can find more about bindings on our docs: https://developers.cloudflare.com/workers/configuration/multipart-upload-metadata/#bindings. */
  bindings?:
    | (
        | { name: string; type: "ai" }
        | {
            instanceName: string;
            name: string;
            type: "ai_search";
            namespace?: string | null;
          }
        | { name: string; namespace: string; type: "ai_search_namespace" }
        | { dataset: string; name: string; type: "analytics_engine" }
        | { name: string; type: "assets" }
        | { name: string; type: "browser" }
        | { databaseId: string; name: string; type: "d1"; id?: string | null }
        | { name: string; part: string; type: "data_blob" }
        | {
            name: string;
            namespace: string;
            type: "dispatch_namespace";
            outbound?: {
              params?: { name: string }[] | null;
              worker?: {
                entrypoint?: string | null;
                environment?: string | null;
                service?: string | null;
              } | null;
            } | null;
          }
        | {
            name: string;
            type: "durable_object_namespace";
            className?: string | null;
            dispatchNamespace?: string | null;
            environment?: string | null;
            namespaceId?: string | null;
            scriptName?: string | null;
          }
        | { id: string; name: string; type: "hyperdrive" }
        | {
            name: string;
            type: "inherit";
            oldName?: string | null;
            versionId?: string | null;
          }
        | { name: string; type: "images" }
        | { json: unknown; name: string; type: "json" }
        | { name: string; namespaceId: string; type: "kv_namespace" }
        | { name: string; type: "media" }
        | { certificateId: string; name: string; type: "mtls_certificate" }
        | { name: string; text: string; type: "plain_text" }
        | { name: string; pipeline: string; type: "pipelines" }
        | { name: string; queueName: string; type: "queue" }
        | {
            name: string;
            namespaceId: string;
            simple: {
              limit: number;
              period: number;
              mitigationTimeout?: number | null;
            };
            type: "ratelimit";
          }
        | {
            bucketName: string;
            name: string;
            type: "r2_bucket";
            jurisdiction?:
              | "eu"
              | "fedramp"
              | "fedramp-high"
              | (string & {})
              | null;
          }
        | { name: string; type: "secret_text" }
        | {
            name: string;
            type: "send_email";
            allowedDestinationAddresses?: string[] | null;
            allowedSenderAddresses?: string[] | null;
            destinationAddress?: string | null;
          }
        | {
            name: string;
            service: string;
            type: "service";
            entrypoint?: string | null;
            environment?: string | null;
          }
        | { name: string; part: string; type: "text_blob" }
        | { indexName: string; name: string; type: "vectorize" }
        | { name: string; type: "version_metadata" }
        | {
            name: string;
            secretName: string;
            storeId: string;
            type: "secrets_store_secret";
          }
        | { appId: string; name: string; type: "flagship" }
        | {
            algorithm: unknown;
            format: "raw" | "pkcs8" | "spki" | "jwk" | (string & {});
            name: string;
            type: "secret_key";
            usages: (
              | "encrypt"
              | "decrypt"
              | "sign"
              | "verify"
              | "deriveKey"
              | "deriveBits"
              | "wrapKey"
              | "unwrapKey"
              | (string & {})
            )[];
          }
        | {
            name: string;
            type: "workflow";
            workflowName: string;
            className?: string | null;
            scriptName?: string | null;
          }
        | { name: string; part: string; type: "wasm_module" }
        | { name: string; serviceId: string; type: "vpc_service" }
        | {
            name: string;
            type: "vpc_network";
            networkId?: string | null;
            tunnelId?: string | null;
          }
      )[]
    | null;
  /** Date indicating targeted support in the Workers runtime. Backwards incompatible fixes to the runtime following this date will not affect this Worker. */
  compatibilityDate?: string | null;
  /** Flags that enable or disable certain features in the Workers runtime. Used to enable upcoming features or opt in or out of specific changes not included in a `compatibility_date`. */
  compatibilityFlags?: string[] | null;
  /** Limits to apply for this Worker. */
  limits?: { cpuMs?: number | null; subrequests?: number | null } | null;
  /** Whether Logpush is turned on for the Worker. */
  logpush?: boolean | null;
  /** Observability settings for the Worker. */
  observability?: {
    enabled: boolean;
    headSamplingRate?: number | null;
    logs?: {
      enabled: boolean;
      invocationLogs: boolean;
      destinations?: string[] | null;
      headSamplingRate?: number | null;
      persist?: boolean | null;
    } | null;
    traces?: {
      destinations?: string[] | null;
      enabled?: boolean | null;
      headSamplingRate?: number | null;
      persist?: boolean | null;
      propagationPolicy?: "authenticated" | "accept" | (string & {}) | null;
    } | null;
  } | null;
  /** Configuration for [Smart Placement](https://developers.cloudflare.com/workers/configuration/smart-placement). Specify mode='smart' for Smart Placement, or one of region/hostname/host. */
  placement?:
    | { mode: "smart" }
    | { region: string }
    | { hostname: string }
    | { host: string }
    | { mode: "targeted"; region: string }
    | { hostname: string; mode: "targeted" }
    | { host: string; mode: "targeted" }
    | {
        mode: "targeted";
        target: (
          | { region: string }
          | { hostname: string }
          | { host: string }
        )[];
      }
    | null;
  /** Tags associated with the Worker. */
  tags?: string[] | null;
  /** List of Workers that will consume logs from the attached Worker. */
  tailConsumers?:
    | {
        service: string;
        environment?: string | null;
        namespace?: string | null;
      }[]
    | null;
  /** Usage model for the Worker invocations. */
  usageModel?: "standard" | "bundled" | "unbound" | (string & {}) | null;
}

export const PatchDispatchNamespaceScriptSettingResponse =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      bindings: Schema.optional(
        Schema.Union([
          Schema.Array(
            Schema.Union([
              WorkersBindingKindSecretKey2,
              WorkersBindingKindRatelimit,
              WorkersBindingKindSecretsStoreSecret,
              WorkersBindingKindAISearch,
              WorkersBindingKindAISearchNamespace,
              WorkersBindingKindAnalyticsEngine,
              WorkersBindingKindD1,
              WorkersBindingKindDataBlob,
              WorkersBindingKindDispatchNamespace,
              WorkersBindingKindHyperdrive,
              WorkersBindingKindJson,
              WorkersBindingKindKVNamespace,
              WorkersBindingKindMTLSCertificate,
              WorkersBindingKindPlainText,
              WorkersBindingKindPipelines,
              WorkersBindingKindQueue,
              WorkersBindingKindR2Bucket,
              WorkersBindingKindService,
              WorkersBindingKindTextBlob,
              WorkersBindingKindVectorize,
              WorkersBindingKindFlagship,
              WorkersBindingKindWorkflow,
              WorkersBindingKindWasmModule,
              WorkersBindingKindVPCService,
              WorkersBindingKindAI,
              WorkersBindingKindAssets,
              WorkersBindingKindBrowser,
              WorkersBindingKindDurableObjectNamespace,
              WorkersBindingKindInherit,
              WorkersBindingKindImages,
              WorkersBindingKindMedia,
              WorkersBindingKindSecretText2,
              WorkersBindingKindSendEmail,
              WorkersBindingKindVersionMetadata,
              WorkersBindingKindVPCNetwork,
            ]),
          ),
          Schema.Null,
        ]),
      ),
      compatibilityDate: Schema.optional(
        Schema.Union([Schema.String, Schema.Null]),
      ),
      compatibilityFlags: Schema.optional(
        Schema.Union([Schema.Array(Schema.String), Schema.Null]),
      ),
      limits: Schema.optional(Schema.Union([Limits, Schema.Null])),
      logpush: Schema.optional(Schema.Union([Schema.Boolean, Schema.Null])),
      observability: Schema.optional(
        Schema.Union([Observability, Schema.Null]),
      ),
      placement: Schema.optional(
        Schema.Union([
          Schema.Union([
            PutDispatchNamespaceScriptRequestMetadataPlacement4,
            PutDispatchNamespaceScriptRequestMetadataPlacement5,
            PutDispatchNamespaceScriptRequestMetadataPlacement6,
            PutDispatchNamespaceScriptRequestMetadataPlacement7,
            PutDispatchNamespaceScriptRequestMetadataPlacement,
            Region,
            Hostname,
            Host,
          ]),
          Schema.Null,
        ]),
      ),
      tags: Schema.optional(
        Schema.Union([Schema.Array(Schema.String), Schema.Null]),
      ),
      tailConsumers: Schema.optional(
        Schema.Union([Schema.Array(ConsumerScript), Schema.Null]),
      ),
      usageModel: Schema.optional(
        Schema.Union([
          Schema.Union([
            Schema.Literals(["standard", "bundled", "unbound"]),
            Schema.String,
          ]),
          Schema.Null,
        ]),
      ),
    })
      .pipe(
        Schema.encodeKeys({
          bindings: "bindings",
          compatibilityDate: "compatibility_date",
          compatibilityFlags: "compatibility_flags",
          limits: "limits",
          logpush: "logpush",
          observability: "observability",
          placement: "placement",
          tags: "tags",
          tailConsumers: "tail_consumers",
          usageModel: "usage_model",
        }),
      )
      .pipe(T.ResponsePath("result")),
  ) as unknown as Schema.Codec<PatchDispatchNamespaceScriptSettingResponse>;

export type PatchDispatchNamespaceScriptSettingError = DefaultErrors;

export const patchDispatchNamespaceScriptSetting: API.OperationMethod<
  PatchDispatchNamespaceScriptSettingRequest,
  PatchDispatchNamespaceScriptSettingResponse,
  PatchDispatchNamespaceScriptSettingError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: PatchDispatchNamespaceScriptSettingRequest,
  output: PatchDispatchNamespaceScriptSettingResponse,
  errors: [],
}));

// =============================================================================
// DispatchNamespaceScriptTag
// =============================================================================

export interface ListDispatchNamespaceScriptTagsRequest {
  dispatchNamespace: string;
  scriptName: string;
  /** Identifier. */
  accountId: string;
}

export const ListDispatchNamespaceScriptTagsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      dispatchNamespace: Schema.String.pipe(T.HttpPath("dispatchNamespace")),
      scriptName: Schema.String.pipe(T.HttpPath("scriptName")),
      accountId: Schema.String.pipe(T.HttpPath("account_id")),
    }).pipe(
      T.Http({
        method: "GET",
        path: "/accounts/{account_id}/workers/dispatch/namespaces/{dispatchNamespace}/scripts/{scriptName}/tags",
      }),
    ),
  ) as unknown as Schema.Codec<ListDispatchNamespaceScriptTagsRequest>;

export interface ListDispatchNamespaceScriptTagsResponse {
  result: string[];
}

export const ListDispatchNamespaceScriptTagsResponse =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      result: Schema.Array(Schema.String),
    }),
  ) as unknown as Schema.Codec<ListDispatchNamespaceScriptTagsResponse>;

export type ListDispatchNamespaceScriptTagsError = DefaultErrors;

export const listDispatchNamespaceScriptTags: API.PaginatedOperationMethod<
  ListDispatchNamespaceScriptTagsRequest,
  ListDispatchNamespaceScriptTagsResponse,
  ListDispatchNamespaceScriptTagsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
  input: ListDispatchNamespaceScriptTagsRequest,
  output: ListDispatchNamespaceScriptTagsResponse,
  errors: [],
  pagination: {
    mode: "single",
    items: "result",
  } as const,
}));

export interface PutDispatchNamespaceScriptTagRequest {
  dispatchNamespace: string;
  scriptName: string;
  /** Path param: Identifier. */
  accountId: string;
  /** Body param: Tags associated with the Worker. */
  body: string[] | null;
}

export const PutDispatchNamespaceScriptTagRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      dispatchNamespace: Schema.String.pipe(T.HttpPath("dispatchNamespace")),
      scriptName: Schema.String.pipe(T.HttpPath("scriptName")),
      accountId: Schema.String.pipe(T.HttpPath("account_id")),
      body: Schema.Union([Schema.Array(Schema.String), Schema.Null]).pipe(
        T.HttpBody(),
      ),
    }).pipe(
      T.Http({
        method: "PUT",
        path: "/accounts/{account_id}/workers/dispatch/namespaces/{dispatchNamespace}/scripts/{scriptName}/tags",
      }),
    ),
  ) as unknown as Schema.Codec<PutDispatchNamespaceScriptTagRequest>;

export interface PutDispatchNamespaceScriptTagResponse {
  result: string[];
}

export const PutDispatchNamespaceScriptTagResponse =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      result: Schema.Array(Schema.String),
    }),
  ) as unknown as Schema.Codec<PutDispatchNamespaceScriptTagResponse>;

export type PutDispatchNamespaceScriptTagError = DefaultErrors;

export const putDispatchNamespaceScriptTag: API.PaginatedOperationMethod<
  PutDispatchNamespaceScriptTagRequest,
  PutDispatchNamespaceScriptTagResponse,
  PutDispatchNamespaceScriptTagError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
  input: PutDispatchNamespaceScriptTagRequest,
  output: PutDispatchNamespaceScriptTagResponse,
  errors: [],
  pagination: {
    mode: "single",
    items: "result",
  } as const,
}));

export interface DeleteDispatchNamespaceScriptTagRequest {
  dispatchNamespace: string;
  scriptName: string;
  tag: string;
  /** Identifier. */
  accountId: string;
}

export const DeleteDispatchNamespaceScriptTagRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      dispatchNamespace: Schema.String.pipe(T.HttpPath("dispatchNamespace")),
      scriptName: Schema.String.pipe(T.HttpPath("scriptName")),
      tag: Schema.String.pipe(T.HttpPath("tag")),
      accountId: Schema.String.pipe(T.HttpPath("account_id")),
    }).pipe(
      T.Http({
        method: "DELETE",
        path: "/accounts/{account_id}/workers/dispatch/namespaces/{dispatchNamespace}/scripts/{scriptName}/tags/{tag}",
      }),
    ),
  ) as unknown as Schema.Codec<DeleteDispatchNamespaceScriptTagRequest>;

export type DeleteDispatchNamespaceScriptTagResponse = unknown;

export const DeleteDispatchNamespaceScriptTagResponse =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Unknown.pipe(T.ResponsePath("result")),
  ) as unknown as Schema.Codec<DeleteDispatchNamespaceScriptTagResponse>;

export type DeleteDispatchNamespaceScriptTagError = DefaultErrors;

export const deleteDispatchNamespaceScriptTag: API.OperationMethod<
  DeleteDispatchNamespaceScriptTagRequest,
  DeleteDispatchNamespaceScriptTagResponse,
  DeleteDispatchNamespaceScriptTagError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: DeleteDispatchNamespaceScriptTagRequest,
  output: DeleteDispatchNamespaceScriptTagResponse,
  errors: [],
}));
