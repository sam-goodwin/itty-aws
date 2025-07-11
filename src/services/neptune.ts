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
    | DBClusterNotFoundFault
    | DBInstanceNotFoundFault
    | DBSnapshotNotFoundFault
    | CommonAwsError
  >;
  applyPendingMaintenanceAction(
    input: ApplyPendingMaintenanceActionMessage,
  ): Effect.Effect<
    ApplyPendingMaintenanceActionResult,
    ResourceNotFoundFault | CommonAwsError
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
    | GlobalClusterNotFoundFault
    | InsufficientStorageClusterCapacityFault
    | InvalidDBClusterStateFault
    | InvalidDBInstanceStateFault
    | InvalidDBSubnetGroupStateFault
    | InvalidGlobalClusterStateFault
    | InvalidSubnet
    | InvalidVPCNetworkStateFault
    | KMSKeyNotAccessibleFault
    | StorageQuotaExceededFault
    | CommonAwsError
  >;
  createDBClusterEndpoint(
    input: CreateDBClusterEndpointMessage,
  ): Effect.Effect<
    CreateDBClusterEndpointOutput,
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
    | OptionGroupNotFoundFault
    | ProvisionedIopsNotAvailableInAZFault
    | StorageQuotaExceededFault
    | StorageTypeNotSupportedFault
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
  deleteDBCluster(
    input: DeleteDBClusterMessage,
  ): Effect.Effect<
    DeleteDBClusterResult,
    | DBClusterNotFoundFault
    | DBClusterSnapshotAlreadyExistsFault
    | InvalidDBClusterSnapshotStateFault
    | InvalidDBClusterStateFault
    | SnapshotQuotaExceededFault
    | CommonAwsError
  >;
  deleteDBClusterEndpoint(
    input: DeleteDBClusterEndpointMessage,
  ): Effect.Effect<
    DeleteDBClusterEndpointOutput,
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
    | DBInstanceNotFoundFault
    | DBSnapshotAlreadyExistsFault
    | InvalidDBClusterStateFault
    | InvalidDBInstanceStateFault
    | SnapshotQuotaExceededFault
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
  describeDBInstances(
    input: DescribeDBInstancesMessage,
  ): Effect.Effect<DBInstanceMessage, DBInstanceNotFoundFault | CommonAwsError>;
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
  describeGlobalClusters(
    input: DescribeGlobalClustersMessage,
  ): Effect.Effect<
    GlobalClustersMessage,
    GlobalClusterNotFoundFault | CommonAwsError
  >;
  describeOrderableDBInstanceOptions(
    input: DescribeOrderableDBInstanceOptionsMessage,
  ): Effect.Effect<OrderableDBInstanceOptionsMessage, CommonAwsError>;
  describePendingMaintenanceActions(
    input: DescribePendingMaintenanceActionsMessage,
  ): Effect.Effect<
    PendingMaintenanceActionsMessage,
    ResourceNotFoundFault | CommonAwsError
  >;
  describeValidDBInstanceModifications(
    input: DescribeValidDBInstanceModificationsMessage,
  ): Effect.Effect<
    DescribeValidDBInstanceModificationsResult,
    DBInstanceNotFoundFault | InvalidDBInstanceStateFault | CommonAwsError
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
    | DBClusterNotFoundFault
    | DBInstanceNotFoundFault
    | DBSnapshotNotFoundFault
    | CommonAwsError
  >;
  modifyDBCluster(
    input: ModifyDBClusterMessage,
  ): Effect.Effect<
    ModifyDBClusterResult,
    | DBClusterAlreadyExistsFault
    | DBClusterNotFoundFault
    | DBClusterParameterGroupNotFoundFault
    | DBSubnetGroupNotFoundFault
    | InvalidDBClusterStateFault
    | InvalidDBInstanceStateFault
    | InvalidDBSecurityGroupStateFault
    | InvalidDBSubnetGroupStateFault
    | InvalidSubnet
    | InvalidVPCNetworkStateFault
    | StorageQuotaExceededFault
    | StorageTypeNotSupportedFault
    | CommonAwsError
  >;
  modifyDBClusterEndpoint(
    input: ModifyDBClusterEndpointMessage,
  ): Effect.Effect<
    ModifyDBClusterEndpointOutput,
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
    | CertificateNotFoundFault
    | DBInstanceAlreadyExistsFault
    | DBInstanceNotFoundFault
    | DBParameterGroupNotFoundFault
    | DBSecurityGroupNotFoundFault
    | DBUpgradeDependencyFailureFault
    | DomainNotFoundFault
    | InsufficientDBInstanceCapacityFault
    | InvalidDBInstanceStateFault
    | InvalidDBSecurityGroupStateFault
    | InvalidVPCNetworkStateFault
    | OptionGroupNotFoundFault
    | ProvisionedIopsNotAvailableInAZFault
    | StorageQuotaExceededFault
    | StorageTypeNotSupportedFault
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
    GlobalClusterNotFoundFault | InvalidGlobalClusterStateFault | CommonAwsError
  >;
  promoteReadReplicaDBCluster(
    input: PromoteReadReplicaDBClusterMessage,
  ): Effect.Effect<
    PromoteReadReplicaDBClusterResult,
    DBClusterNotFoundFault | InvalidDBClusterStateFault | CommonAwsError
  >;
  rebootDBInstance(
    input: RebootDBInstanceMessage,
  ): Effect.Effect<
    RebootDBInstanceResult,
    DBInstanceNotFoundFault | InvalidDBInstanceStateFault | CommonAwsError
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
    | DBClusterNotFoundFault
    | DBInstanceNotFoundFault
    | DBSnapshotNotFoundFault
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
  restoreDBClusterFromSnapshot(
    input: RestoreDBClusterFromSnapshotMessage,
  ): Effect.Effect<
    RestoreDBClusterFromSnapshotResult,
    | DBClusterAlreadyExistsFault
    | DBClusterParameterGroupNotFoundFault
    | DBClusterQuotaExceededFault
    | DBClusterSnapshotNotFoundFault
    | DBSnapshotNotFoundFault
    | DBSubnetGroupNotFoundFault
    | InsufficientDBClusterCapacityFault
    | InsufficientStorageClusterCapacityFault
    | InvalidDBClusterSnapshotStateFault
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
    | DBClusterNotFoundFault
    | DBClusterParameterGroupNotFoundFault
    | DBClusterQuotaExceededFault
    | DBClusterSnapshotNotFoundFault
    | DBSubnetGroupNotFoundFault
    | InsufficientDBClusterCapacityFault
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
  startDBCluster(
    input: StartDBClusterMessage,
  ): Effect.Effect<
    StartDBClusterResult,
    | DBClusterNotFoundFault
    | InvalidDBClusterStateFault
    | InvalidDBInstanceStateFault
    | CommonAwsError
  >;
  stopDBCluster(
    input: StopDBClusterMessage,
  ): Effect.Effect<
    StopDBClusterResult,
    | DBClusterNotFoundFault
    | InvalidDBClusterStateFault
    | InvalidDBInstanceStateFault
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
}

export type Neptune = AmazonRDSv19;

export interface AddRoleToDBClusterMessage {
  DBClusterIdentifier: string;
  RoleArn: string;
  FeatureName?: string;
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
export type AttributeValueList = Array<string>;
export declare class AuthorizationNotFoundFault extends Data.TaggedError(
  "AuthorizationNotFoundFault",
)<{
  readonly message?: string;
}> {}
export interface AvailabilityZone {
  Name?: string;
}
export type AvailabilityZoneList = Array<AvailabilityZone>;
export type AvailabilityZones = Array<string>;
export type BooleanOptional = boolean;

export declare class CertificateNotFoundFault extends Data.TaggedError(
  "CertificateNotFoundFault",
)<{
  readonly message?: string;
}> {}
export interface CharacterSet {
  CharacterSetName?: string;
  CharacterSetDescription?: string;
}
export interface CloudwatchLogsExportConfiguration {
  EnableLogTypes?: Array<string>;
  DisableLogTypes?: Array<string>;
}
export interface ClusterPendingModifiedValues {
  PendingCloudwatchLogsExports?: PendingCloudwatchLogsExports;
  DBClusterIdentifier?: string;
  IAMDatabaseAuthenticationEnabled?: boolean;
  EngineVersion?: string;
  BackupRetentionPeriod?: number;
  StorageType?: string;
  AllocatedStorage?: number;
  Iops?: number;
}
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
export interface CreateDBClusterEndpointMessage {
  DBClusterIdentifier: string;
  DBClusterEndpointIdentifier: string;
  EndpointType: string;
  StaticMembers?: Array<string>;
  ExcludedMembers?: Array<string>;
  Tags?: Array<Tag>;
}
export interface CreateDBClusterEndpointOutput {
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
export interface CreateDBClusterMessage {
  AvailabilityZones?: Array<string>;
  BackupRetentionPeriod?: number;
  CharacterSetName?: string;
  CopyTagsToSnapshot?: boolean;
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
  EnableCloudwatchLogsExports?: Array<string>;
  DeletionProtection?: boolean;
  ServerlessV2ScalingConfiguration?: ServerlessV2ScalingConfiguration;
  GlobalClusterIdentifier?: string;
  StorageType?: string;
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
  PubliclyAccessible?: boolean;
  Tags?: Array<Tag>;
  DBClusterIdentifier: string;
  StorageType?: string;
  TdeCredentialArn?: string;
  TdeCredentialPassword?: string;
  StorageEncrypted?: boolean;
  KmsKeyId?: string;
  Domain?: string;
  CopyTagsToSnapshot?: boolean;
  MonitoringInterval?: number;
  MonitoringRoleArn?: string;
  DomainIAMRoleName?: string;
  PromotionTier?: number;
  Timezone?: string;
  EnableIAMDatabaseAuthentication?: boolean;
  EnablePerformanceInsights?: boolean;
  PerformanceInsightsKMSKeyId?: string;
  EnableCloudwatchLogsExports?: Array<string>;
  DeletionProtection?: boolean;
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
  GlobalClusterIdentifier: string;
  SourceDBClusterIdentifier?: string;
  Engine?: string;
  EngineVersion?: string;
  DeletionProtection?: boolean;
  StorageEncrypted?: boolean;
}
export interface CreateGlobalClusterResult {
  GlobalCluster?: GlobalCluster;
}
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
  PercentProgress?: string;
  EarliestRestorableTime?: Date | string;
  Endpoint?: string;
  ReaderEndpoint?: string;
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
  CopyTagsToSnapshot?: boolean;
  EnabledCloudwatchLogsExports?: Array<string>;
  PendingModifiedValues?: ClusterPendingModifiedValues;
  DeletionProtection?: boolean;
  CrossAccountClone?: boolean;
  AutomaticRestartTime?: Date | string;
  ServerlessV2ScalingConfiguration?: ServerlessV2ScalingConfigurationInfo;
  GlobalClusterIdentifier?: string;
  IOOptimizedNextAllowedModificationTime?: Date | string;
  StorageType?: string;
}
export declare class DBClusterAlreadyExistsFault extends Data.TaggedError(
  "DBClusterAlreadyExistsFault",
)<{
  readonly message?: string;
}> {}
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
  StorageType?: string;
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
export interface DBEngineVersion {
  Engine?: string;
  EngineVersion?: string;
  DBParameterGroupFamily?: string;
  DBEngineDescription?: string;
  DBEngineVersionDescription?: string;
  DefaultCharacterSet?: CharacterSet;
  SupportedCharacterSets?: Array<CharacterSet>;
  ValidUpgradeTarget?: Array<UpgradeTarget>;
  SupportedTimezones?: Array<Timezone>;
  ExportableLogTypes?: Array<string>;
  SupportsLogExportsToCloudwatchLogs?: boolean;
  SupportsReadReplica?: boolean;
  SupportsGlobalDatabases?: boolean;
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
  LicenseModel?: string;
  Iops?: number;
  OptionGroupMemberships?: Array<OptionGroupMembership>;
  CharacterSetName?: string;
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
  PerformanceInsightsEnabled?: boolean;
  PerformanceInsightsKMSKeyId?: string;
  EnabledCloudwatchLogsExports?: Array<string>;
  DeletionProtection?: boolean;
}
export declare class DBInstanceAlreadyExistsFault extends Data.TaggedError(
  "DBInstanceAlreadyExistsFault",
)<{
  readonly message?: string;
}> {}
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
export interface DBInstanceStatusInfo {
  StatusType?: string;
  Normal?: boolean;
  Status?: string;
  Message?: string;
}
export type DBInstanceStatusInfoList = Array<DBInstanceStatusInfo>;
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
export interface DBSecurityGroupMembership {
  DBSecurityGroupName?: string;
  Status?: string;
}
export type DBSecurityGroupMembershipList = Array<DBSecurityGroupMembership>;
export type DBSecurityGroupNameList = Array<string>;
export declare class DBSecurityGroupNotFoundFault extends Data.TaggedError(
  "DBSecurityGroupNotFoundFault",
)<{
  readonly message?: string;
}> {}
export declare class DBSnapshotAlreadyExistsFault extends Data.TaggedError(
  "DBSnapshotAlreadyExistsFault",
)<{
  readonly message?: string;
}> {}
export declare class DBSnapshotNotFoundFault extends Data.TaggedError(
  "DBSnapshotNotFoundFault",
)<{
  readonly message?: string;
}> {}
export interface DBSubnetGroup {
  DBSubnetGroupName?: string;
  DBSubnetGroupDescription?: string;
  VpcId?: string;
  SubnetGroupStatus?: string;
  Subnets?: Array<Subnet>;
  DBSubnetGroupArn?: string;
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
export interface DeleteDBClusterEndpointMessage {
  DBClusterEndpointIdentifier: string;
}
export interface DeleteDBClusterEndpointOutput {
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
export interface DeleteDBClusterMessage {
  DBClusterIdentifier: string;
  SkipFinalSnapshot?: boolean;
  FinalDBSnapshotIdentifier?: string;
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
export interface DeleteDBInstanceMessage {
  DBInstanceIdentifier: string;
  SkipFinalSnapshot?: boolean;
  FinalDBSnapshotIdentifier?: string;
}
export interface DeleteDBInstanceResult {
  DBInstance?: DBInstance;
}
export interface DeleteDBParameterGroupMessage {
  DBParameterGroupName: string;
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
}
export interface DescribeDBInstancesMessage {
  DBInstanceIdentifier?: string;
  Filters?: Array<Filter>;
  MaxRecords?: number;
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
export interface DescribeGlobalClustersMessage {
  GlobalClusterIdentifier?: string;
  MaxRecords?: number;
  Marker?: string;
}
export interface DescribeOrderableDBInstanceOptionsMessage {
  Engine: string;
  EngineVersion?: string;
  DBInstanceClass?: string;
  LicenseModel?: string;
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
export interface DescribeValidDBInstanceModificationsMessage {
  DBInstanceIdentifier: string;
}
export interface DescribeValidDBInstanceModificationsResult {
  ValidDBInstanceModificationsMessage?: ValidDBInstanceModificationsMessage;
}
export interface DomainMembership {
  Domain?: string;
  Status?: string;
  FQDN?: string;
  IAMRoleName?: string;
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
export interface Endpoint {
  Address?: string;
  Port?: number;
  HostedZoneId?: string;
}
export interface EngineDefaults {
  DBParameterGroupFamily?: string;
  Marker?: string;
  Parameters?: Array<Parameter>;
}
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

export interface FailoverDBClusterMessage {
  DBClusterIdentifier?: string;
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
  StorageEncrypted?: boolean;
  DeletionProtection?: boolean;
  GlobalClusterMembers?: Array<GlobalClusterMember>;
  FailoverState?: FailoverState;
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
}
export type GlobalClusterMemberList = Array<GlobalClusterMember>;
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
export declare class InstanceQuotaExceededFault extends Data.TaggedError(
  "InstanceQuotaExceededFault",
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
export declare class InvalidDBSecurityGroupStateFault extends Data.TaggedError(
  "InvalidDBSecurityGroupStateFault",
)<{
  readonly message?: string;
}> {}
export declare class InvalidDBSnapshotStateFault extends Data.TaggedError(
  "InvalidDBSnapshotStateFault",
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
export declare class InvalidGlobalClusterStateFault extends Data.TaggedError(
  "InvalidGlobalClusterStateFault",
)<{
  readonly message?: string;
}> {}
export declare class InvalidRestoreFault extends Data.TaggedError(
  "InvalidRestoreFault",
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
export type KeyList = Array<string>;
export declare class KMSKeyNotAccessibleFault extends Data.TaggedError(
  "KMSKeyNotAccessibleFault",
)<{
  readonly message?: string;
}> {}
export interface ListTagsForResourceMessage {
  ResourceName: string;
  Filters?: Array<Filter>;
}
export type LogTypeList = Array<string>;
export interface ModifyDBClusterEndpointMessage {
  DBClusterEndpointIdentifier: string;
  EndpointType?: string;
  StaticMembers?: Array<string>;
  ExcludedMembers?: Array<string>;
}
export interface ModifyDBClusterEndpointOutput {
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
  CloudwatchLogsExportConfiguration?: CloudwatchLogsExportConfiguration;
  EngineVersion?: string;
  AllowMajorVersionUpgrade?: boolean;
  DBInstanceParameterGroupName?: string;
  DeletionProtection?: boolean;
  CopyTagsToSnapshot?: boolean;
  ServerlessV2ScalingConfiguration?: ServerlessV2ScalingConfiguration;
  StorageType?: string;
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
  CopyTagsToSnapshot?: boolean;
  MonitoringInterval?: number;
  DBPortNumber?: number;
  PubliclyAccessible?: boolean;
  MonitoringRoleArn?: string;
  DomainIAMRoleName?: string;
  PromotionTier?: number;
  EnableIAMDatabaseAuthentication?: boolean;
  EnablePerformanceInsights?: boolean;
  PerformanceInsightsKMSKeyId?: string;
  CloudwatchLogsExportConfiguration?: CloudwatchLogsExportConfiguration;
  DeletionProtection?: boolean;
}
export interface ModifyDBInstanceResult {
  DBInstance?: DBInstance;
}
export interface ModifyDBParameterGroupMessage {
  DBParameterGroupName: string;
  Parameters: Array<Parameter>;
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
  GlobalClusterIdentifier: string;
  NewGlobalClusterIdentifier?: string;
  DeletionProtection?: boolean;
  EngineVersion?: string;
  AllowMajorVersionUpgrade?: boolean;
}
export interface ModifyGlobalClusterResult {
  GlobalCluster?: GlobalCluster;
}
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
export interface OrderableDBInstanceOption {
  Engine?: string;
  EngineVersion?: string;
  DBInstanceClass?: string;
  LicenseModel?: string;
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
  SupportsGlobalDatabases?: boolean;
}
export type OrderableDBInstanceOptionsList = Array<OrderableDBInstanceOption>;
export interface OrderableDBInstanceOptionsMessage {
  OrderableDBInstanceOptions?: Array<OrderableDBInstanceOption>;
  Marker?: string;
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
}
export interface PromoteReadReplicaDBClusterMessage {
  DBClusterIdentifier: string;
}
export interface PromoteReadReplicaDBClusterResult {
  DBCluster?: DBCluster;
}
export declare class ProvisionedIopsNotAvailableInAZFault extends Data.TaggedError(
  "ProvisionedIopsNotAvailableInAZFault",
)<{
  readonly message?: string;
}> {}
export interface Range {
  From?: number;
  To?: number;
  Step?: number;
}
export type RangeList = Array<Range>;
export type ReadersArnList = Array<string>;
export type ReadReplicaDBClusterIdentifierList = Array<string>;
export type ReadReplicaDBInstanceIdentifierList = Array<string>;
export type ReadReplicaIdentifierList = Array<string>;
export interface RebootDBInstanceMessage {
  DBInstanceIdentifier: string;
  ForceFailover?: boolean;
}
export interface RebootDBInstanceResult {
  DBInstance?: DBInstance;
}
export interface RemoveFromGlobalClusterMessage {
  GlobalClusterIdentifier: string;
  DbClusterIdentifier: string;
}
export interface RemoveFromGlobalClusterResult {
  GlobalCluster?: GlobalCluster;
}
export interface RemoveRoleFromDBClusterMessage {
  DBClusterIdentifier: string;
  RoleArn: string;
  FeatureName?: string;
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
  EnableCloudwatchLogsExports?: Array<string>;
  DBClusterParameterGroupName?: string;
  DeletionProtection?: boolean;
  CopyTagsToSnapshot?: boolean;
  ServerlessV2ScalingConfiguration?: ServerlessV2ScalingConfiguration;
  StorageType?: string;
}
export interface RestoreDBClusterFromSnapshotResult {
  DBCluster?: DBCluster;
}
export interface RestoreDBClusterToPointInTimeMessage {
  DBClusterIdentifier: string;
  RestoreType?: string;
  SourceDBClusterIdentifier: string;
  RestoreToTime?: Date | string;
  UseLatestRestorableTime?: boolean;
  Port?: number;
  DBSubnetGroupName?: string;
  OptionGroupName?: string;
  VpcSecurityGroupIds?: Array<string>;
  Tags?: Array<Tag>;
  KmsKeyId?: string;
  EnableIAMDatabaseAuthentication?: boolean;
  EnableCloudwatchLogsExports?: Array<string>;
  DBClusterParameterGroupName?: string;
  DeletionProtection?: boolean;
  ServerlessV2ScalingConfiguration?: ServerlessV2ScalingConfiguration;
  StorageType?: string;
}
export interface RestoreDBClusterToPointInTimeResult {
  DBCluster?: DBCluster;
}
export type SensitiveString = string;

export interface ServerlessV2ScalingConfiguration {
  MinCapacity?: number;
  MaxCapacity?: number;
}
export interface ServerlessV2ScalingConfigurationInfo {
  MinCapacity?: number;
  MaxCapacity?: number;
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
export type SourceIdsList = Array<string>;
export declare class SourceNotFoundFault extends Data.TaggedError(
  "SourceNotFoundFault",
)<{
  readonly message?: string;
}> {}
export type SourceType =
  | "db_instance"
  | "db_parameter_group"
  | "db_security_group"
  | "db_snapshot"
  | "db_cluster"
  | "db_cluster_snapshot";
export interface StartDBClusterMessage {
  DBClusterIdentifier: string;
}
export interface StartDBClusterResult {
  DBCluster?: DBCluster;
}
export interface StopDBClusterMessage {
  DBClusterIdentifier: string;
}
export interface StopDBClusterResult {
  DBCluster?: DBCluster;
}
export declare class StorageQuotaExceededFault extends Data.TaggedError(
  "StorageQuotaExceededFault",
)<{
  readonly message?: string;
}> {}
export declare class StorageTypeNotSupportedFault extends Data.TaggedError(
  "StorageTypeNotSupportedFault",
)<{
  readonly message?: string;
}> {}
export type StringList = Array<string>;
export interface Subnet {
  SubnetIdentifier?: string;
  SubnetAvailabilityZone?: AvailabilityZone;
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
export type SupportedTimezonesList = Array<Timezone>;
export interface SwitchoverGlobalClusterMessage {
  GlobalClusterIdentifier: string;
  TargetDbClusterIdentifier: string;
}
export interface SwitchoverGlobalClusterResult {
  GlobalCluster?: GlobalCluster;
}
export interface Tag {
  Key?: string;
  Value?: string;
}
export type TagList = Array<Tag>;
export interface TagListMessage {
  TagList?: Array<Tag>;
}
export interface Timezone {
  TimezoneName?: string;
}
export type TStamp = Date | string;

export interface UpgradeTarget {
  Engine?: string;
  EngineVersion?: string;
  Description?: string;
  AutoUpgrade?: boolean;
  IsMajorVersionUpgrade?: boolean;
  SupportsGlobalDatabases?: boolean;
}
export interface ValidDBInstanceModificationsMessage {
  Storage?: Array<ValidStorageOptions>;
}
export interface ValidStorageOptions {
  StorageType?: string;
  StorageSize?: Array<Range>;
  ProvisionedIops?: Array<Range>;
  IopsToStorageRatio?: Array<DoubleRange>;
}
export type ValidStorageOptionsList = Array<ValidStorageOptions>;
export type ValidUpgradeTargetList = Array<UpgradeTarget>;
export type VpcSecurityGroupIdList = Array<string>;
export interface VpcSecurityGroupMembership {
  VpcSecurityGroupId?: string;
  Status?: string;
}
export type VpcSecurityGroupMembershipList = Array<VpcSecurityGroupMembership>;
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
    | DBClusterNotFoundFault
    | DBInstanceNotFoundFault
    | DBSnapshotNotFoundFault
    | CommonAwsError;
}

export declare namespace ApplyPendingMaintenanceAction {
  export type Input = ApplyPendingMaintenanceActionMessage;
  export type Output = ApplyPendingMaintenanceActionResult;
  export type Error = ResourceNotFoundFault | CommonAwsError;
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
    | GlobalClusterNotFoundFault
    | InsufficientStorageClusterCapacityFault
    | InvalidDBClusterStateFault
    | InvalidDBInstanceStateFault
    | InvalidDBSubnetGroupStateFault
    | InvalidGlobalClusterStateFault
    | InvalidSubnet
    | InvalidVPCNetworkStateFault
    | KMSKeyNotAccessibleFault
    | StorageQuotaExceededFault
    | CommonAwsError;
}

export declare namespace CreateDBClusterEndpoint {
  export type Input = CreateDBClusterEndpointMessage;
  export type Output = CreateDBClusterEndpointOutput;
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
    | OptionGroupNotFoundFault
    | ProvisionedIopsNotAvailableInAZFault
    | StorageQuotaExceededFault
    | StorageTypeNotSupportedFault
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

export declare namespace DeleteDBCluster {
  export type Input = DeleteDBClusterMessage;
  export type Output = DeleteDBClusterResult;
  export type Error =
    | DBClusterNotFoundFault
    | DBClusterSnapshotAlreadyExistsFault
    | InvalidDBClusterSnapshotStateFault
    | InvalidDBClusterStateFault
    | SnapshotQuotaExceededFault
    | CommonAwsError;
}

export declare namespace DeleteDBClusterEndpoint {
  export type Input = DeleteDBClusterEndpointMessage;
  export type Output = DeleteDBClusterEndpointOutput;
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
    | DBInstanceNotFoundFault
    | DBSnapshotAlreadyExistsFault
    | InvalidDBClusterStateFault
    | InvalidDBInstanceStateFault
    | SnapshotQuotaExceededFault
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

export declare namespace DescribeDBInstances {
  export type Input = DescribeDBInstancesMessage;
  export type Output = DBInstanceMessage;
  export type Error = DBInstanceNotFoundFault | CommonAwsError;
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

export declare namespace DescribeGlobalClusters {
  export type Input = DescribeGlobalClustersMessage;
  export type Output = GlobalClustersMessage;
  export type Error = GlobalClusterNotFoundFault | CommonAwsError;
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

export declare namespace DescribeValidDBInstanceModifications {
  export type Input = DescribeValidDBInstanceModificationsMessage;
  export type Output = DescribeValidDBInstanceModificationsResult;
  export type Error =
    | DBInstanceNotFoundFault
    | InvalidDBInstanceStateFault
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
    | DBClusterNotFoundFault
    | DBInstanceNotFoundFault
    | DBSnapshotNotFoundFault
    | CommonAwsError;
}

export declare namespace ModifyDBCluster {
  export type Input = ModifyDBClusterMessage;
  export type Output = ModifyDBClusterResult;
  export type Error =
    | DBClusterAlreadyExistsFault
    | DBClusterNotFoundFault
    | DBClusterParameterGroupNotFoundFault
    | DBSubnetGroupNotFoundFault
    | InvalidDBClusterStateFault
    | InvalidDBInstanceStateFault
    | InvalidDBSecurityGroupStateFault
    | InvalidDBSubnetGroupStateFault
    | InvalidSubnet
    | InvalidVPCNetworkStateFault
    | StorageQuotaExceededFault
    | StorageTypeNotSupportedFault
    | CommonAwsError;
}

export declare namespace ModifyDBClusterEndpoint {
  export type Input = ModifyDBClusterEndpointMessage;
  export type Output = ModifyDBClusterEndpointOutput;
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
    | CertificateNotFoundFault
    | DBInstanceAlreadyExistsFault
    | DBInstanceNotFoundFault
    | DBParameterGroupNotFoundFault
    | DBSecurityGroupNotFoundFault
    | DBUpgradeDependencyFailureFault
    | DomainNotFoundFault
    | InsufficientDBInstanceCapacityFault
    | InvalidDBInstanceStateFault
    | InvalidDBSecurityGroupStateFault
    | InvalidVPCNetworkStateFault
    | OptionGroupNotFoundFault
    | ProvisionedIopsNotAvailableInAZFault
    | StorageQuotaExceededFault
    | StorageTypeNotSupportedFault
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
    | GlobalClusterNotFoundFault
    | InvalidGlobalClusterStateFault
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

export declare namespace RebootDBInstance {
  export type Input = RebootDBInstanceMessage;
  export type Output = RebootDBInstanceResult;
  export type Error =
    | DBInstanceNotFoundFault
    | InvalidDBInstanceStateFault
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
    | DBClusterNotFoundFault
    | DBInstanceNotFoundFault
    | DBSnapshotNotFoundFault
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

export declare namespace RestoreDBClusterFromSnapshot {
  export type Input = RestoreDBClusterFromSnapshotMessage;
  export type Output = RestoreDBClusterFromSnapshotResult;
  export type Error =
    | DBClusterAlreadyExistsFault
    | DBClusterParameterGroupNotFoundFault
    | DBClusterQuotaExceededFault
    | DBClusterSnapshotNotFoundFault
    | DBSnapshotNotFoundFault
    | DBSubnetGroupNotFoundFault
    | InsufficientDBClusterCapacityFault
    | InsufficientStorageClusterCapacityFault
    | InvalidDBClusterSnapshotStateFault
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
    | DBClusterNotFoundFault
    | DBClusterParameterGroupNotFoundFault
    | DBClusterQuotaExceededFault
    | DBClusterSnapshotNotFoundFault
    | DBSubnetGroupNotFoundFault
    | InsufficientDBClusterCapacityFault
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

export declare namespace StartDBCluster {
  export type Input = StartDBClusterMessage;
  export type Output = StartDBClusterResult;
  export type Error =
    | DBClusterNotFoundFault
    | InvalidDBClusterStateFault
    | InvalidDBInstanceStateFault
    | CommonAwsError;
}

export declare namespace StopDBCluster {
  export type Input = StopDBClusterMessage;
  export type Output = StopDBClusterResult;
  export type Error =
    | DBClusterNotFoundFault
    | InvalidDBClusterStateFault
    | InvalidDBInstanceStateFault
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
