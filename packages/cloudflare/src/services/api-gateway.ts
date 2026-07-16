/**
 * Cloudflare API-GATEWAY API
 *
 * Generated from Cloudflare TypeScript SDK.
 * DO NOT EDIT - regenerate with: bun scripts/generate.ts --service api-gateway
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

export class Forbidden extends T.applyErrorMatchers(
  Schema.TaggedErrorClass<Forbidden>()("Forbidden", {
    code: Schema.Number,
    message: Schema.String,
  }),
  [{ status: 403 }],
) {}

export class InvalidObjectIdentifier extends T.applyErrorMatchers(
  Schema.TaggedErrorClass<InvalidObjectIdentifier>()(
    "InvalidObjectIdentifier",
    { code: Schema.Number, message: Schema.String },
  ),
  [{ code: 7003 }],
) {}

export class LabelAlreadyExists extends T.applyErrorMatchers(
  Schema.TaggedErrorClass<LabelAlreadyExists>()("LabelAlreadyExists", {
    code: Schema.Number,
    message: Schema.String,
  }),
  [{ code: 70009 }],
) {}

export class LabelNotFound extends T.applyErrorMatchers(
  Schema.TaggedErrorClass<LabelNotFound>()("LabelNotFound", {
    code: Schema.Number,
    message: Schema.String,
  }),
  [{ code: 70014 }],
) {}

export class NotEntitled extends T.applyErrorMatchers(
  Schema.TaggedErrorClass<NotEntitled>()("NotEntitled", {
    code: Schema.Number,
    message: Schema.String,
  }),
  [{ code: 10403 }, { code: 10404 }],
) {}

export class NotFound extends T.applyErrorMatchers(
  Schema.TaggedErrorClass<NotFound>()("NotFound", {
    code: Schema.Number,
    message: Schema.String,
  }),
  [{ status: 404 }],
) {}

export class OperationNotFound extends T.applyErrorMatchers(
  Schema.TaggedErrorClass<OperationNotFound>()("OperationNotFound", {
    code: Schema.Number,
    message: Schema.String,
  }),
  [{ code: 10404 }],
) {}

export class SchemaNotFound extends T.applyErrorMatchers(
  Schema.TaggedErrorClass<SchemaNotFound>()("SchemaNotFound", {
    code: Schema.Number,
    message: Schema.String,
  }),
  [{ code: 19400 }],
) {}

export class ZonePurged extends T.applyErrorMatchers(
  Schema.TaggedErrorClass<ZonePurged>()("ZonePurged", {
    code: Schema.Number,
    message: Schema.String,
  }),
  [{ code: 10410 }],
) {}

// =============================================================================
// Shared nested schemas (hoisted, module-private)
// =============================================================================

interface ApishieldAuthIDCharacteristic {
  /** The name of the characteristic field, i.e., the header or cookie name. */
  name: string;
  /** The type of characteristic. */
  type: "header" | "cookie" | (string & {});
}
const ApishieldAuthIDCharacteristic =
  /*@__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      name: Schema.String,
      type: Schema.Union([
        Schema.Literals(["header", "cookie"]),
        Schema.String,
      ]),
    }),
  ) as unknown as Schema.Codec<ApishieldAuthIDCharacteristic>;

interface ApishieldAuthIDCharacteristicJWTClaim {
  /** Claim location expressed as `$(token_config_id):$(json_path)`, where `token_config_id` is the ID of the token configuration used in validating the JWT, and `json_path` is a RFC 9535 JSONPath (https:// */
  name: string;
  /** The type of characteristic. */
  type: "jwt";
}
const ApishieldAuthIDCharacteristicJWTClaim =
  /*@__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      name: Schema.String,
      type: Schema.Literal("jwt"),
    }),
  ) as unknown as Schema.Codec<ApishieldAuthIDCharacteristicJWTClaim>;

interface TrafficStats {
  lastUpdated: string;
  /** The period in seconds these statistics were computed over */
  periodSeconds: number;
  /** The average number of requests seen during this period */
  requests: number;
}
const TrafficStats = /*@__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    lastUpdated: Schema.String,
    periodSeconds: Schema.Number,
    requests: Schema.Number,
  }).pipe(
    Schema.encodeKeys({
      lastUpdated: "last_updated",
      periodSeconds: "period_seconds",
      requests: "requests",
    }),
  ),
) as unknown as Schema.Codec<TrafficStats>;

interface Features {
  trafficStats?: {
    lastUpdated: string;
    periodSeconds: number;
    requests: number;
  } | null;
}
const Features = /*@__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    trafficStats: Schema.optional(Schema.Union([TrafficStats, Schema.Null])),
  }).pipe(Schema.encodeKeys({ trafficStats: "traffic_stats" })),
) as unknown as Schema.Codec<Features>;

interface DiscoveryOperation {
  /** UUID. */
  id: string;
  /** The endpoint which can contain path parameter templates in curly braces, each will be replaced from left to right with {varN}, starting with {var1}, during insertion. This will further be Cloudflare-n */
  endpoint: string;
  /** RFC3986-compliant host. */
  host: string;
  lastUpdated: string;
  /** The HTTP method used to access the endpoint. */
  method:
    | "GET"
    | "POST"
    | "HEAD"
    | "OPTIONS"
    | "PUT"
    | "DELETE"
    | "CONNECT"
    | "PATCH"
    | "TRACE"
    | (string & {});
  /** API discovery engine(s) that discovered this operation */
  origin: ("ML" | "SessionIdentifier" | "LabelDiscovery" | (string & {}))[];
  /** State of operation in API Discovery  - `review` - Operation is not saved into API Shield Endpoint Management - `saved` - Operation is saved into API Shield Endpoint Management - `ignored` - Operation  */
  state: "review" | "saved" | "ignored" | (string & {});
  features?: {
    trafficStats?: {
      lastUpdated: string;
      periodSeconds: number;
      requests: number;
    } | null;
  } | null;
}
const DiscoveryOperation = /*@__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    id: Schema.String,
    endpoint: Schema.String,
    host: Schema.String,
    lastUpdated: Schema.String,
    method: Schema.Union([
      Schema.Literals([
        "GET",
        "POST",
        "HEAD",
        "OPTIONS",
        "PUT",
        "DELETE",
        "CONNECT",
        "PATCH",
        "TRACE",
      ]),
      Schema.String,
    ]),
    origin: Schema.Array(
      Schema.Union([
        Schema.Literals(["ML", "SessionIdentifier", "LabelDiscovery"]),
        Schema.String,
      ]),
    ),
    state: Schema.Union([
      Schema.Literals(["review", "saved", "ignored"]),
      Schema.String,
    ]),
    features: Schema.optional(Schema.Union([Features, Schema.Null])),
  }).pipe(
    Schema.encodeKeys({
      id: "id",
      endpoint: "endpoint",
      host: "host",
      lastUpdated: "last_updated",
      method: "method",
      origin: "origin",
      state: "state",
      features: "features",
    }),
  ),
) as unknown as Schema.Codec<DiscoveryOperation>;

interface ListDiscoveryOperationsResponseResultInfo {
  count?: number | null;
  page?: number | null;
  perPage?: number | null;
  totalCount?: number | null;
}
const ListDiscoveryOperationsResponseResultInfo =
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
  ) as unknown as Schema.Codec<ListDiscoveryOperationsResponseResultInfo>;

interface ListLabelsResponseResult {
  createdAt: string;
  /** The description of the label */
  description: string;
  lastUpdated: string;
  /** Metadata for the label */
  metadata: unknown;
  /** The name of the label */
  name: string;
  /** - `user` - label is owned by the user - `managed` - label is owned by cloudflare */
  source: "user" | "managed" | (string & {});
  /** Provides counts of what resources are linked to this label */
  mappedResources?: unknown | null;
}
const ListLabelsResponseResult = /*@__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    createdAt: Schema.String,
    description: Schema.String,
    lastUpdated: Schema.String,
    metadata: Schema.Unknown,
    name: Schema.String,
    source: Schema.Union([Schema.Literals(["user", "managed"]), Schema.String]),
    mappedResources: Schema.optional(
      Schema.Union([Schema.Unknown, Schema.Null]),
    ),
  }).pipe(
    Schema.encodeKeys({
      createdAt: "created_at",
      description: "description",
      lastUpdated: "last_updated",
      metadata: "metadata",
      name: "name",
      source: "source",
      mappedResources: "mapped_resources",
    }),
  ),
) as unknown as Schema.Codec<ListLabelsResponseResult>;

interface Include {
  operationIds: string[];
}
const Include = /*@__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    operationIds: Schema.Array(Schema.String),
  }).pipe(Schema.encodeKeys({ operationIds: "operation_ids" })),
) as unknown as Schema.Codec<Include>;

interface Selector {
  include: { operationIds: string[] };
}
const Selector = /*@__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    include: Include,
  }),
) as unknown as Schema.Codec<Selector>;

interface Body {
  /** The name of the label */
  name: string;
  /** The description of the label */
  description?: string | null;
  /** Metadata for the label */
  metadata?: unknown | null;
}
const Body = /*@__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    name: Schema.String,
    description: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
    metadata: Schema.optional(Schema.Union([Schema.Unknown, Schema.Null])),
  }),
) as unknown as Schema.Codec<Body>;

interface BulkCreateLabelUsersResponseResult {
  createdAt: string;
  /** The description of the label */
  description: string;
  lastUpdated: string;
  /** Metadata for the label */
  metadata: unknown;
  /** The name of the label */
  name: string;
  /** - `user` - label is owned by the user - `managed` - label is owned by cloudflare */
  source: "user" | "managed" | (string & {});
}
const BulkCreateLabelUsersResponseResult =
  /*@__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      createdAt: Schema.String,
      description: Schema.String,
      lastUpdated: Schema.String,
      metadata: Schema.Unknown,
      name: Schema.String,
      source: Schema.Union([
        Schema.Literals(["user", "managed"]),
        Schema.String,
      ]),
    }).pipe(
      Schema.encodeKeys({
        createdAt: "created_at",
        description: "description",
        lastUpdated: "last_updated",
        metadata: "metadata",
        name: "name",
        source: "source",
      }),
    ),
  ) as unknown as Schema.Codec<BulkCreateLabelUsersResponseResult>;

interface Thresholds {
  /** The total number of auth-ids seen across this calculation. */
  authIdTokens?: number | null;
  /** The number of data points used for the threshold suggestion calculation. */
  dataPoints?: number | null;
  lastUpdated?: string | null;
  /** The p50 quantile of requests (in period_seconds). */
  p50?: number | null;
  /** The p90 quantile of requests (in period_seconds). */
  p90?: number | null;
  /** The p99 quantile of requests (in period_seconds). */
  p99?: number | null;
  /** The period over which this threshold is suggested. */
  periodSeconds?: number | null;
  /** The estimated number of requests covered by these calculations. */
  requests?: number | null;
  /** The suggested threshold in requests done by the same auth_id or period_seconds. */
  suggestedThreshold?: number | null;
}
const Thresholds = /*@__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    authIdTokens: Schema.optional(Schema.Union([Schema.Number, Schema.Null])),
    dataPoints: Schema.optional(Schema.Union([Schema.Number, Schema.Null])),
    lastUpdated: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
    p50: Schema.optional(Schema.Union([Schema.Number, Schema.Null])),
    p90: Schema.optional(Schema.Union([Schema.Number, Schema.Null])),
    p99: Schema.optional(Schema.Union([Schema.Number, Schema.Null])),
    periodSeconds: Schema.optional(Schema.Union([Schema.Number, Schema.Null])),
    requests: Schema.optional(Schema.Union([Schema.Number, Schema.Null])),
    suggestedThreshold: Schema.optional(
      Schema.Union([Schema.Number, Schema.Null]),
    ),
  }).pipe(
    Schema.encodeKeys({
      authIdTokens: "auth_id_tokens",
      dataPoints: "data_points",
      lastUpdated: "last_updated",
      p50: "p50",
      p90: "p90",
      p99: "p99",
      periodSeconds: "period_seconds",
      requests: "requests",
      suggestedThreshold: "suggested_threshold",
    }),
  ),
) as unknown as Schema.Codec<Thresholds>;

interface ApishieldOperationFeatureThresholds {
  thresholds?: {
    authIdTokens?: number | null;
    dataPoints?: number | null;
    lastUpdated?: string | null;
    p50?: number | null;
    p90?: number | null;
    p99?: number | null;
    periodSeconds?: number | null;
    requests?: number | null;
    suggestedThreshold?: number | null;
  } | null;
}
const ApishieldOperationFeatureThresholds =
  /*@__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      thresholds: Schema.optional(Schema.Union([Thresholds, Schema.Null])),
    }),
  ) as unknown as Schema.Codec<ApishieldOperationFeatureThresholds>;

interface ParameterSchemas {
  /** An array containing the learned parameter schemas. */
  parameters?: unknown[] | null;
  /** An empty response object. This field is required to yield a valid operation schema. */
  responses?: unknown | null;
}
const ParameterSchemas = /*@__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    parameters: Schema.optional(
      Schema.Union([Schema.Array(Schema.Unknown), Schema.Null]),
    ),
    responses: Schema.optional(Schema.Union([Schema.Unknown, Schema.Null])),
  }),
) as unknown as Schema.Codec<ParameterSchemas>;

interface ParameterSchemas2 {
  lastUpdated?: string | null;
  /** An operation schema object containing a response. */
  parameterSchemas?: {
    parameters?: unknown[] | null;
    responses?: unknown | null;
  } | null;
}
const ParameterSchemas2 = /*@__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    lastUpdated: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
    parameterSchemas: Schema.optional(
      Schema.Union([ParameterSchemas, Schema.Null]),
    ),
  }).pipe(
    Schema.encodeKeys({
      lastUpdated: "last_updated",
      parameterSchemas: "parameter_schemas",
    }),
  ),
) as unknown as Schema.Codec<ParameterSchemas2>;

interface ApishieldOperationFeatureParameterSchemas {
  parameterSchemas: {
    lastUpdated?: string | null;
    parameterSchemas?: {
      parameters?: unknown[] | null;
      responses?: unknown | null;
    } | null;
  };
}
const ApishieldOperationFeatureParameterSchemas =
  /*@__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      parameterSchemas: ParameterSchemas2,
    }).pipe(Schema.encodeKeys({ parameterSchemas: "parameter_schemas" })),
  ) as unknown as Schema.Codec<ApishieldOperationFeatureParameterSchemas>;

interface Apirouting {
  lastUpdated?: string | null;
  /** Target route. */
  route?: string | null;
}
const Apirouting = /*@__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    lastUpdated: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
    route: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
  }).pipe(Schema.encodeKeys({ lastUpdated: "last_updated", route: "route" })),
) as unknown as Schema.Codec<Apirouting>;

interface ApishieldOperationFeatureAPIRouting {
  /** API Routing settings on endpoint. */
  apiRouting?: { lastUpdated?: string | null; route?: string | null } | null;
}
const ApishieldOperationFeatureAPIRouting =
  /*@__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      apiRouting: Schema.optional(Schema.Union([Apirouting, Schema.Null])),
    }).pipe(Schema.encodeKeys({ apiRouting: "api_routing" })),
  ) as unknown as Schema.Codec<ApishieldOperationFeatureAPIRouting>;

interface P90 {
  /** Lower bound for percentile estimate */
  lower?: number | null;
  /** Upper bound for percentile estimate */
  upper?: number | null;
}
const P90 = /*@__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    lower: Schema.optional(Schema.Union([Schema.Number, Schema.Null])),
    upper: Schema.optional(Schema.Union([Schema.Number, Schema.Null])),
  }),
) as unknown as Schema.Codec<P90>;

interface ConfidenceIntervals {
  /** Upper and lower bound for percentile estimate */
  p90?: { lower?: number | null; upper?: number | null } | null;
  /** Upper and lower bound for percentile estimate */
  p95?: { lower?: number | null; upper?: number | null } | null;
  /** Upper and lower bound for percentile estimate */
  p99?: { lower?: number | null; upper?: number | null } | null;
}
const ConfidenceIntervals = /*@__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    p90: Schema.optional(Schema.Union([P90, Schema.Null])),
    p95: Schema.optional(Schema.Union([P90, Schema.Null])),
    p99: Schema.optional(Schema.Union([P90, Schema.Null])),
  }),
) as unknown as Schema.Codec<ConfidenceIntervals>;

interface SuggestedThreshold {
  confidenceIntervals?: {
    p90?: { lower?: number | null; upper?: number | null } | null;
    p95?: { lower?: number | null; upper?: number | null } | null;
    p99?: { lower?: number | null; upper?: number | null } | null;
  } | null;
  /** Suggested threshold. */
  mean?: number | null;
}
const SuggestedThreshold = /*@__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    confidenceIntervals: Schema.optional(
      Schema.Union([ConfidenceIntervals, Schema.Null]),
    ),
    mean: Schema.optional(Schema.Union([Schema.Number, Schema.Null])),
  }).pipe(
    Schema.encodeKeys({
      confidenceIntervals: "confidence_intervals",
      mean: "mean",
    }),
  ),
) as unknown as Schema.Codec<SuggestedThreshold>;

interface ConfidenceIntervals2 {
  lastUpdated?: string | null;
  suggestedThreshold?: {
    confidenceIntervals?: {
      p90?: { lower?: number | null; upper?: number | null } | null;
      p95?: { lower?: number | null; upper?: number | null } | null;
      p99?: { lower?: number | null; upper?: number | null } | null;
    } | null;
    mean?: number | null;
  } | null;
}
const ConfidenceIntervals2 = /*@__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    lastUpdated: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
    suggestedThreshold: Schema.optional(
      Schema.Union([SuggestedThreshold, Schema.Null]),
    ),
  }).pipe(
    Schema.encodeKeys({
      lastUpdated: "last_updated",
      suggestedThreshold: "suggested_threshold",
    }),
  ),
) as unknown as Schema.Codec<ConfidenceIntervals2>;

interface ApishieldOperationFeatureConfidenceIntervals {
  confidenceIntervals?: {
    lastUpdated?: string | null;
    suggestedThreshold?: {
      confidenceIntervals?: {
        p90?: { lower?: number | null; upper?: number | null } | null;
        p95?: { lower?: number | null; upper?: number | null } | null;
        p99?: { lower?: number | null; upper?: number | null } | null;
      } | null;
      mean?: number | null;
    } | null;
  } | null;
}
const ApishieldOperationFeatureConfidenceIntervals =
  /*@__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      confidenceIntervals: Schema.optional(
        Schema.Union([ConfidenceIntervals2, Schema.Null]),
      ),
    }).pipe(Schema.encodeKeys({ confidenceIntervals: "confidence_intervals" })),
  ) as unknown as Schema.Codec<ApishieldOperationFeatureConfidenceIntervals>;

interface ActiveSchema {
  /** UUID. */
  id?: string | null;
  createdAt?: string | null;
  /** True if schema is Cloudflare-provided. */
  isLearned?: boolean | null;
  /** Schema file name. */
  name?: string | null;
}
const ActiveSchema = /*@__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    id: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
    createdAt: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
    isLearned: Schema.optional(Schema.Union([Schema.Boolean, Schema.Null])),
    name: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
  }).pipe(
    Schema.encodeKeys({
      id: "id",
      createdAt: "created_at",
      isLearned: "is_learned",
      name: "name",
    }),
  ),
) as unknown as Schema.Codec<ActiveSchema>;

interface SchemaInfo {
  /** Schema active on endpoint. */
  activeSchema?: {
    id?: string | null;
    createdAt?: string | null;
    isLearned?: boolean | null;
    name?: string | null;
  } | null;
  /** True if a Cloudflare-provided learned schema is available for this endpoint. */
  learnedAvailable?: boolean | null;
  /** Action taken on requests failing validation. */
  mitigationAction?: "none" | "log" | "block" | null;
}
const SchemaInfo = /*@__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    activeSchema: Schema.optional(Schema.Union([ActiveSchema, Schema.Null])),
    learnedAvailable: Schema.optional(
      Schema.Union([Schema.Boolean, Schema.Null]),
    ),
    mitigationAction: Schema.optional(
      Schema.Union([
        Schema.Literal("none"),
        Schema.Literal("log"),
        Schema.Literal("block"),
        Schema.Null,
      ]),
    ),
  }).pipe(
    Schema.encodeKeys({
      activeSchema: "active_schema",
      learnedAvailable: "learned_available",
      mitigationAction: "mitigation_action",
    }),
  ),
) as unknown as Schema.Codec<SchemaInfo>;

interface ApishieldOperationFeatureSchemaInfo {
  schemaInfo?: {
    activeSchema?: {
      id?: string | null;
      createdAt?: string | null;
      isLearned?: boolean | null;
      name?: string | null;
    } | null;
    learnedAvailable?: boolean | null;
    mitigationAction?: "none" | "log" | "block" | null;
  } | null;
}
const ApishieldOperationFeatureSchemaInfo =
  /*@__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      schemaInfo: Schema.optional(Schema.Union([SchemaInfo, Schema.Null])),
    }).pipe(Schema.encodeKeys({ schemaInfo: "schema_info" })),
  ) as unknown as Schema.Codec<ApishieldOperationFeatureSchemaInfo>;

interface Learned {
  /** OpenAPI parameter objects describing path, query, header, or cookie parameters. */
  parameters?: Record<string, unknown>[] | null;
  /** OpenAPI request body object describing the expected request payload. */
  requestBody?: Record<string, unknown> | null;
}
const Learned = /*@__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    parameters: Schema.optional(
      Schema.Union([
        Schema.Array(Schema.Record(Schema.String, Schema.Unknown)),
        Schema.Null,
      ]),
    ),
    requestBody: Schema.optional(
      Schema.Union([Schema.Record(Schema.String, Schema.Unknown), Schema.Null]),
    ),
  }),
) as unknown as Schema.Codec<Learned>;

interface Schemas {
  /** An OpenAPI operation object fragment containing schema information for an operation. May include parameter definitions, request body specifications, and a component schema extension. */
  learned?: {
    parameters?: Record<string, unknown>[] | null;
    requestBody?: Record<string, unknown> | null;
  } | null;
  /** An OpenAPI operation object fragment containing schema information for an operation. May include parameter definitions, request body specifications, and a component schema extension. */
  uploaded?: {
    parameters?: Record<string, unknown>[] | null;
    requestBody?: Record<string, unknown> | null;
  } | null;
}
const Schemas = /*@__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    learned: Schema.optional(Schema.Union([Learned, Schema.Null])),
    uploaded: Schema.optional(Schema.Union([Learned, Schema.Null])),
  }),
) as unknown as Schema.Codec<Schemas>;

interface ListOperationsResponseResult {
  /** The endpoint which can contain path parameter templates in curly braces, each will be replaced from left to right with {varN}, starting with {var1}, during insertion. This will further be Cloudflare-n */
  endpoint: string;
  /** RFC3986-compliant host. */
  host: string;
  lastUpdated: string;
  /** The HTTP method used to access the endpoint. */
  method:
    | "GET"
    | "POST"
    | "HEAD"
    | "OPTIONS"
    | "PUT"
    | "DELETE"
    | "CONNECT"
    | "PATCH"
    | "TRACE"
    | (string & {});
  /** UUID. */
  operationId: string;
  features?:
    | {
        thresholds?: {
          authIdTokens?: number | null;
          dataPoints?: number | null;
          lastUpdated?: string | null;
          p50?: number | null;
          p90?: number | null;
          p99?: number | null;
          periodSeconds?: number | null;
          requests?: number | null;
          suggestedThreshold?: number | null;
        } | null;
      }
    | {
        parameterSchemas: {
          lastUpdated?: string | null;
          parameterSchemas?: {
            parameters?: unknown[] | null;
            responses?: unknown | null;
          } | null;
        };
      }
    | {
        apiRouting?: {
          lastUpdated?: string | null;
          route?: string | null;
        } | null;
      }
    | {
        confidenceIntervals?: {
          lastUpdated?: string | null;
          suggestedThreshold?: {
            confidenceIntervals?: {
              p90?: { lower?: number | null; upper?: number | null } | null;
              p95?: { lower?: number | null; upper?: number | null } | null;
              p99?: { lower?: number | null; upper?: number | null } | null;
            } | null;
            mean?: number | null;
          } | null;
        } | null;
      }
    | {
        schemaInfo?: {
          activeSchema?: {
            id?: string | null;
            createdAt?: string | null;
            isLearned?: boolean | null;
            name?: string | null;
          } | null;
          learnedAvailable?: boolean | null;
          mitigationAction?: "none" | "log" | "block" | null;
        } | null;
      }
    | null;
}
const ListOperationsResponseResult = /*@__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    endpoint: Schema.String,
    host: Schema.String,
    lastUpdated: Schema.String,
    method: Schema.Union([
      Schema.Literals([
        "GET",
        "POST",
        "HEAD",
        "OPTIONS",
        "PUT",
        "DELETE",
        "CONNECT",
        "PATCH",
        "TRACE",
      ]),
      Schema.String,
    ]),
    operationId: Schema.String,
    features: Schema.optional(
      Schema.Union([
        Schema.Union([
          ApishieldOperationFeatureParameterSchemas,
          ApishieldOperationFeatureThresholds,
          ApishieldOperationFeatureAPIRouting,
          ApishieldOperationFeatureConfidenceIntervals,
          ApishieldOperationFeatureSchemaInfo,
        ]),
        Schema.Null,
      ]),
    ),
  }).pipe(
    Schema.encodeKeys({
      endpoint: "endpoint",
      host: "host",
      lastUpdated: "last_updated",
      method: "method",
      operationId: "operation_id",
      features: "features",
    }),
  ),
) as unknown as Schema.Codec<ListOperationsResponseResult>;

interface Source {
  pointer?: string | null;
}
const Source = /*@__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    pointer: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
  }),
) as unknown as Schema.Codec<Source>;

interface MessageItem {
  code: number;
  message: string;
  documentationUrl?: string | null;
  source?: { pointer?: string | null } | null;
}
const MessageItem = /*@__PURE__*/ Schema.suspend(() =>
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
) as unknown as Schema.Codec<MessageItem>;

interface Body2 {
  /** The endpoint which can contain path parameter templates in curly braces, each will be replaced from left to right with {varN}, starting with {var1}, during insertion. This will further be Cloudflare-n */
  endpoint: string;
  /** RFC3986-compliant host. */
  host: string;
  /** The HTTP method used to access the endpoint. */
  method:
    | "GET"
    | "POST"
    | "HEAD"
    | "OPTIONS"
    | "PUT"
    | "DELETE"
    | "CONNECT"
    | "PATCH"
    | "TRACE"
    | (string & {});
}
const Body2 = /*@__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    endpoint: Schema.String,
    host: Schema.String,
    method: Schema.Union([
      Schema.Literals([
        "GET",
        "POST",
        "HEAD",
        "OPTIONS",
        "PUT",
        "DELETE",
        "CONNECT",
        "PATCH",
        "TRACE",
      ]),
      Schema.String,
    ]),
  }),
) as unknown as Schema.Codec<Body2>;

interface Managed {
  /** List of managed label names. */
  labels?: string[] | null;
}
const Managed = /*@__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    labels: Schema.optional(
      Schema.Union([Schema.Array(Schema.String), Schema.Null]),
    ),
  }),
) as unknown as Schema.Codec<Managed>;

interface BulkCreateOperationLabelsResponseResult {
  /** The endpoint which can contain path parameter templates in curly braces, each will be replaced from left to right with {varN}, starting with {var1}, during insertion. This will further be Cloudflare-n */
  endpoint: string;
  /** RFC3986-compliant host. */
  host: string;
  lastUpdated: string;
  /** The HTTP method used to access the endpoint. */
  method:
    | "GET"
    | "POST"
    | "HEAD"
    | "OPTIONS"
    | "PUT"
    | "DELETE"
    | "CONNECT"
    | "PATCH"
    | "TRACE"
    | (string & {});
  /** UUID. */
  operationId: string;
  labels?:
    | {
        createdAt: string;
        description: string;
        lastUpdated: string;
        metadata: unknown;
        name: string;
        source: "user" | "managed" | (string & {});
      }[]
    | null;
}
const BulkCreateOperationLabelsResponseResult =
  /*@__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      endpoint: Schema.String,
      host: Schema.String,
      lastUpdated: Schema.String,
      method: Schema.Union([
        Schema.Literals([
          "GET",
          "POST",
          "HEAD",
          "OPTIONS",
          "PUT",
          "DELETE",
          "CONNECT",
          "PATCH",
          "TRACE",
        ]),
        Schema.String,
      ]),
      operationId: Schema.String,
      labels: Schema.optional(
        Schema.Union([
          Schema.Array(BulkCreateLabelUsersResponseResult),
          Schema.Null,
        ]),
      ),
    }).pipe(
      Schema.encodeKeys({
        endpoint: "endpoint",
        host: "host",
        lastUpdated: "last_updated",
        method: "method",
        operationId: "operation_id",
        labels: "labels",
      }),
    ),
  ) as unknown as Schema.Codec<BulkCreateOperationLabelsResponseResult>;

interface Managed2 {
  /** List of managed label names. Providing an empty array will result in all managed labels being removed from all affected operations */
  labels: string[];
}
const Managed2 = /*@__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    labels: Schema.Array(Schema.String),
  }),
) as unknown as Schema.Codec<Managed2>;

interface ListUserSchemasResponseResult {
  createdAt: string;
  /** Kind of schema */
  kind: "openapi_v3";
  /** Name of the schema */
  name: string;
  /** UUID. */
  schemaId: string;
  /** Source of the schema */
  source?: string | null;
  /** Flag whether schema is enabled for validation. */
  validationEnabled?: boolean | null;
}
const ListUserSchemasResponseResult =
  /*@__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      createdAt: Schema.String,
      kind: Schema.Literal("openapi_v3"),
      name: Schema.String,
      schemaId: Schema.String,
      source: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
      validationEnabled: Schema.optional(
        Schema.Union([Schema.Boolean, Schema.Null]),
      ),
    }).pipe(
      Schema.encodeKeys({
        createdAt: "created_at",
        kind: "kind",
        name: "name",
        schemaId: "schema_id",
        source: "source",
        validationEnabled: "validation_enabled",
      }),
    ),
  ) as unknown as Schema.Codec<ListUserSchemasResponseResult>;

interface Warning {
  /** Code that identifies the event that occurred. */
  code: number;
  /** JSONPath location(s) in the schema where these events were encountered. See [https://goessner.net/articles/JsonPath/](https://goessner.net/articles/JsonPath/) for JSONPath specification. */
  locations?: string[] | null;
  /** Diagnostic message that describes the event. */
  message?: string | null;
}
const Warning = /*@__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    code: Schema.Number,
    locations: Schema.optional(
      Schema.Union([Schema.Array(Schema.String), Schema.Null]),
    ),
    message: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
  }),
) as unknown as Schema.Codec<Warning>;

interface UploadDetails {
  /** Diagnostic warning events that occurred during processing. These events are non-critical errors found within the schema. */
  warnings?:
    | { code: number; locations?: string[] | null; message?: string | null }[]
    | null;
}
const UploadDetails = /*@__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    warnings: Schema.optional(
      Schema.Union([Schema.Array(Warning), Schema.Null]),
    ),
  }),
) as unknown as Schema.Codec<UploadDetails>;

interface ListUserSchemaHostsResponseResult {
  createdAt: string;
  /** Hosts serving the schema, e.g zone.host.com */
  hosts: string[];
  /** Name of the schema */
  name: string;
  /** UUID. */
  schemaId: string;
}
const ListUserSchemaHostsResponseResult =
  /*@__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      createdAt: Schema.String,
      hosts: Schema.Array(Schema.String),
      name: Schema.String,
      schemaId: Schema.String,
    }).pipe(
      Schema.encodeKeys({
        createdAt: "created_at",
        hosts: "hosts",
        name: "name",
        schemaId: "schema_id",
      }),
    ),
  ) as unknown as Schema.Codec<ListUserSchemaHostsResponseResult>;

// =============================================================================
// Configuration
// =============================================================================

export interface GetConfigurationRequest {
  /** Path param: Identifier. */
  zoneId: string;
  /** Query param: Ensures that the configuration is written or retrieved in normalized fashion */
  normalize?: boolean;
}

export const GetConfigurationRequest =
  /*@__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      zoneId: Schema.String.pipe(T.HttpPath("zone_id")),
      normalize: Schema.optional(Schema.Boolean).pipe(T.HttpQuery("normalize")),
    }).pipe(
      T.Http({
        method: "GET",
        path: "/zones/{zone_id}/api_gateway/configuration",
      }),
    ),
  ) as unknown as Schema.Codec<GetConfigurationRequest>;

export interface GetConfigurationResponse {
  authIdCharacteristics: (
    | { name: string; type: "header" | "cookie" | (string & {}) }
    | { name: string; type: "jwt" }
  )[];
}

export const GetConfigurationResponse =
  /*@__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      authIdCharacteristics: Schema.Array(
        Schema.Union([
          ApishieldAuthIDCharacteristic,
          ApishieldAuthIDCharacteristicJWTClaim,
        ]),
      ),
    })
      .pipe(
        Schema.encodeKeys({ authIdCharacteristics: "auth_id_characteristics" }),
      )
      .pipe(T.ResponsePath("result")),
  ) as unknown as Schema.Codec<GetConfigurationResponse>;

export type GetConfigurationError =
  | DefaultErrors
  | InvalidObjectIdentifier
  | NotEntitled
  | Forbidden;

export const getConfiguration: API.OperationMethod<
  GetConfigurationRequest,
  GetConfigurationResponse,
  GetConfigurationError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: GetConfigurationRequest,
  output: GetConfigurationResponse,
  errors: [InvalidObjectIdentifier, NotEntitled, Forbidden],
}));

export interface PutConfigurationRequest {
  /** Path param: Identifier. */
  zoneId: string;
  /** Query param: Ensures that the configuration is written or retrieved in normalized fashion */
  normalize?: boolean;
  /** Body param */
  authIdCharacteristics: (
    | { name: string; type: "header" | "cookie" | (string & {}) }
    | { name: string; type: "jwt" }
  )[];
}

export const PutConfigurationRequest =
  /*@__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      zoneId: Schema.String.pipe(T.HttpPath("zone_id")),
      normalize: Schema.optional(Schema.Boolean).pipe(T.HttpQuery("normalize")),
      authIdCharacteristics: Schema.Array(
        Schema.Union([
          ApishieldAuthIDCharacteristic,
          ApishieldAuthIDCharacteristicJWTClaim,
        ]),
      ),
    }).pipe(
      Schema.encodeKeys({ authIdCharacteristics: "auth_id_characteristics" }),
      T.Http({
        method: "PUT",
        path: "/zones/{zone_id}/api_gateway/configuration",
      }),
    ),
  ) as unknown as Schema.Codec<PutConfigurationRequest>;

export interface PutConfigurationResponse {
  authIdCharacteristics: (
    | { name: string; type: "header" | "cookie" | (string & {}) }
    | { name: string; type: "jwt" }
  )[];
}

export const PutConfigurationResponse =
  /*@__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      authIdCharacteristics: Schema.Array(
        Schema.Union([
          ApishieldAuthIDCharacteristic,
          ApishieldAuthIDCharacteristicJWTClaim,
        ]),
      ),
    })
      .pipe(
        Schema.encodeKeys({ authIdCharacteristics: "auth_id_characteristics" }),
      )
      .pipe(T.ResponsePath("result")),
  ) as unknown as Schema.Codec<PutConfigurationResponse>;

export type PutConfigurationError =
  | DefaultErrors
  | InvalidObjectIdentifier
  | NotEntitled
  | Forbidden;

export const putConfiguration: API.OperationMethod<
  PutConfigurationRequest,
  PutConfigurationResponse,
  PutConfigurationError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: PutConfigurationRequest,
  output: PutConfigurationResponse,
  errors: [InvalidObjectIdentifier, NotEntitled, Forbidden],
}));

// =============================================================================
// Discovery
// =============================================================================

export interface GetDiscoveryRequest {
  /** Identifier. */
  zoneId: string;
}

export const GetDiscoveryRequest = /*@__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    zoneId: Schema.String.pipe(T.HttpPath("zone_id")),
  }).pipe(
    T.Http({ method: "GET", path: "/zones/{zone_id}/api_gateway/discovery" }),
  ),
) as unknown as Schema.Codec<GetDiscoveryRequest>;

export interface GetDiscoveryResponse {
  schemas: unknown[];
  timestamp: string;
}

export const GetDiscoveryResponse = /*@__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    schemas: Schema.Array(Schema.Unknown),
    timestamp: Schema.String,
  }).pipe(T.ResponsePath("result")),
) as unknown as Schema.Codec<GetDiscoveryResponse>;

export type GetDiscoveryError =
  | DefaultErrors
  | InvalidObjectIdentifier
  | NotEntitled;

export const getDiscovery: API.OperationMethod<
  GetDiscoveryRequest,
  GetDiscoveryResponse,
  GetDiscoveryError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: GetDiscoveryRequest,
  output: GetDiscoveryResponse,
  errors: [InvalidObjectIdentifier, NotEntitled],
}));

// =============================================================================
// DiscoveryOperation
// =============================================================================

export interface ListDiscoveryOperationsRequest {
  /** Path param: Identifier. */
  zoneId: string;
  page?: number;
  perPage?: number;
  /** Query param: When `true`, only return API Discovery results that are not saved into API Shield Endpoint Management */
  diff?: boolean;
  /** Query param: Direction to order results. */
  direction?: "asc" | "desc" | (string & {});
  /** Query param: Filter results to only include endpoints containing this pattern. */
  endpoint?: string;
  /** Query param: Filter results to only include the specified hosts. */
  host?: string[];
  /** Query param: Filter results to only include the specified HTTP methods. */
  method?: string[];
  /** Query param: Field to order by */
  order?:
    | "host"
    | "method"
    | "endpoint"
    | "traffic_stats.requests"
    | "traffic_stats.last_updated"
    | (string & {});
  /** Query param: Filter results to only include discovery results sourced from a particular discovery engine  - `ML` - Discovered operations that were sourced using ML API Discovery - `SessionIdentifier`  */
  origin?: "ML" | "SessionIdentifier" | "LabelDiscovery" | (string & {});
  /** Query param: Filter results to only include discovery results in a particular state. States are as follows  - `review` - Discovered operations that are not saved into API Shield Endpoint Management -  */
  state?: "review" | "saved" | "ignored" | (string & {});
}

export const ListDiscoveryOperationsRequest =
  /*@__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      zoneId: Schema.String.pipe(T.HttpPath("zone_id")),
      page: Schema.optional(Schema.Number).pipe(T.HttpQuery("page")),
      perPage: Schema.optional(Schema.Number).pipe(T.HttpQuery("per_page")),
      diff: Schema.optional(Schema.Boolean).pipe(T.HttpQuery("diff")),
      direction: Schema.optional(
        Schema.Union([Schema.Literals(["asc", "desc"]), Schema.String]),
      ).pipe(T.HttpQuery("direction")),
      endpoint: Schema.optional(Schema.String).pipe(T.HttpQuery("endpoint")),
      host: Schema.optional(Schema.Array(Schema.String)).pipe(
        T.HttpQuery("host"),
      ),
      method: Schema.optional(Schema.Array(Schema.String)).pipe(
        T.HttpQuery("method"),
      ),
      order: Schema.optional(
        Schema.Union([
          Schema.Literals([
            "host",
            "method",
            "endpoint",
            "traffic_stats.requests",
            "traffic_stats.last_updated",
          ]),
          Schema.String,
        ]),
      ).pipe(T.HttpQuery("order")),
      origin: Schema.optional(
        Schema.Union([
          Schema.Literals(["ML", "SessionIdentifier", "LabelDiscovery"]),
          Schema.String,
        ]),
      ).pipe(T.HttpQuery("origin")),
      state: Schema.optional(
        Schema.Union([
          Schema.Literals(["review", "saved", "ignored"]),
          Schema.String,
        ]),
      ).pipe(T.HttpQuery("state")),
    }).pipe(
      T.Http({
        method: "GET",
        path: "/zones/{zone_id}/api_gateway/discovery/operations",
      }),
    ),
  ) as unknown as Schema.Codec<ListDiscoveryOperationsRequest>;

export interface ListDiscoveryOperationsResponse {
  result: {
    id: string;
    endpoint: string;
    host: string;
    lastUpdated: string;
    method:
      | "GET"
      | "POST"
      | "HEAD"
      | "OPTIONS"
      | "PUT"
      | "DELETE"
      | "CONNECT"
      | "PATCH"
      | "TRACE"
      | (string & {});
    origin: ("ML" | "SessionIdentifier" | "LabelDiscovery" | (string & {}))[];
    state: "review" | "saved" | "ignored" | (string & {});
    features?: {
      trafficStats?: {
        lastUpdated: string;
        periodSeconds: number;
        requests: number;
      } | null;
    } | null;
  }[];
  resultInfo?: {
    count?: number | null;
    page?: number | null;
    perPage?: number | null;
    totalCount?: number | null;
  } | null;
}

export const ListDiscoveryOperationsResponse =
  /*@__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      result: Schema.Array(DiscoveryOperation),
      resultInfo: Schema.optional(
        Schema.Union([ListDiscoveryOperationsResponseResultInfo, Schema.Null]),
      ),
    }).pipe(Schema.encodeKeys({ result: "result", resultInfo: "result_info" })),
  ) as unknown as Schema.Codec<ListDiscoveryOperationsResponse>;

export type ListDiscoveryOperationsError = DefaultErrors;

export const listDiscoveryOperations: API.PaginatedOperationMethod<
  ListDiscoveryOperationsRequest,
  ListDiscoveryOperationsResponse,
  ListDiscoveryOperationsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: ListDiscoveryOperationsRequest,
  output: ListDiscoveryOperationsResponse,
  errors: [],
  pagination: {
    mode: "page",
    inputToken: "page",
    outputToken: "resultInfo.page",
    items: "result",
    pageSize: "perPage",
  } as const,
}));

export interface BulkPatchDiscoveryOperationsRequest {
  /** Path param: Identifier. */
  zoneId: string;
  /** Body param */
  body: Record<string, unknown>;
}

export const BulkPatchDiscoveryOperationsRequest =
  /*@__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      zoneId: Schema.String.pipe(T.HttpPath("zone_id")),
      body: Schema.Record(Schema.String, Schema.Unknown).pipe(T.HttpBody()),
    }).pipe(
      T.Http({
        method: "PATCH",
        path: "/zones/{zone_id}/api_gateway/discovery/operations",
      }),
    ),
  ) as unknown as Schema.Codec<BulkPatchDiscoveryOperationsRequest>;

export type BulkPatchDiscoveryOperationsResponse = Record<string, unknown>;

export const BulkPatchDiscoveryOperationsResponse =
  /*@__PURE__*/ Schema.suspend(() =>
    Schema.Record(Schema.String, Schema.Unknown).pipe(T.ResponsePath("result")),
  ) as unknown as Schema.Codec<BulkPatchDiscoveryOperationsResponse>;

export type BulkPatchDiscoveryOperationsError =
  | DefaultErrors
  | InvalidObjectIdentifier
  | NotEntitled;

export const bulkPatchDiscoveryOperations: API.OperationMethod<
  BulkPatchDiscoveryOperationsRequest,
  BulkPatchDiscoveryOperationsResponse,
  BulkPatchDiscoveryOperationsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: BulkPatchDiscoveryOperationsRequest,
  output: BulkPatchDiscoveryOperationsResponse,
  errors: [InvalidObjectIdentifier, NotEntitled],
}));

// =============================================================================
// ExpressionTemplateFallthrough
// =============================================================================

export interface CreateExpressionTemplateFallthroughRequest {
  /** Path param: Identifier. */
  zoneId: string;
  /** Body param: List of hosts to be targeted in the expression */
  hosts: string[];
}

export const CreateExpressionTemplateFallthroughRequest =
  /*@__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      zoneId: Schema.String.pipe(T.HttpPath("zone_id")),
      hosts: Schema.Array(Schema.String),
    }).pipe(
      T.Http({
        method: "POST",
        path: "/zones/{zone_id}/api_gateway/expression-template/fallthrough",
      }),
    ),
  ) as unknown as Schema.Codec<CreateExpressionTemplateFallthroughRequest>;

export interface CreateExpressionTemplateFallthroughResponse {
  /** WAF Expression for fallthrough */
  expression: string;
  /** Title for the expression */
  title: string;
}

export const CreateExpressionTemplateFallthroughResponse =
  /*@__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      expression: Schema.String,
      title: Schema.String,
    }).pipe(T.ResponsePath("result")),
  ) as unknown as Schema.Codec<CreateExpressionTemplateFallthroughResponse>;

export type CreateExpressionTemplateFallthroughError =
  | DefaultErrors
  | InvalidObjectIdentifier;

export const createExpressionTemplateFallthrough: API.OperationMethod<
  CreateExpressionTemplateFallthroughRequest,
  CreateExpressionTemplateFallthroughResponse,
  CreateExpressionTemplateFallthroughError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: CreateExpressionTemplateFallthroughRequest,
  output: CreateExpressionTemplateFallthroughResponse,
  errors: [InvalidObjectIdentifier],
}));

// =============================================================================
// Label
// =============================================================================

export interface ListLabelsRequest {
  /** Path param: Identifier. */
  zoneId: string;
  page?: number;
  perPage?: number;
  /** Query param: Direction to order results. */
  direction?: "asc" | "desc" | (string & {});
  /** Query param: Filter for labels where the name or description matches using substring match */
  filter?: string;
  /** Query param: Field to order by */
  order?:
    | "name"
    | "description"
    | "created_at"
    | "last_updated"
    | "mapped_resources.operations"
    | (string & {});
  /** Query param: Filter for labels with source */
  source?: "user" | "managed" | (string & {});
  /** Query param: Include `mapped_resources` for each label */
  withMappedResourceCounts?: boolean;
}

export const ListLabelsRequest = /*@__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    zoneId: Schema.String.pipe(T.HttpPath("zone_id")),
    page: Schema.optional(Schema.Number).pipe(T.HttpQuery("page")),
    perPage: Schema.optional(Schema.Number).pipe(T.HttpQuery("per_page")),
    direction: Schema.optional(
      Schema.Union([Schema.Literals(["asc", "desc"]), Schema.String]),
    ).pipe(T.HttpQuery("direction")),
    filter: Schema.optional(Schema.String).pipe(T.HttpQuery("filter")),
    order: Schema.optional(
      Schema.Union([
        Schema.Literals([
          "name",
          "description",
          "created_at",
          "last_updated",
          "mapped_resources.operations",
        ]),
        Schema.String,
      ]),
    ).pipe(T.HttpQuery("order")),
    source: Schema.optional(
      Schema.Union([Schema.Literals(["user", "managed"]), Schema.String]),
    ).pipe(T.HttpQuery("source")),
    withMappedResourceCounts: Schema.optional(Schema.Boolean).pipe(
      T.HttpQuery("with_mapped_resource_counts"),
    ),
  }).pipe(
    T.Http({ method: "GET", path: "/zones/{zone_id}/api_gateway/labels" }),
  ),
) as unknown as Schema.Codec<ListLabelsRequest>;

export interface ListLabelsResponse {
  result: {
    createdAt: string;
    description: string;
    lastUpdated: string;
    metadata: unknown;
    name: string;
    source: "user" | "managed" | (string & {});
    mappedResources?: unknown | null;
  }[];
  resultInfo?: {
    count?: number | null;
    page?: number | null;
    perPage?: number | null;
    totalCount?: number | null;
  } | null;
}

export const ListLabelsResponse = /*@__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    result: Schema.Array(ListLabelsResponseResult),
    resultInfo: Schema.optional(
      Schema.Union([ListDiscoveryOperationsResponseResultInfo, Schema.Null]),
    ),
  }).pipe(Schema.encodeKeys({ result: "result", resultInfo: "result_info" })),
) as unknown as Schema.Codec<ListLabelsResponse>;

export type ListLabelsError = DefaultErrors | ZonePurged | Forbidden | NotFound;

export const listLabels: API.PaginatedOperationMethod<
  ListLabelsRequest,
  ListLabelsResponse,
  ListLabelsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: ListLabelsRequest,
  output: ListLabelsResponse,
  errors: [ZonePurged, Forbidden, NotFound],
  pagination: {
    mode: "page",
    inputToken: "page",
    outputToken: "resultInfo.page",
    items: "result",
    pageSize: "perPage",
  } as const,
}));

// =============================================================================
// LabelManaged
// =============================================================================

export interface GetLabelManagedRequest {
  name: string;
  /** Path param: Identifier. */
  zoneId: string;
  /** Query param: Include `mapped_resources` for each label */
  withMappedResourceCounts?: boolean;
}

export const GetLabelManagedRequest =
  /*@__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      name: Schema.String.pipe(T.HttpPath("name")),
      zoneId: Schema.String.pipe(T.HttpPath("zone_id")),
      withMappedResourceCounts: Schema.optional(Schema.Boolean).pipe(
        T.HttpQuery("with_mapped_resource_counts"),
      ),
    }).pipe(
      T.Http({
        method: "GET",
        path: "/zones/{zone_id}/api_gateway/labels/managed/{name}",
      }),
    ),
  ) as unknown as Schema.Codec<GetLabelManagedRequest>;

export interface GetLabelManagedResponse {
  createdAt: string;
  /** The description of the label */
  description: string;
  lastUpdated: string;
  /** Metadata for the label */
  metadata: unknown;
  /** The name of the label */
  name: string;
  /** - `user` - label is owned by the user - `managed` - label is owned by cloudflare */
  source: "user" | "managed" | (string & {});
  /** Provides counts of what resources are linked to this label */
  mappedResources?: unknown | null;
}

export const GetLabelManagedResponse =
  /*@__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      createdAt: Schema.String,
      description: Schema.String,
      lastUpdated: Schema.String,
      metadata: Schema.Unknown,
      name: Schema.String,
      source: Schema.Union([
        Schema.Literals(["user", "managed"]),
        Schema.String,
      ]),
      mappedResources: Schema.optional(
        Schema.Union([Schema.Unknown, Schema.Null]),
      ),
    })
      .pipe(
        Schema.encodeKeys({
          createdAt: "created_at",
          description: "description",
          lastUpdated: "last_updated",
          metadata: "metadata",
          name: "name",
          source: "source",
          mappedResources: "mapped_resources",
        }),
      )
      .pipe(T.ResponsePath("result")),
  ) as unknown as Schema.Codec<GetLabelManagedResponse>;

export type GetLabelManagedError = DefaultErrors;

export const getLabelManaged: API.OperationMethod<
  GetLabelManagedRequest,
  GetLabelManagedResponse,
  GetLabelManagedError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: GetLabelManagedRequest,
  output: GetLabelManagedResponse,
  errors: [],
}));

// =============================================================================
// LabelManagedResourceOperation
// =============================================================================

export interface PutLabelManagedResourceOperationRequest {
  name: string;
  /** Path param: Identifier. */
  zoneId: string;
  /** Body param: Operation IDs selector */
  selector: { include: { operationIds: string[] } };
}

export const PutLabelManagedResourceOperationRequest =
  /*@__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      name: Schema.String.pipe(T.HttpPath("name")),
      zoneId: Schema.String.pipe(T.HttpPath("zone_id")),
      selector: Selector,
    }).pipe(
      T.Http({
        method: "PUT",
        path: "/zones/{zone_id}/api_gateway/labels/managed/{name}/resources/operation",
      }),
    ),
  ) as unknown as Schema.Codec<PutLabelManagedResourceOperationRequest>;

export interface PutLabelManagedResourceOperationResponse {
  createdAt: string;
  /** The description of the label */
  description: string;
  lastUpdated: string;
  /** Metadata for the label */
  metadata: unknown;
  /** The name of the label */
  name: string;
  /** - `user` - label is owned by the user - `managed` - label is owned by cloudflare */
  source: "user" | "managed" | (string & {});
  /** Provides counts of what resources are linked to this label */
  mappedResources?: unknown | null;
}

export const PutLabelManagedResourceOperationResponse =
  /*@__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      createdAt: Schema.String,
      description: Schema.String,
      lastUpdated: Schema.String,
      metadata: Schema.Unknown,
      name: Schema.String,
      source: Schema.Union([
        Schema.Literals(["user", "managed"]),
        Schema.String,
      ]),
      mappedResources: Schema.optional(
        Schema.Union([Schema.Unknown, Schema.Null]),
      ),
    })
      .pipe(
        Schema.encodeKeys({
          createdAt: "created_at",
          description: "description",
          lastUpdated: "last_updated",
          metadata: "metadata",
          name: "name",
          source: "source",
          mappedResources: "mapped_resources",
        }),
      )
      .pipe(T.ResponsePath("result")),
  ) as unknown as Schema.Codec<PutLabelManagedResourceOperationResponse>;

export type PutLabelManagedResourceOperationError = DefaultErrors;

export const putLabelManagedResourceOperation: API.OperationMethod<
  PutLabelManagedResourceOperationRequest,
  PutLabelManagedResourceOperationResponse,
  PutLabelManagedResourceOperationError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: PutLabelManagedResourceOperationRequest,
  output: PutLabelManagedResourceOperationResponse,
  errors: [],
}));

// =============================================================================
// LabelUser
// =============================================================================

export interface GetLabelUserRequest {
  name: string;
  /** Path param: Identifier. */
  zoneId: string;
  /** Query param: Include `mapped_resources` for each label */
  withMappedResourceCounts?: boolean;
}

export const GetLabelUserRequest = /*@__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    zoneId: Schema.String.pipe(T.HttpPath("zone_id")),
    withMappedResourceCounts: Schema.optional(Schema.Boolean).pipe(
      T.HttpQuery("with_mapped_resource_counts"),
    ),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/zones/{zone_id}/api_gateway/labels/user/{name}",
    }),
  ),
) as unknown as Schema.Codec<GetLabelUserRequest>;

export interface GetLabelUserResponse {
  createdAt: string;
  /** The description of the label */
  description: string;
  lastUpdated: string;
  /** Metadata for the label */
  metadata: unknown;
  /** The name of the label */
  name: string;
  /** - `user` - label is owned by the user - `managed` - label is owned by cloudflare */
  source: "user" | "managed" | (string & {});
  /** Provides counts of what resources are linked to this label */
  mappedResources?: unknown | null;
}

export const GetLabelUserResponse = /*@__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    createdAt: Schema.String,
    description: Schema.String,
    lastUpdated: Schema.String,
    metadata: Schema.Unknown,
    name: Schema.String,
    source: Schema.Union([Schema.Literals(["user", "managed"]), Schema.String]),
    mappedResources: Schema.optional(
      Schema.Union([Schema.Unknown, Schema.Null]),
    ),
  })
    .pipe(
      Schema.encodeKeys({
        createdAt: "created_at",
        description: "description",
        lastUpdated: "last_updated",
        metadata: "metadata",
        name: "name",
        source: "source",
        mappedResources: "mapped_resources",
      }),
    )
    .pipe(T.ResponsePath("result")),
) as unknown as Schema.Codec<GetLabelUserResponse>;

export type GetLabelUserError = DefaultErrors | LabelNotFound | Forbidden;

export const getLabelUser: API.OperationMethod<
  GetLabelUserRequest,
  GetLabelUserResponse,
  GetLabelUserError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: GetLabelUserRequest,
  output: GetLabelUserResponse,
  errors: [LabelNotFound, Forbidden],
}));

export interface PutLabelUserRequest {
  name: string;
  /** Path param: Identifier. */
  zoneId: string;
  /** Body param: The description of the label */
  description?: string;
  /** Body param: Metadata for the label */
  metadata?: unknown;
}

export const PutLabelUserRequest = /*@__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    zoneId: Schema.String.pipe(T.HttpPath("zone_id")),
    description: Schema.optional(Schema.String),
    metadata: Schema.optional(Schema.Unknown),
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/zones/{zone_id}/api_gateway/labels/user/{name}",
    }),
  ),
) as unknown as Schema.Codec<PutLabelUserRequest>;

export interface PutLabelUserResponse {
  createdAt: string;
  /** The description of the label */
  description: string;
  lastUpdated: string;
  /** Metadata for the label */
  metadata: unknown;
  /** The name of the label */
  name: string;
  /** - `user` - label is owned by the user - `managed` - label is owned by cloudflare */
  source: "user" | "managed" | (string & {});
}

export const PutLabelUserResponse = /*@__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    createdAt: Schema.String,
    description: Schema.String,
    lastUpdated: Schema.String,
    metadata: Schema.Unknown,
    name: Schema.String,
    source: Schema.Union([Schema.Literals(["user", "managed"]), Schema.String]),
  })
    .pipe(
      Schema.encodeKeys({
        createdAt: "created_at",
        description: "description",
        lastUpdated: "last_updated",
        metadata: "metadata",
        name: "name",
        source: "source",
      }),
    )
    .pipe(T.ResponsePath("result")),
) as unknown as Schema.Codec<PutLabelUserResponse>;

export type PutLabelUserError = DefaultErrors | LabelNotFound;

export const putLabelUser: API.OperationMethod<
  PutLabelUserRequest,
  PutLabelUserResponse,
  PutLabelUserError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: PutLabelUserRequest,
  output: PutLabelUserResponse,
  errors: [LabelNotFound],
}));

export interface PatchLabelUserRequest {
  name: string;
  /** Path param: Identifier. */
  zoneId: string;
  /** Body param: The description of the label */
  description?: string;
  /** Body param: Metadata for the label */
  metadata?: unknown;
}

export const PatchLabelUserRequest = /*@__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    zoneId: Schema.String.pipe(T.HttpPath("zone_id")),
    description: Schema.optional(Schema.String),
    metadata: Schema.optional(Schema.Unknown),
  }).pipe(
    T.Http({
      method: "PATCH",
      path: "/zones/{zone_id}/api_gateway/labels/user/{name}",
    }),
  ),
) as unknown as Schema.Codec<PatchLabelUserRequest>;

export interface PatchLabelUserResponse {
  createdAt: string;
  /** The description of the label */
  description: string;
  lastUpdated: string;
  /** Metadata for the label */
  metadata: unknown;
  /** The name of the label */
  name: string;
  /** - `user` - label is owned by the user - `managed` - label is owned by cloudflare */
  source: "user" | "managed" | (string & {});
}

export const PatchLabelUserResponse =
  /*@__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      createdAt: Schema.String,
      description: Schema.String,
      lastUpdated: Schema.String,
      metadata: Schema.Unknown,
      name: Schema.String,
      source: Schema.Union([
        Schema.Literals(["user", "managed"]),
        Schema.String,
      ]),
    })
      .pipe(
        Schema.encodeKeys({
          createdAt: "created_at",
          description: "description",
          lastUpdated: "last_updated",
          metadata: "metadata",
          name: "name",
          source: "source",
        }),
      )
      .pipe(T.ResponsePath("result")),
  ) as unknown as Schema.Codec<PatchLabelUserResponse>;

export type PatchLabelUserError = DefaultErrors | LabelNotFound;

export const patchLabelUser: API.OperationMethod<
  PatchLabelUserRequest,
  PatchLabelUserResponse,
  PatchLabelUserError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: PatchLabelUserRequest,
  output: PatchLabelUserResponse,
  errors: [LabelNotFound],
}));

export interface DeleteLabelUserRequest {
  name: string;
  /** Identifier. */
  zoneId: string;
}

export const DeleteLabelUserRequest =
  /*@__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      name: Schema.String.pipe(T.HttpPath("name")),
      zoneId: Schema.String.pipe(T.HttpPath("zone_id")),
    }).pipe(
      T.Http({
        method: "DELETE",
        path: "/zones/{zone_id}/api_gateway/labels/user/{name}",
      }),
    ),
  ) as unknown as Schema.Codec<DeleteLabelUserRequest>;

export interface DeleteLabelUserResponse {
  createdAt: string;
  /** The description of the label */
  description: string;
  lastUpdated: string;
  /** Metadata for the label */
  metadata: unknown;
  /** The name of the label */
  name: string;
  /** - `user` - label is owned by the user - `managed` - label is owned by cloudflare */
  source: "user" | "managed" | (string & {});
}

export const DeleteLabelUserResponse =
  /*@__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      createdAt: Schema.String,
      description: Schema.String,
      lastUpdated: Schema.String,
      metadata: Schema.Unknown,
      name: Schema.String,
      source: Schema.Union([
        Schema.Literals(["user", "managed"]),
        Schema.String,
      ]),
    })
      .pipe(
        Schema.encodeKeys({
          createdAt: "created_at",
          description: "description",
          lastUpdated: "last_updated",
          metadata: "metadata",
          name: "name",
          source: "source",
        }),
      )
      .pipe(T.ResponsePath("result")),
  ) as unknown as Schema.Codec<DeleteLabelUserResponse>;

export type DeleteLabelUserError = DefaultErrors | LabelNotFound | Forbidden;

export const deleteLabelUser: API.OperationMethod<
  DeleteLabelUserRequest,
  DeleteLabelUserResponse,
  DeleteLabelUserError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: DeleteLabelUserRequest,
  output: DeleteLabelUserResponse,
  errors: [LabelNotFound, Forbidden],
}));

export interface BulkCreateLabelUsersRequest {
  /** Path param: Identifier. */
  zoneId: string;
  /** Body param */
  body: { name: string; description?: string; metadata?: unknown }[];
}

export const BulkCreateLabelUsersRequest =
  /*@__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      zoneId: Schema.String.pipe(T.HttpPath("zone_id")),
      body: Schema.Array(Body).pipe(T.HttpBody()),
    }).pipe(
      T.Http({
        method: "POST",
        path: "/zones/{zone_id}/api_gateway/labels/user",
      }),
    ),
  ) as unknown as Schema.Codec<BulkCreateLabelUsersRequest>;

export interface BulkCreateLabelUsersResponse {
  result: {
    createdAt: string;
    description: string;
    lastUpdated: string;
    metadata: unknown;
    name: string;
    source: "user" | "managed" | (string & {});
  }[];
}

export const BulkCreateLabelUsersResponse =
  /*@__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      result: Schema.Array(BulkCreateLabelUsersResponseResult),
    }),
  ) as unknown as Schema.Codec<BulkCreateLabelUsersResponse>;

export type BulkCreateLabelUsersError =
  | DefaultErrors
  | LabelAlreadyExists
  | Forbidden;

export const bulkCreateLabelUsers: API.PaginatedOperationMethod<
  BulkCreateLabelUsersRequest,
  BulkCreateLabelUsersResponse,
  BulkCreateLabelUsersError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: BulkCreateLabelUsersRequest,
  output: BulkCreateLabelUsersResponse,
  errors: [LabelAlreadyExists, Forbidden],
  pagination: {
    mode: "single",
    items: "result",
  } as const,
}));

export interface BulkDeleteLabelUsersRequest {
  /** Identifier. */
  zoneId: string;
}

export const BulkDeleteLabelUsersRequest =
  /*@__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      zoneId: Schema.String.pipe(T.HttpPath("zone_id")),
    }).pipe(
      T.Http({
        method: "DELETE",
        path: "/zones/{zone_id}/api_gateway/labels/user",
      }),
    ),
  ) as unknown as Schema.Codec<BulkDeleteLabelUsersRequest>;

export interface BulkDeleteLabelUsersResponse {
  result: {
    createdAt: string;
    description: string;
    lastUpdated: string;
    metadata: unknown;
    name: string;
    source: "user" | "managed" | (string & {});
  }[];
}

export const BulkDeleteLabelUsersResponse =
  /*@__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      result: Schema.Array(BulkCreateLabelUsersResponseResult),
    }),
  ) as unknown as Schema.Codec<BulkDeleteLabelUsersResponse>;

export type BulkDeleteLabelUsersError = DefaultErrors;

export const bulkDeleteLabelUsers: API.PaginatedOperationMethod<
  BulkDeleteLabelUsersRequest,
  BulkDeleteLabelUsersResponse,
  BulkDeleteLabelUsersError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: BulkDeleteLabelUsersRequest,
  output: BulkDeleteLabelUsersResponse,
  errors: [],
  pagination: {
    mode: "single",
    items: "result",
  } as const,
}));

// =============================================================================
// LabelUserResourceOperation
// =============================================================================

export interface PutLabelUserResourceOperationRequest {
  name: string;
  /** Path param: Identifier. */
  zoneId: string;
  /** Body param: Operation IDs selector */
  selector: { include: { operationIds: string[] } };
}

export const PutLabelUserResourceOperationRequest =
  /*@__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      name: Schema.String.pipe(T.HttpPath("name")),
      zoneId: Schema.String.pipe(T.HttpPath("zone_id")),
      selector: Selector,
    }).pipe(
      T.Http({
        method: "PUT",
        path: "/zones/{zone_id}/api_gateway/labels/user/{name}/resources/operation",
      }),
    ),
  ) as unknown as Schema.Codec<PutLabelUserResourceOperationRequest>;

export interface PutLabelUserResourceOperationResponse {
  createdAt: string;
  /** The description of the label */
  description: string;
  lastUpdated: string;
  /** Metadata for the label */
  metadata: unknown;
  /** The name of the label */
  name: string;
  /** - `user` - label is owned by the user - `managed` - label is owned by cloudflare */
  source: "user" | "managed" | (string & {});
  /** Provides counts of what resources are linked to this label */
  mappedResources?: unknown | null;
}

export const PutLabelUserResourceOperationResponse =
  /*@__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      createdAt: Schema.String,
      description: Schema.String,
      lastUpdated: Schema.String,
      metadata: Schema.Unknown,
      name: Schema.String,
      source: Schema.Union([
        Schema.Literals(["user", "managed"]),
        Schema.String,
      ]),
      mappedResources: Schema.optional(
        Schema.Union([Schema.Unknown, Schema.Null]),
      ),
    })
      .pipe(
        Schema.encodeKeys({
          createdAt: "created_at",
          description: "description",
          lastUpdated: "last_updated",
          metadata: "metadata",
          name: "name",
          source: "source",
          mappedResources: "mapped_resources",
        }),
      )
      .pipe(T.ResponsePath("result")),
  ) as unknown as Schema.Codec<PutLabelUserResourceOperationResponse>;

export type PutLabelUserResourceOperationError = DefaultErrors;

export const putLabelUserResourceOperation: API.OperationMethod<
  PutLabelUserResourceOperationRequest,
  PutLabelUserResourceOperationResponse,
  PutLabelUserResourceOperationError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: PutLabelUserResourceOperationRequest,
  output: PutLabelUserResourceOperationResponse,
  errors: [],
}));

// =============================================================================
// Operation
// =============================================================================

export interface GetOperationRequest {
  operationId: string;
  /** Path param: Identifier. */
  zoneId: string;
  /** Query param: Add feature(s) to the results. The feature name that is given here corresponds to the resulting feature object. Have a look at the top-level object description for more details on the spe */
  feature?: (
    | "thresholds"
    | "parameter_schemas"
    | "schema_info"
    | (string & {})
  )[];
  /** Query param: When true, includes OpenAPI schemas (both uploaded and learned) for the operation in the response. Due to the conversion overhead, this parameter is only supported on single-operation ret */
  withSchemas?: boolean;
}

export const GetOperationRequest = /*@__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    operationId: Schema.String.pipe(T.HttpPath("operationId")),
    zoneId: Schema.String.pipe(T.HttpPath("zone_id")),
    feature: Schema.optional(
      Schema.Array(
        Schema.Union([
          Schema.Literals(["thresholds", "parameter_schemas", "schema_info"]),
          Schema.String,
        ]),
      ),
    ).pipe(T.HttpQuery("feature")),
    withSchemas: Schema.optional(Schema.Boolean).pipe(
      T.HttpQuery("with_schemas"),
    ),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/zones/{zone_id}/api_gateway/operations/{operationId}",
    }),
  ),
) as unknown as Schema.Codec<GetOperationRequest>;

export interface GetOperationResponse {
  /** The endpoint which can contain path parameter templates in curly braces, each will be replaced from left to right with {varN}, starting with {var1}, during insertion. This will further be Cloudflare-n */
  endpoint: string;
  /** RFC3986-compliant host. */
  host: string;
  lastUpdated: string;
  /** The HTTP method used to access the endpoint. */
  method:
    | "GET"
    | "POST"
    | "HEAD"
    | "OPTIONS"
    | "PUT"
    | "DELETE"
    | "CONNECT"
    | "PATCH"
    | "TRACE"
    | (string & {});
  /** UUID. */
  operationId: string;
  features?:
    | {
        thresholds?: {
          authIdTokens?: number | null;
          dataPoints?: number | null;
          lastUpdated?: string | null;
          p50?: number | null;
          p90?: number | null;
          p99?: number | null;
          periodSeconds?: number | null;
          requests?: number | null;
          suggestedThreshold?: number | null;
        } | null;
      }
    | {
        parameterSchemas: {
          lastUpdated?: string | null;
          parameterSchemas?: {
            parameters?: unknown[] | null;
            responses?: unknown | null;
          } | null;
        };
      }
    | {
        apiRouting?: {
          lastUpdated?: string | null;
          route?: string | null;
        } | null;
      }
    | {
        confidenceIntervals?: {
          lastUpdated?: string | null;
          suggestedThreshold?: {
            confidenceIntervals?: {
              p90?: { lower?: number | null; upper?: number | null } | null;
              p95?: { lower?: number | null; upper?: number | null } | null;
              p99?: { lower?: number | null; upper?: number | null } | null;
            } | null;
            mean?: number | null;
          } | null;
        } | null;
      }
    | {
        schemaInfo?: {
          activeSchema?: {
            id?: string | null;
            createdAt?: string | null;
            isLearned?: boolean | null;
            name?: string | null;
          } | null;
          learnedAvailable?: boolean | null;
          mitigationAction?: "none" | "log" | "block" | null;
        } | null;
      }
    | null;
  /** OpenAPI JSON schemas for an operation, including both user-uploaded and Cloudflare-learned schemas. */
  schemas?: {
    learned?: {
      parameters?: Record<string, unknown>[] | null;
      requestBody?: Record<string, unknown> | null;
    } | null;
    uploaded?: {
      parameters?: Record<string, unknown>[] | null;
      requestBody?: Record<string, unknown> | null;
    } | null;
  } | null;
}

export const GetOperationResponse = /*@__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    endpoint: Schema.String,
    host: Schema.String,
    lastUpdated: Schema.String,
    method: Schema.Union([
      Schema.Literals([
        "GET",
        "POST",
        "HEAD",
        "OPTIONS",
        "PUT",
        "DELETE",
        "CONNECT",
        "PATCH",
        "TRACE",
      ]),
      Schema.String,
    ]),
    operationId: Schema.String,
    features: Schema.optional(
      Schema.Union([
        Schema.Union([
          ApishieldOperationFeatureParameterSchemas,
          ApishieldOperationFeatureThresholds,
          ApishieldOperationFeatureAPIRouting,
          ApishieldOperationFeatureConfidenceIntervals,
          ApishieldOperationFeatureSchemaInfo,
        ]),
        Schema.Null,
      ]),
    ),
    schemas: Schema.optional(Schema.Union([Schemas, Schema.Null])),
  })
    .pipe(
      Schema.encodeKeys({
        endpoint: "endpoint",
        host: "host",
        lastUpdated: "last_updated",
        method: "method",
        operationId: "operation_id",
        features: "features",
        schemas: "schemas",
      }),
    )
    .pipe(T.ResponsePath("result")),
) as unknown as Schema.Codec<GetOperationResponse>;

export type GetOperationError =
  | DefaultErrors
  | InvalidObjectIdentifier
  | OperationNotFound
  | Forbidden;

export const getOperation: API.OperationMethod<
  GetOperationRequest,
  GetOperationResponse,
  GetOperationError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: GetOperationRequest,
  output: GetOperationResponse,
  errors: [InvalidObjectIdentifier, OperationNotFound, Forbidden],
}));

export interface ListOperationsRequest {
  /** Path param: Identifier. */
  zoneId: string;
  page?: number;
  perPage?: number;
  /** Query param: Direction to order results. */
  direction?: "asc" | "desc" | (string & {});
  /** Query param: Filter results to only include endpoints containing this pattern. */
  endpoint?: string;
  /** Query param: Add feature(s) to the results. The feature name that is given here corresponds to the resulting feature object. Have a look at the top-level object description for more details on the spe */
  feature?: (
    | "thresholds"
    | "parameter_schemas"
    | "schema_info"
    | (string & {})
  )[];
  /** Query param: Filter results to only include the specified hosts. */
  host?: string[];
  /** Query param: Filter results to only include the specified HTTP methods. */
  method?: string[];
  /** Query param: Field to order by. When requesting a feature, the feature keys are available for ordering as well, e.g., `thresholds.suggested_threshold`. */
  order?: "method" | "host" | "endpoint" | "thresholds.$key" | (string & {});
}

export const ListOperationsRequest = /*@__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    zoneId: Schema.String.pipe(T.HttpPath("zone_id")),
    page: Schema.optional(Schema.Number).pipe(T.HttpQuery("page")),
    perPage: Schema.optional(Schema.Number).pipe(T.HttpQuery("per_page")),
    direction: Schema.optional(
      Schema.Union([Schema.Literals(["asc", "desc"]), Schema.String]),
    ).pipe(T.HttpQuery("direction")),
    endpoint: Schema.optional(Schema.String).pipe(T.HttpQuery("endpoint")),
    feature: Schema.optional(
      Schema.Array(
        Schema.Union([
          Schema.Literals(["thresholds", "parameter_schemas", "schema_info"]),
          Schema.String,
        ]),
      ),
    ).pipe(T.HttpQuery("feature")),
    host: Schema.optional(Schema.Array(Schema.String)).pipe(
      T.HttpQuery("host"),
    ),
    method: Schema.optional(Schema.Array(Schema.String)).pipe(
      T.HttpQuery("method"),
    ),
    order: Schema.optional(
      Schema.Union([
        Schema.Literals(["method", "host", "endpoint", "thresholds.$key"]),
        Schema.String,
      ]),
    ).pipe(T.HttpQuery("order")),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/zones/{zone_id}/api_gateway/operations",
    }),
  ),
) as unknown as Schema.Codec<ListOperationsRequest>;

export interface ListOperationsResponse {
  result: {
    endpoint: string;
    host: string;
    lastUpdated: string;
    method:
      | "GET"
      | "POST"
      | "HEAD"
      | "OPTIONS"
      | "PUT"
      | "DELETE"
      | "CONNECT"
      | "PATCH"
      | "TRACE"
      | (string & {});
    operationId: string;
    features?:
      | {
          thresholds?: {
            authIdTokens?: number | null;
            dataPoints?: number | null;
            lastUpdated?: string | null;
            p50?: number | null;
            p90?: number | null;
            p99?: number | null;
            periodSeconds?: number | null;
            requests?: number | null;
            suggestedThreshold?: number | null;
          } | null;
        }
      | {
          parameterSchemas: {
            lastUpdated?: string | null;
            parameterSchemas?: {
              parameters?: unknown[] | null;
              responses?: unknown | null;
            } | null;
          };
        }
      | {
          apiRouting?: {
            lastUpdated?: string | null;
            route?: string | null;
          } | null;
        }
      | {
          confidenceIntervals?: {
            lastUpdated?: string | null;
            suggestedThreshold?: {
              confidenceIntervals?: {
                p90?: { lower?: number | null; upper?: number | null } | null;
                p95?: { lower?: number | null; upper?: number | null } | null;
                p99?: { lower?: number | null; upper?: number | null } | null;
              } | null;
              mean?: number | null;
            } | null;
          } | null;
        }
      | {
          schemaInfo?: {
            activeSchema?: {
              id?: string | null;
              createdAt?: string | null;
              isLearned?: boolean | null;
              name?: string | null;
            } | null;
            learnedAvailable?: boolean | null;
            mitigationAction?: "none" | "log" | "block" | null;
          } | null;
        }
      | null;
  }[];
  resultInfo?: {
    count?: number | null;
    page?: number | null;
    perPage?: number | null;
    totalCount?: number | null;
  } | null;
}

export const ListOperationsResponse =
  /*@__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      result: Schema.Array(ListOperationsResponseResult),
      resultInfo: Schema.optional(
        Schema.Union([ListDiscoveryOperationsResponseResultInfo, Schema.Null]),
      ),
    }).pipe(Schema.encodeKeys({ result: "result", resultInfo: "result_info" })),
  ) as unknown as Schema.Codec<ListOperationsResponse>;

export type ListOperationsError = DefaultErrors | Forbidden;

export const listOperations: API.PaginatedOperationMethod<
  ListOperationsRequest,
  ListOperationsResponse,
  ListOperationsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: ListOperationsRequest,
  output: ListOperationsResponse,
  errors: [Forbidden],
  pagination: {
    mode: "page",
    inputToken: "page",
    outputToken: "resultInfo.page",
    items: "result",
    pageSize: "perPage",
  } as const,
}));

export interface CreateOperationRequest {
  /** Path param: Identifier. */
  zoneId: string;
  /** Body param: The endpoint which can contain path parameter templates in curly braces, each will be replaced from left to right with {varN}, starting with {var1}, during insertion. This will further be  */
  endpoint: string;
  /** Body param: RFC3986-compliant host. */
  host: string;
  /** Body param: The HTTP method used to access the endpoint. */
  method:
    | "GET"
    | "POST"
    | "HEAD"
    | "OPTIONS"
    | "PUT"
    | "DELETE"
    | "CONNECT"
    | "PATCH"
    | "TRACE"
    | (string & {});
}

export const CreateOperationRequest =
  /*@__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      zoneId: Schema.String.pipe(T.HttpPath("zone_id")),
      endpoint: Schema.String,
      host: Schema.String,
      method: Schema.Union([
        Schema.Literals([
          "GET",
          "POST",
          "HEAD",
          "OPTIONS",
          "PUT",
          "DELETE",
          "CONNECT",
          "PATCH",
          "TRACE",
        ]),
        Schema.String,
      ]),
    }).pipe(
      T.Http({
        method: "POST",
        path: "/zones/{zone_id}/api_gateway/operations/item",
      }),
    ),
  ) as unknown as Schema.Codec<CreateOperationRequest>;

export interface CreateOperationResponse {
  /** The endpoint which can contain path parameter templates in curly braces, each will be replaced from left to right with {varN}, starting with {var1}, during insertion. This will further be Cloudflare-n */
  endpoint: string;
  /** RFC3986-compliant host. */
  host: string;
  lastUpdated: string;
  /** The HTTP method used to access the endpoint. */
  method:
    | "GET"
    | "POST"
    | "HEAD"
    | "OPTIONS"
    | "PUT"
    | "DELETE"
    | "CONNECT"
    | "PATCH"
    | "TRACE"
    | (string & {});
  /** UUID. */
  operationId: string;
  features?:
    | {
        thresholds?: {
          authIdTokens?: number | null;
          dataPoints?: number | null;
          lastUpdated?: string | null;
          p50?: number | null;
          p90?: number | null;
          p99?: number | null;
          periodSeconds?: number | null;
          requests?: number | null;
          suggestedThreshold?: number | null;
        } | null;
      }
    | {
        parameterSchemas: {
          lastUpdated?: string | null;
          parameterSchemas?: {
            parameters?: unknown[] | null;
            responses?: unknown | null;
          } | null;
        };
      }
    | {
        apiRouting?: {
          lastUpdated?: string | null;
          route?: string | null;
        } | null;
      }
    | {
        confidenceIntervals?: {
          lastUpdated?: string | null;
          suggestedThreshold?: {
            confidenceIntervals?: {
              p90?: { lower?: number | null; upper?: number | null } | null;
              p95?: { lower?: number | null; upper?: number | null } | null;
              p99?: { lower?: number | null; upper?: number | null } | null;
            } | null;
            mean?: number | null;
          } | null;
        } | null;
      }
    | {
        schemaInfo?: {
          activeSchema?: {
            id?: string | null;
            createdAt?: string | null;
            isLearned?: boolean | null;
            name?: string | null;
          } | null;
          learnedAvailable?: boolean | null;
          mitigationAction?: "none" | "log" | "block" | null;
        } | null;
      }
    | null;
  /** OpenAPI JSON schemas for an operation, including both user-uploaded and Cloudflare-learned schemas. */
  schemas?: {
    learned?: {
      parameters?: Record<string, unknown>[] | null;
      requestBody?: Record<string, unknown> | null;
    } | null;
    uploaded?: {
      parameters?: Record<string, unknown>[] | null;
      requestBody?: Record<string, unknown> | null;
    } | null;
  } | null;
}

export const CreateOperationResponse =
  /*@__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      endpoint: Schema.String,
      host: Schema.String,
      lastUpdated: Schema.String,
      method: Schema.Union([
        Schema.Literals([
          "GET",
          "POST",
          "HEAD",
          "OPTIONS",
          "PUT",
          "DELETE",
          "CONNECT",
          "PATCH",
          "TRACE",
        ]),
        Schema.String,
      ]),
      operationId: Schema.String,
      features: Schema.optional(
        Schema.Union([
          Schema.Union([
            ApishieldOperationFeatureParameterSchemas,
            ApishieldOperationFeatureThresholds,
            ApishieldOperationFeatureAPIRouting,
            ApishieldOperationFeatureConfidenceIntervals,
            ApishieldOperationFeatureSchemaInfo,
          ]),
          Schema.Null,
        ]),
      ),
      schemas: Schema.optional(Schema.Union([Schemas, Schema.Null])),
    })
      .pipe(
        Schema.encodeKeys({
          endpoint: "endpoint",
          host: "host",
          lastUpdated: "last_updated",
          method: "method",
          operationId: "operation_id",
          features: "features",
          schemas: "schemas",
        }),
      )
      .pipe(T.ResponsePath("result")),
  ) as unknown as Schema.Codec<CreateOperationResponse>;

export type CreateOperationError =
  | DefaultErrors
  | InvalidObjectIdentifier
  | Forbidden;

export const createOperation: API.OperationMethod<
  CreateOperationRequest,
  CreateOperationResponse,
  CreateOperationError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: CreateOperationRequest,
  output: CreateOperationResponse,
  errors: [InvalidObjectIdentifier, Forbidden],
}));

export interface DeleteOperationRequest {
  operationId: string;
  /** Identifier. */
  zoneId: string;
}

export const DeleteOperationRequest =
  /*@__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      operationId: Schema.String.pipe(T.HttpPath("operationId")),
      zoneId: Schema.String.pipe(T.HttpPath("zone_id")),
    }).pipe(
      T.Http({
        method: "DELETE",
        path: "/zones/{zone_id}/api_gateway/operations/{operationId}",
      }),
    ),
  ) as unknown as Schema.Codec<DeleteOperationRequest>;

export interface DeleteOperationResponse {
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

export const DeleteOperationResponse =
  /*@__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      errors: Schema.Array(MessageItem),
      messages: Schema.Array(MessageItem),
      success: Schema.Literal(true),
    }),
  ) as unknown as Schema.Codec<DeleteOperationResponse>;

export type DeleteOperationError =
  | DefaultErrors
  | InvalidObjectIdentifier
  | OperationNotFound
  | Forbidden;

export const deleteOperation: API.OperationMethod<
  DeleteOperationRequest,
  DeleteOperationResponse,
  DeleteOperationError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: DeleteOperationRequest,
  output: DeleteOperationResponse,
  errors: [InvalidObjectIdentifier, OperationNotFound, Forbidden],
}));

export interface BulkCreateOperationsRequest {
  /** Path param: Identifier. */
  zoneId: string;
  /** Body param */
  body: {
    endpoint: string;
    host: string;
    method:
      | "GET"
      | "POST"
      | "HEAD"
      | "OPTIONS"
      | "PUT"
      | "DELETE"
      | "CONNECT"
      | "PATCH"
      | "TRACE"
      | (string & {});
  }[];
}

export const BulkCreateOperationsRequest =
  /*@__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      zoneId: Schema.String.pipe(T.HttpPath("zone_id")),
      body: Schema.Array(Body2).pipe(T.HttpBody()),
    }).pipe(
      T.Http({
        method: "POST",
        path: "/zones/{zone_id}/api_gateway/operations",
      }),
    ),
  ) as unknown as Schema.Codec<BulkCreateOperationsRequest>;

export interface BulkCreateOperationsResponse {
  result: {
    endpoint: string;
    host: string;
    lastUpdated: string;
    method:
      | "GET"
      | "POST"
      | "HEAD"
      | "OPTIONS"
      | "PUT"
      | "DELETE"
      | "CONNECT"
      | "PATCH"
      | "TRACE"
      | (string & {});
    operationId: string;
    features?:
      | {
          thresholds?: {
            authIdTokens?: number | null;
            dataPoints?: number | null;
            lastUpdated?: string | null;
            p50?: number | null;
            p90?: number | null;
            p99?: number | null;
            periodSeconds?: number | null;
            requests?: number | null;
            suggestedThreshold?: number | null;
          } | null;
        }
      | {
          parameterSchemas: {
            lastUpdated?: string | null;
            parameterSchemas?: {
              parameters?: unknown[] | null;
              responses?: unknown | null;
            } | null;
          };
        }
      | {
          apiRouting?: {
            lastUpdated?: string | null;
            route?: string | null;
          } | null;
        }
      | {
          confidenceIntervals?: {
            lastUpdated?: string | null;
            suggestedThreshold?: {
              confidenceIntervals?: {
                p90?: { lower?: number | null; upper?: number | null } | null;
                p95?: { lower?: number | null; upper?: number | null } | null;
                p99?: { lower?: number | null; upper?: number | null } | null;
              } | null;
              mean?: number | null;
            } | null;
          } | null;
        }
      | {
          schemaInfo?: {
            activeSchema?: {
              id?: string | null;
              createdAt?: string | null;
              isLearned?: boolean | null;
              name?: string | null;
            } | null;
            learnedAvailable?: boolean | null;
            mitigationAction?: "none" | "log" | "block" | null;
          } | null;
        }
      | null;
  }[];
}

export const BulkCreateOperationsResponse =
  /*@__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      result: Schema.Array(ListOperationsResponseResult),
    }),
  ) as unknown as Schema.Codec<BulkCreateOperationsResponse>;

export type BulkCreateOperationsError = DefaultErrors;

export const bulkCreateOperations: API.PaginatedOperationMethod<
  BulkCreateOperationsRequest,
  BulkCreateOperationsResponse,
  BulkCreateOperationsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: BulkCreateOperationsRequest,
  output: BulkCreateOperationsResponse,
  errors: [],
  pagination: {
    mode: "single",
    items: "result",
  } as const,
}));

export interface BulkDeleteOperationsRequest {
  /** Identifier. */
  zoneId: string;
}

export const BulkDeleteOperationsRequest =
  /*@__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      zoneId: Schema.String.pipe(T.HttpPath("zone_id")),
    }).pipe(
      T.Http({
        method: "DELETE",
        path: "/zones/{zone_id}/api_gateway/operations",
      }),
    ),
  ) as unknown as Schema.Codec<BulkDeleteOperationsRequest>;

export interface BulkDeleteOperationsResponse {
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

export const BulkDeleteOperationsResponse =
  /*@__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      errors: Schema.Array(MessageItem),
      messages: Schema.Array(MessageItem),
      success: Schema.Literal(true),
    }),
  ) as unknown as Schema.Codec<BulkDeleteOperationsResponse>;

export type BulkDeleteOperationsError = DefaultErrors | InvalidObjectIdentifier;

export const bulkDeleteOperations: API.OperationMethod<
  BulkDeleteOperationsRequest,
  BulkDeleteOperationsResponse,
  BulkDeleteOperationsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: BulkDeleteOperationsRequest,
  output: BulkDeleteOperationsResponse,
  errors: [InvalidObjectIdentifier],
}));

// =============================================================================
// OperationLabel
// =============================================================================

export interface CreateOperationLabelRequest {
  operationId: string;
  /** Path param: Identifier. */
  zoneId: string;
  /** Body param: List of managed label names. */
  managed?: string[];
  /** Body param: List of user label names. */
  user?: string[];
}

export const CreateOperationLabelRequest =
  /*@__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      operationId: Schema.String.pipe(T.HttpPath("operationId")),
      zoneId: Schema.String.pipe(T.HttpPath("zone_id")),
      managed: Schema.optional(Schema.Array(Schema.String)),
      user: Schema.optional(Schema.Array(Schema.String)),
    }).pipe(
      T.Http({
        method: "POST",
        path: "/zones/{zone_id}/api_gateway/operations/{operationId}/labels",
      }),
    ),
  ) as unknown as Schema.Codec<CreateOperationLabelRequest>;

export interface CreateOperationLabelResponse {
  /** The endpoint which can contain path parameter templates in curly braces, each will be replaced from left to right with {varN}, starting with {var1}, during insertion. This will further be Cloudflare-n */
  endpoint: string;
  /** RFC3986-compliant host. */
  host: string;
  lastUpdated: string;
  /** The HTTP method used to access the endpoint. */
  method:
    | "GET"
    | "POST"
    | "HEAD"
    | "OPTIONS"
    | "PUT"
    | "DELETE"
    | "CONNECT"
    | "PATCH"
    | "TRACE"
    | (string & {});
  /** UUID. */
  operationId: string;
  labels?:
    | {
        createdAt: string;
        description: string;
        lastUpdated: string;
        metadata: unknown;
        name: string;
        source: "user" | "managed" | (string & {});
      }[]
    | null;
}

export const CreateOperationLabelResponse =
  /*@__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      endpoint: Schema.String,
      host: Schema.String,
      lastUpdated: Schema.String,
      method: Schema.Union([
        Schema.Literals([
          "GET",
          "POST",
          "HEAD",
          "OPTIONS",
          "PUT",
          "DELETE",
          "CONNECT",
          "PATCH",
          "TRACE",
        ]),
        Schema.String,
      ]),
      operationId: Schema.String,
      labels: Schema.optional(
        Schema.Union([
          Schema.Array(BulkCreateLabelUsersResponseResult),
          Schema.Null,
        ]),
      ),
    })
      .pipe(
        Schema.encodeKeys({
          endpoint: "endpoint",
          host: "host",
          lastUpdated: "last_updated",
          method: "method",
          operationId: "operation_id",
          labels: "labels",
        }),
      )
      .pipe(T.ResponsePath("result")),
  ) as unknown as Schema.Codec<CreateOperationLabelResponse>;

export type CreateOperationLabelError = DefaultErrors;

export const createOperationLabel: API.OperationMethod<
  CreateOperationLabelRequest,
  CreateOperationLabelResponse,
  CreateOperationLabelError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: CreateOperationLabelRequest,
  output: CreateOperationLabelResponse,
  errors: [],
}));

export interface UpdateOperationLabelRequest {
  operationId: string;
  /** Path param: Identifier. */
  zoneId: string;
  /** Body param: List of managed label names. Omitting this property or passing an empty array will result in all managed labels being removed from the operation */
  managed?: string[];
  /** Body param: List of user label names. Omitting this property or passing an empty array will result in all user labels being removed from the operation */
  user?: string[];
}

export const UpdateOperationLabelRequest =
  /*@__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      operationId: Schema.String.pipe(T.HttpPath("operationId")),
      zoneId: Schema.String.pipe(T.HttpPath("zone_id")),
      managed: Schema.optional(Schema.Array(Schema.String)),
      user: Schema.optional(Schema.Array(Schema.String)),
    }).pipe(
      T.Http({
        method: "PUT",
        path: "/zones/{zone_id}/api_gateway/operations/{operationId}/labels",
      }),
    ),
  ) as unknown as Schema.Codec<UpdateOperationLabelRequest>;

export interface UpdateOperationLabelResponse {
  /** The endpoint which can contain path parameter templates in curly braces, each will be replaced from left to right with {varN}, starting with {var1}, during insertion. This will further be Cloudflare-n */
  endpoint: string;
  /** RFC3986-compliant host. */
  host: string;
  lastUpdated: string;
  /** The HTTP method used to access the endpoint. */
  method:
    | "GET"
    | "POST"
    | "HEAD"
    | "OPTIONS"
    | "PUT"
    | "DELETE"
    | "CONNECT"
    | "PATCH"
    | "TRACE"
    | (string & {});
  /** UUID. */
  operationId: string;
  labels?:
    | {
        createdAt: string;
        description: string;
        lastUpdated: string;
        metadata: unknown;
        name: string;
        source: "user" | "managed" | (string & {});
      }[]
    | null;
}

export const UpdateOperationLabelResponse =
  /*@__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      endpoint: Schema.String,
      host: Schema.String,
      lastUpdated: Schema.String,
      method: Schema.Union([
        Schema.Literals([
          "GET",
          "POST",
          "HEAD",
          "OPTIONS",
          "PUT",
          "DELETE",
          "CONNECT",
          "PATCH",
          "TRACE",
        ]),
        Schema.String,
      ]),
      operationId: Schema.String,
      labels: Schema.optional(
        Schema.Union([
          Schema.Array(BulkCreateLabelUsersResponseResult),
          Schema.Null,
        ]),
      ),
    })
      .pipe(
        Schema.encodeKeys({
          endpoint: "endpoint",
          host: "host",
          lastUpdated: "last_updated",
          method: "method",
          operationId: "operation_id",
          labels: "labels",
        }),
      )
      .pipe(T.ResponsePath("result")),
  ) as unknown as Schema.Codec<UpdateOperationLabelResponse>;

export type UpdateOperationLabelError = DefaultErrors;

export const updateOperationLabel: API.OperationMethod<
  UpdateOperationLabelRequest,
  UpdateOperationLabelResponse,
  UpdateOperationLabelError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: UpdateOperationLabelRequest,
  output: UpdateOperationLabelResponse,
  errors: [],
}));

export interface DeleteOperationLabelRequest {
  operationId: string;
  /** Identifier. */
  zoneId: string;
}

export const DeleteOperationLabelRequest =
  /*@__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      operationId: Schema.String.pipe(T.HttpPath("operationId")),
      zoneId: Schema.String.pipe(T.HttpPath("zone_id")),
    }).pipe(
      T.Http({
        method: "DELETE",
        path: "/zones/{zone_id}/api_gateway/operations/{operationId}/labels",
      }),
    ),
  ) as unknown as Schema.Codec<DeleteOperationLabelRequest>;

export interface DeleteOperationLabelResponse {
  /** The endpoint which can contain path parameter templates in curly braces, each will be replaced from left to right with {varN}, starting with {var1}, during insertion. This will further be Cloudflare-n */
  endpoint: string;
  /** RFC3986-compliant host. */
  host: string;
  lastUpdated: string;
  /** The HTTP method used to access the endpoint. */
  method:
    | "GET"
    | "POST"
    | "HEAD"
    | "OPTIONS"
    | "PUT"
    | "DELETE"
    | "CONNECT"
    | "PATCH"
    | "TRACE"
    | (string & {});
  /** UUID. */
  operationId: string;
  labels?:
    | {
        createdAt: string;
        description: string;
        lastUpdated: string;
        metadata: unknown;
        name: string;
        source: "user" | "managed" | (string & {});
      }[]
    | null;
}

export const DeleteOperationLabelResponse =
  /*@__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      endpoint: Schema.String,
      host: Schema.String,
      lastUpdated: Schema.String,
      method: Schema.Union([
        Schema.Literals([
          "GET",
          "POST",
          "HEAD",
          "OPTIONS",
          "PUT",
          "DELETE",
          "CONNECT",
          "PATCH",
          "TRACE",
        ]),
        Schema.String,
      ]),
      operationId: Schema.String,
      labels: Schema.optional(
        Schema.Union([
          Schema.Array(BulkCreateLabelUsersResponseResult),
          Schema.Null,
        ]),
      ),
    })
      .pipe(
        Schema.encodeKeys({
          endpoint: "endpoint",
          host: "host",
          lastUpdated: "last_updated",
          method: "method",
          operationId: "operation_id",
          labels: "labels",
        }),
      )
      .pipe(T.ResponsePath("result")),
  ) as unknown as Schema.Codec<DeleteOperationLabelResponse>;

export type DeleteOperationLabelError = DefaultErrors;

export const deleteOperationLabel: API.OperationMethod<
  DeleteOperationLabelRequest,
  DeleteOperationLabelResponse,
  DeleteOperationLabelError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: DeleteOperationLabelRequest,
  output: DeleteOperationLabelResponse,
  errors: [],
}));

export interface BulkCreateOperationLabelsRequest {
  /** Path param: Identifier. */
  zoneId: string;
  /** Body param: Operation IDs selector */
  selector: { include: { operationIds: string[] } };
  /** Body param */
  managed?: { labels?: string[] };
  /** Body param */
  user?: { labels?: string[] };
}

export const BulkCreateOperationLabelsRequest =
  /*@__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      zoneId: Schema.String.pipe(T.HttpPath("zone_id")),
      selector: Selector,
      managed: Schema.optional(Managed),
      user: Schema.optional(Managed),
    }).pipe(
      T.Http({
        method: "POST",
        path: "/zones/{zone_id}/api_gateway/operations/labels",
      }),
    ),
  ) as unknown as Schema.Codec<BulkCreateOperationLabelsRequest>;

export interface BulkCreateOperationLabelsResponse {
  result: {
    endpoint: string;
    host: string;
    lastUpdated: string;
    method:
      | "GET"
      | "POST"
      | "HEAD"
      | "OPTIONS"
      | "PUT"
      | "DELETE"
      | "CONNECT"
      | "PATCH"
      | "TRACE"
      | (string & {});
    operationId: string;
    labels?:
      | {
          createdAt: string;
          description: string;
          lastUpdated: string;
          metadata: unknown;
          name: string;
          source: "user" | "managed" | (string & {});
        }[]
      | null;
  }[];
}

export const BulkCreateOperationLabelsResponse =
  /*@__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      result: Schema.Array(BulkCreateOperationLabelsResponseResult),
    }),
  ) as unknown as Schema.Codec<BulkCreateOperationLabelsResponse>;

export type BulkCreateOperationLabelsError = DefaultErrors;

export const bulkCreateOperationLabels: API.PaginatedOperationMethod<
  BulkCreateOperationLabelsRequest,
  BulkCreateOperationLabelsResponse,
  BulkCreateOperationLabelsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: BulkCreateOperationLabelsRequest,
  output: BulkCreateOperationLabelsResponse,
  errors: [],
  pagination: {
    mode: "single",
    items: "result",
  } as const,
}));

export interface BulkUpdateOperationLabelsRequest {
  /** Path param: Identifier. */
  zoneId: string;
  /** Body param: Managed labels to replace for all affected operations */
  managed: { labels: string[] };
  /** Body param: Operation IDs selector */
  selector: { include: { operationIds: string[] } };
  /** Body param: User labels to replace for all affected operations */
  user: { labels: string[] };
}

export const BulkUpdateOperationLabelsRequest =
  /*@__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      zoneId: Schema.String.pipe(T.HttpPath("zone_id")),
      managed: Managed2,
      selector: Selector,
      user: Managed2,
    }).pipe(
      T.Http({
        method: "PUT",
        path: "/zones/{zone_id}/api_gateway/operations/labels",
      }),
    ),
  ) as unknown as Schema.Codec<BulkUpdateOperationLabelsRequest>;

export interface BulkUpdateOperationLabelsResponse {
  result: {
    endpoint: string;
    host: string;
    lastUpdated: string;
    method:
      | "GET"
      | "POST"
      | "HEAD"
      | "OPTIONS"
      | "PUT"
      | "DELETE"
      | "CONNECT"
      | "PATCH"
      | "TRACE"
      | (string & {});
    operationId: string;
    labels?:
      | {
          createdAt: string;
          description: string;
          lastUpdated: string;
          metadata: unknown;
          name: string;
          source: "user" | "managed" | (string & {});
        }[]
      | null;
  }[];
}

export const BulkUpdateOperationLabelsResponse =
  /*@__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      result: Schema.Array(BulkCreateOperationLabelsResponseResult),
    }),
  ) as unknown as Schema.Codec<BulkUpdateOperationLabelsResponse>;

export type BulkUpdateOperationLabelsError = DefaultErrors;

export const bulkUpdateOperationLabels: API.PaginatedOperationMethod<
  BulkUpdateOperationLabelsRequest,
  BulkUpdateOperationLabelsResponse,
  BulkUpdateOperationLabelsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: BulkUpdateOperationLabelsRequest,
  output: BulkUpdateOperationLabelsResponse,
  errors: [],
  pagination: {
    mode: "single",
    items: "result",
  } as const,
}));

export interface BulkDeleteOperationLabelsRequest {
  /** Identifier. */
  zoneId: string;
}

export const BulkDeleteOperationLabelsRequest =
  /*@__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      zoneId: Schema.String.pipe(T.HttpPath("zone_id")),
    }).pipe(
      T.Http({
        method: "DELETE",
        path: "/zones/{zone_id}/api_gateway/operations/labels",
      }),
    ),
  ) as unknown as Schema.Codec<BulkDeleteOperationLabelsRequest>;

export interface BulkDeleteOperationLabelsResponse {
  result: {
    endpoint: string;
    host: string;
    lastUpdated: string;
    method:
      | "GET"
      | "POST"
      | "HEAD"
      | "OPTIONS"
      | "PUT"
      | "DELETE"
      | "CONNECT"
      | "PATCH"
      | "TRACE"
      | (string & {});
    operationId: string;
    labels?:
      | {
          createdAt: string;
          description: string;
          lastUpdated: string;
          metadata: unknown;
          name: string;
          source: "user" | "managed" | (string & {});
        }[]
      | null;
  }[];
}

export const BulkDeleteOperationLabelsResponse =
  /*@__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      result: Schema.Array(BulkCreateOperationLabelsResponseResult),
    }),
  ) as unknown as Schema.Codec<BulkDeleteOperationLabelsResponse>;

export type BulkDeleteOperationLabelsError = DefaultErrors;

export const bulkDeleteOperationLabels: API.PaginatedOperationMethod<
  BulkDeleteOperationLabelsRequest,
  BulkDeleteOperationLabelsResponse,
  BulkDeleteOperationLabelsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: BulkDeleteOperationLabelsRequest,
  output: BulkDeleteOperationLabelsResponse,
  errors: [],
  pagination: {
    mode: "single",
    items: "result",
  } as const,
}));

// =============================================================================
// OperationSchemaValidation
// =============================================================================

export interface GetOperationSchemaValidationRequest {
  operationId: string;
  /** Identifier. */
  zoneId: string;
}

export const GetOperationSchemaValidationRequest =
  /*@__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      operationId: Schema.String.pipe(T.HttpPath("operationId")),
      zoneId: Schema.String.pipe(T.HttpPath("zone_id")),
    }).pipe(
      T.Http({
        method: "GET",
        path: "/zones/{zone_id}/api_gateway/operations/{operationId}/schema_validation",
      }),
    ),
  ) as unknown as Schema.Codec<GetOperationSchemaValidationRequest>;

export interface GetOperationSchemaValidationResponse {
  /** When set, this applies a mitigation action to this operation  - `log` log request when request does not conform to schema for this operation - `block` deny access to the site when request does not con */
  mitigationAction?: "log" | "block" | "none" | null;
  /** UUID. */
  operationId?: string | null;
}

export const GetOperationSchemaValidationResponse =
  /*@__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      mitigationAction: Schema.optional(
        Schema.Union([
          Schema.Literal("log"),
          Schema.Literal("block"),
          Schema.Literal("none"),
          Schema.Null,
        ]),
      ),
      operationId: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
    }).pipe(
      Schema.encodeKeys({
        mitigationAction: "mitigation_action",
        operationId: "operation_id",
      }),
    ),
  ) as unknown as Schema.Codec<GetOperationSchemaValidationResponse>;

export type GetOperationSchemaValidationError =
  | DefaultErrors
  | InvalidObjectIdentifier
  | OperationNotFound;

export const getOperationSchemaValidation: API.OperationMethod<
  GetOperationSchemaValidationRequest,
  GetOperationSchemaValidationResponse,
  GetOperationSchemaValidationError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: GetOperationSchemaValidationRequest,
  output: GetOperationSchemaValidationResponse,
  errors: [InvalidObjectIdentifier, OperationNotFound],
}));

export interface PutOperationSchemaValidationRequest {
  operationId: string;
  /** Path param: Identifier. */
  zoneId: string;
  /** Body param: When set, this applies a mitigation action to this operation  - `log` log request when request does not conform to schema for this operation - `block` deny access to the site when request  */
  mitigationAction?: "log" | "block" | "none" | null;
}

export const PutOperationSchemaValidationRequest =
  /*@__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      operationId: Schema.String.pipe(T.HttpPath("operationId")),
      zoneId: Schema.String.pipe(T.HttpPath("zone_id")),
      mitigationAction: Schema.optional(
        Schema.Union([
          Schema.Literal("log"),
          Schema.Literal("block"),
          Schema.Literal("none"),
          Schema.Null,
        ]),
      ),
    }).pipe(
      Schema.encodeKeys({ mitigationAction: "mitigation_action" }),
      T.Http({
        method: "PUT",
        path: "/zones/{zone_id}/api_gateway/operations/{operationId}/schema_validation",
      }),
    ),
  ) as unknown as Schema.Codec<PutOperationSchemaValidationRequest>;

export interface PutOperationSchemaValidationResponse {
  /** When set, this applies a mitigation action to this operation  - `log` log request when request does not conform to schema for this operation - `block` deny access to the site when request does not con */
  mitigationAction?: "log" | "block" | "none" | null;
  /** UUID. */
  operationId?: string | null;
}

export const PutOperationSchemaValidationResponse =
  /*@__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      mitigationAction: Schema.optional(
        Schema.Union([
          Schema.Literal("log"),
          Schema.Literal("block"),
          Schema.Literal("none"),
          Schema.Null,
        ]),
      ),
      operationId: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
    }).pipe(
      Schema.encodeKeys({
        mitigationAction: "mitigation_action",
        operationId: "operation_id",
      }),
    ),
  ) as unknown as Schema.Codec<PutOperationSchemaValidationResponse>;

export type PutOperationSchemaValidationError =
  | DefaultErrors
  | InvalidObjectIdentifier
  | OperationNotFound;

export const putOperationSchemaValidation: API.OperationMethod<
  PutOperationSchemaValidationRequest,
  PutOperationSchemaValidationResponse,
  PutOperationSchemaValidationError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: PutOperationSchemaValidationRequest,
  output: PutOperationSchemaValidationResponse,
  errors: [InvalidObjectIdentifier, OperationNotFound],
}));

export interface PatchOperationSchemaValidationRequest {
  /** Path param: Identifier. */
  zoneId: string;
  /** Body param */
  settingsMultipleRequest: Record<string, unknown>;
}

export const PatchOperationSchemaValidationRequest =
  /*@__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      zoneId: Schema.String.pipe(T.HttpPath("zone_id")),
      settingsMultipleRequest: Schema.Record(Schema.String, Schema.Unknown),
    }).pipe(
      Schema.encodeKeys({
        settingsMultipleRequest: "settings_multiple_request",
      }),
      T.Http({
        method: "PATCH",
        path: "/zones/{zone_id}/api_gateway/operations/schema_validation",
      }),
    ),
  ) as unknown as Schema.Codec<PatchOperationSchemaValidationRequest>;

export type PatchOperationSchemaValidationResponse = Record<string, unknown>;

export const PatchOperationSchemaValidationResponse =
  /*@__PURE__*/ Schema.suspend(() =>
    Schema.Record(Schema.String, Schema.Unknown).pipe(T.ResponsePath("result")),
  ) as unknown as Schema.Codec<PatchOperationSchemaValidationResponse>;

export type PatchOperationSchemaValidationError =
  | DefaultErrors
  | InvalidObjectIdentifier;

export const patchOperationSchemaValidation: API.OperationMethod<
  PatchOperationSchemaValidationRequest,
  PatchOperationSchemaValidationResponse,
  PatchOperationSchemaValidationError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: PatchOperationSchemaValidationRequest,
  output: PatchOperationSchemaValidationResponse,
  errors: [InvalidObjectIdentifier],
}));

// =============================================================================
// Schema
// =============================================================================

export interface ListSchemasRequest {
  /** Path param: Identifier. */
  zoneId: string;
  /** Query param: Add feature(s) to the results. The feature name that is given here corresponds to the resulting feature object. Have a look at the top-level object description for more details on the spe */
  feature?: (
    | "thresholds"
    | "parameter_schemas"
    | "schema_info"
    | (string & {})
  )[];
  /** Query param: Receive schema only for the given host(s). */
  host?: string[];
}

export const ListSchemasRequest = /*@__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    zoneId: Schema.String.pipe(T.HttpPath("zone_id")),
    feature: Schema.optional(
      Schema.Array(
        Schema.Union([
          Schema.Literals(["thresholds", "parameter_schemas", "schema_info"]),
          Schema.String,
        ]),
      ),
    ).pipe(T.HttpQuery("feature")),
    host: Schema.optional(Schema.Array(Schema.String)).pipe(
      T.HttpQuery("host"),
    ),
  }).pipe(
    T.Http({ method: "GET", path: "/zones/{zone_id}/api_gateway/schemas" }),
  ),
) as unknown as Schema.Codec<ListSchemasRequest>;

export interface ListSchemasResponse {
  schemas?: unknown[] | null;
  timestamp?: string | null;
}

export const ListSchemasResponse = /*@__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    schemas: Schema.optional(
      Schema.Union([Schema.Array(Schema.Unknown), Schema.Null]),
    ),
    timestamp: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
  }).pipe(T.ResponsePath("result")),
) as unknown as Schema.Codec<ListSchemasResponse>;

export type ListSchemasError = DefaultErrors | InvalidObjectIdentifier;

export const listSchemas: API.OperationMethod<
  ListSchemasRequest,
  ListSchemasResponse,
  ListSchemasError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: ListSchemasRequest,
  output: ListSchemasResponse,
  errors: [InvalidObjectIdentifier],
}));

// =============================================================================
// SettingSchemaValidation
// =============================================================================

export interface GetSettingSchemaValidationRequest {
  /** Identifier. */
  zoneId: string;
}

export const GetSettingSchemaValidationRequest =
  /*@__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      zoneId: Schema.String.pipe(T.HttpPath("zone_id")),
    }).pipe(
      T.Http({
        method: "GET",
        path: "/zones/{zone_id}/api_gateway/settings/schema_validation",
      }),
    ),
  ) as unknown as Schema.Codec<GetSettingSchemaValidationRequest>;

export interface GetSettingSchemaValidationResponse {
  /** The default mitigation action used when there is no mitigation action defined on the operation  Mitigation actions are as follows:  - `log` - log request when request does not conform to schema - `blo */
  validationDefaultMitigationAction?:
    | "none"
    | "log"
    | "block"
    | (string & {})
    | null;
  /** When set, this overrides both zone level and operation level mitigation actions.  - `none` will skip running schema validation entirely for the request - `null` indicates that no override is in place */
  validationOverrideMitigationAction?: "none" | null;
}

export const GetSettingSchemaValidationResponse =
  /*@__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      validationDefaultMitigationAction: Schema.optional(
        Schema.Union([
          Schema.Union([
            Schema.Literals(["none", "log", "block"]),
            Schema.String,
          ]),
          Schema.Null,
        ]),
      ),
      validationOverrideMitigationAction: Schema.optional(
        Schema.Union([Schema.Literal("none"), Schema.Null]),
      ),
    }).pipe(
      Schema.encodeKeys({
        validationDefaultMitigationAction:
          "validation_default_mitigation_action",
        validationOverrideMitigationAction:
          "validation_override_mitigation_action",
      }),
    ),
  ) as unknown as Schema.Codec<GetSettingSchemaValidationResponse>;

export type GetSettingSchemaValidationError =
  | DefaultErrors
  | InvalidObjectIdentifier;

export const getSettingSchemaValidation: API.OperationMethod<
  GetSettingSchemaValidationRequest,
  GetSettingSchemaValidationResponse,
  GetSettingSchemaValidationError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: GetSettingSchemaValidationRequest,
  output: GetSettingSchemaValidationResponse,
  errors: [InvalidObjectIdentifier],
}));

export interface PutSettingSchemaValidationRequest {
  /** Path param: Identifier. */
  zoneId: string;
  /** Body param: The default mitigation action used when there is no mitigation action defined on the operation  Mitigation actions are as follows:  - `log` - log request when request does not conform to s */
  validationDefaultMitigationAction: "none" | "log" | "block" | (string & {});
  /** Body param: When set, this overrides both zone level and operation level mitigation actions.  - `none` will skip running schema validation entirely for the request - `null` indicates that no override  */
  validationOverrideMitigationAction?: "none" | "disable_override" | null;
}

export const PutSettingSchemaValidationRequest =
  /*@__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      zoneId: Schema.String.pipe(T.HttpPath("zone_id")),
      validationDefaultMitigationAction: Schema.Union([
        Schema.Literals(["none", "log", "block"]),
        Schema.String,
      ]),
      validationOverrideMitigationAction: Schema.optional(
        Schema.Union([
          Schema.Literal("none"),
          Schema.Literal("disable_override"),
          Schema.Null,
        ]),
      ),
    }).pipe(
      Schema.encodeKeys({
        validationDefaultMitigationAction:
          "validation_default_mitigation_action",
        validationOverrideMitigationAction:
          "validation_override_mitigation_action",
      }),
      T.Http({
        method: "PUT",
        path: "/zones/{zone_id}/api_gateway/settings/schema_validation",
      }),
    ),
  ) as unknown as Schema.Codec<PutSettingSchemaValidationRequest>;

export interface PutSettingSchemaValidationResponse {
  /** The default mitigation action used when there is no mitigation action defined on the operation  Mitigation actions are as follows:  - `log` - log request when request does not conform to schema - `blo */
  validationDefaultMitigationAction?:
    | "none"
    | "log"
    | "block"
    | (string & {})
    | null;
  /** When set, this overrides both zone level and operation level mitigation actions.  - `none` will skip running schema validation entirely for the request - `null` indicates that no override is in place */
  validationOverrideMitigationAction?: "none" | null;
}

export const PutSettingSchemaValidationResponse =
  /*@__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      validationDefaultMitigationAction: Schema.optional(
        Schema.Union([
          Schema.Union([
            Schema.Literals(["none", "log", "block"]),
            Schema.String,
          ]),
          Schema.Null,
        ]),
      ),
      validationOverrideMitigationAction: Schema.optional(
        Schema.Union([Schema.Literal("none"), Schema.Null]),
      ),
    }).pipe(
      Schema.encodeKeys({
        validationDefaultMitigationAction:
          "validation_default_mitigation_action",
        validationOverrideMitigationAction:
          "validation_override_mitigation_action",
      }),
    ),
  ) as unknown as Schema.Codec<PutSettingSchemaValidationResponse>;

export type PutSettingSchemaValidationError =
  | DefaultErrors
  | InvalidObjectIdentifier;

export const putSettingSchemaValidation: API.OperationMethod<
  PutSettingSchemaValidationRequest,
  PutSettingSchemaValidationResponse,
  PutSettingSchemaValidationError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: PutSettingSchemaValidationRequest,
  output: PutSettingSchemaValidationResponse,
  errors: [InvalidObjectIdentifier],
}));

export interface PatchSettingSchemaValidationRequest {
  /** Path param: Identifier. */
  zoneId: string;
  /** Body param: The default mitigation action used when there is no mitigation action defined on the operation Mitigation actions are as follows:  - `log` - log request when request does not conform to sc */
  validationDefaultMitigationAction?: "none" | "log" | "block" | null;
  /** Body param: When set, this overrides both zone level and operation level mitigation actions.  - `none` will skip running schema validation entirely for the request  To clear any override, use the spec */
  validationOverrideMitigationAction?: "none" | "disable_override" | null;
}

export const PatchSettingSchemaValidationRequest =
  /*@__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      zoneId: Schema.String.pipe(T.HttpPath("zone_id")),
      validationDefaultMitigationAction: Schema.optional(
        Schema.Union([
          Schema.Literal("none"),
          Schema.Literal("log"),
          Schema.Literal("block"),
          Schema.Null,
        ]),
      ),
      validationOverrideMitigationAction: Schema.optional(
        Schema.Union([
          Schema.Literal("none"),
          Schema.Literal("disable_override"),
          Schema.Null,
        ]),
      ),
    }).pipe(
      Schema.encodeKeys({
        validationDefaultMitigationAction:
          "validation_default_mitigation_action",
        validationOverrideMitigationAction:
          "validation_override_mitigation_action",
      }),
      T.Http({
        method: "PATCH",
        path: "/zones/{zone_id}/api_gateway/settings/schema_validation",
      }),
    ),
  ) as unknown as Schema.Codec<PatchSettingSchemaValidationRequest>;

export interface PatchSettingSchemaValidationResponse {
  /** The default mitigation action used when there is no mitigation action defined on the operation  Mitigation actions are as follows:  - `log` - log request when request does not conform to schema - `blo */
  validationDefaultMitigationAction?:
    | "none"
    | "log"
    | "block"
    | (string & {})
    | null;
  /** When set, this overrides both zone level and operation level mitigation actions.  - `none` will skip running schema validation entirely for the request - `null` indicates that no override is in place */
  validationOverrideMitigationAction?: "none" | null;
}

export const PatchSettingSchemaValidationResponse =
  /*@__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      validationDefaultMitigationAction: Schema.optional(
        Schema.Union([
          Schema.Union([
            Schema.Literals(["none", "log", "block"]),
            Schema.String,
          ]),
          Schema.Null,
        ]),
      ),
      validationOverrideMitigationAction: Schema.optional(
        Schema.Union([Schema.Literal("none"), Schema.Null]),
      ),
    }).pipe(
      Schema.encodeKeys({
        validationDefaultMitigationAction:
          "validation_default_mitigation_action",
        validationOverrideMitigationAction:
          "validation_override_mitigation_action",
      }),
    ),
  ) as unknown as Schema.Codec<PatchSettingSchemaValidationResponse>;

export type PatchSettingSchemaValidationError =
  | DefaultErrors
  | InvalidObjectIdentifier;

export const patchSettingSchemaValidation: API.OperationMethod<
  PatchSettingSchemaValidationRequest,
  PatchSettingSchemaValidationResponse,
  PatchSettingSchemaValidationError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: PatchSettingSchemaValidationRequest,
  output: PatchSettingSchemaValidationResponse,
  errors: [InvalidObjectIdentifier],
}));

// =============================================================================
// UserSchema
// =============================================================================

export interface GetUserSchemaRequest {
  schemaId: string;
  /** Path param: Identifier. */
  zoneId: string;
  /** Query param: Omit the source-files of schemas and only retrieve their meta-data. */
  omitSource?: boolean;
}

export const GetUserSchemaRequest = /*@__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    schemaId: Schema.String.pipe(T.HttpPath("schemaId")),
    zoneId: Schema.String.pipe(T.HttpPath("zone_id")),
    omitSource: Schema.optional(Schema.Boolean).pipe(
      T.HttpQuery("omit_source"),
    ),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/zones/{zone_id}/api_gateway/user_schemas/{schemaId}",
    }),
  ),
) as unknown as Schema.Codec<GetUserSchemaRequest>;

export interface GetUserSchemaResponse {
  createdAt: string;
  /** Kind of schema */
  kind: "openapi_v3";
  /** Name of the schema */
  name: string;
  /** UUID. */
  schemaId: string;
  /** Source of the schema */
  source?: string | null;
  /** Flag whether schema is enabled for validation. */
  validationEnabled?: boolean | null;
}

export const GetUserSchemaResponse = /*@__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    createdAt: Schema.String,
    kind: Schema.Literal("openapi_v3"),
    name: Schema.String,
    schemaId: Schema.String,
    source: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
    validationEnabled: Schema.optional(
      Schema.Union([Schema.Boolean, Schema.Null]),
    ),
  })
    .pipe(
      Schema.encodeKeys({
        createdAt: "created_at",
        kind: "kind",
        name: "name",
        schemaId: "schema_id",
        source: "source",
        validationEnabled: "validation_enabled",
      }),
    )
    .pipe(T.ResponsePath("result")),
) as unknown as Schema.Codec<GetUserSchemaResponse>;

export type GetUserSchemaError =
  | DefaultErrors
  | InvalidObjectIdentifier
  | SchemaNotFound
  | Forbidden;

export const getUserSchema: API.OperationMethod<
  GetUserSchemaRequest,
  GetUserSchemaResponse,
  GetUserSchemaError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: GetUserSchemaRequest,
  output: GetUserSchemaResponse,
  errors: [InvalidObjectIdentifier, SchemaNotFound, Forbidden],
}));

export interface ListUserSchemasRequest {
  /** Path param: Identifier. */
  zoneId: string;
  page?: number;
  perPage?: number;
  /** Query param: Omit the source-files of schemas and only retrieve their meta-data. */
  omitSource?: boolean;
  /** Query param: Flag whether schema is enabled for validation. */
  validationEnabled?: boolean;
}

export const ListUserSchemasRequest =
  /*@__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      zoneId: Schema.String.pipe(T.HttpPath("zone_id")),
      page: Schema.optional(Schema.Number).pipe(T.HttpQuery("page")),
      perPage: Schema.optional(Schema.Number).pipe(T.HttpQuery("per_page")),
      omitSource: Schema.optional(Schema.Boolean).pipe(
        T.HttpQuery("omit_source"),
      ),
      validationEnabled: Schema.optional(Schema.Boolean).pipe(
        T.HttpQuery("validation_enabled"),
      ),
    }).pipe(
      T.Http({
        method: "GET",
        path: "/zones/{zone_id}/api_gateway/user_schemas",
      }),
    ),
  ) as unknown as Schema.Codec<ListUserSchemasRequest>;

export interface ListUserSchemasResponse {
  result: {
    createdAt: string;
    kind: "openapi_v3";
    name: string;
    schemaId: string;
    source?: string | null;
    validationEnabled?: boolean | null;
  }[];
  resultInfo?: {
    count?: number | null;
    page?: number | null;
    perPage?: number | null;
    totalCount?: number | null;
  } | null;
}

export const ListUserSchemasResponse =
  /*@__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      result: Schema.Array(ListUserSchemasResponseResult),
      resultInfo: Schema.optional(
        Schema.Union([ListDiscoveryOperationsResponseResultInfo, Schema.Null]),
      ),
    }).pipe(Schema.encodeKeys({ result: "result", resultInfo: "result_info" })),
  ) as unknown as Schema.Codec<ListUserSchemasResponse>;

export type ListUserSchemasError = DefaultErrors | ZonePurged | Forbidden;

export const listUserSchemas: API.PaginatedOperationMethod<
  ListUserSchemasRequest,
  ListUserSchemasResponse,
  ListUserSchemasError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: ListUserSchemasRequest,
  output: ListUserSchemasResponse,
  errors: [ZonePurged, Forbidden],
  pagination: {
    mode: "page",
    inputToken: "page",
    outputToken: "resultInfo.page",
    items: "result",
    pageSize: "perPage",
  } as const,
}));

export interface CreateUserSchemaRequest {
  /** Path param: Identifier. */
  zoneId: string;
  /** Body param: Schema file bytes */
  file: File | Blob;
  /** Body param: Kind of schema */
  kind: "openapi_v3";
  /** Body param: Name of the schema */
  name?: string;
  /** Body param: Flag whether schema is enabled for validation. */
  validationEnabled?: boolean;
}

export const CreateUserSchemaRequest =
  /*@__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      zoneId: Schema.String.pipe(T.HttpPath("zone_id")),
      file: UploadableSchema.pipe(T.HttpFormDataFile()),
      kind: Schema.Literal("openapi_v3"),
      name: Schema.optional(Schema.String),
      validationEnabled: Schema.optional(Schema.Boolean),
    }).pipe(
      Schema.encodeKeys({
        file: "file",
        kind: "kind",
        name: "name",
        validationEnabled: "validation_enabled",
      }),
      T.Http({
        method: "POST",
        path: "/zones/{zone_id}/api_gateway/user_schemas",
        contentType: "multipart",
      }),
    ),
  ) as unknown as Schema.Codec<CreateUserSchemaRequest>;

export interface CreateUserSchemaResponse {
  schema: {
    createdAt: string;
    kind: "openapi_v3";
    name: string;
    schemaId: string;
    source?: string | null;
    validationEnabled?: boolean | null;
  };
  uploadDetails?: {
    warnings?:
      | { code: number; locations?: string[] | null; message?: string | null }[]
      | null;
  } | null;
}

export const CreateUserSchemaResponse =
  /*@__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      schema: ListUserSchemasResponseResult,
      uploadDetails: Schema.optional(
        Schema.Union([UploadDetails, Schema.Null]),
      ),
    })
      .pipe(
        Schema.encodeKeys({
          schema: "schema",
          uploadDetails: "upload_details",
        }),
      )
      .pipe(T.ResponsePath("result")),
  ) as unknown as Schema.Codec<CreateUserSchemaResponse>;

export type CreateUserSchemaError =
  | DefaultErrors
  | InvalidObjectIdentifier
  | Forbidden;

export const createUserSchema: API.OperationMethod<
  CreateUserSchemaRequest,
  CreateUserSchemaResponse,
  CreateUserSchemaError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: CreateUserSchemaRequest,
  output: CreateUserSchemaResponse,
  errors: [InvalidObjectIdentifier, Forbidden],
}));

export interface PatchUserSchemaRequest {
  schemaId: string;
  /** Path param: Identifier. */
  zoneId: string;
  /** Body param: Flag whether schema is enabled for validation. */
  validationEnabled?: true;
}

export const PatchUserSchemaRequest =
  /*@__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      schemaId: Schema.String.pipe(T.HttpPath("schemaId")),
      zoneId: Schema.String.pipe(T.HttpPath("zone_id")),
      validationEnabled: Schema.optional(Schema.Literal(true)),
    }).pipe(
      Schema.encodeKeys({ validationEnabled: "validation_enabled" }),
      T.Http({
        method: "PATCH",
        path: "/zones/{zone_id}/api_gateway/user_schemas/{schemaId}",
      }),
    ),
  ) as unknown as Schema.Codec<PatchUserSchemaRequest>;

export interface PatchUserSchemaResponse {
  createdAt: string;
  /** Kind of schema */
  kind: "openapi_v3";
  /** Name of the schema */
  name: string;
  /** UUID. */
  schemaId: string;
  /** Source of the schema */
  source?: string | null;
  /** Flag whether schema is enabled for validation. */
  validationEnabled?: boolean | null;
}

export const PatchUserSchemaResponse =
  /*@__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      createdAt: Schema.String,
      kind: Schema.Literal("openapi_v3"),
      name: Schema.String,
      schemaId: Schema.String,
      source: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
      validationEnabled: Schema.optional(
        Schema.Union([Schema.Boolean, Schema.Null]),
      ),
    })
      .pipe(
        Schema.encodeKeys({
          createdAt: "created_at",
          kind: "kind",
          name: "name",
          schemaId: "schema_id",
          source: "source",
          validationEnabled: "validation_enabled",
        }),
      )
      .pipe(T.ResponsePath("result")),
  ) as unknown as Schema.Codec<PatchUserSchemaResponse>;

export type PatchUserSchemaError =
  | DefaultErrors
  | InvalidObjectIdentifier
  | SchemaNotFound
  | Forbidden;

export const patchUserSchema: API.OperationMethod<
  PatchUserSchemaRequest,
  PatchUserSchemaResponse,
  PatchUserSchemaError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: PatchUserSchemaRequest,
  output: PatchUserSchemaResponse,
  errors: [InvalidObjectIdentifier, SchemaNotFound, Forbidden],
}));

export interface DeleteUserSchemaRequest {
  schemaId: string;
  /** Identifier. */
  zoneId: string;
}

export const DeleteUserSchemaRequest =
  /*@__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      schemaId: Schema.String.pipe(T.HttpPath("schemaId")),
      zoneId: Schema.String.pipe(T.HttpPath("zone_id")),
    }).pipe(
      T.Http({
        method: "DELETE",
        path: "/zones/{zone_id}/api_gateway/user_schemas/{schemaId}",
      }),
    ),
  ) as unknown as Schema.Codec<DeleteUserSchemaRequest>;

export interface DeleteUserSchemaResponse {
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

export const DeleteUserSchemaResponse =
  /*@__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      errors: Schema.Array(MessageItem),
      messages: Schema.Array(MessageItem),
      success: Schema.Literal(true),
    }),
  ) as unknown as Schema.Codec<DeleteUserSchemaResponse>;

export type DeleteUserSchemaError =
  | DefaultErrors
  | InvalidObjectIdentifier
  | SchemaNotFound
  | Forbidden;

export const deleteUserSchema: API.OperationMethod<
  DeleteUserSchemaRequest,
  DeleteUserSchemaResponse,
  DeleteUserSchemaError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: DeleteUserSchemaRequest,
  output: DeleteUserSchemaResponse,
  errors: [InvalidObjectIdentifier, SchemaNotFound, Forbidden],
}));

// =============================================================================
// UserSchemaHost
// =============================================================================

export interface ListUserSchemaHostsRequest {
  /** Path param: Identifier. */
  zoneId: string;
  page?: number;
  perPage?: number;
}

export const ListUserSchemaHostsRequest =
  /*@__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      zoneId: Schema.String.pipe(T.HttpPath("zone_id")),
      page: Schema.optional(Schema.Number).pipe(T.HttpQuery("page")),
      perPage: Schema.optional(Schema.Number).pipe(T.HttpQuery("per_page")),
    }).pipe(
      T.Http({
        method: "GET",
        path: "/zones/{zone_id}/api_gateway/user_schemas/hosts",
      }),
    ),
  ) as unknown as Schema.Codec<ListUserSchemaHostsRequest>;

export interface ListUserSchemaHostsResponse {
  result: {
    createdAt: string;
    hosts: string[];
    name: string;
    schemaId: string;
  }[];
  resultInfo?: {
    count?: number | null;
    page?: number | null;
    perPage?: number | null;
    totalCount?: number | null;
  } | null;
}

export const ListUserSchemaHostsResponse =
  /*@__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      result: Schema.Array(ListUserSchemaHostsResponseResult),
      resultInfo: Schema.optional(
        Schema.Union([ListDiscoveryOperationsResponseResultInfo, Schema.Null]),
      ),
    }).pipe(Schema.encodeKeys({ result: "result", resultInfo: "result_info" })),
  ) as unknown as Schema.Codec<ListUserSchemaHostsResponse>;

export type ListUserSchemaHostsError = DefaultErrors;

export const listUserSchemaHosts: API.PaginatedOperationMethod<
  ListUserSchemaHostsRequest,
  ListUserSchemaHostsResponse,
  ListUserSchemaHostsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: ListUserSchemaHostsRequest,
  output: ListUserSchemaHostsResponse,
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
// UserSchemaOperation
// =============================================================================

export interface ListUserSchemaOperationsRequest {
  schemaId: string;
  /** Path param: Identifier. */
  zoneId: string;
  page?: number;
  perPage?: number;
  /** Query param: Filter results to only include endpoints containing this pattern. */
  endpoint?: string;
  /** Query param: Add feature(s) to the results. The feature name that is given here corresponds to the resulting feature object. Have a look at the top-level object description for more details on the spe */
  feature?: (
    | "thresholds"
    | "parameter_schemas"
    | "schema_info"
    | (string & {})
  )[];
  /** Query param: Filter results to only include the specified hosts. */
  host?: string[];
  /** Query param: Filter results to only include the specified HTTP methods. */
  method?: string[];
  /** Query param: Filter results by whether operations exist in API Shield Endpoint Management or not. `new` will just return operations from the schema that do not exist in API Shield Endpoint Management. */
  operationStatus?: "new" | "existing" | (string & {});
}

export const ListUserSchemaOperationsRequest =
  /*@__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      schemaId: Schema.String.pipe(T.HttpPath("schemaId")),
      zoneId: Schema.String.pipe(T.HttpPath("zone_id")),
      page: Schema.optional(Schema.Number).pipe(T.HttpQuery("page")),
      perPage: Schema.optional(Schema.Number).pipe(T.HttpQuery("per_page")),
      endpoint: Schema.optional(Schema.String).pipe(T.HttpQuery("endpoint")),
      feature: Schema.optional(
        Schema.Array(
          Schema.Union([
            Schema.Literals(["thresholds", "parameter_schemas", "schema_info"]),
            Schema.String,
          ]),
        ),
      ).pipe(T.HttpQuery("feature")),
      host: Schema.optional(Schema.Array(Schema.String)).pipe(
        T.HttpQuery("host"),
      ),
      method: Schema.optional(Schema.Array(Schema.String)).pipe(
        T.HttpQuery("method"),
      ),
      operationStatus: Schema.optional(
        Schema.Union([Schema.Literals(["new", "existing"]), Schema.String]),
      ).pipe(T.HttpQuery("operation_status")),
    }).pipe(
      T.Http({
        method: "GET",
        path: "/zones/{zone_id}/api_gateway/user_schemas/{schemaId}/operations",
      }),
    ),
  ) as unknown as Schema.Codec<ListUserSchemaOperationsRequest>;

export interface ListUserSchemaOperationsResponse {
  result: (
    | {
        endpoint: string;
        host: string;
        lastUpdated: string;
        method:
          | "GET"
          | "POST"
          | "HEAD"
          | "OPTIONS"
          | "PUT"
          | "DELETE"
          | "CONNECT"
          | "PATCH"
          | "TRACE"
          | (string & {});
        operationId: string;
        features?:
          | {
              thresholds?: {
                authIdTokens?: number | null;
                dataPoints?: number | null;
                lastUpdated?: string | null;
                p50?: number | null;
                p90?: number | null;
                p99?: number | null;
                periodSeconds?: number | null;
                requests?: number | null;
                suggestedThreshold?: number | null;
              } | null;
            }
          | {
              parameterSchemas: {
                lastUpdated?: string | null;
                parameterSchemas?: {
                  parameters?: unknown[] | null;
                  responses?: unknown | null;
                } | null;
              };
            }
          | {
              apiRouting?: {
                lastUpdated?: string | null;
                route?: string | null;
              } | null;
            }
          | {
              confidenceIntervals?: {
                lastUpdated?: string | null;
                suggestedThreshold?: {
                  confidenceIntervals?: {
                    p90?: {
                      lower?: number | null;
                      upper?: number | null;
                    } | null;
                    p95?: {
                      lower?: number | null;
                      upper?: number | null;
                    } | null;
                    p99?: {
                      lower?: number | null;
                      upper?: number | null;
                    } | null;
                  } | null;
                  mean?: number | null;
                } | null;
              } | null;
            }
          | {
              schemaInfo?: {
                activeSchema?: {
                  id?: string | null;
                  createdAt?: string | null;
                  isLearned?: boolean | null;
                  name?: string | null;
                } | null;
                learnedAvailable?: boolean | null;
                mitigationAction?: "none" | "log" | "block" | null;
              } | null;
            }
          | null;
      }
    | {
        endpoint: string;
        host: string;
        method:
          | "GET"
          | "POST"
          | "HEAD"
          | "OPTIONS"
          | "PUT"
          | "DELETE"
          | "CONNECT"
          | "PATCH"
          | "TRACE"
          | (string & {});
      }
  )[];
  resultInfo?: {
    count?: number | null;
    page?: number | null;
    perPage?: number | null;
    totalCount?: number | null;
  } | null;
}

export const ListUserSchemaOperationsResponse =
  /*@__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      result: Schema.Array(Schema.Union([ListOperationsResponseResult, Body2])),
      resultInfo: Schema.optional(
        Schema.Union([ListDiscoveryOperationsResponseResultInfo, Schema.Null]),
      ),
    }).pipe(Schema.encodeKeys({ result: "result", resultInfo: "result_info" })),
  ) as unknown as Schema.Codec<ListUserSchemaOperationsResponse>;

export type ListUserSchemaOperationsError = DefaultErrors;

export const listUserSchemaOperations: API.PaginatedOperationMethod<
  ListUserSchemaOperationsRequest,
  ListUserSchemaOperationsResponse,
  ListUserSchemaOperationsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: ListUserSchemaOperationsRequest,
  output: ListUserSchemaOperationsResponse,
  errors: [],
  pagination: {
    mode: "page",
    inputToken: "page",
    outputToken: "resultInfo.page",
    items: "result",
    pageSize: "perPage",
  } as const,
}));
