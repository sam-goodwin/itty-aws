/**
 * Cloudflare R2 API
 *
 * Generated from Cloudflare TypeScript SDK.
 * DO NOT EDIT - regenerate with: bun scripts/generate.ts --service r2
 */

import * as Schema from "@distilled.cloud/core/schema";
import type * as HttpClient from "effect/unstable/http/HttpClient";
import * as API from "../client/api.ts";
import * as T from "../traits.ts";
import type { Credentials } from "../credentials.ts";
import { type DefaultErrors } from "../errors.ts";
import { BinaryBodySchema } from "../schemas.ts";
import { BinaryStreamResponseSchema } from "../schemas.ts";
import type * as Stream from "effect/Stream";
import type * as HttpClientError from "effect/unstable/http/HttpClientError";
import { SensitiveString } from "../sensitive.ts";

// =============================================================================
// Errors
// =============================================================================

export class BucketAlreadyExists extends T.applyErrorMatchers(
  Schema.TaggedErrorClass<BucketAlreadyExists>()("BucketAlreadyExists", {
    code: Schema.Number,
    message: Schema.String,
  }),
  [{ code: 10004 }],
) {}

export class BucketNotFound extends T.applyErrorMatchers(
  Schema.TaggedErrorClass<BucketNotFound>()("BucketNotFound", {
    code: Schema.Number,
    message: Schema.String,
  }),
  [{ code: 10085 }],
) {}

export class CustomDomainInUse extends T.applyErrorMatchers(
  Schema.TaggedErrorClass<CustomDomainInUse>()("CustomDomainInUse", {
    code: Schema.Number,
    message: Schema.String,
  }),
  [{ status: 409, message: { includes: "in use" } }],
) {}

export class DomainNotFound extends T.applyErrorMatchers(
  Schema.TaggedErrorClass<DomainNotFound>()("DomainNotFound", {
    code: Schema.Number,
    message: Schema.String,
  }),
  [{ code: 10053 }],
) {}

export class EventNotificationConfigNotFound extends T.applyErrorMatchers(
  Schema.TaggedErrorClass<EventNotificationConfigNotFound>()(
    "EventNotificationConfigNotFound",
    { code: Schema.Number, message: Schema.String },
  ),
  [{ code: 11011 }],
) {}

export class EventNotificationRuleConflict extends T.applyErrorMatchers(
  Schema.TaggedErrorClass<EventNotificationRuleConflict>()(
    "EventNotificationRuleConflict",
    { code: Schema.Number, message: Schema.String },
  ),
  [{ code: 11020 }],
) {}

export class Forbidden extends T.applyErrorMatchers(
  Schema.TaggedErrorClass<Forbidden>()("Forbidden", {
    code: Schema.Number,
    message: Schema.String,
  }),
  [{ status: 403 }],
) {}

export class InvalidBucketName extends T.applyErrorMatchers(
  Schema.TaggedErrorClass<InvalidBucketName>()("InvalidBucketName", {
    code: Schema.Number,
    message: Schema.String,
  }),
  [{ code: 10005 }],
) {}

export class InvalidEventNotificationConfig extends T.applyErrorMatchers(
  Schema.TaggedErrorClass<InvalidEventNotificationConfig>()(
    "InvalidEventNotificationConfig",
    { code: Schema.Number, message: Schema.String },
  ),
  [{ code: 11014 }, { code: 11019 }],
) {}

export class InvalidRoute extends T.applyErrorMatchers(
  Schema.TaggedErrorClass<InvalidRoute>()("InvalidRoute", {
    code: Schema.Number,
    message: Schema.String,
  }),
  [{ code: 7003 }],
) {}

export class InvalidUpstreamCredentials extends T.applyErrorMatchers(
  Schema.TaggedErrorClass<InvalidUpstreamCredentials>()(
    "InvalidUpstreamCredentials",
    { code: Schema.Number, message: Schema.String },
  ),
  [{ code: 10063 }],
) {}

export class NoCorsConfiguration extends T.applyErrorMatchers(
  Schema.TaggedErrorClass<NoCorsConfiguration>()("NoCorsConfiguration", {
    code: Schema.Number,
    message: Schema.String,
  }),
  [{ code: 10059 }],
) {}

export class NoEventNotificationConfig extends T.applyErrorMatchers(
  Schema.TaggedErrorClass<NoEventNotificationConfig>()(
    "NoEventNotificationConfig",
    { code: Schema.Number, message: Schema.String },
  ),
  [{ code: 11015 }],
) {}

export class NoRoute extends T.applyErrorMatchers(
  Schema.TaggedErrorClass<NoRoute>()("NoRoute", {
    code: Schema.Number,
    message: Schema.String,
  }),
  [{ code: 10015 }],
) {}

export class NoSuchBucket extends T.applyErrorMatchers(
  Schema.TaggedErrorClass<NoSuchBucket>()("NoSuchBucket", {
    code: Schema.Number,
    message: Schema.String,
  }),
  [{ code: 10006 }],
) {}

export class NoSuchKey extends T.applyErrorMatchers(
  Schema.TaggedErrorClass<NoSuchKey>()("NoSuchKey", {
    code: Schema.Number,
    message: Schema.String,
  }),
  [{ status: 404, message: { includes: "specified key does not exist" } }],
) {}

export class QueueNotFound extends T.applyErrorMatchers(
  Schema.TaggedErrorClass<QueueNotFound>()("QueueNotFound", {
    code: Schema.Number,
    message: Schema.String,
  }),
  [{ code: 11000 }],
) {}

// =============================================================================
// Shared nested schemas (hoisted, module-private)
// =============================================================================

interface Bucket {
  /** Creation timestamp. */
  creationDate?: string | null;
  /** Jurisdiction where objects in this bucket are guaranteed to be stored. */
  jurisdiction?: "default" | "eu" | "fedramp" | (string & {}) | null;
  /** Location of the bucket. */
  location?:
    | "apac"
    | "eeur"
    | "enam"
    | "weur"
    | "wnam"
    | "oc"
    | "APAC"
    | "EEUR"
    | "ENAM"
    | "WEUR"
    | "WNAM"
    | "OC"
    | (string & {})
    | null;
  /** Name of the bucket. */
  name?: string | null;
  /** Storage class for newly uploaded objects, unless specified otherwise. */
  storageClass?: "Standard" | "InfrequentAccess" | (string & {}) | null;
}
const Bucket = /*@__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    creationDate: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
    jurisdiction: Schema.optional(
      Schema.Union([
        Schema.Union([
          Schema.Literals(["default", "eu", "fedramp"]),
          Schema.String,
        ]),
        Schema.Null,
      ]),
    ),
    location: Schema.optional(
      Schema.Union([
        Schema.Union([
          Schema.Literals([
            "apac",
            "eeur",
            "enam",
            "weur",
            "wnam",
            "oc",
            "APAC",
            "EEUR",
            "ENAM",
            "WEUR",
            "WNAM",
            "OC",
          ]),
          Schema.String,
        ]),
        Schema.Null,
      ]),
    ),
    name: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
    storageClass: Schema.optional(
      Schema.Union([
        Schema.Union([
          Schema.Literals(["Standard", "InfrequentAccess"]),
          Schema.String,
        ]),
        Schema.Null,
      ]),
    ),
  }).pipe(
    Schema.encodeKeys({
      creationDate: "creation_date",
      jurisdiction: "jurisdiction",
      location: "location",
      name: "name",
      storageClass: "storage_class",
    }),
  ),
) as unknown as Schema.Codec<Bucket>;

interface Allowed {
  /** Specifies the value for the Access-Control-Allow-Methods header R2 sets when requesting objects in a bucket from a browser. */
  methods: ("GET" | "PUT" | "POST" | "DELETE" | "HEAD" | (string & {}))[];
  /** Specifies the value for the Access-Control-Allow-Origin header R2 sets when requesting objects in a bucket from a browser. */
  origins: string[];
  /** Specifies the value for the Access-Control-Allow-Headers header R2 sets when requesting objects in this bucket from a browser. Cross-origin requests that include custom headers (e.g. x-user-id) should */
  headers?: string[] | null;
}
const Allowed = /*@__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    methods: Schema.Array(
      Schema.Union([
        Schema.Literals(["GET", "PUT", "POST", "DELETE", "HEAD"]),
        Schema.String,
      ]),
    ),
    origins: Schema.Array(Schema.String),
    headers: Schema.optional(
      Schema.Union([Schema.Array(Schema.String), Schema.Null]),
    ),
  }),
) as unknown as Schema.Codec<Allowed>;

interface Rule {
  /** Object specifying allowed origins, methods and headers for this CORS rule. */
  allowed: {
    methods: ("GET" | "PUT" | "POST" | "DELETE" | "HEAD" | (string & {}))[];
    origins: string[];
    headers?: string[] | null;
  };
  /** Identifier for this rule. */
  id?: string | null;
  /** Specifies the headers that can be exposed back, and accessed by, the JavaScript making the cross-origin request. If you need to access headers beyond the safelisted response headers, such as Content-E */
  exposeHeaders?: string[] | null;
  /** Specifies the amount of time (in seconds) browsers are allowed to cache CORS preflight responses. Browsers may limit this to 2 hours or less, even if the maximum value (86400) is specified. */
  maxAgeSeconds?: number | null;
}
const Rule = /*@__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    allowed: Allowed,
    id: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
    exposeHeaders: Schema.optional(
      Schema.Union([Schema.Array(Schema.String), Schema.Null]),
    ),
    maxAgeSeconds: Schema.optional(Schema.Union([Schema.Number, Schema.Null])),
  }),
) as unknown as Schema.Codec<Rule>;

interface Status {
  /** Ownership status of the domain. */
  ownership:
    | "pending"
    | "active"
    | "deactivated"
    | "blocked"
    | "error"
    | "unknown"
    | (string & {});
  /** SSL certificate status. */
  ssl:
    | "initializing"
    | "pending"
    | "active"
    | "deactivated"
    | "error"
    | "unknown"
    | (string & {});
}
const Status = /*@__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    ownership: Schema.Union([
      Schema.Literals([
        "pending",
        "active",
        "deactivated",
        "blocked",
        "error",
        "unknown",
      ]),
      Schema.String,
    ]),
    ssl: Schema.Union([
      Schema.Literals([
        "initializing",
        "pending",
        "active",
        "deactivated",
        "error",
        "unknown",
      ]),
      Schema.String,
    ]),
  }),
) as unknown as Schema.Codec<Status>;

interface Domain {
  /** Domain name of the custom domain to be added. */
  domain: string;
  /** Whether this bucket is publicly accessible at the specified custom domain. */
  enabled: boolean;
  status: {
    ownership:
      | "pending"
      | "active"
      | "deactivated"
      | "blocked"
      | "error"
      | "unknown"
      | (string & {});
    ssl:
      | "initializing"
      | "pending"
      | "active"
      | "deactivated"
      | "error"
      | "unknown"
      | (string & {});
  };
  /** An allowlist of ciphers for TLS termination. These ciphers must be in the BoringSSL format. */
  ciphers?: string[] | null;
  /** Minimum TLS Version the custom domain will accept for incoming connections. If not set, defaults to 1.0. */
  minTLS?: "1.0" | "1.1" | "1.2" | "1.3" | (string & {}) | null;
  /** Zone ID of the custom domain resides in. */
  zoneId?: string | null;
  /** Zone that the custom domain resides in. */
  zoneName?: string | null;
}
const Domain = /*@__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    domain: Schema.String,
    enabled: Schema.Boolean,
    status: Status,
    ciphers: Schema.optional(
      Schema.Union([Schema.Array(Schema.String), Schema.Null]),
    ),
    minTLS: Schema.optional(
      Schema.Union([
        Schema.Union([
          Schema.Literals(["1.0", "1.1", "1.2", "1.3"]),
          Schema.String,
        ]),
        Schema.Null,
      ]),
    ),
    zoneId: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
    zoneName: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
  }),
) as unknown as Schema.Codec<Domain>;

interface Rule2 {
  /** Array of R2 object actions that will trigger notifications. */
  actions: (
    | "PutObject"
    | "CopyObject"
    | "DeleteObject"
    | "CompleteMultipartUpload"
    | "LifecycleDeletion"
    | (string & {})
  )[];
  /** Timestamp when the rule was created. */
  createdAt?: string | null;
  /** A description that can be used to identify the event notification rule after creation. */
  description?: string | null;
  /** Notifications will be sent only for objects with this prefix. */
  prefix?: string | null;
  /** Rule ID. */
  ruleId?: string | null;
  /** Notifications will be sent only for objects with this suffix. */
  suffix?: string | null;
}
const Rule2 = /*@__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    actions: Schema.Array(
      Schema.Union([
        Schema.Literals([
          "PutObject",
          "CopyObject",
          "DeleteObject",
          "CompleteMultipartUpload",
          "LifecycleDeletion",
        ]),
        Schema.String,
      ]),
    ),
    createdAt: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
    description: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
    prefix: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
    ruleId: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
    suffix: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
  }),
) as unknown as Schema.Codec<Rule2>;

interface Queue {
  /** Queue ID. */
  queueId?: string | null;
  /** Name of the queue. */
  queueName?: string | null;
  rules?:
    | {
        actions: (
          | "PutObject"
          | "CopyObject"
          | "DeleteObject"
          | "CompleteMultipartUpload"
          | "LifecycleDeletion"
          | (string & {})
        )[];
        createdAt?: string | null;
        description?: string | null;
        prefix?: string | null;
        ruleId?: string | null;
        suffix?: string | null;
      }[]
    | null;
}
const Queue = /*@__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    queueId: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
    queueName: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
    rules: Schema.optional(Schema.Union([Schema.Array(Rule2), Schema.Null])),
  }),
) as unknown as Schema.Codec<Queue>;

interface Rule3 {
  /** Array of R2 object actions that will trigger notifications. */
  actions: (
    | "PutObject"
    | "CopyObject"
    | "DeleteObject"
    | "CompleteMultipartUpload"
    | "LifecycleDeletion"
    | (string & {})
  )[];
  /** A description that can be used to identify the event notification rule after creation. */
  description?: string | null;
  /** Notifications will be sent only for objects with this prefix. */
  prefix?: string | null;
  /** Notifications will be sent only for objects with this suffix. */
  suffix?: string | null;
}
const Rule3 = /*@__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    actions: Schema.Array(
      Schema.Union([
        Schema.Literals([
          "PutObject",
          "CopyObject",
          "DeleteObject",
          "CompleteMultipartUpload",
          "LifecycleDeletion",
        ]),
        Schema.String,
      ]),
    ),
    description: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
    prefix: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
    suffix: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
  }),
) as unknown as Schema.Codec<Rule3>;

interface Conditions {
  /** Transitions will only apply to objects/uploads in the bucket that start with the given prefix, an empty prefix can be provided to scope rule to all objects/uploads. */
  prefix?: string | null;
}
const Conditions = /*@__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    prefix: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
  }),
) as unknown as Schema.Codec<Conditions>;

interface Condition {
  maxAge: number;
  type: "Age";
}
const Condition = /*@__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    maxAge: Schema.Number,
    type: Schema.Literal("Age"),
  }),
) as unknown as Schema.Codec<Condition>;

interface AbortMultipartUploadsTransition {
  /** Condition for lifecycle transitions to apply after an object reaches an age in seconds. */
  condition?: { maxAge: number; type: "Age" } | null;
}
const AbortMultipartUploadsTransition =
  /*@__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      condition: Schema.optional(Schema.Union([Condition, Schema.Null])),
    }),
  ) as unknown as Schema.Codec<AbortMultipartUploadsTransition>;

interface R2LifecycleDateCondition {
  date: string;
  type: "Date";
}
const R2LifecycleDateCondition = /*@__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    date: Schema.String,
    type: Schema.Literal("Date"),
  }),
) as unknown as Schema.Codec<R2LifecycleDateCondition>;

interface DeleteObjectsTransition {
  /** Condition for lifecycle transitions to apply after an object reaches an age in seconds. */
  condition?:
    | { maxAge: number; type: "Age" }
    | { date: string; type: "Date" }
    | null;
}
const DeleteObjectsTransition = /*@__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    condition: Schema.optional(
      Schema.Union([
        Schema.Union([Condition, R2LifecycleDateCondition]),
        Schema.Null,
      ]),
    ),
  }),
) as unknown as Schema.Codec<DeleteObjectsTransition>;

interface StorageClassTransition {
  /** Condition for lifecycle transitions to apply after an object reaches an age in seconds. */
  condition: { maxAge: number; type: "Age" } | { date: string; type: "Date" };
  storageClass: "InfrequentAccess";
}
const StorageClassTransition = /*@__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    condition: Schema.Union([Condition, R2LifecycleDateCondition]),
    storageClass: Schema.Literal("InfrequentAccess"),
  }),
) as unknown as Schema.Codec<StorageClassTransition>;

interface Rule4 {
  /** Unique identifier for this rule. */
  id: string;
  /** Conditions that apply to all transitions of this rule. */
  conditions: { prefix?: string | null };
  /** Whether or not this rule is in effect. */
  enabled: boolean;
  /** Transition to abort ongoing multipart uploads. */
  abortMultipartUploadsTransition?: {
    condition?: { maxAge: number; type: "Age" } | null;
  } | null;
  /** Transition to delete objects. */
  deleteObjectsTransition?: {
    condition?:
      | { maxAge: number; type: "Age" }
      | { date: string; type: "Date" }
      | null;
  } | null;
  /** Transitions to change the storage class of objects. */
  storageClassTransitions?:
    | {
        condition:
          | { maxAge: number; type: "Age" }
          | { date: string; type: "Date" };
        storageClass: "InfrequentAccess";
      }[]
    | null;
}
const Rule4 = /*@__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    id: Schema.String,
    conditions: Conditions,
    enabled: Schema.Boolean,
    abortMultipartUploadsTransition: Schema.optional(
      Schema.Union([AbortMultipartUploadsTransition, Schema.Null]),
    ),
    deleteObjectsTransition: Schema.optional(
      Schema.Union([DeleteObjectsTransition, Schema.Null]),
    ),
    storageClassTransitions: Schema.optional(
      Schema.Union([Schema.Array(StorageClassTransition), Schema.Null]),
    ),
  }),
) as unknown as Schema.Codec<Rule4>;

interface Conditions2 {
  /** Transitions will only apply to objects/uploads in the bucket that start with the given prefix, an empty prefix can be provided to scope rule to all objects/uploads. */
  prefix: string;
}
const Conditions2 = /*@__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    prefix: Schema.String,
  }),
) as unknown as Schema.Codec<Conditions2>;

interface Rule5 {
  /** Unique identifier for this rule. */
  id: string;
  /** Conditions that apply to all transitions of this rule. */
  conditions: { prefix: string };
  /** Whether or not this rule is in effect. */
  enabled: boolean;
  /** Transition to abort ongoing multipart uploads. */
  abortMultipartUploadsTransition?: {
    condition?: { maxAge: number; type: "Age" } | null;
  } | null;
  /** Transition to delete objects. */
  deleteObjectsTransition?: {
    condition?:
      | { maxAge: number; type: "Age" }
      | { date: string; type: "Date" }
      | null;
  } | null;
  /** Transitions to change the storage class of objects. */
  storageClassTransitions?:
    | {
        condition:
          | { maxAge: number; type: "Age" }
          | { date: string; type: "Date" };
        storageClass: "InfrequentAccess";
      }[]
    | null;
}
const Rule5 = /*@__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    id: Schema.String,
    conditions: Conditions2,
    enabled: Schema.Boolean,
    abortMultipartUploadsTransition: Schema.optional(
      Schema.Union([AbortMultipartUploadsTransition, Schema.Null]),
    ),
    deleteObjectsTransition: Schema.optional(
      Schema.Union([DeleteObjectsTransition, Schema.Null]),
    ),
    storageClassTransitions: Schema.optional(
      Schema.Union([Schema.Array(StorageClassTransition), Schema.Null]),
    ),
  }),
) as unknown as Schema.Codec<Rule5>;

interface R2LockRuleAgeCondition {
  maxAgeSeconds: number;
  type: "Age";
}
const R2LockRuleAgeCondition = /*@__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    maxAgeSeconds: Schema.Number,
    type: Schema.Literal("Age"),
  }),
) as unknown as Schema.Codec<R2LockRuleAgeCondition>;

interface R2LockRuleIndefiniteCondition {
  type: "Indefinite";
}
const R2LockRuleIndefiniteCondition =
  /*@__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      type: Schema.Literal("Indefinite"),
    }),
  ) as unknown as Schema.Codec<R2LockRuleIndefiniteCondition>;

interface Rule6 {
  /** Unique identifier for this rule. */
  id: string;
  /** Condition to apply a lock rule to an object for how long in seconds. */
  condition:
    | { maxAgeSeconds: number; type: "Age" }
    | { date: string; type: "Date" }
    | { type: "Indefinite" };
  /** Whether or not this rule is in effect. */
  enabled: boolean;
  /** Rule will only apply to objects/uploads in the bucket that start with the given prefix, an empty prefix can be provided to scope rule to all objects/uploads. */
  prefix?: string | null;
}
const Rule6 = /*@__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    id: Schema.String,
    condition: Schema.Union([
      R2LockRuleAgeCondition,
      R2LifecycleDateCondition,
      R2LockRuleIndefiniteCondition,
    ]),
    enabled: Schema.Boolean,
    prefix: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
  }),
) as unknown as Schema.Codec<Rule6>;

interface Published {
  /** Amount of. */
  metadataSize?: number | null;
  /** Number of objects stored. */
  objects?: number | null;
  /** Amount of storage used by object data. */
  payloadSize?: number | null;
}
const Published = /*@__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    metadataSize: Schema.optional(Schema.Union([Schema.Number, Schema.Null])),
    objects: Schema.optional(Schema.Union([Schema.Number, Schema.Null])),
    payloadSize: Schema.optional(Schema.Union([Schema.Number, Schema.Null])),
  }),
) as unknown as Schema.Codec<Published>;

interface InfrequentAccess {
  /** Metrics on number of objects/amount of storage used. */
  published?: {
    metadataSize?: number | null;
    objects?: number | null;
    payloadSize?: number | null;
  } | null;
  /** Metrics on number of objects/amount of storage used. */
  uploaded?: {
    metadataSize?: number | null;
    objects?: number | null;
    payloadSize?: number | null;
  } | null;
}
const InfrequentAccess = /*@__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    published: Schema.optional(Schema.Union([Published, Schema.Null])),
    uploaded: Schema.optional(Schema.Union([Published, Schema.Null])),
  }),
) as unknown as Schema.Codec<InfrequentAccess>;

interface Httpmetadata {
  /** Specifies caching behavior for the object. */
  cacheControl?: string | null;
  /** The date and time at which the object's cache entry expires. */
  cacheExpiry?: string | null;
  /** Specifies presentational information for the object. */
  contentDisposition?: string | null;
  /** Specifies the content encoding applied to the object. */
  contentEncoding?: string | null;
  /** The language of the object content. */
  contentLanguage?: string | null;
  /** The MIME type of the object. */
  contentType?: string | null;
}
const Httpmetadata = /*@__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    cacheControl: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
    cacheExpiry: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
    contentDisposition: Schema.optional(
      Schema.Union([Schema.String, Schema.Null]),
    ),
    contentEncoding: Schema.optional(
      Schema.Union([Schema.String, Schema.Null]),
    ),
    contentLanguage: Schema.optional(
      Schema.Union([Schema.String, Schema.Null]),
    ),
    contentType: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
  }),
) as unknown as Schema.Codec<Httpmetadata>;

interface ListBucketObjectsResponseResult {
  /** Custom metadata key-value pairs associated with the object. */
  customMetadata?: Record<string, unknown> | null;
  /** The entity tag for the object. In JSON list/get responses this is the raw hex digest (without surrounding quotes). The HTTP `ETag` response header on Get Object follows RFC 7232 and IS wrapped in surr */
  etag?: string | null;
  /** HTTP metadata associated with an R2 object. */
  httpMetadata?: {
    cacheControl?: string | null;
    cacheExpiry?: string | null;
    contentDisposition?: string | null;
    contentEncoding?: string | null;
    contentLanguage?: string | null;
    contentType?: string | null;
  } | null;
  /** The object key (name). */
  key?: string | null;
  /** The date and time the object was last modified. */
  lastModified?: string | null;
  /** The size of the object in bytes. */
  size?: number | null;
  /** Whether the object is encrypted with a customer-supplied encryption key. */
  ssec?: boolean | null;
  /** Storage class for newly uploaded objects, unless specified otherwise. */
  storageClass?: "Standard" | "InfrequentAccess" | (string & {}) | null;
}
const ListBucketObjectsResponseResult =
  /*@__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      customMetadata: Schema.optional(
        Schema.Union([
          Schema.Record(Schema.String, Schema.Unknown),
          Schema.Null,
        ]),
      ),
      etag: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
      httpMetadata: Schema.optional(Schema.Union([Httpmetadata, Schema.Null])),
      key: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
      lastModified: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
      size: Schema.optional(Schema.Union([Schema.Number, Schema.Null])),
      ssec: Schema.optional(Schema.Union([Schema.Boolean, Schema.Null])),
      storageClass: Schema.optional(
        Schema.Union([
          Schema.Union([
            Schema.Literals(["Standard", "InfrequentAccess"]),
            Schema.String,
          ]),
          Schema.Null,
        ]),
      ),
    }).pipe(
      Schema.encodeKeys({
        customMetadata: "custom_metadata",
        etag: "etag",
        httpMetadata: "http_metadata",
        key: "key",
        lastModified: "last_modified",
        size: "size",
        ssec: "ssec",
        storageClass: "storage_class",
      }),
    ),
  ) as unknown as Schema.Codec<ListBucketObjectsResponseResult>;

interface ListBucketObjectsResponseResultInfo {
  count?: number | null;
  cursor?: string | null;
  perPage?: number | null;
}
const ListBucketObjectsResponseResultInfo =
  /*@__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
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
  ) as unknown as Schema.Codec<ListBucketObjectsResponseResultInfo>;

interface Destination {
  /** ID of the Cloudflare API token used when writing objects to this bucket. */
  accessKeyId?: string | null;
  account?: string | null;
  /** Name of the bucket on the provider. */
  bucket?: string | null;
  provider?: "r2" | null;
}
const Destination = /*@__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    accessKeyId: Schema.optional(Schema.Union([SensitiveString, Schema.Null])),
    account: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
    bucket: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
    provider: Schema.optional(
      Schema.Union([Schema.Literal("r2"), Schema.Null]),
    ),
  }),
) as unknown as Schema.Codec<Destination>;

interface Source {
  /** Name of the bucket on the provider (AWS, GCS only). */
  bucket?: string | null;
  /** S3-compatible URL (Generic S3-compatible providers only). */
  bucketUrl?: string | null;
  provider?: "aws" | "gcs" | "s3" | (string & {}) | null;
  /** Region where the bucket resides (AWS only). */
  region?: string | null;
}
const Source = /*@__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    bucket: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
    bucketUrl: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
    provider: Schema.optional(
      Schema.Union([
        Schema.Union([Schema.Literals(["aws", "gcs", "s3"]), Schema.String]),
        Schema.Null,
      ]),
    ),
    region: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
  }),
) as unknown as Schema.Codec<Source>;

interface Destination2 {
  /** ID of a Cloudflare API token. This is the value labelled "Access Key ID" when creating an API. token from the [R2 dashboard](https://dash.cloudflare.com/?to=/:account/r2/api-tokens).  Sippy will use t */
  accessKeyId?: string | null;
  provider?: "r2" | null;
  /** Value of a Cloudflare API token. This is the value labelled "Secret Access Key" when creating an API. token from the [R2 dashboard](https://dash.cloudflare.com/?to=/:account/r2/api-tokens).  Sippy wil */
  secretAccessKey?: string | null;
}
const Destination2 = /*@__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    accessKeyId: Schema.optional(Schema.Union([SensitiveString, Schema.Null])),
    provider: Schema.optional(
      Schema.Union([Schema.Literal("r2"), Schema.Null]),
    ),
    secretAccessKey: Schema.optional(
      Schema.Union([SensitiveString, Schema.Null]),
    ),
  }),
) as unknown as Schema.Codec<Destination2>;

interface Source2 {
  /** Access Key ID of an IAM credential (ideally scoped to a single S3 bucket). */
  accessKeyId?: string | null;
  /** Name of the AWS S3 bucket. */
  bucket?: string | null;
  provider?: "aws" | "gcs" | "s3" | (string & {}) | null;
  /** Name of the AWS availability zone. */
  region?: string | null;
  /** Secret Access Key of an IAM credential (ideally scoped to a single S3 bucket). */
  secretAccessKey?: string | null;
  /** Client email of an IAM credential (ideally scoped to a single GCS bucket). */
  clientEmail?: string | null;
  /** Private Key of an IAM credential (ideally scoped to a single GCS bucket). */
  privateKey?: string | null;
  /** URL to the S3-compatible API of the bucket. */
  bucketUrl?: string | null;
}
const Source2 = /*@__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    accessKeyId: Schema.optional(Schema.Union([SensitiveString, Schema.Null])),
    bucket: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
    provider: Schema.optional(
      Schema.Union([
        Schema.Union([Schema.Literals(["aws", "gcs", "s3"]), Schema.String]),
        Schema.Null,
      ]),
    ),
    region: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
    secretAccessKey: Schema.optional(
      Schema.Union([SensitiveString, Schema.Null]),
    ),
    clientEmail: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
    privateKey: Schema.optional(Schema.Union([SensitiveString, Schema.Null])),
    bucketUrl: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
  }),
) as unknown as Schema.Codec<Source2>;

interface ListObjectsResponseResult {
  /** The object key (name). */
  key?: string | null;
  /** Object size in bytes. */
  size?: number | null;
  /** Entity tag (raw hex digest, no surrounding quotes). */
  etag?: string | null;
  /** When the object was last modified. */
  lastModified?: string | null;
  storageClass?: "Standard" | "InfrequentAccess" | (string & {}) | null;
  /** Whether the object is encrypted with a customer-supplied key. */
  ssec?: boolean | null;
  /** Custom metadata key-value pairs. */
  customMetadata?: unknown | null;
  /** HTTP metadata associated with the object. */
  httpMetadata?: unknown | null;
}
const ListObjectsResponseResult = /*@__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    key: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
    size: Schema.optional(Schema.Union([Schema.Number, Schema.Null])),
    etag: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
    lastModified: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
    storageClass: Schema.optional(
      Schema.Union([
        Schema.Union([
          Schema.Literals(["Standard", "InfrequentAccess"]),
          Schema.String,
        ]),
        Schema.Null,
      ]),
    ),
    ssec: Schema.optional(Schema.Union([Schema.Boolean, Schema.Null])),
    customMetadata: Schema.optional(
      Schema.Union([Schema.Unknown, Schema.Null]),
    ),
    httpMetadata: Schema.optional(Schema.Union([Schema.Unknown, Schema.Null])),
  }).pipe(
    Schema.encodeKeys({
      key: "key",
      size: "size",
      etag: "etag",
      lastModified: "last_modified",
      storageClass: "storage_class",
      ssec: "ssec",
      customMetadata: "custom_metadata",
      httpMetadata: "http_metadata",
    }),
  ),
) as unknown as Schema.Codec<ListObjectsResponseResult>;

interface DeleteObjectsResponse2 {
  /** Key of the deleted object. */
  key?: string | null;
}
const DeleteObjectsResponse2 = /*@__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    key: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
  }),
) as unknown as Schema.Codec<DeleteObjectsResponse2>;

interface DeleteObjectsResponse1PrefixDelete {
  prefix?: string | null;
  deletedObjects?: number | null;
  isBucketClear?: boolean | null;
}
const DeleteObjectsResponse1PrefixDelete =
  /*@__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      prefix: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
      deletedObjects: Schema.optional(
        Schema.Union([Schema.Number, Schema.Null]),
      ),
      isBucketClear: Schema.optional(
        Schema.Union([Schema.Boolean, Schema.Null]),
      ),
    }),
  ) as unknown as Schema.Codec<DeleteObjectsResponse1PrefixDelete>;

interface DeleteObjectsResponse1 {
  id?: string | null;
  jobType?: "prefixDelete" | null;
  status?:
    | "ENQUEUED"
    | "RUNNING"
    | "COMPLETED"
    | "FAILED"
    | "CANCELLED"
    | (string & {})
    | null;
  startTime?: string | null;
  endTime?: string | null;
  prefixDelete?: {
    prefix?: string | null;
    deletedObjects?: number | null;
    isBucketClear?: boolean | null;
  } | null;
}
const DeleteObjectsResponse1 = /*@__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    id: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
    jobType: Schema.optional(
      Schema.Union([Schema.Literal("prefixDelete"), Schema.Null]),
    ),
    status: Schema.optional(
      Schema.Union([
        Schema.Union([
          Schema.Literals([
            "ENQUEUED",
            "RUNNING",
            "COMPLETED",
            "FAILED",
            "CANCELLED",
          ]),
          Schema.String,
        ]),
        Schema.Null,
      ]),
    ),
    startTime: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
    endTime: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
    prefixDelete: Schema.optional(
      Schema.Union([DeleteObjectsResponse1PrefixDelete, Schema.Null]),
    ),
  }),
) as unknown as Schema.Codec<DeleteObjectsResponse1>;

interface Secret {
  accessKeyId?: string | null;
  secretAccessKey?: string | null;
  clientEmail?: string | null;
  privateKey?: string | null;
}
const Secret = /*@__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    accessKeyId: Schema.optional(Schema.Union([SensitiveString, Schema.Null])),
    secretAccessKey: Schema.optional(
      Schema.Union([SensitiveString, Schema.Null]),
    ),
    clientEmail: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
    privateKey: Schema.optional(Schema.Union([SensitiveString, Schema.Null])),
  }),
) as unknown as Schema.Codec<Secret>;

interface Secret2 {
  accessKeyId: string;
  secretAccessKey: string;
}
const Secret2 = /*@__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    accessKeyId: SensitiveString,
    secretAccessKey: SensitiveString,
  }),
) as unknown as Schema.Codec<Secret2>;

interface S3SourceResponseSchema {
  bucket?: string | null;
  endpoint?: string | null;
  keys?: string[] | null;
  pathPrefix?: string | null;
  vendor?: "s3" | null;
}
const S3SourceResponseSchema = /*@__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    bucket: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
    endpoint: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
    keys: Schema.optional(
      Schema.Union([Schema.Array(Schema.String), Schema.Null]),
    ),
    pathPrefix: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
    vendor: Schema.optional(Schema.Union([Schema.Literal("s3"), Schema.Null])),
  }),
) as unknown as Schema.Codec<S3SourceResponseSchema>;

interface GcsSourceResponseSchema {
  bucket?: string | null;
  keys?: string[] | null;
  pathPrefix?: string | null;
  vendor?: "gcs" | null;
}
const GcsSourceResponseSchema = /*@__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    bucket: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
    keys: Schema.optional(
      Schema.Union([Schema.Array(Schema.String), Schema.Null]),
    ),
    pathPrefix: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
    vendor: Schema.optional(Schema.Union([Schema.Literal("gcs"), Schema.Null])),
  }),
) as unknown as Schema.Codec<GcsSourceResponseSchema>;

interface R2SourceResponseSchema {
  bucket?: string | null;
  jurisdiction?: "default" | "eu" | "fedramp" | (string & {}) | null;
  keys?: string[] | null;
  pathPrefix?: string | null;
  vendor?: "r2" | null;
}
const R2SourceResponseSchema = /*@__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    bucket: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
    jurisdiction: Schema.optional(
      Schema.Union([
        Schema.Union([
          Schema.Literals(["default", "eu", "fedramp"]),
          Schema.String,
        ]),
        Schema.Null,
      ]),
    ),
    keys: Schema.optional(
      Schema.Union([Schema.Array(Schema.String), Schema.Null]),
    ),
    pathPrefix: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
    vendor: Schema.optional(Schema.Union([Schema.Literal("r2"), Schema.Null])),
  }),
) as unknown as Schema.Codec<R2SourceResponseSchema>;

interface Target {
  bucket?: string | null;
  jurisdiction?: "default" | "eu" | "fedramp" | (string & {}) | null;
  vendor?: "r2" | null;
}
const Target = /*@__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    bucket: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
    jurisdiction: Schema.optional(
      Schema.Union([
        Schema.Union([
          Schema.Literals(["default", "eu", "fedramp"]),
          Schema.String,
        ]),
        Schema.Null,
      ]),
    ),
    vendor: Schema.optional(Schema.Union([Schema.Literal("r2"), Schema.Null])),
  }),
) as unknown as Schema.Codec<Target>;

interface ListSuperSlurperJobsResponseResult {
  id?: string | null;
  createdAt?: string | null;
  finishedAt?: string | null;
  overwrite?: boolean | null;
  source?:
    | {
        bucket?: string | null;
        endpoint?: string | null;
        keys?: string[] | null;
        pathPrefix?: string | null;
        vendor?: "s3" | null;
      }
    | {
        bucket?: string | null;
        keys?: string[] | null;
        pathPrefix?: string | null;
        vendor?: "gcs" | null;
      }
    | {
        bucket?: string | null;
        jurisdiction?: "default" | "eu" | "fedramp" | (string & {}) | null;
        keys?: string[] | null;
        pathPrefix?: string | null;
        vendor?: "r2" | null;
      }
    | null;
  status?:
    | "running"
    | "paused"
    | "aborted"
    | "completed"
    | (string & {})
    | null;
  target?: {
    bucket?: string | null;
    jurisdiction?: "default" | "eu" | "fedramp" | (string & {}) | null;
    vendor?: "r2" | null;
  } | null;
}
const ListSuperSlurperJobsResponseResult =
  /*@__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      id: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
      createdAt: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
      finishedAt: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
      overwrite: Schema.optional(Schema.Union([Schema.Boolean, Schema.Null])),
      source: Schema.optional(
        Schema.Union([
          Schema.Union([
            S3SourceResponseSchema,
            GcsSourceResponseSchema,
            R2SourceResponseSchema,
          ]),
          Schema.Null,
        ]),
      ),
      status: Schema.optional(
        Schema.Union([
          Schema.Union([
            Schema.Literals(["running", "paused", "aborted", "completed"]),
            Schema.String,
          ]),
          Schema.Null,
        ]),
      ),
      target: Schema.optional(Schema.Union([Target, Schema.Null])),
    }),
  ) as unknown as Schema.Codec<ListSuperSlurperJobsResponseResult>;

interface R2SlurperS3SourceSchema {
  bucket: string;
  secret: { accessKeyId: string; secretAccessKey: string };
  vendor: "s3";
  /** Custom S3-compatible endpoint that must use https://. */
  endpoint?: string | null;
  keys?: string[] | null;
  pathPrefix?: string | null;
  region?: string | null;
}
const R2SlurperS3SourceSchema = /*@__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    bucket: Schema.String,
    secret: Secret2,
    vendor: Schema.Literal("s3"),
    endpoint: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
    keys: Schema.optional(
      Schema.Union([Schema.Array(Schema.String), Schema.Null]),
    ),
    pathPrefix: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
    region: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
  }),
) as unknown as Schema.Codec<R2SlurperS3SourceSchema>;

interface Secret3 {
  clientEmail: string;
  privateKey: string;
}
const Secret3 = /*@__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    clientEmail: Schema.String,
    privateKey: SensitiveString,
  }),
) as unknown as Schema.Codec<Secret3>;

interface R2SlurperGcsSourceSchema {
  bucket: string;
  secret: { clientEmail: string; privateKey: string };
  vendor: "gcs";
  keys?: string[] | null;
  pathPrefix?: string | null;
}
const R2SlurperGcsSourceSchema = /*@__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    bucket: Schema.String,
    secret: Secret3,
    vendor: Schema.Literal("gcs"),
    keys: Schema.optional(
      Schema.Union([Schema.Array(Schema.String), Schema.Null]),
    ),
    pathPrefix: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
  }),
) as unknown as Schema.Codec<R2SlurperGcsSourceSchema>;

interface R2SlurperR2SourceSchema {
  bucket: string;
  secret: { accessKeyId: string; secretAccessKey: string };
  vendor: "r2";
  jurisdiction?: "default" | "eu" | "fedramp" | (string & {}) | null;
  keys?: string[] | null;
  pathPrefix?: string | null;
}
const R2SlurperR2SourceSchema = /*@__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    bucket: Schema.String,
    secret: Secret2,
    vendor: Schema.Literal("r2"),
    jurisdiction: Schema.optional(
      Schema.Union([
        Schema.Union([
          Schema.Literals(["default", "eu", "fedramp"]),
          Schema.String,
        ]),
        Schema.Null,
      ]),
    ),
    keys: Schema.optional(
      Schema.Union([Schema.Array(Schema.String), Schema.Null]),
    ),
    pathPrefix: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
  }),
) as unknown as Schema.Codec<R2SlurperR2SourceSchema>;

interface Target2 {
  bucket: string;
  secret: { accessKeyId: string; secretAccessKey: string };
  vendor: "r2";
  jurisdiction?: "default" | "eu" | "fedramp" | (string & {}) | null;
}
const Target2 = /*@__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    bucket: Schema.String,
    secret: Secret2,
    vendor: Schema.Literal("r2"),
    jurisdiction: Schema.optional(
      Schema.Union([
        Schema.Union([
          Schema.Literals(["default", "eu", "fedramp"]),
          Schema.String,
        ]),
        Schema.Null,
      ]),
    ),
  }),
) as unknown as Schema.Codec<Target2>;

interface ListSuperSlurperJobLogsResponseResult {
  createdAt?: string | null;
  job?: string | null;
  logType?:
    | "migrationStart"
    | "migrationComplete"
    | "migrationAbort"
    | "migrationError"
    | "migrationPause"
    | "migrationResume"
    | "migrationErrorFailedContinuation"
    | "importErrorRetryExhaustion"
    | "importSkippedStorageClass"
    | "importSkippedOversized"
    | "importSkippedEmptyObject"
    | "importSkippedUnsupportedContentType"
    | "importSkippedExcludedContentType"
    | "importSkippedInvalidMedia"
    | "importSkippedRequiresRetrieval"
    | (string & {})
    | null;
  message?: string | null;
  objectKey?: string | null;
}
const ListSuperSlurperJobLogsResponseResult =
  /*@__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      createdAt: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
      job: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
      logType: Schema.optional(
        Schema.Union([
          Schema.Union([
            Schema.Literals([
              "migrationStart",
              "migrationComplete",
              "migrationAbort",
              "migrationError",
              "migrationPause",
              "migrationResume",
              "migrationErrorFailedContinuation",
              "importErrorRetryExhaustion",
              "importSkippedStorageClass",
              "importSkippedOversized",
              "importSkippedEmptyObject",
              "importSkippedUnsupportedContentType",
              "importSkippedExcludedContentType",
              "importSkippedInvalidMedia",
              "importSkippedRequiresRetrieval",
            ]),
            Schema.String,
          ]),
          Schema.Null,
        ]),
      ),
      message: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
      objectKey: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
    }),
  ) as unknown as Schema.Codec<ListSuperSlurperJobLogsResponseResult>;

// =============================================================================
// AllSuperSlurperJob
// =============================================================================

export interface AbortAllSuperSlurperJobRequest {
  accountId: string;
}

export const AbortAllSuperSlurperJobRequest =
  /*@__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      accountId: Schema.String.pipe(T.HttpPath("account_id")),
    }).pipe(
      T.Http({
        method: "PUT",
        path: "/accounts/{account_id}/slurper/jobs/abortAll",
      }),
    ),
  ) as unknown as Schema.Codec<AbortAllSuperSlurperJobRequest>;

export type AbortAllSuperSlurperJobResponse = string;

export const AbortAllSuperSlurperJobResponse =
  /*@__PURE__*/ Schema.suspend(() =>
    Schema.String.pipe(T.ResponsePath("result")),
  ) as unknown as Schema.Codec<AbortAllSuperSlurperJobResponse>;

export type AbortAllSuperSlurperJobError = DefaultErrors;

export const abortAllSuperSlurperJob: API.OperationMethod<
  AbortAllSuperSlurperJobRequest,
  AbortAllSuperSlurperJobResponse,
  AbortAllSuperSlurperJobError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: AbortAllSuperSlurperJobRequest,
  output: AbortAllSuperSlurperJobResponse,
  errors: [],
}));

// =============================================================================
// Bucket
// =============================================================================

export interface GetBucketRequest {
  bucketName: string;
  /** Path param: Account ID. */
  accountId: string;
  /** Header param: Jurisdiction where objects in this bucket are guaranteed to be stored. */
  jurisdiction?: "default" | "eu" | "fedramp" | (string & {});
}

export const GetBucketRequest = /*@__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    bucketName: Schema.String.pipe(T.HttpPath("bucketName")),
    accountId: Schema.String.pipe(T.HttpPath("account_id")),
    jurisdiction: Schema.optional(
      Schema.Union([
        Schema.Literals(["default", "eu", "fedramp"]),
        Schema.String,
      ]),
    ).pipe(T.HttpHeader("cf-r2-jurisdiction")),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/accounts/{account_id}/r2/buckets/{bucketName}",
    }),
  ),
) as unknown as Schema.Codec<GetBucketRequest>;

export interface GetBucketResponse {
  /** Creation timestamp. */
  creationDate?: string | null;
  /** Jurisdiction where objects in this bucket are guaranteed to be stored. */
  jurisdiction?: "default" | "eu" | "fedramp" | (string & {}) | null;
  /** Location of the bucket. */
  location?:
    | "apac"
    | "eeur"
    | "enam"
    | "weur"
    | "wnam"
    | "oc"
    | "APAC"
    | "EEUR"
    | "ENAM"
    | "WEUR"
    | "WNAM"
    | "OC"
    | (string & {})
    | null;
  /** Name of the bucket. */
  name?: string | null;
  /** Storage class for newly uploaded objects, unless specified otherwise. */
  storageClass?: "Standard" | "InfrequentAccess" | (string & {}) | null;
}

export const GetBucketResponse = /*@__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    creationDate: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
    jurisdiction: Schema.optional(
      Schema.Union([
        Schema.Union([
          Schema.Literals(["default", "eu", "fedramp"]),
          Schema.String,
        ]),
        Schema.Null,
      ]),
    ),
    location: Schema.optional(
      Schema.Union([
        Schema.Union([
          Schema.Literals([
            "apac",
            "eeur",
            "enam",
            "weur",
            "wnam",
            "oc",
            "APAC",
            "EEUR",
            "ENAM",
            "WEUR",
            "WNAM",
            "OC",
          ]),
          Schema.String,
        ]),
        Schema.Null,
      ]),
    ),
    name: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
    storageClass: Schema.optional(
      Schema.Union([
        Schema.Union([
          Schema.Literals(["Standard", "InfrequentAccess"]),
          Schema.String,
        ]),
        Schema.Null,
      ]),
    ),
  })
    .pipe(
      Schema.encodeKeys({
        creationDate: "creation_date",
        jurisdiction: "jurisdiction",
        location: "location",
        name: "name",
        storageClass: "storage_class",
      }),
    )
    .pipe(T.ResponsePath("result")),
) as unknown as Schema.Codec<GetBucketResponse>;

export type GetBucketError = DefaultErrors | NoSuchBucket | InvalidRoute;

export const getBucket: API.OperationMethod<
  GetBucketRequest,
  GetBucketResponse,
  GetBucketError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: GetBucketRequest,
  output: GetBucketResponse,
  errors: [NoSuchBucket, InvalidRoute],
}));

export interface ListBucketsRequest {
  /** Path param: Account ID. */
  accountId: string;
  /** Query param: Pagination cursor received during the last List Buckets call. R2 buckets are paginated using cursors instead of page numbers. */
  cursor?: string;
  /** Query param: Direction to order buckets. */
  direction?: "asc" | "desc" | (string & {});
  /** Query param: Bucket names to filter by. Only buckets with this phrase in their name will be returned. */
  nameContains?: string;
  /** Query param: Field to order buckets by. */
  order?: "name";
  /** Query param: Maximum number of buckets to return in a single call. */
  perPage?: number;
  /** Query param: Bucket name to start searching after. Buckets are ordered lexicographically. */
  startAfter?: string;
  /** Header param: Jurisdiction where objects in this bucket are guaranteed to be stored. */
  jurisdiction?: "default" | "eu" | "fedramp" | (string & {});
}

export const ListBucketsRequest = /*@__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    accountId: Schema.String.pipe(T.HttpPath("account_id")),
    cursor: Schema.optional(Schema.String).pipe(T.HttpQuery("cursor")),
    direction: Schema.optional(
      Schema.Union([Schema.Literals(["asc", "desc"]), Schema.String]),
    ).pipe(T.HttpQuery("direction")),
    nameContains: Schema.optional(Schema.String).pipe(
      T.HttpQuery("name_contains"),
    ),
    order: Schema.optional(Schema.Literal("name")).pipe(T.HttpQuery("order")),
    perPage: Schema.optional(Schema.Number).pipe(T.HttpQuery("per_page")),
    startAfter: Schema.optional(Schema.String).pipe(T.HttpQuery("start_after")),
    jurisdiction: Schema.optional(
      Schema.Union([
        Schema.Literals(["default", "eu", "fedramp"]),
        Schema.String,
      ]),
    ).pipe(T.HttpHeader("cf-r2-jurisdiction")),
  }).pipe(T.Http({ method: "GET", path: "/accounts/{account_id}/r2/buckets" })),
) as unknown as Schema.Codec<ListBucketsRequest>;

export interface ListBucketsResponse {
  buckets?:
    | {
        creationDate?: string | null;
        jurisdiction?: "default" | "eu" | "fedramp" | (string & {}) | null;
        location?:
          | "apac"
          | "eeur"
          | "enam"
          | "weur"
          | "wnam"
          | "oc"
          | "APAC"
          | "EEUR"
          | "ENAM"
          | "WEUR"
          | "WNAM"
          | "OC"
          | (string & {})
          | null;
        name?: string | null;
        storageClass?: "Standard" | "InfrequentAccess" | (string & {}) | null;
      }[]
    | null;
}

export const ListBucketsResponse = /*@__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    buckets: Schema.optional(Schema.Union([Schema.Array(Bucket), Schema.Null])),
  }).pipe(T.ResponsePath("result")),
) as unknown as Schema.Codec<ListBucketsResponse>;

export type ListBucketsError = DefaultErrors | InvalidRoute;

export const listBuckets: API.OperationMethod<
  ListBucketsRequest,
  ListBucketsResponse,
  ListBucketsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: ListBucketsRequest,
  output: ListBucketsResponse,
  errors: [InvalidRoute],
}));

export interface CreateBucketRequest {
  /** Path param: Account ID. */
  accountId: string;
  /** Header param: Jurisdiction where objects in this bucket are guaranteed to be stored. */
  jurisdiction?: "default" | "eu" | "fedramp" | (string & {});
  /** Body param: Name of the bucket. */
  name: string;
  /** Body param: Location of the bucket. */
  locationHint?:
    | "apac"
    | "eeur"
    | "enam"
    | "weur"
    | "wnam"
    | "oc"
    | (string & {});
  /** Body param: Storage class for newly uploaded objects, unless specified otherwise. */
  storageClass?: "Standard" | "InfrequentAccess" | (string & {});
}

export const CreateBucketRequest = /*@__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    accountId: Schema.String.pipe(T.HttpPath("account_id")),
    jurisdiction: Schema.optional(
      Schema.Union([
        Schema.Literals(["default", "eu", "fedramp"]),
        Schema.String,
      ]),
    ).pipe(T.HttpHeader("cf-r2-jurisdiction")),
    name: Schema.String,
    locationHint: Schema.optional(
      Schema.Union([
        Schema.Literals(["apac", "eeur", "enam", "weur", "wnam", "oc"]),
        Schema.String,
      ]),
    ),
    storageClass: Schema.optional(
      Schema.Union([
        Schema.Literals(["Standard", "InfrequentAccess"]),
        Schema.String,
      ]),
    ),
  }).pipe(
    T.Http({ method: "POST", path: "/accounts/{account_id}/r2/buckets" }),
  ),
) as unknown as Schema.Codec<CreateBucketRequest>;

export interface CreateBucketResponse {
  /** Creation timestamp. */
  creationDate?: string | null;
  /** Jurisdiction where objects in this bucket are guaranteed to be stored. */
  jurisdiction?: "default" | "eu" | "fedramp" | (string & {}) | null;
  /** Location of the bucket. */
  location?:
    | "apac"
    | "eeur"
    | "enam"
    | "weur"
    | "wnam"
    | "oc"
    | "APAC"
    | "EEUR"
    | "ENAM"
    | "WEUR"
    | "WNAM"
    | "OC"
    | (string & {})
    | null;
  /** Name of the bucket. */
  name?: string | null;
  /** Storage class for newly uploaded objects, unless specified otherwise. */
  storageClass?: "Standard" | "InfrequentAccess" | (string & {}) | null;
}

export const CreateBucketResponse = /*@__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    creationDate: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
    jurisdiction: Schema.optional(
      Schema.Union([
        Schema.Union([
          Schema.Literals(["default", "eu", "fedramp"]),
          Schema.String,
        ]),
        Schema.Null,
      ]),
    ),
    location: Schema.optional(
      Schema.Union([
        Schema.Union([
          Schema.Literals([
            "apac",
            "eeur",
            "enam",
            "weur",
            "wnam",
            "oc",
            "APAC",
            "EEUR",
            "ENAM",
            "WEUR",
            "WNAM",
            "OC",
          ]),
          Schema.String,
        ]),
        Schema.Null,
      ]),
    ),
    name: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
    storageClass: Schema.optional(
      Schema.Union([
        Schema.Union([
          Schema.Literals(["Standard", "InfrequentAccess"]),
          Schema.String,
        ]),
        Schema.Null,
      ]),
    ),
  })
    .pipe(
      Schema.encodeKeys({
        creationDate: "creation_date",
        jurisdiction: "jurisdiction",
        location: "location",
        name: "name",
        storageClass: "storage_class",
      }),
    )
    .pipe(T.ResponsePath("result")),
) as unknown as Schema.Codec<CreateBucketResponse>;

export type CreateBucketError =
  | DefaultErrors
  | InvalidBucketName
  | BucketAlreadyExists
  | InvalidRoute;

export const createBucket: API.OperationMethod<
  CreateBucketRequest,
  CreateBucketResponse,
  CreateBucketError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: CreateBucketRequest,
  output: CreateBucketResponse,
  errors: [InvalidBucketName, BucketAlreadyExists, InvalidRoute],
}));

export interface PatchBucketRequest {
  bucketName: string;
  /** Path param: Account ID. */
  accountId: string;
  /** Header param: Storage class for newly uploaded objects, unless specified otherwise. */
  storageClass: "Standard" | "InfrequentAccess" | (string & {});
  /** Header param: Jurisdiction where objects in this bucket are guaranteed to be stored. */
  jurisdiction?: "default" | "eu" | "fedramp" | (string & {});
}

export const PatchBucketRequest = /*@__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    bucketName: Schema.String.pipe(T.HttpPath("bucketName")),
    accountId: Schema.String.pipe(T.HttpPath("account_id")),
    storageClass: Schema.Union([
      Schema.Literals(["Standard", "InfrequentAccess"]),
      Schema.String,
    ]).pipe(T.HttpHeader("cf-r2-storage-class")),
    jurisdiction: Schema.optional(
      Schema.Union([
        Schema.Literals(["default", "eu", "fedramp"]),
        Schema.String,
      ]),
    ).pipe(T.HttpHeader("cf-r2-jurisdiction")),
  }).pipe(
    T.Http({
      method: "PATCH",
      path: "/accounts/{account_id}/r2/buckets/{bucketName}",
    }),
  ),
) as unknown as Schema.Codec<PatchBucketRequest>;

export interface PatchBucketResponse {
  /** Creation timestamp. */
  creationDate?: string | null;
  /** Jurisdiction where objects in this bucket are guaranteed to be stored. */
  jurisdiction?: "default" | "eu" | "fedramp" | (string & {}) | null;
  /** Location of the bucket. */
  location?:
    | "apac"
    | "eeur"
    | "enam"
    | "weur"
    | "wnam"
    | "oc"
    | "APAC"
    | "EEUR"
    | "ENAM"
    | "WEUR"
    | "WNAM"
    | "OC"
    | (string & {})
    | null;
  /** Name of the bucket. */
  name?: string | null;
  /** Storage class for newly uploaded objects, unless specified otherwise. */
  storageClass?: "Standard" | "InfrequentAccess" | (string & {}) | null;
}

export const PatchBucketResponse = /*@__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    creationDate: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
    jurisdiction: Schema.optional(
      Schema.Union([
        Schema.Union([
          Schema.Literals(["default", "eu", "fedramp"]),
          Schema.String,
        ]),
        Schema.Null,
      ]),
    ),
    location: Schema.optional(
      Schema.Union([
        Schema.Union([
          Schema.Literals([
            "apac",
            "eeur",
            "enam",
            "weur",
            "wnam",
            "oc",
            "APAC",
            "EEUR",
            "ENAM",
            "WEUR",
            "WNAM",
            "OC",
          ]),
          Schema.String,
        ]),
        Schema.Null,
      ]),
    ),
    name: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
    storageClass: Schema.optional(
      Schema.Union([
        Schema.Union([
          Schema.Literals(["Standard", "InfrequentAccess"]),
          Schema.String,
        ]),
        Schema.Null,
      ]),
    ),
  })
    .pipe(
      Schema.encodeKeys({
        creationDate: "creation_date",
        jurisdiction: "jurisdiction",
        location: "location",
        name: "name",
        storageClass: "storage_class",
      }),
    )
    .pipe(T.ResponsePath("result")),
) as unknown as Schema.Codec<PatchBucketResponse>;

export type PatchBucketError = DefaultErrors | NoSuchBucket | InvalidRoute;

export const patchBucket: API.OperationMethod<
  PatchBucketRequest,
  PatchBucketResponse,
  PatchBucketError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: PatchBucketRequest,
  output: PatchBucketResponse,
  errors: [NoSuchBucket, InvalidRoute],
}));

export interface DeleteBucketRequest {
  bucketName: string;
  /** Path param: Account ID. */
  accountId: string;
  /** Header param: Jurisdiction where objects in this bucket are guaranteed to be stored. */
  jurisdiction?: "default" | "eu" | "fedramp" | (string & {});
}

export const DeleteBucketRequest = /*@__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    bucketName: Schema.String.pipe(T.HttpPath("bucketName")),
    accountId: Schema.String.pipe(T.HttpPath("account_id")),
    jurisdiction: Schema.optional(
      Schema.Union([
        Schema.Literals(["default", "eu", "fedramp"]),
        Schema.String,
      ]),
    ).pipe(T.HttpHeader("cf-r2-jurisdiction")),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/accounts/{account_id}/r2/buckets/{bucketName}",
    }),
  ),
) as unknown as Schema.Codec<DeleteBucketRequest>;

export type DeleteBucketResponse = unknown;

export const DeleteBucketResponse = /*@__PURE__*/ Schema.suspend(() =>
  Schema.Unknown.pipe(T.ResponsePath("result")),
) as unknown as Schema.Codec<DeleteBucketResponse>;

export type DeleteBucketError =
  | DefaultErrors
  | NoSuchBucket
  | InvalidRoute
  | NoRoute;

export const deleteBucket: API.OperationMethod<
  DeleteBucketRequest,
  DeleteBucketResponse,
  DeleteBucketError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: DeleteBucketRequest,
  output: DeleteBucketResponse,
  errors: [NoSuchBucket, InvalidRoute, NoRoute],
}));

// =============================================================================
// BucketCor
// =============================================================================

export interface GetBucketCorsRequest {
  bucketName: string;
  /** Path param: Account ID. */
  accountId: string;
  /** Header param: Jurisdiction where objects in this bucket are guaranteed to be stored. */
  jurisdiction?: "default" | "eu" | "fedramp" | (string & {});
}

export const GetBucketCorsRequest = /*@__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    bucketName: Schema.String.pipe(T.HttpPath("bucketName")),
    accountId: Schema.String.pipe(T.HttpPath("account_id")),
    jurisdiction: Schema.optional(
      Schema.Union([
        Schema.Literals(["default", "eu", "fedramp"]),
        Schema.String,
      ]),
    ).pipe(T.HttpHeader("cf-r2-jurisdiction")),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/accounts/{account_id}/r2/buckets/{bucketName}/cors",
    }),
  ),
) as unknown as Schema.Codec<GetBucketCorsRequest>;

export interface GetBucketCorsResponse {
  rules?:
    | {
        allowed: {
          methods: (
            | "GET"
            | "PUT"
            | "POST"
            | "DELETE"
            | "HEAD"
            | (string & {})
          )[];
          origins: string[];
          headers?: string[] | null;
        };
        id?: string | null;
        exposeHeaders?: string[] | null;
        maxAgeSeconds?: number | null;
      }[]
    | null;
}

export const GetBucketCorsResponse = /*@__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    rules: Schema.optional(Schema.Union([Schema.Array(Rule), Schema.Null])),
  }).pipe(T.ResponsePath("result")),
) as unknown as Schema.Codec<GetBucketCorsResponse>;

export type GetBucketCorsError =
  | DefaultErrors
  | NoSuchBucket
  | InvalidRoute
  | NoCorsConfiguration;

export const getBucketCors: API.OperationMethod<
  GetBucketCorsRequest,
  GetBucketCorsResponse,
  GetBucketCorsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: GetBucketCorsRequest,
  output: GetBucketCorsResponse,
  errors: [NoSuchBucket, InvalidRoute, NoCorsConfiguration],
}));

export interface PutBucketCorsRequest {
  bucketName: string;
  /** Path param: Account ID. */
  accountId: string;
  /** Header param: Jurisdiction where objects in this bucket are guaranteed to be stored. */
  jurisdiction?: "default" | "eu" | "fedramp" | (string & {});
  /** Body param */
  rules?: {
    allowed: {
      methods: ("GET" | "PUT" | "POST" | "DELETE" | "HEAD" | (string & {}))[];
      origins: string[];
      headers?: string[];
    };
    id?: string;
    exposeHeaders?: string[];
    maxAgeSeconds?: number;
  }[];
}

export const PutBucketCorsRequest = /*@__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    bucketName: Schema.String.pipe(T.HttpPath("bucketName")),
    accountId: Schema.String.pipe(T.HttpPath("account_id")),
    jurisdiction: Schema.optional(
      Schema.Union([
        Schema.Literals(["default", "eu", "fedramp"]),
        Schema.String,
      ]),
    ).pipe(T.HttpHeader("cf-r2-jurisdiction")),
    rules: Schema.optional(Schema.Array(Rule)),
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/accounts/{account_id}/r2/buckets/{bucketName}/cors",
    }),
  ),
) as unknown as Schema.Codec<PutBucketCorsRequest>;

export type PutBucketCorsResponse = unknown;

export const PutBucketCorsResponse = /*@__PURE__*/ Schema.suspend(() =>
  Schema.Unknown.pipe(T.ResponsePath("result")),
) as unknown as Schema.Codec<PutBucketCorsResponse>;

export type PutBucketCorsError = DefaultErrors | NoSuchBucket | InvalidRoute;

export const putBucketCors: API.OperationMethod<
  PutBucketCorsRequest,
  PutBucketCorsResponse,
  PutBucketCorsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: PutBucketCorsRequest,
  output: PutBucketCorsResponse,
  errors: [NoSuchBucket, InvalidRoute],
}));

export interface DeleteBucketCorsRequest {
  bucketName: string;
  /** Path param: Account ID. */
  accountId: string;
  /** Header param: Jurisdiction where objects in this bucket are guaranteed to be stored. */
  jurisdiction?: "default" | "eu" | "fedramp" | (string & {});
}

export const DeleteBucketCorsRequest =
  /*@__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      bucketName: Schema.String.pipe(T.HttpPath("bucketName")),
      accountId: Schema.String.pipe(T.HttpPath("account_id")),
      jurisdiction: Schema.optional(
        Schema.Union([
          Schema.Literals(["default", "eu", "fedramp"]),
          Schema.String,
        ]),
      ).pipe(T.HttpHeader("cf-r2-jurisdiction")),
    }).pipe(
      T.Http({
        method: "DELETE",
        path: "/accounts/{account_id}/r2/buckets/{bucketName}/cors",
      }),
    ),
  ) as unknown as Schema.Codec<DeleteBucketCorsRequest>;

export type DeleteBucketCorsResponse = unknown;

export const DeleteBucketCorsResponse =
  /*@__PURE__*/ Schema.suspend(() =>
    Schema.Unknown.pipe(T.ResponsePath("result")),
  ) as unknown as Schema.Codec<DeleteBucketCorsResponse>;

export type DeleteBucketCorsError = DefaultErrors | NoSuchBucket | InvalidRoute;

export const deleteBucketCors: API.OperationMethod<
  DeleteBucketCorsRequest,
  DeleteBucketCorsResponse,
  DeleteBucketCorsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: DeleteBucketCorsRequest,
  output: DeleteBucketCorsResponse,
  errors: [NoSuchBucket, InvalidRoute],
}));

// =============================================================================
// BucketDomainCustom
// =============================================================================

export interface GetBucketDomainCustomRequest {
  bucketName: string;
  domain: string;
  /** Path param: Account ID. */
  accountId: string;
  /** Header param: Jurisdiction where objects in this bucket are guaranteed to be stored. */
  jurisdiction?: "default" | "eu" | "fedramp" | (string & {});
}

export const GetBucketDomainCustomRequest =
  /*@__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      bucketName: Schema.String.pipe(T.HttpPath("bucketName")),
      domain: Schema.String.pipe(T.HttpPath("domain")),
      accountId: Schema.String.pipe(T.HttpPath("account_id")),
      jurisdiction: Schema.optional(
        Schema.Union([
          Schema.Literals(["default", "eu", "fedramp"]),
          Schema.String,
        ]),
      ).pipe(T.HttpHeader("cf-r2-jurisdiction")),
    }).pipe(
      T.Http({
        method: "GET",
        path: "/accounts/{account_id}/r2/buckets/{bucketName}/domains/custom/{domain}",
      }),
    ),
  ) as unknown as Schema.Codec<GetBucketDomainCustomRequest>;

export interface GetBucketDomainCustomResponse {
  /** Domain name of the custom domain to be added. */
  domain: string;
  /** Whether this bucket is publicly accessible at the specified custom domain. */
  enabled: boolean;
  status: {
    ownership:
      | "pending"
      | "active"
      | "deactivated"
      | "blocked"
      | "error"
      | "unknown"
      | (string & {});
    ssl:
      | "initializing"
      | "pending"
      | "active"
      | "deactivated"
      | "error"
      | "unknown"
      | (string & {});
  };
  /** An allowlist of ciphers for TLS termination. These ciphers must be in the BoringSSL format. */
  ciphers?: string[] | null;
  /** Minimum TLS Version the custom domain will accept for incoming connections. If not set, defaults to 1.0. */
  minTLS?: "1.0" | "1.1" | "1.2" | "1.3" | (string & {}) | null;
  /** Zone ID of the custom domain resides in. */
  zoneId?: string | null;
  /** Zone that the custom domain resides in. */
  zoneName?: string | null;
}

export const GetBucketDomainCustomResponse =
  /*@__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      domain: Schema.String,
      enabled: Schema.Boolean,
      status: Status,
      ciphers: Schema.optional(
        Schema.Union([Schema.Array(Schema.String), Schema.Null]),
      ),
      minTLS: Schema.optional(
        Schema.Union([
          Schema.Union([
            Schema.Literals(["1.0", "1.1", "1.2", "1.3"]),
            Schema.String,
          ]),
          Schema.Null,
        ]),
      ),
      zoneId: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
      zoneName: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
    }).pipe(T.ResponsePath("result")),
  ) as unknown as Schema.Codec<GetBucketDomainCustomResponse>;

export type GetBucketDomainCustomError =
  | DefaultErrors
  | DomainNotFound
  | NoSuchBucket
  | InvalidRoute;

export const getBucketDomainCustom: API.OperationMethod<
  GetBucketDomainCustomRequest,
  GetBucketDomainCustomResponse,
  GetBucketDomainCustomError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: GetBucketDomainCustomRequest,
  output: GetBucketDomainCustomResponse,
  errors: [DomainNotFound, NoSuchBucket, InvalidRoute],
}));

export interface ListBucketDomainCustomsRequest {
  bucketName: string;
  /** Path param: Account ID. */
  accountId: string;
  /** Header param: Jurisdiction where objects in this bucket are guaranteed to be stored. */
  jurisdiction?: "default" | "eu" | "fedramp" | (string & {});
}

export const ListBucketDomainCustomsRequest =
  /*@__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      bucketName: Schema.String.pipe(T.HttpPath("bucketName")),
      accountId: Schema.String.pipe(T.HttpPath("account_id")),
      jurisdiction: Schema.optional(
        Schema.Union([
          Schema.Literals(["default", "eu", "fedramp"]),
          Schema.String,
        ]),
      ).pipe(T.HttpHeader("cf-r2-jurisdiction")),
    }).pipe(
      T.Http({
        method: "GET",
        path: "/accounts/{account_id}/r2/buckets/{bucketName}/domains/custom",
      }),
    ),
  ) as unknown as Schema.Codec<ListBucketDomainCustomsRequest>;

export interface ListBucketDomainCustomsResponse {
  domains: {
    domain: string;
    enabled: boolean;
    status: {
      ownership:
        | "pending"
        | "active"
        | "deactivated"
        | "blocked"
        | "error"
        | "unknown"
        | (string & {});
      ssl:
        | "initializing"
        | "pending"
        | "active"
        | "deactivated"
        | "error"
        | "unknown"
        | (string & {});
    };
    ciphers?: string[] | null;
    minTLS?: "1.0" | "1.1" | "1.2" | "1.3" | (string & {}) | null;
    zoneId?: string | null;
    zoneName?: string | null;
  }[];
}

export const ListBucketDomainCustomsResponse =
  /*@__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      domains: Schema.Array(Domain),
    }).pipe(T.ResponsePath("result")),
  ) as unknown as Schema.Codec<ListBucketDomainCustomsResponse>;

export type ListBucketDomainCustomsError =
  | DefaultErrors
  | NoSuchBucket
  | InvalidRoute;

export const listBucketDomainCustoms: API.OperationMethod<
  ListBucketDomainCustomsRequest,
  ListBucketDomainCustomsResponse,
  ListBucketDomainCustomsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: ListBucketDomainCustomsRequest,
  output: ListBucketDomainCustomsResponse,
  errors: [NoSuchBucket, InvalidRoute],
}));

export interface CreateBucketDomainCustomRequest {
  bucketName: string;
  /** Path param: Account ID. */
  accountId: string;
  /** Header param: Jurisdiction where objects in this bucket are guaranteed to be stored. */
  jurisdiction?: "default" | "eu" | "fedramp" | (string & {});
  /** Body param: Name of the custom domain to be added. */
  domain: string;
  /** Body param: Whether to enable public bucket access at the custom domain. If undefined, the domain will be enabled. */
  enabled: boolean;
  /** Body param: Zone ID of the custom domain. */
  zoneId: string;
  /** Body param: An allowlist of ciphers for TLS termination. These ciphers must be in the BoringSSL format. */
  ciphers?: string[];
  /** Body param: Minimum TLS Version the custom domain will accept for incoming connections. If not set, defaults to 1.0. */
  minTLS?: "1.0" | "1.1" | "1.2" | "1.3" | (string & {});
}

export const CreateBucketDomainCustomRequest =
  /*@__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      bucketName: Schema.String.pipe(T.HttpPath("bucketName")),
      accountId: Schema.String.pipe(T.HttpPath("account_id")),
      jurisdiction: Schema.optional(
        Schema.Union([
          Schema.Literals(["default", "eu", "fedramp"]),
          Schema.String,
        ]),
      ).pipe(T.HttpHeader("cf-r2-jurisdiction")),
      domain: Schema.String,
      enabled: Schema.Boolean,
      zoneId: Schema.String,
      ciphers: Schema.optional(Schema.Array(Schema.String)),
      minTLS: Schema.optional(
        Schema.Union([
          Schema.Literals(["1.0", "1.1", "1.2", "1.3"]),
          Schema.String,
        ]),
      ),
    }).pipe(
      T.Http({
        method: "POST",
        path: "/accounts/{account_id}/r2/buckets/{bucketName}/domains/custom",
      }),
    ),
  ) as unknown as Schema.Codec<CreateBucketDomainCustomRequest>;

export interface CreateBucketDomainCustomResponse {
  /** Domain name of the affected custom domain. */
  domain: string;
  /** Whether this bucket is publicly accessible at the specified custom domain. */
  enabled: boolean;
  /** Zone ID of the custom domain. */
  zoneId: string;
  /** An allowlist of ciphers for TLS termination. These ciphers must be in the BoringSSL format. */
  ciphers?: string[] | null;
  /** Minimum TLS Version the custom domain will accept for incoming connections. If not set, defaults to 1.0. */
  minTLS?: "1.0" | "1.1" | "1.2" | "1.3" | (string & {}) | null;
}

export const CreateBucketDomainCustomResponse =
  /*@__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      domain: Schema.String,
      enabled: Schema.Boolean,
      zoneId: Schema.String,
      ciphers: Schema.optional(
        Schema.Union([Schema.Array(Schema.String), Schema.Null]),
      ),
      minTLS: Schema.optional(
        Schema.Union([
          Schema.Union([
            Schema.Literals(["1.0", "1.1", "1.2", "1.3"]),
            Schema.String,
          ]),
          Schema.Null,
        ]),
      ),
    }).pipe(T.ResponsePath("result")),
  ) as unknown as Schema.Codec<CreateBucketDomainCustomResponse>;

export type CreateBucketDomainCustomError =
  | DefaultErrors
  | NoSuchBucket
  | InvalidBucketName
  | CustomDomainInUse;

export const createBucketDomainCustom: API.OperationMethod<
  CreateBucketDomainCustomRequest,
  CreateBucketDomainCustomResponse,
  CreateBucketDomainCustomError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: CreateBucketDomainCustomRequest,
  output: CreateBucketDomainCustomResponse,
  errors: [NoSuchBucket, InvalidBucketName, CustomDomainInUse],
}));

export interface UpdateBucketDomainCustomRequest {
  bucketName: string;
  domain: string;
  /** Path param: Account ID. */
  accountId: string;
  /** Header param: Jurisdiction where objects in this bucket are guaranteed to be stored. */
  jurisdiction?: "default" | "eu" | "fedramp" | (string & {});
  /** Body param: An allowlist of ciphers for TLS termination. These ciphers must be in the BoringSSL format. */
  ciphers?: string[];
  /** Body param: Whether to enable public bucket access at the specified custom domain. */
  enabled?: boolean;
  /** Body param: Minimum TLS Version the custom domain will accept for incoming connections. If not set, defaults to previous value. */
  minTLS?: "1.0" | "1.1" | "1.2" | "1.3" | (string & {});
}

export const UpdateBucketDomainCustomRequest =
  /*@__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      bucketName: Schema.String.pipe(T.HttpPath("bucketName")),
      domain: Schema.String.pipe(T.HttpPath("domain")),
      accountId: Schema.String.pipe(T.HttpPath("account_id")),
      jurisdiction: Schema.optional(
        Schema.Union([
          Schema.Literals(["default", "eu", "fedramp"]),
          Schema.String,
        ]),
      ).pipe(T.HttpHeader("cf-r2-jurisdiction")),
      ciphers: Schema.optional(Schema.Array(Schema.String)),
      enabled: Schema.optional(Schema.Boolean),
      minTLS: Schema.optional(
        Schema.Union([
          Schema.Literals(["1.0", "1.1", "1.2", "1.3"]),
          Schema.String,
        ]),
      ),
    }).pipe(
      T.Http({
        method: "PUT",
        path: "/accounts/{account_id}/r2/buckets/{bucketName}/domains/custom/{domain}",
      }),
    ),
  ) as unknown as Schema.Codec<UpdateBucketDomainCustomRequest>;

export interface UpdateBucketDomainCustomResponse {
  /** Domain name of the affected custom domain. */
  domain: string;
  /** An allowlist of ciphers for TLS termination. These ciphers must be in the BoringSSL format. */
  ciphers?: string[] | null;
  /** Whether this bucket is publicly accessible at the specified custom domain. */
  enabled?: boolean | null;
  /** Minimum TLS Version the custom domain will accept for incoming connections. If not set, defaults to 1.0. */
  minTLS?: "1.0" | "1.1" | "1.2" | "1.3" | (string & {}) | null;
}

export const UpdateBucketDomainCustomResponse =
  /*@__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      domain: Schema.String,
      ciphers: Schema.optional(
        Schema.Union([Schema.Array(Schema.String), Schema.Null]),
      ),
      enabled: Schema.optional(Schema.Union([Schema.Boolean, Schema.Null])),
      minTLS: Schema.optional(
        Schema.Union([
          Schema.Union([
            Schema.Literals(["1.0", "1.1", "1.2", "1.3"]),
            Schema.String,
          ]),
          Schema.Null,
        ]),
      ),
    }).pipe(T.ResponsePath("result")),
  ) as unknown as Schema.Codec<UpdateBucketDomainCustomResponse>;

export type UpdateBucketDomainCustomError = DefaultErrors | NoSuchBucket;

export const updateBucketDomainCustom: API.OperationMethod<
  UpdateBucketDomainCustomRequest,
  UpdateBucketDomainCustomResponse,
  UpdateBucketDomainCustomError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: UpdateBucketDomainCustomRequest,
  output: UpdateBucketDomainCustomResponse,
  errors: [NoSuchBucket],
}));

export interface DeleteBucketDomainCustomRequest {
  bucketName: string;
  domain: string;
  /** Path param: Account ID. */
  accountId: string;
  /** Header param: Jurisdiction where objects in this bucket are guaranteed to be stored. */
  jurisdiction?: "default" | "eu" | "fedramp" | (string & {});
}

export const DeleteBucketDomainCustomRequest =
  /*@__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      bucketName: Schema.String.pipe(T.HttpPath("bucketName")),
      domain: Schema.String.pipe(T.HttpPath("domain")),
      accountId: Schema.String.pipe(T.HttpPath("account_id")),
      jurisdiction: Schema.optional(
        Schema.Union([
          Schema.Literals(["default", "eu", "fedramp"]),
          Schema.String,
        ]),
      ).pipe(T.HttpHeader("cf-r2-jurisdiction")),
    }).pipe(
      T.Http({
        method: "DELETE",
        path: "/accounts/{account_id}/r2/buckets/{bucketName}/domains/custom/{domain}",
      }),
    ),
  ) as unknown as Schema.Codec<DeleteBucketDomainCustomRequest>;

export interface DeleteBucketDomainCustomResponse {
  /** Name of the removed custom domain. */
  domain: string;
}

export const DeleteBucketDomainCustomResponse =
  /*@__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      domain: Schema.String,
    }).pipe(T.ResponsePath("result")),
  ) as unknown as Schema.Codec<DeleteBucketDomainCustomResponse>;

export type DeleteBucketDomainCustomError =
  | DefaultErrors
  | DomainNotFound
  | NoSuchBucket;

export const deleteBucketDomainCustom: API.OperationMethod<
  DeleteBucketDomainCustomRequest,
  DeleteBucketDomainCustomResponse,
  DeleteBucketDomainCustomError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: DeleteBucketDomainCustomRequest,
  output: DeleteBucketDomainCustomResponse,
  errors: [DomainNotFound, NoSuchBucket],
}));

// =============================================================================
// BucketDomainManaged
// =============================================================================

export interface ListBucketDomainManagedsRequest {
  bucketName: string;
  /** Path param: Account ID. */
  accountId: string;
  /** Header param: Jurisdiction where objects in this bucket are guaranteed to be stored. */
  jurisdiction?: "default" | "eu" | "fedramp" | (string & {});
}

export const ListBucketDomainManagedsRequest =
  /*@__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      bucketName: Schema.String.pipe(T.HttpPath("bucketName")),
      accountId: Schema.String.pipe(T.HttpPath("account_id")),
      jurisdiction: Schema.optional(
        Schema.Union([
          Schema.Literals(["default", "eu", "fedramp"]),
          Schema.String,
        ]),
      ).pipe(T.HttpHeader("cf-r2-jurisdiction")),
    }).pipe(
      T.Http({
        method: "GET",
        path: "/accounts/{account_id}/r2/buckets/{bucketName}/domains/managed",
      }),
    ),
  ) as unknown as Schema.Codec<ListBucketDomainManagedsRequest>;

export interface ListBucketDomainManagedsResponse {
  /** Bucket ID. */
  bucketId: string;
  /** Domain name of the bucket's r2.dev domain. */
  domain: string;
  /** Whether this bucket is publicly accessible at the r2.dev domain. */
  enabled: boolean;
}

export const ListBucketDomainManagedsResponse =
  /*@__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      bucketId: Schema.String,
      domain: Schema.String,
      enabled: Schema.Boolean,
    }).pipe(T.ResponsePath("result")),
  ) as unknown as Schema.Codec<ListBucketDomainManagedsResponse>;

export type ListBucketDomainManagedsError =
  | DefaultErrors
  | NoSuchBucket
  | InvalidRoute;

export const listBucketDomainManageds: API.OperationMethod<
  ListBucketDomainManagedsRequest,
  ListBucketDomainManagedsResponse,
  ListBucketDomainManagedsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: ListBucketDomainManagedsRequest,
  output: ListBucketDomainManagedsResponse,
  errors: [NoSuchBucket, InvalidRoute],
}));

export interface PutBucketDomainManagedRequest {
  bucketName: string;
  /** Path param: Account ID. */
  accountId: string;
  /** Header param: Jurisdiction where objects in this bucket are guaranteed to be stored. */
  jurisdiction?: "default" | "eu" | "fedramp" | (string & {});
  /** Body param: Whether to enable public bucket access at the r2.dev domain. */
  enabled: boolean;
}

export const PutBucketDomainManagedRequest =
  /*@__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      bucketName: Schema.String.pipe(T.HttpPath("bucketName")),
      accountId: Schema.String.pipe(T.HttpPath("account_id")),
      jurisdiction: Schema.optional(
        Schema.Union([
          Schema.Literals(["default", "eu", "fedramp"]),
          Schema.String,
        ]),
      ).pipe(T.HttpHeader("cf-r2-jurisdiction")),
      enabled: Schema.Boolean,
    }).pipe(
      T.Http({
        method: "PUT",
        path: "/accounts/{account_id}/r2/buckets/{bucketName}/domains/managed",
      }),
    ),
  ) as unknown as Schema.Codec<PutBucketDomainManagedRequest>;

export interface PutBucketDomainManagedResponse {
  /** Bucket ID. */
  bucketId: string;
  /** Domain name of the bucket's r2.dev domain. */
  domain: string;
  /** Whether this bucket is publicly accessible at the r2.dev domain. */
  enabled: boolean;
}

export const PutBucketDomainManagedResponse =
  /*@__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      bucketId: Schema.String,
      domain: Schema.String,
      enabled: Schema.Boolean,
    }).pipe(T.ResponsePath("result")),
  ) as unknown as Schema.Codec<PutBucketDomainManagedResponse>;

export type PutBucketDomainManagedError =
  | DefaultErrors
  | NoSuchBucket
  | InvalidRoute;

export const putBucketDomainManaged: API.OperationMethod<
  PutBucketDomainManagedRequest,
  PutBucketDomainManagedResponse,
  PutBucketDomainManagedError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: PutBucketDomainManagedRequest,
  output: PutBucketDomainManagedResponse,
  errors: [NoSuchBucket, InvalidRoute],
}));

// =============================================================================
// BucketEventNotification
// =============================================================================

export interface GetBucketEventNotificationRequest {
  bucketName: string;
  queueId: string;
  /** Path param: Account ID. */
  accountId: string;
  /** Header param: The bucket jurisdiction. */
  jurisdiction?: "default" | "eu" | "fedramp" | (string & {});
}

export const GetBucketEventNotificationRequest =
  /*@__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      bucketName: Schema.String.pipe(T.HttpPath("bucketName")),
      queueId: Schema.String.pipe(T.HttpPath("queueId")),
      accountId: Schema.String.pipe(T.HttpPath("account_id")),
      jurisdiction: Schema.optional(
        Schema.Union([
          Schema.Literals(["default", "eu", "fedramp"]),
          Schema.String,
        ]),
      ).pipe(T.HttpHeader("cf-r2-jurisdiction")),
    }).pipe(
      T.Http({
        method: "GET",
        path: "/accounts/{account_id}/event_notifications/r2/{bucketName}/configuration/queues/{queueId}",
      }),
    ),
  ) as unknown as Schema.Codec<GetBucketEventNotificationRequest>;

export interface GetBucketEventNotificationResponse {
  /** Queue ID. */
  queueId?: string | null;
  /** Name of the queue. */
  queueName?: string | null;
  rules?:
    | {
        actions: (
          | "PutObject"
          | "CopyObject"
          | "DeleteObject"
          | "CompleteMultipartUpload"
          | "LifecycleDeletion"
          | (string & {})
        )[];
        createdAt?: string | null;
        description?: string | null;
        prefix?: string | null;
        ruleId?: string | null;
        suffix?: string | null;
      }[]
    | null;
}

export const GetBucketEventNotificationResponse =
  /*@__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      queueId: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
      queueName: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
      rules: Schema.optional(Schema.Union([Schema.Array(Rule2), Schema.Null])),
    })
      .pipe(
        Schema.encodeKeys({
          queueId: "queue",
          queueName: "queueName",
          rules: "rules",
        }),
      )
      .pipe(T.ResponsePath("result")),
  ) as unknown as Schema.Codec<GetBucketEventNotificationResponse>;

export type GetBucketEventNotificationError =
  | DefaultErrors
  | BucketNotFound
  | NoEventNotificationConfig
  | EventNotificationConfigNotFound
  | QueueNotFound
  | InvalidRoute
  | Forbidden;

export const getBucketEventNotification: API.OperationMethod<
  GetBucketEventNotificationRequest,
  GetBucketEventNotificationResponse,
  GetBucketEventNotificationError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: GetBucketEventNotificationRequest,
  output: GetBucketEventNotificationResponse,
  errors: [
    BucketNotFound,
    NoEventNotificationConfig,
    EventNotificationConfigNotFound,
    QueueNotFound,
    InvalidRoute,
    Forbidden,
  ],
}));

export interface ListBucketEventNotificationsRequest {
  bucketName: string;
  /** Path param: Account ID. */
  accountId: string;
  /** Header param: Jurisdiction where objects in this bucket are guaranteed to be stored. */
  jurisdiction?: "default" | "eu" | "fedramp" | (string & {});
}

export const ListBucketEventNotificationsRequest =
  /*@__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      bucketName: Schema.String.pipe(T.HttpPath("bucketName")),
      accountId: Schema.String.pipe(T.HttpPath("account_id")),
      jurisdiction: Schema.optional(
        Schema.Union([
          Schema.Literals(["default", "eu", "fedramp"]),
          Schema.String,
        ]),
      ).pipe(T.HttpHeader("cf-r2-jurisdiction")),
    }).pipe(
      T.Http({
        method: "GET",
        path: "/accounts/{account_id}/event_notifications/r2/{bucketName}/configuration",
      }),
    ),
  ) as unknown as Schema.Codec<ListBucketEventNotificationsRequest>;

export interface ListBucketEventNotificationsResponse {
  /** Name of the bucket. */
  bucketName?: string | null;
  /** List of queues associated with the bucket. */
  queues?:
    | {
        queueId?: string | null;
        queueName?: string | null;
        rules?:
          | {
              actions: (
                | "PutObject"
                | "CopyObject"
                | "DeleteObject"
                | "CompleteMultipartUpload"
                | "LifecycleDeletion"
                | (string & {})
              )[];
              createdAt?: string | null;
              description?: string | null;
              prefix?: string | null;
              ruleId?: string | null;
              suffix?: string | null;
            }[]
          | null;
      }[]
    | null;
}

export const ListBucketEventNotificationsResponse =
  /*@__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      bucketName: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
      queues: Schema.optional(Schema.Union([Schema.Array(Queue), Schema.Null])),
    }).pipe(T.ResponsePath("result")),
  ) as unknown as Schema.Codec<ListBucketEventNotificationsResponse>;

export type ListBucketEventNotificationsError =
  | DefaultErrors
  | NoSuchBucket
  | InvalidRoute
  | NoEventNotificationConfig
  | BucketNotFound;

export const listBucketEventNotifications: API.OperationMethod<
  ListBucketEventNotificationsRequest,
  ListBucketEventNotificationsResponse,
  ListBucketEventNotificationsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: ListBucketEventNotificationsRequest,
  output: ListBucketEventNotificationsResponse,
  errors: [
    NoSuchBucket,
    InvalidRoute,
    NoEventNotificationConfig,
    BucketNotFound,
  ],
}));

export interface PutBucketEventNotificationRequest {
  bucketName: string;
  queueId: string;
  /** Path param: Account ID. */
  accountId: string;
  /** Header param: Jurisdiction where objects in this bucket are guaranteed to be stored. */
  jurisdiction?: "default" | "eu" | "fedramp" | (string & {});
  /** Body param: Array of rules to drive notifications. */
  rules: {
    actions: (
      | "PutObject"
      | "CopyObject"
      | "DeleteObject"
      | "CompleteMultipartUpload"
      | "LifecycleDeletion"
      | (string & {})
    )[];
    description?: string;
    prefix?: string;
    suffix?: string;
  }[];
}

export const PutBucketEventNotificationRequest =
  /*@__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      bucketName: Schema.String.pipe(T.HttpPath("bucketName")),
      queueId: Schema.String.pipe(T.HttpPath("queueId")),
      accountId: Schema.String.pipe(T.HttpPath("account_id")),
      jurisdiction: Schema.optional(
        Schema.Union([
          Schema.Literals(["default", "eu", "fedramp"]),
          Schema.String,
        ]),
      ).pipe(T.HttpHeader("cf-r2-jurisdiction")),
      rules: Schema.Array(Rule3),
    }).pipe(
      T.Http({
        method: "PUT",
        path: "/accounts/{account_id}/event_notifications/r2/{bucketName}/configuration/queues/{queueId}",
      }),
    ),
  ) as unknown as Schema.Codec<PutBucketEventNotificationRequest>;

export type PutBucketEventNotificationResponse = unknown;

export const PutBucketEventNotificationResponse =
  /*@__PURE__*/ Schema.suspend(() =>
    Schema.Unknown.pipe(T.ResponsePath("result")),
  ) as unknown as Schema.Codec<PutBucketEventNotificationResponse>;

export type PutBucketEventNotificationError =
  | DefaultErrors
  | BucketNotFound
  | InvalidEventNotificationConfig
  | EventNotificationRuleConflict
  | QueueNotFound
  | InvalidRoute;

export const putBucketEventNotification: API.OperationMethod<
  PutBucketEventNotificationRequest,
  PutBucketEventNotificationResponse,
  PutBucketEventNotificationError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: PutBucketEventNotificationRequest,
  output: PutBucketEventNotificationResponse,
  errors: [
    BucketNotFound,
    InvalidEventNotificationConfig,
    EventNotificationRuleConflict,
    QueueNotFound,
    InvalidRoute,
  ],
}));

export interface DeleteBucketEventNotificationRequest {
  bucketName: string;
  queueId: string;
  /** Path param: Account ID. */
  accountId: string;
  /** Header param: Jurisdiction where objects in this bucket are guaranteed to be stored. */
  jurisdiction?: "default" | "eu" | "fedramp" | (string & {});
}

export const DeleteBucketEventNotificationRequest =
  /*@__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      bucketName: Schema.String.pipe(T.HttpPath("bucketName")),
      queueId: Schema.String.pipe(T.HttpPath("queueId")),
      accountId: Schema.String.pipe(T.HttpPath("account_id")),
      jurisdiction: Schema.optional(
        Schema.Union([
          Schema.Literals(["default", "eu", "fedramp"]),
          Schema.String,
        ]),
      ).pipe(T.HttpHeader("cf-r2-jurisdiction")),
    }).pipe(
      T.Http({
        method: "DELETE",
        path: "/accounts/{account_id}/event_notifications/r2/{bucketName}/configuration/queues/{queueId}",
      }),
    ),
  ) as unknown as Schema.Codec<DeleteBucketEventNotificationRequest>;

export type DeleteBucketEventNotificationResponse = unknown;

export const DeleteBucketEventNotificationResponse =
  /*@__PURE__*/ Schema.suspend(() =>
    Schema.Unknown.pipe(T.ResponsePath("result")),
  ) as unknown as Schema.Codec<DeleteBucketEventNotificationResponse>;

export type DeleteBucketEventNotificationError =
  | DefaultErrors
  | BucketNotFound
  | EventNotificationConfigNotFound
  | QueueNotFound
  | InvalidRoute;

export const deleteBucketEventNotification: API.OperationMethod<
  DeleteBucketEventNotificationRequest,
  DeleteBucketEventNotificationResponse,
  DeleteBucketEventNotificationError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: DeleteBucketEventNotificationRequest,
  output: DeleteBucketEventNotificationResponse,
  errors: [
    BucketNotFound,
    EventNotificationConfigNotFound,
    QueueNotFound,
    InvalidRoute,
  ],
}));

// =============================================================================
// BucketLifecycle
// =============================================================================

export interface GetBucketLifecycleRequest {
  bucketName: string;
  /** Path param: Account ID. */
  accountId: string;
  /** Header param: Jurisdiction where objects in this bucket are guaranteed to be stored. */
  jurisdiction?: "default" | "eu" | "fedramp" | (string & {});
}

export const GetBucketLifecycleRequest =
  /*@__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      bucketName: Schema.String.pipe(T.HttpPath("bucketName")),
      accountId: Schema.String.pipe(T.HttpPath("account_id")),
      jurisdiction: Schema.optional(
        Schema.Union([
          Schema.Literals(["default", "eu", "fedramp"]),
          Schema.String,
        ]),
      ).pipe(T.HttpHeader("cf-r2-jurisdiction")),
    }).pipe(
      T.Http({
        method: "GET",
        path: "/accounts/{account_id}/r2/buckets/{bucketName}/lifecycle",
      }),
    ),
  ) as unknown as Schema.Codec<GetBucketLifecycleRequest>;

export interface GetBucketLifecycleResponse {
  rules?:
    | {
        id: string;
        conditions: { prefix?: string | null };
        enabled: boolean;
        abortMultipartUploadsTransition?: {
          condition?: { maxAge: number; type: "Age" } | null;
        } | null;
        deleteObjectsTransition?: {
          condition?:
            | { maxAge: number; type: "Age" }
            | { date: string; type: "Date" }
            | null;
        } | null;
        storageClassTransitions?:
          | {
              condition:
                | { maxAge: number; type: "Age" }
                | { date: string; type: "Date" };
              storageClass: "InfrequentAccess";
            }[]
          | null;
      }[]
    | null;
}

export const GetBucketLifecycleResponse =
  /*@__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      rules: Schema.optional(Schema.Union([Schema.Array(Rule4), Schema.Null])),
    }).pipe(T.ResponsePath("result")),
  ) as unknown as Schema.Codec<GetBucketLifecycleResponse>;

export type GetBucketLifecycleError =
  | DefaultErrors
  | NoSuchBucket
  | InvalidRoute;

export const getBucketLifecycle: API.OperationMethod<
  GetBucketLifecycleRequest,
  GetBucketLifecycleResponse,
  GetBucketLifecycleError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: GetBucketLifecycleRequest,
  output: GetBucketLifecycleResponse,
  errors: [NoSuchBucket, InvalidRoute],
}));

export interface PutBucketLifecycleRequest {
  bucketName: string;
  /** Path param: Account ID. */
  accountId: string;
  /** Header param: Jurisdiction where objects in this bucket are guaranteed to be stored. */
  jurisdiction?: "default" | "eu" | "fedramp" | (string & {});
  /** Body param */
  rules?: {
    id: string;
    conditions: { prefix: string };
    enabled: boolean;
    abortMultipartUploadsTransition?: {
      condition?: { maxAge: number; type: "Age" };
    };
    deleteObjectsTransition?: {
      condition?:
        | { maxAge: number; type: "Age" }
        | { date: string; type: "Date" };
    };
    storageClassTransitions?: {
      condition:
        | { maxAge: number; type: "Age" }
        | { date: string; type: "Date" };
      storageClass: "InfrequentAccess";
    }[];
  }[];
}

export const PutBucketLifecycleRequest =
  /*@__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      bucketName: Schema.String.pipe(T.HttpPath("bucketName")),
      accountId: Schema.String.pipe(T.HttpPath("account_id")),
      jurisdiction: Schema.optional(
        Schema.Union([
          Schema.Literals(["default", "eu", "fedramp"]),
          Schema.String,
        ]),
      ).pipe(T.HttpHeader("cf-r2-jurisdiction")),
      rules: Schema.optional(Schema.Array(Rule5)),
    }).pipe(
      T.Http({
        method: "PUT",
        path: "/accounts/{account_id}/r2/buckets/{bucketName}/lifecycle",
      }),
    ),
  ) as unknown as Schema.Codec<PutBucketLifecycleRequest>;

export type PutBucketLifecycleResponse = unknown;

export const PutBucketLifecycleResponse =
  /*@__PURE__*/ Schema.suspend(() =>
    Schema.Unknown.pipe(T.ResponsePath("result")),
  ) as unknown as Schema.Codec<PutBucketLifecycleResponse>;

export type PutBucketLifecycleError =
  | DefaultErrors
  | NoSuchBucket
  | InvalidRoute;

export const putBucketLifecycle: API.OperationMethod<
  PutBucketLifecycleRequest,
  PutBucketLifecycleResponse,
  PutBucketLifecycleError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: PutBucketLifecycleRequest,
  output: PutBucketLifecycleResponse,
  errors: [NoSuchBucket, InvalidRoute],
}));

// =============================================================================
// BucketLock
// =============================================================================

export interface GetBucketLockRequest {
  bucketName: string;
  /** Path param: Account ID. */
  accountId: string;
  /** Header param: Jurisdiction where objects in this bucket are guaranteed to be stored. */
  jurisdiction?: "default" | "eu" | "fedramp" | (string & {});
}

export const GetBucketLockRequest = /*@__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    bucketName: Schema.String.pipe(T.HttpPath("bucketName")),
    accountId: Schema.String.pipe(T.HttpPath("account_id")),
    jurisdiction: Schema.optional(
      Schema.Union([
        Schema.Literals(["default", "eu", "fedramp"]),
        Schema.String,
      ]),
    ).pipe(T.HttpHeader("cf-r2-jurisdiction")),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/accounts/{account_id}/r2/buckets/{bucketName}/lock",
    }),
  ),
) as unknown as Schema.Codec<GetBucketLockRequest>;

export interface GetBucketLockResponse {
  rules?:
    | {
        id: string;
        condition:
          | { maxAgeSeconds: number; type: "Age" }
          | { date: string; type: "Date" }
          | { type: "Indefinite" };
        enabled: boolean;
        prefix?: string | null;
      }[]
    | null;
}

export const GetBucketLockResponse = /*@__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    rules: Schema.optional(Schema.Union([Schema.Array(Rule6), Schema.Null])),
  }).pipe(T.ResponsePath("result")),
) as unknown as Schema.Codec<GetBucketLockResponse>;

export type GetBucketLockError = DefaultErrors | NoSuchBucket | InvalidRoute;

export const getBucketLock: API.OperationMethod<
  GetBucketLockRequest,
  GetBucketLockResponse,
  GetBucketLockError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: GetBucketLockRequest,
  output: GetBucketLockResponse,
  errors: [NoSuchBucket, InvalidRoute],
}));

export interface PutBucketLockRequest {
  bucketName: string;
  /** Path param: Account ID. */
  accountId: string;
  /** Header param: Jurisdiction where objects in this bucket are guaranteed to be stored. */
  jurisdiction?: "default" | "eu" | "fedramp" | (string & {});
  /** Body param */
  rules?: {
    id: string;
    condition:
      | { maxAgeSeconds: number; type: "Age" }
      | { date: string; type: "Date" }
      | { type: "Indefinite" };
    enabled: boolean;
    prefix?: string;
  }[];
}

export const PutBucketLockRequest = /*@__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    bucketName: Schema.String.pipe(T.HttpPath("bucketName")),
    accountId: Schema.String.pipe(T.HttpPath("account_id")),
    jurisdiction: Schema.optional(
      Schema.Union([
        Schema.Literals(["default", "eu", "fedramp"]),
        Schema.String,
      ]),
    ).pipe(T.HttpHeader("cf-r2-jurisdiction")),
    rules: Schema.optional(Schema.Array(Rule6)),
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/accounts/{account_id}/r2/buckets/{bucketName}/lock",
    }),
  ),
) as unknown as Schema.Codec<PutBucketLockRequest>;

export type PutBucketLockResponse = unknown;

export const PutBucketLockResponse = /*@__PURE__*/ Schema.suspend(() =>
  Schema.Unknown.pipe(T.ResponsePath("result")),
) as unknown as Schema.Codec<PutBucketLockResponse>;

export type PutBucketLockError = DefaultErrors | NoSuchBucket | InvalidRoute;

export const putBucketLock: API.OperationMethod<
  PutBucketLockRequest,
  PutBucketLockResponse,
  PutBucketLockError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: PutBucketLockRequest,
  output: PutBucketLockResponse,
  errors: [NoSuchBucket, InvalidRoute],
}));

// =============================================================================
// BucketMetric
// =============================================================================

export interface ListBucketMetricsRequest {
  /** Account ID. */
  accountId: string;
}

export const ListBucketMetricsRequest =
  /*@__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      accountId: Schema.String.pipe(T.HttpPath("account_id")),
    }).pipe(
      T.Http({ method: "GET", path: "/accounts/{account_id}/r2/metrics" }),
    ),
  ) as unknown as Schema.Codec<ListBucketMetricsRequest>;

export interface ListBucketMetricsResponse {
  /** Metrics based on what state they are in(uploaded or published). */
  infrequentAccess?: {
    published?: {
      metadataSize?: number | null;
      objects?: number | null;
      payloadSize?: number | null;
    } | null;
    uploaded?: {
      metadataSize?: number | null;
      objects?: number | null;
      payloadSize?: number | null;
    } | null;
  } | null;
  /** Metrics based on what state they are in(uploaded or published). */
  standard?: {
    published?: {
      metadataSize?: number | null;
      objects?: number | null;
      payloadSize?: number | null;
    } | null;
    uploaded?: {
      metadataSize?: number | null;
      objects?: number | null;
      payloadSize?: number | null;
    } | null;
  } | null;
}

export const ListBucketMetricsResponse =
  /*@__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      infrequentAccess: Schema.optional(
        Schema.Union([InfrequentAccess, Schema.Null]),
      ),
      standard: Schema.optional(Schema.Union([InfrequentAccess, Schema.Null])),
    }).pipe(T.ResponsePath("result")),
  ) as unknown as Schema.Codec<ListBucketMetricsResponse>;

export type ListBucketMetricsError = DefaultErrors | InvalidRoute;

export const listBucketMetrics: API.OperationMethod<
  ListBucketMetricsRequest,
  ListBucketMetricsResponse,
  ListBucketMetricsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: ListBucketMetricsRequest,
  output: ListBucketMetricsResponse,
  errors: [InvalidRoute],
}));

// =============================================================================
// BucketObject
// =============================================================================

export interface GetBucketObjectRequest {
  bucketName: string;
  objectKey: string;
  /** Path param: Account ID. */
  accountId: string;
  /** Header param: Jurisdiction where objects in this bucket are guaranteed to be stored. */
  jurisdiction?: "default" | "eu" | "fedramp" | (string & {});
  /** Header param: Returns the object only if it has been modified since the specified time. Must be formatted as an HTTP-date (RFC 7231), e.g. `Tue, 15 Jan 2024 10:30:00 GMT`. */
  ifModifiedSince?: string;
  /** Header param: Returns the object only if its ETag does not match the given value. */
  ifNoneMatch?: string;
}

export const GetBucketObjectRequest =
  /*@__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      bucketName: Schema.String.pipe(T.HttpPath("bucketName")),
      objectKey: Schema.String.pipe(T.HttpPath("objectKey")),
      accountId: Schema.String.pipe(T.HttpPath("account_id")),
      jurisdiction: Schema.optional(
        Schema.Union([
          Schema.Literals(["default", "eu", "fedramp"]),
          Schema.String,
        ]),
      ).pipe(T.HttpHeader("cf-r2-jurisdiction")),
      ifModifiedSince: Schema.optional(Schema.String).pipe(
        T.HttpHeader("If-Modified-Since"),
      ),
      ifNoneMatch: Schema.optional(Schema.String).pipe(
        T.HttpHeader("If-None-Match"),
      ),
    }).pipe(
      T.Http({
        method: "GET",
        path: "/accounts/{account_id}/r2/buckets/{bucketName}/objects/{objectKey}",
      }),
    ),
  ) as unknown as Schema.Codec<GetBucketObjectRequest>;

export type GetBucketObjectResponse = unknown;

export const GetBucketObjectResponse =
  /*@__PURE__*/ Schema.suspend(
    () => Schema.Unknown,
  ) as unknown as Schema.Codec<GetBucketObjectResponse>;

export type GetBucketObjectError = DefaultErrors;

export const getBucketObject: API.OperationMethod<
  GetBucketObjectRequest,
  GetBucketObjectResponse,
  GetBucketObjectError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: GetBucketObjectRequest,
  output: GetBucketObjectResponse,
  errors: [],
}));

export interface ListBucketObjectsRequest {
  bucketName: string;
  /** Path param: Account ID. */
  accountId: string;
  perPage?: number;
  cursor?: string;
  /** Query param: A single character used to group keys. All keys that contain the delimiter between the prefix and the first occurrence of the delimiter after the prefix are grouped under a single result  */
  delimiter?: string;
  /** Query param: Restricts results to only those objects whose keys begin with the specified prefix. */
  prefix?: string;
  /** Query param: Returns objects with keys that come after the specified key in lexicographic order. */
  startAfter?: string;
  /** Header param: Jurisdiction where objects in this bucket are guaranteed to be stored. */
  jurisdiction?: "default" | "eu" | "fedramp" | (string & {});
}

export const ListBucketObjectsRequest =
  /*@__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      bucketName: Schema.String.pipe(T.HttpPath("bucketName")),
      accountId: Schema.String.pipe(T.HttpPath("account_id")),
      perPage: Schema.optional(Schema.Number).pipe(T.HttpQuery("per_page")),
      cursor: Schema.optional(Schema.String).pipe(T.HttpQuery("cursor")),
      delimiter: Schema.optional(Schema.String).pipe(T.HttpQuery("delimiter")),
      prefix: Schema.optional(Schema.String).pipe(T.HttpQuery("prefix")),
      startAfter: Schema.optional(Schema.String).pipe(
        T.HttpQuery("start_after"),
      ),
      jurisdiction: Schema.optional(
        Schema.Union([
          Schema.Literals(["default", "eu", "fedramp"]),
          Schema.String,
        ]),
      ).pipe(T.HttpHeader("cf-r2-jurisdiction")),
    }).pipe(
      T.Http({
        method: "GET",
        path: "/accounts/{account_id}/r2/buckets/{bucketName}/objects",
      }),
    ),
  ) as unknown as Schema.Codec<ListBucketObjectsRequest>;

export interface ListBucketObjectsResponse {
  result: {
    customMetadata?: Record<string, unknown> | null;
    etag?: string | null;
    httpMetadata?: {
      cacheControl?: string | null;
      cacheExpiry?: string | null;
      contentDisposition?: string | null;
      contentEncoding?: string | null;
      contentLanguage?: string | null;
      contentType?: string | null;
    } | null;
    key?: string | null;
    lastModified?: string | null;
    size?: number | null;
    ssec?: boolean | null;
    storageClass?: "Standard" | "InfrequentAccess" | (string & {}) | null;
  }[];
  resultInfo?: {
    count?: number | null;
    cursor?: string | null;
    perPage?: number | null;
  } | null;
}

export const ListBucketObjectsResponse =
  /*@__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      result: Schema.Array(ListBucketObjectsResponseResult),
      resultInfo: Schema.optional(
        Schema.Union([ListBucketObjectsResponseResultInfo, Schema.Null]),
      ),
    }).pipe(Schema.encodeKeys({ result: "result", resultInfo: "result_info" })),
  ) as unknown as Schema.Codec<ListBucketObjectsResponse>;

export type ListBucketObjectsError = DefaultErrors;

export const listBucketObjects: API.PaginatedOperationMethod<
  ListBucketObjectsRequest,
  ListBucketObjectsResponse,
  ListBucketObjectsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: ListBucketObjectsRequest,
  output: ListBucketObjectsResponse,
  errors: [],
  pagination: {
    mode: "cursor",
    inputToken: "cursor",
    outputToken: "resultInfo.cursor",
    items: "result",
    pageSize: "perPage",
  } as const,
}));

export interface DeleteBucketObjectRequest {
  bucketName: string;
  objectKey: string;
  /** Path param: Account ID. */
  accountId: string;
  /** Header param: Jurisdiction where objects in this bucket are guaranteed to be stored. */
  jurisdiction?: "default" | "eu" | "fedramp" | (string & {});
}

export const DeleteBucketObjectRequest =
  /*@__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      bucketName: Schema.String.pipe(T.HttpPath("bucketName")),
      objectKey: Schema.String.pipe(T.HttpPath("objectKey")),
      accountId: Schema.String.pipe(T.HttpPath("account_id")),
      jurisdiction: Schema.optional(
        Schema.Union([
          Schema.Literals(["default", "eu", "fedramp"]),
          Schema.String,
        ]),
      ).pipe(T.HttpHeader("cf-r2-jurisdiction")),
    }).pipe(
      T.Http({
        method: "DELETE",
        path: "/accounts/{account_id}/r2/buckets/{bucketName}/objects/{objectKey}",
      }),
    ),
  ) as unknown as Schema.Codec<DeleteBucketObjectRequest>;

export interface DeleteBucketObjectResponse {
  /** The key (name) of the deleted object. */
  key?: string | null;
}

export const DeleteBucketObjectResponse =
  /*@__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      key: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
    }).pipe(T.ResponsePath("result")),
  ) as unknown as Schema.Codec<DeleteBucketObjectResponse>;

export type DeleteBucketObjectError = DefaultErrors;

export const deleteBucketObject: API.OperationMethod<
  DeleteBucketObjectRequest,
  DeleteBucketObjectResponse,
  DeleteBucketObjectError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: DeleteBucketObjectRequest,
  output: DeleteBucketObjectResponse,
  errors: [],
}));

export interface UploadBucketObjectRequest {
  bucketName: string;
  objectKey: string;
  /** Path param: Account ID. */
  accountId: string;
  /** Header param: Jurisdiction where objects in this bucket are guaranteed to be stored. */
  jurisdiction?: "default" | "eu" | "fedramp" | (string & {});
  /** Header param: Storage class for newly uploaded objects, unless specified otherwise. */
  cfR2StorageClass?: "Standard" | "InfrequentAccess" | (string & {});
}

export const UploadBucketObjectRequest =
  /*@__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      bucketName: Schema.String.pipe(T.HttpPath("bucketName")),
      objectKey: Schema.String.pipe(T.HttpPath("objectKey")),
      accountId: Schema.String.pipe(T.HttpPath("account_id")),
      jurisdiction: Schema.optional(
        Schema.Union([
          Schema.Literals(["default", "eu", "fedramp"]),
          Schema.String,
        ]),
      ).pipe(T.HttpHeader("cf-r2-jurisdiction")),
      cfR2StorageClass: Schema.optional(
        Schema.Union([
          Schema.Literals(["Standard", "InfrequentAccess"]),
          Schema.String,
        ]),
      ).pipe(T.HttpHeader("cf-r2-storage-class")),
    }).pipe(
      T.Http({
        method: "PUT",
        path: "/accounts/{account_id}/r2/buckets/{bucketName}/objects/{objectKey}",
      }),
    ),
  ) as unknown as Schema.Codec<UploadBucketObjectRequest>;

export interface UploadBucketObjectResponse {
  /** The entity tag for the uploaded object. */
  etag?: string | null;
  /** The key (name) of the uploaded object. */
  key?: string | null;
  /** The size of the uploaded object in bytes (as a string). */
  size?: string | null;
  /** Storage class for newly uploaded objects, unless specified otherwise. */
  storageClass?: "Standard" | "InfrequentAccess" | (string & {}) | null;
  /** The date and time the object was uploaded. */
  uploaded?: string | null;
  /** The version UUID of the uploaded object. */
  version?: string | null;
}

export const UploadBucketObjectResponse =
  /*@__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      etag: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
      key: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
      size: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
      storageClass: Schema.optional(
        Schema.Union([
          Schema.Union([
            Schema.Literals(["Standard", "InfrequentAccess"]),
            Schema.String,
          ]),
          Schema.Null,
        ]),
      ),
      uploaded: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
      version: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
    })
      .pipe(
        Schema.encodeKeys({
          etag: "etag",
          key: "key",
          size: "size",
          storageClass: "storage_class",
          uploaded: "uploaded",
          version: "version",
        }),
      )
      .pipe(T.ResponsePath("result")),
  ) as unknown as Schema.Codec<UploadBucketObjectResponse>;

export type UploadBucketObjectError = DefaultErrors;

export const uploadBucketObject: API.OperationMethod<
  UploadBucketObjectRequest,
  UploadBucketObjectResponse,
  UploadBucketObjectError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: UploadBucketObjectRequest,
  output: UploadBucketObjectResponse,
  errors: [],
}));

// =============================================================================
// BucketSippy
// =============================================================================

export interface GetBucketSippyRequest {
  bucketName: string;
  /** Path param: Account ID. */
  accountId: string;
  /** Header param: Jurisdiction where objects in this bucket are guaranteed to be stored. */
  jurisdiction?: "default" | "eu" | "fedramp" | (string & {});
}

export const GetBucketSippyRequest = /*@__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    bucketName: Schema.String.pipe(T.HttpPath("bucketName")),
    accountId: Schema.String.pipe(T.HttpPath("account_id")),
    jurisdiction: Schema.optional(
      Schema.Union([
        Schema.Literals(["default", "eu", "fedramp"]),
        Schema.String,
      ]),
    ).pipe(T.HttpHeader("cf-r2-jurisdiction")),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/accounts/{account_id}/r2/buckets/{bucketName}/sippy",
    }),
  ),
) as unknown as Schema.Codec<GetBucketSippyRequest>;

export interface GetBucketSippyResponse {
  /** Details about the configured destination bucket. */
  destination?: {
    accessKeyId?: string | null;
    account?: string | null;
    bucket?: string | null;
    provider?: "r2" | null;
  } | null;
  /** State of Sippy for this bucket. */
  enabled?: boolean | null;
  /** Details about the configured source bucket. */
  source?: {
    bucket?: string | null;
    bucketUrl?: string | null;
    provider?: "aws" | "gcs" | "s3" | (string & {}) | null;
    region?: string | null;
  } | null;
}

export const GetBucketSippyResponse =
  /*@__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      destination: Schema.optional(Schema.Union([Destination, Schema.Null])),
      enabled: Schema.optional(Schema.Union([Schema.Boolean, Schema.Null])),
      source: Schema.optional(Schema.Union([Source, Schema.Null])),
    }).pipe(T.ResponsePath("result")),
  ) as unknown as Schema.Codec<GetBucketSippyResponse>;

export type GetBucketSippyError =
  | DefaultErrors
  | NoSuchBucket
  | InvalidRoute
  | Forbidden;

export const getBucketSippy: API.OperationMethod<
  GetBucketSippyRequest,
  GetBucketSippyResponse,
  GetBucketSippyError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: GetBucketSippyRequest,
  output: GetBucketSippyResponse,
  errors: [NoSuchBucket, InvalidRoute, Forbidden],
}));

export interface PutBucketSippyRequest {
  bucketName: string;
  /** Path param: Account ID. */
  accountId: string;
  /** Header param: Jurisdiction where objects in this bucket are guaranteed to be stored. */
  jurisdiction?: "default" | "eu" | "fedramp" | (string & {});
  /** Body param: R2 bucket to copy objects to. */
  destination?: {
    accessKeyId?: string;
    provider?: "r2";
    secretAccessKey?: string;
  };
  /** Body param: AWS S3 bucket to copy objects from. */
  source?: {
    accessKeyId?: string;
    bucket?: string;
    provider?: "aws" | "gcs" | "s3" | (string & {});
    region?: string;
    secretAccessKey?: string;
    clientEmail?: string;
    privateKey?: string;
    bucketUrl?: string;
  };
}

export const PutBucketSippyRequest = /*@__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    bucketName: Schema.String.pipe(T.HttpPath("bucketName")),
    accountId: Schema.String.pipe(T.HttpPath("account_id")),
    jurisdiction: Schema.optional(
      Schema.Union([
        Schema.Literals(["default", "eu", "fedramp"]),
        Schema.String,
      ]),
    ).pipe(T.HttpHeader("cf-r2-jurisdiction")),
    destination: Schema.optional(Destination2),
    source: Schema.optional(Source2),
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/accounts/{account_id}/r2/buckets/{bucketName}/sippy",
    }),
  ),
) as unknown as Schema.Codec<PutBucketSippyRequest>;

export interface PutBucketSippyResponse {
  /** Details about the configured destination bucket. */
  destination?: {
    accessKeyId?: string | null;
    account?: string | null;
    bucket?: string | null;
    provider?: "r2" | null;
  } | null;
  /** State of Sippy for this bucket. */
  enabled?: boolean | null;
  /** Details about the configured source bucket. */
  source?: {
    bucket?: string | null;
    bucketUrl?: string | null;
    provider?: "aws" | "gcs" | "s3" | (string & {}) | null;
    region?: string | null;
  } | null;
}

export const PutBucketSippyResponse =
  /*@__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      destination: Schema.optional(Schema.Union([Destination, Schema.Null])),
      enabled: Schema.optional(Schema.Union([Schema.Boolean, Schema.Null])),
      source: Schema.optional(Schema.Union([Source, Schema.Null])),
    }).pipe(T.ResponsePath("result")),
  ) as unknown as Schema.Codec<PutBucketSippyResponse>;

export type PutBucketSippyError =
  | DefaultErrors
  | InvalidUpstreamCredentials
  | InvalidRoute;

export const putBucketSippy: API.OperationMethod<
  PutBucketSippyRequest,
  PutBucketSippyResponse,
  PutBucketSippyError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: PutBucketSippyRequest,
  output: PutBucketSippyResponse,
  errors: [InvalidUpstreamCredentials, InvalidRoute],
}));

export interface DeleteBucketSippyRequest {
  bucketName: string;
  /** Path param: Account ID. */
  accountId: string;
  /** Header param: Jurisdiction where objects in this bucket are guaranteed to be stored. */
  jurisdiction?: "default" | "eu" | "fedramp" | (string & {});
}

export const DeleteBucketSippyRequest =
  /*@__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      bucketName: Schema.String.pipe(T.HttpPath("bucketName")),
      accountId: Schema.String.pipe(T.HttpPath("account_id")),
      jurisdiction: Schema.optional(
        Schema.Union([
          Schema.Literals(["default", "eu", "fedramp"]),
          Schema.String,
        ]),
      ).pipe(T.HttpHeader("cf-r2-jurisdiction")),
    }).pipe(
      T.Http({
        method: "DELETE",
        path: "/accounts/{account_id}/r2/buckets/{bucketName}/sippy",
      }),
    ),
  ) as unknown as Schema.Codec<DeleteBucketSippyRequest>;

export interface DeleteBucketSippyResponse {
  enabled?: false | null;
}

export const DeleteBucketSippyResponse =
  /*@__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      enabled: Schema.optional(
        Schema.Union([Schema.Literal(false), Schema.Null]),
      ),
    }).pipe(T.ResponsePath("result")),
  ) as unknown as Schema.Codec<DeleteBucketSippyResponse>;

export type DeleteBucketSippyError =
  | DefaultErrors
  | NoSuchBucket
  | InvalidRoute;

export const deleteBucketSippy: API.OperationMethod<
  DeleteBucketSippyRequest,
  DeleteBucketSippyResponse,
  DeleteBucketSippyError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: DeleteBucketSippyRequest,
  output: DeleteBucketSippyResponse,
  errors: [NoSuchBucket, InvalidRoute],
}));

// =============================================================================
// Object
// =============================================================================

export interface GetObjectRequest {
  /** Name of the R2 bucket. */
  bucketName: string;
  /** Key (name) of the object. */
  objectName: string;
  /** Account ID. */
  accountId: string;
  /** Jurisdiction where objects in this bucket are guaranteed to be stored. */
  cfR2Jurisdiction?: "default" | "eu" | "fedramp" | (string & {});
}

export const GetObjectRequest = /*@__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    bucketName: Schema.String.pipe(T.HttpPath("bucketName")),
    objectName: Schema.String.pipe(T.HttpPath("objectName")),
    accountId: Schema.String.pipe(T.HttpPath("account_id")),
    cfR2Jurisdiction: Schema.optional(
      Schema.Union([
        Schema.Literals(["default", "eu", "fedramp"]),
        Schema.String,
      ]),
    ).pipe(T.HttpHeader("cf-r2-jurisdiction")),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/accounts/{account_id}/r2/buckets/{bucketName}/objects/{objectName}",
      responseContentType: "binary",
    }),
  ),
) as unknown as Schema.Codec<GetObjectRequest>;

export interface GetObjectResponse {
  /** Raw object body as an Effect Stream. */
  body: Stream.Stream<Uint8Array, HttpClientError.HttpClientError>;
  /** Entity tag of the object (raw hex digest). */
  etag?: string;
  /** MIME type of the object. */
  contentType?: string;
  /** Object size in bytes. */
  contentLength?: number;
  /** Content encoding of the object (e.g. `gzip`). */
  contentEncoding?: string;
  /** Content disposition header for the object. */
  contentDisposition?: string;
  /** Content language of the object. */
  contentLanguage?: string;
  /** Byte range returned (set when the request used `Range`). */
  contentRange?: string;
  /** Cache-Control directives associated with the object. */
  cacheControl?: string;
  /** Expiration date of the object. */
  expires?: string;
  /** When the object was last modified (RFC 7231 date). */
  lastModified?: string;
  /** Storage class of the object (`Standard` or `InfrequentAccess`). */
  cfR2StorageClass?: "Standard" | "InfrequentAccess" | (string & {});
}

export const GetObjectResponse = /*@__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    body: BinaryStreamResponseSchema.pipe(T.BinaryResponseBody()),
    etag: Schema.optional(Schema.String).pipe(T.HttpResponseHeader("etag")),
    contentType: Schema.optional(Schema.String).pipe(
      T.HttpResponseHeader("content-type"),
    ),
    contentLength: Schema.optional(Schema.Number).pipe(
      T.HttpResponseHeader("content-length"),
    ),
    contentEncoding: Schema.optional(Schema.String).pipe(
      T.HttpResponseHeader("content-encoding"),
    ),
    contentDisposition: Schema.optional(Schema.String).pipe(
      T.HttpResponseHeader("content-disposition"),
    ),
    contentLanguage: Schema.optional(Schema.String).pipe(
      T.HttpResponseHeader("content-language"),
    ),
    contentRange: Schema.optional(Schema.String).pipe(
      T.HttpResponseHeader("content-range"),
    ),
    cacheControl: Schema.optional(Schema.String).pipe(
      T.HttpResponseHeader("cache-control"),
    ),
    expires: Schema.optional(Schema.String).pipe(
      T.HttpResponseHeader("expires"),
    ),
    lastModified: Schema.optional(Schema.String).pipe(
      T.HttpResponseHeader("last-modified"),
    ),
    cfR2StorageClass: Schema.optional(
      Schema.Union([
        Schema.Literals(["Standard", "InfrequentAccess"]),
        Schema.String,
      ]),
    ).pipe(T.HttpResponseHeader("cf-r2-storage-class")),
  }),
) as unknown as Schema.Codec<GetObjectResponse>;

export type GetObjectError =
  | DefaultErrors
  | NoSuchBucket
  | InvalidRoute
  | NoRoute
  | NoSuchKey
  | NoSuchBucket
  | InvalidRoute;

export const getObject: API.OperationMethod<
  GetObjectRequest,
  GetObjectResponse,
  GetObjectError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: GetObjectRequest,
  output: GetObjectResponse,
  errors: [
    NoSuchBucket,
    InvalidRoute,
    NoRoute,
    NoSuchKey,
    NoSuchBucket,
    InvalidRoute,
  ],
}));

export interface ListObjectsRequest {
  /** Name of the R2 bucket. */
  bucketName: string;
  /** Account ID. */
  accountId: string;
  /** Maximum number of objects to return per page (1-1000). */
  perPage?: number;
  /** Restrict results to keys beginning with this prefix. */
  prefix?: string;
  /** Single character used to group keys. */
  delimiter?: string;
  /** Pagination cursor returned by a previous List Objects call. */
  cursor?: string;
  /** Returns keys lexicographically after this key. */
  startAfter?: string;
  /** Jurisdiction where objects in this bucket are guaranteed to be stored. */
  cfR2Jurisdiction?: "default" | "eu" | "fedramp" | (string & {});
}

export const ListObjectsRequest = /*@__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    bucketName: Schema.String.pipe(T.HttpPath("bucketName")),
    accountId: Schema.String.pipe(T.HttpPath("account_id")),
    perPage: Schema.optional(Schema.Number).pipe(T.HttpQuery("per_page")),
    prefix: Schema.optional(Schema.String).pipe(T.HttpQuery("prefix")),
    delimiter: Schema.optional(Schema.String).pipe(T.HttpQuery("delimiter")),
    cursor: Schema.optional(Schema.String).pipe(T.HttpQuery("cursor")),
    startAfter: Schema.optional(Schema.String).pipe(T.HttpQuery("start_after")),
    cfR2Jurisdiction: Schema.optional(
      Schema.Union([
        Schema.Literals(["default", "eu", "fedramp"]),
        Schema.String,
      ]),
    ).pipe(T.HttpHeader("cf-r2-jurisdiction")),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/accounts/{account_id}/r2/buckets/{bucketName}/objects",
    }),
  ),
) as unknown as Schema.Codec<ListObjectsRequest>;

export interface ListObjectsResponse {
  result: {
    key?: string | null;
    size?: number | null;
    etag?: string | null;
    lastModified?: string | null;
    storageClass?: "Standard" | "InfrequentAccess" | (string & {}) | null;
    ssec?: boolean | null;
    customMetadata?: unknown | null;
    httpMetadata?: unknown | null;
  }[];
  resultInfo?: {
    count?: number | null;
    cursor?: string | null;
    perPage?: number | null;
  } | null;
}

export const ListObjectsResponse = /*@__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    result: Schema.Array(ListObjectsResponseResult),
    resultInfo: Schema.optional(
      Schema.Union([ListBucketObjectsResponseResultInfo, Schema.Null]),
    ),
  }).pipe(Schema.encodeKeys({ result: "result", resultInfo: "result_info" })),
) as unknown as Schema.Codec<ListObjectsResponse>;

export type ListObjectsError =
  | DefaultErrors
  | NoSuchBucket
  | InvalidRoute
  | NoRoute;

export const listObjects: API.PaginatedOperationMethod<
  ListObjectsRequest,
  ListObjectsResponse,
  ListObjectsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: ListObjectsRequest,
  output: ListObjectsResponse,
  errors: [NoSuchBucket, InvalidRoute, NoRoute],
  pagination: {
    mode: "cursor",
    inputToken: "cursor",
    outputToken: "resultInfo.cursor",
    items: "result",
    pageSize: "perPage",
  } as const,
}));

export interface PutObjectRequest {
  /** Name of the R2 bucket. */
  bucketName: string;
  /** Key (name) of the object. */
  objectName: string;
  /** Account ID. */
  accountId: string;
  /** Jurisdiction where objects in this bucket are guaranteed to be stored. */
  cfR2Jurisdiction?: "default" | "eu" | "fedramp" | (string & {});
  /** MIME type of the object. */
  contentType?: string;
  /** Content disposition of the object. */
  contentDisposition?: string;
  /** Content encoding of the object. */
  contentEncoding?: string;
  /** Content language of the object. */
  contentLanguage?: string;
  /** Content length of the object in bytes. */
  contentLength?: string;
  /** Cache control directives for the object. */
  cacheControl?: string;
  /** Expiration date of the object. */
  expires?: string;
  /** Storage class for the object. */
  cfR2StorageClass?: "Standard" | "InfrequentAccess" | (string & {});
  body: Blob | Uint8Array | ArrayBuffer | string;
}

export const PutObjectRequest = /*@__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    bucketName: Schema.String.pipe(T.HttpPath("bucketName")),
    objectName: Schema.String.pipe(T.HttpPath("objectName")),
    accountId: Schema.String.pipe(T.HttpPath("account_id")),
    cfR2Jurisdiction: Schema.optional(
      Schema.Union([
        Schema.Literals(["default", "eu", "fedramp"]),
        Schema.String,
      ]),
    ).pipe(T.HttpHeader("cf-r2-jurisdiction")),
    contentType: Schema.optional(Schema.String).pipe(
      T.HttpHeader("content-type"),
    ),
    contentDisposition: Schema.optional(Schema.String).pipe(
      T.HttpHeader("content-disposition"),
    ),
    contentEncoding: Schema.optional(Schema.String).pipe(
      T.HttpHeader("content-encoding"),
    ),
    contentLanguage: Schema.optional(Schema.String).pipe(
      T.HttpHeader("content-language"),
    ),
    contentLength: Schema.optional(Schema.String).pipe(
      T.HttpHeader("content-length"),
    ),
    cacheControl: Schema.optional(Schema.String).pipe(
      T.HttpHeader("cache-control"),
    ),
    expires: Schema.optional(Schema.String).pipe(T.HttpHeader("expires")),
    cfR2StorageClass: Schema.optional(
      Schema.Union([
        Schema.Literals(["Standard", "InfrequentAccess"]),
        Schema.String,
      ]),
    ).pipe(T.HttpHeader("cf-r2-storage-class")),
    body: BinaryBodySchema.pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/accounts/{account_id}/r2/buckets/{bucketName}/objects/{objectName}",
      contentType: "binary",
    }),
  ),
) as unknown as Schema.Codec<PutObjectRequest>;

export type PutObjectResponse = unknown;

export const PutObjectResponse = /*@__PURE__*/ Schema.suspend(() =>
  Schema.Unknown.pipe(T.ResponsePath("result")),
) as unknown as Schema.Codec<PutObjectResponse>;

export type PutObjectError =
  | DefaultErrors
  | NoSuchBucket
  | InvalidRoute
  | NoRoute;

export const putObject: API.OperationMethod<
  PutObjectRequest,
  PutObjectResponse,
  PutObjectError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: PutObjectRequest,
  output: PutObjectResponse,
  errors: [NoSuchBucket, InvalidRoute, NoRoute],
}));

export interface DeleteObjectsRequest {
  /** Name of the R2 bucket. */
  bucketName: string;
  /** Account ID. */
  accountId: string;
  /** When set, switches to "delete by prefix" mode and asynchronously deletes every object whose key begins with the given prefix. The response is a prefix-delete job descriptor instead of a per-key list.  */
  prefix?: string;
  /** Jurisdiction where objects in this bucket are guaranteed to be stored. */
  cfR2Jurisdiction?: "default" | "eu" | "fedramp" | (string & {});
  body?: string[];
}

export const DeleteObjectsRequest = /*@__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    bucketName: Schema.String.pipe(T.HttpPath("bucketName")),
    accountId: Schema.String.pipe(T.HttpPath("account_id")),
    prefix: Schema.optional(Schema.String).pipe(T.HttpQuery("prefix")),
    cfR2Jurisdiction: Schema.optional(
      Schema.Union([
        Schema.Literals(["default", "eu", "fedramp"]),
        Schema.String,
      ]),
    ).pipe(T.HttpHeader("cf-r2-jurisdiction")),
    body: Schema.optional(Schema.Array(Schema.String)).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/accounts/{account_id}/r2/buckets/{bucketName}/objects",
    }),
  ),
) as unknown as Schema.Codec<DeleteObjectsRequest>;

export type DeleteObjectsResponse =
  | { key?: string | null }[]
  | {
      id?: string | null;
      jobType?: "prefixDelete" | null;
      status?:
        | "ENQUEUED"
        | "RUNNING"
        | "COMPLETED"
        | "FAILED"
        | "CANCELLED"
        | (string & {})
        | null;
      startTime?: string | null;
      endTime?: string | null;
      prefixDelete?: {
        prefix?: string | null;
        deletedObjects?: number | null;
        isBucketClear?: boolean | null;
      } | null;
    };

export const DeleteObjectsResponse = /*@__PURE__*/ Schema.suspend(() =>
  Schema.Union([
    Schema.Array(DeleteObjectsResponse2),
    DeleteObjectsResponse1,
  ]).pipe(T.ResponsePath("result")),
) as unknown as Schema.Codec<DeleteObjectsResponse>;

export type DeleteObjectsError =
  | DefaultErrors
  | NoSuchBucket
  | InvalidRoute
  | NoRoute;

export const deleteObjects: API.OperationMethod<
  DeleteObjectsRequest,
  DeleteObjectsResponse,
  DeleteObjectsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: DeleteObjectsRequest,
  output: DeleteObjectsResponse,
  errors: [NoSuchBucket, InvalidRoute, NoRoute],
}));

export interface DeleteObjectRequest {
  /** Name of the R2 bucket. */
  bucketName: string;
  /** Key (name) of the object. */
  objectName: string;
  /** Account ID. */
  accountId: string;
  /** Jurisdiction where objects in this bucket are guaranteed to be stored. */
  cfR2Jurisdiction?: "default" | "eu" | "fedramp" | (string & {});
}

export const DeleteObjectRequest = /*@__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    bucketName: Schema.String.pipe(T.HttpPath("bucketName")),
    objectName: Schema.String.pipe(T.HttpPath("objectName")),
    accountId: Schema.String.pipe(T.HttpPath("account_id")),
    cfR2Jurisdiction: Schema.optional(
      Schema.Union([
        Schema.Literals(["default", "eu", "fedramp"]),
        Schema.String,
      ]),
    ).pipe(T.HttpHeader("cf-r2-jurisdiction")),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/accounts/{account_id}/r2/buckets/{bucketName}/objects/{objectName}",
    }),
  ),
) as unknown as Schema.Codec<DeleteObjectRequest>;

export type DeleteObjectResponse = unknown;

export const DeleteObjectResponse = /*@__PURE__*/ Schema.suspend(() =>
  Schema.Unknown.pipe(T.ResponsePath("result")),
) as unknown as Schema.Codec<DeleteObjectResponse>;

export type DeleteObjectError =
  | DefaultErrors
  | NoSuchBucket
  | InvalidRoute
  | NoRoute;

export const deleteObject: API.OperationMethod<
  DeleteObjectRequest,
  DeleteObjectResponse,
  DeleteObjectError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: DeleteObjectRequest,
  output: DeleteObjectResponse,
  errors: [NoSuchBucket, InvalidRoute, NoRoute],
}));

// =============================================================================
// SuperSlurperConnectivityPrecheck
// =============================================================================

export interface SourceSuperSlurperConnectivityPrecheckRequest {
  /** Path param */
  accountId: string;
  /** Body param */
  bucket: string;
  /** Body param */
  secret: {
    accessKeyId?: string;
    secretAccessKey?: string;
    clientEmail?: string;
    privateKey?: string;
  };
  /** Body param */
  vendor: "s3" | "gcs" | "r2" | (string & {});
  /** Body param: Custom S3-compatible endpoint that must use https://. */
  endpoint?: string | null;
  /** Body param */
  keys?: string[] | null;
  /** Body param */
  pathPrefix?: string | null;
  /** Body param */
  region?: string | null;
  /** Body param */
  jurisdiction?: "default" | "eu" | "fedramp" | (string & {});
}

export const SourceSuperSlurperConnectivityPrecheckRequest =
  /*@__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      accountId: Schema.String.pipe(T.HttpPath("account_id")),
      bucket: Schema.String,
      secret: Secret,
      vendor: Schema.Union([
        Schema.Literals(["s3", "gcs", "r2"]),
        Schema.String,
      ]),
      endpoint: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
      keys: Schema.optional(
        Schema.Union([Schema.Array(Schema.String), Schema.Null]),
      ),
      pathPrefix: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
      region: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
      jurisdiction: Schema.optional(
        Schema.Union([
          Schema.Literals(["default", "eu", "fedramp"]),
          Schema.String,
        ]),
      ),
    }).pipe(
      T.Http({
        method: "PUT",
        path: "/accounts/{account_id}/slurper/source/connectivity-precheck",
      }),
    ),
  ) as unknown as Schema.Codec<SourceSuperSlurperConnectivityPrecheckRequest>;

export interface SourceSuperSlurperConnectivityPrecheckResponse {
  connectivityStatus?: "success" | "error" | (string & {}) | null;
}

export const SourceSuperSlurperConnectivityPrecheckResponse =
  /*@__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      connectivityStatus: Schema.optional(
        Schema.Union([
          Schema.Union([Schema.Literals(["success", "error"]), Schema.String]),
          Schema.Null,
        ]),
      ),
    }).pipe(T.ResponsePath("result")),
  ) as unknown as Schema.Codec<SourceSuperSlurperConnectivityPrecheckResponse>;

export type SourceSuperSlurperConnectivityPrecheckError = DefaultErrors;

export const sourceSuperSlurperConnectivityPrecheck: API.OperationMethod<
  SourceSuperSlurperConnectivityPrecheckRequest,
  SourceSuperSlurperConnectivityPrecheckResponse,
  SourceSuperSlurperConnectivityPrecheckError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: SourceSuperSlurperConnectivityPrecheckRequest,
  output: SourceSuperSlurperConnectivityPrecheckResponse,
  errors: [],
}));

export interface TargetSuperSlurperConnectivityPrecheckRequest {
  /** Path param */
  accountId: string;
  /** Body param */
  bucket: string;
  /** Body param */
  secret: { accessKeyId: string; secretAccessKey: string };
  /** Body param */
  vendor: "r2";
  /** Body param */
  jurisdiction?: "default" | "eu" | "fedramp" | (string & {});
}

export const TargetSuperSlurperConnectivityPrecheckRequest =
  /*@__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      accountId: Schema.String.pipe(T.HttpPath("account_id")),
      bucket: Schema.String,
      secret: Secret2,
      vendor: Schema.Literal("r2"),
      jurisdiction: Schema.optional(
        Schema.Union([
          Schema.Literals(["default", "eu", "fedramp"]),
          Schema.String,
        ]),
      ),
    }).pipe(
      T.Http({
        method: "PUT",
        path: "/accounts/{account_id}/slurper/target/connectivity-precheck",
      }),
    ),
  ) as unknown as Schema.Codec<TargetSuperSlurperConnectivityPrecheckRequest>;

export interface TargetSuperSlurperConnectivityPrecheckResponse {
  connectivityStatus?: "success" | "error" | (string & {}) | null;
}

export const TargetSuperSlurperConnectivityPrecheckResponse =
  /*@__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      connectivityStatus: Schema.optional(
        Schema.Union([
          Schema.Union([Schema.Literals(["success", "error"]), Schema.String]),
          Schema.Null,
        ]),
      ),
    }).pipe(T.ResponsePath("result")),
  ) as unknown as Schema.Codec<TargetSuperSlurperConnectivityPrecheckResponse>;

export type TargetSuperSlurperConnectivityPrecheckError = DefaultErrors;

export const targetSuperSlurperConnectivityPrecheck: API.OperationMethod<
  TargetSuperSlurperConnectivityPrecheckRequest,
  TargetSuperSlurperConnectivityPrecheckResponse,
  TargetSuperSlurperConnectivityPrecheckError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: TargetSuperSlurperConnectivityPrecheckRequest,
  output: TargetSuperSlurperConnectivityPrecheckResponse,
  errors: [],
}));

// =============================================================================
// SuperSlurperJob
// =============================================================================

export interface GetSuperSlurperJobRequest {
  jobId: string;
  accountId: string;
}

export const GetSuperSlurperJobRequest =
  /*@__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      jobId: Schema.String.pipe(T.HttpPath("jobId")),
      accountId: Schema.String.pipe(T.HttpPath("account_id")),
    }).pipe(
      T.Http({
        method: "GET",
        path: "/accounts/{account_id}/slurper/jobs/{jobId}",
      }),
    ),
  ) as unknown as Schema.Codec<GetSuperSlurperJobRequest>;

export interface GetSuperSlurperJobResponse {
  id?: string | null;
  createdAt?: string | null;
  finishedAt?: string | null;
  overwrite?: boolean | null;
  source?:
    | {
        bucket?: string | null;
        endpoint?: string | null;
        keys?: string[] | null;
        pathPrefix?: string | null;
        vendor?: "s3" | null;
      }
    | {
        bucket?: string | null;
        keys?: string[] | null;
        pathPrefix?: string | null;
        vendor?: "gcs" | null;
      }
    | {
        bucket?: string | null;
        jurisdiction?: "default" | "eu" | "fedramp" | (string & {}) | null;
        keys?: string[] | null;
        pathPrefix?: string | null;
        vendor?: "r2" | null;
      }
    | null;
  status?:
    | "running"
    | "paused"
    | "aborted"
    | "completed"
    | (string & {})
    | null;
  target?: {
    bucket?: string | null;
    jurisdiction?: "default" | "eu" | "fedramp" | (string & {}) | null;
    vendor?: "r2" | null;
  } | null;
}

export const GetSuperSlurperJobResponse =
  /*@__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      id: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
      createdAt: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
      finishedAt: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
      overwrite: Schema.optional(Schema.Union([Schema.Boolean, Schema.Null])),
      source: Schema.optional(
        Schema.Union([
          Schema.Union([
            S3SourceResponseSchema,
            GcsSourceResponseSchema,
            R2SourceResponseSchema,
          ]),
          Schema.Null,
        ]),
      ),
      status: Schema.optional(
        Schema.Union([
          Schema.Union([
            Schema.Literals(["running", "paused", "aborted", "completed"]),
            Schema.String,
          ]),
          Schema.Null,
        ]),
      ),
      target: Schema.optional(Schema.Union([Target, Schema.Null])),
    }).pipe(T.ResponsePath("result")),
  ) as unknown as Schema.Codec<GetSuperSlurperJobResponse>;

export type GetSuperSlurperJobError = DefaultErrors;

export const getSuperSlurperJob: API.OperationMethod<
  GetSuperSlurperJobRequest,
  GetSuperSlurperJobResponse,
  GetSuperSlurperJobError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: GetSuperSlurperJobRequest,
  output: GetSuperSlurperJobResponse,
  errors: [],
}));

export interface ListSuperSlurperJobsRequest {
  /** Path param */
  accountId: string;
  /** Query param */
  limit?: number;
  /** Query param */
  offset?: number;
}

export const ListSuperSlurperJobsRequest =
  /*@__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      accountId: Schema.String.pipe(T.HttpPath("account_id")),
      limit: Schema.optional(Schema.Number).pipe(T.HttpQuery("limit")),
      offset: Schema.optional(Schema.Number).pipe(T.HttpQuery("offset")),
    }).pipe(
      T.Http({ method: "GET", path: "/accounts/{account_id}/slurper/jobs" }),
    ),
  ) as unknown as Schema.Codec<ListSuperSlurperJobsRequest>;

export interface ListSuperSlurperJobsResponse {
  result: {
    id?: string | null;
    createdAt?: string | null;
    finishedAt?: string | null;
    overwrite?: boolean | null;
    source?:
      | {
          bucket?: string | null;
          endpoint?: string | null;
          keys?: string[] | null;
          pathPrefix?: string | null;
          vendor?: "s3" | null;
        }
      | {
          bucket?: string | null;
          keys?: string[] | null;
          pathPrefix?: string | null;
          vendor?: "gcs" | null;
        }
      | {
          bucket?: string | null;
          jurisdiction?: "default" | "eu" | "fedramp" | (string & {}) | null;
          keys?: string[] | null;
          pathPrefix?: string | null;
          vendor?: "r2" | null;
        }
      | null;
    status?:
      | "running"
      | "paused"
      | "aborted"
      | "completed"
      | (string & {})
      | null;
    target?: {
      bucket?: string | null;
      jurisdiction?: "default" | "eu" | "fedramp" | (string & {}) | null;
      vendor?: "r2" | null;
    } | null;
  }[];
}

export const ListSuperSlurperJobsResponse =
  /*@__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      result: Schema.Array(ListSuperSlurperJobsResponseResult),
    }),
  ) as unknown as Schema.Codec<ListSuperSlurperJobsResponse>;

export type ListSuperSlurperJobsError = DefaultErrors;

export const listSuperSlurperJobs: API.PaginatedOperationMethod<
  ListSuperSlurperJobsRequest,
  ListSuperSlurperJobsResponse,
  ListSuperSlurperJobsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: ListSuperSlurperJobsRequest,
  output: ListSuperSlurperJobsResponse,
  errors: [],
  pagination: {
    mode: "single",
    items: "result",
  } as const,
}));

export interface CreateSuperSlurperJobRequest {
  /** Path param */
  accountId: string;
  /** Body param */
  overwrite?: boolean;
  /** Body param */
  source?:
    | {
        bucket: string;
        secret: { accessKeyId: string; secretAccessKey: string };
        vendor: "s3";
        endpoint?: string | null;
        keys?: string[] | null;
        pathPrefix?: string | null;
        region?: string | null;
      }
    | {
        bucket: string;
        secret: { clientEmail: string; privateKey: string };
        vendor: "gcs";
        keys?: string[] | null;
        pathPrefix?: string | null;
      }
    | {
        bucket: string;
        secret: { accessKeyId: string; secretAccessKey: string };
        vendor: "r2";
        jurisdiction?: "default" | "eu" | "fedramp" | (string & {});
        keys?: string[] | null;
        pathPrefix?: string | null;
      };
  /** Body param */
  target?: {
    bucket: string;
    secret: { accessKeyId: string; secretAccessKey: string };
    vendor: "r2";
    jurisdiction?: "default" | "eu" | "fedramp" | (string & {});
  };
}

export const CreateSuperSlurperJobRequest =
  /*@__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      accountId: Schema.String.pipe(T.HttpPath("account_id")),
      overwrite: Schema.optional(Schema.Boolean),
      source: Schema.optional(
        Schema.Union([
          R2SlurperS3SourceSchema,
          R2SlurperGcsSourceSchema,
          R2SlurperR2SourceSchema,
        ]),
      ),
      target: Schema.optional(Target2),
    }).pipe(
      T.Http({ method: "POST", path: "/accounts/{account_id}/slurper/jobs" }),
    ),
  ) as unknown as Schema.Codec<CreateSuperSlurperJobRequest>;

export interface CreateSuperSlurperJobResponse {
  id?: string | null;
}

export const CreateSuperSlurperJobResponse =
  /*@__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      id: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
    }).pipe(T.ResponsePath("result")),
  ) as unknown as Schema.Codec<CreateSuperSlurperJobResponse>;

export type CreateSuperSlurperJobError = DefaultErrors;

export const createSuperSlurperJob: API.OperationMethod<
  CreateSuperSlurperJobRequest,
  CreateSuperSlurperJobResponse,
  CreateSuperSlurperJobError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: CreateSuperSlurperJobRequest,
  output: CreateSuperSlurperJobResponse,
  errors: [],
}));

export interface AbortSuperSlurperJobRequest {
  jobId: string;
  accountId: string;
}

export const AbortSuperSlurperJobRequest =
  /*@__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      jobId: Schema.String.pipe(T.HttpPath("jobId")),
      accountId: Schema.String.pipe(T.HttpPath("account_id")),
    }).pipe(
      T.Http({
        method: "PUT",
        path: "/accounts/{account_id}/slurper/jobs/{jobId}/abort",
      }),
    ),
  ) as unknown as Schema.Codec<AbortSuperSlurperJobRequest>;

export type AbortSuperSlurperJobResponse = string;

export const AbortSuperSlurperJobResponse =
  /*@__PURE__*/ Schema.suspend(() =>
    Schema.String.pipe(T.ResponsePath("result")),
  ) as unknown as Schema.Codec<AbortSuperSlurperJobResponse>;

export type AbortSuperSlurperJobError = DefaultErrors;

export const abortSuperSlurperJob: API.OperationMethod<
  AbortSuperSlurperJobRequest,
  AbortSuperSlurperJobResponse,
  AbortSuperSlurperJobError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: AbortSuperSlurperJobRequest,
  output: AbortSuperSlurperJobResponse,
  errors: [],
}));

export interface PauseSuperSlurperJobRequest {
  jobId: string;
  accountId: string;
}

export const PauseSuperSlurperJobRequest =
  /*@__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      jobId: Schema.String.pipe(T.HttpPath("jobId")),
      accountId: Schema.String.pipe(T.HttpPath("account_id")),
    }).pipe(
      T.Http({
        method: "PUT",
        path: "/accounts/{account_id}/slurper/jobs/{jobId}/pause",
      }),
    ),
  ) as unknown as Schema.Codec<PauseSuperSlurperJobRequest>;

export type PauseSuperSlurperJobResponse = string;

export const PauseSuperSlurperJobResponse =
  /*@__PURE__*/ Schema.suspend(() =>
    Schema.String.pipe(T.ResponsePath("result")),
  ) as unknown as Schema.Codec<PauseSuperSlurperJobResponse>;

export type PauseSuperSlurperJobError = DefaultErrors;

export const pauseSuperSlurperJob: API.OperationMethod<
  PauseSuperSlurperJobRequest,
  PauseSuperSlurperJobResponse,
  PauseSuperSlurperJobError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: PauseSuperSlurperJobRequest,
  output: PauseSuperSlurperJobResponse,
  errors: [],
}));

export interface ProgressSuperSlurperJobRequest {
  jobId: string;
  accountId: string;
}

export const ProgressSuperSlurperJobRequest =
  /*@__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      jobId: Schema.String.pipe(T.HttpPath("jobId")),
      accountId: Schema.String.pipe(T.HttpPath("account_id")),
    }).pipe(
      T.Http({
        method: "GET",
        path: "/accounts/{account_id}/slurper/jobs/{jobId}/progress",
      }),
    ),
  ) as unknown as Schema.Codec<ProgressSuperSlurperJobRequest>;

export interface ProgressSuperSlurperJobResponse {
  id?: string | null;
  createdAt?: string | null;
  failedObjects?: number | null;
  objects?: number | null;
  skippedObjects?: number | null;
  status?:
    | "running"
    | "paused"
    | "aborted"
    | "completed"
    | (string & {})
    | null;
  transferredObjects?: number | null;
}

export const ProgressSuperSlurperJobResponse =
  /*@__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      id: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
      createdAt: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
      failedObjects: Schema.optional(
        Schema.Union([Schema.Number, Schema.Null]),
      ),
      objects: Schema.optional(Schema.Union([Schema.Number, Schema.Null])),
      skippedObjects: Schema.optional(
        Schema.Union([Schema.Number, Schema.Null]),
      ),
      status: Schema.optional(
        Schema.Union([
          Schema.Union([
            Schema.Literals(["running", "paused", "aborted", "completed"]),
            Schema.String,
          ]),
          Schema.Null,
        ]),
      ),
      transferredObjects: Schema.optional(
        Schema.Union([Schema.Number, Schema.Null]),
      ),
    }).pipe(T.ResponsePath("result")),
  ) as unknown as Schema.Codec<ProgressSuperSlurperJobResponse>;

export type ProgressSuperSlurperJobError = DefaultErrors;

export const progressSuperSlurperJob: API.OperationMethod<
  ProgressSuperSlurperJobRequest,
  ProgressSuperSlurperJobResponse,
  ProgressSuperSlurperJobError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: ProgressSuperSlurperJobRequest,
  output: ProgressSuperSlurperJobResponse,
  errors: [],
}));

export interface ResumeSuperSlurperJobRequest {
  jobId: string;
  accountId: string;
}

export const ResumeSuperSlurperJobRequest =
  /*@__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      jobId: Schema.String.pipe(T.HttpPath("jobId")),
      accountId: Schema.String.pipe(T.HttpPath("account_id")),
    }).pipe(
      T.Http({
        method: "PUT",
        path: "/accounts/{account_id}/slurper/jobs/{jobId}/resume",
      }),
    ),
  ) as unknown as Schema.Codec<ResumeSuperSlurperJobRequest>;

export type ResumeSuperSlurperJobResponse = string;

export const ResumeSuperSlurperJobResponse =
  /*@__PURE__*/ Schema.suspend(() =>
    Schema.String.pipe(T.ResponsePath("result")),
  ) as unknown as Schema.Codec<ResumeSuperSlurperJobResponse>;

export type ResumeSuperSlurperJobError = DefaultErrors;

export const resumeSuperSlurperJob: API.OperationMethod<
  ResumeSuperSlurperJobRequest,
  ResumeSuperSlurperJobResponse,
  ResumeSuperSlurperJobError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: ResumeSuperSlurperJobRequest,
  output: ResumeSuperSlurperJobResponse,
  errors: [],
}));

// =============================================================================
// SuperSlurperJobLog
// =============================================================================

export interface ListSuperSlurperJobLogsRequest {
  jobId: string;
  /** Path param */
  accountId: string;
  /** Query param */
  limit?: number;
  /** Query param */
  offset?: number;
}

export const ListSuperSlurperJobLogsRequest =
  /*@__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      jobId: Schema.String.pipe(T.HttpPath("jobId")),
      accountId: Schema.String.pipe(T.HttpPath("account_id")),
      limit: Schema.optional(Schema.Number).pipe(T.HttpQuery("limit")),
      offset: Schema.optional(Schema.Number).pipe(T.HttpQuery("offset")),
    }).pipe(
      T.Http({
        method: "GET",
        path: "/accounts/{account_id}/slurper/jobs/{jobId}/logs",
      }),
    ),
  ) as unknown as Schema.Codec<ListSuperSlurperJobLogsRequest>;

export interface ListSuperSlurperJobLogsResponse {
  result: {
    createdAt?: string | null;
    job?: string | null;
    logType?:
      | "migrationStart"
      | "migrationComplete"
      | "migrationAbort"
      | "migrationError"
      | "migrationPause"
      | "migrationResume"
      | "migrationErrorFailedContinuation"
      | "importErrorRetryExhaustion"
      | "importSkippedStorageClass"
      | "importSkippedOversized"
      | "importSkippedEmptyObject"
      | "importSkippedUnsupportedContentType"
      | "importSkippedExcludedContentType"
      | "importSkippedInvalidMedia"
      | "importSkippedRequiresRetrieval"
      | (string & {})
      | null;
    message?: string | null;
    objectKey?: string | null;
  }[];
}

export const ListSuperSlurperJobLogsResponse =
  /*@__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      result: Schema.Array(ListSuperSlurperJobLogsResponseResult),
    }),
  ) as unknown as Schema.Codec<ListSuperSlurperJobLogsResponse>;

export type ListSuperSlurperJobLogsError = DefaultErrors;

export const listSuperSlurperJobLogs: API.PaginatedOperationMethod<
  ListSuperSlurperJobLogsRequest,
  ListSuperSlurperJobLogsResponse,
  ListSuperSlurperJobLogsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: ListSuperSlurperJobLogsRequest,
  output: ListSuperSlurperJobLogsResponse,
  errors: [],
  pagination: {
    mode: "single",
    items: "result",
  } as const,
}));

// =============================================================================
// TemporaryCredential
// =============================================================================

export interface CreateTemporaryCredentialRequest {
  /** Path param: Account ID. */
  accountId: string;
  /** Body param: Name of the R2 bucket. */
  bucket: string;
  /** Body param: The parent access key id to use for signing. */
  parentAccessKeyId: string;
  /** Body param: Permissions allowed on the credentials. */
  permission:
    | "admin-read-write"
    | "admin-read-only"
    | "object-read-write"
    | "object-read-only"
    | (string & {});
  /** Body param: How long the credentials will live for in seconds. */
  ttlSeconds: number;
  /** Body param: Optional object paths to scope the credentials to. */
  objects?: string[];
  /** Body param: Optional prefix paths to scope the credentials to. */
  prefixes?: string[];
}

export const CreateTemporaryCredentialRequest =
  /*@__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      accountId: Schema.String.pipe(T.HttpPath("account_id")),
      bucket: Schema.String,
      parentAccessKeyId: Schema.String,
      permission: Schema.Union([
        Schema.Literals([
          "admin-read-write",
          "admin-read-only",
          "object-read-write",
          "object-read-only",
        ]),
        Schema.String,
      ]),
      ttlSeconds: Schema.Number,
      objects: Schema.optional(Schema.Array(Schema.String)),
      prefixes: Schema.optional(Schema.Array(Schema.String)),
    }).pipe(
      T.Http({
        method: "POST",
        path: "/accounts/{account_id}/r2/temp-access-credentials",
      }),
    ),
  ) as unknown as Schema.Codec<CreateTemporaryCredentialRequest>;

export interface CreateTemporaryCredentialResponse {
  /** ID for new access key. */
  accessKeyId?: string | null;
  /** Secret access key. */
  secretAccessKey?: string | null;
  /** Security token. */
  sessionToken?: string | null;
}

export const CreateTemporaryCredentialResponse =
  /*@__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      accessKeyId: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
      secretAccessKey: Schema.optional(
        Schema.Union([Schema.String, Schema.Null]),
      ),
      sessionToken: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
    }).pipe(T.ResponsePath("result")),
  ) as unknown as Schema.Codec<CreateTemporaryCredentialResponse>;

export type CreateTemporaryCredentialError = DefaultErrors;

export const createTemporaryCredential: API.OperationMethod<
  CreateTemporaryCredentialRequest,
  CreateTemporaryCredentialResponse,
  CreateTemporaryCredentialError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: CreateTemporaryCredentialRequest,
  output: CreateTemporaryCredentialResponse,
  errors: [],
}));
