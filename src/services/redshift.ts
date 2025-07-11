import type { Effect, Data as EffectData } from "effect";
import type { CommonAwsError } from "../error.ts";

export interface RedshiftServiceVersion20121201 {
  acceptReservedNodeExchange(
    input: AcceptReservedNodeExchangeInputMessage,
  ): Effect.Effect<
    AcceptReservedNodeExchangeOutputMessage,
    | DependentServiceUnavailableFault
    | InvalidReservedNodeStateFault
    | ReservedNodeAlreadyExistsFault
    | ReservedNodeAlreadyMigratedFault
    | ReservedNodeNotFoundFault
    | ReservedNodeOfferingNotFoundFault
    | UnsupportedOperationFault
    | CommonAwsError
  >;
  addPartner(
    input: PartnerIntegrationInputMessage,
  ): Effect.Effect<
    PartnerIntegrationOutputMessage,
    | ClusterNotFoundFault
    | PartnerNotFoundFault
    | UnauthorizedPartnerIntegrationFault
    | UnsupportedOperationFault
    | CommonAwsError
  >;
  associateDataShareConsumer(
    input: AssociateDataShareConsumerMessage,
  ): Effect.Effect<
    DataShare,
    InvalidDataShareFault | InvalidNamespaceFault | CommonAwsError
  >;
  authorizeClusterSecurityGroupIngress(
    input: AuthorizeClusterSecurityGroupIngressMessage,
  ): Effect.Effect<
    AuthorizeClusterSecurityGroupIngressResult,
    | AuthorizationAlreadyExistsFault
    | AuthorizationQuotaExceededFault
    | ClusterSecurityGroupNotFoundFault
    | InvalidClusterSecurityGroupStateFault
    | CommonAwsError
  >;
  authorizeDataShare(
    input: AuthorizeDataShareMessage,
  ): Effect.Effect<DataShare, InvalidDataShareFault | CommonAwsError>;
  authorizeEndpointAccess(
    input: AuthorizeEndpointAccessMessage,
  ): Effect.Effect<
    EndpointAuthorization,
    | ClusterNotFoundFault
    | EndpointAuthorizationAlreadyExistsFault
    | EndpointAuthorizationsPerClusterLimitExceededFault
    | InvalidAuthorizationStateFault
    | InvalidClusterStateFault
    | UnsupportedOperationFault
    | CommonAwsError
  >;
  authorizeSnapshotAccess(
    input: AuthorizeSnapshotAccessMessage,
  ): Effect.Effect<
    AuthorizeSnapshotAccessResult,
    | AuthorizationAlreadyExistsFault
    | AuthorizationQuotaExceededFault
    | ClusterSnapshotNotFoundFault
    | DependentServiceRequestThrottlingFault
    | InvalidClusterSnapshotStateFault
    | LimitExceededFault
    | UnsupportedOperationFault
    | CommonAwsError
  >;
  batchDeleteClusterSnapshots(
    input: BatchDeleteClusterSnapshotsRequest,
  ): Effect.Effect<
    BatchDeleteClusterSnapshotsResult,
    BatchDeleteRequestSizeExceededFault | CommonAwsError
  >;
  batchModifyClusterSnapshots(
    input: BatchModifyClusterSnapshotsMessage,
  ): Effect.Effect<
    BatchModifyClusterSnapshotsOutputMessage,
    | BatchModifyClusterSnapshotsLimitExceededFault
    | InvalidRetentionPeriodFault
    | CommonAwsError
  >;
  cancelResize(
    input: CancelResizeMessage,
  ): Effect.Effect<
    ResizeProgressMessage,
    | ClusterNotFoundFault
    | InvalidClusterStateFault
    | ResizeNotFoundFault
    | UnsupportedOperationFault
    | CommonAwsError
  >;
  copyClusterSnapshot(
    input: CopyClusterSnapshotMessage,
  ): Effect.Effect<
    CopyClusterSnapshotResult,
    | ClusterNotFoundFault
    | ClusterSnapshotAlreadyExistsFault
    | ClusterSnapshotNotFoundFault
    | ClusterSnapshotQuotaExceededFault
    | InvalidClusterSnapshotStateFault
    | InvalidRetentionPeriodFault
    | CommonAwsError
  >;
  createAuthenticationProfile(
    input: CreateAuthenticationProfileMessage,
  ): Effect.Effect<
    CreateAuthenticationProfileResult,
    | AuthenticationProfileAlreadyExistsFault
    | AuthenticationProfileQuotaExceededFault
    | InvalidAuthenticationProfileRequestFault
    | CommonAwsError
  >;
  createCluster(
    input: CreateClusterMessage,
  ): Effect.Effect<
    CreateClusterResult,
    | ClusterAlreadyExistsFault
    | ClusterParameterGroupNotFoundFault
    | ClusterQuotaExceededFault
    | ClusterSecurityGroupNotFoundFault
    | ClusterSubnetGroupNotFoundFault
    | DependentServiceRequestThrottlingFault
    | HsmClientCertificateNotFoundFault
    | HsmConfigurationNotFoundFault
    | InsufficientClusterCapacityFault
    | InvalidClusterSubnetGroupStateFault
    | InvalidClusterTrackFault
    | InvalidElasticIpFault
    | InvalidRetentionPeriodFault
    | InvalidSubnet
    | InvalidTagFault
    | InvalidVPCNetworkStateFault
    | Ipv6CidrBlockNotFoundFault
    | LimitExceededFault
    | NumberOfNodesPerClusterLimitExceededFault
    | NumberOfNodesQuotaExceededFault
    | RedshiftIdcApplicationNotExistsFault
    | SnapshotScheduleNotFoundFault
    | TagLimitExceededFault
    | UnauthorizedOperation
    | UnsupportedOperationFault
    | CommonAwsError
  >;
  createClusterParameterGroup(
    input: CreateClusterParameterGroupMessage,
  ): Effect.Effect<
    CreateClusterParameterGroupResult,
    | ClusterParameterGroupAlreadyExistsFault
    | ClusterParameterGroupQuotaExceededFault
    | InvalidTagFault
    | TagLimitExceededFault
    | CommonAwsError
  >;
  createClusterSecurityGroup(
    input: CreateClusterSecurityGroupMessage,
  ): Effect.Effect<
    CreateClusterSecurityGroupResult,
    | ClusterSecurityGroupAlreadyExistsFault
    | ClusterSecurityGroupQuotaExceededFault
    | InvalidTagFault
    | TagLimitExceededFault
    | CommonAwsError
  >;
  createClusterSnapshot(
    input: CreateClusterSnapshotMessage,
  ): Effect.Effect<
    CreateClusterSnapshotResult,
    | ClusterNotFoundFault
    | ClusterSnapshotAlreadyExistsFault
    | ClusterSnapshotQuotaExceededFault
    | InvalidClusterStateFault
    | InvalidRetentionPeriodFault
    | InvalidTagFault
    | TagLimitExceededFault
    | CommonAwsError
  >;
  createClusterSubnetGroup(
    input: CreateClusterSubnetGroupMessage,
  ): Effect.Effect<
    CreateClusterSubnetGroupResult,
    | ClusterSubnetGroupAlreadyExistsFault
    | ClusterSubnetGroupQuotaExceededFault
    | ClusterSubnetQuotaExceededFault
    | DependentServiceRequestThrottlingFault
    | InvalidSubnet
    | InvalidTagFault
    | TagLimitExceededFault
    | UnauthorizedOperation
    | CommonAwsError
  >;
  createCustomDomainAssociation(
    input: CreateCustomDomainAssociationMessage,
  ): Effect.Effect<
    CreateCustomDomainAssociationResult,
    | ClusterNotFoundFault
    | CustomCnameAssociationFault
    | UnsupportedOperationFault
    | CommonAwsError
  >;
  createEndpointAccess(
    input: CreateEndpointAccessMessage,
  ): Effect.Effect<
    EndpointAccess,
    | AccessToClusterDeniedFault
    | ClusterNotFoundFault
    | ClusterSubnetGroupNotFoundFault
    | EndpointAlreadyExistsFault
    | EndpointsPerAuthorizationLimitExceededFault
    | EndpointsPerClusterLimitExceededFault
    | InvalidClusterSecurityGroupStateFault
    | InvalidClusterStateFault
    | UnauthorizedOperation
    | UnsupportedOperationFault
    | CommonAwsError
  >;
  createEventSubscription(
    input: CreateEventSubscriptionMessage,
  ): Effect.Effect<
    CreateEventSubscriptionResult,
    | EventSubscriptionQuotaExceededFault
    | InvalidTagFault
    | SNSInvalidTopicFault
    | SNSNoAuthorizationFault
    | SNSTopicArnNotFoundFault
    | SourceNotFoundFault
    | SubscriptionAlreadyExistFault
    | SubscriptionCategoryNotFoundFault
    | SubscriptionEventIdNotFoundFault
    | SubscriptionSeverityNotFoundFault
    | TagLimitExceededFault
    | CommonAwsError
  >;
  createHsmClientCertificate(
    input: CreateHsmClientCertificateMessage,
  ): Effect.Effect<
    CreateHsmClientCertificateResult,
    | HsmClientCertificateAlreadyExistsFault
    | HsmClientCertificateQuotaExceededFault
    | InvalidTagFault
    | TagLimitExceededFault
    | CommonAwsError
  >;
  createHsmConfiguration(
    input: CreateHsmConfigurationMessage,
  ): Effect.Effect<
    CreateHsmConfigurationResult,
    | HsmConfigurationAlreadyExistsFault
    | HsmConfigurationQuotaExceededFault
    | InvalidTagFault
    | TagLimitExceededFault
    | CommonAwsError
  >;
  createIntegration(
    input: CreateIntegrationMessage,
  ): Effect.Effect<
    Integration,
    | IntegrationAlreadyExistsFault
    | IntegrationConflictOperationFault
    | IntegrationQuotaExceededFault
    | IntegrationSourceNotFoundFault
    | IntegrationTargetNotFoundFault
    | InvalidClusterStateFault
    | InvalidTagFault
    | TagLimitExceededFault
    | UnsupportedOperationFault
    | CommonAwsError
  >;
  createRedshiftIdcApplication(
    input: CreateRedshiftIdcApplicationMessage,
  ): Effect.Effect<
    CreateRedshiftIdcApplicationResult,
    | DependentServiceAccessDeniedFault
    | DependentServiceUnavailableFault
    | RedshiftIdcApplicationAlreadyExistsFault
    | RedshiftIdcApplicationQuotaExceededFault
    | UnsupportedOperationFault
    | CommonAwsError
  >;
  createScheduledAction(
    input: CreateScheduledActionMessage,
  ): Effect.Effect<
    ScheduledAction,
    | ClusterNotFoundFault
    | InvalidScheduledActionFault
    | InvalidScheduleFault
    | ScheduledActionAlreadyExistsFault
    | ScheduledActionQuotaExceededFault
    | ScheduledActionTypeUnsupportedFault
    | UnauthorizedOperation
    | UnsupportedOperationFault
    | CommonAwsError
  >;
  createSnapshotCopyGrant(
    input: CreateSnapshotCopyGrantMessage,
  ): Effect.Effect<
    CreateSnapshotCopyGrantResult,
    | DependentServiceRequestThrottlingFault
    | InvalidTagFault
    | LimitExceededFault
    | SnapshotCopyGrantAlreadyExistsFault
    | SnapshotCopyGrantQuotaExceededFault
    | TagLimitExceededFault
    | CommonAwsError
  >;
  createSnapshotSchedule(
    input: CreateSnapshotScheduleMessage,
  ): Effect.Effect<
    SnapshotSchedule,
    | InvalidScheduleFault
    | InvalidTagFault
    | ScheduleDefinitionTypeUnsupportedFault
    | SnapshotScheduleAlreadyExistsFault
    | SnapshotScheduleQuotaExceededFault
    | TagLimitExceededFault
    | CommonAwsError
  >;
  createTags(
    input: CreateTagsMessage,
  ): Effect.Effect<
    {},
    | InvalidClusterStateFault
    | InvalidTagFault
    | ResourceNotFoundFault
    | TagLimitExceededFault
    | CommonAwsError
  >;
  createUsageLimit(
    input: CreateUsageLimitMessage,
  ): Effect.Effect<
    UsageLimit,
    | ClusterNotFoundFault
    | InvalidClusterStateFault
    | InvalidUsageLimitFault
    | LimitExceededFault
    | TagLimitExceededFault
    | UnsupportedOperationFault
    | UsageLimitAlreadyExistsFault
    | CommonAwsError
  >;
  deauthorizeDataShare(
    input: DeauthorizeDataShareMessage,
  ): Effect.Effect<DataShare, InvalidDataShareFault | CommonAwsError>;
  deleteAuthenticationProfile(
    input: DeleteAuthenticationProfileMessage,
  ): Effect.Effect<
    DeleteAuthenticationProfileResult,
    | AuthenticationProfileNotFoundFault
    | InvalidAuthenticationProfileRequestFault
    | CommonAwsError
  >;
  deleteCluster(
    input: DeleteClusterMessage,
  ): Effect.Effect<
    DeleteClusterResult,
    | ClusterNotFoundFault
    | ClusterSnapshotAlreadyExistsFault
    | ClusterSnapshotQuotaExceededFault
    | InvalidClusterStateFault
    | InvalidRetentionPeriodFault
    | CommonAwsError
  >;
  deleteClusterParameterGroup(
    input: DeleteClusterParameterGroupMessage,
  ): Effect.Effect<
    {},
    | ClusterParameterGroupNotFoundFault
    | InvalidClusterParameterGroupStateFault
    | CommonAwsError
  >;
  deleteClusterSecurityGroup(
    input: DeleteClusterSecurityGroupMessage,
  ): Effect.Effect<
    {},
    | ClusterSecurityGroupNotFoundFault
    | InvalidClusterSecurityGroupStateFault
    | CommonAwsError
  >;
  deleteClusterSnapshot(
    input: DeleteClusterSnapshotMessage,
  ): Effect.Effect<
    DeleteClusterSnapshotResult,
    | ClusterSnapshotNotFoundFault
    | InvalidClusterSnapshotStateFault
    | CommonAwsError
  >;
  deleteClusterSubnetGroup(
    input: DeleteClusterSubnetGroupMessage,
  ): Effect.Effect<
    {},
    | ClusterSubnetGroupNotFoundFault
    | InvalidClusterSubnetGroupStateFault
    | InvalidClusterSubnetStateFault
    | CommonAwsError
  >;
  deleteCustomDomainAssociation(
    input: DeleteCustomDomainAssociationMessage,
  ): Effect.Effect<
    {},
    | ClusterNotFoundFault
    | CustomCnameAssociationFault
    | CustomDomainAssociationNotFoundFault
    | UnsupportedOperationFault
    | CommonAwsError
  >;
  deleteEndpointAccess(
    input: DeleteEndpointAccessMessage,
  ): Effect.Effect<
    EndpointAccess,
    | ClusterNotFoundFault
    | EndpointNotFoundFault
    | InvalidClusterSecurityGroupStateFault
    | InvalidClusterStateFault
    | InvalidEndpointStateFault
    | CommonAwsError
  >;
  deleteEventSubscription(
    input: DeleteEventSubscriptionMessage,
  ): Effect.Effect<
    {},
    InvalidSubscriptionStateFault | SubscriptionNotFoundFault | CommonAwsError
  >;
  deleteHsmClientCertificate(
    input: DeleteHsmClientCertificateMessage,
  ): Effect.Effect<
    {},
    | HsmClientCertificateNotFoundFault
    | InvalidHsmClientCertificateStateFault
    | CommonAwsError
  >;
  deleteHsmConfiguration(
    input: DeleteHsmConfigurationMessage,
  ): Effect.Effect<
    {},
    | HsmConfigurationNotFoundFault
    | InvalidHsmConfigurationStateFault
    | CommonAwsError
  >;
  deleteIntegration(
    input: DeleteIntegrationMessage,
  ): Effect.Effect<
    Integration,
    | IntegrationConflictOperationFault
    | IntegrationConflictStateFault
    | IntegrationNotFoundFault
    | UnsupportedOperationFault
    | CommonAwsError
  >;
  deletePartner(
    input: PartnerIntegrationInputMessage,
  ): Effect.Effect<
    PartnerIntegrationOutputMessage,
    | ClusterNotFoundFault
    | PartnerNotFoundFault
    | UnauthorizedPartnerIntegrationFault
    | UnsupportedOperationFault
    | CommonAwsError
  >;
  deleteRedshiftIdcApplication(
    input: DeleteRedshiftIdcApplicationMessage,
  ): Effect.Effect<
    {},
    | DependentServiceAccessDeniedFault
    | DependentServiceUnavailableFault
    | RedshiftIdcApplicationNotExistsFault
    | UnsupportedOperationFault
    | CommonAwsError
  >;
  deleteResourcePolicy(
    input: DeleteResourcePolicyMessage,
  ): Effect.Effect<
    {},
    ResourceNotFoundFault | UnsupportedOperationFault | CommonAwsError
  >;
  deleteScheduledAction(
    input: DeleteScheduledActionMessage,
  ): Effect.Effect<
    {},
    ScheduledActionNotFoundFault | UnauthorizedOperation | CommonAwsError
  >;
  deleteSnapshotCopyGrant(
    input: DeleteSnapshotCopyGrantMessage,
  ): Effect.Effect<
    {},
    | InvalidSnapshotCopyGrantStateFault
    | SnapshotCopyGrantNotFoundFault
    | CommonAwsError
  >;
  deleteSnapshotSchedule(
    input: DeleteSnapshotScheduleMessage,
  ): Effect.Effect<
    {},
    | InvalidClusterSnapshotScheduleStateFault
    | SnapshotScheduleNotFoundFault
    | CommonAwsError
  >;
  deleteTags(
    input: DeleteTagsMessage,
  ): Effect.Effect<
    {},
    InvalidTagFault | ResourceNotFoundFault | CommonAwsError
  >;
  deleteUsageLimit(
    input: DeleteUsageLimitMessage,
  ): Effect.Effect<
    {},
    UnsupportedOperationFault | UsageLimitNotFoundFault | CommonAwsError
  >;
  deregisterNamespace(
    input: DeregisterNamespaceInputMessage,
  ): Effect.Effect<
    DeregisterNamespaceOutputMessage,
    | ClusterNotFoundFault
    | InvalidClusterStateFault
    | InvalidNamespaceFault
    | CommonAwsError
  >;
  describeAccountAttributes(
    input: DescribeAccountAttributesMessage,
  ): Effect.Effect<AccountAttributeList, CommonAwsError>;
  describeAuthenticationProfiles(
    input: DescribeAuthenticationProfilesMessage,
  ): Effect.Effect<
    DescribeAuthenticationProfilesResult,
    | AuthenticationProfileNotFoundFault
    | InvalidAuthenticationProfileRequestFault
    | CommonAwsError
  >;
  describeClusterDbRevisions(
    input: DescribeClusterDbRevisionsMessage,
  ): Effect.Effect<
    ClusterDbRevisionsMessage,
    ClusterNotFoundFault | InvalidClusterStateFault | CommonAwsError
  >;
  describeClusterParameterGroups(
    input: DescribeClusterParameterGroupsMessage,
  ): Effect.Effect<
    ClusterParameterGroupsMessage,
    ClusterParameterGroupNotFoundFault | InvalidTagFault | CommonAwsError
  >;
  describeClusterParameters(
    input: DescribeClusterParametersMessage,
  ): Effect.Effect<
    ClusterParameterGroupDetails,
    ClusterParameterGroupNotFoundFault | CommonAwsError
  >;
  describeClusters(
    input: DescribeClustersMessage,
  ): Effect.Effect<
    ClustersMessage,
    ClusterNotFoundFault | InvalidTagFault | CommonAwsError
  >;
  describeClusterSecurityGroups(
    input: DescribeClusterSecurityGroupsMessage,
  ): Effect.Effect<
    ClusterSecurityGroupMessage,
    ClusterSecurityGroupNotFoundFault | InvalidTagFault | CommonAwsError
  >;
  describeClusterSnapshots(
    input: DescribeClusterSnapshotsMessage,
  ): Effect.Effect<
    SnapshotMessage,
    | ClusterNotFoundFault
    | ClusterSnapshotNotFoundFault
    | InvalidTagFault
    | UnsupportedOperationFault
    | CommonAwsError
  >;
  describeClusterSubnetGroups(
    input: DescribeClusterSubnetGroupsMessage,
  ): Effect.Effect<
    ClusterSubnetGroupMessage,
    ClusterSubnetGroupNotFoundFault | InvalidTagFault | CommonAwsError
  >;
  describeClusterTracks(
    input: DescribeClusterTracksMessage,
  ): Effect.Effect<
    TrackListMessage,
    InvalidClusterTrackFault | UnauthorizedOperation | CommonAwsError
  >;
  describeClusterVersions(
    input: DescribeClusterVersionsMessage,
  ): Effect.Effect<ClusterVersionsMessage, CommonAwsError>;
  describeCustomDomainAssociations(
    input: DescribeCustomDomainAssociationsMessage,
  ): Effect.Effect<
    CustomDomainAssociationsMessage,
    | CustomDomainAssociationNotFoundFault
    | UnsupportedOperationFault
    | CommonAwsError
  >;
  describeDataShares(
    input: DescribeDataSharesMessage,
  ): Effect.Effect<
    DescribeDataSharesResult,
    InvalidDataShareFault | CommonAwsError
  >;
  describeDataSharesForConsumer(
    input: DescribeDataSharesForConsumerMessage,
  ): Effect.Effect<
    DescribeDataSharesForConsumerResult,
    InvalidNamespaceFault | CommonAwsError
  >;
  describeDataSharesForProducer(
    input: DescribeDataSharesForProducerMessage,
  ): Effect.Effect<
    DescribeDataSharesForProducerResult,
    InvalidNamespaceFault | CommonAwsError
  >;
  describeDefaultClusterParameters(
    input: DescribeDefaultClusterParametersMessage,
  ): Effect.Effect<DescribeDefaultClusterParametersResult, CommonAwsError>;
  describeEndpointAccess(
    input: DescribeEndpointAccessMessage,
  ): Effect.Effect<
    EndpointAccessList,
    | ClusterNotFoundFault
    | EndpointNotFoundFault
    | InvalidClusterStateFault
    | CommonAwsError
  >;
  describeEndpointAuthorization(
    input: DescribeEndpointAuthorizationMessage,
  ): Effect.Effect<
    EndpointAuthorizationList,
    ClusterNotFoundFault | UnsupportedOperationFault | CommonAwsError
  >;
  describeEventCategories(
    input: DescribeEventCategoriesMessage,
  ): Effect.Effect<EventCategoriesMessage, CommonAwsError>;
  describeEvents(
    input: DescribeEventsMessage,
  ): Effect.Effect<EventsMessage, CommonAwsError>;
  describeEventSubscriptions(
    input: DescribeEventSubscriptionsMessage,
  ): Effect.Effect<
    EventSubscriptionsMessage,
    InvalidTagFault | SubscriptionNotFoundFault | CommonAwsError
  >;
  describeHsmClientCertificates(
    input: DescribeHsmClientCertificatesMessage,
  ): Effect.Effect<
    HsmClientCertificateMessage,
    HsmClientCertificateNotFoundFault | InvalidTagFault | CommonAwsError
  >;
  describeHsmConfigurations(
    input: DescribeHsmConfigurationsMessage,
  ): Effect.Effect<
    HsmConfigurationMessage,
    HsmConfigurationNotFoundFault | InvalidTagFault | CommonAwsError
  >;
  describeInboundIntegrations(
    input: DescribeInboundIntegrationsMessage,
  ): Effect.Effect<
    InboundIntegrationsMessage,
    | IntegrationNotFoundFault
    | InvalidNamespaceFault
    | UnsupportedOperationFault
    | CommonAwsError
  >;
  describeIntegrations(
    input: DescribeIntegrationsMessage,
  ): Effect.Effect<
    IntegrationsMessage,
    IntegrationNotFoundFault | UnsupportedOperationFault | CommonAwsError
  >;
  describeLoggingStatus(
    input: DescribeLoggingStatusMessage,
  ): Effect.Effect<
    LoggingStatus,
    ClusterNotFoundFault | UnsupportedOperationFault | CommonAwsError
  >;
  describeNodeConfigurationOptions(
    input: DescribeNodeConfigurationOptionsMessage,
  ): Effect.Effect<
    NodeConfigurationOptionsMessage,
    | AccessToSnapshotDeniedFault
    | ClusterNotFoundFault
    | ClusterSnapshotNotFoundFault
    | InvalidClusterSnapshotStateFault
    | UnsupportedOperationFault
    | CommonAwsError
  >;
  describeOrderableClusterOptions(
    input: DescribeOrderableClusterOptionsMessage,
  ): Effect.Effect<OrderableClusterOptionsMessage, CommonAwsError>;
  describePartners(
    input: DescribePartnersInputMessage,
  ): Effect.Effect<
    DescribePartnersOutputMessage,
    | ClusterNotFoundFault
    | UnauthorizedPartnerIntegrationFault
    | UnsupportedOperationFault
    | CommonAwsError
  >;
  describeRedshiftIdcApplications(
    input: DescribeRedshiftIdcApplicationsMessage,
  ): Effect.Effect<
    DescribeRedshiftIdcApplicationsResult,
    | DependentServiceAccessDeniedFault
    | DependentServiceUnavailableFault
    | RedshiftIdcApplicationNotExistsFault
    | UnsupportedOperationFault
    | CommonAwsError
  >;
  describeReservedNodeExchangeStatus(
    input: DescribeReservedNodeExchangeStatusInputMessage,
  ): Effect.Effect<
    DescribeReservedNodeExchangeStatusOutputMessage,
    | ReservedNodeExchangeNotFoundFault
    | ReservedNodeNotFoundFault
    | UnsupportedOperationFault
    | CommonAwsError
  >;
  describeReservedNodeOfferings(
    input: DescribeReservedNodeOfferingsMessage,
  ): Effect.Effect<
    ReservedNodeOfferingsMessage,
    | DependentServiceUnavailableFault
    | ReservedNodeOfferingNotFoundFault
    | UnsupportedOperationFault
    | CommonAwsError
  >;
  describeReservedNodes(
    input: DescribeReservedNodesMessage,
  ): Effect.Effect<
    ReservedNodesMessage,
    | DependentServiceUnavailableFault
    | ReservedNodeNotFoundFault
    | CommonAwsError
  >;
  describeResize(
    input: DescribeResizeMessage,
  ): Effect.Effect<
    ResizeProgressMessage,
    | ClusterNotFoundFault
    | ResizeNotFoundFault
    | UnsupportedOperationFault
    | CommonAwsError
  >;
  describeScheduledActions(
    input: DescribeScheduledActionsMessage,
  ): Effect.Effect<
    ScheduledActionsMessage,
    ScheduledActionNotFoundFault | UnauthorizedOperation | CommonAwsError
  >;
  describeSnapshotCopyGrants(
    input: DescribeSnapshotCopyGrantsMessage,
  ): Effect.Effect<
    SnapshotCopyGrantMessage,
    InvalidTagFault | SnapshotCopyGrantNotFoundFault | CommonAwsError
  >;
  describeSnapshotSchedules(
    input: DescribeSnapshotSchedulesMessage,
  ): Effect.Effect<DescribeSnapshotSchedulesOutputMessage, CommonAwsError>;
  describeStorage(input: {}): Effect.Effect<
    CustomerStorageMessage,
    CommonAwsError
  >;
  describeTableRestoreStatus(
    input: DescribeTableRestoreStatusMessage,
  ): Effect.Effect<
    TableRestoreStatusMessage,
    ClusterNotFoundFault | TableRestoreNotFoundFault | CommonAwsError
  >;
  describeTags(
    input: DescribeTagsMessage,
  ): Effect.Effect<
    TaggedResourceListMessage,
    InvalidTagFault | ResourceNotFoundFault | CommonAwsError
  >;
  describeUsageLimits(
    input: DescribeUsageLimitsMessage,
  ): Effect.Effect<
    UsageLimitList,
    ClusterNotFoundFault | UnsupportedOperationFault | CommonAwsError
  >;
  disableLogging(
    input: DisableLoggingMessage,
  ): Effect.Effect<
    LoggingStatus,
    | ClusterNotFoundFault
    | InvalidClusterStateFault
    | UnsupportedOperationFault
    | CommonAwsError
  >;
  disableSnapshotCopy(
    input: DisableSnapshotCopyMessage,
  ): Effect.Effect<
    DisableSnapshotCopyResult,
    | ClusterNotFoundFault
    | InvalidClusterStateFault
    | SnapshotCopyAlreadyDisabledFault
    | UnauthorizedOperation
    | UnsupportedOperationFault
    | CommonAwsError
  >;
  disassociateDataShareConsumer(
    input: DisassociateDataShareConsumerMessage,
  ): Effect.Effect<
    DataShare,
    InvalidDataShareFault | InvalidNamespaceFault | CommonAwsError
  >;
  enableLogging(
    input: EnableLoggingMessage,
  ): Effect.Effect<
    LoggingStatus,
    | BucketNotFoundFault
    | ClusterNotFoundFault
    | InsufficientS3BucketPolicyFault
    | InvalidClusterStateFault
    | InvalidS3BucketNameFault
    | InvalidS3KeyPrefixFault
    | UnsupportedOperationFault
    | CommonAwsError
  >;
  enableSnapshotCopy(
    input: EnableSnapshotCopyMessage,
  ): Effect.Effect<
    EnableSnapshotCopyResult,
    | ClusterNotFoundFault
    | CopyToRegionDisabledFault
    | DependentServiceRequestThrottlingFault
    | IncompatibleOrderableOptions
    | InvalidClusterStateFault
    | InvalidRetentionPeriodFault
    | LimitExceededFault
    | SnapshotCopyAlreadyEnabledFault
    | SnapshotCopyGrantNotFoundFault
    | UnauthorizedOperation
    | UnknownSnapshotCopyRegionFault
    | CommonAwsError
  >;
  failoverPrimaryCompute(
    input: FailoverPrimaryComputeInputMessage,
  ): Effect.Effect<
    FailoverPrimaryComputeResult,
    | ClusterNotFoundFault
    | InvalidClusterStateFault
    | UnauthorizedOperation
    | UnsupportedOperationFault
    | CommonAwsError
  >;
  getClusterCredentials(
    input: GetClusterCredentialsMessage,
  ): Effect.Effect<
    ClusterCredentials,
    ClusterNotFoundFault | UnsupportedOperationFault | CommonAwsError
  >;
  getClusterCredentialsWithIAM(
    input: GetClusterCredentialsWithIAMMessage,
  ): Effect.Effect<
    ClusterExtendedCredentials,
    ClusterNotFoundFault | UnsupportedOperationFault | CommonAwsError
  >;
  getReservedNodeExchangeConfigurationOptions(
    input: GetReservedNodeExchangeConfigurationOptionsInputMessage,
  ): Effect.Effect<
    GetReservedNodeExchangeConfigurationOptionsOutputMessage,
    | ClusterNotFoundFault
    | ClusterSnapshotNotFoundFault
    | DependentServiceUnavailableFault
    | InvalidReservedNodeStateFault
    | ReservedNodeAlreadyMigratedFault
    | ReservedNodeNotFoundFault
    | ReservedNodeOfferingNotFoundFault
    | UnsupportedOperationFault
    | CommonAwsError
  >;
  getReservedNodeExchangeOfferings(
    input: GetReservedNodeExchangeOfferingsInputMessage,
  ): Effect.Effect<
    GetReservedNodeExchangeOfferingsOutputMessage,
    | DependentServiceUnavailableFault
    | InvalidReservedNodeStateFault
    | ReservedNodeAlreadyMigratedFault
    | ReservedNodeNotFoundFault
    | ReservedNodeOfferingNotFoundFault
    | UnsupportedOperationFault
    | CommonAwsError
  >;
  getResourcePolicy(
    input: GetResourcePolicyMessage,
  ): Effect.Effect<
    GetResourcePolicyResult,
    | InvalidPolicyFault
    | ResourceNotFoundFault
    | UnsupportedOperationFault
    | CommonAwsError
  >;
  listRecommendations(
    input: ListRecommendationsMessage,
  ): Effect.Effect<
    ListRecommendationsResult,
    ClusterNotFoundFault | UnsupportedOperationFault | CommonAwsError
  >;
  modifyAquaConfiguration(
    input: ModifyAquaInputMessage,
  ): Effect.Effect<
    ModifyAquaOutputMessage,
    | ClusterNotFoundFault
    | InvalidClusterStateFault
    | UnsupportedOperationFault
    | CommonAwsError
  >;
  modifyAuthenticationProfile(
    input: ModifyAuthenticationProfileMessage,
  ): Effect.Effect<
    ModifyAuthenticationProfileResult,
    | AuthenticationProfileNotFoundFault
    | AuthenticationProfileQuotaExceededFault
    | InvalidAuthenticationProfileRequestFault
    | CommonAwsError
  >;
  modifyCluster(
    input: ModifyClusterMessage,
  ): Effect.Effect<
    ModifyClusterResult,
    | ClusterAlreadyExistsFault
    | ClusterNotFoundFault
    | ClusterParameterGroupNotFoundFault
    | ClusterSecurityGroupNotFoundFault
    | CustomCnameAssociationFault
    | DependentServiceRequestThrottlingFault
    | HsmClientCertificateNotFoundFault
    | HsmConfigurationNotFoundFault
    | InsufficientClusterCapacityFault
    | InvalidClusterSecurityGroupStateFault
    | InvalidClusterStateFault
    | InvalidClusterTrackFault
    | InvalidElasticIpFault
    | InvalidRetentionPeriodFault
    | Ipv6CidrBlockNotFoundFault
    | LimitExceededFault
    | NumberOfNodesPerClusterLimitExceededFault
    | NumberOfNodesQuotaExceededFault
    | TableLimitExceededFault
    | UnauthorizedOperation
    | UnsupportedOperationFault
    | UnsupportedOptionFault
    | CommonAwsError
  >;
  modifyClusterDbRevision(
    input: ModifyClusterDbRevisionMessage,
  ): Effect.Effect<
    ModifyClusterDbRevisionResult,
    | ClusterNotFoundFault
    | ClusterOnLatestRevisionFault
    | InvalidClusterStateFault
    | UnsupportedOperationFault
    | CommonAwsError
  >;
  modifyClusterIamRoles(
    input: ModifyClusterIamRolesMessage,
  ): Effect.Effect<
    ModifyClusterIamRolesResult,
    ClusterNotFoundFault | InvalidClusterStateFault | CommonAwsError
  >;
  modifyClusterMaintenance(
    input: ModifyClusterMaintenanceMessage,
  ): Effect.Effect<
    ModifyClusterMaintenanceResult,
    ClusterNotFoundFault | InvalidClusterStateFault | CommonAwsError
  >;
  modifyClusterParameterGroup(
    input: ModifyClusterParameterGroupMessage,
  ): Effect.Effect<
    ClusterParameterGroupNameMessage,
    | ClusterParameterGroupNotFoundFault
    | InvalidClusterParameterGroupStateFault
    | CommonAwsError
  >;
  modifyClusterSnapshot(
    input: ModifyClusterSnapshotMessage,
  ): Effect.Effect<
    ModifyClusterSnapshotResult,
    | ClusterSnapshotNotFoundFault
    | InvalidClusterSnapshotStateFault
    | InvalidRetentionPeriodFault
    | CommonAwsError
  >;
  modifyClusterSnapshotSchedule(
    input: ModifyClusterSnapshotScheduleMessage,
  ): Effect.Effect<
    {},
    | ClusterNotFoundFault
    | InvalidClusterSnapshotScheduleStateFault
    | SnapshotScheduleNotFoundFault
    | CommonAwsError
  >;
  modifyClusterSubnetGroup(
    input: ModifyClusterSubnetGroupMessage,
  ): Effect.Effect<
    ModifyClusterSubnetGroupResult,
    | ClusterSubnetGroupNotFoundFault
    | ClusterSubnetQuotaExceededFault
    | DependentServiceRequestThrottlingFault
    | InvalidSubnet
    | SubnetAlreadyInUse
    | UnauthorizedOperation
    | CommonAwsError
  >;
  modifyCustomDomainAssociation(
    input: ModifyCustomDomainAssociationMessage,
  ): Effect.Effect<
    ModifyCustomDomainAssociationResult,
    | ClusterNotFoundFault
    | CustomCnameAssociationFault
    | CustomDomainAssociationNotFoundFault
    | UnsupportedOperationFault
    | CommonAwsError
  >;
  modifyEndpointAccess(
    input: ModifyEndpointAccessMessage,
  ): Effect.Effect<
    EndpointAccess,
    | ClusterNotFoundFault
    | EndpointNotFoundFault
    | InvalidClusterSecurityGroupStateFault
    | InvalidClusterStateFault
    | InvalidEndpointStateFault
    | UnauthorizedOperation
    | CommonAwsError
  >;
  modifyEventSubscription(
    input: ModifyEventSubscriptionMessage,
  ): Effect.Effect<
    ModifyEventSubscriptionResult,
    | InvalidSubscriptionStateFault
    | SNSInvalidTopicFault
    | SNSNoAuthorizationFault
    | SNSTopicArnNotFoundFault
    | SourceNotFoundFault
    | SubscriptionCategoryNotFoundFault
    | SubscriptionEventIdNotFoundFault
    | SubscriptionNotFoundFault
    | SubscriptionSeverityNotFoundFault
    | CommonAwsError
  >;
  modifyIntegration(
    input: ModifyIntegrationMessage,
  ): Effect.Effect<
    Integration,
    | IntegrationAlreadyExistsFault
    | IntegrationConflictOperationFault
    | IntegrationConflictStateFault
    | IntegrationNotFoundFault
    | UnsupportedOperationFault
    | CommonAwsError
  >;
  modifyRedshiftIdcApplication(
    input: ModifyRedshiftIdcApplicationMessage,
  ): Effect.Effect<
    ModifyRedshiftIdcApplicationResult,
    | DependentServiceAccessDeniedFault
    | DependentServiceUnavailableFault
    | RedshiftIdcApplicationNotExistsFault
    | UnsupportedOperationFault
    | CommonAwsError
  >;
  modifyScheduledAction(
    input: ModifyScheduledActionMessage,
  ): Effect.Effect<
    ScheduledAction,
    | ClusterNotFoundFault
    | InvalidScheduledActionFault
    | InvalidScheduleFault
    | ScheduledActionNotFoundFault
    | ScheduledActionTypeUnsupportedFault
    | UnauthorizedOperation
    | UnsupportedOperationFault
    | CommonAwsError
  >;
  modifySnapshotCopyRetentionPeriod(
    input: ModifySnapshotCopyRetentionPeriodMessage,
  ): Effect.Effect<
    ModifySnapshotCopyRetentionPeriodResult,
    | ClusterNotFoundFault
    | InvalidClusterStateFault
    | InvalidRetentionPeriodFault
    | SnapshotCopyDisabledFault
    | UnauthorizedOperation
    | CommonAwsError
  >;
  modifySnapshotSchedule(
    input: ModifySnapshotScheduleMessage,
  ): Effect.Effect<
    SnapshotSchedule,
    | InvalidScheduleFault
    | SnapshotScheduleNotFoundFault
    | SnapshotScheduleUpdateInProgressFault
    | CommonAwsError
  >;
  modifyUsageLimit(
    input: ModifyUsageLimitMessage,
  ): Effect.Effect<
    UsageLimit,
    | InvalidUsageLimitFault
    | UnsupportedOperationFault
    | UsageLimitNotFoundFault
    | CommonAwsError
  >;
  pauseCluster(
    input: PauseClusterMessage,
  ): Effect.Effect<
    PauseClusterResult,
    | ClusterNotFoundFault
    | InvalidClusterStateFault
    | UnsupportedOperationFault
    | CommonAwsError
  >;
  purchaseReservedNodeOffering(
    input: PurchaseReservedNodeOfferingMessage,
  ): Effect.Effect<
    PurchaseReservedNodeOfferingResult,
    | ReservedNodeAlreadyExistsFault
    | ReservedNodeOfferingNotFoundFault
    | ReservedNodeQuotaExceededFault
    | UnsupportedOperationFault
    | CommonAwsError
  >;
  putResourcePolicy(
    input: PutResourcePolicyMessage,
  ): Effect.Effect<
    PutResourcePolicyResult,
    | ConflictPolicyUpdateFault
    | InvalidPolicyFault
    | ResourceNotFoundFault
    | UnsupportedOperationFault
    | CommonAwsError
  >;
  rebootCluster(
    input: RebootClusterMessage,
  ): Effect.Effect<
    RebootClusterResult,
    ClusterNotFoundFault | InvalidClusterStateFault | CommonAwsError
  >;
  registerNamespace(
    input: RegisterNamespaceInputMessage,
  ): Effect.Effect<
    RegisterNamespaceOutputMessage,
    | ClusterNotFoundFault
    | InvalidClusterStateFault
    | InvalidNamespaceFault
    | CommonAwsError
  >;
  rejectDataShare(
    input: RejectDataShareMessage,
  ): Effect.Effect<DataShare, InvalidDataShareFault | CommonAwsError>;
  resetClusterParameterGroup(
    input: ResetClusterParameterGroupMessage,
  ): Effect.Effect<
    ClusterParameterGroupNameMessage,
    | ClusterParameterGroupNotFoundFault
    | InvalidClusterParameterGroupStateFault
    | CommonAwsError
  >;
  resizeCluster(
    input: ResizeClusterMessage,
  ): Effect.Effect<
    ResizeClusterResult,
    | ClusterNotFoundFault
    | DependentServiceUnavailableFault
    | InsufficientClusterCapacityFault
    | InvalidClusterStateFault
    | InvalidReservedNodeStateFault
    | LimitExceededFault
    | NumberOfNodesPerClusterLimitExceededFault
    | NumberOfNodesQuotaExceededFault
    | ReservedNodeAlreadyExistsFault
    | ReservedNodeAlreadyMigratedFault
    | ReservedNodeNotFoundFault
    | ReservedNodeOfferingNotFoundFault
    | UnauthorizedOperation
    | UnsupportedOperationFault
    | UnsupportedOptionFault
    | CommonAwsError
  >;
  restoreFromClusterSnapshot(
    input: RestoreFromClusterSnapshotMessage,
  ): Effect.Effect<
    RestoreFromClusterSnapshotResult,
    | AccessToSnapshotDeniedFault
    | ClusterAlreadyExistsFault
    | ClusterParameterGroupNotFoundFault
    | ClusterQuotaExceededFault
    | ClusterSecurityGroupNotFoundFault
    | ClusterSnapshotNotFoundFault
    | ClusterSubnetGroupNotFoundFault
    | DependentServiceRequestThrottlingFault
    | DependentServiceUnavailableFault
    | HsmClientCertificateNotFoundFault
    | HsmConfigurationNotFoundFault
    | InsufficientClusterCapacityFault
    | InvalidClusterSnapshotStateFault
    | InvalidClusterSubnetGroupStateFault
    | InvalidClusterTrackFault
    | InvalidElasticIpFault
    | InvalidReservedNodeStateFault
    | InvalidRestoreFault
    | InvalidSubnet
    | InvalidTagFault
    | InvalidVPCNetworkStateFault
    | Ipv6CidrBlockNotFoundFault
    | LimitExceededFault
    | NumberOfNodesPerClusterLimitExceededFault
    | NumberOfNodesQuotaExceededFault
    | ReservedNodeAlreadyExistsFault
    | ReservedNodeAlreadyMigratedFault
    | ReservedNodeNotFoundFault
    | ReservedNodeOfferingNotFoundFault
    | SnapshotScheduleNotFoundFault
    | TagLimitExceededFault
    | UnauthorizedOperation
    | UnsupportedOperationFault
    | CommonAwsError
  >;
  restoreTableFromClusterSnapshot(
    input: RestoreTableFromClusterSnapshotMessage,
  ): Effect.Effect<
    RestoreTableFromClusterSnapshotResult,
    | ClusterNotFoundFault
    | ClusterSnapshotNotFoundFault
    | InProgressTableRestoreQuotaExceededFault
    | InvalidClusterSnapshotStateFault
    | InvalidClusterStateFault
    | InvalidTableRestoreArgumentFault
    | UnsupportedOperationFault
    | CommonAwsError
  >;
  resumeCluster(
    input: ResumeClusterMessage,
  ): Effect.Effect<
    ResumeClusterResult,
    | ClusterNotFoundFault
    | InsufficientClusterCapacityFault
    | InvalidClusterStateFault
    | UnsupportedOperationFault
    | CommonAwsError
  >;
  revokeClusterSecurityGroupIngress(
    input: RevokeClusterSecurityGroupIngressMessage,
  ): Effect.Effect<
    RevokeClusterSecurityGroupIngressResult,
    | AuthorizationNotFoundFault
    | ClusterSecurityGroupNotFoundFault
    | InvalidClusterSecurityGroupStateFault
    | CommonAwsError
  >;
  revokeEndpointAccess(
    input: RevokeEndpointAccessMessage,
  ): Effect.Effect<
    EndpointAuthorization,
    | ClusterNotFoundFault
    | EndpointAuthorizationNotFoundFault
    | EndpointNotFoundFault
    | InvalidAuthorizationStateFault
    | InvalidClusterSecurityGroupStateFault
    | InvalidClusterStateFault
    | InvalidEndpointStateFault
    | CommonAwsError
  >;
  revokeSnapshotAccess(
    input: RevokeSnapshotAccessMessage,
  ): Effect.Effect<
    RevokeSnapshotAccessResult,
    | AccessToSnapshotDeniedFault
    | AuthorizationNotFoundFault
    | ClusterSnapshotNotFoundFault
    | UnsupportedOperationFault
    | CommonAwsError
  >;
  rotateEncryptionKey(
    input: RotateEncryptionKeyMessage,
  ): Effect.Effect<
    RotateEncryptionKeyResult,
    | ClusterNotFoundFault
    | DependentServiceRequestThrottlingFault
    | InvalidClusterStateFault
    | UnsupportedOperationFault
    | CommonAwsError
  >;
  updatePartnerStatus(
    input: UpdatePartnerStatusInputMessage,
  ): Effect.Effect<
    PartnerIntegrationOutputMessage,
    | ClusterNotFoundFault
    | PartnerNotFoundFault
    | UnauthorizedPartnerIntegrationFault
    | UnsupportedOperationFault
    | CommonAwsError
  >;
}

export type Redshift = RedshiftServiceVersion20121201;

export interface AcceptReservedNodeExchangeInputMessage {
  ReservedNodeId: string;
  TargetReservedNodeOfferingId: string;
}
export interface AcceptReservedNodeExchangeOutputMessage {
  ExchangedReservedNode?: ReservedNode;
}
export declare class AccessToClusterDeniedFault extends EffectData.TaggedError(
  "AccessToClusterDeniedFault",
)<{
  readonly message?: string;
}> {}
export declare class AccessToSnapshotDeniedFault extends EffectData.TaggedError(
  "AccessToSnapshotDeniedFault",
)<{
  readonly message?: string;
}> {}
export interface AccountAttribute {
  AttributeName?: string;
  AttributeValues?: Array<AttributeValueTarget>;
}
export interface AccountAttributeList {
  AccountAttributes?: Array<AccountAttribute>;
}
export type AccountsWithRestoreAccessList = Array<AccountWithRestoreAccess>;
export interface AccountWithRestoreAccess {
  AccountId?: string;
  AccountAlias?: string;
}
export type ActionType =
  | "RESTORE_CLUSTER"
  | "RECOMMEND_NODE_CONFIG"
  | "RESIZE_CLUSTER";
export interface AquaConfiguration {
  AquaStatus?: AquaStatus;
  AquaConfigurationStatus?: AquaConfigurationStatus;
}
export type AquaConfigurationStatus = "ENABLED" | "DISABLED" | "AUTO";
export type AquaStatus = "ENABLED" | "DISABLED" | "APPLYING";
export interface AssociateDataShareConsumerMessage {
  DataShareArn: string;
  AssociateEntireAccount?: boolean;
  ConsumerArn?: string;
  ConsumerRegion?: string;
  AllowWrites?: boolean;
}
export type AssociatedClusterList = Array<ClusterAssociatedToSchedule>;
export interface Association {
  CustomDomainCertificateArn?: string;
  CustomDomainCertificateExpiryDate?: Date | string;
  CertificateAssociations?: Array<CertificateAssociation>;
}
export type AssociationList = Array<Association>;
export type AttributeList = Array<AccountAttribute>;
export type AttributeNameList = Array<string>;
export type AttributeValueList = Array<AttributeValueTarget>;
export interface AttributeValueTarget {
  AttributeValue?: string;
}
export interface AuthenticationProfile {
  AuthenticationProfileName?: string;
  AuthenticationProfileContent?: string;
}
export declare class AuthenticationProfileAlreadyExistsFault extends EffectData.TaggedError(
  "AuthenticationProfileAlreadyExistsFault",
)<{
  readonly message?: string;
}> {}
export type AuthenticationProfileList = Array<AuthenticationProfile>;
export type AuthenticationProfileNameString = string;

export declare class AuthenticationProfileNotFoundFault extends EffectData.TaggedError(
  "AuthenticationProfileNotFoundFault",
)<{
  readonly message?: string;
}> {}
export declare class AuthenticationProfileQuotaExceededFault extends EffectData.TaggedError(
  "AuthenticationProfileQuotaExceededFault",
)<{
  readonly message?: string;
}> {}
export declare class AuthorizationAlreadyExistsFault extends EffectData.TaggedError(
  "AuthorizationAlreadyExistsFault",
)<{
  readonly message?: string;
}> {}
export declare class AuthorizationNotFoundFault extends EffectData.TaggedError(
  "AuthorizationNotFoundFault",
)<{
  readonly message?: string;
}> {}
export declare class AuthorizationQuotaExceededFault extends EffectData.TaggedError(
  "AuthorizationQuotaExceededFault",
)<{
  readonly message?: string;
}> {}
export type AuthorizationStatus = "AUTHORIZED" | "REVOKING";
export interface AuthorizeClusterSecurityGroupIngressMessage {
  ClusterSecurityGroupName: string;
  CIDRIP?: string;
  EC2SecurityGroupName?: string;
  EC2SecurityGroupOwnerId?: string;
}
export interface AuthorizeClusterSecurityGroupIngressResult {
  ClusterSecurityGroup?: ClusterSecurityGroup;
}
export interface AuthorizeDataShareMessage {
  DataShareArn: string;
  ConsumerIdentifier: string;
  AllowWrites?: boolean;
}
export type AuthorizedAudienceList = Array<string>;
export interface AuthorizedTokenIssuer {
  TrustedTokenIssuerArn?: string;
  AuthorizedAudiencesList?: Array<string>;
}
export type AuthorizedTokenIssuerList = Array<AuthorizedTokenIssuer>;
export interface AuthorizeEndpointAccessMessage {
  ClusterIdentifier?: string;
  Account: string;
  VpcIds?: Array<string>;
}
export interface AuthorizeSnapshotAccessMessage {
  SnapshotIdentifier?: string;
  SnapshotArn?: string;
  SnapshotClusterIdentifier?: string;
  AccountWithRestoreAccess: string;
}
export interface AuthorizeSnapshotAccessResult {
  Snapshot?: Snapshot;
}
export interface AvailabilityZone {
  Name?: string;
  SupportedPlatforms?: Array<SupportedPlatform>;
}
export type AvailabilityZoneList = Array<AvailabilityZone>;
export interface BatchDeleteClusterSnapshotsRequest {
  Identifiers: Array<DeleteClusterSnapshotMessage>;
}
export interface BatchDeleteClusterSnapshotsResult {
  Resources?: Array<string>;
  Errors?: Array<SnapshotErrorMessage>;
}
export declare class BatchDeleteRequestSizeExceededFault extends EffectData.TaggedError(
  "BatchDeleteRequestSizeExceededFault",
)<{
  readonly message?: string;
}> {}
export declare class BatchModifyClusterSnapshotsLimitExceededFault extends EffectData.TaggedError(
  "BatchModifyClusterSnapshotsLimitExceededFault",
)<{
  readonly message?: string;
}> {}
export interface BatchModifyClusterSnapshotsMessage {
  SnapshotIdentifierList: Array<string>;
  ManualSnapshotRetentionPeriod?: number;
  Force?: boolean;
}
export interface BatchModifyClusterSnapshotsOutputMessage {
  Resources?: Array<string>;
  Errors?: Array<SnapshotErrorMessage>;
}
export type BatchSnapshotOperationErrorList = Array<SnapshotErrorMessage>;
export type BatchSnapshotOperationErrors = Array<SnapshotErrorMessage>;
export type RedshiftBoolean = boolean;

export type BooleanOptional = boolean;

export declare class BucketNotFoundFault extends EffectData.TaggedError(
  "BucketNotFoundFault",
)<{
  readonly message?: string;
}> {}
export interface CancelResizeMessage {
  ClusterIdentifier: string;
}
export interface CertificateAssociation {
  CustomDomainName?: string;
  ClusterIdentifier?: string;
}
export type CertificateAssociationList = Array<CertificateAssociation>;
export interface Cluster {
  ClusterIdentifier?: string;
  NodeType?: string;
  ClusterStatus?: string;
  ClusterAvailabilityStatus?: string;
  ModifyStatus?: string;
  MasterUsername?: string;
  DBName?: string;
  Endpoint?: Endpoint;
  ClusterCreateTime?: Date | string;
  AutomatedSnapshotRetentionPeriod?: number;
  ManualSnapshotRetentionPeriod?: number;
  ClusterSecurityGroups?: Array<ClusterSecurityGroupMembership>;
  VpcSecurityGroups?: Array<VpcSecurityGroupMembership>;
  ClusterParameterGroups?: Array<ClusterParameterGroupStatus>;
  ClusterSubnetGroupName?: string;
  VpcId?: string;
  AvailabilityZone?: string;
  PreferredMaintenanceWindow?: string;
  PendingModifiedValues?: PendingModifiedValues;
  ClusterVersion?: string;
  AllowVersionUpgrade?: boolean;
  NumberOfNodes?: number;
  PubliclyAccessible?: boolean;
  Encrypted?: boolean;
  RestoreStatus?: RestoreStatus;
  DataTransferProgress?: DataTransferProgress;
  HsmStatus?: HsmStatus;
  ClusterSnapshotCopyStatus?: ClusterSnapshotCopyStatus;
  ClusterPublicKey?: string;
  ClusterNodes?: Array<ClusterNode>;
  ElasticIpStatus?: ElasticIpStatus;
  ClusterRevisionNumber?: string;
  Tags?: Array<Tag>;
  KmsKeyId?: string;
  EnhancedVpcRouting?: boolean;
  IamRoles?: Array<ClusterIamRole>;
  PendingActions?: Array<string>;
  MaintenanceTrackName?: string;
  ElasticResizeNumberOfNodeOptions?: string;
  DeferredMaintenanceWindows?: Array<DeferredMaintenanceWindow>;
  SnapshotScheduleIdentifier?: string;
  SnapshotScheduleState?: ScheduleState;
  ExpectedNextSnapshotScheduleTime?: Date | string;
  ExpectedNextSnapshotScheduleTimeStatus?: string;
  NextMaintenanceWindowStartTime?: Date | string;
  ResizeInfo?: ResizeInfo;
  AvailabilityZoneRelocationStatus?: string;
  ClusterNamespaceArn?: string;
  TotalStorageCapacityInMegaBytes?: number;
  AquaConfiguration?: AquaConfiguration;
  DefaultIamRoleArn?: string;
  ReservedNodeExchangeStatus?: ReservedNodeExchangeStatus;
  CustomDomainName?: string;
  CustomDomainCertificateArn?: string;
  CustomDomainCertificateExpiryDate?: Date | string;
  MasterPasswordSecretArn?: string;
  MasterPasswordSecretKmsKeyId?: string;
  IpAddressType?: string;
  MultiAZ?: string;
  MultiAZSecondary?: SecondaryClusterInfo;
}
export declare class ClusterAlreadyExistsFault extends EffectData.TaggedError(
  "ClusterAlreadyExistsFault",
)<{
  readonly message?: string;
}> {}
export interface ClusterAssociatedToSchedule {
  ClusterIdentifier?: string;
  ScheduleAssociationState?: ScheduleState;
}
export interface ClusterCredentials {
  DbUser?: string;
  DbPassword?: string;
  Expiration?: Date | string;
}
export interface ClusterDbRevision {
  ClusterIdentifier?: string;
  CurrentDatabaseRevision?: string;
  DatabaseRevisionReleaseDate?: Date | string;
  RevisionTargets?: Array<RevisionTarget>;
}
export type ClusterDbRevisionsList = Array<ClusterDbRevision>;
export interface ClusterDbRevisionsMessage {
  Marker?: string;
  ClusterDbRevisions?: Array<ClusterDbRevision>;
}
export interface ClusterExtendedCredentials {
  DbUser?: string;
  DbPassword?: string;
  Expiration?: Date | string;
  NextRefreshTime?: Date | string;
}
export interface ClusterIamRole {
  IamRoleArn?: string;
  ApplyStatus?: string;
}
export type ClusterIamRoleList = Array<ClusterIamRole>;
export type ClusterList = Array<Cluster>;
export interface ClusterNode {
  NodeRole?: string;
  PrivateIPAddress?: string;
  PublicIPAddress?: string;
}
export type ClusterNodesList = Array<ClusterNode>;
export declare class ClusterNotFoundFault extends EffectData.TaggedError(
  "ClusterNotFoundFault",
)<{
  readonly message?: string;
}> {}
export declare class ClusterOnLatestRevisionFault extends EffectData.TaggedError(
  "ClusterOnLatestRevisionFault",
)<{
  readonly message?: string;
}> {}
export interface ClusterParameterGroup {
  ParameterGroupName?: string;
  ParameterGroupFamily?: string;
  Description?: string;
  Tags?: Array<Tag>;
}
export declare class ClusterParameterGroupAlreadyExistsFault extends EffectData.TaggedError(
  "ClusterParameterGroupAlreadyExistsFault",
)<{
  readonly message?: string;
}> {}
export interface ClusterParameterGroupDetails {
  Parameters?: Array<Parameter>;
  Marker?: string;
}
export interface ClusterParameterGroupNameMessage {
  ParameterGroupName?: string;
  ParameterGroupStatus?: string;
}
export declare class ClusterParameterGroupNotFoundFault extends EffectData.TaggedError(
  "ClusterParameterGroupNotFoundFault",
)<{
  readonly message?: string;
}> {}
export declare class ClusterParameterGroupQuotaExceededFault extends EffectData.TaggedError(
  "ClusterParameterGroupQuotaExceededFault",
)<{
  readonly message?: string;
}> {}
export interface ClusterParameterGroupsMessage {
  Marker?: string;
  ParameterGroups?: Array<ClusterParameterGroup>;
}
export interface ClusterParameterGroupStatus {
  ParameterGroupName?: string;
  ParameterApplyStatus?: string;
  ClusterParameterStatusList?: Array<ClusterParameterStatus>;
}
export type ClusterParameterGroupStatusList =
  Array<ClusterParameterGroupStatus>;
export interface ClusterParameterStatus {
  ParameterName?: string;
  ParameterApplyStatus?: string;
  ParameterApplyErrorDescription?: string;
}
export type ClusterParameterStatusList = Array<ClusterParameterStatus>;
export declare class ClusterQuotaExceededFault extends EffectData.TaggedError(
  "ClusterQuotaExceededFault",
)<{
  readonly message?: string;
}> {}
export interface ClusterSecurityGroup {
  ClusterSecurityGroupName?: string;
  Description?: string;
  EC2SecurityGroups?: Array<EC2SecurityGroup>;
  IPRanges?: Array<IPRange>;
  Tags?: Array<Tag>;
}
export declare class ClusterSecurityGroupAlreadyExistsFault extends EffectData.TaggedError(
  "ClusterSecurityGroupAlreadyExistsFault",
)<{
  readonly message?: string;
}> {}
export interface ClusterSecurityGroupMembership {
  ClusterSecurityGroupName?: string;
  Status?: string;
}
export type ClusterSecurityGroupMembershipList =
  Array<ClusterSecurityGroupMembership>;
export interface ClusterSecurityGroupMessage {
  Marker?: string;
  ClusterSecurityGroups?: Array<ClusterSecurityGroup>;
}
export type ClusterSecurityGroupNameList = Array<string>;
export declare class ClusterSecurityGroupNotFoundFault extends EffectData.TaggedError(
  "ClusterSecurityGroupNotFoundFault",
)<{
  readonly message?: string;
}> {}
export declare class ClusterSecurityGroupQuotaExceededFault extends EffectData.TaggedError(
  "ClusterSecurityGroupQuotaExceededFault",
)<{
  readonly message?: string;
}> {}
export type ClusterSecurityGroups = Array<ClusterSecurityGroup>;
export interface ClustersMessage {
  Marker?: string;
  Clusters?: Array<Cluster>;
}
export declare class ClusterSnapshotAlreadyExistsFault extends EffectData.TaggedError(
  "ClusterSnapshotAlreadyExistsFault",
)<{
  readonly message?: string;
}> {}
export interface ClusterSnapshotCopyStatus {
  DestinationRegion?: string;
  RetentionPeriod?: number;
  ManualSnapshotRetentionPeriod?: number;
  SnapshotCopyGrantName?: string;
}
export declare class ClusterSnapshotNotFoundFault extends EffectData.TaggedError(
  "ClusterSnapshotNotFoundFault",
)<{
  readonly message?: string;
}> {}
export declare class ClusterSnapshotQuotaExceededFault extends EffectData.TaggedError(
  "ClusterSnapshotQuotaExceededFault",
)<{
  readonly message?: string;
}> {}
export interface ClusterSubnetGroup {
  ClusterSubnetGroupName?: string;
  Description?: string;
  VpcId?: string;
  SubnetGroupStatus?: string;
  Subnets?: Array<Subnet>;
  Tags?: Array<Tag>;
  SupportedClusterIpAddressTypes?: Array<string>;
}
export declare class ClusterSubnetGroupAlreadyExistsFault extends EffectData.TaggedError(
  "ClusterSubnetGroupAlreadyExistsFault",
)<{
  readonly message?: string;
}> {}
export interface ClusterSubnetGroupMessage {
  Marker?: string;
  ClusterSubnetGroups?: Array<ClusterSubnetGroup>;
}
export declare class ClusterSubnetGroupNotFoundFault extends EffectData.TaggedError(
  "ClusterSubnetGroupNotFoundFault",
)<{
  readonly message?: string;
}> {}
export declare class ClusterSubnetGroupQuotaExceededFault extends EffectData.TaggedError(
  "ClusterSubnetGroupQuotaExceededFault",
)<{
  readonly message?: string;
}> {}
export type ClusterSubnetGroups = Array<ClusterSubnetGroup>;
export declare class ClusterSubnetQuotaExceededFault extends EffectData.TaggedError(
  "ClusterSubnetQuotaExceededFault",
)<{
  readonly message?: string;
}> {}
export interface ClusterVersion {
  ClusterVersion?: string;
  ClusterParameterGroupFamily?: string;
  Description?: string;
}
export type ClusterVersionList = Array<ClusterVersion>;
export interface ClusterVersionsMessage {
  Marker?: string;
  ClusterVersions?: Array<ClusterVersion>;
}
export declare class ConflictPolicyUpdateFault extends EffectData.TaggedError(
  "ConflictPolicyUpdateFault",
)<{
  readonly message?: string;
}> {}
export type ConsumerIdentifierList = Array<string>;
export interface CopyClusterSnapshotMessage {
  SourceSnapshotIdentifier: string;
  SourceSnapshotClusterIdentifier?: string;
  TargetSnapshotIdentifier: string;
  ManualSnapshotRetentionPeriod?: number;
}
export interface CopyClusterSnapshotResult {
  Snapshot?: Snapshot;
}
export declare class CopyToRegionDisabledFault extends EffectData.TaggedError(
  "CopyToRegionDisabledFault",
)<{
  readonly message?: string;
}> {}
export interface CreateAuthenticationProfileMessage {
  AuthenticationProfileName: string;
  AuthenticationProfileContent: string;
}
export interface CreateAuthenticationProfileResult {
  AuthenticationProfileName?: string;
  AuthenticationProfileContent?: string;
}
export interface CreateClusterMessage {
  DBName?: string;
  ClusterIdentifier: string;
  ClusterType?: string;
  NodeType: string;
  MasterUsername: string;
  MasterUserPassword?: string;
  ClusterSecurityGroups?: Array<string>;
  VpcSecurityGroupIds?: Array<string>;
  ClusterSubnetGroupName?: string;
  AvailabilityZone?: string;
  PreferredMaintenanceWindow?: string;
  ClusterParameterGroupName?: string;
  AutomatedSnapshotRetentionPeriod?: number;
  ManualSnapshotRetentionPeriod?: number;
  Port?: number;
  ClusterVersion?: string;
  AllowVersionUpgrade?: boolean;
  NumberOfNodes?: number;
  PubliclyAccessible?: boolean;
  Encrypted?: boolean;
  HsmClientCertificateIdentifier?: string;
  HsmConfigurationIdentifier?: string;
  ElasticIp?: string;
  Tags?: Array<Tag>;
  KmsKeyId?: string;
  EnhancedVpcRouting?: boolean;
  AdditionalInfo?: string;
  IamRoles?: Array<string>;
  MaintenanceTrackName?: string;
  SnapshotScheduleIdentifier?: string;
  AvailabilityZoneRelocation?: boolean;
  AquaConfigurationStatus?: AquaConfigurationStatus;
  DefaultIamRoleArn?: string;
  LoadSampleData?: string;
  ManageMasterPassword?: boolean;
  MasterPasswordSecretKmsKeyId?: string;
  IpAddressType?: string;
  MultiAZ?: boolean;
  RedshiftIdcApplicationArn?: string;
}
export interface CreateClusterParameterGroupMessage {
  ParameterGroupName: string;
  ParameterGroupFamily: string;
  Description: string;
  Tags?: Array<Tag>;
}
export interface CreateClusterParameterGroupResult {
  ClusterParameterGroup?: ClusterParameterGroup;
}
export interface CreateClusterResult {
  Cluster?: Cluster;
}
export interface CreateClusterSecurityGroupMessage {
  ClusterSecurityGroupName: string;
  Description: string;
  Tags?: Array<Tag>;
}
export interface CreateClusterSecurityGroupResult {
  ClusterSecurityGroup?: ClusterSecurityGroup;
}
export interface CreateClusterSnapshotMessage {
  SnapshotIdentifier: string;
  ClusterIdentifier: string;
  ManualSnapshotRetentionPeriod?: number;
  Tags?: Array<Tag>;
}
export interface CreateClusterSnapshotResult {
  Snapshot?: Snapshot;
}
export interface CreateClusterSubnetGroupMessage {
  ClusterSubnetGroupName: string;
  Description: string;
  SubnetIds: Array<string>;
  Tags?: Array<Tag>;
}
export interface CreateClusterSubnetGroupResult {
  ClusterSubnetGroup?: ClusterSubnetGroup;
}
export interface CreateCustomDomainAssociationMessage {
  CustomDomainName: string;
  CustomDomainCertificateArn: string;
  ClusterIdentifier: string;
}
export interface CreateCustomDomainAssociationResult {
  CustomDomainName?: string;
  CustomDomainCertificateArn?: string;
  ClusterIdentifier?: string;
  CustomDomainCertExpiryTime?: string;
}
export interface CreateEndpointAccessMessage {
  ClusterIdentifier?: string;
  ResourceOwner?: string;
  EndpointName: string;
  SubnetGroupName: string;
  VpcSecurityGroupIds?: Array<string>;
}
export interface CreateEventSubscriptionMessage {
  SubscriptionName: string;
  SnsTopicArn: string;
  SourceType?: string;
  SourceIds?: Array<string>;
  EventCategories?: Array<string>;
  Severity?: string;
  Enabled?: boolean;
  Tags?: Array<Tag>;
}
export interface CreateEventSubscriptionResult {
  EventSubscription?: EventSubscription;
}
export interface CreateHsmClientCertificateMessage {
  HsmClientCertificateIdentifier: string;
  Tags?: Array<Tag>;
}
export interface CreateHsmClientCertificateResult {
  HsmClientCertificate?: HsmClientCertificate;
}
export interface CreateHsmConfigurationMessage {
  HsmConfigurationIdentifier: string;
  Description: string;
  HsmIpAddress: string;
  HsmPartitionName: string;
  HsmPartitionPassword: string;
  HsmServerPublicCertificate: string;
  Tags?: Array<Tag>;
}
export interface CreateHsmConfigurationResult {
  HsmConfiguration?: HsmConfiguration;
}
export interface CreateIntegrationMessage {
  SourceArn: string;
  TargetArn: string;
  IntegrationName: string;
  KMSKeyId?: string;
  TagList?: Array<Tag>;
  AdditionalEncryptionContext?: Record<string, string>;
  Description?: string;
}
export interface CreateRedshiftIdcApplicationMessage {
  IdcInstanceArn: string;
  RedshiftIdcApplicationName: string;
  IdentityNamespace?: string;
  IdcDisplayName: string;
  IamRoleArn: string;
  AuthorizedTokenIssuerList?: Array<AuthorizedTokenIssuer>;
  ServiceIntegrations?: Array<ServiceIntegrationsUnion>;
}
export interface CreateRedshiftIdcApplicationResult {
  RedshiftIdcApplication?: RedshiftIdcApplication;
}
export interface CreateScheduledActionMessage {
  ScheduledActionName: string;
  TargetAction: ScheduledActionType;
  Schedule: string;
  IamRole: string;
  ScheduledActionDescription?: string;
  StartTime?: Date | string;
  EndTime?: Date | string;
  Enable?: boolean;
}
export interface CreateSnapshotCopyGrantMessage {
  SnapshotCopyGrantName: string;
  KmsKeyId?: string;
  Tags?: Array<Tag>;
}
export interface CreateSnapshotCopyGrantResult {
  SnapshotCopyGrant?: SnapshotCopyGrant;
}
export interface CreateSnapshotScheduleMessage {
  ScheduleDefinitions?: Array<string>;
  ScheduleIdentifier?: string;
  ScheduleDescription?: string;
  Tags?: Array<Tag>;
  DryRun?: boolean;
  NextInvocations?: number;
}
export interface CreateTagsMessage {
  ResourceName: string;
  Tags: Array<Tag>;
}
export interface CreateUsageLimitMessage {
  ClusterIdentifier: string;
  FeatureType: UsageLimitFeatureType;
  LimitType: UsageLimitLimitType;
  Amount: number;
  Period?: UsageLimitPeriod;
  BreachAction?: UsageLimitBreachAction;
  Tags?: Array<Tag>;
}
export declare class CustomCnameAssociationFault extends EffectData.TaggedError(
  "CustomCnameAssociationFault",
)<{
  readonly message?: string;
}> {}
export declare class CustomDomainAssociationNotFoundFault extends EffectData.TaggedError(
  "CustomDomainAssociationNotFoundFault",
)<{
  readonly message?: string;
}> {}
export interface CustomDomainAssociationsMessage {
  Marker?: string;
  Associations?: Array<Association>;
}
export type CustomDomainCertificateArnString = string;

export type CustomDomainNameString = string;

export interface CustomerStorageMessage {
  TotalBackupSizeInMegaBytes?: number;
  TotalProvisionedStorageInMegaBytes?: number;
}
export interface DataShare {
  DataShareArn?: string;
  ProducerArn?: string;
  AllowPubliclyAccessibleConsumers?: boolean;
  DataShareAssociations?: Array<DataShareAssociation>;
  ManagedBy?: string;
  DataShareType?: DataShareType;
}
export interface DataShareAssociation {
  ConsumerIdentifier?: string;
  Status?: DataShareStatus;
  ConsumerRegion?: string;
  CreatedDate?: Date | string;
  StatusChangeDate?: Date | string;
  ProducerAllowedWrites?: boolean;
  ConsumerAcceptedWrites?: boolean;
}
export type DataShareAssociationList = Array<DataShareAssociation>;
export type DataShareList = Array<DataShare>;
export type DataShareStatus =
  | "ACTIVE"
  | "PENDING_AUTHORIZATION"
  | "AUTHORIZED"
  | "DEAUTHORIZED"
  | "REJECTED"
  | "AVAILABLE";
export type DataShareStatusForConsumer = "ACTIVE" | "AVAILABLE";
export type DataShareStatusForProducer =
  | "ACTIVE"
  | "AUTHORIZED"
  | "PENDING_AUTHORIZATION"
  | "DEAUTHORIZED"
  | "REJECTED";
export type DataShareType = "INTERNAL";
export interface DataTransferProgress {
  Status?: string;
  CurrentRateInMegaBytesPerSecond?: number;
  TotalDataInMegaBytes?: number;
  DataTransferredInMegaBytes?: number;
  EstimatedTimeToCompletionInSeconds?: number;
  ElapsedTimeInSeconds?: number;
}
export type DbGroupList = Array<string>;
export interface DeauthorizeDataShareMessage {
  DataShareArn: string;
  ConsumerIdentifier: string;
}
export interface DefaultClusterParameters {
  ParameterGroupFamily?: string;
  Marker?: string;
  Parameters?: Array<Parameter>;
}
export interface DeferredMaintenanceWindow {
  DeferMaintenanceIdentifier?: string;
  DeferMaintenanceStartTime?: Date | string;
  DeferMaintenanceEndTime?: Date | string;
}
export type DeferredMaintenanceWindowsList = Array<DeferredMaintenanceWindow>;
export interface DeleteAuthenticationProfileMessage {
  AuthenticationProfileName: string;
}
export interface DeleteAuthenticationProfileResult {
  AuthenticationProfileName?: string;
}
export interface DeleteClusterMessage {
  ClusterIdentifier: string;
  SkipFinalClusterSnapshot?: boolean;
  FinalClusterSnapshotIdentifier?: string;
  FinalClusterSnapshotRetentionPeriod?: number;
}
export interface DeleteClusterParameterGroupMessage {
  ParameterGroupName: string;
}
export interface DeleteClusterResult {
  Cluster?: Cluster;
}
export interface DeleteClusterSecurityGroupMessage {
  ClusterSecurityGroupName: string;
}
export interface DeleteClusterSnapshotMessage {
  SnapshotIdentifier: string;
  SnapshotClusterIdentifier?: string;
}
export type DeleteClusterSnapshotMessageList =
  Array<DeleteClusterSnapshotMessage>;
export interface DeleteClusterSnapshotResult {
  Snapshot?: Snapshot;
}
export interface DeleteClusterSubnetGroupMessage {
  ClusterSubnetGroupName: string;
}
export interface DeleteCustomDomainAssociationMessage {
  ClusterIdentifier: string;
  CustomDomainName: string;
}
export interface DeleteEndpointAccessMessage {
  EndpointName: string;
}
export interface DeleteEventSubscriptionMessage {
  SubscriptionName: string;
}
export interface DeleteHsmClientCertificateMessage {
  HsmClientCertificateIdentifier: string;
}
export interface DeleteHsmConfigurationMessage {
  HsmConfigurationIdentifier: string;
}
export interface DeleteIntegrationMessage {
  IntegrationArn: string;
}
export interface DeleteRedshiftIdcApplicationMessage {
  RedshiftIdcApplicationArn: string;
}
export interface DeleteResourcePolicyMessage {
  ResourceArn: string;
}
export interface DeleteScheduledActionMessage {
  ScheduledActionName: string;
}
export interface DeleteSnapshotCopyGrantMessage {
  SnapshotCopyGrantName: string;
}
export interface DeleteSnapshotScheduleMessage {
  ScheduleIdentifier: string;
}
export interface DeleteTagsMessage {
  ResourceName: string;
  TagKeys: Array<string>;
}
export interface DeleteUsageLimitMessage {
  UsageLimitId: string;
}
export declare class DependentServiceAccessDeniedFault extends EffectData.TaggedError(
  "DependentServiceAccessDeniedFault",
)<{
  readonly message?: string;
}> {}
export declare class DependentServiceRequestThrottlingFault extends EffectData.TaggedError(
  "DependentServiceRequestThrottlingFault",
)<{
  readonly message?: string;
}> {}
export declare class DependentServiceUnavailableFault extends EffectData.TaggedError(
  "DependentServiceUnavailableFault",
)<{
  readonly message?: string;
}> {}
export interface DeregisterNamespaceInputMessage {
  NamespaceIdentifier: NamespaceIdentifierUnion;
  ConsumerIdentifiers: Array<string>;
}
export interface DeregisterNamespaceOutputMessage {
  Status?: NamespaceRegistrationStatus;
}
export interface DescribeAccountAttributesMessage {
  AttributeNames?: Array<string>;
}
export interface DescribeAuthenticationProfilesMessage {
  AuthenticationProfileName?: string;
}
export interface DescribeAuthenticationProfilesResult {
  AuthenticationProfiles?: Array<AuthenticationProfile>;
}
export interface DescribeClusterDbRevisionsMessage {
  ClusterIdentifier?: string;
  MaxRecords?: number;
  Marker?: string;
}
export interface DescribeClusterParameterGroupsMessage {
  ParameterGroupName?: string;
  MaxRecords?: number;
  Marker?: string;
  TagKeys?: Array<string>;
  TagValues?: Array<string>;
}
export interface DescribeClusterParametersMessage {
  ParameterGroupName: string;
  Source?: string;
  MaxRecords?: number;
  Marker?: string;
}
export interface DescribeClusterSecurityGroupsMessage {
  ClusterSecurityGroupName?: string;
  MaxRecords?: number;
  Marker?: string;
  TagKeys?: Array<string>;
  TagValues?: Array<string>;
}
export interface DescribeClustersMessage {
  ClusterIdentifier?: string;
  MaxRecords?: number;
  Marker?: string;
  TagKeys?: Array<string>;
  TagValues?: Array<string>;
}
export interface DescribeClusterSnapshotsMessage {
  ClusterIdentifier?: string;
  SnapshotIdentifier?: string;
  SnapshotArn?: string;
  SnapshotType?: string;
  StartTime?: Date | string;
  EndTime?: Date | string;
  MaxRecords?: number;
  Marker?: string;
  OwnerAccount?: string;
  TagKeys?: Array<string>;
  TagValues?: Array<string>;
  ClusterExists?: boolean;
  SortingEntities?: Array<SnapshotSortingEntity>;
}
export interface DescribeClusterSubnetGroupsMessage {
  ClusterSubnetGroupName?: string;
  MaxRecords?: number;
  Marker?: string;
  TagKeys?: Array<string>;
  TagValues?: Array<string>;
}
export interface DescribeClusterTracksMessage {
  MaintenanceTrackName?: string;
  MaxRecords?: number;
  Marker?: string;
}
export interface DescribeClusterVersionsMessage {
  ClusterVersion?: string;
  ClusterParameterGroupFamily?: string;
  MaxRecords?: number;
  Marker?: string;
}
export interface DescribeCustomDomainAssociationsMessage {
  CustomDomainName?: string;
  CustomDomainCertificateArn?: string;
  MaxRecords?: number;
  Marker?: string;
}
export interface DescribeDataSharesForConsumerMessage {
  ConsumerArn?: string;
  Status?: DataShareStatusForConsumer;
  MaxRecords?: number;
  Marker?: string;
}
export interface DescribeDataSharesForConsumerResult {
  DataShares?: Array<DataShare>;
  Marker?: string;
}
export interface DescribeDataSharesForProducerMessage {
  ProducerArn?: string;
  Status?: DataShareStatusForProducer;
  MaxRecords?: number;
  Marker?: string;
}
export interface DescribeDataSharesForProducerResult {
  DataShares?: Array<DataShare>;
  Marker?: string;
}
export interface DescribeDataSharesMessage {
  DataShareArn?: string;
  MaxRecords?: number;
  Marker?: string;
}
export interface DescribeDataSharesResult {
  DataShares?: Array<DataShare>;
  Marker?: string;
}
export interface DescribeDefaultClusterParametersMessage {
  ParameterGroupFamily: string;
  MaxRecords?: number;
  Marker?: string;
}
export interface DescribeDefaultClusterParametersResult {
  DefaultClusterParameters?: DefaultClusterParameters;
}
export interface DescribeEndpointAccessMessage {
  ClusterIdentifier?: string;
  ResourceOwner?: string;
  EndpointName?: string;
  VpcId?: string;
  MaxRecords?: number;
  Marker?: string;
}
export interface DescribeEndpointAuthorizationMessage {
  ClusterIdentifier?: string;
  Account?: string;
  Grantee?: boolean;
  MaxRecords?: number;
  Marker?: string;
}
export interface DescribeEventCategoriesMessage {
  SourceType?: string;
}
export interface DescribeEventsMessage {
  SourceIdentifier?: string;
  SourceType?: SourceType;
  StartTime?: Date | string;
  EndTime?: Date | string;
  Duration?: number;
  MaxRecords?: number;
  Marker?: string;
}
export interface DescribeEventSubscriptionsMessage {
  SubscriptionName?: string;
  MaxRecords?: number;
  Marker?: string;
  TagKeys?: Array<string>;
  TagValues?: Array<string>;
}
export interface DescribeHsmClientCertificatesMessage {
  HsmClientCertificateIdentifier?: string;
  MaxRecords?: number;
  Marker?: string;
  TagKeys?: Array<string>;
  TagValues?: Array<string>;
}
export interface DescribeHsmConfigurationsMessage {
  HsmConfigurationIdentifier?: string;
  MaxRecords?: number;
  Marker?: string;
  TagKeys?: Array<string>;
  TagValues?: Array<string>;
}
export interface DescribeInboundIntegrationsMessage {
  IntegrationArn?: string;
  TargetArn?: string;
  MaxRecords?: number;
  Marker?: string;
}
export interface DescribeIntegrationsFilter {
  Name: DescribeIntegrationsFilterName;
  Values: Array<string>;
}
export type DescribeIntegrationsFilterList = Array<DescribeIntegrationsFilter>;
export type DescribeIntegrationsFilterName =
  | "INTEGRATION_ARN"
  | "SOURCE_ARN"
  | "SOURCE_TYPES"
  | "STATUS";
export type DescribeIntegrationsFilterValueList = Array<string>;
export interface DescribeIntegrationsMessage {
  IntegrationArn?: string;
  MaxRecords?: number;
  Marker?: string;
  Filters?: Array<DescribeIntegrationsFilter>;
}
export interface DescribeLoggingStatusMessage {
  ClusterIdentifier: string;
}
export interface DescribeNodeConfigurationOptionsMessage {
  ActionType: ActionType;
  ClusterIdentifier?: string;
  SnapshotIdentifier?: string;
  SnapshotArn?: string;
  OwnerAccount?: string;
  Filters?: Array<NodeConfigurationOptionsFilter>;
  Marker?: string;
  MaxRecords?: number;
}
export interface DescribeOrderableClusterOptionsMessage {
  ClusterVersion?: string;
  NodeType?: string;
  MaxRecords?: number;
  Marker?: string;
}
export interface DescribePartnersInputMessage {
  AccountId: string;
  ClusterIdentifier: string;
  DatabaseName?: string;
  PartnerName?: string;
}
export interface DescribePartnersOutputMessage {
  PartnerIntegrationInfoList?: Array<PartnerIntegrationInfo>;
}
export interface DescribeRedshiftIdcApplicationsMessage {
  RedshiftIdcApplicationArn?: string;
  MaxRecords?: number;
  Marker?: string;
}
export interface DescribeRedshiftIdcApplicationsResult {
  RedshiftIdcApplications?: Array<RedshiftIdcApplication>;
  Marker?: string;
}
export interface DescribeReservedNodeExchangeStatusInputMessage {
  ReservedNodeId?: string;
  ReservedNodeExchangeRequestId?: string;
  MaxRecords?: number;
  Marker?: string;
}
export interface DescribeReservedNodeExchangeStatusOutputMessage {
  ReservedNodeExchangeStatusDetails?: Array<ReservedNodeExchangeStatus>;
  Marker?: string;
}
export interface DescribeReservedNodeOfferingsMessage {
  ReservedNodeOfferingId?: string;
  MaxRecords?: number;
  Marker?: string;
}
export interface DescribeReservedNodesMessage {
  ReservedNodeId?: string;
  MaxRecords?: number;
  Marker?: string;
}
export interface DescribeResizeMessage {
  ClusterIdentifier: string;
}
export interface DescribeScheduledActionsMessage {
  ScheduledActionName?: string;
  TargetActionType?: ScheduledActionTypeValues;
  StartTime?: Date | string;
  EndTime?: Date | string;
  Active?: boolean;
  Filters?: Array<ScheduledActionFilter>;
  Marker?: string;
  MaxRecords?: number;
}
export interface DescribeSnapshotCopyGrantsMessage {
  SnapshotCopyGrantName?: string;
  MaxRecords?: number;
  Marker?: string;
  TagKeys?: Array<string>;
  TagValues?: Array<string>;
}
export interface DescribeSnapshotSchedulesMessage {
  ClusterIdentifier?: string;
  ScheduleIdentifier?: string;
  TagKeys?: Array<string>;
  TagValues?: Array<string>;
  Marker?: string;
  MaxRecords?: number;
}
export interface DescribeSnapshotSchedulesOutputMessage {
  SnapshotSchedules?: Array<SnapshotSchedule>;
  Marker?: string;
}
export interface DescribeTableRestoreStatusMessage {
  ClusterIdentifier?: string;
  TableRestoreRequestId?: string;
  MaxRecords?: number;
  Marker?: string;
}
export interface DescribeTagsMessage {
  ResourceName?: string;
  ResourceType?: string;
  MaxRecords?: number;
  Marker?: string;
  TagKeys?: Array<string>;
  TagValues?: Array<string>;
}
export interface DescribeUsageLimitsMessage {
  UsageLimitId?: string;
  ClusterIdentifier?: string;
  FeatureType?: UsageLimitFeatureType;
  MaxRecords?: number;
  Marker?: string;
  TagKeys?: Array<string>;
  TagValues?: Array<string>;
}
export type Description = string;

export interface DisableLoggingMessage {
  ClusterIdentifier: string;
}
export interface DisableSnapshotCopyMessage {
  ClusterIdentifier: string;
}
export interface DisableSnapshotCopyResult {
  Cluster?: Cluster;
}
export interface DisassociateDataShareConsumerMessage {
  DataShareArn: string;
  DisassociateEntireAccount?: boolean;
  ConsumerArn?: string;
  ConsumerRegion?: string;
}
export type Double = number;

export type DoubleOptional = number;

export interface EC2SecurityGroup {
  Status?: string;
  EC2SecurityGroupName?: string;
  EC2SecurityGroupOwnerId?: string;
  Tags?: Array<Tag>;
}
export type EC2SecurityGroupList = Array<EC2SecurityGroup>;
export interface ElasticIpStatus {
  ElasticIp?: string;
  Status?: string;
}
export type EligibleTracksToUpdateList = Array<UpdateTarget>;
export interface EnableLoggingMessage {
  ClusterIdentifier: string;
  BucketName?: string;
  S3KeyPrefix?: string;
  LogDestinationType?: LogDestinationType;
  LogExports?: Array<string>;
}
export interface EnableSnapshotCopyMessage {
  ClusterIdentifier: string;
  DestinationRegion: string;
  RetentionPeriod?: number;
  SnapshotCopyGrantName?: string;
  ManualSnapshotRetentionPeriod?: number;
}
export interface EnableSnapshotCopyResult {
  Cluster?: Cluster;
}
export type EncryptionContextMap = Record<string, string>;
export interface Endpoint {
  Address?: string;
  Port?: number;
  VpcEndpoints?: Array<VpcEndpoint>;
}
export interface EndpointAccess {
  ClusterIdentifier?: string;
  ResourceOwner?: string;
  SubnetGroupName?: string;
  EndpointStatus?: string;
  EndpointName?: string;
  EndpointCreateTime?: Date | string;
  Port?: number;
  Address?: string;
  VpcSecurityGroups?: Array<VpcSecurityGroupMembership>;
  VpcEndpoint?: VpcEndpoint;
}
export type EndpointAccesses = Array<EndpointAccess>;
export interface EndpointAccessList {
  EndpointAccessList?: Array<EndpointAccess>;
  Marker?: string;
}
export declare class EndpointAlreadyExistsFault extends EffectData.TaggedError(
  "EndpointAlreadyExistsFault",
)<{
  readonly message?: string;
}> {}
export interface EndpointAuthorization {
  Grantor?: string;
  Grantee?: string;
  ClusterIdentifier?: string;
  AuthorizeTime?: Date | string;
  ClusterStatus?: string;
  Status?: AuthorizationStatus;
  AllowedAllVPCs?: boolean;
  AllowedVPCs?: Array<string>;
  EndpointCount?: number;
}
export declare class EndpointAuthorizationAlreadyExistsFault extends EffectData.TaggedError(
  "EndpointAuthorizationAlreadyExistsFault",
)<{
  readonly message?: string;
}> {}
export interface EndpointAuthorizationList {
  EndpointAuthorizationList?: Array<EndpointAuthorization>;
  Marker?: string;
}
export declare class EndpointAuthorizationNotFoundFault extends EffectData.TaggedError(
  "EndpointAuthorizationNotFoundFault",
)<{
  readonly message?: string;
}> {}
export type EndpointAuthorizations = Array<EndpointAuthorization>;
export declare class EndpointAuthorizationsPerClusterLimitExceededFault extends EffectData.TaggedError(
  "EndpointAuthorizationsPerClusterLimitExceededFault",
)<{
  readonly message?: string;
}> {}
export declare class EndpointNotFoundFault extends EffectData.TaggedError(
  "EndpointNotFoundFault",
)<{
  readonly message?: string;
}> {}
export declare class EndpointsPerAuthorizationLimitExceededFault extends EffectData.TaggedError(
  "EndpointsPerAuthorizationLimitExceededFault",
)<{
  readonly message?: string;
}> {}
export declare class EndpointsPerClusterLimitExceededFault extends EffectData.TaggedError(
  "EndpointsPerClusterLimitExceededFault",
)<{
  readonly message?: string;
}> {}
export interface Event {
  SourceIdentifier?: string;
  SourceType?: SourceType;
  Message?: string;
  EventCategories?: Array<string>;
  Severity?: string;
  Date?: Date | string;
  EventId?: string;
}
export type EventCategoriesList = Array<string>;
export interface EventCategoriesMap {
  SourceType?: string;
  Events?: Array<EventInfoMap>;
}
export type EventCategoriesMapList = Array<EventCategoriesMap>;
export interface EventCategoriesMessage {
  EventCategoriesMapList?: Array<EventCategoriesMap>;
}
export interface EventInfoMap {
  EventId?: string;
  EventCategories?: Array<string>;
  EventDescription?: string;
  Severity?: string;
}
export type EventInfoMapList = Array<EventInfoMap>;
export type EventList = Array<Event>;
export interface EventsMessage {
  Marker?: string;
  Events?: Array<Event>;
}
export interface EventSubscription {
  CustomerAwsId?: string;
  CustSubscriptionId?: string;
  SnsTopicArn?: string;
  Status?: string;
  SubscriptionCreationTime?: Date | string;
  SourceType?: string;
  SourceIdsList?: Array<string>;
  EventCategoriesList?: Array<string>;
  Severity?: string;
  Enabled?: boolean;
  Tags?: Array<Tag>;
}
export declare class EventSubscriptionQuotaExceededFault extends EffectData.TaggedError(
  "EventSubscriptionQuotaExceededFault",
)<{
  readonly message?: string;
}> {}
export type EventSubscriptionsList = Array<EventSubscription>;
export interface EventSubscriptionsMessage {
  Marker?: string;
  EventSubscriptionsList?: Array<EventSubscription>;
}
export type ExceptionMessage = string;

export interface FailoverPrimaryComputeInputMessage {
  ClusterIdentifier: string;
}
export interface FailoverPrimaryComputeResult {
  Cluster?: Cluster;
}
export interface GetClusterCredentialsMessage {
  DbUser: string;
  DbName?: string;
  ClusterIdentifier?: string;
  DurationSeconds?: number;
  AutoCreate?: boolean;
  DbGroups?: Array<string>;
  CustomDomainName?: string;
}
export interface GetClusterCredentialsWithIAMMessage {
  DbName?: string;
  ClusterIdentifier?: string;
  DurationSeconds?: number;
  CustomDomainName?: string;
}
export interface GetReservedNodeExchangeConfigurationOptionsInputMessage {
  ActionType: ReservedNodeExchangeActionType;
  ClusterIdentifier?: string;
  SnapshotIdentifier?: string;
  MaxRecords?: number;
  Marker?: string;
}
export interface GetReservedNodeExchangeConfigurationOptionsOutputMessage {
  Marker?: string;
  ReservedNodeConfigurationOptionList?: Array<ReservedNodeConfigurationOption>;
}
export interface GetReservedNodeExchangeOfferingsInputMessage {
  ReservedNodeId: string;
  MaxRecords?: number;
  Marker?: string;
}
export interface GetReservedNodeExchangeOfferingsOutputMessage {
  Marker?: string;
  ReservedNodeOfferings?: Array<ReservedNodeOffering>;
}
export interface GetResourcePolicyMessage {
  ResourceArn: string;
}
export interface GetResourcePolicyResult {
  ResourcePolicy?: ResourcePolicy;
}
export interface HsmClientCertificate {
  HsmClientCertificateIdentifier?: string;
  HsmClientCertificatePublicKey?: string;
  Tags?: Array<Tag>;
}
export declare class HsmClientCertificateAlreadyExistsFault extends EffectData.TaggedError(
  "HsmClientCertificateAlreadyExistsFault",
)<{
  readonly message?: string;
}> {}
export type HsmClientCertificateList = Array<HsmClientCertificate>;
export interface HsmClientCertificateMessage {
  Marker?: string;
  HsmClientCertificates?: Array<HsmClientCertificate>;
}
export declare class HsmClientCertificateNotFoundFault extends EffectData.TaggedError(
  "HsmClientCertificateNotFoundFault",
)<{
  readonly message?: string;
}> {}
export declare class HsmClientCertificateQuotaExceededFault extends EffectData.TaggedError(
  "HsmClientCertificateQuotaExceededFault",
)<{
  readonly message?: string;
}> {}
export interface HsmConfiguration {
  HsmConfigurationIdentifier?: string;
  Description?: string;
  HsmIpAddress?: string;
  HsmPartitionName?: string;
  Tags?: Array<Tag>;
}
export declare class HsmConfigurationAlreadyExistsFault extends EffectData.TaggedError(
  "HsmConfigurationAlreadyExistsFault",
)<{
  readonly message?: string;
}> {}
export type HsmConfigurationList = Array<HsmConfiguration>;
export interface HsmConfigurationMessage {
  Marker?: string;
  HsmConfigurations?: Array<HsmConfiguration>;
}
export declare class HsmConfigurationNotFoundFault extends EffectData.TaggedError(
  "HsmConfigurationNotFoundFault",
)<{
  readonly message?: string;
}> {}
export declare class HsmConfigurationQuotaExceededFault extends EffectData.TaggedError(
  "HsmConfigurationQuotaExceededFault",
)<{
  readonly message?: string;
}> {}
export interface HsmStatus {
  HsmClientCertificateIdentifier?: string;
  HsmConfigurationIdentifier?: string;
  Status?: string;
}
export type IamRoleArnList = Array<string>;
export type IdcDisplayNameString = string;

export type IdentityNamespaceString = string;

export type ImpactRankingType = "HIGH" | "MEDIUM" | "LOW";
export type ImportTablesCompleted = Array<string>;
export type ImportTablesInProgress = Array<string>;
export type ImportTablesNotStarted = Array<string>;
export interface InboundIntegration {
  IntegrationArn?: string;
  SourceArn?: string;
  TargetArn?: string;
  Status?: ZeroETLIntegrationStatus;
  Errors?: Array<IntegrationError>;
  CreateTime?: Date | string;
}
export type InboundIntegrationArn = string;

export type InboundIntegrationList = Array<InboundIntegration>;
export interface InboundIntegrationsMessage {
  Marker?: string;
  InboundIntegrations?: Array<InboundIntegration>;
}
export declare class IncompatibleOrderableOptions extends EffectData.TaggedError(
  "IncompatibleOrderableOptions",
)<{
  readonly message?: string;
}> {}
export declare class InProgressTableRestoreQuotaExceededFault extends EffectData.TaggedError(
  "InProgressTableRestoreQuotaExceededFault",
)<{
  readonly message?: string;
}> {}
export declare class InsufficientClusterCapacityFault extends EffectData.TaggedError(
  "InsufficientClusterCapacityFault",
)<{
  readonly message?: string;
}> {}
export declare class InsufficientS3BucketPolicyFault extends EffectData.TaggedError(
  "InsufficientS3BucketPolicyFault",
)<{
  readonly message?: string;
}> {}
export type Integer = number;

export type IntegerOptional = number;

export interface Integration {
  IntegrationArn?: string;
  IntegrationName?: string;
  SourceArn?: string;
  TargetArn?: string;
  Status?: ZeroETLIntegrationStatus;
  Errors?: Array<IntegrationError>;
  CreateTime?: Date | string;
  Description?: string;
  KMSKeyId?: string;
  AdditionalEncryptionContext?: Record<string, string>;
  Tags?: Array<Tag>;
}
export declare class IntegrationAlreadyExistsFault extends EffectData.TaggedError(
  "IntegrationAlreadyExistsFault",
)<{
  readonly message?: string;
}> {}
export type IntegrationArn = string;

export declare class IntegrationConflictOperationFault extends EffectData.TaggedError(
  "IntegrationConflictOperationFault",
)<{
  readonly message?: string;
}> {}
export declare class IntegrationConflictStateFault extends EffectData.TaggedError(
  "IntegrationConflictStateFault",
)<{
  readonly message?: string;
}> {}
export type IntegrationDescription = string;

export interface IntegrationError {
  ErrorCode: string;
  ErrorMessage?: string;
}
export type IntegrationErrorList = Array<IntegrationError>;
export type IntegrationList = Array<Integration>;
export type IntegrationName = string;

export declare class IntegrationNotFoundFault extends EffectData.TaggedError(
  "IntegrationNotFoundFault",
)<{
  readonly message?: string;
}> {}
export declare class IntegrationQuotaExceededFault extends EffectData.TaggedError(
  "IntegrationQuotaExceededFault",
)<{
  readonly message?: string;
}> {}
export interface IntegrationsMessage {
  Marker?: string;
  Integrations?: Array<Integration>;
}
export declare class IntegrationSourceNotFoundFault extends EffectData.TaggedError(
  "IntegrationSourceNotFoundFault",
)<{
  readonly message?: string;
}> {}
export declare class IntegrationTargetNotFoundFault extends EffectData.TaggedError(
  "IntegrationTargetNotFoundFault",
)<{
  readonly message?: string;
}> {}
export declare class InvalidAuthenticationProfileRequestFault extends EffectData.TaggedError(
  "InvalidAuthenticationProfileRequestFault",
)<{
  readonly message?: string;
}> {}
export declare class InvalidAuthorizationStateFault extends EffectData.TaggedError(
  "InvalidAuthorizationStateFault",
)<{
  readonly message?: string;
}> {}
export declare class InvalidClusterParameterGroupStateFault extends EffectData.TaggedError(
  "InvalidClusterParameterGroupStateFault",
)<{
  readonly message?: string;
}> {}
export declare class InvalidClusterSecurityGroupStateFault extends EffectData.TaggedError(
  "InvalidClusterSecurityGroupStateFault",
)<{
  readonly message?: string;
}> {}
export declare class InvalidClusterSnapshotScheduleStateFault extends EffectData.TaggedError(
  "InvalidClusterSnapshotScheduleStateFault",
)<{
  readonly message?: string;
}> {}
export declare class InvalidClusterSnapshotStateFault extends EffectData.TaggedError(
  "InvalidClusterSnapshotStateFault",
)<{
  readonly message?: string;
}> {}
export declare class InvalidClusterStateFault extends EffectData.TaggedError(
  "InvalidClusterStateFault",
)<{
  readonly message?: string;
}> {}
export declare class InvalidClusterSubnetGroupStateFault extends EffectData.TaggedError(
  "InvalidClusterSubnetGroupStateFault",
)<{
  readonly message?: string;
}> {}
export declare class InvalidClusterSubnetStateFault extends EffectData.TaggedError(
  "InvalidClusterSubnetStateFault",
)<{
  readonly message?: string;
}> {}
export declare class InvalidClusterTrackFault extends EffectData.TaggedError(
  "InvalidClusterTrackFault",
)<{
  readonly message?: string;
}> {}
export declare class InvalidDataShareFault extends EffectData.TaggedError(
  "InvalidDataShareFault",
)<{
  readonly message?: string;
}> {}
export declare class InvalidElasticIpFault extends EffectData.TaggedError(
  "InvalidElasticIpFault",
)<{
  readonly message?: string;
}> {}
export declare class InvalidEndpointStateFault extends EffectData.TaggedError(
  "InvalidEndpointStateFault",
)<{
  readonly message?: string;
}> {}
export declare class InvalidHsmClientCertificateStateFault extends EffectData.TaggedError(
  "InvalidHsmClientCertificateStateFault",
)<{
  readonly message?: string;
}> {}
export declare class InvalidHsmConfigurationStateFault extends EffectData.TaggedError(
  "InvalidHsmConfigurationStateFault",
)<{
  readonly message?: string;
}> {}
export declare class InvalidNamespaceFault extends EffectData.TaggedError(
  "InvalidNamespaceFault",
)<{
  readonly message?: string;
}> {}
export declare class InvalidPolicyFault extends EffectData.TaggedError(
  "InvalidPolicyFault",
)<{
  readonly message?: string;
}> {}
export declare class InvalidReservedNodeStateFault extends EffectData.TaggedError(
  "InvalidReservedNodeStateFault",
)<{
  readonly message?: string;
}> {}
export declare class InvalidRestoreFault extends EffectData.TaggedError(
  "InvalidRestoreFault",
)<{
  readonly message?: string;
}> {}
export declare class InvalidRetentionPeriodFault extends EffectData.TaggedError(
  "InvalidRetentionPeriodFault",
)<{
  readonly message?: string;
}> {}
export declare class InvalidS3BucketNameFault extends EffectData.TaggedError(
  "InvalidS3BucketNameFault",
)<{
  readonly message?: string;
}> {}
export declare class InvalidS3KeyPrefixFault extends EffectData.TaggedError(
  "InvalidS3KeyPrefixFault",
)<{
  readonly message?: string;
}> {}
export declare class InvalidScheduledActionFault extends EffectData.TaggedError(
  "InvalidScheduledActionFault",
)<{
  readonly message?: string;
}> {}
export declare class InvalidScheduleFault extends EffectData.TaggedError(
  "InvalidScheduleFault",
)<{
  readonly message?: string;
}> {}
export declare class InvalidSnapshotCopyGrantStateFault extends EffectData.TaggedError(
  "InvalidSnapshotCopyGrantStateFault",
)<{
  readonly message?: string;
}> {}
export declare class InvalidSubnet extends EffectData.TaggedError(
  "InvalidSubnet",
)<{
  readonly message?: string;
}> {}
export declare class InvalidSubscriptionStateFault extends EffectData.TaggedError(
  "InvalidSubscriptionStateFault",
)<{
  readonly message?: string;
}> {}
export declare class InvalidTableRestoreArgumentFault extends EffectData.TaggedError(
  "InvalidTableRestoreArgumentFault",
)<{
  readonly message?: string;
}> {}
export declare class InvalidTagFault extends EffectData.TaggedError(
  "InvalidTagFault",
)<{
  readonly message?: string;
}> {}
export declare class InvalidUsageLimitFault extends EffectData.TaggedError(
  "InvalidUsageLimitFault",
)<{
  readonly message?: string;
}> {}
export declare class InvalidVPCNetworkStateFault extends EffectData.TaggedError(
  "InvalidVPCNetworkStateFault",
)<{
  readonly message?: string;
}> {}
export interface IPRange {
  Status?: string;
  CIDRIP?: string;
  Tags?: Array<Tag>;
}
export type IPRangeList = Array<IPRange>;
export declare class Ipv6CidrBlockNotFoundFault extends EffectData.TaggedError(
  "Ipv6CidrBlockNotFoundFault",
)<{
  readonly message?: string;
}> {}
export interface LakeFormationQuery {
  Authorization: ServiceAuthorization;
}
interface _LakeFormationScopeUnion {
  LakeFormationQuery?: LakeFormationQuery;
}

export type LakeFormationScopeUnion = _LakeFormationScopeUnion & {
  LakeFormationQuery: LakeFormationQuery;
};
export type LakeFormationServiceIntegrations = Array<LakeFormationScopeUnion>;
export declare class LimitExceededFault extends EffectData.TaggedError(
  "LimitExceededFault",
)<{
  readonly message?: string;
}> {}
export interface ListRecommendationsMessage {
  ClusterIdentifier?: string;
  NamespaceArn?: string;
  MaxRecords?: number;
  Marker?: string;
}
export interface ListRecommendationsResult {
  Recommendations?: Array<Recommendation>;
  Marker?: string;
}
export type LogDestinationType = "S3" | "CLOUDWATCH";
export interface LoggingStatus {
  LoggingEnabled?: boolean;
  BucketName?: string;
  S3KeyPrefix?: string;
  LastSuccessfulDeliveryTime?: Date | string;
  LastFailureTime?: Date | string;
  LastFailureMessage?: string;
  LogDestinationType?: LogDestinationType;
  LogExports?: Array<string>;
}
export type LogTypeList = Array<string>;
export type Long = number;

export type LongOptional = number;

export interface MaintenanceTrack {
  MaintenanceTrackName?: string;
  DatabaseVersion?: string;
  UpdateTargets?: Array<UpdateTarget>;
}
export type Mode = "STANDARD" | "HIGH_PERFORMANCE";
export interface ModifyAquaInputMessage {
  ClusterIdentifier: string;
  AquaConfigurationStatus?: AquaConfigurationStatus;
}
export interface ModifyAquaOutputMessage {
  AquaConfiguration?: AquaConfiguration;
}
export interface ModifyAuthenticationProfileMessage {
  AuthenticationProfileName: string;
  AuthenticationProfileContent: string;
}
export interface ModifyAuthenticationProfileResult {
  AuthenticationProfileName?: string;
  AuthenticationProfileContent?: string;
}
export interface ModifyClusterDbRevisionMessage {
  ClusterIdentifier: string;
  RevisionTarget: string;
}
export interface ModifyClusterDbRevisionResult {
  Cluster?: Cluster;
}
export interface ModifyClusterIamRolesMessage {
  ClusterIdentifier: string;
  AddIamRoles?: Array<string>;
  RemoveIamRoles?: Array<string>;
  DefaultIamRoleArn?: string;
}
export interface ModifyClusterIamRolesResult {
  Cluster?: Cluster;
}
export interface ModifyClusterMaintenanceMessage {
  ClusterIdentifier: string;
  DeferMaintenance?: boolean;
  DeferMaintenanceIdentifier?: string;
  DeferMaintenanceStartTime?: Date | string;
  DeferMaintenanceEndTime?: Date | string;
  DeferMaintenanceDuration?: number;
}
export interface ModifyClusterMaintenanceResult {
  Cluster?: Cluster;
}
export interface ModifyClusterMessage {
  ClusterIdentifier: string;
  ClusterType?: string;
  NodeType?: string;
  NumberOfNodes?: number;
  ClusterSecurityGroups?: Array<string>;
  VpcSecurityGroupIds?: Array<string>;
  MasterUserPassword?: string;
  ClusterParameterGroupName?: string;
  AutomatedSnapshotRetentionPeriod?: number;
  ManualSnapshotRetentionPeriod?: number;
  PreferredMaintenanceWindow?: string;
  ClusterVersion?: string;
  AllowVersionUpgrade?: boolean;
  HsmClientCertificateIdentifier?: string;
  HsmConfigurationIdentifier?: string;
  NewClusterIdentifier?: string;
  PubliclyAccessible?: boolean;
  ElasticIp?: string;
  EnhancedVpcRouting?: boolean;
  MaintenanceTrackName?: string;
  Encrypted?: boolean;
  KmsKeyId?: string;
  AvailabilityZoneRelocation?: boolean;
  AvailabilityZone?: string;
  Port?: number;
  ManageMasterPassword?: boolean;
  MasterPasswordSecretKmsKeyId?: string;
  IpAddressType?: string;
  MultiAZ?: boolean;
}
export interface ModifyClusterParameterGroupMessage {
  ParameterGroupName: string;
  Parameters: Array<Parameter>;
}
export interface ModifyClusterResult {
  Cluster?: Cluster;
}
export interface ModifyClusterSnapshotMessage {
  SnapshotIdentifier: string;
  ManualSnapshotRetentionPeriod?: number;
  Force?: boolean;
}
export interface ModifyClusterSnapshotResult {
  Snapshot?: Snapshot;
}
export interface ModifyClusterSnapshotScheduleMessage {
  ClusterIdentifier: string;
  ScheduleIdentifier?: string;
  DisassociateSchedule?: boolean;
}
export interface ModifyClusterSubnetGroupMessage {
  ClusterSubnetGroupName: string;
  Description?: string;
  SubnetIds: Array<string>;
}
export interface ModifyClusterSubnetGroupResult {
  ClusterSubnetGroup?: ClusterSubnetGroup;
}
export interface ModifyCustomDomainAssociationMessage {
  CustomDomainName: string;
  CustomDomainCertificateArn: string;
  ClusterIdentifier: string;
}
export interface ModifyCustomDomainAssociationResult {
  CustomDomainName?: string;
  CustomDomainCertificateArn?: string;
  ClusterIdentifier?: string;
  CustomDomainCertExpiryTime?: string;
}
export interface ModifyEndpointAccessMessage {
  EndpointName: string;
  VpcSecurityGroupIds?: Array<string>;
}
export interface ModifyEventSubscriptionMessage {
  SubscriptionName: string;
  SnsTopicArn?: string;
  SourceType?: string;
  SourceIds?: Array<string>;
  EventCategories?: Array<string>;
  Severity?: string;
  Enabled?: boolean;
}
export interface ModifyEventSubscriptionResult {
  EventSubscription?: EventSubscription;
}
export interface ModifyIntegrationMessage {
  IntegrationArn: string;
  Description?: string;
  IntegrationName?: string;
}
export interface ModifyRedshiftIdcApplicationMessage {
  RedshiftIdcApplicationArn: string;
  IdentityNamespace?: string;
  IamRoleArn?: string;
  IdcDisplayName?: string;
  AuthorizedTokenIssuerList?: Array<AuthorizedTokenIssuer>;
  ServiceIntegrations?: Array<ServiceIntegrationsUnion>;
}
export interface ModifyRedshiftIdcApplicationResult {
  RedshiftIdcApplication?: RedshiftIdcApplication;
}
export interface ModifyScheduledActionMessage {
  ScheduledActionName: string;
  TargetAction?: ScheduledActionType;
  Schedule?: string;
  IamRole?: string;
  ScheduledActionDescription?: string;
  StartTime?: Date | string;
  EndTime?: Date | string;
  Enable?: boolean;
}
export interface ModifySnapshotCopyRetentionPeriodMessage {
  ClusterIdentifier: string;
  RetentionPeriod: number;
  Manual?: boolean;
}
export interface ModifySnapshotCopyRetentionPeriodResult {
  Cluster?: Cluster;
}
export interface ModifySnapshotScheduleMessage {
  ScheduleIdentifier: string;
  ScheduleDefinitions: Array<string>;
}
export interface ModifyUsageLimitMessage {
  UsageLimitId: string;
  Amount?: number;
  BreachAction?: UsageLimitBreachAction;
}
interface _NamespaceIdentifierUnion {
  ServerlessIdentifier?: ServerlessIdentifier;
  ProvisionedIdentifier?: ProvisionedIdentifier;
}

export type NamespaceIdentifierUnion =
  | (_NamespaceIdentifierUnion & { ServerlessIdentifier: ServerlessIdentifier })
  | (_NamespaceIdentifierUnion & {
      ProvisionedIdentifier: ProvisionedIdentifier;
    });
export type NamespaceRegistrationStatus = "REGISTERING" | "DEREGISTERING";
export interface NetworkInterface {
  NetworkInterfaceId?: string;
  SubnetId?: string;
  PrivateIpAddress?: string;
  AvailabilityZone?: string;
  Ipv6Address?: string;
}
export type NetworkInterfaceList = Array<NetworkInterface>;
export interface NodeConfigurationOption {
  NodeType?: string;
  NumberOfNodes?: number;
  EstimatedDiskUtilizationPercent?: number;
  Mode?: Mode;
}
export type NodeConfigurationOptionList = Array<NodeConfigurationOption>;
export interface NodeConfigurationOptionsFilter {
  Name?: NodeConfigurationOptionsFilterName;
  Operator?: OperatorType;
  Values?: Array<string>;
}
export type NodeConfigurationOptionsFilterList =
  Array<NodeConfigurationOptionsFilter>;
export type NodeConfigurationOptionsFilterName =
  | "NODE_TYPE"
  | "NUM_NODES"
  | "ESTIMATED_DISK_UTILIZATION_PERCENT"
  | "MODE";
export interface NodeConfigurationOptionsMessage {
  NodeConfigurationOptionList?: Array<NodeConfigurationOption>;
  Marker?: string;
}
export declare class NumberOfNodesPerClusterLimitExceededFault extends EffectData.TaggedError(
  "NumberOfNodesPerClusterLimitExceededFault",
)<{
  readonly message?: string;
}> {}
export declare class NumberOfNodesQuotaExceededFault extends EffectData.TaggedError(
  "NumberOfNodesQuotaExceededFault",
)<{
  readonly message?: string;
}> {}
export type OperatorType = "EQ" | "LT" | "GT" | "LE" | "GE" | "IN" | "BETWEEN";
export interface OrderableClusterOption {
  ClusterVersion?: string;
  ClusterType?: string;
  NodeType?: string;
  AvailabilityZones?: Array<AvailabilityZone>;
}
export type OrderableClusterOptionsList = Array<OrderableClusterOption>;
export interface OrderableClusterOptionsMessage {
  OrderableClusterOptions?: Array<OrderableClusterOption>;
  Marker?: string;
}
export interface Parameter {
  ParameterName?: string;
  ParameterValue?: string;
  Description?: string;
  Source?: string;
  DataType?: string;
  AllowedValues?: string;
  ApplyType?: ParameterApplyType;
  IsModifiable?: boolean;
  MinimumEngineVersion?: string;
}
export type ParameterApplyType = "static" | "dynamic";
export type ParameterGroupList = Array<ClusterParameterGroup>;
export type ParametersList = Array<Parameter>;
export type PartnerIntegrationAccountId = string;

export type PartnerIntegrationClusterIdentifier = string;

export type PartnerIntegrationDatabaseName = string;

export interface PartnerIntegrationInfo {
  DatabaseName?: string;
  PartnerName?: string;
  Status?: PartnerIntegrationStatus;
  StatusMessage?: string;
  CreatedAt?: Date | string;
  UpdatedAt?: Date | string;
}
export type PartnerIntegrationInfoList = Array<PartnerIntegrationInfo>;
export interface PartnerIntegrationInputMessage {
  AccountId: string;
  ClusterIdentifier: string;
  DatabaseName: string;
  PartnerName: string;
}
export interface PartnerIntegrationOutputMessage {
  DatabaseName?: string;
  PartnerName?: string;
}
export type PartnerIntegrationPartnerName = string;

export type PartnerIntegrationStatus =
  | "Active"
  | "Inactive"
  | "RuntimeFailure"
  | "ConnectionFailure";
export type PartnerIntegrationStatusMessage = string;

export declare class PartnerNotFoundFault extends EffectData.TaggedError(
  "PartnerNotFoundFault",
)<{
  readonly message?: string;
}> {}
export interface PauseClusterMessage {
  ClusterIdentifier: string;
}
export interface PauseClusterResult {
  Cluster?: Cluster;
}
export type PendingActionsList = Array<string>;
export interface PendingModifiedValues {
  MasterUserPassword?: string;
  NodeType?: string;
  NumberOfNodes?: number;
  ClusterType?: string;
  ClusterVersion?: string;
  AutomatedSnapshotRetentionPeriod?: number;
  ClusterIdentifier?: string;
  PubliclyAccessible?: boolean;
  EnhancedVpcRouting?: boolean;
  MaintenanceTrackName?: string;
  EncryptionType?: string;
}
export interface ProvisionedIdentifier {
  ClusterIdentifier: string;
}
export interface PurchaseReservedNodeOfferingMessage {
  ReservedNodeOfferingId: string;
  NodeCount?: number;
}
export interface PurchaseReservedNodeOfferingResult {
  ReservedNode?: ReservedNode;
}
export interface PutResourcePolicyMessage {
  ResourceArn: string;
  Policy: string;
}
export interface PutResourcePolicyResult {
  ResourcePolicy?: ResourcePolicy;
}
export interface ReadWriteAccess {
  Authorization: ServiceAuthorization;
}
export interface RebootClusterMessage {
  ClusterIdentifier: string;
}
export interface RebootClusterResult {
  Cluster?: Cluster;
}
export interface Recommendation {
  Id?: string;
  ClusterIdentifier?: string;
  NamespaceArn?: string;
  CreatedAt?: Date | string;
  RecommendationType?: string;
  Title?: string;
  Description?: string;
  Observation?: string;
  ImpactRanking?: ImpactRankingType;
  RecommendationText?: string;
  RecommendedActions?: Array<RecommendedAction>;
  ReferenceLinks?: Array<ReferenceLink>;
}
export type RecommendationList = Array<Recommendation>;
export interface RecommendedAction {
  Text?: string;
  Database?: string;
  Command?: string;
  Type?: RecommendedActionType;
}
export type RecommendedActionList = Array<RecommendedAction>;
export type RecommendedActionType = "SQL" | "CLI";
export interface RecurringCharge {
  RecurringChargeAmount?: number;
  RecurringChargeFrequency?: string;
}
export type RecurringChargeList = Array<RecurringCharge>;
export interface RedshiftIdcApplication {
  IdcInstanceArn?: string;
  RedshiftIdcApplicationName?: string;
  RedshiftIdcApplicationArn?: string;
  IdentityNamespace?: string;
  IdcDisplayName?: string;
  IamRoleArn?: string;
  IdcManagedApplicationArn?: string;
  IdcOnboardStatus?: string;
  AuthorizedTokenIssuerList?: Array<AuthorizedTokenIssuer>;
  ServiceIntegrations?: Array<ServiceIntegrationsUnion>;
}
export declare class RedshiftIdcApplicationAlreadyExistsFault extends EffectData.TaggedError(
  "RedshiftIdcApplicationAlreadyExistsFault",
)<{
  readonly message?: string;
}> {}
export type RedshiftIdcApplicationList = Array<RedshiftIdcApplication>;
export type RedshiftIdcApplicationName = string;

export declare class RedshiftIdcApplicationNotExistsFault extends EffectData.TaggedError(
  "RedshiftIdcApplicationNotExistsFault",
)<{
  readonly message?: string;
}> {}
export declare class RedshiftIdcApplicationQuotaExceededFault extends EffectData.TaggedError(
  "RedshiftIdcApplicationQuotaExceededFault",
)<{
  readonly message?: string;
}> {}
export interface ReferenceLink {
  Text?: string;
  Link?: string;
}
export type ReferenceLinkList = Array<ReferenceLink>;
export interface RegisterNamespaceInputMessage {
  NamespaceIdentifier: NamespaceIdentifierUnion;
  ConsumerIdentifiers: Array<string>;
}
export interface RegisterNamespaceOutputMessage {
  Status?: NamespaceRegistrationStatus;
}
export interface RejectDataShareMessage {
  DataShareArn: string;
}
export interface ReservedNode {
  ReservedNodeId?: string;
  ReservedNodeOfferingId?: string;
  NodeType?: string;
  StartTime?: Date | string;
  Duration?: number;
  FixedPrice?: number;
  UsagePrice?: number;
  CurrencyCode?: string;
  NodeCount?: number;
  State?: string;
  OfferingType?: string;
  RecurringCharges?: Array<RecurringCharge>;
  ReservedNodeOfferingType?: ReservedNodeOfferingType;
}
export declare class ReservedNodeAlreadyExistsFault extends EffectData.TaggedError(
  "ReservedNodeAlreadyExistsFault",
)<{
  readonly message?: string;
}> {}
export declare class ReservedNodeAlreadyMigratedFault extends EffectData.TaggedError(
  "ReservedNodeAlreadyMigratedFault",
)<{
  readonly message?: string;
}> {}
export interface ReservedNodeConfigurationOption {
  SourceReservedNode?: ReservedNode;
  TargetReservedNodeCount?: number;
  TargetReservedNodeOffering?: ReservedNodeOffering;
}
export type ReservedNodeConfigurationOptionList =
  Array<ReservedNodeConfigurationOption>;
export type ReservedNodeExchangeActionType =
  | "RESTORE_CLUSTER"
  | "RESIZE_CLUSTER";
export declare class ReservedNodeExchangeNotFoundFault extends EffectData.TaggedError(
  "ReservedNodeExchangeNotFoundFault",
)<{
  readonly message?: string;
}> {}
export interface ReservedNodeExchangeStatus {
  ReservedNodeExchangeRequestId?: string;
  Status?: ReservedNodeExchangeStatusType;
  RequestTime?: Date | string;
  SourceReservedNodeId?: string;
  SourceReservedNodeType?: string;
  SourceReservedNodeCount?: number;
  TargetReservedNodeOfferingId?: string;
  TargetReservedNodeType?: string;
  TargetReservedNodeCount?: number;
}
export type ReservedNodeExchangeStatusList = Array<ReservedNodeExchangeStatus>;
export type ReservedNodeExchangeStatusType =
  | "REQUESTED"
  | "PENDING"
  | "IN_PROGRESS"
  | "RETRYING"
  | "SUCCEEDED"
  | "FAILED";
export type ReservedNodeList = Array<ReservedNode>;
export declare class ReservedNodeNotFoundFault extends EffectData.TaggedError(
  "ReservedNodeNotFoundFault",
)<{
  readonly message?: string;
}> {}
export interface ReservedNodeOffering {
  ReservedNodeOfferingId?: string;
  NodeType?: string;
  Duration?: number;
  FixedPrice?: number;
  UsagePrice?: number;
  CurrencyCode?: string;
  OfferingType?: string;
  RecurringCharges?: Array<RecurringCharge>;
  ReservedNodeOfferingType?: ReservedNodeOfferingType;
}
export type ReservedNodeOfferingList = Array<ReservedNodeOffering>;
export declare class ReservedNodeOfferingNotFoundFault extends EffectData.TaggedError(
  "ReservedNodeOfferingNotFoundFault",
)<{
  readonly message?: string;
}> {}
export interface ReservedNodeOfferingsMessage {
  Marker?: string;
  ReservedNodeOfferings?: Array<ReservedNodeOffering>;
}
export type ReservedNodeOfferingType = "Regular" | "Upgradable";
export declare class ReservedNodeQuotaExceededFault extends EffectData.TaggedError(
  "ReservedNodeQuotaExceededFault",
)<{
  readonly message?: string;
}> {}
export interface ReservedNodesMessage {
  Marker?: string;
  ReservedNodes?: Array<ReservedNode>;
}
export interface ResetClusterParameterGroupMessage {
  ParameterGroupName: string;
  ResetAllParameters?: boolean;
  Parameters?: Array<Parameter>;
}
export interface ResizeClusterMessage {
  ClusterIdentifier: string;
  ClusterType?: string;
  NodeType?: string;
  NumberOfNodes?: number;
  Classic?: boolean;
  ReservedNodeId?: string;
  TargetReservedNodeOfferingId?: string;
}
export interface ResizeClusterResult {
  Cluster?: Cluster;
}
export interface ResizeInfo {
  ResizeType?: string;
  AllowCancelResize?: boolean;
}
export declare class ResizeNotFoundFault extends EffectData.TaggedError(
  "ResizeNotFoundFault",
)<{
  readonly message?: string;
}> {}
export interface ResizeProgressMessage {
  TargetNodeType?: string;
  TargetNumberOfNodes?: number;
  TargetClusterType?: string;
  Status?: string;
  ImportTablesCompleted?: Array<string>;
  ImportTablesInProgress?: Array<string>;
  ImportTablesNotStarted?: Array<string>;
  AvgResizeRateInMegaBytesPerSecond?: number;
  TotalResizeDataInMegaBytes?: number;
  ProgressInMegaBytes?: number;
  ElapsedTimeInSeconds?: number;
  EstimatedTimeToCompletionInSeconds?: number;
  ResizeType?: string;
  Message?: string;
  TargetEncryptionType?: string;
  DataTransferProgressPercent?: number;
}
export declare class ResourceNotFoundFault extends EffectData.TaggedError(
  "ResourceNotFoundFault",
)<{
  readonly message?: string;
}> {}
export interface ResourcePolicy {
  ResourceArn?: string;
  Policy?: string;
}
export type RestorableNodeTypeList = Array<string>;
export interface RestoreFromClusterSnapshotMessage {
  ClusterIdentifier: string;
  SnapshotIdentifier?: string;
  SnapshotArn?: string;
  SnapshotClusterIdentifier?: string;
  Port?: number;
  AvailabilityZone?: string;
  AllowVersionUpgrade?: boolean;
  ClusterSubnetGroupName?: string;
  PubliclyAccessible?: boolean;
  OwnerAccount?: string;
  HsmClientCertificateIdentifier?: string;
  HsmConfigurationIdentifier?: string;
  ElasticIp?: string;
  ClusterParameterGroupName?: string;
  ClusterSecurityGroups?: Array<string>;
  VpcSecurityGroupIds?: Array<string>;
  PreferredMaintenanceWindow?: string;
  AutomatedSnapshotRetentionPeriod?: number;
  ManualSnapshotRetentionPeriod?: number;
  KmsKeyId?: string;
  NodeType?: string;
  EnhancedVpcRouting?: boolean;
  AdditionalInfo?: string;
  IamRoles?: Array<string>;
  MaintenanceTrackName?: string;
  SnapshotScheduleIdentifier?: string;
  NumberOfNodes?: number;
  AvailabilityZoneRelocation?: boolean;
  AquaConfigurationStatus?: AquaConfigurationStatus;
  DefaultIamRoleArn?: string;
  ReservedNodeId?: string;
  TargetReservedNodeOfferingId?: string;
  Encrypted?: boolean;
  ManageMasterPassword?: boolean;
  MasterPasswordSecretKmsKeyId?: string;
  IpAddressType?: string;
  MultiAZ?: boolean;
}
export interface RestoreFromClusterSnapshotResult {
  Cluster?: Cluster;
}
export interface RestoreStatus {
  Status?: string;
  CurrentRestoreRateInMegaBytesPerSecond?: number;
  SnapshotSizeInMegaBytes?: number;
  ProgressInMegaBytes?: number;
  ElapsedTimeInSeconds?: number;
  EstimatedTimeToCompletionInSeconds?: number;
}
export interface RestoreTableFromClusterSnapshotMessage {
  ClusterIdentifier: string;
  SnapshotIdentifier: string;
  SourceDatabaseName: string;
  SourceSchemaName?: string;
  SourceTableName: string;
  TargetDatabaseName?: string;
  TargetSchemaName?: string;
  NewTableName: string;
  EnableCaseSensitiveIdentifier?: boolean;
}
export interface RestoreTableFromClusterSnapshotResult {
  TableRestoreStatus?: TableRestoreStatus;
}
export interface ResumeClusterMessage {
  ClusterIdentifier: string;
}
export interface ResumeClusterResult {
  Cluster?: Cluster;
}
export interface RevisionTarget {
  DatabaseRevision?: string;
  Description?: string;
  DatabaseRevisionReleaseDate?: Date | string;
}
export type RevisionTargetsList = Array<RevisionTarget>;
export interface RevokeClusterSecurityGroupIngressMessage {
  ClusterSecurityGroupName: string;
  CIDRIP?: string;
  EC2SecurityGroupName?: string;
  EC2SecurityGroupOwnerId?: string;
}
export interface RevokeClusterSecurityGroupIngressResult {
  ClusterSecurityGroup?: ClusterSecurityGroup;
}
export interface RevokeEndpointAccessMessage {
  ClusterIdentifier?: string;
  Account?: string;
  VpcIds?: Array<string>;
  Force?: boolean;
}
export interface RevokeSnapshotAccessMessage {
  SnapshotIdentifier?: string;
  SnapshotArn?: string;
  SnapshotClusterIdentifier?: string;
  AccountWithRestoreAccess: string;
}
export interface RevokeSnapshotAccessResult {
  Snapshot?: Snapshot;
}
export interface RotateEncryptionKeyMessage {
  ClusterIdentifier: string;
}
export interface RotateEncryptionKeyResult {
  Cluster?: Cluster;
}
interface _S3AccessGrantsScopeUnion {
  ReadWriteAccess?: ReadWriteAccess;
}

export type S3AccessGrantsScopeUnion = _S3AccessGrantsScopeUnion & {
  ReadWriteAccess: ReadWriteAccess;
};
export type S3AccessGrantsServiceIntegrations = Array<S3AccessGrantsScopeUnion>;
export type S3KeyPrefixValue = string;

export interface ScheduledAction {
  ScheduledActionName?: string;
  TargetAction?: ScheduledActionType;
  Schedule?: string;
  IamRole?: string;
  ScheduledActionDescription?: string;
  State?: ScheduledActionState;
  NextInvocations?: Array<Date | string>;
  StartTime?: Date | string;
  EndTime?: Date | string;
}
export declare class ScheduledActionAlreadyExistsFault extends EffectData.TaggedError(
  "ScheduledActionAlreadyExistsFault",
)<{
  readonly message?: string;
}> {}
export interface ScheduledActionFilter {
  Name: ScheduledActionFilterName;
  Values: Array<string>;
}
export type ScheduledActionFilterList = Array<ScheduledActionFilter>;
export type ScheduledActionFilterName = "CLUSTER_IDENTIFIER" | "IAM_ROLE";
export type ScheduledActionList = Array<ScheduledAction>;
export declare class ScheduledActionNotFoundFault extends EffectData.TaggedError(
  "ScheduledActionNotFoundFault",
)<{
  readonly message?: string;
}> {}
export declare class ScheduledActionQuotaExceededFault extends EffectData.TaggedError(
  "ScheduledActionQuotaExceededFault",
)<{
  readonly message?: string;
}> {}
export interface ScheduledActionsMessage {
  Marker?: string;
  ScheduledActions?: Array<ScheduledAction>;
}
export type ScheduledActionState = "ACTIVE" | "DISABLED";
export type ScheduledActionTimeList = Array<Date | string>;
export interface ScheduledActionType {
  ResizeCluster?: ResizeClusterMessage;
  PauseCluster?: PauseClusterMessage;
  ResumeCluster?: ResumeClusterMessage;
}
export declare class ScheduledActionTypeUnsupportedFault extends EffectData.TaggedError(
  "ScheduledActionTypeUnsupportedFault",
)<{
  readonly message?: string;
}> {}
export type ScheduledActionTypeValues =
  | "RESIZE_CLUSTER"
  | "PAUSE_CLUSTER"
  | "RESUME_CLUSTER";
export type ScheduleDefinitionList = Array<string>;
export declare class ScheduleDefinitionTypeUnsupportedFault extends EffectData.TaggedError(
  "ScheduleDefinitionTypeUnsupportedFault",
)<{
  readonly message?: string;
}> {}
export type ScheduledSnapshotTimeList = Array<Date | string>;
export type ScheduleState = "MODIFYING" | "ACTIVE" | "FAILED";
export interface SecondaryClusterInfo {
  AvailabilityZone?: string;
  ClusterNodes?: Array<ClusterNode>;
}
export type SensitiveString = string;

export interface ServerlessIdentifier {
  NamespaceIdentifier: string;
  WorkgroupIdentifier: string;
}
export type ServiceAuthorization = "ENABLED" | "DISABLED";
export type ServiceIntegrationList = Array<ServiceIntegrationsUnion>;
interface _ServiceIntegrationsUnion {
  LakeFormation?: Array<LakeFormationScopeUnion>;
  S3AccessGrants?: Array<S3AccessGrantsScopeUnion>;
}

export type ServiceIntegrationsUnion =
  | (_ServiceIntegrationsUnion & {
      LakeFormation: Array<LakeFormationScopeUnion>;
    })
  | (_ServiceIntegrationsUnion & {
      S3AccessGrants: Array<S3AccessGrantsScopeUnion>;
    });
export interface Snapshot {
  SnapshotIdentifier?: string;
  ClusterIdentifier?: string;
  SnapshotCreateTime?: Date | string;
  Status?: string;
  Port?: number;
  AvailabilityZone?: string;
  ClusterCreateTime?: Date | string;
  MasterUsername?: string;
  ClusterVersion?: string;
  EngineFullVersion?: string;
  SnapshotType?: string;
  NodeType?: string;
  NumberOfNodes?: number;
  DBName?: string;
  VpcId?: string;
  Encrypted?: boolean;
  KmsKeyId?: string;
  EncryptedWithHSM?: boolean;
  AccountsWithRestoreAccess?: Array<AccountWithRestoreAccess>;
  OwnerAccount?: string;
  TotalBackupSizeInMegaBytes?: number;
  ActualIncrementalBackupSizeInMegaBytes?: number;
  BackupProgressInMegaBytes?: number;
  CurrentBackupRateInMegaBytesPerSecond?: number;
  EstimatedSecondsToCompletion?: number;
  ElapsedTimeInSeconds?: number;
  SourceRegion?: string;
  Tags?: Array<Tag>;
  RestorableNodeTypes?: Array<string>;
  EnhancedVpcRouting?: boolean;
  MaintenanceTrackName?: string;
  ManualSnapshotRetentionPeriod?: number;
  ManualSnapshotRemainingDays?: number;
  SnapshotRetentionStartTime?: Date | string;
  MasterPasswordSecretArn?: string;
  MasterPasswordSecretKmsKeyId?: string;
  SnapshotArn?: string;
}
export type SnapshotAttributeToSortBy =
  | "SOURCE_TYPE"
  | "TOTAL_SIZE"
  | "CREATE_TIME";
export declare class SnapshotCopyAlreadyDisabledFault extends EffectData.TaggedError(
  "SnapshotCopyAlreadyDisabledFault",
)<{
  readonly message?: string;
}> {}
export declare class SnapshotCopyAlreadyEnabledFault extends EffectData.TaggedError(
  "SnapshotCopyAlreadyEnabledFault",
)<{
  readonly message?: string;
}> {}
export declare class SnapshotCopyDisabledFault extends EffectData.TaggedError(
  "SnapshotCopyDisabledFault",
)<{
  readonly message?: string;
}> {}
export interface SnapshotCopyGrant {
  SnapshotCopyGrantName?: string;
  KmsKeyId?: string;
  Tags?: Array<Tag>;
}
export declare class SnapshotCopyGrantAlreadyExistsFault extends EffectData.TaggedError(
  "SnapshotCopyGrantAlreadyExistsFault",
)<{
  readonly message?: string;
}> {}
export type SnapshotCopyGrantList = Array<SnapshotCopyGrant>;
export interface SnapshotCopyGrantMessage {
  Marker?: string;
  SnapshotCopyGrants?: Array<SnapshotCopyGrant>;
}
export declare class SnapshotCopyGrantNotFoundFault extends EffectData.TaggedError(
  "SnapshotCopyGrantNotFoundFault",
)<{
  readonly message?: string;
}> {}
export declare class SnapshotCopyGrantQuotaExceededFault extends EffectData.TaggedError(
  "SnapshotCopyGrantQuotaExceededFault",
)<{
  readonly message?: string;
}> {}
export interface SnapshotErrorMessage {
  SnapshotIdentifier?: string;
  SnapshotClusterIdentifier?: string;
  FailureCode?: string;
  FailureReason?: string;
}
export type SnapshotIdentifierList = Array<string>;
export type SnapshotList = Array<Snapshot>;
export interface SnapshotMessage {
  Marker?: string;
  Snapshots?: Array<Snapshot>;
}
export interface SnapshotSchedule {
  ScheduleDefinitions?: Array<string>;
  ScheduleIdentifier?: string;
  ScheduleDescription?: string;
  Tags?: Array<Tag>;
  NextInvocations?: Array<Date | string>;
  AssociatedClusterCount?: number;
  AssociatedClusters?: Array<ClusterAssociatedToSchedule>;
}
export declare class SnapshotScheduleAlreadyExistsFault extends EffectData.TaggedError(
  "SnapshotScheduleAlreadyExistsFault",
)<{
  readonly message?: string;
}> {}
export type SnapshotScheduleList = Array<SnapshotSchedule>;
export declare class SnapshotScheduleNotFoundFault extends EffectData.TaggedError(
  "SnapshotScheduleNotFoundFault",
)<{
  readonly message?: string;
}> {}
export declare class SnapshotScheduleQuotaExceededFault extends EffectData.TaggedError(
  "SnapshotScheduleQuotaExceededFault",
)<{
  readonly message?: string;
}> {}
export declare class SnapshotScheduleUpdateInProgressFault extends EffectData.TaggedError(
  "SnapshotScheduleUpdateInProgressFault",
)<{
  readonly message?: string;
}> {}
export interface SnapshotSortingEntity {
  Attribute: SnapshotAttributeToSortBy;
  SortOrder?: SortByOrder;
}
export type SnapshotSortingEntityList = Array<SnapshotSortingEntity>;
export declare class SNSInvalidTopicFault extends EffectData.TaggedError(
  "SNSInvalidTopicFault",
)<{
  readonly message?: string;
}> {}
export declare class SNSNoAuthorizationFault extends EffectData.TaggedError(
  "SNSNoAuthorizationFault",
)<{
  readonly message?: string;
}> {}
export declare class SNSTopicArnNotFoundFault extends EffectData.TaggedError(
  "SNSTopicArnNotFoundFault",
)<{
  readonly message?: string;
}> {}
export type SortByOrder = "ASCENDING" | "DESCENDING";
export type SourceArn = string;

export type SourceIdsList = Array<string>;
export declare class SourceNotFoundFault extends EffectData.TaggedError(
  "SourceNotFoundFault",
)<{
  readonly message?: string;
}> {}
export type SourceType =
  | "cluster"
  | "cluster_parameter_group"
  | "cluster_security_group"
  | "cluster_snapshot"
  | "scheduled_action";
export type RedshiftString = string;

export interface Subnet {
  SubnetIdentifier?: string;
  SubnetAvailabilityZone?: AvailabilityZone;
  SubnetStatus?: string;
}
export declare class SubnetAlreadyInUse extends EffectData.TaggedError(
  "SubnetAlreadyInUse",
)<{
  readonly message?: string;
}> {}
export type SubnetIdentifierList = Array<string>;
export type SubnetList = Array<Subnet>;
export declare class SubscriptionAlreadyExistFault extends EffectData.TaggedError(
  "SubscriptionAlreadyExistFault",
)<{
  readonly message?: string;
}> {}
export declare class SubscriptionCategoryNotFoundFault extends EffectData.TaggedError(
  "SubscriptionCategoryNotFoundFault",
)<{
  readonly message?: string;
}> {}
export declare class SubscriptionEventIdNotFoundFault extends EffectData.TaggedError(
  "SubscriptionEventIdNotFoundFault",
)<{
  readonly message?: string;
}> {}
export declare class SubscriptionNotFoundFault extends EffectData.TaggedError(
  "SubscriptionNotFoundFault",
)<{
  readonly message?: string;
}> {}
export declare class SubscriptionSeverityNotFoundFault extends EffectData.TaggedError(
  "SubscriptionSeverityNotFoundFault",
)<{
  readonly message?: string;
}> {}
export interface SupportedOperation {
  OperationName?: string;
}
export type SupportedOperationList = Array<SupportedOperation>;
export interface SupportedPlatform {
  Name?: string;
}
export type SupportedPlatformsList = Array<SupportedPlatform>;
export declare class TableLimitExceededFault extends EffectData.TaggedError(
  "TableLimitExceededFault",
)<{
  readonly message?: string;
}> {}
export declare class TableRestoreNotFoundFault extends EffectData.TaggedError(
  "TableRestoreNotFoundFault",
)<{
  readonly message?: string;
}> {}
export interface TableRestoreStatus {
  TableRestoreRequestId?: string;
  Status?: TableRestoreStatusType;
  Message?: string;
  RequestTime?: Date | string;
  ProgressInMegaBytes?: number;
  TotalDataInMegaBytes?: number;
  ClusterIdentifier?: string;
  SnapshotIdentifier?: string;
  SourceDatabaseName?: string;
  SourceSchemaName?: string;
  SourceTableName?: string;
  TargetDatabaseName?: string;
  TargetSchemaName?: string;
  NewTableName?: string;
}
export type TableRestoreStatusList = Array<TableRestoreStatus>;
export interface TableRestoreStatusMessage {
  TableRestoreStatusDetails?: Array<TableRestoreStatus>;
  Marker?: string;
}
export type TableRestoreStatusType =
  | "PENDING"
  | "IN_PROGRESS"
  | "SUCCEEDED"
  | "FAILED"
  | "CANCELED";
export interface Tag {
  Key?: string;
  Value?: string;
}
export interface TaggedResource {
  Tag?: Tag;
  ResourceName?: string;
  ResourceType?: string;
}
export type TaggedResourceList = Array<TaggedResource>;
export interface TaggedResourceListMessage {
  TaggedResources?: Array<TaggedResource>;
  Marker?: string;
}
export type TagKeyList = Array<string>;
export declare class TagLimitExceededFault extends EffectData.TaggedError(
  "TagLimitExceededFault",
)<{
  readonly message?: string;
}> {}
export type TagList = Array<Tag>;
export type TagValueList = Array<string>;
export type TargetArn = string;

export type TrackList = Array<MaintenanceTrack>;
export interface TrackListMessage {
  MaintenanceTracks?: Array<MaintenanceTrack>;
  Marker?: string;
}
export type TStamp = Date | string;

export declare class UnauthorizedOperation extends EffectData.TaggedError(
  "UnauthorizedOperation",
)<{
  readonly message?: string;
}> {}
export declare class UnauthorizedPartnerIntegrationFault extends EffectData.TaggedError(
  "UnauthorizedPartnerIntegrationFault",
)<{
  readonly message?: string;
}> {}
export declare class UnknownSnapshotCopyRegionFault extends EffectData.TaggedError(
  "UnknownSnapshotCopyRegionFault",
)<{
  readonly message?: string;
}> {}
export declare class UnsupportedOperationFault extends EffectData.TaggedError(
  "UnsupportedOperationFault",
)<{
  readonly message?: string;
}> {}
export declare class UnsupportedOptionFault extends EffectData.TaggedError(
  "UnsupportedOptionFault",
)<{
  readonly message?: string;
}> {}
export interface UpdatePartnerStatusInputMessage {
  AccountId: string;
  ClusterIdentifier: string;
  DatabaseName: string;
  PartnerName: string;
  Status: PartnerIntegrationStatus;
  StatusMessage?: string;
}
export interface UpdateTarget {
  MaintenanceTrackName?: string;
  DatabaseVersion?: string;
  SupportedOperations?: Array<SupportedOperation>;
}
export interface UsageLimit {
  UsageLimitId?: string;
  ClusterIdentifier?: string;
  FeatureType?: UsageLimitFeatureType;
  LimitType?: UsageLimitLimitType;
  Amount?: number;
  Period?: UsageLimitPeriod;
  BreachAction?: UsageLimitBreachAction;
  Tags?: Array<Tag>;
}
export declare class UsageLimitAlreadyExistsFault extends EffectData.TaggedError(
  "UsageLimitAlreadyExistsFault",
)<{
  readonly message?: string;
}> {}
export type UsageLimitBreachAction = "LOG" | "EMIT_METRIC" | "DISABLE";
export type UsageLimitFeatureType =
  | "SPECTRUM"
  | "CONCURRENCY_SCALING"
  | "CROSS_REGION_DATASHARING";
export type UsageLimitLimitType = "TIME" | "DATA_SCANNED";
export interface UsageLimitList {
  UsageLimits?: Array<UsageLimit>;
  Marker?: string;
}
export declare class UsageLimitNotFoundFault extends EffectData.TaggedError(
  "UsageLimitNotFoundFault",
)<{
  readonly message?: string;
}> {}
export type UsageLimitPeriod = "DAILY" | "WEEKLY" | "MONTHLY";
export type UsageLimits = Array<UsageLimit>;
export type ValueStringList = Array<string>;
export interface VpcEndpoint {
  VpcEndpointId?: string;
  VpcId?: string;
  NetworkInterfaces?: Array<NetworkInterface>;
}
export type VpcEndpointsList = Array<VpcEndpoint>;
export type VpcIdentifierList = Array<string>;
export type VpcSecurityGroupIdList = Array<string>;
export interface VpcSecurityGroupMembership {
  VpcSecurityGroupId?: string;
  Status?: string;
}
export type VpcSecurityGroupMembershipList = Array<VpcSecurityGroupMembership>;
export type ZeroETLIntegrationStatus =
  | "CREATING"
  | "ACTIVE"
  | "MODIFYING"
  | "FAILED"
  | "DELETING"
  | "SYNCING"
  | "NEEDS_ATTENTION";
export declare namespace AcceptReservedNodeExchange {
  export type Input = AcceptReservedNodeExchangeInputMessage;
  export type Output = AcceptReservedNodeExchangeOutputMessage;
  export type Error =
    | DependentServiceUnavailableFault
    | InvalidReservedNodeStateFault
    | ReservedNodeAlreadyExistsFault
    | ReservedNodeAlreadyMigratedFault
    | ReservedNodeNotFoundFault
    | ReservedNodeOfferingNotFoundFault
    | UnsupportedOperationFault
    | CommonAwsError;
}

export declare namespace AddPartner {
  export type Input = PartnerIntegrationInputMessage;
  export type Output = PartnerIntegrationOutputMessage;
  export type Error =
    | ClusterNotFoundFault
    | PartnerNotFoundFault
    | UnauthorizedPartnerIntegrationFault
    | UnsupportedOperationFault
    | CommonAwsError;
}

export declare namespace AssociateDataShareConsumer {
  export type Input = AssociateDataShareConsumerMessage;
  export type Output = DataShare;
  export type Error =
    | InvalidDataShareFault
    | InvalidNamespaceFault
    | CommonAwsError;
}

export declare namespace AuthorizeClusterSecurityGroupIngress {
  export type Input = AuthorizeClusterSecurityGroupIngressMessage;
  export type Output = AuthorizeClusterSecurityGroupIngressResult;
  export type Error =
    | AuthorizationAlreadyExistsFault
    | AuthorizationQuotaExceededFault
    | ClusterSecurityGroupNotFoundFault
    | InvalidClusterSecurityGroupStateFault
    | CommonAwsError;
}

export declare namespace AuthorizeDataShare {
  export type Input = AuthorizeDataShareMessage;
  export type Output = DataShare;
  export type Error = InvalidDataShareFault | CommonAwsError;
}

export declare namespace AuthorizeEndpointAccess {
  export type Input = AuthorizeEndpointAccessMessage;
  export type Output = EndpointAuthorization;
  export type Error =
    | ClusterNotFoundFault
    | EndpointAuthorizationAlreadyExistsFault
    | EndpointAuthorizationsPerClusterLimitExceededFault
    | InvalidAuthorizationStateFault
    | InvalidClusterStateFault
    | UnsupportedOperationFault
    | CommonAwsError;
}

export declare namespace AuthorizeSnapshotAccess {
  export type Input = AuthorizeSnapshotAccessMessage;
  export type Output = AuthorizeSnapshotAccessResult;
  export type Error =
    | AuthorizationAlreadyExistsFault
    | AuthorizationQuotaExceededFault
    | ClusterSnapshotNotFoundFault
    | DependentServiceRequestThrottlingFault
    | InvalidClusterSnapshotStateFault
    | LimitExceededFault
    | UnsupportedOperationFault
    | CommonAwsError;
}

export declare namespace BatchDeleteClusterSnapshots {
  export type Input = BatchDeleteClusterSnapshotsRequest;
  export type Output = BatchDeleteClusterSnapshotsResult;
  export type Error = BatchDeleteRequestSizeExceededFault | CommonAwsError;
}

export declare namespace BatchModifyClusterSnapshots {
  export type Input = BatchModifyClusterSnapshotsMessage;
  export type Output = BatchModifyClusterSnapshotsOutputMessage;
  export type Error =
    | BatchModifyClusterSnapshotsLimitExceededFault
    | InvalidRetentionPeriodFault
    | CommonAwsError;
}

export declare namespace CancelResize {
  export type Input = CancelResizeMessage;
  export type Output = ResizeProgressMessage;
  export type Error =
    | ClusterNotFoundFault
    | InvalidClusterStateFault
    | ResizeNotFoundFault
    | UnsupportedOperationFault
    | CommonAwsError;
}

export declare namespace CopyClusterSnapshot {
  export type Input = CopyClusterSnapshotMessage;
  export type Output = CopyClusterSnapshotResult;
  export type Error =
    | ClusterNotFoundFault
    | ClusterSnapshotAlreadyExistsFault
    | ClusterSnapshotNotFoundFault
    | ClusterSnapshotQuotaExceededFault
    | InvalidClusterSnapshotStateFault
    | InvalidRetentionPeriodFault
    | CommonAwsError;
}

export declare namespace CreateAuthenticationProfile {
  export type Input = CreateAuthenticationProfileMessage;
  export type Output = CreateAuthenticationProfileResult;
  export type Error =
    | AuthenticationProfileAlreadyExistsFault
    | AuthenticationProfileQuotaExceededFault
    | InvalidAuthenticationProfileRequestFault
    | CommonAwsError;
}

export declare namespace CreateCluster {
  export type Input = CreateClusterMessage;
  export type Output = CreateClusterResult;
  export type Error =
    | ClusterAlreadyExistsFault
    | ClusterParameterGroupNotFoundFault
    | ClusterQuotaExceededFault
    | ClusterSecurityGroupNotFoundFault
    | ClusterSubnetGroupNotFoundFault
    | DependentServiceRequestThrottlingFault
    | HsmClientCertificateNotFoundFault
    | HsmConfigurationNotFoundFault
    | InsufficientClusterCapacityFault
    | InvalidClusterSubnetGroupStateFault
    | InvalidClusterTrackFault
    | InvalidElasticIpFault
    | InvalidRetentionPeriodFault
    | InvalidSubnet
    | InvalidTagFault
    | InvalidVPCNetworkStateFault
    | Ipv6CidrBlockNotFoundFault
    | LimitExceededFault
    | NumberOfNodesPerClusterLimitExceededFault
    | NumberOfNodesQuotaExceededFault
    | RedshiftIdcApplicationNotExistsFault
    | SnapshotScheduleNotFoundFault
    | TagLimitExceededFault
    | UnauthorizedOperation
    | UnsupportedOperationFault
    | CommonAwsError;
}

export declare namespace CreateClusterParameterGroup {
  export type Input = CreateClusterParameterGroupMessage;
  export type Output = CreateClusterParameterGroupResult;
  export type Error =
    | ClusterParameterGroupAlreadyExistsFault
    | ClusterParameterGroupQuotaExceededFault
    | InvalidTagFault
    | TagLimitExceededFault
    | CommonAwsError;
}

export declare namespace CreateClusterSecurityGroup {
  export type Input = CreateClusterSecurityGroupMessage;
  export type Output = CreateClusterSecurityGroupResult;
  export type Error =
    | ClusterSecurityGroupAlreadyExistsFault
    | ClusterSecurityGroupQuotaExceededFault
    | InvalidTagFault
    | TagLimitExceededFault
    | CommonAwsError;
}

export declare namespace CreateClusterSnapshot {
  export type Input = CreateClusterSnapshotMessage;
  export type Output = CreateClusterSnapshotResult;
  export type Error =
    | ClusterNotFoundFault
    | ClusterSnapshotAlreadyExistsFault
    | ClusterSnapshotQuotaExceededFault
    | InvalidClusterStateFault
    | InvalidRetentionPeriodFault
    | InvalidTagFault
    | TagLimitExceededFault
    | CommonAwsError;
}

export declare namespace CreateClusterSubnetGroup {
  export type Input = CreateClusterSubnetGroupMessage;
  export type Output = CreateClusterSubnetGroupResult;
  export type Error =
    | ClusterSubnetGroupAlreadyExistsFault
    | ClusterSubnetGroupQuotaExceededFault
    | ClusterSubnetQuotaExceededFault
    | DependentServiceRequestThrottlingFault
    | InvalidSubnet
    | InvalidTagFault
    | TagLimitExceededFault
    | UnauthorizedOperation
    | CommonAwsError;
}

export declare namespace CreateCustomDomainAssociation {
  export type Input = CreateCustomDomainAssociationMessage;
  export type Output = CreateCustomDomainAssociationResult;
  export type Error =
    | ClusterNotFoundFault
    | CustomCnameAssociationFault
    | UnsupportedOperationFault
    | CommonAwsError;
}

export declare namespace CreateEndpointAccess {
  export type Input = CreateEndpointAccessMessage;
  export type Output = EndpointAccess;
  export type Error =
    | AccessToClusterDeniedFault
    | ClusterNotFoundFault
    | ClusterSubnetGroupNotFoundFault
    | EndpointAlreadyExistsFault
    | EndpointsPerAuthorizationLimitExceededFault
    | EndpointsPerClusterLimitExceededFault
    | InvalidClusterSecurityGroupStateFault
    | InvalidClusterStateFault
    | UnauthorizedOperation
    | UnsupportedOperationFault
    | CommonAwsError;
}

export declare namespace CreateEventSubscription {
  export type Input = CreateEventSubscriptionMessage;
  export type Output = CreateEventSubscriptionResult;
  export type Error =
    | EventSubscriptionQuotaExceededFault
    | InvalidTagFault
    | SNSInvalidTopicFault
    | SNSNoAuthorizationFault
    | SNSTopicArnNotFoundFault
    | SourceNotFoundFault
    | SubscriptionAlreadyExistFault
    | SubscriptionCategoryNotFoundFault
    | SubscriptionEventIdNotFoundFault
    | SubscriptionSeverityNotFoundFault
    | TagLimitExceededFault
    | CommonAwsError;
}

export declare namespace CreateHsmClientCertificate {
  export type Input = CreateHsmClientCertificateMessage;
  export type Output = CreateHsmClientCertificateResult;
  export type Error =
    | HsmClientCertificateAlreadyExistsFault
    | HsmClientCertificateQuotaExceededFault
    | InvalidTagFault
    | TagLimitExceededFault
    | CommonAwsError;
}

export declare namespace CreateHsmConfiguration {
  export type Input = CreateHsmConfigurationMessage;
  export type Output = CreateHsmConfigurationResult;
  export type Error =
    | HsmConfigurationAlreadyExistsFault
    | HsmConfigurationQuotaExceededFault
    | InvalidTagFault
    | TagLimitExceededFault
    | CommonAwsError;
}

export declare namespace CreateIntegration {
  export type Input = CreateIntegrationMessage;
  export type Output = Integration;
  export type Error =
    | IntegrationAlreadyExistsFault
    | IntegrationConflictOperationFault
    | IntegrationQuotaExceededFault
    | IntegrationSourceNotFoundFault
    | IntegrationTargetNotFoundFault
    | InvalidClusterStateFault
    | InvalidTagFault
    | TagLimitExceededFault
    | UnsupportedOperationFault
    | CommonAwsError;
}

export declare namespace CreateRedshiftIdcApplication {
  export type Input = CreateRedshiftIdcApplicationMessage;
  export type Output = CreateRedshiftIdcApplicationResult;
  export type Error =
    | DependentServiceAccessDeniedFault
    | DependentServiceUnavailableFault
    | RedshiftIdcApplicationAlreadyExistsFault
    | RedshiftIdcApplicationQuotaExceededFault
    | UnsupportedOperationFault
    | CommonAwsError;
}

export declare namespace CreateScheduledAction {
  export type Input = CreateScheduledActionMessage;
  export type Output = ScheduledAction;
  export type Error =
    | ClusterNotFoundFault
    | InvalidScheduledActionFault
    | InvalidScheduleFault
    | ScheduledActionAlreadyExistsFault
    | ScheduledActionQuotaExceededFault
    | ScheduledActionTypeUnsupportedFault
    | UnauthorizedOperation
    | UnsupportedOperationFault
    | CommonAwsError;
}

export declare namespace CreateSnapshotCopyGrant {
  export type Input = CreateSnapshotCopyGrantMessage;
  export type Output = CreateSnapshotCopyGrantResult;
  export type Error =
    | DependentServiceRequestThrottlingFault
    | InvalidTagFault
    | LimitExceededFault
    | SnapshotCopyGrantAlreadyExistsFault
    | SnapshotCopyGrantQuotaExceededFault
    | TagLimitExceededFault
    | CommonAwsError;
}

export declare namespace CreateSnapshotSchedule {
  export type Input = CreateSnapshotScheduleMessage;
  export type Output = SnapshotSchedule;
  export type Error =
    | InvalidScheduleFault
    | InvalidTagFault
    | ScheduleDefinitionTypeUnsupportedFault
    | SnapshotScheduleAlreadyExistsFault
    | SnapshotScheduleQuotaExceededFault
    | TagLimitExceededFault
    | CommonAwsError;
}

export declare namespace CreateTags {
  export type Input = CreateTagsMessage;
  export type Output = {};
  export type Error =
    | InvalidClusterStateFault
    | InvalidTagFault
    | ResourceNotFoundFault
    | TagLimitExceededFault
    | CommonAwsError;
}

export declare namespace CreateUsageLimit {
  export type Input = CreateUsageLimitMessage;
  export type Output = UsageLimit;
  export type Error =
    | ClusterNotFoundFault
    | InvalidClusterStateFault
    | InvalidUsageLimitFault
    | LimitExceededFault
    | TagLimitExceededFault
    | UnsupportedOperationFault
    | UsageLimitAlreadyExistsFault
    | CommonAwsError;
}

export declare namespace DeauthorizeDataShare {
  export type Input = DeauthorizeDataShareMessage;
  export type Output = DataShare;
  export type Error = InvalidDataShareFault | CommonAwsError;
}

export declare namespace DeleteAuthenticationProfile {
  export type Input = DeleteAuthenticationProfileMessage;
  export type Output = DeleteAuthenticationProfileResult;
  export type Error =
    | AuthenticationProfileNotFoundFault
    | InvalidAuthenticationProfileRequestFault
    | CommonAwsError;
}

export declare namespace DeleteCluster {
  export type Input = DeleteClusterMessage;
  export type Output = DeleteClusterResult;
  export type Error =
    | ClusterNotFoundFault
    | ClusterSnapshotAlreadyExistsFault
    | ClusterSnapshotQuotaExceededFault
    | InvalidClusterStateFault
    | InvalidRetentionPeriodFault
    | CommonAwsError;
}

export declare namespace DeleteClusterParameterGroup {
  export type Input = DeleteClusterParameterGroupMessage;
  export type Output = {};
  export type Error =
    | ClusterParameterGroupNotFoundFault
    | InvalidClusterParameterGroupStateFault
    | CommonAwsError;
}

export declare namespace DeleteClusterSecurityGroup {
  export type Input = DeleteClusterSecurityGroupMessage;
  export type Output = {};
  export type Error =
    | ClusterSecurityGroupNotFoundFault
    | InvalidClusterSecurityGroupStateFault
    | CommonAwsError;
}

export declare namespace DeleteClusterSnapshot {
  export type Input = DeleteClusterSnapshotMessage;
  export type Output = DeleteClusterSnapshotResult;
  export type Error =
    | ClusterSnapshotNotFoundFault
    | InvalidClusterSnapshotStateFault
    | CommonAwsError;
}

export declare namespace DeleteClusterSubnetGroup {
  export type Input = DeleteClusterSubnetGroupMessage;
  export type Output = {};
  export type Error =
    | ClusterSubnetGroupNotFoundFault
    | InvalidClusterSubnetGroupStateFault
    | InvalidClusterSubnetStateFault
    | CommonAwsError;
}

export declare namespace DeleteCustomDomainAssociation {
  export type Input = DeleteCustomDomainAssociationMessage;
  export type Output = {};
  export type Error =
    | ClusterNotFoundFault
    | CustomCnameAssociationFault
    | CustomDomainAssociationNotFoundFault
    | UnsupportedOperationFault
    | CommonAwsError;
}

export declare namespace DeleteEndpointAccess {
  export type Input = DeleteEndpointAccessMessage;
  export type Output = EndpointAccess;
  export type Error =
    | ClusterNotFoundFault
    | EndpointNotFoundFault
    | InvalidClusterSecurityGroupStateFault
    | InvalidClusterStateFault
    | InvalidEndpointStateFault
    | CommonAwsError;
}

export declare namespace DeleteEventSubscription {
  export type Input = DeleteEventSubscriptionMessage;
  export type Output = {};
  export type Error =
    | InvalidSubscriptionStateFault
    | SubscriptionNotFoundFault
    | CommonAwsError;
}

export declare namespace DeleteHsmClientCertificate {
  export type Input = DeleteHsmClientCertificateMessage;
  export type Output = {};
  export type Error =
    | HsmClientCertificateNotFoundFault
    | InvalidHsmClientCertificateStateFault
    | CommonAwsError;
}

export declare namespace DeleteHsmConfiguration {
  export type Input = DeleteHsmConfigurationMessage;
  export type Output = {};
  export type Error =
    | HsmConfigurationNotFoundFault
    | InvalidHsmConfigurationStateFault
    | CommonAwsError;
}

export declare namespace DeleteIntegration {
  export type Input = DeleteIntegrationMessage;
  export type Output = Integration;
  export type Error =
    | IntegrationConflictOperationFault
    | IntegrationConflictStateFault
    | IntegrationNotFoundFault
    | UnsupportedOperationFault
    | CommonAwsError;
}

export declare namespace DeletePartner {
  export type Input = PartnerIntegrationInputMessage;
  export type Output = PartnerIntegrationOutputMessage;
  export type Error =
    | ClusterNotFoundFault
    | PartnerNotFoundFault
    | UnauthorizedPartnerIntegrationFault
    | UnsupportedOperationFault
    | CommonAwsError;
}

export declare namespace DeleteRedshiftIdcApplication {
  export type Input = DeleteRedshiftIdcApplicationMessage;
  export type Output = {};
  export type Error =
    | DependentServiceAccessDeniedFault
    | DependentServiceUnavailableFault
    | RedshiftIdcApplicationNotExistsFault
    | UnsupportedOperationFault
    | CommonAwsError;
}

export declare namespace DeleteResourcePolicy {
  export type Input = DeleteResourcePolicyMessage;
  export type Output = {};
  export type Error =
    | ResourceNotFoundFault
    | UnsupportedOperationFault
    | CommonAwsError;
}

export declare namespace DeleteScheduledAction {
  export type Input = DeleteScheduledActionMessage;
  export type Output = {};
  export type Error =
    | ScheduledActionNotFoundFault
    | UnauthorizedOperation
    | CommonAwsError;
}

export declare namespace DeleteSnapshotCopyGrant {
  export type Input = DeleteSnapshotCopyGrantMessage;
  export type Output = {};
  export type Error =
    | InvalidSnapshotCopyGrantStateFault
    | SnapshotCopyGrantNotFoundFault
    | CommonAwsError;
}

export declare namespace DeleteSnapshotSchedule {
  export type Input = DeleteSnapshotScheduleMessage;
  export type Output = {};
  export type Error =
    | InvalidClusterSnapshotScheduleStateFault
    | SnapshotScheduleNotFoundFault
    | CommonAwsError;
}

export declare namespace DeleteTags {
  export type Input = DeleteTagsMessage;
  export type Output = {};
  export type Error = InvalidTagFault | ResourceNotFoundFault | CommonAwsError;
}

export declare namespace DeleteUsageLimit {
  export type Input = DeleteUsageLimitMessage;
  export type Output = {};
  export type Error =
    | UnsupportedOperationFault
    | UsageLimitNotFoundFault
    | CommonAwsError;
}

export declare namespace DeregisterNamespace {
  export type Input = DeregisterNamespaceInputMessage;
  export type Output = DeregisterNamespaceOutputMessage;
  export type Error =
    | ClusterNotFoundFault
    | InvalidClusterStateFault
    | InvalidNamespaceFault
    | CommonAwsError;
}

export declare namespace DescribeAccountAttributes {
  export type Input = DescribeAccountAttributesMessage;
  export type Output = AccountAttributeList;
  export type Error = CommonAwsError;
}

export declare namespace DescribeAuthenticationProfiles {
  export type Input = DescribeAuthenticationProfilesMessage;
  export type Output = DescribeAuthenticationProfilesResult;
  export type Error =
    | AuthenticationProfileNotFoundFault
    | InvalidAuthenticationProfileRequestFault
    | CommonAwsError;
}

export declare namespace DescribeClusterDbRevisions {
  export type Input = DescribeClusterDbRevisionsMessage;
  export type Output = ClusterDbRevisionsMessage;
  export type Error =
    | ClusterNotFoundFault
    | InvalidClusterStateFault
    | CommonAwsError;
}

export declare namespace DescribeClusterParameterGroups {
  export type Input = DescribeClusterParameterGroupsMessage;
  export type Output = ClusterParameterGroupsMessage;
  export type Error =
    | ClusterParameterGroupNotFoundFault
    | InvalidTagFault
    | CommonAwsError;
}

export declare namespace DescribeClusterParameters {
  export type Input = DescribeClusterParametersMessage;
  export type Output = ClusterParameterGroupDetails;
  export type Error = ClusterParameterGroupNotFoundFault | CommonAwsError;
}

export declare namespace DescribeClusters {
  export type Input = DescribeClustersMessage;
  export type Output = ClustersMessage;
  export type Error = ClusterNotFoundFault | InvalidTagFault | CommonAwsError;
}

export declare namespace DescribeClusterSecurityGroups {
  export type Input = DescribeClusterSecurityGroupsMessage;
  export type Output = ClusterSecurityGroupMessage;
  export type Error =
    | ClusterSecurityGroupNotFoundFault
    | InvalidTagFault
    | CommonAwsError;
}

export declare namespace DescribeClusterSnapshots {
  export type Input = DescribeClusterSnapshotsMessage;
  export type Output = SnapshotMessage;
  export type Error =
    | ClusterNotFoundFault
    | ClusterSnapshotNotFoundFault
    | InvalidTagFault
    | UnsupportedOperationFault
    | CommonAwsError;
}

export declare namespace DescribeClusterSubnetGroups {
  export type Input = DescribeClusterSubnetGroupsMessage;
  export type Output = ClusterSubnetGroupMessage;
  export type Error =
    | ClusterSubnetGroupNotFoundFault
    | InvalidTagFault
    | CommonAwsError;
}

export declare namespace DescribeClusterTracks {
  export type Input = DescribeClusterTracksMessage;
  export type Output = TrackListMessage;
  export type Error =
    | InvalidClusterTrackFault
    | UnauthorizedOperation
    | CommonAwsError;
}

export declare namespace DescribeClusterVersions {
  export type Input = DescribeClusterVersionsMessage;
  export type Output = ClusterVersionsMessage;
  export type Error = CommonAwsError;
}

export declare namespace DescribeCustomDomainAssociations {
  export type Input = DescribeCustomDomainAssociationsMessage;
  export type Output = CustomDomainAssociationsMessage;
  export type Error =
    | CustomDomainAssociationNotFoundFault
    | UnsupportedOperationFault
    | CommonAwsError;
}

export declare namespace DescribeDataShares {
  export type Input = DescribeDataSharesMessage;
  export type Output = DescribeDataSharesResult;
  export type Error = InvalidDataShareFault | CommonAwsError;
}

export declare namespace DescribeDataSharesForConsumer {
  export type Input = DescribeDataSharesForConsumerMessage;
  export type Output = DescribeDataSharesForConsumerResult;
  export type Error = InvalidNamespaceFault | CommonAwsError;
}

export declare namespace DescribeDataSharesForProducer {
  export type Input = DescribeDataSharesForProducerMessage;
  export type Output = DescribeDataSharesForProducerResult;
  export type Error = InvalidNamespaceFault | CommonAwsError;
}

export declare namespace DescribeDefaultClusterParameters {
  export type Input = DescribeDefaultClusterParametersMessage;
  export type Output = DescribeDefaultClusterParametersResult;
  export type Error = CommonAwsError;
}

export declare namespace DescribeEndpointAccess {
  export type Input = DescribeEndpointAccessMessage;
  export type Output = EndpointAccessList;
  export type Error =
    | ClusterNotFoundFault
    | EndpointNotFoundFault
    | InvalidClusterStateFault
    | CommonAwsError;
}

export declare namespace DescribeEndpointAuthorization {
  export type Input = DescribeEndpointAuthorizationMessage;
  export type Output = EndpointAuthorizationList;
  export type Error =
    | ClusterNotFoundFault
    | UnsupportedOperationFault
    | CommonAwsError;
}

export declare namespace DescribeEventCategories {
  export type Input = DescribeEventCategoriesMessage;
  export type Output = EventCategoriesMessage;
  export type Error = CommonAwsError;
}

export declare namespace DescribeEvents {
  export type Input = DescribeEventsMessage;
  export type Output = EventsMessage;
  export type Error = CommonAwsError;
}

export declare namespace DescribeEventSubscriptions {
  export type Input = DescribeEventSubscriptionsMessage;
  export type Output = EventSubscriptionsMessage;
  export type Error =
    | InvalidTagFault
    | SubscriptionNotFoundFault
    | CommonAwsError;
}

export declare namespace DescribeHsmClientCertificates {
  export type Input = DescribeHsmClientCertificatesMessage;
  export type Output = HsmClientCertificateMessage;
  export type Error =
    | HsmClientCertificateNotFoundFault
    | InvalidTagFault
    | CommonAwsError;
}

export declare namespace DescribeHsmConfigurations {
  export type Input = DescribeHsmConfigurationsMessage;
  export type Output = HsmConfigurationMessage;
  export type Error =
    | HsmConfigurationNotFoundFault
    | InvalidTagFault
    | CommonAwsError;
}

export declare namespace DescribeInboundIntegrations {
  export type Input = DescribeInboundIntegrationsMessage;
  export type Output = InboundIntegrationsMessage;
  export type Error =
    | IntegrationNotFoundFault
    | InvalidNamespaceFault
    | UnsupportedOperationFault
    | CommonAwsError;
}

export declare namespace DescribeIntegrations {
  export type Input = DescribeIntegrationsMessage;
  export type Output = IntegrationsMessage;
  export type Error =
    | IntegrationNotFoundFault
    | UnsupportedOperationFault
    | CommonAwsError;
}

export declare namespace DescribeLoggingStatus {
  export type Input = DescribeLoggingStatusMessage;
  export type Output = LoggingStatus;
  export type Error =
    | ClusterNotFoundFault
    | UnsupportedOperationFault
    | CommonAwsError;
}

export declare namespace DescribeNodeConfigurationOptions {
  export type Input = DescribeNodeConfigurationOptionsMessage;
  export type Output = NodeConfigurationOptionsMessage;
  export type Error =
    | AccessToSnapshotDeniedFault
    | ClusterNotFoundFault
    | ClusterSnapshotNotFoundFault
    | InvalidClusterSnapshotStateFault
    | UnsupportedOperationFault
    | CommonAwsError;
}

export declare namespace DescribeOrderableClusterOptions {
  export type Input = DescribeOrderableClusterOptionsMessage;
  export type Output = OrderableClusterOptionsMessage;
  export type Error = CommonAwsError;
}

export declare namespace DescribePartners {
  export type Input = DescribePartnersInputMessage;
  export type Output = DescribePartnersOutputMessage;
  export type Error =
    | ClusterNotFoundFault
    | UnauthorizedPartnerIntegrationFault
    | UnsupportedOperationFault
    | CommonAwsError;
}

export declare namespace DescribeRedshiftIdcApplications {
  export type Input = DescribeRedshiftIdcApplicationsMessage;
  export type Output = DescribeRedshiftIdcApplicationsResult;
  export type Error =
    | DependentServiceAccessDeniedFault
    | DependentServiceUnavailableFault
    | RedshiftIdcApplicationNotExistsFault
    | UnsupportedOperationFault
    | CommonAwsError;
}

export declare namespace DescribeReservedNodeExchangeStatus {
  export type Input = DescribeReservedNodeExchangeStatusInputMessage;
  export type Output = DescribeReservedNodeExchangeStatusOutputMessage;
  export type Error =
    | ReservedNodeExchangeNotFoundFault
    | ReservedNodeNotFoundFault
    | UnsupportedOperationFault
    | CommonAwsError;
}

export declare namespace DescribeReservedNodeOfferings {
  export type Input = DescribeReservedNodeOfferingsMessage;
  export type Output = ReservedNodeOfferingsMessage;
  export type Error =
    | DependentServiceUnavailableFault
    | ReservedNodeOfferingNotFoundFault
    | UnsupportedOperationFault
    | CommonAwsError;
}

export declare namespace DescribeReservedNodes {
  export type Input = DescribeReservedNodesMessage;
  export type Output = ReservedNodesMessage;
  export type Error =
    | DependentServiceUnavailableFault
    | ReservedNodeNotFoundFault
    | CommonAwsError;
}

export declare namespace DescribeResize {
  export type Input = DescribeResizeMessage;
  export type Output = ResizeProgressMessage;
  export type Error =
    | ClusterNotFoundFault
    | ResizeNotFoundFault
    | UnsupportedOperationFault
    | CommonAwsError;
}

export declare namespace DescribeScheduledActions {
  export type Input = DescribeScheduledActionsMessage;
  export type Output = ScheduledActionsMessage;
  export type Error =
    | ScheduledActionNotFoundFault
    | UnauthorizedOperation
    | CommonAwsError;
}

export declare namespace DescribeSnapshotCopyGrants {
  export type Input = DescribeSnapshotCopyGrantsMessage;
  export type Output = SnapshotCopyGrantMessage;
  export type Error =
    | InvalidTagFault
    | SnapshotCopyGrantNotFoundFault
    | CommonAwsError;
}

export declare namespace DescribeSnapshotSchedules {
  export type Input = DescribeSnapshotSchedulesMessage;
  export type Output = DescribeSnapshotSchedulesOutputMessage;
  export type Error = CommonAwsError;
}

export declare namespace DescribeStorage {
  export type Input = {};
  export type Output = CustomerStorageMessage;
  export type Error = CommonAwsError;
}

export declare namespace DescribeTableRestoreStatus {
  export type Input = DescribeTableRestoreStatusMessage;
  export type Output = TableRestoreStatusMessage;
  export type Error =
    | ClusterNotFoundFault
    | TableRestoreNotFoundFault
    | CommonAwsError;
}

export declare namespace DescribeTags {
  export type Input = DescribeTagsMessage;
  export type Output = TaggedResourceListMessage;
  export type Error = InvalidTagFault | ResourceNotFoundFault | CommonAwsError;
}

export declare namespace DescribeUsageLimits {
  export type Input = DescribeUsageLimitsMessage;
  export type Output = UsageLimitList;
  export type Error =
    | ClusterNotFoundFault
    | UnsupportedOperationFault
    | CommonAwsError;
}

export declare namespace DisableLogging {
  export type Input = DisableLoggingMessage;
  export type Output = LoggingStatus;
  export type Error =
    | ClusterNotFoundFault
    | InvalidClusterStateFault
    | UnsupportedOperationFault
    | CommonAwsError;
}

export declare namespace DisableSnapshotCopy {
  export type Input = DisableSnapshotCopyMessage;
  export type Output = DisableSnapshotCopyResult;
  export type Error =
    | ClusterNotFoundFault
    | InvalidClusterStateFault
    | SnapshotCopyAlreadyDisabledFault
    | UnauthorizedOperation
    | UnsupportedOperationFault
    | CommonAwsError;
}

export declare namespace DisassociateDataShareConsumer {
  export type Input = DisassociateDataShareConsumerMessage;
  export type Output = DataShare;
  export type Error =
    | InvalidDataShareFault
    | InvalidNamespaceFault
    | CommonAwsError;
}

export declare namespace EnableLogging {
  export type Input = EnableLoggingMessage;
  export type Output = LoggingStatus;
  export type Error =
    | BucketNotFoundFault
    | ClusterNotFoundFault
    | InsufficientS3BucketPolicyFault
    | InvalidClusterStateFault
    | InvalidS3BucketNameFault
    | InvalidS3KeyPrefixFault
    | UnsupportedOperationFault
    | CommonAwsError;
}

export declare namespace EnableSnapshotCopy {
  export type Input = EnableSnapshotCopyMessage;
  export type Output = EnableSnapshotCopyResult;
  export type Error =
    | ClusterNotFoundFault
    | CopyToRegionDisabledFault
    | DependentServiceRequestThrottlingFault
    | IncompatibleOrderableOptions
    | InvalidClusterStateFault
    | InvalidRetentionPeriodFault
    | LimitExceededFault
    | SnapshotCopyAlreadyEnabledFault
    | SnapshotCopyGrantNotFoundFault
    | UnauthorizedOperation
    | UnknownSnapshotCopyRegionFault
    | CommonAwsError;
}

export declare namespace FailoverPrimaryCompute {
  export type Input = FailoverPrimaryComputeInputMessage;
  export type Output = FailoverPrimaryComputeResult;
  export type Error =
    | ClusterNotFoundFault
    | InvalidClusterStateFault
    | UnauthorizedOperation
    | UnsupportedOperationFault
    | CommonAwsError;
}

export declare namespace GetClusterCredentials {
  export type Input = GetClusterCredentialsMessage;
  export type Output = ClusterCredentials;
  export type Error =
    | ClusterNotFoundFault
    | UnsupportedOperationFault
    | CommonAwsError;
}

export declare namespace GetClusterCredentialsWithIAM {
  export type Input = GetClusterCredentialsWithIAMMessage;
  export type Output = ClusterExtendedCredentials;
  export type Error =
    | ClusterNotFoundFault
    | UnsupportedOperationFault
    | CommonAwsError;
}

export declare namespace GetReservedNodeExchangeConfigurationOptions {
  export type Input = GetReservedNodeExchangeConfigurationOptionsInputMessage;
  export type Output = GetReservedNodeExchangeConfigurationOptionsOutputMessage;
  export type Error =
    | ClusterNotFoundFault
    | ClusterSnapshotNotFoundFault
    | DependentServiceUnavailableFault
    | InvalidReservedNodeStateFault
    | ReservedNodeAlreadyMigratedFault
    | ReservedNodeNotFoundFault
    | ReservedNodeOfferingNotFoundFault
    | UnsupportedOperationFault
    | CommonAwsError;
}

export declare namespace GetReservedNodeExchangeOfferings {
  export type Input = GetReservedNodeExchangeOfferingsInputMessage;
  export type Output = GetReservedNodeExchangeOfferingsOutputMessage;
  export type Error =
    | DependentServiceUnavailableFault
    | InvalidReservedNodeStateFault
    | ReservedNodeAlreadyMigratedFault
    | ReservedNodeNotFoundFault
    | ReservedNodeOfferingNotFoundFault
    | UnsupportedOperationFault
    | CommonAwsError;
}

export declare namespace GetResourcePolicy {
  export type Input = GetResourcePolicyMessage;
  export type Output = GetResourcePolicyResult;
  export type Error =
    | InvalidPolicyFault
    | ResourceNotFoundFault
    | UnsupportedOperationFault
    | CommonAwsError;
}

export declare namespace ListRecommendations {
  export type Input = ListRecommendationsMessage;
  export type Output = ListRecommendationsResult;
  export type Error =
    | ClusterNotFoundFault
    | UnsupportedOperationFault
    | CommonAwsError;
}

export declare namespace ModifyAquaConfiguration {
  export type Input = ModifyAquaInputMessage;
  export type Output = ModifyAquaOutputMessage;
  export type Error =
    | ClusterNotFoundFault
    | InvalidClusterStateFault
    | UnsupportedOperationFault
    | CommonAwsError;
}

export declare namespace ModifyAuthenticationProfile {
  export type Input = ModifyAuthenticationProfileMessage;
  export type Output = ModifyAuthenticationProfileResult;
  export type Error =
    | AuthenticationProfileNotFoundFault
    | AuthenticationProfileQuotaExceededFault
    | InvalidAuthenticationProfileRequestFault
    | CommonAwsError;
}

export declare namespace ModifyCluster {
  export type Input = ModifyClusterMessage;
  export type Output = ModifyClusterResult;
  export type Error =
    | ClusterAlreadyExistsFault
    | ClusterNotFoundFault
    | ClusterParameterGroupNotFoundFault
    | ClusterSecurityGroupNotFoundFault
    | CustomCnameAssociationFault
    | DependentServiceRequestThrottlingFault
    | HsmClientCertificateNotFoundFault
    | HsmConfigurationNotFoundFault
    | InsufficientClusterCapacityFault
    | InvalidClusterSecurityGroupStateFault
    | InvalidClusterStateFault
    | InvalidClusterTrackFault
    | InvalidElasticIpFault
    | InvalidRetentionPeriodFault
    | Ipv6CidrBlockNotFoundFault
    | LimitExceededFault
    | NumberOfNodesPerClusterLimitExceededFault
    | NumberOfNodesQuotaExceededFault
    | TableLimitExceededFault
    | UnauthorizedOperation
    | UnsupportedOperationFault
    | UnsupportedOptionFault
    | CommonAwsError;
}

export declare namespace ModifyClusterDbRevision {
  export type Input = ModifyClusterDbRevisionMessage;
  export type Output = ModifyClusterDbRevisionResult;
  export type Error =
    | ClusterNotFoundFault
    | ClusterOnLatestRevisionFault
    | InvalidClusterStateFault
    | UnsupportedOperationFault
    | CommonAwsError;
}

export declare namespace ModifyClusterIamRoles {
  export type Input = ModifyClusterIamRolesMessage;
  export type Output = ModifyClusterIamRolesResult;
  export type Error =
    | ClusterNotFoundFault
    | InvalidClusterStateFault
    | CommonAwsError;
}

export declare namespace ModifyClusterMaintenance {
  export type Input = ModifyClusterMaintenanceMessage;
  export type Output = ModifyClusterMaintenanceResult;
  export type Error =
    | ClusterNotFoundFault
    | InvalidClusterStateFault
    | CommonAwsError;
}

export declare namespace ModifyClusterParameterGroup {
  export type Input = ModifyClusterParameterGroupMessage;
  export type Output = ClusterParameterGroupNameMessage;
  export type Error =
    | ClusterParameterGroupNotFoundFault
    | InvalidClusterParameterGroupStateFault
    | CommonAwsError;
}

export declare namespace ModifyClusterSnapshot {
  export type Input = ModifyClusterSnapshotMessage;
  export type Output = ModifyClusterSnapshotResult;
  export type Error =
    | ClusterSnapshotNotFoundFault
    | InvalidClusterSnapshotStateFault
    | InvalidRetentionPeriodFault
    | CommonAwsError;
}

export declare namespace ModifyClusterSnapshotSchedule {
  export type Input = ModifyClusterSnapshotScheduleMessage;
  export type Output = {};
  export type Error =
    | ClusterNotFoundFault
    | InvalidClusterSnapshotScheduleStateFault
    | SnapshotScheduleNotFoundFault
    | CommonAwsError;
}

export declare namespace ModifyClusterSubnetGroup {
  export type Input = ModifyClusterSubnetGroupMessage;
  export type Output = ModifyClusterSubnetGroupResult;
  export type Error =
    | ClusterSubnetGroupNotFoundFault
    | ClusterSubnetQuotaExceededFault
    | DependentServiceRequestThrottlingFault
    | InvalidSubnet
    | SubnetAlreadyInUse
    | UnauthorizedOperation
    | CommonAwsError;
}

export declare namespace ModifyCustomDomainAssociation {
  export type Input = ModifyCustomDomainAssociationMessage;
  export type Output = ModifyCustomDomainAssociationResult;
  export type Error =
    | ClusterNotFoundFault
    | CustomCnameAssociationFault
    | CustomDomainAssociationNotFoundFault
    | UnsupportedOperationFault
    | CommonAwsError;
}

export declare namespace ModifyEndpointAccess {
  export type Input = ModifyEndpointAccessMessage;
  export type Output = EndpointAccess;
  export type Error =
    | ClusterNotFoundFault
    | EndpointNotFoundFault
    | InvalidClusterSecurityGroupStateFault
    | InvalidClusterStateFault
    | InvalidEndpointStateFault
    | UnauthorizedOperation
    | CommonAwsError;
}

export declare namespace ModifyEventSubscription {
  export type Input = ModifyEventSubscriptionMessage;
  export type Output = ModifyEventSubscriptionResult;
  export type Error =
    | InvalidSubscriptionStateFault
    | SNSInvalidTopicFault
    | SNSNoAuthorizationFault
    | SNSTopicArnNotFoundFault
    | SourceNotFoundFault
    | SubscriptionCategoryNotFoundFault
    | SubscriptionEventIdNotFoundFault
    | SubscriptionNotFoundFault
    | SubscriptionSeverityNotFoundFault
    | CommonAwsError;
}

export declare namespace ModifyIntegration {
  export type Input = ModifyIntegrationMessage;
  export type Output = Integration;
  export type Error =
    | IntegrationAlreadyExistsFault
    | IntegrationConflictOperationFault
    | IntegrationConflictStateFault
    | IntegrationNotFoundFault
    | UnsupportedOperationFault
    | CommonAwsError;
}

export declare namespace ModifyRedshiftIdcApplication {
  export type Input = ModifyRedshiftIdcApplicationMessage;
  export type Output = ModifyRedshiftIdcApplicationResult;
  export type Error =
    | DependentServiceAccessDeniedFault
    | DependentServiceUnavailableFault
    | RedshiftIdcApplicationNotExistsFault
    | UnsupportedOperationFault
    | CommonAwsError;
}

export declare namespace ModifyScheduledAction {
  export type Input = ModifyScheduledActionMessage;
  export type Output = ScheduledAction;
  export type Error =
    | ClusterNotFoundFault
    | InvalidScheduledActionFault
    | InvalidScheduleFault
    | ScheduledActionNotFoundFault
    | ScheduledActionTypeUnsupportedFault
    | UnauthorizedOperation
    | UnsupportedOperationFault
    | CommonAwsError;
}

export declare namespace ModifySnapshotCopyRetentionPeriod {
  export type Input = ModifySnapshotCopyRetentionPeriodMessage;
  export type Output = ModifySnapshotCopyRetentionPeriodResult;
  export type Error =
    | ClusterNotFoundFault
    | InvalidClusterStateFault
    | InvalidRetentionPeriodFault
    | SnapshotCopyDisabledFault
    | UnauthorizedOperation
    | CommonAwsError;
}

export declare namespace ModifySnapshotSchedule {
  export type Input = ModifySnapshotScheduleMessage;
  export type Output = SnapshotSchedule;
  export type Error =
    | InvalidScheduleFault
    | SnapshotScheduleNotFoundFault
    | SnapshotScheduleUpdateInProgressFault
    | CommonAwsError;
}

export declare namespace ModifyUsageLimit {
  export type Input = ModifyUsageLimitMessage;
  export type Output = UsageLimit;
  export type Error =
    | InvalidUsageLimitFault
    | UnsupportedOperationFault
    | UsageLimitNotFoundFault
    | CommonAwsError;
}

export declare namespace PauseCluster {
  export type Input = PauseClusterMessage;
  export type Output = PauseClusterResult;
  export type Error =
    | ClusterNotFoundFault
    | InvalidClusterStateFault
    | UnsupportedOperationFault
    | CommonAwsError;
}

export declare namespace PurchaseReservedNodeOffering {
  export type Input = PurchaseReservedNodeOfferingMessage;
  export type Output = PurchaseReservedNodeOfferingResult;
  export type Error =
    | ReservedNodeAlreadyExistsFault
    | ReservedNodeOfferingNotFoundFault
    | ReservedNodeQuotaExceededFault
    | UnsupportedOperationFault
    | CommonAwsError;
}

export declare namespace PutResourcePolicy {
  export type Input = PutResourcePolicyMessage;
  export type Output = PutResourcePolicyResult;
  export type Error =
    | ConflictPolicyUpdateFault
    | InvalidPolicyFault
    | ResourceNotFoundFault
    | UnsupportedOperationFault
    | CommonAwsError;
}

export declare namespace RebootCluster {
  export type Input = RebootClusterMessage;
  export type Output = RebootClusterResult;
  export type Error =
    | ClusterNotFoundFault
    | InvalidClusterStateFault
    | CommonAwsError;
}

export declare namespace RegisterNamespace {
  export type Input = RegisterNamespaceInputMessage;
  export type Output = RegisterNamespaceOutputMessage;
  export type Error =
    | ClusterNotFoundFault
    | InvalidClusterStateFault
    | InvalidNamespaceFault
    | CommonAwsError;
}

export declare namespace RejectDataShare {
  export type Input = RejectDataShareMessage;
  export type Output = DataShare;
  export type Error = InvalidDataShareFault | CommonAwsError;
}

export declare namespace ResetClusterParameterGroup {
  export type Input = ResetClusterParameterGroupMessage;
  export type Output = ClusterParameterGroupNameMessage;
  export type Error =
    | ClusterParameterGroupNotFoundFault
    | InvalidClusterParameterGroupStateFault
    | CommonAwsError;
}

export declare namespace ResizeCluster {
  export type Input = ResizeClusterMessage;
  export type Output = ResizeClusterResult;
  export type Error =
    | ClusterNotFoundFault
    | DependentServiceUnavailableFault
    | InsufficientClusterCapacityFault
    | InvalidClusterStateFault
    | InvalidReservedNodeStateFault
    | LimitExceededFault
    | NumberOfNodesPerClusterLimitExceededFault
    | NumberOfNodesQuotaExceededFault
    | ReservedNodeAlreadyExistsFault
    | ReservedNodeAlreadyMigratedFault
    | ReservedNodeNotFoundFault
    | ReservedNodeOfferingNotFoundFault
    | UnauthorizedOperation
    | UnsupportedOperationFault
    | UnsupportedOptionFault
    | CommonAwsError;
}

export declare namespace RestoreFromClusterSnapshot {
  export type Input = RestoreFromClusterSnapshotMessage;
  export type Output = RestoreFromClusterSnapshotResult;
  export type Error =
    | AccessToSnapshotDeniedFault
    | ClusterAlreadyExistsFault
    | ClusterParameterGroupNotFoundFault
    | ClusterQuotaExceededFault
    | ClusterSecurityGroupNotFoundFault
    | ClusterSnapshotNotFoundFault
    | ClusterSubnetGroupNotFoundFault
    | DependentServiceRequestThrottlingFault
    | DependentServiceUnavailableFault
    | HsmClientCertificateNotFoundFault
    | HsmConfigurationNotFoundFault
    | InsufficientClusterCapacityFault
    | InvalidClusterSnapshotStateFault
    | InvalidClusterSubnetGroupStateFault
    | InvalidClusterTrackFault
    | InvalidElasticIpFault
    | InvalidReservedNodeStateFault
    | InvalidRestoreFault
    | InvalidSubnet
    | InvalidTagFault
    | InvalidVPCNetworkStateFault
    | Ipv6CidrBlockNotFoundFault
    | LimitExceededFault
    | NumberOfNodesPerClusterLimitExceededFault
    | NumberOfNodesQuotaExceededFault
    | ReservedNodeAlreadyExistsFault
    | ReservedNodeAlreadyMigratedFault
    | ReservedNodeNotFoundFault
    | ReservedNodeOfferingNotFoundFault
    | SnapshotScheduleNotFoundFault
    | TagLimitExceededFault
    | UnauthorizedOperation
    | UnsupportedOperationFault
    | CommonAwsError;
}

export declare namespace RestoreTableFromClusterSnapshot {
  export type Input = RestoreTableFromClusterSnapshotMessage;
  export type Output = RestoreTableFromClusterSnapshotResult;
  export type Error =
    | ClusterNotFoundFault
    | ClusterSnapshotNotFoundFault
    | InProgressTableRestoreQuotaExceededFault
    | InvalidClusterSnapshotStateFault
    | InvalidClusterStateFault
    | InvalidTableRestoreArgumentFault
    | UnsupportedOperationFault
    | CommonAwsError;
}

export declare namespace ResumeCluster {
  export type Input = ResumeClusterMessage;
  export type Output = ResumeClusterResult;
  export type Error =
    | ClusterNotFoundFault
    | InsufficientClusterCapacityFault
    | InvalidClusterStateFault
    | UnsupportedOperationFault
    | CommonAwsError;
}

export declare namespace RevokeClusterSecurityGroupIngress {
  export type Input = RevokeClusterSecurityGroupIngressMessage;
  export type Output = RevokeClusterSecurityGroupIngressResult;
  export type Error =
    | AuthorizationNotFoundFault
    | ClusterSecurityGroupNotFoundFault
    | InvalidClusterSecurityGroupStateFault
    | CommonAwsError;
}

export declare namespace RevokeEndpointAccess {
  export type Input = RevokeEndpointAccessMessage;
  export type Output = EndpointAuthorization;
  export type Error =
    | ClusterNotFoundFault
    | EndpointAuthorizationNotFoundFault
    | EndpointNotFoundFault
    | InvalidAuthorizationStateFault
    | InvalidClusterSecurityGroupStateFault
    | InvalidClusterStateFault
    | InvalidEndpointStateFault
    | CommonAwsError;
}

export declare namespace RevokeSnapshotAccess {
  export type Input = RevokeSnapshotAccessMessage;
  export type Output = RevokeSnapshotAccessResult;
  export type Error =
    | AccessToSnapshotDeniedFault
    | AuthorizationNotFoundFault
    | ClusterSnapshotNotFoundFault
    | UnsupportedOperationFault
    | CommonAwsError;
}

export declare namespace RotateEncryptionKey {
  export type Input = RotateEncryptionKeyMessage;
  export type Output = RotateEncryptionKeyResult;
  export type Error =
    | ClusterNotFoundFault
    | DependentServiceRequestThrottlingFault
    | InvalidClusterStateFault
    | UnsupportedOperationFault
    | CommonAwsError;
}

export declare namespace UpdatePartnerStatus {
  export type Input = UpdatePartnerStatusInputMessage;
  export type Output = PartnerIntegrationOutputMessage;
  export type Error =
    | ClusterNotFoundFault
    | PartnerNotFoundFault
    | UnauthorizedPartnerIntegrationFault
    | UnsupportedOperationFault
    | CommonAwsError;
}
