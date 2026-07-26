/**
 * Cloudflare WORKERS API
 *
 * Generated from Cloudflare TypeScript SDK.
 * DO NOT EDIT - regenerate with: bun scripts/generate.ts --service workers
 */

import * as Schema from "@distilled.cloud/core/schema";
import type * as HttpClient from "effect/unstable/http/HttpClient";
import * as API from "../client/api.ts";
import * as T from "../traits.ts";
import type { Credentials } from "../credentials.ts";
import { type DefaultErrors, InternalServerError } from "../errors.ts";
import { UploadableSchema } from "../schemas.ts";

// =============================================================================
// Errors
// =============================================================================

export class ContentTypeRequired extends T.applyErrorMatchers(
  Schema.TaggedErrorClass<ContentTypeRequired>()("ContentTypeRequired", {
    code: Schema.Number,
    message: Schema.String,
  }),
  [{ code: 10001 }],
) {}

export class D1DatabaseNotFound extends T.applyErrorMatchers(
  Schema.TaggedErrorClass<D1DatabaseNotFound>()("D1DatabaseNotFound", {
    code: Schema.Number,
    message: Schema.String,
  }),
  [{ code: 10181 }],
) {}

export class DeploymentNotFound extends T.applyErrorMatchers(
  Schema.TaggedErrorClass<DeploymentNotFound>()("DeploymentNotFound", {
    code: Schema.Number,
    message: Schema.String,
  }),
  [{ code: 10336 }],
) {}

export class DispatchNamespaceNotFound extends T.applyErrorMatchers(
  Schema.TaggedErrorClass<DispatchNamespaceNotFound>()(
    "DispatchNamespaceNotFound",
    { code: Schema.Number, message: Schema.String },
  ),
  [{ code: 100119 }],
) {}

export class DomainNotFound extends T.applyErrorMatchers(
  Schema.TaggedErrorClass<DomainNotFound>()("DomainNotFound", {
    code: Schema.Number,
    message: Schema.String,
  }),
  [{ code: 100114 }],
) {}

export class DuplicateMigrationTarget extends T.applyErrorMatchers(
  Schema.TaggedErrorClass<DuplicateMigrationTarget>()(
    "DuplicateMigrationTarget",
    { code: Schema.Number, message: Schema.String },
  ),
  [
    {
      code: 10074,
      message: { includes: "cannot be the target of more than one migration" },
    },
  ],
) {}

export class DurableObjectClassNotFound extends T.applyErrorMatchers(
  Schema.TaggedErrorClass<DurableObjectClassNotFound>()(
    "DurableObjectClassNotFound",
    { code: Schema.Number, message: Schema.String },
  ),
  [{ code: 10061 }],
) {}

export class DurableObjectMustBeSqlite extends T.applyErrorMatchers(
  Schema.TaggedErrorClass<DurableObjectMustBeSqlite>()(
    "DurableObjectMustBeSqlite",
    { code: Schema.Number, message: Schema.String },
  ),
  [{ code: 10074, message: { includes: "not a SQLite Durable Object" } }],
) {}

export class Forbidden extends T.applyErrorMatchers(
  Schema.TaggedErrorClass<Forbidden>()("Forbidden", {
    code: Schema.Number,
    message: Schema.String,
  }),
  [{ status: 403 }],
) {}

export class HostnameAlreadyInUse extends T.applyErrorMatchers(
  Schema.TaggedErrorClass<HostnameAlreadyInUse>()("HostnameAlreadyInUse", {
    code: Schema.Number,
    message: Schema.String,
  }),
  [{ code: 100116 }],
) {}

export class HyperdriveConfigNotFound extends T.applyErrorMatchers(
  Schema.TaggedErrorClass<HyperdriveConfigNotFound>()(
    "HyperdriveConfigNotFound",
    { code: Schema.Number, message: Schema.String },
  ),
  [{ code: 10157 }],
) {}

T.applyErrorMatchers(InternalServerError, [
  { code: 10002, message: { includes: "An unknown error has occurred" } },
]);

export class InvalidRoute extends T.applyErrorMatchers(
  Schema.TaggedErrorClass<InvalidRoute>()("InvalidRoute", {
    code: Schema.Number,
    message: Schema.String,
  }),
  [{ code: 7003 }, { code: 7003, message: { includes: "Could not route" } }],
) {}

export class InvalidRoutePattern extends T.applyErrorMatchers(
  Schema.TaggedErrorClass<InvalidRoutePattern>()("InvalidRoutePattern", {
    code: Schema.Number,
    message: Schema.String,
  }),
  [{ code: 10022 }],
) {}

export class InvalidWorkerScript extends T.applyErrorMatchers(
  Schema.TaggedErrorClass<InvalidWorkerScript>()("InvalidWorkerScript", {
    code: Schema.Number,
    message: Schema.String,
  }),
  [{ code: 10068 }],
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

export class ObservabilityDestinationCreateFailed extends T.applyErrorMatchers(
  Schema.TaggedErrorClass<ObservabilityDestinationCreateFailed>()(
    "ObservabilityDestinationCreateFailed",
    { code: Schema.Number, message: Schema.String },
  ),
  [{ status: 400, message: "Bad Request" }],
) {}

export class ObservabilityDestinationNotFound extends T.applyErrorMatchers(
  Schema.TaggedErrorClass<ObservabilityDestinationNotFound>()(
    "ObservabilityDestinationNotFound",
    { code: Schema.Number, message: Schema.String },
  ),
  [{ status: 404 }],
) {}

export class ObservabilityDestinationPreflightFailed extends T.applyErrorMatchers(
  Schema.TaggedErrorClass<ObservabilityDestinationPreflightFailed>()(
    "ObservabilityDestinationPreflightFailed",
    { code: Schema.Number, message: Schema.String },
  ),
  [{ status: 400, message: "Bad Request" }],
) {}

export class QueueConsumerConflict extends T.applyErrorMatchers(
  Schema.TaggedErrorClass<QueueConsumerConflict>()("QueueConsumerConflict", {
    code: Schema.Number,
    message: Schema.String,
  }),
  [{ code: 10064 }],
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

export class RouteNotFound extends T.applyErrorMatchers(
  Schema.TaggedErrorClass<RouteNotFound>()("RouteNotFound", {
    code: Schema.Number,
    message: Schema.String,
  }),
  [{ code: 10009 }, { status: 404 }],
) {}

export class RouteScriptNotFound extends T.applyErrorMatchers(
  Schema.TaggedErrorClass<RouteScriptNotFound>()("RouteScriptNotFound", {
    code: Schema.Number,
    message: Schema.String,
  }),
  [{ code: 10019 }],
) {}

export class ScriptModuleNotFound extends T.applyErrorMatchers(
  Schema.TaggedErrorClass<ScriptModuleNotFound>()("ScriptModuleNotFound", {
    code: Schema.Number,
    message: Schema.String,
  }),
  [{ code: 10021, message: { includes: "No such module" } }],
) {}

export class ScriptStartupError extends T.applyErrorMatchers(
  Schema.TaggedErrorClass<ScriptStartupError>()("ScriptStartupError", {
    code: Schema.Number,
    message: Schema.String,
  }),
  [{ code: 10021 }],
) {}

export class SecretNotFound extends T.applyErrorMatchers(
  Schema.TaggedErrorClass<SecretNotFound>()("SecretNotFound", {
    code: Schema.Number,
    message: Schema.String,
  }),
  [{ code: 10056 }],
) {}

export class SecretsStoreBindingNotFound extends T.applyErrorMatchers(
  Schema.TaggedErrorClass<SecretsStoreBindingNotFound>()(
    "SecretsStoreBindingNotFound",
    { code: Schema.Number, message: Schema.String },
  ),
  [{ code: 10182 }],
) {}

export class ServiceBindingConflict extends T.applyErrorMatchers(
  Schema.TaggedErrorClass<ServiceBindingConflict>()("ServiceBindingConflict", {
    code: Schema.Number,
    message: Schema.String,
  }),
  [{ code: 10142 }],
) {}

export class ServiceBindingNotFound extends T.applyErrorMatchers(
  Schema.TaggedErrorClass<ServiceBindingNotFound>()("ServiceBindingNotFound", {
    code: Schema.Number,
    message: Schema.String,
  }),
  [{ code: 10144 }],
) {}

export class SubdomainAlreadyExists extends T.applyErrorMatchers(
  Schema.TaggedErrorClass<SubdomainAlreadyExists>()("SubdomainAlreadyExists", {
    code: Schema.Number,
    message: Schema.String,
  }),
  [{ code: 10036 }],
) {}

export class SubdomainNotFound extends T.applyErrorMatchers(
  Schema.TaggedErrorClass<SubdomainNotFound>()("SubdomainNotFound", {
    code: Schema.Number,
    message: Schema.String,
  }),
  [{ status: 404 }],
) {}

export class VectorizeIndexNotFound extends T.applyErrorMatchers(
  Schema.TaggedErrorClass<VectorizeIndexNotFound>()("VectorizeIndexNotFound", {
    code: Schema.Number,
    message: Schema.String,
  }),
  [{ code: 10159 }],
) {}

export class VersionNotFound extends T.applyErrorMatchers(
  Schema.TaggedErrorClass<VersionNotFound>()("VersionNotFound", {
    code: Schema.Number,
    message: Schema.String,
  }),
  [{ code: 100146 }],
) {}

export class WorkerHasNoVersions extends T.applyErrorMatchers(
  Schema.TaggedErrorClass<WorkerHasNoVersions>()("WorkerHasNoVersions", {
    code: Schema.Number,
    message: Schema.String,
  }),
  [{ status: 404, message: { includes: "has no versions" } }],
) {}

export class WorkerNotFound extends T.applyErrorMatchers(
  Schema.TaggedErrorClass<WorkerNotFound>()("WorkerNotFound", {
    code: Schema.Number,
    message: Schema.String,
  }),
  [{ code: 10007 }],
) {}

export class WorkerVersionNotFound extends T.applyErrorMatchers(
  Schema.TaggedErrorClass<WorkerVersionNotFound>()("WorkerVersionNotFound", {
    code: Schema.Number,
    message: Schema.String,
  }),
  [{ code: 10071 }],
) {}

// =============================================================================
// Shared nested schemas (hoisted, module-private)
// =============================================================================

interface ListBetaWorkersResponseResult {
  /** ID of the referencing Worker. */
  id: string;
  /** Name of the referencing Worker. */
  name: string;
}
const ListBetaWorkersResponseResult = /*@__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    id: Schema.String,
    name: Schema.String,
  }),
) as unknown as Schema.Codec<ListBetaWorkersResponseResult>;

interface ListBetaWorkersResponseResultInfo {
  count?: number | null;
  page?: number | null;
  perPage?: number | null;
  totalCount?: number | null;
}
const ListBetaWorkersResponseResultInfo = /*@__PURE__*/ Schema.suspend(() =>
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
) as unknown as Schema.Codec<ListBetaWorkersResponseResultInfo>;

interface Logs {
  /** A list of destinations where logs will be exported to. */
  destinations?: string[] | null;
  /** Whether logs are enabled for the Worker. */
  enabled?: boolean | null;
  /** The sampling rate for logs. From 0 to 1 (1 = 100%, 0.1 = 10%). */
  headSamplingRate?: number | null;
  /** Whether [invocation logs](https://developers.cloudflare.com/workers/observability/logs/workers-logs/#invocation-logs) are enabled for the Worker. */
  invocationLogs?: boolean | null;
  /** Whether log persistence is enabled for the Worker. */
  persist?: boolean | null;
}
const Logs = /*@__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    destinations: Schema.optional(
      Schema.Union([Schema.Array(Schema.String), Schema.Null]),
    ),
    enabled: Schema.optional(Schema.Union([Schema.Boolean, Schema.Null])),
    headSamplingRate: Schema.optional(
      Schema.Union([Schema.Number, Schema.Null]),
    ),
    invocationLogs: Schema.optional(
      Schema.Union([Schema.Boolean, Schema.Null]),
    ),
    persist: Schema.optional(Schema.Union([Schema.Boolean, Schema.Null])),
  }).pipe(
    Schema.encodeKeys({
      destinations: "destinations",
      enabled: "enabled",
      headSamplingRate: "head_sampling_rate",
      invocationLogs: "invocation_logs",
      persist: "persist",
    }),
  ),
) as unknown as Schema.Codec<Logs>;

interface Traces {
  /** A list of destinations where traces will be exported to. */
  destinations?: string[] | null;
  /** Whether traces are enabled for the Worker. */
  enabled?: boolean | null;
  /** The sampling rate for traces. From 0 to 1 (1 = 100%, 0.1 = 10%). */
  headSamplingRate?: number | null;
  /** Whether trace persistence is enabled for the Worker. */
  persist?: boolean | null;
  /** Controls how inbound trace context (traceparent/tracestate) headers on incoming requests are handled. "authenticated" (default) honors inbound trace context only when accompanied by a valid trace auth */
  propagationPolicy?: "authenticated" | "accept" | (string & {}) | null;
}
const Traces = /*@__PURE__*/ Schema.suspend(() =>
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
  enabled?: boolean | null;
  /** The sampling rate for observability. From 0 to 1 (1 = 100%, 0.1 = 10%). */
  headSamplingRate?: number | null;
  /** Log settings for the Worker. */
  logs?: {
    destinations?: string[] | null;
    enabled?: boolean | null;
    headSamplingRate?: number | null;
    invocationLogs?: boolean | null;
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
const Observability = /*@__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    enabled: Schema.optional(Schema.Union([Schema.Boolean, Schema.Null])),
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

interface Subdomain {
  /** Whether the \ .workers.dev subdomain is enabled for the Worker. */
  enabled?: boolean | null;
  /** Whether [preview URLs](https://developers.cloudflare.com/workers/configuration/previews/) are enabled for the Worker. */
  previewsEnabled?: boolean | null;
}
const Subdomain = /*@__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    enabled: Schema.optional(Schema.Union([Schema.Boolean, Schema.Null])),
    previewsEnabled: Schema.optional(
      Schema.Union([Schema.Boolean, Schema.Null]),
    ),
  }).pipe(
    Schema.encodeKeys({
      enabled: "enabled",
      previewsEnabled: "previews_enabled",
    }),
  ),
) as unknown as Schema.Codec<Subdomain>;

interface TailConsumer {
  /** Name of the consumer Worker. */
  name: string;
}
const TailConsumer = /*@__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    name: Schema.String,
  }),
) as unknown as Schema.Codec<TailConsumer>;

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

interface Annotations {
  /** Human-readable message about the version. Truncated to 1000 bytes if longer. */
  workersMessage?: string | null;
  /** User-provided identifier for the version. Maximum 100 bytes. */
  workersTag?: string | null;
  /** Operation that triggered the creation of the version. */
  workersTriggeredBy?: string | null;
}
const Annotations = /*@__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    workersMessage: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
    workersTag: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
    workersTriggeredBy: Schema.optional(
      Schema.Union([Schema.String, Schema.Null]),
    ),
  }).pipe(
    Schema.encodeKeys({
      workersMessage: "workers/message",
      workersTag: "workers/tag",
      workersTriggeredBy: "workers/triggered_by",
    }),
  ),
) as unknown as Schema.Codec<Annotations>;

interface Config {
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
}
const Config = /*@__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
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
  }).pipe(
    Schema.encodeKeys({
      htmlHandling: "html_handling",
      notFoundHandling: "not_found_handling",
      runWorkerFirst: "run_worker_first",
    }),
  ),
) as unknown as Schema.Codec<Config>;

interface Assets {
  /** Configuration for assets within a Worker. */
  config?: {
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
  } | null;
  /** Token provided upon successful upload of all files from a registered manifest. */
  jwt?: string | null;
}
const Assets = /*@__PURE__*/ Schema.suspend(() =>
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
const WorkersBindingKindAI = /*@__PURE__*/ Schema.suspend(() =>
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
const WorkersBindingKindAISearch = /*@__PURE__*/ Schema.suspend(() =>
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
const WorkersBindingKindAISearchNamespace = /*@__PURE__*/ Schema.suspend(() =>
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
const WorkersBindingKindAnalyticsEngine = /*@__PURE__*/ Schema.suspend(() =>
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
const WorkersBindingKindAssets = /*@__PURE__*/ Schema.suspend(() =>
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
const WorkersBindingKindBrowser = /*@__PURE__*/ Schema.suspend(() =>
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
const WorkersBindingKindD1 = /*@__PURE__*/ Schema.suspend(() =>
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
const WorkersBindingKindDataBlob = /*@__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    name: Schema.String,
    part: Schema.String,
    type: Schema.Literal("data_blob"),
  }),
) as unknown as Schema.Codec<WorkersBindingKindDataBlob>;

interface Worker {
  /** Entrypoint to invoke on the outbound worker. */
  entrypoint?: string | null;
  /** Environment of the outbound worker. */
  environment?: string | null;
  /** Name of the outbound worker. */
  service?: string | null;
}
const Worker = /*@__PURE__*/ Schema.suspend(() =>
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
const Outbound = /*@__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    params: Schema.optional(
      Schema.Union([Schema.Array(TailConsumer), Schema.Null]),
    ),
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
const WorkersBindingKindDispatchNamespace = /*@__PURE__*/ Schema.suspend(() =>
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
const WorkersBindingKindDurableObjectNamespace = /*@__PURE__*/ Schema.suspend(
  () =>
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
const WorkersBindingKindHyperdrive = /*@__PURE__*/ Schema.suspend(() =>
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
const WorkersBindingKindInherit = /*@__PURE__*/ Schema.suspend(() =>
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
const WorkersBindingKindImages = /*@__PURE__*/ Schema.suspend(() =>
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
const WorkersBindingKindJson = /*@__PURE__*/ Schema.suspend(() =>
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
const WorkersBindingKindKVNamespace = /*@__PURE__*/ Schema.suspend(() =>
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
const WorkersBindingKindMedia = /*@__PURE__*/ Schema.suspend(() =>
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
const WorkersBindingKindMTLSCertificate = /*@__PURE__*/ Schema.suspend(() =>
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
const WorkersBindingKindPlainText = /*@__PURE__*/ Schema.suspend(() =>
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
const WorkersBindingKindPipelines = /*@__PURE__*/ Schema.suspend(() =>
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
const WorkersBindingKindQueue = /*@__PURE__*/ Schema.suspend(() =>
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
const Simple = /*@__PURE__*/ Schema.suspend(() =>
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
const WorkersBindingKindRatelimit = /*@__PURE__*/ Schema.suspend(() =>
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
const WorkersBindingKindR2Bucket = /*@__PURE__*/ Schema.suspend(() =>
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
  /** The kind of resource that the binding provides. */
  type: "secret_text";
}
const WorkersBindingKindSecretText = /*@__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    name: Schema.String,
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
const WorkersBindingKindSendEmail = /*@__PURE__*/ Schema.suspend(() =>
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
const WorkersBindingKindService = /*@__PURE__*/ Schema.suspend(() =>
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
const WorkersBindingKindTextBlob = /*@__PURE__*/ Schema.suspend(() =>
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
const WorkersBindingKindVectorize = /*@__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    indexName: Schema.String,
    name: Schema.String,
    type: Schema.Literal("vectorize"),
  }).pipe(
    Schema.encodeKeys({ indexName: "index_name", name: "name", type: "type" }),
  ),
) as unknown as Schema.Codec<WorkersBindingKindVectorize>;

interface WorkersBindingKindVersionMetadata {
  /** A JavaScript variable name for the binding. */
  name: string;
  /** The kind of resource that the binding provides. */
  type: "version_metadata";
}
const WorkersBindingKindVersionMetadata = /*@__PURE__*/ Schema.suspend(() =>
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
const WorkersBindingKindSecretsStoreSecret = /*@__PURE__*/ Schema.suspend(() =>
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
const WorkersBindingKindFlagship = /*@__PURE__*/ Schema.suspend(() =>
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
}
const WorkersBindingKindSecretKey = /*@__PURE__*/ Schema.suspend(() =>
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
const WorkersBindingKindWorkflow = /*@__PURE__*/ Schema.suspend(() =>
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
const WorkersBindingKindWasmModule = /*@__PURE__*/ Schema.suspend(() =>
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
const WorkersBindingKindVPCService = /*@__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    name: Schema.String,
    serviceId: Schema.String,
    type: Schema.Literal("vpc_service"),
  }).pipe(
    Schema.encodeKeys({ name: "name", serviceId: "service_id", type: "type" }),
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
const WorkersBindingKindVPCNetwork = /*@__PURE__*/ Schema.suspend(() =>
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

interface GetBetaWorkerVersionResponseBinding35 {
  name: string;
  type: "worker_loader";
}
const GetBetaWorkerVersionResponseBinding35 = /*@__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    name: Schema.String,
    type: Schema.Literal("worker_loader"),
  }),
) as unknown as Schema.Codec<GetBetaWorkerVersionResponseBinding35>;

interface GetBetaWorkerVersionResponseBinding36 {
  name: string;
  type: "artifacts";
  namespace: string;
}
const GetBetaWorkerVersionResponseBinding36 = /*@__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    name: Schema.String,
    type: Schema.Literal("artifacts"),
    namespace: Schema.String,
  }),
) as unknown as Schema.Codec<GetBetaWorkerVersionResponseBinding36>;

interface Container {
  /** Select which Durable Object class should get this container attached. */
  className: string;
}
const Container = /*@__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    className: Schema.String,
  }).pipe(Schema.encodeKeys({ className: "class_name" })),
) as unknown as Schema.Codec<Container>;

interface Limits {
  /** CPU time limit in milliseconds. */
  cpuMs?: number | null;
  /** Subrequest limit per request. */
  subrequests?: number | null;
}
const Limits = /*@__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    cpuMs: Schema.optional(Schema.Union([Schema.Number, Schema.Null])),
    subrequests: Schema.optional(Schema.Union([Schema.Number, Schema.Null])),
  }).pipe(Schema.encodeKeys({ cpuMs: "cpu_ms", subrequests: "subrequests" })),
) as unknown as Schema.Codec<Limits>;

interface RenamedClass {
  from?: string | null;
  to?: string | null;
}
const RenamedClass = /*@__PURE__*/ Schema.suspend(() =>
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
const TransferredClass = /*@__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    from: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
    fromScript: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
    to: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
  }).pipe(
    Schema.encodeKeys({ from: "from", fromScript: "from_script", to: "to" }),
  ),
) as unknown as Schema.Codec<TransferredClass>;

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
const MigrationStepParam = /*@__PURE__*/ Schema.suspend(() =>
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
const WorkersMultipleStepMigrations = /*@__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    newTag: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
    oldTag: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
    steps: Schema.optional(
      Schema.Union([Schema.Array(MigrationStepParam), Schema.Null]),
    ),
  }).pipe(
    Schema.encodeKeys({ newTag: "new_tag", oldTag: "old_tag", steps: "steps" }),
  ),
) as unknown as Schema.Codec<WorkersMultipleStepMigrations>;

interface Module {
  /** The base64-encoded module content. */
  contentBase64: string;
  /** The content type of the module. */
  contentType: string;
  /** The name of the module. */
  name: string;
}
const Module = /*@__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    contentBase64: Schema.String,
    contentType: Schema.String,
    name: Schema.String,
  }).pipe(
    Schema.encodeKeys({
      contentBase64: "content_base64",
      contentType: "content_type",
      name: "name",
    }),
  ),
) as unknown as Schema.Codec<Module>;

interface Mode {
  /** Enables [Smart Placement](https://developers.cloudflare.com/workers/configuration/smart-placement). */
  mode: "smart";
}
const Mode = /*@__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    mode: Schema.Literal("smart"),
  }),
) as unknown as Schema.Codec<Mode>;

interface Region {
  /** Cloud region for targeted placement in format 'provider:region'. */
  region: string;
}
const Region = /*@__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    region: Schema.String,
  }),
) as unknown as Schema.Codec<Region>;

interface Hostname {
  /** HTTP hostname for targeted placement. */
  hostname: string;
}
const Hostname = /*@__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    hostname: Schema.String,
  }),
) as unknown as Schema.Codec<Hostname>;

interface Host {
  /** TCP host and port for targeted placement. */
  host: string;
}
const Host = /*@__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    host: Schema.String,
  }),
) as unknown as Schema.Codec<Host>;

interface GetBetaWorkerVersionResponsePlacement4 {
  /** Targeted placement mode. */
  mode: "targeted";
  /** Cloud region for targeted placement in format 'provider:region'. */
  region: string;
}
const GetBetaWorkerVersionResponsePlacement4 = /*@__PURE__*/ Schema.suspend(
  () =>
    Schema.Struct({
      mode: Schema.Literal("targeted"),
      region: Schema.String,
    }),
) as unknown as Schema.Codec<GetBetaWorkerVersionResponsePlacement4>;

interface GetBetaWorkerVersionResponsePlacement5 {
  /** HTTP hostname for targeted placement. */
  hostname: string;
  /** Targeted placement mode. */
  mode: "targeted";
}
const GetBetaWorkerVersionResponsePlacement5 = /*@__PURE__*/ Schema.suspend(
  () =>
    Schema.Struct({
      hostname: Schema.String,
      mode: Schema.Literal("targeted"),
    }),
) as unknown as Schema.Codec<GetBetaWorkerVersionResponsePlacement5>;

interface GetBetaWorkerVersionResponsePlacement6 {
  /** TCP host and port for targeted placement. */
  host: string;
  /** Targeted placement mode. */
  mode: "targeted";
}
const GetBetaWorkerVersionResponsePlacement6 = /*@__PURE__*/ Schema.suspend(
  () =>
    Schema.Struct({
      host: Schema.String,
      mode: Schema.Literal("targeted"),
    }),
) as unknown as Schema.Codec<GetBetaWorkerVersionResponsePlacement6>;

interface GetBetaWorkerVersionResponsePlacement7 {
  /** Targeted placement mode. */
  mode: "targeted";
  /** Array of placement targets (currently limited to single target). */
  target: ({ region: string } | { hostname: string } | { host: string })[];
}
const GetBetaWorkerVersionResponsePlacement7 = /*@__PURE__*/ Schema.suspend(
  () =>
    Schema.Struct({
      mode: Schema.Literal("targeted"),
      target: Schema.Array(Schema.Union([Region, Hostname, Host])),
    }),
) as unknown as Schema.Codec<GetBetaWorkerVersionResponsePlacement7>;

interface ListBetaWorkerVersionsResponseResult {
  /** Version identifier. */
  id: string;
  /** When the version was created. */
  createdOn: string;
  /** The integer version number, starting from one. */
  number: number;
  /** All routable URLs that always point to this version. Does not include alias URLs, since aliases can be updated to point to a different version. */
  urls: string[];
  /** Metadata about the version. */
  annotations?: {
    workersMessage?: string | null;
    workersTag?: string | null;
    workersTriggeredBy?: string | null;
  } | null;
  /** Configuration for assets within a Worker.  [`_headers`](https://developers.cloudflare.com/workers/static-assets/headers/#custom-headers) and [`_redirects`](https://developers.cloudflare.com/workers/st */
  assets?: {
    config?: {
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
        | { name: string; type: "worker_loader" }
        | { name: string; type: "artifacts"; namespace: string }
      )[]
    | null;
  /** Date indicating targeted support in the Workers runtime. Backwards incompatible fixes to the runtime following this date will not affect this Worker. */
  compatibilityDate?: string | null;
  /** Flags that enable or disable certain features in the Workers runtime. Used to enable upcoming features or opt in or out of specific changes not included in a `compatibility_date`. */
  compatibilityFlags?: string[] | null;
  /** List of containers attached to a Worker. Containers can only be attached to Durable Object classes of this Worker script. */
  containers?: { className: string }[] | null;
  /** Resource limits enforced at runtime. */
  limits?: { cpuMs?: number | null; subrequests?: number | null } | null;
  /** The name of the main module in the `modules` array (e.g. the name of the module that exports a `fetch` handler). */
  mainModule?: string | null;
  /** Durable Object migration tag. Set when the version is deployed. Omitted if the version has not been deployed or the Worker does not use Durable Objects. */
  migrationTag?: string | null;
  /** Migrations for Durable Objects associated with the version. Migrations are applied when the version is deployed. */
  migrations?:
    | unknown
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
  /** Code, sourcemaps, and other content used at runtime.  This includes [`_headers`](https://developers.cloudflare.com/workers/static-assets/headers/#custom-headers) and [`_redirects`](https://developers. */
  modules?:
    | { contentBase64: string; contentType: string; name: string }[]
    | null;
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
  /** The client used to create the version. */
  source?: string | null;
  /** Time in milliseconds spent on [Worker startup](https://developers.cloudflare.com/workers/platform/limits/#worker-startup-time). */
  startupTimeMs?: number | null;
  /** @deprecated Usage model for the version. */
  usageModel?: "standard" | "bundled" | "unbound" | (string & {}) | null;
}
const ListBetaWorkerVersionsResponseResult = /*@__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    id: Schema.String,
    createdOn: Schema.String,
    number: Schema.Number,
    urls: Schema.Array(Schema.String),
    annotations: Schema.optional(Schema.Union([Annotations, Schema.Null])),
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
            WorkersBindingKindService,
            WorkersBindingKindTextBlob,
            WorkersBindingKindVectorize,
            WorkersBindingKindFlagship,
            WorkersBindingKindWorkflow,
            WorkersBindingKindWasmModule,
            WorkersBindingKindVPCService,
            GetBetaWorkerVersionResponseBinding36,
            WorkersBindingKindAI,
            WorkersBindingKindAssets,
            WorkersBindingKindBrowser,
            WorkersBindingKindDurableObjectNamespace,
            WorkersBindingKindInherit,
            WorkersBindingKindImages,
            WorkersBindingKindMedia,
            WorkersBindingKindSecretText,
            WorkersBindingKindSendEmail,
            WorkersBindingKindVersionMetadata,
            WorkersBindingKindVPCNetwork,
            GetBetaWorkerVersionResponseBinding35,
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
    containers: Schema.optional(
      Schema.Union([Schema.Array(Container), Schema.Null]),
    ),
    limits: Schema.optional(Schema.Union([Limits, Schema.Null])),
    mainModule: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
    migrationTag: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
    migrations: Schema.optional(
      Schema.Union([
        Schema.Union([Schema.Unknown, WorkersMultipleStepMigrations]),
        Schema.Null,
      ]),
    ),
    modules: Schema.optional(Schema.Union([Schema.Array(Module), Schema.Null])),
    placement: Schema.optional(
      Schema.Union([
        Schema.Union([
          GetBetaWorkerVersionResponsePlacement4,
          GetBetaWorkerVersionResponsePlacement5,
          GetBetaWorkerVersionResponsePlacement6,
          GetBetaWorkerVersionResponsePlacement7,
          Mode,
          Region,
          Hostname,
          Host,
        ]),
        Schema.Null,
      ]),
    ),
    source: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
    startupTimeMs: Schema.optional(Schema.Union([Schema.Number, Schema.Null])),
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
      createdOn: "created_on",
      number: "number",
      urls: "urls",
      annotations: "annotations",
      assets: "assets",
      bindings: "bindings",
      compatibilityDate: "compatibility_date",
      compatibilityFlags: "compatibility_flags",
      containers: "containers",
      limits: "limits",
      mainModule: "main_module",
      migrationTag: "migration_tag",
      migrations: "migrations",
      modules: "modules",
      placement: "placement",
      source: "source",
      startupTimeMs: "startup_time_ms",
      usageModel: "usage_model",
    }),
  ),
) as unknown as Schema.Codec<ListBetaWorkerVersionsResponseResult>;

interface Annotations2 {
  /** Human-readable message about the version. Truncated to 1000 bytes if longer. */
  workersMessage?: string | null;
  /** User-provided identifier for the version. Maximum 100 bytes. */
  workersTag?: string | null;
}
const Annotations2 = /*@__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    workersMessage: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
    workersTag: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
  }).pipe(
    Schema.encodeKeys({
      workersMessage: "workers/message",
      workersTag: "workers/tag",
    }),
  ),
) as unknown as Schema.Codec<Annotations2>;

interface WorkersBindingKindDurableObjectNamespace2 {
  /** A JavaScript variable name for the binding. */
  name: string;
  /** The kind of resource that the binding provides. */
  type: "durable_object_namespace";
  /** The exported class name of the Durable Object. */
  className: string;
  /** The dispatch namespace the Durable Object script belongs to. */
  dispatchNamespace?: string | null;
  /** The environment of the script_name to bind to. */
  environment?: string | null;
  /** Namespace identifier tag. */
  namespaceId?: string | null;
  /** The script where the Durable Object is defined, if it is external to this Worker. */
  scriptName?: string | null;
}
const WorkersBindingKindDurableObjectNamespace2 = /*@__PURE__*/ Schema.suspend(
  () =>
    Schema.Struct({
      name: Schema.String,
      type: Schema.Literal("durable_object_namespace"),
      className: Schema.String,
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
) as unknown as Schema.Codec<WorkersBindingKindDurableObjectNamespace2>;

interface WorkersBindingKindSecretText2 {
  /** A JavaScript variable name for the binding. */
  name: string;
  /** The secret value to use. */
  text: string;
  /** The kind of resource that the binding provides. */
  type: "secret_text";
}
const WorkersBindingKindSecretText2 = /*@__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    name: Schema.String,
    text: Schema.String,
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
  /** Base64-encoded key data. Required if `format` is "raw", "pkcs8", or "spki". */
  keyBase64?: string | null;
  /** Key data in [JSON Web Key](https://developer.mozilla.org/en-US/docs/Web/API/SubtleCrypto/importKey#json_web_key) format. Required if `format` is "jwk". */
  keyJwk?: unknown | null;
}
const WorkersBindingKindSecretKey2 = /*@__PURE__*/ Schema.suspend(() =>
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
) as unknown as Schema.Codec<WorkersBindingKindSecretKey2>;

interface WorkersBindingKindWorkflow2 {
  /** A JavaScript variable name for the binding. */
  name: string;
  /** The kind of resource that the binding provides. */
  type: "workflow";
  /** Name of the Workflow to bind to. */
  workflowName: string;
  /** Class name of the Workflow. Should only be provided if the Workflow belongs to this script. */
  className: string;
  /** Script name that contains the Workflow. If not provided, defaults to this script name. */
  scriptName?: string | null;
}
const WorkersBindingKindWorkflow2 = /*@__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    name: Schema.String,
    type: Schema.Literal("workflow"),
    workflowName: Schema.String,
    className: Schema.String,
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
) as unknown as Schema.Codec<WorkersBindingKindWorkflow2>;

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
const SingleStepMigrationParam = /*@__PURE__*/ Schema.suspend(() =>
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

interface ListDomainsResponseResult {
  /** Immutable ID of the domain. */
  id: string;
  /** ID of the TLS certificate issued for the domain. */
  certId: string;
  /** @deprecated Worker environment associated with the domain. */
  environment: string;
  /** Hostname of the domain. Can be either the zone apex or a subdomain of the zone. Requests to this hostname will be routed to the configured Worker. */
  hostname: string;
  /** Name of the Worker associated with the domain. Requests to the configured hostname will be routed to this Worker. */
  service: string;
  /** ID of the zone containing the domain hostname. */
  zoneId: string;
  /** Name of the zone containing the domain hostname. */
  zoneName: string;
}
const ListDomainsResponseResult = /*@__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    id: Schema.String,
    certId: Schema.String,
    environment: Schema.String,
    hostname: Schema.String,
    service: Schema.String,
    zoneId: Schema.String,
    zoneName: Schema.String,
  }).pipe(
    Schema.encodeKeys({
      id: "id",
      certId: "cert_id",
      environment: "environment",
      hostname: "hostname",
      service: "service",
      zoneId: "zone_id",
      zoneName: "zone_name",
    }),
  ),
) as unknown as Schema.Codec<ListDomainsResponseResult>;

interface JobStatus {
  errorMessage: string;
  lastComplete: string;
  lastError: string;
}
const JobStatus = /*@__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    errorMessage: Schema.String,
    lastComplete: Schema.String,
    lastError: Schema.String,
  }).pipe(
    Schema.encodeKeys({
      errorMessage: "error_message",
      lastComplete: "last_complete",
      lastError: "last_error",
    }),
  ),
) as unknown as Schema.Codec<JobStatus>;

interface Configuration {
  destinationConf: string;
  headers: Record<string, unknown>;
  jobStatus: { errorMessage: string; lastComplete: string; lastError: string };
  logpushDataset:
    | "opentelemetry-traces"
    | "opentelemetry-logs"
    | "opentelemetry-metrics"
    | (string & {});
  type: "logpush";
  url: string;
}
const Configuration = /*@__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    destinationConf: Schema.String,
    headers: Schema.Record(Schema.String, Schema.Unknown),
    jobStatus: JobStatus,
    logpushDataset: Schema.Union([
      Schema.Literals([
        "opentelemetry-traces",
        "opentelemetry-logs",
        "opentelemetry-metrics",
      ]),
      Schema.String,
    ]),
    type: Schema.Literal("logpush"),
    url: Schema.String,
  }).pipe(
    Schema.encodeKeys({
      destinationConf: "destination_conf",
      headers: "headers",
      jobStatus: "jobStatus",
      logpushDataset: "logpushDataset",
      type: "type",
      url: "url",
    }),
  ),
) as unknown as Schema.Codec<Configuration>;

interface ListObservabilityDestinationsResponseResult {
  configuration: {
    destinationConf: string;
    headers: Record<string, unknown>;
    jobStatus: {
      errorMessage: string;
      lastComplete: string;
      lastError: string;
    };
    logpushDataset:
      | "opentelemetry-traces"
      | "opentelemetry-logs"
      | "opentelemetry-metrics"
      | (string & {});
    type: "logpush";
    url: string;
  };
  enabled: boolean;
  name: string;
  scripts: string[];
  slug: string;
}
const ListObservabilityDestinationsResponseResult =
  /*@__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      configuration: Configuration,
      enabled: Schema.Boolean,
      name: Schema.String,
      scripts: Schema.Array(Schema.String),
      slug: Schema.String,
    }),
  ) as unknown as Schema.Codec<ListObservabilityDestinationsResponseResult>;

interface Configuration2 {
  headers: Record<string, unknown>;
  logpushDataset:
    | "opentelemetry-traces"
    | "opentelemetry-logs"
    | "opentelemetry-metrics"
    | (string & {});
  type: "logpush";
  url: string;
}
const Configuration2 = /*@__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    headers: Schema.Record(Schema.String, Schema.Unknown),
    logpushDataset: Schema.Union([
      Schema.Literals([
        "opentelemetry-traces",
        "opentelemetry-logs",
        "opentelemetry-metrics",
      ]),
      Schema.String,
    ]),
    type: Schema.Literal("logpush"),
    url: Schema.String,
  }),
) as unknown as Schema.Codec<Configuration2>;

interface Configuration3 {
  destinationConf: string;
  logpushDataset:
    | "opentelemetry-traces"
    | "opentelemetry-logs"
    | "opentelemetry-metrics"
    | (string & {});
  logpushJob: number;
  type: "logpush";
  url: string;
}
const Configuration3 = /*@__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    destinationConf: Schema.String,
    logpushDataset: Schema.Union([
      Schema.Literals([
        "opentelemetry-traces",
        "opentelemetry-logs",
        "opentelemetry-metrics",
      ]),
      Schema.String,
    ]),
    logpushJob: Schema.Number,
    type: Schema.Literal("logpush"),
    url: Schema.String,
  }).pipe(
    Schema.encodeKeys({
      destinationConf: "destination_conf",
      logpushDataset: "logpushDataset",
      logpushJob: "logpushJob",
      type: "type",
      url: "url",
    }),
  ),
) as unknown as Schema.Codec<Configuration3>;

interface Configuration4 {
  headers: Record<string, unknown>;
  type: "logpush";
  url: string;
}
const Configuration4 = /*@__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    headers: Schema.Record(Schema.String, Schema.Unknown),
    type: Schema.Literal("logpush"),
    url: Schema.String,
  }),
) as unknown as Schema.Codec<Configuration4>;

interface Calculation {
  operator:
    | "uniq"
    | "count"
    | "max"
    | "min"
    | "sum"
    | "avg"
    | "median"
    | "p001"
    | "p01"
    | "p05"
    | "p10"
    | "p25"
    | "p75"
    | "p90"
    | "p95"
    | "p99"
    | "p999"
    | "stddev"
    | "variance"
    | "COUNT_DISTINCT"
    | "COUNT"
    | "MAX"
    | "MIN"
    | "SUM"
    | "AVG"
    | "MEDIAN"
    | "P001"
    | "P01"
    | "P05"
    | "P10"
    | "P25"
    | "P75"
    | "P90"
    | "P95"
    | "P99"
    | "P999"
    | "STDDEV"
    | "VARIANCE"
    | (string & {});
  alias?: string | null;
  key?: string | null;
  keyType?: "string" | "number" | "boolean" | (string & {}) | null;
}
const Calculation = /*@__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    operator: Schema.Union([
      Schema.Literals([
        "uniq",
        "count",
        "max",
        "min",
        "sum",
        "avg",
        "median",
        "p001",
        "p01",
        "p05",
        "p10",
        "p25",
        "p75",
        "p90",
        "p95",
        "p99",
        "p999",
        "stddev",
        "variance",
        "COUNT_DISTINCT",
        "COUNT",
        "MAX",
        "MIN",
        "SUM",
        "AVG",
        "MEDIAN",
        "P001",
        "P01",
        "P05",
        "P10",
        "P25",
        "P75",
        "P90",
        "P95",
        "P99",
        "P999",
        "STDDEV",
        "VARIANCE",
      ]),
      Schema.String,
    ]),
    alias: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
    key: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
    keyType: Schema.optional(
      Schema.Union([
        Schema.Union([
          Schema.Literals(["string", "number", "boolean"]),
          Schema.String,
        ]),
        Schema.Null,
      ]),
    ),
  }),
) as unknown as Schema.Codec<Calculation>;

interface ListObservabilityQueriesResponseResultParametersFilter {
  filterCombination: "and" | "or" | "AND" | "OR" | (string & {});
  filters: unknown[];
  kind: "group";
}
const ListObservabilityQueriesResponseResultParametersFilter =
  /*@__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      filterCombination: Schema.Union([
        Schema.Literals(["and", "or", "AND", "OR"]),
        Schema.String,
      ]),
      filters: Schema.Array(Schema.Unknown),
      kind: Schema.Literal("group"),
    }),
  ) as unknown as Schema.Codec<ListObservabilityQueriesResponseResultParametersFilter>;

interface WorkersObservabilityFilterLeaf {
  /** Filter field name. Use verified keys from previous query results or the keys endpoint. Common keys include $metadata.service, $metadata.origin, $metadata.trigger, $metadata.message, and $metadata.erro */
  key: string;
  /** Comparison operator. String operators: includes, not_includes, starts_with, ends_with, regex. Existence: exists, is_null. Set membership: in, not_in (comma-separated values). Numeric: eq, neq, gt, gte */
  operation:
    | "includes"
    | "not_includes"
    | "starts_with"
    | "ends_with"
    | "regex"
    | "exists"
    | "is_null"
    | "in"
    | "not_in"
    | "eq"
    | "neq"
    | "gt"
    | "gte"
    | "lt"
    | "lte"
    | "="
    | "!="
    | ">"
    | ">="
    | "<"
    | "<="
    | "INCLUDES"
    | "DOES_NOT_INCLUDE"
    | "MATCH_REGEX"
    | "EXISTS"
    | "DOES_NOT_EXIST"
    | "IN"
    | "NOT_IN"
    | "STARTS_WITH"
    | "ENDS_WITH"
    | (string & {});
  /** Data type of the filter field. Must match the actual type of the key being filtered. */
  type: "string" | "number" | "boolean" | (string & {});
  /** Discriminator for leaf filter nodes. Always 'filter' when present; may be omitted. */
  kind?: "filter" | null;
  /** Comparison value. Must match actual values in your data — verify with the values endpoint. Ensure the value type (string/number/boolean) matches the field type. String comparisons are case-sensitive.  */
  value?: string | number | boolean | null;
}
const WorkersObservabilityFilterLeaf = /*@__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    key: Schema.String,
    operation: Schema.Union([
      Schema.Literals([
        "includes",
        "not_includes",
        "starts_with",
        "ends_with",
        "regex",
        "exists",
        "is_null",
        "in",
        "not_in",
        "eq",
        "neq",
        "gt",
        "gte",
        "lt",
        "lte",
        "=",
        "!=",
        ">",
        ">=",
        "<",
        "<=",
        "INCLUDES",
        "DOES_NOT_INCLUDE",
        "MATCH_REGEX",
        "EXISTS",
        "DOES_NOT_EXIST",
        "IN",
        "NOT_IN",
        "STARTS_WITH",
        "ENDS_WITH",
      ]),
      Schema.String,
    ]),
    type: Schema.Union([
      Schema.Literals(["string", "number", "boolean"]),
      Schema.String,
    ]),
    kind: Schema.optional(
      Schema.Union([Schema.Literal("filter"), Schema.Null]),
    ),
    value: Schema.optional(
      Schema.Union([
        Schema.Union([Schema.String, Schema.Number, Schema.Boolean]),
        Schema.Null,
      ]),
    ),
  }),
) as unknown as Schema.Codec<WorkersObservabilityFilterLeaf>;

interface GroupBy {
  type: "string" | "number" | "boolean" | (string & {});
  value: string;
}
const GroupBy = /*@__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    type: Schema.Union([
      Schema.Literals(["string", "number", "boolean"]),
      Schema.String,
    ]),
    value: Schema.String,
  }),
) as unknown as Schema.Codec<GroupBy>;

interface Having {
  key: string;
  operation: "eq" | "neq" | "gt" | "gte" | "lt" | "lte" | (string & {});
  value: number;
}
const Having = /*@__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    key: Schema.String,
    operation: Schema.Union([
      Schema.Literals(["eq", "neq", "gt", "gte", "lt", "lte"]),
      Schema.String,
    ]),
    value: Schema.Number,
  }),
) as unknown as Schema.Codec<Having>;

interface Needle {
  value: string | number | boolean;
  isRegex?: boolean | null;
  matchCase?: boolean | null;
}
const Needle = /*@__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    value: Schema.Union([Schema.String, Schema.Number, Schema.Boolean]),
    isRegex: Schema.optional(Schema.Union([Schema.Boolean, Schema.Null])),
    matchCase: Schema.optional(Schema.Union([Schema.Boolean, Schema.Null])),
  }),
) as unknown as Schema.Codec<Needle>;

interface OrderBy {
  /** Configure which Calculation to order the results by. */
  value: string;
  /** Set the order of the results */
  order?: "asc" | "desc" | (string & {}) | null;
}
const OrderBy = /*@__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    value: Schema.String,
    order: Schema.optional(
      Schema.Union([
        Schema.Union([Schema.Literals(["asc", "desc"]), Schema.String]),
        Schema.Null,
      ]),
    ),
  }),
) as unknown as Schema.Codec<OrderBy>;

interface Parameters {
  /** Create Calculations to compute as part of the query. */
  calculations?:
    | {
        operator:
          | "uniq"
          | "count"
          | "max"
          | "min"
          | "sum"
          | "avg"
          | "median"
          | "p001"
          | "p01"
          | "p05"
          | "p10"
          | "p25"
          | "p75"
          | "p90"
          | "p95"
          | "p99"
          | "p999"
          | "stddev"
          | "variance"
          | "COUNT_DISTINCT"
          | "COUNT"
          | "MAX"
          | "MIN"
          | "SUM"
          | "AVG"
          | "MEDIAN"
          | "P001"
          | "P01"
          | "P05"
          | "P10"
          | "P25"
          | "P75"
          | "P90"
          | "P95"
          | "P99"
          | "P999"
          | "STDDEV"
          | "VARIANCE"
          | (string & {});
        alias?: string | null;
        key?: string | null;
        keyType?: "string" | "number" | "boolean" | (string & {}) | null;
      }[]
    | null;
  /** Set the Datasets to query. Leave it empty to query all the datasets. */
  datasets?: string[] | null;
  /** Set a Flag to describe how to combine the filters on the query. */
  filterCombination?: "and" | "or" | "AND" | "OR" | (string & {}) | null;
  /** Configure the Filters to apply to the query. Supports nested groups via kind: 'group'. */
  filters?:
    | (
        | {
            filterCombination: "and" | "or" | "AND" | "OR" | (string & {});
            filters: unknown[];
            kind: "group";
          }
        | {
            key: string;
            operation:
              | "includes"
              | "not_includes"
              | "starts_with"
              | "ends_with"
              | "regex"
              | "exists"
              | "is_null"
              | "in"
              | "not_in"
              | "eq"
              | "neq"
              | "gt"
              | "gte"
              | "lt"
              | "lte"
              | "="
              | "!="
              | ">"
              | ">="
              | "<"
              | "<="
              | "INCLUDES"
              | "DOES_NOT_INCLUDE"
              | "MATCH_REGEX"
              | "EXISTS"
              | "DOES_NOT_EXIST"
              | "IN"
              | "NOT_IN"
              | "STARTS_WITH"
              | "ENDS_WITH"
              | (string & {});
            type: "string" | "number" | "boolean" | (string & {});
            kind?: "filter" | null;
            value?: string | number | boolean | null;
          }
      )[]
    | null;
  /** Define how to group the results of the query. */
  groupBys?:
    | { type: "string" | "number" | "boolean" | (string & {}); value: string }[]
    | null;
  /** Configure the Having clauses that filter on calculations in the query result. */
  havings?:
    | {
        key: string;
        operation: "eq" | "neq" | "gt" | "gte" | "lt" | "lte" | (string & {});
        value: number;
      }[]
    | null;
  /** Set a limit on the number of results / records returned by the query */
  limit?: number | null;
  /** Define an expression to search using full-text search. */
  needle?: {
    value: string | number | boolean;
    isRegex?: boolean | null;
    matchCase?: boolean | null;
  } | null;
  /** Configure the order of the results returned by the query. */
  orderBy?: {
    value: string;
    order?: "asc" | "desc" | (string & {}) | null;
  } | null;
}
const Parameters = /*@__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    calculations: Schema.optional(
      Schema.Union([Schema.Array(Calculation), Schema.Null]),
    ),
    datasets: Schema.optional(
      Schema.Union([Schema.Array(Schema.String), Schema.Null]),
    ),
    filterCombination: Schema.optional(
      Schema.Union([
        Schema.Union([
          Schema.Literals(["and", "or", "AND", "OR"]),
          Schema.String,
        ]),
        Schema.Null,
      ]),
    ),
    filters: Schema.optional(
      Schema.Union([
        Schema.Array(
          Schema.Union([
            ListObservabilityQueriesResponseResultParametersFilter,
            WorkersObservabilityFilterLeaf,
          ]),
        ),
        Schema.Null,
      ]),
    ),
    groupBys: Schema.optional(
      Schema.Union([Schema.Array(GroupBy), Schema.Null]),
    ),
    havings: Schema.optional(Schema.Union([Schema.Array(Having), Schema.Null])),
    limit: Schema.optional(Schema.Union([Schema.Number, Schema.Null])),
    needle: Schema.optional(Schema.Union([Needle, Schema.Null])),
    orderBy: Schema.optional(Schema.Union([OrderBy, Schema.Null])),
  }),
) as unknown as Schema.Codec<Parameters>;

interface ListObservabilityQueriesResponseResult {
  id: string;
  /** If the query wasn't explcitly saved */
  adhoc: boolean;
  created: string;
  createdBy: string;
  description: string | null;
  /** Query name */
  name: string;
  parameters: {
    calculations?:
      | {
          operator:
            | "uniq"
            | "count"
            | "max"
            | "min"
            | "sum"
            | "avg"
            | "median"
            | "p001"
            | "p01"
            | "p05"
            | "p10"
            | "p25"
            | "p75"
            | "p90"
            | "p95"
            | "p99"
            | "p999"
            | "stddev"
            | "variance"
            | "COUNT_DISTINCT"
            | "COUNT"
            | "MAX"
            | "MIN"
            | "SUM"
            | "AVG"
            | "MEDIAN"
            | "P001"
            | "P01"
            | "P05"
            | "P10"
            | "P25"
            | "P75"
            | "P90"
            | "P95"
            | "P99"
            | "P999"
            | "STDDEV"
            | "VARIANCE"
            | (string & {});
          alias?: string | null;
          key?: string | null;
          keyType?: "string" | "number" | "boolean" | (string & {}) | null;
        }[]
      | null;
    datasets?: string[] | null;
    filterCombination?: "and" | "or" | "AND" | "OR" | (string & {}) | null;
    filters?:
      | (
          | {
              filterCombination: "and" | "or" | "AND" | "OR" | (string & {});
              filters: unknown[];
              kind: "group";
            }
          | {
              key: string;
              operation:
                | "includes"
                | "not_includes"
                | "starts_with"
                | "ends_with"
                | "regex"
                | "exists"
                | "is_null"
                | "in"
                | "not_in"
                | "eq"
                | "neq"
                | "gt"
                | "gte"
                | "lt"
                | "lte"
                | "="
                | "!="
                | ">"
                | ">="
                | "<"
                | "<="
                | "INCLUDES"
                | "DOES_NOT_INCLUDE"
                | "MATCH_REGEX"
                | "EXISTS"
                | "DOES_NOT_EXIST"
                | "IN"
                | "NOT_IN"
                | "STARTS_WITH"
                | "ENDS_WITH"
                | (string & {});
              type: "string" | "number" | "boolean" | (string & {});
              kind?: "filter" | null;
              value?: string | number | boolean | null;
            }
        )[]
      | null;
    groupBys?:
      | {
          type: "string" | "number" | "boolean" | (string & {});
          value: string;
        }[]
      | null;
    havings?:
      | {
          key: string;
          operation: "eq" | "neq" | "gt" | "gte" | "lt" | "lte" | (string & {});
          value: number;
        }[]
      | null;
    limit?: number | null;
    needle?: {
      value: string | number | boolean;
      isRegex?: boolean | null;
      matchCase?: boolean | null;
    } | null;
    orderBy?: {
      value: string;
      order?: "asc" | "desc" | (string & {}) | null;
    } | null;
  };
  updated: string;
  updatedBy: string;
}
const ListObservabilityQueriesResponseResult = /*@__PURE__*/ Schema.suspend(
  () =>
    Schema.Struct({
      id: Schema.String,
      adhoc: Schema.Boolean,
      created: Schema.String,
      createdBy: Schema.String,
      description: Schema.Union([Schema.String, Schema.Null]),
      name: Schema.String,
      parameters: Parameters,
      updated: Schema.String,
      updatedBy: Schema.String,
    }),
) as unknown as Schema.Codec<ListObservabilityQueriesResponseResult>;

interface Needle2 {
  value: unknown;
  isRegex?: boolean | null;
  matchCase?: boolean | null;
}
const Needle2 = /*@__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    value: Schema.Unknown,
    isRegex: Schema.optional(Schema.Union([Schema.Boolean, Schema.Null])),
    matchCase: Schema.optional(Schema.Union([Schema.Boolean, Schema.Null])),
  }),
) as unknown as Schema.Codec<Needle2>;

interface Parameters2 {
  /** Create Calculations to compute as part of the query. */
  calculations?:
    | {
        operator:
          | "uniq"
          | "count"
          | "max"
          | "min"
          | "sum"
          | "avg"
          | "median"
          | "p001"
          | "p01"
          | "p05"
          | "p10"
          | "p25"
          | "p75"
          | "p90"
          | "p95"
          | "p99"
          | "p999"
          | "stddev"
          | "variance"
          | "COUNT_DISTINCT"
          | "COUNT"
          | "MAX"
          | "MIN"
          | "SUM"
          | "AVG"
          | "MEDIAN"
          | "P001"
          | "P01"
          | "P05"
          | "P10"
          | "P25"
          | "P75"
          | "P90"
          | "P95"
          | "P99"
          | "P999"
          | "STDDEV"
          | "VARIANCE"
          | (string & {});
        alias?: string | null;
        key?: string | null;
        keyType?: "string" | "number" | "boolean" | (string & {}) | null;
      }[]
    | null;
  /** Set the Datasets to query. Leave it empty to query all the datasets. */
  datasets?: string[] | null;
  /** Set a Flag to describe how to combine the filters on the query. */
  filterCombination?: "and" | "or" | "AND" | "OR" | (string & {}) | null;
  /** Configure the Filters to apply to the query. Supports nested groups via kind: 'group'. */
  filters?:
    | (
        | {
            filterCombination: "and" | "or" | "AND" | "OR" | (string & {});
            filters: unknown[];
            kind: "group";
          }
        | {
            key: string;
            operation:
              | "includes"
              | "not_includes"
              | "starts_with"
              | "ends_with"
              | "regex"
              | "exists"
              | "is_null"
              | "in"
              | "not_in"
              | "eq"
              | "neq"
              | "gt"
              | "gte"
              | "lt"
              | "lte"
              | "="
              | "!="
              | ">"
              | ">="
              | "<"
              | "<="
              | "INCLUDES"
              | "DOES_NOT_INCLUDE"
              | "MATCH_REGEX"
              | "EXISTS"
              | "DOES_NOT_EXIST"
              | "IN"
              | "NOT_IN"
              | "STARTS_WITH"
              | "ENDS_WITH"
              | (string & {});
            type: "string" | "number" | "boolean" | (string & {});
            kind?: "filter" | null;
            value?: string | number | boolean | null;
          }
      )[]
    | null;
  /** Define how to group the results of the query. */
  groupBys?:
    | { type: "string" | "number" | "boolean" | (string & {}); value: string }[]
    | null;
  /** Configure the Having clauses that filter on calculations in the query result. */
  havings?:
    | {
        key: string;
        operation: "eq" | "neq" | "gt" | "gte" | "lt" | "lte" | (string & {});
        value: number;
      }[]
    | null;
  /** Set a limit on the number of results / records returned by the query */
  limit?: number | null;
  /** Define an expression to search using full-text search. */
  needle?: {
    value: unknown;
    isRegex?: boolean | null;
    matchCase?: boolean | null;
  } | null;
  /** Configure the order of the results returned by the query. */
  orderBy?: {
    value: string;
    order?: "asc" | "desc" | (string & {}) | null;
  } | null;
}
const Parameters2 = /*@__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    calculations: Schema.optional(
      Schema.Union([Schema.Array(Calculation), Schema.Null]),
    ),
    datasets: Schema.optional(
      Schema.Union([Schema.Array(Schema.String), Schema.Null]),
    ),
    filterCombination: Schema.optional(
      Schema.Union([
        Schema.Union([
          Schema.Literals(["and", "or", "AND", "OR"]),
          Schema.String,
        ]),
        Schema.Null,
      ]),
    ),
    filters: Schema.optional(
      Schema.Union([
        Schema.Array(
          Schema.Union([
            ListObservabilityQueriesResponseResultParametersFilter,
            WorkersObservabilityFilterLeaf,
          ]),
        ),
        Schema.Null,
      ]),
    ),
    groupBys: Schema.optional(
      Schema.Union([Schema.Array(GroupBy), Schema.Null]),
    ),
    havings: Schema.optional(Schema.Union([Schema.Array(Having), Schema.Null])),
    limit: Schema.optional(Schema.Union([Schema.Number, Schema.Null])),
    needle: Schema.optional(Schema.Union([Needle2, Schema.Null])),
    orderBy: Schema.optional(Schema.Union([OrderBy, Schema.Null])),
  }),
) as unknown as Schema.Codec<Parameters2>;

interface Query {
  id: string;
  /** If the query wasn't explcitly saved */
  adhoc: boolean;
  created: string;
  createdBy: string;
  description: string | null;
  /** Query name */
  name: string;
  parameters: {
    calculations?:
      | {
          operator:
            | "uniq"
            | "count"
            | "max"
            | "min"
            | "sum"
            | "avg"
            | "median"
            | "p001"
            | "p01"
            | "p05"
            | "p10"
            | "p25"
            | "p75"
            | "p90"
            | "p95"
            | "p99"
            | "p999"
            | "stddev"
            | "variance"
            | "COUNT_DISTINCT"
            | "COUNT"
            | "MAX"
            | "MIN"
            | "SUM"
            | "AVG"
            | "MEDIAN"
            | "P001"
            | "P01"
            | "P05"
            | "P10"
            | "P25"
            | "P75"
            | "P90"
            | "P95"
            | "P99"
            | "P999"
            | "STDDEV"
            | "VARIANCE"
            | (string & {});
          alias?: string | null;
          key?: string | null;
          keyType?: "string" | "number" | "boolean" | (string & {}) | null;
        }[]
      | null;
    datasets?: string[] | null;
    filterCombination?: "and" | "or" | "AND" | "OR" | (string & {}) | null;
    filters?:
      | (
          | {
              filterCombination: "and" | "or" | "AND" | "OR" | (string & {});
              filters: unknown[];
              kind: "group";
            }
          | {
              key: string;
              operation:
                | "includes"
                | "not_includes"
                | "starts_with"
                | "ends_with"
                | "regex"
                | "exists"
                | "is_null"
                | "in"
                | "not_in"
                | "eq"
                | "neq"
                | "gt"
                | "gte"
                | "lt"
                | "lte"
                | "="
                | "!="
                | ">"
                | ">="
                | "<"
                | "<="
                | "INCLUDES"
                | "DOES_NOT_INCLUDE"
                | "MATCH_REGEX"
                | "EXISTS"
                | "DOES_NOT_EXIST"
                | "IN"
                | "NOT_IN"
                | "STARTS_WITH"
                | "ENDS_WITH"
                | (string & {});
              type: "string" | "number" | "boolean" | (string & {});
              kind?: "filter" | null;
              value?: string | number | boolean | null;
            }
        )[]
      | null;
    groupBys?:
      | {
          type: "string" | "number" | "boolean" | (string & {});
          value: string;
        }[]
      | null;
    havings?:
      | {
          key: string;
          operation: "eq" | "neq" | "gt" | "gte" | "lt" | "lte" | (string & {});
          value: number;
        }[]
      | null;
    limit?: number | null;
    needle?: {
      value: unknown;
      isRegex?: boolean | null;
      matchCase?: boolean | null;
    } | null;
    orderBy?: {
      value: string;
      order?: "asc" | "desc" | (string & {}) | null;
    } | null;
  };
  updated: string;
  updatedBy: string;
}
const Query = /*@__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    id: Schema.String,
    adhoc: Schema.Boolean,
    created: Schema.String,
    createdBy: Schema.String,
    description: Schema.Union([Schema.String, Schema.Null]),
    name: Schema.String,
    parameters: Parameters2,
    updated: Schema.String,
    updatedBy: Schema.String,
  }),
) as unknown as Schema.Codec<Query>;

interface Timeframe {
  /** Start timestamp for the query timeframe (Unix timestamp in milliseconds) */
  from: number;
  /** End timestamp for the query timeframe (Unix timestamp in milliseconds) */
  to: number;
}
const Timeframe = /*@__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    from: Schema.Number,
    to: Schema.Number,
  }),
) as unknown as Schema.Codec<Timeframe>;

interface Statistics {
  /** Number of uncompressed bytes read from the table. */
  bytesRead: number;
  /** Time in seconds for the query to run. */
  elapsed: number;
  /** Number of rows scanned from the table. */
  rowsRead: number;
  /** The level of Adaptive Bit Rate (ABR) sampling used for the query. If empty the ABR level is 1 */
  abrLevel?: number | null;
}
const Statistics = /*@__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    bytesRead: Schema.Number,
    elapsed: Schema.Number,
    rowsRead: Schema.Number,
    abrLevel: Schema.optional(Schema.Union([Schema.Number, Schema.Null])),
  }).pipe(
    Schema.encodeKeys({
      bytesRead: "bytes_read",
      elapsed: "elapsed",
      rowsRead: "rows_read",
      abrLevel: "abr_level",
    }),
  ),
) as unknown as Schema.Codec<Statistics>;

interface Run {
  /** Unique identifier for this query run. */
  id: string;
  /** Cloudflare account ID that owns this query run. */
  accountId: string;
  /** Whether this was a dry run (results not persisted). */
  dry: boolean;
  /** Number of time-series buckets used for the query. Higher values produce more detailed series data. */
  granularity: number;
  /** A saved query definition with its parameters, metadata, and ownership information. */
  query: {
    id: string;
    adhoc: boolean;
    created: string;
    createdBy: string;
    description: string | null;
    name: string;
    parameters: {
      calculations?:
        | {
            operator:
              | "uniq"
              | "count"
              | "max"
              | "min"
              | "sum"
              | "avg"
              | "median"
              | "p001"
              | "p01"
              | "p05"
              | "p10"
              | "p25"
              | "p75"
              | "p90"
              | "p95"
              | "p99"
              | "p999"
              | "stddev"
              | "variance"
              | "COUNT_DISTINCT"
              | "COUNT"
              | "MAX"
              | "MIN"
              | "SUM"
              | "AVG"
              | "MEDIAN"
              | "P001"
              | "P01"
              | "P05"
              | "P10"
              | "P25"
              | "P75"
              | "P90"
              | "P95"
              | "P99"
              | "P999"
              | "STDDEV"
              | "VARIANCE"
              | (string & {});
            alias?: string | null;
            key?: string | null;
            keyType?: "string" | "number" | "boolean" | (string & {}) | null;
          }[]
        | null;
      datasets?: string[] | null;
      filterCombination?: "and" | "or" | "AND" | "OR" | (string & {}) | null;
      filters?:
        | (
            | {
                filterCombination: "and" | "or" | "AND" | "OR" | (string & {});
                filters: unknown[];
                kind: "group";
              }
            | {
                key: string;
                operation:
                  | "includes"
                  | "not_includes"
                  | "starts_with"
                  | "ends_with"
                  | "regex"
                  | "exists"
                  | "is_null"
                  | "in"
                  | "not_in"
                  | "eq"
                  | "neq"
                  | "gt"
                  | "gte"
                  | "lt"
                  | "lte"
                  | "="
                  | "!="
                  | ">"
                  | ">="
                  | "<"
                  | "<="
                  | "INCLUDES"
                  | "DOES_NOT_INCLUDE"
                  | "MATCH_REGEX"
                  | "EXISTS"
                  | "DOES_NOT_EXIST"
                  | "IN"
                  | "NOT_IN"
                  | "STARTS_WITH"
                  | "ENDS_WITH"
                  | (string & {});
                type: "string" | "number" | "boolean" | (string & {});
                kind?: "filter" | null;
                value?: string | number | boolean | null;
              }
          )[]
        | null;
      groupBys?:
        | {
            type: "string" | "number" | "boolean" | (string & {});
            value: string;
          }[]
        | null;
      havings?:
        | {
            key: string;
            operation:
              | "eq"
              | "neq"
              | "gt"
              | "gte"
              | "lt"
              | "lte"
              | (string & {});
            value: number;
          }[]
        | null;
      limit?: number | null;
      needle?: {
        value: unknown;
        isRegex?: boolean | null;
        matchCase?: boolean | null;
      } | null;
      orderBy?: {
        value: string;
        order?: "asc" | "desc" | (string & {}) | null;
      } | null;
    };
    updated: string;
    updatedBy: string;
  };
  /** Current execution status of the query run. */
  status: "STARTED" | "COMPLETED" | (string & {});
  /** Time range for the query execution */
  timeframe: { from: number; to: number };
  /** ID of the user who initiated the query run. */
  userId: string;
  /** ISO-8601 timestamp when the query run was created. */
  created?: string | null;
  /** Query performance statistics from the database (does not include network latency). */
  statistics?: {
    bytesRead: number;
    elapsed: number;
    rowsRead: number;
    abrLevel?: number | null;
  } | null;
  /** ISO-8601 timestamp when the query run was last updated. */
  updated?: string | null;
}
const Run = /*@__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    id: Schema.String,
    accountId: Schema.String,
    dry: Schema.Boolean,
    granularity: Schema.Number,
    query: Query,
    status: Schema.Union([
      Schema.Literals(["STARTED", "COMPLETED"]),
      Schema.String,
    ]),
    timeframe: Timeframe,
    userId: Schema.String,
    created: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
    statistics: Schema.optional(Schema.Union([Statistics, Schema.Null])),
    updated: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
  }),
) as unknown as Schema.Codec<Run>;

interface Agent {
  /** Class name of the Durable Object agent. */
  agentClass: string;
  /** Breakdown of event counts by event type. */
  eventTypeCounts: Record<string, unknown>;
  /** Timestamp of the earliest event from this agent in the queried window (Unix epoch ms). */
  firstEventMs: number;
  /** Whether the agent emitted any error events in the queried window. */
  hasErrors: boolean;
  /** Timestamp of the most recent event from this agent (Unix epoch ms). */
  lastEventMs: number;
  /** Durable Object namespace the agent belongs to. */
  namespace: string;
  /** Worker service name that hosts this agent. */
  service: string;
  /** Total number of events emitted by this agent in the queried window. */
  totalEvents: number;
}
const Agent = /*@__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    agentClass: Schema.String,
    eventTypeCounts: Schema.Record(Schema.String, Schema.Unknown),
    firstEventMs: Schema.Number,
    hasErrors: Schema.Boolean,
    lastEventMs: Schema.Number,
    namespace: Schema.String,
    service: Schema.String,
    totalEvents: Schema.Number,
  }),
) as unknown as Schema.Codec<Agent>;

interface Group {
  key: string;
  value: string | number | boolean;
}
const Group = /*@__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    key: Schema.String,
    value: Schema.Union([Schema.String, Schema.Number, Schema.Boolean]),
  }),
) as unknown as Schema.Codec<Group>;

interface Aggregate {
  count: number;
  interval: number;
  sampleInterval: number;
  value: number;
  groups?: { key: string; value: string | number | boolean }[] | null;
}
const Aggregate = /*@__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    count: Schema.Number,
    interval: Schema.Number,
    sampleInterval: Schema.Number,
    value: Schema.Number,
    groups: Schema.optional(Schema.Union([Schema.Array(Group), Schema.Null])),
  }),
) as unknown as Schema.Codec<Aggregate>;

interface Data {
  count: number;
  interval: number;
  sampleInterval: number;
  value: number;
  firstSeen?: string | null;
  groups?: { key: string; value: string | number | boolean }[] | null;
  lastSeen?: string | null;
}
const Data = /*@__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    count: Schema.Number,
    interval: Schema.Number,
    sampleInterval: Schema.Number,
    value: Schema.Number,
    firstSeen: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
    groups: Schema.optional(Schema.Union([Schema.Array(Group), Schema.Null])),
    lastSeen: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
  }),
) as unknown as Schema.Codec<Data>;

interface Series {
  data: {
    count: number;
    interval: number;
    sampleInterval: number;
    value: number;
    firstSeen?: string | null;
    groups?: { key: string; value: string | number | boolean }[] | null;
    lastSeen?: string | null;
  }[];
  time: string;
}
const Series = /*@__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    data: Schema.Array(Data),
    time: Schema.String,
  }),
) as unknown as Schema.Codec<Series>;

interface Calculation2 {
  aggregates: {
    count: number;
    interval: number;
    sampleInterval: number;
    value: number;
    groups?: { key: string; value: string | number | boolean }[] | null;
  }[];
  calculation: string;
  series: {
    data: {
      count: number;
      interval: number;
      sampleInterval: number;
      value: number;
      firstSeen?: string | null;
      groups?: { key: string; value: string | number | boolean }[] | null;
      lastSeen?: string | null;
    }[];
    time: string;
  }[];
  alias?: string | null;
}
const Calculation2 = /*@__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    aggregates: Schema.Array(Aggregate),
    calculation: Schema.String,
    series: Schema.Array(Series),
    alias: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
  }),
) as unknown as Schema.Codec<Calculation2>;

interface Metadata {
  /** Unique event ID. Use as the cursor value for offset-based pagination. */
  id: string;
  /** Cloudflare account identifier. */
  account?: string | null;
  /** Cloudflare product that generated this event (e.g. workers, pages). */
  cloudService?: string | null;
  coldStart?: number | null;
  /** Estimated cost units for this invocation. */
  cost?: number | null;
  /** Span duration in milliseconds. */
  duration?: number | null;
  /** Span end time as a Unix epoch in milliseconds. */
  endTime?: number | null;
  /** Error message, present when the log represents an error. */
  error?: string | null;
  /** Templatized version of the error message used for grouping similar errors. */
  errorTemplate?: string | null;
  /** Content-based fingerprint used to group similar events. */
  fingerprint?: string | null;
  /** Log level (e.g. log, debug, info, warn, error). */
  level?: string | null;
  /** Log message text. */
  message?: string | null;
  /** Templatized version of the log message used for grouping similar messages. */
  messageTemplate?: string | null;
  /** Metric name when the event represents a metric data point. */
  metricName?: string | null;
  /** Origin of the event (e.g. fetch, scheduled, queue). */
  origin?: string | null;
  /** Span ID of the parent span in the trace hierarchy. */
  parentSpanId?: string | null;
  /** Infrastructure provider identifier. */
  provider?: string | null;
  /** Cloudflare data center / region that handled the request. */
  region?: string | null;
  /** Cloudflare request ID that ties all logs from a single invocation together. */
  requestId?: string | null;
  /** Worker script name that produced this event. */
  service?: string | null;
  /** Span ID for this individual unit of work within a trace. */
  spanId?: string | null;
  /** Human-readable name for this span. */
  spanName?: string | null;
  /** Stack / deployment identifier. */
  stackId?: string | null;
  /** Span start time as a Unix epoch in milliseconds. */
  startTime?: number | null;
  /** HTTP response status code returned by the Worker. */
  statusCode?: number | null;
  /** Total duration of the entire trace in milliseconds. */
  traceDuration?: number | null;
  /** Distributed trace ID linking spans across services. */
  traceId?: string | null;
  /** Logical transaction name for this request. */
  transactionName?: string | null;
  /** What triggered the invocation (e.g. GET /users, POST /orders, queue message). */
  trigger?: string | null;
  /** Event type classifier (e.g. cf-worker-event, cf-worker-log). */
  type?: string | null;
  /** Request URL that triggered the Worker invocation. */
  url?: string | null;
}
const Metadata = /*@__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    id: Schema.String,
    account: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
    cloudService: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
    coldStart: Schema.optional(Schema.Union([Schema.Number, Schema.Null])),
    cost: Schema.optional(Schema.Union([Schema.Number, Schema.Null])),
    duration: Schema.optional(Schema.Union([Schema.Number, Schema.Null])),
    endTime: Schema.optional(Schema.Union([Schema.Number, Schema.Null])),
    error: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
    errorTemplate: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
    fingerprint: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
    level: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
    message: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
    messageTemplate: Schema.optional(
      Schema.Union([Schema.String, Schema.Null]),
    ),
    metricName: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
    origin: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
    parentSpanId: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
    provider: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
    region: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
    requestId: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
    service: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
    spanId: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
    spanName: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
    stackId: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
    startTime: Schema.optional(Schema.Union([Schema.Number, Schema.Null])),
    statusCode: Schema.optional(Schema.Union([Schema.Number, Schema.Null])),
    traceDuration: Schema.optional(Schema.Union([Schema.Number, Schema.Null])),
    traceId: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
    transactionName: Schema.optional(
      Schema.Union([Schema.String, Schema.Null]),
    ),
    trigger: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
    type: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
    url: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
  }),
) as unknown as Schema.Codec<Metadata>;

interface Preview {
  id?: string | null;
  name?: string | null;
  slug?: string | null;
}
const Preview = /*@__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    id: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
    name: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
    slug: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
  }),
) as unknown as Schema.Codec<Preview>;

interface ScriptVersion {
  id?: string | null;
  message?: string | null;
  tag?: string | null;
}
const ScriptVersion = /*@__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    id: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
    message: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
    tag: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
  }),
) as unknown as Schema.Codec<ScriptVersion>;

interface GetObservabilitySharedQueryResponseEventsEventworkers {
  eventType:
    | "fetch"
    | "scheduled"
    | "alarm"
    | "cron"
    | "queue"
    | "email"
    | "tail"
    | "rpc"
    | "websocket"
    | "workflow"
    | "unknown"
    | (string & {});
  requestId: string;
  scriptName: string;
  durableObjectId?: string | null;
  entrypoint?: string | null;
  event?: Record<string, unknown> | null;
  executionModel?: "durableObject" | "stateless" | (string & {}) | null;
  outcome?: string | null;
  preview?: {
    id?: string | null;
    name?: string | null;
    slug?: string | null;
  } | null;
  scriptVersion?: {
    id?: string | null;
    message?: string | null;
    tag?: string | null;
  } | null;
  spanId?: string | null;
  traceId?: string | null;
  truncated?: boolean | null;
}
const GetObservabilitySharedQueryResponseEventsEventworkers =
  /*@__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      eventType: Schema.Union([
        Schema.Literals([
          "fetch",
          "scheduled",
          "alarm",
          "cron",
          "queue",
          "email",
          "tail",
          "rpc",
          "websocket",
          "workflow",
          "unknown",
        ]),
        Schema.String,
      ]),
      requestId: Schema.String,
      scriptName: Schema.String,
      durableObjectId: Schema.optional(
        Schema.Union([Schema.String, Schema.Null]),
      ),
      entrypoint: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
      event: Schema.optional(
        Schema.Union([
          Schema.Record(Schema.String, Schema.Unknown),
          Schema.Null,
        ]),
      ),
      executionModel: Schema.optional(
        Schema.Union([
          Schema.Union([
            Schema.Literals(["durableObject", "stateless"]),
            Schema.String,
          ]),
          Schema.Null,
        ]),
      ),
      outcome: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
      preview: Schema.optional(Schema.Union([Preview, Schema.Null])),
      scriptVersion: Schema.optional(
        Schema.Union([ScriptVersion, Schema.Null]),
      ),
      spanId: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
      traceId: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
      truncated: Schema.optional(Schema.Union([Schema.Boolean, Schema.Null])),
    }),
  ) as unknown as Schema.Codec<GetObservabilitySharedQueryResponseEventsEventworkers>;

interface DiagnosticsChannelEvent {
  channel: string;
  message: string;
  timestamp: number;
}
const DiagnosticsChannelEvent = /*@__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    channel: Schema.String,
    message: Schema.String,
    timestamp: Schema.Number,
  }),
) as unknown as Schema.Codec<DiagnosticsChannelEvent>;

interface GetObservabilitySharedQueryResponseEventsEventworkers1 {
  cpuTimeMs: number;
  eventType:
    | "fetch"
    | "scheduled"
    | "alarm"
    | "cron"
    | "queue"
    | "email"
    | "tail"
    | "rpc"
    | "websocket"
    | "workflow"
    | "unknown"
    | (string & {});
  outcome: string;
  requestId: string;
  scriptName: string;
  wallTimeMs: number;
  diagnosticsChannelEvents?:
    | { channel: string; message: string; timestamp: number }[]
    | null;
  dispatchNamespace?: string | null;
  durableObjectId?: string | null;
  entrypoint?: string | null;
  event?: Record<string, unknown> | null;
  executionModel?: "durableObject" | "stateless" | (string & {}) | null;
  preview?: {
    id?: string | null;
    name?: string | null;
    slug?: string | null;
  } | null;
  scriptVersion?: {
    id?: string | null;
    message?: string | null;
    tag?: string | null;
  } | null;
  spanId?: string | null;
  traceId?: string | null;
  truncated?: boolean | null;
}
const GetObservabilitySharedQueryResponseEventsEventworkers1 =
  /*@__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      cpuTimeMs: Schema.Number,
      eventType: Schema.Union([
        Schema.Literals([
          "fetch",
          "scheduled",
          "alarm",
          "cron",
          "queue",
          "email",
          "tail",
          "rpc",
          "websocket",
          "workflow",
          "unknown",
        ]),
        Schema.String,
      ]),
      outcome: Schema.String,
      requestId: Schema.String,
      scriptName: Schema.String,
      wallTimeMs: Schema.Number,
      diagnosticsChannelEvents: Schema.optional(
        Schema.Union([Schema.Array(DiagnosticsChannelEvent), Schema.Null]),
      ),
      dispatchNamespace: Schema.optional(
        Schema.Union([Schema.String, Schema.Null]),
      ),
      durableObjectId: Schema.optional(
        Schema.Union([Schema.String, Schema.Null]),
      ),
      entrypoint: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
      event: Schema.optional(
        Schema.Union([
          Schema.Record(Schema.String, Schema.Unknown),
          Schema.Null,
        ]),
      ),
      executionModel: Schema.optional(
        Schema.Union([
          Schema.Union([
            Schema.Literals(["durableObject", "stateless"]),
            Schema.String,
          ]),
          Schema.Null,
        ]),
      ),
      preview: Schema.optional(Schema.Union([Preview, Schema.Null])),
      scriptVersion: Schema.optional(
        Schema.Union([ScriptVersion, Schema.Null]),
      ),
      spanId: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
      traceId: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
      truncated: Schema.optional(Schema.Union([Schema.Boolean, Schema.Null])),
    }),
  ) as unknown as Schema.Codec<GetObservabilitySharedQueryResponseEventsEventworkers1>;

interface Event {
  /** Structured metadata extracted from the event. These fields are indexed and available for filtering and aggregation. */
  $metadata: {
    id: string;
    account?: string | null;
    cloudService?: string | null;
    coldStart?: number | null;
    cost?: number | null;
    duration?: number | null;
    endTime?: number | null;
    error?: string | null;
    errorTemplate?: string | null;
    fingerprint?: string | null;
    level?: string | null;
    message?: string | null;
    messageTemplate?: string | null;
    metricName?: string | null;
    origin?: string | null;
    parentSpanId?: string | null;
    provider?: string | null;
    region?: string | null;
    requestId?: string | null;
    service?: string | null;
    spanId?: string | null;
    spanName?: string | null;
    stackId?: string | null;
    startTime?: number | null;
    statusCode?: number | null;
    traceDuration?: number | null;
    traceId?: string | null;
    transactionName?: string | null;
    trigger?: string | null;
    type?: string | null;
    url?: string | null;
  };
  /** The dataset this event belongs to (e.g. cloudflare-workers). */
  dataset: string;
  /** Raw log payload. May be a string or a structured object depending on how the log was emitted. */
  source: string | Record<string, unknown>;
  /** Event timestamp as a Unix epoch in milliseconds. */
  timestamp: number;
  /** Cloudflare Containers event information that enriches your logs for identifying and debugging issues. */
  $containers?: Record<string, unknown> | null;
  /** Cloudflare Workers event information that enriches your logs for identifying and debugging issues. */
  $workers?:
    | {
        eventType:
          | "fetch"
          | "scheduled"
          | "alarm"
          | "cron"
          | "queue"
          | "email"
          | "tail"
          | "rpc"
          | "websocket"
          | "workflow"
          | "unknown"
          | (string & {});
        requestId: string;
        scriptName: string;
        durableObjectId?: string | null;
        entrypoint?: string | null;
        event?: Record<string, unknown> | null;
        executionModel?: "durableObject" | "stateless" | (string & {}) | null;
        outcome?: string | null;
        preview?: {
          id?: string | null;
          name?: string | null;
          slug?: string | null;
        } | null;
        scriptVersion?: {
          id?: string | null;
          message?: string | null;
          tag?: string | null;
        } | null;
        spanId?: string | null;
        traceId?: string | null;
        truncated?: boolean | null;
      }
    | {
        cpuTimeMs: number;
        eventType:
          | "fetch"
          | "scheduled"
          | "alarm"
          | "cron"
          | "queue"
          | "email"
          | "tail"
          | "rpc"
          | "websocket"
          | "workflow"
          | "unknown"
          | (string & {});
        outcome: string;
        requestId: string;
        scriptName: string;
        wallTimeMs: number;
        diagnosticsChannelEvents?:
          | { channel: string; message: string; timestamp: number }[]
          | null;
        dispatchNamespace?: string | null;
        durableObjectId?: string | null;
        entrypoint?: string | null;
        event?: Record<string, unknown> | null;
        executionModel?: "durableObject" | "stateless" | (string & {}) | null;
        preview?: {
          id?: string | null;
          name?: string | null;
          slug?: string | null;
        } | null;
        scriptVersion?: {
          id?: string | null;
          message?: string | null;
          tag?: string | null;
        } | null;
        spanId?: string | null;
        traceId?: string | null;
        truncated?: boolean | null;
      }
    | null;
}
const Event = /*@__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    $metadata: Metadata,
    dataset: Schema.String,
    source: Schema.Union([
      Schema.String,
      Schema.Record(Schema.String, Schema.Unknown),
    ]),
    timestamp: Schema.Number,
    $containers: Schema.optional(
      Schema.Union([Schema.Record(Schema.String, Schema.Unknown), Schema.Null]),
    ),
    $workers: Schema.optional(
      Schema.Union([
        Schema.Union([
          GetObservabilitySharedQueryResponseEventsEventworkers1,
          GetObservabilitySharedQueryResponseEventsEventworkers,
        ]),
        Schema.Null,
      ]),
    ),
  }),
) as unknown as Schema.Codec<Event>;

interface Field {
  /** Field name present in the matched events. */
  key: string;
  /** Data type of the field (string, number, or boolean). */
  type: string;
}
const Field = /*@__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    key: Schema.String,
    type: Schema.String,
  }),
) as unknown as Schema.Codec<Field>;

interface Aggregates {
  /** @deprecated */
  count: number;
  /** @deprecated */
  interval: number;
  /** @deprecated */
  firstSeen?: string | null;
  /** @deprecated */
  lastSeen?: string | null;
  /** @deprecated */
  bin?: unknown | null;
}
const Aggregates = /*@__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    count: Schema.Number,
    interval: Schema.Number,
    firstSeen: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
    lastSeen: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
    bin: Schema.optional(Schema.Union([Schema.Unknown, Schema.Null])),
  }).pipe(
    Schema.encodeKeys({
      count: "_count",
      interval: "_interval",
      firstSeen: "_firstSeen",
      lastSeen: "_lastSeen",
      bin: "bin",
    }),
  ),
) as unknown as Schema.Codec<Aggregates>;

interface Data2 {
  aggregates: {
    count: number;
    interval: number;
    firstSeen?: string | null;
    lastSeen?: string | null;
    bin?: unknown | null;
  };
  count: number;
  interval: number;
  sampleInterval: number;
  errors?: number | null;
  /** Groups in the query results. */
  groups?: Record<string, unknown> | null;
}
const Data2 = /*@__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    aggregates: Aggregates,
    count: Schema.Number,
    interval: Schema.Number,
    sampleInterval: Schema.Number,
    errors: Schema.optional(Schema.Union([Schema.Number, Schema.Null])),
    groups: Schema.optional(
      Schema.Union([Schema.Record(Schema.String, Schema.Unknown), Schema.Null]),
    ),
  }),
) as unknown as Schema.Codec<Data2>;

interface Series2 {
  data: {
    aggregates: {
      count: number;
      interval: number;
      firstSeen?: string | null;
      lastSeen?: string | null;
      bin?: unknown | null;
    };
    count: number;
    interval: number;
    sampleInterval: number;
    errors?: number | null;
    groups?: Record<string, unknown> | null;
  }[];
  time: string;
}
const Series2 = /*@__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    data: Schema.Array(Data2),
    time: Schema.String,
  }),
) as unknown as Schema.Codec<Series2>;

interface Events {
  /** Total number of events matching the query (may exceed the number returned due to limits). */
  count?: number | null;
  /** List of individual telemetry events matching the query. */
  events?:
    | {
        $metadata: {
          id: string;
          account?: string | null;
          cloudService?: string | null;
          coldStart?: number | null;
          cost?: number | null;
          duration?: number | null;
          endTime?: number | null;
          error?: string | null;
          errorTemplate?: string | null;
          fingerprint?: string | null;
          level?: string | null;
          message?: string | null;
          messageTemplate?: string | null;
          metricName?: string | null;
          origin?: string | null;
          parentSpanId?: string | null;
          provider?: string | null;
          region?: string | null;
          requestId?: string | null;
          service?: string | null;
          spanId?: string | null;
          spanName?: string | null;
          stackId?: string | null;
          startTime?: number | null;
          statusCode?: number | null;
          traceDuration?: number | null;
          traceId?: string | null;
          transactionName?: string | null;
          trigger?: string | null;
          type?: string | null;
          url?: string | null;
        };
        dataset: string;
        source: string | Record<string, unknown>;
        timestamp: number;
        $containers?: Record<string, unknown> | null;
        $workers?:
          | {
              eventType:
                | "fetch"
                | "scheduled"
                | "alarm"
                | "cron"
                | "queue"
                | "email"
                | "tail"
                | "rpc"
                | "websocket"
                | "workflow"
                | "unknown"
                | (string & {});
              requestId: string;
              scriptName: string;
              durableObjectId?: string | null;
              entrypoint?: string | null;
              event?: Record<string, unknown> | null;
              executionModel?:
                | "durableObject"
                | "stateless"
                | (string & {})
                | null;
              outcome?: string | null;
              preview?: {
                id?: string | null;
                name?: string | null;
                slug?: string | null;
              } | null;
              scriptVersion?: {
                id?: string | null;
                message?: string | null;
                tag?: string | null;
              } | null;
              spanId?: string | null;
              traceId?: string | null;
              truncated?: boolean | null;
            }
          | {
              cpuTimeMs: number;
              eventType:
                | "fetch"
                | "scheduled"
                | "alarm"
                | "cron"
                | "queue"
                | "email"
                | "tail"
                | "rpc"
                | "websocket"
                | "workflow"
                | "unknown"
                | (string & {});
              outcome: string;
              requestId: string;
              scriptName: string;
              wallTimeMs: number;
              diagnosticsChannelEvents?:
                | { channel: string; message: string; timestamp: number }[]
                | null;
              dispatchNamespace?: string | null;
              durableObjectId?: string | null;
              entrypoint?: string | null;
              event?: Record<string, unknown> | null;
              executionModel?:
                | "durableObject"
                | "stateless"
                | (string & {})
                | null;
              preview?: {
                id?: string | null;
                name?: string | null;
                slug?: string | null;
              } | null;
              scriptVersion?: {
                id?: string | null;
                message?: string | null;
                tag?: string | null;
              } | null;
              spanId?: string | null;
              traceId?: string | null;
              truncated?: boolean | null;
            }
          | null;
      }[]
    | null;
  /** List of fields discovered in the matched events. Useful for building dynamic UIs. */
  fields?: { key: string; type: string }[] | null;
  /** Time-series data for the matched events, bucketed by the query granularity. */
  series?:
    | {
        data: {
          aggregates: {
            count: number;
            interval: number;
            firstSeen?: string | null;
            lastSeen?: string | null;
            bin?: unknown | null;
          };
          count: number;
          interval: number;
          sampleInterval: number;
          errors?: number | null;
          groups?: Record<string, unknown> | null;
        }[];
        time: string;
      }[]
    | null;
}
const Events = /*@__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    count: Schema.optional(Schema.Union([Schema.Number, Schema.Null])),
    events: Schema.optional(Schema.Union([Schema.Array(Event), Schema.Null])),
    fields: Schema.optional(Schema.Union([Schema.Array(Field), Schema.Null])),
    series: Schema.optional(Schema.Union([Schema.Array(Series2), Schema.Null])),
  }),
) as unknown as Schema.Codec<Events>;

interface Trace {
  /** Name of the root span that initiated the trace. */
  rootSpanName: string;
  /** Logical transaction name for the root span. */
  rootTransactionName: string;
  /** List of Worker services involved in the trace. */
  service: string[];
  /** Total number of spans in the trace. */
  spans: number;
  /** Total duration of the trace in milliseconds. */
  traceDurationMs: number;
  /** Trace end time as a Unix epoch in milliseconds. */
  traceEndMs: number;
  /** Unique identifier for the distributed trace. */
  traceId: string;
  /** Trace start time as a Unix epoch in milliseconds. */
  traceStartMs: number;
  /** Error messages encountered during the trace, if any. */
  errors?: string[] | null;
}
const Trace = /*@__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    rootSpanName: Schema.String,
    rootTransactionName: Schema.String,
    service: Schema.Array(Schema.String),
    spans: Schema.Number,
    traceDurationMs: Schema.Number,
    traceEndMs: Schema.Number,
    traceId: Schema.String,
    traceStartMs: Schema.Number,
    errors: Schema.optional(
      Schema.Union([Schema.Array(Schema.String), Schema.Null]),
    ),
  }),
) as unknown as Schema.Codec<Trace>;

interface CreateObservabilitySharedQueryRequestParametersFilter {
  filterCombination: "and" | "or" | "AND" | "OR" | (string & {});
  filters: (
    | {
        filterCombination: "and" | "or" | "AND" | "OR" | (string & {});
        filters: unknown[];
        kind: "group";
      }
    | {
        key: string;
        operation:
          | "includes"
          | "not_includes"
          | "starts_with"
          | "ends_with"
          | "regex"
          | "exists"
          | "is_null"
          | "in"
          | "not_in"
          | "eq"
          | "neq"
          | "gt"
          | "gte"
          | "lt"
          | "lte"
          | "="
          | "!="
          | ">"
          | ">="
          | "<"
          | "<="
          | "INCLUDES"
          | "DOES_NOT_INCLUDE"
          | "MATCH_REGEX"
          | "EXISTS"
          | "DOES_NOT_EXIST"
          | "IN"
          | "NOT_IN"
          | "STARTS_WITH"
          | "ENDS_WITH"
          | (string & {});
        type: "string" | "number" | "boolean" | (string & {});
        kind?: "filter" | null;
        value?: string | number | boolean | null;
      }
  )[];
  kind: "group";
}
const CreateObservabilitySharedQueryRequestParametersFilter =
  /*@__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      filterCombination: Schema.Union([
        Schema.Literals(["and", "or", "AND", "OR"]),
        Schema.String,
      ]),
      filters: Schema.Array(
        Schema.Union([
          ListObservabilityQueriesResponseResultParametersFilter,
          WorkersObservabilityFilterLeaf,
        ]),
      ),
      kind: Schema.Literal("group"),
    }),
  ) as unknown as Schema.Codec<CreateObservabilitySharedQueryRequestParametersFilter>;

interface Parameters3 {
  /** Aggregation calculations to compute (e.g. count, avg, p99). Each calculation produces aggregate values and optional time-series data. */
  calculations?:
    | {
        operator:
          | "uniq"
          | "count"
          | "max"
          | "min"
          | "sum"
          | "avg"
          | "median"
          | "p001"
          | "p01"
          | "p05"
          | "p10"
          | "p25"
          | "p75"
          | "p90"
          | "p95"
          | "p99"
          | "p999"
          | "stddev"
          | "variance"
          | "COUNT_DISTINCT"
          | "COUNT"
          | "MAX"
          | "MIN"
          | "SUM"
          | "AVG"
          | "MEDIAN"
          | "P001"
          | "P01"
          | "P05"
          | "P10"
          | "P25"
          | "P75"
          | "P90"
          | "P95"
          | "P99"
          | "P999"
          | "STDDEV"
          | "VARIANCE"
          | (string & {});
        alias?: string | null;
        key?: string | null;
        keyType?: "string" | "number" | "boolean" | (string & {}) | null;
      }[]
    | null;
  /** Datasets to query. Leave empty to query all available datasets. */
  datasets?: string[] | null;
  /** Logical operator for combining top-level filters: 'and' (all must match) or 'or' (any must match). Defaults to 'and'. */
  filterCombination?: "and" | "or" | "AND" | "OR" | (string & {}) | null;
  /** Filters to narrow query results. Use the keys and values endpoints to discover available fields before building filters. Supports nested groups via kind: 'group'. Maximum nesting depth is 4. */
  filters?:
    | (
        | {
            filterCombination: "and" | "or" | "AND" | "OR" | (string & {});
            filters: (
              | {
                  filterCombination:
                    | "and"
                    | "or"
                    | "AND"
                    | "OR"
                    | (string & {});
                  filters: unknown[];
                  kind: "group";
                }
              | {
                  key: string;
                  operation:
                    | "includes"
                    | "not_includes"
                    | "starts_with"
                    | "ends_with"
                    | "regex"
                    | "exists"
                    | "is_null"
                    | "in"
                    | "not_in"
                    | "eq"
                    | "neq"
                    | "gt"
                    | "gte"
                    | "lt"
                    | "lte"
                    | "="
                    | "!="
                    | ">"
                    | ">="
                    | "<"
                    | "<="
                    | "INCLUDES"
                    | "DOES_NOT_INCLUDE"
                    | "MATCH_REGEX"
                    | "EXISTS"
                    | "DOES_NOT_EXIST"
                    | "IN"
                    | "NOT_IN"
                    | "STARTS_WITH"
                    | "ENDS_WITH"
                    | (string & {});
                  type: "string" | "number" | "boolean" | (string & {});
                  kind?: "filter" | null;
                  value?: string | number | boolean | null;
                }
            )[];
            kind: "group";
          }
        | {
            key: string;
            operation:
              | "includes"
              | "not_includes"
              | "starts_with"
              | "ends_with"
              | "regex"
              | "exists"
              | "is_null"
              | "in"
              | "not_in"
              | "eq"
              | "neq"
              | "gt"
              | "gte"
              | "lt"
              | "lte"
              | "="
              | "!="
              | ">"
              | ">="
              | "<"
              | "<="
              | "INCLUDES"
              | "DOES_NOT_INCLUDE"
              | "MATCH_REGEX"
              | "EXISTS"
              | "DOES_NOT_EXIST"
              | "IN"
              | "NOT_IN"
              | "STARTS_WITH"
              | "ENDS_WITH"
              | (string & {});
            type: "string" | "number" | "boolean" | (string & {});
            kind?: "filter" | null;
            value?: string | number | boolean | null;
          }
      )[]
    | null;
  /** Fields to group calculation results by. Only applicable when the query view is 'calculations'. Produces per-group aggregate values. */
  groupBys?:
    | { type: "string" | "number" | "boolean" | (string & {}); value: string }[]
    | null;
  /** Post-aggregation filters applied to calculation results. Use to filter groups after aggregation (e.g. only groups where count > 100). */
  havings?:
    | {
        key: string;
        operation: "eq" | "neq" | "gt" | "gte" | "lt" | "lte" | (string & {});
        value: number;
      }[]
    | null;
  /** Maximum number of group-by rows to return in calculation results. A value of 10 is a sensible default for most use cases. */
  limit?: number | null;
  /** Full-text search expression applied across all event fields. Matches events containing the specified text. */
  needle?: {
    value: string | number | boolean;
    isRegex?: boolean | null;
    matchCase?: boolean | null;
  } | null;
  /** Ordering for grouped calculation results. Only effective when a group-by is present. */
  orderBy?: {
    value: string;
    order?: "asc" | "desc" | (string & {}) | null;
  } | null;
}
const Parameters3 = /*@__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    calculations: Schema.optional(
      Schema.Union([Schema.Array(Calculation), Schema.Null]),
    ),
    datasets: Schema.optional(
      Schema.Union([Schema.Array(Schema.String), Schema.Null]),
    ),
    filterCombination: Schema.optional(
      Schema.Union([
        Schema.Union([
          Schema.Literals(["and", "or", "AND", "OR"]),
          Schema.String,
        ]),
        Schema.Null,
      ]),
    ),
    filters: Schema.optional(
      Schema.Union([
        Schema.Array(
          Schema.Union([
            CreateObservabilitySharedQueryRequestParametersFilter,
            WorkersObservabilityFilterLeaf,
          ]),
        ),
        Schema.Null,
      ]),
    ),
    groupBys: Schema.optional(
      Schema.Union([Schema.Array(GroupBy), Schema.Null]),
    ),
    havings: Schema.optional(Schema.Union([Schema.Array(Having), Schema.Null])),
    limit: Schema.optional(Schema.Union([Schema.Number, Schema.Null])),
    needle: Schema.optional(Schema.Union([Needle, Schema.Null])),
    orderBy: Schema.optional(Schema.Union([OrderBy, Schema.Null])),
  }),
) as unknown as Schema.Codec<Parameters3>;

interface KeysObservabilityTelemetryResponseResult {
  key: string;
  lastSeenAt: number;
  type: "string" | "boolean" | "number" | (string & {});
}
const KeysObservabilityTelemetryResponseResult = /*@__PURE__*/ Schema.suspend(
  () =>
    Schema.Struct({
      key: Schema.String,
      lastSeenAt: Schema.Number,
      type: Schema.Union([
        Schema.Literals(["string", "boolean", "number"]),
        Schema.String,
      ]),
    }),
) as unknown as Schema.Codec<KeysObservabilityTelemetryResponseResult>;

interface Query2 {
  id: string;
  /** If the query wasn't explcitly saved */
  adhoc?: boolean | null;
  created?: string | null;
  createdBy?: string | null;
  description?: string | null;
  /** Query name */
  name?: string | null;
  parameters?: {
    calculations?:
      | {
          operator:
            | "uniq"
            | "count"
            | "max"
            | "min"
            | "sum"
            | "avg"
            | "median"
            | "p001"
            | "p01"
            | "p05"
            | "p10"
            | "p25"
            | "p75"
            | "p90"
            | "p95"
            | "p99"
            | "p999"
            | "stddev"
            | "variance"
            | "COUNT_DISTINCT"
            | "COUNT"
            | "MAX"
            | "MIN"
            | "SUM"
            | "AVG"
            | "MEDIAN"
            | "P001"
            | "P01"
            | "P05"
            | "P10"
            | "P25"
            | "P75"
            | "P90"
            | "P95"
            | "P99"
            | "P999"
            | "STDDEV"
            | "VARIANCE"
            | (string & {});
          alias?: string | null;
          key?: string | null;
          keyType?: "string" | "number" | "boolean" | (string & {}) | null;
        }[]
      | null;
    datasets?: string[] | null;
    filterCombination?: "and" | "or" | "AND" | "OR" | (string & {}) | null;
    filters?:
      | (
          | {
              filterCombination: "and" | "or" | "AND" | "OR" | (string & {});
              filters: unknown[];
              kind: "group";
            }
          | {
              key: string;
              operation:
                | "includes"
                | "not_includes"
                | "starts_with"
                | "ends_with"
                | "regex"
                | "exists"
                | "is_null"
                | "in"
                | "not_in"
                | "eq"
                | "neq"
                | "gt"
                | "gte"
                | "lt"
                | "lte"
                | "="
                | "!="
                | ">"
                | ">="
                | "<"
                | "<="
                | "INCLUDES"
                | "DOES_NOT_INCLUDE"
                | "MATCH_REGEX"
                | "EXISTS"
                | "DOES_NOT_EXIST"
                | "IN"
                | "NOT_IN"
                | "STARTS_WITH"
                | "ENDS_WITH"
                | (string & {});
              type: "string" | "number" | "boolean" | (string & {});
              kind?: "filter" | null;
              value?: string | number | boolean | null;
            }
        )[]
      | null;
    groupBys?:
      | {
          type: "string" | "number" | "boolean" | (string & {});
          value: string;
        }[]
      | null;
    havings?:
      | {
          key: string;
          operation: "eq" | "neq" | "gt" | "gte" | "lt" | "lte" | (string & {});
          value: number;
        }[]
      | null;
    limit?: number | null;
    needle?: {
      value: unknown;
      isRegex?: boolean | null;
      matchCase?: boolean | null;
    } | null;
    orderBy?: {
      value: string;
      order?: "asc" | "desc" | (string & {}) | null;
    } | null;
  } | null;
  updated?: string | null;
  updatedBy?: string | null;
}
const Query2 = /*@__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    id: Schema.String,
    adhoc: Schema.optional(Schema.Union([Schema.Boolean, Schema.Null])),
    created: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
    createdBy: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
    description: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
    name: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
    parameters: Schema.optional(Schema.Union([Parameters2, Schema.Null])),
    updated: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
    updatedBy: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
  }),
) as unknown as Schema.Codec<Query2>;

interface Run2 {
  /** Unique identifier for this query run. */
  id: string;
  /** Cloudflare account ID that owns this query run. */
  accountId: string;
  /** Whether this was a dry run (results not persisted). */
  dry: boolean;
  /** Number of time-series buckets used for the query. Higher values produce more detailed series data. */
  granularity: number;
  /** A saved query definition with its parameters, metadata, and ownership information. */
  query: {
    id: string;
    adhoc?: boolean | null;
    created?: string | null;
    createdBy?: string | null;
    description?: string | null;
    name?: string | null;
    parameters?: {
      calculations?:
        | {
            operator:
              | "uniq"
              | "count"
              | "max"
              | "min"
              | "sum"
              | "avg"
              | "median"
              | "p001"
              | "p01"
              | "p05"
              | "p10"
              | "p25"
              | "p75"
              | "p90"
              | "p95"
              | "p99"
              | "p999"
              | "stddev"
              | "variance"
              | "COUNT_DISTINCT"
              | "COUNT"
              | "MAX"
              | "MIN"
              | "SUM"
              | "AVG"
              | "MEDIAN"
              | "P001"
              | "P01"
              | "P05"
              | "P10"
              | "P25"
              | "P75"
              | "P90"
              | "P95"
              | "P99"
              | "P999"
              | "STDDEV"
              | "VARIANCE"
              | (string & {});
            alias?: string | null;
            key?: string | null;
            keyType?: "string" | "number" | "boolean" | (string & {}) | null;
          }[]
        | null;
      datasets?: string[] | null;
      filterCombination?: "and" | "or" | "AND" | "OR" | (string & {}) | null;
      filters?:
        | (
            | {
                filterCombination: "and" | "or" | "AND" | "OR" | (string & {});
                filters: unknown[];
                kind: "group";
              }
            | {
                key: string;
                operation:
                  | "includes"
                  | "not_includes"
                  | "starts_with"
                  | "ends_with"
                  | "regex"
                  | "exists"
                  | "is_null"
                  | "in"
                  | "not_in"
                  | "eq"
                  | "neq"
                  | "gt"
                  | "gte"
                  | "lt"
                  | "lte"
                  | "="
                  | "!="
                  | ">"
                  | ">="
                  | "<"
                  | "<="
                  | "INCLUDES"
                  | "DOES_NOT_INCLUDE"
                  | "MATCH_REGEX"
                  | "EXISTS"
                  | "DOES_NOT_EXIST"
                  | "IN"
                  | "NOT_IN"
                  | "STARTS_WITH"
                  | "ENDS_WITH"
                  | (string & {});
                type: "string" | "number" | "boolean" | (string & {});
                kind?: "filter" | null;
                value?: string | number | boolean | null;
              }
          )[]
        | null;
      groupBys?:
        | {
            type: "string" | "number" | "boolean" | (string & {});
            value: string;
          }[]
        | null;
      havings?:
        | {
            key: string;
            operation:
              | "eq"
              | "neq"
              | "gt"
              | "gte"
              | "lt"
              | "lte"
              | (string & {});
            value: number;
          }[]
        | null;
      limit?: number | null;
      needle?: {
        value: unknown;
        isRegex?: boolean | null;
        matchCase?: boolean | null;
      } | null;
      orderBy?: {
        value: string;
        order?: "asc" | "desc" | (string & {}) | null;
      } | null;
    } | null;
    updated?: string | null;
    updatedBy?: string | null;
  };
  /** Current execution status of the query run. */
  status: "STARTED" | "COMPLETED" | (string & {});
  /** Time range for the query execution */
  timeframe: { from: number; to: number };
  /** ID of the user who initiated the query run. */
  userId: string;
  /** ISO-8601 timestamp when the query run was created. */
  created?: string | null;
  /** Query performance statistics from the database (does not include network latency). */
  statistics?: {
    bytesRead: number;
    elapsed: number;
    rowsRead: number;
    abrLevel?: number | null;
  } | null;
  /** ISO-8601 timestamp when the query run was last updated. */
  updated?: string | null;
}
const Run2 = /*@__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    id: Schema.String,
    accountId: Schema.String,
    dry: Schema.Boolean,
    granularity: Schema.Number,
    query: Query2,
    status: Schema.Union([
      Schema.Literals(["STARTED", "COMPLETED"]),
      Schema.String,
    ]),
    timeframe: Timeframe,
    userId: Schema.String,
    created: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
    statistics: Schema.optional(Schema.Union([Statistics, Schema.Null])),
    updated: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
  }),
) as unknown as Schema.Codec<Run2>;

interface Event2 {
  /** Structured metadata extracted from the event. These fields are indexed and available for filtering and aggregation. */
  $metadata: {
    id: string;
    account?: string | null;
    cloudService?: string | null;
    coldStart?: number | null;
    cost?: number | null;
    duration?: number | null;
    endTime?: number | null;
    error?: string | null;
    errorTemplate?: string | null;
    fingerprint?: string | null;
    level?: string | null;
    message?: string | null;
    messageTemplate?: string | null;
    metricName?: string | null;
    origin?: string | null;
    parentSpanId?: string | null;
    provider?: string | null;
    region?: string | null;
    requestId?: string | null;
    service?: string | null;
    spanId?: string | null;
    spanName?: string | null;
    stackId?: string | null;
    startTime?: number | null;
    statusCode?: number | null;
    traceDuration?: number | null;
    traceId?: string | null;
    transactionName?: string | null;
    trigger?: string | null;
    type?: string | null;
    url?: string | null;
  };
  /** The dataset this event belongs to (e.g. cloudflare-workers). */
  dataset: string;
  /** Raw log payload. May be a string or a structured object depending on how the log was emitted. */
  source: unknown;
  /** Event timestamp as a Unix epoch in milliseconds. */
  timestamp: number;
  /** Cloudflare Containers event information that enriches your logs for identifying and debugging issues. */
  $containers?: Record<string, unknown> | null;
  /** Cloudflare Workers event information that enriches your logs for identifying and debugging issues. */
  $workers?:
    | {
        eventType:
          | "fetch"
          | "scheduled"
          | "alarm"
          | "cron"
          | "queue"
          | "email"
          | "tail"
          | "rpc"
          | "websocket"
          | "workflow"
          | "unknown"
          | (string & {});
        requestId: string;
        scriptName: string;
        durableObjectId?: string | null;
        entrypoint?: string | null;
        event?: Record<string, unknown> | null;
        executionModel?: "durableObject" | "stateless" | (string & {}) | null;
        outcome?: string | null;
        preview?: {
          id?: string | null;
          name?: string | null;
          slug?: string | null;
        } | null;
        scriptVersion?: {
          id?: string | null;
          message?: string | null;
          tag?: string | null;
        } | null;
        spanId?: string | null;
        traceId?: string | null;
        truncated?: boolean | null;
      }
    | {
        cpuTimeMs: number;
        eventType:
          | "fetch"
          | "scheduled"
          | "alarm"
          | "cron"
          | "queue"
          | "email"
          | "tail"
          | "rpc"
          | "websocket"
          | "workflow"
          | "unknown"
          | (string & {});
        outcome: string;
        requestId: string;
        scriptName: string;
        wallTimeMs: number;
        diagnosticsChannelEvents?:
          | { channel: string; message: string; timestamp: number }[]
          | null;
        dispatchNamespace?: string | null;
        durableObjectId?: string | null;
        entrypoint?: string | null;
        event?: Record<string, unknown> | null;
        executionModel?: "durableObject" | "stateless" | (string & {}) | null;
        preview?: {
          id?: string | null;
          name?: string | null;
          slug?: string | null;
        } | null;
        scriptVersion?: {
          id?: string | null;
          message?: string | null;
          tag?: string | null;
        } | null;
        spanId?: string | null;
        traceId?: string | null;
        truncated?: boolean | null;
      }
    | null;
}
const Event2 = /*@__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    $metadata: Metadata,
    dataset: Schema.String,
    source: Schema.Unknown,
    timestamp: Schema.Number,
    $containers: Schema.optional(
      Schema.Union([Schema.Record(Schema.String, Schema.Unknown), Schema.Null]),
    ),
    $workers: Schema.optional(
      Schema.Union([
        Schema.Union([
          GetObservabilitySharedQueryResponseEventsEventworkers1,
          GetObservabilitySharedQueryResponseEventsEventworkers,
        ]),
        Schema.Null,
      ]),
    ),
  }),
) as unknown as Schema.Codec<Event2>;

interface Aggregates2 {
  /** @deprecated */
  count: number;
  /** @deprecated */
  interval: number;
  /** @deprecated */
  firstSeen?: string | null;
  /** @deprecated */
  lastSeen?: string | null;
  /** @deprecated */
  bin?: unknown | null;
  countErrors?: number | null;
}
const Aggregates2 = /*@__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    count: Schema.Number,
    interval: Schema.Number,
    firstSeen: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
    lastSeen: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
    bin: Schema.optional(Schema.Union([Schema.Unknown, Schema.Null])),
    countErrors: Schema.optional(Schema.Union([Schema.Number, Schema.Null])),
  }).pipe(
    Schema.encodeKeys({
      count: "_count",
      interval: "_interval",
      firstSeen: "_firstSeen",
      lastSeen: "_lastSeen",
      bin: "bin",
      countErrors: "_countErrors",
    }),
  ),
) as unknown as Schema.Codec<Aggregates2>;

interface Data3 {
  aggregates: {
    count: number;
    interval: number;
    firstSeen?: string | null;
    lastSeen?: string | null;
    bin?: unknown | null;
    countErrors?: number | null;
  };
  count: number;
  interval: number;
  sampleInterval: number;
  errors?: number | null;
  /** Groups in the query results. */
  groups?: Record<string, unknown> | null;
}
const Data3 = /*@__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    aggregates: Aggregates2,
    count: Schema.Number,
    interval: Schema.Number,
    sampleInterval: Schema.Number,
    errors: Schema.optional(Schema.Union([Schema.Number, Schema.Null])),
    groups: Schema.optional(
      Schema.Union([Schema.Record(Schema.String, Schema.Unknown), Schema.Null]),
    ),
  }),
) as unknown as Schema.Codec<Data3>;

interface Series3 {
  data: {
    aggregates: {
      count: number;
      interval: number;
      firstSeen?: string | null;
      lastSeen?: string | null;
      bin?: unknown | null;
      countErrors?: number | null;
    };
    count: number;
    interval: number;
    sampleInterval: number;
    errors?: number | null;
    groups?: Record<string, unknown> | null;
  }[];
  time: string;
}
const Series3 = /*@__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    data: Schema.Array(Data3),
    time: Schema.String,
  }),
) as unknown as Schema.Codec<Series3>;

interface Events2 {
  /** Total number of events matching the query (may exceed the number returned due to limits). */
  count?: number | null;
  /** List of individual telemetry events matching the query. */
  events?:
    | {
        $metadata: {
          id: string;
          account?: string | null;
          cloudService?: string | null;
          coldStart?: number | null;
          cost?: number | null;
          duration?: number | null;
          endTime?: number | null;
          error?: string | null;
          errorTemplate?: string | null;
          fingerprint?: string | null;
          level?: string | null;
          message?: string | null;
          messageTemplate?: string | null;
          metricName?: string | null;
          origin?: string | null;
          parentSpanId?: string | null;
          provider?: string | null;
          region?: string | null;
          requestId?: string | null;
          service?: string | null;
          spanId?: string | null;
          spanName?: string | null;
          stackId?: string | null;
          startTime?: number | null;
          statusCode?: number | null;
          traceDuration?: number | null;
          traceId?: string | null;
          transactionName?: string | null;
          trigger?: string | null;
          type?: string | null;
          url?: string | null;
        };
        dataset: string;
        source: unknown;
        timestamp: number;
        $containers?: Record<string, unknown> | null;
        $workers?:
          | {
              eventType:
                | "fetch"
                | "scheduled"
                | "alarm"
                | "cron"
                | "queue"
                | "email"
                | "tail"
                | "rpc"
                | "websocket"
                | "workflow"
                | "unknown"
                | (string & {});
              requestId: string;
              scriptName: string;
              durableObjectId?: string | null;
              entrypoint?: string | null;
              event?: Record<string, unknown> | null;
              executionModel?:
                | "durableObject"
                | "stateless"
                | (string & {})
                | null;
              outcome?: string | null;
              preview?: {
                id?: string | null;
                name?: string | null;
                slug?: string | null;
              } | null;
              scriptVersion?: {
                id?: string | null;
                message?: string | null;
                tag?: string | null;
              } | null;
              spanId?: string | null;
              traceId?: string | null;
              truncated?: boolean | null;
            }
          | {
              cpuTimeMs: number;
              eventType:
                | "fetch"
                | "scheduled"
                | "alarm"
                | "cron"
                | "queue"
                | "email"
                | "tail"
                | "rpc"
                | "websocket"
                | "workflow"
                | "unknown"
                | (string & {});
              outcome: string;
              requestId: string;
              scriptName: string;
              wallTimeMs: number;
              diagnosticsChannelEvents?:
                | { channel: string; message: string; timestamp: number }[]
                | null;
              dispatchNamespace?: string | null;
              durableObjectId?: string | null;
              entrypoint?: string | null;
              event?: Record<string, unknown> | null;
              executionModel?:
                | "durableObject"
                | "stateless"
                | (string & {})
                | null;
              preview?: {
                id?: string | null;
                name?: string | null;
                slug?: string | null;
              } | null;
              scriptVersion?: {
                id?: string | null;
                message?: string | null;
                tag?: string | null;
              } | null;
              spanId?: string | null;
              traceId?: string | null;
              truncated?: boolean | null;
            }
          | null;
      }[]
    | null;
  /** List of fields discovered in the matched events. Useful for building dynamic UIs. */
  fields?: { key: string; type: string }[] | null;
  /** Time-series data for the matched events, bucketed by the query granularity. */
  series?:
    | {
        data: {
          aggregates: {
            count: number;
            interval: number;
            firstSeen?: string | null;
            lastSeen?: string | null;
            bin?: unknown | null;
            countErrors?: number | null;
          };
          count: number;
          interval: number;
          sampleInterval: number;
          errors?: number | null;
          groups?: Record<string, unknown> | null;
        }[];
        time: string;
      }[]
    | null;
  statistics?: unknown | null;
}
const Events2 = /*@__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    count: Schema.optional(Schema.Union([Schema.Number, Schema.Null])),
    events: Schema.optional(Schema.Union([Schema.Array(Event2), Schema.Null])),
    fields: Schema.optional(Schema.Union([Schema.Array(Field), Schema.Null])),
    series: Schema.optional(Schema.Union([Schema.Array(Series3), Schema.Null])),
    statistics: Schema.optional(Schema.Union([Schema.Unknown, Schema.Null])),
  }),
) as unknown as Schema.Codec<Events2>;

interface ValuesObservabilityTelemetryResponseResult {
  dataset: string;
  key: string;
  type: "string" | "boolean" | "number" | (string & {});
  value: string | number | boolean;
}
const ValuesObservabilityTelemetryResponseResult = /*@__PURE__*/ Schema.suspend(
  () =>
    Schema.Struct({
      dataset: Schema.String,
      key: Schema.String,
      type: Schema.Union([
        Schema.Literals(["string", "boolean", "number"]),
        Schema.String,
      ]),
      value: Schema.Union([Schema.String, Schema.Number, Schema.Boolean]),
    }),
) as unknown as Schema.Codec<ValuesObservabilityTelemetryResponseResult>;

interface ListRoutesResponseResult {
  /** Identifier. */
  id: string;
  /** Pattern to match incoming requests against. [Learn more](https://developers.cloudflare.com/workers/configuration/routing/routes/#matching-behavior). */
  pattern: string;
  /** Name of the script to run if the route matches. */
  script?: string | null;
}
const ListRoutesResponseResult = /*@__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    id: Schema.String,
    pattern: Schema.String,
    script: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
  }),
) as unknown as Schema.Codec<ListRoutesResponseResult>;

interface NamedHandler {
  /** The names of handlers exported as part of the named export. */
  handlers?: string[] | null;
  /** The name of the export. */
  name?: string | null;
}
const NamedHandler = /*@__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    handlers: Schema.optional(
      Schema.Union([Schema.Array(Schema.String), Schema.Null]),
    ),
    name: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
  }),
) as unknown as Schema.Codec<NamedHandler>;

interface Logs2 {
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
const Logs2 = /*@__PURE__*/ Schema.suspend(() =>
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
) as unknown as Schema.Codec<Logs2>;

interface Traces2 {
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
const Traces2 = /*@__PURE__*/ Schema.suspend(() =>
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
) as unknown as Schema.Codec<Traces2>;

interface Observability2 {
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
const Observability2 = /*@__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    enabled: Schema.Boolean,
    headSamplingRate: Schema.optional(
      Schema.Union([Schema.Number, Schema.Null]),
    ),
    logs: Schema.optional(Schema.Union([Logs2, Schema.Null])),
    traces: Schema.optional(Schema.Union([Traces2, Schema.Null])),
  }).pipe(
    Schema.encodeKeys({
      enabled: "enabled",
      headSamplingRate: "head_sampling_rate",
      logs: "logs",
      traces: "traces",
    }),
  ),
) as unknown as Schema.Codec<Observability2>;

interface ListScriptsResponseResultPlacement {
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
const ListScriptsResponseResultPlacement = /*@__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    mode: Schema.Literal("smart"),
    lastAnalyzedAt: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
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
) as unknown as Schema.Codec<ListScriptsResponseResultPlacement>;

interface ListScriptsResponseResultPlacement1 {
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
const ListScriptsResponseResultPlacement1 = /*@__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    region: Schema.String,
    lastAnalyzedAt: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
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
) as unknown as Schema.Codec<ListScriptsResponseResultPlacement1>;

interface ListScriptsResponseResultPlacement2 {
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
const ListScriptsResponseResultPlacement2 = /*@__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    hostname: Schema.String,
    lastAnalyzedAt: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
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
) as unknown as Schema.Codec<ListScriptsResponseResultPlacement2>;

interface ListScriptsResponseResultPlacement3 {
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
const ListScriptsResponseResultPlacement3 = /*@__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    host: Schema.String,
    lastAnalyzedAt: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
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
) as unknown as Schema.Codec<ListScriptsResponseResultPlacement3>;

interface ListScriptsResponseResultPlacement4 {
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
const ListScriptsResponseResultPlacement4 = /*@__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    mode: Schema.Literal("targeted"),
    region: Schema.String,
    lastAnalyzedAt: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
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
) as unknown as Schema.Codec<ListScriptsResponseResultPlacement4>;

interface ListScriptsResponseResultPlacement5 {
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
const ListScriptsResponseResultPlacement5 = /*@__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    hostname: Schema.String,
    mode: Schema.Literal("targeted"),
    lastAnalyzedAt: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
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
) as unknown as Schema.Codec<ListScriptsResponseResultPlacement5>;

interface ListScriptsResponseResultPlacement6 {
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
const ListScriptsResponseResultPlacement6 = /*@__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    host: Schema.String,
    mode: Schema.Literal("targeted"),
    lastAnalyzedAt: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
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
) as unknown as Schema.Codec<ListScriptsResponseResultPlacement6>;

interface ListScriptsResponseResultPlacement7 {
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
const ListScriptsResponseResultPlacement7 = /*@__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    mode: Schema.Literal("targeted"),
    target: Schema.Array(Schema.Union([Region, Hostname, Host])),
    lastAnalyzedAt: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
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
) as unknown as Schema.Codec<ListScriptsResponseResultPlacement7>;

interface ConsumerScript {
  /** Name of Worker that is to be the consumer. */
  service: string;
  /** Optional environment if the Worker utilizes one. */
  environment?: string | null;
  /** Optional dispatch namespace the script belongs to. */
  namespace?: string | null;
}
const ConsumerScript = /*@__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    service: Schema.String,
    environment: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
    namespace: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
  }),
) as unknown as Schema.Codec<ConsumerScript>;

interface ListScriptsResponseResult {
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
  /** @deprecated */
  placementMode?: "smart" | "targeted" | (string & {}) | null;
  /** @deprecated */
  placementStatus?:
    | "SUCCESS"
    | "UNSUPPORTED_APPLICATION"
    | "INSUFFICIENT_INVOCATIONS"
    | (string & {})
    | null;
  /** Routes associated with the Worker. */
  routes?: { id: string; pattern: string; script?: string | null }[] | null;
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
const ListScriptsResponseResult = /*@__PURE__*/ Schema.suspend(() =>
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
    observability: Schema.optional(Schema.Union([Observability2, Schema.Null])),
    placement: Schema.optional(
      Schema.Union([
        Schema.Union([
          ListScriptsResponseResultPlacement4,
          ListScriptsResponseResultPlacement5,
          ListScriptsResponseResultPlacement6,
          ListScriptsResponseResultPlacement7,
          ListScriptsResponseResultPlacement,
          ListScriptsResponseResultPlacement1,
          ListScriptsResponseResultPlacement2,
          ListScriptsResponseResultPlacement3,
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
    routes: Schema.optional(
      Schema.Union([Schema.Array(ListRoutesResponseResult), Schema.Null]),
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
      routes: "routes",
      tag: "tag",
      tags: "tags",
      tailConsumers: "tail_consumers",
      usageModel: "usage_model",
    }),
  ),
) as unknown as Schema.Codec<ListScriptsResponseResult>;

interface Config2 {
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
const Config2 = /*@__PURE__*/ Schema.suspend(() =>
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
) as unknown as Schema.Codec<Config2>;

interface Assets2 {
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
const Assets2 = /*@__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    config: Schema.optional(Schema.Union([Config2, Schema.Null])),
    jwt: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
  }),
) as unknown as Schema.Codec<Assets2>;

interface PutScriptRequestMetadataBinding37Simple {
  limit: number;
  period: number;
}
const PutScriptRequestMetadataBinding37Simple = /*@__PURE__*/ Schema.suspend(
  () =>
    Schema.Struct({
      limit: Schema.Number,
      period: Schema.Number,
    }),
) as unknown as Schema.Codec<PutScriptRequestMetadataBinding37Simple>;

interface PutScriptRequestMetadataBinding37 {
  name: string;
  type: "ratelimit";
  namespaceId: string;
  simple: { limit: number; period: number };
}
const PutScriptRequestMetadataBinding37 = /*@__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    name: Schema.String,
    type: Schema.Literal("ratelimit"),
    namespaceId: Schema.String,
    simple: PutScriptRequestMetadataBinding37Simple,
  }).pipe(
    Schema.encodeKeys({
      name: "name",
      type: "type",
      namespaceId: "namespace_id",
      simple: "simple",
    }),
  ),
) as unknown as Schema.Codec<PutScriptRequestMetadataBinding37>;

interface PutScriptRequestMetadataCache {
  enabled?: boolean | null;
  crossVersionCache?: boolean | null;
}
const PutScriptRequestMetadataCache = /*@__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    enabled: Schema.optional(Schema.Union([Schema.Boolean, Schema.Null])),
    crossVersionCache: Schema.optional(
      Schema.Union([Schema.Boolean, Schema.Null]),
    ),
  }).pipe(
    Schema.encodeKeys({
      enabled: "enabled",
      crossVersionCache: "cross_version_cache",
    }),
  ),
) as unknown as Schema.Codec<PutScriptRequestMetadataCache>;

interface Metadata2 {
  /** Annotations for the version created by this upload. */
  annotations?: {
    workersMessage?: string | null;
    workersTag?: string | null;
  } | null;
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
            className: string;
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
            className: string;
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
        | { name: string; type: "worker_loader" }
        | { name: string; type: "artifacts"; namespace: string }
        | {
            name: string;
            type: "ratelimit";
            namespaceId: string;
            simple: { limit: number; period: number };
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
  containers?: { className: string }[] | null;
  cache?: {
    enabled?: boolean | null;
    crossVersionCache?: boolean | null;
  } | null;
}
const Metadata2 = /*@__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    annotations: Schema.optional(Schema.Union([Annotations2, Schema.Null])),
    assets: Schema.optional(Schema.Union([Assets2, Schema.Null])),
    bindings: Schema.optional(
      Schema.Union([
        Schema.Array(
          Schema.Union([
            WorkersBindingKindSecretKey2,
            WorkersBindingKindRatelimit,
            WorkersBindingKindSecretsStoreSecret,
            WorkersBindingKindWorkflow2,
            PutScriptRequestMetadataBinding37,
            WorkersBindingKindAISearch,
            WorkersBindingKindAISearchNamespace,
            WorkersBindingKindAnalyticsEngine,
            WorkersBindingKindD1,
            WorkersBindingKindDataBlob,
            WorkersBindingKindDispatchNamespace,
            WorkersBindingKindDurableObjectNamespace2,
            WorkersBindingKindHyperdrive,
            WorkersBindingKindJson,
            WorkersBindingKindKVNamespace,
            WorkersBindingKindMTLSCertificate,
            WorkersBindingKindPlainText,
            WorkersBindingKindPipelines,
            WorkersBindingKindQueue,
            WorkersBindingKindR2Bucket,
            WorkersBindingKindSecretText2,
            WorkersBindingKindService,
            WorkersBindingKindTextBlob,
            WorkersBindingKindVectorize,
            WorkersBindingKindFlagship,
            WorkersBindingKindWasmModule,
            WorkersBindingKindVPCService,
            GetBetaWorkerVersionResponseBinding36,
            WorkersBindingKindAI,
            WorkersBindingKindAssets,
            WorkersBindingKindBrowser,
            WorkersBindingKindInherit,
            WorkersBindingKindImages,
            WorkersBindingKindMedia,
            WorkersBindingKindSendEmail,
            WorkersBindingKindVersionMetadata,
            WorkersBindingKindVPCNetwork,
            GetBetaWorkerVersionResponseBinding35,
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
    observability: Schema.optional(Schema.Union([Observability2, Schema.Null])),
    placement: Schema.optional(
      Schema.Union([
        Schema.Union([
          GetBetaWorkerVersionResponsePlacement4,
          GetBetaWorkerVersionResponsePlacement5,
          GetBetaWorkerVersionResponsePlacement6,
          GetBetaWorkerVersionResponsePlacement7,
          Mode,
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
    containers: Schema.optional(
      Schema.Union([Schema.Array(Container), Schema.Null]),
    ),
    cache: Schema.optional(
      Schema.Union([PutScriptRequestMetadataCache, Schema.Null]),
    ),
  }).pipe(
    Schema.encodeKeys({
      annotations: "annotations",
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
      containers: "containers",
      cache: "cache_options",
    }),
  ),
) as unknown as Schema.Codec<Metadata2>;

interface ScriptSearchResponseItem {
  /** Identifier. */
  id: string;
  /** When the script was created. */
  createdOn: string;
  /** When the script was last modified. */
  modifiedOn: string;
  /** Name of the script, used in URLs and route configuration. */
  scriptName: string;
  /** Whether the environment is the default environment. */
  environmentIsDefault?: boolean | null;
  /** Name of the environment. */
  environmentName?: string | null;
  /** Name of the service. */
  serviceName?: string | null;
}
const ScriptSearchResponseItem = /*@__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    id: Schema.String,
    createdOn: Schema.String,
    modifiedOn: Schema.String,
    scriptName: Schema.String,
    environmentIsDefault: Schema.optional(
      Schema.Union([Schema.Boolean, Schema.Null]),
    ),
    environmentName: Schema.optional(
      Schema.Union([Schema.String, Schema.Null]),
    ),
    serviceName: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
  }).pipe(
    Schema.encodeKeys({
      id: "id",
      createdOn: "created_on",
      modifiedOn: "modified_on",
      scriptName: "script_name",
      environmentIsDefault: "environment_is_default",
      environmentName: "environment_name",
      serviceName: "service_name",
    }),
  ),
) as unknown as Schema.Codec<ScriptSearchResponseItem>;

interface Metadata3 {
  /** Name of the uploaded file that contains the Worker script (e.g. the file adding a listener to the `fetch` event). Indicates a `service worker syntax` Worker. */
  bodyPart?: string | null;
  /** Name of the uploaded file that contains the main module (e.g. the file exporting a `fetch` handler). Indicates a `module syntax` Worker. */
  mainModule?: string | null;
}
const Metadata3 = /*@__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    bodyPart: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
    mainModule: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
  }).pipe(
    Schema.encodeKeys({ bodyPart: "body_part", mainModule: "main_module" }),
  ),
) as unknown as Schema.Codec<Metadata3>;

interface Version {
  percentage: number;
  versionId: string;
}
const Version = /*@__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    percentage: Schema.Number,
    versionId: Schema.String,
  }).pipe(
    Schema.encodeKeys({ percentage: "percentage", versionId: "version_id" }),
  ),
) as unknown as Schema.Codec<Version>;

interface Annotations3 {
  /** Human-readable message about the deployment. Truncated to 1000 bytes if longer. */
  workersMessage?: string | null;
  /** Operation that triggered the creation of the deployment. */
  workersTriggeredBy?: string | null;
}
const Annotations3 = /*@__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    workersMessage: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
    workersTriggeredBy: Schema.optional(
      Schema.Union([Schema.String, Schema.Null]),
    ),
  }).pipe(
    Schema.encodeKeys({
      workersMessage: "workers/message",
      workersTriggeredBy: "workers/triggered_by",
    }),
  ),
) as unknown as Schema.Codec<Annotations3>;

interface Deployment {
  id: string;
  createdOn: string;
  source: string;
  strategy: "percentage";
  versions: { percentage: number; versionId: string }[];
  annotations?: {
    workersMessage?: string | null;
    workersTriggeredBy?: string | null;
  } | null;
  authorEmail?: string | null;
}
const Deployment = /*@__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    id: Schema.String,
    createdOn: Schema.String,
    source: Schema.String,
    strategy: Schema.Literal("percentage"),
    versions: Schema.Array(Version),
    annotations: Schema.optional(Schema.Union([Annotations3, Schema.Null])),
    authorEmail: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
  }).pipe(
    Schema.encodeKeys({
      id: "id",
      createdOn: "created_on",
      source: "source",
      strategy: "strategy",
      versions: "versions",
      annotations: "annotations",
      authorEmail: "author_email",
    }),
  ),
) as unknown as Schema.Codec<Deployment>;

interface Annotations4 {
  /** Human-readable message about the deployment. Truncated to 1000 bytes if longer. */
  workersMessage?: string | null;
}
const Annotations4 = /*@__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    workersMessage: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
  }).pipe(Schema.encodeKeys({ workersMessage: "workers/message" })),
) as unknown as Schema.Codec<Annotations4>;

interface CreateScriptEdgePreviewRequestMetadataBinding3 {
  type: "kv_namespace";
  name: string;
  namespaceId: string;
  raw?: boolean | null;
}
const CreateScriptEdgePreviewRequestMetadataBinding3 =
  /*@__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      type: Schema.Literal("kv_namespace"),
      name: Schema.String,
      namespaceId: Schema.String,
      raw: Schema.optional(Schema.Union([Schema.Boolean, Schema.Null])),
    }).pipe(
      Schema.encodeKeys({
        type: "type",
        name: "name",
        namespaceId: "namespace_id",
        raw: "raw",
      }),
    ),
  ) as unknown as Schema.Codec<CreateScriptEdgePreviewRequestMetadataBinding3>;

interface CreateScriptEdgePreviewRequestMetadataBinding4 {
  type: "durable_object_namespace";
  name: string;
  className: string;
  scriptName?: string | null;
  environment?: string | null;
  namespaceId?: string | null;
}
const CreateScriptEdgePreviewRequestMetadataBinding4 =
  /*@__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      type: Schema.Literal("durable_object_namespace"),
      name: Schema.String,
      className: Schema.String,
      scriptName: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
      environment: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
      namespaceId: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
    }).pipe(
      Schema.encodeKeys({
        type: "type",
        name: "name",
        className: "class_name",
        scriptName: "script_name",
        environment: "environment",
        namespaceId: "namespace_id",
      }),
    ),
  ) as unknown as Schema.Codec<CreateScriptEdgePreviewRequestMetadataBinding4>;

interface CreateScriptEdgePreviewRequestMetadataBinding5 {
  type: "r2_bucket";
  name: string;
  bucketName: string;
  jurisdiction?: string | null;
  raw?: boolean | null;
}
const CreateScriptEdgePreviewRequestMetadataBinding5 =
  /*@__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      type: Schema.Literal("r2_bucket"),
      name: Schema.String,
      bucketName: Schema.String,
      jurisdiction: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
      raw: Schema.optional(Schema.Union([Schema.Boolean, Schema.Null])),
    }).pipe(
      Schema.encodeKeys({
        type: "type",
        name: "name",
        bucketName: "bucket_name",
        jurisdiction: "jurisdiction",
        raw: "raw",
      }),
    ),
  ) as unknown as Schema.Codec<CreateScriptEdgePreviewRequestMetadataBinding5>;

interface CreateScriptEdgePreviewRequestMetadataBinding6 {
  type: "d1";
  name: string;
  id: string;
  internalEnv?: string | null;
  raw?: boolean | null;
}
const CreateScriptEdgePreviewRequestMetadataBinding6 =
  /*@__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      type: Schema.Literal("d1"),
      name: Schema.String,
      id: Schema.String,
      internalEnv: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
      raw: Schema.optional(Schema.Union([Schema.Boolean, Schema.Null])),
    }),
  ) as unknown as Schema.Codec<CreateScriptEdgePreviewRequestMetadataBinding6>;

interface CreateScriptEdgePreviewRequestMetadataBinding7 {
  type: "queue";
  name: string;
  queueName: string;
  deliveryDelay?: number | null;
  raw?: boolean | null;
}
const CreateScriptEdgePreviewRequestMetadataBinding7 =
  /*@__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      type: Schema.Literal("queue"),
      name: Schema.String,
      queueName: Schema.String,
      deliveryDelay: Schema.optional(
        Schema.Union([Schema.Number, Schema.Null]),
      ),
      raw: Schema.optional(Schema.Union([Schema.Boolean, Schema.Null])),
    }).pipe(
      Schema.encodeKeys({
        type: "type",
        name: "name",
        queueName: "queue_name",
        deliveryDelay: "delivery_delay",
        raw: "raw",
      }),
    ),
  ) as unknown as Schema.Codec<CreateScriptEdgePreviewRequestMetadataBinding7>;

interface CreateScriptEdgePreviewRequestMetadataBinding8 {
  type: "service";
  name: string;
  service: string;
  environment?: string | null;
  entrypoint?: string | null;
  crossAccountGrant?: string | null;
}
const CreateScriptEdgePreviewRequestMetadataBinding8 =
  /*@__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      type: Schema.Literal("service"),
      name: Schema.String,
      service: Schema.String,
      environment: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
      entrypoint: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
      crossAccountGrant: Schema.optional(
        Schema.Union([Schema.String, Schema.Null]),
      ),
    }).pipe(
      Schema.encodeKeys({
        type: "type",
        name: "name",
        service: "service",
        environment: "environment",
        entrypoint: "entrypoint",
        crossAccountGrant: "cross_account_grant",
      }),
    ),
  ) as unknown as Schema.Codec<CreateScriptEdgePreviewRequestMetadataBinding8>;

interface CreateScriptEdgePreviewRequestMetadataBinding9 {
  type: "ai";
  name: string;
  staging?: boolean | null;
  raw?: boolean | null;
}
const CreateScriptEdgePreviewRequestMetadataBinding9 =
  /*@__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      type: Schema.Literal("ai"),
      name: Schema.String,
      staging: Schema.optional(Schema.Union([Schema.Boolean, Schema.Null])),
      raw: Schema.optional(Schema.Union([Schema.Boolean, Schema.Null])),
    }),
  ) as unknown as Schema.Codec<CreateScriptEdgePreviewRequestMetadataBinding9>;

interface CreateScriptEdgePreviewRequestMetadataBinding10 {
  type: "browser";
  name: string;
  raw?: boolean | null;
}
const CreateScriptEdgePreviewRequestMetadataBinding10 =
  /*@__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      type: Schema.Literal("browser"),
      name: Schema.String,
      raw: Schema.optional(Schema.Union([Schema.Boolean, Schema.Null])),
    }),
  ) as unknown as Schema.Codec<CreateScriptEdgePreviewRequestMetadataBinding10>;

interface CreateScriptEdgePreviewRequestMetadataBinding11 {
  type: "images";
  name: string;
  raw?: boolean | null;
}
const CreateScriptEdgePreviewRequestMetadataBinding11 =
  /*@__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      type: Schema.Literal("images"),
      name: Schema.String,
      raw: Schema.optional(Schema.Union([Schema.Boolean, Schema.Null])),
    }),
  ) as unknown as Schema.Codec<CreateScriptEdgePreviewRequestMetadataBinding11>;

interface CreateScriptEdgePreviewRequestMetadataBinding12 {
  type: "vectorize";
  name: string;
  indexName: string;
  internalEnv?: string | null;
  raw?: boolean | null;
}
const CreateScriptEdgePreviewRequestMetadataBinding12 =
  /*@__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      type: Schema.Literal("vectorize"),
      name: Schema.String,
      indexName: Schema.String,
      internalEnv: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
      raw: Schema.optional(Schema.Union([Schema.Boolean, Schema.Null])),
    }).pipe(
      Schema.encodeKeys({
        type: "type",
        name: "name",
        indexName: "index_name",
        internalEnv: "internalEnv",
        raw: "raw",
      }),
    ),
  ) as unknown as Schema.Codec<CreateScriptEdgePreviewRequestMetadataBinding12>;

interface CreateScriptEdgePreviewRequestMetadataBinding13 {
  type: "workflow";
  name: string;
  workflowName: string;
  className: string;
  scriptName?: string | null;
  raw?: boolean | null;
}
const CreateScriptEdgePreviewRequestMetadataBinding13 =
  /*@__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      type: Schema.Literal("workflow"),
      name: Schema.String,
      workflowName: Schema.String,
      className: Schema.String,
      scriptName: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
      raw: Schema.optional(Schema.Union([Schema.Boolean, Schema.Null])),
    }).pipe(
      Schema.encodeKeys({
        type: "type",
        name: "name",
        workflowName: "workflow_name",
        className: "class_name",
        scriptName: "script_name",
        raw: "raw",
      }),
    ),
  ) as unknown as Schema.Codec<CreateScriptEdgePreviewRequestMetadataBinding13>;

interface CreateScriptEdgePreviewRequestMetadataBinding15 {
  type: "analytics_engine";
  name: string;
  dataset?: string | null;
}
const CreateScriptEdgePreviewRequestMetadataBinding15 =
  /*@__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      type: Schema.Literal("analytics_engine"),
      name: Schema.String,
      dataset: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
    }),
  ) as unknown as Schema.Codec<CreateScriptEdgePreviewRequestMetadataBinding15>;

interface CreateScriptEdgePreviewRequestMetadataBinding16OutboundWorker {
  service?: string | null;
  environment?: string | null;
}
const CreateScriptEdgePreviewRequestMetadataBinding16OutboundWorker =
  /*@__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      service: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
      environment: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
    }),
  ) as unknown as Schema.Codec<CreateScriptEdgePreviewRequestMetadataBinding16OutboundWorker>;

interface CreateScriptEdgePreviewRequestMetadataBinding16Outbound {
  worker?: { service?: string | null; environment?: string | null } | null;
  params?: { name: string }[] | null;
}
const CreateScriptEdgePreviewRequestMetadataBinding16Outbound =
  /*@__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      worker: Schema.optional(
        Schema.Union([
          CreateScriptEdgePreviewRequestMetadataBinding16OutboundWorker,
          Schema.Null,
        ]),
      ),
      params: Schema.optional(
        Schema.Union([Schema.Array(TailConsumer), Schema.Null]),
      ),
    }),
  ) as unknown as Schema.Codec<CreateScriptEdgePreviewRequestMetadataBinding16Outbound>;

interface CreateScriptEdgePreviewRequestMetadataBinding16 {
  type: "dispatch_namespace";
  name: string;
  namespace: string;
  outbound?: {
    worker?: { service?: string | null; environment?: string | null } | null;
    params?: { name: string }[] | null;
  } | null;
}
const CreateScriptEdgePreviewRequestMetadataBinding16 =
  /*@__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      type: Schema.Literal("dispatch_namespace"),
      name: Schema.String,
      namespace: Schema.String,
      outbound: Schema.optional(
        Schema.Union([
          CreateScriptEdgePreviewRequestMetadataBinding16Outbound,
          Schema.Null,
        ]),
      ),
    }),
  ) as unknown as Schema.Codec<CreateScriptEdgePreviewRequestMetadataBinding16>;

interface CreateScriptEdgePreviewRequestMetadataBinding24 {
  type: "stream";
  name: string;
}
const CreateScriptEdgePreviewRequestMetadataBinding24 =
  /*@__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      type: Schema.Literal("stream"),
      name: Schema.String,
    }),
  ) as unknown as Schema.Codec<CreateScriptEdgePreviewRequestMetadataBinding24>;

interface CreateScriptEdgePreviewRequestMetadataBinding29 {
  type: "logfwdr";
  name: string;
  destination: string;
}
const CreateScriptEdgePreviewRequestMetadataBinding29 =
  /*@__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      type: Schema.Literal("logfwdr"),
      name: Schema.String,
      destination: Schema.String,
    }),
  ) as unknown as Schema.Codec<CreateScriptEdgePreviewRequestMetadataBinding29>;

interface CreateScriptEdgePreviewRequestMetadataBinding31 {
  type: "ai_search";
  name: string;
  instanceName: string;
}
const CreateScriptEdgePreviewRequestMetadataBinding31 =
  /*@__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      type: Schema.Literal("ai_search"),
      name: Schema.String,
      instanceName: Schema.String,
    }).pipe(
      Schema.encodeKeys({
        type: "type",
        name: "name",
        instanceName: "instance_name",
      }),
    ),
  ) as unknown as Schema.Codec<CreateScriptEdgePreviewRequestMetadataBinding31>;

interface CreateScriptEdgePreviewRequestMetadataBinding32Simple {
  limit: number;
  period: "10" | "60" | (string & {});
}
const CreateScriptEdgePreviewRequestMetadataBinding32Simple =
  /*@__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      limit: Schema.Number,
      period: Schema.Union([Schema.Literals(["10", "60"]), Schema.String]),
    }),
  ) as unknown as Schema.Codec<CreateScriptEdgePreviewRequestMetadataBinding32Simple>;

interface CreateScriptEdgePreviewRequestMetadataBinding32 {
  type: "ratelimit";
  name: string;
  namespaceId: string;
  simple: { limit: number; period: "10" | "60" | (string & {}) };
}
const CreateScriptEdgePreviewRequestMetadataBinding32 =
  /*@__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      type: Schema.Literal("ratelimit"),
      name: Schema.String,
      namespaceId: Schema.String,
      simple: CreateScriptEdgePreviewRequestMetadataBinding32Simple,
    }).pipe(
      Schema.encodeKeys({
        type: "type",
        name: "name",
        namespaceId: "namespace_id",
        simple: "simple",
      }),
    ),
  ) as unknown as Schema.Codec<CreateScriptEdgePreviewRequestMetadataBinding32>;

interface CreateScriptEdgePreviewRequestMetadataBinding34 {
  type: "unsafe_hello_world";
  name: string;
  enableTimer?: boolean | null;
}
const CreateScriptEdgePreviewRequestMetadataBinding34 =
  /*@__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      type: Schema.Literal("unsafe_hello_world"),
      name: Schema.String,
      enableTimer: Schema.optional(Schema.Union([Schema.Boolean, Schema.Null])),
    }).pipe(
      Schema.encodeKeys({
        type: "type",
        name: "name",
        enableTimer: "enable_timer",
      }),
    ),
  ) as unknown as Schema.Codec<CreateScriptEdgePreviewRequestMetadataBinding34>;

interface CreateScriptEdgePreviewRequestMetadataBinding38 {
  type: "inherit";
  name: string;
}
const CreateScriptEdgePreviewRequestMetadataBinding38 =
  /*@__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      type: Schema.Literal("inherit"),
      name: Schema.String,
    }),
  ) as unknown as Schema.Codec<CreateScriptEdgePreviewRequestMetadataBinding38>;

interface CreateScriptEdgePreviewRequestMetadataMigrationsStep {
  newClasses?: string[] | null;
  newSqliteClasses?: string[] | null;
  renamedClasses?: { from?: string | null; to?: string | null }[] | null;
  deletedClasses?: string[] | null;
}
const CreateScriptEdgePreviewRequestMetadataMigrationsStep =
  /*@__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      newClasses: Schema.optional(
        Schema.Union([Schema.Array(Schema.String), Schema.Null]),
      ),
      newSqliteClasses: Schema.optional(
        Schema.Union([Schema.Array(Schema.String), Schema.Null]),
      ),
      renamedClasses: Schema.optional(
        Schema.Union([Schema.Array(RenamedClass), Schema.Null]),
      ),
      deletedClasses: Schema.optional(
        Schema.Union([Schema.Array(Schema.String), Schema.Null]),
      ),
    }).pipe(
      Schema.encodeKeys({
        newClasses: "new_classes",
        newSqliteClasses: "new_sqlite_classes",
        renamedClasses: "renamed_classes",
        deletedClasses: "deleted_classes",
      }),
    ),
  ) as unknown as Schema.Codec<CreateScriptEdgePreviewRequestMetadataMigrationsStep>;

interface CreateScriptEdgePreviewRequestMetadataMigrations {
  oldTag?: string | null;
  newTag?: string | null;
  steps?:
    | {
        newClasses?: string[] | null;
        newSqliteClasses?: string[] | null;
        renamedClasses?: { from?: string | null; to?: string | null }[] | null;
        deletedClasses?: string[] | null;
      }[]
    | null;
}
const CreateScriptEdgePreviewRequestMetadataMigrations =
  /*@__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      oldTag: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
      newTag: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
      steps: Schema.optional(
        Schema.Union([
          Schema.Array(CreateScriptEdgePreviewRequestMetadataMigrationsStep),
          Schema.Null,
        ]),
      ),
    }).pipe(
      Schema.encodeKeys({
        oldTag: "old_tag",
        newTag: "new_tag",
        steps: "steps",
      }),
    ),
  ) as unknown as Schema.Codec<CreateScriptEdgePreviewRequestMetadataMigrations>;

interface CreateScriptEdgePreviewRequestMetadataPlacement {
  mode: "smart";
  hint?: string | null;
}
const CreateScriptEdgePreviewRequestMetadataPlacement =
  /*@__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      mode: Schema.Literal("smart"),
      hint: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
    }),
  ) as unknown as Schema.Codec<CreateScriptEdgePreviewRequestMetadataPlacement>;

interface CreateScriptEdgePreviewRequestMetadataTailConsumer {
  service: string;
  environment?: string | null;
}
const CreateScriptEdgePreviewRequestMetadataTailConsumer =
  /*@__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      service: Schema.String,
      environment: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
    }),
  ) as unknown as Schema.Codec<CreateScriptEdgePreviewRequestMetadataTailConsumer>;

interface CreateScriptEdgePreviewRequestMetadataAssetsConfig {
  htmlHandling?:
    | "auto-trailing-slash"
    | "force-trailing-slash"
    | "drop-trailing-slash"
    | "none"
    | (string & {})
    | null;
  notFoundHandling?:
    | "single-page-application"
    | "404-page"
    | "none"
    | (string & {})
    | null;
  runWorkerFirst?: boolean | string[] | null;
  redirects?: string | null;
  headers?: string | null;
}
const CreateScriptEdgePreviewRequestMetadataAssetsConfig =
  /*@__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
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
            Schema.Literals(["single-page-application", "404-page", "none"]),
            Schema.String,
          ]),
          Schema.Null,
        ]),
      ),
      runWorkerFirst: Schema.optional(
        Schema.Union([
          Schema.Union([Schema.Boolean, Schema.Array(Schema.String)]),
          Schema.Null,
        ]),
      ),
      redirects: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
      headers: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
    }).pipe(
      Schema.encodeKeys({
        htmlHandling: "html_handling",
        notFoundHandling: "not_found_handling",
        runWorkerFirst: "run_worker_first",
        redirects: "_redirects",
        headers: "_headers",
      }),
    ),
  ) as unknown as Schema.Codec<CreateScriptEdgePreviewRequestMetadataAssetsConfig>;

interface CreateScriptEdgePreviewRequestMetadataAssets {
  jwt?: string | null;
  config?: {
    htmlHandling?:
      | "auto-trailing-slash"
      | "force-trailing-slash"
      | "drop-trailing-slash"
      | "none"
      | (string & {})
      | null;
    notFoundHandling?:
      | "single-page-application"
      | "404-page"
      | "none"
      | (string & {})
      | null;
    runWorkerFirst?: boolean | string[] | null;
    redirects?: string | null;
    headers?: string | null;
  } | null;
}
const CreateScriptEdgePreviewRequestMetadataAssets =
  /*@__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      jwt: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
      config: Schema.optional(
        Schema.Union([
          CreateScriptEdgePreviewRequestMetadataAssetsConfig,
          Schema.Null,
        ]),
      ),
    }),
  ) as unknown as Schema.Codec<CreateScriptEdgePreviewRequestMetadataAssets>;

interface CreateScriptEdgePreviewRequestMetadataObservabilityTraces {
  enabled?: boolean | null;
  headSamplingRate?: number | null;
  persist?: boolean | null;
  destinations?: string[] | null;
}
const CreateScriptEdgePreviewRequestMetadataObservabilityTraces =
  /*@__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      enabled: Schema.optional(Schema.Union([Schema.Boolean, Schema.Null])),
      headSamplingRate: Schema.optional(
        Schema.Union([Schema.Number, Schema.Null]),
      ),
      persist: Schema.optional(Schema.Union([Schema.Boolean, Schema.Null])),
      destinations: Schema.optional(
        Schema.Union([Schema.Array(Schema.String), Schema.Null]),
      ),
    }).pipe(
      Schema.encodeKeys({
        enabled: "enabled",
        headSamplingRate: "head_sampling_rate",
        persist: "persist",
        destinations: "destinations",
      }),
    ),
  ) as unknown as Schema.Codec<CreateScriptEdgePreviewRequestMetadataObservabilityTraces>;

interface CreateScriptEdgePreviewRequestMetadataObservability {
  enabled?: boolean | null;
  headSamplingRate?: number | null;
  logs?: {
    enabled?: boolean | null;
    headSamplingRate?: number | null;
    invocationLogs?: boolean | null;
    persist?: boolean | null;
    destinations?: string[] | null;
  } | null;
  traces?: {
    enabled?: boolean | null;
    headSamplingRate?: number | null;
    persist?: boolean | null;
    destinations?: string[] | null;
  } | null;
}
const CreateScriptEdgePreviewRequestMetadataObservability =
  /*@__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      enabled: Schema.optional(Schema.Union([Schema.Boolean, Schema.Null])),
      headSamplingRate: Schema.optional(
        Schema.Union([Schema.Number, Schema.Null]),
      ),
      logs: Schema.optional(Schema.Union([Logs, Schema.Null])),
      traces: Schema.optional(
        Schema.Union([
          CreateScriptEdgePreviewRequestMetadataObservabilityTraces,
          Schema.Null,
        ]),
      ),
    }).pipe(
      Schema.encodeKeys({
        enabled: "enabled",
        headSamplingRate: "head_sampling_rate",
        logs: "logs",
        traces: "traces",
      }),
    ),
  ) as unknown as Schema.Codec<CreateScriptEdgePreviewRequestMetadataObservability>;

interface CreateScriptEdgePreviewRequestMetadata {
  /** Entry point module name (ES module format). */
  mainModule?: string | null;
  /** Entry point part name (service worker format). */
  bodyPart?: string | null;
  compatibilityDate?: string | null;
  compatibilityFlags?: string[] | null;
  usageModel?: "bundled" | "unbound" | "standard" | (string & {}) | null;
  bindings?:
    | (
        | { type: "plain_text"; name: string; text: string }
        | { type: "secret_text"; name: string; text: string }
        | { type: "json"; name: string; json: unknown }
        | {
            type: "kv_namespace";
            name: string;
            namespaceId: string;
            raw?: boolean | null;
          }
        | {
            type: "durable_object_namespace";
            name: string;
            className: string;
            scriptName?: string | null;
            environment?: string | null;
            namespaceId?: string | null;
          }
        | {
            type: "r2_bucket";
            name: string;
            bucketName: string;
            jurisdiction?: string | null;
            raw?: boolean | null;
          }
        | {
            type: "d1";
            name: string;
            id: string;
            internalEnv?: string | null;
            raw?: boolean | null;
          }
        | {
            type: "queue";
            name: string;
            queueName: string;
            deliveryDelay?: number | null;
            raw?: boolean | null;
          }
        | {
            type: "service";
            name: string;
            service: string;
            environment?: string | null;
            entrypoint?: string | null;
            crossAccountGrant?: string | null;
          }
        | {
            type: "ai";
            name: string;
            staging?: boolean | null;
            raw?: boolean | null;
          }
        | { type: "browser"; name: string; raw?: boolean | null }
        | { type: "images"; name: string; raw?: boolean | null }
        | {
            type: "vectorize";
            name: string;
            indexName: string;
            internalEnv?: string | null;
            raw?: boolean | null;
          }
        | {
            type: "workflow";
            name: string;
            workflowName: string;
            className: string;
            scriptName?: string | null;
            raw?: boolean | null;
          }
        | { type: "hyperdrive"; name: string; id: string }
        | { type: "analytics_engine"; name: string; dataset?: string | null }
        | {
            type: "dispatch_namespace";
            name: string;
            namespace: string;
            outbound?: {
              worker?: {
                service?: string | null;
                environment?: string | null;
              } | null;
              params?: { name: string }[] | null;
            } | null;
          }
        | {
            type: "send_email";
            name: string;
            destinationAddress?: string | null;
            allowedDestinationAddresses?: string[] | null;
            allowedSenderAddresses?: string[] | null;
          }
        | { type: "mtls_certificate"; name: string; certificateId: string }
        | { type: "wasm_module"; name: string; part: string }
        | { type: "text_blob"; name: string; part: string }
        | { type: "data_blob"; name: string; part: string }
        | { type: "pipelines"; name: string; pipeline: string }
        | {
            type: "secrets_store_secret";
            name: string;
            storeId: string;
            secretName: string;
          }
        | { type: "stream"; name: string }
        | { type: "media"; name: string }
        | { type: "version_metadata"; name: string }
        | { type: "assets"; name: string }
        | { type: "worker_loader"; name: string }
        | { type: "logfwdr"; name: string; destination: string }
        | { type: "ai_search_namespace"; name: string; namespace: string }
        | { type: "ai_search"; name: string; instanceName: string }
        | {
            type: "ratelimit";
            name: string;
            namespaceId: string;
            simple: { limit: number; period: "10" | "60" | (string & {}) };
          }
        | { type: "artifacts"; name: string; namespace: string }
        | {
            type: "unsafe_hello_world";
            name: string;
            enableTimer?: boolean | null;
          }
        | { type: "flagship"; name: string; appId: string }
        | { type: "vpc_service"; name: string; serviceId: string }
        | {
            type: "vpc_network";
            name: string;
            tunnelId?: string | null;
            networkId?: string | null;
          }
        | { type: "inherit"; name: string }
      )[]
    | null;
  keepBindings?: string[] | null;
  migrations?: {
    oldTag?: string | null;
    newTag?: string | null;
    steps?:
      | {
          newClasses?: string[] | null;
          newSqliteClasses?: string[] | null;
          renamedClasses?:
            | { from?: string | null; to?: string | null }[]
            | null;
          deletedClasses?: string[] | null;
        }[]
      | null;
  } | null;
  capnpSchema?: string | null;
  logpush?: boolean | null;
  placement?:
    | { mode: "smart"; hint?: string | null }
    | { region: string }
    | { host: string }
    | { hostname: string }
    | null;
  tailConsumers?: { service: string; environment?: string | null }[] | null;
  streamingTailConsumers?:
    | { service: string; environment?: string | null }[]
    | null;
  limits?: { cpuMs?: number | null; subrequests?: number | null } | null;
  assets?: {
    jwt?: string | null;
    config?: {
      htmlHandling?:
        | "auto-trailing-slash"
        | "force-trailing-slash"
        | "drop-trailing-slash"
        | "none"
        | (string & {})
        | null;
      notFoundHandling?:
        | "single-page-application"
        | "404-page"
        | "none"
        | (string & {})
        | null;
      runWorkerFirst?: boolean | string[] | null;
      redirects?: string | null;
      headers?: string | null;
    } | null;
  } | null;
  observability?: {
    enabled?: boolean | null;
    headSamplingRate?: number | null;
    logs?: {
      enabled?: boolean | null;
      headSamplingRate?: number | null;
      invocationLogs?: boolean | null;
      persist?: boolean | null;
      destinations?: string[] | null;
    } | null;
    traces?: {
      enabled?: boolean | null;
      headSamplingRate?: number | null;
      persist?: boolean | null;
      destinations?: string[] | null;
    } | null;
  } | null;
  containers?: { className: string }[] | null;
  annotations?: unknown | null;
  keepAssets?: boolean | null;
  tags?: string[] | null;
}
const CreateScriptEdgePreviewRequestMetadata = /*@__PURE__*/ Schema.suspend(
  () =>
    Schema.Struct({
      mainModule: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
      bodyPart: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
      compatibilityDate: Schema.optional(
        Schema.Union([Schema.String, Schema.Null]),
      ),
      compatibilityFlags: Schema.optional(
        Schema.Union([Schema.Array(Schema.String), Schema.Null]),
      ),
      usageModel: Schema.optional(
        Schema.Union([
          Schema.Union([
            Schema.Literals(["bundled", "unbound", "standard"]),
            Schema.String,
          ]),
          Schema.Null,
        ]),
      ),
      bindings: Schema.optional(
        Schema.Union([
          Schema.Array(
            Schema.Union([
              CreateScriptEdgePreviewRequestMetadataBinding13,
              WorkersBindingKindSecretsStoreSecret,
              CreateScriptEdgePreviewRequestMetadataBinding32,
              WorkersBindingKindPlainText,
              WorkersBindingKindSecretText2,
              WorkersBindingKindJson,
              CreateScriptEdgePreviewRequestMetadataBinding3,
              CreateScriptEdgePreviewRequestMetadataBinding4,
              CreateScriptEdgePreviewRequestMetadataBinding5,
              CreateScriptEdgePreviewRequestMetadataBinding6,
              CreateScriptEdgePreviewRequestMetadataBinding7,
              CreateScriptEdgePreviewRequestMetadataBinding8,
              CreateScriptEdgePreviewRequestMetadataBinding12,
              WorkersBindingKindHyperdrive,
              CreateScriptEdgePreviewRequestMetadataBinding16,
              WorkersBindingKindMTLSCertificate,
              WorkersBindingKindWasmModule,
              WorkersBindingKindTextBlob,
              WorkersBindingKindDataBlob,
              WorkersBindingKindPipelines,
              CreateScriptEdgePreviewRequestMetadataBinding29,
              WorkersBindingKindAISearchNamespace,
              CreateScriptEdgePreviewRequestMetadataBinding31,
              GetBetaWorkerVersionResponseBinding36,
              WorkersBindingKindFlagship,
              WorkersBindingKindVPCService,
              CreateScriptEdgePreviewRequestMetadataBinding9,
              CreateScriptEdgePreviewRequestMetadataBinding10,
              CreateScriptEdgePreviewRequestMetadataBinding11,
              CreateScriptEdgePreviewRequestMetadataBinding15,
              WorkersBindingKindSendEmail,
              CreateScriptEdgePreviewRequestMetadataBinding24,
              WorkersBindingKindMedia,
              WorkersBindingKindVersionMetadata,
              WorkersBindingKindAssets,
              GetBetaWorkerVersionResponseBinding35,
              CreateScriptEdgePreviewRequestMetadataBinding34,
              WorkersBindingKindVPCNetwork,
              CreateScriptEdgePreviewRequestMetadataBinding38,
            ]),
          ),
          Schema.Null,
        ]),
      ),
      keepBindings: Schema.optional(
        Schema.Union([Schema.Array(Schema.String), Schema.Null]),
      ),
      migrations: Schema.optional(
        Schema.Union([
          CreateScriptEdgePreviewRequestMetadataMigrations,
          Schema.Null,
        ]),
      ),
      capnpSchema: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
      logpush: Schema.optional(Schema.Union([Schema.Boolean, Schema.Null])),
      placement: Schema.optional(
        Schema.Union([
          Schema.Union([
            CreateScriptEdgePreviewRequestMetadataPlacement,
            Region,
            Host,
            Hostname,
          ]),
          Schema.Null,
        ]),
      ),
      tailConsumers: Schema.optional(
        Schema.Union([
          Schema.Array(CreateScriptEdgePreviewRequestMetadataTailConsumer),
          Schema.Null,
        ]),
      ),
      streamingTailConsumers: Schema.optional(
        Schema.Union([
          Schema.Array(CreateScriptEdgePreviewRequestMetadataTailConsumer),
          Schema.Null,
        ]),
      ),
      limits: Schema.optional(Schema.Union([Limits, Schema.Null])),
      assets: Schema.optional(
        Schema.Union([
          CreateScriptEdgePreviewRequestMetadataAssets,
          Schema.Null,
        ]),
      ),
      observability: Schema.optional(
        Schema.Union([
          CreateScriptEdgePreviewRequestMetadataObservability,
          Schema.Null,
        ]),
      ),
      containers: Schema.optional(
        Schema.Union([Schema.Array(Container), Schema.Null]),
      ),
      annotations: Schema.optional(Schema.Union([Schema.Unknown, Schema.Null])),
      keepAssets: Schema.optional(Schema.Union([Schema.Boolean, Schema.Null])),
      tags: Schema.optional(
        Schema.Union([Schema.Array(Schema.String), Schema.Null]),
      ),
    }).pipe(
      Schema.encodeKeys({
        mainModule: "main_module",
        bodyPart: "body_part",
        compatibilityDate: "compatibility_date",
        compatibilityFlags: "compatibility_flags",
        usageModel: "usage_model",
        bindings: "bindings",
        keepBindings: "keep_bindings",
        migrations: "migrations",
        capnpSchema: "capnp_schema",
        logpush: "logpush",
        placement: "placement",
        tailConsumers: "tail_consumers",
        streamingTailConsumers: "streaming_tail_consumers",
        limits: "limits",
        assets: "assets",
        observability: "observability",
        containers: "containers",
        annotations: "annotations",
        keepAssets: "keep_assets",
        tags: "tags",
      }),
    ),
) as unknown as Schema.Codec<CreateScriptEdgePreviewRequestMetadata>;

interface CreateScriptEdgePreviewRequestWranglerSessionConfig {
  workersDev: true;
  minimalMode?: boolean | null;
}
const CreateScriptEdgePreviewRequestWranglerSessionConfig =
  /*@__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      workersDev: Schema.Literal(true),
      minimalMode: Schema.optional(Schema.Union([Schema.Boolean, Schema.Null])),
    }).pipe(
      Schema.encodeKeys({
        workersDev: "workers_dev",
        minimalMode: "minimal_mode",
      }),
    ),
  ) as unknown as Schema.Codec<CreateScriptEdgePreviewRequestWranglerSessionConfig>;

interface CreateScriptEdgePreviewRequestWranglerSessionConfig1 {
  routes: string[];
  minimalMode?: boolean | null;
}
const CreateScriptEdgePreviewRequestWranglerSessionConfig1 =
  /*@__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      routes: Schema.Array(Schema.String),
      minimalMode: Schema.optional(Schema.Union([Schema.Boolean, Schema.Null])),
    }).pipe(
      Schema.encodeKeys({ routes: "routes", minimalMode: "minimal_mode" }),
    ),
  ) as unknown as Schema.Codec<CreateScriptEdgePreviewRequestWranglerSessionConfig1>;

interface Schedule {
  cron: string;
  createdOn?: string | null;
  modifiedOn?: string | null;
}
const Schedule = /*@__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    cron: Schema.String,
    createdOn: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
    modifiedOn: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
  }).pipe(
    Schema.encodeKeys({
      cron: "cron",
      createdOn: "created_on",
      modifiedOn: "modified_on",
    }),
  ),
) as unknown as Schema.Codec<Schedule>;

interface Body {
  cron: string;
}
const Body = /*@__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    cron: Schema.String,
  }),
) as unknown as Schema.Codec<Body>;

interface Settings {
  /** Annotations for the Worker version. Annotations are not inherited across settings updates; omitting this field means the new version will have no annotations. */
  annotations?: {
    workersMessage?: string | null;
    workersTag?: string | null;
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
            className: string;
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
            className: string;
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
        | { name: string; type: "worker_loader" }
        | { name: string; type: "artifacts"; namespace: string }
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
const Settings = /*@__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    annotations: Schema.optional(Schema.Union([Annotations2, Schema.Null])),
    bindings: Schema.optional(
      Schema.Union([
        Schema.Array(
          Schema.Union([
            WorkersBindingKindSecretKey2,
            WorkersBindingKindRatelimit,
            WorkersBindingKindSecretsStoreSecret,
            WorkersBindingKindWorkflow2,
            WorkersBindingKindAISearch,
            WorkersBindingKindAISearchNamespace,
            WorkersBindingKindAnalyticsEngine,
            WorkersBindingKindD1,
            WorkersBindingKindDataBlob,
            WorkersBindingKindDispatchNamespace,
            WorkersBindingKindDurableObjectNamespace2,
            WorkersBindingKindHyperdrive,
            WorkersBindingKindJson,
            WorkersBindingKindKVNamespace,
            WorkersBindingKindMTLSCertificate,
            WorkersBindingKindPlainText,
            WorkersBindingKindPipelines,
            WorkersBindingKindQueue,
            WorkersBindingKindR2Bucket,
            WorkersBindingKindSecretText2,
            WorkersBindingKindService,
            WorkersBindingKindTextBlob,
            WorkersBindingKindVectorize,
            WorkersBindingKindFlagship,
            WorkersBindingKindWasmModule,
            WorkersBindingKindVPCService,
            GetBetaWorkerVersionResponseBinding36,
            WorkersBindingKindAI,
            WorkersBindingKindAssets,
            WorkersBindingKindBrowser,
            WorkersBindingKindInherit,
            WorkersBindingKindImages,
            WorkersBindingKindMedia,
            WorkersBindingKindSendEmail,
            WorkersBindingKindVersionMetadata,
            WorkersBindingKindVPCNetwork,
            GetBetaWorkerVersionResponseBinding35,
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
    observability: Schema.optional(Schema.Union([Observability2, Schema.Null])),
    placement: Schema.optional(
      Schema.Union([
        Schema.Union([
          GetBetaWorkerVersionResponsePlacement4,
          GetBetaWorkerVersionResponsePlacement5,
          GetBetaWorkerVersionResponsePlacement6,
          GetBetaWorkerVersionResponsePlacement7,
          Mode,
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
      annotations: "annotations",
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

interface Script {
  /** Hashed script content */
  etag?: string | null;
  /** The names of handlers exported as part of the default export. */
  handlers?: string[] | null;
  /** The client most recently used to deploy this Worker. */
  lastDeployedFrom?: string | null;
  /** Named exports, such as Durable Object class implementations and named entrypoints. */
  namedHandlers?: { handlers?: string[] | null; name?: string | null }[] | null;
}
const Script = /*@__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    etag: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
    handlers: Schema.optional(
      Schema.Union([Schema.Array(Schema.String), Schema.Null]),
    ),
    lastDeployedFrom: Schema.optional(
      Schema.Union([Schema.String, Schema.Null]),
    ),
    namedHandlers: Schema.optional(
      Schema.Union([Schema.Array(NamedHandler), Schema.Null]),
    ),
  }).pipe(
    Schema.encodeKeys({
      etag: "etag",
      handlers: "handlers",
      lastDeployedFrom: "last_deployed_from",
      namedHandlers: "named_handlers",
    }),
  ),
) as unknown as Schema.Codec<Script>;

interface Limits2 {
  /** The amount of CPU time this Worker can use in milliseconds. */
  cpuMs?: number | null;
}
const Limits2 = /*@__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    cpuMs: Schema.optional(Schema.Union([Schema.Number, Schema.Null])),
  }).pipe(Schema.encodeKeys({ cpuMs: "cpu_ms" })),
) as unknown as Schema.Codec<Limits2>;

interface ScriptRuntime {
  /** Date indicating targeted support in the Workers runtime. Backwards incompatible fixes to the runtime following this date will not affect this Worker. */
  compatibilityDate?: string | null;
  /** Flags that enable or disable certain features in the Workers runtime. */
  compatibilityFlags?: string[] | null;
  /** Resource limits for the Worker. */
  limits?: { cpuMs?: number | null } | null;
  /** The tag of the Durable Object migration that was most recently applied for this Worker. */
  migrationTag?: string | null;
  /** Usage model for the Worker invocations. */
  usageModel?: "bundled" | "unbound" | "standard" | (string & {}) | null;
}
const ScriptRuntime = /*@__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    compatibilityDate: Schema.optional(
      Schema.Union([Schema.String, Schema.Null]),
    ),
    compatibilityFlags: Schema.optional(
      Schema.Union([Schema.Array(Schema.String), Schema.Null]),
    ),
    limits: Schema.optional(Schema.Union([Limits2, Schema.Null])),
    migrationTag: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
    usageModel: Schema.optional(
      Schema.Union([
        Schema.Union([
          Schema.Literals(["bundled", "unbound", "standard"]),
          Schema.String,
        ]),
        Schema.Null,
      ]),
    ),
  }).pipe(
    Schema.encodeKeys({
      compatibilityDate: "compatibility_date",
      compatibilityFlags: "compatibility_flags",
      limits: "limits",
      migrationTag: "migration_tag",
      usageModel: "usage_model",
    }),
  ),
) as unknown as Schema.Codec<ScriptRuntime>;

interface Resources {
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
        | { name: string; type: "worker_loader" }
        | { name: string; type: "artifacts"; namespace: string }
      )[]
    | null;
  script?: {
    etag?: string | null;
    handlers?: string[] | null;
    lastDeployedFrom?: string | null;
    namedHandlers?:
      | { handlers?: string[] | null; name?: string | null }[]
      | null;
  } | null;
  /** Runtime configuration for the Worker. */
  scriptRuntime?: {
    compatibilityDate?: string | null;
    compatibilityFlags?: string[] | null;
    limits?: { cpuMs?: number | null } | null;
    migrationTag?: string | null;
    usageModel?: "bundled" | "unbound" | "standard" | (string & {}) | null;
  } | null;
}
const Resources = /*@__PURE__*/ Schema.suspend(() =>
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
            WorkersBindingKindService,
            WorkersBindingKindTextBlob,
            WorkersBindingKindVectorize,
            WorkersBindingKindFlagship,
            WorkersBindingKindWorkflow,
            WorkersBindingKindWasmModule,
            WorkersBindingKindVPCService,
            GetBetaWorkerVersionResponseBinding36,
            WorkersBindingKindAI,
            WorkersBindingKindAssets,
            WorkersBindingKindBrowser,
            WorkersBindingKindDurableObjectNamespace,
            WorkersBindingKindInherit,
            WorkersBindingKindImages,
            WorkersBindingKindMedia,
            WorkersBindingKindSecretText,
            WorkersBindingKindSendEmail,
            WorkersBindingKindVersionMetadata,
            WorkersBindingKindVPCNetwork,
            GetBetaWorkerVersionResponseBinding35,
          ]),
        ),
        Schema.Null,
      ]),
    ),
    script: Schema.optional(Schema.Union([Script, Schema.Null])),
    scriptRuntime: Schema.optional(Schema.Union([ScriptRuntime, Schema.Null])),
  }).pipe(
    Schema.encodeKeys({
      bindings: "bindings",
      script: "script",
      scriptRuntime: "script_runtime",
    }),
  ),
) as unknown as Schema.Codec<Resources>;

interface Metadata4 {
  /** Email of the user who created the version. */
  authorEmail?: string | null;
  /** Identifier of the user who created the version. */
  authorId?: string | null;
  /** When the version was created. */
  createdOn?: string | null;
  /** Whether the version can be previewed. */
  hasPreview?: boolean | null;
  /** When the version was last modified. */
  modifiedOn?: string | null;
  /** The source of the version upload. */
  source?:
    | "unknown"
    | "api"
    | "wrangler"
    | "terraform"
    | "dash"
    | "dash_template"
    | "integration"
    | "quick_editor"
    | "playground"
    | "workersci"
    | (string & {})
    | null;
}
const Metadata4 = /*@__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    authorEmail: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
    authorId: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
    createdOn: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
    hasPreview: Schema.optional(Schema.Union([Schema.Boolean, Schema.Null])),
    modifiedOn: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
    source: Schema.optional(
      Schema.Union([
        Schema.Union([
          Schema.Literals([
            "unknown",
            "api",
            "wrangler",
            "terraform",
            "dash",
            "dash_template",
            "integration",
            "quick_editor",
            "playground",
            "workersci",
          ]),
          Schema.String,
        ]),
        Schema.Null,
      ]),
    ),
  }).pipe(
    Schema.encodeKeys({
      authorEmail: "author_email",
      authorId: "author_id",
      createdOn: "created_on",
      hasPreview: "hasPreview",
      modifiedOn: "modified_on",
      source: "source",
    }),
  ),
) as unknown as Schema.Codec<Metadata4>;

interface ListScriptVersionsResponseResultItem {
  /** Unique identifier for the version. */
  id?: string | null;
  metadata?: {
    authorEmail?: string | null;
    authorId?: string | null;
    createdOn?: string | null;
    hasPreview?: boolean | null;
    modifiedOn?: string | null;
    source?:
      | "unknown"
      | "api"
      | "wrangler"
      | "terraform"
      | "dash"
      | "dash_template"
      | "integration"
      | "quick_editor"
      | "playground"
      | "workersci"
      | (string & {})
      | null;
  } | null;
  /** Sequential version number. */
  number?: number | null;
}
const ListScriptVersionsResponseResultItem = /*@__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    id: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
    metadata: Schema.optional(Schema.Union([Metadata4, Schema.Null])),
    number: Schema.optional(Schema.Union([Schema.Number, Schema.Null])),
  }),
) as unknown as Schema.Codec<ListScriptVersionsResponseResultItem>;

interface ListScriptVersionsResponseResult {
  items?:
    | {
        id?: string | null;
        metadata?: {
          authorEmail?: string | null;
          authorId?: string | null;
          createdOn?: string | null;
          hasPreview?: boolean | null;
          modifiedOn?: string | null;
          source?:
            | "unknown"
            | "api"
            | "wrangler"
            | "terraform"
            | "dash"
            | "dash_template"
            | "integration"
            | "quick_editor"
            | "playground"
            | "workersci"
            | (string & {})
            | null;
        } | null;
        number?: number | null;
      }[]
    | null;
}
const ListScriptVersionsResponseResult = /*@__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    items: Schema.optional(
      Schema.Union([
        Schema.Array(ListScriptVersionsResponseResultItem),
        Schema.Null,
      ]),
    ),
  }),
) as unknown as Schema.Codec<ListScriptVersionsResponseResult>;

interface Annotations5 {
  /** Associated alias for a version. */
  workersAlias?: string | null;
  /** Human-readable message about the version. Truncated to 1000 bytes if longer. */
  workersMessage?: string | null;
  /** User-provided identifier for the version. Maximum 100 bytes. */
  workersTag?: string | null;
}
const Annotations5 = /*@__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    workersAlias: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
    workersMessage: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
    workersTag: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
  }).pipe(
    Schema.encodeKeys({
      workersAlias: "workers/alias",
      workersMessage: "workers/message",
      workersTag: "workers/tag",
    }),
  ),
) as unknown as Schema.Codec<Annotations5>;

interface Metadata5 {
  /** Name of the uploaded file that contains the main module (e.g. the file exporting a `fetch` handler). Indicates a `module syntax` Worker, which is required for Version Upload. */
  mainModule: string;
  annotations?: {
    workersAlias?: string | null;
    workersMessage?: string | null;
    workersTag?: string | null;
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
            className: string;
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
            className: string;
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
        | { name: string; type: "worker_loader" }
        | { name: string; type: "artifacts"; namespace: string }
      )[]
    | null;
  /** Date indicating targeted support in the Workers runtime. Backwards incompatible fixes to the runtime following this date will not affect this Worker. */
  compatibilityDate?: string | null;
  /** Flags that enable or disable certain features in the Workers runtime. Used to enable upcoming features or opt in or out of specific changes not included in a `compatibility_date`. */
  compatibilityFlags?: string[] | null;
  /** List of binding types to keep from previous_upload. */
  keepBindings?: string[] | null;
  /** Usage model for the Worker invocations. */
  usageModel?: "standard" | "bundled" | "unbound" | (string & {}) | null;
  cache?: {
    enabled?: boolean | null;
    crossVersionCache?: boolean | null;
  } | null;
}
const Metadata5 = /*@__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    mainModule: Schema.String,
    annotations: Schema.optional(Schema.Union([Annotations5, Schema.Null])),
    bindings: Schema.optional(
      Schema.Union([
        Schema.Array(
          Schema.Union([
            WorkersBindingKindSecretKey2,
            WorkersBindingKindRatelimit,
            WorkersBindingKindSecretsStoreSecret,
            WorkersBindingKindWorkflow2,
            WorkersBindingKindAISearch,
            WorkersBindingKindAISearchNamespace,
            WorkersBindingKindAnalyticsEngine,
            WorkersBindingKindD1,
            WorkersBindingKindDataBlob,
            WorkersBindingKindDispatchNamespace,
            WorkersBindingKindDurableObjectNamespace2,
            WorkersBindingKindHyperdrive,
            WorkersBindingKindJson,
            WorkersBindingKindKVNamespace,
            WorkersBindingKindMTLSCertificate,
            WorkersBindingKindPlainText,
            WorkersBindingKindPipelines,
            WorkersBindingKindQueue,
            WorkersBindingKindR2Bucket,
            WorkersBindingKindSecretText2,
            WorkersBindingKindService,
            WorkersBindingKindTextBlob,
            WorkersBindingKindVectorize,
            WorkersBindingKindFlagship,
            WorkersBindingKindWasmModule,
            WorkersBindingKindVPCService,
            GetBetaWorkerVersionResponseBinding36,
            WorkersBindingKindAI,
            WorkersBindingKindAssets,
            WorkersBindingKindBrowser,
            WorkersBindingKindInherit,
            WorkersBindingKindImages,
            WorkersBindingKindMedia,
            WorkersBindingKindSendEmail,
            WorkersBindingKindVersionMetadata,
            WorkersBindingKindVPCNetwork,
            GetBetaWorkerVersionResponseBinding35,
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
    keepBindings: Schema.optional(
      Schema.Union([Schema.Array(Schema.String), Schema.Null]),
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
    cache: Schema.optional(
      Schema.Union([PutScriptRequestMetadataCache, Schema.Null]),
    ),
  }).pipe(
    Schema.encodeKeys({
      mainModule: "main_module",
      annotations: "annotations",
      bindings: "bindings",
      compatibilityDate: "compatibility_date",
      compatibilityFlags: "compatibility_flags",
      keepBindings: "keep_bindings",
      usageModel: "usage_model",
      cache: "cache_options",
    }),
  ),
) as unknown as Schema.Codec<Metadata5>;

// =============================================================================
// AccountSetting
// =============================================================================

export interface GetAccountSettingRequest {
  /** Identifier. */
  accountId: string;
}

export const GetAccountSettingRequest = /*@__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    accountId: Schema.String.pipe(T.HttpPath("account_id")),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/accounts/{account_id}/workers/account-settings",
    }),
  ),
) as unknown as Schema.Codec<GetAccountSettingRequest>;

export interface GetAccountSettingResponse {
  defaultUsageModel?: string | null;
  greenCompute?: boolean | null;
}

export const GetAccountSettingResponse = /*@__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    defaultUsageModel: Schema.optional(
      Schema.Union([Schema.String, Schema.Null]),
    ),
    greenCompute: Schema.optional(Schema.Union([Schema.Boolean, Schema.Null])),
  })
    .pipe(
      Schema.encodeKeys({
        defaultUsageModel: "default_usage_model",
        greenCompute: "green_compute",
      }),
    )
    .pipe(T.ResponsePath("result")),
) as unknown as Schema.Codec<GetAccountSettingResponse>;

export type GetAccountSettingError = DefaultErrors | InvalidRoute | Forbidden;

export const getAccountSetting: API.OperationMethod<
  GetAccountSettingRequest,
  GetAccountSettingResponse,
  GetAccountSettingError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: GetAccountSettingRequest,
  output: GetAccountSettingResponse,
  errors: [InvalidRoute, Forbidden],
}));

export interface PutAccountSettingRequest {
  /** Path param: Identifier. */
  accountId: string;
  /** Body param */
  defaultUsageModel?: string;
  /** Body param */
  greenCompute?: boolean;
}

export const PutAccountSettingRequest = /*@__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    accountId: Schema.String.pipe(T.HttpPath("account_id")),
    defaultUsageModel: Schema.optional(Schema.String),
    greenCompute: Schema.optional(Schema.Boolean),
  }).pipe(
    Schema.encodeKeys({
      defaultUsageModel: "default_usage_model",
      greenCompute: "green_compute",
    }),
    T.Http({
      method: "PUT",
      path: "/accounts/{account_id}/workers/account-settings",
    }),
  ),
) as unknown as Schema.Codec<PutAccountSettingRequest>;

export interface PutAccountSettingResponse {
  defaultUsageModel?: string | null;
  greenCompute?: boolean | null;
}

export const PutAccountSettingResponse = /*@__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    defaultUsageModel: Schema.optional(
      Schema.Union([Schema.String, Schema.Null]),
    ),
    greenCompute: Schema.optional(Schema.Union([Schema.Boolean, Schema.Null])),
  })
    .pipe(
      Schema.encodeKeys({
        defaultUsageModel: "default_usage_model",
        greenCompute: "green_compute",
      }),
    )
    .pipe(T.ResponsePath("result")),
) as unknown as Schema.Codec<PutAccountSettingResponse>;

export type PutAccountSettingError = DefaultErrors | InvalidRoute | Forbidden;

export const putAccountSetting: API.OperationMethod<
  PutAccountSettingRequest,
  PutAccountSettingResponse,
  PutAccountSettingError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: PutAccountSettingRequest,
  output: PutAccountSettingResponse,
  errors: [InvalidRoute, Forbidden],
}));

// =============================================================================
// AssetUpload
// =============================================================================

export interface CreateAssetUploadRequest {
  /** Path param: Identifier. */
  accountId: string;
  /** Query param: Whether the file contents are base64-encoded. Must be `true`. */
  base64: true;
  /** Upload session JWT returned by createScriptAssetUpload. This SDK sends it as an Authorization bearer token for this request. */
  jwtToken?: string;
  /** Body param */
  body: Record<string, unknown>;
}

export const CreateAssetUploadRequest = /*@__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    accountId: Schema.String.pipe(T.HttpPath("account_id")),
    base64: Schema.Literal(true).pipe(T.HttpQuery("base64")),
    jwtToken: Schema.optional(Schema.String).pipe(
      T.HttpHeader("Authorization"),
    ),
    body: Schema.Record(Schema.String, Schema.Unknown).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/accounts/{account_id}/workers/assets/upload",
      contentType: "multipart",
    }),
  ),
) as unknown as Schema.Codec<CreateAssetUploadRequest>;

export interface CreateAssetUploadResponse {
  /** A "completion" JWT which can be redeemed when creating a Worker version. */
  jwt?: string | null;
}

export const CreateAssetUploadResponse = /*@__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    jwt: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
  }).pipe(T.ResponsePath("result")),
) as unknown as Schema.Codec<CreateAssetUploadResponse>;

export type CreateAssetUploadError = DefaultErrors | InvalidRoute;

export const createAssetUpload: API.OperationMethod<
  CreateAssetUploadRequest,
  CreateAssetUploadResponse,
  CreateAssetUploadError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: CreateAssetUploadRequest,
  output: CreateAssetUploadResponse,
  errors: [InvalidRoute],
}));

// =============================================================================
// BetaWorker
// =============================================================================

export interface GetBetaWorkerRequest {
  workerId: string;
  /** Identifier. */
  accountId: string;
}

export const GetBetaWorkerRequest = /*@__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    workerId: Schema.String.pipe(T.HttpPath("workerId")),
    accountId: Schema.String.pipe(T.HttpPath("account_id")),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/accounts/{account_id}/workers/workers/{workerId}",
    }),
  ),
) as unknown as Schema.Codec<GetBetaWorkerRequest>;

export interface GetBetaWorkerResponse {
  /** ID of the referencing Worker. */
  id: string;
  /** Name of the referencing Worker. */
  name: string;
}

export const GetBetaWorkerResponse = /*@__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    id: Schema.String,
    name: Schema.String,
  }).pipe(T.ResponsePath("result")),
) as unknown as Schema.Codec<GetBetaWorkerResponse>;

export type GetBetaWorkerError = DefaultErrors | WorkerNotFound | InvalidRoute;

export const getBetaWorker: API.OperationMethod<
  GetBetaWorkerRequest,
  GetBetaWorkerResponse,
  GetBetaWorkerError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: GetBetaWorkerRequest,
  output: GetBetaWorkerResponse,
  errors: [WorkerNotFound, InvalidRoute],
}));

export interface ListBetaWorkersRequest {
  /** Path param: Identifier. */
  accountId: string;
  page?: number;
  perPage?: number;
  /** Query param: Sort direction. */
  order?: "asc" | "desc" | (string & {});
  /** Query param: Property to sort results by. */
  orderBy?:
    | "deployed_on"
    | "updated_on"
    | "created_on"
    | "name"
    | (string & {});
}

export const ListBetaWorkersRequest = /*@__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    accountId: Schema.String.pipe(T.HttpPath("account_id")),
    page: Schema.optional(Schema.Number).pipe(T.HttpQuery("page")),
    perPage: Schema.optional(Schema.Number).pipe(T.HttpQuery("per_page")),
    order: Schema.optional(
      Schema.Union([Schema.Literals(["asc", "desc"]), Schema.String]),
    ).pipe(T.HttpQuery("order")),
    orderBy: Schema.optional(
      Schema.Union([
        Schema.Literals(["deployed_on", "updated_on", "created_on", "name"]),
        Schema.String,
      ]),
    ).pipe(T.HttpQuery("order_by")),
  }).pipe(
    T.Http({ method: "GET", path: "/accounts/{account_id}/workers/workers" }),
  ),
) as unknown as Schema.Codec<ListBetaWorkersRequest>;

export interface ListBetaWorkersResponse {
  result: { id: string; name: string }[];
  resultInfo?: {
    count?: number | null;
    page?: number | null;
    perPage?: number | null;
    totalCount?: number | null;
  } | null;
}

export const ListBetaWorkersResponse = /*@__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    result: Schema.Array(ListBetaWorkersResponseResult),
    resultInfo: Schema.optional(
      Schema.Union([ListBetaWorkersResponseResultInfo, Schema.Null]),
    ),
  }).pipe(Schema.encodeKeys({ result: "result", resultInfo: "result_info" })),
) as unknown as Schema.Codec<ListBetaWorkersResponse>;

export type ListBetaWorkersError = DefaultErrors | InvalidRoute;

export const listBetaWorkers: API.PaginatedOperationMethod<
  ListBetaWorkersRequest,
  ListBetaWorkersResponse,
  ListBetaWorkersError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: ListBetaWorkersRequest,
  output: ListBetaWorkersResponse,
  errors: [InvalidRoute],
  pagination: {
    mode: "page",
    inputToken: "page",
    outputToken: "resultInfo.page",
    items: "result",
    pageSize: "perPage",
  } as const,
}));

export interface CreateBetaWorkerRequest {
  /** Path param: Identifier. */
  accountId: string;
  /** Body param: Name of the Worker. */
  name: string;
  /** Body param: Whether logpush is enabled for the Worker. */
  logpush?: boolean;
  /** Body param: Observability settings for the Worker. */
  observability?: {
    enabled?: boolean;
    headSamplingRate?: number;
    logs?: {
      destinations?: string[];
      enabled?: boolean;
      headSamplingRate?: number;
      invocationLogs?: boolean;
      persist?: boolean;
    };
    traces?: {
      destinations?: string[];
      enabled?: boolean;
      headSamplingRate?: number;
      persist?: boolean;
      propagationPolicy?: "authenticated" | "accept" | (string & {});
    };
  };
  /** Body param: Subdomain settings for the Worker. */
  subdomain?: { enabled?: boolean; previewsEnabled?: boolean };
  /** Body param: Tags associated with the Worker. */
  tags?: string[];
  /** Body param: Other Workers that should consume logs from the Worker. */
  tailConsumers?: { name: string }[];
}

export const CreateBetaWorkerRequest = /*@__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    accountId: Schema.String.pipe(T.HttpPath("account_id")),
    name: Schema.String,
    logpush: Schema.optional(Schema.Boolean),
    observability: Schema.optional(Observability),
    subdomain: Schema.optional(Subdomain),
    tags: Schema.optional(Schema.Array(Schema.String)),
    tailConsumers: Schema.optional(Schema.Array(TailConsumer)),
  }).pipe(
    Schema.encodeKeys({
      name: "name",
      logpush: "logpush",
      observability: "observability",
      subdomain: "subdomain",
      tags: "tags",
      tailConsumers: "tail_consumers",
    }),
    T.Http({ method: "POST", path: "/accounts/{account_id}/workers/workers" }),
  ),
) as unknown as Schema.Codec<CreateBetaWorkerRequest>;

export interface CreateBetaWorkerResponse {
  /** ID of the referencing Worker. */
  id: string;
  /** Name of the referencing Worker. */
  name: string;
}

export const CreateBetaWorkerResponse = /*@__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    id: Schema.String,
    name: Schema.String,
  }).pipe(T.ResponsePath("result")),
) as unknown as Schema.Codec<CreateBetaWorkerResponse>;

export type CreateBetaWorkerError = DefaultErrors | InvalidRoute;

export const createBetaWorker: API.OperationMethod<
  CreateBetaWorkerRequest,
  CreateBetaWorkerResponse,
  CreateBetaWorkerError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: CreateBetaWorkerRequest,
  output: CreateBetaWorkerResponse,
  errors: [InvalidRoute],
}));

export interface UpdateBetaWorkerRequest {
  workerId: string;
  /** Path param: Identifier. */
  accountId: string;
  /** Body param: Name of the Worker. */
  name: string;
  /** Body param: Whether logpush is enabled for the Worker. */
  logpush?: boolean;
  /** Body param: Observability settings for the Worker. */
  observability?: {
    enabled?: boolean;
    headSamplingRate?: number;
    logs?: {
      destinations?: string[];
      enabled?: boolean;
      headSamplingRate?: number;
      invocationLogs?: boolean;
      persist?: boolean;
    };
    traces?: {
      destinations?: string[];
      enabled?: boolean;
      headSamplingRate?: number;
      persist?: boolean;
      propagationPolicy?: "authenticated" | "accept" | (string & {});
    };
  };
  /** Body param: Subdomain settings for the Worker. */
  subdomain?: { enabled?: boolean; previewsEnabled?: boolean };
  /** Body param: Tags associated with the Worker. */
  tags?: string[];
  /** Body param: Other Workers that should consume logs from the Worker. */
  tailConsumers?: { name: string }[];
}

export const UpdateBetaWorkerRequest = /*@__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    workerId: Schema.String.pipe(T.HttpPath("workerId")),
    accountId: Schema.String.pipe(T.HttpPath("account_id")),
    name: Schema.String,
    logpush: Schema.optional(Schema.Boolean),
    observability: Schema.optional(Observability),
    subdomain: Schema.optional(Subdomain),
    tags: Schema.optional(Schema.Array(Schema.String)),
    tailConsumers: Schema.optional(Schema.Array(TailConsumer)),
  }).pipe(
    Schema.encodeKeys({
      name: "name",
      logpush: "logpush",
      observability: "observability",
      subdomain: "subdomain",
      tags: "tags",
      tailConsumers: "tail_consumers",
    }),
    T.Http({
      method: "PUT",
      path: "/accounts/{account_id}/workers/workers/{workerId}",
    }),
  ),
) as unknown as Schema.Codec<UpdateBetaWorkerRequest>;

export interface UpdateBetaWorkerResponse {
  /** ID of the referencing Worker. */
  id: string;
  /** Name of the referencing Worker. */
  name: string;
}

export const UpdateBetaWorkerResponse = /*@__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    id: Schema.String,
    name: Schema.String,
  }).pipe(T.ResponsePath("result")),
) as unknown as Schema.Codec<UpdateBetaWorkerResponse>;

export type UpdateBetaWorkerError = DefaultErrors | WorkerNotFound;

export const updateBetaWorker: API.OperationMethod<
  UpdateBetaWorkerRequest,
  UpdateBetaWorkerResponse,
  UpdateBetaWorkerError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: UpdateBetaWorkerRequest,
  output: UpdateBetaWorkerResponse,
  errors: [WorkerNotFound],
}));

export interface PatchBetaWorkerRequest {
  workerId: string;
  /** Path param: Identifier. */
  accountId: string;
  /** Body param: Whether logpush is enabled for the Worker. */
  logpush: boolean;
  /** Body param: Name of the Worker. */
  name: string;
  /** Body param: Observability settings for the Worker. */
  observability: {
    enabled?: boolean;
    headSamplingRate?: number;
    logs?: {
      destinations?: string[];
      enabled?: boolean;
      headSamplingRate?: number;
      invocationLogs?: boolean;
      persist?: boolean;
    };
    traces?: {
      destinations?: string[];
      enabled?: boolean;
      headSamplingRate?: number;
      persist?: boolean;
      propagationPolicy?: "authenticated" | "accept" | (string & {});
    };
  };
  /** Body param: Subdomain settings for the Worker. */
  subdomain: { enabled?: boolean; previewsEnabled?: boolean };
  /** Body param: Tags associated with the Worker. */
  tags: string[];
  /** Body param: Other Workers that should consume logs from the Worker. */
  tailConsumers: { name: string }[];
}

export const PatchBetaWorkerRequest = /*@__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    workerId: Schema.String.pipe(T.HttpPath("workerId")),
    accountId: Schema.String.pipe(T.HttpPath("account_id")),
    logpush: Schema.Boolean,
    name: Schema.String,
    observability: Observability,
    subdomain: Subdomain,
    tags: Schema.Array(Schema.String),
    tailConsumers: Schema.Array(TailConsumer),
  }).pipe(
    Schema.encodeKeys({
      logpush: "logpush",
      name: "name",
      observability: "observability",
      subdomain: "subdomain",
      tags: "tags",
      tailConsumers: "tail_consumers",
    }),
    T.Http({
      method: "PATCH",
      path: "/accounts/{account_id}/workers/workers/{workerId}",
    }),
  ),
) as unknown as Schema.Codec<PatchBetaWorkerRequest>;

export interface PatchBetaWorkerResponse {
  /** ID of the referencing Worker. */
  id: string;
  /** Name of the referencing Worker. */
  name: string;
}

export const PatchBetaWorkerResponse = /*@__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    id: Schema.String,
    name: Schema.String,
  }).pipe(T.ResponsePath("result")),
) as unknown as Schema.Codec<PatchBetaWorkerResponse>;

export type PatchBetaWorkerError = DefaultErrors | WorkerNotFound;

export const patchBetaWorker: API.OperationMethod<
  PatchBetaWorkerRequest,
  PatchBetaWorkerResponse,
  PatchBetaWorkerError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: PatchBetaWorkerRequest,
  output: PatchBetaWorkerResponse,
  errors: [WorkerNotFound],
}));

export interface DeleteBetaWorkerRequest {
  workerId: string;
  /** Identifier. */
  accountId: string;
}

export const DeleteBetaWorkerRequest = /*@__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    workerId: Schema.String.pipe(T.HttpPath("workerId")),
    accountId: Schema.String.pipe(T.HttpPath("account_id")),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/accounts/{account_id}/workers/workers/{workerId}",
    }),
  ),
) as unknown as Schema.Codec<DeleteBetaWorkerRequest>;

export interface DeleteBetaWorkerResponse {
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
  /** Whether the API call was successful. */
  success: true;
}

export const DeleteBetaWorkerResponse = /*@__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    errors: Schema.Array(Error2),
    messages: Schema.Array(Error2),
    success: Schema.Literal(true),
  }),
) as unknown as Schema.Codec<DeleteBetaWorkerResponse>;

export type DeleteBetaWorkerError = DefaultErrors | WorkerNotFound;

export const deleteBetaWorker: API.OperationMethod<
  DeleteBetaWorkerRequest,
  DeleteBetaWorkerResponse,
  DeleteBetaWorkerError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: DeleteBetaWorkerRequest,
  output: DeleteBetaWorkerResponse,
  errors: [WorkerNotFound],
}));

// =============================================================================
// BetaWorkerVersion
// =============================================================================

export interface GetBetaWorkerVersionRequest {
  workerId: string;
  versionId: string;
  /** Path param: Identifier. */
  accountId: string;
  /** Query param: Whether to include the `modules` property of the version in the response, which contains code and sourcemap content and may add several megabytes to the response size. */
  include?: "modules";
}

export const GetBetaWorkerVersionRequest = /*@__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    workerId: Schema.String.pipe(T.HttpPath("workerId")),
    versionId: Schema.String.pipe(T.HttpPath("versionId")),
    accountId: Schema.String.pipe(T.HttpPath("account_id")),
    include: Schema.optional(Schema.Literal("modules")).pipe(
      T.HttpQuery("include"),
    ),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/accounts/{account_id}/workers/workers/{workerId}/versions/{versionId}",
    }),
  ),
) as unknown as Schema.Codec<GetBetaWorkerVersionRequest>;

export interface GetBetaWorkerVersionResponse {
  /** Version identifier. */
  id: string;
  /** When the version was created. */
  createdOn: string;
  /** The integer version number, starting from one. */
  number: number;
  /** All routable URLs that always point to this version. Does not include alias URLs, since aliases can be updated to point to a different version. */
  urls: string[];
  /** Metadata about the version. */
  annotations?: {
    workersMessage?: string | null;
    workersTag?: string | null;
    workersTriggeredBy?: string | null;
  } | null;
  /** Configuration for assets within a Worker.  [`_headers`](https://developers.cloudflare.com/workers/static-assets/headers/#custom-headers) and [`_redirects`](https://developers.cloudflare.com/workers/st */
  assets?: {
    config?: {
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
        | { name: string; type: "worker_loader" }
        | { name: string; type: "artifacts"; namespace: string }
      )[]
    | null;
  /** Date indicating targeted support in the Workers runtime. Backwards incompatible fixes to the runtime following this date will not affect this Worker. */
  compatibilityDate?: string | null;
  /** Flags that enable or disable certain features in the Workers runtime. Used to enable upcoming features or opt in or out of specific changes not included in a `compatibility_date`. */
  compatibilityFlags?: string[] | null;
  /** List of containers attached to a Worker. Containers can only be attached to Durable Object classes of this Worker script. */
  containers?: { className: string }[] | null;
  /** Resource limits enforced at runtime. */
  limits?: { cpuMs?: number | null; subrequests?: number | null } | null;
  /** The name of the main module in the `modules` array (e.g. the name of the module that exports a `fetch` handler). */
  mainModule?: string | null;
  /** Durable Object migration tag. Set when the version is deployed. Omitted if the version has not been deployed or the Worker does not use Durable Objects. */
  migrationTag?: string | null;
  /** Migrations for Durable Objects associated with the version. Migrations are applied when the version is deployed. */
  migrations?:
    | unknown
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
  /** Code, sourcemaps, and other content used at runtime.  This includes [`_headers`](https://developers.cloudflare.com/workers/static-assets/headers/#custom-headers) and [`_redirects`](https://developers. */
  modules?:
    | { contentBase64: string; contentType: string; name: string }[]
    | null;
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
  /** The client used to create the version. */
  source?: string | null;
  /** Time in milliseconds spent on [Worker startup](https://developers.cloudflare.com/workers/platform/limits/#worker-startup-time). */
  startupTimeMs?: number | null;
  /** @deprecated Usage model for the version. */
  usageModel?: "standard" | "bundled" | "unbound" | (string & {}) | null;
}

export const GetBetaWorkerVersionResponse = /*@__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    id: Schema.String,
    createdOn: Schema.String,
    number: Schema.Number,
    urls: Schema.Array(Schema.String),
    annotations: Schema.optional(Schema.Union([Annotations, Schema.Null])),
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
            WorkersBindingKindService,
            WorkersBindingKindTextBlob,
            WorkersBindingKindVectorize,
            WorkersBindingKindFlagship,
            WorkersBindingKindWorkflow,
            WorkersBindingKindWasmModule,
            WorkersBindingKindVPCService,
            GetBetaWorkerVersionResponseBinding36,
            WorkersBindingKindAI,
            WorkersBindingKindAssets,
            WorkersBindingKindBrowser,
            WorkersBindingKindDurableObjectNamespace,
            WorkersBindingKindInherit,
            WorkersBindingKindImages,
            WorkersBindingKindMedia,
            WorkersBindingKindSecretText,
            WorkersBindingKindSendEmail,
            WorkersBindingKindVersionMetadata,
            WorkersBindingKindVPCNetwork,
            GetBetaWorkerVersionResponseBinding35,
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
    containers: Schema.optional(
      Schema.Union([Schema.Array(Container), Schema.Null]),
    ),
    limits: Schema.optional(Schema.Union([Limits, Schema.Null])),
    mainModule: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
    migrationTag: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
    migrations: Schema.optional(
      Schema.Union([
        Schema.Union([Schema.Unknown, WorkersMultipleStepMigrations]),
        Schema.Null,
      ]),
    ),
    modules: Schema.optional(Schema.Union([Schema.Array(Module), Schema.Null])),
    placement: Schema.optional(
      Schema.Union([
        Schema.Union([
          GetBetaWorkerVersionResponsePlacement4,
          GetBetaWorkerVersionResponsePlacement5,
          GetBetaWorkerVersionResponsePlacement6,
          GetBetaWorkerVersionResponsePlacement7,
          Mode,
          Region,
          Hostname,
          Host,
        ]),
        Schema.Null,
      ]),
    ),
    source: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
    startupTimeMs: Schema.optional(Schema.Union([Schema.Number, Schema.Null])),
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
        createdOn: "created_on",
        number: "number",
        urls: "urls",
        annotations: "annotations",
        assets: "assets",
        bindings: "bindings",
        compatibilityDate: "compatibility_date",
        compatibilityFlags: "compatibility_flags",
        containers: "containers",
        limits: "limits",
        mainModule: "main_module",
        migrationTag: "migration_tag",
        migrations: "migrations",
        modules: "modules",
        placement: "placement",
        source: "source",
        startupTimeMs: "startup_time_ms",
        usageModel: "usage_model",
      }),
    )
    .pipe(T.ResponsePath("result")),
) as unknown as Schema.Codec<GetBetaWorkerVersionResponse>;

export type GetBetaWorkerVersionError =
  | DefaultErrors
  | WorkerNotFound
  | WorkerVersionNotFound;

export const getBetaWorkerVersion: API.OperationMethod<
  GetBetaWorkerVersionRequest,
  GetBetaWorkerVersionResponse,
  GetBetaWorkerVersionError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: GetBetaWorkerVersionRequest,
  output: GetBetaWorkerVersionResponse,
  errors: [WorkerNotFound, WorkerVersionNotFound],
}));

export interface ListBetaWorkerVersionsRequest {
  workerId: string;
  /** Path param: Identifier. */
  accountId: string;
  page?: number;
  perPage?: number;
}

export const ListBetaWorkerVersionsRequest = /*@__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    workerId: Schema.String.pipe(T.HttpPath("workerId")),
    accountId: Schema.String.pipe(T.HttpPath("account_id")),
    page: Schema.optional(Schema.Number).pipe(T.HttpQuery("page")),
    perPage: Schema.optional(Schema.Number).pipe(T.HttpQuery("per_page")),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/accounts/{account_id}/workers/workers/{workerId}/versions",
    }),
  ),
) as unknown as Schema.Codec<ListBetaWorkerVersionsRequest>;

export interface ListBetaWorkerVersionsResponse {
  result: {
    id: string;
    createdOn: string;
    number: number;
    urls: string[];
    annotations?: {
      workersMessage?: string | null;
      workersTag?: string | null;
      workersTriggeredBy?: string | null;
    } | null;
    assets?: {
      config?: {
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
      } | null;
      jwt?: string | null;
    } | null;
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
          | { name: string; type: "worker_loader" }
          | { name: string; type: "artifacts"; namespace: string }
        )[]
      | null;
    compatibilityDate?: string | null;
    compatibilityFlags?: string[] | null;
    containers?: { className: string }[] | null;
    limits?: { cpuMs?: number | null; subrequests?: number | null } | null;
    mainModule?: string | null;
    migrationTag?: string | null;
    migrations?:
      | unknown
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
    modules?:
      | { contentBase64: string; contentType: string; name: string }[]
      | null;
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
    source?: string | null;
    startupTimeMs?: number | null;
    usageModel?: "standard" | "bundled" | "unbound" | (string & {}) | null;
  }[];
  resultInfo?: {
    count?: number | null;
    page?: number | null;
    perPage?: number | null;
    totalCount?: number | null;
  } | null;
}

export const ListBetaWorkerVersionsResponse = /*@__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    result: Schema.Array(ListBetaWorkerVersionsResponseResult),
    resultInfo: Schema.optional(
      Schema.Union([ListBetaWorkersResponseResultInfo, Schema.Null]),
    ),
  }).pipe(Schema.encodeKeys({ result: "result", resultInfo: "result_info" })),
) as unknown as Schema.Codec<ListBetaWorkerVersionsResponse>;

export type ListBetaWorkerVersionsError = DefaultErrors | WorkerNotFound;

export const listBetaWorkerVersions: API.PaginatedOperationMethod<
  ListBetaWorkerVersionsRequest,
  ListBetaWorkerVersionsResponse,
  ListBetaWorkerVersionsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: ListBetaWorkerVersionsRequest,
  output: ListBetaWorkerVersionsResponse,
  errors: [WorkerNotFound],
  pagination: {
    mode: "page",
    inputToken: "page",
    outputToken: "resultInfo.page",
    items: "result",
    pageSize: "perPage",
  } as const,
}));

export interface CreateBetaWorkerVersionRequest {
  workerId: string;
  /** Path param: Identifier. */
  accountId: string;
  /** Query param: If true, a deployment will be created that sends 100% of traffic to the new version. */
  deploy?: boolean;
  /** Body param: Metadata about the version. */
  annotations?: { workersMessage?: string; workersTag?: string };
  /** Body param: Configuration for assets within a Worker.  [`_headers`](https://developers.cloudflare.com/workers/static-assets/headers/#custom-headers) and [`_redirects`](https://developers.cloudflare.co */
  assets?: {
    config?: {
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
    };
    jwt?: string;
  };
  /** Body param: List of bindings attached to a Worker. You can find more about bindings on our docs: https://developers.cloudflare.com/workers/configuration/multipart-upload-metadata/#bindings. */
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
        className: string;
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
        className: string;
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
    | { name: string; type: "worker_loader" }
    | { name: string; type: "artifacts"; namespace: string }
  )[];
  /** Body param: Date indicating targeted support in the Workers runtime. Backwards incompatible fixes to the runtime following this date will not affect this Worker. */
  compatibilityDate?: string;
  /** Body param: Flags that enable or disable certain features in the Workers runtime. Used to enable upcoming features or opt in or out of specific changes not included in a `compatibility_date`. */
  compatibilityFlags?: string[];
  /** Body param: List of containers attached to a Worker. Containers can only be attached to Durable Object classes of this Worker script. */
  containers?: { className: string }[];
  /** Body param: Resource limits enforced at runtime. */
  limits?: { cpuMs?: number; subrequests?: number };
  /** Body param: The name of the main module in the `modules` array (e.g. the name of the module that exports a `fetch` handler). */
  mainModule?: string;
  /** Body param: Migrations for Durable Objects associated with the version. Migrations are applied when the version is deployed. */
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
  /** Body param: Code, sourcemaps, and other content used at runtime.  This includes [`_headers`](https://developers.cloudflare.com/workers/static-assets/headers/#custom-headers) and [`_redirects`](https:/ */
  modules?: { contentBase64: string; contentType: string; name: string }[];
  /** Body param: Configuration for [Smart Placement](https://developers.cloudflare.com/workers/configuration/smart-placement). Specify mode='smart' for Smart Placement, or one of region/hostname/host. */
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
  /** @deprecated Body param: Usage model for the version. */
  usageModel?: "standard" | "bundled" | "unbound" | (string & {});
}

export const CreateBetaWorkerVersionRequest = /*@__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    workerId: Schema.String.pipe(T.HttpPath("workerId")),
    accountId: Schema.String.pipe(T.HttpPath("account_id")),
    deploy: Schema.optional(Schema.Boolean).pipe(T.HttpQuery("deploy")),
    annotations: Schema.optional(Annotations2),
    assets: Schema.optional(Assets),
    bindings: Schema.optional(
      Schema.Array(
        Schema.Union([
          WorkersBindingKindSecretKey2,
          WorkersBindingKindRatelimit,
          WorkersBindingKindSecretsStoreSecret,
          WorkersBindingKindWorkflow2,
          WorkersBindingKindAISearch,
          WorkersBindingKindAISearchNamespace,
          WorkersBindingKindAnalyticsEngine,
          WorkersBindingKindD1,
          WorkersBindingKindDataBlob,
          WorkersBindingKindDispatchNamespace,
          WorkersBindingKindDurableObjectNamespace2,
          WorkersBindingKindHyperdrive,
          WorkersBindingKindJson,
          WorkersBindingKindKVNamespace,
          WorkersBindingKindMTLSCertificate,
          WorkersBindingKindPlainText,
          WorkersBindingKindPipelines,
          WorkersBindingKindQueue,
          WorkersBindingKindR2Bucket,
          WorkersBindingKindSecretText2,
          WorkersBindingKindService,
          WorkersBindingKindTextBlob,
          WorkersBindingKindVectorize,
          WorkersBindingKindFlagship,
          WorkersBindingKindWasmModule,
          WorkersBindingKindVPCService,
          GetBetaWorkerVersionResponseBinding36,
          WorkersBindingKindAI,
          WorkersBindingKindAssets,
          WorkersBindingKindBrowser,
          WorkersBindingKindInherit,
          WorkersBindingKindImages,
          WorkersBindingKindMedia,
          WorkersBindingKindSendEmail,
          WorkersBindingKindVersionMetadata,
          WorkersBindingKindVPCNetwork,
          GetBetaWorkerVersionResponseBinding35,
        ]),
      ),
    ),
    compatibilityDate: Schema.optional(Schema.String),
    compatibilityFlags: Schema.optional(Schema.Array(Schema.String)),
    containers: Schema.optional(Schema.Array(Container)),
    limits: Schema.optional(Limits),
    mainModule: Schema.optional(Schema.String),
    migrations: Schema.optional(
      Schema.Union([SingleStepMigrationParam, WorkersMultipleStepMigrations]),
    ),
    modules: Schema.optional(Schema.Array(Module)),
    placement: Schema.optional(
      Schema.Union([
        GetBetaWorkerVersionResponsePlacement4,
        GetBetaWorkerVersionResponsePlacement5,
        GetBetaWorkerVersionResponsePlacement6,
        GetBetaWorkerVersionResponsePlacement7,
        Mode,
        Region,
        Hostname,
        Host,
      ]),
    ),
    usageModel: Schema.optional(
      Schema.Union([
        Schema.Literals(["standard", "bundled", "unbound"]),
        Schema.String,
      ]),
    ),
  }).pipe(
    Schema.encodeKeys({
      annotations: "annotations",
      assets: "assets",
      bindings: "bindings",
      compatibilityDate: "compatibility_date",
      compatibilityFlags: "compatibility_flags",
      containers: "containers",
      limits: "limits",
      mainModule: "main_module",
      migrations: "migrations",
      modules: "modules",
      placement: "placement",
      usageModel: "usage_model",
    }),
    T.Http({
      method: "POST",
      path: "/accounts/{account_id}/workers/workers/{workerId}/versions",
    }),
  ),
) as unknown as Schema.Codec<CreateBetaWorkerVersionRequest>;

export interface CreateBetaWorkerVersionResponse {
  /** Version identifier. */
  id: string;
  /** When the version was created. */
  createdOn: string;
  /** The integer version number, starting from one. */
  number: number;
  /** All routable URLs that always point to this version. Does not include alias URLs, since aliases can be updated to point to a different version. */
  urls: string[];
  /** Metadata about the version. */
  annotations?: {
    workersMessage?: string | null;
    workersTag?: string | null;
    workersTriggeredBy?: string | null;
  } | null;
  /** Configuration for assets within a Worker.  [`_headers`](https://developers.cloudflare.com/workers/static-assets/headers/#custom-headers) and [`_redirects`](https://developers.cloudflare.com/workers/st */
  assets?: {
    config?: {
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
        | { name: string; type: "worker_loader" }
        | { name: string; type: "artifacts"; namespace: string }
      )[]
    | null;
  /** Date indicating targeted support in the Workers runtime. Backwards incompatible fixes to the runtime following this date will not affect this Worker. */
  compatibilityDate?: string | null;
  /** Flags that enable or disable certain features in the Workers runtime. Used to enable upcoming features or opt in or out of specific changes not included in a `compatibility_date`. */
  compatibilityFlags?: string[] | null;
  /** List of containers attached to a Worker. Containers can only be attached to Durable Object classes of this Worker script. */
  containers?: { className: string }[] | null;
  /** Resource limits enforced at runtime. */
  limits?: { cpuMs?: number | null; subrequests?: number | null } | null;
  /** The name of the main module in the `modules` array (e.g. the name of the module that exports a `fetch` handler). */
  mainModule?: string | null;
  /** Durable Object migration tag. Set when the version is deployed. Omitted if the version has not been deployed or the Worker does not use Durable Objects. */
  migrationTag?: string | null;
  /** Migrations for Durable Objects associated with the version. Migrations are applied when the version is deployed. */
  migrations?:
    | unknown
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
  /** Code, sourcemaps, and other content used at runtime.  This includes [`_headers`](https://developers.cloudflare.com/workers/static-assets/headers/#custom-headers) and [`_redirects`](https://developers. */
  modules?:
    | { contentBase64: string; contentType: string; name: string }[]
    | null;
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
  /** The client used to create the version. */
  source?: string | null;
  /** Time in milliseconds spent on [Worker startup](https://developers.cloudflare.com/workers/platform/limits/#worker-startup-time). */
  startupTimeMs?: number | null;
  /** @deprecated Usage model for the version. */
  usageModel?: "standard" | "bundled" | "unbound" | (string & {}) | null;
}

export const CreateBetaWorkerVersionResponse = /*@__PURE__*/ Schema.suspend(
  () =>
    Schema.Struct({
      id: Schema.String,
      createdOn: Schema.String,
      number: Schema.Number,
      urls: Schema.Array(Schema.String),
      annotations: Schema.optional(Schema.Union([Annotations, Schema.Null])),
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
              WorkersBindingKindService,
              WorkersBindingKindTextBlob,
              WorkersBindingKindVectorize,
              WorkersBindingKindFlagship,
              WorkersBindingKindWorkflow,
              WorkersBindingKindWasmModule,
              WorkersBindingKindVPCService,
              GetBetaWorkerVersionResponseBinding36,
              WorkersBindingKindAI,
              WorkersBindingKindAssets,
              WorkersBindingKindBrowser,
              WorkersBindingKindDurableObjectNamespace,
              WorkersBindingKindInherit,
              WorkersBindingKindImages,
              WorkersBindingKindMedia,
              WorkersBindingKindSecretText,
              WorkersBindingKindSendEmail,
              WorkersBindingKindVersionMetadata,
              WorkersBindingKindVPCNetwork,
              GetBetaWorkerVersionResponseBinding35,
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
      containers: Schema.optional(
        Schema.Union([Schema.Array(Container), Schema.Null]),
      ),
      limits: Schema.optional(Schema.Union([Limits, Schema.Null])),
      mainModule: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
      migrationTag: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
      migrations: Schema.optional(
        Schema.Union([
          Schema.Union([Schema.Unknown, WorkersMultipleStepMigrations]),
          Schema.Null,
        ]),
      ),
      modules: Schema.optional(
        Schema.Union([Schema.Array(Module), Schema.Null]),
      ),
      placement: Schema.optional(
        Schema.Union([
          Schema.Union([
            GetBetaWorkerVersionResponsePlacement4,
            GetBetaWorkerVersionResponsePlacement5,
            GetBetaWorkerVersionResponsePlacement6,
            GetBetaWorkerVersionResponsePlacement7,
            Mode,
            Region,
            Hostname,
            Host,
          ]),
          Schema.Null,
        ]),
      ),
      source: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
      startupTimeMs: Schema.optional(
        Schema.Union([Schema.Number, Schema.Null]),
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
          createdOn: "created_on",
          number: "number",
          urls: "urls",
          annotations: "annotations",
          assets: "assets",
          bindings: "bindings",
          compatibilityDate: "compatibility_date",
          compatibilityFlags: "compatibility_flags",
          containers: "containers",
          limits: "limits",
          mainModule: "main_module",
          migrationTag: "migration_tag",
          migrations: "migrations",
          modules: "modules",
          placement: "placement",
          source: "source",
          startupTimeMs: "startup_time_ms",
          usageModel: "usage_model",
        }),
      )
      .pipe(T.ResponsePath("result")),
) as unknown as Schema.Codec<CreateBetaWorkerVersionResponse>;

export type CreateBetaWorkerVersionError = DefaultErrors | WorkerNotFound;

export const createBetaWorkerVersion: API.OperationMethod<
  CreateBetaWorkerVersionRequest,
  CreateBetaWorkerVersionResponse,
  CreateBetaWorkerVersionError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: CreateBetaWorkerVersionRequest,
  output: CreateBetaWorkerVersionResponse,
  errors: [WorkerNotFound],
}));

export interface DeleteBetaWorkerVersionRequest {
  workerId: string;
  versionId: string;
  /** Identifier. */
  accountId: string;
}

export const DeleteBetaWorkerVersionRequest = /*@__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    workerId: Schema.String.pipe(T.HttpPath("workerId")),
    versionId: Schema.String.pipe(T.HttpPath("versionId")),
    accountId: Schema.String.pipe(T.HttpPath("account_id")),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/accounts/{account_id}/workers/workers/{workerId}/versions/{versionId}",
    }),
  ),
) as unknown as Schema.Codec<DeleteBetaWorkerVersionRequest>;

export interface DeleteBetaWorkerVersionResponse {
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
  /** Whether the API call was successful. */
  success: true;
}

export const DeleteBetaWorkerVersionResponse = /*@__PURE__*/ Schema.suspend(
  () =>
    Schema.Struct({
      errors: Schema.Array(Error2),
      messages: Schema.Array(Error2),
      success: Schema.Literal(true),
    }),
) as unknown as Schema.Codec<DeleteBetaWorkerVersionResponse>;

export type DeleteBetaWorkerVersionError =
  | DefaultErrors
  | WorkerNotFound
  | WorkerVersionNotFound;

export const deleteBetaWorkerVersion: API.OperationMethod<
  DeleteBetaWorkerVersionRequest,
  DeleteBetaWorkerVersionResponse,
  DeleteBetaWorkerVersionError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: DeleteBetaWorkerVersionRequest,
  output: DeleteBetaWorkerVersionResponse,
  errors: [WorkerNotFound, WorkerVersionNotFound],
}));

// =============================================================================
// Domain
// =============================================================================

export interface GetDomainRequest {
  domainId: string;
  /** Identifier. */
  accountId: string;
}

export const GetDomainRequest = /*@__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    domainId: Schema.String.pipe(T.HttpPath("domainId")),
    accountId: Schema.String.pipe(T.HttpPath("account_id")),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/accounts/{account_id}/workers/domains/{domainId}",
    }),
  ),
) as unknown as Schema.Codec<GetDomainRequest>;

export interface GetDomainResponse {
  /** Immutable ID of the domain. */
  id: string;
  /** ID of the TLS certificate issued for the domain. */
  certId: string;
  /** @deprecated Worker environment associated with the domain. */
  environment: string;
  /** Hostname of the domain. Can be either the zone apex or a subdomain of the zone. Requests to this hostname will be routed to the configured Worker. */
  hostname: string;
  /** Name of the Worker associated with the domain. Requests to the configured hostname will be routed to this Worker. */
  service: string;
  /** ID of the zone containing the domain hostname. */
  zoneId: string;
  /** Name of the zone containing the domain hostname. */
  zoneName: string;
}

export const GetDomainResponse = /*@__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    id: Schema.String,
    certId: Schema.String,
    environment: Schema.String,
    hostname: Schema.String,
    service: Schema.String,
    zoneId: Schema.String,
    zoneName: Schema.String,
  })
    .pipe(
      Schema.encodeKeys({
        id: "id",
        certId: "cert_id",
        environment: "environment",
        hostname: "hostname",
        service: "service",
        zoneId: "zone_id",
        zoneName: "zone_name",
      }),
    )
    .pipe(T.ResponsePath("result")),
) as unknown as Schema.Codec<GetDomainResponse>;

export type GetDomainError = DefaultErrors | DomainNotFound | InvalidRoute;

export const getDomain: API.OperationMethod<
  GetDomainRequest,
  GetDomainResponse,
  GetDomainError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: GetDomainRequest,
  output: GetDomainResponse,
  errors: [DomainNotFound, InvalidRoute],
}));

export interface ListDomainsRequest {
  /** Path param: Identifier. */
  accountId: string;
  /** Query param: Worker environment associated with the domain. */
  environment?: string;
  /** Query param: Hostname of the domain. */
  hostname?: string;
  /** Query param: Name of the Worker associated with the domain. */
  service?: string;
  /** Query param: ID of the zone containing the domain hostname. */
  zoneId?: string;
  /** Query param: Name of the zone containing the domain hostname. */
  zoneName?: string;
}

export const ListDomainsRequest = /*@__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    accountId: Schema.String.pipe(T.HttpPath("account_id")),
    environment: Schema.optional(Schema.String).pipe(
      T.HttpQuery("environment"),
    ),
    hostname: Schema.optional(Schema.String).pipe(T.HttpQuery("hostname")),
    service: Schema.optional(Schema.String).pipe(T.HttpQuery("service")),
    zoneId: Schema.optional(Schema.String).pipe(T.HttpQuery("zone_id")),
    zoneName: Schema.optional(Schema.String).pipe(T.HttpQuery("zone_name")),
  }).pipe(
    T.Http({ method: "GET", path: "/accounts/{account_id}/workers/domains" }),
  ),
) as unknown as Schema.Codec<ListDomainsRequest>;

export interface ListDomainsResponse {
  result: {
    id: string;
    certId: string;
    environment: string;
    hostname: string;
    service: string;
    zoneId: string;
    zoneName: string;
  }[];
}

export const ListDomainsResponse = /*@__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    result: Schema.Array(ListDomainsResponseResult),
  }),
) as unknown as Schema.Codec<ListDomainsResponse>;

export type ListDomainsError = DefaultErrors | InvalidRoute;

export const listDomains: API.PaginatedOperationMethod<
  ListDomainsRequest,
  ListDomainsResponse,
  ListDomainsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: ListDomainsRequest,
  output: ListDomainsResponse,
  errors: [InvalidRoute],
  pagination: {
    mode: "single",
    items: "result",
  } as const,
}));

export interface PutDomainRequest {
  /** Path param: Identifier. */
  accountId: string;
  /** Body param: Hostname of the domain. Can be either the zone apex or a subdomain of the zone. Requests to this hostname will be routed to the configured Worker. */
  hostname: string;
  /** Body param: Name of the Worker associated with the domain. Requests to the configured hostname will be routed to this Worker. */
  service: string;
  /** @deprecated Body param: Worker environment associated with the domain. */
  environment?: string;
  /** Body param: ID of the zone containing the domain hostname. */
  zoneId?: string;
  /** Body param: Name of the zone containing the domain hostname. */
  zoneName?: string;
}

export const PutDomainRequest = /*@__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    accountId: Schema.String.pipe(T.HttpPath("account_id")),
    hostname: Schema.String,
    service: Schema.String,
    environment: Schema.optional(Schema.String),
    zoneId: Schema.optional(Schema.String),
    zoneName: Schema.optional(Schema.String),
  }).pipe(
    Schema.encodeKeys({
      hostname: "hostname",
      service: "service",
      environment: "environment",
      zoneId: "zone_id",
      zoneName: "zone_name",
    }),
    T.Http({ method: "PUT", path: "/accounts/{account_id}/workers/domains" }),
  ),
) as unknown as Schema.Codec<PutDomainRequest>;

export interface PutDomainResponse {
  /** Immutable ID of the domain. */
  id: string;
  /** ID of the TLS certificate issued for the domain. */
  certId: string;
  /** @deprecated Worker environment associated with the domain. */
  environment: string;
  /** Hostname of the domain. Can be either the zone apex or a subdomain of the zone. Requests to this hostname will be routed to the configured Worker. */
  hostname: string;
  /** Name of the Worker associated with the domain. Requests to the configured hostname will be routed to this Worker. */
  service: string;
  /** ID of the zone containing the domain hostname. */
  zoneId: string;
  /** Name of the zone containing the domain hostname. */
  zoneName: string;
}

export const PutDomainResponse = /*@__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    id: Schema.String,
    certId: Schema.String,
    environment: Schema.String,
    hostname: Schema.String,
    service: Schema.String,
    zoneId: Schema.String,
    zoneName: Schema.String,
  })
    .pipe(
      Schema.encodeKeys({
        id: "id",
        certId: "cert_id",
        environment: "environment",
        hostname: "hostname",
        service: "service",
        zoneId: "zone_id",
        zoneName: "zone_name",
      }),
    )
    .pipe(T.ResponsePath("result")),
) as unknown as Schema.Codec<PutDomainResponse>;

export type PutDomainError =
  | DefaultErrors
  | WorkerNotFound
  | InvalidRoute
  | HostnameAlreadyInUse;

export const putDomain: API.OperationMethod<
  PutDomainRequest,
  PutDomainResponse,
  PutDomainError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: PutDomainRequest,
  output: PutDomainResponse,
  errors: [WorkerNotFound, InvalidRoute, HostnameAlreadyInUse],
}));

export interface DeleteDomainRequest {
  domainId: string;
  /** Identifier. */
  accountId: string;
}

export const DeleteDomainRequest = /*@__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    domainId: Schema.String.pipe(T.HttpPath("domainId")),
    accountId: Schema.String.pipe(T.HttpPath("account_id")),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/accounts/{account_id}/workers/domains/{domainId}",
    }),
  ),
) as unknown as Schema.Codec<DeleteDomainRequest>;

export interface DeleteDomainResponse {
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
  /** Whether the API call was successful. */
  success: true;
}

export const DeleteDomainResponse = /*@__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    errors: Schema.Array(Error2),
    messages: Schema.Array(Error2),
    success: Schema.Literal(true),
  }),
) as unknown as Schema.Codec<DeleteDomainResponse>;

export type DeleteDomainError = DefaultErrors | DomainNotFound;

export const deleteDomain: API.OperationMethod<
  DeleteDomainRequest,
  DeleteDomainResponse,
  DeleteDomainError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: DeleteDomainRequest,
  output: DeleteDomainResponse,
  errors: [DomainNotFound],
}));

// =============================================================================
// ObservabilityDestination
// =============================================================================

export interface ListObservabilityDestinationsRequest {
  /** Path param: Your Cloudflare account ID. */
  accountId: string;
  /** Query param */
  order?: "asc" | "desc" | (string & {});
  /** Query param */
  orderBy?: "created" | "updated" | (string & {});
  /** Query param */
  page?: number;
  /** Query param */
  perPage?: number;
}

export const ListObservabilityDestinationsRequest =
  /*@__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      accountId: Schema.String.pipe(T.HttpPath("account_id")),
      order: Schema.optional(
        Schema.Union([Schema.Literals(["asc", "desc"]), Schema.String]),
      ).pipe(T.HttpQuery("order")),
      orderBy: Schema.optional(
        Schema.Union([Schema.Literals(["created", "updated"]), Schema.String]),
      ).pipe(T.HttpQuery("orderBy")),
      page: Schema.optional(Schema.Number).pipe(T.HttpQuery("page")),
      perPage: Schema.optional(Schema.Number).pipe(T.HttpQuery("perPage")),
    }).pipe(
      T.Http({
        method: "GET",
        path: "/accounts/{account_id}/workers/observability/destinations",
      }),
    ),
  ) as unknown as Schema.Codec<ListObservabilityDestinationsRequest>;

export interface ListObservabilityDestinationsResponse {
  result: {
    configuration: {
      destinationConf: string;
      headers: Record<string, unknown>;
      jobStatus: {
        errorMessage: string;
        lastComplete: string;
        lastError: string;
      };
      logpushDataset:
        | "opentelemetry-traces"
        | "opentelemetry-logs"
        | "opentelemetry-metrics"
        | (string & {});
      type: "logpush";
      url: string;
    };
    enabled: boolean;
    name: string;
    scripts: string[];
    slug: string;
  }[];
}

export const ListObservabilityDestinationsResponse =
  /*@__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      result: Schema.Array(ListObservabilityDestinationsResponseResult),
    }),
  ) as unknown as Schema.Codec<ListObservabilityDestinationsResponse>;

export type ListObservabilityDestinationsError = DefaultErrors | Forbidden;

export const listObservabilityDestinations: API.PaginatedOperationMethod<
  ListObservabilityDestinationsRequest,
  ListObservabilityDestinationsResponse,
  ListObservabilityDestinationsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: ListObservabilityDestinationsRequest,
  output: ListObservabilityDestinationsResponse,
  errors: [Forbidden],
  pagination: {
    mode: "single",
    items: "result",
  } as const,
}));

export interface CreateObservabilityDestinationRequest {
  /** Path param: Your Cloudflare account ID. */
  accountId: string;
  /** Body param */
  configuration: {
    headers: Record<string, unknown>;
    logpushDataset:
      | "opentelemetry-traces"
      | "opentelemetry-logs"
      | "opentelemetry-metrics"
      | (string & {});
    type: "logpush";
    url: string;
  };
  /** Body param */
  enabled: boolean;
  /** Body param */
  name: string;
  /** Body param */
  skipPreflightCheck?: boolean;
}

export const CreateObservabilityDestinationRequest =
  /*@__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      accountId: Schema.String.pipe(T.HttpPath("account_id")),
      configuration: Configuration2,
      enabled: Schema.Boolean,
      name: Schema.String,
      skipPreflightCheck: Schema.optional(Schema.Boolean),
    }).pipe(
      T.Http({
        method: "POST",
        path: "/accounts/{account_id}/workers/observability/destinations",
      }),
    ),
  ) as unknown as Schema.Codec<CreateObservabilityDestinationRequest>;

export interface CreateObservabilityDestinationResponse {
  configuration: {
    destinationConf: string;
    logpushDataset:
      | "opentelemetry-traces"
      | "opentelemetry-logs"
      | "opentelemetry-metrics"
      | (string & {});
    logpushJob: number;
    type: "logpush";
    url: string;
  };
  enabled: boolean;
  name: string;
  scripts: string[];
  slug: string;
}

export const CreateObservabilityDestinationResponse =
  /*@__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      configuration: Configuration3,
      enabled: Schema.Boolean,
      name: Schema.String,
      scripts: Schema.Array(Schema.String),
      slug: Schema.String,
    }).pipe(T.ResponsePath("result")),
  ) as unknown as Schema.Codec<CreateObservabilityDestinationResponse>;

export type CreateObservabilityDestinationError =
  | DefaultErrors
  | ObservabilityDestinationCreateFailed
  | Forbidden;

export const createObservabilityDestination: API.OperationMethod<
  CreateObservabilityDestinationRequest,
  CreateObservabilityDestinationResponse,
  CreateObservabilityDestinationError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: CreateObservabilityDestinationRequest,
  output: CreateObservabilityDestinationResponse,
  errors: [ObservabilityDestinationCreateFailed, Forbidden],
}));

export interface PatchObservabilityDestinationRequest {
  slug: string;
  /** Path param: Your Cloudflare account ID. */
  accountId: string;
  /** Body param */
  configuration: {
    headers: Record<string, unknown>;
    type: "logpush";
    url: string;
  };
  /** Body param */
  enabled: boolean;
}

export const PatchObservabilityDestinationRequest =
  /*@__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      slug: Schema.String.pipe(T.HttpPath("slug")),
      accountId: Schema.String.pipe(T.HttpPath("account_id")),
      configuration: Configuration4,
      enabled: Schema.Boolean,
    }).pipe(
      T.Http({
        method: "PATCH",
        path: "/accounts/{account_id}/workers/observability/destinations/{slug}",
      }),
    ),
  ) as unknown as Schema.Codec<PatchObservabilityDestinationRequest>;

export interface PatchObservabilityDestinationResponse {
  configuration: {
    destinationConf: string;
    logpushDataset:
      | "opentelemetry-traces"
      | "opentelemetry-logs"
      | "opentelemetry-metrics"
      | (string & {});
    logpushJob: number;
    type: "logpush";
    url: string;
  };
  enabled: boolean;
  name: string;
  scripts: string[];
  slug: string;
}

export const PatchObservabilityDestinationResponse =
  /*@__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      configuration: Configuration3,
      enabled: Schema.Boolean,
      name: Schema.String,
      scripts: Schema.Array(Schema.String),
      slug: Schema.String,
    }).pipe(T.ResponsePath("result")),
  ) as unknown as Schema.Codec<PatchObservabilityDestinationResponse>;

export type PatchObservabilityDestinationError =
  | DefaultErrors
  | ObservabilityDestinationNotFound
  | ObservabilityDestinationPreflightFailed
  | Forbidden;

export const patchObservabilityDestination: API.OperationMethod<
  PatchObservabilityDestinationRequest,
  PatchObservabilityDestinationResponse,
  PatchObservabilityDestinationError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: PatchObservabilityDestinationRequest,
  output: PatchObservabilityDestinationResponse,
  errors: [
    ObservabilityDestinationNotFound,
    ObservabilityDestinationPreflightFailed,
    Forbidden,
  ],
}));

export interface DeleteObservabilityDestinationRequest {
  slug: string;
  /** Your Cloudflare account ID. */
  accountId: string;
}

export const DeleteObservabilityDestinationRequest =
  /*@__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      slug: Schema.String.pipe(T.HttpPath("slug")),
      accountId: Schema.String.pipe(T.HttpPath("account_id")),
    }).pipe(
      T.Http({
        method: "DELETE",
        path: "/accounts/{account_id}/workers/observability/destinations/{slug}",
      }),
    ),
  ) as unknown as Schema.Codec<DeleteObservabilityDestinationRequest>;

export interface DeleteObservabilityDestinationResponse {
  configuration: {
    destinationConf: string;
    logpushDataset:
      | "opentelemetry-traces"
      | "opentelemetry-logs"
      | "opentelemetry-metrics"
      | (string & {});
    logpushJob: number;
    type: "logpush";
    url: string;
  };
  enabled: boolean;
  name: string;
  scripts: string[];
  slug: string;
}

export const DeleteObservabilityDestinationResponse =
  /*@__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      configuration: Configuration3,
      enabled: Schema.Boolean,
      name: Schema.String,
      scripts: Schema.Array(Schema.String),
      slug: Schema.String,
    }).pipe(T.ResponsePath("result")),
  ) as unknown as Schema.Codec<DeleteObservabilityDestinationResponse>;

export type DeleteObservabilityDestinationError =
  | DefaultErrors
  | ObservabilityDestinationNotFound
  | Forbidden;

export const deleteObservabilityDestination: API.OperationMethod<
  DeleteObservabilityDestinationRequest,
  DeleteObservabilityDestinationResponse,
  DeleteObservabilityDestinationError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: DeleteObservabilityDestinationRequest,
  output: DeleteObservabilityDestinationResponse,
  errors: [ObservabilityDestinationNotFound, Forbidden],
}));

// =============================================================================
// ObservabilityQuery
// =============================================================================

export interface ListObservabilityQueriesRequest {
  /** Path param: Your Cloudflare account ID. */
  accountId: string;
  /** Query param */
  order?: "asc" | "desc" | (string & {});
  /** Query param */
  orderBy?: "created" | "updated" | (string & {});
  /** Query param */
  page?: number;
  /** Query param */
  perPage?: number;
}

export const ListObservabilityQueriesRequest = /*@__PURE__*/ Schema.suspend(
  () =>
    Schema.Struct({
      accountId: Schema.String.pipe(T.HttpPath("account_id")),
      order: Schema.optional(
        Schema.Union([Schema.Literals(["asc", "desc"]), Schema.String]),
      ).pipe(T.HttpQuery("order")),
      orderBy: Schema.optional(
        Schema.Union([Schema.Literals(["created", "updated"]), Schema.String]),
      ).pipe(T.HttpQuery("orderBy")),
      page: Schema.optional(Schema.Number).pipe(T.HttpQuery("page")),
      perPage: Schema.optional(Schema.Number).pipe(T.HttpQuery("perPage")),
    }).pipe(
      T.Http({
        method: "GET",
        path: "/accounts/{account_id}/workers/observability/queries",
      }),
    ),
) as unknown as Schema.Codec<ListObservabilityQueriesRequest>;

export interface ListObservabilityQueriesResponse {
  result: {
    id: string;
    adhoc: boolean;
    created: string;
    createdBy: string;
    description: string | null;
    name: string;
    parameters: {
      calculations?:
        | {
            operator:
              | "uniq"
              | "count"
              | "max"
              | "min"
              | "sum"
              | "avg"
              | "median"
              | "p001"
              | "p01"
              | "p05"
              | "p10"
              | "p25"
              | "p75"
              | "p90"
              | "p95"
              | "p99"
              | "p999"
              | "stddev"
              | "variance"
              | "COUNT_DISTINCT"
              | "COUNT"
              | "MAX"
              | "MIN"
              | "SUM"
              | "AVG"
              | "MEDIAN"
              | "P001"
              | "P01"
              | "P05"
              | "P10"
              | "P25"
              | "P75"
              | "P90"
              | "P95"
              | "P99"
              | "P999"
              | "STDDEV"
              | "VARIANCE"
              | (string & {});
            alias?: string | null;
            key?: string | null;
            keyType?: "string" | "number" | "boolean" | (string & {}) | null;
          }[]
        | null;
      datasets?: string[] | null;
      filterCombination?: "and" | "or" | "AND" | "OR" | (string & {}) | null;
      filters?:
        | (
            | {
                filterCombination: "and" | "or" | "AND" | "OR" | (string & {});
                filters: unknown[];
                kind: "group";
              }
            | {
                key: string;
                operation:
                  | "includes"
                  | "not_includes"
                  | "starts_with"
                  | "ends_with"
                  | "regex"
                  | "exists"
                  | "is_null"
                  | "in"
                  | "not_in"
                  | "eq"
                  | "neq"
                  | "gt"
                  | "gte"
                  | "lt"
                  | "lte"
                  | "="
                  | "!="
                  | ">"
                  | ">="
                  | "<"
                  | "<="
                  | "INCLUDES"
                  | "DOES_NOT_INCLUDE"
                  | "MATCH_REGEX"
                  | "EXISTS"
                  | "DOES_NOT_EXIST"
                  | "IN"
                  | "NOT_IN"
                  | "STARTS_WITH"
                  | "ENDS_WITH"
                  | (string & {});
                type: "string" | "number" | "boolean" | (string & {});
                kind?: "filter" | null;
                value?: string | number | boolean | null;
              }
          )[]
        | null;
      groupBys?:
        | {
            type: "string" | "number" | "boolean" | (string & {});
            value: string;
          }[]
        | null;
      havings?:
        | {
            key: string;
            operation:
              | "eq"
              | "neq"
              | "gt"
              | "gte"
              | "lt"
              | "lte"
              | (string & {});
            value: number;
          }[]
        | null;
      limit?: number | null;
      needle?: {
        value: string | number | boolean;
        isRegex?: boolean | null;
        matchCase?: boolean | null;
      } | null;
      orderBy?: {
        value: string;
        order?: "asc" | "desc" | (string & {}) | null;
      } | null;
    };
    updated: string;
    updatedBy: string;
  }[];
}

export const ListObservabilityQueriesResponse = /*@__PURE__*/ Schema.suspend(
  () =>
    Schema.Struct({
      result: Schema.Array(ListObservabilityQueriesResponseResult),
    }),
) as unknown as Schema.Codec<ListObservabilityQueriesResponse>;

export type ListObservabilityQueriesError = DefaultErrors;

export const listObservabilityQueries: API.PaginatedOperationMethod<
  ListObservabilityQueriesRequest,
  ListObservabilityQueriesResponse,
  ListObservabilityQueriesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: ListObservabilityQueriesRequest,
  output: ListObservabilityQueriesResponse,
  errors: [],
  pagination: {
    mode: "single",
    items: "result",
  } as const,
}));

export interface CreateObservabilityQueryRequest {
  /** Path param: Your Cloudflare account ID. */
  accountId: string;
  /** Body param */
  description: string | null;
  /** Body param: Query name */
  name: string;
  /** Body param */
  parameters: {
    calculations?: {
      operator:
        | "uniq"
        | "count"
        | "max"
        | "min"
        | "sum"
        | "avg"
        | "median"
        | "p001"
        | "p01"
        | "p05"
        | "p10"
        | "p25"
        | "p75"
        | "p90"
        | "p95"
        | "p99"
        | "p999"
        | "stddev"
        | "variance"
        | "COUNT_DISTINCT"
        | "COUNT"
        | "MAX"
        | "MIN"
        | "SUM"
        | "AVG"
        | "MEDIAN"
        | "P001"
        | "P01"
        | "P05"
        | "P10"
        | "P25"
        | "P75"
        | "P90"
        | "P95"
        | "P99"
        | "P999"
        | "STDDEV"
        | "VARIANCE"
        | (string & {});
      alias?: string;
      key?: string;
      keyType?: "string" | "number" | "boolean" | (string & {});
    }[];
    datasets?: string[];
    filterCombination?: "and" | "or" | "AND" | "OR" | (string & {});
    filters?: (
      | {
          filterCombination: "and" | "or" | "AND" | "OR" | (string & {});
          filters: unknown[];
          kind: "group";
        }
      | {
          key: string;
          operation:
            | "includes"
            | "not_includes"
            | "starts_with"
            | "ends_with"
            | "regex"
            | "exists"
            | "is_null"
            | "in"
            | "not_in"
            | "eq"
            | "neq"
            | "gt"
            | "gte"
            | "lt"
            | "lte"
            | "="
            | "!="
            | ">"
            | ">="
            | "<"
            | "<="
            | "INCLUDES"
            | "DOES_NOT_INCLUDE"
            | "MATCH_REGEX"
            | "EXISTS"
            | "DOES_NOT_EXIST"
            | "IN"
            | "NOT_IN"
            | "STARTS_WITH"
            | "ENDS_WITH"
            | (string & {});
          type: "string" | "number" | "boolean" | (string & {});
          kind?: "filter";
          value?: string | number | boolean;
        }
    )[];
    groupBys?: {
      type: "string" | "number" | "boolean" | (string & {});
      value: string;
    }[];
    havings?: {
      key: string;
      operation: "eq" | "neq" | "gt" | "gte" | "lt" | "lte" | (string & {});
      value: number;
    }[];
    limit?: number;
    needle?: {
      value: string | number | boolean;
      isRegex?: boolean;
      matchCase?: boolean;
    };
    orderBy?: { value: string; order?: "asc" | "desc" | (string & {}) };
  };
}

export const CreateObservabilityQueryRequest = /*@__PURE__*/ Schema.suspend(
  () =>
    Schema.Struct({
      accountId: Schema.String.pipe(T.HttpPath("account_id")),
      description: Schema.Union([Schema.String, Schema.Null]),
      name: Schema.String,
      parameters: Parameters,
    }).pipe(
      T.Http({
        method: "POST",
        path: "/accounts/{account_id}/workers/observability/queries",
      }),
    ),
) as unknown as Schema.Codec<CreateObservabilityQueryRequest>;

export interface CreateObservabilityQueryResponse {
  id: string;
  /** If the query wasn't explcitly saved */
  adhoc: boolean;
  created: string;
  createdBy: string;
  description: string | null;
  /** Query name */
  name: string;
  parameters: {
    calculations?:
      | {
          operator:
            | "uniq"
            | "count"
            | "max"
            | "min"
            | "sum"
            | "avg"
            | "median"
            | "p001"
            | "p01"
            | "p05"
            | "p10"
            | "p25"
            | "p75"
            | "p90"
            | "p95"
            | "p99"
            | "p999"
            | "stddev"
            | "variance"
            | "COUNT_DISTINCT"
            | "COUNT"
            | "MAX"
            | "MIN"
            | "SUM"
            | "AVG"
            | "MEDIAN"
            | "P001"
            | "P01"
            | "P05"
            | "P10"
            | "P25"
            | "P75"
            | "P90"
            | "P95"
            | "P99"
            | "P999"
            | "STDDEV"
            | "VARIANCE"
            | (string & {});
          alias?: string | null;
          key?: string | null;
          keyType?: "string" | "number" | "boolean" | (string & {}) | null;
        }[]
      | null;
    datasets?: string[] | null;
    filterCombination?: "and" | "or" | "AND" | "OR" | (string & {}) | null;
    filters?:
      | (
          | {
              filterCombination: "and" | "or" | "AND" | "OR" | (string & {});
              filters: unknown[];
              kind: "group";
            }
          | {
              key: string;
              operation:
                | "includes"
                | "not_includes"
                | "starts_with"
                | "ends_with"
                | "regex"
                | "exists"
                | "is_null"
                | "in"
                | "not_in"
                | "eq"
                | "neq"
                | "gt"
                | "gte"
                | "lt"
                | "lte"
                | "="
                | "!="
                | ">"
                | ">="
                | "<"
                | "<="
                | "INCLUDES"
                | "DOES_NOT_INCLUDE"
                | "MATCH_REGEX"
                | "EXISTS"
                | "DOES_NOT_EXIST"
                | "IN"
                | "NOT_IN"
                | "STARTS_WITH"
                | "ENDS_WITH"
                | (string & {});
              type: "string" | "number" | "boolean" | (string & {});
              kind?: "filter" | null;
              value?: string | number | boolean | null;
            }
        )[]
      | null;
    groupBys?:
      | {
          type: "string" | "number" | "boolean" | (string & {});
          value: string;
        }[]
      | null;
    havings?:
      | {
          key: string;
          operation: "eq" | "neq" | "gt" | "gte" | "lt" | "lte" | (string & {});
          value: number;
        }[]
      | null;
    limit?: number | null;
    needle?: {
      value: string | number | boolean;
      isRegex?: boolean | null;
      matchCase?: boolean | null;
    } | null;
    orderBy?: {
      value: string;
      order?: "asc" | "desc" | (string & {}) | null;
    } | null;
  };
  updated: string;
  updatedBy: string;
}

export const CreateObservabilityQueryResponse = /*@__PURE__*/ Schema.suspend(
  () =>
    Schema.Struct({
      id: Schema.String,
      adhoc: Schema.Boolean,
      created: Schema.String,
      createdBy: Schema.String,
      description: Schema.Union([Schema.String, Schema.Null]),
      name: Schema.String,
      parameters: Parameters,
      updated: Schema.String,
      updatedBy: Schema.String,
    }).pipe(T.ResponsePath("result")),
) as unknown as Schema.Codec<CreateObservabilityQueryResponse>;

export type CreateObservabilityQueryError = DefaultErrors;

export const createObservabilityQuery: API.OperationMethod<
  CreateObservabilityQueryRequest,
  CreateObservabilityQueryResponse,
  CreateObservabilityQueryError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: CreateObservabilityQueryRequest,
  output: CreateObservabilityQueryResponse,
  errors: [],
}));

// =============================================================================
// ObservabilitySharedQuery
// =============================================================================

export interface GetObservabilitySharedQueryRequest {
  id: string;
  /** Path param: Your Cloudflare account ID. */
  accountId: string;
  /** Query param: Select the view of the query result to return, defaults to events. */
  view?: "events" | "invocations" | "calculations" | (string & {});
}

export const GetObservabilitySharedQueryRequest = /*@__PURE__*/ Schema.suspend(
  () =>
    Schema.Struct({
      id: Schema.String.pipe(T.HttpPath("id")),
      accountId: Schema.String.pipe(T.HttpPath("account_id")),
      view: Schema.optional(
        Schema.Union([
          Schema.Literals(["events", "invocations", "calculations"]),
          Schema.String,
        ]),
      ).pipe(T.HttpQuery("view")),
    }).pipe(
      T.Http({
        method: "GET",
        path: "/accounts/{account_id}/workers/observability/shared/query/{id}",
      }),
    ),
) as unknown as Schema.Codec<GetObservabilitySharedQueryRequest>;

export interface GetObservabilitySharedQueryResponse {
  /** Represents a single execution of a query against Workers Observability data, including the query definition, execution status, and performance statistics. */
  run: {
    id: string;
    accountId: string;
    dry: boolean;
    granularity: number;
    query: {
      id: string;
      adhoc: boolean;
      created: string;
      createdBy: string;
      description: string | null;
      name: string;
      parameters: {
        calculations?:
          | {
              operator:
                | "uniq"
                | "count"
                | "max"
                | "min"
                | "sum"
                | "avg"
                | "median"
                | "p001"
                | "p01"
                | "p05"
                | "p10"
                | "p25"
                | "p75"
                | "p90"
                | "p95"
                | "p99"
                | "p999"
                | "stddev"
                | "variance"
                | "COUNT_DISTINCT"
                | "COUNT"
                | "MAX"
                | "MIN"
                | "SUM"
                | "AVG"
                | "MEDIAN"
                | "P001"
                | "P01"
                | "P05"
                | "P10"
                | "P25"
                | "P75"
                | "P90"
                | "P95"
                | "P99"
                | "P999"
                | "STDDEV"
                | "VARIANCE"
                | (string & {});
              alias?: string | null;
              key?: string | null;
              keyType?: "string" | "number" | "boolean" | (string & {}) | null;
            }[]
          | null;
        datasets?: string[] | null;
        filterCombination?: "and" | "or" | "AND" | "OR" | (string & {}) | null;
        filters?:
          | (
              | {
                  filterCombination:
                    | "and"
                    | "or"
                    | "AND"
                    | "OR"
                    | (string & {});
                  filters: unknown[];
                  kind: "group";
                }
              | {
                  key: string;
                  operation:
                    | "includes"
                    | "not_includes"
                    | "starts_with"
                    | "ends_with"
                    | "regex"
                    | "exists"
                    | "is_null"
                    | "in"
                    | "not_in"
                    | "eq"
                    | "neq"
                    | "gt"
                    | "gte"
                    | "lt"
                    | "lte"
                    | "="
                    | "!="
                    | ">"
                    | ">="
                    | "<"
                    | "<="
                    | "INCLUDES"
                    | "DOES_NOT_INCLUDE"
                    | "MATCH_REGEX"
                    | "EXISTS"
                    | "DOES_NOT_EXIST"
                    | "IN"
                    | "NOT_IN"
                    | "STARTS_WITH"
                    | "ENDS_WITH"
                    | (string & {});
                  type: "string" | "number" | "boolean" | (string & {});
                  kind?: "filter" | null;
                  value?: string | number | boolean | null;
                }
            )[]
          | null;
        groupBys?:
          | {
              type: "string" | "number" | "boolean" | (string & {});
              value: string;
            }[]
          | null;
        havings?:
          | {
              key: string;
              operation:
                | "eq"
                | "neq"
                | "gt"
                | "gte"
                | "lt"
                | "lte"
                | (string & {});
              value: number;
            }[]
          | null;
        limit?: number | null;
        needle?: {
          value: unknown;
          isRegex?: boolean | null;
          matchCase?: boolean | null;
        } | null;
        orderBy?: {
          value: string;
          order?: "asc" | "desc" | (string & {}) | null;
        } | null;
      };
      updated: string;
      updatedBy: string;
    };
    status: "STARTED" | "COMPLETED" | (string & {});
    timeframe: { from: number; to: number };
    userId: string;
    created?: string | null;
    statistics?: {
      bytesRead: number;
      elapsed: number;
      rowsRead: number;
      abrLevel?: number | null;
    } | null;
    updated?: string | null;
  };
  /** Query performance statistics from the database. Includes execution time, rows scanned, and bytes read. Does not include network latency. */
  statistics: {
    bytesRead: number;
    elapsed: number;
    rowsRead: number;
    abrLevel?: number | null;
  };
  /** Durable Object agent summaries. Present when the query view is 'agents'. Each entry represents an agent with its event counts and status. */
  agents?:
    | {
        agentClass: string;
        eventTypeCounts: Record<string, unknown>;
        firstEventMs: number;
        hasErrors: boolean;
        lastEventMs: number;
        namespace: string;
        service: string;
        totalEvents: number;
      }[]
    | null;
  /** Aggregated calculation results. Present when the query view is 'calculations'. Contains computed metrics (count, avg, p99, etc.) with optional group-by breakdowns and time-series data. */
  calculations?:
    | {
        aggregates: {
          count: number;
          interval: number;
          sampleInterval: number;
          value: number;
          groups?: { key: string; value: string | number | boolean }[] | null;
        }[];
        calculation: string;
        series: {
          data: {
            count: number;
            interval: number;
            sampleInterval: number;
            value: number;
            firstSeen?: string | null;
            groups?: { key: string; value: string | number | boolean }[] | null;
            lastSeen?: string | null;
          }[];
          time: string;
        }[];
        alias?: string | null;
      }[]
    | null;
  /** Comparison calculation results from the previous time period. Present when the compare option is enabled. Same structure as calculations. */
  compare?:
    | {
        aggregates: {
          count: number;
          interval: number;
          sampleInterval: number;
          value: number;
          groups?: { key: string; value: string | number | boolean }[] | null;
        }[];
        calculation: string;
        series: {
          data: {
            count: number;
            interval: number;
            sampleInterval: number;
            value: number;
            firstSeen?: string | null;
            groups?: { key: string; value: string | number | boolean }[] | null;
            lastSeen?: string | null;
          }[];
          time: string;
        }[];
        alias?: string | null;
      }[]
    | null;
  /** Individual event results. Present when the query view is 'events'. Contains the matching log lines and their metadata. */
  events?: {
    count?: number | null;
    events?:
      | {
          $metadata: {
            id: string;
            account?: string | null;
            cloudService?: string | null;
            coldStart?: number | null;
            cost?: number | null;
            duration?: number | null;
            endTime?: number | null;
            error?: string | null;
            errorTemplate?: string | null;
            fingerprint?: string | null;
            level?: string | null;
            message?: string | null;
            messageTemplate?: string | null;
            metricName?: string | null;
            origin?: string | null;
            parentSpanId?: string | null;
            provider?: string | null;
            region?: string | null;
            requestId?: string | null;
            service?: string | null;
            spanId?: string | null;
            spanName?: string | null;
            stackId?: string | null;
            startTime?: number | null;
            statusCode?: number | null;
            traceDuration?: number | null;
            traceId?: string | null;
            transactionName?: string | null;
            trigger?: string | null;
            type?: string | null;
            url?: string | null;
          };
          dataset: string;
          source: string | Record<string, unknown>;
          timestamp: number;
          $containers?: Record<string, unknown> | null;
          $workers?:
            | {
                eventType:
                  | "fetch"
                  | "scheduled"
                  | "alarm"
                  | "cron"
                  | "queue"
                  | "email"
                  | "tail"
                  | "rpc"
                  | "websocket"
                  | "workflow"
                  | "unknown"
                  | (string & {});
                requestId: string;
                scriptName: string;
                durableObjectId?: string | null;
                entrypoint?: string | null;
                event?: Record<string, unknown> | null;
                executionModel?:
                  | "durableObject"
                  | "stateless"
                  | (string & {})
                  | null;
                outcome?: string | null;
                preview?: {
                  id?: string | null;
                  name?: string | null;
                  slug?: string | null;
                } | null;
                scriptVersion?: {
                  id?: string | null;
                  message?: string | null;
                  tag?: string | null;
                } | null;
                spanId?: string | null;
                traceId?: string | null;
                truncated?: boolean | null;
              }
            | {
                cpuTimeMs: number;
                eventType:
                  | "fetch"
                  | "scheduled"
                  | "alarm"
                  | "cron"
                  | "queue"
                  | "email"
                  | "tail"
                  | "rpc"
                  | "websocket"
                  | "workflow"
                  | "unknown"
                  | (string & {});
                outcome: string;
                requestId: string;
                scriptName: string;
                wallTimeMs: number;
                diagnosticsChannelEvents?:
                  | { channel: string; message: string; timestamp: number }[]
                  | null;
                dispatchNamespace?: string | null;
                durableObjectId?: string | null;
                entrypoint?: string | null;
                event?: Record<string, unknown> | null;
                executionModel?:
                  | "durableObject"
                  | "stateless"
                  | (string & {})
                  | null;
                preview?: {
                  id?: string | null;
                  name?: string | null;
                  slug?: string | null;
                } | null;
                scriptVersion?: {
                  id?: string | null;
                  message?: string | null;
                  tag?: string | null;
                } | null;
                spanId?: string | null;
                traceId?: string | null;
                truncated?: boolean | null;
              }
            | null;
        }[]
      | null;
    fields?: { key: string; type: string }[] | null;
    series?:
      | {
          data: {
            aggregates: {
              count: number;
              interval: number;
              firstSeen?: string | null;
              lastSeen?: string | null;
              bin?: unknown | null;
            };
            count: number;
            interval: number;
            sampleInterval: number;
            errors?: number | null;
            groups?: Record<string, unknown> | null;
          }[];
          time: string;
        }[]
      | null;
  } | null;
  /** Events grouped by invocation (request ID). Present when the query view is 'invocations'. Each key is a request ID mapping to all events from that invocation. */
  invocations?: Record<string, unknown> | null;
  /** Trace summaries matching the query. Present when the query view is 'traces'. Each entry represents a distributed trace with its spans, duration, and services involved. */
  traces?:
    | {
        rootSpanName: string;
        rootTransactionName: string;
        service: string[];
        spans: number;
        traceDurationMs: number;
        traceEndMs: number;
        traceId: string;
        traceStartMs: number;
        errors?: string[] | null;
      }[]
    | null;
}

export const GetObservabilitySharedQueryResponse = /*@__PURE__*/ Schema.suspend(
  () =>
    Schema.Struct({
      run: Run,
      statistics: Statistics,
      agents: Schema.optional(Schema.Union([Schema.Array(Agent), Schema.Null])),
      calculations: Schema.optional(
        Schema.Union([Schema.Array(Calculation2), Schema.Null]),
      ),
      compare: Schema.optional(
        Schema.Union([Schema.Array(Calculation2), Schema.Null]),
      ),
      events: Schema.optional(Schema.Union([Events, Schema.Null])),
      invocations: Schema.optional(
        Schema.Union([
          Schema.Record(Schema.String, Schema.Unknown),
          Schema.Null,
        ]),
      ),
      traces: Schema.optional(Schema.Union([Schema.Array(Trace), Schema.Null])),
    }).pipe(T.ResponsePath("result")),
) as unknown as Schema.Codec<GetObservabilitySharedQueryResponse>;

export type GetObservabilitySharedQueryError = DefaultErrors;

export const getObservabilitySharedQuery: API.OperationMethod<
  GetObservabilitySharedQueryRequest,
  GetObservabilitySharedQueryResponse,
  GetObservabilitySharedQueryError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: GetObservabilitySharedQueryRequest,
  output: GetObservabilitySharedQueryResponse,
  errors: [],
}));

export interface CreateObservabilitySharedQueryRequest {
  /** Path param: Your Cloudflare account ID. */
  accountId: string;
  /** Body param: Identifier for the query. When parameters are omitted, this ID is used to load a previously saved query's parameters. When providing parameters inline, pass any identifier (e.g. an ad-hoc  */
  queryId: string;
  /** Body param: Timeframe for the query using Unix timestamps in milliseconds. Narrower timeframes produce faster responses and more specific results. */
  timeframe: { from: number; to: number };
  /** Body param: When true, includes time-series data in the response. */
  chart?: boolean;
  /** Body param: When true, includes a comparison dataset from the previous time period of equal length. */
  compare?: boolean;
  /** Body param: When true, executes the query without persisting the results. Useful for validation or previewing. */
  dry?: boolean;
  /** Body param: Number of time-series buckets. Only used when view is 'calculations'. Omit to let the system auto-detect an appropriate granularity. */
  granularity?: number;
  /** Body param: When true, omits time-series data from the response and returns only aggregated values. Reduces response size when series are not needed. */
  ignoreSeries?: boolean;
  /** Body param: Maximum number of events to return when view is 'events'. Also controls the number of group-by rows when view is 'calculations'. */
  limit?: number;
  /** Body param: Cursor for pagination in event, trace, and invocation views. Pass the $metadata.id of the last returned item to fetch the next page. */
  offset?: string;
  /** Body param: Numeric offset for paginating grouped/pattern results (top-N lists). Use together with limit. Not used by cursor-based pagination. */
  offsetBy?: number;
  /** Body param: Pagination direction: 'next' for forward, 'prev' for backward. */
  offsetDirection?: string;
  /** Body param: Query parameters defining what data to retrieve — filters, calculations, group-bys, and ordering. In practice this should always be provided for ad-hoc queries. Only omit when executing a  */
  parameters?: {
    calculations?: {
      operator:
        | "uniq"
        | "count"
        | "max"
        | "min"
        | "sum"
        | "avg"
        | "median"
        | "p001"
        | "p01"
        | "p05"
        | "p10"
        | "p25"
        | "p75"
        | "p90"
        | "p95"
        | "p99"
        | "p999"
        | "stddev"
        | "variance"
        | "COUNT_DISTINCT"
        | "COUNT"
        | "MAX"
        | "MIN"
        | "SUM"
        | "AVG"
        | "MEDIAN"
        | "P001"
        | "P01"
        | "P05"
        | "P10"
        | "P25"
        | "P75"
        | "P90"
        | "P95"
        | "P99"
        | "P999"
        | "STDDEV"
        | "VARIANCE"
        | (string & {});
      alias?: string;
      key?: string;
      keyType?: "string" | "number" | "boolean" | (string & {});
    }[];
    datasets?: string[];
    filterCombination?: "and" | "or" | "AND" | "OR" | (string & {});
    filters?: (
      | {
          filterCombination: "and" | "or" | "AND" | "OR" | (string & {});
          filters: (
            | {
                filterCombination: "and" | "or" | "AND" | "OR" | (string & {});
                filters: unknown[];
                kind: "group";
              }
            | {
                key: string;
                operation:
                  | "includes"
                  | "not_includes"
                  | "starts_with"
                  | "ends_with"
                  | "regex"
                  | "exists"
                  | "is_null"
                  | "in"
                  | "not_in"
                  | "eq"
                  | "neq"
                  | "gt"
                  | "gte"
                  | "lt"
                  | "lte"
                  | "="
                  | "!="
                  | ">"
                  | ">="
                  | "<"
                  | "<="
                  | "INCLUDES"
                  | "DOES_NOT_INCLUDE"
                  | "MATCH_REGEX"
                  | "EXISTS"
                  | "DOES_NOT_EXIST"
                  | "IN"
                  | "NOT_IN"
                  | "STARTS_WITH"
                  | "ENDS_WITH"
                  | (string & {});
                type: "string" | "number" | "boolean" | (string & {});
                kind?: "filter";
                value?: string | number | boolean;
              }
          )[];
          kind: "group";
        }
      | {
          key: string;
          operation:
            | "includes"
            | "not_includes"
            | "starts_with"
            | "ends_with"
            | "regex"
            | "exists"
            | "is_null"
            | "in"
            | "not_in"
            | "eq"
            | "neq"
            | "gt"
            | "gte"
            | "lt"
            | "lte"
            | "="
            | "!="
            | ">"
            | ">="
            | "<"
            | "<="
            | "INCLUDES"
            | "DOES_NOT_INCLUDE"
            | "MATCH_REGEX"
            | "EXISTS"
            | "DOES_NOT_EXIST"
            | "IN"
            | "NOT_IN"
            | "STARTS_WITH"
            | "ENDS_WITH"
            | (string & {});
          type: "string" | "number" | "boolean" | (string & {});
          kind?: "filter";
          value?: string | number | boolean;
        }
    )[];
    groupBys?: {
      type: "string" | "number" | "boolean" | (string & {});
      value: string;
    }[];
    havings?: {
      key: string;
      operation: "eq" | "neq" | "gt" | "gte" | "lt" | "lte" | (string & {});
      value: number;
    }[];
    limit?: number;
    needle?: {
      value: string | number | boolean;
      isRegex?: boolean;
      matchCase?: boolean;
    };
    orderBy?: { value: string; order?: "asc" | "desc" | (string & {}) };
  };
  /** Body param: Controls the shape of the response. 'events': individual log lines matching the query. 'calculations': aggregated metrics (count, avg, p99, etc.) with optional group-by breakdowns and time */
  view?:
    | "traces"
    | "events"
    | "calculations"
    | "invocations"
    | "requests"
    | "agents"
    | (string & {});
}

export const CreateObservabilitySharedQueryRequest =
  /*@__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      accountId: Schema.String.pipe(T.HttpPath("account_id")),
      queryId: Schema.String,
      timeframe: Timeframe,
      chart: Schema.optional(Schema.Boolean),
      compare: Schema.optional(Schema.Boolean),
      dry: Schema.optional(Schema.Boolean),
      granularity: Schema.optional(Schema.Number),
      ignoreSeries: Schema.optional(Schema.Boolean),
      limit: Schema.optional(Schema.Number),
      offset: Schema.optional(Schema.String),
      offsetBy: Schema.optional(Schema.Number),
      offsetDirection: Schema.optional(Schema.String),
      parameters: Schema.optional(Parameters3),
      view: Schema.optional(
        Schema.Union([
          Schema.Literals([
            "traces",
            "events",
            "calculations",
            "invocations",
            "requests",
            "agents",
          ]),
          Schema.String,
        ]),
      ),
    }).pipe(
      T.Http({
        method: "POST",
        path: "/accounts/{account_id}/workers/observability/shared/query",
      }),
    ),
  ) as unknown as Schema.Codec<CreateObservabilitySharedQueryRequest>;

export interface CreateObservabilitySharedQueryResponse {
  /** Specify the ID of the shared query. */
  id: string;
}

export const CreateObservabilitySharedQueryResponse =
  /*@__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      id: Schema.String,
    }).pipe(T.ResponsePath("result")),
  ) as unknown as Schema.Codec<CreateObservabilitySharedQueryResponse>;

export type CreateObservabilitySharedQueryError = DefaultErrors;

export const createObservabilitySharedQuery: API.OperationMethod<
  CreateObservabilitySharedQueryRequest,
  CreateObservabilitySharedQueryResponse,
  CreateObservabilitySharedQueryError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: CreateObservabilitySharedQueryRequest,
  output: CreateObservabilitySharedQueryResponse,
  errors: [],
}));

// =============================================================================
// ObservabilityTelemetry
// =============================================================================

export interface KeysObservabilityTelemetryRequest {
  /** Path param: Your Cloudflare account ID. */
  accountId: string;
  /** Body param: Leave this empty to use the default datasets */
  datasets?: string[];
  /** Body param: Apply filters to narrow key discovery. Supports nested groups via kind: 'group'. Maximum nesting depth is 4. */
  filters?: (
    | {
        filterCombination: "and" | "or" | "AND" | "OR" | (string & {});
        filters: (
          | {
              filterCombination: "and" | "or" | "AND" | "OR" | (string & {});
              filters: unknown[];
              kind: "group";
            }
          | {
              key: string;
              operation:
                | "includes"
                | "not_includes"
                | "starts_with"
                | "ends_with"
                | "regex"
                | "exists"
                | "is_null"
                | "in"
                | "not_in"
                | "eq"
                | "neq"
                | "gt"
                | "gte"
                | "lt"
                | "lte"
                | "="
                | "!="
                | ">"
                | ">="
                | "<"
                | "<="
                | "INCLUDES"
                | "DOES_NOT_INCLUDE"
                | "MATCH_REGEX"
                | "EXISTS"
                | "DOES_NOT_EXIST"
                | "IN"
                | "NOT_IN"
                | "STARTS_WITH"
                | "ENDS_WITH"
                | (string & {});
              type: "string" | "number" | "boolean" | (string & {});
              kind?: "filter";
              value?: string | number | boolean;
            }
        )[];
        kind: "group";
      }
    | {
        key: string;
        operation:
          | "includes"
          | "not_includes"
          | "starts_with"
          | "ends_with"
          | "regex"
          | "exists"
          | "is_null"
          | "in"
          | "not_in"
          | "eq"
          | "neq"
          | "gt"
          | "gte"
          | "lt"
          | "lte"
          | "="
          | "!="
          | ">"
          | ">="
          | "<"
          | "<="
          | "INCLUDES"
          | "DOES_NOT_INCLUDE"
          | "MATCH_REGEX"
          | "EXISTS"
          | "DOES_NOT_EXIST"
          | "IN"
          | "NOT_IN"
          | "STARTS_WITH"
          | "ENDS_WITH"
          | (string & {});
        type: "string" | "number" | "boolean" | (string & {});
        kind?: "filter";
        value?: string | number | boolean;
      }
  )[];
  /** Body param */
  from?: number;
  /** Body param: If the user suggests a key, use this to narrow down the list of keys returned. Make sure matchCase is false to avoid case sensitivity issues. */
  keyNeedle?: {
    value: string | number | boolean;
    isRegex?: boolean;
    matchCase?: boolean;
  };
  /** Body param: Advanced usage: set limit=1000+ to retrieve comprehensive key options without needing additional filtering. */
  limit?: number;
  /** Body param: Search for a specific substring in any of the events */
  needle?: {
    value: string | number | boolean;
    isRegex?: boolean;
    matchCase?: boolean;
  };
  /** Body param */
  to?: number;
}

export const KeysObservabilityTelemetryRequest = /*@__PURE__*/ Schema.suspend(
  () =>
    Schema.Struct({
      accountId: Schema.String.pipe(T.HttpPath("account_id")),
      datasets: Schema.optional(Schema.Array(Schema.String)),
      filters: Schema.optional(
        Schema.Array(
          Schema.Union([
            CreateObservabilitySharedQueryRequestParametersFilter,
            WorkersObservabilityFilterLeaf,
          ]),
        ),
      ),
      from: Schema.optional(Schema.Number),
      keyNeedle: Schema.optional(Needle),
      limit: Schema.optional(Schema.Number),
      needle: Schema.optional(Needle),
      to: Schema.optional(Schema.Number),
    }).pipe(
      T.Http({
        method: "POST",
        path: "/accounts/{account_id}/workers/observability/telemetry/keys",
      }),
    ),
) as unknown as Schema.Codec<KeysObservabilityTelemetryRequest>;

export interface KeysObservabilityTelemetryResponse {
  result: {
    key: string;
    lastSeenAt: number;
    type: "string" | "boolean" | "number" | (string & {});
  }[];
}

export const KeysObservabilityTelemetryResponse = /*@__PURE__*/ Schema.suspend(
  () =>
    Schema.Struct({
      result: Schema.Array(KeysObservabilityTelemetryResponseResult),
    }),
) as unknown as Schema.Codec<KeysObservabilityTelemetryResponse>;

export type KeysObservabilityTelemetryError = DefaultErrors | InvalidRoute;

export const keysObservabilityTelemetry: API.PaginatedOperationMethod<
  KeysObservabilityTelemetryRequest,
  KeysObservabilityTelemetryResponse,
  KeysObservabilityTelemetryError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: KeysObservabilityTelemetryRequest,
  output: KeysObservabilityTelemetryResponse,
  errors: [InvalidRoute],
  pagination: {
    mode: "single",
    items: "result",
  } as const,
}));

export interface QueryObservabilityTelemetryRequest {
  /** Path param: Your Cloudflare account ID. */
  accountId: string;
  /** Body param: Identifier for the query. When parameters are omitted, this ID is used to load a previously saved query's parameters. When providing parameters inline, pass any identifier (e.g. an ad-hoc  */
  queryId: string;
  /** Body param: Timeframe for the query using Unix timestamps in milliseconds. Narrower timeframes produce faster responses and more specific results. */
  timeframe: { from: number; to: number };
  /** Body param: When true, includes time-series data in the response. */
  chart?: boolean;
  /** Body param: When true, includes a comparison dataset from the previous time period of equal length. */
  compare?: boolean;
  /** Body param: When true, executes the query without persisting the results. Useful for validation or previewing. */
  dry?: boolean;
  /** Body param: Number of time-series buckets. Only used when view is 'calculations'. Omit to let the system auto-detect an appropriate granularity. */
  granularity?: number;
  /** Body param: When true, omits time-series data from the response and returns only aggregated values. Reduces response size when series are not needed. */
  ignoreSeries?: boolean;
  /** Body param: Maximum number of events to return when view is 'events'. Also controls the number of group-by rows when view is 'calculations'. */
  limit?: number;
  /** Body param: Cursor for pagination in event, trace, and invocation views. Pass the $metadata.id of the last returned item to fetch the next page. */
  offset?: string;
  /** Body param: Numeric offset for paginating grouped/pattern results (top-N lists). Use together with limit. Not used by cursor-based pagination. */
  offsetBy?: number;
  /** Body param: Pagination direction: 'next' for forward, 'prev' for backward. */
  offsetDirection?: string;
  /** Body param: Query parameters defining what data to retrieve — filters, calculations, group-bys, and ordering. In practice this should always be provided for ad-hoc queries. Only omit when executing a  */
  parameters?: {
    calculations?: {
      operator:
        | "uniq"
        | "count"
        | "max"
        | "min"
        | "sum"
        | "avg"
        | "median"
        | "p001"
        | "p01"
        | "p05"
        | "p10"
        | "p25"
        | "p75"
        | "p90"
        | "p95"
        | "p99"
        | "p999"
        | "stddev"
        | "variance"
        | "COUNT_DISTINCT"
        | "COUNT"
        | "MAX"
        | "MIN"
        | "SUM"
        | "AVG"
        | "MEDIAN"
        | "P001"
        | "P01"
        | "P05"
        | "P10"
        | "P25"
        | "P75"
        | "P90"
        | "P95"
        | "P99"
        | "P999"
        | "STDDEV"
        | "VARIANCE"
        | (string & {});
      alias?: string;
      key?: string;
      keyType?: "string" | "number" | "boolean" | (string & {});
    }[];
    datasets?: string[];
    filterCombination?: "and" | "or" | "AND" | "OR" | (string & {});
    filters?: (
      | {
          filterCombination: "and" | "or" | "AND" | "OR" | (string & {});
          filters: (
            | {
                filterCombination: "and" | "or" | "AND" | "OR" | (string & {});
                filters: unknown[];
                kind: "group";
              }
            | {
                key: string;
                operation:
                  | "includes"
                  | "not_includes"
                  | "starts_with"
                  | "ends_with"
                  | "regex"
                  | "exists"
                  | "is_null"
                  | "in"
                  | "not_in"
                  | "eq"
                  | "neq"
                  | "gt"
                  | "gte"
                  | "lt"
                  | "lte"
                  | "="
                  | "!="
                  | ">"
                  | ">="
                  | "<"
                  | "<="
                  | "INCLUDES"
                  | "DOES_NOT_INCLUDE"
                  | "MATCH_REGEX"
                  | "EXISTS"
                  | "DOES_NOT_EXIST"
                  | "IN"
                  | "NOT_IN"
                  | "STARTS_WITH"
                  | "ENDS_WITH"
                  | (string & {});
                type: "string" | "number" | "boolean" | (string & {});
                kind?: "filter";
                value?: string | number | boolean;
              }
          )[];
          kind: "group";
        }
      | {
          key: string;
          operation:
            | "includes"
            | "not_includes"
            | "starts_with"
            | "ends_with"
            | "regex"
            | "exists"
            | "is_null"
            | "in"
            | "not_in"
            | "eq"
            | "neq"
            | "gt"
            | "gte"
            | "lt"
            | "lte"
            | "="
            | "!="
            | ">"
            | ">="
            | "<"
            | "<="
            | "INCLUDES"
            | "DOES_NOT_INCLUDE"
            | "MATCH_REGEX"
            | "EXISTS"
            | "DOES_NOT_EXIST"
            | "IN"
            | "NOT_IN"
            | "STARTS_WITH"
            | "ENDS_WITH"
            | (string & {});
          type: "string" | "number" | "boolean" | (string & {});
          kind?: "filter";
          value?: string | number | boolean;
        }
    )[];
    groupBys?: {
      type: "string" | "number" | "boolean" | (string & {});
      value: string;
    }[];
    havings?: {
      key: string;
      operation: "eq" | "neq" | "gt" | "gte" | "lt" | "lte" | (string & {});
      value: number;
    }[];
    limit?: number;
    needle?: {
      value: string | number | boolean;
      isRegex?: boolean;
      matchCase?: boolean;
    };
    orderBy?: { value: string; order?: "asc" | "desc" | (string & {}) };
  };
  /** Body param: Controls the shape of the response. 'events': individual log lines matching the query. 'calculations': aggregated metrics (count, avg, p99, etc.) with optional group-by breakdowns and time */
  view?:
    | "traces"
    | "events"
    | "calculations"
    | "invocations"
    | "requests"
    | "agents"
    | (string & {});
}

export const QueryObservabilityTelemetryRequest = /*@__PURE__*/ Schema.suspend(
  () =>
    Schema.Struct({
      accountId: Schema.String.pipe(T.HttpPath("account_id")),
      queryId: Schema.String,
      timeframe: Timeframe,
      chart: Schema.optional(Schema.Boolean),
      compare: Schema.optional(Schema.Boolean),
      dry: Schema.optional(Schema.Boolean),
      granularity: Schema.optional(Schema.Number),
      ignoreSeries: Schema.optional(Schema.Boolean),
      limit: Schema.optional(Schema.Number),
      offset: Schema.optional(Schema.String),
      offsetBy: Schema.optional(Schema.Number),
      offsetDirection: Schema.optional(Schema.String),
      parameters: Schema.optional(Parameters3),
      view: Schema.optional(
        Schema.Union([
          Schema.Literals([
            "traces",
            "events",
            "calculations",
            "invocations",
            "requests",
            "agents",
          ]),
          Schema.String,
        ]),
      ),
    }).pipe(
      T.Http({
        method: "POST",
        path: "/accounts/{account_id}/workers/observability/telemetry/query",
      }),
    ),
) as unknown as Schema.Codec<QueryObservabilityTelemetryRequest>;

export interface QueryObservabilityTelemetryResponse {
  /** Represents a single execution of a query against Workers Observability data, including the query definition, execution status, and performance statistics. */
  run: {
    id: string;
    accountId: string;
    dry: boolean;
    granularity: number;
    query: {
      id: string;
      adhoc?: boolean | null;
      created?: string | null;
      createdBy?: string | null;
      description?: string | null;
      name?: string | null;
      parameters?: {
        calculations?:
          | {
              operator:
                | "uniq"
                | "count"
                | "max"
                | "min"
                | "sum"
                | "avg"
                | "median"
                | "p001"
                | "p01"
                | "p05"
                | "p10"
                | "p25"
                | "p75"
                | "p90"
                | "p95"
                | "p99"
                | "p999"
                | "stddev"
                | "variance"
                | "COUNT_DISTINCT"
                | "COUNT"
                | "MAX"
                | "MIN"
                | "SUM"
                | "AVG"
                | "MEDIAN"
                | "P001"
                | "P01"
                | "P05"
                | "P10"
                | "P25"
                | "P75"
                | "P90"
                | "P95"
                | "P99"
                | "P999"
                | "STDDEV"
                | "VARIANCE"
                | (string & {});
              alias?: string | null;
              key?: string | null;
              keyType?: "string" | "number" | "boolean" | (string & {}) | null;
            }[]
          | null;
        datasets?: string[] | null;
        filterCombination?: "and" | "or" | "AND" | "OR" | (string & {}) | null;
        filters?:
          | (
              | {
                  filterCombination:
                    | "and"
                    | "or"
                    | "AND"
                    | "OR"
                    | (string & {});
                  filters: unknown[];
                  kind: "group";
                }
              | {
                  key: string;
                  operation:
                    | "includes"
                    | "not_includes"
                    | "starts_with"
                    | "ends_with"
                    | "regex"
                    | "exists"
                    | "is_null"
                    | "in"
                    | "not_in"
                    | "eq"
                    | "neq"
                    | "gt"
                    | "gte"
                    | "lt"
                    | "lte"
                    | "="
                    | "!="
                    | ">"
                    | ">="
                    | "<"
                    | "<="
                    | "INCLUDES"
                    | "DOES_NOT_INCLUDE"
                    | "MATCH_REGEX"
                    | "EXISTS"
                    | "DOES_NOT_EXIST"
                    | "IN"
                    | "NOT_IN"
                    | "STARTS_WITH"
                    | "ENDS_WITH"
                    | (string & {});
                  type: "string" | "number" | "boolean" | (string & {});
                  kind?: "filter" | null;
                  value?: string | number | boolean | null;
                }
            )[]
          | null;
        groupBys?:
          | {
              type: "string" | "number" | "boolean" | (string & {});
              value: string;
            }[]
          | null;
        havings?:
          | {
              key: string;
              operation:
                | "eq"
                | "neq"
                | "gt"
                | "gte"
                | "lt"
                | "lte"
                | (string & {});
              value: number;
            }[]
          | null;
        limit?: number | null;
        needle?: {
          value: unknown;
          isRegex?: boolean | null;
          matchCase?: boolean | null;
        } | null;
        orderBy?: {
          value: string;
          order?: "asc" | "desc" | (string & {}) | null;
        } | null;
      } | null;
      updated?: string | null;
      updatedBy?: string | null;
    };
    status: "STARTED" | "COMPLETED" | (string & {});
    timeframe: { from: number; to: number };
    userId: string;
    created?: string | null;
    statistics?: {
      bytesRead: number;
      elapsed: number;
      rowsRead: number;
      abrLevel?: number | null;
    } | null;
    updated?: string | null;
  };
  /** Query performance statistics from the database. Includes execution time, rows scanned, and bytes read. Does not include network latency. */
  statistics: {
    bytesRead: number;
    elapsed: number;
    rowsRead: number;
    abrLevel?: number | null;
  };
  /** Durable Object agent summaries. Present when the query view is 'agents'. Each entry represents an agent with its event counts and status. */
  agents?:
    | {
        agentClass: string;
        eventTypeCounts: Record<string, unknown>;
        firstEventMs: number;
        hasErrors: boolean;
        lastEventMs: number;
        namespace: string;
        service: string;
        totalEvents: number;
      }[]
    | null;
  /** Aggregated calculation results. Present when the query view is 'calculations'. Contains computed metrics (count, avg, p99, etc.) with optional group-by breakdowns and time-series data. */
  calculations?:
    | {
        aggregates: {
          count: number;
          interval: number;
          sampleInterval: number;
          value: number;
          groups?: { key: string; value: string | number | boolean }[] | null;
        }[];
        calculation: string;
        series: {
          data: {
            count: number;
            interval: number;
            sampleInterval: number;
            value: number;
            firstSeen?: string | null;
            groups?: { key: string; value: string | number | boolean }[] | null;
            lastSeen?: string | null;
          }[];
          time: string;
        }[];
        alias?: string | null;
      }[]
    | null;
  /** Comparison calculation results from the previous time period. Present when the compare option is enabled. Same structure as calculations. */
  compare?:
    | {
        aggregates: {
          count: number;
          interval: number;
          sampleInterval: number;
          value: number;
          groups?: { key: string; value: string | number | boolean }[] | null;
        }[];
        calculation: string;
        series: {
          data: {
            count: number;
            interval: number;
            sampleInterval: number;
            value: number;
            firstSeen?: string | null;
            groups?: { key: string; value: string | number | boolean }[] | null;
            lastSeen?: string | null;
          }[];
          time: string;
        }[];
        alias?: string | null;
      }[]
    | null;
  /** Individual event results. Present when the query view is 'events'. Contains the matching log lines and their metadata. */
  events?: {
    count?: number | null;
    events?:
      | {
          $metadata: {
            id: string;
            account?: string | null;
            cloudService?: string | null;
            coldStart?: number | null;
            cost?: number | null;
            duration?: number | null;
            endTime?: number | null;
            error?: string | null;
            errorTemplate?: string | null;
            fingerprint?: string | null;
            level?: string | null;
            message?: string | null;
            messageTemplate?: string | null;
            metricName?: string | null;
            origin?: string | null;
            parentSpanId?: string | null;
            provider?: string | null;
            region?: string | null;
            requestId?: string | null;
            service?: string | null;
            spanId?: string | null;
            spanName?: string | null;
            stackId?: string | null;
            startTime?: number | null;
            statusCode?: number | null;
            traceDuration?: number | null;
            traceId?: string | null;
            transactionName?: string | null;
            trigger?: string | null;
            type?: string | null;
            url?: string | null;
          };
          dataset: string;
          source: unknown;
          timestamp: number;
          $containers?: Record<string, unknown> | null;
          $workers?:
            | {
                eventType:
                  | "fetch"
                  | "scheduled"
                  | "alarm"
                  | "cron"
                  | "queue"
                  | "email"
                  | "tail"
                  | "rpc"
                  | "websocket"
                  | "workflow"
                  | "unknown"
                  | (string & {});
                requestId: string;
                scriptName: string;
                durableObjectId?: string | null;
                entrypoint?: string | null;
                event?: Record<string, unknown> | null;
                executionModel?:
                  | "durableObject"
                  | "stateless"
                  | (string & {})
                  | null;
                outcome?: string | null;
                preview?: {
                  id?: string | null;
                  name?: string | null;
                  slug?: string | null;
                } | null;
                scriptVersion?: {
                  id?: string | null;
                  message?: string | null;
                  tag?: string | null;
                } | null;
                spanId?: string | null;
                traceId?: string | null;
                truncated?: boolean | null;
              }
            | {
                cpuTimeMs: number;
                eventType:
                  | "fetch"
                  | "scheduled"
                  | "alarm"
                  | "cron"
                  | "queue"
                  | "email"
                  | "tail"
                  | "rpc"
                  | "websocket"
                  | "workflow"
                  | "unknown"
                  | (string & {});
                outcome: string;
                requestId: string;
                scriptName: string;
                wallTimeMs: number;
                diagnosticsChannelEvents?:
                  | { channel: string; message: string; timestamp: number }[]
                  | null;
                dispatchNamespace?: string | null;
                durableObjectId?: string | null;
                entrypoint?: string | null;
                event?: Record<string, unknown> | null;
                executionModel?:
                  | "durableObject"
                  | "stateless"
                  | (string & {})
                  | null;
                preview?: {
                  id?: string | null;
                  name?: string | null;
                  slug?: string | null;
                } | null;
                scriptVersion?: {
                  id?: string | null;
                  message?: string | null;
                  tag?: string | null;
                } | null;
                spanId?: string | null;
                traceId?: string | null;
                truncated?: boolean | null;
              }
            | null;
        }[]
      | null;
    fields?: { key: string; type: string }[] | null;
    series?:
      | {
          data: {
            aggregates: {
              count: number;
              interval: number;
              firstSeen?: string | null;
              lastSeen?: string | null;
              bin?: unknown | null;
              countErrors?: number | null;
            };
            count: number;
            interval: number;
            sampleInterval: number;
            errors?: number | null;
            groups?: Record<string, unknown> | null;
          }[];
          time: string;
        }[]
      | null;
    statistics?: unknown | null;
  } | null;
  /** Events grouped by invocation (request ID). Present when the query view is 'invocations'. Each key is a request ID mapping to all events from that invocation. */
  invocations?: unknown | null;
  /** Trace summaries matching the query. Present when the query view is 'traces'. Each entry represents a distributed trace with its spans, duration, and services involved. */
  traces?:
    | {
        rootSpanName: string;
        rootTransactionName: string;
        service: string[];
        spans: number;
        traceDurationMs: number;
        traceEndMs: number;
        traceId: string;
        traceStartMs: number;
        errors?: string[] | null;
      }[]
    | null;
}

export const QueryObservabilityTelemetryResponse = /*@__PURE__*/ Schema.suspend(
  () =>
    Schema.Struct({
      run: Run2,
      statistics: Statistics,
      agents: Schema.optional(Schema.Union([Schema.Array(Agent), Schema.Null])),
      calculations: Schema.optional(
        Schema.Union([Schema.Array(Calculation2), Schema.Null]),
      ),
      compare: Schema.optional(
        Schema.Union([Schema.Array(Calculation2), Schema.Null]),
      ),
      events: Schema.optional(Schema.Union([Events2, Schema.Null])),
      invocations: Schema.optional(Schema.Union([Schema.Unknown, Schema.Null])),
      traces: Schema.optional(Schema.Union([Schema.Array(Trace), Schema.Null])),
    }).pipe(T.ResponsePath("result")),
) as unknown as Schema.Codec<QueryObservabilityTelemetryResponse>;

export type QueryObservabilityTelemetryError = DefaultErrors | InvalidRoute;

export const queryObservabilityTelemetry: API.OperationMethod<
  QueryObservabilityTelemetryRequest,
  QueryObservabilityTelemetryResponse,
  QueryObservabilityTelemetryError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: QueryObservabilityTelemetryRequest,
  output: QueryObservabilityTelemetryResponse,
  errors: [InvalidRoute],
}));

export interface ValuesObservabilityTelemetryRequest {
  /** Path param: Your Cloudflare account ID. */
  accountId: string;
  /** Body param: Leave this empty to use the default datasets */
  datasets: string[];
  /** Body param */
  key: string;
  /** Body param */
  timeframe: { from: number; to: number };
  /** Body param */
  type: "string" | "boolean" | "number" | (string & {});
  /** Body param: Apply filters before listing values. Supports nested groups via kind: 'group'. Maximum nesting depth is 4. */
  filters?: (
    | {
        filterCombination: "and" | "or" | "AND" | "OR" | (string & {});
        filters: (
          | {
              filterCombination: "and" | "or" | "AND" | "OR" | (string & {});
              filters: unknown[];
              kind: "group";
            }
          | {
              key: string;
              operation:
                | "includes"
                | "not_includes"
                | "starts_with"
                | "ends_with"
                | "regex"
                | "exists"
                | "is_null"
                | "in"
                | "not_in"
                | "eq"
                | "neq"
                | "gt"
                | "gte"
                | "lt"
                | "lte"
                | "="
                | "!="
                | ">"
                | ">="
                | "<"
                | "<="
                | "INCLUDES"
                | "DOES_NOT_INCLUDE"
                | "MATCH_REGEX"
                | "EXISTS"
                | "DOES_NOT_EXIST"
                | "IN"
                | "NOT_IN"
                | "STARTS_WITH"
                | "ENDS_WITH"
                | (string & {});
              type: "string" | "number" | "boolean" | (string & {});
              kind?: "filter";
              value?: string | number | boolean;
            }
        )[];
        kind: "group";
      }
    | {
        key: string;
        operation:
          | "includes"
          | "not_includes"
          | "starts_with"
          | "ends_with"
          | "regex"
          | "exists"
          | "is_null"
          | "in"
          | "not_in"
          | "eq"
          | "neq"
          | "gt"
          | "gte"
          | "lt"
          | "lte"
          | "="
          | "!="
          | ">"
          | ">="
          | "<"
          | "<="
          | "INCLUDES"
          | "DOES_NOT_INCLUDE"
          | "MATCH_REGEX"
          | "EXISTS"
          | "DOES_NOT_EXIST"
          | "IN"
          | "NOT_IN"
          | "STARTS_WITH"
          | "ENDS_WITH"
          | (string & {});
        type: "string" | "number" | "boolean" | (string & {});
        kind?: "filter";
        value?: string | number | boolean;
      }
  )[];
  /** Body param */
  limit?: number;
  /** Body param: Full-text search expression to match events containing the specified text or pattern. */
  needle?: {
    value: string | number | boolean;
    isRegex?: boolean;
    matchCase?: boolean;
  };
}

export const ValuesObservabilityTelemetryRequest = /*@__PURE__*/ Schema.suspend(
  () =>
    Schema.Struct({
      accountId: Schema.String.pipe(T.HttpPath("account_id")),
      datasets: Schema.Array(Schema.String),
      key: Schema.String,
      timeframe: Timeframe,
      type: Schema.Union([
        Schema.Literals(["string", "boolean", "number"]),
        Schema.String,
      ]),
      filters: Schema.optional(
        Schema.Array(
          Schema.Union([
            CreateObservabilitySharedQueryRequestParametersFilter,
            WorkersObservabilityFilterLeaf,
          ]),
        ),
      ),
      limit: Schema.optional(Schema.Number),
      needle: Schema.optional(Needle),
    }).pipe(
      T.Http({
        method: "POST",
        path: "/accounts/{account_id}/workers/observability/telemetry/values",
      }),
    ),
) as unknown as Schema.Codec<ValuesObservabilityTelemetryRequest>;

export interface ValuesObservabilityTelemetryResponse {
  result: {
    dataset: string;
    key: string;
    type: "string" | "boolean" | "number" | (string & {});
    value: string | number | boolean;
  }[];
}

export const ValuesObservabilityTelemetryResponse =
  /*@__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      result: Schema.Array(ValuesObservabilityTelemetryResponseResult),
    }),
  ) as unknown as Schema.Codec<ValuesObservabilityTelemetryResponse>;

export type ValuesObservabilityTelemetryError = DefaultErrors | InvalidRoute;

export const valuesObservabilityTelemetry: API.PaginatedOperationMethod<
  ValuesObservabilityTelemetryRequest,
  ValuesObservabilityTelemetryResponse,
  ValuesObservabilityTelemetryError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: ValuesObservabilityTelemetryRequest,
  output: ValuesObservabilityTelemetryResponse,
  errors: [InvalidRoute],
  pagination: {
    mode: "single",
    items: "result",
  } as const,
}));

// =============================================================================
// Route
// =============================================================================

export interface GetRouteRequest {
  routeId: string;
  /** Identifier. */
  zoneId: string;
}

export const GetRouteRequest = /*@__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    routeId: Schema.String.pipe(T.HttpPath("routeId")),
    zoneId: Schema.String.pipe(T.HttpPath("zone_id")),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/zones/{zone_id}/workers/routes/{routeId}",
    }),
  ),
) as unknown as Schema.Codec<GetRouteRequest>;

export interface GetRouteResponse {
  /** Identifier. */
  id: string;
  /** Pattern to match incoming requests against. [Learn more](https://developers.cloudflare.com/workers/configuration/routing/routes/#matching-behavior). */
  pattern: string;
  /** Name of the script to run if the route matches. */
  script?: string | null;
}

export const GetRouteResponse = /*@__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    id: Schema.String,
    pattern: Schema.String,
    script: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
  }).pipe(T.ResponsePath("result")),
) as unknown as Schema.Codec<GetRouteResponse>;

export type GetRouteError =
  | DefaultErrors
  | WorkerNotFound
  | RouteNotFound
  | InvalidRoute
  | Forbidden;

export const getRoute: API.OperationMethod<
  GetRouteRequest,
  GetRouteResponse,
  GetRouteError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: GetRouteRequest,
  output: GetRouteResponse,
  errors: [WorkerNotFound, RouteNotFound, InvalidRoute, Forbidden],
}));

export interface ListRoutesRequest {
  /** Identifier. */
  zoneId: string;
}

export const ListRoutesRequest = /*@__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    zoneId: Schema.String.pipe(T.HttpPath("zone_id")),
  }).pipe(T.Http({ method: "GET", path: "/zones/{zone_id}/workers/routes" })),
) as unknown as Schema.Codec<ListRoutesRequest>;

export interface ListRoutesResponse {
  result: { id: string; pattern: string; script?: string | null }[];
}

export const ListRoutesResponse = /*@__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    result: Schema.Array(ListRoutesResponseResult),
  }),
) as unknown as Schema.Codec<ListRoutesResponse>;

export type ListRoutesError = DefaultErrors | InvalidRoute | Forbidden;

export const listRoutes: API.PaginatedOperationMethod<
  ListRoutesRequest,
  ListRoutesResponse,
  ListRoutesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: ListRoutesRequest,
  output: ListRoutesResponse,
  errors: [InvalidRoute, Forbidden],
  pagination: {
    mode: "single",
    items: "result",
  } as const,
}));

export interface CreateRouteRequest {
  /** Path param: Identifier. */
  zoneId: string;
  /** Body param: Pattern to match incoming requests against. [Learn more](https://developers.cloudflare.com/workers/configuration/routing/routes/#matching-behavior). */
  pattern: string;
  /** Body param: Name of the script to run if the route matches. */
  script?: string;
}

export const CreateRouteRequest = /*@__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    zoneId: Schema.String.pipe(T.HttpPath("zone_id")),
    pattern: Schema.String,
    script: Schema.optional(Schema.String),
  }).pipe(T.Http({ method: "POST", path: "/zones/{zone_id}/workers/routes" })),
) as unknown as Schema.Codec<CreateRouteRequest>;

export interface CreateRouteResponse {
  /** Identifier. */
  id: string;
  /** Pattern to match incoming requests against. [Learn more](https://developers.cloudflare.com/workers/configuration/routing/routes/#matching-behavior). */
  pattern: string;
  /** Name of the script to run if the route matches. */
  script?: string | null;
}

export const CreateRouteResponse = /*@__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    id: Schema.String,
    pattern: Schema.String,
    script: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
  }).pipe(T.ResponsePath("result")),
) as unknown as Schema.Codec<CreateRouteResponse>;

export type CreateRouteError =
  | DefaultErrors
  | RouteScriptNotFound
  | InvalidRoutePattern
  | InvalidRoute
  | Forbidden;

export const createRoute: API.OperationMethod<
  CreateRouteRequest,
  CreateRouteResponse,
  CreateRouteError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: CreateRouteRequest,
  output: CreateRouteResponse,
  errors: [RouteScriptNotFound, InvalidRoutePattern, InvalidRoute, Forbidden],
}));

export interface UpdateRouteRequest {
  routeId: string;
  /** Path param: Identifier. */
  zoneId: string;
  /** Body param: Pattern to match incoming requests against. [Learn more](https://developers.cloudflare.com/workers/configuration/routing/routes/#matching-behavior). */
  pattern: string;
  /** Body param: Name of the script to run if the route matches. */
  script?: string;
}

export const UpdateRouteRequest = /*@__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    routeId: Schema.String.pipe(T.HttpPath("routeId")),
    zoneId: Schema.String.pipe(T.HttpPath("zone_id")),
    pattern: Schema.String,
    script: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/zones/{zone_id}/workers/routes/{routeId}",
    }),
  ),
) as unknown as Schema.Codec<UpdateRouteRequest>;

export interface UpdateRouteResponse {
  /** Identifier. */
  id: string;
  /** Pattern to match incoming requests against. [Learn more](https://developers.cloudflare.com/workers/configuration/routing/routes/#matching-behavior). */
  pattern: string;
  /** Name of the script to run if the route matches. */
  script?: string | null;
}

export const UpdateRouteResponse = /*@__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    id: Schema.String,
    pattern: Schema.String,
    script: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
  }).pipe(T.ResponsePath("result")),
) as unknown as Schema.Codec<UpdateRouteResponse>;

export type UpdateRouteError =
  | DefaultErrors
  | RouteNotFound
  | InvalidRoutePattern;

export const updateRoute: API.OperationMethod<
  UpdateRouteRequest,
  UpdateRouteResponse,
  UpdateRouteError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: UpdateRouteRequest,
  output: UpdateRouteResponse,
  errors: [RouteNotFound, InvalidRoutePattern],
}));

export interface DeleteRouteRequest {
  routeId: string;
  /** Identifier. */
  zoneId: string;
}

export const DeleteRouteRequest = /*@__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    routeId: Schema.String.pipe(T.HttpPath("routeId")),
    zoneId: Schema.String.pipe(T.HttpPath("zone_id")),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/zones/{zone_id}/workers/routes/{routeId}",
    }),
  ),
) as unknown as Schema.Codec<DeleteRouteRequest>;

export interface DeleteRouteResponse {
  /** Identifier. */
  id?: string | null;
}

export const DeleteRouteResponse = /*@__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    id: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
  }).pipe(T.ResponsePath("result")),
) as unknown as Schema.Codec<DeleteRouteResponse>;

export type DeleteRouteError = DefaultErrors | RouteNotFound;

export const deleteRoute: API.OperationMethod<
  DeleteRouteRequest,
  DeleteRouteResponse,
  DeleteRouteError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: DeleteRouteRequest,
  output: DeleteRouteResponse,
  errors: [RouteNotFound],
}));

// =============================================================================
// Script
// =============================================================================

export interface GetScriptRequest {
  scriptName: string;
  /** Identifier. */
  accountId: string;
}

export const GetScriptRequest = /*@__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    scriptName: Schema.String.pipe(T.HttpPath("scriptName")),
    accountId: Schema.String.pipe(T.HttpPath("account_id")),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/accounts/{account_id}/workers/scripts/{scriptName}",
    }),
  ),
) as unknown as Schema.Codec<GetScriptRequest>;

export type GetScriptResponse = string;

export const GetScriptResponse = /*@__PURE__*/ Schema.suspend(
  () => Schema.String,
) as unknown as Schema.Codec<GetScriptResponse>;

export type GetScriptError = DefaultErrors | WorkerNotFound | InvalidRoute;

export const getScript: API.OperationMethod<
  GetScriptRequest,
  GetScriptResponse,
  GetScriptError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: GetScriptRequest,
  output: GetScriptResponse,
  errors: [WorkerNotFound, InvalidRoute],
}));

export interface ListScriptsRequest {
  /** Path param: Identifier. */
  accountId: string;
  /** Query param: Filter scripts by tags. Format: comma-separated list of tag:allowed pairs where allowed is 'yes' or 'no'. */
  tags?: string;
}

export const ListScriptsRequest = /*@__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    accountId: Schema.String.pipe(T.HttpPath("account_id")),
    tags: Schema.optional(Schema.String).pipe(T.HttpQuery("tags")),
  }).pipe(
    T.Http({ method: "GET", path: "/accounts/{account_id}/workers/scripts" }),
  ),
) as unknown as Schema.Codec<ListScriptsRequest>;

export interface ListScriptsResponse {
  result: {
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
    routes?: { id: string; pattern: string; script?: string | null }[] | null;
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
  }[];
}

export const ListScriptsResponse = /*@__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    result: Schema.Array(ListScriptsResponseResult),
  }),
) as unknown as Schema.Codec<ListScriptsResponse>;

export type ListScriptsError = DefaultErrors | InvalidRoute;

export const listScripts: API.PaginatedOperationMethod<
  ListScriptsRequest,
  ListScriptsResponse,
  ListScriptsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: ListScriptsRequest,
  output: ListScriptsResponse,
  errors: [InvalidRoute],
  pagination: {
    mode: "single",
    items: "result",
  } as const,
}));

export interface PutScriptRequest {
  scriptName: string;
  /** Path param: Identifier. */
  accountId: string;
  /** Query param: When set to "strict", the upload will fail if any `inherit` type bindings cannot be resolved against the previous version of the Worker. Without this, unresolvable inherit bindings are si */
  bindingsInherit?: "strict";
  /** Body param: JSON-encoded metadata about the uploaded parts and Worker configuration. */
  metadata: {
    annotations?: { workersMessage?: string; workersTag?: string };
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
          className: string;
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
          className: string;
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
      | { name: string; type: "worker_loader" }
      | { name: string; type: "artifacts"; namespace: string }
      | {
          name: string;
          type: "ratelimit";
          namespaceId: string;
          simple: { limit: number; period: number };
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
    containers?: { className: string }[];
    cache?: { enabled?: boolean; crossVersionCache?: boolean };
  };
  /** Body param: An array of modules (often JavaScript files) comprising a Worker script. At least one module must be present and referenced in the metadata as `main_module` or `body_part` by filename.<br/ */
  files?: (File | Blob)[];
}

export const PutScriptRequest = /*@__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    scriptName: Schema.String.pipe(T.HttpPath("scriptName")),
    accountId: Schema.String.pipe(T.HttpPath("account_id")),
    bindingsInherit: Schema.optional(Schema.Literal("strict")).pipe(
      T.HttpQuery("bindings_inherit"),
    ),
    metadata: Metadata2,
    files: Schema.optional(
      Schema.Array(UploadableSchema.pipe(T.HttpFormDataFile())),
    ),
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/accounts/{account_id}/workers/scripts/{scriptName}",
      contentType: "multipart",
    }),
  ),
) as unknown as Schema.Codec<PutScriptRequest>;

export interface PutScriptResponse {
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

export const PutScriptResponse = /*@__PURE__*/ Schema.suspend(() =>
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
    observability: Schema.optional(Schema.Union([Observability2, Schema.Null])),
    placement: Schema.optional(
      Schema.Union([
        Schema.Union([
          ListScriptsResponseResultPlacement4,
          ListScriptsResponseResultPlacement5,
          ListScriptsResponseResultPlacement6,
          ListScriptsResponseResultPlacement7,
          ListScriptsResponseResultPlacement,
          ListScriptsResponseResultPlacement1,
          ListScriptsResponseResultPlacement2,
          ListScriptsResponseResultPlacement3,
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
) as unknown as Schema.Codec<PutScriptResponse>;

export type PutScriptError =
  | DefaultErrors
  | InvalidRoute
  | InvalidWorkerScript
  | InternalServerError
  | DurableObjectMustBeSqlite
  | DuplicateMigrationTarget
  | ScriptStartupError
  | ScriptModuleNotFound
  | SecretsStoreBindingNotFound
  | KVNamespaceNotFound
  | R2BucketNotFound
  | D1DatabaseNotFound
  | QueueNotFound
  | ServiceBindingNotFound
  | DurableObjectClassNotFound
  | HyperdriveConfigNotFound
  | VectorizeIndexNotFound
  | DispatchNamespaceNotFound
  | MtlsCertificateNotFound;

export const putScript: API.OperationMethod<
  PutScriptRequest,
  PutScriptResponse,
  PutScriptError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: PutScriptRequest,
  output: PutScriptResponse,
  errors: [
    InvalidRoute,
    InvalidWorkerScript,
    InternalServerError,
    DurableObjectMustBeSqlite,
    DuplicateMigrationTarget,
    ScriptStartupError,
    ScriptModuleNotFound,
    SecretsStoreBindingNotFound,
    KVNamespaceNotFound,
    R2BucketNotFound,
    D1DatabaseNotFound,
    QueueNotFound,
    ServiceBindingNotFound,
    DurableObjectClassNotFound,
    HyperdriveConfigNotFound,
    VectorizeIndexNotFound,
    DispatchNamespaceNotFound,
    MtlsCertificateNotFound,
  ],
}));

export interface DeleteScriptRequest {
  scriptName: string;
  /** Path param: Identifier. */
  accountId: string;
  /** Query param: If set to true, delete will not be stopped by associated service binding, durable object, or other binding. Any of these associated bindings/durable objects will be deleted along with the */
  force?: boolean;
}

export const DeleteScriptRequest = /*@__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    scriptName: Schema.String.pipe(T.HttpPath("scriptName")),
    accountId: Schema.String.pipe(T.HttpPath("account_id")),
    force: Schema.optional(Schema.Boolean).pipe(T.HttpQuery("force")),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/accounts/{account_id}/workers/scripts/{scriptName}",
    }),
  ),
) as unknown as Schema.Codec<DeleteScriptRequest>;

export type DeleteScriptResponse = unknown;

export const DeleteScriptResponse = /*@__PURE__*/ Schema.suspend(() =>
  Schema.Unknown.pipe(T.ResponsePath("result")),
) as unknown as Schema.Codec<DeleteScriptResponse>;

export type DeleteScriptError =
  | DefaultErrors
  | WorkerNotFound
  | QueueConsumerConflict
  | ServiceBindingConflict;

export const deleteScript: API.OperationMethod<
  DeleteScriptRequest,
  DeleteScriptResponse,
  DeleteScriptError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: DeleteScriptRequest,
  output: DeleteScriptResponse,
  errors: [WorkerNotFound, QueueConsumerConflict, ServiceBindingConflict],
}));

export interface SearchScriptRequest {
  /** Path param: Identifier. */
  accountId: string;
  /** Query param: Worker ID (also called tag) to search for. Only exact matches are returned. */
  id?: string;
  /** Query param: Worker name to search for. Both exact and partial matches are returned. */
  name?: string;
  /** Query param: Property to sort results by. Results are sorted in ascending order. */
  orderBy?: "created_on" | "modified_on" | "name" | (string & {});
  /** Query param: Current page. */
  page?: number;
  /** Query param: Items per page. */
  perPage?: number;
}

export const SearchScriptRequest = /*@__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    accountId: Schema.String.pipe(T.HttpPath("account_id")),
    id: Schema.optional(Schema.String).pipe(T.HttpQuery("id")),
    name: Schema.optional(Schema.String).pipe(T.HttpQuery("name")),
    orderBy: Schema.optional(
      Schema.Union([
        Schema.Literals(["created_on", "modified_on", "name"]),
        Schema.String,
      ]),
    ).pipe(T.HttpQuery("order_by")),
    page: Schema.optional(Schema.Number).pipe(T.HttpQuery("page")),
    perPage: Schema.optional(Schema.Number).pipe(T.HttpQuery("per_page")),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/accounts/{account_id}/workers/scripts-search",
    }),
  ),
) as unknown as Schema.Codec<SearchScriptRequest>;

export type SearchScriptResponse = {
  id: string;
  createdOn: string;
  modifiedOn: string;
  scriptName: string;
  environmentIsDefault?: boolean | null;
  environmentName?: string | null;
  serviceName?: string | null;
}[];

export const SearchScriptResponse = /*@__PURE__*/ Schema.suspend(() =>
  Schema.Array(ScriptSearchResponseItem).pipe(T.ResponsePath("result")),
) as unknown as Schema.Codec<SearchScriptResponse>;

export type SearchScriptError = DefaultErrors | InvalidRoute;

export const searchScript: API.OperationMethod<
  SearchScriptRequest,
  SearchScriptResponse,
  SearchScriptError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: SearchScriptRequest,
  output: SearchScriptResponse,
  errors: [InvalidRoute],
}));

// =============================================================================
// ScriptAssetUpload
// =============================================================================

export interface CreateScriptAssetUploadRequest {
  scriptName: string;
  /** Path param: Identifier. */
  accountId: string;
  /** Body param: A manifest ([path]: {hash, size}) map of files to upload. As an example, `/blog/hello-world.html` would be a valid path key. */
  manifest: Record<string, unknown>;
}

export const CreateScriptAssetUploadRequest = /*@__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    scriptName: Schema.String.pipe(T.HttpPath("scriptName")),
    accountId: Schema.String.pipe(T.HttpPath("account_id")),
    manifest: Schema.Record(Schema.String, Schema.Unknown),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/accounts/{account_id}/workers/scripts/{scriptName}/assets-upload-session",
    }),
  ),
) as unknown as Schema.Codec<CreateScriptAssetUploadRequest>;

export interface CreateScriptAssetUploadResponse {
  /** The requests to make to upload assets. */
  buckets?: string[][] | null;
  /** A JWT to use as authentication for uploading assets. */
  jwt?: string | null;
}

export const CreateScriptAssetUploadResponse = /*@__PURE__*/ Schema.suspend(
  () =>
    Schema.Struct({
      buckets: Schema.optional(
        Schema.Union([Schema.Array(Schema.Array(Schema.String)), Schema.Null]),
      ),
      jwt: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
    }).pipe(T.ResponsePath("result")),
) as unknown as Schema.Codec<CreateScriptAssetUploadResponse>;

export type CreateScriptAssetUploadError = DefaultErrors;

export const createScriptAssetUpload: API.OperationMethod<
  CreateScriptAssetUploadRequest,
  CreateScriptAssetUploadResponse,
  CreateScriptAssetUploadError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: CreateScriptAssetUploadRequest,
  output: CreateScriptAssetUploadResponse,
  errors: [],
}));

// =============================================================================
// ScriptContent
// =============================================================================

export interface GetScriptContentRequest {
  scriptName: string;
  /** Identifier. */
  accountId: string;
}

export const GetScriptContentRequest = /*@__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    scriptName: Schema.String.pipe(T.HttpPath("scriptName")),
    accountId: Schema.String.pipe(T.HttpPath("account_id")),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/accounts/{account_id}/workers/scripts/{scriptName}/content/v2",
    }),
  ),
) as unknown as Schema.Codec<GetScriptContentRequest>;

export type GetScriptContentResponse = unknown;

export const GetScriptContentResponse = /*@__PURE__*/ Schema.suspend(
  () => Schema.Unknown,
) as unknown as Schema.Codec<GetScriptContentResponse>;

export type GetScriptContentError = DefaultErrors | WorkerNotFound;

export const getScriptContent: API.OperationMethod<
  GetScriptContentRequest,
  GetScriptContentResponse,
  GetScriptContentError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: GetScriptContentRequest,
  output: GetScriptContentResponse,
  errors: [WorkerNotFound],
}));

export interface PutScriptContentRequest {
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

export const PutScriptContentRequest = /*@__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    scriptName: Schema.String.pipe(T.HttpPath("scriptName")),
    accountId: Schema.String.pipe(T.HttpPath("account_id")),
    cfworkerbodypart: Schema.optional(Schema.String).pipe(
      T.HttpHeader("CF-WORKER-BODY-PART"),
    ),
    cfworkermainmodulepart: Schema.optional(Schema.String).pipe(
      T.HttpHeader("CF-WORKER-MAIN-MODULE-PART"),
    ),
    metadata: Metadata3,
    files: Schema.optional(
      Schema.Array(UploadableSchema.pipe(T.HttpFormDataFile())),
    ),
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/accounts/{account_id}/workers/scripts/{scriptName}/content",
      contentType: "multipart",
    }),
  ),
) as unknown as Schema.Codec<PutScriptContentRequest>;

export interface PutScriptContentResponse {
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

export const PutScriptContentResponse = /*@__PURE__*/ Schema.suspend(() =>
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
    observability: Schema.optional(Schema.Union([Observability2, Schema.Null])),
    placement: Schema.optional(
      Schema.Union([
        Schema.Union([
          ListScriptsResponseResultPlacement4,
          ListScriptsResponseResultPlacement5,
          ListScriptsResponseResultPlacement6,
          ListScriptsResponseResultPlacement7,
          ListScriptsResponseResultPlacement,
          ListScriptsResponseResultPlacement1,
          ListScriptsResponseResultPlacement2,
          ListScriptsResponseResultPlacement3,
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
) as unknown as Schema.Codec<PutScriptContentResponse>;

export type PutScriptContentError =
  | DefaultErrors
  | WorkerNotFound
  | InvalidWorkerScript
  | ScriptStartupError
  | ScriptModuleNotFound;

export const putScriptContent: API.OperationMethod<
  PutScriptContentRequest,
  PutScriptContentResponse,
  PutScriptContentError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: PutScriptContentRequest,
  output: PutScriptContentResponse,
  errors: [
    WorkerNotFound,
    InvalidWorkerScript,
    ScriptStartupError,
    ScriptModuleNotFound,
  ],
}));

// =============================================================================
// ScriptDeployment
// =============================================================================

export interface GetScriptDeploymentRequest {
  scriptName: string;
  deploymentId: string;
  /** Identifier. */
  accountId: string;
}

export const GetScriptDeploymentRequest = /*@__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    scriptName: Schema.String.pipe(T.HttpPath("scriptName")),
    deploymentId: Schema.String.pipe(T.HttpPath("deploymentId")),
    accountId: Schema.String.pipe(T.HttpPath("account_id")),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/accounts/{account_id}/workers/scripts/{scriptName}/deployments/{deploymentId}",
    }),
  ),
) as unknown as Schema.Codec<GetScriptDeploymentRequest>;

export interface GetScriptDeploymentResponse {
  id: string;
  createdOn: string;
  source: string;
  strategy: "percentage";
  versions: { percentage: number; versionId: string }[];
  annotations?: {
    workersMessage?: string | null;
    workersTriggeredBy?: string | null;
  } | null;
  authorEmail?: string | null;
}

export const GetScriptDeploymentResponse = /*@__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    id: Schema.String,
    createdOn: Schema.String,
    source: Schema.String,
    strategy: Schema.Literal("percentage"),
    versions: Schema.Array(Version),
    annotations: Schema.optional(Schema.Union([Annotations3, Schema.Null])),
    authorEmail: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
  })
    .pipe(
      Schema.encodeKeys({
        id: "id",
        createdOn: "created_on",
        source: "source",
        strategy: "strategy",
        versions: "versions",
        annotations: "annotations",
        authorEmail: "author_email",
      }),
    )
    .pipe(T.ResponsePath("result")),
) as unknown as Schema.Codec<GetScriptDeploymentResponse>;

export type GetScriptDeploymentError =
  | DefaultErrors
  | WorkerNotFound
  | DeploymentNotFound;

export const getScriptDeployment: API.OperationMethod<
  GetScriptDeploymentRequest,
  GetScriptDeploymentResponse,
  GetScriptDeploymentError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: GetScriptDeploymentRequest,
  output: GetScriptDeploymentResponse,
  errors: [WorkerNotFound, DeploymentNotFound],
}));

export interface ListScriptDeploymentsRequest {
  scriptName: string;
  /** Identifier. */
  accountId: string;
}

export const ListScriptDeploymentsRequest = /*@__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    scriptName: Schema.String.pipe(T.HttpPath("scriptName")),
    accountId: Schema.String.pipe(T.HttpPath("account_id")),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/accounts/{account_id}/workers/scripts/{scriptName}/deployments",
    }),
  ),
) as unknown as Schema.Codec<ListScriptDeploymentsRequest>;

export interface ListScriptDeploymentsResponse {
  deployments: {
    id: string;
    createdOn: string;
    source: string;
    strategy: "percentage";
    versions: { percentage: number; versionId: string }[];
    annotations?: {
      workersMessage?: string | null;
      workersTriggeredBy?: string | null;
    } | null;
    authorEmail?: string | null;
  }[];
}

export const ListScriptDeploymentsResponse = /*@__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    deployments: Schema.Array(Deployment),
  }).pipe(T.ResponsePath("result")),
) as unknown as Schema.Codec<ListScriptDeploymentsResponse>;

export type ListScriptDeploymentsError = DefaultErrors | WorkerNotFound;

export const listScriptDeployments: API.OperationMethod<
  ListScriptDeploymentsRequest,
  ListScriptDeploymentsResponse,
  ListScriptDeploymentsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: ListScriptDeploymentsRequest,
  output: ListScriptDeploymentsResponse,
  errors: [WorkerNotFound],
}));

export interface CreateScriptDeploymentRequest {
  scriptName: string;
  /** Path param: Identifier. */
  accountId: string;
  /** Query param: If set to true, the deployment will be created even if normally blocked by something such rolling back to an older version when a secret has changed. */
  force?: boolean;
  /** Body param */
  strategy: "percentage";
  /** Body param */
  versions: { percentage: number; versionId: string }[];
  /** Body param */
  annotations?: { workersMessage?: string };
}

export const CreateScriptDeploymentRequest = /*@__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    scriptName: Schema.String.pipe(T.HttpPath("scriptName")),
    accountId: Schema.String.pipe(T.HttpPath("account_id")),
    force: Schema.optional(Schema.Boolean).pipe(T.HttpQuery("force")),
    strategy: Schema.Literal("percentage"),
    versions: Schema.Array(Version),
    annotations: Schema.optional(Annotations4),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/accounts/{account_id}/workers/scripts/{scriptName}/deployments",
    }),
  ),
) as unknown as Schema.Codec<CreateScriptDeploymentRequest>;

export interface CreateScriptDeploymentResponse {
  id: string;
  createdOn?: string | null;
  source?: string | null;
  strategy?: "percentage" | null;
  versions?: { percentage: number; versionId: string }[] | null;
  annotations?: {
    workersMessage?: string | null;
    workersTriggeredBy?: string | null;
  } | null;
  authorEmail?: string | null;
}

export const CreateScriptDeploymentResponse = /*@__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    id: Schema.String,
    createdOn: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
    source: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
    strategy: Schema.optional(
      Schema.Union([Schema.Literal("percentage"), Schema.Null]),
    ),
    versions: Schema.optional(
      Schema.Union([Schema.Array(Version), Schema.Null]),
    ),
    annotations: Schema.optional(Schema.Union([Annotations3, Schema.Null])),
    authorEmail: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
  })
    .pipe(
      Schema.encodeKeys({
        id: "id",
        createdOn: "created_on",
        source: "source",
        strategy: "strategy",
        versions: "versions",
        annotations: "annotations",
        authorEmail: "author_email",
      }),
    )
    .pipe(T.ResponsePath("result")),
) as unknown as Schema.Codec<CreateScriptDeploymentResponse>;

export type CreateScriptDeploymentError = DefaultErrors | WorkerNotFound;

export const createScriptDeployment: API.OperationMethod<
  CreateScriptDeploymentRequest,
  CreateScriptDeploymentResponse,
  CreateScriptDeploymentError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: CreateScriptDeploymentRequest,
  output: CreateScriptDeploymentResponse,
  errors: [WorkerNotFound],
}));

export interface DeleteScriptDeploymentRequest {
  scriptName: string;
  deploymentId: string;
  /** Identifier. */
  accountId: string;
}

export const DeleteScriptDeploymentRequest = /*@__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    scriptName: Schema.String.pipe(T.HttpPath("scriptName")),
    deploymentId: Schema.String.pipe(T.HttpPath("deploymentId")),
    accountId: Schema.String.pipe(T.HttpPath("account_id")),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/accounts/{account_id}/workers/scripts/{scriptName}/deployments/{deploymentId}",
    }),
  ),
) as unknown as Schema.Codec<DeleteScriptDeploymentRequest>;

export interface DeleteScriptDeploymentResponse {
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
  /** Whether the API call was successful. */
  success: true;
}

export const DeleteScriptDeploymentResponse = /*@__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    errors: Schema.Array(Error2),
    messages: Schema.Array(Error2),
    success: Schema.Literal(true),
  }),
) as unknown as Schema.Codec<DeleteScriptDeploymentResponse>;

export type DeleteScriptDeploymentError =
  | DefaultErrors
  | WorkerNotFound
  | DeploymentNotFound;

export const deleteScriptDeployment: API.OperationMethod<
  DeleteScriptDeploymentRequest,
  DeleteScriptDeploymentResponse,
  DeleteScriptDeploymentError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: DeleteScriptDeploymentRequest,
  output: DeleteScriptDeploymentResponse,
  errors: [WorkerNotFound, DeploymentNotFound],
}));

// =============================================================================
// ScriptEdgePreview
// =============================================================================

export interface CreateScriptEdgePreviewRequest {
  accountId: string;
  scriptName: string;
  /** The session token returned by createZoneEdgePreviewSession or createSubdomainEdgePreviewSession. */
  cfPreviewUploadConfigToken: string;
  metadata?: {
    mainModule?: string;
    bodyPart?: string;
    compatibilityDate?: string;
    compatibilityFlags?: string[];
    usageModel?: "bundled" | "unbound" | "standard" | (string & {});
    bindings?: (
      | { type: "plain_text"; name: string; text: string }
      | { type: "secret_text"; name: string; text: string }
      | { type: "json"; name: string; json: unknown }
      | {
          type: "kv_namespace";
          name: string;
          namespaceId: string;
          raw?: boolean;
        }
      | {
          type: "durable_object_namespace";
          name: string;
          className: string;
          scriptName?: string;
          environment?: string;
          namespaceId?: string;
        }
      | {
          type: "r2_bucket";
          name: string;
          bucketName: string;
          jurisdiction?: string;
          raw?: boolean;
        }
      | {
          type: "d1";
          name: string;
          id: string;
          internalEnv?: string;
          raw?: boolean;
        }
      | {
          type: "queue";
          name: string;
          queueName: string;
          deliveryDelay?: number;
          raw?: boolean;
        }
      | {
          type: "service";
          name: string;
          service: string;
          environment?: string;
          entrypoint?: string;
          crossAccountGrant?: string;
        }
      | { type: "ai"; name: string; staging?: boolean; raw?: boolean }
      | { type: "browser"; name: string; raw?: boolean }
      | { type: "images"; name: string; raw?: boolean }
      | {
          type: "vectorize";
          name: string;
          indexName: string;
          internalEnv?: string;
          raw?: boolean;
        }
      | {
          type: "workflow";
          name: string;
          workflowName: string;
          className: string;
          scriptName?: string;
          raw?: boolean;
        }
      | { type: "hyperdrive"; name: string; id: string }
      | { type: "analytics_engine"; name: string; dataset?: string }
      | {
          type: "dispatch_namespace";
          name: string;
          namespace: string;
          outbound?: {
            worker?: { service?: string; environment?: string };
            params?: { name: string }[];
          };
        }
      | {
          type: "send_email";
          name: string;
          destinationAddress?: string;
          allowedDestinationAddresses?: string[];
          allowedSenderAddresses?: string[];
        }
      | { type: "mtls_certificate"; name: string; certificateId: string }
      | { type: "wasm_module"; name: string; part: string }
      | { type: "text_blob"; name: string; part: string }
      | { type: "data_blob"; name: string; part: string }
      | { type: "pipelines"; name: string; pipeline: string }
      | {
          type: "secrets_store_secret";
          name: string;
          storeId: string;
          secretName: string;
        }
      | { type: "stream"; name: string }
      | { type: "media"; name: string }
      | { type: "version_metadata"; name: string }
      | { type: "assets"; name: string }
      | { type: "worker_loader"; name: string }
      | { type: "logfwdr"; name: string; destination: string }
      | { type: "ai_search_namespace"; name: string; namespace: string }
      | { type: "ai_search"; name: string; instanceName: string }
      | {
          type: "ratelimit";
          name: string;
          namespaceId: string;
          simple: { limit: number; period: "10" | "60" | (string & {}) };
        }
      | { type: "artifacts"; name: string; namespace: string }
      | { type: "unsafe_hello_world"; name: string; enableTimer?: boolean }
      | { type: "flagship"; name: string; appId: string }
      | { type: "vpc_service"; name: string; serviceId: string }
      | {
          type: "vpc_network";
          name: string;
          tunnelId?: string;
          networkId?: string;
        }
      | { type: "inherit"; name: string }
    )[];
    keepBindings?: string[];
    migrations?: {
      oldTag?: string;
      newTag?: string;
      steps?: {
        newClasses?: string[];
        newSqliteClasses?: string[];
        renamedClasses?: { from?: string; to?: string }[];
        deletedClasses?: string[];
      }[];
    };
    capnpSchema?: string;
    logpush?: boolean;
    placement?:
      | { mode: "smart"; hint?: string }
      | { region: string }
      | { host: string }
      | { hostname: string };
    tailConsumers?: { service: string; environment?: string }[];
    streamingTailConsumers?: { service: string; environment?: string }[];
    limits?: { cpuMs?: number; subrequests?: number };
    assets?: {
      jwt?: string;
      config?: {
        htmlHandling?:
          | "auto-trailing-slash"
          | "force-trailing-slash"
          | "drop-trailing-slash"
          | "none"
          | (string & {});
        notFoundHandling?:
          | "single-page-application"
          | "404-page"
          | "none"
          | (string & {});
        runWorkerFirst?: boolean | string[];
        redirects?: string;
        headers?: string;
      };
    };
    observability?: {
      enabled?: boolean;
      headSamplingRate?: number;
      logs?: {
        enabled?: boolean;
        headSamplingRate?: number;
        invocationLogs?: boolean;
        persist?: boolean;
        destinations?: string[];
      };
      traces?: {
        enabled?: boolean;
        headSamplingRate?: number;
        persist?: boolean;
        destinations?: string[];
      };
    };
    containers?: { className: string }[];
    annotations?: unknown;
    keepAssets?: boolean;
    tags?: string[];
  };
  /** Module files comprising the worker script. */
  files?: (File | Blob)[];
  wranglerSessionConfig?:
    | { workersDev: true; minimalMode?: boolean }
    | { routes: string[]; minimalMode?: boolean };
}

export const CreateScriptEdgePreviewRequest = /*@__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    accountId: Schema.String.pipe(T.HttpPath("account_id")),
    scriptName: Schema.String.pipe(T.HttpPath("script_name")),
    cfPreviewUploadConfigToken: Schema.String.pipe(
      T.HttpHeader("cf-preview-upload-config-token"),
    ),
    metadata: Schema.optional(CreateScriptEdgePreviewRequestMetadata),
    files: Schema.optional(
      Schema.Array(UploadableSchema.pipe(T.HttpFormDataFile())),
    ),
    wranglerSessionConfig: Schema.optional(
      Schema.Union([
        CreateScriptEdgePreviewRequestWranglerSessionConfig,
        CreateScriptEdgePreviewRequestWranglerSessionConfig1,
      ]),
    ),
  }).pipe(
    Schema.encodeKeys({
      metadata: "metadata",
      files: "files",
      wranglerSessionConfig: "wrangler-session-config",
    }),
    T.Http({
      method: "POST",
      path: "/accounts/{account_id}/workers/scripts/{script_name}/edge-preview",
      contentType: "multipart",
    }),
  ),
) as unknown as Schema.Codec<CreateScriptEdgePreviewRequest>;

export interface CreateScriptEdgePreviewResponse {
  /** Token to send as cf-workers-preview-token header when making requests to the preview host. */
  previewToken: string;
  /** URL for tailing live logs from the preview worker. */
  tailUrl?: string | null;
}

export const CreateScriptEdgePreviewResponse = /*@__PURE__*/ Schema.suspend(
  () =>
    Schema.Struct({
      previewToken: Schema.String,
      tailUrl: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
    })
      .pipe(
        Schema.encodeKeys({
          previewToken: "preview_token",
          tailUrl: "tail_url",
        }),
      )
      .pipe(T.ResponsePath("result")),
) as unknown as Schema.Codec<CreateScriptEdgePreviewResponse>;

export type CreateScriptEdgePreviewError = DefaultErrors | InvalidRoute;

export const createScriptEdgePreview: API.OperationMethod<
  CreateScriptEdgePreviewRequest,
  CreateScriptEdgePreviewResponse,
  CreateScriptEdgePreviewError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: CreateScriptEdgePreviewRequest,
  output: CreateScriptEdgePreviewResponse,
  errors: [InvalidRoute],
}));

// =============================================================================
// ScriptSchedule
// =============================================================================

export interface GetScriptScheduleRequest {
  scriptName: string;
  /** Identifier. */
  accountId: string;
}

export const GetScriptScheduleRequest = /*@__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    scriptName: Schema.String.pipe(T.HttpPath("scriptName")),
    accountId: Schema.String.pipe(T.HttpPath("account_id")),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/accounts/{account_id}/workers/scripts/{scriptName}/schedules",
    }),
  ),
) as unknown as Schema.Codec<GetScriptScheduleRequest>;

export interface GetScriptScheduleResponse {
  schedules: {
    cron: string;
    createdOn?: string | null;
    modifiedOn?: string | null;
  }[];
}

export const GetScriptScheduleResponse = /*@__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    schedules: Schema.Array(Schedule),
  }).pipe(T.ResponsePath("result")),
) as unknown as Schema.Codec<GetScriptScheduleResponse>;

export type GetScriptScheduleError = DefaultErrors | WorkerNotFound;

export const getScriptSchedule: API.OperationMethod<
  GetScriptScheduleRequest,
  GetScriptScheduleResponse,
  GetScriptScheduleError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: GetScriptScheduleRequest,
  output: GetScriptScheduleResponse,
  errors: [WorkerNotFound],
}));

export interface PutScriptScheduleRequest {
  scriptName: string;
  /** Path param: Identifier. */
  accountId: string;
  /** Body param */
  body: { cron: string }[];
}

export const PutScriptScheduleRequest = /*@__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    scriptName: Schema.String.pipe(T.HttpPath("scriptName")),
    accountId: Schema.String.pipe(T.HttpPath("account_id")),
    body: Schema.Array(Body).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/accounts/{account_id}/workers/scripts/{scriptName}/schedules",
    }),
  ),
) as unknown as Schema.Codec<PutScriptScheduleRequest>;

export interface PutScriptScheduleResponse {
  schedules: {
    cron: string;
    createdOn?: string | null;
    modifiedOn?: string | null;
  }[];
}

export const PutScriptScheduleResponse = /*@__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    schedules: Schema.Array(Schedule),
  }).pipe(T.ResponsePath("result")),
) as unknown as Schema.Codec<PutScriptScheduleResponse>;

export type PutScriptScheduleError = DefaultErrors | WorkerNotFound;

export const putScriptSchedule: API.OperationMethod<
  PutScriptScheduleRequest,
  PutScriptScheduleResponse,
  PutScriptScheduleError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: PutScriptScheduleRequest,
  output: PutScriptScheduleResponse,
  errors: [WorkerNotFound],
}));

// =============================================================================
// ScriptScriptAndVersionSetting
// =============================================================================

export interface GetScriptScriptAndVersionSettingRequest {
  scriptName: string;
  /** Identifier. */
  accountId: string;
}

export const GetScriptScriptAndVersionSettingRequest =
  /*@__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      scriptName: Schema.String.pipe(T.HttpPath("scriptName")),
      accountId: Schema.String.pipe(T.HttpPath("account_id")),
    }).pipe(
      T.Http({
        method: "GET",
        path: "/accounts/{account_id}/workers/scripts/{scriptName}/settings",
      }),
    ),
  ) as unknown as Schema.Codec<GetScriptScriptAndVersionSettingRequest>;

export interface GetScriptScriptAndVersionSettingResponse {
  /** Annotations for the Worker version. Annotations are not inherited across settings updates; omitting this field means the new version will have no annotations. */
  annotations?: {
    workersMessage?: string | null;
    workersTag?: string | null;
    workersTriggeredBy?: string | null;
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
        | { name: string; type: "worker_loader" }
        | { name: string; type: "artifacts"; namespace: string }
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
  placement?: unknown | null;
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

export const GetScriptScriptAndVersionSettingResponse =
  /*@__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      annotations: Schema.optional(Schema.Union([Annotations, Schema.Null])),
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
              WorkersBindingKindService,
              WorkersBindingKindTextBlob,
              WorkersBindingKindVectorize,
              WorkersBindingKindFlagship,
              WorkersBindingKindWorkflow,
              WorkersBindingKindWasmModule,
              WorkersBindingKindVPCService,
              GetBetaWorkerVersionResponseBinding36,
              WorkersBindingKindAI,
              WorkersBindingKindAssets,
              WorkersBindingKindBrowser,
              WorkersBindingKindDurableObjectNamespace,
              WorkersBindingKindInherit,
              WorkersBindingKindImages,
              WorkersBindingKindMedia,
              WorkersBindingKindSecretText,
              WorkersBindingKindSendEmail,
              WorkersBindingKindVersionMetadata,
              WorkersBindingKindVPCNetwork,
              GetBetaWorkerVersionResponseBinding35,
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
        Schema.Union([Observability2, Schema.Null]),
      ),
      placement: Schema.optional(Schema.Union([Schema.Unknown, Schema.Null])),
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
          annotations: "annotations",
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
  ) as unknown as Schema.Codec<GetScriptScriptAndVersionSettingResponse>;

export type GetScriptScriptAndVersionSettingError =
  | DefaultErrors
  | WorkerNotFound
  | WorkerHasNoVersions;

export const getScriptScriptAndVersionSetting: API.OperationMethod<
  GetScriptScriptAndVersionSettingRequest,
  GetScriptScriptAndVersionSettingResponse,
  GetScriptScriptAndVersionSettingError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: GetScriptScriptAndVersionSettingRequest,
  output: GetScriptScriptAndVersionSettingResponse,
  errors: [WorkerNotFound, WorkerHasNoVersions],
}));

export interface PatchScriptScriptAndVersionSettingRequest {
  scriptName: string;
  /** Path param: Identifier. */
  accountId: string;
  /** Body param */
  settings?: {
    annotations?: { workersMessage?: string; workersTag?: string };
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
          className: string;
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
          className: string;
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
      | { name: string; type: "worker_loader" }
      | { name: string; type: "artifacts"; namespace: string }
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

export const PatchScriptScriptAndVersionSettingRequest =
  /*@__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      scriptName: Schema.String.pipe(T.HttpPath("scriptName")),
      accountId: Schema.String.pipe(T.HttpPath("account_id")),
      settings: Schema.optional(Settings),
    }).pipe(
      T.Http({
        method: "PATCH",
        path: "/accounts/{account_id}/workers/scripts/{scriptName}/settings",
        contentType: "multipart",
      }),
    ),
  ) as unknown as Schema.Codec<PatchScriptScriptAndVersionSettingRequest>;

export interface PatchScriptScriptAndVersionSettingResponse {
  /** Annotations for the Worker version. Annotations are not inherited across settings updates; omitting this field means the new version will have no annotations. */
  annotations?: {
    workersMessage?: string | null;
    workersTag?: string | null;
    workersTriggeredBy?: string | null;
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
        | { name: string; type: "worker_loader" }
        | { name: string; type: "artifacts"; namespace: string }
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
  placement?: unknown | null;
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

export const PatchScriptScriptAndVersionSettingResponse =
  /*@__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      annotations: Schema.optional(Schema.Union([Annotations, Schema.Null])),
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
              WorkersBindingKindService,
              WorkersBindingKindTextBlob,
              WorkersBindingKindVectorize,
              WorkersBindingKindFlagship,
              WorkersBindingKindWorkflow,
              WorkersBindingKindWasmModule,
              WorkersBindingKindVPCService,
              GetBetaWorkerVersionResponseBinding36,
              WorkersBindingKindAI,
              WorkersBindingKindAssets,
              WorkersBindingKindBrowser,
              WorkersBindingKindDurableObjectNamespace,
              WorkersBindingKindInherit,
              WorkersBindingKindImages,
              WorkersBindingKindMedia,
              WorkersBindingKindSecretText,
              WorkersBindingKindSendEmail,
              WorkersBindingKindVersionMetadata,
              WorkersBindingKindVPCNetwork,
              GetBetaWorkerVersionResponseBinding35,
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
        Schema.Union([Observability2, Schema.Null]),
      ),
      placement: Schema.optional(Schema.Union([Schema.Unknown, Schema.Null])),
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
          annotations: "annotations",
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
  ) as unknown as Schema.Codec<PatchScriptScriptAndVersionSettingResponse>;

export type PatchScriptScriptAndVersionSettingError =
  | DefaultErrors
  | WorkerNotFound
  | ContentTypeRequired;

export const patchScriptScriptAndVersionSetting: API.OperationMethod<
  PatchScriptScriptAndVersionSettingRequest,
  PatchScriptScriptAndVersionSettingResponse,
  PatchScriptScriptAndVersionSettingError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: PatchScriptScriptAndVersionSettingRequest,
  output: PatchScriptScriptAndVersionSettingResponse,
  errors: [WorkerNotFound, ContentTypeRequired],
}));

// =============================================================================
// ScriptSecret
// =============================================================================

export interface GetScriptSecretRequest {
  scriptName: string;
  secretName: string;
  /** Path param: Identifier. */
  accountId: string;
  /** Query param: Flag that indicates whether the secret name is URL encoded. */
  urlEncoded?: boolean;
}

export const GetScriptSecretRequest = /*@__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    scriptName: Schema.String.pipe(T.HttpPath("scriptName")),
    secretName: Schema.String.pipe(T.HttpPath("secretName")),
    accountId: Schema.String.pipe(T.HttpPath("account_id")),
    urlEncoded: Schema.optional(Schema.Boolean).pipe(
      T.HttpQuery("url_encoded"),
    ),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/accounts/{account_id}/workers/scripts/{scriptName}/secrets/{secretName}",
    }),
  ),
) as unknown as Schema.Codec<GetScriptSecretRequest>;

export type GetScriptSecretResponse =
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

export const GetScriptSecretResponse = /*@__PURE__*/ Schema.suspend(() =>
  Schema.Union([
    WorkersBindingKindSecretKey,
    WorkersBindingKindSecretText,
  ]).pipe(T.ResponsePath("result")),
) as unknown as Schema.Codec<GetScriptSecretResponse>;

export type GetScriptSecretError =
  | DefaultErrors
  | WorkerNotFound
  | SecretNotFound;

export const getScriptSecret: API.OperationMethod<
  GetScriptSecretRequest,
  GetScriptSecretResponse,
  GetScriptSecretError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: GetScriptSecretRequest,
  output: GetScriptSecretResponse,
  errors: [WorkerNotFound, SecretNotFound],
}));

export interface ListScriptSecretsRequest {
  scriptName: string;
  /** Identifier. */
  accountId: string;
}

export const ListScriptSecretsRequest = /*@__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    scriptName: Schema.String.pipe(T.HttpPath("scriptName")),
    accountId: Schema.String.pipe(T.HttpPath("account_id")),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/accounts/{account_id}/workers/scripts/{scriptName}/secrets",
    }),
  ),
) as unknown as Schema.Codec<ListScriptSecretsRequest>;

export interface ListScriptSecretsResponse {
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

export const ListScriptSecretsResponse = /*@__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    result: Schema.Array(
      Schema.Union([WorkersBindingKindSecretKey, WorkersBindingKindSecretText]),
    ),
  }),
) as unknown as Schema.Codec<ListScriptSecretsResponse>;

export type ListScriptSecretsError = DefaultErrors | WorkerNotFound;

export const listScriptSecrets: API.PaginatedOperationMethod<
  ListScriptSecretsRequest,
  ListScriptSecretsResponse,
  ListScriptSecretsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: ListScriptSecretsRequest,
  output: ListScriptSecretsResponse,
  errors: [WorkerNotFound],
  pagination: {
    mode: "single",
    items: "result",
  } as const,
}));

export interface PutScriptSecretRequest {
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

export const PutScriptSecretRequest = /*@__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
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
      path: "/accounts/{account_id}/workers/scripts/{scriptName}/secrets",
    }),
  ),
) as unknown as Schema.Codec<PutScriptSecretRequest>;

export type PutScriptSecretResponse =
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

export const PutScriptSecretResponse = /*@__PURE__*/ Schema.suspend(() =>
  Schema.Union([
    WorkersBindingKindSecretKey,
    WorkersBindingKindSecretText,
  ]).pipe(T.ResponsePath("result")),
) as unknown as Schema.Codec<PutScriptSecretResponse>;

export type PutScriptSecretError = DefaultErrors | WorkerNotFound;

export const putScriptSecret: API.OperationMethod<
  PutScriptSecretRequest,
  PutScriptSecretResponse,
  PutScriptSecretError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: PutScriptSecretRequest,
  output: PutScriptSecretResponse,
  errors: [WorkerNotFound],
}));

export interface DeleteScriptSecretRequest {
  scriptName: string;
  secretName: string;
  /** Path param: Identifier. */
  accountId: string;
  /** Query param: Flag that indicates whether the secret name is URL encoded. */
  urlEncoded?: boolean;
}

export const DeleteScriptSecretRequest = /*@__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    scriptName: Schema.String.pipe(T.HttpPath("scriptName")),
    secretName: Schema.String.pipe(T.HttpPath("secretName")),
    accountId: Schema.String.pipe(T.HttpPath("account_id")),
    urlEncoded: Schema.optional(Schema.Boolean).pipe(
      T.HttpQuery("url_encoded"),
    ),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/accounts/{account_id}/workers/scripts/{scriptName}/secrets/{secretName}",
    }),
  ),
) as unknown as Schema.Codec<DeleteScriptSecretRequest>;

export type DeleteScriptSecretResponse = unknown;

export const DeleteScriptSecretResponse = /*@__PURE__*/ Schema.suspend(() =>
  Schema.Unknown.pipe(T.ResponsePath("result")),
) as unknown as Schema.Codec<DeleteScriptSecretResponse>;

export type DeleteScriptSecretError =
  | DefaultErrors
  | WorkerNotFound
  | SecretNotFound;

export const deleteScriptSecret: API.OperationMethod<
  DeleteScriptSecretRequest,
  DeleteScriptSecretResponse,
  DeleteScriptSecretError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: DeleteScriptSecretRequest,
  output: DeleteScriptSecretResponse,
  errors: [WorkerNotFound, SecretNotFound],
}));

export interface BulkUpdateScriptSecretsRequest {
  scriptName: string;
  /** Path param: Identifier. */
  accountId: string;
  /** Body param: Map of secret names to secret values:  - Set to a secret object to create or update. - Set to `null` to delete. - Omit to leave unchanged. */
  secrets?: Record<string, unknown>;
  /** Body param: Optional version tags to apply to the new script version. */
  versionTags?: Record<string, unknown>;
}

export const BulkUpdateScriptSecretsRequest = /*@__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    scriptName: Schema.String.pipe(T.HttpPath("scriptName")),
    accountId: Schema.String.pipe(T.HttpPath("account_id")),
    secrets: Schema.optional(Schema.Record(Schema.String, Schema.Unknown)),
    versionTags: Schema.optional(Schema.Record(Schema.String, Schema.Unknown)),
  }).pipe(
    Schema.encodeKeys({ secrets: "secrets", versionTags: "version_tags" }),
    T.Http({
      method: "PATCH",
      path: "/accounts/{account_id}/workers/scripts/{scriptName}/secrets-bulk",
    }),
  ),
) as unknown as Schema.Codec<BulkUpdateScriptSecretsRequest>;

export type BulkUpdateScriptSecretsResponse = Record<string, unknown>;

export const BulkUpdateScriptSecretsResponse = /*@__PURE__*/ Schema.suspend(
  () =>
    Schema.Record(Schema.String, Schema.Unknown).pipe(T.ResponsePath("result")),
) as unknown as Schema.Codec<BulkUpdateScriptSecretsResponse>;

export type BulkUpdateScriptSecretsError = DefaultErrors;

export const bulkUpdateScriptSecrets: API.OperationMethod<
  BulkUpdateScriptSecretsRequest,
  BulkUpdateScriptSecretsResponse,
  BulkUpdateScriptSecretsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: BulkUpdateScriptSecretsRequest,
  output: BulkUpdateScriptSecretsResponse,
  errors: [],
}));

// =============================================================================
// ScriptSetting
// =============================================================================

export interface GetScriptSettingRequest {
  scriptName: string;
  /** Identifier. */
  accountId: string;
}

export const GetScriptSettingRequest = /*@__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    scriptName: Schema.String.pipe(T.HttpPath("scriptName")),
    accountId: Schema.String.pipe(T.HttpPath("account_id")),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/accounts/{account_id}/workers/scripts/{scriptName}/script-settings",
    }),
  ),
) as unknown as Schema.Codec<GetScriptSettingRequest>;

export interface GetScriptSettingResponse {
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
}

export const GetScriptSettingResponse = /*@__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    logpush: Schema.optional(Schema.Union([Schema.Boolean, Schema.Null])),
    observability: Schema.optional(Schema.Union([Observability2, Schema.Null])),
    tags: Schema.optional(
      Schema.Union([Schema.Array(Schema.String), Schema.Null]),
    ),
    tailConsumers: Schema.optional(
      Schema.Union([Schema.Array(ConsumerScript), Schema.Null]),
    ),
  })
    .pipe(
      Schema.encodeKeys({
        logpush: "logpush",
        observability: "observability",
        tags: "tags",
        tailConsumers: "tail_consumers",
      }),
    )
    .pipe(T.ResponsePath("result")),
) as unknown as Schema.Codec<GetScriptSettingResponse>;

export type GetScriptSettingError =
  | DefaultErrors
  | WorkerNotFound
  | WorkerHasNoVersions;

export const getScriptSetting: API.OperationMethod<
  GetScriptSettingRequest,
  GetScriptSettingResponse,
  GetScriptSettingError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: GetScriptSettingRequest,
  output: GetScriptSettingResponse,
  errors: [WorkerNotFound, WorkerHasNoVersions],
}));

export interface PatchScriptSettingRequest {
  scriptName: string;
  /** Path param: Identifier. */
  accountId: string;
  /** Body param: Whether Logpush is turned on for the Worker. */
  logpush?: boolean;
  /** Body param: Observability settings for the Worker. */
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
  } | null;
  /** Body param: Tags associated with the Worker. */
  tags?: string[] | null;
  /** Body param: List of Workers that will consume logs from the attached Worker. */
  tailConsumers?:
    | { service: string; environment?: string; namespace?: string }[]
    | null;
}

export const PatchScriptSettingRequest = /*@__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    scriptName: Schema.String.pipe(T.HttpPath("scriptName")),
    accountId: Schema.String.pipe(T.HttpPath("account_id")),
    logpush: Schema.optional(Schema.Boolean),
    observability: Schema.optional(Schema.Union([Observability2, Schema.Null])),
    tags: Schema.optional(
      Schema.Union([Schema.Array(Schema.String), Schema.Null]),
    ),
    tailConsumers: Schema.optional(
      Schema.Union([Schema.Array(ConsumerScript), Schema.Null]),
    ),
  }).pipe(
    Schema.encodeKeys({
      logpush: "logpush",
      observability: "observability",
      tags: "tags",
      tailConsumers: "tail_consumers",
    }),
    T.Http({
      method: "PATCH",
      path: "/accounts/{account_id}/workers/scripts/{scriptName}/script-settings",
    }),
  ),
) as unknown as Schema.Codec<PatchScriptSettingRequest>;

export interface PatchScriptSettingResponse {
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
}

export const PatchScriptSettingResponse = /*@__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    logpush: Schema.optional(Schema.Union([Schema.Boolean, Schema.Null])),
    observability: Schema.optional(Schema.Union([Observability2, Schema.Null])),
    tags: Schema.optional(
      Schema.Union([Schema.Array(Schema.String), Schema.Null]),
    ),
    tailConsumers: Schema.optional(
      Schema.Union([Schema.Array(ConsumerScript), Schema.Null]),
    ),
  })
    .pipe(
      Schema.encodeKeys({
        logpush: "logpush",
        observability: "observability",
        tags: "tags",
        tailConsumers: "tail_consumers",
      }),
    )
    .pipe(T.ResponsePath("result")),
) as unknown as Schema.Codec<PatchScriptSettingResponse>;

export type PatchScriptSettingError = DefaultErrors | WorkerNotFound;

export const patchScriptSetting: API.OperationMethod<
  PatchScriptSettingRequest,
  PatchScriptSettingResponse,
  PatchScriptSettingError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: PatchScriptSettingRequest,
  output: PatchScriptSettingResponse,
  errors: [WorkerNotFound],
}));

// =============================================================================
// ScriptSubdomain
// =============================================================================

export interface GetScriptSubdomainRequest {
  scriptName: string;
  /** Identifier. */
  accountId: string;
}

export const GetScriptSubdomainRequest = /*@__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    scriptName: Schema.String.pipe(T.HttpPath("scriptName")),
    accountId: Schema.String.pipe(T.HttpPath("account_id")),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/accounts/{account_id}/workers/scripts/{scriptName}/subdomain",
    }),
  ),
) as unknown as Schema.Codec<GetScriptSubdomainRequest>;

export interface GetScriptSubdomainResponse {
  /** Whether the Worker is available on the workers.dev subdomain. */
  enabled: boolean;
  /** Whether the Worker's Preview URLs are available on the workers.dev subdomain. */
  previewsEnabled: boolean;
}

export const GetScriptSubdomainResponse = /*@__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    enabled: Schema.Boolean,
    previewsEnabled: Schema.Boolean,
  })
    .pipe(
      Schema.encodeKeys({
        enabled: "enabled",
        previewsEnabled: "previews_enabled",
      }),
    )
    .pipe(T.ResponsePath("result")),
) as unknown as Schema.Codec<GetScriptSubdomainResponse>;

export type GetScriptSubdomainError = DefaultErrors | WorkerNotFound;

export const getScriptSubdomain: API.OperationMethod<
  GetScriptSubdomainRequest,
  GetScriptSubdomainResponse,
  GetScriptSubdomainError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: GetScriptSubdomainRequest,
  output: GetScriptSubdomainResponse,
  errors: [WorkerNotFound],
}));

export interface CreateScriptSubdomainRequest {
  scriptName: string;
  /** Path param: Identifier. */
  accountId: string;
  /** Body param: Whether the Worker should be available on the workers.dev subdomain. */
  enabled: boolean;
  /** Body param: Whether the Worker's Preview URLs should be available on the workers.dev subdomain. */
  previewsEnabled?: boolean;
}

export const CreateScriptSubdomainRequest = /*@__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    scriptName: Schema.String.pipe(T.HttpPath("scriptName")),
    accountId: Schema.String.pipe(T.HttpPath("account_id")),
    enabled: Schema.Boolean,
    previewsEnabled: Schema.optional(Schema.Boolean),
  }).pipe(
    Schema.encodeKeys({
      enabled: "enabled",
      previewsEnabled: "previews_enabled",
    }),
    T.Http({
      method: "POST",
      path: "/accounts/{account_id}/workers/scripts/{scriptName}/subdomain",
    }),
  ),
) as unknown as Schema.Codec<CreateScriptSubdomainRequest>;

export interface CreateScriptSubdomainResponse {
  /** Whether the Worker is available on the workers.dev subdomain. */
  enabled: boolean;
  /** Whether the Worker's Preview URLs are available on the workers.dev subdomain. */
  previewsEnabled: boolean;
}

export const CreateScriptSubdomainResponse = /*@__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    enabled: Schema.Boolean,
    previewsEnabled: Schema.Boolean,
  })
    .pipe(
      Schema.encodeKeys({
        enabled: "enabled",
        previewsEnabled: "previews_enabled",
      }),
    )
    .pipe(T.ResponsePath("result")),
) as unknown as Schema.Codec<CreateScriptSubdomainResponse>;

export type CreateScriptSubdomainError = DefaultErrors | WorkerNotFound;

export const createScriptSubdomain: API.OperationMethod<
  CreateScriptSubdomainRequest,
  CreateScriptSubdomainResponse,
  CreateScriptSubdomainError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: CreateScriptSubdomainRequest,
  output: CreateScriptSubdomainResponse,
  errors: [WorkerNotFound],
}));

export interface DeleteScriptSubdomainRequest {
  scriptName: string;
  /** Identifier. */
  accountId: string;
}

export const DeleteScriptSubdomainRequest = /*@__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    scriptName: Schema.String.pipe(T.HttpPath("scriptName")),
    accountId: Schema.String.pipe(T.HttpPath("account_id")),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/accounts/{account_id}/workers/scripts/{scriptName}/subdomain",
    }),
  ),
) as unknown as Schema.Codec<DeleteScriptSubdomainRequest>;

export interface DeleteScriptSubdomainResponse {
  /** Whether the Worker is available on the workers.dev subdomain. */
  enabled: boolean;
  /** Whether the Worker's Preview URLs are available on the workers.dev subdomain. */
  previewsEnabled: boolean;
}

export const DeleteScriptSubdomainResponse = /*@__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    enabled: Schema.Boolean,
    previewsEnabled: Schema.Boolean,
  })
    .pipe(
      Schema.encodeKeys({
        enabled: "enabled",
        previewsEnabled: "previews_enabled",
      }),
    )
    .pipe(T.ResponsePath("result")),
) as unknown as Schema.Codec<DeleteScriptSubdomainResponse>;

export type DeleteScriptSubdomainError = DefaultErrors | WorkerNotFound;

export const deleteScriptSubdomain: API.OperationMethod<
  DeleteScriptSubdomainRequest,
  DeleteScriptSubdomainResponse,
  DeleteScriptSubdomainError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: DeleteScriptSubdomainRequest,
  output: DeleteScriptSubdomainResponse,
  errors: [WorkerNotFound],
}));

// =============================================================================
// ScriptTail
// =============================================================================

export interface GetScriptTailRequest {
  scriptName: string;
  /** Identifier. */
  accountId: string;
}

export const GetScriptTailRequest = /*@__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    scriptName: Schema.String.pipe(T.HttpPath("scriptName")),
    accountId: Schema.String.pipe(T.HttpPath("account_id")),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/accounts/{account_id}/workers/scripts/{scriptName}/tails",
    }),
  ),
) as unknown as Schema.Codec<GetScriptTailRequest>;

export interface GetScriptTailResponse {
  /** Identifier. */
  id: string;
  expiresAt: string;
  url: string;
}

export const GetScriptTailResponse = /*@__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    id: Schema.String,
    expiresAt: Schema.String,
    url: Schema.String,
  })
    .pipe(Schema.encodeKeys({ id: "id", expiresAt: "expires_at", url: "url" }))
    .pipe(T.ResponsePath("result")),
) as unknown as Schema.Codec<GetScriptTailResponse>;

export type GetScriptTailError = DefaultErrors | WorkerNotFound;

export const getScriptTail: API.OperationMethod<
  GetScriptTailRequest,
  GetScriptTailResponse,
  GetScriptTailError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: GetScriptTailRequest,
  output: GetScriptTailResponse,
  errors: [WorkerNotFound],
}));

export interface CreateScriptTailRequest {
  scriptName: string;
  /** Path param: Identifier. */
  accountId: string;
  /** Body param */
  body: unknown;
}

export const CreateScriptTailRequest = /*@__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    scriptName: Schema.String.pipe(T.HttpPath("scriptName")),
    accountId: Schema.String.pipe(T.HttpPath("account_id")),
    body: Schema.Unknown.pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/accounts/{account_id}/workers/scripts/{scriptName}/tails",
    }),
  ),
) as unknown as Schema.Codec<CreateScriptTailRequest>;

export interface CreateScriptTailResponse {
  /** Identifier. */
  id: string;
  expiresAt: string;
  url: string;
}

export const CreateScriptTailResponse = /*@__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    id: Schema.String,
    expiresAt: Schema.String,
    url: Schema.String,
  })
    .pipe(Schema.encodeKeys({ id: "id", expiresAt: "expires_at", url: "url" }))
    .pipe(T.ResponsePath("result")),
) as unknown as Schema.Codec<CreateScriptTailResponse>;

export type CreateScriptTailError = DefaultErrors | WorkerNotFound;

export const createScriptTail: API.OperationMethod<
  CreateScriptTailRequest,
  CreateScriptTailResponse,
  CreateScriptTailError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: CreateScriptTailRequest,
  output: CreateScriptTailResponse,
  errors: [WorkerNotFound],
}));

export interface DeleteScriptTailRequest {
  scriptName: string;
  id: string;
  /** Identifier. */
  accountId: string;
}

export const DeleteScriptTailRequest = /*@__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    scriptName: Schema.String.pipe(T.HttpPath("scriptName")),
    id: Schema.String.pipe(T.HttpPath("id")),
    accountId: Schema.String.pipe(T.HttpPath("account_id")),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/accounts/{account_id}/workers/scripts/{scriptName}/tails/{id}",
    }),
  ),
) as unknown as Schema.Codec<DeleteScriptTailRequest>;

export interface DeleteScriptTailResponse {
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
  /** Whether the API call was successful. */
  success: true;
}

export const DeleteScriptTailResponse = /*@__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    errors: Schema.Array(Error2),
    messages: Schema.Array(Error2),
    success: Schema.Literal(true),
  }),
) as unknown as Schema.Codec<DeleteScriptTailResponse>;

export type DeleteScriptTailError = DefaultErrors | WorkerNotFound;

export const deleteScriptTail: API.OperationMethod<
  DeleteScriptTailRequest,
  DeleteScriptTailResponse,
  DeleteScriptTailError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: DeleteScriptTailRequest,
  output: DeleteScriptTailResponse,
  errors: [WorkerNotFound],
}));

// =============================================================================
// ScriptVersion
// =============================================================================

export interface GetScriptVersionRequest {
  scriptName: string;
  versionId: string;
  /** Identifier. */
  accountId: string;
}

export const GetScriptVersionRequest = /*@__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    scriptName: Schema.String.pipe(T.HttpPath("scriptName")),
    versionId: Schema.String.pipe(T.HttpPath("versionId")),
    accountId: Schema.String.pipe(T.HttpPath("account_id")),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/accounts/{account_id}/workers/scripts/{scriptName}/versions/{versionId}",
    }),
  ),
) as unknown as Schema.Codec<GetScriptVersionRequest>;

export interface GetScriptVersionResponse {
  resources: {
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
          | { name: string; type: "worker_loader" }
          | { name: string; type: "artifacts"; namespace: string }
        )[]
      | null;
    script?: {
      etag?: string | null;
      handlers?: string[] | null;
      lastDeployedFrom?: string | null;
      namedHandlers?:
        | { handlers?: string[] | null; name?: string | null }[]
        | null;
    } | null;
    scriptRuntime?: {
      compatibilityDate?: string | null;
      compatibilityFlags?: string[] | null;
      limits?: { cpuMs?: number | null } | null;
      migrationTag?: string | null;
      usageModel?: "bundled" | "unbound" | "standard" | (string & {}) | null;
    } | null;
  };
  /** Unique identifier for the version. */
  id?: string | null;
  metadata?: {
    authorEmail?: string | null;
    authorId?: string | null;
    createdOn?: string | null;
    hasPreview?: boolean | null;
    modifiedOn?: string | null;
    source?:
      | "unknown"
      | "api"
      | "wrangler"
      | "terraform"
      | "dash"
      | "dash_template"
      | "integration"
      | "quick_editor"
      | "playground"
      | "workersci"
      | (string & {})
      | null;
  } | null;
  /** Sequential version number. */
  number?: number | null;
}

export const GetScriptVersionResponse = /*@__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    resources: Resources,
    id: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
    metadata: Schema.optional(Schema.Union([Metadata4, Schema.Null])),
    number: Schema.optional(Schema.Union([Schema.Number, Schema.Null])),
  }).pipe(T.ResponsePath("result")),
) as unknown as Schema.Codec<GetScriptVersionResponse>;

export type GetScriptVersionError =
  | DefaultErrors
  | WorkerNotFound
  | VersionNotFound;

export const getScriptVersion: API.OperationMethod<
  GetScriptVersionRequest,
  GetScriptVersionResponse,
  GetScriptVersionError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: GetScriptVersionRequest,
  output: GetScriptVersionResponse,
  errors: [WorkerNotFound, VersionNotFound],
}));

export interface ListScriptVersionsRequest {
  scriptName: string;
  /** Path param: Identifier. */
  accountId: string;
  page?: number;
  perPage?: number;
  /** Query param: Only return versions that can be used in a deployment. Ignores pagination. */
  deployable?: boolean;
}

export const ListScriptVersionsRequest = /*@__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    scriptName: Schema.String.pipe(T.HttpPath("scriptName")),
    accountId: Schema.String.pipe(T.HttpPath("account_id")),
    page: Schema.optional(Schema.Number).pipe(T.HttpQuery("page")),
    perPage: Schema.optional(Schema.Number).pipe(T.HttpQuery("per_page")),
    deployable: Schema.optional(Schema.Boolean).pipe(T.HttpQuery("deployable")),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/accounts/{account_id}/workers/scripts/{scriptName}/versions",
    }),
  ),
) as unknown as Schema.Codec<ListScriptVersionsRequest>;

export interface ListScriptVersionsResponse {
  result: {
    items?:
      | {
          id?: string | null;
          metadata?: {
            authorEmail?: string | null;
            authorId?: string | null;
            createdOn?: string | null;
            hasPreview?: boolean | null;
            modifiedOn?: string | null;
            source?:
              | "unknown"
              | "api"
              | "wrangler"
              | "terraform"
              | "dash"
              | "dash_template"
              | "integration"
              | "quick_editor"
              | "playground"
              | "workersci"
              | (string & {})
              | null;
          } | null;
          number?: number | null;
        }[]
      | null;
  };
  resultInfo?: {
    count?: number | null;
    page?: number | null;
    perPage?: number | null;
    totalCount?: number | null;
  } | null;
}

export const ListScriptVersionsResponse = /*@__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    result: ListScriptVersionsResponseResult,
    resultInfo: Schema.optional(
      Schema.Union([ListBetaWorkersResponseResultInfo, Schema.Null]),
    ),
  }).pipe(Schema.encodeKeys({ result: "result", resultInfo: "result_info" })),
) as unknown as Schema.Codec<ListScriptVersionsResponse>;

export type ListScriptVersionsError = DefaultErrors | WorkerNotFound;

export const listScriptVersions: API.PaginatedOperationMethod<
  ListScriptVersionsRequest,
  ListScriptVersionsResponse,
  ListScriptVersionsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: ListScriptVersionsRequest,
  output: ListScriptVersionsResponse,
  errors: [WorkerNotFound],
  pagination: {
    mode: "page",
    inputToken: "page",
    outputToken: "resultInfo.page",
    items: "result.items",
    pageSize: "perPage",
  } as const,
}));

export interface CreateScriptVersionRequest {
  scriptName: string;
  /** Path param: Identifier. */
  accountId: string;
  /** Query param: When set to "strict", the upload will fail if any `inherit` type bindings cannot be resolved against the previous version of the Worker. Without this, unresolvable inherit bindings are si */
  bindingsInherit?: "strict";
  /** Body param: JSON-encoded metadata about the uploaded parts and Worker configuration. */
  metadata: {
    mainModule: string;
    annotations?: {
      workersAlias?: string;
      workersMessage?: string;
      workersTag?: string;
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
          className: string;
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
          className: string;
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
      | { name: string; type: "worker_loader" }
      | { name: string; type: "artifacts"; namespace: string }
    )[];
    compatibilityDate?: string;
    compatibilityFlags?: string[];
    keepBindings?: string[];
    usageModel?: "standard" | "bundled" | "unbound" | (string & {});
    cache?: { enabled?: boolean; crossVersionCache?: boolean };
  };
  /** Body param: An array of modules (often JavaScript files) comprising a Worker script. At least one module must be present and referenced in the metadata as `main_module` or `body_part` by filename.<br/ */
  files?: (File | Blob)[];
}

export const CreateScriptVersionRequest = /*@__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    scriptName: Schema.String.pipe(T.HttpPath("scriptName")),
    accountId: Schema.String.pipe(T.HttpPath("account_id")),
    bindingsInherit: Schema.optional(Schema.Literal("strict")).pipe(
      T.HttpQuery("bindings_inherit"),
    ),
    metadata: Metadata5,
    files: Schema.optional(
      Schema.Array(UploadableSchema.pipe(T.HttpFormDataFile())),
    ),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/accounts/{account_id}/workers/scripts/{scriptName}/versions",
      contentType: "multipart",
    }),
  ),
) as unknown as Schema.Codec<CreateScriptVersionRequest>;

export interface CreateScriptVersionResponse {
  resources: {
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
          | { name: string; type: "worker_loader" }
          | { name: string; type: "artifacts"; namespace: string }
        )[]
      | null;
    script?: {
      etag?: string | null;
      handlers?: string[] | null;
      lastDeployedFrom?: string | null;
      namedHandlers?:
        | { handlers?: string[] | null; name?: string | null }[]
        | null;
    } | null;
    scriptRuntime?: {
      compatibilityDate?: string | null;
      compatibilityFlags?: string[] | null;
      limits?: { cpuMs?: number | null } | null;
      migrationTag?: string | null;
      usageModel?: "bundled" | "unbound" | "standard" | (string & {}) | null;
    } | null;
  };
  /** Unique identifier for the version. */
  id?: string | null;
  metadata?: {
    authorEmail?: string | null;
    authorId?: string | null;
    createdOn?: string | null;
    hasPreview?: boolean | null;
    modifiedOn?: string | null;
    source?:
      | "unknown"
      | "api"
      | "wrangler"
      | "terraform"
      | "dash"
      | "dash_template"
      | "integration"
      | "quick_editor"
      | "playground"
      | "workersci"
      | (string & {})
      | null;
  } | null;
  /** Sequential version number. */
  number?: number | null;
  /** Time in milliseconds spent on [Worker startup](https://developers.cloudflare.com/workers/platform/limits/#worker-startup-time). */
  startupTimeMs?: number | null;
}

export const CreateScriptVersionResponse = /*@__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    resources: Resources,
    id: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
    metadata: Schema.optional(Schema.Union([Metadata4, Schema.Null])),
    number: Schema.optional(Schema.Union([Schema.Number, Schema.Null])),
    startupTimeMs: Schema.optional(Schema.Union([Schema.Number, Schema.Null])),
  })
    .pipe(
      Schema.encodeKeys({
        resources: "resources",
        id: "id",
        metadata: "metadata",
        number: "number",
        startupTimeMs: "startup_time_ms",
      }),
    )
    .pipe(T.ResponsePath("result")),
) as unknown as Schema.Codec<CreateScriptVersionResponse>;

export type CreateScriptVersionError =
  | DefaultErrors
  | WorkerNotFound
  | InvalidWorkerScript
  | InternalServerError
  | ScriptStartupError
  | ScriptModuleNotFound
  | SecretsStoreBindingNotFound
  | KVNamespaceNotFound
  | R2BucketNotFound
  | D1DatabaseNotFound
  | QueueNotFound
  | ServiceBindingNotFound
  | DurableObjectClassNotFound
  | HyperdriveConfigNotFound
  | VectorizeIndexNotFound
  | DispatchNamespaceNotFound
  | MtlsCertificateNotFound;

export const createScriptVersion: API.OperationMethod<
  CreateScriptVersionRequest,
  CreateScriptVersionResponse,
  CreateScriptVersionError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: CreateScriptVersionRequest,
  output: CreateScriptVersionResponse,
  errors: [
    WorkerNotFound,
    InvalidWorkerScript,
    InternalServerError,
    ScriptStartupError,
    ScriptModuleNotFound,
    SecretsStoreBindingNotFound,
    KVNamespaceNotFound,
    R2BucketNotFound,
    D1DatabaseNotFound,
    QueueNotFound,
    ServiceBindingNotFound,
    DurableObjectClassNotFound,
    HyperdriveConfigNotFound,
    VectorizeIndexNotFound,
    DispatchNamespaceNotFound,
    MtlsCertificateNotFound,
  ],
}));

// =============================================================================
// ServiceEdgePreview
// =============================================================================

export interface CreateServiceEdgePreviewRequest {
  accountId: string;
  serviceName: string;
  environmentName: string;
  /** The session token returned by createZoneEdgePreviewSession or createSubdomainEdgePreviewSession. */
  cfPreviewUploadConfigToken: string;
  metadata?: {
    mainModule?: string;
    bodyPart?: string;
    compatibilityDate?: string;
    compatibilityFlags?: string[];
    usageModel?: "bundled" | "unbound" | "standard" | (string & {});
    bindings?: (
      | { type: "plain_text"; name: string; text: string }
      | { type: "secret_text"; name: string; text: string }
      | { type: "json"; name: string; json: unknown }
      | {
          type: "kv_namespace";
          name: string;
          namespaceId: string;
          raw?: boolean;
        }
      | {
          type: "durable_object_namespace";
          name: string;
          className: string;
          scriptName?: string;
          environment?: string;
          namespaceId?: string;
        }
      | {
          type: "r2_bucket";
          name: string;
          bucketName: string;
          jurisdiction?: string;
          raw?: boolean;
        }
      | {
          type: "d1";
          name: string;
          id: string;
          internalEnv?: string;
          raw?: boolean;
        }
      | {
          type: "queue";
          name: string;
          queueName: string;
          deliveryDelay?: number;
          raw?: boolean;
        }
      | {
          type: "service";
          name: string;
          service: string;
          environment?: string;
          entrypoint?: string;
          crossAccountGrant?: string;
        }
      | { type: "ai"; name: string; staging?: boolean; raw?: boolean }
      | { type: "browser"; name: string; raw?: boolean }
      | { type: "images"; name: string; raw?: boolean }
      | {
          type: "vectorize";
          name: string;
          indexName: string;
          internalEnv?: string;
          raw?: boolean;
        }
      | {
          type: "workflow";
          name: string;
          workflowName: string;
          className: string;
          scriptName?: string;
          raw?: boolean;
        }
      | { type: "hyperdrive"; name: string; id: string }
      | { type: "analytics_engine"; name: string; dataset?: string }
      | {
          type: "dispatch_namespace";
          name: string;
          namespace: string;
          outbound?: {
            worker?: { service?: string; environment?: string };
            params?: { name: string }[];
          };
        }
      | {
          type: "send_email";
          name: string;
          destinationAddress?: string;
          allowedDestinationAddresses?: string[];
          allowedSenderAddresses?: string[];
        }
      | { type: "mtls_certificate"; name: string; certificateId: string }
      | { type: "wasm_module"; name: string; part: string }
      | { type: "text_blob"; name: string; part: string }
      | { type: "data_blob"; name: string; part: string }
      | { type: "pipelines"; name: string; pipeline: string }
      | {
          type: "secrets_store_secret";
          name: string;
          storeId: string;
          secretName: string;
        }
      | { type: "stream"; name: string }
      | { type: "media"; name: string }
      | { type: "version_metadata"; name: string }
      | { type: "assets"; name: string }
      | { type: "worker_loader"; name: string }
      | { type: "logfwdr"; name: string; destination: string }
      | { type: "ai_search_namespace"; name: string; namespace: string }
      | { type: "ai_search"; name: string; instanceName: string }
      | {
          type: "ratelimit";
          name: string;
          namespaceId: string;
          simple: { limit: number; period: "10" | "60" | (string & {}) };
        }
      | { type: "artifacts"; name: string; namespace: string }
      | { type: "unsafe_hello_world"; name: string; enableTimer?: boolean }
      | { type: "flagship"; name: string; appId: string }
      | { type: "vpc_service"; name: string; serviceId: string }
      | {
          type: "vpc_network";
          name: string;
          tunnelId?: string;
          networkId?: string;
        }
      | { type: "inherit"; name: string }
    )[];
    keepBindings?: string[];
    migrations?: {
      oldTag?: string;
      newTag?: string;
      steps?: {
        newClasses?: string[];
        newSqliteClasses?: string[];
        renamedClasses?: { from?: string; to?: string }[];
        deletedClasses?: string[];
      }[];
    };
    capnpSchema?: string;
    logpush?: boolean;
    placement?:
      | { mode: "smart"; hint?: string }
      | { region: string }
      | { host: string }
      | { hostname: string };
    tailConsumers?: { service: string; environment?: string }[];
    streamingTailConsumers?: { service: string; environment?: string }[];
    limits?: { cpuMs?: number; subrequests?: number };
    assets?: {
      jwt?: string;
      config?: {
        htmlHandling?:
          | "auto-trailing-slash"
          | "force-trailing-slash"
          | "drop-trailing-slash"
          | "none"
          | (string & {});
        notFoundHandling?:
          | "single-page-application"
          | "404-page"
          | "none"
          | (string & {});
        runWorkerFirst?: boolean | string[];
        redirects?: string;
        headers?: string;
      };
    };
    observability?: {
      enabled?: boolean;
      headSamplingRate?: number;
      logs?: {
        enabled?: boolean;
        headSamplingRate?: number;
        invocationLogs?: boolean;
        persist?: boolean;
        destinations?: string[];
      };
      traces?: {
        enabled?: boolean;
        headSamplingRate?: number;
        persist?: boolean;
        destinations?: string[];
      };
    };
    containers?: { className: string }[];
    annotations?: unknown;
    keepAssets?: boolean;
    tags?: string[];
  };
  /** Module files comprising the worker script. */
  files?: (File | Blob)[];
  wranglerSessionConfig?:
    | { workersDev: true; minimalMode?: boolean }
    | { routes: string[]; minimalMode?: boolean };
}

export const CreateServiceEdgePreviewRequest = /*@__PURE__*/ Schema.suspend(
  () =>
    Schema.Struct({
      accountId: Schema.String.pipe(T.HttpPath("account_id")),
      serviceName: Schema.String.pipe(T.HttpPath("service_name")),
      environmentName: Schema.String.pipe(T.HttpPath("environment_name")),
      cfPreviewUploadConfigToken: Schema.String.pipe(
        T.HttpHeader("cf-preview-upload-config-token"),
      ),
      metadata: Schema.optional(CreateScriptEdgePreviewRequestMetadata),
      files: Schema.optional(
        Schema.Array(UploadableSchema.pipe(T.HttpFormDataFile())),
      ),
      wranglerSessionConfig: Schema.optional(
        Schema.Union([
          CreateScriptEdgePreviewRequestWranglerSessionConfig,
          CreateScriptEdgePreviewRequestWranglerSessionConfig1,
        ]),
      ),
    }).pipe(
      Schema.encodeKeys({
        metadata: "metadata",
        files: "files",
        wranglerSessionConfig: "wrangler-session-config",
      }),
      T.Http({
        method: "POST",
        path: "/accounts/{account_id}/workers/services/{service_name}/environments/{environment_name}/edge-preview",
        contentType: "multipart",
      }),
    ),
) as unknown as Schema.Codec<CreateServiceEdgePreviewRequest>;

export interface CreateServiceEdgePreviewResponse {
  /** Token to send as cf-workers-preview-token header when making requests to the preview host. */
  previewToken: string;
  /** URL for tailing live logs from the preview worker. */
  tailUrl?: string | null;
}

export const CreateServiceEdgePreviewResponse = /*@__PURE__*/ Schema.suspend(
  () =>
    Schema.Struct({
      previewToken: Schema.String,
      tailUrl: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
    })
      .pipe(
        Schema.encodeKeys({
          previewToken: "preview_token",
          tailUrl: "tail_url",
        }),
      )
      .pipe(T.ResponsePath("result")),
) as unknown as Schema.Codec<CreateServiceEdgePreviewResponse>;

export type CreateServiceEdgePreviewError = DefaultErrors | InvalidRoute;

export const createServiceEdgePreview: API.OperationMethod<
  CreateServiceEdgePreviewRequest,
  CreateServiceEdgePreviewResponse,
  CreateServiceEdgePreviewError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: CreateServiceEdgePreviewRequest,
  output: CreateServiceEdgePreviewResponse,
  errors: [InvalidRoute],
}));

// =============================================================================
// Subdomain
// =============================================================================

export interface GetSubdomainRequest {
  /** Identifier. */
  accountId: string;
}

export const GetSubdomainRequest = /*@__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    accountId: Schema.String.pipe(T.HttpPath("account_id")),
  }).pipe(
    T.Http({ method: "GET", path: "/accounts/{account_id}/workers/subdomain" }),
  ),
) as unknown as Schema.Codec<GetSubdomainRequest>;

export interface GetSubdomainResponse {
  subdomain: string;
}

export const GetSubdomainResponse = /*@__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    subdomain: Schema.String,
  }).pipe(T.ResponsePath("result")),
) as unknown as Schema.Codec<GetSubdomainResponse>;

export type GetSubdomainError =
  | DefaultErrors
  | InvalidRoute
  | SubdomainNotFound
  | Forbidden;

export const getSubdomain: API.OperationMethod<
  GetSubdomainRequest,
  GetSubdomainResponse,
  GetSubdomainError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: GetSubdomainRequest,
  output: GetSubdomainResponse,
  errors: [InvalidRoute, SubdomainNotFound, Forbidden],
}));

export interface PutSubdomainRequest {
  /** Path param: Identifier. */
  accountId: string;
  /** Body param */
  subdomain: string;
}

export const PutSubdomainRequest = /*@__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    accountId: Schema.String.pipe(T.HttpPath("account_id")),
    subdomain: Schema.String,
  }).pipe(
    T.Http({ method: "PUT", path: "/accounts/{account_id}/workers/subdomain" }),
  ),
) as unknown as Schema.Codec<PutSubdomainRequest>;

export interface PutSubdomainResponse {
  subdomain: string;
}

export const PutSubdomainResponse = /*@__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    subdomain: Schema.String,
  }).pipe(T.ResponsePath("result")),
) as unknown as Schema.Codec<PutSubdomainResponse>;

export type PutSubdomainError =
  | DefaultErrors
  | SubdomainAlreadyExists
  | InvalidRoute
  | Forbidden;

export const putSubdomain: API.OperationMethod<
  PutSubdomainRequest,
  PutSubdomainResponse,
  PutSubdomainError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: PutSubdomainRequest,
  output: PutSubdomainResponse,
  errors: [SubdomainAlreadyExists, InvalidRoute, Forbidden],
}));

export interface DeleteSubdomainRequest {
  /** Identifier. */
  accountId: string;
}

export const DeleteSubdomainRequest = /*@__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    accountId: Schema.String.pipe(T.HttpPath("account_id")),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/accounts/{account_id}/workers/subdomain",
    }),
  ),
) as unknown as Schema.Codec<DeleteSubdomainRequest>;

export type DeleteSubdomainResponse = unknown;

export const DeleteSubdomainResponse = /*@__PURE__*/ Schema.suspend(
  () => Schema.Unknown,
) as unknown as Schema.Codec<DeleteSubdomainResponse>;

export type DeleteSubdomainError =
  | DefaultErrors
  | InvalidRoute
  | SubdomainNotFound
  | Forbidden;

export const deleteSubdomain: API.OperationMethod<
  DeleteSubdomainRequest,
  DeleteSubdomainResponse,
  DeleteSubdomainError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: DeleteSubdomainRequest,
  output: DeleteSubdomainResponse,
  errors: [InvalidRoute, SubdomainNotFound, Forbidden],
}));

// =============================================================================
// SubdomainEdgePreviewSession
// =============================================================================

export interface CreateSubdomainEdgePreviewSessionRequest {
  accountId: string;
}

export const CreateSubdomainEdgePreviewSessionRequest =
  /*@__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      accountId: Schema.String.pipe(T.HttpPath("account_id")),
    }).pipe(
      T.Http({
        method: "GET",
        path: "/accounts/{account_id}/workers/subdomain/edge-preview",
      }),
    ),
  ) as unknown as Schema.Codec<CreateSubdomainEdgePreviewSessionRequest>;

export interface CreateSubdomainEdgePreviewSessionResponse {
  /** Session token used as cf-preview-upload-config-token when uploading a preview worker. */
  token: string;
  /** Optional URL to exchange the token for a re-encoded version. */
  exchangeUrl?: string | null;
}

export const CreateSubdomainEdgePreviewSessionResponse =
  /*@__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      token: Schema.String,
      exchangeUrl: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
    })
      .pipe(Schema.encodeKeys({ token: "token", exchangeUrl: "exchange_url" }))
      .pipe(T.ResponsePath("result")),
  ) as unknown as Schema.Codec<CreateSubdomainEdgePreviewSessionResponse>;

export type CreateSubdomainEdgePreviewSessionError =
  | DefaultErrors
  | InvalidRoute;

export const createSubdomainEdgePreviewSession: API.OperationMethod<
  CreateSubdomainEdgePreviewSessionRequest,
  CreateSubdomainEdgePreviewSessionResponse,
  CreateSubdomainEdgePreviewSessionError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: CreateSubdomainEdgePreviewSessionRequest,
  output: CreateSubdomainEdgePreviewSessionResponse,
  errors: [InvalidRoute],
}));

// =============================================================================
// TailHeartbeatObservabilityTelemetry
// =============================================================================

export interface LiveTailHeartbeatObservabilityTelemetryRequest {
  /** Path param: Your Cloudflare account ID. */
  accountId: string;
  /** Body param */
  scriptId?: string;
}

export const LiveTailHeartbeatObservabilityTelemetryRequest =
  /*@__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      accountId: Schema.String.pipe(T.HttpPath("account_id")),
      scriptId: Schema.optional(Schema.String),
    }).pipe(
      T.Http({
        method: "POST",
        path: "/accounts/{account_id}/workers/observability/telemetry/live-tail/heartbeat",
      }),
    ),
  ) as unknown as Schema.Codec<LiveTailHeartbeatObservabilityTelemetryRequest>;

export type LiveTailHeartbeatObservabilityTelemetryResponse = unknown;

export const LiveTailHeartbeatObservabilityTelemetryResponse =
  /*@__PURE__*/ Schema.suspend(() =>
    Schema.Unknown.pipe(T.ResponsePath("result")),
  ) as unknown as Schema.Codec<LiveTailHeartbeatObservabilityTelemetryResponse>;

export type LiveTailHeartbeatObservabilityTelemetryError = DefaultErrors;

export const liveTailHeartbeatObservabilityTelemetry: API.OperationMethod<
  LiveTailHeartbeatObservabilityTelemetryRequest,
  LiveTailHeartbeatObservabilityTelemetryResponse,
  LiveTailHeartbeatObservabilityTelemetryError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: LiveTailHeartbeatObservabilityTelemetryRequest,
  output: LiveTailHeartbeatObservabilityTelemetryResponse,
  errors: [],
}));

// =============================================================================
// TailObservabilityTelemetry
// =============================================================================

export interface LiveTailObservabilityTelemetryRequest {
  /** Path param: Your Cloudflare account ID. */
  accountId: string;
  /** Body param: Set a flag to describe how to combine the filters on the query. */
  filterCombination?: "and" | "or" | "AND" | "OR" | (string & {});
  /** Body param: Apply filters to the query. Supports nested groups via kind: 'group'. */
  filters?: (
    | {
        filterCombination: "and" | "or" | "AND" | "OR" | (string & {});
        filters: (
          | {
              filterCombination: "and" | "or" | "AND" | "OR" | (string & {});
              filters: unknown[];
              kind: "group";
            }
          | {
              key: string;
              operation:
                | "includes"
                | "not_includes"
                | "starts_with"
                | "ends_with"
                | "regex"
                | "exists"
                | "is_null"
                | "in"
                | "not_in"
                | "eq"
                | "neq"
                | "gt"
                | "gte"
                | "lt"
                | "lte"
                | "="
                | "!="
                | ">"
                | ">="
                | "<"
                | "<="
                | "INCLUDES"
                | "DOES_NOT_INCLUDE"
                | "MATCH_REGEX"
                | "EXISTS"
                | "DOES_NOT_EXIST"
                | "IN"
                | "NOT_IN"
                | "STARTS_WITH"
                | "ENDS_WITH"
                | (string & {});
              type: "string" | "number" | "boolean" | (string & {});
              kind?: "filter";
              value?: string | number | boolean;
            }
        )[];
        kind: "group";
      }
    | {
        key: string;
        operation:
          | "includes"
          | "not_includes"
          | "starts_with"
          | "ends_with"
          | "regex"
          | "exists"
          | "is_null"
          | "in"
          | "not_in"
          | "eq"
          | "neq"
          | "gt"
          | "gte"
          | "lt"
          | "lte"
          | "="
          | "!="
          | ">"
          | ">="
          | "<"
          | "<="
          | "INCLUDES"
          | "DOES_NOT_INCLUDE"
          | "MATCH_REGEX"
          | "EXISTS"
          | "DOES_NOT_EXIST"
          | "IN"
          | "NOT_IN"
          | "STARTS_WITH"
          | "ENDS_WITH"
          | (string & {});
        type: "string" | "number" | "boolean" | (string & {});
        kind?: "filter";
        value?: string | number | boolean;
      }
  )[];
  /** Body param */
  scriptId?: string;
}

export const LiveTailObservabilityTelemetryRequest =
  /*@__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      accountId: Schema.String.pipe(T.HttpPath("account_id")),
      filterCombination: Schema.optional(
        Schema.Union([
          Schema.Literals(["and", "or", "AND", "OR"]),
          Schema.String,
        ]),
      ),
      filters: Schema.optional(
        Schema.Array(
          Schema.Union([
            CreateObservabilitySharedQueryRequestParametersFilter,
            WorkersObservabilityFilterLeaf,
          ]),
        ),
      ),
      scriptId: Schema.optional(Schema.String),
    }).pipe(
      T.Http({
        method: "POST",
        path: "/accounts/{account_id}/workers/observability/telemetry/live-tail",
      }),
    ),
  ) as unknown as Schema.Codec<LiveTailObservabilityTelemetryRequest>;

export interface LiveTailObservabilityTelemetryResponse {
  /** WebSocket URL clients connect to in order to stream live tail events. */
  wsUrl: string;
}

export const LiveTailObservabilityTelemetryResponse =
  /*@__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      wsUrl: Schema.String,
    }).pipe(T.ResponsePath("result")),
  ) as unknown as Schema.Codec<LiveTailObservabilityTelemetryResponse>;

export type LiveTailObservabilityTelemetryError = DefaultErrors;

export const liveTailObservabilityTelemetry: API.OperationMethod<
  LiveTailObservabilityTelemetryRequest,
  LiveTailObservabilityTelemetryResponse,
  LiveTailObservabilityTelemetryError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: LiveTailObservabilityTelemetryRequest,
  output: LiveTailObservabilityTelemetryResponse,
  errors: [],
}));

// =============================================================================
// ZoneEdgePreviewSession
// =============================================================================

export interface CreateZoneEdgePreviewSessionRequest {
  zoneId: string;
}

export const CreateZoneEdgePreviewSessionRequest = /*@__PURE__*/ Schema.suspend(
  () =>
    Schema.Struct({
      zoneId: Schema.String.pipe(T.HttpPath("zone_id")),
    }).pipe(
      T.Http({ method: "GET", path: "/zones/{zone_id}/workers/edge-preview" }),
    ),
) as unknown as Schema.Codec<CreateZoneEdgePreviewSessionRequest>;

export interface CreateZoneEdgePreviewSessionResponse {
  /** Session token used as cf-preview-upload-config-token when uploading a preview worker. */
  token: string;
  /** Optional URL to exchange the token for a re-encoded version. */
  exchangeUrl?: string | null;
}

export const CreateZoneEdgePreviewSessionResponse =
  /*@__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      token: Schema.String,
      exchangeUrl: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
    })
      .pipe(Schema.encodeKeys({ token: "token", exchangeUrl: "exchange_url" }))
      .pipe(T.ResponsePath("result")),
  ) as unknown as Schema.Codec<CreateZoneEdgePreviewSessionResponse>;

export type CreateZoneEdgePreviewSessionError = DefaultErrors | InvalidRoute;

export const createZoneEdgePreviewSession: API.OperationMethod<
  CreateZoneEdgePreviewSessionRequest,
  CreateZoneEdgePreviewSessionResponse,
  CreateZoneEdgePreviewSessionError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: CreateZoneEdgePreviewSessionRequest,
  output: CreateZoneEdgePreviewSessionResponse,
  errors: [InvalidRoute],
}));
