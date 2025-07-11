import type { Effect, Data as EffectData } from "effect";
import type { CommonAwsError } from "../error.ts";

export interface AmazonMemoryDB {
  batchUpdateCluster(
    input: BatchUpdateClusterRequest,
  ): Effect.Effect<
    BatchUpdateClusterResponse,
    InvalidParameterValueException | ServiceUpdateNotFoundFault | CommonAwsError
  >;
  copySnapshot(
    input: CopySnapshotRequest,
  ): Effect.Effect<
    CopySnapshotResponse,
    | InvalidParameterCombinationException
    | InvalidParameterValueException
    | InvalidSnapshotStateFault
    | ServiceLinkedRoleNotFoundFault
    | SnapshotAlreadyExistsFault
    | SnapshotNotFoundFault
    | SnapshotQuotaExceededFault
    | TagQuotaPerResourceExceeded
    | CommonAwsError
  >;
  createACL(
    input: CreateACLRequest,
  ): Effect.Effect<
    CreateACLResponse,
    | ACLAlreadyExistsFault
    | ACLQuotaExceededFault
    | DefaultUserRequired
    | DuplicateUserNameFault
    | InvalidParameterValueException
    | TagQuotaPerResourceExceeded
    | UserNotFoundFault
    | CommonAwsError
  >;
  createCluster(
    input: CreateClusterRequest,
  ): Effect.Effect<
    CreateClusterResponse,
    | ACLNotFoundFault
    | ClusterAlreadyExistsFault
    | ClusterQuotaForCustomerExceededFault
    | InsufficientClusterCapacityFault
    | InvalidACLStateFault
    | InvalidCredentialsException
    | InvalidMultiRegionClusterStateFault
    | InvalidParameterCombinationException
    | InvalidParameterValueException
    | InvalidVPCNetworkStateFault
    | MultiRegionClusterNotFoundFault
    | NodeQuotaForClusterExceededFault
    | NodeQuotaForCustomerExceededFault
    | ParameterGroupNotFoundFault
    | ServiceLinkedRoleNotFoundFault
    | ShardsPerClusterQuotaExceededFault
    | SubnetGroupNotFoundFault
    | TagQuotaPerResourceExceeded
    | CommonAwsError
  >;
  createMultiRegionCluster(
    input: CreateMultiRegionClusterRequest,
  ): Effect.Effect<
    CreateMultiRegionClusterResponse,
    | ClusterQuotaForCustomerExceededFault
    | InvalidParameterCombinationException
    | InvalidParameterValueException
    | MultiRegionClusterAlreadyExistsFault
    | MultiRegionParameterGroupNotFoundFault
    | TagQuotaPerResourceExceeded
    | CommonAwsError
  >;
  createParameterGroup(
    input: CreateParameterGroupRequest,
  ): Effect.Effect<
    CreateParameterGroupResponse,
    | InvalidParameterCombinationException
    | InvalidParameterGroupStateFault
    | InvalidParameterValueException
    | ParameterGroupAlreadyExistsFault
    | ParameterGroupQuotaExceededFault
    | ServiceLinkedRoleNotFoundFault
    | TagQuotaPerResourceExceeded
    | CommonAwsError
  >;
  createSnapshot(
    input: CreateSnapshotRequest,
  ): Effect.Effect<
    CreateSnapshotResponse,
    | ClusterNotFoundFault
    | InvalidClusterStateFault
    | InvalidParameterCombinationException
    | InvalidParameterValueException
    | ServiceLinkedRoleNotFoundFault
    | SnapshotAlreadyExistsFault
    | SnapshotQuotaExceededFault
    | TagQuotaPerResourceExceeded
    | CommonAwsError
  >;
  createSubnetGroup(
    input: CreateSubnetGroupRequest,
  ): Effect.Effect<
    CreateSubnetGroupResponse,
    | InvalidSubnet
    | ServiceLinkedRoleNotFoundFault
    | SubnetGroupAlreadyExistsFault
    | SubnetGroupQuotaExceededFault
    | SubnetNotAllowedFault
    | SubnetQuotaExceededFault
    | TagQuotaPerResourceExceeded
    | CommonAwsError
  >;
  createUser(
    input: CreateUserRequest,
  ): Effect.Effect<
    CreateUserResponse,
    | DuplicateUserNameFault
    | InvalidParameterCombinationException
    | InvalidParameterValueException
    | TagQuotaPerResourceExceeded
    | UserAlreadyExistsFault
    | UserQuotaExceededFault
    | CommonAwsError
  >;
  deleteACL(
    input: DeleteACLRequest,
  ): Effect.Effect<
    DeleteACLResponse,
    | ACLNotFoundFault
    | InvalidACLStateFault
    | InvalidParameterValueException
    | CommonAwsError
  >;
  deleteCluster(
    input: DeleteClusterRequest,
  ): Effect.Effect<
    DeleteClusterResponse,
    | ClusterNotFoundFault
    | InvalidClusterStateFault
    | InvalidParameterCombinationException
    | InvalidParameterValueException
    | ServiceLinkedRoleNotFoundFault
    | SnapshotAlreadyExistsFault
    | CommonAwsError
  >;
  deleteMultiRegionCluster(
    input: DeleteMultiRegionClusterRequest,
  ): Effect.Effect<
    DeleteMultiRegionClusterResponse,
    | InvalidMultiRegionClusterStateFault
    | InvalidParameterValueException
    | MultiRegionClusterNotFoundFault
    | CommonAwsError
  >;
  deleteParameterGroup(
    input: DeleteParameterGroupRequest,
  ): Effect.Effect<
    DeleteParameterGroupResponse,
    | InvalidParameterCombinationException
    | InvalidParameterGroupStateFault
    | InvalidParameterValueException
    | ParameterGroupNotFoundFault
    | ServiceLinkedRoleNotFoundFault
    | CommonAwsError
  >;
  deleteSnapshot(
    input: DeleteSnapshotRequest,
  ): Effect.Effect<
    DeleteSnapshotResponse,
    | InvalidParameterCombinationException
    | InvalidParameterValueException
    | InvalidSnapshotStateFault
    | ServiceLinkedRoleNotFoundFault
    | SnapshotNotFoundFault
    | CommonAwsError
  >;
  deleteSubnetGroup(
    input: DeleteSubnetGroupRequest,
  ): Effect.Effect<
    DeleteSubnetGroupResponse,
    | ServiceLinkedRoleNotFoundFault
    | SubnetGroupInUseFault
    | SubnetGroupNotFoundFault
    | CommonAwsError
  >;
  deleteUser(
    input: DeleteUserRequest,
  ): Effect.Effect<
    DeleteUserResponse,
    | InvalidParameterValueException
    | InvalidUserStateFault
    | UserNotFoundFault
    | CommonAwsError
  >;
  describeACLs(
    input: DescribeACLsRequest,
  ): Effect.Effect<
    DescribeACLsResponse,
    ACLNotFoundFault | InvalidParameterCombinationException | CommonAwsError
  >;
  describeClusters(
    input: DescribeClustersRequest,
  ): Effect.Effect<
    DescribeClustersResponse,
    | ClusterNotFoundFault
    | InvalidParameterCombinationException
    | InvalidParameterValueException
    | ServiceLinkedRoleNotFoundFault
    | CommonAwsError
  >;
  describeEngineVersions(
    input: DescribeEngineVersionsRequest,
  ): Effect.Effect<
    DescribeEngineVersionsResponse,
    | InvalidParameterCombinationException
    | InvalidParameterValueException
    | ServiceLinkedRoleNotFoundFault
    | CommonAwsError
  >;
  describeEvents(
    input: DescribeEventsRequest,
  ): Effect.Effect<
    DescribeEventsResponse,
    | InvalidParameterCombinationException
    | InvalidParameterValueException
    | ServiceLinkedRoleNotFoundFault
    | CommonAwsError
  >;
  describeMultiRegionClusters(
    input: DescribeMultiRegionClustersRequest,
  ): Effect.Effect<
    DescribeMultiRegionClustersResponse,
    | ClusterNotFoundFault
    | InvalidParameterCombinationException
    | InvalidParameterValueException
    | MultiRegionClusterNotFoundFault
    | CommonAwsError
  >;
  describeParameterGroups(
    input: DescribeParameterGroupsRequest,
  ): Effect.Effect<
    DescribeParameterGroupsResponse,
    | InvalidParameterCombinationException
    | InvalidParameterValueException
    | ParameterGroupNotFoundFault
    | ServiceLinkedRoleNotFoundFault
    | CommonAwsError
  >;
  describeParameters(
    input: DescribeParametersRequest,
  ): Effect.Effect<
    DescribeParametersResponse,
    | InvalidParameterCombinationException
    | InvalidParameterValueException
    | ParameterGroupNotFoundFault
    | ServiceLinkedRoleNotFoundFault
    | CommonAwsError
  >;
  describeReservedNodes(
    input: DescribeReservedNodesRequest,
  ): Effect.Effect<
    DescribeReservedNodesResponse,
    | InvalidParameterCombinationException
    | InvalidParameterValueException
    | ReservedNodeNotFoundFault
    | ServiceLinkedRoleNotFoundFault
    | CommonAwsError
  >;
  describeReservedNodesOfferings(
    input: DescribeReservedNodesOfferingsRequest,
  ): Effect.Effect<
    DescribeReservedNodesOfferingsResponse,
    | InvalidParameterCombinationException
    | InvalidParameterValueException
    | ReservedNodesOfferingNotFoundFault
    | ServiceLinkedRoleNotFoundFault
    | CommonAwsError
  >;
  describeServiceUpdates(
    input: DescribeServiceUpdatesRequest,
  ): Effect.Effect<
    DescribeServiceUpdatesResponse,
    | InvalidParameterCombinationException
    | InvalidParameterValueException
    | CommonAwsError
  >;
  describeSnapshots(
    input: DescribeSnapshotsRequest,
  ): Effect.Effect<
    DescribeSnapshotsResponse,
    | InvalidParameterCombinationException
    | InvalidParameterValueException
    | ServiceLinkedRoleNotFoundFault
    | SnapshotNotFoundFault
    | CommonAwsError
  >;
  describeSubnetGroups(
    input: DescribeSubnetGroupsRequest,
  ): Effect.Effect<
    DescribeSubnetGroupsResponse,
    ServiceLinkedRoleNotFoundFault | SubnetGroupNotFoundFault | CommonAwsError
  >;
  describeUsers(
    input: DescribeUsersRequest,
  ): Effect.Effect<
    DescribeUsersResponse,
    InvalidParameterCombinationException | UserNotFoundFault | CommonAwsError
  >;
  failoverShard(
    input: FailoverShardRequest,
  ): Effect.Effect<
    FailoverShardResponse,
    | APICallRateForCustomerExceededFault
    | ClusterNotFoundFault
    | InvalidClusterStateFault
    | InvalidKMSKeyFault
    | InvalidParameterCombinationException
    | InvalidParameterValueException
    | ShardNotFoundFault
    | TestFailoverNotAvailableFault
    | CommonAwsError
  >;
  listAllowedMultiRegionClusterUpdates(
    input: ListAllowedMultiRegionClusterUpdatesRequest,
  ): Effect.Effect<
    ListAllowedMultiRegionClusterUpdatesResponse,
    | InvalidParameterCombinationException
    | InvalidParameterValueException
    | MultiRegionClusterNotFoundFault
    | CommonAwsError
  >;
  listAllowedNodeTypeUpdates(
    input: ListAllowedNodeTypeUpdatesRequest,
  ): Effect.Effect<
    ListAllowedNodeTypeUpdatesResponse,
    | ClusterNotFoundFault
    | InvalidParameterCombinationException
    | InvalidParameterValueException
    | ServiceLinkedRoleNotFoundFault
    | CommonAwsError
  >;
  listTags(
    input: ListTagsRequest,
  ): Effect.Effect<
    ListTagsResponse,
    | ACLNotFoundFault
    | ClusterNotFoundFault
    | InvalidARNFault
    | InvalidClusterStateFault
    | MultiRegionClusterNotFoundFault
    | MultiRegionParameterGroupNotFoundFault
    | ParameterGroupNotFoundFault
    | ServiceLinkedRoleNotFoundFault
    | SnapshotNotFoundFault
    | SubnetGroupNotFoundFault
    | UserNotFoundFault
    | CommonAwsError
  >;
  purchaseReservedNodesOffering(
    input: PurchaseReservedNodesOfferingRequest,
  ): Effect.Effect<
    PurchaseReservedNodesOfferingResponse,
    | InvalidParameterCombinationException
    | InvalidParameterValueException
    | ReservedNodeAlreadyExistsFault
    | ReservedNodeQuotaExceededFault
    | ReservedNodesOfferingNotFoundFault
    | ServiceLinkedRoleNotFoundFault
    | TagQuotaPerResourceExceeded
    | CommonAwsError
  >;
  resetParameterGroup(
    input: ResetParameterGroupRequest,
  ): Effect.Effect<
    ResetParameterGroupResponse,
    | InvalidParameterCombinationException
    | InvalidParameterGroupStateFault
    | InvalidParameterValueException
    | ParameterGroupNotFoundFault
    | ServiceLinkedRoleNotFoundFault
    | CommonAwsError
  >;
  tagResource(
    input: TagResourceRequest,
  ): Effect.Effect<
    TagResourceResponse,
    | ACLNotFoundFault
    | ClusterNotFoundFault
    | InvalidARNFault
    | InvalidClusterStateFault
    | InvalidParameterValueException
    | MultiRegionClusterNotFoundFault
    | MultiRegionParameterGroupNotFoundFault
    | ParameterGroupNotFoundFault
    | ServiceLinkedRoleNotFoundFault
    | SnapshotNotFoundFault
    | SubnetGroupNotFoundFault
    | TagQuotaPerResourceExceeded
    | UserNotFoundFault
    | CommonAwsError
  >;
  untagResource(
    input: UntagResourceRequest,
  ): Effect.Effect<
    UntagResourceResponse,
    | ACLNotFoundFault
    | ClusterNotFoundFault
    | InvalidARNFault
    | InvalidClusterStateFault
    | InvalidParameterValueException
    | MultiRegionClusterNotFoundFault
    | MultiRegionParameterGroupNotFoundFault
    | ParameterGroupNotFoundFault
    | ServiceLinkedRoleNotFoundFault
    | SnapshotNotFoundFault
    | SubnetGroupNotFoundFault
    | TagNotFoundFault
    | UserNotFoundFault
    | CommonAwsError
  >;
  updateACL(
    input: UpdateACLRequest,
  ): Effect.Effect<
    UpdateACLResponse,
    | ACLNotFoundFault
    | DefaultUserRequired
    | DuplicateUserNameFault
    | InvalidACLStateFault
    | InvalidParameterCombinationException
    | InvalidParameterValueException
    | UserNotFoundFault
    | CommonAwsError
  >;
  updateCluster(
    input: UpdateClusterRequest,
  ): Effect.Effect<
    UpdateClusterResponse,
    | ACLNotFoundFault
    | ClusterNotFoundFault
    | ClusterQuotaForCustomerExceededFault
    | InvalidACLStateFault
    | InvalidClusterStateFault
    | InvalidKMSKeyFault
    | InvalidNodeStateFault
    | InvalidParameterCombinationException
    | InvalidParameterValueException
    | InvalidVPCNetworkStateFault
    | NodeQuotaForClusterExceededFault
    | NodeQuotaForCustomerExceededFault
    | NoOperationFault
    | ParameterGroupNotFoundFault
    | ServiceLinkedRoleNotFoundFault
    | ShardsPerClusterQuotaExceededFault
    | CommonAwsError
  >;
  updateMultiRegionCluster(
    input: UpdateMultiRegionClusterRequest,
  ): Effect.Effect<
    UpdateMultiRegionClusterResponse,
    | InvalidMultiRegionClusterStateFault
    | InvalidParameterCombinationException
    | InvalidParameterValueException
    | MultiRegionClusterNotFoundFault
    | MultiRegionParameterGroupNotFoundFault
    | CommonAwsError
  >;
  updateParameterGroup(
    input: UpdateParameterGroupRequest,
  ): Effect.Effect<
    UpdateParameterGroupResponse,
    | InvalidParameterCombinationException
    | InvalidParameterGroupStateFault
    | InvalidParameterValueException
    | ParameterGroupNotFoundFault
    | ServiceLinkedRoleNotFoundFault
    | CommonAwsError
  >;
  updateSubnetGroup(
    input: UpdateSubnetGroupRequest,
  ): Effect.Effect<
    UpdateSubnetGroupResponse,
    | InvalidSubnet
    | ServiceLinkedRoleNotFoundFault
    | SubnetGroupNotFoundFault
    | SubnetInUse
    | SubnetNotAllowedFault
    | SubnetQuotaExceededFault
    | CommonAwsError
  >;
  updateUser(
    input: UpdateUserRequest,
  ): Effect.Effect<
    UpdateUserResponse,
    | InvalidParameterCombinationException
    | InvalidParameterValueException
    | InvalidUserStateFault
    | UserNotFoundFault
    | CommonAwsError
  >;
}

export type Memorydb = AmazonMemoryDB;

export type AccessString = string;

export interface ACL {
  Name?: string;
  Status?: string;
  UserNames?: Array<string>;
  MinimumEngineVersion?: string;
  PendingChanges?: ACLPendingChanges;
  Clusters?: Array<string>;
  ARN?: string;
}
export declare class ACLAlreadyExistsFault extends EffectData.TaggedError(
  "ACLAlreadyExistsFault",
)<{
  readonly message?: string;
}> {}
export type ACLClusterNameList = Array<string>;
export type ACLList = Array<ACL>;
export type ACLName = string;

export type ACLNameList = Array<string>;
export declare class ACLNotFoundFault extends EffectData.TaggedError(
  "ACLNotFoundFault",
)<{
  readonly message?: string;
}> {}
export interface ACLPendingChanges {
  UserNamesToRemove?: Array<string>;
  UserNamesToAdd?: Array<string>;
}
export declare class ACLQuotaExceededFault extends EffectData.TaggedError(
  "ACLQuotaExceededFault",
)<{
  readonly message?: string;
}> {}
export interface ACLsUpdateStatus {
  ACLToApply?: string;
}
export declare class APICallRateForCustomerExceededFault extends EffectData.TaggedError(
  "APICallRateForCustomerExceededFault",
)<{
  readonly message?: string;
}> {}
export interface Authentication {
  Type?: AuthenticationType;
  PasswordCount?: number;
}
export interface AuthenticationMode {
  Type?: InputAuthenticationType;
  Passwords?: Array<string>;
}
export type AuthenticationType = "PASSWORD" | "NO_PASSWORD" | "IAM";
export interface AvailabilityZone {
  Name?: string;
}
export type AwsQueryErrorMessage = string;

export type AZStatus = "SingleAZ" | "MultiAZ";
export interface BatchUpdateClusterRequest {
  ClusterNames: Array<string>;
  ServiceUpdate?: ServiceUpdateRequest;
}
export interface BatchUpdateClusterResponse {
  ProcessedClusters?: Array<Cluster>;
  UnprocessedClusters?: Array<UnprocessedCluster>;
}
export type MemorydbBoolean = boolean;

export type BooleanOptional = boolean;

export interface Cluster {
  Name?: string;
  Description?: string;
  Status?: string;
  PendingUpdates?: ClusterPendingUpdates;
  MultiRegionClusterName?: string;
  NumberOfShards?: number;
  Shards?: Array<Shard>;
  AvailabilityMode?: AZStatus;
  ClusterEndpoint?: Endpoint;
  NodeType?: string;
  Engine?: string;
  EngineVersion?: string;
  EnginePatchVersion?: string;
  ParameterGroupName?: string;
  ParameterGroupStatus?: string;
  SecurityGroups?: Array<SecurityGroupMembership>;
  SubnetGroupName?: string;
  TLSEnabled?: boolean;
  KmsKeyId?: string;
  ARN?: string;
  SnsTopicArn?: string;
  SnsTopicStatus?: string;
  SnapshotRetentionLimit?: number;
  MaintenanceWindow?: string;
  SnapshotWindow?: string;
  ACLName?: string;
  AutoMinorVersionUpgrade?: boolean;
  DataTiering?: DataTieringStatus;
  NetworkType?: NetworkType;
  IpDiscovery?: IpDiscovery;
}
export declare class ClusterAlreadyExistsFault extends EffectData.TaggedError(
  "ClusterAlreadyExistsFault",
)<{
  readonly message?: string;
}> {}
export interface ClusterConfiguration {
  Name?: string;
  Description?: string;
  NodeType?: string;
  Engine?: string;
  EngineVersion?: string;
  MaintenanceWindow?: string;
  TopicArn?: string;
  Port?: number;
  ParameterGroupName?: string;
  SubnetGroupName?: string;
  VpcId?: string;
  SnapshotRetentionLimit?: number;
  SnapshotWindow?: string;
  NumShards?: number;
  Shards?: Array<ShardDetail>;
  MultiRegionParameterGroupName?: string;
  MultiRegionClusterName?: string;
}
export type ClusterList = Array<Cluster>;
export type ClusterNameList = Array<string>;
export declare class ClusterNotFoundFault extends EffectData.TaggedError(
  "ClusterNotFoundFault",
)<{
  readonly message?: string;
}> {}
export interface ClusterPendingUpdates {
  Resharding?: ReshardingStatus;
  ACLs?: ACLsUpdateStatus;
  ServiceUpdates?: Array<PendingModifiedServiceUpdate>;
}
export declare class ClusterQuotaForCustomerExceededFault extends EffectData.TaggedError(
  "ClusterQuotaForCustomerExceededFault",
)<{
  readonly message?: string;
}> {}
export interface CopySnapshotRequest {
  SourceSnapshotName: string;
  TargetSnapshotName: string;
  TargetBucket?: string;
  KmsKeyId?: string;
  Tags?: Array<Tag>;
}
export interface CopySnapshotResponse {
  Snapshot?: Snapshot;
}
export interface CreateACLRequest {
  ACLName: string;
  UserNames?: Array<string>;
  Tags?: Array<Tag>;
}
export interface CreateACLResponse {
  ACL?: ACL;
}
export interface CreateClusterRequest {
  ClusterName: string;
  NodeType: string;
  MultiRegionClusterName?: string;
  ParameterGroupName?: string;
  Description?: string;
  NumShards?: number;
  NumReplicasPerShard?: number;
  SubnetGroupName?: string;
  SecurityGroupIds?: Array<string>;
  MaintenanceWindow?: string;
  Port?: number;
  SnsTopicArn?: string;
  TLSEnabled?: boolean;
  KmsKeyId?: string;
  SnapshotArns?: Array<string>;
  SnapshotName?: string;
  SnapshotRetentionLimit?: number;
  Tags?: Array<Tag>;
  SnapshotWindow?: string;
  ACLName: string;
  Engine?: string;
  EngineVersion?: string;
  AutoMinorVersionUpgrade?: boolean;
  DataTiering?: boolean;
  NetworkType?: NetworkType;
  IpDiscovery?: IpDiscovery;
}
export interface CreateClusterResponse {
  Cluster?: Cluster;
}
export interface CreateMultiRegionClusterRequest {
  MultiRegionClusterNameSuffix: string;
  Description?: string;
  Engine?: string;
  EngineVersion?: string;
  NodeType: string;
  MultiRegionParameterGroupName?: string;
  NumShards?: number;
  TLSEnabled?: boolean;
  Tags?: Array<Tag>;
}
export interface CreateMultiRegionClusterResponse {
  MultiRegionCluster?: MultiRegionCluster;
}
export interface CreateParameterGroupRequest {
  ParameterGroupName: string;
  Family: string;
  Description?: string;
  Tags?: Array<Tag>;
}
export interface CreateParameterGroupResponse {
  ParameterGroup?: ParameterGroup;
}
export interface CreateSnapshotRequest {
  ClusterName: string;
  SnapshotName: string;
  KmsKeyId?: string;
  Tags?: Array<Tag>;
}
export interface CreateSnapshotResponse {
  Snapshot?: Snapshot;
}
export interface CreateSubnetGroupRequest {
  SubnetGroupName: string;
  Description?: string;
  SubnetIds: Array<string>;
  Tags?: Array<Tag>;
}
export interface CreateSubnetGroupResponse {
  SubnetGroup?: SubnetGroup;
}
export interface CreateUserRequest {
  UserName: string;
  AuthenticationMode: AuthenticationMode;
  AccessString: string;
  Tags?: Array<Tag>;
}
export interface CreateUserResponse {
  User?: User;
}
export type DataTieringStatus = "TRUE" | "FALSE";
export declare class DefaultUserRequired extends EffectData.TaggedError(
  "DefaultUserRequired",
)<{
  readonly message?: string;
}> {}
export interface DeleteACLRequest {
  ACLName: string;
}
export interface DeleteACLResponse {
  ACL?: ACL;
}
export interface DeleteClusterRequest {
  ClusterName: string;
  MultiRegionClusterName?: string;
  FinalSnapshotName?: string;
}
export interface DeleteClusterResponse {
  Cluster?: Cluster;
}
export interface DeleteMultiRegionClusterRequest {
  MultiRegionClusterName: string;
}
export interface DeleteMultiRegionClusterResponse {
  MultiRegionCluster?: MultiRegionCluster;
}
export interface DeleteParameterGroupRequest {
  ParameterGroupName: string;
}
export interface DeleteParameterGroupResponse {
  ParameterGroup?: ParameterGroup;
}
export interface DeleteSnapshotRequest {
  SnapshotName: string;
}
export interface DeleteSnapshotResponse {
  Snapshot?: Snapshot;
}
export interface DeleteSubnetGroupRequest {
  SubnetGroupName: string;
}
export interface DeleteSubnetGroupResponse {
  SubnetGroup?: SubnetGroup;
}
export interface DeleteUserRequest {
  UserName: string;
}
export interface DeleteUserResponse {
  User?: User;
}
export interface DescribeACLsRequest {
  ACLName?: string;
  MaxResults?: number;
  NextToken?: string;
}
export interface DescribeACLsResponse {
  ACLs?: Array<ACL>;
  NextToken?: string;
}
export interface DescribeClustersRequest {
  ClusterName?: string;
  MaxResults?: number;
  NextToken?: string;
  ShowShardDetails?: boolean;
}
export interface DescribeClustersResponse {
  NextToken?: string;
  Clusters?: Array<Cluster>;
}
export interface DescribeEngineVersionsRequest {
  Engine?: string;
  EngineVersion?: string;
  ParameterGroupFamily?: string;
  MaxResults?: number;
  NextToken?: string;
  DefaultOnly?: boolean;
}
export interface DescribeEngineVersionsResponse {
  NextToken?: string;
  EngineVersions?: Array<EngineVersionInfo>;
}
export interface DescribeEventsRequest {
  SourceName?: string;
  SourceType?: SourceType;
  StartTime?: Date | string;
  EndTime?: Date | string;
  Duration?: number;
  MaxResults?: number;
  NextToken?: string;
}
export interface DescribeEventsResponse {
  NextToken?: string;
  Events?: Array<Event>;
}
export interface DescribeMultiRegionClustersRequest {
  MultiRegionClusterName?: string;
  MaxResults?: number;
  NextToken?: string;
  ShowClusterDetails?: boolean;
}
export interface DescribeMultiRegionClustersResponse {
  NextToken?: string;
  MultiRegionClusters?: Array<MultiRegionCluster>;
}
export interface DescribeParameterGroupsRequest {
  ParameterGroupName?: string;
  MaxResults?: number;
  NextToken?: string;
}
export interface DescribeParameterGroupsResponse {
  NextToken?: string;
  ParameterGroups?: Array<ParameterGroup>;
}
export interface DescribeParametersRequest {
  ParameterGroupName: string;
  MaxResults?: number;
  NextToken?: string;
}
export interface DescribeParametersResponse {
  NextToken?: string;
  Parameters?: Array<Parameter>;
}
export interface DescribeReservedNodesOfferingsRequest {
  ReservedNodesOfferingId?: string;
  NodeType?: string;
  Duration?: string;
  OfferingType?: string;
  MaxResults?: number;
  NextToken?: string;
}
export interface DescribeReservedNodesOfferingsResponse {
  NextToken?: string;
  ReservedNodesOfferings?: Array<ReservedNodesOffering>;
}
export interface DescribeReservedNodesRequest {
  ReservationId?: string;
  ReservedNodesOfferingId?: string;
  NodeType?: string;
  Duration?: string;
  OfferingType?: string;
  MaxResults?: number;
  NextToken?: string;
}
export interface DescribeReservedNodesResponse {
  NextToken?: string;
  ReservedNodes?: Array<ReservedNode>;
}
export interface DescribeServiceUpdatesRequest {
  ServiceUpdateName?: string;
  ClusterNames?: Array<string>;
  Status?: Array<ServiceUpdateStatus>;
  MaxResults?: number;
  NextToken?: string;
}
export interface DescribeServiceUpdatesResponse {
  NextToken?: string;
  ServiceUpdates?: Array<ServiceUpdate>;
}
export interface DescribeSnapshotsRequest {
  ClusterName?: string;
  SnapshotName?: string;
  Source?: string;
  NextToken?: string;
  MaxResults?: number;
  ShowDetail?: boolean;
}
export interface DescribeSnapshotsResponse {
  NextToken?: string;
  Snapshots?: Array<Snapshot>;
}
export interface DescribeSubnetGroupsRequest {
  SubnetGroupName?: string;
  MaxResults?: number;
  NextToken?: string;
}
export interface DescribeSubnetGroupsResponse {
  NextToken?: string;
  SubnetGroups?: Array<SubnetGroup>;
}
export interface DescribeUsersRequest {
  UserName?: string;
  Filters?: Array<Filter>;
  MaxResults?: number;
  NextToken?: string;
}
export interface DescribeUsersResponse {
  Users?: Array<User>;
  NextToken?: string;
}
export type Double = number;

export declare class DuplicateUserNameFault extends EffectData.TaggedError(
  "DuplicateUserNameFault",
)<{
  readonly message?: string;
}> {}
export interface Endpoint {
  Address?: string;
  Port?: number;
}
export interface EngineVersionInfo {
  Engine?: string;
  EngineVersion?: string;
  EnginePatchVersion?: string;
  ParameterGroupFamily?: string;
}
export type EngineVersionInfoList = Array<EngineVersionInfo>;
export interface Event {
  SourceName?: string;
  SourceType?: SourceType;
  Message?: string;
  Date?: Date | string;
}
export type EventList = Array<Event>;
export type ExceptionMessage = string;

export interface FailoverShardRequest {
  ClusterName: string;
  ShardName: string;
}
export interface FailoverShardResponse {
  Cluster?: Cluster;
}
export interface Filter {
  Name: string;
  Values: Array<string>;
}
export type FilterList = Array<Filter>;
export type FilterName = string;

export type FilterValue = string;

export type FilterValueList = Array<string>;
export type InputAuthenticationType = "PASSWORD" | "IAM";
export declare class InsufficientClusterCapacityFault extends EffectData.TaggedError(
  "InsufficientClusterCapacityFault",
)<{
  readonly message?: string;
}> {}
export type Integer = number;

export type IntegerOptional = number;

export declare class InvalidACLStateFault extends EffectData.TaggedError(
  "InvalidACLStateFault",
)<{
  readonly message?: string;
}> {}
export declare class InvalidARNFault extends EffectData.TaggedError(
  "InvalidARNFault",
)<{
  readonly message?: string;
}> {}
export declare class InvalidClusterStateFault extends EffectData.TaggedError(
  "InvalidClusterStateFault",
)<{
  readonly message?: string;
}> {}
export declare class InvalidCredentialsException extends EffectData.TaggedError(
  "InvalidCredentialsException",
)<{
  readonly message?: string;
}> {}
export declare class InvalidKMSKeyFault extends EffectData.TaggedError(
  "InvalidKMSKeyFault",
)<{
  readonly message?: string;
}> {}
export declare class InvalidMultiRegionClusterStateFault extends EffectData.TaggedError(
  "InvalidMultiRegionClusterStateFault",
)<{
  readonly message?: string;
}> {}
export declare class InvalidNodeStateFault extends EffectData.TaggedError(
  "InvalidNodeStateFault",
)<{
  readonly message?: string;
}> {}
export declare class InvalidParameterCombinationException extends EffectData.TaggedError(
  "InvalidParameterCombinationException",
)<{
  readonly message?: string;
}> {}
export declare class InvalidParameterGroupStateFault extends EffectData.TaggedError(
  "InvalidParameterGroupStateFault",
)<{
  readonly message?: string;
}> {}
export declare class InvalidParameterValueException extends EffectData.TaggedError(
  "InvalidParameterValueException",
)<{
  readonly message?: string;
}> {}
export declare class InvalidSnapshotStateFault extends EffectData.TaggedError(
  "InvalidSnapshotStateFault",
)<{
  readonly message?: string;
}> {}
export declare class InvalidSubnet extends EffectData.TaggedError(
  "InvalidSubnet",
)<{
  readonly message?: string;
}> {}
export declare class InvalidUserStateFault extends EffectData.TaggedError(
  "InvalidUserStateFault",
)<{
  readonly message?: string;
}> {}
export declare class InvalidVPCNetworkStateFault extends EffectData.TaggedError(
  "InvalidVPCNetworkStateFault",
)<{
  readonly message?: string;
}> {}
export type IpDiscovery = "IPV4" | "IPV6";
export type KeyList = Array<string>;
export type KmsKeyId = string;

export interface ListAllowedMultiRegionClusterUpdatesRequest {
  MultiRegionClusterName: string;
}
export interface ListAllowedMultiRegionClusterUpdatesResponse {
  ScaleUpNodeTypes?: Array<string>;
  ScaleDownNodeTypes?: Array<string>;
}
export interface ListAllowedNodeTypeUpdatesRequest {
  ClusterName: string;
}
export interface ListAllowedNodeTypeUpdatesResponse {
  ScaleUpNodeTypes?: Array<string>;
  ScaleDownNodeTypes?: Array<string>;
}
export interface ListTagsRequest {
  ResourceArn: string;
}
export interface ListTagsResponse {
  TagList?: Array<Tag>;
}
export interface MultiRegionCluster {
  MultiRegionClusterName?: string;
  Description?: string;
  Status?: string;
  NodeType?: string;
  Engine?: string;
  EngineVersion?: string;
  NumberOfShards?: number;
  Clusters?: Array<RegionalCluster>;
  MultiRegionParameterGroupName?: string;
  TLSEnabled?: boolean;
  ARN?: string;
}
export declare class MultiRegionClusterAlreadyExistsFault extends EffectData.TaggedError(
  "MultiRegionClusterAlreadyExistsFault",
)<{
  readonly message?: string;
}> {}
export type MultiRegionClusterList = Array<MultiRegionCluster>;
export declare class MultiRegionClusterNotFoundFault extends EffectData.TaggedError(
  "MultiRegionClusterNotFoundFault",
)<{
  readonly message?: string;
}> {}
export declare class MultiRegionParameterGroupNotFoundFault extends EffectData.TaggedError(
  "MultiRegionParameterGroupNotFoundFault",
)<{
  readonly message?: string;
}> {}
export type NetworkType = "IPV4" | "IPV6" | "DUAL_STACK";
export type NetworkTypeList = Array<NetworkType>;
export interface Node {
  Name?: string;
  Status?: string;
  AvailabilityZone?: string;
  CreateTime?: Date | string;
  Endpoint?: Endpoint;
}
export type NodeList = Array<Node>;
export declare class NodeQuotaForClusterExceededFault extends EffectData.TaggedError(
  "NodeQuotaForClusterExceededFault",
)<{
  readonly message?: string;
}> {}
export declare class NodeQuotaForCustomerExceededFault extends EffectData.TaggedError(
  "NodeQuotaForCustomerExceededFault",
)<{
  readonly message?: string;
}> {}
export type NodeTypeList = Array<string>;
export declare class NoOperationFault extends EffectData.TaggedError(
  "NoOperationFault",
)<{
  readonly message?: string;
}> {}
export interface Parameter {
  Name?: string;
  Value?: string;
  Description?: string;
  DataType?: string;
  AllowedValues?: string;
  MinimumEngineVersion?: string;
}
export interface ParameterGroup {
  Name?: string;
  Family?: string;
  Description?: string;
  ARN?: string;
}
export declare class ParameterGroupAlreadyExistsFault extends EffectData.TaggedError(
  "ParameterGroupAlreadyExistsFault",
)<{
  readonly message?: string;
}> {}
export type ParameterGroupList = Array<ParameterGroup>;
export declare class ParameterGroupNotFoundFault extends EffectData.TaggedError(
  "ParameterGroupNotFoundFault",
)<{
  readonly message?: string;
}> {}
export declare class ParameterGroupQuotaExceededFault extends EffectData.TaggedError(
  "ParameterGroupQuotaExceededFault",
)<{
  readonly message?: string;
}> {}
export type ParameterNameList = Array<string>;
export interface ParameterNameValue {
  ParameterName?: string;
  ParameterValue?: string;
}
export type ParameterNameValueList = Array<ParameterNameValue>;
export type ParametersList = Array<Parameter>;
export type PasswordListInput = Array<string>;
export interface PendingModifiedServiceUpdate {
  ServiceUpdateName?: string;
  Status?: ServiceUpdateStatus;
}
export type PendingModifiedServiceUpdateList =
  Array<PendingModifiedServiceUpdate>;
export interface PurchaseReservedNodesOfferingRequest {
  ReservedNodesOfferingId: string;
  ReservationId?: string;
  NodeCount?: number;
  Tags?: Array<Tag>;
}
export interface PurchaseReservedNodesOfferingResponse {
  ReservedNode?: ReservedNode;
}
export interface RecurringCharge {
  RecurringChargeAmount?: number;
  RecurringChargeFrequency?: string;
}
export type RecurringChargeList = Array<RecurringCharge>;
export interface RegionalCluster {
  ClusterName?: string;
  Region?: string;
  Status?: string;
  ARN?: string;
}
export type RegionalClusterList = Array<RegionalCluster>;
export interface ReplicaConfigurationRequest {
  ReplicaCount?: number;
}
export interface ReservedNode {
  ReservationId?: string;
  ReservedNodesOfferingId?: string;
  NodeType?: string;
  StartTime?: Date | string;
  Duration?: number;
  FixedPrice?: number;
  NodeCount?: number;
  OfferingType?: string;
  State?: string;
  RecurringCharges?: Array<RecurringCharge>;
  ARN?: string;
}
export declare class ReservedNodeAlreadyExistsFault extends EffectData.TaggedError(
  "ReservedNodeAlreadyExistsFault",
)<{
  readonly message?: string;
}> {}
export type ReservedNodeList = Array<ReservedNode>;
export declare class ReservedNodeNotFoundFault extends EffectData.TaggedError(
  "ReservedNodeNotFoundFault",
)<{
  readonly message?: string;
}> {}
export declare class ReservedNodeQuotaExceededFault extends EffectData.TaggedError(
  "ReservedNodeQuotaExceededFault",
)<{
  readonly message?: string;
}> {}
export interface ReservedNodesOffering {
  ReservedNodesOfferingId?: string;
  NodeType?: string;
  Duration?: number;
  FixedPrice?: number;
  OfferingType?: string;
  RecurringCharges?: Array<RecurringCharge>;
}
export type ReservedNodesOfferingList = Array<ReservedNodesOffering>;
export declare class ReservedNodesOfferingNotFoundFault extends EffectData.TaggedError(
  "ReservedNodesOfferingNotFoundFault",
)<{
  readonly message?: string;
}> {}
export interface ResetParameterGroupRequest {
  ParameterGroupName: string;
  AllParameters?: boolean;
  ParameterNames?: Array<string>;
}
export interface ResetParameterGroupResponse {
  ParameterGroup?: ParameterGroup;
}
export interface ReshardingStatus {
  SlotMigration?: SlotMigration;
}
export type SecurityGroupIdsList = Array<string>;
export interface SecurityGroupMembership {
  SecurityGroupId?: string;
  Status?: string;
}
export type SecurityGroupMembershipList = Array<SecurityGroupMembership>;
export declare class ServiceLinkedRoleNotFoundFault extends EffectData.TaggedError(
  "ServiceLinkedRoleNotFoundFault",
)<{
  readonly message?: string;
}> {}
export interface ServiceUpdate {
  ClusterName?: string;
  ServiceUpdateName?: string;
  ReleaseDate?: Date | string;
  Description?: string;
  Status?: ServiceUpdateStatus;
  Type?: ServiceUpdateType;
  Engine?: string;
  NodesUpdated?: string;
  AutoUpdateStartDate?: Date | string;
}
export type ServiceUpdateList = Array<ServiceUpdate>;
export declare class ServiceUpdateNotFoundFault extends EffectData.TaggedError(
  "ServiceUpdateNotFoundFault",
)<{
  readonly message?: string;
}> {}
export interface ServiceUpdateRequest {
  ServiceUpdateNameToApply?: string;
}
export type ServiceUpdateStatus =
  | "NOT_APPLIED"
  | "IN_PROGRESS"
  | "COMPLETE"
  | "SCHEDULED";
export type ServiceUpdateStatusList = Array<ServiceUpdateStatus>;
export type ServiceUpdateType = "SECURITY_UPDATE";
export interface Shard {
  Name?: string;
  Status?: string;
  Slots?: string;
  Nodes?: Array<Node>;
  NumberOfNodes?: number;
}
export interface ShardConfiguration {
  Slots?: string;
  ReplicaCount?: number;
}
export interface ShardConfigurationRequest {
  ShardCount?: number;
}
export interface ShardDetail {
  Name?: string;
  Configuration?: ShardConfiguration;
  Size?: string;
  SnapshotCreationTime?: Date | string;
}
export type ShardDetails = Array<ShardDetail>;
export type ShardList = Array<Shard>;
export declare class ShardNotFoundFault extends EffectData.TaggedError(
  "ShardNotFoundFault",
)<{
  readonly message?: string;
}> {}
export declare class ShardsPerClusterQuotaExceededFault extends EffectData.TaggedError(
  "ShardsPerClusterQuotaExceededFault",
)<{
  readonly message?: string;
}> {}
export interface SlotMigration {
  ProgressPercentage?: number;
}
export interface Snapshot {
  Name?: string;
  Status?: string;
  Source?: string;
  KmsKeyId?: string;
  ARN?: string;
  ClusterConfiguration?: ClusterConfiguration;
  DataTiering?: DataTieringStatus;
}
export declare class SnapshotAlreadyExistsFault extends EffectData.TaggedError(
  "SnapshotAlreadyExistsFault",
)<{
  readonly message?: string;
}> {}
export type SnapshotArnsList = Array<string>;
export type SnapshotList = Array<Snapshot>;
export declare class SnapshotNotFoundFault extends EffectData.TaggedError(
  "SnapshotNotFoundFault",
)<{
  readonly message?: string;
}> {}
export declare class SnapshotQuotaExceededFault extends EffectData.TaggedError(
  "SnapshotQuotaExceededFault",
)<{
  readonly message?: string;
}> {}
export type SourceType =
  | "node"
  | "parameter_group"
  | "subnet_group"
  | "cluster"
  | "user"
  | "acl";
export type MemorydbString = string;

export interface Subnet {
  Identifier?: string;
  AvailabilityZone?: AvailabilityZone;
  SupportedNetworkTypes?: Array<NetworkType>;
}
export interface SubnetGroup {
  Name?: string;
  Description?: string;
  VpcId?: string;
  Subnets?: Array<Subnet>;
  ARN?: string;
  SupportedNetworkTypes?: Array<NetworkType>;
}
export declare class SubnetGroupAlreadyExistsFault extends EffectData.TaggedError(
  "SubnetGroupAlreadyExistsFault",
)<{
  readonly message?: string;
}> {}
export declare class SubnetGroupInUseFault extends EffectData.TaggedError(
  "SubnetGroupInUseFault",
)<{
  readonly message?: string;
}> {}
export type SubnetGroupList = Array<SubnetGroup>;
export declare class SubnetGroupNotFoundFault extends EffectData.TaggedError(
  "SubnetGroupNotFoundFault",
)<{
  readonly message?: string;
}> {}
export declare class SubnetGroupQuotaExceededFault extends EffectData.TaggedError(
  "SubnetGroupQuotaExceededFault",
)<{
  readonly message?: string;
}> {}
export type SubnetIdentifierList = Array<string>;
export declare class SubnetInUse extends EffectData.TaggedError("SubnetInUse")<{
  readonly message?: string;
}> {}
export type SubnetList = Array<Subnet>;
export declare class SubnetNotAllowedFault extends EffectData.TaggedError(
  "SubnetNotAllowedFault",
)<{
  readonly message?: string;
}> {}
export declare class SubnetQuotaExceededFault extends EffectData.TaggedError(
  "SubnetQuotaExceededFault",
)<{
  readonly message?: string;
}> {}
export interface Tag {
  Key?: string;
  Value?: string;
}
export type TagList = Array<Tag>;
export declare class TagNotFoundFault extends EffectData.TaggedError(
  "TagNotFoundFault",
)<{
  readonly message?: string;
}> {}
export declare class TagQuotaPerResourceExceeded extends EffectData.TaggedError(
  "TagQuotaPerResourceExceeded",
)<{
  readonly message?: string;
}> {}
export interface TagResourceRequest {
  ResourceArn: string;
  Tags: Array<Tag>;
}
export interface TagResourceResponse {
  TagList?: Array<Tag>;
}
export type TargetBucket = string;

export declare class TestFailoverNotAvailableFault extends EffectData.TaggedError(
  "TestFailoverNotAvailableFault",
)<{
  readonly message?: string;
}> {}
export type TStamp = Date | string;

export interface UnprocessedCluster {
  ClusterName?: string;
  ErrorType?: string;
  ErrorMessage?: string;
}
export type UnprocessedClusterList = Array<UnprocessedCluster>;
export interface UntagResourceRequest {
  ResourceArn: string;
  TagKeys: Array<string>;
}
export interface UntagResourceResponse {
  TagList?: Array<Tag>;
}
export interface UpdateACLRequest {
  ACLName: string;
  UserNamesToAdd?: Array<string>;
  UserNamesToRemove?: Array<string>;
}
export interface UpdateACLResponse {
  ACL?: ACL;
}
export interface UpdateClusterRequest {
  ClusterName: string;
  Description?: string;
  SecurityGroupIds?: Array<string>;
  MaintenanceWindow?: string;
  SnsTopicArn?: string;
  SnsTopicStatus?: string;
  ParameterGroupName?: string;
  SnapshotWindow?: string;
  SnapshotRetentionLimit?: number;
  NodeType?: string;
  Engine?: string;
  EngineVersion?: string;
  ReplicaConfiguration?: ReplicaConfigurationRequest;
  ShardConfiguration?: ShardConfigurationRequest;
  ACLName?: string;
  IpDiscovery?: IpDiscovery;
}
export interface UpdateClusterResponse {
  Cluster?: Cluster;
}
export interface UpdateMultiRegionClusterRequest {
  MultiRegionClusterName: string;
  NodeType?: string;
  Description?: string;
  EngineVersion?: string;
  ShardConfiguration?: ShardConfigurationRequest;
  MultiRegionParameterGroupName?: string;
  UpdateStrategy?: UpdateStrategy;
}
export interface UpdateMultiRegionClusterResponse {
  MultiRegionCluster?: MultiRegionCluster;
}
export interface UpdateParameterGroupRequest {
  ParameterGroupName: string;
  ParameterNameValues: Array<ParameterNameValue>;
}
export interface UpdateParameterGroupResponse {
  ParameterGroup?: ParameterGroup;
}
export type UpdateStrategy = "COORDINATED" | "UNCOORDINATED";
export interface UpdateSubnetGroupRequest {
  SubnetGroupName: string;
  Description?: string;
  SubnetIds?: Array<string>;
}
export interface UpdateSubnetGroupResponse {
  SubnetGroup?: SubnetGroup;
}
export interface UpdateUserRequest {
  UserName: string;
  AuthenticationMode?: AuthenticationMode;
  AccessString?: string;
}
export interface UpdateUserResponse {
  User?: User;
}
export interface User {
  Name?: string;
  Status?: string;
  AccessString?: string;
  ACLNames?: Array<string>;
  MinimumEngineVersion?: string;
  Authentication?: Authentication;
  ARN?: string;
}
export declare class UserAlreadyExistsFault extends EffectData.TaggedError(
  "UserAlreadyExistsFault",
)<{
  readonly message?: string;
}> {}
export type UserList = Array<User>;
export type UserName = string;

export type UserNameList = Array<string>;
export type UserNameListInput = Array<string>;
export declare class UserNotFoundFault extends EffectData.TaggedError(
  "UserNotFoundFault",
)<{
  readonly message?: string;
}> {}
export declare class UserQuotaExceededFault extends EffectData.TaggedError(
  "UserQuotaExceededFault",
)<{
  readonly message?: string;
}> {}
export declare namespace BatchUpdateCluster {
  export type Input = BatchUpdateClusterRequest;
  export type Output = BatchUpdateClusterResponse;
  export type Error =
    | InvalidParameterValueException
    | ServiceUpdateNotFoundFault
    | CommonAwsError;
}

export declare namespace CopySnapshot {
  export type Input = CopySnapshotRequest;
  export type Output = CopySnapshotResponse;
  export type Error =
    | InvalidParameterCombinationException
    | InvalidParameterValueException
    | InvalidSnapshotStateFault
    | ServiceLinkedRoleNotFoundFault
    | SnapshotAlreadyExistsFault
    | SnapshotNotFoundFault
    | SnapshotQuotaExceededFault
    | TagQuotaPerResourceExceeded
    | CommonAwsError;
}

export declare namespace CreateACL {
  export type Input = CreateACLRequest;
  export type Output = CreateACLResponse;
  export type Error =
    | ACLAlreadyExistsFault
    | ACLQuotaExceededFault
    | DefaultUserRequired
    | DuplicateUserNameFault
    | InvalidParameterValueException
    | TagQuotaPerResourceExceeded
    | UserNotFoundFault
    | CommonAwsError;
}

export declare namespace CreateCluster {
  export type Input = CreateClusterRequest;
  export type Output = CreateClusterResponse;
  export type Error =
    | ACLNotFoundFault
    | ClusterAlreadyExistsFault
    | ClusterQuotaForCustomerExceededFault
    | InsufficientClusterCapacityFault
    | InvalidACLStateFault
    | InvalidCredentialsException
    | InvalidMultiRegionClusterStateFault
    | InvalidParameterCombinationException
    | InvalidParameterValueException
    | InvalidVPCNetworkStateFault
    | MultiRegionClusterNotFoundFault
    | NodeQuotaForClusterExceededFault
    | NodeQuotaForCustomerExceededFault
    | ParameterGroupNotFoundFault
    | ServiceLinkedRoleNotFoundFault
    | ShardsPerClusterQuotaExceededFault
    | SubnetGroupNotFoundFault
    | TagQuotaPerResourceExceeded
    | CommonAwsError;
}

export declare namespace CreateMultiRegionCluster {
  export type Input = CreateMultiRegionClusterRequest;
  export type Output = CreateMultiRegionClusterResponse;
  export type Error =
    | ClusterQuotaForCustomerExceededFault
    | InvalidParameterCombinationException
    | InvalidParameterValueException
    | MultiRegionClusterAlreadyExistsFault
    | MultiRegionParameterGroupNotFoundFault
    | TagQuotaPerResourceExceeded
    | CommonAwsError;
}

export declare namespace CreateParameterGroup {
  export type Input = CreateParameterGroupRequest;
  export type Output = CreateParameterGroupResponse;
  export type Error =
    | InvalidParameterCombinationException
    | InvalidParameterGroupStateFault
    | InvalidParameterValueException
    | ParameterGroupAlreadyExistsFault
    | ParameterGroupQuotaExceededFault
    | ServiceLinkedRoleNotFoundFault
    | TagQuotaPerResourceExceeded
    | CommonAwsError;
}

export declare namespace CreateSnapshot {
  export type Input = CreateSnapshotRequest;
  export type Output = CreateSnapshotResponse;
  export type Error =
    | ClusterNotFoundFault
    | InvalidClusterStateFault
    | InvalidParameterCombinationException
    | InvalidParameterValueException
    | ServiceLinkedRoleNotFoundFault
    | SnapshotAlreadyExistsFault
    | SnapshotQuotaExceededFault
    | TagQuotaPerResourceExceeded
    | CommonAwsError;
}

export declare namespace CreateSubnetGroup {
  export type Input = CreateSubnetGroupRequest;
  export type Output = CreateSubnetGroupResponse;
  export type Error =
    | InvalidSubnet
    | ServiceLinkedRoleNotFoundFault
    | SubnetGroupAlreadyExistsFault
    | SubnetGroupQuotaExceededFault
    | SubnetNotAllowedFault
    | SubnetQuotaExceededFault
    | TagQuotaPerResourceExceeded
    | CommonAwsError;
}

export declare namespace CreateUser {
  export type Input = CreateUserRequest;
  export type Output = CreateUserResponse;
  export type Error =
    | DuplicateUserNameFault
    | InvalidParameterCombinationException
    | InvalidParameterValueException
    | TagQuotaPerResourceExceeded
    | UserAlreadyExistsFault
    | UserQuotaExceededFault
    | CommonAwsError;
}

export declare namespace DeleteACL {
  export type Input = DeleteACLRequest;
  export type Output = DeleteACLResponse;
  export type Error =
    | ACLNotFoundFault
    | InvalidACLStateFault
    | InvalidParameterValueException
    | CommonAwsError;
}

export declare namespace DeleteCluster {
  export type Input = DeleteClusterRequest;
  export type Output = DeleteClusterResponse;
  export type Error =
    | ClusterNotFoundFault
    | InvalidClusterStateFault
    | InvalidParameterCombinationException
    | InvalidParameterValueException
    | ServiceLinkedRoleNotFoundFault
    | SnapshotAlreadyExistsFault
    | CommonAwsError;
}

export declare namespace DeleteMultiRegionCluster {
  export type Input = DeleteMultiRegionClusterRequest;
  export type Output = DeleteMultiRegionClusterResponse;
  export type Error =
    | InvalidMultiRegionClusterStateFault
    | InvalidParameterValueException
    | MultiRegionClusterNotFoundFault
    | CommonAwsError;
}

export declare namespace DeleteParameterGroup {
  export type Input = DeleteParameterGroupRequest;
  export type Output = DeleteParameterGroupResponse;
  export type Error =
    | InvalidParameterCombinationException
    | InvalidParameterGroupStateFault
    | InvalidParameterValueException
    | ParameterGroupNotFoundFault
    | ServiceLinkedRoleNotFoundFault
    | CommonAwsError;
}

export declare namespace DeleteSnapshot {
  export type Input = DeleteSnapshotRequest;
  export type Output = DeleteSnapshotResponse;
  export type Error =
    | InvalidParameterCombinationException
    | InvalidParameterValueException
    | InvalidSnapshotStateFault
    | ServiceLinkedRoleNotFoundFault
    | SnapshotNotFoundFault
    | CommonAwsError;
}

export declare namespace DeleteSubnetGroup {
  export type Input = DeleteSubnetGroupRequest;
  export type Output = DeleteSubnetGroupResponse;
  export type Error =
    | ServiceLinkedRoleNotFoundFault
    | SubnetGroupInUseFault
    | SubnetGroupNotFoundFault
    | CommonAwsError;
}

export declare namespace DeleteUser {
  export type Input = DeleteUserRequest;
  export type Output = DeleteUserResponse;
  export type Error =
    | InvalidParameterValueException
    | InvalidUserStateFault
    | UserNotFoundFault
    | CommonAwsError;
}

export declare namespace DescribeACLs {
  export type Input = DescribeACLsRequest;
  export type Output = DescribeACLsResponse;
  export type Error =
    | ACLNotFoundFault
    | InvalidParameterCombinationException
    | CommonAwsError;
}

export declare namespace DescribeClusters {
  export type Input = DescribeClustersRequest;
  export type Output = DescribeClustersResponse;
  export type Error =
    | ClusterNotFoundFault
    | InvalidParameterCombinationException
    | InvalidParameterValueException
    | ServiceLinkedRoleNotFoundFault
    | CommonAwsError;
}

export declare namespace DescribeEngineVersions {
  export type Input = DescribeEngineVersionsRequest;
  export type Output = DescribeEngineVersionsResponse;
  export type Error =
    | InvalidParameterCombinationException
    | InvalidParameterValueException
    | ServiceLinkedRoleNotFoundFault
    | CommonAwsError;
}

export declare namespace DescribeEvents {
  export type Input = DescribeEventsRequest;
  export type Output = DescribeEventsResponse;
  export type Error =
    | InvalidParameterCombinationException
    | InvalidParameterValueException
    | ServiceLinkedRoleNotFoundFault
    | CommonAwsError;
}

export declare namespace DescribeMultiRegionClusters {
  export type Input = DescribeMultiRegionClustersRequest;
  export type Output = DescribeMultiRegionClustersResponse;
  export type Error =
    | ClusterNotFoundFault
    | InvalidParameterCombinationException
    | InvalidParameterValueException
    | MultiRegionClusterNotFoundFault
    | CommonAwsError;
}

export declare namespace DescribeParameterGroups {
  export type Input = DescribeParameterGroupsRequest;
  export type Output = DescribeParameterGroupsResponse;
  export type Error =
    | InvalidParameterCombinationException
    | InvalidParameterValueException
    | ParameterGroupNotFoundFault
    | ServiceLinkedRoleNotFoundFault
    | CommonAwsError;
}

export declare namespace DescribeParameters {
  export type Input = DescribeParametersRequest;
  export type Output = DescribeParametersResponse;
  export type Error =
    | InvalidParameterCombinationException
    | InvalidParameterValueException
    | ParameterGroupNotFoundFault
    | ServiceLinkedRoleNotFoundFault
    | CommonAwsError;
}

export declare namespace DescribeReservedNodes {
  export type Input = DescribeReservedNodesRequest;
  export type Output = DescribeReservedNodesResponse;
  export type Error =
    | InvalidParameterCombinationException
    | InvalidParameterValueException
    | ReservedNodeNotFoundFault
    | ServiceLinkedRoleNotFoundFault
    | CommonAwsError;
}

export declare namespace DescribeReservedNodesOfferings {
  export type Input = DescribeReservedNodesOfferingsRequest;
  export type Output = DescribeReservedNodesOfferingsResponse;
  export type Error =
    | InvalidParameterCombinationException
    | InvalidParameterValueException
    | ReservedNodesOfferingNotFoundFault
    | ServiceLinkedRoleNotFoundFault
    | CommonAwsError;
}

export declare namespace DescribeServiceUpdates {
  export type Input = DescribeServiceUpdatesRequest;
  export type Output = DescribeServiceUpdatesResponse;
  export type Error =
    | InvalidParameterCombinationException
    | InvalidParameterValueException
    | CommonAwsError;
}

export declare namespace DescribeSnapshots {
  export type Input = DescribeSnapshotsRequest;
  export type Output = DescribeSnapshotsResponse;
  export type Error =
    | InvalidParameterCombinationException
    | InvalidParameterValueException
    | ServiceLinkedRoleNotFoundFault
    | SnapshotNotFoundFault
    | CommonAwsError;
}

export declare namespace DescribeSubnetGroups {
  export type Input = DescribeSubnetGroupsRequest;
  export type Output = DescribeSubnetGroupsResponse;
  export type Error =
    | ServiceLinkedRoleNotFoundFault
    | SubnetGroupNotFoundFault
    | CommonAwsError;
}

export declare namespace DescribeUsers {
  export type Input = DescribeUsersRequest;
  export type Output = DescribeUsersResponse;
  export type Error =
    | InvalidParameterCombinationException
    | UserNotFoundFault
    | CommonAwsError;
}

export declare namespace FailoverShard {
  export type Input = FailoverShardRequest;
  export type Output = FailoverShardResponse;
  export type Error =
    | APICallRateForCustomerExceededFault
    | ClusterNotFoundFault
    | InvalidClusterStateFault
    | InvalidKMSKeyFault
    | InvalidParameterCombinationException
    | InvalidParameterValueException
    | ShardNotFoundFault
    | TestFailoverNotAvailableFault
    | CommonAwsError;
}

export declare namespace ListAllowedMultiRegionClusterUpdates {
  export type Input = ListAllowedMultiRegionClusterUpdatesRequest;
  export type Output = ListAllowedMultiRegionClusterUpdatesResponse;
  export type Error =
    | InvalidParameterCombinationException
    | InvalidParameterValueException
    | MultiRegionClusterNotFoundFault
    | CommonAwsError;
}

export declare namespace ListAllowedNodeTypeUpdates {
  export type Input = ListAllowedNodeTypeUpdatesRequest;
  export type Output = ListAllowedNodeTypeUpdatesResponse;
  export type Error =
    | ClusterNotFoundFault
    | InvalidParameterCombinationException
    | InvalidParameterValueException
    | ServiceLinkedRoleNotFoundFault
    | CommonAwsError;
}

export declare namespace ListTags {
  export type Input = ListTagsRequest;
  export type Output = ListTagsResponse;
  export type Error =
    | ACLNotFoundFault
    | ClusterNotFoundFault
    | InvalidARNFault
    | InvalidClusterStateFault
    | MultiRegionClusterNotFoundFault
    | MultiRegionParameterGroupNotFoundFault
    | ParameterGroupNotFoundFault
    | ServiceLinkedRoleNotFoundFault
    | SnapshotNotFoundFault
    | SubnetGroupNotFoundFault
    | UserNotFoundFault
    | CommonAwsError;
}

export declare namespace PurchaseReservedNodesOffering {
  export type Input = PurchaseReservedNodesOfferingRequest;
  export type Output = PurchaseReservedNodesOfferingResponse;
  export type Error =
    | InvalidParameterCombinationException
    | InvalidParameterValueException
    | ReservedNodeAlreadyExistsFault
    | ReservedNodeQuotaExceededFault
    | ReservedNodesOfferingNotFoundFault
    | ServiceLinkedRoleNotFoundFault
    | TagQuotaPerResourceExceeded
    | CommonAwsError;
}

export declare namespace ResetParameterGroup {
  export type Input = ResetParameterGroupRequest;
  export type Output = ResetParameterGroupResponse;
  export type Error =
    | InvalidParameterCombinationException
    | InvalidParameterGroupStateFault
    | InvalidParameterValueException
    | ParameterGroupNotFoundFault
    | ServiceLinkedRoleNotFoundFault
    | CommonAwsError;
}

export declare namespace TagResource {
  export type Input = TagResourceRequest;
  export type Output = TagResourceResponse;
  export type Error =
    | ACLNotFoundFault
    | ClusterNotFoundFault
    | InvalidARNFault
    | InvalidClusterStateFault
    | InvalidParameterValueException
    | MultiRegionClusterNotFoundFault
    | MultiRegionParameterGroupNotFoundFault
    | ParameterGroupNotFoundFault
    | ServiceLinkedRoleNotFoundFault
    | SnapshotNotFoundFault
    | SubnetGroupNotFoundFault
    | TagQuotaPerResourceExceeded
    | UserNotFoundFault
    | CommonAwsError;
}

export declare namespace UntagResource {
  export type Input = UntagResourceRequest;
  export type Output = UntagResourceResponse;
  export type Error =
    | ACLNotFoundFault
    | ClusterNotFoundFault
    | InvalidARNFault
    | InvalidClusterStateFault
    | InvalidParameterValueException
    | MultiRegionClusterNotFoundFault
    | MultiRegionParameterGroupNotFoundFault
    | ParameterGroupNotFoundFault
    | ServiceLinkedRoleNotFoundFault
    | SnapshotNotFoundFault
    | SubnetGroupNotFoundFault
    | TagNotFoundFault
    | UserNotFoundFault
    | CommonAwsError;
}

export declare namespace UpdateACL {
  export type Input = UpdateACLRequest;
  export type Output = UpdateACLResponse;
  export type Error =
    | ACLNotFoundFault
    | DefaultUserRequired
    | DuplicateUserNameFault
    | InvalidACLStateFault
    | InvalidParameterCombinationException
    | InvalidParameterValueException
    | UserNotFoundFault
    | CommonAwsError;
}

export declare namespace UpdateCluster {
  export type Input = UpdateClusterRequest;
  export type Output = UpdateClusterResponse;
  export type Error =
    | ACLNotFoundFault
    | ClusterNotFoundFault
    | ClusterQuotaForCustomerExceededFault
    | InvalidACLStateFault
    | InvalidClusterStateFault
    | InvalidKMSKeyFault
    | InvalidNodeStateFault
    | InvalidParameterCombinationException
    | InvalidParameterValueException
    | InvalidVPCNetworkStateFault
    | NodeQuotaForClusterExceededFault
    | NodeQuotaForCustomerExceededFault
    | NoOperationFault
    | ParameterGroupNotFoundFault
    | ServiceLinkedRoleNotFoundFault
    | ShardsPerClusterQuotaExceededFault
    | CommonAwsError;
}

export declare namespace UpdateMultiRegionCluster {
  export type Input = UpdateMultiRegionClusterRequest;
  export type Output = UpdateMultiRegionClusterResponse;
  export type Error =
    | InvalidMultiRegionClusterStateFault
    | InvalidParameterCombinationException
    | InvalidParameterValueException
    | MultiRegionClusterNotFoundFault
    | MultiRegionParameterGroupNotFoundFault
    | CommonAwsError;
}

export declare namespace UpdateParameterGroup {
  export type Input = UpdateParameterGroupRequest;
  export type Output = UpdateParameterGroupResponse;
  export type Error =
    | InvalidParameterCombinationException
    | InvalidParameterGroupStateFault
    | InvalidParameterValueException
    | ParameterGroupNotFoundFault
    | ServiceLinkedRoleNotFoundFault
    | CommonAwsError;
}

export declare namespace UpdateSubnetGroup {
  export type Input = UpdateSubnetGroupRequest;
  export type Output = UpdateSubnetGroupResponse;
  export type Error =
    | InvalidSubnet
    | ServiceLinkedRoleNotFoundFault
    | SubnetGroupNotFoundFault
    | SubnetInUse
    | SubnetNotAllowedFault
    | SubnetQuotaExceededFault
    | CommonAwsError;
}

export declare namespace UpdateUser {
  export type Input = UpdateUserRequest;
  export type Output = UpdateUserResponse;
  export type Error =
    | InvalidParameterCombinationException
    | InvalidParameterValueException
    | InvalidUserStateFault
    | UserNotFoundFault
    | CommonAwsError;
}
