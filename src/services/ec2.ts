import type { Effect, Data } from "effect";
import type { CommonAwsError } from "../client.ts";

export interface AmazonEC2 {
  acceptAddressTransfer(
    input: AcceptAddressTransferRequest,
  ): Effect.Effect<
    AcceptAddressTransferResult,
    CommonAwsError
  >;
  acceptCapacityReservationBillingOwnership(
    input: AcceptCapacityReservationBillingOwnershipRequest,
  ): Effect.Effect<
    AcceptCapacityReservationBillingOwnershipResult,
    CommonAwsError
  >;
  acceptReservedInstancesExchangeQuote(
    input: AcceptReservedInstancesExchangeQuoteRequest,
  ): Effect.Effect<
    AcceptReservedInstancesExchangeQuoteResult,
    CommonAwsError
  >;
  acceptTransitGatewayMulticastDomainAssociations(
    input: AcceptTransitGatewayMulticastDomainAssociationsRequest,
  ): Effect.Effect<
    AcceptTransitGatewayMulticastDomainAssociationsResult,
    CommonAwsError
  >;
  acceptTransitGatewayPeeringAttachment(
    input: AcceptTransitGatewayPeeringAttachmentRequest,
  ): Effect.Effect<
    AcceptTransitGatewayPeeringAttachmentResult,
    CommonAwsError
  >;
  acceptTransitGatewayVpcAttachment(
    input: AcceptTransitGatewayVpcAttachmentRequest,
  ): Effect.Effect<
    AcceptTransitGatewayVpcAttachmentResult,
    CommonAwsError
  >;
  acceptVpcEndpointConnections(
    input: AcceptVpcEndpointConnectionsRequest,
  ): Effect.Effect<
    AcceptVpcEndpointConnectionsResult,
    CommonAwsError
  >;
  acceptVpcPeeringConnection(
    input: AcceptVpcPeeringConnectionRequest,
  ): Effect.Effect<
    AcceptVpcPeeringConnectionResult,
    CommonAwsError
  >;
  advertiseByoipCidr(
    input: AdvertiseByoipCidrRequest,
  ): Effect.Effect<
    AdvertiseByoipCidrResult,
    CommonAwsError
  >;
  allocateAddress(
    input: AllocateAddressRequest,
  ): Effect.Effect<
    AllocateAddressResult,
    CommonAwsError
  >;
  allocateHosts(
    input: AllocateHostsRequest,
  ): Effect.Effect<
    AllocateHostsResult,
    CommonAwsError
  >;
  allocateIpamPoolCidr(
    input: AllocateIpamPoolCidrRequest,
  ): Effect.Effect<
    AllocateIpamPoolCidrResult,
    CommonAwsError
  >;
  applySecurityGroupsToClientVpnTargetNetwork(
    input: ApplySecurityGroupsToClientVpnTargetNetworkRequest,
  ): Effect.Effect<
    ApplySecurityGroupsToClientVpnTargetNetworkResult,
    CommonAwsError
  >;
  assignIpv6Addresses(
    input: AssignIpv6AddressesRequest,
  ): Effect.Effect<
    AssignIpv6AddressesResult,
    CommonAwsError
  >;
  assignPrivateIpAddresses(
    input: AssignPrivateIpAddressesRequest,
  ): Effect.Effect<
    AssignPrivateIpAddressesResult,
    CommonAwsError
  >;
  assignPrivateNatGatewayAddress(
    input: AssignPrivateNatGatewayAddressRequest,
  ): Effect.Effect<
    AssignPrivateNatGatewayAddressResult,
    CommonAwsError
  >;
  associateAddress(
    input: AssociateAddressRequest,
  ): Effect.Effect<
    AssociateAddressResult,
    CommonAwsError
  >;
  associateCapacityReservationBillingOwner(
    input: AssociateCapacityReservationBillingOwnerRequest,
  ): Effect.Effect<
    AssociateCapacityReservationBillingOwnerResult,
    CommonAwsError
  >;
  associateClientVpnTargetNetwork(
    input: AssociateClientVpnTargetNetworkRequest,
  ): Effect.Effect<
    AssociateClientVpnTargetNetworkResult,
    CommonAwsError
  >;
  associateDhcpOptions(
    input: AssociateDhcpOptionsRequest,
  ): Effect.Effect<
    {},
    CommonAwsError
  >;
  associateEnclaveCertificateIamRole(
    input: AssociateEnclaveCertificateIamRoleRequest,
  ): Effect.Effect<
    AssociateEnclaveCertificateIamRoleResult,
    CommonAwsError
  >;
  associateIamInstanceProfile(
    input: AssociateIamInstanceProfileRequest,
  ): Effect.Effect<
    AssociateIamInstanceProfileResult,
    CommonAwsError
  >;
  associateInstanceEventWindow(
    input: AssociateInstanceEventWindowRequest,
  ): Effect.Effect<
    AssociateInstanceEventWindowResult,
    CommonAwsError
  >;
  associateIpamByoasn(
    input: AssociateIpamByoasnRequest,
  ): Effect.Effect<
    AssociateIpamByoasnResult,
    CommonAwsError
  >;
  associateIpamResourceDiscovery(
    input: AssociateIpamResourceDiscoveryRequest,
  ): Effect.Effect<
    AssociateIpamResourceDiscoveryResult,
    CommonAwsError
  >;
  associateNatGatewayAddress(
    input: AssociateNatGatewayAddressRequest,
  ): Effect.Effect<
    AssociateNatGatewayAddressResult,
    CommonAwsError
  >;
  associateRouteServer(
    input: AssociateRouteServerRequest,
  ): Effect.Effect<
    AssociateRouteServerResult,
    CommonAwsError
  >;
  associateRouteTable(
    input: AssociateRouteTableRequest,
  ): Effect.Effect<
    AssociateRouteTableResult,
    CommonAwsError
  >;
  associateSecurityGroupVpc(
    input: AssociateSecurityGroupVpcRequest,
  ): Effect.Effect<
    AssociateSecurityGroupVpcResult,
    CommonAwsError
  >;
  associateSubnetCidrBlock(
    input: AssociateSubnetCidrBlockRequest,
  ): Effect.Effect<
    AssociateSubnetCidrBlockResult,
    CommonAwsError
  >;
  associateTransitGatewayMulticastDomain(
    input: AssociateTransitGatewayMulticastDomainRequest,
  ): Effect.Effect<
    AssociateTransitGatewayMulticastDomainResult,
    CommonAwsError
  >;
  associateTransitGatewayPolicyTable(
    input: AssociateTransitGatewayPolicyTableRequest,
  ): Effect.Effect<
    AssociateTransitGatewayPolicyTableResult,
    CommonAwsError
  >;
  associateTransitGatewayRouteTable(
    input: AssociateTransitGatewayRouteTableRequest,
  ): Effect.Effect<
    AssociateTransitGatewayRouteTableResult,
    CommonAwsError
  >;
  associateTrunkInterface(
    input: AssociateTrunkInterfaceRequest,
  ): Effect.Effect<
    AssociateTrunkInterfaceResult,
    CommonAwsError
  >;
  associateVpcCidrBlock(
    input: AssociateVpcCidrBlockRequest,
  ): Effect.Effect<
    AssociateVpcCidrBlockResult,
    CommonAwsError
  >;
  attachClassicLinkVpc(
    input: AttachClassicLinkVpcRequest,
  ): Effect.Effect<
    AttachClassicLinkVpcResult,
    CommonAwsError
  >;
  attachInternetGateway(
    input: AttachInternetGatewayRequest,
  ): Effect.Effect<
    {},
    CommonAwsError
  >;
  attachNetworkInterface(
    input: AttachNetworkInterfaceRequest,
  ): Effect.Effect<
    AttachNetworkInterfaceResult,
    CommonAwsError
  >;
  attachVerifiedAccessTrustProvider(
    input: AttachVerifiedAccessTrustProviderRequest,
  ): Effect.Effect<
    AttachVerifiedAccessTrustProviderResult,
    CommonAwsError
  >;
  attachVolume(
    input: AttachVolumeRequest,
  ): Effect.Effect<
    VolumeAttachment,
    CommonAwsError
  >;
  attachVpnGateway(
    input: AttachVpnGatewayRequest,
  ): Effect.Effect<
    AttachVpnGatewayResult,
    CommonAwsError
  >;
  authorizeClientVpnIngress(
    input: AuthorizeClientVpnIngressRequest,
  ): Effect.Effect<
    AuthorizeClientVpnIngressResult,
    CommonAwsError
  >;
  authorizeSecurityGroupEgress(
    input: AuthorizeSecurityGroupEgressRequest,
  ): Effect.Effect<
    AuthorizeSecurityGroupEgressResult,
    CommonAwsError
  >;
  authorizeSecurityGroupIngress(
    input: AuthorizeSecurityGroupIngressRequest,
  ): Effect.Effect<
    AuthorizeSecurityGroupIngressResult,
    CommonAwsError
  >;
  bundleInstance(
    input: BundleInstanceRequest,
  ): Effect.Effect<
    BundleInstanceResult,
    CommonAwsError
  >;
  cancelBundleTask(
    input: CancelBundleTaskRequest,
  ): Effect.Effect<
    CancelBundleTaskResult,
    CommonAwsError
  >;
  cancelCapacityReservation(
    input: CancelCapacityReservationRequest,
  ): Effect.Effect<
    CancelCapacityReservationResult,
    CommonAwsError
  >;
  cancelCapacityReservationFleets(
    input: CancelCapacityReservationFleetsRequest,
  ): Effect.Effect<
    CancelCapacityReservationFleetsResult,
    CommonAwsError
  >;
  cancelConversionTask(
    input: CancelConversionRequest,
  ): Effect.Effect<
    {},
    CommonAwsError
  >;
  cancelDeclarativePoliciesReport(
    input: CancelDeclarativePoliciesReportRequest,
  ): Effect.Effect<
    CancelDeclarativePoliciesReportResult,
    CommonAwsError
  >;
  cancelExportTask(
    input: CancelExportTaskRequest,
  ): Effect.Effect<
    {},
    CommonAwsError
  >;
  cancelImageLaunchPermission(
    input: CancelImageLaunchPermissionRequest,
  ): Effect.Effect<
    CancelImageLaunchPermissionResult,
    CommonAwsError
  >;
  cancelImportTask(
    input: CancelImportTaskRequest,
  ): Effect.Effect<
    CancelImportTaskResult,
    CommonAwsError
  >;
  cancelReservedInstancesListing(
    input: CancelReservedInstancesListingRequest,
  ): Effect.Effect<
    CancelReservedInstancesListingResult,
    CommonAwsError
  >;
  cancelSpotFleetRequests(
    input: CancelSpotFleetRequestsRequest,
  ): Effect.Effect<
    CancelSpotFleetRequestsResponse,
    CommonAwsError
  >;
  cancelSpotInstanceRequests(
    input: CancelSpotInstanceRequestsRequest,
  ): Effect.Effect<
    CancelSpotInstanceRequestsResult,
    CommonAwsError
  >;
  confirmProductInstance(
    input: ConfirmProductInstanceRequest,
  ): Effect.Effect<
    ConfirmProductInstanceResult,
    CommonAwsError
  >;
  copyFpgaImage(
    input: CopyFpgaImageRequest,
  ): Effect.Effect<
    CopyFpgaImageResult,
    CommonAwsError
  >;
  copyImage(
    input: CopyImageRequest,
  ): Effect.Effect<
    CopyImageResult,
    CommonAwsError
  >;
  copySnapshot(
    input: CopySnapshotRequest,
  ): Effect.Effect<
    CopySnapshotResult,
    CommonAwsError
  >;
  createCapacityReservation(
    input: CreateCapacityReservationRequest,
  ): Effect.Effect<
    CreateCapacityReservationResult,
    CommonAwsError
  >;
  createCapacityReservationBySplitting(
    input: CreateCapacityReservationBySplittingRequest,
  ): Effect.Effect<
    CreateCapacityReservationBySplittingResult,
    CommonAwsError
  >;
  createCapacityReservationFleet(
    input: CreateCapacityReservationFleetRequest,
  ): Effect.Effect<
    CreateCapacityReservationFleetResult,
    CommonAwsError
  >;
  createCarrierGateway(
    input: CreateCarrierGatewayRequest,
  ): Effect.Effect<
    CreateCarrierGatewayResult,
    CommonAwsError
  >;
  createClientVpnEndpoint(
    input: CreateClientVpnEndpointRequest,
  ): Effect.Effect<
    CreateClientVpnEndpointResult,
    CommonAwsError
  >;
  createClientVpnRoute(
    input: CreateClientVpnRouteRequest,
  ): Effect.Effect<
    CreateClientVpnRouteResult,
    CommonAwsError
  >;
  createCoipCidr(
    input: CreateCoipCidrRequest,
  ): Effect.Effect<
    CreateCoipCidrResult,
    CommonAwsError
  >;
  createCoipPool(
    input: CreateCoipPoolRequest,
  ): Effect.Effect<
    CreateCoipPoolResult,
    CommonAwsError
  >;
  createCustomerGateway(
    input: CreateCustomerGatewayRequest,
  ): Effect.Effect<
    CreateCustomerGatewayResult,
    CommonAwsError
  >;
  createDefaultSubnet(
    input: CreateDefaultSubnetRequest,
  ): Effect.Effect<
    CreateDefaultSubnetResult,
    CommonAwsError
  >;
  createDefaultVpc(
    input: CreateDefaultVpcRequest,
  ): Effect.Effect<
    CreateDefaultVpcResult,
    CommonAwsError
  >;
  createDelegateMacVolumeOwnershipTask(
    input: CreateDelegateMacVolumeOwnershipTaskRequest,
  ): Effect.Effect<
    CreateDelegateMacVolumeOwnershipTaskResult,
    CommonAwsError
  >;
  createDhcpOptions(
    input: CreateDhcpOptionsRequest,
  ): Effect.Effect<
    CreateDhcpOptionsResult,
    CommonAwsError
  >;
  createEgressOnlyInternetGateway(
    input: CreateEgressOnlyInternetGatewayRequest,
  ): Effect.Effect<
    CreateEgressOnlyInternetGatewayResult,
    CommonAwsError
  >;
  createFleet(
    input: CreateFleetRequest,
  ): Effect.Effect<
    CreateFleetResult,
    CommonAwsError
  >;
  createFlowLogs(
    input: CreateFlowLogsRequest,
  ): Effect.Effect<
    CreateFlowLogsResult,
    CommonAwsError
  >;
  createFpgaImage(
    input: CreateFpgaImageRequest,
  ): Effect.Effect<
    CreateFpgaImageResult,
    CommonAwsError
  >;
  createImage(
    input: CreateImageRequest,
  ): Effect.Effect<
    CreateImageResult,
    CommonAwsError
  >;
  createInstanceConnectEndpoint(
    input: CreateInstanceConnectEndpointRequest,
  ): Effect.Effect<
    CreateInstanceConnectEndpointResult,
    CommonAwsError
  >;
  createInstanceEventWindow(
    input: CreateInstanceEventWindowRequest,
  ): Effect.Effect<
    CreateInstanceEventWindowResult,
    CommonAwsError
  >;
  createInstanceExportTask(
    input: CreateInstanceExportTaskRequest,
  ): Effect.Effect<
    CreateInstanceExportTaskResult,
    CommonAwsError
  >;
  createInternetGateway(
    input: CreateInternetGatewayRequest,
  ): Effect.Effect<
    CreateInternetGatewayResult,
    CommonAwsError
  >;
  createIpam(
    input: CreateIpamRequest,
  ): Effect.Effect<
    CreateIpamResult,
    CommonAwsError
  >;
  createIpamExternalResourceVerificationToken(
    input: CreateIpamExternalResourceVerificationTokenRequest,
  ): Effect.Effect<
    CreateIpamExternalResourceVerificationTokenResult,
    CommonAwsError
  >;
  createIpamPool(
    input: CreateIpamPoolRequest,
  ): Effect.Effect<
    CreateIpamPoolResult,
    CommonAwsError
  >;
  createIpamResourceDiscovery(
    input: CreateIpamResourceDiscoveryRequest,
  ): Effect.Effect<
    CreateIpamResourceDiscoveryResult,
    CommonAwsError
  >;
  createIpamScope(
    input: CreateIpamScopeRequest,
  ): Effect.Effect<
    CreateIpamScopeResult,
    CommonAwsError
  >;
  createKeyPair(
    input: CreateKeyPairRequest,
  ): Effect.Effect<
    KeyPair,
    CommonAwsError
  >;
  createLaunchTemplate(
    input: CreateLaunchTemplateRequest,
  ): Effect.Effect<
    CreateLaunchTemplateResult,
    CommonAwsError
  >;
  createLaunchTemplateVersion(
    input: CreateLaunchTemplateVersionRequest,
  ): Effect.Effect<
    CreateLaunchTemplateVersionResult,
    CommonAwsError
  >;
  createLocalGatewayRoute(
    input: CreateLocalGatewayRouteRequest,
  ): Effect.Effect<
    CreateLocalGatewayRouteResult,
    CommonAwsError
  >;
  createLocalGatewayRouteTable(
    input: CreateLocalGatewayRouteTableRequest,
  ): Effect.Effect<
    CreateLocalGatewayRouteTableResult,
    CommonAwsError
  >;
  createLocalGatewayRouteTableVirtualInterfaceGroupAssociation(
    input: CreateLocalGatewayRouteTableVirtualInterfaceGroupAssociationRequest,
  ): Effect.Effect<
    CreateLocalGatewayRouteTableVirtualInterfaceGroupAssociationResult,
    CommonAwsError
  >;
  createLocalGatewayRouteTableVpcAssociation(
    input: CreateLocalGatewayRouteTableVpcAssociationRequest,
  ): Effect.Effect<
    CreateLocalGatewayRouteTableVpcAssociationResult,
    CommonAwsError
  >;
  createLocalGatewayVirtualInterface(
    input: CreateLocalGatewayVirtualInterfaceRequest,
  ): Effect.Effect<
    CreateLocalGatewayVirtualInterfaceResult,
    CommonAwsError
  >;
  createLocalGatewayVirtualInterfaceGroup(
    input: CreateLocalGatewayVirtualInterfaceGroupRequest,
  ): Effect.Effect<
    CreateLocalGatewayVirtualInterfaceGroupResult,
    CommonAwsError
  >;
  createMacSystemIntegrityProtectionModificationTask(
    input: CreateMacSystemIntegrityProtectionModificationTaskRequest,
  ): Effect.Effect<
    CreateMacSystemIntegrityProtectionModificationTaskResult,
    CommonAwsError
  >;
  createManagedPrefixList(
    input: CreateManagedPrefixListRequest,
  ): Effect.Effect<
    CreateManagedPrefixListResult,
    CommonAwsError
  >;
  createNatGateway(
    input: CreateNatGatewayRequest,
  ): Effect.Effect<
    CreateNatGatewayResult,
    CommonAwsError
  >;
  createNetworkAcl(
    input: CreateNetworkAclRequest,
  ): Effect.Effect<
    CreateNetworkAclResult,
    CommonAwsError
  >;
  createNetworkAclEntry(
    input: CreateNetworkAclEntryRequest,
  ): Effect.Effect<
    {},
    CommonAwsError
  >;
  createNetworkInsightsAccessScope(
    input: CreateNetworkInsightsAccessScopeRequest,
  ): Effect.Effect<
    CreateNetworkInsightsAccessScopeResult,
    CommonAwsError
  >;
  createNetworkInsightsPath(
    input: CreateNetworkInsightsPathRequest,
  ): Effect.Effect<
    CreateNetworkInsightsPathResult,
    CommonAwsError
  >;
  createNetworkInterface(
    input: CreateNetworkInterfaceRequest,
  ): Effect.Effect<
    CreateNetworkInterfaceResult,
    CommonAwsError
  >;
  createNetworkInterfacePermission(
    input: CreateNetworkInterfacePermissionRequest,
  ): Effect.Effect<
    CreateNetworkInterfacePermissionResult,
    CommonAwsError
  >;
  createPlacementGroup(
    input: CreatePlacementGroupRequest,
  ): Effect.Effect<
    CreatePlacementGroupResult,
    CommonAwsError
  >;
  createPublicIpv4Pool(
    input: CreatePublicIpv4PoolRequest,
  ): Effect.Effect<
    CreatePublicIpv4PoolResult,
    CommonAwsError
  >;
  createReplaceRootVolumeTask(
    input: CreateReplaceRootVolumeTaskRequest,
  ): Effect.Effect<
    CreateReplaceRootVolumeTaskResult,
    CommonAwsError
  >;
  createReservedInstancesListing(
    input: CreateReservedInstancesListingRequest,
  ): Effect.Effect<
    CreateReservedInstancesListingResult,
    CommonAwsError
  >;
  createRestoreImageTask(
    input: CreateRestoreImageTaskRequest,
  ): Effect.Effect<
    CreateRestoreImageTaskResult,
    CommonAwsError
  >;
  createRoute(
    input: CreateRouteRequest,
  ): Effect.Effect<
    CreateRouteResult,
    CommonAwsError
  >;
  createRouteServer(
    input: CreateRouteServerRequest,
  ): Effect.Effect<
    CreateRouteServerResult,
    CommonAwsError
  >;
  createRouteServerEndpoint(
    input: CreateRouteServerEndpointRequest,
  ): Effect.Effect<
    CreateRouteServerEndpointResult,
    CommonAwsError
  >;
  createRouteServerPeer(
    input: CreateRouteServerPeerRequest,
  ): Effect.Effect<
    CreateRouteServerPeerResult,
    CommonAwsError
  >;
  createRouteTable(
    input: CreateRouteTableRequest,
  ): Effect.Effect<
    CreateRouteTableResult,
    CommonAwsError
  >;
  createSecurityGroup(
    input: CreateSecurityGroupRequest,
  ): Effect.Effect<
    CreateSecurityGroupResult,
    CommonAwsError
  >;
  createSnapshot(
    input: CreateSnapshotRequest,
  ): Effect.Effect<
    Snapshot,
    CommonAwsError
  >;
  createSnapshots(
    input: CreateSnapshotsRequest,
  ): Effect.Effect<
    CreateSnapshotsResult,
    CommonAwsError
  >;
  createSpotDatafeedSubscription(
    input: CreateSpotDatafeedSubscriptionRequest,
  ): Effect.Effect<
    CreateSpotDatafeedSubscriptionResult,
    CommonAwsError
  >;
  createStoreImageTask(
    input: CreateStoreImageTaskRequest,
  ): Effect.Effect<
    CreateStoreImageTaskResult,
    CommonAwsError
  >;
  createSubnet(
    input: CreateSubnetRequest,
  ): Effect.Effect<
    CreateSubnetResult,
    CommonAwsError
  >;
  createSubnetCidrReservation(
    input: CreateSubnetCidrReservationRequest,
  ): Effect.Effect<
    CreateSubnetCidrReservationResult,
    CommonAwsError
  >;
  createTags(
    input: CreateTagsRequest,
  ): Effect.Effect<
    {},
    CommonAwsError
  >;
  createTrafficMirrorFilter(
    input: CreateTrafficMirrorFilterRequest,
  ): Effect.Effect<
    CreateTrafficMirrorFilterResult,
    CommonAwsError
  >;
  createTrafficMirrorFilterRule(
    input: CreateTrafficMirrorFilterRuleRequest,
  ): Effect.Effect<
    CreateTrafficMirrorFilterRuleResult,
    CommonAwsError
  >;
  createTrafficMirrorSession(
    input: CreateTrafficMirrorSessionRequest,
  ): Effect.Effect<
    CreateTrafficMirrorSessionResult,
    CommonAwsError
  >;
  createTrafficMirrorTarget(
    input: CreateTrafficMirrorTargetRequest,
  ): Effect.Effect<
    CreateTrafficMirrorTargetResult,
    CommonAwsError
  >;
  createTransitGateway(
    input: CreateTransitGatewayRequest,
  ): Effect.Effect<
    CreateTransitGatewayResult,
    CommonAwsError
  >;
  createTransitGatewayConnect(
    input: CreateTransitGatewayConnectRequest,
  ): Effect.Effect<
    CreateTransitGatewayConnectResult,
    CommonAwsError
  >;
  createTransitGatewayConnectPeer(
    input: CreateTransitGatewayConnectPeerRequest,
  ): Effect.Effect<
    CreateTransitGatewayConnectPeerResult,
    CommonAwsError
  >;
  createTransitGatewayMulticastDomain(
    input: CreateTransitGatewayMulticastDomainRequest,
  ): Effect.Effect<
    CreateTransitGatewayMulticastDomainResult,
    CommonAwsError
  >;
  createTransitGatewayPeeringAttachment(
    input: CreateTransitGatewayPeeringAttachmentRequest,
  ): Effect.Effect<
    CreateTransitGatewayPeeringAttachmentResult,
    CommonAwsError
  >;
  createTransitGatewayPolicyTable(
    input: CreateTransitGatewayPolicyTableRequest,
  ): Effect.Effect<
    CreateTransitGatewayPolicyTableResult,
    CommonAwsError
  >;
  createTransitGatewayPrefixListReference(
    input: CreateTransitGatewayPrefixListReferenceRequest,
  ): Effect.Effect<
    CreateTransitGatewayPrefixListReferenceResult,
    CommonAwsError
  >;
  createTransitGatewayRoute(
    input: CreateTransitGatewayRouteRequest,
  ): Effect.Effect<
    CreateTransitGatewayRouteResult,
    CommonAwsError
  >;
  createTransitGatewayRouteTable(
    input: CreateTransitGatewayRouteTableRequest,
  ): Effect.Effect<
    CreateTransitGatewayRouteTableResult,
    CommonAwsError
  >;
  createTransitGatewayRouteTableAnnouncement(
    input: CreateTransitGatewayRouteTableAnnouncementRequest,
  ): Effect.Effect<
    CreateTransitGatewayRouteTableAnnouncementResult,
    CommonAwsError
  >;
  createTransitGatewayVpcAttachment(
    input: CreateTransitGatewayVpcAttachmentRequest,
  ): Effect.Effect<
    CreateTransitGatewayVpcAttachmentResult,
    CommonAwsError
  >;
  createVerifiedAccessEndpoint(
    input: CreateVerifiedAccessEndpointRequest,
  ): Effect.Effect<
    CreateVerifiedAccessEndpointResult,
    CommonAwsError
  >;
  createVerifiedAccessGroup(
    input: CreateVerifiedAccessGroupRequest,
  ): Effect.Effect<
    CreateVerifiedAccessGroupResult,
    CommonAwsError
  >;
  createVerifiedAccessInstance(
    input: CreateVerifiedAccessInstanceRequest,
  ): Effect.Effect<
    CreateVerifiedAccessInstanceResult,
    CommonAwsError
  >;
  createVerifiedAccessTrustProvider(
    input: CreateVerifiedAccessTrustProviderRequest,
  ): Effect.Effect<
    CreateVerifiedAccessTrustProviderResult,
    CommonAwsError
  >;
  createVolume(
    input: CreateVolumeRequest,
  ): Effect.Effect<
    Volume,
    CommonAwsError
  >;
  createVpc(
    input: CreateVpcRequest,
  ): Effect.Effect<
    CreateVpcResult,
    CommonAwsError
  >;
  createVpcBlockPublicAccessExclusion(
    input: CreateVpcBlockPublicAccessExclusionRequest,
  ): Effect.Effect<
    CreateVpcBlockPublicAccessExclusionResult,
    CommonAwsError
  >;
  createVpcEndpoint(
    input: CreateVpcEndpointRequest,
  ): Effect.Effect<
    CreateVpcEndpointResult,
    CommonAwsError
  >;
  createVpcEndpointConnectionNotification(
    input: CreateVpcEndpointConnectionNotificationRequest,
  ): Effect.Effect<
    CreateVpcEndpointConnectionNotificationResult,
    CommonAwsError
  >;
  createVpcEndpointServiceConfiguration(
    input: CreateVpcEndpointServiceConfigurationRequest,
  ): Effect.Effect<
    CreateVpcEndpointServiceConfigurationResult,
    CommonAwsError
  >;
  createVpcPeeringConnection(
    input: CreateVpcPeeringConnectionRequest,
  ): Effect.Effect<
    CreateVpcPeeringConnectionResult,
    CommonAwsError
  >;
  createVpnConnection(
    input: CreateVpnConnectionRequest,
  ): Effect.Effect<
    CreateVpnConnectionResult,
    CommonAwsError
  >;
  createVpnConnectionRoute(
    input: CreateVpnConnectionRouteRequest,
  ): Effect.Effect<
    {},
    CommonAwsError
  >;
  createVpnGateway(
    input: CreateVpnGatewayRequest,
  ): Effect.Effect<
    CreateVpnGatewayResult,
    CommonAwsError
  >;
  deleteCarrierGateway(
    input: DeleteCarrierGatewayRequest,
  ): Effect.Effect<
    DeleteCarrierGatewayResult,
    CommonAwsError
  >;
  deleteClientVpnEndpoint(
    input: DeleteClientVpnEndpointRequest,
  ): Effect.Effect<
    DeleteClientVpnEndpointResult,
    CommonAwsError
  >;
  deleteClientVpnRoute(
    input: DeleteClientVpnRouteRequest,
  ): Effect.Effect<
    DeleteClientVpnRouteResult,
    CommonAwsError
  >;
  deleteCoipCidr(
    input: DeleteCoipCidrRequest,
  ): Effect.Effect<
    DeleteCoipCidrResult,
    CommonAwsError
  >;
  deleteCoipPool(
    input: DeleteCoipPoolRequest,
  ): Effect.Effect<
    DeleteCoipPoolResult,
    CommonAwsError
  >;
  deleteCustomerGateway(
    input: DeleteCustomerGatewayRequest,
  ): Effect.Effect<
    {},
    CommonAwsError
  >;
  deleteDhcpOptions(
    input: DeleteDhcpOptionsRequest,
  ): Effect.Effect<
    {},
    CommonAwsError
  >;
  deleteEgressOnlyInternetGateway(
    input: DeleteEgressOnlyInternetGatewayRequest,
  ): Effect.Effect<
    DeleteEgressOnlyInternetGatewayResult,
    CommonAwsError
  >;
  deleteFleets(
    input: DeleteFleetsRequest,
  ): Effect.Effect<
    DeleteFleetsResult,
    CommonAwsError
  >;
  deleteFlowLogs(
    input: DeleteFlowLogsRequest,
  ): Effect.Effect<
    DeleteFlowLogsResult,
    CommonAwsError
  >;
  deleteFpgaImage(
    input: DeleteFpgaImageRequest,
  ): Effect.Effect<
    DeleteFpgaImageResult,
    CommonAwsError
  >;
  deleteInstanceConnectEndpoint(
    input: DeleteInstanceConnectEndpointRequest,
  ): Effect.Effect<
    DeleteInstanceConnectEndpointResult,
    CommonAwsError
  >;
  deleteInstanceEventWindow(
    input: DeleteInstanceEventWindowRequest,
  ): Effect.Effect<
    DeleteInstanceEventWindowResult,
    CommonAwsError
  >;
  deleteInternetGateway(
    input: DeleteInternetGatewayRequest,
  ): Effect.Effect<
    {},
    CommonAwsError
  >;
  deleteIpam(
    input: DeleteIpamRequest,
  ): Effect.Effect<
    DeleteIpamResult,
    CommonAwsError
  >;
  deleteIpamExternalResourceVerificationToken(
    input: DeleteIpamExternalResourceVerificationTokenRequest,
  ): Effect.Effect<
    DeleteIpamExternalResourceVerificationTokenResult,
    CommonAwsError
  >;
  deleteIpamPool(
    input: DeleteIpamPoolRequest,
  ): Effect.Effect<
    DeleteIpamPoolResult,
    CommonAwsError
  >;
  deleteIpamResourceDiscovery(
    input: DeleteIpamResourceDiscoveryRequest,
  ): Effect.Effect<
    DeleteIpamResourceDiscoveryResult,
    CommonAwsError
  >;
  deleteIpamScope(
    input: DeleteIpamScopeRequest,
  ): Effect.Effect<
    DeleteIpamScopeResult,
    CommonAwsError
  >;
  deleteKeyPair(
    input: DeleteKeyPairRequest,
  ): Effect.Effect<
    DeleteKeyPairResult,
    CommonAwsError
  >;
  deleteLaunchTemplate(
    input: DeleteLaunchTemplateRequest,
  ): Effect.Effect<
    DeleteLaunchTemplateResult,
    CommonAwsError
  >;
  deleteLaunchTemplateVersions(
    input: DeleteLaunchTemplateVersionsRequest,
  ): Effect.Effect<
    DeleteLaunchTemplateVersionsResult,
    CommonAwsError
  >;
  deleteLocalGatewayRoute(
    input: DeleteLocalGatewayRouteRequest,
  ): Effect.Effect<
    DeleteLocalGatewayRouteResult,
    CommonAwsError
  >;
  deleteLocalGatewayRouteTable(
    input: DeleteLocalGatewayRouteTableRequest,
  ): Effect.Effect<
    DeleteLocalGatewayRouteTableResult,
    CommonAwsError
  >;
  deleteLocalGatewayRouteTableVirtualInterfaceGroupAssociation(
    input: DeleteLocalGatewayRouteTableVirtualInterfaceGroupAssociationRequest,
  ): Effect.Effect<
    DeleteLocalGatewayRouteTableVirtualInterfaceGroupAssociationResult,
    CommonAwsError
  >;
  deleteLocalGatewayRouteTableVpcAssociation(
    input: DeleteLocalGatewayRouteTableVpcAssociationRequest,
  ): Effect.Effect<
    DeleteLocalGatewayRouteTableVpcAssociationResult,
    CommonAwsError
  >;
  deleteLocalGatewayVirtualInterface(
    input: DeleteLocalGatewayVirtualInterfaceRequest,
  ): Effect.Effect<
    DeleteLocalGatewayVirtualInterfaceResult,
    CommonAwsError
  >;
  deleteLocalGatewayVirtualInterfaceGroup(
    input: DeleteLocalGatewayVirtualInterfaceGroupRequest,
  ): Effect.Effect<
    DeleteLocalGatewayVirtualInterfaceGroupResult,
    CommonAwsError
  >;
  deleteManagedPrefixList(
    input: DeleteManagedPrefixListRequest,
  ): Effect.Effect<
    DeleteManagedPrefixListResult,
    CommonAwsError
  >;
  deleteNatGateway(
    input: DeleteNatGatewayRequest,
  ): Effect.Effect<
    DeleteNatGatewayResult,
    CommonAwsError
  >;
  deleteNetworkAcl(
    input: DeleteNetworkAclRequest,
  ): Effect.Effect<
    {},
    CommonAwsError
  >;
  deleteNetworkAclEntry(
    input: DeleteNetworkAclEntryRequest,
  ): Effect.Effect<
    {},
    CommonAwsError
  >;
  deleteNetworkInsightsAccessScope(
    input: DeleteNetworkInsightsAccessScopeRequest,
  ): Effect.Effect<
    DeleteNetworkInsightsAccessScopeResult,
    CommonAwsError
  >;
  deleteNetworkInsightsAccessScopeAnalysis(
    input: DeleteNetworkInsightsAccessScopeAnalysisRequest,
  ): Effect.Effect<
    DeleteNetworkInsightsAccessScopeAnalysisResult,
    CommonAwsError
  >;
  deleteNetworkInsightsAnalysis(
    input: DeleteNetworkInsightsAnalysisRequest,
  ): Effect.Effect<
    DeleteNetworkInsightsAnalysisResult,
    CommonAwsError
  >;
  deleteNetworkInsightsPath(
    input: DeleteNetworkInsightsPathRequest,
  ): Effect.Effect<
    DeleteNetworkInsightsPathResult,
    CommonAwsError
  >;
  deleteNetworkInterface(
    input: DeleteNetworkInterfaceRequest,
  ): Effect.Effect<
    {},
    CommonAwsError
  >;
  deleteNetworkInterfacePermission(
    input: DeleteNetworkInterfacePermissionRequest,
  ): Effect.Effect<
    DeleteNetworkInterfacePermissionResult,
    CommonAwsError
  >;
  deletePlacementGroup(
    input: DeletePlacementGroupRequest,
  ): Effect.Effect<
    {},
    CommonAwsError
  >;
  deletePublicIpv4Pool(
    input: DeletePublicIpv4PoolRequest,
  ): Effect.Effect<
    DeletePublicIpv4PoolResult,
    CommonAwsError
  >;
  deleteQueuedReservedInstances(
    input: DeleteQueuedReservedInstancesRequest,
  ): Effect.Effect<
    DeleteQueuedReservedInstancesResult,
    CommonAwsError
  >;
  deleteRoute(
    input: DeleteRouteRequest,
  ): Effect.Effect<
    {},
    CommonAwsError
  >;
  deleteRouteServer(
    input: DeleteRouteServerRequest,
  ): Effect.Effect<
    DeleteRouteServerResult,
    CommonAwsError
  >;
  deleteRouteServerEndpoint(
    input: DeleteRouteServerEndpointRequest,
  ): Effect.Effect<
    DeleteRouteServerEndpointResult,
    CommonAwsError
  >;
  deleteRouteServerPeer(
    input: DeleteRouteServerPeerRequest,
  ): Effect.Effect<
    DeleteRouteServerPeerResult,
    CommonAwsError
  >;
  deleteRouteTable(
    input: DeleteRouteTableRequest,
  ): Effect.Effect<
    {},
    CommonAwsError
  >;
  deleteSecurityGroup(
    input: DeleteSecurityGroupRequest,
  ): Effect.Effect<
    DeleteSecurityGroupResult,
    CommonAwsError
  >;
  deleteSnapshot(
    input: DeleteSnapshotRequest,
  ): Effect.Effect<
    {},
    CommonAwsError
  >;
  deleteSpotDatafeedSubscription(
    input: DeleteSpotDatafeedSubscriptionRequest,
  ): Effect.Effect<
    {},
    CommonAwsError
  >;
  deleteSubnet(
    input: DeleteSubnetRequest,
  ): Effect.Effect<
    {},
    CommonAwsError
  >;
  deleteSubnetCidrReservation(
    input: DeleteSubnetCidrReservationRequest,
  ): Effect.Effect<
    DeleteSubnetCidrReservationResult,
    CommonAwsError
  >;
  deleteTags(
    input: DeleteTagsRequest,
  ): Effect.Effect<
    {},
    CommonAwsError
  >;
  deleteTrafficMirrorFilter(
    input: DeleteTrafficMirrorFilterRequest,
  ): Effect.Effect<
    DeleteTrafficMirrorFilterResult,
    CommonAwsError
  >;
  deleteTrafficMirrorFilterRule(
    input: DeleteTrafficMirrorFilterRuleRequest,
  ): Effect.Effect<
    DeleteTrafficMirrorFilterRuleResult,
    CommonAwsError
  >;
  deleteTrafficMirrorSession(
    input: DeleteTrafficMirrorSessionRequest,
  ): Effect.Effect<
    DeleteTrafficMirrorSessionResult,
    CommonAwsError
  >;
  deleteTrafficMirrorTarget(
    input: DeleteTrafficMirrorTargetRequest,
  ): Effect.Effect<
    DeleteTrafficMirrorTargetResult,
    CommonAwsError
  >;
  deleteTransitGateway(
    input: DeleteTransitGatewayRequest,
  ): Effect.Effect<
    DeleteTransitGatewayResult,
    CommonAwsError
  >;
  deleteTransitGatewayConnect(
    input: DeleteTransitGatewayConnectRequest,
  ): Effect.Effect<
    DeleteTransitGatewayConnectResult,
    CommonAwsError
  >;
  deleteTransitGatewayConnectPeer(
    input: DeleteTransitGatewayConnectPeerRequest,
  ): Effect.Effect<
    DeleteTransitGatewayConnectPeerResult,
    CommonAwsError
  >;
  deleteTransitGatewayMulticastDomain(
    input: DeleteTransitGatewayMulticastDomainRequest,
  ): Effect.Effect<
    DeleteTransitGatewayMulticastDomainResult,
    CommonAwsError
  >;
  deleteTransitGatewayPeeringAttachment(
    input: DeleteTransitGatewayPeeringAttachmentRequest,
  ): Effect.Effect<
    DeleteTransitGatewayPeeringAttachmentResult,
    CommonAwsError
  >;
  deleteTransitGatewayPolicyTable(
    input: DeleteTransitGatewayPolicyTableRequest,
  ): Effect.Effect<
    DeleteTransitGatewayPolicyTableResult,
    CommonAwsError
  >;
  deleteTransitGatewayPrefixListReference(
    input: DeleteTransitGatewayPrefixListReferenceRequest,
  ): Effect.Effect<
    DeleteTransitGatewayPrefixListReferenceResult,
    CommonAwsError
  >;
  deleteTransitGatewayRoute(
    input: DeleteTransitGatewayRouteRequest,
  ): Effect.Effect<
    DeleteTransitGatewayRouteResult,
    CommonAwsError
  >;
  deleteTransitGatewayRouteTable(
    input: DeleteTransitGatewayRouteTableRequest,
  ): Effect.Effect<
    DeleteTransitGatewayRouteTableResult,
    CommonAwsError
  >;
  deleteTransitGatewayRouteTableAnnouncement(
    input: DeleteTransitGatewayRouteTableAnnouncementRequest,
  ): Effect.Effect<
    DeleteTransitGatewayRouteTableAnnouncementResult,
    CommonAwsError
  >;
  deleteTransitGatewayVpcAttachment(
    input: DeleteTransitGatewayVpcAttachmentRequest,
  ): Effect.Effect<
    DeleteTransitGatewayVpcAttachmentResult,
    CommonAwsError
  >;
  deleteVerifiedAccessEndpoint(
    input: DeleteVerifiedAccessEndpointRequest,
  ): Effect.Effect<
    DeleteVerifiedAccessEndpointResult,
    CommonAwsError
  >;
  deleteVerifiedAccessGroup(
    input: DeleteVerifiedAccessGroupRequest,
  ): Effect.Effect<
    DeleteVerifiedAccessGroupResult,
    CommonAwsError
  >;
  deleteVerifiedAccessInstance(
    input: DeleteVerifiedAccessInstanceRequest,
  ): Effect.Effect<
    DeleteVerifiedAccessInstanceResult,
    CommonAwsError
  >;
  deleteVerifiedAccessTrustProvider(
    input: DeleteVerifiedAccessTrustProviderRequest,
  ): Effect.Effect<
    DeleteVerifiedAccessTrustProviderResult,
    CommonAwsError
  >;
  deleteVolume(
    input: DeleteVolumeRequest,
  ): Effect.Effect<
    {},
    CommonAwsError
  >;
  deleteVpc(
    input: DeleteVpcRequest,
  ): Effect.Effect<
    {},
    CommonAwsError
  >;
  deleteVpcBlockPublicAccessExclusion(
    input: DeleteVpcBlockPublicAccessExclusionRequest,
  ): Effect.Effect<
    DeleteVpcBlockPublicAccessExclusionResult,
    CommonAwsError
  >;
  deleteVpcEndpointConnectionNotifications(
    input: DeleteVpcEndpointConnectionNotificationsRequest,
  ): Effect.Effect<
    DeleteVpcEndpointConnectionNotificationsResult,
    CommonAwsError
  >;
  deleteVpcEndpointServiceConfigurations(
    input: DeleteVpcEndpointServiceConfigurationsRequest,
  ): Effect.Effect<
    DeleteVpcEndpointServiceConfigurationsResult,
    CommonAwsError
  >;
  deleteVpcEndpoints(
    input: DeleteVpcEndpointsRequest,
  ): Effect.Effect<
    DeleteVpcEndpointsResult,
    CommonAwsError
  >;
  deleteVpcPeeringConnection(
    input: DeleteVpcPeeringConnectionRequest,
  ): Effect.Effect<
    DeleteVpcPeeringConnectionResult,
    CommonAwsError
  >;
  deleteVpnConnection(
    input: DeleteVpnConnectionRequest,
  ): Effect.Effect<
    {},
    CommonAwsError
  >;
  deleteVpnConnectionRoute(
    input: DeleteVpnConnectionRouteRequest,
  ): Effect.Effect<
    {},
    CommonAwsError
  >;
  deleteVpnGateway(
    input: DeleteVpnGatewayRequest,
  ): Effect.Effect<
    {},
    CommonAwsError
  >;
  deprovisionByoipCidr(
    input: DeprovisionByoipCidrRequest,
  ): Effect.Effect<
    DeprovisionByoipCidrResult,
    CommonAwsError
  >;
  deprovisionIpamByoasn(
    input: DeprovisionIpamByoasnRequest,
  ): Effect.Effect<
    DeprovisionIpamByoasnResult,
    CommonAwsError
  >;
  deprovisionIpamPoolCidr(
    input: DeprovisionIpamPoolCidrRequest,
  ): Effect.Effect<
    DeprovisionIpamPoolCidrResult,
    CommonAwsError
  >;
  deprovisionPublicIpv4PoolCidr(
    input: DeprovisionPublicIpv4PoolCidrRequest,
  ): Effect.Effect<
    DeprovisionPublicIpv4PoolCidrResult,
    CommonAwsError
  >;
  deregisterImage(
    input: DeregisterImageRequest,
  ): Effect.Effect<
    DeregisterImageResult,
    CommonAwsError
  >;
  deregisterInstanceEventNotificationAttributes(
    input: DeregisterInstanceEventNotificationAttributesRequest,
  ): Effect.Effect<
    DeregisterInstanceEventNotificationAttributesResult,
    CommonAwsError
  >;
  deregisterTransitGatewayMulticastGroupMembers(
    input: DeregisterTransitGatewayMulticastGroupMembersRequest,
  ): Effect.Effect<
    DeregisterTransitGatewayMulticastGroupMembersResult,
    CommonAwsError
  >;
  deregisterTransitGatewayMulticastGroupSources(
    input: DeregisterTransitGatewayMulticastGroupSourcesRequest,
  ): Effect.Effect<
    DeregisterTransitGatewayMulticastGroupSourcesResult,
    CommonAwsError
  >;
  describeAccountAttributes(
    input: DescribeAccountAttributesRequest,
  ): Effect.Effect<
    DescribeAccountAttributesResult,
    CommonAwsError
  >;
  describeAddressTransfers(
    input: DescribeAddressTransfersRequest,
  ): Effect.Effect<
    DescribeAddressTransfersResult,
    CommonAwsError
  >;
  describeAddresses(
    input: DescribeAddressesRequest,
  ): Effect.Effect<
    DescribeAddressesResult,
    CommonAwsError
  >;
  describeAddressesAttribute(
    input: DescribeAddressesAttributeRequest,
  ): Effect.Effect<
    DescribeAddressesAttributeResult,
    CommonAwsError
  >;
  describeAggregateIdFormat(
    input: DescribeAggregateIdFormatRequest,
  ): Effect.Effect<
    DescribeAggregateIdFormatResult,
    CommonAwsError
  >;
  describeAvailabilityZones(
    input: DescribeAvailabilityZonesRequest,
  ): Effect.Effect<
    DescribeAvailabilityZonesResult,
    CommonAwsError
  >;
  describeAwsNetworkPerformanceMetricSubscriptions(
    input: DescribeAwsNetworkPerformanceMetricSubscriptionsRequest,
  ): Effect.Effect<
    DescribeAwsNetworkPerformanceMetricSubscriptionsResult,
    CommonAwsError
  >;
  describeBundleTasks(
    input: DescribeBundleTasksRequest,
  ): Effect.Effect<
    DescribeBundleTasksResult,
    CommonAwsError
  >;
  describeByoipCidrs(
    input: DescribeByoipCidrsRequest,
  ): Effect.Effect<
    DescribeByoipCidrsResult,
    CommonAwsError
  >;
  describeCapacityBlockExtensionHistory(
    input: DescribeCapacityBlockExtensionHistoryRequest,
  ): Effect.Effect<
    DescribeCapacityBlockExtensionHistoryResult,
    CommonAwsError
  >;
  describeCapacityBlockExtensionOfferings(
    input: DescribeCapacityBlockExtensionOfferingsRequest,
  ): Effect.Effect<
    DescribeCapacityBlockExtensionOfferingsResult,
    CommonAwsError
  >;
  describeCapacityBlockOfferings(
    input: DescribeCapacityBlockOfferingsRequest,
  ): Effect.Effect<
    DescribeCapacityBlockOfferingsResult,
    CommonAwsError
  >;
  describeCapacityBlockStatus(
    input: DescribeCapacityBlockStatusRequest,
  ): Effect.Effect<
    DescribeCapacityBlockStatusResult,
    CommonAwsError
  >;
  describeCapacityBlocks(
    input: DescribeCapacityBlocksRequest,
  ): Effect.Effect<
    DescribeCapacityBlocksResult,
    CommonAwsError
  >;
  describeCapacityReservationBillingRequests(
    input: DescribeCapacityReservationBillingRequestsRequest,
  ): Effect.Effect<
    DescribeCapacityReservationBillingRequestsResult,
    CommonAwsError
  >;
  describeCapacityReservationFleets(
    input: DescribeCapacityReservationFleetsRequest,
  ): Effect.Effect<
    DescribeCapacityReservationFleetsResult,
    CommonAwsError
  >;
  describeCapacityReservations(
    input: DescribeCapacityReservationsRequest,
  ): Effect.Effect<
    DescribeCapacityReservationsResult,
    CommonAwsError
  >;
  describeCarrierGateways(
    input: DescribeCarrierGatewaysRequest,
  ): Effect.Effect<
    DescribeCarrierGatewaysResult,
    CommonAwsError
  >;
  describeClassicLinkInstances(
    input: DescribeClassicLinkInstancesRequest,
  ): Effect.Effect<
    DescribeClassicLinkInstancesResult,
    CommonAwsError
  >;
  describeClientVpnAuthorizationRules(
    input: DescribeClientVpnAuthorizationRulesRequest,
  ): Effect.Effect<
    DescribeClientVpnAuthorizationRulesResult,
    CommonAwsError
  >;
  describeClientVpnConnections(
    input: DescribeClientVpnConnectionsRequest,
  ): Effect.Effect<
    DescribeClientVpnConnectionsResult,
    CommonAwsError
  >;
  describeClientVpnEndpoints(
    input: DescribeClientVpnEndpointsRequest,
  ): Effect.Effect<
    DescribeClientVpnEndpointsResult,
    CommonAwsError
  >;
  describeClientVpnRoutes(
    input: DescribeClientVpnRoutesRequest,
  ): Effect.Effect<
    DescribeClientVpnRoutesResult,
    CommonAwsError
  >;
  describeClientVpnTargetNetworks(
    input: DescribeClientVpnTargetNetworksRequest,
  ): Effect.Effect<
    DescribeClientVpnTargetNetworksResult,
    CommonAwsError
  >;
  describeCoipPools(
    input: DescribeCoipPoolsRequest,
  ): Effect.Effect<
    DescribeCoipPoolsResult,
    CommonAwsError
  >;
  describeConversionTasks(
    input: DescribeConversionTasksRequest,
  ): Effect.Effect<
    DescribeConversionTasksResult,
    CommonAwsError
  >;
  describeCustomerGateways(
    input: DescribeCustomerGatewaysRequest,
  ): Effect.Effect<
    DescribeCustomerGatewaysResult,
    CommonAwsError
  >;
  describeDeclarativePoliciesReports(
    input: DescribeDeclarativePoliciesReportsRequest,
  ): Effect.Effect<
    DescribeDeclarativePoliciesReportsResult,
    CommonAwsError
  >;
  describeDhcpOptions(
    input: DescribeDhcpOptionsRequest,
  ): Effect.Effect<
    DescribeDhcpOptionsResult,
    CommonAwsError
  >;
  describeEgressOnlyInternetGateways(
    input: DescribeEgressOnlyInternetGatewaysRequest,
  ): Effect.Effect<
    DescribeEgressOnlyInternetGatewaysResult,
    CommonAwsError
  >;
  describeElasticGpus(
    input: DescribeElasticGpusRequest,
  ): Effect.Effect<
    DescribeElasticGpusResult,
    CommonAwsError
  >;
  describeExportImageTasks(
    input: DescribeExportImageTasksRequest,
  ): Effect.Effect<
    DescribeExportImageTasksResult,
    CommonAwsError
  >;
  describeExportTasks(
    input: DescribeExportTasksRequest,
  ): Effect.Effect<
    DescribeExportTasksResult,
    CommonAwsError
  >;
  describeFastLaunchImages(
    input: DescribeFastLaunchImagesRequest,
  ): Effect.Effect<
    DescribeFastLaunchImagesResult,
    CommonAwsError
  >;
  describeFastSnapshotRestores(
    input: DescribeFastSnapshotRestoresRequest,
  ): Effect.Effect<
    DescribeFastSnapshotRestoresResult,
    CommonAwsError
  >;
  describeFleetHistory(
    input: DescribeFleetHistoryRequest,
  ): Effect.Effect<
    DescribeFleetHistoryResult,
    CommonAwsError
  >;
  describeFleetInstances(
    input: DescribeFleetInstancesRequest,
  ): Effect.Effect<
    DescribeFleetInstancesResult,
    CommonAwsError
  >;
  describeFleets(
    input: DescribeFleetsRequest,
  ): Effect.Effect<
    DescribeFleetsResult,
    CommonAwsError
  >;
  describeFlowLogs(
    input: DescribeFlowLogsRequest,
  ): Effect.Effect<
    DescribeFlowLogsResult,
    CommonAwsError
  >;
  describeFpgaImageAttribute(
    input: DescribeFpgaImageAttributeRequest,
  ): Effect.Effect<
    DescribeFpgaImageAttributeResult,
    CommonAwsError
  >;
  describeFpgaImages(
    input: DescribeFpgaImagesRequest,
  ): Effect.Effect<
    DescribeFpgaImagesResult,
    CommonAwsError
  >;
  describeHostReservationOfferings(
    input: DescribeHostReservationOfferingsRequest,
  ): Effect.Effect<
    DescribeHostReservationOfferingsResult,
    CommonAwsError
  >;
  describeHostReservations(
    input: DescribeHostReservationsRequest,
  ): Effect.Effect<
    DescribeHostReservationsResult,
    CommonAwsError
  >;
  describeHosts(
    input: DescribeHostsRequest,
  ): Effect.Effect<
    DescribeHostsResult,
    CommonAwsError
  >;
  describeIamInstanceProfileAssociations(
    input: DescribeIamInstanceProfileAssociationsRequest,
  ): Effect.Effect<
    DescribeIamInstanceProfileAssociationsResult,
    CommonAwsError
  >;
  describeIdFormat(
    input: DescribeIdFormatRequest,
  ): Effect.Effect<
    DescribeIdFormatResult,
    CommonAwsError
  >;
  describeIdentityIdFormat(
    input: DescribeIdentityIdFormatRequest,
  ): Effect.Effect<
    DescribeIdentityIdFormatResult,
    CommonAwsError
  >;
  describeImageAttribute(
    input: DescribeImageAttributeRequest,
  ): Effect.Effect<
    ImageAttribute,
    CommonAwsError
  >;
  describeImages(
    input: DescribeImagesRequest,
  ): Effect.Effect<
    DescribeImagesResult,
    CommonAwsError
  >;
  describeImportImageTasks(
    input: DescribeImportImageTasksRequest,
  ): Effect.Effect<
    DescribeImportImageTasksResult,
    CommonAwsError
  >;
  describeImportSnapshotTasks(
    input: DescribeImportSnapshotTasksRequest,
  ): Effect.Effect<
    DescribeImportSnapshotTasksResult,
    CommonAwsError
  >;
  describeInstanceAttribute(
    input: DescribeInstanceAttributeRequest,
  ): Effect.Effect<
    InstanceAttribute,
    CommonAwsError
  >;
  describeInstanceConnectEndpoints(
    input: DescribeInstanceConnectEndpointsRequest,
  ): Effect.Effect<
    DescribeInstanceConnectEndpointsResult,
    CommonAwsError
  >;
  describeInstanceCreditSpecifications(
    input: DescribeInstanceCreditSpecificationsRequest,
  ): Effect.Effect<
    DescribeInstanceCreditSpecificationsResult,
    CommonAwsError
  >;
  describeInstanceEventNotificationAttributes(
    input: DescribeInstanceEventNotificationAttributesRequest,
  ): Effect.Effect<
    DescribeInstanceEventNotificationAttributesResult,
    CommonAwsError
  >;
  describeInstanceEventWindows(
    input: DescribeInstanceEventWindowsRequest,
  ): Effect.Effect<
    DescribeInstanceEventWindowsResult,
    CommonAwsError
  >;
  describeInstanceImageMetadata(
    input: DescribeInstanceImageMetadataRequest,
  ): Effect.Effect<
    DescribeInstanceImageMetadataResult,
    CommonAwsError
  >;
  describeInstanceStatus(
    input: DescribeInstanceStatusRequest,
  ): Effect.Effect<
    DescribeInstanceStatusResult,
    CommonAwsError
  >;
  describeInstanceTopology(
    input: DescribeInstanceTopologyRequest,
  ): Effect.Effect<
    DescribeInstanceTopologyResult,
    CommonAwsError
  >;
  describeInstanceTypeOfferings(
    input: DescribeInstanceTypeOfferingsRequest,
  ): Effect.Effect<
    DescribeInstanceTypeOfferingsResult,
    CommonAwsError
  >;
  describeInstanceTypes(
    input: DescribeInstanceTypesRequest,
  ): Effect.Effect<
    DescribeInstanceTypesResult,
    CommonAwsError
  >;
  describeInstances(
    input: DescribeInstancesRequest,
  ): Effect.Effect<
    DescribeInstancesResult,
    CommonAwsError
  >;
  describeInternetGateways(
    input: DescribeInternetGatewaysRequest,
  ): Effect.Effect<
    DescribeInternetGatewaysResult,
    CommonAwsError
  >;
  describeIpamByoasn(
    input: DescribeIpamByoasnRequest,
  ): Effect.Effect<
    DescribeIpamByoasnResult,
    CommonAwsError
  >;
  describeIpamExternalResourceVerificationTokens(
    input: DescribeIpamExternalResourceVerificationTokensRequest,
  ): Effect.Effect<
    DescribeIpamExternalResourceVerificationTokensResult,
    CommonAwsError
  >;
  describeIpamPools(
    input: DescribeIpamPoolsRequest,
  ): Effect.Effect<
    DescribeIpamPoolsResult,
    CommonAwsError
  >;
  describeIpamResourceDiscoveries(
    input: DescribeIpamResourceDiscoveriesRequest,
  ): Effect.Effect<
    DescribeIpamResourceDiscoveriesResult,
    CommonAwsError
  >;
  describeIpamResourceDiscoveryAssociations(
    input: DescribeIpamResourceDiscoveryAssociationsRequest,
  ): Effect.Effect<
    DescribeIpamResourceDiscoveryAssociationsResult,
    CommonAwsError
  >;
  describeIpamScopes(
    input: DescribeIpamScopesRequest,
  ): Effect.Effect<
    DescribeIpamScopesResult,
    CommonAwsError
  >;
  describeIpams(
    input: DescribeIpamsRequest,
  ): Effect.Effect<
    DescribeIpamsResult,
    CommonAwsError
  >;
  describeIpv6Pools(
    input: DescribeIpv6PoolsRequest,
  ): Effect.Effect<
    DescribeIpv6PoolsResult,
    CommonAwsError
  >;
  describeKeyPairs(
    input: DescribeKeyPairsRequest,
  ): Effect.Effect<
    DescribeKeyPairsResult,
    CommonAwsError
  >;
  describeLaunchTemplateVersions(
    input: DescribeLaunchTemplateVersionsRequest,
  ): Effect.Effect<
    DescribeLaunchTemplateVersionsResult,
    CommonAwsError
  >;
  describeLaunchTemplates(
    input: DescribeLaunchTemplatesRequest,
  ): Effect.Effect<
    DescribeLaunchTemplatesResult,
    CommonAwsError
  >;
  describeLocalGatewayRouteTableVirtualInterfaceGroupAssociations(
    input: DescribeLocalGatewayRouteTableVirtualInterfaceGroupAssociationsRequest,
  ): Effect.Effect<
    DescribeLocalGatewayRouteTableVirtualInterfaceGroupAssociationsResult,
    CommonAwsError
  >;
  describeLocalGatewayRouteTableVpcAssociations(
    input: DescribeLocalGatewayRouteTableVpcAssociationsRequest,
  ): Effect.Effect<
    DescribeLocalGatewayRouteTableVpcAssociationsResult,
    CommonAwsError
  >;
  describeLocalGatewayRouteTables(
    input: DescribeLocalGatewayRouteTablesRequest,
  ): Effect.Effect<
    DescribeLocalGatewayRouteTablesResult,
    CommonAwsError
  >;
  describeLocalGatewayVirtualInterfaceGroups(
    input: DescribeLocalGatewayVirtualInterfaceGroupsRequest,
  ): Effect.Effect<
    DescribeLocalGatewayVirtualInterfaceGroupsResult,
    CommonAwsError
  >;
  describeLocalGatewayVirtualInterfaces(
    input: DescribeLocalGatewayVirtualInterfacesRequest,
  ): Effect.Effect<
    DescribeLocalGatewayVirtualInterfacesResult,
    CommonAwsError
  >;
  describeLocalGateways(
    input: DescribeLocalGatewaysRequest,
  ): Effect.Effect<
    DescribeLocalGatewaysResult,
    CommonAwsError
  >;
  describeLockedSnapshots(
    input: DescribeLockedSnapshotsRequest,
  ): Effect.Effect<
    DescribeLockedSnapshotsResult,
    CommonAwsError
  >;
  describeMacHosts(
    input: DescribeMacHostsRequest,
  ): Effect.Effect<
    DescribeMacHostsResult,
    CommonAwsError
  >;
  describeMacModificationTasks(
    input: DescribeMacModificationTasksRequest,
  ): Effect.Effect<
    DescribeMacModificationTasksResult,
    CommonAwsError
  >;
  describeManagedPrefixLists(
    input: DescribeManagedPrefixListsRequest,
  ): Effect.Effect<
    DescribeManagedPrefixListsResult,
    CommonAwsError
  >;
  describeMovingAddresses(
    input: DescribeMovingAddressesRequest,
  ): Effect.Effect<
    DescribeMovingAddressesResult,
    CommonAwsError
  >;
  describeNatGateways(
    input: DescribeNatGatewaysRequest,
  ): Effect.Effect<
    DescribeNatGatewaysResult,
    CommonAwsError
  >;
  describeNetworkAcls(
    input: DescribeNetworkAclsRequest,
  ): Effect.Effect<
    DescribeNetworkAclsResult,
    CommonAwsError
  >;
  describeNetworkInsightsAccessScopeAnalyses(
    input: DescribeNetworkInsightsAccessScopeAnalysesRequest,
  ): Effect.Effect<
    DescribeNetworkInsightsAccessScopeAnalysesResult,
    CommonAwsError
  >;
  describeNetworkInsightsAccessScopes(
    input: DescribeNetworkInsightsAccessScopesRequest,
  ): Effect.Effect<
    DescribeNetworkInsightsAccessScopesResult,
    CommonAwsError
  >;
  describeNetworkInsightsAnalyses(
    input: DescribeNetworkInsightsAnalysesRequest,
  ): Effect.Effect<
    DescribeNetworkInsightsAnalysesResult,
    CommonAwsError
  >;
  describeNetworkInsightsPaths(
    input: DescribeNetworkInsightsPathsRequest,
  ): Effect.Effect<
    DescribeNetworkInsightsPathsResult,
    CommonAwsError
  >;
  describeNetworkInterfaceAttribute(
    input: DescribeNetworkInterfaceAttributeRequest,
  ): Effect.Effect<
    DescribeNetworkInterfaceAttributeResult,
    CommonAwsError
  >;
  describeNetworkInterfacePermissions(
    input: DescribeNetworkInterfacePermissionsRequest,
  ): Effect.Effect<
    DescribeNetworkInterfacePermissionsResult,
    CommonAwsError
  >;
  describeNetworkInterfaces(
    input: DescribeNetworkInterfacesRequest,
  ): Effect.Effect<
    DescribeNetworkInterfacesResult,
    CommonAwsError
  >;
  describeOutpostLags(
    input: DescribeOutpostLagsRequest,
  ): Effect.Effect<
    DescribeOutpostLagsResult,
    CommonAwsError
  >;
  describePlacementGroups(
    input: DescribePlacementGroupsRequest,
  ): Effect.Effect<
    DescribePlacementGroupsResult,
    CommonAwsError
  >;
  describePrefixLists(
    input: DescribePrefixListsRequest,
  ): Effect.Effect<
    DescribePrefixListsResult,
    CommonAwsError
  >;
  describePrincipalIdFormat(
    input: DescribePrincipalIdFormatRequest,
  ): Effect.Effect<
    DescribePrincipalIdFormatResult,
    CommonAwsError
  >;
  describePublicIpv4Pools(
    input: DescribePublicIpv4PoolsRequest,
  ): Effect.Effect<
    DescribePublicIpv4PoolsResult,
    CommonAwsError
  >;
  describeRegions(
    input: DescribeRegionsRequest,
  ): Effect.Effect<
    DescribeRegionsResult,
    CommonAwsError
  >;
  describeReplaceRootVolumeTasks(
    input: DescribeReplaceRootVolumeTasksRequest,
  ): Effect.Effect<
    DescribeReplaceRootVolumeTasksResult,
    CommonAwsError
  >;
  describeReservedInstances(
    input: DescribeReservedInstancesRequest,
  ): Effect.Effect<
    DescribeReservedInstancesResult,
    CommonAwsError
  >;
  describeReservedInstancesListings(
    input: DescribeReservedInstancesListingsRequest,
  ): Effect.Effect<
    DescribeReservedInstancesListingsResult,
    CommonAwsError
  >;
  describeReservedInstancesModifications(
    input: DescribeReservedInstancesModificationsRequest,
  ): Effect.Effect<
    DescribeReservedInstancesModificationsResult,
    CommonAwsError
  >;
  describeReservedInstancesOfferings(
    input: DescribeReservedInstancesOfferingsRequest,
  ): Effect.Effect<
    DescribeReservedInstancesOfferingsResult,
    CommonAwsError
  >;
  describeRouteServerEndpoints(
    input: DescribeRouteServerEndpointsRequest,
  ): Effect.Effect<
    DescribeRouteServerEndpointsResult,
    CommonAwsError
  >;
  describeRouteServerPeers(
    input: DescribeRouteServerPeersRequest,
  ): Effect.Effect<
    DescribeRouteServerPeersResult,
    CommonAwsError
  >;
  describeRouteServers(
    input: DescribeRouteServersRequest,
  ): Effect.Effect<
    DescribeRouteServersResult,
    CommonAwsError
  >;
  describeRouteTables(
    input: DescribeRouteTablesRequest,
  ): Effect.Effect<
    DescribeRouteTablesResult,
    CommonAwsError
  >;
  describeScheduledInstanceAvailability(
    input: DescribeScheduledInstanceAvailabilityRequest,
  ): Effect.Effect<
    DescribeScheduledInstanceAvailabilityResult,
    CommonAwsError
  >;
  describeScheduledInstances(
    input: DescribeScheduledInstancesRequest,
  ): Effect.Effect<
    DescribeScheduledInstancesResult,
    CommonAwsError
  >;
  describeSecurityGroupReferences(
    input: DescribeSecurityGroupReferencesRequest,
  ): Effect.Effect<
    DescribeSecurityGroupReferencesResult,
    CommonAwsError
  >;
  describeSecurityGroupRules(
    input: DescribeSecurityGroupRulesRequest,
  ): Effect.Effect<
    DescribeSecurityGroupRulesResult,
    CommonAwsError
  >;
  describeSecurityGroupVpcAssociations(
    input: DescribeSecurityGroupVpcAssociationsRequest,
  ): Effect.Effect<
    DescribeSecurityGroupVpcAssociationsResult,
    CommonAwsError
  >;
  describeSecurityGroups(
    input: DescribeSecurityGroupsRequest,
  ): Effect.Effect<
    DescribeSecurityGroupsResult,
    CommonAwsError
  >;
  describeServiceLinkVirtualInterfaces(
    input: DescribeServiceLinkVirtualInterfacesRequest,
  ): Effect.Effect<
    DescribeServiceLinkVirtualInterfacesResult,
    CommonAwsError
  >;
  describeSnapshotAttribute(
    input: DescribeSnapshotAttributeRequest,
  ): Effect.Effect<
    DescribeSnapshotAttributeResult,
    CommonAwsError
  >;
  describeSnapshotTierStatus(
    input: DescribeSnapshotTierStatusRequest,
  ): Effect.Effect<
    DescribeSnapshotTierStatusResult,
    CommonAwsError
  >;
  describeSnapshots(
    input: DescribeSnapshotsRequest,
  ): Effect.Effect<
    DescribeSnapshotsResult,
    CommonAwsError
  >;
  describeSpotDatafeedSubscription(
    input: DescribeSpotDatafeedSubscriptionRequest,
  ): Effect.Effect<
    DescribeSpotDatafeedSubscriptionResult,
    CommonAwsError
  >;
  describeSpotFleetInstances(
    input: DescribeSpotFleetInstancesRequest,
  ): Effect.Effect<
    DescribeSpotFleetInstancesResponse,
    CommonAwsError
  >;
  describeSpotFleetRequestHistory(
    input: DescribeSpotFleetRequestHistoryRequest,
  ): Effect.Effect<
    DescribeSpotFleetRequestHistoryResponse,
    CommonAwsError
  >;
  describeSpotFleetRequests(
    input: DescribeSpotFleetRequestsRequest,
  ): Effect.Effect<
    DescribeSpotFleetRequestsResponse,
    CommonAwsError
  >;
  describeSpotInstanceRequests(
    input: DescribeSpotInstanceRequestsRequest,
  ): Effect.Effect<
    DescribeSpotInstanceRequestsResult,
    CommonAwsError
  >;
  describeSpotPriceHistory(
    input: DescribeSpotPriceHistoryRequest,
  ): Effect.Effect<
    DescribeSpotPriceHistoryResult,
    CommonAwsError
  >;
  describeStaleSecurityGroups(
    input: DescribeStaleSecurityGroupsRequest,
  ): Effect.Effect<
    DescribeStaleSecurityGroupsResult,
    CommonAwsError
  >;
  describeStoreImageTasks(
    input: DescribeStoreImageTasksRequest,
  ): Effect.Effect<
    DescribeStoreImageTasksResult,
    CommonAwsError
  >;
  describeSubnets(
    input: DescribeSubnetsRequest,
  ): Effect.Effect<
    DescribeSubnetsResult,
    CommonAwsError
  >;
  describeTags(
    input: DescribeTagsRequest,
  ): Effect.Effect<
    DescribeTagsResult,
    CommonAwsError
  >;
  describeTrafficMirrorFilterRules(
    input: DescribeTrafficMirrorFilterRulesRequest,
  ): Effect.Effect<
    DescribeTrafficMirrorFilterRulesResult,
    CommonAwsError
  >;
  describeTrafficMirrorFilters(
    input: DescribeTrafficMirrorFiltersRequest,
  ): Effect.Effect<
    DescribeTrafficMirrorFiltersResult,
    CommonAwsError
  >;
  describeTrafficMirrorSessions(
    input: DescribeTrafficMirrorSessionsRequest,
  ): Effect.Effect<
    DescribeTrafficMirrorSessionsResult,
    CommonAwsError
  >;
  describeTrafficMirrorTargets(
    input: DescribeTrafficMirrorTargetsRequest,
  ): Effect.Effect<
    DescribeTrafficMirrorTargetsResult,
    CommonAwsError
  >;
  describeTransitGatewayAttachments(
    input: DescribeTransitGatewayAttachmentsRequest,
  ): Effect.Effect<
    DescribeTransitGatewayAttachmentsResult,
    CommonAwsError
  >;
  describeTransitGatewayConnectPeers(
    input: DescribeTransitGatewayConnectPeersRequest,
  ): Effect.Effect<
    DescribeTransitGatewayConnectPeersResult,
    CommonAwsError
  >;
  describeTransitGatewayConnects(
    input: DescribeTransitGatewayConnectsRequest,
  ): Effect.Effect<
    DescribeTransitGatewayConnectsResult,
    CommonAwsError
  >;
  describeTransitGatewayMulticastDomains(
    input: DescribeTransitGatewayMulticastDomainsRequest,
  ): Effect.Effect<
    DescribeTransitGatewayMulticastDomainsResult,
    CommonAwsError
  >;
  describeTransitGatewayPeeringAttachments(
    input: DescribeTransitGatewayPeeringAttachmentsRequest,
  ): Effect.Effect<
    DescribeTransitGatewayPeeringAttachmentsResult,
    CommonAwsError
  >;
  describeTransitGatewayPolicyTables(
    input: DescribeTransitGatewayPolicyTablesRequest,
  ): Effect.Effect<
    DescribeTransitGatewayPolicyTablesResult,
    CommonAwsError
  >;
  describeTransitGatewayRouteTableAnnouncements(
    input: DescribeTransitGatewayRouteTableAnnouncementsRequest,
  ): Effect.Effect<
    DescribeTransitGatewayRouteTableAnnouncementsResult,
    CommonAwsError
  >;
  describeTransitGatewayRouteTables(
    input: DescribeTransitGatewayRouteTablesRequest,
  ): Effect.Effect<
    DescribeTransitGatewayRouteTablesResult,
    CommonAwsError
  >;
  describeTransitGatewayVpcAttachments(
    input: DescribeTransitGatewayVpcAttachmentsRequest,
  ): Effect.Effect<
    DescribeTransitGatewayVpcAttachmentsResult,
    CommonAwsError
  >;
  describeTransitGateways(
    input: DescribeTransitGatewaysRequest,
  ): Effect.Effect<
    DescribeTransitGatewaysResult,
    CommonAwsError
  >;
  describeTrunkInterfaceAssociations(
    input: DescribeTrunkInterfaceAssociationsRequest,
  ): Effect.Effect<
    DescribeTrunkInterfaceAssociationsResult,
    CommonAwsError
  >;
  describeVerifiedAccessEndpoints(
    input: DescribeVerifiedAccessEndpointsRequest,
  ): Effect.Effect<
    DescribeVerifiedAccessEndpointsResult,
    CommonAwsError
  >;
  describeVerifiedAccessGroups(
    input: DescribeVerifiedAccessGroupsRequest,
  ): Effect.Effect<
    DescribeVerifiedAccessGroupsResult,
    CommonAwsError
  >;
  describeVerifiedAccessInstanceLoggingConfigurations(
    input: DescribeVerifiedAccessInstanceLoggingConfigurationsRequest,
  ): Effect.Effect<
    DescribeVerifiedAccessInstanceLoggingConfigurationsResult,
    CommonAwsError
  >;
  describeVerifiedAccessInstances(
    input: DescribeVerifiedAccessInstancesRequest,
  ): Effect.Effect<
    DescribeVerifiedAccessInstancesResult,
    CommonAwsError
  >;
  describeVerifiedAccessTrustProviders(
    input: DescribeVerifiedAccessTrustProvidersRequest,
  ): Effect.Effect<
    DescribeVerifiedAccessTrustProvidersResult,
    CommonAwsError
  >;
  describeVolumeAttribute(
    input: DescribeVolumeAttributeRequest,
  ): Effect.Effect<
    DescribeVolumeAttributeResult,
    CommonAwsError
  >;
  describeVolumeStatus(
    input: DescribeVolumeStatusRequest,
  ): Effect.Effect<
    DescribeVolumeStatusResult,
    CommonAwsError
  >;
  describeVolumes(
    input: DescribeVolumesRequest,
  ): Effect.Effect<
    DescribeVolumesResult,
    CommonAwsError
  >;
  describeVolumesModifications(
    input: DescribeVolumesModificationsRequest,
  ): Effect.Effect<
    DescribeVolumesModificationsResult,
    CommonAwsError
  >;
  describeVpcAttribute(
    input: DescribeVpcAttributeRequest,
  ): Effect.Effect<
    DescribeVpcAttributeResult,
    CommonAwsError
  >;
  describeVpcBlockPublicAccessExclusions(
    input: DescribeVpcBlockPublicAccessExclusionsRequest,
  ): Effect.Effect<
    DescribeVpcBlockPublicAccessExclusionsResult,
    CommonAwsError
  >;
  describeVpcBlockPublicAccessOptions(
    input: DescribeVpcBlockPublicAccessOptionsRequest,
  ): Effect.Effect<
    DescribeVpcBlockPublicAccessOptionsResult,
    CommonAwsError
  >;
  describeVpcClassicLink(
    input: DescribeVpcClassicLinkRequest,
  ): Effect.Effect<
    DescribeVpcClassicLinkResult,
    CommonAwsError
  >;
  describeVpcClassicLinkDnsSupport(
    input: DescribeVpcClassicLinkDnsSupportRequest,
  ): Effect.Effect<
    DescribeVpcClassicLinkDnsSupportResult,
    CommonAwsError
  >;
  describeVpcEndpointAssociations(
    input: DescribeVpcEndpointAssociationsRequest,
  ): Effect.Effect<
    DescribeVpcEndpointAssociationsResult,
    CommonAwsError
  >;
  describeVpcEndpointConnectionNotifications(
    input: DescribeVpcEndpointConnectionNotificationsRequest,
  ): Effect.Effect<
    DescribeVpcEndpointConnectionNotificationsResult,
    CommonAwsError
  >;
  describeVpcEndpointConnections(
    input: DescribeVpcEndpointConnectionsRequest,
  ): Effect.Effect<
    DescribeVpcEndpointConnectionsResult,
    CommonAwsError
  >;
  describeVpcEndpointServiceConfigurations(
    input: DescribeVpcEndpointServiceConfigurationsRequest,
  ): Effect.Effect<
    DescribeVpcEndpointServiceConfigurationsResult,
    CommonAwsError
  >;
  describeVpcEndpointServicePermissions(
    input: DescribeVpcEndpointServicePermissionsRequest,
  ): Effect.Effect<
    DescribeVpcEndpointServicePermissionsResult,
    CommonAwsError
  >;
  describeVpcEndpointServices(
    input: DescribeVpcEndpointServicesRequest,
  ): Effect.Effect<
    DescribeVpcEndpointServicesResult,
    CommonAwsError
  >;
  describeVpcEndpoints(
    input: DescribeVpcEndpointsRequest,
  ): Effect.Effect<
    DescribeVpcEndpointsResult,
    CommonAwsError
  >;
  describeVpcPeeringConnections(
    input: DescribeVpcPeeringConnectionsRequest,
  ): Effect.Effect<
    DescribeVpcPeeringConnectionsResult,
    CommonAwsError
  >;
  describeVpcs(
    input: DescribeVpcsRequest,
  ): Effect.Effect<
    DescribeVpcsResult,
    CommonAwsError
  >;
  describeVpnConnections(
    input: DescribeVpnConnectionsRequest,
  ): Effect.Effect<
    DescribeVpnConnectionsResult,
    CommonAwsError
  >;
  describeVpnGateways(
    input: DescribeVpnGatewaysRequest,
  ): Effect.Effect<
    DescribeVpnGatewaysResult,
    CommonAwsError
  >;
  detachClassicLinkVpc(
    input: DetachClassicLinkVpcRequest,
  ): Effect.Effect<
    DetachClassicLinkVpcResult,
    CommonAwsError
  >;
  detachInternetGateway(
    input: DetachInternetGatewayRequest,
  ): Effect.Effect<
    {},
    CommonAwsError
  >;
  detachNetworkInterface(
    input: DetachNetworkInterfaceRequest,
  ): Effect.Effect<
    {},
    CommonAwsError
  >;
  detachVerifiedAccessTrustProvider(
    input: DetachVerifiedAccessTrustProviderRequest,
  ): Effect.Effect<
    DetachVerifiedAccessTrustProviderResult,
    CommonAwsError
  >;
  detachVolume(
    input: DetachVolumeRequest,
  ): Effect.Effect<
    VolumeAttachment,
    CommonAwsError
  >;
  detachVpnGateway(
    input: DetachVpnGatewayRequest,
  ): Effect.Effect<
    {},
    CommonAwsError
  >;
  disableAddressTransfer(
    input: DisableAddressTransferRequest,
  ): Effect.Effect<
    DisableAddressTransferResult,
    CommonAwsError
  >;
  disableAllowedImagesSettings(
    input: DisableAllowedImagesSettingsRequest,
  ): Effect.Effect<
    DisableAllowedImagesSettingsResult,
    CommonAwsError
  >;
  disableAwsNetworkPerformanceMetricSubscription(
    input: DisableAwsNetworkPerformanceMetricSubscriptionRequest,
  ): Effect.Effect<
    DisableAwsNetworkPerformanceMetricSubscriptionResult,
    CommonAwsError
  >;
  disableEbsEncryptionByDefault(
    input: DisableEbsEncryptionByDefaultRequest,
  ): Effect.Effect<
    DisableEbsEncryptionByDefaultResult,
    CommonAwsError
  >;
  disableFastLaunch(
    input: DisableFastLaunchRequest,
  ): Effect.Effect<
    DisableFastLaunchResult,
    CommonAwsError
  >;
  disableFastSnapshotRestores(
    input: DisableFastSnapshotRestoresRequest,
  ): Effect.Effect<
    DisableFastSnapshotRestoresResult,
    CommonAwsError
  >;
  disableImage(
    input: DisableImageRequest,
  ): Effect.Effect<
    DisableImageResult,
    CommonAwsError
  >;
  disableImageBlockPublicAccess(
    input: DisableImageBlockPublicAccessRequest,
  ): Effect.Effect<
    DisableImageBlockPublicAccessResult,
    CommonAwsError
  >;
  disableImageDeprecation(
    input: DisableImageDeprecationRequest,
  ): Effect.Effect<
    DisableImageDeprecationResult,
    CommonAwsError
  >;
  disableImageDeregistrationProtection(
    input: DisableImageDeregistrationProtectionRequest,
  ): Effect.Effect<
    DisableImageDeregistrationProtectionResult,
    CommonAwsError
  >;
  disableIpamOrganizationAdminAccount(
    input: DisableIpamOrganizationAdminAccountRequest,
  ): Effect.Effect<
    DisableIpamOrganizationAdminAccountResult,
    CommonAwsError
  >;
  disableRouteServerPropagation(
    input: DisableRouteServerPropagationRequest,
  ): Effect.Effect<
    DisableRouteServerPropagationResult,
    CommonAwsError
  >;
  disableSerialConsoleAccess(
    input: DisableSerialConsoleAccessRequest,
  ): Effect.Effect<
    DisableSerialConsoleAccessResult,
    CommonAwsError
  >;
  disableSnapshotBlockPublicAccess(
    input: DisableSnapshotBlockPublicAccessRequest,
  ): Effect.Effect<
    DisableSnapshotBlockPublicAccessResult,
    CommonAwsError
  >;
  disableTransitGatewayRouteTablePropagation(
    input: DisableTransitGatewayRouteTablePropagationRequest,
  ): Effect.Effect<
    DisableTransitGatewayRouteTablePropagationResult,
    CommonAwsError
  >;
  disableVgwRoutePropagation(
    input: DisableVgwRoutePropagationRequest,
  ): Effect.Effect<
    {},
    CommonAwsError
  >;
  disableVpcClassicLink(
    input: DisableVpcClassicLinkRequest,
  ): Effect.Effect<
    DisableVpcClassicLinkResult,
    CommonAwsError
  >;
  disableVpcClassicLinkDnsSupport(
    input: DisableVpcClassicLinkDnsSupportRequest,
  ): Effect.Effect<
    DisableVpcClassicLinkDnsSupportResult,
    CommonAwsError
  >;
  disassociateAddress(
    input: DisassociateAddressRequest,
  ): Effect.Effect<
    {},
    CommonAwsError
  >;
  disassociateCapacityReservationBillingOwner(
    input: DisassociateCapacityReservationBillingOwnerRequest,
  ): Effect.Effect<
    DisassociateCapacityReservationBillingOwnerResult,
    CommonAwsError
  >;
  disassociateClientVpnTargetNetwork(
    input: DisassociateClientVpnTargetNetworkRequest,
  ): Effect.Effect<
    DisassociateClientVpnTargetNetworkResult,
    CommonAwsError
  >;
  disassociateEnclaveCertificateIamRole(
    input: DisassociateEnclaveCertificateIamRoleRequest,
  ): Effect.Effect<
    DisassociateEnclaveCertificateIamRoleResult,
    CommonAwsError
  >;
  disassociateIamInstanceProfile(
    input: DisassociateIamInstanceProfileRequest,
  ): Effect.Effect<
    DisassociateIamInstanceProfileResult,
    CommonAwsError
  >;
  disassociateInstanceEventWindow(
    input: DisassociateInstanceEventWindowRequest,
  ): Effect.Effect<
    DisassociateInstanceEventWindowResult,
    CommonAwsError
  >;
  disassociateIpamByoasn(
    input: DisassociateIpamByoasnRequest,
  ): Effect.Effect<
    DisassociateIpamByoasnResult,
    CommonAwsError
  >;
  disassociateIpamResourceDiscovery(
    input: DisassociateIpamResourceDiscoveryRequest,
  ): Effect.Effect<
    DisassociateIpamResourceDiscoveryResult,
    CommonAwsError
  >;
  disassociateNatGatewayAddress(
    input: DisassociateNatGatewayAddressRequest,
  ): Effect.Effect<
    DisassociateNatGatewayAddressResult,
    CommonAwsError
  >;
  disassociateRouteServer(
    input: DisassociateRouteServerRequest,
  ): Effect.Effect<
    DisassociateRouteServerResult,
    CommonAwsError
  >;
  disassociateRouteTable(
    input: DisassociateRouteTableRequest,
  ): Effect.Effect<
    {},
    CommonAwsError
  >;
  disassociateSecurityGroupVpc(
    input: DisassociateSecurityGroupVpcRequest,
  ): Effect.Effect<
    DisassociateSecurityGroupVpcResult,
    CommonAwsError
  >;
  disassociateSubnetCidrBlock(
    input: DisassociateSubnetCidrBlockRequest,
  ): Effect.Effect<
    DisassociateSubnetCidrBlockResult,
    CommonAwsError
  >;
  disassociateTransitGatewayMulticastDomain(
    input: DisassociateTransitGatewayMulticastDomainRequest,
  ): Effect.Effect<
    DisassociateTransitGatewayMulticastDomainResult,
    CommonAwsError
  >;
  disassociateTransitGatewayPolicyTable(
    input: DisassociateTransitGatewayPolicyTableRequest,
  ): Effect.Effect<
    DisassociateTransitGatewayPolicyTableResult,
    CommonAwsError
  >;
  disassociateTransitGatewayRouteTable(
    input: DisassociateTransitGatewayRouteTableRequest,
  ): Effect.Effect<
    DisassociateTransitGatewayRouteTableResult,
    CommonAwsError
  >;
  disassociateTrunkInterface(
    input: DisassociateTrunkInterfaceRequest,
  ): Effect.Effect<
    DisassociateTrunkInterfaceResult,
    CommonAwsError
  >;
  disassociateVpcCidrBlock(
    input: DisassociateVpcCidrBlockRequest,
  ): Effect.Effect<
    DisassociateVpcCidrBlockResult,
    CommonAwsError
  >;
  enableAddressTransfer(
    input: EnableAddressTransferRequest,
  ): Effect.Effect<
    EnableAddressTransferResult,
    CommonAwsError
  >;
  enableAllowedImagesSettings(
    input: EnableAllowedImagesSettingsRequest,
  ): Effect.Effect<
    EnableAllowedImagesSettingsResult,
    CommonAwsError
  >;
  enableAwsNetworkPerformanceMetricSubscription(
    input: EnableAwsNetworkPerformanceMetricSubscriptionRequest,
  ): Effect.Effect<
    EnableAwsNetworkPerformanceMetricSubscriptionResult,
    CommonAwsError
  >;
  enableEbsEncryptionByDefault(
    input: EnableEbsEncryptionByDefaultRequest,
  ): Effect.Effect<
    EnableEbsEncryptionByDefaultResult,
    CommonAwsError
  >;
  enableFastLaunch(
    input: EnableFastLaunchRequest,
  ): Effect.Effect<
    EnableFastLaunchResult,
    CommonAwsError
  >;
  enableFastSnapshotRestores(
    input: EnableFastSnapshotRestoresRequest,
  ): Effect.Effect<
    EnableFastSnapshotRestoresResult,
    CommonAwsError
  >;
  enableImage(
    input: EnableImageRequest,
  ): Effect.Effect<
    EnableImageResult,
    CommonAwsError
  >;
  enableImageBlockPublicAccess(
    input: EnableImageBlockPublicAccessRequest,
  ): Effect.Effect<
    EnableImageBlockPublicAccessResult,
    CommonAwsError
  >;
  enableImageDeprecation(
    input: EnableImageDeprecationRequest,
  ): Effect.Effect<
    EnableImageDeprecationResult,
    CommonAwsError
  >;
  enableImageDeregistrationProtection(
    input: EnableImageDeregistrationProtectionRequest,
  ): Effect.Effect<
    EnableImageDeregistrationProtectionResult,
    CommonAwsError
  >;
  enableIpamOrganizationAdminAccount(
    input: EnableIpamOrganizationAdminAccountRequest,
  ): Effect.Effect<
    EnableIpamOrganizationAdminAccountResult,
    CommonAwsError
  >;
  enableReachabilityAnalyzerOrganizationSharing(
    input: EnableReachabilityAnalyzerOrganizationSharingRequest,
  ): Effect.Effect<
    EnableReachabilityAnalyzerOrganizationSharingResult,
    CommonAwsError
  >;
  enableRouteServerPropagation(
    input: EnableRouteServerPropagationRequest,
  ): Effect.Effect<
    EnableRouteServerPropagationResult,
    CommonAwsError
  >;
  enableSerialConsoleAccess(
    input: EnableSerialConsoleAccessRequest,
  ): Effect.Effect<
    EnableSerialConsoleAccessResult,
    CommonAwsError
  >;
  enableSnapshotBlockPublicAccess(
    input: EnableSnapshotBlockPublicAccessRequest,
  ): Effect.Effect<
    EnableSnapshotBlockPublicAccessResult,
    CommonAwsError
  >;
  enableTransitGatewayRouteTablePropagation(
    input: EnableTransitGatewayRouteTablePropagationRequest,
  ): Effect.Effect<
    EnableTransitGatewayRouteTablePropagationResult,
    CommonAwsError
  >;
  enableVgwRoutePropagation(
    input: EnableVgwRoutePropagationRequest,
  ): Effect.Effect<
    {},
    CommonAwsError
  >;
  enableVolumeIO(
    input: EnableVolumeIORequest,
  ): Effect.Effect<
    {},
    CommonAwsError
  >;
  enableVpcClassicLink(
    input: EnableVpcClassicLinkRequest,
  ): Effect.Effect<
    EnableVpcClassicLinkResult,
    CommonAwsError
  >;
  enableVpcClassicLinkDnsSupport(
    input: EnableVpcClassicLinkDnsSupportRequest,
  ): Effect.Effect<
    EnableVpcClassicLinkDnsSupportResult,
    CommonAwsError
  >;
  exportClientVpnClientCertificateRevocationList(
    input: ExportClientVpnClientCertificateRevocationListRequest,
  ): Effect.Effect<
    ExportClientVpnClientCertificateRevocationListResult,
    CommonAwsError
  >;
  exportClientVpnClientConfiguration(
    input: ExportClientVpnClientConfigurationRequest,
  ): Effect.Effect<
    ExportClientVpnClientConfigurationResult,
    CommonAwsError
  >;
  exportImage(
    input: ExportImageRequest,
  ): Effect.Effect<
    ExportImageResult,
    CommonAwsError
  >;
  exportTransitGatewayRoutes(
    input: ExportTransitGatewayRoutesRequest,
  ): Effect.Effect<
    ExportTransitGatewayRoutesResult,
    CommonAwsError
  >;
  exportVerifiedAccessInstanceClientConfiguration(
    input: ExportVerifiedAccessInstanceClientConfigurationRequest,
  ): Effect.Effect<
    ExportVerifiedAccessInstanceClientConfigurationResult,
    CommonAwsError
  >;
  getActiveVpnTunnelStatus(
    input: GetActiveVpnTunnelStatusRequest,
  ): Effect.Effect<
    GetActiveVpnTunnelStatusResult,
    CommonAwsError
  >;
  getAllowedImagesSettings(
    input: GetAllowedImagesSettingsRequest,
  ): Effect.Effect<
    GetAllowedImagesSettingsResult,
    CommonAwsError
  >;
  getAssociatedEnclaveCertificateIamRoles(
    input: GetAssociatedEnclaveCertificateIamRolesRequest,
  ): Effect.Effect<
    GetAssociatedEnclaveCertificateIamRolesResult,
    CommonAwsError
  >;
  getAssociatedIpv6PoolCidrs(
    input: GetAssociatedIpv6PoolCidrsRequest,
  ): Effect.Effect<
    GetAssociatedIpv6PoolCidrsResult,
    CommonAwsError
  >;
  getAwsNetworkPerformanceData(
    input: GetAwsNetworkPerformanceDataRequest,
  ): Effect.Effect<
    GetAwsNetworkPerformanceDataResult,
    CommonAwsError
  >;
  getCapacityReservationUsage(
    input: GetCapacityReservationUsageRequest,
  ): Effect.Effect<
    GetCapacityReservationUsageResult,
    CommonAwsError
  >;
  getCoipPoolUsage(
    input: GetCoipPoolUsageRequest,
  ): Effect.Effect<
    GetCoipPoolUsageResult,
    CommonAwsError
  >;
  getConsoleOutput(
    input: GetConsoleOutputRequest,
  ): Effect.Effect<
    GetConsoleOutputResult,
    CommonAwsError
  >;
  getConsoleScreenshot(
    input: GetConsoleScreenshotRequest,
  ): Effect.Effect<
    GetConsoleScreenshotResult,
    CommonAwsError
  >;
  getDeclarativePoliciesReportSummary(
    input: GetDeclarativePoliciesReportSummaryRequest,
  ): Effect.Effect<
    GetDeclarativePoliciesReportSummaryResult,
    CommonAwsError
  >;
  getDefaultCreditSpecification(
    input: GetDefaultCreditSpecificationRequest,
  ): Effect.Effect<
    GetDefaultCreditSpecificationResult,
    CommonAwsError
  >;
  getEbsDefaultKmsKeyId(
    input: GetEbsDefaultKmsKeyIdRequest,
  ): Effect.Effect<
    GetEbsDefaultKmsKeyIdResult,
    CommonAwsError
  >;
  getEbsEncryptionByDefault(
    input: GetEbsEncryptionByDefaultRequest,
  ): Effect.Effect<
    GetEbsEncryptionByDefaultResult,
    CommonAwsError
  >;
  getFlowLogsIntegrationTemplate(
    input: GetFlowLogsIntegrationTemplateRequest,
  ): Effect.Effect<
    GetFlowLogsIntegrationTemplateResult,
    CommonAwsError
  >;
  getGroupsForCapacityReservation(
    input: GetGroupsForCapacityReservationRequest,
  ): Effect.Effect<
    GetGroupsForCapacityReservationResult,
    CommonAwsError
  >;
  getHostReservationPurchasePreview(
    input: GetHostReservationPurchasePreviewRequest,
  ): Effect.Effect<
    GetHostReservationPurchasePreviewResult,
    CommonAwsError
  >;
  getImageBlockPublicAccessState(
    input: GetImageBlockPublicAccessStateRequest,
  ): Effect.Effect<
    GetImageBlockPublicAccessStateResult,
    CommonAwsError
  >;
  getInstanceMetadataDefaults(
    input: GetInstanceMetadataDefaultsRequest,
  ): Effect.Effect<
    GetInstanceMetadataDefaultsResult,
    CommonAwsError
  >;
  getInstanceTpmEkPub(
    input: GetInstanceTpmEkPubRequest,
  ): Effect.Effect<
    GetInstanceTpmEkPubResult,
    CommonAwsError
  >;
  getInstanceTypesFromInstanceRequirements(
    input: GetInstanceTypesFromInstanceRequirementsRequest,
  ): Effect.Effect<
    GetInstanceTypesFromInstanceRequirementsResult,
    CommonAwsError
  >;
  getInstanceUefiData(
    input: GetInstanceUefiDataRequest,
  ): Effect.Effect<
    GetInstanceUefiDataResult,
    CommonAwsError
  >;
  getIpamAddressHistory(
    input: GetIpamAddressHistoryRequest,
  ): Effect.Effect<
    GetIpamAddressHistoryResult,
    CommonAwsError
  >;
  getIpamDiscoveredAccounts(
    input: GetIpamDiscoveredAccountsRequest,
  ): Effect.Effect<
    GetIpamDiscoveredAccountsResult,
    CommonAwsError
  >;
  getIpamDiscoveredPublicAddresses(
    input: GetIpamDiscoveredPublicAddressesRequest,
  ): Effect.Effect<
    GetIpamDiscoveredPublicAddressesResult,
    CommonAwsError
  >;
  getIpamDiscoveredResourceCidrs(
    input: GetIpamDiscoveredResourceCidrsRequest,
  ): Effect.Effect<
    GetIpamDiscoveredResourceCidrsResult,
    CommonAwsError
  >;
  getIpamPoolAllocations(
    input: GetIpamPoolAllocationsRequest,
  ): Effect.Effect<
    GetIpamPoolAllocationsResult,
    CommonAwsError
  >;
  getIpamPoolCidrs(
    input: GetIpamPoolCidrsRequest,
  ): Effect.Effect<
    GetIpamPoolCidrsResult,
    CommonAwsError
  >;
  getIpamResourceCidrs(
    input: GetIpamResourceCidrsRequest,
  ): Effect.Effect<
    GetIpamResourceCidrsResult,
    CommonAwsError
  >;
  getLaunchTemplateData(
    input: GetLaunchTemplateDataRequest,
  ): Effect.Effect<
    GetLaunchTemplateDataResult,
    CommonAwsError
  >;
  getManagedPrefixListAssociations(
    input: GetManagedPrefixListAssociationsRequest,
  ): Effect.Effect<
    GetManagedPrefixListAssociationsResult,
    CommonAwsError
  >;
  getManagedPrefixListEntries(
    input: GetManagedPrefixListEntriesRequest,
  ): Effect.Effect<
    GetManagedPrefixListEntriesResult,
    CommonAwsError
  >;
  getNetworkInsightsAccessScopeAnalysisFindings(
    input: GetNetworkInsightsAccessScopeAnalysisFindingsRequest,
  ): Effect.Effect<
    GetNetworkInsightsAccessScopeAnalysisFindingsResult,
    CommonAwsError
  >;
  getNetworkInsightsAccessScopeContent(
    input: GetNetworkInsightsAccessScopeContentRequest,
  ): Effect.Effect<
    GetNetworkInsightsAccessScopeContentResult,
    CommonAwsError
  >;
  getPasswordData(
    input: GetPasswordDataRequest,
  ): Effect.Effect<
    GetPasswordDataResult,
    CommonAwsError
  >;
  getReservedInstancesExchangeQuote(
    input: GetReservedInstancesExchangeQuoteRequest,
  ): Effect.Effect<
    GetReservedInstancesExchangeQuoteResult,
    CommonAwsError
  >;
  getRouteServerAssociations(
    input: GetRouteServerAssociationsRequest,
  ): Effect.Effect<
    GetRouteServerAssociationsResult,
    CommonAwsError
  >;
  getRouteServerPropagations(
    input: GetRouteServerPropagationsRequest,
  ): Effect.Effect<
    GetRouteServerPropagationsResult,
    CommonAwsError
  >;
  getRouteServerRoutingDatabase(
    input: GetRouteServerRoutingDatabaseRequest,
  ): Effect.Effect<
    GetRouteServerRoutingDatabaseResult,
    CommonAwsError
  >;
  getSecurityGroupsForVpc(
    input: GetSecurityGroupsForVpcRequest,
  ): Effect.Effect<
    GetSecurityGroupsForVpcResult,
    CommonAwsError
  >;
  getSerialConsoleAccessStatus(
    input: GetSerialConsoleAccessStatusRequest,
  ): Effect.Effect<
    GetSerialConsoleAccessStatusResult,
    CommonAwsError
  >;
  getSnapshotBlockPublicAccessState(
    input: GetSnapshotBlockPublicAccessStateRequest,
  ): Effect.Effect<
    GetSnapshotBlockPublicAccessStateResult,
    CommonAwsError
  >;
  getSpotPlacementScores(
    input: GetSpotPlacementScoresRequest,
  ): Effect.Effect<
    GetSpotPlacementScoresResult,
    CommonAwsError
  >;
  getSubnetCidrReservations(
    input: GetSubnetCidrReservationsRequest,
  ): Effect.Effect<
    GetSubnetCidrReservationsResult,
    CommonAwsError
  >;
  getTransitGatewayAttachmentPropagations(
    input: GetTransitGatewayAttachmentPropagationsRequest,
  ): Effect.Effect<
    GetTransitGatewayAttachmentPropagationsResult,
    CommonAwsError
  >;
  getTransitGatewayMulticastDomainAssociations(
    input: GetTransitGatewayMulticastDomainAssociationsRequest,
  ): Effect.Effect<
    GetTransitGatewayMulticastDomainAssociationsResult,
    CommonAwsError
  >;
  getTransitGatewayPolicyTableAssociations(
    input: GetTransitGatewayPolicyTableAssociationsRequest,
  ): Effect.Effect<
    GetTransitGatewayPolicyTableAssociationsResult,
    CommonAwsError
  >;
  getTransitGatewayPolicyTableEntries(
    input: GetTransitGatewayPolicyTableEntriesRequest,
  ): Effect.Effect<
    GetTransitGatewayPolicyTableEntriesResult,
    CommonAwsError
  >;
  getTransitGatewayPrefixListReferences(
    input: GetTransitGatewayPrefixListReferencesRequest,
  ): Effect.Effect<
    GetTransitGatewayPrefixListReferencesResult,
    CommonAwsError
  >;
  getTransitGatewayRouteTableAssociations(
    input: GetTransitGatewayRouteTableAssociationsRequest,
  ): Effect.Effect<
    GetTransitGatewayRouteTableAssociationsResult,
    CommonAwsError
  >;
  getTransitGatewayRouteTablePropagations(
    input: GetTransitGatewayRouteTablePropagationsRequest,
  ): Effect.Effect<
    GetTransitGatewayRouteTablePropagationsResult,
    CommonAwsError
  >;
  getVerifiedAccessEndpointPolicy(
    input: GetVerifiedAccessEndpointPolicyRequest,
  ): Effect.Effect<
    GetVerifiedAccessEndpointPolicyResult,
    CommonAwsError
  >;
  getVerifiedAccessEndpointTargets(
    input: GetVerifiedAccessEndpointTargetsRequest,
  ): Effect.Effect<
    GetVerifiedAccessEndpointTargetsResult,
    CommonAwsError
  >;
  getVerifiedAccessGroupPolicy(
    input: GetVerifiedAccessGroupPolicyRequest,
  ): Effect.Effect<
    GetVerifiedAccessGroupPolicyResult,
    CommonAwsError
  >;
  getVpnConnectionDeviceSampleConfiguration(
    input: GetVpnConnectionDeviceSampleConfigurationRequest,
  ): Effect.Effect<
    GetVpnConnectionDeviceSampleConfigurationResult,
    CommonAwsError
  >;
  getVpnConnectionDeviceTypes(
    input: GetVpnConnectionDeviceTypesRequest,
  ): Effect.Effect<
    GetVpnConnectionDeviceTypesResult,
    CommonAwsError
  >;
  getVpnTunnelReplacementStatus(
    input: GetVpnTunnelReplacementStatusRequest,
  ): Effect.Effect<
    GetVpnTunnelReplacementStatusResult,
    CommonAwsError
  >;
  importClientVpnClientCertificateRevocationList(
    input: ImportClientVpnClientCertificateRevocationListRequest,
  ): Effect.Effect<
    ImportClientVpnClientCertificateRevocationListResult,
    CommonAwsError
  >;
  importImage(
    input: ImportImageRequest,
  ): Effect.Effect<
    ImportImageResult,
    CommonAwsError
  >;
  importInstance(
    input: ImportInstanceRequest,
  ): Effect.Effect<
    ImportInstanceResult,
    CommonAwsError
  >;
  importKeyPair(
    input: ImportKeyPairRequest,
  ): Effect.Effect<
    ImportKeyPairResult,
    CommonAwsError
  >;
  importSnapshot(
    input: ImportSnapshotRequest,
  ): Effect.Effect<
    ImportSnapshotResult,
    CommonAwsError
  >;
  importVolume(
    input: ImportVolumeRequest,
  ): Effect.Effect<
    ImportVolumeResult,
    CommonAwsError
  >;
  listImagesInRecycleBin(
    input: ListImagesInRecycleBinRequest,
  ): Effect.Effect<
    ListImagesInRecycleBinResult,
    CommonAwsError
  >;
  listSnapshotsInRecycleBin(
    input: ListSnapshotsInRecycleBinRequest,
  ): Effect.Effect<
    ListSnapshotsInRecycleBinResult,
    CommonAwsError
  >;
  lockSnapshot(
    input: LockSnapshotRequest,
  ): Effect.Effect<
    LockSnapshotResult,
    CommonAwsError
  >;
  modifyAddressAttribute(
    input: ModifyAddressAttributeRequest,
  ): Effect.Effect<
    ModifyAddressAttributeResult,
    CommonAwsError
  >;
  modifyAvailabilityZoneGroup(
    input: ModifyAvailabilityZoneGroupRequest,
  ): Effect.Effect<
    ModifyAvailabilityZoneGroupResult,
    CommonAwsError
  >;
  modifyCapacityReservation(
    input: ModifyCapacityReservationRequest,
  ): Effect.Effect<
    ModifyCapacityReservationResult,
    CommonAwsError
  >;
  modifyCapacityReservationFleet(
    input: ModifyCapacityReservationFleetRequest,
  ): Effect.Effect<
    ModifyCapacityReservationFleetResult,
    CommonAwsError
  >;
  modifyClientVpnEndpoint(
    input: ModifyClientVpnEndpointRequest,
  ): Effect.Effect<
    ModifyClientVpnEndpointResult,
    CommonAwsError
  >;
  modifyDefaultCreditSpecification(
    input: ModifyDefaultCreditSpecificationRequest,
  ): Effect.Effect<
    ModifyDefaultCreditSpecificationResult,
    CommonAwsError
  >;
  modifyEbsDefaultKmsKeyId(
    input: ModifyEbsDefaultKmsKeyIdRequest,
  ): Effect.Effect<
    ModifyEbsDefaultKmsKeyIdResult,
    CommonAwsError
  >;
  modifyFleet(
    input: ModifyFleetRequest,
  ): Effect.Effect<
    ModifyFleetResult,
    CommonAwsError
  >;
  modifyFpgaImageAttribute(
    input: ModifyFpgaImageAttributeRequest,
  ): Effect.Effect<
    ModifyFpgaImageAttributeResult,
    CommonAwsError
  >;
  modifyHosts(
    input: ModifyHostsRequest,
  ): Effect.Effect<
    ModifyHostsResult,
    CommonAwsError
  >;
  modifyIdFormat(
    input: ModifyIdFormatRequest,
  ): Effect.Effect<
    {},
    CommonAwsError
  >;
  modifyIdentityIdFormat(
    input: ModifyIdentityIdFormatRequest,
  ): Effect.Effect<
    {},
    CommonAwsError
  >;
  modifyImageAttribute(
    input: ModifyImageAttributeRequest,
  ): Effect.Effect<
    {},
    CommonAwsError
  >;
  modifyInstanceAttribute(
    input: ModifyInstanceAttributeRequest,
  ): Effect.Effect<
    {},
    CommonAwsError
  >;
  modifyInstanceCapacityReservationAttributes(
    input: ModifyInstanceCapacityReservationAttributesRequest,
  ): Effect.Effect<
    ModifyInstanceCapacityReservationAttributesResult,
    CommonAwsError
  >;
  modifyInstanceCpuOptions(
    input: ModifyInstanceCpuOptionsRequest,
  ): Effect.Effect<
    ModifyInstanceCpuOptionsResult,
    CommonAwsError
  >;
  modifyInstanceCreditSpecification(
    input: ModifyInstanceCreditSpecificationRequest,
  ): Effect.Effect<
    ModifyInstanceCreditSpecificationResult,
    CommonAwsError
  >;
  modifyInstanceEventStartTime(
    input: ModifyInstanceEventStartTimeRequest,
  ): Effect.Effect<
    ModifyInstanceEventStartTimeResult,
    CommonAwsError
  >;
  modifyInstanceEventWindow(
    input: ModifyInstanceEventWindowRequest,
  ): Effect.Effect<
    ModifyInstanceEventWindowResult,
    CommonAwsError
  >;
  modifyInstanceMaintenanceOptions(
    input: ModifyInstanceMaintenanceOptionsRequest,
  ): Effect.Effect<
    ModifyInstanceMaintenanceOptionsResult,
    CommonAwsError
  >;
  modifyInstanceMetadataDefaults(
    input: ModifyInstanceMetadataDefaultsRequest,
  ): Effect.Effect<
    ModifyInstanceMetadataDefaultsResult,
    CommonAwsError
  >;
  modifyInstanceMetadataOptions(
    input: ModifyInstanceMetadataOptionsRequest,
  ): Effect.Effect<
    ModifyInstanceMetadataOptionsResult,
    CommonAwsError
  >;
  modifyInstanceNetworkPerformanceOptions(
    input: ModifyInstanceNetworkPerformanceRequest,
  ): Effect.Effect<
    ModifyInstanceNetworkPerformanceResult,
    CommonAwsError
  >;
  modifyInstancePlacement(
    input: ModifyInstancePlacementRequest,
  ): Effect.Effect<
    ModifyInstancePlacementResult,
    CommonAwsError
  >;
  modifyIpam(
    input: ModifyIpamRequest,
  ): Effect.Effect<
    ModifyIpamResult,
    CommonAwsError
  >;
  modifyIpamPool(
    input: ModifyIpamPoolRequest,
  ): Effect.Effect<
    ModifyIpamPoolResult,
    CommonAwsError
  >;
  modifyIpamResourceCidr(
    input: ModifyIpamResourceCidrRequest,
  ): Effect.Effect<
    ModifyIpamResourceCidrResult,
    CommonAwsError
  >;
  modifyIpamResourceDiscovery(
    input: ModifyIpamResourceDiscoveryRequest,
  ): Effect.Effect<
    ModifyIpamResourceDiscoveryResult,
    CommonAwsError
  >;
  modifyIpamScope(
    input: ModifyIpamScopeRequest,
  ): Effect.Effect<
    ModifyIpamScopeResult,
    CommonAwsError
  >;
  modifyLaunchTemplate(
    input: ModifyLaunchTemplateRequest,
  ): Effect.Effect<
    ModifyLaunchTemplateResult,
    CommonAwsError
  >;
  modifyLocalGatewayRoute(
    input: ModifyLocalGatewayRouteRequest,
  ): Effect.Effect<
    ModifyLocalGatewayRouteResult,
    CommonAwsError
  >;
  modifyManagedPrefixList(
    input: ModifyManagedPrefixListRequest,
  ): Effect.Effect<
    ModifyManagedPrefixListResult,
    CommonAwsError
  >;
  modifyNetworkInterfaceAttribute(
    input: ModifyNetworkInterfaceAttributeRequest,
  ): Effect.Effect<
    {},
    CommonAwsError
  >;
  modifyPrivateDnsNameOptions(
    input: ModifyPrivateDnsNameOptionsRequest,
  ): Effect.Effect<
    ModifyPrivateDnsNameOptionsResult,
    CommonAwsError
  >;
  modifyPublicIpDnsNameOptions(
    input: ModifyPublicIpDnsNameOptionsRequest,
  ): Effect.Effect<
    ModifyPublicIpDnsNameOptionsResult,
    CommonAwsError
  >;
  modifyReservedInstances(
    input: ModifyReservedInstancesRequest,
  ): Effect.Effect<
    ModifyReservedInstancesResult,
    CommonAwsError
  >;
  modifyRouteServer(
    input: ModifyRouteServerRequest,
  ): Effect.Effect<
    ModifyRouteServerResult,
    CommonAwsError
  >;
  modifySecurityGroupRules(
    input: ModifySecurityGroupRulesRequest,
  ): Effect.Effect<
    ModifySecurityGroupRulesResult,
    CommonAwsError
  >;
  modifySnapshotAttribute(
    input: ModifySnapshotAttributeRequest,
  ): Effect.Effect<
    {},
    CommonAwsError
  >;
  modifySnapshotTier(
    input: ModifySnapshotTierRequest,
  ): Effect.Effect<
    ModifySnapshotTierResult,
    CommonAwsError
  >;
  modifySpotFleetRequest(
    input: ModifySpotFleetRequestRequest,
  ): Effect.Effect<
    ModifySpotFleetRequestResponse,
    CommonAwsError
  >;
  modifySubnetAttribute(
    input: ModifySubnetAttributeRequest,
  ): Effect.Effect<
    {},
    CommonAwsError
  >;
  modifyTrafficMirrorFilterNetworkServices(
    input: ModifyTrafficMirrorFilterNetworkServicesRequest,
  ): Effect.Effect<
    ModifyTrafficMirrorFilterNetworkServicesResult,
    CommonAwsError
  >;
  modifyTrafficMirrorFilterRule(
    input: ModifyTrafficMirrorFilterRuleRequest,
  ): Effect.Effect<
    ModifyTrafficMirrorFilterRuleResult,
    CommonAwsError
  >;
  modifyTrafficMirrorSession(
    input: ModifyTrafficMirrorSessionRequest,
  ): Effect.Effect<
    ModifyTrafficMirrorSessionResult,
    CommonAwsError
  >;
  modifyTransitGateway(
    input: ModifyTransitGatewayRequest,
  ): Effect.Effect<
    ModifyTransitGatewayResult,
    CommonAwsError
  >;
  modifyTransitGatewayPrefixListReference(
    input: ModifyTransitGatewayPrefixListReferenceRequest,
  ): Effect.Effect<
    ModifyTransitGatewayPrefixListReferenceResult,
    CommonAwsError
  >;
  modifyTransitGatewayVpcAttachment(
    input: ModifyTransitGatewayVpcAttachmentRequest,
  ): Effect.Effect<
    ModifyTransitGatewayVpcAttachmentResult,
    CommonAwsError
  >;
  modifyVerifiedAccessEndpoint(
    input: ModifyVerifiedAccessEndpointRequest,
  ): Effect.Effect<
    ModifyVerifiedAccessEndpointResult,
    CommonAwsError
  >;
  modifyVerifiedAccessEndpointPolicy(
    input: ModifyVerifiedAccessEndpointPolicyRequest,
  ): Effect.Effect<
    ModifyVerifiedAccessEndpointPolicyResult,
    CommonAwsError
  >;
  modifyVerifiedAccessGroup(
    input: ModifyVerifiedAccessGroupRequest,
  ): Effect.Effect<
    ModifyVerifiedAccessGroupResult,
    CommonAwsError
  >;
  modifyVerifiedAccessGroupPolicy(
    input: ModifyVerifiedAccessGroupPolicyRequest,
  ): Effect.Effect<
    ModifyVerifiedAccessGroupPolicyResult,
    CommonAwsError
  >;
  modifyVerifiedAccessInstance(
    input: ModifyVerifiedAccessInstanceRequest,
  ): Effect.Effect<
    ModifyVerifiedAccessInstanceResult,
    CommonAwsError
  >;
  modifyVerifiedAccessInstanceLoggingConfiguration(
    input: ModifyVerifiedAccessInstanceLoggingConfigurationRequest,
  ): Effect.Effect<
    ModifyVerifiedAccessInstanceLoggingConfigurationResult,
    CommonAwsError
  >;
  modifyVerifiedAccessTrustProvider(
    input: ModifyVerifiedAccessTrustProviderRequest,
  ): Effect.Effect<
    ModifyVerifiedAccessTrustProviderResult,
    CommonAwsError
  >;
  modifyVolume(
    input: ModifyVolumeRequest,
  ): Effect.Effect<
    ModifyVolumeResult,
    CommonAwsError
  >;
  modifyVolumeAttribute(
    input: ModifyVolumeAttributeRequest,
  ): Effect.Effect<
    {},
    CommonAwsError
  >;
  modifyVpcAttribute(
    input: ModifyVpcAttributeRequest,
  ): Effect.Effect<
    {},
    CommonAwsError
  >;
  modifyVpcBlockPublicAccessExclusion(
    input: ModifyVpcBlockPublicAccessExclusionRequest,
  ): Effect.Effect<
    ModifyVpcBlockPublicAccessExclusionResult,
    CommonAwsError
  >;
  modifyVpcBlockPublicAccessOptions(
    input: ModifyVpcBlockPublicAccessOptionsRequest,
  ): Effect.Effect<
    ModifyVpcBlockPublicAccessOptionsResult,
    CommonAwsError
  >;
  modifyVpcEndpoint(
    input: ModifyVpcEndpointRequest,
  ): Effect.Effect<
    ModifyVpcEndpointResult,
    CommonAwsError
  >;
  modifyVpcEndpointConnectionNotification(
    input: ModifyVpcEndpointConnectionNotificationRequest,
  ): Effect.Effect<
    ModifyVpcEndpointConnectionNotificationResult,
    CommonAwsError
  >;
  modifyVpcEndpointServiceConfiguration(
    input: ModifyVpcEndpointServiceConfigurationRequest,
  ): Effect.Effect<
    ModifyVpcEndpointServiceConfigurationResult,
    CommonAwsError
  >;
  modifyVpcEndpointServicePayerResponsibility(
    input: ModifyVpcEndpointServicePayerResponsibilityRequest,
  ): Effect.Effect<
    ModifyVpcEndpointServicePayerResponsibilityResult,
    CommonAwsError
  >;
  modifyVpcEndpointServicePermissions(
    input: ModifyVpcEndpointServicePermissionsRequest,
  ): Effect.Effect<
    ModifyVpcEndpointServicePermissionsResult,
    CommonAwsError
  >;
  modifyVpcPeeringConnectionOptions(
    input: ModifyVpcPeeringConnectionOptionsRequest,
  ): Effect.Effect<
    ModifyVpcPeeringConnectionOptionsResult,
    CommonAwsError
  >;
  modifyVpcTenancy(
    input: ModifyVpcTenancyRequest,
  ): Effect.Effect<
    ModifyVpcTenancyResult,
    CommonAwsError
  >;
  modifyVpnConnection(
    input: ModifyVpnConnectionRequest,
  ): Effect.Effect<
    ModifyVpnConnectionResult,
    CommonAwsError
  >;
  modifyVpnConnectionOptions(
    input: ModifyVpnConnectionOptionsRequest,
  ): Effect.Effect<
    ModifyVpnConnectionOptionsResult,
    CommonAwsError
  >;
  modifyVpnTunnelCertificate(
    input: ModifyVpnTunnelCertificateRequest,
  ): Effect.Effect<
    ModifyVpnTunnelCertificateResult,
    CommonAwsError
  >;
  modifyVpnTunnelOptions(
    input: ModifyVpnTunnelOptionsRequest,
  ): Effect.Effect<
    ModifyVpnTunnelOptionsResult,
    CommonAwsError
  >;
  monitorInstances(
    input: MonitorInstancesRequest,
  ): Effect.Effect<
    MonitorInstancesResult,
    CommonAwsError
  >;
  moveAddressToVpc(
    input: MoveAddressToVpcRequest,
  ): Effect.Effect<
    MoveAddressToVpcResult,
    CommonAwsError
  >;
  moveByoipCidrToIpam(
    input: MoveByoipCidrToIpamRequest,
  ): Effect.Effect<
    MoveByoipCidrToIpamResult,
    CommonAwsError
  >;
  moveCapacityReservationInstances(
    input: MoveCapacityReservationInstancesRequest,
  ): Effect.Effect<
    MoveCapacityReservationInstancesResult,
    CommonAwsError
  >;
  provisionByoipCidr(
    input: ProvisionByoipCidrRequest,
  ): Effect.Effect<
    ProvisionByoipCidrResult,
    CommonAwsError
  >;
  provisionIpamByoasn(
    input: ProvisionIpamByoasnRequest,
  ): Effect.Effect<
    ProvisionIpamByoasnResult,
    CommonAwsError
  >;
  provisionIpamPoolCidr(
    input: ProvisionIpamPoolCidrRequest,
  ): Effect.Effect<
    ProvisionIpamPoolCidrResult,
    CommonAwsError
  >;
  provisionPublicIpv4PoolCidr(
    input: ProvisionPublicIpv4PoolCidrRequest,
  ): Effect.Effect<
    ProvisionPublicIpv4PoolCidrResult,
    CommonAwsError
  >;
  purchaseCapacityBlock(
    input: PurchaseCapacityBlockRequest,
  ): Effect.Effect<
    PurchaseCapacityBlockResult,
    CommonAwsError
  >;
  purchaseCapacityBlockExtension(
    input: PurchaseCapacityBlockExtensionRequest,
  ): Effect.Effect<
    PurchaseCapacityBlockExtensionResult,
    CommonAwsError
  >;
  purchaseHostReservation(
    input: PurchaseHostReservationRequest,
  ): Effect.Effect<
    PurchaseHostReservationResult,
    CommonAwsError
  >;
  purchaseReservedInstancesOffering(
    input: PurchaseReservedInstancesOfferingRequest,
  ): Effect.Effect<
    PurchaseReservedInstancesOfferingResult,
    CommonAwsError
  >;
  purchaseScheduledInstances(
    input: PurchaseScheduledInstancesRequest,
  ): Effect.Effect<
    PurchaseScheduledInstancesResult,
    CommonAwsError
  >;
  rebootInstances(
    input: RebootInstancesRequest,
  ): Effect.Effect<
    {},
    CommonAwsError
  >;
  registerImage(
    input: RegisterImageRequest,
  ): Effect.Effect<
    RegisterImageResult,
    CommonAwsError
  >;
  registerInstanceEventNotificationAttributes(
    input: RegisterInstanceEventNotificationAttributesRequest,
  ): Effect.Effect<
    RegisterInstanceEventNotificationAttributesResult,
    CommonAwsError
  >;
  registerTransitGatewayMulticastGroupMembers(
    input: RegisterTransitGatewayMulticastGroupMembersRequest,
  ): Effect.Effect<
    RegisterTransitGatewayMulticastGroupMembersResult,
    CommonAwsError
  >;
  registerTransitGatewayMulticastGroupSources(
    input: RegisterTransitGatewayMulticastGroupSourcesRequest,
  ): Effect.Effect<
    RegisterTransitGatewayMulticastGroupSourcesResult,
    CommonAwsError
  >;
  rejectCapacityReservationBillingOwnership(
    input: RejectCapacityReservationBillingOwnershipRequest,
  ): Effect.Effect<
    RejectCapacityReservationBillingOwnershipResult,
    CommonAwsError
  >;
  rejectTransitGatewayMulticastDomainAssociations(
    input: RejectTransitGatewayMulticastDomainAssociationsRequest,
  ): Effect.Effect<
    RejectTransitGatewayMulticastDomainAssociationsResult,
    CommonAwsError
  >;
  rejectTransitGatewayPeeringAttachment(
    input: RejectTransitGatewayPeeringAttachmentRequest,
  ): Effect.Effect<
    RejectTransitGatewayPeeringAttachmentResult,
    CommonAwsError
  >;
  rejectTransitGatewayVpcAttachment(
    input: RejectTransitGatewayVpcAttachmentRequest,
  ): Effect.Effect<
    RejectTransitGatewayVpcAttachmentResult,
    CommonAwsError
  >;
  rejectVpcEndpointConnections(
    input: RejectVpcEndpointConnectionsRequest,
  ): Effect.Effect<
    RejectVpcEndpointConnectionsResult,
    CommonAwsError
  >;
  rejectVpcPeeringConnection(
    input: RejectVpcPeeringConnectionRequest,
  ): Effect.Effect<
    RejectVpcPeeringConnectionResult,
    CommonAwsError
  >;
  releaseAddress(
    input: ReleaseAddressRequest,
  ): Effect.Effect<
    {},
    CommonAwsError
  >;
  releaseHosts(
    input: ReleaseHostsRequest,
  ): Effect.Effect<
    ReleaseHostsResult,
    CommonAwsError
  >;
  releaseIpamPoolAllocation(
    input: ReleaseIpamPoolAllocationRequest,
  ): Effect.Effect<
    ReleaseIpamPoolAllocationResult,
    CommonAwsError
  >;
  replaceIamInstanceProfileAssociation(
    input: ReplaceIamInstanceProfileAssociationRequest,
  ): Effect.Effect<
    ReplaceIamInstanceProfileAssociationResult,
    CommonAwsError
  >;
  replaceImageCriteriaInAllowedImagesSettings(
    input: ReplaceImageCriteriaInAllowedImagesSettingsRequest,
  ): Effect.Effect<
    ReplaceImageCriteriaInAllowedImagesSettingsResult,
    CommonAwsError
  >;
  replaceNetworkAclAssociation(
    input: ReplaceNetworkAclAssociationRequest,
  ): Effect.Effect<
    ReplaceNetworkAclAssociationResult,
    CommonAwsError
  >;
  replaceNetworkAclEntry(
    input: ReplaceNetworkAclEntryRequest,
  ): Effect.Effect<
    {},
    CommonAwsError
  >;
  replaceRoute(
    input: ReplaceRouteRequest,
  ): Effect.Effect<
    {},
    CommonAwsError
  >;
  replaceRouteTableAssociation(
    input: ReplaceRouteTableAssociationRequest,
  ): Effect.Effect<
    ReplaceRouteTableAssociationResult,
    CommonAwsError
  >;
  replaceTransitGatewayRoute(
    input: ReplaceTransitGatewayRouteRequest,
  ): Effect.Effect<
    ReplaceTransitGatewayRouteResult,
    CommonAwsError
  >;
  replaceVpnTunnel(
    input: ReplaceVpnTunnelRequest,
  ): Effect.Effect<
    ReplaceVpnTunnelResult,
    CommonAwsError
  >;
  reportInstanceStatus(
    input: ReportInstanceStatusRequest,
  ): Effect.Effect<
    {},
    CommonAwsError
  >;
  requestSpotFleet(
    input: RequestSpotFleetRequest,
  ): Effect.Effect<
    RequestSpotFleetResponse,
    CommonAwsError
  >;
  requestSpotInstances(
    input: RequestSpotInstancesRequest,
  ): Effect.Effect<
    RequestSpotInstancesResult,
    CommonAwsError
  >;
  resetAddressAttribute(
    input: ResetAddressAttributeRequest,
  ): Effect.Effect<
    ResetAddressAttributeResult,
    CommonAwsError
  >;
  resetEbsDefaultKmsKeyId(
    input: ResetEbsDefaultKmsKeyIdRequest,
  ): Effect.Effect<
    ResetEbsDefaultKmsKeyIdResult,
    CommonAwsError
  >;
  resetFpgaImageAttribute(
    input: ResetFpgaImageAttributeRequest,
  ): Effect.Effect<
    ResetFpgaImageAttributeResult,
    CommonAwsError
  >;
  resetImageAttribute(
    input: ResetImageAttributeRequest,
  ): Effect.Effect<
    {},
    CommonAwsError
  >;
  resetInstanceAttribute(
    input: ResetInstanceAttributeRequest,
  ): Effect.Effect<
    {},
    CommonAwsError
  >;
  resetNetworkInterfaceAttribute(
    input: ResetNetworkInterfaceAttributeRequest,
  ): Effect.Effect<
    {},
    CommonAwsError
  >;
  resetSnapshotAttribute(
    input: ResetSnapshotAttributeRequest,
  ): Effect.Effect<
    {},
    CommonAwsError
  >;
  restoreAddressToClassic(
    input: RestoreAddressToClassicRequest,
  ): Effect.Effect<
    RestoreAddressToClassicResult,
    CommonAwsError
  >;
  restoreImageFromRecycleBin(
    input: RestoreImageFromRecycleBinRequest,
  ): Effect.Effect<
    RestoreImageFromRecycleBinResult,
    CommonAwsError
  >;
  restoreManagedPrefixListVersion(
    input: RestoreManagedPrefixListVersionRequest,
  ): Effect.Effect<
    RestoreManagedPrefixListVersionResult,
    CommonAwsError
  >;
  restoreSnapshotFromRecycleBin(
    input: RestoreSnapshotFromRecycleBinRequest,
  ): Effect.Effect<
    RestoreSnapshotFromRecycleBinResult,
    CommonAwsError
  >;
  restoreSnapshotTier(
    input: RestoreSnapshotTierRequest,
  ): Effect.Effect<
    RestoreSnapshotTierResult,
    CommonAwsError
  >;
  revokeClientVpnIngress(
    input: RevokeClientVpnIngressRequest,
  ): Effect.Effect<
    RevokeClientVpnIngressResult,
    CommonAwsError
  >;
  revokeSecurityGroupEgress(
    input: RevokeSecurityGroupEgressRequest,
  ): Effect.Effect<
    RevokeSecurityGroupEgressResult,
    CommonAwsError
  >;
  revokeSecurityGroupIngress(
    input: RevokeSecurityGroupIngressRequest,
  ): Effect.Effect<
    RevokeSecurityGroupIngressResult,
    CommonAwsError
  >;
  runInstances(
    input: RunInstancesRequest,
  ): Effect.Effect<
    Reservation,
    CommonAwsError
  >;
  runScheduledInstances(
    input: RunScheduledInstancesRequest,
  ): Effect.Effect<
    RunScheduledInstancesResult,
    CommonAwsError
  >;
  searchLocalGatewayRoutes(
    input: SearchLocalGatewayRoutesRequest,
  ): Effect.Effect<
    SearchLocalGatewayRoutesResult,
    CommonAwsError
  >;
  searchTransitGatewayMulticastGroups(
    input: SearchTransitGatewayMulticastGroupsRequest,
  ): Effect.Effect<
    SearchTransitGatewayMulticastGroupsResult,
    CommonAwsError
  >;
  searchTransitGatewayRoutes(
    input: SearchTransitGatewayRoutesRequest,
  ): Effect.Effect<
    SearchTransitGatewayRoutesResult,
    CommonAwsError
  >;
  sendDiagnosticInterrupt(
    input: SendDiagnosticInterruptRequest,
  ): Effect.Effect<
    {},
    CommonAwsError
  >;
  startDeclarativePoliciesReport(
    input: StartDeclarativePoliciesReportRequest,
  ): Effect.Effect<
    StartDeclarativePoliciesReportResult,
    CommonAwsError
  >;
  startInstances(
    input: StartInstancesRequest,
  ): Effect.Effect<
    StartInstancesResult,
    CommonAwsError
  >;
  startNetworkInsightsAccessScopeAnalysis(
    input: StartNetworkInsightsAccessScopeAnalysisRequest,
  ): Effect.Effect<
    StartNetworkInsightsAccessScopeAnalysisResult,
    CommonAwsError
  >;
  startNetworkInsightsAnalysis(
    input: StartNetworkInsightsAnalysisRequest,
  ): Effect.Effect<
    StartNetworkInsightsAnalysisResult,
    CommonAwsError
  >;
  startVpcEndpointServicePrivateDnsVerification(
    input: StartVpcEndpointServicePrivateDnsVerificationRequest,
  ): Effect.Effect<
    StartVpcEndpointServicePrivateDnsVerificationResult,
    CommonAwsError
  >;
  stopInstances(
    input: StopInstancesRequest,
  ): Effect.Effect<
    StopInstancesResult,
    CommonAwsError
  >;
  terminateClientVpnConnections(
    input: TerminateClientVpnConnectionsRequest,
  ): Effect.Effect<
    TerminateClientVpnConnectionsResult,
    CommonAwsError
  >;
  terminateInstances(
    input: TerminateInstancesRequest,
  ): Effect.Effect<
    TerminateInstancesResult,
    CommonAwsError
  >;
  unassignIpv6Addresses(
    input: UnassignIpv6AddressesRequest,
  ): Effect.Effect<
    UnassignIpv6AddressesResult,
    CommonAwsError
  >;
  unassignPrivateIpAddresses(
    input: UnassignPrivateIpAddressesRequest,
  ): Effect.Effect<
    {},
    CommonAwsError
  >;
  unassignPrivateNatGatewayAddress(
    input: UnassignPrivateNatGatewayAddressRequest,
  ): Effect.Effect<
    UnassignPrivateNatGatewayAddressResult,
    CommonAwsError
  >;
  unlockSnapshot(
    input: UnlockSnapshotRequest,
  ): Effect.Effect<
    UnlockSnapshotResult,
    CommonAwsError
  >;
  unmonitorInstances(
    input: UnmonitorInstancesRequest,
  ): Effect.Effect<
    UnmonitorInstancesResult,
    CommonAwsError
  >;
  updateSecurityGroupRuleDescriptionsEgress(
    input: UpdateSecurityGroupRuleDescriptionsEgressRequest,
  ): Effect.Effect<
    UpdateSecurityGroupRuleDescriptionsEgressResult,
    CommonAwsError
  >;
  updateSecurityGroupRuleDescriptionsIngress(
    input: UpdateSecurityGroupRuleDescriptionsIngressRequest,
  ): Effect.Effect<
    UpdateSecurityGroupRuleDescriptionsIngressResult,
    CommonAwsError
  >;
  withdrawByoipCidr(
    input: WithdrawByoipCidrRequest,
  ): Effect.Effect<
    WithdrawByoipCidrResult,
    CommonAwsError
  >;
}

export type Ec2 = AmazonEC2;

export interface AcceleratorCount {
  Min?: number;
  Max?: number;
}
export interface AcceleratorCountRequest {
  Min?: number;
  Max?: number;
}
export type AcceleratorManufacturer = "AMAZON_WEB_SERVICES" | "AMD" | "NVIDIA" | "XILINX" | "HABANA";
export type AcceleratorManufacturerSet = Array<AcceleratorManufacturer>;
export type AcceleratorName = "A100" | "INFERENTIA" | "K520" | "K80" | "M60" | "RADEON_PRO_V520" | "T4" | "VU9P" | "V100" | "A10G" | "H100" | "T4G";
export type AcceleratorNameSet = Array<AcceleratorName>;
export interface AcceleratorTotalMemoryMiB {
  Min?: number;
  Max?: number;
}
export interface AcceleratorTotalMemoryMiBRequest {
  Min?: number;
  Max?: number;
}
export type AcceleratorType = "GPU" | "FPGA" | "INFERENCE";
export type AcceleratorTypeSet = Array<AcceleratorType>;
export interface AcceptAddressTransferRequest {
  Address: string;
  TagSpecifications?: Array<TagSpecification>;
  DryRun?: boolean;
}
export interface AcceptAddressTransferResult {
  AddressTransfer?: AddressTransfer;
}
export interface AcceptCapacityReservationBillingOwnershipRequest {
  DryRun?: boolean;
  CapacityReservationId: string;
}
export interface AcceptCapacityReservationBillingOwnershipResult {
  Return?: boolean;
}
export interface AcceptReservedInstancesExchangeQuoteRequest {
  DryRun?: boolean;
  ReservedInstanceIds: Array<string>;
  TargetConfigurations?: Array<TargetConfigurationRequest>;
}
export interface AcceptReservedInstancesExchangeQuoteResult {
  ExchangeId?: string;
}
export interface AcceptTransitGatewayMulticastDomainAssociationsRequest {
  TransitGatewayMulticastDomainId?: string;
  TransitGatewayAttachmentId?: string;
  SubnetIds?: Array<string>;
  DryRun?: boolean;
}
export interface AcceptTransitGatewayMulticastDomainAssociationsResult {
  Associations?: TransitGatewayMulticastDomainAssociations;
}
export interface AcceptTransitGatewayPeeringAttachmentRequest {
  TransitGatewayAttachmentId: string;
  DryRun?: boolean;
}
export interface AcceptTransitGatewayPeeringAttachmentResult {
  TransitGatewayPeeringAttachment?: TransitGatewayPeeringAttachment;
}
export interface AcceptTransitGatewayVpcAttachmentRequest {
  TransitGatewayAttachmentId: string;
  DryRun?: boolean;
}
export interface AcceptTransitGatewayVpcAttachmentResult {
  TransitGatewayVpcAttachment?: TransitGatewayVpcAttachment;
}
export interface AcceptVpcEndpointConnectionsRequest {
  DryRun?: boolean;
  ServiceId: string;
  VpcEndpointIds: Array<string>;
}
export interface AcceptVpcEndpointConnectionsResult {
  Unsuccessful?: Array<UnsuccessfulItem>;
}
export interface AcceptVpcPeeringConnectionRequest {
  DryRun?: boolean;
  VpcPeeringConnectionId: string;
}
export interface AcceptVpcPeeringConnectionResult {
  VpcPeeringConnection?: VpcPeeringConnection;
}
export interface AccessScopeAnalysisFinding {
  NetworkInsightsAccessScopeAnalysisId?: string;
  NetworkInsightsAccessScopeId?: string;
  FindingId?: string;
  FindingComponents?: Array<PathComponent>;
}
export type AccessScopeAnalysisFindingList = Array<AccessScopeAnalysisFinding>;
export interface AccessScopePath {
  Source?: PathStatement;
  Destination?: PathStatement;
  ThroughResources?: Array<ThroughResourcesStatement>;
}
export type AccessScopePathList = Array<AccessScopePath>;
export type AccessScopePathListRequest = Array<AccessScopePathRequest>;
export interface AccessScopePathRequest {
  Source?: PathStatementRequest;
  Destination?: PathStatementRequest;
  ThroughResources?: Array<ThroughResourcesStatementRequest>;
}
export interface AccountAttribute {
  AttributeName?: string;
  AttributeValues?: Array<AccountAttributeValue>;
}
export type AccountAttributeList = Array<AccountAttribute>;
export type AccountAttributeName = "supported_platforms" | "default_vpc";
export type AccountAttributeNameStringList = Array<AccountAttributeName>;
export interface AccountAttributeValue {
  AttributeValue?: string;
}
export type AccountAttributeValueList = Array<AccountAttributeValue>;
export type AccountID = string;

export interface ActiveInstance {
  InstanceId?: string;
  InstanceType?: string;
  SpotInstanceRequestId?: string;
  InstanceHealth?: InstanceHealthStatus;
}
export type ActiveInstanceSet = Array<ActiveInstance>;
export interface ActiveVpnTunnelStatus {
  Phase1EncryptionAlgorithm?: string;
  Phase2EncryptionAlgorithm?: string;
  Phase1IntegrityAlgorithm?: string;
  Phase2IntegrityAlgorithm?: string;
  Phase1DHGroup?: number;
  Phase2DHGroup?: number;
  IkeVersion?: string;
  ProvisioningStatus?: VpnTunnelProvisioningStatus;
  ProvisioningStatusReason?: string;
}
export type ActivityStatus = "ERROR" | "PENDING_FULFILLMENT" | "PENDING_TERMINATION" | "FULFILLED";
export interface AddedPrincipal {
  PrincipalType?: PrincipalType;
  Principal?: string;
  ServicePermissionId?: string;
  ServiceId?: string;
}
export type AddedPrincipalSet = Array<AddedPrincipal>;
export interface AddIpamOperatingRegion {
  RegionName?: string;
}
export type AddIpamOperatingRegionSet = Array<AddIpamOperatingRegion>;
export interface AddIpamOrganizationalUnitExclusion {
  OrganizationsEntityPath?: string;
}
export type AddIpamOrganizationalUnitExclusionSet = Array<AddIpamOrganizationalUnitExclusion>;
export interface AdditionalDetail {
  AdditionalDetailType?: string;
  Component?: AnalysisComponent;
  VpcEndpointService?: AnalysisComponent;
  RuleOptions?: Array<RuleOption>;
  RuleGroupTypePairs?: Array<RuleGroupTypePair>;
  RuleGroupRuleOptionsPairs?: Array<RuleGroupRuleOptionsPair>;
  ServiceName?: string;
  LoadBalancers?: Array<AnalysisComponent>;
}
export type AdditionalDetailList = Array<AdditionalDetail>;
export type AddPrefixListEntries = Array<AddPrefixListEntry>;
export interface AddPrefixListEntry {
  Cidr: string;
  Description?: string;
}
export interface Address {
  AllocationId?: string;
  AssociationId?: string;
  Domain?: DomainType;
  NetworkInterfaceId?: string;
  NetworkInterfaceOwnerId?: string;
  PrivateIpAddress?: string;
  Tags?: Array<Tag>;
  PublicIpv4Pool?: string;
  NetworkBorderGroup?: string;
  CustomerOwnedIp?: string;
  CustomerOwnedIpv4Pool?: string;
  CarrierIp?: string;
  SubnetId?: string;
  ServiceManaged?: ServiceManaged;
  InstanceId?: string;
  PublicIp?: string;
}
export interface AddressAttribute {
  PublicIp?: string;
  AllocationId?: string;
  PtrRecord?: string;
  PtrRecordUpdate?: PtrUpdateStatus;
}
export type AddressAttributeName = "domain_name";
export type AddressFamily = "ipv4" | "ipv6";
export type AddressList = Array<Address>;
export type AddressMaxResults = number;

export type AddressSet = Array<AddressAttribute>;
export interface AddressTransfer {
  PublicIp?: string;
  AllocationId?: string;
  TransferAccountId?: string;
  TransferOfferExpirationTimestamp?: Date | string;
  TransferOfferAcceptedTimestamp?: Date | string;
  AddressTransferStatus?: AddressTransferStatus;
}
export type AddressTransferList = Array<AddressTransfer>;
export type AddressTransferStatus = "pending" | "disabled" | "accepted";
export interface AdvertiseByoipCidrRequest {
  Cidr: string;
  Asn?: string;
  DryRun?: boolean;
  NetworkBorderGroup?: string;
}
export interface AdvertiseByoipCidrResult {
  ByoipCidr?: ByoipCidr;
}
export type Affinity = "default" | "host";
export interface AllocateAddressRequest {
  Domain?: DomainType;
  Address?: string;
  PublicIpv4Pool?: string;
  NetworkBorderGroup?: string;
  CustomerOwnedIpv4Pool?: string;
  TagSpecifications?: Array<TagSpecification>;
  IpamPoolId?: string;
  DryRun?: boolean;
}
export interface AllocateAddressResult {
  AllocationId?: string;
  PublicIpv4Pool?: string;
  NetworkBorderGroup?: string;
  Domain?: DomainType;
  CustomerOwnedIp?: string;
  CustomerOwnedIpv4Pool?: string;
  CarrierIp?: string;
  PublicIp?: string;
}
export interface AllocateHostsRequest {
  InstanceFamily?: string;
  TagSpecifications?: Array<TagSpecification>;
  HostRecovery?: HostRecovery;
  OutpostArn?: string;
  HostMaintenance?: HostMaintenance;
  AssetIds?: Array<string>;
  AvailabilityZoneId?: string;
  AutoPlacement?: AutoPlacement;
  ClientToken?: string;
  InstanceType?: string;
  Quantity?: number;
  AvailabilityZone?: string;
}
export interface AllocateHostsResult {
  HostIds?: Array<string>;
}
export interface AllocateIpamPoolCidrRequest {
  DryRun?: boolean;
  IpamPoolId: string;
  Cidr?: string;
  NetmaskLength?: number;
  ClientToken?: string;
  Description?: string;
  PreviewNextCidr?: boolean;
  AllowedCidrs?: Array<string>;
  DisallowedCidrs?: Array<string>;
}
export interface AllocateIpamPoolCidrResult {
  IpamPoolAllocation?: IpamPoolAllocation;
}
export type AllocationId = string;

export type AllocationIdList = Array<string>;
export type AllocationIds = Array<string>;
export type AllocationState = "available" | "under_assessment" | "permanent_failure" | "released" | "released_permanent_failure" | "pending";
export type AllocationStrategy = "LOWEST_PRICE" | "DIVERSIFIED" | "CAPACITY_OPTIMIZED" | "CAPACITY_OPTIMIZED_PRIORITIZED" | "PRICE_CAPACITY_OPTIMIZED";
export type AllocationType = "used" | "future";
export type AllowedImagesSettingsDisabledState = "disabled";
export type AllowedImagesSettingsEnabledState = "enabled" | "audit_mode";
export type AllowedInstanceType = string;

export type AllowedInstanceTypeSet = Array<string>;
export interface AllowedPrincipal {
  PrincipalType?: PrincipalType;
  Principal?: string;
  ServicePermissionId?: string;
  Tags?: Array<Tag>;
  ServiceId?: string;
}
export type AllowedPrincipalSet = Array<AllowedPrincipal>;
export type AllowsMultipleInstanceTypes = "on" | "off";
export interface AlternatePathHint {
  ComponentId?: string;
  ComponentArn?: string;
}
export type AlternatePathHintList = Array<AlternatePathHint>;
export type AmdSevSnpSpecification = "enabled" | "disabled";
export interface AnalysisAclRule {
  Cidr?: string;
  Egress?: boolean;
  PortRange?: PortRange;
  Protocol?: string;
  RuleAction?: string;
  RuleNumber?: number;
}
export interface AnalysisComponent {
  Id?: string;
  Arn?: string;
  Name?: string;
}
export type AnalysisComponentList = Array<AnalysisComponent>;
export interface AnalysisLoadBalancerListener {
  LoadBalancerPort?: number;
  InstancePort?: number;
}
export interface AnalysisLoadBalancerTarget {
  Address?: string;
  AvailabilityZone?: string;
  AvailabilityZoneId?: string;
  Instance?: AnalysisComponent;
  Port?: number;
}
export interface AnalysisPacketHeader {
  DestinationAddresses?: Array<string>;
  DestinationPortRanges?: Array<PortRange>;
  Protocol?: string;
  SourceAddresses?: Array<string>;
  SourcePortRanges?: Array<PortRange>;
}
export interface AnalysisRouteTableRoute {
  DestinationCidr?: string;
  DestinationPrefixListId?: string;
  EgressOnlyInternetGatewayId?: string;
  GatewayId?: string;
  InstanceId?: string;
  NatGatewayId?: string;
  NetworkInterfaceId?: string;
  Origin?: string;
  TransitGatewayId?: string;
  VpcPeeringConnectionId?: string;
  State?: string;
  CarrierGatewayId?: string;
  CoreNetworkArn?: string;
  LocalGatewayId?: string;
}
export interface AnalysisSecurityGroupRule {
  Cidr?: string;
  Direction?: string;
  SecurityGroupId?: string;
  PortRange?: PortRange;
  PrefixListId?: string;
  Protocol?: string;
}
export type AnalysisStatus = "running" | "succeeded" | "failed";
export type ApplianceModeSupportValue = "enable" | "disable";
export interface ApplySecurityGroupsToClientVpnTargetNetworkRequest {
  ClientVpnEndpointId: string;
  VpcId: string;
  SecurityGroupIds: Array<string>;
  DryRun?: boolean;
}
export interface ApplySecurityGroupsToClientVpnTargetNetworkResult {
  SecurityGroupIds?: Array<string>;
}
export type ArchitectureType = "i386" | "x86_64" | "arm64" | "x86_64_mac" | "arm64_mac";
export type ArchitectureTypeList = Array<ArchitectureType>;
export type ArchitectureTypeSet = Array<ArchitectureType>;
export type ArchitectureValues = "i386" | "x86_64" | "arm64" | "x86_64_mac" | "arm64_mac";
export type ArnList = Array<string>;
export interface AsnAssociation {
  Asn?: string;
  Cidr?: string;
  StatusMessage?: string;
  State?: AsnAssociationState;
}
export type AsnAssociationSet = Array<AsnAssociation>;
export type AsnAssociationState = "disassociated" | "failed_disassociation" | "failed_association" | "pending_disassociation" | "pending_association" | "associated";
export interface AsnAuthorizationContext {
  Message: string;
  Signature: string;
}
export type AsnState = "deprovisioned" | "failed_deprovision" | "failed_provision" | "pending_deprovision" | "pending_provision" | "provisioned";
export type AsPath = Array<string>;
export type AssetId = string;

export type AssetIdList = Array<string>;
export interface AssignedPrivateIpAddress {
  PrivateIpAddress?: string;
}
export type AssignedPrivateIpAddressList = Array<AssignedPrivateIpAddress>;
export interface AssignIpv6AddressesRequest {
  Ipv6PrefixCount?: number;
  Ipv6Prefixes?: Array<string>;
  NetworkInterfaceId: string;
  Ipv6Addresses?: Array<string>;
  Ipv6AddressCount?: number;
}
export interface AssignIpv6AddressesResult {
  AssignedIpv6Addresses?: Array<string>;
  AssignedIpv6Prefixes?: Array<string>;
  NetworkInterfaceId?: string;
}
export interface AssignPrivateIpAddressesRequest {
  Ipv4Prefixes?: Array<string>;
  Ipv4PrefixCount?: number;
  NetworkInterfaceId: string;
  PrivateIpAddresses?: Array<string>;
  SecondaryPrivateIpAddressCount?: number;
  AllowReassignment?: boolean;
}
export interface AssignPrivateIpAddressesResult {
  NetworkInterfaceId?: string;
  AssignedPrivateIpAddresses?: Array<AssignedPrivateIpAddress>;
  AssignedIpv4Prefixes?: Array<Ipv4PrefixSpecification>;
}
export interface AssignPrivateNatGatewayAddressRequest {
  NatGatewayId: string;
  PrivateIpAddresses?: Array<string>;
  PrivateIpAddressCount?: number;
  DryRun?: boolean;
}
export interface AssignPrivateNatGatewayAddressResult {
  NatGatewayId?: string;
  NatGatewayAddresses?: Array<NatGatewayAddress>;
}
export interface AssociateAddressRequest {
  AllocationId?: string;
  InstanceId?: string;
  PublicIp?: string;
  DryRun?: boolean;
  NetworkInterfaceId?: string;
  PrivateIpAddress?: string;
  AllowReassociation?: boolean;
}
export interface AssociateAddressResult {
  AssociationId?: string;
}
export interface AssociateCapacityReservationBillingOwnerRequest {
  DryRun?: boolean;
  CapacityReservationId: string;
  UnusedReservationBillingOwnerId: string;
}
export interface AssociateCapacityReservationBillingOwnerResult {
  Return?: boolean;
}
export interface AssociateClientVpnTargetNetworkRequest {
  ClientVpnEndpointId: string;
  SubnetId: string;
  ClientToken?: string;
  DryRun?: boolean;
}
export interface AssociateClientVpnTargetNetworkResult {
  AssociationId?: string;
  Status?: AssociationStatus;
}
export interface AssociateDhcpOptionsRequest {
  DhcpOptionsId: string;
  VpcId: string;
  DryRun?: boolean;
}
export type AssociatedNetworkType = "vpc";
export interface AssociatedRole {
  AssociatedRoleArn?: string;
  CertificateS3BucketName?: string;
  CertificateS3ObjectKey?: string;
  EncryptionKmsKeyId?: string;
}
export type AssociatedRolesList = Array<AssociatedRole>;
export type AssociatedSubnetList = Array<string>;
export interface AssociatedTargetNetwork {
  NetworkId?: string;
  NetworkType?: AssociatedNetworkType;
}
export type AssociatedTargetNetworkSet = Array<AssociatedTargetNetwork>;
export interface AssociateEnclaveCertificateIamRoleRequest {
  CertificateArn: string;
  RoleArn: string;
  DryRun?: boolean;
}
export interface AssociateEnclaveCertificateIamRoleResult {
  CertificateS3BucketName?: string;
  CertificateS3ObjectKey?: string;
  EncryptionKmsKeyId?: string;
}
export interface AssociateIamInstanceProfileRequest {
  IamInstanceProfile: IamInstanceProfileSpecification;
  InstanceId: string;
}
export interface AssociateIamInstanceProfileResult {
  IamInstanceProfileAssociation?: IamInstanceProfileAssociation;
}
export interface AssociateInstanceEventWindowRequest {
  DryRun?: boolean;
  InstanceEventWindowId: string;
  AssociationTarget: InstanceEventWindowAssociationRequest;
}
export interface AssociateInstanceEventWindowResult {
  InstanceEventWindow?: InstanceEventWindow;
}
export interface AssociateIpamByoasnRequest {
  DryRun?: boolean;
  Asn: string;
  Cidr: string;
}
export interface AssociateIpamByoasnResult {
  AsnAssociation?: AsnAssociation;
}
export interface AssociateIpamResourceDiscoveryRequest {
  DryRun?: boolean;
  IpamId: string;
  IpamResourceDiscoveryId: string;
  TagSpecifications?: Array<TagSpecification>;
  ClientToken?: string;
}
export interface AssociateIpamResourceDiscoveryResult {
  IpamResourceDiscoveryAssociation?: IpamResourceDiscoveryAssociation;
}
export interface AssociateNatGatewayAddressRequest {
  NatGatewayId: string;
  AllocationIds: Array<string>;
  PrivateIpAddresses?: Array<string>;
  DryRun?: boolean;
}
export interface AssociateNatGatewayAddressResult {
  NatGatewayId?: string;
  NatGatewayAddresses?: Array<NatGatewayAddress>;
}
export interface AssociateRouteServerRequest {
  RouteServerId: string;
  VpcId: string;
  DryRun?: boolean;
}
export interface AssociateRouteServerResult {
  RouteServerAssociation?: RouteServerAssociation;
}
export interface AssociateRouteTableRequest {
  GatewayId?: string;
  DryRun?: boolean;
  SubnetId?: string;
  RouteTableId: string;
}
export interface AssociateRouteTableResult {
  AssociationId?: string;
  AssociationState?: RouteTableAssociationState;
}
export interface AssociateSecurityGroupVpcRequest {
  GroupId: string;
  VpcId: string;
  DryRun?: boolean;
}
export interface AssociateSecurityGroupVpcResult {
  State?: SecurityGroupVpcAssociationState;
}
export interface AssociateSubnetCidrBlockRequest {
  Ipv6IpamPoolId?: string;
  Ipv6NetmaskLength?: number;
  SubnetId: string;
  Ipv6CidrBlock?: string;
}
export interface AssociateSubnetCidrBlockResult {
  Ipv6CidrBlockAssociation?: SubnetIpv6CidrBlockAssociation;
  SubnetId?: string;
}
export interface AssociateTransitGatewayMulticastDomainRequest {
  TransitGatewayMulticastDomainId: string;
  TransitGatewayAttachmentId: string;
  SubnetIds: Array<string>;
  DryRun?: boolean;
}
export interface AssociateTransitGatewayMulticastDomainResult {
  Associations?: TransitGatewayMulticastDomainAssociations;
}
export interface AssociateTransitGatewayPolicyTableRequest {
  TransitGatewayPolicyTableId: string;
  TransitGatewayAttachmentId: string;
  DryRun?: boolean;
}
export interface AssociateTransitGatewayPolicyTableResult {
  Association?: TransitGatewayPolicyTableAssociation;
}
export interface AssociateTransitGatewayRouteTableRequest {
  TransitGatewayRouteTableId: string;
  TransitGatewayAttachmentId: string;
  DryRun?: boolean;
}
export interface AssociateTransitGatewayRouteTableResult {
  Association?: TransitGatewayAssociation;
}
export interface AssociateTrunkInterfaceRequest {
  BranchInterfaceId: string;
  TrunkInterfaceId: string;
  VlanId?: number;
  GreKey?: number;
  ClientToken?: string;
  DryRun?: boolean;
}
export interface AssociateTrunkInterfaceResult {
  InterfaceAssociation?: TrunkInterfaceAssociation;
  ClientToken?: string;
}
export interface AssociateVpcCidrBlockRequest {
  CidrBlock?: string;
  Ipv6CidrBlockNetworkBorderGroup?: string;
  Ipv6Pool?: string;
  Ipv6CidrBlock?: string;
  Ipv4IpamPoolId?: string;
  Ipv4NetmaskLength?: number;
  Ipv6IpamPoolId?: string;
  Ipv6NetmaskLength?: number;
  VpcId: string;
  AmazonProvidedIpv6CidrBlock?: boolean;
}
export interface AssociateVpcCidrBlockResult {
  Ipv6CidrBlockAssociation?: VpcIpv6CidrBlockAssociation;
  CidrBlockAssociation?: VpcCidrBlockAssociation;
  VpcId?: string;
}
export type AssociationIdList = Array<string>;
export interface AssociationStatus {
  Code?: AssociationStatusCode;
  Message?: string;
}
export type AssociationStatusCode = "associating" | "associated" | "association_failed" | "disassociating" | "disassociated";
export interface AthenaIntegration {
  IntegrationResultS3DestinationArn: string;
  PartitionLoadFrequency: PartitionLoadFrequency;
  PartitionStartDate?: Date | string;
  PartitionEndDate?: Date | string;
}
export type AthenaIntegrationsSet = Array<AthenaIntegration>;
export interface AttachClassicLinkVpcRequest {
  DryRun?: boolean;
  InstanceId: string;
  VpcId: string;
  Groups: Array<string>;
}
export interface AttachClassicLinkVpcResult {
  Return?: boolean;
}
export interface AttachInternetGatewayRequest {
  DryRun?: boolean;
  InternetGatewayId: string;
  VpcId: string;
}
export interface AttachmentEnaSrdSpecification {
  EnaSrdEnabled?: boolean;
  EnaSrdUdpSpecification?: AttachmentEnaSrdUdpSpecification;
}
export interface AttachmentEnaSrdUdpSpecification {
  EnaSrdUdpEnabled?: boolean;
}
export type AttachmentStatus = "attaching" | "attached" | "detaching" | "detached";
export interface AttachNetworkInterfaceRequest {
  NetworkCardIndex?: number;
  EnaSrdSpecification?: EnaSrdSpecification;
  EnaQueueCount?: number;
  DryRun?: boolean;
  NetworkInterfaceId: string;
  InstanceId: string;
  DeviceIndex: number;
}
export interface AttachNetworkInterfaceResult {
  AttachmentId?: string;
  NetworkCardIndex?: number;
}
export interface AttachVerifiedAccessTrustProviderRequest {
  VerifiedAccessInstanceId: string;
  VerifiedAccessTrustProviderId: string;
  ClientToken?: string;
  DryRun?: boolean;
}
export interface AttachVerifiedAccessTrustProviderResult {
  VerifiedAccessTrustProvider?: VerifiedAccessTrustProvider;
  VerifiedAccessInstance?: VerifiedAccessInstance;
}
export interface AttachVolumeRequest {
  Device: string;
  InstanceId: string;
  VolumeId: string;
  DryRun?: boolean;
}
export interface AttachVpnGatewayRequest {
  VpcId: string;
  VpnGatewayId: string;
  DryRun?: boolean;
}
export interface AttachVpnGatewayResult {
  VpcAttachment?: VpcAttachment;
}
export interface AttributeBooleanValue {
  Value?: boolean;
}
export interface AttributeSummary {
  AttributeName?: string;
  MostFrequentValue?: string;
  NumberOfMatchedAccounts?: number;
  NumberOfUnmatchedAccounts?: number;
  RegionalSummaries?: Array<RegionalSummary>;
}
export type AttributeSummaryList = Array<AttributeSummary>;
export interface AttributeValue {
  Value?: string;
}
export interface AuthorizationRule {
  ClientVpnEndpointId?: string;
  Description?: string;
  GroupId?: string;
  AccessAll?: boolean;
  DestinationCidr?: string;
  Status?: ClientVpnAuthorizationRuleStatus;
}
export type AuthorizationRuleSet = Array<AuthorizationRule>;
export interface AuthorizeClientVpnIngressRequest {
  ClientVpnEndpointId: string;
  TargetNetworkCidr: string;
  AccessGroupId?: string;
  AuthorizeAllGroups?: boolean;
  Description?: string;
  ClientToken?: string;
  DryRun?: boolean;
}
export interface AuthorizeClientVpnIngressResult {
  Status?: ClientVpnAuthorizationRuleStatus;
}
export interface AuthorizeSecurityGroupEgressRequest {
  TagSpecifications?: Array<TagSpecification>;
  DryRun?: boolean;
  GroupId: string;
  SourceSecurityGroupName?: string;
  SourceSecurityGroupOwnerId?: string;
  IpProtocol?: string;
  FromPort?: number;
  ToPort?: number;
  CidrIp?: string;
  IpPermissions?: Array<IpPermission>;
}
export interface AuthorizeSecurityGroupEgressResult {
  Return?: boolean;
  SecurityGroupRules?: Array<SecurityGroupRule>;
}
export interface AuthorizeSecurityGroupIngressRequest {
  CidrIp?: string;
  FromPort?: number;
  GroupId?: string;
  GroupName?: string;
  IpPermissions?: Array<IpPermission>;
  IpProtocol?: string;
  SourceSecurityGroupName?: string;
  SourceSecurityGroupOwnerId?: string;
  ToPort?: number;
  TagSpecifications?: Array<TagSpecification>;
  DryRun?: boolean;
}
export interface AuthorizeSecurityGroupIngressResult {
  Return?: boolean;
  SecurityGroupRules?: Array<SecurityGroupRule>;
}
export type AutoAcceptSharedAssociationsValue = "enable" | "disable";
export type AutoAcceptSharedAttachmentsValue = "enable" | "disable";
export type AutoPlacement = "on" | "off";
export type AutoRecoveryFlag = boolean;

export interface AvailabilityZone {
  OptInStatus?: AvailabilityZoneOptInStatus;
  Messages?: Array<AvailabilityZoneMessage>;
  RegionName?: string;
  ZoneName?: string;
  ZoneId?: string;
  GroupName?: string;
  NetworkBorderGroup?: string;
  ZoneType?: string;
  ParentZoneName?: string;
  ParentZoneId?: string;
  GroupLongName?: string;
  State?: AvailabilityZoneState;
}
export type AvailabilityZoneId = string;

export type AvailabilityZoneList = Array<AvailabilityZone>;
export interface AvailabilityZoneMessage {
  Message?: string;
}
export type AvailabilityZoneMessageList = Array<AvailabilityZoneMessage>;
export type AvailabilityZoneName = string;

export type AvailabilityZoneOptInStatus = "opt_in_not_required" | "opted_in" | "not_opted_in";
export type AvailabilityZoneState = "available" | "information" | "impaired" | "unavailable" | "constrained";
export type AvailabilityZoneStringList = Array<string>;
export interface AvailableCapacity {
  AvailableInstanceCapacity?: Array<InstanceCapacity>;
  AvailableVCpus?: number;
}
export type AvailableInstanceCapacityList = Array<InstanceCapacity>;
export type BandwidthWeightingType = "DEFAULT" | "VPC_1" | "EBS_1";
export type BandwidthWeightingTypeList = Array<BandwidthWeightingType>;
export type BareMetal = "INCLUDED" | "REQUIRED" | "EXCLUDED";
export type BareMetalFlag = boolean;

export type BaselineBandwidthInGbps = number;

export type BaselineBandwidthInMbps = number;

export interface BaselineEbsBandwidthMbps {
  Min?: number;
  Max?: number;
}
export interface BaselineEbsBandwidthMbpsRequest {
  Min?: number;
  Max?: number;
}
export type BaselineIops = number;

export interface BaselinePerformanceFactors {
  Cpu?: CpuPerformanceFactor;
}
export interface BaselinePerformanceFactorsRequest {
  Cpu?: CpuPerformanceFactorRequest;
}
export type BaselineThroughputInMBps = number;

export type BatchState = "SUBMITTED" | "ACTIVE" | "CANCELLED" | "FAILED" | "CANCELLED_RUNNING" | "CANCELLED_TERMINATING_INSTANCES" | "MODIFYING";
export type BgpStatus = "up" | "down";
export type BillingProductList = Array<string>;
export type Blob = Uint8Array | string;

export interface BlobAttributeValue {
  Value?: Uint8Array | string;
}
export interface BlockDeviceMapping {
  Ebs?: EbsBlockDevice;
  NoDevice?: string;
  DeviceName?: string;
  VirtualName?: string;
}
export type BlockDeviceMappingList = Array<BlockDeviceMapping>;
export type BlockDeviceMappingRequestList = Array<BlockDeviceMapping>;
export interface BlockDeviceMappingResponse {
  DeviceName?: string;
  VirtualName?: string;
  Ebs?: EbsBlockDeviceResponse;
  NoDevice?: string;
}
export type BlockDeviceMappingResponseList = Array<BlockDeviceMappingResponse>;
export type BlockPublicAccessMode = "off" | "block_bidirectional" | "block_ingress";
export interface BlockPublicAccessStates {
  InternetGatewayBlockMode?: BlockPublicAccessMode;
}
export type BootModeType = "legacy_bios" | "uefi";
export type BootModeTypeList = Array<BootModeType>;
export type BootModeValues = "legacy_bios" | "uefi" | "uefi_preferred";
export type BoxedDouble = number;

export type BoxedInteger = number;

export type BoxedLong = number;

export type BundleId = string;

export type BundleIdStringList = Array<string>;
export interface BundleInstanceRequest {
  InstanceId: string;
  Storage: Storage;
  DryRun?: boolean;
}
export interface BundleInstanceResult {
  BundleTask?: BundleTask;
}
export interface BundleTask {
  InstanceId?: string;
  BundleId?: string;
  State?: BundleTaskState;
  StartTime?: Date | string;
  UpdateTime?: Date | string;
  Storage?: Storage;
  Progress?: string;
  BundleTaskError?: BundleTaskError;
}
export interface BundleTaskError {
  Code?: string;
  Message?: string;
}
export type BundleTaskList = Array<BundleTask>;
export type BundleTaskState = "pending" | "waiting_for_shutdown" | "bundling" | "storing" | "cancelling" | "complete" | "failed";
export type BurstablePerformance = "INCLUDED" | "REQUIRED" | "EXCLUDED";
export type BurstablePerformanceFlag = boolean;

export interface Byoasn {
  Asn?: string;
  IpamId?: string;
  StatusMessage?: string;
  State?: AsnState;
}
export type ByoasnSet = Array<Byoasn>;
export interface ByoipCidr {
  Cidr?: string;
  Description?: string;
  AsnAssociations?: Array<AsnAssociation>;
  StatusMessage?: string;
  State?: ByoipCidrState;
  NetworkBorderGroup?: string;
}
export type ByoipCidrSet = Array<ByoipCidr>;
export type ByoipCidrState = "advertised" | "deprovisioned" | "failed_deprovision" | "failed_provision" | "pending_deprovision" | "pending_provision" | "provisioned" | "provisioned_not_publicly_advertisable";
export type CallerRole = "odcr_owner" | "unused_reservation_billing_owner";
export type CancelBatchErrorCode = "FLEET_REQUEST_ID_DOES_NOT_EXIST" | "FLEET_REQUEST_ID_MALFORMED" | "FLEET_REQUEST_NOT_IN_CANCELLABLE_STATE" | "UNEXPECTED_ERROR";
export interface CancelBundleTaskRequest {
  BundleId: string;
  DryRun?: boolean;
}
export interface CancelBundleTaskResult {
  BundleTask?: BundleTask;
}
export interface CancelCapacityReservationFleetError {
  Code?: string;
  Message?: string;
}
export type CancelCapacityReservationFleetErrorCode = string;

export type CancelCapacityReservationFleetErrorMessage = string;

export interface CancelCapacityReservationFleetsRequest {
  DryRun?: boolean;
  CapacityReservationFleetIds: Array<string>;
}
export interface CancelCapacityReservationFleetsResult {
  SuccessfulFleetCancellations?: Array<CapacityReservationFleetCancellationState>;
  FailedFleetCancellations?: Array<FailedCapacityReservationFleetCancellationResult>;
}
export interface CancelCapacityReservationRequest {
  CapacityReservationId: string;
  DryRun?: boolean;
}
export interface CancelCapacityReservationResult {
  Return?: boolean;
}
export interface CancelConversionRequest {
  DryRun?: boolean;
  ConversionTaskId: string;
  ReasonMessage?: string;
}
export interface CancelDeclarativePoliciesReportRequest {
  DryRun?: boolean;
  ReportId: string;
}
export interface CancelDeclarativePoliciesReportResult {
  Return?: boolean;
}
export interface CancelExportTaskRequest {
  ExportTaskId: string;
}
export interface CancelImageLaunchPermissionRequest {
  ImageId: string;
  DryRun?: boolean;
}
export interface CancelImageLaunchPermissionResult {
  Return?: boolean;
}
export interface CancelImportTaskRequest {
  CancelReason?: string;
  DryRun?: boolean;
  ImportTaskId?: string;
}
export interface CancelImportTaskResult {
  ImportTaskId?: string;
  PreviousState?: string;
  State?: string;
}
export interface CancelledSpotInstanceRequest {
  SpotInstanceRequestId?: string;
  State?: CancelSpotInstanceRequestState;
}
export type CancelledSpotInstanceRequestList = Array<CancelledSpotInstanceRequest>;
export interface CancelReservedInstancesListingRequest {
  ReservedInstancesListingId: string;
}
export interface CancelReservedInstancesListingResult {
  ReservedInstancesListings?: Array<ReservedInstancesListing>;
}
export interface CancelSpotFleetRequestsError {
  Code?: CancelBatchErrorCode;
  Message?: string;
}
export interface CancelSpotFleetRequestsErrorItem {
  Error?: CancelSpotFleetRequestsError;
  SpotFleetRequestId?: string;
}
export type CancelSpotFleetRequestsErrorSet = Array<CancelSpotFleetRequestsErrorItem>;
export interface CancelSpotFleetRequestsRequest {
  DryRun?: boolean;
  SpotFleetRequestIds: Array<string>;
  TerminateInstances: boolean;
}
export interface CancelSpotFleetRequestsResponse {
  SuccessfulFleetRequests?: Array<CancelSpotFleetRequestsSuccessItem>;
  UnsuccessfulFleetRequests?: Array<CancelSpotFleetRequestsErrorItem>;
}
export interface CancelSpotFleetRequestsSuccessItem {
  CurrentSpotFleetRequestState?: BatchState;
  PreviousSpotFleetRequestState?: BatchState;
  SpotFleetRequestId?: string;
}
export type CancelSpotFleetRequestsSuccessSet = Array<CancelSpotFleetRequestsSuccessItem>;
export interface CancelSpotInstanceRequestsRequest {
  DryRun?: boolean;
  SpotInstanceRequestIds: Array<string>;
}
export interface CancelSpotInstanceRequestsResult {
  CancelledSpotInstanceRequests?: Array<CancelledSpotInstanceRequest>;
}
export type CancelSpotInstanceRequestState = "active" | "open" | "closed" | "cancelled" | "completed";
export interface CapacityAllocation {
  AllocationType?: AllocationType;
  Count?: number;
}
export type CapacityAllocations = Array<CapacityAllocation>;
export interface CapacityBlock {
  CapacityBlockId?: string;
  UltraserverType?: string;
  AvailabilityZone?: string;
  AvailabilityZoneId?: string;
  CapacityReservationIds?: Array<string>;
  StartDate?: Date | string;
  EndDate?: Date | string;
  CreateDate?: Date | string;
  State?: CapacityBlockResourceState;
  Tags?: Array<Tag>;
}
export interface CapacityBlockExtension {
  CapacityReservationId?: string;
  InstanceType?: string;
  InstanceCount?: number;
  AvailabilityZone?: string;
  AvailabilityZoneId?: string;
  CapacityBlockExtensionOfferingId?: string;
  CapacityBlockExtensionDurationHours?: number;
  CapacityBlockExtensionStatus?: CapacityBlockExtensionStatus;
  CapacityBlockExtensionPurchaseDate?: Date | string;
  CapacityBlockExtensionStartDate?: Date | string;
  CapacityBlockExtensionEndDate?: Date | string;
  UpfrontFee?: string;
  CurrencyCode?: string;
}
export interface CapacityBlockExtensionOffering {
  CapacityBlockExtensionOfferingId?: string;
  InstanceType?: string;
  InstanceCount?: number;
  AvailabilityZone?: string;
  AvailabilityZoneId?: string;
  StartDate?: Date | string;
  CapacityBlockExtensionStartDate?: Date | string;
  CapacityBlockExtensionEndDate?: Date | string;
  CapacityBlockExtensionDurationHours?: number;
  UpfrontFee?: string;
  CurrencyCode?: string;
  Tenancy?: CapacityReservationTenancy;
}
export type CapacityBlockExtensionOfferingSet = Array<CapacityBlockExtensionOffering>;
export type CapacityBlockExtensionSet = Array<CapacityBlockExtension>;
export type CapacityBlockExtensionStatus = "PAYMENT_PENDING" | "PAYMENT_FAILED" | "PAYMENT_SUCCEEDED";
export type CapacityBlockId = string;

export type CapacityBlockIds = Array<string>;
export type CapacityBlockInterconnectStatus = "ok" | "impaired" | "insufficient_data";
export interface CapacityBlockOffering {
  CapacityBlockOfferingId?: string;
  InstanceType?: string;
  AvailabilityZone?: string;
  InstanceCount?: number;
  StartDate?: Date | string;
  EndDate?: Date | string;
  CapacityBlockDurationHours?: number;
  UpfrontFee?: string;
  CurrencyCode?: string;
  Tenancy?: CapacityReservationTenancy;
  UltraserverType?: string;
  UltraserverCount?: number;
  CapacityBlockDurationMinutes?: number;
}
export type CapacityBlockOfferingSet = Array<CapacityBlockOffering>;
export type CapacityBlockResourceState = "active" | "expired" | "unavailable" | "cancelled" | "failed" | "scheduled" | "payment_pending" | "payment_failed";
export type CapacityBlockSet = Array<CapacityBlock>;
export interface CapacityBlockStatus {
  CapacityBlockId?: string;
  InterconnectStatus?: CapacityBlockInterconnectStatus;
  TotalCapacity?: number;
  TotalAvailableCapacity?: number;
  TotalUnavailableCapacity?: number;
  CapacityReservationStatuses?: Array<CapacityReservationStatus>;
}
export type CapacityBlockStatusSet = Array<CapacityBlockStatus>;
export interface CapacityReservation {
  CapacityReservationId?: string;
  OwnerId?: string;
  CapacityReservationArn?: string;
  AvailabilityZoneId?: string;
  InstanceType?: string;
  InstancePlatform?: CapacityReservationInstancePlatform;
  AvailabilityZone?: string;
  Tenancy?: CapacityReservationTenancy;
  TotalInstanceCount?: number;
  AvailableInstanceCount?: number;
  EbsOptimized?: boolean;
  EphemeralStorage?: boolean;
  State?: CapacityReservationState;
  StartDate?: Date | string;
  EndDate?: Date | string;
  EndDateType?: EndDateType;
  InstanceMatchCriteria?: InstanceMatchCriteria;
  CreateDate?: Date | string;
  Tags?: Array<Tag>;
  OutpostArn?: string;
  CapacityReservationFleetId?: string;
  PlacementGroupArn?: string;
  CapacityAllocations?: Array<CapacityAllocation>;
  ReservationType?: CapacityReservationType;
  UnusedReservationBillingOwnerId?: string;
  CommitmentInfo?: CapacityReservationCommitmentInfo;
  DeliveryPreference?: CapacityReservationDeliveryPreference;
  CapacityBlockId?: string;
}
export interface CapacityReservationBillingRequest {
  CapacityReservationId?: string;
  RequestedBy?: string;
  UnusedReservationBillingOwnerId?: string;
  LastUpdateTime?: Date | string;
  Status?: CapacityReservationBillingRequestStatus;
  StatusMessage?: string;
  CapacityReservationInfo?: CapacityReservationInfo;
}
export type CapacityReservationBillingRequestSet = Array<CapacityReservationBillingRequest>;
export type CapacityReservationBillingRequestStatus = "pending" | "accepted" | "rejected" | "cancelled" | "revoked" | "expired";
export type CapacityReservationCommitmentDuration = number;

export interface CapacityReservationCommitmentInfo {
  CommittedInstanceCount?: number;
  CommitmentEndDate?: Date | string;
}
export type CapacityReservationDeliveryPreference = "FIXED" | "INCREMENTAL";
export interface CapacityReservationFleet {
  CapacityReservationFleetId?: string;
  CapacityReservationFleetArn?: string;
  State?: CapacityReservationFleetState;
  TotalTargetCapacity?: number;
  TotalFulfilledCapacity?: number;
  Tenancy?: FleetCapacityReservationTenancy;
  EndDate?: Date | string;
  CreateTime?: Date | string;
  InstanceMatchCriteria?: FleetInstanceMatchCriteria;
  AllocationStrategy?: string;
  InstanceTypeSpecifications?: Array<FleetCapacityReservation>;
  Tags?: Array<Tag>;
}
export interface CapacityReservationFleetCancellationState {
  CurrentFleetState?: CapacityReservationFleetState;
  PreviousFleetState?: CapacityReservationFleetState;
  CapacityReservationFleetId?: string;
}
export type CapacityReservationFleetCancellationStateSet = Array<CapacityReservationFleetCancellationState>;
export type CapacityReservationFleetId = string;

export type CapacityReservationFleetIdSet = Array<string>;
export type CapacityReservationFleetSet = Array<CapacityReservationFleet>;
export type CapacityReservationFleetState = "SUBMITTED" | "MODIFYING" | "ACTIVE" | "PARTIALLY_FULFILLED" | "EXPIRING" | "EXPIRED" | "CANCELLING" | "CANCELLED" | "FAILED";
export interface CapacityReservationGroup {
  GroupArn?: string;
  OwnerId?: string;
}
export type CapacityReservationGroupSet = Array<CapacityReservationGroup>;
export type CapacityReservationId = string;

export type CapacityReservationIdSet = Array<string>;
export interface CapacityReservationInfo {
  InstanceType?: string;
  AvailabilityZone?: string;
  Tenancy?: CapacityReservationTenancy;
  AvailabilityZoneId?: string;
}
export type CapacityReservationInstancePlatform = "LINUX_UNIX" | "RED_HAT_ENTERPRISE_LINUX" | "SUSE_LINUX" | "WINDOWS" | "WINDOWS_WITH_SQL_SERVER" | "WINDOWS_WITH_SQL_SERVER_ENTERPRISE" | "WINDOWS_WITH_SQL_SERVER_STANDARD" | "WINDOWS_WITH_SQL_SERVER_WEB" | "LINUX_WITH_SQL_SERVER_STANDARD" | "LINUX_WITH_SQL_SERVER_WEB" | "LINUX_WITH_SQL_SERVER_ENTERPRISE" | "RHEL_WITH_SQL_SERVER_STANDARD" | "RHEL_WITH_SQL_SERVER_ENTERPRISE" | "RHEL_WITH_SQL_SERVER_WEB" | "RHEL_WITH_HA" | "RHEL_WITH_HA_AND_SQL_SERVER_STANDARD" | "RHEL_WITH_HA_AND_SQL_SERVER_ENTERPRISE" | "UBUNTU_PRO_LINUX";
export interface CapacityReservationOptions {
  UsageStrategy?: FleetCapacityReservationUsageStrategy;
}
export interface CapacityReservationOptionsRequest {
  UsageStrategy?: FleetCapacityReservationUsageStrategy;
}
export type CapacityReservationPreference = "capacity_reservations_only" | "open" | "none";
export type CapacityReservationSet = Array<CapacityReservation>;
export interface CapacityReservationSpecification {
  CapacityReservationPreference?: CapacityReservationPreference;
  CapacityReservationTarget?: CapacityReservationTarget;
}
export interface CapacityReservationSpecificationResponse {
  CapacityReservationPreference?: CapacityReservationPreference;
  CapacityReservationTarget?: CapacityReservationTargetResponse;
}
export type CapacityReservationState = "active" | "expired" | "cancelled" | "pending" | "failed" | "scheduled" | "payment_pending" | "payment_failed" | "assessing" | "delayed" | "unsupported" | "unavailable";
export interface CapacityReservationStatus {
  CapacityReservationId?: string;
  TotalCapacity?: number;
  TotalAvailableCapacity?: number;
  TotalUnavailableCapacity?: number;
}
export type CapacityReservationStatusSet = Array<CapacityReservationStatus>;
export interface CapacityReservationTarget {
  CapacityReservationId?: string;
  CapacityReservationResourceGroupArn?: string;
}
export interface CapacityReservationTargetResponse {
  CapacityReservationId?: string;
  CapacityReservationResourceGroupArn?: string;
}
export type CapacityReservationTenancy = "default" | "dedicated";
export type CapacityReservationType = "DEFAULT" | "CAPACITY_BLOCK";
export interface CarrierGateway {
  CarrierGatewayId?: string;
  VpcId?: string;
  State?: CarrierGatewayState;
  OwnerId?: string;
  Tags?: Array<Tag>;
}
export type CarrierGatewayId = string;

export type CarrierGatewayIdSet = Array<string>;
export type CarrierGatewayMaxResults = number;

export type CarrierGatewaySet = Array<CarrierGateway>;
export type CarrierGatewayState = "pending" | "available" | "deleting" | "deleted";
export type CertificateArn = string;

export interface CertificateAuthentication {
  ClientRootCertificateChain?: string;
}
export interface CertificateAuthenticationRequest {
  ClientRootCertificateChainArn?: string;
}
export type CertificateId = string;

export interface CidrAuthorizationContext {
  Message: string;
  Signature: string;
}
export interface CidrBlock {
  CidrBlock?: string;
}
export type CidrBlockSet = Array<CidrBlock>;
export interface ClassicLinkDnsSupport {
  ClassicLinkDnsSupported?: boolean;
  VpcId?: string;
}
export type ClassicLinkDnsSupportList = Array<ClassicLinkDnsSupport>;
export interface ClassicLinkInstance {
  Groups?: Array<GroupIdentifier>;
  InstanceId?: string;
  Tags?: Array<Tag>;
  VpcId?: string;
}
export type ClassicLinkInstanceList = Array<ClassicLinkInstance>;
export interface ClassicLoadBalancer {
  Name?: string;
}
export type ClassicLoadBalancers = Array<ClassicLoadBalancer>;
export interface ClassicLoadBalancersConfig {
  ClassicLoadBalancers?: Array<ClassicLoadBalancer>;
}
export interface ClientCertificateRevocationListStatus {
  Code?: ClientCertificateRevocationListStatusCode;
  Message?: string;
}
export type ClientCertificateRevocationListStatusCode = "pending" | "active";
export interface ClientConnectOptions {
  Enabled?: boolean;
  LambdaFunctionArn?: string;
}
export interface ClientConnectResponseOptions {
  Enabled?: boolean;
  LambdaFunctionArn?: string;
  Status?: ClientVpnEndpointAttributeStatus;
}
export interface ClientData {
  Comment?: string;
  UploadEnd?: Date | string;
  UploadSize?: number;
  UploadStart?: Date | string;
}
export interface ClientLoginBannerOptions {
  Enabled?: boolean;
  BannerText?: string;
}
export interface ClientLoginBannerResponseOptions {
  Enabled?: boolean;
  BannerText?: string;
}
export interface ClientRouteEnforcementOptions {
  Enforced?: boolean;
}
export interface ClientRouteEnforcementResponseOptions {
  Enforced?: boolean;
}
export type ClientSecretType = string;

export interface ClientVpnAuthentication {
  Type?: ClientVpnAuthenticationType;
  ActiveDirectory?: DirectoryServiceAuthentication;
  MutualAuthentication?: CertificateAuthentication;
  FederatedAuthentication?: FederatedAuthentication;
}
export type ClientVpnAuthenticationList = Array<ClientVpnAuthentication>;
export interface ClientVpnAuthenticationRequest {
  Type?: ClientVpnAuthenticationType;
  ActiveDirectory?: DirectoryServiceAuthenticationRequest;
  MutualAuthentication?: CertificateAuthenticationRequest;
  FederatedAuthentication?: FederatedAuthenticationRequest;
}
export type ClientVpnAuthenticationRequestList = Array<ClientVpnAuthenticationRequest>;
export type ClientVpnAuthenticationType = "certificate_authentication" | "directory_service_authentication" | "federated_authentication";
export interface ClientVpnAuthorizationRuleStatus {
  Code?: ClientVpnAuthorizationRuleStatusCode;
  Message?: string;
}
export type ClientVpnAuthorizationRuleStatusCode = "authorizing" | "active" | "failed" | "revoking";
export interface ClientVpnConnection {
  ClientVpnEndpointId?: string;
  Timestamp?: string;
  ConnectionId?: string;
  Username?: string;
  ConnectionEstablishedTime?: string;
  IngressBytes?: string;
  EgressBytes?: string;
  IngressPackets?: string;
  EgressPackets?: string;
  ClientIp?: string;
  CommonName?: string;
  Status?: ClientVpnConnectionStatus;
  ConnectionEndTime?: string;
  PostureComplianceStatuses?: Array<string>;
}
export type ClientVpnConnectionSet = Array<ClientVpnConnection>;
export interface ClientVpnConnectionStatus {
  Code?: ClientVpnConnectionStatusCode;
  Message?: string;
}
export type ClientVpnConnectionStatusCode = "active" | "failed_to_terminate" | "terminating" | "terminated";
export interface ClientVpnEndpoint {
  ClientVpnEndpointId?: string;
  Description?: string;
  Status?: ClientVpnEndpointStatus;
  CreationTime?: string;
  DeletionTime?: string;
  DnsName?: string;
  ClientCidrBlock?: string;
  DnsServers?: Array<string>;
  SplitTunnel?: boolean;
  VpnProtocol?: VpnProtocol;
  TransportProtocol?: TransportProtocol;
  VpnPort?: number;
  AssociatedTargetNetworks?: Array<AssociatedTargetNetwork>;
  ServerCertificateArn?: string;
  AuthenticationOptions?: Array<ClientVpnAuthentication>;
  ConnectionLogOptions?: ConnectionLogResponseOptions;
  Tags?: Array<Tag>;
  SecurityGroupIds?: Array<string>;
  VpcId?: string;
  SelfServicePortalUrl?: string;
  ClientConnectOptions?: ClientConnectResponseOptions;
  SessionTimeoutHours?: number;
  ClientLoginBannerOptions?: ClientLoginBannerResponseOptions;
  ClientRouteEnforcementOptions?: ClientRouteEnforcementResponseOptions;
  DisconnectOnSessionTimeout?: boolean;
}
export interface ClientVpnEndpointAttributeStatus {
  Code?: ClientVpnEndpointAttributeStatusCode;
  Message?: string;
}
export type ClientVpnEndpointAttributeStatusCode = "applying" | "applied";
export type ClientVpnEndpointId = string;

export type ClientVpnEndpointIdList = Array<string>;
export interface ClientVpnEndpointStatus {
  Code?: ClientVpnEndpointStatusCode;
  Message?: string;
}
export type ClientVpnEndpointStatusCode = "pending_associate" | "available" | "deleting" | "deleted";
export interface ClientVpnRoute {
  ClientVpnEndpointId?: string;
  DestinationCidr?: string;
  TargetSubnet?: string;
  Type?: string;
  Origin?: string;
  Status?: ClientVpnRouteStatus;
  Description?: string;
}
export type ClientVpnRouteSet = Array<ClientVpnRoute>;
export interface ClientVpnRouteStatus {
  Code?: ClientVpnRouteStatusCode;
  Message?: string;
}
export type ClientVpnRouteStatusCode = "creating" | "active" | "failed" | "deleting";
export type ClientVpnSecurityGroupIdSet = Array<string>;
export type CloudWatchLogGroupArn = string;

export interface CloudWatchLogOptions {
  LogEnabled?: boolean;
  LogGroupArn?: string;
  LogOutputFormat?: string;
}
export interface CloudWatchLogOptionsSpecification {
  LogEnabled?: boolean;
  LogGroupArn?: string;
  LogOutputFormat?: string;
}
export interface CoipAddressUsage {
  AllocationId?: string;
  AwsAccountId?: string;
  AwsService?: string;
  CoIp?: string;
}
export type CoipAddressUsageSet = Array<CoipAddressUsage>;
export interface CoipCidr {
  Cidr?: string;
  CoipPoolId?: string;
  LocalGatewayRouteTableId?: string;
}
export interface CoipPool {
  PoolId?: string;
  PoolCidrs?: Array<string>;
  LocalGatewayRouteTableId?: string;
  Tags?: Array<Tag>;
  PoolArn?: string;
}
export type CoipPoolId = string;

export type CoipPoolIdSet = Array<string>;
export type CoipPoolMaxResults = number;

export type CoipPoolSet = Array<CoipPool>;
export type ComponentAccount = string;

export type ComponentRegion = string;

export interface ConfirmProductInstanceRequest {
  InstanceId: string;
  ProductCode: string;
  DryRun?: boolean;
}
export interface ConfirmProductInstanceResult {
  Return?: boolean;
  OwnerId?: string;
}
export interface ConnectionLogOptions {
  Enabled?: boolean;
  CloudwatchLogGroup?: string;
  CloudwatchLogStream?: string;
}
export interface ConnectionLogResponseOptions {
  Enabled?: boolean;
  CloudwatchLogGroup?: string;
  CloudwatchLogStream?: string;
}
export interface ConnectionNotification {
  ConnectionNotificationId?: string;
  ServiceId?: string;
  VpcEndpointId?: string;
  ConnectionNotificationType?: ConnectionNotificationType;
  ConnectionNotificationArn?: string;
  ConnectionEvents?: Array<string>;
  ConnectionNotificationState?: ConnectionNotificationState;
  ServiceRegion?: string;
}
export type ConnectionNotificationId = string;

export type ConnectionNotificationIdsList = Array<string>;
export type ConnectionNotificationSet = Array<ConnectionNotification>;
export type ConnectionNotificationState = "Enabled" | "Disabled";
export type ConnectionNotificationType = "Topic";
export interface ConnectionTrackingConfiguration {
  TcpEstablishedTimeout?: number;
  UdpStreamTimeout?: number;
  UdpTimeout?: number;
}
export interface ConnectionTrackingSpecification {
  TcpEstablishedTimeout?: number;
  UdpTimeout?: number;
  UdpStreamTimeout?: number;
}
export interface ConnectionTrackingSpecificationRequest {
  TcpEstablishedTimeout?: number;
  UdpStreamTimeout?: number;
  UdpTimeout?: number;
}
export interface ConnectionTrackingSpecificationResponse {
  TcpEstablishedTimeout?: number;
  UdpStreamTimeout?: number;
  UdpTimeout?: number;
}
export type ConnectivityType = "PRIVATE" | "PUBLIC";
export type ContainerFormat = "ova";
export type ConversionIdStringList = Array<string>;
export interface ConversionTask {
  ConversionTaskId?: string;
  ExpirationTime?: string;
  ImportInstance?: ImportInstanceTaskDetails;
  ImportVolume?: ImportVolumeTaskDetails;
  State?: ConversionTaskState;
  StatusMessage?: string;
  Tags?: Array<Tag>;
}
export type ConversionTaskId = string;

export type ConversionTaskState = "active" | "cancelling" | "cancelled" | "completed";
export type CoolOffPeriodRequestHours = number;

export type CoolOffPeriodResponseHours = number;

export interface CopyFpgaImageRequest {
  DryRun?: boolean;
  SourceFpgaImageId: string;
  Description?: string;
  Name?: string;
  SourceRegion: string;
  ClientToken?: string;
}
export interface CopyFpgaImageResult {
  FpgaImageId?: string;
}
export interface CopyImageRequest {
  ClientToken?: string;
  Description?: string;
  Encrypted?: boolean;
  KmsKeyId?: string;
  Name: string;
  SourceImageId: string;
  SourceRegion: string;
  DestinationOutpostArn?: string;
  CopyImageTags?: boolean;
  TagSpecifications?: Array<TagSpecification>;
  SnapshotCopyCompletionDurationMinutes?: number;
  DryRun?: boolean;
}
export interface CopyImageResult {
  ImageId?: string;
}
export interface CopySnapshotRequest {
  Description?: string;
  DestinationOutpostArn?: string;
  DestinationRegion?: string;
  Encrypted?: boolean;
  KmsKeyId?: string;
  PresignedUrl?: string;
  SourceRegion: string;
  SourceSnapshotId: string;
  TagSpecifications?: Array<TagSpecification>;
  CompletionDurationMinutes?: number;
  DryRun?: boolean;
}
export type CopySnapshotRequestPSU = string;

export interface CopySnapshotResult {
  Tags?: Array<Tag>;
  SnapshotId?: string;
}
export type CopyTagsFromSource = "volume";
export type CoreCount = number;

export type CoreCountList = Array<number>;
export type CoreNetworkArn = string;

export type CpuManufacturer = "INTEL" | "AMD" | "AMAZON_WEB_SERVICES" | "APPLE";
export type CpuManufacturerName = string;

export type CpuManufacturerSet = Array<CpuManufacturer>;
export interface CpuOptions {
  CoreCount?: number;
  ThreadsPerCore?: number;
  AmdSevSnp?: AmdSevSnpSpecification;
}
export interface CpuOptionsRequest {
  CoreCount?: number;
  ThreadsPerCore?: number;
  AmdSevSnp?: AmdSevSnpSpecification;
}
export interface CpuPerformanceFactor {
  References?: Array<PerformanceFactorReference>;
}
export interface CpuPerformanceFactorRequest {
  References?: Array<PerformanceFactorReferenceRequest>;
}
export interface CreateCapacityReservationBySplittingRequest {
  DryRun?: boolean;
  ClientToken?: string;
  SourceCapacityReservationId: string;
  InstanceCount: number;
  TagSpecifications?: Array<TagSpecification>;
}
export interface CreateCapacityReservationBySplittingResult {
  SourceCapacityReservation?: CapacityReservation;
  DestinationCapacityReservation?: CapacityReservation;
  InstanceCount?: number;
}
export interface CreateCapacityReservationFleetRequest {
  AllocationStrategy?: string;
  ClientToken?: string;
  InstanceTypeSpecifications: Array<ReservationFleetInstanceSpecification>;
  Tenancy?: FleetCapacityReservationTenancy;
  TotalTargetCapacity: number;
  EndDate?: Date | string;
  InstanceMatchCriteria?: FleetInstanceMatchCriteria;
  TagSpecifications?: Array<TagSpecification>;
  DryRun?: boolean;
}
export interface CreateCapacityReservationFleetResult {
  CapacityReservationFleetId?: string;
  State?: CapacityReservationFleetState;
  TotalTargetCapacity?: number;
  TotalFulfilledCapacity?: number;
  InstanceMatchCriteria?: FleetInstanceMatchCriteria;
  AllocationStrategy?: string;
  CreateTime?: Date | string;
  EndDate?: Date | string;
  Tenancy?: FleetCapacityReservationTenancy;
  FleetCapacityReservations?: Array<FleetCapacityReservation>;
  Tags?: Array<Tag>;
}
export interface CreateCapacityReservationRequest {
  ClientToken?: string;
  InstanceType: string;
  InstancePlatform: CapacityReservationInstancePlatform;
  AvailabilityZone?: string;
  AvailabilityZoneId?: string;
  Tenancy?: CapacityReservationTenancy;
  InstanceCount: number;
  EbsOptimized?: boolean;
  EphemeralStorage?: boolean;
  EndDate?: Date | string;
  EndDateType?: EndDateType;
  InstanceMatchCriteria?: InstanceMatchCriteria;
  TagSpecifications?: Array<TagSpecification>;
  DryRun?: boolean;
  OutpostArn?: string;
  PlacementGroupArn?: string;
  StartDate?: Date | string;
  CommitmentDuration?: number;
  DeliveryPreference?: CapacityReservationDeliveryPreference;
}
export interface CreateCapacityReservationResult {
  CapacityReservation?: CapacityReservation;
}
export interface CreateCarrierGatewayRequest {
  VpcId: string;
  TagSpecifications?: Array<TagSpecification>;
  DryRun?: boolean;
  ClientToken?: string;
}
export interface CreateCarrierGatewayResult {
  CarrierGateway?: CarrierGateway;
}
export interface CreateClientVpnEndpointRequest {
  ClientCidrBlock: string;
  ServerCertificateArn: string;
  AuthenticationOptions: Array<ClientVpnAuthenticationRequest>;
  ConnectionLogOptions: ConnectionLogOptions;
  DnsServers?: Array<string>;
  TransportProtocol?: TransportProtocol;
  VpnPort?: number;
  Description?: string;
  SplitTunnel?: boolean;
  DryRun?: boolean;
  ClientToken?: string;
  TagSpecifications?: Array<TagSpecification>;
  SecurityGroupIds?: Array<string>;
  VpcId?: string;
  SelfServicePortal?: SelfServicePortal;
  ClientConnectOptions?: ClientConnectOptions;
  SessionTimeoutHours?: number;
  ClientLoginBannerOptions?: ClientLoginBannerOptions;
  ClientRouteEnforcementOptions?: ClientRouteEnforcementOptions;
  DisconnectOnSessionTimeout?: boolean;
}
export interface CreateClientVpnEndpointResult {
  ClientVpnEndpointId?: string;
  Status?: ClientVpnEndpointStatus;
  DnsName?: string;
}
export interface CreateClientVpnRouteRequest {
  ClientVpnEndpointId: string;
  DestinationCidrBlock: string;
  TargetVpcSubnetId: string;
  Description?: string;
  ClientToken?: string;
  DryRun?: boolean;
}
export interface CreateClientVpnRouteResult {
  Status?: ClientVpnRouteStatus;
}
export interface CreateCoipCidrRequest {
  Cidr: string;
  CoipPoolId: string;
  DryRun?: boolean;
}
export interface CreateCoipCidrResult {
  CoipCidr?: CoipCidr;
}
export interface CreateCoipPoolRequest {
  LocalGatewayRouteTableId: string;
  TagSpecifications?: Array<TagSpecification>;
  DryRun?: boolean;
}
export interface CreateCoipPoolResult {
  CoipPool?: CoipPool;
}
export interface CreateCustomerGatewayRequest {
  BgpAsn?: number;
  PublicIp?: string;
  CertificateArn?: string;
  Type: GatewayType;
  TagSpecifications?: Array<TagSpecification>;
  DeviceName?: string;
  IpAddress?: string;
  BgpAsnExtended?: number;
  DryRun?: boolean;
}
export interface CreateCustomerGatewayResult {
  CustomerGateway?: CustomerGateway;
}
export interface CreateDefaultSubnetRequest {
  AvailabilityZone: string;
  DryRun?: boolean;
  Ipv6Native?: boolean;
}
export interface CreateDefaultSubnetResult {
  Subnet?: Subnet;
}
export interface CreateDefaultVpcRequest {
  DryRun?: boolean;
}
export interface CreateDefaultVpcResult {
  Vpc?: Vpc;
}
export interface CreateDelegateMacVolumeOwnershipTaskRequest {
  ClientToken?: string;
  DryRun?: boolean;
  InstanceId: string;
  MacCredentials: string;
  TagSpecifications?: Array<TagSpecification>;
}
export interface CreateDelegateMacVolumeOwnershipTaskResult {
  MacModificationTask?: MacModificationTask;
}
export interface CreateDhcpOptionsRequest {
  DhcpConfigurations: Array<NewDhcpConfiguration>;
  TagSpecifications?: Array<TagSpecification>;
  DryRun?: boolean;
}
export interface CreateDhcpOptionsResult {
  DhcpOptions?: DhcpOptions;
}
export interface CreateEgressOnlyInternetGatewayRequest {
  ClientToken?: string;
  DryRun?: boolean;
  VpcId: string;
  TagSpecifications?: Array<TagSpecification>;
}
export interface CreateEgressOnlyInternetGatewayResult {
  ClientToken?: string;
  EgressOnlyInternetGateway?: EgressOnlyInternetGateway;
}
export interface CreateFleetError {
  LaunchTemplateAndOverrides?: LaunchTemplateAndOverridesResponse;
  Lifecycle?: InstanceLifecycle;
  ErrorCode?: string;
  ErrorMessage?: string;
}
export type CreateFleetErrorsSet = Array<CreateFleetError>;
export interface CreateFleetInstance {
  LaunchTemplateAndOverrides?: LaunchTemplateAndOverridesResponse;
  Lifecycle?: InstanceLifecycle;
  InstanceIds?: Array<string>;
  InstanceType?: InstanceType;
  Platform?: PlatformValues;
}
export type CreateFleetInstancesSet = Array<CreateFleetInstance>;
export interface CreateFleetRequest {
  DryRun?: boolean;
  ClientToken?: string;
  SpotOptions?: SpotOptionsRequest;
  OnDemandOptions?: OnDemandOptionsRequest;
  ExcessCapacityTerminationPolicy?: FleetExcessCapacityTerminationPolicy;
  LaunchTemplateConfigs: Array<FleetLaunchTemplateConfigRequest>;
  TargetCapacitySpecification: TargetCapacitySpecificationRequest;
  TerminateInstancesWithExpiration?: boolean;
  Type?: FleetType;
  ValidFrom?: Date | string;
  ValidUntil?: Date | string;
  ReplaceUnhealthyInstances?: boolean;
  TagSpecifications?: Array<TagSpecification>;
  Context?: string;
}
export interface CreateFleetResult {
  FleetId?: string;
  Errors?: Array<CreateFleetError>;
  Instances?: Array<CreateFleetInstance>;
}
export interface CreateFlowLogsRequest {
  DryRun?: boolean;
  ClientToken?: string;
  DeliverLogsPermissionArn?: string;
  DeliverCrossAccountRole?: string;
  LogGroupName?: string;
  ResourceIds: Array<string>;
  ResourceType: FlowLogsResourceType;
  TrafficType?: TrafficType;
  LogDestinationType?: LogDestinationType;
  LogDestination?: string;
  LogFormat?: string;
  TagSpecifications?: Array<TagSpecification>;
  MaxAggregationInterval?: number;
  DestinationOptions?: DestinationOptionsRequest;
}
export interface CreateFlowLogsResult {
  ClientToken?: string;
  FlowLogIds?: Array<string>;
  Unsuccessful?: Array<UnsuccessfulItem>;
}
export interface CreateFpgaImageRequest {
  DryRun?: boolean;
  InputStorageLocation: StorageLocation;
  LogsStorageLocation?: StorageLocation;
  Description?: string;
  Name?: string;
  ClientToken?: string;
  TagSpecifications?: Array<TagSpecification>;
}
export interface CreateFpgaImageResult {
  FpgaImageId?: string;
  FpgaImageGlobalId?: string;
}
export interface CreateImageRequest {
  TagSpecifications?: Array<TagSpecification>;
  SnapshotLocation?: SnapshotLocationEnum;
  DryRun?: boolean;
  InstanceId: string;
  Name: string;
  Description?: string;
  NoReboot?: boolean;
  BlockDeviceMappings?: Array<BlockDeviceMapping>;
}
export interface CreateImageResult {
  ImageId?: string;
}
export interface CreateInstanceConnectEndpointRequest {
  DryRun?: boolean;
  SubnetId: string;
  SecurityGroupIds?: Array<string>;
  PreserveClientIp?: boolean;
  ClientToken?: string;
  TagSpecifications?: Array<TagSpecification>;
}
export interface CreateInstanceConnectEndpointResult {
  InstanceConnectEndpoint?: Ec2InstanceConnectEndpoint;
  ClientToken?: string;
}
export interface CreateInstanceEventWindowRequest {
  DryRun?: boolean;
  Name?: string;
  TimeRanges?: Array<InstanceEventWindowTimeRangeRequest>;
  CronExpression?: string;
  TagSpecifications?: Array<TagSpecification>;
}
export interface CreateInstanceEventWindowResult {
  InstanceEventWindow?: InstanceEventWindow;
}
export interface CreateInstanceExportTaskRequest {
  TagSpecifications?: Array<TagSpecification>;
  Description?: string;
  InstanceId: string;
  TargetEnvironment: ExportEnvironment;
  ExportToS3Task: ExportToS3TaskSpecification;
}
export interface CreateInstanceExportTaskResult {
  ExportTask?: ExportTask;
}
export interface CreateInternetGatewayRequest {
  TagSpecifications?: Array<TagSpecification>;
  DryRun?: boolean;
}
export interface CreateInternetGatewayResult {
  InternetGateway?: InternetGateway;
}
export interface CreateIpamExternalResourceVerificationTokenRequest {
  DryRun?: boolean;
  IpamId: string;
  TagSpecifications?: Array<TagSpecification>;
  ClientToken?: string;
}
export interface CreateIpamExternalResourceVerificationTokenResult {
  IpamExternalResourceVerificationToken?: IpamExternalResourceVerificationToken;
}
export interface CreateIpamPoolRequest {
  DryRun?: boolean;
  IpamScopeId: string;
  Locale?: string;
  SourceIpamPoolId?: string;
  Description?: string;
  AddressFamily: AddressFamily;
  AutoImport?: boolean;
  PubliclyAdvertisable?: boolean;
  AllocationMinNetmaskLength?: number;
  AllocationMaxNetmaskLength?: number;
  AllocationDefaultNetmaskLength?: number;
  AllocationResourceTags?: Array<RequestIpamResourceTag>;
  TagSpecifications?: Array<TagSpecification>;
  ClientToken?: string;
  AwsService?: IpamPoolAwsService;
  PublicIpSource?: IpamPoolPublicIpSource;
  SourceResource?: IpamPoolSourceResourceRequest;
}
export interface CreateIpamPoolResult {
  IpamPool?: IpamPool;
}
export interface CreateIpamRequest {
  DryRun?: boolean;
  Description?: string;
  OperatingRegions?: Array<AddIpamOperatingRegion>;
  TagSpecifications?: Array<TagSpecification>;
  ClientToken?: string;
  Tier?: IpamTier;
  EnablePrivateGua?: boolean;
  MeteredAccount?: IpamMeteredAccount;
}
export interface CreateIpamResourceDiscoveryRequest {
  DryRun?: boolean;
  Description?: string;
  OperatingRegions?: Array<AddIpamOperatingRegion>;
  TagSpecifications?: Array<TagSpecification>;
  ClientToken?: string;
}
export interface CreateIpamResourceDiscoveryResult {
  IpamResourceDiscovery?: IpamResourceDiscovery;
}
export interface CreateIpamResult {
  Ipam?: Ipam;
}
export interface CreateIpamScopeRequest {
  DryRun?: boolean;
  IpamId: string;
  Description?: string;
  TagSpecifications?: Array<TagSpecification>;
  ClientToken?: string;
}
export interface CreateIpamScopeResult {
  IpamScope?: IpamScope;
}
export interface CreateKeyPairRequest {
  KeyName: string;
  KeyType?: KeyType;
  TagSpecifications?: Array<TagSpecification>;
  KeyFormat?: KeyFormat;
  DryRun?: boolean;
}
export interface CreateLaunchTemplateRequest {
  DryRun?: boolean;
  ClientToken?: string;
  LaunchTemplateName: string;
  VersionDescription?: string;
  LaunchTemplateData: RequestLaunchTemplateData;
  Operator?: OperatorRequest;
  TagSpecifications?: Array<TagSpecification>;
}
export interface CreateLaunchTemplateResult {
  LaunchTemplate?: LaunchTemplate;
  Warning?: ValidationWarning;
}
export interface CreateLaunchTemplateVersionRequest {
  DryRun?: boolean;
  ClientToken?: string;
  LaunchTemplateId?: string;
  LaunchTemplateName?: string;
  SourceVersion?: string;
  VersionDescription?: string;
  LaunchTemplateData: RequestLaunchTemplateData;
  ResolveAlias?: boolean;
}
export interface CreateLaunchTemplateVersionResult {
  LaunchTemplateVersion?: LaunchTemplateVersion;
  Warning?: ValidationWarning;
}
export interface CreateLocalGatewayRouteRequest {
  DestinationCidrBlock?: string;
  LocalGatewayRouteTableId: string;
  LocalGatewayVirtualInterfaceGroupId?: string;
  DryRun?: boolean;
  NetworkInterfaceId?: string;
  DestinationPrefixListId?: string;
}
export interface CreateLocalGatewayRouteResult {
  Route?: LocalGatewayRoute;
}
export interface CreateLocalGatewayRouteTableRequest {
  LocalGatewayId: string;
  Mode?: LocalGatewayRouteTableMode;
  TagSpecifications?: Array<TagSpecification>;
  DryRun?: boolean;
}
export interface CreateLocalGatewayRouteTableResult {
  LocalGatewayRouteTable?: LocalGatewayRouteTable;
}
export interface CreateLocalGatewayRouteTableVirtualInterfaceGroupAssociationRequest {
  LocalGatewayRouteTableId: string;
  LocalGatewayVirtualInterfaceGroupId: string;
  TagSpecifications?: Array<TagSpecification>;
  DryRun?: boolean;
}
export interface CreateLocalGatewayRouteTableVirtualInterfaceGroupAssociationResult {
  LocalGatewayRouteTableVirtualInterfaceGroupAssociation?: LocalGatewayRouteTableVirtualInterfaceGroupAssociation;
}
export interface CreateLocalGatewayRouteTableVpcAssociationRequest {
  LocalGatewayRouteTableId: string;
  VpcId: string;
  TagSpecifications?: Array<TagSpecification>;
  DryRun?: boolean;
}
export interface CreateLocalGatewayRouteTableVpcAssociationResult {
  LocalGatewayRouteTableVpcAssociation?: LocalGatewayRouteTableVpcAssociation;
}
export interface CreateLocalGatewayVirtualInterfaceGroupRequest {
  LocalGatewayId: string;
  LocalBgpAsn?: number;
  LocalBgpAsnExtended?: number;
  TagSpecifications?: Array<TagSpecification>;
  DryRun?: boolean;
}
export interface CreateLocalGatewayVirtualInterfaceGroupResult {
  LocalGatewayVirtualInterfaceGroup?: LocalGatewayVirtualInterfaceGroup;
}
export interface CreateLocalGatewayVirtualInterfaceRequest {
  LocalGatewayVirtualInterfaceGroupId: string;
  OutpostLagId: string;
  Vlan: number;
  LocalAddress: string;
  PeerAddress: string;
  PeerBgpAsn?: number;
  TagSpecifications?: Array<TagSpecification>;
  DryRun?: boolean;
  PeerBgpAsnExtended?: number;
}
export interface CreateLocalGatewayVirtualInterfaceResult {
  LocalGatewayVirtualInterface?: LocalGatewayVirtualInterface;
}
export interface CreateMacSystemIntegrityProtectionModificationTaskRequest {
  ClientToken?: string;
  DryRun?: boolean;
  InstanceId: string;
  MacCredentials?: string;
  MacSystemIntegrityProtectionConfiguration?: MacSystemIntegrityProtectionConfigurationRequest;
  MacSystemIntegrityProtectionStatus: MacSystemIntegrityProtectionSettingStatus;
  TagSpecifications?: Array<TagSpecification>;
}
export interface CreateMacSystemIntegrityProtectionModificationTaskResult {
  MacModificationTask?: MacModificationTask;
}
export interface CreateManagedPrefixListRequest {
  DryRun?: boolean;
  PrefixListName: string;
  Entries?: Array<AddPrefixListEntry>;
  MaxEntries: number;
  TagSpecifications?: Array<TagSpecification>;
  AddressFamily: string;
  ClientToken?: string;
}
export interface CreateManagedPrefixListResult {
  PrefixList?: ManagedPrefixList;
}
export interface CreateNatGatewayRequest {
  AllocationId?: string;
  ClientToken?: string;
  DryRun?: boolean;
  SubnetId: string;
  TagSpecifications?: Array<TagSpecification>;
  ConnectivityType?: ConnectivityType;
  PrivateIpAddress?: string;
  SecondaryAllocationIds?: Array<string>;
  SecondaryPrivateIpAddresses?: Array<string>;
  SecondaryPrivateIpAddressCount?: number;
}
export interface CreateNatGatewayResult {
  ClientToken?: string;
  NatGateway?: NatGateway;
}
export interface CreateNetworkAclEntryRequest {
  DryRun?: boolean;
  NetworkAclId: string;
  RuleNumber: number;
  Protocol: string;
  RuleAction: RuleAction;
  Egress: boolean;
  CidrBlock?: string;
  Ipv6CidrBlock?: string;
  IcmpTypeCode?: IcmpTypeCode;
  PortRange?: PortRange;
}
export interface CreateNetworkAclRequest {
  TagSpecifications?: Array<TagSpecification>;
  ClientToken?: string;
  DryRun?: boolean;
  VpcId: string;
}
export interface CreateNetworkAclResult {
  NetworkAcl?: NetworkAcl;
  ClientToken?: string;
}
export interface CreateNetworkInsightsAccessScopeRequest {
  MatchPaths?: Array<AccessScopePathRequest>;
  ExcludePaths?: Array<AccessScopePathRequest>;
  ClientToken: string;
  TagSpecifications?: Array<TagSpecification>;
  DryRun?: boolean;
}
export interface CreateNetworkInsightsAccessScopeResult {
  NetworkInsightsAccessScope?: NetworkInsightsAccessScope;
  NetworkInsightsAccessScopeContent?: NetworkInsightsAccessScopeContent;
}
export interface CreateNetworkInsightsPathRequest {
  SourceIp?: string;
  DestinationIp?: string;
  Source: string;
  Destination?: string;
  Protocol: Protocol;
  DestinationPort?: number;
  TagSpecifications?: Array<TagSpecification>;
  DryRun?: boolean;
  ClientToken: string;
  FilterAtSource?: PathRequestFilter;
  FilterAtDestination?: PathRequestFilter;
}
export interface CreateNetworkInsightsPathResult {
  NetworkInsightsPath?: NetworkInsightsPath;
}
export interface CreateNetworkInterfacePermissionRequest {
  NetworkInterfaceId: string;
  AwsAccountId?: string;
  AwsService?: string;
  Permission: InterfacePermissionType;
  DryRun?: boolean;
}
export interface CreateNetworkInterfacePermissionResult {
  InterfacePermission?: NetworkInterfacePermission;
}
export interface CreateNetworkInterfaceRequest {
  Ipv4Prefixes?: Array<Ipv4PrefixSpecificationRequest>;
  Ipv4PrefixCount?: number;
  Ipv6Prefixes?: Array<Ipv6PrefixSpecificationRequest>;
  Ipv6PrefixCount?: number;
  InterfaceType?: NetworkInterfaceCreationType;
  TagSpecifications?: Array<TagSpecification>;
  ClientToken?: string;
  EnablePrimaryIpv6?: boolean;
  ConnectionTrackingSpecification?: ConnectionTrackingSpecificationRequest;
  Operator?: OperatorRequest;
  SubnetId: string;
  Description?: string;
  PrivateIpAddress?: string;
  Groups?: Array<string>;
  PrivateIpAddresses?: Array<PrivateIpAddressSpecification>;
  SecondaryPrivateIpAddressCount?: number;
  Ipv6Addresses?: Array<InstanceIpv6Address>;
  Ipv6AddressCount?: number;
  DryRun?: boolean;
}
export interface CreateNetworkInterfaceResult {
  NetworkInterface?: NetworkInterface;
  ClientToken?: string;
}
export interface CreatePlacementGroupRequest {
  PartitionCount?: number;
  TagSpecifications?: Array<TagSpecification>;
  SpreadLevel?: SpreadLevel;
  DryRun?: boolean;
  GroupName?: string;
  Strategy?: PlacementStrategy;
}
export interface CreatePlacementGroupResult {
  PlacementGroup?: PlacementGroup;
}
export interface CreatePublicIpv4PoolRequest {
  DryRun?: boolean;
  TagSpecifications?: Array<TagSpecification>;
  NetworkBorderGroup?: string;
}
export interface CreatePublicIpv4PoolResult {
  PoolId?: string;
}
export interface CreateReplaceRootVolumeTaskRequest {
  InstanceId: string;
  SnapshotId?: string;
  ClientToken?: string;
  DryRun?: boolean;
  TagSpecifications?: Array<TagSpecification>;
  ImageId?: string;
  DeleteReplacedRootVolume?: boolean;
  VolumeInitializationRate?: number;
}
export interface CreateReplaceRootVolumeTaskResult {
  ReplaceRootVolumeTask?: ReplaceRootVolumeTask;
}
export interface CreateReservedInstancesListingRequest {
  ReservedInstancesId: string;
  InstanceCount: number;
  PriceSchedules: Array<PriceScheduleSpecification>;
  ClientToken: string;
}
export interface CreateReservedInstancesListingResult {
  ReservedInstancesListings?: Array<ReservedInstancesListing>;
}
export interface CreateRestoreImageTaskRequest {
  Bucket: string;
  ObjectKey: string;
  Name?: string;
  TagSpecifications?: Array<TagSpecification>;
  DryRun?: boolean;
}
export interface CreateRestoreImageTaskResult {
  ImageId?: string;
}
export interface CreateRouteRequest {
  DestinationPrefixListId?: string;
  VpcEndpointId?: string;
  TransitGatewayId?: string;
  LocalGatewayId?: string;
  CarrierGatewayId?: string;
  CoreNetworkArn?: string;
  OdbNetworkArn?: string;
  DryRun?: boolean;
  RouteTableId: string;
  DestinationCidrBlock?: string;
  GatewayId?: string;
  DestinationIpv6CidrBlock?: string;
  EgressOnlyInternetGatewayId?: string;
  InstanceId?: string;
  NetworkInterfaceId?: string;
  VpcPeeringConnectionId?: string;
  NatGatewayId?: string;
}
export interface CreateRouteResult {
  Return?: boolean;
}
export interface CreateRouteServerEndpointRequest {
  RouteServerId: string;
  SubnetId: string;
  ClientToken?: string;
  DryRun?: boolean;
  TagSpecifications?: Array<TagSpecification>;
}
export interface CreateRouteServerEndpointResult {
  RouteServerEndpoint?: RouteServerEndpoint;
}
export interface CreateRouteServerPeerRequest {
  RouteServerEndpointId: string;
  PeerAddress: string;
  BgpOptions: RouteServerBgpOptionsRequest;
  DryRun?: boolean;
  TagSpecifications?: Array<TagSpecification>;
}
export interface CreateRouteServerPeerResult {
  RouteServerPeer?: RouteServerPeer;
}
export interface CreateRouteServerRequest {
  AmazonSideAsn: number;
  ClientToken?: string;
  DryRun?: boolean;
  PersistRoutes?: RouteServerPersistRoutesAction;
  PersistRoutesDuration?: number;
  SnsNotificationsEnabled?: boolean;
  TagSpecifications?: Array<TagSpecification>;
}
export interface CreateRouteServerResult {
  RouteServer?: RouteServer;
}
export interface CreateRouteTableRequest {
  TagSpecifications?: Array<TagSpecification>;
  ClientToken?: string;
  DryRun?: boolean;
  VpcId: string;
}
export interface CreateRouteTableResult {
  RouteTable?: RouteTable;
  ClientToken?: string;
}
export interface CreateSecurityGroupRequest {
  Description: string;
  GroupName: string;
  VpcId?: string;
  TagSpecifications?: Array<TagSpecification>;
  DryRun?: boolean;
}
export interface CreateSecurityGroupResult {
  GroupId?: string;
  Tags?: Array<Tag>;
  SecurityGroupArn?: string;
}
export interface CreateSnapshotRequest {
  Description?: string;
  OutpostArn?: string;
  VolumeId: string;
  TagSpecifications?: Array<TagSpecification>;
  Location?: SnapshotLocationEnum;
  DryRun?: boolean;
}
export interface CreateSnapshotsRequest {
  Description?: string;
  InstanceSpecification: InstanceSpecification;
  OutpostArn?: string;
  TagSpecifications?: Array<TagSpecification>;
  DryRun?: boolean;
  CopyTagsFromSource?: CopyTagsFromSource;
  Location?: SnapshotLocationEnum;
}
export interface CreateSnapshotsResult {
  Snapshots?: Array<SnapshotInfo>;
}
export interface CreateSpotDatafeedSubscriptionRequest {
  DryRun?: boolean;
  Bucket: string;
  Prefix?: string;
}
export interface CreateSpotDatafeedSubscriptionResult {
  SpotDatafeedSubscription?: SpotDatafeedSubscription;
}
export interface CreateStoreImageTaskRequest {
  ImageId: string;
  Bucket: string;
  S3ObjectTags?: Array<S3ObjectTag>;
  DryRun?: boolean;
}
export interface CreateStoreImageTaskResult {
  ObjectKey?: string;
}
export interface CreateSubnetCidrReservationRequest {
  SubnetId: string;
  Cidr: string;
  ReservationType: SubnetCidrReservationType;
  Description?: string;
  DryRun?: boolean;
  TagSpecifications?: Array<TagSpecification>;
}
export interface CreateSubnetCidrReservationResult {
  SubnetCidrReservation?: SubnetCidrReservation;
}
export interface CreateSubnetRequest {
  TagSpecifications?: Array<TagSpecification>;
  AvailabilityZone?: string;
  AvailabilityZoneId?: string;
  CidrBlock?: string;
  Ipv6CidrBlock?: string;
  OutpostArn?: string;
  VpcId: string;
  Ipv6Native?: boolean;
  Ipv4IpamPoolId?: string;
  Ipv4NetmaskLength?: number;
  Ipv6IpamPoolId?: string;
  Ipv6NetmaskLength?: number;
  DryRun?: boolean;
}
export interface CreateSubnetResult {
  Subnet?: Subnet;
}
export interface CreateTagsRequest {
  DryRun?: boolean;
  Resources: Array<string>;
  Tags: Array<Tag>;
}
export interface CreateTrafficMirrorFilterRequest {
  Description?: string;
  TagSpecifications?: Array<TagSpecification>;
  DryRun?: boolean;
  ClientToken?: string;
}
export interface CreateTrafficMirrorFilterResult {
  TrafficMirrorFilter?: TrafficMirrorFilter;
  ClientToken?: string;
}
export interface CreateTrafficMirrorFilterRuleRequest {
  TrafficMirrorFilterId: string;
  TrafficDirection: TrafficDirection;
  RuleNumber: number;
  RuleAction: TrafficMirrorRuleAction;
  DestinationPortRange?: TrafficMirrorPortRangeRequest;
  SourcePortRange?: TrafficMirrorPortRangeRequest;
  Protocol?: number;
  DestinationCidrBlock: string;
  SourceCidrBlock: string;
  Description?: string;
  DryRun?: boolean;
  ClientToken?: string;
  TagSpecifications?: Array<TagSpecification>;
}
export interface CreateTrafficMirrorFilterRuleResult {
  TrafficMirrorFilterRule?: TrafficMirrorFilterRule;
  ClientToken?: string;
}
export interface CreateTrafficMirrorSessionRequest {
  NetworkInterfaceId: string;
  TrafficMirrorTargetId: string;
  TrafficMirrorFilterId: string;
  PacketLength?: number;
  SessionNumber: number;
  VirtualNetworkId?: number;
  Description?: string;
  TagSpecifications?: Array<TagSpecification>;
  DryRun?: boolean;
  ClientToken?: string;
}
export interface CreateTrafficMirrorSessionResult {
  TrafficMirrorSession?: TrafficMirrorSession;
  ClientToken?: string;
}
export interface CreateTrafficMirrorTargetRequest {
  NetworkInterfaceId?: string;
  NetworkLoadBalancerArn?: string;
  Description?: string;
  TagSpecifications?: Array<TagSpecification>;
  DryRun?: boolean;
  ClientToken?: string;
  GatewayLoadBalancerEndpointId?: string;
}
export interface CreateTrafficMirrorTargetResult {
  TrafficMirrorTarget?: TrafficMirrorTarget;
  ClientToken?: string;
}
export interface CreateTransitGatewayConnectPeerRequest {
  TransitGatewayAttachmentId: string;
  TransitGatewayAddress?: string;
  PeerAddress: string;
  BgpOptions?: TransitGatewayConnectRequestBgpOptions;
  InsideCidrBlocks: Array<string>;
  TagSpecifications?: Array<TagSpecification>;
  DryRun?: boolean;
}
export interface CreateTransitGatewayConnectPeerResult {
  TransitGatewayConnectPeer?: TransitGatewayConnectPeer;
}
export interface CreateTransitGatewayConnectRequest {
  TransportTransitGatewayAttachmentId: string;
  Options: CreateTransitGatewayConnectRequestOptions;
  TagSpecifications?: Array<TagSpecification>;
  DryRun?: boolean;
}
export interface CreateTransitGatewayConnectRequestOptions {
  Protocol: ProtocolValue;
}
export interface CreateTransitGatewayConnectResult {
  TransitGatewayConnect?: TransitGatewayConnect;
}
export interface CreateTransitGatewayMulticastDomainRequest {
  TransitGatewayId: string;
  Options?: CreateTransitGatewayMulticastDomainRequestOptions;
  TagSpecifications?: Array<TagSpecification>;
  DryRun?: boolean;
}
export interface CreateTransitGatewayMulticastDomainRequestOptions {
  Igmpv2Support?: Igmpv2SupportValue;
  StaticSourcesSupport?: StaticSourcesSupportValue;
  AutoAcceptSharedAssociations?: AutoAcceptSharedAssociationsValue;
}
export interface CreateTransitGatewayMulticastDomainResult {
  TransitGatewayMulticastDomain?: TransitGatewayMulticastDomain;
}
export interface CreateTransitGatewayPeeringAttachmentRequest {
  TransitGatewayId: string;
  PeerTransitGatewayId: string;
  PeerAccountId: string;
  PeerRegion: string;
  Options?: CreateTransitGatewayPeeringAttachmentRequestOptions;
  TagSpecifications?: Array<TagSpecification>;
  DryRun?: boolean;
}
export interface CreateTransitGatewayPeeringAttachmentRequestOptions {
  DynamicRouting?: DynamicRoutingValue;
}
export interface CreateTransitGatewayPeeringAttachmentResult {
  TransitGatewayPeeringAttachment?: TransitGatewayPeeringAttachment;
}
export interface CreateTransitGatewayPolicyTableRequest {
  TransitGatewayId: string;
  TagSpecifications?: Array<TagSpecification>;
  DryRun?: boolean;
}
export interface CreateTransitGatewayPolicyTableResult {
  TransitGatewayPolicyTable?: TransitGatewayPolicyTable;
}
export interface CreateTransitGatewayPrefixListReferenceRequest {
  TransitGatewayRouteTableId: string;
  PrefixListId: string;
  TransitGatewayAttachmentId?: string;
  Blackhole?: boolean;
  DryRun?: boolean;
}
export interface CreateTransitGatewayPrefixListReferenceResult {
  TransitGatewayPrefixListReference?: TransitGatewayPrefixListReference;
}
export interface CreateTransitGatewayRequest {
  Description?: string;
  Options?: TransitGatewayRequestOptions;
  TagSpecifications?: Array<TagSpecification>;
  DryRun?: boolean;
}
export interface CreateTransitGatewayResult {
  TransitGateway?: TransitGateway;
}
export interface CreateTransitGatewayRouteRequest {
  DestinationCidrBlock: string;
  TransitGatewayRouteTableId: string;
  TransitGatewayAttachmentId?: string;
  Blackhole?: boolean;
  DryRun?: boolean;
}
export interface CreateTransitGatewayRouteResult {
  Route?: TransitGatewayRoute;
}
export interface CreateTransitGatewayRouteTableAnnouncementRequest {
  TransitGatewayRouteTableId: string;
  PeeringAttachmentId: string;
  TagSpecifications?: Array<TagSpecification>;
  DryRun?: boolean;
}
export interface CreateTransitGatewayRouteTableAnnouncementResult {
  TransitGatewayRouteTableAnnouncement?: TransitGatewayRouteTableAnnouncement;
}
export interface CreateTransitGatewayRouteTableRequest {
  TransitGatewayId: string;
  TagSpecifications?: Array<TagSpecification>;
  DryRun?: boolean;
}
export interface CreateTransitGatewayRouteTableResult {
  TransitGatewayRouteTable?: TransitGatewayRouteTable;
}
export interface CreateTransitGatewayVpcAttachmentRequest {
  TransitGatewayId: string;
  VpcId: string;
  SubnetIds: Array<string>;
  Options?: CreateTransitGatewayVpcAttachmentRequestOptions;
  TagSpecifications?: Array<TagSpecification>;
  DryRun?: boolean;
}
export interface CreateTransitGatewayVpcAttachmentRequestOptions {
  DnsSupport?: DnsSupportValue;
  SecurityGroupReferencingSupport?: SecurityGroupReferencingSupportValue;
  Ipv6Support?: Ipv6SupportValue;
  ApplianceModeSupport?: ApplianceModeSupportValue;
}
export interface CreateTransitGatewayVpcAttachmentResult {
  TransitGatewayVpcAttachment?: TransitGatewayVpcAttachment;
}
export interface CreateVerifiedAccessEndpointCidrOptions {
  Protocol?: VerifiedAccessEndpointProtocol;
  SubnetIds?: Array<string>;
  Cidr?: string;
  PortRanges?: Array<CreateVerifiedAccessEndpointPortRange>;
}
export interface CreateVerifiedAccessEndpointEniOptions {
  NetworkInterfaceId?: string;
  Protocol?: VerifiedAccessEndpointProtocol;
  Port?: number;
  PortRanges?: Array<CreateVerifiedAccessEndpointPortRange>;
}
export interface CreateVerifiedAccessEndpointLoadBalancerOptions {
  Protocol?: VerifiedAccessEndpointProtocol;
  Port?: number;
  LoadBalancerArn?: string;
  SubnetIds?: Array<string>;
  PortRanges?: Array<CreateVerifiedAccessEndpointPortRange>;
}
export interface CreateVerifiedAccessEndpointPortRange {
  FromPort?: number;
  ToPort?: number;
}
export type CreateVerifiedAccessEndpointPortRangeList = Array<CreateVerifiedAccessEndpointPortRange>;
export interface CreateVerifiedAccessEndpointRdsOptions {
  Protocol?: VerifiedAccessEndpointProtocol;
  Port?: number;
  RdsDbInstanceArn?: string;
  RdsDbClusterArn?: string;
  RdsDbProxyArn?: string;
  RdsEndpoint?: string;
  SubnetIds?: Array<string>;
}
export interface CreateVerifiedAccessEndpointRequest {
  VerifiedAccessGroupId: string;
  EndpointType: VerifiedAccessEndpointType;
  AttachmentType: VerifiedAccessEndpointAttachmentType;
  DomainCertificateArn?: string;
  ApplicationDomain?: string;
  EndpointDomainPrefix?: string;
  SecurityGroupIds?: Array<string>;
  LoadBalancerOptions?: CreateVerifiedAccessEndpointLoadBalancerOptions;
  NetworkInterfaceOptions?: CreateVerifiedAccessEndpointEniOptions;
  Description?: string;
  PolicyDocument?: string;
  TagSpecifications?: Array<TagSpecification>;
  ClientToken?: string;
  DryRun?: boolean;
  SseSpecification?: VerifiedAccessSseSpecificationRequest;
  RdsOptions?: CreateVerifiedAccessEndpointRdsOptions;
  CidrOptions?: CreateVerifiedAccessEndpointCidrOptions;
}
export interface CreateVerifiedAccessEndpointResult {
  VerifiedAccessEndpoint?: VerifiedAccessEndpoint;
}
export type CreateVerifiedAccessEndpointSubnetIdList = Array<string>;
export interface CreateVerifiedAccessGroupRequest {
  VerifiedAccessInstanceId: string;
  Description?: string;
  PolicyDocument?: string;
  TagSpecifications?: Array<TagSpecification>;
  ClientToken?: string;
  DryRun?: boolean;
  SseSpecification?: VerifiedAccessSseSpecificationRequest;
}
export interface CreateVerifiedAccessGroupResult {
  VerifiedAccessGroup?: VerifiedAccessGroup;
}
export interface CreateVerifiedAccessInstanceRequest {
  Description?: string;
  TagSpecifications?: Array<TagSpecification>;
  ClientToken?: string;
  DryRun?: boolean;
  FIPSEnabled?: boolean;
  CidrEndpointsCustomSubDomain?: string;
}
export interface CreateVerifiedAccessInstanceResult {
  VerifiedAccessInstance?: VerifiedAccessInstance;
}
export interface CreateVerifiedAccessNativeApplicationOidcOptions {
  PublicSigningKeyEndpoint?: string;
  Issuer?: string;
  AuthorizationEndpoint?: string;
  TokenEndpoint?: string;
  UserInfoEndpoint?: string;
  ClientId?: string;
  ClientSecret?: string;
  Scope?: string;
}
export interface CreateVerifiedAccessTrustProviderDeviceOptions {
  TenantId?: string;
  PublicSigningKeyUrl?: string;
}
export interface CreateVerifiedAccessTrustProviderOidcOptions {
  Issuer?: string;
  AuthorizationEndpoint?: string;
  TokenEndpoint?: string;
  UserInfoEndpoint?: string;
  ClientId?: string;
  ClientSecret?: string;
  Scope?: string;
}
export interface CreateVerifiedAccessTrustProviderRequest {
  TrustProviderType: TrustProviderType;
  UserTrustProviderType?: UserTrustProviderType;
  DeviceTrustProviderType?: DeviceTrustProviderType;
  OidcOptions?: CreateVerifiedAccessTrustProviderOidcOptions;
  DeviceOptions?: CreateVerifiedAccessTrustProviderDeviceOptions;
  PolicyReferenceName: string;
  Description?: string;
  TagSpecifications?: Array<TagSpecification>;
  ClientToken?: string;
  DryRun?: boolean;
  SseSpecification?: VerifiedAccessSseSpecificationRequest;
  NativeApplicationOidcOptions?: CreateVerifiedAccessNativeApplicationOidcOptions;
}
export interface CreateVerifiedAccessTrustProviderResult {
  VerifiedAccessTrustProvider?: VerifiedAccessTrustProvider;
}
export interface CreateVolumePermission {
  UserId?: string;
  Group?: PermissionGroup;
}
export type CreateVolumePermissionList = Array<CreateVolumePermission>;
export interface CreateVolumePermissionModifications {
  Add?: Array<CreateVolumePermission>;
  Remove?: Array<CreateVolumePermission>;
}
export interface CreateVolumeRequest {
  AvailabilityZone: string;
  Encrypted?: boolean;
  Iops?: number;
  KmsKeyId?: string;
  OutpostArn?: string;
  Size?: number;
  SnapshotId?: string;
  VolumeType?: VolumeType;
  TagSpecifications?: Array<TagSpecification>;
  MultiAttachEnabled?: boolean;
  Throughput?: number;
  ClientToken?: string;
  VolumeInitializationRate?: number;
  Operator?: OperatorRequest;
  DryRun?: boolean;
}
export interface CreateVpcBlockPublicAccessExclusionRequest {
  DryRun?: boolean;
  SubnetId?: string;
  VpcId?: string;
  InternetGatewayExclusionMode: InternetGatewayExclusionMode;
  TagSpecifications?: Array<TagSpecification>;
}
export interface CreateVpcBlockPublicAccessExclusionResult {
  VpcBlockPublicAccessExclusion?: VpcBlockPublicAccessExclusion;
}
export interface CreateVpcEndpointConnectionNotificationRequest {
  DryRun?: boolean;
  ServiceId?: string;
  VpcEndpointId?: string;
  ConnectionNotificationArn: string;
  ConnectionEvents: Array<string>;
  ClientToken?: string;
}
export interface CreateVpcEndpointConnectionNotificationResult {
  ConnectionNotification?: ConnectionNotification;
  ClientToken?: string;
}
export interface CreateVpcEndpointRequest {
  DryRun?: boolean;
  VpcEndpointType?: VpcEndpointType;
  VpcId: string;
  ServiceName?: string;
  PolicyDocument?: string;
  RouteTableIds?: Array<string>;
  SubnetIds?: Array<string>;
  SecurityGroupIds?: Array<string>;
  IpAddressType?: IpAddressType;
  DnsOptions?: DnsOptionsSpecification;
  ClientToken?: string;
  PrivateDnsEnabled?: boolean;
  TagSpecifications?: Array<TagSpecification>;
  SubnetConfigurations?: Array<SubnetConfiguration>;
  ServiceNetworkArn?: string;
  ResourceConfigurationArn?: string;
  ServiceRegion?: string;
}
export interface CreateVpcEndpointResult {
  VpcEndpoint?: VpcEndpoint;
  ClientToken?: string;
}
export interface CreateVpcEndpointServiceConfigurationRequest {
  DryRun?: boolean;
  AcceptanceRequired?: boolean;
  PrivateDnsName?: string;
  NetworkLoadBalancerArns?: Array<string>;
  GatewayLoadBalancerArns?: Array<string>;
  SupportedIpAddressTypes?: Array<string>;
  SupportedRegions?: Array<string>;
  ClientToken?: string;
  TagSpecifications?: Array<TagSpecification>;
}
export interface CreateVpcEndpointServiceConfigurationResult {
  ServiceConfiguration?: ServiceConfiguration;
  ClientToken?: string;
}
export interface CreateVpcPeeringConnectionRequest {
  PeerRegion?: string;
  TagSpecifications?: Array<TagSpecification>;
  DryRun?: boolean;
  VpcId: string;
  PeerVpcId?: string;
  PeerOwnerId?: string;
}
export interface CreateVpcPeeringConnectionResult {
  VpcPeeringConnection?: VpcPeeringConnection;
}
export interface CreateVpcRequest {
  CidrBlock?: string;
  Ipv6Pool?: string;
  Ipv6CidrBlock?: string;
  Ipv4IpamPoolId?: string;
  Ipv4NetmaskLength?: number;
  Ipv6IpamPoolId?: string;
  Ipv6NetmaskLength?: number;
  Ipv6CidrBlockNetworkBorderGroup?: string;
  TagSpecifications?: Array<TagSpecification>;
  DryRun?: boolean;
  InstanceTenancy?: Tenancy;
  AmazonProvidedIpv6CidrBlock?: boolean;
}
export interface CreateVpcResult {
  Vpc?: Vpc;
}
export interface CreateVpnConnectionRequest {
  CustomerGatewayId: string;
  Type: string;
  VpnGatewayId?: string;
  TransitGatewayId?: string;
  TagSpecifications?: Array<TagSpecification>;
  PreSharedKeyStorage?: string;
  DryRun?: boolean;
  Options?: VpnConnectionOptionsSpecification;
}
export interface CreateVpnConnectionResult {
  VpnConnection?: VpnConnection;
}
export interface CreateVpnConnectionRouteRequest {
  DestinationCidrBlock: string;
  VpnConnectionId: string;
}
export interface CreateVpnGatewayRequest {
  AvailabilityZone?: string;
  Type: GatewayType;
  TagSpecifications?: Array<TagSpecification>;
  AmazonSideAsn?: number;
  DryRun?: boolean;
}
export interface CreateVpnGatewayResult {
  VpnGateway?: VpnGateway;
}
export interface CreditSpecification {
  CpuCredits?: string;
}
export interface CreditSpecificationRequest {
  CpuCredits: string;
}
export type CurrencyCodeValues = "USD";
export type CurrentGenerationFlag = boolean;

export interface CustomerGateway {
  CertificateArn?: string;
  DeviceName?: string;
  Tags?: Array<Tag>;
  BgpAsnExtended?: string;
  CustomerGatewayId?: string;
  State?: string;
  Type?: string;
  IpAddress?: string;
  BgpAsn?: string;
}
export type customerGatewayConfiguration = string;

export type CustomerGatewayId = string;

export type CustomerGatewayIdStringList = Array<string>;
export type CustomerGatewayList = Array<CustomerGateway>;
export type DatafeedSubscriptionState = "Active" | "Inactive";
export type DataQueries = Array<DataQuery>;
export interface DataQuery {
  Id?: string;
  Source?: string;
  Destination?: string;
  Metric?: MetricType;
  Statistic?: StatisticType;
  Period?: PeriodType;
}
export interface DataResponse {
  Id?: string;
  Source?: string;
  Destination?: string;
  Metric?: MetricType;
  Statistic?: StatisticType;
  Period?: PeriodType;
  MetricPoints?: Array<MetricPoint>;
}
export type DataResponses = Array<DataResponse>;
export type DateTime = Date | string;

export type DeclarativePoliciesMaxResults = number;

export interface DeclarativePoliciesReport {
  ReportId?: string;
  S3Bucket?: string;
  S3Prefix?: string;
  TargetId?: string;
  StartTime?: Date | string;
  EndTime?: Date | string;
  Status?: ReportState;
  Tags?: Array<Tag>;
}
export type DeclarativePoliciesReportId = string;

export type DeclarativePoliciesReportList = Array<DeclarativePoliciesReport>;
export type DedicatedHostFlag = boolean;

export type DedicatedHostId = string;

export type DedicatedHostIdList = Array<string>;
export type DefaultEnaQueueCountPerInterface = number;

export type DefaultingDhcpOptionsId = string;

export type DefaultInstanceMetadataEndpointState = "disabled" | "enabled" | "no_preference";
export type DefaultInstanceMetadataTagsState = "disabled" | "enabled" | "no_preference";
export type DefaultNetworkCardIndex = number;

export type DefaultRouteTableAssociationValue = "enable" | "disable";
export type DefaultRouteTablePropagationValue = "enable" | "disable";
export type DefaultTargetCapacityType = "SPOT" | "ON_DEMAND" | "CAPACITY_BLOCK";
export interface DeleteCarrierGatewayRequest {
  CarrierGatewayId: string;
  DryRun?: boolean;
}
export interface DeleteCarrierGatewayResult {
  CarrierGateway?: CarrierGateway;
}
export interface DeleteClientVpnEndpointRequest {
  ClientVpnEndpointId: string;
  DryRun?: boolean;
}
export interface DeleteClientVpnEndpointResult {
  Status?: ClientVpnEndpointStatus;
}
export interface DeleteClientVpnRouteRequest {
  ClientVpnEndpointId: string;
  TargetVpcSubnetId?: string;
  DestinationCidrBlock: string;
  DryRun?: boolean;
}
export interface DeleteClientVpnRouteResult {
  Status?: ClientVpnRouteStatus;
}
export interface DeleteCoipCidrRequest {
  Cidr: string;
  CoipPoolId: string;
  DryRun?: boolean;
}
export interface DeleteCoipCidrResult {
  CoipCidr?: CoipCidr;
}
export interface DeleteCoipPoolRequest {
  CoipPoolId: string;
  DryRun?: boolean;
}
export interface DeleteCoipPoolResult {
  CoipPool?: CoipPool;
}
export interface DeleteCustomerGatewayRequest {
  CustomerGatewayId: string;
  DryRun?: boolean;
}
export interface DeleteDhcpOptionsRequest {
  DhcpOptionsId: string;
  DryRun?: boolean;
}
export interface DeleteEgressOnlyInternetGatewayRequest {
  DryRun?: boolean;
  EgressOnlyInternetGatewayId: string;
}
export interface DeleteEgressOnlyInternetGatewayResult {
  ReturnCode?: boolean;
}
export interface DeleteFleetError {
  Code?: DeleteFleetErrorCode;
  Message?: string;
}
export type DeleteFleetErrorCode = "FLEET_ID_DOES_NOT_EXIST" | "FLEET_ID_MALFORMED" | "FLEET_NOT_IN_DELETABLE_STATE" | "UNEXPECTED_ERROR";
export interface DeleteFleetErrorItem {
  Error?: DeleteFleetError;
  FleetId?: string;
}
export type DeleteFleetErrorSet = Array<DeleteFleetErrorItem>;
export interface DeleteFleetsRequest {
  DryRun?: boolean;
  FleetIds: Array<string>;
  TerminateInstances: boolean;
}
export interface DeleteFleetsResult {
  SuccessfulFleetDeletions?: Array<DeleteFleetSuccessItem>;
  UnsuccessfulFleetDeletions?: Array<DeleteFleetErrorItem>;
}
export interface DeleteFleetSuccessItem {
  CurrentFleetState?: FleetStateCode;
  PreviousFleetState?: FleetStateCode;
  FleetId?: string;
}
export type DeleteFleetSuccessSet = Array<DeleteFleetSuccessItem>;
export interface DeleteFlowLogsRequest {
  DryRun?: boolean;
  FlowLogIds: Array<string>;
}
export interface DeleteFlowLogsResult {
  Unsuccessful?: Array<UnsuccessfulItem>;
}
export interface DeleteFpgaImageRequest {
  DryRun?: boolean;
  FpgaImageId: string;
}
export interface DeleteFpgaImageResult {
  Return?: boolean;
}
export interface DeleteInstanceConnectEndpointRequest {
  DryRun?: boolean;
  InstanceConnectEndpointId: string;
}
export interface DeleteInstanceConnectEndpointResult {
  InstanceConnectEndpoint?: Ec2InstanceConnectEndpoint;
}
export interface DeleteInstanceEventWindowRequest {
  DryRun?: boolean;
  ForceDelete?: boolean;
  InstanceEventWindowId: string;
}
export interface DeleteInstanceEventWindowResult {
  InstanceEventWindowState?: InstanceEventWindowStateChange;
}
export interface DeleteInternetGatewayRequest {
  DryRun?: boolean;
  InternetGatewayId: string;
}
export interface DeleteIpamExternalResourceVerificationTokenRequest {
  DryRun?: boolean;
  IpamExternalResourceVerificationTokenId: string;
}
export interface DeleteIpamExternalResourceVerificationTokenResult {
  IpamExternalResourceVerificationToken?: IpamExternalResourceVerificationToken;
}
export interface DeleteIpamPoolRequest {
  DryRun?: boolean;
  IpamPoolId: string;
  Cascade?: boolean;
}
export interface DeleteIpamPoolResult {
  IpamPool?: IpamPool;
}
export interface DeleteIpamRequest {
  DryRun?: boolean;
  IpamId: string;
  Cascade?: boolean;
}
export interface DeleteIpamResourceDiscoveryRequest {
  DryRun?: boolean;
  IpamResourceDiscoveryId: string;
}
export interface DeleteIpamResourceDiscoveryResult {
  IpamResourceDiscovery?: IpamResourceDiscovery;
}
export interface DeleteIpamResult {
  Ipam?: Ipam;
}
export interface DeleteIpamScopeRequest {
  DryRun?: boolean;
  IpamScopeId: string;
}
export interface DeleteIpamScopeResult {
  IpamScope?: IpamScope;
}
export interface DeleteKeyPairRequest {
  KeyName?: string;
  KeyPairId?: string;
  DryRun?: boolean;
}
export interface DeleteKeyPairResult {
  Return?: boolean;
  KeyPairId?: string;
}
export interface DeleteLaunchTemplateRequest {
  DryRun?: boolean;
  LaunchTemplateId?: string;
  LaunchTemplateName?: string;
}
export interface DeleteLaunchTemplateResult {
  LaunchTemplate?: LaunchTemplate;
}
export interface DeleteLaunchTemplateVersionsRequest {
  DryRun?: boolean;
  LaunchTemplateId?: string;
  LaunchTemplateName?: string;
  Versions: Array<string>;
}
export interface DeleteLaunchTemplateVersionsResponseErrorItem {
  LaunchTemplateId?: string;
  LaunchTemplateName?: string;
  VersionNumber?: number;
  ResponseError?: ResponseError;
}
export type DeleteLaunchTemplateVersionsResponseErrorSet = Array<DeleteLaunchTemplateVersionsResponseErrorItem>;
export interface DeleteLaunchTemplateVersionsResponseSuccessItem {
  LaunchTemplateId?: string;
  LaunchTemplateName?: string;
  VersionNumber?: number;
}
export type DeleteLaunchTemplateVersionsResponseSuccessSet = Array<DeleteLaunchTemplateVersionsResponseSuccessItem>;
export interface DeleteLaunchTemplateVersionsResult {
  SuccessfullyDeletedLaunchTemplateVersions?: Array<DeleteLaunchTemplateVersionsResponseSuccessItem>;
  UnsuccessfullyDeletedLaunchTemplateVersions?: Array<DeleteLaunchTemplateVersionsResponseErrorItem>;
}
export interface DeleteLocalGatewayRouteRequest {
  DestinationCidrBlock?: string;
  LocalGatewayRouteTableId: string;
  DryRun?: boolean;
  DestinationPrefixListId?: string;
}
export interface DeleteLocalGatewayRouteResult {
  Route?: LocalGatewayRoute;
}
export interface DeleteLocalGatewayRouteTableRequest {
  LocalGatewayRouteTableId: string;
  DryRun?: boolean;
}
export interface DeleteLocalGatewayRouteTableResult {
  LocalGatewayRouteTable?: LocalGatewayRouteTable;
}
export interface DeleteLocalGatewayRouteTableVirtualInterfaceGroupAssociationRequest {
  LocalGatewayRouteTableVirtualInterfaceGroupAssociationId: string;
  DryRun?: boolean;
}
export interface DeleteLocalGatewayRouteTableVirtualInterfaceGroupAssociationResult {
  LocalGatewayRouteTableVirtualInterfaceGroupAssociation?: LocalGatewayRouteTableVirtualInterfaceGroupAssociation;
}
export interface DeleteLocalGatewayRouteTableVpcAssociationRequest {
  LocalGatewayRouteTableVpcAssociationId: string;
  DryRun?: boolean;
}
export interface DeleteLocalGatewayRouteTableVpcAssociationResult {
  LocalGatewayRouteTableVpcAssociation?: LocalGatewayRouteTableVpcAssociation;
}
export interface DeleteLocalGatewayVirtualInterfaceGroupRequest {
  LocalGatewayVirtualInterfaceGroupId: string;
  DryRun?: boolean;
}
export interface DeleteLocalGatewayVirtualInterfaceGroupResult {
  LocalGatewayVirtualInterfaceGroup?: LocalGatewayVirtualInterfaceGroup;
}
export interface DeleteLocalGatewayVirtualInterfaceRequest {
  LocalGatewayVirtualInterfaceId: string;
  DryRun?: boolean;
}
export interface DeleteLocalGatewayVirtualInterfaceResult {
  LocalGatewayVirtualInterface?: LocalGatewayVirtualInterface;
}
export interface DeleteManagedPrefixListRequest {
  DryRun?: boolean;
  PrefixListId: string;
}
export interface DeleteManagedPrefixListResult {
  PrefixList?: ManagedPrefixList;
}
export interface DeleteNatGatewayRequest {
  DryRun?: boolean;
  NatGatewayId: string;
}
export interface DeleteNatGatewayResult {
  NatGatewayId?: string;
}
export interface DeleteNetworkAclEntryRequest {
  DryRun?: boolean;
  NetworkAclId: string;
  RuleNumber: number;
  Egress: boolean;
}
export interface DeleteNetworkAclRequest {
  DryRun?: boolean;
  NetworkAclId: string;
}
export interface DeleteNetworkInsightsAccessScopeAnalysisRequest {
  NetworkInsightsAccessScopeAnalysisId: string;
  DryRun?: boolean;
}
export interface DeleteNetworkInsightsAccessScopeAnalysisResult {
  NetworkInsightsAccessScopeAnalysisId?: string;
}
export interface DeleteNetworkInsightsAccessScopeRequest {
  DryRun?: boolean;
  NetworkInsightsAccessScopeId: string;
}
export interface DeleteNetworkInsightsAccessScopeResult {
  NetworkInsightsAccessScopeId?: string;
}
export interface DeleteNetworkInsightsAnalysisRequest {
  DryRun?: boolean;
  NetworkInsightsAnalysisId: string;
}
export interface DeleteNetworkInsightsAnalysisResult {
  NetworkInsightsAnalysisId?: string;
}
export interface DeleteNetworkInsightsPathRequest {
  DryRun?: boolean;
  NetworkInsightsPathId: string;
}
export interface DeleteNetworkInsightsPathResult {
  NetworkInsightsPathId?: string;
}
export interface DeleteNetworkInterfacePermissionRequest {
  NetworkInterfacePermissionId: string;
  Force?: boolean;
  DryRun?: boolean;
}
export interface DeleteNetworkInterfacePermissionResult {
  Return?: boolean;
}
export interface DeleteNetworkInterfaceRequest {
  DryRun?: boolean;
  NetworkInterfaceId: string;
}
export interface DeletePlacementGroupRequest {
  DryRun?: boolean;
  GroupName: string;
}
export interface DeletePublicIpv4PoolRequest {
  DryRun?: boolean;
  PoolId: string;
  NetworkBorderGroup?: string;
}
export interface DeletePublicIpv4PoolResult {
  ReturnValue?: boolean;
}
export interface DeleteQueuedReservedInstancesError {
  Code?: DeleteQueuedReservedInstancesErrorCode;
  Message?: string;
}
export type DeleteQueuedReservedInstancesErrorCode = "RESERVED_INSTANCES_ID_INVALID" | "RESERVED_INSTANCES_NOT_IN_QUEUED_STATE" | "UNEXPECTED_ERROR";
export type DeleteQueuedReservedInstancesIdList = Array<string>;
export interface DeleteQueuedReservedInstancesRequest {
  DryRun?: boolean;
  ReservedInstancesIds: Array<string>;
}
export interface DeleteQueuedReservedInstancesResult {
  SuccessfulQueuedPurchaseDeletions?: Array<SuccessfulQueuedPurchaseDeletion>;
  FailedQueuedPurchaseDeletions?: Array<FailedQueuedPurchaseDeletion>;
}
export interface DeleteRouteRequest {
  DestinationPrefixListId?: string;
  DryRun?: boolean;
  RouteTableId: string;
  DestinationCidrBlock?: string;
  DestinationIpv6CidrBlock?: string;
}
export interface DeleteRouteServerEndpointRequest {
  RouteServerEndpointId: string;
  DryRun?: boolean;
}
export interface DeleteRouteServerEndpointResult {
  RouteServerEndpoint?: RouteServerEndpoint;
}
export interface DeleteRouteServerPeerRequest {
  RouteServerPeerId: string;
  DryRun?: boolean;
}
export interface DeleteRouteServerPeerResult {
  RouteServerPeer?: RouteServerPeer;
}
export interface DeleteRouteServerRequest {
  RouteServerId: string;
  DryRun?: boolean;
}
export interface DeleteRouteServerResult {
  RouteServer?: RouteServer;
}
export interface DeleteRouteTableRequest {
  DryRun?: boolean;
  RouteTableId: string;
}
export interface DeleteSecurityGroupRequest {
  GroupId?: string;
  GroupName?: string;
  DryRun?: boolean;
}
export interface DeleteSecurityGroupResult {
  Return?: boolean;
  GroupId?: string;
}
export interface DeleteSnapshotRequest {
  SnapshotId: string;
  DryRun?: boolean;
}
export type DeleteSnapshotResultSet = Array<DeleteSnapshotReturnCode>;
export interface DeleteSnapshotReturnCode {
  SnapshotId?: string;
  ReturnCode?: SnapshotReturnCodes;
}
export interface DeleteSpotDatafeedSubscriptionRequest {
  DryRun?: boolean;
}
export interface DeleteSubnetCidrReservationRequest {
  SubnetCidrReservationId: string;
  DryRun?: boolean;
}
export interface DeleteSubnetCidrReservationResult {
  DeletedSubnetCidrReservation?: SubnetCidrReservation;
}
export interface DeleteSubnetRequest {
  SubnetId: string;
  DryRun?: boolean;
}
export interface DeleteTagsRequest {
  DryRun?: boolean;
  Resources: Array<string>;
  Tags?: Array<Tag>;
}
export interface DeleteTrafficMirrorFilterRequest {
  TrafficMirrorFilterId: string;
  DryRun?: boolean;
}
export interface DeleteTrafficMirrorFilterResult {
  TrafficMirrorFilterId?: string;
}
export interface DeleteTrafficMirrorFilterRuleRequest {
  TrafficMirrorFilterRuleId: string;
  DryRun?: boolean;
}
export interface DeleteTrafficMirrorFilterRuleResult {
  TrafficMirrorFilterRuleId?: string;
}
export interface DeleteTrafficMirrorSessionRequest {
  TrafficMirrorSessionId: string;
  DryRun?: boolean;
}
export interface DeleteTrafficMirrorSessionResult {
  TrafficMirrorSessionId?: string;
}
export interface DeleteTrafficMirrorTargetRequest {
  TrafficMirrorTargetId: string;
  DryRun?: boolean;
}
export interface DeleteTrafficMirrorTargetResult {
  TrafficMirrorTargetId?: string;
}
export interface DeleteTransitGatewayConnectPeerRequest {
  TransitGatewayConnectPeerId: string;
  DryRun?: boolean;
}
export interface DeleteTransitGatewayConnectPeerResult {
  TransitGatewayConnectPeer?: TransitGatewayConnectPeer;
}
export interface DeleteTransitGatewayConnectRequest {
  TransitGatewayAttachmentId: string;
  DryRun?: boolean;
}
export interface DeleteTransitGatewayConnectResult {
  TransitGatewayConnect?: TransitGatewayConnect;
}
export interface DeleteTransitGatewayMulticastDomainRequest {
  TransitGatewayMulticastDomainId: string;
  DryRun?: boolean;
}
export interface DeleteTransitGatewayMulticastDomainResult {
  TransitGatewayMulticastDomain?: TransitGatewayMulticastDomain;
}
export interface DeleteTransitGatewayPeeringAttachmentRequest {
  TransitGatewayAttachmentId: string;
  DryRun?: boolean;
}
export interface DeleteTransitGatewayPeeringAttachmentResult {
  TransitGatewayPeeringAttachment?: TransitGatewayPeeringAttachment;
}
export interface DeleteTransitGatewayPolicyTableRequest {
  TransitGatewayPolicyTableId: string;
  DryRun?: boolean;
}
export interface DeleteTransitGatewayPolicyTableResult {
  TransitGatewayPolicyTable?: TransitGatewayPolicyTable;
}
export interface DeleteTransitGatewayPrefixListReferenceRequest {
  TransitGatewayRouteTableId: string;
  PrefixListId: string;
  DryRun?: boolean;
}
export interface DeleteTransitGatewayPrefixListReferenceResult {
  TransitGatewayPrefixListReference?: TransitGatewayPrefixListReference;
}
export interface DeleteTransitGatewayRequest {
  TransitGatewayId: string;
  DryRun?: boolean;
}
export interface DeleteTransitGatewayResult {
  TransitGateway?: TransitGateway;
}
export interface DeleteTransitGatewayRouteRequest {
  TransitGatewayRouteTableId: string;
  DestinationCidrBlock: string;
  DryRun?: boolean;
}
export interface DeleteTransitGatewayRouteResult {
  Route?: TransitGatewayRoute;
}
export interface DeleteTransitGatewayRouteTableAnnouncementRequest {
  TransitGatewayRouteTableAnnouncementId: string;
  DryRun?: boolean;
}
export interface DeleteTransitGatewayRouteTableAnnouncementResult {
  TransitGatewayRouteTableAnnouncement?: TransitGatewayRouteTableAnnouncement;
}
export interface DeleteTransitGatewayRouteTableRequest {
  TransitGatewayRouteTableId: string;
  DryRun?: boolean;
}
export interface DeleteTransitGatewayRouteTableResult {
  TransitGatewayRouteTable?: TransitGatewayRouteTable;
}
export interface DeleteTransitGatewayVpcAttachmentRequest {
  TransitGatewayAttachmentId: string;
  DryRun?: boolean;
}
export interface DeleteTransitGatewayVpcAttachmentResult {
  TransitGatewayVpcAttachment?: TransitGatewayVpcAttachment;
}
export interface DeleteVerifiedAccessEndpointRequest {
  VerifiedAccessEndpointId: string;
  ClientToken?: string;
  DryRun?: boolean;
}
export interface DeleteVerifiedAccessEndpointResult {
  VerifiedAccessEndpoint?: VerifiedAccessEndpoint;
}
export interface DeleteVerifiedAccessGroupRequest {
  VerifiedAccessGroupId: string;
  ClientToken?: string;
  DryRun?: boolean;
}
export interface DeleteVerifiedAccessGroupResult {
  VerifiedAccessGroup?: VerifiedAccessGroup;
}
export interface DeleteVerifiedAccessInstanceRequest {
  VerifiedAccessInstanceId: string;
  DryRun?: boolean;
  ClientToken?: string;
}
export interface DeleteVerifiedAccessInstanceResult {
  VerifiedAccessInstance?: VerifiedAccessInstance;
}
export interface DeleteVerifiedAccessTrustProviderRequest {
  VerifiedAccessTrustProviderId: string;
  DryRun?: boolean;
  ClientToken?: string;
}
export interface DeleteVerifiedAccessTrustProviderResult {
  VerifiedAccessTrustProvider?: VerifiedAccessTrustProvider;
}
export interface DeleteVolumeRequest {
  VolumeId: string;
  DryRun?: boolean;
}
export interface DeleteVpcBlockPublicAccessExclusionRequest {
  DryRun?: boolean;
  ExclusionId: string;
}
export interface DeleteVpcBlockPublicAccessExclusionResult {
  VpcBlockPublicAccessExclusion?: VpcBlockPublicAccessExclusion;
}
export interface DeleteVpcEndpointConnectionNotificationsRequest {
  DryRun?: boolean;
  ConnectionNotificationIds: Array<string>;
}
export interface DeleteVpcEndpointConnectionNotificationsResult {
  Unsuccessful?: Array<UnsuccessfulItem>;
}
export interface DeleteVpcEndpointServiceConfigurationsRequest {
  DryRun?: boolean;
  ServiceIds: Array<string>;
}
export interface DeleteVpcEndpointServiceConfigurationsResult {
  Unsuccessful?: Array<UnsuccessfulItem>;
}
export interface DeleteVpcEndpointsRequest {
  DryRun?: boolean;
  VpcEndpointIds: Array<string>;
}
export interface DeleteVpcEndpointsResult {
  Unsuccessful?: Array<UnsuccessfulItem>;
}
export interface DeleteVpcPeeringConnectionRequest {
  DryRun?: boolean;
  VpcPeeringConnectionId: string;
}
export interface DeleteVpcPeeringConnectionResult {
  Return?: boolean;
}
export interface DeleteVpcRequest {
  VpcId: string;
  DryRun?: boolean;
}
export interface DeleteVpnConnectionRequest {
  VpnConnectionId: string;
  DryRun?: boolean;
}
export interface DeleteVpnConnectionRouteRequest {
  DestinationCidrBlock: string;
  VpnConnectionId: string;
}
export interface DeleteVpnGatewayRequest {
  VpnGatewayId: string;
  DryRun?: boolean;
}
export interface DeprovisionByoipCidrRequest {
  Cidr: string;
  DryRun?: boolean;
}
export interface DeprovisionByoipCidrResult {
  ByoipCidr?: ByoipCidr;
}
export type DeprovisionedAddressSet = Array<string>;
export interface DeprovisionIpamByoasnRequest {
  DryRun?: boolean;
  IpamId: string;
  Asn: string;
}
export interface DeprovisionIpamByoasnResult {
  Byoasn?: Byoasn;
}
export interface DeprovisionIpamPoolCidrRequest {
  DryRun?: boolean;
  IpamPoolId: string;
  Cidr?: string;
}
export interface DeprovisionIpamPoolCidrResult {
  IpamPoolCidr?: IpamPoolCidr;
}
export interface DeprovisionPublicIpv4PoolCidrRequest {
  DryRun?: boolean;
  PoolId: string;
  Cidr: string;
}
export interface DeprovisionPublicIpv4PoolCidrResult {
  PoolId?: string;
  DeprovisionedAddresses?: Array<string>;
}
export interface DeregisterImageRequest {
  ImageId: string;
  DeleteAssociatedSnapshots?: boolean;
  DryRun?: boolean;
}
export interface DeregisterImageResult {
  Return?: boolean;
  DeleteSnapshotResults?: Array<DeleteSnapshotReturnCode>;
}
export interface DeregisterInstanceEventNotificationAttributesRequest {
  DryRun?: boolean;
  InstanceTagAttribute: DeregisterInstanceTagAttributeRequest;
}
export interface DeregisterInstanceEventNotificationAttributesResult {
  InstanceTagAttribute?: InstanceTagNotificationAttribute;
}
export interface DeregisterInstanceTagAttributeRequest {
  IncludeAllTagsOfInstance?: boolean;
  InstanceTagKeys?: Array<string>;
}
export interface DeregisterTransitGatewayMulticastGroupMembersRequest {
  TransitGatewayMulticastDomainId?: string;
  GroupIpAddress?: string;
  NetworkInterfaceIds?: Array<string>;
  DryRun?: boolean;
}
export interface DeregisterTransitGatewayMulticastGroupMembersResult {
  DeregisteredMulticastGroupMembers?: TransitGatewayMulticastDeregisteredGroupMembers;
}
export interface DeregisterTransitGatewayMulticastGroupSourcesRequest {
  TransitGatewayMulticastDomainId?: string;
  GroupIpAddress?: string;
  NetworkInterfaceIds?: Array<string>;
  DryRun?: boolean;
}
export interface DeregisterTransitGatewayMulticastGroupSourcesResult {
  DeregisteredMulticastGroupSources?: TransitGatewayMulticastDeregisteredGroupSources;
}
export interface DescribeAccountAttributesRequest {
  DryRun?: boolean;
  AttributeNames?: Array<AccountAttributeName>;
}
export interface DescribeAccountAttributesResult {
  AccountAttributes?: Array<AccountAttribute>;
}
export interface DescribeAddressesAttributeRequest {
  AllocationIds?: Array<string>;
  Attribute?: AddressAttributeName;
  NextToken?: string;
  MaxResults?: number;
  DryRun?: boolean;
}
export interface DescribeAddressesAttributeResult {
  Addresses?: Array<AddressAttribute>;
  NextToken?: string;
}
export interface DescribeAddressesRequest {
  PublicIps?: Array<string>;
  DryRun?: boolean;
  Filters?: Array<Filter>;
  AllocationIds?: Array<string>;
}
export interface DescribeAddressesResult {
  Addresses?: Array<Address>;
}
export type DescribeAddressTransfersMaxResults = number;

export interface DescribeAddressTransfersRequest {
  AllocationIds?: Array<string>;
  NextToken?: string;
  MaxResults?: number;
  DryRun?: boolean;
}
export interface DescribeAddressTransfersResult {
  AddressTransfers?: Array<AddressTransfer>;
  NextToken?: string;
}
export interface DescribeAggregateIdFormatRequest {
  DryRun?: boolean;
}
export interface DescribeAggregateIdFormatResult {
  UseLongIdsAggregated?: boolean;
  Statuses?: Array<IdFormat>;
}
export interface DescribeAvailabilityZonesRequest {
  ZoneNames?: Array<string>;
  ZoneIds?: Array<string>;
  AllAvailabilityZones?: boolean;
  DryRun?: boolean;
  Filters?: Array<Filter>;
}
export interface DescribeAvailabilityZonesResult {
  AvailabilityZones?: Array<AvailabilityZone>;
}
export interface DescribeAwsNetworkPerformanceMetricSubscriptionsRequest {
  MaxResults?: number;
  NextToken?: string;
  Filters?: Array<Filter>;
  DryRun?: boolean;
}
export interface DescribeAwsNetworkPerformanceMetricSubscriptionsResult {
  NextToken?: string;
  Subscriptions?: Array<Subscription>;
}
export interface DescribeBundleTasksRequest {
  BundleIds?: Array<string>;
  DryRun?: boolean;
  Filters?: Array<Filter>;
}
export interface DescribeBundleTasksResult {
  BundleTasks?: Array<BundleTask>;
}
export type DescribeByoipCidrsMaxResults = number;

export interface DescribeByoipCidrsRequest {
  DryRun?: boolean;
  MaxResults: number;
  NextToken?: string;
}
export interface DescribeByoipCidrsResult {
  ByoipCidrs?: Array<ByoipCidr>;
  NextToken?: string;
}
export interface DescribeCapacityBlockExtensionHistoryRequest {
  CapacityReservationIds?: Array<string>;
  NextToken?: string;
  MaxResults?: number;
  Filters?: Array<Filter>;
  DryRun?: boolean;
}
export interface DescribeCapacityBlockExtensionHistoryResult {
  CapacityBlockExtensions?: Array<CapacityBlockExtension>;
  NextToken?: string;
}
export type DescribeCapacityBlockExtensionOfferingsMaxResults = number;

export interface DescribeCapacityBlockExtensionOfferingsRequest {
  DryRun?: boolean;
  CapacityBlockExtensionDurationHours: number;
  CapacityReservationId: string;
  NextToken?: string;
  MaxResults?: number;
}
export interface DescribeCapacityBlockExtensionOfferingsResult {
  CapacityBlockExtensionOfferings?: Array<CapacityBlockExtensionOffering>;
  NextToken?: string;
}
export type DescribeCapacityBlockOfferingsMaxResults = number;

export interface DescribeCapacityBlockOfferingsRequest {
  DryRun?: boolean;
  InstanceType?: string;
  InstanceCount?: number;
  StartDateRange?: Date | string;
  EndDateRange?: Date | string;
  CapacityDurationHours: number;
  NextToken?: string;
  MaxResults?: number;
  UltraserverType?: string;
  UltraserverCount?: number;
}
export interface DescribeCapacityBlockOfferingsResult {
  CapacityBlockOfferings?: Array<CapacityBlockOffering>;
  NextToken?: string;
}
export type DescribeCapacityBlocksMaxResults = number;

export interface DescribeCapacityBlocksRequest {
  CapacityBlockIds?: Array<string>;
  NextToken?: string;
  MaxResults?: number;
  Filters?: Array<Filter>;
  DryRun?: boolean;
}
export interface DescribeCapacityBlocksResult {
  CapacityBlocks?: Array<CapacityBlock>;
  NextToken?: string;
}
export type DescribeCapacityBlockStatusMaxResults = number;

export interface DescribeCapacityBlockStatusRequest {
  CapacityBlockIds?: Array<string>;
  NextToken?: string;
  MaxResults?: number;
  Filters?: Array<Filter>;
  DryRun?: boolean;
}
export interface DescribeCapacityBlockStatusResult {
  CapacityBlockStatuses?: Array<CapacityBlockStatus>;
  NextToken?: string;
}
export interface DescribeCapacityReservationBillingRequestsRequest {
  CapacityReservationIds?: Array<string>;
  Role: CallerRole;
  NextToken?: string;
  MaxResults?: number;
  Filters?: Array<Filter>;
  DryRun?: boolean;
}
export type DescribeCapacityReservationBillingRequestsRequestMaxResults = number;

export interface DescribeCapacityReservationBillingRequestsResult {
  NextToken?: string;
  CapacityReservationBillingRequests?: Array<CapacityReservationBillingRequest>;
}
export type DescribeCapacityReservationFleetsMaxResults = number;

export interface DescribeCapacityReservationFleetsRequest {
  CapacityReservationFleetIds?: Array<string>;
  NextToken?: string;
  MaxResults?: number;
  Filters?: Array<Filter>;
  DryRun?: boolean;
}
export interface DescribeCapacityReservationFleetsResult {
  CapacityReservationFleets?: Array<CapacityReservationFleet>;
  NextToken?: string;
}
export type DescribeCapacityReservationsMaxResults = number;

export interface DescribeCapacityReservationsRequest {
  CapacityReservationIds?: Array<string>;
  NextToken?: string;
  MaxResults?: number;
  Filters?: Array<Filter>;
  DryRun?: boolean;
}
export interface DescribeCapacityReservationsResult {
  NextToken?: string;
  CapacityReservations?: Array<CapacityReservation>;
}
export interface DescribeCarrierGatewaysRequest {
  CarrierGatewayIds?: Array<string>;
  Filters?: Array<Filter>;
  MaxResults?: number;
  NextToken?: string;
  DryRun?: boolean;
}
export interface DescribeCarrierGatewaysResult {
  CarrierGateways?: Array<CarrierGateway>;
  NextToken?: string;
}
export type DescribeClassicLinkInstancesMaxResults = number;

export interface DescribeClassicLinkInstancesRequest {
  DryRun?: boolean;
  InstanceIds?: Array<string>;
  Filters?: Array<Filter>;
  NextToken?: string;
  MaxResults?: number;
}
export interface DescribeClassicLinkInstancesResult {
  Instances?: Array<ClassicLinkInstance>;
  NextToken?: string;
}
export type DescribeClientVpnAuthorizationRulesMaxResults = number;

export interface DescribeClientVpnAuthorizationRulesRequest {
  ClientVpnEndpointId: string;
  DryRun?: boolean;
  NextToken?: string;
  Filters?: Array<Filter>;
  MaxResults?: number;
}
export interface DescribeClientVpnAuthorizationRulesResult {
  AuthorizationRules?: Array<AuthorizationRule>;
  NextToken?: string;
}
export type DescribeClientVpnConnectionsMaxResults = number;

export interface DescribeClientVpnConnectionsRequest {
  ClientVpnEndpointId: string;
  Filters?: Array<Filter>;
  NextToken?: string;
  MaxResults?: number;
  DryRun?: boolean;
}
export interface DescribeClientVpnConnectionsResult {
  Connections?: Array<ClientVpnConnection>;
  NextToken?: string;
}
export type DescribeClientVpnEndpointMaxResults = number;

export interface DescribeClientVpnEndpointsRequest {
  ClientVpnEndpointIds?: Array<string>;
  MaxResults?: number;
  NextToken?: string;
  Filters?: Array<Filter>;
  DryRun?: boolean;
}
export interface DescribeClientVpnEndpointsResult {
  ClientVpnEndpoints?: Array<ClientVpnEndpoint>;
  NextToken?: string;
}
export type DescribeClientVpnRoutesMaxResults = number;

export interface DescribeClientVpnRoutesRequest {
  ClientVpnEndpointId: string;
  Filters?: Array<Filter>;
  MaxResults?: number;
  NextToken?: string;
  DryRun?: boolean;
}
export interface DescribeClientVpnRoutesResult {
  Routes?: Array<ClientVpnRoute>;
  NextToken?: string;
}
export type DescribeClientVpnTargetNetworksMaxResults = number;

export interface DescribeClientVpnTargetNetworksRequest {
  ClientVpnEndpointId: string;
  AssociationIds?: Array<string>;
  MaxResults?: number;
  NextToken?: string;
  Filters?: Array<Filter>;
  DryRun?: boolean;
}
export interface DescribeClientVpnTargetNetworksResult {
  ClientVpnTargetNetworks?: Array<TargetNetwork>;
  NextToken?: string;
}
export interface DescribeCoipPoolsRequest {
  PoolIds?: Array<string>;
  Filters?: Array<Filter>;
  MaxResults?: number;
  NextToken?: string;
  DryRun?: boolean;
}
export interface DescribeCoipPoolsResult {
  CoipPools?: Array<CoipPool>;
  NextToken?: string;
}
export type DescribeConversionTaskList = Array<ConversionTask>;
export interface DescribeConversionTasksRequest {
  DryRun?: boolean;
  ConversionTaskIds?: Array<string>;
}
export interface DescribeConversionTasksResult {
  ConversionTasks?: Array<ConversionTask>;
}
export interface DescribeCustomerGatewaysRequest {
  CustomerGatewayIds?: Array<string>;
  Filters?: Array<Filter>;
  DryRun?: boolean;
}
export interface DescribeCustomerGatewaysResult {
  CustomerGateways?: Array<CustomerGateway>;
}
export interface DescribeDeclarativePoliciesReportsRequest {
  DryRun?: boolean;
  NextToken?: string;
  MaxResults?: number;
  ReportIds?: Array<string>;
}
export interface DescribeDeclarativePoliciesReportsResult {
  NextToken?: string;
  Reports?: Array<DeclarativePoliciesReport>;
}
export type DescribeDhcpOptionsMaxResults = number;

export interface DescribeDhcpOptionsRequest {
  DhcpOptionsIds?: Array<string>;
  NextToken?: string;
  MaxResults?: number;
  DryRun?: boolean;
  Filters?: Array<Filter>;
}
export interface DescribeDhcpOptionsResult {
  NextToken?: string;
  DhcpOptions?: Array<DhcpOptions>;
}
export type DescribeEgressOnlyInternetGatewaysMaxResults = number;

export interface DescribeEgressOnlyInternetGatewaysRequest {
  DryRun?: boolean;
  EgressOnlyInternetGatewayIds?: Array<string>;
  MaxResults?: number;
  NextToken?: string;
  Filters?: Array<Filter>;
}
export interface DescribeEgressOnlyInternetGatewaysResult {
  EgressOnlyInternetGateways?: Array<EgressOnlyInternetGateway>;
  NextToken?: string;
}
export type DescribeElasticGpusMaxResults = number;

export interface DescribeElasticGpusRequest {
  ElasticGpuIds?: Array<string>;
  DryRun?: boolean;
  Filters?: Array<Filter>;
  MaxResults?: number;
  NextToken?: string;
}
export interface DescribeElasticGpusResult {
  ElasticGpuSet?: Array<ElasticGpus>;
  MaxResults?: number;
  NextToken?: string;
}
export type DescribeExportImageTasksMaxResults = number;

export interface DescribeExportImageTasksRequest {
  DryRun?: boolean;
  Filters?: Array<Filter>;
  ExportImageTaskIds?: Array<string>;
  MaxResults?: number;
  NextToken?: string;
}
export interface DescribeExportImageTasksResult {
  ExportImageTasks?: Array<ExportImageTask>;
  NextToken?: string;
}
export interface DescribeExportTasksRequest {
  Filters?: Array<Filter>;
  ExportTaskIds?: Array<string>;
}
export interface DescribeExportTasksResult {
  ExportTasks?: Array<ExportTask>;
}
export interface DescribeFastLaunchImagesRequest {
  ImageIds?: Array<string>;
  Filters?: Array<Filter>;
  MaxResults?: number;
  NextToken?: string;
  DryRun?: boolean;
}
export type DescribeFastLaunchImagesRequestMaxResults = number;

export interface DescribeFastLaunchImagesResult {
  FastLaunchImages?: Array<DescribeFastLaunchImagesSuccessItem>;
  NextToken?: string;
}
export interface DescribeFastLaunchImagesSuccessItem {
  ImageId?: string;
  ResourceType?: FastLaunchResourceType;
  SnapshotConfiguration?: FastLaunchSnapshotConfigurationResponse;
  LaunchTemplate?: FastLaunchLaunchTemplateSpecificationResponse;
  MaxParallelLaunches?: number;
  OwnerId?: string;
  State?: FastLaunchStateCode;
  StateTransitionReason?: string;
  StateTransitionTime?: Date | string;
}
export type DescribeFastLaunchImagesSuccessSet = Array<DescribeFastLaunchImagesSuccessItem>;
export type DescribeFastSnapshotRestoresMaxResults = number;

export interface DescribeFastSnapshotRestoresRequest {
  Filters?: Array<Filter>;
  MaxResults?: number;
  NextToken?: string;
  DryRun?: boolean;
}
export interface DescribeFastSnapshotRestoresResult {
  FastSnapshotRestores?: Array<DescribeFastSnapshotRestoreSuccessItem>;
  NextToken?: string;
}
export interface DescribeFastSnapshotRestoreSuccessItem {
  SnapshotId?: string;
  AvailabilityZone?: string;
  State?: FastSnapshotRestoreStateCode;
  StateTransitionReason?: string;
  OwnerId?: string;
  OwnerAlias?: string;
  EnablingTime?: Date | string;
  OptimizingTime?: Date | string;
  EnabledTime?: Date | string;
  DisablingTime?: Date | string;
  DisabledTime?: Date | string;
}
export type DescribeFastSnapshotRestoreSuccessSet = Array<DescribeFastSnapshotRestoreSuccessItem>;
export interface DescribeFleetError {
  LaunchTemplateAndOverrides?: LaunchTemplateAndOverridesResponse;
  Lifecycle?: InstanceLifecycle;
  ErrorCode?: string;
  ErrorMessage?: string;
}
export interface DescribeFleetHistoryRequest {
  DryRun?: boolean;
  EventType?: FleetEventType;
  MaxResults?: number;
  NextToken?: string;
  FleetId: string;
  StartTime: Date | string;
}
export interface DescribeFleetHistoryResult {
  HistoryRecords?: Array<HistoryRecordEntry>;
  LastEvaluatedTime?: Date | string;
  NextToken?: string;
  FleetId?: string;
  StartTime?: Date | string;
}
export interface DescribeFleetInstancesRequest {
  DryRun?: boolean;
  MaxResults?: number;
  NextToken?: string;
  FleetId: string;
  Filters?: Array<Filter>;
}
export interface DescribeFleetInstancesResult {
  ActiveInstances?: Array<ActiveInstance>;
  NextToken?: string;
  FleetId?: string;
}
export type DescribeFleetsErrorSet = Array<DescribeFleetError>;
export interface DescribeFleetsInstances {
  LaunchTemplateAndOverrides?: LaunchTemplateAndOverridesResponse;
  Lifecycle?: InstanceLifecycle;
  InstanceIds?: Array<string>;
  InstanceType?: InstanceType;
  Platform?: PlatformValues;
}
export type DescribeFleetsInstancesSet = Array<DescribeFleetsInstances>;
export interface DescribeFleetsRequest {
  DryRun?: boolean;
  MaxResults?: number;
  NextToken?: string;
  FleetIds?: Array<string>;
  Filters?: Array<Filter>;
}
export interface DescribeFleetsResult {
  NextToken?: string;
  Fleets?: Array<FleetData>;
}
export interface DescribeFlowLogsRequest {
  DryRun?: boolean;
  Filter?: Array<Filter>;
  FlowLogIds?: Array<string>;
  MaxResults?: number;
  NextToken?: string;
}
export interface DescribeFlowLogsResult {
  FlowLogs?: Array<FlowLog>;
  NextToken?: string;
}
export interface DescribeFpgaImageAttributeRequest {
  DryRun?: boolean;
  FpgaImageId: string;
  Attribute: FpgaImageAttributeName;
}
export interface DescribeFpgaImageAttributeResult {
  FpgaImageAttribute?: FpgaImageAttribute;
}
export type DescribeFpgaImagesMaxResults = number;

export interface DescribeFpgaImagesRequest {
  DryRun?: boolean;
  FpgaImageIds?: Array<string>;
  Owners?: Array<string>;
  Filters?: Array<Filter>;
  NextToken?: string;
  MaxResults?: number;
}
export interface DescribeFpgaImagesResult {
  FpgaImages?: Array<FpgaImage>;
  NextToken?: string;
}
export type DescribeFutureCapacityMaxResults = number;

export interface DescribeHostReservationOfferingsRequest {
  Filter?: Array<Filter>;
  MaxDuration?: number;
  MaxResults?: number;
  MinDuration?: number;
  NextToken?: string;
  OfferingId?: string;
}
export interface DescribeHostReservationOfferingsResult {
  NextToken?: string;
  OfferingSet?: Array<HostOffering>;
}
export type DescribeHostReservationsMaxResults = number;

export interface DescribeHostReservationsRequest {
  Filter?: Array<Filter>;
  HostReservationIdSet?: Array<string>;
  MaxResults?: number;
  NextToken?: string;
}
export interface DescribeHostReservationsResult {
  HostReservationSet?: Array<HostReservation>;
  NextToken?: string;
}
export interface DescribeHostsRequest {
  HostIds?: Array<string>;
  NextToken?: string;
  MaxResults?: number;
  Filter?: Array<Filter>;
}
export interface DescribeHostsResult {
  Hosts?: Array<Host>;
  NextToken?: string;
}
export type DescribeIamInstanceProfileAssociationsMaxResults = number;

export interface DescribeIamInstanceProfileAssociationsRequest {
  AssociationIds?: Array<string>;
  Filters?: Array<Filter>;
  MaxResults?: number;
  NextToken?: string;
}
export interface DescribeIamInstanceProfileAssociationsResult {
  IamInstanceProfileAssociations?: Array<IamInstanceProfileAssociation>;
  NextToken?: string;
}
export interface DescribeIdentityIdFormatRequest {
  Resource?: string;
  PrincipalArn: string;
}
export interface DescribeIdentityIdFormatResult {
  Statuses?: Array<IdFormat>;
}
export interface DescribeIdFormatRequest {
  Resource?: string;
}
export interface DescribeIdFormatResult {
  Statuses?: Array<IdFormat>;
}
export interface DescribeImageAttributeRequest {
  Attribute: ImageAttributeName;
  ImageId: string;
  DryRun?: boolean;
}
export interface DescribeImagesRequest {
  ExecutableUsers?: Array<string>;
  ImageIds?: Array<string>;
  Owners?: Array<string>;
  IncludeDeprecated?: boolean;
  IncludeDisabled?: boolean;
  MaxResults?: number;
  NextToken?: string;
  DryRun?: boolean;
  Filters?: Array<Filter>;
}
export interface DescribeImagesResult {
  NextToken?: string;
  Images?: Array<Image>;
}
export interface DescribeImportImageTasksRequest {
  DryRun?: boolean;
  Filters?: Array<Filter>;
  ImportTaskIds?: Array<string>;
  MaxResults?: number;
  NextToken?: string;
}
export interface DescribeImportImageTasksResult {
  ImportImageTasks?: Array<ImportImageTask>;
  NextToken?: string;
}
export interface DescribeImportSnapshotTasksRequest {
  DryRun?: boolean;
  Filters?: Array<Filter>;
  ImportTaskIds?: Array<string>;
  MaxResults?: number;
  NextToken?: string;
}
export interface DescribeImportSnapshotTasksResult {
  ImportSnapshotTasks?: Array<ImportSnapshotTask>;
  NextToken?: string;
}
export interface DescribeInstanceAttributeRequest {
  DryRun?: boolean;
  InstanceId: string;
  Attribute: InstanceAttributeName;
}
export interface DescribeInstanceConnectEndpointsRequest {
  DryRun?: boolean;
  MaxResults?: number;
  NextToken?: string;
  Filters?: Array<Filter>;
  InstanceConnectEndpointIds?: Array<string>;
}
export interface DescribeInstanceConnectEndpointsResult {
  InstanceConnectEndpoints?: Array<Ec2InstanceConnectEndpoint>;
  NextToken?: string;
}
export type DescribeInstanceCreditSpecificationsMaxResults = number;

export interface DescribeInstanceCreditSpecificationsRequest {
  DryRun?: boolean;
  Filters?: Array<Filter>;
  InstanceIds?: Array<string>;
  MaxResults?: number;
  NextToken?: string;
}
export interface DescribeInstanceCreditSpecificationsResult {
  InstanceCreditSpecifications?: Array<InstanceCreditSpecification>;
  NextToken?: string;
}
export interface DescribeInstanceEventNotificationAttributesRequest {
  DryRun?: boolean;
}
export interface DescribeInstanceEventNotificationAttributesResult {
  InstanceTagAttribute?: InstanceTagNotificationAttribute;
}
export interface DescribeInstanceEventWindowsRequest {
  DryRun?: boolean;
  InstanceEventWindowIds?: Array<string>;
  Filters?: Array<Filter>;
  MaxResults?: number;
  NextToken?: string;
}
export interface DescribeInstanceEventWindowsResult {
  InstanceEventWindows?: Array<InstanceEventWindow>;
  NextToken?: string;
}
export type DescribeInstanceImageMetadataMaxResults = number;

export interface DescribeInstanceImageMetadataRequest {
  Filters?: Array<Filter>;
  InstanceIds?: Array<string>;
  MaxResults?: number;
  NextToken?: string;
  DryRun?: boolean;
}
export interface DescribeInstanceImageMetadataResult {
  InstanceImageMetadata?: Array<InstanceImageMetadata>;
  NextToken?: string;
}
export interface DescribeInstancesRequest {
  InstanceIds?: Array<string>;
  DryRun?: boolean;
  Filters?: Array<Filter>;
  NextToken?: string;
  MaxResults?: number;
}
export interface DescribeInstancesResult {
  NextToken?: string;
  Reservations?: Array<Reservation>;
}
export interface DescribeInstanceStatusRequest {
  InstanceIds?: Array<string>;
  MaxResults?: number;
  NextToken?: string;
  DryRun?: boolean;
  Filters?: Array<Filter>;
  IncludeAllInstances?: boolean;
}
export interface DescribeInstanceStatusResult {
  InstanceStatuses?: Array<InstanceStatus>;
  NextToken?: string;
}
export type DescribeInstanceTopologyGroupNameSet = Array<string>;
export type DescribeInstanceTopologyInstanceIdSet = Array<string>;
export type DescribeInstanceTopologyMaxResults = number;

export interface DescribeInstanceTopologyRequest {
  DryRun?: boolean;
  NextToken?: string;
  MaxResults?: number;
  InstanceIds?: Array<string>;
  GroupNames?: Array<string>;
  Filters?: Array<Filter>;
}
export interface DescribeInstanceTopologyResult {
  Instances?: Array<InstanceTopology>;
  NextToken?: string;
}
export interface DescribeInstanceTypeOfferingsRequest {
  DryRun?: boolean;
  LocationType?: LocationType;
  Filters?: Array<Filter>;
  MaxResults?: number;
  NextToken?: string;
}
export interface DescribeInstanceTypeOfferingsResult {
  InstanceTypeOfferings?: Array<InstanceTypeOffering>;
  NextToken?: string;
}
export interface DescribeInstanceTypesRequest {
  DryRun?: boolean;
  InstanceTypes?: Array<InstanceType>;
  Filters?: Array<Filter>;
  MaxResults?: number;
  NextToken?: string;
}
export interface DescribeInstanceTypesResult {
  InstanceTypes?: Array<InstanceTypeInfo>;
  NextToken?: string;
}
export type DescribeInternetGatewaysMaxResults = number;

export interface DescribeInternetGatewaysRequest {
  NextToken?: string;
  MaxResults?: number;
  DryRun?: boolean;
  InternetGatewayIds?: Array<string>;
  Filters?: Array<Filter>;
}
export interface DescribeInternetGatewaysResult {
  InternetGateways?: Array<InternetGateway>;
  NextToken?: string;
}
export type DescribeIpamByoasnMaxResults = number;

export interface DescribeIpamByoasnRequest {
  DryRun?: boolean;
  MaxResults?: number;
  NextToken?: string;
}
export interface DescribeIpamByoasnResult {
  Byoasns?: Array<Byoasn>;
  NextToken?: string;
}
export interface DescribeIpamExternalResourceVerificationTokensRequest {
  DryRun?: boolean;
  Filters?: Array<Filter>;
  NextToken?: string;
  MaxResults?: number;
  IpamExternalResourceVerificationTokenIds?: Array<string>;
}
export interface DescribeIpamExternalResourceVerificationTokensResult {
  NextToken?: string;
  IpamExternalResourceVerificationTokens?: Array<IpamExternalResourceVerificationToken>;
}
export interface DescribeIpamPoolsRequest {
  DryRun?: boolean;
  Filters?: Array<Filter>;
  MaxResults?: number;
  NextToken?: string;
  IpamPoolIds?: Array<string>;
}
export interface DescribeIpamPoolsResult {
  NextToken?: string;
  IpamPools?: Array<IpamPool>;
}
export interface DescribeIpamResourceDiscoveriesRequest {
  DryRun?: boolean;
  IpamResourceDiscoveryIds?: Array<string>;
  NextToken?: string;
  MaxResults?: number;
  Filters?: Array<Filter>;
}
export interface DescribeIpamResourceDiscoveriesResult {
  IpamResourceDiscoveries?: Array<IpamResourceDiscovery>;
  NextToken?: string;
}
export interface DescribeIpamResourceDiscoveryAssociationsRequest {
  DryRun?: boolean;
  IpamResourceDiscoveryAssociationIds?: Array<string>;
  NextToken?: string;
  MaxResults?: number;
  Filters?: Array<Filter>;
}
export interface DescribeIpamResourceDiscoveryAssociationsResult {
  IpamResourceDiscoveryAssociations?: Array<IpamResourceDiscoveryAssociation>;
  NextToken?: string;
}
export interface DescribeIpamScopesRequest {
  DryRun?: boolean;
  Filters?: Array<Filter>;
  MaxResults?: number;
  NextToken?: string;
  IpamScopeIds?: Array<string>;
}
export interface DescribeIpamScopesResult {
  NextToken?: string;
  IpamScopes?: Array<IpamScope>;
}
export interface DescribeIpamsRequest {
  DryRun?: boolean;
  Filters?: Array<Filter>;
  MaxResults?: number;
  NextToken?: string;
  IpamIds?: Array<string>;
}
export interface DescribeIpamsResult {
  NextToken?: string;
  Ipams?: Array<Ipam>;
}
export interface DescribeIpv6PoolsRequest {
  PoolIds?: Array<string>;
  NextToken?: string;
  MaxResults?: number;
  DryRun?: boolean;
  Filters?: Array<Filter>;
}
export interface DescribeIpv6PoolsResult {
  Ipv6Pools?: Array<Ipv6Pool>;
  NextToken?: string;
}
export interface DescribeKeyPairsRequest {
  KeyNames?: Array<string>;
  KeyPairIds?: Array<string>;
  IncludePublicKey?: boolean;
  DryRun?: boolean;
  Filters?: Array<Filter>;
}
export interface DescribeKeyPairsResult {
  KeyPairs?: Array<KeyPairInfo>;
}
export type DescribeLaunchTemplatesMaxResults = number;

export interface DescribeLaunchTemplatesRequest {
  DryRun?: boolean;
  LaunchTemplateIds?: Array<string>;
  LaunchTemplateNames?: Array<string>;
  Filters?: Array<Filter>;
  NextToken?: string;
  MaxResults?: number;
}
export interface DescribeLaunchTemplatesResult {
  LaunchTemplates?: Array<LaunchTemplate>;
  NextToken?: string;
}
export interface DescribeLaunchTemplateVersionsRequest {
  DryRun?: boolean;
  LaunchTemplateId?: string;
  LaunchTemplateName?: string;
  Versions?: Array<string>;
  MinVersion?: string;
  MaxVersion?: string;
  NextToken?: string;
  MaxResults?: number;
  Filters?: Array<Filter>;
  ResolveAlias?: boolean;
}
export interface DescribeLaunchTemplateVersionsResult {
  LaunchTemplateVersions?: Array<LaunchTemplateVersion>;
  NextToken?: string;
}
export interface DescribeLocalGatewayRouteTablesRequest {
  LocalGatewayRouteTableIds?: Array<string>;
  Filters?: Array<Filter>;
  MaxResults?: number;
  NextToken?: string;
  DryRun?: boolean;
}
export interface DescribeLocalGatewayRouteTablesResult {
  LocalGatewayRouteTables?: Array<LocalGatewayRouteTable>;
  NextToken?: string;
}
export interface DescribeLocalGatewayRouteTableVirtualInterfaceGroupAssociationsRequest {
  LocalGatewayRouteTableVirtualInterfaceGroupAssociationIds?: Array<string>;
  Filters?: Array<Filter>;
  MaxResults?: number;
  NextToken?: string;
  DryRun?: boolean;
}
export interface DescribeLocalGatewayRouteTableVirtualInterfaceGroupAssociationsResult {
  LocalGatewayRouteTableVirtualInterfaceGroupAssociations?: Array<LocalGatewayRouteTableVirtualInterfaceGroupAssociation>;
  NextToken?: string;
}
export interface DescribeLocalGatewayRouteTableVpcAssociationsRequest {
  LocalGatewayRouteTableVpcAssociationIds?: Array<string>;
  Filters?: Array<Filter>;
  MaxResults?: number;
  NextToken?: string;
  DryRun?: boolean;
}
export interface DescribeLocalGatewayRouteTableVpcAssociationsResult {
  LocalGatewayRouteTableVpcAssociations?: Array<LocalGatewayRouteTableVpcAssociation>;
  NextToken?: string;
}
export interface DescribeLocalGatewaysRequest {
  LocalGatewayIds?: Array<string>;
  Filters?: Array<Filter>;
  MaxResults?: number;
  NextToken?: string;
  DryRun?: boolean;
}
export interface DescribeLocalGatewaysResult {
  LocalGateways?: Array<LocalGateway>;
  NextToken?: string;
}
export interface DescribeLocalGatewayVirtualInterfaceGroupsRequest {
  LocalGatewayVirtualInterfaceGroupIds?: Array<string>;
  Filters?: Array<Filter>;
  MaxResults?: number;
  NextToken?: string;
  DryRun?: boolean;
}
export interface DescribeLocalGatewayVirtualInterfaceGroupsResult {
  LocalGatewayVirtualInterfaceGroups?: Array<LocalGatewayVirtualInterfaceGroup>;
  NextToken?: string;
}
export interface DescribeLocalGatewayVirtualInterfacesRequest {
  LocalGatewayVirtualInterfaceIds?: Array<string>;
  Filters?: Array<Filter>;
  MaxResults?: number;
  NextToken?: string;
  DryRun?: boolean;
}
export interface DescribeLocalGatewayVirtualInterfacesResult {
  LocalGatewayVirtualInterfaces?: Array<LocalGatewayVirtualInterface>;
  NextToken?: string;
}
export type DescribeLockedSnapshotsMaxResults = number;

export interface DescribeLockedSnapshotsRequest {
  Filters?: Array<Filter>;
  MaxResults?: number;
  NextToken?: string;
  SnapshotIds?: Array<string>;
  DryRun?: boolean;
}
export interface DescribeLockedSnapshotsResult {
  Snapshots?: Array<LockedSnapshotsInfo>;
  NextToken?: string;
}
export interface DescribeMacHostsRequest {
  Filters?: Array<Filter>;
  HostIds?: Array<string>;
  MaxResults?: number;
  NextToken?: string;
}
export type DescribeMacHostsRequestMaxResults = number;

export interface DescribeMacHostsResult {
  MacHosts?: Array<MacHost>;
  NextToken?: string;
}
export type DescribeMacModificationTasksMaxResults = number;

export interface DescribeMacModificationTasksRequest {
  DryRun?: boolean;
  Filters?: Array<Filter>;
  MacModificationTaskIds?: Array<string>;
  MaxResults?: number;
  NextToken?: string;
}
export interface DescribeMacModificationTasksResult {
  MacModificationTasks?: Array<MacModificationTask>;
  NextToken?: string;
}
export interface DescribeManagedPrefixListsRequest {
  DryRun?: boolean;
  Filters?: Array<Filter>;
  MaxResults?: number;
  NextToken?: string;
  PrefixListIds?: Array<string>;
}
export interface DescribeManagedPrefixListsResult {
  NextToken?: string;
  PrefixLists?: Array<ManagedPrefixList>;
}
export type DescribeMovingAddressesMaxResults = number;

export interface DescribeMovingAddressesRequest {
  DryRun?: boolean;
  PublicIps?: Array<string>;
  NextToken?: string;
  Filters?: Array<Filter>;
  MaxResults?: number;
}
export interface DescribeMovingAddressesResult {
  MovingAddressStatuses?: Array<MovingAddressStatus>;
  NextToken?: string;
}
export type DescribeNatGatewaysMaxResults = number;

export interface DescribeNatGatewaysRequest {
  DryRun?: boolean;
  Filter?: Array<Filter>;
  MaxResults?: number;
  NatGatewayIds?: Array<string>;
  NextToken?: string;
}
export interface DescribeNatGatewaysResult {
  NatGateways?: Array<NatGateway>;
  NextToken?: string;
}
export type DescribeNetworkAclsMaxResults = number;

export interface DescribeNetworkAclsRequest {
  NextToken?: string;
  MaxResults?: number;
  DryRun?: boolean;
  NetworkAclIds?: Array<string>;
  Filters?: Array<Filter>;
}
export interface DescribeNetworkAclsResult {
  NetworkAcls?: Array<NetworkAcl>;
  NextToken?: string;
}
export interface DescribeNetworkInsightsAccessScopeAnalysesRequest {
  NetworkInsightsAccessScopeAnalysisIds?: Array<string>;
  NetworkInsightsAccessScopeId?: string;
  AnalysisStartTimeBegin?: Date | string;
  AnalysisStartTimeEnd?: Date | string;
  Filters?: Array<Filter>;
  MaxResults?: number;
  DryRun?: boolean;
  NextToken?: string;
}
export interface DescribeNetworkInsightsAccessScopeAnalysesResult {
  NetworkInsightsAccessScopeAnalyses?: Array<NetworkInsightsAccessScopeAnalysis>;
  NextToken?: string;
}
export interface DescribeNetworkInsightsAccessScopesRequest {
  NetworkInsightsAccessScopeIds?: Array<string>;
  Filters?: Array<Filter>;
  MaxResults?: number;
  DryRun?: boolean;
  NextToken?: string;
}
export interface DescribeNetworkInsightsAccessScopesResult {
  NetworkInsightsAccessScopes?: Array<NetworkInsightsAccessScope>;
  NextToken?: string;
}
export interface DescribeNetworkInsightsAnalysesRequest {
  NetworkInsightsAnalysisIds?: Array<string>;
  NetworkInsightsPathId?: string;
  AnalysisStartTime?: Date | string;
  AnalysisEndTime?: Date | string;
  Filters?: Array<Filter>;
  MaxResults?: number;
  DryRun?: boolean;
  NextToken?: string;
}
export interface DescribeNetworkInsightsAnalysesResult {
  NetworkInsightsAnalyses?: Array<NetworkInsightsAnalysis>;
  NextToken?: string;
}
export interface DescribeNetworkInsightsPathsRequest {
  NetworkInsightsPathIds?: Array<string>;
  Filters?: Array<Filter>;
  MaxResults?: number;
  DryRun?: boolean;
  NextToken?: string;
}
export interface DescribeNetworkInsightsPathsResult {
  NetworkInsightsPaths?: Array<NetworkInsightsPath>;
  NextToken?: string;
}
export interface DescribeNetworkInterfaceAttributeRequest {
  DryRun?: boolean;
  NetworkInterfaceId: string;
  Attribute?: NetworkInterfaceAttribute;
}
export interface DescribeNetworkInterfaceAttributeResult {
  Attachment?: NetworkInterfaceAttachment;
  Description?: AttributeValue;
  Groups?: Array<GroupIdentifier>;
  NetworkInterfaceId?: string;
  SourceDestCheck?: AttributeBooleanValue;
  AssociatePublicIpAddress?: boolean;
}
export type DescribeNetworkInterfacePermissionsMaxResults = number;

export interface DescribeNetworkInterfacePermissionsRequest {
  NetworkInterfacePermissionIds?: Array<string>;
  Filters?: Array<Filter>;
  NextToken?: string;
  MaxResults?: number;
}
export interface DescribeNetworkInterfacePermissionsResult {
  NetworkInterfacePermissions?: Array<NetworkInterfacePermission>;
  NextToken?: string;
}
export type DescribeNetworkInterfacesMaxResults = number;

export interface DescribeNetworkInterfacesRequest {
  NextToken?: string;
  MaxResults?: number;
  DryRun?: boolean;
  NetworkInterfaceIds?: Array<string>;
  Filters?: Array<Filter>;
}
export interface DescribeNetworkInterfacesResult {
  NetworkInterfaces?: Array<NetworkInterface>;
  NextToken?: string;
}
export interface DescribeOutpostLagsRequest {
  OutpostLagIds?: Array<string>;
  Filters?: Array<Filter>;
  MaxResults?: number;
  NextToken?: string;
  DryRun?: boolean;
}
export interface DescribeOutpostLagsResult {
  OutpostLags?: Array<OutpostLag>;
  NextToken?: string;
}
export interface DescribePlacementGroupsRequest {
  GroupIds?: Array<string>;
  DryRun?: boolean;
  GroupNames?: Array<string>;
  Filters?: Array<Filter>;
}
export interface DescribePlacementGroupsResult {
  PlacementGroups?: Array<PlacementGroup>;
}
export interface DescribePrefixListsRequest {
  DryRun?: boolean;
  Filters?: Array<Filter>;
  MaxResults?: number;
  NextToken?: string;
  PrefixListIds?: Array<string>;
}
export interface DescribePrefixListsResult {
  NextToken?: string;
  PrefixLists?: Array<PrefixList>;
}
export type DescribePrincipalIdFormatMaxResults = number;

export interface DescribePrincipalIdFormatRequest {
  DryRun?: boolean;
  Resources?: Array<string>;
  MaxResults?: number;
  NextToken?: string;
}
export interface DescribePrincipalIdFormatResult {
  Principals?: Array<PrincipalIdFormat>;
  NextToken?: string;
}
export interface DescribePublicIpv4PoolsRequest {
  PoolIds?: Array<string>;
  NextToken?: string;
  MaxResults?: number;
  Filters?: Array<Filter>;
}
export interface DescribePublicIpv4PoolsResult {
  PublicIpv4Pools?: Array<PublicIpv4Pool>;
  NextToken?: string;
}
export interface DescribeRegionsRequest {
  RegionNames?: Array<string>;
  AllRegions?: boolean;
  DryRun?: boolean;
  Filters?: Array<Filter>;
}
export interface DescribeRegionsResult {
  Regions?: Array<Region>;
}
export type DescribeReplaceRootVolumeTasksMaxResults = number;

export interface DescribeReplaceRootVolumeTasksRequest {
  ReplaceRootVolumeTaskIds?: Array<string>;
  Filters?: Array<Filter>;
  MaxResults?: number;
  NextToken?: string;
  DryRun?: boolean;
}
export interface DescribeReplaceRootVolumeTasksResult {
  ReplaceRootVolumeTasks?: Array<ReplaceRootVolumeTask>;
  NextToken?: string;
}
export interface DescribeReservedInstancesListingsRequest {
  ReservedInstancesId?: string;
  ReservedInstancesListingId?: string;
  Filters?: Array<Filter>;
}
export interface DescribeReservedInstancesListingsResult {
  ReservedInstancesListings?: Array<ReservedInstancesListing>;
}
export interface DescribeReservedInstancesModificationsRequest {
  ReservedInstancesModificationIds?: Array<string>;
  NextToken?: string;
  Filters?: Array<Filter>;
}
export interface DescribeReservedInstancesModificationsResult {
  NextToken?: string;
  ReservedInstancesModifications?: Array<ReservedInstancesModification>;
}
export interface DescribeReservedInstancesOfferingsRequest {
  AvailabilityZone?: string;
  IncludeMarketplace?: boolean;
  InstanceType?: InstanceType;
  MaxDuration?: number;
  MaxInstanceCount?: number;
  MinDuration?: number;
  OfferingClass?: OfferingClassType;
  ProductDescription?: RIProductDescription;
  ReservedInstancesOfferingIds?: Array<string>;
  AvailabilityZoneId?: string;
  DryRun?: boolean;
  Filters?: Array<Filter>;
  InstanceTenancy?: Tenancy;
  OfferingType?: OfferingTypeValues;
  NextToken?: string;
  MaxResults?: number;
}
export interface DescribeReservedInstancesOfferingsResult {
  NextToken?: string;
  ReservedInstancesOfferings?: Array<ReservedInstancesOffering>;
}
export interface DescribeReservedInstancesRequest {
  OfferingClass?: OfferingClassType;
  ReservedInstancesIds?: Array<string>;
  DryRun?: boolean;
  Filters?: Array<Filter>;
  OfferingType?: OfferingTypeValues;
}
export interface DescribeReservedInstancesResult {
  ReservedInstances?: Array<ReservedInstances>;
}
export interface DescribeRouteServerEndpointsRequest {
  RouteServerEndpointIds?: Array<string>;
  NextToken?: string;
  MaxResults?: number;
  Filters?: Array<Filter>;
  DryRun?: boolean;
}
export interface DescribeRouteServerEndpointsResult {
  RouteServerEndpoints?: Array<RouteServerEndpoint>;
  NextToken?: string;
}
export interface DescribeRouteServerPeersRequest {
  RouteServerPeerIds?: Array<string>;
  NextToken?: string;
  MaxResults?: number;
  Filters?: Array<Filter>;
  DryRun?: boolean;
}
export interface DescribeRouteServerPeersResult {
  RouteServerPeers?: Array<RouteServerPeer>;
  NextToken?: string;
}
export interface DescribeRouteServersRequest {
  RouteServerIds?: Array<string>;
  NextToken?: string;
  MaxResults?: number;
  Filters?: Array<Filter>;
  DryRun?: boolean;
}
export interface DescribeRouteServersResult {
  RouteServers?: Array<RouteServer>;
  NextToken?: string;
}
export type DescribeRouteTablesMaxResults = number;

export interface DescribeRouteTablesRequest {
  NextToken?: string;
  MaxResults?: number;
  DryRun?: boolean;
  RouteTableIds?: Array<string>;
  Filters?: Array<Filter>;
}
export interface DescribeRouteTablesResult {
  RouteTables?: Array<RouteTable>;
  NextToken?: string;
}
export type DescribeScheduledInstanceAvailabilityMaxResults = number;

export interface DescribeScheduledInstanceAvailabilityRequest {
  DryRun?: boolean;
  Filters?: Array<Filter>;
  FirstSlotStartTimeRange: SlotDateTimeRangeRequest;
  MaxResults?: number;
  MaxSlotDurationInHours?: number;
  MinSlotDurationInHours?: number;
  NextToken?: string;
  Recurrence: ScheduledInstanceRecurrenceRequest;
}
export interface DescribeScheduledInstanceAvailabilityResult {
  NextToken?: string;
  ScheduledInstanceAvailabilitySet?: Array<ScheduledInstanceAvailability>;
}
export interface DescribeScheduledInstancesRequest {
  DryRun?: boolean;
  Filters?: Array<Filter>;
  MaxResults?: number;
  NextToken?: string;
  ScheduledInstanceIds?: Array<string>;
  SlotStartTimeRange?: SlotStartTimeRangeRequest;
}
export interface DescribeScheduledInstancesResult {
  NextToken?: string;
  ScheduledInstanceSet?: Array<ScheduledInstance>;
}
export interface DescribeSecurityGroupReferencesRequest {
  DryRun?: boolean;
  GroupId: Array<string>;
}
export interface DescribeSecurityGroupReferencesResult {
  SecurityGroupReferenceSet?: Array<SecurityGroupReference>;
}
export type DescribeSecurityGroupRulesMaxResults = number;

export interface DescribeSecurityGroupRulesRequest {
  Filters?: Array<Filter>;
  SecurityGroupRuleIds?: Array<string>;
  DryRun?: boolean;
  NextToken?: string;
  MaxResults?: number;
}
export interface DescribeSecurityGroupRulesResult {
  SecurityGroupRules?: Array<SecurityGroupRule>;
  NextToken?: string;
}
export type DescribeSecurityGroupsMaxResults = number;

export interface DescribeSecurityGroupsRequest {
  GroupIds?: Array<string>;
  GroupNames?: Array<string>;
  NextToken?: string;
  MaxResults?: number;
  DryRun?: boolean;
  Filters?: Array<Filter>;
}
export interface DescribeSecurityGroupsResult {
  NextToken?: string;
  SecurityGroups?: Array<SecurityGroup>;
}
export type DescribeSecurityGroupVpcAssociationsMaxResults = number;

export interface DescribeSecurityGroupVpcAssociationsRequest {
  Filters?: Array<Filter>;
  NextToken?: string;
  MaxResults?: number;
  DryRun?: boolean;
}
export interface DescribeSecurityGroupVpcAssociationsResult {
  SecurityGroupVpcAssociations?: Array<SecurityGroupVpcAssociation>;
  NextToken?: string;
}
export interface DescribeServiceLinkVirtualInterfacesRequest {
  ServiceLinkVirtualInterfaceIds?: Array<string>;
  Filters?: Array<Filter>;
  MaxResults?: number;
  NextToken?: string;
  DryRun?: boolean;
}
export interface DescribeServiceLinkVirtualInterfacesResult {
  ServiceLinkVirtualInterfaces?: Array<ServiceLinkVirtualInterface>;
  NextToken?: string;
}
export interface DescribeSnapshotAttributeRequest {
  Attribute: SnapshotAttributeName;
  SnapshotId: string;
  DryRun?: boolean;
}
export interface DescribeSnapshotAttributeResult {
  ProductCodes?: Array<ProductCode>;
  SnapshotId?: string;
  CreateVolumePermissions?: Array<CreateVolumePermission>;
}
export interface DescribeSnapshotsRequest {
  MaxResults?: number;
  NextToken?: string;
  OwnerIds?: Array<string>;
  RestorableByUserIds?: Array<string>;
  SnapshotIds?: Array<string>;
  DryRun?: boolean;
  Filters?: Array<Filter>;
}
export interface DescribeSnapshotsResult {
  NextToken?: string;
  Snapshots?: Array<Snapshot>;
}
export type DescribeSnapshotTierStatusMaxResults = number;

export interface DescribeSnapshotTierStatusRequest {
  Filters?: Array<Filter>;
  DryRun?: boolean;
  NextToken?: string;
  MaxResults?: number;
}
export interface DescribeSnapshotTierStatusResult {
  SnapshotTierStatuses?: Array<SnapshotTierStatus>;
  NextToken?: string;
}
export interface DescribeSpotDatafeedSubscriptionRequest {
  DryRun?: boolean;
}
export interface DescribeSpotDatafeedSubscriptionResult {
  SpotDatafeedSubscription?: SpotDatafeedSubscription;
}
export type DescribeSpotFleetInstancesMaxResults = number;

export interface DescribeSpotFleetInstancesRequest {
  DryRun?: boolean;
  SpotFleetRequestId: string;
  NextToken?: string;
  MaxResults?: number;
}
export interface DescribeSpotFleetInstancesResponse {
  ActiveInstances?: Array<ActiveInstance>;
  NextToken?: string;
  SpotFleetRequestId?: string;
}
export type DescribeSpotFleetRequestHistoryMaxResults = number;

export interface DescribeSpotFleetRequestHistoryRequest {
  DryRun?: boolean;
  SpotFleetRequestId: string;
  EventType?: EventType;
  StartTime: Date | string;
  NextToken?: string;
  MaxResults?: number;
}
export interface DescribeSpotFleetRequestHistoryResponse {
  HistoryRecords?: Array<HistoryRecord>;
  LastEvaluatedTime?: Date | string;
  NextToken?: string;
  SpotFleetRequestId?: string;
  StartTime?: Date | string;
}
export interface DescribeSpotFleetRequestsRequest {
  DryRun?: boolean;
  SpotFleetRequestIds?: Array<string>;
  NextToken?: string;
  MaxResults?: number;
}
export interface DescribeSpotFleetRequestsResponse {
  NextToken?: string;
  SpotFleetRequestConfigs?: Array<SpotFleetRequestConfig>;
}
export interface DescribeSpotInstanceRequestsRequest {
  NextToken?: string;
  MaxResults?: number;
  DryRun?: boolean;
  SpotInstanceRequestIds?: Array<string>;
  Filters?: Array<Filter>;
}
export interface DescribeSpotInstanceRequestsResult {
  SpotInstanceRequests?: Array<SpotInstanceRequest>;
  NextToken?: string;
}
export interface DescribeSpotPriceHistoryRequest {
  DryRun?: boolean;
  StartTime?: Date | string;
  EndTime?: Date | string;
  InstanceTypes?: Array<InstanceType>;
  ProductDescriptions?: Array<string>;
  Filters?: Array<Filter>;
  AvailabilityZone?: string;
  MaxResults?: number;
  NextToken?: string;
}
export interface DescribeSpotPriceHistoryResult {
  NextToken?: string;
  SpotPriceHistory?: Array<SpotPrice>;
}
export type DescribeStaleSecurityGroupsMaxResults = number;

export type DescribeStaleSecurityGroupsNextToken = string;

export interface DescribeStaleSecurityGroupsRequest {
  DryRun?: boolean;
  MaxResults?: number;
  NextToken?: string;
  VpcId: string;
}
export interface DescribeStaleSecurityGroupsResult {
  NextToken?: string;
  StaleSecurityGroupSet?: Array<StaleSecurityGroup>;
}
export interface DescribeStoreImageTasksRequest {
  ImageIds?: Array<string>;
  DryRun?: boolean;
  Filters?: Array<Filter>;
  NextToken?: string;
  MaxResults?: number;
}
export type DescribeStoreImageTasksRequestMaxResults = number;

export interface DescribeStoreImageTasksResult {
  StoreImageTaskResults?: Array<StoreImageTaskResult>;
  NextToken?: string;
}
export type DescribeSubnetsMaxResults = number;

export interface DescribeSubnetsRequest {
  Filters?: Array<Filter>;
  SubnetIds?: Array<string>;
  NextToken?: string;
  MaxResults?: number;
  DryRun?: boolean;
}
export interface DescribeSubnetsResult {
  NextToken?: string;
  Subnets?: Array<Subnet>;
}
export interface DescribeTagsRequest {
  DryRun?: boolean;
  Filters?: Array<Filter>;
  MaxResults?: number;
  NextToken?: string;
}
export interface DescribeTagsResult {
  NextToken?: string;
  Tags?: Array<TagDescription>;
}
export interface DescribeTrafficMirrorFilterRulesRequest {
  TrafficMirrorFilterRuleIds?: Array<string>;
  TrafficMirrorFilterId?: string;
  DryRun?: boolean;
  Filters?: Array<Filter>;
  MaxResults?: number;
  NextToken?: string;
}
export interface DescribeTrafficMirrorFilterRulesResult {
  TrafficMirrorFilterRules?: Array<TrafficMirrorFilterRule>;
  NextToken?: string;
}
export interface DescribeTrafficMirrorFiltersRequest {
  TrafficMirrorFilterIds?: Array<string>;
  DryRun?: boolean;
  Filters?: Array<Filter>;
  MaxResults?: number;
  NextToken?: string;
}
export interface DescribeTrafficMirrorFiltersResult {
  TrafficMirrorFilters?: Array<TrafficMirrorFilter>;
  NextToken?: string;
}
export interface DescribeTrafficMirrorSessionsRequest {
  TrafficMirrorSessionIds?: Array<string>;
  DryRun?: boolean;
  Filters?: Array<Filter>;
  MaxResults?: number;
  NextToken?: string;
}
export interface DescribeTrafficMirrorSessionsResult {
  TrafficMirrorSessions?: Array<TrafficMirrorSession>;
  NextToken?: string;
}
export interface DescribeTrafficMirrorTargetsRequest {
  TrafficMirrorTargetIds?: Array<string>;
  DryRun?: boolean;
  Filters?: Array<Filter>;
  MaxResults?: number;
  NextToken?: string;
}
export interface DescribeTrafficMirrorTargetsResult {
  TrafficMirrorTargets?: Array<TrafficMirrorTarget>;
  NextToken?: string;
}
export interface DescribeTransitGatewayAttachmentsRequest {
  TransitGatewayAttachmentIds?: Array<string>;
  Filters?: Array<Filter>;
  MaxResults?: number;
  NextToken?: string;
  DryRun?: boolean;
}
export interface DescribeTransitGatewayAttachmentsResult {
  TransitGatewayAttachments?: Array<TransitGatewayAttachment>;
  NextToken?: string;
}
export interface DescribeTransitGatewayConnectPeersRequest {
  TransitGatewayConnectPeerIds?: Array<string>;
  Filters?: Array<Filter>;
  MaxResults?: number;
  NextToken?: string;
  DryRun?: boolean;
}
export interface DescribeTransitGatewayConnectPeersResult {
  TransitGatewayConnectPeers?: Array<TransitGatewayConnectPeer>;
  NextToken?: string;
}
export interface DescribeTransitGatewayConnectsRequest {
  TransitGatewayAttachmentIds?: Array<string>;
  Filters?: Array<Filter>;
  MaxResults?: number;
  NextToken?: string;
  DryRun?: boolean;
}
export interface DescribeTransitGatewayConnectsResult {
  TransitGatewayConnects?: Array<TransitGatewayConnect>;
  NextToken?: string;
}
export interface DescribeTransitGatewayMulticastDomainsRequest {
  TransitGatewayMulticastDomainIds?: Array<string>;
  Filters?: Array<Filter>;
  MaxResults?: number;
  NextToken?: string;
  DryRun?: boolean;
}
export interface DescribeTransitGatewayMulticastDomainsResult {
  TransitGatewayMulticastDomains?: Array<TransitGatewayMulticastDomain>;
  NextToken?: string;
}
export interface DescribeTransitGatewayPeeringAttachmentsRequest {
  TransitGatewayAttachmentIds?: Array<string>;
  Filters?: Array<Filter>;
  MaxResults?: number;
  NextToken?: string;
  DryRun?: boolean;
}
export interface DescribeTransitGatewayPeeringAttachmentsResult {
  TransitGatewayPeeringAttachments?: Array<TransitGatewayPeeringAttachment>;
  NextToken?: string;
}
export interface DescribeTransitGatewayPolicyTablesRequest {
  TransitGatewayPolicyTableIds?: Array<string>;
  Filters?: Array<Filter>;
  MaxResults?: number;
  NextToken?: string;
  DryRun?: boolean;
}
export interface DescribeTransitGatewayPolicyTablesResult {
  TransitGatewayPolicyTables?: Array<TransitGatewayPolicyTable>;
  NextToken?: string;
}
export interface DescribeTransitGatewayRouteTableAnnouncementsRequest {
  TransitGatewayRouteTableAnnouncementIds?: Array<string>;
  Filters?: Array<Filter>;
  MaxResults?: number;
  NextToken?: string;
  DryRun?: boolean;
}
export interface DescribeTransitGatewayRouteTableAnnouncementsResult {
  TransitGatewayRouteTableAnnouncements?: Array<TransitGatewayRouteTableAnnouncement>;
  NextToken?: string;
}
export interface DescribeTransitGatewayRouteTablesRequest {
  TransitGatewayRouteTableIds?: Array<string>;
  Filters?: Array<Filter>;
  MaxResults?: number;
  NextToken?: string;
  DryRun?: boolean;
}
export interface DescribeTransitGatewayRouteTablesResult {
  TransitGatewayRouteTables?: Array<TransitGatewayRouteTable>;
  NextToken?: string;
}
export interface DescribeTransitGatewaysRequest {
  TransitGatewayIds?: Array<string>;
  Filters?: Array<Filter>;
  MaxResults?: number;
  NextToken?: string;
  DryRun?: boolean;
}
export interface DescribeTransitGatewaysResult {
  TransitGateways?: Array<TransitGateway>;
  NextToken?: string;
}
export interface DescribeTransitGatewayVpcAttachmentsRequest {
  TransitGatewayAttachmentIds?: Array<string>;
  Filters?: Array<Filter>;
  MaxResults?: number;
  NextToken?: string;
  DryRun?: boolean;
}
export interface DescribeTransitGatewayVpcAttachmentsResult {
  TransitGatewayVpcAttachments?: Array<TransitGatewayVpcAttachment>;
  NextToken?: string;
}
export type DescribeTrunkInterfaceAssociationsMaxResults = number;

export interface DescribeTrunkInterfaceAssociationsRequest {
  AssociationIds?: Array<string>;
  DryRun?: boolean;
  Filters?: Array<Filter>;
  NextToken?: string;
  MaxResults?: number;
}
export interface DescribeTrunkInterfaceAssociationsResult {
  InterfaceAssociations?: Array<TrunkInterfaceAssociation>;
  NextToken?: string;
}
export type DescribeVerifiedAccessEndpointsMaxResults = number;

export interface DescribeVerifiedAccessEndpointsRequest {
  VerifiedAccessEndpointIds?: Array<string>;
  VerifiedAccessInstanceId?: string;
  VerifiedAccessGroupId?: string;
  MaxResults?: number;
  NextToken?: string;
  Filters?: Array<Filter>;
  DryRun?: boolean;
}
export interface DescribeVerifiedAccessEndpointsResult {
  VerifiedAccessEndpoints?: Array<VerifiedAccessEndpoint>;
  NextToken?: string;
}
export type DescribeVerifiedAccessGroupMaxResults = number;

export interface DescribeVerifiedAccessGroupsRequest {
  VerifiedAccessGroupIds?: Array<string>;
  VerifiedAccessInstanceId?: string;
  MaxResults?: number;
  NextToken?: string;
  Filters?: Array<Filter>;
  DryRun?: boolean;
}
export interface DescribeVerifiedAccessGroupsResult {
  VerifiedAccessGroups?: Array<VerifiedAccessGroup>;
  NextToken?: string;
}
export type DescribeVerifiedAccessInstanceLoggingConfigurationsMaxResults = number;

export interface DescribeVerifiedAccessInstanceLoggingConfigurationsRequest {
  VerifiedAccessInstanceIds?: Array<string>;
  MaxResults?: number;
  NextToken?: string;
  Filters?: Array<Filter>;
  DryRun?: boolean;
}
export interface DescribeVerifiedAccessInstanceLoggingConfigurationsResult {
  LoggingConfigurations?: Array<VerifiedAccessInstanceLoggingConfiguration>;
  NextToken?: string;
}
export type DescribeVerifiedAccessInstancesMaxResults = number;

export interface DescribeVerifiedAccessInstancesRequest {
  VerifiedAccessInstanceIds?: Array<string>;
  MaxResults?: number;
  NextToken?: string;
  Filters?: Array<Filter>;
  DryRun?: boolean;
}
export interface DescribeVerifiedAccessInstancesResult {
  VerifiedAccessInstances?: Array<VerifiedAccessInstance>;
  NextToken?: string;
}
export type DescribeVerifiedAccessTrustProvidersMaxResults = number;

export interface DescribeVerifiedAccessTrustProvidersRequest {
  VerifiedAccessTrustProviderIds?: Array<string>;
  MaxResults?: number;
  NextToken?: string;
  Filters?: Array<Filter>;
  DryRun?: boolean;
}
export interface DescribeVerifiedAccessTrustProvidersResult {
  VerifiedAccessTrustProviders?: Array<VerifiedAccessTrustProvider>;
  NextToken?: string;
}
export interface DescribeVolumeAttributeRequest {
  Attribute: VolumeAttributeName;
  VolumeId: string;
  DryRun?: boolean;
}
export interface DescribeVolumeAttributeResult {
  AutoEnableIO?: AttributeBooleanValue;
  ProductCodes?: Array<ProductCode>;
  VolumeId?: string;
}
export interface DescribeVolumesModificationsRequest {
  DryRun?: boolean;
  VolumeIds?: Array<string>;
  Filters?: Array<Filter>;
  NextToken?: string;
  MaxResults?: number;
}
export interface DescribeVolumesModificationsResult {
  NextToken?: string;
  VolumesModifications?: Array<VolumeModification>;
}
export interface DescribeVolumesRequest {
  VolumeIds?: Array<string>;
  DryRun?: boolean;
  Filters?: Array<Filter>;
  NextToken?: string;
  MaxResults?: number;
}
export interface DescribeVolumesResult {
  NextToken?: string;
  Volumes?: Array<Volume>;
}
export interface DescribeVolumeStatusRequest {
  MaxResults?: number;
  NextToken?: string;
  VolumeIds?: Array<string>;
  DryRun?: boolean;
  Filters?: Array<Filter>;
}
export interface DescribeVolumeStatusResult {
  NextToken?: string;
  VolumeStatuses?: Array<VolumeStatusItem>;
}
export interface DescribeVpcAttributeRequest {
  Attribute: VpcAttributeName;
  VpcId: string;
  DryRun?: boolean;
}
export interface DescribeVpcAttributeResult {
  EnableDnsHostnames?: AttributeBooleanValue;
  EnableDnsSupport?: AttributeBooleanValue;
  EnableNetworkAddressUsageMetrics?: AttributeBooleanValue;
  VpcId?: string;
}
export type DescribeVpcBlockPublicAccessExclusionsMaxResults = number;

export interface DescribeVpcBlockPublicAccessExclusionsRequest {
  DryRun?: boolean;
  Filters?: Array<Filter>;
  ExclusionIds?: Array<string>;
  NextToken?: string;
  MaxResults?: number;
}
export interface DescribeVpcBlockPublicAccessExclusionsResult {
  VpcBlockPublicAccessExclusions?: Array<VpcBlockPublicAccessExclusion>;
  NextToken?: string;
}
export interface DescribeVpcBlockPublicAccessOptionsRequest {
  DryRun?: boolean;
}
export interface DescribeVpcBlockPublicAccessOptionsResult {
  VpcBlockPublicAccessOptions?: VpcBlockPublicAccessOptions;
}
export type DescribeVpcClassicLinkDnsSupportMaxResults = number;

export type DescribeVpcClassicLinkDnsSupportNextToken = string;

export interface DescribeVpcClassicLinkDnsSupportRequest {
  VpcIds?: Array<string>;
  MaxResults?: number;
  NextToken?: string;
}
export interface DescribeVpcClassicLinkDnsSupportResult {
  NextToken?: string;
  Vpcs?: Array<ClassicLinkDnsSupport>;
}
export interface DescribeVpcClassicLinkRequest {
  DryRun?: boolean;
  VpcIds?: Array<string>;
  Filters?: Array<Filter>;
}
export interface DescribeVpcClassicLinkResult {
  Vpcs?: Array<VpcClassicLink>;
}
export interface DescribeVpcEndpointAssociationsRequest {
  DryRun?: boolean;
  VpcEndpointIds?: Array<string>;
  Filters?: Array<Filter>;
  MaxResults?: number;
  NextToken?: string;
}
export interface DescribeVpcEndpointAssociationsResult {
  VpcEndpointAssociations?: Array<VpcEndpointAssociation>;
  NextToken?: string;
}
export interface DescribeVpcEndpointConnectionNotificationsRequest {
  DryRun?: boolean;
  ConnectionNotificationId?: string;
  Filters?: Array<Filter>;
  MaxResults?: number;
  NextToken?: string;
}
export interface DescribeVpcEndpointConnectionNotificationsResult {
  ConnectionNotificationSet?: Array<ConnectionNotification>;
  NextToken?: string;
}
export interface DescribeVpcEndpointConnectionsRequest {
  DryRun?: boolean;
  Filters?: Array<Filter>;
  MaxResults?: number;
  NextToken?: string;
}
export interface DescribeVpcEndpointConnectionsResult {
  VpcEndpointConnections?: Array<VpcEndpointConnection>;
  NextToken?: string;
}
export interface DescribeVpcEndpointServiceConfigurationsRequest {
  DryRun?: boolean;
  ServiceIds?: Array<string>;
  Filters?: Array<Filter>;
  MaxResults?: number;
  NextToken?: string;
}
export interface DescribeVpcEndpointServiceConfigurationsResult {
  ServiceConfigurations?: Array<ServiceConfiguration>;
  NextToken?: string;
}
export interface DescribeVpcEndpointServicePermissionsRequest {
  DryRun?: boolean;
  ServiceId: string;
  Filters?: Array<Filter>;
  MaxResults?: number;
  NextToken?: string;
}
export interface DescribeVpcEndpointServicePermissionsResult {
  AllowedPrincipals?: Array<AllowedPrincipal>;
  NextToken?: string;
}
export interface DescribeVpcEndpointServicesRequest {
  DryRun?: boolean;
  ServiceNames?: Array<string>;
  Filters?: Array<Filter>;
  MaxResults?: number;
  NextToken?: string;
  ServiceRegions?: Array<string>;
}
export interface DescribeVpcEndpointServicesResult {
  ServiceNames?: Array<string>;
  ServiceDetails?: Array<ServiceDetail>;
  NextToken?: string;
}
export interface DescribeVpcEndpointsRequest {
  DryRun?: boolean;
  VpcEndpointIds?: Array<string>;
  Filters?: Array<Filter>;
  MaxResults?: number;
  NextToken?: string;
}
export interface DescribeVpcEndpointsResult {
  VpcEndpoints?: Array<VpcEndpoint>;
  NextToken?: string;
}
export type DescribeVpcPeeringConnectionsMaxResults = number;

export interface DescribeVpcPeeringConnectionsRequest {
  NextToken?: string;
  MaxResults?: number;
  DryRun?: boolean;
  VpcPeeringConnectionIds?: Array<string>;
  Filters?: Array<Filter>;
}
export interface DescribeVpcPeeringConnectionsResult {
  VpcPeeringConnections?: Array<VpcPeeringConnection>;
  NextToken?: string;
}
export type DescribeVpcsMaxResults = number;

export interface DescribeVpcsRequest {
  Filters?: Array<Filter>;
  VpcIds?: Array<string>;
  NextToken?: string;
  MaxResults?: number;
  DryRun?: boolean;
}
export interface DescribeVpcsResult {
  NextToken?: string;
  Vpcs?: Array<Vpc>;
}
export interface DescribeVpnConnectionsRequest {
  Filters?: Array<Filter>;
  VpnConnectionIds?: Array<string>;
  DryRun?: boolean;
}
export interface DescribeVpnConnectionsResult {
  VpnConnections?: Array<VpnConnection>;
}
export interface DescribeVpnGatewaysRequest {
  Filters?: Array<Filter>;
  VpnGatewayIds?: Array<string>;
  DryRun?: boolean;
}
export interface DescribeVpnGatewaysResult {
  VpnGateways?: Array<VpnGateway>;
}
export type DestinationFileFormat = "plain_text" | "parquet";
export interface DestinationOptionsRequest {
  FileFormat?: DestinationFileFormat;
  HiveCompatiblePartitions?: boolean;
  PerHourPartition?: boolean;
}
export interface DestinationOptionsResponse {
  FileFormat?: DestinationFileFormat;
  HiveCompatiblePartitions?: boolean;
  PerHourPartition?: boolean;
}
export interface DetachClassicLinkVpcRequest {
  DryRun?: boolean;
  InstanceId: string;
  VpcId: string;
}
export interface DetachClassicLinkVpcResult {
  Return?: boolean;
}
export interface DetachInternetGatewayRequest {
  DryRun?: boolean;
  InternetGatewayId: string;
  VpcId: string;
}
export interface DetachNetworkInterfaceRequest {
  DryRun?: boolean;
  AttachmentId: string;
  Force?: boolean;
}
export interface DetachVerifiedAccessTrustProviderRequest {
  VerifiedAccessInstanceId: string;
  VerifiedAccessTrustProviderId: string;
  ClientToken?: string;
  DryRun?: boolean;
}
export interface DetachVerifiedAccessTrustProviderResult {
  VerifiedAccessTrustProvider?: VerifiedAccessTrustProvider;
  VerifiedAccessInstance?: VerifiedAccessInstance;
}
export interface DetachVolumeRequest {
  Device?: string;
  Force?: boolean;
  InstanceId?: string;
  VolumeId: string;
  DryRun?: boolean;
}
export interface DetachVpnGatewayRequest {
  VpcId: string;
  VpnGatewayId: string;
  DryRun?: boolean;
}
export interface DeviceOptions {
  TenantId?: string;
  PublicSigningKeyUrl?: string;
}
export type DeviceTrustProviderType = "jamf" | "crowdstrike" | "jumpcloud";
export type DeviceTrustProviderTypeList = Array<DeviceTrustProviderType>;
export type DeviceType = "ebs" | "instance_store";
export interface DhcpConfiguration {
  Key?: string;
  Values?: Array<AttributeValue>;
}
export type DhcpConfigurationList = Array<DhcpConfiguration>;
export type DhcpConfigurationValueList = Array<AttributeValue>;
export interface DhcpOptions {
  OwnerId?: string;
  Tags?: Array<Tag>;
  DhcpOptionsId?: string;
  DhcpConfigurations?: Array<DhcpConfiguration>;
}
export type DhcpOptionsId = string;

export type DhcpOptionsIdStringList = Array<string>;
export type DhcpOptionsList = Array<DhcpOptions>;
export interface DirectoryServiceAuthentication {
  DirectoryId?: string;
}
export interface DirectoryServiceAuthenticationRequest {
  DirectoryId?: string;
}
export interface DisableAddressTransferRequest {
  AllocationId: string;
  DryRun?: boolean;
}
export interface DisableAddressTransferResult {
  AddressTransfer?: AddressTransfer;
}
export interface DisableAllowedImagesSettingsRequest {
  DryRun?: boolean;
}
export interface DisableAllowedImagesSettingsResult {
  AllowedImagesSettingsState?: AllowedImagesSettingsDisabledState;
}
export interface DisableAwsNetworkPerformanceMetricSubscriptionRequest {
  Source?: string;
  Destination?: string;
  Metric?: MetricType;
  Statistic?: StatisticType;
  DryRun?: boolean;
}
export interface DisableAwsNetworkPerformanceMetricSubscriptionResult {
  Output?: boolean;
}
export interface DisableEbsEncryptionByDefaultRequest {
  DryRun?: boolean;
}
export interface DisableEbsEncryptionByDefaultResult {
  EbsEncryptionByDefault?: boolean;
}
export interface DisableFastLaunchRequest {
  ImageId: string;
  Force?: boolean;
  DryRun?: boolean;
}
export interface DisableFastLaunchResult {
  ImageId?: string;
  ResourceType?: FastLaunchResourceType;
  SnapshotConfiguration?: FastLaunchSnapshotConfigurationResponse;
  LaunchTemplate?: FastLaunchLaunchTemplateSpecificationResponse;
  MaxParallelLaunches?: number;
  OwnerId?: string;
  State?: FastLaunchStateCode;
  StateTransitionReason?: string;
  StateTransitionTime?: Date | string;
}
export interface DisableFastSnapshotRestoreErrorItem {
  SnapshotId?: string;
  FastSnapshotRestoreStateErrors?: Array<DisableFastSnapshotRestoreStateErrorItem>;
}
export type DisableFastSnapshotRestoreErrorSet = Array<DisableFastSnapshotRestoreErrorItem>;
export interface DisableFastSnapshotRestoresRequest {
  AvailabilityZones: Array<string>;
  SourceSnapshotIds: Array<string>;
  DryRun?: boolean;
}
export interface DisableFastSnapshotRestoresResult {
  Successful?: Array<DisableFastSnapshotRestoreSuccessItem>;
  Unsuccessful?: Array<DisableFastSnapshotRestoreErrorItem>;
}
export interface DisableFastSnapshotRestoreStateError {
  Code?: string;
  Message?: string;
}
export interface DisableFastSnapshotRestoreStateErrorItem {
  AvailabilityZone?: string;
  Error?: DisableFastSnapshotRestoreStateError;
}
export type DisableFastSnapshotRestoreStateErrorSet = Array<DisableFastSnapshotRestoreStateErrorItem>;
export interface DisableFastSnapshotRestoreSuccessItem {
  SnapshotId?: string;
  AvailabilityZone?: string;
  State?: FastSnapshotRestoreStateCode;
  StateTransitionReason?: string;
  OwnerId?: string;
  OwnerAlias?: string;
  EnablingTime?: Date | string;
  OptimizingTime?: Date | string;
  EnabledTime?: Date | string;
  DisablingTime?: Date | string;
  DisabledTime?: Date | string;
}
export type DisableFastSnapshotRestoreSuccessSet = Array<DisableFastSnapshotRestoreSuccessItem>;
export interface DisableImageBlockPublicAccessRequest {
  DryRun?: boolean;
}
export interface DisableImageBlockPublicAccessResult {
  ImageBlockPublicAccessState?: ImageBlockPublicAccessDisabledState;
}
export interface DisableImageDeprecationRequest {
  ImageId: string;
  DryRun?: boolean;
}
export interface DisableImageDeprecationResult {
  Return?: boolean;
}
export interface DisableImageDeregistrationProtectionRequest {
  ImageId: string;
  DryRun?: boolean;
}
export interface DisableImageDeregistrationProtectionResult {
  Return?: string;
}
export interface DisableImageRequest {
  ImageId: string;
  DryRun?: boolean;
}
export interface DisableImageResult {
  Return?: boolean;
}
export interface DisableIpamOrganizationAdminAccountRequest {
  DryRun?: boolean;
  DelegatedAdminAccountId: string;
}
export interface DisableIpamOrganizationAdminAccountResult {
  Success?: boolean;
}
export interface DisableRouteServerPropagationRequest {
  RouteServerId: string;
  RouteTableId: string;
  DryRun?: boolean;
}
export interface DisableRouteServerPropagationResult {
  RouteServerPropagation?: RouteServerPropagation;
}
export interface DisableSerialConsoleAccessRequest {
  DryRun?: boolean;
}
export interface DisableSerialConsoleAccessResult {
  SerialConsoleAccessEnabled?: boolean;
}
export interface DisableSnapshotBlockPublicAccessRequest {
  DryRun?: boolean;
}
export interface DisableSnapshotBlockPublicAccessResult {
  State?: SnapshotBlockPublicAccessState;
}
export interface DisableTransitGatewayRouteTablePropagationRequest {
  TransitGatewayRouteTableId: string;
  TransitGatewayAttachmentId?: string;
  DryRun?: boolean;
  TransitGatewayRouteTableAnnouncementId?: string;
}
export interface DisableTransitGatewayRouteTablePropagationResult {
  Propagation?: TransitGatewayPropagation;
}
export interface DisableVgwRoutePropagationRequest {
  GatewayId: string;
  RouteTableId: string;
  DryRun?: boolean;
}
export interface DisableVpcClassicLinkDnsSupportRequest {
  VpcId?: string;
}
export interface DisableVpcClassicLinkDnsSupportResult {
  Return?: boolean;
}
export interface DisableVpcClassicLinkRequest {
  DryRun?: boolean;
  VpcId: string;
}
export interface DisableVpcClassicLinkResult {
  Return?: boolean;
}
export interface DisassociateAddressRequest {
  AssociationId?: string;
  PublicIp?: string;
  DryRun?: boolean;
}
export interface DisassociateCapacityReservationBillingOwnerRequest {
  DryRun?: boolean;
  CapacityReservationId: string;
  UnusedReservationBillingOwnerId: string;
}
export interface DisassociateCapacityReservationBillingOwnerResult {
  Return?: boolean;
}
export interface DisassociateClientVpnTargetNetworkRequest {
  ClientVpnEndpointId: string;
  AssociationId: string;
  DryRun?: boolean;
}
export interface DisassociateClientVpnTargetNetworkResult {
  AssociationId?: string;
  Status?: AssociationStatus;
}
export interface DisassociateEnclaveCertificateIamRoleRequest {
  CertificateArn: string;
  RoleArn: string;
  DryRun?: boolean;
}
export interface DisassociateEnclaveCertificateIamRoleResult {
  Return?: boolean;
}
export interface DisassociateIamInstanceProfileRequest {
  AssociationId: string;
}
export interface DisassociateIamInstanceProfileResult {
  IamInstanceProfileAssociation?: IamInstanceProfileAssociation;
}
export interface DisassociateInstanceEventWindowRequest {
  DryRun?: boolean;
  InstanceEventWindowId: string;
  AssociationTarget: InstanceEventWindowDisassociationRequest;
}
export interface DisassociateInstanceEventWindowResult {
  InstanceEventWindow?: InstanceEventWindow;
}
export interface DisassociateIpamByoasnRequest {
  DryRun?: boolean;
  Asn: string;
  Cidr: string;
}
export interface DisassociateIpamByoasnResult {
  AsnAssociation?: AsnAssociation;
}
export interface DisassociateIpamResourceDiscoveryRequest {
  DryRun?: boolean;
  IpamResourceDiscoveryAssociationId: string;
}
export interface DisassociateIpamResourceDiscoveryResult {
  IpamResourceDiscoveryAssociation?: IpamResourceDiscoveryAssociation;
}
export interface DisassociateNatGatewayAddressRequest {
  NatGatewayId: string;
  AssociationIds: Array<string>;
  MaxDrainDurationSeconds?: number;
  DryRun?: boolean;
}
export interface DisassociateNatGatewayAddressResult {
  NatGatewayId?: string;
  NatGatewayAddresses?: Array<NatGatewayAddress>;
}
export interface DisassociateRouteServerRequest {
  RouteServerId: string;
  VpcId: string;
  DryRun?: boolean;
}
export interface DisassociateRouteServerResult {
  RouteServerAssociation?: RouteServerAssociation;
}
export interface DisassociateRouteTableRequest {
  DryRun?: boolean;
  AssociationId: string;
}
export interface DisassociateSecurityGroupVpcRequest {
  GroupId: string;
  VpcId: string;
  DryRun?: boolean;
}
export interface DisassociateSecurityGroupVpcResult {
  State?: SecurityGroupVpcAssociationState;
}
export type DisassociateSecurityGroupVpcSecurityGroupId = string;

export interface DisassociateSubnetCidrBlockRequest {
  AssociationId: string;
}
export interface DisassociateSubnetCidrBlockResult {
  Ipv6CidrBlockAssociation?: SubnetIpv6CidrBlockAssociation;
  SubnetId?: string;
}
export interface DisassociateTransitGatewayMulticastDomainRequest {
  TransitGatewayMulticastDomainId: string;
  TransitGatewayAttachmentId: string;
  SubnetIds: Array<string>;
  DryRun?: boolean;
}
export interface DisassociateTransitGatewayMulticastDomainResult {
  Associations?: TransitGatewayMulticastDomainAssociations;
}
export interface DisassociateTransitGatewayPolicyTableRequest {
  TransitGatewayPolicyTableId: string;
  TransitGatewayAttachmentId: string;
  DryRun?: boolean;
}
export interface DisassociateTransitGatewayPolicyTableResult {
  Association?: TransitGatewayPolicyTableAssociation;
}
export interface DisassociateTransitGatewayRouteTableRequest {
  TransitGatewayRouteTableId: string;
  TransitGatewayAttachmentId: string;
  DryRun?: boolean;
}
export interface DisassociateTransitGatewayRouteTableResult {
  Association?: TransitGatewayAssociation;
}
export interface DisassociateTrunkInterfaceRequest {
  AssociationId: string;
  ClientToken?: string;
  DryRun?: boolean;
}
export interface DisassociateTrunkInterfaceResult {
  Return?: boolean;
  ClientToken?: string;
}
export interface DisassociateVpcCidrBlockRequest {
  AssociationId: string;
}
export interface DisassociateVpcCidrBlockResult {
  Ipv6CidrBlockAssociation?: VpcIpv6CidrBlockAssociation;
  CidrBlockAssociation?: VpcCidrBlockAssociation;
  VpcId?: string;
}
export type DiskCount = number;

export interface DiskImage {
  Description?: string;
  Image?: DiskImageDetail;
  Volume?: VolumeDetail;
}
export interface DiskImageDescription {
  Checksum?: string;
  Format?: DiskImageFormat;
  ImportManifestUrl?: string;
  Size?: number;
}
export interface DiskImageDetail {
  Format: DiskImageFormat;
  Bytes: number;
  ImportManifestUrl: string;
}
export type DiskImageFormat = "VMDK" | "RAW" | "VHD";
export type DiskImageList = Array<DiskImage>;
export interface DiskImageVolumeDescription {
  Id?: string;
  Size?: number;
}
export interface DiskInfo {
  SizeInGB?: number;
  Count?: number;
  Type?: DiskType;
}
export type DiskInfoList = Array<DiskInfo>;
export type DiskSize = number;

export type DiskType = "hdd" | "ssd";
export type DITMaxResults = number;

export type DITOMaxResults = number;

export interface DnsEntry {
  DnsName?: string;
  HostedZoneId?: string;
}
export type DnsEntrySet = Array<DnsEntry>;
export type DnsNameState = "PendingVerification" | "Verified" | "Failed";
export interface DnsOptions {
  DnsRecordIpType?: DnsRecordIpType;
  PrivateDnsOnlyForInboundResolverEndpoint?: boolean;
}
export interface DnsOptionsSpecification {
  DnsRecordIpType?: DnsRecordIpType;
  PrivateDnsOnlyForInboundResolverEndpoint?: boolean;
}
export type DnsRecordIpType = "ipv4" | "dualstack" | "ipv6" | "service_defined";
export interface DnsServersOptionsModifyStructure {
  CustomDnsServers?: Array<string>;
  Enabled?: boolean;
}
export type DnsSupportValue = "enable" | "disable";
export type DomainType = "vpc" | "standard";
export type Double = number;

export type DoubleWithConstraints = number;

export type DrainSeconds = number;

export type DynamicRoutingValue = "enable" | "disable";
export interface EbsBlockDevice {
  DeleteOnTermination?: boolean;
  Iops?: number;
  SnapshotId?: string;
  VolumeSize?: number;
  VolumeType?: VolumeType;
  KmsKeyId?: string;
  Throughput?: number;
  OutpostArn?: string;
  AvailabilityZone?: string;
  Encrypted?: boolean;
  VolumeInitializationRate?: number;
  AvailabilityZoneId?: string;
}
export interface EbsBlockDeviceResponse {
  Encrypted?: boolean;
  DeleteOnTermination?: boolean;
  Iops?: number;
  Throughput?: number;
  KmsKeyId?: string;
  SnapshotId?: string;
  VolumeSize?: number;
  VolumeType?: VolumeType;
}
export type EbsEncryptionSupport = "unsupported" | "supported";
export interface EbsInfo {
  EbsOptimizedSupport?: EbsOptimizedSupport;
  EncryptionSupport?: EbsEncryptionSupport;
  EbsOptimizedInfo?: EbsOptimizedInfo;
  NvmeSupport?: EbsNvmeSupport;
}
export interface EbsInstanceBlockDevice {
  AttachTime?: Date | string;
  DeleteOnTermination?: boolean;
  Status?: AttachmentStatus;
  VolumeId?: string;
  AssociatedResource?: string;
  VolumeOwnerId?: string;
  Operator?: OperatorResponse;
}
export interface EbsInstanceBlockDeviceSpecification {
  VolumeId?: string;
  DeleteOnTermination?: boolean;
}
export type EbsNvmeSupport = "UNSUPPORTED" | "SUPPORTED" | "REQUIRED";
export interface EbsOptimizedInfo {
  BaselineBandwidthInMbps?: number;
  BaselineThroughputInMBps?: number;
  BaselineIops?: number;
  MaximumBandwidthInMbps?: number;
  MaximumThroughputInMBps?: number;
  MaximumIops?: number;
}
export type EbsOptimizedSupport = "unsupported" | "supported" | "default";
export interface EbsStatusDetails {
  ImpairedSince?: Date | string;
  Name?: StatusName;
  Status?: StatusType;
}
export type EbsStatusDetailsList = Array<EbsStatusDetails>;
export interface EbsStatusSummary {
  Details?: Array<EbsStatusDetails>;
  Status?: SummaryStatus;
}
export interface Ec2InstanceConnectEndpoint {
  OwnerId?: string;
  InstanceConnectEndpointId?: string;
  InstanceConnectEndpointArn?: string;
  State?: Ec2InstanceConnectEndpointState;
  StateMessage?: string;
  DnsName?: string;
  FipsDnsName?: string;
  NetworkInterfaceIds?: Array<string>;
  VpcId?: string;
  AvailabilityZone?: string;
  CreatedAt?: Date | string;
  SubnetId?: string;
  PreserveClientIp?: boolean;
  SecurityGroupIds?: Array<string>;
  Tags?: Array<Tag>;
}
export type Ec2InstanceConnectEndpointState = "create_in_progress" | "create_complete" | "create_failed" | "delete_in_progress" | "delete_complete" | "delete_failed";
export interface EfaInfo {
  MaximumEfaInterfaces?: number;
}
export type EfaSupportedFlag = boolean;

export interface EgressOnlyInternetGateway {
  Attachments?: Array<InternetGatewayAttachment>;
  EgressOnlyInternetGatewayId?: string;
  Tags?: Array<Tag>;
}
export type EgressOnlyInternetGatewayId = string;

export type EgressOnlyInternetGatewayIdList = Array<string>;
export type EgressOnlyInternetGatewayList = Array<EgressOnlyInternetGateway>;
export type EipAllocationPublicIp = string;

export type EipAssociationIdList = Array<string>;
export type EkPubKeyFormat = "der" | "tpmt";
export type EkPubKeyType = "RSA_2048" | "ECC_SEC_P384";
export type EkPubKeyValue = string;

export interface ElasticGpuAssociation {
  ElasticGpuId?: string;
  ElasticGpuAssociationId?: string;
  ElasticGpuAssociationState?: string;
  ElasticGpuAssociationTime?: string;
}
export type ElasticGpuAssociationList = Array<ElasticGpuAssociation>;
export interface ElasticGpuHealth {
  Status?: ElasticGpuStatus;
}
export type ElasticGpuId = string;

export type ElasticGpuIdSet = Array<string>;
export interface ElasticGpus {
  ElasticGpuId?: string;
  AvailabilityZone?: string;
  ElasticGpuType?: string;
  ElasticGpuHealth?: ElasticGpuHealth;
  ElasticGpuState?: ElasticGpuState;
  InstanceId?: string;
  Tags?: Array<Tag>;
}
export type ElasticGpuSet = Array<ElasticGpus>;
export interface ElasticGpuSpecification {
  Type: string;
}
export type ElasticGpuSpecificationList = Array<ElasticGpuSpecification>;
export interface ElasticGpuSpecificationResponse {
  Type?: string;
}
export type ElasticGpuSpecificationResponseList = Array<ElasticGpuSpecificationResponse>;
export type ElasticGpuSpecifications = Array<ElasticGpuSpecification>;
export type ElasticGpuState = "Attached";
export type ElasticGpuStatus = "Ok" | "Impaired";
export interface ElasticInferenceAccelerator {
  Type: string;
  Count?: number;
}
export interface ElasticInferenceAcceleratorAssociation {
  ElasticInferenceAcceleratorArn?: string;
  ElasticInferenceAcceleratorAssociationId?: string;
  ElasticInferenceAcceleratorAssociationState?: string;
  ElasticInferenceAcceleratorAssociationTime?: Date | string;
}
export type ElasticInferenceAcceleratorAssociationList = Array<ElasticInferenceAcceleratorAssociation>;
export type ElasticInferenceAcceleratorCount = number;

export type ElasticInferenceAccelerators = Array<ElasticInferenceAccelerator>;
export type ElasticIpAssociationId = string;

export interface EnableAddressTransferRequest {
  AllocationId: string;
  TransferAccountId: string;
  DryRun?: boolean;
}
export interface EnableAddressTransferResult {
  AddressTransfer?: AddressTransfer;
}
export interface EnableAllowedImagesSettingsRequest {
  AllowedImagesSettingsState: AllowedImagesSettingsEnabledState;
  DryRun?: boolean;
}
export interface EnableAllowedImagesSettingsResult {
  AllowedImagesSettingsState?: AllowedImagesSettingsEnabledState;
}
export interface EnableAwsNetworkPerformanceMetricSubscriptionRequest {
  Source?: string;
  Destination?: string;
  Metric?: MetricType;
  Statistic?: StatisticType;
  DryRun?: boolean;
}
export interface EnableAwsNetworkPerformanceMetricSubscriptionResult {
  Output?: boolean;
}
export interface EnableEbsEncryptionByDefaultRequest {
  DryRun?: boolean;
}
export interface EnableEbsEncryptionByDefaultResult {
  EbsEncryptionByDefault?: boolean;
}
export interface EnableFastLaunchRequest {
  ImageId: string;
  ResourceType?: string;
  SnapshotConfiguration?: FastLaunchSnapshotConfigurationRequest;
  LaunchTemplate?: FastLaunchLaunchTemplateSpecificationRequest;
  MaxParallelLaunches?: number;
  DryRun?: boolean;
}
export interface EnableFastLaunchResult {
  ImageId?: string;
  ResourceType?: FastLaunchResourceType;
  SnapshotConfiguration?: FastLaunchSnapshotConfigurationResponse;
  LaunchTemplate?: FastLaunchLaunchTemplateSpecificationResponse;
  MaxParallelLaunches?: number;
  OwnerId?: string;
  State?: FastLaunchStateCode;
  StateTransitionReason?: string;
  StateTransitionTime?: Date | string;
}
export interface EnableFastSnapshotRestoreErrorItem {
  SnapshotId?: string;
  FastSnapshotRestoreStateErrors?: Array<EnableFastSnapshotRestoreStateErrorItem>;
}
export type EnableFastSnapshotRestoreErrorSet = Array<EnableFastSnapshotRestoreErrorItem>;
export interface EnableFastSnapshotRestoresRequest {
  AvailabilityZones: Array<string>;
  SourceSnapshotIds: Array<string>;
  DryRun?: boolean;
}
export interface EnableFastSnapshotRestoresResult {
  Successful?: Array<EnableFastSnapshotRestoreSuccessItem>;
  Unsuccessful?: Array<EnableFastSnapshotRestoreErrorItem>;
}
export interface EnableFastSnapshotRestoreStateError {
  Code?: string;
  Message?: string;
}
export interface EnableFastSnapshotRestoreStateErrorItem {
  AvailabilityZone?: string;
  Error?: EnableFastSnapshotRestoreStateError;
}
export type EnableFastSnapshotRestoreStateErrorSet = Array<EnableFastSnapshotRestoreStateErrorItem>;
export interface EnableFastSnapshotRestoreSuccessItem {
  SnapshotId?: string;
  AvailabilityZone?: string;
  State?: FastSnapshotRestoreStateCode;
  StateTransitionReason?: string;
  OwnerId?: string;
  OwnerAlias?: string;
  EnablingTime?: Date | string;
  OptimizingTime?: Date | string;
  EnabledTime?: Date | string;
  DisablingTime?: Date | string;
  DisabledTime?: Date | string;
}
export type EnableFastSnapshotRestoreSuccessSet = Array<EnableFastSnapshotRestoreSuccessItem>;
export interface EnableImageBlockPublicAccessRequest {
  ImageBlockPublicAccessState: ImageBlockPublicAccessEnabledState;
  DryRun?: boolean;
}
export interface EnableImageBlockPublicAccessResult {
  ImageBlockPublicAccessState?: ImageBlockPublicAccessEnabledState;
}
export interface EnableImageDeprecationRequest {
  ImageId: string;
  DeprecateAt: Date | string;
  DryRun?: boolean;
}
export interface EnableImageDeprecationResult {
  Return?: boolean;
}
export interface EnableImageDeregistrationProtectionRequest {
  ImageId: string;
  WithCooldown?: boolean;
  DryRun?: boolean;
}
export interface EnableImageDeregistrationProtectionResult {
  Return?: string;
}
export interface EnableImageRequest {
  ImageId: string;
  DryRun?: boolean;
}
export interface EnableImageResult {
  Return?: boolean;
}
export interface EnableIpamOrganizationAdminAccountRequest {
  DryRun?: boolean;
  DelegatedAdminAccountId: string;
}
export interface EnableIpamOrganizationAdminAccountResult {
  Success?: boolean;
}
export interface EnableReachabilityAnalyzerOrganizationSharingRequest {
  DryRun?: boolean;
}
export interface EnableReachabilityAnalyzerOrganizationSharingResult {
  ReturnValue?: boolean;
}
export interface EnableRouteServerPropagationRequest {
  RouteServerId: string;
  RouteTableId: string;
  DryRun?: boolean;
}
export interface EnableRouteServerPropagationResult {
  RouteServerPropagation?: RouteServerPropagation;
}
export interface EnableSerialConsoleAccessRequest {
  DryRun?: boolean;
}
export interface EnableSerialConsoleAccessResult {
  SerialConsoleAccessEnabled?: boolean;
}
export interface EnableSnapshotBlockPublicAccessRequest {
  State: SnapshotBlockPublicAccessState;
  DryRun?: boolean;
}
export interface EnableSnapshotBlockPublicAccessResult {
  State?: SnapshotBlockPublicAccessState;
}
export interface EnableTransitGatewayRouteTablePropagationRequest {
  TransitGatewayRouteTableId: string;
  TransitGatewayAttachmentId?: string;
  DryRun?: boolean;
  TransitGatewayRouteTableAnnouncementId?: string;
}
export interface EnableTransitGatewayRouteTablePropagationResult {
  Propagation?: TransitGatewayPropagation;
}
export interface EnableVgwRoutePropagationRequest {
  GatewayId: string;
  RouteTableId: string;
  DryRun?: boolean;
}
export interface EnableVolumeIORequest {
  DryRun?: boolean;
  VolumeId: string;
}
export interface EnableVpcClassicLinkDnsSupportRequest {
  VpcId?: string;
}
export interface EnableVpcClassicLinkDnsSupportResult {
  Return?: boolean;
}
export interface EnableVpcClassicLinkRequest {
  DryRun?: boolean;
  VpcId: string;
}
export interface EnableVpcClassicLinkResult {
  Return?: boolean;
}
export interface EnaSrdSpecification {
  EnaSrdEnabled?: boolean;
  EnaSrdUdpSpecification?: EnaSrdUdpSpecification;
}
export interface EnaSrdSpecificationRequest {
  EnaSrdEnabled?: boolean;
  EnaSrdUdpSpecification?: EnaSrdUdpSpecificationRequest;
}
export type EnaSrdSupported = boolean;

export interface EnaSrdUdpSpecification {
  EnaSrdUdpEnabled?: boolean;
}
export interface EnaSrdUdpSpecificationRequest {
  EnaSrdUdpEnabled?: boolean;
}
export type EnaSupport = "unsupported" | "supported" | "required";
export interface EnclaveOptions {
  Enabled?: boolean;
}
export interface EnclaveOptionsRequest {
  Enabled?: boolean;
}
export type EncryptionInTransitSupported = boolean;

export type EndDateType = "unlimited" | "limited";
export type EndpointSet = Array<ClientVpnEndpoint>;
export type EphemeralNvmeSupport = "UNSUPPORTED" | "SUPPORTED" | "REQUIRED";
export type ErrorSet = Array<ValidationError>;
export type EventCode = "instance_reboot" | "system_reboot" | "system_maintenance" | "instance_retirement" | "instance_stop";
export interface EventInformation {
  EventDescription?: string;
  EventSubType?: string;
  InstanceId?: string;
}
export type EventType = "INSTANCE_CHANGE" | "BATCH_CHANGE" | "ERROR" | "INFORMATION";
export type ExcessCapacityTerminationPolicy = "NO_TERMINATION" | "DEFAULT";
export type ExcludedInstanceType = string;

export type ExcludedInstanceTypeSet = Array<string>;
export type ExecutableByStringList = Array<string>;
export interface Explanation {
  Acl?: AnalysisComponent;
  AclRule?: AnalysisAclRule;
  Address?: string;
  Addresses?: Array<string>;
  AttachedTo?: AnalysisComponent;
  AvailabilityZones?: Array<string>;
  AvailabilityZoneIds?: Array<string>;
  Cidrs?: Array<string>;
  Component?: AnalysisComponent;
  CustomerGateway?: AnalysisComponent;
  Destination?: AnalysisComponent;
  DestinationVpc?: AnalysisComponent;
  Direction?: string;
  ExplanationCode?: string;
  IngressRouteTable?: AnalysisComponent;
  InternetGateway?: AnalysisComponent;
  LoadBalancerArn?: string;
  ClassicLoadBalancerListener?: AnalysisLoadBalancerListener;
  LoadBalancerListenerPort?: number;
  LoadBalancerTarget?: AnalysisLoadBalancerTarget;
  LoadBalancerTargetGroup?: AnalysisComponent;
  LoadBalancerTargetGroups?: Array<AnalysisComponent>;
  LoadBalancerTargetPort?: number;
  ElasticLoadBalancerListener?: AnalysisComponent;
  MissingComponent?: string;
  NatGateway?: AnalysisComponent;
  NetworkInterface?: AnalysisComponent;
  PacketField?: string;
  VpcPeeringConnection?: AnalysisComponent;
  Port?: number;
  PortRanges?: Array<PortRange>;
  PrefixList?: AnalysisComponent;
  Protocols?: Array<string>;
  RouteTableRoute?: AnalysisRouteTableRoute;
  RouteTable?: AnalysisComponent;
  SecurityGroup?: AnalysisComponent;
  SecurityGroupRule?: AnalysisSecurityGroupRule;
  SecurityGroups?: Array<AnalysisComponent>;
  SourceVpc?: AnalysisComponent;
  State?: string;
  Subnet?: AnalysisComponent;
  SubnetRouteTable?: AnalysisComponent;
  Vpc?: AnalysisComponent;
  VpcEndpoint?: AnalysisComponent;
  VpnConnection?: AnalysisComponent;
  VpnGateway?: AnalysisComponent;
  TransitGateway?: AnalysisComponent;
  TransitGatewayRouteTable?: AnalysisComponent;
  TransitGatewayRouteTableRoute?: TransitGatewayRouteTableRoute;
  TransitGatewayAttachment?: AnalysisComponent;
  ComponentAccount?: string;
  ComponentRegion?: string;
  FirewallStatelessRule?: FirewallStatelessRule;
  FirewallStatefulRule?: FirewallStatefulRule;
}
export type ExplanationList = Array<Explanation>;
export interface ExportClientVpnClientCertificateRevocationListRequest {
  ClientVpnEndpointId: string;
  DryRun?: boolean;
}
export interface ExportClientVpnClientCertificateRevocationListResult {
  CertificateRevocationList?: string;
  Status?: ClientCertificateRevocationListStatus;
}
export interface ExportClientVpnClientConfigurationRequest {
  ClientVpnEndpointId: string;
  DryRun?: boolean;
}
export interface ExportClientVpnClientConfigurationResult {
  ClientConfiguration?: string;
}
export type ExportEnvironment = "citrix" | "vmware" | "microsoft";
export interface ExportImageRequest {
  ClientToken?: string;
  Description?: string;
  DiskImageFormat: DiskImageFormat;
  DryRun?: boolean;
  ImageId: string;
  S3ExportLocation: ExportTaskS3LocationRequest;
  RoleName?: string;
  TagSpecifications?: Array<TagSpecification>;
}
export interface ExportImageResult {
  Description?: string;
  DiskImageFormat?: DiskImageFormat;
  ExportImageTaskId?: string;
  ImageId?: string;
  RoleName?: string;
  Progress?: string;
  S3ExportLocation?: ExportTaskS3Location;
  Status?: string;
  StatusMessage?: string;
  Tags?: Array<Tag>;
}
export interface ExportImageTask {
  Description?: string;
  ExportImageTaskId?: string;
  ImageId?: string;
  Progress?: string;
  S3ExportLocation?: ExportTaskS3Location;
  Status?: string;
  StatusMessage?: string;
  Tags?: Array<Tag>;
}
export type ExportImageTaskId = string;

export type ExportImageTaskIdList = Array<string>;
export type ExportImageTaskList = Array<ExportImageTask>;
export interface ExportTask {
  Description?: string;
  ExportTaskId?: string;
  ExportToS3Task?: ExportToS3Task;
  InstanceExportDetails?: InstanceExportDetails;
  State?: ExportTaskState;
  StatusMessage?: string;
  Tags?: Array<Tag>;
}
export type ExportTaskId = string;

export type ExportTaskIdStringList = Array<string>;
export type ExportTaskList = Array<ExportTask>;
export interface ExportTaskS3Location {
  S3Bucket?: string;
  S3Prefix?: string;
}
export interface ExportTaskS3LocationRequest {
  S3Bucket: string;
  S3Prefix?: string;
}
export type ExportTaskState = "active" | "cancelling" | "cancelled" | "completed";
export interface ExportToS3Task {
  ContainerFormat?: ContainerFormat;
  DiskImageFormat?: DiskImageFormat;
  S3Bucket?: string;
  S3Key?: string;
}
export interface ExportToS3TaskSpecification {
  DiskImageFormat?: DiskImageFormat;
  ContainerFormat?: ContainerFormat;
  S3Bucket?: string;
  S3Prefix?: string;
}
export interface ExportTransitGatewayRoutesRequest {
  TransitGatewayRouteTableId: string;
  Filters?: Array<Filter>;
  S3Bucket: string;
  DryRun?: boolean;
}
export interface ExportTransitGatewayRoutesResult {
  S3Location?: string;
}
export interface ExportVerifiedAccessInstanceClientConfigurationRequest {
  VerifiedAccessInstanceId: string;
  DryRun?: boolean;
}
export interface ExportVerifiedAccessInstanceClientConfigurationResult {
  Version?: string;
  VerifiedAccessInstanceId?: string;
  Region?: string;
  DeviceTrustProviders?: Array<DeviceTrustProviderType>;
  UserTrustProvider?: VerifiedAccessInstanceUserTrustProviderClientConfiguration;
  OpenVpnConfigurations?: Array<VerifiedAccessInstanceOpenVpnClientConfiguration>;
}
export type ExportVmTaskId = string;

export interface FailedCapacityReservationFleetCancellationResult {
  CapacityReservationFleetId?: string;
  CancelCapacityReservationFleetError?: CancelCapacityReservationFleetError;
}
export type FailedCapacityReservationFleetCancellationResultSet = Array<FailedCapacityReservationFleetCancellationResult>;
export interface FailedQueuedPurchaseDeletion {
  Error?: DeleteQueuedReservedInstancesError;
  ReservedInstancesId?: string;
}
export type FailedQueuedPurchaseDeletionSet = Array<FailedQueuedPurchaseDeletion>;
export type FastLaunchImageIdList = Array<string>;
export interface FastLaunchLaunchTemplateSpecificationRequest {
  LaunchTemplateId?: string;
  LaunchTemplateName?: string;
  Version: string;
}
export interface FastLaunchLaunchTemplateSpecificationResponse {
  LaunchTemplateId?: string;
  LaunchTemplateName?: string;
  Version?: string;
}
export type FastLaunchResourceType = "SNAPSHOT";
export interface FastLaunchSnapshotConfigurationRequest {
  TargetResourceCount?: number;
}
export interface FastLaunchSnapshotConfigurationResponse {
  TargetResourceCount?: number;
}
export type FastLaunchStateCode = "enabling" | "enabling_failed" | "enabled" | "enabled_failed" | "disabling" | "disabling_failed";
export type FastSnapshotRestoreStateCode = "enabling" | "optimizing" | "enabled" | "disabling" | "disabled";
export interface FederatedAuthentication {
  SamlProviderArn?: string;
  SelfServiceSamlProviderArn?: string;
}
export interface FederatedAuthenticationRequest {
  SAMLProviderArn?: string;
  SelfServiceSAMLProviderArn?: string;
}
export interface Filter {
  Name?: string;
  Values?: Array<string>;
}
export type FilterList = Array<Filter>;
export interface FilterPortRange {
  FromPort?: number;
  ToPort?: number;
}
export type FindingsFound = "true" | "false" | "unknown";
export interface FirewallStatefulRule {
  RuleGroupArn?: string;
  Sources?: Array<string>;
  Destinations?: Array<string>;
  SourcePorts?: Array<PortRange>;
  DestinationPorts?: Array<PortRange>;
  Protocol?: string;
  RuleAction?: string;
  Direction?: string;
}
export interface FirewallStatelessRule {
  RuleGroupArn?: string;
  Sources?: Array<string>;
  Destinations?: Array<string>;
  SourcePorts?: Array<PortRange>;
  DestinationPorts?: Array<PortRange>;
  Protocols?: Array<number>;
  RuleAction?: string;
  Priority?: number;
}
export type FleetActivityStatus = "ERROR" | "PENDING_FULFILLMENT" | "PENDING_TERMINATION" | "FULFILLED";
export interface FleetBlockDeviceMappingRequest {
  DeviceName?: string;
  VirtualName?: string;
  Ebs?: FleetEbsBlockDeviceRequest;
  NoDevice?: string;
}
export type FleetBlockDeviceMappingRequestList = Array<FleetBlockDeviceMappingRequest>;
export interface FleetCapacityReservation {
  CapacityReservationId?: string;
  AvailabilityZoneId?: string;
  InstanceType?: InstanceType;
  InstancePlatform?: CapacityReservationInstancePlatform;
  AvailabilityZone?: string;
  TotalInstanceCount?: number;
  FulfilledCapacity?: number;
  EbsOptimized?: boolean;
  CreateDate?: Date | string;
  Weight?: number;
  Priority?: number;
}
export type FleetCapacityReservationSet = Array<FleetCapacityReservation>;
export type FleetCapacityReservationTenancy = "default";
export type FleetCapacityReservationUsageStrategy = "USE_CAPACITY_RESERVATIONS_FIRST";
export interface FleetData {
  ActivityStatus?: FleetActivityStatus;
  CreateTime?: Date | string;
  FleetId?: string;
  FleetState?: FleetStateCode;
  ClientToken?: string;
  ExcessCapacityTerminationPolicy?: FleetExcessCapacityTerminationPolicy;
  FulfilledCapacity?: number;
  FulfilledOnDemandCapacity?: number;
  LaunchTemplateConfigs?: Array<FleetLaunchTemplateConfig>;
  TargetCapacitySpecification?: TargetCapacitySpecification;
  TerminateInstancesWithExpiration?: boolean;
  Type?: FleetType;
  ValidFrom?: Date | string;
  ValidUntil?: Date | string;
  ReplaceUnhealthyInstances?: boolean;
  SpotOptions?: SpotOptions;
  OnDemandOptions?: OnDemandOptions;
  Tags?: Array<Tag>;
  Errors?: Array<DescribeFleetError>;
  Instances?: Array<DescribeFleetsInstances>;
  Context?: string;
}
export interface FleetEbsBlockDeviceRequest {
  Encrypted?: boolean;
  DeleteOnTermination?: boolean;
  Iops?: number;
  Throughput?: number;
  KmsKeyId?: string;
  SnapshotId?: string;
  VolumeSize?: number;
  VolumeType?: VolumeType;
}
export type FleetEventType = "INSTANCE_CHANGE" | "FLEET_CHANGE" | "SERVICE_ERROR";
export type FleetExcessCapacityTerminationPolicy = "NO_TERMINATION" | "TERMINATION";
export type FleetId = string;

export type FleetIdSet = Array<string>;
export type FleetInstanceMatchCriteria = "open";
export interface FleetLaunchTemplateConfig {
  LaunchTemplateSpecification?: FleetLaunchTemplateSpecification;
  Overrides?: Array<FleetLaunchTemplateOverrides>;
}
export type FleetLaunchTemplateConfigList = Array<FleetLaunchTemplateConfig>;
export type FleetLaunchTemplateConfigListRequest = Array<FleetLaunchTemplateConfigRequest>;
export interface FleetLaunchTemplateConfigRequest {
  LaunchTemplateSpecification?: FleetLaunchTemplateSpecificationRequest;
  Overrides?: Array<FleetLaunchTemplateOverridesRequest>;
}
export interface FleetLaunchTemplateOverrides {
  InstanceType?: InstanceType;
  MaxPrice?: string;
  SubnetId?: string;
  AvailabilityZone?: string;
  WeightedCapacity?: number;
  Priority?: number;
  Placement?: PlacementResponse;
  InstanceRequirements?: InstanceRequirements;
  ImageId?: string;
  BlockDeviceMappings?: Array<BlockDeviceMappingResponse>;
}
export type FleetLaunchTemplateOverridesList = Array<FleetLaunchTemplateOverrides>;
export type FleetLaunchTemplateOverridesListRequest = Array<FleetLaunchTemplateOverridesRequest>;
export interface FleetLaunchTemplateOverridesRequest {
  InstanceType?: InstanceType;
  MaxPrice?: string;
  SubnetId?: string;
  AvailabilityZone?: string;
  WeightedCapacity?: number;
  Priority?: number;
  Placement?: Placement;
  BlockDeviceMappings?: Array<FleetBlockDeviceMappingRequest>;
  InstanceRequirements?: InstanceRequirementsRequest;
  ImageId?: string;
}
export interface FleetLaunchTemplateSpecification {
  LaunchTemplateId?: string;
  LaunchTemplateName?: string;
  Version?: string;
}
export interface FleetLaunchTemplateSpecificationRequest {
  LaunchTemplateId?: string;
  LaunchTemplateName?: string;
  Version?: string;
}
export type FleetOnDemandAllocationStrategy = "LOWEST_PRICE" | "PRIORITIZED";
export type FleetReplacementStrategy = "LAUNCH" | "LAUNCH_BEFORE_TERMINATE";
export type FleetSet = Array<FleetData>;
export interface FleetSpotCapacityRebalance {
  ReplacementStrategy?: FleetReplacementStrategy;
  TerminationDelay?: number;
}
export interface FleetSpotCapacityRebalanceRequest {
  ReplacementStrategy?: FleetReplacementStrategy;
  TerminationDelay?: number;
}
export interface FleetSpotMaintenanceStrategies {
  CapacityRebalance?: FleetSpotCapacityRebalance;
}
export interface FleetSpotMaintenanceStrategiesRequest {
  CapacityRebalance?: FleetSpotCapacityRebalanceRequest;
}
export type FleetStateCode = "SUBMITTED" | "ACTIVE" | "DELETED" | "FAILED" | "DELETED_RUNNING" | "DELETED_TERMINATING_INSTANCES" | "MODIFYING";
export type FleetType = "REQUEST" | "MAINTAIN" | "INSTANT";
export type FlexibleEnaQueuesSupport = "UNSUPPORTED" | "SUPPORTED";
export type Float = number;

export interface FlowLog {
  CreationTime?: Date | string;
  DeliverLogsErrorMessage?: string;
  DeliverLogsPermissionArn?: string;
  DeliverCrossAccountRole?: string;
  DeliverLogsStatus?: string;
  FlowLogId?: string;
  FlowLogStatus?: string;
  LogGroupName?: string;
  ResourceId?: string;
  TrafficType?: TrafficType;
  LogDestinationType?: LogDestinationType;
  LogDestination?: string;
  LogFormat?: string;
  Tags?: Array<Tag>;
  MaxAggregationInterval?: number;
  DestinationOptions?: DestinationOptionsResponse;
}
export type FlowLogIdList = Array<string>;
export type FlowLogResourceId = string;

export type FlowLogResourceIds = Array<string>;
export type FlowLogSet = Array<FlowLog>;
export type FlowLogsResourceType = "VPC" | "Subnet" | "NetworkInterface" | "TransitGateway" | "TransitGatewayAttachment";
export type FpgaDeviceCount = number;

export interface FpgaDeviceInfo {
  Name?: string;
  Manufacturer?: string;
  Count?: number;
  MemoryInfo?: FpgaDeviceMemoryInfo;
}
export type FpgaDeviceInfoList = Array<FpgaDeviceInfo>;
export type FpgaDeviceManufacturerName = string;

export interface FpgaDeviceMemoryInfo {
  SizeInMiB?: number;
}
export type FpgaDeviceMemorySize = number;

export type FpgaDeviceName = string;

export interface FpgaImage {
  FpgaImageId?: string;
  FpgaImageGlobalId?: string;
  Name?: string;
  Description?: string;
  ShellVersion?: string;
  PciId?: PciId;
  State?: FpgaImageState;
  CreateTime?: Date | string;
  UpdateTime?: Date | string;
  OwnerId?: string;
  OwnerAlias?: string;
  ProductCodes?: Array<ProductCode>;
  Tags?: Array<Tag>;
  Public?: boolean;
  DataRetentionSupport?: boolean;
  InstanceTypes?: Array<string>;
}
export interface FpgaImageAttribute {
  FpgaImageId?: string;
  Name?: string;
  Description?: string;
  LoadPermissions?: Array<LoadPermission>;
  ProductCodes?: Array<ProductCode>;
}
export type FpgaImageAttributeName = "description" | "name" | "loadPermission" | "productCodes";
export type FpgaImageId = string;

export type FpgaImageIdList = Array<string>;
export type FpgaImageList = Array<FpgaImage>;
export interface FpgaImageState {
  Code?: FpgaImageStateCode;
  Message?: string;
}
export type FpgaImageStateCode = "pending" | "failed" | "available" | "unavailable";
export interface FpgaInfo {
  Fpgas?: Array<FpgaDeviceInfo>;
  TotalFpgaMemoryInMiB?: number;
}
export type FreeTierEligibleFlag = boolean;

export type GatewayAssociationState = "associated" | "not_associated" | "associating" | "disassociating";
export type GatewayType = "ipsec_1";
export interface GetActiveVpnTunnelStatusRequest {
  VpnConnectionId: string;
  VpnTunnelOutsideIpAddress: string;
  DryRun?: boolean;
}
export interface GetActiveVpnTunnelStatusResult {
  ActiveVpnTunnelStatus?: ActiveVpnTunnelStatus;
}
export interface GetAllowedImagesSettingsRequest {
  DryRun?: boolean;
}
export interface GetAllowedImagesSettingsResult {
  State?: string;
  ImageCriteria?: Array<ImageCriterion>;
  ManagedBy?: ManagedBy;
}
export interface GetAssociatedEnclaveCertificateIamRolesRequest {
  CertificateArn: string;
  DryRun?: boolean;
}
export interface GetAssociatedEnclaveCertificateIamRolesResult {
  AssociatedRoles?: Array<AssociatedRole>;
}
export interface GetAssociatedIpv6PoolCidrsRequest {
  PoolId: string;
  NextToken?: string;
  MaxResults?: number;
  DryRun?: boolean;
}
export interface GetAssociatedIpv6PoolCidrsResult {
  Ipv6CidrAssociations?: Array<Ipv6CidrAssociation>;
  NextToken?: string;
}
export interface GetAwsNetworkPerformanceDataRequest {
  DataQueries?: Array<DataQuery>;
  StartTime?: Date | string;
  EndTime?: Date | string;
  MaxResults?: number;
  NextToken?: string;
  DryRun?: boolean;
}
export interface GetAwsNetworkPerformanceDataResult {
  DataResponses?: Array<DataResponse>;
  NextToken?: string;
}
export interface GetCapacityReservationUsageRequest {
  CapacityReservationId: string;
  NextToken?: string;
  MaxResults?: number;
  DryRun?: boolean;
}
export type GetCapacityReservationUsageRequestMaxResults = number;

export interface GetCapacityReservationUsageResult {
  NextToken?: string;
  CapacityReservationId?: string;
  InstanceType?: string;
  TotalInstanceCount?: number;
  AvailableInstanceCount?: number;
  State?: CapacityReservationState;
  InstanceUsages?: Array<InstanceUsage>;
}
export interface GetCoipPoolUsageRequest {
  PoolId: string;
  Filters?: Array<Filter>;
  MaxResults?: number;
  NextToken?: string;
  DryRun?: boolean;
}
export interface GetCoipPoolUsageResult {
  CoipPoolId?: string;
  CoipAddressUsages?: Array<CoipAddressUsage>;
  LocalGatewayRouteTableId?: string;
  NextToken?: string;
}
export interface GetConsoleOutputRequest {
  InstanceId: string;
  Latest?: boolean;
  DryRun?: boolean;
}
export interface GetConsoleOutputResult {
  InstanceId?: string;
  Timestamp?: Date | string;
  Output?: string;
}
export interface GetConsoleScreenshotRequest {
  DryRun?: boolean;
  InstanceId: string;
  WakeUp?: boolean;
}
export interface GetConsoleScreenshotResult {
  ImageData?: string;
  InstanceId?: string;
}
export interface GetDeclarativePoliciesReportSummaryRequest {
  DryRun?: boolean;
  ReportId: string;
}
export interface GetDeclarativePoliciesReportSummaryResult {
  ReportId?: string;
  S3Bucket?: string;
  S3Prefix?: string;
  TargetId?: string;
  StartTime?: Date | string;
  EndTime?: Date | string;
  NumberOfAccounts?: number;
  NumberOfFailedAccounts?: number;
  AttributeSummaries?: Array<AttributeSummary>;
}
export interface GetDefaultCreditSpecificationRequest {
  DryRun?: boolean;
  InstanceFamily: UnlimitedSupportedInstanceFamily;
}
export interface GetDefaultCreditSpecificationResult {
  InstanceFamilyCreditSpecification?: InstanceFamilyCreditSpecification;
}
export interface GetEbsDefaultKmsKeyIdRequest {
  DryRun?: boolean;
}
export interface GetEbsDefaultKmsKeyIdResult {
  KmsKeyId?: string;
}
export interface GetEbsEncryptionByDefaultRequest {
  DryRun?: boolean;
}
export interface GetEbsEncryptionByDefaultResult {
  EbsEncryptionByDefault?: boolean;
  SseType?: SSEType;
}
export interface GetFlowLogsIntegrationTemplateRequest {
  DryRun?: boolean;
  FlowLogId: string;
  ConfigDeliveryS3DestinationArn: string;
  IntegrateServices: IntegrateServices;
}
export interface GetFlowLogsIntegrationTemplateResult {
  Result?: string;
}
export interface GetGroupsForCapacityReservationRequest {
  CapacityReservationId: string;
  NextToken?: string;
  MaxResults?: number;
  DryRun?: boolean;
}
export type GetGroupsForCapacityReservationRequestMaxResults = number;

export interface GetGroupsForCapacityReservationResult {
  NextToken?: string;
  CapacityReservationGroups?: Array<CapacityReservationGroup>;
}
export interface GetHostReservationPurchasePreviewRequest {
  HostIdSet: Array<string>;
  OfferingId: string;
}
export interface GetHostReservationPurchasePreviewResult {
  CurrencyCode?: CurrencyCodeValues;
  Purchase?: Array<Purchase>;
  TotalHourlyPrice?: string;
  TotalUpfrontPrice?: string;
}
export interface GetImageBlockPublicAccessStateRequest {
  DryRun?: boolean;
}
export interface GetImageBlockPublicAccessStateResult {
  ImageBlockPublicAccessState?: string;
  ManagedBy?: ManagedBy;
}
export interface GetInstanceMetadataDefaultsRequest {
  DryRun?: boolean;
}
export interface GetInstanceMetadataDefaultsResult {
  AccountLevel?: InstanceMetadataDefaultsResponse;
}
export interface GetInstanceTpmEkPubRequest {
  InstanceId: string;
  KeyType: EkPubKeyType;
  KeyFormat: EkPubKeyFormat;
  DryRun?: boolean;
}
export interface GetInstanceTpmEkPubResult {
  InstanceId?: string;
  KeyType?: EkPubKeyType;
  KeyFormat?: EkPubKeyFormat;
  KeyValue?: string;
}
export interface GetInstanceTypesFromInstanceRequirementsRequest {
  DryRun?: boolean;
  ArchitectureTypes: Array<ArchitectureType>;
  VirtualizationTypes: Array<VirtualizationType>;
  InstanceRequirements: InstanceRequirementsRequest;
  MaxResults?: number;
  NextToken?: string;
  Context?: string;
}
export interface GetInstanceTypesFromInstanceRequirementsResult {
  InstanceTypes?: Array<InstanceTypeInfoFromInstanceRequirements>;
  NextToken?: string;
}
export interface GetInstanceUefiDataRequest {
  InstanceId: string;
  DryRun?: boolean;
}
export interface GetInstanceUefiDataResult {
  InstanceId?: string;
  UefiData?: string;
}
export interface GetIpamAddressHistoryRequest {
  DryRun?: boolean;
  Cidr: string;
  IpamScopeId: string;
  VpcId?: string;
  StartTime?: Date | string;
  EndTime?: Date | string;
  MaxResults?: number;
  NextToken?: string;
}
export interface GetIpamAddressHistoryResult {
  HistoryRecords?: Array<IpamAddressHistoryRecord>;
  NextToken?: string;
}
export interface GetIpamDiscoveredAccountsRequest {
  DryRun?: boolean;
  IpamResourceDiscoveryId: string;
  DiscoveryRegion: string;
  Filters?: Array<Filter>;
  NextToken?: string;
  MaxResults?: number;
}
export interface GetIpamDiscoveredAccountsResult {
  IpamDiscoveredAccounts?: Array<IpamDiscoveredAccount>;
  NextToken?: string;
}
export interface GetIpamDiscoveredPublicAddressesRequest {
  DryRun?: boolean;
  IpamResourceDiscoveryId: string;
  AddressRegion: string;
  Filters?: Array<Filter>;
  NextToken?: string;
  MaxResults?: number;
}
export interface GetIpamDiscoveredPublicAddressesResult {
  IpamDiscoveredPublicAddresses?: Array<IpamDiscoveredPublicAddress>;
  OldestSampleTime?: Date | string;
  NextToken?: string;
}
export interface GetIpamDiscoveredResourceCidrsRequest {
  DryRun?: boolean;
  IpamResourceDiscoveryId: string;
  ResourceRegion: string;
  Filters?: Array<Filter>;
  NextToken?: string;
  MaxResults?: number;
}
export interface GetIpamDiscoveredResourceCidrsResult {
  IpamDiscoveredResourceCidrs?: Array<IpamDiscoveredResourceCidr>;
  NextToken?: string;
}
export type GetIpamPoolAllocationsMaxResults = number;

export interface GetIpamPoolAllocationsRequest {
  DryRun?: boolean;
  IpamPoolId: string;
  IpamPoolAllocationId?: string;
  Filters?: Array<Filter>;
  MaxResults?: number;
  NextToken?: string;
}
export interface GetIpamPoolAllocationsResult {
  IpamPoolAllocations?: Array<IpamPoolAllocation>;
  NextToken?: string;
}
export interface GetIpamPoolCidrsRequest {
  DryRun?: boolean;
  IpamPoolId: string;
  Filters?: Array<Filter>;
  MaxResults?: number;
  NextToken?: string;
}
export interface GetIpamPoolCidrsResult {
  IpamPoolCidrs?: Array<IpamPoolCidr>;
  NextToken?: string;
}
export interface GetIpamResourceCidrsRequest {
  DryRun?: boolean;
  Filters?: Array<Filter>;
  MaxResults?: number;
  NextToken?: string;
  IpamScopeId: string;
  IpamPoolId?: string;
  ResourceId?: string;
  ResourceType?: IpamResourceType;
  ResourceTag?: RequestIpamResourceTag;
  ResourceOwner?: string;
}
export interface GetIpamResourceCidrsResult {
  NextToken?: string;
  IpamResourceCidrs?: Array<IpamResourceCidr>;
}
export interface GetLaunchTemplateDataRequest {
  DryRun?: boolean;
  InstanceId: string;
}
export interface GetLaunchTemplateDataResult {
  LaunchTemplateData?: ResponseLaunchTemplateData;
}
export type GetManagedPrefixListAssociationsMaxResults = number;

export interface GetManagedPrefixListAssociationsRequest {
  DryRun?: boolean;
  PrefixListId: string;
  MaxResults?: number;
  NextToken?: string;
}
export interface GetManagedPrefixListAssociationsResult {
  PrefixListAssociations?: Array<PrefixListAssociation>;
  NextToken?: string;
}
export interface GetManagedPrefixListEntriesRequest {
  DryRun?: boolean;
  PrefixListId: string;
  TargetVersion?: number;
  MaxResults?: number;
  NextToken?: string;
}
export interface GetManagedPrefixListEntriesResult {
  Entries?: Array<PrefixListEntry>;
  NextToken?: string;
}
export type GetNetworkInsightsAccessScopeAnalysisFindingsMaxResults = number;

export interface GetNetworkInsightsAccessScopeAnalysisFindingsRequest {
  NetworkInsightsAccessScopeAnalysisId: string;
  MaxResults?: number;
  NextToken?: string;
  DryRun?: boolean;
}
export interface GetNetworkInsightsAccessScopeAnalysisFindingsResult {
  NetworkInsightsAccessScopeAnalysisId?: string;
  AnalysisStatus?: AnalysisStatus;
  AnalysisFindings?: Array<AccessScopeAnalysisFinding>;
  NextToken?: string;
}
export interface GetNetworkInsightsAccessScopeContentRequest {
  NetworkInsightsAccessScopeId: string;
  DryRun?: boolean;
}
export interface GetNetworkInsightsAccessScopeContentResult {
  NetworkInsightsAccessScopeContent?: NetworkInsightsAccessScopeContent;
}
export interface GetPasswordDataRequest {
  InstanceId: string;
  DryRun?: boolean;
}
export interface GetPasswordDataResult {
  InstanceId?: string;
  Timestamp?: Date | string;
  PasswordData?: string;
}
export interface GetReservedInstancesExchangeQuoteRequest {
  DryRun?: boolean;
  ReservedInstanceIds: Array<string>;
  TargetConfigurations?: Array<TargetConfigurationRequest>;
}
export interface GetReservedInstancesExchangeQuoteResult {
  CurrencyCode?: string;
  IsValidExchange?: boolean;
  OutputReservedInstancesWillExpireAt?: Date | string;
  PaymentDue?: string;
  ReservedInstanceValueRollup?: ReservationValue;
  ReservedInstanceValueSet?: Array<ReservedInstanceReservationValue>;
  TargetConfigurationValueRollup?: ReservationValue;
  TargetConfigurationValueSet?: Array<TargetReservationValue>;
  ValidationFailureReason?: string;
}
export interface GetRouteServerAssociationsRequest {
  RouteServerId: string;
  DryRun?: boolean;
}
export interface GetRouteServerAssociationsResult {
  RouteServerAssociations?: Array<RouteServerAssociation>;
}
export interface GetRouteServerPropagationsRequest {
  RouteServerId: string;
  RouteTableId?: string;
  DryRun?: boolean;
}
export interface GetRouteServerPropagationsResult {
  RouteServerPropagations?: Array<RouteServerPropagation>;
}
export interface GetRouteServerRoutingDatabaseRequest {
  RouteServerId: string;
  NextToken?: string;
  MaxResults?: number;
  DryRun?: boolean;
  Filters?: Array<Filter>;
}
export interface GetRouteServerRoutingDatabaseResult {
  AreRoutesPersisted?: boolean;
  Routes?: Array<RouteServerRoute>;
  NextToken?: string;
}
export interface GetSecurityGroupsForVpcRequest {
  VpcId: string;
  NextToken?: string;
  MaxResults?: number;
  Filters?: Array<Filter>;
  DryRun?: boolean;
}
export type GetSecurityGroupsForVpcRequestMaxResults = number;

export interface GetSecurityGroupsForVpcResult {
  NextToken?: string;
  SecurityGroupForVpcs?: Array<SecurityGroupForVpc>;
}
export interface GetSerialConsoleAccessStatusRequest {
  DryRun?: boolean;
}
export interface GetSerialConsoleAccessStatusResult {
  SerialConsoleAccessEnabled?: boolean;
  ManagedBy?: ManagedBy;
}
export interface GetSnapshotBlockPublicAccessStateRequest {
  DryRun?: boolean;
}
export interface GetSnapshotBlockPublicAccessStateResult {
  State?: SnapshotBlockPublicAccessState;
  ManagedBy?: ManagedBy;
}
export interface GetSpotPlacementScoresRequest {
  InstanceTypes?: Array<string>;
  TargetCapacity: number;
  TargetCapacityUnitType?: TargetCapacityUnitType;
  SingleAvailabilityZone?: boolean;
  RegionNames?: Array<string>;
  InstanceRequirementsWithMetadata?: InstanceRequirementsWithMetadataRequest;
  DryRun?: boolean;
  MaxResults?: number;
  NextToken?: string;
}
export interface GetSpotPlacementScoresResult {
  SpotPlacementScores?: Array<SpotPlacementScore>;
  NextToken?: string;
}
export type GetSubnetCidrReservationsMaxResults = number;

export interface GetSubnetCidrReservationsRequest {
  Filters?: Array<Filter>;
  SubnetId: string;
  DryRun?: boolean;
  NextToken?: string;
  MaxResults?: number;
}
export interface GetSubnetCidrReservationsResult {
  SubnetIpv4CidrReservations?: Array<SubnetCidrReservation>;
  SubnetIpv6CidrReservations?: Array<SubnetCidrReservation>;
  NextToken?: string;
}
export interface GetTransitGatewayAttachmentPropagationsRequest {
  TransitGatewayAttachmentId: string;
  Filters?: Array<Filter>;
  MaxResults?: number;
  NextToken?: string;
  DryRun?: boolean;
}
export interface GetTransitGatewayAttachmentPropagationsResult {
  TransitGatewayAttachmentPropagations?: Array<TransitGatewayAttachmentPropagation>;
  NextToken?: string;
}
export interface GetTransitGatewayMulticastDomainAssociationsRequest {
  TransitGatewayMulticastDomainId: string;
  Filters?: Array<Filter>;
  MaxResults?: number;
  NextToken?: string;
  DryRun?: boolean;
}
export interface GetTransitGatewayMulticastDomainAssociationsResult {
  MulticastDomainAssociations?: Array<TransitGatewayMulticastDomainAssociation>;
  NextToken?: string;
}
export interface GetTransitGatewayPolicyTableAssociationsRequest {
  TransitGatewayPolicyTableId: string;
  Filters?: Array<Filter>;
  MaxResults?: number;
  NextToken?: string;
  DryRun?: boolean;
}
export interface GetTransitGatewayPolicyTableAssociationsResult {
  Associations?: Array<TransitGatewayPolicyTableAssociation>;
  NextToken?: string;
}
export interface GetTransitGatewayPolicyTableEntriesRequest {
  TransitGatewayPolicyTableId: string;
  Filters?: Array<Filter>;
  MaxResults?: number;
  NextToken?: string;
  DryRun?: boolean;
}
export interface GetTransitGatewayPolicyTableEntriesResult {
  TransitGatewayPolicyTableEntries?: Array<TransitGatewayPolicyTableEntry>;
}
export interface GetTransitGatewayPrefixListReferencesRequest {
  TransitGatewayRouteTableId: string;
  Filters?: Array<Filter>;
  MaxResults?: number;
  NextToken?: string;
  DryRun?: boolean;
}
export interface GetTransitGatewayPrefixListReferencesResult {
  TransitGatewayPrefixListReferences?: Array<TransitGatewayPrefixListReference>;
  NextToken?: string;
}
export interface GetTransitGatewayRouteTableAssociationsRequest {
  TransitGatewayRouteTableId: string;
  Filters?: Array<Filter>;
  MaxResults?: number;
  NextToken?: string;
  DryRun?: boolean;
}
export interface GetTransitGatewayRouteTableAssociationsResult {
  Associations?: Array<TransitGatewayRouteTableAssociation>;
  NextToken?: string;
}
export interface GetTransitGatewayRouteTablePropagationsRequest {
  TransitGatewayRouteTableId: string;
  Filters?: Array<Filter>;
  MaxResults?: number;
  NextToken?: string;
  DryRun?: boolean;
}
export interface GetTransitGatewayRouteTablePropagationsResult {
  TransitGatewayRouteTablePropagations?: Array<TransitGatewayRouteTablePropagation>;
  NextToken?: string;
}
export interface GetVerifiedAccessEndpointPolicyRequest {
  VerifiedAccessEndpointId: string;
  DryRun?: boolean;
}
export interface GetVerifiedAccessEndpointPolicyResult {
  PolicyEnabled?: boolean;
  PolicyDocument?: string;
}
export type GetVerifiedAccessEndpointTargetsMaxResults = number;

export interface GetVerifiedAccessEndpointTargetsRequest {
  VerifiedAccessEndpointId: string;
  MaxResults?: number;
  NextToken?: string;
  DryRun?: boolean;
}
export interface GetVerifiedAccessEndpointTargetsResult {
  VerifiedAccessEndpointTargets?: Array<VerifiedAccessEndpointTarget>;
  NextToken?: string;
}
export interface GetVerifiedAccessGroupPolicyRequest {
  VerifiedAccessGroupId: string;
  DryRun?: boolean;
}
export interface GetVerifiedAccessGroupPolicyResult {
  PolicyEnabled?: boolean;
  PolicyDocument?: string;
}
export interface GetVpnConnectionDeviceSampleConfigurationRequest {
  VpnConnectionId: string;
  VpnConnectionDeviceTypeId: string;
  InternetKeyExchangeVersion?: string;
  SampleType?: string;
  DryRun?: boolean;
}
export interface GetVpnConnectionDeviceSampleConfigurationResult {
  VpnConnectionDeviceSampleConfiguration?: string;
}
export interface GetVpnConnectionDeviceTypesRequest {
  MaxResults?: number;
  NextToken?: string;
  DryRun?: boolean;
}
export interface GetVpnConnectionDeviceTypesResult {
  VpnConnectionDeviceTypes?: Array<VpnConnectionDeviceType>;
  NextToken?: string;
}
export interface GetVpnTunnelReplacementStatusRequest {
  VpnConnectionId: string;
  VpnTunnelOutsideIpAddress: string;
  DryRun?: boolean;
}
export interface GetVpnTunnelReplacementStatusResult {
  VpnConnectionId?: string;
  TransitGatewayId?: string;
  CustomerGatewayId?: string;
  VpnGatewayId?: string;
  VpnTunnelOutsideIpAddress?: string;
  MaintenanceDetails?: MaintenanceDetails;
}
export type GpuDeviceCount = number;

export interface GpuDeviceInfo {
  Name?: string;
  Manufacturer?: string;
  Count?: number;
  MemoryInfo?: GpuDeviceMemoryInfo;
}
export type GpuDeviceInfoList = Array<GpuDeviceInfo>;
export type GpuDeviceManufacturerName = string;

export interface GpuDeviceMemoryInfo {
  SizeInMiB?: number;
}
export type GpuDeviceMemorySize = number;

export type GpuDeviceName = string;

export interface GpuInfo {
  Gpus?: Array<GpuDeviceInfo>;
  TotalGpuMemoryInMiB?: number;
}
export interface GroupIdentifier {
  GroupId?: string;
  GroupName?: string;
}
export type GroupIdentifierList = Array<GroupIdentifier>;
export type GroupIdentifierSet = Array<SecurityGroupIdentifier>;
export type GroupIds = Array<string>;
export type GroupIdStringList = Array<string>;
export type GroupNameStringList = Array<string>;
export type GVCDMaxResults = number;

export type HibernationFlag = boolean;

export interface HibernationOptions {
  Configured?: boolean;
}
export interface HibernationOptionsRequest {
  Configured?: boolean;
}
export interface HistoryRecord {
  EventInformation?: EventInformation;
  EventType?: EventType;
  Timestamp?: Date | string;
}
export interface HistoryRecordEntry {
  EventInformation?: EventInformation;
  EventType?: FleetEventType;
  Timestamp?: Date | string;
}
export type HistoryRecords = Array<HistoryRecord>;
export type HistoryRecordSet = Array<HistoryRecordEntry>;
export interface Host {
  AutoPlacement?: AutoPlacement;
  AvailabilityZone?: string;
  AvailableCapacity?: AvailableCapacity;
  ClientToken?: string;
  HostId?: string;
  HostProperties?: HostProperties;
  HostReservationId?: string;
  Instances?: Array<HostInstance>;
  State?: AllocationState;
  AllocationTime?: Date | string;
  ReleaseTime?: Date | string;
  Tags?: Array<Tag>;
  HostRecovery?: HostRecovery;
  AllowsMultipleInstanceTypes?: AllowsMultipleInstanceTypes;
  OwnerId?: string;
  AvailabilityZoneId?: string;
  MemberOfServiceLinkedResourceGroup?: boolean;
  OutpostArn?: string;
  HostMaintenance?: HostMaintenance;
  AssetId?: string;
}
export interface HostInstance {
  InstanceId?: string;
  InstanceType?: string;
  OwnerId?: string;
}
export type HostInstanceList = Array<HostInstance>;
export type HostList = Array<Host>;
export type HostMaintenance = "on" | "off";
export type HostnameType = "ip_name" | "resource_name";
export interface HostOffering {
  CurrencyCode?: CurrencyCodeValues;
  Duration?: number;
  HourlyPrice?: string;
  InstanceFamily?: string;
  OfferingId?: string;
  PaymentOption?: PaymentOption;
  UpfrontPrice?: string;
}
export type HostOfferingSet = Array<HostOffering>;
export interface HostProperties {
  Cores?: number;
  InstanceType?: string;
  InstanceFamily?: string;
  Sockets?: number;
  TotalVCpus?: number;
}
export type HostRecovery = "on" | "off";
export interface HostReservation {
  Count?: number;
  CurrencyCode?: CurrencyCodeValues;
  Duration?: number;
  End?: Date | string;
  HostIdSet?: Array<string>;
  HostReservationId?: string;
  HourlyPrice?: string;
  InstanceFamily?: string;
  OfferingId?: string;
  PaymentOption?: PaymentOption;
  Start?: Date | string;
  State?: ReservationState;
  UpfrontPrice?: string;
  Tags?: Array<Tag>;
}
export type HostReservationId = string;

export type HostReservationIdSet = Array<string>;
export type HostReservationSet = Array<HostReservation>;
export type HostTenancy = "default" | "dedicated" | "host";
export type Hour = number;

export type HttpTokensState = "optional" | "required";
export type HypervisorType = "ovm" | "xen";
export interface IamInstanceProfile {
  Arn?: string;
  Id?: string;
}
export interface IamInstanceProfileAssociation {
  AssociationId?: string;
  InstanceId?: string;
  IamInstanceProfile?: IamInstanceProfile;
  State?: IamInstanceProfileAssociationState;
  Timestamp?: Date | string;
}
export type IamInstanceProfileAssociationId = string;

export type IamInstanceProfileAssociationSet = Array<IamInstanceProfileAssociation>;
export type IamInstanceProfileAssociationState = "ASSOCIATING" | "ASSOCIATED" | "DISASSOCIATING" | "DISASSOCIATED";
export interface IamInstanceProfileSpecification {
  Arn?: string;
  Name?: string;
}
export interface IcmpTypeCode {
  Code?: number;
  Type?: number;
}
export interface IdFormat {
  Deadline?: Date | string;
  Resource?: string;
  UseLongIds?: boolean;
}
export type IdFormatList = Array<IdFormat>;
export type Igmpv2SupportValue = "enable" | "disable";
export type IKEVersionsList = Array<IKEVersionsListValue>;
export interface IKEVersionsListValue {
  Value?: string;
}
export type IKEVersionsRequestList = Array<IKEVersionsRequestListValue>;
export interface IKEVersionsRequestListValue {
  Value?: string;
}
export interface Image {
  PlatformDetails?: string;
  UsageOperation?: string;
  BlockDeviceMappings?: Array<BlockDeviceMapping>;
  Description?: string;
  EnaSupport?: boolean;
  Hypervisor?: HypervisorType;
  ImageOwnerAlias?: string;
  Name?: string;
  RootDeviceName?: string;
  RootDeviceType?: DeviceType;
  SriovNetSupport?: string;
  StateReason?: StateReason;
  Tags?: Array<Tag>;
  VirtualizationType?: VirtualizationType;
  BootMode?: BootModeValues;
  TpmSupport?: TpmSupportValues;
  DeprecationTime?: string;
  ImdsSupport?: ImdsSupportValues;
  SourceInstanceId?: string;
  DeregistrationProtection?: string;
  LastLaunchedTime?: string;
  ImageAllowed?: boolean;
  SourceImageId?: string;
  SourceImageRegion?: string;
  ImageId?: string;
  ImageLocation?: string;
  State?: ImageState;
  OwnerId?: string;
  CreationDate?: string;
  Public?: boolean;
  ProductCodes?: Array<ProductCode>;
  Architecture?: ArchitectureValues;
  ImageType?: ImageTypeValues;
  KernelId?: string;
  RamdiskId?: string;
  Platform?: PlatformValues;
}
export interface ImageAttribute {
  Description?: AttributeValue;
  KernelId?: AttributeValue;
  RamdiskId?: AttributeValue;
  SriovNetSupport?: AttributeValue;
  BootMode?: AttributeValue;
  TpmSupport?: AttributeValue;
  UefiData?: AttributeValue;
  LastLaunchedTime?: AttributeValue;
  ImdsSupport?: AttributeValue;
  DeregistrationProtection?: AttributeValue;
  ImageId?: string;
  LaunchPermissions?: Array<LaunchPermission>;
  ProductCodes?: Array<ProductCode>;
  BlockDeviceMappings?: Array<BlockDeviceMapping>;
}
export type ImageAttributeName = "description" | "kernel" | "ramdisk" | "launchPermission" | "productCodes" | "blockDeviceMapping" | "sriovNetSupport" | "bootMode" | "tpmSupport" | "uefiData" | "lastLaunchedTime" | "imdsSupport" | "deregistrationProtection";
export type ImageBlockPublicAccessDisabledState = "unblocked";
export type ImageBlockPublicAccessEnabledState = "block_new_sharing";
export interface ImageCriterion {
  ImageProviders?: Array<string>;
}
export type ImageCriterionList = Array<ImageCriterion>;
export interface ImageCriterionRequest {
  ImageProviders?: Array<string>;
}
export type ImageCriterionRequestList = Array<ImageCriterionRequest>;
export interface ImageDiskContainer {
  Description?: string;
  DeviceName?: string;
  Format?: string;
  SnapshotId?: string;
  Url?: string;
  UserBucket?: UserBucket;
}
export type ImageDiskContainerList = Array<ImageDiskContainer>;
export type ImageId = string;

export type ImageIdList = Array<string>;
export type ImageIdStringList = Array<string>;
export type ImageList = Array<Image>;
export interface ImageMetadata {
  ImageId?: string;
  Name?: string;
  OwnerId?: string;
  State?: ImageState;
  ImageOwnerAlias?: string;
  CreationDate?: string;
  DeprecationTime?: string;
  ImageAllowed?: boolean;
  IsPublic?: boolean;
}
export type ImageProvider = string;

export type ImageProviderList = Array<string>;
export type ImageProviderRequest = string;

export type ImageProviderRequestList = Array<string>;
export interface ImageRecycleBinInfo {
  ImageId?: string;
  Name?: string;
  Description?: string;
  RecycleBinEnterTime?: Date | string;
  RecycleBinExitTime?: Date | string;
}
export type ImageRecycleBinInfoList = Array<ImageRecycleBinInfo>;
export type ImageState = "pending" | "available" | "invalid" | "deregistered" | "transient" | "failed" | "error" | "disabled";
export type ImageTypeValues = "machine" | "kernel" | "ramdisk";
export type ImdsSupportValues = "v2_0";
export interface ImportClientVpnClientCertificateRevocationListRequest {
  ClientVpnEndpointId: string;
  CertificateRevocationList: string;
  DryRun?: boolean;
}
export interface ImportClientVpnClientCertificateRevocationListResult {
  Return?: boolean;
}
export interface ImportImageLicenseConfigurationRequest {
  LicenseConfigurationArn?: string;
}
export interface ImportImageLicenseConfigurationResponse {
  LicenseConfigurationArn?: string;
}
export type ImportImageLicenseSpecificationListRequest = Array<ImportImageLicenseConfigurationRequest>;
export type ImportImageLicenseSpecificationListResponse = Array<ImportImageLicenseConfigurationResponse>;
export interface ImportImageRequest {
  Architecture?: string;
  ClientData?: ClientData;
  ClientToken?: string;
  Description?: string;
  DiskContainers?: Array<ImageDiskContainer>;
  DryRun?: boolean;
  Encrypted?: boolean;
  Hypervisor?: string;
  KmsKeyId?: string;
  LicenseType?: string;
  Platform?: string;
  RoleName?: string;
  LicenseSpecifications?: Array<ImportImageLicenseConfigurationRequest>;
  TagSpecifications?: Array<TagSpecification>;
  UsageOperation?: string;
  BootMode?: BootModeValues;
}
export interface ImportImageResult {
  Architecture?: string;
  Description?: string;
  Encrypted?: boolean;
  Hypervisor?: string;
  ImageId?: string;
  ImportTaskId?: string;
  KmsKeyId?: string;
  LicenseType?: string;
  Platform?: string;
  Progress?: string;
  SnapshotDetails?: Array<SnapshotDetail>;
  Status?: string;
  StatusMessage?: string;
  LicenseSpecifications?: Array<ImportImageLicenseConfigurationResponse>;
  Tags?: Array<Tag>;
  UsageOperation?: string;
}
export interface ImportImageTask {
  Architecture?: string;
  Description?: string;
  Encrypted?: boolean;
  Hypervisor?: string;
  ImageId?: string;
  ImportTaskId?: string;
  KmsKeyId?: string;
  LicenseType?: string;
  Platform?: string;
  Progress?: string;
  SnapshotDetails?: Array<SnapshotDetail>;
  Status?: string;
  StatusMessage?: string;
  Tags?: Array<Tag>;
  LicenseSpecifications?: Array<ImportImageLicenseConfigurationResponse>;
  UsageOperation?: string;
  BootMode?: BootModeValues;
}
export type ImportImageTaskId = string;

export type ImportImageTaskList = Array<ImportImageTask>;
export interface ImportInstanceLaunchSpecification {
  Architecture?: ArchitectureValues;
  GroupNames?: Array<string>;
  GroupIds?: Array<string>;
  AdditionalInfo?: string;
  UserData?: UserData;
  InstanceType?: InstanceType;
  Placement?: Placement;
  Monitoring?: boolean;
  SubnetId?: string;
  InstanceInitiatedShutdownBehavior?: ShutdownBehavior;
  PrivateIpAddress?: string;
}
export interface ImportInstanceRequest {
  DryRun?: boolean;
  Description?: string;
  LaunchSpecification?: ImportInstanceLaunchSpecification;
  DiskImages?: Array<DiskImage>;
  Platform: PlatformValues;
}
export interface ImportInstanceResult {
  ConversionTask?: ConversionTask;
}
export interface ImportInstanceTaskDetails {
  Description?: string;
  InstanceId?: string;
  Platform?: PlatformValues;
  Volumes?: Array<ImportInstanceVolumeDetailItem>;
}
export interface ImportInstanceVolumeDetailItem {
  AvailabilityZone?: string;
  BytesConverted?: number;
  Description?: string;
  Image?: DiskImageDescription;
  Status?: string;
  StatusMessage?: string;
  Volume?: DiskImageVolumeDescription;
}
export type ImportInstanceVolumeDetailSet = Array<ImportInstanceVolumeDetailItem>;
export interface ImportKeyPairRequest {
  TagSpecifications?: Array<TagSpecification>;
  DryRun?: boolean;
  KeyName: string;
  PublicKeyMaterial: Uint8Array | string;
}
export interface ImportKeyPairResult {
  KeyFingerprint?: string;
  KeyName?: string;
  KeyPairId?: string;
  Tags?: Array<Tag>;
}
export type ImportManifestUrl = string;

export interface ImportSnapshotRequest {
  ClientData?: ClientData;
  ClientToken?: string;
  Description?: string;
  DiskContainer?: SnapshotDiskContainer;
  DryRun?: boolean;
  Encrypted?: boolean;
  KmsKeyId?: string;
  RoleName?: string;
  TagSpecifications?: Array<TagSpecification>;
}
export interface ImportSnapshotResult {
  Description?: string;
  ImportTaskId?: string;
  SnapshotTaskDetail?: SnapshotTaskDetail;
  Tags?: Array<Tag>;
}
export interface ImportSnapshotTask {
  Description?: string;
  ImportTaskId?: string;
  SnapshotTaskDetail?: SnapshotTaskDetail;
  Tags?: Array<Tag>;
}
export type ImportSnapshotTaskId = string;

export type ImportSnapshotTaskIdList = Array<string>;
export type ImportSnapshotTaskList = Array<ImportSnapshotTask>;
export type ImportTaskId = string;

export type ImportTaskIdList = Array<string>;
export interface ImportVolumeRequest {
  DryRun?: boolean;
  AvailabilityZone: string;
  Image: DiskImageDetail;
  Description?: string;
  Volume: VolumeDetail;
}
export interface ImportVolumeResult {
  ConversionTask?: ConversionTask;
}
export interface ImportVolumeTaskDetails {
  AvailabilityZone?: string;
  BytesConverted?: number;
  Description?: string;
  Image?: DiskImageDescription;
  Volume?: DiskImageVolumeDescription;
}
export interface InferenceAcceleratorInfo {
  Accelerators?: Array<InferenceDeviceInfo>;
  TotalInferenceMemoryInMiB?: number;
}
export type InferenceDeviceCount = number;

export interface InferenceDeviceInfo {
  Count?: number;
  Name?: string;
  Manufacturer?: string;
  MemoryInfo?: InferenceDeviceMemoryInfo;
}
export type InferenceDeviceInfoList = Array<InferenceDeviceInfo>;
export type InferenceDeviceManufacturerName = string;

export interface InferenceDeviceMemoryInfo {
  SizeInMiB?: number;
}
export type InferenceDeviceMemorySize = number;

export type InferenceDeviceName = string;

export type InsideCidrBlocksStringList = Array<string>;
export interface Instance {
  Architecture?: ArchitectureValues;
  BlockDeviceMappings?: Array<InstanceBlockDeviceMapping>;
  ClientToken?: string;
  EbsOptimized?: boolean;
  EnaSupport?: boolean;
  Hypervisor?: HypervisorType;
  IamInstanceProfile?: IamInstanceProfile;
  InstanceLifecycle?: InstanceLifecycleType;
  ElasticGpuAssociations?: Array<ElasticGpuAssociation>;
  ElasticInferenceAcceleratorAssociations?: Array<ElasticInferenceAcceleratorAssociation>;
  NetworkInterfaces?: Array<InstanceNetworkInterface>;
  OutpostArn?: string;
  RootDeviceName?: string;
  RootDeviceType?: DeviceType;
  SecurityGroups?: Array<GroupIdentifier>;
  SourceDestCheck?: boolean;
  SpotInstanceRequestId?: string;
  SriovNetSupport?: string;
  StateReason?: StateReason;
  Tags?: Array<Tag>;
  VirtualizationType?: VirtualizationType;
  CpuOptions?: CpuOptions;
  CapacityBlockId?: string;
  CapacityReservationId?: string;
  CapacityReservationSpecification?: CapacityReservationSpecificationResponse;
  HibernationOptions?: HibernationOptions;
  Licenses?: Array<LicenseConfiguration>;
  MetadataOptions?: InstanceMetadataOptionsResponse;
  EnclaveOptions?: EnclaveOptions;
  BootMode?: BootModeValues;
  PlatformDetails?: string;
  UsageOperation?: string;
  UsageOperationUpdateTime?: Date | string;
  PrivateDnsNameOptions?: PrivateDnsNameOptionsResponse;
  Ipv6Address?: string;
  TpmSupport?: string;
  MaintenanceOptions?: InstanceMaintenanceOptions;
  CurrentInstanceBootMode?: InstanceBootModeValues;
  NetworkPerformanceOptions?: InstanceNetworkPerformanceOptions;
  Operator?: OperatorResponse;
  InstanceId?: string;
  ImageId?: string;
  State?: InstanceState;
  PrivateDnsName?: string;
  PublicDnsName?: string;
  StateTransitionReason?: string;
  KeyName?: string;
  AmiLaunchIndex?: number;
  ProductCodes?: Array<ProductCode>;
  InstanceType?: InstanceType;
  LaunchTime?: Date | string;
  Placement?: Placement;
  KernelId?: string;
  RamdiskId?: string;
  Platform?: PlatformValues;
  Monitoring?: Monitoring;
  SubnetId?: string;
  VpcId?: string;
  PrivateIpAddress?: string;
  PublicIpAddress?: string;
}
export interface InstanceAttachmentEnaSrdSpecification {
  EnaSrdEnabled?: boolean;
  EnaSrdUdpSpecification?: InstanceAttachmentEnaSrdUdpSpecification;
}
export interface InstanceAttachmentEnaSrdUdpSpecification {
  EnaSrdUdpEnabled?: boolean;
}
export interface InstanceAttribute {
  BlockDeviceMappings?: Array<InstanceBlockDeviceMapping>;
  DisableApiTermination?: AttributeBooleanValue;
  EnaSupport?: AttributeBooleanValue;
  EnclaveOptions?: EnclaveOptions;
  EbsOptimized?: AttributeBooleanValue;
  InstanceId?: string;
  InstanceInitiatedShutdownBehavior?: AttributeValue;
  InstanceType?: AttributeValue;
  KernelId?: AttributeValue;
  ProductCodes?: Array<ProductCode>;
  RamdiskId?: AttributeValue;
  RootDeviceName?: AttributeValue;
  SourceDestCheck?: AttributeBooleanValue;
  SriovNetSupport?: AttributeValue;
  UserData?: AttributeValue;
  DisableApiStop?: AttributeBooleanValue;
  Groups?: Array<GroupIdentifier>;
}
export type InstanceAttributeName = "instanceType" | "kernel" | "ramdisk" | "userData" | "disableApiTermination" | "instanceInitiatedShutdownBehavior" | "rootDeviceName" | "blockDeviceMapping" | "productCodes" | "sourceDestCheck" | "groupSet" | "ebsOptimized" | "sriovNetSupport" | "enaSupport" | "enclaveOptions" | "disableApiStop";
export type InstanceAutoRecoveryState = "disabled" | "default";
export type InstanceBandwidthWeighting = "DEFAULT" | "VPC_1" | "EBS_1";
export interface InstanceBlockDeviceMapping {
  DeviceName?: string;
  Ebs?: EbsInstanceBlockDevice;
}
export type InstanceBlockDeviceMappingList = Array<InstanceBlockDeviceMapping>;
export interface InstanceBlockDeviceMappingSpecification {
  DeviceName?: string;
  Ebs?: EbsInstanceBlockDeviceSpecification;
  VirtualName?: string;
  NoDevice?: string;
}
export type InstanceBlockDeviceMappingSpecificationList = Array<InstanceBlockDeviceMappingSpecification>;
export type InstanceBootModeValues = "legacy_bios" | "uefi";
export interface InstanceCapacity {
  AvailableCapacity?: number;
  InstanceType?: string;
  TotalCapacity?: number;
}
export type InstanceConnectEndpointId = string;

export type InstanceConnectEndpointMaxResults = number;

export type InstanceConnectEndpointSet = Array<Ec2InstanceConnectEndpoint>;
export interface InstanceCount {
  InstanceCount?: number;
  State?: ListingState;
}
export type InstanceCountList = Array<InstanceCount>;
export interface InstanceCreditSpecification {
  InstanceId?: string;
  CpuCredits?: string;
}
export type InstanceCreditSpecificationList = Array<InstanceCreditSpecification>;
export type InstanceCreditSpecificationListRequest = Array<InstanceCreditSpecificationRequest>;
export interface InstanceCreditSpecificationRequest {
  InstanceId: string;
  CpuCredits?: string;
}
export type InstanceEventId = string;

export interface InstanceEventWindow {
  InstanceEventWindowId?: string;
  TimeRanges?: Array<InstanceEventWindowTimeRange>;
  Name?: string;
  CronExpression?: string;
  AssociationTarget?: InstanceEventWindowAssociationTarget;
  State?: InstanceEventWindowState;
  Tags?: Array<Tag>;
}
export interface InstanceEventWindowAssociationRequest {
  InstanceIds?: Array<string>;
  InstanceTags?: Array<Tag>;
  DedicatedHostIds?: Array<string>;
}
export interface InstanceEventWindowAssociationTarget {
  InstanceIds?: Array<string>;
  Tags?: Array<Tag>;
  DedicatedHostIds?: Array<string>;
}
export type InstanceEventWindowCronExpression = string;

export interface InstanceEventWindowDisassociationRequest {
  InstanceIds?: Array<string>;
  InstanceTags?: Array<Tag>;
  DedicatedHostIds?: Array<string>;
}
export type InstanceEventWindowId = string;

export type InstanceEventWindowIdSet = Array<string>;
export type InstanceEventWindowSet = Array<InstanceEventWindow>;
export type InstanceEventWindowState = "creating" | "deleting" | "active" | "deleted";
export interface InstanceEventWindowStateChange {
  InstanceEventWindowId?: string;
  State?: InstanceEventWindowState;
}
export interface InstanceEventWindowTimeRange {
  StartWeekDay?: WeekDay;
  StartHour?: number;
  EndWeekDay?: WeekDay;
  EndHour?: number;
}
export type InstanceEventWindowTimeRangeList = Array<InstanceEventWindowTimeRange>;
export interface InstanceEventWindowTimeRangeRequest {
  StartWeekDay?: WeekDay;
  StartHour?: number;
  EndWeekDay?: WeekDay;
  EndHour?: number;
}
export type InstanceEventWindowTimeRangeRequestSet = Array<InstanceEventWindowTimeRangeRequest>;
export interface InstanceExportDetails {
  InstanceId?: string;
  TargetEnvironment?: ExportEnvironment;
}
export interface InstanceFamilyCreditSpecification {
  InstanceFamily?: UnlimitedSupportedInstanceFamily;
  CpuCredits?: string;
}
export type InstanceGeneration = "CURRENT" | "PREVIOUS";
export type InstanceGenerationSet = Array<InstanceGeneration>;
export type InstanceHealthStatus = "HEALTHY_STATUS" | "UNHEALTHY_STATUS";
export type InstanceId = string;

export type InstanceIdForResolver = string;

export type InstanceIdList = Array<string>;
export type InstanceIdSet = Array<string>;
export type InstanceIdsSet = Array<string>;
export type InstanceIdStringList = Array<string>;
export type InstanceIdWithVolumeResolver = string;

export interface InstanceImageMetadata {
  InstanceId?: string;
  InstanceType?: InstanceType;
  LaunchTime?: Date | string;
  AvailabilityZone?: string;
  ZoneId?: string;
  State?: InstanceState;
  OwnerId?: string;
  Tags?: Array<Tag>;
  ImageMetadata?: ImageMetadata;
  Operator?: OperatorResponse;
}
export type InstanceImageMetadataList = Array<InstanceImageMetadata>;
export type InstanceInterruptionBehavior = "hibernate" | "stop" | "terminate";
export interface InstanceIpv4Prefix {
  Ipv4Prefix?: string;
}
export type InstanceIpv4PrefixList = Array<InstanceIpv4Prefix>;
export interface InstanceIpv6Address {
  Ipv6Address?: string;
  IsPrimaryIpv6?: boolean;
}
export type InstanceIpv6AddressList = Array<InstanceIpv6Address>;
export type InstanceIpv6AddressListRequest = Array<InstanceIpv6AddressRequest>;
export interface InstanceIpv6AddressRequest {
  Ipv6Address?: string;
}
export interface InstanceIpv6Prefix {
  Ipv6Prefix?: string;
}
export type InstanceIpv6PrefixList = Array<InstanceIpv6Prefix>;
export type InstanceLifecycle = "SPOT" | "ON_DEMAND";
export type InstanceLifecycleType = "spot" | "scheduled" | "capacity_block";
export type InstanceList = Array<Instance>;
export interface InstanceMaintenanceOptions {
  AutoRecovery?: InstanceAutoRecoveryState;
  RebootMigration?: InstanceRebootMigrationState;
}
export interface InstanceMaintenanceOptionsRequest {
  AutoRecovery?: InstanceAutoRecoveryState;
}
export interface InstanceMarketOptionsRequest {
  MarketType?: MarketType;
  SpotOptions?: SpotMarketOptions;
}
export type InstanceMatchCriteria = "open" | "targeted";
export interface InstanceMetadataDefaultsResponse {
  HttpTokens?: HttpTokensState;
  HttpPutResponseHopLimit?: number;
  HttpEndpoint?: InstanceMetadataEndpointState;
  InstanceMetadataTags?: InstanceMetadataTagsState;
  ManagedBy?: ManagedBy;
  ManagedExceptionMessage?: string;
}
export type InstanceMetadataEndpointState = "disabled" | "enabled";
export interface InstanceMetadataOptionsRequest {
  HttpTokens?: HttpTokensState;
  HttpPutResponseHopLimit?: number;
  HttpEndpoint?: InstanceMetadataEndpointState;
  HttpProtocolIpv6?: InstanceMetadataProtocolState;
  InstanceMetadataTags?: InstanceMetadataTagsState;
}
export interface InstanceMetadataOptionsResponse {
  State?: InstanceMetadataOptionsState;
  HttpTokens?: HttpTokensState;
  HttpPutResponseHopLimit?: number;
  HttpEndpoint?: InstanceMetadataEndpointState;
  HttpProtocolIpv6?: InstanceMetadataProtocolState;
  InstanceMetadataTags?: InstanceMetadataTagsState;
}
export type InstanceMetadataOptionsState = "pending" | "applied";
export type InstanceMetadataProtocolState = "disabled" | "enabled";
export type InstanceMetadataTagsState = "disabled" | "enabled";
export interface InstanceMonitoring {
  InstanceId?: string;
  Monitoring?: Monitoring;
}
export type InstanceMonitoringList = Array<InstanceMonitoring>;
export interface InstanceNetworkInterface {
  Association?: InstanceNetworkInterfaceAssociation;
  Attachment?: InstanceNetworkInterfaceAttachment;
  Description?: string;
  Groups?: Array<GroupIdentifier>;
  Ipv6Addresses?: Array<InstanceIpv6Address>;
  MacAddress?: string;
  NetworkInterfaceId?: string;
  OwnerId?: string;
  PrivateDnsName?: string;
  PrivateIpAddress?: string;
  PrivateIpAddresses?: Array<InstancePrivateIpAddress>;
  SourceDestCheck?: boolean;
  Status?: NetworkInterfaceStatus;
  SubnetId?: string;
  VpcId?: string;
  InterfaceType?: string;
  Ipv4Prefixes?: Array<InstanceIpv4Prefix>;
  Ipv6Prefixes?: Array<InstanceIpv6Prefix>;
  ConnectionTrackingConfiguration?: ConnectionTrackingSpecificationResponse;
  Operator?: OperatorResponse;
}
export interface InstanceNetworkInterfaceAssociation {
  CarrierIp?: string;
  CustomerOwnedIp?: string;
  IpOwnerId?: string;
  PublicDnsName?: string;
  PublicIp?: string;
}
export interface InstanceNetworkInterfaceAttachment {
  AttachTime?: Date | string;
  AttachmentId?: string;
  DeleteOnTermination?: boolean;
  DeviceIndex?: number;
  Status?: AttachmentStatus;
  NetworkCardIndex?: number;
  EnaSrdSpecification?: InstanceAttachmentEnaSrdSpecification;
  EnaQueueCount?: number;
}
export type InstanceNetworkInterfaceList = Array<InstanceNetworkInterface>;
export interface InstanceNetworkInterfaceSpecification {
  AssociatePublicIpAddress?: boolean;
  DeleteOnTermination?: boolean;
  Description?: string;
  DeviceIndex?: number;
  Groups?: Array<string>;
  Ipv6AddressCount?: number;
  Ipv6Addresses?: Array<InstanceIpv6Address>;
  NetworkInterfaceId?: string;
  PrivateIpAddress?: string;
  PrivateIpAddresses?: Array<PrivateIpAddressSpecification>;
  SecondaryPrivateIpAddressCount?: number;
  SubnetId?: string;
  AssociateCarrierIpAddress?: boolean;
  InterfaceType?: string;
  NetworkCardIndex?: number;
  Ipv4Prefixes?: Array<Ipv4PrefixSpecificationRequest>;
  Ipv4PrefixCount?: number;
  Ipv6Prefixes?: Array<Ipv6PrefixSpecificationRequest>;
  Ipv6PrefixCount?: number;
  PrimaryIpv6?: boolean;
  EnaSrdSpecification?: EnaSrdSpecificationRequest;
  ConnectionTrackingSpecification?: ConnectionTrackingSpecificationRequest;
  EnaQueueCount?: number;
}
export type InstanceNetworkInterfaceSpecificationList = Array<InstanceNetworkInterfaceSpecification>;
export interface InstanceNetworkPerformanceOptions {
  BandwidthWeighting?: InstanceBandwidthWeighting;
}
export interface InstanceNetworkPerformanceOptionsRequest {
  BandwidthWeighting?: InstanceBandwidthWeighting;
}
export interface InstancePrivateIpAddress {
  Association?: InstanceNetworkInterfaceAssociation;
  Primary?: boolean;
  PrivateDnsName?: string;
  PrivateIpAddress?: string;
}
export type InstancePrivateIpAddressList = Array<InstancePrivateIpAddress>;
export type InstanceRebootMigrationState = "disabled" | "default";
export interface InstanceRequirements {
  VCpuCount?: VCpuCountRange;
  MemoryMiB?: MemoryMiB;
  CpuManufacturers?: Array<CpuManufacturer>;
  MemoryGiBPerVCpu?: MemoryGiBPerVCpu;
  ExcludedInstanceTypes?: Array<string>;
  InstanceGenerations?: Array<InstanceGeneration>;
  SpotMaxPricePercentageOverLowestPrice?: number;
  OnDemandMaxPricePercentageOverLowestPrice?: number;
  BareMetal?: BareMetal;
  BurstablePerformance?: BurstablePerformance;
  RequireHibernateSupport?: boolean;
  NetworkInterfaceCount?: NetworkInterfaceCount;
  LocalStorage?: LocalStorage;
  LocalStorageTypes?: Array<LocalStorageType>;
  TotalLocalStorageGB?: TotalLocalStorageGB;
  BaselineEbsBandwidthMbps?: BaselineEbsBandwidthMbps;
  AcceleratorTypes?: Array<AcceleratorType>;
  AcceleratorCount?: AcceleratorCount;
  AcceleratorManufacturers?: Array<AcceleratorManufacturer>;
  AcceleratorNames?: Array<AcceleratorName>;
  AcceleratorTotalMemoryMiB?: AcceleratorTotalMemoryMiB;
  NetworkBandwidthGbps?: NetworkBandwidthGbps;
  AllowedInstanceTypes?: Array<string>;
  MaxSpotPriceAsPercentageOfOptimalOnDemandPrice?: number;
  BaselinePerformanceFactors?: BaselinePerformanceFactors;
}
export interface InstanceRequirementsRequest {
  VCpuCount: VCpuCountRangeRequest;
  MemoryMiB: MemoryMiBRequest;
  CpuManufacturers?: Array<CpuManufacturer>;
  MemoryGiBPerVCpu?: MemoryGiBPerVCpuRequest;
  ExcludedInstanceTypes?: Array<string>;
  InstanceGenerations?: Array<InstanceGeneration>;
  SpotMaxPricePercentageOverLowestPrice?: number;
  OnDemandMaxPricePercentageOverLowestPrice?: number;
  BareMetal?: BareMetal;
  BurstablePerformance?: BurstablePerformance;
  RequireHibernateSupport?: boolean;
  NetworkInterfaceCount?: NetworkInterfaceCountRequest;
  LocalStorage?: LocalStorage;
  LocalStorageTypes?: Array<LocalStorageType>;
  TotalLocalStorageGB?: TotalLocalStorageGBRequest;
  BaselineEbsBandwidthMbps?: BaselineEbsBandwidthMbpsRequest;
  AcceleratorTypes?: Array<AcceleratorType>;
  AcceleratorCount?: AcceleratorCountRequest;
  AcceleratorManufacturers?: Array<AcceleratorManufacturer>;
  AcceleratorNames?: Array<AcceleratorName>;
  AcceleratorTotalMemoryMiB?: AcceleratorTotalMemoryMiBRequest;
  NetworkBandwidthGbps?: NetworkBandwidthGbpsRequest;
  AllowedInstanceTypes?: Array<string>;
  MaxSpotPriceAsPercentageOfOptimalOnDemandPrice?: number;
  BaselinePerformanceFactors?: BaselinePerformanceFactorsRequest;
}
export interface InstanceRequirementsWithMetadataRequest {
  ArchitectureTypes?: Array<ArchitectureType>;
  VirtualizationTypes?: Array<VirtualizationType>;
  InstanceRequirements?: InstanceRequirementsRequest;
}
export type InstanceSet = Array<InstanceTopology>;
export interface InstanceSpecification {
  InstanceId: string;
  ExcludeBootVolume?: boolean;
  ExcludeDataVolumeIds?: Array<string>;
}
export interface InstanceState {
  Code?: number;
  Name?: InstanceStateName;
}
export interface InstanceStateChange {
  InstanceId?: string;
  CurrentState?: InstanceState;
  PreviousState?: InstanceState;
}
export type InstanceStateChangeList = Array<InstanceStateChange>;
export type InstanceStateName = "pending" | "running" | "shutting_down" | "terminated" | "stopping" | "stopped";
export interface InstanceStatus {
  AvailabilityZone?: string;
  OutpostArn?: string;
  Operator?: OperatorResponse;
  Events?: Array<InstanceStatusEvent>;
  InstanceId?: string;
  InstanceState?: InstanceState;
  InstanceStatus?: InstanceStatusSummary;
  SystemStatus?: InstanceStatusSummary;
  AttachedEbsStatus?: EbsStatusSummary;
}
export interface InstanceStatusDetails {
  ImpairedSince?: Date | string;
  Name?: StatusName;
  Status?: StatusType;
}
export type InstanceStatusDetailsList = Array<InstanceStatusDetails>;
export interface InstanceStatusEvent {
  InstanceEventId?: string;
  Code?: EventCode;
  Description?: string;
  NotAfter?: Date | string;
  NotBefore?: Date | string;
  NotBeforeDeadline?: Date | string;
}
export type InstanceStatusEventList = Array<InstanceStatusEvent>;
export type InstanceStatusList = Array<InstanceStatus>;
export interface InstanceStatusSummary {
  Details?: Array<InstanceStatusDetails>;
  Status?: SummaryStatus;
}
export type InstanceStorageEncryptionSupport = "unsupported" | "required";
export type InstanceStorageFlag = boolean;

export interface InstanceStorageInfo {
  TotalSizeInGB?: number;
  Disks?: Array<DiskInfo>;
  NvmeSupport?: EphemeralNvmeSupport;
  EncryptionSupport?: InstanceStorageEncryptionSupport;
}
export type InstanceTagKeySet = Array<string>;
export interface InstanceTagNotificationAttribute {
  InstanceTagKeys?: Array<string>;
  IncludeAllTagsOfInstance?: boolean;
}
export interface InstanceTopology {
  InstanceId?: string;
  InstanceType?: string;
  GroupName?: string;
  NetworkNodes?: Array<string>;
  AvailabilityZone?: string;
  ZoneId?: string;
  CapacityBlockId?: string;
}
export type InstanceType = "a1_medium" | "a1_large" | "a1_xlarge" | "a1_2xlarge" | "a1_4xlarge" | "a1_metal" | "c1_medium" | "c1_xlarge" | "c3_large" | "c3_xlarge" | "c3_2xlarge" | "c3_4xlarge" | "c3_8xlarge" | "c4_large" | "c4_xlarge" | "c4_2xlarge" | "c4_4xlarge" | "c4_8xlarge" | "c5_large" | "c5_xlarge" | "c5_2xlarge" | "c5_4xlarge" | "c5_9xlarge" | "c5_12xlarge" | "c5_18xlarge" | "c5_24xlarge" | "c5_metal" | "c5a_large" | "c5a_xlarge" | "c5a_2xlarge" | "c5a_4xlarge" | "c5a_8xlarge" | "c5a_12xlarge" | "c5a_16xlarge" | "c5a_24xlarge" | "c5ad_large" | "c5ad_xlarge" | "c5ad_2xlarge" | "c5ad_4xlarge" | "c5ad_8xlarge" | "c5ad_12xlarge" | "c5ad_16xlarge" | "c5ad_24xlarge" | "c5d_large" | "c5d_xlarge" | "c5d_2xlarge" | "c5d_4xlarge" | "c5d_9xlarge" | "c5d_12xlarge" | "c5d_18xlarge" | "c5d_24xlarge" | "c5d_metal" | "c5n_large" | "c5n_xlarge" | "c5n_2xlarge" | "c5n_4xlarge" | "c5n_9xlarge" | "c5n_18xlarge" | "c5n_metal" | "c6g_medium" | "c6g_large" | "c6g_xlarge" | "c6g_2xlarge" | "c6g_4xlarge" | "c6g_8xlarge" | "c6g_12xlarge" | "c6g_16xlarge" | "c6g_metal" | "c6gd_medium" | "c6gd_large" | "c6gd_xlarge" | "c6gd_2xlarge" | "c6gd_4xlarge" | "c6gd_8xlarge" | "c6gd_12xlarge" | "c6gd_16xlarge" | "c6gd_metal" | "c6gn_medium" | "c6gn_large" | "c6gn_xlarge" | "c6gn_2xlarge" | "c6gn_4xlarge" | "c6gn_8xlarge" | "c6gn_12xlarge" | "c6gn_16xlarge" | "c6i_large" | "c6i_xlarge" | "c6i_2xlarge" | "c6i_4xlarge" | "c6i_8xlarge" | "c6i_12xlarge" | "c6i_16xlarge" | "c6i_24xlarge" | "c6i_32xlarge" | "c6i_metal" | "cc1_4xlarge" | "cc2_8xlarge" | "cg1_4xlarge" | "cr1_8xlarge" | "d2_xlarge" | "d2_2xlarge" | "d2_4xlarge" | "d2_8xlarge" | "d3_xlarge" | "d3_2xlarge" | "d3_4xlarge" | "d3_8xlarge" | "d3en_xlarge" | "d3en_2xlarge" | "d3en_4xlarge" | "d3en_6xlarge" | "d3en_8xlarge" | "d3en_12xlarge" | "dl1_24xlarge" | "f1_2xlarge" | "f1_4xlarge" | "f1_16xlarge" | "g2_2xlarge" | "g2_8xlarge" | "g3_4xlarge" | "g3_8xlarge" | "g3_16xlarge" | "g3s_xlarge" | "g4ad_xlarge" | "g4ad_2xlarge" | "g4ad_4xlarge" | "g4ad_8xlarge" | "g4ad_16xlarge" | "g4dn_xlarge" | "g4dn_2xlarge" | "g4dn_4xlarge" | "g4dn_8xlarge" | "g4dn_12xlarge" | "g4dn_16xlarge" | "g4dn_metal" | "g5_xlarge" | "g5_2xlarge" | "g5_4xlarge" | "g5_8xlarge" | "g5_12xlarge" | "g5_16xlarge" | "g5_24xlarge" | "g5_48xlarge" | "g5g_xlarge" | "g5g_2xlarge" | "g5g_4xlarge" | "g5g_8xlarge" | "g5g_16xlarge" | "g5g_metal" | "hi1_4xlarge" | "hpc6a_48xlarge" | "hs1_8xlarge" | "h1_2xlarge" | "h1_4xlarge" | "h1_8xlarge" | "h1_16xlarge" | "i2_xlarge" | "i2_2xlarge" | "i2_4xlarge" | "i2_8xlarge" | "i3_large" | "i3_xlarge" | "i3_2xlarge" | "i3_4xlarge" | "i3_8xlarge" | "i3_16xlarge" | "i3_metal" | "i3en_large" | "i3en_xlarge" | "i3en_2xlarge" | "i3en_3xlarge" | "i3en_6xlarge" | "i3en_12xlarge" | "i3en_24xlarge" | "i3en_metal" | "im4gn_large" | "im4gn_xlarge" | "im4gn_2xlarge" | "im4gn_4xlarge" | "im4gn_8xlarge" | "im4gn_16xlarge" | "inf1_xlarge" | "inf1_2xlarge" | "inf1_6xlarge" | "inf1_24xlarge" | "is4gen_medium" | "is4gen_large" | "is4gen_xlarge" | "is4gen_2xlarge" | "is4gen_4xlarge" | "is4gen_8xlarge" | "m1_small" | "m1_medium" | "m1_large" | "m1_xlarge" | "m2_xlarge" | "m2_2xlarge" | "m2_4xlarge" | "m3_medium" | "m3_large" | "m3_xlarge" | "m3_2xlarge" | "m4_large" | "m4_xlarge" | "m4_2xlarge" | "m4_4xlarge" | "m4_10xlarge" | "m4_16xlarge" | "m5_large" | "m5_xlarge" | "m5_2xlarge" | "m5_4xlarge" | "m5_8xlarge" | "m5_12xlarge" | "m5_16xlarge" | "m5_24xlarge" | "m5_metal" | "m5a_large" | "m5a_xlarge" | "m5a_2xlarge" | "m5a_4xlarge" | "m5a_8xlarge" | "m5a_12xlarge" | "m5a_16xlarge" | "m5a_24xlarge" | "m5ad_large" | "m5ad_xlarge" | "m5ad_2xlarge" | "m5ad_4xlarge" | "m5ad_8xlarge" | "m5ad_12xlarge" | "m5ad_16xlarge" | "m5ad_24xlarge" | "m5d_large" | "m5d_xlarge" | "m5d_2xlarge" | "m5d_4xlarge" | "m5d_8xlarge" | "m5d_12xlarge" | "m5d_16xlarge" | "m5d_24xlarge" | "m5d_metal" | "m5dn_large" | "m5dn_xlarge" | "m5dn_2xlarge" | "m5dn_4xlarge" | "m5dn_8xlarge" | "m5dn_12xlarge" | "m5dn_16xlarge" | "m5dn_24xlarge" | "m5dn_metal" | "m5n_large" | "m5n_xlarge" | "m5n_2xlarge" | "m5n_4xlarge" | "m5n_8xlarge" | "m5n_12xlarge" | "m5n_16xlarge" | "m5n_24xlarge" | "m5n_metal" | "m5zn_large" | "m5zn_xlarge" | "m5zn_2xlarge" | "m5zn_3xlarge" | "m5zn_6xlarge" | "m5zn_12xlarge" | "m5zn_metal" | "m6a_large" | "m6a_xlarge" | "m6a_2xlarge" | "m6a_4xlarge" | "m6a_8xlarge" | "m6a_12xlarge" | "m6a_16xlarge" | "m6a_24xlarge" | "m6a_32xlarge" | "m6a_48xlarge" | "m6g_metal" | "m6g_medium" | "m6g_large" | "m6g_xlarge" | "m6g_2xlarge" | "m6g_4xlarge" | "m6g_8xlarge" | "m6g_12xlarge" | "m6g_16xlarge" | "m6gd_metal" | "m6gd_medium" | "m6gd_large" | "m6gd_xlarge" | "m6gd_2xlarge" | "m6gd_4xlarge" | "m6gd_8xlarge" | "m6gd_12xlarge" | "m6gd_16xlarge" | "m6i_large" | "m6i_xlarge" | "m6i_2xlarge" | "m6i_4xlarge" | "m6i_8xlarge" | "m6i_12xlarge" | "m6i_16xlarge" | "m6i_24xlarge" | "m6i_32xlarge" | "m6i_metal" | "mac1_metal" | "p2_xlarge" | "p2_8xlarge" | "p2_16xlarge" | "p3_2xlarge" | "p3_8xlarge" | "p3_16xlarge" | "p3dn_24xlarge" | "p4d_24xlarge" | "r3_large" | "r3_xlarge" | "r3_2xlarge" | "r3_4xlarge" | "r3_8xlarge" | "r4_large" | "r4_xlarge" | "r4_2xlarge" | "r4_4xlarge" | "r4_8xlarge" | "r4_16xlarge" | "r5_large" | "r5_xlarge" | "r5_2xlarge" | "r5_4xlarge" | "r5_8xlarge" | "r5_12xlarge" | "r5_16xlarge" | "r5_24xlarge" | "r5_metal" | "r5a_large" | "r5a_xlarge" | "r5a_2xlarge" | "r5a_4xlarge" | "r5a_8xlarge" | "r5a_12xlarge" | "r5a_16xlarge" | "r5a_24xlarge" | "r5ad_large" | "r5ad_xlarge" | "r5ad_2xlarge" | "r5ad_4xlarge" | "r5ad_8xlarge" | "r5ad_12xlarge" | "r5ad_16xlarge" | "r5ad_24xlarge" | "r5b_large" | "r5b_xlarge" | "r5b_2xlarge" | "r5b_4xlarge" | "r5b_8xlarge" | "r5b_12xlarge" | "r5b_16xlarge" | "r5b_24xlarge" | "r5b_metal" | "r5d_large" | "r5d_xlarge" | "r5d_2xlarge" | "r5d_4xlarge" | "r5d_8xlarge" | "r5d_12xlarge" | "r5d_16xlarge" | "r5d_24xlarge" | "r5d_metal" | "r5dn_large" | "r5dn_xlarge" | "r5dn_2xlarge" | "r5dn_4xlarge" | "r5dn_8xlarge" | "r5dn_12xlarge" | "r5dn_16xlarge" | "r5dn_24xlarge" | "r5dn_metal" | "r5n_large" | "r5n_xlarge" | "r5n_2xlarge" | "r5n_4xlarge" | "r5n_8xlarge" | "r5n_12xlarge" | "r5n_16xlarge" | "r5n_24xlarge" | "r5n_metal" | "r6g_medium" | "r6g_large" | "r6g_xlarge" | "r6g_2xlarge" | "r6g_4xlarge" | "r6g_8xlarge" | "r6g_12xlarge" | "r6g_16xlarge" | "r6g_metal" | "r6gd_medium" | "r6gd_large" | "r6gd_xlarge" | "r6gd_2xlarge" | "r6gd_4xlarge" | "r6gd_8xlarge" | "r6gd_12xlarge" | "r6gd_16xlarge" | "r6gd_metal" | "r6i_large" | "r6i_xlarge" | "r6i_2xlarge" | "r6i_4xlarge" | "r6i_8xlarge" | "r6i_12xlarge" | "r6i_16xlarge" | "r6i_24xlarge" | "r6i_32xlarge" | "r6i_metal" | "t1_micro" | "t2_nano" | "t2_micro" | "t2_small" | "t2_medium" | "t2_large" | "t2_xlarge" | "t2_2xlarge" | "t3_nano" | "t3_micro" | "t3_small" | "t3_medium" | "t3_large" | "t3_xlarge" | "t3_2xlarge" | "t3a_nano" | "t3a_micro" | "t3a_small" | "t3a_medium" | "t3a_large" | "t3a_xlarge" | "t3a_2xlarge" | "t4g_nano" | "t4g_micro" | "t4g_small" | "t4g_medium" | "t4g_large" | "t4g_xlarge" | "t4g_2xlarge" | "u_6tb1_56xlarge" | "u_6tb1_112xlarge" | "u_9tb1_112xlarge" | "u_12tb1_112xlarge" | "u_6tb1_metal" | "u_9tb1_metal" | "u_12tb1_metal" | "u_18tb1_metal" | "u_24tb1_metal" | "vt1_3xlarge" | "vt1_6xlarge" | "vt1_24xlarge" | "x1_16xlarge" | "x1_32xlarge" | "x1e_xlarge" | "x1e_2xlarge" | "x1e_4xlarge" | "x1e_8xlarge" | "x1e_16xlarge" | "x1e_32xlarge" | "x2iezn_2xlarge" | "x2iezn_4xlarge" | "x2iezn_6xlarge" | "x2iezn_8xlarge" | "x2iezn_12xlarge" | "x2iezn_metal" | "x2gd_medium" | "x2gd_large" | "x2gd_xlarge" | "x2gd_2xlarge" | "x2gd_4xlarge" | "x2gd_8xlarge" | "x2gd_12xlarge" | "x2gd_16xlarge" | "x2gd_metal" | "z1d_large" | "z1d_xlarge" | "z1d_2xlarge" | "z1d_3xlarge" | "z1d_6xlarge" | "z1d_12xlarge" | "z1d_metal" | "x2idn_16xlarge" | "x2idn_24xlarge" | "x2idn_32xlarge" | "x2iedn_xlarge" | "x2iedn_2xlarge" | "x2iedn_4xlarge" | "x2iedn_8xlarge" | "x2iedn_16xlarge" | "x2iedn_24xlarge" | "x2iedn_32xlarge" | "c6a_large" | "c6a_xlarge" | "c6a_2xlarge" | "c6a_4xlarge" | "c6a_8xlarge" | "c6a_12xlarge" | "c6a_16xlarge" | "c6a_24xlarge" | "c6a_32xlarge" | "c6a_48xlarge" | "c6a_metal" | "m6a_metal" | "i4i_large" | "i4i_xlarge" | "i4i_2xlarge" | "i4i_4xlarge" | "i4i_8xlarge" | "i4i_16xlarge" | "i4i_32xlarge" | "i4i_metal" | "x2idn_metal" | "x2iedn_metal" | "c7g_medium" | "c7g_large" | "c7g_xlarge" | "c7g_2xlarge" | "c7g_4xlarge" | "c7g_8xlarge" | "c7g_12xlarge" | "c7g_16xlarge" | "mac2_metal" | "c6id_large" | "c6id_xlarge" | "c6id_2xlarge" | "c6id_4xlarge" | "c6id_8xlarge" | "c6id_12xlarge" | "c6id_16xlarge" | "c6id_24xlarge" | "c6id_32xlarge" | "c6id_metal" | "m6id_large" | "m6id_xlarge" | "m6id_2xlarge" | "m6id_4xlarge" | "m6id_8xlarge" | "m6id_12xlarge" | "m6id_16xlarge" | "m6id_24xlarge" | "m6id_32xlarge" | "m6id_metal" | "r6id_large" | "r6id_xlarge" | "r6id_2xlarge" | "r6id_4xlarge" | "r6id_8xlarge" | "r6id_12xlarge" | "r6id_16xlarge" | "r6id_24xlarge" | "r6id_32xlarge" | "r6id_metal" | "r6a_large" | "r6a_xlarge" | "r6a_2xlarge" | "r6a_4xlarge" | "r6a_8xlarge" | "r6a_12xlarge" | "r6a_16xlarge" | "r6a_24xlarge" | "r6a_32xlarge" | "r6a_48xlarge" | "r6a_metal" | "p4de_24xlarge" | "u_3tb1_56xlarge" | "u_18tb1_112xlarge" | "u_24tb1_112xlarge" | "trn1_2xlarge" | "trn1_32xlarge" | "hpc6id_32xlarge" | "c6in_large" | "c6in_xlarge" | "c6in_2xlarge" | "c6in_4xlarge" | "c6in_8xlarge" | "c6in_12xlarge" | "c6in_16xlarge" | "c6in_24xlarge" | "c6in_32xlarge" | "m6in_large" | "m6in_xlarge" | "m6in_2xlarge" | "m6in_4xlarge" | "m6in_8xlarge" | "m6in_12xlarge" | "m6in_16xlarge" | "m6in_24xlarge" | "m6in_32xlarge" | "m6idn_large" | "m6idn_xlarge" | "m6idn_2xlarge" | "m6idn_4xlarge" | "m6idn_8xlarge" | "m6idn_12xlarge" | "m6idn_16xlarge" | "m6idn_24xlarge" | "m6idn_32xlarge" | "r6in_large" | "r6in_xlarge" | "r6in_2xlarge" | "r6in_4xlarge" | "r6in_8xlarge" | "r6in_12xlarge" | "r6in_16xlarge" | "r6in_24xlarge" | "r6in_32xlarge" | "r6idn_large" | "r6idn_xlarge" | "r6idn_2xlarge" | "r6idn_4xlarge" | "r6idn_8xlarge" | "r6idn_12xlarge" | "r6idn_16xlarge" | "r6idn_24xlarge" | "r6idn_32xlarge" | "c7g_metal" | "m7g_medium" | "m7g_large" | "m7g_xlarge" | "m7g_2xlarge" | "m7g_4xlarge" | "m7g_8xlarge" | "m7g_12xlarge" | "m7g_16xlarge" | "m7g_metal" | "r7g_medium" | "r7g_large" | "r7g_xlarge" | "r7g_2xlarge" | "r7g_4xlarge" | "r7g_8xlarge" | "r7g_12xlarge" | "r7g_16xlarge" | "r7g_metal" | "c6in_metal" | "m6in_metal" | "m6idn_metal" | "r6in_metal" | "r6idn_metal" | "inf2_xlarge" | "inf2_8xlarge" | "inf2_24xlarge" | "inf2_48xlarge" | "trn1n_32xlarge" | "i4g_large" | "i4g_xlarge" | "i4g_2xlarge" | "i4g_4xlarge" | "i4g_8xlarge" | "i4g_16xlarge" | "hpc7g_4xlarge" | "hpc7g_8xlarge" | "hpc7g_16xlarge" | "c7gn_medium" | "c7gn_large" | "c7gn_xlarge" | "c7gn_2xlarge" | "c7gn_4xlarge" | "c7gn_8xlarge" | "c7gn_12xlarge" | "c7gn_16xlarge" | "p5_48xlarge" | "m7i_large" | "m7i_xlarge" | "m7i_2xlarge" | "m7i_4xlarge" | "m7i_8xlarge" | "m7i_12xlarge" | "m7i_16xlarge" | "m7i_24xlarge" | "m7i_48xlarge" | "m7i_flex_large" | "m7i_flex_xlarge" | "m7i_flex_2xlarge" | "m7i_flex_4xlarge" | "m7i_flex_8xlarge" | "m7a_medium" | "m7a_large" | "m7a_xlarge" | "m7a_2xlarge" | "m7a_4xlarge" | "m7a_8xlarge" | "m7a_12xlarge" | "m7a_16xlarge" | "m7a_24xlarge" | "m7a_32xlarge" | "m7a_48xlarge" | "m7a_metal_48xl" | "hpc7a_12xlarge" | "hpc7a_24xlarge" | "hpc7a_48xlarge" | "hpc7a_96xlarge" | "c7gd_medium" | "c7gd_large" | "c7gd_xlarge" | "c7gd_2xlarge" | "c7gd_4xlarge" | "c7gd_8xlarge" | "c7gd_12xlarge" | "c7gd_16xlarge" | "m7gd_medium" | "m7gd_large" | "m7gd_xlarge" | "m7gd_2xlarge" | "m7gd_4xlarge" | "m7gd_8xlarge" | "m7gd_12xlarge" | "m7gd_16xlarge" | "r7gd_medium" | "r7gd_large" | "r7gd_xlarge" | "r7gd_2xlarge" | "r7gd_4xlarge" | "r7gd_8xlarge" | "r7gd_12xlarge" | "r7gd_16xlarge" | "r7a_medium" | "r7a_large" | "r7a_xlarge" | "r7a_2xlarge" | "r7a_4xlarge" | "r7a_8xlarge" | "r7a_12xlarge" | "r7a_16xlarge" | "r7a_24xlarge" | "r7a_32xlarge" | "r7a_48xlarge" | "c7i_large" | "c7i_xlarge" | "c7i_2xlarge" | "c7i_4xlarge" | "c7i_8xlarge" | "c7i_12xlarge" | "c7i_16xlarge" | "c7i_24xlarge" | "c7i_48xlarge" | "mac2_m2pro_metal" | "r7iz_large" | "r7iz_xlarge" | "r7iz_2xlarge" | "r7iz_4xlarge" | "r7iz_8xlarge" | "r7iz_12xlarge" | "r7iz_16xlarge" | "r7iz_32xlarge" | "c7a_medium" | "c7a_large" | "c7a_xlarge" | "c7a_2xlarge" | "c7a_4xlarge" | "c7a_8xlarge" | "c7a_12xlarge" | "c7a_16xlarge" | "c7a_24xlarge" | "c7a_32xlarge" | "c7a_48xlarge" | "c7a_metal_48xl" | "r7a_metal_48xl" | "r7i_large" | "r7i_xlarge" | "r7i_2xlarge" | "r7i_4xlarge" | "r7i_8xlarge" | "r7i_12xlarge" | "r7i_16xlarge" | "r7i_24xlarge" | "r7i_48xlarge" | "dl2q_24xlarge" | "mac2_m2_metal" | "i4i_12xlarge" | "i4i_24xlarge" | "c7i_metal_24xl" | "c7i_metal_48xl" | "m7i_metal_24xl" | "m7i_metal_48xl" | "r7i_metal_24xl" | "r7i_metal_48xl" | "r7iz_metal_16xl" | "r7iz_metal_32xl" | "c7gd_metal" | "m7gd_metal" | "r7gd_metal" | "g6_xlarge" | "g6_2xlarge" | "g6_4xlarge" | "g6_8xlarge" | "g6_12xlarge" | "g6_16xlarge" | "g6_24xlarge" | "g6_48xlarge" | "gr6_4xlarge" | "gr6_8xlarge" | "c7i_flex_large" | "c7i_flex_xlarge" | "c7i_flex_2xlarge" | "c7i_flex_4xlarge" | "c7i_flex_8xlarge" | "u7i_12tb_224xlarge" | "u7in_16tb_224xlarge" | "u7in_24tb_224xlarge" | "u7in_32tb_224xlarge" | "u7ib_12tb_224xlarge" | "c7gn_metal" | "r8g_medium" | "r8g_large" | "r8g_xlarge" | "r8g_2xlarge" | "r8g_4xlarge" | "r8g_8xlarge" | "r8g_12xlarge" | "r8g_16xlarge" | "r8g_24xlarge" | "r8g_48xlarge" | "r8g_metal_24xl" | "r8g_metal_48xl" | "mac2_m1ultra_metal" | "g6e_xlarge" | "g6e_2xlarge" | "g6e_4xlarge" | "g6e_8xlarge" | "g6e_12xlarge" | "g6e_16xlarge" | "g6e_24xlarge" | "g6e_48xlarge" | "c8g_medium" | "c8g_large" | "c8g_xlarge" | "c8g_2xlarge" | "c8g_4xlarge" | "c8g_8xlarge" | "c8g_12xlarge" | "c8g_16xlarge" | "c8g_24xlarge" | "c8g_48xlarge" | "c8g_metal_24xl" | "c8g_metal_48xl" | "m8g_medium" | "m8g_large" | "m8g_xlarge" | "m8g_2xlarge" | "m8g_4xlarge" | "m8g_8xlarge" | "m8g_12xlarge" | "m8g_16xlarge" | "m8g_24xlarge" | "m8g_48xlarge" | "m8g_metal_24xl" | "m8g_metal_48xl" | "x8g_medium" | "x8g_large" | "x8g_xlarge" | "x8g_2xlarge" | "x8g_4xlarge" | "x8g_8xlarge" | "x8g_12xlarge" | "x8g_16xlarge" | "x8g_24xlarge" | "x8g_48xlarge" | "x8g_metal_24xl" | "x8g_metal_48xl" | "i7ie_large" | "i7ie_xlarge" | "i7ie_2xlarge" | "i7ie_3xlarge" | "i7ie_6xlarge" | "i7ie_12xlarge" | "i7ie_18xlarge" | "i7ie_24xlarge" | "i7ie_48xlarge" | "i8g_large" | "i8g_xlarge" | "i8g_2xlarge" | "i8g_4xlarge" | "i8g_8xlarge" | "i8g_12xlarge" | "i8g_16xlarge" | "i8g_24xlarge" | "i8g_metal_24xl" | "u7i_6tb_112xlarge" | "u7i_8tb_112xlarge" | "u7inh_32tb_480xlarge" | "p5e_48xlarge" | "p5en_48xlarge" | "f2_12xlarge" | "f2_48xlarge" | "trn2_48xlarge" | "c7i_flex_12xlarge" | "c7i_flex_16xlarge" | "m7i_flex_12xlarge" | "m7i_flex_16xlarge" | "i7ie_metal_24xl" | "i7ie_metal_48xl" | "i8g_48xlarge" | "c8gd_medium" | "c8gd_large" | "c8gd_xlarge" | "c8gd_2xlarge" | "c8gd_4xlarge" | "c8gd_8xlarge" | "c8gd_12xlarge" | "c8gd_16xlarge" | "c8gd_24xlarge" | "c8gd_48xlarge" | "c8gd_metal_24xl" | "c8gd_metal_48xl" | "i7i_large" | "i7i_xlarge" | "i7i_2xlarge" | "i7i_4xlarge" | "i7i_8xlarge" | "i7i_12xlarge" | "i7i_16xlarge" | "i7i_24xlarge" | "i7i_48xlarge" | "i7i_metal_24xl" | "i7i_metal_48xl" | "p6_b200_48xlarge" | "m8gd_medium" | "m8gd_large" | "m8gd_xlarge" | "m8gd_2xlarge" | "m8gd_4xlarge" | "m8gd_8xlarge" | "m8gd_12xlarge" | "m8gd_16xlarge" | "m8gd_24xlarge" | "m8gd_48xlarge" | "m8gd_metal_24xl" | "m8gd_metal_48xl" | "r8gd_medium" | "r8gd_large" | "r8gd_xlarge" | "r8gd_2xlarge" | "r8gd_4xlarge" | "r8gd_8xlarge" | "r8gd_12xlarge" | "r8gd_16xlarge" | "r8gd_24xlarge" | "r8gd_48xlarge" | "r8gd_metal_24xl" | "r8gd_metal_48xl";
export type InstanceTypeHypervisor = "NITRO" | "XEN";
export interface InstanceTypeInfo {
  InstanceType?: InstanceType;
  CurrentGeneration?: boolean;
  FreeTierEligible?: boolean;
  SupportedUsageClasses?: Array<UsageClassType>;
  SupportedRootDeviceTypes?: Array<RootDeviceType>;
  SupportedVirtualizationTypes?: Array<VirtualizationType>;
  BareMetal?: boolean;
  Hypervisor?: InstanceTypeHypervisor;
  ProcessorInfo?: ProcessorInfo;
  VCpuInfo?: VCpuInfo;
  MemoryInfo?: MemoryInfo;
  InstanceStorageSupported?: boolean;
  InstanceStorageInfo?: InstanceStorageInfo;
  EbsInfo?: EbsInfo;
  NetworkInfo?: NetworkInfo;
  GpuInfo?: GpuInfo;
  FpgaInfo?: FpgaInfo;
  PlacementGroupInfo?: PlacementGroupInfo;
  InferenceAcceleratorInfo?: InferenceAcceleratorInfo;
  HibernationSupported?: boolean;
  BurstablePerformanceSupported?: boolean;
  DedicatedHostsSupported?: boolean;
  AutoRecoverySupported?: boolean;
  SupportedBootModes?: Array<BootModeType>;
  NitroEnclavesSupport?: NitroEnclavesSupport;
  NitroTpmSupport?: NitroTpmSupport;
  NitroTpmInfo?: NitroTpmInfo;
  MediaAcceleratorInfo?: MediaAcceleratorInfo;
  NeuronInfo?: NeuronInfo;
  PhcSupport?: PhcSupport;
  RebootMigrationSupport?: RebootMigrationSupport;
}
export interface InstanceTypeInfoFromInstanceRequirements {
  InstanceType?: string;
}
export type InstanceTypeInfoFromInstanceRequirementsSet = Array<InstanceTypeInfoFromInstanceRequirements>;
export type InstanceTypeInfoList = Array<InstanceTypeInfo>;
export type InstanceTypeList = Array<InstanceType>;
export interface InstanceTypeOffering {
  InstanceType?: InstanceType;
  LocationType?: LocationType;
  Location?: string;
}
export type InstanceTypeOfferingsList = Array<InstanceTypeOffering>;
export type InstanceTypes = Array<string>;
export type InstanceTypesList = Array<string>;
export interface InstanceUsage {
  AccountId?: string;
  UsedInstanceCount?: number;
}
export type InstanceUsageSet = Array<InstanceUsage>;
export type Integer = number;

export type IntegerWithConstraints = number;

export interface IntegrateServices {
  AthenaIntegrations?: Array<AthenaIntegration>;
}
export type InterfacePermissionType = "INSTANCE_ATTACH" | "EIP_ASSOCIATE";
export type InterfaceProtocolType = "VLAN" | "GRE";
export interface InternetGateway {
  Attachments?: Array<InternetGatewayAttachment>;
  InternetGatewayId?: string;
  OwnerId?: string;
  Tags?: Array<Tag>;
}
export interface InternetGatewayAttachment {
  State?: AttachmentStatus;
  VpcId?: string;
}
export type InternetGatewayAttachmentList = Array<InternetGatewayAttachment>;
export type InternetGatewayBlockMode = "off" | "block_bidirectional" | "block_ingress";
export type InternetGatewayExclusionMode = "allow_bidirectional" | "allow_egress";
export type InternetGatewayId = string;

export type InternetGatewayIdList = Array<string>;
export type InternetGatewayList = Array<InternetGateway>;
export type IpAddress = string;

export type IpAddressList = Array<string>;
export type IpAddressType = "ipv4" | "dualstack" | "ipv6";
export interface Ipam {
  OwnerId?: string;
  IpamId?: string;
  IpamArn?: string;
  IpamRegion?: string;
  PublicDefaultScopeId?: string;
  PrivateDefaultScopeId?: string;
  ScopeCount?: number;
  Description?: string;
  OperatingRegions?: Array<IpamOperatingRegion>;
  State?: IpamState;
  Tags?: Array<Tag>;
  DefaultResourceDiscoveryId?: string;
  DefaultResourceDiscoveryAssociationId?: string;
  ResourceDiscoveryAssociationCount?: number;
  StateMessage?: string;
  Tier?: IpamTier;
  EnablePrivateGua?: boolean;
  MeteredAccount?: IpamMeteredAccount;
}
export type IpamAddressHistoryMaxResults = number;

export interface IpamAddressHistoryRecord {
  ResourceOwnerId?: string;
  ResourceRegion?: string;
  ResourceType?: IpamAddressHistoryResourceType;
  ResourceId?: string;
  ResourceCidr?: string;
  ResourceName?: string;
  ResourceComplianceStatus?: IpamComplianceStatus;
  ResourceOverlapStatus?: IpamOverlapStatus;
  VpcId?: string;
  SampledStartTime?: Date | string;
  SampledEndTime?: Date | string;
}
export type IpamAddressHistoryRecordSet = Array<IpamAddressHistoryRecord>;
export type IpamAddressHistoryResourceType = "eip" | "vpc" | "subnet" | "network_interface" | "instance";
export type IpamAssociatedResourceDiscoveryStatus = "ACTIVE" | "NOT_FOUND";
export interface IpamCidrAuthorizationContext {
  Message?: string;
  Signature?: string;
}
export type IpamComplianceStatus = "compliant" | "noncompliant" | "unmanaged" | "ignored";
export interface IpamDiscoveredAccount {
  AccountId?: string;
  DiscoveryRegion?: string;
  FailureReason?: IpamDiscoveryFailureReason;
  LastAttemptedDiscoveryTime?: Date | string;
  LastSuccessfulDiscoveryTime?: Date | string;
  OrganizationalUnitId?: string;
}
export type IpamDiscoveredAccountSet = Array<IpamDiscoveredAccount>;
export interface IpamDiscoveredPublicAddress {
  IpamResourceDiscoveryId?: string;
  AddressRegion?: string;
  Address?: string;
  AddressOwnerId?: string;
  AddressAllocationId?: string;
  AssociationStatus?: IpamPublicAddressAssociationStatus;
  AddressType?: IpamPublicAddressType;
  Service?: IpamPublicAddressAwsService;
  ServiceResource?: string;
  VpcId?: string;
  SubnetId?: string;
  PublicIpv4PoolId?: string;
  NetworkInterfaceId?: string;
  NetworkInterfaceDescription?: string;
  InstanceId?: string;
  Tags?: IpamPublicAddressTags;
  NetworkBorderGroup?: string;
  SecurityGroups?: Array<IpamPublicAddressSecurityGroup>;
  SampleTime?: Date | string;
}
export type IpamDiscoveredPublicAddressSet = Array<IpamDiscoveredPublicAddress>;
export interface IpamDiscoveredResourceCidr {
  IpamResourceDiscoveryId?: string;
  ResourceRegion?: string;
  ResourceId?: string;
  ResourceOwnerId?: string;
  ResourceCidr?: string;
  IpSource?: IpamResourceCidrIpSource;
  ResourceType?: IpamResourceType;
  ResourceTags?: Array<IpamResourceTag>;
  IpUsage?: number;
  VpcId?: string;
  SubnetId?: string;
  NetworkInterfaceAttachmentStatus?: IpamNetworkInterfaceAttachmentStatus;
  SampleTime?: Date | string;
  AvailabilityZoneId?: string;
}
export type IpamDiscoveredResourceCidrSet = Array<IpamDiscoveredResourceCidr>;
export type IpamDiscoveryFailureCode = "assume_role_failure" | "throttling_failure" | "unauthorized_failure";
export interface IpamDiscoveryFailureReason {
  Code?: IpamDiscoveryFailureCode;
  Message?: string;
}
export interface IpamExternalResourceVerificationToken {
  IpamExternalResourceVerificationTokenId?: string;
  IpamExternalResourceVerificationTokenArn?: string;
  IpamId?: string;
  IpamArn?: string;
  IpamRegion?: string;
  TokenValue?: string;
  TokenName?: string;
  NotAfter?: Date | string;
  Status?: TokenState;
  Tags?: Array<Tag>;
  State?: IpamExternalResourceVerificationTokenState;
}
export type IpamExternalResourceVerificationTokenId = string;

export type IpamExternalResourceVerificationTokenSet = Array<IpamExternalResourceVerificationToken>;
export type IpamExternalResourceVerificationTokenState = "CREATE_IN_PROGRESS" | "CREATE_COMPLETE" | "CREATE_FAILED" | "DELETE_IN_PROGRESS" | "DELETE_COMPLETE" | "DELETE_FAILED";
export type IpamId = string;

export type IpamManagementState = "managed" | "unmanaged" | "ignored";
export type IpamMaxResults = number;

export type IpamMeteredAccount = "ipam_owner" | "resource_owner";
export type IpamNetmaskLength = number;

export type IpamNetworkInterfaceAttachmentStatus = "available" | "in_use";
export interface IpamOperatingRegion {
  RegionName?: string;
}
export type IpamOperatingRegionSet = Array<IpamOperatingRegion>;
export interface IpamOrganizationalUnitExclusion {
  OrganizationsEntityPath?: string;
}
export type IpamOrganizationalUnitExclusionSet = Array<IpamOrganizationalUnitExclusion>;
export type IpamOverlapStatus = "overlapping" | "nonoverlapping" | "ignored";
export interface IpamPool {
  OwnerId?: string;
  IpamPoolId?: string;
  SourceIpamPoolId?: string;
  IpamPoolArn?: string;
  IpamScopeArn?: string;
  IpamScopeType?: IpamScopeType;
  IpamArn?: string;
  IpamRegion?: string;
  Locale?: string;
  PoolDepth?: number;
  State?: IpamPoolState;
  StateMessage?: string;
  Description?: string;
  AutoImport?: boolean;
  PubliclyAdvertisable?: boolean;
  AddressFamily?: AddressFamily;
  AllocationMinNetmaskLength?: number;
  AllocationMaxNetmaskLength?: number;
  AllocationDefaultNetmaskLength?: number;
  AllocationResourceTags?: Array<IpamResourceTag>;
  Tags?: Array<Tag>;
  AwsService?: IpamPoolAwsService;
  PublicIpSource?: IpamPoolPublicIpSource;
  SourceResource?: IpamPoolSourceResource;
}
export interface IpamPoolAllocation {
  Cidr?: string;
  IpamPoolAllocationId?: string;
  Description?: string;
  ResourceId?: string;
  ResourceType?: IpamPoolAllocationResourceType;
  ResourceRegion?: string;
  ResourceOwner?: string;
}
export type IpamPoolAllocationAllowedCidrs = Array<string>;
export type IpamPoolAllocationDisallowedCidrs = Array<string>;
export type IpamPoolAllocationId = string;

export type IpamPoolAllocationResourceType = "ipam_pool" | "vpc" | "ec2_public_ipv4_pool" | "custom" | "subnet" | "eip";
export type IpamPoolAllocationSet = Array<IpamPoolAllocation>;
export type IpamPoolAwsService = "ec2";
export interface IpamPoolCidr {
  Cidr?: string;
  State?: IpamPoolCidrState;
  FailureReason?: IpamPoolCidrFailureReason;
  IpamPoolCidrId?: string;
  NetmaskLength?: number;
}
export type IpamPoolCidrFailureCode = "cidr_not_available" | "limit_exceeded";
export interface IpamPoolCidrFailureReason {
  Code?: IpamPoolCidrFailureCode;
  Message?: string;
}
export type IpamPoolCidrId = string;

export type IpamPoolCidrSet = Array<IpamPoolCidr>;
export type IpamPoolCidrState = "pending_provision" | "provisioned" | "failed_provision" | "pending_deprovision" | "deprovisioned" | "failed_deprovision" | "pending_import" | "failed_import";
export type IpamPoolId = string;

export type IpamPoolPublicIpSource = "amazon" | "byoip";
export type IpamPoolSet = Array<IpamPool>;
export interface IpamPoolSourceResource {
  ResourceId?: string;
  ResourceType?: IpamPoolSourceResourceType;
  ResourceRegion?: string;
  ResourceOwner?: string;
}
export interface IpamPoolSourceResourceRequest {
  ResourceId?: string;
  ResourceType?: IpamPoolSourceResourceType;
  ResourceRegion?: string;
  ResourceOwner?: string;
}
export type IpamPoolSourceResourceType = "vpc";
export type IpamPoolState = "create_in_progress" | "create_complete" | "create_failed" | "modify_in_progress" | "modify_complete" | "modify_failed" | "delete_in_progress" | "delete_complete" | "delete_failed" | "isolate_in_progress" | "isolate_complete" | "restore_in_progress";
export type IpamPublicAddressAssociationStatus = "ASSOCIATED" | "DISASSOCIATED";
export type IpamPublicAddressAwsService = "NAT_GATEWAY" | "DMS" | "REDSHIFT" | "ECS" | "RDS" | "S2S_VPN" | "EC2_LB" | "AGA" | "OTHER";
export interface IpamPublicAddressSecurityGroup {
  GroupName?: string;
  GroupId?: string;
}
export type IpamPublicAddressSecurityGroupList = Array<IpamPublicAddressSecurityGroup>;
export interface IpamPublicAddressTag {
  Key?: string;
  Value?: string;
}
export type IpamPublicAddressTagList = Array<IpamPublicAddressTag>;
export interface IpamPublicAddressTags {
  EipTags?: Array<IpamPublicAddressTag>;
}
export type IpamPublicAddressType = "SERVICE_MANAGED_IP" | "SERVICE_MANAGED_BYOIP" | "AMAZON_OWNED_EIP" | "AMAZON_OWNED_CONTIG" | "BYOIP" | "EC2_PUBLIC_IP";
export interface IpamResourceCidr {
  IpamId?: string;
  IpamScopeId?: string;
  IpamPoolId?: string;
  ResourceRegion?: string;
  ResourceOwnerId?: string;
  ResourceId?: string;
  ResourceName?: string;
  ResourceCidr?: string;
  ResourceType?: IpamResourceType;
  ResourceTags?: Array<IpamResourceTag>;
  IpUsage?: number;
  ComplianceStatus?: IpamComplianceStatus;
  ManagementState?: IpamManagementState;
  OverlapStatus?: IpamOverlapStatus;
  VpcId?: string;
  AvailabilityZoneId?: string;
}
export type IpamResourceCidrIpSource = "amazon" | "byoip" | "none";
export type IpamResourceCidrSet = Array<IpamResourceCidr>;
export interface IpamResourceDiscovery {
  OwnerId?: string;
  IpamResourceDiscoveryId?: string;
  IpamResourceDiscoveryArn?: string;
  IpamResourceDiscoveryRegion?: string;
  Description?: string;
  OperatingRegions?: Array<IpamOperatingRegion>;
  IsDefault?: boolean;
  State?: IpamResourceDiscoveryState;
  Tags?: Array<Tag>;
  OrganizationalUnitExclusions?: Array<IpamOrganizationalUnitExclusion>;
}
export interface IpamResourceDiscoveryAssociation {
  OwnerId?: string;
  IpamResourceDiscoveryAssociationId?: string;
  IpamResourceDiscoveryAssociationArn?: string;
  IpamResourceDiscoveryId?: string;
  IpamId?: string;
  IpamArn?: string;
  IpamRegion?: string;
  IsDefault?: boolean;
  ResourceDiscoveryStatus?: IpamAssociatedResourceDiscoveryStatus;
  State?: IpamResourceDiscoveryAssociationState;
  Tags?: Array<Tag>;
}
export type IpamResourceDiscoveryAssociationId = string;

export type IpamResourceDiscoveryAssociationSet = Array<IpamResourceDiscoveryAssociation>;
export type IpamResourceDiscoveryAssociationState = "ASSOCIATE_IN_PROGRESS" | "ASSOCIATE_COMPLETE" | "ASSOCIATE_FAILED" | "DISASSOCIATE_IN_PROGRESS" | "DISASSOCIATE_COMPLETE" | "DISASSOCIATE_FAILED" | "ISOLATE_IN_PROGRESS" | "ISOLATE_COMPLETE" | "RESTORE_IN_PROGRESS";
export type IpamResourceDiscoveryId = string;

export type IpamResourceDiscoverySet = Array<IpamResourceDiscovery>;
export type IpamResourceDiscoveryState = "CREATE_IN_PROGRESS" | "CREATE_COMPLETE" | "CREATE_FAILED" | "MODIFY_IN_PROGRESS" | "MODIFY_COMPLETE" | "MODIFY_FAILED" | "DELETE_IN_PROGRESS" | "DELETE_COMPLETE" | "DELETE_FAILED" | "ISOLATE_IN_PROGRESS" | "ISOLATE_COMPLETE" | "RESTORE_IN_PROGRESS";
export interface IpamResourceTag {
  Key?: string;
  Value?: string;
}
export type IpamResourceTagList = Array<IpamResourceTag>;
export type IpamResourceType = "vpc" | "subnet" | "eip" | "public_ipv4_pool" | "ipv6_pool" | "eni";
export interface IpamScope {
  OwnerId?: string;
  IpamScopeId?: string;
  IpamScopeArn?: string;
  IpamArn?: string;
  IpamRegion?: string;
  IpamScopeType?: IpamScopeType;
  IsDefault?: boolean;
  Description?: string;
  PoolCount?: number;
  State?: IpamScopeState;
  Tags?: Array<Tag>;
}
export type IpamScopeId = string;

export type IpamScopeSet = Array<IpamScope>;
export type IpamScopeState = "create_in_progress" | "create_complete" | "create_failed" | "modify_in_progress" | "modify_complete" | "modify_failed" | "delete_in_progress" | "delete_complete" | "delete_failed" | "isolate_in_progress" | "isolate_complete" | "restore_in_progress";
export type IpamScopeType = "public" | "private";
export type IpamSet = Array<Ipam>;
export type IpamState = "create_in_progress" | "create_complete" | "create_failed" | "modify_in_progress" | "modify_complete" | "modify_failed" | "delete_in_progress" | "delete_complete" | "delete_failed" | "isolate_in_progress" | "isolate_complete" | "restore_in_progress";
export type IpamTier = "free" | "advanced";
export type IpList = Array<string>;
export interface IpPermission {
  IpProtocol?: string;
  FromPort?: number;
  ToPort?: number;
  UserIdGroupPairs?: Array<UserIdGroupPair>;
  IpRanges?: Array<IpRange>;
  Ipv6Ranges?: Array<Ipv6Range>;
  PrefixListIds?: Array<PrefixListId>;
}
export type IpPermissionList = Array<IpPermission>;
export type IpPrefixList = Array<string>;
export interface IpRange {
  Description?: string;
  CidrIp?: string;
}
export type IpRangeList = Array<IpRange>;
export type IpRanges = Array<string>;
export type IpSource = "amazon" | "byoip" | "none";
export type Ipv4PoolCoipId = string;

export type Ipv4PoolEc2Id = string;

export type Ipv4PrefixesList = Array<Ipv4PrefixSpecification>;
export type Ipv4PrefixList = Array<Ipv4PrefixSpecificationRequest>;
export type Ipv4PrefixListResponse = Array<Ipv4PrefixSpecificationResponse>;
export interface Ipv4PrefixSpecification {
  Ipv4Prefix?: string;
}
export interface Ipv4PrefixSpecificationRequest {
  Ipv4Prefix?: string;
}
export interface Ipv4PrefixSpecificationResponse {
  Ipv4Prefix?: string;
}
export type Ipv6Address = string;

export type Ipv6AddressAttribute = "public" | "private";
export type Ipv6AddressList = Array<string>;
export interface Ipv6CidrAssociation {
  Ipv6Cidr?: string;
  AssociatedResource?: string;
}
export type Ipv6CidrAssociationSet = Array<Ipv6CidrAssociation>;
export interface Ipv6CidrBlock {
  Ipv6CidrBlock?: string;
}
export type Ipv6CidrBlockSet = Array<Ipv6CidrBlock>;
export type Ipv6Flag = boolean;

export interface Ipv6Pool {
  PoolId?: string;
  Description?: string;
  PoolCidrBlocks?: Array<PoolCidrBlock>;
  Tags?: Array<Tag>;
}
export type Ipv6PoolEc2Id = string;

export type Ipv6PoolIdList = Array<string>;
export type Ipv6PoolMaxResults = number;

export type Ipv6PoolSet = Array<Ipv6Pool>;
export type Ipv6PrefixesList = Array<Ipv6PrefixSpecification>;
export type Ipv6PrefixList = Array<Ipv6PrefixSpecificationRequest>;
export type Ipv6PrefixListResponse = Array<Ipv6PrefixSpecificationResponse>;
export interface Ipv6PrefixSpecification {
  Ipv6Prefix?: string;
}
export interface Ipv6PrefixSpecificationRequest {
  Ipv6Prefix?: string;
}
export interface Ipv6PrefixSpecificationResponse {
  Ipv6Prefix?: string;
}
export interface Ipv6Range {
  Description?: string;
  CidrIpv6?: string;
}
export type Ipv6RangeList = Array<Ipv6Range>;
export type Ipv6SupportValue = "enable" | "disable";
export type KernelId = string;

export type KeyFormat = "pem" | "ppk";
export type KeyNameStringList = Array<string>;
export interface KeyPair {
  KeyPairId?: string;
  Tags?: Array<Tag>;
  KeyName?: string;
  KeyFingerprint?: string;
  KeyMaterial?: string;
}
export type KeyPairId = string;

export type KeyPairIdStringList = Array<string>;
export interface KeyPairInfo {
  KeyPairId?: string;
  KeyType?: KeyType;
  Tags?: Array<Tag>;
  PublicKey?: string;
  CreateTime?: Date | string;
  KeyName?: string;
  KeyFingerprint?: string;
}
export type KeyPairList = Array<KeyPairInfo>;
export type KeyPairName = string;

export type KeyPairNameWithResolver = string;

export type KeyType = "rsa" | "ed25519";
export type KmsKeyArn = string;

export type KmsKeyId = string;

export interface LastError {
  Message?: string;
  Code?: string;
}
export interface LaunchPermission {
  OrganizationArn?: string;
  OrganizationalUnitArn?: string;
  UserId?: string;
  Group?: PermissionGroup;
}
export type LaunchPermissionList = Array<LaunchPermission>;
export interface LaunchPermissionModifications {
  Add?: Array<LaunchPermission>;
  Remove?: Array<LaunchPermission>;
}
export interface LaunchSpecification {
  UserData?: string;
  AddressingType?: string;
  BlockDeviceMappings?: Array<BlockDeviceMapping>;
  EbsOptimized?: boolean;
  IamInstanceProfile?: IamInstanceProfileSpecification;
  ImageId?: string;
  InstanceType?: InstanceType;
  KernelId?: string;
  KeyName?: string;
  NetworkInterfaces?: Array<InstanceNetworkInterfaceSpecification>;
  Placement?: SpotPlacement;
  RamdiskId?: string;
  SubnetId?: string;
  SecurityGroups?: Array<GroupIdentifier>;
  Monitoring?: RunInstancesMonitoringEnabled;
}
export type LaunchSpecsList = Array<SpotFleetLaunchSpecification>;
export interface LaunchTemplate {
  LaunchTemplateId?: string;
  LaunchTemplateName?: string;
  CreateTime?: Date | string;
  CreatedBy?: string;
  DefaultVersionNumber?: number;
  LatestVersionNumber?: number;
  Tags?: Array<Tag>;
  Operator?: OperatorResponse;
}
export interface LaunchTemplateAndOverridesResponse {
  LaunchTemplateSpecification?: FleetLaunchTemplateSpecification;
  Overrides?: FleetLaunchTemplateOverrides;
}
export type LaunchTemplateAutoRecoveryState = "default" | "disabled";
export interface LaunchTemplateBlockDeviceMapping {
  DeviceName?: string;
  VirtualName?: string;
  Ebs?: LaunchTemplateEbsBlockDevice;
  NoDevice?: string;
}
export type LaunchTemplateBlockDeviceMappingList = Array<LaunchTemplateBlockDeviceMapping>;
export interface LaunchTemplateBlockDeviceMappingRequest {
  DeviceName?: string;
  VirtualName?: string;
  Ebs?: LaunchTemplateEbsBlockDeviceRequest;
  NoDevice?: string;
}
export type LaunchTemplateBlockDeviceMappingRequestList = Array<LaunchTemplateBlockDeviceMappingRequest>;
export interface LaunchTemplateCapacityReservationSpecificationRequest {
  CapacityReservationPreference?: CapacityReservationPreference;
  CapacityReservationTarget?: CapacityReservationTarget;
}
export interface LaunchTemplateCapacityReservationSpecificationResponse {
  CapacityReservationPreference?: CapacityReservationPreference;
  CapacityReservationTarget?: CapacityReservationTargetResponse;
}
export interface LaunchTemplateConfig {
  LaunchTemplateSpecification?: FleetLaunchTemplateSpecification;
  Overrides?: Array<LaunchTemplateOverrides>;
}
export type LaunchTemplateConfigList = Array<LaunchTemplateConfig>;
export interface LaunchTemplateCpuOptions {
  CoreCount?: number;
  ThreadsPerCore?: number;
  AmdSevSnp?: AmdSevSnpSpecification;
}
export interface LaunchTemplateCpuOptionsRequest {
  CoreCount?: number;
  ThreadsPerCore?: number;
  AmdSevSnp?: AmdSevSnpSpecification;
}
export interface LaunchTemplateEbsBlockDevice {
  Encrypted?: boolean;
  DeleteOnTermination?: boolean;
  Iops?: number;
  KmsKeyId?: string;
  SnapshotId?: string;
  VolumeSize?: number;
  VolumeType?: VolumeType;
  Throughput?: number;
  VolumeInitializationRate?: number;
}
export interface LaunchTemplateEbsBlockDeviceRequest {
  Encrypted?: boolean;
  DeleteOnTermination?: boolean;
  Iops?: number;
  KmsKeyId?: string;
  SnapshotId?: string;
  VolumeSize?: number;
  VolumeType?: VolumeType;
  Throughput?: number;
  VolumeInitializationRate?: number;
}
export interface LaunchTemplateElasticInferenceAccelerator {
  Type: string;
  Count?: number;
}
export type LaunchTemplateElasticInferenceAcceleratorCount = number;

export type LaunchTemplateElasticInferenceAcceleratorList = Array<LaunchTemplateElasticInferenceAccelerator>;
export interface LaunchTemplateElasticInferenceAcceleratorResponse {
  Type?: string;
  Count?: number;
}
export type LaunchTemplateElasticInferenceAcceleratorResponseList = Array<LaunchTemplateElasticInferenceAcceleratorResponse>;
export interface LaunchTemplateEnaSrdSpecification {
  EnaSrdEnabled?: boolean;
  EnaSrdUdpSpecification?: LaunchTemplateEnaSrdUdpSpecification;
}
export interface LaunchTemplateEnaSrdUdpSpecification {
  EnaSrdUdpEnabled?: boolean;
}
export interface LaunchTemplateEnclaveOptions {
  Enabled?: boolean;
}
export interface LaunchTemplateEnclaveOptionsRequest {
  Enabled?: boolean;
}
export type LaunchTemplateErrorCode = "LAUNCH_TEMPLATE_ID_DOES_NOT_EXIST" | "LAUNCH_TEMPLATE_ID_MALFORMED" | "LAUNCH_TEMPLATE_NAME_DOES_NOT_EXIST" | "LAUNCH_TEMPLATE_NAME_MALFORMED" | "LAUNCH_TEMPLATE_VERSION_DOES_NOT_EXIST" | "UNEXPECTED_ERROR";
export interface LaunchTemplateHibernationOptions {
  Configured?: boolean;
}
export interface LaunchTemplateHibernationOptionsRequest {
  Configured?: boolean;
}
export type LaunchTemplateHttpTokensState = "optional" | "required";
export interface LaunchTemplateIamInstanceProfileSpecification {
  Arn?: string;
  Name?: string;
}
export interface LaunchTemplateIamInstanceProfileSpecificationRequest {
  Arn?: string;
  Name?: string;
}
export type LaunchTemplateId = string;

export type LaunchTemplateIdStringList = Array<string>;
export interface LaunchTemplateInstanceMaintenanceOptions {
  AutoRecovery?: LaunchTemplateAutoRecoveryState;
}
export interface LaunchTemplateInstanceMaintenanceOptionsRequest {
  AutoRecovery?: LaunchTemplateAutoRecoveryState;
}
export interface LaunchTemplateInstanceMarketOptions {
  MarketType?: MarketType;
  SpotOptions?: LaunchTemplateSpotMarketOptions;
}
export interface LaunchTemplateInstanceMarketOptionsRequest {
  MarketType?: MarketType;
  SpotOptions?: LaunchTemplateSpotMarketOptionsRequest;
}
export type LaunchTemplateInstanceMetadataEndpointState = "disabled" | "enabled";
export interface LaunchTemplateInstanceMetadataOptions {
  State?: LaunchTemplateInstanceMetadataOptionsState;
  HttpTokens?: LaunchTemplateHttpTokensState;
  HttpPutResponseHopLimit?: number;
  HttpEndpoint?: LaunchTemplateInstanceMetadataEndpointState;
  HttpProtocolIpv6?: LaunchTemplateInstanceMetadataProtocolIpv6;
  InstanceMetadataTags?: LaunchTemplateInstanceMetadataTagsState;
}
export interface LaunchTemplateInstanceMetadataOptionsRequest {
  HttpTokens?: LaunchTemplateHttpTokensState;
  HttpPutResponseHopLimit?: number;
  HttpEndpoint?: LaunchTemplateInstanceMetadataEndpointState;
  HttpProtocolIpv6?: LaunchTemplateInstanceMetadataProtocolIpv6;
  InstanceMetadataTags?: LaunchTemplateInstanceMetadataTagsState;
}
export type LaunchTemplateInstanceMetadataOptionsState = "pending" | "applied";
export type LaunchTemplateInstanceMetadataProtocolIpv6 = "disabled" | "enabled";
export type LaunchTemplateInstanceMetadataTagsState = "disabled" | "enabled";
export interface LaunchTemplateInstanceNetworkInterfaceSpecification {
  AssociateCarrierIpAddress?: boolean;
  AssociatePublicIpAddress?: boolean;
  DeleteOnTermination?: boolean;
  Description?: string;
  DeviceIndex?: number;
  Groups?: Array<string>;
  InterfaceType?: string;
  Ipv6AddressCount?: number;
  Ipv6Addresses?: Array<InstanceIpv6Address>;
  NetworkInterfaceId?: string;
  PrivateIpAddress?: string;
  PrivateIpAddresses?: Array<PrivateIpAddressSpecification>;
  SecondaryPrivateIpAddressCount?: number;
  SubnetId?: string;
  NetworkCardIndex?: number;
  Ipv4Prefixes?: Array<Ipv4PrefixSpecificationResponse>;
  Ipv4PrefixCount?: number;
  Ipv6Prefixes?: Array<Ipv6PrefixSpecificationResponse>;
  Ipv6PrefixCount?: number;
  PrimaryIpv6?: boolean;
  EnaSrdSpecification?: LaunchTemplateEnaSrdSpecification;
  ConnectionTrackingSpecification?: ConnectionTrackingSpecification;
  EnaQueueCount?: number;
}
export type LaunchTemplateInstanceNetworkInterfaceSpecificationList = Array<LaunchTemplateInstanceNetworkInterfaceSpecification>;
export interface LaunchTemplateInstanceNetworkInterfaceSpecificationRequest {
  AssociateCarrierIpAddress?: boolean;
  AssociatePublicIpAddress?: boolean;
  DeleteOnTermination?: boolean;
  Description?: string;
  DeviceIndex?: number;
  Groups?: Array<string>;
  InterfaceType?: string;
  Ipv6AddressCount?: number;
  Ipv6Addresses?: Array<InstanceIpv6AddressRequest>;
  NetworkInterfaceId?: string;
  PrivateIpAddress?: string;
  PrivateIpAddresses?: Array<PrivateIpAddressSpecification>;
  SecondaryPrivateIpAddressCount?: number;
  SubnetId?: string;
  NetworkCardIndex?: number;
  Ipv4Prefixes?: Array<Ipv4PrefixSpecificationRequest>;
  Ipv4PrefixCount?: number;
  Ipv6Prefixes?: Array<Ipv6PrefixSpecificationRequest>;
  Ipv6PrefixCount?: number;
  PrimaryIpv6?: boolean;
  EnaSrdSpecification?: EnaSrdSpecificationRequest;
  ConnectionTrackingSpecification?: ConnectionTrackingSpecificationRequest;
  EnaQueueCount?: number;
}
export type LaunchTemplateInstanceNetworkInterfaceSpecificationRequestList = Array<LaunchTemplateInstanceNetworkInterfaceSpecificationRequest>;
export interface LaunchTemplateLicenseConfiguration {
  LicenseConfigurationArn?: string;
}
export interface LaunchTemplateLicenseConfigurationRequest {
  LicenseConfigurationArn?: string;
}
export type LaunchTemplateLicenseList = Array<LaunchTemplateLicenseConfiguration>;
export type LaunchTemplateLicenseSpecificationListRequest = Array<LaunchTemplateLicenseConfigurationRequest>;
export type LaunchTemplateName = string;

export type LaunchTemplateNameStringList = Array<string>;
export interface LaunchTemplateNetworkPerformanceOptions {
  BandwidthWeighting?: InstanceBandwidthWeighting;
}
export interface LaunchTemplateNetworkPerformanceOptionsRequest {
  BandwidthWeighting?: InstanceBandwidthWeighting;
}
export interface LaunchTemplateOverrides {
  InstanceType?: InstanceType;
  SpotPrice?: string;
  SubnetId?: string;
  AvailabilityZone?: string;
  WeightedCapacity?: number;
  Priority?: number;
  InstanceRequirements?: InstanceRequirements;
}
export type LaunchTemplateOverridesList = Array<LaunchTemplateOverrides>;
export interface LaunchTemplatePlacement {
  AvailabilityZone?: string;
  Affinity?: string;
  GroupName?: string;
  HostId?: string;
  Tenancy?: Tenancy;
  SpreadDomain?: string;
  HostResourceGroupArn?: string;
  PartitionNumber?: number;
  GroupId?: string;
}
export interface LaunchTemplatePlacementRequest {
  AvailabilityZone?: string;
  Affinity?: string;
  GroupName?: string;
  HostId?: string;
  Tenancy?: Tenancy;
  SpreadDomain?: string;
  HostResourceGroupArn?: string;
  PartitionNumber?: number;
  GroupId?: string;
}
export interface LaunchTemplatePrivateDnsNameOptions {
  HostnameType?: HostnameType;
  EnableResourceNameDnsARecord?: boolean;
  EnableResourceNameDnsAAAARecord?: boolean;
}
export interface LaunchTemplatePrivateDnsNameOptionsRequest {
  HostnameType?: HostnameType;
  EnableResourceNameDnsARecord?: boolean;
  EnableResourceNameDnsAAAARecord?: boolean;
}
export type LaunchTemplateSet = Array<LaunchTemplate>;
export interface LaunchTemplatesMonitoring {
  Enabled?: boolean;
}
export interface LaunchTemplatesMonitoringRequest {
  Enabled?: boolean;
}
export interface LaunchTemplateSpecification {
  LaunchTemplateId?: string;
  LaunchTemplateName?: string;
  Version?: string;
}
export interface LaunchTemplateSpotMarketOptions {
  MaxPrice?: string;
  SpotInstanceType?: SpotInstanceType;
  BlockDurationMinutes?: number;
  ValidUntil?: Date | string;
  InstanceInterruptionBehavior?: InstanceInterruptionBehavior;
}
export interface LaunchTemplateSpotMarketOptionsRequest {
  MaxPrice?: string;
  SpotInstanceType?: SpotInstanceType;
  BlockDurationMinutes?: number;
  ValidUntil?: Date | string;
  InstanceInterruptionBehavior?: InstanceInterruptionBehavior;
}
export interface LaunchTemplateTagSpecification {
  ResourceType?: ResourceType;
  Tags?: Array<Tag>;
}
export type LaunchTemplateTagSpecificationList = Array<LaunchTemplateTagSpecification>;
export interface LaunchTemplateTagSpecificationRequest {
  ResourceType?: ResourceType;
  Tags?: Array<Tag>;
}
export type LaunchTemplateTagSpecificationRequestList = Array<LaunchTemplateTagSpecificationRequest>;
export interface LaunchTemplateVersion {
  LaunchTemplateId?: string;
  LaunchTemplateName?: string;
  VersionNumber?: number;
  VersionDescription?: string;
  CreateTime?: Date | string;
  CreatedBy?: string;
  DefaultVersion?: boolean;
  LaunchTemplateData?: ResponseLaunchTemplateData;
  Operator?: OperatorResponse;
}
export type LaunchTemplateVersionSet = Array<LaunchTemplateVersion>;
export interface LicenseConfiguration {
  LicenseConfigurationArn?: string;
}
export interface LicenseConfigurationRequest {
  LicenseConfigurationArn?: string;
}
export type LicenseList = Array<LicenseConfiguration>;
export type LicenseSpecificationListRequest = Array<LicenseConfigurationRequest>;
export type ListImagesInRecycleBinMaxResults = number;

export interface ListImagesInRecycleBinRequest {
  ImageIds?: Array<string>;
  NextToken?: string;
  MaxResults?: number;
  DryRun?: boolean;
}
export interface ListImagesInRecycleBinResult {
  Images?: Array<ImageRecycleBinInfo>;
  NextToken?: string;
}
export type ListingState = "available" | "sold" | "cancelled" | "pending";
export type ListingStatus = "active" | "pending" | "cancelled" | "closed";
export type ListSnapshotsInRecycleBinMaxResults = number;

export interface ListSnapshotsInRecycleBinRequest {
  MaxResults?: number;
  NextToken?: string;
  SnapshotIds?: Array<string>;
  DryRun?: boolean;
}
export interface ListSnapshotsInRecycleBinResult {
  Snapshots?: Array<SnapshotRecycleBinInfo>;
  NextToken?: string;
}
export type LoadBalancerArn = string;

export interface LoadBalancersConfig {
  ClassicLoadBalancersConfig?: ClassicLoadBalancersConfig;
  TargetGroupsConfig?: TargetGroupsConfig;
}
export interface LoadPermission {
  UserId?: string;
  Group?: PermissionGroup;
}
export type LoadPermissionList = Array<LoadPermission>;
export type LoadPermissionListRequest = Array<LoadPermissionRequest>;
export interface LoadPermissionModifications {
  Add?: Array<LoadPermissionRequest>;
  Remove?: Array<LoadPermissionRequest>;
}
export interface LoadPermissionRequest {
  Group?: PermissionGroup;
  UserId?: string;
}
export interface LocalGateway {
  LocalGatewayId?: string;
  OutpostArn?: string;
  OwnerId?: string;
  State?: string;
  Tags?: Array<Tag>;
}
export type LocalGatewayId = string;

export type LocalGatewayIdSet = Array<string>;
export type LocalGatewayMaxResults = number;

export interface LocalGatewayRoute {
  DestinationCidrBlock?: string;
  LocalGatewayVirtualInterfaceGroupId?: string;
  Type?: LocalGatewayRouteType;
  State?: LocalGatewayRouteState;
  LocalGatewayRouteTableId?: string;
  LocalGatewayRouteTableArn?: string;
  OwnerId?: string;
  SubnetId?: string;
  CoipPoolId?: string;
  NetworkInterfaceId?: string;
  DestinationPrefixListId?: string;
}
export type LocalGatewayRouteList = Array<LocalGatewayRoute>;
export type LocalGatewayRouteState = "pending" | "active" | "blackhole" | "deleting" | "deleted";
export interface LocalGatewayRouteTable {
  LocalGatewayRouteTableId?: string;
  LocalGatewayRouteTableArn?: string;
  LocalGatewayId?: string;
  OutpostArn?: string;
  OwnerId?: string;
  State?: string;
  Tags?: Array<Tag>;
  Mode?: LocalGatewayRouteTableMode;
  StateReason?: StateReason;
}
export type LocalGatewayRoutetableId = string;

export type LocalGatewayRouteTableIdSet = Array<string>;
export type LocalGatewayRouteTableMode = "direct_vpc_routing" | "coip";
export type LocalGatewayRouteTableSet = Array<LocalGatewayRouteTable>;
export interface LocalGatewayRouteTableVirtualInterfaceGroupAssociation {
  LocalGatewayRouteTableVirtualInterfaceGroupAssociationId?: string;
  LocalGatewayVirtualInterfaceGroupId?: string;
  LocalGatewayId?: string;
  LocalGatewayRouteTableId?: string;
  LocalGatewayRouteTableArn?: string;
  OwnerId?: string;
  State?: string;
  Tags?: Array<Tag>;
}
export type LocalGatewayRouteTableVirtualInterfaceGroupAssociationId = string;

export type LocalGatewayRouteTableVirtualInterfaceGroupAssociationIdSet = Array<string>;
export type LocalGatewayRouteTableVirtualInterfaceGroupAssociationSet = Array<LocalGatewayRouteTableVirtualInterfaceGroupAssociation>;
export interface LocalGatewayRouteTableVpcAssociation {
  LocalGatewayRouteTableVpcAssociationId?: string;
  LocalGatewayRouteTableId?: string;
  LocalGatewayRouteTableArn?: string;
  LocalGatewayId?: string;
  VpcId?: string;
  OwnerId?: string;
  State?: string;
  Tags?: Array<Tag>;
}
export type LocalGatewayRouteTableVpcAssociationId = string;

export type LocalGatewayRouteTableVpcAssociationIdSet = Array<string>;
export type LocalGatewayRouteTableVpcAssociationSet = Array<LocalGatewayRouteTableVpcAssociation>;
export type LocalGatewayRouteType = "static" | "propagated";
export type LocalGatewaySet = Array<LocalGateway>;
export interface LocalGatewayVirtualInterface {
  LocalGatewayVirtualInterfaceId?: string;
  LocalGatewayId?: string;
  LocalGatewayVirtualInterfaceGroupId?: string;
  LocalGatewayVirtualInterfaceArn?: string;
  OutpostLagId?: string;
  Vlan?: number;
  LocalAddress?: string;
  PeerAddress?: string;
  LocalBgpAsn?: number;
  PeerBgpAsn?: number;
  PeerBgpAsnExtended?: number;
  OwnerId?: string;
  Tags?: Array<Tag>;
  ConfigurationState?: LocalGatewayVirtualInterfaceConfigurationState;
}
export type LocalGatewayVirtualInterfaceConfigurationState = "pending" | "available" | "deleting" | "deleted";
export interface LocalGatewayVirtualInterfaceGroup {
  LocalGatewayVirtualInterfaceGroupId?: string;
  LocalGatewayVirtualInterfaceIds?: Array<string>;
  LocalGatewayId?: string;
  OwnerId?: string;
  LocalBgpAsn?: number;
  LocalBgpAsnExtended?: number;
  LocalGatewayVirtualInterfaceGroupArn?: string;
  Tags?: Array<Tag>;
  ConfigurationState?: LocalGatewayVirtualInterfaceGroupConfigurationState;
}
export type LocalGatewayVirtualInterfaceGroupConfigurationState = "pending" | "incomplete" | "available" | "deleting" | "deleted";
export type LocalGatewayVirtualInterfaceGroupId = string;

export type LocalGatewayVirtualInterfaceGroupIdSet = Array<string>;
export type LocalGatewayVirtualInterfaceGroupSet = Array<LocalGatewayVirtualInterfaceGroup>;
export type LocalGatewayVirtualInterfaceId = string;

export type LocalGatewayVirtualInterfaceIdSet = Array<string>;
export type LocalGatewayVirtualInterfaceSet = Array<LocalGatewayVirtualInterface>;
export type LocalStorage = "INCLUDED" | "REQUIRED" | "EXCLUDED";
export type LocalStorageType = "HDD" | "SSD";
export type LocalStorageTypeSet = Array<LocalStorageType>;
export type Location = string;

export type LocationType = "region" | "availability_zone" | "availability_zone_id" | "outpost";
export interface LockedSnapshotsInfo {
  OwnerId?: string;
  SnapshotId?: string;
  LockState?: LockState;
  LockDuration?: number;
  CoolOffPeriod?: number;
  CoolOffPeriodExpiresOn?: Date | string;
  LockCreatedOn?: Date | string;
  LockDurationStartTime?: Date | string;
  LockExpiresOn?: Date | string;
}
export type LockedSnapshotsInfoList = Array<LockedSnapshotsInfo>;
export type LockMode = "compliance" | "governance";
export interface LockSnapshotRequest {
  SnapshotId: string;
  DryRun?: boolean;
  LockMode: LockMode;
  CoolOffPeriod?: number;
  LockDuration?: number;
  ExpirationDate?: Date | string;
}
export interface LockSnapshotResult {
  SnapshotId?: string;
  LockState?: LockState;
  LockDuration?: number;
  CoolOffPeriod?: number;
  CoolOffPeriodExpiresOn?: Date | string;
  LockCreatedOn?: Date | string;
  LockExpiresOn?: Date | string;
  LockDurationStartTime?: Date | string;
}
export type LockState = "compliance" | "governance" | "compliance_cooloff" | "expired";
export type LogDestinationType = "cloud_watch_logs" | "s3" | "kinesis_data_firehose";
export type Long = number;

export interface MacHost {
  HostId?: string;
  MacOSLatestSupportedVersions?: Array<string>;
}
export type MacHostList = Array<MacHost>;
export interface MacModificationTask {
  InstanceId?: string;
  MacModificationTaskId?: string;
  MacSystemIntegrityProtectionConfig?: MacSystemIntegrityProtectionConfiguration;
  StartTime?: Date | string;
  Tags?: Array<Tag>;
  TaskState?: MacModificationTaskState;
  TaskType?: MacModificationTaskType;
}
export type MacModificationTaskId = string;

export type MacModificationTaskIdList = Array<string>;
export type MacModificationTaskList = Array<MacModificationTask>;
export type MacModificationTaskState = "successful" | "failed" | "inprogress" | "pending";
export type MacModificationTaskType = "SIPModification" | "VolumeOwnershipDelegation";
export type MacOSVersionStringList = Array<string>;
export interface MacSystemIntegrityProtectionConfiguration {
  AppleInternal?: MacSystemIntegrityProtectionSettingStatus;
  BaseSystem?: MacSystemIntegrityProtectionSettingStatus;
  DebuggingRestrictions?: MacSystemIntegrityProtectionSettingStatus;
  DTraceRestrictions?: MacSystemIntegrityProtectionSettingStatus;
  FilesystemProtections?: MacSystemIntegrityProtectionSettingStatus;
  KextSigning?: MacSystemIntegrityProtectionSettingStatus;
  NvramProtections?: MacSystemIntegrityProtectionSettingStatus;
  Status?: MacSystemIntegrityProtectionSettingStatus;
}
export interface MacSystemIntegrityProtectionConfigurationRequest {
  AppleInternal?: MacSystemIntegrityProtectionSettingStatus;
  BaseSystem?: MacSystemIntegrityProtectionSettingStatus;
  DebuggingRestrictions?: MacSystemIntegrityProtectionSettingStatus;
  DTraceRestrictions?: MacSystemIntegrityProtectionSettingStatus;
  FilesystemProtections?: MacSystemIntegrityProtectionSettingStatus;
  KextSigning?: MacSystemIntegrityProtectionSettingStatus;
  NvramProtections?: MacSystemIntegrityProtectionSettingStatus;
}
export type MacSystemIntegrityProtectionSettingStatus = "enabled" | "disabled";
export interface MaintenanceDetails {
  PendingMaintenance?: string;
  MaintenanceAutoAppliedAfter?: Date | string;
  LastMaintenanceApplied?: Date | string;
}
export type ManagedBy = "account" | "declarative_policy";
export interface ManagedPrefixList {
  PrefixListId?: string;
  AddressFamily?: string;
  State?: PrefixListState;
  StateMessage?: string;
  PrefixListArn?: string;
  PrefixListName?: string;
  MaxEntries?: number;
  Version?: number;
  Tags?: Array<Tag>;
  OwnerId?: string;
}
export type ManagedPrefixListSet = Array<ManagedPrefixList>;
export type MarketType = "spot" | "capacity_block";
export type MaximumBandwidthInMbps = number;

export type MaximumEfaInterfaces = number;

export type MaximumEnaQueueCount = number;

export type MaximumEnaQueueCountPerInterface = number;

export type MaximumIops = number;

export type MaximumNetworkCards = number;

export type MaximumThroughputInMBps = number;

export type MaxIpv4AddrPerInterface = number;

export type MaxIpv6AddrPerInterface = number;

export type MaxNetworkInterfaces = number;

export type MaxResults = number;

export type MaxResults2 = number;

export type MaxResultsParam = number;

export interface MediaAcceleratorInfo {
  Accelerators?: Array<MediaDeviceInfo>;
  TotalMediaMemoryInMiB?: number;
}
export type MediaDeviceCount = number;

export interface MediaDeviceInfo {
  Count?: number;
  Name?: string;
  Manufacturer?: string;
  MemoryInfo?: MediaDeviceMemoryInfo;
}
export type MediaDeviceInfoList = Array<MediaDeviceInfo>;
export type MediaDeviceManufacturerName = string;

export interface MediaDeviceMemoryInfo {
  SizeInMiB?: number;
}
export type MediaDeviceMemorySize = number;

export type MediaDeviceName = string;

export type MembershipType = "static" | "igmp";
export interface MemoryGiBPerVCpu {
  Min?: number;
  Max?: number;
}
export interface MemoryGiBPerVCpuRequest {
  Min?: number;
  Max?: number;
}
export interface MemoryInfo {
  SizeInMiB?: number;
}
export interface MemoryMiB {
  Min?: number;
  Max?: number;
}
export interface MemoryMiBRequest {
  Min: number;
  Max?: number;
}
export type MemorySize = number;

export type MetadataDefaultHttpTokensState = "optional" | "required" | "no_preference";
export interface MetricPoint {
  StartDate?: Date | string;
  EndDate?: Date | string;
  Value?: number;
  Status?: string;
}
export type MetricPoints = Array<MetricPoint>;
export type MetricType = "aggregate_latency";
export type MillisecondDateTime = Date | string;

export interface ModifyAddressAttributeRequest {
  AllocationId: string;
  DomainName?: string;
  DryRun?: boolean;
}
export interface ModifyAddressAttributeResult {
  Address?: AddressAttribute;
}
export interface ModifyAvailabilityZoneGroupRequest {
  GroupName: string;
  OptInStatus: ModifyAvailabilityZoneOptInStatus;
  DryRun?: boolean;
}
export interface ModifyAvailabilityZoneGroupResult {
  Return?: boolean;
}
export type ModifyAvailabilityZoneOptInStatus = "opted_in" | "not_opted_in";
export interface ModifyCapacityReservationFleetRequest {
  CapacityReservationFleetId: string;
  TotalTargetCapacity?: number;
  EndDate?: Date | string;
  DryRun?: boolean;
  RemoveEndDate?: boolean;
}
export interface ModifyCapacityReservationFleetResult {
  Return?: boolean;
}
export interface ModifyCapacityReservationRequest {
  CapacityReservationId: string;
  InstanceCount?: number;
  EndDate?: Date | string;
  EndDateType?: EndDateType;
  Accept?: boolean;
  DryRun?: boolean;
  AdditionalInfo?: string;
  InstanceMatchCriteria?: InstanceMatchCriteria;
}
export interface ModifyCapacityReservationResult {
  Return?: boolean;
}
export interface ModifyClientVpnEndpointRequest {
  ClientVpnEndpointId: string;
  ServerCertificateArn?: string;
  ConnectionLogOptions?: ConnectionLogOptions;
  DnsServers?: DnsServersOptionsModifyStructure;
  VpnPort?: number;
  Description?: string;
  SplitTunnel?: boolean;
  DryRun?: boolean;
  SecurityGroupIds?: Array<string>;
  VpcId?: string;
  SelfServicePortal?: SelfServicePortal;
  ClientConnectOptions?: ClientConnectOptions;
  SessionTimeoutHours?: number;
  ClientLoginBannerOptions?: ClientLoginBannerOptions;
  ClientRouteEnforcementOptions?: ClientRouteEnforcementOptions;
  DisconnectOnSessionTimeout?: boolean;
}
export interface ModifyClientVpnEndpointResult {
  Return?: boolean;
}
export interface ModifyDefaultCreditSpecificationRequest {
  DryRun?: boolean;
  InstanceFamily: UnlimitedSupportedInstanceFamily;
  CpuCredits: string;
}
export interface ModifyDefaultCreditSpecificationResult {
  InstanceFamilyCreditSpecification?: InstanceFamilyCreditSpecification;
}
export interface ModifyEbsDefaultKmsKeyIdRequest {
  KmsKeyId: string;
  DryRun?: boolean;
}
export interface ModifyEbsDefaultKmsKeyIdResult {
  KmsKeyId?: string;
}
export interface ModifyFleetRequest {
  DryRun?: boolean;
  ExcessCapacityTerminationPolicy?: FleetExcessCapacityTerminationPolicy;
  LaunchTemplateConfigs?: Array<FleetLaunchTemplateConfigRequest>;
  FleetId: string;
  TargetCapacitySpecification?: TargetCapacitySpecificationRequest;
  Context?: string;
}
export interface ModifyFleetResult {
  Return?: boolean;
}
export interface ModifyFpgaImageAttributeRequest {
  DryRun?: boolean;
  FpgaImageId: string;
  Attribute?: FpgaImageAttributeName;
  OperationType?: OperationType;
  UserIds?: Array<string>;
  UserGroups?: Array<string>;
  ProductCodes?: Array<string>;
  LoadPermission?: LoadPermissionModifications;
  Description?: string;
  Name?: string;
}
export interface ModifyFpgaImageAttributeResult {
  FpgaImageAttribute?: FpgaImageAttribute;
}
export interface ModifyHostsRequest {
  HostRecovery?: HostRecovery;
  InstanceType?: string;
  InstanceFamily?: string;
  HostMaintenance?: HostMaintenance;
  HostIds: Array<string>;
  AutoPlacement?: AutoPlacement;
}
export interface ModifyHostsResult {
  Successful?: Array<string>;
  Unsuccessful?: Array<UnsuccessfulItem>;
}
export interface ModifyIdentityIdFormatRequest {
  Resource: string;
  UseLongIds: boolean;
  PrincipalArn: string;
}
export interface ModifyIdFormatRequest {
  Resource: string;
  UseLongIds: boolean;
}
export interface ModifyImageAttributeRequest {
  Attribute?: string;
  Description?: AttributeValue;
  ImageId: string;
  LaunchPermission?: LaunchPermissionModifications;
  OperationType?: OperationType;
  ProductCodes?: Array<string>;
  UserGroups?: Array<string>;
  UserIds?: Array<string>;
  Value?: string;
  OrganizationArns?: Array<string>;
  OrganizationalUnitArns?: Array<string>;
  ImdsSupport?: AttributeValue;
  DryRun?: boolean;
}
export interface ModifyInstanceAttributeRequest {
  SourceDestCheck?: AttributeBooleanValue;
  DisableApiStop?: AttributeBooleanValue;
  DryRun?: boolean;
  InstanceId: string;
  Attribute?: InstanceAttributeName;
  Value?: string;
  BlockDeviceMappings?: Array<InstanceBlockDeviceMappingSpecification>;
  DisableApiTermination?: AttributeBooleanValue;
  InstanceType?: AttributeValue;
  Kernel?: AttributeValue;
  Ramdisk?: AttributeValue;
  UserData?: BlobAttributeValue;
  InstanceInitiatedShutdownBehavior?: AttributeValue;
  Groups?: Array<string>;
  EbsOptimized?: AttributeBooleanValue;
  SriovNetSupport?: AttributeValue;
  EnaSupport?: AttributeBooleanValue;
}
export interface ModifyInstanceCapacityReservationAttributesRequest {
  InstanceId: string;
  CapacityReservationSpecification: CapacityReservationSpecification;
  DryRun?: boolean;
}
export interface ModifyInstanceCapacityReservationAttributesResult {
  Return?: boolean;
}
export interface ModifyInstanceCpuOptionsRequest {
  InstanceId: string;
  CoreCount: number;
  ThreadsPerCore: number;
  DryRun?: boolean;
}
export interface ModifyInstanceCpuOptionsResult {
  InstanceId?: string;
  CoreCount?: number;
  ThreadsPerCore?: number;
}
export interface ModifyInstanceCreditSpecificationRequest {
  DryRun?: boolean;
  ClientToken?: string;
  InstanceCreditSpecifications: Array<InstanceCreditSpecificationRequest>;
}
export interface ModifyInstanceCreditSpecificationResult {
  SuccessfulInstanceCreditSpecifications?: Array<SuccessfulInstanceCreditSpecificationItem>;
  UnsuccessfulInstanceCreditSpecifications?: Array<UnsuccessfulInstanceCreditSpecificationItem>;
}
export interface ModifyInstanceEventStartTimeRequest {
  DryRun?: boolean;
  InstanceId: string;
  InstanceEventId: string;
  NotBefore: Date | string;
}
export interface ModifyInstanceEventStartTimeResult {
  Event?: InstanceStatusEvent;
}
export interface ModifyInstanceEventWindowRequest {
  DryRun?: boolean;
  Name?: string;
  InstanceEventWindowId: string;
  TimeRanges?: Array<InstanceEventWindowTimeRangeRequest>;
  CronExpression?: string;
}
export interface ModifyInstanceEventWindowResult {
  InstanceEventWindow?: InstanceEventWindow;
}
export interface ModifyInstanceMaintenanceOptionsRequest {
  InstanceId: string;
  AutoRecovery?: InstanceAutoRecoveryState;
  RebootMigration?: InstanceRebootMigrationState;
  DryRun?: boolean;
}
export interface ModifyInstanceMaintenanceOptionsResult {
  InstanceId?: string;
  AutoRecovery?: InstanceAutoRecoveryState;
  RebootMigration?: InstanceRebootMigrationState;
}
export interface ModifyInstanceMetadataDefaultsRequest {
  HttpTokens?: MetadataDefaultHttpTokensState;
  HttpPutResponseHopLimit?: number;
  HttpEndpoint?: DefaultInstanceMetadataEndpointState;
  InstanceMetadataTags?: DefaultInstanceMetadataTagsState;
  DryRun?: boolean;
}
export interface ModifyInstanceMetadataDefaultsResult {
  Return?: boolean;
}
export interface ModifyInstanceMetadataOptionsRequest {
  InstanceId: string;
  HttpTokens?: HttpTokensState;
  HttpPutResponseHopLimit?: number;
  HttpEndpoint?: InstanceMetadataEndpointState;
  DryRun?: boolean;
  HttpProtocolIpv6?: InstanceMetadataProtocolState;
  InstanceMetadataTags?: InstanceMetadataTagsState;
}
export interface ModifyInstanceMetadataOptionsResult {
  InstanceId?: string;
  InstanceMetadataOptions?: InstanceMetadataOptionsResponse;
}
export interface ModifyInstanceNetworkPerformanceRequest {
  InstanceId: string;
  BandwidthWeighting: InstanceBandwidthWeighting;
  DryRun?: boolean;
}
export interface ModifyInstanceNetworkPerformanceResult {
  InstanceId?: string;
  BandwidthWeighting?: InstanceBandwidthWeighting;
}
export interface ModifyInstancePlacementRequest {
  GroupName?: string;
  PartitionNumber?: number;
  HostResourceGroupArn?: string;
  GroupId?: string;
  InstanceId: string;
  Tenancy?: HostTenancy;
  Affinity?: Affinity;
  HostId?: string;
}
export interface ModifyInstancePlacementResult {
  Return?: boolean;
}
export interface ModifyIpamPoolRequest {
  DryRun?: boolean;
  IpamPoolId: string;
  Description?: string;
  AutoImport?: boolean;
  AllocationMinNetmaskLength?: number;
  AllocationMaxNetmaskLength?: number;
  AllocationDefaultNetmaskLength?: number;
  ClearAllocationDefaultNetmaskLength?: boolean;
  AddAllocationResourceTags?: Array<RequestIpamResourceTag>;
  RemoveAllocationResourceTags?: Array<RequestIpamResourceTag>;
}
export interface ModifyIpamPoolResult {
  IpamPool?: IpamPool;
}
export interface ModifyIpamRequest {
  DryRun?: boolean;
  IpamId: string;
  Description?: string;
  AddOperatingRegions?: Array<AddIpamOperatingRegion>;
  RemoveOperatingRegions?: Array<RemoveIpamOperatingRegion>;
  Tier?: IpamTier;
  EnablePrivateGua?: boolean;
  MeteredAccount?: IpamMeteredAccount;
}
export interface ModifyIpamResourceCidrRequest {
  DryRun?: boolean;
  ResourceId: string;
  ResourceCidr: string;
  ResourceRegion: string;
  CurrentIpamScopeId: string;
  DestinationIpamScopeId?: string;
  Monitored: boolean;
}
export interface ModifyIpamResourceCidrResult {
  IpamResourceCidr?: IpamResourceCidr;
}
export interface ModifyIpamResourceDiscoveryRequest {
  DryRun?: boolean;
  IpamResourceDiscoveryId: string;
  Description?: string;
  AddOperatingRegions?: Array<AddIpamOperatingRegion>;
  RemoveOperatingRegions?: Array<RemoveIpamOperatingRegion>;
  AddOrganizationalUnitExclusions?: Array<AddIpamOrganizationalUnitExclusion>;
  RemoveOrganizationalUnitExclusions?: Array<RemoveIpamOrganizationalUnitExclusion>;
}
export interface ModifyIpamResourceDiscoveryResult {
  IpamResourceDiscovery?: IpamResourceDiscovery;
}
export interface ModifyIpamResult {
  Ipam?: Ipam;
}
export interface ModifyIpamScopeRequest {
  DryRun?: boolean;
  IpamScopeId: string;
  Description?: string;
}
export interface ModifyIpamScopeResult {
  IpamScope?: IpamScope;
}
export interface ModifyLaunchTemplateRequest {
  DryRun?: boolean;
  ClientToken?: string;
  LaunchTemplateId?: string;
  LaunchTemplateName?: string;
  DefaultVersion?: string;
}
export interface ModifyLaunchTemplateResult {
  LaunchTemplate?: LaunchTemplate;
}
export interface ModifyLocalGatewayRouteRequest {
  DestinationCidrBlock?: string;
  LocalGatewayRouteTableId: string;
  LocalGatewayVirtualInterfaceGroupId?: string;
  NetworkInterfaceId?: string;
  DryRun?: boolean;
  DestinationPrefixListId?: string;
}
export interface ModifyLocalGatewayRouteResult {
  Route?: LocalGatewayRoute;
}
export interface ModifyManagedPrefixListRequest {
  DryRun?: boolean;
  PrefixListId: string;
  CurrentVersion?: number;
  PrefixListName?: string;
  AddEntries?: Array<AddPrefixListEntry>;
  RemoveEntries?: Array<RemovePrefixListEntry>;
  MaxEntries?: number;
}
export interface ModifyManagedPrefixListResult {
  PrefixList?: ManagedPrefixList;
}
export interface ModifyNetworkInterfaceAttributeRequest {
  EnaSrdSpecification?: EnaSrdSpecification;
  EnablePrimaryIpv6?: boolean;
  ConnectionTrackingSpecification?: ConnectionTrackingSpecificationRequest;
  AssociatePublicIpAddress?: boolean;
  AssociatedSubnetIds?: Array<string>;
  DryRun?: boolean;
  NetworkInterfaceId: string;
  Description?: AttributeValue;
  SourceDestCheck?: AttributeBooleanValue;
  Groups?: Array<string>;
  Attachment?: NetworkInterfaceAttachmentChanges;
}
export interface ModifyPrivateDnsNameOptionsRequest {
  DryRun?: boolean;
  InstanceId: string;
  PrivateDnsHostnameType?: HostnameType;
  EnableResourceNameDnsARecord?: boolean;
  EnableResourceNameDnsAAAARecord?: boolean;
}
export interface ModifyPrivateDnsNameOptionsResult {
  Return?: boolean;
}
export interface ModifyPublicIpDnsNameOptionsRequest {
  NetworkInterfaceId: string;
  HostnameType: PublicIpDnsOption;
  DryRun?: boolean;
}
export interface ModifyPublicIpDnsNameOptionsResult {
  Successful?: boolean;
}
export interface ModifyReservedInstancesRequest {
  ReservedInstancesIds: Array<string>;
  ClientToken?: string;
  TargetConfigurations: Array<ReservedInstancesConfiguration>;
}
export interface ModifyReservedInstancesResult {
  ReservedInstancesModificationId?: string;
}
export interface ModifyRouteServerRequest {
  RouteServerId: string;
  PersistRoutes?: RouteServerPersistRoutesAction;
  PersistRoutesDuration?: number;
  SnsNotificationsEnabled?: boolean;
  DryRun?: boolean;
}
export interface ModifyRouteServerResult {
  RouteServer?: RouteServer;
}
export interface ModifySecurityGroupRulesRequest {
  GroupId: string;
  SecurityGroupRules: Array<SecurityGroupRuleUpdate>;
  DryRun?: boolean;
}
export interface ModifySecurityGroupRulesResult {
  Return?: boolean;
}
export interface ModifySnapshotAttributeRequest {
  Attribute?: SnapshotAttributeName;
  CreateVolumePermission?: CreateVolumePermissionModifications;
  GroupNames?: Array<string>;
  OperationType?: OperationType;
  SnapshotId: string;
  UserIds?: Array<string>;
  DryRun?: boolean;
}
export interface ModifySnapshotTierRequest {
  SnapshotId: string;
  StorageTier?: TargetStorageTier;
  DryRun?: boolean;
}
export interface ModifySnapshotTierResult {
  SnapshotId?: string;
  TieringStartTime?: Date | string;
}
export interface ModifySpotFleetRequestRequest {
  LaunchTemplateConfigs?: Array<LaunchTemplateConfig>;
  OnDemandTargetCapacity?: number;
  Context?: string;
  SpotFleetRequestId: string;
  TargetCapacity?: number;
  ExcessCapacityTerminationPolicy?: ExcessCapacityTerminationPolicy;
}
export interface ModifySpotFleetRequestResponse {
  Return?: boolean;
}
export interface ModifySubnetAttributeRequest {
  AssignIpv6AddressOnCreation?: AttributeBooleanValue;
  MapPublicIpOnLaunch?: AttributeBooleanValue;
  SubnetId: string;
  MapCustomerOwnedIpOnLaunch?: AttributeBooleanValue;
  CustomerOwnedIpv4Pool?: string;
  EnableDns64?: AttributeBooleanValue;
  PrivateDnsHostnameTypeOnLaunch?: HostnameType;
  EnableResourceNameDnsARecordOnLaunch?: AttributeBooleanValue;
  EnableResourceNameDnsAAAARecordOnLaunch?: AttributeBooleanValue;
  EnableLniAtDeviceIndex?: number;
  DisableLniAtDeviceIndex?: AttributeBooleanValue;
}
export interface ModifyTrafficMirrorFilterNetworkServicesRequest {
  TrafficMirrorFilterId: string;
  AddNetworkServices?: Array<TrafficMirrorNetworkService>;
  RemoveNetworkServices?: Array<TrafficMirrorNetworkService>;
  DryRun?: boolean;
}
export interface ModifyTrafficMirrorFilterNetworkServicesResult {
  TrafficMirrorFilter?: TrafficMirrorFilter;
}
export interface ModifyTrafficMirrorFilterRuleRequest {
  TrafficMirrorFilterRuleId: string;
  TrafficDirection?: TrafficDirection;
  RuleNumber?: number;
  RuleAction?: TrafficMirrorRuleAction;
  DestinationPortRange?: TrafficMirrorPortRangeRequest;
  SourcePortRange?: TrafficMirrorPortRangeRequest;
  Protocol?: number;
  DestinationCidrBlock?: string;
  SourceCidrBlock?: string;
  Description?: string;
  RemoveFields?: Array<TrafficMirrorFilterRuleField>;
  DryRun?: boolean;
}
export interface ModifyTrafficMirrorFilterRuleResult {
  TrafficMirrorFilterRule?: TrafficMirrorFilterRule;
}
export interface ModifyTrafficMirrorSessionRequest {
  TrafficMirrorSessionId: string;
  TrafficMirrorTargetId?: string;
  TrafficMirrorFilterId?: string;
  PacketLength?: number;
  SessionNumber?: number;
  VirtualNetworkId?: number;
  Description?: string;
  RemoveFields?: Array<TrafficMirrorSessionField>;
  DryRun?: boolean;
}
export interface ModifyTrafficMirrorSessionResult {
  TrafficMirrorSession?: TrafficMirrorSession;
}
export interface ModifyTransitGatewayOptions {
  AddTransitGatewayCidrBlocks?: Array<string>;
  RemoveTransitGatewayCidrBlocks?: Array<string>;
  VpnEcmpSupport?: VpnEcmpSupportValue;
  DnsSupport?: DnsSupportValue;
  SecurityGroupReferencingSupport?: SecurityGroupReferencingSupportValue;
  AutoAcceptSharedAttachments?: AutoAcceptSharedAttachmentsValue;
  DefaultRouteTableAssociation?: DefaultRouteTableAssociationValue;
  AssociationDefaultRouteTableId?: string;
  DefaultRouteTablePropagation?: DefaultRouteTablePropagationValue;
  PropagationDefaultRouteTableId?: string;
  AmazonSideAsn?: number;
}
export interface ModifyTransitGatewayPrefixListReferenceRequest {
  TransitGatewayRouteTableId: string;
  PrefixListId: string;
  TransitGatewayAttachmentId?: string;
  Blackhole?: boolean;
  DryRun?: boolean;
}
export interface ModifyTransitGatewayPrefixListReferenceResult {
  TransitGatewayPrefixListReference?: TransitGatewayPrefixListReference;
}
export interface ModifyTransitGatewayRequest {
  TransitGatewayId: string;
  Description?: string;
  Options?: ModifyTransitGatewayOptions;
  DryRun?: boolean;
}
export interface ModifyTransitGatewayResult {
  TransitGateway?: TransitGateway;
}
export interface ModifyTransitGatewayVpcAttachmentRequest {
  TransitGatewayAttachmentId: string;
  AddSubnetIds?: Array<string>;
  RemoveSubnetIds?: Array<string>;
  Options?: ModifyTransitGatewayVpcAttachmentRequestOptions;
  DryRun?: boolean;
}
export interface ModifyTransitGatewayVpcAttachmentRequestOptions {
  DnsSupport?: DnsSupportValue;
  SecurityGroupReferencingSupport?: SecurityGroupReferencingSupportValue;
  Ipv6Support?: Ipv6SupportValue;
  ApplianceModeSupport?: ApplianceModeSupportValue;
}
export interface ModifyTransitGatewayVpcAttachmentResult {
  TransitGatewayVpcAttachment?: TransitGatewayVpcAttachment;
}
export interface ModifyVerifiedAccessEndpointCidrOptions {
  PortRanges?: Array<ModifyVerifiedAccessEndpointPortRange>;
}
export interface ModifyVerifiedAccessEndpointEniOptions {
  Protocol?: VerifiedAccessEndpointProtocol;
  Port?: number;
  PortRanges?: Array<ModifyVerifiedAccessEndpointPortRange>;
}
export interface ModifyVerifiedAccessEndpointLoadBalancerOptions {
  SubnetIds?: Array<string>;
  Protocol?: VerifiedAccessEndpointProtocol;
  Port?: number;
  PortRanges?: Array<ModifyVerifiedAccessEndpointPortRange>;
}
export interface ModifyVerifiedAccessEndpointPolicyRequest {
  VerifiedAccessEndpointId: string;
  PolicyEnabled?: boolean;
  PolicyDocument?: string;
  ClientToken?: string;
  DryRun?: boolean;
  SseSpecification?: VerifiedAccessSseSpecificationRequest;
}
export interface ModifyVerifiedAccessEndpointPolicyResult {
  PolicyEnabled?: boolean;
  PolicyDocument?: string;
  SseSpecification?: VerifiedAccessSseSpecificationResponse;
}
export interface ModifyVerifiedAccessEndpointPortRange {
  FromPort?: number;
  ToPort?: number;
}
export type ModifyVerifiedAccessEndpointPortRangeList = Array<ModifyVerifiedAccessEndpointPortRange>;
export interface ModifyVerifiedAccessEndpointRdsOptions {
  SubnetIds?: Array<string>;
  Port?: number;
  RdsEndpoint?: string;
}
export interface ModifyVerifiedAccessEndpointRequest {
  VerifiedAccessEndpointId: string;
  VerifiedAccessGroupId?: string;
  LoadBalancerOptions?: ModifyVerifiedAccessEndpointLoadBalancerOptions;
  NetworkInterfaceOptions?: ModifyVerifiedAccessEndpointEniOptions;
  Description?: string;
  ClientToken?: string;
  DryRun?: boolean;
  RdsOptions?: ModifyVerifiedAccessEndpointRdsOptions;
  CidrOptions?: ModifyVerifiedAccessEndpointCidrOptions;
}
export interface ModifyVerifiedAccessEndpointResult {
  VerifiedAccessEndpoint?: VerifiedAccessEndpoint;
}
export type ModifyVerifiedAccessEndpointSubnetIdList = Array<string>;
export interface ModifyVerifiedAccessGroupPolicyRequest {
  VerifiedAccessGroupId: string;
  PolicyEnabled?: boolean;
  PolicyDocument?: string;
  ClientToken?: string;
  DryRun?: boolean;
  SseSpecification?: VerifiedAccessSseSpecificationRequest;
}
export interface ModifyVerifiedAccessGroupPolicyResult {
  PolicyEnabled?: boolean;
  PolicyDocument?: string;
  SseSpecification?: VerifiedAccessSseSpecificationResponse;
}
export interface ModifyVerifiedAccessGroupRequest {
  VerifiedAccessGroupId: string;
  VerifiedAccessInstanceId?: string;
  Description?: string;
  ClientToken?: string;
  DryRun?: boolean;
}
export interface ModifyVerifiedAccessGroupResult {
  VerifiedAccessGroup?: VerifiedAccessGroup;
}
export interface ModifyVerifiedAccessInstanceLoggingConfigurationRequest {
  VerifiedAccessInstanceId: string;
  AccessLogs: VerifiedAccessLogOptions;
  DryRun?: boolean;
  ClientToken?: string;
}
export interface ModifyVerifiedAccessInstanceLoggingConfigurationResult {
  LoggingConfiguration?: VerifiedAccessInstanceLoggingConfiguration;
}
export interface ModifyVerifiedAccessInstanceRequest {
  VerifiedAccessInstanceId: string;
  Description?: string;
  DryRun?: boolean;
  ClientToken?: string;
  CidrEndpointsCustomSubDomain?: string;
}
export interface ModifyVerifiedAccessInstanceResult {
  VerifiedAccessInstance?: VerifiedAccessInstance;
}
export interface ModifyVerifiedAccessNativeApplicationOidcOptions {
  PublicSigningKeyEndpoint?: string;
  Issuer?: string;
  AuthorizationEndpoint?: string;
  TokenEndpoint?: string;
  UserInfoEndpoint?: string;
  ClientId?: string;
  ClientSecret?: string;
  Scope?: string;
}
export interface ModifyVerifiedAccessTrustProviderDeviceOptions {
  PublicSigningKeyUrl?: string;
}
export interface ModifyVerifiedAccessTrustProviderOidcOptions {
  Issuer?: string;
  AuthorizationEndpoint?: string;
  TokenEndpoint?: string;
  UserInfoEndpoint?: string;
  ClientId?: string;
  ClientSecret?: string;
  Scope?: string;
}
export interface ModifyVerifiedAccessTrustProviderRequest {
  VerifiedAccessTrustProviderId: string;
  OidcOptions?: ModifyVerifiedAccessTrustProviderOidcOptions;
  DeviceOptions?: ModifyVerifiedAccessTrustProviderDeviceOptions;
  Description?: string;
  DryRun?: boolean;
  ClientToken?: string;
  SseSpecification?: VerifiedAccessSseSpecificationRequest;
  NativeApplicationOidcOptions?: ModifyVerifiedAccessNativeApplicationOidcOptions;
}
export interface ModifyVerifiedAccessTrustProviderResult {
  VerifiedAccessTrustProvider?: VerifiedAccessTrustProvider;
}
export interface ModifyVolumeAttributeRequest {
  AutoEnableIO?: AttributeBooleanValue;
  VolumeId: string;
  DryRun?: boolean;
}
export interface ModifyVolumeRequest {
  DryRun?: boolean;
  VolumeId: string;
  Size?: number;
  VolumeType?: VolumeType;
  Iops?: number;
  Throughput?: number;
  MultiAttachEnabled?: boolean;
}
export interface ModifyVolumeResult {
  VolumeModification?: VolumeModification;
}
export interface ModifyVpcAttributeRequest {
  EnableDnsHostnames?: AttributeBooleanValue;
  EnableDnsSupport?: AttributeBooleanValue;
  VpcId: string;
  EnableNetworkAddressUsageMetrics?: AttributeBooleanValue;
}
export interface ModifyVpcBlockPublicAccessExclusionRequest {
  DryRun?: boolean;
  ExclusionId: string;
  InternetGatewayExclusionMode: InternetGatewayExclusionMode;
}
export interface ModifyVpcBlockPublicAccessExclusionResult {
  VpcBlockPublicAccessExclusion?: VpcBlockPublicAccessExclusion;
}
export interface ModifyVpcBlockPublicAccessOptionsRequest {
  DryRun?: boolean;
  InternetGatewayBlockMode: InternetGatewayBlockMode;
}
export interface ModifyVpcBlockPublicAccessOptionsResult {
  VpcBlockPublicAccessOptions?: VpcBlockPublicAccessOptions;
}
export interface ModifyVpcEndpointConnectionNotificationRequest {
  DryRun?: boolean;
  ConnectionNotificationId: string;
  ConnectionNotificationArn?: string;
  ConnectionEvents?: Array<string>;
}
export interface ModifyVpcEndpointConnectionNotificationResult {
  ReturnValue?: boolean;
}
export interface ModifyVpcEndpointRequest {
  DryRun?: boolean;
  VpcEndpointId: string;
  ResetPolicy?: boolean;
  PolicyDocument?: string;
  AddRouteTableIds?: Array<string>;
  RemoveRouteTableIds?: Array<string>;
  AddSubnetIds?: Array<string>;
  RemoveSubnetIds?: Array<string>;
  AddSecurityGroupIds?: Array<string>;
  RemoveSecurityGroupIds?: Array<string>;
  IpAddressType?: IpAddressType;
  DnsOptions?: DnsOptionsSpecification;
  PrivateDnsEnabled?: boolean;
  SubnetConfigurations?: Array<SubnetConfiguration>;
}
export interface ModifyVpcEndpointResult {
  Return?: boolean;
}
export interface ModifyVpcEndpointServiceConfigurationRequest {
  DryRun?: boolean;
  ServiceId: string;
  PrivateDnsName?: string;
  RemovePrivateDnsName?: boolean;
  AcceptanceRequired?: boolean;
  AddNetworkLoadBalancerArns?: Array<string>;
  RemoveNetworkLoadBalancerArns?: Array<string>;
  AddGatewayLoadBalancerArns?: Array<string>;
  RemoveGatewayLoadBalancerArns?: Array<string>;
  AddSupportedIpAddressTypes?: Array<string>;
  RemoveSupportedIpAddressTypes?: Array<string>;
  AddSupportedRegions?: Array<string>;
  RemoveSupportedRegions?: Array<string>;
}
export interface ModifyVpcEndpointServiceConfigurationResult {
  Return?: boolean;
}
export interface ModifyVpcEndpointServicePayerResponsibilityRequest {
  DryRun?: boolean;
  ServiceId: string;
  PayerResponsibility: PayerResponsibility;
}
export interface ModifyVpcEndpointServicePayerResponsibilityResult {
  ReturnValue?: boolean;
}
export interface ModifyVpcEndpointServicePermissionsRequest {
  DryRun?: boolean;
  ServiceId: string;
  AddAllowedPrincipals?: Array<string>;
  RemoveAllowedPrincipals?: Array<string>;
}
export interface ModifyVpcEndpointServicePermissionsResult {
  AddedPrincipals?: Array<AddedPrincipal>;
  ReturnValue?: boolean;
}
export interface ModifyVpcPeeringConnectionOptionsRequest {
  AccepterPeeringConnectionOptions?: PeeringConnectionOptionsRequest;
  DryRun?: boolean;
  RequesterPeeringConnectionOptions?: PeeringConnectionOptionsRequest;
  VpcPeeringConnectionId: string;
}
export interface ModifyVpcPeeringConnectionOptionsResult {
  AccepterPeeringConnectionOptions?: PeeringConnectionOptions;
  RequesterPeeringConnectionOptions?: PeeringConnectionOptions;
}
export interface ModifyVpcTenancyRequest {
  VpcId: string;
  InstanceTenancy: VpcTenancy;
  DryRun?: boolean;
}
export interface ModifyVpcTenancyResult {
  ReturnValue?: boolean;
}
export interface ModifyVpnConnectionOptionsRequest {
  VpnConnectionId: string;
  LocalIpv4NetworkCidr?: string;
  RemoteIpv4NetworkCidr?: string;
  LocalIpv6NetworkCidr?: string;
  RemoteIpv6NetworkCidr?: string;
  DryRun?: boolean;
}
export interface ModifyVpnConnectionOptionsResult {
  VpnConnection?: VpnConnection;
}
export interface ModifyVpnConnectionRequest {
  VpnConnectionId: string;
  TransitGatewayId?: string;
  CustomerGatewayId?: string;
  VpnGatewayId?: string;
  DryRun?: boolean;
}
export interface ModifyVpnConnectionResult {
  VpnConnection?: VpnConnection;
}
export interface ModifyVpnTunnelCertificateRequest {
  VpnConnectionId: string;
  VpnTunnelOutsideIpAddress: string;
  DryRun?: boolean;
}
export interface ModifyVpnTunnelCertificateResult {
  VpnConnection?: VpnConnection;
}
export interface ModifyVpnTunnelOptionsRequest {
  VpnConnectionId: string;
  VpnTunnelOutsideIpAddress: string;
  TunnelOptions: ModifyVpnTunnelOptionsSpecification;
  DryRun?: boolean;
  SkipTunnelReplacement?: boolean;
  PreSharedKeyStorage?: string;
}
export interface ModifyVpnTunnelOptionsResult {
  VpnConnection?: VpnConnection;
}
export interface ModifyVpnTunnelOptionsSpecification {
  TunnelInsideCidr?: string;
  TunnelInsideIpv6Cidr?: string;
  PreSharedKey?: string;
  Phase1LifetimeSeconds?: number;
  Phase2LifetimeSeconds?: number;
  RekeyMarginTimeSeconds?: number;
  RekeyFuzzPercentage?: number;
  ReplayWindowSize?: number;
  DPDTimeoutSeconds?: number;
  DPDTimeoutAction?: string;
  Phase1EncryptionAlgorithms?: Array<Phase1EncryptionAlgorithmsRequestListValue>;
  Phase2EncryptionAlgorithms?: Array<Phase2EncryptionAlgorithmsRequestListValue>;
  Phase1IntegrityAlgorithms?: Array<Phase1IntegrityAlgorithmsRequestListValue>;
  Phase2IntegrityAlgorithms?: Array<Phase2IntegrityAlgorithmsRequestListValue>;
  Phase1DHGroupNumbers?: Array<Phase1DHGroupNumbersRequestListValue>;
  Phase2DHGroupNumbers?: Array<Phase2DHGroupNumbersRequestListValue>;
  IKEVersions?: Array<IKEVersionsRequestListValue>;
  StartupAction?: string;
  LogOptions?: VpnTunnelLogOptionsSpecification;
  EnableTunnelLifecycleControl?: boolean;
}
export interface Monitoring {
  State?: MonitoringState;
}
export type MonitoringState = "disabled" | "disabling" | "enabled" | "pending";
export interface MonitorInstancesRequest {
  InstanceIds: Array<string>;
  DryRun?: boolean;
}
export interface MonitorInstancesResult {
  InstanceMonitorings?: Array<InstanceMonitoring>;
}
export interface MoveAddressToVpcRequest {
  DryRun?: boolean;
  PublicIp: string;
}
export interface MoveAddressToVpcResult {
  AllocationId?: string;
  Status?: Status;
}
export interface MoveByoipCidrToIpamRequest {
  DryRun?: boolean;
  Cidr: string;
  IpamPoolId: string;
  IpamPoolOwner: string;
}
export interface MoveByoipCidrToIpamResult {
  ByoipCidr?: ByoipCidr;
}
export interface MoveCapacityReservationInstancesRequest {
  DryRun?: boolean;
  ClientToken?: string;
  SourceCapacityReservationId: string;
  DestinationCapacityReservationId: string;
  InstanceCount: number;
}
export interface MoveCapacityReservationInstancesResult {
  SourceCapacityReservation?: CapacityReservation;
  DestinationCapacityReservation?: CapacityReservation;
  InstanceCount?: number;
}
export type MoveStatus = "movingToVpc" | "restoringToClassic";
export interface MovingAddressStatus {
  MoveStatus?: MoveStatus;
  PublicIp?: string;
}
export type MovingAddressStatusSet = Array<MovingAddressStatus>;
export type MulticastSupportValue = "enable" | "disable";
export interface NatGateway {
  CreateTime?: Date | string;
  DeleteTime?: Date | string;
  FailureCode?: string;
  FailureMessage?: string;
  NatGatewayAddresses?: Array<NatGatewayAddress>;
  NatGatewayId?: string;
  ProvisionedBandwidth?: ProvisionedBandwidth;
  State?: NatGatewayState;
  SubnetId?: string;
  VpcId?: string;
  Tags?: Array<Tag>;
  ConnectivityType?: ConnectivityType;
}
export interface NatGatewayAddress {
  AllocationId?: string;
  NetworkInterfaceId?: string;
  PrivateIp?: string;
  PublicIp?: string;
  AssociationId?: string;
  IsPrimary?: boolean;
  FailureMessage?: string;
  Status?: NatGatewayAddressStatus;
}
export type NatGatewayAddressList = Array<NatGatewayAddress>;
export type NatGatewayAddressStatus = "ASSIGNING" | "UNASSIGNING" | "ASSOCIATING" | "DISASSOCIATING" | "SUCCEEDED" | "FAILED";
export type NatGatewayId = string;

export type NatGatewayIdStringList = Array<string>;
export type NatGatewayList = Array<NatGateway>;
export type NatGatewayState = "PENDING" | "FAILED" | "AVAILABLE" | "DELETING" | "DELETED";
export interface NativeApplicationOidcOptions {
  PublicSigningKeyEndpoint?: string;
  Issuer?: string;
  AuthorizationEndpoint?: string;
  TokenEndpoint?: string;
  UserInfoEndpoint?: string;
  ClientId?: string;
  Scope?: string;
}
export type NetmaskLength = number;

export interface NetworkAcl {
  Associations?: Array<NetworkAclAssociation>;
  Entries?: Array<NetworkAclEntry>;
  IsDefault?: boolean;
  NetworkAclId?: string;
  Tags?: Array<Tag>;
  VpcId?: string;
  OwnerId?: string;
}
export interface NetworkAclAssociation {
  NetworkAclAssociationId?: string;
  NetworkAclId?: string;
  SubnetId?: string;
}
export type NetworkAclAssociationId = string;

export type NetworkAclAssociationList = Array<NetworkAclAssociation>;
export interface NetworkAclEntry {
  CidrBlock?: string;
  Egress?: boolean;
  IcmpTypeCode?: IcmpTypeCode;
  Ipv6CidrBlock?: string;
  PortRange?: PortRange;
  Protocol?: string;
  RuleAction?: RuleAction;
  RuleNumber?: number;
}
export type NetworkAclEntryList = Array<NetworkAclEntry>;
export type NetworkAclId = string;

export type NetworkAclIdStringList = Array<string>;
export type NetworkAclList = Array<NetworkAcl>;
export interface NetworkBandwidthGbps {
  Min?: number;
  Max?: number;
}
export interface NetworkBandwidthGbpsRequest {
  Min?: number;
  Max?: number;
}
export type NetworkCardIndex = number;

export interface NetworkCardInfo {
  NetworkCardIndex?: number;
  NetworkPerformance?: string;
  MaximumNetworkInterfaces?: number;
  BaselineBandwidthInGbps?: number;
  PeakBandwidthInGbps?: number;
  DefaultEnaQueueCountPerInterface?: number;
  MaximumEnaQueueCount?: number;
  MaximumEnaQueueCountPerInterface?: number;
}
export type NetworkCardInfoList = Array<NetworkCardInfo>;
export interface NetworkInfo {
  NetworkPerformance?: string;
  MaximumNetworkInterfaces?: number;
  MaximumNetworkCards?: number;
  DefaultNetworkCardIndex?: number;
  NetworkCards?: Array<NetworkCardInfo>;
  Ipv4AddressesPerInterface?: number;
  Ipv6AddressesPerInterface?: number;
  Ipv6Supported?: boolean;
  EnaSupport?: EnaSupport;
  EfaSupported?: boolean;
  EfaInfo?: EfaInfo;
  EncryptionInTransitSupported?: boolean;
  EnaSrdSupported?: boolean;
  BandwidthWeightings?: Array<BandwidthWeightingType>;
  FlexibleEnaQueuesSupport?: FlexibleEnaQueuesSupport;
}
export interface NetworkInsightsAccessScope {
  NetworkInsightsAccessScopeId?: string;
  NetworkInsightsAccessScopeArn?: string;
  CreatedDate?: Date | string;
  UpdatedDate?: Date | string;
  Tags?: Array<Tag>;
}
export interface NetworkInsightsAccessScopeAnalysis {
  NetworkInsightsAccessScopeAnalysisId?: string;
  NetworkInsightsAccessScopeAnalysisArn?: string;
  NetworkInsightsAccessScopeId?: string;
  Status?: AnalysisStatus;
  StatusMessage?: string;
  WarningMessage?: string;
  StartDate?: Date | string;
  EndDate?: Date | string;
  FindingsFound?: FindingsFound;
  AnalyzedEniCount?: number;
  Tags?: Array<Tag>;
}
export type NetworkInsightsAccessScopeAnalysisId = string;

export type NetworkInsightsAccessScopeAnalysisIdList = Array<string>;
export type NetworkInsightsAccessScopeAnalysisList = Array<NetworkInsightsAccessScopeAnalysis>;
export interface NetworkInsightsAccessScopeContent {
  NetworkInsightsAccessScopeId?: string;
  MatchPaths?: Array<AccessScopePath>;
  ExcludePaths?: Array<AccessScopePath>;
}
export type NetworkInsightsAccessScopeId = string;

export type NetworkInsightsAccessScopeIdList = Array<string>;
export type NetworkInsightsAccessScopeList = Array<NetworkInsightsAccessScope>;
export interface NetworkInsightsAnalysis {
  NetworkInsightsAnalysisId?: string;
  NetworkInsightsAnalysisArn?: string;
  NetworkInsightsPathId?: string;
  AdditionalAccounts?: Array<string>;
  FilterInArns?: Array<string>;
  FilterOutArns?: Array<string>;
  StartDate?: Date | string;
  Status?: AnalysisStatus;
  StatusMessage?: string;
  WarningMessage?: string;
  NetworkPathFound?: boolean;
  ForwardPathComponents?: Array<PathComponent>;
  ReturnPathComponents?: Array<PathComponent>;
  Explanations?: Array<Explanation>;
  AlternatePathHints?: Array<AlternatePathHint>;
  SuggestedAccounts?: Array<string>;
  Tags?: Array<Tag>;
}
export type NetworkInsightsAnalysisId = string;

export type NetworkInsightsAnalysisIdList = Array<string>;
export type NetworkInsightsAnalysisList = Array<NetworkInsightsAnalysis>;
export type NetworkInsightsMaxResults = number;

export interface NetworkInsightsPath {
  NetworkInsightsPathId?: string;
  NetworkInsightsPathArn?: string;
  CreatedDate?: Date | string;
  Source?: string;
  Destination?: string;
  SourceArn?: string;
  DestinationArn?: string;
  SourceIp?: string;
  DestinationIp?: string;
  Protocol?: Protocol;
  DestinationPort?: number;
  Tags?: Array<Tag>;
  FilterAtSource?: PathFilter;
  FilterAtDestination?: PathFilter;
}
export type NetworkInsightsPathId = string;

export type NetworkInsightsPathIdList = Array<string>;
export type NetworkInsightsPathList = Array<NetworkInsightsPath>;
export type NetworkInsightsResourceId = string;

export interface NetworkInterface {
  Association?: NetworkInterfaceAssociation;
  Attachment?: NetworkInterfaceAttachment;
  AvailabilityZone?: string;
  ConnectionTrackingConfiguration?: ConnectionTrackingConfiguration;
  Description?: string;
  Groups?: Array<GroupIdentifier>;
  InterfaceType?: NetworkInterfaceType;
  Ipv6Addresses?: Array<NetworkInterfaceIpv6Address>;
  MacAddress?: string;
  NetworkInterfaceId?: string;
  OutpostArn?: string;
  OwnerId?: string;
  PrivateDnsName?: string;
  PublicDnsName?: string;
  PublicIpDnsNameOptions?: PublicIpDnsNameOptions;
  PrivateIpAddress?: string;
  PrivateIpAddresses?: Array<NetworkInterfacePrivateIpAddress>;
  Ipv4Prefixes?: Array<Ipv4PrefixSpecification>;
  Ipv6Prefixes?: Array<Ipv6PrefixSpecification>;
  RequesterId?: string;
  RequesterManaged?: boolean;
  SourceDestCheck?: boolean;
  Status?: NetworkInterfaceStatus;
  SubnetId?: string;
  TagSet?: Array<Tag>;
  VpcId?: string;
  DenyAllIgwTraffic?: boolean;
  Ipv6Native?: boolean;
  Ipv6Address?: string;
  Operator?: OperatorResponse;
  AssociatedSubnets?: Array<string>;
}
export interface NetworkInterfaceAssociation {
  AllocationId?: string;
  AssociationId?: string;
  IpOwnerId?: string;
  PublicDnsName?: string;
  PublicIp?: string;
  CustomerOwnedIp?: string;
  CarrierIp?: string;
}
export interface NetworkInterfaceAttachment {
  AttachTime?: Date | string;
  AttachmentId?: string;
  DeleteOnTermination?: boolean;
  DeviceIndex?: number;
  NetworkCardIndex?: number;
  InstanceId?: string;
  InstanceOwnerId?: string;
  Status?: AttachmentStatus;
  EnaSrdSpecification?: AttachmentEnaSrdSpecification;
  EnaQueueCount?: number;
}
export interface NetworkInterfaceAttachmentChanges {
  DefaultEnaQueueCount?: boolean;
  EnaQueueCount?: number;
  AttachmentId?: string;
  DeleteOnTermination?: boolean;
}
export type NetworkInterfaceAttachmentId = string;

export type NetworkInterfaceAttribute = "description" | "groupSet" | "sourceDestCheck" | "attachment" | "associatePublicIpAddress";
export interface NetworkInterfaceCount {
  Min?: number;
  Max?: number;
}
export interface NetworkInterfaceCountRequest {
  Min?: number;
  Max?: number;
}
export type NetworkInterfaceCreationType = "efa" | "efa_only" | "branch" | "trunk";
export type NetworkInterfaceId = string;

export type NetworkInterfaceIdList = Array<string>;
export type NetworkInterfaceIdSet = Array<string>;
export interface NetworkInterfaceIpv6Address {
  Ipv6Address?: string;
  PublicIpv6DnsName?: string;
  IsPrimaryIpv6?: boolean;
}
export type NetworkInterfaceIpv6AddressesList = Array<NetworkInterfaceIpv6Address>;
export type NetworkInterfaceList = Array<NetworkInterface>;
export interface NetworkInterfacePermission {
  NetworkInterfacePermissionId?: string;
  NetworkInterfaceId?: string;
  AwsAccountId?: string;
  AwsService?: string;
  Permission?: InterfacePermissionType;
  PermissionState?: NetworkInterfacePermissionState;
}
export type NetworkInterfacePermissionId = string;

export type NetworkInterfacePermissionIdList = Array<string>;
export type NetworkInterfacePermissionList = Array<NetworkInterfacePermission>;
export interface NetworkInterfacePermissionState {
  State?: NetworkInterfacePermissionStateCode;
  StatusMessage?: string;
}
export type NetworkInterfacePermissionStateCode = "pending" | "granted" | "revoking" | "revoked";
export interface NetworkInterfacePrivateIpAddress {
  Association?: NetworkInterfaceAssociation;
  Primary?: boolean;
  PrivateDnsName?: string;
  PrivateIpAddress?: string;
}
export type NetworkInterfacePrivateIpAddressList = Array<NetworkInterfacePrivateIpAddress>;
export type NetworkInterfaceStatus = "available" | "associated" | "attaching" | "in_use" | "detaching";
export type NetworkInterfaceType = "interface" | "natGateway" | "efa" | "efa_only" | "trunk" | "load_balancer" | "network_load_balancer" | "vpc_endpoint" | "branch" | "transit_gateway" | "lambda" | "quicksight" | "global_accelerator_managed" | "api_gateway_managed" | "gateway_load_balancer" | "gateway_load_balancer_endpoint" | "iot_rules_managed" | "aws_codestar_connections_managed";
export type NetworkNodesList = Array<string>;
export type NetworkPerformance = string;

export type NeuronDeviceCoreCount = number;

export interface NeuronDeviceCoreInfo {
  Count?: number;
  Version?: number;
}
export type NeuronDeviceCoreVersion = number;

export type NeuronDeviceCount = number;

export interface NeuronDeviceInfo {
  Count?: number;
  Name?: string;
  CoreInfo?: NeuronDeviceCoreInfo;
  MemoryInfo?: NeuronDeviceMemoryInfo;
}
export type NeuronDeviceInfoList = Array<NeuronDeviceInfo>;
export interface NeuronDeviceMemoryInfo {
  SizeInMiB?: number;
}
export type NeuronDeviceMemorySize = number;

export type NeuronDeviceName = string;

export interface NeuronInfo {
  NeuronDevices?: Array<NeuronDeviceInfo>;
  TotalNeuronDeviceMemoryInMiB?: number;
}
export interface NewDhcpConfiguration {
  Key?: string;
  Values?: Array<string>;
}
export type NewDhcpConfigurationList = Array<NewDhcpConfiguration>;
export type NextToken = string;

export type NitroEnclavesSupport = "UNSUPPORTED" | "SUPPORTED";
export interface NitroTpmInfo {
  SupportedVersions?: Array<string>;
}
export type NitroTpmSupport = "UNSUPPORTED" | "SUPPORTED";
export type NitroTpmSupportedVersionsList = Array<string>;
export type NitroTpmSupportedVersionType = string;

export type OccurrenceDayRequestSet = Array<number>;
export type OccurrenceDaySet = Array<number>;
export type OdbNetworkArn = string;

export type OfferingClassType = "STANDARD" | "CONVERTIBLE";
export type OfferingId = string;

export type OfferingTypeValues = "Heavy_Utilization" | "Medium_Utilization" | "Light_Utilization" | "No_Upfront" | "Partial_Upfront" | "All_Upfront";
export interface OidcOptions {
  Issuer?: string;
  AuthorizationEndpoint?: string;
  TokenEndpoint?: string;
  UserInfoEndpoint?: string;
  ClientId?: string;
  ClientSecret?: string;
  Scope?: string;
}
export type OnDemandAllocationStrategy = "LOWEST_PRICE" | "PRIORITIZED";
export interface OnDemandOptions {
  AllocationStrategy?: FleetOnDemandAllocationStrategy;
  CapacityReservationOptions?: CapacityReservationOptions;
  SingleInstanceType?: boolean;
  SingleAvailabilityZone?: boolean;
  MinTargetCapacity?: number;
  MaxTotalPrice?: string;
}
export interface OnDemandOptionsRequest {
  AllocationStrategy?: FleetOnDemandAllocationStrategy;
  CapacityReservationOptions?: CapacityReservationOptionsRequest;
  SingleInstanceType?: boolean;
  SingleAvailabilityZone?: boolean;
  MinTargetCapacity?: number;
  MaxTotalPrice?: string;
}
export type OperationType = "add" | "remove";
export interface OperatorRequest {
  Principal?: string;
}
export interface OperatorResponse {
  Managed?: boolean;
  Principal?: string;
}
export type OrganizationalUnitArnStringList = Array<string>;
export type OrganizationArnStringList = Array<string>;
export type OutpostArn = string;

export interface OutpostLag {
  OutpostArn?: string;
  OwnerId?: string;
  State?: string;
  OutpostLagId?: string;
  LocalGatewayVirtualInterfaceIds?: Array<string>;
  ServiceLinkVirtualInterfaceIds?: Array<string>;
  Tags?: Array<Tag>;
}
export type OutpostLagId = string;

export type OutpostLagIdSet = Array<string>;
export type OutpostLagMaxResults = number;

export type OutpostLagSet = Array<OutpostLag>;
export type OwnerStringList = Array<string>;
export interface PacketHeaderStatement {
  SourceAddresses?: Array<string>;
  DestinationAddresses?: Array<string>;
  SourcePorts?: Array<string>;
  DestinationPorts?: Array<string>;
  SourcePrefixLists?: Array<string>;
  DestinationPrefixLists?: Array<string>;
  Protocols?: Array<Protocol>;
}
export interface PacketHeaderStatementRequest {
  SourceAddresses?: Array<string>;
  DestinationAddresses?: Array<string>;
  SourcePorts?: Array<string>;
  DestinationPorts?: Array<string>;
  SourcePrefixLists?: Array<string>;
  DestinationPrefixLists?: Array<string>;
  Protocols?: Array<Protocol>;
}
export type PartitionLoadFrequency = "NONE" | "DAILY" | "WEEKLY" | "MONTHLY";
export type PasswordData = string;

export interface PathComponent {
  SequenceNumber?: number;
  AclRule?: AnalysisAclRule;
  AttachedTo?: AnalysisComponent;
  Component?: AnalysisComponent;
  DestinationVpc?: AnalysisComponent;
  OutboundHeader?: AnalysisPacketHeader;
  InboundHeader?: AnalysisPacketHeader;
  RouteTableRoute?: AnalysisRouteTableRoute;
  SecurityGroupRule?: AnalysisSecurityGroupRule;
  SourceVpc?: AnalysisComponent;
  Subnet?: AnalysisComponent;
  Vpc?: AnalysisComponent;
  AdditionalDetails?: Array<AdditionalDetail>;
  TransitGateway?: AnalysisComponent;
  TransitGatewayRouteTableRoute?: TransitGatewayRouteTableRoute;
  Explanations?: Array<Explanation>;
  ElasticLoadBalancerListener?: AnalysisComponent;
  FirewallStatelessRule?: FirewallStatelessRule;
  FirewallStatefulRule?: FirewallStatefulRule;
  ServiceName?: string;
}
export type PathComponentList = Array<PathComponent>;
export interface PathFilter {
  SourceAddress?: string;
  SourcePortRange?: FilterPortRange;
  DestinationAddress?: string;
  DestinationPortRange?: FilterPortRange;
}
export interface PathRequestFilter {
  SourceAddress?: string;
  SourcePortRange?: RequestFilterPortRange;
  DestinationAddress?: string;
  DestinationPortRange?: RequestFilterPortRange;
}
export interface PathStatement {
  PacketHeaderStatement?: PacketHeaderStatement;
  ResourceStatement?: ResourceStatement;
}
export interface PathStatementRequest {
  PacketHeaderStatement?: PacketHeaderStatementRequest;
  ResourceStatement?: ResourceStatementRequest;
}
export type PayerResponsibility = "ServiceOwner";
export type PaymentOption = "ALL_UPFRONT" | "PARTIAL_UPFRONT" | "NO_UPFRONT";
export interface PciId {
  DeviceId?: string;
  VendorId?: string;
  SubsystemId?: string;
  SubsystemVendorId?: string;
}
export type PeakBandwidthInGbps = number;

export interface PeeringAttachmentStatus {
  Code?: string;
  Message?: string;
}
export interface PeeringConnectionOptions {
  AllowDnsResolutionFromRemoteVpc?: boolean;
  AllowEgressFromLocalClassicLinkToRemoteVpc?: boolean;
  AllowEgressFromLocalVpcToRemoteClassicLink?: boolean;
}
export interface PeeringConnectionOptionsRequest {
  AllowDnsResolutionFromRemoteVpc?: boolean;
  AllowEgressFromLocalClassicLinkToRemoteVpc?: boolean;
  AllowEgressFromLocalVpcToRemoteClassicLink?: boolean;
}
export interface PeeringTgwInfo {
  TransitGatewayId?: string;
  CoreNetworkId?: string;
  OwnerId?: string;
  Region?: string;
}
export interface PerformanceFactorReference {
  InstanceFamily?: string;
}
export interface PerformanceFactorReferenceRequest {
  InstanceFamily?: string;
}
export type PerformanceFactorReferenceSet = Array<PerformanceFactorReference>;
export type PerformanceFactorReferenceSetRequest = Array<PerformanceFactorReferenceRequest>;
export type PeriodType = "five_minutes" | "fifteen_minutes" | "one_hour" | "three_hours" | "one_day" | "one_week";
export type PermissionGroup = "all";
export type Phase1DHGroupNumbersList = Array<Phase1DHGroupNumbersListValue>;
export interface Phase1DHGroupNumbersListValue {
  Value?: number;
}
export type Phase1DHGroupNumbersRequestList = Array<Phase1DHGroupNumbersRequestListValue>;
export interface Phase1DHGroupNumbersRequestListValue {
  Value?: number;
}
export type Phase1EncryptionAlgorithmsList = Array<Phase1EncryptionAlgorithmsListValue>;
export interface Phase1EncryptionAlgorithmsListValue {
  Value?: string;
}
export type Phase1EncryptionAlgorithmsRequestList = Array<Phase1EncryptionAlgorithmsRequestListValue>;
export interface Phase1EncryptionAlgorithmsRequestListValue {
  Value?: string;
}
export type Phase1IntegrityAlgorithmsList = Array<Phase1IntegrityAlgorithmsListValue>;
export interface Phase1IntegrityAlgorithmsListValue {
  Value?: string;
}
export type Phase1IntegrityAlgorithmsRequestList = Array<Phase1IntegrityAlgorithmsRequestListValue>;
export interface Phase1IntegrityAlgorithmsRequestListValue {
  Value?: string;
}
export type Phase2DHGroupNumbersList = Array<Phase2DHGroupNumbersListValue>;
export interface Phase2DHGroupNumbersListValue {
  Value?: number;
}
export type Phase2DHGroupNumbersRequestList = Array<Phase2DHGroupNumbersRequestListValue>;
export interface Phase2DHGroupNumbersRequestListValue {
  Value?: number;
}
export type Phase2EncryptionAlgorithmsList = Array<Phase2EncryptionAlgorithmsListValue>;
export interface Phase2EncryptionAlgorithmsListValue {
  Value?: string;
}
export type Phase2EncryptionAlgorithmsRequestList = Array<Phase2EncryptionAlgorithmsRequestListValue>;
export interface Phase2EncryptionAlgorithmsRequestListValue {
  Value?: string;
}
export type Phase2IntegrityAlgorithmsList = Array<Phase2IntegrityAlgorithmsListValue>;
export interface Phase2IntegrityAlgorithmsListValue {
  Value?: string;
}
export type Phase2IntegrityAlgorithmsRequestList = Array<Phase2IntegrityAlgorithmsRequestListValue>;
export interface Phase2IntegrityAlgorithmsRequestListValue {
  Value?: string;
}
export type PhcSupport = "UNSUPPORTED" | "SUPPORTED";
export interface Placement {
  Affinity?: string;
  GroupName?: string;
  PartitionNumber?: number;
  HostId?: string;
  Tenancy?: Tenancy;
  SpreadDomain?: string;
  HostResourceGroupArn?: string;
  GroupId?: string;
  AvailabilityZone?: string;
}
export interface PlacementGroup {
  GroupName?: string;
  State?: PlacementGroupState;
  Strategy?: PlacementStrategy;
  PartitionCount?: number;
  GroupId?: string;
  Tags?: Array<Tag>;
  GroupArn?: string;
  SpreadLevel?: SpreadLevel;
}
export type PlacementGroupArn = string;

export type PlacementGroupId = string;

export type PlacementGroupIdStringList = Array<string>;
export interface PlacementGroupInfo {
  SupportedStrategies?: Array<PlacementGroupStrategy>;
}
export type PlacementGroupList = Array<PlacementGroup>;
export type PlacementGroupName = string;

export type PlacementGroupState = "pending" | "available" | "deleting" | "deleted";
export type PlacementGroupStrategy = "cluster" | "partition" | "spread";
export type PlacementGroupStrategyList = Array<PlacementGroupStrategy>;
export type PlacementGroupStringList = Array<string>;
export interface PlacementResponse {
  GroupName?: string;
}
export type PlacementStrategy = "cluster" | "spread" | "partition";
export type PlatformValues = "Windows";
export interface PoolCidrBlock {
  Cidr?: string;
}
export type PoolCidrBlocksSet = Array<PoolCidrBlock>;
export type PoolMaxResults = number;

export type Port = number;

export interface PortRange {
  From?: number;
  To?: number;
}
export type PortRangeList = Array<PortRange>;
export interface PrefixList {
  Cidrs?: Array<string>;
  PrefixListId?: string;
  PrefixListName?: string;
}
export interface PrefixListAssociation {
  ResourceId?: string;
  ResourceOwner?: string;
}
export type PrefixListAssociationSet = Array<PrefixListAssociation>;
export interface PrefixListEntry {
  Cidr?: string;
  Description?: string;
}
export type PrefixListEntrySet = Array<PrefixListEntry>;
export interface PrefixListId {
  Description?: string;
  PrefixListId?: string;
}
export type PrefixListIdList = Array<PrefixListId>;
export type PrefixListIdSet = Array<string>;
export type PrefixListMaxResults = number;

export type PrefixListResourceId = string;

export type PrefixListResourceIdStringList = Array<string>;
export type PrefixListSet = Array<PrefixList>;
export type PrefixListState = "create_in_progress" | "create_complete" | "create_failed" | "modify_in_progress" | "modify_complete" | "modify_failed" | "restore_in_progress" | "restore_complete" | "restore_failed" | "delete_in_progress" | "delete_complete" | "delete_failed";
export type preSharedKey = string;

export interface PriceSchedule {
  Active?: boolean;
  CurrencyCode?: CurrencyCodeValues;
  Price?: number;
  Term?: number;
}
export type PriceScheduleList = Array<PriceSchedule>;
export interface PriceScheduleSpecification {
  Term?: number;
  Price?: number;
  CurrencyCode?: CurrencyCodeValues;
}
export type PriceScheduleSpecificationList = Array<PriceScheduleSpecification>;
export interface PricingDetail {
  Count?: number;
  Price?: number;
}
export type PricingDetailsList = Array<PricingDetail>;
export interface PrincipalIdFormat {
  Arn?: string;
  Statuses?: Array<IdFormat>;
}
export type PrincipalIdFormatList = Array<PrincipalIdFormat>;
export type PrincipalType = "All" | "Service" | "OrganizationUnit" | "Account" | "User" | "Role";
export type Priority = number;

export interface PrivateDnsDetails {
  PrivateDnsName?: string;
}
export type PrivateDnsDetailsSet = Array<PrivateDnsDetails>;
export interface PrivateDnsNameConfiguration {
  State?: DnsNameState;
  Type?: string;
  Value?: string;
  Name?: string;
}
export interface PrivateDnsNameOptionsOnLaunch {
  HostnameType?: HostnameType;
  EnableResourceNameDnsARecord?: boolean;
  EnableResourceNameDnsAAAARecord?: boolean;
}
export interface PrivateDnsNameOptionsRequest {
  HostnameType?: HostnameType;
  EnableResourceNameDnsARecord?: boolean;
  EnableResourceNameDnsAAAARecord?: boolean;
}
export interface PrivateDnsNameOptionsResponse {
  HostnameType?: HostnameType;
  EnableResourceNameDnsARecord?: boolean;
  EnableResourceNameDnsAAAARecord?: boolean;
}
export type PrivateIpAddressConfigSet = Array<ScheduledInstancesPrivateIpAddressConfig>;
export type PrivateIpAddressCount = number;

export interface PrivateIpAddressSpecification {
  Primary?: boolean;
  PrivateIpAddress?: string;
}
export type PrivateIpAddressSpecificationList = Array<PrivateIpAddressSpecification>;
export type PrivateIpAddressStringList = Array<string>;
export interface ProcessorInfo {
  SupportedArchitectures?: Array<ArchitectureType>;
  SustainedClockSpeedInGhz?: number;
  SupportedFeatures?: Array<SupportedAdditionalProcessorFeature>;
  Manufacturer?: string;
}
export type ProcessorSustainedClockSpeed = number;

export interface ProductCode {
  ProductCodeId?: string;
  ProductCodeType?: ProductCodeValues;
}
export type ProductCodeList = Array<ProductCode>;
export type ProductCodeStringList = Array<string>;
export type ProductCodeValues = "devpay" | "marketplace";
export type ProductDescriptionList = Array<string>;
export interface PropagatingVgw {
  GatewayId?: string;
}
export type PropagatingVgwList = Array<PropagatingVgw>;
export type Protocol = "tcp" | "udp";
export type ProtocolInt = number;

export type ProtocolIntList = Array<number>;
export type ProtocolList = Array<Protocol>;
export type ProtocolValue = "gre";
export interface ProvisionByoipCidrRequest {
  Cidr: string;
  CidrAuthorizationContext?: CidrAuthorizationContext;
  PubliclyAdvertisable?: boolean;
  Description?: string;
  DryRun?: boolean;
  PoolTagSpecifications?: Array<TagSpecification>;
  MultiRegion?: boolean;
  NetworkBorderGroup?: string;
}
export interface ProvisionByoipCidrResult {
  ByoipCidr?: ByoipCidr;
}
export interface ProvisionedBandwidth {
  ProvisionTime?: Date | string;
  Provisioned?: string;
  RequestTime?: Date | string;
  Requested?: string;
  Status?: string;
}
export interface ProvisionIpamByoasnRequest {
  DryRun?: boolean;
  IpamId: string;
  Asn: string;
  AsnAuthorizationContext: AsnAuthorizationContext;
}
export interface ProvisionIpamByoasnResult {
  Byoasn?: Byoasn;
}
export interface ProvisionIpamPoolCidrRequest {
  DryRun?: boolean;
  IpamPoolId: string;
  Cidr?: string;
  CidrAuthorizationContext?: IpamCidrAuthorizationContext;
  NetmaskLength?: number;
  ClientToken?: string;
  VerificationMethod?: VerificationMethod;
  IpamExternalResourceVerificationTokenId?: string;
}
export interface ProvisionIpamPoolCidrResult {
  IpamPoolCidr?: IpamPoolCidr;
}
export interface ProvisionPublicIpv4PoolCidrRequest {
  DryRun?: boolean;
  IpamPoolId: string;
  PoolId: string;
  NetmaskLength: number;
  NetworkBorderGroup?: string;
}
export interface ProvisionPublicIpv4PoolCidrResult {
  PoolId?: string;
  PoolAddressRange?: PublicIpv4PoolRange;
}
export interface PtrUpdateStatus {
  Value?: string;
  Status?: string;
  Reason?: string;
}
export type PublicIpAddress = string;

export interface PublicIpDnsNameOptions {
  DnsHostnameType?: string;
  PublicIpv4DnsName?: string;
  PublicIpv6DnsName?: string;
  PublicDualStackDnsName?: string;
}
export type PublicIpDnsOption = "public_dual_stack_dns_name" | "public_ipv4_dns_name" | "public_ipv6_dns_name";
export type PublicIpStringList = Array<string>;
export interface PublicIpv4Pool {
  PoolId?: string;
  Description?: string;
  PoolAddressRanges?: Array<PublicIpv4PoolRange>;
  TotalAddressCount?: number;
  TotalAvailableAddressCount?: number;
  NetworkBorderGroup?: string;
  Tags?: Array<Tag>;
}
export type PublicIpv4PoolIdStringList = Array<string>;
export interface PublicIpv4PoolRange {
  FirstAddress?: string;
  LastAddress?: string;
  AddressCount?: number;
  AvailableAddressCount?: number;
}
export type PublicIpv4PoolRangeSet = Array<PublicIpv4PoolRange>;
export type PublicIpv4PoolSet = Array<PublicIpv4Pool>;
export interface Purchase {
  CurrencyCode?: CurrencyCodeValues;
  Duration?: number;
  HostIdSet?: Array<string>;
  HostReservationId?: string;
  HourlyPrice?: string;
  InstanceFamily?: string;
  PaymentOption?: PaymentOption;
  UpfrontPrice?: string;
}
export interface PurchaseCapacityBlockExtensionRequest {
  CapacityBlockExtensionOfferingId: string;
  CapacityReservationId: string;
  DryRun?: boolean;
}
export interface PurchaseCapacityBlockExtensionResult {
  CapacityBlockExtensions?: Array<CapacityBlockExtension>;
}
export interface PurchaseCapacityBlockRequest {
  DryRun?: boolean;
  TagSpecifications?: Array<TagSpecification>;
  CapacityBlockOfferingId: string;
  InstancePlatform: CapacityReservationInstancePlatform;
}
export interface PurchaseCapacityBlockResult {
  CapacityReservation?: CapacityReservation;
  CapacityBlocks?: Array<CapacityBlock>;
}
export type PurchasedScheduledInstanceSet = Array<ScheduledInstance>;
export interface PurchaseHostReservationRequest {
  ClientToken?: string;
  CurrencyCode?: CurrencyCodeValues;
  HostIdSet: Array<string>;
  LimitPrice?: string;
  OfferingId: string;
  TagSpecifications?: Array<TagSpecification>;
}
export interface PurchaseHostReservationResult {
  ClientToken?: string;
  CurrencyCode?: CurrencyCodeValues;
  Purchase?: Array<Purchase>;
  TotalHourlyPrice?: string;
  TotalUpfrontPrice?: string;
}
export interface PurchaseRequest {
  InstanceCount: number;
  PurchaseToken: string;
}
export type PurchaseRequestSet = Array<PurchaseRequest>;
export interface PurchaseReservedInstancesOfferingRequest {
  InstanceCount: number;
  ReservedInstancesOfferingId: string;
  PurchaseTime?: Date | string;
  DryRun?: boolean;
  LimitPrice?: ReservedInstanceLimitPrice;
}
export interface PurchaseReservedInstancesOfferingResult {
  ReservedInstancesId?: string;
}
export interface PurchaseScheduledInstancesRequest {
  ClientToken?: string;
  DryRun?: boolean;
  PurchaseRequests: Array<PurchaseRequest>;
}
export interface PurchaseScheduledInstancesResult {
  ScheduledInstanceSet?: Array<ScheduledInstance>;
}
export type PurchaseSet = Array<Purchase>;
export type RamdiskId = string;

export type RdsDbClusterArn = string;

export type RdsDbInstanceArn = string;

export type RdsDbProxyArn = string;

export type ReasonCodesList = Array<ReportInstanceReasonCodes>;
export interface RebootInstancesRequest {
  InstanceIds: Array<string>;
  DryRun?: boolean;
}
export type RebootMigrationSupport = "UNSUPPORTED" | "SUPPORTED";
export interface RecurringCharge {
  Amount?: number;
  Frequency?: RecurringChargeFrequency;
}
export type RecurringChargeFrequency = "Hourly";
export type RecurringChargesList = Array<RecurringCharge>;
export interface ReferencedSecurityGroup {
  GroupId?: string;
  PeeringStatus?: string;
  UserId?: string;
  VpcId?: string;
  VpcPeeringConnectionId?: string;
}
export interface Region {
  OptInStatus?: string;
  RegionName?: string;
  Endpoint?: string;
}
export interface RegionalSummary {
  RegionName?: string;
  NumberOfMatchedAccounts?: number;
  NumberOfUnmatchedAccounts?: number;
}
export type RegionalSummaryList = Array<RegionalSummary>;
export type RegionList = Array<Region>;
export type RegionNames = Array<string>;
export type RegionNameStringList = Array<string>;
export interface RegisterImageRequest {
  ImageLocation?: string;
  BillingProducts?: Array<string>;
  BootMode?: BootModeValues;
  TpmSupport?: TpmSupportValues;
  UefiData?: string;
  ImdsSupport?: ImdsSupportValues;
  TagSpecifications?: Array<TagSpecification>;
  DryRun?: boolean;
  Name: string;
  Description?: string;
  Architecture?: ArchitectureValues;
  KernelId?: string;
  RamdiskId?: string;
  RootDeviceName?: string;
  BlockDeviceMappings?: Array<BlockDeviceMapping>;
  VirtualizationType?: string;
  SriovNetSupport?: string;
  EnaSupport?: boolean;
}
export interface RegisterImageResult {
  ImageId?: string;
}
export interface RegisterInstanceEventNotificationAttributesRequest {
  DryRun?: boolean;
  InstanceTagAttribute: RegisterInstanceTagAttributeRequest;
}
export interface RegisterInstanceEventNotificationAttributesResult {
  InstanceTagAttribute?: InstanceTagNotificationAttribute;
}
export interface RegisterInstanceTagAttributeRequest {
  IncludeAllTagsOfInstance?: boolean;
  InstanceTagKeys?: Array<string>;
}
export interface RegisterTransitGatewayMulticastGroupMembersRequest {
  TransitGatewayMulticastDomainId: string;
  GroupIpAddress?: string;
  NetworkInterfaceIds: Array<string>;
  DryRun?: boolean;
}
export interface RegisterTransitGatewayMulticastGroupMembersResult {
  RegisteredMulticastGroupMembers?: TransitGatewayMulticastRegisteredGroupMembers;
}
export interface RegisterTransitGatewayMulticastGroupSourcesRequest {
  TransitGatewayMulticastDomainId: string;
  GroupIpAddress?: string;
  NetworkInterfaceIds: Array<string>;
  DryRun?: boolean;
}
export interface RegisterTransitGatewayMulticastGroupSourcesResult {
  RegisteredMulticastGroupSources?: TransitGatewayMulticastRegisteredGroupSources;
}
export interface RejectCapacityReservationBillingOwnershipRequest {
  DryRun?: boolean;
  CapacityReservationId: string;
}
export interface RejectCapacityReservationBillingOwnershipResult {
  Return?: boolean;
}
export interface RejectTransitGatewayMulticastDomainAssociationsRequest {
  TransitGatewayMulticastDomainId?: string;
  TransitGatewayAttachmentId?: string;
  SubnetIds?: Array<string>;
  DryRun?: boolean;
}
export interface RejectTransitGatewayMulticastDomainAssociationsResult {
  Associations?: TransitGatewayMulticastDomainAssociations;
}
export interface RejectTransitGatewayPeeringAttachmentRequest {
  TransitGatewayAttachmentId: string;
  DryRun?: boolean;
}
export interface RejectTransitGatewayPeeringAttachmentResult {
  TransitGatewayPeeringAttachment?: TransitGatewayPeeringAttachment;
}
export interface RejectTransitGatewayVpcAttachmentRequest {
  TransitGatewayAttachmentId: string;
  DryRun?: boolean;
}
export interface RejectTransitGatewayVpcAttachmentResult {
  TransitGatewayVpcAttachment?: TransitGatewayVpcAttachment;
}
export interface RejectVpcEndpointConnectionsRequest {
  DryRun?: boolean;
  ServiceId: string;
  VpcEndpointIds: Array<string>;
}
export interface RejectVpcEndpointConnectionsResult {
  Unsuccessful?: Array<UnsuccessfulItem>;
}
export interface RejectVpcPeeringConnectionRequest {
  DryRun?: boolean;
  VpcPeeringConnectionId: string;
}
export interface RejectVpcPeeringConnectionResult {
  Return?: boolean;
}
export interface ReleaseAddressRequest {
  AllocationId?: string;
  PublicIp?: string;
  NetworkBorderGroup?: string;
  DryRun?: boolean;
}
export interface ReleaseHostsRequest {
  HostIds: Array<string>;
}
export interface ReleaseHostsResult {
  Successful?: Array<string>;
  Unsuccessful?: Array<UnsuccessfulItem>;
}
export interface ReleaseIpamPoolAllocationRequest {
  DryRun?: boolean;
  IpamPoolId: string;
  Cidr: string;
  IpamPoolAllocationId: string;
}
export interface ReleaseIpamPoolAllocationResult {
  Success?: boolean;
}
export interface RemoveIpamOperatingRegion {
  RegionName?: string;
}
export type RemoveIpamOperatingRegionSet = Array<RemoveIpamOperatingRegion>;
export interface RemoveIpamOrganizationalUnitExclusion {
  OrganizationsEntityPath?: string;
}
export type RemoveIpamOrganizationalUnitExclusionSet = Array<RemoveIpamOrganizationalUnitExclusion>;
export type RemovePrefixListEntries = Array<RemovePrefixListEntry>;
export interface RemovePrefixListEntry {
  Cidr: string;
}
export interface ReplaceIamInstanceProfileAssociationRequest {
  IamInstanceProfile: IamInstanceProfileSpecification;
  AssociationId: string;
}
export interface ReplaceIamInstanceProfileAssociationResult {
  IamInstanceProfileAssociation?: IamInstanceProfileAssociation;
}
export interface ReplaceImageCriteriaInAllowedImagesSettingsRequest {
  ImageCriteria?: Array<ImageCriterionRequest>;
  DryRun?: boolean;
}
export interface ReplaceImageCriteriaInAllowedImagesSettingsResult {
  ReturnValue?: boolean;
}
export type ReplacementStrategy = "LAUNCH" | "LAUNCH_BEFORE_TERMINATE";
export interface ReplaceNetworkAclAssociationRequest {
  DryRun?: boolean;
  AssociationId: string;
  NetworkAclId: string;
}
export interface ReplaceNetworkAclAssociationResult {
  NewAssociationId?: string;
}
export interface ReplaceNetworkAclEntryRequest {
  DryRun?: boolean;
  NetworkAclId: string;
  RuleNumber: number;
  Protocol: string;
  RuleAction: RuleAction;
  Egress: boolean;
  CidrBlock?: string;
  Ipv6CidrBlock?: string;
  IcmpTypeCode?: IcmpTypeCode;
  PortRange?: PortRange;
}
export interface ReplaceRootVolumeTask {
  ReplaceRootVolumeTaskId?: string;
  InstanceId?: string;
  TaskState?: ReplaceRootVolumeTaskState;
  StartTime?: string;
  CompleteTime?: string;
  Tags?: Array<Tag>;
  ImageId?: string;
  SnapshotId?: string;
  DeleteReplacedRootVolume?: boolean;
}
export type ReplaceRootVolumeTaskId = string;

export type ReplaceRootVolumeTaskIds = Array<string>;
export type ReplaceRootVolumeTasks = Array<ReplaceRootVolumeTask>;
export type ReplaceRootVolumeTaskState = "pending" | "in_progress" | "failing" | "succeeded" | "failed" | "failed_detached";
export interface ReplaceRouteRequest {
  DestinationPrefixListId?: string;
  VpcEndpointId?: string;
  LocalTarget?: boolean;
  TransitGatewayId?: string;
  LocalGatewayId?: string;
  CarrierGatewayId?: string;
  CoreNetworkArn?: string;
  OdbNetworkArn?: string;
  DryRun?: boolean;
  RouteTableId: string;
  DestinationCidrBlock?: string;
  GatewayId?: string;
  DestinationIpv6CidrBlock?: string;
  EgressOnlyInternetGatewayId?: string;
  InstanceId?: string;
  NetworkInterfaceId?: string;
  VpcPeeringConnectionId?: string;
  NatGatewayId?: string;
}
export interface ReplaceRouteTableAssociationRequest {
  DryRun?: boolean;
  AssociationId: string;
  RouteTableId: string;
}
export interface ReplaceRouteTableAssociationResult {
  NewAssociationId?: string;
  AssociationState?: RouteTableAssociationState;
}
export interface ReplaceTransitGatewayRouteRequest {
  DestinationCidrBlock: string;
  TransitGatewayRouteTableId: string;
  TransitGatewayAttachmentId?: string;
  Blackhole?: boolean;
  DryRun?: boolean;
}
export interface ReplaceTransitGatewayRouteResult {
  Route?: TransitGatewayRoute;
}
export interface ReplaceVpnTunnelRequest {
  VpnConnectionId: string;
  VpnTunnelOutsideIpAddress: string;
  ApplyPendingMaintenance?: boolean;
  DryRun?: boolean;
}
export interface ReplaceVpnTunnelResult {
  Return?: boolean;
}
export type ReportInstanceReasonCodes = "instance_stuck_in_state" | "unresponsive" | "not_accepting_credentials" | "password_not_available" | "performance_network" | "performance_instance_store" | "performance_ebs_volume" | "performance_other" | "other";
export interface ReportInstanceStatusRequest {
  DryRun?: boolean;
  Instances: Array<string>;
  Status: ReportStatusType;
  StartTime?: Date | string;
  EndTime?: Date | string;
  ReasonCodes: Array<ReportInstanceReasonCodes>;
  Description?: string;
}
export type ReportInstanceStatusRequestDescription = string;

export type ReportState = "running" | "cancelled" | "complete" | "error";
export type ReportStatusType = "ok" | "impaired";
export interface RequestFilterPortRange {
  FromPort?: number;
  ToPort?: number;
}
export type RequestHostIdList = Array<string>;
export type RequestHostIdSet = Array<string>;
export type RequestInstanceTypeList = Array<InstanceType>;
export interface RequestIpamResourceTag {
  Key?: string;
  Value?: string;
}
export type RequestIpamResourceTagList = Array<RequestIpamResourceTag>;
export interface RequestLaunchTemplateData {
  KernelId?: string;
  EbsOptimized?: boolean;
  IamInstanceProfile?: LaunchTemplateIamInstanceProfileSpecificationRequest;
  BlockDeviceMappings?: Array<LaunchTemplateBlockDeviceMappingRequest>;
  NetworkInterfaces?: Array<LaunchTemplateInstanceNetworkInterfaceSpecificationRequest>;
  ImageId?: string;
  InstanceType?: InstanceType;
  KeyName?: string;
  Monitoring?: LaunchTemplatesMonitoringRequest;
  Placement?: LaunchTemplatePlacementRequest;
  RamDiskId?: string;
  DisableApiTermination?: boolean;
  InstanceInitiatedShutdownBehavior?: ShutdownBehavior;
  UserData?: string;
  TagSpecifications?: Array<LaunchTemplateTagSpecificationRequest>;
  ElasticGpuSpecifications?: Array<ElasticGpuSpecification>;
  ElasticInferenceAccelerators?: Array<LaunchTemplateElasticInferenceAccelerator>;
  SecurityGroupIds?: Array<string>;
  SecurityGroups?: Array<string>;
  InstanceMarketOptions?: LaunchTemplateInstanceMarketOptionsRequest;
  CreditSpecification?: CreditSpecificationRequest;
  CpuOptions?: LaunchTemplateCpuOptionsRequest;
  CapacityReservationSpecification?: LaunchTemplateCapacityReservationSpecificationRequest;
  LicenseSpecifications?: Array<LaunchTemplateLicenseConfigurationRequest>;
  HibernationOptions?: LaunchTemplateHibernationOptionsRequest;
  MetadataOptions?: LaunchTemplateInstanceMetadataOptionsRequest;
  EnclaveOptions?: LaunchTemplateEnclaveOptionsRequest;
  InstanceRequirements?: InstanceRequirementsRequest;
  PrivateDnsNameOptions?: LaunchTemplatePrivateDnsNameOptionsRequest;
  MaintenanceOptions?: LaunchTemplateInstanceMaintenanceOptionsRequest;
  DisableApiStop?: boolean;
  Operator?: OperatorRequest;
  NetworkPerformanceOptions?: LaunchTemplateNetworkPerformanceOptionsRequest;
}
export interface RequestSpotFleetRequest {
  DryRun?: boolean;
  SpotFleetRequestConfig: SpotFleetRequestConfigData;
}
export interface RequestSpotFleetResponse {
  SpotFleetRequestId?: string;
}
export interface RequestSpotInstancesRequest {
  LaunchSpecification?: RequestSpotLaunchSpecification;
  TagSpecifications?: Array<TagSpecification>;
  InstanceInterruptionBehavior?: InstanceInterruptionBehavior;
  DryRun?: boolean;
  SpotPrice?: string;
  ClientToken?: string;
  InstanceCount?: number;
  Type?: SpotInstanceType;
  ValidFrom?: Date | string;
  ValidUntil?: Date | string;
  LaunchGroup?: string;
  AvailabilityZoneGroup?: string;
  BlockDurationMinutes?: number;
}
export interface RequestSpotInstancesResult {
  SpotInstanceRequests?: Array<SpotInstanceRequest>;
}
export interface RequestSpotLaunchSpecification {
  SecurityGroupIds?: Array<string>;
  SecurityGroups?: Array<string>;
  AddressingType?: string;
  BlockDeviceMappings?: Array<BlockDeviceMapping>;
  EbsOptimized?: boolean;
  IamInstanceProfile?: IamInstanceProfileSpecification;
  ImageId?: string;
  InstanceType?: InstanceType;
  KernelId?: string;
  KeyName?: string;
  Monitoring?: RunInstancesMonitoringEnabled;
  NetworkInterfaces?: Array<InstanceNetworkInterfaceSpecification>;
  Placement?: SpotPlacement;
  RamdiskId?: string;
  SubnetId?: string;
  UserData?: string;
}
export type RequestSpotLaunchSpecificationSecurityGroupIdList = Array<string>;
export type RequestSpotLaunchSpecificationSecurityGroupList = Array<string>;
export interface Reservation {
  ReservationId?: string;
  OwnerId?: string;
  RequesterId?: string;
  Groups?: Array<GroupIdentifier>;
  Instances?: Array<Instance>;
}
export interface ReservationFleetInstanceSpecification {
  InstanceType?: InstanceType;
  InstancePlatform?: CapacityReservationInstancePlatform;
  Weight?: number;
  AvailabilityZone?: string;
  AvailabilityZoneId?: string;
  EbsOptimized?: boolean;
  Priority?: number;
}
export type ReservationFleetInstanceSpecificationList = Array<ReservationFleetInstanceSpecification>;
export type ReservationId = string;

export type ReservationList = Array<Reservation>;
export type ReservationState = "PAYMENT_PENDING" | "PAYMENT_FAILED" | "ACTIVE" | "RETIRED";
export interface ReservationValue {
  HourlyPrice?: string;
  RemainingTotalValue?: string;
  RemainingUpfrontValue?: string;
}
export type ReservedInstanceIdSet = Array<string>;
export interface ReservedInstanceLimitPrice {
  Amount?: number;
  CurrencyCode?: CurrencyCodeValues;
}
export interface ReservedInstanceReservationValue {
  ReservationValue?: ReservationValue;
  ReservedInstanceId?: string;
}
export type ReservedInstanceReservationValueSet = Array<ReservedInstanceReservationValue>;
export interface ReservedInstances {
  CurrencyCode?: CurrencyCodeValues;
  InstanceTenancy?: Tenancy;
  OfferingClass?: OfferingClassType;
  OfferingType?: OfferingTypeValues;
  RecurringCharges?: Array<RecurringCharge>;
  Scope?: scope;
  Tags?: Array<Tag>;
  AvailabilityZoneId?: string;
  ReservedInstancesId?: string;
  InstanceType?: InstanceType;
  AvailabilityZone?: string;
  Start?: Date | string;
  End?: Date | string;
  Duration?: number;
  UsagePrice?: number;
  FixedPrice?: number;
  InstanceCount?: number;
  ProductDescription?: RIProductDescription;
  State?: ReservedInstanceState;
}
export interface ReservedInstancesConfiguration {
  AvailabilityZone?: string;
  InstanceCount?: number;
  InstanceType?: InstanceType;
  Platform?: string;
  Scope?: scope;
  AvailabilityZoneId?: string;
}
export type ReservedInstancesConfigurationList = Array<ReservedInstancesConfiguration>;
export interface ReservedInstancesId {
  ReservedInstancesId?: string;
}
export type ReservedInstancesIdStringList = Array<string>;
export type ReservedInstancesList = Array<ReservedInstances>;
export interface ReservedInstancesListing {
  ClientToken?: string;
  CreateDate?: Date | string;
  InstanceCounts?: Array<InstanceCount>;
  PriceSchedules?: Array<PriceSchedule>;
  ReservedInstancesId?: string;
  ReservedInstancesListingId?: string;
  Status?: ListingStatus;
  StatusMessage?: string;
  Tags?: Array<Tag>;
  UpdateDate?: Date | string;
}
export type ReservedInstancesListingId = string;

export type ReservedInstancesListingList = Array<ReservedInstancesListing>;
export interface ReservedInstancesModification {
  ClientToken?: string;
  CreateDate?: Date | string;
  EffectiveDate?: Date | string;
  ModificationResults?: Array<ReservedInstancesModificationResult>;
  ReservedInstancesIds?: Array<ReservedInstancesId>;
  ReservedInstancesModificationId?: string;
  Status?: string;
  StatusMessage?: string;
  UpdateDate?: Date | string;
}
export type ReservedInstancesModificationId = string;

export type ReservedInstancesModificationIdStringList = Array<string>;
export type ReservedInstancesModificationList = Array<ReservedInstancesModification>;
export interface ReservedInstancesModificationResult {
  ReservedInstancesId?: string;
  TargetConfiguration?: ReservedInstancesConfiguration;
}
export type ReservedInstancesModificationResultList = Array<ReservedInstancesModificationResult>;
export interface ReservedInstancesOffering {
  CurrencyCode?: CurrencyCodeValues;
  InstanceTenancy?: Tenancy;
  Marketplace?: boolean;
  OfferingClass?: OfferingClassType;
  OfferingType?: OfferingTypeValues;
  PricingDetails?: Array<PricingDetail>;
  RecurringCharges?: Array<RecurringCharge>;
  Scope?: scope;
  AvailabilityZoneId?: string;
  ReservedInstancesOfferingId?: string;
  InstanceType?: InstanceType;
  AvailabilityZone?: string;
  Duration?: number;
  UsagePrice?: number;
  FixedPrice?: number;
  ProductDescription?: RIProductDescription;
}
export type ReservedInstancesOfferingId = string;

export type ReservedInstancesOfferingIdStringList = Array<string>;
export type ReservedInstancesOfferingList = Array<ReservedInstancesOffering>;
export type ReservedInstanceState = "payment_pending" | "active" | "payment_failed" | "retired" | "queued" | "queued_deleted";
export type ReservedIntancesIds = Array<ReservedInstancesId>;
export interface ResetAddressAttributeRequest {
  AllocationId: string;
  Attribute: AddressAttributeName;
  DryRun?: boolean;
}
export interface ResetAddressAttributeResult {
  Address?: AddressAttribute;
}
export interface ResetEbsDefaultKmsKeyIdRequest {
  DryRun?: boolean;
}
export interface ResetEbsDefaultKmsKeyIdResult {
  KmsKeyId?: string;
}
export type ResetFpgaImageAttributeName = "loadPermission";
export interface ResetFpgaImageAttributeRequest {
  DryRun?: boolean;
  FpgaImageId: string;
  Attribute?: ResetFpgaImageAttributeName;
}
export interface ResetFpgaImageAttributeResult {
  Return?: boolean;
}
export type ResetImageAttributeName = "launchPermission";
export interface ResetImageAttributeRequest {
  Attribute: ResetImageAttributeName;
  ImageId: string;
  DryRun?: boolean;
}
export interface ResetInstanceAttributeRequest {
  DryRun?: boolean;
  InstanceId: string;
  Attribute: InstanceAttributeName;
}
export interface ResetNetworkInterfaceAttributeRequest {
  DryRun?: boolean;
  NetworkInterfaceId: string;
  SourceDestCheck?: string;
}
export interface ResetSnapshotAttributeRequest {
  Attribute: SnapshotAttributeName;
  SnapshotId: string;
  DryRun?: boolean;
}
export type ResourceArn = string;

export type ResourceConfigurationArn = string;

export type ResourceIdList = Array<string>;
export type ResourceList = Array<string>;
export interface ResourceStatement {
  Resources?: Array<string>;
  ResourceTypes?: Array<string>;
}
export interface ResourceStatementRequest {
  Resources?: Array<string>;
  ResourceTypes?: Array<string>;
}
export type ResourceType = "capacity_reservation" | "client_vpn_endpoint" | "customer_gateway" | "carrier_gateway" | "coip_pool" | "declarative_policies_report" | "dedicated_host" | "dhcp_options" | "egress_only_internet_gateway" | "elastic_ip" | "elastic_gpu" | "export_image_task" | "export_instance_task" | "fleet" | "fpga_image" | "host_reservation" | "image" | "import_image_task" | "import_snapshot_task" | "instance" | "instance_event_window" | "internet_gateway" | "ipam" | "ipam_pool" | "ipam_scope" | "ipv4pool_ec2" | "ipv6pool_ec2" | "key_pair" | "launch_template" | "local_gateway" | "local_gateway_route_table" | "local_gateway_virtual_interface" | "local_gateway_virtual_interface_group" | "local_gateway_route_table_vpc_association" | "local_gateway_route_table_virtual_interface_group_association" | "natgateway" | "network_acl" | "network_interface" | "network_insights_analysis" | "network_insights_path" | "network_insights_access_scope" | "network_insights_access_scope_analysis" | "outpost_lag" | "placement_group" | "prefix_list" | "replace_root_volume_task" | "reserved_instances" | "route_table" | "security_group" | "security_group_rule" | "service_link_virtual_interface" | "snapshot" | "spot_fleet_request" | "spot_instances_request" | "subnet" | "subnet_cidr_reservation" | "traffic_mirror_filter" | "traffic_mirror_session" | "traffic_mirror_target" | "transit_gateway" | "transit_gateway_attachment" | "transit_gateway_connect_peer" | "transit_gateway_multicast_domain" | "transit_gateway_policy_table" | "transit_gateway_route_table" | "transit_gateway_route_table_announcement" | "volume" | "vpc" | "vpc_endpoint" | "vpc_endpoint_connection" | "vpc_endpoint_service" | "vpc_endpoint_service_permission" | "vpc_peering_connection" | "vpn_connection" | "vpn_gateway" | "vpc_flow_log" | "capacity_reservation_fleet" | "traffic_mirror_filter_rule" | "vpc_endpoint_connection_device_type" | "verified_access_instance" | "verified_access_group" | "verified_access_endpoint" | "verified_access_policy" | "verified_access_trust_provider" | "vpn_connection_device_type" | "vpc_block_public_access_exclusion" | "route_server" | "route_server_endpoint" | "route_server_peer" | "ipam_resource_discovery" | "ipam_resource_discovery_association" | "instance_connect_endpoint" | "verified_access_endpoint_target" | "ipam_external_resource_verification_token" | "capacity_block" | "mac_modification_task";
export interface ResponseError {
  Code?: LaunchTemplateErrorCode;
  Message?: string;
}
export type ResponseHostIdList = Array<string>;
export type ResponseHostIdSet = Array<string>;
export interface ResponseLaunchTemplateData {
  KernelId?: string;
  EbsOptimized?: boolean;
  IamInstanceProfile?: LaunchTemplateIamInstanceProfileSpecification;
  BlockDeviceMappings?: Array<LaunchTemplateBlockDeviceMapping>;
  NetworkInterfaces?: Array<LaunchTemplateInstanceNetworkInterfaceSpecification>;
  ImageId?: string;
  InstanceType?: InstanceType;
  KeyName?: string;
  Monitoring?: LaunchTemplatesMonitoring;
  Placement?: LaunchTemplatePlacement;
  RamDiskId?: string;
  DisableApiTermination?: boolean;
  InstanceInitiatedShutdownBehavior?: ShutdownBehavior;
  UserData?: string;
  TagSpecifications?: Array<LaunchTemplateTagSpecification>;
  ElasticGpuSpecifications?: Array<ElasticGpuSpecificationResponse>;
  ElasticInferenceAccelerators?: Array<LaunchTemplateElasticInferenceAcceleratorResponse>;
  SecurityGroupIds?: Array<string>;
  SecurityGroups?: Array<string>;
  InstanceMarketOptions?: LaunchTemplateInstanceMarketOptions;
  CreditSpecification?: CreditSpecification;
  CpuOptions?: LaunchTemplateCpuOptions;
  CapacityReservationSpecification?: LaunchTemplateCapacityReservationSpecificationResponse;
  LicenseSpecifications?: Array<LaunchTemplateLicenseConfiguration>;
  HibernationOptions?: LaunchTemplateHibernationOptions;
  MetadataOptions?: LaunchTemplateInstanceMetadataOptions;
  EnclaveOptions?: LaunchTemplateEnclaveOptions;
  InstanceRequirements?: InstanceRequirements;
  PrivateDnsNameOptions?: LaunchTemplatePrivateDnsNameOptions;
  MaintenanceOptions?: LaunchTemplateInstanceMaintenanceOptions;
  DisableApiStop?: boolean;
  Operator?: OperatorResponse;
  NetworkPerformanceOptions?: LaunchTemplateNetworkPerformanceOptions;
}
export type RestorableByStringList = Array<string>;
export interface RestoreAddressToClassicRequest {
  DryRun?: boolean;
  PublicIp: string;
}
export interface RestoreAddressToClassicResult {
  PublicIp?: string;
  Status?: Status;
}
export interface RestoreImageFromRecycleBinRequest {
  ImageId: string;
  DryRun?: boolean;
}
export interface RestoreImageFromRecycleBinResult {
  Return?: boolean;
}
export interface RestoreManagedPrefixListVersionRequest {
  DryRun?: boolean;
  PrefixListId: string;
  PreviousVersion: number;
  CurrentVersion: number;
}
export interface RestoreManagedPrefixListVersionResult {
  PrefixList?: ManagedPrefixList;
}
export interface RestoreSnapshotFromRecycleBinRequest {
  SnapshotId: string;
  DryRun?: boolean;
}
export interface RestoreSnapshotFromRecycleBinResult {
  SnapshotId?: string;
  OutpostArn?: string;
  Description?: string;
  Encrypted?: boolean;
  OwnerId?: string;
  Progress?: string;
  StartTime?: Date | string;
  State?: SnapshotState;
  VolumeId?: string;
  VolumeSize?: number;
  SseType?: SSEType;
}
export interface RestoreSnapshotTierRequest {
  SnapshotId: string;
  TemporaryRestoreDays?: number;
  PermanentRestore?: boolean;
  DryRun?: boolean;
}
export type RestoreSnapshotTierRequestTemporaryRestoreDays = number;

export interface RestoreSnapshotTierResult {
  SnapshotId?: string;
  RestoreStartTime?: Date | string;
  RestoreDuration?: number;
  IsPermanentRestore?: boolean;
}
export type ResultRange = number;

export type RetentionPeriodRequestDays = number;

export type RetentionPeriodResponseDays = number;

export interface RevokeClientVpnIngressRequest {
  ClientVpnEndpointId: string;
  TargetNetworkCidr: string;
  AccessGroupId?: string;
  RevokeAllGroups?: boolean;
  DryRun?: boolean;
}
export interface RevokeClientVpnIngressResult {
  Status?: ClientVpnAuthorizationRuleStatus;
}
export interface RevokedSecurityGroupRule {
  SecurityGroupRuleId?: string;
  GroupId?: string;
  IsEgress?: boolean;
  IpProtocol?: string;
  FromPort?: number;
  ToPort?: number;
  CidrIpv4?: string;
  CidrIpv6?: string;
  PrefixListId?: string;
  ReferencedGroupId?: string;
  Description?: string;
}
export type RevokedSecurityGroupRuleList = Array<RevokedSecurityGroupRule>;
export interface RevokeSecurityGroupEgressRequest {
  SecurityGroupRuleIds?: Array<string>;
  DryRun?: boolean;
  GroupId: string;
  SourceSecurityGroupName?: string;
  SourceSecurityGroupOwnerId?: string;
  IpProtocol?: string;
  FromPort?: number;
  ToPort?: number;
  CidrIp?: string;
  IpPermissions?: Array<IpPermission>;
}
export interface RevokeSecurityGroupEgressResult {
  Return?: boolean;
  UnknownIpPermissions?: Array<IpPermission>;
  RevokedSecurityGroupRules?: Array<RevokedSecurityGroupRule>;
}
export interface RevokeSecurityGroupIngressRequest {
  CidrIp?: string;
  FromPort?: number;
  GroupId?: string;
  GroupName?: string;
  IpPermissions?: Array<IpPermission>;
  IpProtocol?: string;
  SourceSecurityGroupName?: string;
  SourceSecurityGroupOwnerId?: string;
  ToPort?: number;
  SecurityGroupRuleIds?: Array<string>;
  DryRun?: boolean;
}
export interface RevokeSecurityGroupIngressResult {
  Return?: boolean;
  UnknownIpPermissions?: Array<IpPermission>;
  RevokedSecurityGroupRules?: Array<RevokedSecurityGroupRule>;
}
export type RIProductDescription = "Linux_UNIX" | "Linux_UNIX_Amazon_VPC_" | "Windows" | "Windows_Amazon_VPC_";
export type RoleId = string;

export type RootDeviceType = "ebs" | "instance_store";
export type RootDeviceTypeList = Array<RootDeviceType>;
export interface Route {
  DestinationCidrBlock?: string;
  DestinationIpv6CidrBlock?: string;
  DestinationPrefixListId?: string;
  EgressOnlyInternetGatewayId?: string;
  GatewayId?: string;
  InstanceId?: string;
  InstanceOwnerId?: string;
  NatGatewayId?: string;
  TransitGatewayId?: string;
  LocalGatewayId?: string;
  CarrierGatewayId?: string;
  NetworkInterfaceId?: string;
  Origin?: RouteOrigin;
  State?: RouteState;
  VpcPeeringConnectionId?: string;
  CoreNetworkArn?: string;
  OdbNetworkArn?: string;
}
export type RouteGatewayId = string;

export type RouteList = Array<Route>;
export type RouteOrigin = "CreateRouteTable" | "CreateRoute" | "EnableVgwRoutePropagation";
export interface RouteServer {
  RouteServerId?: string;
  AmazonSideAsn?: number;
  State?: RouteServerState;
  Tags?: Array<Tag>;
  PersistRoutesState?: RouteServerPersistRoutesState;
  PersistRoutesDuration?: number;
  SnsNotificationsEnabled?: boolean;
  SnsTopicArn?: string;
}
export interface RouteServerAssociation {
  RouteServerId?: string;
  VpcId?: string;
  State?: RouteServerAssociationState;
}
export type RouteServerAssociationsList = Array<RouteServerAssociation>;
export type RouteServerAssociationState = "ASSOCIATING" | "ASSOCIATED" | "DISASSOCIATING";
export type RouteServerBfdState = "UP" | "DOWN";
export interface RouteServerBfdStatus {
  Status?: RouteServerBfdState;
}
export interface RouteServerBgpOptions {
  PeerAsn?: number;
  PeerLivenessDetection?: RouteServerPeerLivenessMode;
}
export interface RouteServerBgpOptionsRequest {
  PeerAsn: number;
  PeerLivenessDetection?: RouteServerPeerLivenessMode;
}
export type RouteServerBgpState = "UP" | "DOWN";
export interface RouteServerBgpStatus {
  Status?: RouteServerBgpState;
}
export interface RouteServerEndpoint {
  RouteServerId?: string;
  RouteServerEndpointId?: string;
  VpcId?: string;
  SubnetId?: string;
  EniId?: string;
  EniAddress?: string;
  State?: RouteServerEndpointState;
  FailureReason?: string;
  Tags?: Array<Tag>;
}
export type RouteServerEndpointId = string;

export type RouteServerEndpointIdsList = Array<string>;
export type RouteServerEndpointsList = Array<RouteServerEndpoint>;
export type RouteServerEndpointState = "PENDING" | "AVAILABLE" | "DELETING" | "DELETED" | "FAILING" | "FAILED" | "DELETE_FAILED";
export type RouteServerId = string;

export type RouteServerIdsList = Array<string>;
export type RouteServerMaxResults = number;

export interface RouteServerPeer {
  RouteServerPeerId?: string;
  RouteServerEndpointId?: string;
  RouteServerId?: string;
  VpcId?: string;
  SubnetId?: string;
  State?: RouteServerPeerState;
  FailureReason?: string;
  EndpointEniId?: string;
  EndpointEniAddress?: string;
  PeerAddress?: string;
  BgpOptions?: RouteServerBgpOptions;
  BgpStatus?: RouteServerBgpStatus;
  BfdStatus?: RouteServerBfdStatus;
  Tags?: Array<Tag>;
}
export type RouteServerPeerId = string;

export type RouteServerPeerIdsList = Array<string>;
export type RouteServerPeerLivenessMode = "BFD" | "BGP_KEEPALIVE";
export type RouteServerPeersList = Array<RouteServerPeer>;
export type RouteServerPeerState = "PENDING" | "AVAILABLE" | "DELETING" | "DELETED" | "FAILING" | "FAILED";
export type RouteServerPersistRoutesAction = "ENABLE" | "DISABLE" | "RESET";
export type RouteServerPersistRoutesState = "ENABLING" | "ENABLED" | "RESETTING" | "DISABLING" | "DISABLED" | "MODIFYING";
export interface RouteServerPropagation {
  RouteServerId?: string;
  RouteTableId?: string;
  State?: RouteServerPropagationState;
}
export type RouteServerPropagationsList = Array<RouteServerPropagation>;
export type RouteServerPropagationState = "PENDING" | "AVAILABLE" | "DELETING";
export interface RouteServerRoute {
  RouteServerEndpointId?: string;
  RouteServerPeerId?: string;
  RouteInstallationDetails?: Array<RouteServerRouteInstallationDetail>;
  RouteStatus?: RouteServerRouteStatus;
  Prefix?: string;
  AsPaths?: Array<string>;
  Med?: number;
  NextHopIp?: string;
}
export interface RouteServerRouteInstallationDetail {
  RouteTableId?: string;
  RouteInstallationStatus?: RouteServerRouteInstallationStatus;
  RouteInstallationStatusReason?: string;
}
export type RouteServerRouteInstallationDetails = Array<RouteServerRouteInstallationDetail>;
export type RouteServerRouteInstallationStatus = "INSTALLED" | "REJECTED";
export type RouteServerRouteList = Array<RouteServerRoute>;
export type RouteServerRouteStatus = "IN_RIB" | "IN_FIB";
export type RouteServersList = Array<RouteServer>;
export type RouteServerState = "PENDING" | "AVAILABLE" | "MODIFYING" | "DELETING" | "DELETED";
export type RouteState = "active" | "blackhole";
export interface RouteTable {
  Associations?: Array<RouteTableAssociation>;
  PropagatingVgws?: Array<PropagatingVgw>;
  RouteTableId?: string;
  Routes?: Array<Route>;
  Tags?: Array<Tag>;
  VpcId?: string;
  OwnerId?: string;
}
export interface RouteTableAssociation {
  Main?: boolean;
  RouteTableAssociationId?: string;
  RouteTableId?: string;
  SubnetId?: string;
  GatewayId?: string;
  AssociationState?: RouteTableAssociationState;
}
export type RouteTableAssociationId = string;

export type RouteTableAssociationList = Array<RouteTableAssociation>;
export interface RouteTableAssociationState {
  State?: RouteTableAssociationStateCode;
  StatusMessage?: string;
}
export type RouteTableAssociationStateCode = "associating" | "associated" | "disassociating" | "disassociated" | "failed";
export type RouteTableId = string;

export type RouteTableIdStringList = Array<string>;
export type RouteTableList = Array<RouteTable>;
export type RuleAction = "allow" | "deny";
export interface RuleGroupRuleOptionsPair {
  RuleGroupArn?: string;
  RuleOptions?: Array<RuleOption>;
}
export type RuleGroupRuleOptionsPairList = Array<RuleGroupRuleOptionsPair>;
export interface RuleGroupTypePair {
  RuleGroupArn?: string;
  RuleGroupType?: string;
}
export type RuleGroupTypePairList = Array<RuleGroupTypePair>;
export interface RuleOption {
  Keyword?: string;
  Settings?: Array<string>;
}
export type RuleOptionList = Array<RuleOption>;
export interface RunInstancesMonitoringEnabled {
  Enabled: boolean;
}
export interface RunInstancesRequest {
  BlockDeviceMappings?: Array<BlockDeviceMapping>;
  ImageId?: string;
  InstanceType?: InstanceType;
  Ipv6AddressCount?: number;
  Ipv6Addresses?: Array<InstanceIpv6Address>;
  KernelId?: string;
  KeyName?: string;
  MaxCount: number;
  MinCount: number;
  Monitoring?: RunInstancesMonitoringEnabled;
  Placement?: Placement;
  RamdiskId?: string;
  SecurityGroupIds?: Array<string>;
  SecurityGroups?: Array<string>;
  SubnetId?: string;
  UserData?: string;
  ElasticGpuSpecification?: Array<ElasticGpuSpecification>;
  ElasticInferenceAccelerators?: Array<ElasticInferenceAccelerator>;
  TagSpecifications?: Array<TagSpecification>;
  LaunchTemplate?: LaunchTemplateSpecification;
  InstanceMarketOptions?: InstanceMarketOptionsRequest;
  CreditSpecification?: CreditSpecificationRequest;
  CpuOptions?: CpuOptionsRequest;
  CapacityReservationSpecification?: CapacityReservationSpecification;
  HibernationOptions?: HibernationOptionsRequest;
  LicenseSpecifications?: Array<LicenseConfigurationRequest>;
  MetadataOptions?: InstanceMetadataOptionsRequest;
  EnclaveOptions?: EnclaveOptionsRequest;
  PrivateDnsNameOptions?: PrivateDnsNameOptionsRequest;
  MaintenanceOptions?: InstanceMaintenanceOptionsRequest;
  DisableApiStop?: boolean;
  EnablePrimaryIpv6?: boolean;
  NetworkPerformanceOptions?: InstanceNetworkPerformanceOptionsRequest;
  Operator?: OperatorRequest;
  DryRun?: boolean;
  DisableApiTermination?: boolean;
  InstanceInitiatedShutdownBehavior?: ShutdownBehavior;
  PrivateIpAddress?: string;
  ClientToken?: string;
  AdditionalInfo?: string;
  NetworkInterfaces?: Array<InstanceNetworkInterfaceSpecification>;
  IamInstanceProfile?: IamInstanceProfileSpecification;
  EbsOptimized?: boolean;
}
export type RunInstancesUserData = string;

export interface RunScheduledInstancesRequest {
  ClientToken?: string;
  DryRun?: boolean;
  InstanceCount?: number;
  LaunchSpecification: ScheduledInstancesLaunchSpecification;
  ScheduledInstanceId: string;
}
export interface RunScheduledInstancesResult {
  InstanceIdSet?: Array<string>;
}
export interface S3ObjectTag {
  Key?: string;
  Value?: string;
}
export type S3ObjectTagList = Array<S3ObjectTag>;
export interface S3Storage {
  AWSAccessKeyId?: string;
  Bucket?: string;
  Prefix?: string;
  UploadPolicy?: Uint8Array | string;
  UploadPolicySignature?: string;
}
export type S3StorageUploadPolicySignature = string;

export interface ScheduledInstance {
  AvailabilityZone?: string;
  CreateDate?: Date | string;
  HourlyPrice?: string;
  InstanceCount?: number;
  InstanceType?: string;
  NetworkPlatform?: string;
  NextSlotStartTime?: Date | string;
  Platform?: string;
  PreviousSlotEndTime?: Date | string;
  Recurrence?: ScheduledInstanceRecurrence;
  ScheduledInstanceId?: string;
  SlotDurationInHours?: number;
  TermEndDate?: Date | string;
  TermStartDate?: Date | string;
  TotalScheduledInstanceHours?: number;
}
export interface ScheduledInstanceAvailability {
  AvailabilityZone?: string;
  AvailableInstanceCount?: number;
  FirstSlotStartTime?: Date | string;
  HourlyPrice?: string;
  InstanceType?: string;
  MaxTermDurationInDays?: number;
  MinTermDurationInDays?: number;
  NetworkPlatform?: string;
  Platform?: string;
  PurchaseToken?: string;
  Recurrence?: ScheduledInstanceRecurrence;
  SlotDurationInHours?: number;
  TotalScheduledInstanceHours?: number;
}
export type ScheduledInstanceAvailabilitySet = Array<ScheduledInstanceAvailability>;
export type ScheduledInstanceId = string;

export type ScheduledInstanceIdRequestSet = Array<string>;
export interface ScheduledInstanceRecurrence {
  Frequency?: string;
  Interval?: number;
  OccurrenceDaySet?: Array<number>;
  OccurrenceRelativeToEnd?: boolean;
  OccurrenceUnit?: string;
}
export interface ScheduledInstanceRecurrenceRequest {
  Frequency?: string;
  Interval?: number;
  OccurrenceDays?: Array<number>;
  OccurrenceRelativeToEnd?: boolean;
  OccurrenceUnit?: string;
}
export interface ScheduledInstancesBlockDeviceMapping {
  DeviceName?: string;
  Ebs?: ScheduledInstancesEbs;
  NoDevice?: string;
  VirtualName?: string;
}
export type ScheduledInstancesBlockDeviceMappingSet = Array<ScheduledInstancesBlockDeviceMapping>;
export interface ScheduledInstancesEbs {
  DeleteOnTermination?: boolean;
  Encrypted?: boolean;
  Iops?: number;
  SnapshotId?: string;
  VolumeSize?: number;
  VolumeType?: string;
}
export type ScheduledInstanceSet = Array<ScheduledInstance>;
export interface ScheduledInstancesIamInstanceProfile {
  Arn?: string;
  Name?: string;
}
export interface ScheduledInstancesIpv6Address {
  Ipv6Address?: string;
}
export type ScheduledInstancesIpv6AddressList = Array<ScheduledInstancesIpv6Address>;
export interface ScheduledInstancesLaunchSpecification {
  BlockDeviceMappings?: Array<ScheduledInstancesBlockDeviceMapping>;
  EbsOptimized?: boolean;
  IamInstanceProfile?: ScheduledInstancesIamInstanceProfile;
  ImageId: string;
  InstanceType?: string;
  KernelId?: string;
  KeyName?: string;
  Monitoring?: ScheduledInstancesMonitoring;
  NetworkInterfaces?: Array<ScheduledInstancesNetworkInterface>;
  Placement?: ScheduledInstancesPlacement;
  RamdiskId?: string;
  SecurityGroupIds?: Array<string>;
  SubnetId?: string;
  UserData?: string;
}
export interface ScheduledInstancesMonitoring {
  Enabled?: boolean;
}
export interface ScheduledInstancesNetworkInterface {
  AssociatePublicIpAddress?: boolean;
  DeleteOnTermination?: boolean;
  Description?: string;
  DeviceIndex?: number;
  Groups?: Array<string>;
  Ipv6AddressCount?: number;
  Ipv6Addresses?: Array<ScheduledInstancesIpv6Address>;
  NetworkInterfaceId?: string;
  PrivateIpAddress?: string;
  PrivateIpAddressConfigs?: Array<ScheduledInstancesPrivateIpAddressConfig>;
  SecondaryPrivateIpAddressCount?: number;
  SubnetId?: string;
}
export type ScheduledInstancesNetworkInterfaceSet = Array<ScheduledInstancesNetworkInterface>;
export interface ScheduledInstancesPlacement {
  AvailabilityZone?: string;
  GroupName?: string;
}
export interface ScheduledInstancesPrivateIpAddressConfig {
  Primary?: boolean;
  PrivateIpAddress?: string;
}
export type ScheduledInstancesSecurityGroupIdSet = Array<string>;
export type scope = "AVAILABILITY_ZONE" | "REGIONAL";
export interface SearchLocalGatewayRoutesRequest {
  LocalGatewayRouteTableId: string;
  Filters?: Array<Filter>;
  MaxResults?: number;
  NextToken?: string;
  DryRun?: boolean;
}
export interface SearchLocalGatewayRoutesResult {
  Routes?: Array<LocalGatewayRoute>;
  NextToken?: string;
}
export interface SearchTransitGatewayMulticastGroupsRequest {
  TransitGatewayMulticastDomainId: string;
  Filters?: Array<Filter>;
  MaxResults?: number;
  NextToken?: string;
  DryRun?: boolean;
}
export interface SearchTransitGatewayMulticastGroupsResult {
  MulticastGroups?: Array<TransitGatewayMulticastGroup>;
  NextToken?: string;
}
export interface SearchTransitGatewayRoutesRequest {
  TransitGatewayRouteTableId: string;
  Filters: Array<Filter>;
  MaxResults?: number;
  DryRun?: boolean;
}
export interface SearchTransitGatewayRoutesResult {
  Routes?: Array<TransitGatewayRoute>;
  AdditionalRoutesAvailable?: boolean;
}
export interface SecurityGroup {
  GroupId?: string;
  IpPermissionsEgress?: Array<IpPermission>;
  Tags?: Array<Tag>;
  VpcId?: string;
  SecurityGroupArn?: string;
  OwnerId?: string;
  GroupName?: string;
  Description?: string;
  IpPermissions?: Array<IpPermission>;
}
export interface SecurityGroupForVpc {
  Description?: string;
  GroupName?: string;
  OwnerId?: string;
  GroupId?: string;
  Tags?: Array<Tag>;
  PrimaryVpcId?: string;
}
export type SecurityGroupForVpcList = Array<SecurityGroupForVpc>;
export type SecurityGroupId = string;

export interface SecurityGroupIdentifier {
  GroupId?: string;
  GroupName?: string;
}
export type SecurityGroupIdList = Array<string>;
export type SecurityGroupIdSet = Array<string>;
export type SecurityGroupIdStringList = Array<string>;
export type SecurityGroupIdStringListRequest = Array<string>;
export type SecurityGroupList = Array<SecurityGroup>;
export type SecurityGroupName = string;

export interface SecurityGroupReference {
  GroupId?: string;
  ReferencingVpcId?: string;
  VpcPeeringConnectionId?: string;
  TransitGatewayId?: string;
}
export type SecurityGroupReferences = Array<SecurityGroupReference>;
export type SecurityGroupReferencingSupportValue = "enable" | "disable";
export interface SecurityGroupRule {
  SecurityGroupRuleId?: string;
  GroupId?: string;
  GroupOwnerId?: string;
  IsEgress?: boolean;
  IpProtocol?: string;
  FromPort?: number;
  ToPort?: number;
  CidrIpv4?: string;
  CidrIpv6?: string;
  PrefixListId?: string;
  ReferencedGroupInfo?: ReferencedSecurityGroup;
  Description?: string;
  Tags?: Array<Tag>;
  SecurityGroupRuleArn?: string;
}
export interface SecurityGroupRuleDescription {
  SecurityGroupRuleId?: string;
  Description?: string;
}
export type SecurityGroupRuleDescriptionList = Array<SecurityGroupRuleDescription>;
export type SecurityGroupRuleId = string;

export type SecurityGroupRuleIdList = Array<string>;
export type SecurityGroupRuleList = Array<SecurityGroupRule>;
export interface SecurityGroupRuleRequest {
  IpProtocol?: string;
  FromPort?: number;
  ToPort?: number;
  CidrIpv4?: string;
  CidrIpv6?: string;
  PrefixListId?: string;
  ReferencedGroupId?: string;
  Description?: string;
}
export interface SecurityGroupRuleUpdate {
  SecurityGroupRuleId: string;
  SecurityGroupRule?: SecurityGroupRuleRequest;
}
export type SecurityGroupRuleUpdateList = Array<SecurityGroupRuleUpdate>;
export type SecurityGroupStringList = Array<string>;
export interface SecurityGroupVpcAssociation {
  GroupId?: string;
  VpcId?: string;
  VpcOwnerId?: string;
  State?: SecurityGroupVpcAssociationState;
  StateReason?: string;
  GroupOwnerId?: string;
}
export type SecurityGroupVpcAssociationList = Array<SecurityGroupVpcAssociation>;
export type SecurityGroupVpcAssociationState = "associating" | "associated" | "association_failed" | "disassociating" | "disassociated" | "disassociation_failed";
export type SelfServicePortal = "enabled" | "disabled";
export interface SendDiagnosticInterruptRequest {
  InstanceId: string;
  DryRun?: boolean;
}
export type SensitiveMacCredentials = string;

export type SensitiveUrl = string;

export type SensitiveUserData = string;

export interface ServiceConfiguration {
  ServiceType?: Array<ServiceTypeDetail>;
  ServiceId?: string;
  ServiceName?: string;
  ServiceState?: ServiceState;
  AvailabilityZones?: Array<string>;
  AcceptanceRequired?: boolean;
  ManagesVpcEndpoints?: boolean;
  NetworkLoadBalancerArns?: Array<string>;
  GatewayLoadBalancerArns?: Array<string>;
  SupportedIpAddressTypes?: Array<ServiceConnectivityType>;
  BaseEndpointDnsNames?: Array<string>;
  PrivateDnsName?: string;
  PrivateDnsNameConfiguration?: PrivateDnsNameConfiguration;
  PayerResponsibility?: PayerResponsibility;
  Tags?: Array<Tag>;
  SupportedRegions?: Array<SupportedRegionDetail>;
  RemoteAccessEnabled?: boolean;
}
export type ServiceConfigurationSet = Array<ServiceConfiguration>;
export type ServiceConnectivityType = "ipv4" | "ipv6";
export interface ServiceDetail {
  ServiceName?: string;
  ServiceId?: string;
  ServiceType?: Array<ServiceTypeDetail>;
  ServiceRegion?: string;
  AvailabilityZones?: Array<string>;
  Owner?: string;
  BaseEndpointDnsNames?: Array<string>;
  PrivateDnsName?: string;
  PrivateDnsNames?: Array<PrivateDnsDetails>;
  VpcEndpointPolicySupported?: boolean;
  AcceptanceRequired?: boolean;
  ManagesVpcEndpoints?: boolean;
  PayerResponsibility?: PayerResponsibility;
  Tags?: Array<Tag>;
  PrivateDnsNameVerificationState?: DnsNameState;
  SupportedIpAddressTypes?: Array<ServiceConnectivityType>;
}
export type ServiceDetailSet = Array<ServiceDetail>;
export type ServiceLinkMaxResults = number;

export interface ServiceLinkVirtualInterface {
  ServiceLinkVirtualInterfaceId?: string;
  ServiceLinkVirtualInterfaceArn?: string;
  OutpostId?: string;
  OutpostArn?: string;
  OwnerId?: string;
  LocalAddress?: string;
  PeerAddress?: string;
  PeerBgpAsn?: number;
  Vlan?: number;
  OutpostLagId?: string;
  Tags?: Array<Tag>;
  ConfigurationState?: ServiceLinkVirtualInterfaceConfigurationState;
}
export type ServiceLinkVirtualInterfaceConfigurationState = "pending" | "available" | "deleting" | "deleted";
export type ServiceLinkVirtualInterfaceId = string;

export type ServiceLinkVirtualInterfaceIdSet = Array<string>;
export type ServiceLinkVirtualInterfaceSet = Array<ServiceLinkVirtualInterface>;
export type ServiceManaged = "alb" | "nlb" | "rnat";
export type ServiceNetworkArn = string;

export type ServiceState = "Pending" | "Available" | "Deleting" | "Deleted" | "Failed";
export type ServiceType = "Interface" | "Gateway" | "GatewayLoadBalancer";
export interface ServiceTypeDetail {
  ServiceType?: ServiceType;
}
export type ServiceTypeDetailSet = Array<ServiceTypeDetail>;
export type ShutdownBehavior = "stop" | "terminate";
export interface SlotDateTimeRangeRequest {
  EarliestTime: Date | string;
  LatestTime: Date | string;
}
export interface SlotStartTimeRangeRequest {
  EarliestTime?: Date | string;
  LatestTime?: Date | string;
}
export interface Snapshot {
  OwnerAlias?: string;
  OutpostArn?: string;
  Tags?: Array<Tag>;
  StorageTier?: StorageTier;
  RestoreExpiryTime?: Date | string;
  SseType?: SSEType;
  AvailabilityZone?: string;
  TransferType?: TransferType;
  CompletionDurationMinutes?: number;
  CompletionTime?: Date | string;
  FullSnapshotSizeInBytes?: number;
  SnapshotId?: string;
  VolumeId?: string;
  State?: SnapshotState;
  StateMessage?: string;
  StartTime?: Date | string;
  Progress?: string;
  OwnerId?: string;
  Description?: string;
  VolumeSize?: number;
  Encrypted?: boolean;
  KmsKeyId?: string;
  DataEncryptionKeyId?: string;
}
export type SnapshotAttributeName = "productCodes" | "createVolumePermission";
export type SnapshotBlockPublicAccessState = "block_all_sharing" | "block_new_sharing" | "unblocked";
export type SnapshotCompletionDurationMinutesRequest = number;

export type SnapshotCompletionDurationMinutesResponse = number;

export interface SnapshotDetail {
  Description?: string;
  DeviceName?: string;
  DiskImageSize?: number;
  Format?: string;
  Progress?: string;
  SnapshotId?: string;
  Status?: string;
  StatusMessage?: string;
  Url?: string;
  UserBucket?: UserBucketDetails;
}
export type SnapshotDetailList = Array<SnapshotDetail>;
export interface SnapshotDiskContainer {
  Description?: string;
  Format?: string;
  Url?: string;
  UserBucket?: UserBucket;
}
export type SnapshotId = string;

export type SnapshotIdStringList = Array<string>;
export interface SnapshotInfo {
  Description?: string;
  Tags?: Array<Tag>;
  Encrypted?: boolean;
  VolumeId?: string;
  State?: SnapshotState;
  VolumeSize?: number;
  StartTime?: Date | string;
  Progress?: string;
  OwnerId?: string;
  SnapshotId?: string;
  OutpostArn?: string;
  SseType?: SSEType;
  AvailabilityZone?: string;
}
export type SnapshotList = Array<Snapshot>;
export type SnapshotLocationEnum = "REGIONAL" | "LOCAL";
export interface SnapshotRecycleBinInfo {
  SnapshotId?: string;
  RecycleBinEnterTime?: Date | string;
  RecycleBinExitTime?: Date | string;
  Description?: string;
  VolumeId?: string;
}
export type SnapshotRecycleBinInfoList = Array<SnapshotRecycleBinInfo>;
export type SnapshotReturnCodes = "SUCCESS" | "WARN_SKIPPED" | "ERROR_MISSING_PERMISSIONS" | "ERROR_CODE_INTERNAL_ERROR" | "ERROR_CODE_CLIENT_ERROR";
export type SnapshotSet = Array<SnapshotInfo>;
export type SnapshotState = "pending" | "completed" | "error" | "recoverable" | "recovering";
export interface SnapshotTaskDetail {
  Description?: string;
  DiskImageSize?: number;
  Encrypted?: boolean;
  Format?: string;
  KmsKeyId?: string;
  Progress?: string;
  SnapshotId?: string;
  Status?: string;
  StatusMessage?: string;
  Url?: string;
  UserBucket?: UserBucketDetails;
}
export interface SnapshotTierStatus {
  SnapshotId?: string;
  VolumeId?: string;
  Status?: SnapshotState;
  OwnerId?: string;
  Tags?: Array<Tag>;
  StorageTier?: StorageTier;
  LastTieringStartTime?: Date | string;
  LastTieringProgress?: number;
  LastTieringOperationStatus?: TieringOperationStatus;
  LastTieringOperationStatusDetail?: string;
  ArchivalCompleteTime?: Date | string;
  RestoreExpiryTime?: Date | string;
}
export type snapshotTierStatusSet = Array<SnapshotTierStatus>;
export type SpotAllocationStrategy = "LOWEST_PRICE" | "DIVERSIFIED" | "CAPACITY_OPTIMIZED" | "CAPACITY_OPTIMIZED_PRIORITIZED" | "PRICE_CAPACITY_OPTIMIZED";
export interface SpotCapacityRebalance {
  ReplacementStrategy?: ReplacementStrategy;
  TerminationDelay?: number;
}
export interface SpotDatafeedSubscription {
  Bucket?: string;
  Fault?: SpotInstanceStateFault;
  OwnerId?: string;
  Prefix?: string;
  State?: DatafeedSubscriptionState;
}
export interface SpotFleetLaunchSpecification {
  AddressingType?: string;
  BlockDeviceMappings?: Array<BlockDeviceMapping>;
  EbsOptimized?: boolean;
  IamInstanceProfile?: IamInstanceProfileSpecification;
  ImageId?: string;
  InstanceType?: InstanceType;
  KernelId?: string;
  KeyName?: string;
  Monitoring?: SpotFleetMonitoring;
  NetworkInterfaces?: Array<InstanceNetworkInterfaceSpecification>;
  Placement?: SpotPlacement;
  RamdiskId?: string;
  SpotPrice?: string;
  SubnetId?: string;
  UserData?: string;
  WeightedCapacity?: number;
  TagSpecifications?: Array<SpotFleetTagSpecification>;
  InstanceRequirements?: InstanceRequirements;
  SecurityGroups?: Array<GroupIdentifier>;
}
export interface SpotFleetMonitoring {
  Enabled?: boolean;
}
export interface SpotFleetRequestConfig {
  ActivityStatus?: ActivityStatus;
  CreateTime?: Date | string;
  SpotFleetRequestConfig?: SpotFleetRequestConfigData;
  SpotFleetRequestId?: string;
  SpotFleetRequestState?: BatchState;
  Tags?: Array<Tag>;
}
export interface SpotFleetRequestConfigData {
  AllocationStrategy?: AllocationStrategy;
  OnDemandAllocationStrategy?: OnDemandAllocationStrategy;
  SpotMaintenanceStrategies?: SpotMaintenanceStrategies;
  ClientToken?: string;
  ExcessCapacityTerminationPolicy?: ExcessCapacityTerminationPolicy;
  FulfilledCapacity?: number;
  OnDemandFulfilledCapacity?: number;
  IamFleetRole: string;
  LaunchSpecifications?: Array<SpotFleetLaunchSpecification>;
  LaunchTemplateConfigs?: Array<LaunchTemplateConfig>;
  SpotPrice?: string;
  TargetCapacity: number;
  OnDemandTargetCapacity?: number;
  OnDemandMaxTotalPrice?: string;
  SpotMaxTotalPrice?: string;
  TerminateInstancesWithExpiration?: boolean;
  Type?: FleetType;
  ValidFrom?: Date | string;
  ValidUntil?: Date | string;
  ReplaceUnhealthyInstances?: boolean;
  InstanceInterruptionBehavior?: InstanceInterruptionBehavior;
  LoadBalancersConfig?: LoadBalancersConfig;
  InstancePoolsToUseCount?: number;
  Context?: string;
  TargetCapacityUnitType?: TargetCapacityUnitType;
  TagSpecifications?: Array<TagSpecification>;
}
export type SpotFleetRequestConfigSet = Array<SpotFleetRequestConfig>;
export type SpotFleetRequestId = string;

export type SpotFleetRequestIdList = Array<string>;
export interface SpotFleetTagSpecification {
  ResourceType?: ResourceType;
  Tags?: Array<Tag>;
}
export type SpotFleetTagSpecificationList = Array<SpotFleetTagSpecification>;
export type SpotInstanceInterruptionBehavior = "hibernate" | "stop" | "terminate";
export interface SpotInstanceRequest {
  ActualBlockHourlyPrice?: string;
  AvailabilityZoneGroup?: string;
  BlockDurationMinutes?: number;
  CreateTime?: Date | string;
  Fault?: SpotInstanceStateFault;
  InstanceId?: string;
  LaunchGroup?: string;
  LaunchSpecification?: LaunchSpecification;
  LaunchedAvailabilityZone?: string;
  ProductDescription?: RIProductDescription;
  SpotInstanceRequestId?: string;
  SpotPrice?: string;
  State?: SpotInstanceState;
  Status?: SpotInstanceStatus;
  Tags?: Array<Tag>;
  Type?: SpotInstanceType;
  ValidFrom?: Date | string;
  ValidUntil?: Date | string;
  InstanceInterruptionBehavior?: InstanceInterruptionBehavior;
}
export type SpotInstanceRequestId = string;

export type SpotInstanceRequestIdList = Array<string>;
export type SpotInstanceRequestList = Array<SpotInstanceRequest>;
export type SpotInstanceState = "open" | "active" | "closed" | "cancelled" | "failed" | "disabled";
export interface SpotInstanceStateFault {
  Code?: string;
  Message?: string;
}
export interface SpotInstanceStatus {
  Code?: string;
  Message?: string;
  UpdateTime?: Date | string;
}
export type SpotInstanceType = "one_time" | "persistent";
export interface SpotMaintenanceStrategies {
  CapacityRebalance?: SpotCapacityRebalance;
}
export interface SpotMarketOptions {
  MaxPrice?: string;
  SpotInstanceType?: SpotInstanceType;
  BlockDurationMinutes?: number;
  ValidUntil?: Date | string;
  InstanceInterruptionBehavior?: InstanceInterruptionBehavior;
}
export interface SpotOptions {
  AllocationStrategy?: SpotAllocationStrategy;
  MaintenanceStrategies?: FleetSpotMaintenanceStrategies;
  InstanceInterruptionBehavior?: SpotInstanceInterruptionBehavior;
  InstancePoolsToUseCount?: number;
  SingleInstanceType?: boolean;
  SingleAvailabilityZone?: boolean;
  MinTargetCapacity?: number;
  MaxTotalPrice?: string;
}
export interface SpotOptionsRequest {
  AllocationStrategy?: SpotAllocationStrategy;
  MaintenanceStrategies?: FleetSpotMaintenanceStrategiesRequest;
  InstanceInterruptionBehavior?: SpotInstanceInterruptionBehavior;
  InstancePoolsToUseCount?: number;
  SingleInstanceType?: boolean;
  SingleAvailabilityZone?: boolean;
  MinTargetCapacity?: number;
  MaxTotalPrice?: string;
}
export interface SpotPlacement {
  AvailabilityZone?: string;
  GroupName?: string;
  Tenancy?: Tenancy;
}
export interface SpotPlacementScore {
  Region?: string;
  AvailabilityZoneId?: string;
  Score?: number;
}
export type SpotPlacementScores = Array<SpotPlacementScore>;
export type SpotPlacementScoresMaxResults = number;

export type SpotPlacementScoresTargetCapacity = number;

export interface SpotPrice {
  AvailabilityZone?: string;
  InstanceType?: InstanceType;
  ProductDescription?: RIProductDescription;
  SpotPrice?: string;
  Timestamp?: Date | string;
}
export type SpotPriceHistoryList = Array<SpotPrice>;
export type SpreadLevel = "host" | "rack";
export type SSEType = "sse_ebs" | "sse_kms" | "none";
export interface StaleIpPermission {
  FromPort?: number;
  IpProtocol?: string;
  IpRanges?: Array<string>;
  PrefixListIds?: Array<string>;
  ToPort?: number;
  UserIdGroupPairs?: Array<UserIdGroupPair>;
}
export type StaleIpPermissionSet = Array<StaleIpPermission>;
export interface StaleSecurityGroup {
  Description?: string;
  GroupId?: string;
  GroupName?: string;
  StaleIpPermissions?: Array<StaleIpPermission>;
  StaleIpPermissionsEgress?: Array<StaleIpPermission>;
  VpcId?: string;
}
export type StaleSecurityGroupSet = Array<StaleSecurityGroup>;
export interface StartDeclarativePoliciesReportRequest {
  DryRun?: boolean;
  S3Bucket: string;
  S3Prefix?: string;
  TargetId: string;
  TagSpecifications?: Array<TagSpecification>;
}
export interface StartDeclarativePoliciesReportResult {
  ReportId?: string;
}
export interface StartInstancesRequest {
  InstanceIds: Array<string>;
  AdditionalInfo?: string;
  DryRun?: boolean;
}
export interface StartInstancesResult {
  StartingInstances?: Array<InstanceStateChange>;
}
export interface StartNetworkInsightsAccessScopeAnalysisRequest {
  NetworkInsightsAccessScopeId: string;
  DryRun?: boolean;
  TagSpecifications?: Array<TagSpecification>;
  ClientToken: string;
}
export interface StartNetworkInsightsAccessScopeAnalysisResult {
  NetworkInsightsAccessScopeAnalysis?: NetworkInsightsAccessScopeAnalysis;
}
export interface StartNetworkInsightsAnalysisRequest {
  NetworkInsightsPathId: string;
  AdditionalAccounts?: Array<string>;
  FilterInArns?: Array<string>;
  FilterOutArns?: Array<string>;
  DryRun?: boolean;
  TagSpecifications?: Array<TagSpecification>;
  ClientToken: string;
}
export interface StartNetworkInsightsAnalysisResult {
  NetworkInsightsAnalysis?: NetworkInsightsAnalysis;
}
export interface StartVpcEndpointServicePrivateDnsVerificationRequest {
  DryRun?: boolean;
  ServiceId: string;
}
export interface StartVpcEndpointServicePrivateDnsVerificationResult {
  ReturnValue?: boolean;
}
export type State = "PendingAcceptance" | "Pending" | "Available" | "Deleting" | "Deleted" | "Rejected" | "Failed" | "Expired" | "Partial";
export interface StateReason {
  Code?: string;
  Message?: string;
}
export type StaticSourcesSupportValue = "enable" | "disable";
export type StatisticType = "p50";
export type Status = "moveInProgress" | "inVpc" | "inClassic";
export type StatusName = "reachability";
export type StatusType = "passed" | "failed" | "insufficient_data" | "initializing";
export interface StopInstancesRequest {
  InstanceIds: Array<string>;
  Hibernate?: boolean;
  DryRun?: boolean;
  Force?: boolean;
}
export interface StopInstancesResult {
  StoppingInstances?: Array<InstanceStateChange>;
}
export interface Storage {
  S3?: S3Storage;
}
export interface StorageLocation {
  Bucket?: string;
  Key?: string;
}
export type StorageTier = "archive" | "standard";
export interface StoreImageTaskResult {
  AmiId?: string;
  TaskStartTime?: Date | string;
  Bucket?: string;
  S3objectKey?: string;
  ProgressPercentage?: number;
  StoreTaskState?: string;
  StoreTaskFailureReason?: string;
}
export type StoreImageTaskResultSet = Array<StoreImageTaskResult>;
export type StringList = Array<string>;
export type StringType = string;

export interface Subnet {
  AvailabilityZoneId?: string;
  EnableLniAtDeviceIndex?: number;
  MapCustomerOwnedIpOnLaunch?: boolean;
  CustomerOwnedIpv4Pool?: string;
  OwnerId?: string;
  AssignIpv6AddressOnCreation?: boolean;
  Ipv6CidrBlockAssociationSet?: Array<SubnetIpv6CidrBlockAssociation>;
  Tags?: Array<Tag>;
  SubnetArn?: string;
  OutpostArn?: string;
  EnableDns64?: boolean;
  Ipv6Native?: boolean;
  PrivateDnsNameOptionsOnLaunch?: PrivateDnsNameOptionsOnLaunch;
  BlockPublicAccessStates?: BlockPublicAccessStates;
  Type?: string;
  SubnetId?: string;
  State?: SubnetState;
  VpcId?: string;
  CidrBlock?: string;
  AvailableIpAddressCount?: number;
  AvailabilityZone?: string;
  DefaultForAz?: boolean;
  MapPublicIpOnLaunch?: boolean;
}
export interface SubnetAssociation {
  SubnetId?: string;
  State?: TransitGatewayMulitcastDomainAssociationState;
}
export type SubnetAssociationList = Array<SubnetAssociation>;
export type SubnetCidrAssociationId = string;

export interface SubnetCidrBlockState {
  State?: SubnetCidrBlockStateCode;
  StatusMessage?: string;
}
export type SubnetCidrBlockStateCode = "associating" | "associated" | "disassociating" | "disassociated" | "failing" | "failed";
export interface SubnetCidrReservation {
  SubnetCidrReservationId?: string;
  SubnetId?: string;
  Cidr?: string;
  ReservationType?: SubnetCidrReservationType;
  OwnerId?: string;
  Description?: string;
  Tags?: Array<Tag>;
}
export type SubnetCidrReservationId = string;

export type SubnetCidrReservationList = Array<SubnetCidrReservation>;
export type SubnetCidrReservationType = "prefix" | "explicit";
export interface SubnetConfiguration {
  SubnetId?: string;
  Ipv4?: string;
  Ipv6?: string;
}
export type SubnetConfigurationsList = Array<SubnetConfiguration>;
export type SubnetId = string;

export type SubnetIdList = Array<string>;
export type SubnetIdStringList = Array<string>;
export interface SubnetIpPrefixes {
  SubnetId?: string;
  IpPrefixes?: Array<string>;
}
export type SubnetIpPrefixesList = Array<SubnetIpPrefixes>;
export interface SubnetIpv6CidrBlockAssociation {
  AssociationId?: string;
  Ipv6CidrBlock?: string;
  Ipv6CidrBlockState?: SubnetCidrBlockState;
  Ipv6AddressAttribute?: Ipv6AddressAttribute;
  IpSource?: IpSource;
}
export type SubnetIpv6CidrBlockAssociationSet = Array<SubnetIpv6CidrBlockAssociation>;
export type SubnetList = Array<Subnet>;
export type SubnetState = "pending" | "available" | "unavailable" | "failed" | "failed_insufficient_capacity";
export interface Subscription {
  Source?: string;
  Destination?: string;
  Metric?: MetricType;
  Statistic?: StatisticType;
  Period?: PeriodType;
}
export type SubscriptionList = Array<Subscription>;
export interface SuccessfulInstanceCreditSpecificationItem {
  InstanceId?: string;
}
export type SuccessfulInstanceCreditSpecificationSet = Array<SuccessfulInstanceCreditSpecificationItem>;
export interface SuccessfulQueuedPurchaseDeletion {
  ReservedInstancesId?: string;
}
export type SuccessfulQueuedPurchaseDeletionSet = Array<SuccessfulQueuedPurchaseDeletion>;
export type SummaryStatus = "ok" | "impaired" | "insufficient_data" | "not_applicable" | "initializing";
export type SupportedAdditionalProcessorFeature = "AMD_SEV_SNP";
export type SupportedAdditionalProcessorFeatureList = Array<SupportedAdditionalProcessorFeature>;
export type SupportedIpAddressTypes = Array<ServiceConnectivityType>;
export interface SupportedRegionDetail {
  Region?: string;
  ServiceState?: string;
}
export type SupportedRegionSet = Array<SupportedRegionDetail>;
export interface Tag {
  Key?: string;
  Value?: string;
}
export interface TagDescription {
  Key?: string;
  ResourceId?: string;
  ResourceType?: ResourceType;
  Value?: string;
}
export type TagDescriptionList = Array<TagDescription>;
export type TaggableResourceId = string;

export type TagList = Array<Tag>;
export interface TagSpecification {
  ResourceType?: ResourceType;
  Tags?: Array<Tag>;
}
export type TagSpecificationList = Array<TagSpecification>;
export interface TargetCapacitySpecification {
  TotalTargetCapacity?: number;
  OnDemandTargetCapacity?: number;
  SpotTargetCapacity?: number;
  DefaultTargetCapacityType?: DefaultTargetCapacityType;
  TargetCapacityUnitType?: TargetCapacityUnitType;
}
export interface TargetCapacitySpecificationRequest {
  TotalTargetCapacity: number;
  OnDemandTargetCapacity?: number;
  SpotTargetCapacity?: number;
  DefaultTargetCapacityType?: DefaultTargetCapacityType;
  TargetCapacityUnitType?: TargetCapacityUnitType;
}
export type TargetCapacityUnitType = "VCPU" | "MEMORY_MIB" | "UNITS";
export interface TargetConfiguration {
  InstanceCount?: number;
  OfferingId?: string;
}
export interface TargetConfigurationRequest {
  InstanceCount?: number;
  OfferingId: string;
}
export type TargetConfigurationRequestSet = Array<TargetConfigurationRequest>;
export interface TargetGroup {
  Arn?: string;
}
export type TargetGroups = Array<TargetGroup>;
export interface TargetGroupsConfig {
  TargetGroups?: Array<TargetGroup>;
}
export interface TargetNetwork {
  AssociationId?: string;
  VpcId?: string;
  TargetNetworkId?: string;
  ClientVpnEndpointId?: string;
  Status?: AssociationStatus;
  SecurityGroups?: Array<string>;
}
export type TargetNetworkSet = Array<TargetNetwork>;
export interface TargetReservationValue {
  ReservationValue?: ReservationValue;
  TargetConfiguration?: TargetConfiguration;
}
export type TargetReservationValueSet = Array<TargetReservationValue>;
export type TargetStorageTier = "archive";
export type TelemetryStatus = "UP" | "DOWN";
export type Tenancy = "default" | "dedicated" | "host";
export interface TerminateClientVpnConnectionsRequest {
  ClientVpnEndpointId: string;
  ConnectionId?: string;
  Username?: string;
  DryRun?: boolean;
}
export interface TerminateClientVpnConnectionsResult {
  ClientVpnEndpointId?: string;
  Username?: string;
  ConnectionStatuses?: Array<TerminateConnectionStatus>;
}
export interface TerminateConnectionStatus {
  ConnectionId?: string;
  PreviousStatus?: ClientVpnConnectionStatus;
  CurrentStatus?: ClientVpnConnectionStatus;
}
export type TerminateConnectionStatusSet = Array<TerminateConnectionStatus>;
export interface TerminateInstancesRequest {
  InstanceIds: Array<string>;
  DryRun?: boolean;
}
export interface TerminateInstancesResult {
  TerminatingInstances?: Array<InstanceStateChange>;
}
export type ThreadsPerCore = number;

export type ThreadsPerCoreList = Array<number>;
export interface ThroughResourcesStatement {
  ResourceStatement?: ResourceStatement;
}
export type ThroughResourcesStatementList = Array<ThroughResourcesStatement>;
export interface ThroughResourcesStatementRequest {
  ResourceStatement?: ResourceStatementRequest;
}
export type ThroughResourcesStatementRequestList = Array<ThroughResourcesStatementRequest>;
export type TieringOperationStatus = "archival_in_progress" | "archival_completed" | "archival_failed" | "temporary_restore_in_progress" | "temporary_restore_completed" | "temporary_restore_failed" | "permanent_restore_in_progress" | "permanent_restore_completed" | "permanent_restore_failed";
export type TokenState = "valid" | "expired";
export type totalFpgaMemory = number;

export type totalGpuMemory = number;

export type totalInferenceMemory = number;

export interface TotalLocalStorageGB {
  Min?: number;
  Max?: number;
}
export interface TotalLocalStorageGBRequest {
  Min?: number;
  Max?: number;
}
export type TotalMediaMemory = number;

export type TotalNeuronMemory = number;

export type TpmSupportValues = "v2_0";
export type TrafficDirection = "ingress" | "egress";
export interface TrafficMirrorFilter {
  TrafficMirrorFilterId?: string;
  IngressFilterRules?: Array<TrafficMirrorFilterRule>;
  EgressFilterRules?: Array<TrafficMirrorFilterRule>;
  NetworkServices?: Array<TrafficMirrorNetworkService>;
  Description?: string;
  Tags?: Array<Tag>;
}
export type TrafficMirrorFilterId = string;

export type TrafficMirrorFilterIdList = Array<string>;
export interface TrafficMirrorFilterRule {
  TrafficMirrorFilterRuleId?: string;
  TrafficMirrorFilterId?: string;
  TrafficDirection?: TrafficDirection;
  RuleNumber?: number;
  RuleAction?: TrafficMirrorRuleAction;
  Protocol?: number;
  DestinationPortRange?: TrafficMirrorPortRange;
  SourcePortRange?: TrafficMirrorPortRange;
  DestinationCidrBlock?: string;
  SourceCidrBlock?: string;
  Description?: string;
  Tags?: Array<Tag>;
}
export type TrafficMirrorFilterRuleField = "destination_port_range" | "source_port_range" | "protocol" | "description";
export type TrafficMirrorFilterRuleFieldList = Array<TrafficMirrorFilterRuleField>;
export type TrafficMirrorFilterRuleIdList = Array<string>;
export type TrafficMirrorFilterRuleIdWithResolver = string;

export type TrafficMirrorFilterRuleList = Array<TrafficMirrorFilterRule>;
export type TrafficMirrorFilterRuleSet = Array<TrafficMirrorFilterRule>;
export type TrafficMirrorFilterSet = Array<TrafficMirrorFilter>;
export type TrafficMirroringMaxResults = number;

export type TrafficMirrorNetworkService = "amazon_dns";
export type TrafficMirrorNetworkServiceList = Array<TrafficMirrorNetworkService>;
export interface TrafficMirrorPortRange {
  FromPort?: number;
  ToPort?: number;
}
export interface TrafficMirrorPortRangeRequest {
  FromPort?: number;
  ToPort?: number;
}
export type TrafficMirrorRuleAction = "accept" | "reject";
export interface TrafficMirrorSession {
  TrafficMirrorSessionId?: string;
  TrafficMirrorTargetId?: string;
  TrafficMirrorFilterId?: string;
  NetworkInterfaceId?: string;
  OwnerId?: string;
  PacketLength?: number;
  SessionNumber?: number;
  VirtualNetworkId?: number;
  Description?: string;
  Tags?: Array<Tag>;
}
export type TrafficMirrorSessionField = "packet_length" | "description" | "virtual_network_id";
export type TrafficMirrorSessionFieldList = Array<TrafficMirrorSessionField>;
export type TrafficMirrorSessionId = string;

export type TrafficMirrorSessionIdList = Array<string>;
export type TrafficMirrorSessionSet = Array<TrafficMirrorSession>;
export interface TrafficMirrorTarget {
  TrafficMirrorTargetId?: string;
  NetworkInterfaceId?: string;
  NetworkLoadBalancerArn?: string;
  Type?: TrafficMirrorTargetType;
  Description?: string;
  OwnerId?: string;
  Tags?: Array<Tag>;
  GatewayLoadBalancerEndpointId?: string;
}
export type TrafficMirrorTargetId = string;

export type TrafficMirrorTargetIdList = Array<string>;
export type TrafficMirrorTargetSet = Array<TrafficMirrorTarget>;
export type TrafficMirrorTargetType = "network_interface" | "network_load_balancer" | "gateway_load_balancer_endpoint";
export type TrafficType = "ACCEPT" | "REJECT" | "ALL";
export type TransferType = "time_based" | "standard";
export type TransitAssociationGatewayId = string;

export interface TransitGateway {
  TransitGatewayId?: string;
  TransitGatewayArn?: string;
  State?: TransitGatewayState;
  OwnerId?: string;
  Description?: string;
  CreationTime?: Date | string;
  Options?: TransitGatewayOptions;
  Tags?: Array<Tag>;
}
export interface TransitGatewayAssociation {
  TransitGatewayRouteTableId?: string;
  TransitGatewayAttachmentId?: string;
  ResourceId?: string;
  ResourceType?: TransitGatewayAttachmentResourceType;
  State?: TransitGatewayAssociationState;
}
export type TransitGatewayAssociationState = "associating" | "associated" | "disassociating" | "disassociated";
export interface TransitGatewayAttachment {
  TransitGatewayAttachmentId?: string;
  TransitGatewayId?: string;
  TransitGatewayOwnerId?: string;
  ResourceOwnerId?: string;
  ResourceType?: TransitGatewayAttachmentResourceType;
  ResourceId?: string;
  State?: TransitGatewayAttachmentState;
  Association?: TransitGatewayAttachmentAssociation;
  CreationTime?: Date | string;
  Tags?: Array<Tag>;
}
export interface TransitGatewayAttachmentAssociation {
  TransitGatewayRouteTableId?: string;
  State?: TransitGatewayAssociationState;
}
export interface TransitGatewayAttachmentBgpConfiguration {
  TransitGatewayAsn?: number;
  PeerAsn?: number;
  TransitGatewayAddress?: string;
  PeerAddress?: string;
  BgpStatus?: BgpStatus;
}
export type TransitGatewayAttachmentBgpConfigurationList = Array<TransitGatewayAttachmentBgpConfiguration>;
export type TransitGatewayAttachmentId = string;

export type TransitGatewayAttachmentIdStringList = Array<string>;
export type TransitGatewayAttachmentList = Array<TransitGatewayAttachment>;
export interface TransitGatewayAttachmentPropagation {
  TransitGatewayRouteTableId?: string;
  State?: TransitGatewayPropagationState;
}
export type TransitGatewayAttachmentPropagationList = Array<TransitGatewayAttachmentPropagation>;
export type TransitGatewayAttachmentResourceType = "vpc" | "vpn" | "direct_connect_gateway" | "connect" | "peering" | "tgw_peering";
export type TransitGatewayAttachmentState = "initiating" | "initiatingRequest" | "pendingAcceptance" | "rollingBack" | "pending" | "available" | "modifying" | "deleting" | "deleted" | "failed" | "rejected" | "rejecting" | "failing";
export type TransitGatewayCidrBlockStringList = Array<string>;
export interface TransitGatewayConnect {
  TransitGatewayAttachmentId?: string;
  TransportTransitGatewayAttachmentId?: string;
  TransitGatewayId?: string;
  State?: TransitGatewayAttachmentState;
  CreationTime?: Date | string;
  Options?: TransitGatewayConnectOptions;
  Tags?: Array<Tag>;
}
export type TransitGatewayConnectList = Array<TransitGatewayConnect>;
export interface TransitGatewayConnectOptions {
  Protocol?: ProtocolValue;
}
export interface TransitGatewayConnectPeer {
  TransitGatewayAttachmentId?: string;
  TransitGatewayConnectPeerId?: string;
  State?: TransitGatewayConnectPeerState;
  CreationTime?: Date | string;
  ConnectPeerConfiguration?: TransitGatewayConnectPeerConfiguration;
  Tags?: Array<Tag>;
}
export interface TransitGatewayConnectPeerConfiguration {
  TransitGatewayAddress?: string;
  PeerAddress?: string;
  InsideCidrBlocks?: Array<string>;
  Protocol?: ProtocolValue;
  BgpConfigurations?: Array<TransitGatewayAttachmentBgpConfiguration>;
}
export type TransitGatewayConnectPeerId = string;

export type TransitGatewayConnectPeerIdStringList = Array<string>;
export type TransitGatewayConnectPeerList = Array<TransitGatewayConnectPeer>;
export type TransitGatewayConnectPeerState = "pending" | "available" | "deleting" | "deleted";
export interface TransitGatewayConnectRequestBgpOptions {
  PeerAsn?: number;
}
export type TransitGatewayId = string;

export type TransitGatewayIdStringList = Array<string>;
export type TransitGatewayList = Array<TransitGateway>;
export type TransitGatewayMaxResults = number;

export type TransitGatewayMulitcastDomainAssociationState = "pendingAcceptance" | "associating" | "associated" | "disassociating" | "disassociated" | "rejected" | "failed";
export interface TransitGatewayMulticastDeregisteredGroupMembers {
  TransitGatewayMulticastDomainId?: string;
  DeregisteredNetworkInterfaceIds?: Array<string>;
  GroupIpAddress?: string;
}
export interface TransitGatewayMulticastDeregisteredGroupSources {
  TransitGatewayMulticastDomainId?: string;
  DeregisteredNetworkInterfaceIds?: Array<string>;
  GroupIpAddress?: string;
}
export interface TransitGatewayMulticastDomain {
  TransitGatewayMulticastDomainId?: string;
  TransitGatewayId?: string;
  TransitGatewayMulticastDomainArn?: string;
  OwnerId?: string;
  Options?: TransitGatewayMulticastDomainOptions;
  State?: TransitGatewayMulticastDomainState;
  CreationTime?: Date | string;
  Tags?: Array<Tag>;
}
export interface TransitGatewayMulticastDomainAssociation {
  TransitGatewayAttachmentId?: string;
  ResourceId?: string;
  ResourceType?: TransitGatewayAttachmentResourceType;
  ResourceOwnerId?: string;
  Subnet?: SubnetAssociation;
}
export type TransitGatewayMulticastDomainAssociationList = Array<TransitGatewayMulticastDomainAssociation>;
export interface TransitGatewayMulticastDomainAssociations {
  TransitGatewayMulticastDomainId?: string;
  TransitGatewayAttachmentId?: string;
  ResourceId?: string;
  ResourceType?: TransitGatewayAttachmentResourceType;
  ResourceOwnerId?: string;
  Subnets?: Array<SubnetAssociation>;
}
export type TransitGatewayMulticastDomainId = string;

export type TransitGatewayMulticastDomainIdStringList = Array<string>;
export type TransitGatewayMulticastDomainList = Array<TransitGatewayMulticastDomain>;
export interface TransitGatewayMulticastDomainOptions {
  Igmpv2Support?: Igmpv2SupportValue;
  StaticSourcesSupport?: StaticSourcesSupportValue;
  AutoAcceptSharedAssociations?: AutoAcceptSharedAssociationsValue;
}
export type TransitGatewayMulticastDomainState = "pending" | "available" | "deleting" | "deleted";
export interface TransitGatewayMulticastGroup {
  GroupIpAddress?: string;
  TransitGatewayAttachmentId?: string;
  SubnetId?: string;
  ResourceId?: string;
  ResourceType?: TransitGatewayAttachmentResourceType;
  ResourceOwnerId?: string;
  NetworkInterfaceId?: string;
  GroupMember?: boolean;
  GroupSource?: boolean;
  MemberType?: MembershipType;
  SourceType?: MembershipType;
}
export type TransitGatewayMulticastGroupList = Array<TransitGatewayMulticastGroup>;
export interface TransitGatewayMulticastRegisteredGroupMembers {
  TransitGatewayMulticastDomainId?: string;
  RegisteredNetworkInterfaceIds?: Array<string>;
  GroupIpAddress?: string;
}
export interface TransitGatewayMulticastRegisteredGroupSources {
  TransitGatewayMulticastDomainId?: string;
  RegisteredNetworkInterfaceIds?: Array<string>;
  GroupIpAddress?: string;
}
export type TransitGatewayNetworkInterfaceIdList = Array<string>;
export interface TransitGatewayOptions {
  AmazonSideAsn?: number;
  TransitGatewayCidrBlocks?: Array<string>;
  AutoAcceptSharedAttachments?: AutoAcceptSharedAttachmentsValue;
  DefaultRouteTableAssociation?: DefaultRouteTableAssociationValue;
  AssociationDefaultRouteTableId?: string;
  DefaultRouteTablePropagation?: DefaultRouteTablePropagationValue;
  PropagationDefaultRouteTableId?: string;
  VpnEcmpSupport?: VpnEcmpSupportValue;
  DnsSupport?: DnsSupportValue;
  SecurityGroupReferencingSupport?: SecurityGroupReferencingSupportValue;
  MulticastSupport?: MulticastSupportValue;
}
export interface TransitGatewayPeeringAttachment {
  TransitGatewayAttachmentId?: string;
  AccepterTransitGatewayAttachmentId?: string;
  RequesterTgwInfo?: PeeringTgwInfo;
  AccepterTgwInfo?: PeeringTgwInfo;
  Options?: TransitGatewayPeeringAttachmentOptions;
  Status?: PeeringAttachmentStatus;
  State?: TransitGatewayAttachmentState;
  CreationTime?: Date | string;
  Tags?: Array<Tag>;
}
export type TransitGatewayPeeringAttachmentList = Array<TransitGatewayPeeringAttachment>;
export interface TransitGatewayPeeringAttachmentOptions {
  DynamicRouting?: DynamicRoutingValue;
}
export interface TransitGatewayPolicyRule {
  SourceCidrBlock?: string;
  SourcePortRange?: string;
  DestinationCidrBlock?: string;
  DestinationPortRange?: string;
  Protocol?: string;
  MetaData?: TransitGatewayPolicyRuleMetaData;
}
export interface TransitGatewayPolicyRuleMetaData {
  MetaDataKey?: string;
  MetaDataValue?: string;
}
export interface TransitGatewayPolicyTable {
  TransitGatewayPolicyTableId?: string;
  TransitGatewayId?: string;
  State?: TransitGatewayPolicyTableState;
  CreationTime?: Date | string;
  Tags?: Array<Tag>;
}
export interface TransitGatewayPolicyTableAssociation {
  TransitGatewayPolicyTableId?: string;
  TransitGatewayAttachmentId?: string;
  ResourceId?: string;
  ResourceType?: TransitGatewayAttachmentResourceType;
  State?: TransitGatewayAssociationState;
}
export type TransitGatewayPolicyTableAssociationList = Array<TransitGatewayPolicyTableAssociation>;
export interface TransitGatewayPolicyTableEntry {
  PolicyRuleNumber?: string;
  PolicyRule?: TransitGatewayPolicyRule;
  TargetRouteTableId?: string;
}
export type TransitGatewayPolicyTableEntryList = Array<TransitGatewayPolicyTableEntry>;
export type TransitGatewayPolicyTableId = string;

export type TransitGatewayPolicyTableIdStringList = Array<string>;
export type TransitGatewayPolicyTableList = Array<TransitGatewayPolicyTable>;
export type TransitGatewayPolicyTableState = "pending" | "available" | "deleting" | "deleted";
export interface TransitGatewayPrefixListAttachment {
  TransitGatewayAttachmentId?: string;
  ResourceType?: TransitGatewayAttachmentResourceType;
  ResourceId?: string;
}
export interface TransitGatewayPrefixListReference {
  TransitGatewayRouteTableId?: string;
  PrefixListId?: string;
  PrefixListOwnerId?: string;
  State?: TransitGatewayPrefixListReferenceState;
  Blackhole?: boolean;
  TransitGatewayAttachment?: TransitGatewayPrefixListAttachment;
}
export type TransitGatewayPrefixListReferenceSet = Array<TransitGatewayPrefixListReference>;
export type TransitGatewayPrefixListReferenceState = "pending" | "available" | "modifying" | "deleting";
export interface TransitGatewayPropagation {
  TransitGatewayAttachmentId?: string;
  ResourceId?: string;
  ResourceType?: TransitGatewayAttachmentResourceType;
  TransitGatewayRouteTableId?: string;
  State?: TransitGatewayPropagationState;
  TransitGatewayRouteTableAnnouncementId?: string;
}
export type TransitGatewayPropagationState = "enabling" | "enabled" | "disabling" | "disabled";
export interface TransitGatewayRequestOptions {
  AmazonSideAsn?: number;
  AutoAcceptSharedAttachments?: AutoAcceptSharedAttachmentsValue;
  DefaultRouteTableAssociation?: DefaultRouteTableAssociationValue;
  DefaultRouteTablePropagation?: DefaultRouteTablePropagationValue;
  VpnEcmpSupport?: VpnEcmpSupportValue;
  DnsSupport?: DnsSupportValue;
  SecurityGroupReferencingSupport?: SecurityGroupReferencingSupportValue;
  MulticastSupport?: MulticastSupportValue;
  TransitGatewayCidrBlocks?: Array<string>;
}
export interface TransitGatewayRoute {
  DestinationCidrBlock?: string;
  PrefixListId?: string;
  TransitGatewayRouteTableAnnouncementId?: string;
  TransitGatewayAttachments?: Array<TransitGatewayRouteAttachment>;
  Type?: TransitGatewayRouteType;
  State?: TransitGatewayRouteState;
}
export interface TransitGatewayRouteAttachment {
  ResourceId?: string;
  TransitGatewayAttachmentId?: string;
  ResourceType?: TransitGatewayAttachmentResourceType;
}
export type TransitGatewayRouteAttachmentList = Array<TransitGatewayRouteAttachment>;
export type TransitGatewayRouteList = Array<TransitGatewayRoute>;
export type TransitGatewayRouteState = "pending" | "active" | "blackhole" | "deleting" | "deleted";
export interface TransitGatewayRouteTable {
  TransitGatewayRouteTableId?: string;
  TransitGatewayId?: string;
  State?: TransitGatewayRouteTableState;
  DefaultAssociationRouteTable?: boolean;
  DefaultPropagationRouteTable?: boolean;
  CreationTime?: Date | string;
  Tags?: Array<Tag>;
}
export interface TransitGatewayRouteTableAnnouncement {
  TransitGatewayRouteTableAnnouncementId?: string;
  TransitGatewayId?: string;
  CoreNetworkId?: string;
  PeerTransitGatewayId?: string;
  PeerCoreNetworkId?: string;
  PeeringAttachmentId?: string;
  AnnouncementDirection?: TransitGatewayRouteTableAnnouncementDirection;
  TransitGatewayRouteTableId?: string;
  State?: TransitGatewayRouteTableAnnouncementState;
  CreationTime?: Date | string;
  Tags?: Array<Tag>;
}
export type TransitGatewayRouteTableAnnouncementDirection = "outgoing" | "incoming";
export type TransitGatewayRouteTableAnnouncementId = string;

export type TransitGatewayRouteTableAnnouncementIdStringList = Array<string>;
export type TransitGatewayRouteTableAnnouncementList = Array<TransitGatewayRouteTableAnnouncement>;
export type TransitGatewayRouteTableAnnouncementState = "available" | "pending" | "failing" | "failed" | "deleting" | "deleted";
export interface TransitGatewayRouteTableAssociation {
  TransitGatewayAttachmentId?: string;
  ResourceId?: string;
  ResourceType?: TransitGatewayAttachmentResourceType;
  State?: TransitGatewayAssociationState;
}
export type TransitGatewayRouteTableAssociationList = Array<TransitGatewayRouteTableAssociation>;
export type TransitGatewayRouteTableId = string;

export type TransitGatewayRouteTableIdStringList = Array<string>;
export type TransitGatewayRouteTableList = Array<TransitGatewayRouteTable>;
export interface TransitGatewayRouteTablePropagation {
  TransitGatewayAttachmentId?: string;
  ResourceId?: string;
  ResourceType?: TransitGatewayAttachmentResourceType;
  State?: TransitGatewayPropagationState;
  TransitGatewayRouteTableAnnouncementId?: string;
}
export type TransitGatewayRouteTablePropagationList = Array<TransitGatewayRouteTablePropagation>;
export interface TransitGatewayRouteTableRoute {
  DestinationCidr?: string;
  State?: string;
  RouteOrigin?: string;
  PrefixListId?: string;
  AttachmentId?: string;
  ResourceId?: string;
  ResourceType?: string;
}
export type TransitGatewayRouteTableState = "pending" | "available" | "deleting" | "deleted";
export type TransitGatewayRouteType = "static" | "propagated";
export type TransitGatewayState = "pending" | "available" | "modifying" | "deleting" | "deleted";
export type TransitGatewaySubnetIdList = Array<string>;
export interface TransitGatewayVpcAttachment {
  TransitGatewayAttachmentId?: string;
  TransitGatewayId?: string;
  VpcId?: string;
  VpcOwnerId?: string;
  State?: TransitGatewayAttachmentState;
  SubnetIds?: Array<string>;
  CreationTime?: Date | string;
  Options?: TransitGatewayVpcAttachmentOptions;
  Tags?: Array<Tag>;
}
export type TransitGatewayVpcAttachmentList = Array<TransitGatewayVpcAttachment>;
export interface TransitGatewayVpcAttachmentOptions {
  DnsSupport?: DnsSupportValue;
  SecurityGroupReferencingSupport?: SecurityGroupReferencingSupportValue;
  Ipv6Support?: Ipv6SupportValue;
  ApplianceModeSupport?: ApplianceModeSupportValue;
}
export type TransportProtocol = "tcp" | "udp";
export interface TrunkInterfaceAssociation {
  AssociationId?: string;
  BranchInterfaceId?: string;
  TrunkInterfaceId?: string;
  InterfaceProtocol?: InterfaceProtocolType;
  VlanId?: number;
  GreKey?: number;
  Tags?: Array<Tag>;
}
export type TrunkInterfaceAssociationId = string;

export type TrunkInterfaceAssociationIdList = Array<string>;
export type TrunkInterfaceAssociationList = Array<TrunkInterfaceAssociation>;
export type TrustProviderType = "user" | "device";
export type TunnelInsideIpVersion = "ipv4" | "ipv6";
export interface TunnelOption {
  OutsideIpAddress?: string;
  TunnelInsideCidr?: string;
  TunnelInsideIpv6Cidr?: string;
  PreSharedKey?: string;
  Phase1LifetimeSeconds?: number;
  Phase2LifetimeSeconds?: number;
  RekeyMarginTimeSeconds?: number;
  RekeyFuzzPercentage?: number;
  ReplayWindowSize?: number;
  DpdTimeoutSeconds?: number;
  DpdTimeoutAction?: string;
  Phase1EncryptionAlgorithms?: Array<Phase1EncryptionAlgorithmsListValue>;
  Phase2EncryptionAlgorithms?: Array<Phase2EncryptionAlgorithmsListValue>;
  Phase1IntegrityAlgorithms?: Array<Phase1IntegrityAlgorithmsListValue>;
  Phase2IntegrityAlgorithms?: Array<Phase2IntegrityAlgorithmsListValue>;
  Phase1DHGroupNumbers?: Array<Phase1DHGroupNumbersListValue>;
  Phase2DHGroupNumbers?: Array<Phase2DHGroupNumbersListValue>;
  IkeVersions?: Array<IKEVersionsListValue>;
  StartupAction?: string;
  LogOptions?: VpnTunnelLogOptions;
  EnableTunnelLifecycleControl?: boolean;
}
export type TunnelOptionsList = Array<TunnelOption>;
export interface UnassignIpv6AddressesRequest {
  Ipv6Prefixes?: Array<string>;
  NetworkInterfaceId: string;
  Ipv6Addresses?: Array<string>;
}
export interface UnassignIpv6AddressesResult {
  NetworkInterfaceId?: string;
  UnassignedIpv6Addresses?: Array<string>;
  UnassignedIpv6Prefixes?: Array<string>;
}
export interface UnassignPrivateIpAddressesRequest {
  Ipv4Prefixes?: Array<string>;
  NetworkInterfaceId: string;
  PrivateIpAddresses?: Array<string>;
}
export interface UnassignPrivateNatGatewayAddressRequest {
  NatGatewayId: string;
  PrivateIpAddresses: Array<string>;
  MaxDrainDurationSeconds?: number;
  DryRun?: boolean;
}
export interface UnassignPrivateNatGatewayAddressResult {
  NatGatewayId?: string;
  NatGatewayAddresses?: Array<NatGatewayAddress>;
}
export type UnlimitedSupportedInstanceFamily = "t2" | "t3" | "t3a" | "t4g";
export interface UnlockSnapshotRequest {
  SnapshotId: string;
  DryRun?: boolean;
}
export interface UnlockSnapshotResult {
  SnapshotId?: string;
}
export interface UnmonitorInstancesRequest {
  InstanceIds: Array<string>;
  DryRun?: boolean;
}
export interface UnmonitorInstancesResult {
  InstanceMonitorings?: Array<InstanceMonitoring>;
}
export type UnsuccessfulInstanceCreditSpecificationErrorCode = "INVALID_INSTANCE_ID" | "INSTANCE_NOT_FOUND" | "INCORRECT_INSTANCE_STATE" | "INSTANCE_CREDIT_SPECIFICATION_NOT_SUPPORTED";
export interface UnsuccessfulInstanceCreditSpecificationItem {
  InstanceId?: string;
  Error?: UnsuccessfulInstanceCreditSpecificationItemError;
}
export interface UnsuccessfulInstanceCreditSpecificationItemError {
  Code?: UnsuccessfulInstanceCreditSpecificationErrorCode;
  Message?: string;
}
export type UnsuccessfulInstanceCreditSpecificationSet = Array<UnsuccessfulInstanceCreditSpecificationItem>;
export interface UnsuccessfulItem {
  Error?: UnsuccessfulItemError;
  ResourceId?: string;
}
export interface UnsuccessfulItemError {
  Code?: string;
  Message?: string;
}
export type UnsuccessfulItemList = Array<UnsuccessfulItem>;
export type UnsuccessfulItemSet = Array<UnsuccessfulItem>;
export interface UpdateSecurityGroupRuleDescriptionsEgressRequest {
  DryRun?: boolean;
  GroupId?: string;
  GroupName?: string;
  IpPermissions?: Array<IpPermission>;
  SecurityGroupRuleDescriptions?: Array<SecurityGroupRuleDescription>;
}
export interface UpdateSecurityGroupRuleDescriptionsEgressResult {
  Return?: boolean;
}
export interface UpdateSecurityGroupRuleDescriptionsIngressRequest {
  DryRun?: boolean;
  GroupId?: string;
  GroupName?: string;
  IpPermissions?: Array<IpPermission>;
  SecurityGroupRuleDescriptions?: Array<SecurityGroupRuleDescription>;
}
export interface UpdateSecurityGroupRuleDescriptionsIngressResult {
  Return?: boolean;
}
export type UsageClassType = "spot" | "on_demand" | "capacity_block";
export type UsageClassTypeList = Array<UsageClassType>;
export interface UserBucket {
  S3Bucket?: string;
  S3Key?: string;
}
export interface UserBucketDetails {
  S3Bucket?: string;
  S3Key?: string;
}
export interface UserData {
  Data?: string;
}
export type UserGroupStringList = Array<string>;
export interface UserIdGroupPair {
  Description?: string;
  UserId?: string;
  GroupName?: string;
  GroupId?: string;
  VpcId?: string;
  VpcPeeringConnectionId?: string;
  PeeringStatus?: string;
}
export type UserIdGroupPairList = Array<UserIdGroupPair>;
export type UserIdGroupPairSet = Array<UserIdGroupPair>;
export type UserIdStringList = Array<string>;
export type UserTrustProviderType = "iam_identity_center" | "oidc";
export interface ValidationError {
  Code?: string;
  Message?: string;
}
export interface ValidationWarning {
  Errors?: Array<ValidationError>;
}
export type ValueStringList = Array<string>;
export type VCpuCount = number;

export interface VCpuCountRange {
  Min?: number;
  Max?: number;
}
export interface VCpuCountRangeRequest {
  Min: number;
  Max?: number;
}
export interface VCpuInfo {
  DefaultVCpus?: number;
  DefaultCores?: number;
  DefaultThreadsPerCore?: number;
  ValidCores?: Array<number>;
  ValidThreadsPerCore?: Array<number>;
}
export type VerificationMethod = "remarks_x509" | "dns_token";
export interface VerifiedAccessEndpoint {
  VerifiedAccessInstanceId?: string;
  VerifiedAccessGroupId?: string;
  VerifiedAccessEndpointId?: string;
  ApplicationDomain?: string;
  EndpointType?: VerifiedAccessEndpointType;
  AttachmentType?: VerifiedAccessEndpointAttachmentType;
  DomainCertificateArn?: string;
  EndpointDomain?: string;
  DeviceValidationDomain?: string;
  SecurityGroupIds?: Array<string>;
  LoadBalancerOptions?: VerifiedAccessEndpointLoadBalancerOptions;
  NetworkInterfaceOptions?: VerifiedAccessEndpointEniOptions;
  Status?: VerifiedAccessEndpointStatus;
  Description?: string;
  CreationTime?: string;
  LastUpdatedTime?: string;
  DeletionTime?: string;
  Tags?: Array<Tag>;
  SseSpecification?: VerifiedAccessSseSpecificationResponse;
  RdsOptions?: VerifiedAccessEndpointRdsOptions;
  CidrOptions?: VerifiedAccessEndpointCidrOptions;
}
export type VerifiedAccessEndpointAttachmentType = "vpc";
export interface VerifiedAccessEndpointCidrOptions {
  Cidr?: string;
  PortRanges?: Array<VerifiedAccessEndpointPortRange>;
  Protocol?: VerifiedAccessEndpointProtocol;
  SubnetIds?: Array<string>;
}
export interface VerifiedAccessEndpointEniOptions {
  NetworkInterfaceId?: string;
  Protocol?: VerifiedAccessEndpointProtocol;
  Port?: number;
  PortRanges?: Array<VerifiedAccessEndpointPortRange>;
}
export type VerifiedAccessEndpointId = string;

export type VerifiedAccessEndpointIdList = Array<string>;
export type VerifiedAccessEndpointList = Array<VerifiedAccessEndpoint>;
export interface VerifiedAccessEndpointLoadBalancerOptions {
  Protocol?: VerifiedAccessEndpointProtocol;
  Port?: number;
  LoadBalancerArn?: string;
  SubnetIds?: Array<string>;
  PortRanges?: Array<VerifiedAccessEndpointPortRange>;
}
export type VerifiedAccessEndpointPortNumber = number;

export interface VerifiedAccessEndpointPortRange {
  FromPort?: number;
  ToPort?: number;
}
export type VerifiedAccessEndpointPortRangeList = Array<VerifiedAccessEndpointPortRange>;
export type VerifiedAccessEndpointProtocol = "http" | "https" | "tcp";
export interface VerifiedAccessEndpointRdsOptions {
  Protocol?: VerifiedAccessEndpointProtocol;
  Port?: number;
  RdsDbInstanceArn?: string;
  RdsDbClusterArn?: string;
  RdsDbProxyArn?: string;
  RdsEndpoint?: string;
  SubnetIds?: Array<string>;
}
export interface VerifiedAccessEndpointStatus {
  Code?: VerifiedAccessEndpointStatusCode;
  Message?: string;
}
export type VerifiedAccessEndpointStatusCode = "pending" | "active" | "updating" | "deleting" | "deleted";
export type VerifiedAccessEndpointSubnetIdList = Array<string>;
export interface VerifiedAccessEndpointTarget {
  VerifiedAccessEndpointId?: string;
  VerifiedAccessEndpointTargetIpAddress?: string;
  VerifiedAccessEndpointTargetDns?: string;
}
export type VerifiedAccessEndpointTargetList = Array<VerifiedAccessEndpointTarget>;
export type VerifiedAccessEndpointType = "load_balancer" | "network_interface" | "rds" | "cidr";
export interface VerifiedAccessGroup {
  VerifiedAccessGroupId?: string;
  VerifiedAccessInstanceId?: string;
  Description?: string;
  Owner?: string;
  VerifiedAccessGroupArn?: string;
  CreationTime?: string;
  LastUpdatedTime?: string;
  DeletionTime?: string;
  Tags?: Array<Tag>;
  SseSpecification?: VerifiedAccessSseSpecificationResponse;
}
export type VerifiedAccessGroupId = string;

export type VerifiedAccessGroupIdList = Array<string>;
export type VerifiedAccessGroupList = Array<VerifiedAccessGroup>;
export interface VerifiedAccessInstance {
  VerifiedAccessInstanceId?: string;
  Description?: string;
  VerifiedAccessTrustProviders?: Array<VerifiedAccessTrustProviderCondensed>;
  CreationTime?: string;
  LastUpdatedTime?: string;
  Tags?: Array<Tag>;
  FipsEnabled?: boolean;
  CidrEndpointsCustomSubDomain?: VerifiedAccessInstanceCustomSubDomain;
}
export interface VerifiedAccessInstanceCustomSubDomain {
  SubDomain?: string;
  Nameservers?: Array<string>;
}
export type VerifiedAccessInstanceId = string;

export type VerifiedAccessInstanceIdList = Array<string>;
export type VerifiedAccessInstanceList = Array<VerifiedAccessInstance>;
export interface VerifiedAccessInstanceLoggingConfiguration {
  VerifiedAccessInstanceId?: string;
  AccessLogs?: VerifiedAccessLogs;
}
export type VerifiedAccessInstanceLoggingConfigurationList = Array<VerifiedAccessInstanceLoggingConfiguration>;
export interface VerifiedAccessInstanceOpenVpnClientConfiguration {
  Config?: string;
  Routes?: Array<VerifiedAccessInstanceOpenVpnClientConfigurationRoute>;
}
export type VerifiedAccessInstanceOpenVpnClientConfigurationList = Array<VerifiedAccessInstanceOpenVpnClientConfiguration>;
export interface VerifiedAccessInstanceOpenVpnClientConfigurationRoute {
  Cidr?: string;
}
export type VerifiedAccessInstanceOpenVpnClientConfigurationRouteList = Array<VerifiedAccessInstanceOpenVpnClientConfigurationRoute>;
export interface VerifiedAccessInstanceUserTrustProviderClientConfiguration {
  Type?: UserTrustProviderType;
  Scopes?: string;
  Issuer?: string;
  AuthorizationEndpoint?: string;
  PublicSigningKeyEndpoint?: string;
  TokenEndpoint?: string;
  UserInfoEndpoint?: string;
  ClientId?: string;
  ClientSecret?: string;
  PkceEnabled?: boolean;
}
export interface VerifiedAccessLogCloudWatchLogsDestination {
  Enabled?: boolean;
  DeliveryStatus?: VerifiedAccessLogDeliveryStatus;
  LogGroup?: string;
}
export interface VerifiedAccessLogCloudWatchLogsDestinationOptions {
  Enabled: boolean;
  LogGroup?: string;
}
export interface VerifiedAccessLogDeliveryStatus {
  Code?: VerifiedAccessLogDeliveryStatusCode;
  Message?: string;
}
export type VerifiedAccessLogDeliveryStatusCode = "SUCCESS" | "FAILED";
export interface VerifiedAccessLogKinesisDataFirehoseDestination {
  Enabled?: boolean;
  DeliveryStatus?: VerifiedAccessLogDeliveryStatus;
  DeliveryStream?: string;
}
export interface VerifiedAccessLogKinesisDataFirehoseDestinationOptions {
  Enabled: boolean;
  DeliveryStream?: string;
}
export interface VerifiedAccessLogOptions {
  S3?: VerifiedAccessLogS3DestinationOptions;
  CloudWatchLogs?: VerifiedAccessLogCloudWatchLogsDestinationOptions;
  KinesisDataFirehose?: VerifiedAccessLogKinesisDataFirehoseDestinationOptions;
  LogVersion?: string;
  IncludeTrustContext?: boolean;
}
export interface VerifiedAccessLogs {
  S3?: VerifiedAccessLogS3Destination;
  CloudWatchLogs?: VerifiedAccessLogCloudWatchLogsDestination;
  KinesisDataFirehose?: VerifiedAccessLogKinesisDataFirehoseDestination;
  LogVersion?: string;
  IncludeTrustContext?: boolean;
}
export interface VerifiedAccessLogS3Destination {
  Enabled?: boolean;
  DeliveryStatus?: VerifiedAccessLogDeliveryStatus;
  BucketName?: string;
  Prefix?: string;
  BucketOwner?: string;
}
export interface VerifiedAccessLogS3DestinationOptions {
  Enabled: boolean;
  BucketName?: string;
  Prefix?: string;
  BucketOwner?: string;
}
export interface VerifiedAccessSseSpecificationRequest {
  CustomerManagedKeyEnabled?: boolean;
  KmsKeyArn?: string;
}
export interface VerifiedAccessSseSpecificationResponse {
  CustomerManagedKeyEnabled?: boolean;
  KmsKeyArn?: string;
}
export interface VerifiedAccessTrustProvider {
  VerifiedAccessTrustProviderId?: string;
  Description?: string;
  TrustProviderType?: TrustProviderType;
  UserTrustProviderType?: UserTrustProviderType;
  DeviceTrustProviderType?: DeviceTrustProviderType;
  OidcOptions?: OidcOptions;
  DeviceOptions?: DeviceOptions;
  PolicyReferenceName?: string;
  CreationTime?: string;
  LastUpdatedTime?: string;
  Tags?: Array<Tag>;
  SseSpecification?: VerifiedAccessSseSpecificationResponse;
  NativeApplicationOidcOptions?: NativeApplicationOidcOptions;
}
export interface VerifiedAccessTrustProviderCondensed {
  VerifiedAccessTrustProviderId?: string;
  Description?: string;
  TrustProviderType?: TrustProviderType;
  UserTrustProviderType?: UserTrustProviderType;
  DeviceTrustProviderType?: DeviceTrustProviderType;
}
export type VerifiedAccessTrustProviderCondensedList = Array<VerifiedAccessTrustProviderCondensed>;
export type VerifiedAccessTrustProviderId = string;

export type VerifiedAccessTrustProviderIdList = Array<string>;
export type VerifiedAccessTrustProviderList = Array<VerifiedAccessTrustProvider>;
export type VersionDescription = string;

export type VersionStringList = Array<string>;
export interface VgwTelemetry {
  AcceptedRouteCount?: number;
  LastStatusChange?: Date | string;
  OutsideIpAddress?: string;
  Status?: TelemetryStatus;
  StatusMessage?: string;
  CertificateArn?: string;
}
export type VgwTelemetryList = Array<VgwTelemetry>;
export type VirtualizationType = "hvm" | "paravirtual";
export type VirtualizationTypeList = Array<VirtualizationType>;
export type VirtualizationTypeSet = Array<VirtualizationType>;
export interface Volume {
  OutpostArn?: string;
  Iops?: number;
  Tags?: Array<Tag>;
  VolumeType?: VolumeType;
  FastRestored?: boolean;
  MultiAttachEnabled?: boolean;
  Throughput?: number;
  SseType?: SSEType;
  Operator?: OperatorResponse;
  VolumeInitializationRate?: number;
  VolumeId?: string;
  Size?: number;
  SnapshotId?: string;
  AvailabilityZone?: string;
  State?: VolumeState;
  CreateTime?: Date | string;
  Attachments?: Array<VolumeAttachment>;
  Encrypted?: boolean;
  KmsKeyId?: string;
}
export interface VolumeAttachment {
  DeleteOnTermination?: boolean;
  AssociatedResource?: string;
  InstanceOwningService?: string;
  VolumeId?: string;
  InstanceId?: string;
  Device?: string;
  State?: VolumeAttachmentState;
  AttachTime?: Date | string;
}
export type VolumeAttachmentList = Array<VolumeAttachment>;
export type VolumeAttachmentState = "attaching" | "attached" | "detaching" | "detached" | "busy";
export type VolumeAttributeName = "autoEnableIO" | "productCodes";
export interface VolumeDetail {
  Size: number;
}
export type VolumeId = string;

export type VolumeIdStringList = Array<string>;
export type VolumeIdWithResolver = string;

export type VolumeList = Array<Volume>;
export interface VolumeModification {
  VolumeId?: string;
  ModificationState?: VolumeModificationState;
  StatusMessage?: string;
  TargetSize?: number;
  TargetIops?: number;
  TargetVolumeType?: VolumeType;
  TargetThroughput?: number;
  TargetMultiAttachEnabled?: boolean;
  OriginalSize?: number;
  OriginalIops?: number;
  OriginalVolumeType?: VolumeType;
  OriginalThroughput?: number;
  OriginalMultiAttachEnabled?: boolean;
  Progress?: number;
  StartTime?: Date | string;
  EndTime?: Date | string;
}
export type VolumeModificationList = Array<VolumeModification>;
export type VolumeModificationState = "modifying" | "optimizing" | "completed" | "failed";
export type VolumeState = "creating" | "available" | "in_use" | "deleting" | "deleted" | "error";
export interface VolumeStatusAction {
  Code?: string;
  Description?: string;
  EventId?: string;
  EventType?: string;
}
export type VolumeStatusActionsList = Array<VolumeStatusAction>;
export interface VolumeStatusAttachmentStatus {
  IoPerformance?: string;
  InstanceId?: string;
}
export type VolumeStatusAttachmentStatusList = Array<VolumeStatusAttachmentStatus>;
export interface VolumeStatusDetails {
  Name?: VolumeStatusName;
  Status?: string;
}
export type VolumeStatusDetailsList = Array<VolumeStatusDetails>;
export interface VolumeStatusEvent {
  Description?: string;
  EventId?: string;
  EventType?: string;
  NotAfter?: Date | string;
  NotBefore?: Date | string;
  InstanceId?: string;
}
export type VolumeStatusEventsList = Array<VolumeStatusEvent>;
export interface VolumeStatusInfo {
  Details?: Array<VolumeStatusDetails>;
  Status?: VolumeStatusInfoStatus;
}
export type VolumeStatusInfoStatus = "ok" | "impaired" | "insufficient_data";
export interface VolumeStatusItem {
  Actions?: Array<VolumeStatusAction>;
  AvailabilityZone?: string;
  OutpostArn?: string;
  Events?: Array<VolumeStatusEvent>;
  VolumeId?: string;
  VolumeStatus?: VolumeStatusInfo;
  AttachmentStatuses?: Array<VolumeStatusAttachmentStatus>;
  AvailabilityZoneId?: string;
}
export type VolumeStatusList = Array<VolumeStatusItem>;
export type VolumeStatusName = "io_enabled" | "io_performance";
export type VolumeType = "standard" | "io1" | "io2" | "gp2" | "sc1" | "st1" | "gp3";
export interface Vpc {
  OwnerId?: string;
  InstanceTenancy?: Tenancy;
  Ipv6CidrBlockAssociationSet?: Array<VpcIpv6CidrBlockAssociation>;
  CidrBlockAssociationSet?: Array<VpcCidrBlockAssociation>;
  IsDefault?: boolean;
  EncryptionControl?: VpcEncryptionControl;
  Tags?: Array<Tag>;
  BlockPublicAccessStates?: BlockPublicAccessStates;
  VpcId?: string;
  State?: VpcState;
  CidrBlock?: string;
  DhcpOptionsId?: string;
}
export interface VpcAttachment {
  VpcId?: string;
  State?: AttachmentStatus;
}
export type VpcAttachmentList = Array<VpcAttachment>;
export type VpcAttributeName = "enableDnsSupport" | "enableDnsHostnames" | "enableNetworkAddressUsageMetrics";
export interface VpcBlockPublicAccessExclusion {
  ExclusionId?: string;
  InternetGatewayExclusionMode?: InternetGatewayExclusionMode;
  ResourceArn?: string;
  State?: VpcBlockPublicAccessExclusionState;
  Reason?: string;
  CreationTimestamp?: Date | string;
  LastUpdateTimestamp?: Date | string;
  DeletionTimestamp?: Date | string;
  Tags?: Array<Tag>;
}
export type VpcBlockPublicAccessExclusionId = string;

export type VpcBlockPublicAccessExclusionIdList = Array<string>;
export type VpcBlockPublicAccessExclusionList = Array<VpcBlockPublicAccessExclusion>;
export type VpcBlockPublicAccessExclusionsAllowed = "allowed" | "not_allowed";
export type VpcBlockPublicAccessExclusionState = "create_in_progress" | "create_complete" | "create_failed" | "update_in_progress" | "update_complete" | "update_failed" | "delete_in_progress" | "delete_complete" | "disable_in_progress" | "disable_complete";
export interface VpcBlockPublicAccessOptions {
  AwsAccountId?: string;
  AwsRegion?: string;
  State?: VpcBlockPublicAccessState;
  InternetGatewayBlockMode?: InternetGatewayBlockMode;
  Reason?: string;
  LastUpdateTimestamp?: Date | string;
  ManagedBy?: ManagedBy;
  ExclusionsAllowed?: VpcBlockPublicAccessExclusionsAllowed;
}
export type VpcBlockPublicAccessState = "default_state" | "update_in_progress" | "update_complete";
export type VpcCidrAssociationId = string;

export interface VpcCidrBlockAssociation {
  AssociationId?: string;
  CidrBlock?: string;
  CidrBlockState?: VpcCidrBlockState;
}
export type VpcCidrBlockAssociationSet = Array<VpcCidrBlockAssociation>;
export interface VpcCidrBlockState {
  State?: VpcCidrBlockStateCode;
  StatusMessage?: string;
}
export type VpcCidrBlockStateCode = "associating" | "associated" | "disassociating" | "disassociated" | "failing" | "failed";
export interface VpcClassicLink {
  ClassicLinkEnabled?: boolean;
  Tags?: Array<Tag>;
  VpcId?: string;
}
export type VpcClassicLinkIdList = Array<string>;
export type VpcClassicLinkList = Array<VpcClassicLink>;
export interface VpcEncryptionControl {
  VpcId?: string;
  VpcEncryptionControlId?: string;
  Mode?: VpcEncryptionControlMode;
  State?: VpcEncryptionControlState;
  StateMessage?: string;
  ResourceExclusions?: VpcEncryptionControlExclusions;
  Tags?: Array<Tag>;
}
export interface VpcEncryptionControlExclusion {
  State?: VpcEncryptionControlExclusionState;
  StateMessage?: string;
}
export interface VpcEncryptionControlExclusions {
  InternetGateway?: VpcEncryptionControlExclusion;
  EgressOnlyInternetGateway?: VpcEncryptionControlExclusion;
  NatGateway?: VpcEncryptionControlExclusion;
  VirtualPrivateGateway?: VpcEncryptionControlExclusion;
  VpcPeering?: VpcEncryptionControlExclusion;
}
export type VpcEncryptionControlExclusionState = "enabling" | "enabled" | "disabling" | "disabled";
export type VpcEncryptionControlId = string;

export type VpcEncryptionControlMode = "monitor" | "enforce";
export type VpcEncryptionControlState = "enforce_in_progress" | "monitor_in_progress" | "enforce_failed" | "monitor_failed" | "deleting" | "deleted" | "available" | "creating" | "delete_failed";
export interface VpcEndpoint {
  VpcEndpointId?: string;
  VpcEndpointType?: VpcEndpointType;
  VpcId?: string;
  ServiceName?: string;
  State?: State;
  PolicyDocument?: string;
  RouteTableIds?: Array<string>;
  SubnetIds?: Array<string>;
  Groups?: Array<SecurityGroupIdentifier>;
  IpAddressType?: IpAddressType;
  DnsOptions?: DnsOptions;
  PrivateDnsEnabled?: boolean;
  RequesterManaged?: boolean;
  NetworkInterfaceIds?: Array<string>;
  DnsEntries?: Array<DnsEntry>;
  CreationTimestamp?: Date | string;
  Tags?: Array<Tag>;
  OwnerId?: string;
  LastError?: LastError;
  Ipv4Prefixes?: Array<SubnetIpPrefixes>;
  Ipv6Prefixes?: Array<SubnetIpPrefixes>;
  FailureReason?: string;
  ServiceNetworkArn?: string;
  ResourceConfigurationArn?: string;
  ServiceRegion?: string;
}
export interface VpcEndpointAssociation {
  Id?: string;
  VpcEndpointId?: string;
  ServiceNetworkArn?: string;
  ServiceNetworkName?: string;
  AssociatedResourceAccessibility?: string;
  FailureReason?: string;
  FailureCode?: string;
  DnsEntry?: DnsEntry;
  PrivateDnsEntry?: DnsEntry;
  AssociatedResourceArn?: string;
  ResourceConfigurationGroupArn?: string;
  Tags?: Array<Tag>;
}
export type VpcEndpointAssociationSet = Array<VpcEndpointAssociation>;
export interface VpcEndpointConnection {
  ServiceId?: string;
  VpcEndpointId?: string;
  VpcEndpointOwner?: string;
  VpcEndpointState?: State;
  CreationTimestamp?: Date | string;
  DnsEntries?: Array<DnsEntry>;
  NetworkLoadBalancerArns?: Array<string>;
  GatewayLoadBalancerArns?: Array<string>;
  IpAddressType?: IpAddressType;
  VpcEndpointConnectionId?: string;
  Tags?: Array<Tag>;
  VpcEndpointRegion?: string;
}
export type VpcEndpointConnectionSet = Array<VpcEndpointConnection>;
export type VpcEndpointId = string;

export type VpcEndpointIdList = Array<string>;
export type VpcEndpointRouteTableIdList = Array<string>;
export type VpcEndpointSecurityGroupIdList = Array<string>;
export type VpcEndpointServiceId = string;

export type VpcEndpointServiceIdList = Array<string>;
export type VpcEndpointSet = Array<VpcEndpoint>;
export type VpcEndpointSubnetIdList = Array<string>;
export type VpcEndpointType = "Interface" | "Gateway" | "GatewayLoadBalancer" | "Resource" | "ServiceNetwork";
export type VpcFlowLogId = string;

export type VpcId = string;

export type VpcIdStringList = Array<string>;
export interface VpcIpv6CidrBlockAssociation {
  AssociationId?: string;
  Ipv6CidrBlock?: string;
  Ipv6CidrBlockState?: VpcCidrBlockState;
  NetworkBorderGroup?: string;
  Ipv6Pool?: string;
  Ipv6AddressAttribute?: Ipv6AddressAttribute;
  IpSource?: IpSource;
}
export type VpcIpv6CidrBlockAssociationSet = Array<VpcIpv6CidrBlockAssociation>;
export type VpcList = Array<Vpc>;
export interface VpcPeeringConnection {
  AccepterVpcInfo?: VpcPeeringConnectionVpcInfo;
  ExpirationTime?: Date | string;
  RequesterVpcInfo?: VpcPeeringConnectionVpcInfo;
  Status?: VpcPeeringConnectionStateReason;
  Tags?: Array<Tag>;
  VpcPeeringConnectionId?: string;
}
export type VpcPeeringConnectionId = string;

export type VpcPeeringConnectionIdList = Array<string>;
export type VpcPeeringConnectionIdWithResolver = string;

export type VpcPeeringConnectionList = Array<VpcPeeringConnection>;
export interface VpcPeeringConnectionOptionsDescription {
  AllowDnsResolutionFromRemoteVpc?: boolean;
  AllowEgressFromLocalClassicLinkToRemoteVpc?: boolean;
  AllowEgressFromLocalVpcToRemoteClassicLink?: boolean;
}
export interface VpcPeeringConnectionStateReason {
  Code?: VpcPeeringConnectionStateReasonCode;
  Message?: string;
}
export type VpcPeeringConnectionStateReasonCode = "initiating_request" | "pending_acceptance" | "active" | "deleted" | "rejected" | "failed" | "expired" | "provisioning" | "deleting";
export interface VpcPeeringConnectionVpcInfo {
  CidrBlock?: string;
  Ipv6CidrBlockSet?: Array<Ipv6CidrBlock>;
  CidrBlockSet?: Array<CidrBlock>;
  OwnerId?: string;
  PeeringOptions?: VpcPeeringConnectionOptionsDescription;
  VpcId?: string;
  Region?: string;
}
export type VpcState = "pending" | "available";
export type VpcTenancy = "default";
export interface VpnConnection {
  Category?: string;
  TransitGatewayId?: string;
  CoreNetworkArn?: string;
  CoreNetworkAttachmentArn?: string;
  GatewayAssociationState?: GatewayAssociationState;
  Options?: VpnConnectionOptions;
  Routes?: Array<VpnStaticRoute>;
  Tags?: Array<Tag>;
  VgwTelemetry?: Array<VgwTelemetry>;
  PreSharedKeyArn?: string;
  VpnConnectionId?: string;
  State?: VpnState;
  CustomerGatewayConfiguration?: string;
  Type?: GatewayType;
  CustomerGatewayId?: string;
  VpnGatewayId?: string;
}
export type VpnConnectionDeviceSampleConfiguration = string;

export interface VpnConnectionDeviceType {
  VpnConnectionDeviceTypeId?: string;
  Vendor?: string;
  Platform?: string;
  Software?: string;
}
export type VpnConnectionDeviceTypeId = string;

export type VpnConnectionDeviceTypeList = Array<VpnConnectionDeviceType>;
export type VpnConnectionId = string;

export type VpnConnectionIdStringList = Array<string>;
export type VpnConnectionList = Array<VpnConnection>;
export interface VpnConnectionOptions {
  EnableAcceleration?: boolean;
  StaticRoutesOnly?: boolean;
  LocalIpv4NetworkCidr?: string;
  RemoteIpv4NetworkCidr?: string;
  LocalIpv6NetworkCidr?: string;
  RemoteIpv6NetworkCidr?: string;
  OutsideIpAddressType?: string;
  TransportTransitGatewayAttachmentId?: string;
  TunnelInsideIpVersion?: TunnelInsideIpVersion;
  TunnelOptions?: Array<TunnelOption>;
}
export interface VpnConnectionOptionsSpecification {
  EnableAcceleration?: boolean;
  TunnelInsideIpVersion?: TunnelInsideIpVersion;
  TunnelOptions?: Array<VpnTunnelOptionsSpecification>;
  LocalIpv4NetworkCidr?: string;
  RemoteIpv4NetworkCidr?: string;
  LocalIpv6NetworkCidr?: string;
  RemoteIpv6NetworkCidr?: string;
  OutsideIpAddressType?: string;
  TransportTransitGatewayAttachmentId?: string;
  StaticRoutesOnly?: boolean;
}
export type VpnEcmpSupportValue = "enable" | "disable";
export interface VpnGateway {
  AmazonSideAsn?: number;
  Tags?: Array<Tag>;
  VpnGatewayId?: string;
  State?: VpnState;
  Type?: GatewayType;
  AvailabilityZone?: string;
  VpcAttachments?: Array<VpcAttachment>;
}
export type VpnGatewayId = string;

export type VpnGatewayIdStringList = Array<string>;
export type VpnGatewayList = Array<VpnGateway>;
export type VpnProtocol = "openvpn";
export type VpnState = "pending" | "available" | "deleting" | "deleted";
export interface VpnStaticRoute {
  DestinationCidrBlock?: string;
  Source?: VpnStaticRouteSource;
  State?: VpnState;
}
export type VpnStaticRouteList = Array<VpnStaticRoute>;
export type VpnStaticRouteSource = "Static";
export interface VpnTunnelLogOptions {
  CloudWatchLogOptions?: CloudWatchLogOptions;
}
export interface VpnTunnelLogOptionsSpecification {
  CloudWatchLogOptions?: CloudWatchLogOptionsSpecification;
}
export interface VpnTunnelOptionsSpecification {
  TunnelInsideCidr?: string;
  TunnelInsideIpv6Cidr?: string;
  PreSharedKey?: string;
  Phase1LifetimeSeconds?: number;
  Phase2LifetimeSeconds?: number;
  RekeyMarginTimeSeconds?: number;
  RekeyFuzzPercentage?: number;
  ReplayWindowSize?: number;
  DPDTimeoutSeconds?: number;
  DPDTimeoutAction?: string;
  Phase1EncryptionAlgorithms?: Array<Phase1EncryptionAlgorithmsRequestListValue>;
  Phase2EncryptionAlgorithms?: Array<Phase2EncryptionAlgorithmsRequestListValue>;
  Phase1IntegrityAlgorithms?: Array<Phase1IntegrityAlgorithmsRequestListValue>;
  Phase2IntegrityAlgorithms?: Array<Phase2IntegrityAlgorithmsRequestListValue>;
  Phase1DHGroupNumbers?: Array<Phase1DHGroupNumbersRequestListValue>;
  Phase2DHGroupNumbers?: Array<Phase2DHGroupNumbersRequestListValue>;
  IKEVersions?: Array<IKEVersionsRequestListValue>;
  StartupAction?: string;
  LogOptions?: VpnTunnelLogOptionsSpecification;
  EnableTunnelLifecycleControl?: boolean;
}
export type VpnTunnelOptionsSpecificationsList = Array<VpnTunnelOptionsSpecification>;
export type VpnTunnelProvisioningStatus = "available" | "pending" | "failed";
export type WeekDay = "sunday" | "monday" | "tuesday" | "wednesday" | "thursday" | "friday" | "saturday";
export interface WithdrawByoipCidrRequest {
  Cidr: string;
  DryRun?: boolean;
}
export interface WithdrawByoipCidrResult {
  ByoipCidr?: ByoipCidr;
}
export type ZoneIdStringList = Array<string>;
export type ZoneNameStringList = Array<string>;
export declare namespace AcceptAddressTransfer {
  export type Input = AcceptAddressTransferRequest;
  export type Output = AcceptAddressTransferResult;
  export type Error =
    | CommonAwsError;
}

export declare namespace AcceptCapacityReservationBillingOwnership {
  export type Input = AcceptCapacityReservationBillingOwnershipRequest;
  export type Output = AcceptCapacityReservationBillingOwnershipResult;
  export type Error =
    | CommonAwsError;
}

export declare namespace AcceptReservedInstancesExchangeQuote {
  export type Input = AcceptReservedInstancesExchangeQuoteRequest;
  export type Output = AcceptReservedInstancesExchangeQuoteResult;
  export type Error =
    | CommonAwsError;
}

export declare namespace AcceptTransitGatewayMulticastDomainAssociations {
  export type Input = AcceptTransitGatewayMulticastDomainAssociationsRequest;
  export type Output = AcceptTransitGatewayMulticastDomainAssociationsResult;
  export type Error =
    | CommonAwsError;
}

export declare namespace AcceptTransitGatewayPeeringAttachment {
  export type Input = AcceptTransitGatewayPeeringAttachmentRequest;
  export type Output = AcceptTransitGatewayPeeringAttachmentResult;
  export type Error =
    | CommonAwsError;
}

export declare namespace AcceptTransitGatewayVpcAttachment {
  export type Input = AcceptTransitGatewayVpcAttachmentRequest;
  export type Output = AcceptTransitGatewayVpcAttachmentResult;
  export type Error =
    | CommonAwsError;
}

export declare namespace AcceptVpcEndpointConnections {
  export type Input = AcceptVpcEndpointConnectionsRequest;
  export type Output = AcceptVpcEndpointConnectionsResult;
  export type Error =
    | CommonAwsError;
}

export declare namespace AcceptVpcPeeringConnection {
  export type Input = AcceptVpcPeeringConnectionRequest;
  export type Output = AcceptVpcPeeringConnectionResult;
  export type Error =
    | CommonAwsError;
}

export declare namespace AdvertiseByoipCidr {
  export type Input = AdvertiseByoipCidrRequest;
  export type Output = AdvertiseByoipCidrResult;
  export type Error =
    | CommonAwsError;
}

export declare namespace AllocateAddress {
  export type Input = AllocateAddressRequest;
  export type Output = AllocateAddressResult;
  export type Error =
    | CommonAwsError;
}

export declare namespace AllocateHosts {
  export type Input = AllocateHostsRequest;
  export type Output = AllocateHostsResult;
  export type Error =
    | CommonAwsError;
}

export declare namespace AllocateIpamPoolCidr {
  export type Input = AllocateIpamPoolCidrRequest;
  export type Output = AllocateIpamPoolCidrResult;
  export type Error =
    | CommonAwsError;
}

export declare namespace ApplySecurityGroupsToClientVpnTargetNetwork {
  export type Input = ApplySecurityGroupsToClientVpnTargetNetworkRequest;
  export type Output = ApplySecurityGroupsToClientVpnTargetNetworkResult;
  export type Error =
    | CommonAwsError;
}

export declare namespace AssignIpv6Addresses {
  export type Input = AssignIpv6AddressesRequest;
  export type Output = AssignIpv6AddressesResult;
  export type Error =
    | CommonAwsError;
}

export declare namespace AssignPrivateIpAddresses {
  export type Input = AssignPrivateIpAddressesRequest;
  export type Output = AssignPrivateIpAddressesResult;
  export type Error =
    | CommonAwsError;
}

export declare namespace AssignPrivateNatGatewayAddress {
  export type Input = AssignPrivateNatGatewayAddressRequest;
  export type Output = AssignPrivateNatGatewayAddressResult;
  export type Error =
    | CommonAwsError;
}

export declare namespace AssociateAddress {
  export type Input = AssociateAddressRequest;
  export type Output = AssociateAddressResult;
  export type Error =
    | CommonAwsError;
}

export declare namespace AssociateCapacityReservationBillingOwner {
  export type Input = AssociateCapacityReservationBillingOwnerRequest;
  export type Output = AssociateCapacityReservationBillingOwnerResult;
  export type Error =
    | CommonAwsError;
}

export declare namespace AssociateClientVpnTargetNetwork {
  export type Input = AssociateClientVpnTargetNetworkRequest;
  export type Output = AssociateClientVpnTargetNetworkResult;
  export type Error =
    | CommonAwsError;
}

export declare namespace AssociateDhcpOptions {
  export type Input = AssociateDhcpOptionsRequest;
  export type Output = {};
  export type Error =
    | CommonAwsError;
}

export declare namespace AssociateEnclaveCertificateIamRole {
  export type Input = AssociateEnclaveCertificateIamRoleRequest;
  export type Output = AssociateEnclaveCertificateIamRoleResult;
  export type Error =
    | CommonAwsError;
}

export declare namespace AssociateIamInstanceProfile {
  export type Input = AssociateIamInstanceProfileRequest;
  export type Output = AssociateIamInstanceProfileResult;
  export type Error =
    | CommonAwsError;
}

export declare namespace AssociateInstanceEventWindow {
  export type Input = AssociateInstanceEventWindowRequest;
  export type Output = AssociateInstanceEventWindowResult;
  export type Error =
    | CommonAwsError;
}

export declare namespace AssociateIpamByoasn {
  export type Input = AssociateIpamByoasnRequest;
  export type Output = AssociateIpamByoasnResult;
  export type Error =
    | CommonAwsError;
}

export declare namespace AssociateIpamResourceDiscovery {
  export type Input = AssociateIpamResourceDiscoveryRequest;
  export type Output = AssociateIpamResourceDiscoveryResult;
  export type Error =
    | CommonAwsError;
}

export declare namespace AssociateNatGatewayAddress {
  export type Input = AssociateNatGatewayAddressRequest;
  export type Output = AssociateNatGatewayAddressResult;
  export type Error =
    | CommonAwsError;
}

export declare namespace AssociateRouteServer {
  export type Input = AssociateRouteServerRequest;
  export type Output = AssociateRouteServerResult;
  export type Error =
    | CommonAwsError;
}

export declare namespace AssociateRouteTable {
  export type Input = AssociateRouteTableRequest;
  export type Output = AssociateRouteTableResult;
  export type Error =
    | CommonAwsError;
}

export declare namespace AssociateSecurityGroupVpc {
  export type Input = AssociateSecurityGroupVpcRequest;
  export type Output = AssociateSecurityGroupVpcResult;
  export type Error =
    | CommonAwsError;
}

export declare namespace AssociateSubnetCidrBlock {
  export type Input = AssociateSubnetCidrBlockRequest;
  export type Output = AssociateSubnetCidrBlockResult;
  export type Error =
    | CommonAwsError;
}

export declare namespace AssociateTransitGatewayMulticastDomain {
  export type Input = AssociateTransitGatewayMulticastDomainRequest;
  export type Output = AssociateTransitGatewayMulticastDomainResult;
  export type Error =
    | CommonAwsError;
}

export declare namespace AssociateTransitGatewayPolicyTable {
  export type Input = AssociateTransitGatewayPolicyTableRequest;
  export type Output = AssociateTransitGatewayPolicyTableResult;
  export type Error =
    | CommonAwsError;
}

export declare namespace AssociateTransitGatewayRouteTable {
  export type Input = AssociateTransitGatewayRouteTableRequest;
  export type Output = AssociateTransitGatewayRouteTableResult;
  export type Error =
    | CommonAwsError;
}

export declare namespace AssociateTrunkInterface {
  export type Input = AssociateTrunkInterfaceRequest;
  export type Output = AssociateTrunkInterfaceResult;
  export type Error =
    | CommonAwsError;
}

export declare namespace AssociateVpcCidrBlock {
  export type Input = AssociateVpcCidrBlockRequest;
  export type Output = AssociateVpcCidrBlockResult;
  export type Error =
    | CommonAwsError;
}

export declare namespace AttachClassicLinkVpc {
  export type Input = AttachClassicLinkVpcRequest;
  export type Output = AttachClassicLinkVpcResult;
  export type Error =
    | CommonAwsError;
}

export declare namespace AttachInternetGateway {
  export type Input = AttachInternetGatewayRequest;
  export type Output = {};
  export type Error =
    | CommonAwsError;
}

export declare namespace AttachNetworkInterface {
  export type Input = AttachNetworkInterfaceRequest;
  export type Output = AttachNetworkInterfaceResult;
  export type Error =
    | CommonAwsError;
}

export declare namespace AttachVerifiedAccessTrustProvider {
  export type Input = AttachVerifiedAccessTrustProviderRequest;
  export type Output = AttachVerifiedAccessTrustProviderResult;
  export type Error =
    | CommonAwsError;
}

export declare namespace AttachVolume {
  export type Input = AttachVolumeRequest;
  export type Output = VolumeAttachment;
  export type Error =
    | CommonAwsError;
}

export declare namespace AttachVpnGateway {
  export type Input = AttachVpnGatewayRequest;
  export type Output = AttachVpnGatewayResult;
  export type Error =
    | CommonAwsError;
}

export declare namespace AuthorizeClientVpnIngress {
  export type Input = AuthorizeClientVpnIngressRequest;
  export type Output = AuthorizeClientVpnIngressResult;
  export type Error =
    | CommonAwsError;
}

export declare namespace AuthorizeSecurityGroupEgress {
  export type Input = AuthorizeSecurityGroupEgressRequest;
  export type Output = AuthorizeSecurityGroupEgressResult;
  export type Error =
    | CommonAwsError;
}

export declare namespace AuthorizeSecurityGroupIngress {
  export type Input = AuthorizeSecurityGroupIngressRequest;
  export type Output = AuthorizeSecurityGroupIngressResult;
  export type Error =
    | CommonAwsError;
}

export declare namespace BundleInstance {
  export type Input = BundleInstanceRequest;
  export type Output = BundleInstanceResult;
  export type Error =
    | CommonAwsError;
}

export declare namespace CancelBundleTask {
  export type Input = CancelBundleTaskRequest;
  export type Output = CancelBundleTaskResult;
  export type Error =
    | CommonAwsError;
}

export declare namespace CancelCapacityReservation {
  export type Input = CancelCapacityReservationRequest;
  export type Output = CancelCapacityReservationResult;
  export type Error =
    | CommonAwsError;
}

export declare namespace CancelCapacityReservationFleets {
  export type Input = CancelCapacityReservationFleetsRequest;
  export type Output = CancelCapacityReservationFleetsResult;
  export type Error =
    | CommonAwsError;
}

export declare namespace CancelConversionTask {
  export type Input = CancelConversionRequest;
  export type Output = {};
  export type Error =
    | CommonAwsError;
}

export declare namespace CancelDeclarativePoliciesReport {
  export type Input = CancelDeclarativePoliciesReportRequest;
  export type Output = CancelDeclarativePoliciesReportResult;
  export type Error =
    | CommonAwsError;
}

export declare namespace CancelExportTask {
  export type Input = CancelExportTaskRequest;
  export type Output = {};
  export type Error =
    | CommonAwsError;
}

export declare namespace CancelImageLaunchPermission {
  export type Input = CancelImageLaunchPermissionRequest;
  export type Output = CancelImageLaunchPermissionResult;
  export type Error =
    | CommonAwsError;
}

export declare namespace CancelImportTask {
  export type Input = CancelImportTaskRequest;
  export type Output = CancelImportTaskResult;
  export type Error =
    | CommonAwsError;
}

export declare namespace CancelReservedInstancesListing {
  export type Input = CancelReservedInstancesListingRequest;
  export type Output = CancelReservedInstancesListingResult;
  export type Error =
    | CommonAwsError;
}

export declare namespace CancelSpotFleetRequests {
  export type Input = CancelSpotFleetRequestsRequest;
  export type Output = CancelSpotFleetRequestsResponse;
  export type Error =
    | CommonAwsError;
}

export declare namespace CancelSpotInstanceRequests {
  export type Input = CancelSpotInstanceRequestsRequest;
  export type Output = CancelSpotInstanceRequestsResult;
  export type Error =
    | CommonAwsError;
}

export declare namespace ConfirmProductInstance {
  export type Input = ConfirmProductInstanceRequest;
  export type Output = ConfirmProductInstanceResult;
  export type Error =
    | CommonAwsError;
}

export declare namespace CopyFpgaImage {
  export type Input = CopyFpgaImageRequest;
  export type Output = CopyFpgaImageResult;
  export type Error =
    | CommonAwsError;
}

export declare namespace CopyImage {
  export type Input = CopyImageRequest;
  export type Output = CopyImageResult;
  export type Error =
    | CommonAwsError;
}

export declare namespace CopySnapshot {
  export type Input = CopySnapshotRequest;
  export type Output = CopySnapshotResult;
  export type Error =
    | CommonAwsError;
}

export declare namespace CreateCapacityReservation {
  export type Input = CreateCapacityReservationRequest;
  export type Output = CreateCapacityReservationResult;
  export type Error =
    | CommonAwsError;
}

export declare namespace CreateCapacityReservationBySplitting {
  export type Input = CreateCapacityReservationBySplittingRequest;
  export type Output = CreateCapacityReservationBySplittingResult;
  export type Error =
    | CommonAwsError;
}

export declare namespace CreateCapacityReservationFleet {
  export type Input = CreateCapacityReservationFleetRequest;
  export type Output = CreateCapacityReservationFleetResult;
  export type Error =
    | CommonAwsError;
}

export declare namespace CreateCarrierGateway {
  export type Input = CreateCarrierGatewayRequest;
  export type Output = CreateCarrierGatewayResult;
  export type Error =
    | CommonAwsError;
}

export declare namespace CreateClientVpnEndpoint {
  export type Input = CreateClientVpnEndpointRequest;
  export type Output = CreateClientVpnEndpointResult;
  export type Error =
    | CommonAwsError;
}

export declare namespace CreateClientVpnRoute {
  export type Input = CreateClientVpnRouteRequest;
  export type Output = CreateClientVpnRouteResult;
  export type Error =
    | CommonAwsError;
}

export declare namespace CreateCoipCidr {
  export type Input = CreateCoipCidrRequest;
  export type Output = CreateCoipCidrResult;
  export type Error =
    | CommonAwsError;
}

export declare namespace CreateCoipPool {
  export type Input = CreateCoipPoolRequest;
  export type Output = CreateCoipPoolResult;
  export type Error =
    | CommonAwsError;
}

export declare namespace CreateCustomerGateway {
  export type Input = CreateCustomerGatewayRequest;
  export type Output = CreateCustomerGatewayResult;
  export type Error =
    | CommonAwsError;
}

export declare namespace CreateDefaultSubnet {
  export type Input = CreateDefaultSubnetRequest;
  export type Output = CreateDefaultSubnetResult;
  export type Error =
    | CommonAwsError;
}

export declare namespace CreateDefaultVpc {
  export type Input = CreateDefaultVpcRequest;
  export type Output = CreateDefaultVpcResult;
  export type Error =
    | CommonAwsError;
}

export declare namespace CreateDelegateMacVolumeOwnershipTask {
  export type Input = CreateDelegateMacVolumeOwnershipTaskRequest;
  export type Output = CreateDelegateMacVolumeOwnershipTaskResult;
  export type Error =
    | CommonAwsError;
}

export declare namespace CreateDhcpOptions {
  export type Input = CreateDhcpOptionsRequest;
  export type Output = CreateDhcpOptionsResult;
  export type Error =
    | CommonAwsError;
}

export declare namespace CreateEgressOnlyInternetGateway {
  export type Input = CreateEgressOnlyInternetGatewayRequest;
  export type Output = CreateEgressOnlyInternetGatewayResult;
  export type Error =
    | CommonAwsError;
}

export declare namespace CreateFleet {
  export type Input = CreateFleetRequest;
  export type Output = CreateFleetResult;
  export type Error =
    | CommonAwsError;
}

export declare namespace CreateFlowLogs {
  export type Input = CreateFlowLogsRequest;
  export type Output = CreateFlowLogsResult;
  export type Error =
    | CommonAwsError;
}

export declare namespace CreateFpgaImage {
  export type Input = CreateFpgaImageRequest;
  export type Output = CreateFpgaImageResult;
  export type Error =
    | CommonAwsError;
}

export declare namespace CreateImage {
  export type Input = CreateImageRequest;
  export type Output = CreateImageResult;
  export type Error =
    | CommonAwsError;
}

export declare namespace CreateInstanceConnectEndpoint {
  export type Input = CreateInstanceConnectEndpointRequest;
  export type Output = CreateInstanceConnectEndpointResult;
  export type Error =
    | CommonAwsError;
}

export declare namespace CreateInstanceEventWindow {
  export type Input = CreateInstanceEventWindowRequest;
  export type Output = CreateInstanceEventWindowResult;
  export type Error =
    | CommonAwsError;
}

export declare namespace CreateInstanceExportTask {
  export type Input = CreateInstanceExportTaskRequest;
  export type Output = CreateInstanceExportTaskResult;
  export type Error =
    | CommonAwsError;
}

export declare namespace CreateInternetGateway {
  export type Input = CreateInternetGatewayRequest;
  export type Output = CreateInternetGatewayResult;
  export type Error =
    | CommonAwsError;
}

export declare namespace CreateIpam {
  export type Input = CreateIpamRequest;
  export type Output = CreateIpamResult;
  export type Error =
    | CommonAwsError;
}

export declare namespace CreateIpamExternalResourceVerificationToken {
  export type Input = CreateIpamExternalResourceVerificationTokenRequest;
  export type Output = CreateIpamExternalResourceVerificationTokenResult;
  export type Error =
    | CommonAwsError;
}

export declare namespace CreateIpamPool {
  export type Input = CreateIpamPoolRequest;
  export type Output = CreateIpamPoolResult;
  export type Error =
    | CommonAwsError;
}

export declare namespace CreateIpamResourceDiscovery {
  export type Input = CreateIpamResourceDiscoveryRequest;
  export type Output = CreateIpamResourceDiscoveryResult;
  export type Error =
    | CommonAwsError;
}

export declare namespace CreateIpamScope {
  export type Input = CreateIpamScopeRequest;
  export type Output = CreateIpamScopeResult;
  export type Error =
    | CommonAwsError;
}

export declare namespace CreateKeyPair {
  export type Input = CreateKeyPairRequest;
  export type Output = KeyPair;
  export type Error =
    | CommonAwsError;
}

export declare namespace CreateLaunchTemplate {
  export type Input = CreateLaunchTemplateRequest;
  export type Output = CreateLaunchTemplateResult;
  export type Error =
    | CommonAwsError;
}

export declare namespace CreateLaunchTemplateVersion {
  export type Input = CreateLaunchTemplateVersionRequest;
  export type Output = CreateLaunchTemplateVersionResult;
  export type Error =
    | CommonAwsError;
}

export declare namespace CreateLocalGatewayRoute {
  export type Input = CreateLocalGatewayRouteRequest;
  export type Output = CreateLocalGatewayRouteResult;
  export type Error =
    | CommonAwsError;
}

export declare namespace CreateLocalGatewayRouteTable {
  export type Input = CreateLocalGatewayRouteTableRequest;
  export type Output = CreateLocalGatewayRouteTableResult;
  export type Error =
    | CommonAwsError;
}

export declare namespace CreateLocalGatewayRouteTableVirtualInterfaceGroupAssociation {
  export type Input = CreateLocalGatewayRouteTableVirtualInterfaceGroupAssociationRequest;
  export type Output = CreateLocalGatewayRouteTableVirtualInterfaceGroupAssociationResult;
  export type Error =
    | CommonAwsError;
}

export declare namespace CreateLocalGatewayRouteTableVpcAssociation {
  export type Input = CreateLocalGatewayRouteTableVpcAssociationRequest;
  export type Output = CreateLocalGatewayRouteTableVpcAssociationResult;
  export type Error =
    | CommonAwsError;
}

export declare namespace CreateLocalGatewayVirtualInterface {
  export type Input = CreateLocalGatewayVirtualInterfaceRequest;
  export type Output = CreateLocalGatewayVirtualInterfaceResult;
  export type Error =
    | CommonAwsError;
}

export declare namespace CreateLocalGatewayVirtualInterfaceGroup {
  export type Input = CreateLocalGatewayVirtualInterfaceGroupRequest;
  export type Output = CreateLocalGatewayVirtualInterfaceGroupResult;
  export type Error =
    | CommonAwsError;
}

export declare namespace CreateMacSystemIntegrityProtectionModificationTask {
  export type Input = CreateMacSystemIntegrityProtectionModificationTaskRequest;
  export type Output = CreateMacSystemIntegrityProtectionModificationTaskResult;
  export type Error =
    | CommonAwsError;
}

export declare namespace CreateManagedPrefixList {
  export type Input = CreateManagedPrefixListRequest;
  export type Output = CreateManagedPrefixListResult;
  export type Error =
    | CommonAwsError;
}

export declare namespace CreateNatGateway {
  export type Input = CreateNatGatewayRequest;
  export type Output = CreateNatGatewayResult;
  export type Error =
    | CommonAwsError;
}

export declare namespace CreateNetworkAcl {
  export type Input = CreateNetworkAclRequest;
  export type Output = CreateNetworkAclResult;
  export type Error =
    | CommonAwsError;
}

export declare namespace CreateNetworkAclEntry {
  export type Input = CreateNetworkAclEntryRequest;
  export type Output = {};
  export type Error =
    | CommonAwsError;
}

export declare namespace CreateNetworkInsightsAccessScope {
  export type Input = CreateNetworkInsightsAccessScopeRequest;
  export type Output = CreateNetworkInsightsAccessScopeResult;
  export type Error =
    | CommonAwsError;
}

export declare namespace CreateNetworkInsightsPath {
  export type Input = CreateNetworkInsightsPathRequest;
  export type Output = CreateNetworkInsightsPathResult;
  export type Error =
    | CommonAwsError;
}

export declare namespace CreateNetworkInterface {
  export type Input = CreateNetworkInterfaceRequest;
  export type Output = CreateNetworkInterfaceResult;
  export type Error =
    | CommonAwsError;
}

export declare namespace CreateNetworkInterfacePermission {
  export type Input = CreateNetworkInterfacePermissionRequest;
  export type Output = CreateNetworkInterfacePermissionResult;
  export type Error =
    | CommonAwsError;
}

export declare namespace CreatePlacementGroup {
  export type Input = CreatePlacementGroupRequest;
  export type Output = CreatePlacementGroupResult;
  export type Error =
    | CommonAwsError;
}

export declare namespace CreatePublicIpv4Pool {
  export type Input = CreatePublicIpv4PoolRequest;
  export type Output = CreatePublicIpv4PoolResult;
  export type Error =
    | CommonAwsError;
}

export declare namespace CreateReplaceRootVolumeTask {
  export type Input = CreateReplaceRootVolumeTaskRequest;
  export type Output = CreateReplaceRootVolumeTaskResult;
  export type Error =
    | CommonAwsError;
}

export declare namespace CreateReservedInstancesListing {
  export type Input = CreateReservedInstancesListingRequest;
  export type Output = CreateReservedInstancesListingResult;
  export type Error =
    | CommonAwsError;
}

export declare namespace CreateRestoreImageTask {
  export type Input = CreateRestoreImageTaskRequest;
  export type Output = CreateRestoreImageTaskResult;
  export type Error =
    | CommonAwsError;
}

export declare namespace CreateRoute {
  export type Input = CreateRouteRequest;
  export type Output = CreateRouteResult;
  export type Error =
    | CommonAwsError;
}

export declare namespace CreateRouteServer {
  export type Input = CreateRouteServerRequest;
  export type Output = CreateRouteServerResult;
  export type Error =
    | CommonAwsError;
}

export declare namespace CreateRouteServerEndpoint {
  export type Input = CreateRouteServerEndpointRequest;
  export type Output = CreateRouteServerEndpointResult;
  export type Error =
    | CommonAwsError;
}

export declare namespace CreateRouteServerPeer {
  export type Input = CreateRouteServerPeerRequest;
  export type Output = CreateRouteServerPeerResult;
  export type Error =
    | CommonAwsError;
}

export declare namespace CreateRouteTable {
  export type Input = CreateRouteTableRequest;
  export type Output = CreateRouteTableResult;
  export type Error =
    | CommonAwsError;
}

export declare namespace CreateSecurityGroup {
  export type Input = CreateSecurityGroupRequest;
  export type Output = CreateSecurityGroupResult;
  export type Error =
    | CommonAwsError;
}

export declare namespace CreateSnapshot {
  export type Input = CreateSnapshotRequest;
  export type Output = Snapshot;
  export type Error =
    | CommonAwsError;
}

export declare namespace CreateSnapshots {
  export type Input = CreateSnapshotsRequest;
  export type Output = CreateSnapshotsResult;
  export type Error =
    | CommonAwsError;
}

export declare namespace CreateSpotDatafeedSubscription {
  export type Input = CreateSpotDatafeedSubscriptionRequest;
  export type Output = CreateSpotDatafeedSubscriptionResult;
  export type Error =
    | CommonAwsError;
}

export declare namespace CreateStoreImageTask {
  export type Input = CreateStoreImageTaskRequest;
  export type Output = CreateStoreImageTaskResult;
  export type Error =
    | CommonAwsError;
}

export declare namespace CreateSubnet {
  export type Input = CreateSubnetRequest;
  export type Output = CreateSubnetResult;
  export type Error =
    | CommonAwsError;
}

export declare namespace CreateSubnetCidrReservation {
  export type Input = CreateSubnetCidrReservationRequest;
  export type Output = CreateSubnetCidrReservationResult;
  export type Error =
    | CommonAwsError;
}

export declare namespace CreateTags {
  export type Input = CreateTagsRequest;
  export type Output = {};
  export type Error =
    | CommonAwsError;
}

export declare namespace CreateTrafficMirrorFilter {
  export type Input = CreateTrafficMirrorFilterRequest;
  export type Output = CreateTrafficMirrorFilterResult;
  export type Error =
    | CommonAwsError;
}

export declare namespace CreateTrafficMirrorFilterRule {
  export type Input = CreateTrafficMirrorFilterRuleRequest;
  export type Output = CreateTrafficMirrorFilterRuleResult;
  export type Error =
    | CommonAwsError;
}

export declare namespace CreateTrafficMirrorSession {
  export type Input = CreateTrafficMirrorSessionRequest;
  export type Output = CreateTrafficMirrorSessionResult;
  export type Error =
    | CommonAwsError;
}

export declare namespace CreateTrafficMirrorTarget {
  export type Input = CreateTrafficMirrorTargetRequest;
  export type Output = CreateTrafficMirrorTargetResult;
  export type Error =
    | CommonAwsError;
}

export declare namespace CreateTransitGateway {
  export type Input = CreateTransitGatewayRequest;
  export type Output = CreateTransitGatewayResult;
  export type Error =
    | CommonAwsError;
}

export declare namespace CreateTransitGatewayConnect {
  export type Input = CreateTransitGatewayConnectRequest;
  export type Output = CreateTransitGatewayConnectResult;
  export type Error =
    | CommonAwsError;
}

export declare namespace CreateTransitGatewayConnectPeer {
  export type Input = CreateTransitGatewayConnectPeerRequest;
  export type Output = CreateTransitGatewayConnectPeerResult;
  export type Error =
    | CommonAwsError;
}

export declare namespace CreateTransitGatewayMulticastDomain {
  export type Input = CreateTransitGatewayMulticastDomainRequest;
  export type Output = CreateTransitGatewayMulticastDomainResult;
  export type Error =
    | CommonAwsError;
}

export declare namespace CreateTransitGatewayPeeringAttachment {
  export type Input = CreateTransitGatewayPeeringAttachmentRequest;
  export type Output = CreateTransitGatewayPeeringAttachmentResult;
  export type Error =
    | CommonAwsError;
}

export declare namespace CreateTransitGatewayPolicyTable {
  export type Input = CreateTransitGatewayPolicyTableRequest;
  export type Output = CreateTransitGatewayPolicyTableResult;
  export type Error =
    | CommonAwsError;
}

export declare namespace CreateTransitGatewayPrefixListReference {
  export type Input = CreateTransitGatewayPrefixListReferenceRequest;
  export type Output = CreateTransitGatewayPrefixListReferenceResult;
  export type Error =
    | CommonAwsError;
}

export declare namespace CreateTransitGatewayRoute {
  export type Input = CreateTransitGatewayRouteRequest;
  export type Output = CreateTransitGatewayRouteResult;
  export type Error =
    | CommonAwsError;
}

export declare namespace CreateTransitGatewayRouteTable {
  export type Input = CreateTransitGatewayRouteTableRequest;
  export type Output = CreateTransitGatewayRouteTableResult;
  export type Error =
    | CommonAwsError;
}

export declare namespace CreateTransitGatewayRouteTableAnnouncement {
  export type Input = CreateTransitGatewayRouteTableAnnouncementRequest;
  export type Output = CreateTransitGatewayRouteTableAnnouncementResult;
  export type Error =
    | CommonAwsError;
}

export declare namespace CreateTransitGatewayVpcAttachment {
  export type Input = CreateTransitGatewayVpcAttachmentRequest;
  export type Output = CreateTransitGatewayVpcAttachmentResult;
  export type Error =
    | CommonAwsError;
}

export declare namespace CreateVerifiedAccessEndpoint {
  export type Input = CreateVerifiedAccessEndpointRequest;
  export type Output = CreateVerifiedAccessEndpointResult;
  export type Error =
    | CommonAwsError;
}

export declare namespace CreateVerifiedAccessGroup {
  export type Input = CreateVerifiedAccessGroupRequest;
  export type Output = CreateVerifiedAccessGroupResult;
  export type Error =
    | CommonAwsError;
}

export declare namespace CreateVerifiedAccessInstance {
  export type Input = CreateVerifiedAccessInstanceRequest;
  export type Output = CreateVerifiedAccessInstanceResult;
  export type Error =
    | CommonAwsError;
}

export declare namespace CreateVerifiedAccessTrustProvider {
  export type Input = CreateVerifiedAccessTrustProviderRequest;
  export type Output = CreateVerifiedAccessTrustProviderResult;
  export type Error =
    | CommonAwsError;
}

export declare namespace CreateVolume {
  export type Input = CreateVolumeRequest;
  export type Output = Volume;
  export type Error =
    | CommonAwsError;
}

export declare namespace CreateVpc {
  export type Input = CreateVpcRequest;
  export type Output = CreateVpcResult;
  export type Error =
    | CommonAwsError;
}

export declare namespace CreateVpcBlockPublicAccessExclusion {
  export type Input = CreateVpcBlockPublicAccessExclusionRequest;
  export type Output = CreateVpcBlockPublicAccessExclusionResult;
  export type Error =
    | CommonAwsError;
}

export declare namespace CreateVpcEndpoint {
  export type Input = CreateVpcEndpointRequest;
  export type Output = CreateVpcEndpointResult;
  export type Error =
    | CommonAwsError;
}

export declare namespace CreateVpcEndpointConnectionNotification {
  export type Input = CreateVpcEndpointConnectionNotificationRequest;
  export type Output = CreateVpcEndpointConnectionNotificationResult;
  export type Error =
    | CommonAwsError;
}

export declare namespace CreateVpcEndpointServiceConfiguration {
  export type Input = CreateVpcEndpointServiceConfigurationRequest;
  export type Output = CreateVpcEndpointServiceConfigurationResult;
  export type Error =
    | CommonAwsError;
}

export declare namespace CreateVpcPeeringConnection {
  export type Input = CreateVpcPeeringConnectionRequest;
  export type Output = CreateVpcPeeringConnectionResult;
  export type Error =
    | CommonAwsError;
}

export declare namespace CreateVpnConnection {
  export type Input = CreateVpnConnectionRequest;
  export type Output = CreateVpnConnectionResult;
  export type Error =
    | CommonAwsError;
}

export declare namespace CreateVpnConnectionRoute {
  export type Input = CreateVpnConnectionRouteRequest;
  export type Output = {};
  export type Error =
    | CommonAwsError;
}

export declare namespace CreateVpnGateway {
  export type Input = CreateVpnGatewayRequest;
  export type Output = CreateVpnGatewayResult;
  export type Error =
    | CommonAwsError;
}

export declare namespace DeleteCarrierGateway {
  export type Input = DeleteCarrierGatewayRequest;
  export type Output = DeleteCarrierGatewayResult;
  export type Error =
    | CommonAwsError;
}

export declare namespace DeleteClientVpnEndpoint {
  export type Input = DeleteClientVpnEndpointRequest;
  export type Output = DeleteClientVpnEndpointResult;
  export type Error =
    | CommonAwsError;
}

export declare namespace DeleteClientVpnRoute {
  export type Input = DeleteClientVpnRouteRequest;
  export type Output = DeleteClientVpnRouteResult;
  export type Error =
    | CommonAwsError;
}

export declare namespace DeleteCoipCidr {
  export type Input = DeleteCoipCidrRequest;
  export type Output = DeleteCoipCidrResult;
  export type Error =
    | CommonAwsError;
}

export declare namespace DeleteCoipPool {
  export type Input = DeleteCoipPoolRequest;
  export type Output = DeleteCoipPoolResult;
  export type Error =
    | CommonAwsError;
}

export declare namespace DeleteCustomerGateway {
  export type Input = DeleteCustomerGatewayRequest;
  export type Output = {};
  export type Error =
    | CommonAwsError;
}

export declare namespace DeleteDhcpOptions {
  export type Input = DeleteDhcpOptionsRequest;
  export type Output = {};
  export type Error =
    | CommonAwsError;
}

export declare namespace DeleteEgressOnlyInternetGateway {
  export type Input = DeleteEgressOnlyInternetGatewayRequest;
  export type Output = DeleteEgressOnlyInternetGatewayResult;
  export type Error =
    | CommonAwsError;
}

export declare namespace DeleteFleets {
  export type Input = DeleteFleetsRequest;
  export type Output = DeleteFleetsResult;
  export type Error =
    | CommonAwsError;
}

export declare namespace DeleteFlowLogs {
  export type Input = DeleteFlowLogsRequest;
  export type Output = DeleteFlowLogsResult;
  export type Error =
    | CommonAwsError;
}

export declare namespace DeleteFpgaImage {
  export type Input = DeleteFpgaImageRequest;
  export type Output = DeleteFpgaImageResult;
  export type Error =
    | CommonAwsError;
}

export declare namespace DeleteInstanceConnectEndpoint {
  export type Input = DeleteInstanceConnectEndpointRequest;
  export type Output = DeleteInstanceConnectEndpointResult;
  export type Error =
    | CommonAwsError;
}

export declare namespace DeleteInstanceEventWindow {
  export type Input = DeleteInstanceEventWindowRequest;
  export type Output = DeleteInstanceEventWindowResult;
  export type Error =
    | CommonAwsError;
}

export declare namespace DeleteInternetGateway {
  export type Input = DeleteInternetGatewayRequest;
  export type Output = {};
  export type Error =
    | CommonAwsError;
}

export declare namespace DeleteIpam {
  export type Input = DeleteIpamRequest;
  export type Output = DeleteIpamResult;
  export type Error =
    | CommonAwsError;
}

export declare namespace DeleteIpamExternalResourceVerificationToken {
  export type Input = DeleteIpamExternalResourceVerificationTokenRequest;
  export type Output = DeleteIpamExternalResourceVerificationTokenResult;
  export type Error =
    | CommonAwsError;
}

export declare namespace DeleteIpamPool {
  export type Input = DeleteIpamPoolRequest;
  export type Output = DeleteIpamPoolResult;
  export type Error =
    | CommonAwsError;
}

export declare namespace DeleteIpamResourceDiscovery {
  export type Input = DeleteIpamResourceDiscoveryRequest;
  export type Output = DeleteIpamResourceDiscoveryResult;
  export type Error =
    | CommonAwsError;
}

export declare namespace DeleteIpamScope {
  export type Input = DeleteIpamScopeRequest;
  export type Output = DeleteIpamScopeResult;
  export type Error =
    | CommonAwsError;
}

export declare namespace DeleteKeyPair {
  export type Input = DeleteKeyPairRequest;
  export type Output = DeleteKeyPairResult;
  export type Error =
    | CommonAwsError;
}

export declare namespace DeleteLaunchTemplate {
  export type Input = DeleteLaunchTemplateRequest;
  export type Output = DeleteLaunchTemplateResult;
  export type Error =
    | CommonAwsError;
}

export declare namespace DeleteLaunchTemplateVersions {
  export type Input = DeleteLaunchTemplateVersionsRequest;
  export type Output = DeleteLaunchTemplateVersionsResult;
  export type Error =
    | CommonAwsError;
}

export declare namespace DeleteLocalGatewayRoute {
  export type Input = DeleteLocalGatewayRouteRequest;
  export type Output = DeleteLocalGatewayRouteResult;
  export type Error =
    | CommonAwsError;
}

export declare namespace DeleteLocalGatewayRouteTable {
  export type Input = DeleteLocalGatewayRouteTableRequest;
  export type Output = DeleteLocalGatewayRouteTableResult;
  export type Error =
    | CommonAwsError;
}

export declare namespace DeleteLocalGatewayRouteTableVirtualInterfaceGroupAssociation {
  export type Input = DeleteLocalGatewayRouteTableVirtualInterfaceGroupAssociationRequest;
  export type Output = DeleteLocalGatewayRouteTableVirtualInterfaceGroupAssociationResult;
  export type Error =
    | CommonAwsError;
}

export declare namespace DeleteLocalGatewayRouteTableVpcAssociation {
  export type Input = DeleteLocalGatewayRouteTableVpcAssociationRequest;
  export type Output = DeleteLocalGatewayRouteTableVpcAssociationResult;
  export type Error =
    | CommonAwsError;
}

export declare namespace DeleteLocalGatewayVirtualInterface {
  export type Input = DeleteLocalGatewayVirtualInterfaceRequest;
  export type Output = DeleteLocalGatewayVirtualInterfaceResult;
  export type Error =
    | CommonAwsError;
}

export declare namespace DeleteLocalGatewayVirtualInterfaceGroup {
  export type Input = DeleteLocalGatewayVirtualInterfaceGroupRequest;
  export type Output = DeleteLocalGatewayVirtualInterfaceGroupResult;
  export type Error =
    | CommonAwsError;
}

export declare namespace DeleteManagedPrefixList {
  export type Input = DeleteManagedPrefixListRequest;
  export type Output = DeleteManagedPrefixListResult;
  export type Error =
    | CommonAwsError;
}

export declare namespace DeleteNatGateway {
  export type Input = DeleteNatGatewayRequest;
  export type Output = DeleteNatGatewayResult;
  export type Error =
    | CommonAwsError;
}

export declare namespace DeleteNetworkAcl {
  export type Input = DeleteNetworkAclRequest;
  export type Output = {};
  export type Error =
    | CommonAwsError;
}

export declare namespace DeleteNetworkAclEntry {
  export type Input = DeleteNetworkAclEntryRequest;
  export type Output = {};
  export type Error =
    | CommonAwsError;
}

export declare namespace DeleteNetworkInsightsAccessScope {
  export type Input = DeleteNetworkInsightsAccessScopeRequest;
  export type Output = DeleteNetworkInsightsAccessScopeResult;
  export type Error =
    | CommonAwsError;
}

export declare namespace DeleteNetworkInsightsAccessScopeAnalysis {
  export type Input = DeleteNetworkInsightsAccessScopeAnalysisRequest;
  export type Output = DeleteNetworkInsightsAccessScopeAnalysisResult;
  export type Error =
    | CommonAwsError;
}

export declare namespace DeleteNetworkInsightsAnalysis {
  export type Input = DeleteNetworkInsightsAnalysisRequest;
  export type Output = DeleteNetworkInsightsAnalysisResult;
  export type Error =
    | CommonAwsError;
}

export declare namespace DeleteNetworkInsightsPath {
  export type Input = DeleteNetworkInsightsPathRequest;
  export type Output = DeleteNetworkInsightsPathResult;
  export type Error =
    | CommonAwsError;
}

export declare namespace DeleteNetworkInterface {
  export type Input = DeleteNetworkInterfaceRequest;
  export type Output = {};
  export type Error =
    | CommonAwsError;
}

export declare namespace DeleteNetworkInterfacePermission {
  export type Input = DeleteNetworkInterfacePermissionRequest;
  export type Output = DeleteNetworkInterfacePermissionResult;
  export type Error =
    | CommonAwsError;
}

export declare namespace DeletePlacementGroup {
  export type Input = DeletePlacementGroupRequest;
  export type Output = {};
  export type Error =
    | CommonAwsError;
}

export declare namespace DeletePublicIpv4Pool {
  export type Input = DeletePublicIpv4PoolRequest;
  export type Output = DeletePublicIpv4PoolResult;
  export type Error =
    | CommonAwsError;
}

export declare namespace DeleteQueuedReservedInstances {
  export type Input = DeleteQueuedReservedInstancesRequest;
  export type Output = DeleteQueuedReservedInstancesResult;
  export type Error =
    | CommonAwsError;
}

export declare namespace DeleteRoute {
  export type Input = DeleteRouteRequest;
  export type Output = {};
  export type Error =
    | CommonAwsError;
}

export declare namespace DeleteRouteServer {
  export type Input = DeleteRouteServerRequest;
  export type Output = DeleteRouteServerResult;
  export type Error =
    | CommonAwsError;
}

export declare namespace DeleteRouteServerEndpoint {
  export type Input = DeleteRouteServerEndpointRequest;
  export type Output = DeleteRouteServerEndpointResult;
  export type Error =
    | CommonAwsError;
}

export declare namespace DeleteRouteServerPeer {
  export type Input = DeleteRouteServerPeerRequest;
  export type Output = DeleteRouteServerPeerResult;
  export type Error =
    | CommonAwsError;
}

export declare namespace DeleteRouteTable {
  export type Input = DeleteRouteTableRequest;
  export type Output = {};
  export type Error =
    | CommonAwsError;
}

export declare namespace DeleteSecurityGroup {
  export type Input = DeleteSecurityGroupRequest;
  export type Output = DeleteSecurityGroupResult;
  export type Error =
    | CommonAwsError;
}

export declare namespace DeleteSnapshot {
  export type Input = DeleteSnapshotRequest;
  export type Output = {};
  export type Error =
    | CommonAwsError;
}

export declare namespace DeleteSpotDatafeedSubscription {
  export type Input = DeleteSpotDatafeedSubscriptionRequest;
  export type Output = {};
  export type Error =
    | CommonAwsError;
}

export declare namespace DeleteSubnet {
  export type Input = DeleteSubnetRequest;
  export type Output = {};
  export type Error =
    | CommonAwsError;
}

export declare namespace DeleteSubnetCidrReservation {
  export type Input = DeleteSubnetCidrReservationRequest;
  export type Output = DeleteSubnetCidrReservationResult;
  export type Error =
    | CommonAwsError;
}

export declare namespace DeleteTags {
  export type Input = DeleteTagsRequest;
  export type Output = {};
  export type Error =
    | CommonAwsError;
}

export declare namespace DeleteTrafficMirrorFilter {
  export type Input = DeleteTrafficMirrorFilterRequest;
  export type Output = DeleteTrafficMirrorFilterResult;
  export type Error =
    | CommonAwsError;
}

export declare namespace DeleteTrafficMirrorFilterRule {
  export type Input = DeleteTrafficMirrorFilterRuleRequest;
  export type Output = DeleteTrafficMirrorFilterRuleResult;
  export type Error =
    | CommonAwsError;
}

export declare namespace DeleteTrafficMirrorSession {
  export type Input = DeleteTrafficMirrorSessionRequest;
  export type Output = DeleteTrafficMirrorSessionResult;
  export type Error =
    | CommonAwsError;
}

export declare namespace DeleteTrafficMirrorTarget {
  export type Input = DeleteTrafficMirrorTargetRequest;
  export type Output = DeleteTrafficMirrorTargetResult;
  export type Error =
    | CommonAwsError;
}

export declare namespace DeleteTransitGateway {
  export type Input = DeleteTransitGatewayRequest;
  export type Output = DeleteTransitGatewayResult;
  export type Error =
    | CommonAwsError;
}

export declare namespace DeleteTransitGatewayConnect {
  export type Input = DeleteTransitGatewayConnectRequest;
  export type Output = DeleteTransitGatewayConnectResult;
  export type Error =
    | CommonAwsError;
}

export declare namespace DeleteTransitGatewayConnectPeer {
  export type Input = DeleteTransitGatewayConnectPeerRequest;
  export type Output = DeleteTransitGatewayConnectPeerResult;
  export type Error =
    | CommonAwsError;
}

export declare namespace DeleteTransitGatewayMulticastDomain {
  export type Input = DeleteTransitGatewayMulticastDomainRequest;
  export type Output = DeleteTransitGatewayMulticastDomainResult;
  export type Error =
    | CommonAwsError;
}

export declare namespace DeleteTransitGatewayPeeringAttachment {
  export type Input = DeleteTransitGatewayPeeringAttachmentRequest;
  export type Output = DeleteTransitGatewayPeeringAttachmentResult;
  export type Error =
    | CommonAwsError;
}

export declare namespace DeleteTransitGatewayPolicyTable {
  export type Input = DeleteTransitGatewayPolicyTableRequest;
  export type Output = DeleteTransitGatewayPolicyTableResult;
  export type Error =
    | CommonAwsError;
}

export declare namespace DeleteTransitGatewayPrefixListReference {
  export type Input = DeleteTransitGatewayPrefixListReferenceRequest;
  export type Output = DeleteTransitGatewayPrefixListReferenceResult;
  export type Error =
    | CommonAwsError;
}

export declare namespace DeleteTransitGatewayRoute {
  export type Input = DeleteTransitGatewayRouteRequest;
  export type Output = DeleteTransitGatewayRouteResult;
  export type Error =
    | CommonAwsError;
}

export declare namespace DeleteTransitGatewayRouteTable {
  export type Input = DeleteTransitGatewayRouteTableRequest;
  export type Output = DeleteTransitGatewayRouteTableResult;
  export type Error =
    | CommonAwsError;
}

export declare namespace DeleteTransitGatewayRouteTableAnnouncement {
  export type Input = DeleteTransitGatewayRouteTableAnnouncementRequest;
  export type Output = DeleteTransitGatewayRouteTableAnnouncementResult;
  export type Error =
    | CommonAwsError;
}

export declare namespace DeleteTransitGatewayVpcAttachment {
  export type Input = DeleteTransitGatewayVpcAttachmentRequest;
  export type Output = DeleteTransitGatewayVpcAttachmentResult;
  export type Error =
    | CommonAwsError;
}

export declare namespace DeleteVerifiedAccessEndpoint {
  export type Input = DeleteVerifiedAccessEndpointRequest;
  export type Output = DeleteVerifiedAccessEndpointResult;
  export type Error =
    | CommonAwsError;
}

export declare namespace DeleteVerifiedAccessGroup {
  export type Input = DeleteVerifiedAccessGroupRequest;
  export type Output = DeleteVerifiedAccessGroupResult;
  export type Error =
    | CommonAwsError;
}

export declare namespace DeleteVerifiedAccessInstance {
  export type Input = DeleteVerifiedAccessInstanceRequest;
  export type Output = DeleteVerifiedAccessInstanceResult;
  export type Error =
    | CommonAwsError;
}

export declare namespace DeleteVerifiedAccessTrustProvider {
  export type Input = DeleteVerifiedAccessTrustProviderRequest;
  export type Output = DeleteVerifiedAccessTrustProviderResult;
  export type Error =
    | CommonAwsError;
}

export declare namespace DeleteVolume {
  export type Input = DeleteVolumeRequest;
  export type Output = {};
  export type Error =
    | CommonAwsError;
}

export declare namespace DeleteVpc {
  export type Input = DeleteVpcRequest;
  export type Output = {};
  export type Error =
    | CommonAwsError;
}

export declare namespace DeleteVpcBlockPublicAccessExclusion {
  export type Input = DeleteVpcBlockPublicAccessExclusionRequest;
  export type Output = DeleteVpcBlockPublicAccessExclusionResult;
  export type Error =
    | CommonAwsError;
}

export declare namespace DeleteVpcEndpointConnectionNotifications {
  export type Input = DeleteVpcEndpointConnectionNotificationsRequest;
  export type Output = DeleteVpcEndpointConnectionNotificationsResult;
  export type Error =
    | CommonAwsError;
}

export declare namespace DeleteVpcEndpointServiceConfigurations {
  export type Input = DeleteVpcEndpointServiceConfigurationsRequest;
  export type Output = DeleteVpcEndpointServiceConfigurationsResult;
  export type Error =
    | CommonAwsError;
}

export declare namespace DeleteVpcEndpoints {
  export type Input = DeleteVpcEndpointsRequest;
  export type Output = DeleteVpcEndpointsResult;
  export type Error =
    | CommonAwsError;
}

export declare namespace DeleteVpcPeeringConnection {
  export type Input = DeleteVpcPeeringConnectionRequest;
  export type Output = DeleteVpcPeeringConnectionResult;
  export type Error =
    | CommonAwsError;
}

export declare namespace DeleteVpnConnection {
  export type Input = DeleteVpnConnectionRequest;
  export type Output = {};
  export type Error =
    | CommonAwsError;
}

export declare namespace DeleteVpnConnectionRoute {
  export type Input = DeleteVpnConnectionRouteRequest;
  export type Output = {};
  export type Error =
    | CommonAwsError;
}

export declare namespace DeleteVpnGateway {
  export type Input = DeleteVpnGatewayRequest;
  export type Output = {};
  export type Error =
    | CommonAwsError;
}

export declare namespace DeprovisionByoipCidr {
  export type Input = DeprovisionByoipCidrRequest;
  export type Output = DeprovisionByoipCidrResult;
  export type Error =
    | CommonAwsError;
}

export declare namespace DeprovisionIpamByoasn {
  export type Input = DeprovisionIpamByoasnRequest;
  export type Output = DeprovisionIpamByoasnResult;
  export type Error =
    | CommonAwsError;
}

export declare namespace DeprovisionIpamPoolCidr {
  export type Input = DeprovisionIpamPoolCidrRequest;
  export type Output = DeprovisionIpamPoolCidrResult;
  export type Error =
    | CommonAwsError;
}

export declare namespace DeprovisionPublicIpv4PoolCidr {
  export type Input = DeprovisionPublicIpv4PoolCidrRequest;
  export type Output = DeprovisionPublicIpv4PoolCidrResult;
  export type Error =
    | CommonAwsError;
}

export declare namespace DeregisterImage {
  export type Input = DeregisterImageRequest;
  export type Output = DeregisterImageResult;
  export type Error =
    | CommonAwsError;
}

export declare namespace DeregisterInstanceEventNotificationAttributes {
  export type Input = DeregisterInstanceEventNotificationAttributesRequest;
  export type Output = DeregisterInstanceEventNotificationAttributesResult;
  export type Error =
    | CommonAwsError;
}

export declare namespace DeregisterTransitGatewayMulticastGroupMembers {
  export type Input = DeregisterTransitGatewayMulticastGroupMembersRequest;
  export type Output = DeregisterTransitGatewayMulticastGroupMembersResult;
  export type Error =
    | CommonAwsError;
}

export declare namespace DeregisterTransitGatewayMulticastGroupSources {
  export type Input = DeregisterTransitGatewayMulticastGroupSourcesRequest;
  export type Output = DeregisterTransitGatewayMulticastGroupSourcesResult;
  export type Error =
    | CommonAwsError;
}

export declare namespace DescribeAccountAttributes {
  export type Input = DescribeAccountAttributesRequest;
  export type Output = DescribeAccountAttributesResult;
  export type Error =
    | CommonAwsError;
}

export declare namespace DescribeAddressTransfers {
  export type Input = DescribeAddressTransfersRequest;
  export type Output = DescribeAddressTransfersResult;
  export type Error =
    | CommonAwsError;
}

export declare namespace DescribeAddresses {
  export type Input = DescribeAddressesRequest;
  export type Output = DescribeAddressesResult;
  export type Error =
    | CommonAwsError;
}

export declare namespace DescribeAddressesAttribute {
  export type Input = DescribeAddressesAttributeRequest;
  export type Output = DescribeAddressesAttributeResult;
  export type Error =
    | CommonAwsError;
}

export declare namespace DescribeAggregateIdFormat {
  export type Input = DescribeAggregateIdFormatRequest;
  export type Output = DescribeAggregateIdFormatResult;
  export type Error =
    | CommonAwsError;
}

export declare namespace DescribeAvailabilityZones {
  export type Input = DescribeAvailabilityZonesRequest;
  export type Output = DescribeAvailabilityZonesResult;
  export type Error =
    | CommonAwsError;
}

export declare namespace DescribeAwsNetworkPerformanceMetricSubscriptions {
  export type Input = DescribeAwsNetworkPerformanceMetricSubscriptionsRequest;
  export type Output = DescribeAwsNetworkPerformanceMetricSubscriptionsResult;
  export type Error =
    | CommonAwsError;
}

export declare namespace DescribeBundleTasks {
  export type Input = DescribeBundleTasksRequest;
  export type Output = DescribeBundleTasksResult;
  export type Error =
    | CommonAwsError;
}

export declare namespace DescribeByoipCidrs {
  export type Input = DescribeByoipCidrsRequest;
  export type Output = DescribeByoipCidrsResult;
  export type Error =
    | CommonAwsError;
}

export declare namespace DescribeCapacityBlockExtensionHistory {
  export type Input = DescribeCapacityBlockExtensionHistoryRequest;
  export type Output = DescribeCapacityBlockExtensionHistoryResult;
  export type Error =
    | CommonAwsError;
}

export declare namespace DescribeCapacityBlockExtensionOfferings {
  export type Input = DescribeCapacityBlockExtensionOfferingsRequest;
  export type Output = DescribeCapacityBlockExtensionOfferingsResult;
  export type Error =
    | CommonAwsError;
}

export declare namespace DescribeCapacityBlockOfferings {
  export type Input = DescribeCapacityBlockOfferingsRequest;
  export type Output = DescribeCapacityBlockOfferingsResult;
  export type Error =
    | CommonAwsError;
}

export declare namespace DescribeCapacityBlockStatus {
  export type Input = DescribeCapacityBlockStatusRequest;
  export type Output = DescribeCapacityBlockStatusResult;
  export type Error =
    | CommonAwsError;
}

export declare namespace DescribeCapacityBlocks {
  export type Input = DescribeCapacityBlocksRequest;
  export type Output = DescribeCapacityBlocksResult;
  export type Error =
    | CommonAwsError;
}

export declare namespace DescribeCapacityReservationBillingRequests {
  export type Input = DescribeCapacityReservationBillingRequestsRequest;
  export type Output = DescribeCapacityReservationBillingRequestsResult;
  export type Error =
    | CommonAwsError;
}

export declare namespace DescribeCapacityReservationFleets {
  export type Input = DescribeCapacityReservationFleetsRequest;
  export type Output = DescribeCapacityReservationFleetsResult;
  export type Error =
    | CommonAwsError;
}

export declare namespace DescribeCapacityReservations {
  export type Input = DescribeCapacityReservationsRequest;
  export type Output = DescribeCapacityReservationsResult;
  export type Error =
    | CommonAwsError;
}

export declare namespace DescribeCarrierGateways {
  export type Input = DescribeCarrierGatewaysRequest;
  export type Output = DescribeCarrierGatewaysResult;
  export type Error =
    | CommonAwsError;
}

export declare namespace DescribeClassicLinkInstances {
  export type Input = DescribeClassicLinkInstancesRequest;
  export type Output = DescribeClassicLinkInstancesResult;
  export type Error =
    | CommonAwsError;
}

export declare namespace DescribeClientVpnAuthorizationRules {
  export type Input = DescribeClientVpnAuthorizationRulesRequest;
  export type Output = DescribeClientVpnAuthorizationRulesResult;
  export type Error =
    | CommonAwsError;
}

export declare namespace DescribeClientVpnConnections {
  export type Input = DescribeClientVpnConnectionsRequest;
  export type Output = DescribeClientVpnConnectionsResult;
  export type Error =
    | CommonAwsError;
}

export declare namespace DescribeClientVpnEndpoints {
  export type Input = DescribeClientVpnEndpointsRequest;
  export type Output = DescribeClientVpnEndpointsResult;
  export type Error =
    | CommonAwsError;
}

export declare namespace DescribeClientVpnRoutes {
  export type Input = DescribeClientVpnRoutesRequest;
  export type Output = DescribeClientVpnRoutesResult;
  export type Error =
    | CommonAwsError;
}

export declare namespace DescribeClientVpnTargetNetworks {
  export type Input = DescribeClientVpnTargetNetworksRequest;
  export type Output = DescribeClientVpnTargetNetworksResult;
  export type Error =
    | CommonAwsError;
}

export declare namespace DescribeCoipPools {
  export type Input = DescribeCoipPoolsRequest;
  export type Output = DescribeCoipPoolsResult;
  export type Error =
    | CommonAwsError;
}

export declare namespace DescribeConversionTasks {
  export type Input = DescribeConversionTasksRequest;
  export type Output = DescribeConversionTasksResult;
  export type Error =
    | CommonAwsError;
}

export declare namespace DescribeCustomerGateways {
  export type Input = DescribeCustomerGatewaysRequest;
  export type Output = DescribeCustomerGatewaysResult;
  export type Error =
    | CommonAwsError;
}

export declare namespace DescribeDeclarativePoliciesReports {
  export type Input = DescribeDeclarativePoliciesReportsRequest;
  export type Output = DescribeDeclarativePoliciesReportsResult;
  export type Error =
    | CommonAwsError;
}

export declare namespace DescribeDhcpOptions {
  export type Input = DescribeDhcpOptionsRequest;
  export type Output = DescribeDhcpOptionsResult;
  export type Error =
    | CommonAwsError;
}

export declare namespace DescribeEgressOnlyInternetGateways {
  export type Input = DescribeEgressOnlyInternetGatewaysRequest;
  export type Output = DescribeEgressOnlyInternetGatewaysResult;
  export type Error =
    | CommonAwsError;
}

export declare namespace DescribeElasticGpus {
  export type Input = DescribeElasticGpusRequest;
  export type Output = DescribeElasticGpusResult;
  export type Error =
    | CommonAwsError;
}

export declare namespace DescribeExportImageTasks {
  export type Input = DescribeExportImageTasksRequest;
  export type Output = DescribeExportImageTasksResult;
  export type Error =
    | CommonAwsError;
}

export declare namespace DescribeExportTasks {
  export type Input = DescribeExportTasksRequest;
  export type Output = DescribeExportTasksResult;
  export type Error =
    | CommonAwsError;
}

export declare namespace DescribeFastLaunchImages {
  export type Input = DescribeFastLaunchImagesRequest;
  export type Output = DescribeFastLaunchImagesResult;
  export type Error =
    | CommonAwsError;
}

export declare namespace DescribeFastSnapshotRestores {
  export type Input = DescribeFastSnapshotRestoresRequest;
  export type Output = DescribeFastSnapshotRestoresResult;
  export type Error =
    | CommonAwsError;
}

export declare namespace DescribeFleetHistory {
  export type Input = DescribeFleetHistoryRequest;
  export type Output = DescribeFleetHistoryResult;
  export type Error =
    | CommonAwsError;
}

export declare namespace DescribeFleetInstances {
  export type Input = DescribeFleetInstancesRequest;
  export type Output = DescribeFleetInstancesResult;
  export type Error =
    | CommonAwsError;
}

export declare namespace DescribeFleets {
  export type Input = DescribeFleetsRequest;
  export type Output = DescribeFleetsResult;
  export type Error =
    | CommonAwsError;
}

export declare namespace DescribeFlowLogs {
  export type Input = DescribeFlowLogsRequest;
  export type Output = DescribeFlowLogsResult;
  export type Error =
    | CommonAwsError;
}

export declare namespace DescribeFpgaImageAttribute {
  export type Input = DescribeFpgaImageAttributeRequest;
  export type Output = DescribeFpgaImageAttributeResult;
  export type Error =
    | CommonAwsError;
}

export declare namespace DescribeFpgaImages {
  export type Input = DescribeFpgaImagesRequest;
  export type Output = DescribeFpgaImagesResult;
  export type Error =
    | CommonAwsError;
}

export declare namespace DescribeHostReservationOfferings {
  export type Input = DescribeHostReservationOfferingsRequest;
  export type Output = DescribeHostReservationOfferingsResult;
  export type Error =
    | CommonAwsError;
}

export declare namespace DescribeHostReservations {
  export type Input = DescribeHostReservationsRequest;
  export type Output = DescribeHostReservationsResult;
  export type Error =
    | CommonAwsError;
}

export declare namespace DescribeHosts {
  export type Input = DescribeHostsRequest;
  export type Output = DescribeHostsResult;
  export type Error =
    | CommonAwsError;
}

export declare namespace DescribeIamInstanceProfileAssociations {
  export type Input = DescribeIamInstanceProfileAssociationsRequest;
  export type Output = DescribeIamInstanceProfileAssociationsResult;
  export type Error =
    | CommonAwsError;
}

export declare namespace DescribeIdFormat {
  export type Input = DescribeIdFormatRequest;
  export type Output = DescribeIdFormatResult;
  export type Error =
    | CommonAwsError;
}

export declare namespace DescribeIdentityIdFormat {
  export type Input = DescribeIdentityIdFormatRequest;
  export type Output = DescribeIdentityIdFormatResult;
  export type Error =
    | CommonAwsError;
}

export declare namespace DescribeImageAttribute {
  export type Input = DescribeImageAttributeRequest;
  export type Output = ImageAttribute;
  export type Error =
    | CommonAwsError;
}

export declare namespace DescribeImages {
  export type Input = DescribeImagesRequest;
  export type Output = DescribeImagesResult;
  export type Error =
    | CommonAwsError;
}

export declare namespace DescribeImportImageTasks {
  export type Input = DescribeImportImageTasksRequest;
  export type Output = DescribeImportImageTasksResult;
  export type Error =
    | CommonAwsError;
}

export declare namespace DescribeImportSnapshotTasks {
  export type Input = DescribeImportSnapshotTasksRequest;
  export type Output = DescribeImportSnapshotTasksResult;
  export type Error =
    | CommonAwsError;
}

export declare namespace DescribeInstanceAttribute {
  export type Input = DescribeInstanceAttributeRequest;
  export type Output = InstanceAttribute;
  export type Error =
    | CommonAwsError;
}

export declare namespace DescribeInstanceConnectEndpoints {
  export type Input = DescribeInstanceConnectEndpointsRequest;
  export type Output = DescribeInstanceConnectEndpointsResult;
  export type Error =
    | CommonAwsError;
}

export declare namespace DescribeInstanceCreditSpecifications {
  export type Input = DescribeInstanceCreditSpecificationsRequest;
  export type Output = DescribeInstanceCreditSpecificationsResult;
  export type Error =
    | CommonAwsError;
}

export declare namespace DescribeInstanceEventNotificationAttributes {
  export type Input = DescribeInstanceEventNotificationAttributesRequest;
  export type Output = DescribeInstanceEventNotificationAttributesResult;
  export type Error =
    | CommonAwsError;
}

export declare namespace DescribeInstanceEventWindows {
  export type Input = DescribeInstanceEventWindowsRequest;
  export type Output = DescribeInstanceEventWindowsResult;
  export type Error =
    | CommonAwsError;
}

export declare namespace DescribeInstanceImageMetadata {
  export type Input = DescribeInstanceImageMetadataRequest;
  export type Output = DescribeInstanceImageMetadataResult;
  export type Error =
    | CommonAwsError;
}

export declare namespace DescribeInstanceStatus {
  export type Input = DescribeInstanceStatusRequest;
  export type Output = DescribeInstanceStatusResult;
  export type Error =
    | CommonAwsError;
}

export declare namespace DescribeInstanceTopology {
  export type Input = DescribeInstanceTopologyRequest;
  export type Output = DescribeInstanceTopologyResult;
  export type Error =
    | CommonAwsError;
}

export declare namespace DescribeInstanceTypeOfferings {
  export type Input = DescribeInstanceTypeOfferingsRequest;
  export type Output = DescribeInstanceTypeOfferingsResult;
  export type Error =
    | CommonAwsError;
}

export declare namespace DescribeInstanceTypes {
  export type Input = DescribeInstanceTypesRequest;
  export type Output = DescribeInstanceTypesResult;
  export type Error =
    | CommonAwsError;
}

export declare namespace DescribeInstances {
  export type Input = DescribeInstancesRequest;
  export type Output = DescribeInstancesResult;
  export type Error =
    | CommonAwsError;
}

export declare namespace DescribeInternetGateways {
  export type Input = DescribeInternetGatewaysRequest;
  export type Output = DescribeInternetGatewaysResult;
  export type Error =
    | CommonAwsError;
}

export declare namespace DescribeIpamByoasn {
  export type Input = DescribeIpamByoasnRequest;
  export type Output = DescribeIpamByoasnResult;
  export type Error =
    | CommonAwsError;
}

export declare namespace DescribeIpamExternalResourceVerificationTokens {
  export type Input = DescribeIpamExternalResourceVerificationTokensRequest;
  export type Output = DescribeIpamExternalResourceVerificationTokensResult;
  export type Error =
    | CommonAwsError;
}

export declare namespace DescribeIpamPools {
  export type Input = DescribeIpamPoolsRequest;
  export type Output = DescribeIpamPoolsResult;
  export type Error =
    | CommonAwsError;
}

export declare namespace DescribeIpamResourceDiscoveries {
  export type Input = DescribeIpamResourceDiscoveriesRequest;
  export type Output = DescribeIpamResourceDiscoveriesResult;
  export type Error =
    | CommonAwsError;
}

export declare namespace DescribeIpamResourceDiscoveryAssociations {
  export type Input = DescribeIpamResourceDiscoveryAssociationsRequest;
  export type Output = DescribeIpamResourceDiscoveryAssociationsResult;
  export type Error =
    | CommonAwsError;
}

export declare namespace DescribeIpamScopes {
  export type Input = DescribeIpamScopesRequest;
  export type Output = DescribeIpamScopesResult;
  export type Error =
    | CommonAwsError;
}

export declare namespace DescribeIpams {
  export type Input = DescribeIpamsRequest;
  export type Output = DescribeIpamsResult;
  export type Error =
    | CommonAwsError;
}

export declare namespace DescribeIpv6Pools {
  export type Input = DescribeIpv6PoolsRequest;
  export type Output = DescribeIpv6PoolsResult;
  export type Error =
    | CommonAwsError;
}

export declare namespace DescribeKeyPairs {
  export type Input = DescribeKeyPairsRequest;
  export type Output = DescribeKeyPairsResult;
  export type Error =
    | CommonAwsError;
}

export declare namespace DescribeLaunchTemplateVersions {
  export type Input = DescribeLaunchTemplateVersionsRequest;
  export type Output = DescribeLaunchTemplateVersionsResult;
  export type Error =
    | CommonAwsError;
}

export declare namespace DescribeLaunchTemplates {
  export type Input = DescribeLaunchTemplatesRequest;
  export type Output = DescribeLaunchTemplatesResult;
  export type Error =
    | CommonAwsError;
}

export declare namespace DescribeLocalGatewayRouteTableVirtualInterfaceGroupAssociations {
  export type Input = DescribeLocalGatewayRouteTableVirtualInterfaceGroupAssociationsRequest;
  export type Output = DescribeLocalGatewayRouteTableVirtualInterfaceGroupAssociationsResult;
  export type Error =
    | CommonAwsError;
}

export declare namespace DescribeLocalGatewayRouteTableVpcAssociations {
  export type Input = DescribeLocalGatewayRouteTableVpcAssociationsRequest;
  export type Output = DescribeLocalGatewayRouteTableVpcAssociationsResult;
  export type Error =
    | CommonAwsError;
}

export declare namespace DescribeLocalGatewayRouteTables {
  export type Input = DescribeLocalGatewayRouteTablesRequest;
  export type Output = DescribeLocalGatewayRouteTablesResult;
  export type Error =
    | CommonAwsError;
}

export declare namespace DescribeLocalGatewayVirtualInterfaceGroups {
  export type Input = DescribeLocalGatewayVirtualInterfaceGroupsRequest;
  export type Output = DescribeLocalGatewayVirtualInterfaceGroupsResult;
  export type Error =
    | CommonAwsError;
}

export declare namespace DescribeLocalGatewayVirtualInterfaces {
  export type Input = DescribeLocalGatewayVirtualInterfacesRequest;
  export type Output = DescribeLocalGatewayVirtualInterfacesResult;
  export type Error =
    | CommonAwsError;
}

export declare namespace DescribeLocalGateways {
  export type Input = DescribeLocalGatewaysRequest;
  export type Output = DescribeLocalGatewaysResult;
  export type Error =
    | CommonAwsError;
}

export declare namespace DescribeLockedSnapshots {
  export type Input = DescribeLockedSnapshotsRequest;
  export type Output = DescribeLockedSnapshotsResult;
  export type Error =
    | CommonAwsError;
}

export declare namespace DescribeMacHosts {
  export type Input = DescribeMacHostsRequest;
  export type Output = DescribeMacHostsResult;
  export type Error =
    | CommonAwsError;
}

export declare namespace DescribeMacModificationTasks {
  export type Input = DescribeMacModificationTasksRequest;
  export type Output = DescribeMacModificationTasksResult;
  export type Error =
    | CommonAwsError;
}

export declare namespace DescribeManagedPrefixLists {
  export type Input = DescribeManagedPrefixListsRequest;
  export type Output = DescribeManagedPrefixListsResult;
  export type Error =
    | CommonAwsError;
}

export declare namespace DescribeMovingAddresses {
  export type Input = DescribeMovingAddressesRequest;
  export type Output = DescribeMovingAddressesResult;
  export type Error =
    | CommonAwsError;
}

export declare namespace DescribeNatGateways {
  export type Input = DescribeNatGatewaysRequest;
  export type Output = DescribeNatGatewaysResult;
  export type Error =
    | CommonAwsError;
}

export declare namespace DescribeNetworkAcls {
  export type Input = DescribeNetworkAclsRequest;
  export type Output = DescribeNetworkAclsResult;
  export type Error =
    | CommonAwsError;
}

export declare namespace DescribeNetworkInsightsAccessScopeAnalyses {
  export type Input = DescribeNetworkInsightsAccessScopeAnalysesRequest;
  export type Output = DescribeNetworkInsightsAccessScopeAnalysesResult;
  export type Error =
    | CommonAwsError;
}

export declare namespace DescribeNetworkInsightsAccessScopes {
  export type Input = DescribeNetworkInsightsAccessScopesRequest;
  export type Output = DescribeNetworkInsightsAccessScopesResult;
  export type Error =
    | CommonAwsError;
}

export declare namespace DescribeNetworkInsightsAnalyses {
  export type Input = DescribeNetworkInsightsAnalysesRequest;
  export type Output = DescribeNetworkInsightsAnalysesResult;
  export type Error =
    | CommonAwsError;
}

export declare namespace DescribeNetworkInsightsPaths {
  export type Input = DescribeNetworkInsightsPathsRequest;
  export type Output = DescribeNetworkInsightsPathsResult;
  export type Error =
    | CommonAwsError;
}

export declare namespace DescribeNetworkInterfaceAttribute {
  export type Input = DescribeNetworkInterfaceAttributeRequest;
  export type Output = DescribeNetworkInterfaceAttributeResult;
  export type Error =
    | CommonAwsError;
}

export declare namespace DescribeNetworkInterfacePermissions {
  export type Input = DescribeNetworkInterfacePermissionsRequest;
  export type Output = DescribeNetworkInterfacePermissionsResult;
  export type Error =
    | CommonAwsError;
}

export declare namespace DescribeNetworkInterfaces {
  export type Input = DescribeNetworkInterfacesRequest;
  export type Output = DescribeNetworkInterfacesResult;
  export type Error =
    | CommonAwsError;
}

export declare namespace DescribeOutpostLags {
  export type Input = DescribeOutpostLagsRequest;
  export type Output = DescribeOutpostLagsResult;
  export type Error =
    | CommonAwsError;
}

export declare namespace DescribePlacementGroups {
  export type Input = DescribePlacementGroupsRequest;
  export type Output = DescribePlacementGroupsResult;
  export type Error =
    | CommonAwsError;
}

export declare namespace DescribePrefixLists {
  export type Input = DescribePrefixListsRequest;
  export type Output = DescribePrefixListsResult;
  export type Error =
    | CommonAwsError;
}

export declare namespace DescribePrincipalIdFormat {
  export type Input = DescribePrincipalIdFormatRequest;
  export type Output = DescribePrincipalIdFormatResult;
  export type Error =
    | CommonAwsError;
}

export declare namespace DescribePublicIpv4Pools {
  export type Input = DescribePublicIpv4PoolsRequest;
  export type Output = DescribePublicIpv4PoolsResult;
  export type Error =
    | CommonAwsError;
}

export declare namespace DescribeRegions {
  export type Input = DescribeRegionsRequest;
  export type Output = DescribeRegionsResult;
  export type Error =
    | CommonAwsError;
}

export declare namespace DescribeReplaceRootVolumeTasks {
  export type Input = DescribeReplaceRootVolumeTasksRequest;
  export type Output = DescribeReplaceRootVolumeTasksResult;
  export type Error =
    | CommonAwsError;
}

export declare namespace DescribeReservedInstances {
  export type Input = DescribeReservedInstancesRequest;
  export type Output = DescribeReservedInstancesResult;
  export type Error =
    | CommonAwsError;
}

export declare namespace DescribeReservedInstancesListings {
  export type Input = DescribeReservedInstancesListingsRequest;
  export type Output = DescribeReservedInstancesListingsResult;
  export type Error =
    | CommonAwsError;
}

export declare namespace DescribeReservedInstancesModifications {
  export type Input = DescribeReservedInstancesModificationsRequest;
  export type Output = DescribeReservedInstancesModificationsResult;
  export type Error =
    | CommonAwsError;
}

export declare namespace DescribeReservedInstancesOfferings {
  export type Input = DescribeReservedInstancesOfferingsRequest;
  export type Output = DescribeReservedInstancesOfferingsResult;
  export type Error =
    | CommonAwsError;
}

export declare namespace DescribeRouteServerEndpoints {
  export type Input = DescribeRouteServerEndpointsRequest;
  export type Output = DescribeRouteServerEndpointsResult;
  export type Error =
    | CommonAwsError;
}

export declare namespace DescribeRouteServerPeers {
  export type Input = DescribeRouteServerPeersRequest;
  export type Output = DescribeRouteServerPeersResult;
  export type Error =
    | CommonAwsError;
}

export declare namespace DescribeRouteServers {
  export type Input = DescribeRouteServersRequest;
  export type Output = DescribeRouteServersResult;
  export type Error =
    | CommonAwsError;
}

export declare namespace DescribeRouteTables {
  export type Input = DescribeRouteTablesRequest;
  export type Output = DescribeRouteTablesResult;
  export type Error =
    | CommonAwsError;
}

export declare namespace DescribeScheduledInstanceAvailability {
  export type Input = DescribeScheduledInstanceAvailabilityRequest;
  export type Output = DescribeScheduledInstanceAvailabilityResult;
  export type Error =
    | CommonAwsError;
}

export declare namespace DescribeScheduledInstances {
  export type Input = DescribeScheduledInstancesRequest;
  export type Output = DescribeScheduledInstancesResult;
  export type Error =
    | CommonAwsError;
}

export declare namespace DescribeSecurityGroupReferences {
  export type Input = DescribeSecurityGroupReferencesRequest;
  export type Output = DescribeSecurityGroupReferencesResult;
  export type Error =
    | CommonAwsError;
}

export declare namespace DescribeSecurityGroupRules {
  export type Input = DescribeSecurityGroupRulesRequest;
  export type Output = DescribeSecurityGroupRulesResult;
  export type Error =
    | CommonAwsError;
}

export declare namespace DescribeSecurityGroupVpcAssociations {
  export type Input = DescribeSecurityGroupVpcAssociationsRequest;
  export type Output = DescribeSecurityGroupVpcAssociationsResult;
  export type Error =
    | CommonAwsError;
}

export declare namespace DescribeSecurityGroups {
  export type Input = DescribeSecurityGroupsRequest;
  export type Output = DescribeSecurityGroupsResult;
  export type Error =
    | CommonAwsError;
}

export declare namespace DescribeServiceLinkVirtualInterfaces {
  export type Input = DescribeServiceLinkVirtualInterfacesRequest;
  export type Output = DescribeServiceLinkVirtualInterfacesResult;
  export type Error =
    | CommonAwsError;
}

export declare namespace DescribeSnapshotAttribute {
  export type Input = DescribeSnapshotAttributeRequest;
  export type Output = DescribeSnapshotAttributeResult;
  export type Error =
    | CommonAwsError;
}

export declare namespace DescribeSnapshotTierStatus {
  export type Input = DescribeSnapshotTierStatusRequest;
  export type Output = DescribeSnapshotTierStatusResult;
  export type Error =
    | CommonAwsError;
}

export declare namespace DescribeSnapshots {
  export type Input = DescribeSnapshotsRequest;
  export type Output = DescribeSnapshotsResult;
  export type Error =
    | CommonAwsError;
}

export declare namespace DescribeSpotDatafeedSubscription {
  export type Input = DescribeSpotDatafeedSubscriptionRequest;
  export type Output = DescribeSpotDatafeedSubscriptionResult;
  export type Error =
    | CommonAwsError;
}

export declare namespace DescribeSpotFleetInstances {
  export type Input = DescribeSpotFleetInstancesRequest;
  export type Output = DescribeSpotFleetInstancesResponse;
  export type Error =
    | CommonAwsError;
}

export declare namespace DescribeSpotFleetRequestHistory {
  export type Input = DescribeSpotFleetRequestHistoryRequest;
  export type Output = DescribeSpotFleetRequestHistoryResponse;
  export type Error =
    | CommonAwsError;
}

export declare namespace DescribeSpotFleetRequests {
  export type Input = DescribeSpotFleetRequestsRequest;
  export type Output = DescribeSpotFleetRequestsResponse;
  export type Error =
    | CommonAwsError;
}

export declare namespace DescribeSpotInstanceRequests {
  export type Input = DescribeSpotInstanceRequestsRequest;
  export type Output = DescribeSpotInstanceRequestsResult;
  export type Error =
    | CommonAwsError;
}

export declare namespace DescribeSpotPriceHistory {
  export type Input = DescribeSpotPriceHistoryRequest;
  export type Output = DescribeSpotPriceHistoryResult;
  export type Error =
    | CommonAwsError;
}

export declare namespace DescribeStaleSecurityGroups {
  export type Input = DescribeStaleSecurityGroupsRequest;
  export type Output = DescribeStaleSecurityGroupsResult;
  export type Error =
    | CommonAwsError;
}

export declare namespace DescribeStoreImageTasks {
  export type Input = DescribeStoreImageTasksRequest;
  export type Output = DescribeStoreImageTasksResult;
  export type Error =
    | CommonAwsError;
}

export declare namespace DescribeSubnets {
  export type Input = DescribeSubnetsRequest;
  export type Output = DescribeSubnetsResult;
  export type Error =
    | CommonAwsError;
}

export declare namespace DescribeTags {
  export type Input = DescribeTagsRequest;
  export type Output = DescribeTagsResult;
  export type Error =
    | CommonAwsError;
}

export declare namespace DescribeTrafficMirrorFilterRules {
  export type Input = DescribeTrafficMirrorFilterRulesRequest;
  export type Output = DescribeTrafficMirrorFilterRulesResult;
  export type Error =
    | CommonAwsError;
}

export declare namespace DescribeTrafficMirrorFilters {
  export type Input = DescribeTrafficMirrorFiltersRequest;
  export type Output = DescribeTrafficMirrorFiltersResult;
  export type Error =
    | CommonAwsError;
}

export declare namespace DescribeTrafficMirrorSessions {
  export type Input = DescribeTrafficMirrorSessionsRequest;
  export type Output = DescribeTrafficMirrorSessionsResult;
  export type Error =
    | CommonAwsError;
}

export declare namespace DescribeTrafficMirrorTargets {
  export type Input = DescribeTrafficMirrorTargetsRequest;
  export type Output = DescribeTrafficMirrorTargetsResult;
  export type Error =
    | CommonAwsError;
}

export declare namespace DescribeTransitGatewayAttachments {
  export type Input = DescribeTransitGatewayAttachmentsRequest;
  export type Output = DescribeTransitGatewayAttachmentsResult;
  export type Error =
    | CommonAwsError;
}

export declare namespace DescribeTransitGatewayConnectPeers {
  export type Input = DescribeTransitGatewayConnectPeersRequest;
  export type Output = DescribeTransitGatewayConnectPeersResult;
  export type Error =
    | CommonAwsError;
}

export declare namespace DescribeTransitGatewayConnects {
  export type Input = DescribeTransitGatewayConnectsRequest;
  export type Output = DescribeTransitGatewayConnectsResult;
  export type Error =
    | CommonAwsError;
}

export declare namespace DescribeTransitGatewayMulticastDomains {
  export type Input = DescribeTransitGatewayMulticastDomainsRequest;
  export type Output = DescribeTransitGatewayMulticastDomainsResult;
  export type Error =
    | CommonAwsError;
}

export declare namespace DescribeTransitGatewayPeeringAttachments {
  export type Input = DescribeTransitGatewayPeeringAttachmentsRequest;
  export type Output = DescribeTransitGatewayPeeringAttachmentsResult;
  export type Error =
    | CommonAwsError;
}

export declare namespace DescribeTransitGatewayPolicyTables {
  export type Input = DescribeTransitGatewayPolicyTablesRequest;
  export type Output = DescribeTransitGatewayPolicyTablesResult;
  export type Error =
    | CommonAwsError;
}

export declare namespace DescribeTransitGatewayRouteTableAnnouncements {
  export type Input = DescribeTransitGatewayRouteTableAnnouncementsRequest;
  export type Output = DescribeTransitGatewayRouteTableAnnouncementsResult;
  export type Error =
    | CommonAwsError;
}

export declare namespace DescribeTransitGatewayRouteTables {
  export type Input = DescribeTransitGatewayRouteTablesRequest;
  export type Output = DescribeTransitGatewayRouteTablesResult;
  export type Error =
    | CommonAwsError;
}

export declare namespace DescribeTransitGatewayVpcAttachments {
  export type Input = DescribeTransitGatewayVpcAttachmentsRequest;
  export type Output = DescribeTransitGatewayVpcAttachmentsResult;
  export type Error =
    | CommonAwsError;
}

export declare namespace DescribeTransitGateways {
  export type Input = DescribeTransitGatewaysRequest;
  export type Output = DescribeTransitGatewaysResult;
  export type Error =
    | CommonAwsError;
}

export declare namespace DescribeTrunkInterfaceAssociations {
  export type Input = DescribeTrunkInterfaceAssociationsRequest;
  export type Output = DescribeTrunkInterfaceAssociationsResult;
  export type Error =
    | CommonAwsError;
}

export declare namespace DescribeVerifiedAccessEndpoints {
  export type Input = DescribeVerifiedAccessEndpointsRequest;
  export type Output = DescribeVerifiedAccessEndpointsResult;
  export type Error =
    | CommonAwsError;
}

export declare namespace DescribeVerifiedAccessGroups {
  export type Input = DescribeVerifiedAccessGroupsRequest;
  export type Output = DescribeVerifiedAccessGroupsResult;
  export type Error =
    | CommonAwsError;
}

export declare namespace DescribeVerifiedAccessInstanceLoggingConfigurations {
  export type Input = DescribeVerifiedAccessInstanceLoggingConfigurationsRequest;
  export type Output = DescribeVerifiedAccessInstanceLoggingConfigurationsResult;
  export type Error =
    | CommonAwsError;
}

export declare namespace DescribeVerifiedAccessInstances {
  export type Input = DescribeVerifiedAccessInstancesRequest;
  export type Output = DescribeVerifiedAccessInstancesResult;
  export type Error =
    | CommonAwsError;
}

export declare namespace DescribeVerifiedAccessTrustProviders {
  export type Input = DescribeVerifiedAccessTrustProvidersRequest;
  export type Output = DescribeVerifiedAccessTrustProvidersResult;
  export type Error =
    | CommonAwsError;
}

export declare namespace DescribeVolumeAttribute {
  export type Input = DescribeVolumeAttributeRequest;
  export type Output = DescribeVolumeAttributeResult;
  export type Error =
    | CommonAwsError;
}

export declare namespace DescribeVolumeStatus {
  export type Input = DescribeVolumeStatusRequest;
  export type Output = DescribeVolumeStatusResult;
  export type Error =
    | CommonAwsError;
}

export declare namespace DescribeVolumes {
  export type Input = DescribeVolumesRequest;
  export type Output = DescribeVolumesResult;
  export type Error =
    | CommonAwsError;
}

export declare namespace DescribeVolumesModifications {
  export type Input = DescribeVolumesModificationsRequest;
  export type Output = DescribeVolumesModificationsResult;
  export type Error =
    | CommonAwsError;
}

export declare namespace DescribeVpcAttribute {
  export type Input = DescribeVpcAttributeRequest;
  export type Output = DescribeVpcAttributeResult;
  export type Error =
    | CommonAwsError;
}

export declare namespace DescribeVpcBlockPublicAccessExclusions {
  export type Input = DescribeVpcBlockPublicAccessExclusionsRequest;
  export type Output = DescribeVpcBlockPublicAccessExclusionsResult;
  export type Error =
    | CommonAwsError;
}

export declare namespace DescribeVpcBlockPublicAccessOptions {
  export type Input = DescribeVpcBlockPublicAccessOptionsRequest;
  export type Output = DescribeVpcBlockPublicAccessOptionsResult;
  export type Error =
    | CommonAwsError;
}

export declare namespace DescribeVpcClassicLink {
  export type Input = DescribeVpcClassicLinkRequest;
  export type Output = DescribeVpcClassicLinkResult;
  export type Error =
    | CommonAwsError;
}

export declare namespace DescribeVpcClassicLinkDnsSupport {
  export type Input = DescribeVpcClassicLinkDnsSupportRequest;
  export type Output = DescribeVpcClassicLinkDnsSupportResult;
  export type Error =
    | CommonAwsError;
}

export declare namespace DescribeVpcEndpointAssociations {
  export type Input = DescribeVpcEndpointAssociationsRequest;
  export type Output = DescribeVpcEndpointAssociationsResult;
  export type Error =
    | CommonAwsError;
}

export declare namespace DescribeVpcEndpointConnectionNotifications {
  export type Input = DescribeVpcEndpointConnectionNotificationsRequest;
  export type Output = DescribeVpcEndpointConnectionNotificationsResult;
  export type Error =
    | CommonAwsError;
}

export declare namespace DescribeVpcEndpointConnections {
  export type Input = DescribeVpcEndpointConnectionsRequest;
  export type Output = DescribeVpcEndpointConnectionsResult;
  export type Error =
    | CommonAwsError;
}

export declare namespace DescribeVpcEndpointServiceConfigurations {
  export type Input = DescribeVpcEndpointServiceConfigurationsRequest;
  export type Output = DescribeVpcEndpointServiceConfigurationsResult;
  export type Error =
    | CommonAwsError;
}

export declare namespace DescribeVpcEndpointServicePermissions {
  export type Input = DescribeVpcEndpointServicePermissionsRequest;
  export type Output = DescribeVpcEndpointServicePermissionsResult;
  export type Error =
    | CommonAwsError;
}

export declare namespace DescribeVpcEndpointServices {
  export type Input = DescribeVpcEndpointServicesRequest;
  export type Output = DescribeVpcEndpointServicesResult;
  export type Error =
    | CommonAwsError;
}

export declare namespace DescribeVpcEndpoints {
  export type Input = DescribeVpcEndpointsRequest;
  export type Output = DescribeVpcEndpointsResult;
  export type Error =
    | CommonAwsError;
}

export declare namespace DescribeVpcPeeringConnections {
  export type Input = DescribeVpcPeeringConnectionsRequest;
  export type Output = DescribeVpcPeeringConnectionsResult;
  export type Error =
    | CommonAwsError;
}

export declare namespace DescribeVpcs {
  export type Input = DescribeVpcsRequest;
  export type Output = DescribeVpcsResult;
  export type Error =
    | CommonAwsError;
}

export declare namespace DescribeVpnConnections {
  export type Input = DescribeVpnConnectionsRequest;
  export type Output = DescribeVpnConnectionsResult;
  export type Error =
    | CommonAwsError;
}

export declare namespace DescribeVpnGateways {
  export type Input = DescribeVpnGatewaysRequest;
  export type Output = DescribeVpnGatewaysResult;
  export type Error =
    | CommonAwsError;
}

export declare namespace DetachClassicLinkVpc {
  export type Input = DetachClassicLinkVpcRequest;
  export type Output = DetachClassicLinkVpcResult;
  export type Error =
    | CommonAwsError;
}

export declare namespace DetachInternetGateway {
  export type Input = DetachInternetGatewayRequest;
  export type Output = {};
  export type Error =
    | CommonAwsError;
}

export declare namespace DetachNetworkInterface {
  export type Input = DetachNetworkInterfaceRequest;
  export type Output = {};
  export type Error =
    | CommonAwsError;
}

export declare namespace DetachVerifiedAccessTrustProvider {
  export type Input = DetachVerifiedAccessTrustProviderRequest;
  export type Output = DetachVerifiedAccessTrustProviderResult;
  export type Error =
    | CommonAwsError;
}

export declare namespace DetachVolume {
  export type Input = DetachVolumeRequest;
  export type Output = VolumeAttachment;
  export type Error =
    | CommonAwsError;
}

export declare namespace DetachVpnGateway {
  export type Input = DetachVpnGatewayRequest;
  export type Output = {};
  export type Error =
    | CommonAwsError;
}

export declare namespace DisableAddressTransfer {
  export type Input = DisableAddressTransferRequest;
  export type Output = DisableAddressTransferResult;
  export type Error =
    | CommonAwsError;
}

export declare namespace DisableAllowedImagesSettings {
  export type Input = DisableAllowedImagesSettingsRequest;
  export type Output = DisableAllowedImagesSettingsResult;
  export type Error =
    | CommonAwsError;
}

export declare namespace DisableAwsNetworkPerformanceMetricSubscription {
  export type Input = DisableAwsNetworkPerformanceMetricSubscriptionRequest;
  export type Output = DisableAwsNetworkPerformanceMetricSubscriptionResult;
  export type Error =
    | CommonAwsError;
}

export declare namespace DisableEbsEncryptionByDefault {
  export type Input = DisableEbsEncryptionByDefaultRequest;
  export type Output = DisableEbsEncryptionByDefaultResult;
  export type Error =
    | CommonAwsError;
}

export declare namespace DisableFastLaunch {
  export type Input = DisableFastLaunchRequest;
  export type Output = DisableFastLaunchResult;
  export type Error =
    | CommonAwsError;
}

export declare namespace DisableFastSnapshotRestores {
  export type Input = DisableFastSnapshotRestoresRequest;
  export type Output = DisableFastSnapshotRestoresResult;
  export type Error =
    | CommonAwsError;
}

export declare namespace DisableImage {
  export type Input = DisableImageRequest;
  export type Output = DisableImageResult;
  export type Error =
    | CommonAwsError;
}

export declare namespace DisableImageBlockPublicAccess {
  export type Input = DisableImageBlockPublicAccessRequest;
  export type Output = DisableImageBlockPublicAccessResult;
  export type Error =
    | CommonAwsError;
}

export declare namespace DisableImageDeprecation {
  export type Input = DisableImageDeprecationRequest;
  export type Output = DisableImageDeprecationResult;
  export type Error =
    | CommonAwsError;
}

export declare namespace DisableImageDeregistrationProtection {
  export type Input = DisableImageDeregistrationProtectionRequest;
  export type Output = DisableImageDeregistrationProtectionResult;
  export type Error =
    | CommonAwsError;
}

export declare namespace DisableIpamOrganizationAdminAccount {
  export type Input = DisableIpamOrganizationAdminAccountRequest;
  export type Output = DisableIpamOrganizationAdminAccountResult;
  export type Error =
    | CommonAwsError;
}

export declare namespace DisableRouteServerPropagation {
  export type Input = DisableRouteServerPropagationRequest;
  export type Output = DisableRouteServerPropagationResult;
  export type Error =
    | CommonAwsError;
}

export declare namespace DisableSerialConsoleAccess {
  export type Input = DisableSerialConsoleAccessRequest;
  export type Output = DisableSerialConsoleAccessResult;
  export type Error =
    | CommonAwsError;
}

export declare namespace DisableSnapshotBlockPublicAccess {
  export type Input = DisableSnapshotBlockPublicAccessRequest;
  export type Output = DisableSnapshotBlockPublicAccessResult;
  export type Error =
    | CommonAwsError;
}

export declare namespace DisableTransitGatewayRouteTablePropagation {
  export type Input = DisableTransitGatewayRouteTablePropagationRequest;
  export type Output = DisableTransitGatewayRouteTablePropagationResult;
  export type Error =
    | CommonAwsError;
}

export declare namespace DisableVgwRoutePropagation {
  export type Input = DisableVgwRoutePropagationRequest;
  export type Output = {};
  export type Error =
    | CommonAwsError;
}

export declare namespace DisableVpcClassicLink {
  export type Input = DisableVpcClassicLinkRequest;
  export type Output = DisableVpcClassicLinkResult;
  export type Error =
    | CommonAwsError;
}

export declare namespace DisableVpcClassicLinkDnsSupport {
  export type Input = DisableVpcClassicLinkDnsSupportRequest;
  export type Output = DisableVpcClassicLinkDnsSupportResult;
  export type Error =
    | CommonAwsError;
}

export declare namespace DisassociateAddress {
  export type Input = DisassociateAddressRequest;
  export type Output = {};
  export type Error =
    | CommonAwsError;
}

export declare namespace DisassociateCapacityReservationBillingOwner {
  export type Input = DisassociateCapacityReservationBillingOwnerRequest;
  export type Output = DisassociateCapacityReservationBillingOwnerResult;
  export type Error =
    | CommonAwsError;
}

export declare namespace DisassociateClientVpnTargetNetwork {
  export type Input = DisassociateClientVpnTargetNetworkRequest;
  export type Output = DisassociateClientVpnTargetNetworkResult;
  export type Error =
    | CommonAwsError;
}

export declare namespace DisassociateEnclaveCertificateIamRole {
  export type Input = DisassociateEnclaveCertificateIamRoleRequest;
  export type Output = DisassociateEnclaveCertificateIamRoleResult;
  export type Error =
    | CommonAwsError;
}

export declare namespace DisassociateIamInstanceProfile {
  export type Input = DisassociateIamInstanceProfileRequest;
  export type Output = DisassociateIamInstanceProfileResult;
  export type Error =
    | CommonAwsError;
}

export declare namespace DisassociateInstanceEventWindow {
  export type Input = DisassociateInstanceEventWindowRequest;
  export type Output = DisassociateInstanceEventWindowResult;
  export type Error =
    | CommonAwsError;
}

export declare namespace DisassociateIpamByoasn {
  export type Input = DisassociateIpamByoasnRequest;
  export type Output = DisassociateIpamByoasnResult;
  export type Error =
    | CommonAwsError;
}

export declare namespace DisassociateIpamResourceDiscovery {
  export type Input = DisassociateIpamResourceDiscoveryRequest;
  export type Output = DisassociateIpamResourceDiscoveryResult;
  export type Error =
    | CommonAwsError;
}

export declare namespace DisassociateNatGatewayAddress {
  export type Input = DisassociateNatGatewayAddressRequest;
  export type Output = DisassociateNatGatewayAddressResult;
  export type Error =
    | CommonAwsError;
}

export declare namespace DisassociateRouteServer {
  export type Input = DisassociateRouteServerRequest;
  export type Output = DisassociateRouteServerResult;
  export type Error =
    | CommonAwsError;
}

export declare namespace DisassociateRouteTable {
  export type Input = DisassociateRouteTableRequest;
  export type Output = {};
  export type Error =
    | CommonAwsError;
}

export declare namespace DisassociateSecurityGroupVpc {
  export type Input = DisassociateSecurityGroupVpcRequest;
  export type Output = DisassociateSecurityGroupVpcResult;
  export type Error =
    | CommonAwsError;
}

export declare namespace DisassociateSubnetCidrBlock {
  export type Input = DisassociateSubnetCidrBlockRequest;
  export type Output = DisassociateSubnetCidrBlockResult;
  export type Error =
    | CommonAwsError;
}

export declare namespace DisassociateTransitGatewayMulticastDomain {
  export type Input = DisassociateTransitGatewayMulticastDomainRequest;
  export type Output = DisassociateTransitGatewayMulticastDomainResult;
  export type Error =
    | CommonAwsError;
}

export declare namespace DisassociateTransitGatewayPolicyTable {
  export type Input = DisassociateTransitGatewayPolicyTableRequest;
  export type Output = DisassociateTransitGatewayPolicyTableResult;
  export type Error =
    | CommonAwsError;
}

export declare namespace DisassociateTransitGatewayRouteTable {
  export type Input = DisassociateTransitGatewayRouteTableRequest;
  export type Output = DisassociateTransitGatewayRouteTableResult;
  export type Error =
    | CommonAwsError;
}

export declare namespace DisassociateTrunkInterface {
  export type Input = DisassociateTrunkInterfaceRequest;
  export type Output = DisassociateTrunkInterfaceResult;
  export type Error =
    | CommonAwsError;
}

export declare namespace DisassociateVpcCidrBlock {
  export type Input = DisassociateVpcCidrBlockRequest;
  export type Output = DisassociateVpcCidrBlockResult;
  export type Error =
    | CommonAwsError;
}

export declare namespace EnableAddressTransfer {
  export type Input = EnableAddressTransferRequest;
  export type Output = EnableAddressTransferResult;
  export type Error =
    | CommonAwsError;
}

export declare namespace EnableAllowedImagesSettings {
  export type Input = EnableAllowedImagesSettingsRequest;
  export type Output = EnableAllowedImagesSettingsResult;
  export type Error =
    | CommonAwsError;
}

export declare namespace EnableAwsNetworkPerformanceMetricSubscription {
  export type Input = EnableAwsNetworkPerformanceMetricSubscriptionRequest;
  export type Output = EnableAwsNetworkPerformanceMetricSubscriptionResult;
  export type Error =
    | CommonAwsError;
}

export declare namespace EnableEbsEncryptionByDefault {
  export type Input = EnableEbsEncryptionByDefaultRequest;
  export type Output = EnableEbsEncryptionByDefaultResult;
  export type Error =
    | CommonAwsError;
}

export declare namespace EnableFastLaunch {
  export type Input = EnableFastLaunchRequest;
  export type Output = EnableFastLaunchResult;
  export type Error =
    | CommonAwsError;
}

export declare namespace EnableFastSnapshotRestores {
  export type Input = EnableFastSnapshotRestoresRequest;
  export type Output = EnableFastSnapshotRestoresResult;
  export type Error =
    | CommonAwsError;
}

export declare namespace EnableImage {
  export type Input = EnableImageRequest;
  export type Output = EnableImageResult;
  export type Error =
    | CommonAwsError;
}

export declare namespace EnableImageBlockPublicAccess {
  export type Input = EnableImageBlockPublicAccessRequest;
  export type Output = EnableImageBlockPublicAccessResult;
  export type Error =
    | CommonAwsError;
}

export declare namespace EnableImageDeprecation {
  export type Input = EnableImageDeprecationRequest;
  export type Output = EnableImageDeprecationResult;
  export type Error =
    | CommonAwsError;
}

export declare namespace EnableImageDeregistrationProtection {
  export type Input = EnableImageDeregistrationProtectionRequest;
  export type Output = EnableImageDeregistrationProtectionResult;
  export type Error =
    | CommonAwsError;
}

export declare namespace EnableIpamOrganizationAdminAccount {
  export type Input = EnableIpamOrganizationAdminAccountRequest;
  export type Output = EnableIpamOrganizationAdminAccountResult;
  export type Error =
    | CommonAwsError;
}

export declare namespace EnableReachabilityAnalyzerOrganizationSharing {
  export type Input = EnableReachabilityAnalyzerOrganizationSharingRequest;
  export type Output = EnableReachabilityAnalyzerOrganizationSharingResult;
  export type Error =
    | CommonAwsError;
}

export declare namespace EnableRouteServerPropagation {
  export type Input = EnableRouteServerPropagationRequest;
  export type Output = EnableRouteServerPropagationResult;
  export type Error =
    | CommonAwsError;
}

export declare namespace EnableSerialConsoleAccess {
  export type Input = EnableSerialConsoleAccessRequest;
  export type Output = EnableSerialConsoleAccessResult;
  export type Error =
    | CommonAwsError;
}

export declare namespace EnableSnapshotBlockPublicAccess {
  export type Input = EnableSnapshotBlockPublicAccessRequest;
  export type Output = EnableSnapshotBlockPublicAccessResult;
  export type Error =
    | CommonAwsError;
}

export declare namespace EnableTransitGatewayRouteTablePropagation {
  export type Input = EnableTransitGatewayRouteTablePropagationRequest;
  export type Output = EnableTransitGatewayRouteTablePropagationResult;
  export type Error =
    | CommonAwsError;
}

export declare namespace EnableVgwRoutePropagation {
  export type Input = EnableVgwRoutePropagationRequest;
  export type Output = {};
  export type Error =
    | CommonAwsError;
}

export declare namespace EnableVolumeIO {
  export type Input = EnableVolumeIORequest;
  export type Output = {};
  export type Error =
    | CommonAwsError;
}

export declare namespace EnableVpcClassicLink {
  export type Input = EnableVpcClassicLinkRequest;
  export type Output = EnableVpcClassicLinkResult;
  export type Error =
    | CommonAwsError;
}

export declare namespace EnableVpcClassicLinkDnsSupport {
  export type Input = EnableVpcClassicLinkDnsSupportRequest;
  export type Output = EnableVpcClassicLinkDnsSupportResult;
  export type Error =
    | CommonAwsError;
}

export declare namespace ExportClientVpnClientCertificateRevocationList {
  export type Input = ExportClientVpnClientCertificateRevocationListRequest;
  export type Output = ExportClientVpnClientCertificateRevocationListResult;
  export type Error =
    | CommonAwsError;
}

export declare namespace ExportClientVpnClientConfiguration {
  export type Input = ExportClientVpnClientConfigurationRequest;
  export type Output = ExportClientVpnClientConfigurationResult;
  export type Error =
    | CommonAwsError;
}

export declare namespace ExportImage {
  export type Input = ExportImageRequest;
  export type Output = ExportImageResult;
  export type Error =
    | CommonAwsError;
}

export declare namespace ExportTransitGatewayRoutes {
  export type Input = ExportTransitGatewayRoutesRequest;
  export type Output = ExportTransitGatewayRoutesResult;
  export type Error =
    | CommonAwsError;
}

export declare namespace ExportVerifiedAccessInstanceClientConfiguration {
  export type Input = ExportVerifiedAccessInstanceClientConfigurationRequest;
  export type Output = ExportVerifiedAccessInstanceClientConfigurationResult;
  export type Error =
    | CommonAwsError;
}

export declare namespace GetActiveVpnTunnelStatus {
  export type Input = GetActiveVpnTunnelStatusRequest;
  export type Output = GetActiveVpnTunnelStatusResult;
  export type Error =
    | CommonAwsError;
}

export declare namespace GetAllowedImagesSettings {
  export type Input = GetAllowedImagesSettingsRequest;
  export type Output = GetAllowedImagesSettingsResult;
  export type Error =
    | CommonAwsError;
}

export declare namespace GetAssociatedEnclaveCertificateIamRoles {
  export type Input = GetAssociatedEnclaveCertificateIamRolesRequest;
  export type Output = GetAssociatedEnclaveCertificateIamRolesResult;
  export type Error =
    | CommonAwsError;
}

export declare namespace GetAssociatedIpv6PoolCidrs {
  export type Input = GetAssociatedIpv6PoolCidrsRequest;
  export type Output = GetAssociatedIpv6PoolCidrsResult;
  export type Error =
    | CommonAwsError;
}

export declare namespace GetAwsNetworkPerformanceData {
  export type Input = GetAwsNetworkPerformanceDataRequest;
  export type Output = GetAwsNetworkPerformanceDataResult;
  export type Error =
    | CommonAwsError;
}

export declare namespace GetCapacityReservationUsage {
  export type Input = GetCapacityReservationUsageRequest;
  export type Output = GetCapacityReservationUsageResult;
  export type Error =
    | CommonAwsError;
}

export declare namespace GetCoipPoolUsage {
  export type Input = GetCoipPoolUsageRequest;
  export type Output = GetCoipPoolUsageResult;
  export type Error =
    | CommonAwsError;
}

export declare namespace GetConsoleOutput {
  export type Input = GetConsoleOutputRequest;
  export type Output = GetConsoleOutputResult;
  export type Error =
    | CommonAwsError;
}

export declare namespace GetConsoleScreenshot {
  export type Input = GetConsoleScreenshotRequest;
  export type Output = GetConsoleScreenshotResult;
  export type Error =
    | CommonAwsError;
}

export declare namespace GetDeclarativePoliciesReportSummary {
  export type Input = GetDeclarativePoliciesReportSummaryRequest;
  export type Output = GetDeclarativePoliciesReportSummaryResult;
  export type Error =
    | CommonAwsError;
}

export declare namespace GetDefaultCreditSpecification {
  export type Input = GetDefaultCreditSpecificationRequest;
  export type Output = GetDefaultCreditSpecificationResult;
  export type Error =
    | CommonAwsError;
}

export declare namespace GetEbsDefaultKmsKeyId {
  export type Input = GetEbsDefaultKmsKeyIdRequest;
  export type Output = GetEbsDefaultKmsKeyIdResult;
  export type Error =
    | CommonAwsError;
}

export declare namespace GetEbsEncryptionByDefault {
  export type Input = GetEbsEncryptionByDefaultRequest;
  export type Output = GetEbsEncryptionByDefaultResult;
  export type Error =
    | CommonAwsError;
}

export declare namespace GetFlowLogsIntegrationTemplate {
  export type Input = GetFlowLogsIntegrationTemplateRequest;
  export type Output = GetFlowLogsIntegrationTemplateResult;
  export type Error =
    | CommonAwsError;
}

export declare namespace GetGroupsForCapacityReservation {
  export type Input = GetGroupsForCapacityReservationRequest;
  export type Output = GetGroupsForCapacityReservationResult;
  export type Error =
    | CommonAwsError;
}

export declare namespace GetHostReservationPurchasePreview {
  export type Input = GetHostReservationPurchasePreviewRequest;
  export type Output = GetHostReservationPurchasePreviewResult;
  export type Error =
    | CommonAwsError;
}

export declare namespace GetImageBlockPublicAccessState {
  export type Input = GetImageBlockPublicAccessStateRequest;
  export type Output = GetImageBlockPublicAccessStateResult;
  export type Error =
    | CommonAwsError;
}

export declare namespace GetInstanceMetadataDefaults {
  export type Input = GetInstanceMetadataDefaultsRequest;
  export type Output = GetInstanceMetadataDefaultsResult;
  export type Error =
    | CommonAwsError;
}

export declare namespace GetInstanceTpmEkPub {
  export type Input = GetInstanceTpmEkPubRequest;
  export type Output = GetInstanceTpmEkPubResult;
  export type Error =
    | CommonAwsError;
}

export declare namespace GetInstanceTypesFromInstanceRequirements {
  export type Input = GetInstanceTypesFromInstanceRequirementsRequest;
  export type Output = GetInstanceTypesFromInstanceRequirementsResult;
  export type Error =
    | CommonAwsError;
}

export declare namespace GetInstanceUefiData {
  export type Input = GetInstanceUefiDataRequest;
  export type Output = GetInstanceUefiDataResult;
  export type Error =
    | CommonAwsError;
}

export declare namespace GetIpamAddressHistory {
  export type Input = GetIpamAddressHistoryRequest;
  export type Output = GetIpamAddressHistoryResult;
  export type Error =
    | CommonAwsError;
}

export declare namespace GetIpamDiscoveredAccounts {
  export type Input = GetIpamDiscoveredAccountsRequest;
  export type Output = GetIpamDiscoveredAccountsResult;
  export type Error =
    | CommonAwsError;
}

export declare namespace GetIpamDiscoveredPublicAddresses {
  export type Input = GetIpamDiscoveredPublicAddressesRequest;
  export type Output = GetIpamDiscoveredPublicAddressesResult;
  export type Error =
    | CommonAwsError;
}

export declare namespace GetIpamDiscoveredResourceCidrs {
  export type Input = GetIpamDiscoveredResourceCidrsRequest;
  export type Output = GetIpamDiscoveredResourceCidrsResult;
  export type Error =
    | CommonAwsError;
}

export declare namespace GetIpamPoolAllocations {
  export type Input = GetIpamPoolAllocationsRequest;
  export type Output = GetIpamPoolAllocationsResult;
  export type Error =
    | CommonAwsError;
}

export declare namespace GetIpamPoolCidrs {
  export type Input = GetIpamPoolCidrsRequest;
  export type Output = GetIpamPoolCidrsResult;
  export type Error =
    | CommonAwsError;
}

export declare namespace GetIpamResourceCidrs {
  export type Input = GetIpamResourceCidrsRequest;
  export type Output = GetIpamResourceCidrsResult;
  export type Error =
    | CommonAwsError;
}

export declare namespace GetLaunchTemplateData {
  export type Input = GetLaunchTemplateDataRequest;
  export type Output = GetLaunchTemplateDataResult;
  export type Error =
    | CommonAwsError;
}

export declare namespace GetManagedPrefixListAssociations {
  export type Input = GetManagedPrefixListAssociationsRequest;
  export type Output = GetManagedPrefixListAssociationsResult;
  export type Error =
    | CommonAwsError;
}

export declare namespace GetManagedPrefixListEntries {
  export type Input = GetManagedPrefixListEntriesRequest;
  export type Output = GetManagedPrefixListEntriesResult;
  export type Error =
    | CommonAwsError;
}

export declare namespace GetNetworkInsightsAccessScopeAnalysisFindings {
  export type Input = GetNetworkInsightsAccessScopeAnalysisFindingsRequest;
  export type Output = GetNetworkInsightsAccessScopeAnalysisFindingsResult;
  export type Error =
    | CommonAwsError;
}

export declare namespace GetNetworkInsightsAccessScopeContent {
  export type Input = GetNetworkInsightsAccessScopeContentRequest;
  export type Output = GetNetworkInsightsAccessScopeContentResult;
  export type Error =
    | CommonAwsError;
}

export declare namespace GetPasswordData {
  export type Input = GetPasswordDataRequest;
  export type Output = GetPasswordDataResult;
  export type Error =
    | CommonAwsError;
}

export declare namespace GetReservedInstancesExchangeQuote {
  export type Input = GetReservedInstancesExchangeQuoteRequest;
  export type Output = GetReservedInstancesExchangeQuoteResult;
  export type Error =
    | CommonAwsError;
}

export declare namespace GetRouteServerAssociations {
  export type Input = GetRouteServerAssociationsRequest;
  export type Output = GetRouteServerAssociationsResult;
  export type Error =
    | CommonAwsError;
}

export declare namespace GetRouteServerPropagations {
  export type Input = GetRouteServerPropagationsRequest;
  export type Output = GetRouteServerPropagationsResult;
  export type Error =
    | CommonAwsError;
}

export declare namespace GetRouteServerRoutingDatabase {
  export type Input = GetRouteServerRoutingDatabaseRequest;
  export type Output = GetRouteServerRoutingDatabaseResult;
  export type Error =
    | CommonAwsError;
}

export declare namespace GetSecurityGroupsForVpc {
  export type Input = GetSecurityGroupsForVpcRequest;
  export type Output = GetSecurityGroupsForVpcResult;
  export type Error =
    | CommonAwsError;
}

export declare namespace GetSerialConsoleAccessStatus {
  export type Input = GetSerialConsoleAccessStatusRequest;
  export type Output = GetSerialConsoleAccessStatusResult;
  export type Error =
    | CommonAwsError;
}

export declare namespace GetSnapshotBlockPublicAccessState {
  export type Input = GetSnapshotBlockPublicAccessStateRequest;
  export type Output = GetSnapshotBlockPublicAccessStateResult;
  export type Error =
    | CommonAwsError;
}

export declare namespace GetSpotPlacementScores {
  export type Input = GetSpotPlacementScoresRequest;
  export type Output = GetSpotPlacementScoresResult;
  export type Error =
    | CommonAwsError;
}

export declare namespace GetSubnetCidrReservations {
  export type Input = GetSubnetCidrReservationsRequest;
  export type Output = GetSubnetCidrReservationsResult;
  export type Error =
    | CommonAwsError;
}

export declare namespace GetTransitGatewayAttachmentPropagations {
  export type Input = GetTransitGatewayAttachmentPropagationsRequest;
  export type Output = GetTransitGatewayAttachmentPropagationsResult;
  export type Error =
    | CommonAwsError;
}

export declare namespace GetTransitGatewayMulticastDomainAssociations {
  export type Input = GetTransitGatewayMulticastDomainAssociationsRequest;
  export type Output = GetTransitGatewayMulticastDomainAssociationsResult;
  export type Error =
    | CommonAwsError;
}

export declare namespace GetTransitGatewayPolicyTableAssociations {
  export type Input = GetTransitGatewayPolicyTableAssociationsRequest;
  export type Output = GetTransitGatewayPolicyTableAssociationsResult;
  export type Error =
    | CommonAwsError;
}

export declare namespace GetTransitGatewayPolicyTableEntries {
  export type Input = GetTransitGatewayPolicyTableEntriesRequest;
  export type Output = GetTransitGatewayPolicyTableEntriesResult;
  export type Error =
    | CommonAwsError;
}

export declare namespace GetTransitGatewayPrefixListReferences {
  export type Input = GetTransitGatewayPrefixListReferencesRequest;
  export type Output = GetTransitGatewayPrefixListReferencesResult;
  export type Error =
    | CommonAwsError;
}

export declare namespace GetTransitGatewayRouteTableAssociations {
  export type Input = GetTransitGatewayRouteTableAssociationsRequest;
  export type Output = GetTransitGatewayRouteTableAssociationsResult;
  export type Error =
    | CommonAwsError;
}

export declare namespace GetTransitGatewayRouteTablePropagations {
  export type Input = GetTransitGatewayRouteTablePropagationsRequest;
  export type Output = GetTransitGatewayRouteTablePropagationsResult;
  export type Error =
    | CommonAwsError;
}

export declare namespace GetVerifiedAccessEndpointPolicy {
  export type Input = GetVerifiedAccessEndpointPolicyRequest;
  export type Output = GetVerifiedAccessEndpointPolicyResult;
  export type Error =
    | CommonAwsError;
}

export declare namespace GetVerifiedAccessEndpointTargets {
  export type Input = GetVerifiedAccessEndpointTargetsRequest;
  export type Output = GetVerifiedAccessEndpointTargetsResult;
  export type Error =
    | CommonAwsError;
}

export declare namespace GetVerifiedAccessGroupPolicy {
  export type Input = GetVerifiedAccessGroupPolicyRequest;
  export type Output = GetVerifiedAccessGroupPolicyResult;
  export type Error =
    | CommonAwsError;
}

export declare namespace GetVpnConnectionDeviceSampleConfiguration {
  export type Input = GetVpnConnectionDeviceSampleConfigurationRequest;
  export type Output = GetVpnConnectionDeviceSampleConfigurationResult;
  export type Error =
    | CommonAwsError;
}

export declare namespace GetVpnConnectionDeviceTypes {
  export type Input = GetVpnConnectionDeviceTypesRequest;
  export type Output = GetVpnConnectionDeviceTypesResult;
  export type Error =
    | CommonAwsError;
}

export declare namespace GetVpnTunnelReplacementStatus {
  export type Input = GetVpnTunnelReplacementStatusRequest;
  export type Output = GetVpnTunnelReplacementStatusResult;
  export type Error =
    | CommonAwsError;
}

export declare namespace ImportClientVpnClientCertificateRevocationList {
  export type Input = ImportClientVpnClientCertificateRevocationListRequest;
  export type Output = ImportClientVpnClientCertificateRevocationListResult;
  export type Error =
    | CommonAwsError;
}

export declare namespace ImportImage {
  export type Input = ImportImageRequest;
  export type Output = ImportImageResult;
  export type Error =
    | CommonAwsError;
}

export declare namespace ImportInstance {
  export type Input = ImportInstanceRequest;
  export type Output = ImportInstanceResult;
  export type Error =
    | CommonAwsError;
}

export declare namespace ImportKeyPair {
  export type Input = ImportKeyPairRequest;
  export type Output = ImportKeyPairResult;
  export type Error =
    | CommonAwsError;
}

export declare namespace ImportSnapshot {
  export type Input = ImportSnapshotRequest;
  export type Output = ImportSnapshotResult;
  export type Error =
    | CommonAwsError;
}

export declare namespace ImportVolume {
  export type Input = ImportVolumeRequest;
  export type Output = ImportVolumeResult;
  export type Error =
    | CommonAwsError;
}

export declare namespace ListImagesInRecycleBin {
  export type Input = ListImagesInRecycleBinRequest;
  export type Output = ListImagesInRecycleBinResult;
  export type Error =
    | CommonAwsError;
}

export declare namespace ListSnapshotsInRecycleBin {
  export type Input = ListSnapshotsInRecycleBinRequest;
  export type Output = ListSnapshotsInRecycleBinResult;
  export type Error =
    | CommonAwsError;
}

export declare namespace LockSnapshot {
  export type Input = LockSnapshotRequest;
  export type Output = LockSnapshotResult;
  export type Error =
    | CommonAwsError;
}

export declare namespace ModifyAddressAttribute {
  export type Input = ModifyAddressAttributeRequest;
  export type Output = ModifyAddressAttributeResult;
  export type Error =
    | CommonAwsError;
}

export declare namespace ModifyAvailabilityZoneGroup {
  export type Input = ModifyAvailabilityZoneGroupRequest;
  export type Output = ModifyAvailabilityZoneGroupResult;
  export type Error =
    | CommonAwsError;
}

export declare namespace ModifyCapacityReservation {
  export type Input = ModifyCapacityReservationRequest;
  export type Output = ModifyCapacityReservationResult;
  export type Error =
    | CommonAwsError;
}

export declare namespace ModifyCapacityReservationFleet {
  export type Input = ModifyCapacityReservationFleetRequest;
  export type Output = ModifyCapacityReservationFleetResult;
  export type Error =
    | CommonAwsError;
}

export declare namespace ModifyClientVpnEndpoint {
  export type Input = ModifyClientVpnEndpointRequest;
  export type Output = ModifyClientVpnEndpointResult;
  export type Error =
    | CommonAwsError;
}

export declare namespace ModifyDefaultCreditSpecification {
  export type Input = ModifyDefaultCreditSpecificationRequest;
  export type Output = ModifyDefaultCreditSpecificationResult;
  export type Error =
    | CommonAwsError;
}

export declare namespace ModifyEbsDefaultKmsKeyId {
  export type Input = ModifyEbsDefaultKmsKeyIdRequest;
  export type Output = ModifyEbsDefaultKmsKeyIdResult;
  export type Error =
    | CommonAwsError;
}

export declare namespace ModifyFleet {
  export type Input = ModifyFleetRequest;
  export type Output = ModifyFleetResult;
  export type Error =
    | CommonAwsError;
}

export declare namespace ModifyFpgaImageAttribute {
  export type Input = ModifyFpgaImageAttributeRequest;
  export type Output = ModifyFpgaImageAttributeResult;
  export type Error =
    | CommonAwsError;
}

export declare namespace ModifyHosts {
  export type Input = ModifyHostsRequest;
  export type Output = ModifyHostsResult;
  export type Error =
    | CommonAwsError;
}

export declare namespace ModifyIdFormat {
  export type Input = ModifyIdFormatRequest;
  export type Output = {};
  export type Error =
    | CommonAwsError;
}

export declare namespace ModifyIdentityIdFormat {
  export type Input = ModifyIdentityIdFormatRequest;
  export type Output = {};
  export type Error =
    | CommonAwsError;
}

export declare namespace ModifyImageAttribute {
  export type Input = ModifyImageAttributeRequest;
  export type Output = {};
  export type Error =
    | CommonAwsError;
}

export declare namespace ModifyInstanceAttribute {
  export type Input = ModifyInstanceAttributeRequest;
  export type Output = {};
  export type Error =
    | CommonAwsError;
}

export declare namespace ModifyInstanceCapacityReservationAttributes {
  export type Input = ModifyInstanceCapacityReservationAttributesRequest;
  export type Output = ModifyInstanceCapacityReservationAttributesResult;
  export type Error =
    | CommonAwsError;
}

export declare namespace ModifyInstanceCpuOptions {
  export type Input = ModifyInstanceCpuOptionsRequest;
  export type Output = ModifyInstanceCpuOptionsResult;
  export type Error =
    | CommonAwsError;
}

export declare namespace ModifyInstanceCreditSpecification {
  export type Input = ModifyInstanceCreditSpecificationRequest;
  export type Output = ModifyInstanceCreditSpecificationResult;
  export type Error =
    | CommonAwsError;
}

export declare namespace ModifyInstanceEventStartTime {
  export type Input = ModifyInstanceEventStartTimeRequest;
  export type Output = ModifyInstanceEventStartTimeResult;
  export type Error =
    | CommonAwsError;
}

export declare namespace ModifyInstanceEventWindow {
  export type Input = ModifyInstanceEventWindowRequest;
  export type Output = ModifyInstanceEventWindowResult;
  export type Error =
    | CommonAwsError;
}

export declare namespace ModifyInstanceMaintenanceOptions {
  export type Input = ModifyInstanceMaintenanceOptionsRequest;
  export type Output = ModifyInstanceMaintenanceOptionsResult;
  export type Error =
    | CommonAwsError;
}

export declare namespace ModifyInstanceMetadataDefaults {
  export type Input = ModifyInstanceMetadataDefaultsRequest;
  export type Output = ModifyInstanceMetadataDefaultsResult;
  export type Error =
    | CommonAwsError;
}

export declare namespace ModifyInstanceMetadataOptions {
  export type Input = ModifyInstanceMetadataOptionsRequest;
  export type Output = ModifyInstanceMetadataOptionsResult;
  export type Error =
    | CommonAwsError;
}

export declare namespace ModifyInstanceNetworkPerformanceOptions {
  export type Input = ModifyInstanceNetworkPerformanceRequest;
  export type Output = ModifyInstanceNetworkPerformanceResult;
  export type Error =
    | CommonAwsError;
}

export declare namespace ModifyInstancePlacement {
  export type Input = ModifyInstancePlacementRequest;
  export type Output = ModifyInstancePlacementResult;
  export type Error =
    | CommonAwsError;
}

export declare namespace ModifyIpam {
  export type Input = ModifyIpamRequest;
  export type Output = ModifyIpamResult;
  export type Error =
    | CommonAwsError;
}

export declare namespace ModifyIpamPool {
  export type Input = ModifyIpamPoolRequest;
  export type Output = ModifyIpamPoolResult;
  export type Error =
    | CommonAwsError;
}

export declare namespace ModifyIpamResourceCidr {
  export type Input = ModifyIpamResourceCidrRequest;
  export type Output = ModifyIpamResourceCidrResult;
  export type Error =
    | CommonAwsError;
}

export declare namespace ModifyIpamResourceDiscovery {
  export type Input = ModifyIpamResourceDiscoveryRequest;
  export type Output = ModifyIpamResourceDiscoveryResult;
  export type Error =
    | CommonAwsError;
}

export declare namespace ModifyIpamScope {
  export type Input = ModifyIpamScopeRequest;
  export type Output = ModifyIpamScopeResult;
  export type Error =
    | CommonAwsError;
}

export declare namespace ModifyLaunchTemplate {
  export type Input = ModifyLaunchTemplateRequest;
  export type Output = ModifyLaunchTemplateResult;
  export type Error =
    | CommonAwsError;
}

export declare namespace ModifyLocalGatewayRoute {
  export type Input = ModifyLocalGatewayRouteRequest;
  export type Output = ModifyLocalGatewayRouteResult;
  export type Error =
    | CommonAwsError;
}

export declare namespace ModifyManagedPrefixList {
  export type Input = ModifyManagedPrefixListRequest;
  export type Output = ModifyManagedPrefixListResult;
  export type Error =
    | CommonAwsError;
}

export declare namespace ModifyNetworkInterfaceAttribute {
  export type Input = ModifyNetworkInterfaceAttributeRequest;
  export type Output = {};
  export type Error =
    | CommonAwsError;
}

export declare namespace ModifyPrivateDnsNameOptions {
  export type Input = ModifyPrivateDnsNameOptionsRequest;
  export type Output = ModifyPrivateDnsNameOptionsResult;
  export type Error =
    | CommonAwsError;
}

export declare namespace ModifyPublicIpDnsNameOptions {
  export type Input = ModifyPublicIpDnsNameOptionsRequest;
  export type Output = ModifyPublicIpDnsNameOptionsResult;
  export type Error =
    | CommonAwsError;
}

export declare namespace ModifyReservedInstances {
  export type Input = ModifyReservedInstancesRequest;
  export type Output = ModifyReservedInstancesResult;
  export type Error =
    | CommonAwsError;
}

export declare namespace ModifyRouteServer {
  export type Input = ModifyRouteServerRequest;
  export type Output = ModifyRouteServerResult;
  export type Error =
    | CommonAwsError;
}

export declare namespace ModifySecurityGroupRules {
  export type Input = ModifySecurityGroupRulesRequest;
  export type Output = ModifySecurityGroupRulesResult;
  export type Error =
    | CommonAwsError;
}

export declare namespace ModifySnapshotAttribute {
  export type Input = ModifySnapshotAttributeRequest;
  export type Output = {};
  export type Error =
    | CommonAwsError;
}

export declare namespace ModifySnapshotTier {
  export type Input = ModifySnapshotTierRequest;
  export type Output = ModifySnapshotTierResult;
  export type Error =
    | CommonAwsError;
}

export declare namespace ModifySpotFleetRequest {
  export type Input = ModifySpotFleetRequestRequest;
  export type Output = ModifySpotFleetRequestResponse;
  export type Error =
    | CommonAwsError;
}

export declare namespace ModifySubnetAttribute {
  export type Input = ModifySubnetAttributeRequest;
  export type Output = {};
  export type Error =
    | CommonAwsError;
}

export declare namespace ModifyTrafficMirrorFilterNetworkServices {
  export type Input = ModifyTrafficMirrorFilterNetworkServicesRequest;
  export type Output = ModifyTrafficMirrorFilterNetworkServicesResult;
  export type Error =
    | CommonAwsError;
}

export declare namespace ModifyTrafficMirrorFilterRule {
  export type Input = ModifyTrafficMirrorFilterRuleRequest;
  export type Output = ModifyTrafficMirrorFilterRuleResult;
  export type Error =
    | CommonAwsError;
}

export declare namespace ModifyTrafficMirrorSession {
  export type Input = ModifyTrafficMirrorSessionRequest;
  export type Output = ModifyTrafficMirrorSessionResult;
  export type Error =
    | CommonAwsError;
}

export declare namespace ModifyTransitGateway {
  export type Input = ModifyTransitGatewayRequest;
  export type Output = ModifyTransitGatewayResult;
  export type Error =
    | CommonAwsError;
}

export declare namespace ModifyTransitGatewayPrefixListReference {
  export type Input = ModifyTransitGatewayPrefixListReferenceRequest;
  export type Output = ModifyTransitGatewayPrefixListReferenceResult;
  export type Error =
    | CommonAwsError;
}

export declare namespace ModifyTransitGatewayVpcAttachment {
  export type Input = ModifyTransitGatewayVpcAttachmentRequest;
  export type Output = ModifyTransitGatewayVpcAttachmentResult;
  export type Error =
    | CommonAwsError;
}

export declare namespace ModifyVerifiedAccessEndpoint {
  export type Input = ModifyVerifiedAccessEndpointRequest;
  export type Output = ModifyVerifiedAccessEndpointResult;
  export type Error =
    | CommonAwsError;
}

export declare namespace ModifyVerifiedAccessEndpointPolicy {
  export type Input = ModifyVerifiedAccessEndpointPolicyRequest;
  export type Output = ModifyVerifiedAccessEndpointPolicyResult;
  export type Error =
    | CommonAwsError;
}

export declare namespace ModifyVerifiedAccessGroup {
  export type Input = ModifyVerifiedAccessGroupRequest;
  export type Output = ModifyVerifiedAccessGroupResult;
  export type Error =
    | CommonAwsError;
}

export declare namespace ModifyVerifiedAccessGroupPolicy {
  export type Input = ModifyVerifiedAccessGroupPolicyRequest;
  export type Output = ModifyVerifiedAccessGroupPolicyResult;
  export type Error =
    | CommonAwsError;
}

export declare namespace ModifyVerifiedAccessInstance {
  export type Input = ModifyVerifiedAccessInstanceRequest;
  export type Output = ModifyVerifiedAccessInstanceResult;
  export type Error =
    | CommonAwsError;
}

export declare namespace ModifyVerifiedAccessInstanceLoggingConfiguration {
  export type Input = ModifyVerifiedAccessInstanceLoggingConfigurationRequest;
  export type Output = ModifyVerifiedAccessInstanceLoggingConfigurationResult;
  export type Error =
    | CommonAwsError;
}

export declare namespace ModifyVerifiedAccessTrustProvider {
  export type Input = ModifyVerifiedAccessTrustProviderRequest;
  export type Output = ModifyVerifiedAccessTrustProviderResult;
  export type Error =
    | CommonAwsError;
}

export declare namespace ModifyVolume {
  export type Input = ModifyVolumeRequest;
  export type Output = ModifyVolumeResult;
  export type Error =
    | CommonAwsError;
}

export declare namespace ModifyVolumeAttribute {
  export type Input = ModifyVolumeAttributeRequest;
  export type Output = {};
  export type Error =
    | CommonAwsError;
}

export declare namespace ModifyVpcAttribute {
  export type Input = ModifyVpcAttributeRequest;
  export type Output = {};
  export type Error =
    | CommonAwsError;
}

export declare namespace ModifyVpcBlockPublicAccessExclusion {
  export type Input = ModifyVpcBlockPublicAccessExclusionRequest;
  export type Output = ModifyVpcBlockPublicAccessExclusionResult;
  export type Error =
    | CommonAwsError;
}

export declare namespace ModifyVpcBlockPublicAccessOptions {
  export type Input = ModifyVpcBlockPublicAccessOptionsRequest;
  export type Output = ModifyVpcBlockPublicAccessOptionsResult;
  export type Error =
    | CommonAwsError;
}

export declare namespace ModifyVpcEndpoint {
  export type Input = ModifyVpcEndpointRequest;
  export type Output = ModifyVpcEndpointResult;
  export type Error =
    | CommonAwsError;
}

export declare namespace ModifyVpcEndpointConnectionNotification {
  export type Input = ModifyVpcEndpointConnectionNotificationRequest;
  export type Output = ModifyVpcEndpointConnectionNotificationResult;
  export type Error =
    | CommonAwsError;
}

export declare namespace ModifyVpcEndpointServiceConfiguration {
  export type Input = ModifyVpcEndpointServiceConfigurationRequest;
  export type Output = ModifyVpcEndpointServiceConfigurationResult;
  export type Error =
    | CommonAwsError;
}

export declare namespace ModifyVpcEndpointServicePayerResponsibility {
  export type Input = ModifyVpcEndpointServicePayerResponsibilityRequest;
  export type Output = ModifyVpcEndpointServicePayerResponsibilityResult;
  export type Error =
    | CommonAwsError;
}

export declare namespace ModifyVpcEndpointServicePermissions {
  export type Input = ModifyVpcEndpointServicePermissionsRequest;
  export type Output = ModifyVpcEndpointServicePermissionsResult;
  export type Error =
    | CommonAwsError;
}

export declare namespace ModifyVpcPeeringConnectionOptions {
  export type Input = ModifyVpcPeeringConnectionOptionsRequest;
  export type Output = ModifyVpcPeeringConnectionOptionsResult;
  export type Error =
    | CommonAwsError;
}

export declare namespace ModifyVpcTenancy {
  export type Input = ModifyVpcTenancyRequest;
  export type Output = ModifyVpcTenancyResult;
  export type Error =
    | CommonAwsError;
}

export declare namespace ModifyVpnConnection {
  export type Input = ModifyVpnConnectionRequest;
  export type Output = ModifyVpnConnectionResult;
  export type Error =
    | CommonAwsError;
}

export declare namespace ModifyVpnConnectionOptions {
  export type Input = ModifyVpnConnectionOptionsRequest;
  export type Output = ModifyVpnConnectionOptionsResult;
  export type Error =
    | CommonAwsError;
}

export declare namespace ModifyVpnTunnelCertificate {
  export type Input = ModifyVpnTunnelCertificateRequest;
  export type Output = ModifyVpnTunnelCertificateResult;
  export type Error =
    | CommonAwsError;
}

export declare namespace ModifyVpnTunnelOptions {
  export type Input = ModifyVpnTunnelOptionsRequest;
  export type Output = ModifyVpnTunnelOptionsResult;
  export type Error =
    | CommonAwsError;
}

export declare namespace MonitorInstances {
  export type Input = MonitorInstancesRequest;
  export type Output = MonitorInstancesResult;
  export type Error =
    | CommonAwsError;
}

export declare namespace MoveAddressToVpc {
  export type Input = MoveAddressToVpcRequest;
  export type Output = MoveAddressToVpcResult;
  export type Error =
    | CommonAwsError;
}

export declare namespace MoveByoipCidrToIpam {
  export type Input = MoveByoipCidrToIpamRequest;
  export type Output = MoveByoipCidrToIpamResult;
  export type Error =
    | CommonAwsError;
}

export declare namespace MoveCapacityReservationInstances {
  export type Input = MoveCapacityReservationInstancesRequest;
  export type Output = MoveCapacityReservationInstancesResult;
  export type Error =
    | CommonAwsError;
}

export declare namespace ProvisionByoipCidr {
  export type Input = ProvisionByoipCidrRequest;
  export type Output = ProvisionByoipCidrResult;
  export type Error =
    | CommonAwsError;
}

export declare namespace ProvisionIpamByoasn {
  export type Input = ProvisionIpamByoasnRequest;
  export type Output = ProvisionIpamByoasnResult;
  export type Error =
    | CommonAwsError;
}

export declare namespace ProvisionIpamPoolCidr {
  export type Input = ProvisionIpamPoolCidrRequest;
  export type Output = ProvisionIpamPoolCidrResult;
  export type Error =
    | CommonAwsError;
}

export declare namespace ProvisionPublicIpv4PoolCidr {
  export type Input = ProvisionPublicIpv4PoolCidrRequest;
  export type Output = ProvisionPublicIpv4PoolCidrResult;
  export type Error =
    | CommonAwsError;
}

export declare namespace PurchaseCapacityBlock {
  export type Input = PurchaseCapacityBlockRequest;
  export type Output = PurchaseCapacityBlockResult;
  export type Error =
    | CommonAwsError;
}

export declare namespace PurchaseCapacityBlockExtension {
  export type Input = PurchaseCapacityBlockExtensionRequest;
  export type Output = PurchaseCapacityBlockExtensionResult;
  export type Error =
    | CommonAwsError;
}

export declare namespace PurchaseHostReservation {
  export type Input = PurchaseHostReservationRequest;
  export type Output = PurchaseHostReservationResult;
  export type Error =
    | CommonAwsError;
}

export declare namespace PurchaseReservedInstancesOffering {
  export type Input = PurchaseReservedInstancesOfferingRequest;
  export type Output = PurchaseReservedInstancesOfferingResult;
  export type Error =
    | CommonAwsError;
}

export declare namespace PurchaseScheduledInstances {
  export type Input = PurchaseScheduledInstancesRequest;
  export type Output = PurchaseScheduledInstancesResult;
  export type Error =
    | CommonAwsError;
}

export declare namespace RebootInstances {
  export type Input = RebootInstancesRequest;
  export type Output = {};
  export type Error =
    | CommonAwsError;
}

export declare namespace RegisterImage {
  export type Input = RegisterImageRequest;
  export type Output = RegisterImageResult;
  export type Error =
    | CommonAwsError;
}

export declare namespace RegisterInstanceEventNotificationAttributes {
  export type Input = RegisterInstanceEventNotificationAttributesRequest;
  export type Output = RegisterInstanceEventNotificationAttributesResult;
  export type Error =
    | CommonAwsError;
}

export declare namespace RegisterTransitGatewayMulticastGroupMembers {
  export type Input = RegisterTransitGatewayMulticastGroupMembersRequest;
  export type Output = RegisterTransitGatewayMulticastGroupMembersResult;
  export type Error =
    | CommonAwsError;
}

export declare namespace RegisterTransitGatewayMulticastGroupSources {
  export type Input = RegisterTransitGatewayMulticastGroupSourcesRequest;
  export type Output = RegisterTransitGatewayMulticastGroupSourcesResult;
  export type Error =
    | CommonAwsError;
}

export declare namespace RejectCapacityReservationBillingOwnership {
  export type Input = RejectCapacityReservationBillingOwnershipRequest;
  export type Output = RejectCapacityReservationBillingOwnershipResult;
  export type Error =
    | CommonAwsError;
}

export declare namespace RejectTransitGatewayMulticastDomainAssociations {
  export type Input = RejectTransitGatewayMulticastDomainAssociationsRequest;
  export type Output = RejectTransitGatewayMulticastDomainAssociationsResult;
  export type Error =
    | CommonAwsError;
}

export declare namespace RejectTransitGatewayPeeringAttachment {
  export type Input = RejectTransitGatewayPeeringAttachmentRequest;
  export type Output = RejectTransitGatewayPeeringAttachmentResult;
  export type Error =
    | CommonAwsError;
}

export declare namespace RejectTransitGatewayVpcAttachment {
  export type Input = RejectTransitGatewayVpcAttachmentRequest;
  export type Output = RejectTransitGatewayVpcAttachmentResult;
  export type Error =
    | CommonAwsError;
}

export declare namespace RejectVpcEndpointConnections {
  export type Input = RejectVpcEndpointConnectionsRequest;
  export type Output = RejectVpcEndpointConnectionsResult;
  export type Error =
    | CommonAwsError;
}

export declare namespace RejectVpcPeeringConnection {
  export type Input = RejectVpcPeeringConnectionRequest;
  export type Output = RejectVpcPeeringConnectionResult;
  export type Error =
    | CommonAwsError;
}

export declare namespace ReleaseAddress {
  export type Input = ReleaseAddressRequest;
  export type Output = {};
  export type Error =
    | CommonAwsError;
}

export declare namespace ReleaseHosts {
  export type Input = ReleaseHostsRequest;
  export type Output = ReleaseHostsResult;
  export type Error =
    | CommonAwsError;
}

export declare namespace ReleaseIpamPoolAllocation {
  export type Input = ReleaseIpamPoolAllocationRequest;
  export type Output = ReleaseIpamPoolAllocationResult;
  export type Error =
    | CommonAwsError;
}

export declare namespace ReplaceIamInstanceProfileAssociation {
  export type Input = ReplaceIamInstanceProfileAssociationRequest;
  export type Output = ReplaceIamInstanceProfileAssociationResult;
  export type Error =
    | CommonAwsError;
}

export declare namespace ReplaceImageCriteriaInAllowedImagesSettings {
  export type Input = ReplaceImageCriteriaInAllowedImagesSettingsRequest;
  export type Output = ReplaceImageCriteriaInAllowedImagesSettingsResult;
  export type Error =
    | CommonAwsError;
}

export declare namespace ReplaceNetworkAclAssociation {
  export type Input = ReplaceNetworkAclAssociationRequest;
  export type Output = ReplaceNetworkAclAssociationResult;
  export type Error =
    | CommonAwsError;
}

export declare namespace ReplaceNetworkAclEntry {
  export type Input = ReplaceNetworkAclEntryRequest;
  export type Output = {};
  export type Error =
    | CommonAwsError;
}

export declare namespace ReplaceRoute {
  export type Input = ReplaceRouteRequest;
  export type Output = {};
  export type Error =
    | CommonAwsError;
}

export declare namespace ReplaceRouteTableAssociation {
  export type Input = ReplaceRouteTableAssociationRequest;
  export type Output = ReplaceRouteTableAssociationResult;
  export type Error =
    | CommonAwsError;
}

export declare namespace ReplaceTransitGatewayRoute {
  export type Input = ReplaceTransitGatewayRouteRequest;
  export type Output = ReplaceTransitGatewayRouteResult;
  export type Error =
    | CommonAwsError;
}

export declare namespace ReplaceVpnTunnel {
  export type Input = ReplaceVpnTunnelRequest;
  export type Output = ReplaceVpnTunnelResult;
  export type Error =
    | CommonAwsError;
}

export declare namespace ReportInstanceStatus {
  export type Input = ReportInstanceStatusRequest;
  export type Output = {};
  export type Error =
    | CommonAwsError;
}

export declare namespace RequestSpotFleet {
  export type Input = RequestSpotFleetRequest;
  export type Output = RequestSpotFleetResponse;
  export type Error =
    | CommonAwsError;
}

export declare namespace RequestSpotInstances {
  export type Input = RequestSpotInstancesRequest;
  export type Output = RequestSpotInstancesResult;
  export type Error =
    | CommonAwsError;
}

export declare namespace ResetAddressAttribute {
  export type Input = ResetAddressAttributeRequest;
  export type Output = ResetAddressAttributeResult;
  export type Error =
    | CommonAwsError;
}

export declare namespace ResetEbsDefaultKmsKeyId {
  export type Input = ResetEbsDefaultKmsKeyIdRequest;
  export type Output = ResetEbsDefaultKmsKeyIdResult;
  export type Error =
    | CommonAwsError;
}

export declare namespace ResetFpgaImageAttribute {
  export type Input = ResetFpgaImageAttributeRequest;
  export type Output = ResetFpgaImageAttributeResult;
  export type Error =
    | CommonAwsError;
}

export declare namespace ResetImageAttribute {
  export type Input = ResetImageAttributeRequest;
  export type Output = {};
  export type Error =
    | CommonAwsError;
}

export declare namespace ResetInstanceAttribute {
  export type Input = ResetInstanceAttributeRequest;
  export type Output = {};
  export type Error =
    | CommonAwsError;
}

export declare namespace ResetNetworkInterfaceAttribute {
  export type Input = ResetNetworkInterfaceAttributeRequest;
  export type Output = {};
  export type Error =
    | CommonAwsError;
}

export declare namespace ResetSnapshotAttribute {
  export type Input = ResetSnapshotAttributeRequest;
  export type Output = {};
  export type Error =
    | CommonAwsError;
}

export declare namespace RestoreAddressToClassic {
  export type Input = RestoreAddressToClassicRequest;
  export type Output = RestoreAddressToClassicResult;
  export type Error =
    | CommonAwsError;
}

export declare namespace RestoreImageFromRecycleBin {
  export type Input = RestoreImageFromRecycleBinRequest;
  export type Output = RestoreImageFromRecycleBinResult;
  export type Error =
    | CommonAwsError;
}

export declare namespace RestoreManagedPrefixListVersion {
  export type Input = RestoreManagedPrefixListVersionRequest;
  export type Output = RestoreManagedPrefixListVersionResult;
  export type Error =
    | CommonAwsError;
}

export declare namespace RestoreSnapshotFromRecycleBin {
  export type Input = RestoreSnapshotFromRecycleBinRequest;
  export type Output = RestoreSnapshotFromRecycleBinResult;
  export type Error =
    | CommonAwsError;
}

export declare namespace RestoreSnapshotTier {
  export type Input = RestoreSnapshotTierRequest;
  export type Output = RestoreSnapshotTierResult;
  export type Error =
    | CommonAwsError;
}

export declare namespace RevokeClientVpnIngress {
  export type Input = RevokeClientVpnIngressRequest;
  export type Output = RevokeClientVpnIngressResult;
  export type Error =
    | CommonAwsError;
}

export declare namespace RevokeSecurityGroupEgress {
  export type Input = RevokeSecurityGroupEgressRequest;
  export type Output = RevokeSecurityGroupEgressResult;
  export type Error =
    | CommonAwsError;
}

export declare namespace RevokeSecurityGroupIngress {
  export type Input = RevokeSecurityGroupIngressRequest;
  export type Output = RevokeSecurityGroupIngressResult;
  export type Error =
    | CommonAwsError;
}

export declare namespace RunInstances {
  export type Input = RunInstancesRequest;
  export type Output = Reservation;
  export type Error =
    | CommonAwsError;
}

export declare namespace RunScheduledInstances {
  export type Input = RunScheduledInstancesRequest;
  export type Output = RunScheduledInstancesResult;
  export type Error =
    | CommonAwsError;
}

export declare namespace SearchLocalGatewayRoutes {
  export type Input = SearchLocalGatewayRoutesRequest;
  export type Output = SearchLocalGatewayRoutesResult;
  export type Error =
    | CommonAwsError;
}

export declare namespace SearchTransitGatewayMulticastGroups {
  export type Input = SearchTransitGatewayMulticastGroupsRequest;
  export type Output = SearchTransitGatewayMulticastGroupsResult;
  export type Error =
    | CommonAwsError;
}

export declare namespace SearchTransitGatewayRoutes {
  export type Input = SearchTransitGatewayRoutesRequest;
  export type Output = SearchTransitGatewayRoutesResult;
  export type Error =
    | CommonAwsError;
}

export declare namespace SendDiagnosticInterrupt {
  export type Input = SendDiagnosticInterruptRequest;
  export type Output = {};
  export type Error =
    | CommonAwsError;
}

export declare namespace StartDeclarativePoliciesReport {
  export type Input = StartDeclarativePoliciesReportRequest;
  export type Output = StartDeclarativePoliciesReportResult;
  export type Error =
    | CommonAwsError;
}

export declare namespace StartInstances {
  export type Input = StartInstancesRequest;
  export type Output = StartInstancesResult;
  export type Error =
    | CommonAwsError;
}

export declare namespace StartNetworkInsightsAccessScopeAnalysis {
  export type Input = StartNetworkInsightsAccessScopeAnalysisRequest;
  export type Output = StartNetworkInsightsAccessScopeAnalysisResult;
  export type Error =
    | CommonAwsError;
}

export declare namespace StartNetworkInsightsAnalysis {
  export type Input = StartNetworkInsightsAnalysisRequest;
  export type Output = StartNetworkInsightsAnalysisResult;
  export type Error =
    | CommonAwsError;
}

export declare namespace StartVpcEndpointServicePrivateDnsVerification {
  export type Input = StartVpcEndpointServicePrivateDnsVerificationRequest;
  export type Output = StartVpcEndpointServicePrivateDnsVerificationResult;
  export type Error =
    | CommonAwsError;
}

export declare namespace StopInstances {
  export type Input = StopInstancesRequest;
  export type Output = StopInstancesResult;
  export type Error =
    | CommonAwsError;
}

export declare namespace TerminateClientVpnConnections {
  export type Input = TerminateClientVpnConnectionsRequest;
  export type Output = TerminateClientVpnConnectionsResult;
  export type Error =
    | CommonAwsError;
}

export declare namespace TerminateInstances {
  export type Input = TerminateInstancesRequest;
  export type Output = TerminateInstancesResult;
  export type Error =
    | CommonAwsError;
}

export declare namespace UnassignIpv6Addresses {
  export type Input = UnassignIpv6AddressesRequest;
  export type Output = UnassignIpv6AddressesResult;
  export type Error =
    | CommonAwsError;
}

export declare namespace UnassignPrivateIpAddresses {
  export type Input = UnassignPrivateIpAddressesRequest;
  export type Output = {};
  export type Error =
    | CommonAwsError;
}

export declare namespace UnassignPrivateNatGatewayAddress {
  export type Input = UnassignPrivateNatGatewayAddressRequest;
  export type Output = UnassignPrivateNatGatewayAddressResult;
  export type Error =
    | CommonAwsError;
}

export declare namespace UnlockSnapshot {
  export type Input = UnlockSnapshotRequest;
  export type Output = UnlockSnapshotResult;
  export type Error =
    | CommonAwsError;
}

export declare namespace UnmonitorInstances {
  export type Input = UnmonitorInstancesRequest;
  export type Output = UnmonitorInstancesResult;
  export type Error =
    | CommonAwsError;
}

export declare namespace UpdateSecurityGroupRuleDescriptionsEgress {
  export type Input = UpdateSecurityGroupRuleDescriptionsEgressRequest;
  export type Output = UpdateSecurityGroupRuleDescriptionsEgressResult;
  export type Error =
    | CommonAwsError;
}

export declare namespace UpdateSecurityGroupRuleDescriptionsIngress {
  export type Input = UpdateSecurityGroupRuleDescriptionsIngressRequest;
  export type Output = UpdateSecurityGroupRuleDescriptionsIngressResult;
  export type Error =
    | CommonAwsError;
}

export declare namespace WithdrawByoipCidr {
  export type Input = WithdrawByoipCidrRequest;
  export type Output = WithdrawByoipCidrResult;
  export type Error =
    | CommonAwsError;
}

