import type { Effect, Data as EffectData } from "effect";
import type { CommonAwsError } from "../error.ts";

export interface AmazonRDSv19 {
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
    | InvalidDBClusterStateFault
    | InvalidDBInstanceStateFault
    | ResourceNotFoundFault
    | CommonAwsError
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
    | InstanceQuotaExceededFault
    | InsufficientDBInstanceCapacityFault
    | InvalidDBClusterStateFault
    | InvalidSubnet
    | InvalidVPCNetworkStateFault
    | KMSKeyNotAccessibleFault
    | StorageQuotaExceededFault
    | StorageTypeNotSupportedFault
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
  describeCertificates(
    input: DescribeCertificatesMessage,
  ): Effect.Effect<
    CertificateMessage,
    CertificateNotFoundFault | CommonAwsError
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
    | InsufficientDBInstanceCapacityFault
    | InvalidDBInstanceStateFault
    | InvalidDBSecurityGroupStateFault
    | InvalidVPCNetworkStateFault
    | StorageQuotaExceededFault
    | StorageTypeNotSupportedFault
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
  restoreDBClusterFromSnapshot(
    input: RestoreDBClusterFromSnapshotMessage,
  ): Effect.Effect<
    RestoreDBClusterFromSnapshotResult,
    | DBClusterAlreadyExistsFault
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
    | StorageQuotaExceededFault
    | CommonAwsError
  >;
  restoreDBClusterToPointInTime(
    input: RestoreDBClusterToPointInTimeMessage,
  ): Effect.Effect<
    RestoreDBClusterToPointInTimeResult,
    | DBClusterAlreadyExistsFault
    | DBClusterNotFoundFault
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

export type Docdb = AmazonRDSv19;

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
export declare class AuthorizationNotFoundFault extends EffectData.TaggedError(
  "AuthorizationNotFoundFault",
)<{
  readonly message?: string;
}> {}
export interface AvailabilityZone {
  Name?: string;
}
export type AvailabilityZoneList = Array<AvailabilityZone>;
export type AvailabilityZones = Array<string>;
export type DocdbBoolean = boolean;

export type BooleanOptional = boolean;

export type CACertificateIdentifiersList = Array<string>;
export interface Certificate {
  CertificateIdentifier?: string;
  CertificateType?: string;
  Thumbprint?: string;
  ValidFrom?: Date | string;
  ValidTill?: Date | string;
  CertificateArn?: string;
}
export interface CertificateDetails {
  CAIdentifier?: string;
  ValidTill?: Date | string;
}
export type CertificateList = Array<Certificate>;
export interface CertificateMessage {
  Certificates?: Array<Certificate>;
  Marker?: string;
}
export declare class CertificateNotFoundFault extends EffectData.TaggedError(
  "CertificateNotFoundFault",
)<{
  readonly message?: string;
}> {}
export interface CloudwatchLogsExportConfiguration {
  EnableLogTypes?: Array<string>;
  DisableLogTypes?: Array<string>;
}
export interface ClusterMasterUserSecret {
  SecretArn?: string;
  SecretStatus?: string;
  KmsKeyId?: string;
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
export interface CreateDBClusterMessage {
  AvailabilityZones?: Array<string>;
  BackupRetentionPeriod?: number;
  DBClusterIdentifier: string;
  DBClusterParameterGroupName?: string;
  VpcSecurityGroupIds?: Array<string>;
  DBSubnetGroupName?: string;
  Engine: string;
  EngineVersion?: string;
  Port?: number;
  MasterUsername?: string;
  MasterUserPassword?: string;
  PreferredBackupWindow?: string;
  PreferredMaintenanceWindow?: string;
  Tags?: Array<Tag>;
  StorageEncrypted?: boolean;
  KmsKeyId?: string;
  PreSignedUrl?: string;
  EnableCloudwatchLogsExports?: Array<string>;
  DeletionProtection?: boolean;
  GlobalClusterIdentifier?: string;
  StorageType?: string;
  ManageMasterUserPassword?: boolean;
  MasterUserSecretKmsKeyId?: string;
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
  DBInstanceIdentifier: string;
  DBInstanceClass: string;
  Engine: string;
  AvailabilityZone?: string;
  PreferredMaintenanceWindow?: string;
  AutoMinorVersionUpgrade?: boolean;
  Tags?: Array<Tag>;
  DBClusterIdentifier: string;
  CopyTagsToSnapshot?: boolean;
  PromotionTier?: number;
  EnablePerformanceInsights?: boolean;
  PerformanceInsightsKMSKeyId?: string;
  CACertificateIdentifier?: string;
}
export interface CreateDBInstanceResult {
  DBInstance?: DBInstance;
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
  DatabaseName?: string;
  StorageEncrypted?: boolean;
}
export interface CreateGlobalClusterResult {
  GlobalCluster?: GlobalCluster;
}
export interface DBCluster {
  AvailabilityZones?: Array<string>;
  BackupRetentionPeriod?: number;
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
  CloneGroupId?: string;
  ClusterCreateTime?: Date | string;
  EnabledCloudwatchLogsExports?: Array<string>;
  DeletionProtection?: boolean;
  StorageType?: string;
  MasterUserSecret?: ClusterMasterUserSecret;
}
export declare class DBClusterAlreadyExistsFault extends EffectData.TaggedError(
  "DBClusterAlreadyExistsFault",
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
export declare class DBClusterNotFoundFault extends EffectData.TaggedError(
  "DBClusterNotFoundFault",
)<{
  readonly message?: string;
}> {}
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
export declare class DBClusterParameterGroupNotFoundFault extends EffectData.TaggedError(
  "DBClusterParameterGroupNotFoundFault",
)<{
  readonly message?: string;
}> {}
export interface DBClusterParameterGroupsMessage {
  Marker?: string;
  DBClusterParameterGroups?: Array<DBClusterParameterGroup>;
}
export declare class DBClusterQuotaExceededFault extends EffectData.TaggedError(
  "DBClusterQuotaExceededFault",
)<{
  readonly message?: string;
}> {}
export interface DBClusterRole {
  RoleArn?: string;
  Status?: string;
}
export type DBClusterRoles = Array<DBClusterRole>;
export interface DBClusterSnapshot {
  AvailabilityZones?: Array<string>;
  DBClusterSnapshotIdentifier?: string;
  DBClusterIdentifier?: string;
  SnapshotCreateTime?: Date | string;
  Engine?: string;
  Status?: string;
  Port?: number;
  VpcId?: string;
  ClusterCreateTime?: Date | string;
  MasterUsername?: string;
  EngineVersion?: string;
  SnapshotType?: string;
  PercentProgress?: number;
  StorageEncrypted?: boolean;
  KmsKeyId?: string;
  DBClusterSnapshotArn?: string;
  SourceDBClusterSnapshotArn?: string;
  StorageType?: string;
}
export declare class DBClusterSnapshotAlreadyExistsFault extends EffectData.TaggedError(
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
export declare class DBClusterSnapshotNotFoundFault extends EffectData.TaggedError(
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
  ValidUpgradeTarget?: Array<UpgradeTarget>;
  ExportableLogTypes?: Array<string>;
  SupportsLogExportsToCloudwatchLogs?: boolean;
  SupportedCACertificateIdentifiers?: Array<string>;
  SupportsCertificateRotationWithoutRestart?: boolean;
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
  Endpoint?: Endpoint;
  InstanceCreateTime?: Date | string;
  PreferredBackupWindow?: string;
  BackupRetentionPeriod?: number;
  VpcSecurityGroups?: Array<VpcSecurityGroupMembership>;
  AvailabilityZone?: string;
  DBSubnetGroup?: DBSubnetGroup;
  PreferredMaintenanceWindow?: string;
  PendingModifiedValues?: PendingModifiedValues;
  LatestRestorableTime?: Date | string;
  EngineVersion?: string;
  AutoMinorVersionUpgrade?: boolean;
  PubliclyAccessible?: boolean;
  StatusInfos?: Array<DBInstanceStatusInfo>;
  DBClusterIdentifier?: string;
  StorageEncrypted?: boolean;
  KmsKeyId?: string;
  DbiResourceId?: string;
  CACertificateIdentifier?: string;
  CopyTagsToSnapshot?: boolean;
  PromotionTier?: number;
  DBInstanceArn?: string;
  EnabledCloudwatchLogsExports?: Array<string>;
  CertificateDetails?: CertificateDetails;
  PerformanceInsightsEnabled?: boolean;
  PerformanceInsightsKMSKeyId?: string;
}
export declare class DBInstanceAlreadyExistsFault extends EffectData.TaggedError(
  "DBInstanceAlreadyExistsFault",
)<{
  readonly message?: string;
}> {}
export type DBInstanceList = Array<DBInstance>;
export interface DBInstanceMessage {
  Marker?: string;
  DBInstances?: Array<DBInstance>;
}
export declare class DBInstanceNotFoundFault extends EffectData.TaggedError(
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
export declare class DBParameterGroupAlreadyExistsFault extends EffectData.TaggedError(
  "DBParameterGroupAlreadyExistsFault",
)<{
  readonly message?: string;
}> {}
export declare class DBParameterGroupNotFoundFault extends EffectData.TaggedError(
  "DBParameterGroupNotFoundFault",
)<{
  readonly message?: string;
}> {}
export declare class DBParameterGroupQuotaExceededFault extends EffectData.TaggedError(
  "DBParameterGroupQuotaExceededFault",
)<{
  readonly message?: string;
}> {}
export declare class DBSecurityGroupNotFoundFault extends EffectData.TaggedError(
  "DBSecurityGroupNotFoundFault",
)<{
  readonly message?: string;
}> {}
export declare class DBSnapshotAlreadyExistsFault extends EffectData.TaggedError(
  "DBSnapshotAlreadyExistsFault",
)<{
  readonly message?: string;
}> {}
export declare class DBSnapshotNotFoundFault extends EffectData.TaggedError(
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
export declare class DBSubnetGroupAlreadyExistsFault extends EffectData.TaggedError(
  "DBSubnetGroupAlreadyExistsFault",
)<{
  readonly message?: string;
}> {}
export declare class DBSubnetGroupDoesNotCoverEnoughAZs extends EffectData.TaggedError(
  "DBSubnetGroupDoesNotCoverEnoughAZs",
)<{
  readonly message?: string;
}> {}
export interface DBSubnetGroupMessage {
  Marker?: string;
  DBSubnetGroups?: Array<DBSubnetGroup>;
}
export declare class DBSubnetGroupNotFoundFault extends EffectData.TaggedError(
  "DBSubnetGroupNotFoundFault",
)<{
  readonly message?: string;
}> {}
export declare class DBSubnetGroupQuotaExceededFault extends EffectData.TaggedError(
  "DBSubnetGroupQuotaExceededFault",
)<{
  readonly message?: string;
}> {}
export type DBSubnetGroups = Array<DBSubnetGroup>;
export declare class DBSubnetQuotaExceededFault extends EffectData.TaggedError(
  "DBSubnetQuotaExceededFault",
)<{
  readonly message?: string;
}> {}
export declare class DBUpgradeDependencyFailureFault extends EffectData.TaggedError(
  "DBUpgradeDependencyFailureFault",
)<{
  readonly message?: string;
}> {}
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
}
export interface DeleteDBInstanceResult {
  DBInstance?: DBInstance;
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
export interface DescribeCertificatesMessage {
  CertificateIdentifier?: string;
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
  Filters?: Array<Filter>;
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
  DatabaseName?: string;
  StorageEncrypted?: boolean;
  DeletionProtection?: boolean;
  GlobalClusterMembers?: Array<GlobalClusterMember>;
}
export declare class GlobalClusterAlreadyExistsFault extends EffectData.TaggedError(
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
export declare class GlobalClusterNotFoundFault extends EffectData.TaggedError(
  "GlobalClusterNotFoundFault",
)<{
  readonly message?: string;
}> {}
export declare class GlobalClusterQuotaExceededFault extends EffectData.TaggedError(
  "GlobalClusterQuotaExceededFault",
)<{
  readonly message?: string;
}> {}
export interface GlobalClustersMessage {
  Marker?: string;
  GlobalClusters?: Array<GlobalCluster>;
}
export declare class InstanceQuotaExceededFault extends EffectData.TaggedError(
  "InstanceQuotaExceededFault",
)<{
  readonly message?: string;
}> {}
export declare class InsufficientDBClusterCapacityFault extends EffectData.TaggedError(
  "InsufficientDBClusterCapacityFault",
)<{
  readonly message?: string;
}> {}
export declare class InsufficientDBInstanceCapacityFault extends EffectData.TaggedError(
  "InsufficientDBInstanceCapacityFault",
)<{
  readonly message?: string;
}> {}
export declare class InsufficientStorageClusterCapacityFault extends EffectData.TaggedError(
  "InsufficientStorageClusterCapacityFault",
)<{
  readonly message?: string;
}> {}
export type Integer = number;

export type IntegerOptional = number;

export declare class InvalidDBClusterSnapshotStateFault extends EffectData.TaggedError(
  "InvalidDBClusterSnapshotStateFault",
)<{
  readonly message?: string;
}> {}
export declare class InvalidDBClusterStateFault extends EffectData.TaggedError(
  "InvalidDBClusterStateFault",
)<{
  readonly message?: string;
}> {}
export declare class InvalidDBInstanceStateFault extends EffectData.TaggedError(
  "InvalidDBInstanceStateFault",
)<{
  readonly message?: string;
}> {}
export declare class InvalidDBParameterGroupStateFault extends EffectData.TaggedError(
  "InvalidDBParameterGroupStateFault",
)<{
  readonly message?: string;
}> {}
export declare class InvalidDBSecurityGroupStateFault extends EffectData.TaggedError(
  "InvalidDBSecurityGroupStateFault",
)<{
  readonly message?: string;
}> {}
export declare class InvalidDBSnapshotStateFault extends EffectData.TaggedError(
  "InvalidDBSnapshotStateFault",
)<{
  readonly message?: string;
}> {}
export declare class InvalidDBSubnetGroupStateFault extends EffectData.TaggedError(
  "InvalidDBSubnetGroupStateFault",
)<{
  readonly message?: string;
}> {}
export declare class InvalidDBSubnetStateFault extends EffectData.TaggedError(
  "InvalidDBSubnetStateFault",
)<{
  readonly message?: string;
}> {}
export declare class InvalidEventSubscriptionStateFault extends EffectData.TaggedError(
  "InvalidEventSubscriptionStateFault",
)<{
  readonly message?: string;
}> {}
export declare class InvalidGlobalClusterStateFault extends EffectData.TaggedError(
  "InvalidGlobalClusterStateFault",
)<{
  readonly message?: string;
}> {}
export declare class InvalidRestoreFault extends EffectData.TaggedError(
  "InvalidRestoreFault",
)<{
  readonly message?: string;
}> {}
export declare class InvalidSubnet extends EffectData.TaggedError(
  "InvalidSubnet",
)<{
  readonly message?: string;
}> {}
export declare class InvalidVPCNetworkStateFault extends EffectData.TaggedError(
  "InvalidVPCNetworkStateFault",
)<{
  readonly message?: string;
}> {}
export type KeyList = Array<string>;
export declare class KMSKeyNotAccessibleFault extends EffectData.TaggedError(
  "KMSKeyNotAccessibleFault",
)<{
  readonly message?: string;
}> {}
export interface ListTagsForResourceMessage {
  ResourceName: string;
  Filters?: Array<Filter>;
}
export type LogTypeList = Array<string>;
export interface ModifyDBClusterMessage {
  DBClusterIdentifier: string;
  NewDBClusterIdentifier?: string;
  ApplyImmediately?: boolean;
  BackupRetentionPeriod?: number;
  DBClusterParameterGroupName?: string;
  VpcSecurityGroupIds?: Array<string>;
  Port?: number;
  MasterUserPassword?: string;
  PreferredBackupWindow?: string;
  PreferredMaintenanceWindow?: string;
  CloudwatchLogsExportConfiguration?: CloudwatchLogsExportConfiguration;
  EngineVersion?: string;
  AllowMajorVersionUpgrade?: boolean;
  DeletionProtection?: boolean;
  StorageType?: string;
  ManageMasterUserPassword?: boolean;
  MasterUserSecretKmsKeyId?: string;
  RotateMasterUserPassword?: boolean;
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
  DBInstanceClass?: string;
  ApplyImmediately?: boolean;
  PreferredMaintenanceWindow?: string;
  AutoMinorVersionUpgrade?: boolean;
  NewDBInstanceIdentifier?: string;
  CACertificateIdentifier?: string;
  CopyTagsToSnapshot?: boolean;
  PromotionTier?: number;
  EnablePerformanceInsights?: boolean;
  PerformanceInsightsKMSKeyId?: string;
  CertificateRotationRestart?: boolean;
}
export interface ModifyDBInstanceResult {
  DBInstance?: DBInstance;
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
}
export interface ModifyGlobalClusterResult {
  GlobalCluster?: GlobalCluster;
}
export interface OrderableDBInstanceOption {
  Engine?: string;
  EngineVersion?: string;
  DBInstanceClass?: string;
  LicenseModel?: string;
  AvailabilityZones?: Array<AvailabilityZone>;
  Vpc?: boolean;
  StorageType?: string;
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
export type ReadersArnList = Array<string>;
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
export declare class ResourceNotFoundFault extends EffectData.TaggedError(
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
  VpcSecurityGroupIds?: Array<string>;
  Tags?: Array<Tag>;
  KmsKeyId?: string;
  EnableCloudwatchLogsExports?: Array<string>;
  DeletionProtection?: boolean;
  DBClusterParameterGroupName?: string;
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
  VpcSecurityGroupIds?: Array<string>;
  Tags?: Array<Tag>;
  KmsKeyId?: string;
  EnableCloudwatchLogsExports?: Array<string>;
  DeletionProtection?: boolean;
  StorageType?: string;
}
export interface RestoreDBClusterToPointInTimeResult {
  DBCluster?: DBCluster;
}
export declare class SharedSnapshotQuotaExceededFault extends EffectData.TaggedError(
  "SharedSnapshotQuotaExceededFault",
)<{
  readonly message?: string;
}> {}
export declare class SnapshotQuotaExceededFault extends EffectData.TaggedError(
  "SnapshotQuotaExceededFault",
)<{
  readonly message?: string;
}> {}
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
export type SourceIdsList = Array<string>;
export declare class SourceNotFoundFault extends EffectData.TaggedError(
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
export declare class StorageQuotaExceededFault extends EffectData.TaggedError(
  "StorageQuotaExceededFault",
)<{
  readonly message?: string;
}> {}
export declare class StorageTypeNotSupportedFault extends EffectData.TaggedError(
  "StorageTypeNotSupportedFault",
)<{
  readonly message?: string;
}> {}
export type DocdbString = string;

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
export declare class SubscriptionNotFoundFault extends EffectData.TaggedError(
  "SubscriptionNotFoundFault",
)<{
  readonly message?: string;
}> {}
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
export type TStamp = Date | string;

export interface UpgradeTarget {
  Engine?: string;
  EngineVersion?: string;
  Description?: string;
  AutoUpgrade?: boolean;
  IsMajorVersionUpgrade?: boolean;
}
export type ValidUpgradeTargetList = Array<UpgradeTarget>;
export type VpcSecurityGroupIdList = Array<string>;
export interface VpcSecurityGroupMembership {
  VpcSecurityGroupId?: string;
  Status?: string;
}
export type VpcSecurityGroupMembershipList = Array<VpcSecurityGroupMembership>;
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
  export type Error =
    | InvalidDBClusterStateFault
    | InvalidDBInstanceStateFault
    | ResourceNotFoundFault
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
    | InstanceQuotaExceededFault
    | InsufficientDBInstanceCapacityFault
    | InvalidDBClusterStateFault
    | InvalidSubnet
    | InvalidVPCNetworkStateFault
    | KMSKeyNotAccessibleFault
    | StorageQuotaExceededFault
    | StorageTypeNotSupportedFault
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

export declare namespace DescribeCertificates {
  export type Input = DescribeCertificatesMessage;
  export type Output = CertificateMessage;
  export type Error = CertificateNotFoundFault | CommonAwsError;
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
    | InsufficientDBInstanceCapacityFault
    | InvalidDBInstanceStateFault
    | InvalidDBSecurityGroupStateFault
    | InvalidVPCNetworkStateFault
    | StorageQuotaExceededFault
    | StorageTypeNotSupportedFault
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

export declare namespace RestoreDBClusterFromSnapshot {
  export type Input = RestoreDBClusterFromSnapshotMessage;
  export type Output = RestoreDBClusterFromSnapshotResult;
  export type Error =
    | DBClusterAlreadyExistsFault
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
    | StorageQuotaExceededFault
    | CommonAwsError;
}

export declare namespace RestoreDBClusterToPointInTime {
  export type Input = RestoreDBClusterToPointInTimeMessage;
  export type Output = RestoreDBClusterToPointInTimeResult;
  export type Error =
    | DBClusterAlreadyExistsFault
    | DBClusterNotFoundFault
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
