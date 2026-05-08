// ==========================================================================
// BeyondCorp API (beyondcorp v1alpha)
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
  name: "beyondcorp",
  version: "v1alpha",
  rootUrl: "https://beyondcorp.googleapis.com/",
  servicePath: "",
});

// ==========================================================================
// Schemas
// ==========================================================================

export interface GoogleCloudBeyondcorpSaasplatformSubscriptionsV1alphaSubscription {
  /** Output only. The current state of the subscription. */
  state?:
    | "STATE_UNSPECIFIED"
    | "ACTIVE"
    | "INACTIVE"
    | "COMPLETED"
    | (string & {});
  /** Optional. Number of seats in the subscription. */
  seatCount?: string;
  /** Identifier. Unique resource name of the Subscription. The name is ignored when creating a subscription. */
  name?: string;
  /** Required. Type of subscription. */
  type?: "TYPE_UNSPECIFIED" | "TRIAL" | "PAID" | "ALLOWLIST" | (string & {});
  /** Optional. Name of the billing account in the format. e.g. billingAccounts/123456-123456-123456 Required if Subscription is of Paid type. */
  billingAccount?: string;
  /** Output only. Represents that, if subscription will renew or end when the term ends. */
  autoRenewEnabled?: boolean;
  /** Output only. Type of subscriber. */
  subscriberType?:
    | "SUBSCRIBER_TYPE_UNSPECIFIED"
    | "ONLINE"
    | "OFFLINE"
    | "CEP_TRIAL"
    | (string & {});
  /** Required. SKU of subscription. */
  sku?: "SKU_UNSPECIFIED" | "BCE_STANDARD_SKU" | (string & {});
  /** Optional. End time of the subscription. */
  endTime?: string;
  /** Optional. Whether the subscription is being created as part of the Citrix flow. If this field is set to true, the subscription should have both the start_time and end_time set in the request and the billing account used will be the Citrix master billing account regardless of what its set to in the request. This field can only be set to true in create requests. */
  csgCustomer?: boolean;
  /** Output only. Create time of the subscription. */
  createTime?: string;
  /** Optional. Start time of the subscription. */
  startTime?: string;
}

export const GoogleCloudBeyondcorpSaasplatformSubscriptionsV1alphaSubscription: Schema.Schema<GoogleCloudBeyondcorpSaasplatformSubscriptionsV1alphaSubscription> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    state: Schema.optional(Schema.String),
    seatCount: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    billingAccount: Schema.optional(Schema.String),
    autoRenewEnabled: Schema.optional(Schema.Boolean),
    subscriberType: Schema.optional(Schema.String),
    sku: Schema.optional(Schema.String),
    endTime: Schema.optional(Schema.String),
    csgCustomer: Schema.optional(Schema.Boolean),
    createTime: Schema.optional(Schema.String),
    startTime: Schema.optional(Schema.String),
  }).annotate({
    identifier:
      "GoogleCloudBeyondcorpSaasplatformSubscriptionsV1alphaSubscription",
  });

export interface Gateway {
  /** Required. The type of hosting used by the gateway. */
  type?: "TYPE_UNSPECIFIED" | "GCP_REGIONAL_MIG" | (string & {});
  /** Output only. Server-defined URI for this resource. */
  uri?: string;
  /** Output only. User port reserved on the gateways for this connection, if not specified or zero, the default port is 19443. */
  userPort?: number;
}

export const Gateway: Schema.Schema<Gateway> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    type: Schema.optional(Schema.String),
    uri: Schema.optional(Schema.String),
    userPort: Schema.optional(Schema.Number),
  }).annotate({ identifier: "Gateway" });

export interface GoogleCloudBeyondcorpSecuritygatewaysV1alphaEgressPolicy {
  /** Required. List of the regions where the application sends traffic. */
  regions?: ReadonlyArray<string>;
}

export const GoogleCloudBeyondcorpSecuritygatewaysV1alphaEgressPolicy: Schema.Schema<GoogleCloudBeyondcorpSecuritygatewaysV1alphaEgressPolicy> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    regions: Schema.optional(Schema.Array(Schema.String)),
  }).annotate({
    identifier: "GoogleCloudBeyondcorpSecuritygatewaysV1alphaEgressPolicy",
  });

export interface GoogleCloudLocationLocation {
  /** Cross-service attributes for the location. For example {"cloud.googleapis.com/region": "us-east1"} */
  labels?: Record<string, string>;
  /** The canonical id for this location. For example: `"us-east1"`. */
  locationId?: string;
  /** Resource name for the location, which may vary between implementations. For example: `"projects/example-project/locations/us-east1"` */
  name?: string;
  /** The friendly name for this location, typically a nearby city name. For example, "Tokyo". */
  displayName?: string;
  /** Service-specific metadata. For example the available capacity at the given location. */
  metadata?: Record<string, unknown>;
}

export const GoogleCloudLocationLocation: Schema.Schema<GoogleCloudLocationLocation> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    labels: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    locationId: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    displayName: Schema.optional(Schema.String),
    metadata: Schema.optional(Schema.Record(Schema.String, Schema.Unknown)),
  }).annotate({ identifier: "GoogleCloudLocationLocation" });

export interface GoogleCloudLocationListLocationsResponse {
  /** The standard List next-page token. */
  nextPageToken?: string;
  /** A list of locations that matches the specified filter in the request. */
  locations?: ReadonlyArray<GoogleCloudLocationLocation>;
}

export const GoogleCloudLocationListLocationsResponse: Schema.Schema<GoogleCloudLocationListLocationsResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    nextPageToken: Schema.optional(Schema.String),
    locations: Schema.optional(Schema.Array(GoogleCloudLocationLocation)),
  }).annotate({ identifier: "GoogleCloudLocationListLocationsResponse" });

export interface GoogleCloudBeyondcorpSecuritygatewaysV1alphaInternetGateway {
  /** Output only. List of IP addresses assigned to the Cloud NAT. */
  assignedIps?: ReadonlyArray<string>;
}

export const GoogleCloudBeyondcorpSecuritygatewaysV1alphaInternetGateway: Schema.Schema<GoogleCloudBeyondcorpSecuritygatewaysV1alphaInternetGateway> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    assignedIps: Schema.optional(Schema.Array(Schema.String)),
  }).annotate({
    identifier: "GoogleCloudBeyondcorpSecuritygatewaysV1alphaInternetGateway",
  });

export interface GoogleCloudBeyondcorpSecuritygatewaysV1alphaHub {
  /** Optional. Internet Gateway configuration. */
  internetGateway?: GoogleCloudBeyondcorpSecuritygatewaysV1alphaInternetGateway;
}

export const GoogleCloudBeyondcorpSecuritygatewaysV1alphaHub: Schema.Schema<GoogleCloudBeyondcorpSecuritygatewaysV1alphaHub> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    internetGateway: Schema.optional(
      GoogleCloudBeyondcorpSecuritygatewaysV1alphaInternetGateway,
    ),
  }).annotate({
    identifier: "GoogleCloudBeyondcorpSecuritygatewaysV1alphaHub",
  });

export interface GoogleCloudBeyondcorpSecuritygatewaysV1alphaContextualHeadersDelegatedGroupInfo {
  /** Optional. The output type of the delegated group information. */
  outputType?:
    | "OUTPUT_TYPE_UNSPECIFIED"
    | "PROTOBUF"
    | "JSON"
    | "NONE"
    | (string & {});
}

export const GoogleCloudBeyondcorpSecuritygatewaysV1alphaContextualHeadersDelegatedGroupInfo: Schema.Schema<GoogleCloudBeyondcorpSecuritygatewaysV1alphaContextualHeadersDelegatedGroupInfo> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    outputType: Schema.optional(Schema.String),
  }).annotate({
    identifier:
      "GoogleCloudBeyondcorpSecuritygatewaysV1alphaContextualHeadersDelegatedGroupInfo",
  });

export interface ImageConfig {
  /** The initial image the remote agent will attempt to run for the control plane. */
  targetImage?: string;
  /** The stable image that the remote agent will fallback to if the target image fails. */
  stableImage?: string;
}

export const ImageConfig: Schema.Schema<ImageConfig> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    targetImage: Schema.optional(Schema.String),
    stableImage: Schema.optional(Schema.String),
  }).annotate({ identifier: "ImageConfig" });

export interface CloudPubSubNotificationConfig {
  /** The Pub/Sub subscription the connector uses to receive notifications. */
  pubsubSubscription?: string;
}

export const CloudPubSubNotificationConfig: Schema.Schema<CloudPubSubNotificationConfig> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    pubsubSubscription: Schema.optional(Schema.String),
  }).annotate({ identifier: "CloudPubSubNotificationConfig" });

export interface NotificationConfig {
  /** Pub/Sub topic for Connector to subscribe and receive notifications from `projects/{project}/topics/{pubsub_topic}` */
  pubsubNotification?: CloudPubSubNotificationConfig;
}

export const NotificationConfig: Schema.Schema<NotificationConfig> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    pubsubNotification: Schema.optional(CloudPubSubNotificationConfig),
  }).annotate({ identifier: "NotificationConfig" });

export interface ConnectorInstanceConfig {
  /** ImageConfig defines the GCR images to run for the remote agent's control plane. */
  imageConfig?: ImageConfig;
  /** Required. A monotonically increasing number generated and maintained by the API provider. Every time a config changes in the backend, the sequenceNumber should be bumped up to reflect the change. */
  sequenceNumber?: string;
  /** The SLM instance agent configuration. */
  instanceConfig?: Record<string, unknown>;
  /** NotificationConfig defines the notification mechanism that the remote instance should subscribe to in order to receive notification. */
  notificationConfig?: NotificationConfig;
}

export const ConnectorInstanceConfig: Schema.Schema<ConnectorInstanceConfig> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    imageConfig: Schema.optional(ImageConfig),
    sequenceNumber: Schema.optional(Schema.String),
    instanceConfig: Schema.optional(
      Schema.Record(Schema.String, Schema.Unknown),
    ),
    notificationConfig: Schema.optional(NotificationConfig),
  }).annotate({ identifier: "ConnectorInstanceConfig" });

export interface ResolveInstanceConfigResponse {
  /** ConnectorInstanceConfig. */
  instanceConfig?: ConnectorInstanceConfig;
}

export const ResolveInstanceConfigResponse: Schema.Schema<ResolveInstanceConfigResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    instanceConfig: Schema.optional(ConnectorInstanceConfig),
  }).annotate({ identifier: "ResolveInstanceConfigResponse" });

export interface ServiceAccount {
  /** Email address of the service account. */
  email?: string;
}

export const ServiceAccount: Schema.Schema<ServiceAccount> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    email: Schema.optional(Schema.String),
  }).annotate({ identifier: "ServiceAccount" });

export interface GoogleCloudBeyondcorpSaasplatformInsightsV1alphaCustomGrouping {
  /** Optional. Filterable parameters to be added to the grouping clause. Available fields could be fetched by calling insight list and get APIs in `BASIC` view. `=` is the only comparison operator supported. `AND` is the only logical operator supported. Usage: field_filter="fieldName1=fieldVal1 AND fieldName2=fieldVal2". NOTE: Only `AND` conditions are allowed. NOTE: Use the `filter_alias` from `Insight.Metadata.Field` message for the filtering the corresponding fields in this filter field. (These expressions are based on the filter language described at https://google.aip.dev/160). */
  fieldFilter?: string;
  /** Required. Fields to be used for grouping. NOTE: Use the `filter_alias` from `Insight.Metadata.Field` message for declaring the fields to be grouped-by here. */
  groupFields?: ReadonlyArray<string>;
}

export const GoogleCloudBeyondcorpSaasplatformInsightsV1alphaCustomGrouping: Schema.Schema<GoogleCloudBeyondcorpSaasplatformInsightsV1alphaCustomGrouping> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    fieldFilter: Schema.optional(Schema.String),
    groupFields: Schema.optional(Schema.Array(Schema.String)),
  }).annotate({
    identifier:
      "GoogleCloudBeyondcorpSaasplatformInsightsV1alphaCustomGrouping",
  });

export interface GoogleCloudBeyondcorpSecuritygatewaysV1alphaSecurityGatewayOperationMetadata {
  /** Output only. Human-readable status of the operation, if any. */
  statusMessage?: string;
  /** Output only. Name of the verb executed by the operation. */
  verb?: string;
  /** Output only. The time the operation was created. */
  createTime?: string;
  /** Output only. Server-defined resource path for the target of the operation. */
  target?: string;
  /** Output only. API version used to start the operation. */
  apiVersion?: string;
  /** Output only. Identifies whether the user has requested cancellation of the operation. Operations that have been cancelled successfully have Operation.error value with a google.rpc.Status.code of 1, corresponding to `Code.CANCELLED`. */
  requestedCancellation?: boolean;
  /** Output only. The time the operation finished running. */
  endTime?: string;
}

export const GoogleCloudBeyondcorpSecuritygatewaysV1alphaSecurityGatewayOperationMetadata: Schema.Schema<GoogleCloudBeyondcorpSecuritygatewaysV1alphaSecurityGatewayOperationMetadata> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    statusMessage: Schema.optional(Schema.String),
    verb: Schema.optional(Schema.String),
    createTime: Schema.optional(Schema.String),
    target: Schema.optional(Schema.String),
    apiVersion: Schema.optional(Schema.String),
    requestedCancellation: Schema.optional(Schema.Boolean),
    endTime: Schema.optional(Schema.String),
  }).annotate({
    identifier:
      "GoogleCloudBeyondcorpSecuritygatewaysV1alphaSecurityGatewayOperationMetadata",
  });

export interface GoogleCloudBeyondcorpSecuritygatewaysV1alphaEndpoint {
  /** Required. Port of the endpoint. */
  port?: number;
  /** Required. Hostname of the endpoint. */
  hostname?: string;
}

export const GoogleCloudBeyondcorpSecuritygatewaysV1alphaEndpoint: Schema.Schema<GoogleCloudBeyondcorpSecuritygatewaysV1alphaEndpoint> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    port: Schema.optional(Schema.Number),
    hostname: Schema.optional(Schema.String),
  }).annotate({
    identifier: "GoogleCloudBeyondcorpSecuritygatewaysV1alphaEndpoint",
  });

export interface GoogleCloudBeyondcorpSecuritygatewaysV1alphaApplicationUpstreamExternal {
  /** Required. List of the endpoints to forward traffic to. */
  endpoints?: ReadonlyArray<GoogleCloudBeyondcorpSecuritygatewaysV1alphaEndpoint>;
}

export const GoogleCloudBeyondcorpSecuritygatewaysV1alphaApplicationUpstreamExternal: Schema.Schema<GoogleCloudBeyondcorpSecuritygatewaysV1alphaApplicationUpstreamExternal> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    endpoints: Schema.optional(
      Schema.Array(GoogleCloudBeyondcorpSecuritygatewaysV1alphaEndpoint),
    ),
  }).annotate({
    identifier:
      "GoogleCloudBeyondcorpSecuritygatewaysV1alphaApplicationUpstreamExternal",
  });

export interface GoogleCloudBeyondcorpSaasplatformInsightsV1alphaAppliedConfig {
  /** Output only. Customised grouping applied. */
  customGrouping?: GoogleCloudBeyondcorpSaasplatformInsightsV1alphaCustomGrouping;
  /** Output only. Starting time for the duration for which insight was pulled. */
  startTime?: string;
  /** Output only. Aggregation type applied. */
  aggregation?:
    | "AGGREGATION_UNSPECIFIED"
    | "HOURLY"
    | "DAILY"
    | "WEEKLY"
    | "MONTHLY"
    | "CUSTOM_DATE_RANGE"
    | (string & {});
  /** Output only. Group id of the grouping applied. */
  group?: string;
  /** Output only. Filters applied. */
  fieldFilter?: string;
  /** Output only. Ending time for the duration for which insight was pulled. */
  endTime?: string;
}

export const GoogleCloudBeyondcorpSaasplatformInsightsV1alphaAppliedConfig: Schema.Schema<GoogleCloudBeyondcorpSaasplatformInsightsV1alphaAppliedConfig> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    customGrouping: Schema.optional(
      GoogleCloudBeyondcorpSaasplatformInsightsV1alphaCustomGrouping,
    ),
    startTime: Schema.optional(Schema.String),
    aggregation: Schema.optional(Schema.String),
    group: Schema.optional(Schema.String),
    fieldFilter: Schema.optional(Schema.String),
    endTime: Schema.optional(Schema.String),
  }).annotate({
    identifier: "GoogleCloudBeyondcorpSaasplatformInsightsV1alphaAppliedConfig",
  });

export interface GoogleCloudBeyondcorpSaasplatformInsightsV1alphaRowFieldVal {
  /** Output only. Field name to be used in filter while requesting configured insight filtered on this field. */
  filterAlias?: string;
  /** Output only. Name of the field. */
  displayName?: string;
  /** Output only. Field id. */
  id?: string;
  /** Output only. Value of the field in string format. Acceptable values are strings or numbers. */
  value?: string;
}

export const GoogleCloudBeyondcorpSaasplatformInsightsV1alphaRowFieldVal: Schema.Schema<GoogleCloudBeyondcorpSaasplatformInsightsV1alphaRowFieldVal> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    filterAlias: Schema.optional(Schema.String),
    displayName: Schema.optional(Schema.String),
    id: Schema.optional(Schema.String),
    value: Schema.optional(Schema.String),
  }).annotate({
    identifier: "GoogleCloudBeyondcorpSaasplatformInsightsV1alphaRowFieldVal",
  });

export interface GoogleCloudBeyondcorpSaasplatformInsightsV1alphaRow {
  /** Output only. Columns/entries/key-vals in the result. */
  fieldValues?: ReadonlyArray<GoogleCloudBeyondcorpSaasplatformInsightsV1alphaRowFieldVal>;
}

export const GoogleCloudBeyondcorpSaasplatformInsightsV1alphaRow: Schema.Schema<GoogleCloudBeyondcorpSaasplatformInsightsV1alphaRow> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    fieldValues: Schema.optional(
      Schema.Array(GoogleCloudBeyondcorpSaasplatformInsightsV1alphaRowFieldVal),
    ),
  }).annotate({
    identifier: "GoogleCloudBeyondcorpSaasplatformInsightsV1alphaRow",
  });

export interface GoogleCloudBeyondcorpSaasplatformInsightsV1alphaInsightMetadataField {
  /** Output only. Name of the field. */
  displayName?: string;
  /** Output only. Indicates whether the field can be used for filtering. */
  filterable?: boolean;
  /** Output only. Indicates whether the field can be used for grouping in custom grouping request. */
  groupable?: boolean;
  /** Output only. Field id for which this is the metadata. */
  id?: string;
  /** Output only. Description of the field. */
  description?: string;
  /** Output only. Field name to be used in filter while requesting configured insight filtered on this field. */
  filterAlias?: string;
}

export const GoogleCloudBeyondcorpSaasplatformInsightsV1alphaInsightMetadataField: Schema.Schema<GoogleCloudBeyondcorpSaasplatformInsightsV1alphaInsightMetadataField> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    displayName: Schema.optional(Schema.String),
    filterable: Schema.optional(Schema.Boolean),
    groupable: Schema.optional(Schema.Boolean),
    id: Schema.optional(Schema.String),
    description: Schema.optional(Schema.String),
    filterAlias: Schema.optional(Schema.String),
  }).annotate({
    identifier:
      "GoogleCloudBeyondcorpSaasplatformInsightsV1alphaInsightMetadataField",
  });

export interface GoogleCloudBeyondcorpSaasplatformInsightsV1alphaInsightMetadata {
  /** Output only. Category of the insight. */
  category?: string;
  /** Output only. Sub-Category of the insight. */
  subCategory?: string;
  /** Output only. Type of the insight. It is metadata describing whether the insight is a metric (e.g. count) or a report (e.g. list, status). */
  type?: string;
  /** Output only. List of aggregation types available for insight. */
  aggregations?: ReadonlyArray<
    | "AGGREGATION_UNSPECIFIED"
    | "HOURLY"
    | "DAILY"
    | "WEEKLY"
    | "MONTHLY"
    | "CUSTOM_DATE_RANGE"
    | (string & {})
  >;
  /** Output only. Common name of the insight. */
  displayName?: string;
  /** Output only. List of fields available for insight. */
  fields?: ReadonlyArray<GoogleCloudBeyondcorpSaasplatformInsightsV1alphaInsightMetadataField>;
  /** Output only. List of groupings available for insight. */
  groups?: ReadonlyArray<string>;
}

export const GoogleCloudBeyondcorpSaasplatformInsightsV1alphaInsightMetadata: Schema.Schema<GoogleCloudBeyondcorpSaasplatformInsightsV1alphaInsightMetadata> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    category: Schema.optional(Schema.String),
    subCategory: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    aggregations: Schema.optional(Schema.Array(Schema.String)),
    displayName: Schema.optional(Schema.String),
    fields: Schema.optional(
      Schema.Array(
        GoogleCloudBeyondcorpSaasplatformInsightsV1alphaInsightMetadataField,
      ),
    ),
    groups: Schema.optional(Schema.Array(Schema.String)),
  }).annotate({
    identifier:
      "GoogleCloudBeyondcorpSaasplatformInsightsV1alphaInsightMetadata",
  });

export interface GoogleCloudBeyondcorpSaasplatformInsightsV1alphaInsight {
  /** Output only. Applied insight config to generate the result data rows. */
  appliedConfig?: GoogleCloudBeyondcorpSaasplatformInsightsV1alphaAppliedConfig;
  /** Output only. Result rows returned containing the required value(s). */
  rows?: ReadonlyArray<GoogleCloudBeyondcorpSaasplatformInsightsV1alphaRow>;
  /** Output only. Metadata for the Insight. */
  metadata?: GoogleCloudBeyondcorpSaasplatformInsightsV1alphaInsightMetadata;
  /** Output only. The insight resource name. e.g. `organizations/{organization_id}/locations/{location_id}/insights/{insight_id}` OR `projects/{project_id}/locations/{location_id}/insights/{insight_id}`. */
  name?: string;
}

export const GoogleCloudBeyondcorpSaasplatformInsightsV1alphaInsight: Schema.Schema<GoogleCloudBeyondcorpSaasplatformInsightsV1alphaInsight> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    appliedConfig: Schema.optional(
      GoogleCloudBeyondcorpSaasplatformInsightsV1alphaAppliedConfig,
    ),
    rows: Schema.optional(
      Schema.Array(GoogleCloudBeyondcorpSaasplatformInsightsV1alphaRow),
    ),
    metadata: Schema.optional(
      GoogleCloudBeyondcorpSaasplatformInsightsV1alphaInsightMetadata,
    ),
    name: Schema.optional(Schema.String),
  }).annotate({
    identifier: "GoogleCloudBeyondcorpSaasplatformInsightsV1alphaInsight",
  });

export interface GoogleCloudBeyondcorpSaasplatformInsightsV1alphaListInsightsResponse {
  /** Output only. List of all insights. */
  insights?: ReadonlyArray<GoogleCloudBeyondcorpSaasplatformInsightsV1alphaInsight>;
  /** Output only. Next page token to be fetched. Set to empty or NULL if there are no more pages available. */
  nextPageToken?: string;
}

export const GoogleCloudBeyondcorpSaasplatformInsightsV1alphaListInsightsResponse: Schema.Schema<GoogleCloudBeyondcorpSaasplatformInsightsV1alphaListInsightsResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    insights: Schema.optional(
      Schema.Array(GoogleCloudBeyondcorpSaasplatformInsightsV1alphaInsight),
    ),
    nextPageToken: Schema.optional(Schema.String),
  }).annotate({
    identifier:
      "GoogleCloudBeyondcorpSaasplatformInsightsV1alphaListInsightsResponse",
  });

export interface GoogleCloudBeyondcorpAppconnectorsV1RemoteAgentDetails {}

export const GoogleCloudBeyondcorpAppconnectorsV1RemoteAgentDetails: Schema.Schema<GoogleCloudBeyondcorpAppconnectorsV1RemoteAgentDetails> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).annotate({
    identifier: "GoogleCloudBeyondcorpAppconnectorsV1RemoteAgentDetails",
  });

export interface GoogleCloudBeyondcorpAppconnectorsV1alphaNotificationConfigCloudPubSubNotificationConfig {
  /** The Pub/Sub subscription the AppConnector uses to receive notifications. */
  pubsubSubscription?: string;
}

export const GoogleCloudBeyondcorpAppconnectorsV1alphaNotificationConfigCloudPubSubNotificationConfig: Schema.Schema<GoogleCloudBeyondcorpAppconnectorsV1alphaNotificationConfigCloudPubSubNotificationConfig> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    pubsubSubscription: Schema.optional(Schema.String),
  }).annotate({
    identifier:
      "GoogleCloudBeyondcorpAppconnectorsV1alphaNotificationConfigCloudPubSubNotificationConfig",
  });

export interface PrincipalInfo {
  /** A GCP service account. */
  serviceAccount?: ServiceAccount;
}

export const PrincipalInfo: Schema.Schema<PrincipalInfo> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    serviceAccount: Schema.optional(ServiceAccount),
  }).annotate({ identifier: "PrincipalInfo" });

export interface ResourceInfo {
  /** Overall health status. Overall status is derived based on the status of each sub level resources. */
  status?:
    | "HEALTH_STATUS_UNSPECIFIED"
    | "HEALTHY"
    | "UNHEALTHY"
    | "UNRESPONSIVE"
    | "DEGRADED"
    | (string & {});
  /** Specific details for the resource. */
  resource?: Record<string, unknown>;
  /** List of Info for the sub level resources. */
  sub?: ReadonlyArray<ResourceInfo>;
  /** The timestamp to collect the info. It is suggested to be set by the topmost level resource only. */
  time?: string;
  /** Required. Unique Id for the resource. */
  id?: string;
}

export const ResourceInfo: Schema.Schema<ResourceInfo> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      status: Schema.optional(Schema.String),
      resource: Schema.optional(Schema.Record(Schema.String, Schema.Unknown)),
      sub: Schema.optional(Schema.Array(ResourceInfo)),
      time: Schema.optional(Schema.String),
      id: Schema.optional(Schema.String),
    }),
  ).annotate({
    identifier: "ResourceInfo",
  }) as any as Schema.Schema<ResourceInfo>;

export interface Connector {
  /** Required. Principal information about the Identity of the connector. */
  principalInfo?: PrincipalInfo;
  /** Optional. An arbitrary user-provided name for the connector. Cannot exceed 64 characters. */
  displayName?: string;
  /** Output only. The current state of the connector. */
  state?:
    | "STATE_UNSPECIFIED"
    | "CREATING"
    | "CREATED"
    | "UPDATING"
    | "DELETING"
    | "DOWN"
    | (string & {});
  /** Optional. Resource info of the connector. */
  resourceInfo?: ResourceInfo;
  /** Output only. A unique identifier for the instance generated by the system. */
  uid?: string;
  /** Required. Unique resource name of the connector. The name is ignored when creating a connector. */
  name?: string;
  /** Output only. Timestamp when the resource was last modified. */
  updateTime?: string;
  /** Output only. Timestamp when the resource was created. */
  createTime?: string;
  /** Optional. Resource labels to represent user provided metadata. */
  labels?: Record<string, string>;
}

export const Connector: Schema.Schema<Connector> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    principalInfo: Schema.optional(PrincipalInfo),
    displayName: Schema.optional(Schema.String),
    state: Schema.optional(Schema.String),
    resourceInfo: Schema.optional(ResourceInfo),
    uid: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    updateTime: Schema.optional(Schema.String),
    createTime: Schema.optional(Schema.String),
    labels: Schema.optional(Schema.Record(Schema.String, Schema.String)),
  }).annotate({ identifier: "Connector" });

export interface GoogleCloudBeyondcorpAppconnectorsV1alphaAppConnectorOperationMetadata {
  /** Output only. Name of the verb executed by the operation. */
  verb?: string;
  /** Output only. Human-readable status of the operation, if any. */
  statusMessage?: string;
  /** Output only. The time the operation was created. */
  createTime?: string;
  /** Output only. Server-defined resource path for the target of the operation. */
  target?: string;
  /** Output only. Identifies whether the user has requested cancellation of the operation. Operations that have successfully been cancelled have google.longrunning.Operation.error value with a google.rpc.Status.code of `1`, corresponding to `Code.CANCELLED`. */
  requestedCancellation?: boolean;
  /** Output only. API version used to start the operation. */
  apiVersion?: string;
  /** Output only. The time the operation finished running. */
  endTime?: string;
}

export const GoogleCloudBeyondcorpAppconnectorsV1alphaAppConnectorOperationMetadata: Schema.Schema<GoogleCloudBeyondcorpAppconnectorsV1alphaAppConnectorOperationMetadata> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    verb: Schema.optional(Schema.String),
    statusMessage: Schema.optional(Schema.String),
    createTime: Schema.optional(Schema.String),
    target: Schema.optional(Schema.String),
    requestedCancellation: Schema.optional(Schema.Boolean),
    apiVersion: Schema.optional(Schema.String),
    endTime: Schema.optional(Schema.String),
  }).annotate({
    identifier:
      "GoogleCloudBeyondcorpAppconnectorsV1alphaAppConnectorOperationMetadata",
  });

export interface GoogleCloudBeyondcorpSaasplatformSubscriptionsV1alphaListSubscriptionsResponse {
  /** A list of BeyondCorp Subscriptions in the organization. */
  subscriptions?: ReadonlyArray<GoogleCloudBeyondcorpSaasplatformSubscriptionsV1alphaSubscription>;
  /** A token to retrieve the next page of results, or empty if there are no more results in the list. */
  nextPageToken?: string;
}

export const GoogleCloudBeyondcorpSaasplatformSubscriptionsV1alphaListSubscriptionsResponse: Schema.Schema<GoogleCloudBeyondcorpSaasplatformSubscriptionsV1alphaListSubscriptionsResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptions: Schema.optional(
      Schema.Array(
        GoogleCloudBeyondcorpSaasplatformSubscriptionsV1alphaSubscription,
      ),
    ),
    nextPageToken: Schema.optional(Schema.String),
  }).annotate({
    identifier:
      "GoogleCloudBeyondcorpSaasplatformSubscriptionsV1alphaListSubscriptionsResponse",
  });

export interface Tunnelv1ProtoTunnelerError {
  /** retryable isn't used for now, but we may want to reuse it in the future. */
  retryable?: boolean;
  /** Original raw error */
  err?: string;
}

export const Tunnelv1ProtoTunnelerError: Schema.Schema<Tunnelv1ProtoTunnelerError> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    retryable: Schema.optional(Schema.Boolean),
    err: Schema.optional(Schema.String),
  }).annotate({ identifier: "Tunnelv1ProtoTunnelerError" });

export interface Tunnelv1ProtoTunnelerInfo {
  /** id is the unique id of a tunneler. */
  id?: string;
  /** backoff_retry_count stores the number of times the tunneler has been retried by tunManager for current backoff sequence. Gets reset to 0 if time difference between 2 consecutive retries exceeds backoffRetryResetTime. */
  backoffRetryCount?: number;
  /** total_retry_count stores the total number of times the tunneler has been retried by tunManager. */
  totalRetryCount?: number;
  /** latest_err stores the Error for the latest tunneler failure. Gets reset everytime the tunneler is retried by tunManager. */
  latestErr?: Tunnelv1ProtoTunnelerError;
  /** latest_retry_time stores the time when the tunneler was last restarted. */
  latestRetryTime?: string;
}

export const Tunnelv1ProtoTunnelerInfo: Schema.Schema<Tunnelv1ProtoTunnelerInfo> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.optional(Schema.String),
    backoffRetryCount: Schema.optional(Schema.Number),
    totalRetryCount: Schema.optional(Schema.Number),
    latestErr: Schema.optional(Tunnelv1ProtoTunnelerError),
    latestRetryTime: Schema.optional(Schema.String),
  }).annotate({ identifier: "Tunnelv1ProtoTunnelerInfo" });

export interface GoogleRpcStatus {
  /** A developer-facing error message, which should be in English. Any user-facing error message should be localized and sent in the google.rpc.Status.details field, or localized by the client. */
  message?: string;
  /** A list of messages that carry the error details. There is a common set of message types for APIs to use. */
  details?: ReadonlyArray<Record<string, unknown>>;
  /** The status code, which should be an enum value of google.rpc.Code. */
  code?: number;
}

export const GoogleRpcStatus: Schema.Schema<GoogleRpcStatus> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    message: Schema.optional(Schema.String),
    details: Schema.optional(
      Schema.Array(Schema.Record(Schema.String, Schema.Unknown)),
    ),
    code: Schema.optional(Schema.Number),
  }).annotate({ identifier: "GoogleRpcStatus" });

export interface ApplicationEndpoint {
  /** Required. Hostname or IP address of the remote application endpoint. */
  host?: string;
  /** Required. Port of the remote application endpoint. */
  port?: number;
}

export const ApplicationEndpoint: Schema.Schema<ApplicationEndpoint> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    host: Schema.optional(Schema.String),
    port: Schema.optional(Schema.Number),
  }).annotate({ identifier: "ApplicationEndpoint" });

export interface Connection {
  /** Output only. A unique identifier for the instance generated by the system. */
  uid?: string;
  /** Required. Unique resource name of the connection. The name is ignored when creating a connection. */
  name?: string;
  /** Output only. Timestamp when the resource was last modified. */
  updateTime?: string;
  /** Required. The type of network connectivity used by the connection. */
  type?: "TYPE_UNSPECIFIED" | "TCP_PROXY" | (string & {});
  /** Output only. Timestamp when the resource was created. */
  createTime?: string;
  /** Optional. List of [google.cloud.beyondcorp.v1main.Connector.name] that are authorised to be associated with this Connection. */
  connectors?: ReadonlyArray<string>;
  /** Optional. Resource labels to represent user provided metadata. */
  labels?: Record<string, string>;
  /** Optional. Gateway used by the connection. */
  gateway?: Gateway;
  /** Optional. An arbitrary user-provided name for the connection. Cannot exceed 64 characters. */
  displayName?: string;
  /** Output only. The current state of the connection. */
  state?:
    | "STATE_UNSPECIFIED"
    | "CREATING"
    | "CREATED"
    | "UPDATING"
    | "DELETING"
    | "DOWN"
    | (string & {});
  /** Required. Address of the remote application endpoint for the BeyondCorp Connection. */
  applicationEndpoint?: ApplicationEndpoint;
}

export const Connection: Schema.Schema<Connection> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    uid: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    updateTime: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    createTime: Schema.optional(Schema.String),
    connectors: Schema.optional(Schema.Array(Schema.String)),
    labels: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    gateway: Schema.optional(Gateway),
    displayName: Schema.optional(Schema.String),
    state: Schema.optional(Schema.String),
    applicationEndpoint: Schema.optional(ApplicationEndpoint),
  }).annotate({ identifier: "Connection" });

export interface ConnectionDetails {
  /** A BeyondCorp Connection in the project. */
  connection?: Connection;
  /** If type=GCP_REGIONAL_MIG, contains most recent VM instances, like "https://www.googleapis.com/compute/v1/projects/{project_id}/zones/{zone_id}/instances/{instance_id}". */
  recentMigVms?: ReadonlyArray<string>;
}

export const ConnectionDetails: Schema.Schema<ConnectionDetails> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    connection: Schema.optional(Connection),
    recentMigVms: Schema.optional(Schema.Array(Schema.String)),
  }).annotate({ identifier: "ConnectionDetails" });

export interface GoogleCloudBeyondcorpAppconnectorsV1AppConnectorOperationMetadata {
  /** Output only. Human-readable status of the operation, if any. */
  statusMessage?: string;
  /** Output only. Name of the verb executed by the operation. */
  verb?: string;
  /** Output only. The time the operation was created. */
  createTime?: string;
  /** Output only. Server-defined resource path for the target of the operation. */
  target?: string;
  /** Output only. API version used to start the operation. */
  apiVersion?: string;
  /** Output only. Identifies whether the user has requested cancellation of the operation. Operations that have successfully been cancelled have google.longrunning.Operation.error value with a google.rpc.Status.code of `1`, corresponding to `Code.CANCELLED`. */
  requestedCancellation?: boolean;
  /** Output only. The time the operation finished running. */
  endTime?: string;
}

export const GoogleCloudBeyondcorpAppconnectorsV1AppConnectorOperationMetadata: Schema.Schema<GoogleCloudBeyondcorpAppconnectorsV1AppConnectorOperationMetadata> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    statusMessage: Schema.optional(Schema.String),
    verb: Schema.optional(Schema.String),
    createTime: Schema.optional(Schema.String),
    target: Schema.optional(Schema.String),
    apiVersion: Schema.optional(Schema.String),
    requestedCancellation: Schema.optional(Schema.Boolean),
    endTime: Schema.optional(Schema.String),
  }).annotate({
    identifier:
      "GoogleCloudBeyondcorpAppconnectorsV1AppConnectorOperationMetadata",
  });

export interface GoogleCloudBeyondcorpSecuritygatewaysV1alphaServiceDiscoveryApiGatewayOperationDescriptor {
  /** Optional. Contains the URI path fragment where HTTP request is sent. */
  path?: string;
}

export const GoogleCloudBeyondcorpSecuritygatewaysV1alphaServiceDiscoveryApiGatewayOperationDescriptor: Schema.Schema<GoogleCloudBeyondcorpSecuritygatewaysV1alphaServiceDiscoveryApiGatewayOperationDescriptor> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    path: Schema.optional(Schema.String),
  }).annotate({
    identifier:
      "GoogleCloudBeyondcorpSecuritygatewaysV1alphaServiceDiscoveryApiGatewayOperationDescriptor",
  });

export interface GoogleCloudBeyondcorpSecuritygatewaysV1alphaServiceDiscoveryApiGateway {
  /** Optional. Enables fetching resource model updates to alter service behavior per Chrome profile. */
  resourceOverride?: GoogleCloudBeyondcorpSecuritygatewaysV1alphaServiceDiscoveryApiGatewayOperationDescriptor;
}

export const GoogleCloudBeyondcorpSecuritygatewaysV1alphaServiceDiscoveryApiGateway: Schema.Schema<GoogleCloudBeyondcorpSecuritygatewaysV1alphaServiceDiscoveryApiGateway> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    resourceOverride: Schema.optional(
      GoogleCloudBeyondcorpSecuritygatewaysV1alphaServiceDiscoveryApiGatewayOperationDescriptor,
    ),
  }).annotate({
    identifier:
      "GoogleCloudBeyondcorpSecuritygatewaysV1alphaServiceDiscoveryApiGateway",
  });

export interface GoogleCloudBeyondcorpSecuritygatewaysV1alphaServiceDiscovery {
  /** Optional. External API configuration. */
  apiGateway?: GoogleCloudBeyondcorpSecuritygatewaysV1alphaServiceDiscoveryApiGateway;
}

export const GoogleCloudBeyondcorpSecuritygatewaysV1alphaServiceDiscovery: Schema.Schema<GoogleCloudBeyondcorpSecuritygatewaysV1alphaServiceDiscovery> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    apiGateway: Schema.optional(
      GoogleCloudBeyondcorpSecuritygatewaysV1alphaServiceDiscoveryApiGateway,
    ),
  }).annotate({
    identifier: "GoogleCloudBeyondcorpSecuritygatewaysV1alphaServiceDiscovery",
  });

export interface GoogleLongrunningOperation {
  /** The server-assigned name, which is only unique within the same service that originally returns it. If you use the default HTTP mapping, the `name` should be a resource name ending with `operations/{unique_id}`. */
  name?: string;
  /** Service-specific metadata associated with the operation. It typically contains progress information and common metadata such as create time. Some services might not provide such metadata. Any method that returns a long-running operation should document the metadata type, if any. */
  metadata?: Record<string, unknown>;
  /** If the value is `false`, it means the operation is still in progress. If `true`, the operation is completed, and either `error` or `response` is available. */
  done?: boolean;
  /** The normal, successful response of the operation. If the original method returns no data on success, such as `Delete`, the response is `google.protobuf.Empty`. If the original method is standard `Get`/`Create`/`Update`, the response should be the resource. For other methods, the response should have the type `XxxResponse`, where `Xxx` is the original method name. For example, if the original method name is `TakeSnapshot()`, the inferred response type is `TakeSnapshotResponse`. */
  response?: Record<string, unknown>;
  /** The error result of the operation in case of failure or cancellation. */
  error?: GoogleRpcStatus;
}

export const GoogleLongrunningOperation: Schema.Schema<GoogleLongrunningOperation> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.optional(Schema.String),
    metadata: Schema.optional(Schema.Record(Schema.String, Schema.Unknown)),
    done: Schema.optional(Schema.Boolean),
    response: Schema.optional(Schema.Record(Schema.String, Schema.Unknown)),
    error: Schema.optional(GoogleRpcStatus),
  }).annotate({ identifier: "GoogleLongrunningOperation" });

export interface AppGatewayOperationMetadata {
  /** Output only. The time the operation was created. */
  createTime?: string;
  /** Output only. Server-defined resource path for the target of the operation. */
  target?: string;
  /** Output only. Human-readable status of the operation, if any. */
  statusMessage?: string;
  /** Output only. Name of the verb executed by the operation. */
  verb?: string;
  /** Output only. The time the operation finished running. */
  endTime?: string;
  /** Output only. API version used to start the operation. */
  apiVersion?: string;
  /** Output only. Identifies whether the user has requested cancellation of the operation. Operations that have successfully been cancelled have google.longrunning.Operation.error value with a google.rpc.Status.code of `1`, corresponding to `Code.CANCELLED`. */
  requestedCancellation?: boolean;
}

export const AppGatewayOperationMetadata: Schema.Schema<AppGatewayOperationMetadata> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    createTime: Schema.optional(Schema.String),
    target: Schema.optional(Schema.String),
    statusMessage: Schema.optional(Schema.String),
    verb: Schema.optional(Schema.String),
    endTime: Schema.optional(Schema.String),
    apiVersion: Schema.optional(Schema.String),
    requestedCancellation: Schema.optional(Schema.Boolean),
  }).annotate({ identifier: "AppGatewayOperationMetadata" });

export interface GoogleCloudBeyondcorpAppconnectorsV1alphaAppConnectorPrincipalInfoServiceAccount {
  /** Email address of the service account. */
  email?: string;
}

export const GoogleCloudBeyondcorpAppconnectorsV1alphaAppConnectorPrincipalInfoServiceAccount: Schema.Schema<GoogleCloudBeyondcorpAppconnectorsV1alphaAppConnectorPrincipalInfoServiceAccount> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    email: Schema.optional(Schema.String),
  }).annotate({
    identifier:
      "GoogleCloudBeyondcorpAppconnectorsV1alphaAppConnectorPrincipalInfoServiceAccount",
  });

export interface GoogleCloudBeyondcorpAppconnectorsV1alphaAppConnectorPrincipalInfo {
  /** A GCP service account. */
  serviceAccount?: GoogleCloudBeyondcorpAppconnectorsV1alphaAppConnectorPrincipalInfoServiceAccount;
}

export const GoogleCloudBeyondcorpAppconnectorsV1alphaAppConnectorPrincipalInfo: Schema.Schema<GoogleCloudBeyondcorpAppconnectorsV1alphaAppConnectorPrincipalInfo> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    serviceAccount: Schema.optional(
      GoogleCloudBeyondcorpAppconnectorsV1alphaAppConnectorPrincipalInfoServiceAccount,
    ),
  }).annotate({
    identifier:
      "GoogleCloudBeyondcorpAppconnectorsV1alphaAppConnectorPrincipalInfo",
  });

export interface GoogleCloudBeyondcorpAppconnectionsV1alphaAppConnectionGateway {
  /** Output only. L7 private service connection for this resource. */
  l7psc?: string;
  /** Required. The type of hosting used by the gateway. */
  type?: "TYPE_UNSPECIFIED" | "GCP_REGIONAL_MIG" | (string & {});
  /** Required. AppGateway name in following format: `projects/{project_id}/locations/{location_id}/appgateways/{gateway_id}` */
  appGateway?: string;
  /** Output only. Ingress port reserved on the gateways for this AppConnection, if not specified or zero, the default port is 19443. */
  ingressPort?: number;
  /** Output only. Server-defined URI for this resource. */
  uri?: string;
}

export const GoogleCloudBeyondcorpAppconnectionsV1alphaAppConnectionGateway: Schema.Schema<GoogleCloudBeyondcorpAppconnectionsV1alphaAppConnectionGateway> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    l7psc: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    appGateway: Schema.optional(Schema.String),
    ingressPort: Schema.optional(Schema.Number),
    uri: Schema.optional(Schema.String),
  }).annotate({
    identifier:
      "GoogleCloudBeyondcorpAppconnectionsV1alphaAppConnectionGateway",
  });

export interface GoogleCloudBeyondcorpAppconnectionsV1alphaAppConnectionApplicationEndpoint {
  /** Required. Port of the remote application endpoint. */
  port?: number;
  /** Required. Hostname or IP address of the remote application endpoint. */
  host?: string;
}

export const GoogleCloudBeyondcorpAppconnectionsV1alphaAppConnectionApplicationEndpoint: Schema.Schema<GoogleCloudBeyondcorpAppconnectionsV1alphaAppConnectionApplicationEndpoint> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    port: Schema.optional(Schema.Number),
    host: Schema.optional(Schema.String),
  }).annotate({
    identifier:
      "GoogleCloudBeyondcorpAppconnectionsV1alphaAppConnectionApplicationEndpoint",
  });

export interface GoogleCloudBeyondcorpAppconnectionsV1alphaAppConnection {
  /** Output only. The current state of the AppConnection. */
  state?:
    | "STATE_UNSPECIFIED"
    | "CREATING"
    | "CREATED"
    | "UPDATING"
    | "DELETING"
    | "DOWN"
    | (string & {});
  /** Output only. Reserved for future use. */
  satisfiesPzi?: boolean;
  /** Required. Unique resource name of the AppConnection. The name is ignored when creating a AppConnection. */
  name?: string;
  /** Output only. A unique identifier for the instance generated by the system. */
  uid?: string;
  /** Optional. An arbitrary user-provided name for the AppConnection. Cannot exceed 64 characters. */
  displayName?: string;
  /** Optional. Gateway used by the AppConnection. */
  gateway?: GoogleCloudBeyondcorpAppconnectionsV1alphaAppConnectionGateway;
  /** Required. Address of the remote application endpoint for the BeyondCorp AppConnection. */
  applicationEndpoint?: GoogleCloudBeyondcorpAppconnectionsV1alphaAppConnectionApplicationEndpoint;
  /** Output only. Timestamp when the resource was last modified. */
  updateTime?: string;
  /** Required. The type of network connectivity used by the AppConnection. */
  type?: "TYPE_UNSPECIFIED" | "TCP_PROXY" | (string & {});
  /** Output only. Reserved for future use. */
  satisfiesPzs?: boolean;
  /** Optional. Resource labels to represent user provided metadata. */
  labels?: Record<string, string>;
  /** Output only. Timestamp when the resource was created. */
  createTime?: string;
  /** Optional. List of [google.cloud.beyondcorp.v1main.Connector.name] that are authorized to be associated with this AppConnection. */
  connectors?: ReadonlyArray<string>;
}

export const GoogleCloudBeyondcorpAppconnectionsV1alphaAppConnection: Schema.Schema<GoogleCloudBeyondcorpAppconnectionsV1alphaAppConnection> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    state: Schema.optional(Schema.String),
    satisfiesPzi: Schema.optional(Schema.Boolean),
    name: Schema.optional(Schema.String),
    uid: Schema.optional(Schema.String),
    displayName: Schema.optional(Schema.String),
    gateway: Schema.optional(
      GoogleCloudBeyondcorpAppconnectionsV1alphaAppConnectionGateway,
    ),
    applicationEndpoint: Schema.optional(
      GoogleCloudBeyondcorpAppconnectionsV1alphaAppConnectionApplicationEndpoint,
    ),
    updateTime: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    satisfiesPzs: Schema.optional(Schema.Boolean),
    labels: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    createTime: Schema.optional(Schema.String),
    connectors: Schema.optional(Schema.Array(Schema.String)),
  }).annotate({
    identifier: "GoogleCloudBeyondcorpAppconnectionsV1alphaAppConnection",
  });

export interface GoogleTypeExpr {
  /** Optional. String indicating the location of the expression for error reporting, e.g. a file name and a position in the file. */
  location?: string;
  /** Optional. Title for the expression, i.e. a short string describing its purpose. This can be used e.g. in UIs which allow to enter the expression. */
  title?: string;
  /** Textual representation of an expression in Common Expression Language syntax. */
  expression?: string;
  /** Optional. Description of the expression. This is a longer text which describes the expression, e.g. when hovered over it in a UI. */
  description?: string;
}

export const GoogleTypeExpr: Schema.Schema<GoogleTypeExpr> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    location: Schema.optional(Schema.String),
    title: Schema.optional(Schema.String),
    expression: Schema.optional(Schema.String),
    description: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleTypeExpr" });

export interface GoogleIamV1Binding {
  /** Role that is assigned to the list of `members`, or principals. For example, `roles/viewer`, `roles/editor`, or `roles/owner`. For an overview of the IAM roles and permissions, see the [IAM documentation](https://cloud.google.com/iam/docs/roles-overview). For a list of the available pre-defined roles, see [here](https://cloud.google.com/iam/docs/understanding-roles). */
  role?: string;
  /** Specifies the principals requesting access for a Google Cloud resource. `members` can have the following values: * `allUsers`: A special identifier that represents anyone who is on the internet; with or without a Google account. * `allAuthenticatedUsers`: A special identifier that represents anyone who is authenticated with a Google account or a service account. Does not include identities that come from external identity providers (IdPs) through identity federation. * `user:{emailid}`: An email address that represents a specific Google account. For example, `alice@example.com` . * `serviceAccount:{emailid}`: An email address that represents a Google service account. For example, `my-other-app@appspot.gserviceaccount.com`. * `serviceAccount:{projectid}.svc.id.goog[{namespace}/{kubernetes-sa}]`: An identifier for a [Kubernetes service account](https://cloud.google.com/kubernetes-engine/docs/how-to/kubernetes-service-accounts). For example, `my-project.svc.id.goog[my-namespace/my-kubernetes-sa]`. * `group:{emailid}`: An email address that represents a Google group. For example, `admins@example.com`. * `domain:{domain}`: The G Suite domain (primary) that represents all the users of that domain. For example, `google.com` or `example.com`. * `principal://iam.googleapis.com/locations/global/workforcePools/{pool_id}/subject/{subject_attribute_value}`: A single identity in a workforce identity pool. * `principalSet://iam.googleapis.com/locations/global/workforcePools/{pool_id}/group/{group_id}`: All workforce identities in a group. * `principalSet://iam.googleapis.com/locations/global/workforcePools/{pool_id}/attribute.{attribute_name}/{attribute_value}`: All workforce identities with a specific attribute value. * `principalSet://iam.googleapis.com/locations/global/workforcePools/{pool_id}/*`: All identities in a workforce identity pool. * `principal://iam.googleapis.com/projects/{project_number}/locations/global/workloadIdentityPools/{pool_id}/subject/{subject_attribute_value}`: A single identity in a workload identity pool. * `principalSet://iam.googleapis.com/projects/{project_number}/locations/global/workloadIdentityPools/{pool_id}/group/{group_id}`: A workload identity pool group. * `principalSet://iam.googleapis.com/projects/{project_number}/locations/global/workloadIdentityPools/{pool_id}/attribute.{attribute_name}/{attribute_value}`: All identities in a workload identity pool with a certain attribute. * `principalSet://iam.googleapis.com/projects/{project_number}/locations/global/workloadIdentityPools/{pool_id}/*`: All identities in a workload identity pool. * `deleted:user:{emailid}?uid={uniqueid}`: An email address (plus unique identifier) representing a user that has been recently deleted. For example, `alice@example.com?uid=123456789012345678901`. If the user is recovered, this value reverts to `user:{emailid}` and the recovered user retains the role in the binding. * `deleted:serviceAccount:{emailid}?uid={uniqueid}`: An email address (plus unique identifier) representing a service account that has been recently deleted. For example, `my-other-app@appspot.gserviceaccount.com?uid=123456789012345678901`. If the service account is undeleted, this value reverts to `serviceAccount:{emailid}` and the undeleted service account retains the role in the binding. * `deleted:group:{emailid}?uid={uniqueid}`: An email address (plus unique identifier) representing a Google group that has been recently deleted. For example, `admins@example.com?uid=123456789012345678901`. If the group is recovered, this value reverts to `group:{emailid}` and the recovered group retains the role in the binding. * `deleted:principal://iam.googleapis.com/locations/global/workforcePools/{pool_id}/subject/{subject_attribute_value}`: Deleted single identity in a workforce identity pool. For example, `deleted:principal://iam.googleapis.com/locations/global/workforcePools/my-pool-id/subject/my-subject-attribute-value`. */
  members?: ReadonlyArray<string>;
  /** The condition that is associated with this binding. If the condition evaluates to `true`, then this binding applies to the current request. If the condition evaluates to `false`, then this binding does not apply to the current request. However, a different role binding might grant the same role to one or more of the principals in this binding. To learn which resources support conditions in their IAM policies, see the [IAM documentation](https://cloud.google.com/iam/help/conditions/resource-policies). */
  condition?: GoogleTypeExpr;
}

export const GoogleIamV1Binding: Schema.Schema<GoogleIamV1Binding> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    role: Schema.optional(Schema.String),
    members: Schema.optional(Schema.Array(Schema.String)),
    condition: Schema.optional(GoogleTypeExpr),
  }).annotate({ identifier: "GoogleIamV1Binding" });

export interface GoogleIamV1AuditLogConfig {
  /** The log type that this config enables. */
  logType?:
    | "LOG_TYPE_UNSPECIFIED"
    | "ADMIN_READ"
    | "DATA_WRITE"
    | "DATA_READ"
    | (string & {});
  /** Specifies the identities that do not cause logging for this type of permission. Follows the same format of Binding.members. */
  exemptedMembers?: ReadonlyArray<string>;
}

export const GoogleIamV1AuditLogConfig: Schema.Schema<GoogleIamV1AuditLogConfig> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    logType: Schema.optional(Schema.String),
    exemptedMembers: Schema.optional(Schema.Array(Schema.String)),
  }).annotate({ identifier: "GoogleIamV1AuditLogConfig" });

export interface GoogleIamV1AuditConfig {
  /** Specifies a service that will be enabled for audit logging. For example, `storage.googleapis.com`, `cloudsql.googleapis.com`. `allServices` is a special value that covers all services. */
  service?: string;
  /** The configuration for logging of each type of permission. */
  auditLogConfigs?: ReadonlyArray<GoogleIamV1AuditLogConfig>;
}

export const GoogleIamV1AuditConfig: Schema.Schema<GoogleIamV1AuditConfig> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    service: Schema.optional(Schema.String),
    auditLogConfigs: Schema.optional(Schema.Array(GoogleIamV1AuditLogConfig)),
  }).annotate({ identifier: "GoogleIamV1AuditConfig" });

export interface GoogleLongrunningListOperationsResponse {
  /** The standard List next-page token. */
  nextPageToken?: string;
  /** A list of operations that matches the specified filter in the request. */
  operations?: ReadonlyArray<GoogleLongrunningOperation>;
  /** Unordered list. Unreachable resources. Populated when the request sets `ListOperationsRequest.return_partial_success` and reads across collections. For example, when attempting to list all resources across all supported locations. */
  unreachable?: ReadonlyArray<string>;
}

export const GoogleLongrunningListOperationsResponse: Schema.Schema<GoogleLongrunningListOperationsResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    nextPageToken: Schema.optional(Schema.String),
    operations: Schema.optional(Schema.Array(GoogleLongrunningOperation)),
    unreachable: Schema.optional(Schema.Array(Schema.String)),
  }).annotate({ identifier: "GoogleLongrunningListOperationsResponse" });

export interface GoogleCloudBeyondcorpSecuritygatewaysV1alphaContextualHeadersDelegatedUserInfo {
  /** Optional. The delegated user's information. */
  outputType?:
    | "OUTPUT_TYPE_UNSPECIFIED"
    | "PROTOBUF"
    | "JSON"
    | "NONE"
    | (string & {});
}

export const GoogleCloudBeyondcorpSecuritygatewaysV1alphaContextualHeadersDelegatedUserInfo: Schema.Schema<GoogleCloudBeyondcorpSecuritygatewaysV1alphaContextualHeadersDelegatedUserInfo> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    outputType: Schema.optional(Schema.String),
  }).annotate({
    identifier:
      "GoogleCloudBeyondcorpSecuritygatewaysV1alphaContextualHeadersDelegatedUserInfo",
  });

export interface GoogleCloudBeyondcorpSecuritygatewaysV1alphaContextualHeadersDelegatedDeviceInfo {
  /** Optional. The output type details for the delegated device. */
  outputType?:
    | "OUTPUT_TYPE_UNSPECIFIED"
    | "PROTOBUF"
    | "JSON"
    | "NONE"
    | (string & {});
}

export const GoogleCloudBeyondcorpSecuritygatewaysV1alphaContextualHeadersDelegatedDeviceInfo: Schema.Schema<GoogleCloudBeyondcorpSecuritygatewaysV1alphaContextualHeadersDelegatedDeviceInfo> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    outputType: Schema.optional(Schema.String),
  }).annotate({
    identifier:
      "GoogleCloudBeyondcorpSecuritygatewaysV1alphaContextualHeadersDelegatedDeviceInfo",
  });

export interface GoogleCloudBeyondcorpSecuritygatewaysV1alphaContextualHeaders {
  /** Optional. Default output type for all enabled headers. */
  outputType?:
    | "OUTPUT_TYPE_UNSPECIFIED"
    | "PROTOBUF"
    | "JSON"
    | "NONE"
    | (string & {});
  /** Optional. User details. */
  userInfo?: GoogleCloudBeyondcorpSecuritygatewaysV1alphaContextualHeadersDelegatedUserInfo;
  /** Optional. The device information configuration. */
  deviceInfo?: GoogleCloudBeyondcorpSecuritygatewaysV1alphaContextualHeadersDelegatedDeviceInfo;
  /** Optional. Group details. */
  groupInfo?: GoogleCloudBeyondcorpSecuritygatewaysV1alphaContextualHeadersDelegatedGroupInfo;
}

export const GoogleCloudBeyondcorpSecuritygatewaysV1alphaContextualHeaders: Schema.Schema<GoogleCloudBeyondcorpSecuritygatewaysV1alphaContextualHeaders> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    outputType: Schema.optional(Schema.String),
    userInfo: Schema.optional(
      GoogleCloudBeyondcorpSecuritygatewaysV1alphaContextualHeadersDelegatedUserInfo,
    ),
    deviceInfo: Schema.optional(
      GoogleCloudBeyondcorpSecuritygatewaysV1alphaContextualHeadersDelegatedDeviceInfo,
    ),
    groupInfo: Schema.optional(
      GoogleCloudBeyondcorpSecuritygatewaysV1alphaContextualHeadersDelegatedGroupInfo,
    ),
  }).annotate({
    identifier: "GoogleCloudBeyondcorpSecuritygatewaysV1alphaContextualHeaders",
  });

export interface GoogleCloudBeyondcorpSecuritygatewaysV1alphaProxyProtocolConfig {
  /** Optional. List of the allowed client header names. */
  allowedClientHeaders?: ReadonlyArray<string>;
  /** Optional. Configuration for the contextual headers. */
  contextualHeaders?: GoogleCloudBeyondcorpSecuritygatewaysV1alphaContextualHeaders;
  /** Optional. Custom resource specific headers along with the values. The names should conform to RFC 9110: >Field names can contain alphanumeric characters, hyphens, and periods, can contain only ASCII-printable characters and tabs, and must start with a letter. */
  metadataHeaders?: Record<string, string>;
  /** Optional. The security gateway identity configuration. */
  gatewayIdentity?:
    | "GATEWAY_IDENTITY_UNSPECIFIED"
    | "RESOURCE_NAME"
    | (string & {});
  /** Optional. Client IP configuration. The client IP address is included if true. */
  clientIp?: boolean;
}

export const GoogleCloudBeyondcorpSecuritygatewaysV1alphaProxyProtocolConfig: Schema.Schema<GoogleCloudBeyondcorpSecuritygatewaysV1alphaProxyProtocolConfig> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    allowedClientHeaders: Schema.optional(Schema.Array(Schema.String)),
    contextualHeaders: Schema.optional(
      GoogleCloudBeyondcorpSecuritygatewaysV1alphaContextualHeaders,
    ),
    metadataHeaders: Schema.optional(
      Schema.Record(Schema.String, Schema.String),
    ),
    gatewayIdentity: Schema.optional(Schema.String),
    clientIp: Schema.optional(Schema.Boolean),
  }).annotate({
    identifier:
      "GoogleCloudBeyondcorpSecuritygatewaysV1alphaProxyProtocolConfig",
  });

export interface GoogleCloudBeyondcorpAppconnectorsV1alphaContainerHealthDetails {
  /** The version of the expected config. */
  expectedConfigVersion?: string;
  /** The extended status. Such as ExitCode, StartedAt, FinishedAt, etc. */
  extendedStatus?: Record<string, string>;
  /** The latest error message. */
  errorMsg?: string;
  /** The version of the current config. */
  currentConfigVersion?: string;
}

export const GoogleCloudBeyondcorpAppconnectorsV1alphaContainerHealthDetails: Schema.Schema<GoogleCloudBeyondcorpAppconnectorsV1alphaContainerHealthDetails> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    expectedConfigVersion: Schema.optional(Schema.String),
    extendedStatus: Schema.optional(
      Schema.Record(Schema.String, Schema.String),
    ),
    errorMsg: Schema.optional(Schema.String),
    currentConfigVersion: Schema.optional(Schema.String),
  }).annotate({
    identifier:
      "GoogleCloudBeyondcorpAppconnectorsV1alphaContainerHealthDetails",
  });

export interface CloudSecurityZerotrustApplinkAppConnectorProtoGateway {
  /** name is the name of an instance running a gateway. It is the unique ID for a gateway. All gateways under the same connection have the same prefix. It is derived from the gateway URL. For example, name=${instance} assuming a gateway URL. https://www.googleapis.com/compute/${version}/projects/${project}/zones/${zone}/instances/${instance} */
  name?: string;
  /** zone represents the zone the instance belongs. It is derived from the gateway URL. For example, zone=${zone} assuming a gateway URL. https://www.googleapis.com/compute/${version}/projects/${project}/zones/${zone}/instances/${instance} */
  zone?: string;
  /** port specifies the port of the gateway for tunnel connections from the connectors. */
  port?: number;
  /** project is the tenant project the gateway belongs to. Different from the project in the connection, it is a BeyondCorpAPI internally created project to manage all the gateways. It is sharing the same network with the consumer project user owned. It is derived from the gateway URL. For example, project=${project} assuming a gateway URL. https://www.googleapis.com/compute/${version}/projects/${project}/zones/${zone}/instances/${instance} */
  project?: string;
  /** self_link is the gateway URL in the form https://www.googleapis.com/compute/${version}/projects/${project}/zones/${zone}/instances/${instance} */
  selfLink?: string;
  /** interface specifies the network interface of the gateway to connect to. */
  interface?: string;
}

export const CloudSecurityZerotrustApplinkAppConnectorProtoGateway: Schema.Schema<CloudSecurityZerotrustApplinkAppConnectorProtoGateway> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.optional(Schema.String),
    zone: Schema.optional(Schema.String),
    port: Schema.optional(Schema.Number),
    project: Schema.optional(Schema.String),
    selfLink: Schema.optional(Schema.String),
    interface: Schema.optional(Schema.String),
  }).annotate({
    identifier: "CloudSecurityZerotrustApplinkAppConnectorProtoGateway",
  });

export interface GoogleCloudBeyondcorpAppconnectorsV1alphaImageConfig {
  /** The initial image the remote agent will attempt to run for the control plane. Format would be a gcr image path, e.g.: gcr.io/PROJECT-ID/my-image:tag1 */
  targetImage?: string;
  /** The stable image that the remote agent will fallback to if the target image fails. Format would be a gcr image path, e.g.: gcr.io/PROJECT-ID/my-image:tag1 */
  stableImage?: string;
}

export const GoogleCloudBeyondcorpAppconnectorsV1alphaImageConfig: Schema.Schema<GoogleCloudBeyondcorpAppconnectorsV1alphaImageConfig> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    targetImage: Schema.optional(Schema.String),
    stableImage: Schema.optional(Schema.String),
  }).annotate({
    identifier: "GoogleCloudBeyondcorpAppconnectorsV1alphaImageConfig",
  });

export interface GoogleCloudBeyondcorpAppconnectorsV1alphaNotificationConfig {
  /** Cloud Pub/Sub Configuration to receive notifications. */
  pubsubNotification?: GoogleCloudBeyondcorpAppconnectorsV1alphaNotificationConfigCloudPubSubNotificationConfig;
}

export const GoogleCloudBeyondcorpAppconnectorsV1alphaNotificationConfig: Schema.Schema<GoogleCloudBeyondcorpAppconnectorsV1alphaNotificationConfig> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    pubsubNotification: Schema.optional(
      GoogleCloudBeyondcorpAppconnectorsV1alphaNotificationConfigCloudPubSubNotificationConfig,
    ),
  }).annotate({
    identifier: "GoogleCloudBeyondcorpAppconnectorsV1alphaNotificationConfig",
  });

export interface GoogleCloudBeyondcorpAppconnectorsV1alphaAppConnectorInstanceConfig {
  /** ImageConfig defines the GCR images to run for the remote agent's control plane. */
  imageConfig?: GoogleCloudBeyondcorpAppconnectorsV1alphaImageConfig;
  /** The SLM instance agent configuration. */
  instanceConfig?: Record<string, unknown>;
  /** NotificationConfig defines the notification mechanism that the remote instance should subscribe to in order to receive notification. */
  notificationConfig?: GoogleCloudBeyondcorpAppconnectorsV1alphaNotificationConfig;
  /** Required. A monotonically increasing number generated and maintained by the API provider. Every time a config changes in the backend, the sequenceNumber should be bumped up to reflect the change. */
  sequenceNumber?: string;
}

export const GoogleCloudBeyondcorpAppconnectorsV1alphaAppConnectorInstanceConfig: Schema.Schema<GoogleCloudBeyondcorpAppconnectorsV1alphaAppConnectorInstanceConfig> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    imageConfig: Schema.optional(
      GoogleCloudBeyondcorpAppconnectorsV1alphaImageConfig,
    ),
    instanceConfig: Schema.optional(
      Schema.Record(Schema.String, Schema.Unknown),
    ),
    notificationConfig: Schema.optional(
      GoogleCloudBeyondcorpAppconnectorsV1alphaNotificationConfig,
    ),
    sequenceNumber: Schema.optional(Schema.String),
  }).annotate({
    identifier:
      "GoogleCloudBeyondcorpAppconnectorsV1alphaAppConnectorInstanceConfig",
  });

export interface GoogleCloudBeyondcorpAppconnectionsV1alphaResolveAppConnectionsResponseAppConnectionDetails {
  /** If type=GCP_REGIONAL_MIG, contains most recent VM instances, like `https://www.googleapis.com/compute/v1/projects/{project_id}/zones/{zone_id}/instances/{instance_id}`. */
  recentMigVms?: ReadonlyArray<string>;
  /** A BeyondCorp AppConnection in the project. */
  appConnection?: GoogleCloudBeyondcorpAppconnectionsV1alphaAppConnection;
}

export const GoogleCloudBeyondcorpAppconnectionsV1alphaResolveAppConnectionsResponseAppConnectionDetails: Schema.Schema<GoogleCloudBeyondcorpAppconnectionsV1alphaResolveAppConnectionsResponseAppConnectionDetails> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    recentMigVms: Schema.optional(Schema.Array(Schema.String)),
    appConnection: Schema.optional(
      GoogleCloudBeyondcorpAppconnectionsV1alphaAppConnection,
    ),
  }).annotate({
    identifier:
      "GoogleCloudBeyondcorpAppconnectionsV1alphaResolveAppConnectionsResponseAppConnectionDetails",
  });

export interface GoogleCloudBeyondcorpAppconnectionsV1alphaResolveAppConnectionsResponse {
  /** A list of locations that could not be reached. */
  unreachable?: ReadonlyArray<string>;
  /** A list of BeyondCorp AppConnections with details in the project. */
  appConnectionDetails?: ReadonlyArray<GoogleCloudBeyondcorpAppconnectionsV1alphaResolveAppConnectionsResponseAppConnectionDetails>;
  /** A token to retrieve the next page of results, or empty if there are no more results in the list. */
  nextPageToken?: string;
}

export const GoogleCloudBeyondcorpAppconnectionsV1alphaResolveAppConnectionsResponse: Schema.Schema<GoogleCloudBeyondcorpAppconnectionsV1alphaResolveAppConnectionsResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    unreachable: Schema.optional(Schema.Array(Schema.String)),
    appConnectionDetails: Schema.optional(
      Schema.Array(
        GoogleCloudBeyondcorpAppconnectionsV1alphaResolveAppConnectionsResponseAppConnectionDetails,
      ),
    ),
    nextPageToken: Schema.optional(Schema.String),
  }).annotate({
    identifier:
      "GoogleCloudBeyondcorpAppconnectionsV1alphaResolveAppConnectionsResponse",
  });

export interface ReportStatusRequest {
  /** Required. Resource info of the connector. */
  resourceInfo?: ResourceInfo;
  /** Optional. An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes since the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000). */
  requestId?: string;
  /** Optional. If set, validates request by executing a dry-run which would not alter the resource in any way. */
  validateOnly?: boolean;
}

export const ReportStatusRequest: Schema.Schema<ReportStatusRequest> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    resourceInfo: Schema.optional(ResourceInfo),
    requestId: Schema.optional(Schema.String),
    validateOnly: Schema.optional(Schema.Boolean),
  }).annotate({ identifier: "ReportStatusRequest" });

export interface GoogleCloudBeyondcorpAppconnectorsV1alphaRemoteAgentDetails {}

export const GoogleCloudBeyondcorpAppconnectorsV1alphaRemoteAgentDetails: Schema.Schema<GoogleCloudBeyondcorpAppconnectorsV1alphaRemoteAgentDetails> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).annotate({
    identifier: "GoogleCloudBeyondcorpAppconnectorsV1alphaRemoteAgentDetails",
  });

export interface ContainerHealthDetails {
  /** The version of the expected config. */
  expectedConfigVersion?: string;
  /** The extended status. Such as ExitCode, StartedAt, FinishedAt, etc. */
  extendedStatus?: Record<string, string>;
  /** The latest error message. */
  errorMsg?: string;
  /** The version of the current config. */
  currentConfigVersion?: string;
}

export const ContainerHealthDetails: Schema.Schema<ContainerHealthDetails> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    expectedConfigVersion: Schema.optional(Schema.String),
    extendedStatus: Schema.optional(
      Schema.Record(Schema.String, Schema.String),
    ),
    errorMsg: Schema.optional(Schema.String),
    currentConfigVersion: Schema.optional(Schema.String),
  }).annotate({ identifier: "ContainerHealthDetails" });

export interface ConnectionOperationMetadata {
  /** Output only. The time the operation finished running. */
  endTime?: string;
  /** Output only. API version used to start the operation. */
  apiVersion?: string;
  /** Output only. Identifies whether the user has requested cancellation of the operation. Operations that have successfully been cancelled have Operation.error value with a google.rpc.Status.code of 1, corresponding to `Code.CANCELLED`. */
  requestedCancellation?: boolean;
  /** Output only. The time the operation was created. */
  createTime?: string;
  /** Output only. Server-defined resource path for the target of the operation. */
  target?: string;
  /** Output only. Human-readable status of the operation, if any. */
  statusMessage?: string;
  /** Output only. Name of the verb executed by the operation. */
  verb?: string;
}

export const ConnectionOperationMetadata: Schema.Schema<ConnectionOperationMetadata> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    endTime: Schema.optional(Schema.String),
    apiVersion: Schema.optional(Schema.String),
    requestedCancellation: Schema.optional(Schema.Boolean),
    createTime: Schema.optional(Schema.String),
    target: Schema.optional(Schema.String),
    statusMessage: Schema.optional(Schema.String),
    verb: Schema.optional(Schema.String),
  }).annotate({ identifier: "ConnectionOperationMetadata" });

export interface Empty {}

export const Empty: Schema.Schema<Empty> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).annotate({
    identifier: "Empty",
  });

export interface GoogleCloudBeyondcorpAppconnectorsV1alphaResourceInfo {
  /** Specific details for the resource. This is for internal use only. */
  resource?: Record<string, unknown>;
  /** List of Info for the sub level resources. */
  sub?: ReadonlyArray<GoogleCloudBeyondcorpAppconnectorsV1alphaResourceInfo>;
  /** Overall health status. Overall status is derived based on the status of each sub level resources. */
  status?:
    | "HEALTH_STATUS_UNSPECIFIED"
    | "HEALTHY"
    | "UNHEALTHY"
    | "UNRESPONSIVE"
    | "DEGRADED"
    | (string & {});
  /** The timestamp to collect the info. It is suggested to be set by the topmost level resource only. */
  time?: string;
  /** Required. Unique Id for the resource. */
  id?: string;
}

export const GoogleCloudBeyondcorpAppconnectorsV1alphaResourceInfo: Schema.Schema<GoogleCloudBeyondcorpAppconnectorsV1alphaResourceInfo> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      resource: Schema.optional(Schema.Record(Schema.String, Schema.Unknown)),
      sub: Schema.optional(
        Schema.Array(GoogleCloudBeyondcorpAppconnectorsV1alphaResourceInfo),
      ),
      status: Schema.optional(Schema.String),
      time: Schema.optional(Schema.String),
      id: Schema.optional(Schema.String),
    }),
  ).annotate({
    identifier: "GoogleCloudBeyondcorpAppconnectorsV1alphaResourceInfo",
  }) as any as Schema.Schema<GoogleCloudBeyondcorpAppconnectorsV1alphaResourceInfo>;

export interface GoogleCloudBeyondcorpAppconnectorsV1alphaAppConnector {
  /** Optional. Resource info of the connector. */
  resourceInfo?: GoogleCloudBeyondcorpAppconnectorsV1alphaResourceInfo;
  /** Required. Principal information about the Identity of the AppConnector. */
  principalInfo?: GoogleCloudBeyondcorpAppconnectorsV1alphaAppConnectorPrincipalInfo;
  /** Optional. An arbitrary user-provided name for the AppConnector. Cannot exceed 64 characters. */
  displayName?: string;
  /** Output only. The current state of the AppConnector. */
  state?:
    | "STATE_UNSPECIFIED"
    | "CREATING"
    | "CREATED"
    | "UPDATING"
    | "DELETING"
    | "DOWN"
    | (string & {});
  /** Optional. Resource labels to represent user provided metadata. */
  labels?: Record<string, string>;
  /** Output only. Timestamp when the resource was created. */
  createTime?: string;
  /** Required. Unique resource name of the AppConnector. The name is ignored when creating a AppConnector. */
  name?: string;
  /** Output only. Timestamp when the resource was last modified. */
  updateTime?: string;
  /** Output only. A unique identifier for the instance generated by the system. */
  uid?: string;
}

export const GoogleCloudBeyondcorpAppconnectorsV1alphaAppConnector: Schema.Schema<GoogleCloudBeyondcorpAppconnectorsV1alphaAppConnector> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    resourceInfo: Schema.optional(
      GoogleCloudBeyondcorpAppconnectorsV1alphaResourceInfo,
    ),
    principalInfo: Schema.optional(
      GoogleCloudBeyondcorpAppconnectorsV1alphaAppConnectorPrincipalInfo,
    ),
    displayName: Schema.optional(Schema.String),
    state: Schema.optional(Schema.String),
    labels: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    createTime: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    updateTime: Schema.optional(Schema.String),
    uid: Schema.optional(Schema.String),
  }).annotate({
    identifier: "GoogleCloudBeyondcorpAppconnectorsV1alphaAppConnector",
  });

export interface GoogleCloudBeyondcorpSecuritygatewaysV1alphaLoggingConfig {}

export const GoogleCloudBeyondcorpSecuritygatewaysV1alphaLoggingConfig: Schema.Schema<GoogleCloudBeyondcorpSecuritygatewaysV1alphaLoggingConfig> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).annotate({
    identifier: "GoogleCloudBeyondcorpSecuritygatewaysV1alphaLoggingConfig",
  });

export interface GoogleCloudBeyondcorpSecuritygatewaysV1alphaSecurityGateway {
  /** Optional. An arbitrary user-provided name for the SecurityGateway. Cannot exceed 64 characters. */
  displayName?: string;
  /** Output only. The operational state of the SecurityGateway. */
  state?:
    | "STATE_UNSPECIFIED"
    | "CREATING"
    | "UPDATING"
    | "DELETING"
    | "RUNNING"
    | "DOWN"
    | "ERROR"
    | (string & {});
  /** Optional. Shared proxy configuration for all apps. */
  proxyProtocolConfig?: GoogleCloudBeyondcorpSecuritygatewaysV1alphaProxyProtocolConfig;
  /** Output only. IP addresses that will be used for establishing connection to the endpoints. */
  externalIps?: ReadonlyArray<string>;
  /** Identifier. Name of the resource. */
  name?: string;
  /** Output only. Timestamp when the resource was last modified. */
  updateTime?: string;
  /** Optional. Settings related to the Service Discovery. */
  serviceDiscovery?: GoogleCloudBeyondcorpSecuritygatewaysV1alphaServiceDiscovery;
  /** Optional. Map of Hubs that represents regional data path deployment with GCP region as a key. */
  hubs?: Record<string, GoogleCloudBeyondcorpSecuritygatewaysV1alphaHub>;
  /** Optional. Configuration for Cloud Logging. If this field is present, the logging will be enabled. */
  logging?: GoogleCloudBeyondcorpSecuritygatewaysV1alphaLoggingConfig;
  /** Output only. Timestamp when the resource was created. */
  createTime?: string;
  /** Output only. Service account used for operations that involve resources in consumer projects. */
  delegatingServiceAccount?: string;
}

export const GoogleCloudBeyondcorpSecuritygatewaysV1alphaSecurityGateway: Schema.Schema<GoogleCloudBeyondcorpSecuritygatewaysV1alphaSecurityGateway> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    displayName: Schema.optional(Schema.String),
    state: Schema.optional(Schema.String),
    proxyProtocolConfig: Schema.optional(
      GoogleCloudBeyondcorpSecuritygatewaysV1alphaProxyProtocolConfig,
    ),
    externalIps: Schema.optional(Schema.Array(Schema.String)),
    name: Schema.optional(Schema.String),
    updateTime: Schema.optional(Schema.String),
    serviceDiscovery: Schema.optional(
      GoogleCloudBeyondcorpSecuritygatewaysV1alphaServiceDiscovery,
    ),
    hubs: Schema.optional(
      Schema.Record(
        Schema.String,
        GoogleCloudBeyondcorpSecuritygatewaysV1alphaHub,
      ),
    ),
    logging: Schema.optional(
      GoogleCloudBeyondcorpSecuritygatewaysV1alphaLoggingConfig,
    ),
    createTime: Schema.optional(Schema.String),
    delegatingServiceAccount: Schema.optional(Schema.String),
  }).annotate({
    identifier: "GoogleCloudBeyondcorpSecuritygatewaysV1alphaSecurityGateway",
  });

export interface GoogleCloudBeyondcorpSecuritygatewaysV1alphaEndpointMatcher {
  /** Required. Hostname of the application. */
  hostname?: string;
  /** Required. The ports of the application. */
  ports?: ReadonlyArray<number>;
}

export const GoogleCloudBeyondcorpSecuritygatewaysV1alphaEndpointMatcher: Schema.Schema<GoogleCloudBeyondcorpSecuritygatewaysV1alphaEndpointMatcher> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    hostname: Schema.optional(Schema.String),
    ports: Schema.optional(Schema.Array(Schema.Number)),
  }).annotate({
    identifier: "GoogleCloudBeyondcorpSecuritygatewaysV1alphaEndpointMatcher",
  });

export interface GoogleCloudBeyondcorpSecuritygatewaysV1alphaApplicationUpstreamNetwork {
  /** Required. Network name is of the format: `projects/{project}/global/networks/{network} */
  name?: string;
}

export const GoogleCloudBeyondcorpSecuritygatewaysV1alphaApplicationUpstreamNetwork: Schema.Schema<GoogleCloudBeyondcorpSecuritygatewaysV1alphaApplicationUpstreamNetwork> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.optional(Schema.String),
  }).annotate({
    identifier:
      "GoogleCloudBeyondcorpSecuritygatewaysV1alphaApplicationUpstreamNetwork",
  });

export interface GoogleCloudBeyondcorpSecuritygatewaysV1alphaApplicationUpstream {
  /** Network to forward traffic to. */
  network?: GoogleCloudBeyondcorpSecuritygatewaysV1alphaApplicationUpstreamNetwork;
  /** List of the external endpoints to forward traffic to. */
  external?: GoogleCloudBeyondcorpSecuritygatewaysV1alphaApplicationUpstreamExternal;
  /** Optional. Enables proxy protocol configuration for the upstream. */
  proxyProtocol?: GoogleCloudBeyondcorpSecuritygatewaysV1alphaProxyProtocolConfig;
  /** Optional. Routing policy information. */
  egressPolicy?: GoogleCloudBeyondcorpSecuritygatewaysV1alphaEgressPolicy;
}

export const GoogleCloudBeyondcorpSecuritygatewaysV1alphaApplicationUpstream: Schema.Schema<GoogleCloudBeyondcorpSecuritygatewaysV1alphaApplicationUpstream> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    network: Schema.optional(
      GoogleCloudBeyondcorpSecuritygatewaysV1alphaApplicationUpstreamNetwork,
    ),
    external: Schema.optional(
      GoogleCloudBeyondcorpSecuritygatewaysV1alphaApplicationUpstreamExternal,
    ),
    proxyProtocol: Schema.optional(
      GoogleCloudBeyondcorpSecuritygatewaysV1alphaProxyProtocolConfig,
    ),
    egressPolicy: Schema.optional(
      GoogleCloudBeyondcorpSecuritygatewaysV1alphaEgressPolicy,
    ),
  }).annotate({
    identifier:
      "GoogleCloudBeyondcorpSecuritygatewaysV1alphaApplicationUpstream",
  });

export interface GoogleCloudBeyondcorpSecuritygatewaysV1alphaApplication {
  /** Optional. An arbitrary user-provided name for the application resource. Cannot exceed 64 characters. */
  displayName?: string;
  /** Identifier. Name of the resource. */
  name?: string;
  /** Output only. Timestamp when the resource was last modified. */
  updateTime?: string;
  /** Optional. An array of conditions to match the application's network endpoint. Each element in the array is an EndpointMatcher object, which defines a specific combination of a hostname pattern and one or more ports. The application is considered matched if at least one of the EndpointMatcher conditions in this array is met (the conditions are combined using OR logic). Each EndpointMatcher must contain a hostname pattern, such as "example.com", and one or more port numbers specified as a string, such as "443". Hostname and port number examples: "*.example.com", "443" "example.com" and "22" "example.com" and "22,33" */
  endpointMatchers?: ReadonlyArray<GoogleCloudBeyondcorpSecuritygatewaysV1alphaEndpointMatcher>;
  /** Optional. Type of the external application. */
  schema?:
    | "SCHEMA_UNSPECIFIED"
    | "PROXY_GATEWAY"
    | "API_GATEWAY"
    | (string & {});
  /** Output only. Timestamp when the resource was created. */
  createTime?: string;
  /** Optional. Which upstream resources to forward traffic to. */
  upstreams?: ReadonlyArray<GoogleCloudBeyondcorpSecuritygatewaysV1alphaApplicationUpstream>;
}

export const GoogleCloudBeyondcorpSecuritygatewaysV1alphaApplication: Schema.Schema<GoogleCloudBeyondcorpSecuritygatewaysV1alphaApplication> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    displayName: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    updateTime: Schema.optional(Schema.String),
    endpointMatchers: Schema.optional(
      Schema.Array(GoogleCloudBeyondcorpSecuritygatewaysV1alphaEndpointMatcher),
    ),
    schema: Schema.optional(Schema.String),
    createTime: Schema.optional(Schema.String),
    upstreams: Schema.optional(
      Schema.Array(
        GoogleCloudBeyondcorpSecuritygatewaysV1alphaApplicationUpstream,
      ),
    ),
  }).annotate({
    identifier: "GoogleCloudBeyondcorpSecuritygatewaysV1alphaApplication",
  });

export interface GoogleCloudBeyondcorpSecuritygatewaysV1alphaListApplicationsResponse {
  /** A list of BeyondCorp Application in the project. */
  applications?: ReadonlyArray<GoogleCloudBeyondcorpSecuritygatewaysV1alphaApplication>;
  /** A list of locations that could not be reached. */
  unreachable?: ReadonlyArray<string>;
  /** A token to retrieve the next page of results, or empty if there are no more results in the list. */
  nextPageToken?: string;
}

export const GoogleCloudBeyondcorpSecuritygatewaysV1alphaListApplicationsResponse: Schema.Schema<GoogleCloudBeyondcorpSecuritygatewaysV1alphaListApplicationsResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    applications: Schema.optional(
      Schema.Array(GoogleCloudBeyondcorpSecuritygatewaysV1alphaApplication),
    ),
    unreachable: Schema.optional(Schema.Array(Schema.String)),
    nextPageToken: Schema.optional(Schema.String),
  }).annotate({
    identifier:
      "GoogleCloudBeyondcorpSecuritygatewaysV1alphaListApplicationsResponse",
  });

export interface GoogleCloudBeyondcorpAppconnectorsV1alphaListAppConnectorsResponse {
  /** A list of locations that could not be reached. */
  unreachable?: ReadonlyArray<string>;
  /** A list of BeyondCorp AppConnectors in the project. */
  appConnectors?: ReadonlyArray<GoogleCloudBeyondcorpAppconnectorsV1alphaAppConnector>;
  /** A token to retrieve the next page of results, or empty if there are no more results in the list. */
  nextPageToken?: string;
}

export const GoogleCloudBeyondcorpAppconnectorsV1alphaListAppConnectorsResponse: Schema.Schema<GoogleCloudBeyondcorpAppconnectorsV1alphaListAppConnectorsResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    unreachable: Schema.optional(Schema.Array(Schema.String)),
    appConnectors: Schema.optional(
      Schema.Array(GoogleCloudBeyondcorpAppconnectorsV1alphaAppConnector),
    ),
    nextPageToken: Schema.optional(Schema.String),
  }).annotate({
    identifier:
      "GoogleCloudBeyondcorpAppconnectorsV1alphaListAppConnectorsResponse",
  });

export interface GoogleCloudBeyondcorpAppconnectionsV1AppConnectionOperationMetadata {
  /** Output only. The time the operation finished running. */
  endTime?: string;
  /** Output only. API version used to start the operation. */
  apiVersion?: string;
  /** Output only. Identifies whether the user has requested cancellation of the operation. Operations that have successfully been cancelled have google.longrunning.Operation.error value with a google.rpc.Status.code of 1, corresponding to `Code.CANCELLED`. */
  requestedCancellation?: boolean;
  /** Output only. The time the operation was created. */
  createTime?: string;
  /** Output only. Server-defined resource path for the target of the operation. */
  target?: string;
  /** Output only. Human-readable status of the operation, if any. */
  statusMessage?: string;
  /** Output only. Name of the verb executed by the operation. */
  verb?: string;
}

export const GoogleCloudBeyondcorpAppconnectionsV1AppConnectionOperationMetadata: Schema.Schema<GoogleCloudBeyondcorpAppconnectionsV1AppConnectionOperationMetadata> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    endTime: Schema.optional(Schema.String),
    apiVersion: Schema.optional(Schema.String),
    requestedCancellation: Schema.optional(Schema.Boolean),
    createTime: Schema.optional(Schema.String),
    target: Schema.optional(Schema.String),
    statusMessage: Schema.optional(Schema.String),
    verb: Schema.optional(Schema.String),
  }).annotate({
    identifier:
      "GoogleCloudBeyondcorpAppconnectionsV1AppConnectionOperationMetadata",
  });

export interface GoogleIamV1Policy {
  /** Specifies cloud audit logging configuration for this policy. */
  auditConfigs?: ReadonlyArray<GoogleIamV1AuditConfig>;
  /** `etag` is used for optimistic concurrency control as a way to help prevent simultaneous updates of a policy from overwriting each other. It is strongly suggested that systems make use of the `etag` in the read-modify-write cycle to perform policy updates in order to avoid race conditions: An `etag` is returned in the response to `getIamPolicy`, and systems are expected to put that etag in the request to `setIamPolicy` to ensure that their change will be applied to the same version of the policy. **Important:** If you use IAM Conditions, you must include the `etag` field whenever you call `setIamPolicy`. If you omit this field, then IAM allows you to overwrite a version `3` policy with a version `1` policy, and all of the conditions in the version `3` policy are lost. */
  etag?: string;
  /** Specifies the format of the policy. Valid values are `0`, `1`, and `3`. Requests that specify an invalid value are rejected. Any operation that affects conditional role bindings must specify version `3`. This requirement applies to the following operations: * Getting a policy that includes a conditional role binding * Adding a conditional role binding to a policy * Changing a conditional role binding in a policy * Removing any role binding, with or without a condition, from a policy that includes conditions **Important:** If you use IAM Conditions, you must include the `etag` field whenever you call `setIamPolicy`. If you omit this field, then IAM allows you to overwrite a version `3` policy with a version `1` policy, and all of the conditions in the version `3` policy are lost. If a policy does not include any conditions, operations on that policy may specify any valid version or leave the field unset. To learn which resources support conditions in their IAM policies, see the [IAM documentation](https://cloud.google.com/iam/help/conditions/resource-policies). */
  version?: number;
  /** Associates a list of `members`, or principals, with a `role`. Optionally, may specify a `condition` that determines how and when the `bindings` are applied. Each of the `bindings` must contain at least one principal. The `bindings` in a `Policy` can refer to up to 1,500 principals; up to 250 of these principals can be Google groups. Each occurrence of a principal counts towards these limits. For example, if the `bindings` grant 50 different roles to `user:alice@example.com`, and not to any other principal, then you can add another 1,450 principals to the `bindings` in the `Policy`. */
  bindings?: ReadonlyArray<GoogleIamV1Binding>;
}

export const GoogleIamV1Policy: Schema.Schema<GoogleIamV1Policy> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    auditConfigs: Schema.optional(Schema.Array(GoogleIamV1AuditConfig)),
    etag: Schema.optional(Schema.String),
    version: Schema.optional(Schema.Number),
    bindings: Schema.optional(Schema.Array(GoogleIamV1Binding)),
  }).annotate({ identifier: "GoogleIamV1Policy" });

export interface GoogleIamV1SetIamPolicyRequest {
  /** REQUIRED: The complete policy to be applied to the `resource`. The size of the policy is limited to a few 10s of KB. An empty policy is a valid policy but certain Google Cloud services (such as Projects) might reject them. */
  policy?: GoogleIamV1Policy;
  /** OPTIONAL: A FieldMask specifying which fields of the policy to modify. Only the fields in the mask will be modified. If no mask is provided, the following default mask is used: `paths: "bindings, etag"` */
  updateMask?: string;
}

export const GoogleIamV1SetIamPolicyRequest: Schema.Schema<GoogleIamV1SetIamPolicyRequest> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    policy: Schema.optional(GoogleIamV1Policy),
    updateMask: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleIamV1SetIamPolicyRequest" });

export interface GoogleCloudBeyondcorpAppconnectionsV1alphaListAppConnectionsResponse {
  /** A list of BeyondCorp AppConnections in the project. */
  appConnections?: ReadonlyArray<GoogleCloudBeyondcorpAppconnectionsV1alphaAppConnection>;
  /** A list of locations that could not be reached. */
  unreachable?: ReadonlyArray<string>;
  /** A token to retrieve the next page of results, or empty if there are no more results in the list. */
  nextPageToken?: string;
}

export const GoogleCloudBeyondcorpAppconnectionsV1alphaListAppConnectionsResponse: Schema.Schema<GoogleCloudBeyondcorpAppconnectionsV1alphaListAppConnectionsResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    appConnections: Schema.optional(
      Schema.Array(GoogleCloudBeyondcorpAppconnectionsV1alphaAppConnection),
    ),
    unreachable: Schema.optional(Schema.Array(Schema.String)),
    nextPageToken: Schema.optional(Schema.String),
  }).annotate({
    identifier:
      "GoogleCloudBeyondcorpAppconnectionsV1alphaListAppConnectionsResponse",
  });

export interface GoogleCloudBeyondcorpAppconnectorsV1ContainerHealthDetails {
  /** The version of the current config. */
  currentConfigVersion?: string;
  /** The version of the expected config. */
  expectedConfigVersion?: string;
  /** The extended status. Such as ExitCode, StartedAt, FinishedAt, etc. */
  extendedStatus?: Record<string, string>;
  /** The latest error message. */
  errorMsg?: string;
}

export const GoogleCloudBeyondcorpAppconnectorsV1ContainerHealthDetails: Schema.Schema<GoogleCloudBeyondcorpAppconnectorsV1ContainerHealthDetails> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    currentConfigVersion: Schema.optional(Schema.String),
    expectedConfigVersion: Schema.optional(Schema.String),
    extendedStatus: Schema.optional(
      Schema.Record(Schema.String, Schema.String),
    ),
    errorMsg: Schema.optional(Schema.String),
  }).annotate({
    identifier: "GoogleCloudBeyondcorpAppconnectorsV1ContainerHealthDetails",
  });

export interface GoogleCloudBeyondcorpAppconnectionsV1alphaAppConnectionOperationMetadata {
  /** Output only. API version used to start the operation. */
  apiVersion?: string;
  /** Output only. Identifies whether the user has requested cancellation of the operation. Operations that have successfully been cancelled have google.longrunning.Operation.error value with a google.rpc.Status.code of 1, corresponding to `Code.CANCELLED`. */
  requestedCancellation?: boolean;
  /** Output only. The time the operation finished running. */
  endTime?: string;
  /** Output only. Human-readable status of the operation, if any. */
  statusMessage?: string;
  /** Output only. Name of the verb executed by the operation. */
  verb?: string;
  /** Output only. The time the operation was created. */
  createTime?: string;
  /** Output only. Server-defined resource path for the target of the operation. */
  target?: string;
}

export const GoogleCloudBeyondcorpAppconnectionsV1alphaAppConnectionOperationMetadata: Schema.Schema<GoogleCloudBeyondcorpAppconnectionsV1alphaAppConnectionOperationMetadata> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    apiVersion: Schema.optional(Schema.String),
    requestedCancellation: Schema.optional(Schema.Boolean),
    endTime: Schema.optional(Schema.String),
    statusMessage: Schema.optional(Schema.String),
    verb: Schema.optional(Schema.String),
    createTime: Schema.optional(Schema.String),
    target: Schema.optional(Schema.String),
  }).annotate({
    identifier:
      "GoogleCloudBeyondcorpAppconnectionsV1alphaAppConnectionOperationMetadata",
  });

export interface GoogleCloudBeyondcorpSaasplatformSubscriptionsV1alphaCancelSubscriptionResponse {
  /** Time when the cancellation will become effective */
  effectiveCancellationTime?: string;
}

export const GoogleCloudBeyondcorpSaasplatformSubscriptionsV1alphaCancelSubscriptionResponse: Schema.Schema<GoogleCloudBeyondcorpSaasplatformSubscriptionsV1alphaCancelSubscriptionResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    effectiveCancellationTime: Schema.optional(Schema.String),
  }).annotate({
    identifier:
      "GoogleCloudBeyondcorpSaasplatformSubscriptionsV1alphaCancelSubscriptionResponse",
  });

export interface CloudSecurityZerotrustApplinkLogagentProtoLogAgentDetails {}

export const CloudSecurityZerotrustApplinkLogagentProtoLogAgentDetails: Schema.Schema<CloudSecurityZerotrustApplinkLogagentProtoLogAgentDetails> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).annotate({
    identifier: "CloudSecurityZerotrustApplinkLogagentProtoLogAgentDetails",
  });

export interface AllocatedConnection {
  /** Required. The PSC uri of an allocated connection */
  pscUri?: string;
  /** Required. The ingress port of an allocated connection */
  ingressPort?: number;
}

export const AllocatedConnection: Schema.Schema<AllocatedConnection> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    pscUri: Schema.optional(Schema.String),
    ingressPort: Schema.optional(Schema.Number),
  }).annotate({ identifier: "AllocatedConnection" });

export interface GoogleCloudBeyondcorpSecuritygatewaysV1alphaListSecurityGatewaysResponse {
  /** A list of locations that could not be reached. */
  unreachable?: ReadonlyArray<string>;
  /** A token to retrieve the next page of results, or empty if there are no more results in the list. */
  nextPageToken?: string;
  /** A list of BeyondCorp SecurityGateway in the project. */
  securityGateways?: ReadonlyArray<GoogleCloudBeyondcorpSecuritygatewaysV1alphaSecurityGateway>;
}

export const GoogleCloudBeyondcorpSecuritygatewaysV1alphaListSecurityGatewaysResponse: Schema.Schema<GoogleCloudBeyondcorpSecuritygatewaysV1alphaListSecurityGatewaysResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    unreachable: Schema.optional(Schema.Array(Schema.String)),
    nextPageToken: Schema.optional(Schema.String),
    securityGateways: Schema.optional(
      Schema.Array(GoogleCloudBeyondcorpSecuritygatewaysV1alphaSecurityGateway),
    ),
  }).annotate({
    identifier:
      "GoogleCloudBeyondcorpSecuritygatewaysV1alphaListSecurityGatewaysResponse",
  });

export interface ConnectorOperationMetadata {
  /** Output only. The time the operation finished running. */
  endTime?: string;
  /** Output only. Identifies whether the user has requested cancellation of the operation. Operations that have successfully been cancelled have Operation.error value with a google.rpc.Status.code of 1, corresponding to `Code.CANCELLED`. */
  requestedCancellation?: boolean;
  /** Output only. API version used to start the operation. */
  apiVersion?: string;
  /** Output only. The time the operation was created. */
  createTime?: string;
  /** Output only. Server-defined resource path for the target of the operation. */
  target?: string;
  /** Output only. Name of the verb executed by the operation. */
  verb?: string;
  /** Output only. Human-readable status of the operation, if any. */
  statusMessage?: string;
}

export const ConnectorOperationMetadata: Schema.Schema<ConnectorOperationMetadata> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    endTime: Schema.optional(Schema.String),
    requestedCancellation: Schema.optional(Schema.Boolean),
    apiVersion: Schema.optional(Schema.String),
    createTime: Schema.optional(Schema.String),
    target: Schema.optional(Schema.String),
    verb: Schema.optional(Schema.String),
    statusMessage: Schema.optional(Schema.String),
  }).annotate({ identifier: "ConnectorOperationMetadata" });

export interface GoogleCloudBeyondcorpAppconnectorsV1alphaResolveInstanceConfigResponse {
  /** AppConnectorInstanceConfig. */
  instanceConfig?: GoogleCloudBeyondcorpAppconnectorsV1alphaAppConnectorInstanceConfig;
}

export const GoogleCloudBeyondcorpAppconnectorsV1alphaResolveInstanceConfigResponse: Schema.Schema<GoogleCloudBeyondcorpAppconnectorsV1alphaResolveInstanceConfigResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    instanceConfig: Schema.optional(
      GoogleCloudBeyondcorpAppconnectorsV1alphaAppConnectorInstanceConfig,
    ),
  }).annotate({
    identifier:
      "GoogleCloudBeyondcorpAppconnectorsV1alphaResolveInstanceConfigResponse",
  });

export interface GoogleCloudBeyondcorpSaasplatformSubscriptionsV1alphaRestartSubscriptionResponse {}

export const GoogleCloudBeyondcorpSaasplatformSubscriptionsV1alphaRestartSubscriptionResponse: Schema.Schema<GoogleCloudBeyondcorpSaasplatformSubscriptionsV1alphaRestartSubscriptionResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).annotate({
    identifier:
      "GoogleCloudBeyondcorpSaasplatformSubscriptionsV1alphaRestartSubscriptionResponse",
  });

export interface RemoteAgentDetails {}

export const RemoteAgentDetails: Schema.Schema<RemoteAgentDetails> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).annotate({
    identifier: "RemoteAgentDetails",
  });

export interface GoogleIamV1TestIamPermissionsResponse {
  /** A subset of `TestPermissionsRequest.permissions` that the caller is allowed. */
  permissions?: ReadonlyArray<string>;
}

export const GoogleIamV1TestIamPermissionsResponse: Schema.Schema<GoogleIamV1TestIamPermissionsResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    permissions: Schema.optional(Schema.Array(Schema.String)),
  }).annotate({ identifier: "GoogleIamV1TestIamPermissionsResponse" });

export interface GoogleCloudBeyondcorpPartnerservicesV1alphaPartnerServiceOperationMetadata {
  /** Output only. Name of the verb executed by the operation. */
  verb?: string;
  /** Output only. Human-readable status of the operation, if any. */
  statusMessage?: string;
  /** Output only. The time the operation was created. */
  createTime?: string;
  /** Output only. Server-defined resource path for the target of the operation. */
  target?: string;
  /** Output only. Identifies whether the caller has requested cancellation of the operation. Operations that have successfully been cancelled have Operation.error value with a google.rpc.Status.code of 1, corresponding to `Code.CANCELLED`. */
  requestedCancellation?: boolean;
  /** Output only. API version used to start the operation. */
  apiVersion?: string;
  /** Output only. The time the operation finished running. */
  endTime?: string;
}

export const GoogleCloudBeyondcorpPartnerservicesV1alphaPartnerServiceOperationMetadata: Schema.Schema<GoogleCloudBeyondcorpPartnerservicesV1alphaPartnerServiceOperationMetadata> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    verb: Schema.optional(Schema.String),
    statusMessage: Schema.optional(Schema.String),
    createTime: Schema.optional(Schema.String),
    target: Schema.optional(Schema.String),
    requestedCancellation: Schema.optional(Schema.Boolean),
    apiVersion: Schema.optional(Schema.String),
    endTime: Schema.optional(Schema.String),
  }).annotate({
    identifier:
      "GoogleCloudBeyondcorpPartnerservicesV1alphaPartnerServiceOperationMetadata",
  });

export interface AppGateway {
  /** Required. Unique resource name of the AppGateway. The name is ignored when creating an AppGateway. */
  name?: string;
  /** Output only. A unique identifier for the instance generated by the system. */
  uid?: string;
  /** Output only. Server-defined URI for this resource. */
  uri?: string;
  /** Output only. The current state of the AppGateway. */
  state?:
    | "STATE_UNSPECIFIED"
    | "CREATING"
    | "CREATED"
    | "UPDATING"
    | "DELETING"
    | "DOWN"
    | (string & {});
  /** Output only. Reserved for future use. */
  satisfiesPzi?: boolean;
  /** Output only. Timestamp when the resource was last modified. */
  updateTime?: string;
  /** Required. The type of network connectivity used by the AppGateway. */
  type?: "TYPE_UNSPECIFIED" | "TCP_PROXY" | (string & {});
  /** Output only. Reserved for future use. */
  satisfiesPzs?: boolean;
  /** Optional. Resource labels to represent user provided metadata. */
  labels?: Record<string, string>;
  /** Output only. Timestamp when the resource was created. */
  createTime?: string;
  /** Required. The type of hosting used by the AppGateway. */
  hostType?: "HOST_TYPE_UNSPECIFIED" | "GCP_REGIONAL_MIG" | (string & {});
  /** Output only. A list of connections allocated for the Gateway */
  allocatedConnections?: ReadonlyArray<AllocatedConnection>;
  /** Optional. An arbitrary user-provided name for the AppGateway. Cannot exceed 64 characters. */
  displayName?: string;
}

export const AppGateway: Schema.Schema<AppGateway> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.optional(Schema.String),
    uid: Schema.optional(Schema.String),
    uri: Schema.optional(Schema.String),
    state: Schema.optional(Schema.String),
    satisfiesPzi: Schema.optional(Schema.Boolean),
    updateTime: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    satisfiesPzs: Schema.optional(Schema.Boolean),
    labels: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    createTime: Schema.optional(Schema.String),
    hostType: Schema.optional(Schema.String),
    allocatedConnections: Schema.optional(Schema.Array(AllocatedConnection)),
    displayName: Schema.optional(Schema.String),
  }).annotate({ identifier: "AppGateway" });

export interface ListAppGatewaysResponse {
  /** A token to retrieve the next page of results, or empty if there are no more results in the list. */
  nextPageToken?: string;
  /** A list of locations that could not be reached. */
  unreachable?: ReadonlyArray<string>;
  /** A list of BeyondCorp AppGateways in the project. */
  appGateways?: ReadonlyArray<AppGateway>;
}

export const ListAppGatewaysResponse: Schema.Schema<ListAppGatewaysResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    nextPageToken: Schema.optional(Schema.String),
    unreachable: Schema.optional(Schema.Array(Schema.String)),
    appGateways: Schema.optional(Schema.Array(AppGateway)),
  }).annotate({ identifier: "ListAppGatewaysResponse" });

export interface GoogleLongrunningCancelOperationRequest {}

export const GoogleLongrunningCancelOperationRequest: Schema.Schema<GoogleLongrunningCancelOperationRequest> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).annotate({
    identifier: "GoogleLongrunningCancelOperationRequest",
  });

export interface GoogleIamV1TestIamPermissionsRequest {
  /** The set of permissions to check for the `resource`. Permissions with wildcards (such as `*` or `storage.*`) are not allowed. For more information see [IAM Overview](https://cloud.google.com/iam/docs/overview#permissions). */
  permissions?: ReadonlyArray<string>;
}

export const GoogleIamV1TestIamPermissionsRequest: Schema.Schema<GoogleIamV1TestIamPermissionsRequest> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    permissions: Schema.optional(Schema.Array(Schema.String)),
  }).annotate({ identifier: "GoogleIamV1TestIamPermissionsRequest" });

export interface GoogleCloudBeyondcorpAppgatewaysV1AppGatewayOperationMetadata {
  /** Output only. The time the operation finished running. */
  endTime?: string;
  /** Output only. API version used to start the operation. */
  apiVersion?: string;
  /** Output only. Identifies whether the user has requested cancellation of the operation. Operations that have successfully been cancelled have google.longrunning.Operation.error value with a google.rpc.Status.code of `1`, corresponding to `Code.CANCELLED`. */
  requestedCancellation?: boolean;
  /** Output only. The time the operation was created. */
  createTime?: string;
  /** Output only. Server-defined resource path for the target of the operation. */
  target?: string;
  /** Output only. Human-readable status of the operation, if any. */
  statusMessage?: string;
  /** Output only. Name of the verb executed by the operation. */
  verb?: string;
}

export const GoogleCloudBeyondcorpAppgatewaysV1AppGatewayOperationMetadata: Schema.Schema<GoogleCloudBeyondcorpAppgatewaysV1AppGatewayOperationMetadata> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    endTime: Schema.optional(Schema.String),
    apiVersion: Schema.optional(Schema.String),
    requestedCancellation: Schema.optional(Schema.Boolean),
    createTime: Schema.optional(Schema.String),
    target: Schema.optional(Schema.String),
    statusMessage: Schema.optional(Schema.String),
    verb: Schema.optional(Schema.String),
  }).annotate({
    identifier: "GoogleCloudBeyondcorpAppgatewaysV1AppGatewayOperationMetadata",
  });

export interface GoogleCloudBeyondcorpSaasplatformInsightsV1alphaConfiguredInsightResponse {
  /** Output only. Next page token to be fetched. Set to empty or NULL if there are no more pages available. */
  nextPageToken?: string;
  /** Output only. Result rows returned containing the required value(s) for configured insight. */
  rows?: ReadonlyArray<GoogleCloudBeyondcorpSaasplatformInsightsV1alphaRow>;
  /** Output only. Applied insight config to generate the result data rows. */
  appliedConfig?: GoogleCloudBeyondcorpSaasplatformInsightsV1alphaAppliedConfig;
}

export const GoogleCloudBeyondcorpSaasplatformInsightsV1alphaConfiguredInsightResponse: Schema.Schema<GoogleCloudBeyondcorpSaasplatformInsightsV1alphaConfiguredInsightResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    nextPageToken: Schema.optional(Schema.String),
    rows: Schema.optional(
      Schema.Array(GoogleCloudBeyondcorpSaasplatformInsightsV1alphaRow),
    ),
    appliedConfig: Schema.optional(
      GoogleCloudBeyondcorpSaasplatformInsightsV1alphaAppliedConfig,
    ),
  }).annotate({
    identifier:
      "GoogleCloudBeyondcorpSaasplatformInsightsV1alphaConfiguredInsightResponse",
  });

export interface CloudSecurityZerotrustApplinkAppConnectorProtoConnectorDetails {}

export const CloudSecurityZerotrustApplinkAppConnectorProtoConnectorDetails: Schema.Schema<CloudSecurityZerotrustApplinkAppConnectorProtoConnectorDetails> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).annotate({
    identifier:
      "CloudSecurityZerotrustApplinkAppConnectorProtoConnectorDetails",
  });

export interface ListConnectorsResponse {
  /** A token to retrieve the next page of results, or empty if there are no more results in the list. */
  nextPageToken?: string;
  /** A list of BeyondCorp Connectors in the project. */
  connectors?: ReadonlyArray<Connector>;
  /** A list of locations that could not be reached. */
  unreachable?: ReadonlyArray<string>;
}

export const ListConnectorsResponse: Schema.Schema<ListConnectorsResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    nextPageToken: Schema.optional(Schema.String),
    connectors: Schema.optional(Schema.Array(Connector)),
    unreachable: Schema.optional(Schema.Array(Schema.String)),
  }).annotate({ identifier: "ListConnectorsResponse" });

export interface GoogleCloudBeyondcorpPartnerservicesV1mainPartnerServiceOperationMetadata {
  /** Output only. The time the operation was created. */
  createTime?: string;
  /** Output only. Server-defined resource path for the target of the operation. */
  target?: string;
  /** Output only. Human-readable status of the operation, if any. */
  statusMessage?: string;
  /** Output only. Name of the verb executed by the operation. */
  verb?: string;
  /** Output only. The time the operation finished running. */
  endTime?: string;
  /** Output only. API version used to start the operation. */
  apiVersion?: string;
  /** Output only. Identifies whether the caller has requested cancellation of the operation. Operations that have successfully been cancelled have Operation.error value with a google.rpc.Status.code of 1, corresponding to `Code.CANCELLED`. */
  requestedCancellation?: boolean;
}

export const GoogleCloudBeyondcorpPartnerservicesV1mainPartnerServiceOperationMetadata: Schema.Schema<GoogleCloudBeyondcorpPartnerservicesV1mainPartnerServiceOperationMetadata> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    createTime: Schema.optional(Schema.String),
    target: Schema.optional(Schema.String),
    statusMessage: Schema.optional(Schema.String),
    verb: Schema.optional(Schema.String),
    endTime: Schema.optional(Schema.String),
    apiVersion: Schema.optional(Schema.String),
    requestedCancellation: Schema.optional(Schema.Boolean),
  }).annotate({
    identifier:
      "GoogleCloudBeyondcorpPartnerservicesV1mainPartnerServiceOperationMetadata",
  });

export interface GoogleCloudBeyondcorpSecuritygatewaysV1SecurityGatewayOperationMetadata {
  /** Output only. The time the operation finished running. */
  endTime?: string;
  /** Output only. API version used to start the operation. */
  apiVersion?: string;
  /** Output only. Identifies whether the user has requested cancellation of the operation. Operations that have been cancelled successfully have Operation.error value with a google.rpc.Status.code of 1, corresponding to `Code.CANCELLED`. */
  requestedCancellation?: boolean;
  /** Output only. The time the operation was created. */
  createTime?: string;
  /** Output only. Server-defined resource path for the target of the operation. */
  target?: string;
  /** Output only. Human-readable status of the operation, if any. */
  statusMessage?: string;
  /** Output only. Name of the verb executed by the operation. */
  verb?: string;
}

export const GoogleCloudBeyondcorpSecuritygatewaysV1SecurityGatewayOperationMetadata: Schema.Schema<GoogleCloudBeyondcorpSecuritygatewaysV1SecurityGatewayOperationMetadata> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    endTime: Schema.optional(Schema.String),
    apiVersion: Schema.optional(Schema.String),
    requestedCancellation: Schema.optional(Schema.Boolean),
    createTime: Schema.optional(Schema.String),
    target: Schema.optional(Schema.String),
    statusMessage: Schema.optional(Schema.String),
    verb: Schema.optional(Schema.String),
  }).annotate({
    identifier:
      "GoogleCloudBeyondcorpSecuritygatewaysV1SecurityGatewayOperationMetadata",
  });

export interface ResolveConnectionsResponse {
  /** A list of locations that could not be reached. */
  unreachable?: ReadonlyArray<string>;
  /** A list of BeyondCorp Connections with details in the project. */
  connectionDetails?: ReadonlyArray<ConnectionDetails>;
  /** A token to retrieve the next page of results, or empty if there are no more results in the list. */
  nextPageToken?: string;
}

export const ResolveConnectionsResponse: Schema.Schema<ResolveConnectionsResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    unreachable: Schema.optional(Schema.Array(Schema.String)),
    connectionDetails: Schema.optional(Schema.Array(ConnectionDetails)),
    nextPageToken: Schema.optional(Schema.String),
  }).annotate({ identifier: "ResolveConnectionsResponse" });

export interface CloudSecurityZerotrustApplinkAppConnectorProtoConnectionConfig {
  /** application_name represents the given name of the application the connection is connecting with. */
  applicationName?: string;
  /** application_endpoint is the endpoint of the application the form of host:port. For example, "localhost:80". */
  applicationEndpoint?: string;
  /** tunnels_per_gateway reflects the number of tunnels between a connector and a gateway. */
  tunnelsPerGateway?: number;
  /** project represents the consumer project the connection belongs to. */
  project?: string;
  /** user_port specifies the reserved port on gateways for user connections. */
  userPort?: number;
  /** gateway lists all instances running a gateway in GCP. They all connect to a connector on the host. */
  gateway?: ReadonlyArray<CloudSecurityZerotrustApplinkAppConnectorProtoGateway>;
  /** name is the unique ID for each connection. TODO(b/190732451) returns connection name from user-specified name in config. Now, name = ${application_name}:${application_endpoint} */
  name?: string;
}

export const CloudSecurityZerotrustApplinkAppConnectorProtoConnectionConfig: Schema.Schema<CloudSecurityZerotrustApplinkAppConnectorProtoConnectionConfig> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    applicationName: Schema.optional(Schema.String),
    applicationEndpoint: Schema.optional(Schema.String),
    tunnelsPerGateway: Schema.optional(Schema.Number),
    project: Schema.optional(Schema.String),
    userPort: Schema.optional(Schema.Number),
    gateway: Schema.optional(
      Schema.Array(CloudSecurityZerotrustApplinkAppConnectorProtoGateway),
    ),
    name: Schema.optional(Schema.String),
  }).annotate({
    identifier:
      "CloudSecurityZerotrustApplinkAppConnectorProtoConnectionConfig",
  });

export interface GoogleCloudBeyondcorpAppconnectorsV1alphaReportStatusRequest {
  /** Optional. If set, validates request by executing a dry-run which would not alter the resource in any way. */
  validateOnly?: boolean;
  /** Required. Resource info of the connector. */
  resourceInfo?: GoogleCloudBeyondcorpAppconnectorsV1alphaResourceInfo;
  /** Optional. An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes since the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000). */
  requestId?: string;
}

export const GoogleCloudBeyondcorpAppconnectorsV1alphaReportStatusRequest: Schema.Schema<GoogleCloudBeyondcorpAppconnectorsV1alphaReportStatusRequest> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    validateOnly: Schema.optional(Schema.Boolean),
    resourceInfo: Schema.optional(
      GoogleCloudBeyondcorpAppconnectorsV1alphaResourceInfo,
    ),
    requestId: Schema.optional(Schema.String),
  }).annotate({
    identifier: "GoogleCloudBeyondcorpAppconnectorsV1alphaReportStatusRequest",
  });

export interface ListConnectionsResponse {
  /** A token to retrieve the next page of results, or empty if there are no more results in the list. */
  nextPageToken?: string;
  /** A list of BeyondCorp Connections in the project. */
  connections?: ReadonlyArray<Connection>;
  /** A list of locations that could not be reached. */
  unreachable?: ReadonlyArray<string>;
}

export const ListConnectionsResponse: Schema.Schema<ListConnectionsResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    nextPageToken: Schema.optional(Schema.String),
    connections: Schema.optional(Schema.Array(Connection)),
    unreachable: Schema.optional(Schema.Array(Schema.String)),
  }).annotate({ identifier: "ListConnectionsResponse" });

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

export interface ListProjectsLocationsRequest {
  /** The resource that owns the locations collection, if applicable. */
  name: string;
  /** A filter to narrow down results to a preferred subset. The filtering language accepts strings like `"displayName=tokyo"`, and is documented in more detail in [AIP-160](https://google.aip.dev/160). */
  filter?: string;
  /** Optional. Do not use this field. It is unsupported and is ignored unless explicitly documented otherwise. This is primarily for internal usage. */
  extraLocationTypes?: string[];
  /** The maximum number of results to return. If not set, the service selects a default. */
  pageSize?: number;
  /** A page token received from the `next_page_token` field in the response. Send that page token to receive the subsequent page. */
  pageToken?: string;
}

export const ListProjectsLocationsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    filter: Schema.optional(Schema.String).pipe(T.HttpQuery("filter")),
    extraLocationTypes: Schema.optional(Schema.Array(Schema.String)).pipe(
      T.HttpQuery("extraLocationTypes"),
    ),
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
  }).pipe(
    T.Http({ method: "GET", path: "v1alpha/{+name}/locations" }),
    svc,
  ) as unknown as Schema.Schema<ListProjectsLocationsRequest>;

export type ListProjectsLocationsResponse =
  GoogleCloudLocationListLocationsResponse;
export const ListProjectsLocationsResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleCloudLocationListLocationsResponse;

export type ListProjectsLocationsError = DefaultErrors | NotFound | Forbidden;

/** Lists information about the supported locations for this service. This method lists locations based on the resource scope provided in the [ListLocationsRequest.name] field: * **Global locations**: If `name` is empty, the method lists the public locations available to all projects. * **Project-specific locations**: If `name` follows the format `projects/{project}`, the method lists locations visible to that specific project. This includes public, private, or other project-specific locations enabled for the project. For gRPC and client library implementations, the resource name is passed as the `name` field. For direct service calls, the resource name is incorporated into the request path based on the specific service implementation and version. */
export const listProjectsLocations: API.PaginatedOperationMethod<
  ListProjectsLocationsRequest,
  ListProjectsLocationsResponse,
  ListProjectsLocationsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
  input: ListProjectsLocationsRequest,
  output: ListProjectsLocationsResponse,
  errors: [NotFound, Forbidden],
  pagination: {
    inputToken: "pageToken",
    outputToken: "nextPageToken",
  },
}));

export interface GetProjectsLocationsRequest {
  /** Resource name for the location. */
  name: string;
}

export const GetProjectsLocationsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "GET", path: "v1alpha/{+name}" }),
    svc,
  ) as unknown as Schema.Schema<GetProjectsLocationsRequest>;

export type GetProjectsLocationsResponse = GoogleCloudLocationLocation;
export const GetProjectsLocationsResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleCloudLocationLocation;

export type GetProjectsLocationsError = DefaultErrors | NotFound | Forbidden;

/** Gets information about a location. */
export const getProjectsLocations: API.OperationMethod<
  GetProjectsLocationsRequest,
  GetProjectsLocationsResponse,
  GetProjectsLocationsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetProjectsLocationsRequest,
  output: GetProjectsLocationsResponse,
  errors: [NotFound, Forbidden],
}));

export interface TestIamPermissionsProjectsLocationsApplicationDomainsRequest {
  /** REQUIRED: The resource for which the policy detail is being requested. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field. */
  resource: string;
  /** Request body */
  body?: GoogleIamV1TestIamPermissionsRequest;
}

export const TestIamPermissionsProjectsLocationsApplicationDomainsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    resource: Schema.String.pipe(T.HttpPath("resource")),
    body: Schema.optional(GoogleIamV1TestIamPermissionsRequest).pipe(
      T.HttpBody(),
    ),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v1alpha/{+resource}:testIamPermissions",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<TestIamPermissionsProjectsLocationsApplicationDomainsRequest>;

export type TestIamPermissionsProjectsLocationsApplicationDomainsResponse =
  GoogleIamV1TestIamPermissionsResponse;
export const TestIamPermissionsProjectsLocationsApplicationDomainsResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleIamV1TestIamPermissionsResponse;

export type TestIamPermissionsProjectsLocationsApplicationDomainsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Returns permissions that a caller has on the specified resource. If the resource does not exist, this will return an empty set of permissions, not a `NOT_FOUND` error. Note: This operation is designed to be used for building permission-aware UIs and command-line tools, not for authorization checking. This operation may "fail open" without warning. */
export const testIamPermissionsProjectsLocationsApplicationDomains: API.OperationMethod<
  TestIamPermissionsProjectsLocationsApplicationDomainsRequest,
  TestIamPermissionsProjectsLocationsApplicationDomainsResponse,
  TestIamPermissionsProjectsLocationsApplicationDomainsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: TestIamPermissionsProjectsLocationsApplicationDomainsRequest,
  output: TestIamPermissionsProjectsLocationsApplicationDomainsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface SetIamPolicyProjectsLocationsApplicationDomainsRequest {
  /** REQUIRED: The resource for which the policy is being specified. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field. */
  resource: string;
  /** Request body */
  body?: GoogleIamV1SetIamPolicyRequest;
}

export const SetIamPolicyProjectsLocationsApplicationDomainsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    resource: Schema.String.pipe(T.HttpPath("resource")),
    body: Schema.optional(GoogleIamV1SetIamPolicyRequest).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v1alpha/{+resource}:setIamPolicy",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<SetIamPolicyProjectsLocationsApplicationDomainsRequest>;

export type SetIamPolicyProjectsLocationsApplicationDomainsResponse =
  GoogleIamV1Policy;
export const SetIamPolicyProjectsLocationsApplicationDomainsResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleIamV1Policy;

export type SetIamPolicyProjectsLocationsApplicationDomainsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Sets the access control policy on the specified resource. Replaces any existing policy. Can return `NOT_FOUND`, `INVALID_ARGUMENT`, and `PERMISSION_DENIED` errors. */
export const setIamPolicyProjectsLocationsApplicationDomains: API.OperationMethod<
  SetIamPolicyProjectsLocationsApplicationDomainsRequest,
  SetIamPolicyProjectsLocationsApplicationDomainsResponse,
  SetIamPolicyProjectsLocationsApplicationDomainsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: SetIamPolicyProjectsLocationsApplicationDomainsRequest,
  output: SetIamPolicyProjectsLocationsApplicationDomainsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface GetIamPolicyProjectsLocationsApplicationDomainsRequest {
  /** REQUIRED: The resource for which the policy is being requested. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field. */
  resource: string;
  /** Optional. The maximum policy version that will be used to format the policy. Valid values are 0, 1, and 3. Requests specifying an invalid value will be rejected. Requests for policies with any conditional role bindings must specify version 3. Policies with no conditional role bindings may specify any valid value or leave the field unset. The policy in the response might use the policy version that you specified, or it might use a lower policy version. For example, if you specify version 3, but the policy has no conditional role bindings, the response uses version 1. To learn which resources support conditions in their IAM policies, see the [IAM documentation](https://cloud.google.com/iam/help/conditions/resource-policies). */
  "options.requestedPolicyVersion"?: number;
}

export const GetIamPolicyProjectsLocationsApplicationDomainsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    resource: Schema.String.pipe(T.HttpPath("resource")),
    "options.requestedPolicyVersion": Schema.optional(Schema.Number).pipe(
      T.HttpQuery("options.requestedPolicyVersion"),
    ),
  }).pipe(
    T.Http({ method: "GET", path: "v1alpha/{+resource}:getIamPolicy" }),
    svc,
  ) as unknown as Schema.Schema<GetIamPolicyProjectsLocationsApplicationDomainsRequest>;

export type GetIamPolicyProjectsLocationsApplicationDomainsResponse =
  GoogleIamV1Policy;
export const GetIamPolicyProjectsLocationsApplicationDomainsResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleIamV1Policy;

export type GetIamPolicyProjectsLocationsApplicationDomainsError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Gets the access control policy for a resource. Returns an empty policy if the resource exists and does not have a policy set. */
export const getIamPolicyProjectsLocationsApplicationDomains: API.OperationMethod<
  GetIamPolicyProjectsLocationsApplicationDomainsRequest,
  GetIamPolicyProjectsLocationsApplicationDomainsResponse,
  GetIamPolicyProjectsLocationsApplicationDomainsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetIamPolicyProjectsLocationsApplicationDomainsRequest,
  output: GetIamPolicyProjectsLocationsApplicationDomainsResponse,
  errors: [NotFound, Forbidden],
}));

export interface GetProjectsLocationsAppConnectorsRequest {
  /** Required. BeyondCorp AppConnector name using the form: `projects/{project_id}/locations/{location_id}/appConnectors/{app_connector_id}` */
  name: string;
}

export const GetProjectsLocationsAppConnectorsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "GET", path: "v1alpha/{+name}" }),
    svc,
  ) as unknown as Schema.Schema<GetProjectsLocationsAppConnectorsRequest>;

export type GetProjectsLocationsAppConnectorsResponse =
  GoogleCloudBeyondcorpAppconnectorsV1alphaAppConnector;
export const GetProjectsLocationsAppConnectorsResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleCloudBeyondcorpAppconnectorsV1alphaAppConnector;

export type GetProjectsLocationsAppConnectorsError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Gets details of a single AppConnector. */
export const getProjectsLocationsAppConnectors: API.OperationMethod<
  GetProjectsLocationsAppConnectorsRequest,
  GetProjectsLocationsAppConnectorsResponse,
  GetProjectsLocationsAppConnectorsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetProjectsLocationsAppConnectorsRequest,
  output: GetProjectsLocationsAppConnectorsResponse,
  errors: [NotFound, Forbidden],
}));

export interface ListProjectsLocationsAppConnectorsRequest {
  /** Required. The resource name of the AppConnector location using the form: `projects/{project_id}/locations/{location_id}` */
  parent: string;
  /** Optional. A filter specifying constraints of a list operation. */
  filter?: string;
  /** Optional. Specifies the ordering of results. See [Sorting order](https://cloud.google.com/apis/design/design_patterns#sorting_order) for more information. */
  orderBy?: string;
  /** Optional. The maximum number of items to return. If not specified, a default value of 50 will be used by the service. Regardless of the page_size value, the response may include a partial list and a caller should only rely on response's next_page_token to determine if there are more instances left to be queried. */
  pageSize?: number;
  /** Optional. The next_page_token value returned from a previous ListAppConnectorsRequest, if any. */
  pageToken?: string;
}

export const ListProjectsLocationsAppConnectorsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    parent: Schema.String.pipe(T.HttpPath("parent")),
    filter: Schema.optional(Schema.String).pipe(T.HttpQuery("filter")),
    orderBy: Schema.optional(Schema.String).pipe(T.HttpQuery("orderBy")),
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
  }).pipe(
    T.Http({ method: "GET", path: "v1alpha/{+parent}/appConnectors" }),
    svc,
  ) as unknown as Schema.Schema<ListProjectsLocationsAppConnectorsRequest>;

export type ListProjectsLocationsAppConnectorsResponse =
  GoogleCloudBeyondcorpAppconnectorsV1alphaListAppConnectorsResponse;
export const ListProjectsLocationsAppConnectorsResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleCloudBeyondcorpAppconnectorsV1alphaListAppConnectorsResponse;

export type ListProjectsLocationsAppConnectorsError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Lists AppConnectors in a given project and location. */
export const listProjectsLocationsAppConnectors: API.PaginatedOperationMethod<
  ListProjectsLocationsAppConnectorsRequest,
  ListProjectsLocationsAppConnectorsResponse,
  ListProjectsLocationsAppConnectorsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
  input: ListProjectsLocationsAppConnectorsRequest,
  output: ListProjectsLocationsAppConnectorsResponse,
  errors: [NotFound, Forbidden],
  pagination: {
    inputToken: "pageToken",
    outputToken: "nextPageToken",
  },
}));

export interface PatchProjectsLocationsAppConnectorsRequest {
  /** Optional. If set, validates request by executing a dry-run which would not alter the resource in any way. */
  validateOnly?: boolean;
  /** Required. Unique resource name of the AppConnector. The name is ignored when creating a AppConnector. */
  name: string;
  /** Required. Mask of fields to update. At least one path must be supplied in this field. The elements of the repeated paths field may only include these fields from [BeyondCorp.AppConnector]: * `labels` * `display_name` */
  updateMask?: string;
  /** Optional. An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes since the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000). */
  requestId?: string;
  /** Request body */
  body?: GoogleCloudBeyondcorpAppconnectorsV1alphaAppConnector;
}

export const PatchProjectsLocationsAppConnectorsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    validateOnly: Schema.optional(Schema.Boolean).pipe(
      T.HttpQuery("validateOnly"),
    ),
    name: Schema.String.pipe(T.HttpPath("name")),
    updateMask: Schema.optional(Schema.String).pipe(T.HttpQuery("updateMask")),
    requestId: Schema.optional(Schema.String).pipe(T.HttpQuery("requestId")),
    body: Schema.optional(
      GoogleCloudBeyondcorpAppconnectorsV1alphaAppConnector,
    ).pipe(T.HttpBody()),
  }).pipe(
    T.Http({ method: "PATCH", path: "v1alpha/{+name}", hasBody: true }),
    svc,
  ) as unknown as Schema.Schema<PatchProjectsLocationsAppConnectorsRequest>;

export type PatchProjectsLocationsAppConnectorsResponse =
  GoogleLongrunningOperation;
export const PatchProjectsLocationsAppConnectorsResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleLongrunningOperation;

export type PatchProjectsLocationsAppConnectorsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Updates the parameters of a single AppConnector. */
export const patchProjectsLocationsAppConnectors: API.OperationMethod<
  PatchProjectsLocationsAppConnectorsRequest,
  PatchProjectsLocationsAppConnectorsResponse,
  PatchProjectsLocationsAppConnectorsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: PatchProjectsLocationsAppConnectorsRequest,
  output: PatchProjectsLocationsAppConnectorsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface ResolveInstanceConfigProjectsLocationsAppConnectorsRequest {
  /** Required. BeyondCorp AppConnector name using the form: `projects/{project_id}/locations/{location_id}/appConnectors/{app_connector}` */
  appConnector: string;
}

export const ResolveInstanceConfigProjectsLocationsAppConnectorsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    appConnector: Schema.String.pipe(T.HttpPath("appConnector")),
  }).pipe(
    T.Http({
      method: "GET",
      path: "v1alpha/{+appConnector}:resolveInstanceConfig",
    }),
    svc,
  ) as unknown as Schema.Schema<ResolveInstanceConfigProjectsLocationsAppConnectorsRequest>;

export type ResolveInstanceConfigProjectsLocationsAppConnectorsResponse =
  GoogleCloudBeyondcorpAppconnectorsV1alphaResolveInstanceConfigResponse;
export const ResolveInstanceConfigProjectsLocationsAppConnectorsResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleCloudBeyondcorpAppconnectorsV1alphaResolveInstanceConfigResponse;

export type ResolveInstanceConfigProjectsLocationsAppConnectorsError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Gets instance configuration for a given AppConnector. An internal method called by a AppConnector to get its container config. */
export const resolveInstanceConfigProjectsLocationsAppConnectors: API.OperationMethod<
  ResolveInstanceConfigProjectsLocationsAppConnectorsRequest,
  ResolveInstanceConfigProjectsLocationsAppConnectorsResponse,
  ResolveInstanceConfigProjectsLocationsAppConnectorsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: ResolveInstanceConfigProjectsLocationsAppConnectorsRequest,
  output: ResolveInstanceConfigProjectsLocationsAppConnectorsResponse,
  errors: [NotFound, Forbidden],
}));

export interface GetIamPolicyProjectsLocationsAppConnectorsRequest {
  /** Optional. The maximum policy version that will be used to format the policy. Valid values are 0, 1, and 3. Requests specifying an invalid value will be rejected. Requests for policies with any conditional role bindings must specify version 3. Policies with no conditional role bindings may specify any valid value or leave the field unset. The policy in the response might use the policy version that you specified, or it might use a lower policy version. For example, if you specify version 3, but the policy has no conditional role bindings, the response uses version 1. To learn which resources support conditions in their IAM policies, see the [IAM documentation](https://cloud.google.com/iam/help/conditions/resource-policies). */
  "options.requestedPolicyVersion"?: number;
  /** REQUIRED: The resource for which the policy is being requested. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field. */
  resource: string;
}

export const GetIamPolicyProjectsLocationsAppConnectorsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    "options.requestedPolicyVersion": Schema.optional(Schema.Number).pipe(
      T.HttpQuery("options.requestedPolicyVersion"),
    ),
    resource: Schema.String.pipe(T.HttpPath("resource")),
  }).pipe(
    T.Http({ method: "GET", path: "v1alpha/{+resource}:getIamPolicy" }),
    svc,
  ) as unknown as Schema.Schema<GetIamPolicyProjectsLocationsAppConnectorsRequest>;

export type GetIamPolicyProjectsLocationsAppConnectorsResponse =
  GoogleIamV1Policy;
export const GetIamPolicyProjectsLocationsAppConnectorsResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleIamV1Policy;

export type GetIamPolicyProjectsLocationsAppConnectorsError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Gets the access control policy for a resource. Returns an empty policy if the resource exists and does not have a policy set. */
export const getIamPolicyProjectsLocationsAppConnectors: API.OperationMethod<
  GetIamPolicyProjectsLocationsAppConnectorsRequest,
  GetIamPolicyProjectsLocationsAppConnectorsResponse,
  GetIamPolicyProjectsLocationsAppConnectorsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetIamPolicyProjectsLocationsAppConnectorsRequest,
  output: GetIamPolicyProjectsLocationsAppConnectorsResponse,
  errors: [NotFound, Forbidden],
}));

export interface DeleteProjectsLocationsAppConnectorsRequest {
  /** Required. BeyondCorp AppConnector name using the form: `projects/{project_id}/locations/{location_id}/appConnectors/{app_connector_id}` */
  name: string;
  /** Optional. An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes after the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000). */
  requestId?: string;
  /** Optional. If set, validates request by executing a dry-run which would not alter the resource in any way. */
  validateOnly?: boolean;
}

export const DeleteProjectsLocationsAppConnectorsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    requestId: Schema.optional(Schema.String).pipe(T.HttpQuery("requestId")),
    validateOnly: Schema.optional(Schema.Boolean).pipe(
      T.HttpQuery("validateOnly"),
    ),
  }).pipe(
    T.Http({ method: "DELETE", path: "v1alpha/{+name}" }),
    svc,
  ) as unknown as Schema.Schema<DeleteProjectsLocationsAppConnectorsRequest>;

export type DeleteProjectsLocationsAppConnectorsResponse =
  GoogleLongrunningOperation;
export const DeleteProjectsLocationsAppConnectorsResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleLongrunningOperation;

export type DeleteProjectsLocationsAppConnectorsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Deletes a single AppConnector. */
export const deleteProjectsLocationsAppConnectors: API.OperationMethod<
  DeleteProjectsLocationsAppConnectorsRequest,
  DeleteProjectsLocationsAppConnectorsResponse,
  DeleteProjectsLocationsAppConnectorsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: DeleteProjectsLocationsAppConnectorsRequest,
  output: DeleteProjectsLocationsAppConnectorsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface ReportStatusProjectsLocationsAppConnectorsRequest {
  /** Required. BeyondCorp Connector name using the form: `projects/{project_id}/locations/{location_id}/connectors/{connector}` */
  appConnector: string;
  /** Request body */
  body?: GoogleCloudBeyondcorpAppconnectorsV1alphaReportStatusRequest;
}

export const ReportStatusProjectsLocationsAppConnectorsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    appConnector: Schema.String.pipe(T.HttpPath("appConnector")),
    body: Schema.optional(
      GoogleCloudBeyondcorpAppconnectorsV1alphaReportStatusRequest,
    ).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v1alpha/{+appConnector}:reportStatus",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<ReportStatusProjectsLocationsAppConnectorsRequest>;

export type ReportStatusProjectsLocationsAppConnectorsResponse =
  GoogleLongrunningOperation;
export const ReportStatusProjectsLocationsAppConnectorsResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleLongrunningOperation;

export type ReportStatusProjectsLocationsAppConnectorsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Report status for a given connector. */
export const reportStatusProjectsLocationsAppConnectors: API.OperationMethod<
  ReportStatusProjectsLocationsAppConnectorsRequest,
  ReportStatusProjectsLocationsAppConnectorsResponse,
  ReportStatusProjectsLocationsAppConnectorsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: ReportStatusProjectsLocationsAppConnectorsRequest,
  output: ReportStatusProjectsLocationsAppConnectorsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface SetIamPolicyProjectsLocationsAppConnectorsRequest {
  /** REQUIRED: The resource for which the policy is being specified. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field. */
  resource: string;
  /** Request body */
  body?: GoogleIamV1SetIamPolicyRequest;
}

export const SetIamPolicyProjectsLocationsAppConnectorsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    resource: Schema.String.pipe(T.HttpPath("resource")),
    body: Schema.optional(GoogleIamV1SetIamPolicyRequest).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v1alpha/{+resource}:setIamPolicy",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<SetIamPolicyProjectsLocationsAppConnectorsRequest>;

export type SetIamPolicyProjectsLocationsAppConnectorsResponse =
  GoogleIamV1Policy;
export const SetIamPolicyProjectsLocationsAppConnectorsResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleIamV1Policy;

export type SetIamPolicyProjectsLocationsAppConnectorsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Sets the access control policy on the specified resource. Replaces any existing policy. Can return `NOT_FOUND`, `INVALID_ARGUMENT`, and `PERMISSION_DENIED` errors. */
export const setIamPolicyProjectsLocationsAppConnectors: API.OperationMethod<
  SetIamPolicyProjectsLocationsAppConnectorsRequest,
  SetIamPolicyProjectsLocationsAppConnectorsResponse,
  SetIamPolicyProjectsLocationsAppConnectorsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: SetIamPolicyProjectsLocationsAppConnectorsRequest,
  output: SetIamPolicyProjectsLocationsAppConnectorsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface CreateProjectsLocationsAppConnectorsRequest {
  /** Optional. If set, validates request by executing a dry-run which would not alter the resource in any way. */
  validateOnly?: boolean;
  /** Required. The resource project name of the AppConnector location using the form: `projects/{project_id}/locations/{location_id}` */
  parent: string;
  /** Optional. User-settable AppConnector resource ID. * Must start with a letter. * Must contain between 4-63 characters from `/a-z-/`. * Must end with a number or a letter. */
  appConnectorId?: string;
  /** Optional. An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes since the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000). */
  requestId?: string;
  /** Request body */
  body?: GoogleCloudBeyondcorpAppconnectorsV1alphaAppConnector;
}

export const CreateProjectsLocationsAppConnectorsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    validateOnly: Schema.optional(Schema.Boolean).pipe(
      T.HttpQuery("validateOnly"),
    ),
    parent: Schema.String.pipe(T.HttpPath("parent")),
    appConnectorId: Schema.optional(Schema.String).pipe(
      T.HttpQuery("appConnectorId"),
    ),
    requestId: Schema.optional(Schema.String).pipe(T.HttpQuery("requestId")),
    body: Schema.optional(
      GoogleCloudBeyondcorpAppconnectorsV1alphaAppConnector,
    ).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v1alpha/{+parent}/appConnectors",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<CreateProjectsLocationsAppConnectorsRequest>;

export type CreateProjectsLocationsAppConnectorsResponse =
  GoogleLongrunningOperation;
export const CreateProjectsLocationsAppConnectorsResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleLongrunningOperation;

export type CreateProjectsLocationsAppConnectorsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Creates a new AppConnector in a given project and location. */
export const createProjectsLocationsAppConnectors: API.OperationMethod<
  CreateProjectsLocationsAppConnectorsRequest,
  CreateProjectsLocationsAppConnectorsResponse,
  CreateProjectsLocationsAppConnectorsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: CreateProjectsLocationsAppConnectorsRequest,
  output: CreateProjectsLocationsAppConnectorsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface TestIamPermissionsProjectsLocationsAppConnectorsRequest {
  /** REQUIRED: The resource for which the policy detail is being requested. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field. */
  resource: string;
  /** Request body */
  body?: GoogleIamV1TestIamPermissionsRequest;
}

export const TestIamPermissionsProjectsLocationsAppConnectorsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    resource: Schema.String.pipe(T.HttpPath("resource")),
    body: Schema.optional(GoogleIamV1TestIamPermissionsRequest).pipe(
      T.HttpBody(),
    ),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v1alpha/{+resource}:testIamPermissions",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<TestIamPermissionsProjectsLocationsAppConnectorsRequest>;

export type TestIamPermissionsProjectsLocationsAppConnectorsResponse =
  GoogleIamV1TestIamPermissionsResponse;
export const TestIamPermissionsProjectsLocationsAppConnectorsResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleIamV1TestIamPermissionsResponse;

export type TestIamPermissionsProjectsLocationsAppConnectorsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Returns permissions that a caller has on the specified resource. If the resource does not exist, this will return an empty set of permissions, not a `NOT_FOUND` error. Note: This operation is designed to be used for building permission-aware UIs and command-line tools, not for authorization checking. This operation may "fail open" without warning. */
export const testIamPermissionsProjectsLocationsAppConnectors: API.OperationMethod<
  TestIamPermissionsProjectsLocationsAppConnectorsRequest,
  TestIamPermissionsProjectsLocationsAppConnectorsResponse,
  TestIamPermissionsProjectsLocationsAppConnectorsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: TestIamPermissionsProjectsLocationsAppConnectorsRequest,
  output: TestIamPermissionsProjectsLocationsAppConnectorsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface PatchProjectsLocationsConnectionsRequest {
  /** Required. Mask of fields to update. At least one path must be supplied in this field. The elements of the repeated paths field may only include these fields from [BeyondCorp.Connection]: * `labels` * `display_name` * `application_endpoint` * `connectors` */
  updateMask?: string;
  /** Optional. An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes since the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000). */
  requestId?: string;
  /** Optional. If set as true, will create the resource if it is not found. */
  allowMissing?: boolean;
  /** Optional. If set, validates request by executing a dry-run which would not alter the resource in any way. */
  validateOnly?: boolean;
  /** Required. Unique resource name of the connection. The name is ignored when creating a connection. */
  name: string;
  /** Request body */
  body?: Connection;
}

export const PatchProjectsLocationsConnectionsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    updateMask: Schema.optional(Schema.String).pipe(T.HttpQuery("updateMask")),
    requestId: Schema.optional(Schema.String).pipe(T.HttpQuery("requestId")),
    allowMissing: Schema.optional(Schema.Boolean).pipe(
      T.HttpQuery("allowMissing"),
    ),
    validateOnly: Schema.optional(Schema.Boolean).pipe(
      T.HttpQuery("validateOnly"),
    ),
    name: Schema.String.pipe(T.HttpPath("name")),
    body: Schema.optional(Connection).pipe(T.HttpBody()),
  }).pipe(
    T.Http({ method: "PATCH", path: "v1alpha/{+name}", hasBody: true }),
    svc,
  ) as unknown as Schema.Schema<PatchProjectsLocationsConnectionsRequest>;

export type PatchProjectsLocationsConnectionsResponse =
  GoogleLongrunningOperation;
export const PatchProjectsLocationsConnectionsResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleLongrunningOperation;

export type PatchProjectsLocationsConnectionsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Updates the parameters of a single Connection. */
export const patchProjectsLocationsConnections: API.OperationMethod<
  PatchProjectsLocationsConnectionsRequest,
  PatchProjectsLocationsConnectionsResponse,
  PatchProjectsLocationsConnectionsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: PatchProjectsLocationsConnectionsRequest,
  output: PatchProjectsLocationsConnectionsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface SetIamPolicyProjectsLocationsConnectionsRequest {
  /** REQUIRED: The resource for which the policy is being specified. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field. */
  resource: string;
  /** Request body */
  body?: GoogleIamV1SetIamPolicyRequest;
}

export const SetIamPolicyProjectsLocationsConnectionsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    resource: Schema.String.pipe(T.HttpPath("resource")),
    body: Schema.optional(GoogleIamV1SetIamPolicyRequest).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v1alpha/{+resource}:setIamPolicy",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<SetIamPolicyProjectsLocationsConnectionsRequest>;

export type SetIamPolicyProjectsLocationsConnectionsResponse =
  GoogleIamV1Policy;
export const SetIamPolicyProjectsLocationsConnectionsResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleIamV1Policy;

export type SetIamPolicyProjectsLocationsConnectionsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Sets the access control policy on the specified resource. Replaces any existing policy. Can return `NOT_FOUND`, `INVALID_ARGUMENT`, and `PERMISSION_DENIED` errors. */
export const setIamPolicyProjectsLocationsConnections: API.OperationMethod<
  SetIamPolicyProjectsLocationsConnectionsRequest,
  SetIamPolicyProjectsLocationsConnectionsResponse,
  SetIamPolicyProjectsLocationsConnectionsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: SetIamPolicyProjectsLocationsConnectionsRequest,
  output: SetIamPolicyProjectsLocationsConnectionsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface GetIamPolicyProjectsLocationsConnectionsRequest {
  /** Optional. The maximum policy version that will be used to format the policy. Valid values are 0, 1, and 3. Requests specifying an invalid value will be rejected. Requests for policies with any conditional role bindings must specify version 3. Policies with no conditional role bindings may specify any valid value or leave the field unset. The policy in the response might use the policy version that you specified, or it might use a lower policy version. For example, if you specify version 3, but the policy has no conditional role bindings, the response uses version 1. To learn which resources support conditions in their IAM policies, see the [IAM documentation](https://cloud.google.com/iam/help/conditions/resource-policies). */
  "options.requestedPolicyVersion"?: number;
  /** REQUIRED: The resource for which the policy is being requested. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field. */
  resource: string;
}

export const GetIamPolicyProjectsLocationsConnectionsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    "options.requestedPolicyVersion": Schema.optional(Schema.Number).pipe(
      T.HttpQuery("options.requestedPolicyVersion"),
    ),
    resource: Schema.String.pipe(T.HttpPath("resource")),
  }).pipe(
    T.Http({ method: "GET", path: "v1alpha/{+resource}:getIamPolicy" }),
    svc,
  ) as unknown as Schema.Schema<GetIamPolicyProjectsLocationsConnectionsRequest>;

export type GetIamPolicyProjectsLocationsConnectionsResponse =
  GoogleIamV1Policy;
export const GetIamPolicyProjectsLocationsConnectionsResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleIamV1Policy;

export type GetIamPolicyProjectsLocationsConnectionsError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Gets the access control policy for a resource. Returns an empty policy if the resource exists and does not have a policy set. */
export const getIamPolicyProjectsLocationsConnections: API.OperationMethod<
  GetIamPolicyProjectsLocationsConnectionsRequest,
  GetIamPolicyProjectsLocationsConnectionsResponse,
  GetIamPolicyProjectsLocationsConnectionsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetIamPolicyProjectsLocationsConnectionsRequest,
  output: GetIamPolicyProjectsLocationsConnectionsResponse,
  errors: [NotFound, Forbidden],
}));

export interface ListProjectsLocationsConnectionsRequest {
  /** Required. The resource name of the connection location using the form: `projects/{project_id}/locations/{location_id}` */
  parent: string;
  /** Optional. A filter specifying constraints of a list operation. */
  filter?: string;
  /** Optional. Specifies the ordering of results. See [Sorting order](https://cloud.google.com/apis/design/design_patterns#sorting_order) for more information. */
  orderBy?: string;
  /** Optional. The maximum number of items to return. If not specified, a default value of 50 will be used by the service. Regardless of the page_size value, the response may include a partial list and a caller should only rely on response's next_page_token to determine if there are more instances left to be queried. */
  pageSize?: number;
  /** Optional. The next_page_token value returned from a previous ListConnectionsRequest, if any. */
  pageToken?: string;
}

export const ListProjectsLocationsConnectionsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    parent: Schema.String.pipe(T.HttpPath("parent")),
    filter: Schema.optional(Schema.String).pipe(T.HttpQuery("filter")),
    orderBy: Schema.optional(Schema.String).pipe(T.HttpQuery("orderBy")),
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
  }).pipe(
    T.Http({ method: "GET", path: "v1alpha/{+parent}/connections" }),
    svc,
  ) as unknown as Schema.Schema<ListProjectsLocationsConnectionsRequest>;

export type ListProjectsLocationsConnectionsResponse = ListConnectionsResponse;
export const ListProjectsLocationsConnectionsResponse =
  /*@__PURE__*/ /*#__PURE__*/ ListConnectionsResponse;

export type ListProjectsLocationsConnectionsError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Lists Connections in a given project and location. */
export const listProjectsLocationsConnections: API.PaginatedOperationMethod<
  ListProjectsLocationsConnectionsRequest,
  ListProjectsLocationsConnectionsResponse,
  ListProjectsLocationsConnectionsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
  input: ListProjectsLocationsConnectionsRequest,
  output: ListProjectsLocationsConnectionsResponse,
  errors: [NotFound, Forbidden],
  pagination: {
    inputToken: "pageToken",
    outputToken: "nextPageToken",
  },
}));

export interface CreateProjectsLocationsConnectionsRequest {
  /** Optional. User-settable connection resource ID. * Must start with a letter. * Must contain between 4-63 characters from `/a-z-/`. * Must end with a number or a letter. */
  connectionId?: string;
  /** Optional. An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes since the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000). */
  requestId?: string;
  /** Required. The resource project name of the connection location using the form: `projects/{project_id}/locations/{location_id}` */
  parent: string;
  /** Optional. If set, validates request by executing a dry-run which would not alter the resource in any way. */
  validateOnly?: boolean;
  /** Request body */
  body?: Connection;
}

export const CreateProjectsLocationsConnectionsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    connectionId: Schema.optional(Schema.String).pipe(
      T.HttpQuery("connectionId"),
    ),
    requestId: Schema.optional(Schema.String).pipe(T.HttpQuery("requestId")),
    parent: Schema.String.pipe(T.HttpPath("parent")),
    validateOnly: Schema.optional(Schema.Boolean).pipe(
      T.HttpQuery("validateOnly"),
    ),
    body: Schema.optional(Connection).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v1alpha/{+parent}/connections",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<CreateProjectsLocationsConnectionsRequest>;

export type CreateProjectsLocationsConnectionsResponse =
  GoogleLongrunningOperation;
export const CreateProjectsLocationsConnectionsResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleLongrunningOperation;

export type CreateProjectsLocationsConnectionsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Creates a new Connection in a given project and location. */
export const createProjectsLocationsConnections: API.OperationMethod<
  CreateProjectsLocationsConnectionsRequest,
  CreateProjectsLocationsConnectionsResponse,
  CreateProjectsLocationsConnectionsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: CreateProjectsLocationsConnectionsRequest,
  output: CreateProjectsLocationsConnectionsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface DeleteProjectsLocationsConnectionsRequest {
  /** Required. BeyondCorp Connector name using the form: `projects/{project_id}/locations/{location_id}/connections/{connection_id}` */
  name: string;
  /** Optional. An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes after the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000). */
  requestId?: string;
  /** Optional. If set, validates request by executing a dry-run which would not alter the resource in any way. */
  validateOnly?: boolean;
}

export const DeleteProjectsLocationsConnectionsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    requestId: Schema.optional(Schema.String).pipe(T.HttpQuery("requestId")),
    validateOnly: Schema.optional(Schema.Boolean).pipe(
      T.HttpQuery("validateOnly"),
    ),
  }).pipe(
    T.Http({ method: "DELETE", path: "v1alpha/{+name}" }),
    svc,
  ) as unknown as Schema.Schema<DeleteProjectsLocationsConnectionsRequest>;

export type DeleteProjectsLocationsConnectionsResponse =
  GoogleLongrunningOperation;
export const DeleteProjectsLocationsConnectionsResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleLongrunningOperation;

export type DeleteProjectsLocationsConnectionsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Deletes a single Connection. */
export const deleteProjectsLocationsConnections: API.OperationMethod<
  DeleteProjectsLocationsConnectionsRequest,
  DeleteProjectsLocationsConnectionsResponse,
  DeleteProjectsLocationsConnectionsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: DeleteProjectsLocationsConnectionsRequest,
  output: DeleteProjectsLocationsConnectionsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface GetProjectsLocationsConnectionsRequest {
  /** Required. BeyondCorp Connection name using the form: `projects/{project_id}/locations/{location_id}/connections/{connection_id}` */
  name: string;
}

export const GetProjectsLocationsConnectionsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "GET", path: "v1alpha/{+name}" }),
    svc,
  ) as unknown as Schema.Schema<GetProjectsLocationsConnectionsRequest>;

export type GetProjectsLocationsConnectionsResponse = Connection;
export const GetProjectsLocationsConnectionsResponse =
  /*@__PURE__*/ /*#__PURE__*/ Connection;

export type GetProjectsLocationsConnectionsError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Gets details of a single Connection. */
export const getProjectsLocationsConnections: API.OperationMethod<
  GetProjectsLocationsConnectionsRequest,
  GetProjectsLocationsConnectionsResponse,
  GetProjectsLocationsConnectionsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetProjectsLocationsConnectionsRequest,
  output: GetProjectsLocationsConnectionsResponse,
  errors: [NotFound, Forbidden],
}));

export interface ResolveProjectsLocationsConnectionsRequest {
  /** Required. The resource name of the connection location using the form: `projects/{project_id}/locations/{location_id}` */
  parent: string;
  /** Optional. The next_page_token value returned from a previous ResolveConnectionsResponse, if any. */
  pageToken?: string;
  /** Required. BeyondCorp Connector name of the connector associated with those connections using the form: `projects/{project_id}/locations/{location_id}/connectors/{connector_id}` */
  connectorId?: string;
  /** Optional. The maximum number of items to return. If not specified, a default value of 50 will be used by the service. Regardless of the page_size value, the response may include a partial list and a caller should only rely on response's next_page_token to determine if there are more instances left to be queried. */
  pageSize?: number;
}

export const ResolveProjectsLocationsConnectionsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    parent: Schema.String.pipe(T.HttpPath("parent")),
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
    connectorId: Schema.optional(Schema.String).pipe(
      T.HttpQuery("connectorId"),
    ),
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
  }).pipe(
    T.Http({ method: "GET", path: "v1alpha/{+parent}/connections:resolve" }),
    svc,
  ) as unknown as Schema.Schema<ResolveProjectsLocationsConnectionsRequest>;

export type ResolveProjectsLocationsConnectionsResponse =
  ResolveConnectionsResponse;
export const ResolveProjectsLocationsConnectionsResponse =
  /*@__PURE__*/ /*#__PURE__*/ ResolveConnectionsResponse;

export type ResolveProjectsLocationsConnectionsError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Resolves connections details for a given connector. An internal method called by a connector to find connections to connect to. */
export const resolveProjectsLocationsConnections: API.PaginatedOperationMethod<
  ResolveProjectsLocationsConnectionsRequest,
  ResolveProjectsLocationsConnectionsResponse,
  ResolveProjectsLocationsConnectionsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
  input: ResolveProjectsLocationsConnectionsRequest,
  output: ResolveProjectsLocationsConnectionsResponse,
  errors: [NotFound, Forbidden],
  pagination: {
    inputToken: "pageToken",
    outputToken: "nextPageToken",
  },
}));

export interface DeleteProjectsLocationsConnectorsRequest {
  /** Optional. If set, validates request by executing a dry-run which would not alter the resource in any way. */
  validateOnly?: boolean;
  /** Required. BeyondCorp Connector name using the form: `projects/{project_id}/locations/{location_id}/connectors/{connector_id}` */
  name: string;
  /** Optional. An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes after the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000). */
  requestId?: string;
}

export const DeleteProjectsLocationsConnectorsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    validateOnly: Schema.optional(Schema.Boolean).pipe(
      T.HttpQuery("validateOnly"),
    ),
    name: Schema.String.pipe(T.HttpPath("name")),
    requestId: Schema.optional(Schema.String).pipe(T.HttpQuery("requestId")),
  }).pipe(
    T.Http({ method: "DELETE", path: "v1alpha/{+name}" }),
    svc,
  ) as unknown as Schema.Schema<DeleteProjectsLocationsConnectorsRequest>;

export type DeleteProjectsLocationsConnectorsResponse =
  GoogleLongrunningOperation;
export const DeleteProjectsLocationsConnectorsResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleLongrunningOperation;

export type DeleteProjectsLocationsConnectorsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Deletes a single Connector. */
export const deleteProjectsLocationsConnectors: API.OperationMethod<
  DeleteProjectsLocationsConnectorsRequest,
  DeleteProjectsLocationsConnectorsResponse,
  DeleteProjectsLocationsConnectorsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: DeleteProjectsLocationsConnectorsRequest,
  output: DeleteProjectsLocationsConnectorsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface PatchProjectsLocationsConnectorsRequest {
  /** Optional. If set, validates request by executing a dry-run which would not alter the resource in any way. */
  validateOnly?: boolean;
  /** Required. Unique resource name of the connector. The name is ignored when creating a connector. */
  name: string;
  /** Required. Mask of fields to update. At least one path must be supplied in this field. The elements of the repeated paths field may only include these fields from [BeyondCorp.Connector]: * `labels` * `display_name` */
  updateMask?: string;
  /** Optional. An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes since the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000). */
  requestId?: string;
  /** Request body */
  body?: Connector;
}

export const PatchProjectsLocationsConnectorsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    validateOnly: Schema.optional(Schema.Boolean).pipe(
      T.HttpQuery("validateOnly"),
    ),
    name: Schema.String.pipe(T.HttpPath("name")),
    updateMask: Schema.optional(Schema.String).pipe(T.HttpQuery("updateMask")),
    requestId: Schema.optional(Schema.String).pipe(T.HttpQuery("requestId")),
    body: Schema.optional(Connector).pipe(T.HttpBody()),
  }).pipe(
    T.Http({ method: "PATCH", path: "v1alpha/{+name}", hasBody: true }),
    svc,
  ) as unknown as Schema.Schema<PatchProjectsLocationsConnectorsRequest>;

export type PatchProjectsLocationsConnectorsResponse =
  GoogleLongrunningOperation;
export const PatchProjectsLocationsConnectorsResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleLongrunningOperation;

export type PatchProjectsLocationsConnectorsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Updates the parameters of a single Connector. */
export const patchProjectsLocationsConnectors: API.OperationMethod<
  PatchProjectsLocationsConnectorsRequest,
  PatchProjectsLocationsConnectorsResponse,
  PatchProjectsLocationsConnectorsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: PatchProjectsLocationsConnectorsRequest,
  output: PatchProjectsLocationsConnectorsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface ResolveInstanceConfigProjectsLocationsConnectorsRequest {
  /** Required. BeyondCorp Connector name using the form: `projects/{project_id}/locations/{location_id}/connectors/{connector}` */
  connector: string;
}

export const ResolveInstanceConfigProjectsLocationsConnectorsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    connector: Schema.String.pipe(T.HttpPath("connector")),
  }).pipe(
    T.Http({
      method: "GET",
      path: "v1alpha/{+connector}:resolveInstanceConfig",
    }),
    svc,
  ) as unknown as Schema.Schema<ResolveInstanceConfigProjectsLocationsConnectorsRequest>;

export type ResolveInstanceConfigProjectsLocationsConnectorsResponse =
  ResolveInstanceConfigResponse;
export const ResolveInstanceConfigProjectsLocationsConnectorsResponse =
  /*@__PURE__*/ /*#__PURE__*/ ResolveInstanceConfigResponse;

export type ResolveInstanceConfigProjectsLocationsConnectorsError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Gets instance configuration for a given connector. An internal method called by a connector to get its container config. */
export const resolveInstanceConfigProjectsLocationsConnectors: API.OperationMethod<
  ResolveInstanceConfigProjectsLocationsConnectorsRequest,
  ResolveInstanceConfigProjectsLocationsConnectorsResponse,
  ResolveInstanceConfigProjectsLocationsConnectorsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: ResolveInstanceConfigProjectsLocationsConnectorsRequest,
  output: ResolveInstanceConfigProjectsLocationsConnectorsResponse,
  errors: [NotFound, Forbidden],
}));

export interface GetIamPolicyProjectsLocationsConnectorsRequest {
  /** REQUIRED: The resource for which the policy is being requested. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field. */
  resource: string;
  /** Optional. The maximum policy version that will be used to format the policy. Valid values are 0, 1, and 3. Requests specifying an invalid value will be rejected. Requests for policies with any conditional role bindings must specify version 3. Policies with no conditional role bindings may specify any valid value or leave the field unset. The policy in the response might use the policy version that you specified, or it might use a lower policy version. For example, if you specify version 3, but the policy has no conditional role bindings, the response uses version 1. To learn which resources support conditions in their IAM policies, see the [IAM documentation](https://cloud.google.com/iam/help/conditions/resource-policies). */
  "options.requestedPolicyVersion"?: number;
}

export const GetIamPolicyProjectsLocationsConnectorsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    resource: Schema.String.pipe(T.HttpPath("resource")),
    "options.requestedPolicyVersion": Schema.optional(Schema.Number).pipe(
      T.HttpQuery("options.requestedPolicyVersion"),
    ),
  }).pipe(
    T.Http({ method: "GET", path: "v1alpha/{+resource}:getIamPolicy" }),
    svc,
  ) as unknown as Schema.Schema<GetIamPolicyProjectsLocationsConnectorsRequest>;

export type GetIamPolicyProjectsLocationsConnectorsResponse = GoogleIamV1Policy;
export const GetIamPolicyProjectsLocationsConnectorsResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleIamV1Policy;

export type GetIamPolicyProjectsLocationsConnectorsError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Gets the access control policy for a resource. Returns an empty policy if the resource exists and does not have a policy set. */
export const getIamPolicyProjectsLocationsConnectors: API.OperationMethod<
  GetIamPolicyProjectsLocationsConnectorsRequest,
  GetIamPolicyProjectsLocationsConnectorsResponse,
  GetIamPolicyProjectsLocationsConnectorsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetIamPolicyProjectsLocationsConnectorsRequest,
  output: GetIamPolicyProjectsLocationsConnectorsResponse,
  errors: [NotFound, Forbidden],
}));

export interface ListProjectsLocationsConnectorsRequest {
  /** Required. The resource name of the connector location using the form: `projects/{project_id}/locations/{location_id}` */
  parent: string;
  /** Optional. A filter specifying constraints of a list operation. */
  filter?: string;
  /** Optional. Specifies the ordering of results. See [Sorting order](https://cloud.google.com/apis/design/design_patterns#sorting_order) for more information. */
  orderBy?: string;
  /** Optional. The maximum number of items to return. If not specified, a default value of 50 will be used by the service. Regardless of the page_size value, the response may include a partial list and a caller should only rely on response's next_page_token to determine if there are more instances left to be queried. */
  pageSize?: number;
  /** Optional. The next_page_token value returned from a previous ListConnectorsRequest, if any. */
  pageToken?: string;
}

export const ListProjectsLocationsConnectorsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    parent: Schema.String.pipe(T.HttpPath("parent")),
    filter: Schema.optional(Schema.String).pipe(T.HttpQuery("filter")),
    orderBy: Schema.optional(Schema.String).pipe(T.HttpQuery("orderBy")),
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
  }).pipe(
    T.Http({ method: "GET", path: "v1alpha/{+parent}/connectors" }),
    svc,
  ) as unknown as Schema.Schema<ListProjectsLocationsConnectorsRequest>;

export type ListProjectsLocationsConnectorsResponse = ListConnectorsResponse;
export const ListProjectsLocationsConnectorsResponse =
  /*@__PURE__*/ /*#__PURE__*/ ListConnectorsResponse;

export type ListProjectsLocationsConnectorsError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Lists Connectors in a given project and location. */
export const listProjectsLocationsConnectors: API.PaginatedOperationMethod<
  ListProjectsLocationsConnectorsRequest,
  ListProjectsLocationsConnectorsResponse,
  ListProjectsLocationsConnectorsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
  input: ListProjectsLocationsConnectorsRequest,
  output: ListProjectsLocationsConnectorsResponse,
  errors: [NotFound, Forbidden],
  pagination: {
    inputToken: "pageToken",
    outputToken: "nextPageToken",
  },
}));

export interface GetProjectsLocationsConnectorsRequest {
  /** Required. BeyondCorp Connector name using the form: `projects/{project_id}/locations/{location_id}/connectors/{connector_id}` */
  name: string;
}

export const GetProjectsLocationsConnectorsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "GET", path: "v1alpha/{+name}" }),
    svc,
  ) as unknown as Schema.Schema<GetProjectsLocationsConnectorsRequest>;

export type GetProjectsLocationsConnectorsResponse = Connector;
export const GetProjectsLocationsConnectorsResponse =
  /*@__PURE__*/ /*#__PURE__*/ Connector;

export type GetProjectsLocationsConnectorsError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Gets details of a single Connector. */
export const getProjectsLocationsConnectors: API.OperationMethod<
  GetProjectsLocationsConnectorsRequest,
  GetProjectsLocationsConnectorsResponse,
  GetProjectsLocationsConnectorsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetProjectsLocationsConnectorsRequest,
  output: GetProjectsLocationsConnectorsResponse,
  errors: [NotFound, Forbidden],
}));

export interface CreateProjectsLocationsConnectorsRequest {
  /** Required. The resource project name of the connector location using the form: `projects/{project_id}/locations/{location_id}` */
  parent: string;
  /** Optional. User-settable connector resource ID. * Must start with a letter. * Must contain between 4-63 characters from `/a-z-/`. * Must end with a number or a letter. */
  connectorId?: string;
  /** Optional. If set, validates request by executing a dry-run which would not alter the resource in any way. */
  validateOnly?: boolean;
  /** Optional. An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes since the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000). */
  requestId?: string;
  /** Request body */
  body?: Connector;
}

export const CreateProjectsLocationsConnectorsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    parent: Schema.String.pipe(T.HttpPath("parent")),
    connectorId: Schema.optional(Schema.String).pipe(
      T.HttpQuery("connectorId"),
    ),
    validateOnly: Schema.optional(Schema.Boolean).pipe(
      T.HttpQuery("validateOnly"),
    ),
    requestId: Schema.optional(Schema.String).pipe(T.HttpQuery("requestId")),
    body: Schema.optional(Connector).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v1alpha/{+parent}/connectors",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<CreateProjectsLocationsConnectorsRequest>;

export type CreateProjectsLocationsConnectorsResponse =
  GoogleLongrunningOperation;
export const CreateProjectsLocationsConnectorsResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleLongrunningOperation;

export type CreateProjectsLocationsConnectorsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Creates a new Connector in a given project and location. */
export const createProjectsLocationsConnectors: API.OperationMethod<
  CreateProjectsLocationsConnectorsRequest,
  CreateProjectsLocationsConnectorsResponse,
  CreateProjectsLocationsConnectorsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: CreateProjectsLocationsConnectorsRequest,
  output: CreateProjectsLocationsConnectorsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface SetIamPolicyProjectsLocationsConnectorsRequest {
  /** REQUIRED: The resource for which the policy is being specified. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field. */
  resource: string;
  /** Request body */
  body?: GoogleIamV1SetIamPolicyRequest;
}

export const SetIamPolicyProjectsLocationsConnectorsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    resource: Schema.String.pipe(T.HttpPath("resource")),
    body: Schema.optional(GoogleIamV1SetIamPolicyRequest).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v1alpha/{+resource}:setIamPolicy",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<SetIamPolicyProjectsLocationsConnectorsRequest>;

export type SetIamPolicyProjectsLocationsConnectorsResponse = GoogleIamV1Policy;
export const SetIamPolicyProjectsLocationsConnectorsResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleIamV1Policy;

export type SetIamPolicyProjectsLocationsConnectorsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Sets the access control policy on the specified resource. Replaces any existing policy. Can return `NOT_FOUND`, `INVALID_ARGUMENT`, and `PERMISSION_DENIED` errors. */
export const setIamPolicyProjectsLocationsConnectors: API.OperationMethod<
  SetIamPolicyProjectsLocationsConnectorsRequest,
  SetIamPolicyProjectsLocationsConnectorsResponse,
  SetIamPolicyProjectsLocationsConnectorsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: SetIamPolicyProjectsLocationsConnectorsRequest,
  output: SetIamPolicyProjectsLocationsConnectorsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface ReportStatusProjectsLocationsConnectorsRequest {
  /** Required. BeyondCorp Connector name using the form: `projects/{project_id}/locations/{location_id}/connectors/{connector}` */
  connector: string;
  /** Request body */
  body?: ReportStatusRequest;
}

export const ReportStatusProjectsLocationsConnectorsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    connector: Schema.String.pipe(T.HttpPath("connector")),
    body: Schema.optional(ReportStatusRequest).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v1alpha/{+connector}:reportStatus",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<ReportStatusProjectsLocationsConnectorsRequest>;

export type ReportStatusProjectsLocationsConnectorsResponse =
  GoogleLongrunningOperation;
export const ReportStatusProjectsLocationsConnectorsResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleLongrunningOperation;

export type ReportStatusProjectsLocationsConnectorsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Report status for a given connector. */
export const reportStatusProjectsLocationsConnectors: API.OperationMethod<
  ReportStatusProjectsLocationsConnectorsRequest,
  ReportStatusProjectsLocationsConnectorsResponse,
  ReportStatusProjectsLocationsConnectorsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: ReportStatusProjectsLocationsConnectorsRequest,
  output: ReportStatusProjectsLocationsConnectorsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface GetProjectsLocationsInsightsRequest {
  /** Required. The resource name of the insight using the form: `organizations/{organization_id}/locations/{location_id}/insights/{insight_id}` `projects/{project_id}/locations/{location_id}/insights/{insight_id}` */
  name: string;
  /** Required. Metadata only or full data view. */
  view?: "INSIGHT_VIEW_UNSPECIFIED" | "BASIC" | "FULL" | (string & {});
}

export const GetProjectsLocationsInsightsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    view: Schema.optional(Schema.String).pipe(T.HttpQuery("view")),
  }).pipe(
    T.Http({ method: "GET", path: "v1alpha/{+name}" }),
    svc,
  ) as unknown as Schema.Schema<GetProjectsLocationsInsightsRequest>;

export type GetProjectsLocationsInsightsResponse =
  GoogleCloudBeyondcorpSaasplatformInsightsV1alphaInsight;
export const GetProjectsLocationsInsightsResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleCloudBeyondcorpSaasplatformInsightsV1alphaInsight;

export type GetProjectsLocationsInsightsError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Gets the value for a selected particular insight with default configuration. The default aggregation level is 'DAILY' and no grouping will be applied or default grouping if applicable. The data will be returned for recent 7 days starting the day before. The insight data size will be limited to 50 rows. Use the organization level path for fetching at org level and project level path for fetching the insight value specific to a particular project. Setting the `view` to `BASIC` will only return the metadata for the insight. */
export const getProjectsLocationsInsights: API.OperationMethod<
  GetProjectsLocationsInsightsRequest,
  GetProjectsLocationsInsightsResponse,
  GetProjectsLocationsInsightsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetProjectsLocationsInsightsRequest,
  output: GetProjectsLocationsInsightsResponse,
  errors: [NotFound, Forbidden],
}));

export interface ConfiguredInsightProjectsLocationsInsightsRequest {
  /** Required. Starting time for the duration for which insight is to be pulled. */
  startTime?: string;
  /** Required. The resource name of the insight using the form: `organizations/{organization_id}/locations/{location_id}/insights/{insight_id}` `projects/{project_id}/locations/{location_id}/insights/{insight_id}`. */
  insight: string;
  /** Required. Ending time for the duration for which insight is to be pulled. */
  endTime?: string;
  /** Optional. Filterable parameters to be added to the grouping clause. Available fields could be fetched by calling insight list and get APIs in `BASIC` view. `=` is the only comparison operator supported. `AND` is the only logical operator supported. Usage: field_filter="fieldName1=fieldVal1 AND fieldName2=fieldVal2". NOTE: Only `AND` conditions are allowed. NOTE: Use the `filter_alias` from `Insight.Metadata.Field` message for the filtering the corresponding fields in this filter field. (These expressions are based on the filter language described at https://google.aip.dev/160). */
  "customGrouping.fieldFilter"?: string;
  /** Optional. Used to fetch the page represented by the token. Fetches the first page when not set. */
  pageToken?: string;
  /** Required. Aggregation type. Available aggregation could be fetched by calling insight list and get APIs in `BASIC` view. */
  aggregation?:
    | "AGGREGATION_UNSPECIFIED"
    | "HOURLY"
    | "DAILY"
    | "WEEKLY"
    | "MONTHLY"
    | "CUSTOM_DATE_RANGE"
    | (string & {});
  /** Required. Fields to be used for grouping. NOTE: Use the `filter_alias` from `Insight.Metadata.Field` message for declaring the fields to be grouped-by here. */
  "customGrouping.groupFields"?: string[];
  /** Optional. Requested page size. Server may return fewer items than requested. If unspecified, server will pick an appropriate default. */
  pageSize?: number;
  /** Optional. Group id of the available groupings for the insight. Available groupings could be fetched by calling insight list and get APIs in `BASIC` view. */
  group?: string;
  /** Optional. Other filterable/configurable parameters as applicable to the selected insight. Available fields could be fetched by calling insight list and get APIs in `BASIC` view. `=` is the only comparison operator supported. `AND` is the only logical operator supported. Usage: field_filter="fieldName1=fieldVal1 AND fieldName2=fieldVal2". NOTE: Only `AND` conditions are allowed. NOTE: Use the `filter_alias` from `Insight.Metadata.Field` message for the filtering the corresponding fields in this filter field. (These expressions are based on the filter language described at https://google.aip.dev/160). */
  fieldFilter?: string;
}

export const ConfiguredInsightProjectsLocationsInsightsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    startTime: Schema.optional(Schema.String).pipe(T.HttpQuery("startTime")),
    insight: Schema.String.pipe(T.HttpPath("insight")),
    endTime: Schema.optional(Schema.String).pipe(T.HttpQuery("endTime")),
    "customGrouping.fieldFilter": Schema.optional(Schema.String).pipe(
      T.HttpQuery("customGrouping.fieldFilter"),
    ),
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
    aggregation: Schema.optional(Schema.String).pipe(
      T.HttpQuery("aggregation"),
    ),
    "customGrouping.groupFields": Schema.optional(
      Schema.Array(Schema.String),
    ).pipe(T.HttpQuery("customGrouping.groupFields")),
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
    group: Schema.optional(Schema.String).pipe(T.HttpQuery("group")),
    fieldFilter: Schema.optional(Schema.String).pipe(
      T.HttpQuery("fieldFilter"),
    ),
  }).pipe(
    T.Http({ method: "GET", path: "v1alpha/{+insight}:configuredInsight" }),
    svc,
  ) as unknown as Schema.Schema<ConfiguredInsightProjectsLocationsInsightsRequest>;

export type ConfiguredInsightProjectsLocationsInsightsResponse =
  GoogleCloudBeyondcorpSaasplatformInsightsV1alphaConfiguredInsightResponse;
export const ConfiguredInsightProjectsLocationsInsightsResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleCloudBeyondcorpSaasplatformInsightsV1alphaConfiguredInsightResponse;

export type ConfiguredInsightProjectsLocationsInsightsError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Gets the value for a selected particular insight based on the provided filters. Use the organization level path for fetching at org level and project level path for fetching the insight value specific to a particular project. */
export const configuredInsightProjectsLocationsInsights: API.PaginatedOperationMethod<
  ConfiguredInsightProjectsLocationsInsightsRequest,
  ConfiguredInsightProjectsLocationsInsightsResponse,
  ConfiguredInsightProjectsLocationsInsightsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
  input: ConfiguredInsightProjectsLocationsInsightsRequest,
  output: ConfiguredInsightProjectsLocationsInsightsResponse,
  errors: [NotFound, Forbidden],
  pagination: {
    inputToken: "pageToken",
    outputToken: "nextPageToken",
  },
}));

export interface ListProjectsLocationsInsightsRequest {
  /** Optional. Starting time for the duration for which insights are to be pulled. The default is 7 days before the current time. */
  startTime?: string;
  /** Optional. Ending time for the duration for which insights are to be pulled. The default is the current time. */
  endTime?: string;
  /** Required. The resource name of InsightMetadata using the form: `organizations/{organization_id}/locations/{location}` `projects/{project_id}/locations/{location_id}` */
  parent: string;
  /** Required. List only metadata or full data. */
  view?: "INSIGHT_VIEW_UNSPECIFIED" | "BASIC" | "FULL" | (string & {});
  /** Optional. Aggregation type. The default is 'DAILY'. */
  aggregation?:
    | "AGGREGATION_UNSPECIFIED"
    | "HOURLY"
    | "DAILY"
    | "WEEKLY"
    | "MONTHLY"
    | "CUSTOM_DATE_RANGE"
    | (string & {});
  /** Optional. A token identifying a page of results the server should return. */
  pageToken?: string;
  /** Optional. Requested page size. Server may return fewer items than requested. If unspecified, server will pick an appropriate default. NOTE: Default page size is 50. */
  pageSize?: number;
  /** Optional. Hint for how to order the results. This is currently ignored. */
  orderBy?: string;
  /** Optional. Filter expression to restrict the insights returned. Supported filter fields: * `type` * `category` * `subCategory` Examples: * "category = application AND type = count" * "category = application AND subCategory = iap" * "type = status" Allowed values: * type: [count, latency, status, list] * category: [application, device, request, security] * subCategory: [iap, caa, webprotect] NOTE: Only equality based comparison is allowed. Only `AND` conjunction is allowed. NOTE: The 'AND' in the filter field needs to be in capital letters only. NOTE: Just filtering on `subCategory` is not allowed. It should be passed in with the parent `category` too. (These expressions are based on the filter language described at https://google.aip.dev/160). */
  filter?: string;
}

export const ListProjectsLocationsInsightsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    startTime: Schema.optional(Schema.String).pipe(T.HttpQuery("startTime")),
    endTime: Schema.optional(Schema.String).pipe(T.HttpQuery("endTime")),
    parent: Schema.String.pipe(T.HttpPath("parent")),
    view: Schema.optional(Schema.String).pipe(T.HttpQuery("view")),
    aggregation: Schema.optional(Schema.String).pipe(
      T.HttpQuery("aggregation"),
    ),
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
    orderBy: Schema.optional(Schema.String).pipe(T.HttpQuery("orderBy")),
    filter: Schema.optional(Schema.String).pipe(T.HttpQuery("filter")),
  }).pipe(
    T.Http({ method: "GET", path: "v1alpha/{+parent}/insights" }),
    svc,
  ) as unknown as Schema.Schema<ListProjectsLocationsInsightsRequest>;

export type ListProjectsLocationsInsightsResponse =
  GoogleCloudBeyondcorpSaasplatformInsightsV1alphaListInsightsResponse;
export const ListProjectsLocationsInsightsResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleCloudBeyondcorpSaasplatformInsightsV1alphaListInsightsResponse;

export type ListProjectsLocationsInsightsError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Lists for all the available insights that could be fetched from the system. Allows to filter using category. Setting the `view` to `BASIC` will let you iterate over the list of insight metadatas. */
export const listProjectsLocationsInsights: API.PaginatedOperationMethod<
  ListProjectsLocationsInsightsRequest,
  ListProjectsLocationsInsightsResponse,
  ListProjectsLocationsInsightsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
  input: ListProjectsLocationsInsightsRequest,
  output: ListProjectsLocationsInsightsResponse,
  errors: [NotFound, Forbidden],
  pagination: {
    inputToken: "pageToken",
    outputToken: "nextPageToken",
  },
}));

export interface ListProjectsLocationsAppGatewaysRequest {
  /** Optional. The maximum number of items to return. If not specified, a default value of 50 will be used by the service. Regardless of the page_size value, the response may include a partial list and a caller should only rely on response's next_page_token to determine if there are more instances left to be queried. */
  pageSize?: number;
  /** Optional. The next_page_token value returned from a previous ListAppGatewaysRequest, if any. */
  pageToken?: string;
  /** Optional. Specifies the ordering of results. See [Sorting order](https://cloud.google.com/apis/design/design_patterns#sorting_order) for more information. */
  orderBy?: string;
  /** Required. The resource name of the AppGateway location using the form: `projects/{project_id}/locations/{location_id}` */
  parent: string;
  /** Optional. A filter specifying constraints of a list operation. */
  filter?: string;
}

export const ListProjectsLocationsAppGatewaysRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
    orderBy: Schema.optional(Schema.String).pipe(T.HttpQuery("orderBy")),
    parent: Schema.String.pipe(T.HttpPath("parent")),
    filter: Schema.optional(Schema.String).pipe(T.HttpQuery("filter")),
  }).pipe(
    T.Http({ method: "GET", path: "v1alpha/{+parent}/appGateways" }),
    svc,
  ) as unknown as Schema.Schema<ListProjectsLocationsAppGatewaysRequest>;

export type ListProjectsLocationsAppGatewaysResponse = ListAppGatewaysResponse;
export const ListProjectsLocationsAppGatewaysResponse =
  /*@__PURE__*/ /*#__PURE__*/ ListAppGatewaysResponse;

export type ListProjectsLocationsAppGatewaysError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Lists AppGateways in a given project and location. */
export const listProjectsLocationsAppGateways: API.PaginatedOperationMethod<
  ListProjectsLocationsAppGatewaysRequest,
  ListProjectsLocationsAppGatewaysResponse,
  ListProjectsLocationsAppGatewaysError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
  input: ListProjectsLocationsAppGatewaysRequest,
  output: ListProjectsLocationsAppGatewaysResponse,
  errors: [NotFound, Forbidden],
  pagination: {
    inputToken: "pageToken",
    outputToken: "nextPageToken",
  },
}));

export interface SetIamPolicyProjectsLocationsAppGatewaysRequest {
  /** REQUIRED: The resource for which the policy is being specified. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field. */
  resource: string;
  /** Request body */
  body?: GoogleIamV1SetIamPolicyRequest;
}

export const SetIamPolicyProjectsLocationsAppGatewaysRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    resource: Schema.String.pipe(T.HttpPath("resource")),
    body: Schema.optional(GoogleIamV1SetIamPolicyRequest).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v1alpha/{+resource}:setIamPolicy",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<SetIamPolicyProjectsLocationsAppGatewaysRequest>;

export type SetIamPolicyProjectsLocationsAppGatewaysResponse =
  GoogleIamV1Policy;
export const SetIamPolicyProjectsLocationsAppGatewaysResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleIamV1Policy;

export type SetIamPolicyProjectsLocationsAppGatewaysError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Sets the access control policy on the specified resource. Replaces any existing policy. Can return `NOT_FOUND`, `INVALID_ARGUMENT`, and `PERMISSION_DENIED` errors. */
export const setIamPolicyProjectsLocationsAppGateways: API.OperationMethod<
  SetIamPolicyProjectsLocationsAppGatewaysRequest,
  SetIamPolicyProjectsLocationsAppGatewaysResponse,
  SetIamPolicyProjectsLocationsAppGatewaysError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: SetIamPolicyProjectsLocationsAppGatewaysRequest,
  output: SetIamPolicyProjectsLocationsAppGatewaysResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface GetIamPolicyProjectsLocationsAppGatewaysRequest {
  /** Optional. The maximum policy version that will be used to format the policy. Valid values are 0, 1, and 3. Requests specifying an invalid value will be rejected. Requests for policies with any conditional role bindings must specify version 3. Policies with no conditional role bindings may specify any valid value or leave the field unset. The policy in the response might use the policy version that you specified, or it might use a lower policy version. For example, if you specify version 3, but the policy has no conditional role bindings, the response uses version 1. To learn which resources support conditions in their IAM policies, see the [IAM documentation](https://cloud.google.com/iam/help/conditions/resource-policies). */
  "options.requestedPolicyVersion"?: number;
  /** REQUIRED: The resource for which the policy is being requested. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field. */
  resource: string;
}

export const GetIamPolicyProjectsLocationsAppGatewaysRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    "options.requestedPolicyVersion": Schema.optional(Schema.Number).pipe(
      T.HttpQuery("options.requestedPolicyVersion"),
    ),
    resource: Schema.String.pipe(T.HttpPath("resource")),
  }).pipe(
    T.Http({ method: "GET", path: "v1alpha/{+resource}:getIamPolicy" }),
    svc,
  ) as unknown as Schema.Schema<GetIamPolicyProjectsLocationsAppGatewaysRequest>;

export type GetIamPolicyProjectsLocationsAppGatewaysResponse =
  GoogleIamV1Policy;
export const GetIamPolicyProjectsLocationsAppGatewaysResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleIamV1Policy;

export type GetIamPolicyProjectsLocationsAppGatewaysError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Gets the access control policy for a resource. Returns an empty policy if the resource exists and does not have a policy set. */
export const getIamPolicyProjectsLocationsAppGateways: API.OperationMethod<
  GetIamPolicyProjectsLocationsAppGatewaysRequest,
  GetIamPolicyProjectsLocationsAppGatewaysResponse,
  GetIamPolicyProjectsLocationsAppGatewaysError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetIamPolicyProjectsLocationsAppGatewaysRequest,
  output: GetIamPolicyProjectsLocationsAppGatewaysResponse,
  errors: [NotFound, Forbidden],
}));

export interface CreateProjectsLocationsAppGatewaysRequest {
  /** Required. The resource project name of the AppGateway location using the form: `projects/{project_id}/locations/{location_id}` */
  parent: string;
  /** Optional. If set, validates request by executing a dry-run which would not alter the resource in any way. */
  validateOnly?: boolean;
  /** Optional. User-settable AppGateway resource ID. * Must start with a letter. * Must contain between 4-63 characters from `/a-z-/`. * Must end with a number or a letter. */
  appGatewayId?: string;
  /** Optional. An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes since the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000). */
  requestId?: string;
  /** Request body */
  body?: AppGateway;
}

export const CreateProjectsLocationsAppGatewaysRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    parent: Schema.String.pipe(T.HttpPath("parent")),
    validateOnly: Schema.optional(Schema.Boolean).pipe(
      T.HttpQuery("validateOnly"),
    ),
    appGatewayId: Schema.optional(Schema.String).pipe(
      T.HttpQuery("appGatewayId"),
    ),
    requestId: Schema.optional(Schema.String).pipe(T.HttpQuery("requestId")),
    body: Schema.optional(AppGateway).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v1alpha/{+parent}/appGateways",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<CreateProjectsLocationsAppGatewaysRequest>;

export type CreateProjectsLocationsAppGatewaysResponse =
  GoogleLongrunningOperation;
export const CreateProjectsLocationsAppGatewaysResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleLongrunningOperation;

export type CreateProjectsLocationsAppGatewaysError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Creates a new AppGateway in a given project and location. */
export const createProjectsLocationsAppGateways: API.OperationMethod<
  CreateProjectsLocationsAppGatewaysRequest,
  CreateProjectsLocationsAppGatewaysResponse,
  CreateProjectsLocationsAppGatewaysError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: CreateProjectsLocationsAppGatewaysRequest,
  output: CreateProjectsLocationsAppGatewaysResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface DeleteProjectsLocationsAppGatewaysRequest {
  /** Required. BeyondCorp AppGateway name using the form: `projects/{project_id}/locations/{location_id}/appGateways/{app_gateway_id}` */
  name: string;
  /** Optional. An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes after the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000). */
  requestId?: string;
  /** Optional. If set, validates request by executing a dry-run which would not alter the resource in any way. */
  validateOnly?: boolean;
}

export const DeleteProjectsLocationsAppGatewaysRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    requestId: Schema.optional(Schema.String).pipe(T.HttpQuery("requestId")),
    validateOnly: Schema.optional(Schema.Boolean).pipe(
      T.HttpQuery("validateOnly"),
    ),
  }).pipe(
    T.Http({ method: "DELETE", path: "v1alpha/{+name}" }),
    svc,
  ) as unknown as Schema.Schema<DeleteProjectsLocationsAppGatewaysRequest>;

export type DeleteProjectsLocationsAppGatewaysResponse =
  GoogleLongrunningOperation;
export const DeleteProjectsLocationsAppGatewaysResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleLongrunningOperation;

export type DeleteProjectsLocationsAppGatewaysError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Deletes a single AppGateway. */
export const deleteProjectsLocationsAppGateways: API.OperationMethod<
  DeleteProjectsLocationsAppGatewaysRequest,
  DeleteProjectsLocationsAppGatewaysResponse,
  DeleteProjectsLocationsAppGatewaysError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: DeleteProjectsLocationsAppGatewaysRequest,
  output: DeleteProjectsLocationsAppGatewaysResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface TestIamPermissionsProjectsLocationsAppGatewaysRequest {
  /** REQUIRED: The resource for which the policy detail is being requested. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field. */
  resource: string;
  /** Request body */
  body?: GoogleIamV1TestIamPermissionsRequest;
}

export const TestIamPermissionsProjectsLocationsAppGatewaysRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    resource: Schema.String.pipe(T.HttpPath("resource")),
    body: Schema.optional(GoogleIamV1TestIamPermissionsRequest).pipe(
      T.HttpBody(),
    ),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v1alpha/{+resource}:testIamPermissions",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<TestIamPermissionsProjectsLocationsAppGatewaysRequest>;

export type TestIamPermissionsProjectsLocationsAppGatewaysResponse =
  GoogleIamV1TestIamPermissionsResponse;
export const TestIamPermissionsProjectsLocationsAppGatewaysResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleIamV1TestIamPermissionsResponse;

export type TestIamPermissionsProjectsLocationsAppGatewaysError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Returns permissions that a caller has on the specified resource. If the resource does not exist, this will return an empty set of permissions, not a `NOT_FOUND` error. Note: This operation is designed to be used for building permission-aware UIs and command-line tools, not for authorization checking. This operation may "fail open" without warning. */
export const testIamPermissionsProjectsLocationsAppGateways: API.OperationMethod<
  TestIamPermissionsProjectsLocationsAppGatewaysRequest,
  TestIamPermissionsProjectsLocationsAppGatewaysResponse,
  TestIamPermissionsProjectsLocationsAppGatewaysError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: TestIamPermissionsProjectsLocationsAppGatewaysRequest,
  output: TestIamPermissionsProjectsLocationsAppGatewaysResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface GetProjectsLocationsAppGatewaysRequest {
  /** Required. BeyondCorp AppGateway name using the form: `projects/{project_id}/locations/{location_id}/appGateways/{app_gateway_id}` */
  name: string;
}

export const GetProjectsLocationsAppGatewaysRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "GET", path: "v1alpha/{+name}" }),
    svc,
  ) as unknown as Schema.Schema<GetProjectsLocationsAppGatewaysRequest>;

export type GetProjectsLocationsAppGatewaysResponse = AppGateway;
export const GetProjectsLocationsAppGatewaysResponse =
  /*@__PURE__*/ /*#__PURE__*/ AppGateway;

export type GetProjectsLocationsAppGatewaysError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Gets details of a single AppGateway. */
export const getProjectsLocationsAppGateways: API.OperationMethod<
  GetProjectsLocationsAppGatewaysRequest,
  GetProjectsLocationsAppGatewaysResponse,
  GetProjectsLocationsAppGatewaysError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetProjectsLocationsAppGatewaysRequest,
  output: GetProjectsLocationsAppGatewaysResponse,
  errors: [NotFound, Forbidden],
}));

export interface ListProjectsLocationsSecurityGatewaysRequest {
  /** Optional. Specifies the ordering of results. See [Sorting order](https://cloud.google.com/apis/design/design_patterns#sorting_order) for more information. */
  orderBy?: string;
  /** Required. The parent location to which the resources belong. `projects/{project_id}/locations/{location_id}/` */
  parent: string;
  /** Optional. A filter specifying constraints of a list operation. All fields in the SecurityGateway message are supported. For example, the following query will return the SecurityGateway with displayName "test-security-gateway" For more information, please refer to https://google.aip.dev/160. */
  filter?: string;
  /** Optional. The next_page_token value returned from a previous ListSecurityGatewayRequest, if any. */
  pageToken?: string;
  /** Optional. The maximum number of items to return. If not specified, a default value of 50 will be used by the service. Regardless of the page_size value, the response may include a partial list and a caller should only rely on response's next_page_token to determine if there are more instances left to be queried. */
  pageSize?: number;
}

export const ListProjectsLocationsSecurityGatewaysRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    orderBy: Schema.optional(Schema.String).pipe(T.HttpQuery("orderBy")),
    parent: Schema.String.pipe(T.HttpPath("parent")),
    filter: Schema.optional(Schema.String).pipe(T.HttpQuery("filter")),
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
  }).pipe(
    T.Http({ method: "GET", path: "v1alpha/{+parent}/securityGateways" }),
    svc,
  ) as unknown as Schema.Schema<ListProjectsLocationsSecurityGatewaysRequest>;

export type ListProjectsLocationsSecurityGatewaysResponse =
  GoogleCloudBeyondcorpSecuritygatewaysV1alphaListSecurityGatewaysResponse;
export const ListProjectsLocationsSecurityGatewaysResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleCloudBeyondcorpSecuritygatewaysV1alphaListSecurityGatewaysResponse;

export type ListProjectsLocationsSecurityGatewaysError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Lists SecurityGateways in a given project and location. */
export const listProjectsLocationsSecurityGateways: API.PaginatedOperationMethod<
  ListProjectsLocationsSecurityGatewaysRequest,
  ListProjectsLocationsSecurityGatewaysResponse,
  ListProjectsLocationsSecurityGatewaysError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
  input: ListProjectsLocationsSecurityGatewaysRequest,
  output: ListProjectsLocationsSecurityGatewaysResponse,
  errors: [NotFound, Forbidden],
  pagination: {
    inputToken: "pageToken",
    outputToken: "nextPageToken",
  },
}));

export interface PatchProjectsLocationsSecurityGatewaysRequest {
  /** Identifier. Name of the resource. */
  name: string;
  /** Optional. Mutable fields include: display_name, hubs. */
  updateMask?: string;
  /** Optional. An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes after the first request. For example, consider a situation where you make an initial request and the request timed out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000). */
  requestId?: string;
  /** Request body */
  body?: GoogleCloudBeyondcorpSecuritygatewaysV1alphaSecurityGateway;
}

export const PatchProjectsLocationsSecurityGatewaysRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    updateMask: Schema.optional(Schema.String).pipe(T.HttpQuery("updateMask")),
    requestId: Schema.optional(Schema.String).pipe(T.HttpQuery("requestId")),
    body: Schema.optional(
      GoogleCloudBeyondcorpSecuritygatewaysV1alphaSecurityGateway,
    ).pipe(T.HttpBody()),
  }).pipe(
    T.Http({ method: "PATCH", path: "v1alpha/{+name}", hasBody: true }),
    svc,
  ) as unknown as Schema.Schema<PatchProjectsLocationsSecurityGatewaysRequest>;

export type PatchProjectsLocationsSecurityGatewaysResponse =
  GoogleLongrunningOperation;
export const PatchProjectsLocationsSecurityGatewaysResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleLongrunningOperation;

export type PatchProjectsLocationsSecurityGatewaysError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Updates the parameters of a single SecurityGateway. */
export const patchProjectsLocationsSecurityGateways: API.OperationMethod<
  PatchProjectsLocationsSecurityGatewaysRequest,
  PatchProjectsLocationsSecurityGatewaysResponse,
  PatchProjectsLocationsSecurityGatewaysError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: PatchProjectsLocationsSecurityGatewaysRequest,
  output: PatchProjectsLocationsSecurityGatewaysResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface SetIamPolicyProjectsLocationsSecurityGatewaysRequest {
  /** REQUIRED: The resource for which the policy is being specified. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field. */
  resource: string;
  /** Request body */
  body?: GoogleIamV1SetIamPolicyRequest;
}

export const SetIamPolicyProjectsLocationsSecurityGatewaysRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    resource: Schema.String.pipe(T.HttpPath("resource")),
    body: Schema.optional(GoogleIamV1SetIamPolicyRequest).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v1alpha/{+resource}:setIamPolicy",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<SetIamPolicyProjectsLocationsSecurityGatewaysRequest>;

export type SetIamPolicyProjectsLocationsSecurityGatewaysResponse =
  GoogleIamV1Policy;
export const SetIamPolicyProjectsLocationsSecurityGatewaysResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleIamV1Policy;

export type SetIamPolicyProjectsLocationsSecurityGatewaysError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Sets the access control policy on the specified resource. Replaces any existing policy. Can return `NOT_FOUND`, `INVALID_ARGUMENT`, and `PERMISSION_DENIED` errors. */
export const setIamPolicyProjectsLocationsSecurityGateways: API.OperationMethod<
  SetIamPolicyProjectsLocationsSecurityGatewaysRequest,
  SetIamPolicyProjectsLocationsSecurityGatewaysResponse,
  SetIamPolicyProjectsLocationsSecurityGatewaysError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: SetIamPolicyProjectsLocationsSecurityGatewaysRequest,
  output: SetIamPolicyProjectsLocationsSecurityGatewaysResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface GetIamPolicyProjectsLocationsSecurityGatewaysRequest {
  /** REQUIRED: The resource for which the policy is being requested. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field. */
  resource: string;
  /** Optional. The maximum policy version that will be used to format the policy. Valid values are 0, 1, and 3. Requests specifying an invalid value will be rejected. Requests for policies with any conditional role bindings must specify version 3. Policies with no conditional role bindings may specify any valid value or leave the field unset. The policy in the response might use the policy version that you specified, or it might use a lower policy version. For example, if you specify version 3, but the policy has no conditional role bindings, the response uses version 1. To learn which resources support conditions in their IAM policies, see the [IAM documentation](https://cloud.google.com/iam/help/conditions/resource-policies). */
  "options.requestedPolicyVersion"?: number;
}

export const GetIamPolicyProjectsLocationsSecurityGatewaysRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    resource: Schema.String.pipe(T.HttpPath("resource")),
    "options.requestedPolicyVersion": Schema.optional(Schema.Number).pipe(
      T.HttpQuery("options.requestedPolicyVersion"),
    ),
  }).pipe(
    T.Http({ method: "GET", path: "v1alpha/{+resource}:getIamPolicy" }),
    svc,
  ) as unknown as Schema.Schema<GetIamPolicyProjectsLocationsSecurityGatewaysRequest>;

export type GetIamPolicyProjectsLocationsSecurityGatewaysResponse =
  GoogleIamV1Policy;
export const GetIamPolicyProjectsLocationsSecurityGatewaysResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleIamV1Policy;

export type GetIamPolicyProjectsLocationsSecurityGatewaysError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Gets the access control policy for a resource. Returns an empty policy if the resource exists and does not have a policy set. */
export const getIamPolicyProjectsLocationsSecurityGateways: API.OperationMethod<
  GetIamPolicyProjectsLocationsSecurityGatewaysRequest,
  GetIamPolicyProjectsLocationsSecurityGatewaysResponse,
  GetIamPolicyProjectsLocationsSecurityGatewaysError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetIamPolicyProjectsLocationsSecurityGatewaysRequest,
  output: GetIamPolicyProjectsLocationsSecurityGatewaysResponse,
  errors: [NotFound, Forbidden],
}));

export interface CreateProjectsLocationsSecurityGatewaysRequest {
  /** Optional. An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes since the first request. */
  requestId?: string;
  /** Optional. User-settable SecurityGateway resource ID. * Must start with a letter. * Must contain between 4-63 characters from `/a-z-/`. * Must end with a number or letter. */
  securityGatewayId?: string;
  /** Required. The resource project name of the SecurityGateway location using the form: `projects/{project_id}/locations/{location_id}` */
  parent: string;
  /** Request body */
  body?: GoogleCloudBeyondcorpSecuritygatewaysV1alphaSecurityGateway;
}

export const CreateProjectsLocationsSecurityGatewaysRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    requestId: Schema.optional(Schema.String).pipe(T.HttpQuery("requestId")),
    securityGatewayId: Schema.optional(Schema.String).pipe(
      T.HttpQuery("securityGatewayId"),
    ),
    parent: Schema.String.pipe(T.HttpPath("parent")),
    body: Schema.optional(
      GoogleCloudBeyondcorpSecuritygatewaysV1alphaSecurityGateway,
    ).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v1alpha/{+parent}/securityGateways",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<CreateProjectsLocationsSecurityGatewaysRequest>;

export type CreateProjectsLocationsSecurityGatewaysResponse =
  GoogleLongrunningOperation;
export const CreateProjectsLocationsSecurityGatewaysResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleLongrunningOperation;

export type CreateProjectsLocationsSecurityGatewaysError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Creates a new Security Gateway in a given project and location. */
export const createProjectsLocationsSecurityGateways: API.OperationMethod<
  CreateProjectsLocationsSecurityGatewaysRequest,
  CreateProjectsLocationsSecurityGatewaysResponse,
  CreateProjectsLocationsSecurityGatewaysError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: CreateProjectsLocationsSecurityGatewaysRequest,
  output: CreateProjectsLocationsSecurityGatewaysResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface DeleteProjectsLocationsSecurityGatewaysRequest {
  /** Required. BeyondCorp SecurityGateway name using the form: `projects/{project_id}/locations/{location_id}/securityGateways/{security_gateway_id}` */
  name: string;
  /** Optional. An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes after the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000). */
  requestId?: string;
  /** Optional. If set, validates request by executing a dry-run which would not alter the resource in any way. */
  validateOnly?: boolean;
}

export const DeleteProjectsLocationsSecurityGatewaysRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    requestId: Schema.optional(Schema.String).pipe(T.HttpQuery("requestId")),
    validateOnly: Schema.optional(Schema.Boolean).pipe(
      T.HttpQuery("validateOnly"),
    ),
  }).pipe(
    T.Http({ method: "DELETE", path: "v1alpha/{+name}" }),
    svc,
  ) as unknown as Schema.Schema<DeleteProjectsLocationsSecurityGatewaysRequest>;

export type DeleteProjectsLocationsSecurityGatewaysResponse =
  GoogleLongrunningOperation;
export const DeleteProjectsLocationsSecurityGatewaysResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleLongrunningOperation;

export type DeleteProjectsLocationsSecurityGatewaysError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Deletes a single SecurityGateway. */
export const deleteProjectsLocationsSecurityGateways: API.OperationMethod<
  DeleteProjectsLocationsSecurityGatewaysRequest,
  DeleteProjectsLocationsSecurityGatewaysResponse,
  DeleteProjectsLocationsSecurityGatewaysError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: DeleteProjectsLocationsSecurityGatewaysRequest,
  output: DeleteProjectsLocationsSecurityGatewaysResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface TestIamPermissionsProjectsLocationsSecurityGatewaysRequest {
  /** REQUIRED: The resource for which the policy detail is being requested. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field. */
  resource: string;
  /** Request body */
  body?: GoogleIamV1TestIamPermissionsRequest;
}

export const TestIamPermissionsProjectsLocationsSecurityGatewaysRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    resource: Schema.String.pipe(T.HttpPath("resource")),
    body: Schema.optional(GoogleIamV1TestIamPermissionsRequest).pipe(
      T.HttpBody(),
    ),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v1alpha/{+resource}:testIamPermissions",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<TestIamPermissionsProjectsLocationsSecurityGatewaysRequest>;

export type TestIamPermissionsProjectsLocationsSecurityGatewaysResponse =
  GoogleIamV1TestIamPermissionsResponse;
export const TestIamPermissionsProjectsLocationsSecurityGatewaysResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleIamV1TestIamPermissionsResponse;

export type TestIamPermissionsProjectsLocationsSecurityGatewaysError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Returns permissions that a caller has on the specified resource. If the resource does not exist, this will return an empty set of permissions, not a `NOT_FOUND` error. Note: This operation is designed to be used for building permission-aware UIs and command-line tools, not for authorization checking. This operation may "fail open" without warning. */
export const testIamPermissionsProjectsLocationsSecurityGateways: API.OperationMethod<
  TestIamPermissionsProjectsLocationsSecurityGatewaysRequest,
  TestIamPermissionsProjectsLocationsSecurityGatewaysResponse,
  TestIamPermissionsProjectsLocationsSecurityGatewaysError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: TestIamPermissionsProjectsLocationsSecurityGatewaysRequest,
  output: TestIamPermissionsProjectsLocationsSecurityGatewaysResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface GetProjectsLocationsSecurityGatewaysRequest {
  /** Required. The resource name of the PartnerTenant using the form: `projects/{project_id}/locations/{location_id}/securityGateway/{security_gateway_id}` */
  name: string;
}

export const GetProjectsLocationsSecurityGatewaysRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "GET", path: "v1alpha/{+name}" }),
    svc,
  ) as unknown as Schema.Schema<GetProjectsLocationsSecurityGatewaysRequest>;

export type GetProjectsLocationsSecurityGatewaysResponse =
  GoogleCloudBeyondcorpSecuritygatewaysV1alphaSecurityGateway;
export const GetProjectsLocationsSecurityGatewaysResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleCloudBeyondcorpSecuritygatewaysV1alphaSecurityGateway;

export type GetProjectsLocationsSecurityGatewaysError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Gets details of a single SecurityGateway. */
export const getProjectsLocationsSecurityGateways: API.OperationMethod<
  GetProjectsLocationsSecurityGatewaysRequest,
  GetProjectsLocationsSecurityGatewaysResponse,
  GetProjectsLocationsSecurityGatewaysError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetProjectsLocationsSecurityGatewaysRequest,
  output: GetProjectsLocationsSecurityGatewaysResponse,
  errors: [NotFound, Forbidden],
}));

export interface GetProjectsLocationsSecurityGatewaysApplicationsRequest {
  /** Required. The resource name of the Application using the form: `projects/{project_id}/locations/global/securityGateway/{security_gateway_id}/applications/{application_id}` */
  name: string;
}

export const GetProjectsLocationsSecurityGatewaysApplicationsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "GET", path: "v1alpha/{+name}" }),
    svc,
  ) as unknown as Schema.Schema<GetProjectsLocationsSecurityGatewaysApplicationsRequest>;

export type GetProjectsLocationsSecurityGatewaysApplicationsResponse =
  GoogleCloudBeyondcorpSecuritygatewaysV1alphaApplication;
export const GetProjectsLocationsSecurityGatewaysApplicationsResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleCloudBeyondcorpSecuritygatewaysV1alphaApplication;

export type GetProjectsLocationsSecurityGatewaysApplicationsError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Gets details of a single Application. */
export const getProjectsLocationsSecurityGatewaysApplications: API.OperationMethod<
  GetProjectsLocationsSecurityGatewaysApplicationsRequest,
  GetProjectsLocationsSecurityGatewaysApplicationsResponse,
  GetProjectsLocationsSecurityGatewaysApplicationsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetProjectsLocationsSecurityGatewaysApplicationsRequest,
  output: GetProjectsLocationsSecurityGatewaysApplicationsResponse,
  errors: [NotFound, Forbidden],
}));

export interface PatchProjectsLocationsSecurityGatewaysApplicationsRequest {
  /** Identifier. Name of the resource. */
  name: string;
  /** Optional. Mutable fields include: display_name. */
  updateMask?: string;
  /** Optional. An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes after the first request. For example, consider a situation where you make an initial request and the request timed out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000). */
  requestId?: string;
  /** Request body */
  body?: GoogleCloudBeyondcorpSecuritygatewaysV1alphaApplication;
}

export const PatchProjectsLocationsSecurityGatewaysApplicationsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    updateMask: Schema.optional(Schema.String).pipe(T.HttpQuery("updateMask")),
    requestId: Schema.optional(Schema.String).pipe(T.HttpQuery("requestId")),
    body: Schema.optional(
      GoogleCloudBeyondcorpSecuritygatewaysV1alphaApplication,
    ).pipe(T.HttpBody()),
  }).pipe(
    T.Http({ method: "PATCH", path: "v1alpha/{+name}", hasBody: true }),
    svc,
  ) as unknown as Schema.Schema<PatchProjectsLocationsSecurityGatewaysApplicationsRequest>;

export type PatchProjectsLocationsSecurityGatewaysApplicationsResponse =
  GoogleLongrunningOperation;
export const PatchProjectsLocationsSecurityGatewaysApplicationsResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleLongrunningOperation;

export type PatchProjectsLocationsSecurityGatewaysApplicationsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Updates the parameters of a single Application. */
export const patchProjectsLocationsSecurityGatewaysApplications: API.OperationMethod<
  PatchProjectsLocationsSecurityGatewaysApplicationsRequest,
  PatchProjectsLocationsSecurityGatewaysApplicationsResponse,
  PatchProjectsLocationsSecurityGatewaysApplicationsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: PatchProjectsLocationsSecurityGatewaysApplicationsRequest,
  output: PatchProjectsLocationsSecurityGatewaysApplicationsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface SetIamPolicyProjectsLocationsSecurityGatewaysApplicationsRequest {
  /** REQUIRED: The resource for which the policy is being specified. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field. */
  resource: string;
  /** Request body */
  body?: GoogleIamV1SetIamPolicyRequest;
}

export const SetIamPolicyProjectsLocationsSecurityGatewaysApplicationsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    resource: Schema.String.pipe(T.HttpPath("resource")),
    body: Schema.optional(GoogleIamV1SetIamPolicyRequest).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v1alpha/{+resource}:setIamPolicy",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<SetIamPolicyProjectsLocationsSecurityGatewaysApplicationsRequest>;

export type SetIamPolicyProjectsLocationsSecurityGatewaysApplicationsResponse =
  GoogleIamV1Policy;
export const SetIamPolicyProjectsLocationsSecurityGatewaysApplicationsResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleIamV1Policy;

export type SetIamPolicyProjectsLocationsSecurityGatewaysApplicationsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Sets the access control policy on the specified resource. Replaces any existing policy. Can return `NOT_FOUND`, `INVALID_ARGUMENT`, and `PERMISSION_DENIED` errors. */
export const setIamPolicyProjectsLocationsSecurityGatewaysApplications: API.OperationMethod<
  SetIamPolicyProjectsLocationsSecurityGatewaysApplicationsRequest,
  SetIamPolicyProjectsLocationsSecurityGatewaysApplicationsResponse,
  SetIamPolicyProjectsLocationsSecurityGatewaysApplicationsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: SetIamPolicyProjectsLocationsSecurityGatewaysApplicationsRequest,
  output: SetIamPolicyProjectsLocationsSecurityGatewaysApplicationsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface GetIamPolicyProjectsLocationsSecurityGatewaysApplicationsRequest {
  /** REQUIRED: The resource for which the policy is being requested. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field. */
  resource: string;
  /** Optional. The maximum policy version that will be used to format the policy. Valid values are 0, 1, and 3. Requests specifying an invalid value will be rejected. Requests for policies with any conditional role bindings must specify version 3. Policies with no conditional role bindings may specify any valid value or leave the field unset. The policy in the response might use the policy version that you specified, or it might use a lower policy version. For example, if you specify version 3, but the policy has no conditional role bindings, the response uses version 1. To learn which resources support conditions in their IAM policies, see the [IAM documentation](https://cloud.google.com/iam/help/conditions/resource-policies). */
  "options.requestedPolicyVersion"?: number;
}

export const GetIamPolicyProjectsLocationsSecurityGatewaysApplicationsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    resource: Schema.String.pipe(T.HttpPath("resource")),
    "options.requestedPolicyVersion": Schema.optional(Schema.Number).pipe(
      T.HttpQuery("options.requestedPolicyVersion"),
    ),
  }).pipe(
    T.Http({ method: "GET", path: "v1alpha/{+resource}:getIamPolicy" }),
    svc,
  ) as unknown as Schema.Schema<GetIamPolicyProjectsLocationsSecurityGatewaysApplicationsRequest>;

export type GetIamPolicyProjectsLocationsSecurityGatewaysApplicationsResponse =
  GoogleIamV1Policy;
export const GetIamPolicyProjectsLocationsSecurityGatewaysApplicationsResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleIamV1Policy;

export type GetIamPolicyProjectsLocationsSecurityGatewaysApplicationsError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Gets the access control policy for a resource. Returns an empty policy if the resource exists and does not have a policy set. */
export const getIamPolicyProjectsLocationsSecurityGatewaysApplications: API.OperationMethod<
  GetIamPolicyProjectsLocationsSecurityGatewaysApplicationsRequest,
  GetIamPolicyProjectsLocationsSecurityGatewaysApplicationsResponse,
  GetIamPolicyProjectsLocationsSecurityGatewaysApplicationsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetIamPolicyProjectsLocationsSecurityGatewaysApplicationsRequest,
  output: GetIamPolicyProjectsLocationsSecurityGatewaysApplicationsResponse,
  errors: [NotFound, Forbidden],
}));

export interface ListProjectsLocationsSecurityGatewaysApplicationsRequest {
  /** Optional. The next_page_token value returned from a previous ListApplicationsRequest, if any. */
  pageToken?: string;
  /** Optional. The maximum number of items to return. If not specified, a default value of 50 will be used by the service. Regardless of the page_size value, the response may include a partial list and a caller should only rely on response's next_page_token to determine if there are more instances left to be queried. */
  pageSize?: number;
  /** Optional. Specifies the ordering of results. See [Sorting order](https://cloud.google.com/apis/design/design_patterns#sorting_order) for more information. */
  orderBy?: string;
  /** Required. The parent location to which the resources belong. `projects/{project_id}/locations/global/securityGateways/{security_gateway_id}` */
  parent: string;
  /** Optional. A filter specifying constraints of a list operation. All fields in the Application message are supported. For example, the following query will return the Application with displayName "test-application" For more information, please refer to https://google.aip.dev/160. */
  filter?: string;
}

export const ListProjectsLocationsSecurityGatewaysApplicationsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
    orderBy: Schema.optional(Schema.String).pipe(T.HttpQuery("orderBy")),
    parent: Schema.String.pipe(T.HttpPath("parent")),
    filter: Schema.optional(Schema.String).pipe(T.HttpQuery("filter")),
  }).pipe(
    T.Http({ method: "GET", path: "v1alpha/{+parent}/applications" }),
    svc,
  ) as unknown as Schema.Schema<ListProjectsLocationsSecurityGatewaysApplicationsRequest>;

export type ListProjectsLocationsSecurityGatewaysApplicationsResponse =
  GoogleCloudBeyondcorpSecuritygatewaysV1alphaListApplicationsResponse;
export const ListProjectsLocationsSecurityGatewaysApplicationsResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleCloudBeyondcorpSecuritygatewaysV1alphaListApplicationsResponse;

export type ListProjectsLocationsSecurityGatewaysApplicationsError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Lists Applications in a given project and location. */
export const listProjectsLocationsSecurityGatewaysApplications: API.PaginatedOperationMethod<
  ListProjectsLocationsSecurityGatewaysApplicationsRequest,
  ListProjectsLocationsSecurityGatewaysApplicationsResponse,
  ListProjectsLocationsSecurityGatewaysApplicationsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
  input: ListProjectsLocationsSecurityGatewaysApplicationsRequest,
  output: ListProjectsLocationsSecurityGatewaysApplicationsResponse,
  errors: [NotFound, Forbidden],
  pagination: {
    inputToken: "pageToken",
    outputToken: "nextPageToken",
  },
}));

export interface CreateProjectsLocationsSecurityGatewaysApplicationsRequest {
  /** Required. The resource name of the parent SecurityGateway using the form: `projects/{project_id}/locations/global/securityGateways/{security_gateway_id}` */
  parent: string;
  /** Optional. User-settable Application resource ID. * Must start with a letter. * Must contain between 4-63 characters from `/a-z-/`. * Must end with a number or letter. */
  applicationId?: string;
  /** Optional. An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes since the first request. */
  requestId?: string;
  /** Request body */
  body?: GoogleCloudBeyondcorpSecuritygatewaysV1alphaApplication;
}

export const CreateProjectsLocationsSecurityGatewaysApplicationsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    parent: Schema.String.pipe(T.HttpPath("parent")),
    applicationId: Schema.optional(Schema.String).pipe(
      T.HttpQuery("applicationId"),
    ),
    requestId: Schema.optional(Schema.String).pipe(T.HttpQuery("requestId")),
    body: Schema.optional(
      GoogleCloudBeyondcorpSecuritygatewaysV1alphaApplication,
    ).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v1alpha/{+parent}/applications",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<CreateProjectsLocationsSecurityGatewaysApplicationsRequest>;

export type CreateProjectsLocationsSecurityGatewaysApplicationsResponse =
  GoogleLongrunningOperation;
export const CreateProjectsLocationsSecurityGatewaysApplicationsResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleLongrunningOperation;

export type CreateProjectsLocationsSecurityGatewaysApplicationsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Creates a new Application in a given project and location. */
export const createProjectsLocationsSecurityGatewaysApplications: API.OperationMethod<
  CreateProjectsLocationsSecurityGatewaysApplicationsRequest,
  CreateProjectsLocationsSecurityGatewaysApplicationsResponse,
  CreateProjectsLocationsSecurityGatewaysApplicationsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: CreateProjectsLocationsSecurityGatewaysApplicationsRequest,
  output: CreateProjectsLocationsSecurityGatewaysApplicationsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface DeleteProjectsLocationsSecurityGatewaysApplicationsRequest {
  /** Required. Name of the resource. */
  name: string;
  /** Optional. An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes after the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000). */
  requestId?: string;
  /** Optional. If set, validates request by executing a dry-run which would not alter the resource in any way. */
  validateOnly?: boolean;
}

export const DeleteProjectsLocationsSecurityGatewaysApplicationsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    requestId: Schema.optional(Schema.String).pipe(T.HttpQuery("requestId")),
    validateOnly: Schema.optional(Schema.Boolean).pipe(
      T.HttpQuery("validateOnly"),
    ),
  }).pipe(
    T.Http({ method: "DELETE", path: "v1alpha/{+name}" }),
    svc,
  ) as unknown as Schema.Schema<DeleteProjectsLocationsSecurityGatewaysApplicationsRequest>;

export type DeleteProjectsLocationsSecurityGatewaysApplicationsResponse =
  GoogleLongrunningOperation;
export const DeleteProjectsLocationsSecurityGatewaysApplicationsResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleLongrunningOperation;

export type DeleteProjectsLocationsSecurityGatewaysApplicationsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Deletes a single application. */
export const deleteProjectsLocationsSecurityGatewaysApplications: API.OperationMethod<
  DeleteProjectsLocationsSecurityGatewaysApplicationsRequest,
  DeleteProjectsLocationsSecurityGatewaysApplicationsResponse,
  DeleteProjectsLocationsSecurityGatewaysApplicationsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: DeleteProjectsLocationsSecurityGatewaysApplicationsRequest,
  output: DeleteProjectsLocationsSecurityGatewaysApplicationsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface TestIamPermissionsProjectsLocationsSecurityGatewaysApplicationsRequest {
  /** REQUIRED: The resource for which the policy detail is being requested. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field. */
  resource: string;
  /** Request body */
  body?: GoogleIamV1TestIamPermissionsRequest;
}

export const TestIamPermissionsProjectsLocationsSecurityGatewaysApplicationsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    resource: Schema.String.pipe(T.HttpPath("resource")),
    body: Schema.optional(GoogleIamV1TestIamPermissionsRequest).pipe(
      T.HttpBody(),
    ),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v1alpha/{+resource}:testIamPermissions",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<TestIamPermissionsProjectsLocationsSecurityGatewaysApplicationsRequest>;

export type TestIamPermissionsProjectsLocationsSecurityGatewaysApplicationsResponse =
  GoogleIamV1TestIamPermissionsResponse;
export const TestIamPermissionsProjectsLocationsSecurityGatewaysApplicationsResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleIamV1TestIamPermissionsResponse;

export type TestIamPermissionsProjectsLocationsSecurityGatewaysApplicationsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Returns permissions that a caller has on the specified resource. If the resource does not exist, this will return an empty set of permissions, not a `NOT_FOUND` error. Note: This operation is designed to be used for building permission-aware UIs and command-line tools, not for authorization checking. This operation may "fail open" without warning. */
export const testIamPermissionsProjectsLocationsSecurityGatewaysApplications: API.OperationMethod<
  TestIamPermissionsProjectsLocationsSecurityGatewaysApplicationsRequest,
  TestIamPermissionsProjectsLocationsSecurityGatewaysApplicationsResponse,
  TestIamPermissionsProjectsLocationsSecurityGatewaysApplicationsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: TestIamPermissionsProjectsLocationsSecurityGatewaysApplicationsRequest,
  output:
    TestIamPermissionsProjectsLocationsSecurityGatewaysApplicationsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface CancelProjectsLocationsOperationsRequest {
  /** The name of the operation resource to be cancelled. */
  name: string;
  /** Request body */
  body?: GoogleLongrunningCancelOperationRequest;
}

export const CancelProjectsLocationsOperationsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    body: Schema.optional(GoogleLongrunningCancelOperationRequest).pipe(
      T.HttpBody(),
    ),
  }).pipe(
    T.Http({ method: "POST", path: "v1alpha/{+name}:cancel", hasBody: true }),
    svc,
  ) as unknown as Schema.Schema<CancelProjectsLocationsOperationsRequest>;

export type CancelProjectsLocationsOperationsResponse = Empty;
export const CancelProjectsLocationsOperationsResponse =
  /*@__PURE__*/ /*#__PURE__*/ Empty;

export type CancelProjectsLocationsOperationsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Clients can use Operations.GetOperation or other methods to check whether the cancellation succeeded or whether the operation completed despite cancellation. On successful cancellation, the operation is not deleted; instead, it becomes an operation with an Operation.error value with a google.rpc.Status.code of `1`, corresponding to `Code.CANCELLED`. */
export const cancelProjectsLocationsOperations: API.OperationMethod<
  CancelProjectsLocationsOperationsRequest,
  CancelProjectsLocationsOperationsResponse,
  CancelProjectsLocationsOperationsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: CancelProjectsLocationsOperationsRequest,
  output: CancelProjectsLocationsOperationsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface DeleteProjectsLocationsOperationsRequest {
  /** The name of the operation resource to be deleted. */
  name: string;
}

export const DeleteProjectsLocationsOperationsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "DELETE", path: "v1alpha/{+name}" }),
    svc,
  ) as unknown as Schema.Schema<DeleteProjectsLocationsOperationsRequest>;

export type DeleteProjectsLocationsOperationsResponse = Empty;
export const DeleteProjectsLocationsOperationsResponse =
  /*@__PURE__*/ /*#__PURE__*/ Empty;

export type DeleteProjectsLocationsOperationsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Deletes a long-running operation. This method indicates that the client is no longer interested in the operation result. It does not cancel the operation. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. */
export const deleteProjectsLocationsOperations: API.OperationMethod<
  DeleteProjectsLocationsOperationsRequest,
  DeleteProjectsLocationsOperationsResponse,
  DeleteProjectsLocationsOperationsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: DeleteProjectsLocationsOperationsRequest,
  output: DeleteProjectsLocationsOperationsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface GetProjectsLocationsOperationsRequest {
  /** The name of the operation resource. */
  name: string;
}

export const GetProjectsLocationsOperationsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "GET", path: "v1alpha/{+name}" }),
    svc,
  ) as unknown as Schema.Schema<GetProjectsLocationsOperationsRequest>;

export type GetProjectsLocationsOperationsResponse = GoogleLongrunningOperation;
export const GetProjectsLocationsOperationsResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleLongrunningOperation;

export type GetProjectsLocationsOperationsError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service. */
export const getProjectsLocationsOperations: API.OperationMethod<
  GetProjectsLocationsOperationsRequest,
  GetProjectsLocationsOperationsResponse,
  GetProjectsLocationsOperationsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetProjectsLocationsOperationsRequest,
  output: GetProjectsLocationsOperationsResponse,
  errors: [NotFound, Forbidden],
}));

export interface ListProjectsLocationsOperationsRequest {
  /** The name of the operation's parent resource. */
  name: string;
  /** The standard list filter. */
  filter?: string;
  /** When set to `true`, operations that are reachable are returned as normal, and those that are unreachable are returned in the ListOperationsResponse.unreachable field. This can only be `true` when reading across collections. For example, when `parent` is set to `"projects/example/locations/-"`. This field is not supported by default and will result in an `UNIMPLEMENTED` error if set unless explicitly documented otherwise in service or product specific documentation. */
  returnPartialSuccess?: boolean;
  /** The standard list page size. */
  pageSize?: number;
  /** The standard list page token. */
  pageToken?: string;
}

export const ListProjectsLocationsOperationsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    filter: Schema.optional(Schema.String).pipe(T.HttpQuery("filter")),
    returnPartialSuccess: Schema.optional(Schema.Boolean).pipe(
      T.HttpQuery("returnPartialSuccess"),
    ),
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
  }).pipe(
    T.Http({ method: "GET", path: "v1alpha/{+name}/operations" }),
    svc,
  ) as unknown as Schema.Schema<ListProjectsLocationsOperationsRequest>;

export type ListProjectsLocationsOperationsResponse =
  GoogleLongrunningListOperationsResponse;
export const ListProjectsLocationsOperationsResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleLongrunningListOperationsResponse;

export type ListProjectsLocationsOperationsError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`. */
export const listProjectsLocationsOperations: API.PaginatedOperationMethod<
  ListProjectsLocationsOperationsRequest,
  ListProjectsLocationsOperationsResponse,
  ListProjectsLocationsOperationsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
  input: ListProjectsLocationsOperationsRequest,
  output: ListProjectsLocationsOperationsResponse,
  errors: [NotFound, Forbidden],
  pagination: {
    inputToken: "pageToken",
    outputToken: "nextPageToken",
  },
}));

export interface SetIamPolicyProjectsLocationsAppConnectionsRequest {
  /** REQUIRED: The resource for which the policy is being specified. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field. */
  resource: string;
  /** Request body */
  body?: GoogleIamV1SetIamPolicyRequest;
}

export const SetIamPolicyProjectsLocationsAppConnectionsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    resource: Schema.String.pipe(T.HttpPath("resource")),
    body: Schema.optional(GoogleIamV1SetIamPolicyRequest).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v1alpha/{+resource}:setIamPolicy",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<SetIamPolicyProjectsLocationsAppConnectionsRequest>;

export type SetIamPolicyProjectsLocationsAppConnectionsResponse =
  GoogleIamV1Policy;
export const SetIamPolicyProjectsLocationsAppConnectionsResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleIamV1Policy;

export type SetIamPolicyProjectsLocationsAppConnectionsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Sets the access control policy on the specified resource. Replaces any existing policy. Can return `NOT_FOUND`, `INVALID_ARGUMENT`, and `PERMISSION_DENIED` errors. */
export const setIamPolicyProjectsLocationsAppConnections: API.OperationMethod<
  SetIamPolicyProjectsLocationsAppConnectionsRequest,
  SetIamPolicyProjectsLocationsAppConnectionsResponse,
  SetIamPolicyProjectsLocationsAppConnectionsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: SetIamPolicyProjectsLocationsAppConnectionsRequest,
  output: SetIamPolicyProjectsLocationsAppConnectionsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface CreateProjectsLocationsAppConnectionsRequest {
  /** Optional. User-settable AppConnection resource ID. * Must start with a letter. * Must contain between 4-63 characters from `/a-z-/`. * Must end with a number or a letter. */
  appConnectionId?: string;
  /** Optional. If set, validates request by executing a dry-run which would not alter the resource in any way. */
  validateOnly?: boolean;
  /** Required. The resource project name of the AppConnection location using the form: `projects/{project_id}/locations/{location_id}` */
  parent: string;
  /** Optional. An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes since the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if the original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000). */
  requestId?: string;
  /** Request body */
  body?: GoogleCloudBeyondcorpAppconnectionsV1alphaAppConnection;
}

export const CreateProjectsLocationsAppConnectionsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    appConnectionId: Schema.optional(Schema.String).pipe(
      T.HttpQuery("appConnectionId"),
    ),
    validateOnly: Schema.optional(Schema.Boolean).pipe(
      T.HttpQuery("validateOnly"),
    ),
    parent: Schema.String.pipe(T.HttpPath("parent")),
    requestId: Schema.optional(Schema.String).pipe(T.HttpQuery("requestId")),
    body: Schema.optional(
      GoogleCloudBeyondcorpAppconnectionsV1alphaAppConnection,
    ).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v1alpha/{+parent}/appConnections",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<CreateProjectsLocationsAppConnectionsRequest>;

export type CreateProjectsLocationsAppConnectionsResponse =
  GoogleLongrunningOperation;
export const CreateProjectsLocationsAppConnectionsResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleLongrunningOperation;

export type CreateProjectsLocationsAppConnectionsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Creates a new AppConnection in a given project and location. */
export const createProjectsLocationsAppConnections: API.OperationMethod<
  CreateProjectsLocationsAppConnectionsRequest,
  CreateProjectsLocationsAppConnectionsResponse,
  CreateProjectsLocationsAppConnectionsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: CreateProjectsLocationsAppConnectionsRequest,
  output: CreateProjectsLocationsAppConnectionsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface TestIamPermissionsProjectsLocationsAppConnectionsRequest {
  /** REQUIRED: The resource for which the policy detail is being requested. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field. */
  resource: string;
  /** Request body */
  body?: GoogleIamV1TestIamPermissionsRequest;
}

export const TestIamPermissionsProjectsLocationsAppConnectionsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    resource: Schema.String.pipe(T.HttpPath("resource")),
    body: Schema.optional(GoogleIamV1TestIamPermissionsRequest).pipe(
      T.HttpBody(),
    ),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v1alpha/{+resource}:testIamPermissions",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<TestIamPermissionsProjectsLocationsAppConnectionsRequest>;

export type TestIamPermissionsProjectsLocationsAppConnectionsResponse =
  GoogleIamV1TestIamPermissionsResponse;
export const TestIamPermissionsProjectsLocationsAppConnectionsResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleIamV1TestIamPermissionsResponse;

export type TestIamPermissionsProjectsLocationsAppConnectionsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Returns permissions that a caller has on the specified resource. If the resource does not exist, this will return an empty set of permissions, not a `NOT_FOUND` error. Note: This operation is designed to be used for building permission-aware UIs and command-line tools, not for authorization checking. This operation may "fail open" without warning. */
export const testIamPermissionsProjectsLocationsAppConnections: API.OperationMethod<
  TestIamPermissionsProjectsLocationsAppConnectionsRequest,
  TestIamPermissionsProjectsLocationsAppConnectionsResponse,
  TestIamPermissionsProjectsLocationsAppConnectionsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: TestIamPermissionsProjectsLocationsAppConnectionsRequest,
  output: TestIamPermissionsProjectsLocationsAppConnectionsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface GetProjectsLocationsAppConnectionsRequest {
  /** Required. BeyondCorp AppConnection name using the form: `projects/{project_id}/locations/{location_id}/appConnections/{app_connection_id}` */
  name: string;
}

export const GetProjectsLocationsAppConnectionsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "GET", path: "v1alpha/{+name}" }),
    svc,
  ) as unknown as Schema.Schema<GetProjectsLocationsAppConnectionsRequest>;

export type GetProjectsLocationsAppConnectionsResponse =
  GoogleCloudBeyondcorpAppconnectionsV1alphaAppConnection;
export const GetProjectsLocationsAppConnectionsResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleCloudBeyondcorpAppconnectionsV1alphaAppConnection;

export type GetProjectsLocationsAppConnectionsError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Gets details of a single AppConnection. */
export const getProjectsLocationsAppConnections: API.OperationMethod<
  GetProjectsLocationsAppConnectionsRequest,
  GetProjectsLocationsAppConnectionsResponse,
  GetProjectsLocationsAppConnectionsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetProjectsLocationsAppConnectionsRequest,
  output: GetProjectsLocationsAppConnectionsResponse,
  errors: [NotFound, Forbidden],
}));

export interface ResolveProjectsLocationsAppConnectionsRequest {
  /** Required. BeyondCorp Connector name of the connector associated with those AppConnections using the form: `projects/{project_id}/locations/{location_id}/appConnectors/{app_connector_id}` */
  appConnectorId?: string;
  /** Optional. The maximum number of items to return. If not specified, a default value of 50 will be used by the service. Regardless of the page_size value, the response may include a partial list and a caller should only rely on response's next_page_token to determine if there are more instances left to be queried. */
  pageSize?: number;
  /** Required. The resource name of the AppConnection location using the form: `projects/{project_id}/locations/{location_id}` */
  parent: string;
  /** Optional. The next_page_token value returned from a previous ResolveAppConnectionsResponse, if any. */
  pageToken?: string;
}

export const ResolveProjectsLocationsAppConnectionsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    appConnectorId: Schema.optional(Schema.String).pipe(
      T.HttpQuery("appConnectorId"),
    ),
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
    parent: Schema.String.pipe(T.HttpPath("parent")),
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
  }).pipe(
    T.Http({ method: "GET", path: "v1alpha/{+parent}/appConnections:resolve" }),
    svc,
  ) as unknown as Schema.Schema<ResolveProjectsLocationsAppConnectionsRequest>;

export type ResolveProjectsLocationsAppConnectionsResponse =
  GoogleCloudBeyondcorpAppconnectionsV1alphaResolveAppConnectionsResponse;
export const ResolveProjectsLocationsAppConnectionsResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleCloudBeyondcorpAppconnectionsV1alphaResolveAppConnectionsResponse;

export type ResolveProjectsLocationsAppConnectionsError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Resolves AppConnections details for a given AppConnector. An internal method called by a connector to find AppConnections to connect to. */
export const resolveProjectsLocationsAppConnections: API.PaginatedOperationMethod<
  ResolveProjectsLocationsAppConnectionsRequest,
  ResolveProjectsLocationsAppConnectionsResponse,
  ResolveProjectsLocationsAppConnectionsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
  input: ResolveProjectsLocationsAppConnectionsRequest,
  output: ResolveProjectsLocationsAppConnectionsResponse,
  errors: [NotFound, Forbidden],
  pagination: {
    inputToken: "pageToken",
    outputToken: "nextPageToken",
  },
}));

export interface PatchProjectsLocationsAppConnectionsRequest {
  /** Required. Unique resource name of the AppConnection. The name is ignored when creating a AppConnection. */
  name: string;
  /** Optional. If set, validates request by executing a dry-run which would not alter the resource in any way. */
  validateOnly?: boolean;
  /** Required. Mask of fields to update. At least one path must be supplied in this field. The elements of the repeated paths field may only include these fields from [BeyondCorp.AppConnection]: * `labels` * `display_name` * `application_endpoint` * `connectors` */
  updateMask?: string;
  /** Optional. An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes since the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if the original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000). */
  requestId?: string;
  /** Optional. If set as true, will create the resource if it is not found. */
  allowMissing?: boolean;
  /** Request body */
  body?: GoogleCloudBeyondcorpAppconnectionsV1alphaAppConnection;
}

export const PatchProjectsLocationsAppConnectionsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    validateOnly: Schema.optional(Schema.Boolean).pipe(
      T.HttpQuery("validateOnly"),
    ),
    updateMask: Schema.optional(Schema.String).pipe(T.HttpQuery("updateMask")),
    requestId: Schema.optional(Schema.String).pipe(T.HttpQuery("requestId")),
    allowMissing: Schema.optional(Schema.Boolean).pipe(
      T.HttpQuery("allowMissing"),
    ),
    body: Schema.optional(
      GoogleCloudBeyondcorpAppconnectionsV1alphaAppConnection,
    ).pipe(T.HttpBody()),
  }).pipe(
    T.Http({ method: "PATCH", path: "v1alpha/{+name}", hasBody: true }),
    svc,
  ) as unknown as Schema.Schema<PatchProjectsLocationsAppConnectionsRequest>;

export type PatchProjectsLocationsAppConnectionsResponse =
  GoogleLongrunningOperation;
export const PatchProjectsLocationsAppConnectionsResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleLongrunningOperation;

export type PatchProjectsLocationsAppConnectionsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Updates the parameters of a single AppConnection. */
export const patchProjectsLocationsAppConnections: API.OperationMethod<
  PatchProjectsLocationsAppConnectionsRequest,
  PatchProjectsLocationsAppConnectionsResponse,
  PatchProjectsLocationsAppConnectionsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: PatchProjectsLocationsAppConnectionsRequest,
  output: PatchProjectsLocationsAppConnectionsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface GetIamPolicyProjectsLocationsAppConnectionsRequest {
  /** REQUIRED: The resource for which the policy is being requested. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field. */
  resource: string;
  /** Optional. The maximum policy version that will be used to format the policy. Valid values are 0, 1, and 3. Requests specifying an invalid value will be rejected. Requests for policies with any conditional role bindings must specify version 3. Policies with no conditional role bindings may specify any valid value or leave the field unset. The policy in the response might use the policy version that you specified, or it might use a lower policy version. For example, if you specify version 3, but the policy has no conditional role bindings, the response uses version 1. To learn which resources support conditions in their IAM policies, see the [IAM documentation](https://cloud.google.com/iam/help/conditions/resource-policies). */
  "options.requestedPolicyVersion"?: number;
}

export const GetIamPolicyProjectsLocationsAppConnectionsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    resource: Schema.String.pipe(T.HttpPath("resource")),
    "options.requestedPolicyVersion": Schema.optional(Schema.Number).pipe(
      T.HttpQuery("options.requestedPolicyVersion"),
    ),
  }).pipe(
    T.Http({ method: "GET", path: "v1alpha/{+resource}:getIamPolicy" }),
    svc,
  ) as unknown as Schema.Schema<GetIamPolicyProjectsLocationsAppConnectionsRequest>;

export type GetIamPolicyProjectsLocationsAppConnectionsResponse =
  GoogleIamV1Policy;
export const GetIamPolicyProjectsLocationsAppConnectionsResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleIamV1Policy;

export type GetIamPolicyProjectsLocationsAppConnectionsError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Gets the access control policy for a resource. Returns an empty policy if the resource exists and does not have a policy set. */
export const getIamPolicyProjectsLocationsAppConnections: API.OperationMethod<
  GetIamPolicyProjectsLocationsAppConnectionsRequest,
  GetIamPolicyProjectsLocationsAppConnectionsResponse,
  GetIamPolicyProjectsLocationsAppConnectionsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetIamPolicyProjectsLocationsAppConnectionsRequest,
  output: GetIamPolicyProjectsLocationsAppConnectionsResponse,
  errors: [NotFound, Forbidden],
}));

export interface ListProjectsLocationsAppConnectionsRequest {
  /** Optional. Specifies the ordering of results. See [Sorting order](https://cloud.google.com/apis/design/design_patterns#sorting_order) for more information. */
  orderBy?: string;
  /** Required. The resource name of the AppConnection location using the form: `projects/{project_id}/locations/{location_id}` */
  parent: string;
  /** Optional. A filter specifying constraints of a list operation. */
  filter?: string;
  /** Optional. The next_page_token value returned from a previous ListAppConnectionsRequest, if any. */
  pageToken?: string;
  /** Optional. The maximum number of items to return. If not specified, a default value of 50 will be used by the service. Regardless of the page_size value, the response may include a partial list and a caller should only rely on response's next_page_token to determine if there are more instances left to be queried. */
  pageSize?: number;
}

export const ListProjectsLocationsAppConnectionsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    orderBy: Schema.optional(Schema.String).pipe(T.HttpQuery("orderBy")),
    parent: Schema.String.pipe(T.HttpPath("parent")),
    filter: Schema.optional(Schema.String).pipe(T.HttpQuery("filter")),
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
  }).pipe(
    T.Http({ method: "GET", path: "v1alpha/{+parent}/appConnections" }),
    svc,
  ) as unknown as Schema.Schema<ListProjectsLocationsAppConnectionsRequest>;

export type ListProjectsLocationsAppConnectionsResponse =
  GoogleCloudBeyondcorpAppconnectionsV1alphaListAppConnectionsResponse;
export const ListProjectsLocationsAppConnectionsResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleCloudBeyondcorpAppconnectionsV1alphaListAppConnectionsResponse;

export type ListProjectsLocationsAppConnectionsError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Lists AppConnections in a given project and location. */
export const listProjectsLocationsAppConnections: API.PaginatedOperationMethod<
  ListProjectsLocationsAppConnectionsRequest,
  ListProjectsLocationsAppConnectionsResponse,
  ListProjectsLocationsAppConnectionsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
  input: ListProjectsLocationsAppConnectionsRequest,
  output: ListProjectsLocationsAppConnectionsResponse,
  errors: [NotFound, Forbidden],
  pagination: {
    inputToken: "pageToken",
    outputToken: "nextPageToken",
  },
}));

export interface DeleteProjectsLocationsAppConnectionsRequest {
  /** Optional. If set, validates request by executing a dry-run which would not alter the resource in any way. */
  validateOnly?: boolean;
  /** Required. BeyondCorp Connector name using the form: `projects/{project_id}/locations/{location_id}/appConnections/{app_connection_id}` */
  name: string;
  /** Optional. An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes after the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if the original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000). */
  requestId?: string;
}

export const DeleteProjectsLocationsAppConnectionsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    validateOnly: Schema.optional(Schema.Boolean).pipe(
      T.HttpQuery("validateOnly"),
    ),
    name: Schema.String.pipe(T.HttpPath("name")),
    requestId: Schema.optional(Schema.String).pipe(T.HttpQuery("requestId")),
  }).pipe(
    T.Http({ method: "DELETE", path: "v1alpha/{+name}" }),
    svc,
  ) as unknown as Schema.Schema<DeleteProjectsLocationsAppConnectionsRequest>;

export type DeleteProjectsLocationsAppConnectionsResponse =
  GoogleLongrunningOperation;
export const DeleteProjectsLocationsAppConnectionsResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleLongrunningOperation;

export type DeleteProjectsLocationsAppConnectionsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Deletes a single AppConnection. */
export const deleteProjectsLocationsAppConnections: API.OperationMethod<
  DeleteProjectsLocationsAppConnectionsRequest,
  DeleteProjectsLocationsAppConnectionsResponse,
  DeleteProjectsLocationsAppConnectionsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: DeleteProjectsLocationsAppConnectionsRequest,
  output: DeleteProjectsLocationsAppConnectionsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface SetIamPolicyProjectsLocationsApplicationsRequest {
  /** REQUIRED: The resource for which the policy is being specified. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field. */
  resource: string;
  /** Request body */
  body?: GoogleIamV1SetIamPolicyRequest;
}

export const SetIamPolicyProjectsLocationsApplicationsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    resource: Schema.String.pipe(T.HttpPath("resource")),
    body: Schema.optional(GoogleIamV1SetIamPolicyRequest).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v1alpha/{+resource}:setIamPolicy",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<SetIamPolicyProjectsLocationsApplicationsRequest>;

export type SetIamPolicyProjectsLocationsApplicationsResponse =
  GoogleIamV1Policy;
export const SetIamPolicyProjectsLocationsApplicationsResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleIamV1Policy;

export type SetIamPolicyProjectsLocationsApplicationsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Sets the access control policy on the specified resource. Replaces any existing policy. Can return `NOT_FOUND`, `INVALID_ARGUMENT`, and `PERMISSION_DENIED` errors. */
export const setIamPolicyProjectsLocationsApplications: API.OperationMethod<
  SetIamPolicyProjectsLocationsApplicationsRequest,
  SetIamPolicyProjectsLocationsApplicationsResponse,
  SetIamPolicyProjectsLocationsApplicationsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: SetIamPolicyProjectsLocationsApplicationsRequest,
  output: SetIamPolicyProjectsLocationsApplicationsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface GetIamPolicyProjectsLocationsApplicationsRequest {
  /** Optional. The maximum policy version that will be used to format the policy. Valid values are 0, 1, and 3. Requests specifying an invalid value will be rejected. Requests for policies with any conditional role bindings must specify version 3. Policies with no conditional role bindings may specify any valid value or leave the field unset. The policy in the response might use the policy version that you specified, or it might use a lower policy version. For example, if you specify version 3, but the policy has no conditional role bindings, the response uses version 1. To learn which resources support conditions in their IAM policies, see the [IAM documentation](https://cloud.google.com/iam/help/conditions/resource-policies). */
  "options.requestedPolicyVersion"?: number;
  /** REQUIRED: The resource for which the policy is being requested. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field. */
  resource: string;
}

export const GetIamPolicyProjectsLocationsApplicationsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    "options.requestedPolicyVersion": Schema.optional(Schema.Number).pipe(
      T.HttpQuery("options.requestedPolicyVersion"),
    ),
    resource: Schema.String.pipe(T.HttpPath("resource")),
  }).pipe(
    T.Http({ method: "GET", path: "v1alpha/{+resource}:getIamPolicy" }),
    svc,
  ) as unknown as Schema.Schema<GetIamPolicyProjectsLocationsApplicationsRequest>;

export type GetIamPolicyProjectsLocationsApplicationsResponse =
  GoogleIamV1Policy;
export const GetIamPolicyProjectsLocationsApplicationsResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleIamV1Policy;

export type GetIamPolicyProjectsLocationsApplicationsError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Gets the access control policy for a resource. Returns an empty policy if the resource exists and does not have a policy set. */
export const getIamPolicyProjectsLocationsApplications: API.OperationMethod<
  GetIamPolicyProjectsLocationsApplicationsRequest,
  GetIamPolicyProjectsLocationsApplicationsResponse,
  GetIamPolicyProjectsLocationsApplicationsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetIamPolicyProjectsLocationsApplicationsRequest,
  output: GetIamPolicyProjectsLocationsApplicationsResponse,
  errors: [NotFound, Forbidden],
}));

export interface TestIamPermissionsProjectsLocationsApplicationsRequest {
  /** REQUIRED: The resource for which the policy detail is being requested. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field. */
  resource: string;
  /** Request body */
  body?: GoogleIamV1TestIamPermissionsRequest;
}

export const TestIamPermissionsProjectsLocationsApplicationsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    resource: Schema.String.pipe(T.HttpPath("resource")),
    body: Schema.optional(GoogleIamV1TestIamPermissionsRequest).pipe(
      T.HttpBody(),
    ),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v1alpha/{+resource}:testIamPermissions",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<TestIamPermissionsProjectsLocationsApplicationsRequest>;

export type TestIamPermissionsProjectsLocationsApplicationsResponse =
  GoogleIamV1TestIamPermissionsResponse;
export const TestIamPermissionsProjectsLocationsApplicationsResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleIamV1TestIamPermissionsResponse;

export type TestIamPermissionsProjectsLocationsApplicationsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Returns permissions that a caller has on the specified resource. If the resource does not exist, this will return an empty set of permissions, not a `NOT_FOUND` error. Note: This operation is designed to be used for building permission-aware UIs and command-line tools, not for authorization checking. This operation may "fail open" without warning. */
export const testIamPermissionsProjectsLocationsApplications: API.OperationMethod<
  TestIamPermissionsProjectsLocationsApplicationsRequest,
  TestIamPermissionsProjectsLocationsApplicationsResponse,
  TestIamPermissionsProjectsLocationsApplicationsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: TestIamPermissionsProjectsLocationsApplicationsRequest,
  output: TestIamPermissionsProjectsLocationsApplicationsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface ListOrganizationsLocationsInsightsRequest {
  /** Optional. Starting time for the duration for which insights are to be pulled. The default is 7 days before the current time. */
  startTime?: string;
  /** Optional. Ending time for the duration for which insights are to be pulled. The default is the current time. */
  endTime?: string;
  /** Required. The resource name of InsightMetadata using the form: `organizations/{organization_id}/locations/{location}` `projects/{project_id}/locations/{location_id}` */
  parent: string;
  /** Required. List only metadata or full data. */
  view?: "INSIGHT_VIEW_UNSPECIFIED" | "BASIC" | "FULL" | (string & {});
  /** Optional. Aggregation type. The default is 'DAILY'. */
  aggregation?:
    | "AGGREGATION_UNSPECIFIED"
    | "HOURLY"
    | "DAILY"
    | "WEEKLY"
    | "MONTHLY"
    | "CUSTOM_DATE_RANGE"
    | (string & {});
  /** Optional. A token identifying a page of results the server should return. */
  pageToken?: string;
  /** Optional. Requested page size. Server may return fewer items than requested. If unspecified, server will pick an appropriate default. NOTE: Default page size is 50. */
  pageSize?: number;
  /** Optional. Hint for how to order the results. This is currently ignored. */
  orderBy?: string;
  /** Optional. Filter expression to restrict the insights returned. Supported filter fields: * `type` * `category` * `subCategory` Examples: * "category = application AND type = count" * "category = application AND subCategory = iap" * "type = status" Allowed values: * type: [count, latency, status, list] * category: [application, device, request, security] * subCategory: [iap, caa, webprotect] NOTE: Only equality based comparison is allowed. Only `AND` conjunction is allowed. NOTE: The 'AND' in the filter field needs to be in capital letters only. NOTE: Just filtering on `subCategory` is not allowed. It should be passed in with the parent `category` too. (These expressions are based on the filter language described at https://google.aip.dev/160). */
  filter?: string;
}

export const ListOrganizationsLocationsInsightsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    startTime: Schema.optional(Schema.String).pipe(T.HttpQuery("startTime")),
    endTime: Schema.optional(Schema.String).pipe(T.HttpQuery("endTime")),
    parent: Schema.String.pipe(T.HttpPath("parent")),
    view: Schema.optional(Schema.String).pipe(T.HttpQuery("view")),
    aggregation: Schema.optional(Schema.String).pipe(
      T.HttpQuery("aggregation"),
    ),
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
    orderBy: Schema.optional(Schema.String).pipe(T.HttpQuery("orderBy")),
    filter: Schema.optional(Schema.String).pipe(T.HttpQuery("filter")),
  }).pipe(
    T.Http({ method: "GET", path: "v1alpha/{+parent}/insights" }),
    svc,
  ) as unknown as Schema.Schema<ListOrganizationsLocationsInsightsRequest>;

export type ListOrganizationsLocationsInsightsResponse =
  GoogleCloudBeyondcorpSaasplatformInsightsV1alphaListInsightsResponse;
export const ListOrganizationsLocationsInsightsResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleCloudBeyondcorpSaasplatformInsightsV1alphaListInsightsResponse;

export type ListOrganizationsLocationsInsightsError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Lists for all the available insights that could be fetched from the system. Allows to filter using category. Setting the `view` to `BASIC` will let you iterate over the list of insight metadatas. */
export const listOrganizationsLocationsInsights: API.PaginatedOperationMethod<
  ListOrganizationsLocationsInsightsRequest,
  ListOrganizationsLocationsInsightsResponse,
  ListOrganizationsLocationsInsightsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
  input: ListOrganizationsLocationsInsightsRequest,
  output: ListOrganizationsLocationsInsightsResponse,
  errors: [NotFound, Forbidden],
  pagination: {
    inputToken: "pageToken",
    outputToken: "nextPageToken",
  },
}));

export interface GetOrganizationsLocationsInsightsRequest {
  /** Required. The resource name of the insight using the form: `organizations/{organization_id}/locations/{location_id}/insights/{insight_id}` `projects/{project_id}/locations/{location_id}/insights/{insight_id}` */
  name: string;
  /** Required. Metadata only or full data view. */
  view?: "INSIGHT_VIEW_UNSPECIFIED" | "BASIC" | "FULL" | (string & {});
}

export const GetOrganizationsLocationsInsightsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    view: Schema.optional(Schema.String).pipe(T.HttpQuery("view")),
  }).pipe(
    T.Http({ method: "GET", path: "v1alpha/{+name}" }),
    svc,
  ) as unknown as Schema.Schema<GetOrganizationsLocationsInsightsRequest>;

export type GetOrganizationsLocationsInsightsResponse =
  GoogleCloudBeyondcorpSaasplatformInsightsV1alphaInsight;
export const GetOrganizationsLocationsInsightsResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleCloudBeyondcorpSaasplatformInsightsV1alphaInsight;

export type GetOrganizationsLocationsInsightsError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Gets the value for a selected particular insight with default configuration. The default aggregation level is 'DAILY' and no grouping will be applied or default grouping if applicable. The data will be returned for recent 7 days starting the day before. The insight data size will be limited to 50 rows. Use the organization level path for fetching at org level and project level path for fetching the insight value specific to a particular project. Setting the `view` to `BASIC` will only return the metadata for the insight. */
export const getOrganizationsLocationsInsights: API.OperationMethod<
  GetOrganizationsLocationsInsightsRequest,
  GetOrganizationsLocationsInsightsResponse,
  GetOrganizationsLocationsInsightsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetOrganizationsLocationsInsightsRequest,
  output: GetOrganizationsLocationsInsightsResponse,
  errors: [NotFound, Forbidden],
}));

export interface ConfiguredInsightOrganizationsLocationsInsightsRequest {
  /** Optional. Other filterable/configurable parameters as applicable to the selected insight. Available fields could be fetched by calling insight list and get APIs in `BASIC` view. `=` is the only comparison operator supported. `AND` is the only logical operator supported. Usage: field_filter="fieldName1=fieldVal1 AND fieldName2=fieldVal2". NOTE: Only `AND` conditions are allowed. NOTE: Use the `filter_alias` from `Insight.Metadata.Field` message for the filtering the corresponding fields in this filter field. (These expressions are based on the filter language described at https://google.aip.dev/160). */
  fieldFilter?: string;
  /** Optional. Group id of the available groupings for the insight. Available groupings could be fetched by calling insight list and get APIs in `BASIC` view. */
  group?: string;
  /** Required. Aggregation type. Available aggregation could be fetched by calling insight list and get APIs in `BASIC` view. */
  aggregation?:
    | "AGGREGATION_UNSPECIFIED"
    | "HOURLY"
    | "DAILY"
    | "WEEKLY"
    | "MONTHLY"
    | "CUSTOM_DATE_RANGE"
    | (string & {});
  /** Optional. Filterable parameters to be added to the grouping clause. Available fields could be fetched by calling insight list and get APIs in `BASIC` view. `=` is the only comparison operator supported. `AND` is the only logical operator supported. Usage: field_filter="fieldName1=fieldVal1 AND fieldName2=fieldVal2". NOTE: Only `AND` conditions are allowed. NOTE: Use the `filter_alias` from `Insight.Metadata.Field` message for the filtering the corresponding fields in this filter field. (These expressions are based on the filter language described at https://google.aip.dev/160). */
  "customGrouping.fieldFilter"?: string;
  /** Optional. Used to fetch the page represented by the token. Fetches the first page when not set. */
  pageToken?: string;
  /** Required. Fields to be used for grouping. NOTE: Use the `filter_alias` from `Insight.Metadata.Field` message for declaring the fields to be grouped-by here. */
  "customGrouping.groupFields"?: string[];
  /** Optional. Requested page size. Server may return fewer items than requested. If unspecified, server will pick an appropriate default. */
  pageSize?: number;
  /** Required. Ending time for the duration for which insight is to be pulled. */
  endTime?: string;
  /** Required. The resource name of the insight using the form: `organizations/{organization_id}/locations/{location_id}/insights/{insight_id}` `projects/{project_id}/locations/{location_id}/insights/{insight_id}`. */
  insight: string;
  /** Required. Starting time for the duration for which insight is to be pulled. */
  startTime?: string;
}

export const ConfiguredInsightOrganizationsLocationsInsightsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    fieldFilter: Schema.optional(Schema.String).pipe(
      T.HttpQuery("fieldFilter"),
    ),
    group: Schema.optional(Schema.String).pipe(T.HttpQuery("group")),
    aggregation: Schema.optional(Schema.String).pipe(
      T.HttpQuery("aggregation"),
    ),
    "customGrouping.fieldFilter": Schema.optional(Schema.String).pipe(
      T.HttpQuery("customGrouping.fieldFilter"),
    ),
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
    "customGrouping.groupFields": Schema.optional(
      Schema.Array(Schema.String),
    ).pipe(T.HttpQuery("customGrouping.groupFields")),
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
    endTime: Schema.optional(Schema.String).pipe(T.HttpQuery("endTime")),
    insight: Schema.String.pipe(T.HttpPath("insight")),
    startTime: Schema.optional(Schema.String).pipe(T.HttpQuery("startTime")),
  }).pipe(
    T.Http({ method: "GET", path: "v1alpha/{+insight}:configuredInsight" }),
    svc,
  ) as unknown as Schema.Schema<ConfiguredInsightOrganizationsLocationsInsightsRequest>;

export type ConfiguredInsightOrganizationsLocationsInsightsResponse =
  GoogleCloudBeyondcorpSaasplatformInsightsV1alphaConfiguredInsightResponse;
export const ConfiguredInsightOrganizationsLocationsInsightsResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleCloudBeyondcorpSaasplatformInsightsV1alphaConfiguredInsightResponse;

export type ConfiguredInsightOrganizationsLocationsInsightsError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Gets the value for a selected particular insight based on the provided filters. Use the organization level path for fetching at org level and project level path for fetching the insight value specific to a particular project. */
export const configuredInsightOrganizationsLocationsInsights: API.PaginatedOperationMethod<
  ConfiguredInsightOrganizationsLocationsInsightsRequest,
  ConfiguredInsightOrganizationsLocationsInsightsResponse,
  ConfiguredInsightOrganizationsLocationsInsightsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
  input: ConfiguredInsightOrganizationsLocationsInsightsRequest,
  output: ConfiguredInsightOrganizationsLocationsInsightsResponse,
  errors: [NotFound, Forbidden],
  pagination: {
    inputToken: "pageToken",
    outputToken: "nextPageToken",
  },
}));

export interface GetOrganizationsLocationsSubscriptionsRequest {
  /** Required. The resource name of Subscription using the form: `organizations/{organization_id}/locations/{location}/subscriptions/{subscription_id}` */
  name: string;
}

export const GetOrganizationsLocationsSubscriptionsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "GET", path: "v1alpha/{+name}" }),
    svc,
  ) as unknown as Schema.Schema<GetOrganizationsLocationsSubscriptionsRequest>;

export type GetOrganizationsLocationsSubscriptionsResponse =
  GoogleCloudBeyondcorpSaasplatformSubscriptionsV1alphaSubscription;
export const GetOrganizationsLocationsSubscriptionsResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleCloudBeyondcorpSaasplatformSubscriptionsV1alphaSubscription;

export type GetOrganizationsLocationsSubscriptionsError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Gets details of a single Subscription. */
export const getOrganizationsLocationsSubscriptions: API.OperationMethod<
  GetOrganizationsLocationsSubscriptionsRequest,
  GetOrganizationsLocationsSubscriptionsResponse,
  GetOrganizationsLocationsSubscriptionsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetOrganizationsLocationsSubscriptionsRequest,
  output: GetOrganizationsLocationsSubscriptionsResponse,
  errors: [NotFound, Forbidden],
}));

export interface CancelOrganizationsLocationsSubscriptionsRequest {
  /** Required. Name of the resource. */
  name: string;
  /** Optional. An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes after the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000). */
  requestId?: string;
}

export const CancelOrganizationsLocationsSubscriptionsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    requestId: Schema.optional(Schema.String).pipe(T.HttpQuery("requestId")),
  }).pipe(
    T.Http({ method: "GET", path: "v1alpha/{+name}:cancel" }),
    svc,
  ) as unknown as Schema.Schema<CancelOrganizationsLocationsSubscriptionsRequest>;

export type CancelOrganizationsLocationsSubscriptionsResponse =
  GoogleCloudBeyondcorpSaasplatformSubscriptionsV1alphaCancelSubscriptionResponse;
export const CancelOrganizationsLocationsSubscriptionsResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleCloudBeyondcorpSaasplatformSubscriptionsV1alphaCancelSubscriptionResponse;

export type CancelOrganizationsLocationsSubscriptionsError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Cancels an existing BeyondCorp Enterprise Subscription in a given organization. Location will always be global as BeyondCorp subscriptions are per organization. Returns the timestamp for when the cancellation will become effective */
export const cancelOrganizationsLocationsSubscriptions: API.OperationMethod<
  CancelOrganizationsLocationsSubscriptionsRequest,
  CancelOrganizationsLocationsSubscriptionsResponse,
  CancelOrganizationsLocationsSubscriptionsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: CancelOrganizationsLocationsSubscriptionsRequest,
  output: CancelOrganizationsLocationsSubscriptionsResponse,
  errors: [NotFound, Forbidden],
}));

export interface ListOrganizationsLocationsSubscriptionsRequest {
  /** Required. The resource name of Subscription using the form: `organizations/{organization_id}/locations/{location}` */
  parent: string;
  /** Optional. The next_page_token value returned from a previous ListSubscriptionsRequest, if any. */
  pageToken?: string;
  /** Optional. The maximum number of items to return. If not specified, a default value of 50 will be used by the service. Regardless of the page_size value, the response may include a partial list and a caller should only rely on response's next_page_token to determine if there are more instances left to be queried. */
  pageSize?: number;
}

export const ListOrganizationsLocationsSubscriptionsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    parent: Schema.String.pipe(T.HttpPath("parent")),
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
  }).pipe(
    T.Http({ method: "GET", path: "v1alpha/{+parent}/subscriptions" }),
    svc,
  ) as unknown as Schema.Schema<ListOrganizationsLocationsSubscriptionsRequest>;

export type ListOrganizationsLocationsSubscriptionsResponse =
  GoogleCloudBeyondcorpSaasplatformSubscriptionsV1alphaListSubscriptionsResponse;
export const ListOrganizationsLocationsSubscriptionsResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleCloudBeyondcorpSaasplatformSubscriptionsV1alphaListSubscriptionsResponse;

export type ListOrganizationsLocationsSubscriptionsError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Lists Subscriptions in a given organization and location. */
export const listOrganizationsLocationsSubscriptions: API.PaginatedOperationMethod<
  ListOrganizationsLocationsSubscriptionsRequest,
  ListOrganizationsLocationsSubscriptionsResponse,
  ListOrganizationsLocationsSubscriptionsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
  input: ListOrganizationsLocationsSubscriptionsRequest,
  output: ListOrganizationsLocationsSubscriptionsResponse,
  errors: [NotFound, Forbidden],
  pagination: {
    inputToken: "pageToken",
    outputToken: "nextPageToken",
  },
}));

export interface PatchOrganizationsLocationsSubscriptionsRequest {
  /** Identifier. Unique resource name of the Subscription. The name is ignored when creating a subscription. */
  name: string;
  /** Required. Field mask is used to specify the fields to be overwritten in the Subscription resource by the update. The fields specified in the update_mask are relative to the resource, not the full request. A field will be overwritten if it is in the mask. Mutable fields: seat_count. */
  updateMask?: string;
  /** Optional. An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes since the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000). */
  requestId?: string;
  /** Request body */
  body?: GoogleCloudBeyondcorpSaasplatformSubscriptionsV1alphaSubscription;
}

export const PatchOrganizationsLocationsSubscriptionsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    updateMask: Schema.optional(Schema.String).pipe(T.HttpQuery("updateMask")),
    requestId: Schema.optional(Schema.String).pipe(T.HttpQuery("requestId")),
    body: Schema.optional(
      GoogleCloudBeyondcorpSaasplatformSubscriptionsV1alphaSubscription,
    ).pipe(T.HttpBody()),
  }).pipe(
    T.Http({ method: "PATCH", path: "v1alpha/{+name}", hasBody: true }),
    svc,
  ) as unknown as Schema.Schema<PatchOrganizationsLocationsSubscriptionsRequest>;

export type PatchOrganizationsLocationsSubscriptionsResponse =
  GoogleCloudBeyondcorpSaasplatformSubscriptionsV1alphaSubscription;
export const PatchOrganizationsLocationsSubscriptionsResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleCloudBeyondcorpSaasplatformSubscriptionsV1alphaSubscription;

export type PatchOrganizationsLocationsSubscriptionsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Updates an existing BeyondCorp Enterprise Subscription in a given organization. Location will always be global as BeyondCorp subscriptions are per organization. */
export const patchOrganizationsLocationsSubscriptions: API.OperationMethod<
  PatchOrganizationsLocationsSubscriptionsRequest,
  PatchOrganizationsLocationsSubscriptionsResponse,
  PatchOrganizationsLocationsSubscriptionsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: PatchOrganizationsLocationsSubscriptionsRequest,
  output: PatchOrganizationsLocationsSubscriptionsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface CreateOrganizationsLocationsSubscriptionsRequest {
  /** Required. The resource name of the subscription location using the form: `organizations/{organization_id}/locations/{location}` */
  parent: string;
  /** Request body */
  body?: GoogleCloudBeyondcorpSaasplatformSubscriptionsV1alphaSubscription;
}

export const CreateOrganizationsLocationsSubscriptionsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    parent: Schema.String.pipe(T.HttpPath("parent")),
    body: Schema.optional(
      GoogleCloudBeyondcorpSaasplatformSubscriptionsV1alphaSubscription,
    ).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v1alpha/{+parent}/subscriptions",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<CreateOrganizationsLocationsSubscriptionsRequest>;

export type CreateOrganizationsLocationsSubscriptionsResponse =
  GoogleCloudBeyondcorpSaasplatformSubscriptionsV1alphaSubscription;
export const CreateOrganizationsLocationsSubscriptionsResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleCloudBeyondcorpSaasplatformSubscriptionsV1alphaSubscription;

export type CreateOrganizationsLocationsSubscriptionsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Creates a new BeyondCorp Enterprise Subscription in a given organization. Location will always be global as BeyondCorp subscriptions are per organization. */
export const createOrganizationsLocationsSubscriptions: API.OperationMethod<
  CreateOrganizationsLocationsSubscriptionsRequest,
  CreateOrganizationsLocationsSubscriptionsResponse,
  CreateOrganizationsLocationsSubscriptionsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: CreateOrganizationsLocationsSubscriptionsRequest,
  output: CreateOrganizationsLocationsSubscriptionsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface RestartOrganizationsLocationsSubscriptionsRequest {
  /** Required. Name of the resource. */
  name: string;
  /** Optional. An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes after the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000). */
  requestId?: string;
}

export const RestartOrganizationsLocationsSubscriptionsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    requestId: Schema.optional(Schema.String).pipe(T.HttpQuery("requestId")),
  }).pipe(
    T.Http({ method: "GET", path: "v1alpha/{+name}:restart" }),
    svc,
  ) as unknown as Schema.Schema<RestartOrganizationsLocationsSubscriptionsRequest>;

export type RestartOrganizationsLocationsSubscriptionsResponse =
  GoogleCloudBeyondcorpSaasplatformSubscriptionsV1alphaRestartSubscriptionResponse;
export const RestartOrganizationsLocationsSubscriptionsResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleCloudBeyondcorpSaasplatformSubscriptionsV1alphaRestartSubscriptionResponse;

export type RestartOrganizationsLocationsSubscriptionsError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Restarts an existing BeyondCorp Enterprise Subscription in a given organization, that is scheduled for cancellation. Location will always be global as BeyondCorp subscriptions are per organization. Returns the timestamp for when the cancellation will become effective */
export const restartOrganizationsLocationsSubscriptions: API.OperationMethod<
  RestartOrganizationsLocationsSubscriptionsRequest,
  RestartOrganizationsLocationsSubscriptionsResponse,
  RestartOrganizationsLocationsSubscriptionsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: RestartOrganizationsLocationsSubscriptionsRequest,
  output: RestartOrganizationsLocationsSubscriptionsResponse,
  errors: [NotFound, Forbidden],
}));

export interface CancelOrganizationsLocationsOperationsRequest {
  /** The name of the operation resource to be cancelled. */
  name: string;
  /** Request body */
  body?: GoogleLongrunningCancelOperationRequest;
}

export const CancelOrganizationsLocationsOperationsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    body: Schema.optional(GoogleLongrunningCancelOperationRequest).pipe(
      T.HttpBody(),
    ),
  }).pipe(
    T.Http({ method: "POST", path: "v1alpha/{+name}:cancel", hasBody: true }),
    svc,
  ) as unknown as Schema.Schema<CancelOrganizationsLocationsOperationsRequest>;

export type CancelOrganizationsLocationsOperationsResponse = Empty;
export const CancelOrganizationsLocationsOperationsResponse =
  /*@__PURE__*/ /*#__PURE__*/ Empty;

export type CancelOrganizationsLocationsOperationsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Clients can use Operations.GetOperation or other methods to check whether the cancellation succeeded or whether the operation completed despite cancellation. On successful cancellation, the operation is not deleted; instead, it becomes an operation with an Operation.error value with a google.rpc.Status.code of `1`, corresponding to `Code.CANCELLED`. */
export const cancelOrganizationsLocationsOperations: API.OperationMethod<
  CancelOrganizationsLocationsOperationsRequest,
  CancelOrganizationsLocationsOperationsResponse,
  CancelOrganizationsLocationsOperationsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: CancelOrganizationsLocationsOperationsRequest,
  output: CancelOrganizationsLocationsOperationsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface DeleteOrganizationsLocationsOperationsRequest {
  /** The name of the operation resource to be deleted. */
  name: string;
}

export const DeleteOrganizationsLocationsOperationsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "DELETE", path: "v1alpha/{+name}" }),
    svc,
  ) as unknown as Schema.Schema<DeleteOrganizationsLocationsOperationsRequest>;

export type DeleteOrganizationsLocationsOperationsResponse = Empty;
export const DeleteOrganizationsLocationsOperationsResponse =
  /*@__PURE__*/ /*#__PURE__*/ Empty;

export type DeleteOrganizationsLocationsOperationsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Deletes a long-running operation. This method indicates that the client is no longer interested in the operation result. It does not cancel the operation. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. */
export const deleteOrganizationsLocationsOperations: API.OperationMethod<
  DeleteOrganizationsLocationsOperationsRequest,
  DeleteOrganizationsLocationsOperationsResponse,
  DeleteOrganizationsLocationsOperationsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: DeleteOrganizationsLocationsOperationsRequest,
  output: DeleteOrganizationsLocationsOperationsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface GetOrganizationsLocationsOperationsRequest {
  /** The name of the operation resource. */
  name: string;
}

export const GetOrganizationsLocationsOperationsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "GET", path: "v1alpha/{+name}" }),
    svc,
  ) as unknown as Schema.Schema<GetOrganizationsLocationsOperationsRequest>;

export type GetOrganizationsLocationsOperationsResponse =
  GoogleLongrunningOperation;
export const GetOrganizationsLocationsOperationsResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleLongrunningOperation;

export type GetOrganizationsLocationsOperationsError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service. */
export const getOrganizationsLocationsOperations: API.OperationMethod<
  GetOrganizationsLocationsOperationsRequest,
  GetOrganizationsLocationsOperationsResponse,
  GetOrganizationsLocationsOperationsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetOrganizationsLocationsOperationsRequest,
  output: GetOrganizationsLocationsOperationsResponse,
  errors: [NotFound, Forbidden],
}));

export interface ListOrganizationsLocationsOperationsRequest {
  /** The standard list page token. */
  pageToken?: string;
  /** The standard list page size. */
  pageSize?: number;
  /** The standard list filter. */
  filter?: string;
  /** When set to `true`, operations that are reachable are returned as normal, and those that are unreachable are returned in the ListOperationsResponse.unreachable field. This can only be `true` when reading across collections. For example, when `parent` is set to `"projects/example/locations/-"`. This field is not supported by default and will result in an `UNIMPLEMENTED` error if set unless explicitly documented otherwise in service or product specific documentation. */
  returnPartialSuccess?: boolean;
  /** The name of the operation's parent resource. */
  name: string;
}

export const ListOrganizationsLocationsOperationsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
    filter: Schema.optional(Schema.String).pipe(T.HttpQuery("filter")),
    returnPartialSuccess: Schema.optional(Schema.Boolean).pipe(
      T.HttpQuery("returnPartialSuccess"),
    ),
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "GET", path: "v1alpha/{+name}/operations" }),
    svc,
  ) as unknown as Schema.Schema<ListOrganizationsLocationsOperationsRequest>;

export type ListOrganizationsLocationsOperationsResponse =
  GoogleLongrunningListOperationsResponse;
export const ListOrganizationsLocationsOperationsResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleLongrunningListOperationsResponse;

export type ListOrganizationsLocationsOperationsError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`. */
export const listOrganizationsLocationsOperations: API.PaginatedOperationMethod<
  ListOrganizationsLocationsOperationsRequest,
  ListOrganizationsLocationsOperationsResponse,
  ListOrganizationsLocationsOperationsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
  input: ListOrganizationsLocationsOperationsRequest,
  output: ListOrganizationsLocationsOperationsResponse,
  errors: [NotFound, Forbidden],
  pagination: {
    inputToken: "pageToken",
    outputToken: "nextPageToken",
  },
}));
