// ==========================================================================
// Cloud Number Registry API (cloudnumberregistry v1alpha)
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
  name: "cloudnumberregistry",
  version: "v1alpha",
  rootUrl: "https://cloudnumberregistry.googleapis.com/",
  servicePath: "",
});

// ==========================================================================
// Schemas
// ==========================================================================

export interface DiscoveryMetadata {
  /** Output only. The time when the event happened. */
  eventTime?: string;
  /** Output only. The time when the resource was created. */
  createTime?: string;
  /** Output only. The state of the resource. */
  state?:
    | "RESOURCE_STATE_UNSPECIFIED"
    | "INVALID"
    | "EXISTS"
    | "DOES_NOT_EXIST"
    | "ERROR"
    | (string & {});
  /** Output only. The time when the resource was last modified. */
  updateTime?: string;
  /** Output only. The resource uri of the discovered resource. */
  resourceUri?: string;
  /** Output only. The resource name of the discovered resource, should be API-agnostic. Example: "projects/{project_number}/networks/{network_id}". */
  resource?: string;
  /** Output only. The canonical google.aip.dev/122 name of the source resource. */
  sourceId?: string;
  /** Output only. A single source resource can be the source of multiple CNR resources. This sub_id is used to distinguish between the different CNR resources derived from the same upstream resource. For example, a single subnetwork can be the source of multiple Ranges, one for each protocol. In this case, the sub_id could be "private-ipv4" or "private-ipv6". */
  sourceSubId?: string;
}

export const DiscoveryMetadata: Schema.Schema<DiscoveryMetadata> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    eventTime: Schema.optional(Schema.String),
    createTime: Schema.optional(Schema.String),
    state: Schema.optional(Schema.String),
    updateTime: Schema.optional(Schema.String),
    resourceUri: Schema.optional(Schema.String),
    resource: Schema.optional(Schema.String),
    sourceId: Schema.optional(Schema.String),
    sourceSubId: Schema.optional(Schema.String),
  }).annotate({ identifier: "DiscoveryMetadata" });

export interface RealmAggregatedData {
  /** Output only. Number of CustomRanges in the Realm. */
  customRangesCount?: number;
  /** Output only. Number of DiscoveredRanges in the Realm. */
  discoveredRangesCount?: number;
}

export const RealmAggregatedData: Schema.Schema<RealmAggregatedData> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    customRangesCount: Schema.optional(Schema.Number),
    discoveredRangesCount: Schema.optional(Schema.Number),
  }).annotate({ identifier: "RealmAggregatedData" });

export interface Realm {
  /** Required. Traffic type of the Realm. */
  trafficType?:
    | "TRAFFIC_TYPE_UNSPECIFIED"
    | "UNSET"
    | "INTERNET"
    | "PRIVATE"
    | "LINKLOCAL"
    | (string & {});
  /** Output only. Discovery metadata of the Realm. */
  discoveryMetadata?: DiscoveryMetadata;
  /** Optional. User-defined labels. */
  labels?: Record<string, string>;
  /** Required. Identifier. The resource name of the Realm. */
  name?: string;
  /** Output only. The time at which the Realm was last updated. */
  updateTime?: string;
  /** Required. Name of the RegistryBook that claims the Realm. */
  registryBook?: string;
  /** Output only. The time at which the Realm was created. */
  createTime?: string;
  /** Output only. Aggregated data for the Realm. Populated only when the view is AGGREGATE. */
  aggregatedData?: RealmAggregatedData;
  /** Required. Management type of the Realm. */
  managementType?:
    | "MANAGEMENT_TYPE_UNSPECIFIED"
    | "CNR"
    | "USER"
    | (string & {});
  /** Optional. IP version of the Realm. */
  ipVersion?: "IP_VERSION_UNSPECIFIED" | "IPV4" | "IPV6" | (string & {});
}

export const Realm: Schema.Schema<Realm> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    trafficType: Schema.optional(Schema.String),
    discoveryMetadata: Schema.optional(DiscoveryMetadata),
    labels: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    name: Schema.optional(Schema.String),
    updateTime: Schema.optional(Schema.String),
    registryBook: Schema.optional(Schema.String),
    createTime: Schema.optional(Schema.String),
    aggregatedData: Schema.optional(RealmAggregatedData),
    managementType: Schema.optional(Schema.String),
    ipVersion: Schema.optional(Schema.String),
  }).annotate({ identifier: "Realm" });

export interface RangeUtilization {
  /** Output only. The usage of the Range as a percentage. This is marked as optional so that we have presence tracking and API responses show 0.0 instead of NULL. */
  usage?: number;
  /** Output only. The total number of IP addresses produced in the Range. */
  totalProduced?: string;
  /** Output only. The total number of IP addresses consumed in the Range. */
  totalConsumed?: string;
}

export const RangeUtilization: Schema.Schema<RangeUtilization> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    usage: Schema.optional(Schema.Number),
    totalProduced: Schema.optional(Schema.String),
    totalConsumed: Schema.optional(Schema.String),
  }).annotate({ identifier: "RangeUtilization" });

export interface Attribute {
  /** Required. The key of the attribute. */
  key?: string;
  /** Required. The value of the attribute. */
  value?: string;
}

export const Attribute: Schema.Schema<Attribute> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    key: Schema.optional(Schema.String),
    value: Schema.optional(Schema.String),
  }).annotate({ identifier: "Attribute" });

export interface CustomRange {
  /** Optional. User-defined labels. */
  labels?: Record<string, string>;
  /** Optional. The resource name of the parent CustomRange, in the format `projects/{project}/locations/{location}/customRanges/{custom_range}`. If specified, the parent CustomRange must be in the same RegistryBook. This field is mutually exclusive with the `realm` field, as the Realm is inherited from the parent CustomRange. */
  parentRange?: string;
  /** Optional. The attributes of the CustomRange. */
  attributes?: ReadonlyArray<Attribute>;
  /** Required. Identifier. The resource name of the CustomRange, in the format `projects/{project}/locations/{location}/customRanges/{custom_range}`. */
  name?: string;
  /** Optional. The IPv6 CIDR range of the CustomRange. */
  ipv6CidrRange?: string;
  /** Optional. The description of the CustomRange. */
  description?: string;
  /** Optional. The IPv4 CIDR range of the CustomRange. */
  ipv4CidrRange?: string;
  /** Optional. The resource name of the Realm associated with the CustomRange, in the format `projects/{project}/locations/{location}/realms/{realm}`. The Realm must be in the same project as the CustomRange. This field must not be set if the `parent_range` field is set, as the Realm will be inherited from the parent CustomRange. */
  realm?: string;
  /** Output only. The RegistryBook of the CustomRange. This field is inherited from the Realm or parent CustomRange depending on which one is specified. */
  registryBook?: string;
}

export const CustomRange: Schema.Schema<CustomRange> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    labels: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    parentRange: Schema.optional(Schema.String),
    attributes: Schema.optional(Schema.Array(Attribute)),
    name: Schema.optional(Schema.String),
    ipv6CidrRange: Schema.optional(Schema.String),
    description: Schema.optional(Schema.String),
    ipv4CidrRange: Schema.optional(Schema.String),
    realm: Schema.optional(Schema.String),
    registryBook: Schema.optional(Schema.String),
  }).annotate({ identifier: "CustomRange" });

export interface DiscoveredRange {
  /** Output only. The RegistryBook of the DiscoveredRange. */
  registryBook?: string;
  /** Output only. The time at which the DiscoveredRange was created. */
  createTime?: string;
  /** Output only. The time at which the DiscoveredRange was last updated. */
  updateTime?: string;
  /** Optional. The IPv4 CIDR range of the DiscoveredRange. */
  ipv4CidrRange?: string;
  /** Optional. The IPv6 CIDR range of the DiscoveredRange. */
  ipv6CidrRange?: string;
  /** Optional. User-defined labels. */
  labels?: Record<string, string>;
  /** Output only. If true, allows child DiscoveredRanges of this DiscoveredRange to overlap with each other. */
  childCidrOverlapAllowed?: boolean;
  /** Optional. The Realm of the DiscoveredRange. */
  realm?: string;
  /** Optional. Description of the DiscoveredRange. */
  description?: string;
  /** Output only. Owner metadata for this DiscoveredRange. A unique set of metadata is associated with each DiscoveredRange. If an IP range is shared by multiple resources (e.g., an Address resource and an Instance resource, or multiple ForwardingRules),separate DiscoveredRanges are created, each with a distinct owner. This ensures each DiscoveredRange has its own unique set of attributes, labels, create time and update time. */
  discoveryMetadata?: DiscoveryMetadata;
  /** Required. Identifier. The resource name of the DiscoveredRange, in the format `projects/{project}/locations/{location}/discoveredRanges/{discovered_range}`. */
  name?: string;
  /** Optional. The resource name of the parent DiscoveredRange, in the format `projects/{project}/locations/{location}/discoveredRanges/{discovered_range}`. */
  parentRange?: string;
  /** Optional. The attributes of the DiscoveredRange. */
  attributes?: ReadonlyArray<Attribute>;
}

export const DiscoveredRange: Schema.Schema<DiscoveredRange> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    registryBook: Schema.optional(Schema.String),
    createTime: Schema.optional(Schema.String),
    updateTime: Schema.optional(Schema.String),
    ipv4CidrRange: Schema.optional(Schema.String),
    ipv6CidrRange: Schema.optional(Schema.String),
    labels: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    childCidrOverlapAllowed: Schema.optional(Schema.Boolean),
    realm: Schema.optional(Schema.String),
    description: Schema.optional(Schema.String),
    discoveryMetadata: Schema.optional(DiscoveryMetadata),
    name: Schema.optional(Schema.String),
    parentRange: Schema.optional(Schema.String),
    attributes: Schema.optional(Schema.Array(Attribute)),
  }).annotate({ identifier: "DiscoveredRange" });

export interface Range {
  /** The utilization of the Range. */
  utilization?: RangeUtilization;
  /** A CustomRange. */
  customRange?: CustomRange;
  /** A DiscoveredRange. */
  discoveredRange?: DiscoveredRange;
}

export const Range: Schema.Schema<Range> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    utilization: Schema.optional(RangeUtilization),
    customRange: Schema.optional(CustomRange),
    discoveredRange: Schema.optional(DiscoveredRange),
  }).annotate({ identifier: "Range" });

export interface SearchIpResourcesResult {
  /** A Realm matching the search query. */
  realm?: Realm;
  /** A Range matching the search query. */
  range?: Range;
}

export const SearchIpResourcesResult: Schema.Schema<SearchIpResourcesResult> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    realm: Schema.optional(Realm),
    range: Schema.optional(Range),
  }).annotate({ identifier: "SearchIpResourcesResult" });

export interface ListCustomRangesResponse {
  /** The list of CustomRanges. */
  customRanges?: ReadonlyArray<CustomRange>;
  /** A token to retrieve the next page of results, or empty if there are no more results in the list. */
  nextPageToken?: string;
  /** Locations that could not be reached. */
  unreachable?: ReadonlyArray<string>;
}

export const ListCustomRangesResponse: Schema.Schema<ListCustomRangesResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    customRanges: Schema.optional(Schema.Array(CustomRange)),
    nextPageToken: Schema.optional(Schema.String),
    unreachable: Schema.optional(Schema.Array(Schema.String)),
  }).annotate({ identifier: "ListCustomRangesResponse" });

export interface ListRealmsResponse {
  /** The list of Realms. */
  realms?: ReadonlyArray<Realm>;
  /** A token identifying a page of results the server should return. */
  nextPageToken?: string;
  /** Locations that could not be reached. */
  unreachable?: ReadonlyArray<string>;
}

export const ListRealmsResponse: Schema.Schema<ListRealmsResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    realms: Schema.optional(Schema.Array(Realm)),
    nextPageToken: Schema.optional(Schema.String),
    unreachable: Schema.optional(Schema.Array(Schema.String)),
  }).annotate({ identifier: "ListRealmsResponse" });

export interface Status {
  /** A list of messages that carry the error details. There is a common set of message types for APIs to use. */
  details?: ReadonlyArray<Record<string, unknown>>;
  /** A developer-facing error message, which should be in English. Any user-facing error message should be localized and sent in the google.rpc.Status.details field, or localized by the client. */
  message?: string;
  /** The status code, which should be an enum value of google.rpc.Code. */
  code?: number;
}

export const Status: Schema.Schema<Status> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    details: Schema.optional(
      Schema.Array(Schema.Record(Schema.String, Schema.Unknown)),
    ),
    message: Schema.optional(Schema.String),
    code: Schema.optional(Schema.Number),
  }).annotate({ identifier: "Status" });

export interface Operation {
  /** The server-assigned name, which is only unique within the same service that originally returns it. If you use the default HTTP mapping, the `name` should be a resource name ending with `operations/{unique_id}`. */
  name?: string;
  /** Service-specific metadata associated with the operation. It typically contains progress information and common metadata such as create time. Some services might not provide such metadata. Any method that returns a long-running operation should document the metadata type, if any. */
  metadata?: Record<string, unknown>;
  /** The error result of the operation in case of failure or cancellation. */
  error?: Status;
  /** The normal, successful response of the operation. If the original method returns no data on success, such as `Delete`, the response is `google.protobuf.Empty`. If the original method is standard `Get`/`Create`/`Update`, the response should be the resource. For other methods, the response should have the type `XxxResponse`, where `Xxx` is the original method name. For example, if the original method name is `TakeSnapshot()`, the inferred response type is `TakeSnapshotResponse`. */
  response?: Record<string, unknown>;
  /** If the value is `false`, it means the operation is still in progress. If `true`, the operation is completed, and either `error` or `response` is available. */
  done?: boolean;
}

export const Operation: Schema.Schema<Operation> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.optional(Schema.String),
    metadata: Schema.optional(Schema.Record(Schema.String, Schema.Unknown)),
    error: Schema.optional(Status),
    response: Schema.optional(Schema.Record(Schema.String, Schema.Unknown)),
    done: Schema.optional(Schema.Boolean),
  }).annotate({ identifier: "Operation" });

export interface IpamAdminScope {
  /** Output only. The time at which the IpamAdminScope was last updated. */
  updateTime?: string;
  /** Output only. State of resource discovery pipeline. */
  state?:
    | "DISCOVERY_PIPELINE_STATE_UNSPECIFIED"
    | "INTERNAL_FAILURE"
    | "FAILED"
    | "SETUP_IN_PROGRESS"
    | "READY_FOR_USE"
    | "DELETING_IN_PROGRESS"
    | "UPDATING"
    | "RECOVERING"
    | "DISABLED"
    | "DELETION_COMPLETED"
    | "CLEANUP_IN_PROGRESS"
    | "READY_FOR_DELETION"
    | (string & {});
  /** Output only. The time at which the IpamAdminScope was created. */
  createTime?: string;
  /** Required. Administrative scopes enabled for IP address discovery and management. For example, "organizations/1234567890". Minimum of 1 scope is required. In preview, only one organization scope is allowed. */
  scopes?: ReadonlyArray<string>;
  /** Optional. User-defined labels. */
  labels?: Record<string, string>;
  /** Required. Add-on platforms that are enabled for this IpamAdminScope. Cloud Number Registry only discovers the IP addresses from the enabled platforms. */
  enabledAddonPlatforms?: ReadonlyArray<
    "ADD_ON_PLATFORM_UNSPECIFIED" | "COMPUTE_ENGINE" | "GCE" | (string & {})
  >;
  /** Required. Identifier. The resource name of the IpamAdminScope. */
  name?: string;
}

export const IpamAdminScope: Schema.Schema<IpamAdminScope> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    updateTime: Schema.optional(Schema.String),
    state: Schema.optional(Schema.String),
    createTime: Schema.optional(Schema.String),
    scopes: Schema.optional(Schema.Array(Schema.String)),
    labels: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    enabledAddonPlatforms: Schema.optional(Schema.Array(Schema.String)),
    name: Schema.optional(Schema.String),
  }).annotate({ identifier: "IpamAdminScope" });

export interface SearchIpResourcesResponse {
  /** Deprecated: Use results field instead. The list of Ranges matching the search query. */
  ranges?: ReadonlyArray<Range>;
  /** The list of results matching the search query. */
  results?: ReadonlyArray<SearchIpResourcesResult>;
  /** A token identifying a page of results the server should return. */
  nextPageToken?: string;
  /** Locations that could not be reached. */
  unreachable?: ReadonlyArray<string>;
}

export const SearchIpResourcesResponse: Schema.Schema<SearchIpResourcesResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    ranges: Schema.optional(Schema.Array(Range)),
    results: Schema.optional(Schema.Array(SearchIpResourcesResult)),
    nextPageToken: Schema.optional(Schema.String),
    unreachable: Schema.optional(Schema.Array(Schema.String)),
  }).annotate({ identifier: "SearchIpResourcesResponse" });

export interface ShowDiscoveredRangeUtilizationResponse {
  /** The DiscoveredRange resource. */
  discoveredRange?: DiscoveredRange;
  /** The utilization details of the DiscoveredRange. */
  rangeUtilization?: RangeUtilization;
}

export const ShowDiscoveredRangeUtilizationResponse: Schema.Schema<ShowDiscoveredRangeUtilizationResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    discoveredRange: Schema.optional(DiscoveredRange),
    rangeUtilization: Schema.optional(RangeUtilization),
  }).annotate({ identifier: "ShowDiscoveredRangeUtilizationResponse" });

export interface ListOperationsResponse {
  /** A list of operations that matches the specified filter in the request. */
  operations?: ReadonlyArray<Operation>;
  /** The standard List next-page token. */
  nextPageToken?: string;
  /** Unordered list. Unreachable resources. Populated when the request sets `ListOperationsRequest.return_partial_success` and reads across collections. For example, when attempting to list all resources across all supported locations. */
  unreachable?: ReadonlyArray<string>;
}

export const ListOperationsResponse: Schema.Schema<ListOperationsResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    operations: Schema.optional(Schema.Array(Operation)),
    nextPageToken: Schema.optional(Schema.String),
    unreachable: Schema.optional(Schema.Array(Schema.String)),
  }).annotate({ identifier: "ListOperationsResponse" });

export interface FindDiscoveredRangeFreeIpRangesResponse {
  /** Output only. The free IP CIDR ranges found. */
  freeIpCidrRanges?: ReadonlyArray<string>;
}

export const FindDiscoveredRangeFreeIpRangesResponse: Schema.Schema<FindDiscoveredRangeFreeIpRangesResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    freeIpCidrRanges: Schema.optional(Schema.Array(Schema.String)),
  }).annotate({ identifier: "FindDiscoveredRangeFreeIpRangesResponse" });

export interface AggregatedData {
  /** Output only. Number of DiscoveredRanges in the RegistryBook. */
  discoveredRangesCount?: number;
  /** Output only. Number of scopes unique to the RegistryBook. */
  uniqueScopesCount?: number;
  /** Output only. Number of custom Realms in the RegistryBook. */
  customRealmsCount?: number;
  /** Output only. Number of CustomRanges in the RegistryBook. */
  customRangesCount?: number;
  /** Output only. Number of discovered Realms in the RegistryBook. */
  discoveredRealmsCount?: number;
}

export const AggregatedData: Schema.Schema<AggregatedData> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    discoveredRangesCount: Schema.optional(Schema.Number),
    uniqueScopesCount: Schema.optional(Schema.Number),
    customRealmsCount: Schema.optional(Schema.Number),
    customRangesCount: Schema.optional(Schema.Number),
    discoveredRealmsCount: Schema.optional(Schema.Number),
  }).annotate({ identifier: "AggregatedData" });

export interface RegistryBook {
  /** Output only. Aggregated data for the RegistryBook. Populated only when the view is AGGREGATE. */
  aggregatedData?: AggregatedData;
  /** Required. Identifier. The resource name of the RegistryBook. */
  name?: string;
  /** Optional. User-defined labels. */
  labels?: Record<string, string>;
  /** Output only. The time at which the RegistryBook was created. */
  createTime?: string;
  /** Output only. Whether the RegistryBook is the default one. */
  isDefault?: boolean;
  /** Output only. The time at which the RegistryBook was last updated. */
  updateTime?: string;
  /** Optional. List of scopes claimed by the RegistryBook. In Preview, Only project scope is supported. Each scope is in the format of projects/{project}. Each scope can only be claimed once. */
  claimedScopes?: ReadonlyArray<string>;
}

export const RegistryBook: Schema.Schema<RegistryBook> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    aggregatedData: Schema.optional(AggregatedData),
    name: Schema.optional(Schema.String),
    labels: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    createTime: Schema.optional(Schema.String),
    isDefault: Schema.optional(Schema.Boolean),
    updateTime: Schema.optional(Schema.String),
    claimedScopes: Schema.optional(Schema.Array(Schema.String)),
  }).annotate({ identifier: "RegistryBook" });

export interface CancelOperationRequest {}

export const CancelOperationRequest: Schema.Schema<CancelOperationRequest> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).annotate({
    identifier: "CancelOperationRequest",
  });

export interface ListRegistryBooksResponse {
  /** The list of RegistryBook */
  registryBooks?: ReadonlyArray<RegistryBook>;
  /** A token identifying a page of results the server should return. */
  nextPageToken?: string;
  /** Locations that could not be reached. */
  unreachable?: ReadonlyArray<string>;
}

export const ListRegistryBooksResponse: Schema.Schema<ListRegistryBooksResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    registryBooks: Schema.optional(Schema.Array(RegistryBook)),
    nextPageToken: Schema.optional(Schema.String),
    unreachable: Schema.optional(Schema.Array(Schema.String)),
  }).annotate({ identifier: "ListRegistryBooksResponse" });

export interface Location {
  /** Cross-service attributes for the location. For example {"cloud.googleapis.com/region": "us-east1"} */
  labels?: Record<string, string>;
  /** Resource name for the location, which may vary between implementations. For example: `"projects/example-project/locations/us-east1"` */
  name?: string;
  /** Service-specific metadata. For example the available capacity at the given location. */
  metadata?: Record<string, unknown>;
  /** The friendly name for this location, typically a nearby city name. For example, "Tokyo". */
  displayName?: string;
  /** The canonical id for this location. For example: `"us-east1"`. */
  locationId?: string;
}

export const Location: Schema.Schema<Location> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    labels: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    name: Schema.optional(Schema.String),
    metadata: Schema.optional(Schema.Record(Schema.String, Schema.Unknown)),
    displayName: Schema.optional(Schema.String),
    locationId: Schema.optional(Schema.String),
  }).annotate({ identifier: "Location" });

export interface OperationMetadata {
  /** Output only. Human-readable status of the operation, if any. */
  statusMessage?: string;
  /** Output only. The time the operation was created. */
  createTime?: string;
  /** Output only. Server-defined resource path for the target of the operation. */
  target?: string;
  /** Output only. Name of the verb executed by the operation. */
  verb?: string;
  /** Output only. API version used to start the operation. */
  apiVersion?: string;
  /** Output only. The time the operation finished running. */
  endTime?: string;
  /** Output only. Identifies whether the user has requested cancellation of the operation. Operations that have been cancelled successfully have Operation.error value with a google.rpc.Status.code of 1, corresponding to `Code.CANCELLED`. */
  requestedCancellation?: boolean;
}

export const OperationMetadata: Schema.Schema<OperationMetadata> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    statusMessage: Schema.optional(Schema.String),
    createTime: Schema.optional(Schema.String),
    target: Schema.optional(Schema.String),
    verb: Schema.optional(Schema.String),
    apiVersion: Schema.optional(Schema.String),
    endTime: Schema.optional(Schema.String),
    requestedCancellation: Schema.optional(Schema.Boolean),
  }).annotate({ identifier: "OperationMetadata" });

export interface SearchIpResourcesRequest {
  /** Optional. Search query. This string filters resources in an AIP-160-like format. It has some limitations. You can only specify top level conjunctions or attribute level negations. Each restriction can only be used once except the attribute restriction. The available restrictions for Ranges are: - `realm`: The Realm name to search in. - `ip_address`: The IP address to search for within Ranges. - `ip_version`: The IP version to filter by (e.g., "IPV4", "IPV6"). - `parent_range`: The parent Range of the Range to search for. - `attribute_text`: The attribute text to search for within Ranges. - `attribute`: The attribute key and value to filter by. The available restrictions for Realms are: - `ip_version`: The IP version to search for. - `management_type`: The management type of the Realm (e.g., "CNR", "USER"). Only one of attribute_text or multiple attribute filters can be specified. Examples: - `realm=test-realm` - `realm=test-realm AND ip_address=10.0.0.0` - `realm=test-realm AND ip_version=IPV6` - `realm=test-realm AND attribute_text=test` - `ip_address=10.0.0.0 AND attribute:(key1=value1) AND attribute:(key2=value2)` - `attribute_text=test AND parent_range=projects/123/locations/global/discoveredRanges/test-parent-range` - `management_type=CNR` */
  query?: string;
  /** Optional. Hint for how to order the results. Supported sort fields are: - `name`: Sort alphabetically by the resource name. - `create_time`: Sort by the creation timestamp of the resource. - `update_time`: Sort by the last update timestamp of the resource. Supported directions are `asc` (ascending) and `desc` (descending). If unspecified, direction defaults to `asc`. Only sorting by a single field is supported. */
  orderBy?: string;
  /** Optional. Requested page size. Server may return fewer items than requested. If unspecified, server will pick an appropriate default. */
  pageSize?: number;
  /** Optional. A token identifying a page of results the server should return. */
  pageToken?: string;
  /** Optional. The type of resources to search for. If not specified, the server will return Ranges. */
  searchResourceTypes?: ReadonlyArray<
    "SEARCH_RESOURCE_TYPE_UNSPECIFIED" | "RANGES" | "REALMS" | (string & {})
  >;
  /** Optional. Whether to show the utilization of the Ranges in the response. */
  showUtilization?: boolean;
}

export const SearchIpResourcesRequest: Schema.Schema<SearchIpResourcesRequest> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    query: Schema.optional(Schema.String),
    orderBy: Schema.optional(Schema.String),
    pageSize: Schema.optional(Schema.Number),
    pageToken: Schema.optional(Schema.String),
    searchResourceTypes: Schema.optional(Schema.Array(Schema.String)),
    showUtilization: Schema.optional(Schema.Boolean),
  }).annotate({ identifier: "SearchIpResourcesRequest" });

export interface Empty {}

export const Empty: Schema.Schema<Empty> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).annotate({
    identifier: "Empty",
  });

export interface ListDiscoveredRangesResponse {
  /** A token to retrieve the next page of results, or empty if there are no more results in the list. */
  nextPageToken?: string;
  /** Locations that could not be reached. */
  unreachable?: ReadonlyArray<string>;
  /** The list of DiscoveredRanges. */
  discoveredRanges?: ReadonlyArray<DiscoveredRange>;
}

export const ListDiscoveredRangesResponse: Schema.Schema<ListDiscoveredRangesResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    nextPageToken: Schema.optional(Schema.String),
    unreachable: Schema.optional(Schema.Array(Schema.String)),
    discoveredRanges: Schema.optional(Schema.Array(DiscoveredRange)),
  }).annotate({ identifier: "ListDiscoveredRangesResponse" });

export interface FindCustomRangeFreeIpRangesResponse {
  /** Output only. The free IP CIDR ranges found. */
  freeIpCidrRanges?: ReadonlyArray<string>;
}

export const FindCustomRangeFreeIpRangesResponse: Schema.Schema<FindCustomRangeFreeIpRangesResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    freeIpCidrRanges: Schema.optional(Schema.Array(Schema.String)),
  }).annotate({ identifier: "FindCustomRangeFreeIpRangesResponse" });

export interface IpamAdminScopeAvailability {
  /** The admin project of the IpamAdminScope if it exists. */
  adminProject?: string;
  /** The scope of the IpamAdminScope. */
  scope?: string;
  /** The availability of the scope. */
  availability?:
    | "AVAILABILITY_UNSPECIFIED"
    | "AVAILABLE"
    | "UNAVAILABLE"
    | (string & {});
}

export const IpamAdminScopeAvailability: Schema.Schema<IpamAdminScopeAvailability> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    adminProject: Schema.optional(Schema.String),
    scope: Schema.optional(Schema.String),
    availability: Schema.optional(Schema.String),
  }).annotate({ identifier: "IpamAdminScopeAvailability" });

export interface CheckAvailabilityIpamAdminScopesResponse {
  /** The details of the requested scopes. */
  scopeAvailabilities?: ReadonlyArray<IpamAdminScopeAvailability>;
}

export const CheckAvailabilityIpamAdminScopesResponse: Schema.Schema<CheckAvailabilityIpamAdminScopesResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    scopeAvailabilities: Schema.optional(
      Schema.Array(IpamAdminScopeAvailability),
    ),
  }).annotate({ identifier: "CheckAvailabilityIpamAdminScopesResponse" });

export interface ShowCustomRangeUtilizationResponse {
  /** The CustomRange resource. */
  customRange?: CustomRange;
  /** The utilization details of the CustomRange. */
  rangeUtilization?: RangeUtilization;
}

export const ShowCustomRangeUtilizationResponse: Schema.Schema<ShowCustomRangeUtilizationResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    customRange: Schema.optional(CustomRange),
    rangeUtilization: Schema.optional(RangeUtilization),
  }).annotate({ identifier: "ShowCustomRangeUtilizationResponse" });

export interface ListLocationsResponse {
  /** A list of locations that matches the specified filter in the request. */
  locations?: ReadonlyArray<Location>;
  /** The standard List next-page token. */
  nextPageToken?: string;
}

export const ListLocationsResponse: Schema.Schema<ListLocationsResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    locations: Schema.optional(Schema.Array(Location)),
    nextPageToken: Schema.optional(Schema.String),
  }).annotate({ identifier: "ListLocationsResponse" });

export interface ListIpamAdminScopesResponse {
  /** The list of IpamAdminScopes. */
  ipamAdminScopes?: ReadonlyArray<IpamAdminScope>;
  /** A token to retrieve the next page of results, or empty if there are no more results in the list. */
  nextPageToken?: string;
  /** Locations that could not be reached. */
  unreachable?: ReadonlyArray<string>;
}

export const ListIpamAdminScopesResponse: Schema.Schema<ListIpamAdminScopesResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    ipamAdminScopes: Schema.optional(Schema.Array(IpamAdminScope)),
    nextPageToken: Schema.optional(Schema.String),
    unreachable: Schema.optional(Schema.Array(Schema.String)),
  }).annotate({ identifier: "ListIpamAdminScopesResponse" });

export interface CleanupIpamAdminScopeRequest {
  /** Optional. An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes after the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000). */
  requestId?: string;
}

export const CleanupIpamAdminScopeRequest: Schema.Schema<CleanupIpamAdminScopeRequest> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    requestId: Schema.optional(Schema.String),
  }).annotate({ identifier: "CleanupIpamAdminScopeRequest" });

export interface DisableIpamAdminScopeRequest {
  /** Optional. An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes after the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000). */
  requestId?: string;
}

export const DisableIpamAdminScopeRequest: Schema.Schema<DisableIpamAdminScopeRequest> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    requestId: Schema.optional(Schema.String),
  }).annotate({ identifier: "DisableIpamAdminScopeRequest" });

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
  /** A filter to narrow down results to a preferred subset. The filtering language accepts strings like `"displayName=tokyo"`, and is documented in more detail in [AIP-160](https://google.aip.dev/160). */
  filter?: string;
  /** The resource that owns the locations collection, if applicable. */
  name: string;
  /** Optional. Do not use this field unless explicitly documented otherwise. This is primarily for internal usage. */
  extraLocationTypes?: string[];
  /** The maximum number of results to return. If not set, the service selects a default. */
  pageSize?: number;
  /** A page token received from the `next_page_token` field in the response. Send that page token to receive the subsequent page. */
  pageToken?: string;
}

export const ListProjectsLocationsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    filter: Schema.optional(Schema.String).pipe(T.HttpQuery("filter")),
    name: Schema.String.pipe(T.HttpPath("name")),
    extraLocationTypes: Schema.optional(Schema.Array(Schema.String)).pipe(
      T.HttpQuery("extraLocationTypes"),
    ),
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
  }).pipe(
    T.Http({ method: "GET", path: "v1alpha/{+name}/locations" }),
    svc,
  ) as unknown as Schema.Schema<ListProjectsLocationsRequest>;

export type ListProjectsLocationsResponse = ListLocationsResponse;
export const ListProjectsLocationsResponse =
  /*@__PURE__*/ /*#__PURE__*/ ListLocationsResponse;

export type ListProjectsLocationsError = DefaultErrors | NotFound | Forbidden;

/** Lists information about the supported locations for this service. This method lists locations based on the resource scope provided in the ListLocationsRequest.name field: * **Global locations**: If `name` is empty, the method lists the public locations available to all projects. * **Project-specific locations**: If `name` follows the format `projects/{project}`, the method lists locations visible to that specific project. This includes public, private, or other project-specific locations enabled for the project. For gRPC and client library implementations, the resource name is passed as the `name` field. For direct service calls, the resource name is incorporated into the request path based on the specific service implementation and version. */
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

export type GetProjectsLocationsResponse = Location;
export const GetProjectsLocationsResponse =
  /*@__PURE__*/ /*#__PURE__*/ Location;

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

export interface SearchIpResourcesProjectsLocationsRegistryBooksRequest {
  /** Required. The resource name of the RegistryBook to search in. */
  name: string;
  /** Request body */
  body?: SearchIpResourcesRequest;
}

export const SearchIpResourcesProjectsLocationsRegistryBooksRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    body: Schema.optional(SearchIpResourcesRequest).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v1alpha/{+name}:searchIpResources",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<SearchIpResourcesProjectsLocationsRegistryBooksRequest>;

export type SearchIpResourcesProjectsLocationsRegistryBooksResponse =
  SearchIpResourcesResponse;
export const SearchIpResourcesProjectsLocationsRegistryBooksResponse =
  /*@__PURE__*/ /*#__PURE__*/ SearchIpResourcesResponse;

export type SearchIpResourcesProjectsLocationsRegistryBooksError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Searches IP resources in a given RegistryBook. */
export const searchIpResourcesProjectsLocationsRegistryBooks: API.OperationMethod<
  SearchIpResourcesProjectsLocationsRegistryBooksRequest,
  SearchIpResourcesProjectsLocationsRegistryBooksResponse,
  SearchIpResourcesProjectsLocationsRegistryBooksError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: SearchIpResourcesProjectsLocationsRegistryBooksRequest,
  output: SearchIpResourcesProjectsLocationsRegistryBooksResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface ListProjectsLocationsRegistryBooksRequest {
  /** Optional. Requested page size. Server may return fewer items than requested. If unspecified, server will pick an appropriate default. */
  pageSize?: number;
  /** Optional. A token identifying a page of results the server should return. */
  pageToken?: string;
  /** Required. The parent resource name, for example `projects/* /locations/*`. */
  parent: string;
  /** Optional. Filter expression to filter the results. */
  filter?: string;
  /** Optional. The view of the RegistryBook to retrieve. */
  view?:
    | "REGISTRY_BOOK_VIEW_UNSPECIFIED"
    | "BASIC"
    | "FULL"
    | "AGGREGATE"
    | (string & {});
  /** Optional. Hint for how to order the results. */
  orderBy?: string;
}

export const ListProjectsLocationsRegistryBooksRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
    parent: Schema.String.pipe(T.HttpPath("parent")),
    filter: Schema.optional(Schema.String).pipe(T.HttpQuery("filter")),
    view: Schema.optional(Schema.String).pipe(T.HttpQuery("view")),
    orderBy: Schema.optional(Schema.String).pipe(T.HttpQuery("orderBy")),
  }).pipe(
    T.Http({ method: "GET", path: "v1alpha/{+parent}/registryBooks" }),
    svc,
  ) as unknown as Schema.Schema<ListProjectsLocationsRegistryBooksRequest>;

export type ListProjectsLocationsRegistryBooksResponse =
  ListRegistryBooksResponse;
export const ListProjectsLocationsRegistryBooksResponse =
  /*@__PURE__*/ /*#__PURE__*/ ListRegistryBooksResponse;

export type ListProjectsLocationsRegistryBooksError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Lists RegistryBooks in a given project and location. */
export const listProjectsLocationsRegistryBooks: API.PaginatedOperationMethod<
  ListProjectsLocationsRegistryBooksRequest,
  ListProjectsLocationsRegistryBooksResponse,
  ListProjectsLocationsRegistryBooksError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
  input: ListProjectsLocationsRegistryBooksRequest,
  output: ListProjectsLocationsRegistryBooksResponse,
  errors: [NotFound, Forbidden],
  pagination: {
    inputToken: "pageToken",
    outputToken: "nextPageToken",
  },
}));

export interface PatchProjectsLocationsRegistryBooksRequest {
  /** Required. Identifier. The resource name of the RegistryBook. */
  name: string;
  /** Optional. An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes since the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000). */
  requestId?: string;
  /** Optional. Field mask is used to specify the fields to be overwritten in the RegistryBook resource by the update. The fields specified in the update_mask are relative to the resource, not the full request. A field will be overwritten if it is in the mask. If the user does not provide a mask then all fields will be overwritten. */
  updateMask?: string;
  /** Request body */
  body?: RegistryBook;
}

export const PatchProjectsLocationsRegistryBooksRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    requestId: Schema.optional(Schema.String).pipe(T.HttpQuery("requestId")),
    updateMask: Schema.optional(Schema.String).pipe(T.HttpQuery("updateMask")),
    body: Schema.optional(RegistryBook).pipe(T.HttpBody()),
  }).pipe(
    T.Http({ method: "PATCH", path: "v1alpha/{+name}", hasBody: true }),
    svc,
  ) as unknown as Schema.Schema<PatchProjectsLocationsRegistryBooksRequest>;

export type PatchProjectsLocationsRegistryBooksResponse = Operation;
export const PatchProjectsLocationsRegistryBooksResponse =
  /*@__PURE__*/ /*#__PURE__*/ Operation;

export type PatchProjectsLocationsRegistryBooksError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Updates the parameters of a single RegistryBook. */
export const patchProjectsLocationsRegistryBooks: API.OperationMethod<
  PatchProjectsLocationsRegistryBooksRequest,
  PatchProjectsLocationsRegistryBooksResponse,
  PatchProjectsLocationsRegistryBooksError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: PatchProjectsLocationsRegistryBooksRequest,
  output: PatchProjectsLocationsRegistryBooksResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface GetProjectsLocationsRegistryBooksRequest {
  /** Required. The resource name of the RegistryBook to retrieve. */
  name: string;
  /** Optional. The view of the RegistryBook to retrieve. */
  view?:
    | "REGISTRY_BOOK_VIEW_UNSPECIFIED"
    | "BASIC"
    | "FULL"
    | "AGGREGATE"
    | (string & {});
}

export const GetProjectsLocationsRegistryBooksRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    view: Schema.optional(Schema.String).pipe(T.HttpQuery("view")),
  }).pipe(
    T.Http({ method: "GET", path: "v1alpha/{+name}" }),
    svc,
  ) as unknown as Schema.Schema<GetProjectsLocationsRegistryBooksRequest>;

export type GetProjectsLocationsRegistryBooksResponse = RegistryBook;
export const GetProjectsLocationsRegistryBooksResponse =
  /*@__PURE__*/ /*#__PURE__*/ RegistryBook;

export type GetProjectsLocationsRegistryBooksError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Gets details of a single RegistryBook. */
export const getProjectsLocationsRegistryBooks: API.OperationMethod<
  GetProjectsLocationsRegistryBooksRequest,
  GetProjectsLocationsRegistryBooksResponse,
  GetProjectsLocationsRegistryBooksError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetProjectsLocationsRegistryBooksRequest,
  output: GetProjectsLocationsRegistryBooksResponse,
  errors: [NotFound, Forbidden],
}));

export interface DeleteProjectsLocationsRegistryBooksRequest {
  /** Optional. An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes after the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000). */
  requestId?: string;
  /** Optional. If set to true, all associated resources will be deleted. */
  force?: boolean;
  /** Required. The resource name of the RegistryBook to delete. */
  name: string;
}

export const DeleteProjectsLocationsRegistryBooksRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    requestId: Schema.optional(Schema.String).pipe(T.HttpQuery("requestId")),
    force: Schema.optional(Schema.Boolean).pipe(T.HttpQuery("force")),
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "DELETE", path: "v1alpha/{+name}" }),
    svc,
  ) as unknown as Schema.Schema<DeleteProjectsLocationsRegistryBooksRequest>;

export type DeleteProjectsLocationsRegistryBooksResponse = Operation;
export const DeleteProjectsLocationsRegistryBooksResponse =
  /*@__PURE__*/ /*#__PURE__*/ Operation;

export type DeleteProjectsLocationsRegistryBooksError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Deletes a single RegistryBook. */
export const deleteProjectsLocationsRegistryBooks: API.OperationMethod<
  DeleteProjectsLocationsRegistryBooksRequest,
  DeleteProjectsLocationsRegistryBooksResponse,
  DeleteProjectsLocationsRegistryBooksError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: DeleteProjectsLocationsRegistryBooksRequest,
  output: DeleteProjectsLocationsRegistryBooksResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface CreateProjectsLocationsRegistryBooksRequest {
  /** Required. The parent resource name where the RegistryBook will be created. */
  parent: string;
  /** Required. The ID to use for the RegistryBook, which will become the final segment of the resource name. */
  registryBookId?: string;
  /** Optional. An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes since the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000). */
  requestId?: string;
  /** Request body */
  body?: RegistryBook;
}

export const CreateProjectsLocationsRegistryBooksRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    parent: Schema.String.pipe(T.HttpPath("parent")),
    registryBookId: Schema.optional(Schema.String).pipe(
      T.HttpQuery("registryBookId"),
    ),
    requestId: Schema.optional(Schema.String).pipe(T.HttpQuery("requestId")),
    body: Schema.optional(RegistryBook).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v1alpha/{+parent}/registryBooks",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<CreateProjectsLocationsRegistryBooksRequest>;

export type CreateProjectsLocationsRegistryBooksResponse = Operation;
export const CreateProjectsLocationsRegistryBooksResponse =
  /*@__PURE__*/ /*#__PURE__*/ Operation;

export type CreateProjectsLocationsRegistryBooksError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Creates a new RegistryBook in a given project and location. */
export const createProjectsLocationsRegistryBooks: API.OperationMethod<
  CreateProjectsLocationsRegistryBooksRequest,
  CreateProjectsLocationsRegistryBooksResponse,
  CreateProjectsLocationsRegistryBooksError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: CreateProjectsLocationsRegistryBooksRequest,
  output: CreateProjectsLocationsRegistryBooksResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface DeleteProjectsLocationsRealmsRequest {
  /** Optional. An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes after the first request. */
  requestId?: string;
  /** Optional. If set to true, all associated resources will be deleted. */
  force?: boolean;
  /** Required. The resource name of the Realm to delete. */
  name: string;
}

export const DeleteProjectsLocationsRealmsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    requestId: Schema.optional(Schema.String).pipe(T.HttpQuery("requestId")),
    force: Schema.optional(Schema.Boolean).pipe(T.HttpQuery("force")),
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "DELETE", path: "v1alpha/{+name}" }),
    svc,
  ) as unknown as Schema.Schema<DeleteProjectsLocationsRealmsRequest>;

export type DeleteProjectsLocationsRealmsResponse = Operation;
export const DeleteProjectsLocationsRealmsResponse =
  /*@__PURE__*/ /*#__PURE__*/ Operation;

export type DeleteProjectsLocationsRealmsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Deletes a single Realm. */
export const deleteProjectsLocationsRealms: API.OperationMethod<
  DeleteProjectsLocationsRealmsRequest,
  DeleteProjectsLocationsRealmsResponse,
  DeleteProjectsLocationsRealmsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: DeleteProjectsLocationsRealmsRequest,
  output: DeleteProjectsLocationsRealmsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface CreateProjectsLocationsRealmsRequest {
  /** Required. The ID to use for the Realm, which will become the final segment of the resource name. */
  realmId?: string;
  /** Optional. An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes since the first request. */
  requestId?: string;
  /** Required. The parent resource name where the Realm will be created. */
  parent: string;
  /** Request body */
  body?: Realm;
}

export const CreateProjectsLocationsRealmsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    realmId: Schema.optional(Schema.String).pipe(T.HttpQuery("realmId")),
    requestId: Schema.optional(Schema.String).pipe(T.HttpQuery("requestId")),
    parent: Schema.String.pipe(T.HttpPath("parent")),
    body: Schema.optional(Realm).pipe(T.HttpBody()),
  }).pipe(
    T.Http({ method: "POST", path: "v1alpha/{+parent}/realms", hasBody: true }),
    svc,
  ) as unknown as Schema.Schema<CreateProjectsLocationsRealmsRequest>;

export type CreateProjectsLocationsRealmsResponse = Operation;
export const CreateProjectsLocationsRealmsResponse =
  /*@__PURE__*/ /*#__PURE__*/ Operation;

export type CreateProjectsLocationsRealmsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Creates a new Realm in a given project and location. */
export const createProjectsLocationsRealms: API.OperationMethod<
  CreateProjectsLocationsRealmsRequest,
  CreateProjectsLocationsRealmsResponse,
  CreateProjectsLocationsRealmsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: CreateProjectsLocationsRealmsRequest,
  output: CreateProjectsLocationsRealmsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface ListProjectsLocationsRealmsRequest {
  /** Required. The parent resource name, for example `projects/* /locations/*`. */
  parent: string;
  /** Optional. A token identifying a page of results the server should return. */
  pageToken?: string;
  /** Optional. Requested page size. Server may return fewer items than requested. If unspecified, server will pick an appropriate default. */
  pageSize?: number;
  /** Optional. Hint for how to order the results. */
  orderBy?: string;
  /** Optional. Filter expression to filter the results. */
  filter?: string;
  /** Optional. The view of the Realm to retrieve. */
  view?:
    | "REALM_VIEW_UNSPECIFIED"
    | "BASIC"
    | "FULL"
    | "AGGREGATE"
    | (string & {});
}

export const ListProjectsLocationsRealmsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    parent: Schema.String.pipe(T.HttpPath("parent")),
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
    orderBy: Schema.optional(Schema.String).pipe(T.HttpQuery("orderBy")),
    filter: Schema.optional(Schema.String).pipe(T.HttpQuery("filter")),
    view: Schema.optional(Schema.String).pipe(T.HttpQuery("view")),
  }).pipe(
    T.Http({ method: "GET", path: "v1alpha/{+parent}/realms" }),
    svc,
  ) as unknown as Schema.Schema<ListProjectsLocationsRealmsRequest>;

export type ListProjectsLocationsRealmsResponse = ListRealmsResponse;
export const ListProjectsLocationsRealmsResponse =
  /*@__PURE__*/ /*#__PURE__*/ ListRealmsResponse;

export type ListProjectsLocationsRealmsError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Lists Realms in a given project and location. */
export const listProjectsLocationsRealms: API.PaginatedOperationMethod<
  ListProjectsLocationsRealmsRequest,
  ListProjectsLocationsRealmsResponse,
  ListProjectsLocationsRealmsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
  input: ListProjectsLocationsRealmsRequest,
  output: ListProjectsLocationsRealmsResponse,
  errors: [NotFound, Forbidden],
  pagination: {
    inputToken: "pageToken",
    outputToken: "nextPageToken",
  },
}));

export interface PatchProjectsLocationsRealmsRequest {
  /** Required. Identifier. The resource name of the Realm. */
  name: string;
  /** Optional. An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes since the first request. */
  requestId?: string;
  /** Optional. Field mask is used to specify the fields to be overwritten in the Realm resource by the update. */
  updateMask?: string;
  /** Request body */
  body?: Realm;
}

export const PatchProjectsLocationsRealmsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    requestId: Schema.optional(Schema.String).pipe(T.HttpQuery("requestId")),
    updateMask: Schema.optional(Schema.String).pipe(T.HttpQuery("updateMask")),
    body: Schema.optional(Realm).pipe(T.HttpBody()),
  }).pipe(
    T.Http({ method: "PATCH", path: "v1alpha/{+name}", hasBody: true }),
    svc,
  ) as unknown as Schema.Schema<PatchProjectsLocationsRealmsRequest>;

export type PatchProjectsLocationsRealmsResponse = Operation;
export const PatchProjectsLocationsRealmsResponse =
  /*@__PURE__*/ /*#__PURE__*/ Operation;

export type PatchProjectsLocationsRealmsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Updates the parameters of a single Realm. */
export const patchProjectsLocationsRealms: API.OperationMethod<
  PatchProjectsLocationsRealmsRequest,
  PatchProjectsLocationsRealmsResponse,
  PatchProjectsLocationsRealmsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: PatchProjectsLocationsRealmsRequest,
  output: PatchProjectsLocationsRealmsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface GetProjectsLocationsRealmsRequest {
  /** Optional. The view of the Realm to retrieve. */
  view?:
    | "REALM_VIEW_UNSPECIFIED"
    | "BASIC"
    | "FULL"
    | "AGGREGATE"
    | (string & {});
  /** Required. The resource name of the Realm to retrieve. */
  name: string;
}

export const GetProjectsLocationsRealmsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    view: Schema.optional(Schema.String).pipe(T.HttpQuery("view")),
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "GET", path: "v1alpha/{+name}" }),
    svc,
  ) as unknown as Schema.Schema<GetProjectsLocationsRealmsRequest>;

export type GetProjectsLocationsRealmsResponse = Realm;
export const GetProjectsLocationsRealmsResponse =
  /*@__PURE__*/ /*#__PURE__*/ Realm;

export type GetProjectsLocationsRealmsError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Gets details of a single Realm. */
export const getProjectsLocationsRealms: API.OperationMethod<
  GetProjectsLocationsRealmsRequest,
  GetProjectsLocationsRealmsResponse,
  GetProjectsLocationsRealmsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetProjectsLocationsRealmsRequest,
  output: GetProjectsLocationsRealmsResponse,
  errors: [NotFound, Forbidden],
}));

export interface ListProjectsLocationsOperationsRequest {
  /** The name of the operation's parent resource. */
  name: string;
  /** The standard list filter. */
  filter?: string;
  /** The standard list page token. */
  pageToken?: string;
  /** The standard list page size. */
  pageSize?: number;
  /** When set to `true`, operations that are reachable are returned as normal, and those that are unreachable are returned in the ListOperationsResponse.unreachable field. This can only be `true` when reading across collections. For example, when `parent` is set to `"projects/example/locations/-"`. This field is not supported by default and will result in an `UNIMPLEMENTED` error if set unless explicitly documented otherwise in service or product specific documentation. */
  returnPartialSuccess?: boolean;
}

export const ListProjectsLocationsOperationsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    filter: Schema.optional(Schema.String).pipe(T.HttpQuery("filter")),
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
    returnPartialSuccess: Schema.optional(Schema.Boolean).pipe(
      T.HttpQuery("returnPartialSuccess"),
    ),
  }).pipe(
    T.Http({ method: "GET", path: "v1alpha/{+name}/operations" }),
    svc,
  ) as unknown as Schema.Schema<ListProjectsLocationsOperationsRequest>;

export type ListProjectsLocationsOperationsResponse = ListOperationsResponse;
export const ListProjectsLocationsOperationsResponse =
  /*@__PURE__*/ /*#__PURE__*/ ListOperationsResponse;

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

export type GetProjectsLocationsOperationsResponse = Operation;
export const GetProjectsLocationsOperationsResponse =
  /*@__PURE__*/ /*#__PURE__*/ Operation;

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

export interface CancelProjectsLocationsOperationsRequest {
  /** The name of the operation resource to be cancelled. */
  name: string;
  /** Request body */
  body?: CancelOperationRequest;
}

export const CancelProjectsLocationsOperationsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    body: Schema.optional(CancelOperationRequest).pipe(T.HttpBody()),
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

export interface CheckAvailabilityProjectsLocationsIpamAdminScopesRequest {
  /** Required. The parent resource name, for example `projects/* /locations/*`. */
  parent: string;
  /** Required. The administrative scopes to check for availability. */
  scopes?: string[];
}

export const CheckAvailabilityProjectsLocationsIpamAdminScopesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    parent: Schema.String.pipe(T.HttpPath("parent")),
    scopes: Schema.optional(Schema.Array(Schema.String)).pipe(
      T.HttpQuery("scopes"),
    ),
  }).pipe(
    T.Http({
      method: "GET",
      path: "v1alpha/{+parent}/ipamAdminScopes:checkAvailability",
    }),
    svc,
  ) as unknown as Schema.Schema<CheckAvailabilityProjectsLocationsIpamAdminScopesRequest>;

export type CheckAvailabilityProjectsLocationsIpamAdminScopesResponse =
  CheckAvailabilityIpamAdminScopesResponse;
export const CheckAvailabilityProjectsLocationsIpamAdminScopesResponse =
  /*@__PURE__*/ /*#__PURE__*/ CheckAvailabilityIpamAdminScopesResponse;

export type CheckAvailabilityProjectsLocationsIpamAdminScopesError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Checks the availability of IpamAdminScopes in a given project and location. */
export const checkAvailabilityProjectsLocationsIpamAdminScopes: API.OperationMethod<
  CheckAvailabilityProjectsLocationsIpamAdminScopesRequest,
  CheckAvailabilityProjectsLocationsIpamAdminScopesResponse,
  CheckAvailabilityProjectsLocationsIpamAdminScopesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: CheckAvailabilityProjectsLocationsIpamAdminScopesRequest,
  output: CheckAvailabilityProjectsLocationsIpamAdminScopesResponse,
  errors: [NotFound, Forbidden],
}));

export interface CreateProjectsLocationsIpamAdminScopesRequest {
  /** Required. The parent resource name where the IpamAdminScope will be created. */
  parent: string;
  /** Required. The ID to use for the IpamAdminScope, which will become the final segment of the resource name. */
  ipamAdminScopeId?: string;
  /** Optional. An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes since the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000). */
  requestId?: string;
  /** Request body */
  body?: IpamAdminScope;
}

export const CreateProjectsLocationsIpamAdminScopesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    parent: Schema.String.pipe(T.HttpPath("parent")),
    ipamAdminScopeId: Schema.optional(Schema.String).pipe(
      T.HttpQuery("ipamAdminScopeId"),
    ),
    requestId: Schema.optional(Schema.String).pipe(T.HttpQuery("requestId")),
    body: Schema.optional(IpamAdminScope).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v1alpha/{+parent}/ipamAdminScopes",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<CreateProjectsLocationsIpamAdminScopesRequest>;

export type CreateProjectsLocationsIpamAdminScopesResponse = Operation;
export const CreateProjectsLocationsIpamAdminScopesResponse =
  /*@__PURE__*/ /*#__PURE__*/ Operation;

export type CreateProjectsLocationsIpamAdminScopesError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Creates a new IpamAdminScope in a given project and location. */
export const createProjectsLocationsIpamAdminScopes: API.OperationMethod<
  CreateProjectsLocationsIpamAdminScopesRequest,
  CreateProjectsLocationsIpamAdminScopesResponse,
  CreateProjectsLocationsIpamAdminScopesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: CreateProjectsLocationsIpamAdminScopesRequest,
  output: CreateProjectsLocationsIpamAdminScopesResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface CleanupProjectsLocationsIpamAdminScopesRequest {
  /** Required. The resource name of the IpamAdminScope to clean up. */
  name: string;
  /** Request body */
  body?: CleanupIpamAdminScopeRequest;
}

export const CleanupProjectsLocationsIpamAdminScopesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    body: Schema.optional(CleanupIpamAdminScopeRequest).pipe(T.HttpBody()),
  }).pipe(
    T.Http({ method: "POST", path: "v1alpha/{+name}:cleanup", hasBody: true }),
    svc,
  ) as unknown as Schema.Schema<CleanupProjectsLocationsIpamAdminScopesRequest>;

export type CleanupProjectsLocationsIpamAdminScopesResponse = Operation;
export const CleanupProjectsLocationsIpamAdminScopesResponse =
  /*@__PURE__*/ /*#__PURE__*/ Operation;

export type CleanupProjectsLocationsIpamAdminScopesError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Cleans up a single IpamAdminScope. */
export const cleanupProjectsLocationsIpamAdminScopes: API.OperationMethod<
  CleanupProjectsLocationsIpamAdminScopesRequest,
  CleanupProjectsLocationsIpamAdminScopesResponse,
  CleanupProjectsLocationsIpamAdminScopesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: CleanupProjectsLocationsIpamAdminScopesRequest,
  output: CleanupProjectsLocationsIpamAdminScopesResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface DeleteProjectsLocationsIpamAdminScopesRequest {
  /** Optional. An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes after the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000). */
  requestId?: string;
  /** Optional. If set to true, all associated resources will be deleted. */
  force?: boolean;
  /** Required. The resource name of the IpamAdminScope to delete. */
  name: string;
}

export const DeleteProjectsLocationsIpamAdminScopesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    requestId: Schema.optional(Schema.String).pipe(T.HttpQuery("requestId")),
    force: Schema.optional(Schema.Boolean).pipe(T.HttpQuery("force")),
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "DELETE", path: "v1alpha/{+name}" }),
    svc,
  ) as unknown as Schema.Schema<DeleteProjectsLocationsIpamAdminScopesRequest>;

export type DeleteProjectsLocationsIpamAdminScopesResponse = Operation;
export const DeleteProjectsLocationsIpamAdminScopesResponse =
  /*@__PURE__*/ /*#__PURE__*/ Operation;

export type DeleteProjectsLocationsIpamAdminScopesError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Deletes a single IpamAdminScope. */
export const deleteProjectsLocationsIpamAdminScopes: API.OperationMethod<
  DeleteProjectsLocationsIpamAdminScopesRequest,
  DeleteProjectsLocationsIpamAdminScopesResponse,
  DeleteProjectsLocationsIpamAdminScopesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: DeleteProjectsLocationsIpamAdminScopesRequest,
  output: DeleteProjectsLocationsIpamAdminScopesResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface GetProjectsLocationsIpamAdminScopesRequest {
  /** Required. The resource name of the IpamAdminScope to retrieve. */
  name: string;
}

export const GetProjectsLocationsIpamAdminScopesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "GET", path: "v1alpha/{+name}" }),
    svc,
  ) as unknown as Schema.Schema<GetProjectsLocationsIpamAdminScopesRequest>;

export type GetProjectsLocationsIpamAdminScopesResponse = IpamAdminScope;
export const GetProjectsLocationsIpamAdminScopesResponse =
  /*@__PURE__*/ /*#__PURE__*/ IpamAdminScope;

export type GetProjectsLocationsIpamAdminScopesError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Gets details of a single IpamAdminScope. */
export const getProjectsLocationsIpamAdminScopes: API.OperationMethod<
  GetProjectsLocationsIpamAdminScopesRequest,
  GetProjectsLocationsIpamAdminScopesResponse,
  GetProjectsLocationsIpamAdminScopesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetProjectsLocationsIpamAdminScopesRequest,
  output: GetProjectsLocationsIpamAdminScopesResponse,
  errors: [NotFound, Forbidden],
}));

export interface DisableProjectsLocationsIpamAdminScopesRequest {
  /** Required. The resource name of the IpamAdminScope to disable. */
  name: string;
  /** Request body */
  body?: DisableIpamAdminScopeRequest;
}

export const DisableProjectsLocationsIpamAdminScopesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    body: Schema.optional(DisableIpamAdminScopeRequest).pipe(T.HttpBody()),
  }).pipe(
    T.Http({ method: "POST", path: "v1alpha/{+name}:disable", hasBody: true }),
    svc,
  ) as unknown as Schema.Schema<DisableProjectsLocationsIpamAdminScopesRequest>;

export type DisableProjectsLocationsIpamAdminScopesResponse = Operation;
export const DisableProjectsLocationsIpamAdminScopesResponse =
  /*@__PURE__*/ /*#__PURE__*/ Operation;

export type DisableProjectsLocationsIpamAdminScopesError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Disables a single IpamAdminScope. */
export const disableProjectsLocationsIpamAdminScopes: API.OperationMethod<
  DisableProjectsLocationsIpamAdminScopesRequest,
  DisableProjectsLocationsIpamAdminScopesResponse,
  DisableProjectsLocationsIpamAdminScopesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: DisableProjectsLocationsIpamAdminScopesRequest,
  output: DisableProjectsLocationsIpamAdminScopesResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface ListProjectsLocationsIpamAdminScopesRequest {
  /** Required. The parent resource name, for example `projects/* /locations/*`. */
  parent: string;
  /** Optional. A token identifying a page of results the server should return. */
  pageToken?: string;
  /** Optional. Requested page size. Server may return fewer items than requested. If unspecified, server will pick an appropriate default. */
  pageSize?: number;
  /** Optional. Hint for how to order the results. */
  orderBy?: string;
  /** Optional. Filter expression to filter the results. */
  filter?: string;
}

export const ListProjectsLocationsIpamAdminScopesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    parent: Schema.String.pipe(T.HttpPath("parent")),
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
    orderBy: Schema.optional(Schema.String).pipe(T.HttpQuery("orderBy")),
    filter: Schema.optional(Schema.String).pipe(T.HttpQuery("filter")),
  }).pipe(
    T.Http({ method: "GET", path: "v1alpha/{+parent}/ipamAdminScopes" }),
    svc,
  ) as unknown as Schema.Schema<ListProjectsLocationsIpamAdminScopesRequest>;

export type ListProjectsLocationsIpamAdminScopesResponse =
  ListIpamAdminScopesResponse;
export const ListProjectsLocationsIpamAdminScopesResponse =
  /*@__PURE__*/ /*#__PURE__*/ ListIpamAdminScopesResponse;

export type ListProjectsLocationsIpamAdminScopesError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Lists IpamAdminScopes in a given project and location. */
export const listProjectsLocationsIpamAdminScopes: API.PaginatedOperationMethod<
  ListProjectsLocationsIpamAdminScopesRequest,
  ListProjectsLocationsIpamAdminScopesResponse,
  ListProjectsLocationsIpamAdminScopesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
  input: ListProjectsLocationsIpamAdminScopesRequest,
  output: ListProjectsLocationsIpamAdminScopesResponse,
  errors: [NotFound, Forbidden],
  pagination: {
    inputToken: "pageToken",
    outputToken: "nextPageToken",
  },
}));

export interface PatchProjectsLocationsIpamAdminScopesRequest {
  /** Optional. Field mask is used to specify the fields to be overwritten in the IpamAdminScope resource by the update. The fields specified in the update_mask are relative to the resource, not the full request. A field will be overwritten if it is in the mask. If the user does not provide a mask then all fields will be overwritten. */
  updateMask?: string;
  /** Optional. An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes since the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000). */
  requestId?: string;
  /** Required. Identifier. The resource name of the IpamAdminScope. */
  name: string;
  /** Request body */
  body?: IpamAdminScope;
}

export const PatchProjectsLocationsIpamAdminScopesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    updateMask: Schema.optional(Schema.String).pipe(T.HttpQuery("updateMask")),
    requestId: Schema.optional(Schema.String).pipe(T.HttpQuery("requestId")),
    name: Schema.String.pipe(T.HttpPath("name")),
    body: Schema.optional(IpamAdminScope).pipe(T.HttpBody()),
  }).pipe(
    T.Http({ method: "PATCH", path: "v1alpha/{+name}", hasBody: true }),
    svc,
  ) as unknown as Schema.Schema<PatchProjectsLocationsIpamAdminScopesRequest>;

export type PatchProjectsLocationsIpamAdminScopesResponse = Operation;
export const PatchProjectsLocationsIpamAdminScopesResponse =
  /*@__PURE__*/ /*#__PURE__*/ Operation;

export type PatchProjectsLocationsIpamAdminScopesError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Updates the parameters of a single IpamAdminScope. */
export const patchProjectsLocationsIpamAdminScopes: API.OperationMethod<
  PatchProjectsLocationsIpamAdminScopesRequest,
  PatchProjectsLocationsIpamAdminScopesResponse,
  PatchProjectsLocationsIpamAdminScopesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: PatchProjectsLocationsIpamAdminScopesRequest,
  output: PatchProjectsLocationsIpamAdminScopesResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface GetProjectsLocationsDiscoveredRangesRequest {
  /** Required. The resource name of the DiscoveredRange to retrieve. */
  name: string;
}

export const GetProjectsLocationsDiscoveredRangesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "GET", path: "v1alpha/{+name}" }),
    svc,
  ) as unknown as Schema.Schema<GetProjectsLocationsDiscoveredRangesRequest>;

export type GetProjectsLocationsDiscoveredRangesResponse = DiscoveredRange;
export const GetProjectsLocationsDiscoveredRangesResponse =
  /*@__PURE__*/ /*#__PURE__*/ DiscoveredRange;

export type GetProjectsLocationsDiscoveredRangesError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Gets details of a single DiscoveredRange. */
export const getProjectsLocationsDiscoveredRanges: API.OperationMethod<
  GetProjectsLocationsDiscoveredRangesRequest,
  GetProjectsLocationsDiscoveredRangesResponse,
  GetProjectsLocationsDiscoveredRangesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetProjectsLocationsDiscoveredRangesRequest,
  output: GetProjectsLocationsDiscoveredRangesResponse,
  errors: [NotFound, Forbidden],
}));

export interface ListProjectsLocationsDiscoveredRangesRequest {
  /** Optional. Filter expression to filter the results. */
  filter?: string;
  /** Optional. Hint for how to order the results. */
  orderBy?: string;
  /** Optional. A token identifying a page of results the server should return. */
  pageToken?: string;
  /** Optional. Requested page size. Server may return fewer items than requested. If unspecified, server will pick an appropriate default. */
  pageSize?: number;
  /** Required. The parent resource name, for example `projects/* /locations/*`. */
  parent: string;
}

export const ListProjectsLocationsDiscoveredRangesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    filter: Schema.optional(Schema.String).pipe(T.HttpQuery("filter")),
    orderBy: Schema.optional(Schema.String).pipe(T.HttpQuery("orderBy")),
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
    parent: Schema.String.pipe(T.HttpPath("parent")),
  }).pipe(
    T.Http({ method: "GET", path: "v1alpha/{+parent}/discoveredRanges" }),
    svc,
  ) as unknown as Schema.Schema<ListProjectsLocationsDiscoveredRangesRequest>;

export type ListProjectsLocationsDiscoveredRangesResponse =
  ListDiscoveredRangesResponse;
export const ListProjectsLocationsDiscoveredRangesResponse =
  /*@__PURE__*/ /*#__PURE__*/ ListDiscoveredRangesResponse;

export type ListProjectsLocationsDiscoveredRangesError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Lists DiscoveredRanges in a given project and location. */
export const listProjectsLocationsDiscoveredRanges: API.PaginatedOperationMethod<
  ListProjectsLocationsDiscoveredRangesRequest,
  ListProjectsLocationsDiscoveredRangesResponse,
  ListProjectsLocationsDiscoveredRangesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
  input: ListProjectsLocationsDiscoveredRangesRequest,
  output: ListProjectsLocationsDiscoveredRangesResponse,
  errors: [NotFound, Forbidden],
  pagination: {
    inputToken: "pageToken",
    outputToken: "nextPageToken",
  },
}));

export interface FindFreeIpRangesProjectsLocationsDiscoveredRangesRequest {
  /** Required. The resource name of the DiscoveredRange to search within. */
  name: string;
  /** Required. The prefix length of the free IP ranges to find. */
  cidrPrefixLength?: number;
  /** Optional. The number of free IP ranges to find. */
  rangeCount?: number;
  /** Optional. An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes since the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000). */
  requestId?: string;
}

export const FindFreeIpRangesProjectsLocationsDiscoveredRangesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    cidrPrefixLength: Schema.optional(Schema.Number).pipe(
      T.HttpQuery("cidrPrefixLength"),
    ),
    rangeCount: Schema.optional(Schema.Number).pipe(T.HttpQuery("rangeCount")),
    requestId: Schema.optional(Schema.String).pipe(T.HttpQuery("requestId")),
  }).pipe(
    T.Http({ method: "GET", path: "v1alpha/{+name}:findFreeIpRanges" }),
    svc,
  ) as unknown as Schema.Schema<FindFreeIpRangesProjectsLocationsDiscoveredRangesRequest>;

export type FindFreeIpRangesProjectsLocationsDiscoveredRangesResponse =
  FindDiscoveredRangeFreeIpRangesResponse;
export const FindFreeIpRangesProjectsLocationsDiscoveredRangesResponse =
  /*@__PURE__*/ /*#__PURE__*/ FindDiscoveredRangeFreeIpRangesResponse;

export type FindFreeIpRangesProjectsLocationsDiscoveredRangesError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Finds free IP ranges in a single DiscoveredRange. */
export const findFreeIpRangesProjectsLocationsDiscoveredRanges: API.OperationMethod<
  FindFreeIpRangesProjectsLocationsDiscoveredRangesRequest,
  FindFreeIpRangesProjectsLocationsDiscoveredRangesResponse,
  FindFreeIpRangesProjectsLocationsDiscoveredRangesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: FindFreeIpRangesProjectsLocationsDiscoveredRangesRequest,
  output: FindFreeIpRangesProjectsLocationsDiscoveredRangesResponse,
  errors: [NotFound, Forbidden],
}));

export interface ShowUtilizationProjectsLocationsDiscoveredRangesRequest {
  /** Required. The resource name of the DiscoveredRange. */
  name: string;
}

export const ShowUtilizationProjectsLocationsDiscoveredRangesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "GET", path: "v1alpha/{+name}:showUtilization" }),
    svc,
  ) as unknown as Schema.Schema<ShowUtilizationProjectsLocationsDiscoveredRangesRequest>;

export type ShowUtilizationProjectsLocationsDiscoveredRangesResponse =
  ShowDiscoveredRangeUtilizationResponse;
export const ShowUtilizationProjectsLocationsDiscoveredRangesResponse =
  /*@__PURE__*/ /*#__PURE__*/ ShowDiscoveredRangeUtilizationResponse;

export type ShowUtilizationProjectsLocationsDiscoveredRangesError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Gets the details of a single DiscoveredRange and its utilization. */
export const showUtilizationProjectsLocationsDiscoveredRanges: API.OperationMethod<
  ShowUtilizationProjectsLocationsDiscoveredRangesRequest,
  ShowUtilizationProjectsLocationsDiscoveredRangesResponse,
  ShowUtilizationProjectsLocationsDiscoveredRangesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: ShowUtilizationProjectsLocationsDiscoveredRangesRequest,
  output: ShowUtilizationProjectsLocationsDiscoveredRangesResponse,
  errors: [NotFound, Forbidden],
}));

export interface GetProjectsLocationsCustomRangesRequest {
  /** Required. The resource name of the CustomRange to retrieve. */
  name: string;
}

export const GetProjectsLocationsCustomRangesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "GET", path: "v1alpha/{+name}" }),
    svc,
  ) as unknown as Schema.Schema<GetProjectsLocationsCustomRangesRequest>;

export type GetProjectsLocationsCustomRangesResponse = CustomRange;
export const GetProjectsLocationsCustomRangesResponse =
  /*@__PURE__*/ /*#__PURE__*/ CustomRange;

export type GetProjectsLocationsCustomRangesError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Gets details of a single CustomRange. */
export const getProjectsLocationsCustomRanges: API.OperationMethod<
  GetProjectsLocationsCustomRangesRequest,
  GetProjectsLocationsCustomRangesResponse,
  GetProjectsLocationsCustomRangesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetProjectsLocationsCustomRangesRequest,
  output: GetProjectsLocationsCustomRangesResponse,
  errors: [NotFound, Forbidden],
}));

export interface ListProjectsLocationsCustomRangesRequest {
  /** Optional. A token identifying a page of results the server should return. */
  pageToken?: string;
  /** Optional. Requested page size. Server may return fewer items than requested. If unspecified, server will pick an appropriate default. */
  pageSize?: number;
  /** Required. The parent resource name, for example `projects/* /locations/*`. */
  parent: string;
  /** Optional. Filter expression to filter the results. */
  filter?: string;
  /** Optional. Hint for how to order the results. */
  orderBy?: string;
}

export const ListProjectsLocationsCustomRangesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
    parent: Schema.String.pipe(T.HttpPath("parent")),
    filter: Schema.optional(Schema.String).pipe(T.HttpQuery("filter")),
    orderBy: Schema.optional(Schema.String).pipe(T.HttpQuery("orderBy")),
  }).pipe(
    T.Http({ method: "GET", path: "v1alpha/{+parent}/customRanges" }),
    svc,
  ) as unknown as Schema.Schema<ListProjectsLocationsCustomRangesRequest>;

export type ListProjectsLocationsCustomRangesResponse =
  ListCustomRangesResponse;
export const ListProjectsLocationsCustomRangesResponse =
  /*@__PURE__*/ /*#__PURE__*/ ListCustomRangesResponse;

export type ListProjectsLocationsCustomRangesError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Lists CustomRanges in a given project and location. */
export const listProjectsLocationsCustomRanges: API.PaginatedOperationMethod<
  ListProjectsLocationsCustomRangesRequest,
  ListProjectsLocationsCustomRangesResponse,
  ListProjectsLocationsCustomRangesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
  input: ListProjectsLocationsCustomRangesRequest,
  output: ListProjectsLocationsCustomRangesResponse,
  errors: [NotFound, Forbidden],
  pagination: {
    inputToken: "pageToken",
    outputToken: "nextPageToken",
  },
}));

export interface PatchProjectsLocationsCustomRangesRequest {
  /** Optional. Field mask is used to specify the fields to be overwritten in the CustomRange resource by the update. The fields specified in the update_mask are relative to the resource, not the full request. A field will be overwritten if it is in the mask. If the user does not provide a mask then all fields will be overwritten. */
  updateMask?: string;
  /** Optional. An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes since the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000). */
  requestId?: string;
  /** Required. Identifier. The resource name of the CustomRange, in the format `projects/{project}/locations/{location}/customRanges/{custom_range}`. */
  name: string;
  /** Request body */
  body?: CustomRange;
}

export const PatchProjectsLocationsCustomRangesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    updateMask: Schema.optional(Schema.String).pipe(T.HttpQuery("updateMask")),
    requestId: Schema.optional(Schema.String).pipe(T.HttpQuery("requestId")),
    name: Schema.String.pipe(T.HttpPath("name")),
    body: Schema.optional(CustomRange).pipe(T.HttpBody()),
  }).pipe(
    T.Http({ method: "PATCH", path: "v1alpha/{+name}", hasBody: true }),
    svc,
  ) as unknown as Schema.Schema<PatchProjectsLocationsCustomRangesRequest>;

export type PatchProjectsLocationsCustomRangesResponse = Operation;
export const PatchProjectsLocationsCustomRangesResponse =
  /*@__PURE__*/ /*#__PURE__*/ Operation;

export type PatchProjectsLocationsCustomRangesError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Updates the parameters of a single CustomRange. */
export const patchProjectsLocationsCustomRanges: API.OperationMethod<
  PatchProjectsLocationsCustomRangesRequest,
  PatchProjectsLocationsCustomRangesResponse,
  PatchProjectsLocationsCustomRangesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: PatchProjectsLocationsCustomRangesRequest,
  output: PatchProjectsLocationsCustomRangesResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface FindFreeIpRangesProjectsLocationsCustomRangesRequest {
  /** Required. The prefix length of the free IP ranges to find. */
  cidrPrefixLength?: number;
  /** Optional. The number of free IP ranges to find. */
  rangeCount?: number;
  /** Optional. An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes since the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000). */
  requestId?: string;
  /** Required. The resource name of the CustomRange to search within. */
  name: string;
}

export const FindFreeIpRangesProjectsLocationsCustomRangesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    cidrPrefixLength: Schema.optional(Schema.Number).pipe(
      T.HttpQuery("cidrPrefixLength"),
    ),
    rangeCount: Schema.optional(Schema.Number).pipe(T.HttpQuery("rangeCount")),
    requestId: Schema.optional(Schema.String).pipe(T.HttpQuery("requestId")),
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "GET", path: "v1alpha/{+name}:findFreeIpRanges" }),
    svc,
  ) as unknown as Schema.Schema<FindFreeIpRangesProjectsLocationsCustomRangesRequest>;

export type FindFreeIpRangesProjectsLocationsCustomRangesResponse =
  FindCustomRangeFreeIpRangesResponse;
export const FindFreeIpRangesProjectsLocationsCustomRangesResponse =
  /*@__PURE__*/ /*#__PURE__*/ FindCustomRangeFreeIpRangesResponse;

export type FindFreeIpRangesProjectsLocationsCustomRangesError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Finds free IP ranges in a single CustomRange. */
export const findFreeIpRangesProjectsLocationsCustomRanges: API.OperationMethod<
  FindFreeIpRangesProjectsLocationsCustomRangesRequest,
  FindFreeIpRangesProjectsLocationsCustomRangesResponse,
  FindFreeIpRangesProjectsLocationsCustomRangesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: FindFreeIpRangesProjectsLocationsCustomRangesRequest,
  output: FindFreeIpRangesProjectsLocationsCustomRangesResponse,
  errors: [NotFound, Forbidden],
}));

export interface ShowUtilizationProjectsLocationsCustomRangesRequest {
  /** Required. The resource name of the CustomRange. */
  name: string;
}

export const ShowUtilizationProjectsLocationsCustomRangesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "GET", path: "v1alpha/{+name}:showUtilization" }),
    svc,
  ) as unknown as Schema.Schema<ShowUtilizationProjectsLocationsCustomRangesRequest>;

export type ShowUtilizationProjectsLocationsCustomRangesResponse =
  ShowCustomRangeUtilizationResponse;
export const ShowUtilizationProjectsLocationsCustomRangesResponse =
  /*@__PURE__*/ /*#__PURE__*/ ShowCustomRangeUtilizationResponse;

export type ShowUtilizationProjectsLocationsCustomRangesError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Gets the details of a single CustomRange and its utilization. */
export const showUtilizationProjectsLocationsCustomRanges: API.OperationMethod<
  ShowUtilizationProjectsLocationsCustomRangesRequest,
  ShowUtilizationProjectsLocationsCustomRangesResponse,
  ShowUtilizationProjectsLocationsCustomRangesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: ShowUtilizationProjectsLocationsCustomRangesRequest,
  output: ShowUtilizationProjectsLocationsCustomRangesResponse,
  errors: [NotFound, Forbidden],
}));

export interface CreateProjectsLocationsCustomRangesRequest {
  /** Optional. An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes since the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000). */
  requestId?: string;
  /** Required. The parent resource name where the CustomRange will be created. */
  parent: string;
  /** Required. The ID to use for the CustomRange, which will become the final segment of the resource name. */
  customRangeId?: string;
  /** Request body */
  body?: CustomRange;
}

export const CreateProjectsLocationsCustomRangesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    requestId: Schema.optional(Schema.String).pipe(T.HttpQuery("requestId")),
    parent: Schema.String.pipe(T.HttpPath("parent")),
    customRangeId: Schema.optional(Schema.String).pipe(
      T.HttpQuery("customRangeId"),
    ),
    body: Schema.optional(CustomRange).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v1alpha/{+parent}/customRanges",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<CreateProjectsLocationsCustomRangesRequest>;

export type CreateProjectsLocationsCustomRangesResponse = Operation;
export const CreateProjectsLocationsCustomRangesResponse =
  /*@__PURE__*/ /*#__PURE__*/ Operation;

export type CreateProjectsLocationsCustomRangesError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Creates a new CustomRange in a given project and location. */
export const createProjectsLocationsCustomRanges: API.OperationMethod<
  CreateProjectsLocationsCustomRangesRequest,
  CreateProjectsLocationsCustomRangesResponse,
  CreateProjectsLocationsCustomRangesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: CreateProjectsLocationsCustomRangesRequest,
  output: CreateProjectsLocationsCustomRangesResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface DeleteProjectsLocationsCustomRangesRequest {
  /** Optional. An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes after the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000). */
  requestId?: string;
  /** Optional. If set to true, all associated resources will be deleted. */
  force?: boolean;
  /** Required. The resource name of the CustomRange to delete. */
  name: string;
}

export const DeleteProjectsLocationsCustomRangesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    requestId: Schema.optional(Schema.String).pipe(T.HttpQuery("requestId")),
    force: Schema.optional(Schema.Boolean).pipe(T.HttpQuery("force")),
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "DELETE", path: "v1alpha/{+name}" }),
    svc,
  ) as unknown as Schema.Schema<DeleteProjectsLocationsCustomRangesRequest>;

export type DeleteProjectsLocationsCustomRangesResponse = Operation;
export const DeleteProjectsLocationsCustomRangesResponse =
  /*@__PURE__*/ /*#__PURE__*/ Operation;

export type DeleteProjectsLocationsCustomRangesError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Deletes a single CustomRange. */
export const deleteProjectsLocationsCustomRanges: API.OperationMethod<
  DeleteProjectsLocationsCustomRangesRequest,
  DeleteProjectsLocationsCustomRangesResponse,
  DeleteProjectsLocationsCustomRangesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: DeleteProjectsLocationsCustomRangesRequest,
  output: DeleteProjectsLocationsCustomRangesResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));
