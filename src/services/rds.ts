import type { Effect, Data } from "effect";
import type { CommonAwsError } from "../error.ts";

export interface AmazonRDSv19 {
  addRoleToDBCluster(
    input: AddRoleToDBClusterMessage,
  ): Effect.Effect<
    {},
    | DBClusterNotFoundFault
    | DBClusterRoleAlreadyExistsFault
    | DBClusterRoleQuotaExceededFault
    | InvalidDBClusterStateFault
    | CommonAwsError
  >;
  addRoleToDBInstance(
    input: AddRoleToDBInstanceMessage,
  ): Effect.Effect<
    {},
    | DBInstanceNotFoundFault
    | DBInstanceRoleAlreadyExistsFault
    | DBInstanceRoleQuotaExceededFault
    | InvalidDBInstanceStateFault
    | CommonAwsError
  >;
  addSourceIdentifierToSubscription(
    input: AddSourceIdentifierToSubscriptionMessage,
  ): Effect.Effect<
    AddSourceIdentifierToSubscriptionResult,
    SourceNotFoundFault | SubscriptionNotFoundFault | CommonAwsError
  >;
  addTagsToResource(
    input: AddTagsToResourceMessage,
  ): Effect.Effect<
    {},
    | BlueGreenDeploymentNotFoundFault
    | DBClusterNotFoundFault
    | DBInstanceNotFoundFault
    | DBProxyNotFoundFault
    | DBProxyTargetGroupNotFoundFault
    | DBSnapshotNotFoundFault
    | DBSnapshotTenantDatabaseNotFoundFault
    | IntegrationNotFoundFault
    | TenantDatabaseNotFoundFault
    | CommonAwsError
  >;
  applyPendingMaintenanceAction(
    input: ApplyPendingMaintenanceActionMessage,
  ): Effect.Effect<
    ApplyPendingMaintenanceActionResult,
    | InvalidDBClusterStateFault
    | InvalidDBInstanceStateFault
    | ResourceNotFoundFault
    | CommonAwsError
  >;
  authorizeDBSecurityGroupIngress(
    input: AuthorizeDBSecurityGroupIngressMessage,
  ): Effect.Effect<
    AuthorizeDBSecurityGroupIngressResult,
    | AuthorizationAlreadyExistsFault
    | AuthorizationQuotaExceededFault
    | DBSecurityGroupNotFoundFault
    | InvalidDBSecurityGroupStateFault
    | CommonAwsError
  >;
  backtrackDBCluster(
    input: BacktrackDBClusterMessage,
  ): Effect.Effect<
    DBClusterBacktrack,
    DBClusterNotFoundFault | InvalidDBClusterStateFault | CommonAwsError
  >;
  cancelExportTask(
    input: CancelExportTaskMessage,
  ): Effect.Effect<
    ExportTask,
    ExportTaskNotFoundFault | InvalidExportTaskStateFault | CommonAwsError
  >;
  copyDBClusterParameterGroup(
    input: CopyDBClusterParameterGroupMessage,
  ): Effect.Effect<
    CopyDBClusterParameterGroupResult,
    | DBParameterGroupAlreadyExistsFault
    | DBParameterGroupNotFoundFault
    | DBParameterGroupQuotaExceededFault
    | CommonAwsError
  >;
  copyDBClusterSnapshot(
    input: CopyDBClusterSnapshotMessage,
  ): Effect.Effect<
    CopyDBClusterSnapshotResult,
    | DBClusterSnapshotAlreadyExistsFault
    | DBClusterSnapshotNotFoundFault
    | InvalidDBClusterSnapshotStateFault
    | InvalidDBClusterStateFault
    | KMSKeyNotAccessibleFault
    | SnapshotQuotaExceededFault
    | CommonAwsError
  >;
  copyDBParameterGroup(
    input: CopyDBParameterGroupMessage,
  ): Effect.Effect<
    CopyDBParameterGroupResult,
    | DBParameterGroupAlreadyExistsFault
    | DBParameterGroupNotFoundFault
    | DBParameterGroupQuotaExceededFault
    | CommonAwsError
  >;
  copyDBSnapshot(
    input: CopyDBSnapshotMessage,
  ): Effect.Effect<
    CopyDBSnapshotResult,
    | CustomAvailabilityZoneNotFoundFault
    | DBSnapshotAlreadyExistsFault
    | DBSnapshotNotFoundFault
    | InvalidDBSnapshotStateFault
    | KMSKeyNotAccessibleFault
    | SnapshotQuotaExceededFault
    | CommonAwsError
  >;
  copyOptionGroup(
    input: CopyOptionGroupMessage,
  ): Effect.Effect<
    CopyOptionGroupResult,
    | OptionGroupAlreadyExistsFault
    | OptionGroupNotFoundFault
    | OptionGroupQuotaExceededFault
    | CommonAwsError
  >;
  createBlueGreenDeployment(
    input: CreateBlueGreenDeploymentRequest,
  ): Effect.Effect<
    CreateBlueGreenDeploymentResponse,
    | BlueGreenDeploymentAlreadyExistsFault
    | DBClusterNotFoundFault
    | DBClusterParameterGroupNotFoundFault
    | DBClusterQuotaExceededFault
    | DBInstanceNotFoundFault
    | DBParameterGroupNotFoundFault
    | InstanceQuotaExceededFault
    | InvalidDBClusterStateFault
    | InvalidDBInstanceStateFault
    | SourceClusterNotSupportedFault
    | SourceDatabaseNotSupportedFault
    | CommonAwsError
  >;
  createCustomDBEngineVersion(
    input: CreateCustomDBEngineVersionMessage,
  ): Effect.Effect<
    DBEngineVersion,
    | CreateCustomDBEngineVersionFault
    | CustomDBEngineVersionAlreadyExistsFault
    | CustomDBEngineVersionQuotaExceededFault
    | Ec2ImagePropertiesNotSupportedFault
    | KMSKeyNotAccessibleFault
    | CommonAwsError
  >;
  createDBCluster(
    input: CreateDBClusterMessage,
  ): Effect.Effect<
    CreateDBClusterResult,
    | DBClusterAlreadyExistsFault
    | DBClusterNotFoundFault
    | DBClusterParameterGroupNotFoundFault
    | DBClusterQuotaExceededFault
    | DBInstanceNotFoundFault
    | DBSubnetGroupDoesNotCoverEnoughAZs
    | DBSubnetGroupNotFoundFault
    | DomainNotFoundFault
    | GlobalClusterNotFoundFault
    | InsufficientDBInstanceCapacityFault
    | InsufficientStorageClusterCapacityFault
    | InvalidDBClusterStateFault
    | InvalidDBInstanceStateFault
    | InvalidDBSubnetGroupFault
    | InvalidDBSubnetGroupStateFault
    | InvalidGlobalClusterStateFault
    | InvalidSubnet
    | InvalidVPCNetworkStateFault
    | KMSKeyNotAccessibleFault
    | OptionGroupNotFoundFault
    | StorageQuotaExceededFault
    | CommonAwsError
  >;
  createDBClusterEndpoint(
    input: CreateDBClusterEndpointMessage,
  ): Effect.Effect<
    DBClusterEndpoint,
    | DBClusterEndpointAlreadyExistsFault
    | DBClusterEndpointQuotaExceededFault
    | DBClusterNotFoundFault
    | DBInstanceNotFoundFault
    | InvalidDBClusterStateFault
    | InvalidDBInstanceStateFault
    | CommonAwsError
  >;
  createDBClusterParameterGroup(
    input: CreateDBClusterParameterGroupMessage,
  ): Effect.Effect<
    CreateDBClusterParameterGroupResult,
    | DBParameterGroupAlreadyExistsFault
    | DBParameterGroupQuotaExceededFault
    | CommonAwsError
  >;
  createDBClusterSnapshot(
    input: CreateDBClusterSnapshotMessage,
  ): Effect.Effect<
    CreateDBClusterSnapshotResult,
    | DBClusterNotFoundFault
    | DBClusterSnapshotAlreadyExistsFault
    | InvalidDBClusterSnapshotStateFault
    | InvalidDBClusterStateFault
    | SnapshotQuotaExceededFault
    | CommonAwsError
  >;
  createDBInstance(
    input: CreateDBInstanceMessage,
  ): Effect.Effect<
    CreateDBInstanceResult,
    | AuthorizationNotFoundFault
    | BackupPolicyNotFoundFault
    | CertificateNotFoundFault
    | DBClusterNotFoundFault
    | DBInstanceAlreadyExistsFault
    | DBParameterGroupNotFoundFault
    | DBSecurityGroupNotFoundFault
    | DBSubnetGroupDoesNotCoverEnoughAZs
    | DBSubnetGroupNotFoundFault
    | DomainNotFoundFault
    | InstanceQuotaExceededFault
    | InsufficientDBInstanceCapacityFault
    | InvalidDBClusterStateFault
    | InvalidSubnet
    | InvalidVPCNetworkStateFault
    | KMSKeyNotAccessibleFault
    | NetworkTypeNotSupported
    | OptionGroupNotFoundFault
    | ProvisionedIopsNotAvailableInAZFault
    | StorageQuotaExceededFault
    | StorageTypeNotSupportedFault
    | TenantDatabaseQuotaExceededFault
    | CommonAwsError
  >;
  createDBInstanceReadReplica(
    input: CreateDBInstanceReadReplicaMessage,
  ): Effect.Effect<
    CreateDBInstanceReadReplicaResult,
    | CertificateNotFoundFault
    | DBClusterNotFoundFault
    | DBInstanceAlreadyExistsFault
    | DBInstanceNotFoundFault
    | DBParameterGroupNotFoundFault
    | DBSecurityGroupNotFoundFault
    | DBSubnetGroupDoesNotCoverEnoughAZs
    | DBSubnetGroupNotAllowedFault
    | DBSubnetGroupNotFoundFault
    | DomainNotFoundFault
    | InstanceQuotaExceededFault
    | InsufficientDBInstanceCapacityFault
    | InvalidDBClusterStateFault
    | InvalidDBInstanceStateFault
    | InvalidDBSubnetGroupFault
    | InvalidSubnet
    | InvalidVPCNetworkStateFault
    | KMSKeyNotAccessibleFault
    | NetworkTypeNotSupported
    | OptionGroupNotFoundFault
    | ProvisionedIopsNotAvailableInAZFault
    | StorageQuotaExceededFault
    | StorageTypeNotSupportedFault
    | TenantDatabaseQuotaExceededFault
    | CommonAwsError
  >;
  createDBParameterGroup(
    input: CreateDBParameterGroupMessage,
  ): Effect.Effect<
    CreateDBParameterGroupResult,
    | DBParameterGroupAlreadyExistsFault
    | DBParameterGroupQuotaExceededFault
    | CommonAwsError
  >;
  createDBProxy(
    input: CreateDBProxyRequest,
  ): Effect.Effect<
    CreateDBProxyResponse,
    | DBProxyAlreadyExistsFault
    | DBProxyQuotaExceededFault
    | InvalidSubnet
    | CommonAwsError
  >;
  createDBProxyEndpoint(
    input: CreateDBProxyEndpointRequest,
  ): Effect.Effect<
    CreateDBProxyEndpointResponse,
    | DBProxyEndpointAlreadyExistsFault
    | DBProxyEndpointQuotaExceededFault
    | DBProxyNotFoundFault
    | InvalidDBProxyStateFault
    | InvalidSubnet
    | CommonAwsError
  >;
  createDBSecurityGroup(
    input: CreateDBSecurityGroupMessage,
  ): Effect.Effect<
    CreateDBSecurityGroupResult,
    | DBSecurityGroupAlreadyExistsFault
    | DBSecurityGroupNotSupportedFault
    | DBSecurityGroupQuotaExceededFault
    | CommonAwsError
  >;
  createDBShardGroup(
    input: CreateDBShardGroupMessage,
  ): Effect.Effect<
    DBShardGroup,
    | DBClusterNotFoundFault
    | DBShardGroupAlreadyExistsFault
    | InvalidDBClusterStateFault
    | InvalidVPCNetworkStateFault
    | MaxDBShardGroupLimitReached
    | NetworkTypeNotSupported
    | UnsupportedDBEngineVersionFault
    | CommonAwsError
  >;
  createDBSnapshot(
    input: CreateDBSnapshotMessage,
  ): Effect.Effect<
    CreateDBSnapshotResult,
    | DBInstanceNotFoundFault
    | DBSnapshotAlreadyExistsFault
    | InvalidDBInstanceStateFault
    | SnapshotQuotaExceededFault
    | CommonAwsError
  >;
  createDBSubnetGroup(
    input: CreateDBSubnetGroupMessage,
  ): Effect.Effect<
    CreateDBSubnetGroupResult,
    | DBSubnetGroupAlreadyExistsFault
    | DBSubnetGroupDoesNotCoverEnoughAZs
    | DBSubnetGroupQuotaExceededFault
    | DBSubnetQuotaExceededFault
    | InvalidSubnet
    | CommonAwsError
  >;
  createEventSubscription(
    input: CreateEventSubscriptionMessage,
  ): Effect.Effect<
    CreateEventSubscriptionResult,
    | EventSubscriptionQuotaExceededFault
    | SNSInvalidTopicFault
    | SNSNoAuthorizationFault
    | SNSTopicArnNotFoundFault
    | SourceNotFoundFault
    | SubscriptionAlreadyExistFault
    | SubscriptionCategoryNotFoundFault
    | CommonAwsError
  >;
  createGlobalCluster(
    input: CreateGlobalClusterMessage,
  ): Effect.Effect<
    CreateGlobalClusterResult,
    | DBClusterNotFoundFault
    | GlobalClusterAlreadyExistsFault
    | GlobalClusterQuotaExceededFault
    | InvalidDBClusterStateFault
    | CommonAwsError
  >;
  createIntegration(
    input: CreateIntegrationMessage,
  ): Effect.Effect<
    Integration,
    | DBClusterNotFoundFault
    | DBInstanceNotFoundFault
    | IntegrationAlreadyExistsFault
    | IntegrationConflictOperationFault
    | IntegrationQuotaExceededFault
    | KMSKeyNotAccessibleFault
    | CommonAwsError
  >;
  createOptionGroup(
    input: CreateOptionGroupMessage,
  ): Effect.Effect<
    CreateOptionGroupResult,
    | OptionGroupAlreadyExistsFault
    | OptionGroupQuotaExceededFault
    | CommonAwsError
  >;
  createTenantDatabase(
    input: CreateTenantDatabaseMessage,
  ): Effect.Effect<
    CreateTenantDatabaseResult,
    | DBInstanceNotFoundFault
    | InvalidDBInstanceStateFault
    | KMSKeyNotAccessibleFault
    | TenantDatabaseAlreadyExistsFault
    | TenantDatabaseQuotaExceededFault
    | CommonAwsError
  >;
  deleteBlueGreenDeployment(
    input: DeleteBlueGreenDeploymentRequest,
  ): Effect.Effect<
    DeleteBlueGreenDeploymentResponse,
    | BlueGreenDeploymentNotFoundFault
    | InvalidBlueGreenDeploymentStateFault
    | CommonAwsError
  >;
  deleteCustomDBEngineVersion(
    input: DeleteCustomDBEngineVersionMessage,
  ): Effect.Effect<
    DBEngineVersion,
    | CustomDBEngineVersionNotFoundFault
    | InvalidCustomDBEngineVersionStateFault
    | CommonAwsError
  >;
  deleteDBCluster(
    input: DeleteDBClusterMessage,
  ): Effect.Effect<
    DeleteDBClusterResult,
    | DBClusterAutomatedBackupQuotaExceededFault
    | DBClusterNotFoundFault
    | DBClusterSnapshotAlreadyExistsFault
    | InvalidDBClusterSnapshotStateFault
    | InvalidDBClusterStateFault
    | SnapshotQuotaExceededFault
    | CommonAwsError
  >;
  deleteDBClusterAutomatedBackup(
    input: DeleteDBClusterAutomatedBackupMessage,
  ): Effect.Effect<
    DeleteDBClusterAutomatedBackupResult,
    | DBClusterAutomatedBackupNotFoundFault
    | InvalidDBClusterAutomatedBackupStateFault
    | CommonAwsError
  >;
  deleteDBClusterEndpoint(
    input: DeleteDBClusterEndpointMessage,
  ): Effect.Effect<
    DBClusterEndpoint,
    | DBClusterEndpointNotFoundFault
    | InvalidDBClusterEndpointStateFault
    | InvalidDBClusterStateFault
    | CommonAwsError
  >;
  deleteDBClusterParameterGroup(
    input: DeleteDBClusterParameterGroupMessage,
  ): Effect.Effect<
    {},
    | DBParameterGroupNotFoundFault
    | InvalidDBParameterGroupStateFault
    | CommonAwsError
  >;
  deleteDBClusterSnapshot(
    input: DeleteDBClusterSnapshotMessage,
  ): Effect.Effect<
    DeleteDBClusterSnapshotResult,
    | DBClusterSnapshotNotFoundFault
    | InvalidDBClusterSnapshotStateFault
    | CommonAwsError
  >;
  deleteDBInstance(
    input: DeleteDBInstanceMessage,
  ): Effect.Effect<
    DeleteDBInstanceResult,
    | DBInstanceAutomatedBackupQuotaExceededFault
    | DBInstanceNotFoundFault
    | DBSnapshotAlreadyExistsFault
    | InvalidDBClusterStateFault
    | InvalidDBInstanceStateFault
    | SnapshotQuotaExceededFault
    | CommonAwsError
  >;
  deleteDBInstanceAutomatedBackup(
    input: DeleteDBInstanceAutomatedBackupMessage,
  ): Effect.Effect<
    DeleteDBInstanceAutomatedBackupResult,
    | DBInstanceAutomatedBackupNotFoundFault
    | InvalidDBInstanceAutomatedBackupStateFault
    | CommonAwsError
  >;
  deleteDBParameterGroup(
    input: DeleteDBParameterGroupMessage,
  ): Effect.Effect<
    {},
    | DBParameterGroupNotFoundFault
    | InvalidDBParameterGroupStateFault
    | CommonAwsError
  >;
  deleteDBProxy(
    input: DeleteDBProxyRequest,
  ): Effect.Effect<
    DeleteDBProxyResponse,
    DBProxyNotFoundFault | InvalidDBProxyStateFault | CommonAwsError
  >;
  deleteDBProxyEndpoint(
    input: DeleteDBProxyEndpointRequest,
  ): Effect.Effect<
    DeleteDBProxyEndpointResponse,
    | DBProxyEndpointNotFoundFault
    | InvalidDBProxyEndpointStateFault
    | CommonAwsError
  >;
  deleteDBSecurityGroup(
    input: DeleteDBSecurityGroupMessage,
  ): Effect.Effect<
    {},
    | DBSecurityGroupNotFoundFault
    | InvalidDBSecurityGroupStateFault
    | CommonAwsError
  >;
  deleteDBShardGroup(
    input: DeleteDBShardGroupMessage,
  ): Effect.Effect<
    DBShardGroup,
    | DBShardGroupNotFoundFault
    | InvalidDBClusterStateFault
    | InvalidDBShardGroupStateFault
    | CommonAwsError
  >;
  deleteDBSnapshot(
    input: DeleteDBSnapshotMessage,
  ): Effect.Effect<
    DeleteDBSnapshotResult,
    DBSnapshotNotFoundFault | InvalidDBSnapshotStateFault | CommonAwsError
  >;
  deleteDBSubnetGroup(
    input: DeleteDBSubnetGroupMessage,
  ): Effect.Effect<
    {},
    | DBSubnetGroupNotFoundFault
    | InvalidDBSubnetGroupStateFault
    | InvalidDBSubnetStateFault
    | CommonAwsError
  >;
  deleteEventSubscription(
    input: DeleteEventSubscriptionMessage,
  ): Effect.Effect<
    DeleteEventSubscriptionResult,
    | InvalidEventSubscriptionStateFault
    | SubscriptionNotFoundFault
    | CommonAwsError
  >;
  deleteGlobalCluster(
    input: DeleteGlobalClusterMessage,
  ): Effect.Effect<
    DeleteGlobalClusterResult,
    GlobalClusterNotFoundFault | InvalidGlobalClusterStateFault | CommonAwsError
  >;
  deleteIntegration(
    input: DeleteIntegrationMessage,
  ): Effect.Effect<
    Integration,
    | IntegrationConflictOperationFault
    | IntegrationNotFoundFault
    | InvalidIntegrationStateFault
    | CommonAwsError
  >;
  deleteOptionGroup(
    input: DeleteOptionGroupMessage,
  ): Effect.Effect<
    {},
    InvalidOptionGroupStateFault | OptionGroupNotFoundFault | CommonAwsError
  >;
  deleteTenantDatabase(
    input: DeleteTenantDatabaseMessage,
  ): Effect.Effect<
    DeleteTenantDatabaseResult,
    | DBInstanceNotFoundFault
    | InvalidDBInstanceStateFault
    | TenantDatabaseNotFoundFault
    | CommonAwsError
  >;
  deregisterDBProxyTargets(
    input: DeregisterDBProxyTargetsRequest,
  ): Effect.Effect<
    DeregisterDBProxyTargetsResponse,
    | DBProxyNotFoundFault
    | DBProxyTargetGroupNotFoundFault
    | DBProxyTargetNotFoundFault
    | InvalidDBProxyStateFault
    | CommonAwsError
  >;
  describeAccountAttributes(
    input: DescribeAccountAttributesMessage,
  ): Effect.Effect<AccountAttributesMessage, CommonAwsError>;
  describeBlueGreenDeployments(
    input: DescribeBlueGreenDeploymentsRequest,
  ): Effect.Effect<
    DescribeBlueGreenDeploymentsResponse,
    BlueGreenDeploymentNotFoundFault | CommonAwsError
  >;
  describeCertificates(
    input: DescribeCertificatesMessage,
  ): Effect.Effect<
    CertificateMessage,
    CertificateNotFoundFault | CommonAwsError
  >;
  describeDBClusterAutomatedBackups(
    input: DescribeDBClusterAutomatedBackupsMessage,
  ): Effect.Effect<
    DBClusterAutomatedBackupMessage,
    DBClusterAutomatedBackupNotFoundFault | CommonAwsError
  >;
  describeDBClusterBacktracks(
    input: DescribeDBClusterBacktracksMessage,
  ): Effect.Effect<
    DBClusterBacktrackMessage,
    DBClusterBacktrackNotFoundFault | DBClusterNotFoundFault | CommonAwsError
  >;
  describeDBClusterEndpoints(
    input: DescribeDBClusterEndpointsMessage,
  ): Effect.Effect<
    DBClusterEndpointMessage,
    DBClusterNotFoundFault | CommonAwsError
  >;
  describeDBClusterParameterGroups(
    input: DescribeDBClusterParameterGroupsMessage,
  ): Effect.Effect<
    DBClusterParameterGroupsMessage,
    DBParameterGroupNotFoundFault | CommonAwsError
  >;
  describeDBClusterParameters(
    input: DescribeDBClusterParametersMessage,
  ): Effect.Effect<
    DBClusterParameterGroupDetails,
    DBParameterGroupNotFoundFault | CommonAwsError
  >;
  describeDBClusters(
    input: DescribeDBClustersMessage,
  ): Effect.Effect<DBClusterMessage, DBClusterNotFoundFault | CommonAwsError>;
  describeDBClusterSnapshotAttributes(
    input: DescribeDBClusterSnapshotAttributesMessage,
  ): Effect.Effect<
    DescribeDBClusterSnapshotAttributesResult,
    DBClusterSnapshotNotFoundFault | CommonAwsError
  >;
  describeDBClusterSnapshots(
    input: DescribeDBClusterSnapshotsMessage,
  ): Effect.Effect<
    DBClusterSnapshotMessage,
    DBClusterSnapshotNotFoundFault | CommonAwsError
  >;
  describeDBEngineVersions(
    input: DescribeDBEngineVersionsMessage,
  ): Effect.Effect<DBEngineVersionMessage, CommonAwsError>;
  describeDBInstanceAutomatedBackups(
    input: DescribeDBInstanceAutomatedBackupsMessage,
  ): Effect.Effect<
    DBInstanceAutomatedBackupMessage,
    DBInstanceAutomatedBackupNotFoundFault | CommonAwsError
  >;
  describeDBInstances(
    input: DescribeDBInstancesMessage,
  ): Effect.Effect<DBInstanceMessage, DBInstanceNotFoundFault | CommonAwsError>;
  describeDBLogFiles(
    input: DescribeDBLogFilesMessage,
  ): Effect.Effect<
    DescribeDBLogFilesResponse,
    DBInstanceNotFoundFault | DBInstanceNotReadyFault | CommonAwsError
  >;
  describeDBMajorEngineVersions(
    input: DescribeDBMajorEngineVersionsRequest,
  ): Effect.Effect<DescribeDBMajorEngineVersionsResponse, CommonAwsError>;
  describeDBParameterGroups(
    input: DescribeDBParameterGroupsMessage,
  ): Effect.Effect<
    DBParameterGroupsMessage,
    DBParameterGroupNotFoundFault | CommonAwsError
  >;
  describeDBParameters(
    input: DescribeDBParametersMessage,
  ): Effect.Effect<
    DBParameterGroupDetails,
    DBParameterGroupNotFoundFault | CommonAwsError
  >;
  describeDBProxies(
    input: DescribeDBProxiesRequest,
  ): Effect.Effect<
    DescribeDBProxiesResponse,
    DBProxyNotFoundFault | CommonAwsError
  >;
  describeDBProxyEndpoints(
    input: DescribeDBProxyEndpointsRequest,
  ): Effect.Effect<
    DescribeDBProxyEndpointsResponse,
    DBProxyEndpointNotFoundFault | DBProxyNotFoundFault | CommonAwsError
  >;
  describeDBProxyTargetGroups(
    input: DescribeDBProxyTargetGroupsRequest,
  ): Effect.Effect<
    DescribeDBProxyTargetGroupsResponse,
    | DBProxyNotFoundFault
    | DBProxyTargetGroupNotFoundFault
    | InvalidDBProxyStateFault
    | CommonAwsError
  >;
  describeDBProxyTargets(
    input: DescribeDBProxyTargetsRequest,
  ): Effect.Effect<
    DescribeDBProxyTargetsResponse,
    | DBProxyNotFoundFault
    | DBProxyTargetGroupNotFoundFault
    | DBProxyTargetNotFoundFault
    | InvalidDBProxyStateFault
    | CommonAwsError
  >;
  describeDBRecommendations(
    input: DescribeDBRecommendationsMessage,
  ): Effect.Effect<DBRecommendationsMessage, CommonAwsError>;
  describeDBSecurityGroups(
    input: DescribeDBSecurityGroupsMessage,
  ): Effect.Effect<
    DBSecurityGroupMessage,
    DBSecurityGroupNotFoundFault | CommonAwsError
  >;
  describeDBShardGroups(
    input: DescribeDBShardGroupsMessage,
  ): Effect.Effect<
    DescribeDBShardGroupsResponse,
    DBClusterNotFoundFault | DBShardGroupNotFoundFault | CommonAwsError
  >;
  describeDBSnapshotAttributes(
    input: DescribeDBSnapshotAttributesMessage,
  ): Effect.Effect<
    DescribeDBSnapshotAttributesResult,
    DBSnapshotNotFoundFault | CommonAwsError
  >;
  describeDBSnapshots(
    input: DescribeDBSnapshotsMessage,
  ): Effect.Effect<DBSnapshotMessage, DBSnapshotNotFoundFault | CommonAwsError>;
  describeDBSnapshotTenantDatabases(
    input: DescribeDBSnapshotTenantDatabasesMessage,
  ): Effect.Effect<
    DBSnapshotTenantDatabasesMessage,
    DBSnapshotNotFoundFault | CommonAwsError
  >;
  describeDBSubnetGroups(
    input: DescribeDBSubnetGroupsMessage,
  ): Effect.Effect<
    DBSubnetGroupMessage,
    DBSubnetGroupNotFoundFault | CommonAwsError
  >;
  describeEngineDefaultClusterParameters(
    input: DescribeEngineDefaultClusterParametersMessage,
  ): Effect.Effect<
    DescribeEngineDefaultClusterParametersResult,
    CommonAwsError
  >;
  describeEngineDefaultParameters(
    input: DescribeEngineDefaultParametersMessage,
  ): Effect.Effect<DescribeEngineDefaultParametersResult, CommonAwsError>;
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
    SubscriptionNotFoundFault | CommonAwsError
  >;
  describeExportTasks(
    input: DescribeExportTasksMessage,
  ): Effect.Effect<
    ExportTasksMessage,
    ExportTaskNotFoundFault | CommonAwsError
  >;
  describeGlobalClusters(
    input: DescribeGlobalClustersMessage,
  ): Effect.Effect<
    GlobalClustersMessage,
    GlobalClusterNotFoundFault | CommonAwsError
  >;
  describeIntegrations(
    input: DescribeIntegrationsMessage,
  ): Effect.Effect<
    DescribeIntegrationsResponse,
    IntegrationNotFoundFault | CommonAwsError
  >;
  describeOptionGroupOptions(
    input: DescribeOptionGroupOptionsMessage,
  ): Effect.Effect<OptionGroupOptionsMessage, CommonAwsError>;
  describeOptionGroups(
    input: DescribeOptionGroupsMessage,
  ): Effect.Effect<OptionGroups, OptionGroupNotFoundFault | CommonAwsError>;
  describeOrderableDBInstanceOptions(
    input: DescribeOrderableDBInstanceOptionsMessage,
  ): Effect.Effect<OrderableDBInstanceOptionsMessage, CommonAwsError>;
  describePendingMaintenanceActions(
    input: DescribePendingMaintenanceActionsMessage,
  ): Effect.Effect<
    PendingMaintenanceActionsMessage,
    ResourceNotFoundFault | CommonAwsError
  >;
  describeReservedDBInstances(
    input: DescribeReservedDBInstancesMessage,
  ): Effect.Effect<
    ReservedDBInstanceMessage,
    ReservedDBInstanceNotFoundFault | CommonAwsError
  >;
  describeReservedDBInstancesOfferings(
    input: DescribeReservedDBInstancesOfferingsMessage,
  ): Effect.Effect<
    ReservedDBInstancesOfferingMessage,
    ReservedDBInstancesOfferingNotFoundFault | CommonAwsError
  >;
  describeSourceRegions(
    input: DescribeSourceRegionsMessage,
  ): Effect.Effect<SourceRegionMessage, CommonAwsError>;
  describeTenantDatabases(
    input: DescribeTenantDatabasesMessage,
  ): Effect.Effect<
    TenantDatabasesMessage,
    DBInstanceNotFoundFault | CommonAwsError
  >;
  describeValidDBInstanceModifications(
    input: DescribeValidDBInstanceModificationsMessage,
  ): Effect.Effect<
    DescribeValidDBInstanceModificationsResult,
    DBInstanceNotFoundFault | InvalidDBInstanceStateFault | CommonAwsError
  >;
  disableHttpEndpoint(
    input: DisableHttpEndpointRequest,
  ): Effect.Effect<
    DisableHttpEndpointResponse,
    InvalidResourceStateFault | ResourceNotFoundFault | CommonAwsError
  >;
  downloadDBLogFilePortion(
    input: DownloadDBLogFilePortionMessage,
  ): Effect.Effect<
    DownloadDBLogFilePortionDetails,
    | DBInstanceNotFoundFault
    | DBInstanceNotReadyFault
    | DBLogFileNotFoundFault
    | CommonAwsError
  >;
  enableHttpEndpoint(
    input: EnableHttpEndpointRequest,
  ): Effect.Effect<
    EnableHttpEndpointResponse,
    InvalidResourceStateFault | ResourceNotFoundFault | CommonAwsError
  >;
  failoverDBCluster(
    input: FailoverDBClusterMessage,
  ): Effect.Effect<
    FailoverDBClusterResult,
    | DBClusterNotFoundFault
    | InvalidDBClusterStateFault
    | InvalidDBInstanceStateFault
    | CommonAwsError
  >;
  failoverGlobalCluster(
    input: FailoverGlobalClusterMessage,
  ): Effect.Effect<
    FailoverGlobalClusterResult,
    | DBClusterNotFoundFault
    | GlobalClusterNotFoundFault
    | InvalidDBClusterStateFault
    | InvalidGlobalClusterStateFault
    | CommonAwsError
  >;
  listTagsForResource(
    input: ListTagsForResourceMessage,
  ): Effect.Effect<
    TagListMessage,
    | BlueGreenDeploymentNotFoundFault
    | DBClusterNotFoundFault
    | DBInstanceNotFoundFault
    | DBProxyNotFoundFault
    | DBProxyTargetGroupNotFoundFault
    | DBSnapshotNotFoundFault
    | DBSnapshotTenantDatabaseNotFoundFault
    | IntegrationNotFoundFault
    | TenantDatabaseNotFoundFault
    | CommonAwsError
  >;
  modifyActivityStream(
    input: ModifyActivityStreamRequest,
  ): Effect.Effect<
    ModifyActivityStreamResponse,
    | DBInstanceNotFoundFault
    | InvalidDBInstanceStateFault
    | ResourceNotFoundFault
    | CommonAwsError
  >;
  modifyCertificates(
    input: ModifyCertificatesMessage,
  ): Effect.Effect<
    ModifyCertificatesResult,
    CertificateNotFoundFault | CommonAwsError
  >;
  modifyCurrentDBClusterCapacity(
    input: ModifyCurrentDBClusterCapacityMessage,
  ): Effect.Effect<
    DBClusterCapacityInfo,
    | DBClusterNotFoundFault
    | InvalidDBClusterCapacityFault
    | InvalidDBClusterStateFault
    | CommonAwsError
  >;
  modifyCustomDBEngineVersion(
    input: ModifyCustomDBEngineVersionMessage,
  ): Effect.Effect<
    DBEngineVersion,
    | CustomDBEngineVersionNotFoundFault
    | InvalidCustomDBEngineVersionStateFault
    | CommonAwsError
  >;
  modifyDBCluster(
    input: ModifyDBClusterMessage,
  ): Effect.Effect<
    ModifyDBClusterResult,
    | DBClusterAlreadyExistsFault
    | DBClusterNotFoundFault
    | DBClusterParameterGroupNotFoundFault
    | DBInstanceAlreadyExistsFault
    | DBSubnetGroupNotFoundFault
    | DomainNotFoundFault
    | InvalidDBClusterStateFault
    | InvalidDBInstanceStateFault
    | InvalidDBSecurityGroupStateFault
    | InvalidDBSubnetGroupStateFault
    | InvalidSubnet
    | InvalidVPCNetworkStateFault
    | OptionGroupNotFoundFault
    | StorageQuotaExceededFault
    | StorageTypeNotAvailableFault
    | CommonAwsError
  >;
  modifyDBClusterEndpoint(
    input: ModifyDBClusterEndpointMessage,
  ): Effect.Effect<
    DBClusterEndpoint,
    | DBClusterEndpointNotFoundFault
    | DBInstanceNotFoundFault
    | InvalidDBClusterEndpointStateFault
    | InvalidDBClusterStateFault
    | InvalidDBInstanceStateFault
    | CommonAwsError
  >;
  modifyDBClusterParameterGroup(
    input: ModifyDBClusterParameterGroupMessage,
  ): Effect.Effect<
    DBClusterParameterGroupNameMessage,
    | DBParameterGroupNotFoundFault
    | InvalidDBParameterGroupStateFault
    | CommonAwsError
  >;
  modifyDBClusterSnapshotAttribute(
    input: ModifyDBClusterSnapshotAttributeMessage,
  ): Effect.Effect<
    ModifyDBClusterSnapshotAttributeResult,
    | DBClusterSnapshotNotFoundFault
    | InvalidDBClusterSnapshotStateFault
    | SharedSnapshotQuotaExceededFault
    | CommonAwsError
  >;
  modifyDBInstance(
    input: ModifyDBInstanceMessage,
  ): Effect.Effect<
    ModifyDBInstanceResult,
    | AuthorizationNotFoundFault
    | BackupPolicyNotFoundFault
    | CertificateNotFoundFault
    | DBInstanceAlreadyExistsFault
    | DBInstanceNotFoundFault
    | DBParameterGroupNotFoundFault
    | DBSecurityGroupNotFoundFault
    | DBUpgradeDependencyFailureFault
    | DomainNotFoundFault
    | InsufficientDBInstanceCapacityFault
    | InvalidDBClusterStateFault
    | InvalidDBInstanceStateFault
    | InvalidDBSecurityGroupStateFault
    | InvalidVPCNetworkStateFault
    | KMSKeyNotAccessibleFault
    | NetworkTypeNotSupported
    | OptionGroupNotFoundFault
    | ProvisionedIopsNotAvailableInAZFault
    | StorageQuotaExceededFault
    | StorageTypeNotSupportedFault
    | TenantDatabaseQuotaExceededFault
    | CommonAwsError
  >;
  modifyDBParameterGroup(
    input: ModifyDBParameterGroupMessage,
  ): Effect.Effect<
    DBParameterGroupNameMessage,
    | DBParameterGroupNotFoundFault
    | InvalidDBParameterGroupStateFault
    | CommonAwsError
  >;
  modifyDBProxy(
    input: ModifyDBProxyRequest,
  ): Effect.Effect<
    ModifyDBProxyResponse,
    | DBProxyAlreadyExistsFault
    | DBProxyNotFoundFault
    | InvalidDBProxyStateFault
    | CommonAwsError
  >;
  modifyDBProxyEndpoint(
    input: ModifyDBProxyEndpointRequest,
  ): Effect.Effect<
    ModifyDBProxyEndpointResponse,
    | DBProxyEndpointAlreadyExistsFault
    | DBProxyEndpointNotFoundFault
    | InvalidDBProxyEndpointStateFault
    | InvalidDBProxyStateFault
    | CommonAwsError
  >;
  modifyDBProxyTargetGroup(
    input: ModifyDBProxyTargetGroupRequest,
  ): Effect.Effect<
    ModifyDBProxyTargetGroupResponse,
    | DBProxyNotFoundFault
    | DBProxyTargetGroupNotFoundFault
    | InvalidDBProxyStateFault
    | CommonAwsError
  >;
  modifyDBRecommendation(
    input: ModifyDBRecommendationMessage,
  ): Effect.Effect<DBRecommendationMessage, CommonAwsError>;
  modifyDBShardGroup(
    input: ModifyDBShardGroupMessage,
  ): Effect.Effect<
    DBShardGroup,
    | DBShardGroupAlreadyExistsFault
    | DBShardGroupNotFoundFault
    | InvalidDBClusterStateFault
    | CommonAwsError
  >;
  modifyDBSnapshot(
    input: ModifyDBSnapshotMessage,
  ): Effect.Effect<
    ModifyDBSnapshotResult,
    DBSnapshotNotFoundFault | CommonAwsError
  >;
  modifyDBSnapshotAttribute(
    input: ModifyDBSnapshotAttributeMessage,
  ): Effect.Effect<
    ModifyDBSnapshotAttributeResult,
    | DBSnapshotNotFoundFault
    | InvalidDBSnapshotStateFault
    | SharedSnapshotQuotaExceededFault
    | CommonAwsError
  >;
  modifyDBSubnetGroup(
    input: ModifyDBSubnetGroupMessage,
  ): Effect.Effect<
    ModifyDBSubnetGroupResult,
    | DBSubnetGroupDoesNotCoverEnoughAZs
    | DBSubnetGroupNotFoundFault
    | DBSubnetQuotaExceededFault
    | InvalidSubnet
    | SubnetAlreadyInUse
    | CommonAwsError
  >;
  modifyEventSubscription(
    input: ModifyEventSubscriptionMessage,
  ): Effect.Effect<
    ModifyEventSubscriptionResult,
    | EventSubscriptionQuotaExceededFault
    | SNSInvalidTopicFault
    | SNSNoAuthorizationFault
    | SNSTopicArnNotFoundFault
    | SubscriptionCategoryNotFoundFault
    | SubscriptionNotFoundFault
    | CommonAwsError
  >;
  modifyGlobalCluster(
    input: ModifyGlobalClusterMessage,
  ): Effect.Effect<
    ModifyGlobalClusterResult,
    | GlobalClusterAlreadyExistsFault
    | GlobalClusterNotFoundFault
    | InvalidDBClusterStateFault
    | InvalidDBInstanceStateFault
    | InvalidGlobalClusterStateFault
    | CommonAwsError
  >;
  modifyIntegration(
    input: ModifyIntegrationMessage,
  ): Effect.Effect<
    Integration,
    | IntegrationConflictOperationFault
    | IntegrationNotFoundFault
    | InvalidIntegrationStateFault
    | CommonAwsError
  >;
  modifyOptionGroup(
    input: ModifyOptionGroupMessage,
  ): Effect.Effect<
    ModifyOptionGroupResult,
    InvalidOptionGroupStateFault | OptionGroupNotFoundFault | CommonAwsError
  >;
  modifyTenantDatabase(
    input: ModifyTenantDatabaseMessage,
  ): Effect.Effect<
    ModifyTenantDatabaseResult,
    | DBInstanceNotFoundFault
    | InvalidDBInstanceStateFault
    | KMSKeyNotAccessibleFault
    | TenantDatabaseAlreadyExistsFault
    | TenantDatabaseNotFoundFault
    | CommonAwsError
  >;
  promoteReadReplica(
    input: PromoteReadReplicaMessage,
  ): Effect.Effect<
    PromoteReadReplicaResult,
    DBInstanceNotFoundFault | InvalidDBInstanceStateFault | CommonAwsError
  >;
  promoteReadReplicaDBCluster(
    input: PromoteReadReplicaDBClusterMessage,
  ): Effect.Effect<
    PromoteReadReplicaDBClusterResult,
    DBClusterNotFoundFault | InvalidDBClusterStateFault | CommonAwsError
  >;
  purchaseReservedDBInstancesOffering(
    input: PurchaseReservedDBInstancesOfferingMessage,
  ): Effect.Effect<
    PurchaseReservedDBInstancesOfferingResult,
    | ReservedDBInstanceAlreadyExistsFault
    | ReservedDBInstanceQuotaExceededFault
    | ReservedDBInstancesOfferingNotFoundFault
    | CommonAwsError
  >;
  rebootDBCluster(
    input: RebootDBClusterMessage,
  ): Effect.Effect<
    RebootDBClusterResult,
    | DBClusterNotFoundFault
    | InvalidDBClusterStateFault
    | InvalidDBInstanceStateFault
    | CommonAwsError
  >;
  rebootDBInstance(
    input: RebootDBInstanceMessage,
  ): Effect.Effect<
    RebootDBInstanceResult,
    DBInstanceNotFoundFault | InvalidDBInstanceStateFault | CommonAwsError
  >;
  rebootDBShardGroup(
    input: RebootDBShardGroupMessage,
  ): Effect.Effect<
    DBShardGroup,
    DBShardGroupNotFoundFault | InvalidDBShardGroupStateFault | CommonAwsError
  >;
  registerDBProxyTargets(
    input: RegisterDBProxyTargetsRequest,
  ): Effect.Effect<
    RegisterDBProxyTargetsResponse,
    | DBClusterNotFoundFault
    | DBInstanceNotFoundFault
    | DBProxyNotFoundFault
    | DBProxyTargetAlreadyRegisteredFault
    | DBProxyTargetGroupNotFoundFault
    | InsufficientAvailableIPsInSubnetFault
    | InvalidDBClusterStateFault
    | InvalidDBInstanceStateFault
    | InvalidDBProxyStateFault
    | CommonAwsError
  >;
  removeFromGlobalCluster(
    input: RemoveFromGlobalClusterMessage,
  ): Effect.Effect<
    RemoveFromGlobalClusterResult,
    | DBClusterNotFoundFault
    | GlobalClusterNotFoundFault
    | InvalidGlobalClusterStateFault
    | CommonAwsError
  >;
  removeRoleFromDBCluster(
    input: RemoveRoleFromDBClusterMessage,
  ): Effect.Effect<
    {},
    | DBClusterNotFoundFault
    | DBClusterRoleNotFoundFault
    | InvalidDBClusterStateFault
    | CommonAwsError
  >;
  removeRoleFromDBInstance(
    input: RemoveRoleFromDBInstanceMessage,
  ): Effect.Effect<
    {},
    | DBInstanceNotFoundFault
    | DBInstanceRoleNotFoundFault
    | InvalidDBInstanceStateFault
    | CommonAwsError
  >;
  removeSourceIdentifierFromSubscription(
    input: RemoveSourceIdentifierFromSubscriptionMessage,
  ): Effect.Effect<
    RemoveSourceIdentifierFromSubscriptionResult,
    SourceNotFoundFault | SubscriptionNotFoundFault | CommonAwsError
  >;
  removeTagsFromResource(
    input: RemoveTagsFromResourceMessage,
  ): Effect.Effect<
    {},
    | BlueGreenDeploymentNotFoundFault
    | DBClusterNotFoundFault
    | DBInstanceNotFoundFault
    | DBProxyNotFoundFault
    | DBProxyTargetGroupNotFoundFault
    | DBSnapshotNotFoundFault
    | DBSnapshotTenantDatabaseNotFoundFault
    | IntegrationNotFoundFault
    | TenantDatabaseNotFoundFault
    | CommonAwsError
  >;
  resetDBClusterParameterGroup(
    input: ResetDBClusterParameterGroupMessage,
  ): Effect.Effect<
    DBClusterParameterGroupNameMessage,
    | DBParameterGroupNotFoundFault
    | InvalidDBParameterGroupStateFault
    | CommonAwsError
  >;
  resetDBParameterGroup(
    input: ResetDBParameterGroupMessage,
  ): Effect.Effect<
    DBParameterGroupNameMessage,
    | DBParameterGroupNotFoundFault
    | InvalidDBParameterGroupStateFault
    | CommonAwsError
  >;
  restoreDBClusterFromS3(
    input: RestoreDBClusterFromS3Message,
  ): Effect.Effect<
    RestoreDBClusterFromS3Result,
    | DBClusterAlreadyExistsFault
    | DBClusterNotFoundFault
    | DBClusterParameterGroupNotFoundFault
    | DBClusterQuotaExceededFault
    | DBSubnetGroupNotFoundFault
    | DomainNotFoundFault
    | InsufficientStorageClusterCapacityFault
    | InvalidDBClusterStateFault
    | InvalidDBSubnetGroupStateFault
    | InvalidS3BucketFault
    | InvalidSubnet
    | InvalidVPCNetworkStateFault
    | KMSKeyNotAccessibleFault
    | StorageQuotaExceededFault
    | StorageTypeNotSupportedFault
    | CommonAwsError
  >;
  restoreDBClusterFromSnapshot(
    input: RestoreDBClusterFromSnapshotMessage,
  ): Effect.Effect<
    RestoreDBClusterFromSnapshotResult,
    | DBClusterAlreadyExistsFault
    | DBClusterParameterGroupNotFoundFault
    | DBClusterQuotaExceededFault
    | DBClusterSnapshotNotFoundFault
    | DBSnapshotNotFoundFault
    | DBSubnetGroupDoesNotCoverEnoughAZs
    | DBSubnetGroupNotFoundFault
    | DomainNotFoundFault
    | InsufficientDBClusterCapacityFault
    | InsufficientDBInstanceCapacityFault
    | InsufficientStorageClusterCapacityFault
    | InvalidDBClusterSnapshotStateFault
    | InvalidDBInstanceStateFault
    | InvalidDBSnapshotStateFault
    | InvalidRestoreFault
    | InvalidSubnet
    | InvalidVPCNetworkStateFault
    | KMSKeyNotAccessibleFault
    | OptionGroupNotFoundFault
    | StorageQuotaExceededFault
    | CommonAwsError
  >;
  restoreDBClusterToPointInTime(
    input: RestoreDBClusterToPointInTimeMessage,
  ): Effect.Effect<
    RestoreDBClusterToPointInTimeResult,
    | DBClusterAlreadyExistsFault
    | DBClusterAutomatedBackupNotFoundFault
    | DBClusterNotFoundFault
    | DBClusterParameterGroupNotFoundFault
    | DBClusterQuotaExceededFault
    | DBClusterSnapshotNotFoundFault
    | DBSubnetGroupNotFoundFault
    | DomainNotFoundFault
    | InsufficientDBClusterCapacityFault
    | InsufficientDBInstanceCapacityFault
    | InsufficientStorageClusterCapacityFault
    | InvalidDBClusterSnapshotStateFault
    | InvalidDBClusterStateFault
    | InvalidDBSnapshotStateFault
    | InvalidRestoreFault
    | InvalidSubnet
    | InvalidVPCNetworkStateFault
    | KMSKeyNotAccessibleFault
    | OptionGroupNotFoundFault
    | StorageQuotaExceededFault
    | CommonAwsError
  >;
  restoreDBInstanceFromDBSnapshot(
    input: RestoreDBInstanceFromDBSnapshotMessage,
  ): Effect.Effect<
    RestoreDBInstanceFromDBSnapshotResult,
    | AuthorizationNotFoundFault
    | BackupPolicyNotFoundFault
    | CertificateNotFoundFault
    | DBClusterSnapshotNotFoundFault
    | DBInstanceAlreadyExistsFault
    | DBParameterGroupNotFoundFault
    | DBSecurityGroupNotFoundFault
    | DBSnapshotNotFoundFault
    | DBSubnetGroupDoesNotCoverEnoughAZs
    | DBSubnetGroupNotFoundFault
    | DomainNotFoundFault
    | InstanceQuotaExceededFault
    | InsufficientDBInstanceCapacityFault
    | InvalidDBSnapshotStateFault
    | InvalidRestoreFault
    | InvalidSubnet
    | InvalidVPCNetworkStateFault
    | KMSKeyNotAccessibleFault
    | NetworkTypeNotSupported
    | OptionGroupNotFoundFault
    | ProvisionedIopsNotAvailableInAZFault
    | StorageQuotaExceededFault
    | StorageTypeNotSupportedFault
    | TenantDatabaseQuotaExceededFault
    | CommonAwsError
  >;
  restoreDBInstanceFromS3(
    input: RestoreDBInstanceFromS3Message,
  ): Effect.Effect<
    RestoreDBInstanceFromS3Result,
    | AuthorizationNotFoundFault
    | BackupPolicyNotFoundFault
    | CertificateNotFoundFault
    | DBInstanceAlreadyExistsFault
    | DBParameterGroupNotFoundFault
    | DBSecurityGroupNotFoundFault
    | DBSubnetGroupDoesNotCoverEnoughAZs
    | DBSubnetGroupNotFoundFault
    | InstanceQuotaExceededFault
    | InsufficientDBInstanceCapacityFault
    | InvalidS3BucketFault
    | InvalidSubnet
    | InvalidVPCNetworkStateFault
    | KMSKeyNotAccessibleFault
    | NetworkTypeNotSupported
    | OptionGroupNotFoundFault
    | ProvisionedIopsNotAvailableInAZFault
    | StorageQuotaExceededFault
    | StorageTypeNotSupportedFault
    | CommonAwsError
  >;
  restoreDBInstanceToPointInTime(
    input: RestoreDBInstanceToPointInTimeMessage,
  ): Effect.Effect<
    RestoreDBInstanceToPointInTimeResult,
    | AuthorizationNotFoundFault
    | BackupPolicyNotFoundFault
    | CertificateNotFoundFault
    | DBInstanceAlreadyExistsFault
    | DBInstanceAutomatedBackupNotFoundFault
    | DBInstanceNotFoundFault
    | DBParameterGroupNotFoundFault
    | DBSecurityGroupNotFoundFault
    | DBSubnetGroupDoesNotCoverEnoughAZs
    | DBSubnetGroupNotFoundFault
    | DomainNotFoundFault
    | InstanceQuotaExceededFault
    | InsufficientDBInstanceCapacityFault
    | InvalidDBInstanceStateFault
    | InvalidRestoreFault
    | InvalidSubnet
    | InvalidVPCNetworkStateFault
    | KMSKeyNotAccessibleFault
    | NetworkTypeNotSupported
    | OptionGroupNotFoundFault
    | PointInTimeRestoreNotEnabledFault
    | ProvisionedIopsNotAvailableInAZFault
    | StorageQuotaExceededFault
    | StorageTypeNotSupportedFault
    | TenantDatabaseQuotaExceededFault
    | CommonAwsError
  >;
  revokeDBSecurityGroupIngress(
    input: RevokeDBSecurityGroupIngressMessage,
  ): Effect.Effect<
    RevokeDBSecurityGroupIngressResult,
    | AuthorizationNotFoundFault
    | DBSecurityGroupNotFoundFault
    | InvalidDBSecurityGroupStateFault
    | CommonAwsError
  >;
  startActivityStream(
    input: StartActivityStreamRequest,
  ): Effect.Effect<
    StartActivityStreamResponse,
    | DBClusterNotFoundFault
    | DBInstanceNotFoundFault
    | InvalidDBClusterStateFault
    | InvalidDBInstanceStateFault
    | KMSKeyNotAccessibleFault
    | ResourceNotFoundFault
    | CommonAwsError
  >;
  startDBCluster(
    input: StartDBClusterMessage,
  ): Effect.Effect<
    StartDBClusterResult,
    | DBClusterNotFoundFault
    | InvalidDBClusterStateFault
    | InvalidDBInstanceStateFault
    | InvalidDBShardGroupStateFault
    | CommonAwsError
  >;
  startDBInstance(
    input: StartDBInstanceMessage,
  ): Effect.Effect<
    StartDBInstanceResult,
    | AuthorizationNotFoundFault
    | DBClusterNotFoundFault
    | DBInstanceNotFoundFault
    | DBSubnetGroupDoesNotCoverEnoughAZs
    | DBSubnetGroupNotFoundFault
    | InsufficientDBInstanceCapacityFault
    | InvalidDBClusterStateFault
    | InvalidDBInstanceStateFault
    | InvalidSubnet
    | InvalidVPCNetworkStateFault
    | KMSKeyNotAccessibleFault
    | CommonAwsError
  >;
  startDBInstanceAutomatedBackupsReplication(
    input: StartDBInstanceAutomatedBackupsReplicationMessage,
  ): Effect.Effect<
    StartDBInstanceAutomatedBackupsReplicationResult,
    | DBInstanceAutomatedBackupQuotaExceededFault
    | DBInstanceNotFoundFault
    | InvalidDBInstanceStateFault
    | KMSKeyNotAccessibleFault
    | StorageTypeNotSupportedFault
    | CommonAwsError
  >;
  startExportTask(
    input: StartExportTaskMessage,
  ): Effect.Effect<
    ExportTask,
    | DBClusterNotFoundFault
    | DBClusterSnapshotNotFoundFault
    | DBSnapshotNotFoundFault
    | ExportTaskAlreadyExistsFault
    | IamRoleMissingPermissionsFault
    | IamRoleNotFoundFault
    | InvalidExportOnlyFault
    | InvalidExportSourceStateFault
    | InvalidS3BucketFault
    | KMSKeyNotAccessibleFault
    | CommonAwsError
  >;
  stopActivityStream(
    input: StopActivityStreamRequest,
  ): Effect.Effect<
    StopActivityStreamResponse,
    | DBClusterNotFoundFault
    | DBInstanceNotFoundFault
    | InvalidDBClusterStateFault
    | InvalidDBInstanceStateFault
    | ResourceNotFoundFault
    | CommonAwsError
  >;
  stopDBCluster(
    input: StopDBClusterMessage,
  ): Effect.Effect<
    StopDBClusterResult,
    | DBClusterNotFoundFault
    | InvalidDBClusterStateFault
    | InvalidDBInstanceStateFault
    | InvalidDBShardGroupStateFault
    | CommonAwsError
  >;
  stopDBInstance(
    input: StopDBInstanceMessage,
  ): Effect.Effect<
    StopDBInstanceResult,
    | DBInstanceNotFoundFault
    | DBSnapshotAlreadyExistsFault
    | InvalidDBClusterStateFault
    | InvalidDBInstanceStateFault
    | SnapshotQuotaExceededFault
    | CommonAwsError
  >;
  stopDBInstanceAutomatedBackupsReplication(
    input: StopDBInstanceAutomatedBackupsReplicationMessage,
  ): Effect.Effect<
    StopDBInstanceAutomatedBackupsReplicationResult,
    DBInstanceNotFoundFault | InvalidDBInstanceStateFault | CommonAwsError
  >;
  switchoverBlueGreenDeployment(
    input: SwitchoverBlueGreenDeploymentRequest,
  ): Effect.Effect<
    SwitchoverBlueGreenDeploymentResponse,
    | BlueGreenDeploymentNotFoundFault
    | InvalidBlueGreenDeploymentStateFault
    | CommonAwsError
  >;
  switchoverGlobalCluster(
    input: SwitchoverGlobalClusterMessage,
  ): Effect.Effect<
    SwitchoverGlobalClusterResult,
    | DBClusterNotFoundFault
    | GlobalClusterNotFoundFault
    | InvalidDBClusterStateFault
    | InvalidGlobalClusterStateFault
    | CommonAwsError
  >;
  switchoverReadReplica(
    input: SwitchoverReadReplicaMessage,
  ): Effect.Effect<
    SwitchoverReadReplicaResult,
    DBInstanceNotFoundFault | InvalidDBInstanceStateFault | CommonAwsError
  >;
}

export type Rds = AmazonRDSv19;

export interface AccountAttributesMessage {
  AccountQuotas?: Array<AccountQuota>;
}
export interface AccountQuota {
  AccountQuotaName?: string;
  Used?: number;
  Max?: number;
}
export type AccountQuotaList = Array<AccountQuota>;
export type ActivityStreamMode = "sync" | "async";
export type ActivityStreamModeList = Array<string>;
export type ActivityStreamPolicyStatus =
  | "locked"
  | "unlocked"
  | "locking_policy"
  | "unlocking_policy";
export type ActivityStreamStatus =
  | "stopped"
  | "starting"
  | "started"
  | "stopping";
export interface AddRoleToDBClusterMessage {
  DBClusterIdentifier: string;
  RoleArn: string;
  FeatureName?: string;
}
export interface AddRoleToDBInstanceMessage {
  DBInstanceIdentifier: string;
  RoleArn: string;
  FeatureName: string;
}
export interface AddSourceIdentifierToSubscriptionMessage {
  SubscriptionName: string;
  SourceIdentifier: string;
}
export interface AddSourceIdentifierToSubscriptionResult {
  EventSubscription?: EventSubscription;
}
export interface AddTagsToResourceMessage {
  ResourceName: string;
  Tags: Array<Tag>;
}
export type ApplyMethod = "immediate" | "pending_reboot";
export interface ApplyPendingMaintenanceActionMessage {
  ResourceIdentifier: string;
  ApplyAction: string;
  OptInType: string;
}
export interface ApplyPendingMaintenanceActionResult {
  ResourcePendingMaintenanceActions?: ResourcePendingMaintenanceActions;
}
export type Arn = string;

export type AttributeValueList = Array<string>;
export type AuditPolicyState = "LOCKED_POLICY" | "UNLOCKED_POLICY";
export declare class AuthorizationAlreadyExistsFault extends Data.TaggedError(
  "AuthorizationAlreadyExistsFault",
)<{
  readonly message?: string;
}> {}
export declare class AuthorizationNotFoundFault extends Data.TaggedError(
  "AuthorizationNotFoundFault",
)<{
  readonly message?: string;
}> {}
export declare class AuthorizationQuotaExceededFault extends Data.TaggedError(
  "AuthorizationQuotaExceededFault",
)<{
  readonly message?: string;
}> {}
export interface AuthorizeDBSecurityGroupIngressMessage {
  DBSecurityGroupName: string;
  CIDRIP?: string;
  EC2SecurityGroupName?: string;
  EC2SecurityGroupId?: string;
  EC2SecurityGroupOwnerId?: string;
}
export interface AuthorizeDBSecurityGroupIngressResult {
  DBSecurityGroup?: DBSecurityGroup;
}
export type AuthScheme = "SECRETS";
export type AutomationMode = "FULL" | "ALL_PAUSED";
export interface AvailabilityZone {
  Name?: string;
}
export type AvailabilityZoneList = Array<AvailabilityZone>;
export type AvailabilityZones = Array<string>;
export interface AvailableProcessorFeature {
  Name?: string;
  DefaultValue?: string;
  AllowedValues?: string;
}
export type AvailableProcessorFeatureList = Array<AvailableProcessorFeature>;
export type AwsBackupRecoveryPointArn = string;

export interface BacktrackDBClusterMessage {
  DBClusterIdentifier: string;
  BacktrackTo: Date | string;
  Force?: boolean;
  UseEarliestTimeOnPointInTimeUnavailable?: boolean;
}
export declare class BackupPolicyNotFoundFault extends Data.TaggedError(
  "BackupPolicyNotFoundFault",
)<{
  readonly message?: string;
}> {}
export interface BlueGreenDeployment {
  BlueGreenDeploymentIdentifier?: string;
  BlueGreenDeploymentName?: string;
  Source?: string;
  Target?: string;
  SwitchoverDetails?: Array<SwitchoverDetail>;
  Tasks?: Array<BlueGreenDeploymentTask>;
  Status?: string;
  StatusDetails?: string;
  CreateTime?: Date | string;
  DeleteTime?: Date | string;
  TagList?: Array<Tag>;
}
export declare class BlueGreenDeploymentAlreadyExistsFault extends Data.TaggedError(
  "BlueGreenDeploymentAlreadyExistsFault",
)<{
  readonly message?: string;
}> {}
export type BlueGreenDeploymentIdentifier = string;

export type BlueGreenDeploymentList = Array<BlueGreenDeployment>;
export type BlueGreenDeploymentName = string;

export declare class BlueGreenDeploymentNotFoundFault extends Data.TaggedError(
  "BlueGreenDeploymentNotFoundFault",
)<{
  readonly message?: string;
}> {}
export type BlueGreenDeploymentStatus = string;

export type BlueGreenDeploymentStatusDetails = string;

export interface BlueGreenDeploymentTask {
  Name?: string;
  Status?: string;
}
export type BlueGreenDeploymentTaskList = Array<BlueGreenDeploymentTask>;
export type BlueGreenDeploymentTaskName = string;

export type BlueGreenDeploymentTaskStatus = string;

export type BooleanOptional = boolean;

export type BucketName = string;

export type CACertificateIdentifiersList = Array<string>;
export interface CancelExportTaskMessage {
  ExportTaskIdentifier: string;
}
export interface Certificate {
  CertificateIdentifier?: string;
  CertificateType?: string;
  Thumbprint?: string;
  ValidFrom?: Date | string;
  ValidTill?: Date | string;
  CertificateArn?: string;
  CustomerOverride?: boolean;
  CustomerOverrideValidTill?: Date | string;
}
export interface CertificateDetails {
  CAIdentifier?: string;
  ValidTill?: Date | string;
}
export type CertificateList = Array<Certificate>;
export interface CertificateMessage {
  DefaultCertificateForNewLaunches?: string;
  Certificates?: Array<Certificate>;
  Marker?: string;
}
export declare class CertificateNotFoundFault extends Data.TaggedError(
  "CertificateNotFoundFault",
)<{
  readonly message?: string;
}> {}
export interface CharacterSet {
  CharacterSetName?: string;
  CharacterSetDescription?: string;
}
export type ClientPasswordAuthType =
  | "MYSQL_NATIVE_PASSWORD"
  | "MYSQL_CACHING_SHA2_PASSWORD"
  | "POSTGRES_SCRAM_SHA_256"
  | "POSTGRES_MD5"
  | "SQL_SERVER_AUTHENTICATION";
export interface CloudwatchLogsExportConfiguration {
  EnableLogTypes?: Array<string>;
  DisableLogTypes?: Array<string>;
}
export interface ClusterPendingModifiedValues {
  PendingCloudwatchLogsExports?: PendingCloudwatchLogsExports;
  DBClusterIdentifier?: string;
  MasterUserPassword?: string;
  IAMDatabaseAuthenticationEnabled?: boolean;
  EngineVersion?: string;
  BackupRetentionPeriod?: number;
  AllocatedStorage?: number;
  RdsCustomClusterConfiguration?: RdsCustomClusterConfiguration;
  Iops?: number;
  StorageType?: string;
  CertificateDetails?: CertificateDetails;
}
export type ClusterScalabilityType = "STANDARD" | "LIMITLESS";
export interface ConnectionPoolConfiguration {
  MaxConnectionsPercent?: number;
  MaxIdleConnectionsPercent?: number;
  ConnectionBorrowTimeout?: number;
  SessionPinningFilters?: Array<string>;
  InitQuery?: string;
}
export interface ConnectionPoolConfigurationInfo {
  MaxConnectionsPercent?: number;
  MaxIdleConnectionsPercent?: number;
  ConnectionBorrowTimeout?: number;
  SessionPinningFilters?: Array<string>;
  InitQuery?: string;
}
export interface ContextAttribute {
  Key?: string;
  Value?: string;
}
export type ContextAttributeList = Array<ContextAttribute>;
export interface CopyDBClusterParameterGroupMessage {
  SourceDBClusterParameterGroupIdentifier: string;
  TargetDBClusterParameterGroupIdentifier: string;
  TargetDBClusterParameterGroupDescription: string;
  Tags?: Array<Tag>;
}
export interface CopyDBClusterParameterGroupResult {
  DBClusterParameterGroup?: DBClusterParameterGroup;
}
export interface CopyDBClusterSnapshotMessage {
  SourceDBClusterSnapshotIdentifier: string;
  TargetDBClusterSnapshotIdentifier: string;
  KmsKeyId?: string;
  PreSignedUrl?: string;
  CopyTags?: boolean;
  Tags?: Array<Tag>;
}
export interface CopyDBClusterSnapshotResult {
  DBClusterSnapshot?: DBClusterSnapshot;
}
export interface CopyDBParameterGroupMessage {
  SourceDBParameterGroupIdentifier: string;
  TargetDBParameterGroupIdentifier: string;
  TargetDBParameterGroupDescription: string;
  Tags?: Array<Tag>;
}
export interface CopyDBParameterGroupResult {
  DBParameterGroup?: DBParameterGroup;
}
export interface CopyDBSnapshotMessage {
  SourceDBSnapshotIdentifier: string;
  TargetDBSnapshotIdentifier: string;
  KmsKeyId?: string;
  Tags?: Array<Tag>;
  CopyTags?: boolean;
  PreSignedUrl?: string;
  OptionGroupName?: string;
  TargetCustomAvailabilityZone?: string;
  CopyOptionGroup?: boolean;
  SnapshotAvailabilityZone?: string;
  SnapshotTarget?: string;
}
export interface CopyDBSnapshotResult {
  DBSnapshot?: DBSnapshot;
}
export interface CopyOptionGroupMessage {
  SourceOptionGroupIdentifier: string;
  TargetOptionGroupIdentifier: string;
  TargetOptionGroupDescription: string;
  Tags?: Array<Tag>;
}
export interface CopyOptionGroupResult {
  OptionGroup?: OptionGroup;
}
export interface CreateBlueGreenDeploymentRequest {
  BlueGreenDeploymentName: string;
  Source: string;
  TargetEngineVersion?: string;
  TargetDBParameterGroupName?: string;
  TargetDBClusterParameterGroupName?: string;
  Tags?: Array<Tag>;
  TargetDBInstanceClass?: string;
  UpgradeTargetStorageConfig?: boolean;
  TargetIops?: number;
  TargetStorageType?: string;
  TargetAllocatedStorage?: number;
  TargetStorageThroughput?: number;
}
export interface CreateBlueGreenDeploymentResponse {
  BlueGreenDeployment?: BlueGreenDeployment;
}
export declare class CreateCustomDBEngineVersionFault extends Data.TaggedError(
  "CreateCustomDBEngineVersionFault",
)<{
  readonly message?: string;
}> {}
export interface CreateCustomDBEngineVersionMessage {
  Engine: string;
  EngineVersion: string;
  DatabaseInstallationFilesS3BucketName?: string;
  DatabaseInstallationFilesS3Prefix?: string;
  ImageId?: string;
  KMSKeyId?: string;
  Description?: string;
  Manifest?: string;
  Tags?: Array<Tag>;
  SourceCustomDbEngineVersionIdentifier?: string;
  UseAwsProvidedLatestImage?: boolean;
}
export interface CreateDBClusterEndpointMessage {
  DBClusterIdentifier: string;
  DBClusterEndpointIdentifier: string;
  EndpointType: string;
  StaticMembers?: Array<string>;
  ExcludedMembers?: Array<string>;
  Tags?: Array<Tag>;
}
export interface CreateDBClusterMessage {
  AvailabilityZones?: Array<string>;
  BackupRetentionPeriod?: number;
  CharacterSetName?: string;
  DatabaseName?: string;
  DBClusterIdentifier: string;
  DBClusterParameterGroupName?: string;
  VpcSecurityGroupIds?: Array<string>;
  DBSubnetGroupName?: string;
  Engine: string;
  EngineVersion?: string;
  Port?: number;
  MasterUsername?: string;
  MasterUserPassword?: string;
  OptionGroupName?: string;
  PreferredBackupWindow?: string;
  PreferredMaintenanceWindow?: string;
  ReplicationSourceIdentifier?: string;
  Tags?: Array<Tag>;
  StorageEncrypted?: boolean;
  KmsKeyId?: string;
  PreSignedUrl?: string;
  EnableIAMDatabaseAuthentication?: boolean;
  BacktrackWindow?: number;
  EnableCloudwatchLogsExports?: Array<string>;
  EngineMode?: string;
  ScalingConfiguration?: ScalingConfiguration;
  RdsCustomClusterConfiguration?: RdsCustomClusterConfiguration;
  DeletionProtection?: boolean;
  GlobalClusterIdentifier?: string;
  EnableHttpEndpoint?: boolean;
  CopyTagsToSnapshot?: boolean;
  Domain?: string;
  DomainIAMRoleName?: string;
  EnableGlobalWriteForwarding?: boolean;
  DBClusterInstanceClass?: string;
  AllocatedStorage?: number;
  StorageType?: string;
  Iops?: number;
  PubliclyAccessible?: boolean;
  AutoMinorVersionUpgrade?: boolean;
  MonitoringInterval?: number;
  MonitoringRoleArn?: string;
  DatabaseInsightsMode?: DatabaseInsightsMode;
  EnablePerformanceInsights?: boolean;
  PerformanceInsightsKMSKeyId?: string;
  PerformanceInsightsRetentionPeriod?: number;
  EnableLimitlessDatabase?: boolean;
  ServerlessV2ScalingConfiguration?: ServerlessV2ScalingConfiguration;
  NetworkType?: string;
  ClusterScalabilityType?: ClusterScalabilityType;
  DBSystemId?: string;
  ManageMasterUserPassword?: boolean;
  MasterUserSecretKmsKeyId?: string;
  EnableLocalWriteForwarding?: boolean;
  CACertificateIdentifier?: string;
  EngineLifecycleSupport?: string;
}
export interface CreateDBClusterParameterGroupMessage {
  DBClusterParameterGroupName: string;
  DBParameterGroupFamily: string;
  Description: string;
  Tags?: Array<Tag>;
}
export interface CreateDBClusterParameterGroupResult {
  DBClusterParameterGroup?: DBClusterParameterGroup;
}
export interface CreateDBClusterResult {
  DBCluster?: DBCluster;
}
export interface CreateDBClusterSnapshotMessage {
  DBClusterSnapshotIdentifier: string;
  DBClusterIdentifier: string;
  Tags?: Array<Tag>;
}
export interface CreateDBClusterSnapshotResult {
  DBClusterSnapshot?: DBClusterSnapshot;
}
export interface CreateDBInstanceMessage {
  DBName?: string;
  DBInstanceIdentifier: string;
  AllocatedStorage?: number;
  DBInstanceClass: string;
  Engine: string;
  MasterUsername?: string;
  MasterUserPassword?: string;
  DBSecurityGroups?: Array<string>;
  VpcSecurityGroupIds?: Array<string>;
  AvailabilityZone?: string;
  DBSubnetGroupName?: string;
  PreferredMaintenanceWindow?: string;
  DBParameterGroupName?: string;
  BackupRetentionPeriod?: number;
  PreferredBackupWindow?: string;
  Port?: number;
  MultiAZ?: boolean;
  EngineVersion?: string;
  AutoMinorVersionUpgrade?: boolean;
  LicenseModel?: string;
  Iops?: number;
  OptionGroupName?: string;
  CharacterSetName?: string;
  NcharCharacterSetName?: string;
  PubliclyAccessible?: boolean;
  Tags?: Array<Tag>;
  DBClusterIdentifier?: string;
  StorageType?: string;
  TdeCredentialArn?: string;
  TdeCredentialPassword?: string;
  StorageEncrypted?: boolean;
  KmsKeyId?: string;
  Domain?: string;
  DomainFqdn?: string;
  DomainOu?: string;
  DomainAuthSecretArn?: string;
  DomainDnsIps?: Array<string>;
  CopyTagsToSnapshot?: boolean;
  MonitoringInterval?: number;
  MonitoringRoleArn?: string;
  DomainIAMRoleName?: string;
  PromotionTier?: number;
  Timezone?: string;
  EnableIAMDatabaseAuthentication?: boolean;
  DatabaseInsightsMode?: DatabaseInsightsMode;
  EnablePerformanceInsights?: boolean;
  PerformanceInsightsKMSKeyId?: string;
  PerformanceInsightsRetentionPeriod?: number;
  EnableCloudwatchLogsExports?: Array<string>;
  ProcessorFeatures?: Array<ProcessorFeature>;
  DeletionProtection?: boolean;
  MaxAllocatedStorage?: number;
  EnableCustomerOwnedIp?: boolean;
  CustomIamInstanceProfile?: string;
  BackupTarget?: string;
  NetworkType?: string;
  StorageThroughput?: number;
  ManageMasterUserPassword?: boolean;
  MasterUserSecretKmsKeyId?: string;
  CACertificateIdentifier?: string;
  DBSystemId?: string;
  DedicatedLogVolume?: boolean;
  MultiTenant?: boolean;
  EngineLifecycleSupport?: string;
}
export interface CreateDBInstanceReadReplicaMessage {
  DBInstanceIdentifier: string;
  SourceDBInstanceIdentifier?: string;
  DBInstanceClass?: string;
  AvailabilityZone?: string;
  Port?: number;
  MultiAZ?: boolean;
  AutoMinorVersionUpgrade?: boolean;
  Iops?: number;
  OptionGroupName?: string;
  DBParameterGroupName?: string;
  PubliclyAccessible?: boolean;
  Tags?: Array<Tag>;
  DBSubnetGroupName?: string;
  VpcSecurityGroupIds?: Array<string>;
  StorageType?: string;
  CopyTagsToSnapshot?: boolean;
  MonitoringInterval?: number;
  MonitoringRoleArn?: string;
  KmsKeyId?: string;
  PreSignedUrl?: string;
  EnableIAMDatabaseAuthentication?: boolean;
  DatabaseInsightsMode?: DatabaseInsightsMode;
  EnablePerformanceInsights?: boolean;
  PerformanceInsightsKMSKeyId?: string;
  PerformanceInsightsRetentionPeriod?: number;
  EnableCloudwatchLogsExports?: Array<string>;
  ProcessorFeatures?: Array<ProcessorFeature>;
  UseDefaultProcessorFeatures?: boolean;
  DeletionProtection?: boolean;
  Domain?: string;
  DomainIAMRoleName?: string;
  DomainFqdn?: string;
  DomainOu?: string;
  DomainAuthSecretArn?: string;
  DomainDnsIps?: Array<string>;
  ReplicaMode?: ReplicaMode;
  MaxAllocatedStorage?: number;
  CustomIamInstanceProfile?: string;
  NetworkType?: string;
  StorageThroughput?: number;
  EnableCustomerOwnedIp?: boolean;
  BackupTarget?: string;
  AllocatedStorage?: number;
  SourceDBClusterIdentifier?: string;
  DedicatedLogVolume?: boolean;
  UpgradeStorageConfig?: boolean;
  CACertificateIdentifier?: string;
}
export interface CreateDBInstanceReadReplicaResult {
  DBInstance?: DBInstance;
}
export interface CreateDBInstanceResult {
  DBInstance?: DBInstance;
}
export interface CreateDBParameterGroupMessage {
  DBParameterGroupName: string;
  DBParameterGroupFamily: string;
  Description: string;
  Tags?: Array<Tag>;
}
export interface CreateDBParameterGroupResult {
  DBParameterGroup?: DBParameterGroup;
}
export interface CreateDBProxyEndpointRequest {
  DBProxyName: string;
  DBProxyEndpointName: string;
  VpcSubnetIds: Array<string>;
  VpcSecurityGroupIds?: Array<string>;
  TargetRole?: DBProxyEndpointTargetRole;
  Tags?: Array<Tag>;
}
export interface CreateDBProxyEndpointResponse {
  DBProxyEndpoint?: DBProxyEndpoint;
}
export interface CreateDBProxyRequest {
  DBProxyName: string;
  EngineFamily: EngineFamily;
  Auth: Array<UserAuthConfig>;
  RoleArn: string;
  VpcSubnetIds: Array<string>;
  VpcSecurityGroupIds?: Array<string>;
  RequireTLS?: boolean;
  IdleClientTimeout?: number;
  DebugLogging?: boolean;
  Tags?: Array<Tag>;
}
export interface CreateDBProxyResponse {
  DBProxy?: DBProxy;
}
export interface CreateDBSecurityGroupMessage {
  DBSecurityGroupName: string;
  DBSecurityGroupDescription: string;
  Tags?: Array<Tag>;
}
export interface CreateDBSecurityGroupResult {
  DBSecurityGroup?: DBSecurityGroup;
}
export interface CreateDBShardGroupMessage {
  DBShardGroupIdentifier: string;
  DBClusterIdentifier: string;
  ComputeRedundancy?: number;
  MaxACU: number;
  MinACU?: number;
  PubliclyAccessible?: boolean;
  Tags?: Array<Tag>;
}
export interface CreateDBSnapshotMessage {
  DBSnapshotIdentifier: string;
  DBInstanceIdentifier: string;
  Tags?: Array<Tag>;
}
export interface CreateDBSnapshotResult {
  DBSnapshot?: DBSnapshot;
}
export interface CreateDBSubnetGroupMessage {
  DBSubnetGroupName: string;
  DBSubnetGroupDescription: string;
  SubnetIds: Array<string>;
  Tags?: Array<Tag>;
}
export interface CreateDBSubnetGroupResult {
  DBSubnetGroup?: DBSubnetGroup;
}
export interface CreateEventSubscriptionMessage {
  SubscriptionName: string;
  SnsTopicArn: string;
  SourceType?: string;
  EventCategories?: Array<string>;
  SourceIds?: Array<string>;
  Enabled?: boolean;
  Tags?: Array<Tag>;
}
export interface CreateEventSubscriptionResult {
  EventSubscription?: EventSubscription;
}
export interface CreateGlobalClusterMessage {
  GlobalClusterIdentifier?: string;
  SourceDBClusterIdentifier?: string;
  Engine?: string;
  EngineVersion?: string;
  EngineLifecycleSupport?: string;
  DeletionProtection?: boolean;
  DatabaseName?: string;
  StorageEncrypted?: boolean;
  Tags?: Array<Tag>;
}
export interface CreateGlobalClusterResult {
  GlobalCluster?: GlobalCluster;
}
export interface CreateIntegrationMessage {
  SourceArn: string;
  TargetArn: string;
  IntegrationName: string;
  KMSKeyId?: string;
  AdditionalEncryptionContext?: Record<string, string>;
  Tags?: Array<Tag>;
  DataFilter?: string;
  Description?: string;
}
export interface CreateOptionGroupMessage {
  OptionGroupName: string;
  EngineName: string;
  MajorEngineVersion: string;
  OptionGroupDescription: string;
  Tags?: Array<Tag>;
}
export interface CreateOptionGroupResult {
  OptionGroup?: OptionGroup;
}
export interface CreateTenantDatabaseMessage {
  DBInstanceIdentifier: string;
  TenantDBName: string;
  MasterUsername: string;
  MasterUserPassword?: string;
  CharacterSetName?: string;
  NcharCharacterSetName?: string;
  ManageMasterUserPassword?: boolean;
  MasterUserSecretKmsKeyId?: string;
  Tags?: Array<Tag>;
}
export interface CreateTenantDatabaseResult {
  TenantDatabase?: TenantDatabase;
}
export declare class CustomAvailabilityZoneNotFoundFault extends Data.TaggedError(
  "CustomAvailabilityZoneNotFoundFault",
)<{
  readonly message?: string;
}> {}
export declare class CustomDBEngineVersionAlreadyExistsFault extends Data.TaggedError(
  "CustomDBEngineVersionAlreadyExistsFault",
)<{
  readonly message?: string;
}> {}
export interface CustomDBEngineVersionAMI {
  ImageId?: string;
  Status?: string;
}
export type CustomDBEngineVersionManifest = string;

export declare class CustomDBEngineVersionNotFoundFault extends Data.TaggedError(
  "CustomDBEngineVersionNotFoundFault",
)<{
  readonly message?: string;
}> {}
export declare class CustomDBEngineVersionQuotaExceededFault extends Data.TaggedError(
  "CustomDBEngineVersionQuotaExceededFault",
)<{
  readonly message?: string;
}> {}
export type CustomEngineName = string;

export type CustomEngineVersion = string;

export type CustomEngineVersionStatus =
  | "available"
  | "inactive"
  | "inactive_except_restore";
export type DatabaseArn = string;

export type DatabaseInsightsMode = "STANDARD" | "ADVANCED";
export type DataFilter = string;

export interface DBCluster {
  AllocatedStorage?: number;
  AvailabilityZones?: Array<string>;
  BackupRetentionPeriod?: number;
  CharacterSetName?: string;
  DatabaseName?: string;
  DBClusterIdentifier?: string;
  DBClusterParameterGroup?: string;
  DBSubnetGroup?: string;
  Status?: string;
  AutomaticRestartTime?: Date | string;
  PercentProgress?: string;
  EarliestRestorableTime?: Date | string;
  Endpoint?: string;
  ReaderEndpoint?: string;
  CustomEndpoints?: Array<string>;
  MultiAZ?: boolean;
  Engine?: string;
  EngineVersion?: string;
  LatestRestorableTime?: Date | string;
  Port?: number;
  MasterUsername?: string;
  DBClusterOptionGroupMemberships?: Array<DBClusterOptionGroupStatus>;
  PreferredBackupWindow?: string;
  PreferredMaintenanceWindow?: string;
  ReplicationSourceIdentifier?: string;
  ReadReplicaIdentifiers?: Array<string>;
  StatusInfos?: Array<DBClusterStatusInfo>;
  DBClusterMembers?: Array<DBClusterMember>;
  VpcSecurityGroups?: Array<VpcSecurityGroupMembership>;
  HostedZoneId?: string;
  StorageEncrypted?: boolean;
  KmsKeyId?: string;
  DbClusterResourceId?: string;
  DBClusterArn?: string;
  AssociatedRoles?: Array<DBClusterRole>;
  IAMDatabaseAuthenticationEnabled?: boolean;
  CloneGroupId?: string;
  ClusterCreateTime?: Date | string;
  EarliestBacktrackTime?: Date | string;
  BacktrackWindow?: number;
  BacktrackConsumedChangeRecords?: number;
  EnabledCloudwatchLogsExports?: Array<string>;
  Capacity?: number;
  EngineMode?: string;
  ScalingConfigurationInfo?: ScalingConfigurationInfo;
  RdsCustomClusterConfiguration?: RdsCustomClusterConfiguration;
  DeletionProtection?: boolean;
  HttpEndpointEnabled?: boolean;
  ActivityStreamMode?: ActivityStreamMode;
  ActivityStreamStatus?: ActivityStreamStatus;
  ActivityStreamKmsKeyId?: string;
  ActivityStreamKinesisStreamName?: string;
  CopyTagsToSnapshot?: boolean;
  CrossAccountClone?: boolean;
  DomainMemberships?: Array<DomainMembership>;
  TagList?: Array<Tag>;
  GlobalClusterIdentifier?: string;
  GlobalWriteForwardingStatus?: WriteForwardingStatus;
  GlobalWriteForwardingRequested?: boolean;
  PendingModifiedValues?: ClusterPendingModifiedValues;
  DBClusterInstanceClass?: string;
  StorageType?: string;
  Iops?: number;
  PubliclyAccessible?: boolean;
  AutoMinorVersionUpgrade?: boolean;
  MonitoringInterval?: number;
  MonitoringRoleArn?: string;
  DatabaseInsightsMode?: DatabaseInsightsMode;
  PerformanceInsightsEnabled?: boolean;
  PerformanceInsightsKMSKeyId?: string;
  PerformanceInsightsRetentionPeriod?: number;
  ServerlessV2ScalingConfiguration?: ServerlessV2ScalingConfigurationInfo;
  NetworkType?: string;
  DBSystemId?: string;
  MasterUserSecret?: MasterUserSecret;
  IOOptimizedNextAllowedModificationTime?: Date | string;
  LocalWriteForwardingStatus?: LocalWriteForwardingStatus;
  AwsBackupRecoveryPointArn?: string;
  LimitlessDatabase?: LimitlessDatabase;
  StorageThroughput?: number;
  ClusterScalabilityType?: ClusterScalabilityType;
  CertificateDetails?: CertificateDetails;
  EngineLifecycleSupport?: string;
}
export declare class DBClusterAlreadyExistsFault extends Data.TaggedError(
  "DBClusterAlreadyExistsFault",
)<{
  readonly message?: string;
}> {}
export interface DBClusterAutomatedBackup {
  Engine?: string;
  VpcId?: string;
  DBClusterAutomatedBackupsArn?: string;
  DBClusterIdentifier?: string;
  RestoreWindow?: RestoreWindow;
  MasterUsername?: string;
  DbClusterResourceId?: string;
  Region?: string;
  LicenseModel?: string;
  Status?: string;
  IAMDatabaseAuthenticationEnabled?: boolean;
  ClusterCreateTime?: Date | string;
  StorageEncrypted?: boolean;
  AllocatedStorage?: number;
  EngineVersion?: string;
  DBClusterArn?: string;
  BackupRetentionPeriod?: number;
  EngineMode?: string;
  AvailabilityZones?: Array<string>;
  Port?: number;
  KmsKeyId?: string;
  StorageType?: string;
  Iops?: number;
  AwsBackupRecoveryPointArn?: string;
  StorageThroughput?: number;
}
export type DBClusterAutomatedBackupList = Array<DBClusterAutomatedBackup>;
export interface DBClusterAutomatedBackupMessage {
  Marker?: string;
  DBClusterAutomatedBackups?: Array<DBClusterAutomatedBackup>;
}
export declare class DBClusterAutomatedBackupNotFoundFault extends Data.TaggedError(
  "DBClusterAutomatedBackupNotFoundFault",
)<{
  readonly message?: string;
}> {}
export declare class DBClusterAutomatedBackupQuotaExceededFault extends Data.TaggedError(
  "DBClusterAutomatedBackupQuotaExceededFault",
)<{
  readonly message?: string;
}> {}
export interface DBClusterBacktrack {
  DBClusterIdentifier?: string;
  BacktrackIdentifier?: string;
  BacktrackTo?: Date | string;
  BacktrackedFrom?: Date | string;
  BacktrackRequestCreationTime?: Date | string;
  Status?: string;
}
export type DBClusterBacktrackList = Array<DBClusterBacktrack>;
export interface DBClusterBacktrackMessage {
  Marker?: string;
  DBClusterBacktracks?: Array<DBClusterBacktrack>;
}
export declare class DBClusterBacktrackNotFoundFault extends Data.TaggedError(
  "DBClusterBacktrackNotFoundFault",
)<{
  readonly message?: string;
}> {}
export interface DBClusterCapacityInfo {
  DBClusterIdentifier?: string;
  PendingCapacity?: number;
  CurrentCapacity?: number;
  SecondsBeforeTimeout?: number;
  TimeoutAction?: string;
}
export interface DBClusterEndpoint {
  DBClusterEndpointIdentifier?: string;
  DBClusterIdentifier?: string;
  DBClusterEndpointResourceIdentifier?: string;
  Endpoint?: string;
  Status?: string;
  EndpointType?: string;
  CustomEndpointType?: string;
  StaticMembers?: Array<string>;
  ExcludedMembers?: Array<string>;
  DBClusterEndpointArn?: string;
}
export declare class DBClusterEndpointAlreadyExistsFault extends Data.TaggedError(
  "DBClusterEndpointAlreadyExistsFault",
)<{
  readonly message?: string;
}> {}
export type DBClusterEndpointList = Array<DBClusterEndpoint>;
export interface DBClusterEndpointMessage {
  Marker?: string;
  DBClusterEndpoints?: Array<DBClusterEndpoint>;
}
export declare class DBClusterEndpointNotFoundFault extends Data.TaggedError(
  "DBClusterEndpointNotFoundFault",
)<{
  readonly message?: string;
}> {}
export declare class DBClusterEndpointQuotaExceededFault extends Data.TaggedError(
  "DBClusterEndpointQuotaExceededFault",
)<{
  readonly message?: string;
}> {}
export type DBClusterIdentifier = string;

export type DBClusterList = Array<DBCluster>;
export interface DBClusterMember {
  DBInstanceIdentifier?: string;
  IsClusterWriter?: boolean;
  DBClusterParameterGroupStatus?: string;
  PromotionTier?: number;
}
export type DBClusterMemberList = Array<DBClusterMember>;
export interface DBClusterMessage {
  Marker?: string;
  DBClusters?: Array<DBCluster>;
}
export declare class DBClusterNotFoundFault extends Data.TaggedError(
  "DBClusterNotFoundFault",
)<{
  readonly message?: string;
}> {}
export type DBClusterOptionGroupMemberships = Array<DBClusterOptionGroupStatus>;
export interface DBClusterOptionGroupStatus {
  DBClusterOptionGroupName?: string;
  Status?: string;
}
export interface DBClusterParameterGroup {
  DBClusterParameterGroupName?: string;
  DBParameterGroupFamily?: string;
  Description?: string;
  DBClusterParameterGroupArn?: string;
}
export interface DBClusterParameterGroupDetails {
  Parameters?: Array<Parameter>;
  Marker?: string;
}
export type DBClusterParameterGroupList = Array<DBClusterParameterGroup>;
export interface DBClusterParameterGroupNameMessage {
  DBClusterParameterGroupName?: string;
}
export declare class DBClusterParameterGroupNotFoundFault extends Data.TaggedError(
  "DBClusterParameterGroupNotFoundFault",
)<{
  readonly message?: string;
}> {}
export interface DBClusterParameterGroupsMessage {
  Marker?: string;
  DBClusterParameterGroups?: Array<DBClusterParameterGroup>;
}
export declare class DBClusterQuotaExceededFault extends Data.TaggedError(
  "DBClusterQuotaExceededFault",
)<{
  readonly message?: string;
}> {}
export interface DBClusterRole {
  RoleArn?: string;
  Status?: string;
  FeatureName?: string;
}
export declare class DBClusterRoleAlreadyExistsFault extends Data.TaggedError(
  "DBClusterRoleAlreadyExistsFault",
)<{
  readonly message?: string;
}> {}
export declare class DBClusterRoleNotFoundFault extends Data.TaggedError(
  "DBClusterRoleNotFoundFault",
)<{
  readonly message?: string;
}> {}
export declare class DBClusterRoleQuotaExceededFault extends Data.TaggedError(
  "DBClusterRoleQuotaExceededFault",
)<{
  readonly message?: string;
}> {}
export type DBClusterRoles = Array<DBClusterRole>;
export interface DBClusterSnapshot {
  AvailabilityZones?: Array<string>;
  DBClusterSnapshotIdentifier?: string;
  DBClusterIdentifier?: string;
  SnapshotCreateTime?: Date | string;
  Engine?: string;
  EngineMode?: string;
  AllocatedStorage?: number;
  Status?: string;
  Port?: number;
  VpcId?: string;
  ClusterCreateTime?: Date | string;
  MasterUsername?: string;
  EngineVersion?: string;
  LicenseModel?: string;
  SnapshotType?: string;
  PercentProgress?: number;
  StorageEncrypted?: boolean;
  KmsKeyId?: string;
  DBClusterSnapshotArn?: string;
  SourceDBClusterSnapshotArn?: string;
  IAMDatabaseAuthenticationEnabled?: boolean;
  TagList?: Array<Tag>;
  DBSystemId?: string;
  StorageType?: string;
  DbClusterResourceId?: string;
  StorageThroughput?: number;
}
export declare class DBClusterSnapshotAlreadyExistsFault extends Data.TaggedError(
  "DBClusterSnapshotAlreadyExistsFault",
)<{
  readonly message?: string;
}> {}
export interface DBClusterSnapshotAttribute {
  AttributeName?: string;
  AttributeValues?: Array<string>;
}
export type DBClusterSnapshotAttributeList = Array<DBClusterSnapshotAttribute>;
export interface DBClusterSnapshotAttributesResult {
  DBClusterSnapshotIdentifier?: string;
  DBClusterSnapshotAttributes?: Array<DBClusterSnapshotAttribute>;
}
export type DBClusterSnapshotList = Array<DBClusterSnapshot>;
export interface DBClusterSnapshotMessage {
  Marker?: string;
  DBClusterSnapshots?: Array<DBClusterSnapshot>;
}
export declare class DBClusterSnapshotNotFoundFault extends Data.TaggedError(
  "DBClusterSnapshotNotFoundFault",
)<{
  readonly message?: string;
}> {}
export interface DBClusterStatusInfo {
  StatusType?: string;
  Normal?: boolean;
  Status?: string;
  Message?: string;
}
export type DBClusterStatusInfoList = Array<DBClusterStatusInfo>;
export interface DBEngineVersion {
  Engine?: string;
  EngineVersion?: string;
  DBParameterGroupFamily?: string;
  DBEngineDescription?: string;
  DBEngineVersionDescription?: string;
  DefaultCharacterSet?: CharacterSet;
  Image?: CustomDBEngineVersionAMI;
  DBEngineMediaType?: string;
  SupportedCharacterSets?: Array<CharacterSet>;
  SupportedNcharCharacterSets?: Array<CharacterSet>;
  ValidUpgradeTarget?: Array<UpgradeTarget>;
  SupportedTimezones?: Array<Timezone>;
  ExportableLogTypes?: Array<string>;
  SupportsLogExportsToCloudwatchLogs?: boolean;
  SupportsReadReplica?: boolean;
  SupportedEngineModes?: Array<string>;
  SupportedFeatureNames?: Array<string>;
  Status?: string;
  SupportsParallelQuery?: boolean;
  SupportsGlobalDatabases?: boolean;
  MajorEngineVersion?: string;
  DatabaseInstallationFilesS3BucketName?: string;
  DatabaseInstallationFilesS3Prefix?: string;
  DBEngineVersionArn?: string;
  KMSKeyId?: string;
  CreateTime?: Date | string;
  TagList?: Array<Tag>;
  SupportsBabelfish?: boolean;
  CustomDBEngineVersionManifest?: string;
  SupportsLimitlessDatabase?: boolean;
  SupportsCertificateRotationWithoutRestart?: boolean;
  SupportedCACertificateIdentifiers?: Array<string>;
  SupportsLocalWriteForwarding?: boolean;
  SupportsIntegrations?: boolean;
  ServerlessV2FeaturesSupport?: ServerlessV2FeaturesSupport;
}
export type DBEngineVersionList = Array<DBEngineVersion>;
export interface DBEngineVersionMessage {
  Marker?: string;
  DBEngineVersions?: Array<DBEngineVersion>;
}
export interface DBInstance {
  DBInstanceIdentifier?: string;
  DBInstanceClass?: string;
  Engine?: string;
  DBInstanceStatus?: string;
  AutomaticRestartTime?: Date | string;
  MasterUsername?: string;
  DBName?: string;
  Endpoint?: Endpoint;
  AllocatedStorage?: number;
  InstanceCreateTime?: Date | string;
  PreferredBackupWindow?: string;
  BackupRetentionPeriod?: number;
  DBSecurityGroups?: Array<DBSecurityGroupMembership>;
  VpcSecurityGroups?: Array<VpcSecurityGroupMembership>;
  DBParameterGroups?: Array<DBParameterGroupStatus>;
  AvailabilityZone?: string;
  DBSubnetGroup?: DBSubnetGroup;
  PreferredMaintenanceWindow?: string;
  PendingModifiedValues?: PendingModifiedValues;
  LatestRestorableTime?: Date | string;
  MultiAZ?: boolean;
  EngineVersion?: string;
  AutoMinorVersionUpgrade?: boolean;
  ReadReplicaSourceDBInstanceIdentifier?: string;
  ReadReplicaDBInstanceIdentifiers?: Array<string>;
  ReadReplicaDBClusterIdentifiers?: Array<string>;
  ReplicaMode?: ReplicaMode;
  LicenseModel?: string;
  Iops?: number;
  OptionGroupMemberships?: Array<OptionGroupMembership>;
  CharacterSetName?: string;
  NcharCharacterSetName?: string;
  SecondaryAvailabilityZone?: string;
  PubliclyAccessible?: boolean;
  StatusInfos?: Array<DBInstanceStatusInfo>;
  StorageType?: string;
  TdeCredentialArn?: string;
  DbInstancePort?: number;
  DBClusterIdentifier?: string;
  StorageEncrypted?: boolean;
  KmsKeyId?: string;
  DbiResourceId?: string;
  CACertificateIdentifier?: string;
  DomainMemberships?: Array<DomainMembership>;
  CopyTagsToSnapshot?: boolean;
  MonitoringInterval?: number;
  EnhancedMonitoringResourceArn?: string;
  MonitoringRoleArn?: string;
  PromotionTier?: number;
  DBInstanceArn?: string;
  Timezone?: string;
  IAMDatabaseAuthenticationEnabled?: boolean;
  DatabaseInsightsMode?: DatabaseInsightsMode;
  PerformanceInsightsEnabled?: boolean;
  PerformanceInsightsKMSKeyId?: string;
  PerformanceInsightsRetentionPeriod?: number;
  EnabledCloudwatchLogsExports?: Array<string>;
  ProcessorFeatures?: Array<ProcessorFeature>;
  DeletionProtection?: boolean;
  AssociatedRoles?: Array<DBInstanceRole>;
  ListenerEndpoint?: Endpoint;
  MaxAllocatedStorage?: number;
  TagList?: Array<Tag>;
  DBInstanceAutomatedBackupsReplications?: Array<DBInstanceAutomatedBackupsReplication>;
  CustomerOwnedIpEnabled?: boolean;
  AwsBackupRecoveryPointArn?: string;
  ActivityStreamStatus?: ActivityStreamStatus;
  ActivityStreamKmsKeyId?: string;
  ActivityStreamKinesisStreamName?: string;
  ActivityStreamMode?: ActivityStreamMode;
  ActivityStreamEngineNativeAuditFieldsIncluded?: boolean;
  AutomationMode?: AutomationMode;
  ResumeFullAutomationModeTime?: Date | string;
  CustomIamInstanceProfile?: string;
  BackupTarget?: string;
  NetworkType?: string;
  ActivityStreamPolicyStatus?: ActivityStreamPolicyStatus;
  StorageThroughput?: number;
  DBSystemId?: string;
  MasterUserSecret?: MasterUserSecret;
  CertificateDetails?: CertificateDetails;
  ReadReplicaSourceDBClusterIdentifier?: string;
  PercentProgress?: string;
  DedicatedLogVolume?: boolean;
  IsStorageConfigUpgradeAvailable?: boolean;
  MultiTenant?: boolean;
  EngineLifecycleSupport?: string;
}
export declare class DBInstanceAlreadyExistsFault extends Data.TaggedError(
  "DBInstanceAlreadyExistsFault",
)<{
  readonly message?: string;
}> {}
export interface DBInstanceAutomatedBackup {
  DBInstanceArn?: string;
  DbiResourceId?: string;
  Region?: string;
  DBInstanceIdentifier?: string;
  RestoreWindow?: RestoreWindow;
  AllocatedStorage?: number;
  Status?: string;
  Port?: number;
  AvailabilityZone?: string;
  VpcId?: string;
  InstanceCreateTime?: Date | string;
  MasterUsername?: string;
  Engine?: string;
  EngineVersion?: string;
  LicenseModel?: string;
  Iops?: number;
  OptionGroupName?: string;
  TdeCredentialArn?: string;
  Encrypted?: boolean;
  StorageType?: string;
  KmsKeyId?: string;
  Timezone?: string;
  IAMDatabaseAuthenticationEnabled?: boolean;
  BackupRetentionPeriod?: number;
  DBInstanceAutomatedBackupsArn?: string;
  DBInstanceAutomatedBackupsReplications?: Array<DBInstanceAutomatedBackupsReplication>;
  BackupTarget?: string;
  StorageThroughput?: number;
  AwsBackupRecoveryPointArn?: string;
  DedicatedLogVolume?: boolean;
  MultiTenant?: boolean;
}
export type DBInstanceAutomatedBackupList = Array<DBInstanceAutomatedBackup>;
export interface DBInstanceAutomatedBackupMessage {
  Marker?: string;
  DBInstanceAutomatedBackups?: Array<DBInstanceAutomatedBackup>;
}
export declare class DBInstanceAutomatedBackupNotFoundFault extends Data.TaggedError(
  "DBInstanceAutomatedBackupNotFoundFault",
)<{
  readonly message?: string;
}> {}
export declare class DBInstanceAutomatedBackupQuotaExceededFault extends Data.TaggedError(
  "DBInstanceAutomatedBackupQuotaExceededFault",
)<{
  readonly message?: string;
}> {}
export interface DBInstanceAutomatedBackupsReplication {
  DBInstanceAutomatedBackupsArn?: string;
}
export type DBInstanceAutomatedBackupsReplicationList =
  Array<DBInstanceAutomatedBackupsReplication>;
export type DBInstanceList = Array<DBInstance>;
export interface DBInstanceMessage {
  Marker?: string;
  DBInstances?: Array<DBInstance>;
}
export declare class DBInstanceNotFoundFault extends Data.TaggedError(
  "DBInstanceNotFoundFault",
)<{
  readonly message?: string;
}> {}
export declare class DBInstanceNotReadyFault extends Data.TaggedError(
  "DBInstanceNotReadyFault",
)<{
  readonly message?: string;
}> {}
export interface DBInstanceRole {
  RoleArn?: string;
  FeatureName?: string;
  Status?: string;
}
export declare class DBInstanceRoleAlreadyExistsFault extends Data.TaggedError(
  "DBInstanceRoleAlreadyExistsFault",
)<{
  readonly message?: string;
}> {}
export declare class DBInstanceRoleNotFoundFault extends Data.TaggedError(
  "DBInstanceRoleNotFoundFault",
)<{
  readonly message?: string;
}> {}
export declare class DBInstanceRoleQuotaExceededFault extends Data.TaggedError(
  "DBInstanceRoleQuotaExceededFault",
)<{
  readonly message?: string;
}> {}
export type DBInstanceRoles = Array<DBInstanceRole>;
export interface DBInstanceStatusInfo {
  StatusType?: string;
  Normal?: boolean;
  Status?: string;
  Message?: string;
}
export type DBInstanceStatusInfoList = Array<DBInstanceStatusInfo>;
export declare class DBLogFileNotFoundFault extends Data.TaggedError(
  "DBLogFileNotFoundFault",
)<{
  readonly message?: string;
}> {}
export interface DBMajorEngineVersion {
  Engine?: string;
  MajorEngineVersion?: string;
  SupportedEngineLifecycles?: Array<SupportedEngineLifecycle>;
}
export type DBMajorEngineVersionsList = Array<DBMajorEngineVersion>;
export interface DBParameterGroup {
  DBParameterGroupName?: string;
  DBParameterGroupFamily?: string;
  Description?: string;
  DBParameterGroupArn?: string;
}
export declare class DBParameterGroupAlreadyExistsFault extends Data.TaggedError(
  "DBParameterGroupAlreadyExistsFault",
)<{
  readonly message?: string;
}> {}
export interface DBParameterGroupDetails {
  Parameters?: Array<Parameter>;
  Marker?: string;
}
export type DBParameterGroupList = Array<DBParameterGroup>;
export interface DBParameterGroupNameMessage {
  DBParameterGroupName?: string;
}
export declare class DBParameterGroupNotFoundFault extends Data.TaggedError(
  "DBParameterGroupNotFoundFault",
)<{
  readonly message?: string;
}> {}
export declare class DBParameterGroupQuotaExceededFault extends Data.TaggedError(
  "DBParameterGroupQuotaExceededFault",
)<{
  readonly message?: string;
}> {}
export interface DBParameterGroupsMessage {
  Marker?: string;
  DBParameterGroups?: Array<DBParameterGroup>;
}
export interface DBParameterGroupStatus {
  DBParameterGroupName?: string;
  ParameterApplyStatus?: string;
}
export type DBParameterGroupStatusList = Array<DBParameterGroupStatus>;
export interface DBProxy {
  DBProxyName?: string;
  DBProxyArn?: string;
  Status?: DBProxyStatus;
  EngineFamily?: string;
  VpcId?: string;
  VpcSecurityGroupIds?: Array<string>;
  VpcSubnetIds?: Array<string>;
  Auth?: Array<UserAuthConfigInfo>;
  RoleArn?: string;
  Endpoint?: string;
  RequireTLS?: boolean;
  IdleClientTimeout?: number;
  DebugLogging?: boolean;
  CreatedDate?: Date | string;
  UpdatedDate?: Date | string;
}
export declare class DBProxyAlreadyExistsFault extends Data.TaggedError(
  "DBProxyAlreadyExistsFault",
)<{
  readonly message?: string;
}> {}
export interface DBProxyEndpoint {
  DBProxyEndpointName?: string;
  DBProxyEndpointArn?: string;
  DBProxyName?: string;
  Status?: DBProxyEndpointStatus;
  VpcId?: string;
  VpcSecurityGroupIds?: Array<string>;
  VpcSubnetIds?: Array<string>;
  Endpoint?: string;
  CreatedDate?: Date | string;
  TargetRole?: DBProxyEndpointTargetRole;
  IsDefault?: boolean;
}
export declare class DBProxyEndpointAlreadyExistsFault extends Data.TaggedError(
  "DBProxyEndpointAlreadyExistsFault",
)<{
  readonly message?: string;
}> {}
export type DBProxyEndpointList = Array<DBProxyEndpoint>;
export type DBProxyEndpointName = string;

export declare class DBProxyEndpointNotFoundFault extends Data.TaggedError(
  "DBProxyEndpointNotFoundFault",
)<{
  readonly message?: string;
}> {}
export declare class DBProxyEndpointQuotaExceededFault extends Data.TaggedError(
  "DBProxyEndpointQuotaExceededFault",
)<{
  readonly message?: string;
}> {}
export type DBProxyEndpointStatus =
  | "AVAILABLE"
  | "MODIFYING"
  | "INCOMPATIBLE_NETWORK"
  | "INSUFFICIENT_RESOURCE_LIMITS"
  | "CREATING"
  | "DELETING";
export type DBProxyEndpointTargetRole = "READ_WRITE" | "READ_ONLY";
export type DBProxyList = Array<DBProxy>;
export type DBProxyName = string;

export declare class DBProxyNotFoundFault extends Data.TaggedError(
  "DBProxyNotFoundFault",
)<{
  readonly message?: string;
}> {}
export declare class DBProxyQuotaExceededFault extends Data.TaggedError(
  "DBProxyQuotaExceededFault",
)<{
  readonly message?: string;
}> {}
export type DBProxyStatus =
  | "AVAILABLE"
  | "MODIFYING"
  | "INCOMPATIBLE_NETWORK"
  | "INSUFFICIENT_RESOURCE_LIMITS"
  | "CREATING"
  | "DELETING"
  | "SUSPENDED"
  | "SUSPENDING"
  | "REACTIVATING";
export interface DBProxyTarget {
  TargetArn?: string;
  Endpoint?: string;
  TrackedClusterId?: string;
  RdsResourceId?: string;
  Port?: number;
  Type?: TargetType;
  Role?: TargetRole;
  TargetHealth?: TargetHealth;
}
export declare class DBProxyTargetAlreadyRegisteredFault extends Data.TaggedError(
  "DBProxyTargetAlreadyRegisteredFault",
)<{
  readonly message?: string;
}> {}
export interface DBProxyTargetGroup {
  DBProxyName?: string;
  TargetGroupName?: string;
  TargetGroupArn?: string;
  IsDefault?: boolean;
  Status?: string;
  ConnectionPoolConfig?: ConnectionPoolConfigurationInfo;
  CreatedDate?: Date | string;
  UpdatedDate?: Date | string;
}
export declare class DBProxyTargetGroupNotFoundFault extends Data.TaggedError(
  "DBProxyTargetGroupNotFoundFault",
)<{
  readonly message?: string;
}> {}
export declare class DBProxyTargetNotFoundFault extends Data.TaggedError(
  "DBProxyTargetNotFoundFault",
)<{
  readonly message?: string;
}> {}
export interface DBRecommendation {
  RecommendationId?: string;
  TypeId?: string;
  Severity?: string;
  ResourceArn?: string;
  Status?: string;
  CreatedTime?: Date | string;
  UpdatedTime?: Date | string;
  Detection?: string;
  Recommendation?: string;
  Description?: string;
  Reason?: string;
  RecommendedActions?: Array<RecommendedAction>;
  Category?: string;
  Source?: string;
  TypeDetection?: string;
  TypeRecommendation?: string;
  Impact?: string;
  AdditionalInfo?: string;
  Links?: Array<DocLink>;
  IssueDetails?: IssueDetails;
}
export type DBRecommendationList = Array<DBRecommendation>;
export interface DBRecommendationMessage {
  DBRecommendation?: DBRecommendation;
}
export interface DBRecommendationsMessage {
  DBRecommendations?: Array<DBRecommendation>;
  Marker?: string;
}
export interface DBSecurityGroup {
  OwnerId?: string;
  DBSecurityGroupName?: string;
  DBSecurityGroupDescription?: string;
  VpcId?: string;
  EC2SecurityGroups?: Array<EC2SecurityGroup>;
  IPRanges?: Array<IPRange>;
  DBSecurityGroupArn?: string;
}
export declare class DBSecurityGroupAlreadyExistsFault extends Data.TaggedError(
  "DBSecurityGroupAlreadyExistsFault",
)<{
  readonly message?: string;
}> {}
export interface DBSecurityGroupMembership {
  DBSecurityGroupName?: string;
  Status?: string;
}
export type DBSecurityGroupMembershipList = Array<DBSecurityGroupMembership>;
export interface DBSecurityGroupMessage {
  Marker?: string;
  DBSecurityGroups?: Array<DBSecurityGroup>;
}
export type DBSecurityGroupNameList = Array<string>;
export declare class DBSecurityGroupNotFoundFault extends Data.TaggedError(
  "DBSecurityGroupNotFoundFault",
)<{
  readonly message?: string;
}> {}
export declare class DBSecurityGroupNotSupportedFault extends Data.TaggedError(
  "DBSecurityGroupNotSupportedFault",
)<{
  readonly message?: string;
}> {}
export declare class DBSecurityGroupQuotaExceededFault extends Data.TaggedError(
  "DBSecurityGroupQuotaExceededFault",
)<{
  readonly message?: string;
}> {}
export type DBSecurityGroups = Array<DBSecurityGroup>;
export interface DBShardGroup {
  DBShardGroupResourceId?: string;
  DBShardGroupIdentifier?: string;
  DBClusterIdentifier?: string;
  MaxACU?: number;
  MinACU?: number;
  ComputeRedundancy?: number;
  Status?: string;
  PubliclyAccessible?: boolean;
  Endpoint?: string;
  DBShardGroupArn?: string;
  TagList?: Array<Tag>;
}
export declare class DBShardGroupAlreadyExistsFault extends Data.TaggedError(
  "DBShardGroupAlreadyExistsFault",
)<{
  readonly message?: string;
}> {}
export type DBShardGroupIdentifier = string;

export declare class DBShardGroupNotFoundFault extends Data.TaggedError(
  "DBShardGroupNotFoundFault",
)<{
  readonly message?: string;
}> {}
export type DBShardGroupsList = Array<DBShardGroup>;
export interface DBSnapshot {
  DBSnapshotIdentifier?: string;
  DBInstanceIdentifier?: string;
  SnapshotCreateTime?: Date | string;
  Engine?: string;
  AllocatedStorage?: number;
  Status?: string;
  Port?: number;
  AvailabilityZone?: string;
  VpcId?: string;
  InstanceCreateTime?: Date | string;
  MasterUsername?: string;
  EngineVersion?: string;
  LicenseModel?: string;
  SnapshotType?: string;
  Iops?: number;
  OptionGroupName?: string;
  PercentProgress?: number;
  SourceRegion?: string;
  SourceDBSnapshotIdentifier?: string;
  StorageType?: string;
  TdeCredentialArn?: string;
  Encrypted?: boolean;
  KmsKeyId?: string;
  DBSnapshotArn?: string;
  Timezone?: string;
  IAMDatabaseAuthenticationEnabled?: boolean;
  ProcessorFeatures?: Array<ProcessorFeature>;
  DbiResourceId?: string;
  TagList?: Array<Tag>;
  OriginalSnapshotCreateTime?: Date | string;
  SnapshotDatabaseTime?: Date | string;
  SnapshotTarget?: string;
  StorageThroughput?: number;
  DBSystemId?: string;
  DedicatedLogVolume?: boolean;
  MultiTenant?: boolean;
  SnapshotAvailabilityZone?: string;
}
export declare class DBSnapshotAlreadyExistsFault extends Data.TaggedError(
  "DBSnapshotAlreadyExistsFault",
)<{
  readonly message?: string;
}> {}
export interface DBSnapshotAttribute {
  AttributeName?: string;
  AttributeValues?: Array<string>;
}
export type DBSnapshotAttributeList = Array<DBSnapshotAttribute>;
export interface DBSnapshotAttributesResult {
  DBSnapshotIdentifier?: string;
  DBSnapshotAttributes?: Array<DBSnapshotAttribute>;
}
export type DBSnapshotList = Array<DBSnapshot>;
export interface DBSnapshotMessage {
  Marker?: string;
  DBSnapshots?: Array<DBSnapshot>;
}
export declare class DBSnapshotNotFoundFault extends Data.TaggedError(
  "DBSnapshotNotFoundFault",
)<{
  readonly message?: string;
}> {}
export interface DBSnapshotTenantDatabase {
  DBSnapshotIdentifier?: string;
  DBInstanceIdentifier?: string;
  DbiResourceId?: string;
  EngineName?: string;
  SnapshotType?: string;
  TenantDatabaseCreateTime?: Date | string;
  TenantDBName?: string;
  MasterUsername?: string;
  TenantDatabaseResourceId?: string;
  CharacterSetName?: string;
  DBSnapshotTenantDatabaseARN?: string;
  NcharCharacterSetName?: string;
  TagList?: Array<Tag>;
}
export declare class DBSnapshotTenantDatabaseNotFoundFault extends Data.TaggedError(
  "DBSnapshotTenantDatabaseNotFoundFault",
)<{
  readonly message?: string;
}> {}
export type DBSnapshotTenantDatabasesList = Array<DBSnapshotTenantDatabase>;
export interface DBSnapshotTenantDatabasesMessage {
  Marker?: string;
  DBSnapshotTenantDatabases?: Array<DBSnapshotTenantDatabase>;
}
export interface DBSubnetGroup {
  DBSubnetGroupName?: string;
  DBSubnetGroupDescription?: string;
  VpcId?: string;
  SubnetGroupStatus?: string;
  Subnets?: Array<Subnet>;
  DBSubnetGroupArn?: string;
  SupportedNetworkTypes?: Array<string>;
}
export declare class DBSubnetGroupAlreadyExistsFault extends Data.TaggedError(
  "DBSubnetGroupAlreadyExistsFault",
)<{
  readonly message?: string;
}> {}
export declare class DBSubnetGroupDoesNotCoverEnoughAZs extends Data.TaggedError(
  "DBSubnetGroupDoesNotCoverEnoughAZs",
)<{
  readonly message?: string;
}> {}
export interface DBSubnetGroupMessage {
  Marker?: string;
  DBSubnetGroups?: Array<DBSubnetGroup>;
}
export declare class DBSubnetGroupNotAllowedFault extends Data.TaggedError(
  "DBSubnetGroupNotAllowedFault",
)<{
  readonly message?: string;
}> {}
export declare class DBSubnetGroupNotFoundFault extends Data.TaggedError(
  "DBSubnetGroupNotFoundFault",
)<{
  readonly message?: string;
}> {}
export declare class DBSubnetGroupQuotaExceededFault extends Data.TaggedError(
  "DBSubnetGroupQuotaExceededFault",
)<{
  readonly message?: string;
}> {}
export type DBSubnetGroups = Array<DBSubnetGroup>;
export declare class DBSubnetQuotaExceededFault extends Data.TaggedError(
  "DBSubnetQuotaExceededFault",
)<{
  readonly message?: string;
}> {}
export declare class DBUpgradeDependencyFailureFault extends Data.TaggedError(
  "DBUpgradeDependencyFailureFault",
)<{
  readonly message?: string;
}> {}
export interface DeleteBlueGreenDeploymentRequest {
  BlueGreenDeploymentIdentifier: string;
  DeleteTarget?: boolean;
}
export interface DeleteBlueGreenDeploymentResponse {
  BlueGreenDeployment?: BlueGreenDeployment;
}
export interface DeleteCustomDBEngineVersionMessage {
  Engine: string;
  EngineVersion: string;
}
export interface DeleteDBClusterAutomatedBackupMessage {
  DbClusterResourceId: string;
}
export interface DeleteDBClusterAutomatedBackupResult {
  DBClusterAutomatedBackup?: DBClusterAutomatedBackup;
}
export interface DeleteDBClusterEndpointMessage {
  DBClusterEndpointIdentifier: string;
}
export interface DeleteDBClusterMessage {
  DBClusterIdentifier: string;
  SkipFinalSnapshot?: boolean;
  FinalDBSnapshotIdentifier?: string;
  DeleteAutomatedBackups?: boolean;
}
export interface DeleteDBClusterParameterGroupMessage {
  DBClusterParameterGroupName: string;
}
export interface DeleteDBClusterResult {
  DBCluster?: DBCluster;
}
export interface DeleteDBClusterSnapshotMessage {
  DBClusterSnapshotIdentifier: string;
}
export interface DeleteDBClusterSnapshotResult {
  DBClusterSnapshot?: DBClusterSnapshot;
}
export interface DeleteDBInstanceAutomatedBackupMessage {
  DbiResourceId?: string;
  DBInstanceAutomatedBackupsArn?: string;
}
export interface DeleteDBInstanceAutomatedBackupResult {
  DBInstanceAutomatedBackup?: DBInstanceAutomatedBackup;
}
export interface DeleteDBInstanceMessage {
  DBInstanceIdentifier: string;
  SkipFinalSnapshot?: boolean;
  FinalDBSnapshotIdentifier?: string;
  DeleteAutomatedBackups?: boolean;
}
export interface DeleteDBInstanceResult {
  DBInstance?: DBInstance;
}
export interface DeleteDBParameterGroupMessage {
  DBParameterGroupName: string;
}
export interface DeleteDBProxyEndpointRequest {
  DBProxyEndpointName: string;
}
export interface DeleteDBProxyEndpointResponse {
  DBProxyEndpoint?: DBProxyEndpoint;
}
export interface DeleteDBProxyRequest {
  DBProxyName: string;
}
export interface DeleteDBProxyResponse {
  DBProxy?: DBProxy;
}
export interface DeleteDBSecurityGroupMessage {
  DBSecurityGroupName: string;
}
export interface DeleteDBShardGroupMessage {
  DBShardGroupIdentifier: string;
}
export interface DeleteDBSnapshotMessage {
  DBSnapshotIdentifier: string;
}
export interface DeleteDBSnapshotResult {
  DBSnapshot?: DBSnapshot;
}
export interface DeleteDBSubnetGroupMessage {
  DBSubnetGroupName: string;
}
export interface DeleteEventSubscriptionMessage {
  SubscriptionName: string;
}
export interface DeleteEventSubscriptionResult {
  EventSubscription?: EventSubscription;
}
export interface DeleteGlobalClusterMessage {
  GlobalClusterIdentifier: string;
}
export interface DeleteGlobalClusterResult {
  GlobalCluster?: GlobalCluster;
}
export interface DeleteIntegrationMessage {
  IntegrationIdentifier: string;
}
export interface DeleteOptionGroupMessage {
  OptionGroupName: string;
}
export interface DeleteTenantDatabaseMessage {
  DBInstanceIdentifier: string;
  TenantDBName: string;
  SkipFinalSnapshot?: boolean;
  FinalDBSnapshotIdentifier?: string;
}
export interface DeleteTenantDatabaseResult {
  TenantDatabase?: TenantDatabase;
}
export interface DeregisterDBProxyTargetsRequest {
  DBProxyName: string;
  TargetGroupName?: string;
  DBInstanceIdentifiers?: Array<string>;
  DBClusterIdentifiers?: Array<string>;
}
export interface DeregisterDBProxyTargetsResponse {}
export interface DescribeAccountAttributesMessage {}
export interface DescribeBlueGreenDeploymentsRequest {
  BlueGreenDeploymentIdentifier?: string;
  Filters?: Array<Filter>;
  Marker?: string;
  MaxRecords?: number;
}
export interface DescribeBlueGreenDeploymentsResponse {
  BlueGreenDeployments?: Array<BlueGreenDeployment>;
  Marker?: string;
}
export interface DescribeCertificatesMessage {
  CertificateIdentifier?: string;
  Filters?: Array<Filter>;
  MaxRecords?: number;
  Marker?: string;
}
export interface DescribeDBClusterAutomatedBackupsMessage {
  DbClusterResourceId?: string;
  DBClusterIdentifier?: string;
  Filters?: Array<Filter>;
  MaxRecords?: number;
  Marker?: string;
}
export interface DescribeDBClusterBacktracksMessage {
  DBClusterIdentifier: string;
  BacktrackIdentifier?: string;
  Filters?: Array<Filter>;
  MaxRecords?: number;
  Marker?: string;
}
export interface DescribeDBClusterEndpointsMessage {
  DBClusterIdentifier?: string;
  DBClusterEndpointIdentifier?: string;
  Filters?: Array<Filter>;
  MaxRecords?: number;
  Marker?: string;
}
export interface DescribeDBClusterParameterGroupsMessage {
  DBClusterParameterGroupName?: string;
  Filters?: Array<Filter>;
  MaxRecords?: number;
  Marker?: string;
}
export interface DescribeDBClusterParametersMessage {
  DBClusterParameterGroupName: string;
  Source?: string;
  Filters?: Array<Filter>;
  MaxRecords?: number;
  Marker?: string;
}
export interface DescribeDBClustersMessage {
  DBClusterIdentifier?: string;
  Filters?: Array<Filter>;
  MaxRecords?: number;
  Marker?: string;
  IncludeShared?: boolean;
}
export interface DescribeDBClusterSnapshotAttributesMessage {
  DBClusterSnapshotIdentifier: string;
}
export interface DescribeDBClusterSnapshotAttributesResult {
  DBClusterSnapshotAttributesResult?: DBClusterSnapshotAttributesResult;
}
export interface DescribeDBClusterSnapshotsMessage {
  DBClusterIdentifier?: string;
  DBClusterSnapshotIdentifier?: string;
  SnapshotType?: string;
  Filters?: Array<Filter>;
  MaxRecords?: number;
  Marker?: string;
  IncludeShared?: boolean;
  IncludePublic?: boolean;
  DbClusterResourceId?: string;
}
export interface DescribeDBEngineVersionsMessage {
  Engine?: string;
  EngineVersion?: string;
  DBParameterGroupFamily?: string;
  Filters?: Array<Filter>;
  MaxRecords?: number;
  Marker?: string;
  DefaultOnly?: boolean;
  ListSupportedCharacterSets?: boolean;
  ListSupportedTimezones?: boolean;
  IncludeAll?: boolean;
}
export interface DescribeDBInstanceAutomatedBackupsMessage {
  DbiResourceId?: string;
  DBInstanceIdentifier?: string;
  Filters?: Array<Filter>;
  MaxRecords?: number;
  Marker?: string;
  DBInstanceAutomatedBackupsArn?: string;
}
export interface DescribeDBInstancesMessage {
  DBInstanceIdentifier?: string;
  Filters?: Array<Filter>;
  MaxRecords?: number;
  Marker?: string;
}
export interface DescribeDBLogFilesDetails {
  LogFileName?: string;
  LastWritten?: number;
  Size?: number;
}
export type DescribeDBLogFilesList = Array<DescribeDBLogFilesDetails>;
export interface DescribeDBLogFilesMessage {
  DBInstanceIdentifier: string;
  FilenameContains?: string;
  FileLastWritten?: number;
  FileSize?: number;
  Filters?: Array<Filter>;
  MaxRecords?: number;
  Marker?: string;
}
export interface DescribeDBLogFilesResponse {
  DescribeDBLogFiles?: Array<DescribeDBLogFilesDetails>;
  Marker?: string;
}
export interface DescribeDBMajorEngineVersionsRequest {
  Engine?: string;
  MajorEngineVersion?: string;
  Marker?: string;
  MaxRecords?: number;
}
export interface DescribeDBMajorEngineVersionsResponse {
  DBMajorEngineVersions?: Array<DBMajorEngineVersion>;
  Marker?: string;
}
export interface DescribeDBParameterGroupsMessage {
  DBParameterGroupName?: string;
  Filters?: Array<Filter>;
  MaxRecords?: number;
  Marker?: string;
}
export interface DescribeDBParametersMessage {
  DBParameterGroupName: string;
  Source?: string;
  Filters?: Array<Filter>;
  MaxRecords?: number;
  Marker?: string;
}
export interface DescribeDBProxiesRequest {
  DBProxyName?: string;
  Filters?: Array<Filter>;
  Marker?: string;
  MaxRecords?: number;
}
export interface DescribeDBProxiesResponse {
  DBProxies?: Array<DBProxy>;
  Marker?: string;
}
export interface DescribeDBProxyEndpointsRequest {
  DBProxyName?: string;
  DBProxyEndpointName?: string;
  Filters?: Array<Filter>;
  Marker?: string;
  MaxRecords?: number;
}
export interface DescribeDBProxyEndpointsResponse {
  DBProxyEndpoints?: Array<DBProxyEndpoint>;
  Marker?: string;
}
export interface DescribeDBProxyTargetGroupsRequest {
  DBProxyName: string;
  TargetGroupName?: string;
  Filters?: Array<Filter>;
  Marker?: string;
  MaxRecords?: number;
}
export interface DescribeDBProxyTargetGroupsResponse {
  TargetGroups?: Array<DBProxyTargetGroup>;
  Marker?: string;
}
export interface DescribeDBProxyTargetsRequest {
  DBProxyName: string;
  TargetGroupName?: string;
  Filters?: Array<Filter>;
  Marker?: string;
  MaxRecords?: number;
}
export interface DescribeDBProxyTargetsResponse {
  Targets?: Array<DBProxyTarget>;
  Marker?: string;
}
export interface DescribeDBRecommendationsMessage {
  LastUpdatedAfter?: Date | string;
  LastUpdatedBefore?: Date | string;
  Locale?: string;
  Filters?: Array<Filter>;
  MaxRecords?: number;
  Marker?: string;
}
export interface DescribeDBSecurityGroupsMessage {
  DBSecurityGroupName?: string;
  Filters?: Array<Filter>;
  MaxRecords?: number;
  Marker?: string;
}
export interface DescribeDBShardGroupsMessage {
  DBShardGroupIdentifier?: string;
  Filters?: Array<Filter>;
  Marker?: string;
  MaxRecords?: number;
}
export interface DescribeDBShardGroupsResponse {
  DBShardGroups?: Array<DBShardGroup>;
  Marker?: string;
}
export interface DescribeDBSnapshotAttributesMessage {
  DBSnapshotIdentifier: string;
}
export interface DescribeDBSnapshotAttributesResult {
  DBSnapshotAttributesResult?: DBSnapshotAttributesResult;
}
export interface DescribeDBSnapshotsMessage {
  DBInstanceIdentifier?: string;
  DBSnapshotIdentifier?: string;
  SnapshotType?: string;
  Filters?: Array<Filter>;
  MaxRecords?: number;
  Marker?: string;
  IncludeShared?: boolean;
  IncludePublic?: boolean;
  DbiResourceId?: string;
}
export interface DescribeDBSnapshotTenantDatabasesMessage {
  DBInstanceIdentifier?: string;
  DBSnapshotIdentifier?: string;
  SnapshotType?: string;
  Filters?: Array<Filter>;
  MaxRecords?: number;
  Marker?: string;
  DbiResourceId?: string;
}
export interface DescribeDBSubnetGroupsMessage {
  DBSubnetGroupName?: string;
  Filters?: Array<Filter>;
  MaxRecords?: number;
  Marker?: string;
}
export interface DescribeEngineDefaultClusterParametersMessage {
  DBParameterGroupFamily: string;
  Filters?: Array<Filter>;
  MaxRecords?: number;
  Marker?: string;
}
export interface DescribeEngineDefaultClusterParametersResult {
  EngineDefaults?: EngineDefaults;
}
export interface DescribeEngineDefaultParametersMessage {
  DBParameterGroupFamily: string;
  Filters?: Array<Filter>;
  MaxRecords?: number;
  Marker?: string;
}
export interface DescribeEngineDefaultParametersResult {
  EngineDefaults?: EngineDefaults;
}
export interface DescribeEventCategoriesMessage {
  SourceType?: string;
  Filters?: Array<Filter>;
}
export interface DescribeEventsMessage {
  SourceIdentifier?: string;
  SourceType?: SourceType;
  StartTime?: Date | string;
  EndTime?: Date | string;
  Duration?: number;
  EventCategories?: Array<string>;
  Filters?: Array<Filter>;
  MaxRecords?: number;
  Marker?: string;
}
export interface DescribeEventSubscriptionsMessage {
  SubscriptionName?: string;
  Filters?: Array<Filter>;
  MaxRecords?: number;
  Marker?: string;
}
export interface DescribeExportTasksMessage {
  ExportTaskIdentifier?: string;
  SourceArn?: string;
  Filters?: Array<Filter>;
  Marker?: string;
  MaxRecords?: number;
  SourceType?: ExportSourceType;
}
export interface DescribeGlobalClustersMessage {
  GlobalClusterIdentifier?: string;
  Filters?: Array<Filter>;
  MaxRecords?: number;
  Marker?: string;
}
export interface DescribeIntegrationsMessage {
  IntegrationIdentifier?: string;
  Filters?: Array<Filter>;
  MaxRecords?: number;
  Marker?: string;
}
export interface DescribeIntegrationsResponse {
  Marker?: string;
  Integrations?: Array<Integration>;
}
export interface DescribeOptionGroupOptionsMessage {
  EngineName: string;
  MajorEngineVersion?: string;
  Filters?: Array<Filter>;
  MaxRecords?: number;
  Marker?: string;
}
export interface DescribeOptionGroupsMessage {
  OptionGroupName?: string;
  Filters?: Array<Filter>;
  Marker?: string;
  MaxRecords?: number;
  EngineName?: string;
  MajorEngineVersion?: string;
}
export interface DescribeOrderableDBInstanceOptionsMessage {
  Engine: string;
  EngineVersion?: string;
  DBInstanceClass?: string;
  LicenseModel?: string;
  AvailabilityZoneGroup?: string;
  Vpc?: boolean;
  Filters?: Array<Filter>;
  MaxRecords?: number;
  Marker?: string;
}
export interface DescribePendingMaintenanceActionsMessage {
  ResourceIdentifier?: string;
  Filters?: Array<Filter>;
  Marker?: string;
  MaxRecords?: number;
}
export interface DescribeReservedDBInstancesMessage {
  ReservedDBInstanceId?: string;
  ReservedDBInstancesOfferingId?: string;
  DBInstanceClass?: string;
  Duration?: string;
  ProductDescription?: string;
  OfferingType?: string;
  MultiAZ?: boolean;
  LeaseId?: string;
  Filters?: Array<Filter>;
  MaxRecords?: number;
  Marker?: string;
}
export interface DescribeReservedDBInstancesOfferingsMessage {
  ReservedDBInstancesOfferingId?: string;
  DBInstanceClass?: string;
  Duration?: string;
  ProductDescription?: string;
  OfferingType?: string;
  MultiAZ?: boolean;
  Filters?: Array<Filter>;
  MaxRecords?: number;
  Marker?: string;
}
export interface DescribeSourceRegionsMessage {
  RegionName?: string;
  MaxRecords?: number;
  Marker?: string;
  Filters?: Array<Filter>;
}
export interface DescribeTenantDatabasesMessage {
  DBInstanceIdentifier?: string;
  TenantDBName?: string;
  Filters?: Array<Filter>;
  Marker?: string;
  MaxRecords?: number;
}
export interface DescribeValidDBInstanceModificationsMessage {
  DBInstanceIdentifier: string;
}
export interface DescribeValidDBInstanceModificationsResult {
  ValidDBInstanceModificationsMessage?: ValidDBInstanceModificationsMessage;
}
export type Description = string;

export interface DisableHttpEndpointRequest {
  ResourceArn: string;
}
export interface DisableHttpEndpointResponse {
  ResourceArn?: string;
  HttpEndpointEnabled?: boolean;
}
export interface DocLink {
  Text?: string;
  Url?: string;
}
export type DocLinkList = Array<DocLink>;
export interface DomainMembership {
  Domain?: string;
  Status?: string;
  FQDN?: string;
  IAMRoleName?: string;
  OU?: string;
  AuthSecretArn?: string;
  DnsIps?: Array<string>;
}
export type DomainMembershipList = Array<DomainMembership>;
export declare class DomainNotFoundFault extends Data.TaggedError(
  "DomainNotFoundFault",
)<{
  readonly message?: string;
}> {}
export type Double = number;

export type DoubleOptional = number;

export interface DoubleRange {
  From?: number;
  To?: number;
}
export type DoubleRangeList = Array<DoubleRange>;
export interface DownloadDBLogFilePortionDetails {
  LogFileData?: string;
  Marker?: string;
  AdditionalDataPending?: boolean;
}
export interface DownloadDBLogFilePortionMessage {
  DBInstanceIdentifier: string;
  LogFileName: string;
  Marker?: string;
  NumberOfLines?: number;
}
export declare class Ec2ImagePropertiesNotSupportedFault extends Data.TaggedError(
  "Ec2ImagePropertiesNotSupportedFault",
)<{
  readonly message?: string;
}> {}
export interface EC2SecurityGroup {
  Status?: string;
  EC2SecurityGroupName?: string;
  EC2SecurityGroupId?: string;
  EC2SecurityGroupOwnerId?: string;
}
export type EC2SecurityGroupList = Array<EC2SecurityGroup>;
export interface EnableHttpEndpointRequest {
  ResourceArn: string;
}
export interface EnableHttpEndpointResponse {
  ResourceArn?: string;
  HttpEndpointEnabled?: boolean;
}
export type EncryptionContextMap = Record<string, string>;
export interface Endpoint {
  Address?: string;
  Port?: number;
  HostedZoneId?: string;
}
export type Engine = string;

export interface EngineDefaults {
  DBParameterGroupFamily?: string;
  Marker?: string;
  Parameters?: Array<Parameter>;
}
export type EngineFamily = "MYSQL" | "POSTGRESQL" | "SQLSERVER";
export type EngineModeList = Array<string>;
export interface Event {
  SourceIdentifier?: string;
  SourceType?: SourceType;
  Message?: string;
  EventCategories?: Array<string>;
  Date?: Date | string;
  SourceArn?: string;
}
export type EventCategoriesList = Array<string>;
export interface EventCategoriesMap {
  SourceType?: string;
  EventCategories?: Array<string>;
}
export type EventCategoriesMapList = Array<EventCategoriesMap>;
export interface EventCategoriesMessage {
  EventCategoriesMapList?: Array<EventCategoriesMap>;
}
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
  SubscriptionCreationTime?: string;
  SourceType?: string;
  SourceIdsList?: Array<string>;
  EventCategoriesList?: Array<string>;
  Enabled?: boolean;
  EventSubscriptionArn?: string;
}
export declare class EventSubscriptionQuotaExceededFault extends Data.TaggedError(
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

export type ExportSourceType = "SNAPSHOT" | "CLUSTER";
export interface ExportTask {
  ExportTaskIdentifier?: string;
  SourceArn?: string;
  ExportOnly?: Array<string>;
  SnapshotTime?: Date | string;
  TaskStartTime?: Date | string;
  TaskEndTime?: Date | string;
  S3Bucket?: string;
  S3Prefix?: string;
  IamRoleArn?: string;
  KmsKeyId?: string;
  Status?: string;
  PercentProgress?: number;
  TotalExtractedDataInGB?: number;
  FailureCause?: string;
  WarningMessage?: string;
  SourceType?: ExportSourceType;
}
export declare class ExportTaskAlreadyExistsFault extends Data.TaggedError(
  "ExportTaskAlreadyExistsFault",
)<{
  readonly message?: string;
}> {}
export declare class ExportTaskNotFoundFault extends Data.TaggedError(
  "ExportTaskNotFoundFault",
)<{
  readonly message?: string;
}> {}
export type ExportTasksList = Array<ExportTask>;
export interface ExportTasksMessage {
  Marker?: string;
  ExportTasks?: Array<ExportTask>;
}
export interface FailoverDBClusterMessage {
  DBClusterIdentifier: string;
  TargetDBInstanceIdentifier?: string;
}
export interface FailoverDBClusterResult {
  DBCluster?: DBCluster;
}
export interface FailoverGlobalClusterMessage {
  GlobalClusterIdentifier: string;
  TargetDbClusterIdentifier: string;
  AllowDataLoss?: boolean;
  Switchover?: boolean;
}
export interface FailoverGlobalClusterResult {
  GlobalCluster?: GlobalCluster;
}
export interface FailoverState {
  Status?: FailoverStatus;
  FromDbClusterArn?: string;
  ToDbClusterArn?: string;
  IsDataLossAllowed?: boolean;
}
export type FailoverStatus = "PENDING" | "FAILING_OVER" | "CANCELLING";
export type FeatureNameList = Array<string>;
export interface Filter {
  Name: string;
  Values: Array<string>;
}
export type FilterList = Array<Filter>;
export type FilterValueList = Array<string>;
export interface GlobalCluster {
  GlobalClusterIdentifier?: string;
  GlobalClusterResourceId?: string;
  GlobalClusterArn?: string;
  Status?: string;
  Engine?: string;
  EngineVersion?: string;
  EngineLifecycleSupport?: string;
  DatabaseName?: string;
  StorageEncrypted?: boolean;
  DeletionProtection?: boolean;
  GlobalClusterMembers?: Array<GlobalClusterMember>;
  Endpoint?: string;
  FailoverState?: FailoverState;
  TagList?: Array<Tag>;
}
export declare class GlobalClusterAlreadyExistsFault extends Data.TaggedError(
  "GlobalClusterAlreadyExistsFault",
)<{
  readonly message?: string;
}> {}
export type GlobalClusterIdentifier = string;

export type GlobalClusterList = Array<GlobalCluster>;
export interface GlobalClusterMember {
  DBClusterArn?: string;
  Readers?: Array<string>;
  IsWriter?: boolean;
  GlobalWriteForwardingStatus?: WriteForwardingStatus;
  SynchronizationStatus?: GlobalClusterMemberSynchronizationStatus;
}
export type GlobalClusterMemberList = Array<GlobalClusterMember>;
export type GlobalClusterMemberSynchronizationStatus =
  | "CONNECTED"
  | "PENDING_RESYNC";
export declare class GlobalClusterNotFoundFault extends Data.TaggedError(
  "GlobalClusterNotFoundFault",
)<{
  readonly message?: string;
}> {}
export declare class GlobalClusterQuotaExceededFault extends Data.TaggedError(
  "GlobalClusterQuotaExceededFault",
)<{
  readonly message?: string;
}> {}
export interface GlobalClustersMessage {
  Marker?: string;
  GlobalClusters?: Array<GlobalCluster>;
}
export type IAMAuthMode = "DISABLED" | "REQUIRED" | "ENABLED";
export declare class IamRoleMissingPermissionsFault extends Data.TaggedError(
  "IamRoleMissingPermissionsFault",
)<{
  readonly message?: string;
}> {}
export declare class IamRoleNotFoundFault extends Data.TaggedError(
  "IamRoleNotFoundFault",
)<{
  readonly message?: string;
}> {}
export declare class InstanceQuotaExceededFault extends Data.TaggedError(
  "InstanceQuotaExceededFault",
)<{
  readonly message?: string;
}> {}
export declare class InsufficientAvailableIPsInSubnetFault extends Data.TaggedError(
  "InsufficientAvailableIPsInSubnetFault",
)<{
  readonly message?: string;
}> {}
export declare class InsufficientDBClusterCapacityFault extends Data.TaggedError(
  "InsufficientDBClusterCapacityFault",
)<{
  readonly message?: string;
}> {}
export declare class InsufficientDBInstanceCapacityFault extends Data.TaggedError(
  "InsufficientDBInstanceCapacityFault",
)<{
  readonly message?: string;
}> {}
export declare class InsufficientStorageClusterCapacityFault extends Data.TaggedError(
  "InsufficientStorageClusterCapacityFault",
)<{
  readonly message?: string;
}> {}
export type Integer = number;

export type IntegerOptional = number;

export interface Integration {
  SourceArn?: string;
  TargetArn?: string;
  IntegrationName?: string;
  IntegrationArn?: string;
  KMSKeyId?: string;
  AdditionalEncryptionContext?: Record<string, string>;
  Status?: IntegrationStatus;
  Tags?: Array<Tag>;
  CreateTime?: Date | string;
  Errors?: Array<IntegrationError>;
  DataFilter?: string;
  Description?: string;
}
export declare class IntegrationAlreadyExistsFault extends Data.TaggedError(
  "IntegrationAlreadyExistsFault",
)<{
  readonly message?: string;
}> {}
export type IntegrationArn = string;

export declare class IntegrationConflictOperationFault extends Data.TaggedError(
  "IntegrationConflictOperationFault",
)<{
  readonly message?: string;
}> {}
export type IntegrationDescription = string;

export interface IntegrationError {
  ErrorCode: string;
  ErrorMessage?: string;
}
export type IntegrationErrorList = Array<IntegrationError>;
export type IntegrationIdentifier = string;

export type IntegrationList = Array<Integration>;
export type IntegrationName = string;

export declare class IntegrationNotFoundFault extends Data.TaggedError(
  "IntegrationNotFoundFault",
)<{
  readonly message?: string;
}> {}
export declare class IntegrationQuotaExceededFault extends Data.TaggedError(
  "IntegrationQuotaExceededFault",
)<{
  readonly message?: string;
}> {}
export type IntegrationStatus =
  | "CREATING"
  | "ACTIVE"
  | "MODIFYING"
  | "FAILED"
  | "DELETING"
  | "SYNCING"
  | "NEEDS_ATTENTION";
export declare class InvalidBlueGreenDeploymentStateFault extends Data.TaggedError(
  "InvalidBlueGreenDeploymentStateFault",
)<{
  readonly message?: string;
}> {}
export declare class InvalidCustomDBEngineVersionStateFault extends Data.TaggedError(
  "InvalidCustomDBEngineVersionStateFault",
)<{
  readonly message?: string;
}> {}
export declare class InvalidDBClusterAutomatedBackupStateFault extends Data.TaggedError(
  "InvalidDBClusterAutomatedBackupStateFault",
)<{
  readonly message?: string;
}> {}
export declare class InvalidDBClusterCapacityFault extends Data.TaggedError(
  "InvalidDBClusterCapacityFault",
)<{
  readonly message?: string;
}> {}
export declare class InvalidDBClusterEndpointStateFault extends Data.TaggedError(
  "InvalidDBClusterEndpointStateFault",
)<{
  readonly message?: string;
}> {}
export declare class InvalidDBClusterSnapshotStateFault extends Data.TaggedError(
  "InvalidDBClusterSnapshotStateFault",
)<{
  readonly message?: string;
}> {}
export declare class InvalidDBClusterStateFault extends Data.TaggedError(
  "InvalidDBClusterStateFault",
)<{
  readonly message?: string;
}> {}
export declare class InvalidDBInstanceAutomatedBackupStateFault extends Data.TaggedError(
  "InvalidDBInstanceAutomatedBackupStateFault",
)<{
  readonly message?: string;
}> {}
export declare class InvalidDBInstanceStateFault extends Data.TaggedError(
  "InvalidDBInstanceStateFault",
)<{
  readonly message?: string;
}> {}
export declare class InvalidDBParameterGroupStateFault extends Data.TaggedError(
  "InvalidDBParameterGroupStateFault",
)<{
  readonly message?: string;
}> {}
export declare class InvalidDBProxyEndpointStateFault extends Data.TaggedError(
  "InvalidDBProxyEndpointStateFault",
)<{
  readonly message?: string;
}> {}
export declare class InvalidDBProxyStateFault extends Data.TaggedError(
  "InvalidDBProxyStateFault",
)<{
  readonly message?: string;
}> {}
export declare class InvalidDBSecurityGroupStateFault extends Data.TaggedError(
  "InvalidDBSecurityGroupStateFault",
)<{
  readonly message?: string;
}> {}
export declare class InvalidDBShardGroupStateFault extends Data.TaggedError(
  "InvalidDBShardGroupStateFault",
)<{
  readonly message?: string;
}> {}
export declare class InvalidDBSnapshotStateFault extends Data.TaggedError(
  "InvalidDBSnapshotStateFault",
)<{
  readonly message?: string;
}> {}
export declare class InvalidDBSubnetGroupFault extends Data.TaggedError(
  "InvalidDBSubnetGroupFault",
)<{
  readonly message?: string;
}> {}
export declare class InvalidDBSubnetGroupStateFault extends Data.TaggedError(
  "InvalidDBSubnetGroupStateFault",
)<{
  readonly message?: string;
}> {}
export declare class InvalidDBSubnetStateFault extends Data.TaggedError(
  "InvalidDBSubnetStateFault",
)<{
  readonly message?: string;
}> {}
export declare class InvalidEventSubscriptionStateFault extends Data.TaggedError(
  "InvalidEventSubscriptionStateFault",
)<{
  readonly message?: string;
}> {}
export declare class InvalidExportOnlyFault extends Data.TaggedError(
  "InvalidExportOnlyFault",
)<{
  readonly message?: string;
}> {}
export declare class InvalidExportSourceStateFault extends Data.TaggedError(
  "InvalidExportSourceStateFault",
)<{
  readonly message?: string;
}> {}
export declare class InvalidExportTaskStateFault extends Data.TaggedError(
  "InvalidExportTaskStateFault",
)<{
  readonly message?: string;
}> {}
export declare class InvalidGlobalClusterStateFault extends Data.TaggedError(
  "InvalidGlobalClusterStateFault",
)<{
  readonly message?: string;
}> {}
export declare class InvalidIntegrationStateFault extends Data.TaggedError(
  "InvalidIntegrationStateFault",
)<{
  readonly message?: string;
}> {}
export declare class InvalidOptionGroupStateFault extends Data.TaggedError(
  "InvalidOptionGroupStateFault",
)<{
  readonly message?: string;
}> {}
export declare class InvalidResourceStateFault extends Data.TaggedError(
  "InvalidResourceStateFault",
)<{
  readonly message?: string;
}> {}
export declare class InvalidRestoreFault extends Data.TaggedError(
  "InvalidRestoreFault",
)<{
  readonly message?: string;
}> {}
export declare class InvalidS3BucketFault extends Data.TaggedError(
  "InvalidS3BucketFault",
)<{
  readonly message?: string;
}> {}
export declare class InvalidSubnet extends Data.TaggedError("InvalidSubnet")<{
  readonly message?: string;
}> {}
export declare class InvalidVPCNetworkStateFault extends Data.TaggedError(
  "InvalidVPCNetworkStateFault",
)<{
  readonly message?: string;
}> {}
export interface IPRange {
  Status?: string;
  CIDRIP?: string;
}
export type IPRangeList = Array<IPRange>;
export interface IssueDetails {
  PerformanceIssueDetails?: PerformanceIssueDetails;
}
export type KeyList = Array<string>;
export type KmsKeyIdOrArn = string;

export declare class KMSKeyNotAccessibleFault extends Data.TaggedError(
  "KMSKeyNotAccessibleFault",
)<{
  readonly message?: string;
}> {}
export type LifecycleSupportName =
  | "OPEN_SOURCE_RDS_STANDARD_SUPPORT"
  | "OPEN_SOURCE_RDS_EXTENDED_SUPPORT";
export interface LimitlessDatabase {
  Status?: LimitlessDatabaseStatus;
  MinRequiredACU?: number;
}
export type LimitlessDatabaseStatus =
  | "ACTIVE"
  | "NOT_IN_USE"
  | "ENABLED"
  | "DISABLED"
  | "ENABLING"
  | "DISABLING"
  | "MODIFYING_MAX_CAPACITY"
  | "ERROR";
export interface ListTagsForResourceMessage {
  ResourceName: string;
  Filters?: Array<Filter>;
}
export type LocalWriteForwardingStatus =
  | "ENABLED"
  | "DISABLED"
  | "ENABLING"
  | "DISABLING"
  | "REQUESTED";
export type LogTypeList = Array<string>;
export type Long = number;

export type LongOptional = number;

export type MajorEngineVersion = string;

export type Marker = string;

export interface MasterUserSecret {
  SecretArn?: string;
  SecretStatus?: string;
  KmsKeyId?: string;
}
export declare class MaxDBShardGroupLimitReached extends Data.TaggedError(
  "MaxDBShardGroupLimitReached",
)<{
  readonly message?: string;
}> {}
export type MaxRecords = number;

export interface Metric {
  Name?: string;
  References?: Array<MetricReference>;
  StatisticsDetails?: string;
  MetricQuery?: MetricQuery;
}
export type MetricList = Array<Metric>;
export interface MetricQuery {
  PerformanceInsightsMetricQuery?: PerformanceInsightsMetricQuery;
}
export interface MetricReference {
  Name?: string;
  ReferenceDetails?: ReferenceDetails;
}
export type MetricReferenceList = Array<MetricReference>;
export interface MinimumEngineVersionPerAllowedValue {
  AllowedValue?: string;
  MinimumEngineVersion?: string;
}
export type MinimumEngineVersionPerAllowedValueList =
  Array<MinimumEngineVersionPerAllowedValue>;
export interface ModifyActivityStreamRequest {
  ResourceArn?: string;
  AuditPolicyState?: AuditPolicyState;
}
export interface ModifyActivityStreamResponse {
  KmsKeyId?: string;
  KinesisStreamName?: string;
  Status?: ActivityStreamStatus;
  Mode?: ActivityStreamMode;
  EngineNativeAuditFieldsIncluded?: boolean;
  PolicyStatus?: ActivityStreamPolicyStatus;
}
export interface ModifyCertificatesMessage {
  CertificateIdentifier?: string;
  RemoveCustomerOverride?: boolean;
}
export interface ModifyCertificatesResult {
  Certificate?: Certificate;
}
export interface ModifyCurrentDBClusterCapacityMessage {
  DBClusterIdentifier: string;
  Capacity?: number;
  SecondsBeforeTimeout?: number;
  TimeoutAction?: string;
}
export interface ModifyCustomDBEngineVersionMessage {
  Engine: string;
  EngineVersion: string;
  Description?: string;
  Status?: CustomEngineVersionStatus;
}
export interface ModifyDBClusterEndpointMessage {
  DBClusterEndpointIdentifier: string;
  EndpointType?: string;
  StaticMembers?: Array<string>;
  ExcludedMembers?: Array<string>;
}
export interface ModifyDBClusterMessage {
  DBClusterIdentifier: string;
  NewDBClusterIdentifier?: string;
  ApplyImmediately?: boolean;
  BackupRetentionPeriod?: number;
  DBClusterParameterGroupName?: string;
  VpcSecurityGroupIds?: Array<string>;
  Port?: number;
  MasterUserPassword?: string;
  OptionGroupName?: string;
  PreferredBackupWindow?: string;
  PreferredMaintenanceWindow?: string;
  EnableIAMDatabaseAuthentication?: boolean;
  BacktrackWindow?: number;
  CloudwatchLogsExportConfiguration?: CloudwatchLogsExportConfiguration;
  EngineVersion?: string;
  AllowMajorVersionUpgrade?: boolean;
  DBInstanceParameterGroupName?: string;
  Domain?: string;
  DomainIAMRoleName?: string;
  ScalingConfiguration?: ScalingConfiguration;
  DeletionProtection?: boolean;
  EnableHttpEndpoint?: boolean;
  CopyTagsToSnapshot?: boolean;
  EnableGlobalWriteForwarding?: boolean;
  DBClusterInstanceClass?: string;
  AllocatedStorage?: number;
  StorageType?: string;
  Iops?: number;
  AutoMinorVersionUpgrade?: boolean;
  MonitoringInterval?: number;
  MonitoringRoleArn?: string;
  DatabaseInsightsMode?: DatabaseInsightsMode;
  EnablePerformanceInsights?: boolean;
  PerformanceInsightsKMSKeyId?: string;
  PerformanceInsightsRetentionPeriod?: number;
  ServerlessV2ScalingConfiguration?: ServerlessV2ScalingConfiguration;
  NetworkType?: string;
  ManageMasterUserPassword?: boolean;
  RotateMasterUserPassword?: boolean;
  MasterUserSecretKmsKeyId?: string;
  EngineMode?: string;
  AllowEngineModeChange?: boolean;
  EnableLocalWriteForwarding?: boolean;
  AwsBackupRecoveryPointArn?: string;
  EnableLimitlessDatabase?: boolean;
  CACertificateIdentifier?: string;
}
export interface ModifyDBClusterParameterGroupMessage {
  DBClusterParameterGroupName: string;
  Parameters: Array<Parameter>;
}
export interface ModifyDBClusterResult {
  DBCluster?: DBCluster;
}
export interface ModifyDBClusterSnapshotAttributeMessage {
  DBClusterSnapshotIdentifier: string;
  AttributeName: string;
  ValuesToAdd?: Array<string>;
  ValuesToRemove?: Array<string>;
}
export interface ModifyDBClusterSnapshotAttributeResult {
  DBClusterSnapshotAttributesResult?: DBClusterSnapshotAttributesResult;
}
export interface ModifyDBInstanceMessage {
  DBInstanceIdentifier: string;
  AllocatedStorage?: number;
  DBInstanceClass?: string;
  DBSubnetGroupName?: string;
  DBSecurityGroups?: Array<string>;
  VpcSecurityGroupIds?: Array<string>;
  ApplyImmediately?: boolean;
  MasterUserPassword?: string;
  DBParameterGroupName?: string;
  BackupRetentionPeriod?: number;
  PreferredBackupWindow?: string;
  PreferredMaintenanceWindow?: string;
  MultiAZ?: boolean;
  EngineVersion?: string;
  AllowMajorVersionUpgrade?: boolean;
  AutoMinorVersionUpgrade?: boolean;
  LicenseModel?: string;
  Iops?: number;
  OptionGroupName?: string;
  NewDBInstanceIdentifier?: string;
  StorageType?: string;
  TdeCredentialArn?: string;
  TdeCredentialPassword?: string;
  CACertificateIdentifier?: string;
  Domain?: string;
  DomainFqdn?: string;
  DomainOu?: string;
  DomainAuthSecretArn?: string;
  DomainDnsIps?: Array<string>;
  CopyTagsToSnapshot?: boolean;
  MonitoringInterval?: number;
  DBPortNumber?: number;
  PubliclyAccessible?: boolean;
  MonitoringRoleArn?: string;
  DomainIAMRoleName?: string;
  DisableDomain?: boolean;
  PromotionTier?: number;
  EnableIAMDatabaseAuthentication?: boolean;
  DatabaseInsightsMode?: DatabaseInsightsMode;
  EnablePerformanceInsights?: boolean;
  PerformanceInsightsKMSKeyId?: string;
  PerformanceInsightsRetentionPeriod?: number;
  CloudwatchLogsExportConfiguration?: CloudwatchLogsExportConfiguration;
  ProcessorFeatures?: Array<ProcessorFeature>;
  UseDefaultProcessorFeatures?: boolean;
  DeletionProtection?: boolean;
  MaxAllocatedStorage?: number;
  CertificateRotationRestart?: boolean;
  ReplicaMode?: ReplicaMode;
  EnableCustomerOwnedIp?: boolean;
  AwsBackupRecoveryPointArn?: string;
  AutomationMode?: AutomationMode;
  ResumeFullAutomationModeMinutes?: number;
  NetworkType?: string;
  StorageThroughput?: number;
  ManageMasterUserPassword?: boolean;
  RotateMasterUserPassword?: boolean;
  MasterUserSecretKmsKeyId?: string;
  Engine?: string;
  DedicatedLogVolume?: boolean;
  MultiTenant?: boolean;
}
export interface ModifyDBInstanceResult {
  DBInstance?: DBInstance;
}
export interface ModifyDBParameterGroupMessage {
  DBParameterGroupName: string;
  Parameters: Array<Parameter>;
}
export interface ModifyDBProxyEndpointRequest {
  DBProxyEndpointName: string;
  NewDBProxyEndpointName?: string;
  VpcSecurityGroupIds?: Array<string>;
}
export interface ModifyDBProxyEndpointResponse {
  DBProxyEndpoint?: DBProxyEndpoint;
}
export interface ModifyDBProxyRequest {
  DBProxyName: string;
  NewDBProxyName?: string;
  Auth?: Array<UserAuthConfig>;
  RequireTLS?: boolean;
  IdleClientTimeout?: number;
  DebugLogging?: boolean;
  RoleArn?: string;
  SecurityGroups?: Array<string>;
}
export interface ModifyDBProxyResponse {
  DBProxy?: DBProxy;
}
export interface ModifyDBProxyTargetGroupRequest {
  TargetGroupName: string;
  DBProxyName: string;
  ConnectionPoolConfig?: ConnectionPoolConfiguration;
  NewName?: string;
}
export interface ModifyDBProxyTargetGroupResponse {
  DBProxyTargetGroup?: DBProxyTargetGroup;
}
export interface ModifyDBRecommendationMessage {
  RecommendationId: string;
  Locale?: string;
  Status?: string;
  RecommendedActionUpdates?: Array<RecommendedActionUpdate>;
}
export interface ModifyDBShardGroupMessage {
  DBShardGroupIdentifier: string;
  MaxACU?: number;
  MinACU?: number;
  ComputeRedundancy?: number;
}
export interface ModifyDBSnapshotAttributeMessage {
  DBSnapshotIdentifier: string;
  AttributeName: string;
  ValuesToAdd?: Array<string>;
  ValuesToRemove?: Array<string>;
}
export interface ModifyDBSnapshotAttributeResult {
  DBSnapshotAttributesResult?: DBSnapshotAttributesResult;
}
export interface ModifyDBSnapshotMessage {
  DBSnapshotIdentifier: string;
  EngineVersion?: string;
  OptionGroupName?: string;
}
export interface ModifyDBSnapshotResult {
  DBSnapshot?: DBSnapshot;
}
export interface ModifyDBSubnetGroupMessage {
  DBSubnetGroupName: string;
  DBSubnetGroupDescription?: string;
  SubnetIds: Array<string>;
}
export interface ModifyDBSubnetGroupResult {
  DBSubnetGroup?: DBSubnetGroup;
}
export interface ModifyEventSubscriptionMessage {
  SubscriptionName: string;
  SnsTopicArn?: string;
  SourceType?: string;
  EventCategories?: Array<string>;
  Enabled?: boolean;
}
export interface ModifyEventSubscriptionResult {
  EventSubscription?: EventSubscription;
}
export interface ModifyGlobalClusterMessage {
  GlobalClusterIdentifier?: string;
  NewGlobalClusterIdentifier?: string;
  DeletionProtection?: boolean;
  EngineVersion?: string;
  AllowMajorVersionUpgrade?: boolean;
}
export interface ModifyGlobalClusterResult {
  GlobalCluster?: GlobalCluster;
}
export interface ModifyIntegrationMessage {
  IntegrationIdentifier: string;
  IntegrationName?: string;
  DataFilter?: string;
  Description?: string;
}
export interface ModifyOptionGroupMessage {
  OptionGroupName: string;
  OptionsToInclude?: Array<OptionConfiguration>;
  OptionsToRemove?: Array<string>;
  ApplyImmediately?: boolean;
}
export interface ModifyOptionGroupResult {
  OptionGroup?: OptionGroup;
}
export interface ModifyTenantDatabaseMessage {
  DBInstanceIdentifier: string;
  TenantDBName: string;
  MasterUserPassword?: string;
  NewTenantDBName?: string;
  ManageMasterUserPassword?: boolean;
  RotateMasterUserPassword?: boolean;
  MasterUserSecretKmsKeyId?: string;
}
export interface ModifyTenantDatabaseResult {
  TenantDatabase?: TenantDatabase;
}
export declare class NetworkTypeNotSupported extends Data.TaggedError(
  "NetworkTypeNotSupported",
)<{
  readonly message?: string;
}> {}
export interface Option {
  OptionName?: string;
  OptionDescription?: string;
  Persistent?: boolean;
  Permanent?: boolean;
  Port?: number;
  OptionVersion?: string;
  OptionSettings?: Array<OptionSetting>;
  DBSecurityGroupMemberships?: Array<DBSecurityGroupMembership>;
  VpcSecurityGroupMemberships?: Array<VpcSecurityGroupMembership>;
}
export interface OptionConfiguration {
  OptionName: string;
  Port?: number;
  OptionVersion?: string;
  DBSecurityGroupMemberships?: Array<string>;
  VpcSecurityGroupMemberships?: Array<string>;
  OptionSettings?: Array<OptionSetting>;
}
export type OptionConfigurationList = Array<OptionConfiguration>;
export interface OptionGroup {
  OptionGroupName?: string;
  OptionGroupDescription?: string;
  EngineName?: string;
  MajorEngineVersion?: string;
  Options?: Array<Option>;
  AllowsVpcAndNonVpcInstanceMemberships?: boolean;
  VpcId?: string;
  OptionGroupArn?: string;
  SourceOptionGroup?: string;
  SourceAccountId?: string;
  CopyTimestamp?: Date | string;
}
export declare class OptionGroupAlreadyExistsFault extends Data.TaggedError(
  "OptionGroupAlreadyExistsFault",
)<{
  readonly message?: string;
}> {}
export interface OptionGroupMembership {
  OptionGroupName?: string;
  Status?: string;
}
export type OptionGroupMembershipList = Array<OptionGroupMembership>;
export declare class OptionGroupNotFoundFault extends Data.TaggedError(
  "OptionGroupNotFoundFault",
)<{
  readonly message?: string;
}> {}
export interface OptionGroupOption {
  Name?: string;
  Description?: string;
  EngineName?: string;
  MajorEngineVersion?: string;
  MinimumRequiredMinorEngineVersion?: string;
  PortRequired?: boolean;
  DefaultPort?: number;
  OptionsDependedOn?: Array<string>;
  OptionsConflictsWith?: Array<string>;
  Persistent?: boolean;
  Permanent?: boolean;
  RequiresAutoMinorEngineVersionUpgrade?: boolean;
  VpcOnly?: boolean;
  SupportsOptionVersionDowngrade?: boolean;
  OptionGroupOptionSettings?: Array<OptionGroupOptionSetting>;
  OptionGroupOptionVersions?: Array<OptionVersion>;
  CopyableCrossAccount?: boolean;
}
export interface OptionGroupOptionSetting {
  SettingName?: string;
  SettingDescription?: string;
  DefaultValue?: string;
  ApplyType?: string;
  AllowedValues?: string;
  IsModifiable?: boolean;
  IsRequired?: boolean;
  MinimumEngineVersionPerAllowedValue?: Array<MinimumEngineVersionPerAllowedValue>;
}
export type OptionGroupOptionSettingsList = Array<OptionGroupOptionSetting>;
export type OptionGroupOptionsList = Array<OptionGroupOption>;
export interface OptionGroupOptionsMessage {
  OptionGroupOptions?: Array<OptionGroupOption>;
  Marker?: string;
}
export type OptionGroupOptionVersionsList = Array<OptionVersion>;
export declare class OptionGroupQuotaExceededFault extends Data.TaggedError(
  "OptionGroupQuotaExceededFault",
)<{
  readonly message?: string;
}> {}
export interface OptionGroups {
  OptionGroupsList?: Array<OptionGroup>;
  Marker?: string;
}
export type OptionGroupsList = Array<OptionGroup>;
export type OptionNamesList = Array<string>;
export type OptionsConflictsWith = Array<string>;
export type OptionsDependedOn = Array<string>;
export interface OptionSetting {
  Name?: string;
  Value?: string;
  DefaultValue?: string;
  Description?: string;
  ApplyType?: string;
  DataType?: string;
  AllowedValues?: string;
  IsModifiable?: boolean;
  IsCollection?: boolean;
}
export type OptionSettingConfigurationList = Array<OptionSetting>;
export type OptionSettingsList = Array<OptionSetting>;
export type OptionsList = Array<Option>;
export interface OptionVersion {
  Version?: string;
  IsDefault?: boolean;
}
export interface OrderableDBInstanceOption {
  Engine?: string;
  EngineVersion?: string;
  DBInstanceClass?: string;
  LicenseModel?: string;
  AvailabilityZoneGroup?: string;
  AvailabilityZones?: Array<AvailabilityZone>;
  MultiAZCapable?: boolean;
  ReadReplicaCapable?: boolean;
  Vpc?: boolean;
  SupportsStorageEncryption?: boolean;
  StorageType?: string;
  SupportsIops?: boolean;
  SupportsEnhancedMonitoring?: boolean;
  SupportsIAMDatabaseAuthentication?: boolean;
  SupportsPerformanceInsights?: boolean;
  MinStorageSize?: number;
  MaxStorageSize?: number;
  MinIopsPerDbInstance?: number;
  MaxIopsPerDbInstance?: number;
  MinIopsPerGib?: number;
  MaxIopsPerGib?: number;
  AvailableProcessorFeatures?: Array<AvailableProcessorFeature>;
  SupportedEngineModes?: Array<string>;
  SupportsStorageAutoscaling?: boolean;
  SupportsKerberosAuthentication?: boolean;
  OutpostCapable?: boolean;
  SupportedActivityStreamModes?: Array<string>;
  SupportsGlobalDatabases?: boolean;
  SupportsClusters?: boolean;
  SupportedNetworkTypes?: Array<string>;
  SupportsStorageThroughput?: boolean;
  MinStorageThroughputPerDbInstance?: number;
  MaxStorageThroughputPerDbInstance?: number;
  MinStorageThroughputPerIops?: number;
  MaxStorageThroughputPerIops?: number;
  SupportsDedicatedLogVolume?: boolean;
}
export type OrderableDBInstanceOptionsList = Array<OrderableDBInstanceOption>;
export interface OrderableDBInstanceOptionsMessage {
  OrderableDBInstanceOptions?: Array<OrderableDBInstanceOption>;
  Marker?: string;
}
export interface Outpost {
  Arn?: string;
}
export interface Parameter {
  ParameterName?: string;
  ParameterValue?: string;
  Description?: string;
  Source?: string;
  ApplyType?: string;
  DataType?: string;
  AllowedValues?: string;
  IsModifiable?: boolean;
  MinimumEngineVersion?: string;
  ApplyMethod?: ApplyMethod;
  SupportedEngineModes?: Array<string>;
}
export type ParametersList = Array<Parameter>;
export interface PendingCloudwatchLogsExports {
  LogTypesToEnable?: Array<string>;
  LogTypesToDisable?: Array<string>;
}
export interface PendingMaintenanceAction {
  Action?: string;
  AutoAppliedAfterDate?: Date | string;
  ForcedApplyDate?: Date | string;
  OptInStatus?: string;
  CurrentApplyDate?: Date | string;
  Description?: string;
}
export type PendingMaintenanceActionDetails = Array<PendingMaintenanceAction>;
export type PendingMaintenanceActions =
  Array<ResourcePendingMaintenanceActions>;
export interface PendingMaintenanceActionsMessage {
  PendingMaintenanceActions?: Array<ResourcePendingMaintenanceActions>;
  Marker?: string;
}
export interface PendingModifiedValues {
  DBInstanceClass?: string;
  AllocatedStorage?: number;
  MasterUserPassword?: string;
  Port?: number;
  BackupRetentionPeriod?: number;
  MultiAZ?: boolean;
  EngineVersion?: string;
  LicenseModel?: string;
  Iops?: number;
  DBInstanceIdentifier?: string;
  StorageType?: string;
  CACertificateIdentifier?: string;
  DBSubnetGroupName?: string;
  PendingCloudwatchLogsExports?: PendingCloudwatchLogsExports;
  ProcessorFeatures?: Array<ProcessorFeature>;
  IAMDatabaseAuthenticationEnabled?: boolean;
  AutomationMode?: AutomationMode;
  ResumeFullAutomationModeTime?: Date | string;
  StorageThroughput?: number;
  Engine?: string;
  DedicatedLogVolume?: boolean;
  MultiTenant?: boolean;
}
export interface PerformanceInsightsMetricDimensionGroup {
  Dimensions?: Array<string>;
  Group?: string;
  Limit?: number;
}
export interface PerformanceInsightsMetricQuery {
  GroupBy?: PerformanceInsightsMetricDimensionGroup;
  Metric?: string;
}
export interface PerformanceIssueDetails {
  StartTime?: Date | string;
  EndTime?: Date | string;
  Metrics?: Array<Metric>;
  Analysis?: string;
}
export declare class PointInTimeRestoreNotEnabledFault extends Data.TaggedError(
  "PointInTimeRestoreNotEnabledFault",
)<{
  readonly message?: string;
}> {}
export interface ProcessorFeature {
  Name?: string;
  Value?: string;
}
export type ProcessorFeatureList = Array<ProcessorFeature>;
export interface PromoteReadReplicaDBClusterMessage {
  DBClusterIdentifier: string;
}
export interface PromoteReadReplicaDBClusterResult {
  DBCluster?: DBCluster;
}
export interface PromoteReadReplicaMessage {
  DBInstanceIdentifier: string;
  BackupRetentionPeriod?: number;
  PreferredBackupWindow?: string;
}
export interface PromoteReadReplicaResult {
  DBInstance?: DBInstance;
}
export declare class ProvisionedIopsNotAvailableInAZFault extends Data.TaggedError(
  "ProvisionedIopsNotAvailableInAZFault",
)<{
  readonly message?: string;
}> {}
export interface PurchaseReservedDBInstancesOfferingMessage {
  ReservedDBInstancesOfferingId: string;
  ReservedDBInstanceId?: string;
  DBInstanceCount?: number;
  Tags?: Array<Tag>;
}
export interface PurchaseReservedDBInstancesOfferingResult {
  ReservedDBInstance?: ReservedDBInstance;
}
export interface Range {
  From?: number;
  To?: number;
  Step?: number;
}
export type RangeList = Array<Range>;
export interface RdsCustomClusterConfiguration {
  InterconnectSubnetId?: string;
  TransitGatewayMulticastDomainId?: string;
  ReplicaMode?: ReplicaMode;
}
export type ReadersArnList = Array<string>;
export type ReadReplicaDBClusterIdentifierList = Array<string>;
export type ReadReplicaDBInstanceIdentifierList = Array<string>;
export type ReadReplicaIdentifierList = Array<string>;
export interface RebootDBClusterMessage {
  DBClusterIdentifier: string;
}
export interface RebootDBClusterResult {
  DBCluster?: DBCluster;
}
export interface RebootDBInstanceMessage {
  DBInstanceIdentifier: string;
  ForceFailover?: boolean;
}
export interface RebootDBInstanceResult {
  DBInstance?: DBInstance;
}
export interface RebootDBShardGroupMessage {
  DBShardGroupIdentifier: string;
}
export interface RecommendedAction {
  ActionId?: string;
  Title?: string;
  Description?: string;
  Operation?: string;
  Parameters?: Array<RecommendedActionParameter>;
  ApplyModes?: Array<string>;
  Status?: string;
  IssueDetails?: IssueDetails;
  ContextAttributes?: Array<ContextAttribute>;
}
export type RecommendedActionList = Array<RecommendedAction>;
export interface RecommendedActionParameter {
  Key?: string;
  Value?: string;
}
export type RecommendedActionParameterList = Array<RecommendedActionParameter>;
export interface RecommendedActionUpdate {
  ActionId: string;
  Status: string;
}
export type RecommendedActionUpdateList = Array<RecommendedActionUpdate>;
export interface RecurringCharge {
  RecurringChargeAmount?: number;
  RecurringChargeFrequency?: string;
}
export type RecurringChargeList = Array<RecurringCharge>;
export interface ReferenceDetails {
  ScalarReferenceDetails?: ScalarReferenceDetails;
}
export interface RegisterDBProxyTargetsRequest {
  DBProxyName: string;
  TargetGroupName?: string;
  DBInstanceIdentifiers?: Array<string>;
  DBClusterIdentifiers?: Array<string>;
}
export interface RegisterDBProxyTargetsResponse {
  DBProxyTargets?: Array<DBProxyTarget>;
}
export interface RemoveFromGlobalClusterMessage {
  GlobalClusterIdentifier?: string;
  DbClusterIdentifier?: string;
}
export interface RemoveFromGlobalClusterResult {
  GlobalCluster?: GlobalCluster;
}
export interface RemoveRoleFromDBClusterMessage {
  DBClusterIdentifier: string;
  RoleArn: string;
  FeatureName?: string;
}
export interface RemoveRoleFromDBInstanceMessage {
  DBInstanceIdentifier: string;
  RoleArn: string;
  FeatureName: string;
}
export interface RemoveSourceIdentifierFromSubscriptionMessage {
  SubscriptionName: string;
  SourceIdentifier: string;
}
export interface RemoveSourceIdentifierFromSubscriptionResult {
  EventSubscription?: EventSubscription;
}
export interface RemoveTagsFromResourceMessage {
  ResourceName: string;
  TagKeys: Array<string>;
}
export type ReplicaMode = "OPEN_READ_ONLY" | "MOUNTED";
export interface ReservedDBInstance {
  ReservedDBInstanceId?: string;
  ReservedDBInstancesOfferingId?: string;
  DBInstanceClass?: string;
  StartTime?: Date | string;
  Duration?: number;
  FixedPrice?: number;
  UsagePrice?: number;
  CurrencyCode?: string;
  DBInstanceCount?: number;
  ProductDescription?: string;
  OfferingType?: string;
  MultiAZ?: boolean;
  State?: string;
  RecurringCharges?: Array<RecurringCharge>;
  ReservedDBInstanceArn?: string;
  LeaseId?: string;
}
export declare class ReservedDBInstanceAlreadyExistsFault extends Data.TaggedError(
  "ReservedDBInstanceAlreadyExistsFault",
)<{
  readonly message?: string;
}> {}
export type ReservedDBInstanceList = Array<ReservedDBInstance>;
export interface ReservedDBInstanceMessage {
  Marker?: string;
  ReservedDBInstances?: Array<ReservedDBInstance>;
}
export declare class ReservedDBInstanceNotFoundFault extends Data.TaggedError(
  "ReservedDBInstanceNotFoundFault",
)<{
  readonly message?: string;
}> {}
export declare class ReservedDBInstanceQuotaExceededFault extends Data.TaggedError(
  "ReservedDBInstanceQuotaExceededFault",
)<{
  readonly message?: string;
}> {}
export interface ReservedDBInstancesOffering {
  ReservedDBInstancesOfferingId?: string;
  DBInstanceClass?: string;
  Duration?: number;
  FixedPrice?: number;
  UsagePrice?: number;
  CurrencyCode?: string;
  ProductDescription?: string;
  OfferingType?: string;
  MultiAZ?: boolean;
  RecurringCharges?: Array<RecurringCharge>;
}
export type ReservedDBInstancesOfferingList =
  Array<ReservedDBInstancesOffering>;
export interface ReservedDBInstancesOfferingMessage {
  Marker?: string;
  ReservedDBInstancesOfferings?: Array<ReservedDBInstancesOffering>;
}
export declare class ReservedDBInstancesOfferingNotFoundFault extends Data.TaggedError(
  "ReservedDBInstancesOfferingNotFoundFault",
)<{
  readonly message?: string;
}> {}
export interface ResetDBClusterParameterGroupMessage {
  DBClusterParameterGroupName: string;
  ResetAllParameters?: boolean;
  Parameters?: Array<Parameter>;
}
export interface ResetDBParameterGroupMessage {
  DBParameterGroupName: string;
  ResetAllParameters?: boolean;
  Parameters?: Array<Parameter>;
}
export declare class ResourceNotFoundFault extends Data.TaggedError(
  "ResourceNotFoundFault",
)<{
  readonly message?: string;
}> {}
export interface ResourcePendingMaintenanceActions {
  ResourceIdentifier?: string;
  PendingMaintenanceActionDetails?: Array<PendingMaintenanceAction>;
}
export interface RestoreDBClusterFromS3Message {
  AvailabilityZones?: Array<string>;
  BackupRetentionPeriod?: number;
  CharacterSetName?: string;
  DatabaseName?: string;
  DBClusterIdentifier: string;
  DBClusterParameterGroupName?: string;
  VpcSecurityGroupIds?: Array<string>;
  DBSubnetGroupName?: string;
  Engine: string;
  EngineVersion?: string;
  Port?: number;
  MasterUsername: string;
  MasterUserPassword?: string;
  OptionGroupName?: string;
  PreferredBackupWindow?: string;
  PreferredMaintenanceWindow?: string;
  Tags?: Array<Tag>;
  StorageEncrypted?: boolean;
  KmsKeyId?: string;
  EnableIAMDatabaseAuthentication?: boolean;
  SourceEngine: string;
  SourceEngineVersion: string;
  S3BucketName: string;
  S3Prefix?: string;
  S3IngestionRoleArn: string;
  BacktrackWindow?: number;
  EnableCloudwatchLogsExports?: Array<string>;
  DeletionProtection?: boolean;
  CopyTagsToSnapshot?: boolean;
  Domain?: string;
  DomainIAMRoleName?: string;
  ServerlessV2ScalingConfiguration?: ServerlessV2ScalingConfiguration;
  NetworkType?: string;
  ManageMasterUserPassword?: boolean;
  MasterUserSecretKmsKeyId?: string;
  StorageType?: string;
  EngineLifecycleSupport?: string;
}
export interface RestoreDBClusterFromS3Result {
  DBCluster?: DBCluster;
}
export interface RestoreDBClusterFromSnapshotMessage {
  AvailabilityZones?: Array<string>;
  DBClusterIdentifier: string;
  SnapshotIdentifier: string;
  Engine: string;
  EngineVersion?: string;
  Port?: number;
  DBSubnetGroupName?: string;
  DatabaseName?: string;
  OptionGroupName?: string;
  VpcSecurityGroupIds?: Array<string>;
  Tags?: Array<Tag>;
  KmsKeyId?: string;
  EnableIAMDatabaseAuthentication?: boolean;
  BacktrackWindow?: number;
  EnableCloudwatchLogsExports?: Array<string>;
  EngineMode?: string;
  ScalingConfiguration?: ScalingConfiguration;
  DBClusterParameterGroupName?: string;
  DeletionProtection?: boolean;
  CopyTagsToSnapshot?: boolean;
  Domain?: string;
  DomainIAMRoleName?: string;
  DBClusterInstanceClass?: string;
  StorageType?: string;
  Iops?: number;
  PubliclyAccessible?: boolean;
  ServerlessV2ScalingConfiguration?: ServerlessV2ScalingConfiguration;
  NetworkType?: string;
  RdsCustomClusterConfiguration?: RdsCustomClusterConfiguration;
  MonitoringInterval?: number;
  MonitoringRoleArn?: string;
  EnablePerformanceInsights?: boolean;
  PerformanceInsightsKMSKeyId?: string;
  PerformanceInsightsRetentionPeriod?: number;
  EngineLifecycleSupport?: string;
}
export interface RestoreDBClusterFromSnapshotResult {
  DBCluster?: DBCluster;
}
export interface RestoreDBClusterToPointInTimeMessage {
  DBClusterIdentifier: string;
  RestoreType?: string;
  SourceDBClusterIdentifier?: string;
  RestoreToTime?: Date | string;
  UseLatestRestorableTime?: boolean;
  Port?: number;
  DBSubnetGroupName?: string;
  OptionGroupName?: string;
  VpcSecurityGroupIds?: Array<string>;
  Tags?: Array<Tag>;
  KmsKeyId?: string;
  EnableIAMDatabaseAuthentication?: boolean;
  BacktrackWindow?: number;
  EnableCloudwatchLogsExports?: Array<string>;
  DBClusterParameterGroupName?: string;
  DeletionProtection?: boolean;
  CopyTagsToSnapshot?: boolean;
  Domain?: string;
  DomainIAMRoleName?: string;
  ScalingConfiguration?: ScalingConfiguration;
  EngineMode?: string;
  DBClusterInstanceClass?: string;
  StorageType?: string;
  PubliclyAccessible?: boolean;
  Iops?: number;
  ServerlessV2ScalingConfiguration?: ServerlessV2ScalingConfiguration;
  NetworkType?: string;
  SourceDbClusterResourceId?: string;
  RdsCustomClusterConfiguration?: RdsCustomClusterConfiguration;
  MonitoringInterval?: number;
  MonitoringRoleArn?: string;
  EnablePerformanceInsights?: boolean;
  PerformanceInsightsKMSKeyId?: string;
  PerformanceInsightsRetentionPeriod?: number;
  EngineLifecycleSupport?: string;
}
export interface RestoreDBClusterToPointInTimeResult {
  DBCluster?: DBCluster;
}
export interface RestoreDBInstanceFromDBSnapshotMessage {
  DBInstanceIdentifier: string;
  DBSnapshotIdentifier?: string;
  DBInstanceClass?: string;
  Port?: number;
  AvailabilityZone?: string;
  DBSubnetGroupName?: string;
  MultiAZ?: boolean;
  PubliclyAccessible?: boolean;
  AutoMinorVersionUpgrade?: boolean;
  LicenseModel?: string;
  DBName?: string;
  Engine?: string;
  Iops?: number;
  OptionGroupName?: string;
  Tags?: Array<Tag>;
  StorageType?: string;
  TdeCredentialArn?: string;
  TdeCredentialPassword?: string;
  VpcSecurityGroupIds?: Array<string>;
  Domain?: string;
  DomainFqdn?: string;
  DomainOu?: string;
  DomainAuthSecretArn?: string;
  DomainDnsIps?: Array<string>;
  CopyTagsToSnapshot?: boolean;
  DomainIAMRoleName?: string;
  EnableIAMDatabaseAuthentication?: boolean;
  EnableCloudwatchLogsExports?: Array<string>;
  ProcessorFeatures?: Array<ProcessorFeature>;
  UseDefaultProcessorFeatures?: boolean;
  DBParameterGroupName?: string;
  DeletionProtection?: boolean;
  EnableCustomerOwnedIp?: boolean;
  CustomIamInstanceProfile?: string;
  BackupTarget?: string;
  NetworkType?: string;
  StorageThroughput?: number;
  DBClusterSnapshotIdentifier?: string;
  AllocatedStorage?: number;
  DedicatedLogVolume?: boolean;
  CACertificateIdentifier?: string;
  EngineLifecycleSupport?: string;
  ManageMasterUserPassword?: boolean;
  MasterUserSecretKmsKeyId?: string;
}
export interface RestoreDBInstanceFromDBSnapshotResult {
  DBInstance?: DBInstance;
}
export interface RestoreDBInstanceFromS3Message {
  DBName?: string;
  DBInstanceIdentifier: string;
  AllocatedStorage?: number;
  DBInstanceClass: string;
  Engine: string;
  MasterUsername?: string;
  MasterUserPassword?: string;
  DBSecurityGroups?: Array<string>;
  VpcSecurityGroupIds?: Array<string>;
  AvailabilityZone?: string;
  DBSubnetGroupName?: string;
  PreferredMaintenanceWindow?: string;
  DBParameterGroupName?: string;
  BackupRetentionPeriod?: number;
  PreferredBackupWindow?: string;
  Port?: number;
  MultiAZ?: boolean;
  EngineVersion?: string;
  AutoMinorVersionUpgrade?: boolean;
  LicenseModel?: string;
  Iops?: number;
  OptionGroupName?: string;
  PubliclyAccessible?: boolean;
  Tags?: Array<Tag>;
  StorageType?: string;
  StorageEncrypted?: boolean;
  KmsKeyId?: string;
  CopyTagsToSnapshot?: boolean;
  MonitoringInterval?: number;
  MonitoringRoleArn?: string;
  EnableIAMDatabaseAuthentication?: boolean;
  SourceEngine: string;
  SourceEngineVersion: string;
  S3BucketName: string;
  S3Prefix?: string;
  S3IngestionRoleArn: string;
  DatabaseInsightsMode?: DatabaseInsightsMode;
  EnablePerformanceInsights?: boolean;
  PerformanceInsightsKMSKeyId?: string;
  PerformanceInsightsRetentionPeriod?: number;
  EnableCloudwatchLogsExports?: Array<string>;
  ProcessorFeatures?: Array<ProcessorFeature>;
  UseDefaultProcessorFeatures?: boolean;
  DeletionProtection?: boolean;
  MaxAllocatedStorage?: number;
  NetworkType?: string;
  StorageThroughput?: number;
  ManageMasterUserPassword?: boolean;
  MasterUserSecretKmsKeyId?: string;
  DedicatedLogVolume?: boolean;
  CACertificateIdentifier?: string;
  EngineLifecycleSupport?: string;
}
export interface RestoreDBInstanceFromS3Result {
  DBInstance?: DBInstance;
}
export interface RestoreDBInstanceToPointInTimeMessage {
  SourceDBInstanceIdentifier?: string;
  TargetDBInstanceIdentifier: string;
  RestoreTime?: Date | string;
  UseLatestRestorableTime?: boolean;
  DBInstanceClass?: string;
  Port?: number;
  AvailabilityZone?: string;
  DBSubnetGroupName?: string;
  MultiAZ?: boolean;
  PubliclyAccessible?: boolean;
  AutoMinorVersionUpgrade?: boolean;
  LicenseModel?: string;
  DBName?: string;
  Engine?: string;
  Iops?: number;
  OptionGroupName?: string;
  CopyTagsToSnapshot?: boolean;
  Tags?: Array<Tag>;
  StorageType?: string;
  TdeCredentialArn?: string;
  TdeCredentialPassword?: string;
  VpcSecurityGroupIds?: Array<string>;
  Domain?: string;
  DomainIAMRoleName?: string;
  DomainFqdn?: string;
  DomainOu?: string;
  DomainAuthSecretArn?: string;
  DomainDnsIps?: Array<string>;
  EnableIAMDatabaseAuthentication?: boolean;
  EnableCloudwatchLogsExports?: Array<string>;
  ProcessorFeatures?: Array<ProcessorFeature>;
  UseDefaultProcessorFeatures?: boolean;
  DBParameterGroupName?: string;
  DeletionProtection?: boolean;
  SourceDbiResourceId?: string;
  MaxAllocatedStorage?: number;
  SourceDBInstanceAutomatedBackupsArn?: string;
  EnableCustomerOwnedIp?: boolean;
  CustomIamInstanceProfile?: string;
  BackupTarget?: string;
  NetworkType?: string;
  StorageThroughput?: number;
  AllocatedStorage?: number;
  DedicatedLogVolume?: boolean;
  CACertificateIdentifier?: string;
  EngineLifecycleSupport?: string;
  ManageMasterUserPassword?: boolean;
  MasterUserSecretKmsKeyId?: string;
}
export interface RestoreDBInstanceToPointInTimeResult {
  DBInstance?: DBInstance;
}
export interface RestoreWindow {
  EarliestTime?: Date | string;
  LatestTime?: Date | string;
}
export interface RevokeDBSecurityGroupIngressMessage {
  DBSecurityGroupName: string;
  CIDRIP?: string;
  EC2SecurityGroupName?: string;
  EC2SecurityGroupId?: string;
  EC2SecurityGroupOwnerId?: string;
}
export interface RevokeDBSecurityGroupIngressResult {
  DBSecurityGroup?: DBSecurityGroup;
}
export interface ScalarReferenceDetails {
  Value?: number;
}
export interface ScalingConfiguration {
  MinCapacity?: number;
  MaxCapacity?: number;
  AutoPause?: boolean;
  SecondsUntilAutoPause?: number;
  TimeoutAction?: string;
  SecondsBeforeTimeout?: number;
}
export interface ScalingConfigurationInfo {
  MinCapacity?: number;
  MaxCapacity?: number;
  AutoPause?: boolean;
  SecondsUntilAutoPause?: number;
  TimeoutAction?: string;
  SecondsBeforeTimeout?: number;
}
export type SensitiveString = string;

export interface ServerlessV2FeaturesSupport {
  MinCapacity?: number;
  MaxCapacity?: number;
}
export interface ServerlessV2ScalingConfiguration {
  MinCapacity?: number;
  MaxCapacity?: number;
  SecondsUntilAutoPause?: number;
}
export interface ServerlessV2ScalingConfigurationInfo {
  MinCapacity?: number;
  MaxCapacity?: number;
  SecondsUntilAutoPause?: number;
}
export declare class SharedSnapshotQuotaExceededFault extends Data.TaggedError(
  "SharedSnapshotQuotaExceededFault",
)<{
  readonly message?: string;
}> {}
export declare class SnapshotQuotaExceededFault extends Data.TaggedError(
  "SnapshotQuotaExceededFault",
)<{
  readonly message?: string;
}> {}
export declare class SNSInvalidTopicFault extends Data.TaggedError(
  "SNSInvalidTopicFault",
)<{
  readonly message?: string;
}> {}
export declare class SNSNoAuthorizationFault extends Data.TaggedError(
  "SNSNoAuthorizationFault",
)<{
  readonly message?: string;
}> {}
export declare class SNSTopicArnNotFoundFault extends Data.TaggedError(
  "SNSTopicArnNotFoundFault",
)<{
  readonly message?: string;
}> {}
export type SourceArn = string;

export declare class SourceClusterNotSupportedFault extends Data.TaggedError(
  "SourceClusterNotSupportedFault",
)<{
  readonly message?: string;
}> {}
export declare class SourceDatabaseNotSupportedFault extends Data.TaggedError(
  "SourceDatabaseNotSupportedFault",
)<{
  readonly message?: string;
}> {}
export type SourceIdsList = Array<string>;
export declare class SourceNotFoundFault extends Data.TaggedError(
  "SourceNotFoundFault",
)<{
  readonly message?: string;
}> {}
export interface SourceRegion {
  RegionName?: string;
  Endpoint?: string;
  Status?: string;
  SupportsDBInstanceAutomatedBackupsReplication?: boolean;
}
export type SourceRegionList = Array<SourceRegion>;
export interface SourceRegionMessage {
  Marker?: string;
  SourceRegions?: Array<SourceRegion>;
}
export type SourceType =
  | "db_instance"
  | "db_parameter_group"
  | "db_security_group"
  | "db_snapshot"
  | "db_cluster"
  | "db_cluster_snapshot"
  | "custom_engine_version"
  | "db_proxy"
  | "blue_green_deployment";
export interface StartActivityStreamRequest {
  ResourceArn: string;
  Mode: ActivityStreamMode;
  KmsKeyId: string;
  ApplyImmediately?: boolean;
  EngineNativeAuditFieldsIncluded?: boolean;
}
export interface StartActivityStreamResponse {
  KmsKeyId?: string;
  KinesisStreamName?: string;
  Status?: ActivityStreamStatus;
  Mode?: ActivityStreamMode;
  ApplyImmediately?: boolean;
  EngineNativeAuditFieldsIncluded?: boolean;
}
export interface StartDBClusterMessage {
  DBClusterIdentifier: string;
}
export interface StartDBClusterResult {
  DBCluster?: DBCluster;
}
export interface StartDBInstanceAutomatedBackupsReplicationMessage {
  SourceDBInstanceArn: string;
  BackupRetentionPeriod?: number;
  KmsKeyId?: string;
  PreSignedUrl?: string;
}
export interface StartDBInstanceAutomatedBackupsReplicationResult {
  DBInstanceAutomatedBackup?: DBInstanceAutomatedBackup;
}
export interface StartDBInstanceMessage {
  DBInstanceIdentifier: string;
}
export interface StartDBInstanceResult {
  DBInstance?: DBInstance;
}
export interface StartExportTaskMessage {
  ExportTaskIdentifier: string;
  SourceArn: string;
  S3BucketName: string;
  IamRoleArn: string;
  KmsKeyId: string;
  S3Prefix?: string;
  ExportOnly?: Array<string>;
}
export interface StopActivityStreamRequest {
  ResourceArn: string;
  ApplyImmediately?: boolean;
}
export interface StopActivityStreamResponse {
  KmsKeyId?: string;
  KinesisStreamName?: string;
  Status?: ActivityStreamStatus;
}
export interface StopDBClusterMessage {
  DBClusterIdentifier: string;
}
export interface StopDBClusterResult {
  DBCluster?: DBCluster;
}
export interface StopDBInstanceAutomatedBackupsReplicationMessage {
  SourceDBInstanceArn: string;
}
export interface StopDBInstanceAutomatedBackupsReplicationResult {
  DBInstanceAutomatedBackup?: DBInstanceAutomatedBackup;
}
export interface StopDBInstanceMessage {
  DBInstanceIdentifier: string;
  DBSnapshotIdentifier?: string;
}
export interface StopDBInstanceResult {
  DBInstance?: DBInstance;
}
export declare class StorageQuotaExceededFault extends Data.TaggedError(
  "StorageQuotaExceededFault",
)<{
  readonly message?: string;
}> {}
export declare class StorageTypeNotAvailableFault extends Data.TaggedError(
  "StorageTypeNotAvailableFault",
)<{
  readonly message?: string;
}> {}
export declare class StorageTypeNotSupportedFault extends Data.TaggedError(
  "StorageTypeNotSupportedFault",
)<{
  readonly message?: string;
}> {}
export type String255 = string;

export type StringList = Array<string>;
export interface Subnet {
  SubnetIdentifier?: string;
  SubnetAvailabilityZone?: AvailabilityZone;
  SubnetOutpost?: Outpost;
  SubnetStatus?: string;
}
export declare class SubnetAlreadyInUse extends Data.TaggedError(
  "SubnetAlreadyInUse",
)<{
  readonly message?: string;
}> {}
export type SubnetIdentifierList = Array<string>;
export type SubnetList = Array<Subnet>;
export declare class SubscriptionAlreadyExistFault extends Data.TaggedError(
  "SubscriptionAlreadyExistFault",
)<{
  readonly message?: string;
}> {}
export declare class SubscriptionCategoryNotFoundFault extends Data.TaggedError(
  "SubscriptionCategoryNotFoundFault",
)<{
  readonly message?: string;
}> {}
export declare class SubscriptionNotFoundFault extends Data.TaggedError(
  "SubscriptionNotFoundFault",
)<{
  readonly message?: string;
}> {}
export type SupportedCharacterSetsList = Array<CharacterSet>;
export interface SupportedEngineLifecycle {
  LifecycleSupportName: LifecycleSupportName;
  LifecycleSupportStartDate: Date | string;
  LifecycleSupportEndDate: Date | string;
}
export type SupportedEngineLifecycleList = Array<SupportedEngineLifecycle>;
export type SupportedTimezonesList = Array<Timezone>;
export interface SwitchoverBlueGreenDeploymentRequest {
  BlueGreenDeploymentIdentifier: string;
  SwitchoverTimeout?: number;
}
export interface SwitchoverBlueGreenDeploymentResponse {
  BlueGreenDeployment?: BlueGreenDeployment;
}
export interface SwitchoverDetail {
  SourceMember?: string;
  TargetMember?: string;
  Status?: string;
}
export type SwitchoverDetailList = Array<SwitchoverDetail>;
export type SwitchoverDetailStatus = string;

export interface SwitchoverGlobalClusterMessage {
  GlobalClusterIdentifier: string;
  TargetDbClusterIdentifier: string;
}
export interface SwitchoverGlobalClusterResult {
  GlobalCluster?: GlobalCluster;
}
export interface SwitchoverReadReplicaMessage {
  DBInstanceIdentifier: string;
}
export interface SwitchoverReadReplicaResult {
  DBInstance?: DBInstance;
}
export type SwitchoverTimeout = number;

export interface Tag {
  Key?: string;
  Value?: string;
}
export type TagList = Array<Tag>;
export interface TagListMessage {
  TagList?: Array<Tag>;
}
export type TargetDBClusterParameterGroupName = string;

export type TargetDBInstanceClass = string;

export type TargetDBParameterGroupName = string;

export type TargetEngineVersion = string;

export type TargetGroupList = Array<DBProxyTargetGroup>;
export interface TargetHealth {
  State?: TargetState;
  Reason?: TargetHealthReason;
  Description?: string;
}
export type TargetHealthReason =
  | "UNREACHABLE"
  | "CONNECTION_FAILED"
  | "AUTH_FAILURE"
  | "PENDING_PROXY_CAPACITY"
  | "INVALID_REPLICATION_STATE";
export type TargetList = Array<DBProxyTarget>;
export type TargetRole = "READ_WRITE" | "READ_ONLY" | "UNKNOWN";
export type TargetState = "registering" | "available" | "unavailable";
export type TargetStorageType = string;

export type TargetType =
  | "RDS_INSTANCE"
  | "RDS_SERVERLESS_ENDPOINT"
  | "TRACKED_CLUSTER";
export interface TenantDatabase {
  TenantDatabaseCreateTime?: Date | string;
  DBInstanceIdentifier?: string;
  TenantDBName?: string;
  Status?: string;
  MasterUsername?: string;
  DbiResourceId?: string;
  TenantDatabaseResourceId?: string;
  TenantDatabaseARN?: string;
  CharacterSetName?: string;
  NcharCharacterSetName?: string;
  DeletionProtection?: boolean;
  PendingModifiedValues?: TenantDatabasePendingModifiedValues;
  MasterUserSecret?: MasterUserSecret;
  TagList?: Array<Tag>;
}
export declare class TenantDatabaseAlreadyExistsFault extends Data.TaggedError(
  "TenantDatabaseAlreadyExistsFault",
)<{
  readonly message?: string;
}> {}
export declare class TenantDatabaseNotFoundFault extends Data.TaggedError(
  "TenantDatabaseNotFoundFault",
)<{
  readonly message?: string;
}> {}
export interface TenantDatabasePendingModifiedValues {
  MasterUserPassword?: string;
  TenantDBName?: string;
}
export declare class TenantDatabaseQuotaExceededFault extends Data.TaggedError(
  "TenantDatabaseQuotaExceededFault",
)<{
  readonly message?: string;
}> {}
export type TenantDatabasesList = Array<TenantDatabase>;
export interface TenantDatabasesMessage {
  Marker?: string;
  TenantDatabases?: Array<TenantDatabase>;
}
export interface Timezone {
  TimezoneName?: string;
}
export type TStamp = Date | string;

export declare class UnsupportedDBEngineVersionFault extends Data.TaggedError(
  "UnsupportedDBEngineVersionFault",
)<{
  readonly message?: string;
}> {}
export interface UpgradeTarget {
  Engine?: string;
  EngineVersion?: string;
  Description?: string;
  AutoUpgrade?: boolean;
  IsMajorVersionUpgrade?: boolean;
  SupportedEngineModes?: Array<string>;
  SupportsParallelQuery?: boolean;
  SupportsGlobalDatabases?: boolean;
  SupportsBabelfish?: boolean;
  SupportsLimitlessDatabase?: boolean;
  SupportsLocalWriteForwarding?: boolean;
  SupportsIntegrations?: boolean;
}
export interface UserAuthConfig {
  Description?: string;
  UserName?: string;
  AuthScheme?: AuthScheme;
  SecretArn?: string;
  IAMAuth?: IAMAuthMode;
  ClientPasswordAuthType?: ClientPasswordAuthType;
}
export interface UserAuthConfigInfo {
  Description?: string;
  UserName?: string;
  AuthScheme?: AuthScheme;
  SecretArn?: string;
  IAMAuth?: IAMAuthMode;
  ClientPasswordAuthType?: ClientPasswordAuthType;
}
export type UserAuthConfigInfoList = Array<UserAuthConfigInfo>;
export type UserAuthConfigList = Array<UserAuthConfig>;
export interface ValidDBInstanceModificationsMessage {
  Storage?: Array<ValidStorageOptions>;
  ValidProcessorFeatures?: Array<AvailableProcessorFeature>;
  SupportsDedicatedLogVolume?: boolean;
}
export interface ValidStorageOptions {
  StorageType?: string;
  StorageSize?: Array<Range>;
  ProvisionedIops?: Array<Range>;
  IopsToStorageRatio?: Array<DoubleRange>;
  SupportsStorageAutoscaling?: boolean;
  ProvisionedStorageThroughput?: Array<Range>;
  StorageThroughputToIopsRatio?: Array<DoubleRange>;
}
export type ValidStorageOptionsList = Array<ValidStorageOptions>;
export type ValidUpgradeTargetList = Array<UpgradeTarget>;
export type VpcSecurityGroupIdList = Array<string>;
export interface VpcSecurityGroupMembership {
  VpcSecurityGroupId?: string;
  Status?: string;
}
export type VpcSecurityGroupMembershipList = Array<VpcSecurityGroupMembership>;
export type WriteForwardingStatus =
  | "ENABLED"
  | "DISABLED"
  | "ENABLING"
  | "DISABLING"
  | "UNKNOWN";
export declare namespace AddRoleToDBCluster {
  export type Input = AddRoleToDBClusterMessage;
  export type Output = {};
  export type Error =
    | DBClusterNotFoundFault
    | DBClusterRoleAlreadyExistsFault
    | DBClusterRoleQuotaExceededFault
    | InvalidDBClusterStateFault
    | CommonAwsError;
}

export declare namespace AddRoleToDBInstance {
  export type Input = AddRoleToDBInstanceMessage;
  export type Output = {};
  export type Error =
    | DBInstanceNotFoundFault
    | DBInstanceRoleAlreadyExistsFault
    | DBInstanceRoleQuotaExceededFault
    | InvalidDBInstanceStateFault
    | CommonAwsError;
}

export declare namespace AddSourceIdentifierToSubscription {
  export type Input = AddSourceIdentifierToSubscriptionMessage;
  export type Output = AddSourceIdentifierToSubscriptionResult;
  export type Error =
    | SourceNotFoundFault
    | SubscriptionNotFoundFault
    | CommonAwsError;
}

export declare namespace AddTagsToResource {
  export type Input = AddTagsToResourceMessage;
  export type Output = {};
  export type Error =
    | BlueGreenDeploymentNotFoundFault
    | DBClusterNotFoundFault
    | DBInstanceNotFoundFault
    | DBProxyNotFoundFault
    | DBProxyTargetGroupNotFoundFault
    | DBSnapshotNotFoundFault
    | DBSnapshotTenantDatabaseNotFoundFault
    | IntegrationNotFoundFault
    | TenantDatabaseNotFoundFault
    | CommonAwsError;
}

export declare namespace ApplyPendingMaintenanceAction {
  export type Input = ApplyPendingMaintenanceActionMessage;
  export type Output = ApplyPendingMaintenanceActionResult;
  export type Error =
    | InvalidDBClusterStateFault
    | InvalidDBInstanceStateFault
    | ResourceNotFoundFault
    | CommonAwsError;
}

export declare namespace AuthorizeDBSecurityGroupIngress {
  export type Input = AuthorizeDBSecurityGroupIngressMessage;
  export type Output = AuthorizeDBSecurityGroupIngressResult;
  export type Error =
    | AuthorizationAlreadyExistsFault
    | AuthorizationQuotaExceededFault
    | DBSecurityGroupNotFoundFault
    | InvalidDBSecurityGroupStateFault
    | CommonAwsError;
}

export declare namespace BacktrackDBCluster {
  export type Input = BacktrackDBClusterMessage;
  export type Output = DBClusterBacktrack;
  export type Error =
    | DBClusterNotFoundFault
    | InvalidDBClusterStateFault
    | CommonAwsError;
}

export declare namespace CancelExportTask {
  export type Input = CancelExportTaskMessage;
  export type Output = ExportTask;
  export type Error =
    | ExportTaskNotFoundFault
    | InvalidExportTaskStateFault
    | CommonAwsError;
}

export declare namespace CopyDBClusterParameterGroup {
  export type Input = CopyDBClusterParameterGroupMessage;
  export type Output = CopyDBClusterParameterGroupResult;
  export type Error =
    | DBParameterGroupAlreadyExistsFault
    | DBParameterGroupNotFoundFault
    | DBParameterGroupQuotaExceededFault
    | CommonAwsError;
}

export declare namespace CopyDBClusterSnapshot {
  export type Input = CopyDBClusterSnapshotMessage;
  export type Output = CopyDBClusterSnapshotResult;
  export type Error =
    | DBClusterSnapshotAlreadyExistsFault
    | DBClusterSnapshotNotFoundFault
    | InvalidDBClusterSnapshotStateFault
    | InvalidDBClusterStateFault
    | KMSKeyNotAccessibleFault
    | SnapshotQuotaExceededFault
    | CommonAwsError;
}

export declare namespace CopyDBParameterGroup {
  export type Input = CopyDBParameterGroupMessage;
  export type Output = CopyDBParameterGroupResult;
  export type Error =
    | DBParameterGroupAlreadyExistsFault
    | DBParameterGroupNotFoundFault
    | DBParameterGroupQuotaExceededFault
    | CommonAwsError;
}

export declare namespace CopyDBSnapshot {
  export type Input = CopyDBSnapshotMessage;
  export type Output = CopyDBSnapshotResult;
  export type Error =
    | CustomAvailabilityZoneNotFoundFault
    | DBSnapshotAlreadyExistsFault
    | DBSnapshotNotFoundFault
    | InvalidDBSnapshotStateFault
    | KMSKeyNotAccessibleFault
    | SnapshotQuotaExceededFault
    | CommonAwsError;
}

export declare namespace CopyOptionGroup {
  export type Input = CopyOptionGroupMessage;
  export type Output = CopyOptionGroupResult;
  export type Error =
    | OptionGroupAlreadyExistsFault
    | OptionGroupNotFoundFault
    | OptionGroupQuotaExceededFault
    | CommonAwsError;
}

export declare namespace CreateBlueGreenDeployment {
  export type Input = CreateBlueGreenDeploymentRequest;
  export type Output = CreateBlueGreenDeploymentResponse;
  export type Error =
    | BlueGreenDeploymentAlreadyExistsFault
    | DBClusterNotFoundFault
    | DBClusterParameterGroupNotFoundFault
    | DBClusterQuotaExceededFault
    | DBInstanceNotFoundFault
    | DBParameterGroupNotFoundFault
    | InstanceQuotaExceededFault
    | InvalidDBClusterStateFault
    | InvalidDBInstanceStateFault
    | SourceClusterNotSupportedFault
    | SourceDatabaseNotSupportedFault
    | CommonAwsError;
}

export declare namespace CreateCustomDBEngineVersion {
  export type Input = CreateCustomDBEngineVersionMessage;
  export type Output = DBEngineVersion;
  export type Error =
    | CreateCustomDBEngineVersionFault
    | CustomDBEngineVersionAlreadyExistsFault
    | CustomDBEngineVersionQuotaExceededFault
    | Ec2ImagePropertiesNotSupportedFault
    | KMSKeyNotAccessibleFault
    | CommonAwsError;
}

export declare namespace CreateDBCluster {
  export type Input = CreateDBClusterMessage;
  export type Output = CreateDBClusterResult;
  export type Error =
    | DBClusterAlreadyExistsFault
    | DBClusterNotFoundFault
    | DBClusterParameterGroupNotFoundFault
    | DBClusterQuotaExceededFault
    | DBInstanceNotFoundFault
    | DBSubnetGroupDoesNotCoverEnoughAZs
    | DBSubnetGroupNotFoundFault
    | DomainNotFoundFault
    | GlobalClusterNotFoundFault
    | InsufficientDBInstanceCapacityFault
    | InsufficientStorageClusterCapacityFault
    | InvalidDBClusterStateFault
    | InvalidDBInstanceStateFault
    | InvalidDBSubnetGroupFault
    | InvalidDBSubnetGroupStateFault
    | InvalidGlobalClusterStateFault
    | InvalidSubnet
    | InvalidVPCNetworkStateFault
    | KMSKeyNotAccessibleFault
    | OptionGroupNotFoundFault
    | StorageQuotaExceededFault
    | CommonAwsError;
}

export declare namespace CreateDBClusterEndpoint {
  export type Input = CreateDBClusterEndpointMessage;
  export type Output = DBClusterEndpoint;
  export type Error =
    | DBClusterEndpointAlreadyExistsFault
    | DBClusterEndpointQuotaExceededFault
    | DBClusterNotFoundFault
    | DBInstanceNotFoundFault
    | InvalidDBClusterStateFault
    | InvalidDBInstanceStateFault
    | CommonAwsError;
}

export declare namespace CreateDBClusterParameterGroup {
  export type Input = CreateDBClusterParameterGroupMessage;
  export type Output = CreateDBClusterParameterGroupResult;
  export type Error =
    | DBParameterGroupAlreadyExistsFault
    | DBParameterGroupQuotaExceededFault
    | CommonAwsError;
}

export declare namespace CreateDBClusterSnapshot {
  export type Input = CreateDBClusterSnapshotMessage;
  export type Output = CreateDBClusterSnapshotResult;
  export type Error =
    | DBClusterNotFoundFault
    | DBClusterSnapshotAlreadyExistsFault
    | InvalidDBClusterSnapshotStateFault
    | InvalidDBClusterStateFault
    | SnapshotQuotaExceededFault
    | CommonAwsError;
}

export declare namespace CreateDBInstance {
  export type Input = CreateDBInstanceMessage;
  export type Output = CreateDBInstanceResult;
  export type Error =
    | AuthorizationNotFoundFault
    | BackupPolicyNotFoundFault
    | CertificateNotFoundFault
    | DBClusterNotFoundFault
    | DBInstanceAlreadyExistsFault
    | DBParameterGroupNotFoundFault
    | DBSecurityGroupNotFoundFault
    | DBSubnetGroupDoesNotCoverEnoughAZs
    | DBSubnetGroupNotFoundFault
    | DomainNotFoundFault
    | InstanceQuotaExceededFault
    | InsufficientDBInstanceCapacityFault
    | InvalidDBClusterStateFault
    | InvalidSubnet
    | InvalidVPCNetworkStateFault
    | KMSKeyNotAccessibleFault
    | NetworkTypeNotSupported
    | OptionGroupNotFoundFault
    | ProvisionedIopsNotAvailableInAZFault
    | StorageQuotaExceededFault
    | StorageTypeNotSupportedFault
    | TenantDatabaseQuotaExceededFault
    | CommonAwsError;
}

export declare namespace CreateDBInstanceReadReplica {
  export type Input = CreateDBInstanceReadReplicaMessage;
  export type Output = CreateDBInstanceReadReplicaResult;
  export type Error =
    | CertificateNotFoundFault
    | DBClusterNotFoundFault
    | DBInstanceAlreadyExistsFault
    | DBInstanceNotFoundFault
    | DBParameterGroupNotFoundFault
    | DBSecurityGroupNotFoundFault
    | DBSubnetGroupDoesNotCoverEnoughAZs
    | DBSubnetGroupNotAllowedFault
    | DBSubnetGroupNotFoundFault
    | DomainNotFoundFault
    | InstanceQuotaExceededFault
    | InsufficientDBInstanceCapacityFault
    | InvalidDBClusterStateFault
    | InvalidDBInstanceStateFault
    | InvalidDBSubnetGroupFault
    | InvalidSubnet
    | InvalidVPCNetworkStateFault
    | KMSKeyNotAccessibleFault
    | NetworkTypeNotSupported
    | OptionGroupNotFoundFault
    | ProvisionedIopsNotAvailableInAZFault
    | StorageQuotaExceededFault
    | StorageTypeNotSupportedFault
    | TenantDatabaseQuotaExceededFault
    | CommonAwsError;
}

export declare namespace CreateDBParameterGroup {
  export type Input = CreateDBParameterGroupMessage;
  export type Output = CreateDBParameterGroupResult;
  export type Error =
    | DBParameterGroupAlreadyExistsFault
    | DBParameterGroupQuotaExceededFault
    | CommonAwsError;
}

export declare namespace CreateDBProxy {
  export type Input = CreateDBProxyRequest;
  export type Output = CreateDBProxyResponse;
  export type Error =
    | DBProxyAlreadyExistsFault
    | DBProxyQuotaExceededFault
    | InvalidSubnet
    | CommonAwsError;
}

export declare namespace CreateDBProxyEndpoint {
  export type Input = CreateDBProxyEndpointRequest;
  export type Output = CreateDBProxyEndpointResponse;
  export type Error =
    | DBProxyEndpointAlreadyExistsFault
    | DBProxyEndpointQuotaExceededFault
    | DBProxyNotFoundFault
    | InvalidDBProxyStateFault
    | InvalidSubnet
    | CommonAwsError;
}

export declare namespace CreateDBSecurityGroup {
  export type Input = CreateDBSecurityGroupMessage;
  export type Output = CreateDBSecurityGroupResult;
  export type Error =
    | DBSecurityGroupAlreadyExistsFault
    | DBSecurityGroupNotSupportedFault
    | DBSecurityGroupQuotaExceededFault
    | CommonAwsError;
}

export declare namespace CreateDBShardGroup {
  export type Input = CreateDBShardGroupMessage;
  export type Output = DBShardGroup;
  export type Error =
    | DBClusterNotFoundFault
    | DBShardGroupAlreadyExistsFault
    | InvalidDBClusterStateFault
    | InvalidVPCNetworkStateFault
    | MaxDBShardGroupLimitReached
    | NetworkTypeNotSupported
    | UnsupportedDBEngineVersionFault
    | CommonAwsError;
}

export declare namespace CreateDBSnapshot {
  export type Input = CreateDBSnapshotMessage;
  export type Output = CreateDBSnapshotResult;
  export type Error =
    | DBInstanceNotFoundFault
    | DBSnapshotAlreadyExistsFault
    | InvalidDBInstanceStateFault
    | SnapshotQuotaExceededFault
    | CommonAwsError;
}

export declare namespace CreateDBSubnetGroup {
  export type Input = CreateDBSubnetGroupMessage;
  export type Output = CreateDBSubnetGroupResult;
  export type Error =
    | DBSubnetGroupAlreadyExistsFault
    | DBSubnetGroupDoesNotCoverEnoughAZs
    | DBSubnetGroupQuotaExceededFault
    | DBSubnetQuotaExceededFault
    | InvalidSubnet
    | CommonAwsError;
}

export declare namespace CreateEventSubscription {
  export type Input = CreateEventSubscriptionMessage;
  export type Output = CreateEventSubscriptionResult;
  export type Error =
    | EventSubscriptionQuotaExceededFault
    | SNSInvalidTopicFault
    | SNSNoAuthorizationFault
    | SNSTopicArnNotFoundFault
    | SourceNotFoundFault
    | SubscriptionAlreadyExistFault
    | SubscriptionCategoryNotFoundFault
    | CommonAwsError;
}

export declare namespace CreateGlobalCluster {
  export type Input = CreateGlobalClusterMessage;
  export type Output = CreateGlobalClusterResult;
  export type Error =
    | DBClusterNotFoundFault
    | GlobalClusterAlreadyExistsFault
    | GlobalClusterQuotaExceededFault
    | InvalidDBClusterStateFault
    | CommonAwsError;
}

export declare namespace CreateIntegration {
  export type Input = CreateIntegrationMessage;
  export type Output = Integration;
  export type Error =
    | DBClusterNotFoundFault
    | DBInstanceNotFoundFault
    | IntegrationAlreadyExistsFault
    | IntegrationConflictOperationFault
    | IntegrationQuotaExceededFault
    | KMSKeyNotAccessibleFault
    | CommonAwsError;
}

export declare namespace CreateOptionGroup {
  export type Input = CreateOptionGroupMessage;
  export type Output = CreateOptionGroupResult;
  export type Error =
    | OptionGroupAlreadyExistsFault
    | OptionGroupQuotaExceededFault
    | CommonAwsError;
}

export declare namespace CreateTenantDatabase {
  export type Input = CreateTenantDatabaseMessage;
  export type Output = CreateTenantDatabaseResult;
  export type Error =
    | DBInstanceNotFoundFault
    | InvalidDBInstanceStateFault
    | KMSKeyNotAccessibleFault
    | TenantDatabaseAlreadyExistsFault
    | TenantDatabaseQuotaExceededFault
    | CommonAwsError;
}

export declare namespace DeleteBlueGreenDeployment {
  export type Input = DeleteBlueGreenDeploymentRequest;
  export type Output = DeleteBlueGreenDeploymentResponse;
  export type Error =
    | BlueGreenDeploymentNotFoundFault
    | InvalidBlueGreenDeploymentStateFault
    | CommonAwsError;
}

export declare namespace DeleteCustomDBEngineVersion {
  export type Input = DeleteCustomDBEngineVersionMessage;
  export type Output = DBEngineVersion;
  export type Error =
    | CustomDBEngineVersionNotFoundFault
    | InvalidCustomDBEngineVersionStateFault
    | CommonAwsError;
}

export declare namespace DeleteDBCluster {
  export type Input = DeleteDBClusterMessage;
  export type Output = DeleteDBClusterResult;
  export type Error =
    | DBClusterAutomatedBackupQuotaExceededFault
    | DBClusterNotFoundFault
    | DBClusterSnapshotAlreadyExistsFault
    | InvalidDBClusterSnapshotStateFault
    | InvalidDBClusterStateFault
    | SnapshotQuotaExceededFault
    | CommonAwsError;
}

export declare namespace DeleteDBClusterAutomatedBackup {
  export type Input = DeleteDBClusterAutomatedBackupMessage;
  export type Output = DeleteDBClusterAutomatedBackupResult;
  export type Error =
    | DBClusterAutomatedBackupNotFoundFault
    | InvalidDBClusterAutomatedBackupStateFault
    | CommonAwsError;
}

export declare namespace DeleteDBClusterEndpoint {
  export type Input = DeleteDBClusterEndpointMessage;
  export type Output = DBClusterEndpoint;
  export type Error =
    | DBClusterEndpointNotFoundFault
    | InvalidDBClusterEndpointStateFault
    | InvalidDBClusterStateFault
    | CommonAwsError;
}

export declare namespace DeleteDBClusterParameterGroup {
  export type Input = DeleteDBClusterParameterGroupMessage;
  export type Output = {};
  export type Error =
    | DBParameterGroupNotFoundFault
    | InvalidDBParameterGroupStateFault
    | CommonAwsError;
}

export declare namespace DeleteDBClusterSnapshot {
  export type Input = DeleteDBClusterSnapshotMessage;
  export type Output = DeleteDBClusterSnapshotResult;
  export type Error =
    | DBClusterSnapshotNotFoundFault
    | InvalidDBClusterSnapshotStateFault
    | CommonAwsError;
}

export declare namespace DeleteDBInstance {
  export type Input = DeleteDBInstanceMessage;
  export type Output = DeleteDBInstanceResult;
  export type Error =
    | DBInstanceAutomatedBackupQuotaExceededFault
    | DBInstanceNotFoundFault
    | DBSnapshotAlreadyExistsFault
    | InvalidDBClusterStateFault
    | InvalidDBInstanceStateFault
    | SnapshotQuotaExceededFault
    | CommonAwsError;
}

export declare namespace DeleteDBInstanceAutomatedBackup {
  export type Input = DeleteDBInstanceAutomatedBackupMessage;
  export type Output = DeleteDBInstanceAutomatedBackupResult;
  export type Error =
    | DBInstanceAutomatedBackupNotFoundFault
    | InvalidDBInstanceAutomatedBackupStateFault
    | CommonAwsError;
}

export declare namespace DeleteDBParameterGroup {
  export type Input = DeleteDBParameterGroupMessage;
  export type Output = {};
  export type Error =
    | DBParameterGroupNotFoundFault
    | InvalidDBParameterGroupStateFault
    | CommonAwsError;
}

export declare namespace DeleteDBProxy {
  export type Input = DeleteDBProxyRequest;
  export type Output = DeleteDBProxyResponse;
  export type Error =
    | DBProxyNotFoundFault
    | InvalidDBProxyStateFault
    | CommonAwsError;
}

export declare namespace DeleteDBProxyEndpoint {
  export type Input = DeleteDBProxyEndpointRequest;
  export type Output = DeleteDBProxyEndpointResponse;
  export type Error =
    | DBProxyEndpointNotFoundFault
    | InvalidDBProxyEndpointStateFault
    | CommonAwsError;
}

export declare namespace DeleteDBSecurityGroup {
  export type Input = DeleteDBSecurityGroupMessage;
  export type Output = {};
  export type Error =
    | DBSecurityGroupNotFoundFault
    | InvalidDBSecurityGroupStateFault
    | CommonAwsError;
}

export declare namespace DeleteDBShardGroup {
  export type Input = DeleteDBShardGroupMessage;
  export type Output = DBShardGroup;
  export type Error =
    | DBShardGroupNotFoundFault
    | InvalidDBClusterStateFault
    | InvalidDBShardGroupStateFault
    | CommonAwsError;
}

export declare namespace DeleteDBSnapshot {
  export type Input = DeleteDBSnapshotMessage;
  export type Output = DeleteDBSnapshotResult;
  export type Error =
    | DBSnapshotNotFoundFault
    | InvalidDBSnapshotStateFault
    | CommonAwsError;
}

export declare namespace DeleteDBSubnetGroup {
  export type Input = DeleteDBSubnetGroupMessage;
  export type Output = {};
  export type Error =
    | DBSubnetGroupNotFoundFault
    | InvalidDBSubnetGroupStateFault
    | InvalidDBSubnetStateFault
    | CommonAwsError;
}

export declare namespace DeleteEventSubscription {
  export type Input = DeleteEventSubscriptionMessage;
  export type Output = DeleteEventSubscriptionResult;
  export type Error =
    | InvalidEventSubscriptionStateFault
    | SubscriptionNotFoundFault
    | CommonAwsError;
}

export declare namespace DeleteGlobalCluster {
  export type Input = DeleteGlobalClusterMessage;
  export type Output = DeleteGlobalClusterResult;
  export type Error =
    | GlobalClusterNotFoundFault
    | InvalidGlobalClusterStateFault
    | CommonAwsError;
}

export declare namespace DeleteIntegration {
  export type Input = DeleteIntegrationMessage;
  export type Output = Integration;
  export type Error =
    | IntegrationConflictOperationFault
    | IntegrationNotFoundFault
    | InvalidIntegrationStateFault
    | CommonAwsError;
}

export declare namespace DeleteOptionGroup {
  export type Input = DeleteOptionGroupMessage;
  export type Output = {};
  export type Error =
    | InvalidOptionGroupStateFault
    | OptionGroupNotFoundFault
    | CommonAwsError;
}

export declare namespace DeleteTenantDatabase {
  export type Input = DeleteTenantDatabaseMessage;
  export type Output = DeleteTenantDatabaseResult;
  export type Error =
    | DBInstanceNotFoundFault
    | InvalidDBInstanceStateFault
    | TenantDatabaseNotFoundFault
    | CommonAwsError;
}

export declare namespace DeregisterDBProxyTargets {
  export type Input = DeregisterDBProxyTargetsRequest;
  export type Output = DeregisterDBProxyTargetsResponse;
  export type Error =
    | DBProxyNotFoundFault
    | DBProxyTargetGroupNotFoundFault
    | DBProxyTargetNotFoundFault
    | InvalidDBProxyStateFault
    | CommonAwsError;
}

export declare namespace DescribeAccountAttributes {
  export type Input = DescribeAccountAttributesMessage;
  export type Output = AccountAttributesMessage;
  export type Error = CommonAwsError;
}

export declare namespace DescribeBlueGreenDeployments {
  export type Input = DescribeBlueGreenDeploymentsRequest;
  export type Output = DescribeBlueGreenDeploymentsResponse;
  export type Error = BlueGreenDeploymentNotFoundFault | CommonAwsError;
}

export declare namespace DescribeCertificates {
  export type Input = DescribeCertificatesMessage;
  export type Output = CertificateMessage;
  export type Error = CertificateNotFoundFault | CommonAwsError;
}

export declare namespace DescribeDBClusterAutomatedBackups {
  export type Input = DescribeDBClusterAutomatedBackupsMessage;
  export type Output = DBClusterAutomatedBackupMessage;
  export type Error = DBClusterAutomatedBackupNotFoundFault | CommonAwsError;
}

export declare namespace DescribeDBClusterBacktracks {
  export type Input = DescribeDBClusterBacktracksMessage;
  export type Output = DBClusterBacktrackMessage;
  export type Error =
    | DBClusterBacktrackNotFoundFault
    | DBClusterNotFoundFault
    | CommonAwsError;
}

export declare namespace DescribeDBClusterEndpoints {
  export type Input = DescribeDBClusterEndpointsMessage;
  export type Output = DBClusterEndpointMessage;
  export type Error = DBClusterNotFoundFault | CommonAwsError;
}

export declare namespace DescribeDBClusterParameterGroups {
  export type Input = DescribeDBClusterParameterGroupsMessage;
  export type Output = DBClusterParameterGroupsMessage;
  export type Error = DBParameterGroupNotFoundFault | CommonAwsError;
}

export declare namespace DescribeDBClusterParameters {
  export type Input = DescribeDBClusterParametersMessage;
  export type Output = DBClusterParameterGroupDetails;
  export type Error = DBParameterGroupNotFoundFault | CommonAwsError;
}

export declare namespace DescribeDBClusters {
  export type Input = DescribeDBClustersMessage;
  export type Output = DBClusterMessage;
  export type Error = DBClusterNotFoundFault | CommonAwsError;
}

export declare namespace DescribeDBClusterSnapshotAttributes {
  export type Input = DescribeDBClusterSnapshotAttributesMessage;
  export type Output = DescribeDBClusterSnapshotAttributesResult;
  export type Error = DBClusterSnapshotNotFoundFault | CommonAwsError;
}

export declare namespace DescribeDBClusterSnapshots {
  export type Input = DescribeDBClusterSnapshotsMessage;
  export type Output = DBClusterSnapshotMessage;
  export type Error = DBClusterSnapshotNotFoundFault | CommonAwsError;
}

export declare namespace DescribeDBEngineVersions {
  export type Input = DescribeDBEngineVersionsMessage;
  export type Output = DBEngineVersionMessage;
  export type Error = CommonAwsError;
}

export declare namespace DescribeDBInstanceAutomatedBackups {
  export type Input = DescribeDBInstanceAutomatedBackupsMessage;
  export type Output = DBInstanceAutomatedBackupMessage;
  export type Error = DBInstanceAutomatedBackupNotFoundFault | CommonAwsError;
}

export declare namespace DescribeDBInstances {
  export type Input = DescribeDBInstancesMessage;
  export type Output = DBInstanceMessage;
  export type Error = DBInstanceNotFoundFault | CommonAwsError;
}

export declare namespace DescribeDBLogFiles {
  export type Input = DescribeDBLogFilesMessage;
  export type Output = DescribeDBLogFilesResponse;
  export type Error =
    | DBInstanceNotFoundFault
    | DBInstanceNotReadyFault
    | CommonAwsError;
}

export declare namespace DescribeDBMajorEngineVersions {
  export type Input = DescribeDBMajorEngineVersionsRequest;
  export type Output = DescribeDBMajorEngineVersionsResponse;
  export type Error = CommonAwsError;
}

export declare namespace DescribeDBParameterGroups {
  export type Input = DescribeDBParameterGroupsMessage;
  export type Output = DBParameterGroupsMessage;
  export type Error = DBParameterGroupNotFoundFault | CommonAwsError;
}

export declare namespace DescribeDBParameters {
  export type Input = DescribeDBParametersMessage;
  export type Output = DBParameterGroupDetails;
  export type Error = DBParameterGroupNotFoundFault | CommonAwsError;
}

export declare namespace DescribeDBProxies {
  export type Input = DescribeDBProxiesRequest;
  export type Output = DescribeDBProxiesResponse;
  export type Error = DBProxyNotFoundFault | CommonAwsError;
}

export declare namespace DescribeDBProxyEndpoints {
  export type Input = DescribeDBProxyEndpointsRequest;
  export type Output = DescribeDBProxyEndpointsResponse;
  export type Error =
    | DBProxyEndpointNotFoundFault
    | DBProxyNotFoundFault
    | CommonAwsError;
}

export declare namespace DescribeDBProxyTargetGroups {
  export type Input = DescribeDBProxyTargetGroupsRequest;
  export type Output = DescribeDBProxyTargetGroupsResponse;
  export type Error =
    | DBProxyNotFoundFault
    | DBProxyTargetGroupNotFoundFault
    | InvalidDBProxyStateFault
    | CommonAwsError;
}

export declare namespace DescribeDBProxyTargets {
  export type Input = DescribeDBProxyTargetsRequest;
  export type Output = DescribeDBProxyTargetsResponse;
  export type Error =
    | DBProxyNotFoundFault
    | DBProxyTargetGroupNotFoundFault
    | DBProxyTargetNotFoundFault
    | InvalidDBProxyStateFault
    | CommonAwsError;
}

export declare namespace DescribeDBRecommendations {
  export type Input = DescribeDBRecommendationsMessage;
  export type Output = DBRecommendationsMessage;
  export type Error = CommonAwsError;
}

export declare namespace DescribeDBSecurityGroups {
  export type Input = DescribeDBSecurityGroupsMessage;
  export type Output = DBSecurityGroupMessage;
  export type Error = DBSecurityGroupNotFoundFault | CommonAwsError;
}

export declare namespace DescribeDBShardGroups {
  export type Input = DescribeDBShardGroupsMessage;
  export type Output = DescribeDBShardGroupsResponse;
  export type Error =
    | DBClusterNotFoundFault
    | DBShardGroupNotFoundFault
    | CommonAwsError;
}

export declare namespace DescribeDBSnapshotAttributes {
  export type Input = DescribeDBSnapshotAttributesMessage;
  export type Output = DescribeDBSnapshotAttributesResult;
  export type Error = DBSnapshotNotFoundFault | CommonAwsError;
}

export declare namespace DescribeDBSnapshots {
  export type Input = DescribeDBSnapshotsMessage;
  export type Output = DBSnapshotMessage;
  export type Error = DBSnapshotNotFoundFault | CommonAwsError;
}

export declare namespace DescribeDBSnapshotTenantDatabases {
  export type Input = DescribeDBSnapshotTenantDatabasesMessage;
  export type Output = DBSnapshotTenantDatabasesMessage;
  export type Error = DBSnapshotNotFoundFault | CommonAwsError;
}

export declare namespace DescribeDBSubnetGroups {
  export type Input = DescribeDBSubnetGroupsMessage;
  export type Output = DBSubnetGroupMessage;
  export type Error = DBSubnetGroupNotFoundFault | CommonAwsError;
}

export declare namespace DescribeEngineDefaultClusterParameters {
  export type Input = DescribeEngineDefaultClusterParametersMessage;
  export type Output = DescribeEngineDefaultClusterParametersResult;
  export type Error = CommonAwsError;
}

export declare namespace DescribeEngineDefaultParameters {
  export type Input = DescribeEngineDefaultParametersMessage;
  export type Output = DescribeEngineDefaultParametersResult;
  export type Error = CommonAwsError;
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
  export type Error = SubscriptionNotFoundFault | CommonAwsError;
}

export declare namespace DescribeExportTasks {
  export type Input = DescribeExportTasksMessage;
  export type Output = ExportTasksMessage;
  export type Error = ExportTaskNotFoundFault | CommonAwsError;
}

export declare namespace DescribeGlobalClusters {
  export type Input = DescribeGlobalClustersMessage;
  export type Output = GlobalClustersMessage;
  export type Error = GlobalClusterNotFoundFault | CommonAwsError;
}

export declare namespace DescribeIntegrations {
  export type Input = DescribeIntegrationsMessage;
  export type Output = DescribeIntegrationsResponse;
  export type Error = IntegrationNotFoundFault | CommonAwsError;
}

export declare namespace DescribeOptionGroupOptions {
  export type Input = DescribeOptionGroupOptionsMessage;
  export type Output = OptionGroupOptionsMessage;
  export type Error = CommonAwsError;
}

export declare namespace DescribeOptionGroups {
  export type Input = DescribeOptionGroupsMessage;
  export type Output = OptionGroups;
  export type Error = OptionGroupNotFoundFault | CommonAwsError;
}

export declare namespace DescribeOrderableDBInstanceOptions {
  export type Input = DescribeOrderableDBInstanceOptionsMessage;
  export type Output = OrderableDBInstanceOptionsMessage;
  export type Error = CommonAwsError;
}

export declare namespace DescribePendingMaintenanceActions {
  export type Input = DescribePendingMaintenanceActionsMessage;
  export type Output = PendingMaintenanceActionsMessage;
  export type Error = ResourceNotFoundFault | CommonAwsError;
}

export declare namespace DescribeReservedDBInstances {
  export type Input = DescribeReservedDBInstancesMessage;
  export type Output = ReservedDBInstanceMessage;
  export type Error = ReservedDBInstanceNotFoundFault | CommonAwsError;
}

export declare namespace DescribeReservedDBInstancesOfferings {
  export type Input = DescribeReservedDBInstancesOfferingsMessage;
  export type Output = ReservedDBInstancesOfferingMessage;
  export type Error = ReservedDBInstancesOfferingNotFoundFault | CommonAwsError;
}

export declare namespace DescribeSourceRegions {
  export type Input = DescribeSourceRegionsMessage;
  export type Output = SourceRegionMessage;
  export type Error = CommonAwsError;
}

export declare namespace DescribeTenantDatabases {
  export type Input = DescribeTenantDatabasesMessage;
  export type Output = TenantDatabasesMessage;
  export type Error = DBInstanceNotFoundFault | CommonAwsError;
}

export declare namespace DescribeValidDBInstanceModifications {
  export type Input = DescribeValidDBInstanceModificationsMessage;
  export type Output = DescribeValidDBInstanceModificationsResult;
  export type Error =
    | DBInstanceNotFoundFault
    | InvalidDBInstanceStateFault
    | CommonAwsError;
}

export declare namespace DisableHttpEndpoint {
  export type Input = DisableHttpEndpointRequest;
  export type Output = DisableHttpEndpointResponse;
  export type Error =
    | InvalidResourceStateFault
    | ResourceNotFoundFault
    | CommonAwsError;
}

export declare namespace DownloadDBLogFilePortion {
  export type Input = DownloadDBLogFilePortionMessage;
  export type Output = DownloadDBLogFilePortionDetails;
  export type Error =
    | DBInstanceNotFoundFault
    | DBInstanceNotReadyFault
    | DBLogFileNotFoundFault
    | CommonAwsError;
}

export declare namespace EnableHttpEndpoint {
  export type Input = EnableHttpEndpointRequest;
  export type Output = EnableHttpEndpointResponse;
  export type Error =
    | InvalidResourceStateFault
    | ResourceNotFoundFault
    | CommonAwsError;
}

export declare namespace FailoverDBCluster {
  export type Input = FailoverDBClusterMessage;
  export type Output = FailoverDBClusterResult;
  export type Error =
    | DBClusterNotFoundFault
    | InvalidDBClusterStateFault
    | InvalidDBInstanceStateFault
    | CommonAwsError;
}

export declare namespace FailoverGlobalCluster {
  export type Input = FailoverGlobalClusterMessage;
  export type Output = FailoverGlobalClusterResult;
  export type Error =
    | DBClusterNotFoundFault
    | GlobalClusterNotFoundFault
    | InvalidDBClusterStateFault
    | InvalidGlobalClusterStateFault
    | CommonAwsError;
}

export declare namespace ListTagsForResource {
  export type Input = ListTagsForResourceMessage;
  export type Output = TagListMessage;
  export type Error =
    | BlueGreenDeploymentNotFoundFault
    | DBClusterNotFoundFault
    | DBInstanceNotFoundFault
    | DBProxyNotFoundFault
    | DBProxyTargetGroupNotFoundFault
    | DBSnapshotNotFoundFault
    | DBSnapshotTenantDatabaseNotFoundFault
    | IntegrationNotFoundFault
    | TenantDatabaseNotFoundFault
    | CommonAwsError;
}

export declare namespace ModifyActivityStream {
  export type Input = ModifyActivityStreamRequest;
  export type Output = ModifyActivityStreamResponse;
  export type Error =
    | DBInstanceNotFoundFault
    | InvalidDBInstanceStateFault
    | ResourceNotFoundFault
    | CommonAwsError;
}

export declare namespace ModifyCertificates {
  export type Input = ModifyCertificatesMessage;
  export type Output = ModifyCertificatesResult;
  export type Error = CertificateNotFoundFault | CommonAwsError;
}

export declare namespace ModifyCurrentDBClusterCapacity {
  export type Input = ModifyCurrentDBClusterCapacityMessage;
  export type Output = DBClusterCapacityInfo;
  export type Error =
    | DBClusterNotFoundFault
    | InvalidDBClusterCapacityFault
    | InvalidDBClusterStateFault
    | CommonAwsError;
}

export declare namespace ModifyCustomDBEngineVersion {
  export type Input = ModifyCustomDBEngineVersionMessage;
  export type Output = DBEngineVersion;
  export type Error =
    | CustomDBEngineVersionNotFoundFault
    | InvalidCustomDBEngineVersionStateFault
    | CommonAwsError;
}

export declare namespace ModifyDBCluster {
  export type Input = ModifyDBClusterMessage;
  export type Output = ModifyDBClusterResult;
  export type Error =
    | DBClusterAlreadyExistsFault
    | DBClusterNotFoundFault
    | DBClusterParameterGroupNotFoundFault
    | DBInstanceAlreadyExistsFault
    | DBSubnetGroupNotFoundFault
    | DomainNotFoundFault
    | InvalidDBClusterStateFault
    | InvalidDBInstanceStateFault
    | InvalidDBSecurityGroupStateFault
    | InvalidDBSubnetGroupStateFault
    | InvalidSubnet
    | InvalidVPCNetworkStateFault
    | OptionGroupNotFoundFault
    | StorageQuotaExceededFault
    | StorageTypeNotAvailableFault
    | CommonAwsError;
}

export declare namespace ModifyDBClusterEndpoint {
  export type Input = ModifyDBClusterEndpointMessage;
  export type Output = DBClusterEndpoint;
  export type Error =
    | DBClusterEndpointNotFoundFault
    | DBInstanceNotFoundFault
    | InvalidDBClusterEndpointStateFault
    | InvalidDBClusterStateFault
    | InvalidDBInstanceStateFault
    | CommonAwsError;
}

export declare namespace ModifyDBClusterParameterGroup {
  export type Input = ModifyDBClusterParameterGroupMessage;
  export type Output = DBClusterParameterGroupNameMessage;
  export type Error =
    | DBParameterGroupNotFoundFault
    | InvalidDBParameterGroupStateFault
    | CommonAwsError;
}

export declare namespace ModifyDBClusterSnapshotAttribute {
  export type Input = ModifyDBClusterSnapshotAttributeMessage;
  export type Output = ModifyDBClusterSnapshotAttributeResult;
  export type Error =
    | DBClusterSnapshotNotFoundFault
    | InvalidDBClusterSnapshotStateFault
    | SharedSnapshotQuotaExceededFault
    | CommonAwsError;
}

export declare namespace ModifyDBInstance {
  export type Input = ModifyDBInstanceMessage;
  export type Output = ModifyDBInstanceResult;
  export type Error =
    | AuthorizationNotFoundFault
    | BackupPolicyNotFoundFault
    | CertificateNotFoundFault
    | DBInstanceAlreadyExistsFault
    | DBInstanceNotFoundFault
    | DBParameterGroupNotFoundFault
    | DBSecurityGroupNotFoundFault
    | DBUpgradeDependencyFailureFault
    | DomainNotFoundFault
    | InsufficientDBInstanceCapacityFault
    | InvalidDBClusterStateFault
    | InvalidDBInstanceStateFault
    | InvalidDBSecurityGroupStateFault
    | InvalidVPCNetworkStateFault
    | KMSKeyNotAccessibleFault
    | NetworkTypeNotSupported
    | OptionGroupNotFoundFault
    | ProvisionedIopsNotAvailableInAZFault
    | StorageQuotaExceededFault
    | StorageTypeNotSupportedFault
    | TenantDatabaseQuotaExceededFault
    | CommonAwsError;
}

export declare namespace ModifyDBParameterGroup {
  export type Input = ModifyDBParameterGroupMessage;
  export type Output = DBParameterGroupNameMessage;
  export type Error =
    | DBParameterGroupNotFoundFault
    | InvalidDBParameterGroupStateFault
    | CommonAwsError;
}

export declare namespace ModifyDBProxy {
  export type Input = ModifyDBProxyRequest;
  export type Output = ModifyDBProxyResponse;
  export type Error =
    | DBProxyAlreadyExistsFault
    | DBProxyNotFoundFault
    | InvalidDBProxyStateFault
    | CommonAwsError;
}

export declare namespace ModifyDBProxyEndpoint {
  export type Input = ModifyDBProxyEndpointRequest;
  export type Output = ModifyDBProxyEndpointResponse;
  export type Error =
    | DBProxyEndpointAlreadyExistsFault
    | DBProxyEndpointNotFoundFault
    | InvalidDBProxyEndpointStateFault
    | InvalidDBProxyStateFault
    | CommonAwsError;
}

export declare namespace ModifyDBProxyTargetGroup {
  export type Input = ModifyDBProxyTargetGroupRequest;
  export type Output = ModifyDBProxyTargetGroupResponse;
  export type Error =
    | DBProxyNotFoundFault
    | DBProxyTargetGroupNotFoundFault
    | InvalidDBProxyStateFault
    | CommonAwsError;
}

export declare namespace ModifyDBRecommendation {
  export type Input = ModifyDBRecommendationMessage;
  export type Output = DBRecommendationMessage;
  export type Error = CommonAwsError;
}

export declare namespace ModifyDBShardGroup {
  export type Input = ModifyDBShardGroupMessage;
  export type Output = DBShardGroup;
  export type Error =
    | DBShardGroupAlreadyExistsFault
    | DBShardGroupNotFoundFault
    | InvalidDBClusterStateFault
    | CommonAwsError;
}

export declare namespace ModifyDBSnapshot {
  export type Input = ModifyDBSnapshotMessage;
  export type Output = ModifyDBSnapshotResult;
  export type Error = DBSnapshotNotFoundFault | CommonAwsError;
}

export declare namespace ModifyDBSnapshotAttribute {
  export type Input = ModifyDBSnapshotAttributeMessage;
  export type Output = ModifyDBSnapshotAttributeResult;
  export type Error =
    | DBSnapshotNotFoundFault
    | InvalidDBSnapshotStateFault
    | SharedSnapshotQuotaExceededFault
    | CommonAwsError;
}

export declare namespace ModifyDBSubnetGroup {
  export type Input = ModifyDBSubnetGroupMessage;
  export type Output = ModifyDBSubnetGroupResult;
  export type Error =
    | DBSubnetGroupDoesNotCoverEnoughAZs
    | DBSubnetGroupNotFoundFault
    | DBSubnetQuotaExceededFault
    | InvalidSubnet
    | SubnetAlreadyInUse
    | CommonAwsError;
}

export declare namespace ModifyEventSubscription {
  export type Input = ModifyEventSubscriptionMessage;
  export type Output = ModifyEventSubscriptionResult;
  export type Error =
    | EventSubscriptionQuotaExceededFault
    | SNSInvalidTopicFault
    | SNSNoAuthorizationFault
    | SNSTopicArnNotFoundFault
    | SubscriptionCategoryNotFoundFault
    | SubscriptionNotFoundFault
    | CommonAwsError;
}

export declare namespace ModifyGlobalCluster {
  export type Input = ModifyGlobalClusterMessage;
  export type Output = ModifyGlobalClusterResult;
  export type Error =
    | GlobalClusterAlreadyExistsFault
    | GlobalClusterNotFoundFault
    | InvalidDBClusterStateFault
    | InvalidDBInstanceStateFault
    | InvalidGlobalClusterStateFault
    | CommonAwsError;
}

export declare namespace ModifyIntegration {
  export type Input = ModifyIntegrationMessage;
  export type Output = Integration;
  export type Error =
    | IntegrationConflictOperationFault
    | IntegrationNotFoundFault
    | InvalidIntegrationStateFault
    | CommonAwsError;
}

export declare namespace ModifyOptionGroup {
  export type Input = ModifyOptionGroupMessage;
  export type Output = ModifyOptionGroupResult;
  export type Error =
    | InvalidOptionGroupStateFault
    | OptionGroupNotFoundFault
    | CommonAwsError;
}

export declare namespace ModifyTenantDatabase {
  export type Input = ModifyTenantDatabaseMessage;
  export type Output = ModifyTenantDatabaseResult;
  export type Error =
    | DBInstanceNotFoundFault
    | InvalidDBInstanceStateFault
    | KMSKeyNotAccessibleFault
    | TenantDatabaseAlreadyExistsFault
    | TenantDatabaseNotFoundFault
    | CommonAwsError;
}

export declare namespace PromoteReadReplica {
  export type Input = PromoteReadReplicaMessage;
  export type Output = PromoteReadReplicaResult;
  export type Error =
    | DBInstanceNotFoundFault
    | InvalidDBInstanceStateFault
    | CommonAwsError;
}

export declare namespace PromoteReadReplicaDBCluster {
  export type Input = PromoteReadReplicaDBClusterMessage;
  export type Output = PromoteReadReplicaDBClusterResult;
  export type Error =
    | DBClusterNotFoundFault
    | InvalidDBClusterStateFault
    | CommonAwsError;
}

export declare namespace PurchaseReservedDBInstancesOffering {
  export type Input = PurchaseReservedDBInstancesOfferingMessage;
  export type Output = PurchaseReservedDBInstancesOfferingResult;
  export type Error =
    | ReservedDBInstanceAlreadyExistsFault
    | ReservedDBInstanceQuotaExceededFault
    | ReservedDBInstancesOfferingNotFoundFault
    | CommonAwsError;
}

export declare namespace RebootDBCluster {
  export type Input = RebootDBClusterMessage;
  export type Output = RebootDBClusterResult;
  export type Error =
    | DBClusterNotFoundFault
    | InvalidDBClusterStateFault
    | InvalidDBInstanceStateFault
    | CommonAwsError;
}

export declare namespace RebootDBInstance {
  export type Input = RebootDBInstanceMessage;
  export type Output = RebootDBInstanceResult;
  export type Error =
    | DBInstanceNotFoundFault
    | InvalidDBInstanceStateFault
    | CommonAwsError;
}

export declare namespace RebootDBShardGroup {
  export type Input = RebootDBShardGroupMessage;
  export type Output = DBShardGroup;
  export type Error =
    | DBShardGroupNotFoundFault
    | InvalidDBShardGroupStateFault
    | CommonAwsError;
}

export declare namespace RegisterDBProxyTargets {
  export type Input = RegisterDBProxyTargetsRequest;
  export type Output = RegisterDBProxyTargetsResponse;
  export type Error =
    | DBClusterNotFoundFault
    | DBInstanceNotFoundFault
    | DBProxyNotFoundFault
    | DBProxyTargetAlreadyRegisteredFault
    | DBProxyTargetGroupNotFoundFault
    | InsufficientAvailableIPsInSubnetFault
    | InvalidDBClusterStateFault
    | InvalidDBInstanceStateFault
    | InvalidDBProxyStateFault
    | CommonAwsError;
}

export declare namespace RemoveFromGlobalCluster {
  export type Input = RemoveFromGlobalClusterMessage;
  export type Output = RemoveFromGlobalClusterResult;
  export type Error =
    | DBClusterNotFoundFault
    | GlobalClusterNotFoundFault
    | InvalidGlobalClusterStateFault
    | CommonAwsError;
}

export declare namespace RemoveRoleFromDBCluster {
  export type Input = RemoveRoleFromDBClusterMessage;
  export type Output = {};
  export type Error =
    | DBClusterNotFoundFault
    | DBClusterRoleNotFoundFault
    | InvalidDBClusterStateFault
    | CommonAwsError;
}

export declare namespace RemoveRoleFromDBInstance {
  export type Input = RemoveRoleFromDBInstanceMessage;
  export type Output = {};
  export type Error =
    | DBInstanceNotFoundFault
    | DBInstanceRoleNotFoundFault
    | InvalidDBInstanceStateFault
    | CommonAwsError;
}

export declare namespace RemoveSourceIdentifierFromSubscription {
  export type Input = RemoveSourceIdentifierFromSubscriptionMessage;
  export type Output = RemoveSourceIdentifierFromSubscriptionResult;
  export type Error =
    | SourceNotFoundFault
    | SubscriptionNotFoundFault
    | CommonAwsError;
}

export declare namespace RemoveTagsFromResource {
  export type Input = RemoveTagsFromResourceMessage;
  export type Output = {};
  export type Error =
    | BlueGreenDeploymentNotFoundFault
    | DBClusterNotFoundFault
    | DBInstanceNotFoundFault
    | DBProxyNotFoundFault
    | DBProxyTargetGroupNotFoundFault
    | DBSnapshotNotFoundFault
    | DBSnapshotTenantDatabaseNotFoundFault
    | IntegrationNotFoundFault
    | TenantDatabaseNotFoundFault
    | CommonAwsError;
}

export declare namespace ResetDBClusterParameterGroup {
  export type Input = ResetDBClusterParameterGroupMessage;
  export type Output = DBClusterParameterGroupNameMessage;
  export type Error =
    | DBParameterGroupNotFoundFault
    | InvalidDBParameterGroupStateFault
    | CommonAwsError;
}

export declare namespace ResetDBParameterGroup {
  export type Input = ResetDBParameterGroupMessage;
  export type Output = DBParameterGroupNameMessage;
  export type Error =
    | DBParameterGroupNotFoundFault
    | InvalidDBParameterGroupStateFault
    | CommonAwsError;
}

export declare namespace RestoreDBClusterFromS3 {
  export type Input = RestoreDBClusterFromS3Message;
  export type Output = RestoreDBClusterFromS3Result;
  export type Error =
    | DBClusterAlreadyExistsFault
    | DBClusterNotFoundFault
    | DBClusterParameterGroupNotFoundFault
    | DBClusterQuotaExceededFault
    | DBSubnetGroupNotFoundFault
    | DomainNotFoundFault
    | InsufficientStorageClusterCapacityFault
    | InvalidDBClusterStateFault
    | InvalidDBSubnetGroupStateFault
    | InvalidS3BucketFault
    | InvalidSubnet
    | InvalidVPCNetworkStateFault
    | KMSKeyNotAccessibleFault
    | StorageQuotaExceededFault
    | StorageTypeNotSupportedFault
    | CommonAwsError;
}

export declare namespace RestoreDBClusterFromSnapshot {
  export type Input = RestoreDBClusterFromSnapshotMessage;
  export type Output = RestoreDBClusterFromSnapshotResult;
  export type Error =
    | DBClusterAlreadyExistsFault
    | DBClusterParameterGroupNotFoundFault
    | DBClusterQuotaExceededFault
    | DBClusterSnapshotNotFoundFault
    | DBSnapshotNotFoundFault
    | DBSubnetGroupDoesNotCoverEnoughAZs
    | DBSubnetGroupNotFoundFault
    | DomainNotFoundFault
    | InsufficientDBClusterCapacityFault
    | InsufficientDBInstanceCapacityFault
    | InsufficientStorageClusterCapacityFault
    | InvalidDBClusterSnapshotStateFault
    | InvalidDBInstanceStateFault
    | InvalidDBSnapshotStateFault
    | InvalidRestoreFault
    | InvalidSubnet
    | InvalidVPCNetworkStateFault
    | KMSKeyNotAccessibleFault
    | OptionGroupNotFoundFault
    | StorageQuotaExceededFault
    | CommonAwsError;
}

export declare namespace RestoreDBClusterToPointInTime {
  export type Input = RestoreDBClusterToPointInTimeMessage;
  export type Output = RestoreDBClusterToPointInTimeResult;
  export type Error =
    | DBClusterAlreadyExistsFault
    | DBClusterAutomatedBackupNotFoundFault
    | DBClusterNotFoundFault
    | DBClusterParameterGroupNotFoundFault
    | DBClusterQuotaExceededFault
    | DBClusterSnapshotNotFoundFault
    | DBSubnetGroupNotFoundFault
    | DomainNotFoundFault
    | InsufficientDBClusterCapacityFault
    | InsufficientDBInstanceCapacityFault
    | InsufficientStorageClusterCapacityFault
    | InvalidDBClusterSnapshotStateFault
    | InvalidDBClusterStateFault
    | InvalidDBSnapshotStateFault
    | InvalidRestoreFault
    | InvalidSubnet
    | InvalidVPCNetworkStateFault
    | KMSKeyNotAccessibleFault
    | OptionGroupNotFoundFault
    | StorageQuotaExceededFault
    | CommonAwsError;
}

export declare namespace RestoreDBInstanceFromDBSnapshot {
  export type Input = RestoreDBInstanceFromDBSnapshotMessage;
  export type Output = RestoreDBInstanceFromDBSnapshotResult;
  export type Error =
    | AuthorizationNotFoundFault
    | BackupPolicyNotFoundFault
    | CertificateNotFoundFault
    | DBClusterSnapshotNotFoundFault
    | DBInstanceAlreadyExistsFault
    | DBParameterGroupNotFoundFault
    | DBSecurityGroupNotFoundFault
    | DBSnapshotNotFoundFault
    | DBSubnetGroupDoesNotCoverEnoughAZs
    | DBSubnetGroupNotFoundFault
    | DomainNotFoundFault
    | InstanceQuotaExceededFault
    | InsufficientDBInstanceCapacityFault
    | InvalidDBSnapshotStateFault
    | InvalidRestoreFault
    | InvalidSubnet
    | InvalidVPCNetworkStateFault
    | KMSKeyNotAccessibleFault
    | NetworkTypeNotSupported
    | OptionGroupNotFoundFault
    | ProvisionedIopsNotAvailableInAZFault
    | StorageQuotaExceededFault
    | StorageTypeNotSupportedFault
    | TenantDatabaseQuotaExceededFault
    | CommonAwsError;
}

export declare namespace RestoreDBInstanceFromS3 {
  export type Input = RestoreDBInstanceFromS3Message;
  export type Output = RestoreDBInstanceFromS3Result;
  export type Error =
    | AuthorizationNotFoundFault
    | BackupPolicyNotFoundFault
    | CertificateNotFoundFault
    | DBInstanceAlreadyExistsFault
    | DBParameterGroupNotFoundFault
    | DBSecurityGroupNotFoundFault
    | DBSubnetGroupDoesNotCoverEnoughAZs
    | DBSubnetGroupNotFoundFault
    | InstanceQuotaExceededFault
    | InsufficientDBInstanceCapacityFault
    | InvalidS3BucketFault
    | InvalidSubnet
    | InvalidVPCNetworkStateFault
    | KMSKeyNotAccessibleFault
    | NetworkTypeNotSupported
    | OptionGroupNotFoundFault
    | ProvisionedIopsNotAvailableInAZFault
    | StorageQuotaExceededFault
    | StorageTypeNotSupportedFault
    | CommonAwsError;
}

export declare namespace RestoreDBInstanceToPointInTime {
  export type Input = RestoreDBInstanceToPointInTimeMessage;
  export type Output = RestoreDBInstanceToPointInTimeResult;
  export type Error =
    | AuthorizationNotFoundFault
    | BackupPolicyNotFoundFault
    | CertificateNotFoundFault
    | DBInstanceAlreadyExistsFault
    | DBInstanceAutomatedBackupNotFoundFault
    | DBInstanceNotFoundFault
    | DBParameterGroupNotFoundFault
    | DBSecurityGroupNotFoundFault
    | DBSubnetGroupDoesNotCoverEnoughAZs
    | DBSubnetGroupNotFoundFault
    | DomainNotFoundFault
    | InstanceQuotaExceededFault
    | InsufficientDBInstanceCapacityFault
    | InvalidDBInstanceStateFault
    | InvalidRestoreFault
    | InvalidSubnet
    | InvalidVPCNetworkStateFault
    | KMSKeyNotAccessibleFault
    | NetworkTypeNotSupported
    | OptionGroupNotFoundFault
    | PointInTimeRestoreNotEnabledFault
    | ProvisionedIopsNotAvailableInAZFault
    | StorageQuotaExceededFault
    | StorageTypeNotSupportedFault
    | TenantDatabaseQuotaExceededFault
    | CommonAwsError;
}

export declare namespace RevokeDBSecurityGroupIngress {
  export type Input = RevokeDBSecurityGroupIngressMessage;
  export type Output = RevokeDBSecurityGroupIngressResult;
  export type Error =
    | AuthorizationNotFoundFault
    | DBSecurityGroupNotFoundFault
    | InvalidDBSecurityGroupStateFault
    | CommonAwsError;
}

export declare namespace StartActivityStream {
  export type Input = StartActivityStreamRequest;
  export type Output = StartActivityStreamResponse;
  export type Error =
    | DBClusterNotFoundFault
    | DBInstanceNotFoundFault
    | InvalidDBClusterStateFault
    | InvalidDBInstanceStateFault
    | KMSKeyNotAccessibleFault
    | ResourceNotFoundFault
    | CommonAwsError;
}

export declare namespace StartDBCluster {
  export type Input = StartDBClusterMessage;
  export type Output = StartDBClusterResult;
  export type Error =
    | DBClusterNotFoundFault
    | InvalidDBClusterStateFault
    | InvalidDBInstanceStateFault
    | InvalidDBShardGroupStateFault
    | CommonAwsError;
}

export declare namespace StartDBInstance {
  export type Input = StartDBInstanceMessage;
  export type Output = StartDBInstanceResult;
  export type Error =
    | AuthorizationNotFoundFault
    | DBClusterNotFoundFault
    | DBInstanceNotFoundFault
    | DBSubnetGroupDoesNotCoverEnoughAZs
    | DBSubnetGroupNotFoundFault
    | InsufficientDBInstanceCapacityFault
    | InvalidDBClusterStateFault
    | InvalidDBInstanceStateFault
    | InvalidSubnet
    | InvalidVPCNetworkStateFault
    | KMSKeyNotAccessibleFault
    | CommonAwsError;
}

export declare namespace StartDBInstanceAutomatedBackupsReplication {
  export type Input = StartDBInstanceAutomatedBackupsReplicationMessage;
  export type Output = StartDBInstanceAutomatedBackupsReplicationResult;
  export type Error =
    | DBInstanceAutomatedBackupQuotaExceededFault
    | DBInstanceNotFoundFault
    | InvalidDBInstanceStateFault
    | KMSKeyNotAccessibleFault
    | StorageTypeNotSupportedFault
    | CommonAwsError;
}

export declare namespace StartExportTask {
  export type Input = StartExportTaskMessage;
  export type Output = ExportTask;
  export type Error =
    | DBClusterNotFoundFault
    | DBClusterSnapshotNotFoundFault
    | DBSnapshotNotFoundFault
    | ExportTaskAlreadyExistsFault
    | IamRoleMissingPermissionsFault
    | IamRoleNotFoundFault
    | InvalidExportOnlyFault
    | InvalidExportSourceStateFault
    | InvalidS3BucketFault
    | KMSKeyNotAccessibleFault
    | CommonAwsError;
}

export declare namespace StopActivityStream {
  export type Input = StopActivityStreamRequest;
  export type Output = StopActivityStreamResponse;
  export type Error =
    | DBClusterNotFoundFault
    | DBInstanceNotFoundFault
    | InvalidDBClusterStateFault
    | InvalidDBInstanceStateFault
    | ResourceNotFoundFault
    | CommonAwsError;
}

export declare namespace StopDBCluster {
  export type Input = StopDBClusterMessage;
  export type Output = StopDBClusterResult;
  export type Error =
    | DBClusterNotFoundFault
    | InvalidDBClusterStateFault
    | InvalidDBInstanceStateFault
    | InvalidDBShardGroupStateFault
    | CommonAwsError;
}

export declare namespace StopDBInstance {
  export type Input = StopDBInstanceMessage;
  export type Output = StopDBInstanceResult;
  export type Error =
    | DBInstanceNotFoundFault
    | DBSnapshotAlreadyExistsFault
    | InvalidDBClusterStateFault
    | InvalidDBInstanceStateFault
    | SnapshotQuotaExceededFault
    | CommonAwsError;
}

export declare namespace StopDBInstanceAutomatedBackupsReplication {
  export type Input = StopDBInstanceAutomatedBackupsReplicationMessage;
  export type Output = StopDBInstanceAutomatedBackupsReplicationResult;
  export type Error =
    | DBInstanceNotFoundFault
    | InvalidDBInstanceStateFault
    | CommonAwsError;
}

export declare namespace SwitchoverBlueGreenDeployment {
  export type Input = SwitchoverBlueGreenDeploymentRequest;
  export type Output = SwitchoverBlueGreenDeploymentResponse;
  export type Error =
    | BlueGreenDeploymentNotFoundFault
    | InvalidBlueGreenDeploymentStateFault
    | CommonAwsError;
}

export declare namespace SwitchoverGlobalCluster {
  export type Input = SwitchoverGlobalClusterMessage;
  export type Output = SwitchoverGlobalClusterResult;
  export type Error =
    | DBClusterNotFoundFault
    | GlobalClusterNotFoundFault
    | InvalidDBClusterStateFault
    | InvalidGlobalClusterStateFault
    | CommonAwsError;
}

export declare namespace SwitchoverReadReplica {
  export type Input = SwitchoverReadReplicaMessage;
  export type Output = SwitchoverReadReplicaResult;
  export type Error =
    | DBInstanceNotFoundFault
    | InvalidDBInstanceStateFault
    | CommonAwsError;
}
