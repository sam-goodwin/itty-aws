/**
 * Cloudflare RESOURCE-TAGGING API
 *
 * Generated from Cloudflare TypeScript SDK.
 * DO NOT EDIT - regenerate with: bun scripts/generate.ts --service resource-tagging
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

export class TagPreconditionFailed extends T.applyErrorMatchers(
  Schema.TaggedErrorClass<TagPreconditionFailed>()("TagPreconditionFailed", {
    code: Schema.Number,
    message: Schema.String,
  }),
  [{ status: 412 }],
) {}

export class ZoneTagResourceNotFound extends T.applyErrorMatchers(
  Schema.TaggedErrorClass<ZoneTagResourceNotFound>()(
    "ZoneTagResourceNotFound",
    { code: Schema.Number, message: Schema.String },
  ),
  [{ status: 404 }],
) {}

// =============================================================================
// Shared nested schemas (hoisted, module-private)
// =============================================================================

interface ResourceTaggingTaggedResourceObjectAccessApplication {
  /** Identifies the unique resource. */
  id: string;
  /** ETag identifier for optimistic concurrency control. Formatted as "v1:<hash>" where the hash is the base64url-encoded SHA-256 (truncated to 128 bits) of the tags map canonicalized using RFC 8785 (JSON  */
  etag: string;
  /** Human-readable name of the resource. */
  name: string;
  /** Contains key-value pairs of tags. */
  tags: Record<string, unknown>;
  type: "access_application";
}
const ResourceTaggingTaggedResourceObjectAccessApplication =
  /*@__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      id: Schema.String,
      etag: Schema.String,
      name: Schema.String,
      tags: Schema.Record(Schema.String, Schema.Unknown),
      type: Schema.Literal("access_application"),
    }),
  ) as unknown as Schema.Codec<ResourceTaggingTaggedResourceObjectAccessApplication>;

interface ResourceTaggingTaggedResourceObjectAccessApplicationPolicy {
  /** Identifies the unique resource. */
  id: string;
  /** Access application ID is required only for access_application_policy resources */
  accessApplicationId: string;
  /** ETag identifier for optimistic concurrency control. Formatted as "v1:<hash>" where the hash is the base64url-encoded SHA-256 (truncated to 128 bits) of the tags map canonicalized using RFC 8785 (JSON  */
  etag: string;
  /** Human-readable name of the resource. */
  name: string;
  /** Contains key-value pairs of tags. */
  tags: Record<string, unknown>;
  type: "access_application_policy";
  /** Zone ID is required only for zone-level resources */
  zoneId: string;
}
const ResourceTaggingTaggedResourceObjectAccessApplicationPolicy =
  /*@__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      id: Schema.String,
      accessApplicationId: Schema.String,
      etag: Schema.String,
      name: Schema.String,
      tags: Schema.Record(Schema.String, Schema.Unknown),
      type: Schema.Literal("access_application_policy"),
      zoneId: Schema.String,
    }).pipe(
      Schema.encodeKeys({
        id: "id",
        accessApplicationId: "access_application_id",
        etag: "etag",
        name: "name",
        tags: "tags",
        type: "type",
        zoneId: "zone_id",
      }),
    ),
  ) as unknown as Schema.Codec<ResourceTaggingTaggedResourceObjectAccessApplicationPolicy>;

interface ResourceTaggingTaggedResourceObjectAccessGroup {
  /** Identifies the unique resource. */
  id: string;
  /** ETag identifier for optimistic concurrency control. Formatted as "v1:<hash>" where the hash is the base64url-encoded SHA-256 (truncated to 128 bits) of the tags map canonicalized using RFC 8785 (JSON  */
  etag: string;
  /** Human-readable name of the resource. */
  name: string;
  /** Contains key-value pairs of tags. */
  tags: Record<string, unknown>;
  type: "access_group";
}
const ResourceTaggingTaggedResourceObjectAccessGroup =
  /*@__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      id: Schema.String,
      etag: Schema.String,
      name: Schema.String,
      tags: Schema.Record(Schema.String, Schema.Unknown),
      type: Schema.Literal("access_group"),
    }),
  ) as unknown as Schema.Codec<ResourceTaggingTaggedResourceObjectAccessGroup>;

interface ResourceTaggingTaggedResourceObjectAccount {
  /** Identifies the unique resource. */
  id: string;
  /** ETag identifier for optimistic concurrency control. Formatted as "v1:<hash>" where the hash is the base64url-encoded SHA-256 (truncated to 128 bits) of the tags map canonicalized using RFC 8785 (JSON  */
  etag: string;
  /** Human-readable name of the resource. */
  name: string;
  /** Contains key-value pairs of tags. */
  tags: Record<string, unknown>;
  type: "account";
}
const ResourceTaggingTaggedResourceObjectAccount =
  /*@__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      id: Schema.String,
      etag: Schema.String,
      name: Schema.String,
      tags: Schema.Record(Schema.String, Schema.Unknown),
      type: Schema.Literal("account"),
    }),
  ) as unknown as Schema.Codec<ResourceTaggingTaggedResourceObjectAccount>;

interface ResourceTaggingTaggedResourceObjectAIGateway {
  /** Identifies the unique resource. */
  id: string;
  /** ETag identifier for optimistic concurrency control. Formatted as "v1:<hash>" where the hash is the base64url-encoded SHA-256 (truncated to 128 bits) of the tags map canonicalized using RFC 8785 (JSON  */
  etag: string;
  /** Human-readable name of the resource. */
  name: string;
  /** Contains key-value pairs of tags. */
  tags: Record<string, unknown>;
  type: "ai_gateway";
}
const ResourceTaggingTaggedResourceObjectAIGateway =
  /*@__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      id: Schema.String,
      etag: Schema.String,
      name: Schema.String,
      tags: Schema.Record(Schema.String, Schema.Unknown),
      type: Schema.Literal("ai_gateway"),
    }),
  ) as unknown as Schema.Codec<ResourceTaggingTaggedResourceObjectAIGateway>;

interface ResourceTaggingTaggedResourceObjectAlertingPolicy {
  /** Identifies the unique resource. */
  id: string;
  /** ETag identifier for optimistic concurrency control. Formatted as "v1:<hash>" where the hash is the base64url-encoded SHA-256 (truncated to 128 bits) of the tags map canonicalized using RFC 8785 (JSON  */
  etag: string;
  /** Human-readable name of the resource. */
  name: string;
  /** Contains key-value pairs of tags. */
  tags: Record<string, unknown>;
  type: "alerting_policy";
}
const ResourceTaggingTaggedResourceObjectAlertingPolicy =
  /*@__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      id: Schema.String,
      etag: Schema.String,
      name: Schema.String,
      tags: Schema.Record(Schema.String, Schema.Unknown),
      type: Schema.Literal("alerting_policy"),
    }),
  ) as unknown as Schema.Codec<ResourceTaggingTaggedResourceObjectAlertingPolicy>;

interface ResourceTaggingTaggedResourceObjectAlertingWebhook {
  /** Identifies the unique resource. */
  id: string;
  /** ETag identifier for optimistic concurrency control. Formatted as "v1:<hash>" where the hash is the base64url-encoded SHA-256 (truncated to 128 bits) of the tags map canonicalized using RFC 8785 (JSON  */
  etag: string;
  /** Human-readable name of the resource. */
  name: string;
  /** Contains key-value pairs of tags. */
  tags: Record<string, unknown>;
  type: "alerting_webhook";
}
const ResourceTaggingTaggedResourceObjectAlertingWebhook =
  /*@__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      id: Schema.String,
      etag: Schema.String,
      name: Schema.String,
      tags: Schema.Record(Schema.String, Schema.Unknown),
      type: Schema.Literal("alerting_webhook"),
    }),
  ) as unknown as Schema.Codec<ResourceTaggingTaggedResourceObjectAlertingWebhook>;

interface ResourceTaggingTaggedResourceObjectAPIGatewayOperation {
  /** Identifies the unique resource. */
  id: string;
  /** ETag identifier for optimistic concurrency control. Formatted as "v1:<hash>" where the hash is the base64url-encoded SHA-256 (truncated to 128 bits) of the tags map canonicalized using RFC 8785 (JSON  */
  etag: string;
  /** Human-readable name of the resource. */
  name: string;
  /** Contains key-value pairs of tags. */
  tags: Record<string, unknown>;
  type: "api_gateway_operation";
  /** Zone ID is required only for zone-level resources */
  zoneId: string;
}
const ResourceTaggingTaggedResourceObjectAPIGatewayOperation =
  /*@__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      id: Schema.String,
      etag: Schema.String,
      name: Schema.String,
      tags: Schema.Record(Schema.String, Schema.Unknown),
      type: Schema.Literal("api_gateway_operation"),
      zoneId: Schema.String,
    }).pipe(
      Schema.encodeKeys({
        id: "id",
        etag: "etag",
        name: "name",
        tags: "tags",
        type: "type",
        zoneId: "zone_id",
      }),
    ),
  ) as unknown as Schema.Codec<ResourceTaggingTaggedResourceObjectAPIGatewayOperation>;

interface ResourceTaggingTaggedResourceObjectCloudflaredTunnel {
  /** Identifies the unique resource. */
  id: string;
  /** ETag identifier for optimistic concurrency control. Formatted as "v1:<hash>" where the hash is the base64url-encoded SHA-256 (truncated to 128 bits) of the tags map canonicalized using RFC 8785 (JSON  */
  etag: string;
  /** Human-readable name of the resource. */
  name: string;
  /** Contains key-value pairs of tags. */
  tags: Record<string, unknown>;
  type: "cloudflared_tunnel";
}
const ResourceTaggingTaggedResourceObjectCloudflaredTunnel =
  /*@__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      id: Schema.String,
      etag: Schema.String,
      name: Schema.String,
      tags: Schema.Record(Schema.String, Schema.Unknown),
      type: Schema.Literal("cloudflared_tunnel"),
    }),
  ) as unknown as Schema.Codec<ResourceTaggingTaggedResourceObjectCloudflaredTunnel>;

interface ResourceTaggingTaggedResourceObjectCustomCertificate {
  /** Identifies the unique resource. */
  id: string;
  /** ETag identifier for optimistic concurrency control. Formatted as "v1:<hash>" where the hash is the base64url-encoded SHA-256 (truncated to 128 bits) of the tags map canonicalized using RFC 8785 (JSON  */
  etag: string;
  /** Human-readable name of the resource. */
  name: string;
  /** Contains key-value pairs of tags. */
  tags: Record<string, unknown>;
  type: "custom_certificate";
  /** Zone ID is required only for zone-level resources */
  zoneId: string;
}
const ResourceTaggingTaggedResourceObjectCustomCertificate =
  /*@__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      id: Schema.String,
      etag: Schema.String,
      name: Schema.String,
      tags: Schema.Record(Schema.String, Schema.Unknown),
      type: Schema.Literal("custom_certificate"),
      zoneId: Schema.String,
    }).pipe(
      Schema.encodeKeys({
        id: "id",
        etag: "etag",
        name: "name",
        tags: "tags",
        type: "type",
        zoneId: "zone_id",
      }),
    ),
  ) as unknown as Schema.Codec<ResourceTaggingTaggedResourceObjectCustomCertificate>;

interface ResourceTaggingTaggedResourceObjectCustomHostname {
  /** Identifies the unique resource. */
  id: string;
  /** ETag identifier for optimistic concurrency control. Formatted as "v1:<hash>" where the hash is the base64url-encoded SHA-256 (truncated to 128 bits) of the tags map canonicalized using RFC 8785 (JSON  */
  etag: string;
  /** Human-readable name of the resource. */
  name: string;
  /** Contains key-value pairs of tags. */
  tags: Record<string, unknown>;
  type: "custom_hostname";
  /** Zone ID is required only for zone-level resources */
  zoneId: string;
}
const ResourceTaggingTaggedResourceObjectCustomHostname =
  /*@__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      id: Schema.String,
      etag: Schema.String,
      name: Schema.String,
      tags: Schema.Record(Schema.String, Schema.Unknown),
      type: Schema.Literal("custom_hostname"),
      zoneId: Schema.String,
    }).pipe(
      Schema.encodeKeys({
        id: "id",
        etag: "etag",
        name: "name",
        tags: "tags",
        type: "type",
        zoneId: "zone_id",
      }),
    ),
  ) as unknown as Schema.Codec<ResourceTaggingTaggedResourceObjectCustomHostname>;

interface ResourceTaggingTaggedResourceObjectD1Database {
  /** Identifies the unique resource. */
  id: string;
  /** ETag identifier for optimistic concurrency control. Formatted as "v1:<hash>" where the hash is the base64url-encoded SHA-256 (truncated to 128 bits) of the tags map canonicalized using RFC 8785 (JSON  */
  etag: string;
  /** Human-readable name of the resource. */
  name: string;
  /** Contains key-value pairs of tags. */
  tags: Record<string, unknown>;
  type: "d1_database";
}
const ResourceTaggingTaggedResourceObjectD1Database =
  /*@__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      id: Schema.String,
      etag: Schema.String,
      name: Schema.String,
      tags: Schema.Record(Schema.String, Schema.Unknown),
      type: Schema.Literal("d1_database"),
    }),
  ) as unknown as Schema.Codec<ResourceTaggingTaggedResourceObjectD1Database>;

interface ResourceTaggingTaggedResourceObjectDNSRecord {
  /** Identifies the unique resource. */
  id: string;
  /** ETag identifier for optimistic concurrency control. Formatted as "v1:<hash>" where the hash is the base64url-encoded SHA-256 (truncated to 128 bits) of the tags map canonicalized using RFC 8785 (JSON  */
  etag: string;
  /** Human-readable name of the resource. */
  name: string;
  /** Contains key-value pairs of tags. */
  tags: Record<string, unknown>;
  type: "dns_record";
  /** Zone ID is required only for zone-level resources */
  zoneId: string;
}
const ResourceTaggingTaggedResourceObjectDNSRecord =
  /*@__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      id: Schema.String,
      etag: Schema.String,
      name: Schema.String,
      tags: Schema.Record(Schema.String, Schema.Unknown),
      type: Schema.Literal("dns_record"),
      zoneId: Schema.String,
    }).pipe(
      Schema.encodeKeys({
        id: "id",
        etag: "etag",
        name: "name",
        tags: "tags",
        type: "type",
        zoneId: "zone_id",
      }),
    ),
  ) as unknown as Schema.Codec<ResourceTaggingTaggedResourceObjectDNSRecord>;

interface ResourceTaggingTaggedResourceObjectDurableObjectNamespace {
  /** Identifies the unique resource. */
  id: string;
  /** ETag identifier for optimistic concurrency control. Formatted as "v1:<hash>" where the hash is the base64url-encoded SHA-256 (truncated to 128 bits) of the tags map canonicalized using RFC 8785 (JSON  */
  etag: string;
  /** Human-readable name of the resource. */
  name: string;
  /** Contains key-value pairs of tags. */
  tags: Record<string, unknown>;
  type: "durable_object_namespace";
}
const ResourceTaggingTaggedResourceObjectDurableObjectNamespace =
  /*@__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      id: Schema.String,
      etag: Schema.String,
      name: Schema.String,
      tags: Schema.Record(Schema.String, Schema.Unknown),
      type: Schema.Literal("durable_object_namespace"),
    }),
  ) as unknown as Schema.Codec<ResourceTaggingTaggedResourceObjectDurableObjectNamespace>;

interface ResourceTaggingTaggedResourceObjectGatewayList {
  /** Identifies the unique resource. */
  id: string;
  /** ETag identifier for optimistic concurrency control. Formatted as "v1:<hash>" where the hash is the base64url-encoded SHA-256 (truncated to 128 bits) of the tags map canonicalized using RFC 8785 (JSON  */
  etag: string;
  /** Human-readable name of the resource. */
  name: string;
  /** Contains key-value pairs of tags. */
  tags: Record<string, unknown>;
  type: "gateway_list";
}
const ResourceTaggingTaggedResourceObjectGatewayList =
  /*@__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      id: Schema.String,
      etag: Schema.String,
      name: Schema.String,
      tags: Schema.Record(Schema.String, Schema.Unknown),
      type: Schema.Literal("gateway_list"),
    }),
  ) as unknown as Schema.Codec<ResourceTaggingTaggedResourceObjectGatewayList>;

interface ResourceTaggingTaggedResourceObjectGatewayRule {
  /** Identifies the unique resource. */
  id: string;
  /** ETag identifier for optimistic concurrency control. Formatted as "v1:<hash>" where the hash is the base64url-encoded SHA-256 (truncated to 128 bits) of the tags map canonicalized using RFC 8785 (JSON  */
  etag: string;
  /** Human-readable name of the resource. */
  name: string;
  /** Contains key-value pairs of tags. */
  tags: Record<string, unknown>;
  type: "gateway_rule";
}
const ResourceTaggingTaggedResourceObjectGatewayRule =
  /*@__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      id: Schema.String,
      etag: Schema.String,
      name: Schema.String,
      tags: Schema.Record(Schema.String, Schema.Unknown),
      type: Schema.Literal("gateway_rule"),
    }),
  ) as unknown as Schema.Codec<ResourceTaggingTaggedResourceObjectGatewayRule>;

interface ResourceTaggingTaggedResourceObjectImage {
  /** Identifies the unique resource. */
  id: string;
  /** ETag identifier for optimistic concurrency control. Formatted as "v1:<hash>" where the hash is the base64url-encoded SHA-256 (truncated to 128 bits) of the tags map canonicalized using RFC 8785 (JSON  */
  etag: string;
  /** Human-readable name of the resource. */
  name: string;
  /** Contains key-value pairs of tags. */
  tags: Record<string, unknown>;
  type: "image";
}
const ResourceTaggingTaggedResourceObjectImage =
  /*@__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      id: Schema.String,
      etag: Schema.String,
      name: Schema.String,
      tags: Schema.Record(Schema.String, Schema.Unknown),
      type: Schema.Literal("image"),
    }),
  ) as unknown as Schema.Codec<ResourceTaggingTaggedResourceObjectImage>;

interface ResourceTaggingTaggedResourceObjectKVNamespace {
  /** Identifies the unique resource. */
  id: string;
  /** ETag identifier for optimistic concurrency control. Formatted as "v1:<hash>" where the hash is the base64url-encoded SHA-256 (truncated to 128 bits) of the tags map canonicalized using RFC 8785 (JSON  */
  etag: string;
  /** Human-readable name of the resource. */
  name: string;
  /** Contains key-value pairs of tags. */
  tags: Record<string, unknown>;
  type: "kv_namespace";
}
const ResourceTaggingTaggedResourceObjectKVNamespace =
  /*@__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      id: Schema.String,
      etag: Schema.String,
      name: Schema.String,
      tags: Schema.Record(Schema.String, Schema.Unknown),
      type: Schema.Literal("kv_namespace"),
    }),
  ) as unknown as Schema.Codec<ResourceTaggingTaggedResourceObjectKVNamespace>;

interface ResourceTaggingTaggedResourceObjectManagedClientCertificate {
  /** Identifies the unique resource. */
  id: string;
  /** ETag identifier for optimistic concurrency control. Formatted as "v1:<hash>" where the hash is the base64url-encoded SHA-256 (truncated to 128 bits) of the tags map canonicalized using RFC 8785 (JSON  */
  etag: string;
  /** Human-readable name of the resource. */
  name: string;
  /** Contains key-value pairs of tags. */
  tags: Record<string, unknown>;
  type: "managed_client_certificate";
  /** Zone ID is required only for zone-level resources */
  zoneId: string;
}
const ResourceTaggingTaggedResourceObjectManagedClientCertificate =
  /*@__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      id: Schema.String,
      etag: Schema.String,
      name: Schema.String,
      tags: Schema.Record(Schema.String, Schema.Unknown),
      type: Schema.Literal("managed_client_certificate"),
      zoneId: Schema.String,
    }).pipe(
      Schema.encodeKeys({
        id: "id",
        etag: "etag",
        name: "name",
        tags: "tags",
        type: "type",
        zoneId: "zone_id",
      }),
    ),
  ) as unknown as Schema.Codec<ResourceTaggingTaggedResourceObjectManagedClientCertificate>;

interface ResourceTaggingTaggedResourceObjectQueue {
  /** Identifies the unique resource. */
  id: string;
  /** ETag identifier for optimistic concurrency control. Formatted as "v1:<hash>" where the hash is the base64url-encoded SHA-256 (truncated to 128 bits) of the tags map canonicalized using RFC 8785 (JSON  */
  etag: string;
  /** Human-readable name of the resource. */
  name: string;
  /** Contains key-value pairs of tags. */
  tags: Record<string, unknown>;
  type: "queue";
}
const ResourceTaggingTaggedResourceObjectQueue =
  /*@__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      id: Schema.String,
      etag: Schema.String,
      name: Schema.String,
      tags: Schema.Record(Schema.String, Schema.Unknown),
      type: Schema.Literal("queue"),
    }),
  ) as unknown as Schema.Codec<ResourceTaggingTaggedResourceObjectQueue>;

interface ResourceTaggingTaggedResourceObjectR2Bucket {
  /** Identifies the unique resource. */
  id: string;
  /** ETag identifier for optimistic concurrency control. Formatted as "v1:<hash>" where the hash is the base64url-encoded SHA-256 (truncated to 128 bits) of the tags map canonicalized using RFC 8785 (JSON  */
  etag: string;
  /** Human-readable name of the resource. */
  name: string;
  /** Contains key-value pairs of tags. */
  tags: Record<string, unknown>;
  type: "r2_bucket";
}
const ResourceTaggingTaggedResourceObjectR2Bucket =
  /*@__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      id: Schema.String,
      etag: Schema.String,
      name: Schema.String,
      tags: Schema.Record(Schema.String, Schema.Unknown),
      type: Schema.Literal("r2_bucket"),
    }),
  ) as unknown as Schema.Codec<ResourceTaggingTaggedResourceObjectR2Bucket>;

interface ResourceTaggingTaggedResourceObjectResourceShare {
  /** Identifies the unique resource. */
  id: string;
  /** ETag identifier for optimistic concurrency control. Formatted as "v1:<hash>" where the hash is the base64url-encoded SHA-256 (truncated to 128 bits) of the tags map canonicalized using RFC 8785 (JSON  */
  etag: string;
  /** Human-readable name of the resource. */
  name: string;
  /** Contains key-value pairs of tags. */
  tags: Record<string, unknown>;
  type: "resource_share";
}
const ResourceTaggingTaggedResourceObjectResourceShare =
  /*@__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      id: Schema.String,
      etag: Schema.String,
      name: Schema.String,
      tags: Schema.Record(Schema.String, Schema.Unknown),
      type: Schema.Literal("resource_share"),
    }),
  ) as unknown as Schema.Codec<ResourceTaggingTaggedResourceObjectResourceShare>;

interface ResourceTaggingTaggedResourceObjectStreamLiveInput {
  /** Identifies the unique resource. */
  id: string;
  /** ETag identifier for optimistic concurrency control. Formatted as "v1:<hash>" where the hash is the base64url-encoded SHA-256 (truncated to 128 bits) of the tags map canonicalized using RFC 8785 (JSON  */
  etag: string;
  /** Human-readable name of the resource. */
  name: string;
  /** Contains key-value pairs of tags. */
  tags: Record<string, unknown>;
  type: "stream_live_input";
}
const ResourceTaggingTaggedResourceObjectStreamLiveInput =
  /*@__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      id: Schema.String,
      etag: Schema.String,
      name: Schema.String,
      tags: Schema.Record(Schema.String, Schema.Unknown),
      type: Schema.Literal("stream_live_input"),
    }),
  ) as unknown as Schema.Codec<ResourceTaggingTaggedResourceObjectStreamLiveInput>;

interface ResourceTaggingTaggedResourceObjectStreamVideo {
  /** Identifies the unique resource. */
  id: string;
  /** ETag identifier for optimistic concurrency control. Formatted as "v1:<hash>" where the hash is the base64url-encoded SHA-256 (truncated to 128 bits) of the tags map canonicalized using RFC 8785 (JSON  */
  etag: string;
  /** Human-readable name of the resource. */
  name: string;
  /** Contains key-value pairs of tags. */
  tags: Record<string, unknown>;
  type: "stream_video";
}
const ResourceTaggingTaggedResourceObjectStreamVideo =
  /*@__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      id: Schema.String,
      etag: Schema.String,
      name: Schema.String,
      tags: Schema.Record(Schema.String, Schema.Unknown),
      type: Schema.Literal("stream_video"),
    }),
  ) as unknown as Schema.Codec<ResourceTaggingTaggedResourceObjectStreamVideo>;

interface ResourceTaggingTaggedResourceObjectWorker {
  /** Identifies the unique resource. */
  id: string;
  /** ETag identifier for optimistic concurrency control. Formatted as "v1:<hash>" where the hash is the base64url-encoded SHA-256 (truncated to 128 bits) of the tags map canonicalized using RFC 8785 (JSON  */
  etag: string;
  /** Human-readable name of the resource. */
  name: string;
  /** Contains key-value pairs of tags. */
  tags: Record<string, unknown>;
  type: "worker";
}
const ResourceTaggingTaggedResourceObjectWorker =
  /*@__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      id: Schema.String,
      etag: Schema.String,
      name: Schema.String,
      tags: Schema.Record(Schema.String, Schema.Unknown),
      type: Schema.Literal("worker"),
    }),
  ) as unknown as Schema.Codec<ResourceTaggingTaggedResourceObjectWorker>;

interface ResourceTaggingTaggedResourceObjectWorkerVersion {
  /** Identifies the unique resource. */
  id: string;
  /** ETag identifier for optimistic concurrency control. Formatted as "v1:<hash>" where the hash is the base64url-encoded SHA-256 (truncated to 128 bits) of the tags map canonicalized using RFC 8785 (JSON  */
  etag: string;
  /** Human-readable name of the resource. */
  name: string;
  /** Contains key-value pairs of tags. */
  tags: Record<string, unknown>;
  type: "worker_version";
  /** Worker ID is required only for worker_version resources */
  workerId: string;
}
const ResourceTaggingTaggedResourceObjectWorkerVersion =
  /*@__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      id: Schema.String,
      etag: Schema.String,
      name: Schema.String,
      tags: Schema.Record(Schema.String, Schema.Unknown),
      type: Schema.Literal("worker_version"),
      workerId: Schema.String,
    }).pipe(
      Schema.encodeKeys({
        id: "id",
        etag: "etag",
        name: "name",
        tags: "tags",
        type: "type",
        workerId: "worker_id",
      }),
    ),
  ) as unknown as Schema.Codec<ResourceTaggingTaggedResourceObjectWorkerVersion>;

interface ResourceTaggingTaggedResourceObjectZone {
  /** Identifies the unique resource. */
  id: string;
  /** ETag identifier for optimistic concurrency control. Formatted as "v1:<hash>" where the hash is the base64url-encoded SHA-256 (truncated to 128 bits) of the tags map canonicalized using RFC 8785 (JSON  */
  etag: string;
  /** Human-readable name of the resource. */
  name: string;
  /** Contains key-value pairs of tags. */
  tags: Record<string, unknown>;
  type: "zone";
  /** Zone ID is required only for zone-level resources */
  zoneId: string;
}
const ResourceTaggingTaggedResourceObjectZone =
  /*@__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      id: Schema.String,
      etag: Schema.String,
      name: Schema.String,
      tags: Schema.Record(Schema.String, Schema.Unknown),
      type: Schema.Literal("zone"),
      zoneId: Schema.String,
    }).pipe(
      Schema.encodeKeys({
        id: "id",
        etag: "etag",
        name: "name",
        tags: "tags",
        type: "type",
        zoneId: "zone_id",
      }),
    ),
  ) as unknown as Schema.Codec<ResourceTaggingTaggedResourceObjectZone>;

interface ListKeysResponseResultInfoCursors {
  after?: string | null;
}
const ListKeysResponseResultInfoCursors =
  /*@__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      after: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
    }),
  ) as unknown as Schema.Codec<ListKeysResponseResultInfoCursors>;

interface ListKeysResponseResultInfo {
  cursors?: { after?: string | null } | null;
}
const ListKeysResponseResultInfo = /*@__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    cursors: Schema.optional(
      Schema.Union([ListKeysResponseResultInfoCursors, Schema.Null]),
    ),
  }),
) as unknown as Schema.Codec<ListKeysResponseResultInfo>;

// =============================================================================
// AccountTag
// =============================================================================

export interface GetAccountTagRequest {
  /** Path param: Identifier. */
  accountId: string;
  /** Query param: The ID of the resource to retrieve tags for. */
  resourceId: string;
  /** Query param: The type of the resource. */
  resourceType:
    | "access_application"
    | "access_group"
    | "account"
    | "ai_gateway"
    | "alerting_policy"
    | "alerting_webhook"
    | "cloudflared_tunnel"
    | "d1_database"
    | "durable_object_namespace"
    | "gateway_list"
    | "gateway_rule"
    | "image"
    | "kv_namespace"
    | "queue"
    | "r2_bucket"
    | "resource_share"
    | "stream_live_input"
    | "stream_video"
    | "worker"
    | "worker_version"
    | (string & {});
  /** Query param: Worker identifier. Required for worker_version resources. */
  workerId?: string;
}

export const GetAccountTagRequest = /*@__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    accountId: Schema.String.pipe(T.HttpPath("account_id")),
    resourceId: Schema.String.pipe(T.HttpQuery("resource_id")),
    resourceType: Schema.Union([
      Schema.Literals([
        "access_application",
        "access_group",
        "account",
        "ai_gateway",
        "alerting_policy",
        "alerting_webhook",
        "cloudflared_tunnel",
        "d1_database",
        "durable_object_namespace",
        "gateway_list",
        "gateway_rule",
        "image",
        "kv_namespace",
        "queue",
        "r2_bucket",
        "resource_share",
        "stream_live_input",
        "stream_video",
        "worker",
        "worker_version",
      ]),
      Schema.String,
    ]).pipe(T.HttpQuery("resource_type")),
    workerId: Schema.optional(Schema.String).pipe(T.HttpQuery("worker_id")),
  }).pipe(T.Http({ method: "GET", path: "/accounts/{account_id}/tags" })),
) as unknown as Schema.Codec<GetAccountTagRequest>;

export type GetAccountTagResponse =
  | {
      id: string;
      etag: string;
      name: string;
      tags: Record<string, unknown>;
      type: "access_application";
    }
  | {
      id: string;
      accessApplicationId: string;
      etag: string;
      name: string;
      tags: Record<string, unknown>;
      type: "access_application_policy";
      zoneId: string;
    }
  | {
      id: string;
      etag: string;
      name: string;
      tags: Record<string, unknown>;
      type: "access_group";
    }
  | {
      id: string;
      etag: string;
      name: string;
      tags: Record<string, unknown>;
      type: "account";
    }
  | {
      id: string;
      etag: string;
      name: string;
      tags: Record<string, unknown>;
      type: "ai_gateway";
    }
  | {
      id: string;
      etag: string;
      name: string;
      tags: Record<string, unknown>;
      type: "alerting_policy";
    }
  | {
      id: string;
      etag: string;
      name: string;
      tags: Record<string, unknown>;
      type: "alerting_webhook";
    }
  | {
      id: string;
      etag: string;
      name: string;
      tags: Record<string, unknown>;
      type: "api_gateway_operation";
      zoneId: string;
    }
  | {
      id: string;
      etag: string;
      name: string;
      tags: Record<string, unknown>;
      type: "cloudflared_tunnel";
    }
  | {
      id: string;
      etag: string;
      name: string;
      tags: Record<string, unknown>;
      type: "custom_certificate";
      zoneId: string;
    }
  | {
      id: string;
      etag: string;
      name: string;
      tags: Record<string, unknown>;
      type: "custom_hostname";
      zoneId: string;
    }
  | {
      id: string;
      etag: string;
      name: string;
      tags: Record<string, unknown>;
      type: "d1_database";
    }
  | {
      id: string;
      etag: string;
      name: string;
      tags: Record<string, unknown>;
      type: "dns_record";
      zoneId: string;
    }
  | {
      id: string;
      etag: string;
      name: string;
      tags: Record<string, unknown>;
      type: "durable_object_namespace";
    }
  | {
      id: string;
      etag: string;
      name: string;
      tags: Record<string, unknown>;
      type: "gateway_list";
    }
  | {
      id: string;
      etag: string;
      name: string;
      tags: Record<string, unknown>;
      type: "gateway_rule";
    }
  | {
      id: string;
      etag: string;
      name: string;
      tags: Record<string, unknown>;
      type: "image";
    }
  | {
      id: string;
      etag: string;
      name: string;
      tags: Record<string, unknown>;
      type: "kv_namespace";
    }
  | {
      id: string;
      etag: string;
      name: string;
      tags: Record<string, unknown>;
      type: "managed_client_certificate";
      zoneId: string;
    }
  | {
      id: string;
      etag: string;
      name: string;
      tags: Record<string, unknown>;
      type: "queue";
    }
  | {
      id: string;
      etag: string;
      name: string;
      tags: Record<string, unknown>;
      type: "r2_bucket";
    }
  | {
      id: string;
      etag: string;
      name: string;
      tags: Record<string, unknown>;
      type: "resource_share";
    }
  | {
      id: string;
      etag: string;
      name: string;
      tags: Record<string, unknown>;
      type: "stream_live_input";
    }
  | {
      id: string;
      etag: string;
      name: string;
      tags: Record<string, unknown>;
      type: "stream_video";
    }
  | {
      id: string;
      etag: string;
      name: string;
      tags: Record<string, unknown>;
      type: "worker";
    }
  | {
      id: string;
      etag: string;
      name: string;
      tags: Record<string, unknown>;
      type: "worker_version";
      workerId: string;
    }
  | {
      id: string;
      etag: string;
      name: string;
      tags: Record<string, unknown>;
      type: "zone";
      zoneId: string;
    };

export const GetAccountTagResponse = /*@__PURE__*/ Schema.suspend(() =>
  Schema.Union([
    ResourceTaggingTaggedResourceObjectAccessApplicationPolicy,
    ResourceTaggingTaggedResourceObjectAPIGatewayOperation,
    ResourceTaggingTaggedResourceObjectCustomCertificate,
    ResourceTaggingTaggedResourceObjectCustomHostname,
    ResourceTaggingTaggedResourceObjectDNSRecord,
    ResourceTaggingTaggedResourceObjectManagedClientCertificate,
    ResourceTaggingTaggedResourceObjectWorkerVersion,
    ResourceTaggingTaggedResourceObjectZone,
    ResourceTaggingTaggedResourceObjectAccessApplication,
    ResourceTaggingTaggedResourceObjectAccessGroup,
    ResourceTaggingTaggedResourceObjectAccount,
    ResourceTaggingTaggedResourceObjectAIGateway,
    ResourceTaggingTaggedResourceObjectAlertingPolicy,
    ResourceTaggingTaggedResourceObjectAlertingWebhook,
    ResourceTaggingTaggedResourceObjectCloudflaredTunnel,
    ResourceTaggingTaggedResourceObjectD1Database,
    ResourceTaggingTaggedResourceObjectDurableObjectNamespace,
    ResourceTaggingTaggedResourceObjectGatewayList,
    ResourceTaggingTaggedResourceObjectGatewayRule,
    ResourceTaggingTaggedResourceObjectImage,
    ResourceTaggingTaggedResourceObjectKVNamespace,
    ResourceTaggingTaggedResourceObjectQueue,
    ResourceTaggingTaggedResourceObjectR2Bucket,
    ResourceTaggingTaggedResourceObjectResourceShare,
    ResourceTaggingTaggedResourceObjectStreamLiveInput,
    ResourceTaggingTaggedResourceObjectStreamVideo,
    ResourceTaggingTaggedResourceObjectWorker,
  ]).pipe(T.ResponsePath("result")),
) as unknown as Schema.Codec<GetAccountTagResponse>;

export type GetAccountTagError = DefaultErrors | Forbidden;

export const getAccountTag: API.OperationMethod<
  GetAccountTagRequest,
  GetAccountTagResponse,
  GetAccountTagError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: GetAccountTagRequest,
  output: GetAccountTagResponse,
  errors: [Forbidden],
}));

export interface PutAccountTagRequest {
  /** Path param: Identifier. */
  accountId: string;
  /** Header param: ETag value for optimistic concurrency control. When provided, the server will verify the current resource ETag matches before applying the write. Returns 412 Precondition Failed if the r */
  ifMatch?: string;
  /** Body param: Identifies the unique resource. */
  resourceId: string;
  /** Body param: Enum for base account-level resource types (those with no extra required fields). */
  resourceType:
    | "access_application"
    | "access_group"
    | "account"
    | "ai_gateway"
    | "alerting_policy"
    | "alerting_webhook"
    | "cloudflared_tunnel"
    | "d1_database"
    | "durable_object_namespace"
    | "gateway_list"
    | "gateway_rule"
    | "image"
    | "kv_namespace"
    | "queue"
    | "r2_bucket"
    | "resource_share"
    | "stream_live_input"
    | "stream_video"
    | "worker"
    | "worker_version"
    | (string & {});
  /** Body param: Worker ID is required only for worker_version resources */
  workerId?: string;
  /** Body param: Contains key-value pairs of tags. */
  tags?: Record<string, unknown>;
}

export const PutAccountTagRequest = /*@__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    accountId: Schema.String.pipe(T.HttpPath("account_id")),
    ifMatch: Schema.optional(Schema.String).pipe(T.HttpHeader("If-Match")),
    resourceId: Schema.String,
    resourceType: Schema.Union([
      Schema.Literals([
        "access_application",
        "access_group",
        "account",
        "ai_gateway",
        "alerting_policy",
        "alerting_webhook",
        "cloudflared_tunnel",
        "d1_database",
        "durable_object_namespace",
        "gateway_list",
        "gateway_rule",
        "image",
        "kv_namespace",
        "queue",
        "r2_bucket",
        "resource_share",
        "stream_live_input",
        "stream_video",
        "worker",
        "worker_version",
      ]),
      Schema.String,
    ]),
    workerId: Schema.optional(Schema.String),
    tags: Schema.optional(Schema.Record(Schema.String, Schema.Unknown)),
  }).pipe(
    Schema.encodeKeys({
      resourceId: "resource_id",
      resourceType: "resource_type",
      workerId: "worker_id",
      tags: "tags",
    }),
    T.Http({ method: "PUT", path: "/accounts/{account_id}/tags" }),
  ),
) as unknown as Schema.Codec<PutAccountTagRequest>;

export type PutAccountTagResponse =
  | {
      id: string;
      etag: string;
      name: string;
      tags: Record<string, unknown>;
      type: "access_application";
    }
  | {
      id: string;
      accessApplicationId: string;
      etag: string;
      name: string;
      tags: Record<string, unknown>;
      type: "access_application_policy";
      zoneId: string;
    }
  | {
      id: string;
      etag: string;
      name: string;
      tags: Record<string, unknown>;
      type: "access_group";
    }
  | {
      id: string;
      etag: string;
      name: string;
      tags: Record<string, unknown>;
      type: "account";
    }
  | {
      id: string;
      etag: string;
      name: string;
      tags: Record<string, unknown>;
      type: "ai_gateway";
    }
  | {
      id: string;
      etag: string;
      name: string;
      tags: Record<string, unknown>;
      type: "alerting_policy";
    }
  | {
      id: string;
      etag: string;
      name: string;
      tags: Record<string, unknown>;
      type: "alerting_webhook";
    }
  | {
      id: string;
      etag: string;
      name: string;
      tags: Record<string, unknown>;
      type: "api_gateway_operation";
      zoneId: string;
    }
  | {
      id: string;
      etag: string;
      name: string;
      tags: Record<string, unknown>;
      type: "cloudflared_tunnel";
    }
  | {
      id: string;
      etag: string;
      name: string;
      tags: Record<string, unknown>;
      type: "custom_certificate";
      zoneId: string;
    }
  | {
      id: string;
      etag: string;
      name: string;
      tags: Record<string, unknown>;
      type: "custom_hostname";
      zoneId: string;
    }
  | {
      id: string;
      etag: string;
      name: string;
      tags: Record<string, unknown>;
      type: "d1_database";
    }
  | {
      id: string;
      etag: string;
      name: string;
      tags: Record<string, unknown>;
      type: "dns_record";
      zoneId: string;
    }
  | {
      id: string;
      etag: string;
      name: string;
      tags: Record<string, unknown>;
      type: "durable_object_namespace";
    }
  | {
      id: string;
      etag: string;
      name: string;
      tags: Record<string, unknown>;
      type: "gateway_list";
    }
  | {
      id: string;
      etag: string;
      name: string;
      tags: Record<string, unknown>;
      type: "gateway_rule";
    }
  | {
      id: string;
      etag: string;
      name: string;
      tags: Record<string, unknown>;
      type: "image";
    }
  | {
      id: string;
      etag: string;
      name: string;
      tags: Record<string, unknown>;
      type: "kv_namespace";
    }
  | {
      id: string;
      etag: string;
      name: string;
      tags: Record<string, unknown>;
      type: "managed_client_certificate";
      zoneId: string;
    }
  | {
      id: string;
      etag: string;
      name: string;
      tags: Record<string, unknown>;
      type: "queue";
    }
  | {
      id: string;
      etag: string;
      name: string;
      tags: Record<string, unknown>;
      type: "r2_bucket";
    }
  | {
      id: string;
      etag: string;
      name: string;
      tags: Record<string, unknown>;
      type: "resource_share";
    }
  | {
      id: string;
      etag: string;
      name: string;
      tags: Record<string, unknown>;
      type: "stream_live_input";
    }
  | {
      id: string;
      etag: string;
      name: string;
      tags: Record<string, unknown>;
      type: "stream_video";
    }
  | {
      id: string;
      etag: string;
      name: string;
      tags: Record<string, unknown>;
      type: "worker";
    }
  | {
      id: string;
      etag: string;
      name: string;
      tags: Record<string, unknown>;
      type: "worker_version";
      workerId: string;
    }
  | {
      id: string;
      etag: string;
      name: string;
      tags: Record<string, unknown>;
      type: "zone";
      zoneId: string;
    };

export const PutAccountTagResponse = /*@__PURE__*/ Schema.suspend(() =>
  Schema.Union([
    ResourceTaggingTaggedResourceObjectAccessApplicationPolicy,
    ResourceTaggingTaggedResourceObjectAPIGatewayOperation,
    ResourceTaggingTaggedResourceObjectCustomCertificate,
    ResourceTaggingTaggedResourceObjectCustomHostname,
    ResourceTaggingTaggedResourceObjectDNSRecord,
    ResourceTaggingTaggedResourceObjectManagedClientCertificate,
    ResourceTaggingTaggedResourceObjectWorkerVersion,
    ResourceTaggingTaggedResourceObjectZone,
    ResourceTaggingTaggedResourceObjectAccessApplication,
    ResourceTaggingTaggedResourceObjectAccessGroup,
    ResourceTaggingTaggedResourceObjectAccount,
    ResourceTaggingTaggedResourceObjectAIGateway,
    ResourceTaggingTaggedResourceObjectAlertingPolicy,
    ResourceTaggingTaggedResourceObjectAlertingWebhook,
    ResourceTaggingTaggedResourceObjectCloudflaredTunnel,
    ResourceTaggingTaggedResourceObjectD1Database,
    ResourceTaggingTaggedResourceObjectDurableObjectNamespace,
    ResourceTaggingTaggedResourceObjectGatewayList,
    ResourceTaggingTaggedResourceObjectGatewayRule,
    ResourceTaggingTaggedResourceObjectImage,
    ResourceTaggingTaggedResourceObjectKVNamespace,
    ResourceTaggingTaggedResourceObjectQueue,
    ResourceTaggingTaggedResourceObjectR2Bucket,
    ResourceTaggingTaggedResourceObjectResourceShare,
    ResourceTaggingTaggedResourceObjectStreamLiveInput,
    ResourceTaggingTaggedResourceObjectStreamVideo,
    ResourceTaggingTaggedResourceObjectWorker,
  ]).pipe(T.ResponsePath("result")),
) as unknown as Schema.Codec<PutAccountTagResponse>;

export type PutAccountTagError =
  | DefaultErrors
  | Forbidden
  | TagPreconditionFailed;

export const putAccountTag: API.OperationMethod<
  PutAccountTagRequest,
  PutAccountTagResponse,
  PutAccountTagError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: PutAccountTagRequest,
  output: PutAccountTagResponse,
  errors: [Forbidden, TagPreconditionFailed],
}));

export interface DeleteAccountTagRequest {
  /** Path param: Identifier. */
  accountId: string;
  /** Header param: ETag value for optimistic concurrency control. When provided, the server will verify the current resource ETag matches before applying the write. Returns 412 Precondition Failed if the r */
  ifMatch?: string;
  resourceId: string;
  resourceType: string;
  workerId?: string;
}

export const DeleteAccountTagRequest =
  /*@__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      accountId: Schema.String.pipe(T.HttpPath("account_id")),
      ifMatch: Schema.optional(Schema.String).pipe(T.HttpHeader("If-Match")),
      resourceId: Schema.String,
      resourceType: Schema.String,
      workerId: Schema.optional(Schema.String),
    }).pipe(
      Schema.encodeKeys({
        resourceId: "resource_id",
        resourceType: "resource_type",
        workerId: "worker_id",
      }),
      T.Http({ method: "DELETE", path: "/accounts/{account_id}/tags" }),
    ),
  ) as unknown as Schema.Codec<DeleteAccountTagRequest>;

export type DeleteAccountTagResponse = unknown;

export const DeleteAccountTagResponse =
  /*@__PURE__*/ Schema.suspend(
    () => Schema.Unknown,
  ) as unknown as Schema.Codec<DeleteAccountTagResponse>;

export type DeleteAccountTagError = DefaultErrors | Forbidden;

export const deleteAccountTag: API.OperationMethod<
  DeleteAccountTagRequest,
  DeleteAccountTagResponse,
  DeleteAccountTagError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: DeleteAccountTagRequest,
  output: DeleteAccountTagResponse,
  errors: [Forbidden],
}));

// =============================================================================
// Key
// =============================================================================

export interface ListKeysRequest {
  /** Path param: Identifier. */
  accountId: string;
  cursor?: string;
}

export const ListKeysRequest = /*@__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    accountId: Schema.String.pipe(T.HttpPath("account_id")),
    cursor: Schema.optional(Schema.String).pipe(T.HttpQuery("cursor")),
  }).pipe(T.Http({ method: "GET", path: "/accounts/{account_id}/tags/keys" })),
) as unknown as Schema.Codec<ListKeysRequest>;

export interface ListKeysResponse {
  result: string[];
  resultInfo?: { cursors?: { after?: string | null } | null } | null;
}

export const ListKeysResponse = /*@__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    result: Schema.Array(Schema.String),
    resultInfo: Schema.optional(
      Schema.Union([ListKeysResponseResultInfo, Schema.Null]),
    ),
  }).pipe(Schema.encodeKeys({ result: "result", resultInfo: "result_info" })),
) as unknown as Schema.Codec<ListKeysResponse>;

export type ListKeysError = DefaultErrors;

export const listKeys: API.PaginatedOperationMethod<
  ListKeysRequest,
  ListKeysResponse,
  ListKeysError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: ListKeysRequest,
  output: ListKeysResponse,
  errors: [],
  pagination: {
    mode: "cursor",
    inputToken: "cursor",
    outputToken: "resultInfo.cursors.after",
    items: "result",
  } as const,
}));

// =============================================================================
// ResourceTagging
// =============================================================================

export interface ListResourceTaggingsRequest {
  /** Path param: Identifier. */
  accountId: string;
  cursor?: string;
  /** Query param: Filter resources by tag criteria. This parameter can be repeated multiple times, with AND logic between parameters.  Supported syntax:  -  Key-only  : `tag=<key>` - Resource must have the */
  tag?: string[];
  /** Query param: Filter by resource type. Can be repeated to filter by multiple types (OR logic). Example: ?type=zone&type=worker */
  type?: (
    | "access_application"
    | "access_application_policy"
    | "access_group"
    | "account"
    | "ai_gateway"
    | "alerting_policy"
    | "alerting_webhook"
    | "api_gateway_operation"
    | "cloudflared_tunnel"
    | "custom_certificate"
    | "custom_hostname"
    | "d1_database"
    | "dns_record"
    | "durable_object_namespace"
    | "gateway_list"
    | "gateway_rule"
    | "image"
    | "kv_namespace"
    | "managed_client_certificate"
    | "queue"
    | "r2_bucket"
    | "resource_share"
    | "stream_live_input"
    | "stream_video"
    | "worker"
    | "worker_version"
    | "zone"
    | (string & {})
  )[];
}

export const ListResourceTaggingsRequest =
  /*@__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      accountId: Schema.String.pipe(T.HttpPath("account_id")),
      cursor: Schema.optional(Schema.String).pipe(T.HttpQuery("cursor")),
      tag: Schema.optional(Schema.Array(Schema.String)).pipe(
        T.HttpQuery("tag"),
      ),
      type: Schema.optional(
        Schema.Array(
          Schema.Union([
            Schema.Literals([
              "access_application",
              "access_application_policy",
              "access_group",
              "account",
              "ai_gateway",
              "alerting_policy",
              "alerting_webhook",
              "api_gateway_operation",
              "cloudflared_tunnel",
              "custom_certificate",
              "custom_hostname",
              "d1_database",
              "dns_record",
              "durable_object_namespace",
              "gateway_list",
              "gateway_rule",
              "image",
              "kv_namespace",
              "managed_client_certificate",
              "queue",
              "r2_bucket",
              "resource_share",
              "stream_live_input",
              "stream_video",
              "worker",
              "worker_version",
              "zone",
            ]),
            Schema.String,
          ]),
        ),
      ).pipe(T.HttpQuery("type")),
    }).pipe(
      T.Http({ method: "GET", path: "/accounts/{account_id}/tags/resources" }),
    ),
  ) as unknown as Schema.Codec<ListResourceTaggingsRequest>;

export interface ListResourceTaggingsResponse {
  result: (
    | {
        id: string;
        etag: string;
        name: string;
        tags: Record<string, unknown>;
        type: "access_application";
      }
    | {
        id: string;
        accessApplicationId: string;
        etag: string;
        name: string;
        tags: Record<string, unknown>;
        type: "access_application_policy";
        zoneId: string;
      }
    | {
        id: string;
        etag: string;
        name: string;
        tags: Record<string, unknown>;
        type: "access_group";
      }
    | {
        id: string;
        etag: string;
        name: string;
        tags: Record<string, unknown>;
        type: "account";
      }
    | {
        id: string;
        etag: string;
        name: string;
        tags: Record<string, unknown>;
        type: "ai_gateway";
      }
    | {
        id: string;
        etag: string;
        name: string;
        tags: Record<string, unknown>;
        type: "alerting_policy";
      }
    | {
        id: string;
        etag: string;
        name: string;
        tags: Record<string, unknown>;
        type: "alerting_webhook";
      }
    | {
        id: string;
        etag: string;
        name: string;
        tags: Record<string, unknown>;
        type: "api_gateway_operation";
        zoneId: string;
      }
    | {
        id: string;
        etag: string;
        name: string;
        tags: Record<string, unknown>;
        type: "cloudflared_tunnel";
      }
    | {
        id: string;
        etag: string;
        name: string;
        tags: Record<string, unknown>;
        type: "custom_certificate";
        zoneId: string;
      }
    | {
        id: string;
        etag: string;
        name: string;
        tags: Record<string, unknown>;
        type: "custom_hostname";
        zoneId: string;
      }
    | {
        id: string;
        etag: string;
        name: string;
        tags: Record<string, unknown>;
        type: "d1_database";
      }
    | {
        id: string;
        etag: string;
        name: string;
        tags: Record<string, unknown>;
        type: "dns_record";
        zoneId: string;
      }
    | {
        id: string;
        etag: string;
        name: string;
        tags: Record<string, unknown>;
        type: "durable_object_namespace";
      }
    | {
        id: string;
        etag: string;
        name: string;
        tags: Record<string, unknown>;
        type: "gateway_list";
      }
    | {
        id: string;
        etag: string;
        name: string;
        tags: Record<string, unknown>;
        type: "gateway_rule";
      }
    | {
        id: string;
        etag: string;
        name: string;
        tags: Record<string, unknown>;
        type: "image";
      }
    | {
        id: string;
        etag: string;
        name: string;
        tags: Record<string, unknown>;
        type: "kv_namespace";
      }
    | {
        id: string;
        etag: string;
        name: string;
        tags: Record<string, unknown>;
        type: "managed_client_certificate";
        zoneId: string;
      }
    | {
        id: string;
        etag: string;
        name: string;
        tags: Record<string, unknown>;
        type: "queue";
      }
    | {
        id: string;
        etag: string;
        name: string;
        tags: Record<string, unknown>;
        type: "r2_bucket";
      }
    | {
        id: string;
        etag: string;
        name: string;
        tags: Record<string, unknown>;
        type: "resource_share";
      }
    | {
        id: string;
        etag: string;
        name: string;
        tags: Record<string, unknown>;
        type: "stream_live_input";
      }
    | {
        id: string;
        etag: string;
        name: string;
        tags: Record<string, unknown>;
        type: "stream_video";
      }
    | {
        id: string;
        etag: string;
        name: string;
        tags: Record<string, unknown>;
        type: "worker";
      }
    | {
        id: string;
        etag: string;
        name: string;
        tags: Record<string, unknown>;
        type: "worker_version";
        workerId: string;
      }
    | {
        id: string;
        etag: string;
        name: string;
        tags: Record<string, unknown>;
        type: "zone";
        zoneId: string;
      }
  )[];
  resultInfo?: { cursors?: { after?: string | null } | null } | null;
}

export const ListResourceTaggingsResponse =
  /*@__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      result: Schema.Array(
        Schema.Union([
          ResourceTaggingTaggedResourceObjectAccessApplicationPolicy,
          ResourceTaggingTaggedResourceObjectAPIGatewayOperation,
          ResourceTaggingTaggedResourceObjectCustomCertificate,
          ResourceTaggingTaggedResourceObjectCustomHostname,
          ResourceTaggingTaggedResourceObjectDNSRecord,
          ResourceTaggingTaggedResourceObjectManagedClientCertificate,
          ResourceTaggingTaggedResourceObjectWorkerVersion,
          ResourceTaggingTaggedResourceObjectZone,
          ResourceTaggingTaggedResourceObjectAccessApplication,
          ResourceTaggingTaggedResourceObjectAccessGroup,
          ResourceTaggingTaggedResourceObjectAccount,
          ResourceTaggingTaggedResourceObjectAIGateway,
          ResourceTaggingTaggedResourceObjectAlertingPolicy,
          ResourceTaggingTaggedResourceObjectAlertingWebhook,
          ResourceTaggingTaggedResourceObjectCloudflaredTunnel,
          ResourceTaggingTaggedResourceObjectD1Database,
          ResourceTaggingTaggedResourceObjectDurableObjectNamespace,
          ResourceTaggingTaggedResourceObjectGatewayList,
          ResourceTaggingTaggedResourceObjectGatewayRule,
          ResourceTaggingTaggedResourceObjectImage,
          ResourceTaggingTaggedResourceObjectKVNamespace,
          ResourceTaggingTaggedResourceObjectQueue,
          ResourceTaggingTaggedResourceObjectR2Bucket,
          ResourceTaggingTaggedResourceObjectResourceShare,
          ResourceTaggingTaggedResourceObjectStreamLiveInput,
          ResourceTaggingTaggedResourceObjectStreamVideo,
          ResourceTaggingTaggedResourceObjectWorker,
        ]),
      ),
      resultInfo: Schema.optional(
        Schema.Union([ListKeysResponseResultInfo, Schema.Null]),
      ),
    }).pipe(Schema.encodeKeys({ result: "result", resultInfo: "result_info" })),
  ) as unknown as Schema.Codec<ListResourceTaggingsResponse>;

export type ListResourceTaggingsError = DefaultErrors;

export const listResourceTaggings: API.PaginatedOperationMethod<
  ListResourceTaggingsRequest,
  ListResourceTaggingsResponse,
  ListResourceTaggingsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: ListResourceTaggingsRequest,
  output: ListResourceTaggingsResponse,
  errors: [],
  pagination: {
    mode: "cursor",
    inputToken: "cursor",
    outputToken: "resultInfo.cursors.after",
    items: "result",
  } as const,
}));

// =============================================================================
// Value
// =============================================================================

export interface ListValuesRequest {
  tagKey: string;
  /** Path param: Identifier. */
  accountId: string;
  cursor?: string;
  /** Query param: Filter by resource type. */
  type?:
    | "access_application"
    | "access_application_policy"
    | "access_group"
    | "account"
    | "ai_gateway"
    | "alerting_policy"
    | "alerting_webhook"
    | "api_gateway_operation"
    | "cloudflared_tunnel"
    | "custom_certificate"
    | "custom_hostname"
    | "d1_database"
    | "dns_record"
    | "durable_object_namespace"
    | "gateway_list"
    | "gateway_rule"
    | "image"
    | "kv_namespace"
    | "managed_client_certificate"
    | "queue"
    | "r2_bucket"
    | "resource_share"
    | "stream_live_input"
    | "stream_video"
    | "worker"
    | "worker_version"
    | "zone"
    | (string & {});
}

export const ListValuesRequest = /*@__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    tagKey: Schema.String.pipe(T.HttpPath("tagKey")),
    accountId: Schema.String.pipe(T.HttpPath("account_id")),
    cursor: Schema.optional(Schema.String).pipe(T.HttpQuery("cursor")),
    type: Schema.optional(
      Schema.Union([
        Schema.Literals([
          "access_application",
          "access_application_policy",
          "access_group",
          "account",
          "ai_gateway",
          "alerting_policy",
          "alerting_webhook",
          "api_gateway_operation",
          "cloudflared_tunnel",
          "custom_certificate",
          "custom_hostname",
          "d1_database",
          "dns_record",
          "durable_object_namespace",
          "gateway_list",
          "gateway_rule",
          "image",
          "kv_namespace",
          "managed_client_certificate",
          "queue",
          "r2_bucket",
          "resource_share",
          "stream_live_input",
          "stream_video",
          "worker",
          "worker_version",
          "zone",
        ]),
        Schema.String,
      ]),
    ).pipe(T.HttpQuery("type")),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/accounts/{account_id}/tags/values/{tagKey}",
    }),
  ),
) as unknown as Schema.Codec<ListValuesRequest>;

export interface ListValuesResponse {
  result: string[];
  resultInfo?: { cursors?: { after?: string | null } | null } | null;
}

export const ListValuesResponse = /*@__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    result: Schema.Array(Schema.String),
    resultInfo: Schema.optional(
      Schema.Union([ListKeysResponseResultInfo, Schema.Null]),
    ),
  }).pipe(Schema.encodeKeys({ result: "result", resultInfo: "result_info" })),
) as unknown as Schema.Codec<ListValuesResponse>;

export type ListValuesError = DefaultErrors;

export const listValues: API.PaginatedOperationMethod<
  ListValuesRequest,
  ListValuesResponse,
  ListValuesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: ListValuesRequest,
  output: ListValuesResponse,
  errors: [],
  pagination: {
    mode: "cursor",
    inputToken: "cursor",
    outputToken: "resultInfo.cursors.after",
    items: "result",
  } as const,
}));

// =============================================================================
// ZoneTag
// =============================================================================

export interface GetZoneTagRequest {
  /** Path param: Zone ID is required only for zone-level resources */
  zoneId: string;
  /** Query param: The ID of the resource to retrieve tags for. */
  resourceId: string;
  /** Query param: The type of the resource. */
  resourceType:
    | "access_application_policy"
    | "api_gateway_operation"
    | "custom_certificate"
    | "custom_hostname"
    | "dns_record"
    | "managed_client_certificate"
    | "zone"
    | (string & {});
  /** Query param: Access application ID identifier. Required for access_application_policy resources. */
  accessApplicationId?: string;
}

export const GetZoneTagRequest = /*@__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    zoneId: Schema.String.pipe(T.HttpPath("zone_id")),
    resourceId: Schema.String.pipe(T.HttpQuery("resource_id")),
    resourceType: Schema.Union([
      Schema.Literals([
        "access_application_policy",
        "api_gateway_operation",
        "custom_certificate",
        "custom_hostname",
        "dns_record",
        "managed_client_certificate",
        "zone",
      ]),
      Schema.String,
    ]).pipe(T.HttpQuery("resource_type")),
    accessApplicationId: Schema.optional(Schema.String).pipe(
      T.HttpQuery("access_application_id"),
    ),
  }).pipe(T.Http({ method: "GET", path: "/zones/{zone_id}/tags" })),
) as unknown as Schema.Codec<GetZoneTagRequest>;

export type GetZoneTagResponse =
  | {
      id: string;
      etag: string;
      name: string;
      tags: Record<string, unknown>;
      type: "access_application";
    }
  | {
      id: string;
      accessApplicationId: string;
      etag: string;
      name: string;
      tags: Record<string, unknown>;
      type: "access_application_policy";
      zoneId: string;
    }
  | {
      id: string;
      etag: string;
      name: string;
      tags: Record<string, unknown>;
      type: "access_group";
    }
  | {
      id: string;
      etag: string;
      name: string;
      tags: Record<string, unknown>;
      type: "account";
    }
  | {
      id: string;
      etag: string;
      name: string;
      tags: Record<string, unknown>;
      type: "ai_gateway";
    }
  | {
      id: string;
      etag: string;
      name: string;
      tags: Record<string, unknown>;
      type: "alerting_policy";
    }
  | {
      id: string;
      etag: string;
      name: string;
      tags: Record<string, unknown>;
      type: "alerting_webhook";
    }
  | {
      id: string;
      etag: string;
      name: string;
      tags: Record<string, unknown>;
      type: "api_gateway_operation";
      zoneId: string;
    }
  | {
      id: string;
      etag: string;
      name: string;
      tags: Record<string, unknown>;
      type: "cloudflared_tunnel";
    }
  | {
      id: string;
      etag: string;
      name: string;
      tags: Record<string, unknown>;
      type: "custom_certificate";
      zoneId: string;
    }
  | {
      id: string;
      etag: string;
      name: string;
      tags: Record<string, unknown>;
      type: "custom_hostname";
      zoneId: string;
    }
  | {
      id: string;
      etag: string;
      name: string;
      tags: Record<string, unknown>;
      type: "d1_database";
    }
  | {
      id: string;
      etag: string;
      name: string;
      tags: Record<string, unknown>;
      type: "dns_record";
      zoneId: string;
    }
  | {
      id: string;
      etag: string;
      name: string;
      tags: Record<string, unknown>;
      type: "durable_object_namespace";
    }
  | {
      id: string;
      etag: string;
      name: string;
      tags: Record<string, unknown>;
      type: "gateway_list";
    }
  | {
      id: string;
      etag: string;
      name: string;
      tags: Record<string, unknown>;
      type: "gateway_rule";
    }
  | {
      id: string;
      etag: string;
      name: string;
      tags: Record<string, unknown>;
      type: "image";
    }
  | {
      id: string;
      etag: string;
      name: string;
      tags: Record<string, unknown>;
      type: "kv_namespace";
    }
  | {
      id: string;
      etag: string;
      name: string;
      tags: Record<string, unknown>;
      type: "managed_client_certificate";
      zoneId: string;
    }
  | {
      id: string;
      etag: string;
      name: string;
      tags: Record<string, unknown>;
      type: "queue";
    }
  | {
      id: string;
      etag: string;
      name: string;
      tags: Record<string, unknown>;
      type: "r2_bucket";
    }
  | {
      id: string;
      etag: string;
      name: string;
      tags: Record<string, unknown>;
      type: "resource_share";
    }
  | {
      id: string;
      etag: string;
      name: string;
      tags: Record<string, unknown>;
      type: "stream_live_input";
    }
  | {
      id: string;
      etag: string;
      name: string;
      tags: Record<string, unknown>;
      type: "stream_video";
    }
  | {
      id: string;
      etag: string;
      name: string;
      tags: Record<string, unknown>;
      type: "worker";
    }
  | {
      id: string;
      etag: string;
      name: string;
      tags: Record<string, unknown>;
      type: "worker_version";
      workerId: string;
    }
  | {
      id: string;
      etag: string;
      name: string;
      tags: Record<string, unknown>;
      type: "zone";
      zoneId: string;
    };

export const GetZoneTagResponse = /*@__PURE__*/ Schema.suspend(() =>
  Schema.Union([
    ResourceTaggingTaggedResourceObjectAccessApplicationPolicy,
    ResourceTaggingTaggedResourceObjectAPIGatewayOperation,
    ResourceTaggingTaggedResourceObjectCustomCertificate,
    ResourceTaggingTaggedResourceObjectCustomHostname,
    ResourceTaggingTaggedResourceObjectDNSRecord,
    ResourceTaggingTaggedResourceObjectManagedClientCertificate,
    ResourceTaggingTaggedResourceObjectWorkerVersion,
    ResourceTaggingTaggedResourceObjectZone,
    ResourceTaggingTaggedResourceObjectAccessApplication,
    ResourceTaggingTaggedResourceObjectAccessGroup,
    ResourceTaggingTaggedResourceObjectAccount,
    ResourceTaggingTaggedResourceObjectAIGateway,
    ResourceTaggingTaggedResourceObjectAlertingPolicy,
    ResourceTaggingTaggedResourceObjectAlertingWebhook,
    ResourceTaggingTaggedResourceObjectCloudflaredTunnel,
    ResourceTaggingTaggedResourceObjectD1Database,
    ResourceTaggingTaggedResourceObjectDurableObjectNamespace,
    ResourceTaggingTaggedResourceObjectGatewayList,
    ResourceTaggingTaggedResourceObjectGatewayRule,
    ResourceTaggingTaggedResourceObjectImage,
    ResourceTaggingTaggedResourceObjectKVNamespace,
    ResourceTaggingTaggedResourceObjectQueue,
    ResourceTaggingTaggedResourceObjectR2Bucket,
    ResourceTaggingTaggedResourceObjectResourceShare,
    ResourceTaggingTaggedResourceObjectStreamLiveInput,
    ResourceTaggingTaggedResourceObjectStreamVideo,
    ResourceTaggingTaggedResourceObjectWorker,
  ]).pipe(T.ResponsePath("result")),
) as unknown as Schema.Codec<GetZoneTagResponse>;

export type GetZoneTagError =
  | DefaultErrors
  | ZoneTagResourceNotFound
  | Forbidden;

export const getZoneTag: API.OperationMethod<
  GetZoneTagRequest,
  GetZoneTagResponse,
  GetZoneTagError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: GetZoneTagRequest,
  output: GetZoneTagResponse,
  errors: [ZoneTagResourceNotFound, Forbidden],
}));

export interface PutZoneTagRequest {
  /** Path param: Zone ID is required only for zone-level resources */
  zoneId: string;
  /** Header param: ETag value for optimistic concurrency control. When provided, the server will verify the current resource ETag matches before applying the write. Returns 412 Precondition Failed if the r */
  ifMatch?: string;
  /** Body param: Identifies the unique resource. */
  resourceId: string;
  /** Body param: Enum for base zone-level resource types (those with no extra required fields). */
  resourceType:
    | "api_gateway_operation"
    | "custom_certificate"
    | "custom_hostname"
    | "dns_record"
    | "managed_client_certificate"
    | "zone"
    | "access_application_policy"
    | (string & {});
  /** Body param: Contains key-value pairs of tags. */
  tags?: Record<string, unknown>;
  /** Body param: Access application ID is required only for access_application_policy resources */
  accessApplicationId?: string;
}

export const PutZoneTagRequest = /*@__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    zoneId: Schema.String.pipe(T.HttpPath("zone_id")),
    ifMatch: Schema.optional(Schema.String).pipe(T.HttpHeader("If-Match")),
    resourceId: Schema.String,
    resourceType: Schema.Union([
      Schema.Literals([
        "api_gateway_operation",
        "custom_certificate",
        "custom_hostname",
        "dns_record",
        "managed_client_certificate",
        "zone",
        "access_application_policy",
      ]),
      Schema.String,
    ]),
    tags: Schema.optional(Schema.Record(Schema.String, Schema.Unknown)),
    accessApplicationId: Schema.optional(Schema.String),
  }).pipe(
    Schema.encodeKeys({
      resourceId: "resource_id",
      resourceType: "resource_type",
      tags: "tags",
      accessApplicationId: "access_application_id",
    }),
    T.Http({ method: "PUT", path: "/zones/{zone_id}/tags" }),
  ),
) as unknown as Schema.Codec<PutZoneTagRequest>;

export type PutZoneTagResponse =
  | {
      id: string;
      etag: string;
      name: string;
      tags: Record<string, unknown>;
      type: "access_application";
    }
  | {
      id: string;
      accessApplicationId: string;
      etag: string;
      name: string;
      tags: Record<string, unknown>;
      type: "access_application_policy";
      zoneId: string;
    }
  | {
      id: string;
      etag: string;
      name: string;
      tags: Record<string, unknown>;
      type: "access_group";
    }
  | {
      id: string;
      etag: string;
      name: string;
      tags: Record<string, unknown>;
      type: "account";
    }
  | {
      id: string;
      etag: string;
      name: string;
      tags: Record<string, unknown>;
      type: "ai_gateway";
    }
  | {
      id: string;
      etag: string;
      name: string;
      tags: Record<string, unknown>;
      type: "alerting_policy";
    }
  | {
      id: string;
      etag: string;
      name: string;
      tags: Record<string, unknown>;
      type: "alerting_webhook";
    }
  | {
      id: string;
      etag: string;
      name: string;
      tags: Record<string, unknown>;
      type: "api_gateway_operation";
      zoneId: string;
    }
  | {
      id: string;
      etag: string;
      name: string;
      tags: Record<string, unknown>;
      type: "cloudflared_tunnel";
    }
  | {
      id: string;
      etag: string;
      name: string;
      tags: Record<string, unknown>;
      type: "custom_certificate";
      zoneId: string;
    }
  | {
      id: string;
      etag: string;
      name: string;
      tags: Record<string, unknown>;
      type: "custom_hostname";
      zoneId: string;
    }
  | {
      id: string;
      etag: string;
      name: string;
      tags: Record<string, unknown>;
      type: "d1_database";
    }
  | {
      id: string;
      etag: string;
      name: string;
      tags: Record<string, unknown>;
      type: "dns_record";
      zoneId: string;
    }
  | {
      id: string;
      etag: string;
      name: string;
      tags: Record<string, unknown>;
      type: "durable_object_namespace";
    }
  | {
      id: string;
      etag: string;
      name: string;
      tags: Record<string, unknown>;
      type: "gateway_list";
    }
  | {
      id: string;
      etag: string;
      name: string;
      tags: Record<string, unknown>;
      type: "gateway_rule";
    }
  | {
      id: string;
      etag: string;
      name: string;
      tags: Record<string, unknown>;
      type: "image";
    }
  | {
      id: string;
      etag: string;
      name: string;
      tags: Record<string, unknown>;
      type: "kv_namespace";
    }
  | {
      id: string;
      etag: string;
      name: string;
      tags: Record<string, unknown>;
      type: "managed_client_certificate";
      zoneId: string;
    }
  | {
      id: string;
      etag: string;
      name: string;
      tags: Record<string, unknown>;
      type: "queue";
    }
  | {
      id: string;
      etag: string;
      name: string;
      tags: Record<string, unknown>;
      type: "r2_bucket";
    }
  | {
      id: string;
      etag: string;
      name: string;
      tags: Record<string, unknown>;
      type: "resource_share";
    }
  | {
      id: string;
      etag: string;
      name: string;
      tags: Record<string, unknown>;
      type: "stream_live_input";
    }
  | {
      id: string;
      etag: string;
      name: string;
      tags: Record<string, unknown>;
      type: "stream_video";
    }
  | {
      id: string;
      etag: string;
      name: string;
      tags: Record<string, unknown>;
      type: "worker";
    }
  | {
      id: string;
      etag: string;
      name: string;
      tags: Record<string, unknown>;
      type: "worker_version";
      workerId: string;
    }
  | {
      id: string;
      etag: string;
      name: string;
      tags: Record<string, unknown>;
      type: "zone";
      zoneId: string;
    };

export const PutZoneTagResponse = /*@__PURE__*/ Schema.suspend(() =>
  Schema.Union([
    ResourceTaggingTaggedResourceObjectAccessApplicationPolicy,
    ResourceTaggingTaggedResourceObjectAPIGatewayOperation,
    ResourceTaggingTaggedResourceObjectCustomCertificate,
    ResourceTaggingTaggedResourceObjectCustomHostname,
    ResourceTaggingTaggedResourceObjectDNSRecord,
    ResourceTaggingTaggedResourceObjectManagedClientCertificate,
    ResourceTaggingTaggedResourceObjectWorkerVersion,
    ResourceTaggingTaggedResourceObjectZone,
    ResourceTaggingTaggedResourceObjectAccessApplication,
    ResourceTaggingTaggedResourceObjectAccessGroup,
    ResourceTaggingTaggedResourceObjectAccount,
    ResourceTaggingTaggedResourceObjectAIGateway,
    ResourceTaggingTaggedResourceObjectAlertingPolicy,
    ResourceTaggingTaggedResourceObjectAlertingWebhook,
    ResourceTaggingTaggedResourceObjectCloudflaredTunnel,
    ResourceTaggingTaggedResourceObjectD1Database,
    ResourceTaggingTaggedResourceObjectDurableObjectNamespace,
    ResourceTaggingTaggedResourceObjectGatewayList,
    ResourceTaggingTaggedResourceObjectGatewayRule,
    ResourceTaggingTaggedResourceObjectImage,
    ResourceTaggingTaggedResourceObjectKVNamespace,
    ResourceTaggingTaggedResourceObjectQueue,
    ResourceTaggingTaggedResourceObjectR2Bucket,
    ResourceTaggingTaggedResourceObjectResourceShare,
    ResourceTaggingTaggedResourceObjectStreamLiveInput,
    ResourceTaggingTaggedResourceObjectStreamVideo,
    ResourceTaggingTaggedResourceObjectWorker,
  ]).pipe(T.ResponsePath("result")),
) as unknown as Schema.Codec<PutZoneTagResponse>;

export type PutZoneTagError =
  | DefaultErrors
  | ZoneTagResourceNotFound
  | Forbidden
  | TagPreconditionFailed;

export const putZoneTag: API.OperationMethod<
  PutZoneTagRequest,
  PutZoneTagResponse,
  PutZoneTagError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: PutZoneTagRequest,
  output: PutZoneTagResponse,
  errors: [ZoneTagResourceNotFound, Forbidden, TagPreconditionFailed],
}));

export interface DeleteZoneTagRequest {
  /** Path param: Zone ID is required only for zone-level resources */
  zoneId: string;
  /** Header param: ETag value for optimistic concurrency control. When provided, the server will verify the current resource ETag matches before applying the write. Returns 412 Precondition Failed if the r */
  ifMatch?: string;
  resourceId: string;
  resourceType: string;
  accessApplicationId?: string;
}

export const DeleteZoneTagRequest = /*@__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    zoneId: Schema.String.pipe(T.HttpPath("zone_id")),
    ifMatch: Schema.optional(Schema.String).pipe(T.HttpHeader("If-Match")),
    resourceId: Schema.String,
    resourceType: Schema.String,
    accessApplicationId: Schema.optional(Schema.String),
  }).pipe(
    Schema.encodeKeys({
      resourceId: "resource_id",
      resourceType: "resource_type",
      accessApplicationId: "access_application_id",
    }),
    T.Http({ method: "DELETE", path: "/zones/{zone_id}/tags" }),
  ),
) as unknown as Schema.Codec<DeleteZoneTagRequest>;

export type DeleteZoneTagResponse = unknown;

export const DeleteZoneTagResponse = /*@__PURE__*/ Schema.suspend(
  () => Schema.Unknown,
) as unknown as Schema.Codec<DeleteZoneTagResponse>;

export type DeleteZoneTagError = DefaultErrors | Forbidden;

export const deleteZoneTag: API.OperationMethod<
  DeleteZoneTagRequest,
  DeleteZoneTagResponse,
  DeleteZoneTagError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: DeleteZoneTagRequest,
  output: DeleteZoneTagResponse,
  errors: [Forbidden],
}));
