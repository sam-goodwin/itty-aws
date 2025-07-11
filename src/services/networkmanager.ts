import type { Effect, Data } from "effect";
import type { CommonAwsError } from "../client.ts";

export interface NetworkManager {
  acceptAttachment(
    input: AcceptAttachmentRequest,
  ): Effect.Effect<
    AcceptAttachmentResponse,
    AccessDeniedException | ConflictException | InternalServerException | ResourceNotFoundException | ThrottlingException | ValidationException | CommonAwsError
  >;
  associateConnectPeer(
    input: AssociateConnectPeerRequest,
  ): Effect.Effect<
    AssociateConnectPeerResponse,
    AccessDeniedException | ConflictException | InternalServerException | ResourceNotFoundException | ServiceQuotaExceededException | ThrottlingException | ValidationException | CommonAwsError
  >;
  associateCustomerGateway(
    input: AssociateCustomerGatewayRequest,
  ): Effect.Effect<
    AssociateCustomerGatewayResponse,
    AccessDeniedException | ConflictException | InternalServerException | ResourceNotFoundException | ServiceQuotaExceededException | ThrottlingException | ValidationException | CommonAwsError
  >;
  associateLink(
    input: AssociateLinkRequest,
  ): Effect.Effect<
    AssociateLinkResponse,
    AccessDeniedException | ConflictException | InternalServerException | ResourceNotFoundException | ServiceQuotaExceededException | ThrottlingException | ValidationException | CommonAwsError
  >;
  associateTransitGatewayConnectPeer(
    input: AssociateTransitGatewayConnectPeerRequest,
  ): Effect.Effect<
    AssociateTransitGatewayConnectPeerResponse,
    AccessDeniedException | ConflictException | InternalServerException | ResourceNotFoundException | ServiceQuotaExceededException | ThrottlingException | ValidationException | CommonAwsError
  >;
  createConnectAttachment(
    input: CreateConnectAttachmentRequest,
  ): Effect.Effect<
    CreateConnectAttachmentResponse,
    AccessDeniedException | ConflictException | InternalServerException | ResourceNotFoundException | ThrottlingException | ValidationException | CommonAwsError
  >;
  createConnectPeer(
    input: CreateConnectPeerRequest,
  ): Effect.Effect<
    CreateConnectPeerResponse,
    AccessDeniedException | ConflictException | InternalServerException | ResourceNotFoundException | ThrottlingException | ValidationException | CommonAwsError
  >;
  createConnection(
    input: CreateConnectionRequest,
  ): Effect.Effect<
    CreateConnectionResponse,
    AccessDeniedException | ConflictException | InternalServerException | ServiceQuotaExceededException | ThrottlingException | ValidationException | CommonAwsError
  >;
  createCoreNetwork(
    input: CreateCoreNetworkRequest,
  ): Effect.Effect<
    CreateCoreNetworkResponse,
    AccessDeniedException | ConflictException | CoreNetworkPolicyException | InternalServerException | ServiceQuotaExceededException | ThrottlingException | ValidationException | CommonAwsError
  >;
  createDevice(
    input: CreateDeviceRequest,
  ): Effect.Effect<
    CreateDeviceResponse,
    AccessDeniedException | ConflictException | InternalServerException | ResourceNotFoundException | ServiceQuotaExceededException | ThrottlingException | ValidationException | CommonAwsError
  >;
  createDirectConnectGatewayAttachment(
    input: CreateDirectConnectGatewayAttachmentRequest,
  ): Effect.Effect<
    CreateDirectConnectGatewayAttachmentResponse,
    AccessDeniedException | ConflictException | InternalServerException | ResourceNotFoundException | ThrottlingException | ValidationException | CommonAwsError
  >;
  createGlobalNetwork(
    input: CreateGlobalNetworkRequest,
  ): Effect.Effect<
    CreateGlobalNetworkResponse,
    AccessDeniedException | ConflictException | InternalServerException | ServiceQuotaExceededException | ThrottlingException | ValidationException | CommonAwsError
  >;
  createLink(
    input: CreateLinkRequest,
  ): Effect.Effect<
    CreateLinkResponse,
    AccessDeniedException | ConflictException | InternalServerException | ResourceNotFoundException | ServiceQuotaExceededException | ThrottlingException | ValidationException | CommonAwsError
  >;
  createSite(
    input: CreateSiteRequest,
  ): Effect.Effect<
    CreateSiteResponse,
    AccessDeniedException | ConflictException | InternalServerException | ResourceNotFoundException | ServiceQuotaExceededException | ThrottlingException | ValidationException | CommonAwsError
  >;
  createSiteToSiteVpnAttachment(
    input: CreateSiteToSiteVpnAttachmentRequest,
  ): Effect.Effect<
    CreateSiteToSiteVpnAttachmentResponse,
    AccessDeniedException | ConflictException | InternalServerException | ResourceNotFoundException | ThrottlingException | ValidationException | CommonAwsError
  >;
  createTransitGatewayPeering(
    input: CreateTransitGatewayPeeringRequest,
  ): Effect.Effect<
    CreateTransitGatewayPeeringResponse,
    AccessDeniedException | ConflictException | InternalServerException | ResourceNotFoundException | ThrottlingException | ValidationException | CommonAwsError
  >;
  createTransitGatewayRouteTableAttachment(
    input: CreateTransitGatewayRouteTableAttachmentRequest,
  ): Effect.Effect<
    CreateTransitGatewayRouteTableAttachmentResponse,
    AccessDeniedException | ConflictException | InternalServerException | ResourceNotFoundException | ThrottlingException | ValidationException | CommonAwsError
  >;
  createVpcAttachment(
    input: CreateVpcAttachmentRequest,
  ): Effect.Effect<
    CreateVpcAttachmentResponse,
    AccessDeniedException | ConflictException | InternalServerException | ResourceNotFoundException | ThrottlingException | ValidationException | CommonAwsError
  >;
  deleteAttachment(
    input: DeleteAttachmentRequest,
  ): Effect.Effect<
    DeleteAttachmentResponse,
    AccessDeniedException | ConflictException | InternalServerException | ResourceNotFoundException | ThrottlingException | ValidationException | CommonAwsError
  >;
  deleteConnectPeer(
    input: DeleteConnectPeerRequest,
  ): Effect.Effect<
    DeleteConnectPeerResponse,
    AccessDeniedException | ConflictException | InternalServerException | ResourceNotFoundException | ThrottlingException | ValidationException | CommonAwsError
  >;
  deleteConnection(
    input: DeleteConnectionRequest,
  ): Effect.Effect<
    DeleteConnectionResponse,
    AccessDeniedException | ConflictException | InternalServerException | ResourceNotFoundException | ThrottlingException | ValidationException | CommonAwsError
  >;
  deleteCoreNetwork(
    input: DeleteCoreNetworkRequest,
  ): Effect.Effect<
    DeleteCoreNetworkResponse,
    AccessDeniedException | ConflictException | InternalServerException | ResourceNotFoundException | ThrottlingException | ValidationException | CommonAwsError
  >;
  deleteCoreNetworkPolicyVersion(
    input: DeleteCoreNetworkPolicyVersionRequest,
  ): Effect.Effect<
    DeleteCoreNetworkPolicyVersionResponse,
    AccessDeniedException | ConflictException | InternalServerException | ResourceNotFoundException | ThrottlingException | ValidationException | CommonAwsError
  >;
  deleteDevice(
    input: DeleteDeviceRequest,
  ): Effect.Effect<
    DeleteDeviceResponse,
    AccessDeniedException | ConflictException | InternalServerException | ResourceNotFoundException | ThrottlingException | ValidationException | CommonAwsError
  >;
  deleteGlobalNetwork(
    input: DeleteGlobalNetworkRequest,
  ): Effect.Effect<
    DeleteGlobalNetworkResponse,
    AccessDeniedException | ConflictException | InternalServerException | ResourceNotFoundException | ThrottlingException | ValidationException | CommonAwsError
  >;
  deleteLink(
    input: DeleteLinkRequest,
  ): Effect.Effect<
    DeleteLinkResponse,
    AccessDeniedException | ConflictException | InternalServerException | ResourceNotFoundException | ThrottlingException | ValidationException | CommonAwsError
  >;
  deletePeering(
    input: DeletePeeringRequest,
  ): Effect.Effect<
    DeletePeeringResponse,
    AccessDeniedException | ConflictException | InternalServerException | ResourceNotFoundException | ThrottlingException | ValidationException | CommonAwsError
  >;
  deleteResourcePolicy(
    input: DeleteResourcePolicyRequest,
  ): Effect.Effect<
    DeleteResourcePolicyResponse,
    AccessDeniedException | ConflictException | InternalServerException | ThrottlingException | ValidationException | CommonAwsError
  >;
  deleteSite(
    input: DeleteSiteRequest,
  ): Effect.Effect<
    DeleteSiteResponse,
    AccessDeniedException | ConflictException | InternalServerException | ResourceNotFoundException | ThrottlingException | ValidationException | CommonAwsError
  >;
  deregisterTransitGateway(
    input: DeregisterTransitGatewayRequest,
  ): Effect.Effect<
    DeregisterTransitGatewayResponse,
    AccessDeniedException | ConflictException | InternalServerException | ResourceNotFoundException | ThrottlingException | ValidationException | CommonAwsError
  >;
  describeGlobalNetworks(
    input: DescribeGlobalNetworksRequest,
  ): Effect.Effect<
    DescribeGlobalNetworksResponse,
    AccessDeniedException | InternalServerException | ResourceNotFoundException | ThrottlingException | ValidationException | CommonAwsError
  >;
  disassociateConnectPeer(
    input: DisassociateConnectPeerRequest,
  ): Effect.Effect<
    DisassociateConnectPeerResponse,
    AccessDeniedException | ConflictException | InternalServerException | ResourceNotFoundException | ThrottlingException | ValidationException | CommonAwsError
  >;
  disassociateCustomerGateway(
    input: DisassociateCustomerGatewayRequest,
  ): Effect.Effect<
    DisassociateCustomerGatewayResponse,
    AccessDeniedException | ConflictException | InternalServerException | ResourceNotFoundException | ThrottlingException | ValidationException | CommonAwsError
  >;
  disassociateLink(
    input: DisassociateLinkRequest,
  ): Effect.Effect<
    DisassociateLinkResponse,
    AccessDeniedException | ConflictException | InternalServerException | ResourceNotFoundException | ThrottlingException | ValidationException | CommonAwsError
  >;
  disassociateTransitGatewayConnectPeer(
    input: DisassociateTransitGatewayConnectPeerRequest,
  ): Effect.Effect<
    DisassociateTransitGatewayConnectPeerResponse,
    AccessDeniedException | ConflictException | InternalServerException | ResourceNotFoundException | ThrottlingException | ValidationException | CommonAwsError
  >;
  executeCoreNetworkChangeSet(
    input: ExecuteCoreNetworkChangeSetRequest,
  ): Effect.Effect<
    ExecuteCoreNetworkChangeSetResponse,
    AccessDeniedException | ConflictException | InternalServerException | ResourceNotFoundException | ThrottlingException | ValidationException | CommonAwsError
  >;
  getConnectAttachment(
    input: GetConnectAttachmentRequest,
  ): Effect.Effect<
    GetConnectAttachmentResponse,
    AccessDeniedException | InternalServerException | ResourceNotFoundException | ThrottlingException | ValidationException | CommonAwsError
  >;
  getConnectPeer(
    input: GetConnectPeerRequest,
  ): Effect.Effect<
    GetConnectPeerResponse,
    AccessDeniedException | InternalServerException | ResourceNotFoundException | ThrottlingException | ValidationException | CommonAwsError
  >;
  getConnectPeerAssociations(
    input: GetConnectPeerAssociationsRequest,
  ): Effect.Effect<
    GetConnectPeerAssociationsResponse,
    AccessDeniedException | ConflictException | InternalServerException | ResourceNotFoundException | ThrottlingException | ValidationException | CommonAwsError
  >;
  getConnections(
    input: GetConnectionsRequest,
  ): Effect.Effect<
    GetConnectionsResponse,
    AccessDeniedException | InternalServerException | ResourceNotFoundException | ThrottlingException | ValidationException | CommonAwsError
  >;
  getCoreNetwork(
    input: GetCoreNetworkRequest,
  ): Effect.Effect<
    GetCoreNetworkResponse,
    AccessDeniedException | InternalServerException | ResourceNotFoundException | ThrottlingException | ValidationException | CommonAwsError
  >;
  getCoreNetworkChangeEvents(
    input: GetCoreNetworkChangeEventsRequest,
  ): Effect.Effect<
    GetCoreNetworkChangeEventsResponse,
    AccessDeniedException | InternalServerException | ResourceNotFoundException | ThrottlingException | ValidationException | CommonAwsError
  >;
  getCoreNetworkChangeSet(
    input: GetCoreNetworkChangeSetRequest,
  ): Effect.Effect<
    GetCoreNetworkChangeSetResponse,
    AccessDeniedException | InternalServerException | ResourceNotFoundException | ThrottlingException | ValidationException | CommonAwsError
  >;
  getCoreNetworkPolicy(
    input: GetCoreNetworkPolicyRequest,
  ): Effect.Effect<
    GetCoreNetworkPolicyResponse,
    AccessDeniedException | InternalServerException | ResourceNotFoundException | ThrottlingException | ValidationException | CommonAwsError
  >;
  getCustomerGatewayAssociations(
    input: GetCustomerGatewayAssociationsRequest,
  ): Effect.Effect<
    GetCustomerGatewayAssociationsResponse,
    AccessDeniedException | ConflictException | InternalServerException | ResourceNotFoundException | ThrottlingException | ValidationException | CommonAwsError
  >;
  getDevices(
    input: GetDevicesRequest,
  ): Effect.Effect<
    GetDevicesResponse,
    AccessDeniedException | InternalServerException | ResourceNotFoundException | ThrottlingException | ValidationException | CommonAwsError
  >;
  getDirectConnectGatewayAttachment(
    input: GetDirectConnectGatewayAttachmentRequest,
  ): Effect.Effect<
    GetDirectConnectGatewayAttachmentResponse,
    AccessDeniedException | InternalServerException | ResourceNotFoundException | ThrottlingException | ValidationException | CommonAwsError
  >;
  getLinkAssociations(
    input: GetLinkAssociationsRequest,
  ): Effect.Effect<
    GetLinkAssociationsResponse,
    AccessDeniedException | InternalServerException | ResourceNotFoundException | ThrottlingException | ValidationException | CommonAwsError
  >;
  getLinks(
    input: GetLinksRequest,
  ): Effect.Effect<
    GetLinksResponse,
    AccessDeniedException | InternalServerException | ResourceNotFoundException | ThrottlingException | ValidationException | CommonAwsError
  >;
  getNetworkResourceCounts(
    input: GetNetworkResourceCountsRequest,
  ): Effect.Effect<
    GetNetworkResourceCountsResponse,
    AccessDeniedException | InternalServerException | ThrottlingException | ValidationException | CommonAwsError
  >;
  getNetworkResourceRelationships(
    input: GetNetworkResourceRelationshipsRequest,
  ): Effect.Effect<
    GetNetworkResourceRelationshipsResponse,
    AccessDeniedException | InternalServerException | ResourceNotFoundException | ThrottlingException | ValidationException | CommonAwsError
  >;
  getNetworkResources(
    input: GetNetworkResourcesRequest,
  ): Effect.Effect<
    GetNetworkResourcesResponse,
    AccessDeniedException | InternalServerException | ResourceNotFoundException | ThrottlingException | ValidationException | CommonAwsError
  >;
  getNetworkRoutes(
    input: GetNetworkRoutesRequest,
  ): Effect.Effect<
    GetNetworkRoutesResponse,
    AccessDeniedException | InternalServerException | ResourceNotFoundException | ThrottlingException | ValidationException | CommonAwsError
  >;
  getNetworkTelemetry(
    input: GetNetworkTelemetryRequest,
  ): Effect.Effect<
    GetNetworkTelemetryResponse,
    AccessDeniedException | InternalServerException | ResourceNotFoundException | ThrottlingException | ValidationException | CommonAwsError
  >;
  getResourcePolicy(
    input: GetResourcePolicyRequest,
  ): Effect.Effect<
    GetResourcePolicyResponse,
    AccessDeniedException | InternalServerException | ThrottlingException | ValidationException | CommonAwsError
  >;
  getRouteAnalysis(
    input: GetRouteAnalysisRequest,
  ): Effect.Effect<
    GetRouteAnalysisResponse,
    AccessDeniedException | InternalServerException | ResourceNotFoundException | ThrottlingException | ValidationException | CommonAwsError
  >;
  getSiteToSiteVpnAttachment(
    input: GetSiteToSiteVpnAttachmentRequest,
  ): Effect.Effect<
    GetSiteToSiteVpnAttachmentResponse,
    AccessDeniedException | InternalServerException | ResourceNotFoundException | ThrottlingException | ValidationException | CommonAwsError
  >;
  getSites(
    input: GetSitesRequest,
  ): Effect.Effect<
    GetSitesResponse,
    AccessDeniedException | InternalServerException | ResourceNotFoundException | ThrottlingException | ValidationException | CommonAwsError
  >;
  getTransitGatewayConnectPeerAssociations(
    input: GetTransitGatewayConnectPeerAssociationsRequest,
  ): Effect.Effect<
    GetTransitGatewayConnectPeerAssociationsResponse,
    AccessDeniedException | ConflictException | InternalServerException | ResourceNotFoundException | ThrottlingException | ValidationException | CommonAwsError
  >;
  getTransitGatewayPeering(
    input: GetTransitGatewayPeeringRequest,
  ): Effect.Effect<
    GetTransitGatewayPeeringResponse,
    AccessDeniedException | InternalServerException | ResourceNotFoundException | ThrottlingException | ValidationException | CommonAwsError
  >;
  getTransitGatewayRegistrations(
    input: GetTransitGatewayRegistrationsRequest,
  ): Effect.Effect<
    GetTransitGatewayRegistrationsResponse,
    AccessDeniedException | InternalServerException | ResourceNotFoundException | ThrottlingException | ValidationException | CommonAwsError
  >;
  getTransitGatewayRouteTableAttachment(
    input: GetTransitGatewayRouteTableAttachmentRequest,
  ): Effect.Effect<
    GetTransitGatewayRouteTableAttachmentResponse,
    AccessDeniedException | InternalServerException | ResourceNotFoundException | ThrottlingException | ValidationException | CommonAwsError
  >;
  getVpcAttachment(
    input: GetVpcAttachmentRequest,
  ): Effect.Effect<
    GetVpcAttachmentResponse,
    AccessDeniedException | InternalServerException | ResourceNotFoundException | ThrottlingException | ValidationException | CommonAwsError
  >;
  listAttachments(
    input: ListAttachmentsRequest,
  ): Effect.Effect<
    ListAttachmentsResponse,
    AccessDeniedException | InternalServerException | ThrottlingException | ValidationException | CommonAwsError
  >;
  listConnectPeers(
    input: ListConnectPeersRequest,
  ): Effect.Effect<
    ListConnectPeersResponse,
    AccessDeniedException | InternalServerException | ThrottlingException | ValidationException | CommonAwsError
  >;
  listCoreNetworkPolicyVersions(
    input: ListCoreNetworkPolicyVersionsRequest,
  ): Effect.Effect<
    ListCoreNetworkPolicyVersionsResponse,
    AccessDeniedException | InternalServerException | ResourceNotFoundException | ThrottlingException | ValidationException | CommonAwsError
  >;
  listCoreNetworks(
    input: ListCoreNetworksRequest,
  ): Effect.Effect<
    ListCoreNetworksResponse,
    AccessDeniedException | InternalServerException | ThrottlingException | ValidationException | CommonAwsError
  >;
  listOrganizationServiceAccessStatus(
    input: ListOrganizationServiceAccessStatusRequest,
  ): Effect.Effect<
    ListOrganizationServiceAccessStatusResponse,
    CommonAwsError
  >;
  listPeerings(
    input: ListPeeringsRequest,
  ): Effect.Effect<
    ListPeeringsResponse,
    AccessDeniedException | InternalServerException | ThrottlingException | ValidationException | CommonAwsError
  >;
  listTagsForResource(
    input: ListTagsForResourceRequest,
  ): Effect.Effect<
    ListTagsForResourceResponse,
    AccessDeniedException | InternalServerException | ResourceNotFoundException | ThrottlingException | ValidationException | CommonAwsError
  >;
  putCoreNetworkPolicy(
    input: PutCoreNetworkPolicyRequest,
  ): Effect.Effect<
    PutCoreNetworkPolicyResponse,
    AccessDeniedException | ConflictException | CoreNetworkPolicyException | InternalServerException | ResourceNotFoundException | ThrottlingException | ValidationException | CommonAwsError
  >;
  putResourcePolicy(
    input: PutResourcePolicyRequest,
  ): Effect.Effect<
    PutResourcePolicyResponse,
    AccessDeniedException | ConflictException | InternalServerException | ServiceQuotaExceededException | ThrottlingException | ValidationException | CommonAwsError
  >;
  registerTransitGateway(
    input: RegisterTransitGatewayRequest,
  ): Effect.Effect<
    RegisterTransitGatewayResponse,
    AccessDeniedException | ConflictException | InternalServerException | ResourceNotFoundException | ThrottlingException | ValidationException | CommonAwsError
  >;
  rejectAttachment(
    input: RejectAttachmentRequest,
  ): Effect.Effect<
    RejectAttachmentResponse,
    AccessDeniedException | ConflictException | InternalServerException | ResourceNotFoundException | ThrottlingException | ValidationException | CommonAwsError
  >;
  restoreCoreNetworkPolicyVersion(
    input: RestoreCoreNetworkPolicyVersionRequest,
  ): Effect.Effect<
    RestoreCoreNetworkPolicyVersionResponse,
    AccessDeniedException | ConflictException | InternalServerException | ResourceNotFoundException | ThrottlingException | ValidationException | CommonAwsError
  >;
  startOrganizationServiceAccessUpdate(
    input: StartOrganizationServiceAccessUpdateRequest,
  ): Effect.Effect<
    StartOrganizationServiceAccessUpdateResponse,
    AccessDeniedException | ConflictException | InternalServerException | ServiceQuotaExceededException | ThrottlingException | ValidationException | CommonAwsError
  >;
  startRouteAnalysis(
    input: StartRouteAnalysisRequest,
  ): Effect.Effect<
    StartRouteAnalysisResponse,
    AccessDeniedException | ConflictException | InternalServerException | ResourceNotFoundException | ThrottlingException | ValidationException | CommonAwsError
  >;
  tagResource(
    input: TagResourceRequest,
  ): Effect.Effect<
    TagResourceResponse,
    AccessDeniedException | ConflictException | InternalServerException | ResourceNotFoundException | ServiceQuotaExceededException | ThrottlingException | ValidationException | CommonAwsError
  >;
  untagResource(
    input: UntagResourceRequest,
  ): Effect.Effect<
    UntagResourceResponse,
    AccessDeniedException | ConflictException | InternalServerException | ResourceNotFoundException | ThrottlingException | ValidationException | CommonAwsError
  >;
  updateConnection(
    input: UpdateConnectionRequest,
  ): Effect.Effect<
    UpdateConnectionResponse,
    AccessDeniedException | ConflictException | InternalServerException | ResourceNotFoundException | ThrottlingException | ValidationException | CommonAwsError
  >;
  updateCoreNetwork(
    input: UpdateCoreNetworkRequest,
  ): Effect.Effect<
    UpdateCoreNetworkResponse,
    AccessDeniedException | ConflictException | InternalServerException | ResourceNotFoundException | ThrottlingException | ValidationException | CommonAwsError
  >;
  updateDevice(
    input: UpdateDeviceRequest,
  ): Effect.Effect<
    UpdateDeviceResponse,
    AccessDeniedException | ConflictException | InternalServerException | ResourceNotFoundException | ThrottlingException | ValidationException | CommonAwsError
  >;
  updateDirectConnectGatewayAttachment(
    input: UpdateDirectConnectGatewayAttachmentRequest,
  ): Effect.Effect<
    UpdateDirectConnectGatewayAttachmentResponse,
    AccessDeniedException | ConflictException | InternalServerException | ResourceNotFoundException | ThrottlingException | ValidationException | CommonAwsError
  >;
  updateGlobalNetwork(
    input: UpdateGlobalNetworkRequest,
  ): Effect.Effect<
    UpdateGlobalNetworkResponse,
    AccessDeniedException | ConflictException | InternalServerException | ResourceNotFoundException | ThrottlingException | ValidationException | CommonAwsError
  >;
  updateLink(
    input: UpdateLinkRequest,
  ): Effect.Effect<
    UpdateLinkResponse,
    AccessDeniedException | ConflictException | InternalServerException | ResourceNotFoundException | ServiceQuotaExceededException | ThrottlingException | ValidationException | CommonAwsError
  >;
  updateNetworkResourceMetadata(
    input: UpdateNetworkResourceMetadataRequest,
  ): Effect.Effect<
    UpdateNetworkResourceMetadataResponse,
    AccessDeniedException | ConflictException | InternalServerException | ResourceNotFoundException | ThrottlingException | ValidationException | CommonAwsError
  >;
  updateSite(
    input: UpdateSiteRequest,
  ): Effect.Effect<
    UpdateSiteResponse,
    AccessDeniedException | ConflictException | InternalServerException | ResourceNotFoundException | ThrottlingException | ValidationException | CommonAwsError
  >;
  updateVpcAttachment(
    input: UpdateVpcAttachmentRequest,
  ): Effect.Effect<
    UpdateVpcAttachmentResponse,
    AccessDeniedException | ConflictException | InternalServerException | ResourceNotFoundException | ThrottlingException | ValidationException | CommonAwsError
  >;
}

export type Networkmanager = NetworkManager;

export interface AcceptAttachmentRequest {
  AttachmentId: string;
}
export interface AcceptAttachmentResponse {
  Attachment?: Attachment;
}
export declare class AccessDeniedException extends Data.TaggedError(
  "AccessDeniedException",
)<{
  readonly Message: string;
}> {}
export type AccountId = string;

export interface AccountStatus {
  AccountId?: string;
  SLRDeploymentStatus?: string;
}
export type AccountStatusList = Array<AccountStatus>;
export type Action = string;

export interface AssociateConnectPeerRequest {
  GlobalNetworkId: string;
  ConnectPeerId: string;
  DeviceId: string;
  LinkId?: string;
}
export interface AssociateConnectPeerResponse {
  ConnectPeerAssociation?: ConnectPeerAssociation;
}
export interface AssociateCustomerGatewayRequest {
  CustomerGatewayArn: string;
  GlobalNetworkId: string;
  DeviceId: string;
  LinkId?: string;
}
export interface AssociateCustomerGatewayResponse {
  CustomerGatewayAssociation?: CustomerGatewayAssociation;
}
export interface AssociateLinkRequest {
  GlobalNetworkId: string;
  DeviceId: string;
  LinkId: string;
}
export interface AssociateLinkResponse {
  LinkAssociation?: LinkAssociation;
}
export interface AssociateTransitGatewayConnectPeerRequest {
  GlobalNetworkId: string;
  TransitGatewayConnectPeerArn: string;
  DeviceId: string;
  LinkId?: string;
}
export interface AssociateTransitGatewayConnectPeerResponse {
  TransitGatewayConnectPeerAssociation?: TransitGatewayConnectPeerAssociation;
}
export interface Attachment {
  CoreNetworkId?: string;
  CoreNetworkArn?: string;
  AttachmentId?: string;
  OwnerAccountId?: string;
  AttachmentType?: AttachmentType;
  State?: AttachmentState;
  EdgeLocation?: string;
  EdgeLocations?: Array<string>;
  ResourceArn?: string;
  AttachmentPolicyRuleNumber?: number;
  SegmentName?: string;
  NetworkFunctionGroupName?: string;
  Tags?: Array<Tag>;
  ProposedSegmentChange?: ProposedSegmentChange;
  ProposedNetworkFunctionGroupChange?: ProposedNetworkFunctionGroupChange;
  CreatedAt?: Date | string;
  UpdatedAt?: Date | string;
  LastModificationErrors?: Array<AttachmentError>;
}
export interface AttachmentError {
  Code?: AttachmentErrorCode;
  Message?: string;
  ResourceArn?: string;
  RequestId?: string;
}
export type AttachmentErrorCode = "VPC_NOT_FOUND" | "SUBNET_NOT_FOUND" | "SUBNET_DUPLICATED_IN_AVAILABILITY_ZONE" | "SUBNET_NO_FREE_ADDRESSES" | "SUBNET_UNSUPPORTED_AVAILABILITY_ZONE" | "SUBNET_NO_IPV6_CIDRS" | "VPN_CONNECTION_NOT_FOUND" | "MAXIMUM_NO_ENCAP_LIMIT_EXCEEDED" | "DIRECT_CONNECT_GATEWAY_NOT_FOUND" | "DIRECT_CONNECT_GATEWAY_EXISTING_ATTACHMENTS" | "DIRECT_CONNECT_GATEWAY_NO_PRIVATE_VIF";
export type AttachmentErrorList = Array<AttachmentError>;
export type AttachmentId = string;

export type AttachmentList = Array<Attachment>;
export type AttachmentState = "REJECTED" | "PENDING_ATTACHMENT_ACCEPTANCE" | "CREATING" | "FAILED" | "AVAILABLE" | "UPDATING" | "PENDING_NETWORK_UPDATE" | "PENDING_TAG_ACCEPTANCE" | "DELETING";
export type AttachmentType = "CONNECT" | "SITE_TO_SITE_VPN" | "VPC" | "DIRECT_CONNECT_GATEWAY" | "TRANSIT_GATEWAY_ROUTE_TABLE";
export type AWSAccountId = string;

export interface AWSLocation {
  Zone?: string;
  SubnetArn?: string;
}
export interface Bandwidth {
  UploadSpeed?: number;
  DownloadSpeed?: number;
}
export interface BgpOptions {
  PeerAsn?: number;
}
export type ChangeAction = "ADD" | "MODIFY" | "REMOVE";
export type ChangeSetState = "PENDING_GENERATION" | "FAILED_GENERATION" | "READY_TO_EXECUTE" | "EXECUTING" | "EXECUTION_SUCCEEDED" | "OUT_OF_DATE";
export type ChangeStatus = "NOT_STARTED" | "IN_PROGRESS" | "COMPLETE" | "FAILED";
export type ChangeType = "CORE_NETWORK_SEGMENT" | "NETWORK_FUNCTION_GROUP" | "CORE_NETWORK_EDGE" | "ATTACHMENT_MAPPING" | "ATTACHMENT_ROUTE_PROPAGATION" | "ATTACHMENT_ROUTE_STATIC" | "CORE_NETWORK_CONFIGURATION" | "SEGMENTS_CONFIGURATION" | "SEGMENT_ACTIONS_CONFIGURATION" | "ATTACHMENT_POLICIES_CONFIGURATION";
export type ClientToken = string;

export declare class ConflictException extends Data.TaggedError(
  "ConflictException",
)<{
  readonly Message: string;
  readonly ResourceId: string;
  readonly ResourceType: string;
}> {}
export interface ConnectAttachment {
  Attachment?: Attachment;
  TransportAttachmentId?: string;
  Options?: ConnectAttachmentOptions;
}
export interface ConnectAttachmentOptions {
  Protocol?: TunnelProtocol;
}
export interface Connection {
  ConnectionId?: string;
  ConnectionArn?: string;
  GlobalNetworkId?: string;
  DeviceId?: string;
  ConnectedDeviceId?: string;
  LinkId?: string;
  ConnectedLinkId?: string;
  Description?: string;
  CreatedAt?: Date | string;
  State?: ConnectionState;
  Tags?: Array<Tag>;
}
export type ConnectionArn = string;

export interface ConnectionHealth {
  Type?: ConnectionType;
  Status?: ConnectionStatus;
  Timestamp?: Date | string;
}
export type ConnectionId = string;

export type ConnectionIdList = Array<string>;
export type ConnectionList = Array<Connection>;
export type ConnectionState = "pending" | "available" | "deleting" | "updating";
export type ConnectionStatus = "UP" | "DOWN";
export type ConnectionType = "BGP" | "IPSEC";
export interface ConnectPeer {
  CoreNetworkId?: string;
  ConnectAttachmentId?: string;
  ConnectPeerId?: string;
  EdgeLocation?: string;
  State?: ConnectPeerState;
  CreatedAt?: Date | string;
  Configuration?: ConnectPeerConfiguration;
  Tags?: Array<Tag>;
  SubnetArn?: string;
  LastModificationErrors?: Array<ConnectPeerError>;
}
export interface ConnectPeerAssociation {
  ConnectPeerId?: string;
  GlobalNetworkId?: string;
  DeviceId?: string;
  LinkId?: string;
  State?: ConnectPeerAssociationState;
}
export type ConnectPeerAssociationList = Array<ConnectPeerAssociation>;
export type ConnectPeerAssociationState = "pending" | "available" | "deleting" | "deleted";
export interface ConnectPeerBgpConfiguration {
  CoreNetworkAsn?: number;
  PeerAsn?: number;
  CoreNetworkAddress?: string;
  PeerAddress?: string;
}
export type ConnectPeerBgpConfigurationList = Array<ConnectPeerBgpConfiguration>;
export interface ConnectPeerConfiguration {
  CoreNetworkAddress?: string;
  PeerAddress?: string;
  InsideCidrBlocks?: Array<string>;
  Protocol?: TunnelProtocol;
  BgpConfigurations?: Array<ConnectPeerBgpConfiguration>;
}
export interface ConnectPeerError {
  Code?: ConnectPeerErrorCode;
  Message?: string;
  ResourceArn?: string;
  RequestId?: string;
}
export type ConnectPeerErrorCode = "EDGE_LOCATION_NO_FREE_IPS" | "EDGE_LOCATION_PEER_DUPLICATE" | "SUBNET_NOT_FOUND" | "IP_OUTSIDE_SUBNET_CIDR_RANGE" | "INVALID_INSIDE_CIDR_BLOCK" | "NO_ASSOCIATED_CIDR_BLOCK";
export type ConnectPeerErrorList = Array<ConnectPeerError>;
export type ConnectPeerId = string;

export type ConnectPeerIdList = Array<string>;
export type ConnectPeerState = "CREATING" | "FAILED" | "AVAILABLE" | "DELETING";
export interface ConnectPeerSummary {
  CoreNetworkId?: string;
  ConnectAttachmentId?: string;
  ConnectPeerId?: string;
  EdgeLocation?: string;
  ConnectPeerState?: ConnectPeerState;
  CreatedAt?: Date | string;
  Tags?: Array<Tag>;
  SubnetArn?: string;
}
export type ConnectPeerSummaryList = Array<ConnectPeerSummary>;
export type ConstrainedString = string;

export type ConstrainedStringList = Array<string>;
export interface CoreNetwork {
  GlobalNetworkId?: string;
  CoreNetworkId?: string;
  CoreNetworkArn?: string;
  Description?: string;
  CreatedAt?: Date | string;
  State?: CoreNetworkState;
  Segments?: Array<CoreNetworkSegment>;
  NetworkFunctionGroups?: Array<CoreNetworkNetworkFunctionGroup>;
  Edges?: Array<CoreNetworkEdge>;
  Tags?: Array<Tag>;
}
export type CoreNetworkArn = string;

export interface CoreNetworkChange {
  Type?: ChangeType;
  Action?: ChangeAction;
  Identifier?: string;
  PreviousValues?: CoreNetworkChangeValues;
  NewValues?: CoreNetworkChangeValues;
  IdentifierPath?: string;
}
export interface CoreNetworkChangeEvent {
  Type?: ChangeType;
  Action?: ChangeAction;
  IdentifierPath?: string;
  EventTime?: Date | string;
  Status?: ChangeStatus;
  Values?: CoreNetworkChangeEventValues;
}
export type CoreNetworkChangeEventList = Array<CoreNetworkChangeEvent>;
export interface CoreNetworkChangeEventValues {
  EdgeLocation?: string;
  SegmentName?: string;
  NetworkFunctionGroupName?: string;
  AttachmentId?: string;
  Cidr?: string;
}
export type CoreNetworkChangeList = Array<CoreNetworkChange>;
export interface CoreNetworkChangeValues {
  SegmentName?: string;
  NetworkFunctionGroupName?: string;
  EdgeLocations?: Array<string>;
  Asn?: number;
  Cidr?: string;
  DestinationIdentifier?: string;
  InsideCidrBlocks?: Array<string>;
  SharedSegments?: Array<string>;
  ServiceInsertionActions?: Array<ServiceInsertionAction>;
  VpnEcmpSupport?: boolean;
  DnsSupport?: boolean;
  SecurityGroupReferencingSupport?: boolean;
}
export interface CoreNetworkEdge {
  EdgeLocation?: string;
  Asn?: number;
  InsideCidrBlocks?: Array<string>;
}
export type CoreNetworkEdgeList = Array<CoreNetworkEdge>;
export type CoreNetworkId = string;

export interface CoreNetworkNetworkFunctionGroup {
  Name?: string;
  EdgeLocations?: Array<string>;
  Segments?: ServiceInsertionSegments;
}
export interface CoreNetworkNetworkFunctionGroupIdentifier {
  CoreNetworkId?: string;
  NetworkFunctionGroupName?: string;
  EdgeLocation?: string;
}
export type CoreNetworkNetworkFunctionGroupList = Array<CoreNetworkNetworkFunctionGroup>;
export interface CoreNetworkPolicy {
  CoreNetworkId?: string;
  PolicyVersionId?: number;
  Alias?: CoreNetworkPolicyAlias;
  Description?: string;
  CreatedAt?: Date | string;
  ChangeSetState?: ChangeSetState;
  PolicyErrors?: Array<CoreNetworkPolicyError>;
  PolicyDocument?: string;
}
export type CoreNetworkPolicyAlias = "LIVE" | "LATEST";
export type CoreNetworkPolicyDocument = string;

export interface CoreNetworkPolicyError {
  ErrorCode: string;
  Message: string;
  Path?: string;
}
export type CoreNetworkPolicyErrorList = Array<CoreNetworkPolicyError>;
export declare class CoreNetworkPolicyException extends Data.TaggedError(
  "CoreNetworkPolicyException",
)<{
  readonly Message: string;
  readonly Errors?: Array<CoreNetworkPolicyError>;
}> {}
export interface CoreNetworkPolicyVersion {
  CoreNetworkId?: string;
  PolicyVersionId?: number;
  Alias?: CoreNetworkPolicyAlias;
  Description?: string;
  CreatedAt?: Date | string;
  ChangeSetState?: ChangeSetState;
}
export type CoreNetworkPolicyVersionList = Array<CoreNetworkPolicyVersion>;
export interface CoreNetworkSegment {
  Name?: string;
  EdgeLocations?: Array<string>;
  SharedSegments?: Array<string>;
}
export interface CoreNetworkSegmentEdgeIdentifier {
  CoreNetworkId?: string;
  SegmentName?: string;
  EdgeLocation?: string;
}
export type CoreNetworkSegmentList = Array<CoreNetworkSegment>;
export type CoreNetworkState = "CREATING" | "UPDATING" | "AVAILABLE" | "DELETING";
export interface CoreNetworkSummary {
  CoreNetworkId?: string;
  CoreNetworkArn?: string;
  GlobalNetworkId?: string;
  OwnerAccountId?: string;
  State?: CoreNetworkState;
  Description?: string;
  Tags?: Array<Tag>;
}
export type CoreNetworkSummaryList = Array<CoreNetworkSummary>;
export interface CreateConnectAttachmentRequest {
  CoreNetworkId: string;
  EdgeLocation: string;
  TransportAttachmentId: string;
  Options: ConnectAttachmentOptions;
  Tags?: Array<Tag>;
  ClientToken?: string;
}
export interface CreateConnectAttachmentResponse {
  ConnectAttachment?: ConnectAttachment;
}
export interface CreateConnectionRequest {
  GlobalNetworkId: string;
  DeviceId: string;
  ConnectedDeviceId: string;
  LinkId?: string;
  ConnectedLinkId?: string;
  Description?: string;
  Tags?: Array<Tag>;
}
export interface CreateConnectionResponse {
  Connection?: Connection;
}
export interface CreateConnectPeerRequest {
  ConnectAttachmentId: string;
  CoreNetworkAddress?: string;
  PeerAddress: string;
  BgpOptions?: BgpOptions;
  InsideCidrBlocks?: Array<string>;
  Tags?: Array<Tag>;
  ClientToken?: string;
  SubnetArn?: string;
}
export interface CreateConnectPeerResponse {
  ConnectPeer?: ConnectPeer;
}
export interface CreateCoreNetworkRequest {
  GlobalNetworkId: string;
  Description?: string;
  Tags?: Array<Tag>;
  PolicyDocument?: string;
  ClientToken?: string;
}
export interface CreateCoreNetworkResponse {
  CoreNetwork?: CoreNetwork;
}
export interface CreateDeviceRequest {
  GlobalNetworkId: string;
  AWSLocation?: AWSLocation;
  Description?: string;
  Type?: string;
  Vendor?: string;
  Model?: string;
  SerialNumber?: string;
  Location?: Location;
  SiteId?: string;
  Tags?: Array<Tag>;
}
export interface CreateDeviceResponse {
  Device?: Device;
}
export interface CreateDirectConnectGatewayAttachmentRequest {
  CoreNetworkId: string;
  DirectConnectGatewayArn: string;
  EdgeLocations: Array<string>;
  Tags?: Array<Tag>;
  ClientToken?: string;
}
export interface CreateDirectConnectGatewayAttachmentResponse {
  DirectConnectGatewayAttachment?: DirectConnectGatewayAttachment;
}
export interface CreateGlobalNetworkRequest {
  Description?: string;
  Tags?: Array<Tag>;
}
export interface CreateGlobalNetworkResponse {
  GlobalNetwork?: GlobalNetwork;
}
export interface CreateLinkRequest {
  GlobalNetworkId: string;
  Description?: string;
  Type?: string;
  Bandwidth: Bandwidth;
  Provider?: string;
  SiteId: string;
  Tags?: Array<Tag>;
}
export interface CreateLinkResponse {
  Link?: Link;
}
export interface CreateSiteRequest {
  GlobalNetworkId: string;
  Description?: string;
  Location?: Location;
  Tags?: Array<Tag>;
}
export interface CreateSiteResponse {
  Site?: Site;
}
export interface CreateSiteToSiteVpnAttachmentRequest {
  CoreNetworkId: string;
  VpnConnectionArn: string;
  Tags?: Array<Tag>;
  ClientToken?: string;
}
export interface CreateSiteToSiteVpnAttachmentResponse {
  SiteToSiteVpnAttachment?: SiteToSiteVpnAttachment;
}
export interface CreateTransitGatewayPeeringRequest {
  CoreNetworkId: string;
  TransitGatewayArn: string;
  Tags?: Array<Tag>;
  ClientToken?: string;
}
export interface CreateTransitGatewayPeeringResponse {
  TransitGatewayPeering?: TransitGatewayPeering;
}
export interface CreateTransitGatewayRouteTableAttachmentRequest {
  PeeringId: string;
  TransitGatewayRouteTableArn: string;
  Tags?: Array<Tag>;
  ClientToken?: string;
}
export interface CreateTransitGatewayRouteTableAttachmentResponse {
  TransitGatewayRouteTableAttachment?: TransitGatewayRouteTableAttachment;
}
export interface CreateVpcAttachmentRequest {
  CoreNetworkId: string;
  VpcArn: string;
  SubnetArns: Array<string>;
  Options?: VpcOptions;
  Tags?: Array<Tag>;
  ClientToken?: string;
}
export interface CreateVpcAttachmentResponse {
  VpcAttachment?: VpcAttachment;
}
export type CustomerGatewayArn = string;

export type CustomerGatewayArnList = Array<string>;
export interface CustomerGatewayAssociation {
  CustomerGatewayArn?: string;
  GlobalNetworkId?: string;
  DeviceId?: string;
  LinkId?: string;
  State?: CustomerGatewayAssociationState;
}
export type CustomerGatewayAssociationList = Array<CustomerGatewayAssociation>;
export type CustomerGatewayAssociationState = "pending" | "available" | "deleting" | "deleted";
export type DateTime = Date | string;

export interface DeleteAttachmentRequest {
  AttachmentId: string;
}
export interface DeleteAttachmentResponse {
  Attachment?: Attachment;
}
export interface DeleteConnectionRequest {
  GlobalNetworkId: string;
  ConnectionId: string;
}
export interface DeleteConnectionResponse {
  Connection?: Connection;
}
export interface DeleteConnectPeerRequest {
  ConnectPeerId: string;
}
export interface DeleteConnectPeerResponse {
  ConnectPeer?: ConnectPeer;
}
export interface DeleteCoreNetworkPolicyVersionRequest {
  CoreNetworkId: string;
  PolicyVersionId: number;
}
export interface DeleteCoreNetworkPolicyVersionResponse {
  CoreNetworkPolicy?: CoreNetworkPolicy;
}
export interface DeleteCoreNetworkRequest {
  CoreNetworkId: string;
}
export interface DeleteCoreNetworkResponse {
  CoreNetwork?: CoreNetwork;
}
export interface DeleteDeviceRequest {
  GlobalNetworkId: string;
  DeviceId: string;
}
export interface DeleteDeviceResponse {
  Device?: Device;
}
export interface DeleteGlobalNetworkRequest {
  GlobalNetworkId: string;
}
export interface DeleteGlobalNetworkResponse {
  GlobalNetwork?: GlobalNetwork;
}
export interface DeleteLinkRequest {
  GlobalNetworkId: string;
  LinkId: string;
}
export interface DeleteLinkResponse {
  Link?: Link;
}
export interface DeletePeeringRequest {
  PeeringId: string;
}
export interface DeletePeeringResponse {
  Peering?: Peering;
}
export interface DeleteResourcePolicyRequest {
  ResourceArn: string;
}
export interface DeleteResourcePolicyResponse {
}
export interface DeleteSiteRequest {
  GlobalNetworkId: string;
  SiteId: string;
}
export interface DeleteSiteResponse {
  Site?: Site;
}
export interface DeregisterTransitGatewayRequest {
  GlobalNetworkId: string;
  TransitGatewayArn: string;
}
export interface DeregisterTransitGatewayResponse {
  TransitGatewayRegistration?: TransitGatewayRegistration;
}
export interface DescribeGlobalNetworksRequest {
  GlobalNetworkIds?: Array<string>;
  MaxResults?: number;
  NextToken?: string;
}
export interface DescribeGlobalNetworksResponse {
  GlobalNetworks?: Array<GlobalNetwork>;
  NextToken?: string;
}
export interface Device {
  DeviceId?: string;
  DeviceArn?: string;
  GlobalNetworkId?: string;
  AWSLocation?: AWSLocation;
  Description?: string;
  Type?: string;
  Vendor?: string;
  Model?: string;
  SerialNumber?: string;
  Location?: Location;
  SiteId?: string;
  CreatedAt?: Date | string;
  State?: DeviceState;
  Tags?: Array<Tag>;
}
export type DeviceArn = string;

export type DeviceId = string;

export type DeviceIdList = Array<string>;
export type DeviceList = Array<Device>;
export type DeviceState = "pending" | "available" | "deleting" | "updating";
export type DirectConnectGatewayArn = string;

export interface DirectConnectGatewayAttachment {
  Attachment?: Attachment;
  DirectConnectGatewayArn?: string;
}
export interface DisassociateConnectPeerRequest {
  GlobalNetworkId: string;
  ConnectPeerId: string;
}
export interface DisassociateConnectPeerResponse {
  ConnectPeerAssociation?: ConnectPeerAssociation;
}
export interface DisassociateCustomerGatewayRequest {
  GlobalNetworkId: string;
  CustomerGatewayArn: string;
}
export interface DisassociateCustomerGatewayResponse {
  CustomerGatewayAssociation?: CustomerGatewayAssociation;
}
export interface DisassociateLinkRequest {
  GlobalNetworkId: string;
  DeviceId: string;
  LinkId: string;
}
export interface DisassociateLinkResponse {
  LinkAssociation?: LinkAssociation;
}
export interface DisassociateTransitGatewayConnectPeerRequest {
  GlobalNetworkId: string;
  TransitGatewayConnectPeerArn: string;
}
export interface DisassociateTransitGatewayConnectPeerResponse {
  TransitGatewayConnectPeerAssociation?: TransitGatewayConnectPeerAssociation;
}
export interface EdgeOverride {
  EdgeSets?: Array<Array<string>>;
  UseEdge?: string;
}
export type EdgeSet = Array<string>;
export type EdgeSetList = Array<Array<string>>;
export type ExceptionContextKey = string;

export type ExceptionContextMap = Record<string, string>;
export type ExceptionContextValue = string;

export interface ExecuteCoreNetworkChangeSetRequest {
  CoreNetworkId: string;
  PolicyVersionId: number;
}
export interface ExecuteCoreNetworkChangeSetResponse {
}
export type ExternalRegionCode = string;

export type ExternalRegionCodeList = Array<string>;
export type FilterMap = Record<string, Array<string>>;
export type FilterName = string;

export type FilterValue = string;

export type FilterValues = Array<string>;
export interface GetConnectAttachmentRequest {
  AttachmentId: string;
}
export interface GetConnectAttachmentResponse {
  ConnectAttachment?: ConnectAttachment;
}
export interface GetConnectionsRequest {
  GlobalNetworkId: string;
  ConnectionIds?: Array<string>;
  DeviceId?: string;
  MaxResults?: number;
  NextToken?: string;
}
export interface GetConnectionsResponse {
  Connections?: Array<Connection>;
  NextToken?: string;
}
export interface GetConnectPeerAssociationsRequest {
  GlobalNetworkId: string;
  ConnectPeerIds?: Array<string>;
  MaxResults?: number;
  NextToken?: string;
}
export interface GetConnectPeerAssociationsResponse {
  ConnectPeerAssociations?: Array<ConnectPeerAssociation>;
  NextToken?: string;
}
export interface GetConnectPeerRequest {
  ConnectPeerId: string;
}
export interface GetConnectPeerResponse {
  ConnectPeer?: ConnectPeer;
}
export interface GetCoreNetworkChangeEventsRequest {
  CoreNetworkId: string;
  PolicyVersionId: number;
  MaxResults?: number;
  NextToken?: string;
}
export interface GetCoreNetworkChangeEventsResponse {
  CoreNetworkChangeEvents?: Array<CoreNetworkChangeEvent>;
  NextToken?: string;
}
export interface GetCoreNetworkChangeSetRequest {
  CoreNetworkId: string;
  PolicyVersionId: number;
  MaxResults?: number;
  NextToken?: string;
}
export interface GetCoreNetworkChangeSetResponse {
  CoreNetworkChanges?: Array<CoreNetworkChange>;
  NextToken?: string;
}
export interface GetCoreNetworkPolicyRequest {
  CoreNetworkId: string;
  PolicyVersionId?: number;
  Alias?: CoreNetworkPolicyAlias;
}
export interface GetCoreNetworkPolicyResponse {
  CoreNetworkPolicy?: CoreNetworkPolicy;
}
export interface GetCoreNetworkRequest {
  CoreNetworkId: string;
}
export interface GetCoreNetworkResponse {
  CoreNetwork?: CoreNetwork;
}
export interface GetCustomerGatewayAssociationsRequest {
  GlobalNetworkId: string;
  CustomerGatewayArns?: Array<string>;
  MaxResults?: number;
  NextToken?: string;
}
export interface GetCustomerGatewayAssociationsResponse {
  CustomerGatewayAssociations?: Array<CustomerGatewayAssociation>;
  NextToken?: string;
}
export interface GetDevicesRequest {
  GlobalNetworkId: string;
  DeviceIds?: Array<string>;
  SiteId?: string;
  MaxResults?: number;
  NextToken?: string;
}
export interface GetDevicesResponse {
  Devices?: Array<Device>;
  NextToken?: string;
}
export interface GetDirectConnectGatewayAttachmentRequest {
  AttachmentId: string;
}
export interface GetDirectConnectGatewayAttachmentResponse {
  DirectConnectGatewayAttachment?: DirectConnectGatewayAttachment;
}
export interface GetLinkAssociationsRequest {
  GlobalNetworkId: string;
  DeviceId?: string;
  LinkId?: string;
  MaxResults?: number;
  NextToken?: string;
}
export interface GetLinkAssociationsResponse {
  LinkAssociations?: Array<LinkAssociation>;
  NextToken?: string;
}
export interface GetLinksRequest {
  GlobalNetworkId: string;
  LinkIds?: Array<string>;
  SiteId?: string;
  Type?: string;
  Provider?: string;
  MaxResults?: number;
  NextToken?: string;
}
export interface GetLinksResponse {
  Links?: Array<Link>;
  NextToken?: string;
}
export interface GetNetworkResourceCountsRequest {
  GlobalNetworkId: string;
  ResourceType?: string;
  MaxResults?: number;
  NextToken?: string;
}
export interface GetNetworkResourceCountsResponse {
  NetworkResourceCounts?: Array<NetworkResourceCount>;
  NextToken?: string;
}
export interface GetNetworkResourceRelationshipsRequest {
  GlobalNetworkId: string;
  CoreNetworkId?: string;
  RegisteredGatewayArn?: string;
  AwsRegion?: string;
  AccountId?: string;
  ResourceType?: string;
  ResourceArn?: string;
  MaxResults?: number;
  NextToken?: string;
}
export interface GetNetworkResourceRelationshipsResponse {
  Relationships?: Array<Relationship>;
  NextToken?: string;
}
export interface GetNetworkResourcesRequest {
  GlobalNetworkId: string;
  CoreNetworkId?: string;
  RegisteredGatewayArn?: string;
  AwsRegion?: string;
  AccountId?: string;
  ResourceType?: string;
  ResourceArn?: string;
  MaxResults?: number;
  NextToken?: string;
}
export interface GetNetworkResourcesResponse {
  NetworkResources?: Array<NetworkResource>;
  NextToken?: string;
}
export interface GetNetworkRoutesRequest {
  GlobalNetworkId: string;
  RouteTableIdentifier: RouteTableIdentifier;
  ExactCidrMatches?: Array<string>;
  LongestPrefixMatches?: Array<string>;
  SubnetOfMatches?: Array<string>;
  SupernetOfMatches?: Array<string>;
  PrefixListIds?: Array<string>;
  States?: Array<RouteState>;
  Types?: Array<RouteType>;
  DestinationFilters?: Record<string, Array<string>>;
}
export interface GetNetworkRoutesResponse {
  RouteTableArn?: string;
  CoreNetworkSegmentEdge?: CoreNetworkSegmentEdgeIdentifier;
  RouteTableType?: RouteTableType;
  RouteTableTimestamp?: Date | string;
  NetworkRoutes?: Array<NetworkRoute>;
}
export interface GetNetworkTelemetryRequest {
  GlobalNetworkId: string;
  CoreNetworkId?: string;
  RegisteredGatewayArn?: string;
  AwsRegion?: string;
  AccountId?: string;
  ResourceType?: string;
  ResourceArn?: string;
  MaxResults?: number;
  NextToken?: string;
}
export interface GetNetworkTelemetryResponse {
  NetworkTelemetry?: Array<NetworkTelemetry>;
  NextToken?: string;
}
export interface GetResourcePolicyRequest {
  ResourceArn: string;
}
export interface GetResourcePolicyResponse {
  PolicyDocument?: string;
}
export interface GetRouteAnalysisRequest {
  GlobalNetworkId: string;
  RouteAnalysisId: string;
}
export interface GetRouteAnalysisResponse {
  RouteAnalysis?: RouteAnalysis;
}
export interface GetSitesRequest {
  GlobalNetworkId: string;
  SiteIds?: Array<string>;
  MaxResults?: number;
  NextToken?: string;
}
export interface GetSitesResponse {
  Sites?: Array<Site>;
  NextToken?: string;
}
export interface GetSiteToSiteVpnAttachmentRequest {
  AttachmentId: string;
}
export interface GetSiteToSiteVpnAttachmentResponse {
  SiteToSiteVpnAttachment?: SiteToSiteVpnAttachment;
}
export interface GetTransitGatewayConnectPeerAssociationsRequest {
  GlobalNetworkId: string;
  TransitGatewayConnectPeerArns?: Array<string>;
  MaxResults?: number;
  NextToken?: string;
}
export interface GetTransitGatewayConnectPeerAssociationsResponse {
  TransitGatewayConnectPeerAssociations?: Array<TransitGatewayConnectPeerAssociation>;
  NextToken?: string;
}
export interface GetTransitGatewayPeeringRequest {
  PeeringId: string;
}
export interface GetTransitGatewayPeeringResponse {
  TransitGatewayPeering?: TransitGatewayPeering;
}
export interface GetTransitGatewayRegistrationsRequest {
  GlobalNetworkId: string;
  TransitGatewayArns?: Array<string>;
  MaxResults?: number;
  NextToken?: string;
}
export interface GetTransitGatewayRegistrationsResponse {
  TransitGatewayRegistrations?: Array<TransitGatewayRegistration>;
  NextToken?: string;
}
export interface GetTransitGatewayRouteTableAttachmentRequest {
  AttachmentId: string;
}
export interface GetTransitGatewayRouteTableAttachmentResponse {
  TransitGatewayRouteTableAttachment?: TransitGatewayRouteTableAttachment;
}
export interface GetVpcAttachmentRequest {
  AttachmentId: string;
}
export interface GetVpcAttachmentResponse {
  VpcAttachment?: VpcAttachment;
}
export interface GlobalNetwork {
  GlobalNetworkId?: string;
  GlobalNetworkArn?: string;
  Description?: string;
  CreatedAt?: Date | string;
  State?: GlobalNetworkState;
  Tags?: Array<Tag>;
}
export type GlobalNetworkArn = string;

export type GlobalNetworkId = string;

export type GlobalNetworkIdList = Array<string>;
export type GlobalNetworkList = Array<GlobalNetwork>;
export type GlobalNetworkState = "pending" | "available" | "deleting" | "updating";
export type Integer = number;

export declare class InternalServerException extends Data.TaggedError(
  "InternalServerException",
)<{
  readonly Message: string;
  readonly RetryAfterSeconds?: number;
}> {}
export type IPAddress = string;

export interface Link {
  LinkId?: string;
  LinkArn?: string;
  GlobalNetworkId?: string;
  SiteId?: string;
  Description?: string;
  Type?: string;
  Bandwidth?: Bandwidth;
  Provider?: string;
  CreatedAt?: Date | string;
  State?: LinkState;
  Tags?: Array<Tag>;
}
export type LinkArn = string;

export interface LinkAssociation {
  GlobalNetworkId?: string;
  DeviceId?: string;
  LinkId?: string;
  LinkAssociationState?: LinkAssociationState;
}
export type LinkAssociationList = Array<LinkAssociation>;
export type LinkAssociationState = "pending" | "available" | "deleting" | "deleted";
export type LinkId = string;

export type LinkIdList = Array<string>;
export type LinkList = Array<Link>;
export type LinkState = "pending" | "available" | "deleting" | "updating";
export interface ListAttachmentsRequest {
  CoreNetworkId?: string;
  AttachmentType?: AttachmentType;
  EdgeLocation?: string;
  State?: AttachmentState;
  MaxResults?: number;
  NextToken?: string;
}
export interface ListAttachmentsResponse {
  Attachments?: Array<Attachment>;
  NextToken?: string;
}
export interface ListConnectPeersRequest {
  CoreNetworkId?: string;
  ConnectAttachmentId?: string;
  MaxResults?: number;
  NextToken?: string;
}
export interface ListConnectPeersResponse {
  ConnectPeers?: Array<ConnectPeerSummary>;
  NextToken?: string;
}
export interface ListCoreNetworkPolicyVersionsRequest {
  CoreNetworkId: string;
  MaxResults?: number;
  NextToken?: string;
}
export interface ListCoreNetworkPolicyVersionsResponse {
  CoreNetworkPolicyVersions?: Array<CoreNetworkPolicyVersion>;
  NextToken?: string;
}
export interface ListCoreNetworksRequest {
  MaxResults?: number;
  NextToken?: string;
}
export interface ListCoreNetworksResponse {
  CoreNetworks?: Array<CoreNetworkSummary>;
  NextToken?: string;
}
export interface ListOrganizationServiceAccessStatusRequest {
  MaxResults?: number;
  NextToken?: string;
}
export interface ListOrganizationServiceAccessStatusResponse {
  OrganizationStatus?: OrganizationStatus;
  NextToken?: string;
}
export interface ListPeeringsRequest {
  CoreNetworkId?: string;
  PeeringType?: PeeringType;
  EdgeLocation?: string;
  State?: PeeringState;
  MaxResults?: number;
  NextToken?: string;
}
export interface ListPeeringsResponse {
  Peerings?: Array<Peering>;
  NextToken?: string;
}
export interface ListTagsForResourceRequest {
  ResourceArn: string;
}
export interface ListTagsForResourceResponse {
  TagList?: Array<Tag>;
}
export interface Location {
  Address?: string;
  Latitude?: string;
  Longitude?: string;
}
export type Long = number;

export type MaxResults = number;

export interface NetworkFunctionGroup {
  Name?: string;
}
export type NetworkFunctionGroupList = Array<NetworkFunctionGroup>;
export type NetworkFunctionGroupName = string;

export interface NetworkResource {
  RegisteredGatewayArn?: string;
  CoreNetworkId?: string;
  AwsRegion?: string;
  AccountId?: string;
  ResourceType?: string;
  ResourceId?: string;
  ResourceArn?: string;
  Definition?: string;
  DefinitionTimestamp?: Date | string;
  Tags?: Array<Tag>;
  Metadata?: Record<string, string>;
}
export interface NetworkResourceCount {
  ResourceType?: string;
  Count?: number;
}
export type NetworkResourceCountList = Array<NetworkResourceCount>;
export type NetworkResourceList = Array<NetworkResource>;
export type NetworkResourceMetadataMap = Record<string, string>;
export interface NetworkResourceSummary {
  RegisteredGatewayArn?: string;
  ResourceArn?: string;
  ResourceType?: string;
  Definition?: string;
  NameTag?: string;
  IsMiddlebox?: boolean;
}
export interface NetworkRoute {
  DestinationCidrBlock?: string;
  Destinations?: Array<NetworkRouteDestination>;
  PrefixListId?: string;
  State?: RouteState;
  Type?: RouteType;
}
export interface NetworkRouteDestination {
  CoreNetworkAttachmentId?: string;
  TransitGatewayAttachmentId?: string;
  SegmentName?: string;
  NetworkFunctionGroupName?: string;
  EdgeLocation?: string;
  ResourceType?: string;
  ResourceId?: string;
}
export type NetworkRouteDestinationList = Array<NetworkRouteDestination>;
export type NetworkRouteList = Array<NetworkRoute>;
export interface NetworkTelemetry {
  RegisteredGatewayArn?: string;
  CoreNetworkId?: string;
  AwsRegion?: string;
  AccountId?: string;
  ResourceType?: string;
  ResourceId?: string;
  ResourceArn?: string;
  Address?: string;
  Health?: ConnectionHealth;
}
export type NetworkTelemetryList = Array<NetworkTelemetry>;
export type NextToken = string;

export type OrganizationAwsServiceAccessStatus = string;

export type OrganizationId = string;

export interface OrganizationStatus {
  OrganizationId?: string;
  OrganizationAwsServiceAccessStatus?: string;
  SLRDeploymentStatus?: string;
  AccountStatusList?: Array<AccountStatus>;
}
export interface PathComponent {
  Sequence?: number;
  Resource?: NetworkResourceSummary;
  DestinationCidrBlock?: string;
}
export type PathComponentList = Array<PathComponent>;
export interface Peering {
  CoreNetworkId?: string;
  CoreNetworkArn?: string;
  PeeringId?: string;
  OwnerAccountId?: string;
  PeeringType?: PeeringType;
  State?: PeeringState;
  EdgeLocation?: string;
  ResourceArn?: string;
  Tags?: Array<Tag>;
  CreatedAt?: Date | string;
  LastModificationErrors?: Array<PeeringError>;
}
export interface PeeringError {
  Code?: PeeringErrorCode;
  Message?: string;
  ResourceArn?: string;
  RequestId?: string;
  MissingPermissionsContext?: PermissionsErrorContext;
}
export type PeeringErrorCode = "TRANSIT_GATEWAY_NOT_FOUND" | "TRANSIT_GATEWAY_PEERS_LIMIT_EXCEEDED" | "MISSING_REQUIRED_PERMISSIONS" | "INTERNAL_ERROR" | "EDGE_LOCATION_PEER_DUPLICATE" | "INVALID_TRANSIT_GATEWAY_STATE";
export type PeeringErrorList = Array<PeeringError>;
export type PeeringId = string;

export type PeeringList = Array<Peering>;
export type PeeringState = "CREATING" | "FAILED" | "AVAILABLE" | "DELETING";
export type PeeringType = "TRANSIT_GATEWAY";
export interface PermissionsErrorContext {
  MissingPermission?: string;
}
export interface ProposedNetworkFunctionGroupChange {
  Tags?: Array<Tag>;
  AttachmentPolicyRuleNumber?: number;
  NetworkFunctionGroupName?: string;
}
export interface ProposedSegmentChange {
  Tags?: Array<Tag>;
  AttachmentPolicyRuleNumber?: number;
  SegmentName?: string;
}
export interface PutCoreNetworkPolicyRequest {
  CoreNetworkId: string;
  PolicyDocument: string;
  Description?: string;
  LatestVersionId?: number;
  ClientToken?: string;
}
export interface PutCoreNetworkPolicyResponse {
  CoreNetworkPolicy?: CoreNetworkPolicy;
}
export interface PutResourcePolicyRequest {
  PolicyDocument: string;
  ResourceArn: string;
}
export interface PutResourcePolicyResponse {
}
export type ReasonContextKey = string;

export type ReasonContextMap = Record<string, string>;
export type ReasonContextValue = string;

export interface RegisterTransitGatewayRequest {
  GlobalNetworkId: string;
  TransitGatewayArn: string;
}
export interface RegisterTransitGatewayResponse {
  TransitGatewayRegistration?: TransitGatewayRegistration;
}
export interface RejectAttachmentRequest {
  AttachmentId: string;
}
export interface RejectAttachmentResponse {
  Attachment?: Attachment;
}
export interface Relationship {
  From?: string;
  To?: string;
}
export type RelationshipList = Array<Relationship>;
export type ResourceArn = string;

export declare class ResourceNotFoundException extends Data.TaggedError(
  "ResourceNotFoundException",
)<{
  readonly Message: string;
  readonly ResourceId: string;
  readonly ResourceType: string;
  readonly Context?: Record<string, string>;
}> {}
export interface RestoreCoreNetworkPolicyVersionRequest {
  CoreNetworkId: string;
  PolicyVersionId: number;
}
export interface RestoreCoreNetworkPolicyVersionResponse {
  CoreNetworkPolicy?: CoreNetworkPolicy;
}
export type RetryAfterSeconds = number;

export interface RouteAnalysis {
  GlobalNetworkId?: string;
  OwnerAccountId?: string;
  RouteAnalysisId?: string;
  StartTimestamp?: Date | string;
  Status?: RouteAnalysisStatus;
  Source?: RouteAnalysisEndpointOptions;
  Destination?: RouteAnalysisEndpointOptions;
  IncludeReturnPath?: boolean;
  UseMiddleboxes?: boolean;
  ForwardPath?: RouteAnalysisPath;
  ReturnPath?: RouteAnalysisPath;
}
export interface RouteAnalysisCompletion {
  ResultCode?: RouteAnalysisCompletionResultCode;
  ReasonCode?: RouteAnalysisCompletionReasonCode;
  ReasonContext?: Record<string, string>;
}
export type RouteAnalysisCompletionReasonCode = "TRANSIT_GATEWAY_ATTACHMENT_NOT_FOUND" | "TRANSIT_GATEWAY_ATTACHMENT_NOT_IN_TRANSIT_GATEWAY" | "CYCLIC_PATH_DETECTED" | "TRANSIT_GATEWAY_ATTACHMENT_STABLE_ROUTE_TABLE_NOT_FOUND" | "ROUTE_NOT_FOUND" | "BLACKHOLE_ROUTE_FOR_DESTINATION_FOUND" | "INACTIVE_ROUTE_FOR_DESTINATION_FOUND" | "TRANSIT_GATEWAY_ATTACHMENT" | "MAX_HOPS_EXCEEDED" | "POSSIBLE_MIDDLEBOX" | "NO_DESTINATION_ARN_PROVIDED";
export type RouteAnalysisCompletionResultCode = "CONNECTED" | "NOT_CONNECTED";
export interface RouteAnalysisEndpointOptions {
  TransitGatewayAttachmentArn?: string;
  TransitGatewayArn?: string;
  IpAddress?: string;
}
export interface RouteAnalysisEndpointOptionsSpecification {
  TransitGatewayAttachmentArn?: string;
  IpAddress?: string;
}
export interface RouteAnalysisPath {
  CompletionStatus?: RouteAnalysisCompletion;
  Path?: Array<PathComponent>;
}
export type RouteAnalysisStatus = "running" | "completed" | "failed";
export type RouteState = "ACTIVE" | "BLACKHOLE";
export type RouteStateList = Array<RouteState>;
export interface RouteTableIdentifier {
  TransitGatewayRouteTableArn?: string;
  CoreNetworkSegmentEdge?: CoreNetworkSegmentEdgeIdentifier;
  CoreNetworkNetworkFunctionGroup?: CoreNetworkNetworkFunctionGroupIdentifier;
}
export type RouteTableType = "TRANSIT_GATEWAY_ROUTE_TABLE" | "CORE_NETWORK_SEGMENT" | "NETWORK_FUNCTION_GROUP";
export type RouteType = "PROPAGATED" | "STATIC";
export type RouteTypeList = Array<RouteType>;
export type SegmentActionServiceInsertion = "SEND_VIA" | "SEND_TO";
export type SendViaMode = "DUAL_HOP" | "SINGLE_HOP";
export type ServerSideString = string;

export interface ServiceInsertionAction {
  Action?: SegmentActionServiceInsertion;
  Mode?: SendViaMode;
  WhenSentTo?: WhenSentTo;
  Via?: Via;
}
export type ServiceInsertionActionList = Array<ServiceInsertionAction>;
export interface ServiceInsertionSegments {
  SendVia?: Array<string>;
  SendTo?: Array<string>;
}
export declare class ServiceQuotaExceededException extends Data.TaggedError(
  "ServiceQuotaExceededException",
)<{
  readonly Message: string;
  readonly ResourceId?: string;
  readonly ResourceType?: string;
  readonly LimitCode: string;
  readonly ServiceCode: string;
}> {}
export interface Site {
  SiteId?: string;
  SiteArn?: string;
  GlobalNetworkId?: string;
  Description?: string;
  Location?: Location;
  CreatedAt?: Date | string;
  State?: SiteState;
  Tags?: Array<Tag>;
}
export type SiteArn = string;

export type SiteId = string;

export type SiteIdList = Array<string>;
export type SiteList = Array<Site>;
export type SiteState = "pending" | "available" | "deleting" | "updating";
export interface SiteToSiteVpnAttachment {
  Attachment?: Attachment;
  VpnConnectionArn?: string;
}
export type SLRDeploymentStatus = string;

export interface StartOrganizationServiceAccessUpdateRequest {
  Action: string;
}
export interface StartOrganizationServiceAccessUpdateResponse {
  OrganizationStatus?: OrganizationStatus;
}
export interface StartRouteAnalysisRequest {
  GlobalNetworkId: string;
  Source: RouteAnalysisEndpointOptionsSpecification;
  Destination: RouteAnalysisEndpointOptionsSpecification;
  IncludeReturnPath?: boolean;
  UseMiddleboxes?: boolean;
}
export interface StartRouteAnalysisResponse {
  RouteAnalysis?: RouteAnalysis;
}
export type SubnetArn = string;

export type SubnetArnList = Array<string>;
export type SynthesizedJsonCoreNetworkPolicyDocument = string;

export type SynthesizedJsonResourcePolicyDocument = string;

export interface Tag {
  Key?: string;
  Value?: string;
}
export type TagKey = string;

export type TagKeyList = Array<string>;
export type TagList = Array<Tag>;
export interface TagResourceRequest {
  ResourceArn: string;
  Tags: Array<Tag>;
}
export interface TagResourceResponse {
}
export type TagValue = string;

export declare class ThrottlingException extends Data.TaggedError(
  "ThrottlingException",
)<{
  readonly Message: string;
  readonly RetryAfterSeconds?: number;
}> {}
export type TransitGatewayArn = string;

export type TransitGatewayArnList = Array<string>;
export type TransitGatewayAttachmentArn = string;

export type TransitGatewayAttachmentId = string;

export type TransitGatewayConnectPeerArn = string;

export type TransitGatewayConnectPeerArnList = Array<string>;
export interface TransitGatewayConnectPeerAssociation {
  TransitGatewayConnectPeerArn?: string;
  GlobalNetworkId?: string;
  DeviceId?: string;
  LinkId?: string;
  State?: TransitGatewayConnectPeerAssociationState;
}
export type TransitGatewayConnectPeerAssociationList = Array<TransitGatewayConnectPeerAssociation>;
export type TransitGatewayConnectPeerAssociationState = "pending" | "available" | "deleting" | "deleted";
export interface TransitGatewayPeering {
  Peering?: Peering;
  TransitGatewayArn?: string;
  TransitGatewayPeeringAttachmentId?: string;
}
export type TransitGatewayPeeringAttachmentId = string;

export interface TransitGatewayRegistration {
  GlobalNetworkId?: string;
  TransitGatewayArn?: string;
  State?: TransitGatewayRegistrationStateReason;
}
export type TransitGatewayRegistrationList = Array<TransitGatewayRegistration>;
export type TransitGatewayRegistrationState = "pending" | "available" | "deleting" | "deleted" | "failed";
export interface TransitGatewayRegistrationStateReason {
  Code?: TransitGatewayRegistrationState;
  Message?: string;
}
export type TransitGatewayRouteTableArn = string;

export interface TransitGatewayRouteTableAttachment {
  Attachment?: Attachment;
  PeeringId?: string;
  TransitGatewayRouteTableArn?: string;
}
export type TunnelProtocol = "GRE" | "NO_ENCAP";
export interface UntagResourceRequest {
  ResourceArn: string;
  TagKeys: Array<string>;
}
export interface UntagResourceResponse {
}
export interface UpdateConnectionRequest {
  GlobalNetworkId: string;
  ConnectionId: string;
  LinkId?: string;
  ConnectedLinkId?: string;
  Description?: string;
}
export interface UpdateConnectionResponse {
  Connection?: Connection;
}
export interface UpdateCoreNetworkRequest {
  CoreNetworkId: string;
  Description?: string;
}
export interface UpdateCoreNetworkResponse {
  CoreNetwork?: CoreNetwork;
}
export interface UpdateDeviceRequest {
  GlobalNetworkId: string;
  DeviceId: string;
  AWSLocation?: AWSLocation;
  Description?: string;
  Type?: string;
  Vendor?: string;
  Model?: string;
  SerialNumber?: string;
  Location?: Location;
  SiteId?: string;
}
export interface UpdateDeviceResponse {
  Device?: Device;
}
export interface UpdateDirectConnectGatewayAttachmentRequest {
  AttachmentId: string;
  EdgeLocations?: Array<string>;
}
export interface UpdateDirectConnectGatewayAttachmentResponse {
  DirectConnectGatewayAttachment?: DirectConnectGatewayAttachment;
}
export interface UpdateGlobalNetworkRequest {
  GlobalNetworkId: string;
  Description?: string;
}
export interface UpdateGlobalNetworkResponse {
  GlobalNetwork?: GlobalNetwork;
}
export interface UpdateLinkRequest {
  GlobalNetworkId: string;
  LinkId: string;
  Description?: string;
  Type?: string;
  Bandwidth?: Bandwidth;
  Provider?: string;
}
export interface UpdateLinkResponse {
  Link?: Link;
}
export interface UpdateNetworkResourceMetadataRequest {
  GlobalNetworkId: string;
  ResourceArn: string;
  Metadata: Record<string, string>;
}
export interface UpdateNetworkResourceMetadataResponse {
  ResourceArn?: string;
  Metadata?: Record<string, string>;
}
export interface UpdateSiteRequest {
  GlobalNetworkId: string;
  SiteId: string;
  Description?: string;
  Location?: Location;
}
export interface UpdateSiteResponse {
  Site?: Site;
}
export interface UpdateVpcAttachmentRequest {
  AttachmentId: string;
  AddSubnetArns?: Array<string>;
  RemoveSubnetArns?: Array<string>;
  Options?: VpcOptions;
}
export interface UpdateVpcAttachmentResponse {
  VpcAttachment?: VpcAttachment;
}
export declare class ValidationException extends Data.TaggedError(
  "ValidationException",
)<{
  readonly Message: string;
  readonly Reason?: ValidationExceptionReason;
  readonly Fields?: Array<ValidationExceptionField>;
}> {}
export interface ValidationExceptionField {
  Name: string;
  Message: string;
}
export type ValidationExceptionFieldList = Array<ValidationExceptionField>;
export type ValidationExceptionReason = "UNKNOWN_OPERATION" | "CANNOT_PARSE" | "FIELD_VALIDATION_FAILED" | "OTHER";
export interface Via {
  NetworkFunctionGroups?: Array<NetworkFunctionGroup>;
  WithEdgeOverrides?: Array<EdgeOverride>;
}
export type VpcArn = string;

export interface VpcAttachment {
  Attachment?: Attachment;
  SubnetArns?: Array<string>;
  Options?: VpcOptions;
}
export interface VpcOptions {
  Ipv6Support?: boolean;
  ApplianceModeSupport?: boolean;
  DnsSupport?: boolean;
  SecurityGroupReferencingSupport?: boolean;
}
export type VpnConnectionArn = string;

export interface WhenSentTo {
  WhenSentToSegmentsList?: Array<string>;
}
export type WhenSentToSegmentsList = Array<string>;
export type WithEdgeOverridesList = Array<EdgeOverride>;
export declare namespace AcceptAttachment {
  export type Input = AcceptAttachmentRequest;
  export type Output = AcceptAttachmentResponse;
  export type Error =
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace AssociateConnectPeer {
  export type Input = AssociateConnectPeerRequest;
  export type Output = AssociateConnectPeerResponse;
  export type Error =
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ServiceQuotaExceededException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace AssociateCustomerGateway {
  export type Input = AssociateCustomerGatewayRequest;
  export type Output = AssociateCustomerGatewayResponse;
  export type Error =
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ServiceQuotaExceededException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace AssociateLink {
  export type Input = AssociateLinkRequest;
  export type Output = AssociateLinkResponse;
  export type Error =
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ServiceQuotaExceededException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace AssociateTransitGatewayConnectPeer {
  export type Input = AssociateTransitGatewayConnectPeerRequest;
  export type Output = AssociateTransitGatewayConnectPeerResponse;
  export type Error =
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ServiceQuotaExceededException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace CreateConnectAttachment {
  export type Input = CreateConnectAttachmentRequest;
  export type Output = CreateConnectAttachmentResponse;
  export type Error =
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace CreateConnectPeer {
  export type Input = CreateConnectPeerRequest;
  export type Output = CreateConnectPeerResponse;
  export type Error =
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace CreateConnection {
  export type Input = CreateConnectionRequest;
  export type Output = CreateConnectionResponse;
  export type Error =
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ServiceQuotaExceededException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace CreateCoreNetwork {
  export type Input = CreateCoreNetworkRequest;
  export type Output = CreateCoreNetworkResponse;
  export type Error =
    | AccessDeniedException
    | ConflictException
    | CoreNetworkPolicyException
    | InternalServerException
    | ServiceQuotaExceededException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace CreateDevice {
  export type Input = CreateDeviceRequest;
  export type Output = CreateDeviceResponse;
  export type Error =
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ServiceQuotaExceededException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace CreateDirectConnectGatewayAttachment {
  export type Input = CreateDirectConnectGatewayAttachmentRequest;
  export type Output = CreateDirectConnectGatewayAttachmentResponse;
  export type Error =
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace CreateGlobalNetwork {
  export type Input = CreateGlobalNetworkRequest;
  export type Output = CreateGlobalNetworkResponse;
  export type Error =
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ServiceQuotaExceededException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace CreateLink {
  export type Input = CreateLinkRequest;
  export type Output = CreateLinkResponse;
  export type Error =
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ServiceQuotaExceededException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace CreateSite {
  export type Input = CreateSiteRequest;
  export type Output = CreateSiteResponse;
  export type Error =
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ServiceQuotaExceededException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace CreateSiteToSiteVpnAttachment {
  export type Input = CreateSiteToSiteVpnAttachmentRequest;
  export type Output = CreateSiteToSiteVpnAttachmentResponse;
  export type Error =
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace CreateTransitGatewayPeering {
  export type Input = CreateTransitGatewayPeeringRequest;
  export type Output = CreateTransitGatewayPeeringResponse;
  export type Error =
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace CreateTransitGatewayRouteTableAttachment {
  export type Input = CreateTransitGatewayRouteTableAttachmentRequest;
  export type Output = CreateTransitGatewayRouteTableAttachmentResponse;
  export type Error =
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace CreateVpcAttachment {
  export type Input = CreateVpcAttachmentRequest;
  export type Output = CreateVpcAttachmentResponse;
  export type Error =
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace DeleteAttachment {
  export type Input = DeleteAttachmentRequest;
  export type Output = DeleteAttachmentResponse;
  export type Error =
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace DeleteConnectPeer {
  export type Input = DeleteConnectPeerRequest;
  export type Output = DeleteConnectPeerResponse;
  export type Error =
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace DeleteConnection {
  export type Input = DeleteConnectionRequest;
  export type Output = DeleteConnectionResponse;
  export type Error =
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace DeleteCoreNetwork {
  export type Input = DeleteCoreNetworkRequest;
  export type Output = DeleteCoreNetworkResponse;
  export type Error =
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace DeleteCoreNetworkPolicyVersion {
  export type Input = DeleteCoreNetworkPolicyVersionRequest;
  export type Output = DeleteCoreNetworkPolicyVersionResponse;
  export type Error =
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace DeleteDevice {
  export type Input = DeleteDeviceRequest;
  export type Output = DeleteDeviceResponse;
  export type Error =
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace DeleteGlobalNetwork {
  export type Input = DeleteGlobalNetworkRequest;
  export type Output = DeleteGlobalNetworkResponse;
  export type Error =
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace DeleteLink {
  export type Input = DeleteLinkRequest;
  export type Output = DeleteLinkResponse;
  export type Error =
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace DeletePeering {
  export type Input = DeletePeeringRequest;
  export type Output = DeletePeeringResponse;
  export type Error =
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace DeleteResourcePolicy {
  export type Input = DeleteResourcePolicyRequest;
  export type Output = DeleteResourcePolicyResponse;
  export type Error =
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace DeleteSite {
  export type Input = DeleteSiteRequest;
  export type Output = DeleteSiteResponse;
  export type Error =
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace DeregisterTransitGateway {
  export type Input = DeregisterTransitGatewayRequest;
  export type Output = DeregisterTransitGatewayResponse;
  export type Error =
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace DescribeGlobalNetworks {
  export type Input = DescribeGlobalNetworksRequest;
  export type Output = DescribeGlobalNetworksResponse;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace DisassociateConnectPeer {
  export type Input = DisassociateConnectPeerRequest;
  export type Output = DisassociateConnectPeerResponse;
  export type Error =
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace DisassociateCustomerGateway {
  export type Input = DisassociateCustomerGatewayRequest;
  export type Output = DisassociateCustomerGatewayResponse;
  export type Error =
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace DisassociateLink {
  export type Input = DisassociateLinkRequest;
  export type Output = DisassociateLinkResponse;
  export type Error =
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace DisassociateTransitGatewayConnectPeer {
  export type Input = DisassociateTransitGatewayConnectPeerRequest;
  export type Output = DisassociateTransitGatewayConnectPeerResponse;
  export type Error =
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace ExecuteCoreNetworkChangeSet {
  export type Input = ExecuteCoreNetworkChangeSetRequest;
  export type Output = ExecuteCoreNetworkChangeSetResponse;
  export type Error =
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace GetConnectAttachment {
  export type Input = GetConnectAttachmentRequest;
  export type Output = GetConnectAttachmentResponse;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace GetConnectPeer {
  export type Input = GetConnectPeerRequest;
  export type Output = GetConnectPeerResponse;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace GetConnectPeerAssociations {
  export type Input = GetConnectPeerAssociationsRequest;
  export type Output = GetConnectPeerAssociationsResponse;
  export type Error =
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace GetConnections {
  export type Input = GetConnectionsRequest;
  export type Output = GetConnectionsResponse;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace GetCoreNetwork {
  export type Input = GetCoreNetworkRequest;
  export type Output = GetCoreNetworkResponse;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace GetCoreNetworkChangeEvents {
  export type Input = GetCoreNetworkChangeEventsRequest;
  export type Output = GetCoreNetworkChangeEventsResponse;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace GetCoreNetworkChangeSet {
  export type Input = GetCoreNetworkChangeSetRequest;
  export type Output = GetCoreNetworkChangeSetResponse;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace GetCoreNetworkPolicy {
  export type Input = GetCoreNetworkPolicyRequest;
  export type Output = GetCoreNetworkPolicyResponse;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace GetCustomerGatewayAssociations {
  export type Input = GetCustomerGatewayAssociationsRequest;
  export type Output = GetCustomerGatewayAssociationsResponse;
  export type Error =
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace GetDevices {
  export type Input = GetDevicesRequest;
  export type Output = GetDevicesResponse;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace GetDirectConnectGatewayAttachment {
  export type Input = GetDirectConnectGatewayAttachmentRequest;
  export type Output = GetDirectConnectGatewayAttachmentResponse;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace GetLinkAssociations {
  export type Input = GetLinkAssociationsRequest;
  export type Output = GetLinkAssociationsResponse;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace GetLinks {
  export type Input = GetLinksRequest;
  export type Output = GetLinksResponse;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace GetNetworkResourceCounts {
  export type Input = GetNetworkResourceCountsRequest;
  export type Output = GetNetworkResourceCountsResponse;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace GetNetworkResourceRelationships {
  export type Input = GetNetworkResourceRelationshipsRequest;
  export type Output = GetNetworkResourceRelationshipsResponse;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace GetNetworkResources {
  export type Input = GetNetworkResourcesRequest;
  export type Output = GetNetworkResourcesResponse;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace GetNetworkRoutes {
  export type Input = GetNetworkRoutesRequest;
  export type Output = GetNetworkRoutesResponse;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace GetNetworkTelemetry {
  export type Input = GetNetworkTelemetryRequest;
  export type Output = GetNetworkTelemetryResponse;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace GetResourcePolicy {
  export type Input = GetResourcePolicyRequest;
  export type Output = GetResourcePolicyResponse;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace GetRouteAnalysis {
  export type Input = GetRouteAnalysisRequest;
  export type Output = GetRouteAnalysisResponse;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace GetSiteToSiteVpnAttachment {
  export type Input = GetSiteToSiteVpnAttachmentRequest;
  export type Output = GetSiteToSiteVpnAttachmentResponse;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace GetSites {
  export type Input = GetSitesRequest;
  export type Output = GetSitesResponse;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace GetTransitGatewayConnectPeerAssociations {
  export type Input = GetTransitGatewayConnectPeerAssociationsRequest;
  export type Output = GetTransitGatewayConnectPeerAssociationsResponse;
  export type Error =
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace GetTransitGatewayPeering {
  export type Input = GetTransitGatewayPeeringRequest;
  export type Output = GetTransitGatewayPeeringResponse;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace GetTransitGatewayRegistrations {
  export type Input = GetTransitGatewayRegistrationsRequest;
  export type Output = GetTransitGatewayRegistrationsResponse;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace GetTransitGatewayRouteTableAttachment {
  export type Input = GetTransitGatewayRouteTableAttachmentRequest;
  export type Output = GetTransitGatewayRouteTableAttachmentResponse;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace GetVpcAttachment {
  export type Input = GetVpcAttachmentRequest;
  export type Output = GetVpcAttachmentResponse;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace ListAttachments {
  export type Input = ListAttachmentsRequest;
  export type Output = ListAttachmentsResponse;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace ListConnectPeers {
  export type Input = ListConnectPeersRequest;
  export type Output = ListConnectPeersResponse;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace ListCoreNetworkPolicyVersions {
  export type Input = ListCoreNetworkPolicyVersionsRequest;
  export type Output = ListCoreNetworkPolicyVersionsResponse;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace ListCoreNetworks {
  export type Input = ListCoreNetworksRequest;
  export type Output = ListCoreNetworksResponse;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace ListOrganizationServiceAccessStatus {
  export type Input = ListOrganizationServiceAccessStatusRequest;
  export type Output = ListOrganizationServiceAccessStatusResponse;
  export type Error =
    | CommonAwsError;
}

export declare namespace ListPeerings {
  export type Input = ListPeeringsRequest;
  export type Output = ListPeeringsResponse;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace ListTagsForResource {
  export type Input = ListTagsForResourceRequest;
  export type Output = ListTagsForResourceResponse;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace PutCoreNetworkPolicy {
  export type Input = PutCoreNetworkPolicyRequest;
  export type Output = PutCoreNetworkPolicyResponse;
  export type Error =
    | AccessDeniedException
    | ConflictException
    | CoreNetworkPolicyException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace PutResourcePolicy {
  export type Input = PutResourcePolicyRequest;
  export type Output = PutResourcePolicyResponse;
  export type Error =
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ServiceQuotaExceededException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace RegisterTransitGateway {
  export type Input = RegisterTransitGatewayRequest;
  export type Output = RegisterTransitGatewayResponse;
  export type Error =
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace RejectAttachment {
  export type Input = RejectAttachmentRequest;
  export type Output = RejectAttachmentResponse;
  export type Error =
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace RestoreCoreNetworkPolicyVersion {
  export type Input = RestoreCoreNetworkPolicyVersionRequest;
  export type Output = RestoreCoreNetworkPolicyVersionResponse;
  export type Error =
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace StartOrganizationServiceAccessUpdate {
  export type Input = StartOrganizationServiceAccessUpdateRequest;
  export type Output = StartOrganizationServiceAccessUpdateResponse;
  export type Error =
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ServiceQuotaExceededException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace StartRouteAnalysis {
  export type Input = StartRouteAnalysisRequest;
  export type Output = StartRouteAnalysisResponse;
  export type Error =
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace TagResource {
  export type Input = TagResourceRequest;
  export type Output = TagResourceResponse;
  export type Error =
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ServiceQuotaExceededException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace UntagResource {
  export type Input = UntagResourceRequest;
  export type Output = UntagResourceResponse;
  export type Error =
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace UpdateConnection {
  export type Input = UpdateConnectionRequest;
  export type Output = UpdateConnectionResponse;
  export type Error =
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace UpdateCoreNetwork {
  export type Input = UpdateCoreNetworkRequest;
  export type Output = UpdateCoreNetworkResponse;
  export type Error =
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace UpdateDevice {
  export type Input = UpdateDeviceRequest;
  export type Output = UpdateDeviceResponse;
  export type Error =
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace UpdateDirectConnectGatewayAttachment {
  export type Input = UpdateDirectConnectGatewayAttachmentRequest;
  export type Output = UpdateDirectConnectGatewayAttachmentResponse;
  export type Error =
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace UpdateGlobalNetwork {
  export type Input = UpdateGlobalNetworkRequest;
  export type Output = UpdateGlobalNetworkResponse;
  export type Error =
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace UpdateLink {
  export type Input = UpdateLinkRequest;
  export type Output = UpdateLinkResponse;
  export type Error =
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ServiceQuotaExceededException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace UpdateNetworkResourceMetadata {
  export type Input = UpdateNetworkResourceMetadataRequest;
  export type Output = UpdateNetworkResourceMetadataResponse;
  export type Error =
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace UpdateSite {
  export type Input = UpdateSiteRequest;
  export type Output = UpdateSiteResponse;
  export type Error =
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace UpdateVpcAttachment {
  export type Input = UpdateVpcAttachmentRequest;
  export type Output = UpdateVpcAttachmentResponse;
  export type Error =
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

