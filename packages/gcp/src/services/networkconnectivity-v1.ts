// ==========================================================================
// Network Connectivity API (networkconnectivity v1)
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
  name: "networkconnectivity",
  version: "v1",
  rootUrl: "https://networkconnectivity.googleapis.com/",
  servicePath: "",
});

// ==========================================================================
// Schemas
// ==========================================================================

export interface Transport {
  /** Output only. Update time stamp. */
  updateTime?: string;
  /** Optional. Immutable. Key used for establishing a connection with the remote transport. This key can only be provided if the profile supports an INPUT key flow and the resource is in the PENDING_KEY state. */
  providedActivationKey?: string;
  /** Optional. Immutable. Name of the remoteTransportProfile that this Transport is connecting to. */
  remoteProfile?: string;
  /** Output only. VPC Network URI that was created for the VPC Peering connection to the provided `network`. If VPC Peering is disconnected, this can be used to re-establish. */
  peeringNetwork?: string;
  /** Identifier. Name of the resource. */
  name?: string;
  /** Output only. The maximum transmission unit (MTU) of a packet that can be sent over this transport. */
  mtuLimit?: number;
  /** Optional. Immutable. Resource URI of the Network that will be peered with this Transport. This field must be provided during resource creation and cannot be changed. */
  network?: string;
  /** Optional. Labels as key value pairs. */
  labels?: Record<string, string>;
  /** Output only. Create time stamp. */
  createTime?: string;
  /** Optional. IP version stack for the established connectivity. */
  stackType?:
    | "STACK_TYPE_UNSPECIFIED"
    | "IPV4_ONLY"
    | "IPV4_IPV6"
    | (string & {});
  /** Output only. State of the underlying connectivity. */
  state?:
    | "STATE_UNSPECIFIED"
    | "CREATING"
    | "PENDING_CONFIG"
    | "PENDING_KEY"
    | "ACTIVE"
    | "DELETING"
    | "DEPROVISIONED"
    | (string & {});
  /** Output only. Google-generated activation key. This is only output if the selected profile supports an OUTPUT key flow. Inputting this to the provider is only valid while the resource is in a PENDING_KEY state. Once the provider has accepted the key, the resource will move to the CONFIGURING state. */
  generatedActivationKey?: string;
  /** Optional. Bandwidth of the Transport. This must be one of the supported bandwidths for the remote profile, and must be set when no activation key is being provided. */
  bandwidth?:
    | "BANDWIDTH_UNSPECIFIED"
    | "BPS_50M"
    | "BPS_100M"
    | "BPS_200M"
    | "BPS_300M"
    | "BPS_400M"
    | "BPS_500M"
    | "BPS_1G"
    | "BPS_2G"
    | "BPS_5G"
    | "BPS_10G"
    | "BPS_20G"
    | "BPS_50G"
    | "BPS_100G"
    | (string & {});
  /** Optional. List of IP Prefixes that will be advertised to the remote provider. Both IPv4 and IPv6 addresses are supported. */
  advertisedRoutes?: ReadonlyArray<string>;
  /** Optional. Immutable. The user supplied account id for the CSP associated with the remote profile. */
  remoteAccountId?: string;
  /** Optional. Description of the Transport. */
  description?: string;
}

export const Transport: Schema.Schema<Transport> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    updateTime: Schema.optional(Schema.String),
    providedActivationKey: Schema.optional(Schema.String),
    remoteProfile: Schema.optional(Schema.String),
    peeringNetwork: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    mtuLimit: Schema.optional(Schema.Number),
    network: Schema.optional(Schema.String),
    labels: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    createTime: Schema.optional(Schema.String),
    stackType: Schema.optional(Schema.String),
    state: Schema.optional(Schema.String),
    generatedActivationKey: Schema.optional(Schema.String),
    bandwidth: Schema.optional(Schema.String),
    advertisedRoutes: Schema.optional(Schema.Array(Schema.String)),
    remoteAccountId: Schema.optional(Schema.String),
    description: Schema.optional(Schema.String),
  }).annotate({ identifier: "Transport" });

export interface ListTransportsResponse {
  /** The list of Transport. */
  transports?: ReadonlyArray<Transport>;
  /** A token identifying a page of results the server should return. */
  nextPageToken?: string;
  /** Unordered list. Locations that could not be reached. */
  unreachable?: ReadonlyArray<string>;
}

export const ListTransportsResponse: Schema.Schema<ListTransportsResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    transports: Schema.optional(Schema.Array(Transport)),
    nextPageToken: Schema.optional(Schema.String),
    unreachable: Schema.optional(Schema.Array(Schema.String)),
  }).annotate({ identifier: "ListTransportsResponse" });

export interface ServiceClass {
  /** Output only. Time when the ServiceClass was updated. */
  updateTime?: string;
  /** A description of this resource. */
  description?: string;
  /** Optional. The etag is computed by the server, and may be sent on update and delete requests to ensure the client has an up-to-date value before proceeding. */
  etag?: string;
  /** Output only. The generated service class name. Use this name to refer to the Service class in Service Connection Maps and Service Connection Policies. */
  serviceClass?: string;
  /** User-defined labels. */
  labels?: Record<string, string>;
  /** Output only. Time when the ServiceClass was created. */
  createTime?: string;
  /** Immutable. The name of a ServiceClass resource. Format: projects/{project}/locations/{location}/serviceClasses/{service_class} See: https://google.aip.dev/122#fields-representing-resource-names */
  name?: string;
}

export const ServiceClass: Schema.Schema<ServiceClass> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    updateTime: Schema.optional(Schema.String),
    description: Schema.optional(Schema.String),
    etag: Schema.optional(Schema.String),
    serviceClass: Schema.optional(Schema.String),
    labels: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    createTime: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
  }).annotate({ identifier: "ServiceClass" });

export interface NextHopRouterApplianceInstance {
  /** Indicates whether site-to-site data transfer is allowed for this Router appliance instance resource. Data transfer is available only in [supported locations](https://cloud.google.com/network-connectivity/docs/network-connectivity-center/concepts/locations). */
  siteToSiteDataTransfer?: boolean;
  /** The URI of the Router appliance instance. */
  uri?: string;
  /** The VPC network where this VM is located. */
  vpcNetwork?: string;
}

export const NextHopRouterApplianceInstance: Schema.Schema<NextHopRouterApplianceInstance> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    siteToSiteDataTransfer: Schema.optional(Schema.Boolean),
    uri: Schema.optional(Schema.String),
    vpcNetwork: Schema.optional(Schema.String),
  }).annotate({ identifier: "NextHopRouterApplianceInstance" });

export interface PscPropagationStatus {
  /** The name of the group that the source spoke belongs to. */
  sourceGroup?: string;
  /** The name of the group that the target spoke belongs to. */
  targetGroup?: string;
  /** The name of the spoke that the source forwarding rule belongs to. */
  sourceSpoke?: string;
  /** The propagation status. */
  code?:
    | "CODE_UNSPECIFIED"
    | "READY"
    | "PROPAGATING"
    | "ERROR_PRODUCER_PROPAGATED_CONNECTION_LIMIT_EXCEEDED"
    | "ERROR_PRODUCER_NAT_IP_SPACE_EXHAUSTED"
    | "ERROR_PRODUCER_QUOTA_EXCEEDED"
    | "ERROR_CONSUMER_QUOTA_EXCEEDED"
    | (string & {});
  /** The name of the forwarding rule exported to the hub. */
  sourceForwardingRule?: string;
  /** The name of the spoke that the source forwarding rule propagates to. */
  targetSpoke?: string;
  /** The human-readable summary of the Private Service Connect connection propagation status. */
  message?: string;
}

export const PscPropagationStatus: Schema.Schema<PscPropagationStatus> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    sourceGroup: Schema.optional(Schema.String),
    targetGroup: Schema.optional(Schema.String),
    sourceSpoke: Schema.optional(Schema.String),
    code: Schema.optional(Schema.String),
    sourceForwardingRule: Schema.optional(Schema.String),
    targetSpoke: Schema.optional(Schema.String),
    message: Schema.optional(Schema.String),
  }).annotate({ identifier: "PscPropagationStatus" });

export interface HubStatusEntry {
  /** The number of propagated Private Service Connect connections with this status. If the `group_by` field was not set in the request message, the value of this field is 1. */
  count?: number;
  /** The Private Service Connect propagation status. */
  pscPropagationStatus?: PscPropagationStatus;
  /** The fields that this entry is grouped by. This has the same value as the `group_by` field in the request message. */
  groupBy?: string;
}

export const HubStatusEntry: Schema.Schema<HubStatusEntry> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    count: Schema.optional(Schema.Number),
    pscPropagationStatus: Schema.optional(PscPropagationStatus),
    groupBy: Schema.optional(Schema.String),
  }).annotate({ identifier: "HubStatusEntry" });

export interface QueryHubStatusResponse {
  /** The list of hub status. */
  hubStatusEntries?: ReadonlyArray<HubStatusEntry>;
  /** The token for the next page of the response. To see more results, use this value as the page_token for your next request. If this value is empty, there are no more results. */
  nextPageToken?: string;
}

export const QueryHubStatusResponse: Schema.Schema<QueryHubStatusResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    hubStatusEntries: Schema.optional(Schema.Array(HubStatusEntry)),
    nextPageToken: Schema.optional(Schema.String),
  }).annotate({ identifier: "QueryHubStatusResponse" });

export interface Expr {
  /** Textual representation of an expression in Common Expression Language syntax. */
  expression?: string;
  /** Optional. Title for the expression, i.e. a short string describing its purpose. This can be used e.g. in UIs which allow to enter the expression. */
  title?: string;
  /** Optional. String indicating the location of the expression for error reporting, e.g. a file name and a position in the file. */
  location?: string;
  /** Optional. Description of the expression. This is a longer text which describes the expression, e.g. when hovered over it in a UI. */
  description?: string;
}

export const Expr: Schema.Schema<Expr> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    expression: Schema.optional(Schema.String),
    title: Schema.optional(Schema.String),
    location: Schema.optional(Schema.String),
    description: Schema.optional(Schema.String),
  }).annotate({ identifier: "Expr" });

export interface LinkedVpnTunnels {
  /** Optional. Dynamic routes fully encompassed by include export ranges are included during export to hub. */
  includeExportRanges?: ReadonlyArray<string>;
  /** Optional. Dynamic routes overlapped/encompassed by exclude export ranges are excluded during export to hub. */
  excludeExportRanges?: ReadonlyArray<string>;
  /** A value that controls whether site-to-site data transfer is enabled for these resources. Data transfer is available only in [supported locations](https://cloud.google.com/network-connectivity/docs/network-connectivity-center/concepts/locations). */
  siteToSiteDataTransfer?: boolean;
  /** Optional. Hub routes overlapped/encompassed by exclude import ranges are excluded during import from hub. */
  excludeImportRanges?: ReadonlyArray<string>;
  /** Output only. The VPC network where these VPN tunnels are located. */
  vpcNetwork?: string;
  /** Optional. Hub routes fully encompassed by include import ranges are included during import from hub. */
  includeImportRanges?: ReadonlyArray<string>;
  /** The URIs of linked VPN tunnel resources. */
  uris?: ReadonlyArray<string>;
}

export const LinkedVpnTunnels: Schema.Schema<LinkedVpnTunnels> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    includeExportRanges: Schema.optional(Schema.Array(Schema.String)),
    excludeExportRanges: Schema.optional(Schema.Array(Schema.String)),
    siteToSiteDataTransfer: Schema.optional(Schema.Boolean),
    excludeImportRanges: Schema.optional(Schema.Array(Schema.String)),
    vpcNetwork: Schema.optional(Schema.String),
    includeImportRanges: Schema.optional(Schema.Array(Schema.String)),
    uris: Schema.optional(Schema.Array(Schema.String)),
  }).annotate({ identifier: "LinkedVpnTunnels" });

export interface LinkedInterconnectAttachments {
  /** The URIs of linked interconnect attachment resources */
  uris?: ReadonlyArray<string>;
  /** Optional. Hub routes fully encompassed by include import ranges are included during import from hub. */
  includeImportRanges?: ReadonlyArray<string>;
  /** Output only. The VPC network where these VLAN attachments are located. */
  vpcNetwork?: string;
  /** A value that controls whether site-to-site data transfer is enabled for these resources. Data transfer is available only in [supported locations](https://cloud.google.com/network-connectivity/docs/network-connectivity-center/concepts/locations). */
  siteToSiteDataTransfer?: boolean;
  /** Optional. Hub routes overlapped/encompassed by exclude import ranges are excluded during import from hub. */
  excludeImportRanges?: ReadonlyArray<string>;
  /** Optional. Dynamic routes fully encompassed by include export ranges are included during export to hub. */
  includeExportRanges?: ReadonlyArray<string>;
  /** Optional. Dynamic routes overlapped/encompassed by exclude export ranges are excluded during export to hub. */
  excludeExportRanges?: ReadonlyArray<string>;
}

export const LinkedInterconnectAttachments: Schema.Schema<LinkedInterconnectAttachments> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    uris: Schema.optional(Schema.Array(Schema.String)),
    includeImportRanges: Schema.optional(Schema.Array(Schema.String)),
    vpcNetwork: Schema.optional(Schema.String),
    siteToSiteDataTransfer: Schema.optional(Schema.Boolean),
    excludeImportRanges: Schema.optional(Schema.Array(Schema.String)),
    includeExportRanges: Schema.optional(Schema.Array(Schema.String)),
    excludeExportRanges: Schema.optional(Schema.Array(Schema.String)),
  }).annotate({ identifier: "LinkedInterconnectAttachments" });

export interface StateReason {
  /** The code associated with this reason. */
  code?:
    | "CODE_UNSPECIFIED"
    | "PENDING_REVIEW"
    | "REJECTED"
    | "PAUSED"
    | "FAILED"
    | "UPDATE_PENDING_REVIEW"
    | "UPDATE_REJECTED"
    | "UPDATE_FAILED"
    | (string & {});
  /** Human-readable details about this reason. */
  message?: string;
  /** Additional information provided by the user in the RejectSpoke call. */
  userDetails?: string;
}

export const StateReason: Schema.Schema<StateReason> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    code: Schema.optional(Schema.String),
    message: Schema.optional(Schema.String),
    userDetails: Schema.optional(Schema.String),
  }).annotate({ identifier: "StateReason" });

export interface LinkedProducerVpcNetwork {
  /** Immutable. The name of the VPC peering between the Service Consumer VPC and the Producer VPC (defined in the Tenant project) which is added to the NCC hub. This peering must be in ACTIVE state. */
  peering?: string;
  /** Output only. The Service Consumer Network spoke. */
  serviceConsumerVpcSpoke?: string;
  /** Output only. The proposed exclude export IP ranges waiting for hub administrator's approval. */
  proposedExcludeExportRanges?: ReadonlyArray<string>;
  /** Immutable. The URI of the Service Consumer VPC that the Producer VPC is peered with. */
  network?: string;
  /** Output only. The URI of the Producer VPC. */
  producerNetwork?: string;
  /** Output only. The proposed include export IP ranges waiting for hub administrator's approval. */
  proposedIncludeExportRanges?: ReadonlyArray<string>;
  /** Optional. IP ranges encompassing the subnets to be excluded from peering. */
  excludeExportRanges?: ReadonlyArray<string>;
  /** Optional. IP ranges allowed to be included from peering. */
  includeExportRanges?: ReadonlyArray<string>;
}

export const LinkedProducerVpcNetwork: Schema.Schema<LinkedProducerVpcNetwork> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    peering: Schema.optional(Schema.String),
    serviceConsumerVpcSpoke: Schema.optional(Schema.String),
    proposedExcludeExportRanges: Schema.optional(Schema.Array(Schema.String)),
    network: Schema.optional(Schema.String),
    producerNetwork: Schema.optional(Schema.String),
    proposedIncludeExportRanges: Schema.optional(Schema.Array(Schema.String)),
    excludeExportRanges: Schema.optional(Schema.Array(Schema.String)),
    includeExportRanges: Schema.optional(Schema.Array(Schema.String)),
  }).annotate({ identifier: "LinkedProducerVpcNetwork" });

export interface LinkedVpcNetwork {
  /** Optional. IP ranges encompassing the subnets to be excluded from peering. */
  excludeExportRanges?: ReadonlyArray<string>;
  /** Optional. IP ranges allowed to be included from peering. */
  includeExportRanges?: ReadonlyArray<string>;
  /** Output only. The proposed include export IP ranges waiting for hub administrator's approval. */
  proposedIncludeExportRanges?: ReadonlyArray<string>;
  /** Output only. The proposed exclude export IP ranges waiting for hub administrator's approval. */
  proposedExcludeExportRanges?: ReadonlyArray<string>;
  /** Required. The URI of the VPC network resource. */
  uri?: string;
  /** Output only. The list of Producer VPC spokes that this VPC spoke is a service consumer VPC spoke for. These producer VPCs are connected through VPC peering to this spoke's backing VPC network. Because they are directly connected through VPC peering, NCC export filters do not apply between the service consumer VPC spoke and any of its producer VPC spokes. This VPC spoke cannot be deleted as long as any of these producer VPC spokes are connected to the NCC Hub. */
  producerVpcSpokes?: ReadonlyArray<string>;
}

export const LinkedVpcNetwork: Schema.Schema<LinkedVpcNetwork> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    excludeExportRanges: Schema.optional(Schema.Array(Schema.String)),
    includeExportRanges: Schema.optional(Schema.Array(Schema.String)),
    proposedIncludeExportRanges: Schema.optional(Schema.Array(Schema.String)),
    proposedExcludeExportRanges: Schema.optional(Schema.Array(Schema.String)),
    uri: Schema.optional(Schema.String),
    producerVpcSpokes: Schema.optional(Schema.Array(Schema.String)),
  }).annotate({ identifier: "LinkedVpcNetwork" });

export interface RouterApplianceInstance {
  /** The URI of the VM. */
  virtualMachine?: string;
  /** The IP address on the VM to use for peering. */
  ipAddress?: string;
}

export const RouterApplianceInstance: Schema.Schema<RouterApplianceInstance> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    virtualMachine: Schema.optional(Schema.String),
    ipAddress: Schema.optional(Schema.String),
  }).annotate({ identifier: "RouterApplianceInstance" });

export interface LinkedRouterApplianceInstances {
  /** Optional. Dynamic routes fully encompassed by include export ranges are included during export to hub. */
  includeExportRanges?: ReadonlyArray<string>;
  /** Optional. Dynamic routes overlapped/encompassed by exclude export ranges are excluded during export to hub. */
  excludeExportRanges?: ReadonlyArray<string>;
  /** The list of router appliance instances. */
  instances?: ReadonlyArray<RouterApplianceInstance>;
  /** A value that controls whether site-to-site data transfer is enabled for these resources. Data transfer is available only in [supported locations](https://cloud.google.com/network-connectivity/docs/network-connectivity-center/concepts/locations). */
  siteToSiteDataTransfer?: boolean;
  /** Optional. Hub routes overlapped/encompassed by exclude import ranges are excluded during import from hub. */
  excludeImportRanges?: ReadonlyArray<string>;
  /** Optional. Hub routes fully encompassed by include import ranges are included during import from hub. */
  includeImportRanges?: ReadonlyArray<string>;
  /** Output only. The VPC network where these router appliance instances are located. */
  vpcNetwork?: string;
}

export const LinkedRouterApplianceInstances: Schema.Schema<LinkedRouterApplianceInstances> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    includeExportRanges: Schema.optional(Schema.Array(Schema.String)),
    excludeExportRanges: Schema.optional(Schema.Array(Schema.String)),
    instances: Schema.optional(Schema.Array(RouterApplianceInstance)),
    siteToSiteDataTransfer: Schema.optional(Schema.Boolean),
    excludeImportRanges: Schema.optional(Schema.Array(Schema.String)),
    includeImportRanges: Schema.optional(Schema.Array(Schema.String)),
    vpcNetwork: Schema.optional(Schema.String),
  }).annotate({ identifier: "LinkedRouterApplianceInstances" });

export interface Spoke {
  /** Optional. An optional description of the spoke. */
  description?: string;
  /** Optional. VPN tunnels that are associated with the spoke. */
  linkedVpnTunnels?: LinkedVpnTunnels;
  /** Optional. VLAN attachments that are associated with the spoke. */
  linkedInterconnectAttachments?: LinkedInterconnectAttachments;
  /** Optional. The name of the group that this spoke is associated with. */
  group?: string;
  /** Optional. This checksum is computed by the server based on the value of other fields, and may be sent on update and delete requests to ensure the client has an up-to-date value before proceeding. */
  etag?: string;
  /** Output only. The reasons for current state of the spoke. */
  reasons?: ReadonlyArray<StateReason>;
  /** Output only. The time the spoke was created. */
  createTime?: string;
  /** Optional labels in key-value pair format. For more information about labels, see [Requirements for labels](https://cloud.google.com/resource-manager/docs/creating-managing-labels#requirements). */
  labels?: Record<string, string>;
  /** Optional. The linked producer VPC that is associated with the spoke. */
  linkedProducerVpcNetwork?: LinkedProducerVpcNetwork;
  /** Output only. The current lifecycle state of this spoke. */
  state?:
    | "STATE_UNSPECIFIED"
    | "CREATING"
    | "ACTIVE"
    | "DELETING"
    | "ACCEPTING"
    | "REJECTING"
    | "UPDATING"
    | "INACTIVE"
    | "OBSOLETE"
    | "FAILED"
    | (string & {});
  /** Optional. VPC network that is associated with the spoke. */
  linkedVpcNetwork?: LinkedVpcNetwork;
  /** Output only. The time the spoke was last updated. */
  updateTime?: string;
  /** Output only. The type of resource associated with the spoke. */
  spokeType?:
    | "SPOKE_TYPE_UNSPECIFIED"
    | "VPN_TUNNEL"
    | "INTERCONNECT_ATTACHMENT"
    | "ROUTER_APPLIANCE"
    | "VPC_NETWORK"
    | "PRODUCER_VPC_NETWORK"
    | (string & {});
  /** Immutable. The name of the spoke. Spoke names must be unique. They use the following form: `projects/{project_number}/locations/{region}/spokes/{spoke_id}` */
  name?: string;
  /** Optional. Router appliance instances that are associated with the spoke. */
  linkedRouterApplianceInstances?: LinkedRouterApplianceInstances;
  /** Optional. The list of fields waiting for hub administrator's approval. */
  fieldPathsPendingUpdate?: ReadonlyArray<string>;
  /** Immutable. The name of the hub that this spoke is attached to. */
  hub?: string;
  /** Output only. The Google-generated UUID for the spoke. This value is unique across all spoke resources. If a spoke is deleted and another with the same name is created, the new spoke is assigned a different `unique_id`. */
  uniqueId?: string;
}

export const Spoke: Schema.Schema<Spoke> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    description: Schema.optional(Schema.String),
    linkedVpnTunnels: Schema.optional(LinkedVpnTunnels),
    linkedInterconnectAttachments: Schema.optional(
      LinkedInterconnectAttachments,
    ),
    group: Schema.optional(Schema.String),
    etag: Schema.optional(Schema.String),
    reasons: Schema.optional(Schema.Array(StateReason)),
    createTime: Schema.optional(Schema.String),
    labels: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    linkedProducerVpcNetwork: Schema.optional(LinkedProducerVpcNetwork),
    state: Schema.optional(Schema.String),
    linkedVpcNetwork: Schema.optional(LinkedVpcNetwork),
    updateTime: Schema.optional(Schema.String),
    spokeType: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    linkedRouterApplianceInstances: Schema.optional(
      LinkedRouterApplianceInstances,
    ),
    fieldPathsPendingUpdate: Schema.optional(Schema.Array(Schema.String)),
    hub: Schema.optional(Schema.String),
    uniqueId: Schema.optional(Schema.String),
  }).annotate({ identifier: "Spoke" });

export interface AcceptHubSpokeResponse {
  /** The spoke that was operated on. */
  spoke?: Spoke;
}

export const AcceptHubSpokeResponse: Schema.Schema<AcceptHubSpokeResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    spoke: Schema.optional(Spoke),
  }).annotate({ identifier: "AcceptHubSpokeResponse" });

export interface RoutingVPC {
  /** Output only. If true, indicates that this VPC network is currently associated with spokes that use the data transfer feature (spokes where the site_to_site_data_transfer field is set to true). If you create new spokes that use data transfer, they must be associated with this VPC network. At most, one VPC network will have this field set to true. */
  requiredForNewSiteToSiteDataTransferSpokes?: boolean;
  /** The URI of the VPC network. */
  uri?: string;
}

export const RoutingVPC: Schema.Schema<RoutingVPC> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    requiredForNewSiteToSiteDataTransferSpokes: Schema.optional(Schema.Boolean),
    uri: Schema.optional(Schema.String),
  }).annotate({ identifier: "RoutingVPC" });

export interface AuditLogConfig {
  /** Specifies the identities that do not cause logging for this type of permission. Follows the same format of Binding.members. */
  exemptedMembers?: ReadonlyArray<string>;
  /** The log type that this config enables. */
  logType?:
    | "LOG_TYPE_UNSPECIFIED"
    | "ADMIN_READ"
    | "DATA_WRITE"
    | "DATA_READ"
    | (string & {});
}

export const AuditLogConfig: Schema.Schema<AuditLogConfig> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    exemptedMembers: Schema.optional(Schema.Array(Schema.String)),
    logType: Schema.optional(Schema.String),
  }).annotate({ identifier: "AuditLogConfig" });

export interface AuditConfig {
  /** Specifies a service that will be enabled for audit logging. For example, `storage.googleapis.com`, `cloudsql.googleapis.com`. `allServices` is a special value that covers all services. */
  service?: string;
  /** The configuration for logging of each type of permission. */
  auditLogConfigs?: ReadonlyArray<AuditLogConfig>;
}

export const AuditConfig: Schema.Schema<AuditConfig> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    service: Schema.optional(Schema.String),
    auditLogConfigs: Schema.optional(Schema.Array(AuditLogConfig)),
  }).annotate({ identifier: "AuditConfig" });

export interface AllocationOptions {
  /** Optional. This field must be set only when allocation_strategy is set to RANDOM_FIRST_N_AVAILABLE. The value should be the maximum expected parallelism of range creation requests issued to the same space of peered netwroks. */
  firstAvailableRangesLookupSize?: number;
  /** Optional. Allocation strategy Not setting this field when the allocation is requested means an implementation defined strategy is used. */
  allocationStrategy?:
    | "ALLOCATION_STRATEGY_UNSPECIFIED"
    | "RANDOM"
    | "FIRST_AVAILABLE"
    | "RANDOM_FIRST_N_AVAILABLE"
    | "FIRST_SMALLEST_FITTING"
    | (string & {});
}

export const AllocationOptions: Schema.Schema<AllocationOptions> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    firstAvailableRangesLookupSize: Schema.optional(Schema.Number),
    allocationStrategy: Schema.optional(Schema.String),
  }).annotate({ identifier: "AllocationOptions" });

export interface Migration {
  /** Immutable. Resource path as an URI of the source resource, for example a subnet. The project for the source resource should match the project for the InternalRange. An example: /projects/{project}/regions/{region}/subnetworks/{subnet} */
  source?: string;
  /** Immutable. Resource path of the target resource. The target project can be different, as in the cases when migrating to peer networks. For example: /projects/{project}/regions/{region}/subnetworks/{subnet} */
  target?: string;
}

export const Migration: Schema.Schema<Migration> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    source: Schema.optional(Schema.String),
    target: Schema.optional(Schema.String),
  }).annotate({ identifier: "Migration" });

export interface InternalRange {
  /** Identifier. The name of an internal range. Format: projects/{project}/locations/{location}/internalRanges/{internal_range} See: https://google.aip.dev/122#fields-representing-resource-names */
  name?: string;
  /** Output only. Time when the internal range was updated. */
  updateTime?: string;
  /** Output only. The list of resources that refer to this internal range. Resources that use the internal range for their range allocation are referred to as users of the range. Other resources mark themselves as users while doing so by creating a reference to this internal range. Having a user, based on this reference, prevents deletion of the internal range referred to. Can be empty. */
  users?: ReadonlyArray<string>;
  /** Optional. The type of peering set for this internal range. */
  peering?:
    | "PEERING_UNSPECIFIED"
    | "FOR_SELF"
    | "FOR_PEER"
    | "NOT_SHARED"
    | (string & {});
  /** Optional. Types of resources that are allowed to overlap with the current internal range. */
  overlaps?: ReadonlyArray<
    | "OVERLAP_UNSPECIFIED"
    | "OVERLAP_ROUTE_RANGE"
    | "OVERLAP_EXISTING_SUBNET_RANGE"
    | (string & {})
  >;
  /** Immutable. The URL or resource ID of the network in which to reserve the internal range. The network cannot be deleted if there are any reserved internal ranges referring to it. Legacy networks are not supported. For example: https://www.googleapis.com/compute/v1/projects/{project}/locations/global/networks/{network} projects/{project}/locations/global/networks/{network} {network} */
  network?: string;
  /** Optional. Can be set to narrow down or pick a different address space while searching for a free range. If not set, defaults to the ["10.0.0.0/8", "172.16.0.0/12", "192.168.0.0/16"] address space (for auto-mode networks, the "10.0.0.0/9" range is used instead of "10.0.0.0/8"). This can be used to target the search in other rfc-1918 address spaces like "172.16.0.0/12" and "192.168.0.0/16" or non-rfc-1918 address spaces used in the VPC. */
  targetCidrRange?: ReadonlyArray<string>;
  /** Output only. Time when the internal range was created. */
  createTime?: string;
  /** Optional. The type of usage set for this InternalRange. */
  usage?:
    | "USAGE_UNSPECIFIED"
    | "FOR_VPC"
    | "EXTERNAL_TO_VPC"
    | "FOR_MIGRATION"
    | (string & {});
  /** User-defined labels. */
  labels?: Record<string, string>;
  /** Optional. Range auto-allocation options, may be set only when auto-allocation is selected by not setting ip_cidr_range (and setting prefix_length). */
  allocationOptions?: AllocationOptions;
  /** Optional. An alternate to ip_cidr_range. Can be set when trying to create an IPv4 reservation that automatically finds a free range of the given size. If both ip_cidr_range and prefix_length are set, there is an error if the range sizes do not match. Can also be used during updates to change the range size. NOTE: For IPv6 this field only works if ip_cidr_range is set as well, and both fields must match. In other words, with IPv6 this field only works as a redundant parameter. */
  prefixLength?: number;
  /** Optional. Immutable ranges cannot have their fields modified, except for labels and description. */
  immutable?: boolean;
  /** Optional. ExcludeCidrRanges flag. Specifies a set of CIDR blocks that allows exclusion of particular CIDR ranges from the auto-allocation process, without having to reserve these blocks */
  excludeCidrRanges?: ReadonlyArray<string>;
  /** Optional. The IP range that this internal range defines. NOTE: IPv6 ranges are limited to usage=EXTERNAL_TO_VPC and peering=FOR_SELF. NOTE: For IPv6 Ranges this field is compulsory, i.e. the address range must be specified explicitly. */
  ipCidrRange?: string;
  /** Optional. A description of this resource. */
  description?: string;
  /** Optional. Must be present if usage is set to FOR_MIGRATION. */
  migration?: Migration;
}

export const InternalRange: Schema.Schema<InternalRange> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.optional(Schema.String),
    updateTime: Schema.optional(Schema.String),
    users: Schema.optional(Schema.Array(Schema.String)),
    peering: Schema.optional(Schema.String),
    overlaps: Schema.optional(Schema.Array(Schema.String)),
    network: Schema.optional(Schema.String),
    targetCidrRange: Schema.optional(Schema.Array(Schema.String)),
    createTime: Schema.optional(Schema.String),
    usage: Schema.optional(Schema.String),
    labels: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    allocationOptions: Schema.optional(AllocationOptions),
    prefixLength: Schema.optional(Schema.Number),
    immutable: Schema.optional(Schema.Boolean),
    excludeCidrRanges: Schema.optional(Schema.Array(Schema.String)),
    ipCidrRange: Schema.optional(Schema.String),
    description: Schema.optional(Schema.String),
    migration: Schema.optional(Migration),
  }).annotate({ identifier: "InternalRange" });

export interface ConsumerPscConfig {
  /** Output only. Overall state of PSC Connections management for this consumer psc config. */
  state?:
    | "STATE_UNSPECIFIED"
    | "VALID"
    | "CONNECTION_POLICY_MISSING"
    | "POLICY_LIMIT_REACHED"
    | "CONSUMER_INSTANCE_PROJECT_NOT_ALLOWLISTED"
    | (string & {});
  /** The requested IP version for the PSC connection. */
  ipVersion?: "IP_VERSION_UNSPECIFIED" | "IPV4" | "IPV6" | (string & {});
  /** The resource path of the consumer network where PSC connections are allowed to be created in. Note, this network does not need be in the ConsumerPscConfig.project in the case of SharedVPC. Example: projects/{projectNumOrId}/global/networks/{networkId}. */
  network?: string;
  /** Optional. A map to store mapping between customer vip and target service attachment. This field can be used to specify a static IP address for a PSC connection. */
  serviceAttachmentIpAddressMap?: Record<string, string>;
  /** Immutable. An immutable map for the producer instance metadata. */
  producerInstanceMetadata?: Record<string, string>;
  /** This is used in PSC consumer ForwardingRule to control whether the PSC endpoint can be accessed from another region. */
  disableGlobalAccess?: boolean;
  /** Immutable. Deprecated. Use producer_instance_metadata instead. An immutable identifier for the producer instance. */
  producerInstanceId?: string;
  /** The consumer project where PSC connections are allowed to be created in. */
  project?: string;
  /** Required. The project ID or project number of the consumer project. This project is the one that the consumer uses to interact with the producer instance. From the perspective of a consumer who's created a producer instance, this is the project of the producer instance. Format: 'projects/' Eg. 'projects/consumer-project' or 'projects/1234' */
  consumerInstanceProject?: string;
}

export const ConsumerPscConfig: Schema.Schema<ConsumerPscConfig> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    state: Schema.optional(Schema.String),
    ipVersion: Schema.optional(Schema.String),
    network: Schema.optional(Schema.String),
    serviceAttachmentIpAddressMap: Schema.optional(
      Schema.Record(Schema.String, Schema.String),
    ),
    producerInstanceMetadata: Schema.optional(
      Schema.Record(Schema.String, Schema.String),
    ),
    disableGlobalAccess: Schema.optional(Schema.Boolean),
    producerInstanceId: Schema.optional(Schema.String),
    project: Schema.optional(Schema.String),
    consumerInstanceProject: Schema.optional(Schema.String),
  }).annotate({ identifier: "ConsumerPscConfig" });

export interface AutomatedDnsCreationSpec {
  /** Required. The DNS suffix to use for the DNS record. Must end with a dot. This should be a valid DNS domain name as per RFC 1035. Each label (between dots) can contain letters, digits, and hyphens, and must not start or end with a hyphen. Example: "my-service.example.com.", "internal." */
  dnsSuffix?: string;
  /** Required. The hostname (the first label of the FQDN) to use for the DNS record. This should be a valid DNS label as per RFC 1035. Generally, this means the hostname can contain letters, digits, and hyphens, and must not start or end with a hyphen. Example: "my-instance", "db-1" */
  hostname?: string;
  /** Optional. The Time To Live for the DNS record, in seconds. If not provided, a default of 30 seconds will be used. */
  ttl?: string;
}

export const AutomatedDnsCreationSpec: Schema.Schema<AutomatedDnsCreationSpec> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    dnsSuffix: Schema.optional(Schema.String),
    hostname: Schema.optional(Schema.String),
    ttl: Schema.optional(Schema.String),
  }).annotate({ identifier: "AutomatedDnsCreationSpec" });

export interface ProducerPscConfig {
  /** The resource path of a service attachment. Example: projects/{projectNumOrId}/regions/{region}/serviceAttachments/{resourceId}. */
  serviceAttachmentUri?: string;
  /** Optional. The specification for automatically creating a DNS record for this PSC connection. */
  automatedDnsCreationSpec?: AutomatedDnsCreationSpec;
}

export const ProducerPscConfig: Schema.Schema<ProducerPscConfig> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    serviceAttachmentUri: Schema.optional(Schema.String),
    automatedDnsCreationSpec: Schema.optional(AutomatedDnsCreationSpec),
  }).annotate({ identifier: "ProducerPscConfig" });

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

export interface DnsAutomationStatus {
  /** Output only. The current state of DNS automation. */
  state?:
    | "STATE_UNSPECIFIED"
    | "PENDING_CREATE"
    | "ACTIVE"
    | "PENDING_DELETE"
    | "CREATE_FAILED"
    | "DELETE_FAILED"
    | (string & {});
  /** Output only. The fully qualified domain name of the DNS record. */
  fqdn?: string;
  /** Output only. The error details if the state is CREATE_FAILED or DELETE_FAILED. */
  error?: GoogleRpcStatus;
}

export const DnsAutomationStatus: Schema.Schema<DnsAutomationStatus> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    state: Schema.optional(Schema.String),
    fqdn: Schema.optional(Schema.String),
    error: Schema.optional(GoogleRpcStatus),
  }).annotate({ identifier: "DnsAutomationStatus" });

export interface GoogleRpcErrorInfo {
  /** The reason of the error. This is a constant value that identifies the proximate cause of the error. Error reasons are unique within a particular domain of errors. This should be at most 63 characters and match a regular expression of `A-Z+[A-Z0-9]`, which represents UPPER_SNAKE_CASE. */
  reason?: string;
  /** The logical grouping to which the "reason" belongs. The error domain is typically the registered service name of the tool or product that generates the error. Example: "pubsub.googleapis.com". If the error is generated by some common infrastructure, the error domain must be a globally unique value that identifies the infrastructure. For Google API infrastructure, the error domain is "googleapis.com". */
  domain?: string;
  /** Additional structured details about this error. Keys must match a regular expression of `a-z+` but should ideally be lowerCamelCase. Also, they must be limited to 64 characters in length. When identifying the current value of an exceeded limit, the units should be contained in the key, not the value. For example, rather than `{"instanceLimit": "100/request"}`, should be returned as, `{"instanceLimitPerRequest": "100"}`, if the client exceeds the number of instances that can be created in a single (batch) request. */
  metadata?: Record<string, string>;
}

export const GoogleRpcErrorInfo: Schema.Schema<GoogleRpcErrorInfo> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    reason: Schema.optional(Schema.String),
    domain: Schema.optional(Schema.String),
    metadata: Schema.optional(Schema.Record(Schema.String, Schema.String)),
  }).annotate({ identifier: "GoogleRpcErrorInfo" });

export interface ConsumerPscConnection {
  /** The URI of a service attachment which is the target of the PSC connection. */
  serviceAttachmentUri?: string;
  /** The URI of the consumer forwarding rule created. Example: projects/{projectNumOrId}/regions/us-east1/networks/{resourceId}. */
  forwardingRule?: string;
  /** Output only. The status of DNS automation for this PSC connection. */
  dnsAutomationStatus?: DnsAutomationStatus;
  /** Immutable. An immutable map for the producer instance metadata. */
  producerInstanceMetadata?: Record<string, string>;
  /** The last Compute Engine operation to setup PSC connection. */
  gceOperation?: string;
  /** Output only. The URI of the selected subnetwork selected to allocate IP address for this connection. */
  selectedSubnetwork?: string;
  /** The state of the PSC connection. */
  state?:
    | "STATE_UNSPECIFIED"
    | "ACTIVE"
    | "FAILED"
    | "CREATING"
    | "DELETING"
    | "CREATE_REPAIRING"
    | "DELETE_REPAIRING"
    | (string & {});
  /** The consumer network whose PSC forwarding rule is connected to the service attachments in this service connection map. Note that the network could be on a different project (shared VPC). */
  network?: string;
  /** The IP literal allocated on the consumer network for the PSC forwarding rule that is created to connect to the producer service attachment in this service connection map. */
  ip?: string;
  /** Output only. The error info for the latest error during operating this connection. */
  errorInfo?: GoogleRpcErrorInfo;
  /** The error type indicates whether the error is consumer facing, producer facing or system internal. */
  errorType?:
    | "CONNECTION_ERROR_TYPE_UNSPECIFIED"
    | "ERROR_INTERNAL"
    | "ERROR_CONSUMER_SIDE"
    | "ERROR_PRODUCER_SIDE"
    | (string & {});
  /** The most recent error during operating this connection. */
  error?: GoogleRpcStatus;
  /** Immutable. Deprecated. Use producer_instance_metadata instead. An immutable identifier for the producer instance. */
  producerInstanceId?: string;
  /** The consumer project whose PSC forwarding rule is connected to the service attachments in this service connection map. */
  project?: string;
  /** The requested IP version for the PSC connection. */
  ipVersion?: "IP_VERSION_UNSPECIFIED" | "IPV4" | "IPV6" | (string & {});
  /** The PSC connection id of the PSC forwarding rule connected to the service attachments in this service connection map. */
  pscConnectionId?: string;
}

export const ConsumerPscConnection: Schema.Schema<ConsumerPscConnection> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    serviceAttachmentUri: Schema.optional(Schema.String),
    forwardingRule: Schema.optional(Schema.String),
    dnsAutomationStatus: Schema.optional(DnsAutomationStatus),
    producerInstanceMetadata: Schema.optional(
      Schema.Record(Schema.String, Schema.String),
    ),
    gceOperation: Schema.optional(Schema.String),
    selectedSubnetwork: Schema.optional(Schema.String),
    state: Schema.optional(Schema.String),
    network: Schema.optional(Schema.String),
    ip: Schema.optional(Schema.String),
    errorInfo: Schema.optional(GoogleRpcErrorInfo),
    errorType: Schema.optional(Schema.String),
    error: Schema.optional(GoogleRpcStatus),
    producerInstanceId: Schema.optional(Schema.String),
    project: Schema.optional(Schema.String),
    ipVersion: Schema.optional(Schema.String),
    pscConnectionId: Schema.optional(Schema.String),
  }).annotate({ identifier: "ConsumerPscConnection" });

export interface ServiceConnectionMap {
  /** Output only. Time when the ServiceConnectionMap was updated. */
  updateTime?: string;
  /** Immutable. The name of a ServiceConnectionMap. Format: projects/{project}/locations/{location}/serviceConnectionMaps/{service_connection_map} See: https://google.aip.dev/122#fields-representing-resource-names */
  name?: string;
  /** The PSC configurations on consumer side. */
  consumerPscConfigs?: ReadonlyArray<ConsumerPscConfig>;
  /** Output only. Time when the ServiceConnectionMap was created. */
  createTime?: string;
  /** User-defined labels. */
  labels?: Record<string, string>;
  /** Output only. The infrastructure used for connections between consumers/producers. */
  infrastructure?: "INFRASTRUCTURE_UNSPECIFIED" | "PSC" | (string & {});
  /** The service class identifier this ServiceConnectionMap is for. The user of ServiceConnectionMap create API needs to have networkconnectivity.serviceClasses.use IAM permission for the service class. */
  serviceClass?: string;
  /** The PSC configurations on producer side. */
  producerPscConfigs?: ReadonlyArray<ProducerPscConfig>;
  /** Optional. The etag is computed by the server, and may be sent on update and delete requests to ensure the client has an up-to-date value before proceeding. */
  etag?: string;
  /** Output only. The service class uri this ServiceConnectionMap is for. */
  serviceClassUri?: string;
  /** A description of this resource. */
  description?: string;
  /** The token provided by the consumer. This token authenticates that the consumer can create a connection within the specified project and network. */
  token?: string;
  /** Output only. PSC connection details on consumer side. */
  consumerPscConnections?: ReadonlyArray<ConsumerPscConnection>;
}

export const ServiceConnectionMap: Schema.Schema<ServiceConnectionMap> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    updateTime: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    consumerPscConfigs: Schema.optional(Schema.Array(ConsumerPscConfig)),
    createTime: Schema.optional(Schema.String),
    labels: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    infrastructure: Schema.optional(Schema.String),
    serviceClass: Schema.optional(Schema.String),
    producerPscConfigs: Schema.optional(Schema.Array(ProducerPscConfig)),
    etag: Schema.optional(Schema.String),
    serviceClassUri: Schema.optional(Schema.String),
    description: Schema.optional(Schema.String),
    token: Schema.optional(Schema.String),
    consumerPscConnections: Schema.optional(
      Schema.Array(ConsumerPscConnection),
    ),
  }).annotate({ identifier: "ServiceConnectionMap" });

export interface ListHubSpokesResponse {
  /** The token for the next page of the response. To see more results, use this value as the page_token for your next request. If this value is empty, there are no more results. */
  nextPageToken?: string;
  /** Locations that could not be reached. */
  unreachable?: ReadonlyArray<string>;
  /** The requested spokes. The spoke fields can be partially populated based on the `view` field in the request message. */
  spokes?: ReadonlyArray<Spoke>;
}

export const ListHubSpokesResponse: Schema.Schema<ListHubSpokesResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    nextPageToken: Schema.optional(Schema.String),
    unreachable: Schema.optional(Schema.Array(Schema.String)),
    spokes: Schema.optional(Schema.Array(Spoke)),
  }).annotate({ identifier: "ListHubSpokesResponse" });

export interface ServiceConnectionToken {
  /** User-defined labels. */
  labels?: Record<string, string>;
  /** Output only. Time when the ServiceConnectionToken was created. */
  createTime?: string;
  /** A description of this resource. */
  description?: string;
  /** The resource path of the network associated with this token. Example: projects/{projectNumOrId}/global/networks/{resourceId}. */
  network?: string;
  /** Output only. The token generated by Automation. */
  token?: string;
  /** Immutable. The name of a ServiceConnectionToken. Format: projects/{project}/locations/{location}/ServiceConnectionTokens/{service_connection_token} See: https://google.aip.dev/122#fields-representing-resource-names */
  name?: string;
  /** Output only. The time to which this token is valid. */
  expireTime?: string;
  /** Output only. Time when the ServiceConnectionToken was updated. */
  updateTime?: string;
  /** Optional. The etag is computed by the server, and may be sent on update and delete requests to ensure the client has an up-to-date value before proceeding. */
  etag?: string;
}

export const ServiceConnectionToken: Schema.Schema<ServiceConnectionToken> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    labels: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    createTime: Schema.optional(Schema.String),
    description: Schema.optional(Schema.String),
    network: Schema.optional(Schema.String),
    token: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    expireTime: Schema.optional(Schema.String),
    updateTime: Schema.optional(Schema.String),
    etag: Schema.optional(Schema.String),
  }).annotate({ identifier: "ServiceConnectionToken" });

export interface Binding {
  /** Role that is assigned to the list of `members`, or principals. For example, `roles/viewer`, `roles/editor`, or `roles/owner`. For an overview of the IAM roles and permissions, see the [IAM documentation](https://cloud.google.com/iam/docs/roles-overview). For a list of the available pre-defined roles, see [here](https://cloud.google.com/iam/docs/understanding-roles). */
  role?: string;
  /** Specifies the principals requesting access for a Google Cloud resource. `members` can have the following values: * `allUsers`: A special identifier that represents anyone who is on the internet; with or without a Google account. * `allAuthenticatedUsers`: A special identifier that represents anyone who is authenticated with a Google account or a service account. Does not include identities that come from external identity providers (IdPs) through identity federation. * `user:{emailid}`: An email address that represents a specific Google account. For example, `alice@example.com` . * `serviceAccount:{emailid}`: An email address that represents a Google service account. For example, `my-other-app@appspot.gserviceaccount.com`. * `serviceAccount:{projectid}.svc.id.goog[{namespace}/{kubernetes-sa}]`: An identifier for a [Kubernetes service account](https://cloud.google.com/kubernetes-engine/docs/how-to/kubernetes-service-accounts). For example, `my-project.svc.id.goog[my-namespace/my-kubernetes-sa]`. * `group:{emailid}`: An email address that represents a Google group. For example, `admins@example.com`. * `domain:{domain}`: The G Suite domain (primary) that represents all the users of that domain. For example, `google.com` or `example.com`. * `principal://iam.googleapis.com/locations/global/workforcePools/{pool_id}/subject/{subject_attribute_value}`: A single identity in a workforce identity pool. * `principalSet://iam.googleapis.com/locations/global/workforcePools/{pool_id}/group/{group_id}`: All workforce identities in a group. * `principalSet://iam.googleapis.com/locations/global/workforcePools/{pool_id}/attribute.{attribute_name}/{attribute_value}`: All workforce identities with a specific attribute value. * `principalSet://iam.googleapis.com/locations/global/workforcePools/{pool_id}/*`: All identities in a workforce identity pool. * `principal://iam.googleapis.com/projects/{project_number}/locations/global/workloadIdentityPools/{pool_id}/subject/{subject_attribute_value}`: A single identity in a workload identity pool. * `principalSet://iam.googleapis.com/projects/{project_number}/locations/global/workloadIdentityPools/{pool_id}/group/{group_id}`: A workload identity pool group. * `principalSet://iam.googleapis.com/projects/{project_number}/locations/global/workloadIdentityPools/{pool_id}/attribute.{attribute_name}/{attribute_value}`: All identities in a workload identity pool with a certain attribute. * `principalSet://iam.googleapis.com/projects/{project_number}/locations/global/workloadIdentityPools/{pool_id}/*`: All identities in a workload identity pool. * `deleted:user:{emailid}?uid={uniqueid}`: An email address (plus unique identifier) representing a user that has been recently deleted. For example, `alice@example.com?uid=123456789012345678901`. If the user is recovered, this value reverts to `user:{emailid}` and the recovered user retains the role in the binding. * `deleted:serviceAccount:{emailid}?uid={uniqueid}`: An email address (plus unique identifier) representing a service account that has been recently deleted. For example, `my-other-app@appspot.gserviceaccount.com?uid=123456789012345678901`. If the service account is undeleted, this value reverts to `serviceAccount:{emailid}` and the undeleted service account retains the role in the binding. * `deleted:group:{emailid}?uid={uniqueid}`: An email address (plus unique identifier) representing a Google group that has been recently deleted. For example, `admins@example.com?uid=123456789012345678901`. If the group is recovered, this value reverts to `group:{emailid}` and the recovered group retains the role in the binding. * `deleted:principal://iam.googleapis.com/locations/global/workforcePools/{pool_id}/subject/{subject_attribute_value}`: Deleted single identity in a workforce identity pool. For example, `deleted:principal://iam.googleapis.com/locations/global/workforcePools/my-pool-id/subject/my-subject-attribute-value`. */
  members?: ReadonlyArray<string>;
  /** The condition that is associated with this binding. If the condition evaluates to `true`, then this binding applies to the current request. If the condition evaluates to `false`, then this binding does not apply to the current request. However, a different role binding might grant the same role to one or more of the principals in this binding. To learn which resources support conditions in their IAM policies, see the [IAM documentation](https://cloud.google.com/iam/help/conditions/resource-policies). */
  condition?: Expr;
}

export const Binding: Schema.Schema<Binding> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    role: Schema.optional(Schema.String),
    members: Schema.optional(Schema.Array(Schema.String)),
    condition: Schema.optional(Expr),
  }).annotate({ identifier: "Binding" });

export interface Policy {
  /** `etag` is used for optimistic concurrency control as a way to help prevent simultaneous updates of a policy from overwriting each other. It is strongly suggested that systems make use of the `etag` in the read-modify-write cycle to perform policy updates in order to avoid race conditions: An `etag` is returned in the response to `getIamPolicy`, and systems are expected to put that etag in the request to `setIamPolicy` to ensure that their change will be applied to the same version of the policy. **Important:** If you use IAM Conditions, you must include the `etag` field whenever you call `setIamPolicy`. If you omit this field, then IAM allows you to overwrite a version `3` policy with a version `1` policy, and all of the conditions in the version `3` policy are lost. */
  etag?: string;
  /** Associates a list of `members`, or principals, with a `role`. Optionally, may specify a `condition` that determines how and when the `bindings` are applied. Each of the `bindings` must contain at least one principal. The `bindings` in a `Policy` can refer to up to 1,500 principals; up to 250 of these principals can be Google groups. Each occurrence of a principal counts towards these limits. For example, if the `bindings` grant 50 different roles to `user:alice@example.com`, and not to any other principal, then you can add another 1,450 principals to the `bindings` in the `Policy`. */
  bindings?: ReadonlyArray<Binding>;
  /** Specifies the format of the policy. Valid values are `0`, `1`, and `3`. Requests that specify an invalid value are rejected. Any operation that affects conditional role bindings must specify version `3`. This requirement applies to the following operations: * Getting a policy that includes a conditional role binding * Adding a conditional role binding to a policy * Changing a conditional role binding in a policy * Removing any role binding, with or without a condition, from a policy that includes conditions **Important:** If you use IAM Conditions, you must include the `etag` field whenever you call `setIamPolicy`. If you omit this field, then IAM allows you to overwrite a version `3` policy with a version `1` policy, and all of the conditions in the version `3` policy are lost. If a policy does not include any conditions, operations on that policy may specify any valid version or leave the field unset. To learn which resources support conditions in their IAM policies, see the [IAM documentation](https://cloud.google.com/iam/help/conditions/resource-policies). */
  version?: number;
  /** Specifies cloud audit logging configuration for this policy. */
  auditConfigs?: ReadonlyArray<AuditConfig>;
}

export const Policy: Schema.Schema<Policy> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    etag: Schema.optional(Schema.String),
    bindings: Schema.optional(Schema.Array(Binding)),
    version: Schema.optional(Schema.Number),
    auditConfigs: Schema.optional(Schema.Array(AuditConfig)),
  }).annotate({ identifier: "Policy" });

export interface StateMetadata {
  /** Output only. The state of the resource. */
  state?:
    | "STATE_UNSPECIFIED"
    | "ADDING"
    | "ACTIVE"
    | "DELETING"
    | "SUSPENDING"
    | "SUSPENDED"
    | (string & {});
  /** Output only. Accompanies only the transient states, which include `ADDING`, `DELETING`, and `SUSPENDING`, to denote the time until which the transient state of the resource will be effective. For instance, if the state is `ADDING`, this field shows the time when the resource state transitions to `ACTIVE`. */
  effectiveTime?: string;
}

export const StateMetadata: Schema.Schema<StateMetadata> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    state: Schema.optional(Schema.String),
    effectiveTime: Schema.optional(Schema.String),
  }).annotate({ identifier: "StateMetadata" });

export interface StateTimeline {
  /** Output only. The state and activation time details of the resource state. */
  states?: ReadonlyArray<StateMetadata>;
}

export const StateTimeline: Schema.Schema<StateTimeline> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    states: Schema.optional(Schema.Array(StateMetadata)),
  }).annotate({ identifier: "StateTimeline" });

export interface MulticloudDataTransferConfig {
  /** Output only. Time when the `MulticloudDataTransferConfig` resource was updated. */
  updateTime?: string;
  /** The etag is computed by the server, and might be sent with update and delete requests so that the client has an up-to-date value before proceeding. */
  etag?: string;
  /** Identifier. The name of the `MulticloudDataTransferConfig` resource. Format: `projects/{project}/locations/{location}/multicloudDataTransferConfigs/{multicloud_data_transfer_config}`. */
  name?: string;
  /** Output only. The number of `Destination` resources in use with the `MulticloudDataTransferConfig` resource. */
  destinationsActiveCount?: number;
  /** Output only. Time when the `MulticloudDataTransferConfig` resource was created. */
  createTime?: string;
  /** Optional. User-defined labels. */
  labels?: Record<string, string>;
  /** Optional. A description of this resource. */
  description?: string;
  /** Optional. Maps services to their current or planned states. Service names are keys, and the associated values describe the state of the service. If a state change is expected, the value is either `ADDING` or `DELETING`, depending on the actions taken. Sample output: "services": { "big-query": { "states": [ { "effectiveTime": "2024-12-12T08:00:00Z" "state": "ADDING", }, ] }, "cloud-storage": { "states": [ { "state": "ACTIVE", } ] } } */
  services?: Record<string, StateTimeline>;
  /** Output only. The number of `Destination` resources configured for the `MulticloudDataTransferConfig` resource. */
  destinationsCount?: number;
  /** Output only. The Google-generated unique ID for the `MulticloudDataTransferConfig` resource. This value is unique across all `MulticloudDataTransferConfig` resources. If a resource is deleted and another with the same name is created, the new resource is assigned a different and unique ID. */
  uid?: string;
}

export const MulticloudDataTransferConfig: Schema.Schema<MulticloudDataTransferConfig> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    updateTime: Schema.optional(Schema.String),
    etag: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    destinationsActiveCount: Schema.optional(Schema.Number),
    createTime: Schema.optional(Schema.String),
    labels: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    description: Schema.optional(Schema.String),
    services: Schema.optional(Schema.Record(Schema.String, StateTimeline)),
    destinationsCount: Schema.optional(Schema.Number),
    uid: Schema.optional(Schema.String),
  }).annotate({ identifier: "MulticloudDataTransferConfig" });

export interface SpokeStateReasonCount {
  /** Output only. The reason that a spoke is inactive. */
  stateReasonCode?:
    | "CODE_UNSPECIFIED"
    | "PENDING_REVIEW"
    | "REJECTED"
    | "PAUSED"
    | "FAILED"
    | "UPDATE_PENDING_REVIEW"
    | "UPDATE_REJECTED"
    | "UPDATE_FAILED"
    | (string & {});
  /** Output only. The total number of spokes that are inactive for a particular reason and associated with a given hub. */
  count?: string;
}

export const SpokeStateReasonCount: Schema.Schema<SpokeStateReasonCount> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    stateReasonCode: Schema.optional(Schema.String),
    count: Schema.optional(Schema.String),
  }).annotate({ identifier: "SpokeStateReasonCount" });

export interface SpokeStateCount {
  /** Output only. The total number of spokes that are in this state and associated with a given hub. */
  count?: string;
  /** Output only. The state of the spokes. */
  state?:
    | "STATE_UNSPECIFIED"
    | "CREATING"
    | "ACTIVE"
    | "DELETING"
    | "ACCEPTING"
    | "REJECTING"
    | "UPDATING"
    | "INACTIVE"
    | "OBSOLETE"
    | "FAILED"
    | (string & {});
}

export const SpokeStateCount: Schema.Schema<SpokeStateCount> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    count: Schema.optional(Schema.String),
    state: Schema.optional(Schema.String),
  }).annotate({ identifier: "SpokeStateCount" });

export interface SpokeTypeCount {
  /** Output only. The type of the spokes. */
  spokeType?:
    | "SPOKE_TYPE_UNSPECIFIED"
    | "VPN_TUNNEL"
    | "INTERCONNECT_ATTACHMENT"
    | "ROUTER_APPLIANCE"
    | "VPC_NETWORK"
    | "PRODUCER_VPC_NETWORK"
    | (string & {});
  /** Output only. The total number of spokes of this type that are associated with the hub. */
  count?: string;
}

export const SpokeTypeCount: Schema.Schema<SpokeTypeCount> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    spokeType: Schema.optional(Schema.String),
    count: Schema.optional(Schema.String),
  }).annotate({ identifier: "SpokeTypeCount" });

export interface SpokeSummary {
  /** Output only. Counts the number of spokes that are inactive for each possible reason and associated with a given hub. */
  spokeStateReasonCounts?: ReadonlyArray<SpokeStateReasonCount>;
  /** Output only. Counts the number of spokes that are in each state and associated with a given hub. */
  spokeStateCounts?: ReadonlyArray<SpokeStateCount>;
  /** Output only. Counts the number of spokes of each type that are associated with a specific hub. */
  spokeTypeCounts?: ReadonlyArray<SpokeTypeCount>;
}

export const SpokeSummary: Schema.Schema<SpokeSummary> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    spokeStateReasonCounts: Schema.optional(
      Schema.Array(SpokeStateReasonCount),
    ),
    spokeStateCounts: Schema.optional(Schema.Array(SpokeStateCount)),
    spokeTypeCounts: Schema.optional(Schema.Array(SpokeTypeCount)),
  }).annotate({ identifier: "SpokeSummary" });

export interface Hub {
  /** Optional. An optional description of the hub. */
  description?: string;
  /** Output only. The route tables that belong to this hub. They use the following form: `projects/{project_number}/locations/global/hubs/{hub_id}/routeTables/{route_table_id}` This field is read-only. Network Connectivity Center automatically populates it based on the route tables nested under the hub. */
  routeTables?: ReadonlyArray<string>;
  /** Optional. Whether Private Service Connect connection propagation is enabled for the hub. If true, Private Service Connect endpoints in VPC spokes attached to the hub are made accessible to other VPC spokes attached to the hub. The default value is false. */
  exportPsc?: boolean;
  /** Output only. The VPC networks associated with this hub's spokes. This field is read-only. Network Connectivity Center automatically populates it based on the set of spokes attached to the hub. */
  routingVpcs?: ReadonlyArray<RoutingVPC>;
  /** Optional. The policy mode of this hub. This field can be either PRESET or CUSTOM. If unspecified, the policy_mode defaults to PRESET. */
  policyMode?: "POLICY_MODE_UNSPECIFIED" | "PRESET" | (string & {});
  /** Output only. The time the hub was last updated. */
  updateTime?: string;
  /** Optional. The topology implemented in this hub. Currently, this field is only used when policy_mode = PRESET. The available preset topologies are MESH and STAR. If preset_topology is unspecified and policy_mode = PRESET, the preset_topology defaults to MESH. When policy_mode = CUSTOM, the preset_topology is set to PRESET_TOPOLOGY_UNSPECIFIED. */
  presetTopology?:
    | "PRESET_TOPOLOGY_UNSPECIFIED"
    | "MESH"
    | "STAR"
    | (string & {});
  /** Immutable. The name of the hub. Hub names must be unique. They use the following form: `projects/{project_number}/locations/global/hubs/{hub_id}` */
  name?: string;
  /** Output only. The Google-generated UUID for the hub. This value is unique across all hub resources. If a hub is deleted and another with the same name is created, the new hub is assigned a different unique_id. */
  uniqueId?: string;
  /** Output only. The time the hub was created. */
  createTime?: string;
  /** Optional labels in key-value pair format. For more information about labels, see [Requirements for labels](https://cloud.google.com/resource-manager/docs/creating-managing-labels#requirements). */
  labels?: Record<string, string>;
  /** Output only. A summary of the spokes associated with a hub. The summary includes a count of spokes according to type and according to state. If any spokes are inactive, the summary also lists the reasons they are inactive, including a count for each reason. */
  spokeSummary?: SpokeSummary;
  /** Output only. The current lifecycle state of this hub. */
  state?:
    | "STATE_UNSPECIFIED"
    | "CREATING"
    | "ACTIVE"
    | "DELETING"
    | "ACCEPTING"
    | "REJECTING"
    | "UPDATING"
    | "INACTIVE"
    | "OBSOLETE"
    | "FAILED"
    | (string & {});
}

export const Hub: Schema.Schema<Hub> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    description: Schema.optional(Schema.String),
    routeTables: Schema.optional(Schema.Array(Schema.String)),
    exportPsc: Schema.optional(Schema.Boolean),
    routingVpcs: Schema.optional(Schema.Array(RoutingVPC)),
    policyMode: Schema.optional(Schema.String),
    updateTime: Schema.optional(Schema.String),
    presetTopology: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    uniqueId: Schema.optional(Schema.String),
    createTime: Schema.optional(Schema.String),
    labels: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    spokeSummary: Schema.optional(SpokeSummary),
    state: Schema.optional(Schema.String),
  }).annotate({ identifier: "Hub" });

export interface ListHubsResponse {
  /** The token for the next page of the response. To see more results, use this value as the page_token for your next request. If this value is empty, there are no more results. */
  nextPageToken?: string;
  /** Locations that could not be reached. */
  unreachable?: ReadonlyArray<string>;
  /** The requested hubs. */
  hubs?: ReadonlyArray<Hub>;
}

export const ListHubsResponse: Schema.Schema<ListHubsResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    nextPageToken: Schema.optional(Schema.String),
    unreachable: Schema.optional(Schema.Array(Schema.String)),
    hubs: Schema.optional(Schema.Array(Hub)),
  }).annotate({ identifier: "ListHubsResponse" });

export interface ListInternalRangesResponse {
  /** Internal ranges to be returned. */
  internalRanges?: ReadonlyArray<InternalRange>;
  /** The next pagination token in the List response. It should be used as page_token for the following request. An empty value means no more result. */
  nextPageToken?: string;
  /** Locations that could not be reached. */
  unreachable?: ReadonlyArray<string>;
}

export const ListInternalRangesResponse: Schema.Schema<ListInternalRangesResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    internalRanges: Schema.optional(Schema.Array(InternalRange)),
    nextPageToken: Schema.optional(Schema.String),
    unreachable: Schema.optional(Schema.Array(Schema.String)),
  }).annotate({ identifier: "ListInternalRangesResponse" });

export interface ServiceConfig {
  /** Output only. The end time for eligibility criteria support. If not specified, no planned end time is set. */
  supportEndTime?: string;
  /** Output only. The eligibility criteria for the service. */
  eligibilityCriteria?:
    | "ELIGIBILITY_CRITERIA_UNSPECIFIED"
    | "NETWORK_SERVICE_TIER_PREMIUM_ONLY"
    | "NETWORK_SERVICE_TIER_STANDARD_ONLY"
    | "REQUEST_ENDPOINT_REGIONAL_ENDPOINT_ONLY"
    | (string & {});
}

export const ServiceConfig: Schema.Schema<ServiceConfig> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    supportEndTime: Schema.optional(Schema.String),
    eligibilityCriteria: Schema.optional(Schema.String),
  }).annotate({ identifier: "ServiceConfig" });

export interface MulticloudDataTransferSupportedService {
  /** Identifier. The name of the service. */
  name?: string;
  /** Output only. The network service tier or regional endpoint supported for the service. */
  serviceConfigs?: ReadonlyArray<ServiceConfig>;
}

export const MulticloudDataTransferSupportedService: Schema.Schema<MulticloudDataTransferSupportedService> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.optional(Schema.String),
    serviceConfigs: Schema.optional(Schema.Array(ServiceConfig)),
  }).annotate({ identifier: "MulticloudDataTransferSupportedService" });

export interface ListMulticloudDataTransferSupportedServicesResponse {
  /** The list of supported services. */
  multicloudDataTransferSupportedServices?: ReadonlyArray<MulticloudDataTransferSupportedService>;
  /** The next page token. */
  nextPageToken?: string;
}

export const ListMulticloudDataTransferSupportedServicesResponse: Schema.Schema<ListMulticloudDataTransferSupportedServicesResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    multicloudDataTransferSupportedServices: Schema.optional(
      Schema.Array(MulticloudDataTransferSupportedService),
    ),
    nextPageToken: Schema.optional(Schema.String),
  }).annotate({
    identifier: "ListMulticloudDataTransferSupportedServicesResponse",
  });

export interface ListServiceConnectionMapsResponse {
  /** ServiceConnectionMaps to be returned. */
  serviceConnectionMaps?: ReadonlyArray<ServiceConnectionMap>;
  /** The next pagination token in the List response. It should be used as page_token for the following request. An empty value means no more result. */
  nextPageToken?: string;
  /** Locations that could not be reached. */
  unreachable?: ReadonlyArray<string>;
}

export const ListServiceConnectionMapsResponse: Schema.Schema<ListServiceConnectionMapsResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    serviceConnectionMaps: Schema.optional(Schema.Array(ServiceConnectionMap)),
    nextPageToken: Schema.optional(Schema.String),
    unreachable: Schema.optional(Schema.Array(Schema.String)),
  }).annotate({ identifier: "ListServiceConnectionMapsResponse" });

export interface PscConfig {
  /** Optional. ProducerInstanceLocation is used to specify which authorization mechanism to use to determine which projects the Producer instance can be within. */
  producerInstanceLocation?:
    | "PRODUCER_INSTANCE_LOCATION_UNSPECIFIED"
    | "CUSTOM_RESOURCE_HIERARCHY_LEVELS"
    | (string & {});
  /** Optional. List of Projects, Folders, or Organizations from where the Producer instance can be within. For example, a network administrator can provide both 'organizations/foo' and 'projects/bar' as allowed_google_producers_resource_hierarchy_levels. This allowlists this network to connect with any Producer instance within the 'foo' organization or the 'bar' project. By default, allowed_google_producers_resource_hierarchy_level is empty. The format for each allowed_google_producers_resource_hierarchy_level is / where is one of 'projects', 'folders', or 'organizations' and is either the ID or the number of the resource type. Format for each allowed_google_producers_resource_hierarchy_level value: 'projects/' or 'folders/' or 'organizations/' Eg. [projects/my-project-id, projects/567, folders/891, organizations/123] */
  allowedGoogleProducersResourceHierarchyLevel?: ReadonlyArray<string>;
  /** The resource paths of subnetworks to use for IP address management. Example: projects/{projectNumOrId}/regions/{region}/subnetworks/{resourceId}. */
  subnetworks?: ReadonlyArray<string>;
  /** Optional. Max number of PSC connections for this policy. */
  limit?: string;
}

export const PscConfig: Schema.Schema<PscConfig> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    producerInstanceLocation: Schema.optional(Schema.String),
    allowedGoogleProducersResourceHierarchyLevel: Schema.optional(
      Schema.Array(Schema.String),
    ),
    subnetworks: Schema.optional(Schema.Array(Schema.String)),
    limit: Schema.optional(Schema.String),
  }).annotate({ identifier: "PscConfig" });

export interface AutoAccept {
  /** Optional. A list of project ids or project numbers for which you want to enable auto-accept. The auto-accept setting is applied to spokes being created or updated in these projects. */
  autoAcceptProjects?: ReadonlyArray<string>;
}

export const AutoAccept: Schema.Schema<AutoAccept> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    autoAcceptProjects: Schema.optional(Schema.Array(Schema.String)),
  }).annotate({ identifier: "AutoAccept" });

export interface Group {
  /** Output only. The time the group was created. */
  createTime?: string;
  /** Optional. The auto-accept setting for this group. */
  autoAccept?: AutoAccept;
  /** Optional. Labels in key-value pair format. For more information about labels, see [Requirements for labels](https://cloud.google.com/resource-manager/docs/creating-managing-labels#requirements). */
  labels?: Record<string, string>;
  /** Optional. The description of the group. */
  description?: string;
  /** Output only. The Google-generated UUID for the group. This value is unique across all group resources. If a group is deleted and another with the same name is created, the new route table is assigned a different unique_id. */
  uid?: string;
  /** Output only. The name of the route table that corresponds to this group. They use the following form: `projects/{project_number}/locations/global/hubs/{hub_id}/routeTables/{route_table_id}` */
  routeTable?: string;
  /** Output only. The current lifecycle state of this group. */
  state?:
    | "STATE_UNSPECIFIED"
    | "CREATING"
    | "ACTIVE"
    | "DELETING"
    | "ACCEPTING"
    | "REJECTING"
    | "UPDATING"
    | "INACTIVE"
    | "OBSOLETE"
    | "FAILED"
    | (string & {});
  /** Output only. The time the group was last updated. */
  updateTime?: string;
  /** Immutable. The name of the group. Group names must be unique. They use the following form: `projects/{project_number}/locations/global/hubs/{hub}/groups/{group_id}` */
  name?: string;
}

export const Group: Schema.Schema<Group> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    createTime: Schema.optional(Schema.String),
    autoAccept: Schema.optional(AutoAccept),
    labels: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    description: Schema.optional(Schema.String),
    uid: Schema.optional(Schema.String),
    routeTable: Schema.optional(Schema.String),
    state: Schema.optional(Schema.String),
    updateTime: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
  }).annotate({ identifier: "Group" });

export interface VirtualMachine {
  /** Optional. A list of VM instance tags that this policy-based route applies to. VM instances that have ANY of tags specified here installs this PBR. */
  tags?: ReadonlyArray<string>;
}

export const VirtualMachine: Schema.Schema<VirtualMachine> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    tags: Schema.optional(Schema.Array(Schema.String)),
  }).annotate({ identifier: "VirtualMachine" });

export interface ListServiceClassesResponse {
  /** ServiceClasses to be returned. */
  serviceClasses?: ReadonlyArray<ServiceClass>;
  /** The next pagination token in the List response. It should be used as page_token for the following request. An empty value means no more result. */
  nextPageToken?: string;
  /** Locations that could not be reached. */
  unreachable?: ReadonlyArray<string>;
}

export const ListServiceClassesResponse: Schema.Schema<ListServiceClassesResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    serviceClasses: Schema.optional(Schema.Array(ServiceClass)),
    nextPageToken: Schema.optional(Schema.String),
    unreachable: Schema.optional(Schema.Array(Schema.String)),
  }).annotate({ identifier: "ListServiceClassesResponse" });

export interface Location {
  /** The canonical id for this location. For example: `"us-east1"`. */
  locationId?: string;
  /** Resource name for the location, which may vary between implementations. For example: `"projects/example-project/locations/us-east1"` */
  name?: string;
  /** The friendly name for this location, typically a nearby city name. For example, "Tokyo". */
  displayName?: string;
  /** Service-specific metadata. For example the available capacity at the given location. */
  metadata?: Record<string, unknown>;
  /** Cross-service attributes for the location. For example {"cloud.googleapis.com/region": "us-east1"} */
  labels?: Record<string, string>;
}

export const Location: Schema.Schema<Location> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    locationId: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    displayName: Schema.optional(Schema.String),
    metadata: Schema.optional(Schema.Record(Schema.String, Schema.Unknown)),
    labels: Schema.optional(Schema.Record(Schema.String, Schema.String)),
  }).annotate({ identifier: "Location" });

export interface OperationMetadata {
  /** Output only. API version used to start the operation. */
  apiVersion?: string;
  /** Output only. Human-readable status of the operation, if any. */
  statusMessage?: string;
  /** Output only. Name of the verb executed by the operation. */
  verb?: string;
  /** Output only. The time the operation was created. */
  createTime?: string;
  /** Output only. Server-defined resource path for the target of the operation. */
  target?: string;
  /** Output only. The time the operation finished running. */
  endTime?: string;
  /** Output only. Identifies whether the user has requested cancellation of the operation. Operations that have been cancelled successfully have google.longrunning.Operation.error value with a google.rpc.Status.code of 1, corresponding to `Code.CANCELLED`. */
  requestedCancellation?: boolean;
}

export const OperationMetadata: Schema.Schema<OperationMetadata> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    apiVersion: Schema.optional(Schema.String),
    statusMessage: Schema.optional(Schema.String),
    verb: Schema.optional(Schema.String),
    createTime: Schema.optional(Schema.String),
    target: Schema.optional(Schema.String),
    endTime: Schema.optional(Schema.String),
    requestedCancellation: Schema.optional(Schema.Boolean),
  }).annotate({ identifier: "OperationMetadata" });

export interface PscConnection {
  /** Output only. The error info for the latest error during operating this connection. */
  errorInfo?: GoogleRpcErrorInfo;
  /** The error type indicates whether the error is consumer facing, producer facing or system internal. */
  errorType?:
    | "CONNECTION_ERROR_TYPE_UNSPECIFIED"
    | "ERROR_INTERNAL"
    | "ERROR_CONSUMER_SIDE"
    | "ERROR_PRODUCER_SIDE"
    | (string & {});
  /** The project where the PSC connection is created. */
  consumerTargetProject?: string;
  /** The most recent error during operating this connection. Deprecated, please use error_info instead. */
  error?: GoogleRpcStatus;
  /** Immutable. Deprecated. Use producer_instance_metadata instead. An immutable identifier for the producer instance. */
  producerInstanceId?: string;
  /** Output only. [Output only] The service class associated with this PSC Connection. The value is derived from the SCPolicy and matches the service class name provided by the customer. */
  serviceClass?: string;
  /** The requested IP version for the PSC connection. */
  ipVersion?: "IP_VERSION_UNSPECIFIED" | "IPV4" | "IPV6" | (string & {});
  /** The PSC connection id of the PSC forwarding rule. */
  pscConnectionId?: string;
  /** Immutable. An immutable map for the producer instance metadata. */
  producerInstanceMetadata?: Record<string, string>;
  /** The last Compute Engine operation to setup PSC connection. */
  gceOperation?: string;
  /** Output only. The URI of the subnetwork selected to allocate IP address for this connection. */
  selectedSubnetwork?: string;
  /** State of the PSC Connection */
  state?:
    | "STATE_UNSPECIFIED"
    | "ACTIVE"
    | "FAILED"
    | "CREATING"
    | "DELETING"
    | "CREATE_REPAIRING"
    | "DELETE_REPAIRING"
    | (string & {});
  /** The resource reference of the PSC Forwarding Rule within the consumer VPC. */
  consumerForwardingRule?: string;
  /** The resource reference of the consumer address. */
  consumerAddress?: string;
}

export const PscConnection: Schema.Schema<PscConnection> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    errorInfo: Schema.optional(GoogleRpcErrorInfo),
    errorType: Schema.optional(Schema.String),
    consumerTargetProject: Schema.optional(Schema.String),
    error: Schema.optional(GoogleRpcStatus),
    producerInstanceId: Schema.optional(Schema.String),
    serviceClass: Schema.optional(Schema.String),
    ipVersion: Schema.optional(Schema.String),
    pscConnectionId: Schema.optional(Schema.String),
    producerInstanceMetadata: Schema.optional(
      Schema.Record(Schema.String, Schema.String),
    ),
    gceOperation: Schema.optional(Schema.String),
    selectedSubnetwork: Schema.optional(Schema.String),
    state: Schema.optional(Schema.String),
    consumerForwardingRule: Schema.optional(Schema.String),
    consumerAddress: Schema.optional(Schema.String),
  }).annotate({ identifier: "PscConnection" });

export interface GoogleLongrunningCancelOperationRequest {}

export const GoogleLongrunningCancelOperationRequest: Schema.Schema<GoogleLongrunningCancelOperationRequest> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).annotate({
    identifier: "GoogleLongrunningCancelOperationRequest",
  });

export interface Config {
  /** Required. Number of seconds that this DNS record can be cached by resolvers. */
  ttl?: string;
  /** Required. The list of resource record data strings. The content and format of these strings depend on the AutomatedDnsRecord.type. For many common record types, this list may contain multiple strings. As defined in RFC 1035 (section 5) and RFC 1034 (section 3.6.1) -- see examples. Examples: A record: ["192.0.2.1"] or ["192.0.2.1", "192.0.2.2"] TXT record: ["This is a text record"] CNAME record: ["target.example.com."] AAAA record: ["::1"] or ["2001:0db8:85a3:0000:0000:8a2e:0370:7334", "2001:0db8:85a3:0000:0000:8a2e:0370:7335"] */
  rrdatas?: ReadonlyArray<string>;
}

export const Config: Schema.Schema<Config> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    ttl: Schema.optional(Schema.String),
    rrdatas: Schema.optional(Schema.Array(Schema.String)),
  }).annotate({ identifier: "Config" });

export interface AutomatedDnsRecord {
  /** Required. Immutable. The service class identifier which authorizes this AutomatedDnsRecord. Any API calls targeting this AutomatedDnsRecord must have `networkconnectivity.serviceclasses.use` IAM permission for the provided service class. */
  serviceClass?: string;
  /** Required. Immutable. The creation mode of the AutomatedDnsRecord. This field is immutable. */
  creationMode?:
    | "CREATION_MODE_UNSPECIFIED"
    | "CONSUMER_API"
    | "SERVICE_CONNECTION_MAP"
    | (string & {});
  /** Optional. The etag is computed by the server, and may be sent on update and delete requests to ensure the client has an up-to-date value before proceeding. */
  etag?: string;
  /** Output only. The current settings for this record as identified by (`hostname`, `dns_suffix`, `type`) in Cloud DNS. The `current_config` field reflects the actual settings of the DNS record in Cloud DNS based on the `hostname`, `dns_suffix`, and `type`. * **Absence:** If `current_config` is unset, it means a DNS record with the specified `hostname`, `dns_suffix`, and `type` does not currently exist in Cloud DNS. This could be because the `AutomatedDnsRecord` has never been successfully programmed, has been deleted, or there was an error during provisioning. * **Presence:** If `current_config` is present: * It can be different from the `original_config`. This can happen due to several reasons: * Out-of-band changes: A consumer might have directly modified the DNS record in Cloud DNS. * `OVERWRITE` operations from other `AutomatedDnsRecord` resources: Another `AutomatedDnsRecord` with the same identifying attributes (`hostname`, `dns_suffix`, `type`) but a different configuration might have overwritten the record using `insert_mode: OVERWRITE`. Therefore, the presence of `current_config` indicates that a corresponding DNS record exists, but its values (TTL and RRData) might not always align with the `original_config` of the AutomatedDnsRecord. */
  currentConfig?: Config;
  /** Required. Immutable. The hostname for the DNS record. This value will be prepended to the `dns_suffix` to create the full domain name (FQDN) for the record. For example, if `hostname` is "corp.db" and `dns_suffix` is "example.com.", the resulting record will be "corp.db.example.com.". Should not include a trailing dot. */
  hostname?: string;
  /** Output only. A human-readable message providing more context about the current state, such as an error description if the state is `FAILED_DEPROGRAMMING`. */
  stateDetails?: string;
  /** Required. Immutable. The configuration settings used to create this DNS record. These settings define the desired state of the record as specified by the producer. */
  originalConfig?: Config;
  /** Required. Immutable. The dns suffix for this record to use in longest-suffix matching. Requires a trailing dot. Example: "example.com." */
  dnsSuffix?: string;
  /** A human-readable description of the record. */
  description?: string;
  /** Output only. The FQDN created by combining the hostname and dns suffix. Should include a trailing dot. */
  fqdn?: string;
  /** Immutable. Identifier. The name of an AutomatedDnsRecord. Format: projects/{project}/locations/{location}/automatedDnsRecords/{automated_dns_record} See: https://google.aip.dev/122#fields-representing-resource-names */
  name?: string;
  /** Required. Immutable. The full resource path of the consumer network this AutomatedDnsRecord is visible to. Example: "projects/{projectNumOrId}/global/networks/{networkName}". */
  consumerNetwork?: string;
  /** Output only. DnsZone is the DNS zone managed by automation. Format: projects/{project}/managedZones/{managedZone} */
  dnsZone?: string;
  /** Output only. The timestamp of when the record was updated. */
  updateTime?: string;
  /** Output only. The current operational state of this AutomatedDnsRecord as managed by Service Connectivity Automation. */
  state?:
    | "STATE_UNSPECIFIED"
    | "PROGRAMMED"
    | "FAILED_DEPROGRAMMING"
    | "CREATING"
    | "DELETING"
    | (string & {});
  /** Output only. The timestamp of when the record was created. */
  createTime?: string;
  /** Optional. User-defined labels. */
  labels?: Record<string, string>;
  /** Required. Immutable. The identifier of a supported record type. */
  recordType?:
    | "RECORD_TYPE_UNSPECIFIED"
    | "A"
    | "AAAA"
    | "TXT"
    | "CNAME"
    | (string & {});
}

export const AutomatedDnsRecord: Schema.Schema<AutomatedDnsRecord> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    serviceClass: Schema.optional(Schema.String),
    creationMode: Schema.optional(Schema.String),
    etag: Schema.optional(Schema.String),
    currentConfig: Schema.optional(Config),
    hostname: Schema.optional(Schema.String),
    stateDetails: Schema.optional(Schema.String),
    originalConfig: Schema.optional(Config),
    dnsSuffix: Schema.optional(Schema.String),
    description: Schema.optional(Schema.String),
    fqdn: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    consumerNetwork: Schema.optional(Schema.String),
    dnsZone: Schema.optional(Schema.String),
    updateTime: Schema.optional(Schema.String),
    state: Schema.optional(Schema.String),
    createTime: Schema.optional(Schema.String),
    labels: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    recordType: Schema.optional(Schema.String),
  }).annotate({ identifier: "AutomatedDnsRecord" });

export interface ListAutomatedDnsRecordsResponse {
  /** AutomatedDnsRecords to be returned. */
  automatedDnsRecords?: ReadonlyArray<AutomatedDnsRecord>;
  /** The next pagination token in the List response. It should be used as page_token for the following request. An empty value means no more result. */
  nextPageToken?: string;
  /** Locations that could not be reached. */
  unreachable?: ReadonlyArray<string>;
}

export const ListAutomatedDnsRecordsResponse: Schema.Schema<ListAutomatedDnsRecordsResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    automatedDnsRecords: Schema.optional(Schema.Array(AutomatedDnsRecord)),
    nextPageToken: Schema.optional(Schema.String),
    unreachable: Schema.optional(Schema.Array(Schema.String)),
  }).annotate({ identifier: "ListAutomatedDnsRecordsResponse" });

export interface Filter {
  /** Optional. The destination IP range of outgoing packets that this policy-based route applies to. Default is "0.0.0.0/0" if protocol version is IPv4 and "::/0" if protocol version is IPv6. */
  destRange?: string;
  /** Optional. The IP protocol that this policy-based route applies to. Valid values are 'TCP', 'UDP', and 'ALL'. Default is 'ALL'. */
  ipProtocol?: string;
  /** Optional. The source IP range of outgoing packets that this policy-based route applies to. Default is "0.0.0.0/0" if protocol version is IPv4 and "::/0" if protocol version is IPv6. */
  srcRange?: string;
  /** Required. Internet protocol versions this policy-based route applies to. IPV4 and IPV6 is supported. */
  protocolVersion?:
    | "PROTOCOL_VERSION_UNSPECIFIED"
    | "IPV4"
    | "IPV6"
    | (string & {});
}

export const Filter: Schema.Schema<Filter> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    destRange: Schema.optional(Schema.String),
    ipProtocol: Schema.optional(Schema.String),
    srcRange: Schema.optional(Schema.String),
    protocolVersion: Schema.optional(Schema.String),
  }).annotate({ identifier: "Filter" });

export interface RegionalEndpoint {
  /** Output only. Time when the RegionalEndpoint was created. */
  createTime?: string;
  /** Required. The access type of this regional endpoint. This field is reflected in the PSC Forwarding Rule configuration to enable global access. */
  accessType?:
    | "ACCESS_TYPE_UNSPECIFIED"
    | "GLOBAL"
    | "REGIONAL"
    | (string & {});
  /** User-defined labels. */
  labels?: Record<string, string>;
  /** Optional. A description of this resource. */
  description?: string;
  /** Optional. The name of the VPC network for this private regional endpoint. Format: `projects/{project}/global/networks/{network}` */
  network?: string;
  /** Optional. The name of the subnetwork from which the IP address will be allocated. Format: `projects/{project}/regions/{region}/subnetworks/{subnetwork}` */
  subnetwork?: string;
  /** Output only. The resource reference of the PSC Forwarding Rule created on behalf of the customer. Format: `//compute.googleapis.com/projects/{project}/regions/{region}/forwardingRules/{forwarding_rule_name}` */
  pscForwardingRule?: string;
  /** Optional. The IP Address of the Regional Endpoint. When no address is provided, an IP from the subnetwork is allocated. Use one of the following formats: * IPv4 address as in `10.0.0.1` * Address resource URI as in `projects/{project}/regions/{region}/addresses/{address_name}` for an IPv4 or IPv6 address. */
  address?: string;
  /** Output only. Time when the RegionalEndpoint was updated. */
  updateTime?: string;
  /** Required. The service endpoint this private regional endpoint connects to. Format: `{apiname}.{region}.p.rep.googleapis.com` Example: "cloudkms.us-central1.p.rep.googleapis.com". */
  targetGoogleApi?: string;
  /** Output only. The name of a RegionalEndpoint. Pattern: `projects/{project}/locations/{location}/regionalEndpoints/^[-a-z0-9](?:[-a-z0-9]{0,44})[a-z0-9]$`. */
  name?: string;
  /** Output only. The literal IP address of the PSC Forwarding Rule created on behalf of the customer. This field is deprecated. Use address instead. */
  ipAddress?: string;
}

export const RegionalEndpoint: Schema.Schema<RegionalEndpoint> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    createTime: Schema.optional(Schema.String),
    accessType: Schema.optional(Schema.String),
    labels: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    description: Schema.optional(Schema.String),
    network: Schema.optional(Schema.String),
    subnetwork: Schema.optional(Schema.String),
    pscForwardingRule: Schema.optional(Schema.String),
    address: Schema.optional(Schema.String),
    updateTime: Schema.optional(Schema.String),
    targetGoogleApi: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    ipAddress: Schema.optional(Schema.String),
  }).annotate({ identifier: "RegionalEndpoint" });

export interface ListRegionalEndpointsResponse {
  /** The next pagination token in the List response. It should be used as page_token for the following request. An empty value means no more result. */
  nextPageToken?: string;
  /** Locations that could not be reached. */
  unreachable?: ReadonlyArray<string>;
  /** Regional endpoints to be returned. */
  regionalEndpoints?: ReadonlyArray<RegionalEndpoint>;
}

export const ListRegionalEndpointsResponse: Schema.Schema<ListRegionalEndpointsResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    nextPageToken: Schema.optional(Schema.String),
    unreachable: Schema.optional(Schema.Array(Schema.String)),
    regionalEndpoints: Schema.optional(Schema.Array(RegionalEndpoint)),
  }).annotate({ identifier: "ListRegionalEndpointsResponse" });

export interface TestIamPermissionsResponse {
  /** A subset of `TestPermissionsRequest.permissions` that the caller is allowed. */
  permissions?: ReadonlyArray<string>;
}

export const TestIamPermissionsResponse: Schema.Schema<TestIamPermissionsResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    permissions: Schema.optional(Schema.Array(Schema.String)),
  }).annotate({ identifier: "TestIamPermissionsResponse" });

export interface Warnings {
  /** Output only. A warning code, if applicable. */
  code?:
    | "WARNING_UNSPECIFIED"
    | "RESOURCE_NOT_ACTIVE"
    | "RESOURCE_BEING_MODIFIED"
    | (string & {});
  /** Output only. A human-readable description of the warning code. */
  warningMessage?: string;
  /** Output only. Metadata about this warning in key: value format. The key should provides more detail on the warning being returned. For example, for warnings where there are no results in a list request for a particular zone, this key might be scope and the key value might be the zone name. Other examples might be a key indicating a deprecated resource and a suggested replacement. */
  data?: Record<string, string>;
}

export const Warnings: Schema.Schema<Warnings> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    code: Schema.optional(Schema.String),
    warningMessage: Schema.optional(Schema.String),
    data: Schema.optional(Schema.Record(Schema.String, Schema.String)),
  }).annotate({ identifier: "Warnings" });

export interface RouteTable {
  /** Optional labels in key-value pair format. For more information about labels, see [Requirements for labels](https://cloud.google.com/resource-manager/docs/creating-managing-labels#requirements). */
  labels?: Record<string, string>;
  /** Output only. The time the route table was created. */
  createTime?: string;
  /** Output only. The time the route table was last updated. */
  updateTime?: string;
  /** An optional description of the route table. */
  description?: string;
  /** Immutable. The name of the route table. Route table names must be unique. They use the following form: `projects/{project_number}/locations/global/hubs/{hub}/routeTables/{route_table_id}` */
  name?: string;
  /** Output only. The Google-generated UUID for the route table. This value is unique across all route table resources. If a route table is deleted and another with the same name is created, the new route table is assigned a different `uid`. */
  uid?: string;
  /** Output only. The current lifecycle state of this route table. */
  state?:
    | "STATE_UNSPECIFIED"
    | "CREATING"
    | "ACTIVE"
    | "DELETING"
    | "ACCEPTING"
    | "REJECTING"
    | "UPDATING"
    | "INACTIVE"
    | "OBSOLETE"
    | "FAILED"
    | (string & {});
}

export const RouteTable: Schema.Schema<RouteTable> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    labels: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    createTime: Schema.optional(Schema.String),
    updateTime: Schema.optional(Schema.String),
    description: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    uid: Schema.optional(Schema.String),
    state: Schema.optional(Schema.String),
  }).annotate({ identifier: "RouteTable" });

export interface ListRouteTablesResponse {
  /** The token for the next page of the response. To see more results, use this value as the page_token for your next request. If this value is empty, there are no more results. */
  nextPageToken?: string;
  /** Hubs that could not be reached. */
  unreachable?: ReadonlyArray<string>;
  /** The requested route tables. */
  routeTables?: ReadonlyArray<RouteTable>;
}

export const ListRouteTablesResponse: Schema.Schema<ListRouteTablesResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    nextPageToken: Schema.optional(Schema.String),
    unreachable: Schema.optional(Schema.Array(Schema.String)),
    routeTables: Schema.optional(Schema.Array(RouteTable)),
  }).annotate({ identifier: "ListRouteTablesResponse" });

export interface AutoCreatedSubnetworkInfo {
  /** Output only. URI of the automatically created Internal Range reference. Only set if the subnetwork mode is AUTO_CREATED during creation. */
  internalRangeRef?: string;
  /** Output only. URI of the automatically created subnetwork. Only set if the subnetwork mode is AUTO_CREATED during creation. */
  subnetwork?: string;
  /** Output only. URI of the automatically created subnetwork reference. Only set if the subnetwork mode is AUTO_CREATED during creation. */
  subnetworkRef?: string;
  /** Output only. Indicates whether the subnetwork is delinked from the Service Connection Policy. Only set if the subnetwork mode is AUTO_CREATED during creation. */
  delinked?: boolean;
  /** Output only. URI of the automatically created Internal Range. Only set if the subnetwork mode is AUTO_CREATED during creation. */
  internalRange?: string;
}

export const AutoCreatedSubnetworkInfo: Schema.Schema<AutoCreatedSubnetworkInfo> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    internalRangeRef: Schema.optional(Schema.String),
    subnetwork: Schema.optional(Schema.String),
    subnetworkRef: Schema.optional(Schema.String),
    delinked: Schema.optional(Schema.Boolean),
    internalRange: Schema.optional(Schema.String),
  }).annotate({ identifier: "AutoCreatedSubnetworkInfo" });

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

export interface CheckConsumerConfigRequest {
  /** Required. Full resource name of the consumer network. Example: - projects/{project}/global/networks/{network}. */
  consumerNetwork?: string;
  /** Required. The service class identifier of the producer. */
  serviceClass?: string;
  /** The project number or ID where the PSC endpoint is to be created. */
  endpointProject?: string;
  /** The requested IP Version */
  requestedIpVersion?:
    | "IP_VERSION_UNSPECIFIED"
    | "IPV4"
    | "IPV6"
    | (string & {});
}

export const CheckConsumerConfigRequest: Schema.Schema<CheckConsumerConfigRequest> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    consumerNetwork: Schema.optional(Schema.String),
    serviceClass: Schema.optional(Schema.String),
    endpointProject: Schema.optional(Schema.String),
    requestedIpVersion: Schema.optional(Schema.String),
  }).annotate({ identifier: "CheckConsumerConfigRequest" });

export interface TestIamPermissionsRequest {
  /** The set of permissions to check for the `resource`. Permissions with wildcards (such as `*` or `storage.*`) are not allowed. For more information see [IAM Overview](https://cloud.google.com/iam/docs/overview#permissions). */
  permissions?: ReadonlyArray<string>;
}

export const TestIamPermissionsRequest: Schema.Schema<TestIamPermissionsRequest> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    permissions: Schema.optional(Schema.Array(Schema.String)),
  }).annotate({ identifier: "TestIamPermissionsRequest" });

export interface DestinationEndpoint {
  /** Output only. The state of the `DestinationEndpoint` resource. */
  state?: "STATE_UNSPECIFIED" | "VALID" | "INVALID" | (string & {});
  /** Required. The ASN of the remote IP prefix. */
  asn?: string;
  /** Required. The CSP of the remote IP prefix. */
  csp?: string;
  /** Output only. Time when the `DestinationEndpoint` resource was updated. */
  updateTime?: string;
}

export const DestinationEndpoint: Schema.Schema<DestinationEndpoint> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    state: Schema.optional(Schema.String),
    asn: Schema.optional(Schema.String),
    csp: Schema.optional(Schema.String),
    updateTime: Schema.optional(Schema.String),
  }).annotate({ identifier: "DestinationEndpoint" });

export interface LocationMetadata {
  /** List of supported features */
  locationFeatures?: ReadonlyArray<
    | "LOCATION_FEATURE_UNSPECIFIED"
    | "SITE_TO_CLOUD_SPOKES"
    | "SITE_TO_SITE_SPOKES"
    | "GATEWAY_SPOKES"
    | "TRANSPORTS"
    | (string & {})
  >;
}

export const LocationMetadata: Schema.Schema<LocationMetadata> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    locationFeatures: Schema.optional(Schema.Array(Schema.String)),
  }).annotate({ identifier: "LocationMetadata" });

export interface InterconnectAttachment {
  /** Optional. Cloud region to install this policy-based route on interconnect attachment. Use `all` to install it on all interconnect attachments. */
  region?: string;
}

export const InterconnectAttachment: Schema.Schema<InterconnectAttachment> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    region: Schema.optional(Schema.String),
  }).annotate({ identifier: "InterconnectAttachment" });

export interface PolicyBasedRoute {
  /** Required. Fully-qualified URL of the network that this route applies to, for example: projects/my-project/global/networks/my-network. */
  network?: string;
  /** User-defined labels. */
  labels?: Record<string, string>;
  /** Output only. Time when the policy-based route was created. */
  createTime?: string;
  /** Optional. The priority of this policy-based route. Priority is used to break ties in cases where there are more than one matching policy-based routes found. In cases where multiple policy-based routes are matched, the one with the lowest-numbered priority value wins. The default value is 1000. The priority value must be from 1 to 65535, inclusive. */
  priority?: number;
  /** Output only. Time when the policy-based route was updated. */
  updateTime?: string;
  /** Immutable. Identifier. A unique name of the resource in the form of `projects/{project_number}/locations/global/PolicyBasedRoutes/{policy_based_route_id}` */
  name?: string;
  /** Required. The filter to match L4 traffic. */
  filter?: Filter;
  /** Optional. An optional description of this resource. Provide this field when you create the resource. */
  description?: string;
  /** Optional. The interconnect attachments that this policy-based route applies to. */
  interconnectAttachment?: InterconnectAttachment;
  /** Optional. VM instances that this policy-based route applies to. */
  virtualMachine?: VirtualMachine;
  /** Output only. Type of this resource. Always networkconnectivity#policyBasedRoute for policy-based Route resources. */
  kind?: string;
  /** Output only. Server-defined fully-qualified URL for this resource. */
  selfLink?: string;
  /** Output only. If potential misconfigurations are detected for this route, this field will be populated with warning messages. */
  warnings?: ReadonlyArray<Warnings>;
  /** Optional. The IP address of a global-access-enabled L4 ILB that is the next hop for matching packets. For this version, only nextHopIlbIp is supported. */
  nextHopIlbIp?: string;
  /** Optional. Other routes that will be referenced to determine the next hop of the packet. */
  nextHopOtherRoutes?:
    | "OTHER_ROUTES_UNSPECIFIED"
    | "DEFAULT_ROUTING"
    | (string & {});
}

export const PolicyBasedRoute: Schema.Schema<PolicyBasedRoute> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    network: Schema.optional(Schema.String),
    labels: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    createTime: Schema.optional(Schema.String),
    priority: Schema.optional(Schema.Number),
    updateTime: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    filter: Schema.optional(Filter),
    description: Schema.optional(Schema.String),
    interconnectAttachment: Schema.optional(InterconnectAttachment),
    virtualMachine: Schema.optional(VirtualMachine),
    kind: Schema.optional(Schema.String),
    selfLink: Schema.optional(Schema.String),
    warnings: Schema.optional(Schema.Array(Warnings)),
    nextHopIlbIp: Schema.optional(Schema.String),
    nextHopOtherRoutes: Schema.optional(Schema.String),
  }).annotate({ identifier: "PolicyBasedRoute" });

export interface ListPolicyBasedRoutesResponse {
  /** The next pagination token in the List response. It should be used as page_token for the following request. An empty value means no more result. */
  nextPageToken?: string;
  /** Locations that could not be reached. */
  unreachable?: ReadonlyArray<string>;
  /** Policy-based routes to be returned. */
  policyBasedRoutes?: ReadonlyArray<PolicyBasedRoute>;
}

export const ListPolicyBasedRoutesResponse: Schema.Schema<ListPolicyBasedRoutesResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    nextPageToken: Schema.optional(Schema.String),
    unreachable: Schema.optional(Schema.Array(Schema.String)),
    policyBasedRoutes: Schema.optional(Schema.Array(PolicyBasedRoute)),
  }).annotate({ identifier: "ListPolicyBasedRoutesResponse" });

export interface RemoteTransportProfile {
  /** Output only. Availability class that will be configured for this particular RemoteTransportProfile. */
  sla?:
    | "SERVICE_LEVEL_AVAILABILITY_UNSPECIFIED"
    | "HIGH"
    | "MAXIMUM"
    | (string & {});
  /** Output only. Type of provisioning flows supported by this profile. */
  flow?:
    | "KEY_PROVISIONING_FLOW_UNSPECIFIED"
    | "INPUT_ONLY"
    | "OUTPUT_ONLY"
    | "INPUT_OR_OUTPUT"
    | (string & {});
  /** Identifier. Name of the resource in the format of $provider-$site. */
  name?: string;
  /** Output only. Order state for this profile. */
  orderState?: "STATE_UNSPECIFIED" | "CLOSED" | "OPEN" | (string & {});
  /** Output only. If the profile is a Cloud Service Provider with compute resources, this is populated with the region where connectivity is being established. If the profile provides facility-level selection, this is an identity of the facility any connections on this profile are going through. */
  providerSite?: string;
  /** Output only. List of bandwidth enum values that are supported by this profile. */
  supportedBandwidths?: ReadonlyArray<
    | "BANDWIDTH_UNSPECIFIED"
    | "BPS_50M"
    | "BPS_100M"
    | "BPS_200M"
    | "BPS_300M"
    | "BPS_400M"
    | "BPS_500M"
    | "BPS_1G"
    | "BPS_2G"
    | "BPS_5G"
    | "BPS_10G"
    | "BPS_20G"
    | "BPS_50G"
    | "BPS_100G"
    | (string & {})
  >;
  /** Output only. Labels as key value pairs. */
  labels?: Record<string, string>;
  /** Output only. Description of the profile. */
  description?: string;
  /** Output only. Human readable name of this profile, used to identify this profile in the UI. */
  displayName?: string;
  /** Output only. Name of the provider on the other end of this profile. E.g. “Amazon Web Services” or “Microsoft Azure”. */
  provider?: string;
}

export const RemoteTransportProfile: Schema.Schema<RemoteTransportProfile> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    sla: Schema.optional(Schema.String),
    flow: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    orderState: Schema.optional(Schema.String),
    providerSite: Schema.optional(Schema.String),
    supportedBandwidths: Schema.optional(Schema.Array(Schema.String)),
    labels: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    description: Schema.optional(Schema.String),
    displayName: Schema.optional(Schema.String),
    provider: Schema.optional(Schema.String),
  }).annotate({ identifier: "RemoteTransportProfile" });

export interface ListRemoteTransportProfilesResponse {
  /** A token identifying a page of results the server should return. */
  nextPageToken?: string;
  /** Unordered list. Locations that could not be reached. */
  unreachable?: ReadonlyArray<string>;
  /** The list of RemoteTransportProfiles. */
  remoteTransportProfiles?: ReadonlyArray<RemoteTransportProfile>;
}

export const ListRemoteTransportProfilesResponse: Schema.Schema<ListRemoteTransportProfilesResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    nextPageToken: Schema.optional(Schema.String),
    unreachable: Schema.optional(Schema.Array(Schema.String)),
    remoteTransportProfiles: Schema.optional(
      Schema.Array(RemoteTransportProfile),
    ),
  }).annotate({ identifier: "ListRemoteTransportProfilesResponse" });

export interface ListGroupsResponse {
  /** The token for the next page of the response. To see more results, use this value as the page_token for your next request. If this value is empty, there are no more results. */
  nextPageToken?: string;
  /** Hubs that could not be reached. */
  unreachable?: ReadonlyArray<string>;
  /** The requested groups. */
  groups?: ReadonlyArray<Group>;
}

export const ListGroupsResponse: Schema.Schema<ListGroupsResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    nextPageToken: Schema.optional(Schema.String),
    unreachable: Schema.optional(Schema.Array(Schema.String)),
    groups: Schema.optional(Schema.Array(Group)),
  }).annotate({ identifier: "ListGroupsResponse" });

export interface ListSpokesResponse {
  /** The requested spokes. */
  spokes?: ReadonlyArray<Spoke>;
  /** The token for the next page of the response. To see more results, use this value as the page_token for your next request. If this value is empty, there are no more results. */
  nextPageToken?: string;
  /** Locations that could not be reached. */
  unreachable?: ReadonlyArray<string>;
}

export const ListSpokesResponse: Schema.Schema<ListSpokesResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    spokes: Schema.optional(Schema.Array(Spoke)),
    nextPageToken: Schema.optional(Schema.String),
    unreachable: Schema.optional(Schema.Array(Schema.String)),
  }).annotate({ identifier: "ListSpokesResponse" });

export interface RejectSpokeUpdateRequest {
  /** Required. The URI of the spoke to reject update. */
  spokeUri?: string;
  /** Optional. Additional information provided by the hub administrator. */
  details?: string;
  /** Required. The etag of the spoke to reject update. */
  spokeEtag?: string;
  /** Optional. A request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server knows to ignore the request if it has already been completed. The server guarantees that a request doesn't result in creation of duplicate commitments for at least 60 minutes. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check to see whether the original operation was received. If it was, the server ignores the second request. This behavior prevents clients from mistakenly creating duplicate commitments. The request ID must be a valid UUID, with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000). */
  requestId?: string;
}

export const RejectSpokeUpdateRequest: Schema.Schema<RejectSpokeUpdateRequest> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    spokeUri: Schema.optional(Schema.String),
    details: Schema.optional(Schema.String),
    spokeEtag: Schema.optional(Schema.String),
    requestId: Schema.optional(Schema.String),
  }).annotate({ identifier: "RejectSpokeUpdateRequest" });

export interface RejectHubSpokeResponse {
  /** The spoke that was operated on. */
  spoke?: Spoke;
}

export const RejectHubSpokeResponse: Schema.Schema<RejectHubSpokeResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    spoke: Schema.optional(Spoke),
  }).annotate({ identifier: "RejectHubSpokeResponse" });

export interface ListMulticloudDataTransferConfigsResponse {
  /** The next page token. */
  nextPageToken?: string;
  /** Locations that could not be reached. */
  unreachable?: ReadonlyArray<string>;
  /** The list of `MulticloudDataTransferConfig` resources to be listed. */
  multicloudDataTransferConfigs?: ReadonlyArray<MulticloudDataTransferConfig>;
}

export const ListMulticloudDataTransferConfigsResponse: Schema.Schema<ListMulticloudDataTransferConfigsResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    nextPageToken: Schema.optional(Schema.String),
    unreachable: Schema.optional(Schema.Array(Schema.String)),
    multicloudDataTransferConfigs: Schema.optional(
      Schema.Array(MulticloudDataTransferConfig),
    ),
  }).annotate({ identifier: "ListMulticloudDataTransferConfigsResponse" });

export interface Destination {
  /** Optional. A description of this resource. */
  description?: string;
  /** Optional. User-defined labels. */
  labels?: Record<string, string>;
  /** Output only. Time when the `Destination` resource was created. */
  createTime?: string;
  /** Required. Unordered list. The list of `DestinationEndpoint` resources configured for the IP prefix. */
  endpoints?: ReadonlyArray<DestinationEndpoint>;
  /** Required. Immutable. The IP prefix that represents your workload on another CSP. */
  ipPrefix?: string;
  /** Output only. The Google-generated unique ID for the `Destination` resource. This value is unique across all `Destination` resources. If a resource is deleted and another with the same name is created, the new resource is assigned a different and unique ID. */
  uid?: string;
  /** Output only. Time when the `Destination` resource was updated. */
  updateTime?: string;
  /** The etag is computed by the server, and might be sent with update and delete requests so that the client has an up-to-date value before proceeding. */
  etag?: string;
  /** Output only. The timeline of the expected `Destination` states or the current rest state. If a state change is expected, the value is `ADDING`, `DELETING` or `SUSPENDING`, depending on the action specified. Example: "state_timeline": { "states": [ { // The time when the `Destination` resource will be activated. "effectiveTime": "2024-12-01T08:00:00Z", "state": "ADDING" }, { // The time when the `Destination` resource will be suspended. "effectiveTime": "2024-12-01T20:00:00Z", "state": "SUSPENDING" } ] } */
  stateTimeline?: StateTimeline;
  /** Identifier. The name of the `Destination` resource. Format: `projects/{project}/locations/{location}/multicloudDataTransferConfigs/{multicloud_data_transfer_config}/destinations/{destination}`. */
  name?: string;
}

export const Destination: Schema.Schema<Destination> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    description: Schema.optional(Schema.String),
    labels: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    createTime: Schema.optional(Schema.String),
    endpoints: Schema.optional(Schema.Array(DestinationEndpoint)),
    ipPrefix: Schema.optional(Schema.String),
    uid: Schema.optional(Schema.String),
    updateTime: Schema.optional(Schema.String),
    etag: Schema.optional(Schema.String),
    stateTimeline: Schema.optional(StateTimeline),
    name: Schema.optional(Schema.String),
  }).annotate({ identifier: "Destination" });

export interface AcceptSpokeUpdateRequest {
  /** Required. The etag of the spoke to accept update. */
  spokeEtag?: string;
  /** Optional. A request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server knows to ignore the request if it has already been completed. The server guarantees that a request doesn't result in creation of duplicate commitments for at least 60 minutes. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check to see whether the original operation was received. If it was, the server ignores the second request. This behavior prevents clients from mistakenly creating duplicate commitments. The request ID must be a valid UUID, with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000). */
  requestId?: string;
  /** Required. The URI of the spoke to accept update. */
  spokeUri?: string;
}

export const AcceptSpokeUpdateRequest: Schema.Schema<AcceptSpokeUpdateRequest> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    spokeEtag: Schema.optional(Schema.String),
    requestId: Schema.optional(Schema.String),
    spokeUri: Schema.optional(Schema.String),
  }).annotate({ identifier: "AcceptSpokeUpdateRequest" });

export interface ServiceConnectionPolicy {
  /** User-defined labels. */
  labels?: Record<string, string>;
  /** Output only. Information for the automatically created subnetwork and its associated IR. */
  autoCreatedSubnetInfo?: AutoCreatedSubnetworkInfo;
  /** Output only. Time when the ServiceConnectionPolicy was created. */
  createTime?: string;
  /** A description of this resource. */
  description?: string;
  /** The resource path of the consumer network. Example: - projects/{projectNumOrId}/global/networks/{resourceId}. */
  network?: string;
  /** Output only. [Output only] Information about each Private Service Connect connection. */
  pscConnections?: ReadonlyArray<PscConnection>;
  /** Immutable. The name of a ServiceConnectionPolicy. Format: projects/{project}/locations/{location}/serviceConnectionPolicies/{service_connection_policy} See: https://google.aip.dev/122#fields-representing-resource-names */
  name?: string;
  /** The service class identifier for which this ServiceConnectionPolicy is for. The service class identifier is a unique, symbolic representation of a ServiceClass. It is provided by the Service Producer. Google services have a prefix of gcp or google-cloud. For example, gcp-memorystore-redis or google-cloud-sql. 3rd party services do not. For example, test-service-a3dfcx. */
  serviceClass?: string;
  /** Output only. The type of underlying resources used to create the connection. */
  infrastructure?: "INFRASTRUCTURE_UNSPECIFIED" | "PSC" | (string & {});
  /** Configuration used for Private Service Connect connections. Used when Infrastructure is PSC. */
  pscConfig?: PscConfig;
  /** Output only. Time when the ServiceConnectionPolicy was updated. */
  updateTime?: string;
  /** Optional. The etag is computed by the server, and may be sent on update and delete requests to ensure the client has an up-to-date value before proceeding. */
  etag?: string;
}

export const ServiceConnectionPolicy: Schema.Schema<ServiceConnectionPolicy> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    labels: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    autoCreatedSubnetInfo: Schema.optional(AutoCreatedSubnetworkInfo),
    createTime: Schema.optional(Schema.String),
    description: Schema.optional(Schema.String),
    network: Schema.optional(Schema.String),
    pscConnections: Schema.optional(Schema.Array(PscConnection)),
    name: Schema.optional(Schema.String),
    serviceClass: Schema.optional(Schema.String),
    infrastructure: Schema.optional(Schema.String),
    pscConfig: Schema.optional(PscConfig),
    updateTime: Schema.optional(Schema.String),
    etag: Schema.optional(Schema.String),
  }).annotate({ identifier: "ServiceConnectionPolicy" });

export interface NextHopVPNTunnel {
  /** The URI of the VPN tunnel resource. */
  uri?: string;
  /** The VPC network where this VPN tunnel is located. */
  vpcNetwork?: string;
  /** Indicates whether site-to-site data transfer is allowed for this VPN tunnel resource. Data transfer is available only in [supported locations](https://cloud.google.com/network-connectivity/docs/network-connectivity-center/concepts/locations). */
  siteToSiteDataTransfer?: boolean;
}

export const NextHopVPNTunnel: Schema.Schema<NextHopVPNTunnel> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    uri: Schema.optional(Schema.String),
    vpcNetwork: Schema.optional(Schema.String),
    siteToSiteDataTransfer: Schema.optional(Schema.Boolean),
  }).annotate({ identifier: "NextHopVPNTunnel" });

export interface ListServiceConnectionPoliciesResponse {
  /** ServiceConnectionPolicies to be returned. */
  serviceConnectionPolicies?: ReadonlyArray<ServiceConnectionPolicy>;
  /** The next pagination token in the List response. It should be used as page_token for the following request. An empty value means no more result. */
  nextPageToken?: string;
  /** Locations that could not be reached. */
  unreachable?: ReadonlyArray<string>;
}

export const ListServiceConnectionPoliciesResponse: Schema.Schema<ListServiceConnectionPoliciesResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    serviceConnectionPolicies: Schema.optional(
      Schema.Array(ServiceConnectionPolicy),
    ),
    nextPageToken: Schema.optional(Schema.String),
    unreachable: Schema.optional(Schema.Array(Schema.String)),
  }).annotate({ identifier: "ListServiceConnectionPoliciesResponse" });

export interface SetIamPolicyRequest {
  /** REQUIRED: The complete policy to be applied to the `resource`. The size of the policy is limited to a few 10s of KB. An empty policy is a valid policy but certain Google Cloud services (such as Projects) might reject them. */
  policy?: Policy;
  /** OPTIONAL: A FieldMask specifying which fields of the policy to modify. Only the fields in the mask will be modified. If no mask is provided, the following default mask is used: `paths: "bindings, etag"` */
  updateMask?: string;
}

export const SetIamPolicyRequest: Schema.Schema<SetIamPolicyRequest> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    policy: Schema.optional(Policy),
    updateMask: Schema.optional(Schema.String),
  }).annotate({ identifier: "SetIamPolicyRequest" });

export interface ListDestinationsResponse {
  /** The list of `Destination` resources to be listed. */
  destinations?: ReadonlyArray<Destination>;
  /** The next page token. */
  nextPageToken?: string;
  /** Locations that could not be reached. */
  unreachable?: ReadonlyArray<string>;
}

export const ListDestinationsResponse: Schema.Schema<ListDestinationsResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    destinations: Schema.optional(Schema.Array(Destination)),
    nextPageToken: Schema.optional(Schema.String),
    unreachable: Schema.optional(Schema.Array(Schema.String)),
  }).annotate({ identifier: "ListDestinationsResponse" });

export interface Empty {}

export const Empty: Schema.Schema<Empty> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).annotate({
    identifier: "Empty",
  });

export interface NextHopSpoke {
  /** Indicates whether site-to-site data transfer is allowed for this spoke resource. Data transfer is available only in [supported locations](https://cloud.google.com/network-connectivity/docs/network-connectivity-center/concepts/locations). Whether this route is accessible to other hybrid spokes with site-to-site data transfer enabled. If this is false, the route is only accessible to VPC spokes of the connected Hub. */
  siteToSiteDataTransfer?: boolean;
  /** The URI of the spoke resource. */
  uri?: string;
}

export const NextHopSpoke: Schema.Schema<NextHopSpoke> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    siteToSiteDataTransfer: Schema.optional(Schema.Boolean),
    uri: Schema.optional(Schema.String),
  }).annotate({ identifier: "NextHopSpoke" });

export interface ListServiceConnectionTokensResponse {
  /** ServiceConnectionTokens to be returned. */
  serviceConnectionTokens?: ReadonlyArray<ServiceConnectionToken>;
  /** The next pagination token in the List response. It should be used as page_token for the following request. An empty value means no more result. */
  nextPageToken?: string;
  /** Locations that could not be reached. */
  unreachable?: ReadonlyArray<string>;
}

export const ListServiceConnectionTokensResponse: Schema.Schema<ListServiceConnectionTokensResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    serviceConnectionTokens: Schema.optional(
      Schema.Array(ServiceConnectionToken),
    ),
    nextPageToken: Schema.optional(Schema.String),
    unreachable: Schema.optional(Schema.Array(Schema.String)),
  }).annotate({ identifier: "ListServiceConnectionTokensResponse" });

export interface NextHopInterconnectAttachment {
  /** Indicates whether site-to-site data transfer is allowed for this interconnect attachment resource. Data transfer is available only in [supported locations](https://cloud.google.com/network-connectivity/docs/network-connectivity-center/concepts/locations). */
  siteToSiteDataTransfer?: boolean;
  /** The VPC network where this interconnect attachment is located. */
  vpcNetwork?: string;
  /** The URI of the interconnect attachment resource. */
  uri?: string;
}

export const NextHopInterconnectAttachment: Schema.Schema<NextHopInterconnectAttachment> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    siteToSiteDataTransfer: Schema.optional(Schema.Boolean),
    vpcNetwork: Schema.optional(Schema.String),
    uri: Schema.optional(Schema.String),
  }).annotate({ identifier: "NextHopInterconnectAttachment" });

export interface NextHopVpcNetwork {
  /** The URI of the VPC network resource */
  uri?: string;
}

export const NextHopVpcNetwork: Schema.Schema<NextHopVpcNetwork> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    uri: Schema.optional(Schema.String),
  }).annotate({ identifier: "NextHopVpcNetwork" });

export interface Route {
  /** Output only. The Google-generated UUID for the route. This value is unique across all Network Connectivity Center route resources. If a route is deleted and another with the same name is created, the new route is assigned a different `uid`. */
  uid?: string;
  /** Output only. The current lifecycle state of the route. */
  state?:
    | "STATE_UNSPECIFIED"
    | "CREATING"
    | "ACTIVE"
    | "DELETING"
    | "ACCEPTING"
    | "REJECTING"
    | "UPDATING"
    | "INACTIVE"
    | "OBSOLETE"
    | "FAILED"
    | (string & {});
  /** Optional labels in key-value pair format. For more information about labels, see [Requirements for labels](https://cloud.google.com/resource-manager/docs/creating-managing-labels#requirements). */
  labels?: Record<string, string>;
  /** Output only. The time the route was created. */
  createTime?: string;
  /** Immutable. The next-hop VPN tunnel for packets on this route. */
  nextHopVpnTunnel?: NextHopVPNTunnel;
  /** Immutable. The name of the route. Route names must be unique. Route names use the following form: `projects/{project_number}/locations/global/hubs/{hub}/routeTables/{route_table_id}/routes/{route_id}` */
  name?: string;
  /** Output only. The origin location of the route. Uses the following form: "projects/{project}/locations/{location}" Example: projects/1234/locations/us-central1 */
  location?: string;
  /** Output only. The priority of this route. Priority is used to break ties in cases where a destination matches more than one route. In these cases the route with the lowest-numbered priority value wins. */
  priority?: string;
  /** Output only. The time the route was last updated. */
  updateTime?: string;
  /** The destination IP address range. */
  ipCidrRange?: string;
  /** Immutable. The next-hop VLAN attachment for packets on this route. */
  nextHopInterconnectAttachment?: NextHopInterconnectAttachment;
  /** Immutable. The next-hop spoke for packets on this route. */
  nextHopSpoke?: NextHopSpoke;
  /** Immutable. The next-hop Router appliance instance for packets on this route. */
  nextHopRouterApplianceInstance?: NextHopRouterApplianceInstance;
  /** An optional description of the route. */
  description?: string;
  /** Output only. The route's type. Its type is determined by the properties of its IP address range. */
  type?:
    | "ROUTE_TYPE_UNSPECIFIED"
    | "VPC_PRIMARY_SUBNET"
    | "VPC_SECONDARY_SUBNET"
    | "DYNAMIC_ROUTE"
    | (string & {});
  /** Immutable. The destination VPC network for packets on this route. */
  nextHopVpcNetwork?: NextHopVpcNetwork;
  /** Immutable. The spoke that this route leads to. Example: projects/12345/locations/global/spokes/SPOKE */
  spoke?: string;
}

export const Route: Schema.Schema<Route> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    uid: Schema.optional(Schema.String),
    state: Schema.optional(Schema.String),
    labels: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    createTime: Schema.optional(Schema.String),
    nextHopVpnTunnel: Schema.optional(NextHopVPNTunnel),
    name: Schema.optional(Schema.String),
    location: Schema.optional(Schema.String),
    priority: Schema.optional(Schema.String),
    updateTime: Schema.optional(Schema.String),
    ipCidrRange: Schema.optional(Schema.String),
    nextHopInterconnectAttachment: Schema.optional(
      NextHopInterconnectAttachment,
    ),
    nextHopSpoke: Schema.optional(NextHopSpoke),
    nextHopRouterApplianceInstance: Schema.optional(
      NextHopRouterApplianceInstance,
    ),
    description: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    nextHopVpcNetwork: Schema.optional(NextHopVpcNetwork),
    spoke: Schema.optional(Schema.String),
  }).annotate({ identifier: "Route" });

export interface ListRoutesResponse {
  /** The token for the next page of the response. To see more results, use this value as the page_token for your next request. If this value is empty, there are no more results. */
  nextPageToken?: string;
  /** RouteTables that could not be reached. */
  unreachable?: ReadonlyArray<string>;
  /** The requested routes. */
  routes?: ReadonlyArray<Route>;
}

export const ListRoutesResponse: Schema.Schema<ListRoutesResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    nextPageToken: Schema.optional(Schema.String),
    unreachable: Schema.optional(Schema.Array(Schema.String)),
    routes: Schema.optional(Schema.Array(Route)),
  }).annotate({ identifier: "ListRoutesResponse" });

export interface GoogleLongrunningOperation {
  /** The server-assigned name, which is only unique within the same service that originally returns it. If you use the default HTTP mapping, the `name` should be a resource name ending with `operations/{unique_id}`. */
  name?: string;
  /** Service-specific metadata associated with the operation. It typically contains progress information and common metadata such as create time. Some services might not provide such metadata. Any method that returns a long-running operation should document the metadata type, if any. */
  metadata?: Record<string, unknown>;
  /** The normal, successful response of the operation. If the original method returns no data on success, such as `Delete`, the response is `google.protobuf.Empty`. If the original method is standard `Get`/`Create`/`Update`, the response should be the resource. For other methods, the response should have the type `XxxResponse`, where `Xxx` is the original method name. For example, if the original method name is `TakeSnapshot()`, the inferred response type is `TakeSnapshotResponse`. */
  response?: Record<string, unknown>;
  /** The error result of the operation in case of failure or cancellation. */
  error?: GoogleRpcStatus;
  /** If the value is `false`, it means the operation is still in progress. If `true`, the operation is completed, and either `error` or `response` is available. */
  done?: boolean;
}

export const GoogleLongrunningOperation: Schema.Schema<GoogleLongrunningOperation> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.optional(Schema.String),
    metadata: Schema.optional(Schema.Record(Schema.String, Schema.Unknown)),
    response: Schema.optional(Schema.Record(Schema.String, Schema.Unknown)),
    error: Schema.optional(GoogleRpcStatus),
    done: Schema.optional(Schema.Boolean),
  }).annotate({ identifier: "GoogleLongrunningOperation" });

export interface GoogleLongrunningListOperationsResponse {
  /** The standard List next-page token. */
  nextPageToken?: string;
  /** Unordered list. Unreachable resources. Populated when the request sets `ListOperationsRequest.return_partial_success` and reads across collections. For example, when attempting to list all resources across all supported locations. */
  unreachable?: ReadonlyArray<string>;
  /** A list of operations that matches the specified filter in the request. */
  operations?: ReadonlyArray<GoogleLongrunningOperation>;
}

export const GoogleLongrunningListOperationsResponse: Schema.Schema<GoogleLongrunningListOperationsResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    nextPageToken: Schema.optional(Schema.String),
    unreachable: Schema.optional(Schema.Array(Schema.String)),
    operations: Schema.optional(Schema.Array(GoogleLongrunningOperation)),
  }).annotate({ identifier: "GoogleLongrunningListOperationsResponse" });

export interface AcceptHubSpokeRequest {
  /** Required. The URI of the spoke to accept into the hub. */
  spokeUri?: string;
  /** Optional. A request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server knows to ignore the request if it has already been completed. The server guarantees that a request doesn't result in creation of duplicate commitments for at least 60 minutes. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check to see whether the original operation was received. If it was, the server ignores the second request. This behavior prevents clients from mistakenly creating duplicate commitments. The request ID must be a valid UUID, with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000). */
  requestId?: string;
}

export const AcceptHubSpokeRequest: Schema.Schema<AcceptHubSpokeRequest> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    spokeUri: Schema.optional(Schema.String),
    requestId: Schema.optional(Schema.String),
  }).annotate({ identifier: "AcceptHubSpokeRequest" });

export interface RejectHubSpokeRequest {
  /** Required. The URI of the spoke to reject from the hub. */
  spokeUri?: string;
  /** Optional. Additional information provided by the hub administrator. */
  details?: string;
  /** Optional. A request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server knows to ignore the request if it has already been completed. The server guarantees that a request doesn't result in creation of duplicate commitments for at least 60 minutes. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check to see whether the original operation was received. If it was, the server ignores the second request. This behavior prevents clients from mistakenly creating duplicate commitments. The request ID must be a valid UUID, with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000). */
  requestId?: string;
}

export const RejectHubSpokeRequest: Schema.Schema<RejectHubSpokeRequest> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    spokeUri: Schema.optional(Schema.String),
    details: Schema.optional(Schema.String),
    requestId: Schema.optional(Schema.String),
  }).annotate({ identifier: "RejectHubSpokeRequest" });

export interface CheckConsumerConfigResponse {
  /** List of validation errors. If the list is empty, the consumer config is valid. */
  errors?: ReadonlyArray<
    | "ERROR_UNSPECIFIED"
    | "NETWORK_PROJECT_INVALID"
    | "NETWORK_PROJECT_APIS_NOT_ENABLED"
    | "NETWORK_INVALID"
    | "CONNECTION_POLICY_MISSING"
    | "IP_VERSION_NOT_SUPPORTED"
    | "NETWORK_PROJECT_SERVICE_AGENT_NOT_FOUND"
    | "ENDPOINT_PROJECT_INVALID"
    | "ENDPOINT_PROJECT_API_NOT_ENABLED"
    | "ENDPOINT_PROJECT_IS_NOT_SERVICE_PROJECT"
    | (string & {})
  >;
}

export const CheckConsumerConfigResponse: Schema.Schema<CheckConsumerConfigResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    errors: Schema.optional(Schema.Array(Schema.String)),
  }).annotate({ identifier: "CheckConsumerConfigResponse" });

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

export interface CheckConsumerConfigProjectsLocationsRequest {
  /** Required. The location resource path. Example: - projects/{project}/locations/{location} */
  location: string;
  /** Request body */
  body?: CheckConsumerConfigRequest;
}

export const CheckConsumerConfigProjectsLocationsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    location: Schema.String.pipe(T.HttpPath("location")),
    body: Schema.optional(CheckConsumerConfigRequest).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v1/{+location}:checkConsumerConfig",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<CheckConsumerConfigProjectsLocationsRequest>;

export type CheckConsumerConfigProjectsLocationsResponse =
  CheckConsumerConfigResponse;
export const CheckConsumerConfigProjectsLocationsResponse =
  /*@__PURE__*/ /*#__PURE__*/ CheckConsumerConfigResponse;

export type CheckConsumerConfigProjectsLocationsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** CheckConsumerConfig validates the consumer network and project for potential PSC connection creation. This method performs several checks, including: - Validating the existence and permissions of the service class. - Ensuring the consumer network exists and is accessible. - Verifying XPN relationships if applicable. - Checking for compatible IP versions between the consumer network and the requested version. This method performs a dynamic IAM check for the `networkconnectivity.serviceClasses.use` permission on the service class resource in the Prepare phase. */
export const checkConsumerConfigProjectsLocations: API.OperationMethod<
  CheckConsumerConfigProjectsLocationsRequest,
  CheckConsumerConfigProjectsLocationsResponse,
  CheckConsumerConfigProjectsLocationsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: CheckConsumerConfigProjectsLocationsRequest,
  output: CheckConsumerConfigProjectsLocationsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface ListProjectsLocationsRequest {
  /** The resource that owns the locations collection, if applicable. */
  name: string;
  /** A page token received from the `next_page_token` field in the response. Send that page token to receive the subsequent page. */
  pageToken?: string;
  /** A filter to narrow down results to a preferred subset. The filtering language accepts strings like `"displayName=tokyo"`, and is documented in more detail in [AIP-160](https://google.aip.dev/160). */
  filter?: string;
  /** The maximum number of results to return. If not set, the service selects a default. */
  pageSize?: number;
  /** Optional. Do not use this field unless explicitly documented otherwise. This is primarily for internal usage. */
  extraLocationTypes?: string[];
}

export const ListProjectsLocationsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
    filter: Schema.optional(Schema.String).pipe(T.HttpQuery("filter")),
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
    extraLocationTypes: Schema.optional(Schema.Array(Schema.String)).pipe(
      T.HttpQuery("extraLocationTypes"),
    ),
  }).pipe(
    T.Http({ method: "GET", path: "v1/{+name}/locations" }),
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
    T.Http({ method: "GET", path: "v1/{+name}" }),
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

export interface GetProjectsLocationsRegionalEndpointsRequest {
  /** Required. Name of the RegionalEndpoint resource to get. Format: `projects/{project}/locations/{location}/regionalEndpoints/{regional_endpoint}` */
  name: string;
}

export const GetProjectsLocationsRegionalEndpointsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "GET", path: "v1/{+name}" }),
    svc,
  ) as unknown as Schema.Schema<GetProjectsLocationsRegionalEndpointsRequest>;

export type GetProjectsLocationsRegionalEndpointsResponse = RegionalEndpoint;
export const GetProjectsLocationsRegionalEndpointsResponse =
  /*@__PURE__*/ /*#__PURE__*/ RegionalEndpoint;

export type GetProjectsLocationsRegionalEndpointsError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Gets details of a single RegionalEndpoint. */
export const getProjectsLocationsRegionalEndpoints: API.OperationMethod<
  GetProjectsLocationsRegionalEndpointsRequest,
  GetProjectsLocationsRegionalEndpointsResponse,
  GetProjectsLocationsRegionalEndpointsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetProjectsLocationsRegionalEndpointsRequest,
  output: GetProjectsLocationsRegionalEndpointsResponse,
  errors: [NotFound, Forbidden],
}));

export interface ListProjectsLocationsRegionalEndpointsRequest {
  /** Required. The parent resource's name of the RegionalEndpoint. */
  parent: string;
  /** A filter expression that filters the results listed in the response. */
  filter?: string;
  /** A page token. */
  pageToken?: string;
  /** Sort the results by a certain order. */
  orderBy?: string;
  /** Requested page size. Server may return fewer items than requested. If unspecified, server will pick an appropriate default. */
  pageSize?: number;
}

export const ListProjectsLocationsRegionalEndpointsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    parent: Schema.String.pipe(T.HttpPath("parent")),
    filter: Schema.optional(Schema.String).pipe(T.HttpQuery("filter")),
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
    orderBy: Schema.optional(Schema.String).pipe(T.HttpQuery("orderBy")),
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
  }).pipe(
    T.Http({ method: "GET", path: "v1/{+parent}/regionalEndpoints" }),
    svc,
  ) as unknown as Schema.Schema<ListProjectsLocationsRegionalEndpointsRequest>;

export type ListProjectsLocationsRegionalEndpointsResponse =
  ListRegionalEndpointsResponse;
export const ListProjectsLocationsRegionalEndpointsResponse =
  /*@__PURE__*/ /*#__PURE__*/ ListRegionalEndpointsResponse;

export type ListProjectsLocationsRegionalEndpointsError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Lists RegionalEndpoints in a given project and location. */
export const listProjectsLocationsRegionalEndpoints: API.PaginatedOperationMethod<
  ListProjectsLocationsRegionalEndpointsRequest,
  ListProjectsLocationsRegionalEndpointsResponse,
  ListProjectsLocationsRegionalEndpointsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
  input: ListProjectsLocationsRegionalEndpointsRequest,
  output: ListProjectsLocationsRegionalEndpointsResponse,
  errors: [NotFound, Forbidden],
  pagination: {
    inputToken: "pageToken",
    outputToken: "nextPageToken",
  },
}));

export interface CreateProjectsLocationsRegionalEndpointsRequest {
  /** Required. Unique id of the Regional Endpoint to be created. @pattern: ^[-a-z0-9](?:[-a-z0-9]{0,44})[a-z0-9]$ */
  regionalEndpointId?: string;
  /** Optional. An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server knows to ignore the request if it has already been completed. The server guarantees that for at least 60 minutes since the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if the original operation with the same request ID was received, and if so, ignores the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000). */
  requestId?: string;
  /** Required. The parent resource's name of the RegionalEndpoint. */
  parent: string;
  /** Request body */
  body?: RegionalEndpoint;
}

export const CreateProjectsLocationsRegionalEndpointsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    regionalEndpointId: Schema.optional(Schema.String).pipe(
      T.HttpQuery("regionalEndpointId"),
    ),
    requestId: Schema.optional(Schema.String).pipe(T.HttpQuery("requestId")),
    parent: Schema.String.pipe(T.HttpPath("parent")),
    body: Schema.optional(RegionalEndpoint).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v1/{+parent}/regionalEndpoints",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<CreateProjectsLocationsRegionalEndpointsRequest>;

export type CreateProjectsLocationsRegionalEndpointsResponse =
  GoogleLongrunningOperation;
export const CreateProjectsLocationsRegionalEndpointsResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleLongrunningOperation;

export type CreateProjectsLocationsRegionalEndpointsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Creates a new RegionalEndpoint in a given project and location. */
export const createProjectsLocationsRegionalEndpoints: API.OperationMethod<
  CreateProjectsLocationsRegionalEndpointsRequest,
  CreateProjectsLocationsRegionalEndpointsResponse,
  CreateProjectsLocationsRegionalEndpointsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: CreateProjectsLocationsRegionalEndpointsRequest,
  output: CreateProjectsLocationsRegionalEndpointsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface DeleteProjectsLocationsRegionalEndpointsRequest {
  /** Required. The name of the RegionalEndpoint to delete. */
  name: string;
  /** Optional. An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server knows to ignore the request if it has already been completed. The server guarantees that for at least 60 minutes since the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if the original operation with the same request ID was received, and if so, ignores the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000). */
  requestId?: string;
}

export const DeleteProjectsLocationsRegionalEndpointsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    requestId: Schema.optional(Schema.String).pipe(T.HttpQuery("requestId")),
  }).pipe(
    T.Http({ method: "DELETE", path: "v1/{+name}" }),
    svc,
  ) as unknown as Schema.Schema<DeleteProjectsLocationsRegionalEndpointsRequest>;

export type DeleteProjectsLocationsRegionalEndpointsResponse =
  GoogleLongrunningOperation;
export const DeleteProjectsLocationsRegionalEndpointsResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleLongrunningOperation;

export type DeleteProjectsLocationsRegionalEndpointsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Deletes a single RegionalEndpoint. */
export const deleteProjectsLocationsRegionalEndpoints: API.OperationMethod<
  DeleteProjectsLocationsRegionalEndpointsRequest,
  DeleteProjectsLocationsRegionalEndpointsResponse,
  DeleteProjectsLocationsRegionalEndpointsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: DeleteProjectsLocationsRegionalEndpointsRequest,
  output: DeleteProjectsLocationsRegionalEndpointsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface GetProjectsLocationsServiceConnectionPoliciesRequest {
  /** Required. Name of the ServiceConnectionPolicy to get. */
  name: string;
}

export const GetProjectsLocationsServiceConnectionPoliciesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "GET", path: "v1/{+name}" }),
    svc,
  ) as unknown as Schema.Schema<GetProjectsLocationsServiceConnectionPoliciesRequest>;

export type GetProjectsLocationsServiceConnectionPoliciesResponse =
  ServiceConnectionPolicy;
export const GetProjectsLocationsServiceConnectionPoliciesResponse =
  /*@__PURE__*/ /*#__PURE__*/ ServiceConnectionPolicy;

export type GetProjectsLocationsServiceConnectionPoliciesError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Gets details of a single ServiceConnectionPolicy. */
export const getProjectsLocationsServiceConnectionPolicies: API.OperationMethod<
  GetProjectsLocationsServiceConnectionPoliciesRequest,
  GetProjectsLocationsServiceConnectionPoliciesResponse,
  GetProjectsLocationsServiceConnectionPoliciesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetProjectsLocationsServiceConnectionPoliciesRequest,
  output: GetProjectsLocationsServiceConnectionPoliciesResponse,
  errors: [NotFound, Forbidden],
}));

export interface PatchProjectsLocationsServiceConnectionPoliciesRequest {
  /** Immutable. The name of a ServiceConnectionPolicy. Format: projects/{project}/locations/{location}/serviceConnectionPolicies/{service_connection_policy} See: https://google.aip.dev/122#fields-representing-resource-names */
  name: string;
  /** Optional. Field mask is used to specify the fields to be overwritten in the ServiceConnectionPolicy resource by the update. The fields specified in the update_mask are relative to the resource, not the full request. A field will be overwritten if it is in the mask. If the user does not provide a mask then all fields will be overwritten. */
  updateMask?: string;
  /** Optional. An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes since the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000). */
  requestId?: string;
  /** Request body */
  body?: ServiceConnectionPolicy;
}

export const PatchProjectsLocationsServiceConnectionPoliciesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    updateMask: Schema.optional(Schema.String).pipe(T.HttpQuery("updateMask")),
    requestId: Schema.optional(Schema.String).pipe(T.HttpQuery("requestId")),
    body: Schema.optional(ServiceConnectionPolicy).pipe(T.HttpBody()),
  }).pipe(
    T.Http({ method: "PATCH", path: "v1/{+name}", hasBody: true }),
    svc,
  ) as unknown as Schema.Schema<PatchProjectsLocationsServiceConnectionPoliciesRequest>;

export type PatchProjectsLocationsServiceConnectionPoliciesResponse =
  GoogleLongrunningOperation;
export const PatchProjectsLocationsServiceConnectionPoliciesResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleLongrunningOperation;

export type PatchProjectsLocationsServiceConnectionPoliciesError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Updates the parameters of a single ServiceConnectionPolicy. */
export const patchProjectsLocationsServiceConnectionPolicies: API.OperationMethod<
  PatchProjectsLocationsServiceConnectionPoliciesRequest,
  PatchProjectsLocationsServiceConnectionPoliciesResponse,
  PatchProjectsLocationsServiceConnectionPoliciesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: PatchProjectsLocationsServiceConnectionPoliciesRequest,
  output: PatchProjectsLocationsServiceConnectionPoliciesResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface DeleteProjectsLocationsServiceConnectionPoliciesRequest {
  /** Optional. An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes after the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000). */
  requestId?: string;
  /** Optional. The etag is computed by the server, and may be sent on update and delete requests to ensure the client has an up-to-date value before proceeding. */
  etag?: string;
  /** Required. The name of the ServiceConnectionPolicy to delete. */
  name: string;
}

export const DeleteProjectsLocationsServiceConnectionPoliciesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    requestId: Schema.optional(Schema.String).pipe(T.HttpQuery("requestId")),
    etag: Schema.optional(Schema.String).pipe(T.HttpQuery("etag")),
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "DELETE", path: "v1/{+name}" }),
    svc,
  ) as unknown as Schema.Schema<DeleteProjectsLocationsServiceConnectionPoliciesRequest>;

export type DeleteProjectsLocationsServiceConnectionPoliciesResponse =
  GoogleLongrunningOperation;
export const DeleteProjectsLocationsServiceConnectionPoliciesResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleLongrunningOperation;

export type DeleteProjectsLocationsServiceConnectionPoliciesError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Deletes a single ServiceConnectionPolicy. */
export const deleteProjectsLocationsServiceConnectionPolicies: API.OperationMethod<
  DeleteProjectsLocationsServiceConnectionPoliciesRequest,
  DeleteProjectsLocationsServiceConnectionPoliciesResponse,
  DeleteProjectsLocationsServiceConnectionPoliciesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: DeleteProjectsLocationsServiceConnectionPoliciesRequest,
  output: DeleteProjectsLocationsServiceConnectionPoliciesResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface ListProjectsLocationsServiceConnectionPoliciesRequest {
  /** Required. The parent resource's name. ex. projects/123/locations/us-east1 */
  parent: string;
  /** A filter expression that filters the results listed in the response. */
  filter?: string;
  /** The page token. */
  pageToken?: string;
  /** Sort the results by a certain order. */
  orderBy?: string;
  /** The maximum number of results per page that should be returned. */
  pageSize?: number;
}

export const ListProjectsLocationsServiceConnectionPoliciesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    parent: Schema.String.pipe(T.HttpPath("parent")),
    filter: Schema.optional(Schema.String).pipe(T.HttpQuery("filter")),
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
    orderBy: Schema.optional(Schema.String).pipe(T.HttpQuery("orderBy")),
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
  }).pipe(
    T.Http({ method: "GET", path: "v1/{+parent}/serviceConnectionPolicies" }),
    svc,
  ) as unknown as Schema.Schema<ListProjectsLocationsServiceConnectionPoliciesRequest>;

export type ListProjectsLocationsServiceConnectionPoliciesResponse =
  ListServiceConnectionPoliciesResponse;
export const ListProjectsLocationsServiceConnectionPoliciesResponse =
  /*@__PURE__*/ /*#__PURE__*/ ListServiceConnectionPoliciesResponse;

export type ListProjectsLocationsServiceConnectionPoliciesError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Lists ServiceConnectionPolicies in a given project and location. */
export const listProjectsLocationsServiceConnectionPolicies: API.PaginatedOperationMethod<
  ListProjectsLocationsServiceConnectionPoliciesRequest,
  ListProjectsLocationsServiceConnectionPoliciesResponse,
  ListProjectsLocationsServiceConnectionPoliciesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
  input: ListProjectsLocationsServiceConnectionPoliciesRequest,
  output: ListProjectsLocationsServiceConnectionPoliciesResponse,
  errors: [NotFound, Forbidden],
  pagination: {
    inputToken: "pageToken",
    outputToken: "nextPageToken",
  },
}));

export interface CreateProjectsLocationsServiceConnectionPoliciesRequest {
  /** Optional. If this field is not set, USER_PROVIDED is the inferred value to use. */
  subnetworkMode?:
    | "SUBNETWORK_MODE_UNSPECIFIED"
    | "USER_PROVIDED"
    | "AUTO_CREATED"
    | (string & {});
  /** Optional. The desired prefix length for the subnet's IP address range. E.g., 24 for a /24. The actual range is allocated from available space. If not specified, 24 is used. Only eligible for IPV4_ONLY and IPV4_IPV6 subnetwork. */
  "autoSubnetworkConfig.prefixLength"?: number;
  /** Optional. The requested IP stack for the subnetwork. If not specified, IPv4 is used. */
  "autoSubnetworkConfig.ipStack"?:
    | "SUBNET_IP_STACK_UNSPECIFIED"
    | "IPV4_ONLY"
    | "IPV6_ONLY"
    | "IPV4_IPV6"
    | (string & {});
  /** Required. The parent resource's name of the ServiceConnectionPolicy. ex. projects/123/locations/us-east1 */
  parent: string;
  /** Optional. Resource ID (i.e. 'foo' in '[...]/projects/p/locations/l/serviceConnectionPolicies/foo') See https://google.aip.dev/122#resource-id-segments Unique per location. */
  serviceConnectionPolicyId?: string;
  /** Optional. An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes since the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000). */
  requestId?: string;
  /** Optional. The space where we search for a free range to create a subnetwork. It can be narrow down or pick a different space. This is in standard CIDR format. If not specified, “10.0.0.0/8” is used. Only eligible for IPV4_ONLY and IPV4_IPV6 subnetwork. */
  "autoSubnetworkConfig.allocRangeSpace"?: string[];
  /** Request body */
  body?: ServiceConnectionPolicy;
}

export const CreateProjectsLocationsServiceConnectionPoliciesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subnetworkMode: Schema.optional(Schema.String).pipe(
      T.HttpQuery("subnetworkMode"),
    ),
    "autoSubnetworkConfig.prefixLength": Schema.optional(Schema.Number).pipe(
      T.HttpQuery("autoSubnetworkConfig.prefixLength"),
    ),
    "autoSubnetworkConfig.ipStack": Schema.optional(Schema.String).pipe(
      T.HttpQuery("autoSubnetworkConfig.ipStack"),
    ),
    parent: Schema.String.pipe(T.HttpPath("parent")),
    serviceConnectionPolicyId: Schema.optional(Schema.String).pipe(
      T.HttpQuery("serviceConnectionPolicyId"),
    ),
    requestId: Schema.optional(Schema.String).pipe(T.HttpQuery("requestId")),
    "autoSubnetworkConfig.allocRangeSpace": Schema.optional(
      Schema.Array(Schema.String),
    ).pipe(T.HttpQuery("autoSubnetworkConfig.allocRangeSpace")),
    body: Schema.optional(ServiceConnectionPolicy).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v1/{+parent}/serviceConnectionPolicies",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<CreateProjectsLocationsServiceConnectionPoliciesRequest>;

export type CreateProjectsLocationsServiceConnectionPoliciesResponse =
  GoogleLongrunningOperation;
export const CreateProjectsLocationsServiceConnectionPoliciesResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleLongrunningOperation;

export type CreateProjectsLocationsServiceConnectionPoliciesError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Creates a new ServiceConnectionPolicy in a given project and location. */
export const createProjectsLocationsServiceConnectionPolicies: API.OperationMethod<
  CreateProjectsLocationsServiceConnectionPoliciesRequest,
  CreateProjectsLocationsServiceConnectionPoliciesResponse,
  CreateProjectsLocationsServiceConnectionPoliciesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: CreateProjectsLocationsServiceConnectionPoliciesRequest,
  output: CreateProjectsLocationsServiceConnectionPoliciesResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface CreateProjectsLocationsInternalRangesRequest {
  /** Optional. An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes since the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000). */
  requestId?: string;
  /** Required. The parent resource's name of the internal range. */
  parent: string;
  /** Optional. Resource ID (i.e. 'foo' in '[...]/projects/p/locations/l/internalRanges/foo') See https://google.aip.dev/122#resource-id-segments Unique per location. */
  internalRangeId?: string;
  /** Request body */
  body?: InternalRange;
}

export const CreateProjectsLocationsInternalRangesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    requestId: Schema.optional(Schema.String).pipe(T.HttpQuery("requestId")),
    parent: Schema.String.pipe(T.HttpPath("parent")),
    internalRangeId: Schema.optional(Schema.String).pipe(
      T.HttpQuery("internalRangeId"),
    ),
    body: Schema.optional(InternalRange).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v1/{+parent}/internalRanges",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<CreateProjectsLocationsInternalRangesRequest>;

export type CreateProjectsLocationsInternalRangesResponse =
  GoogleLongrunningOperation;
export const CreateProjectsLocationsInternalRangesResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleLongrunningOperation;

export type CreateProjectsLocationsInternalRangesError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Creates a new internal range in a given project and location. */
export const createProjectsLocationsInternalRanges: API.OperationMethod<
  CreateProjectsLocationsInternalRangesRequest,
  CreateProjectsLocationsInternalRangesResponse,
  CreateProjectsLocationsInternalRangesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: CreateProjectsLocationsInternalRangesRequest,
  output: CreateProjectsLocationsInternalRangesResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface TestIamPermissionsProjectsLocationsInternalRangesRequest {
  /** REQUIRED: The resource for which the policy detail is being requested. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field. */
  resource: string;
  /** Request body */
  body?: TestIamPermissionsRequest;
}

export const TestIamPermissionsProjectsLocationsInternalRangesRequest =
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
  ) as unknown as Schema.Schema<TestIamPermissionsProjectsLocationsInternalRangesRequest>;

export type TestIamPermissionsProjectsLocationsInternalRangesResponse =
  TestIamPermissionsResponse;
export const TestIamPermissionsProjectsLocationsInternalRangesResponse =
  /*@__PURE__*/ /*#__PURE__*/ TestIamPermissionsResponse;

export type TestIamPermissionsProjectsLocationsInternalRangesError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Returns permissions that a caller has on the specified resource. If the resource does not exist, this will return an empty set of permissions, not a `NOT_FOUND` error. Note: This operation is designed to be used for building permission-aware UIs and command-line tools, not for authorization checking. This operation may "fail open" without warning. */
export const testIamPermissionsProjectsLocationsInternalRanges: API.OperationMethod<
  TestIamPermissionsProjectsLocationsInternalRangesRequest,
  TestIamPermissionsProjectsLocationsInternalRangesResponse,
  TestIamPermissionsProjectsLocationsInternalRangesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: TestIamPermissionsProjectsLocationsInternalRangesRequest,
  output: TestIamPermissionsProjectsLocationsInternalRangesResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface GetIamPolicyProjectsLocationsInternalRangesRequest {
  /** REQUIRED: The resource for which the policy is being requested. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field. */
  resource: string;
  /** Optional. The maximum policy version that will be used to format the policy. Valid values are 0, 1, and 3. Requests specifying an invalid value will be rejected. Requests for policies with any conditional role bindings must specify version 3. Policies with no conditional role bindings may specify any valid value or leave the field unset. The policy in the response might use the policy version that you specified, or it might use a lower policy version. For example, if you specify version 3, but the policy has no conditional role bindings, the response uses version 1. To learn which resources support conditions in their IAM policies, see the [IAM documentation](https://cloud.google.com/iam/help/conditions/resource-policies). */
  "options.requestedPolicyVersion"?: number;
}

export const GetIamPolicyProjectsLocationsInternalRangesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    resource: Schema.String.pipe(T.HttpPath("resource")),
    "options.requestedPolicyVersion": Schema.optional(Schema.Number).pipe(
      T.HttpQuery("options.requestedPolicyVersion"),
    ),
  }).pipe(
    T.Http({ method: "GET", path: "v1/{+resource}:getIamPolicy" }),
    svc,
  ) as unknown as Schema.Schema<GetIamPolicyProjectsLocationsInternalRangesRequest>;

export type GetIamPolicyProjectsLocationsInternalRangesResponse = Policy;
export const GetIamPolicyProjectsLocationsInternalRangesResponse =
  /*@__PURE__*/ /*#__PURE__*/ Policy;

export type GetIamPolicyProjectsLocationsInternalRangesError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Gets the access control policy for a resource. Returns an empty policy if the resource exists and does not have a policy set. */
export const getIamPolicyProjectsLocationsInternalRanges: API.OperationMethod<
  GetIamPolicyProjectsLocationsInternalRangesRequest,
  GetIamPolicyProjectsLocationsInternalRangesResponse,
  GetIamPolicyProjectsLocationsInternalRangesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetIamPolicyProjectsLocationsInternalRangesRequest,
  output: GetIamPolicyProjectsLocationsInternalRangesResponse,
  errors: [NotFound, Forbidden],
}));

export interface DeleteProjectsLocationsInternalRangesRequest {
  /** Required. The name of the internal range to delete. */
  name: string;
  /** Optional. An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes after the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000). */
  requestId?: string;
}

export const DeleteProjectsLocationsInternalRangesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    requestId: Schema.optional(Schema.String).pipe(T.HttpQuery("requestId")),
  }).pipe(
    T.Http({ method: "DELETE", path: "v1/{+name}" }),
    svc,
  ) as unknown as Schema.Schema<DeleteProjectsLocationsInternalRangesRequest>;

export type DeleteProjectsLocationsInternalRangesResponse =
  GoogleLongrunningOperation;
export const DeleteProjectsLocationsInternalRangesResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleLongrunningOperation;

export type DeleteProjectsLocationsInternalRangesError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Deletes a single internal range. */
export const deleteProjectsLocationsInternalRanges: API.OperationMethod<
  DeleteProjectsLocationsInternalRangesRequest,
  DeleteProjectsLocationsInternalRangesResponse,
  DeleteProjectsLocationsInternalRangesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: DeleteProjectsLocationsInternalRangesRequest,
  output: DeleteProjectsLocationsInternalRangesResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface ListProjectsLocationsInternalRangesRequest {
  /** The page token. */
  pageToken?: string;
  /** Sort the results by a certain order. */
  orderBy?: string;
  /** A filter expression that filters the results listed in the response. */
  filter?: string;
  /** The maximum number of results per page that should be returned. */
  pageSize?: number;
  /** Required. The parent resource's name. */
  parent: string;
}

export const ListProjectsLocationsInternalRangesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
    orderBy: Schema.optional(Schema.String).pipe(T.HttpQuery("orderBy")),
    filter: Schema.optional(Schema.String).pipe(T.HttpQuery("filter")),
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
    parent: Schema.String.pipe(T.HttpPath("parent")),
  }).pipe(
    T.Http({ method: "GET", path: "v1/{+parent}/internalRanges" }),
    svc,
  ) as unknown as Schema.Schema<ListProjectsLocationsInternalRangesRequest>;

export type ListProjectsLocationsInternalRangesResponse =
  ListInternalRangesResponse;
export const ListProjectsLocationsInternalRangesResponse =
  /*@__PURE__*/ /*#__PURE__*/ ListInternalRangesResponse;

export type ListProjectsLocationsInternalRangesError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Lists internal ranges in a given project and location. */
export const listProjectsLocationsInternalRanges: API.PaginatedOperationMethod<
  ListProjectsLocationsInternalRangesRequest,
  ListProjectsLocationsInternalRangesResponse,
  ListProjectsLocationsInternalRangesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
  input: ListProjectsLocationsInternalRangesRequest,
  output: ListProjectsLocationsInternalRangesResponse,
  errors: [NotFound, Forbidden],
  pagination: {
    inputToken: "pageToken",
    outputToken: "nextPageToken",
  },
}));

export interface GetProjectsLocationsInternalRangesRequest {
  /** Required. Name of the InternalRange to get. */
  name: string;
}

export const GetProjectsLocationsInternalRangesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "GET", path: "v1/{+name}" }),
    svc,
  ) as unknown as Schema.Schema<GetProjectsLocationsInternalRangesRequest>;

export type GetProjectsLocationsInternalRangesResponse = InternalRange;
export const GetProjectsLocationsInternalRangesResponse =
  /*@__PURE__*/ /*#__PURE__*/ InternalRange;

export type GetProjectsLocationsInternalRangesError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Gets details of a single internal range. */
export const getProjectsLocationsInternalRanges: API.OperationMethod<
  GetProjectsLocationsInternalRangesRequest,
  GetProjectsLocationsInternalRangesResponse,
  GetProjectsLocationsInternalRangesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetProjectsLocationsInternalRangesRequest,
  output: GetProjectsLocationsInternalRangesResponse,
  errors: [NotFound, Forbidden],
}));

export interface PatchProjectsLocationsInternalRangesRequest {
  /** Optional. Field mask is used to specify the fields to be overwritten in the InternalRange resource by the update. The fields specified in the update_mask are relative to the resource, not the full request. A field will be overwritten if it is in the mask. If the user does not provide a mask then all fields will be overwritten. */
  updateMask?: string;
  /** Optional. An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes since the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000). */
  requestId?: string;
  /** Identifier. The name of an internal range. Format: projects/{project}/locations/{location}/internalRanges/{internal_range} See: https://google.aip.dev/122#fields-representing-resource-names */
  name: string;
  /** Request body */
  body?: InternalRange;
}

export const PatchProjectsLocationsInternalRangesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    updateMask: Schema.optional(Schema.String).pipe(T.HttpQuery("updateMask")),
    requestId: Schema.optional(Schema.String).pipe(T.HttpQuery("requestId")),
    name: Schema.String.pipe(T.HttpPath("name")),
    body: Schema.optional(InternalRange).pipe(T.HttpBody()),
  }).pipe(
    T.Http({ method: "PATCH", path: "v1/{+name}", hasBody: true }),
    svc,
  ) as unknown as Schema.Schema<PatchProjectsLocationsInternalRangesRequest>;

export type PatchProjectsLocationsInternalRangesResponse =
  GoogleLongrunningOperation;
export const PatchProjectsLocationsInternalRangesResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleLongrunningOperation;

export type PatchProjectsLocationsInternalRangesError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Updates the parameters of a single internal range. */
export const patchProjectsLocationsInternalRanges: API.OperationMethod<
  PatchProjectsLocationsInternalRangesRequest,
  PatchProjectsLocationsInternalRangesResponse,
  PatchProjectsLocationsInternalRangesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: PatchProjectsLocationsInternalRangesRequest,
  output: PatchProjectsLocationsInternalRangesResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface SetIamPolicyProjectsLocationsInternalRangesRequest {
  /** REQUIRED: The resource for which the policy is being specified. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field. */
  resource: string;
  /** Request body */
  body?: SetIamPolicyRequest;
}

export const SetIamPolicyProjectsLocationsInternalRangesRequest =
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
  ) as unknown as Schema.Schema<SetIamPolicyProjectsLocationsInternalRangesRequest>;

export type SetIamPolicyProjectsLocationsInternalRangesResponse = Policy;
export const SetIamPolicyProjectsLocationsInternalRangesResponse =
  /*@__PURE__*/ /*#__PURE__*/ Policy;

export type SetIamPolicyProjectsLocationsInternalRangesError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Sets the access control policy on the specified resource. Replaces any existing policy. Can return `NOT_FOUND`, `INVALID_ARGUMENT`, and `PERMISSION_DENIED` errors. */
export const setIamPolicyProjectsLocationsInternalRanges: API.OperationMethod<
  SetIamPolicyProjectsLocationsInternalRangesRequest,
  SetIamPolicyProjectsLocationsInternalRangesResponse,
  SetIamPolicyProjectsLocationsInternalRangesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: SetIamPolicyProjectsLocationsInternalRangesRequest,
  output: SetIamPolicyProjectsLocationsInternalRangesResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface ListProjectsLocationsMulticloudDataTransferConfigsRequest {
  /** Optional. If `true`, allows partial responses for multi-regional aggregated list requests. */
  returnPartialSuccess?: boolean;
  /** Required. The name of the parent resource. */
  parent: string;
  /** Optional. The maximum number of results listed per page. */
  pageSize?: number;
  /** Optional. The page token. */
  pageToken?: string;
  /** Optional. The sort order of the results. */
  orderBy?: string;
  /** Optional. An expression that filters the results listed in the response. */
  filter?: string;
}

export const ListProjectsLocationsMulticloudDataTransferConfigsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    returnPartialSuccess: Schema.optional(Schema.Boolean).pipe(
      T.HttpQuery("returnPartialSuccess"),
    ),
    parent: Schema.String.pipe(T.HttpPath("parent")),
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
    orderBy: Schema.optional(Schema.String).pipe(T.HttpQuery("orderBy")),
    filter: Schema.optional(Schema.String).pipe(T.HttpQuery("filter")),
  }).pipe(
    T.Http({
      method: "GET",
      path: "v1/{+parent}/multicloudDataTransferConfigs",
    }),
    svc,
  ) as unknown as Schema.Schema<ListProjectsLocationsMulticloudDataTransferConfigsRequest>;

export type ListProjectsLocationsMulticloudDataTransferConfigsResponse =
  ListMulticloudDataTransferConfigsResponse;
export const ListProjectsLocationsMulticloudDataTransferConfigsResponse =
  /*@__PURE__*/ /*#__PURE__*/ ListMulticloudDataTransferConfigsResponse;

export type ListProjectsLocationsMulticloudDataTransferConfigsError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Lists the `MulticloudDataTransferConfig` resources in a specified project and location. */
export const listProjectsLocationsMulticloudDataTransferConfigs: API.PaginatedOperationMethod<
  ListProjectsLocationsMulticloudDataTransferConfigsRequest,
  ListProjectsLocationsMulticloudDataTransferConfigsResponse,
  ListProjectsLocationsMulticloudDataTransferConfigsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
  input: ListProjectsLocationsMulticloudDataTransferConfigsRequest,
  output: ListProjectsLocationsMulticloudDataTransferConfigsResponse,
  errors: [NotFound, Forbidden],
  pagination: {
    inputToken: "pageToken",
    outputToken: "nextPageToken",
  },
}));

export interface DeleteProjectsLocationsMulticloudDataTransferConfigsRequest {
  /** Required. The name of the `MulticloudDataTransferConfig` resource to delete. */
  name: string;
  /** Optional. A request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server can ignore the request if it has already been completed. The server waits for at least 60 minutes since the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, can ignore the second request. This prevents clients from accidentally creating duplicate `MulticloudDataTransferConfig` resources. The request ID must be a valid UUID with the exception that zero UUID (00000000-0000-0000-0000-000000000000) isn't supported. */
  requestId?: string;
  /** Optional. The etag is computed by the server, and might be sent with update and delete requests so that the client has an up-to-date value before proceeding. */
  etag?: string;
}

export const DeleteProjectsLocationsMulticloudDataTransferConfigsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    requestId: Schema.optional(Schema.String).pipe(T.HttpQuery("requestId")),
    etag: Schema.optional(Schema.String).pipe(T.HttpQuery("etag")),
  }).pipe(
    T.Http({ method: "DELETE", path: "v1/{+name}" }),
    svc,
  ) as unknown as Schema.Schema<DeleteProjectsLocationsMulticloudDataTransferConfigsRequest>;

export type DeleteProjectsLocationsMulticloudDataTransferConfigsResponse =
  GoogleLongrunningOperation;
export const DeleteProjectsLocationsMulticloudDataTransferConfigsResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleLongrunningOperation;

export type DeleteProjectsLocationsMulticloudDataTransferConfigsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Deletes a `MulticloudDataTransferConfig` resource. */
export const deleteProjectsLocationsMulticloudDataTransferConfigs: API.OperationMethod<
  DeleteProjectsLocationsMulticloudDataTransferConfigsRequest,
  DeleteProjectsLocationsMulticloudDataTransferConfigsResponse,
  DeleteProjectsLocationsMulticloudDataTransferConfigsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: DeleteProjectsLocationsMulticloudDataTransferConfigsRequest,
  output: DeleteProjectsLocationsMulticloudDataTransferConfigsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface PatchProjectsLocationsMulticloudDataTransferConfigsRequest {
  /** Optional. `FieldMask` is used to specify the fields in the `MulticloudDataTransferConfig` resource to be overwritten by the update. The fields specified in `update_mask` are relative to the resource, not the full request. A field is overwritten if it is in the mask. If you don't specify a mask, all fields are overwritten. */
  updateMask?: string;
  /** Optional. A request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server can ignore the request if it has already been completed. The server waits for at least 60 minutes since the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, can ignore the second request. This prevents clients from accidentally creating duplicate `MulticloudDataTransferConfig` resources. The request ID must be a valid UUID with the exception that zero UUID (00000000-0000-0000-0000-000000000000) isn't supported. */
  requestId?: string;
  /** Identifier. The name of the `MulticloudDataTransferConfig` resource. Format: `projects/{project}/locations/{location}/multicloudDataTransferConfigs/{multicloud_data_transfer_config}`. */
  name: string;
  /** Request body */
  body?: MulticloudDataTransferConfig;
}

export const PatchProjectsLocationsMulticloudDataTransferConfigsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    updateMask: Schema.optional(Schema.String).pipe(T.HttpQuery("updateMask")),
    requestId: Schema.optional(Schema.String).pipe(T.HttpQuery("requestId")),
    name: Schema.String.pipe(T.HttpPath("name")),
    body: Schema.optional(MulticloudDataTransferConfig).pipe(T.HttpBody()),
  }).pipe(
    T.Http({ method: "PATCH", path: "v1/{+name}", hasBody: true }),
    svc,
  ) as unknown as Schema.Schema<PatchProjectsLocationsMulticloudDataTransferConfigsRequest>;

export type PatchProjectsLocationsMulticloudDataTransferConfigsResponse =
  GoogleLongrunningOperation;
export const PatchProjectsLocationsMulticloudDataTransferConfigsResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleLongrunningOperation;

export type PatchProjectsLocationsMulticloudDataTransferConfigsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Updates a `MulticloudDataTransferConfig` resource in a specified project and location. */
export const patchProjectsLocationsMulticloudDataTransferConfigs: API.OperationMethod<
  PatchProjectsLocationsMulticloudDataTransferConfigsRequest,
  PatchProjectsLocationsMulticloudDataTransferConfigsResponse,
  PatchProjectsLocationsMulticloudDataTransferConfigsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: PatchProjectsLocationsMulticloudDataTransferConfigsRequest,
  output: PatchProjectsLocationsMulticloudDataTransferConfigsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface GetProjectsLocationsMulticloudDataTransferConfigsRequest {
  /** Required. The name of the `MulticloudDataTransferConfig` resource to get. */
  name: string;
}

export const GetProjectsLocationsMulticloudDataTransferConfigsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "GET", path: "v1/{+name}" }),
    svc,
  ) as unknown as Schema.Schema<GetProjectsLocationsMulticloudDataTransferConfigsRequest>;

export type GetProjectsLocationsMulticloudDataTransferConfigsResponse =
  MulticloudDataTransferConfig;
export const GetProjectsLocationsMulticloudDataTransferConfigsResponse =
  /*@__PURE__*/ /*#__PURE__*/ MulticloudDataTransferConfig;

export type GetProjectsLocationsMulticloudDataTransferConfigsError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Gets the details of a `MulticloudDataTransferConfig` resource. */
export const getProjectsLocationsMulticloudDataTransferConfigs: API.OperationMethod<
  GetProjectsLocationsMulticloudDataTransferConfigsRequest,
  GetProjectsLocationsMulticloudDataTransferConfigsResponse,
  GetProjectsLocationsMulticloudDataTransferConfigsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetProjectsLocationsMulticloudDataTransferConfigsRequest,
  output: GetProjectsLocationsMulticloudDataTransferConfigsResponse,
  errors: [NotFound, Forbidden],
}));

export interface CreateProjectsLocationsMulticloudDataTransferConfigsRequest {
  /** Required. The name of the parent resource. */
  parent: string;
  /** Optional. A request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server can ignore the request if it has already been completed. The server waits for at least 60 minutes since the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, can ignore the second request. This prevents clients from accidentally creating duplicate `MulticloudDataTransferConfig` resources. The request ID must be a valid UUID with the exception that zero UUID (00000000-0000-0000-0000-000000000000) isn't supported. */
  requestId?: string;
  /** Required. The ID to use for the `MulticloudDataTransferConfig` resource, which becomes the final component of the `MulticloudDataTransferConfig` resource name. */
  multicloudDataTransferConfigId?: string;
  /** Request body */
  body?: MulticloudDataTransferConfig;
}

export const CreateProjectsLocationsMulticloudDataTransferConfigsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    parent: Schema.String.pipe(T.HttpPath("parent")),
    requestId: Schema.optional(Schema.String).pipe(T.HttpQuery("requestId")),
    multicloudDataTransferConfigId: Schema.optional(Schema.String).pipe(
      T.HttpQuery("multicloudDataTransferConfigId"),
    ),
    body: Schema.optional(MulticloudDataTransferConfig).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v1/{+parent}/multicloudDataTransferConfigs",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<CreateProjectsLocationsMulticloudDataTransferConfigsRequest>;

export type CreateProjectsLocationsMulticloudDataTransferConfigsResponse =
  GoogleLongrunningOperation;
export const CreateProjectsLocationsMulticloudDataTransferConfigsResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleLongrunningOperation;

export type CreateProjectsLocationsMulticloudDataTransferConfigsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Creates a `MulticloudDataTransferConfig` resource in a specified project and location. */
export const createProjectsLocationsMulticloudDataTransferConfigs: API.OperationMethod<
  CreateProjectsLocationsMulticloudDataTransferConfigsRequest,
  CreateProjectsLocationsMulticloudDataTransferConfigsResponse,
  CreateProjectsLocationsMulticloudDataTransferConfigsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: CreateProjectsLocationsMulticloudDataTransferConfigsRequest,
  output: CreateProjectsLocationsMulticloudDataTransferConfigsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface GetProjectsLocationsMulticloudDataTransferConfigsDestinationsRequest {
  /** Required. The name of the `Destination` resource to get. */
  name: string;
}

export const GetProjectsLocationsMulticloudDataTransferConfigsDestinationsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "GET", path: "v1/{+name}" }),
    svc,
  ) as unknown as Schema.Schema<GetProjectsLocationsMulticloudDataTransferConfigsDestinationsRequest>;

export type GetProjectsLocationsMulticloudDataTransferConfigsDestinationsResponse =
  Destination;
export const GetProjectsLocationsMulticloudDataTransferConfigsDestinationsResponse =
  /*@__PURE__*/ /*#__PURE__*/ Destination;

export type GetProjectsLocationsMulticloudDataTransferConfigsDestinationsError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Gets the details of a `Destination` resource. */
export const getProjectsLocationsMulticloudDataTransferConfigsDestinations: API.OperationMethod<
  GetProjectsLocationsMulticloudDataTransferConfigsDestinationsRequest,
  GetProjectsLocationsMulticloudDataTransferConfigsDestinationsResponse,
  GetProjectsLocationsMulticloudDataTransferConfigsDestinationsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetProjectsLocationsMulticloudDataTransferConfigsDestinationsRequest,
  output: GetProjectsLocationsMulticloudDataTransferConfigsDestinationsResponse,
  errors: [NotFound, Forbidden],
}));

export interface PatchProjectsLocationsMulticloudDataTransferConfigsDestinationsRequest {
  /** Optional. `FieldMask is used to specify the fields to be overwritten in the `Destination` resource by the update. The fields specified in `update_mask` are relative to the resource, not the full request. A field is overwritten if it is in the mask. If you don't specify a mask, all fields are overwritten. */
  updateMask?: string;
  /** Optional. A request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server can ignore the request if it has already been completed. The server waits for at least 60 minutes since the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, can ignore the second request. The request ID must be a valid UUID with the exception that zero UUID (00000000-0000-0000-0000-000000000000) isn't supported. */
  requestId?: string;
  /** Identifier. The name of the `Destination` resource. Format: `projects/{project}/locations/{location}/multicloudDataTransferConfigs/{multicloud_data_transfer_config}/destinations/{destination}`. */
  name: string;
  /** Request body */
  body?: Destination;
}

export const PatchProjectsLocationsMulticloudDataTransferConfigsDestinationsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    updateMask: Schema.optional(Schema.String).pipe(T.HttpQuery("updateMask")),
    requestId: Schema.optional(Schema.String).pipe(T.HttpQuery("requestId")),
    name: Schema.String.pipe(T.HttpPath("name")),
    body: Schema.optional(Destination).pipe(T.HttpBody()),
  }).pipe(
    T.Http({ method: "PATCH", path: "v1/{+name}", hasBody: true }),
    svc,
  ) as unknown as Schema.Schema<PatchProjectsLocationsMulticloudDataTransferConfigsDestinationsRequest>;

export type PatchProjectsLocationsMulticloudDataTransferConfigsDestinationsResponse =
  GoogleLongrunningOperation;
export const PatchProjectsLocationsMulticloudDataTransferConfigsDestinationsResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleLongrunningOperation;

export type PatchProjectsLocationsMulticloudDataTransferConfigsDestinationsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Updates a `Destination` resource in a specified project and location. */
export const patchProjectsLocationsMulticloudDataTransferConfigsDestinations: API.OperationMethod<
  PatchProjectsLocationsMulticloudDataTransferConfigsDestinationsRequest,
  PatchProjectsLocationsMulticloudDataTransferConfigsDestinationsResponse,
  PatchProjectsLocationsMulticloudDataTransferConfigsDestinationsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: PatchProjectsLocationsMulticloudDataTransferConfigsDestinationsRequest,
  output:
    PatchProjectsLocationsMulticloudDataTransferConfigsDestinationsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface DeleteProjectsLocationsMulticloudDataTransferConfigsDestinationsRequest {
  /** Required. The name of the `Destination` resource to delete. */
  name: string;
  /** Optional. A request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server can ignore the request if it has already been completed. The server waits for at least 60 minutes since the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, can ignore the second request. The request ID must be a valid UUID with the exception that zero UUID (00000000-0000-0000-0000-000000000000) isn't supported. */
  requestId?: string;
  /** Optional. The etag is computed by the server, and might be sent with update and delete requests so that the client has an up-to-date value before proceeding. */
  etag?: string;
}

export const DeleteProjectsLocationsMulticloudDataTransferConfigsDestinationsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    requestId: Schema.optional(Schema.String).pipe(T.HttpQuery("requestId")),
    etag: Schema.optional(Schema.String).pipe(T.HttpQuery("etag")),
  }).pipe(
    T.Http({ method: "DELETE", path: "v1/{+name}" }),
    svc,
  ) as unknown as Schema.Schema<DeleteProjectsLocationsMulticloudDataTransferConfigsDestinationsRequest>;

export type DeleteProjectsLocationsMulticloudDataTransferConfigsDestinationsResponse =
  GoogleLongrunningOperation;
export const DeleteProjectsLocationsMulticloudDataTransferConfigsDestinationsResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleLongrunningOperation;

export type DeleteProjectsLocationsMulticloudDataTransferConfigsDestinationsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Deletes a `Destination` resource. */
export const deleteProjectsLocationsMulticloudDataTransferConfigsDestinations: API.OperationMethod<
  DeleteProjectsLocationsMulticloudDataTransferConfigsDestinationsRequest,
  DeleteProjectsLocationsMulticloudDataTransferConfigsDestinationsResponse,
  DeleteProjectsLocationsMulticloudDataTransferConfigsDestinationsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input:
    DeleteProjectsLocationsMulticloudDataTransferConfigsDestinationsRequest,
  output:
    DeleteProjectsLocationsMulticloudDataTransferConfigsDestinationsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface ListProjectsLocationsMulticloudDataTransferConfigsDestinationsRequest {
  /** Optional. The page token. */
  pageToken?: string;
  /** Optional. The sort order of the results. */
  orderBy?: string;
  /** Optional. An expression that filters the results listed in the response. */
  filter?: string;
  /** Optional. The maximum number of results listed per page. */
  pageSize?: number;
  /** Required. The name of the parent resource. */
  parent: string;
  /** Optional. If `true`, allow partial responses for multi-regional aggregated list requests. */
  returnPartialSuccess?: boolean;
}

export const ListProjectsLocationsMulticloudDataTransferConfigsDestinationsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
    orderBy: Schema.optional(Schema.String).pipe(T.HttpQuery("orderBy")),
    filter: Schema.optional(Schema.String).pipe(T.HttpQuery("filter")),
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
    parent: Schema.String.pipe(T.HttpPath("parent")),
    returnPartialSuccess: Schema.optional(Schema.Boolean).pipe(
      T.HttpQuery("returnPartialSuccess"),
    ),
  }).pipe(
    T.Http({ method: "GET", path: "v1/{+parent}/destinations" }),
    svc,
  ) as unknown as Schema.Schema<ListProjectsLocationsMulticloudDataTransferConfigsDestinationsRequest>;

export type ListProjectsLocationsMulticloudDataTransferConfigsDestinationsResponse =
  ListDestinationsResponse;
export const ListProjectsLocationsMulticloudDataTransferConfigsDestinationsResponse =
  /*@__PURE__*/ /*#__PURE__*/ ListDestinationsResponse;

export type ListProjectsLocationsMulticloudDataTransferConfigsDestinationsError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Lists the `Destination` resources in a specified project and location. */
export const listProjectsLocationsMulticloudDataTransferConfigsDestinations: API.PaginatedOperationMethod<
  ListProjectsLocationsMulticloudDataTransferConfigsDestinationsRequest,
  ListProjectsLocationsMulticloudDataTransferConfigsDestinationsResponse,
  ListProjectsLocationsMulticloudDataTransferConfigsDestinationsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
  input: ListProjectsLocationsMulticloudDataTransferConfigsDestinationsRequest,
  output:
    ListProjectsLocationsMulticloudDataTransferConfigsDestinationsResponse,
  errors: [NotFound, Forbidden],
  pagination: {
    inputToken: "pageToken",
    outputToken: "nextPageToken",
  },
}));

export interface CreateProjectsLocationsMulticloudDataTransferConfigsDestinationsRequest {
  /** Required. The ID to use for the `Destination` resource, which becomes the final component of the `Destination` resource name. */
  destinationId?: string;
  /** Required. The name of the parent resource. */
  parent: string;
  /** Optional. A request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server can ignore the request if it has already been completed. The server waits for at least 60 minutes since the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, can ignore the second request. This prevents clients from accidentally creating duplicate `Destination` resources. The request ID must be a valid UUID with the exception that zero UUID (00000000-0000-0000-0000-000000000000) isn't supported. */
  requestId?: string;
  /** Request body */
  body?: Destination;
}

export const CreateProjectsLocationsMulticloudDataTransferConfigsDestinationsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    destinationId: Schema.optional(Schema.String).pipe(
      T.HttpQuery("destinationId"),
    ),
    parent: Schema.String.pipe(T.HttpPath("parent")),
    requestId: Schema.optional(Schema.String).pipe(T.HttpQuery("requestId")),
    body: Schema.optional(Destination).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v1/{+parent}/destinations",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<CreateProjectsLocationsMulticloudDataTransferConfigsDestinationsRequest>;

export type CreateProjectsLocationsMulticloudDataTransferConfigsDestinationsResponse =
  GoogleLongrunningOperation;
export const CreateProjectsLocationsMulticloudDataTransferConfigsDestinationsResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleLongrunningOperation;

export type CreateProjectsLocationsMulticloudDataTransferConfigsDestinationsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Creates a `Destination` resource in a specified project and location. */
export const createProjectsLocationsMulticloudDataTransferConfigsDestinations: API.OperationMethod<
  CreateProjectsLocationsMulticloudDataTransferConfigsDestinationsRequest,
  CreateProjectsLocationsMulticloudDataTransferConfigsDestinationsResponse,
  CreateProjectsLocationsMulticloudDataTransferConfigsDestinationsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input:
    CreateProjectsLocationsMulticloudDataTransferConfigsDestinationsRequest,
  output:
    CreateProjectsLocationsMulticloudDataTransferConfigsDestinationsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface DeleteProjectsLocationsServiceClassesRequest {
  /** Required. The name of the ServiceClass to delete. */
  name: string;
  /** Optional. An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes after the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000). */
  requestId?: string;
  /** Optional. The etag is computed by the server, and may be sent on update and delete requests to ensure the client has an up-to-date value before proceeding. */
  etag?: string;
}

export const DeleteProjectsLocationsServiceClassesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    requestId: Schema.optional(Schema.String).pipe(T.HttpQuery("requestId")),
    etag: Schema.optional(Schema.String).pipe(T.HttpQuery("etag")),
  }).pipe(
    T.Http({ method: "DELETE", path: "v1/{+name}" }),
    svc,
  ) as unknown as Schema.Schema<DeleteProjectsLocationsServiceClassesRequest>;

export type DeleteProjectsLocationsServiceClassesResponse =
  GoogleLongrunningOperation;
export const DeleteProjectsLocationsServiceClassesResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleLongrunningOperation;

export type DeleteProjectsLocationsServiceClassesError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Deletes a single ServiceClass. */
export const deleteProjectsLocationsServiceClasses: API.OperationMethod<
  DeleteProjectsLocationsServiceClassesRequest,
  DeleteProjectsLocationsServiceClassesResponse,
  DeleteProjectsLocationsServiceClassesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: DeleteProjectsLocationsServiceClassesRequest,
  output: DeleteProjectsLocationsServiceClassesResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface ListProjectsLocationsServiceClassesRequest {
  /** The maximum number of results per page that should be returned. */
  pageSize?: number;
  /** The page token. */
  pageToken?: string;
  /** Sort the results by a certain order. */
  orderBy?: string;
  /** A filter expression that filters the results listed in the response. */
  filter?: string;
  /** Required. The parent resource's name. ex. projects/123/locations/us-east1 */
  parent: string;
}

export const ListProjectsLocationsServiceClassesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
    orderBy: Schema.optional(Schema.String).pipe(T.HttpQuery("orderBy")),
    filter: Schema.optional(Schema.String).pipe(T.HttpQuery("filter")),
    parent: Schema.String.pipe(T.HttpPath("parent")),
  }).pipe(
    T.Http({ method: "GET", path: "v1/{+parent}/serviceClasses" }),
    svc,
  ) as unknown as Schema.Schema<ListProjectsLocationsServiceClassesRequest>;

export type ListProjectsLocationsServiceClassesResponse =
  ListServiceClassesResponse;
export const ListProjectsLocationsServiceClassesResponse =
  /*@__PURE__*/ /*#__PURE__*/ ListServiceClassesResponse;

export type ListProjectsLocationsServiceClassesError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Lists ServiceClasses in a given project and location. */
export const listProjectsLocationsServiceClasses: API.PaginatedOperationMethod<
  ListProjectsLocationsServiceClassesRequest,
  ListProjectsLocationsServiceClassesResponse,
  ListProjectsLocationsServiceClassesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
  input: ListProjectsLocationsServiceClassesRequest,
  output: ListProjectsLocationsServiceClassesResponse,
  errors: [NotFound, Forbidden],
  pagination: {
    inputToken: "pageToken",
    outputToken: "nextPageToken",
  },
}));

export interface GetProjectsLocationsServiceClassesRequest {
  /** Required. Name of the ServiceClass to get. */
  name: string;
}

export const GetProjectsLocationsServiceClassesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "GET", path: "v1/{+name}" }),
    svc,
  ) as unknown as Schema.Schema<GetProjectsLocationsServiceClassesRequest>;

export type GetProjectsLocationsServiceClassesResponse = ServiceClass;
export const GetProjectsLocationsServiceClassesResponse =
  /*@__PURE__*/ /*#__PURE__*/ ServiceClass;

export type GetProjectsLocationsServiceClassesError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Gets details of a single ServiceClass. */
export const getProjectsLocationsServiceClasses: API.OperationMethod<
  GetProjectsLocationsServiceClassesRequest,
  GetProjectsLocationsServiceClassesResponse,
  GetProjectsLocationsServiceClassesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetProjectsLocationsServiceClassesRequest,
  output: GetProjectsLocationsServiceClassesResponse,
  errors: [NotFound, Forbidden],
}));

export interface PatchProjectsLocationsServiceClassesRequest {
  /** Optional. Field mask is used to specify the fields to be overwritten in the ServiceClass resource by the update. The fields specified in the update_mask are relative to the resource, not the full request. A field will be overwritten if it is in the mask. If the user does not provide a mask then all fields will be overwritten. */
  updateMask?: string;
  /** Optional. An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes since the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000). */
  requestId?: string;
  /** Immutable. The name of a ServiceClass resource. Format: projects/{project}/locations/{location}/serviceClasses/{service_class} See: https://google.aip.dev/122#fields-representing-resource-names */
  name: string;
  /** Request body */
  body?: ServiceClass;
}

export const PatchProjectsLocationsServiceClassesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    updateMask: Schema.optional(Schema.String).pipe(T.HttpQuery("updateMask")),
    requestId: Schema.optional(Schema.String).pipe(T.HttpQuery("requestId")),
    name: Schema.String.pipe(T.HttpPath("name")),
    body: Schema.optional(ServiceClass).pipe(T.HttpBody()),
  }).pipe(
    T.Http({ method: "PATCH", path: "v1/{+name}", hasBody: true }),
    svc,
  ) as unknown as Schema.Schema<PatchProjectsLocationsServiceClassesRequest>;

export type PatchProjectsLocationsServiceClassesResponse =
  GoogleLongrunningOperation;
export const PatchProjectsLocationsServiceClassesResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleLongrunningOperation;

export type PatchProjectsLocationsServiceClassesError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Updates the parameters of a single ServiceClass. */
export const patchProjectsLocationsServiceClasses: API.OperationMethod<
  PatchProjectsLocationsServiceClassesRequest,
  PatchProjectsLocationsServiceClassesResponse,
  PatchProjectsLocationsServiceClassesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: PatchProjectsLocationsServiceClassesRequest,
  output: PatchProjectsLocationsServiceClassesResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface GetProjectsLocationsTransportsRequest {
  /** Required. Name of the resource. */
  name: string;
}

export const GetProjectsLocationsTransportsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "GET", path: "v1/{+name}" }),
    svc,
  ) as unknown as Schema.Schema<GetProjectsLocationsTransportsRequest>;

export type GetProjectsLocationsTransportsResponse = Transport;
export const GetProjectsLocationsTransportsResponse =
  /*@__PURE__*/ /*#__PURE__*/ Transport;

export type GetProjectsLocationsTransportsError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Gets details of a single Transport. */
export const getProjectsLocationsTransports: API.OperationMethod<
  GetProjectsLocationsTransportsRequest,
  GetProjectsLocationsTransportsResponse,
  GetProjectsLocationsTransportsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetProjectsLocationsTransportsRequest,
  output: GetProjectsLocationsTransportsResponse,
  errors: [NotFound, Forbidden],
}));

export interface PatchProjectsLocationsTransportsRequest {
  /** Identifier. Name of the resource. */
  name: string;
  /** Optional. Field mask is used to specify the fields to be overwritten in the Transport resource by the update. The fields specified in the update_mask are relative to the resource, not the full request. A field will be overwritten if it is in the mask. If the user does not provide a mask then all fields present in the request will be overwritten. */
  updateMask?: string;
  /** Optional. An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes since the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000). */
  requestId?: string;
  /** Request body */
  body?: Transport;
}

export const PatchProjectsLocationsTransportsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    updateMask: Schema.optional(Schema.String).pipe(T.HttpQuery("updateMask")),
    requestId: Schema.optional(Schema.String).pipe(T.HttpQuery("requestId")),
    body: Schema.optional(Transport).pipe(T.HttpBody()),
  }).pipe(
    T.Http({ method: "PATCH", path: "v1/{+name}", hasBody: true }),
    svc,
  ) as unknown as Schema.Schema<PatchProjectsLocationsTransportsRequest>;

export type PatchProjectsLocationsTransportsResponse =
  GoogleLongrunningOperation;
export const PatchProjectsLocationsTransportsResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleLongrunningOperation;

export type PatchProjectsLocationsTransportsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Updates the parameters of a single Transport. */
export const patchProjectsLocationsTransports: API.OperationMethod<
  PatchProjectsLocationsTransportsRequest,
  PatchProjectsLocationsTransportsResponse,
  PatchProjectsLocationsTransportsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: PatchProjectsLocationsTransportsRequest,
  output: PatchProjectsLocationsTransportsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface DeleteProjectsLocationsTransportsRequest {
  /** Required. Name of the resource. */
  name: string;
  /** Optional. An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes after the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000). */
  requestId?: string;
}

export const DeleteProjectsLocationsTransportsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    requestId: Schema.optional(Schema.String).pipe(T.HttpQuery("requestId")),
  }).pipe(
    T.Http({ method: "DELETE", path: "v1/{+name}" }),
    svc,
  ) as unknown as Schema.Schema<DeleteProjectsLocationsTransportsRequest>;

export type DeleteProjectsLocationsTransportsResponse =
  GoogleLongrunningOperation;
export const DeleteProjectsLocationsTransportsResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleLongrunningOperation;

export type DeleteProjectsLocationsTransportsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Deletes a single Transport. */
export const deleteProjectsLocationsTransports: API.OperationMethod<
  DeleteProjectsLocationsTransportsRequest,
  DeleteProjectsLocationsTransportsResponse,
  DeleteProjectsLocationsTransportsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: DeleteProjectsLocationsTransportsRequest,
  output: DeleteProjectsLocationsTransportsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface ListProjectsLocationsTransportsRequest {
  /** Optional. Filtering results. */
  filter?: string;
  /** Optional. A token identifying a page of results the server should return. */
  pageToken?: string;
  /** Optional. Hint for how to order the results. */
  orderBy?: string;
  /** Optional. Requested page size. Server may return fewer items than requested. If unspecified, server will pick an appropriate default. */
  pageSize?: number;
  /** Required. Parent value for ListTransportsRequest. */
  parent: string;
}

export const ListProjectsLocationsTransportsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    filter: Schema.optional(Schema.String).pipe(T.HttpQuery("filter")),
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
    orderBy: Schema.optional(Schema.String).pipe(T.HttpQuery("orderBy")),
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
    parent: Schema.String.pipe(T.HttpPath("parent")),
  }).pipe(
    T.Http({ method: "GET", path: "v1/{+parent}/transports" }),
    svc,
  ) as unknown as Schema.Schema<ListProjectsLocationsTransportsRequest>;

export type ListProjectsLocationsTransportsResponse = ListTransportsResponse;
export const ListProjectsLocationsTransportsResponse =
  /*@__PURE__*/ /*#__PURE__*/ ListTransportsResponse;

export type ListProjectsLocationsTransportsError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Lists Transports in a given project and location. */
export const listProjectsLocationsTransports: API.PaginatedOperationMethod<
  ListProjectsLocationsTransportsRequest,
  ListProjectsLocationsTransportsResponse,
  ListProjectsLocationsTransportsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
  input: ListProjectsLocationsTransportsRequest,
  output: ListProjectsLocationsTransportsResponse,
  errors: [NotFound, Forbidden],
  pagination: {
    inputToken: "pageToken",
    outputToken: "nextPageToken",
  },
}));

export interface CreateProjectsLocationsTransportsRequest {
  /** Required. Id of the requesting object */
  transportId?: string;
  /** Optional. An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes since the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000). */
  requestId?: string;
  /** Required. Value for parent. */
  parent: string;
  /** Request body */
  body?: Transport;
}

export const CreateProjectsLocationsTransportsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    transportId: Schema.optional(Schema.String).pipe(
      T.HttpQuery("transportId"),
    ),
    requestId: Schema.optional(Schema.String).pipe(T.HttpQuery("requestId")),
    parent: Schema.String.pipe(T.HttpPath("parent")),
    body: Schema.optional(Transport).pipe(T.HttpBody()),
  }).pipe(
    T.Http({ method: "POST", path: "v1/{+parent}/transports", hasBody: true }),
    svc,
  ) as unknown as Schema.Schema<CreateProjectsLocationsTransportsRequest>;

export type CreateProjectsLocationsTransportsResponse =
  GoogleLongrunningOperation;
export const CreateProjectsLocationsTransportsResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleLongrunningOperation;

export type CreateProjectsLocationsTransportsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Creates a new Transport in a given project and location. */
export const createProjectsLocationsTransports: API.OperationMethod<
  CreateProjectsLocationsTransportsRequest,
  CreateProjectsLocationsTransportsResponse,
  CreateProjectsLocationsTransportsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: CreateProjectsLocationsTransportsRequest,
  output: CreateProjectsLocationsTransportsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface GetProjectsLocationsMulticloudDataTransferSupportedServicesRequest {
  /** Required. The name of the service. */
  name: string;
}

export const GetProjectsLocationsMulticloudDataTransferSupportedServicesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "GET", path: "v1/{+name}" }),
    svc,
  ) as unknown as Schema.Schema<GetProjectsLocationsMulticloudDataTransferSupportedServicesRequest>;

export type GetProjectsLocationsMulticloudDataTransferSupportedServicesResponse =
  MulticloudDataTransferSupportedService;
export const GetProjectsLocationsMulticloudDataTransferSupportedServicesResponse =
  /*@__PURE__*/ /*#__PURE__*/ MulticloudDataTransferSupportedService;

export type GetProjectsLocationsMulticloudDataTransferSupportedServicesError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Gets the details of a service that is supported for Data Transfer Essentials. */
export const getProjectsLocationsMulticloudDataTransferSupportedServices: API.OperationMethod<
  GetProjectsLocationsMulticloudDataTransferSupportedServicesRequest,
  GetProjectsLocationsMulticloudDataTransferSupportedServicesResponse,
  GetProjectsLocationsMulticloudDataTransferSupportedServicesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetProjectsLocationsMulticloudDataTransferSupportedServicesRequest,
  output: GetProjectsLocationsMulticloudDataTransferSupportedServicesResponse,
  errors: [NotFound, Forbidden],
}));

export interface ListProjectsLocationsMulticloudDataTransferSupportedServicesRequest {
  /** Required. The name of the parent resource. */
  parent: string;
  /** Optional. The page token. */
  pageToken?: string;
  /** Optional. The maximum number of results listed per page. */
  pageSize?: number;
}

export const ListProjectsLocationsMulticloudDataTransferSupportedServicesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    parent: Schema.String.pipe(T.HttpPath("parent")),
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
  }).pipe(
    T.Http({
      method: "GET",
      path: "v1/{+parent}/multicloudDataTransferSupportedServices",
    }),
    svc,
  ) as unknown as Schema.Schema<ListProjectsLocationsMulticloudDataTransferSupportedServicesRequest>;

export type ListProjectsLocationsMulticloudDataTransferSupportedServicesResponse =
  ListMulticloudDataTransferSupportedServicesResponse;
export const ListProjectsLocationsMulticloudDataTransferSupportedServicesResponse =
  /*@__PURE__*/ /*#__PURE__*/ ListMulticloudDataTransferSupportedServicesResponse;

export type ListProjectsLocationsMulticloudDataTransferSupportedServicesError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Lists the services in the project for a region that are supported for Data Transfer Essentials. */
export const listProjectsLocationsMulticloudDataTransferSupportedServices: API.PaginatedOperationMethod<
  ListProjectsLocationsMulticloudDataTransferSupportedServicesRequest,
  ListProjectsLocationsMulticloudDataTransferSupportedServicesResponse,
  ListProjectsLocationsMulticloudDataTransferSupportedServicesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
  input: ListProjectsLocationsMulticloudDataTransferSupportedServicesRequest,
  output: ListProjectsLocationsMulticloudDataTransferSupportedServicesResponse,
  errors: [NotFound, Forbidden],
  pagination: {
    inputToken: "pageToken",
    outputToken: "nextPageToken",
  },
}));

export interface GetProjectsLocationsAutomatedDnsRecordsRequest {
  /** Required. Name of the AutomatedDnsRecord to get. Format: projects/{project}/locations/{location}/automatedDnsRecords/{automated_dns_record} */
  name: string;
}

export const GetProjectsLocationsAutomatedDnsRecordsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "GET", path: "v1/{+name}" }),
    svc,
  ) as unknown as Schema.Schema<GetProjectsLocationsAutomatedDnsRecordsRequest>;

export type GetProjectsLocationsAutomatedDnsRecordsResponse =
  AutomatedDnsRecord;
export const GetProjectsLocationsAutomatedDnsRecordsResponse =
  /*@__PURE__*/ /*#__PURE__*/ AutomatedDnsRecord;

export type GetProjectsLocationsAutomatedDnsRecordsError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Gets details of a single AutomatedDnsRecord. */
export const getProjectsLocationsAutomatedDnsRecords: API.OperationMethod<
  GetProjectsLocationsAutomatedDnsRecordsRequest,
  GetProjectsLocationsAutomatedDnsRecordsResponse,
  GetProjectsLocationsAutomatedDnsRecordsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetProjectsLocationsAutomatedDnsRecordsRequest,
  output: GetProjectsLocationsAutomatedDnsRecordsResponse,
  errors: [NotFound, Forbidden],
}));

export interface DeleteProjectsLocationsAutomatedDnsRecordsRequest {
  /** Optional. An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes after the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000). */
  requestId?: string;
  /** Optional. The etag is computed by the server, and may be sent on update and delete requests to ensure the client has an up-to-date value before proceeding. */
  etag?: string;
  /** Optional. Delete mode when deleting AutomatedDnsRecord. If set to DEPROGRAM, the record will be deprogrammed in Cloud DNS. If set to SKIP_DEPROGRAMMING, the record will not be deprogrammed in Cloud DNS. */
  deleteMode?:
    | "DELETE_MODE_UNSPECIFIED"
    | "DEPROGRAM"
    | "SKIP_DEPROGRAMMING"
    | (string & {});
  /** Required. The name of the AutomatedDnsRecord to delete. */
  name: string;
}

export const DeleteProjectsLocationsAutomatedDnsRecordsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    requestId: Schema.optional(Schema.String).pipe(T.HttpQuery("requestId")),
    etag: Schema.optional(Schema.String).pipe(T.HttpQuery("etag")),
    deleteMode: Schema.optional(Schema.String).pipe(T.HttpQuery("deleteMode")),
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "DELETE", path: "v1/{+name}" }),
    svc,
  ) as unknown as Schema.Schema<DeleteProjectsLocationsAutomatedDnsRecordsRequest>;

export type DeleteProjectsLocationsAutomatedDnsRecordsResponse =
  GoogleLongrunningOperation;
export const DeleteProjectsLocationsAutomatedDnsRecordsResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleLongrunningOperation;

export type DeleteProjectsLocationsAutomatedDnsRecordsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Deletes a single AutomatedDnsRecord. */
export const deleteProjectsLocationsAutomatedDnsRecords: API.OperationMethod<
  DeleteProjectsLocationsAutomatedDnsRecordsRequest,
  DeleteProjectsLocationsAutomatedDnsRecordsResponse,
  DeleteProjectsLocationsAutomatedDnsRecordsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: DeleteProjectsLocationsAutomatedDnsRecordsRequest,
  output: DeleteProjectsLocationsAutomatedDnsRecordsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface ListProjectsLocationsAutomatedDnsRecordsRequest {
  /** The maximum number of results per page that should be returned. */
  pageSize?: number;
  /** A filter expression that filters the results listed in the response. */
  filter?: string;
  /** The page token. */
  pageToken?: string;
  /** Sort the results by a certain order. */
  orderBy?: string;
  /** Required. The parent resource's name. ex. projects/123/locations/us-east1 */
  parent: string;
}

export const ListProjectsLocationsAutomatedDnsRecordsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
    filter: Schema.optional(Schema.String).pipe(T.HttpQuery("filter")),
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
    orderBy: Schema.optional(Schema.String).pipe(T.HttpQuery("orderBy")),
    parent: Schema.String.pipe(T.HttpPath("parent")),
  }).pipe(
    T.Http({ method: "GET", path: "v1/{+parent}/automatedDnsRecords" }),
    svc,
  ) as unknown as Schema.Schema<ListProjectsLocationsAutomatedDnsRecordsRequest>;

export type ListProjectsLocationsAutomatedDnsRecordsResponse =
  ListAutomatedDnsRecordsResponse;
export const ListProjectsLocationsAutomatedDnsRecordsResponse =
  /*@__PURE__*/ /*#__PURE__*/ ListAutomatedDnsRecordsResponse;

export type ListProjectsLocationsAutomatedDnsRecordsError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Lists AutomatedDnsRecords in a given project and location. */
export const listProjectsLocationsAutomatedDnsRecords: API.PaginatedOperationMethod<
  ListProjectsLocationsAutomatedDnsRecordsRequest,
  ListProjectsLocationsAutomatedDnsRecordsResponse,
  ListProjectsLocationsAutomatedDnsRecordsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
  input: ListProjectsLocationsAutomatedDnsRecordsRequest,
  output: ListProjectsLocationsAutomatedDnsRecordsResponse,
  errors: [NotFound, Forbidden],
  pagination: {
    inputToken: "pageToken",
    outputToken: "nextPageToken",
  },
}));

export interface CreateProjectsLocationsAutomatedDnsRecordsRequest {
  /** Required. The parent resource's name of the AutomatedDnsRecord. ex. projects/123/locations/us-east1 */
  parent: string;
  /** Optional. The insert mode when creating AutomatedDnsRecord. */
  insertMode?:
    | "INSERT_MODE_UNSPECIFIED"
    | "FAIL_IF_EXISTS"
    | "OVERWRITE"
    | (string & {});
  /** Optional. Resource ID (i.e. 'foo' in '[...]/projects/p/locations/l/automatedDnsRecords/foo') See https://google.aip.dev/122#resource-id-segments Unique per location. If one is not provided, one will be generated. */
  automatedDnsRecordId?: string;
  /** Optional. An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes since the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000). */
  requestId?: string;
  /** Request body */
  body?: AutomatedDnsRecord;
}

export const CreateProjectsLocationsAutomatedDnsRecordsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    parent: Schema.String.pipe(T.HttpPath("parent")),
    insertMode: Schema.optional(Schema.String).pipe(T.HttpQuery("insertMode")),
    automatedDnsRecordId: Schema.optional(Schema.String).pipe(
      T.HttpQuery("automatedDnsRecordId"),
    ),
    requestId: Schema.optional(Schema.String).pipe(T.HttpQuery("requestId")),
    body: Schema.optional(AutomatedDnsRecord).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v1/{+parent}/automatedDnsRecords",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<CreateProjectsLocationsAutomatedDnsRecordsRequest>;

export type CreateProjectsLocationsAutomatedDnsRecordsResponse =
  GoogleLongrunningOperation;
export const CreateProjectsLocationsAutomatedDnsRecordsResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleLongrunningOperation;

export type CreateProjectsLocationsAutomatedDnsRecordsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Creates a new AutomatedDnsRecord in a given project and location. */
export const createProjectsLocationsAutomatedDnsRecords: API.OperationMethod<
  CreateProjectsLocationsAutomatedDnsRecordsRequest,
  CreateProjectsLocationsAutomatedDnsRecordsResponse,
  CreateProjectsLocationsAutomatedDnsRecordsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: CreateProjectsLocationsAutomatedDnsRecordsRequest,
  output: CreateProjectsLocationsAutomatedDnsRecordsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface ListProjectsLocationsOperationsRequest {
  /** When set to `true`, operations that are reachable are returned as normal, and those that are unreachable are returned in the ListOperationsResponse.unreachable field. This can only be `true` when reading across collections. For example, when `parent` is set to `"projects/example/locations/-"`. This field is not supported by default and will result in an `UNIMPLEMENTED` error if set unless explicitly documented otherwise in service or product specific documentation. */
  returnPartialSuccess?: boolean;
  /** The name of the operation's parent resource. */
  name: string;
  /** The standard list page size. */
  pageSize?: number;
  /** The standard list filter. */
  filter?: string;
  /** The standard list page token. */
  pageToken?: string;
}

export const ListProjectsLocationsOperationsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    returnPartialSuccess: Schema.optional(Schema.Boolean).pipe(
      T.HttpQuery("returnPartialSuccess"),
    ),
    name: Schema.String.pipe(T.HttpPath("name")),
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
    filter: Schema.optional(Schema.String).pipe(T.HttpQuery("filter")),
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
  }).pipe(
    T.Http({ method: "GET", path: "v1/{+name}/operations" }),
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
    T.Http({ method: "POST", path: "v1/{+name}:cancel", hasBody: true }),
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
    T.Http({ method: "DELETE", path: "v1/{+name}" }),
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
    T.Http({ method: "GET", path: "v1/{+name}" }),
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

export interface CreateProjectsLocationsServiceConnectionMapsRequest {
  /** Required. The parent resource's name of the ServiceConnectionMap. ex. projects/123/locations/us-east1 */
  parent: string;
  /** Optional. Resource ID (i.e. 'foo' in '[...]/projects/p/locations/l/serviceConnectionMaps/foo') See https://google.aip.dev/122#resource-id-segments Unique per location. If one is not provided, one will be generated. */
  serviceConnectionMapId?: string;
  /** Optional. An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes since the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000). */
  requestId?: string;
  /** Request body */
  body?: ServiceConnectionMap;
}

export const CreateProjectsLocationsServiceConnectionMapsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    parent: Schema.String.pipe(T.HttpPath("parent")),
    serviceConnectionMapId: Schema.optional(Schema.String).pipe(
      T.HttpQuery("serviceConnectionMapId"),
    ),
    requestId: Schema.optional(Schema.String).pipe(T.HttpQuery("requestId")),
    body: Schema.optional(ServiceConnectionMap).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v1/{+parent}/serviceConnectionMaps",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<CreateProjectsLocationsServiceConnectionMapsRequest>;

export type CreateProjectsLocationsServiceConnectionMapsResponse =
  GoogleLongrunningOperation;
export const CreateProjectsLocationsServiceConnectionMapsResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleLongrunningOperation;

export type CreateProjectsLocationsServiceConnectionMapsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Creates a new ServiceConnectionMap in a given project and location. */
export const createProjectsLocationsServiceConnectionMaps: API.OperationMethod<
  CreateProjectsLocationsServiceConnectionMapsRequest,
  CreateProjectsLocationsServiceConnectionMapsResponse,
  CreateProjectsLocationsServiceConnectionMapsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: CreateProjectsLocationsServiceConnectionMapsRequest,
  output: CreateProjectsLocationsServiceConnectionMapsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface ListProjectsLocationsServiceConnectionMapsRequest {
  /** Required. The parent resource's name. ex. projects/123/locations/us-east1 */
  parent: string;
  /** The maximum number of results per page that should be returned. */
  pageSize?: number;
  /** A filter expression that filters the results listed in the response. */
  filter?: string;
  /** The page token. */
  pageToken?: string;
  /** Sort the results by a certain order. */
  orderBy?: string;
}

export const ListProjectsLocationsServiceConnectionMapsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    parent: Schema.String.pipe(T.HttpPath("parent")),
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
    filter: Schema.optional(Schema.String).pipe(T.HttpQuery("filter")),
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
    orderBy: Schema.optional(Schema.String).pipe(T.HttpQuery("orderBy")),
  }).pipe(
    T.Http({ method: "GET", path: "v1/{+parent}/serviceConnectionMaps" }),
    svc,
  ) as unknown as Schema.Schema<ListProjectsLocationsServiceConnectionMapsRequest>;

export type ListProjectsLocationsServiceConnectionMapsResponse =
  ListServiceConnectionMapsResponse;
export const ListProjectsLocationsServiceConnectionMapsResponse =
  /*@__PURE__*/ /*#__PURE__*/ ListServiceConnectionMapsResponse;

export type ListProjectsLocationsServiceConnectionMapsError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Lists ServiceConnectionMaps in a given project and location. */
export const listProjectsLocationsServiceConnectionMaps: API.PaginatedOperationMethod<
  ListProjectsLocationsServiceConnectionMapsRequest,
  ListProjectsLocationsServiceConnectionMapsResponse,
  ListProjectsLocationsServiceConnectionMapsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
  input: ListProjectsLocationsServiceConnectionMapsRequest,
  output: ListProjectsLocationsServiceConnectionMapsResponse,
  errors: [NotFound, Forbidden],
  pagination: {
    inputToken: "pageToken",
    outputToken: "nextPageToken",
  },
}));

export interface DeleteProjectsLocationsServiceConnectionMapsRequest {
  /** Required. The name of the ServiceConnectionMap to delete. */
  name: string;
  /** Optional. An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes after the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000). */
  requestId?: string;
  /** Optional. The etag is computed by the server, and may be sent on update and delete requests to ensure the client has an up-to-date value before proceeding. */
  etag?: string;
}

export const DeleteProjectsLocationsServiceConnectionMapsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    requestId: Schema.optional(Schema.String).pipe(T.HttpQuery("requestId")),
    etag: Schema.optional(Schema.String).pipe(T.HttpQuery("etag")),
  }).pipe(
    T.Http({ method: "DELETE", path: "v1/{+name}" }),
    svc,
  ) as unknown as Schema.Schema<DeleteProjectsLocationsServiceConnectionMapsRequest>;

export type DeleteProjectsLocationsServiceConnectionMapsResponse =
  GoogleLongrunningOperation;
export const DeleteProjectsLocationsServiceConnectionMapsResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleLongrunningOperation;

export type DeleteProjectsLocationsServiceConnectionMapsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Deletes a single ServiceConnectionMap. */
export const deleteProjectsLocationsServiceConnectionMaps: API.OperationMethod<
  DeleteProjectsLocationsServiceConnectionMapsRequest,
  DeleteProjectsLocationsServiceConnectionMapsResponse,
  DeleteProjectsLocationsServiceConnectionMapsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: DeleteProjectsLocationsServiceConnectionMapsRequest,
  output: DeleteProjectsLocationsServiceConnectionMapsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface PatchProjectsLocationsServiceConnectionMapsRequest {
  /** Optional. Field mask is used to specify the fields to be overwritten in the ServiceConnectionMap resource by the update. The fields specified in the update_mask are relative to the resource, not the full request. A field will be overwritten if it is in the mask. If the user does not provide a mask then all fields will be overwritten. */
  updateMask?: string;
  /** Optional. An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes since the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000). */
  requestId?: string;
  /** Immutable. The name of a ServiceConnectionMap. Format: projects/{project}/locations/{location}/serviceConnectionMaps/{service_connection_map} See: https://google.aip.dev/122#fields-representing-resource-names */
  name: string;
  /** Request body */
  body?: ServiceConnectionMap;
}

export const PatchProjectsLocationsServiceConnectionMapsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    updateMask: Schema.optional(Schema.String).pipe(T.HttpQuery("updateMask")),
    requestId: Schema.optional(Schema.String).pipe(T.HttpQuery("requestId")),
    name: Schema.String.pipe(T.HttpPath("name")),
    body: Schema.optional(ServiceConnectionMap).pipe(T.HttpBody()),
  }).pipe(
    T.Http({ method: "PATCH", path: "v1/{+name}", hasBody: true }),
    svc,
  ) as unknown as Schema.Schema<PatchProjectsLocationsServiceConnectionMapsRequest>;

export type PatchProjectsLocationsServiceConnectionMapsResponse =
  GoogleLongrunningOperation;
export const PatchProjectsLocationsServiceConnectionMapsResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleLongrunningOperation;

export type PatchProjectsLocationsServiceConnectionMapsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Updates the parameters of a single ServiceConnectionMap. */
export const patchProjectsLocationsServiceConnectionMaps: API.OperationMethod<
  PatchProjectsLocationsServiceConnectionMapsRequest,
  PatchProjectsLocationsServiceConnectionMapsResponse,
  PatchProjectsLocationsServiceConnectionMapsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: PatchProjectsLocationsServiceConnectionMapsRequest,
  output: PatchProjectsLocationsServiceConnectionMapsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface GetProjectsLocationsServiceConnectionMapsRequest {
  /** Required. Name of the ServiceConnectionMap to get. */
  name: string;
}

export const GetProjectsLocationsServiceConnectionMapsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "GET", path: "v1/{+name}" }),
    svc,
  ) as unknown as Schema.Schema<GetProjectsLocationsServiceConnectionMapsRequest>;

export type GetProjectsLocationsServiceConnectionMapsResponse =
  ServiceConnectionMap;
export const GetProjectsLocationsServiceConnectionMapsResponse =
  /*@__PURE__*/ /*#__PURE__*/ ServiceConnectionMap;

export type GetProjectsLocationsServiceConnectionMapsError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Gets details of a single ServiceConnectionMap. */
export const getProjectsLocationsServiceConnectionMaps: API.OperationMethod<
  GetProjectsLocationsServiceConnectionMapsRequest,
  GetProjectsLocationsServiceConnectionMapsResponse,
  GetProjectsLocationsServiceConnectionMapsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetProjectsLocationsServiceConnectionMapsRequest,
  output: GetProjectsLocationsServiceConnectionMapsResponse,
  errors: [NotFound, Forbidden],
}));

export interface RejectSpokeProjectsLocationsGlobalHubsRequest {
  /** Required. The name of the hub from which to reject the spoke. */
  name: string;
  /** Request body */
  body?: RejectHubSpokeRequest;
}

export const RejectSpokeProjectsLocationsGlobalHubsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    body: Schema.optional(RejectHubSpokeRequest).pipe(T.HttpBody()),
  }).pipe(
    T.Http({ method: "POST", path: "v1/{+name}:rejectSpoke", hasBody: true }),
    svc,
  ) as unknown as Schema.Schema<RejectSpokeProjectsLocationsGlobalHubsRequest>;

export type RejectSpokeProjectsLocationsGlobalHubsResponse =
  GoogleLongrunningOperation;
export const RejectSpokeProjectsLocationsGlobalHubsResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleLongrunningOperation;

export type RejectSpokeProjectsLocationsGlobalHubsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Rejects a Network Connectivity Center spoke from being attached to a hub. If the spoke was previously in the `ACTIVE` state, it transitions to the `INACTIVE` state and is no longer able to connect to other spokes that are attached to the hub. */
export const rejectSpokeProjectsLocationsGlobalHubs: API.OperationMethod<
  RejectSpokeProjectsLocationsGlobalHubsRequest,
  RejectSpokeProjectsLocationsGlobalHubsResponse,
  RejectSpokeProjectsLocationsGlobalHubsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: RejectSpokeProjectsLocationsGlobalHubsRequest,
  output: RejectSpokeProjectsLocationsGlobalHubsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface DeleteProjectsLocationsGlobalHubsRequest {
  /** Required. The name of the hub to delete. */
  name: string;
  /** Optional. A request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server knows to ignore the request if it has already been completed. The server guarantees that a request doesn't result in creation of duplicate commitments for at least 60 minutes. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check to see whether the original operation was received. If it was, the server ignores the second request. This behavior prevents clients from mistakenly creating duplicate commitments. The request ID must be a valid UUID, with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000). */
  requestId?: string;
}

export const DeleteProjectsLocationsGlobalHubsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    requestId: Schema.optional(Schema.String).pipe(T.HttpQuery("requestId")),
  }).pipe(
    T.Http({ method: "DELETE", path: "v1/{+name}" }),
    svc,
  ) as unknown as Schema.Schema<DeleteProjectsLocationsGlobalHubsRequest>;

export type DeleteProjectsLocationsGlobalHubsResponse =
  GoogleLongrunningOperation;
export const DeleteProjectsLocationsGlobalHubsResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleLongrunningOperation;

export type DeleteProjectsLocationsGlobalHubsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Deletes a Network Connectivity Center hub. */
export const deleteProjectsLocationsGlobalHubs: API.OperationMethod<
  DeleteProjectsLocationsGlobalHubsRequest,
  DeleteProjectsLocationsGlobalHubsResponse,
  DeleteProjectsLocationsGlobalHubsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: DeleteProjectsLocationsGlobalHubsRequest,
  output: DeleteProjectsLocationsGlobalHubsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface GetProjectsLocationsGlobalHubsRequest {
  /** Required. The name of the hub resource to get. */
  name: string;
}

export const GetProjectsLocationsGlobalHubsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "GET", path: "v1/{+name}" }),
    svc,
  ) as unknown as Schema.Schema<GetProjectsLocationsGlobalHubsRequest>;

export type GetProjectsLocationsGlobalHubsResponse = Hub;
export const GetProjectsLocationsGlobalHubsResponse =
  /*@__PURE__*/ /*#__PURE__*/ Hub;

export type GetProjectsLocationsGlobalHubsError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Gets details about a Network Connectivity Center hub. */
export const getProjectsLocationsGlobalHubs: API.OperationMethod<
  GetProjectsLocationsGlobalHubsRequest,
  GetProjectsLocationsGlobalHubsResponse,
  GetProjectsLocationsGlobalHubsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetProjectsLocationsGlobalHubsRequest,
  output: GetProjectsLocationsGlobalHubsResponse,
  errors: [NotFound, Forbidden],
}));

export interface AcceptSpokeUpdateProjectsLocationsGlobalHubsRequest {
  /** Required. The name of the hub to accept spoke update. */
  name: string;
  /** Request body */
  body?: AcceptSpokeUpdateRequest;
}

export const AcceptSpokeUpdateProjectsLocationsGlobalHubsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    body: Schema.optional(AcceptSpokeUpdateRequest).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v1/{+name}:acceptSpokeUpdate",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<AcceptSpokeUpdateProjectsLocationsGlobalHubsRequest>;

export type AcceptSpokeUpdateProjectsLocationsGlobalHubsResponse =
  GoogleLongrunningOperation;
export const AcceptSpokeUpdateProjectsLocationsGlobalHubsResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleLongrunningOperation;

export type AcceptSpokeUpdateProjectsLocationsGlobalHubsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Accepts a proposal to update a Network Connectivity Center spoke in a hub. */
export const acceptSpokeUpdateProjectsLocationsGlobalHubs: API.OperationMethod<
  AcceptSpokeUpdateProjectsLocationsGlobalHubsRequest,
  AcceptSpokeUpdateProjectsLocationsGlobalHubsResponse,
  AcceptSpokeUpdateProjectsLocationsGlobalHubsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: AcceptSpokeUpdateProjectsLocationsGlobalHubsRequest,
  output: AcceptSpokeUpdateProjectsLocationsGlobalHubsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface CreateProjectsLocationsGlobalHubsRequest {
  /** Required. The parent resource. */
  parent: string;
  /** Required. A unique identifier for the hub. */
  hubId?: string;
  /** Optional. A request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server knows to ignore the request if it has already been completed. The server guarantees that a request doesn't result in creation of duplicate commitments for at least 60 minutes. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check to see whether the original operation was received. If it was, the server ignores the second request. This behavior prevents clients from mistakenly creating duplicate commitments. The request ID must be a valid UUID, with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000). */
  requestId?: string;
  /** Request body */
  body?: Hub;
}

export const CreateProjectsLocationsGlobalHubsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    parent: Schema.String.pipe(T.HttpPath("parent")),
    hubId: Schema.optional(Schema.String).pipe(T.HttpQuery("hubId")),
    requestId: Schema.optional(Schema.String).pipe(T.HttpQuery("requestId")),
    body: Schema.optional(Hub).pipe(T.HttpBody()),
  }).pipe(
    T.Http({ method: "POST", path: "v1/{+parent}/hubs", hasBody: true }),
    svc,
  ) as unknown as Schema.Schema<CreateProjectsLocationsGlobalHubsRequest>;

export type CreateProjectsLocationsGlobalHubsResponse =
  GoogleLongrunningOperation;
export const CreateProjectsLocationsGlobalHubsResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleLongrunningOperation;

export type CreateProjectsLocationsGlobalHubsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Creates a new Network Connectivity Center hub in the specified project. */
export const createProjectsLocationsGlobalHubs: API.OperationMethod<
  CreateProjectsLocationsGlobalHubsRequest,
  CreateProjectsLocationsGlobalHubsResponse,
  CreateProjectsLocationsGlobalHubsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: CreateProjectsLocationsGlobalHubsRequest,
  output: CreateProjectsLocationsGlobalHubsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface TestIamPermissionsProjectsLocationsGlobalHubsRequest {
  /** REQUIRED: The resource for which the policy detail is being requested. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field. */
  resource: string;
  /** Request body */
  body?: TestIamPermissionsRequest;
}

export const TestIamPermissionsProjectsLocationsGlobalHubsRequest =
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
  ) as unknown as Schema.Schema<TestIamPermissionsProjectsLocationsGlobalHubsRequest>;

export type TestIamPermissionsProjectsLocationsGlobalHubsResponse =
  TestIamPermissionsResponse;
export const TestIamPermissionsProjectsLocationsGlobalHubsResponse =
  /*@__PURE__*/ /*#__PURE__*/ TestIamPermissionsResponse;

export type TestIamPermissionsProjectsLocationsGlobalHubsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Returns permissions that a caller has on the specified resource. If the resource does not exist, this will return an empty set of permissions, not a `NOT_FOUND` error. Note: This operation is designed to be used for building permission-aware UIs and command-line tools, not for authorization checking. This operation may "fail open" without warning. */
export const testIamPermissionsProjectsLocationsGlobalHubs: API.OperationMethod<
  TestIamPermissionsProjectsLocationsGlobalHubsRequest,
  TestIamPermissionsProjectsLocationsGlobalHubsResponse,
  TestIamPermissionsProjectsLocationsGlobalHubsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: TestIamPermissionsProjectsLocationsGlobalHubsRequest,
  output: TestIamPermissionsProjectsLocationsGlobalHubsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface QueryStatusProjectsLocationsGlobalHubsRequest {
  /** Optional. An expression that filters the list of results. The filter can be used to filter the results by the following fields: * `psc_propagation_status.source_spoke` * `psc_propagation_status.source_group` * `psc_propagation_status.source_forwarding_rule` * `psc_propagation_status.target_spoke` * `psc_propagation_status.target_group` * `psc_propagation_status.code` * `psc_propagation_status.message` */
  filter?: string;
  /** Optional. The page token. */
  pageToken?: string;
  /** Optional. Sort the results in ascending order by the specified fields. A comma-separated list of any of these fields: * `psc_propagation_status.source_spoke` * `psc_propagation_status.source_group` * `psc_propagation_status.source_forwarding_rule` * `psc_propagation_status.target_spoke` * `psc_propagation_status.target_group` * `psc_propagation_status.code` If `group_by` is set, the value of the `order_by` field must be the same as or a subset of the `group_by` field. */
  orderBy?: string;
  /** Optional. The maximum number of results to return per page. */
  pageSize?: number;
  /** Optional. Aggregate the results by the specified fields. A comma-separated list of any of these fields: * `psc_propagation_status.source_spoke` * `psc_propagation_status.source_group` * `psc_propagation_status.source_forwarding_rule` * `psc_propagation_status.target_spoke` * `psc_propagation_status.target_group` * `psc_propagation_status.code` */
  groupBy?: string;
  /** Required. The name of the hub. */
  name: string;
}

export const QueryStatusProjectsLocationsGlobalHubsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    filter: Schema.optional(Schema.String).pipe(T.HttpQuery("filter")),
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
    orderBy: Schema.optional(Schema.String).pipe(T.HttpQuery("orderBy")),
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
    groupBy: Schema.optional(Schema.String).pipe(T.HttpQuery("groupBy")),
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "GET", path: "v1/{+name}:queryStatus" }),
    svc,
  ) as unknown as Schema.Schema<QueryStatusProjectsLocationsGlobalHubsRequest>;

export type QueryStatusProjectsLocationsGlobalHubsResponse =
  QueryHubStatusResponse;
export const QueryStatusProjectsLocationsGlobalHubsResponse =
  /*@__PURE__*/ /*#__PURE__*/ QueryHubStatusResponse;

export type QueryStatusProjectsLocationsGlobalHubsError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Query the Private Service Connect propagation status of a Network Connectivity Center hub. */
export const queryStatusProjectsLocationsGlobalHubs: API.PaginatedOperationMethod<
  QueryStatusProjectsLocationsGlobalHubsRequest,
  QueryStatusProjectsLocationsGlobalHubsResponse,
  QueryStatusProjectsLocationsGlobalHubsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
  input: QueryStatusProjectsLocationsGlobalHubsRequest,
  output: QueryStatusProjectsLocationsGlobalHubsResponse,
  errors: [NotFound, Forbidden],
  pagination: {
    inputToken: "pageToken",
    outputToken: "nextPageToken",
  },
}));

export interface PatchProjectsLocationsGlobalHubsRequest {
  /** Optional. In the case of an update to an existing hub, field mask is used to specify the fields to be overwritten. The fields specified in the update_mask are relative to the resource, not the full request. A field is overwritten if it is in the mask. If the user does not provide a mask, then all fields are overwritten. */
  updateMask?: string;
  /** Optional. A request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server knows to ignore the request if it has already been completed. The server guarantees that a request doesn't result in creation of duplicate commitments for at least 60 minutes. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check to see whether the original operation was received. If it was, the server ignores the second request. This behavior prevents clients from mistakenly creating duplicate commitments. The request ID must be a valid UUID, with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000). */
  requestId?: string;
  /** Immutable. The name of the hub. Hub names must be unique. They use the following form: `projects/{project_number}/locations/global/hubs/{hub_id}` */
  name: string;
  /** Request body */
  body?: Hub;
}

export const PatchProjectsLocationsGlobalHubsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    updateMask: Schema.optional(Schema.String).pipe(T.HttpQuery("updateMask")),
    requestId: Schema.optional(Schema.String).pipe(T.HttpQuery("requestId")),
    name: Schema.String.pipe(T.HttpPath("name")),
    body: Schema.optional(Hub).pipe(T.HttpBody()),
  }).pipe(
    T.Http({ method: "PATCH", path: "v1/{+name}", hasBody: true }),
    svc,
  ) as unknown as Schema.Schema<PatchProjectsLocationsGlobalHubsRequest>;

export type PatchProjectsLocationsGlobalHubsResponse =
  GoogleLongrunningOperation;
export const PatchProjectsLocationsGlobalHubsResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleLongrunningOperation;

export type PatchProjectsLocationsGlobalHubsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Updates the description and/or labels of a Network Connectivity Center hub. */
export const patchProjectsLocationsGlobalHubs: API.OperationMethod<
  PatchProjectsLocationsGlobalHubsRequest,
  PatchProjectsLocationsGlobalHubsResponse,
  PatchProjectsLocationsGlobalHubsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: PatchProjectsLocationsGlobalHubsRequest,
  output: PatchProjectsLocationsGlobalHubsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface ListSpokesProjectsLocationsGlobalHubsRequest {
  /** Required. The name of the hub. */
  name: string;
  /** A list of locations. Specify one of the following: `[global]`, a single region (for example, `[us-central1]`), or a combination of values (for example, `[global, us-central1, us-west1]`). If the spoke_locations field is populated, the list of results includes only spokes in the specified location. If the spoke_locations field is not populated, the list of results includes spokes in all locations. */
  spokeLocations?: string[];
  /** The maximum number of results to return per page. */
  pageSize?: number;
  /** The view of the spoke to return. The view that you use determines which spoke fields are included in the response. */
  view?: "SPOKE_VIEW_UNSPECIFIED" | "BASIC" | "DETAILED" | (string & {});
  /** The page token. */
  pageToken?: string;
  /** Sort the results by name or create_time. */
  orderBy?: string;
  /** An expression that filters the list of results. */
  filter?: string;
}

export const ListSpokesProjectsLocationsGlobalHubsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    spokeLocations: Schema.optional(Schema.Array(Schema.String)).pipe(
      T.HttpQuery("spokeLocations"),
    ),
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
    view: Schema.optional(Schema.String).pipe(T.HttpQuery("view")),
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
    orderBy: Schema.optional(Schema.String).pipe(T.HttpQuery("orderBy")),
    filter: Schema.optional(Schema.String).pipe(T.HttpQuery("filter")),
  }).pipe(
    T.Http({ method: "GET", path: "v1/{+name}:listSpokes" }),
    svc,
  ) as unknown as Schema.Schema<ListSpokesProjectsLocationsGlobalHubsRequest>;

export type ListSpokesProjectsLocationsGlobalHubsResponse =
  ListHubSpokesResponse;
export const ListSpokesProjectsLocationsGlobalHubsResponse =
  /*@__PURE__*/ /*#__PURE__*/ ListHubSpokesResponse;

export type ListSpokesProjectsLocationsGlobalHubsError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Lists the Network Connectivity Center spokes associated with a specified hub and location. The list includes both spokes that are attached to the hub and spokes that have been proposed but not yet accepted. */
export const listSpokesProjectsLocationsGlobalHubs: API.PaginatedOperationMethod<
  ListSpokesProjectsLocationsGlobalHubsRequest,
  ListSpokesProjectsLocationsGlobalHubsResponse,
  ListSpokesProjectsLocationsGlobalHubsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
  input: ListSpokesProjectsLocationsGlobalHubsRequest,
  output: ListSpokesProjectsLocationsGlobalHubsResponse,
  errors: [NotFound, Forbidden],
  pagination: {
    inputToken: "pageToken",
    outputToken: "nextPageToken",
  },
}));

export interface ListProjectsLocationsGlobalHubsRequest {
  /** The maximum number of results per page to return. */
  pageSize?: number;
  /** The page token. */
  pageToken?: string;
  /** Sort the results by a certain order. */
  orderBy?: string;
  /** An expression that filters the list of results. */
  filter?: string;
  /** Required. The parent resource's name. */
  parent: string;
}

export const ListProjectsLocationsGlobalHubsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
    orderBy: Schema.optional(Schema.String).pipe(T.HttpQuery("orderBy")),
    filter: Schema.optional(Schema.String).pipe(T.HttpQuery("filter")),
    parent: Schema.String.pipe(T.HttpPath("parent")),
  }).pipe(
    T.Http({ method: "GET", path: "v1/{+parent}/hubs" }),
    svc,
  ) as unknown as Schema.Schema<ListProjectsLocationsGlobalHubsRequest>;

export type ListProjectsLocationsGlobalHubsResponse = ListHubsResponse;
export const ListProjectsLocationsGlobalHubsResponse =
  /*@__PURE__*/ /*#__PURE__*/ ListHubsResponse;

export type ListProjectsLocationsGlobalHubsError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Lists the Network Connectivity Center hubs associated with a given project. */
export const listProjectsLocationsGlobalHubs: API.PaginatedOperationMethod<
  ListProjectsLocationsGlobalHubsRequest,
  ListProjectsLocationsGlobalHubsResponse,
  ListProjectsLocationsGlobalHubsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
  input: ListProjectsLocationsGlobalHubsRequest,
  output: ListProjectsLocationsGlobalHubsResponse,
  errors: [NotFound, Forbidden],
  pagination: {
    inputToken: "pageToken",
    outputToken: "nextPageToken",
  },
}));

export interface SetIamPolicyProjectsLocationsGlobalHubsRequest {
  /** REQUIRED: The resource for which the policy is being specified. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field. */
  resource: string;
  /** Request body */
  body?: SetIamPolicyRequest;
}

export const SetIamPolicyProjectsLocationsGlobalHubsRequest =
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
  ) as unknown as Schema.Schema<SetIamPolicyProjectsLocationsGlobalHubsRequest>;

export type SetIamPolicyProjectsLocationsGlobalHubsResponse = Policy;
export const SetIamPolicyProjectsLocationsGlobalHubsResponse =
  /*@__PURE__*/ /*#__PURE__*/ Policy;

export type SetIamPolicyProjectsLocationsGlobalHubsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Sets the access control policy on the specified resource. Replaces any existing policy. Can return `NOT_FOUND`, `INVALID_ARGUMENT`, and `PERMISSION_DENIED` errors. */
export const setIamPolicyProjectsLocationsGlobalHubs: API.OperationMethod<
  SetIamPolicyProjectsLocationsGlobalHubsRequest,
  SetIamPolicyProjectsLocationsGlobalHubsResponse,
  SetIamPolicyProjectsLocationsGlobalHubsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: SetIamPolicyProjectsLocationsGlobalHubsRequest,
  output: SetIamPolicyProjectsLocationsGlobalHubsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface AcceptSpokeProjectsLocationsGlobalHubsRequest {
  /** Required. The name of the hub into which to accept the spoke. */
  name: string;
  /** Request body */
  body?: AcceptHubSpokeRequest;
}

export const AcceptSpokeProjectsLocationsGlobalHubsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    body: Schema.optional(AcceptHubSpokeRequest).pipe(T.HttpBody()),
  }).pipe(
    T.Http({ method: "POST", path: "v1/{+name}:acceptSpoke", hasBody: true }),
    svc,
  ) as unknown as Schema.Schema<AcceptSpokeProjectsLocationsGlobalHubsRequest>;

export type AcceptSpokeProjectsLocationsGlobalHubsResponse =
  GoogleLongrunningOperation;
export const AcceptSpokeProjectsLocationsGlobalHubsResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleLongrunningOperation;

export type AcceptSpokeProjectsLocationsGlobalHubsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Accepts a proposal to attach a Network Connectivity Center spoke to a hub. */
export const acceptSpokeProjectsLocationsGlobalHubs: API.OperationMethod<
  AcceptSpokeProjectsLocationsGlobalHubsRequest,
  AcceptSpokeProjectsLocationsGlobalHubsResponse,
  AcceptSpokeProjectsLocationsGlobalHubsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: AcceptSpokeProjectsLocationsGlobalHubsRequest,
  output: AcceptSpokeProjectsLocationsGlobalHubsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface RejectSpokeUpdateProjectsLocationsGlobalHubsRequest {
  /** Required. The name of the hub to reject spoke update. */
  name: string;
  /** Request body */
  body?: RejectSpokeUpdateRequest;
}

export const RejectSpokeUpdateProjectsLocationsGlobalHubsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    body: Schema.optional(RejectSpokeUpdateRequest).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v1/{+name}:rejectSpokeUpdate",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<RejectSpokeUpdateProjectsLocationsGlobalHubsRequest>;

export type RejectSpokeUpdateProjectsLocationsGlobalHubsResponse =
  GoogleLongrunningOperation;
export const RejectSpokeUpdateProjectsLocationsGlobalHubsResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleLongrunningOperation;

export type RejectSpokeUpdateProjectsLocationsGlobalHubsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Rejects a proposal to update a Network Connectivity Center spoke in a hub. */
export const rejectSpokeUpdateProjectsLocationsGlobalHubs: API.OperationMethod<
  RejectSpokeUpdateProjectsLocationsGlobalHubsRequest,
  RejectSpokeUpdateProjectsLocationsGlobalHubsResponse,
  RejectSpokeUpdateProjectsLocationsGlobalHubsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: RejectSpokeUpdateProjectsLocationsGlobalHubsRequest,
  output: RejectSpokeUpdateProjectsLocationsGlobalHubsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface GetIamPolicyProjectsLocationsGlobalHubsRequest {
  /** REQUIRED: The resource for which the policy is being requested. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field. */
  resource: string;
  /** Optional. The maximum policy version that will be used to format the policy. Valid values are 0, 1, and 3. Requests specifying an invalid value will be rejected. Requests for policies with any conditional role bindings must specify version 3. Policies with no conditional role bindings may specify any valid value or leave the field unset. The policy in the response might use the policy version that you specified, or it might use a lower policy version. For example, if you specify version 3, but the policy has no conditional role bindings, the response uses version 1. To learn which resources support conditions in their IAM policies, see the [IAM documentation](https://cloud.google.com/iam/help/conditions/resource-policies). */
  "options.requestedPolicyVersion"?: number;
}

export const GetIamPolicyProjectsLocationsGlobalHubsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    resource: Schema.String.pipe(T.HttpPath("resource")),
    "options.requestedPolicyVersion": Schema.optional(Schema.Number).pipe(
      T.HttpQuery("options.requestedPolicyVersion"),
    ),
  }).pipe(
    T.Http({ method: "GET", path: "v1/{+resource}:getIamPolicy" }),
    svc,
  ) as unknown as Schema.Schema<GetIamPolicyProjectsLocationsGlobalHubsRequest>;

export type GetIamPolicyProjectsLocationsGlobalHubsResponse = Policy;
export const GetIamPolicyProjectsLocationsGlobalHubsResponse =
  /*@__PURE__*/ /*#__PURE__*/ Policy;

export type GetIamPolicyProjectsLocationsGlobalHubsError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Gets the access control policy for a resource. Returns an empty policy if the resource exists and does not have a policy set. */
export const getIamPolicyProjectsLocationsGlobalHubs: API.OperationMethod<
  GetIamPolicyProjectsLocationsGlobalHubsRequest,
  GetIamPolicyProjectsLocationsGlobalHubsResponse,
  GetIamPolicyProjectsLocationsGlobalHubsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetIamPolicyProjectsLocationsGlobalHubsRequest,
  output: GetIamPolicyProjectsLocationsGlobalHubsResponse,
  errors: [NotFound, Forbidden],
}));

export interface TestIamPermissionsProjectsLocationsGlobalHubsGroupsRequest {
  /** REQUIRED: The resource for which the policy detail is being requested. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field. */
  resource: string;
  /** Request body */
  body?: TestIamPermissionsRequest;
}

export const TestIamPermissionsProjectsLocationsGlobalHubsGroupsRequest =
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
  ) as unknown as Schema.Schema<TestIamPermissionsProjectsLocationsGlobalHubsGroupsRequest>;

export type TestIamPermissionsProjectsLocationsGlobalHubsGroupsResponse =
  TestIamPermissionsResponse;
export const TestIamPermissionsProjectsLocationsGlobalHubsGroupsResponse =
  /*@__PURE__*/ /*#__PURE__*/ TestIamPermissionsResponse;

export type TestIamPermissionsProjectsLocationsGlobalHubsGroupsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Returns permissions that a caller has on the specified resource. If the resource does not exist, this will return an empty set of permissions, not a `NOT_FOUND` error. Note: This operation is designed to be used for building permission-aware UIs and command-line tools, not for authorization checking. This operation may "fail open" without warning. */
export const testIamPermissionsProjectsLocationsGlobalHubsGroups: API.OperationMethod<
  TestIamPermissionsProjectsLocationsGlobalHubsGroupsRequest,
  TestIamPermissionsProjectsLocationsGlobalHubsGroupsResponse,
  TestIamPermissionsProjectsLocationsGlobalHubsGroupsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: TestIamPermissionsProjectsLocationsGlobalHubsGroupsRequest,
  output: TestIamPermissionsProjectsLocationsGlobalHubsGroupsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface GetIamPolicyProjectsLocationsGlobalHubsGroupsRequest {
  /** REQUIRED: The resource for which the policy is being requested. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field. */
  resource: string;
  /** Optional. The maximum policy version that will be used to format the policy. Valid values are 0, 1, and 3. Requests specifying an invalid value will be rejected. Requests for policies with any conditional role bindings must specify version 3. Policies with no conditional role bindings may specify any valid value or leave the field unset. The policy in the response might use the policy version that you specified, or it might use a lower policy version. For example, if you specify version 3, but the policy has no conditional role bindings, the response uses version 1. To learn which resources support conditions in their IAM policies, see the [IAM documentation](https://cloud.google.com/iam/help/conditions/resource-policies). */
  "options.requestedPolicyVersion"?: number;
}

export const GetIamPolicyProjectsLocationsGlobalHubsGroupsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    resource: Schema.String.pipe(T.HttpPath("resource")),
    "options.requestedPolicyVersion": Schema.optional(Schema.Number).pipe(
      T.HttpQuery("options.requestedPolicyVersion"),
    ),
  }).pipe(
    T.Http({ method: "GET", path: "v1/{+resource}:getIamPolicy" }),
    svc,
  ) as unknown as Schema.Schema<GetIamPolicyProjectsLocationsGlobalHubsGroupsRequest>;

export type GetIamPolicyProjectsLocationsGlobalHubsGroupsResponse = Policy;
export const GetIamPolicyProjectsLocationsGlobalHubsGroupsResponse =
  /*@__PURE__*/ /*#__PURE__*/ Policy;

export type GetIamPolicyProjectsLocationsGlobalHubsGroupsError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Gets the access control policy for a resource. Returns an empty policy if the resource exists and does not have a policy set. */
export const getIamPolicyProjectsLocationsGlobalHubsGroups: API.OperationMethod<
  GetIamPolicyProjectsLocationsGlobalHubsGroupsRequest,
  GetIamPolicyProjectsLocationsGlobalHubsGroupsResponse,
  GetIamPolicyProjectsLocationsGlobalHubsGroupsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetIamPolicyProjectsLocationsGlobalHubsGroupsRequest,
  output: GetIamPolicyProjectsLocationsGlobalHubsGroupsResponse,
  errors: [NotFound, Forbidden],
}));

export interface ListProjectsLocationsGlobalHubsGroupsRequest {
  /** Required. The parent resource's name. */
  parent: string;
  /** The maximum number of results to return per page. */
  pageSize?: number;
  /** The page token. */
  pageToken?: string;
  /** Sort the results by a certain order. */
  orderBy?: string;
  /** An expression that filters the list of results. */
  filter?: string;
}

export const ListProjectsLocationsGlobalHubsGroupsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    parent: Schema.String.pipe(T.HttpPath("parent")),
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
    orderBy: Schema.optional(Schema.String).pipe(T.HttpQuery("orderBy")),
    filter: Schema.optional(Schema.String).pipe(T.HttpQuery("filter")),
  }).pipe(
    T.Http({ method: "GET", path: "v1/{+parent}/groups" }),
    svc,
  ) as unknown as Schema.Schema<ListProjectsLocationsGlobalHubsGroupsRequest>;

export type ListProjectsLocationsGlobalHubsGroupsResponse = ListGroupsResponse;
export const ListProjectsLocationsGlobalHubsGroupsResponse =
  /*@__PURE__*/ /*#__PURE__*/ ListGroupsResponse;

export type ListProjectsLocationsGlobalHubsGroupsError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Lists groups in a given hub. */
export const listProjectsLocationsGlobalHubsGroups: API.PaginatedOperationMethod<
  ListProjectsLocationsGlobalHubsGroupsRequest,
  ListProjectsLocationsGlobalHubsGroupsResponse,
  ListProjectsLocationsGlobalHubsGroupsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
  input: ListProjectsLocationsGlobalHubsGroupsRequest,
  output: ListProjectsLocationsGlobalHubsGroupsResponse,
  errors: [NotFound, Forbidden],
  pagination: {
    inputToken: "pageToken",
    outputToken: "nextPageToken",
  },
}));

export interface PatchProjectsLocationsGlobalHubsGroupsRequest {
  /** Immutable. The name of the group. Group names must be unique. They use the following form: `projects/{project_number}/locations/global/hubs/{hub}/groups/{group_id}` */
  name: string;
  /** Optional. In the case of an update to an existing group, field mask is used to specify the fields to be overwritten. The fields specified in the update_mask are relative to the resource, not the full request. A field is overwritten if it is in the mask. If the user does not provide a mask, then all fields are overwritten. */
  updateMask?: string;
  /** Optional. A request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server knows to ignore the request if it has already been completed. The server guarantees that a request doesn't result in creation of duplicate commitments for at least 60 minutes. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check to see whether the original operation was received. If it was, the server ignores the second request. This behavior prevents clients from mistakenly creating duplicate commitments. The request ID must be a valid UUID, with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000). */
  requestId?: string;
  /** Request body */
  body?: Group;
}

export const PatchProjectsLocationsGlobalHubsGroupsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    updateMask: Schema.optional(Schema.String).pipe(T.HttpQuery("updateMask")),
    requestId: Schema.optional(Schema.String).pipe(T.HttpQuery("requestId")),
    body: Schema.optional(Group).pipe(T.HttpBody()),
  }).pipe(
    T.Http({ method: "PATCH", path: "v1/{+name}", hasBody: true }),
    svc,
  ) as unknown as Schema.Schema<PatchProjectsLocationsGlobalHubsGroupsRequest>;

export type PatchProjectsLocationsGlobalHubsGroupsResponse =
  GoogleLongrunningOperation;
export const PatchProjectsLocationsGlobalHubsGroupsResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleLongrunningOperation;

export type PatchProjectsLocationsGlobalHubsGroupsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Updates the parameters of a Network Connectivity Center group. */
export const patchProjectsLocationsGlobalHubsGroups: API.OperationMethod<
  PatchProjectsLocationsGlobalHubsGroupsRequest,
  PatchProjectsLocationsGlobalHubsGroupsResponse,
  PatchProjectsLocationsGlobalHubsGroupsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: PatchProjectsLocationsGlobalHubsGroupsRequest,
  output: PatchProjectsLocationsGlobalHubsGroupsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface SetIamPolicyProjectsLocationsGlobalHubsGroupsRequest {
  /** REQUIRED: The resource for which the policy is being specified. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field. */
  resource: string;
  /** Request body */
  body?: SetIamPolicyRequest;
}

export const SetIamPolicyProjectsLocationsGlobalHubsGroupsRequest =
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
  ) as unknown as Schema.Schema<SetIamPolicyProjectsLocationsGlobalHubsGroupsRequest>;

export type SetIamPolicyProjectsLocationsGlobalHubsGroupsResponse = Policy;
export const SetIamPolicyProjectsLocationsGlobalHubsGroupsResponse =
  /*@__PURE__*/ /*#__PURE__*/ Policy;

export type SetIamPolicyProjectsLocationsGlobalHubsGroupsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Sets the access control policy on the specified resource. Replaces any existing policy. Can return `NOT_FOUND`, `INVALID_ARGUMENT`, and `PERMISSION_DENIED` errors. */
export const setIamPolicyProjectsLocationsGlobalHubsGroups: API.OperationMethod<
  SetIamPolicyProjectsLocationsGlobalHubsGroupsRequest,
  SetIamPolicyProjectsLocationsGlobalHubsGroupsResponse,
  SetIamPolicyProjectsLocationsGlobalHubsGroupsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: SetIamPolicyProjectsLocationsGlobalHubsGroupsRequest,
  output: SetIamPolicyProjectsLocationsGlobalHubsGroupsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface GetProjectsLocationsGlobalHubsGroupsRequest {
  /** Required. The name of the route table resource. */
  name: string;
}

export const GetProjectsLocationsGlobalHubsGroupsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "GET", path: "v1/{+name}" }),
    svc,
  ) as unknown as Schema.Schema<GetProjectsLocationsGlobalHubsGroupsRequest>;

export type GetProjectsLocationsGlobalHubsGroupsResponse = Group;
export const GetProjectsLocationsGlobalHubsGroupsResponse =
  /*@__PURE__*/ /*#__PURE__*/ Group;

export type GetProjectsLocationsGlobalHubsGroupsError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Gets details about a Network Connectivity Center group. */
export const getProjectsLocationsGlobalHubsGroups: API.OperationMethod<
  GetProjectsLocationsGlobalHubsGroupsRequest,
  GetProjectsLocationsGlobalHubsGroupsResponse,
  GetProjectsLocationsGlobalHubsGroupsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetProjectsLocationsGlobalHubsGroupsRequest,
  output: GetProjectsLocationsGlobalHubsGroupsResponse,
  errors: [NotFound, Forbidden],
}));

export interface ListProjectsLocationsGlobalHubsRouteTablesRequest {
  /** Required. The parent resource's name. */
  parent: string;
  /** The maximum number of results to return per page. */
  pageSize?: number;
  /** The page token. */
  pageToken?: string;
  /** Sort the results by a certain order. */
  orderBy?: string;
  /** An expression that filters the list of results. */
  filter?: string;
}

export const ListProjectsLocationsGlobalHubsRouteTablesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    parent: Schema.String.pipe(T.HttpPath("parent")),
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
    orderBy: Schema.optional(Schema.String).pipe(T.HttpQuery("orderBy")),
    filter: Schema.optional(Schema.String).pipe(T.HttpQuery("filter")),
  }).pipe(
    T.Http({ method: "GET", path: "v1/{+parent}/routeTables" }),
    svc,
  ) as unknown as Schema.Schema<ListProjectsLocationsGlobalHubsRouteTablesRequest>;

export type ListProjectsLocationsGlobalHubsRouteTablesResponse =
  ListRouteTablesResponse;
export const ListProjectsLocationsGlobalHubsRouteTablesResponse =
  /*@__PURE__*/ /*#__PURE__*/ ListRouteTablesResponse;

export type ListProjectsLocationsGlobalHubsRouteTablesError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Lists route tables in a given hub. */
export const listProjectsLocationsGlobalHubsRouteTables: API.PaginatedOperationMethod<
  ListProjectsLocationsGlobalHubsRouteTablesRequest,
  ListProjectsLocationsGlobalHubsRouteTablesResponse,
  ListProjectsLocationsGlobalHubsRouteTablesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
  input: ListProjectsLocationsGlobalHubsRouteTablesRequest,
  output: ListProjectsLocationsGlobalHubsRouteTablesResponse,
  errors: [NotFound, Forbidden],
  pagination: {
    inputToken: "pageToken",
    outputToken: "nextPageToken",
  },
}));

export interface GetProjectsLocationsGlobalHubsRouteTablesRequest {
  /** Required. The name of the route table resource. */
  name: string;
}

export const GetProjectsLocationsGlobalHubsRouteTablesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "GET", path: "v1/{+name}" }),
    svc,
  ) as unknown as Schema.Schema<GetProjectsLocationsGlobalHubsRouteTablesRequest>;

export type GetProjectsLocationsGlobalHubsRouteTablesResponse = RouteTable;
export const GetProjectsLocationsGlobalHubsRouteTablesResponse =
  /*@__PURE__*/ /*#__PURE__*/ RouteTable;

export type GetProjectsLocationsGlobalHubsRouteTablesError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Gets details about a Network Connectivity Center route table. */
export const getProjectsLocationsGlobalHubsRouteTables: API.OperationMethod<
  GetProjectsLocationsGlobalHubsRouteTablesRequest,
  GetProjectsLocationsGlobalHubsRouteTablesResponse,
  GetProjectsLocationsGlobalHubsRouteTablesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetProjectsLocationsGlobalHubsRouteTablesRequest,
  output: GetProjectsLocationsGlobalHubsRouteTablesResponse,
  errors: [NotFound, Forbidden],
}));

export interface ListProjectsLocationsGlobalHubsRouteTablesRoutesRequest {
  /** The maximum number of results to return per page. */
  pageSize?: number;
  /** An expression that filters the list of results. */
  filter?: string;
  /** The page token. */
  pageToken?: string;
  /** Sort the results by a certain order. */
  orderBy?: string;
  /** Required. The parent resource's name. */
  parent: string;
}

export const ListProjectsLocationsGlobalHubsRouteTablesRoutesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
    filter: Schema.optional(Schema.String).pipe(T.HttpQuery("filter")),
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
    orderBy: Schema.optional(Schema.String).pipe(T.HttpQuery("orderBy")),
    parent: Schema.String.pipe(T.HttpPath("parent")),
  }).pipe(
    T.Http({ method: "GET", path: "v1/{+parent}/routes" }),
    svc,
  ) as unknown as Schema.Schema<ListProjectsLocationsGlobalHubsRouteTablesRoutesRequest>;

export type ListProjectsLocationsGlobalHubsRouteTablesRoutesResponse =
  ListRoutesResponse;
export const ListProjectsLocationsGlobalHubsRouteTablesRoutesResponse =
  /*@__PURE__*/ /*#__PURE__*/ ListRoutesResponse;

export type ListProjectsLocationsGlobalHubsRouteTablesRoutesError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Lists routes in a given route table. */
export const listProjectsLocationsGlobalHubsRouteTablesRoutes: API.PaginatedOperationMethod<
  ListProjectsLocationsGlobalHubsRouteTablesRoutesRequest,
  ListProjectsLocationsGlobalHubsRouteTablesRoutesResponse,
  ListProjectsLocationsGlobalHubsRouteTablesRoutesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
  input: ListProjectsLocationsGlobalHubsRouteTablesRoutesRequest,
  output: ListProjectsLocationsGlobalHubsRouteTablesRoutesResponse,
  errors: [NotFound, Forbidden],
  pagination: {
    inputToken: "pageToken",
    outputToken: "nextPageToken",
  },
}));

export interface GetProjectsLocationsGlobalHubsRouteTablesRoutesRequest {
  /** Required. The name of the route resource. */
  name: string;
}

export const GetProjectsLocationsGlobalHubsRouteTablesRoutesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "GET", path: "v1/{+name}" }),
    svc,
  ) as unknown as Schema.Schema<GetProjectsLocationsGlobalHubsRouteTablesRoutesRequest>;

export type GetProjectsLocationsGlobalHubsRouteTablesRoutesResponse = Route;
export const GetProjectsLocationsGlobalHubsRouteTablesRoutesResponse =
  /*@__PURE__*/ /*#__PURE__*/ Route;

export type GetProjectsLocationsGlobalHubsRouteTablesRoutesError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Gets details about the specified route. */
export const getProjectsLocationsGlobalHubsRouteTablesRoutes: API.OperationMethod<
  GetProjectsLocationsGlobalHubsRouteTablesRoutesRequest,
  GetProjectsLocationsGlobalHubsRouteTablesRoutesResponse,
  GetProjectsLocationsGlobalHubsRouteTablesRoutesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetProjectsLocationsGlobalHubsRouteTablesRoutesRequest,
  output: GetProjectsLocationsGlobalHubsRouteTablesRoutesResponse,
  errors: [NotFound, Forbidden],
}));

export interface ListProjectsLocationsGlobalPolicyBasedRoutesRequest {
  /** A filter expression that filters the results listed in the response. */
  filter?: string;
  /** The page token. */
  pageToken?: string;
  /** Sort the results by a certain order. */
  orderBy?: string;
  /** The maximum number of results per page that should be returned. */
  pageSize?: number;
  /** Required. The parent resource's name. */
  parent: string;
}

export const ListProjectsLocationsGlobalPolicyBasedRoutesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    filter: Schema.optional(Schema.String).pipe(T.HttpQuery("filter")),
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
    orderBy: Schema.optional(Schema.String).pipe(T.HttpQuery("orderBy")),
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
    parent: Schema.String.pipe(T.HttpPath("parent")),
  }).pipe(
    T.Http({ method: "GET", path: "v1/{+parent}/policyBasedRoutes" }),
    svc,
  ) as unknown as Schema.Schema<ListProjectsLocationsGlobalPolicyBasedRoutesRequest>;

export type ListProjectsLocationsGlobalPolicyBasedRoutesResponse =
  ListPolicyBasedRoutesResponse;
export const ListProjectsLocationsGlobalPolicyBasedRoutesResponse =
  /*@__PURE__*/ /*#__PURE__*/ ListPolicyBasedRoutesResponse;

export type ListProjectsLocationsGlobalPolicyBasedRoutesError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Lists policy-based routes in a given project and location. */
export const listProjectsLocationsGlobalPolicyBasedRoutes: API.PaginatedOperationMethod<
  ListProjectsLocationsGlobalPolicyBasedRoutesRequest,
  ListProjectsLocationsGlobalPolicyBasedRoutesResponse,
  ListProjectsLocationsGlobalPolicyBasedRoutesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
  input: ListProjectsLocationsGlobalPolicyBasedRoutesRequest,
  output: ListProjectsLocationsGlobalPolicyBasedRoutesResponse,
  errors: [NotFound, Forbidden],
  pagination: {
    inputToken: "pageToken",
    outputToken: "nextPageToken",
  },
}));

export interface DeleteProjectsLocationsGlobalPolicyBasedRoutesRequest {
  /** Required. Name of the policy-based route resource to delete. */
  name: string;
  /** Optional. An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server knows to ignore the request if it has already been completed. The server guarantees that for at least 60 minutes after the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, ignores the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000). */
  requestId?: string;
}

export const DeleteProjectsLocationsGlobalPolicyBasedRoutesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    requestId: Schema.optional(Schema.String).pipe(T.HttpQuery("requestId")),
  }).pipe(
    T.Http({ method: "DELETE", path: "v1/{+name}" }),
    svc,
  ) as unknown as Schema.Schema<DeleteProjectsLocationsGlobalPolicyBasedRoutesRequest>;

export type DeleteProjectsLocationsGlobalPolicyBasedRoutesResponse =
  GoogleLongrunningOperation;
export const DeleteProjectsLocationsGlobalPolicyBasedRoutesResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleLongrunningOperation;

export type DeleteProjectsLocationsGlobalPolicyBasedRoutesError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Deletes a single policy-based route. */
export const deleteProjectsLocationsGlobalPolicyBasedRoutes: API.OperationMethod<
  DeleteProjectsLocationsGlobalPolicyBasedRoutesRequest,
  DeleteProjectsLocationsGlobalPolicyBasedRoutesResponse,
  DeleteProjectsLocationsGlobalPolicyBasedRoutesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: DeleteProjectsLocationsGlobalPolicyBasedRoutesRequest,
  output: DeleteProjectsLocationsGlobalPolicyBasedRoutesResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface SetIamPolicyProjectsLocationsGlobalPolicyBasedRoutesRequest {
  /** REQUIRED: The resource for which the policy is being specified. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field. */
  resource: string;
  /** Request body */
  body?: SetIamPolicyRequest;
}

export const SetIamPolicyProjectsLocationsGlobalPolicyBasedRoutesRequest =
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
  ) as unknown as Schema.Schema<SetIamPolicyProjectsLocationsGlobalPolicyBasedRoutesRequest>;

export type SetIamPolicyProjectsLocationsGlobalPolicyBasedRoutesResponse =
  Policy;
export const SetIamPolicyProjectsLocationsGlobalPolicyBasedRoutesResponse =
  /*@__PURE__*/ /*#__PURE__*/ Policy;

export type SetIamPolicyProjectsLocationsGlobalPolicyBasedRoutesError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Sets the access control policy on the specified resource. Replaces any existing policy. Can return `NOT_FOUND`, `INVALID_ARGUMENT`, and `PERMISSION_DENIED` errors. */
export const setIamPolicyProjectsLocationsGlobalPolicyBasedRoutes: API.OperationMethod<
  SetIamPolicyProjectsLocationsGlobalPolicyBasedRoutesRequest,
  SetIamPolicyProjectsLocationsGlobalPolicyBasedRoutesResponse,
  SetIamPolicyProjectsLocationsGlobalPolicyBasedRoutesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: SetIamPolicyProjectsLocationsGlobalPolicyBasedRoutesRequest,
  output: SetIamPolicyProjectsLocationsGlobalPolicyBasedRoutesResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface GetProjectsLocationsGlobalPolicyBasedRoutesRequest {
  /** Required. Name of the PolicyBasedRoute resource to get. */
  name: string;
}

export const GetProjectsLocationsGlobalPolicyBasedRoutesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "GET", path: "v1/{+name}" }),
    svc,
  ) as unknown as Schema.Schema<GetProjectsLocationsGlobalPolicyBasedRoutesRequest>;

export type GetProjectsLocationsGlobalPolicyBasedRoutesResponse =
  PolicyBasedRoute;
export const GetProjectsLocationsGlobalPolicyBasedRoutesResponse =
  /*@__PURE__*/ /*#__PURE__*/ PolicyBasedRoute;

export type GetProjectsLocationsGlobalPolicyBasedRoutesError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Gets details of a single policy-based route. */
export const getProjectsLocationsGlobalPolicyBasedRoutes: API.OperationMethod<
  GetProjectsLocationsGlobalPolicyBasedRoutesRequest,
  GetProjectsLocationsGlobalPolicyBasedRoutesResponse,
  GetProjectsLocationsGlobalPolicyBasedRoutesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetProjectsLocationsGlobalPolicyBasedRoutesRequest,
  output: GetProjectsLocationsGlobalPolicyBasedRoutesResponse,
  errors: [NotFound, Forbidden],
}));

export interface CreateProjectsLocationsGlobalPolicyBasedRoutesRequest {
  /** Required. The parent resource's name of the PolicyBasedRoute. */
  parent: string;
  /** Optional. An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server knows to ignore the request if it has already been completed. The server guarantees that for at least 60 minutes since the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, ignores the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000). */
  requestId?: string;
  /** Required. Unique id for the policy-based route to create. Provided by the client when the resource is created. The name must comply with https://google.aip.dev/122#resource-id-segments. Specifically, the name must be 1-63 characters long and match the regular expression [a-z]([a-z0-9-]*[a-z0-9])?. The first character must be a lowercase letter, and all following characters (except for the last character) must be a dash, lowercase letter, or digit. The last character must be a lowercase letter or digit. */
  policyBasedRouteId?: string;
  /** Request body */
  body?: PolicyBasedRoute;
}

export const CreateProjectsLocationsGlobalPolicyBasedRoutesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    parent: Schema.String.pipe(T.HttpPath("parent")),
    requestId: Schema.optional(Schema.String).pipe(T.HttpQuery("requestId")),
    policyBasedRouteId: Schema.optional(Schema.String).pipe(
      T.HttpQuery("policyBasedRouteId"),
    ),
    body: Schema.optional(PolicyBasedRoute).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v1/{+parent}/policyBasedRoutes",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<CreateProjectsLocationsGlobalPolicyBasedRoutesRequest>;

export type CreateProjectsLocationsGlobalPolicyBasedRoutesResponse =
  GoogleLongrunningOperation;
export const CreateProjectsLocationsGlobalPolicyBasedRoutesResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleLongrunningOperation;

export type CreateProjectsLocationsGlobalPolicyBasedRoutesError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Creates a new policy-based route in a given project and location. */
export const createProjectsLocationsGlobalPolicyBasedRoutes: API.OperationMethod<
  CreateProjectsLocationsGlobalPolicyBasedRoutesRequest,
  CreateProjectsLocationsGlobalPolicyBasedRoutesResponse,
  CreateProjectsLocationsGlobalPolicyBasedRoutesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: CreateProjectsLocationsGlobalPolicyBasedRoutesRequest,
  output: CreateProjectsLocationsGlobalPolicyBasedRoutesResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface TestIamPermissionsProjectsLocationsGlobalPolicyBasedRoutesRequest {
  /** REQUIRED: The resource for which the policy detail is being requested. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field. */
  resource: string;
  /** Request body */
  body?: TestIamPermissionsRequest;
}

export const TestIamPermissionsProjectsLocationsGlobalPolicyBasedRoutesRequest =
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
  ) as unknown as Schema.Schema<TestIamPermissionsProjectsLocationsGlobalPolicyBasedRoutesRequest>;

export type TestIamPermissionsProjectsLocationsGlobalPolicyBasedRoutesResponse =
  TestIamPermissionsResponse;
export const TestIamPermissionsProjectsLocationsGlobalPolicyBasedRoutesResponse =
  /*@__PURE__*/ /*#__PURE__*/ TestIamPermissionsResponse;

export type TestIamPermissionsProjectsLocationsGlobalPolicyBasedRoutesError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Returns permissions that a caller has on the specified resource. If the resource does not exist, this will return an empty set of permissions, not a `NOT_FOUND` error. Note: This operation is designed to be used for building permission-aware UIs and command-line tools, not for authorization checking. This operation may "fail open" without warning. */
export const testIamPermissionsProjectsLocationsGlobalPolicyBasedRoutes: API.OperationMethod<
  TestIamPermissionsProjectsLocationsGlobalPolicyBasedRoutesRequest,
  TestIamPermissionsProjectsLocationsGlobalPolicyBasedRoutesResponse,
  TestIamPermissionsProjectsLocationsGlobalPolicyBasedRoutesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: TestIamPermissionsProjectsLocationsGlobalPolicyBasedRoutesRequest,
  output: TestIamPermissionsProjectsLocationsGlobalPolicyBasedRoutesResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface GetIamPolicyProjectsLocationsGlobalPolicyBasedRoutesRequest {
  /** REQUIRED: The resource for which the policy is being requested. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field. */
  resource: string;
  /** Optional. The maximum policy version that will be used to format the policy. Valid values are 0, 1, and 3. Requests specifying an invalid value will be rejected. Requests for policies with any conditional role bindings must specify version 3. Policies with no conditional role bindings may specify any valid value or leave the field unset. The policy in the response might use the policy version that you specified, or it might use a lower policy version. For example, if you specify version 3, but the policy has no conditional role bindings, the response uses version 1. To learn which resources support conditions in their IAM policies, see the [IAM documentation](https://cloud.google.com/iam/help/conditions/resource-policies). */
  "options.requestedPolicyVersion"?: number;
}

export const GetIamPolicyProjectsLocationsGlobalPolicyBasedRoutesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    resource: Schema.String.pipe(T.HttpPath("resource")),
    "options.requestedPolicyVersion": Schema.optional(Schema.Number).pipe(
      T.HttpQuery("options.requestedPolicyVersion"),
    ),
  }).pipe(
    T.Http({ method: "GET", path: "v1/{+resource}:getIamPolicy" }),
    svc,
  ) as unknown as Schema.Schema<GetIamPolicyProjectsLocationsGlobalPolicyBasedRoutesRequest>;

export type GetIamPolicyProjectsLocationsGlobalPolicyBasedRoutesResponse =
  Policy;
export const GetIamPolicyProjectsLocationsGlobalPolicyBasedRoutesResponse =
  /*@__PURE__*/ /*#__PURE__*/ Policy;

export type GetIamPolicyProjectsLocationsGlobalPolicyBasedRoutesError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Gets the access control policy for a resource. Returns an empty policy if the resource exists and does not have a policy set. */
export const getIamPolicyProjectsLocationsGlobalPolicyBasedRoutes: API.OperationMethod<
  GetIamPolicyProjectsLocationsGlobalPolicyBasedRoutesRequest,
  GetIamPolicyProjectsLocationsGlobalPolicyBasedRoutesResponse,
  GetIamPolicyProjectsLocationsGlobalPolicyBasedRoutesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetIamPolicyProjectsLocationsGlobalPolicyBasedRoutesRequest,
  output: GetIamPolicyProjectsLocationsGlobalPolicyBasedRoutesResponse,
  errors: [NotFound, Forbidden],
}));

export interface PatchProjectsLocationsSpokesRequest {
  /** Optional. In the case of an update to an existing spoke, field mask is used to specify the fields to be overwritten. The fields specified in the update_mask are relative to the resource, not the full request. A field is overwritten if it is in the mask. If the user does not provide a mask, then all fields are overwritten. */
  updateMask?: string;
  /** Optional. A request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server knows to ignore the request if it has already been completed. The server guarantees that a request doesn't result in creation of duplicate commitments for at least 60 minutes. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check to see whether the original operation was received. If it was, the server ignores the second request. This behavior prevents clients from mistakenly creating duplicate commitments. The request ID must be a valid UUID, with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000). */
  requestId?: string;
  /** Immutable. The name of the spoke. Spoke names must be unique. They use the following form: `projects/{project_number}/locations/{region}/spokes/{spoke_id}` */
  name: string;
  /** Request body */
  body?: Spoke;
}

export const PatchProjectsLocationsSpokesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    updateMask: Schema.optional(Schema.String).pipe(T.HttpQuery("updateMask")),
    requestId: Schema.optional(Schema.String).pipe(T.HttpQuery("requestId")),
    name: Schema.String.pipe(T.HttpPath("name")),
    body: Schema.optional(Spoke).pipe(T.HttpBody()),
  }).pipe(
    T.Http({ method: "PATCH", path: "v1/{+name}", hasBody: true }),
    svc,
  ) as unknown as Schema.Schema<PatchProjectsLocationsSpokesRequest>;

export type PatchProjectsLocationsSpokesResponse = GoogleLongrunningOperation;
export const PatchProjectsLocationsSpokesResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleLongrunningOperation;

export type PatchProjectsLocationsSpokesError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Updates the parameters of a Network Connectivity Center spoke. */
export const patchProjectsLocationsSpokes: API.OperationMethod<
  PatchProjectsLocationsSpokesRequest,
  PatchProjectsLocationsSpokesResponse,
  PatchProjectsLocationsSpokesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: PatchProjectsLocationsSpokesRequest,
  output: PatchProjectsLocationsSpokesResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface SetIamPolicyProjectsLocationsSpokesRequest {
  /** REQUIRED: The resource for which the policy is being specified. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field. */
  resource: string;
  /** Request body */
  body?: SetIamPolicyRequest;
}

export const SetIamPolicyProjectsLocationsSpokesRequest =
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
  ) as unknown as Schema.Schema<SetIamPolicyProjectsLocationsSpokesRequest>;

export type SetIamPolicyProjectsLocationsSpokesResponse = Policy;
export const SetIamPolicyProjectsLocationsSpokesResponse =
  /*@__PURE__*/ /*#__PURE__*/ Policy;

export type SetIamPolicyProjectsLocationsSpokesError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Sets the access control policy on the specified resource. Replaces any existing policy. Can return `NOT_FOUND`, `INVALID_ARGUMENT`, and `PERMISSION_DENIED` errors. */
export const setIamPolicyProjectsLocationsSpokes: API.OperationMethod<
  SetIamPolicyProjectsLocationsSpokesRequest,
  SetIamPolicyProjectsLocationsSpokesResponse,
  SetIamPolicyProjectsLocationsSpokesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: SetIamPolicyProjectsLocationsSpokesRequest,
  output: SetIamPolicyProjectsLocationsSpokesResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface GetProjectsLocationsSpokesRequest {
  /** Required. The name of the spoke resource. */
  name: string;
}

export const GetProjectsLocationsSpokesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "GET", path: "v1/{+name}" }),
    svc,
  ) as unknown as Schema.Schema<GetProjectsLocationsSpokesRequest>;

export type GetProjectsLocationsSpokesResponse = Spoke;
export const GetProjectsLocationsSpokesResponse =
  /*@__PURE__*/ /*#__PURE__*/ Spoke;

export type GetProjectsLocationsSpokesError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Gets details about a Network Connectivity Center spoke. */
export const getProjectsLocationsSpokes: API.OperationMethod<
  GetProjectsLocationsSpokesRequest,
  GetProjectsLocationsSpokesResponse,
  GetProjectsLocationsSpokesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetProjectsLocationsSpokesRequest,
  output: GetProjectsLocationsSpokesResponse,
  errors: [NotFound, Forbidden],
}));

export interface ListProjectsLocationsSpokesRequest {
  /** An expression that filters the list of results. */
  filter?: string;
  /** The page token. */
  pageToken?: string;
  /** Sort the results by a certain order. */
  orderBy?: string;
  /** The maximum number of results to return per page. */
  pageSize?: number;
  /** Required. The parent resource. */
  parent: string;
}

export const ListProjectsLocationsSpokesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    filter: Schema.optional(Schema.String).pipe(T.HttpQuery("filter")),
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
    orderBy: Schema.optional(Schema.String).pipe(T.HttpQuery("orderBy")),
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
    parent: Schema.String.pipe(T.HttpPath("parent")),
  }).pipe(
    T.Http({ method: "GET", path: "v1/{+parent}/spokes" }),
    svc,
  ) as unknown as Schema.Schema<ListProjectsLocationsSpokesRequest>;

export type ListProjectsLocationsSpokesResponse = ListSpokesResponse;
export const ListProjectsLocationsSpokesResponse =
  /*@__PURE__*/ /*#__PURE__*/ ListSpokesResponse;

export type ListProjectsLocationsSpokesError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Lists the Network Connectivity Center spokes in a specified project and location. */
export const listProjectsLocationsSpokes: API.PaginatedOperationMethod<
  ListProjectsLocationsSpokesRequest,
  ListProjectsLocationsSpokesResponse,
  ListProjectsLocationsSpokesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
  input: ListProjectsLocationsSpokesRequest,
  output: ListProjectsLocationsSpokesResponse,
  errors: [NotFound, Forbidden],
  pagination: {
    inputToken: "pageToken",
    outputToken: "nextPageToken",
  },
}));

export interface DeleteProjectsLocationsSpokesRequest {
  /** Required. The name of the spoke to delete. */
  name: string;
  /** Optional. A request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server knows to ignore the request if it has already been completed. The server guarantees that a request doesn't result in creation of duplicate commitments for at least 60 minutes. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check to see whether the original operation was received. If it was, the server ignores the second request. This behavior prevents clients from mistakenly creating duplicate commitments. The request ID must be a valid UUID, with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000). */
  requestId?: string;
}

export const DeleteProjectsLocationsSpokesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    requestId: Schema.optional(Schema.String).pipe(T.HttpQuery("requestId")),
  }).pipe(
    T.Http({ method: "DELETE", path: "v1/{+name}" }),
    svc,
  ) as unknown as Schema.Schema<DeleteProjectsLocationsSpokesRequest>;

export type DeleteProjectsLocationsSpokesResponse = GoogleLongrunningOperation;
export const DeleteProjectsLocationsSpokesResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleLongrunningOperation;

export type DeleteProjectsLocationsSpokesError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Deletes a Network Connectivity Center spoke. */
export const deleteProjectsLocationsSpokes: API.OperationMethod<
  DeleteProjectsLocationsSpokesRequest,
  DeleteProjectsLocationsSpokesResponse,
  DeleteProjectsLocationsSpokesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: DeleteProjectsLocationsSpokesRequest,
  output: DeleteProjectsLocationsSpokesResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface GetIamPolicyProjectsLocationsSpokesRequest {
  /** REQUIRED: The resource for which the policy is being requested. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field. */
  resource: string;
  /** Optional. The maximum policy version that will be used to format the policy. Valid values are 0, 1, and 3. Requests specifying an invalid value will be rejected. Requests for policies with any conditional role bindings must specify version 3. Policies with no conditional role bindings may specify any valid value or leave the field unset. The policy in the response might use the policy version that you specified, or it might use a lower policy version. For example, if you specify version 3, but the policy has no conditional role bindings, the response uses version 1. To learn which resources support conditions in their IAM policies, see the [IAM documentation](https://cloud.google.com/iam/help/conditions/resource-policies). */
  "options.requestedPolicyVersion"?: number;
}

export const GetIamPolicyProjectsLocationsSpokesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    resource: Schema.String.pipe(T.HttpPath("resource")),
    "options.requestedPolicyVersion": Schema.optional(Schema.Number).pipe(
      T.HttpQuery("options.requestedPolicyVersion"),
    ),
  }).pipe(
    T.Http({ method: "GET", path: "v1/{+resource}:getIamPolicy" }),
    svc,
  ) as unknown as Schema.Schema<GetIamPolicyProjectsLocationsSpokesRequest>;

export type GetIamPolicyProjectsLocationsSpokesResponse = Policy;
export const GetIamPolicyProjectsLocationsSpokesResponse =
  /*@__PURE__*/ /*#__PURE__*/ Policy;

export type GetIamPolicyProjectsLocationsSpokesError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Gets the access control policy for a resource. Returns an empty policy if the resource exists and does not have a policy set. */
export const getIamPolicyProjectsLocationsSpokes: API.OperationMethod<
  GetIamPolicyProjectsLocationsSpokesRequest,
  GetIamPolicyProjectsLocationsSpokesResponse,
  GetIamPolicyProjectsLocationsSpokesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetIamPolicyProjectsLocationsSpokesRequest,
  output: GetIamPolicyProjectsLocationsSpokesResponse,
  errors: [NotFound, Forbidden],
}));

export interface CreateProjectsLocationsSpokesRequest {
  /** Optional. A request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server knows to ignore the request if it has already been completed. The server guarantees that a request doesn't result in creation of duplicate commitments for at least 60 minutes. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check to see whether the original operation was received. If it was, the server ignores the second request. This behavior prevents clients from mistakenly creating duplicate commitments. The request ID must be a valid UUID, with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000). */
  requestId?: string;
  /** Required. The parent resource. */
  parent: string;
  /** Required. Unique id for the spoke to create. */
  spokeId?: string;
  /** Request body */
  body?: Spoke;
}

export const CreateProjectsLocationsSpokesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    requestId: Schema.optional(Schema.String).pipe(T.HttpQuery("requestId")),
    parent: Schema.String.pipe(T.HttpPath("parent")),
    spokeId: Schema.optional(Schema.String).pipe(T.HttpQuery("spokeId")),
    body: Schema.optional(Spoke).pipe(T.HttpBody()),
  }).pipe(
    T.Http({ method: "POST", path: "v1/{+parent}/spokes", hasBody: true }),
    svc,
  ) as unknown as Schema.Schema<CreateProjectsLocationsSpokesRequest>;

export type CreateProjectsLocationsSpokesResponse = GoogleLongrunningOperation;
export const CreateProjectsLocationsSpokesResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleLongrunningOperation;

export type CreateProjectsLocationsSpokesError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Creates a Network Connectivity Center spoke. */
export const createProjectsLocationsSpokes: API.OperationMethod<
  CreateProjectsLocationsSpokesRequest,
  CreateProjectsLocationsSpokesResponse,
  CreateProjectsLocationsSpokesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: CreateProjectsLocationsSpokesRequest,
  output: CreateProjectsLocationsSpokesResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface TestIamPermissionsProjectsLocationsSpokesRequest {
  /** REQUIRED: The resource for which the policy detail is being requested. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field. */
  resource: string;
  /** Request body */
  body?: TestIamPermissionsRequest;
}

export const TestIamPermissionsProjectsLocationsSpokesRequest =
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
  ) as unknown as Schema.Schema<TestIamPermissionsProjectsLocationsSpokesRequest>;

export type TestIamPermissionsProjectsLocationsSpokesResponse =
  TestIamPermissionsResponse;
export const TestIamPermissionsProjectsLocationsSpokesResponse =
  /*@__PURE__*/ /*#__PURE__*/ TestIamPermissionsResponse;

export type TestIamPermissionsProjectsLocationsSpokesError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Returns permissions that a caller has on the specified resource. If the resource does not exist, this will return an empty set of permissions, not a `NOT_FOUND` error. Note: This operation is designed to be used for building permission-aware UIs and command-line tools, not for authorization checking. This operation may "fail open" without warning. */
export const testIamPermissionsProjectsLocationsSpokes: API.OperationMethod<
  TestIamPermissionsProjectsLocationsSpokesRequest,
  TestIamPermissionsProjectsLocationsSpokesResponse,
  TestIamPermissionsProjectsLocationsSpokesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: TestIamPermissionsProjectsLocationsSpokesRequest,
  output: TestIamPermissionsProjectsLocationsSpokesResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface GetProjectsLocationsRemoteTransportProfilesRequest {
  /** Required. Name of the resource. */
  name: string;
}

export const GetProjectsLocationsRemoteTransportProfilesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "GET", path: "v1/{+name}" }),
    svc,
  ) as unknown as Schema.Schema<GetProjectsLocationsRemoteTransportProfilesRequest>;

export type GetProjectsLocationsRemoteTransportProfilesResponse =
  RemoteTransportProfile;
export const GetProjectsLocationsRemoteTransportProfilesResponse =
  /*@__PURE__*/ /*#__PURE__*/ RemoteTransportProfile;

export type GetProjectsLocationsRemoteTransportProfilesError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Gets details of a single RemoteTransportProfile. */
export const getProjectsLocationsRemoteTransportProfiles: API.OperationMethod<
  GetProjectsLocationsRemoteTransportProfilesRequest,
  GetProjectsLocationsRemoteTransportProfilesResponse,
  GetProjectsLocationsRemoteTransportProfilesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetProjectsLocationsRemoteTransportProfilesRequest,
  output: GetProjectsLocationsRemoteTransportProfilesResponse,
  errors: [NotFound, Forbidden],
}));

export interface ListProjectsLocationsRemoteTransportProfilesRequest {
  /** Required. Parent value for ListRemoteTransportProfilesRequest. */
  parent: string;
  /** Optional. Requested page size. Server may return fewer items than requested. If unspecified, server will pick an appropriate default. */
  pageSize?: number;
  /** Optional. Filtering results. */
  filter?: string;
  /** Optional. A token identifying a page of results the server should return. */
  pageToken?: string;
  /** Optional. Hint for how to order the results. */
  orderBy?: string;
}

export const ListProjectsLocationsRemoteTransportProfilesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    parent: Schema.String.pipe(T.HttpPath("parent")),
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
    filter: Schema.optional(Schema.String).pipe(T.HttpQuery("filter")),
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
    orderBy: Schema.optional(Schema.String).pipe(T.HttpQuery("orderBy")),
  }).pipe(
    T.Http({ method: "GET", path: "v1/{+parent}/remoteTransportProfiles" }),
    svc,
  ) as unknown as Schema.Schema<ListProjectsLocationsRemoteTransportProfilesRequest>;

export type ListProjectsLocationsRemoteTransportProfilesResponse =
  ListRemoteTransportProfilesResponse;
export const ListProjectsLocationsRemoteTransportProfilesResponse =
  /*@__PURE__*/ /*#__PURE__*/ ListRemoteTransportProfilesResponse;

export type ListProjectsLocationsRemoteTransportProfilesError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Lists RemoteTransportProfiles in a given project and location. */
export const listProjectsLocationsRemoteTransportProfiles: API.PaginatedOperationMethod<
  ListProjectsLocationsRemoteTransportProfilesRequest,
  ListProjectsLocationsRemoteTransportProfilesResponse,
  ListProjectsLocationsRemoteTransportProfilesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
  input: ListProjectsLocationsRemoteTransportProfilesRequest,
  output: ListProjectsLocationsRemoteTransportProfilesResponse,
  errors: [NotFound, Forbidden],
  pagination: {
    inputToken: "pageToken",
    outputToken: "nextPageToken",
  },
}));

export interface DeleteProjectsLocationsServiceConnectionTokensRequest {
  /** Required. The name of the ServiceConnectionToken to delete. */
  name: string;
  /** Optional. An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes after the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000). */
  requestId?: string;
  /** Optional. The etag is computed by the server, and may be sent on update and delete requests to ensure the client has an up-to-date value before proceeding. */
  etag?: string;
}

export const DeleteProjectsLocationsServiceConnectionTokensRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    requestId: Schema.optional(Schema.String).pipe(T.HttpQuery("requestId")),
    etag: Schema.optional(Schema.String).pipe(T.HttpQuery("etag")),
  }).pipe(
    T.Http({ method: "DELETE", path: "v1/{+name}" }),
    svc,
  ) as unknown as Schema.Schema<DeleteProjectsLocationsServiceConnectionTokensRequest>;

export type DeleteProjectsLocationsServiceConnectionTokensResponse =
  GoogleLongrunningOperation;
export const DeleteProjectsLocationsServiceConnectionTokensResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleLongrunningOperation;

export type DeleteProjectsLocationsServiceConnectionTokensError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Deletes a single ServiceConnectionToken. */
export const deleteProjectsLocationsServiceConnectionTokens: API.OperationMethod<
  DeleteProjectsLocationsServiceConnectionTokensRequest,
  DeleteProjectsLocationsServiceConnectionTokensResponse,
  DeleteProjectsLocationsServiceConnectionTokensError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: DeleteProjectsLocationsServiceConnectionTokensRequest,
  output: DeleteProjectsLocationsServiceConnectionTokensResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface ListProjectsLocationsServiceConnectionTokensRequest {
  /** Required. The parent resource's name. ex. projects/123/locations/us-east1 */
  parent: string;
  /** The page token. */
  pageToken?: string;
  /** Sort the results by a certain order. */
  orderBy?: string;
  /** A filter expression that filters the results listed in the response. */
  filter?: string;
  /** The maximum number of results per page that should be returned. */
  pageSize?: number;
}

export const ListProjectsLocationsServiceConnectionTokensRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    parent: Schema.String.pipe(T.HttpPath("parent")),
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
    orderBy: Schema.optional(Schema.String).pipe(T.HttpQuery("orderBy")),
    filter: Schema.optional(Schema.String).pipe(T.HttpQuery("filter")),
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
  }).pipe(
    T.Http({ method: "GET", path: "v1/{+parent}/serviceConnectionTokens" }),
    svc,
  ) as unknown as Schema.Schema<ListProjectsLocationsServiceConnectionTokensRequest>;

export type ListProjectsLocationsServiceConnectionTokensResponse =
  ListServiceConnectionTokensResponse;
export const ListProjectsLocationsServiceConnectionTokensResponse =
  /*@__PURE__*/ /*#__PURE__*/ ListServiceConnectionTokensResponse;

export type ListProjectsLocationsServiceConnectionTokensError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Lists ServiceConnectionTokens in a given project and location. */
export const listProjectsLocationsServiceConnectionTokens: API.PaginatedOperationMethod<
  ListProjectsLocationsServiceConnectionTokensRequest,
  ListProjectsLocationsServiceConnectionTokensResponse,
  ListProjectsLocationsServiceConnectionTokensError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
  input: ListProjectsLocationsServiceConnectionTokensRequest,
  output: ListProjectsLocationsServiceConnectionTokensResponse,
  errors: [NotFound, Forbidden],
  pagination: {
    inputToken: "pageToken",
    outputToken: "nextPageToken",
  },
}));

export interface CreateProjectsLocationsServiceConnectionTokensRequest {
  /** Optional. Resource ID (i.e. 'foo' in '[...]/projects/p/locations/l/ServiceConnectionTokens/foo') See https://google.aip.dev/122#resource-id-segments Unique per location. If one is not provided, one will be generated. */
  serviceConnectionTokenId?: string;
  /** Optional. An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes since the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000). */
  requestId?: string;
  /** Required. The parent resource's name of the ServiceConnectionToken. ex. projects/123/locations/us-east1 */
  parent: string;
  /** Request body */
  body?: ServiceConnectionToken;
}

export const CreateProjectsLocationsServiceConnectionTokensRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    serviceConnectionTokenId: Schema.optional(Schema.String).pipe(
      T.HttpQuery("serviceConnectionTokenId"),
    ),
    requestId: Schema.optional(Schema.String).pipe(T.HttpQuery("requestId")),
    parent: Schema.String.pipe(T.HttpPath("parent")),
    body: Schema.optional(ServiceConnectionToken).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v1/{+parent}/serviceConnectionTokens",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<CreateProjectsLocationsServiceConnectionTokensRequest>;

export type CreateProjectsLocationsServiceConnectionTokensResponse =
  GoogleLongrunningOperation;
export const CreateProjectsLocationsServiceConnectionTokensResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleLongrunningOperation;

export type CreateProjectsLocationsServiceConnectionTokensError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Creates a new ServiceConnectionToken in a given project and location. */
export const createProjectsLocationsServiceConnectionTokens: API.OperationMethod<
  CreateProjectsLocationsServiceConnectionTokensRequest,
  CreateProjectsLocationsServiceConnectionTokensResponse,
  CreateProjectsLocationsServiceConnectionTokensError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: CreateProjectsLocationsServiceConnectionTokensRequest,
  output: CreateProjectsLocationsServiceConnectionTokensResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface GetProjectsLocationsServiceConnectionTokensRequest {
  /** Required. Name of the ServiceConnectionToken to get. */
  name: string;
}

export const GetProjectsLocationsServiceConnectionTokensRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "GET", path: "v1/{+name}" }),
    svc,
  ) as unknown as Schema.Schema<GetProjectsLocationsServiceConnectionTokensRequest>;

export type GetProjectsLocationsServiceConnectionTokensResponse =
  ServiceConnectionToken;
export const GetProjectsLocationsServiceConnectionTokensResponse =
  /*@__PURE__*/ /*#__PURE__*/ ServiceConnectionToken;

export type GetProjectsLocationsServiceConnectionTokensError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Gets details of a single ServiceConnectionToken. */
export const getProjectsLocationsServiceConnectionTokens: API.OperationMethod<
  GetProjectsLocationsServiceConnectionTokensRequest,
  GetProjectsLocationsServiceConnectionTokensResponse,
  GetProjectsLocationsServiceConnectionTokensError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetProjectsLocationsServiceConnectionTokensRequest,
  output: GetProjectsLocationsServiceConnectionTokensResponse,
  errors: [NotFound, Forbidden],
}));
