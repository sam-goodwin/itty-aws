// ==========================================================================
// Recommender API (recommender v1)
// DO NOT EDIT - Generated from GCP Discovery Document
// ==========================================================================

import * as Schema from "effect/Schema";
import * as API from "../client/api.ts";
import * as T from "../traits.ts";
import type { Credentials } from "../credentials.ts";
import type { DefaultErrors } from "../errors.ts";
import type * as HttpClient from "effect/unstable/http/HttpClient";

// Service metadata
const svc = T.Service({
  name: "recommender",
  version: "v1",
  rootUrl: "https://recommender.googleapis.com/",
  servicePath: "",
});

// ==========================================================================
// Schemas
// ==========================================================================

export interface GoogleCloudRecommenderV1RecommendationInsightReference {
  /** Insight resource name, e.g. projects/[PROJECT_NUMBER]/locations/[LOCATION]/insightTypes/[INSIGHT_TYPE_ID]/insights/[INSIGHT_ID] */
  insight?: string;
}

export const GoogleCloudRecommenderV1RecommendationInsightReference: Schema.Schema<GoogleCloudRecommenderV1RecommendationInsightReference> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    insight: Schema.optional(Schema.String),
  }).annotate({
    identifier: "GoogleCloudRecommenderV1RecommendationInsightReference",
  });

export interface GoogleCloudRecommenderV1InsightTypeGenerationConfig {
  /** Parameters for this InsightTypeGenerationConfig. These configs can be used by or are applied to all subtypes. */
  params?: Record<string, unknown>;
}

export const GoogleCloudRecommenderV1InsightTypeGenerationConfig: Schema.Schema<GoogleCloudRecommenderV1InsightTypeGenerationConfig> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    params: Schema.optional(Schema.Record(Schema.String, Schema.Unknown)),
  }).annotate({
    identifier: "GoogleCloudRecommenderV1InsightTypeGenerationConfig",
  });

export interface GoogleCloudRecommenderV1InsightTypeConfig {
  /** Identifier. Name of insight type config. Eg, projects/[PROJECT_NUMBER]/locations/[LOCATION]/insightTypes/[INSIGHT_TYPE_ID]/config */
  name?: string;
  /** Allows clients to store small amounts of arbitrary data. Annotations must follow the Kubernetes syntax. The total size of all keys and values combined is limited to 256k. Key can have 2 segments: prefix (optional) and name (required), separated by a slash (/). Prefix must be a DNS subdomain. Name must be 63 characters or less, begin and end with alphanumerics, with dashes (-), underscores (_), dots (.), and alphanumerics between. */
  annotations?: Record<string, string>;
  /** Last time when the config was updated. */
  updateTime?: string;
  /** Output only. Immutable. The revision ID of the config. A new revision is committed whenever the config is changed in any way. The format is an 8-character hexadecimal string. */
  revisionId?: string;
  /** InsightTypeGenerationConfig which configures the generation of insights for this insight type. */
  insightTypeGenerationConfig?: GoogleCloudRecommenderV1InsightTypeGenerationConfig;
  /** A user-settable field to provide a human-readable name to be used in user interfaces. */
  displayName?: string;
  /** Fingerprint of the InsightTypeConfig. Provides optimistic locking when updating. */
  etag?: string;
}

export const GoogleCloudRecommenderV1InsightTypeConfig: Schema.Schema<GoogleCloudRecommenderV1InsightTypeConfig> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.optional(Schema.String),
    annotations: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    updateTime: Schema.optional(Schema.String),
    revisionId: Schema.optional(Schema.String),
    insightTypeGenerationConfig: Schema.optional(
      GoogleCloudRecommenderV1InsightTypeGenerationConfig,
    ),
    displayName: Schema.optional(Schema.String),
    etag: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudRecommenderV1InsightTypeConfig" });

export interface GoogleTypeMoney {
  /** The three-letter currency code defined in ISO 4217. */
  currencyCode?: string;
  /** Number of nano (10^-9) units of the amount. The value must be between -999,999,999 and +999,999,999 inclusive. If `units` is positive, `nanos` must be positive or zero. If `units` is zero, `nanos` can be positive, zero, or negative. If `units` is negative, `nanos` must be negative or zero. For example $-1.75 is represented as `units`=-1 and `nanos`=-750,000,000. */
  nanos?: number;
  /** The whole units of the amount. For example if `currencyCode` is `"USD"`, then 1 unit is one US dollar. */
  units?: string;
}

export const GoogleTypeMoney: Schema.Schema<GoogleTypeMoney> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    currencyCode: Schema.optional(Schema.String),
    nanos: Schema.optional(Schema.Number),
    units: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleTypeMoney" });

export interface GoogleCloudRecommenderV1ReliabilityProjection {
  /** Reliability risks mitigated by this recommendation. */
  risks?: ReadonlyArray<
    | "RISK_TYPE_UNSPECIFIED"
    | "SERVICE_DISRUPTION"
    | "DATA_LOSS"
    | "ACCESS_DENY"
    | (string & {})
  >;
  /** Per-recommender projection. */
  details?: Record<string, unknown>;
}

export const GoogleCloudRecommenderV1ReliabilityProjection: Schema.Schema<GoogleCloudRecommenderV1ReliabilityProjection> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    risks: Schema.optional(Schema.Array(Schema.String)),
    details: Schema.optional(Schema.Record(Schema.String, Schema.Unknown)),
  }).annotate({ identifier: "GoogleCloudRecommenderV1ReliabilityProjection" });

export interface GoogleCloudRecommenderV1RecommenderGenerationConfig {
  /** Parameters for this RecommenderGenerationConfig. These configs can be used by or are applied to all subtypes. */
  params?: Record<string, unknown>;
}

export const GoogleCloudRecommenderV1RecommenderGenerationConfig: Schema.Schema<GoogleCloudRecommenderV1RecommenderGenerationConfig> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    params: Schema.optional(Schema.Record(Schema.String, Schema.Unknown)),
  }).annotate({
    identifier: "GoogleCloudRecommenderV1RecommenderGenerationConfig",
  });

export interface GoogleCloudRecommenderV1RecommenderConfig {
  /** Allows clients to store small amounts of arbitrary data. Annotations must follow the Kubernetes syntax. The total size of all keys and values combined is limited to 256k. Key can have 2 segments: prefix (optional) and name (required), separated by a slash (/). Prefix must be a DNS subdomain. Name must be 63 characters or less, begin and end with alphanumerics, with dashes (-), underscores (_), dots (.), and alphanumerics between. */
  annotations?: Record<string, string>;
  /** Identifier. Name of recommender config. Eg, projects/[PROJECT_NUMBER]/locations/[LOCATION]/recommenders/[RECOMMENDER_ID]/config */
  name?: string;
  /** RecommenderGenerationConfig which configures the Generation of recommendations for this recommender. */
  recommenderGenerationConfig?: GoogleCloudRecommenderV1RecommenderGenerationConfig;
  /** Last time when the config was updated. */
  updateTime?: string;
  /** Output only. Immutable. The revision ID of the config. A new revision is committed whenever the config is changed in any way. The format is an 8-character hexadecimal string. */
  revisionId?: string;
  /** Fingerprint of the RecommenderConfig. Provides optimistic locking when updating. */
  etag?: string;
  /** A user-settable field to provide a human-readable name to be used in user interfaces. */
  displayName?: string;
}

export const GoogleCloudRecommenderV1RecommenderConfig: Schema.Schema<GoogleCloudRecommenderV1RecommenderConfig> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    annotations: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    name: Schema.optional(Schema.String),
    recommenderGenerationConfig: Schema.optional(
      GoogleCloudRecommenderV1RecommenderGenerationConfig,
    ),
    updateTime: Schema.optional(Schema.String),
    revisionId: Schema.optional(Schema.String),
    etag: Schema.optional(Schema.String),
    displayName: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudRecommenderV1RecommenderConfig" });

export interface GoogleCloudRecommenderV1InsightRecommendationReference {
  /** Recommendation resource name, e.g. projects/[PROJECT_NUMBER]/locations/[LOCATION]/recommenders/[RECOMMENDER_ID]/recommendations/[RECOMMENDATION_ID] */
  recommendation?: string;
}

export const GoogleCloudRecommenderV1InsightRecommendationReference: Schema.Schema<GoogleCloudRecommenderV1InsightRecommendationReference> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    recommendation: Schema.optional(Schema.String),
  }).annotate({
    identifier: "GoogleCloudRecommenderV1InsightRecommendationReference",
  });

export interface GoogleCloudRecommenderV1InsightStateInfo {
  /** A map of metadata for the state, provided by user or automations systems. */
  stateMetadata?: Record<string, string>;
  /** Insight state. */
  state?:
    | "STATE_UNSPECIFIED"
    | "ACTIVE"
    | "ACCEPTED"
    | "DISMISSED"
    | (string & {});
}

export const GoogleCloudRecommenderV1InsightStateInfo: Schema.Schema<GoogleCloudRecommenderV1InsightStateInfo> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    stateMetadata: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    state: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudRecommenderV1InsightStateInfo" });

export interface GoogleCloudRecommenderV1Insight {
  /** A struct of custom fields to explain the insight. Example: "grantedPermissionsCount": "1000" */
  content?: Record<string, unknown>;
  /** Recommendations derived from this insight. */
  associatedRecommendations?: ReadonlyArray<GoogleCloudRecommenderV1InsightRecommendationReference>;
  /** Observation period that led to the insight. The source data used to generate the insight ends at last_refresh_time and begins at (last_refresh_time - observation_period). */
  observationPeriod?: string;
  /** Free-form human readable summary in English. The maximum length is 500 characters. */
  description?: string;
  /** Category being targeted by the insight. */
  category?:
    | "CATEGORY_UNSPECIFIED"
    | "COST"
    | "SECURITY"
    | "PERFORMANCE"
    | "MANAGEABILITY"
    | "SUSTAINABILITY"
    | "RELIABILITY"
    | (string & {});
  /** Insight's severity. */
  severity?:
    | "SEVERITY_UNSPECIFIED"
    | "LOW"
    | "MEDIUM"
    | "HIGH"
    | "CRITICAL"
    | (string & {});
  /** Timestamp of the latest data used to generate the insight. */
  lastRefreshTime?: string;
  /** Information state and metadata. */
  stateInfo?: GoogleCloudRecommenderV1InsightStateInfo;
  /** Fingerprint of the Insight. Provides optimistic locking when updating states. */
  etag?: string;
  /** Fully qualified resource names that this insight is targeting. */
  targetResources?: ReadonlyArray<string>;
  /** Insight subtype. Insight content schema will be stable for a given subtype. */
  insightSubtype?: string;
  /** Identifier. Name of the insight. */
  name?: string;
}

export const GoogleCloudRecommenderV1Insight: Schema.Schema<GoogleCloudRecommenderV1Insight> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    content: Schema.optional(Schema.Record(Schema.String, Schema.Unknown)),
    associatedRecommendations: Schema.optional(
      Schema.Array(GoogleCloudRecommenderV1InsightRecommendationReference),
    ),
    observationPeriod: Schema.optional(Schema.String),
    description: Schema.optional(Schema.String),
    category: Schema.optional(Schema.String),
    severity: Schema.optional(Schema.String),
    lastRefreshTime: Schema.optional(Schema.String),
    stateInfo: Schema.optional(GoogleCloudRecommenderV1InsightStateInfo),
    etag: Schema.optional(Schema.String),
    targetResources: Schema.optional(Schema.Array(Schema.String)),
    insightSubtype: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudRecommenderV1Insight" });

export interface GoogleCloudRecommenderV1MarkRecommendationClaimedRequest {
  /** State properties to include with this state. Overwrites any existing `state_metadata`. Keys must match the regex `/^a-z0-9{0,62}$/`. Values must match the regex `/^[a-zA-Z0-9_./-]{0,255}$/`. */
  stateMetadata?: Record<string, string>;
  /** Required. Fingerprint of the Recommendation. Provides optimistic locking. */
  etag?: string;
}

export const GoogleCloudRecommenderV1MarkRecommendationClaimedRequest: Schema.Schema<GoogleCloudRecommenderV1MarkRecommendationClaimedRequest> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    stateMetadata: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    etag: Schema.optional(Schema.String),
  }).annotate({
    identifier: "GoogleCloudRecommenderV1MarkRecommendationClaimedRequest",
  });

export interface GoogleCloudRecommenderV1MarkRecommendationFailedRequest {
  /** Required. Fingerprint of the Recommendation. Provides optimistic locking. */
  etag?: string;
  /** State properties to include with this state. Overwrites any existing `state_metadata`. Keys must match the regex `/^a-z0-9{0,62}$/`. Values must match the regex `/^[a-zA-Z0-9_./-]{0,255}$/`. */
  stateMetadata?: Record<string, string>;
}

export const GoogleCloudRecommenderV1MarkRecommendationFailedRequest: Schema.Schema<GoogleCloudRecommenderV1MarkRecommendationFailedRequest> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    etag: Schema.optional(Schema.String),
    stateMetadata: Schema.optional(Schema.Record(Schema.String, Schema.String)),
  }).annotate({
    identifier: "GoogleCloudRecommenderV1MarkRecommendationFailedRequest",
  });

export interface GoogleCloudRecommenderV1SustainabilityProjection {
  /** Carbon Footprint generated in kg of CO2 equivalent. Chose kg_c_o2e so that the name renders correctly in camelCase (kgCO2e). */
  kgCO2e?: number;
  /** Duration for which this sustainability applies. */
  duration?: string;
}

export const GoogleCloudRecommenderV1SustainabilityProjection: Schema.Schema<GoogleCloudRecommenderV1SustainabilityProjection> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    kgCO2e: Schema.optional(Schema.Number),
    duration: Schema.optional(Schema.String),
  }).annotate({
    identifier: "GoogleCloudRecommenderV1SustainabilityProjection",
  });

export interface GoogleCloudRecommenderV1ValueMatcher {
  /** To be used for full regex matching. The regular expression is using the Google RE2 syntax (https://github.com/google/re2/wiki/Syntax), so to be used with RE2::FullMatch */
  matchesPattern?: string;
}

export const GoogleCloudRecommenderV1ValueMatcher: Schema.Schema<GoogleCloudRecommenderV1ValueMatcher> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    matchesPattern: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudRecommenderV1ValueMatcher" });

export interface GoogleCloudRecommenderV1MarkRecommendationDismissedRequest {
  /** Fingerprint of the Recommendation. Provides optimistic locking. */
  etag?: string;
}

export const GoogleCloudRecommenderV1MarkRecommendationDismissedRequest: Schema.Schema<GoogleCloudRecommenderV1MarkRecommendationDismissedRequest> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    etag: Schema.optional(Schema.String),
  }).annotate({
    identifier: "GoogleCloudRecommenderV1MarkRecommendationDismissedRequest",
  });

export interface GoogleCloudRecommenderV1SecurityProjection {
  /** Additional security impact details that is provided by the recommender. */
  details?: Record<string, unknown>;
}

export const GoogleCloudRecommenderV1SecurityProjection: Schema.Schema<GoogleCloudRecommenderV1SecurityProjection> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    details: Schema.optional(Schema.Record(Schema.String, Schema.Unknown)),
  }).annotate({ identifier: "GoogleCloudRecommenderV1SecurityProjection" });

export interface GoogleCloudRecommenderV1CostProjection {
  /** An approximate projection on amount saved or amount incurred. Negative cost units indicate cost savings and positive cost units indicate increase. See google.type.Money documentation for positive/negative units. A user's permissions may affect whether the cost is computed using list prices or custom contract prices. */
  cost?: GoogleTypeMoney;
  /** The approximate cost savings in the billing account's local currency. */
  costInLocalCurrency?: GoogleTypeMoney;
  /** Duration for which this cost applies. */
  duration?: string;
}

export const GoogleCloudRecommenderV1CostProjection: Schema.Schema<GoogleCloudRecommenderV1CostProjection> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    cost: Schema.optional(GoogleTypeMoney),
    costInLocalCurrency: Schema.optional(GoogleTypeMoney),
    duration: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudRecommenderV1CostProjection" });

export interface GoogleCloudRecommenderV1Impact {
  /** Use with CategoryType.SECURITY */
  securityProjection?: GoogleCloudRecommenderV1SecurityProjection;
  /** Use with CategoryType.SUSTAINABILITY */
  sustainabilityProjection?: GoogleCloudRecommenderV1SustainabilityProjection;
  /** Category that is being targeted. */
  category?:
    | "CATEGORY_UNSPECIFIED"
    | "COST"
    | "SECURITY"
    | "PERFORMANCE"
    | "MANAGEABILITY"
    | "SUSTAINABILITY"
    | "RELIABILITY"
    | (string & {});
  /** Use with CategoryType.RELIABILITY */
  reliabilityProjection?: GoogleCloudRecommenderV1ReliabilityProjection;
  /** Use with CategoryType.COST */
  costProjection?: GoogleCloudRecommenderV1CostProjection;
  /** The service that this impact is associated with. */
  service?: string;
}

export const GoogleCloudRecommenderV1Impact: Schema.Schema<GoogleCloudRecommenderV1Impact> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    securityProjection: Schema.optional(
      GoogleCloudRecommenderV1SecurityProjection,
    ),
    sustainabilityProjection: Schema.optional(
      GoogleCloudRecommenderV1SustainabilityProjection,
    ),
    category: Schema.optional(Schema.String),
    reliabilityProjection: Schema.optional(
      GoogleCloudRecommenderV1ReliabilityProjection,
    ),
    costProjection: Schema.optional(GoogleCloudRecommenderV1CostProjection),
    service: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudRecommenderV1Impact" });

export interface GoogleCloudRecommenderV1RecommendationStateInfo {
  /** The state of the recommendation, Eg ACTIVE, SUCCEEDED, FAILED. */
  state?:
    | "STATE_UNSPECIFIED"
    | "ACTIVE"
    | "CLAIMED"
    | "SUCCEEDED"
    | "FAILED"
    | "DISMISSED"
    | (string & {});
  /** A map of metadata for the state, provided by user or automations systems. */
  stateMetadata?: Record<string, string>;
}

export const GoogleCloudRecommenderV1RecommendationStateInfo: Schema.Schema<GoogleCloudRecommenderV1RecommendationStateInfo> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    state: Schema.optional(Schema.String),
    stateMetadata: Schema.optional(Schema.Record(Schema.String, Schema.String)),
  }).annotate({
    identifier: "GoogleCloudRecommenderV1RecommendationStateInfo",
  });

export interface GoogleCloudRecommenderV1Operation {
  /** Type of this operation. Contains one of 'add', 'remove', 'replace', 'move', 'copy', 'test' and custom operations. This field is case-insensitive and always populated. */
  action?: string;
  /** Similar to path_filters, this contains set of filters to apply if `path` field refers to array elements. This is meant to support value matching beyond exact match. To perform exact match, use path_filters. When both path_filters and path_value_matchers are set, an implicit AND must be performed. */
  pathValueMatchers?: Record<string, GoogleCloudRecommenderV1ValueMatcher>;
  /** Contains the fully qualified resource name. This field is always populated. ex: //cloudresourcemanager.googleapis.com/projects/foo. */
  resource?: string;
  /** Can be set with action 'copy' to copy resource configuration across different resources of the same type. Example: A resource clone can be done via action = 'copy', path = "/", from = "/", source_resource = and resource_name = . This field is empty for all other values of `action`. */
  sourceResource?: string;
  /** Can be set for action 'test' for advanced matching for the value of 'path' field. Either this or `value` will be set for 'test' operation. */
  valueMatcher?: GoogleCloudRecommenderV1ValueMatcher;
  /** Path to the target field being operated on. If the operation is at the resource level, then path should be "/". This field is always populated. */
  path?: string;
  /** Can be set with action 'copy' or 'move' to indicate the source field within resource or source_resource, ignored if provided for other operation types. */
  sourcePath?: string;
  /** Type of GCP resource being modified/tested. This field is always populated. Example: cloudresourcemanager.googleapis.com/Project, compute.googleapis.com/Instance */
  resourceType?: string;
  /** Set of filters to apply if `path` refers to array elements or nested array elements in order to narrow down to a single unique element that is being tested/modified. This is intended to be an exact match per filter. To perform advanced matching, use path_value_matchers. * Example: ``` { "/versions/* /name" : "it-123" "/versions/* /targetSize/percent": 20 } ``` * Example: ``` { "/bindings/* /role": "roles/owner" "/bindings/* /condition" : null } ``` * Example: ``` { "/bindings/* /role": "roles/owner" "/bindings/* /members/*" : ["x@example.com", "y@example.com"] } ``` When both path_filters and path_value_matchers are set, an implicit AND must be performed. */
  pathFilters?: Record<string, unknown>;
  /** Value for the `path` field. Will be set for actions:'add'/'replace'. Maybe set for action: 'test'. Either this or `value_matcher` will be set for 'test' operation. An exact match must be performed. */
  value?: unknown;
}

export const GoogleCloudRecommenderV1Operation: Schema.Schema<GoogleCloudRecommenderV1Operation> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    action: Schema.optional(Schema.String),
    pathValueMatchers: Schema.optional(
      Schema.Record(Schema.String, GoogleCloudRecommenderV1ValueMatcher),
    ),
    resource: Schema.optional(Schema.String),
    sourceResource: Schema.optional(Schema.String),
    valueMatcher: Schema.optional(GoogleCloudRecommenderV1ValueMatcher),
    path: Schema.optional(Schema.String),
    sourcePath: Schema.optional(Schema.String),
    resourceType: Schema.optional(Schema.String),
    pathFilters: Schema.optional(Schema.Record(Schema.String, Schema.Unknown)),
    value: Schema.optional(Schema.Unknown),
  }).annotate({ identifier: "GoogleCloudRecommenderV1Operation" });

export interface GoogleCloudRecommenderV1OperationGroup {
  /** List of operations across one or more resources that belong to this group. Loosely based on RFC6902 and should be performed in the order they appear. */
  operations?: ReadonlyArray<GoogleCloudRecommenderV1Operation>;
}

export const GoogleCloudRecommenderV1OperationGroup: Schema.Schema<GoogleCloudRecommenderV1OperationGroup> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    operations: Schema.optional(
      Schema.Array(GoogleCloudRecommenderV1Operation),
    ),
  }).annotate({ identifier: "GoogleCloudRecommenderV1OperationGroup" });

export interface GoogleCloudRecommenderV1RecommendationContent {
  /** Operations to one or more Google Cloud resources grouped in such a way that, all operations within one group are expected to be performed atomically and in an order. */
  operationGroups?: ReadonlyArray<GoogleCloudRecommenderV1OperationGroup>;
  /** Condensed overview information about the recommendation. */
  overview?: Record<string, unknown>;
}

export const GoogleCloudRecommenderV1RecommendationContent: Schema.Schema<GoogleCloudRecommenderV1RecommendationContent> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    operationGroups: Schema.optional(
      Schema.Array(GoogleCloudRecommenderV1OperationGroup),
    ),
    overview: Schema.optional(Schema.Record(Schema.String, Schema.Unknown)),
  }).annotate({ identifier: "GoogleCloudRecommenderV1RecommendationContent" });

export interface GoogleCloudRecommenderV1Recommendation {
  /** Contains an identifier for a subtype of recommendations produced for the same recommender. Subtype is a function of content and impact, meaning a new subtype might be added when significant changes to `content` or `primary_impact.category` are introduced. See the Recommenders section to see a list of subtypes for a given Recommender. Examples: For recommender = "google.iam.policy.Recommender", recommender_subtype can be one of "REMOVE_ROLE"/"REPLACE_ROLE" */
  recommenderSubtype?: string;
  /** Fully qualified resource names that this recommendation is targeting. */
  targetResources?: ReadonlyArray<string>;
  /** The primary impact that this recommendation can have while trying to optimize for one category. */
  primaryImpact?: GoogleCloudRecommenderV1Impact;
  /** Information for state. Contains state and metadata. */
  stateInfo?: GoogleCloudRecommenderV1RecommendationStateInfo;
  /** Fingerprint of the Recommendation. Provides optimistic locking when updating states. */
  etag?: string;
  /** Corresponds to a mutually exclusive group ID within a recommender. A non-empty ID indicates that the recommendation belongs to a mutually exclusive group. This means that only one recommendation within the group is suggested to be applied. */
  xorGroupId?: string;
  /** Recommendation's priority. */
  priority?: "PRIORITY_UNSPECIFIED" | "P4" | "P3" | "P2" | "P1" | (string & {});
  /** Free-form human readable summary in English. The maximum length is 500 characters. */
  description?: string;
  /** Content of the recommendation describing recommended changes to resources. */
  content?: GoogleCloudRecommenderV1RecommendationContent;
  /** Insights that led to this recommendation. */
  associatedInsights?: ReadonlyArray<GoogleCloudRecommenderV1RecommendationInsightReference>;
  /** Optional set of additional impact that this recommendation may have when trying to optimize for the primary category. These may be positive or negative. */
  additionalImpact?: ReadonlyArray<GoogleCloudRecommenderV1Impact>;
  /** Identifier. Name of recommendation. */
  name?: string;
  /** Last time this recommendation was refreshed by the system that created it in the first place. */
  lastRefreshTime?: string;
}

export const GoogleCloudRecommenderV1Recommendation: Schema.Schema<GoogleCloudRecommenderV1Recommendation> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    recommenderSubtype: Schema.optional(Schema.String),
    targetResources: Schema.optional(Schema.Array(Schema.String)),
    primaryImpact: Schema.optional(GoogleCloudRecommenderV1Impact),
    stateInfo: Schema.optional(GoogleCloudRecommenderV1RecommendationStateInfo),
    etag: Schema.optional(Schema.String),
    xorGroupId: Schema.optional(Schema.String),
    priority: Schema.optional(Schema.String),
    description: Schema.optional(Schema.String),
    content: Schema.optional(GoogleCloudRecommenderV1RecommendationContent),
    associatedInsights: Schema.optional(
      Schema.Array(GoogleCloudRecommenderV1RecommendationInsightReference),
    ),
    additionalImpact: Schema.optional(
      Schema.Array(GoogleCloudRecommenderV1Impact),
    ),
    name: Schema.optional(Schema.String),
    lastRefreshTime: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudRecommenderV1Recommendation" });

export interface GoogleCloudRecommenderV1ListInsightsResponse {
  /** The set of insights for the `parent` resource. */
  insights?: ReadonlyArray<GoogleCloudRecommenderV1Insight>;
  /** A token that can be used to request the next page of results. This field is empty if there are no additional results. */
  nextPageToken?: string;
}

export const GoogleCloudRecommenderV1ListInsightsResponse: Schema.Schema<GoogleCloudRecommenderV1ListInsightsResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    insights: Schema.optional(Schema.Array(GoogleCloudRecommenderV1Insight)),
    nextPageToken: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudRecommenderV1ListInsightsResponse" });

export interface GoogleCloudRecommenderV1ListRecommendationsResponse {
  /** The set of recommendations for the `parent` resource. */
  recommendations?: ReadonlyArray<GoogleCloudRecommenderV1Recommendation>;
  /** A token that can be used to request the next page of results. This field is empty if there are no additional results. */
  nextPageToken?: string;
}

export const GoogleCloudRecommenderV1ListRecommendationsResponse: Schema.Schema<GoogleCloudRecommenderV1ListRecommendationsResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    recommendations: Schema.optional(
      Schema.Array(GoogleCloudRecommenderV1Recommendation),
    ),
    nextPageToken: Schema.optional(Schema.String),
  }).annotate({
    identifier: "GoogleCloudRecommenderV1ListRecommendationsResponse",
  });

export interface GoogleCloudRecommenderV1MarkRecommendationSucceededRequest {
  /** State properties to include with this state. Overwrites any existing `state_metadata`. Keys must match the regex `/^a-z0-9{0,62}$/`. Values must match the regex `/^[a-zA-Z0-9_./-]{0,255}$/`. */
  stateMetadata?: Record<string, string>;
  /** Required. Fingerprint of the Recommendation. Provides optimistic locking. */
  etag?: string;
}

export const GoogleCloudRecommenderV1MarkRecommendationSucceededRequest: Schema.Schema<GoogleCloudRecommenderV1MarkRecommendationSucceededRequest> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    stateMetadata: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    etag: Schema.optional(Schema.String),
  }).annotate({
    identifier: "GoogleCloudRecommenderV1MarkRecommendationSucceededRequest",
  });

export interface GoogleCloudRecommenderV1MarkInsightAcceptedRequest {
  /** Required. Fingerprint of the Insight. Provides optimistic locking. */
  etag?: string;
  /** Optional. State properties user wish to include with this state. Full replace of the current state_metadata. */
  stateMetadata?: Record<string, string>;
}

export const GoogleCloudRecommenderV1MarkInsightAcceptedRequest: Schema.Schema<GoogleCloudRecommenderV1MarkInsightAcceptedRequest> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    etag: Schema.optional(Schema.String),
    stateMetadata: Schema.optional(Schema.Record(Schema.String, Schema.String)),
  }).annotate({
    identifier: "GoogleCloudRecommenderV1MarkInsightAcceptedRequest",
  });

// ==========================================================================
// Errors
// ==========================================================================

export class NotFound extends Schema.TaggedErrorClass<NotFound>()("NotFound", {
  code: Schema.optional(Schema.Number),
  message: Schema.String,
  status: Schema.optional(Schema.String),
  reason: Schema.optional(Schema.String),
  domain: Schema.optional(Schema.String),
  details: Schema.optional(Schema.Array(Schema.Unknown)),
}) {}
T.applyErrorMatchers(NotFound, [{ httpStatus: 404 }]);

export class Forbidden extends Schema.TaggedErrorClass<Forbidden>()(
  "Forbidden",
  {
    code: Schema.optional(Schema.Number),
    message: Schema.String,
    status: Schema.optional(Schema.String),
    reason: Schema.optional(Schema.String),
    domain: Schema.optional(Schema.String),
    details: Schema.optional(Schema.Array(Schema.Unknown)),
  },
) {}
T.applyErrorMatchers(Forbidden, [{ httpStatus: 403 }]);

export class BadRequest extends Schema.TaggedErrorClass<BadRequest>()(
  "BadRequest",
  {
    code: Schema.optional(Schema.Number),
    message: Schema.String,
    status: Schema.optional(Schema.String),
    reason: Schema.optional(Schema.String),
    domain: Schema.optional(Schema.String),
    details: Schema.optional(Schema.Array(Schema.Unknown)),
  },
) {}
T.applyErrorMatchers(BadRequest, [{ httpStatus: 400 }]);

export class Conflict extends Schema.TaggedErrorClass<Conflict>()("Conflict", {
  code: Schema.optional(Schema.Number),
  message: Schema.String,
  status: Schema.optional(Schema.String),
  reason: Schema.optional(Schema.String),
  domain: Schema.optional(Schema.String),
  details: Schema.optional(Schema.Array(Schema.Unknown)),
}) {}
T.applyErrorMatchers(Conflict, [{ httpStatus: 409 }]);

// ==========================================================================
// Operations
// ==========================================================================

export interface GetConfigProjectsLocationsRecommendersRequest {
  /** Required. Name of the Recommendation Config to get. Acceptable formats: * `projects/[PROJECT_NUMBER]/locations/[LOCATION]/recommenders/[RECOMMENDER_ID]/config` * `projects/[PROJECT_ID]/locations/[LOCATION]/recommenders/[RECOMMENDER_ID]/config` * `organizations/[ORGANIZATION_ID]/locations/[LOCATION]/recommenders/[RECOMMENDER_ID]/config` * `billingAccounts/[BILLING_ACCOUNT_ID]/locations/[LOCATION]/recommenders/[RECOMMENDER_ID]/config` */
  name: string;
}

export const GetConfigProjectsLocationsRecommendersRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "GET", path: "v1/{+name}" }),
    svc,
  ) as unknown as Schema.Schema<GetConfigProjectsLocationsRecommendersRequest>;

export type GetConfigProjectsLocationsRecommendersResponse =
  GoogleCloudRecommenderV1RecommenderConfig;
export const GetConfigProjectsLocationsRecommendersResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleCloudRecommenderV1RecommenderConfig;

export type GetConfigProjectsLocationsRecommendersError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Gets the requested Recommender Config. There is only one instance of the config for each Recommender. */
export const getConfigProjectsLocationsRecommenders: API.OperationMethod<
  GetConfigProjectsLocationsRecommendersRequest,
  GetConfigProjectsLocationsRecommendersResponse,
  GetConfigProjectsLocationsRecommendersError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetConfigProjectsLocationsRecommendersRequest,
  output: GetConfigProjectsLocationsRecommendersResponse,
  errors: [NotFound, Forbidden],
}));

export interface UpdateConfigProjectsLocationsRecommendersRequest {
  /** If true, validate the request and preview the change, but do not actually update it. */
  validateOnly?: boolean;
  /** Identifier. Name of recommender config. Eg, projects/[PROJECT_NUMBER]/locations/[LOCATION]/recommenders/[RECOMMENDER_ID]/config */
  name: string;
  /** The list of fields to be updated. */
  updateMask?: string;
  /** Request body */
  body?: GoogleCloudRecommenderV1RecommenderConfig;
}

export const UpdateConfigProjectsLocationsRecommendersRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    validateOnly: Schema.optional(Schema.Boolean).pipe(
      T.HttpQuery("validateOnly"),
    ),
    name: Schema.String.pipe(T.HttpPath("name")),
    updateMask: Schema.optional(Schema.String).pipe(T.HttpQuery("updateMask")),
    body: Schema.optional(GoogleCloudRecommenderV1RecommenderConfig).pipe(
      T.HttpBody(),
    ),
  }).pipe(
    T.Http({ method: "PATCH", path: "v1/{+name}", hasBody: true }),
    svc,
  ) as unknown as Schema.Schema<UpdateConfigProjectsLocationsRecommendersRequest>;

export type UpdateConfigProjectsLocationsRecommendersResponse =
  GoogleCloudRecommenderV1RecommenderConfig;
export const UpdateConfigProjectsLocationsRecommendersResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleCloudRecommenderV1RecommenderConfig;

export type UpdateConfigProjectsLocationsRecommendersError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Updates a Recommender Config. This will create a new revision of the config. */
export const updateConfigProjectsLocationsRecommenders: API.OperationMethod<
  UpdateConfigProjectsLocationsRecommendersRequest,
  UpdateConfigProjectsLocationsRecommendersResponse,
  UpdateConfigProjectsLocationsRecommendersError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: UpdateConfigProjectsLocationsRecommendersRequest,
  output: UpdateConfigProjectsLocationsRecommendersResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface GetProjectsLocationsRecommendersRecommendationsRequest {
  /** Required. Name of the recommendation. */
  name: string;
}

export const GetProjectsLocationsRecommendersRecommendationsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "GET", path: "v1/{+name}" }),
    svc,
  ) as unknown as Schema.Schema<GetProjectsLocationsRecommendersRecommendationsRequest>;

export type GetProjectsLocationsRecommendersRecommendationsResponse =
  GoogleCloudRecommenderV1Recommendation;
export const GetProjectsLocationsRecommendersRecommendationsResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleCloudRecommenderV1Recommendation;

export type GetProjectsLocationsRecommendersRecommendationsError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Gets the requested recommendation. Requires the recommender.*.get IAM permission for the specified recommender. */
export const getProjectsLocationsRecommendersRecommendations: API.OperationMethod<
  GetProjectsLocationsRecommendersRecommendationsRequest,
  GetProjectsLocationsRecommendersRecommendationsResponse,
  GetProjectsLocationsRecommendersRecommendationsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetProjectsLocationsRecommendersRecommendationsRequest,
  output: GetProjectsLocationsRecommendersRecommendationsResponse,
  errors: [NotFound, Forbidden],
}));

export interface ListProjectsLocationsRecommendersRecommendationsRequest {
  /** Optional. The maximum number of results to return from this request. Non-positive values are ignored. If not specified, the server will determine the number of results to return. */
  pageSize?: number;
  /** Optional. If present, retrieves the next batch of results from the preceding call to this method. `page_token` must be the value of `next_page_token` from the previous response. The values of other method parameters must be identical to those in the previous call. */
  pageToken?: string;
  /** Required. The container resource on which to execute the request. Acceptable formats: * `projects/[PROJECT_NUMBER]/locations/[LOCATION]/recommenders/[RECOMMENDER_ID]` * `projects/[PROJECT_ID]/locations/[LOCATION]/recommenders/[RECOMMENDER_ID]` * `billingAccounts/[BILLING_ACCOUNT_ID]/locations/[LOCATION]/recommenders/[RECOMMENDER_ID]` * `folders/[FOLDER_ID]/locations/[LOCATION]/recommenders/[RECOMMENDER_ID]` * `organizations/[ORGANIZATION_ID]/locations/[LOCATION]/recommenders/[RECOMMENDER_ID]` LOCATION here refers to GCP Locations: https://cloud.google.com/about/locations/ RECOMMENDER_ID refers to supported recommenders: https://cloud.google.com/recommender/docs/recommenders. */
  parent: string;
  /** Filter expression to restrict the recommendations returned. Supported filter fields: * `state_info.state` * `recommenderSubtype` * `priority` * `targetResources` Examples: * `stateInfo.state = ACTIVE OR stateInfo.state = DISMISSED` * `recommenderSubtype = REMOVE_ROLE OR recommenderSubtype = REPLACE_ROLE` * `priority = P1 OR priority = P2` * `targetResources : //compute.googleapis.com/projects/1234/zones/us-central1-a/instances/instance-1` * `stateInfo.state = ACTIVE AND (priority = P1 OR priority = P2)` The max allowed filter length is 500 characters. (These expressions are based on the filter language described at https://google.aip.dev/160) */
  filter?: string;
}

export const ListProjectsLocationsRecommendersRecommendationsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
    parent: Schema.String.pipe(T.HttpPath("parent")),
    filter: Schema.optional(Schema.String).pipe(T.HttpQuery("filter")),
  }).pipe(
    T.Http({ method: "GET", path: "v1/{+parent}/recommendations" }),
    svc,
  ) as unknown as Schema.Schema<ListProjectsLocationsRecommendersRecommendationsRequest>;

export type ListProjectsLocationsRecommendersRecommendationsResponse =
  GoogleCloudRecommenderV1ListRecommendationsResponse;
export const ListProjectsLocationsRecommendersRecommendationsResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleCloudRecommenderV1ListRecommendationsResponse;

export type ListProjectsLocationsRecommendersRecommendationsError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Lists recommendations for the specified Cloud Resource. Requires the recommender.*.list IAM permission for the specified recommender. */
export const listProjectsLocationsRecommendersRecommendations: API.PaginatedOperationMethod<
  ListProjectsLocationsRecommendersRecommendationsRequest,
  ListProjectsLocationsRecommendersRecommendationsResponse,
  ListProjectsLocationsRecommendersRecommendationsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
  input: ListProjectsLocationsRecommendersRecommendationsRequest,
  output: ListProjectsLocationsRecommendersRecommendationsResponse,
  errors: [NotFound, Forbidden],
  pagination: {
    inputToken: "pageToken",
    outputToken: "nextPageToken",
  },
}));

export interface MarkDismissedProjectsLocationsRecommendersRecommendationsRequest {
  /** Required. Name of the recommendation. */
  name: string;
  /** Request body */
  body?: GoogleCloudRecommenderV1MarkRecommendationDismissedRequest;
}

export const MarkDismissedProjectsLocationsRecommendersRecommendationsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    body: Schema.optional(
      GoogleCloudRecommenderV1MarkRecommendationDismissedRequest,
    ).pipe(T.HttpBody()),
  }).pipe(
    T.Http({ method: "POST", path: "v1/{+name}:markDismissed", hasBody: true }),
    svc,
  ) as unknown as Schema.Schema<MarkDismissedProjectsLocationsRecommendersRecommendationsRequest>;

export type MarkDismissedProjectsLocationsRecommendersRecommendationsResponse =
  GoogleCloudRecommenderV1Recommendation;
export const MarkDismissedProjectsLocationsRecommendersRecommendationsResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleCloudRecommenderV1Recommendation;

export type MarkDismissedProjectsLocationsRecommendersRecommendationsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Mark the Recommendation State as Dismissed. Users can use this method to indicate to the Recommender API that an ACTIVE recommendation has to be marked back as DISMISSED. MarkRecommendationDismissed can be applied to recommendations in ACTIVE state. Requires the recommender.*.update IAM permission for the specified recommender. */
export const markDismissedProjectsLocationsRecommendersRecommendations: API.OperationMethod<
  MarkDismissedProjectsLocationsRecommendersRecommendationsRequest,
  MarkDismissedProjectsLocationsRecommendersRecommendationsResponse,
  MarkDismissedProjectsLocationsRecommendersRecommendationsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: MarkDismissedProjectsLocationsRecommendersRecommendationsRequest,
  output: MarkDismissedProjectsLocationsRecommendersRecommendationsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface MarkClaimedProjectsLocationsRecommendersRecommendationsRequest {
  /** Required. Name of the recommendation. */
  name: string;
  /** Request body */
  body?: GoogleCloudRecommenderV1MarkRecommendationClaimedRequest;
}

export const MarkClaimedProjectsLocationsRecommendersRecommendationsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    body: Schema.optional(
      GoogleCloudRecommenderV1MarkRecommendationClaimedRequest,
    ).pipe(T.HttpBody()),
  }).pipe(
    T.Http({ method: "POST", path: "v1/{+name}:markClaimed", hasBody: true }),
    svc,
  ) as unknown as Schema.Schema<MarkClaimedProjectsLocationsRecommendersRecommendationsRequest>;

export type MarkClaimedProjectsLocationsRecommendersRecommendationsResponse =
  GoogleCloudRecommenderV1Recommendation;
export const MarkClaimedProjectsLocationsRecommendersRecommendationsResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleCloudRecommenderV1Recommendation;

export type MarkClaimedProjectsLocationsRecommendersRecommendationsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Marks the Recommendation State as Claimed. Users can use this method to indicate to the Recommender API that they are starting to apply the recommendation themselves. This stops the recommendation content from being updated. Associated insights are frozen and placed in the ACCEPTED state. MarkRecommendationClaimed can be applied to recommendations in CLAIMED, SUCCEEDED, FAILED, or ACTIVE state. Requires the recommender.*.update IAM permission for the specified recommender. */
export const markClaimedProjectsLocationsRecommendersRecommendations: API.OperationMethod<
  MarkClaimedProjectsLocationsRecommendersRecommendationsRequest,
  MarkClaimedProjectsLocationsRecommendersRecommendationsResponse,
  MarkClaimedProjectsLocationsRecommendersRecommendationsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: MarkClaimedProjectsLocationsRecommendersRecommendationsRequest,
  output: MarkClaimedProjectsLocationsRecommendersRecommendationsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface MarkFailedProjectsLocationsRecommendersRecommendationsRequest {
  /** Required. Name of the recommendation. */
  name: string;
  /** Request body */
  body?: GoogleCloudRecommenderV1MarkRecommendationFailedRequest;
}

export const MarkFailedProjectsLocationsRecommendersRecommendationsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    body: Schema.optional(
      GoogleCloudRecommenderV1MarkRecommendationFailedRequest,
    ).pipe(T.HttpBody()),
  }).pipe(
    T.Http({ method: "POST", path: "v1/{+name}:markFailed", hasBody: true }),
    svc,
  ) as unknown as Schema.Schema<MarkFailedProjectsLocationsRecommendersRecommendationsRequest>;

export type MarkFailedProjectsLocationsRecommendersRecommendationsResponse =
  GoogleCloudRecommenderV1Recommendation;
export const MarkFailedProjectsLocationsRecommendersRecommendationsResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleCloudRecommenderV1Recommendation;

export type MarkFailedProjectsLocationsRecommendersRecommendationsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Marks the Recommendation State as Failed. Users can use this method to indicate to the Recommender API that they have applied the recommendation themselves, and the operation failed. This stops the recommendation content from being updated. Associated insights are frozen and placed in the ACCEPTED state. MarkRecommendationFailed can be applied to recommendations in ACTIVE, CLAIMED, SUCCEEDED, or FAILED state. Requires the recommender.*.update IAM permission for the specified recommender. */
export const markFailedProjectsLocationsRecommendersRecommendations: API.OperationMethod<
  MarkFailedProjectsLocationsRecommendersRecommendationsRequest,
  MarkFailedProjectsLocationsRecommendersRecommendationsResponse,
  MarkFailedProjectsLocationsRecommendersRecommendationsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: MarkFailedProjectsLocationsRecommendersRecommendationsRequest,
  output: MarkFailedProjectsLocationsRecommendersRecommendationsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface MarkSucceededProjectsLocationsRecommendersRecommendationsRequest {
  /** Required. Name of the recommendation. */
  name: string;
  /** Request body */
  body?: GoogleCloudRecommenderV1MarkRecommendationSucceededRequest;
}

export const MarkSucceededProjectsLocationsRecommendersRecommendationsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    body: Schema.optional(
      GoogleCloudRecommenderV1MarkRecommendationSucceededRequest,
    ).pipe(T.HttpBody()),
  }).pipe(
    T.Http({ method: "POST", path: "v1/{+name}:markSucceeded", hasBody: true }),
    svc,
  ) as unknown as Schema.Schema<MarkSucceededProjectsLocationsRecommendersRecommendationsRequest>;

export type MarkSucceededProjectsLocationsRecommendersRecommendationsResponse =
  GoogleCloudRecommenderV1Recommendation;
export const MarkSucceededProjectsLocationsRecommendersRecommendationsResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleCloudRecommenderV1Recommendation;

export type MarkSucceededProjectsLocationsRecommendersRecommendationsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Marks the Recommendation State as Succeeded. Users can use this method to indicate to the Recommender API that they have applied the recommendation themselves, and the operation was successful. This stops the recommendation content from being updated. Associated insights are frozen and placed in the ACCEPTED state. MarkRecommendationSucceeded can be applied to recommendations in ACTIVE, CLAIMED, SUCCEEDED, or FAILED state. Requires the recommender.*.update IAM permission for the specified recommender. */
export const markSucceededProjectsLocationsRecommendersRecommendations: API.OperationMethod<
  MarkSucceededProjectsLocationsRecommendersRecommendationsRequest,
  MarkSucceededProjectsLocationsRecommendersRecommendationsResponse,
  MarkSucceededProjectsLocationsRecommendersRecommendationsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: MarkSucceededProjectsLocationsRecommendersRecommendationsRequest,
  output: MarkSucceededProjectsLocationsRecommendersRecommendationsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface GetConfigProjectsLocationsInsightTypesRequest {
  /** Required. Name of the InsightTypeConfig to get. Acceptable formats: * `projects/[PROJECT_NUMBER]/locations/[LOCATION]/insightTypes/[INSIGHT_TYPE_ID]/config` * `projects/[PROJECT_ID]/locations/[LOCATION]/insightTypes/[INSIGHT_TYPE_ID]/config` * `organizations/[ORGANIZATION_ID]/locations/[LOCATION]/insightTypes/[INSIGHT_TYPE_ID]/config` * `billingAccounts/[BILLING_ACCOUNT_ID]/locations/[LOCATION]/insightTypes/[INSIGHT_TYPE_ID]/config` */
  name: string;
}

export const GetConfigProjectsLocationsInsightTypesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "GET", path: "v1/{+name}" }),
    svc,
  ) as unknown as Schema.Schema<GetConfigProjectsLocationsInsightTypesRequest>;

export type GetConfigProjectsLocationsInsightTypesResponse =
  GoogleCloudRecommenderV1InsightTypeConfig;
export const GetConfigProjectsLocationsInsightTypesResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleCloudRecommenderV1InsightTypeConfig;

export type GetConfigProjectsLocationsInsightTypesError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Gets the requested InsightTypeConfig. There is only one instance of the config for each InsightType. */
export const getConfigProjectsLocationsInsightTypes: API.OperationMethod<
  GetConfigProjectsLocationsInsightTypesRequest,
  GetConfigProjectsLocationsInsightTypesResponse,
  GetConfigProjectsLocationsInsightTypesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetConfigProjectsLocationsInsightTypesRequest,
  output: GetConfigProjectsLocationsInsightTypesResponse,
  errors: [NotFound, Forbidden],
}));

export interface UpdateConfigProjectsLocationsInsightTypesRequest {
  /** If true, validate the request and preview the change, but do not actually update it. */
  validateOnly?: boolean;
  /** Identifier. Name of insight type config. Eg, projects/[PROJECT_NUMBER]/locations/[LOCATION]/insightTypes/[INSIGHT_TYPE_ID]/config */
  name: string;
  /** The list of fields to be updated. */
  updateMask?: string;
  /** Request body */
  body?: GoogleCloudRecommenderV1InsightTypeConfig;
}

export const UpdateConfigProjectsLocationsInsightTypesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    validateOnly: Schema.optional(Schema.Boolean).pipe(
      T.HttpQuery("validateOnly"),
    ),
    name: Schema.String.pipe(T.HttpPath("name")),
    updateMask: Schema.optional(Schema.String).pipe(T.HttpQuery("updateMask")),
    body: Schema.optional(GoogleCloudRecommenderV1InsightTypeConfig).pipe(
      T.HttpBody(),
    ),
  }).pipe(
    T.Http({ method: "PATCH", path: "v1/{+name}", hasBody: true }),
    svc,
  ) as unknown as Schema.Schema<UpdateConfigProjectsLocationsInsightTypesRequest>;

export type UpdateConfigProjectsLocationsInsightTypesResponse =
  GoogleCloudRecommenderV1InsightTypeConfig;
export const UpdateConfigProjectsLocationsInsightTypesResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleCloudRecommenderV1InsightTypeConfig;

export type UpdateConfigProjectsLocationsInsightTypesError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Updates an InsightTypeConfig change. This will create a new revision of the config. */
export const updateConfigProjectsLocationsInsightTypes: API.OperationMethod<
  UpdateConfigProjectsLocationsInsightTypesRequest,
  UpdateConfigProjectsLocationsInsightTypesResponse,
  UpdateConfigProjectsLocationsInsightTypesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: UpdateConfigProjectsLocationsInsightTypesRequest,
  output: UpdateConfigProjectsLocationsInsightTypesResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface ListProjectsLocationsInsightTypesInsightsRequest {
  /** Optional. Filter expression to restrict the insights returned. Supported filter fields: * `stateInfo.state` * `insightSubtype` * `severity` * `targetResources` Examples: * `stateInfo.state = ACTIVE OR stateInfo.state = DISMISSED` * `insightSubtype = PERMISSIONS_USAGE` * `severity = CRITICAL OR severity = HIGH` * `targetResources : //compute.googleapis.com/projects/1234/zones/us-central1-a/instances/instance-1` * `stateInfo.state = ACTIVE AND (severity = CRITICAL OR severity = HIGH)` The max allowed filter length is 500 characters. (These expressions are based on the filter language described at https://google.aip.dev/160) */
  filter?: string;
  /** Required. The container resource on which to execute the request. Acceptable formats: * `projects/[PROJECT_NUMBER]/locations/[LOCATION]/insightTypes/[INSIGHT_TYPE_ID]` * `projects/[PROJECT_ID]/locations/[LOCATION]/insightTypes/[INSIGHT_TYPE_ID]` * `billingAccounts/[BILLING_ACCOUNT_ID]/locations/[LOCATION]/insightTypes/[INSIGHT_TYPE_ID]` * `folders/[FOLDER_ID]/locations/[LOCATION]/insightTypes/[INSIGHT_TYPE_ID]` * `organizations/[ORGANIZATION_ID]/locations/[LOCATION]/insightTypes/[INSIGHT_TYPE_ID]` LOCATION here refers to GCP Locations: https://cloud.google.com/about/locations/ INSIGHT_TYPE_ID refers to supported insight types: https://cloud.google.com/recommender/docs/insights/insight-types. */
  parent: string;
  /** Optional. If present, retrieves the next batch of results from the preceding call to this method. `page_token` must be the value of `next_page_token` from the previous response. The values of other method parameters must be identical to those in the previous call. */
  pageToken?: string;
  /** Optional. The maximum number of results to return from this request. Non-positive values are ignored. If not specified, the server will determine the number of results to return. */
  pageSize?: number;
}

export const ListProjectsLocationsInsightTypesInsightsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    filter: Schema.optional(Schema.String).pipe(T.HttpQuery("filter")),
    parent: Schema.String.pipe(T.HttpPath("parent")),
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
  }).pipe(
    T.Http({ method: "GET", path: "v1/{+parent}/insights" }),
    svc,
  ) as unknown as Schema.Schema<ListProjectsLocationsInsightTypesInsightsRequest>;

export type ListProjectsLocationsInsightTypesInsightsResponse =
  GoogleCloudRecommenderV1ListInsightsResponse;
export const ListProjectsLocationsInsightTypesInsightsResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleCloudRecommenderV1ListInsightsResponse;

export type ListProjectsLocationsInsightTypesInsightsError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Lists insights for the specified Cloud Resource. Requires the recommender.*.list IAM permission for the specified insight type. */
export const listProjectsLocationsInsightTypesInsights: API.PaginatedOperationMethod<
  ListProjectsLocationsInsightTypesInsightsRequest,
  ListProjectsLocationsInsightTypesInsightsResponse,
  ListProjectsLocationsInsightTypesInsightsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
  input: ListProjectsLocationsInsightTypesInsightsRequest,
  output: ListProjectsLocationsInsightTypesInsightsResponse,
  errors: [NotFound, Forbidden],
  pagination: {
    inputToken: "pageToken",
    outputToken: "nextPageToken",
  },
}));

export interface MarkAcceptedProjectsLocationsInsightTypesInsightsRequest {
  /** Required. Name of the insight. */
  name: string;
  /** Request body */
  body?: GoogleCloudRecommenderV1MarkInsightAcceptedRequest;
}

export const MarkAcceptedProjectsLocationsInsightTypesInsightsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    body: Schema.optional(
      GoogleCloudRecommenderV1MarkInsightAcceptedRequest,
    ).pipe(T.HttpBody()),
  }).pipe(
    T.Http({ method: "POST", path: "v1/{+name}:markAccepted", hasBody: true }),
    svc,
  ) as unknown as Schema.Schema<MarkAcceptedProjectsLocationsInsightTypesInsightsRequest>;

export type MarkAcceptedProjectsLocationsInsightTypesInsightsResponse =
  GoogleCloudRecommenderV1Insight;
export const MarkAcceptedProjectsLocationsInsightTypesInsightsResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleCloudRecommenderV1Insight;

export type MarkAcceptedProjectsLocationsInsightTypesInsightsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Marks the Insight State as Accepted. Users can use this method to indicate to the Recommender API that they have applied some action based on the insight. This stops the insight content from being updated. MarkInsightAccepted can be applied to insights in ACTIVE state. Requires the recommender.*.update IAM permission for the specified insight. */
export const markAcceptedProjectsLocationsInsightTypesInsights: API.OperationMethod<
  MarkAcceptedProjectsLocationsInsightTypesInsightsRequest,
  MarkAcceptedProjectsLocationsInsightTypesInsightsResponse,
  MarkAcceptedProjectsLocationsInsightTypesInsightsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: MarkAcceptedProjectsLocationsInsightTypesInsightsRequest,
  output: MarkAcceptedProjectsLocationsInsightTypesInsightsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface GetProjectsLocationsInsightTypesInsightsRequest {
  /** Required. Name of the insight. */
  name: string;
}

export const GetProjectsLocationsInsightTypesInsightsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "GET", path: "v1/{+name}" }),
    svc,
  ) as unknown as Schema.Schema<GetProjectsLocationsInsightTypesInsightsRequest>;

export type GetProjectsLocationsInsightTypesInsightsResponse =
  GoogleCloudRecommenderV1Insight;
export const GetProjectsLocationsInsightTypesInsightsResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleCloudRecommenderV1Insight;

export type GetProjectsLocationsInsightTypesInsightsError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Gets the requested insight. Requires the recommender.*.get IAM permission for the specified insight type. */
export const getProjectsLocationsInsightTypesInsights: API.OperationMethod<
  GetProjectsLocationsInsightTypesInsightsRequest,
  GetProjectsLocationsInsightTypesInsightsResponse,
  GetProjectsLocationsInsightTypesInsightsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetProjectsLocationsInsightTypesInsightsRequest,
  output: GetProjectsLocationsInsightTypesInsightsResponse,
  errors: [NotFound, Forbidden],
}));

export interface ListFoldersLocationsInsightTypesInsightsRequest {
  /** Required. The container resource on which to execute the request. Acceptable formats: * `projects/[PROJECT_NUMBER]/locations/[LOCATION]/insightTypes/[INSIGHT_TYPE_ID]` * `projects/[PROJECT_ID]/locations/[LOCATION]/insightTypes/[INSIGHT_TYPE_ID]` * `billingAccounts/[BILLING_ACCOUNT_ID]/locations/[LOCATION]/insightTypes/[INSIGHT_TYPE_ID]` * `folders/[FOLDER_ID]/locations/[LOCATION]/insightTypes/[INSIGHT_TYPE_ID]` * `organizations/[ORGANIZATION_ID]/locations/[LOCATION]/insightTypes/[INSIGHT_TYPE_ID]` LOCATION here refers to GCP Locations: https://cloud.google.com/about/locations/ INSIGHT_TYPE_ID refers to supported insight types: https://cloud.google.com/recommender/docs/insights/insight-types. */
  parent: string;
  /** Optional. Filter expression to restrict the insights returned. Supported filter fields: * `stateInfo.state` * `insightSubtype` * `severity` * `targetResources` Examples: * `stateInfo.state = ACTIVE OR stateInfo.state = DISMISSED` * `insightSubtype = PERMISSIONS_USAGE` * `severity = CRITICAL OR severity = HIGH` * `targetResources : //compute.googleapis.com/projects/1234/zones/us-central1-a/instances/instance-1` * `stateInfo.state = ACTIVE AND (severity = CRITICAL OR severity = HIGH)` The max allowed filter length is 500 characters. (These expressions are based on the filter language described at https://google.aip.dev/160) */
  filter?: string;
  /** Optional. The maximum number of results to return from this request. Non-positive values are ignored. If not specified, the server will determine the number of results to return. */
  pageSize?: number;
  /** Optional. If present, retrieves the next batch of results from the preceding call to this method. `page_token` must be the value of `next_page_token` from the previous response. The values of other method parameters must be identical to those in the previous call. */
  pageToken?: string;
}

export const ListFoldersLocationsInsightTypesInsightsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    parent: Schema.String.pipe(T.HttpPath("parent")),
    filter: Schema.optional(Schema.String).pipe(T.HttpQuery("filter")),
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
  }).pipe(
    T.Http({ method: "GET", path: "v1/{+parent}/insights" }),
    svc,
  ) as unknown as Schema.Schema<ListFoldersLocationsInsightTypesInsightsRequest>;

export type ListFoldersLocationsInsightTypesInsightsResponse =
  GoogleCloudRecommenderV1ListInsightsResponse;
export const ListFoldersLocationsInsightTypesInsightsResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleCloudRecommenderV1ListInsightsResponse;

export type ListFoldersLocationsInsightTypesInsightsError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Lists insights for the specified Cloud Resource. Requires the recommender.*.list IAM permission for the specified insight type. */
export const listFoldersLocationsInsightTypesInsights: API.PaginatedOperationMethod<
  ListFoldersLocationsInsightTypesInsightsRequest,
  ListFoldersLocationsInsightTypesInsightsResponse,
  ListFoldersLocationsInsightTypesInsightsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
  input: ListFoldersLocationsInsightTypesInsightsRequest,
  output: ListFoldersLocationsInsightTypesInsightsResponse,
  errors: [NotFound, Forbidden],
  pagination: {
    inputToken: "pageToken",
    outputToken: "nextPageToken",
  },
}));

export interface MarkAcceptedFoldersLocationsInsightTypesInsightsRequest {
  /** Required. Name of the insight. */
  name: string;
  /** Request body */
  body?: GoogleCloudRecommenderV1MarkInsightAcceptedRequest;
}

export const MarkAcceptedFoldersLocationsInsightTypesInsightsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    body: Schema.optional(
      GoogleCloudRecommenderV1MarkInsightAcceptedRequest,
    ).pipe(T.HttpBody()),
  }).pipe(
    T.Http({ method: "POST", path: "v1/{+name}:markAccepted", hasBody: true }),
    svc,
  ) as unknown as Schema.Schema<MarkAcceptedFoldersLocationsInsightTypesInsightsRequest>;

export type MarkAcceptedFoldersLocationsInsightTypesInsightsResponse =
  GoogleCloudRecommenderV1Insight;
export const MarkAcceptedFoldersLocationsInsightTypesInsightsResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleCloudRecommenderV1Insight;

export type MarkAcceptedFoldersLocationsInsightTypesInsightsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Marks the Insight State as Accepted. Users can use this method to indicate to the Recommender API that they have applied some action based on the insight. This stops the insight content from being updated. MarkInsightAccepted can be applied to insights in ACTIVE state. Requires the recommender.*.update IAM permission for the specified insight. */
export const markAcceptedFoldersLocationsInsightTypesInsights: API.OperationMethod<
  MarkAcceptedFoldersLocationsInsightTypesInsightsRequest,
  MarkAcceptedFoldersLocationsInsightTypesInsightsResponse,
  MarkAcceptedFoldersLocationsInsightTypesInsightsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: MarkAcceptedFoldersLocationsInsightTypesInsightsRequest,
  output: MarkAcceptedFoldersLocationsInsightTypesInsightsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface GetFoldersLocationsInsightTypesInsightsRequest {
  /** Required. Name of the insight. */
  name: string;
}

export const GetFoldersLocationsInsightTypesInsightsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "GET", path: "v1/{+name}" }),
    svc,
  ) as unknown as Schema.Schema<GetFoldersLocationsInsightTypesInsightsRequest>;

export type GetFoldersLocationsInsightTypesInsightsResponse =
  GoogleCloudRecommenderV1Insight;
export const GetFoldersLocationsInsightTypesInsightsResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleCloudRecommenderV1Insight;

export type GetFoldersLocationsInsightTypesInsightsError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Gets the requested insight. Requires the recommender.*.get IAM permission for the specified insight type. */
export const getFoldersLocationsInsightTypesInsights: API.OperationMethod<
  GetFoldersLocationsInsightTypesInsightsRequest,
  GetFoldersLocationsInsightTypesInsightsResponse,
  GetFoldersLocationsInsightTypesInsightsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetFoldersLocationsInsightTypesInsightsRequest,
  output: GetFoldersLocationsInsightTypesInsightsResponse,
  errors: [NotFound, Forbidden],
}));

export interface GetFoldersLocationsRecommendersRecommendationsRequest {
  /** Required. Name of the recommendation. */
  name: string;
}

export const GetFoldersLocationsRecommendersRecommendationsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "GET", path: "v1/{+name}" }),
    svc,
  ) as unknown as Schema.Schema<GetFoldersLocationsRecommendersRecommendationsRequest>;

export type GetFoldersLocationsRecommendersRecommendationsResponse =
  GoogleCloudRecommenderV1Recommendation;
export const GetFoldersLocationsRecommendersRecommendationsResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleCloudRecommenderV1Recommendation;

export type GetFoldersLocationsRecommendersRecommendationsError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Gets the requested recommendation. Requires the recommender.*.get IAM permission for the specified recommender. */
export const getFoldersLocationsRecommendersRecommendations: API.OperationMethod<
  GetFoldersLocationsRecommendersRecommendationsRequest,
  GetFoldersLocationsRecommendersRecommendationsResponse,
  GetFoldersLocationsRecommendersRecommendationsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetFoldersLocationsRecommendersRecommendationsRequest,
  output: GetFoldersLocationsRecommendersRecommendationsResponse,
  errors: [NotFound, Forbidden],
}));

export interface ListFoldersLocationsRecommendersRecommendationsRequest {
  /** Filter expression to restrict the recommendations returned. Supported filter fields: * `state_info.state` * `recommenderSubtype` * `priority` * `targetResources` Examples: * `stateInfo.state = ACTIVE OR stateInfo.state = DISMISSED` * `recommenderSubtype = REMOVE_ROLE OR recommenderSubtype = REPLACE_ROLE` * `priority = P1 OR priority = P2` * `targetResources : //compute.googleapis.com/projects/1234/zones/us-central1-a/instances/instance-1` * `stateInfo.state = ACTIVE AND (priority = P1 OR priority = P2)` The max allowed filter length is 500 characters. (These expressions are based on the filter language described at https://google.aip.dev/160) */
  filter?: string;
  /** Required. The container resource on which to execute the request. Acceptable formats: * `projects/[PROJECT_NUMBER]/locations/[LOCATION]/recommenders/[RECOMMENDER_ID]` * `projects/[PROJECT_ID]/locations/[LOCATION]/recommenders/[RECOMMENDER_ID]` * `billingAccounts/[BILLING_ACCOUNT_ID]/locations/[LOCATION]/recommenders/[RECOMMENDER_ID]` * `folders/[FOLDER_ID]/locations/[LOCATION]/recommenders/[RECOMMENDER_ID]` * `organizations/[ORGANIZATION_ID]/locations/[LOCATION]/recommenders/[RECOMMENDER_ID]` LOCATION here refers to GCP Locations: https://cloud.google.com/about/locations/ RECOMMENDER_ID refers to supported recommenders: https://cloud.google.com/recommender/docs/recommenders. */
  parent: string;
  /** Optional. If present, retrieves the next batch of results from the preceding call to this method. `page_token` must be the value of `next_page_token` from the previous response. The values of other method parameters must be identical to those in the previous call. */
  pageToken?: string;
  /** Optional. The maximum number of results to return from this request. Non-positive values are ignored. If not specified, the server will determine the number of results to return. */
  pageSize?: number;
}

export const ListFoldersLocationsRecommendersRecommendationsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    filter: Schema.optional(Schema.String).pipe(T.HttpQuery("filter")),
    parent: Schema.String.pipe(T.HttpPath("parent")),
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
  }).pipe(
    T.Http({ method: "GET", path: "v1/{+parent}/recommendations" }),
    svc,
  ) as unknown as Schema.Schema<ListFoldersLocationsRecommendersRecommendationsRequest>;

export type ListFoldersLocationsRecommendersRecommendationsResponse =
  GoogleCloudRecommenderV1ListRecommendationsResponse;
export const ListFoldersLocationsRecommendersRecommendationsResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleCloudRecommenderV1ListRecommendationsResponse;

export type ListFoldersLocationsRecommendersRecommendationsError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Lists recommendations for the specified Cloud Resource. Requires the recommender.*.list IAM permission for the specified recommender. */
export const listFoldersLocationsRecommendersRecommendations: API.PaginatedOperationMethod<
  ListFoldersLocationsRecommendersRecommendationsRequest,
  ListFoldersLocationsRecommendersRecommendationsResponse,
  ListFoldersLocationsRecommendersRecommendationsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
  input: ListFoldersLocationsRecommendersRecommendationsRequest,
  output: ListFoldersLocationsRecommendersRecommendationsResponse,
  errors: [NotFound, Forbidden],
  pagination: {
    inputToken: "pageToken",
    outputToken: "nextPageToken",
  },
}));

export interface MarkSucceededFoldersLocationsRecommendersRecommendationsRequest {
  /** Required. Name of the recommendation. */
  name: string;
  /** Request body */
  body?: GoogleCloudRecommenderV1MarkRecommendationSucceededRequest;
}

export const MarkSucceededFoldersLocationsRecommendersRecommendationsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    body: Schema.optional(
      GoogleCloudRecommenderV1MarkRecommendationSucceededRequest,
    ).pipe(T.HttpBody()),
  }).pipe(
    T.Http({ method: "POST", path: "v1/{+name}:markSucceeded", hasBody: true }),
    svc,
  ) as unknown as Schema.Schema<MarkSucceededFoldersLocationsRecommendersRecommendationsRequest>;

export type MarkSucceededFoldersLocationsRecommendersRecommendationsResponse =
  GoogleCloudRecommenderV1Recommendation;
export const MarkSucceededFoldersLocationsRecommendersRecommendationsResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleCloudRecommenderV1Recommendation;

export type MarkSucceededFoldersLocationsRecommendersRecommendationsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Marks the Recommendation State as Succeeded. Users can use this method to indicate to the Recommender API that they have applied the recommendation themselves, and the operation was successful. This stops the recommendation content from being updated. Associated insights are frozen and placed in the ACCEPTED state. MarkRecommendationSucceeded can be applied to recommendations in ACTIVE, CLAIMED, SUCCEEDED, or FAILED state. Requires the recommender.*.update IAM permission for the specified recommender. */
export const markSucceededFoldersLocationsRecommendersRecommendations: API.OperationMethod<
  MarkSucceededFoldersLocationsRecommendersRecommendationsRequest,
  MarkSucceededFoldersLocationsRecommendersRecommendationsResponse,
  MarkSucceededFoldersLocationsRecommendersRecommendationsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: MarkSucceededFoldersLocationsRecommendersRecommendationsRequest,
  output: MarkSucceededFoldersLocationsRecommendersRecommendationsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface MarkDismissedFoldersLocationsRecommendersRecommendationsRequest {
  /** Required. Name of the recommendation. */
  name: string;
  /** Request body */
  body?: GoogleCloudRecommenderV1MarkRecommendationDismissedRequest;
}

export const MarkDismissedFoldersLocationsRecommendersRecommendationsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    body: Schema.optional(
      GoogleCloudRecommenderV1MarkRecommendationDismissedRequest,
    ).pipe(T.HttpBody()),
  }).pipe(
    T.Http({ method: "POST", path: "v1/{+name}:markDismissed", hasBody: true }),
    svc,
  ) as unknown as Schema.Schema<MarkDismissedFoldersLocationsRecommendersRecommendationsRequest>;

export type MarkDismissedFoldersLocationsRecommendersRecommendationsResponse =
  GoogleCloudRecommenderV1Recommendation;
export const MarkDismissedFoldersLocationsRecommendersRecommendationsResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleCloudRecommenderV1Recommendation;

export type MarkDismissedFoldersLocationsRecommendersRecommendationsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Mark the Recommendation State as Dismissed. Users can use this method to indicate to the Recommender API that an ACTIVE recommendation has to be marked back as DISMISSED. MarkRecommendationDismissed can be applied to recommendations in ACTIVE state. Requires the recommender.*.update IAM permission for the specified recommender. */
export const markDismissedFoldersLocationsRecommendersRecommendations: API.OperationMethod<
  MarkDismissedFoldersLocationsRecommendersRecommendationsRequest,
  MarkDismissedFoldersLocationsRecommendersRecommendationsResponse,
  MarkDismissedFoldersLocationsRecommendersRecommendationsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: MarkDismissedFoldersLocationsRecommendersRecommendationsRequest,
  output: MarkDismissedFoldersLocationsRecommendersRecommendationsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface MarkClaimedFoldersLocationsRecommendersRecommendationsRequest {
  /** Required. Name of the recommendation. */
  name: string;
  /** Request body */
  body?: GoogleCloudRecommenderV1MarkRecommendationClaimedRequest;
}

export const MarkClaimedFoldersLocationsRecommendersRecommendationsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    body: Schema.optional(
      GoogleCloudRecommenderV1MarkRecommendationClaimedRequest,
    ).pipe(T.HttpBody()),
  }).pipe(
    T.Http({ method: "POST", path: "v1/{+name}:markClaimed", hasBody: true }),
    svc,
  ) as unknown as Schema.Schema<MarkClaimedFoldersLocationsRecommendersRecommendationsRequest>;

export type MarkClaimedFoldersLocationsRecommendersRecommendationsResponse =
  GoogleCloudRecommenderV1Recommendation;
export const MarkClaimedFoldersLocationsRecommendersRecommendationsResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleCloudRecommenderV1Recommendation;

export type MarkClaimedFoldersLocationsRecommendersRecommendationsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Marks the Recommendation State as Claimed. Users can use this method to indicate to the Recommender API that they are starting to apply the recommendation themselves. This stops the recommendation content from being updated. Associated insights are frozen and placed in the ACCEPTED state. MarkRecommendationClaimed can be applied to recommendations in CLAIMED, SUCCEEDED, FAILED, or ACTIVE state. Requires the recommender.*.update IAM permission for the specified recommender. */
export const markClaimedFoldersLocationsRecommendersRecommendations: API.OperationMethod<
  MarkClaimedFoldersLocationsRecommendersRecommendationsRequest,
  MarkClaimedFoldersLocationsRecommendersRecommendationsResponse,
  MarkClaimedFoldersLocationsRecommendersRecommendationsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: MarkClaimedFoldersLocationsRecommendersRecommendationsRequest,
  output: MarkClaimedFoldersLocationsRecommendersRecommendationsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface MarkFailedFoldersLocationsRecommendersRecommendationsRequest {
  /** Required. Name of the recommendation. */
  name: string;
  /** Request body */
  body?: GoogleCloudRecommenderV1MarkRecommendationFailedRequest;
}

export const MarkFailedFoldersLocationsRecommendersRecommendationsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    body: Schema.optional(
      GoogleCloudRecommenderV1MarkRecommendationFailedRequest,
    ).pipe(T.HttpBody()),
  }).pipe(
    T.Http({ method: "POST", path: "v1/{+name}:markFailed", hasBody: true }),
    svc,
  ) as unknown as Schema.Schema<MarkFailedFoldersLocationsRecommendersRecommendationsRequest>;

export type MarkFailedFoldersLocationsRecommendersRecommendationsResponse =
  GoogleCloudRecommenderV1Recommendation;
export const MarkFailedFoldersLocationsRecommendersRecommendationsResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleCloudRecommenderV1Recommendation;

export type MarkFailedFoldersLocationsRecommendersRecommendationsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Marks the Recommendation State as Failed. Users can use this method to indicate to the Recommender API that they have applied the recommendation themselves, and the operation failed. This stops the recommendation content from being updated. Associated insights are frozen and placed in the ACCEPTED state. MarkRecommendationFailed can be applied to recommendations in ACTIVE, CLAIMED, SUCCEEDED, or FAILED state. Requires the recommender.*.update IAM permission for the specified recommender. */
export const markFailedFoldersLocationsRecommendersRecommendations: API.OperationMethod<
  MarkFailedFoldersLocationsRecommendersRecommendationsRequest,
  MarkFailedFoldersLocationsRecommendersRecommendationsResponse,
  MarkFailedFoldersLocationsRecommendersRecommendationsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: MarkFailedFoldersLocationsRecommendersRecommendationsRequest,
  output: MarkFailedFoldersLocationsRecommendersRecommendationsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface GetConfigBillingAccountsLocationsRecommendersRequest {
  /** Required. Name of the Recommendation Config to get. Acceptable formats: * `projects/[PROJECT_NUMBER]/locations/[LOCATION]/recommenders/[RECOMMENDER_ID]/config` * `projects/[PROJECT_ID]/locations/[LOCATION]/recommenders/[RECOMMENDER_ID]/config` * `organizations/[ORGANIZATION_ID]/locations/[LOCATION]/recommenders/[RECOMMENDER_ID]/config` * `billingAccounts/[BILLING_ACCOUNT_ID]/locations/[LOCATION]/recommenders/[RECOMMENDER_ID]/config` */
  name: string;
}

export const GetConfigBillingAccountsLocationsRecommendersRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "GET", path: "v1/{+name}" }),
    svc,
  ) as unknown as Schema.Schema<GetConfigBillingAccountsLocationsRecommendersRequest>;

export type GetConfigBillingAccountsLocationsRecommendersResponse =
  GoogleCloudRecommenderV1RecommenderConfig;
export const GetConfigBillingAccountsLocationsRecommendersResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleCloudRecommenderV1RecommenderConfig;

export type GetConfigBillingAccountsLocationsRecommendersError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Gets the requested Recommender Config. There is only one instance of the config for each Recommender. */
export const getConfigBillingAccountsLocationsRecommenders: API.OperationMethod<
  GetConfigBillingAccountsLocationsRecommendersRequest,
  GetConfigBillingAccountsLocationsRecommendersResponse,
  GetConfigBillingAccountsLocationsRecommendersError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetConfigBillingAccountsLocationsRecommendersRequest,
  output: GetConfigBillingAccountsLocationsRecommendersResponse,
  errors: [NotFound, Forbidden],
}));

export interface UpdateConfigBillingAccountsLocationsRecommendersRequest {
  /** If true, validate the request and preview the change, but do not actually update it. */
  validateOnly?: boolean;
  /** Identifier. Name of recommender config. Eg, projects/[PROJECT_NUMBER]/locations/[LOCATION]/recommenders/[RECOMMENDER_ID]/config */
  name: string;
  /** The list of fields to be updated. */
  updateMask?: string;
  /** Request body */
  body?: GoogleCloudRecommenderV1RecommenderConfig;
}

export const UpdateConfigBillingAccountsLocationsRecommendersRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    validateOnly: Schema.optional(Schema.Boolean).pipe(
      T.HttpQuery("validateOnly"),
    ),
    name: Schema.String.pipe(T.HttpPath("name")),
    updateMask: Schema.optional(Schema.String).pipe(T.HttpQuery("updateMask")),
    body: Schema.optional(GoogleCloudRecommenderV1RecommenderConfig).pipe(
      T.HttpBody(),
    ),
  }).pipe(
    T.Http({ method: "PATCH", path: "v1/{+name}", hasBody: true }),
    svc,
  ) as unknown as Schema.Schema<UpdateConfigBillingAccountsLocationsRecommendersRequest>;

export type UpdateConfigBillingAccountsLocationsRecommendersResponse =
  GoogleCloudRecommenderV1RecommenderConfig;
export const UpdateConfigBillingAccountsLocationsRecommendersResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleCloudRecommenderV1RecommenderConfig;

export type UpdateConfigBillingAccountsLocationsRecommendersError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Updates a Recommender Config. This will create a new revision of the config. */
export const updateConfigBillingAccountsLocationsRecommenders: API.OperationMethod<
  UpdateConfigBillingAccountsLocationsRecommendersRequest,
  UpdateConfigBillingAccountsLocationsRecommendersResponse,
  UpdateConfigBillingAccountsLocationsRecommendersError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: UpdateConfigBillingAccountsLocationsRecommendersRequest,
  output: UpdateConfigBillingAccountsLocationsRecommendersResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface MarkDismissedBillingAccountsLocationsRecommendersRecommendationsRequest {
  /** Required. Name of the recommendation. */
  name: string;
  /** Request body */
  body?: GoogleCloudRecommenderV1MarkRecommendationDismissedRequest;
}

export const MarkDismissedBillingAccountsLocationsRecommendersRecommendationsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    body: Schema.optional(
      GoogleCloudRecommenderV1MarkRecommendationDismissedRequest,
    ).pipe(T.HttpBody()),
  }).pipe(
    T.Http({ method: "POST", path: "v1/{+name}:markDismissed", hasBody: true }),
    svc,
  ) as unknown as Schema.Schema<MarkDismissedBillingAccountsLocationsRecommendersRecommendationsRequest>;

export type MarkDismissedBillingAccountsLocationsRecommendersRecommendationsResponse =
  GoogleCloudRecommenderV1Recommendation;
export const MarkDismissedBillingAccountsLocationsRecommendersRecommendationsResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleCloudRecommenderV1Recommendation;

export type MarkDismissedBillingAccountsLocationsRecommendersRecommendationsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Mark the Recommendation State as Dismissed. Users can use this method to indicate to the Recommender API that an ACTIVE recommendation has to be marked back as DISMISSED. MarkRecommendationDismissed can be applied to recommendations in ACTIVE state. Requires the recommender.*.update IAM permission for the specified recommender. */
export const markDismissedBillingAccountsLocationsRecommendersRecommendations: API.OperationMethod<
  MarkDismissedBillingAccountsLocationsRecommendersRecommendationsRequest,
  MarkDismissedBillingAccountsLocationsRecommendersRecommendationsResponse,
  MarkDismissedBillingAccountsLocationsRecommendersRecommendationsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input:
    MarkDismissedBillingAccountsLocationsRecommendersRecommendationsRequest,
  output:
    MarkDismissedBillingAccountsLocationsRecommendersRecommendationsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface MarkClaimedBillingAccountsLocationsRecommendersRecommendationsRequest {
  /** Required. Name of the recommendation. */
  name: string;
  /** Request body */
  body?: GoogleCloudRecommenderV1MarkRecommendationClaimedRequest;
}

export const MarkClaimedBillingAccountsLocationsRecommendersRecommendationsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    body: Schema.optional(
      GoogleCloudRecommenderV1MarkRecommendationClaimedRequest,
    ).pipe(T.HttpBody()),
  }).pipe(
    T.Http({ method: "POST", path: "v1/{+name}:markClaimed", hasBody: true }),
    svc,
  ) as unknown as Schema.Schema<MarkClaimedBillingAccountsLocationsRecommendersRecommendationsRequest>;

export type MarkClaimedBillingAccountsLocationsRecommendersRecommendationsResponse =
  GoogleCloudRecommenderV1Recommendation;
export const MarkClaimedBillingAccountsLocationsRecommendersRecommendationsResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleCloudRecommenderV1Recommendation;

export type MarkClaimedBillingAccountsLocationsRecommendersRecommendationsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Marks the Recommendation State as Claimed. Users can use this method to indicate to the Recommender API that they are starting to apply the recommendation themselves. This stops the recommendation content from being updated. Associated insights are frozen and placed in the ACCEPTED state. MarkRecommendationClaimed can be applied to recommendations in CLAIMED, SUCCEEDED, FAILED, or ACTIVE state. Requires the recommender.*.update IAM permission for the specified recommender. */
export const markClaimedBillingAccountsLocationsRecommendersRecommendations: API.OperationMethod<
  MarkClaimedBillingAccountsLocationsRecommendersRecommendationsRequest,
  MarkClaimedBillingAccountsLocationsRecommendersRecommendationsResponse,
  MarkClaimedBillingAccountsLocationsRecommendersRecommendationsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: MarkClaimedBillingAccountsLocationsRecommendersRecommendationsRequest,
  output:
    MarkClaimedBillingAccountsLocationsRecommendersRecommendationsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface MarkFailedBillingAccountsLocationsRecommendersRecommendationsRequest {
  /** Required. Name of the recommendation. */
  name: string;
  /** Request body */
  body?: GoogleCloudRecommenderV1MarkRecommendationFailedRequest;
}

export const MarkFailedBillingAccountsLocationsRecommendersRecommendationsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    body: Schema.optional(
      GoogleCloudRecommenderV1MarkRecommendationFailedRequest,
    ).pipe(T.HttpBody()),
  }).pipe(
    T.Http({ method: "POST", path: "v1/{+name}:markFailed", hasBody: true }),
    svc,
  ) as unknown as Schema.Schema<MarkFailedBillingAccountsLocationsRecommendersRecommendationsRequest>;

export type MarkFailedBillingAccountsLocationsRecommendersRecommendationsResponse =
  GoogleCloudRecommenderV1Recommendation;
export const MarkFailedBillingAccountsLocationsRecommendersRecommendationsResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleCloudRecommenderV1Recommendation;

export type MarkFailedBillingAccountsLocationsRecommendersRecommendationsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Marks the Recommendation State as Failed. Users can use this method to indicate to the Recommender API that they have applied the recommendation themselves, and the operation failed. This stops the recommendation content from being updated. Associated insights are frozen and placed in the ACCEPTED state. MarkRecommendationFailed can be applied to recommendations in ACTIVE, CLAIMED, SUCCEEDED, or FAILED state. Requires the recommender.*.update IAM permission for the specified recommender. */
export const markFailedBillingAccountsLocationsRecommendersRecommendations: API.OperationMethod<
  MarkFailedBillingAccountsLocationsRecommendersRecommendationsRequest,
  MarkFailedBillingAccountsLocationsRecommendersRecommendationsResponse,
  MarkFailedBillingAccountsLocationsRecommendersRecommendationsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: MarkFailedBillingAccountsLocationsRecommendersRecommendationsRequest,
  output: MarkFailedBillingAccountsLocationsRecommendersRecommendationsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface MarkSucceededBillingAccountsLocationsRecommendersRecommendationsRequest {
  /** Required. Name of the recommendation. */
  name: string;
  /** Request body */
  body?: GoogleCloudRecommenderV1MarkRecommendationSucceededRequest;
}

export const MarkSucceededBillingAccountsLocationsRecommendersRecommendationsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    body: Schema.optional(
      GoogleCloudRecommenderV1MarkRecommendationSucceededRequest,
    ).pipe(T.HttpBody()),
  }).pipe(
    T.Http({ method: "POST", path: "v1/{+name}:markSucceeded", hasBody: true }),
    svc,
  ) as unknown as Schema.Schema<MarkSucceededBillingAccountsLocationsRecommendersRecommendationsRequest>;

export type MarkSucceededBillingAccountsLocationsRecommendersRecommendationsResponse =
  GoogleCloudRecommenderV1Recommendation;
export const MarkSucceededBillingAccountsLocationsRecommendersRecommendationsResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleCloudRecommenderV1Recommendation;

export type MarkSucceededBillingAccountsLocationsRecommendersRecommendationsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Marks the Recommendation State as Succeeded. Users can use this method to indicate to the Recommender API that they have applied the recommendation themselves, and the operation was successful. This stops the recommendation content from being updated. Associated insights are frozen and placed in the ACCEPTED state. MarkRecommendationSucceeded can be applied to recommendations in ACTIVE, CLAIMED, SUCCEEDED, or FAILED state. Requires the recommender.*.update IAM permission for the specified recommender. */
export const markSucceededBillingAccountsLocationsRecommendersRecommendations: API.OperationMethod<
  MarkSucceededBillingAccountsLocationsRecommendersRecommendationsRequest,
  MarkSucceededBillingAccountsLocationsRecommendersRecommendationsResponse,
  MarkSucceededBillingAccountsLocationsRecommendersRecommendationsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input:
    MarkSucceededBillingAccountsLocationsRecommendersRecommendationsRequest,
  output:
    MarkSucceededBillingAccountsLocationsRecommendersRecommendationsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface GetBillingAccountsLocationsRecommendersRecommendationsRequest {
  /** Required. Name of the recommendation. */
  name: string;
}

export const GetBillingAccountsLocationsRecommendersRecommendationsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "GET", path: "v1/{+name}" }),
    svc,
  ) as unknown as Schema.Schema<GetBillingAccountsLocationsRecommendersRecommendationsRequest>;

export type GetBillingAccountsLocationsRecommendersRecommendationsResponse =
  GoogleCloudRecommenderV1Recommendation;
export const GetBillingAccountsLocationsRecommendersRecommendationsResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleCloudRecommenderV1Recommendation;

export type GetBillingAccountsLocationsRecommendersRecommendationsError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Gets the requested recommendation. Requires the recommender.*.get IAM permission for the specified recommender. */
export const getBillingAccountsLocationsRecommendersRecommendations: API.OperationMethod<
  GetBillingAccountsLocationsRecommendersRecommendationsRequest,
  GetBillingAccountsLocationsRecommendersRecommendationsResponse,
  GetBillingAccountsLocationsRecommendersRecommendationsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetBillingAccountsLocationsRecommendersRecommendationsRequest,
  output: GetBillingAccountsLocationsRecommendersRecommendationsResponse,
  errors: [NotFound, Forbidden],
}));

export interface ListBillingAccountsLocationsRecommendersRecommendationsRequest {
  /** Required. The container resource on which to execute the request. Acceptable formats: * `projects/[PROJECT_NUMBER]/locations/[LOCATION]/recommenders/[RECOMMENDER_ID]` * `projects/[PROJECT_ID]/locations/[LOCATION]/recommenders/[RECOMMENDER_ID]` * `billingAccounts/[BILLING_ACCOUNT_ID]/locations/[LOCATION]/recommenders/[RECOMMENDER_ID]` * `folders/[FOLDER_ID]/locations/[LOCATION]/recommenders/[RECOMMENDER_ID]` * `organizations/[ORGANIZATION_ID]/locations/[LOCATION]/recommenders/[RECOMMENDER_ID]` LOCATION here refers to GCP Locations: https://cloud.google.com/about/locations/ RECOMMENDER_ID refers to supported recommenders: https://cloud.google.com/recommender/docs/recommenders. */
  parent: string;
  /** Filter expression to restrict the recommendations returned. Supported filter fields: * `state_info.state` * `recommenderSubtype` * `priority` * `targetResources` Examples: * `stateInfo.state = ACTIVE OR stateInfo.state = DISMISSED` * `recommenderSubtype = REMOVE_ROLE OR recommenderSubtype = REPLACE_ROLE` * `priority = P1 OR priority = P2` * `targetResources : //compute.googleapis.com/projects/1234/zones/us-central1-a/instances/instance-1` * `stateInfo.state = ACTIVE AND (priority = P1 OR priority = P2)` The max allowed filter length is 500 characters. (These expressions are based on the filter language described at https://google.aip.dev/160) */
  filter?: string;
  /** Optional. The maximum number of results to return from this request. Non-positive values are ignored. If not specified, the server will determine the number of results to return. */
  pageSize?: number;
  /** Optional. If present, retrieves the next batch of results from the preceding call to this method. `page_token` must be the value of `next_page_token` from the previous response. The values of other method parameters must be identical to those in the previous call. */
  pageToken?: string;
}

export const ListBillingAccountsLocationsRecommendersRecommendationsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    parent: Schema.String.pipe(T.HttpPath("parent")),
    filter: Schema.optional(Schema.String).pipe(T.HttpQuery("filter")),
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
  }).pipe(
    T.Http({ method: "GET", path: "v1/{+parent}/recommendations" }),
    svc,
  ) as unknown as Schema.Schema<ListBillingAccountsLocationsRecommendersRecommendationsRequest>;

export type ListBillingAccountsLocationsRecommendersRecommendationsResponse =
  GoogleCloudRecommenderV1ListRecommendationsResponse;
export const ListBillingAccountsLocationsRecommendersRecommendationsResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleCloudRecommenderV1ListRecommendationsResponse;

export type ListBillingAccountsLocationsRecommendersRecommendationsError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Lists recommendations for the specified Cloud Resource. Requires the recommender.*.list IAM permission for the specified recommender. */
export const listBillingAccountsLocationsRecommendersRecommendations: API.PaginatedOperationMethod<
  ListBillingAccountsLocationsRecommendersRecommendationsRequest,
  ListBillingAccountsLocationsRecommendersRecommendationsResponse,
  ListBillingAccountsLocationsRecommendersRecommendationsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
  input: ListBillingAccountsLocationsRecommendersRecommendationsRequest,
  output: ListBillingAccountsLocationsRecommendersRecommendationsResponse,
  errors: [NotFound, Forbidden],
  pagination: {
    inputToken: "pageToken",
    outputToken: "nextPageToken",
  },
}));

export interface GetConfigBillingAccountsLocationsInsightTypesRequest {
  /** Required. Name of the InsightTypeConfig to get. Acceptable formats: * `projects/[PROJECT_NUMBER]/locations/[LOCATION]/insightTypes/[INSIGHT_TYPE_ID]/config` * `projects/[PROJECT_ID]/locations/[LOCATION]/insightTypes/[INSIGHT_TYPE_ID]/config` * `organizations/[ORGANIZATION_ID]/locations/[LOCATION]/insightTypes/[INSIGHT_TYPE_ID]/config` * `billingAccounts/[BILLING_ACCOUNT_ID]/locations/[LOCATION]/insightTypes/[INSIGHT_TYPE_ID]/config` */
  name: string;
}

export const GetConfigBillingAccountsLocationsInsightTypesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "GET", path: "v1/{+name}" }),
    svc,
  ) as unknown as Schema.Schema<GetConfigBillingAccountsLocationsInsightTypesRequest>;

export type GetConfigBillingAccountsLocationsInsightTypesResponse =
  GoogleCloudRecommenderV1InsightTypeConfig;
export const GetConfigBillingAccountsLocationsInsightTypesResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleCloudRecommenderV1InsightTypeConfig;

export type GetConfigBillingAccountsLocationsInsightTypesError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Gets the requested InsightTypeConfig. There is only one instance of the config for each InsightType. */
export const getConfigBillingAccountsLocationsInsightTypes: API.OperationMethod<
  GetConfigBillingAccountsLocationsInsightTypesRequest,
  GetConfigBillingAccountsLocationsInsightTypesResponse,
  GetConfigBillingAccountsLocationsInsightTypesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetConfigBillingAccountsLocationsInsightTypesRequest,
  output: GetConfigBillingAccountsLocationsInsightTypesResponse,
  errors: [NotFound, Forbidden],
}));

export interface UpdateConfigBillingAccountsLocationsInsightTypesRequest {
  /** Identifier. Name of insight type config. Eg, projects/[PROJECT_NUMBER]/locations/[LOCATION]/insightTypes/[INSIGHT_TYPE_ID]/config */
  name: string;
  /** The list of fields to be updated. */
  updateMask?: string;
  /** If true, validate the request and preview the change, but do not actually update it. */
  validateOnly?: boolean;
  /** Request body */
  body?: GoogleCloudRecommenderV1InsightTypeConfig;
}

export const UpdateConfigBillingAccountsLocationsInsightTypesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    updateMask: Schema.optional(Schema.String).pipe(T.HttpQuery("updateMask")),
    validateOnly: Schema.optional(Schema.Boolean).pipe(
      T.HttpQuery("validateOnly"),
    ),
    body: Schema.optional(GoogleCloudRecommenderV1InsightTypeConfig).pipe(
      T.HttpBody(),
    ),
  }).pipe(
    T.Http({ method: "PATCH", path: "v1/{+name}", hasBody: true }),
    svc,
  ) as unknown as Schema.Schema<UpdateConfigBillingAccountsLocationsInsightTypesRequest>;

export type UpdateConfigBillingAccountsLocationsInsightTypesResponse =
  GoogleCloudRecommenderV1InsightTypeConfig;
export const UpdateConfigBillingAccountsLocationsInsightTypesResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleCloudRecommenderV1InsightTypeConfig;

export type UpdateConfigBillingAccountsLocationsInsightTypesError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Updates an InsightTypeConfig change. This will create a new revision of the config. */
export const updateConfigBillingAccountsLocationsInsightTypes: API.OperationMethod<
  UpdateConfigBillingAccountsLocationsInsightTypesRequest,
  UpdateConfigBillingAccountsLocationsInsightTypesResponse,
  UpdateConfigBillingAccountsLocationsInsightTypesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: UpdateConfigBillingAccountsLocationsInsightTypesRequest,
  output: UpdateConfigBillingAccountsLocationsInsightTypesResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface ListBillingAccountsLocationsInsightTypesInsightsRequest {
  /** Required. The container resource on which to execute the request. Acceptable formats: * `projects/[PROJECT_NUMBER]/locations/[LOCATION]/insightTypes/[INSIGHT_TYPE_ID]` * `projects/[PROJECT_ID]/locations/[LOCATION]/insightTypes/[INSIGHT_TYPE_ID]` * `billingAccounts/[BILLING_ACCOUNT_ID]/locations/[LOCATION]/insightTypes/[INSIGHT_TYPE_ID]` * `folders/[FOLDER_ID]/locations/[LOCATION]/insightTypes/[INSIGHT_TYPE_ID]` * `organizations/[ORGANIZATION_ID]/locations/[LOCATION]/insightTypes/[INSIGHT_TYPE_ID]` LOCATION here refers to GCP Locations: https://cloud.google.com/about/locations/ INSIGHT_TYPE_ID refers to supported insight types: https://cloud.google.com/recommender/docs/insights/insight-types. */
  parent: string;
  /** Optional. Filter expression to restrict the insights returned. Supported filter fields: * `stateInfo.state` * `insightSubtype` * `severity` * `targetResources` Examples: * `stateInfo.state = ACTIVE OR stateInfo.state = DISMISSED` * `insightSubtype = PERMISSIONS_USAGE` * `severity = CRITICAL OR severity = HIGH` * `targetResources : //compute.googleapis.com/projects/1234/zones/us-central1-a/instances/instance-1` * `stateInfo.state = ACTIVE AND (severity = CRITICAL OR severity = HIGH)` The max allowed filter length is 500 characters. (These expressions are based on the filter language described at https://google.aip.dev/160) */
  filter?: string;
  /** Optional. The maximum number of results to return from this request. Non-positive values are ignored. If not specified, the server will determine the number of results to return. */
  pageSize?: number;
  /** Optional. If present, retrieves the next batch of results from the preceding call to this method. `page_token` must be the value of `next_page_token` from the previous response. The values of other method parameters must be identical to those in the previous call. */
  pageToken?: string;
}

export const ListBillingAccountsLocationsInsightTypesInsightsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    parent: Schema.String.pipe(T.HttpPath("parent")),
    filter: Schema.optional(Schema.String).pipe(T.HttpQuery("filter")),
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
  }).pipe(
    T.Http({ method: "GET", path: "v1/{+parent}/insights" }),
    svc,
  ) as unknown as Schema.Schema<ListBillingAccountsLocationsInsightTypesInsightsRequest>;

export type ListBillingAccountsLocationsInsightTypesInsightsResponse =
  GoogleCloudRecommenderV1ListInsightsResponse;
export const ListBillingAccountsLocationsInsightTypesInsightsResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleCloudRecommenderV1ListInsightsResponse;

export type ListBillingAccountsLocationsInsightTypesInsightsError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Lists insights for the specified Cloud Resource. Requires the recommender.*.list IAM permission for the specified insight type. */
export const listBillingAccountsLocationsInsightTypesInsights: API.PaginatedOperationMethod<
  ListBillingAccountsLocationsInsightTypesInsightsRequest,
  ListBillingAccountsLocationsInsightTypesInsightsResponse,
  ListBillingAccountsLocationsInsightTypesInsightsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
  input: ListBillingAccountsLocationsInsightTypesInsightsRequest,
  output: ListBillingAccountsLocationsInsightTypesInsightsResponse,
  errors: [NotFound, Forbidden],
  pagination: {
    inputToken: "pageToken",
    outputToken: "nextPageToken",
  },
}));

export interface MarkAcceptedBillingAccountsLocationsInsightTypesInsightsRequest {
  /** Required. Name of the insight. */
  name: string;
  /** Request body */
  body?: GoogleCloudRecommenderV1MarkInsightAcceptedRequest;
}

export const MarkAcceptedBillingAccountsLocationsInsightTypesInsightsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    body: Schema.optional(
      GoogleCloudRecommenderV1MarkInsightAcceptedRequest,
    ).pipe(T.HttpBody()),
  }).pipe(
    T.Http({ method: "POST", path: "v1/{+name}:markAccepted", hasBody: true }),
    svc,
  ) as unknown as Schema.Schema<MarkAcceptedBillingAccountsLocationsInsightTypesInsightsRequest>;

export type MarkAcceptedBillingAccountsLocationsInsightTypesInsightsResponse =
  GoogleCloudRecommenderV1Insight;
export const MarkAcceptedBillingAccountsLocationsInsightTypesInsightsResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleCloudRecommenderV1Insight;

export type MarkAcceptedBillingAccountsLocationsInsightTypesInsightsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Marks the Insight State as Accepted. Users can use this method to indicate to the Recommender API that they have applied some action based on the insight. This stops the insight content from being updated. MarkInsightAccepted can be applied to insights in ACTIVE state. Requires the recommender.*.update IAM permission for the specified insight. */
export const markAcceptedBillingAccountsLocationsInsightTypesInsights: API.OperationMethod<
  MarkAcceptedBillingAccountsLocationsInsightTypesInsightsRequest,
  MarkAcceptedBillingAccountsLocationsInsightTypesInsightsResponse,
  MarkAcceptedBillingAccountsLocationsInsightTypesInsightsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: MarkAcceptedBillingAccountsLocationsInsightTypesInsightsRequest,
  output: MarkAcceptedBillingAccountsLocationsInsightTypesInsightsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface GetBillingAccountsLocationsInsightTypesInsightsRequest {
  /** Required. Name of the insight. */
  name: string;
}

export const GetBillingAccountsLocationsInsightTypesInsightsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "GET", path: "v1/{+name}" }),
    svc,
  ) as unknown as Schema.Schema<GetBillingAccountsLocationsInsightTypesInsightsRequest>;

export type GetBillingAccountsLocationsInsightTypesInsightsResponse =
  GoogleCloudRecommenderV1Insight;
export const GetBillingAccountsLocationsInsightTypesInsightsResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleCloudRecommenderV1Insight;

export type GetBillingAccountsLocationsInsightTypesInsightsError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Gets the requested insight. Requires the recommender.*.get IAM permission for the specified insight type. */
export const getBillingAccountsLocationsInsightTypesInsights: API.OperationMethod<
  GetBillingAccountsLocationsInsightTypesInsightsRequest,
  GetBillingAccountsLocationsInsightTypesInsightsResponse,
  GetBillingAccountsLocationsInsightTypesInsightsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetBillingAccountsLocationsInsightTypesInsightsRequest,
  output: GetBillingAccountsLocationsInsightTypesInsightsResponse,
  errors: [NotFound, Forbidden],
}));

export interface GetConfigOrganizationsLocationsRecommendersRequest {
  /** Required. Name of the Recommendation Config to get. Acceptable formats: * `projects/[PROJECT_NUMBER]/locations/[LOCATION]/recommenders/[RECOMMENDER_ID]/config` * `projects/[PROJECT_ID]/locations/[LOCATION]/recommenders/[RECOMMENDER_ID]/config` * `organizations/[ORGANIZATION_ID]/locations/[LOCATION]/recommenders/[RECOMMENDER_ID]/config` * `billingAccounts/[BILLING_ACCOUNT_ID]/locations/[LOCATION]/recommenders/[RECOMMENDER_ID]/config` */
  name: string;
}

export const GetConfigOrganizationsLocationsRecommendersRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "GET", path: "v1/{+name}" }),
    svc,
  ) as unknown as Schema.Schema<GetConfigOrganizationsLocationsRecommendersRequest>;

export type GetConfigOrganizationsLocationsRecommendersResponse =
  GoogleCloudRecommenderV1RecommenderConfig;
export const GetConfigOrganizationsLocationsRecommendersResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleCloudRecommenderV1RecommenderConfig;

export type GetConfigOrganizationsLocationsRecommendersError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Gets the requested Recommender Config. There is only one instance of the config for each Recommender. */
export const getConfigOrganizationsLocationsRecommenders: API.OperationMethod<
  GetConfigOrganizationsLocationsRecommendersRequest,
  GetConfigOrganizationsLocationsRecommendersResponse,
  GetConfigOrganizationsLocationsRecommendersError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetConfigOrganizationsLocationsRecommendersRequest,
  output: GetConfigOrganizationsLocationsRecommendersResponse,
  errors: [NotFound, Forbidden],
}));

export interface UpdateConfigOrganizationsLocationsRecommendersRequest {
  /** If true, validate the request and preview the change, but do not actually update it. */
  validateOnly?: boolean;
  /** Identifier. Name of recommender config. Eg, projects/[PROJECT_NUMBER]/locations/[LOCATION]/recommenders/[RECOMMENDER_ID]/config */
  name: string;
  /** The list of fields to be updated. */
  updateMask?: string;
  /** Request body */
  body?: GoogleCloudRecommenderV1RecommenderConfig;
}

export const UpdateConfigOrganizationsLocationsRecommendersRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    validateOnly: Schema.optional(Schema.Boolean).pipe(
      T.HttpQuery("validateOnly"),
    ),
    name: Schema.String.pipe(T.HttpPath("name")),
    updateMask: Schema.optional(Schema.String).pipe(T.HttpQuery("updateMask")),
    body: Schema.optional(GoogleCloudRecommenderV1RecommenderConfig).pipe(
      T.HttpBody(),
    ),
  }).pipe(
    T.Http({ method: "PATCH", path: "v1/{+name}", hasBody: true }),
    svc,
  ) as unknown as Schema.Schema<UpdateConfigOrganizationsLocationsRecommendersRequest>;

export type UpdateConfigOrganizationsLocationsRecommendersResponse =
  GoogleCloudRecommenderV1RecommenderConfig;
export const UpdateConfigOrganizationsLocationsRecommendersResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleCloudRecommenderV1RecommenderConfig;

export type UpdateConfigOrganizationsLocationsRecommendersError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Updates a Recommender Config. This will create a new revision of the config. */
export const updateConfigOrganizationsLocationsRecommenders: API.OperationMethod<
  UpdateConfigOrganizationsLocationsRecommendersRequest,
  UpdateConfigOrganizationsLocationsRecommendersResponse,
  UpdateConfigOrganizationsLocationsRecommendersError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: UpdateConfigOrganizationsLocationsRecommendersRequest,
  output: UpdateConfigOrganizationsLocationsRecommendersResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface ListOrganizationsLocationsRecommendersRecommendationsRequest {
  /** Optional. If present, retrieves the next batch of results from the preceding call to this method. `page_token` must be the value of `next_page_token` from the previous response. The values of other method parameters must be identical to those in the previous call. */
  pageToken?: string;
  /** Optional. The maximum number of results to return from this request. Non-positive values are ignored. If not specified, the server will determine the number of results to return. */
  pageSize?: number;
  /** Filter expression to restrict the recommendations returned. Supported filter fields: * `state_info.state` * `recommenderSubtype` * `priority` * `targetResources` Examples: * `stateInfo.state = ACTIVE OR stateInfo.state = DISMISSED` * `recommenderSubtype = REMOVE_ROLE OR recommenderSubtype = REPLACE_ROLE` * `priority = P1 OR priority = P2` * `targetResources : //compute.googleapis.com/projects/1234/zones/us-central1-a/instances/instance-1` * `stateInfo.state = ACTIVE AND (priority = P1 OR priority = P2)` The max allowed filter length is 500 characters. (These expressions are based on the filter language described at https://google.aip.dev/160) */
  filter?: string;
  /** Required. The container resource on which to execute the request. Acceptable formats: * `projects/[PROJECT_NUMBER]/locations/[LOCATION]/recommenders/[RECOMMENDER_ID]` * `projects/[PROJECT_ID]/locations/[LOCATION]/recommenders/[RECOMMENDER_ID]` * `billingAccounts/[BILLING_ACCOUNT_ID]/locations/[LOCATION]/recommenders/[RECOMMENDER_ID]` * `folders/[FOLDER_ID]/locations/[LOCATION]/recommenders/[RECOMMENDER_ID]` * `organizations/[ORGANIZATION_ID]/locations/[LOCATION]/recommenders/[RECOMMENDER_ID]` LOCATION here refers to GCP Locations: https://cloud.google.com/about/locations/ RECOMMENDER_ID refers to supported recommenders: https://cloud.google.com/recommender/docs/recommenders. */
  parent: string;
}

export const ListOrganizationsLocationsRecommendersRecommendationsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
    filter: Schema.optional(Schema.String).pipe(T.HttpQuery("filter")),
    parent: Schema.String.pipe(T.HttpPath("parent")),
  }).pipe(
    T.Http({ method: "GET", path: "v1/{+parent}/recommendations" }),
    svc,
  ) as unknown as Schema.Schema<ListOrganizationsLocationsRecommendersRecommendationsRequest>;

export type ListOrganizationsLocationsRecommendersRecommendationsResponse =
  GoogleCloudRecommenderV1ListRecommendationsResponse;
export const ListOrganizationsLocationsRecommendersRecommendationsResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleCloudRecommenderV1ListRecommendationsResponse;

export type ListOrganizationsLocationsRecommendersRecommendationsError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Lists recommendations for the specified Cloud Resource. Requires the recommender.*.list IAM permission for the specified recommender. */
export const listOrganizationsLocationsRecommendersRecommendations: API.PaginatedOperationMethod<
  ListOrganizationsLocationsRecommendersRecommendationsRequest,
  ListOrganizationsLocationsRecommendersRecommendationsResponse,
  ListOrganizationsLocationsRecommendersRecommendationsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
  input: ListOrganizationsLocationsRecommendersRecommendationsRequest,
  output: ListOrganizationsLocationsRecommendersRecommendationsResponse,
  errors: [NotFound, Forbidden],
  pagination: {
    inputToken: "pageToken",
    outputToken: "nextPageToken",
  },
}));

export interface GetOrganizationsLocationsRecommendersRecommendationsRequest {
  /** Required. Name of the recommendation. */
  name: string;
}

export const GetOrganizationsLocationsRecommendersRecommendationsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "GET", path: "v1/{+name}" }),
    svc,
  ) as unknown as Schema.Schema<GetOrganizationsLocationsRecommendersRecommendationsRequest>;

export type GetOrganizationsLocationsRecommendersRecommendationsResponse =
  GoogleCloudRecommenderV1Recommendation;
export const GetOrganizationsLocationsRecommendersRecommendationsResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleCloudRecommenderV1Recommendation;

export type GetOrganizationsLocationsRecommendersRecommendationsError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Gets the requested recommendation. Requires the recommender.*.get IAM permission for the specified recommender. */
export const getOrganizationsLocationsRecommendersRecommendations: API.OperationMethod<
  GetOrganizationsLocationsRecommendersRecommendationsRequest,
  GetOrganizationsLocationsRecommendersRecommendationsResponse,
  GetOrganizationsLocationsRecommendersRecommendationsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetOrganizationsLocationsRecommendersRecommendationsRequest,
  output: GetOrganizationsLocationsRecommendersRecommendationsResponse,
  errors: [NotFound, Forbidden],
}));

export interface MarkSucceededOrganizationsLocationsRecommendersRecommendationsRequest {
  /** Required. Name of the recommendation. */
  name: string;
  /** Request body */
  body?: GoogleCloudRecommenderV1MarkRecommendationSucceededRequest;
}

export const MarkSucceededOrganizationsLocationsRecommendersRecommendationsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    body: Schema.optional(
      GoogleCloudRecommenderV1MarkRecommendationSucceededRequest,
    ).pipe(T.HttpBody()),
  }).pipe(
    T.Http({ method: "POST", path: "v1/{+name}:markSucceeded", hasBody: true }),
    svc,
  ) as unknown as Schema.Schema<MarkSucceededOrganizationsLocationsRecommendersRecommendationsRequest>;

export type MarkSucceededOrganizationsLocationsRecommendersRecommendationsResponse =
  GoogleCloudRecommenderV1Recommendation;
export const MarkSucceededOrganizationsLocationsRecommendersRecommendationsResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleCloudRecommenderV1Recommendation;

export type MarkSucceededOrganizationsLocationsRecommendersRecommendationsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Marks the Recommendation State as Succeeded. Users can use this method to indicate to the Recommender API that they have applied the recommendation themselves, and the operation was successful. This stops the recommendation content from being updated. Associated insights are frozen and placed in the ACCEPTED state. MarkRecommendationSucceeded can be applied to recommendations in ACTIVE, CLAIMED, SUCCEEDED, or FAILED state. Requires the recommender.*.update IAM permission for the specified recommender. */
export const markSucceededOrganizationsLocationsRecommendersRecommendations: API.OperationMethod<
  MarkSucceededOrganizationsLocationsRecommendersRecommendationsRequest,
  MarkSucceededOrganizationsLocationsRecommendersRecommendationsResponse,
  MarkSucceededOrganizationsLocationsRecommendersRecommendationsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: MarkSucceededOrganizationsLocationsRecommendersRecommendationsRequest,
  output:
    MarkSucceededOrganizationsLocationsRecommendersRecommendationsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface MarkDismissedOrganizationsLocationsRecommendersRecommendationsRequest {
  /** Required. Name of the recommendation. */
  name: string;
  /** Request body */
  body?: GoogleCloudRecommenderV1MarkRecommendationDismissedRequest;
}

export const MarkDismissedOrganizationsLocationsRecommendersRecommendationsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    body: Schema.optional(
      GoogleCloudRecommenderV1MarkRecommendationDismissedRequest,
    ).pipe(T.HttpBody()),
  }).pipe(
    T.Http({ method: "POST", path: "v1/{+name}:markDismissed", hasBody: true }),
    svc,
  ) as unknown as Schema.Schema<MarkDismissedOrganizationsLocationsRecommendersRecommendationsRequest>;

export type MarkDismissedOrganizationsLocationsRecommendersRecommendationsResponse =
  GoogleCloudRecommenderV1Recommendation;
export const MarkDismissedOrganizationsLocationsRecommendersRecommendationsResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleCloudRecommenderV1Recommendation;

export type MarkDismissedOrganizationsLocationsRecommendersRecommendationsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Mark the Recommendation State as Dismissed. Users can use this method to indicate to the Recommender API that an ACTIVE recommendation has to be marked back as DISMISSED. MarkRecommendationDismissed can be applied to recommendations in ACTIVE state. Requires the recommender.*.update IAM permission for the specified recommender. */
export const markDismissedOrganizationsLocationsRecommendersRecommendations: API.OperationMethod<
  MarkDismissedOrganizationsLocationsRecommendersRecommendationsRequest,
  MarkDismissedOrganizationsLocationsRecommendersRecommendationsResponse,
  MarkDismissedOrganizationsLocationsRecommendersRecommendationsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: MarkDismissedOrganizationsLocationsRecommendersRecommendationsRequest,
  output:
    MarkDismissedOrganizationsLocationsRecommendersRecommendationsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface MarkClaimedOrganizationsLocationsRecommendersRecommendationsRequest {
  /** Required. Name of the recommendation. */
  name: string;
  /** Request body */
  body?: GoogleCloudRecommenderV1MarkRecommendationClaimedRequest;
}

export const MarkClaimedOrganizationsLocationsRecommendersRecommendationsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    body: Schema.optional(
      GoogleCloudRecommenderV1MarkRecommendationClaimedRequest,
    ).pipe(T.HttpBody()),
  }).pipe(
    T.Http({ method: "POST", path: "v1/{+name}:markClaimed", hasBody: true }),
    svc,
  ) as unknown as Schema.Schema<MarkClaimedOrganizationsLocationsRecommendersRecommendationsRequest>;

export type MarkClaimedOrganizationsLocationsRecommendersRecommendationsResponse =
  GoogleCloudRecommenderV1Recommendation;
export const MarkClaimedOrganizationsLocationsRecommendersRecommendationsResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleCloudRecommenderV1Recommendation;

export type MarkClaimedOrganizationsLocationsRecommendersRecommendationsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Marks the Recommendation State as Claimed. Users can use this method to indicate to the Recommender API that they are starting to apply the recommendation themselves. This stops the recommendation content from being updated. Associated insights are frozen and placed in the ACCEPTED state. MarkRecommendationClaimed can be applied to recommendations in CLAIMED, SUCCEEDED, FAILED, or ACTIVE state. Requires the recommender.*.update IAM permission for the specified recommender. */
export const markClaimedOrganizationsLocationsRecommendersRecommendations: API.OperationMethod<
  MarkClaimedOrganizationsLocationsRecommendersRecommendationsRequest,
  MarkClaimedOrganizationsLocationsRecommendersRecommendationsResponse,
  MarkClaimedOrganizationsLocationsRecommendersRecommendationsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: MarkClaimedOrganizationsLocationsRecommendersRecommendationsRequest,
  output: MarkClaimedOrganizationsLocationsRecommendersRecommendationsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface MarkFailedOrganizationsLocationsRecommendersRecommendationsRequest {
  /** Required. Name of the recommendation. */
  name: string;
  /** Request body */
  body?: GoogleCloudRecommenderV1MarkRecommendationFailedRequest;
}

export const MarkFailedOrganizationsLocationsRecommendersRecommendationsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    body: Schema.optional(
      GoogleCloudRecommenderV1MarkRecommendationFailedRequest,
    ).pipe(T.HttpBody()),
  }).pipe(
    T.Http({ method: "POST", path: "v1/{+name}:markFailed", hasBody: true }),
    svc,
  ) as unknown as Schema.Schema<MarkFailedOrganizationsLocationsRecommendersRecommendationsRequest>;

export type MarkFailedOrganizationsLocationsRecommendersRecommendationsResponse =
  GoogleCloudRecommenderV1Recommendation;
export const MarkFailedOrganizationsLocationsRecommendersRecommendationsResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleCloudRecommenderV1Recommendation;

export type MarkFailedOrganizationsLocationsRecommendersRecommendationsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Marks the Recommendation State as Failed. Users can use this method to indicate to the Recommender API that they have applied the recommendation themselves, and the operation failed. This stops the recommendation content from being updated. Associated insights are frozen and placed in the ACCEPTED state. MarkRecommendationFailed can be applied to recommendations in ACTIVE, CLAIMED, SUCCEEDED, or FAILED state. Requires the recommender.*.update IAM permission for the specified recommender. */
export const markFailedOrganizationsLocationsRecommendersRecommendations: API.OperationMethod<
  MarkFailedOrganizationsLocationsRecommendersRecommendationsRequest,
  MarkFailedOrganizationsLocationsRecommendersRecommendationsResponse,
  MarkFailedOrganizationsLocationsRecommendersRecommendationsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: MarkFailedOrganizationsLocationsRecommendersRecommendationsRequest,
  output: MarkFailedOrganizationsLocationsRecommendersRecommendationsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface GetConfigOrganizationsLocationsInsightTypesRequest {
  /** Required. Name of the InsightTypeConfig to get. Acceptable formats: * `projects/[PROJECT_NUMBER]/locations/[LOCATION]/insightTypes/[INSIGHT_TYPE_ID]/config` * `projects/[PROJECT_ID]/locations/[LOCATION]/insightTypes/[INSIGHT_TYPE_ID]/config` * `organizations/[ORGANIZATION_ID]/locations/[LOCATION]/insightTypes/[INSIGHT_TYPE_ID]/config` * `billingAccounts/[BILLING_ACCOUNT_ID]/locations/[LOCATION]/insightTypes/[INSIGHT_TYPE_ID]/config` */
  name: string;
}

export const GetConfigOrganizationsLocationsInsightTypesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "GET", path: "v1/{+name}" }),
    svc,
  ) as unknown as Schema.Schema<GetConfigOrganizationsLocationsInsightTypesRequest>;

export type GetConfigOrganizationsLocationsInsightTypesResponse =
  GoogleCloudRecommenderV1InsightTypeConfig;
export const GetConfigOrganizationsLocationsInsightTypesResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleCloudRecommenderV1InsightTypeConfig;

export type GetConfigOrganizationsLocationsInsightTypesError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Gets the requested InsightTypeConfig. There is only one instance of the config for each InsightType. */
export const getConfigOrganizationsLocationsInsightTypes: API.OperationMethod<
  GetConfigOrganizationsLocationsInsightTypesRequest,
  GetConfigOrganizationsLocationsInsightTypesResponse,
  GetConfigOrganizationsLocationsInsightTypesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetConfigOrganizationsLocationsInsightTypesRequest,
  output: GetConfigOrganizationsLocationsInsightTypesResponse,
  errors: [NotFound, Forbidden],
}));

export interface UpdateConfigOrganizationsLocationsInsightTypesRequest {
  /** If true, validate the request and preview the change, but do not actually update it. */
  validateOnly?: boolean;
  /** Identifier. Name of insight type config. Eg, projects/[PROJECT_NUMBER]/locations/[LOCATION]/insightTypes/[INSIGHT_TYPE_ID]/config */
  name: string;
  /** The list of fields to be updated. */
  updateMask?: string;
  /** Request body */
  body?: GoogleCloudRecommenderV1InsightTypeConfig;
}

export const UpdateConfigOrganizationsLocationsInsightTypesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    validateOnly: Schema.optional(Schema.Boolean).pipe(
      T.HttpQuery("validateOnly"),
    ),
    name: Schema.String.pipe(T.HttpPath("name")),
    updateMask: Schema.optional(Schema.String).pipe(T.HttpQuery("updateMask")),
    body: Schema.optional(GoogleCloudRecommenderV1InsightTypeConfig).pipe(
      T.HttpBody(),
    ),
  }).pipe(
    T.Http({ method: "PATCH", path: "v1/{+name}", hasBody: true }),
    svc,
  ) as unknown as Schema.Schema<UpdateConfigOrganizationsLocationsInsightTypesRequest>;

export type UpdateConfigOrganizationsLocationsInsightTypesResponse =
  GoogleCloudRecommenderV1InsightTypeConfig;
export const UpdateConfigOrganizationsLocationsInsightTypesResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleCloudRecommenderV1InsightTypeConfig;

export type UpdateConfigOrganizationsLocationsInsightTypesError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Updates an InsightTypeConfig change. This will create a new revision of the config. */
export const updateConfigOrganizationsLocationsInsightTypes: API.OperationMethod<
  UpdateConfigOrganizationsLocationsInsightTypesRequest,
  UpdateConfigOrganizationsLocationsInsightTypesResponse,
  UpdateConfigOrganizationsLocationsInsightTypesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: UpdateConfigOrganizationsLocationsInsightTypesRequest,
  output: UpdateConfigOrganizationsLocationsInsightTypesResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface MarkAcceptedOrganizationsLocationsInsightTypesInsightsRequest {
  /** Required. Name of the insight. */
  name: string;
  /** Request body */
  body?: GoogleCloudRecommenderV1MarkInsightAcceptedRequest;
}

export const MarkAcceptedOrganizationsLocationsInsightTypesInsightsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    body: Schema.optional(
      GoogleCloudRecommenderV1MarkInsightAcceptedRequest,
    ).pipe(T.HttpBody()),
  }).pipe(
    T.Http({ method: "POST", path: "v1/{+name}:markAccepted", hasBody: true }),
    svc,
  ) as unknown as Schema.Schema<MarkAcceptedOrganizationsLocationsInsightTypesInsightsRequest>;

export type MarkAcceptedOrganizationsLocationsInsightTypesInsightsResponse =
  GoogleCloudRecommenderV1Insight;
export const MarkAcceptedOrganizationsLocationsInsightTypesInsightsResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleCloudRecommenderV1Insight;

export type MarkAcceptedOrganizationsLocationsInsightTypesInsightsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Marks the Insight State as Accepted. Users can use this method to indicate to the Recommender API that they have applied some action based on the insight. This stops the insight content from being updated. MarkInsightAccepted can be applied to insights in ACTIVE state. Requires the recommender.*.update IAM permission for the specified insight. */
export const markAcceptedOrganizationsLocationsInsightTypesInsights: API.OperationMethod<
  MarkAcceptedOrganizationsLocationsInsightTypesInsightsRequest,
  MarkAcceptedOrganizationsLocationsInsightTypesInsightsResponse,
  MarkAcceptedOrganizationsLocationsInsightTypesInsightsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: MarkAcceptedOrganizationsLocationsInsightTypesInsightsRequest,
  output: MarkAcceptedOrganizationsLocationsInsightTypesInsightsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface GetOrganizationsLocationsInsightTypesInsightsRequest {
  /** Required. Name of the insight. */
  name: string;
}

export const GetOrganizationsLocationsInsightTypesInsightsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "GET", path: "v1/{+name}" }),
    svc,
  ) as unknown as Schema.Schema<GetOrganizationsLocationsInsightTypesInsightsRequest>;

export type GetOrganizationsLocationsInsightTypesInsightsResponse =
  GoogleCloudRecommenderV1Insight;
export const GetOrganizationsLocationsInsightTypesInsightsResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleCloudRecommenderV1Insight;

export type GetOrganizationsLocationsInsightTypesInsightsError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Gets the requested insight. Requires the recommender.*.get IAM permission for the specified insight type. */
export const getOrganizationsLocationsInsightTypesInsights: API.OperationMethod<
  GetOrganizationsLocationsInsightTypesInsightsRequest,
  GetOrganizationsLocationsInsightTypesInsightsResponse,
  GetOrganizationsLocationsInsightTypesInsightsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetOrganizationsLocationsInsightTypesInsightsRequest,
  output: GetOrganizationsLocationsInsightTypesInsightsResponse,
  errors: [NotFound, Forbidden],
}));

export interface ListOrganizationsLocationsInsightTypesInsightsRequest {
  /** Required. The container resource on which to execute the request. Acceptable formats: * `projects/[PROJECT_NUMBER]/locations/[LOCATION]/insightTypes/[INSIGHT_TYPE_ID]` * `projects/[PROJECT_ID]/locations/[LOCATION]/insightTypes/[INSIGHT_TYPE_ID]` * `billingAccounts/[BILLING_ACCOUNT_ID]/locations/[LOCATION]/insightTypes/[INSIGHT_TYPE_ID]` * `folders/[FOLDER_ID]/locations/[LOCATION]/insightTypes/[INSIGHT_TYPE_ID]` * `organizations/[ORGANIZATION_ID]/locations/[LOCATION]/insightTypes/[INSIGHT_TYPE_ID]` LOCATION here refers to GCP Locations: https://cloud.google.com/about/locations/ INSIGHT_TYPE_ID refers to supported insight types: https://cloud.google.com/recommender/docs/insights/insight-types. */
  parent: string;
  /** Optional. Filter expression to restrict the insights returned. Supported filter fields: * `stateInfo.state` * `insightSubtype` * `severity` * `targetResources` Examples: * `stateInfo.state = ACTIVE OR stateInfo.state = DISMISSED` * `insightSubtype = PERMISSIONS_USAGE` * `severity = CRITICAL OR severity = HIGH` * `targetResources : //compute.googleapis.com/projects/1234/zones/us-central1-a/instances/instance-1` * `stateInfo.state = ACTIVE AND (severity = CRITICAL OR severity = HIGH)` The max allowed filter length is 500 characters. (These expressions are based on the filter language described at https://google.aip.dev/160) */
  filter?: string;
  /** Optional. The maximum number of results to return from this request. Non-positive values are ignored. If not specified, the server will determine the number of results to return. */
  pageSize?: number;
  /** Optional. If present, retrieves the next batch of results from the preceding call to this method. `page_token` must be the value of `next_page_token` from the previous response. The values of other method parameters must be identical to those in the previous call. */
  pageToken?: string;
}

export const ListOrganizationsLocationsInsightTypesInsightsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    parent: Schema.String.pipe(T.HttpPath("parent")),
    filter: Schema.optional(Schema.String).pipe(T.HttpQuery("filter")),
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
  }).pipe(
    T.Http({ method: "GET", path: "v1/{+parent}/insights" }),
    svc,
  ) as unknown as Schema.Schema<ListOrganizationsLocationsInsightTypesInsightsRequest>;

export type ListOrganizationsLocationsInsightTypesInsightsResponse =
  GoogleCloudRecommenderV1ListInsightsResponse;
export const ListOrganizationsLocationsInsightTypesInsightsResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleCloudRecommenderV1ListInsightsResponse;

export type ListOrganizationsLocationsInsightTypesInsightsError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Lists insights for the specified Cloud Resource. Requires the recommender.*.list IAM permission for the specified insight type. */
export const listOrganizationsLocationsInsightTypesInsights: API.PaginatedOperationMethod<
  ListOrganizationsLocationsInsightTypesInsightsRequest,
  ListOrganizationsLocationsInsightTypesInsightsResponse,
  ListOrganizationsLocationsInsightTypesInsightsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
  input: ListOrganizationsLocationsInsightTypesInsightsRequest,
  output: ListOrganizationsLocationsInsightTypesInsightsResponse,
  errors: [NotFound, Forbidden],
  pagination: {
    inputToken: "pageToken",
    outputToken: "nextPageToken",
  },
}));
