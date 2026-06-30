// ==========================================================================
// Network Management API (networkmanagement v1)
// DO NOT EDIT - Generated from GCP Discovery Document
// ==========================================================================

import * as Schema from "@distilled.cloud/core/schema";
import * as API from "../client/api.ts";
import * as T from "../traits.ts";
import type { Credentials } from "../credentials.ts";
import type { DefaultErrors } from "../errors.ts";
import type * as HttpClient from "effect/unstable/http/HttpClient";

// Service metadata
const svc = T.Service({
  name: "networkmanagement",
  version: "v1",
  rootUrl: "https://networkmanagement.googleapis.com/",
  servicePath: "",
});

// ==========================================================================
// Schemas
// ==========================================================================

export interface Location {
  /** Resource name for the location, which may vary between implementations. For example: `"projects/example-project/locations/us-east1"` */
  name?: string;
  /** The canonical id for this location. For example: `"us-east1"`. */
  locationId?: string;
  /** The friendly name for this location, typically a nearby city name. For example, "Tokyo". */
  displayName?: string;
  /** Cross-service attributes for the location. For example {"cloud.googleapis.com/region": "us-east1"} */
  labels?: Record<string, string>;
  /** Service-specific metadata. For example the available capacity at the given location. */
  metadata?: Record<string, unknown>;
}

export const Location: Schema.Codec<Location> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.optional(Schema.String),
    locationId: Schema.optional(Schema.String),
    displayName: Schema.optional(Schema.String),
    labels: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    metadata: Schema.optional(Schema.Record(Schema.String, Schema.Unknown)),
  }).annotate({ identifier: "Location" });

export interface ListLocationsResponse {
  /** A list of locations that matches the specified filter in the request. */
  locations?: ReadonlyArray<Location>;
  /** The standard List next-page token. */
  nextPageToken?: string;
}

export const ListLocationsResponse: Schema.Codec<ListLocationsResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    locations: Schema.optional(Schema.Array(Location)),
    nextPageToken: Schema.optional(Schema.String),
  }).annotate({ identifier: "ListLocationsResponse" });

export interface Status {
  /** The status code, which should be an enum value of google.rpc.Code. */
  code?: number;
  /** A developer-facing error message, which should be in English. Any user-facing error message should be localized and sent in the google.rpc.Status.details field, or localized by the client. */
  message?: string;
  /** A list of messages that carry the error details. There is a common set of message types for APIs to use. */
  details?: ReadonlyArray<Record<string, unknown>>;
}

export const Status: Schema.Codec<Status> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    code: Schema.optional(Schema.Number),
    message: Schema.optional(Schema.String),
    details: Schema.optional(
      Schema.Array(Schema.Record(Schema.String, Schema.Unknown)),
    ),
  }).annotate({ identifier: "Status" });

export interface Operation {
  /** The server-assigned name, which is only unique within the same service that originally returns it. If you use the default HTTP mapping, the `name` should be a resource name ending with `operations/{unique_id}`. */
  name?: string;
  /** Service-specific metadata associated with the operation. It typically contains progress information and common metadata such as create time. Some services might not provide such metadata. Any method that returns a long-running operation should document the metadata type, if any. */
  metadata?: Record<string, unknown>;
  /** If the value is `false`, it means the operation is still in progress. If `true`, the operation is completed, and either `error` or `response` is available. */
  done?: boolean;
  /** The error result of the operation in case of failure or cancellation. */
  error?: Status;
  /** The normal, successful response of the operation. If the original method returns no data on success, such as `Delete`, the response is `google.protobuf.Empty`. If the original method is standard `Get`/`Create`/`Update`, the response should be the resource. For other methods, the response should have the type `XxxResponse`, where `Xxx` is the original method name. For example, if the original method name is `TakeSnapshot()`, the inferred response type is `TakeSnapshotResponse`. */
  response?: Record<string, unknown>;
}

export const Operation: Schema.Codec<Operation> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.optional(Schema.String),
    metadata: Schema.optional(Schema.Record(Schema.String, Schema.Unknown)),
    done: Schema.optional(Schema.Boolean),
    error: Schema.optional(Status),
    response: Schema.optional(Schema.Record(Schema.String, Schema.Unknown)),
  }).annotate({ identifier: "Operation" });

export interface ListOperationsResponse {
  /** A list of operations that matches the specified filter in the request. */
  operations?: ReadonlyArray<Operation>;
  /** The standard List next-page token. */
  nextPageToken?: string;
  /** Unordered list. Unreachable resources. Populated when the request sets `ListOperationsRequest.return_partial_success` and reads across collections. For example, when attempting to list all resources across all supported locations. */
  unreachable?: ReadonlyArray<string>;
}

export const ListOperationsResponse: Schema.Codec<ListOperationsResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    operations: Schema.optional(Schema.Array(Operation)),
    nextPageToken: Schema.optional(Schema.String),
    unreachable: Schema.optional(Schema.Array(Schema.String)),
  }).annotate({ identifier: "ListOperationsResponse" });

export interface Empty {}

export const Empty: Schema.Codec<Empty> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).annotate({
    identifier: "Empty",
  });

export interface CancelOperationRequest {}

export const CancelOperationRequest: Schema.Codec<CancelOperationRequest> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).annotate({
    identifier: "CancelOperationRequest",
  });

export interface NetworkMonitoringProvider {
  /** Output only. Identifier. Name of the resource. Format: `projects/{project}/locations/{location}/networkMonitoringProviders/{network_monitoring_provider}` */
  name?: string;
  /** Output only. The time the NetworkMonitoringProvider was created. */
  createTime?: string;
  /** Output only. The time the NetworkMonitoringProvider was updated. */
  updateTime?: string;
  /** Required. Type of the NetworkMonitoringProvider. */
  providerType?: "PROVIDER_TYPE_UNSPECIFIED" | "EXTERNAL" | (string & {});
  /** Output only. Link to the provider's UI. */
  providerUri?: string;
  /** Output only. State of the NetworkMonitoringProvider. */
  state?:
    | "STATE_UNSPECIFIED"
    | "ACTIVATING"
    | "ACTIVE"
    | "SUSPENDING"
    | "SUSPENDED"
    | "DELETING"
    | "DELETED"
    | (string & {});
  /** Output only. The list of error messages detected for the NetworkMonitoringProvider. */
  errors?: ReadonlyArray<string>;
}

export const NetworkMonitoringProvider: Schema.Codec<NetworkMonitoringProvider> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.optional(Schema.String),
    createTime: Schema.optional(Schema.String),
    updateTime: Schema.optional(Schema.String),
    providerType: Schema.optional(Schema.String),
    providerUri: Schema.optional(Schema.String),
    state: Schema.optional(Schema.String),
    errors: Schema.optional(Schema.Array(Schema.String)),
  }).annotate({ identifier: "NetworkMonitoringProvider" });

export interface ListNetworkMonitoringProvidersResponse {
  /** The list of NetworkMonitoringProvider */
  networkMonitoringProviders?: ReadonlyArray<NetworkMonitoringProvider>;
  /** A token identifying a page of results the server should return. */
  nextPageToken?: string;
}

export const ListNetworkMonitoringProvidersResponse: Schema.Codec<ListNetworkMonitoringProvidersResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    networkMonitoringProviders: Schema.optional(
      Schema.Array(NetworkMonitoringProvider),
    ),
    nextPageToken: Schema.optional(Schema.String),
  }).annotate({ identifier: "ListNetworkMonitoringProvidersResponse" });

export interface GenerateProviderAccessTokenResponse {
  /** Provider access token for the NetworkMonitoringProvider resource. */
  providerAccessToken?: string;
}

export const GenerateProviderAccessTokenResponse: Schema.Codec<GenerateProviderAccessTokenResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    providerAccessToken: Schema.optional(Schema.String),
  }).annotate({ identifier: "GenerateProviderAccessTokenResponse" });

export interface HttpBody {
  /** The HTTP Content-Type header value specifying the content type of the body. */
  contentType?: string;
  /** The HTTP request/response body as raw binary. */
  data?: string;
  /** Application specific response metadata. Must be set in the first response for streaming APIs. */
  extensions?: ReadonlyArray<Record<string, unknown>>;
}

export const HttpBody: Schema.Codec<HttpBody> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    contentType: Schema.optional(Schema.String),
    data: Schema.optional(Schema.String),
    extensions: Schema.optional(
      Schema.Array(Schema.Record(Schema.String, Schema.Unknown)),
    ),
  }).annotate({ identifier: "HttpBody" });

export interface GenerateMonitoringPointConfigResponse {
  /** The Monitoring Point configuration of the provider in JSON format. */
  config?: Record<string, unknown>;
}

export const GenerateMonitoringPointConfigResponse: Schema.Codec<GenerateMonitoringPointConfigResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    config: Schema.optional(Schema.Record(Schema.String, Schema.Unknown)),
  }).annotate({ identifier: "GenerateMonitoringPointConfigResponse" });

export interface GeoLocation {
  /** Formatted address. */
  formattedAddress?: string;
  /** Unicode CLDR region code. */
  regionCode?: string;
}

export const GeoLocation: Schema.Codec<GeoLocation> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    formattedAddress: Schema.optional(Schema.String),
    regionCode: Schema.optional(Schema.String),
  }).annotate({ identifier: "GeoLocation" });

export interface NetworkInterface {
  /** Output only. The name of the network interface. Examples: eth0, eno1 */
  interfaceName?: string;
  /** Output only. Speed of the interface in millions of bits per second. */
  speed?: string;
  /** Output only. The IP address of the interface. */
  ipAddress?: string;
  /** Output only. The IP address of the interface and subnet mask in CIDR format. Examples: 192.168.1.0/24, 2001:db8::/32 */
  cidr?: string;
  /** Output only. The MAC address of the interface. */
  macAddress?: string;
  /** Output only. The description of the interface. */
  adapterDescription?: string;
  /** Output only. The id of the VLAN. */
  vlanId?: string;
}

export const NetworkInterface: Schema.Codec<NetworkInterface> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    interfaceName: Schema.optional(Schema.String),
    speed: Schema.optional(Schema.String),
    ipAddress: Schema.optional(Schema.String),
    cidr: Schema.optional(Schema.String),
    macAddress: Schema.optional(Schema.String),
    adapterDescription: Schema.optional(Schema.String),
    vlanId: Schema.optional(Schema.String),
  }).annotate({ identifier: "NetworkInterface" });

export interface ProviderTag {
  /** Output only. The category of the provider tag. */
  category?: string;
  /** Output only. The value of the provider tag. */
  value?: string;
  /** Output only. The resource type of the provider tag. */
  resourceType?:
    | "RESOURCE_TYPE_UNSPECIFIED"
    | "NETWORK_PATH"
    | "WEB_PATH"
    | "MONITORING_POLICY"
    | "MONITORING_POINT"
    | "MONITORING_POINT_RULE"
    | "MONITORING_POINT_RULE_AUTO"
    | (string & {});
}

export const ProviderTag: Schema.Codec<ProviderTag> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    category: Schema.optional(Schema.String),
    value: Schema.optional(Schema.String),
    resourceType: Schema.optional(Schema.String),
  }).annotate({ identifier: "ProviderTag" });

export interface Host {
  /** Output only. The operating system of the host. */
  os?: string;
  /** Output only. The cloud provider of the host. */
  cloudProvider?: string;
  /** Output only. The cloud project id of the host. */
  cloudProjectId?: string;
  /** Output only. The cloud instance id of the host. */
  cloudInstanceId?: string;
  /** Output only. The cloud region of the host. */
  cloudRegion?: string;
  /** Output only. The cloud zone of the host. */
  cloudZone?: string;
  /** Output only. The ids of cloud virtual networks of the host. */
  cloudVirtualNetworkIds?: ReadonlyArray<string>;
}

export const Host: Schema.Codec<Host> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    os: Schema.optional(Schema.String),
    cloudProvider: Schema.optional(Schema.String),
    cloudProjectId: Schema.optional(Schema.String),
    cloudInstanceId: Schema.optional(Schema.String),
    cloudRegion: Schema.optional(Schema.String),
    cloudZone: Schema.optional(Schema.String),
    cloudVirtualNetworkIds: Schema.optional(Schema.Array(Schema.String)),
  }).annotate({ identifier: "Host" });

export interface MonitoringPoint {
  /** Identifier. Name of the resource. Format: `projects/{project}/locations/{location}/networkMonitoringProviders/{network_monitoring_provider}/monitoringPoints/{monitoring_point}` */
  name?: string;
  /** Output only. The time the MonitoringPoint was created. */
  createTime?: string;
  /** Output only. The time the MonitoringPoint was updated. */
  updateTime?: string;
  /** Output only. Display name of the MonitoringPoint. */
  displayName?: string;
  /** Output only. IP address visible when MonitoringPoint connects to the provider. */
  originatingIp?: string;
  /** Output only. Version of the software running on the MonitoringPoint. */
  version?: string;
  /** Output only. Deployment type of the MonitoringPoint. */
  type?: string;
  /** Output only. Connection status of the MonitoringPoint. */
  connectionStatus?:
    | "CONNECTION_STATUS_UNSPECIFIED"
    | "ONLINE"
    | "OFFLINE"
    | (string & {});
  /** Output only. The hostname of the MonitoringPoint. */
  hostname?: string;
  /** Output only. The geographical location of the MonitoringPoint. */
  geoLocation?: GeoLocation;
  /** Output only. The type of upgrade available for the MonitoringPoint. */
  upgradeType?:
    | "UPGRADE_TYPE_UNSPECIFIED"
    | "MANUAL"
    | "MANAGED"
    | "SCHEDULED"
    | "AUTO"
    | "EXTERNAL"
    | (string & {});
  /** Output only. The network interfaces of the MonitoringPoint. */
  networkInterfaces?: ReadonlyArray<NetworkInterface>;
  /** Output only. The codes of errors detected in the MonitoringPoint. */
  errors?: ReadonlyArray<
    | "ERROR_CODE_UNSPECIFIED"
    | "NTP_ERROR"
    | "UPGRADE_ERROR"
    | "DOWNLOAD_FAILED"
    | (string & {})
  >;
  /** Output only. Indicates if automaitic geographic location is enabled for the MonitoringPoint. */
  autoGeoLocationEnabled?: boolean;
  /** Output only. The provider tags of the MonitoringPoint. */
  providerTags?: ReadonlyArray<ProviderTag>;
  /** Output only. The host information of the MonitoringPoint. */
  host?: Host;
  /** Output only. Indicates if an upgrade is available for the MonitoringPoint. */
  upgradeAvailable?: boolean;
  /** Output only. The GUID of the MonitoringPoint. */
  guid?: string;
  /** Output only. The deployment type of the MonitoringPoint. */
  deploymentType?:
    | "DEPLOYMENT_TYPE_UNSPECIFIED"
    | "DOCKER"
    | "PODMAN"
    | "HELM"
    | (string & {});
}

export const MonitoringPoint: Schema.Codec<MonitoringPoint> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.optional(Schema.String),
    createTime: Schema.optional(Schema.String),
    updateTime: Schema.optional(Schema.String),
    displayName: Schema.optional(Schema.String),
    originatingIp: Schema.optional(Schema.String),
    version: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    connectionStatus: Schema.optional(Schema.String),
    hostname: Schema.optional(Schema.String),
    geoLocation: Schema.optional(GeoLocation),
    upgradeType: Schema.optional(Schema.String),
    networkInterfaces: Schema.optional(Schema.Array(NetworkInterface)),
    errors: Schema.optional(Schema.Array(Schema.String)),
    autoGeoLocationEnabled: Schema.optional(Schema.Boolean),
    providerTags: Schema.optional(Schema.Array(ProviderTag)),
    host: Schema.optional(Host),
    upgradeAvailable: Schema.optional(Schema.Boolean),
    guid: Schema.optional(Schema.String),
    deploymentType: Schema.optional(Schema.String),
  }).annotate({ identifier: "MonitoringPoint" });

export interface ListMonitoringPointsResponse {
  /** The list of MonitoringPoints. */
  monitoringPoints?: ReadonlyArray<MonitoringPoint>;
  /** A token identifying a page of results the server should return. */
  nextPageToken?: string;
}

export const ListMonitoringPointsResponse: Schema.Codec<ListMonitoringPointsResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    monitoringPoints: Schema.optional(Schema.Array(MonitoringPoint)),
    nextPageToken: Schema.optional(Schema.String),
  }).annotate({ identifier: "ListMonitoringPointsResponse" });

export interface NetworkPath {
  /** Identifier. Name of the resource. Format: `projects/{project}/locations/{location}/networkMonitoringProviders/{network_monitoring_provider}/networkPaths/{network_path}` */
  name?: string;
  /** Output only. The time the NetworkPath was created. */
  createTime?: string;
  /** Output only. The time the NetworkPath was updated. */
  updateTime?: string;
  /** Output only. Provider's UUID of the source MonitoringPoint. This id may not point to a resource in the Google Cloud. */
  sourceMonitoringPointId?: string;
  /** Output only. Provider's UUID of the destination MonitoringPoint. This id may not point to a resource in the Google Cloud. */
  destinationMonitoringPointId?: string;
  /** Output only. IP address or hostname of the network path destination. */
  destination?: string;
  /** Output only. Indicates if the network path is dual ended. When true, the network path is measured both: from both source to destination, and from destination to source. When false, the network path is measured from the source through the destination back to the source (round trip measurement). */
  dualEnded?: boolean;
  /** Output only. The display name of the network path. */
  displayName?: string;
  /** Output only. Geographical location of the destination MonitoringPoint. */
  destinationGeoLocation?: GeoLocation;
  /** Output only. The network protocol of the network path. */
  networkProtocol?:
    | "NETWORK_PROTOCOL_UNSPECIFIED"
    | "ICMP"
    | "UDP"
    | "TCP"
    | (string & {});
  /** Output only. Is monitoring enabled for the network path. */
  monitoringEnabled?: boolean;
  /** Output only. The monitoring status of the network path. */
  monitoringStatus?:
    | "MONITORING_STATUS_UNSPECIFIED"
    | "MONITORING"
    | "POLICY_MISMATCH"
    | "MONITORING_POINT_OFFLINE"
    | "DISABLED"
    | (string & {});
  /** Output only. The provider tags of the network path. */
  providerTags?: ReadonlyArray<ProviderTag>;
  /** Output only. ID of monitoring policy. */
  monitoringPolicyId?: string;
  /** Output only. Display name of the monitoring policy. */
  monitoringPolicyDisplayName?: string;
  /** Output only. Link to provider's UI; link shows the NetworkPath. */
  providerUiUri?: string;
}

export const NetworkPath: Schema.Codec<NetworkPath> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.optional(Schema.String),
    createTime: Schema.optional(Schema.String),
    updateTime: Schema.optional(Schema.String),
    sourceMonitoringPointId: Schema.optional(Schema.String),
    destinationMonitoringPointId: Schema.optional(Schema.String),
    destination: Schema.optional(Schema.String),
    dualEnded: Schema.optional(Schema.Boolean),
    displayName: Schema.optional(Schema.String),
    destinationGeoLocation: Schema.optional(GeoLocation),
    networkProtocol: Schema.optional(Schema.String),
    monitoringEnabled: Schema.optional(Schema.Boolean),
    monitoringStatus: Schema.optional(Schema.String),
    providerTags: Schema.optional(Schema.Array(ProviderTag)),
    monitoringPolicyId: Schema.optional(Schema.String),
    monitoringPolicyDisplayName: Schema.optional(Schema.String),
    providerUiUri: Schema.optional(Schema.String),
  }).annotate({ identifier: "NetworkPath" });

export interface ListNetworkPathsResponse {
  /** The list of NetworkPath */
  networkPaths?: ReadonlyArray<NetworkPath>;
  /** A token identifying a page of results the server should return. */
  nextPageToken?: string;
}

export const ListNetworkPathsResponse: Schema.Codec<ListNetworkPathsResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    networkPaths: Schema.optional(Schema.Array(NetworkPath)),
    nextPageToken: Schema.optional(Schema.String),
  }).annotate({ identifier: "ListNetworkPathsResponse" });

export interface WebPath {
  /** Identifier. Name of the resource. Format: `projects/{project}/locations/{location}/networkMonitoringProviders/{network_monitoring_provider}/webPaths/{web_path}` */
  name?: string;
  /** Output only. The time the WebPath was created. */
  createTime?: string;
  /** Output only. The time the WebPath was updated. */
  updateTime?: string;
  /** Output only. ID of the source MonitoringPoint. */
  sourceMonitoringPointId?: string;
  /** Output only. Display name of the WebPath. */
  displayName?: string;
  /** Output only. Web monitoring target. */
  destination?: string;
  /** Output only. Is monitoring enabled for the WebPath. */
  monitoringEnabled?: boolean;
  /** Output only. The monitoring status of the WebPath. */
  monitoringStatus?:
    | "MONITORING_STATUS_UNSPECIFIED"
    | "MONITORING"
    | "POLICY_MISMATCH"
    | "MONITORING_POINT_OFFLINE"
    | "DISABLED"
    | (string & {});
  /** Output only. Monitoring interval. */
  interval?: string;
  /** Output only. The workflow type of the WebPath. */
  workflowType?:
    | "WORKFLOW_TYPE_UNSPECIFIED"
    | "BROWSER"
    | "HTTP"
    | (string & {});
  /** Output only. Provider's UUID of the related NetworkPath. */
  relatedNetworkPathId?: string;
  /** Output only. The provider tags of the web path. */
  providerTags?: ReadonlyArray<ProviderTag>;
  /** Output only. ID of the monitoring policy. */
  monitoringPolicyId?: string;
  /** Output only. Display name of the monitoring policy. */
  monitoringPolicyDisplayName?: string;
  /** Output only. Link to provider's UI; link shows the WebPath. */
  providerUiUri?: string;
  /** Output only. Geographical location of the destination. */
  destinationGeoLocation?: GeoLocation;
}

export const WebPath: Schema.Codec<WebPath> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.optional(Schema.String),
    createTime: Schema.optional(Schema.String),
    updateTime: Schema.optional(Schema.String),
    sourceMonitoringPointId: Schema.optional(Schema.String),
    displayName: Schema.optional(Schema.String),
    destination: Schema.optional(Schema.String),
    monitoringEnabled: Schema.optional(Schema.Boolean),
    monitoringStatus: Schema.optional(Schema.String),
    interval: Schema.optional(Schema.String),
    workflowType: Schema.optional(Schema.String),
    relatedNetworkPathId: Schema.optional(Schema.String),
    providerTags: Schema.optional(Schema.Array(ProviderTag)),
    monitoringPolicyId: Schema.optional(Schema.String),
    monitoringPolicyDisplayName: Schema.optional(Schema.String),
    providerUiUri: Schema.optional(Schema.String),
    destinationGeoLocation: Schema.optional(GeoLocation),
  }).annotate({ identifier: "WebPath" });

export interface ListWebPathsResponse {
  /** The list of WebPath. */
  webPaths?: ReadonlyArray<WebPath>;
  /** A token identifying a page of results the server should return. */
  nextPageToken?: string;
}

export const ListWebPathsResponse: Schema.Codec<ListWebPathsResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    webPaths: Schema.optional(Schema.Array(WebPath)),
    nextPageToken: Schema.optional(Schema.String),
  }).annotate({ identifier: "ListWebPathsResponse" });

export interface CloudFunctionEndpoint {
  /** A [Cloud Function](https://cloud.google.com/functions) name. */
  uri?: string;
}

export const CloudFunctionEndpoint: Schema.Codec<CloudFunctionEndpoint> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    uri: Schema.optional(Schema.String),
  }).annotate({ identifier: "CloudFunctionEndpoint" });

export interface AppEngineVersionEndpoint {
  /** An [App Engine](https://cloud.google.com/appengine) [service version](https://cloud.google.com/appengine/docs/admin-api/reference/rest/v1/apps.services.versions) name. */
  uri?: string;
}

export const AppEngineVersionEndpoint: Schema.Codec<AppEngineVersionEndpoint> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    uri: Schema.optional(Schema.String),
  }).annotate({ identifier: "AppEngineVersionEndpoint" });

export interface CloudRunRevisionEndpoint {
  /** A [Cloud Run](https://cloud.google.com/run) [revision](https://cloud.google.com/run/docs/reference/rest/v1/namespaces.revisions/get) URI. The format is: projects/{project}/locations/{location}/revisions/{revision} */
  uri?: string;
  /** Output only. The URI of the Cloud Run service that the revision belongs to. The format is: projects/{project}/locations/{location}/services/{service} */
  serviceUri?: string;
}

export const CloudRunRevisionEndpoint: Schema.Codec<CloudRunRevisionEndpoint> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    uri: Schema.optional(Schema.String),
    serviceUri: Schema.optional(Schema.String),
  }).annotate({ identifier: "CloudRunRevisionEndpoint" });

export interface Endpoint {
  /** The IP address of the endpoint, which can be an external or internal IP. */
  ipAddress?: string;
  /** The IP protocol port of the endpoint. Only applicable when protocol is TCP or UDP. */
  port?: number;
  /** A Compute Engine instance URI. */
  instance?: string;
  /** A forwarding rule and its corresponding IP address represent the frontend configuration of a Google Cloud load balancer. Forwarding rules are also used for protocol forwarding, Private Service Connect and other network services to provide forwarding information in the control plane. Applicable only to destination endpoint. Format: `projects/{project}/global/forwardingRules/{id}` or `projects/{project}/regions/{region}/forwardingRules/{id}` */
  forwardingRule?: string;
  /** Output only. Specifies the type of the target of the forwarding rule. */
  forwardingRuleTarget?:
    | "FORWARDING_RULE_TARGET_UNSPECIFIED"
    | "INSTANCE"
    | "LOAD_BALANCER"
    | "VPN_GATEWAY"
    | "PSC"
    | (string & {});
  /** Output only. ID of the load balancer the forwarding rule points to. Empty for forwarding rules not related to load balancers. */
  loadBalancerId?: string;
  /** Output only. Type of the load balancer the forwarding rule points to. */
  loadBalancerType?:
    | "LOAD_BALANCER_TYPE_UNSPECIFIED"
    | "HTTPS_ADVANCED_LOAD_BALANCER"
    | "HTTPS_LOAD_BALANCER"
    | "REGIONAL_HTTPS_LOAD_BALANCER"
    | "INTERNAL_HTTPS_LOAD_BALANCER"
    | "SSL_PROXY_LOAD_BALANCER"
    | "TCP_PROXY_LOAD_BALANCER"
    | "INTERNAL_TCP_PROXY_LOAD_BALANCER"
    | "NETWORK_LOAD_BALANCER"
    | "LEGACY_NETWORK_LOAD_BALANCER"
    | "TCP_UDP_INTERNAL_LOAD_BALANCER"
    | (string & {});
  /** A cluster URI for [Google Kubernetes Engine cluster control plane](https://cloud.google.com/kubernetes-engine/docs/concepts/cluster-architecture). */
  gkeMasterCluster?: string;
  /** DNS endpoint of [Google Kubernetes Engine cluster control plane](https://cloud.google.com/kubernetes-engine/docs/concepts/cluster-architecture). Requires gke_master_cluster to be set, can't be used simultaneoulsly with ip_address or network. Applicable only to destination endpoint. */
  fqdn?: string;
  /** A [Cloud SQL](https://cloud.google.com/sql) instance URI. */
  cloudSqlInstance?: string;
  /** A [Redis Instance](https://cloud.google.com/memorystore/docs/redis) URI. Applicable only to destination endpoint. */
  redisInstance?: string;
  /** A [Redis Cluster](https://cloud.google.com/memorystore/docs/cluster) URI. Applicable only to destination endpoint. */
  redisCluster?: string;
  /** A [GKE Pod](https://cloud.google.com/kubernetes-engine/docs/concepts/pod) URI. */
  gkePod?: string;
  /** A [DMS Private Connection](https://docs.cloud.google.com/database-migration/docs/reference/rest/v1/projects.locations.privateConnections) name format: projects/{project}/locations/{location}/privateConnections/{privateConnection}. */
  dmsPrivateConnection?: string;
  /** A [Cloud Function](https://cloud.google.com/functions). Applicable only to source endpoint. */
  cloudFunction?: CloudFunctionEndpoint;
  /** An [App Engine](https://cloud.google.com/appengine) [service version](https://cloud.google.com/appengine/docs/admin-api/reference/rest/v1/apps.services.versions). Applicable only to source endpoint. */
  appEngineVersion?: AppEngineVersionEndpoint;
  /** A [Cloud Run](https://cloud.google.com/run) [revision](https://cloud.google.com/run/docs/reference/rest/v1/namespaces.revisions/get) Applicable only to source endpoint. */
  cloudRunRevision?: CloudRunRevisionEndpoint;
  /** A [Cloud Run](https://cloud.google.com/run) [job](https://docs.cloud.google.com/run/docs/reference/rest/v2/projects.locations.jobs#Job) URI. Applicable only to source endpoint. The format is: projects/{project}/locations/{location}/jobs/{job} */
  cloudRunJob?: string;
  /** A VPC network URI. For source endpoints, used according to the `network_type`. For destination endpoints, used only when the source is an external IP address endpoint, and the destination is an internal IP address endpoint. */
  network?: string;
  /** For source endpoints, type of the network where the endpoint is located. Not relevant for destination endpoints. */
  networkType?:
    | "NETWORK_TYPE_UNSPECIFIED"
    | "GCP_NETWORK"
    | "NON_GCP_NETWORK"
    | "INTERNET"
    | (string & {});
  /** For source endpoints, endpoint project ID. Used according to the `network_type`. Not relevant for destination endpoints. */
  projectId?: string;
}

export const Endpoint: Schema.Codec<Endpoint> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    ipAddress: Schema.optional(Schema.String),
    port: Schema.optional(Schema.Number),
    instance: Schema.optional(Schema.String),
    forwardingRule: Schema.optional(Schema.String),
    forwardingRuleTarget: Schema.optional(Schema.String),
    loadBalancerId: Schema.optional(Schema.String),
    loadBalancerType: Schema.optional(Schema.String),
    gkeMasterCluster: Schema.optional(Schema.String),
    fqdn: Schema.optional(Schema.String),
    cloudSqlInstance: Schema.optional(Schema.String),
    redisInstance: Schema.optional(Schema.String),
    redisCluster: Schema.optional(Schema.String),
    gkePod: Schema.optional(Schema.String),
    dmsPrivateConnection: Schema.optional(Schema.String),
    cloudFunction: Schema.optional(CloudFunctionEndpoint),
    appEngineVersion: Schema.optional(AppEngineVersionEndpoint),
    cloudRunRevision: Schema.optional(CloudRunRevisionEndpoint),
    cloudRunJob: Schema.optional(Schema.String),
    network: Schema.optional(Schema.String),
    networkType: Schema.optional(Schema.String),
    projectId: Schema.optional(Schema.String),
  }).annotate({ identifier: "Endpoint" });

export interface EndpointInfo {
  /** Source IP address. */
  sourceIp?: string;
  /** Destination IP address. */
  destinationIp?: string;
  /** IP protocol in string format, for example: "TCP", "UDP", "ICMP". */
  protocol?: string;
  /** Source port. Only valid when protocol is TCP or UDP. */
  sourcePort?: number;
  /** Destination port. Only valid when protocol is TCP or UDP. */
  destinationPort?: number;
  /** URI of the network where this packet originates from. Format: `projects/{project_id}/global/networks/{network_id}` */
  sourceNetworkUri?: string;
  /** URI of the network where this packet is sent to. Format: `projects/{project_id}/global/networks/{network_id}` */
  destinationNetworkUri?: string;
  /** URI of the source telemetry agent this packet originates from. */
  sourceAgentUri?: string;
}

export const EndpointInfo: Schema.Codec<EndpointInfo> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    sourceIp: Schema.optional(Schema.String),
    destinationIp: Schema.optional(Schema.String),
    protocol: Schema.optional(Schema.String),
    sourcePort: Schema.optional(Schema.Number),
    destinationPort: Schema.optional(Schema.Number),
    sourceNetworkUri: Schema.optional(Schema.String),
    destinationNetworkUri: Schema.optional(Schema.String),
    sourceAgentUri: Schema.optional(Schema.String),
  }).annotate({ identifier: "EndpointInfo" });

export interface InstanceInfo {
  /** Name of a Compute Engine instance. */
  displayName?: string;
  /** URI of a Compute Engine instance in format "projects/{project}/zones/{zone}/instances/{instance}" */
  uri?: string;
  /** Name of the network interface of a Compute Engine instance. */
  interface?: string;
  /** URI of a Compute Engine network in format "projects/{project}/global/networks/{network}" */
  networkUri?: string;
  /** Internal IP address of the network interface. */
  internalIp?: string;
  /** External IP address of the network interface. */
  externalIp?: string;
  /** Network tags configured on the instance. */
  networkTags?: ReadonlyArray<string>;
  /** Service account authorized for the instance. */
  serviceAccount?: string;
  /** URI of the PSC network attachment the NIC is attached to (if relevant) in format "projects/{project}/regions/{region}/networkAttachments/{network_attachment}" */
  pscNetworkAttachmentUri?: string;
  /** Indicates whether the Compute Engine instance is running. Deprecated: use the `status` field instead. */
  running?: boolean;
  /** The status of the instance. */
  status?: "STATUS_UNSPECIFIED" | "RUNNING" | "NOT_RUNNING" | (string & {});
}

export const InstanceInfo: Schema.Codec<InstanceInfo> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    displayName: Schema.optional(Schema.String),
    uri: Schema.optional(Schema.String),
    interface: Schema.optional(Schema.String),
    networkUri: Schema.optional(Schema.String),
    internalIp: Schema.optional(Schema.String),
    externalIp: Schema.optional(Schema.String),
    networkTags: Schema.optional(Schema.Array(Schema.String)),
    serviceAccount: Schema.optional(Schema.String),
    pscNetworkAttachmentUri: Schema.optional(Schema.String),
    running: Schema.optional(Schema.Boolean),
    status: Schema.optional(Schema.String),
  }).annotate({ identifier: "InstanceInfo" });

export interface FirewallInfo {
  /** The display name of the firewall rule. This field might be empty for firewall policy rules. */
  displayName?: string;
  /** The URI of the firewall rule in format "projects/{project}/global/firewalls/{firewall}". This field is not applicable to implied VPC firewall rules. */
  uri?: string;
  /** Possible values: INGRESS, EGRESS */
  direction?: string;
  /** Possible values: ALLOW, DENY, APPLY_SECURITY_PROFILE_GROUP */
  action?: string;
  /** The priority of the firewall rule. */
  priority?: number;
  /** The URI of the VPC network that the firewall rule is associated with in format "projects/{project}/global/networks/{network}". This field is not applicable to hierarchical firewall policy rules. */
  networkUri?: string;
  /** The target tags defined by the VPC firewall rule. This field is not applicable to firewall policy rules. */
  targetTags?: ReadonlyArray<string>;
  /** The target service accounts specified by the firewall rule. */
  targetServiceAccounts?: ReadonlyArray<string>;
  /** The name of the firewall policy that this rule is associated with. This field is not applicable to VPC firewall rules and implied VPC firewall rules. */
  policy?: string;
  /** The URI of the firewall policy that this rule is associated with. This field is not applicable to VPC firewall rules and implied VPC firewall rules. Format: * `locations/global/firewallPolicies/{policy_id}` (hierarchical policy) * `projects/{project_id}/global/firewallPolicies/{policy_id}` (global network firewall policy) * `projects/{project_id}/regions/{region}/firewallPolicies/{policy_id}` (regional network firewall policy) */
  policyUri?: string;
  /** The firewall rule's type. */
  firewallRuleType?:
    | "FIREWALL_RULE_TYPE_UNSPECIFIED"
    | "HIERARCHICAL_FIREWALL_POLICY_RULE"
    | "VPC_FIREWALL_RULE"
    | "IMPLIED_VPC_FIREWALL_RULE"
    | "SERVERLESS_VPC_ACCESS_MANAGED_FIREWALL_RULE"
    | "NETWORK_FIREWALL_POLICY_RULE"
    | "NETWORK_REGIONAL_FIREWALL_POLICY_RULE"
    | "SYSTEM_NETWORK_FIREWALL_POLICY_RULE"
    | "SYSTEM_REGIONAL_NETWORK_FIREWALL_POLICY_RULE"
    | "UNSUPPORTED_FIREWALL_POLICY_RULE"
    | "TRACKING_STATE"
    | "ANALYSIS_SKIPPED"
    | (string & {});
  /** The priority of the firewall policy that this rule is associated with. This field is not applicable to VPC firewall rules and implied VPC firewall rules. */
  policyPriority?: number;
  /** Target type of the firewall rule. */
  targetType?:
    | "TARGET_TYPE_UNSPECIFIED"
    | "INSTANCES"
    | "INTERNAL_MANAGED_LB"
    | (string & {});
}

export const FirewallInfo: Schema.Codec<FirewallInfo> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    displayName: Schema.optional(Schema.String),
    uri: Schema.optional(Schema.String),
    direction: Schema.optional(Schema.String),
    action: Schema.optional(Schema.String),
    priority: Schema.optional(Schema.Number),
    networkUri: Schema.optional(Schema.String),
    targetTags: Schema.optional(Schema.Array(Schema.String)),
    targetServiceAccounts: Schema.optional(Schema.Array(Schema.String)),
    policy: Schema.optional(Schema.String),
    policyUri: Schema.optional(Schema.String),
    firewallRuleType: Schema.optional(Schema.String),
    policyPriority: Schema.optional(Schema.Number),
    targetType: Schema.optional(Schema.String),
  }).annotate({ identifier: "FirewallInfo" });

export interface RouteInfo {
  /** Type of route. */
  routeType?:
    | "ROUTE_TYPE_UNSPECIFIED"
    | "SUBNET"
    | "STATIC"
    | "DYNAMIC"
    | "PEERING_SUBNET"
    | "PEERING_STATIC"
    | "PEERING_DYNAMIC"
    | "POLICY_BASED"
    | "ADVERTISED"
    | (string & {});
  /** Type of next hop. */
  nextHopType?:
    | "NEXT_HOP_TYPE_UNSPECIFIED"
    | "NEXT_HOP_IP"
    | "NEXT_HOP_INSTANCE"
    | "NEXT_HOP_NETWORK"
    | "NEXT_HOP_PEERING"
    | "NEXT_HOP_INTERCONNECT"
    | "NEXT_HOP_VPN_TUNNEL"
    | "NEXT_HOP_VPN_GATEWAY"
    | "NEXT_HOP_INTERNET_GATEWAY"
    | "NEXT_HOP_BLACKHOLE"
    | "NEXT_HOP_ILB"
    | "NEXT_HOP_ROUTER_APPLIANCE"
    | "NEXT_HOP_NCC_HUB"
    | "SECURE_WEB_PROXY_GATEWAY"
    | (string & {});
  /** Indicates where route is applicable. Deprecated, routes with NCC_HUB scope are not included in the trace in new tests. */
  routeScope?:
    | "ROUTE_SCOPE_UNSPECIFIED"
    | "NETWORK"
    | "NCC_HUB"
    | (string & {});
  /** Name of a route. */
  displayName?: string;
  /** URI of a route in format "projects/{project}/global/routes/{route}". SUBNET, STATIC, PEERING_SUBNET (only for peering network) and POLICY_BASED routes only. */
  uri?: string;
  /** Region of the route. DYNAMIC, PEERING_DYNAMIC, POLICY_BASED and ADVERTISED routes only. If set for POLICY_BASED route, this is a region of VLAN attachments for Cloud Interconnect the route applies to. If set to "all" for POLICY_BASED route, the route applies to VLAN attachments of Cloud Interconnect in all regions. */
  region?: string;
  /** Destination IP range of the route. */
  destIpRange?: string;
  /** String type of the next hop of the route (for example, "VPN tunnel"). Deprecated in favor of the next_hop_type and next_hop_uri fields, not used in new tests. */
  nextHop?: string;
  /** URI of a VPC network where route is located in format "projects/{project}/global/networks/{network}". */
  networkUri?: string;
  /** Priority of the route. */
  priority?: number;
  /** Instance tags of the route. */
  instanceTags?: ReadonlyArray<string>;
  /** Source IP address range of the route. POLICY_BASED routes only. */
  srcIpRange?: string;
  /** Destination port ranges of the route. POLICY_BASED routes only. */
  destPortRanges?: ReadonlyArray<string>;
  /** Source port ranges of the route. POLICY_BASED routes only. */
  srcPortRanges?: ReadonlyArray<string>;
  /** Protocols of the route. POLICY_BASED routes only. */
  protocols?: ReadonlyArray<string>;
  /** URI of the NCC Hub the route is advertised by in format "projects/{project}/locations/global/hubs/{hub}". PEERING_SUBNET and PEERING_DYNAMIC routes that are advertised by NCC Hub only. */
  nccHubUri?: string;
  /** URI of the destination NCC Spoke in format "projects/{project}/locations/{location}/spokes/{spoke}" (regional) or "projects/{project}/locations/global/spokes/{spoke}" (global). PEERING_SUBNET and PEERING_DYNAMIC routes that are advertised by NCC Hub only. */
  nccSpokeUri?: string;
  /** For ADVERTISED dynamic routes, the URI of the Cloud Router that advertised the corresponding IP prefix in format "projects/{project}/regions/{region}/routers/{router}". */
  advertisedRouteSourceRouterUri?: string;
  /** For ADVERTISED routes, the URI of their next hop, i.e. the URI of the hybrid endpoint (VPN tunnel, Interconnect attachment, NCC router appliance) the advertised prefix is advertised through, or URI of the source peered network. Deprecated in favor of the next_hop_uri field, not used in new tests. */
  advertisedRouteNextHopUri?: string;
  /** URI of the next hop resource. */
  nextHopUri?: string;
  /** URI of a VPC network where the next hop resource is located in format "projects/{project}/global/networks/{network}". */
  nextHopNetworkUri?: string;
  /** For PEERING_SUBNET and PEERING_STATIC routes, the URI of the originating SUBNET/STATIC route. Format: `projects/{project_id}/global/routes/{route_id}` */
  originatingRouteUri?: string;
  /** For PEERING_SUBNET, PEERING_STATIC and PEERING_DYNAMIC routes, the name of the originating SUBNET/STATIC/DYNAMIC route. */
  originatingRouteDisplayName?: string;
  /** For PEERING_SUBNET and PEERING_DYNAMIC routes that are advertised by NCC Hub, the URI of the corresponding route in NCC Hub's routing table. Format: `projects/{project_id}/locations/global/hubs/{hub_id}/routeTables/{route_table_id}/routes/{route_id}` */
  nccHubRouteUri?: string;
}

export const RouteInfo: Schema.Codec<RouteInfo> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    routeType: Schema.optional(Schema.String),
    nextHopType: Schema.optional(Schema.String),
    routeScope: Schema.optional(Schema.String),
    displayName: Schema.optional(Schema.String),
    uri: Schema.optional(Schema.String),
    region: Schema.optional(Schema.String),
    destIpRange: Schema.optional(Schema.String),
    nextHop: Schema.optional(Schema.String),
    networkUri: Schema.optional(Schema.String),
    priority: Schema.optional(Schema.Number),
    instanceTags: Schema.optional(Schema.Array(Schema.String)),
    srcIpRange: Schema.optional(Schema.String),
    destPortRanges: Schema.optional(Schema.Array(Schema.String)),
    srcPortRanges: Schema.optional(Schema.Array(Schema.String)),
    protocols: Schema.optional(Schema.Array(Schema.String)),
    nccHubUri: Schema.optional(Schema.String),
    nccSpokeUri: Schema.optional(Schema.String),
    advertisedRouteSourceRouterUri: Schema.optional(Schema.String),
    advertisedRouteNextHopUri: Schema.optional(Schema.String),
    nextHopUri: Schema.optional(Schema.String),
    nextHopNetworkUri: Schema.optional(Schema.String),
    originatingRouteUri: Schema.optional(Schema.String),
    originatingRouteDisplayName: Schema.optional(Schema.String),
    nccHubRouteUri: Schema.optional(Schema.String),
  }).annotate({ identifier: "RouteInfo" });

export interface GoogleServiceInfo {
  /** Source IP address. */
  sourceIp?: string;
  /** Recognized type of a Google Service. */
  googleServiceType?:
    | "GOOGLE_SERVICE_TYPE_UNSPECIFIED"
    | "IAP"
    | "GFE_PROXY_OR_HEALTH_CHECK_PROBER"
    | "CLOUD_DNS"
    | "GOOGLE_API"
    | "GOOGLE_API_PSC"
    | "GOOGLE_API_VPC_SC"
    | "SERVERLESS_VPC_ACCESS"
    | (string & {});
}

export const GoogleServiceInfo: Schema.Codec<GoogleServiceInfo> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    sourceIp: Schema.optional(Schema.String),
    googleServiceType: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleServiceInfo" });

export interface ForwardingRuleInfo {
  /** Name of the forwarding rule. */
  displayName?: string;
  /** URI of the forwarding rule in format "projects/{project}/global/forwardingRules/{forwarding_rule}" (global) or "projects/{project}/regions/{region}/forwardingRules/{forwarding_rule}" (regional). */
  uri?: string;
  /** Protocol defined in the forwarding rule that matches the packet. */
  matchedProtocol?: string;
  /** Port range defined in the forwarding rule that matches the packet. */
  matchedPortRange?: string;
  /** VIP of the forwarding rule. */
  vip?: string;
  /** Target type of the forwarding rule. */
  target?: string;
  /** URI of a VPC network where the forwarding rule is located in format "projects/{project}/global/networks/{network}". */
  networkUri?: string;
  /** Region of the forwarding rule. Set only for regional forwarding rules. */
  region?: string;
  /** Name of the load balancer the forwarding rule belongs to. Empty for forwarding rules not related to load balancers (like PSC forwarding rules). */
  loadBalancerName?: string;
  /** URI of the PSC service attachment this forwarding rule targets (if applicable) in format "projects/{project}/regions/{region}/serviceAttachments/{service_attachment}". */
  pscServiceAttachmentUri?: string;
  /** PSC Google API target this forwarding rule targets (if applicable). */
  pscGoogleApiTarget?: string;
}

export const ForwardingRuleInfo: Schema.Codec<ForwardingRuleInfo> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    displayName: Schema.optional(Schema.String),
    uri: Schema.optional(Schema.String),
    matchedProtocol: Schema.optional(Schema.String),
    matchedPortRange: Schema.optional(Schema.String),
    vip: Schema.optional(Schema.String),
    target: Schema.optional(Schema.String),
    networkUri: Schema.optional(Schema.String),
    region: Schema.optional(Schema.String),
    loadBalancerName: Schema.optional(Schema.String),
    pscServiceAttachmentUri: Schema.optional(Schema.String),
    pscGoogleApiTarget: Schema.optional(Schema.String),
  }).annotate({ identifier: "ForwardingRuleInfo" });

export interface HybridSubnetInfo {
  /** Name of a hybrid subnet. */
  displayName?: string;
  /** URI of the hybrid subnet. Format: `projects/{project_id}/regions/{region}/subnetworks/{subnetwork_id}` */
  uri?: string;
  /** Name of a Google Cloud region where the hybrid subnet is configured. */
  region?: string;
}

export const HybridSubnetInfo: Schema.Codec<HybridSubnetInfo> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    displayName: Schema.optional(Schema.String),
    uri: Schema.optional(Schema.String),
    region: Schema.optional(Schema.String),
  }).annotate({ identifier: "HybridSubnetInfo" });

export interface VpnGatewayInfo {
  /** Name of a VPN gateway. */
  displayName?: string;
  /** URI of the VPN gateway. Format: * `projects/{project_id}/regions/{region}/vpnGateways/{vpn_gateway_id}` (HA VPN gateway) * `projects/{project_id}/regions/{region}/targetVpnGateways/{target_vpn_gateway_id}` (Classic VPN gateway) */
  uri?: string;
  /** URI of the VPC network where the VPN gateway is configured. Format: `projects/{project_id}/global/networks/{network_id}` */
  networkUri?: string;
  /** IP address of the VPN gateway. */
  ipAddress?: string;
  /** URI of the VPN tunnel associated with the VPN gateway. There may be multiple VPN tunnels configured on a VPN gateway, and only the one relevant to the test is displayed. Format: `projects/{project_id}/regions/{region}/vpnTunnels/{vpn_tunnel_id}` */
  vpnTunnelUri?: string;
  /** Name of a Google Cloud region where this VPN gateway is configured. */
  region?: string;
}

export const VpnGatewayInfo: Schema.Codec<VpnGatewayInfo> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    displayName: Schema.optional(Schema.String),
    uri: Schema.optional(Schema.String),
    networkUri: Schema.optional(Schema.String),
    ipAddress: Schema.optional(Schema.String),
    vpnTunnelUri: Schema.optional(Schema.String),
    region: Schema.optional(Schema.String),
  }).annotate({ identifier: "VpnGatewayInfo" });

export interface VpnTunnelInfo {
  /** Name of a VPN tunnel. */
  displayName?: string;
  /** URI of the VPN tunnel. Format: `projects/{project_id}/regions/{region}/vpnTunnels/{vpn_tunnel_id}` */
  uri?: string;
  /** URI of the VPN gateway at local end of the tunnel. Format: * `projects/{project_id}/regions/{region}/vpnGateways/{vpn_gateway_id}` (HA VPN gateway) * `projects/{project_id}/regions/{region}/targetVpnGateways/{target_vpn_gateway_id}` (Classic VPN gateway) */
  sourceGateway?: string;
  /** URI of a VPN gateway at remote end of the tunnel. Format: * `projects/{project_id}/regions/{region}/vpnGateways/{vpn_gateway_id}` (GCP HA VPN gateway) * `projects/{project_id}/global/peerVpnGateways/{peer_vpn_gateway_id}` (GCP peer VPN gateway) */
  remoteGateway?: string;
  /** Remote VPN gateway's IP address. */
  remoteGatewayIp?: string;
  /** Local VPN gateway's IP address. */
  sourceGatewayIp?: string;
  /** URI of the VPC network where the VPN tunnel is configured. Format: `projects/{project_id}/global/networks/{network_id}` */
  networkUri?: string;
  /** Name of a Google Cloud region where this VPN tunnel is configured. */
  region?: string;
  /** Type of the routing policy. */
  routingType?:
    | "ROUTING_TYPE_UNSPECIFIED"
    | "ROUTE_BASED"
    | "POLICY_BASED"
    | "DYNAMIC"
    | (string & {});
}

export const VpnTunnelInfo: Schema.Codec<VpnTunnelInfo> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    displayName: Schema.optional(Schema.String),
    uri: Schema.optional(Schema.String),
    sourceGateway: Schema.optional(Schema.String),
    remoteGateway: Schema.optional(Schema.String),
    remoteGatewayIp: Schema.optional(Schema.String),
    sourceGatewayIp: Schema.optional(Schema.String),
    networkUri: Schema.optional(Schema.String),
    region: Schema.optional(Schema.String),
    routingType: Schema.optional(Schema.String),
  }).annotate({ identifier: "VpnTunnelInfo" });

export interface InterconnectAttachmentInfo {
  /** Name of an Interconnect attachment. */
  displayName?: string;
  /** URI of the Interconnect attachment. Format: `projects/{project_id}/regions/{region}/interconnectAttachments/{attachment_id}` */
  uri?: string;
  /** URI of the Interconnect. Format: `projects/{project_id}/global/interconnects/{interconnect_id}` */
  interconnectUri?: string;
  /** Name of a Google Cloud region where the Interconnect attachment is configured. */
  region?: string;
  /** URI of the Cloud Router to be used for dynamic routing. Format: `projects/{project_id}/regions/{region}/routers/{router_id}` */
  cloudRouterUri?: string;
  /** The type of interconnect attachment this is. */
  type?:
    | "TYPE_UNSPECIFIED"
    | "DEDICATED"
    | "PARTNER"
    | "PARTNER_PROVIDER"
    | "L2_DEDICATED"
    | (string & {});
  /** Appliance IP address that was matched for L2_DEDICATED attachments. */
  l2AttachmentMatchedIpAddress?: string;
}

export const InterconnectAttachmentInfo: Schema.Codec<InterconnectAttachmentInfo> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    displayName: Schema.optional(Schema.String),
    uri: Schema.optional(Schema.String),
    interconnectUri: Schema.optional(Schema.String),
    region: Schema.optional(Schema.String),
    cloudRouterUri: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    l2AttachmentMatchedIpAddress: Schema.optional(Schema.String),
  }).annotate({ identifier: "InterconnectAttachmentInfo" });

export interface VpcConnectorInfo {
  /** Name of a VPC connector. */
  displayName?: string;
  /** URI of a VPC connector. Format: `projects/{project_id}/locations/{location}/connectors/{connector_id}` */
  uri?: string;
  /** Location in which the VPC connector is deployed. */
  location?: string;
}

export const VpcConnectorInfo: Schema.Codec<VpcConnectorInfo> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    displayName: Schema.optional(Schema.String),
    uri: Schema.optional(Schema.String),
    location: Schema.optional(Schema.String),
  }).annotate({ identifier: "VpcConnectorInfo" });

export interface DirectVpcEgressConnectionInfo {
  /** URI of the VPC network for direct egress. Format: `projects/{project_id}/global/networks/{network_id}` */
  networkUri?: string;
  /** URI of the subnetwork for direct egress. Format: `projects/{project_id}/regions/{region}/subnetworks/{subnetwork_id}` */
  subnetworkUri?: string;
  /** Selected IP range. */
  selectedIpRange?: string;
  /** Selected starting IP address, from the selected IP range. */
  selectedIpAddress?: string;
  /** Region in which the Direct VPC egress is deployed. */
  region?: string;
}

export const DirectVpcEgressConnectionInfo: Schema.Codec<DirectVpcEgressConnectionInfo> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    networkUri: Schema.optional(Schema.String),
    subnetworkUri: Schema.optional(Schema.String),
    selectedIpRange: Schema.optional(Schema.String),
    selectedIpAddress: Schema.optional(Schema.String),
    region: Schema.optional(Schema.String),
  }).annotate({ identifier: "DirectVpcEgressConnectionInfo" });

export interface ServerlessExternalConnectionInfo {
  /** Selected starting IP address, from the Google dynamic address pool. */
  selectedIpAddress?: string;
}

export const ServerlessExternalConnectionInfo: Schema.Codec<ServerlessExternalConnectionInfo> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    selectedIpAddress: Schema.optional(Schema.String),
  }).annotate({ identifier: "ServerlessExternalConnectionInfo" });

export interface DeliverInfo {
  /** Target type where the packet is delivered to. */
  target?:
    | "TARGET_UNSPECIFIED"
    | "INSTANCE"
    | "INTERNET"
    | "GOOGLE_API"
    | "GKE_MASTER"
    | "CLOUD_SQL_INSTANCE"
    | "PSC_PUBLISHED_SERVICE"
    | "PSC_GOOGLE_API"
    | "PSC_VPC_SC"
    | "SERVERLESS_NEG"
    | "STORAGE_BUCKET"
    | "PRIVATE_NETWORK"
    | "CLOUD_FUNCTION"
    | "APP_ENGINE_VERSION"
    | "CLOUD_RUN_REVISION"
    | "GOOGLE_MANAGED_SERVICE"
    | "REDIS_INSTANCE"
    | "REDIS_CLUSTER"
    | "GKE_POD"
    | "CLOUD_RUN_JOB"
    | "DMS_PRIVATE_CONNECTION"
    | "DATASTREAM_PRIVATE_CONNECTION"
    | (string & {});
  /** URI of the resource that the packet is delivered to. For example: * `"projects/{project}/zones/{zone}/instances/{instance}"` * `"projects/{project}/regions/{region}/networkEndpointGroups/{network_endpoint_group}"` */
  resourceUri?: string;
  /** IP address of the target (if applicable). */
  ipAddress?: string;
  /** Name of the Cloud Storage Bucket the packet is delivered to (if applicable). */
  storageBucket?: string;
  /** PSC Google API target the packet is delivered to (if applicable). */
  pscGoogleApiTarget?: string;
  /** Recognized type of a Google Service the packet is delivered to (if applicable). */
  googleServiceType?:
    | "GOOGLE_SERVICE_TYPE_UNSPECIFIED"
    | "IAP"
    | "GFE_PROXY_OR_HEALTH_CHECK_PROBER"
    | "CLOUD_DNS"
    | "PRIVATE_GOOGLE_ACCESS"
    | "SERVERLESS_VPC_ACCESS"
    | (string & {});
}

export const DeliverInfo: Schema.Codec<DeliverInfo> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    target: Schema.optional(Schema.String),
    resourceUri: Schema.optional(Schema.String),
    ipAddress: Schema.optional(Schema.String),
    storageBucket: Schema.optional(Schema.String),
    pscGoogleApiTarget: Schema.optional(Schema.String),
    googleServiceType: Schema.optional(Schema.String),
  }).annotate({ identifier: "DeliverInfo" });

export interface ForwardInfo {
  /** Target type where this packet is forwarded to. */
  target?:
    | "TARGET_UNSPECIFIED"
    | "PEERING_VPC"
    | "VPN_GATEWAY"
    | "INTERCONNECT"
    | "GKE_MASTER"
    | "IMPORTED_CUSTOM_ROUTE_NEXT_HOP"
    | "CLOUD_SQL_INSTANCE"
    | "ANOTHER_PROJECT"
    | "NCC_HUB"
    | "ROUTER_APPLIANCE"
    | "SECURE_WEB_PROXY_GATEWAY"
    | (string & {});
  /** URI of the resource that the packet is forwarded to. Format: * `projects/{project_id}/global/networks/{network_id}` (VPC peering network) * `projects/{project_id}/regions/{region}/vpnGateways/{vpn_gateway_id}` (VPN gateway) */
  resourceUri?: string;
  /** IP address of the target (if applicable). */
  ipAddress?: string;
}

export const ForwardInfo: Schema.Codec<ForwardInfo> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    target: Schema.optional(Schema.String),
    resourceUri: Schema.optional(Schema.String),
    ipAddress: Schema.optional(Schema.String),
  }).annotate({ identifier: "ForwardInfo" });

export interface AbortInfo {
  /** Causes that the analysis is aborted. */
  cause?:
    | "CAUSE_UNSPECIFIED"
    | "UNKNOWN_NETWORK"
    | "UNKNOWN_PROJECT"
    | "NO_EXTERNAL_IP"
    | "UNINTENDED_DESTINATION"
    | "SOURCE_ENDPOINT_NOT_FOUND"
    | "MISMATCHED_SOURCE_NETWORK"
    | "DESTINATION_ENDPOINT_NOT_FOUND"
    | "MISMATCHED_DESTINATION_NETWORK"
    | "UNKNOWN_IP"
    | "GOOGLE_MANAGED_SERVICE_UNKNOWN_IP"
    | "SOURCE_IP_ADDRESS_NOT_IN_SOURCE_NETWORK"
    | "PERMISSION_DENIED"
    | "PERMISSION_DENIED_NO_CLOUD_NAT_CONFIGS"
    | "PERMISSION_DENIED_NO_NEG_ENDPOINT_CONFIGS"
    | "PERMISSION_DENIED_NO_CLOUD_ROUTER_CONFIGS"
    | "NO_SOURCE_LOCATION"
    | "NO_SOURCE_GCP_NETWORK_LOCATION"
    | "NO_SOURCE_NON_GCP_NETWORK_LOCATION"
    | "NO_SOURCE_INTERNET_LOCATION"
    | "INVALID_ARGUMENT"
    | "TRACE_TOO_LONG"
    | "INTERNAL_ERROR"
    | "UNSUPPORTED"
    | "MISMATCHED_IP_VERSION"
    | "GKE_KONNECTIVITY_PROXY_UNSUPPORTED"
    | "RESOURCE_CONFIG_NOT_FOUND"
    | "VM_INSTANCE_CONFIG_NOT_FOUND"
    | "NETWORK_CONFIG_NOT_FOUND"
    | "FIREWALL_CONFIG_NOT_FOUND"
    | "ROUTE_CONFIG_NOT_FOUND"
    | "GOOGLE_MANAGED_SERVICE_AMBIGUOUS_PSC_ENDPOINT"
    | "GOOGLE_MANAGED_SERVICE_AMBIGUOUS_ENDPOINT"
    | "SOURCE_PSC_CLOUD_SQL_UNSUPPORTED"
    | "SOURCE_EXTERNAL_CLOUD_SQL_UNSUPPORTED"
    | "SOURCE_REDIS_CLUSTER_UNSUPPORTED"
    | "SOURCE_REDIS_INSTANCE_UNSUPPORTED"
    | "SOURCE_FORWARDING_RULE_UNSUPPORTED"
    | "NON_ROUTABLE_IP_ADDRESS"
    | "UNKNOWN_ISSUE_IN_GOOGLE_MANAGED_PROJECT"
    | "UNSUPPORTED_GOOGLE_MANAGED_PROJECT_CONFIG"
    | "NO_SERVERLESS_IP_RANGES"
    | "IP_VERSION_PROTOCOL_MISMATCH"
    | "GKE_POD_UNKNOWN_ENDPOINT_LOCATION"
    | "RESPONSE_TOO_LARGE"
    | (string & {});
  /** URI of the resource that caused the abort. Format: * `projects/{project_id}/global/networks/{network_id}` (VPC network) * `projects/{project_id}/zones/{zone}/instances/{instance_id}` (VM instance) */
  resourceUri?: string;
  /** IP address that caused the abort. */
  ipAddress?: string;
  /** List of project IDs the user specified in the request but lacks access to. In this case, analysis is aborted with the PERMISSION_DENIED cause. */
  projectsMissingPermission?: ReadonlyArray<string>;
}

export const AbortInfo: Schema.Codec<AbortInfo> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    cause: Schema.optional(Schema.String),
    resourceUri: Schema.optional(Schema.String),
    ipAddress: Schema.optional(Schema.String),
    projectsMissingPermission: Schema.optional(Schema.Array(Schema.String)),
  }).annotate({ identifier: "AbortInfo" });

export interface DropInfo {
  /** Cause that the packet is dropped. */
  cause?:
    | "CAUSE_UNSPECIFIED"
    | "UNKNOWN_EXTERNAL_ADDRESS"
    | "FOREIGN_IP_DISALLOWED"
    | "FIREWALL_RULE"
    | "NO_ROUTE"
    | "ROUTE_BLACKHOLE"
    | "ROUTE_WRONG_NETWORK"
    | "ROUTE_NEXT_HOP_IP_ADDRESS_NOT_RESOLVED"
    | "ROUTE_NEXT_HOP_RESOURCE_NOT_FOUND"
    | "ROUTE_NEXT_HOP_INSTANCE_WRONG_NETWORK"
    | "ROUTE_NEXT_HOP_INSTANCE_NON_PRIMARY_IP"
    | "ROUTE_NEXT_HOP_FORWARDING_RULE_IP_MISMATCH"
    | "ROUTE_NEXT_HOP_VPN_TUNNEL_NOT_ESTABLISHED"
    | "ROUTE_NEXT_HOP_FORWARDING_RULE_TYPE_INVALID"
    | "NO_ROUTE_FROM_INTERNET_TO_PRIVATE_IPV6_ADDRESS"
    | "NO_ROUTE_FROM_INTERNET_TO_PRIVATE_IPV4_ADDRESS"
    | "NO_ROUTE_FROM_EXTERNAL_IPV6_SOURCE_TO_PRIVATE_IPV6_ADDRESS"
    | "VPN_TUNNEL_LOCAL_SELECTOR_MISMATCH"
    | "VPN_TUNNEL_REMOTE_SELECTOR_MISMATCH"
    | "PRIVATE_TRAFFIC_TO_INTERNET"
    | "PRIVATE_GOOGLE_ACCESS_DISALLOWED"
    | "PRIVATE_GOOGLE_ACCESS_VIA_VPN_TUNNEL_UNSUPPORTED"
    | "NO_EXTERNAL_ADDRESS"
    | "UNKNOWN_INTERNAL_ADDRESS"
    | "FORWARDING_RULE_MISMATCH"
    | "FORWARDING_RULE_NO_INSTANCES"
    | "FIREWALL_BLOCKING_LOAD_BALANCER_BACKEND_HEALTH_CHECK"
    | "FIREWALL_BLOCKING_LOAD_BALANCER_ENVOY_PROXY_HEALTH_CHECK"
    | "INGRESS_FIREWALL_TAGS_UNSUPPORTED_BY_DIRECT_VPC_EGRESS"
    | "INSTANCE_NOT_RUNNING"
    | "GKE_CLUSTER_NOT_RUNNING"
    | "GKE_POD_NOT_RUNNING"
    | "CLOUD_SQL_INSTANCE_NOT_RUNNING"
    | "REDIS_INSTANCE_NOT_RUNNING"
    | "REDIS_CLUSTER_NOT_RUNNING"
    | "TRAFFIC_TYPE_BLOCKED"
    | "GKE_MASTER_UNAUTHORIZED_ACCESS"
    | "CLOUD_SQL_INSTANCE_UNAUTHORIZED_ACCESS"
    | "DROPPED_INSIDE_GKE_SERVICE"
    | "DROPPED_INSIDE_CLOUD_SQL_SERVICE"
    | "DROPPED_INSIDE_DMS_PRIVATE_CONNECTION"
    | "DROPPED_INSIDE_DATASTREAM_PRIVATE_CONNECTION"
    | "GOOGLE_MANAGED_SERVICE_NO_PEERING"
    | "GOOGLE_MANAGED_SERVICE_NO_PSC_ENDPOINT"
    | "GKE_PSC_ENDPOINT_MISSING"
    | "CLOUD_SQL_INSTANCE_NO_IP_ADDRESS"
    | "GKE_CONTROL_PLANE_REGION_MISMATCH"
    | "PUBLIC_GKE_CONTROL_PLANE_TO_PRIVATE_DESTINATION"
    | "GKE_CONTROL_PLANE_NO_ROUTE"
    | "CLOUD_SQL_INSTANCE_NOT_CONFIGURED_FOR_EXTERNAL_TRAFFIC"
    | "PUBLIC_CLOUD_SQL_INSTANCE_TO_PRIVATE_DESTINATION"
    | "CLOUD_SQL_INSTANCE_NO_ROUTE"
    | "CLOUD_SQL_CONNECTOR_REQUIRED"
    | "CLOUD_FUNCTION_NOT_ACTIVE"
    | "VPC_CONNECTOR_NOT_SET"
    | "VPC_CONNECTOR_NOT_RUNNING"
    | "VPC_CONNECTOR_SERVERLESS_TRAFFIC_BLOCKED"
    | "VPC_CONNECTOR_HEALTH_CHECK_TRAFFIC_BLOCKED"
    | "FORWARDING_RULE_REGION_MISMATCH"
    | "PSC_CONNECTION_NOT_ACCEPTED"
    | "PSC_ENDPOINT_ACCESSED_FROM_PEERED_NETWORK"
    | "PSC_NEG_PRODUCER_ENDPOINT_NO_GLOBAL_ACCESS"
    | "PSC_NEG_PRODUCER_FORWARDING_RULE_MULTIPLE_PORTS"
    | "CLOUD_SQL_PSC_NEG_UNSUPPORTED"
    | "NO_NAT_SUBNETS_FOR_PSC_SERVICE_ATTACHMENT"
    | "PSC_TRANSITIVITY_NOT_PROPAGATED"
    | "HYBRID_NEG_NON_DYNAMIC_ROUTE_MATCHED"
    | "HYBRID_NEG_NON_LOCAL_DYNAMIC_ROUTE_MATCHED"
    | "CLOUD_RUN_REVISION_NOT_READY"
    | "CLOUD_RUN_JOB_NOT_READY"
    | "DROPPED_INSIDE_PSC_SERVICE_PRODUCER"
    | "LOAD_BALANCER_HAS_NO_PROXY_SUBNET"
    | "CLOUD_NAT_NO_ADDRESSES"
    | "ROUTING_LOOP"
    | "DROPPED_INSIDE_GOOGLE_MANAGED_SERVICE"
    | "LOAD_BALANCER_BACKEND_INVALID_NETWORK"
    | "BACKEND_SERVICE_NAMED_PORT_NOT_DEFINED"
    | "DESTINATION_IS_PRIVATE_NAT_IP_RANGE"
    | "DROPPED_INSIDE_REDIS_INSTANCE_SERVICE"
    | "REDIS_INSTANCE_UNSUPPORTED_PORT"
    | "REDIS_INSTANCE_CONNECTING_FROM_PUPI_ADDRESS"
    | "REDIS_INSTANCE_NO_ROUTE_TO_DESTINATION_NETWORK"
    | "REDIS_INSTANCE_NO_EXTERNAL_IP"
    | "REDIS_INSTANCE_UNSUPPORTED_PROTOCOL"
    | "DROPPED_INSIDE_REDIS_CLUSTER_SERVICE"
    | "REDIS_CLUSTER_UNSUPPORTED_PORT"
    | "REDIS_CLUSTER_NO_EXTERNAL_IP"
    | "REDIS_CLUSTER_UNSUPPORTED_PROTOCOL"
    | "NO_ADVERTISED_ROUTE_TO_GCP_DESTINATION"
    | "NO_TRAFFIC_SELECTOR_TO_GCP_DESTINATION"
    | "NO_KNOWN_ROUTE_FROM_PEERED_NETWORK_TO_DESTINATION"
    | "PRIVATE_NAT_TO_PSC_ENDPOINT_UNSUPPORTED"
    | "PSC_PORT_MAPPING_PORT_MISMATCH"
    | "PSC_PORT_MAPPING_WITHOUT_PSC_CONNECTION_UNSUPPORTED"
    | "UNSUPPORTED_ROUTE_MATCHED_FOR_NAT64_DESTINATION"
    | "TRAFFIC_FROM_HYBRID_ENDPOINT_TO_INTERNET_DISALLOWED"
    | "NO_MATCHING_NAT64_GATEWAY"
    | "NO_CONFIGURED_PRIVATE_NAT64_RULE"
    | "LOAD_BALANCER_BACKEND_IP_VERSION_MISMATCH"
    | "NO_KNOWN_ROUTE_FROM_NCC_NETWORK_TO_DESTINATION"
    | "CLOUD_NAT_PROTOCOL_UNSUPPORTED"
    | "L2_INTERCONNECT_UNSUPPORTED_PROTOCOL"
    | "L2_INTERCONNECT_UNSUPPORTED_PORT"
    | "L2_INTERCONNECT_DESTINATION_IP_MISMATCH"
    | "NCC_ROUTE_WITHIN_HYBRID_SUBNET_UNSUPPORTED"
    | "HYBRID_SUBNET_REGION_MISMATCH"
    | "HYBRID_SUBNET_NO_ROUTE"
    | "GKE_NETWORK_POLICY"
    | "NO_VALID_ROUTE_FROM_GOOGLE_MANAGED_NETWORK_TO_DESTINATION"
    | "PRIVATE_CONNECTION_NO_RUNNING_INSTANCE"
    | (string & {});
  /** URI of the resource that caused the drop. Format: * `projects/{project_id}/global/firewalls/{firewall_id}` (firewall rule) * `projects/{project_id}/global/routes/{route_id}` (route) */
  resourceUri?: string;
  /** Source IP address of the dropped packet (if relevant). */
  sourceIp?: string;
  /** Destination IP address of the dropped packet (if relevant). */
  destinationIp?: string;
  /** Region of the dropped packet (if relevant). */
  region?: string;
  /** Geolocation (region code) of the source IP address (if relevant). */
  sourceGeolocationCode?: string;
  /** Geolocation (region code) of the destination IP address (if relevant). */
  destinationGeolocationCode?: string;
}

export const DropInfo: Schema.Codec<DropInfo> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    cause: Schema.optional(Schema.String),
    resourceUri: Schema.optional(Schema.String),
    sourceIp: Schema.optional(Schema.String),
    destinationIp: Schema.optional(Schema.String),
    region: Schema.optional(Schema.String),
    sourceGeolocationCode: Schema.optional(Schema.String),
    destinationGeolocationCode: Schema.optional(Schema.String),
  }).annotate({ identifier: "DropInfo" });

export interface LoadBalancerBackend {
  /** Name of a Compute Engine instance or network endpoint. */
  displayName?: string;
  /** URI of the backend instance or network endpoint. Format: * `projects/{project_id}/zones/{zone}/instances/{instance_id}` (instance) * `projects/{project_id}/zones/{zone}/networkEndpointGroups/{neg_id}` (zonal NEG) * `projects/{project_id}/regions/{region}/networkEndpointGroups/{neg_id}` (regional NEG) * `projects/{project_id}/global/networkEndpointGroups/{neg_id}` (global NEG) */
  uri?: string;
  /** State of the health check firewall configuration. */
  healthCheckFirewallState?:
    | "HEALTH_CHECK_FIREWALL_STATE_UNSPECIFIED"
    | "CONFIGURED"
    | "MISCONFIGURED"
    | (string & {});
  /** A list of firewall rule URIs allowing probes from health check IP ranges. */
  healthCheckAllowingFirewallRules?: ReadonlyArray<string>;
  /** A list of firewall rule URIs blocking probes from health check IP ranges. */
  healthCheckBlockingFirewallRules?: ReadonlyArray<string>;
}

export const LoadBalancerBackend: Schema.Codec<LoadBalancerBackend> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    displayName: Schema.optional(Schema.String),
    uri: Schema.optional(Schema.String),
    healthCheckFirewallState: Schema.optional(Schema.String),
    healthCheckAllowingFirewallRules: Schema.optional(
      Schema.Array(Schema.String),
    ),
    healthCheckBlockingFirewallRules: Schema.optional(
      Schema.Array(Schema.String),
    ),
  }).annotate({ identifier: "LoadBalancerBackend" });

export interface LoadBalancerInfo {
  /** Type of the load balancer. */
  loadBalancerType?:
    | "LOAD_BALANCER_TYPE_UNSPECIFIED"
    | "INTERNAL_TCP_UDP"
    | "NETWORK_TCP_UDP"
    | "HTTP_PROXY"
    | "TCP_PROXY"
    | "SSL_PROXY"
    | (string & {});
  /** URI of the health check for the load balancer. Deprecated and no longer populated as different load balancer backends might have different health checks. */
  healthCheckUri?: string;
  /** Information for the loadbalancer backends. */
  backends?: ReadonlyArray<LoadBalancerBackend>;
  /** Type of load balancer's backend configuration. */
  backendType?:
    | "BACKEND_TYPE_UNSPECIFIED"
    | "BACKEND_SERVICE"
    | "TARGET_POOL"
    | "TARGET_INSTANCE"
    | (string & {});
  /** URI of the backend associated with the load balancer. Format: * `projects/{project_id}/regions/{region}/backendServices/{backend_service_id}` * `projects/{project_id}/global/backendServices/{backend_service_id}` * `projects/{project_id}/regions/{region}/targetPools/{target_pool_id}` * `projects/{project_id}/zones/{zone}/targetInstances/{target_instance_id}` */
  backendUri?: string;
}

export const LoadBalancerInfo: Schema.Codec<LoadBalancerInfo> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    loadBalancerType: Schema.optional(Schema.String),
    healthCheckUri: Schema.optional(Schema.String),
    backends: Schema.optional(Schema.Array(LoadBalancerBackend)),
    backendType: Schema.optional(Schema.String),
    backendUri: Schema.optional(Schema.String),
  }).annotate({ identifier: "LoadBalancerInfo" });

export interface NetworkInfo {
  /** Name of a Compute Engine network. */
  displayName?: string;
  /** URI of a Compute Engine network in format "projects/{project}/global/networks/{network}" */
  uri?: string;
  /** URI of the subnet matching the source IP address of the test in format "projects/{project}/regions/{region}/subnetworks/{subnetwork}" */
  matchedSubnetUri?: string;
  /** The IP range of the subnet matching the source IP address of the test. */
  matchedIpRange?: string;
  /** The region of the subnet matching the source IP address of the test. */
  region?: string;
}

export const NetworkInfo: Schema.Codec<NetworkInfo> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    displayName: Schema.optional(Schema.String),
    uri: Schema.optional(Schema.String),
    matchedSubnetUri: Schema.optional(Schema.String),
    matchedIpRange: Schema.optional(Schema.String),
    region: Schema.optional(Schema.String),
  }).annotate({ identifier: "NetworkInfo" });

export interface GKEMasterInfo {
  /** URI of the GKE cluster. Format: * `projects/{project_id}/locations/{location}/clusters/{cluster_id}` (regional cluster) * `projects/{project_id}/zones/{zone}/clusters/{cluster_id}` (zonal cluster) */
  clusterUri?: string;
  /** URI of the GKE cluster network. Format: `projects/{project_id}/global/networks/{network_id}` */
  clusterNetworkUri?: string;
  /** Internal IP address of a GKE cluster control plane. */
  internalIp?: string;
  /** External IP address of a GKE cluster control plane. */
  externalIp?: string;
  /** DNS endpoint of a GKE cluster control plane. */
  dnsEndpoint?: string;
}

export const GKEMasterInfo: Schema.Codec<GKEMasterInfo> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    clusterUri: Schema.optional(Schema.String),
    clusterNetworkUri: Schema.optional(Schema.String),
    internalIp: Schema.optional(Schema.String),
    externalIp: Schema.optional(Schema.String),
    dnsEndpoint: Schema.optional(Schema.String),
  }).annotate({ identifier: "GKEMasterInfo" });

export interface GkePodInfo {
  /** URI of a GKE Pod. For Pods in regional Clusters, the URI format is: `projects/{project}/locations/{location}/clusters/{cluster}/k8s/namespaces/{namespace}/pods/{pod}` For Pods in zonal Clusters, the URI format is: `projects/{project}/zones/{zone}/clusters/{cluster}/k8s/namespaces/{namespace}/pods/{pod}` */
  podUri?: string;
  /** IP address of a GKE Pod. If the Pod is dual-stack, this is the IP address relevant to the trace. */
  ipAddress?: string;
  /** URI of the network containing the GKE Pod. Format: `projects/{project_id}/global/networks/{network_id}` */
  networkUri?: string;
}

export const GkePodInfo: Schema.Codec<GkePodInfo> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    podUri: Schema.optional(Schema.String),
    ipAddress: Schema.optional(Schema.String),
    networkUri: Schema.optional(Schema.String),
  }).annotate({ identifier: "GkePodInfo" });

export interface IpMasqueradingSkippedInfo {
  /** Reason why IP masquerading was not applied. */
  reason?:
    | "REASON_UNSPECIFIED"
    | "DESTINATION_IP_IN_CONFIGURED_NON_MASQUERADE_RANGE"
    | "DESTINATION_IP_IN_DEFAULT_NON_MASQUERADE_RANGE"
    | "DESTINATION_ON_SAME_NODE"
    | "DEFAULT_SNAT_DISABLED"
    | "NO_MASQUERADING_FOR_IPV6"
    | "POD_USES_NODE_NETWORK_NAMESPACE"
    | "NO_MASQUERADING_FOR_RETURN_PACKET"
    | (string & {});
  /** The matched non-masquerade IP range. Only set if reason is DESTINATION_IP_IN_CONFIGURED_NON_MASQUERADE_RANGE or DESTINATION_IP_IN_DEFAULT_NON_MASQUERADE_RANGE. */
  nonMasqueradeRange?: string;
}

export const IpMasqueradingSkippedInfo: Schema.Codec<IpMasqueradingSkippedInfo> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    reason: Schema.optional(Schema.String),
    nonMasqueradeRange: Schema.optional(Schema.String),
  }).annotate({ identifier: "IpMasqueradingSkippedInfo" });

export interface GkeNetworkPolicyInfo {
  /** The name of the Network Policy. */
  displayName?: string;
  /** The URI of the Network Policy. Format for a Network Policy in a zonal cluster: `projects//zones//clusters//k8s/namespaces//networking.k8s.io/networkpolicies/` Format for a Network Policy in a regional cluster: `projects//locations//clusters//k8s/namespaces//networking.k8s.io/networkpolicies/` */
  uri?: string;
  /** Possible values: INGRESS, EGRESS */
  direction?: string;
  /** Possible values: ALLOW, DENY */
  action?: string;
}

export const GkeNetworkPolicyInfo: Schema.Codec<GkeNetworkPolicyInfo> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    displayName: Schema.optional(Schema.String),
    uri: Schema.optional(Schema.String),
    direction: Schema.optional(Schema.String),
    action: Schema.optional(Schema.String),
  }).annotate({ identifier: "GkeNetworkPolicyInfo" });

export interface GkeNetworkPolicySkippedInfo {
  /** Reason why Network Policy evaluation was skipped. */
  reason?:
    | "REASON_UNSPECIFIED"
    | "NETWORK_POLICY_DISABLED"
    | "INGRESS_SOURCE_ON_SAME_NODE"
    | "EGRESS_FROM_NODE_NETWORK_NAMESPACE_POD"
    | "NETWORK_POLICY_NOT_APPLIED_TO_RESPONSE_TRAFFIC"
    | "NETWORK_POLICY_ANALYSIS_UNSUPPORTED"
    | (string & {});
}

export const GkeNetworkPolicySkippedInfo: Schema.Codec<GkeNetworkPolicySkippedInfo> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    reason: Schema.optional(Schema.String),
  }).annotate({ identifier: "GkeNetworkPolicySkippedInfo" });

export interface CloudSQLInstanceInfo {
  /** Name of a Cloud SQL instance. */
  displayName?: string;
  /** URI of a Cloud SQL instance in format "projects/{project}/instances/{instance}" */
  uri?: string;
  /** URI of a Cloud SQL instance network or empty string if the instance does not have one. In format "projects/{project}/global/networks/{network}". */
  networkUri?: string;
  /** Internal IP address of a Cloud SQL instance. */
  internalIp?: string;
  /** External IP address of a Cloud SQL instance. */
  externalIp?: string;
  /** Region in which the Cloud SQL instance is running. */
  region?: string;
}

export const CloudSQLInstanceInfo: Schema.Codec<CloudSQLInstanceInfo> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    displayName: Schema.optional(Schema.String),
    uri: Schema.optional(Schema.String),
    networkUri: Schema.optional(Schema.String),
    internalIp: Schema.optional(Schema.String),
    externalIp: Schema.optional(Schema.String),
    region: Schema.optional(Schema.String),
  }).annotate({ identifier: "CloudSQLInstanceInfo" });

export interface RedisInstanceInfo {
  /** Name of a Cloud Redis Instance. */
  displayName?: string;
  /** URI of a Cloud Redis Instance in format "projects/{project}/locations/{location}/instances/{instance}" */
  uri?: string;
  /** URI of a Cloud Redis Instance network in format "projects/{project}/global/networks/{network}". */
  networkUri?: string;
  /** Primary endpoint IP address of a Cloud Redis Instance. */
  primaryEndpointIp?: string;
  /** Read endpoint IP address of a Cloud Redis Instance (if applicable). */
  readEndpointIp?: string;
  /** Region in which the Cloud Redis Instance is defined. */
  region?: string;
}

export const RedisInstanceInfo: Schema.Codec<RedisInstanceInfo> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    displayName: Schema.optional(Schema.String),
    uri: Schema.optional(Schema.String),
    networkUri: Schema.optional(Schema.String),
    primaryEndpointIp: Schema.optional(Schema.String),
    readEndpointIp: Schema.optional(Schema.String),
    region: Schema.optional(Schema.String),
  }).annotate({ identifier: "RedisInstanceInfo" });

export interface RedisClusterInfo {
  /** Name of a Redis Cluster. */
  displayName?: string;
  /** URI of a Redis Cluster in format "projects/{project_id}/locations/{location}/clusters/{cluster_id}" */
  uri?: string;
  /** URI of the network containing the Redis Cluster endpoints in format "projects/{project_id}/global/networks/{network_id}". */
  networkUri?: string;
  /** Discovery endpoint IP address of a Redis Cluster. */
  discoveryEndpointIpAddress?: string;
  /** Secondary endpoint IP address of a Redis Cluster. */
  secondaryEndpointIpAddress?: string;
  /** Name of the region in which the Redis Cluster is defined. For example, "us-central1". */
  location?: string;
}

export const RedisClusterInfo: Schema.Codec<RedisClusterInfo> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    displayName: Schema.optional(Schema.String),
    uri: Schema.optional(Schema.String),
    networkUri: Schema.optional(Schema.String),
    discoveryEndpointIpAddress: Schema.optional(Schema.String),
    secondaryEndpointIpAddress: Schema.optional(Schema.String),
    location: Schema.optional(Schema.String),
  }).annotate({ identifier: "RedisClusterInfo" });

export interface CloudFunctionInfo {
  /** Name of a Cloud Function. */
  displayName?: string;
  /** URI of the Cloud Function. Format: `projects/{project_id}/locations/{location}/functions/{function_id}` */
  uri?: string;
  /** Location in which the Cloud Function is deployed. */
  location?: string;
  /** Latest successfully deployed version id of the Cloud Function. */
  versionId?: string;
}

export const CloudFunctionInfo: Schema.Codec<CloudFunctionInfo> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    displayName: Schema.optional(Schema.String),
    uri: Schema.optional(Schema.String),
    location: Schema.optional(Schema.String),
    versionId: Schema.optional(Schema.String),
  }).annotate({ identifier: "CloudFunctionInfo" });

export interface AppEngineVersionInfo {
  /** Name of an App Engine version. */
  displayName?: string;
  /** URI of the App Engine version. Format: `apps/{app_id}/services/{service_id}/versions/{version_id}` */
  uri?: string;
  /** Runtime of the App Engine version. */
  runtime?: string;
  /** App Engine execution environment for a version. */
  environment?: string;
}

export const AppEngineVersionInfo: Schema.Codec<AppEngineVersionInfo> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    displayName: Schema.optional(Schema.String),
    uri: Schema.optional(Schema.String),
    runtime: Schema.optional(Schema.String),
    environment: Schema.optional(Schema.String),
  }).annotate({ identifier: "AppEngineVersionInfo" });

export interface CloudRunRevisionInfo {
  /** Name of a Cloud Run revision. */
  displayName?: string;
  /** URI of the Cloud Run revision. Format: `projects/{project_id}/locations/{location}/revisions/{revision_id}` */
  uri?: string;
  /** Location in which this revision is deployed. */
  location?: string;
  /** URI of Cloud Run service this revision belongs to. Format: `projects/{project_id}/locations/{location}/services/{service_id}` */
  serviceUri?: string;
}

export const CloudRunRevisionInfo: Schema.Codec<CloudRunRevisionInfo> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    displayName: Schema.optional(Schema.String),
    uri: Schema.optional(Schema.String),
    location: Schema.optional(Schema.String),
    serviceUri: Schema.optional(Schema.String),
  }).annotate({ identifier: "CloudRunRevisionInfo" });

export interface CloudRunJobInfo {
  /** Name of a Cloud Run job. */
  displayName?: string;
  /** URI of the Cloud Run job. Format: `projects/{project_id}/locations/{location}/jobs/{job_id}` */
  uri?: string;
  /** Location in which this job is deployed. */
  location?: string;
}

export const CloudRunJobInfo: Schema.Codec<CloudRunJobInfo> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    displayName: Schema.optional(Schema.String),
    uri: Schema.optional(Schema.String),
    location: Schema.optional(Schema.String),
  }).annotate({ identifier: "CloudRunJobInfo" });

export interface NatInfo {
  /** Type of NAT. */
  type?:
    | "TYPE_UNSPECIFIED"
    | "INTERNAL_TO_EXTERNAL"
    | "EXTERNAL_TO_INTERNAL"
    | "CLOUD_NAT"
    | "PRIVATE_SERVICE_CONNECT"
    | "GKE_POD_IP_MASQUERADING"
    | (string & {});
  /** IP protocol in string format, for example: "TCP", "UDP", "ICMP". */
  protocol?: string;
  /** URI of the VPC network where NAT translation takes place. Format: `projects/{project_id}/global/networks/{network_id}` */
  networkUri?: string;
  /** Source IP address before NAT translation. */
  oldSourceIp?: string;
  /** Source IP address after NAT translation. */
  newSourceIp?: string;
  /** Destination IP address before NAT translation. */
  oldDestinationIp?: string;
  /** Destination IP address after NAT translation. */
  newDestinationIp?: string;
  /** Source port before NAT translation. Only valid when protocol is TCP or UDP. */
  oldSourcePort?: number;
  /** Source port after NAT translation. Only valid when protocol is TCP or UDP. */
  newSourcePort?: number;
  /** Destination port before NAT translation. Only valid when protocol is TCP or UDP. */
  oldDestinationPort?: number;
  /** Destination port after NAT translation. Only valid when protocol is TCP or UDP. */
  newDestinationPort?: number;
  /** URI of the Cloud Router. Only valid when type is CLOUD_NAT. Format: `projects/{project_id}/regions/{region}/routers/{router_id}` */
  routerUri?: string;
  /** The name of Cloud NAT Gateway. Only valid when type is CLOUD_NAT. */
  natGatewayName?: string;
  /** Type of Cloud NAT gateway. Only valid when `type` is CLOUD_NAT. */
  cloudNatGatewayType?:
    | "CLOUD_NAT_GATEWAY_TYPE_UNSPECIFIED"
    | "PUBLIC_NAT44"
    | "PUBLIC_NAT64"
    | "PRIVATE_NAT_NCC"
    | "PRIVATE_NAT_HYBRID"
    | "PRIVATE_NAT64"
    | (string & {});
}

export const NatInfo: Schema.Codec<NatInfo> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    type: Schema.optional(Schema.String),
    protocol: Schema.optional(Schema.String),
    networkUri: Schema.optional(Schema.String),
    oldSourceIp: Schema.optional(Schema.String),
    newSourceIp: Schema.optional(Schema.String),
    oldDestinationIp: Schema.optional(Schema.String),
    newDestinationIp: Schema.optional(Schema.String),
    oldSourcePort: Schema.optional(Schema.Number),
    newSourcePort: Schema.optional(Schema.Number),
    oldDestinationPort: Schema.optional(Schema.Number),
    newDestinationPort: Schema.optional(Schema.Number),
    routerUri: Schema.optional(Schema.String),
    natGatewayName: Schema.optional(Schema.String),
    cloudNatGatewayType: Schema.optional(Schema.String),
  }).annotate({ identifier: "NatInfo" });

export interface ProxyConnectionInfo {
  /** IP protocol in string format, for example: "TCP", "UDP", "ICMP". */
  protocol?: string;
  /** Source IP address of an original connection. */
  oldSourceIp?: string;
  /** Source IP address of a new connection. */
  newSourceIp?: string;
  /** Destination IP address of an original connection */
  oldDestinationIp?: string;
  /** Destination IP address of a new connection. */
  newDestinationIp?: string;
  /** Source port of an original connection. Only valid when protocol is TCP or UDP. */
  oldSourcePort?: number;
  /** Source port of a new connection. Only valid when protocol is TCP or UDP. */
  newSourcePort?: number;
  /** Destination port of an original connection. Only valid when protocol is TCP or UDP. */
  oldDestinationPort?: number;
  /** Destination port of a new connection. Only valid when protocol is TCP or UDP. */
  newDestinationPort?: number;
  /** URI of the proxy subnet. Format: `projects/{project_id}/regions/{region}/subnetworks/{subnetwork_id}` */
  subnetUri?: string;
  /** URI of the VPC network where connection is proxied. Format: `projects/{project_id}/global/networks/{network_id}` */
  networkUri?: string;
}

export const ProxyConnectionInfo: Schema.Codec<ProxyConnectionInfo> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    protocol: Schema.optional(Schema.String),
    oldSourceIp: Schema.optional(Schema.String),
    newSourceIp: Schema.optional(Schema.String),
    oldDestinationIp: Schema.optional(Schema.String),
    newDestinationIp: Schema.optional(Schema.String),
    oldSourcePort: Schema.optional(Schema.Number),
    newSourcePort: Schema.optional(Schema.Number),
    oldDestinationPort: Schema.optional(Schema.Number),
    newDestinationPort: Schema.optional(Schema.Number),
    subnetUri: Schema.optional(Schema.String),
    networkUri: Schema.optional(Schema.String),
  }).annotate({ identifier: "ProxyConnectionInfo" });

export interface LoadBalancerBackendInfo {
  /** Display name of the backend. For example, it might be an instance name for the instance group backends, or an IP address and port for zonal network endpoint group backends. */
  name?: string;
  /** URI of the backend instance (if applicable) in format "projects/{project}/zones/{zone}/instances/{instance}". Populated for instance group backends, and zonal NEG backends. */
  instanceUri?: string;
  /** URI of the backend service this backend belongs to (if applicable) in format "projects/{project}/regions/{region}/backendServices/{backend_service}" (regional) or "projects/{project}/global/backendServices/{backend_service}" (global). */
  backendServiceUri?: string;
  /** URI of the instance group this backend belongs to (if applicable) in format "projects/{project}/zones/{zone}/instanceGroups/{instance_group}". */
  instanceGroupUri?: string;
  /** URI of the network endpoint group this backend belongs to (if applicable) Format: * `projects/{project_id}/zones/{zone}/networkEndpointGroups/{neg_id}` (zonal NEG) * `projects/{project_id}/regions/{region}/networkEndpointGroups/{neg_id}` (regional NEG) * `projects/{project_id}/global/networkEndpointGroups/{neg_id}` (global NEG) */
  networkEndpointGroupUri?: string;
  /** URI of the backend bucket this backend targets (if applicable) in format "projects/{project}/global/backendBuckets/{backend_bucket}". */
  backendBucketUri?: string;
  /** URI of the PSC service attachment this PSC NEG backend targets (if applicable) in format "projects/{project}/regions/{region}/serviceAttachments/{service_attachment}". */
  pscServiceAttachmentUri?: string;
  /** PSC Google API target this PSC NEG backend targets (if applicable). */
  pscGoogleApiTarget?: string;
  /** URI of the health check attached to this backend (if applicable). Format: * `projects/{project_id}/global/healthChecks/{health_check_id}` * `projects/{project_id}/regions/{region}/healthChecks/{health_check_id}` * `projects/{project_id}/global/httpHealthChecks/{health_check_id}` (legacy) */
  healthCheckUri?: string;
  /** Output only. Health check firewalls configuration state for the backend. This is a result of the static firewall analysis (verifying that health check traffic from required IP ranges to the backend is allowed or not). The backend might still be unhealthy even if these firewalls are configured. Please refer to the documentation for more information: https://cloud.google.com/load-balancing/docs/firewall-rules */
  healthCheckFirewallsConfigState?:
    | "HEALTH_CHECK_FIREWALLS_CONFIG_STATE_UNSPECIFIED"
    | "FIREWALLS_CONFIGURED"
    | "FIREWALLS_PARTIALLY_CONFIGURED"
    | "FIREWALLS_NOT_CONFIGURED"
    | "FIREWALLS_UNSUPPORTED"
    | (string & {});
}

export const LoadBalancerBackendInfo: Schema.Codec<LoadBalancerBackendInfo> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.optional(Schema.String),
    instanceUri: Schema.optional(Schema.String),
    backendServiceUri: Schema.optional(Schema.String),
    instanceGroupUri: Schema.optional(Schema.String),
    networkEndpointGroupUri: Schema.optional(Schema.String),
    backendBucketUri: Schema.optional(Schema.String),
    pscServiceAttachmentUri: Schema.optional(Schema.String),
    pscGoogleApiTarget: Schema.optional(Schema.String),
    healthCheckUri: Schema.optional(Schema.String),
    healthCheckFirewallsConfigState: Schema.optional(Schema.String),
  }).annotate({ identifier: "LoadBalancerBackendInfo" });

export interface StorageBucketInfo {
  /** Cloud Storage Bucket name. */
  bucket?: string;
}

export const StorageBucketInfo: Schema.Codec<StorageBucketInfo> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    bucket: Schema.optional(Schema.String),
  }).annotate({ identifier: "StorageBucketInfo" });

export interface ServerlessNegInfo {
  /** URI of the serverless network endpoint group in format "projects/{project}/regions/{region}/networkEndpointGroups/{network_endpoint_group}". */
  negUri?: string;
}

export const ServerlessNegInfo: Schema.Codec<ServerlessNegInfo> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    negUri: Schema.optional(Schema.String),
  }).annotate({ identifier: "ServerlessNegInfo" });

export interface NgfwPacketInspectionInfo {
  /** URI of the security profile group associated with this firewall packet inspection. Format: `organizations/{organization_id}/locations/global/securityProfileGroups/{security_profile_group_id}` */
  securityProfileGroupUri?: string;
}

export const NgfwPacketInspectionInfo: Schema.Codec<NgfwPacketInspectionInfo> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    securityProfileGroupUri: Schema.optional(Schema.String),
  }).annotate({ identifier: "NgfwPacketInspectionInfo" });

export interface PrivateConnectionInfo {
  /** URI of the Private Connection in format "projects/{project_id}/locations/{location}/privateConnections/{private_connection_id}" */
  uri?: string;
}

export const PrivateConnectionInfo: Schema.Codec<PrivateConnectionInfo> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    uri: Schema.optional(Schema.String),
  }).annotate({ identifier: "PrivateConnectionInfo" });

export interface Step {
  /** A description of the step. Usually this is a summary of the state. */
  description?: string;
  /** Each step is in one of the pre-defined states. */
  state?:
    | "STATE_UNSPECIFIED"
    | "START_FROM_INSTANCE"
    | "START_FROM_INTERNET"
    | "START_FROM_GOOGLE_SERVICE"
    | "START_FROM_PRIVATE_NETWORK"
    | "START_FROM_GKE_MASTER"
    | "START_FROM_CLOUD_SQL_INSTANCE"
    | "START_FROM_GKE_POD"
    | "START_FROM_REDIS_INSTANCE"
    | "START_FROM_REDIS_CLUSTER"
    | "START_FROM_CLOUD_FUNCTION"
    | "START_FROM_APP_ENGINE_VERSION"
    | "START_FROM_CLOUD_RUN_REVISION"
    | "START_FROM_CLOUD_RUN_JOB"
    | "START_FROM_STORAGE_BUCKET"
    | "START_FROM_PSC_PUBLISHED_SERVICE"
    | "START_FROM_SERVERLESS_NEG"
    | "START_FROM_DMS_PRIVATE_CONNECTION"
    | "START_FROM_DATASTREAM_PRIVATE_CONNECTION"
    | "APPLY_INGRESS_FIREWALL_RULE"
    | "APPLY_EGRESS_FIREWALL_RULE"
    | "APPLY_ROUTE"
    | "APPLY_FORWARDING_RULE"
    | "ANALYZE_LOAD_BALANCER_BACKEND"
    | "SPOOFING_APPROVED"
    | "ARRIVE_AT_INSTANCE"
    | "ARRIVE_AT_INTERNAL_LOAD_BALANCER"
    | "ARRIVE_AT_EXTERNAL_LOAD_BALANCER"
    | "ARRIVE_AT_HYBRID_SUBNET"
    | "ARRIVE_AT_VPN_GATEWAY"
    | "ARRIVE_AT_VPN_TUNNEL"
    | "ARRIVE_AT_INTERCONNECT_ATTACHMENT"
    | "ARRIVE_AT_VPC_CONNECTOR"
    | "ARRIVE_AT_GKE_POD"
    | "DIRECT_VPC_EGRESS_CONNECTION"
    | "SERVERLESS_EXTERNAL_CONNECTION"
    | "NGFW_PACKET_INSPECTION"
    | "NAT"
    | "SKIP_GKE_POD_IP_MASQUERADING"
    | "SKIP_GKE_INGRESS_NETWORK_POLICY"
    | "SKIP_GKE_EGRESS_NETWORK_POLICY"
    | "APPLY_INGRESS_GKE_NETWORK_POLICY"
    | "APPLY_EGRESS_GKE_NETWORK_POLICY"
    | "PROXY_CONNECTION"
    | "DELIVER"
    | "DROP"
    | "FORWARD"
    | "ABORT"
    | "VIEWER_PERMISSION_MISSING"
    | (string & {});
  /** This is a step that leads to the final state Drop. */
  causesDrop?: boolean;
  /** Project ID that contains the configuration this step is validating. */
  projectId?: string;
  /** Display information of a Compute Engine instance. */
  instance?: InstanceInfo;
  /** Display information of a Compute Engine firewall rule. */
  firewall?: FirewallInfo;
  /** Display information of a Compute Engine route. */
  route?: RouteInfo;
  /** Display information of the source and destination under analysis. The endpoint information in an intermediate state may differ with the initial input, as it might be modified by state like NAT, or Connection Proxy. */
  endpoint?: EndpointInfo;
  /** Display information of a Google service */
  googleService?: GoogleServiceInfo;
  /** Display information of a Compute Engine forwarding rule. */
  forwardingRule?: ForwardingRuleInfo;
  /** Display information of a hybrid subnet. */
  hybridSubnet?: HybridSubnetInfo;
  /** Display information of a Compute Engine VPN gateway. */
  vpnGateway?: VpnGatewayInfo;
  /** Display information of a Compute Engine VPN tunnel. */
  vpnTunnel?: VpnTunnelInfo;
  /** Display information of an interconnect attachment. */
  interconnectAttachment?: InterconnectAttachmentInfo;
  /** Display information of a VPC connector. */
  vpcConnector?: VpcConnectorInfo;
  /** Display information of a serverless direct VPC egress connection. */
  directVpcEgressConnection?: DirectVpcEgressConnectionInfo;
  /** Display information of a serverless public (external) connection. */
  serverlessExternalConnection?: ServerlessExternalConnectionInfo;
  /** Display information of the final state "deliver" and reason. */
  deliver?: DeliverInfo;
  /** Display information of the final state "forward" and reason. */
  forward?: ForwardInfo;
  /** Display information of the final state "abort" and reason. */
  abort?: AbortInfo;
  /** Display information of the final state "drop" and reason. */
  drop?: DropInfo;
  /** Display information of the load balancers. Deprecated in favor of the `load_balancer_backend_info` field, not used in new tests. */
  loadBalancer?: LoadBalancerInfo;
  /** Display information of a Google Cloud network. */
  network?: NetworkInfo;
  /** Display information of a Google Kubernetes Engine cluster master. */
  gkeMaster?: GKEMasterInfo;
  /** Display information of a Google Kubernetes Engine Pod. */
  gkePod?: GkePodInfo;
  /** Display information of the reason why GKE Pod IP masquerading was skipped. */
  ipMasqueradingSkipped?: IpMasqueradingSkippedInfo;
  /** Display information of a GKE Network Policy. */
  gkeNetworkPolicy?: GkeNetworkPolicyInfo;
  /** Display information of the reason why GKE Network Policy evaluation was skipped. */
  gkeNetworkPolicySkipped?: GkeNetworkPolicySkippedInfo;
  /** Display information of a Cloud SQL instance. */
  cloudSqlInstance?: CloudSQLInstanceInfo;
  /** Display information of a Redis Instance. */
  redisInstance?: RedisInstanceInfo;
  /** Display information of a Redis Cluster. */
  redisCluster?: RedisClusterInfo;
  /** Display information of a Cloud Function. */
  cloudFunction?: CloudFunctionInfo;
  /** Display information of an App Engine service version. */
  appEngineVersion?: AppEngineVersionInfo;
  /** Display information of a Cloud Run revision. */
  cloudRunRevision?: CloudRunRevisionInfo;
  /** Display information of a Cloud Run job. */
  cloudRunJob?: CloudRunJobInfo;
  /** Display information of a NAT. */
  nat?: NatInfo;
  /** Display information of a ProxyConnection. */
  proxyConnection?: ProxyConnectionInfo;
  /** Display information of a specific load balancer backend. */
  loadBalancerBackendInfo?: LoadBalancerBackendInfo;
  /** Display information of a Storage Bucket. Used only for return traces. */
  storageBucket?: StorageBucketInfo;
  /** Display information of a Serverless network endpoint group backend. Used only for return traces. */
  serverlessNeg?: ServerlessNegInfo;
  /** Display information of a layer 7 packet inspection by the firewall. */
  ngfwPacketInspection?: NgfwPacketInspectionInfo;
  /** Display information of a DMS Private Connection. */
  dmsPrivateConnection?: PrivateConnectionInfo;
  /** Display information of a Datastream Private Connection. */
  datastreamPrivateConnection?: PrivateConnectionInfo;
}

export const Step: Schema.Codec<Step> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    description: Schema.optional(Schema.String),
    state: Schema.optional(Schema.String),
    causesDrop: Schema.optional(Schema.Boolean),
    projectId: Schema.optional(Schema.String),
    instance: Schema.optional(InstanceInfo),
    firewall: Schema.optional(FirewallInfo),
    route: Schema.optional(RouteInfo),
    endpoint: Schema.optional(EndpointInfo),
    googleService: Schema.optional(GoogleServiceInfo),
    forwardingRule: Schema.optional(ForwardingRuleInfo),
    hybridSubnet: Schema.optional(HybridSubnetInfo),
    vpnGateway: Schema.optional(VpnGatewayInfo),
    vpnTunnel: Schema.optional(VpnTunnelInfo),
    interconnectAttachment: Schema.optional(InterconnectAttachmentInfo),
    vpcConnector: Schema.optional(VpcConnectorInfo),
    directVpcEgressConnection: Schema.optional(DirectVpcEgressConnectionInfo),
    serverlessExternalConnection: Schema.optional(
      ServerlessExternalConnectionInfo,
    ),
    deliver: Schema.optional(DeliverInfo),
    forward: Schema.optional(ForwardInfo),
    abort: Schema.optional(AbortInfo),
    drop: Schema.optional(DropInfo),
    loadBalancer: Schema.optional(LoadBalancerInfo),
    network: Schema.optional(NetworkInfo),
    gkeMaster: Schema.optional(GKEMasterInfo),
    gkePod: Schema.optional(GkePodInfo),
    ipMasqueradingSkipped: Schema.optional(IpMasqueradingSkippedInfo),
    gkeNetworkPolicy: Schema.optional(GkeNetworkPolicyInfo),
    gkeNetworkPolicySkipped: Schema.optional(GkeNetworkPolicySkippedInfo),
    cloudSqlInstance: Schema.optional(CloudSQLInstanceInfo),
    redisInstance: Schema.optional(RedisInstanceInfo),
    redisCluster: Schema.optional(RedisClusterInfo),
    cloudFunction: Schema.optional(CloudFunctionInfo),
    appEngineVersion: Schema.optional(AppEngineVersionInfo),
    cloudRunRevision: Schema.optional(CloudRunRevisionInfo),
    cloudRunJob: Schema.optional(CloudRunJobInfo),
    nat: Schema.optional(NatInfo),
    proxyConnection: Schema.optional(ProxyConnectionInfo),
    loadBalancerBackendInfo: Schema.optional(LoadBalancerBackendInfo),
    storageBucket: Schema.optional(StorageBucketInfo),
    serverlessNeg: Schema.optional(ServerlessNegInfo),
    ngfwPacketInspection: Schema.optional(NgfwPacketInspectionInfo),
    dmsPrivateConnection: Schema.optional(PrivateConnectionInfo),
    datastreamPrivateConnection: Schema.optional(PrivateConnectionInfo),
  }).annotate({ identifier: "Step" });

export interface Trace {
  /** Derived from the source and destination endpoints definition specified by user request, and validated by the data plane model. If there are multiple traces starting from different source locations, then the endpoint_info may be different between traces. */
  endpointInfo?: EndpointInfo;
  /** A trace of a test contains multiple steps from the initial state to the final state (delivered, dropped, forwarded, or aborted). The steps are ordered by the processing sequence within the simulated network state machine. It is critical to preserve the order of the steps and avoid reordering or sorting them. */
  steps?: ReadonlyArray<Step>;
  /** ID of trace. For forward traces, this ID is unique for each trace. For return traces, it matches ID of associated forward trace. A single forward trace can be associated with none, one or more than one return trace. */
  forwardTraceId?: number;
}

export const Trace: Schema.Codec<Trace> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    endpointInfo: Schema.optional(EndpointInfo),
    steps: Schema.optional(Schema.Array(Step)),
    forwardTraceId: Schema.optional(Schema.Number),
  }).annotate({ identifier: "Trace" });

export interface ReachabilityDetails {
  /** The overall result of the test's configuration analysis. */
  result?:
    | "RESULT_UNSPECIFIED"
    | "REACHABLE"
    | "UNREACHABLE"
    | "AMBIGUOUS"
    | "UNDETERMINED"
    | (string & {});
  /** The time of the configuration analysis. */
  verifyTime?: string;
  /** The details of a failure or a cancellation of reachability analysis. */
  error?: Status;
  /** Result may contain a list of traces if a test has multiple possible paths in the network, such as when destination endpoint is a load balancer with multiple backends. */
  traces?: ReadonlyArray<Trace>;
}

export const ReachabilityDetails: Schema.Codec<ReachabilityDetails> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    result: Schema.optional(Schema.String),
    verifyTime: Schema.optional(Schema.String),
    error: Schema.optional(Status),
    traces: Schema.optional(Schema.Array(Trace)),
  }).annotate({ identifier: "ReachabilityDetails" });

export interface LatencyPercentile {
  /** Percentage of samples this data point applies to. */
  percent?: number;
  /** percent-th percentile of latency observed, in microseconds. Fraction of percent/100 of samples have latency lower or equal to the value of this field. */
  latencyMicros?: string;
}

export const LatencyPercentile: Schema.Codec<LatencyPercentile> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    percent: Schema.optional(Schema.Number),
    latencyMicros: Schema.optional(Schema.String),
  }).annotate({ identifier: "LatencyPercentile" });

export interface LatencyDistribution {
  /** Representative latency percentiles. */
  latencyPercentiles?: ReadonlyArray<LatencyPercentile>;
}

export const LatencyDistribution: Schema.Codec<LatencyDistribution> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    latencyPercentiles: Schema.optional(Schema.Array(LatencyPercentile)),
  }).annotate({ identifier: "LatencyDistribution" });

export interface EdgeLocation {
  /** Name of the metropolitan area. */
  metropolitanArea?: string;
}

export const EdgeLocation: Schema.Codec<EdgeLocation> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    metropolitanArea: Schema.optional(Schema.String),
  }).annotate({ identifier: "EdgeLocation" });

export interface SingleEdgeResponse {
  /** The overall result of active probing for this egress device. */
  result?:
    | "PROBING_RESULT_UNSPECIFIED"
    | "REACHABLE"
    | "UNREACHABLE"
    | "REACHABILITY_INCONSISTENT"
    | "UNDETERMINED"
    | (string & {});
  /** Number of probes sent. */
  sentProbeCount?: number;
  /** Number of probes that reached the destination. */
  successfulProbeCount?: number;
  /** Latency as measured by active probing in one direction: from the source to the destination endpoint. */
  probingLatency?: LatencyDistribution;
  /** The EdgeLocation from which a packet, destined to the internet, will egress the Google network. This will only be populated for a connectivity test which has an internet destination address. The absence of this field *must not* be used as an indication that the destination is part of the Google network. */
  destinationEgressLocation?: EdgeLocation;
  /** Router name in the format '{router}.{metroshard}'. For example: pf01.aaa01, pr02.aaa01. */
  destinationRouter?: string;
}

export const SingleEdgeResponse: Schema.Codec<SingleEdgeResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    result: Schema.optional(Schema.String),
    sentProbeCount: Schema.optional(Schema.Number),
    successfulProbeCount: Schema.optional(Schema.Number),
    probingLatency: Schema.optional(LatencyDistribution),
    destinationEgressLocation: Schema.optional(EdgeLocation),
    destinationRouter: Schema.optional(Schema.String),
  }).annotate({ identifier: "SingleEdgeResponse" });

export interface ProbingDetails {
  /** The overall result of active probing. */
  result?:
    | "PROBING_RESULT_UNSPECIFIED"
    | "REACHABLE"
    | "UNREACHABLE"
    | "REACHABILITY_INCONSISTENT"
    | "UNDETERMINED"
    | (string & {});
  /** The time that reachability was assessed through active probing. */
  verifyTime?: string;
  /** Details about an internal failure or the cancellation of active probing. */
  error?: Status;
  /** The reason probing was aborted. */
  abortCause?:
    | "PROBING_ABORT_CAUSE_UNSPECIFIED"
    | "PERMISSION_DENIED"
    | "NO_SOURCE_LOCATION"
    | (string & {});
  /** Number of probes sent. */
  sentProbeCount?: number;
  /** Number of probes that reached the destination. */
  successfulProbeCount?: number;
  /** The source and destination endpoints derived from the test input and used for active probing. */
  endpointInfo?: EndpointInfo;
  /** Latency as measured by active probing in one direction: from the source to the destination endpoint. */
  probingLatency?: LatencyDistribution;
  /** The EdgeLocation from which a packet, destined to the internet, will egress the Google network. This will only be populated for a connectivity test which has an internet destination address. The absence of this field *must not* be used as an indication that the destination is part of the Google network. */
  destinationEgressLocation?: EdgeLocation;
  /** Probing results for all edge devices. */
  edgeResponses?: ReadonlyArray<SingleEdgeResponse>;
  /** Whether all relevant edge devices were probed. */
  probedAllDevices?: boolean;
}

export const ProbingDetails: Schema.Codec<ProbingDetails> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    result: Schema.optional(Schema.String),
    verifyTime: Schema.optional(Schema.String),
    error: Schema.optional(Status),
    abortCause: Schema.optional(Schema.String),
    sentProbeCount: Schema.optional(Schema.Number),
    successfulProbeCount: Schema.optional(Schema.Number),
    endpointInfo: Schema.optional(EndpointInfo),
    probingLatency: Schema.optional(LatencyDistribution),
    destinationEgressLocation: Schema.optional(EdgeLocation),
    edgeResponses: Schema.optional(Schema.Array(SingleEdgeResponse)),
    probedAllDevices: Schema.optional(Schema.Boolean),
  }).annotate({ identifier: "ProbingDetails" });

export interface ConnectivityTest {
  /** Identifier. Unique name of the resource using the form: `projects/{project_id}/locations/global/connectivityTests/{test_id}` */
  name?: string;
  /** The user-supplied description of the Connectivity Test. Maximum of 512 characters. */
  description?: string;
  /** Required. Source specification of the Connectivity Test. You can use a combination of source IP address, URI of a supported endpoint, project ID, or VPC network to identify the source location. Reachability analysis might proceed even if the source location is ambiguous. However, the test result might include endpoints or use a source that you don't intend to test. */
  source?: Endpoint;
  /** Required. Destination specification of the Connectivity Test. You can use a combination of destination IP address, URI of a supported endpoint, project ID, or VPC network to identify the destination location. Reachability analysis proceeds even if the destination location is ambiguous. However, the test result might include endpoints or use a destination that you don't intend to test. */
  destination?: Endpoint;
  /** IP Protocol of the test. When not provided, "TCP" is assumed. */
  protocol?: string;
  /** Other projects that may be relevant for reachability analysis. This is applicable to scenarios where a test can cross project boundaries. */
  relatedProjects?: ReadonlyArray<string>;
  /** Output only. The display name of a Connectivity Test. */
  displayName?: string;
  /** Resource labels to represent user-provided metadata. */
  labels?: Record<string, string>;
  /** Output only. The time the test was created. */
  createTime?: string;
  /** Output only. The time the test's configuration was updated. */
  updateTime?: string;
  /** Output only. The reachability details of this test from the latest run. The details are updated when creating a new test, updating an existing test, or triggering a one-time rerun of an existing test. */
  reachabilityDetails?: ReachabilityDetails;
  /** Output only. The probing details of this test from the latest run, present for applicable tests only. The details are updated when creating a new test, updating an existing test, or triggering a one-time rerun of an existing test. */
  probingDetails?: ProbingDetails;
  /** Whether run analysis for the return path from destination to source. Default value is false. */
  roundTrip?: boolean;
  /** Output only. The reachability details of this test from the latest run for the return path. The details are updated when creating a new test, updating an existing test, or triggering a one-time rerun of an existing test. */
  returnReachabilityDetails?: ReachabilityDetails;
  /** Whether the analysis should skip firewall checking. Default value is false. */
  bypassFirewallChecks?: boolean;
}

export const ConnectivityTest: Schema.Codec<ConnectivityTest> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.optional(Schema.String),
    description: Schema.optional(Schema.String),
    source: Schema.optional(Endpoint),
    destination: Schema.optional(Endpoint),
    protocol: Schema.optional(Schema.String),
    relatedProjects: Schema.optional(Schema.Array(Schema.String)),
    displayName: Schema.optional(Schema.String),
    labels: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    createTime: Schema.optional(Schema.String),
    updateTime: Schema.optional(Schema.String),
    reachabilityDetails: Schema.optional(ReachabilityDetails),
    probingDetails: Schema.optional(ProbingDetails),
    roundTrip: Schema.optional(Schema.Boolean),
    returnReachabilityDetails: Schema.optional(ReachabilityDetails),
    bypassFirewallChecks: Schema.optional(Schema.Boolean),
  }).annotate({ identifier: "ConnectivityTest" });

export interface ListConnectivityTestsResponse {
  /** List of Connectivity Tests. */
  resources?: ReadonlyArray<ConnectivityTest>;
  /** Page token to fetch the next set of Connectivity Tests. */
  nextPageToken?: string;
  /** Locations that could not be reached (when querying all locations with `-`). */
  unreachable?: ReadonlyArray<string>;
}

export const ListConnectivityTestsResponse: Schema.Codec<ListConnectivityTestsResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    resources: Schema.optional(Schema.Array(ConnectivityTest)),
    nextPageToken: Schema.optional(Schema.String),
    unreachable: Schema.optional(Schema.Array(Schema.String)),
  }).annotate({ identifier: "ListConnectivityTestsResponse" });

export interface RerunConnectivityTestRequest {}

export const RerunConnectivityTestRequest: Schema.Codec<RerunConnectivityTestRequest> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).annotate({
    identifier: "RerunConnectivityTestRequest",
  });

export interface VpcFlowLogsConfig {
  /** Identifier. Unique name of the configuration. The name can have one of the following forms: - For project-level configurations: `projects/{project_id}/locations/global/vpcFlowLogsConfigs/{vpc_flow_logs_config_id}` - For organization-level configurations: `organizations/{organization_id}/locations/global/vpcFlowLogsConfigs/{vpc_flow_logs_config_id}` */
  name?: string;
  /** Optional. The user-supplied description of the VPC Flow Logs configuration. Maximum of 512 characters. */
  description?: string;
  /** Optional. The state of the VPC Flow Log configuration. Default value is ENABLED. When creating a new configuration, it must be enabled. Setting state=DISABLED will pause the log generation for this config. */
  state?: "STATE_UNSPECIFIED" | "ENABLED" | "DISABLED" | (string & {});
  /** Optional. The aggregation interval for the logs. Default value is INTERVAL_5_SEC. */
  aggregationInterval?:
    | "AGGREGATION_INTERVAL_UNSPECIFIED"
    | "INTERVAL_5_SEC"
    | "INTERVAL_30_SEC"
    | "INTERVAL_1_MIN"
    | "INTERVAL_5_MIN"
    | "INTERVAL_10_MIN"
    | "INTERVAL_15_MIN"
    | (string & {});
  /** Optional. The value of the field must be in (0, 1]. The sampling rate of VPC Flow Logs where 1.0 means all collected logs are reported. Setting the sampling rate to 0.0 is not allowed. If you want to disable VPC Flow Logs, use the state field instead. Default value is 1.0. */
  flowSampling?: number;
  /** Optional. Configures whether all, none or a subset of metadata fields should be added to the reported VPC flow logs. Default value is INCLUDE_ALL_METADATA. */
  metadata?:
    | "METADATA_UNSPECIFIED"
    | "INCLUDE_ALL_METADATA"
    | "EXCLUDE_ALL_METADATA"
    | "CUSTOM_METADATA"
    | (string & {});
  /** Optional. Custom metadata fields to include in the reported VPC flow logs. Can only be specified if "metadata" was set to CUSTOM_METADATA. */
  metadataFields?: ReadonlyArray<string>;
  /** Optional. Export filter used to define which VPC Flow Logs should be logged. */
  filterExpr?: string;
  /** Optional. Determines whether to include cross project annotations in the logs. This field is available only for organization configurations. If not specified in org configs will be set to CROSS_PROJECT_METADATA_ENABLED. */
  crossProjectMetadata?:
    | "CROSS_PROJECT_METADATA_UNSPECIFIED"
    | "CROSS_PROJECT_METADATA_ENABLED"
    | "CROSS_PROJECT_METADATA_DISABLED"
    | (string & {});
  /** Output only. Describes the state of the configured target resource for diagnostic purposes. */
  targetResourceState?:
    | "TARGET_RESOURCE_STATE_UNSPECIFIED"
    | "TARGET_RESOURCE_EXISTS"
    | "TARGET_RESOURCE_DOES_NOT_EXIST"
    | (string & {});
  /** Traffic will be logged from VMs, VPN tunnels and Interconnect Attachments within the network. Format: projects/{project_id}/global/networks/{name} */
  network?: string;
  /** Traffic will be logged from VMs within the subnetwork. Format: projects/{project_id}/regions/{region}/subnetworks/{name} */
  subnet?: string;
  /** Traffic will be logged from the Interconnect Attachment. Format: projects/{project_id}/regions/{region}/interconnectAttachments/{name} */
  interconnectAttachment?: string;
  /** Traffic will be logged from the VPN Tunnel. Format: projects/{project_id}/regions/{region}/vpnTunnels/{name} */
  vpnTunnel?: string;
  /** Optional. Resource labels to represent user-provided metadata. */
  labels?: Record<string, string>;
  /** Output only. The time the config was created. */
  createTime?: string;
  /** Output only. The time the config was updated. */
  updateTime?: string;
}

export const VpcFlowLogsConfig: Schema.Codec<VpcFlowLogsConfig> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.optional(Schema.String),
    description: Schema.optional(Schema.String),
    state: Schema.optional(Schema.String),
    aggregationInterval: Schema.optional(Schema.String),
    flowSampling: Schema.optional(Schema.Number),
    metadata: Schema.optional(Schema.String),
    metadataFields: Schema.optional(Schema.Array(Schema.String)),
    filterExpr: Schema.optional(Schema.String),
    crossProjectMetadata: Schema.optional(Schema.String),
    targetResourceState: Schema.optional(Schema.String),
    network: Schema.optional(Schema.String),
    subnet: Schema.optional(Schema.String),
    interconnectAttachment: Schema.optional(Schema.String),
    vpnTunnel: Schema.optional(Schema.String),
    labels: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    createTime: Schema.optional(Schema.String),
    updateTime: Schema.optional(Schema.String),
  }).annotate({ identifier: "VpcFlowLogsConfig" });

export interface ListVpcFlowLogsConfigsResponse {
  /** List of VPC Flow Log configurations. */
  vpcFlowLogsConfigs?: ReadonlyArray<VpcFlowLogsConfig>;
  /** Page token to fetch the next set of configurations. */
  nextPageToken?: string;
  /** Locations that could not be reached (when querying all locations with `-`). */
  unreachable?: ReadonlyArray<string>;
}

export const ListVpcFlowLogsConfigsResponse: Schema.Codec<ListVpcFlowLogsConfigsResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    vpcFlowLogsConfigs: Schema.optional(Schema.Array(VpcFlowLogsConfig)),
    nextPageToken: Schema.optional(Schema.String),
    unreachable: Schema.optional(Schema.Array(Schema.String)),
  }).annotate({ identifier: "ListVpcFlowLogsConfigsResponse" });

export interface QueryOrgVpcFlowLogsConfigsResponse {
  /** List of VPC Flow Log configurations. */
  vpcFlowLogsConfigs?: ReadonlyArray<VpcFlowLogsConfig>;
  /** Page token to fetch the next set of configurations. */
  nextPageToken?: string;
  /** Locations that could not be reached (when querying all locations with `-`). */
  unreachable?: ReadonlyArray<string>;
}

export const QueryOrgVpcFlowLogsConfigsResponse: Schema.Codec<QueryOrgVpcFlowLogsConfigsResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    vpcFlowLogsConfigs: Schema.optional(Schema.Array(VpcFlowLogsConfig)),
    nextPageToken: Schema.optional(Schema.String),
    unreachable: Schema.optional(Schema.Array(Schema.String)),
  }).annotate({ identifier: "QueryOrgVpcFlowLogsConfigsResponse" });

export interface EffectiveVpcFlowLogsConfig {
  /** Unique name of the configuration. The name can have one of the following forms: - For project-level configurations: `projects/{project_id}/locations/global/vpcFlowLogsConfigs/{vpc_flow_logs_config_id}` - For organization-level configurations: `organizations/{organization_id}/locations/global/vpcFlowLogsConfigs/{vpc_flow_logs_config_id}` - For a Compute config, the name will be the path of the subnet: `projects/{project_id}/regions/{region}/subnetworks/{subnet_id}` */
  name?: string;
  /** The state of the VPC Flow Log configuration. Default value is ENABLED. When creating a new configuration, it must be enabled. Setting state=DISABLED will pause the log generation for this config. */
  state?: "STATE_UNSPECIFIED" | "ENABLED" | "DISABLED" | (string & {});
  /** The aggregation interval for the logs. Default value is INTERVAL_5_SEC. */
  aggregationInterval?:
    | "AGGREGATION_INTERVAL_UNSPECIFIED"
    | "INTERVAL_5_SEC"
    | "INTERVAL_30_SEC"
    | "INTERVAL_1_MIN"
    | "INTERVAL_5_MIN"
    | "INTERVAL_10_MIN"
    | "INTERVAL_15_MIN"
    | (string & {});
  /** The value of the field must be in (0, 1]. The sampling rate of VPC Flow Logs where 1.0 means all collected logs are reported. Setting the sampling rate to 0.0 is not allowed. If you want to disable VPC Flow Logs, use the state field instead. Default value is 1.0. */
  flowSampling?: number;
  /** Configures whether all, none or a subset of metadata fields should be added to the reported VPC flow logs. Default value is INCLUDE_ALL_METADATA. */
  metadata?:
    | "METADATA_UNSPECIFIED"
    | "INCLUDE_ALL_METADATA"
    | "EXCLUDE_ALL_METADATA"
    | "CUSTOM_METADATA"
    | (string & {});
  /** Custom metadata fields to include in the reported VPC flow logs. Can only be specified if "metadata" was set to CUSTOM_METADATA. */
  metadataFields?: ReadonlyArray<string>;
  /** Export filter used to define which VPC Flow Logs should be logged. */
  filterExpr?: string;
  /** Determines whether to include cross project annotations in the logs. This field is available only for organization configurations. If not specified in org configs will be set to CROSS_PROJECT_METADATA_ENABLED. */
  crossProjectMetadata?:
    | "CROSS_PROJECT_METADATA_UNSPECIFIED"
    | "CROSS_PROJECT_METADATA_ENABLED"
    | "CROSS_PROJECT_METADATA_DISABLED"
    | (string & {});
  /** Traffic will be logged from VMs, VPN tunnels and Interconnect Attachments within the network. Format: projects/{project_id}/global/networks/{name} */
  network?: string;
  /** Traffic will be logged from VMs within the subnetwork. Format: projects/{project_id}/regions/{region}/subnetworks/{name} */
  subnet?: string;
  /** Traffic will be logged from the Interconnect Attachment. Format: projects/{project_id}/regions/{region}/interconnectAttachments/{name} */
  interconnectAttachment?: string;
  /** Traffic will be logged from the VPN Tunnel. Format: projects/{project_id}/regions/{region}/vpnTunnels/{name} */
  vpnTunnel?: string;
  /** Specifies the scope of the config (e.g., SUBNET, NETWORK, ORGANIZATION..). */
  scope?:
    | "SCOPE_UNSPECIFIED"
    | "SUBNET"
    | "COMPUTE_API_SUBNET"
    | "NETWORK"
    | "VPN_TUNNEL"
    | "INTERCONNECT_ATTACHMENT"
    | "ORGANIZATION"
    | (string & {});
}

export const EffectiveVpcFlowLogsConfig: Schema.Codec<EffectiveVpcFlowLogsConfig> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.optional(Schema.String),
    state: Schema.optional(Schema.String),
    aggregationInterval: Schema.optional(Schema.String),
    flowSampling: Schema.optional(Schema.Number),
    metadata: Schema.optional(Schema.String),
    metadataFields: Schema.optional(Schema.Array(Schema.String)),
    filterExpr: Schema.optional(Schema.String),
    crossProjectMetadata: Schema.optional(Schema.String),
    network: Schema.optional(Schema.String),
    subnet: Schema.optional(Schema.String),
    interconnectAttachment: Schema.optional(Schema.String),
    vpnTunnel: Schema.optional(Schema.String),
    scope: Schema.optional(Schema.String),
  }).annotate({ identifier: "EffectiveVpcFlowLogsConfig" });

export interface ShowEffectiveFlowLogsConfigsResponse {
  /** List of Effective Vpc Flow Logs configurations. */
  effectiveFlowLogsConfigs?: ReadonlyArray<EffectiveVpcFlowLogsConfig>;
  /** Page token to fetch the next set of configurations. */
  nextPageToken?: string;
  /** Locations that could not be reached (when querying all locations with `-`). */
  unreachable?: ReadonlyArray<string>;
}

export const ShowEffectiveFlowLogsConfigsResponse: Schema.Codec<ShowEffectiveFlowLogsConfigsResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    effectiveFlowLogsConfigs: Schema.optional(
      Schema.Array(EffectiveVpcFlowLogsConfig),
    ),
    nextPageToken: Schema.optional(Schema.String),
    unreachable: Schema.optional(Schema.Array(Schema.String)),
  }).annotate({ identifier: "ShowEffectiveFlowLogsConfigsResponse" });

export interface Expr {
  /** Textual representation of an expression in Common Expression Language syntax. */
  expression?: string;
  /** Optional. Title for the expression, i.e. a short string describing its purpose. This can be used e.g. in UIs which allow to enter the expression. */
  title?: string;
  /** Optional. Description of the expression. This is a longer text which describes the expression, e.g. when hovered over it in a UI. */
  description?: string;
  /** Optional. String indicating the location of the expression for error reporting, e.g. a file name and a position in the file. */
  location?: string;
}

export const Expr: Schema.Codec<Expr> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    expression: Schema.optional(Schema.String),
    title: Schema.optional(Schema.String),
    description: Schema.optional(Schema.String),
    location: Schema.optional(Schema.String),
  }).annotate({ identifier: "Expr" });

export interface Binding {
  /** Role that is assigned to the list of `members`, or principals. For example, `roles/viewer`, `roles/editor`, or `roles/owner`. For an overview of the IAM roles and permissions, see the [IAM documentation](https://cloud.google.com/iam/docs/roles-overview). For a list of the available pre-defined roles, see [here](https://cloud.google.com/iam/docs/understanding-roles). */
  role?: string;
  /** Specifies the principals requesting access for a Google Cloud resource. `members` can have the following values: * `allUsers`: A special identifier that represents anyone who is on the internet; with or without a Google account. * `allAuthenticatedUsers`: A special identifier that represents anyone who is authenticated with a Google account or a service account. Does not include identities that come from external identity providers (IdPs) through identity federation. * `user:{emailid}`: An email address that represents a specific Google account. For example, `alice@example.com` . * `serviceAccount:{emailid}`: An email address that represents a Google service account. For example, `my-other-app@appspot.gserviceaccount.com`. * `serviceAccount:{projectid}.svc.id.goog[{namespace}/{kubernetes-sa}]`: An identifier for a [Kubernetes service account](https://cloud.google.com/kubernetes-engine/docs/how-to/kubernetes-service-accounts). For example, `my-project.svc.id.goog[my-namespace/my-kubernetes-sa]`. * `group:{emailid}`: An email address that represents a Google group. For example, `admins@example.com`. * `domain:{domain}`: The G Suite domain (primary) that represents all the users of that domain. For example, `google.com` or `example.com`. * `principal://iam.googleapis.com/locations/global/workforcePools/{pool_id}/subject/{subject_attribute_value}`: A single identity in a workforce identity pool. * `principalSet://iam.googleapis.com/locations/global/workforcePools/{pool_id}/group/{group_id}`: All workforce identities in a group. * `principalSet://iam.googleapis.com/locations/global/workforcePools/{pool_id}/attribute.{attribute_name}/{attribute_value}`: All workforce identities with a specific attribute value. * `principalSet://iam.googleapis.com/locations/global/workforcePools/{pool_id}/*`: All identities in a workforce identity pool. * `principal://iam.googleapis.com/projects/{project_number}/locations/global/workloadIdentityPools/{pool_id}/subject/{subject_attribute_value}`: A single identity in a workload identity pool. * `principalSet://iam.googleapis.com/projects/{project_number}/locations/global/workloadIdentityPools/{pool_id}/group/{group_id}`: A workload identity pool group. * `principalSet://iam.googleapis.com/projects/{project_number}/locations/global/workloadIdentityPools/{pool_id}/attribute.{attribute_name}/{attribute_value}`: All identities in a workload identity pool with a certain attribute. * `principalSet://iam.googleapis.com/projects/{project_number}/locations/global/workloadIdentityPools/{pool_id}/*`: All identities in a workload identity pool. * `deleted:user:{emailid}?uid={uniqueid}`: An email address (plus unique identifier) representing a user that has been recently deleted. For example, `alice@example.com?uid=123456789012345678901`. If the user is recovered, this value reverts to `user:{emailid}` and the recovered user retains the role in the binding. * `deleted:serviceAccount:{emailid}?uid={uniqueid}`: An email address (plus unique identifier) representing a service account that has been recently deleted. For example, `my-other-app@appspot.gserviceaccount.com?uid=123456789012345678901`. If the service account is undeleted, this value reverts to `serviceAccount:{emailid}` and the undeleted service account retains the role in the binding. * `deleted:group:{emailid}?uid={uniqueid}`: An email address (plus unique identifier) representing a Google group that has been recently deleted. For example, `admins@example.com?uid=123456789012345678901`. If the group is recovered, this value reverts to `group:{emailid}` and the recovered group retains the role in the binding. * `deleted:principal://iam.googleapis.com/locations/global/workforcePools/{pool_id}/subject/{subject_attribute_value}`: Deleted single identity in a workforce identity pool. For example, `deleted:principal://iam.googleapis.com/locations/global/workforcePools/my-pool-id/subject/my-subject-attribute-value`. */
  members?: ReadonlyArray<string>;
  /** The condition that is associated with this binding. If the condition evaluates to `true`, then this binding applies to the current request. If the condition evaluates to `false`, then this binding does not apply to the current request. However, a different role binding might grant the same role to one or more of the principals in this binding. To learn which resources support conditions in their IAM policies, see the [IAM documentation](https://cloud.google.com/iam/help/conditions/resource-policies). */
  condition?: Expr;
}

export const Binding: Schema.Codec<Binding> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    role: Schema.optional(Schema.String),
    members: Schema.optional(Schema.Array(Schema.String)),
    condition: Schema.optional(Expr),
  }).annotate({ identifier: "Binding" });

export interface AuditLogConfig {
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

export const AuditLogConfig: Schema.Codec<AuditLogConfig> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    logType: Schema.optional(Schema.String),
    exemptedMembers: Schema.optional(Schema.Array(Schema.String)),
  }).annotate({ identifier: "AuditLogConfig" });

export interface AuditConfig {
  /** Specifies a service that will be enabled for audit logging. For example, `storage.googleapis.com`, `cloudsql.googleapis.com`. `allServices` is a special value that covers all services. */
  service?: string;
  /** The configuration for logging of each type of permission. */
  auditLogConfigs?: ReadonlyArray<AuditLogConfig>;
}

export const AuditConfig: Schema.Codec<AuditConfig> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    service: Schema.optional(Schema.String),
    auditLogConfigs: Schema.optional(Schema.Array(AuditLogConfig)),
  }).annotate({ identifier: "AuditConfig" });

export interface Policy {
  /** Specifies the format of the policy. Valid values are `0`, `1`, and `3`. Requests that specify an invalid value are rejected. Any operation that affects conditional role bindings must specify version `3`. This requirement applies to the following operations: * Getting a policy that includes a conditional role binding * Adding a conditional role binding to a policy * Changing a conditional role binding in a policy * Removing any role binding, with or without a condition, from a policy that includes conditions **Important:** If you use IAM Conditions, you must include the `etag` field whenever you call `setIamPolicy`. If you omit this field, then IAM allows you to overwrite a version `3` policy with a version `1` policy, and all of the conditions in the version `3` policy are lost. If a policy does not include any conditions, operations on that policy may specify any valid version or leave the field unset. To learn which resources support conditions in their IAM policies, see the [IAM documentation](https://cloud.google.com/iam/help/conditions/resource-policies). */
  version?: number;
  /** Associates a list of `members`, or principals, with a `role`. Optionally, may specify a `condition` that determines how and when the `bindings` are applied. Each of the `bindings` must contain at least one principal. The `bindings` in a `Policy` can refer to up to 1,500 principals; up to 250 of these principals can be Google groups. Each occurrence of a principal counts towards these limits. For example, if the `bindings` grant 50 different roles to `user:alice@example.com`, and not to any other principal, then you can add another 1,450 principals to the `bindings` in the `Policy`. */
  bindings?: ReadonlyArray<Binding>;
  /** Specifies cloud audit logging configuration for this policy. */
  auditConfigs?: ReadonlyArray<AuditConfig>;
  /** `etag` is used for optimistic concurrency control as a way to help prevent simultaneous updates of a policy from overwriting each other. It is strongly suggested that systems make use of the `etag` in the read-modify-write cycle to perform policy updates in order to avoid race conditions: An `etag` is returned in the response to `getIamPolicy`, and systems are expected to put that etag in the request to `setIamPolicy` to ensure that their change will be applied to the same version of the policy. **Important:** If you use IAM Conditions, you must include the `etag` field whenever you call `setIamPolicy`. If you omit this field, then IAM allows you to overwrite a version `3` policy with a version `1` policy, and all of the conditions in the version `3` policy are lost. */
  etag?: string;
}

export const Policy: Schema.Codec<Policy> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    version: Schema.optional(Schema.Number),
    bindings: Schema.optional(Schema.Array(Binding)),
    auditConfigs: Schema.optional(Schema.Array(AuditConfig)),
    etag: Schema.optional(Schema.String),
  }).annotate({ identifier: "Policy" });

export interface SetIamPolicyRequest {
  /** REQUIRED: The complete policy to be applied to the `resource`. The size of the policy is limited to a few 10s of KB. An empty policy is a valid policy but certain Google Cloud services (such as Projects) might reject them. */
  policy?: Policy;
  /** OPTIONAL: A FieldMask specifying which fields of the policy to modify. Only the fields in the mask will be modified. If no mask is provided, the following default mask is used: `paths: "bindings, etag"` */
  updateMask?: string;
}

export const SetIamPolicyRequest: Schema.Codec<SetIamPolicyRequest> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    policy: Schema.optional(Policy),
    updateMask: Schema.optional(Schema.String),
  }).annotate({ identifier: "SetIamPolicyRequest" });

export interface TestIamPermissionsRequest {
  /** The set of permissions to check for the `resource`. Permissions with wildcards (such as `*` or `storage.*`) are not allowed. For more information see [IAM Overview](https://cloud.google.com/iam/docs/overview#permissions). */
  permissions?: ReadonlyArray<string>;
}

export const TestIamPermissionsRequest: Schema.Codec<TestIamPermissionsRequest> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    permissions: Schema.optional(Schema.Array(Schema.String)),
  }).annotate({ identifier: "TestIamPermissionsRequest" });

export interface TestIamPermissionsResponse {
  /** A subset of `TestPermissionsRequest.permissions` that the caller is allowed. */
  permissions?: ReadonlyArray<string>;
}

export const TestIamPermissionsResponse: Schema.Codec<TestIamPermissionsResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    permissions: Schema.optional(Schema.Array(Schema.String)),
  }).annotate({ identifier: "TestIamPermissionsResponse" });

export interface OperationMetadata {
  /** The time the operation was created. */
  createTime?: string;
  /** The time the operation finished running. */
  endTime?: string;
  /** Target of the operation - for example projects/project-1/locations/global/connectivityTests/test-1 */
  target?: string;
  /** Name of the verb executed by the operation. */
  verb?: string;
  /** Human-readable status of the operation, if any. */
  statusDetail?: string;
  /** Specifies if cancellation was requested for the operation. */
  cancelRequested?: boolean;
  /** API version. */
  apiVersion?: string;
}

export const OperationMetadata: Schema.Codec<OperationMetadata> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    createTime: Schema.optional(Schema.String),
    endTime: Schema.optional(Schema.String),
    target: Schema.optional(Schema.String),
    verb: Schema.optional(Schema.String),
    statusDetail: Schema.optional(Schema.String),
    cancelRequested: Schema.optional(Schema.Boolean),
    apiVersion: Schema.optional(Schema.String),
  }).annotate({ identifier: "OperationMetadata" });

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
  /** The maximum number of results to return. If not set, the service selects a default. */
  pageSize?: number;
  /** A page token received from the `next_page_token` field in the response. Send that page token to receive the subsequent page. */
  pageToken?: string;
  /** Optional. Do not use this field unless explicitly documented otherwise. This is primarily for internal usage. */
  extraLocationTypes?: string[];
}

export const ListProjectsLocationsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    filter: Schema.optional(Schema.String).pipe(T.HttpQuery("filter")),
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
    extraLocationTypes: Schema.optional(Schema.Array(Schema.String)).pipe(
      T.HttpQuery("extraLocationTypes"),
    ),
  }).pipe(
    T.Http({ method: "GET", path: "v1/{+name}/locations" }),
    svc,
  ) as unknown as Schema.Codec<ListProjectsLocationsRequest>;

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
    T.Http({ method: "GET", path: "v1/{+name}" }),
    svc,
  ) as unknown as Schema.Codec<GetProjectsLocationsRequest>;

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

export interface ListProjectsLocationsGlobalOperationsRequest {
  /** The name of the operation's parent resource. */
  name: string;
  /** The standard list filter. */
  filter?: string;
  /** The standard list page size. */
  pageSize?: number;
  /** The standard list page token. */
  pageToken?: string;
  /** When set to `true`, operations that are reachable are returned as normal, and those that are unreachable are returned in the ListOperationsResponse.unreachable field. This can only be `true` when reading across collections. For example, when `parent` is set to `"projects/example/locations/-"`. This field is not supported by default and will result in an `UNIMPLEMENTED` error if set unless explicitly documented otherwise in service or product specific documentation. */
  returnPartialSuccess?: boolean;
}

export const ListProjectsLocationsGlobalOperationsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    filter: Schema.optional(Schema.String).pipe(T.HttpQuery("filter")),
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
    returnPartialSuccess: Schema.optional(Schema.Boolean).pipe(
      T.HttpQuery("returnPartialSuccess"),
    ),
  }).pipe(
    T.Http({ method: "GET", path: "v1/{+name}/operations" }),
    svc,
  ) as unknown as Schema.Codec<ListProjectsLocationsGlobalOperationsRequest>;

export type ListProjectsLocationsGlobalOperationsResponse =
  ListOperationsResponse;
export const ListProjectsLocationsGlobalOperationsResponse =
  /*@__PURE__*/ /*#__PURE__*/ ListOperationsResponse;

export type ListProjectsLocationsGlobalOperationsError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`. */
export const listProjectsLocationsGlobalOperations: API.PaginatedOperationMethod<
  ListProjectsLocationsGlobalOperationsRequest,
  ListProjectsLocationsGlobalOperationsResponse,
  ListProjectsLocationsGlobalOperationsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
  input: ListProjectsLocationsGlobalOperationsRequest,
  output: ListProjectsLocationsGlobalOperationsResponse,
  errors: [NotFound, Forbidden],
  pagination: {
    inputToken: "pageToken",
    outputToken: "nextPageToken",
  },
}));

export interface GetProjectsLocationsGlobalOperationsRequest {
  /** The name of the operation resource. */
  name: string;
}

export const GetProjectsLocationsGlobalOperationsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "GET", path: "v1/{+name}" }),
    svc,
  ) as unknown as Schema.Codec<GetProjectsLocationsGlobalOperationsRequest>;

export type GetProjectsLocationsGlobalOperationsResponse = Operation;
export const GetProjectsLocationsGlobalOperationsResponse =
  /*@__PURE__*/ /*#__PURE__*/ Operation;

export type GetProjectsLocationsGlobalOperationsError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service. */
export const getProjectsLocationsGlobalOperations: API.OperationMethod<
  GetProjectsLocationsGlobalOperationsRequest,
  GetProjectsLocationsGlobalOperationsResponse,
  GetProjectsLocationsGlobalOperationsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetProjectsLocationsGlobalOperationsRequest,
  output: GetProjectsLocationsGlobalOperationsResponse,
  errors: [NotFound, Forbidden],
}));

export interface DeleteProjectsLocationsGlobalOperationsRequest {
  /** The name of the operation resource to be deleted. */
  name: string;
}

export const DeleteProjectsLocationsGlobalOperationsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "DELETE", path: "v1/{+name}" }),
    svc,
  ) as unknown as Schema.Codec<DeleteProjectsLocationsGlobalOperationsRequest>;

export type DeleteProjectsLocationsGlobalOperationsResponse = Empty;
export const DeleteProjectsLocationsGlobalOperationsResponse =
  /*@__PURE__*/ /*#__PURE__*/ Empty;

export type DeleteProjectsLocationsGlobalOperationsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Deletes a long-running operation. This method indicates that the client is no longer interested in the operation result. It does not cancel the operation. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. */
export const deleteProjectsLocationsGlobalOperations: API.OperationMethod<
  DeleteProjectsLocationsGlobalOperationsRequest,
  DeleteProjectsLocationsGlobalOperationsResponse,
  DeleteProjectsLocationsGlobalOperationsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: DeleteProjectsLocationsGlobalOperationsRequest,
  output: DeleteProjectsLocationsGlobalOperationsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface CancelProjectsLocationsGlobalOperationsRequest {
  /** The name of the operation resource to be cancelled. */
  name: string;
  /** Request body */
  body?: CancelOperationRequest;
}

export const CancelProjectsLocationsGlobalOperationsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    body: Schema.optional(CancelOperationRequest).pipe(T.HttpBody()),
  }).pipe(
    T.Http({ method: "POST", path: "v1/{+name}:cancel", hasBody: true }),
    svc,
  ) as unknown as Schema.Codec<CancelProjectsLocationsGlobalOperationsRequest>;

export type CancelProjectsLocationsGlobalOperationsResponse = Empty;
export const CancelProjectsLocationsGlobalOperationsResponse =
  /*@__PURE__*/ /*#__PURE__*/ Empty;

export type CancelProjectsLocationsGlobalOperationsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Clients can use Operations.GetOperation or other methods to check whether the cancellation succeeded or whether the operation completed despite cancellation. On successful cancellation, the operation is not deleted; instead, it becomes an operation with an Operation.error value with a google.rpc.Status.code of `1`, corresponding to `Code.CANCELLED`. */
export const cancelProjectsLocationsGlobalOperations: API.OperationMethod<
  CancelProjectsLocationsGlobalOperationsRequest,
  CancelProjectsLocationsGlobalOperationsResponse,
  CancelProjectsLocationsGlobalOperationsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: CancelProjectsLocationsGlobalOperationsRequest,
  output: CancelProjectsLocationsGlobalOperationsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface ListProjectsLocationsGlobalConnectivityTestsRequest {
  /** Required. The parent resource of the Connectivity Tests: `projects/{project_id}/locations/global` */
  parent: string;
  /** Number of `ConnectivityTests` to return. */
  pageSize?: number;
  /** Page token from an earlier query, as returned in `next_page_token`. */
  pageToken?: string;
  /** Lists the `ConnectivityTests` that match the filter expression. A filter expression filters the resources listed in the response. The expression must be of the form ` ` where operators: `<`, `>`, `<=`, `>=`, `!=`, `=`, `:` are supported (colon `:` represents a HAS operator which is roughly synonymous with equality). can refer to a proto or JSON field, or a synthetic field. Field names can be camelCase or snake_case. Examples: - Filter by name: name = "projects/proj-1/locations/global/connectivityTests/test-1 - Filter by labels: - Resources that have a key called `foo` labels.foo:* - Resources that have a key called `foo` whose value is `bar` labels.foo = bar */
  filter?: string;
  /** Field to use to sort the list. */
  orderBy?: string;
}

export const ListProjectsLocationsGlobalConnectivityTestsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    parent: Schema.String.pipe(T.HttpPath("parent")),
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
    filter: Schema.optional(Schema.String).pipe(T.HttpQuery("filter")),
    orderBy: Schema.optional(Schema.String).pipe(T.HttpQuery("orderBy")),
  }).pipe(
    T.Http({ method: "GET", path: "v1/{+parent}/connectivityTests" }),
    svc,
  ) as unknown as Schema.Codec<ListProjectsLocationsGlobalConnectivityTestsRequest>;

export type ListProjectsLocationsGlobalConnectivityTestsResponse =
  ListConnectivityTestsResponse;
export const ListProjectsLocationsGlobalConnectivityTestsResponse =
  /*@__PURE__*/ /*#__PURE__*/ ListConnectivityTestsResponse;

export type ListProjectsLocationsGlobalConnectivityTestsError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Lists all Connectivity Tests owned by a project. */
export const listProjectsLocationsGlobalConnectivityTests: API.PaginatedOperationMethod<
  ListProjectsLocationsGlobalConnectivityTestsRequest,
  ListProjectsLocationsGlobalConnectivityTestsResponse,
  ListProjectsLocationsGlobalConnectivityTestsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
  input: ListProjectsLocationsGlobalConnectivityTestsRequest,
  output: ListProjectsLocationsGlobalConnectivityTestsResponse,
  errors: [NotFound, Forbidden],
  pagination: {
    inputToken: "pageToken",
    outputToken: "nextPageToken",
  },
}));

export interface GetProjectsLocationsGlobalConnectivityTestsRequest {
  /** Required. `ConnectivityTest` resource name using the form: `projects/{project_id}/locations/global/connectivityTests/{test_id}` */
  name: string;
}

export const GetProjectsLocationsGlobalConnectivityTestsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "GET", path: "v1/{+name}" }),
    svc,
  ) as unknown as Schema.Codec<GetProjectsLocationsGlobalConnectivityTestsRequest>;

export type GetProjectsLocationsGlobalConnectivityTestsResponse =
  ConnectivityTest;
export const GetProjectsLocationsGlobalConnectivityTestsResponse =
  /*@__PURE__*/ /*#__PURE__*/ ConnectivityTest;

export type GetProjectsLocationsGlobalConnectivityTestsError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Gets the details of a specific Connectivity Test. */
export const getProjectsLocationsGlobalConnectivityTests: API.OperationMethod<
  GetProjectsLocationsGlobalConnectivityTestsRequest,
  GetProjectsLocationsGlobalConnectivityTestsResponse,
  GetProjectsLocationsGlobalConnectivityTestsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetProjectsLocationsGlobalConnectivityTestsRequest,
  output: GetProjectsLocationsGlobalConnectivityTestsResponse,
  errors: [NotFound, Forbidden],
}));

export interface CreateProjectsLocationsGlobalConnectivityTestsRequest {
  /** Required. The parent resource of the Connectivity Test to create: `projects/{project_id}/locations/global` */
  parent: string;
  /** Required. The logical name of the Connectivity Test in your project with the following restrictions: * Must contain only lowercase letters, numbers, and hyphens. * Must start with a letter. * Must be between 1-40 characters. * Must end with a number or a letter. * Must be unique within the customer project */
  testId?: string;
  /** Request body */
  body?: ConnectivityTest;
}

export const CreateProjectsLocationsGlobalConnectivityTestsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    parent: Schema.String.pipe(T.HttpPath("parent")),
    testId: Schema.optional(Schema.String).pipe(T.HttpQuery("testId")),
    body: Schema.optional(ConnectivityTest).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v1/{+parent}/connectivityTests",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Codec<CreateProjectsLocationsGlobalConnectivityTestsRequest>;

export type CreateProjectsLocationsGlobalConnectivityTestsResponse = Operation;
export const CreateProjectsLocationsGlobalConnectivityTestsResponse =
  /*@__PURE__*/ /*#__PURE__*/ Operation;

export type CreateProjectsLocationsGlobalConnectivityTestsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Creates a new Connectivity Test. After you create a test, the reachability analysis is performed as part of the long running operation, which completes when the analysis completes. If the endpoint specifications in `ConnectivityTest` are invalid (for example, containing non-existent resources in the network, or you don't have read permissions to the network configurations of listed projects), then the reachability result returns a value of `UNKNOWN`. If the endpoint specifications in `ConnectivityTest` are incomplete, the reachability result returns a value of AMBIGUOUS. For more information, see the Connectivity Test documentation. */
export const createProjectsLocationsGlobalConnectivityTests: API.OperationMethod<
  CreateProjectsLocationsGlobalConnectivityTestsRequest,
  CreateProjectsLocationsGlobalConnectivityTestsResponse,
  CreateProjectsLocationsGlobalConnectivityTestsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: CreateProjectsLocationsGlobalConnectivityTestsRequest,
  output: CreateProjectsLocationsGlobalConnectivityTestsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface PatchProjectsLocationsGlobalConnectivityTestsRequest {
  /** Identifier. Unique name of the resource using the form: `projects/{project_id}/locations/global/connectivityTests/{test_id}` */
  name: string;
  /** Required. Mask of fields to update. At least one path must be supplied in this field. */
  updateMask?: string;
  /** Request body */
  body?: ConnectivityTest;
}

export const PatchProjectsLocationsGlobalConnectivityTestsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    updateMask: Schema.optional(Schema.String).pipe(T.HttpQuery("updateMask")),
    body: Schema.optional(ConnectivityTest).pipe(T.HttpBody()),
  }).pipe(
    T.Http({ method: "PATCH", path: "v1/{+name}", hasBody: true }),
    svc,
  ) as unknown as Schema.Codec<PatchProjectsLocationsGlobalConnectivityTestsRequest>;

export type PatchProjectsLocationsGlobalConnectivityTestsResponse = Operation;
export const PatchProjectsLocationsGlobalConnectivityTestsResponse =
  /*@__PURE__*/ /*#__PURE__*/ Operation;

export type PatchProjectsLocationsGlobalConnectivityTestsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Updates the configuration of an existing `ConnectivityTest`. After you update a test, the reachability analysis is performed as part of the long running operation, which completes when the analysis completes. The Reachability state in the test resource is updated with the new result. If the endpoint specifications in `ConnectivityTest` are invalid (for example, they contain non-existent resources in the network, or the user does not have read permissions to the network configurations of listed projects), then the reachability result returns a value of UNKNOWN. If the endpoint specifications in `ConnectivityTest` are incomplete, the reachability result returns a value of `AMBIGUOUS`. See the documentation in `ConnectivityTest` for more details. */
export const patchProjectsLocationsGlobalConnectivityTests: API.OperationMethod<
  PatchProjectsLocationsGlobalConnectivityTestsRequest,
  PatchProjectsLocationsGlobalConnectivityTestsResponse,
  PatchProjectsLocationsGlobalConnectivityTestsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: PatchProjectsLocationsGlobalConnectivityTestsRequest,
  output: PatchProjectsLocationsGlobalConnectivityTestsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface RerunProjectsLocationsGlobalConnectivityTestsRequest {
  /** Required. Connectivity Test resource name using the form: `projects/{project_id}/locations/global/connectivityTests/{test_id}` */
  name: string;
  /** Request body */
  body?: RerunConnectivityTestRequest;
}

export const RerunProjectsLocationsGlobalConnectivityTestsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    body: Schema.optional(RerunConnectivityTestRequest).pipe(T.HttpBody()),
  }).pipe(
    T.Http({ method: "POST", path: "v1/{+name}:rerun", hasBody: true }),
    svc,
  ) as unknown as Schema.Codec<RerunProjectsLocationsGlobalConnectivityTestsRequest>;

export type RerunProjectsLocationsGlobalConnectivityTestsResponse = Operation;
export const RerunProjectsLocationsGlobalConnectivityTestsResponse =
  /*@__PURE__*/ /*#__PURE__*/ Operation;

export type RerunProjectsLocationsGlobalConnectivityTestsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Rerun an existing `ConnectivityTest`. After the user triggers the rerun, the reachability analysis is performed as part of the long running operation, which completes when the analysis completes. Even though the test configuration remains the same, the reachability result may change due to underlying network configuration changes. If the endpoint specifications in `ConnectivityTest` become invalid (for example, specified resources are deleted in the network, or you lost read permissions to the network configurations of listed projects), then the reachability result returns a value of `UNKNOWN`. */
export const rerunProjectsLocationsGlobalConnectivityTests: API.OperationMethod<
  RerunProjectsLocationsGlobalConnectivityTestsRequest,
  RerunProjectsLocationsGlobalConnectivityTestsResponse,
  RerunProjectsLocationsGlobalConnectivityTestsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: RerunProjectsLocationsGlobalConnectivityTestsRequest,
  output: RerunProjectsLocationsGlobalConnectivityTestsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface DeleteProjectsLocationsGlobalConnectivityTestsRequest {
  /** Required. Connectivity Test resource name using the form: `projects/{project_id}/locations/global/connectivityTests/{test_id}` */
  name: string;
}

export const DeleteProjectsLocationsGlobalConnectivityTestsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "DELETE", path: "v1/{+name}" }),
    svc,
  ) as unknown as Schema.Codec<DeleteProjectsLocationsGlobalConnectivityTestsRequest>;

export type DeleteProjectsLocationsGlobalConnectivityTestsResponse = Operation;
export const DeleteProjectsLocationsGlobalConnectivityTestsResponse =
  /*@__PURE__*/ /*#__PURE__*/ Operation;

export type DeleteProjectsLocationsGlobalConnectivityTestsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Deletes a specific `ConnectivityTest`. */
export const deleteProjectsLocationsGlobalConnectivityTests: API.OperationMethod<
  DeleteProjectsLocationsGlobalConnectivityTestsRequest,
  DeleteProjectsLocationsGlobalConnectivityTestsResponse,
  DeleteProjectsLocationsGlobalConnectivityTestsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: DeleteProjectsLocationsGlobalConnectivityTestsRequest,
  output: DeleteProjectsLocationsGlobalConnectivityTestsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface SetIamPolicyProjectsLocationsGlobalConnectivityTestsRequest {
  /** REQUIRED: The resource for which the policy is being specified. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field. */
  resource: string;
  /** Request body */
  body?: SetIamPolicyRequest;
}

export const SetIamPolicyProjectsLocationsGlobalConnectivityTestsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    resource: Schema.String.pipe(T.HttpPath("resource")),
    body: Schema.optional(SetIamPolicyRequest).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v1/{+resource}:setIamPolicy",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Codec<SetIamPolicyProjectsLocationsGlobalConnectivityTestsRequest>;

export type SetIamPolicyProjectsLocationsGlobalConnectivityTestsResponse =
  Policy;
export const SetIamPolicyProjectsLocationsGlobalConnectivityTestsResponse =
  /*@__PURE__*/ /*#__PURE__*/ Policy;

export type SetIamPolicyProjectsLocationsGlobalConnectivityTestsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Sets the access control policy on the specified resource. Replaces any existing policy. Can return `NOT_FOUND`, `INVALID_ARGUMENT`, and `PERMISSION_DENIED` errors. */
export const setIamPolicyProjectsLocationsGlobalConnectivityTests: API.OperationMethod<
  SetIamPolicyProjectsLocationsGlobalConnectivityTestsRequest,
  SetIamPolicyProjectsLocationsGlobalConnectivityTestsResponse,
  SetIamPolicyProjectsLocationsGlobalConnectivityTestsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: SetIamPolicyProjectsLocationsGlobalConnectivityTestsRequest,
  output: SetIamPolicyProjectsLocationsGlobalConnectivityTestsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface GetIamPolicyProjectsLocationsGlobalConnectivityTestsRequest {
  /** REQUIRED: The resource for which the policy is being requested. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field. */
  resource: string;
  /** Optional. The maximum policy version that will be used to format the policy. Valid values are 0, 1, and 3. Requests specifying an invalid value will be rejected. Requests for policies with any conditional role bindings must specify version 3. Policies with no conditional role bindings may specify any valid value or leave the field unset. The policy in the response might use the policy version that you specified, or it might use a lower policy version. For example, if you specify version 3, but the policy has no conditional role bindings, the response uses version 1. To learn which resources support conditions in their IAM policies, see the [IAM documentation](https://cloud.google.com/iam/help/conditions/resource-policies). */
  "options.requestedPolicyVersion"?: number;
}

export const GetIamPolicyProjectsLocationsGlobalConnectivityTestsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    resource: Schema.String.pipe(T.HttpPath("resource")),
    "options.requestedPolicyVersion": Schema.optional(Schema.Number).pipe(
      T.HttpQuery("options.requestedPolicyVersion"),
    ),
  }).pipe(
    T.Http({ method: "GET", path: "v1/{+resource}:getIamPolicy" }),
    svc,
  ) as unknown as Schema.Codec<GetIamPolicyProjectsLocationsGlobalConnectivityTestsRequest>;

export type GetIamPolicyProjectsLocationsGlobalConnectivityTestsResponse =
  Policy;
export const GetIamPolicyProjectsLocationsGlobalConnectivityTestsResponse =
  /*@__PURE__*/ /*#__PURE__*/ Policy;

export type GetIamPolicyProjectsLocationsGlobalConnectivityTestsError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Gets the access control policy for a resource. Returns an empty policy if the resource exists and does not have a policy set. */
export const getIamPolicyProjectsLocationsGlobalConnectivityTests: API.OperationMethod<
  GetIamPolicyProjectsLocationsGlobalConnectivityTestsRequest,
  GetIamPolicyProjectsLocationsGlobalConnectivityTestsResponse,
  GetIamPolicyProjectsLocationsGlobalConnectivityTestsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetIamPolicyProjectsLocationsGlobalConnectivityTestsRequest,
  output: GetIamPolicyProjectsLocationsGlobalConnectivityTestsResponse,
  errors: [NotFound, Forbidden],
}));

export interface TestIamPermissionsProjectsLocationsGlobalConnectivityTestsRequest {
  /** REQUIRED: The resource for which the policy detail is being requested. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field. */
  resource: string;
  /** Request body */
  body?: TestIamPermissionsRequest;
}

export const TestIamPermissionsProjectsLocationsGlobalConnectivityTestsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    resource: Schema.String.pipe(T.HttpPath("resource")),
    body: Schema.optional(TestIamPermissionsRequest).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v1/{+resource}:testIamPermissions",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Codec<TestIamPermissionsProjectsLocationsGlobalConnectivityTestsRequest>;

export type TestIamPermissionsProjectsLocationsGlobalConnectivityTestsResponse =
  TestIamPermissionsResponse;
export const TestIamPermissionsProjectsLocationsGlobalConnectivityTestsResponse =
  /*@__PURE__*/ /*#__PURE__*/ TestIamPermissionsResponse;

export type TestIamPermissionsProjectsLocationsGlobalConnectivityTestsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Returns permissions that a caller has on the specified resource. If the resource does not exist, this will return an empty set of permissions, not a `NOT_FOUND` error. Note: This operation is designed to be used for building permission-aware UIs and command-line tools, not for authorization checking. This operation may "fail open" without warning. */
export const testIamPermissionsProjectsLocationsGlobalConnectivityTests: API.OperationMethod<
  TestIamPermissionsProjectsLocationsGlobalConnectivityTestsRequest,
  TestIamPermissionsProjectsLocationsGlobalConnectivityTestsResponse,
  TestIamPermissionsProjectsLocationsGlobalConnectivityTestsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: TestIamPermissionsProjectsLocationsGlobalConnectivityTestsRequest,
  output: TestIamPermissionsProjectsLocationsGlobalConnectivityTestsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface ListProjectsLocationsNetworkMonitoringProvidersRequest {
  /** Required. Parent value for ListNetworkMonitoringProvidersRequest. Format: `projects/{project}/locations/{location}` */
  parent: string;
  /** Optional. The maximum number of monitoring points to return. The service may return fewer than this value. If unspecified, at most 20 monitoring points will be returned. The maximum value is 1000; values above 1000 will be coerced to 1000. */
  pageSize?: number;
  /** Optional. A page token, received from a previous `ListMonitoringPoints` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListMonitoringPoints` must match the call that provided the page token. */
  pageToken?: string;
}

export const ListProjectsLocationsNetworkMonitoringProvidersRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    parent: Schema.String.pipe(T.HttpPath("parent")),
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
  }).pipe(
    T.Http({ method: "GET", path: "v1/{+parent}/networkMonitoringProviders" }),
    svc,
  ) as unknown as Schema.Codec<ListProjectsLocationsNetworkMonitoringProvidersRequest>;

export type ListProjectsLocationsNetworkMonitoringProvidersResponse =
  ListNetworkMonitoringProvidersResponse;
export const ListProjectsLocationsNetworkMonitoringProvidersResponse =
  /*@__PURE__*/ /*#__PURE__*/ ListNetworkMonitoringProvidersResponse;

export type ListProjectsLocationsNetworkMonitoringProvidersError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Lists NetworkMonitoringProviders for a given project and location. */
export const listProjectsLocationsNetworkMonitoringProviders: API.PaginatedOperationMethod<
  ListProjectsLocationsNetworkMonitoringProvidersRequest,
  ListProjectsLocationsNetworkMonitoringProvidersResponse,
  ListProjectsLocationsNetworkMonitoringProvidersError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
  input: ListProjectsLocationsNetworkMonitoringProvidersRequest,
  output: ListProjectsLocationsNetworkMonitoringProvidersResponse,
  errors: [NotFound, Forbidden],
  pagination: {
    inputToken: "pageToken",
    outputToken: "nextPageToken",
  },
}));

export interface GetProjectsLocationsNetworkMonitoringProvidersRequest {
  /** Required. Name of the resource. Format: `projects/{project}/locations/{location}/networkMonitoringProviders/{network_monitoring_provider}` */
  name: string;
}

export const GetProjectsLocationsNetworkMonitoringProvidersRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "GET", path: "v1/{+name}" }),
    svc,
  ) as unknown as Schema.Codec<GetProjectsLocationsNetworkMonitoringProvidersRequest>;

export type GetProjectsLocationsNetworkMonitoringProvidersResponse =
  NetworkMonitoringProvider;
export const GetProjectsLocationsNetworkMonitoringProvidersResponse =
  /*@__PURE__*/ /*#__PURE__*/ NetworkMonitoringProvider;

export type GetProjectsLocationsNetworkMonitoringProvidersError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Gets the NetworkMonitoringProvider resource. */
export const getProjectsLocationsNetworkMonitoringProviders: API.OperationMethod<
  GetProjectsLocationsNetworkMonitoringProvidersRequest,
  GetProjectsLocationsNetworkMonitoringProvidersResponse,
  GetProjectsLocationsNetworkMonitoringProvidersError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetProjectsLocationsNetworkMonitoringProvidersRequest,
  output: GetProjectsLocationsNetworkMonitoringProvidersResponse,
  errors: [NotFound, Forbidden],
}));

export interface CreateProjectsLocationsNetworkMonitoringProvidersRequest {
  /** Required. Parent value for CreateNetworkMonitoringProviderRequest. Format: projects/{project}/locations/{location} */
  parent: string;
  /** Required. The ID to use for the NetworkMonitoringProvider resource, which will become the final component of the NetworkMonitoringProvider resource's name. */
  networkMonitoringProviderId?: string;
  /** Request body */
  body?: NetworkMonitoringProvider;
}

export const CreateProjectsLocationsNetworkMonitoringProvidersRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    parent: Schema.String.pipe(T.HttpPath("parent")),
    networkMonitoringProviderId: Schema.optional(Schema.String).pipe(
      T.HttpQuery("networkMonitoringProviderId"),
    ),
    body: Schema.optional(NetworkMonitoringProvider).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v1/{+parent}/networkMonitoringProviders",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Codec<CreateProjectsLocationsNetworkMonitoringProvidersRequest>;

export type CreateProjectsLocationsNetworkMonitoringProvidersResponse =
  Operation;
export const CreateProjectsLocationsNetworkMonitoringProvidersResponse =
  /*@__PURE__*/ /*#__PURE__*/ Operation;

export type CreateProjectsLocationsNetworkMonitoringProvidersError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Creates a NetworkMonitoringProvider resource. */
export const createProjectsLocationsNetworkMonitoringProviders: API.OperationMethod<
  CreateProjectsLocationsNetworkMonitoringProvidersRequest,
  CreateProjectsLocationsNetworkMonitoringProvidersResponse,
  CreateProjectsLocationsNetworkMonitoringProvidersError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: CreateProjectsLocationsNetworkMonitoringProvidersRequest,
  output: CreateProjectsLocationsNetworkMonitoringProvidersResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface DeleteProjectsLocationsNetworkMonitoringProvidersRequest {
  /** Required. Name of the resource. Format: projects/{project}/locations/{location}/networkMonitoringProviders/{network_monitoring_provider} */
  name: string;
  /** Optional. If set to true, any nested MonitoringPoints, NetworkPaths and WebPaths resources from this NetworkMonitoringProvider will also be deleted. Otherwise, the request will only work if there are no nested resources. */
  force?: boolean;
}

export const DeleteProjectsLocationsNetworkMonitoringProvidersRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    force: Schema.optional(Schema.Boolean).pipe(T.HttpQuery("force")),
  }).pipe(
    T.Http({ method: "DELETE", path: "v1/{+name}" }),
    svc,
  ) as unknown as Schema.Codec<DeleteProjectsLocationsNetworkMonitoringProvidersRequest>;

export type DeleteProjectsLocationsNetworkMonitoringProvidersResponse =
  Operation;
export const DeleteProjectsLocationsNetworkMonitoringProvidersResponse =
  /*@__PURE__*/ /*#__PURE__*/ Operation;

export type DeleteProjectsLocationsNetworkMonitoringProvidersError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Deletes a NetworkMonitoringProvider resource and all of its child resources. */
export const deleteProjectsLocationsNetworkMonitoringProviders: API.OperationMethod<
  DeleteProjectsLocationsNetworkMonitoringProvidersRequest,
  DeleteProjectsLocationsNetworkMonitoringProvidersResponse,
  DeleteProjectsLocationsNetworkMonitoringProvidersError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: DeleteProjectsLocationsNetworkMonitoringProvidersRequest,
  output: DeleteProjectsLocationsNetworkMonitoringProvidersResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface GenerateProviderAccessTokenProjectsLocationsNetworkMonitoringProvidersRequest {
  /** Required. Name of the resource. Format: projects/{project}/locations/{location}/networkMonitoringProviders/{network_monitoring_provider} */
  name: string;
  /** Required. Google access token. */
  gcpAccessToken?: string;
}

export const GenerateProviderAccessTokenProjectsLocationsNetworkMonitoringProvidersRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    gcpAccessToken: Schema.optional(Schema.String).pipe(
      T.HttpQuery("gcpAccessToken"),
    ),
  }).pipe(
    T.Http({ method: "GET", path: "v1/{+name}:generateProviderAccessToken" }),
    svc,
  ) as unknown as Schema.Codec<GenerateProviderAccessTokenProjectsLocationsNetworkMonitoringProvidersRequest>;

export type GenerateProviderAccessTokenProjectsLocationsNetworkMonitoringProvidersResponse =
  GenerateProviderAccessTokenResponse;
export const GenerateProviderAccessTokenProjectsLocationsNetworkMonitoringProvidersResponse =
  /*@__PURE__*/ /*#__PURE__*/ GenerateProviderAccessTokenResponse;

export type GenerateProviderAccessTokenProjectsLocationsNetworkMonitoringProvidersError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Generates a provider access token for a given Google access token. Provider access token is a short-lived token that is used to access resources in the provider's platform. */
export const generateProviderAccessTokenProjectsLocationsNetworkMonitoringProviders: API.OperationMethod<
  GenerateProviderAccessTokenProjectsLocationsNetworkMonitoringProvidersRequest,
  GenerateProviderAccessTokenProjectsLocationsNetworkMonitoringProvidersResponse,
  GenerateProviderAccessTokenProjectsLocationsNetworkMonitoringProvidersError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input:
    GenerateProviderAccessTokenProjectsLocationsNetworkMonitoringProvidersRequest,
  output:
    GenerateProviderAccessTokenProjectsLocationsNetworkMonitoringProvidersResponse,
  errors: [NotFound, Forbidden],
}));

export interface GenerateMonitoringPointConfigProjectsLocationsNetworkMonitoringProvidersRequest {
  /** Required. Name of the resource. Format: projects/{project}/locations/{location}/networkMonitoringProviders/{network_monitoring_provider} */
  name: string;
  /** Optional. For Google Cloud MPs, this field indicates whether the Monitoring Point is deployed in a Private Service Connect deployment. Not used for non-Google Cloud MPs. */
  privateConnectivityEnabled?: boolean;
}

export const GenerateMonitoringPointConfigProjectsLocationsNetworkMonitoringProvidersRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    privateConnectivityEnabled: Schema.optional(Schema.Boolean).pipe(
      T.HttpQuery("privateConnectivityEnabled"),
    ),
  }).pipe(
    T.Http({ method: "GET", path: "v1/{+name}:generateMonitoringPointConfig" }),
    svc,
  ) as unknown as Schema.Codec<GenerateMonitoringPointConfigProjectsLocationsNetworkMonitoringProvidersRequest>;

export type GenerateMonitoringPointConfigProjectsLocationsNetworkMonitoringProvidersResponse =
  GenerateMonitoringPointConfigResponse;
export const GenerateMonitoringPointConfigProjectsLocationsNetworkMonitoringProvidersResponse =
  /*@__PURE__*/ /*#__PURE__*/ GenerateMonitoringPointConfigResponse;

export type GenerateMonitoringPointConfigProjectsLocationsNetworkMonitoringProvidersError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Generates Monitoring Point configuration of a NetworkMonitoringProvider resource. */
export const generateMonitoringPointConfigProjectsLocationsNetworkMonitoringProviders: API.OperationMethod<
  GenerateMonitoringPointConfigProjectsLocationsNetworkMonitoringProvidersRequest,
  GenerateMonitoringPointConfigProjectsLocationsNetworkMonitoringProvidersResponse,
  GenerateMonitoringPointConfigProjectsLocationsNetworkMonitoringProvidersError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input:
    GenerateMonitoringPointConfigProjectsLocationsNetworkMonitoringProvidersRequest,
  output:
    GenerateMonitoringPointConfigProjectsLocationsNetworkMonitoringProvidersResponse,
  errors: [NotFound, Forbidden],
}));

export interface DownloadInstallScriptProjectsLocationsNetworkMonitoringProvidersMonitoringPointsRequest {
  /** Required. Parent value for DownloadInstallScriptRequest. Format: projects/{project}/locations/{location}/networkMonitoringProviders/{network_monitoring_provider} */
  parent: string;
  /** Required. The type of the monitoring point. */
  monitoringPointType?:
    | "MONITORING_POINT_TYPE_UNSPECIFIED"
    | "CONTAINER"
    | "KVM"
    | "VMWARE"
    | "HELM"
    | "GCE_VM"
    | "AZURE_VM"
    | "AWS_EC2"
    | (string & {});
  /** Required. The hostname of the MonitoringPoint, e.g. "test-vm" */
  hostname?: string;
  /** Optional. Password for logging into the MonitoringPoint. */
  _password?: string;
  /** IANA Time Zone Database time zone. For example "America/New_York". */
  "timeZone.id"?: string;
  /** Optional. IANA Time Zone Database version number. For example "2019a". */
  "timeZone.version"?: string;
  /** Optional. For Google Cloud MPs, this field indicates whether the Monitoring Point is deployed in a Private Service Connect deployment. Not used for non-Google Cloud MPs. */
  privateConnectivityEnabled?: boolean;
  /** Optional. Dynamic Host Configuration Protocol, is a network management protocol that automatically assigns IP addresses and other network configuration parameters to devices connecting to a network. */
  useDhcp?: boolean;
  /** Required. IP address of the MonitoringPoint. */
  "staticIpAddress.ipAddress"?: string;
  /** Optional. Networkmask and CIDR range. Example: "255.255.255.0/24" */
  "staticIpAddress.netmask"?: string;
  /** Required. Gateway IP address. Example: "100.80.40.1". */
  "staticIpAddress.gatewayAddress"?: string;
  /** Required. DNS server. */
  "staticIpAddress.dnsServerAddress"?: string;
  /** Optional. Second DNS server. */
  "staticIpAddress.dnsServerSecondaryAddress"?: string;
  /** Optional. Domain name of the MonitoringPoint. */
  "staticIpAddress.domain"?: string;
  /** Optional. Network Time Protocol a user can configure. If the user omits the field, the default is either NTP servers provided in the DHCP lease or a set of well-known NTP servers pre-configured on the monitoring point. This field can be an IP address or FQDN. */
  ntpServerAddress?: string;
  /** Optional. Second NTP server. */
  ntpServerSecondaryAddress?: string;
}

export const DownloadInstallScriptProjectsLocationsNetworkMonitoringProvidersMonitoringPointsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    parent: Schema.String.pipe(T.HttpPath("parent")),
    monitoringPointType: Schema.optional(Schema.String).pipe(
      T.HttpQuery("monitoringPointType"),
    ),
    hostname: Schema.optional(Schema.String).pipe(T.HttpQuery("hostname")),
    _password: Schema.optional(Schema.String).pipe(T.HttpQuery("_password")),
    "timeZone.id": Schema.optional(Schema.String).pipe(
      T.HttpQuery("timeZone.id"),
    ),
    "timeZone.version": Schema.optional(Schema.String).pipe(
      T.HttpQuery("timeZone.version"),
    ),
    privateConnectivityEnabled: Schema.optional(Schema.Boolean).pipe(
      T.HttpQuery("privateConnectivityEnabled"),
    ),
    useDhcp: Schema.optional(Schema.Boolean).pipe(T.HttpQuery("useDhcp")),
    "staticIpAddress.ipAddress": Schema.optional(Schema.String).pipe(
      T.HttpQuery("staticIpAddress.ipAddress"),
    ),
    "staticIpAddress.netmask": Schema.optional(Schema.String).pipe(
      T.HttpQuery("staticIpAddress.netmask"),
    ),
    "staticIpAddress.gatewayAddress": Schema.optional(Schema.String).pipe(
      T.HttpQuery("staticIpAddress.gatewayAddress"),
    ),
    "staticIpAddress.dnsServerAddress": Schema.optional(Schema.String).pipe(
      T.HttpQuery("staticIpAddress.dnsServerAddress"),
    ),
    "staticIpAddress.dnsServerSecondaryAddress": Schema.optional(
      Schema.String,
    ).pipe(T.HttpQuery("staticIpAddress.dnsServerSecondaryAddress")),
    "staticIpAddress.domain": Schema.optional(Schema.String).pipe(
      T.HttpQuery("staticIpAddress.domain"),
    ),
    ntpServerAddress: Schema.optional(Schema.String).pipe(
      T.HttpQuery("ntpServerAddress"),
    ),
    ntpServerSecondaryAddress: Schema.optional(Schema.String).pipe(
      T.HttpQuery("ntpServerSecondaryAddress"),
    ),
  }).pipe(
    T.Http({
      method: "GET",
      path: "v1/{+parent}/monitoringPoints:downloadInstallScript",
    }),
    svc,
  ) as unknown as Schema.Codec<DownloadInstallScriptProjectsLocationsNetworkMonitoringProvidersMonitoringPointsRequest>;

export type DownloadInstallScriptProjectsLocationsNetworkMonitoringProvidersMonitoringPointsResponse =
  HttpBody;
export const DownloadInstallScriptProjectsLocationsNetworkMonitoringProvidersMonitoringPointsResponse =
  /*@__PURE__*/ /*#__PURE__*/ HttpBody;

export type DownloadInstallScriptProjectsLocationsNetworkMonitoringProvidersMonitoringPointsError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Downloads an install script for MonitoringPoints for a given network monitoring provider. */
export const downloadInstallScriptProjectsLocationsNetworkMonitoringProvidersMonitoringPoints: API.OperationMethod<
  DownloadInstallScriptProjectsLocationsNetworkMonitoringProvidersMonitoringPointsRequest,
  DownloadInstallScriptProjectsLocationsNetworkMonitoringProvidersMonitoringPointsResponse,
  DownloadInstallScriptProjectsLocationsNetworkMonitoringProvidersMonitoringPointsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input:
    DownloadInstallScriptProjectsLocationsNetworkMonitoringProvidersMonitoringPointsRequest,
  output:
    DownloadInstallScriptProjectsLocationsNetworkMonitoringProvidersMonitoringPointsResponse,
  errors: [NotFound, Forbidden],
}));

export interface DownloadRecreateInstallScriptProjectsLocationsNetworkMonitoringProvidersMonitoringPointsRequest {
  /** Required. Resource name of the MonitoringPoint. Format: projects/{project}/locations/{location}/networkMonitoringProviders/{network_monitoring_provider}/monitoringPoints/{monitoring_point} */
  name: string;
  /** Optional. The hostname of the MonitoringPoint, e.g. "test-vm" */
  hostname?: string;
}

export const DownloadRecreateInstallScriptProjectsLocationsNetworkMonitoringProvidersMonitoringPointsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    hostname: Schema.optional(Schema.String).pipe(T.HttpQuery("hostname")),
  }).pipe(
    T.Http({ method: "GET", path: "v1/{+name}:downloadRecreateInstallScript" }),
    svc,
  ) as unknown as Schema.Codec<DownloadRecreateInstallScriptProjectsLocationsNetworkMonitoringProvidersMonitoringPointsRequest>;

export type DownloadRecreateInstallScriptProjectsLocationsNetworkMonitoringProvidersMonitoringPointsResponse =
  HttpBody;
export const DownloadRecreateInstallScriptProjectsLocationsNetworkMonitoringProvidersMonitoringPointsResponse =
  /*@__PURE__*/ /*#__PURE__*/ HttpBody;

export type DownloadRecreateInstallScriptProjectsLocationsNetworkMonitoringProvidersMonitoringPointsError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Downloads an install script for a specific Container MonitoringPoint. */
export const downloadRecreateInstallScriptProjectsLocationsNetworkMonitoringProvidersMonitoringPoints: API.OperationMethod<
  DownloadRecreateInstallScriptProjectsLocationsNetworkMonitoringProvidersMonitoringPointsRequest,
  DownloadRecreateInstallScriptProjectsLocationsNetworkMonitoringProvidersMonitoringPointsResponse,
  DownloadRecreateInstallScriptProjectsLocationsNetworkMonitoringProvidersMonitoringPointsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input:
    DownloadRecreateInstallScriptProjectsLocationsNetworkMonitoringProvidersMonitoringPointsRequest,
  output:
    DownloadRecreateInstallScriptProjectsLocationsNetworkMonitoringProvidersMonitoringPointsResponse,
  errors: [NotFound, Forbidden],
}));

export interface DownloadServerConnectConfigProjectsLocationsNetworkMonitoringProvidersMonitoringPointsRequest {
  /** Required. Parent value for DownloadServerConnectConfigRequest. Format: projects/{project}/locations/{location}/networkMonitoringProviders/{network_monitoring_provider} */
  parent: string;
}

export const DownloadServerConnectConfigProjectsLocationsNetworkMonitoringProvidersMonitoringPointsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    parent: Schema.String.pipe(T.HttpPath("parent")),
  }).pipe(
    T.Http({
      method: "GET",
      path: "v1/{+parent}/monitoringPoints:downloadServerConnectConfig",
    }),
    svc,
  ) as unknown as Schema.Codec<DownloadServerConnectConfigProjectsLocationsNetworkMonitoringProvidersMonitoringPointsRequest>;

export type DownloadServerConnectConfigProjectsLocationsNetworkMonitoringProvidersMonitoringPointsResponse =
  HttpBody;
export const DownloadServerConnectConfigProjectsLocationsNetworkMonitoringProvidersMonitoringPointsResponse =
  /*@__PURE__*/ /*#__PURE__*/ HttpBody;

export type DownloadServerConnectConfigProjectsLocationsNetworkMonitoringProvidersMonitoringPointsError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Downloads the server connect configuration for a given network monitoring provider. */
export const downloadServerConnectConfigProjectsLocationsNetworkMonitoringProvidersMonitoringPoints: API.OperationMethod<
  DownloadServerConnectConfigProjectsLocationsNetworkMonitoringProvidersMonitoringPointsRequest,
  DownloadServerConnectConfigProjectsLocationsNetworkMonitoringProvidersMonitoringPointsResponse,
  DownloadServerConnectConfigProjectsLocationsNetworkMonitoringProvidersMonitoringPointsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input:
    DownloadServerConnectConfigProjectsLocationsNetworkMonitoringProvidersMonitoringPointsRequest,
  output:
    DownloadServerConnectConfigProjectsLocationsNetworkMonitoringProvidersMonitoringPointsResponse,
  errors: [NotFound, Forbidden],
}));

export interface ListProjectsLocationsNetworkMonitoringProvidersMonitoringPointsRequest {
  /** Required. Parent value for ListMonitoringPointsRequest. Format: projects/{project}/locations/{location}/networkMonitoringProviders/{network_monitoring_provider} */
  parent: string;
  /** Optional. The maximum number of monitoring points to return. The service may return fewer than this value. If unspecified, at most 20 monitoring points will be returned. The maximum value is 1000; values above 1000 will be coerced to 1000. */
  pageSize?: number;
  /** Optional. A page token, received from a previous `ListMonitoringPoints` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListMonitoringPoints` must match the call that provided the page token. */
  pageToken?: string;
}

export const ListProjectsLocationsNetworkMonitoringProvidersMonitoringPointsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    parent: Schema.String.pipe(T.HttpPath("parent")),
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
  }).pipe(
    T.Http({ method: "GET", path: "v1/{+parent}/monitoringPoints" }),
    svc,
  ) as unknown as Schema.Codec<ListProjectsLocationsNetworkMonitoringProvidersMonitoringPointsRequest>;

export type ListProjectsLocationsNetworkMonitoringProvidersMonitoringPointsResponse =
  ListMonitoringPointsResponse;
export const ListProjectsLocationsNetworkMonitoringProvidersMonitoringPointsResponse =
  /*@__PURE__*/ /*#__PURE__*/ ListMonitoringPointsResponse;

export type ListProjectsLocationsNetworkMonitoringProvidersMonitoringPointsError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Lists MonitoringPoints for a given network monitoring provider. */
export const listProjectsLocationsNetworkMonitoringProvidersMonitoringPoints: API.PaginatedOperationMethod<
  ListProjectsLocationsNetworkMonitoringProvidersMonitoringPointsRequest,
  ListProjectsLocationsNetworkMonitoringProvidersMonitoringPointsResponse,
  ListProjectsLocationsNetworkMonitoringProvidersMonitoringPointsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
  input: ListProjectsLocationsNetworkMonitoringProvidersMonitoringPointsRequest,
  output:
    ListProjectsLocationsNetworkMonitoringProvidersMonitoringPointsResponse,
  errors: [NotFound, Forbidden],
  pagination: {
    inputToken: "pageToken",
    outputToken: "nextPageToken",
  },
}));

export interface GetProjectsLocationsNetworkMonitoringProvidersMonitoringPointsRequest {
  /** Required. Name of the resource. Format: projects/{project}/locations/{location}/networkMonitoringProviders/{network_monitoring_provider}/monitoringPoints/{monitoring_point} */
  name: string;
}

export const GetProjectsLocationsNetworkMonitoringProvidersMonitoringPointsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "GET", path: "v1/{+name}" }),
    svc,
  ) as unknown as Schema.Codec<GetProjectsLocationsNetworkMonitoringProvidersMonitoringPointsRequest>;

export type GetProjectsLocationsNetworkMonitoringProvidersMonitoringPointsResponse =
  MonitoringPoint;
export const GetProjectsLocationsNetworkMonitoringProvidersMonitoringPointsResponse =
  /*@__PURE__*/ /*#__PURE__*/ MonitoringPoint;

export type GetProjectsLocationsNetworkMonitoringProvidersMonitoringPointsError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Gets the MonitoringPoint resource. */
export const getProjectsLocationsNetworkMonitoringProvidersMonitoringPoints: API.OperationMethod<
  GetProjectsLocationsNetworkMonitoringProvidersMonitoringPointsRequest,
  GetProjectsLocationsNetworkMonitoringProvidersMonitoringPointsResponse,
  GetProjectsLocationsNetworkMonitoringProvidersMonitoringPointsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetProjectsLocationsNetworkMonitoringProvidersMonitoringPointsRequest,
  output:
    GetProjectsLocationsNetworkMonitoringProvidersMonitoringPointsResponse,
  errors: [NotFound, Forbidden],
}));

export interface ListProjectsLocationsNetworkMonitoringProvidersNetworkPathsRequest {
  /** Required. Parent value for ListNetworkPathsRequest. Format: projects/{project}/locations/{location}/networkMonitoringProviders/{network_monitoring_provider} */
  parent: string;
  /** Optional. The maximum number of network paths to return. The service may return fewer than this value. If unspecified, at most 20 network pathswill be returned. The maximum value is 1000; values above 1000 will be coerced to 1000. */
  pageSize?: number;
  /** Optional. A page token, received from a previous `ListNetworkPaths` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListNetworkPaths` must match the call that provided the page token. */
  pageToken?: string;
}

export const ListProjectsLocationsNetworkMonitoringProvidersNetworkPathsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    parent: Schema.String.pipe(T.HttpPath("parent")),
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
  }).pipe(
    T.Http({ method: "GET", path: "v1/{+parent}/networkPaths" }),
    svc,
  ) as unknown as Schema.Codec<ListProjectsLocationsNetworkMonitoringProvidersNetworkPathsRequest>;

export type ListProjectsLocationsNetworkMonitoringProvidersNetworkPathsResponse =
  ListNetworkPathsResponse;
export const ListProjectsLocationsNetworkMonitoringProvidersNetworkPathsResponse =
  /*@__PURE__*/ /*#__PURE__*/ ListNetworkPathsResponse;

export type ListProjectsLocationsNetworkMonitoringProvidersNetworkPathsError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Lists NetworkPaths for a given network monitoring provider. */
export const listProjectsLocationsNetworkMonitoringProvidersNetworkPaths: API.PaginatedOperationMethod<
  ListProjectsLocationsNetworkMonitoringProvidersNetworkPathsRequest,
  ListProjectsLocationsNetworkMonitoringProvidersNetworkPathsResponse,
  ListProjectsLocationsNetworkMonitoringProvidersNetworkPathsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
  input: ListProjectsLocationsNetworkMonitoringProvidersNetworkPathsRequest,
  output: ListProjectsLocationsNetworkMonitoringProvidersNetworkPathsResponse,
  errors: [NotFound, Forbidden],
  pagination: {
    inputToken: "pageToken",
    outputToken: "nextPageToken",
  },
}));

export interface GetProjectsLocationsNetworkMonitoringProvidersNetworkPathsRequest {
  /** Required. Name of the resource. Format: projects/{project}/locations/{location}/networkMonitoringProviders/{network_monitoring_provider}/networkPaths/{network_path} */
  name: string;
}

export const GetProjectsLocationsNetworkMonitoringProvidersNetworkPathsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "GET", path: "v1/{+name}" }),
    svc,
  ) as unknown as Schema.Codec<GetProjectsLocationsNetworkMonitoringProvidersNetworkPathsRequest>;

export type GetProjectsLocationsNetworkMonitoringProvidersNetworkPathsResponse =
  NetworkPath;
export const GetProjectsLocationsNetworkMonitoringProvidersNetworkPathsResponse =
  /*@__PURE__*/ /*#__PURE__*/ NetworkPath;

export type GetProjectsLocationsNetworkMonitoringProvidersNetworkPathsError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Gets the NetworkPath resource. */
export const getProjectsLocationsNetworkMonitoringProvidersNetworkPaths: API.OperationMethod<
  GetProjectsLocationsNetworkMonitoringProvidersNetworkPathsRequest,
  GetProjectsLocationsNetworkMonitoringProvidersNetworkPathsResponse,
  GetProjectsLocationsNetworkMonitoringProvidersNetworkPathsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetProjectsLocationsNetworkMonitoringProvidersNetworkPathsRequest,
  output: GetProjectsLocationsNetworkMonitoringProvidersNetworkPathsResponse,
  errors: [NotFound, Forbidden],
}));

export interface ListProjectsLocationsNetworkMonitoringProvidersWebPathsRequest {
  /** Required. Parent value for ListWebPathsRequest. Format: projects/{project}/locations/{location}/networkMonitoringProviders/{network_monitoring_provider} */
  parent: string;
  /** Optional. The maximum number of web paths to return. The service may return fewer than this value. If unspecified, at most 20 web paths will be returned. The maximum value is 1000; values above 1000 will be coerced to 1000. */
  pageSize?: number;
  /** Optional. A page token, received from a previous `ListWebPaths` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListWebPaths` must match the call that provided the page token. */
  pageToken?: string;
}

export const ListProjectsLocationsNetworkMonitoringProvidersWebPathsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    parent: Schema.String.pipe(T.HttpPath("parent")),
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
  }).pipe(
    T.Http({ method: "GET", path: "v1/{+parent}/webPaths" }),
    svc,
  ) as unknown as Schema.Codec<ListProjectsLocationsNetworkMonitoringProvidersWebPathsRequest>;

export type ListProjectsLocationsNetworkMonitoringProvidersWebPathsResponse =
  ListWebPathsResponse;
export const ListProjectsLocationsNetworkMonitoringProvidersWebPathsResponse =
  /*@__PURE__*/ /*#__PURE__*/ ListWebPathsResponse;

export type ListProjectsLocationsNetworkMonitoringProvidersWebPathsError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Lists WebPaths for a given network monitoring provider. */
export const listProjectsLocationsNetworkMonitoringProvidersWebPaths: API.PaginatedOperationMethod<
  ListProjectsLocationsNetworkMonitoringProvidersWebPathsRequest,
  ListProjectsLocationsNetworkMonitoringProvidersWebPathsResponse,
  ListProjectsLocationsNetworkMonitoringProvidersWebPathsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
  input: ListProjectsLocationsNetworkMonitoringProvidersWebPathsRequest,
  output: ListProjectsLocationsNetworkMonitoringProvidersWebPathsResponse,
  errors: [NotFound, Forbidden],
  pagination: {
    inputToken: "pageToken",
    outputToken: "nextPageToken",
  },
}));

export interface GetProjectsLocationsNetworkMonitoringProvidersWebPathsRequest {
  /** Required. Name of the resource.. Format: projects/{project}/locations/{location}/networkMonitoringProviders/{network_monitoring_provider}/webPaths/{web_path} */
  name: string;
}

export const GetProjectsLocationsNetworkMonitoringProvidersWebPathsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "GET", path: "v1/{+name}" }),
    svc,
  ) as unknown as Schema.Codec<GetProjectsLocationsNetworkMonitoringProvidersWebPathsRequest>;

export type GetProjectsLocationsNetworkMonitoringProvidersWebPathsResponse =
  WebPath;
export const GetProjectsLocationsNetworkMonitoringProvidersWebPathsResponse =
  /*@__PURE__*/ /*#__PURE__*/ WebPath;

export type GetProjectsLocationsNetworkMonitoringProvidersWebPathsError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Gets the WebPath resource. */
export const getProjectsLocationsNetworkMonitoringProvidersWebPaths: API.OperationMethod<
  GetProjectsLocationsNetworkMonitoringProvidersWebPathsRequest,
  GetProjectsLocationsNetworkMonitoringProvidersWebPathsResponse,
  GetProjectsLocationsNetworkMonitoringProvidersWebPathsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetProjectsLocationsNetworkMonitoringProvidersWebPathsRequest,
  output: GetProjectsLocationsNetworkMonitoringProvidersWebPathsResponse,
  errors: [NotFound, Forbidden],
}));

export interface ListProjectsLocationsVpcFlowLogsConfigsRequest {
  /** Required. The parent resource of the VpcFlowLogsConfig, in one of the following formats: - For project-level resources: `projects/{project_id}/locations/global` - For organization-level resources: `organizations/{organization_id}/locations/global` */
  parent: string;
  /** Optional. Number of `VpcFlowLogsConfigs` to return. */
  pageSize?: number;
  /** Optional. Page token from an earlier query, as returned in `next_page_token`. */
  pageToken?: string;
  /** Optional. Lists the `VpcFlowLogsConfigs` that match the filter expression. A filter expression must use the supported [CEL logic operators] (https://cloud.google.com/vpc/docs/about-flow-logs-records#supported_cel_logic_operators). */
  filter?: string;
  /** Optional. Field to use to sort the list. */
  orderBy?: string;
}

export const ListProjectsLocationsVpcFlowLogsConfigsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    parent: Schema.String.pipe(T.HttpPath("parent")),
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
    filter: Schema.optional(Schema.String).pipe(T.HttpQuery("filter")),
    orderBy: Schema.optional(Schema.String).pipe(T.HttpQuery("orderBy")),
  }).pipe(
    T.Http({ method: "GET", path: "v1/{+parent}/vpcFlowLogsConfigs" }),
    svc,
  ) as unknown as Schema.Codec<ListProjectsLocationsVpcFlowLogsConfigsRequest>;

export type ListProjectsLocationsVpcFlowLogsConfigsResponse =
  ListVpcFlowLogsConfigsResponse;
export const ListProjectsLocationsVpcFlowLogsConfigsResponse =
  /*@__PURE__*/ /*#__PURE__*/ ListVpcFlowLogsConfigsResponse;

export type ListProjectsLocationsVpcFlowLogsConfigsError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Lists all `VpcFlowLogsConfigs` in a given project. */
export const listProjectsLocationsVpcFlowLogsConfigs: API.PaginatedOperationMethod<
  ListProjectsLocationsVpcFlowLogsConfigsRequest,
  ListProjectsLocationsVpcFlowLogsConfigsResponse,
  ListProjectsLocationsVpcFlowLogsConfigsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
  input: ListProjectsLocationsVpcFlowLogsConfigsRequest,
  output: ListProjectsLocationsVpcFlowLogsConfigsResponse,
  errors: [NotFound, Forbidden],
  pagination: {
    inputToken: "pageToken",
    outputToken: "nextPageToken",
  },
}));

export interface GetProjectsLocationsVpcFlowLogsConfigsRequest {
  /** Required. The resource name of the VpcFlowLogsConfig, in one of the following formats: - For project-level resources: `projects/{project_id}/locations/global/vpcFlowLogsConfigs/{vpc_flow_logs_config_id}` - For organization-level resources: `organizations/{organization_id}/locations/global/vpcFlowLogsConfigs/{vpc_flow_logs_config_id}` */
  name: string;
}

export const GetProjectsLocationsVpcFlowLogsConfigsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "GET", path: "v1/{+name}" }),
    svc,
  ) as unknown as Schema.Codec<GetProjectsLocationsVpcFlowLogsConfigsRequest>;

export type GetProjectsLocationsVpcFlowLogsConfigsResponse = VpcFlowLogsConfig;
export const GetProjectsLocationsVpcFlowLogsConfigsResponse =
  /*@__PURE__*/ /*#__PURE__*/ VpcFlowLogsConfig;

export type GetProjectsLocationsVpcFlowLogsConfigsError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Gets the details of a specific `VpcFlowLogsConfig`. */
export const getProjectsLocationsVpcFlowLogsConfigs: API.OperationMethod<
  GetProjectsLocationsVpcFlowLogsConfigsRequest,
  GetProjectsLocationsVpcFlowLogsConfigsResponse,
  GetProjectsLocationsVpcFlowLogsConfigsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetProjectsLocationsVpcFlowLogsConfigsRequest,
  output: GetProjectsLocationsVpcFlowLogsConfigsResponse,
  errors: [NotFound, Forbidden],
}));

export interface CreateProjectsLocationsVpcFlowLogsConfigsRequest {
  /** Required. The parent resource of the VpcFlowLogsConfig to create, in one of the following formats: - For project-level resources: `projects/{project_id}/locations/global` - For organization-level resources: `organizations/{organization_id}/locations/global` */
  parent: string;
  /** Required. ID of the `VpcFlowLogsConfig`. */
  vpcFlowLogsConfigId?: string;
  /** Request body */
  body?: VpcFlowLogsConfig;
}

export const CreateProjectsLocationsVpcFlowLogsConfigsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    parent: Schema.String.pipe(T.HttpPath("parent")),
    vpcFlowLogsConfigId: Schema.optional(Schema.String).pipe(
      T.HttpQuery("vpcFlowLogsConfigId"),
    ),
    body: Schema.optional(VpcFlowLogsConfig).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v1/{+parent}/vpcFlowLogsConfigs",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Codec<CreateProjectsLocationsVpcFlowLogsConfigsRequest>;

export type CreateProjectsLocationsVpcFlowLogsConfigsResponse = Operation;
export const CreateProjectsLocationsVpcFlowLogsConfigsResponse =
  /*@__PURE__*/ /*#__PURE__*/ Operation;

export type CreateProjectsLocationsVpcFlowLogsConfigsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Creates a new `VpcFlowLogsConfig`. If a configuration with the exact same settings already exists (even if the ID is different), the creation fails. Notes: 1. Creating a configuration with `state=DISABLED` will fail 2. The following fields are not considered as settings for the purpose of the check mentioned above, therefore - creating another configuration with the same fields but different values for the following fields will fail as well: * name * create_time * update_time * labels * description */
export const createProjectsLocationsVpcFlowLogsConfigs: API.OperationMethod<
  CreateProjectsLocationsVpcFlowLogsConfigsRequest,
  CreateProjectsLocationsVpcFlowLogsConfigsResponse,
  CreateProjectsLocationsVpcFlowLogsConfigsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: CreateProjectsLocationsVpcFlowLogsConfigsRequest,
  output: CreateProjectsLocationsVpcFlowLogsConfigsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface PatchProjectsLocationsVpcFlowLogsConfigsRequest {
  /** Identifier. Unique name of the configuration. The name can have one of the following forms: - For project-level configurations: `projects/{project_id}/locations/global/vpcFlowLogsConfigs/{vpc_flow_logs_config_id}` - For organization-level configurations: `organizations/{organization_id}/locations/global/vpcFlowLogsConfigs/{vpc_flow_logs_config_id}` */
  name: string;
  /** Required. Mask of fields to update. At least one path must be supplied in this field. For example, to change the state of the configuration to ENABLED, specify `update_mask` = `"state"`, and the `vpc_flow_logs_config` would be: `vpc_flow_logs_config = { name = "projects/my-project/locations/global/vpcFlowLogsConfigs/my-config" state = "ENABLED" }` */
  updateMask?: string;
  /** Request body */
  body?: VpcFlowLogsConfig;
}

export const PatchProjectsLocationsVpcFlowLogsConfigsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    updateMask: Schema.optional(Schema.String).pipe(T.HttpQuery("updateMask")),
    body: Schema.optional(VpcFlowLogsConfig).pipe(T.HttpBody()),
  }).pipe(
    T.Http({ method: "PATCH", path: "v1/{+name}", hasBody: true }),
    svc,
  ) as unknown as Schema.Codec<PatchProjectsLocationsVpcFlowLogsConfigsRequest>;

export type PatchProjectsLocationsVpcFlowLogsConfigsResponse = Operation;
export const PatchProjectsLocationsVpcFlowLogsConfigsResponse =
  /*@__PURE__*/ /*#__PURE__*/ Operation;

export type PatchProjectsLocationsVpcFlowLogsConfigsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Updates an existing `VpcFlowLogsConfig`. If a configuration with the exact same settings already exists (even if the ID is different), the creation fails. Notes: 1. Updating a configuration with `state=DISABLED` will fail. 2. The following fields are not considered as settings for the purpose of the check mentioned above, therefore - updating another configuration with the same fields but different values for the following fields will fail as well: * name * create_time * update_time * labels * description */
export const patchProjectsLocationsVpcFlowLogsConfigs: API.OperationMethod<
  PatchProjectsLocationsVpcFlowLogsConfigsRequest,
  PatchProjectsLocationsVpcFlowLogsConfigsResponse,
  PatchProjectsLocationsVpcFlowLogsConfigsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: PatchProjectsLocationsVpcFlowLogsConfigsRequest,
  output: PatchProjectsLocationsVpcFlowLogsConfigsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface DeleteProjectsLocationsVpcFlowLogsConfigsRequest {
  /** Required. The resource name of the VpcFlowLogsConfig, in one of the following formats: - For a project-level resource: `projects/{project_id}/locations/global/vpcFlowLogsConfigs/{vpc_flow_logs_config_id}` - For an organization-level resource: `organizations/{organization_id}/locations/global/vpcFlowLogsConfigs/{vpc_flow_logs_config_id}` */
  name: string;
}

export const DeleteProjectsLocationsVpcFlowLogsConfigsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "DELETE", path: "v1/{+name}" }),
    svc,
  ) as unknown as Schema.Codec<DeleteProjectsLocationsVpcFlowLogsConfigsRequest>;

export type DeleteProjectsLocationsVpcFlowLogsConfigsResponse = Operation;
export const DeleteProjectsLocationsVpcFlowLogsConfigsResponse =
  /*@__PURE__*/ /*#__PURE__*/ Operation;

export type DeleteProjectsLocationsVpcFlowLogsConfigsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Deletes a specific `VpcFlowLogsConfig`. */
export const deleteProjectsLocationsVpcFlowLogsConfigs: API.OperationMethod<
  DeleteProjectsLocationsVpcFlowLogsConfigsRequest,
  DeleteProjectsLocationsVpcFlowLogsConfigsResponse,
  DeleteProjectsLocationsVpcFlowLogsConfigsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: DeleteProjectsLocationsVpcFlowLogsConfigsRequest,
  output: DeleteProjectsLocationsVpcFlowLogsConfigsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface QueryOrgVpcFlowLogsConfigsProjectsLocationsVpcFlowLogsConfigsRequest {
  /** Required. The parent resource of the VpcFlowLogsConfig, specified in the following format: `projects/{project_id}/locations/global` */
  parent: string;
  /** Optional. Number of `VpcFlowLogsConfigs` to return. */
  pageSize?: number;
  /** Optional. Page token from an earlier query, as returned in `next_page_token`. */
  pageToken?: string;
  /** Optional. Lists the `VpcFlowLogsConfigs` that match the filter expression. A filter expression must use the supported [CEL logic operators] (https://cloud.google.com/vpc/docs/about-flow-logs-records#supported_cel_logic_operators). */
  filter?: string;
}

export const QueryOrgVpcFlowLogsConfigsProjectsLocationsVpcFlowLogsConfigsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    parent: Schema.String.pipe(T.HttpPath("parent")),
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
    filter: Schema.optional(Schema.String).pipe(T.HttpQuery("filter")),
  }).pipe(
    T.Http({
      method: "GET",
      path: "v1/{+parent}/vpcFlowLogsConfigs:queryOrgVpcFlowLogsConfigs",
    }),
    svc,
  ) as unknown as Schema.Codec<QueryOrgVpcFlowLogsConfigsProjectsLocationsVpcFlowLogsConfigsRequest>;

export type QueryOrgVpcFlowLogsConfigsProjectsLocationsVpcFlowLogsConfigsResponse =
  QueryOrgVpcFlowLogsConfigsResponse;
export const QueryOrgVpcFlowLogsConfigsProjectsLocationsVpcFlowLogsConfigsResponse =
  /*@__PURE__*/ /*#__PURE__*/ QueryOrgVpcFlowLogsConfigsResponse;

export type QueryOrgVpcFlowLogsConfigsProjectsLocationsVpcFlowLogsConfigsError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** QueryOrgVpcFlowLogsConfigs returns a list of all organization-level VPC Flow Logs configurations applicable to the specified project. */
export const queryOrgVpcFlowLogsConfigsProjectsLocationsVpcFlowLogsConfigs: API.PaginatedOperationMethod<
  QueryOrgVpcFlowLogsConfigsProjectsLocationsVpcFlowLogsConfigsRequest,
  QueryOrgVpcFlowLogsConfigsProjectsLocationsVpcFlowLogsConfigsResponse,
  QueryOrgVpcFlowLogsConfigsProjectsLocationsVpcFlowLogsConfigsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
  input: QueryOrgVpcFlowLogsConfigsProjectsLocationsVpcFlowLogsConfigsRequest,
  output: QueryOrgVpcFlowLogsConfigsProjectsLocationsVpcFlowLogsConfigsResponse,
  errors: [NotFound, Forbidden],
  pagination: {
    inputToken: "pageToken",
    outputToken: "nextPageToken",
  },
}));

export interface ShowEffectiveFlowLogsConfigsProjectsLocationsVpcFlowLogsConfigsRequest {
  /** Required. The parent resource of the VpcFlowLogsConfig, specified in the following format: `projects/{project_id}/locations/global` */
  parent: string;
  /** Required. The resource to get the effective VPC Flow Logs configuration for. The resource must belong to the same project as the parent. The resource must be a network, subnetwork, interconnect attachment, VPN tunnel, or a project. */
  resource?: string;
  /** Optional. Number of `EffectiveVpcFlowLogsConfigs` to return. Default is 30. */
  pageSize?: number;
  /** Optional. Page token from an earlier query, as returned in `next_page_token`. */
  pageToken?: string;
  /** Optional. Lists the `EffectiveVpcFlowLogsConfigs` that match the filter expression. A filter expression must use the supported [CEL logic operators] (https://cloud.google.com/vpc/docs/about-flow-logs-records#supported_cel_logic_operators). */
  filter?: string;
}

export const ShowEffectiveFlowLogsConfigsProjectsLocationsVpcFlowLogsConfigsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    parent: Schema.String.pipe(T.HttpPath("parent")),
    resource: Schema.optional(Schema.String).pipe(T.HttpQuery("resource")),
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
    filter: Schema.optional(Schema.String).pipe(T.HttpQuery("filter")),
  }).pipe(
    T.Http({
      method: "GET",
      path: "v1/{+parent}/vpcFlowLogsConfigs:showEffectiveFlowLogsConfigs",
    }),
    svc,
  ) as unknown as Schema.Codec<ShowEffectiveFlowLogsConfigsProjectsLocationsVpcFlowLogsConfigsRequest>;

export type ShowEffectiveFlowLogsConfigsProjectsLocationsVpcFlowLogsConfigsResponse =
  ShowEffectiveFlowLogsConfigsResponse;
export const ShowEffectiveFlowLogsConfigsProjectsLocationsVpcFlowLogsConfigsResponse =
  /*@__PURE__*/ /*#__PURE__*/ ShowEffectiveFlowLogsConfigsResponse;

export type ShowEffectiveFlowLogsConfigsProjectsLocationsVpcFlowLogsConfigsError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** ShowEffectiveFlowLogsConfigs returns a list of all VPC Flow Logs configurations applicable to a specified resource. */
export const showEffectiveFlowLogsConfigsProjectsLocationsVpcFlowLogsConfigs: API.PaginatedOperationMethod<
  ShowEffectiveFlowLogsConfigsProjectsLocationsVpcFlowLogsConfigsRequest,
  ShowEffectiveFlowLogsConfigsProjectsLocationsVpcFlowLogsConfigsResponse,
  ShowEffectiveFlowLogsConfigsProjectsLocationsVpcFlowLogsConfigsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
  input: ShowEffectiveFlowLogsConfigsProjectsLocationsVpcFlowLogsConfigsRequest,
  output:
    ShowEffectiveFlowLogsConfigsProjectsLocationsVpcFlowLogsConfigsResponse,
  errors: [NotFound, Forbidden],
  pagination: {
    inputToken: "pageToken",
    outputToken: "nextPageToken",
  },
}));

export interface ListOrganizationsLocationsRequest {
  /** The resource that owns the locations collection, if applicable. */
  name: string;
  /** A filter to narrow down results to a preferred subset. The filtering language accepts strings like `"displayName=tokyo"`, and is documented in more detail in [AIP-160](https://google.aip.dev/160). */
  filter?: string;
  /** The maximum number of results to return. If not set, the service selects a default. */
  pageSize?: number;
  /** A page token received from the `next_page_token` field in the response. Send that page token to receive the subsequent page. */
  pageToken?: string;
  /** Optional. Do not use this field unless explicitly documented otherwise. This is primarily for internal usage. */
  extraLocationTypes?: string[];
}

export const ListOrganizationsLocationsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    filter: Schema.optional(Schema.String).pipe(T.HttpQuery("filter")),
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
    extraLocationTypes: Schema.optional(Schema.Array(Schema.String)).pipe(
      T.HttpQuery("extraLocationTypes"),
    ),
  }).pipe(
    T.Http({ method: "GET", path: "v1/{+name}/locations" }),
    svc,
  ) as unknown as Schema.Codec<ListOrganizationsLocationsRequest>;

export type ListOrganizationsLocationsResponse = ListLocationsResponse;
export const ListOrganizationsLocationsResponse =
  /*@__PURE__*/ /*#__PURE__*/ ListLocationsResponse;

export type ListOrganizationsLocationsError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Lists information about the supported locations for this service. This method lists locations based on the resource scope provided in the ListLocationsRequest.name field: * **Global locations**: If `name` is empty, the method lists the public locations available to all projects. * **Project-specific locations**: If `name` follows the format `projects/{project}`, the method lists locations visible to that specific project. This includes public, private, or other project-specific locations enabled for the project. For gRPC and client library implementations, the resource name is passed as the `name` field. For direct service calls, the resource name is incorporated into the request path based on the specific service implementation and version. */
export const listOrganizationsLocations: API.PaginatedOperationMethod<
  ListOrganizationsLocationsRequest,
  ListOrganizationsLocationsResponse,
  ListOrganizationsLocationsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
  input: ListOrganizationsLocationsRequest,
  output: ListOrganizationsLocationsResponse,
  errors: [NotFound, Forbidden],
  pagination: {
    inputToken: "pageToken",
    outputToken: "nextPageToken",
  },
}));

export interface GetOrganizationsLocationsRequest {
  /** Resource name for the location. */
  name: string;
}

export const GetOrganizationsLocationsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "GET", path: "v1/{+name}" }),
    svc,
  ) as unknown as Schema.Codec<GetOrganizationsLocationsRequest>;

export type GetOrganizationsLocationsResponse = Location;
export const GetOrganizationsLocationsResponse =
  /*@__PURE__*/ /*#__PURE__*/ Location;

export type GetOrganizationsLocationsError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Gets information about a location. */
export const getOrganizationsLocations: API.OperationMethod<
  GetOrganizationsLocationsRequest,
  GetOrganizationsLocationsResponse,
  GetOrganizationsLocationsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetOrganizationsLocationsRequest,
  output: GetOrganizationsLocationsResponse,
  errors: [NotFound, Forbidden],
}));

export interface ListOrganizationsLocationsGlobalOperationsRequest {
  /** The name of the operation's parent resource. */
  name: string;
  /** The standard list filter. */
  filter?: string;
  /** The standard list page size. */
  pageSize?: number;
  /** The standard list page token. */
  pageToken?: string;
  /** When set to `true`, operations that are reachable are returned as normal, and those that are unreachable are returned in the ListOperationsResponse.unreachable field. This can only be `true` when reading across collections. For example, when `parent` is set to `"projects/example/locations/-"`. This field is not supported by default and will result in an `UNIMPLEMENTED` error if set unless explicitly documented otherwise in service or product specific documentation. */
  returnPartialSuccess?: boolean;
}

export const ListOrganizationsLocationsGlobalOperationsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    filter: Schema.optional(Schema.String).pipe(T.HttpQuery("filter")),
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
    returnPartialSuccess: Schema.optional(Schema.Boolean).pipe(
      T.HttpQuery("returnPartialSuccess"),
    ),
  }).pipe(
    T.Http({ method: "GET", path: "v1/{+name}/operations" }),
    svc,
  ) as unknown as Schema.Codec<ListOrganizationsLocationsGlobalOperationsRequest>;

export type ListOrganizationsLocationsGlobalOperationsResponse =
  ListOperationsResponse;
export const ListOrganizationsLocationsGlobalOperationsResponse =
  /*@__PURE__*/ /*#__PURE__*/ ListOperationsResponse;

export type ListOrganizationsLocationsGlobalOperationsError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`. */
export const listOrganizationsLocationsGlobalOperations: API.PaginatedOperationMethod<
  ListOrganizationsLocationsGlobalOperationsRequest,
  ListOrganizationsLocationsGlobalOperationsResponse,
  ListOrganizationsLocationsGlobalOperationsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
  input: ListOrganizationsLocationsGlobalOperationsRequest,
  output: ListOrganizationsLocationsGlobalOperationsResponse,
  errors: [NotFound, Forbidden],
  pagination: {
    inputToken: "pageToken",
    outputToken: "nextPageToken",
  },
}));

export interface GetOrganizationsLocationsGlobalOperationsRequest {
  /** The name of the operation resource. */
  name: string;
}

export const GetOrganizationsLocationsGlobalOperationsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "GET", path: "v1/{+name}" }),
    svc,
  ) as unknown as Schema.Codec<GetOrganizationsLocationsGlobalOperationsRequest>;

export type GetOrganizationsLocationsGlobalOperationsResponse = Operation;
export const GetOrganizationsLocationsGlobalOperationsResponse =
  /*@__PURE__*/ /*#__PURE__*/ Operation;

export type GetOrganizationsLocationsGlobalOperationsError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service. */
export const getOrganizationsLocationsGlobalOperations: API.OperationMethod<
  GetOrganizationsLocationsGlobalOperationsRequest,
  GetOrganizationsLocationsGlobalOperationsResponse,
  GetOrganizationsLocationsGlobalOperationsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetOrganizationsLocationsGlobalOperationsRequest,
  output: GetOrganizationsLocationsGlobalOperationsResponse,
  errors: [NotFound, Forbidden],
}));

export interface DeleteOrganizationsLocationsGlobalOperationsRequest {
  /** The name of the operation resource to be deleted. */
  name: string;
}

export const DeleteOrganizationsLocationsGlobalOperationsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "DELETE", path: "v1/{+name}" }),
    svc,
  ) as unknown as Schema.Codec<DeleteOrganizationsLocationsGlobalOperationsRequest>;

export type DeleteOrganizationsLocationsGlobalOperationsResponse = Empty;
export const DeleteOrganizationsLocationsGlobalOperationsResponse =
  /*@__PURE__*/ /*#__PURE__*/ Empty;

export type DeleteOrganizationsLocationsGlobalOperationsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Deletes a long-running operation. This method indicates that the client is no longer interested in the operation result. It does not cancel the operation. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. */
export const deleteOrganizationsLocationsGlobalOperations: API.OperationMethod<
  DeleteOrganizationsLocationsGlobalOperationsRequest,
  DeleteOrganizationsLocationsGlobalOperationsResponse,
  DeleteOrganizationsLocationsGlobalOperationsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: DeleteOrganizationsLocationsGlobalOperationsRequest,
  output: DeleteOrganizationsLocationsGlobalOperationsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface CancelOrganizationsLocationsGlobalOperationsRequest {
  /** The name of the operation resource to be cancelled. */
  name: string;
  /** Request body */
  body?: CancelOperationRequest;
}

export const CancelOrganizationsLocationsGlobalOperationsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    body: Schema.optional(CancelOperationRequest).pipe(T.HttpBody()),
  }).pipe(
    T.Http({ method: "POST", path: "v1/{+name}:cancel", hasBody: true }),
    svc,
  ) as unknown as Schema.Codec<CancelOrganizationsLocationsGlobalOperationsRequest>;

export type CancelOrganizationsLocationsGlobalOperationsResponse = Empty;
export const CancelOrganizationsLocationsGlobalOperationsResponse =
  /*@__PURE__*/ /*#__PURE__*/ Empty;

export type CancelOrganizationsLocationsGlobalOperationsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Clients can use Operations.GetOperation or other methods to check whether the cancellation succeeded or whether the operation completed despite cancellation. On successful cancellation, the operation is not deleted; instead, it becomes an operation with an Operation.error value with a google.rpc.Status.code of `1`, corresponding to `Code.CANCELLED`. */
export const cancelOrganizationsLocationsGlobalOperations: API.OperationMethod<
  CancelOrganizationsLocationsGlobalOperationsRequest,
  CancelOrganizationsLocationsGlobalOperationsResponse,
  CancelOrganizationsLocationsGlobalOperationsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: CancelOrganizationsLocationsGlobalOperationsRequest,
  output: CancelOrganizationsLocationsGlobalOperationsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface ListOrganizationsLocationsVpcFlowLogsConfigsRequest {
  /** Required. The parent resource of the VpcFlowLogsConfig, in one of the following formats: - For project-level resources: `projects/{project_id}/locations/global` - For organization-level resources: `organizations/{organization_id}/locations/global` */
  parent: string;
  /** Optional. Number of `VpcFlowLogsConfigs` to return. */
  pageSize?: number;
  /** Optional. Page token from an earlier query, as returned in `next_page_token`. */
  pageToken?: string;
  /** Optional. Lists the `VpcFlowLogsConfigs` that match the filter expression. A filter expression must use the supported [CEL logic operators] (https://cloud.google.com/vpc/docs/about-flow-logs-records#supported_cel_logic_operators). */
  filter?: string;
  /** Optional. Field to use to sort the list. */
  orderBy?: string;
}

export const ListOrganizationsLocationsVpcFlowLogsConfigsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    parent: Schema.String.pipe(T.HttpPath("parent")),
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
    filter: Schema.optional(Schema.String).pipe(T.HttpQuery("filter")),
    orderBy: Schema.optional(Schema.String).pipe(T.HttpQuery("orderBy")),
  }).pipe(
    T.Http({ method: "GET", path: "v1/{+parent}/vpcFlowLogsConfigs" }),
    svc,
  ) as unknown as Schema.Codec<ListOrganizationsLocationsVpcFlowLogsConfigsRequest>;

export type ListOrganizationsLocationsVpcFlowLogsConfigsResponse =
  ListVpcFlowLogsConfigsResponse;
export const ListOrganizationsLocationsVpcFlowLogsConfigsResponse =
  /*@__PURE__*/ /*#__PURE__*/ ListVpcFlowLogsConfigsResponse;

export type ListOrganizationsLocationsVpcFlowLogsConfigsError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Lists all `VpcFlowLogsConfigs` in a given organization. */
export const listOrganizationsLocationsVpcFlowLogsConfigs: API.PaginatedOperationMethod<
  ListOrganizationsLocationsVpcFlowLogsConfigsRequest,
  ListOrganizationsLocationsVpcFlowLogsConfigsResponse,
  ListOrganizationsLocationsVpcFlowLogsConfigsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
  input: ListOrganizationsLocationsVpcFlowLogsConfigsRequest,
  output: ListOrganizationsLocationsVpcFlowLogsConfigsResponse,
  errors: [NotFound, Forbidden],
  pagination: {
    inputToken: "pageToken",
    outputToken: "nextPageToken",
  },
}));

export interface GetOrganizationsLocationsVpcFlowLogsConfigsRequest {
  /** Required. The resource name of the VpcFlowLogsConfig, in one of the following formats: - For project-level resources: `projects/{project_id}/locations/global/vpcFlowLogsConfigs/{vpc_flow_logs_config_id}` - For organization-level resources: `organizations/{organization_id}/locations/global/vpcFlowLogsConfigs/{vpc_flow_logs_config_id}` */
  name: string;
}

export const GetOrganizationsLocationsVpcFlowLogsConfigsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "GET", path: "v1/{+name}" }),
    svc,
  ) as unknown as Schema.Codec<GetOrganizationsLocationsVpcFlowLogsConfigsRequest>;

export type GetOrganizationsLocationsVpcFlowLogsConfigsResponse =
  VpcFlowLogsConfig;
export const GetOrganizationsLocationsVpcFlowLogsConfigsResponse =
  /*@__PURE__*/ /*#__PURE__*/ VpcFlowLogsConfig;

export type GetOrganizationsLocationsVpcFlowLogsConfigsError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Gets the details of a specific `VpcFlowLogsConfig`. */
export const getOrganizationsLocationsVpcFlowLogsConfigs: API.OperationMethod<
  GetOrganizationsLocationsVpcFlowLogsConfigsRequest,
  GetOrganizationsLocationsVpcFlowLogsConfigsResponse,
  GetOrganizationsLocationsVpcFlowLogsConfigsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetOrganizationsLocationsVpcFlowLogsConfigsRequest,
  output: GetOrganizationsLocationsVpcFlowLogsConfigsResponse,
  errors: [NotFound, Forbidden],
}));

export interface CreateOrganizationsLocationsVpcFlowLogsConfigsRequest {
  /** Required. The parent resource of the VpcFlowLogsConfig to create, in one of the following formats: - For project-level resources: `projects/{project_id}/locations/global` - For organization-level resources: `organizations/{organization_id}/locations/global` */
  parent: string;
  /** Required. ID of the `VpcFlowLogsConfig`. */
  vpcFlowLogsConfigId?: string;
  /** Request body */
  body?: VpcFlowLogsConfig;
}

export const CreateOrganizationsLocationsVpcFlowLogsConfigsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    parent: Schema.String.pipe(T.HttpPath("parent")),
    vpcFlowLogsConfigId: Schema.optional(Schema.String).pipe(
      T.HttpQuery("vpcFlowLogsConfigId"),
    ),
    body: Schema.optional(VpcFlowLogsConfig).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v1/{+parent}/vpcFlowLogsConfigs",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Codec<CreateOrganizationsLocationsVpcFlowLogsConfigsRequest>;

export type CreateOrganizationsLocationsVpcFlowLogsConfigsResponse = Operation;
export const CreateOrganizationsLocationsVpcFlowLogsConfigsResponse =
  /*@__PURE__*/ /*#__PURE__*/ Operation;

export type CreateOrganizationsLocationsVpcFlowLogsConfigsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Creates a new `VpcFlowLogsConfig`. If a configuration with the exact same settings already exists (even if the ID is different), the creation fails. Notes: 1. Creating a configuration with `state=DISABLED` will fail 2. The following fields are not considered as settings for the purpose of the check mentioned above, therefore - creating another configuration with the same fields but different values for the following fields will fail as well: * name * create_time * update_time * labels * description */
export const createOrganizationsLocationsVpcFlowLogsConfigs: API.OperationMethod<
  CreateOrganizationsLocationsVpcFlowLogsConfigsRequest,
  CreateOrganizationsLocationsVpcFlowLogsConfigsResponse,
  CreateOrganizationsLocationsVpcFlowLogsConfigsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: CreateOrganizationsLocationsVpcFlowLogsConfigsRequest,
  output: CreateOrganizationsLocationsVpcFlowLogsConfigsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface PatchOrganizationsLocationsVpcFlowLogsConfigsRequest {
  /** Identifier. Unique name of the configuration. The name can have one of the following forms: - For project-level configurations: `projects/{project_id}/locations/global/vpcFlowLogsConfigs/{vpc_flow_logs_config_id}` - For organization-level configurations: `organizations/{organization_id}/locations/global/vpcFlowLogsConfigs/{vpc_flow_logs_config_id}` */
  name: string;
  /** Required. Mask of fields to update. At least one path must be supplied in this field. For example, to change the state of the configuration to ENABLED, specify `update_mask` = `"state"`, and the `vpc_flow_logs_config` would be: `vpc_flow_logs_config = { name = "projects/my-project/locations/global/vpcFlowLogsConfigs/my-config" state = "ENABLED" }` */
  updateMask?: string;
  /** Request body */
  body?: VpcFlowLogsConfig;
}

export const PatchOrganizationsLocationsVpcFlowLogsConfigsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    updateMask: Schema.optional(Schema.String).pipe(T.HttpQuery("updateMask")),
    body: Schema.optional(VpcFlowLogsConfig).pipe(T.HttpBody()),
  }).pipe(
    T.Http({ method: "PATCH", path: "v1/{+name}", hasBody: true }),
    svc,
  ) as unknown as Schema.Codec<PatchOrganizationsLocationsVpcFlowLogsConfigsRequest>;

export type PatchOrganizationsLocationsVpcFlowLogsConfigsResponse = Operation;
export const PatchOrganizationsLocationsVpcFlowLogsConfigsResponse =
  /*@__PURE__*/ /*#__PURE__*/ Operation;

export type PatchOrganizationsLocationsVpcFlowLogsConfigsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Updates an existing `VpcFlowLogsConfig`. If a configuration with the exact same settings already exists (even if the ID is different), the creation fails. Notes: 1. Updating a configuration with `state=DISABLED` will fail 2. The following fields are not considered as settings for the purpose of the check mentioned above, therefore - updating another configuration with the same fields but different values for the following fields will fail as well: * name * create_time * update_time * labels * description */
export const patchOrganizationsLocationsVpcFlowLogsConfigs: API.OperationMethod<
  PatchOrganizationsLocationsVpcFlowLogsConfigsRequest,
  PatchOrganizationsLocationsVpcFlowLogsConfigsResponse,
  PatchOrganizationsLocationsVpcFlowLogsConfigsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: PatchOrganizationsLocationsVpcFlowLogsConfigsRequest,
  output: PatchOrganizationsLocationsVpcFlowLogsConfigsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface DeleteOrganizationsLocationsVpcFlowLogsConfigsRequest {
  /** Required. The resource name of the VpcFlowLogsConfig, in one of the following formats: - For a project-level resource: `projects/{project_id}/locations/global/vpcFlowLogsConfigs/{vpc_flow_logs_config_id}` - For an organization-level resource: `organizations/{organization_id}/locations/global/vpcFlowLogsConfigs/{vpc_flow_logs_config_id}` */
  name: string;
}

export const DeleteOrganizationsLocationsVpcFlowLogsConfigsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "DELETE", path: "v1/{+name}" }),
    svc,
  ) as unknown as Schema.Codec<DeleteOrganizationsLocationsVpcFlowLogsConfigsRequest>;

export type DeleteOrganizationsLocationsVpcFlowLogsConfigsResponse = Operation;
export const DeleteOrganizationsLocationsVpcFlowLogsConfigsResponse =
  /*@__PURE__*/ /*#__PURE__*/ Operation;

export type DeleteOrganizationsLocationsVpcFlowLogsConfigsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Deletes a specific `VpcFlowLogsConfig`. */
export const deleteOrganizationsLocationsVpcFlowLogsConfigs: API.OperationMethod<
  DeleteOrganizationsLocationsVpcFlowLogsConfigsRequest,
  DeleteOrganizationsLocationsVpcFlowLogsConfigsResponse,
  DeleteOrganizationsLocationsVpcFlowLogsConfigsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: DeleteOrganizationsLocationsVpcFlowLogsConfigsRequest,
  output: DeleteOrganizationsLocationsVpcFlowLogsConfigsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));
