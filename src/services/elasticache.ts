import type { Effect, Data as EffectData } from "effect";
import type { CommonAwsError } from "../error.ts";

export interface AmazonElastiCacheV9 {
  addTagsToResource(
    input: AddTagsToResourceMessage,
  ): Effect.Effect<
    TagListMessage,
    | CacheClusterNotFoundFault
    | CacheParameterGroupNotFoundFault
    | CacheSecurityGroupNotFoundFault
    | CacheSubnetGroupNotFoundFault
    | InvalidARNFault
    | InvalidReplicationGroupStateFault
    | InvalidServerlessCacheSnapshotStateFault
    | InvalidServerlessCacheStateFault
    | ReplicationGroupNotFoundFault
    | ReservedCacheNodeNotFoundFault
    | ServerlessCacheNotFoundFault
    | ServerlessCacheSnapshotNotFoundFault
    | SnapshotNotFoundFault
    | TagQuotaPerResourceExceeded
    | UserGroupNotFoundFault
    | UserNotFoundFault
    | CommonAwsError
  >;
  authorizeCacheSecurityGroupIngress(
    input: AuthorizeCacheSecurityGroupIngressMessage,
  ): Effect.Effect<
    AuthorizeCacheSecurityGroupIngressResult,
    | AuthorizationAlreadyExistsFault
    | CacheSecurityGroupNotFoundFault
    | InvalidCacheSecurityGroupStateFault
    | InvalidParameterCombinationException
    | InvalidParameterValueException
    | CommonAwsError
  >;
  batchApplyUpdateAction(
    input: BatchApplyUpdateActionMessage,
  ): Effect.Effect<
    UpdateActionResultsMessage,
    InvalidParameterValueException | ServiceUpdateNotFoundFault | CommonAwsError
  >;
  batchStopUpdateAction(
    input: BatchStopUpdateActionMessage,
  ): Effect.Effect<
    UpdateActionResultsMessage,
    InvalidParameterValueException | ServiceUpdateNotFoundFault | CommonAwsError
  >;
  completeMigration(
    input: CompleteMigrationMessage,
  ): Effect.Effect<
    CompleteMigrationResponse,
    | InvalidReplicationGroupStateFault
    | ReplicationGroupNotFoundFault
    | ReplicationGroupNotUnderMigrationFault
    | CommonAwsError
  >;
  copyServerlessCacheSnapshot(
    input: CopyServerlessCacheSnapshotRequest,
  ): Effect.Effect<
    CopyServerlessCacheSnapshotResponse,
    | InvalidParameterCombinationException
    | InvalidParameterValueException
    | InvalidServerlessCacheSnapshotStateFault
    | ServerlessCacheSnapshotAlreadyExistsFault
    | ServerlessCacheSnapshotNotFoundFault
    | ServerlessCacheSnapshotQuotaExceededFault
    | ServiceLinkedRoleNotFoundFault
    | TagQuotaPerResourceExceeded
    | CommonAwsError
  >;
  copySnapshot(
    input: CopySnapshotMessage,
  ): Effect.Effect<
    CopySnapshotResult,
    | InvalidParameterCombinationException
    | InvalidParameterValueException
    | InvalidSnapshotStateFault
    | SnapshotAlreadyExistsFault
    | SnapshotNotFoundFault
    | SnapshotQuotaExceededFault
    | TagQuotaPerResourceExceeded
    | CommonAwsError
  >;
  createCacheCluster(
    input: CreateCacheClusterMessage,
  ): Effect.Effect<
    CreateCacheClusterResult,
    | CacheClusterAlreadyExistsFault
    | CacheParameterGroupNotFoundFault
    | CacheSecurityGroupNotFoundFault
    | CacheSubnetGroupNotFoundFault
    | ClusterQuotaForCustomerExceededFault
    | InsufficientCacheClusterCapacityFault
    | InvalidParameterCombinationException
    | InvalidParameterValueException
    | InvalidReplicationGroupStateFault
    | InvalidVPCNetworkStateFault
    | NodeQuotaForClusterExceededFault
    | NodeQuotaForCustomerExceededFault
    | ReplicationGroupNotFoundFault
    | TagQuotaPerResourceExceeded
    | CommonAwsError
  >;
  createCacheParameterGroup(
    input: CreateCacheParameterGroupMessage,
  ): Effect.Effect<
    CreateCacheParameterGroupResult,
    | CacheParameterGroupAlreadyExistsFault
    | CacheParameterGroupQuotaExceededFault
    | InvalidCacheParameterGroupStateFault
    | InvalidParameterCombinationException
    | InvalidParameterValueException
    | TagQuotaPerResourceExceeded
    | CommonAwsError
  >;
  createCacheSecurityGroup(
    input: CreateCacheSecurityGroupMessage,
  ): Effect.Effect<
    CreateCacheSecurityGroupResult,
    | CacheSecurityGroupAlreadyExistsFault
    | CacheSecurityGroupQuotaExceededFault
    | InvalidParameterCombinationException
    | InvalidParameterValueException
    | TagQuotaPerResourceExceeded
    | CommonAwsError
  >;
  createCacheSubnetGroup(
    input: CreateCacheSubnetGroupMessage,
  ): Effect.Effect<
    CreateCacheSubnetGroupResult,
    | CacheSubnetGroupAlreadyExistsFault
    | CacheSubnetGroupQuotaExceededFault
    | CacheSubnetQuotaExceededFault
    | InvalidSubnet
    | SubnetNotAllowedFault
    | TagQuotaPerResourceExceeded
    | CommonAwsError
  >;
  createGlobalReplicationGroup(
    input: CreateGlobalReplicationGroupMessage,
  ): Effect.Effect<
    CreateGlobalReplicationGroupResult,
    | GlobalReplicationGroupAlreadyExistsFault
    | InvalidParameterValueException
    | InvalidReplicationGroupStateFault
    | ReplicationGroupNotFoundFault
    | ServiceLinkedRoleNotFoundFault
    | CommonAwsError
  >;
  createReplicationGroup(
    input: CreateReplicationGroupMessage,
  ): Effect.Effect<
    CreateReplicationGroupResult,
    | CacheClusterNotFoundFault
    | CacheParameterGroupNotFoundFault
    | CacheSecurityGroupNotFoundFault
    | CacheSubnetGroupNotFoundFault
    | ClusterQuotaForCustomerExceededFault
    | GlobalReplicationGroupNotFoundFault
    | InsufficientCacheClusterCapacityFault
    | InvalidCacheClusterStateFault
    | InvalidGlobalReplicationGroupStateFault
    | InvalidParameterCombinationException
    | InvalidParameterValueException
    | InvalidUserGroupStateFault
    | InvalidVPCNetworkStateFault
    | NodeGroupsPerReplicationGroupQuotaExceededFault
    | NodeQuotaForClusterExceededFault
    | NodeQuotaForCustomerExceededFault
    | ReplicationGroupAlreadyExistsFault
    | TagQuotaPerResourceExceeded
    | UserGroupNotFoundFault
    | CommonAwsError
  >;
  createServerlessCache(
    input: CreateServerlessCacheRequest,
  ): Effect.Effect<
    CreateServerlessCacheResponse,
    | InvalidCredentialsException
    | InvalidParameterCombinationException
    | InvalidParameterValueException
    | InvalidServerlessCacheStateFault
    | InvalidUserGroupStateFault
    | ServerlessCacheAlreadyExistsFault
    | ServerlessCacheNotFoundFault
    | ServerlessCacheQuotaForCustomerExceededFault
    | ServiceLinkedRoleNotFoundFault
    | TagQuotaPerResourceExceeded
    | UserGroupNotFoundFault
    | CommonAwsError
  >;
  createServerlessCacheSnapshot(
    input: CreateServerlessCacheSnapshotRequest,
  ): Effect.Effect<
    CreateServerlessCacheSnapshotResponse,
    | InvalidParameterCombinationException
    | InvalidParameterValueException
    | InvalidServerlessCacheStateFault
    | ServerlessCacheNotFoundFault
    | ServerlessCacheSnapshotAlreadyExistsFault
    | ServerlessCacheSnapshotQuotaExceededFault
    | ServiceLinkedRoleNotFoundFault
    | TagQuotaPerResourceExceeded
    | CommonAwsError
  >;
  createSnapshot(
    input: CreateSnapshotMessage,
  ): Effect.Effect<
    CreateSnapshotResult,
    | CacheClusterNotFoundFault
    | InvalidCacheClusterStateFault
    | InvalidParameterCombinationException
    | InvalidParameterValueException
    | InvalidReplicationGroupStateFault
    | ReplicationGroupNotFoundFault
    | SnapshotAlreadyExistsFault
    | SnapshotFeatureNotSupportedFault
    | SnapshotQuotaExceededFault
    | TagQuotaPerResourceExceeded
    | CommonAwsError
  >;
  createUser(
    input: CreateUserMessage,
  ): Effect.Effect<
    User,
    | DuplicateUserNameFault
    | InvalidParameterCombinationException
    | InvalidParameterValueException
    | ServiceLinkedRoleNotFoundFault
    | TagQuotaPerResourceExceeded
    | UserAlreadyExistsFault
    | UserQuotaExceededFault
    | CommonAwsError
  >;
  createUserGroup(
    input: CreateUserGroupMessage,
  ): Effect.Effect<
    UserGroup,
    | DefaultUserRequired
    | DuplicateUserNameFault
    | InvalidParameterValueException
    | ServiceLinkedRoleNotFoundFault
    | TagQuotaPerResourceExceeded
    | UserGroupAlreadyExistsFault
    | UserGroupQuotaExceededFault
    | UserNotFoundFault
    | CommonAwsError
  >;
  decreaseNodeGroupsInGlobalReplicationGroup(
    input: DecreaseNodeGroupsInGlobalReplicationGroupMessage,
  ): Effect.Effect<
    DecreaseNodeGroupsInGlobalReplicationGroupResult,
    | GlobalReplicationGroupNotFoundFault
    | InvalidGlobalReplicationGroupStateFault
    | InvalidParameterCombinationException
    | InvalidParameterValueException
    | CommonAwsError
  >;
  decreaseReplicaCount(
    input: DecreaseReplicaCountMessage,
  ): Effect.Effect<
    DecreaseReplicaCountResult,
    | ClusterQuotaForCustomerExceededFault
    | InsufficientCacheClusterCapacityFault
    | InvalidCacheClusterStateFault
    | InvalidParameterCombinationException
    | InvalidParameterValueException
    | InvalidReplicationGroupStateFault
    | InvalidVPCNetworkStateFault
    | NodeGroupsPerReplicationGroupQuotaExceededFault
    | NodeQuotaForCustomerExceededFault
    | NoOperationFault
    | ReplicationGroupNotFoundFault
    | ServiceLinkedRoleNotFoundFault
    | CommonAwsError
  >;
  deleteCacheCluster(
    input: DeleteCacheClusterMessage,
  ): Effect.Effect<
    DeleteCacheClusterResult,
    | CacheClusterNotFoundFault
    | InvalidCacheClusterStateFault
    | InvalidParameterCombinationException
    | InvalidParameterValueException
    | SnapshotAlreadyExistsFault
    | SnapshotFeatureNotSupportedFault
    | SnapshotQuotaExceededFault
    | CommonAwsError
  >;
  deleteCacheParameterGroup(
    input: DeleteCacheParameterGroupMessage,
  ): Effect.Effect<
    {},
    | CacheParameterGroupNotFoundFault
    | InvalidCacheParameterGroupStateFault
    | InvalidParameterCombinationException
    | InvalidParameterValueException
    | CommonAwsError
  >;
  deleteCacheSecurityGroup(
    input: DeleteCacheSecurityGroupMessage,
  ): Effect.Effect<
    {},
    | CacheSecurityGroupNotFoundFault
    | InvalidCacheSecurityGroupStateFault
    | InvalidParameterCombinationException
    | InvalidParameterValueException
    | CommonAwsError
  >;
  deleteCacheSubnetGroup(
    input: DeleteCacheSubnetGroupMessage,
  ): Effect.Effect<
    {},
    CacheSubnetGroupInUse | CacheSubnetGroupNotFoundFault | CommonAwsError
  >;
  deleteGlobalReplicationGroup(
    input: DeleteGlobalReplicationGroupMessage,
  ): Effect.Effect<
    DeleteGlobalReplicationGroupResult,
    | GlobalReplicationGroupNotFoundFault
    | InvalidGlobalReplicationGroupStateFault
    | InvalidParameterValueException
    | CommonAwsError
  >;
  deleteReplicationGroup(
    input: DeleteReplicationGroupMessage,
  ): Effect.Effect<
    DeleteReplicationGroupResult,
    | InvalidParameterCombinationException
    | InvalidParameterValueException
    | InvalidReplicationGroupStateFault
    | ReplicationGroupNotFoundFault
    | SnapshotAlreadyExistsFault
    | SnapshotFeatureNotSupportedFault
    | SnapshotQuotaExceededFault
    | CommonAwsError
  >;
  deleteServerlessCache(
    input: DeleteServerlessCacheRequest,
  ): Effect.Effect<
    DeleteServerlessCacheResponse,
    | InvalidCredentialsException
    | InvalidParameterCombinationException
    | InvalidParameterValueException
    | InvalidServerlessCacheStateFault
    | ServerlessCacheNotFoundFault
    | ServerlessCacheSnapshotAlreadyExistsFault
    | ServiceLinkedRoleNotFoundFault
    | CommonAwsError
  >;
  deleteServerlessCacheSnapshot(
    input: DeleteServerlessCacheSnapshotRequest,
  ): Effect.Effect<
    DeleteServerlessCacheSnapshotResponse,
    | InvalidParameterValueException
    | InvalidServerlessCacheSnapshotStateFault
    | ServerlessCacheSnapshotNotFoundFault
    | ServiceLinkedRoleNotFoundFault
    | CommonAwsError
  >;
  deleteSnapshot(
    input: DeleteSnapshotMessage,
  ): Effect.Effect<
    DeleteSnapshotResult,
    | InvalidParameterCombinationException
    | InvalidParameterValueException
    | InvalidSnapshotStateFault
    | SnapshotNotFoundFault
    | CommonAwsError
  >;
  deleteUser(
    input: DeleteUserMessage,
  ): Effect.Effect<
    User,
    | DefaultUserAssociatedToUserGroupFault
    | InvalidParameterValueException
    | InvalidUserStateFault
    | ServiceLinkedRoleNotFoundFault
    | UserNotFoundFault
    | CommonAwsError
  >;
  deleteUserGroup(
    input: DeleteUserGroupMessage,
  ): Effect.Effect<
    UserGroup,
    | InvalidParameterValueException
    | InvalidUserGroupStateFault
    | ServiceLinkedRoleNotFoundFault
    | UserGroupNotFoundFault
    | CommonAwsError
  >;
  describeCacheClusters(
    input: DescribeCacheClustersMessage,
  ): Effect.Effect<
    CacheClusterMessage,
    | CacheClusterNotFoundFault
    | InvalidParameterCombinationException
    | InvalidParameterValueException
    | CommonAwsError
  >;
  describeCacheEngineVersions(
    input: DescribeCacheEngineVersionsMessage,
  ): Effect.Effect<CacheEngineVersionMessage, CommonAwsError>;
  describeCacheParameterGroups(
    input: DescribeCacheParameterGroupsMessage,
  ): Effect.Effect<
    CacheParameterGroupsMessage,
    | CacheParameterGroupNotFoundFault
    | InvalidParameterCombinationException
    | InvalidParameterValueException
    | CommonAwsError
  >;
  describeCacheParameters(
    input: DescribeCacheParametersMessage,
  ): Effect.Effect<
    CacheParameterGroupDetails,
    | CacheParameterGroupNotFoundFault
    | InvalidParameterCombinationException
    | InvalidParameterValueException
    | CommonAwsError
  >;
  describeCacheSecurityGroups(
    input: DescribeCacheSecurityGroupsMessage,
  ): Effect.Effect<
    CacheSecurityGroupMessage,
    | CacheSecurityGroupNotFoundFault
    | InvalidParameterCombinationException
    | InvalidParameterValueException
    | CommonAwsError
  >;
  describeCacheSubnetGroups(
    input: DescribeCacheSubnetGroupsMessage,
  ): Effect.Effect<
    CacheSubnetGroupMessage,
    CacheSubnetGroupNotFoundFault | CommonAwsError
  >;
  describeEngineDefaultParameters(
    input: DescribeEngineDefaultParametersMessage,
  ): Effect.Effect<
    DescribeEngineDefaultParametersResult,
    | InvalidParameterCombinationException
    | InvalidParameterValueException
    | CommonAwsError
  >;
  describeEvents(
    input: DescribeEventsMessage,
  ): Effect.Effect<
    EventsMessage,
    | InvalidParameterCombinationException
    | InvalidParameterValueException
    | CommonAwsError
  >;
  describeGlobalReplicationGroups(
    input: DescribeGlobalReplicationGroupsMessage,
  ): Effect.Effect<
    DescribeGlobalReplicationGroupsResult,
    | GlobalReplicationGroupNotFoundFault
    | InvalidParameterCombinationException
    | InvalidParameterValueException
    | CommonAwsError
  >;
  describeReplicationGroups(
    input: DescribeReplicationGroupsMessage,
  ): Effect.Effect<
    ReplicationGroupMessage,
    | InvalidParameterCombinationException
    | InvalidParameterValueException
    | ReplicationGroupNotFoundFault
    | CommonAwsError
  >;
  describeReservedCacheNodes(
    input: DescribeReservedCacheNodesMessage,
  ): Effect.Effect<
    ReservedCacheNodeMessage,
    | InvalidParameterCombinationException
    | InvalidParameterValueException
    | ReservedCacheNodeNotFoundFault
    | CommonAwsError
  >;
  describeReservedCacheNodesOfferings(
    input: DescribeReservedCacheNodesOfferingsMessage,
  ): Effect.Effect<
    ReservedCacheNodesOfferingMessage,
    | InvalidParameterCombinationException
    | InvalidParameterValueException
    | ReservedCacheNodesOfferingNotFoundFault
    | CommonAwsError
  >;
  describeServerlessCaches(
    input: DescribeServerlessCachesRequest,
  ): Effect.Effect<
    DescribeServerlessCachesResponse,
    | InvalidParameterCombinationException
    | InvalidParameterValueException
    | ServerlessCacheNotFoundFault
    | CommonAwsError
  >;
  describeServerlessCacheSnapshots(
    input: DescribeServerlessCacheSnapshotsRequest,
  ): Effect.Effect<
    DescribeServerlessCacheSnapshotsResponse,
    | InvalidParameterCombinationException
    | InvalidParameterValueException
    | ServerlessCacheNotFoundFault
    | ServerlessCacheSnapshotNotFoundFault
    | CommonAwsError
  >;
  describeServiceUpdates(
    input: DescribeServiceUpdatesMessage,
  ): Effect.Effect<
    ServiceUpdatesMessage,
    | InvalidParameterCombinationException
    | InvalidParameterValueException
    | ServiceUpdateNotFoundFault
    | CommonAwsError
  >;
  describeSnapshots(
    input: DescribeSnapshotsMessage,
  ): Effect.Effect<
    DescribeSnapshotsListMessage,
    | CacheClusterNotFoundFault
    | InvalidParameterCombinationException
    | InvalidParameterValueException
    | SnapshotNotFoundFault
    | CommonAwsError
  >;
  describeUpdateActions(
    input: DescribeUpdateActionsMessage,
  ): Effect.Effect<
    UpdateActionsMessage,
    | InvalidParameterCombinationException
    | InvalidParameterValueException
    | CommonAwsError
  >;
  describeUserGroups(
    input: DescribeUserGroupsMessage,
  ): Effect.Effect<
    DescribeUserGroupsResult,
    | InvalidParameterCombinationException
    | ServiceLinkedRoleNotFoundFault
    | UserGroupNotFoundFault
    | CommonAwsError
  >;
  describeUsers(
    input: DescribeUsersMessage,
  ): Effect.Effect<
    DescribeUsersResult,
    | InvalidParameterCombinationException
    | ServiceLinkedRoleNotFoundFault
    | UserNotFoundFault
    | CommonAwsError
  >;
  disassociateGlobalReplicationGroup(
    input: DisassociateGlobalReplicationGroupMessage,
  ): Effect.Effect<
    DisassociateGlobalReplicationGroupResult,
    | GlobalReplicationGroupNotFoundFault
    | InvalidGlobalReplicationGroupStateFault
    | InvalidParameterCombinationException
    | InvalidParameterValueException
    | CommonAwsError
  >;
  exportServerlessCacheSnapshot(
    input: ExportServerlessCacheSnapshotRequest,
  ): Effect.Effect<
    ExportServerlessCacheSnapshotResponse,
    | InvalidParameterValueException
    | InvalidServerlessCacheSnapshotStateFault
    | ServerlessCacheSnapshotNotFoundFault
    | ServiceLinkedRoleNotFoundFault
    | CommonAwsError
  >;
  failoverGlobalReplicationGroup(
    input: FailoverGlobalReplicationGroupMessage,
  ): Effect.Effect<
    FailoverGlobalReplicationGroupResult,
    | GlobalReplicationGroupNotFoundFault
    | InvalidGlobalReplicationGroupStateFault
    | InvalidParameterCombinationException
    | InvalidParameterValueException
    | CommonAwsError
  >;
  increaseNodeGroupsInGlobalReplicationGroup(
    input: IncreaseNodeGroupsInGlobalReplicationGroupMessage,
  ): Effect.Effect<
    IncreaseNodeGroupsInGlobalReplicationGroupResult,
    | GlobalReplicationGroupNotFoundFault
    | InvalidGlobalReplicationGroupStateFault
    | InvalidParameterValueException
    | CommonAwsError
  >;
  increaseReplicaCount(
    input: IncreaseReplicaCountMessage,
  ): Effect.Effect<
    IncreaseReplicaCountResult,
    | ClusterQuotaForCustomerExceededFault
    | InsufficientCacheClusterCapacityFault
    | InvalidCacheClusterStateFault
    | InvalidKMSKeyFault
    | InvalidParameterCombinationException
    | InvalidParameterValueException
    | InvalidReplicationGroupStateFault
    | InvalidVPCNetworkStateFault
    | NodeGroupsPerReplicationGroupQuotaExceededFault
    | NodeQuotaForCustomerExceededFault
    | NoOperationFault
    | ReplicationGroupNotFoundFault
    | CommonAwsError
  >;
  listAllowedNodeTypeModifications(
    input: ListAllowedNodeTypeModificationsMessage,
  ): Effect.Effect<
    AllowedNodeTypeModificationsMessage,
    | CacheClusterNotFoundFault
    | InvalidParameterCombinationException
    | InvalidParameterValueException
    | ReplicationGroupNotFoundFault
    | CommonAwsError
  >;
  listTagsForResource(
    input: ListTagsForResourceMessage,
  ): Effect.Effect<
    TagListMessage,
    | CacheClusterNotFoundFault
    | CacheParameterGroupNotFoundFault
    | CacheSecurityGroupNotFoundFault
    | CacheSubnetGroupNotFoundFault
    | InvalidARNFault
    | InvalidReplicationGroupStateFault
    | InvalidServerlessCacheSnapshotStateFault
    | InvalidServerlessCacheStateFault
    | ReplicationGroupNotFoundFault
    | ReservedCacheNodeNotFoundFault
    | ServerlessCacheNotFoundFault
    | ServerlessCacheSnapshotNotFoundFault
    | SnapshotNotFoundFault
    | UserGroupNotFoundFault
    | UserNotFoundFault
    | CommonAwsError
  >;
  modifyCacheCluster(
    input: ModifyCacheClusterMessage,
  ): Effect.Effect<
    ModifyCacheClusterResult,
    | CacheClusterNotFoundFault
    | CacheParameterGroupNotFoundFault
    | CacheSecurityGroupNotFoundFault
    | InsufficientCacheClusterCapacityFault
    | InvalidCacheClusterStateFault
    | InvalidCacheSecurityGroupStateFault
    | InvalidParameterCombinationException
    | InvalidParameterValueException
    | InvalidVPCNetworkStateFault
    | NodeQuotaForClusterExceededFault
    | NodeQuotaForCustomerExceededFault
    | CommonAwsError
  >;
  modifyCacheParameterGroup(
    input: ModifyCacheParameterGroupMessage,
  ): Effect.Effect<
    CacheParameterGroupNameMessage,
    | CacheParameterGroupNotFoundFault
    | InvalidCacheParameterGroupStateFault
    | InvalidGlobalReplicationGroupStateFault
    | InvalidParameterCombinationException
    | InvalidParameterValueException
    | CommonAwsError
  >;
  modifyCacheSubnetGroup(
    input: ModifyCacheSubnetGroupMessage,
  ): Effect.Effect<
    ModifyCacheSubnetGroupResult,
    | CacheSubnetGroupNotFoundFault
    | CacheSubnetQuotaExceededFault
    | InvalidSubnet
    | SubnetInUse
    | SubnetNotAllowedFault
    | CommonAwsError
  >;
  modifyGlobalReplicationGroup(
    input: ModifyGlobalReplicationGroupMessage,
  ): Effect.Effect<
    ModifyGlobalReplicationGroupResult,
    | GlobalReplicationGroupNotFoundFault
    | InvalidGlobalReplicationGroupStateFault
    | InvalidParameterValueException
    | CommonAwsError
  >;
  modifyReplicationGroup(
    input: ModifyReplicationGroupMessage,
  ): Effect.Effect<
    ModifyReplicationGroupResult,
    | CacheClusterNotFoundFault
    | CacheParameterGroupNotFoundFault
    | CacheSecurityGroupNotFoundFault
    | InsufficientCacheClusterCapacityFault
    | InvalidCacheClusterStateFault
    | InvalidCacheSecurityGroupStateFault
    | InvalidKMSKeyFault
    | InvalidParameterCombinationException
    | InvalidParameterValueException
    | InvalidReplicationGroupStateFault
    | InvalidUserGroupStateFault
    | InvalidVPCNetworkStateFault
    | NodeQuotaForClusterExceededFault
    | NodeQuotaForCustomerExceededFault
    | ReplicationGroupNotFoundFault
    | UserGroupNotFoundFault
    | CommonAwsError
  >;
  modifyReplicationGroupShardConfiguration(
    input: ModifyReplicationGroupShardConfigurationMessage,
  ): Effect.Effect<
    ModifyReplicationGroupShardConfigurationResult,
    | InsufficientCacheClusterCapacityFault
    | InvalidCacheClusterStateFault
    | InvalidKMSKeyFault
    | InvalidParameterCombinationException
    | InvalidParameterValueException
    | InvalidReplicationGroupStateFault
    | InvalidVPCNetworkStateFault
    | NodeGroupsPerReplicationGroupQuotaExceededFault
    | NodeQuotaForCustomerExceededFault
    | ReplicationGroupNotFoundFault
    | CommonAwsError
  >;
  modifyServerlessCache(
    input: ModifyServerlessCacheRequest,
  ): Effect.Effect<
    ModifyServerlessCacheResponse,
    | InvalidCredentialsException
    | InvalidParameterCombinationException
    | InvalidParameterValueException
    | InvalidServerlessCacheStateFault
    | InvalidUserGroupStateFault
    | ServerlessCacheNotFoundFault
    | ServiceLinkedRoleNotFoundFault
    | UserGroupNotFoundFault
    | CommonAwsError
  >;
  modifyUser(
    input: ModifyUserMessage,
  ): Effect.Effect<
    User,
    | InvalidParameterCombinationException
    | InvalidParameterValueException
    | InvalidUserStateFault
    | ServiceLinkedRoleNotFoundFault
    | UserNotFoundFault
    | CommonAwsError
  >;
  modifyUserGroup(
    input: ModifyUserGroupMessage,
  ): Effect.Effect<
    UserGroup,
    | DefaultUserRequired
    | DuplicateUserNameFault
    | InvalidParameterCombinationException
    | InvalidParameterValueException
    | InvalidUserGroupStateFault
    | ServiceLinkedRoleNotFoundFault
    | UserGroupNotFoundFault
    | UserNotFoundFault
    | CommonAwsError
  >;
  purchaseReservedCacheNodesOffering(
    input: PurchaseReservedCacheNodesOfferingMessage,
  ): Effect.Effect<
    PurchaseReservedCacheNodesOfferingResult,
    | InvalidParameterCombinationException
    | InvalidParameterValueException
    | ReservedCacheNodeAlreadyExistsFault
    | ReservedCacheNodeQuotaExceededFault
    | ReservedCacheNodesOfferingNotFoundFault
    | TagQuotaPerResourceExceeded
    | CommonAwsError
  >;
  rebalanceSlotsInGlobalReplicationGroup(
    input: RebalanceSlotsInGlobalReplicationGroupMessage,
  ): Effect.Effect<
    RebalanceSlotsInGlobalReplicationGroupResult,
    | GlobalReplicationGroupNotFoundFault
    | InvalidGlobalReplicationGroupStateFault
    | InvalidParameterValueException
    | CommonAwsError
  >;
  rebootCacheCluster(
    input: RebootCacheClusterMessage,
  ): Effect.Effect<
    RebootCacheClusterResult,
    CacheClusterNotFoundFault | InvalidCacheClusterStateFault | CommonAwsError
  >;
  removeTagsFromResource(
    input: RemoveTagsFromResourceMessage,
  ): Effect.Effect<
    TagListMessage,
    | CacheClusterNotFoundFault
    | CacheParameterGroupNotFoundFault
    | CacheSecurityGroupNotFoundFault
    | CacheSubnetGroupNotFoundFault
    | InvalidARNFault
    | InvalidReplicationGroupStateFault
    | InvalidServerlessCacheSnapshotStateFault
    | InvalidServerlessCacheStateFault
    | ReplicationGroupNotFoundFault
    | ReservedCacheNodeNotFoundFault
    | ServerlessCacheNotFoundFault
    | ServerlessCacheSnapshotNotFoundFault
    | SnapshotNotFoundFault
    | TagNotFoundFault
    | UserGroupNotFoundFault
    | UserNotFoundFault
    | CommonAwsError
  >;
  resetCacheParameterGroup(
    input: ResetCacheParameterGroupMessage,
  ): Effect.Effect<
    CacheParameterGroupNameMessage,
    | CacheParameterGroupNotFoundFault
    | InvalidCacheParameterGroupStateFault
    | InvalidGlobalReplicationGroupStateFault
    | InvalidParameterCombinationException
    | InvalidParameterValueException
    | CommonAwsError
  >;
  revokeCacheSecurityGroupIngress(
    input: RevokeCacheSecurityGroupIngressMessage,
  ): Effect.Effect<
    RevokeCacheSecurityGroupIngressResult,
    | AuthorizationNotFoundFault
    | CacheSecurityGroupNotFoundFault
    | InvalidCacheSecurityGroupStateFault
    | InvalidParameterCombinationException
    | InvalidParameterValueException
    | CommonAwsError
  >;
  startMigration(
    input: StartMigrationMessage,
  ): Effect.Effect<
    StartMigrationResponse,
    | InvalidParameterValueException
    | InvalidReplicationGroupStateFault
    | ReplicationGroupAlreadyUnderMigrationFault
    | ReplicationGroupNotFoundFault
    | CommonAwsError
  >;
  testFailover(
    input: TestFailoverMessage,
  ): Effect.Effect<
    TestFailoverResult,
    | APICallRateForCustomerExceededFault
    | InvalidCacheClusterStateFault
    | InvalidKMSKeyFault
    | InvalidParameterCombinationException
    | InvalidParameterValueException
    | InvalidReplicationGroupStateFault
    | NodeGroupNotFoundFault
    | ReplicationGroupNotFoundFault
    | TestFailoverNotAvailableFault
    | CommonAwsError
  >;
  testMigration(
    input: TestMigrationMessage,
  ): Effect.Effect<
    TestMigrationResponse,
    | InvalidParameterValueException
    | InvalidReplicationGroupStateFault
    | ReplicationGroupAlreadyUnderMigrationFault
    | ReplicationGroupNotFoundFault
    | CommonAwsError
  >;
}

export type Elasticache = AmazonElastiCacheV9;

export type AccessString = string;

export interface AddTagsToResourceMessage {
  ResourceName: string;
  Tags: Array<Tag>;
}
export type AllowedNodeGroupId = string;

export interface AllowedNodeTypeModificationsMessage {
  ScaleUpModifications?: Array<string>;
  ScaleDownModifications?: Array<string>;
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
export interface AuthorizeCacheSecurityGroupIngressMessage {
  CacheSecurityGroupName: string;
  EC2SecurityGroupName: string;
  EC2SecurityGroupOwnerId: string;
}
export interface AuthorizeCacheSecurityGroupIngressResult {
  CacheSecurityGroup?: CacheSecurityGroup;
}
export type AuthTokenUpdateStatus = "SETTING" | "ROTATING";
export type AuthTokenUpdateStrategyType = "SET" | "ROTATE" | "DELETE";
export type AutomaticFailoverStatus =
  | "ENABLED"
  | "DISABLED"
  | "ENABLING"
  | "DISABLING";
export interface AvailabilityZone {
  Name?: string;
}
export type AvailabilityZonesList = Array<string>;
export type AwsQueryErrorMessage = string;

export type AZMode = "SINGLE_AZ" | "CROSS_AZ";
export interface BatchApplyUpdateActionMessage {
  ReplicationGroupIds?: Array<string>;
  CacheClusterIds?: Array<string>;
  ServiceUpdateName: string;
}
export interface BatchStopUpdateActionMessage {
  ReplicationGroupIds?: Array<string>;
  CacheClusterIds?: Array<string>;
  ServiceUpdateName: string;
}
export type ElasticacheBoolean = boolean;

export type BooleanOptional = boolean;

export interface CacheCluster {
  CacheClusterId?: string;
  ConfigurationEndpoint?: Endpoint;
  ClientDownloadLandingPage?: string;
  CacheNodeType?: string;
  Engine?: string;
  EngineVersion?: string;
  CacheClusterStatus?: string;
  NumCacheNodes?: number;
  PreferredAvailabilityZone?: string;
  PreferredOutpostArn?: string;
  CacheClusterCreateTime?: Date | string;
  PreferredMaintenanceWindow?: string;
  PendingModifiedValues?: PendingModifiedValues;
  NotificationConfiguration?: NotificationConfiguration;
  CacheSecurityGroups?: Array<CacheSecurityGroupMembership>;
  CacheParameterGroup?: CacheParameterGroupStatus;
  CacheSubnetGroupName?: string;
  CacheNodes?: Array<CacheNode>;
  AutoMinorVersionUpgrade?: boolean;
  SecurityGroups?: Array<SecurityGroupMembership>;
  ReplicationGroupId?: string;
  SnapshotRetentionLimit?: number;
  SnapshotWindow?: string;
  AuthTokenEnabled?: boolean;
  AuthTokenLastModifiedDate?: Date | string;
  TransitEncryptionEnabled?: boolean;
  AtRestEncryptionEnabled?: boolean;
  ARN?: string;
  ReplicationGroupLogDeliveryEnabled?: boolean;
  LogDeliveryConfigurations?: Array<LogDeliveryConfiguration>;
  NetworkType?: NetworkType;
  IpDiscovery?: IpDiscovery;
  TransitEncryptionMode?: TransitEncryptionMode;
}
export declare class CacheClusterAlreadyExistsFault extends EffectData.TaggedError(
  "CacheClusterAlreadyExistsFault",
)<{
  readonly message?: string;
}> {}
export type CacheClusterIdList = Array<string>;
export type CacheClusterList = Array<CacheCluster>;
export interface CacheClusterMessage {
  Marker?: string;
  CacheClusters?: Array<CacheCluster>;
}
export declare class CacheClusterNotFoundFault extends EffectData.TaggedError(
  "CacheClusterNotFoundFault",
)<{
  readonly message?: string;
}> {}
export interface CacheEngineVersion {
  Engine?: string;
  EngineVersion?: string;
  CacheParameterGroupFamily?: string;
  CacheEngineDescription?: string;
  CacheEngineVersionDescription?: string;
}
export type CacheEngineVersionList = Array<CacheEngineVersion>;
export interface CacheEngineVersionMessage {
  Marker?: string;
  CacheEngineVersions?: Array<CacheEngineVersion>;
}
export interface CacheNode {
  CacheNodeId?: string;
  CacheNodeStatus?: string;
  CacheNodeCreateTime?: Date | string;
  Endpoint?: Endpoint;
  ParameterGroupStatus?: string;
  SourceCacheNodeId?: string;
  CustomerAvailabilityZone?: string;
  CustomerOutpostArn?: string;
}
export type CacheNodeIdsList = Array<string>;
export type CacheNodeList = Array<CacheNode>;
export interface CacheNodeTypeSpecificParameter {
  ParameterName?: string;
  Description?: string;
  Source?: string;
  DataType?: string;
  AllowedValues?: string;
  IsModifiable?: boolean;
  MinimumEngineVersion?: string;
  CacheNodeTypeSpecificValues?: Array<CacheNodeTypeSpecificValue>;
  ChangeType?: ChangeType;
}
export type CacheNodeTypeSpecificParametersList =
  Array<CacheNodeTypeSpecificParameter>;
export interface CacheNodeTypeSpecificValue {
  CacheNodeType?: string;
  Value?: string;
}
export type CacheNodeTypeSpecificValueList = Array<CacheNodeTypeSpecificValue>;
export interface CacheNodeUpdateStatus {
  CacheNodeId?: string;
  NodeUpdateStatus?: NodeUpdateStatus;
  NodeDeletionDate?: Date | string;
  NodeUpdateStartDate?: Date | string;
  NodeUpdateEndDate?: Date | string;
  NodeUpdateInitiatedBy?: NodeUpdateInitiatedBy;
  NodeUpdateInitiatedDate?: Date | string;
  NodeUpdateStatusModifiedDate?: Date | string;
}
export type CacheNodeUpdateStatusList = Array<CacheNodeUpdateStatus>;
export interface CacheParameterGroup {
  CacheParameterGroupName?: string;
  CacheParameterGroupFamily?: string;
  Description?: string;
  IsGlobal?: boolean;
  ARN?: string;
}
export declare class CacheParameterGroupAlreadyExistsFault extends EffectData.TaggedError(
  "CacheParameterGroupAlreadyExistsFault",
)<{
  readonly message?: string;
}> {}
export interface CacheParameterGroupDetails {
  Marker?: string;
  Parameters?: Array<Parameter>;
  CacheNodeTypeSpecificParameters?: Array<CacheNodeTypeSpecificParameter>;
}
export type CacheParameterGroupList = Array<CacheParameterGroup>;
export interface CacheParameterGroupNameMessage {
  CacheParameterGroupName?: string;
}
export declare class CacheParameterGroupNotFoundFault extends EffectData.TaggedError(
  "CacheParameterGroupNotFoundFault",
)<{
  readonly message?: string;
}> {}
export declare class CacheParameterGroupQuotaExceededFault extends EffectData.TaggedError(
  "CacheParameterGroupQuotaExceededFault",
)<{
  readonly message?: string;
}> {}
export interface CacheParameterGroupsMessage {
  Marker?: string;
  CacheParameterGroups?: Array<CacheParameterGroup>;
}
export interface CacheParameterGroupStatus {
  CacheParameterGroupName?: string;
  ParameterApplyStatus?: string;
  CacheNodeIdsToReboot?: Array<string>;
}
export interface CacheSecurityGroup {
  OwnerId?: string;
  CacheSecurityGroupName?: string;
  Description?: string;
  EC2SecurityGroups?: Array<EC2SecurityGroup>;
  ARN?: string;
}
export declare class CacheSecurityGroupAlreadyExistsFault extends EffectData.TaggedError(
  "CacheSecurityGroupAlreadyExistsFault",
)<{
  readonly message?: string;
}> {}
export interface CacheSecurityGroupMembership {
  CacheSecurityGroupName?: string;
  Status?: string;
}
export type CacheSecurityGroupMembershipList =
  Array<CacheSecurityGroupMembership>;
export interface CacheSecurityGroupMessage {
  Marker?: string;
  CacheSecurityGroups?: Array<CacheSecurityGroup>;
}
export type CacheSecurityGroupNameList = Array<string>;
export declare class CacheSecurityGroupNotFoundFault extends EffectData.TaggedError(
  "CacheSecurityGroupNotFoundFault",
)<{
  readonly message?: string;
}> {}
export declare class CacheSecurityGroupQuotaExceededFault extends EffectData.TaggedError(
  "CacheSecurityGroupQuotaExceededFault",
)<{
  readonly message?: string;
}> {}
export type CacheSecurityGroups = Array<CacheSecurityGroup>;
export interface CacheSubnetGroup {
  CacheSubnetGroupName?: string;
  CacheSubnetGroupDescription?: string;
  VpcId?: string;
  Subnets?: Array<Subnet>;
  ARN?: string;
  SupportedNetworkTypes?: Array<NetworkType>;
}
export declare class CacheSubnetGroupAlreadyExistsFault extends EffectData.TaggedError(
  "CacheSubnetGroupAlreadyExistsFault",
)<{
  readonly message?: string;
}> {}
export declare class CacheSubnetGroupInUse extends EffectData.TaggedError(
  "CacheSubnetGroupInUse",
)<{
  readonly message?: string;
}> {}
export interface CacheSubnetGroupMessage {
  Marker?: string;
  CacheSubnetGroups?: Array<CacheSubnetGroup>;
}
export declare class CacheSubnetGroupNotFoundFault extends EffectData.TaggedError(
  "CacheSubnetGroupNotFoundFault",
)<{
  readonly message?: string;
}> {}
export declare class CacheSubnetGroupQuotaExceededFault extends EffectData.TaggedError(
  "CacheSubnetGroupQuotaExceededFault",
)<{
  readonly message?: string;
}> {}
export type CacheSubnetGroups = Array<CacheSubnetGroup>;
export declare class CacheSubnetQuotaExceededFault extends EffectData.TaggedError(
  "CacheSubnetQuotaExceededFault",
)<{
  readonly message?: string;
}> {}
export interface CacheUsageLimits {
  DataStorage?: DataStorage;
  ECPUPerSecond?: ECPUPerSecond;
}
export type ChangeType = "immediate" | "requires_reboot";
export interface CloudWatchLogsDestinationDetails {
  LogGroup?: string;
}
export type ClusterIdList = Array<string>;
export type ClusterMode = "ENABLED" | "DISABLED" | "COMPATIBLE";
export declare class ClusterQuotaForCustomerExceededFault extends EffectData.TaggedError(
  "ClusterQuotaForCustomerExceededFault",
)<{
  readonly message?: string;
}> {}
export interface CompleteMigrationMessage {
  ReplicationGroupId: string;
  Force?: boolean;
}
export interface CompleteMigrationResponse {
  ReplicationGroup?: ReplicationGroup;
}
export interface ConfigureShard {
  NodeGroupId: string;
  NewReplicaCount: number;
  PreferredAvailabilityZones?: Array<string>;
  PreferredOutpostArns?: Array<string>;
}
export interface CopyServerlessCacheSnapshotRequest {
  SourceServerlessCacheSnapshotName: string;
  TargetServerlessCacheSnapshotName: string;
  KmsKeyId?: string;
  Tags?: Array<Tag>;
}
export interface CopyServerlessCacheSnapshotResponse {
  ServerlessCacheSnapshot?: ServerlessCacheSnapshot;
}
export interface CopySnapshotMessage {
  SourceSnapshotName: string;
  TargetSnapshotName: string;
  TargetBucket?: string;
  KmsKeyId?: string;
  Tags?: Array<Tag>;
}
export interface CopySnapshotResult {
  Snapshot?: Snapshot;
}
export interface CreateCacheClusterMessage {
  CacheClusterId: string;
  ReplicationGroupId?: string;
  AZMode?: AZMode;
  PreferredAvailabilityZone?: string;
  PreferredAvailabilityZones?: Array<string>;
  NumCacheNodes?: number;
  CacheNodeType?: string;
  Engine?: string;
  EngineVersion?: string;
  CacheParameterGroupName?: string;
  CacheSubnetGroupName?: string;
  CacheSecurityGroupNames?: Array<string>;
  SecurityGroupIds?: Array<string>;
  Tags?: Array<Tag>;
  SnapshotArns?: Array<string>;
  SnapshotName?: string;
  PreferredMaintenanceWindow?: string;
  Port?: number;
  NotificationTopicArn?: string;
  AutoMinorVersionUpgrade?: boolean;
  SnapshotRetentionLimit?: number;
  SnapshotWindow?: string;
  AuthToken?: string;
  OutpostMode?: OutpostMode;
  PreferredOutpostArn?: string;
  PreferredOutpostArns?: Array<string>;
  LogDeliveryConfigurations?: Array<LogDeliveryConfigurationRequest>;
  TransitEncryptionEnabled?: boolean;
  NetworkType?: NetworkType;
  IpDiscovery?: IpDiscovery;
}
export interface CreateCacheClusterResult {
  CacheCluster?: CacheCluster;
}
export interface CreateCacheParameterGroupMessage {
  CacheParameterGroupName: string;
  CacheParameterGroupFamily: string;
  Description: string;
  Tags?: Array<Tag>;
}
export interface CreateCacheParameterGroupResult {
  CacheParameterGroup?: CacheParameterGroup;
}
export interface CreateCacheSecurityGroupMessage {
  CacheSecurityGroupName: string;
  Description: string;
  Tags?: Array<Tag>;
}
export interface CreateCacheSecurityGroupResult {
  CacheSecurityGroup?: CacheSecurityGroup;
}
export interface CreateCacheSubnetGroupMessage {
  CacheSubnetGroupName: string;
  CacheSubnetGroupDescription: string;
  SubnetIds: Array<string>;
  Tags?: Array<Tag>;
}
export interface CreateCacheSubnetGroupResult {
  CacheSubnetGroup?: CacheSubnetGroup;
}
export interface CreateGlobalReplicationGroupMessage {
  GlobalReplicationGroupIdSuffix: string;
  GlobalReplicationGroupDescription?: string;
  PrimaryReplicationGroupId: string;
}
export interface CreateGlobalReplicationGroupResult {
  GlobalReplicationGroup?: GlobalReplicationGroup;
}
export interface CreateReplicationGroupMessage {
  ReplicationGroupId: string;
  ReplicationGroupDescription: string;
  GlobalReplicationGroupId?: string;
  PrimaryClusterId?: string;
  AutomaticFailoverEnabled?: boolean;
  MultiAZEnabled?: boolean;
  NumCacheClusters?: number;
  PreferredCacheClusterAZs?: Array<string>;
  NumNodeGroups?: number;
  ReplicasPerNodeGroup?: number;
  NodeGroupConfiguration?: Array<NodeGroupConfiguration>;
  CacheNodeType?: string;
  Engine?: string;
  EngineVersion?: string;
  CacheParameterGroupName?: string;
  CacheSubnetGroupName?: string;
  CacheSecurityGroupNames?: Array<string>;
  SecurityGroupIds?: Array<string>;
  Tags?: Array<Tag>;
  SnapshotArns?: Array<string>;
  SnapshotName?: string;
  PreferredMaintenanceWindow?: string;
  Port?: number;
  NotificationTopicArn?: string;
  AutoMinorVersionUpgrade?: boolean;
  SnapshotRetentionLimit?: number;
  SnapshotWindow?: string;
  AuthToken?: string;
  TransitEncryptionEnabled?: boolean;
  AtRestEncryptionEnabled?: boolean;
  KmsKeyId?: string;
  UserGroupIds?: Array<string>;
  LogDeliveryConfigurations?: Array<LogDeliveryConfigurationRequest>;
  DataTieringEnabled?: boolean;
  NetworkType?: NetworkType;
  IpDiscovery?: IpDiscovery;
  TransitEncryptionMode?: TransitEncryptionMode;
  ClusterMode?: ClusterMode;
  ServerlessCacheSnapshotName?: string;
}
export interface CreateReplicationGroupResult {
  ReplicationGroup?: ReplicationGroup;
}
export interface CreateServerlessCacheRequest {
  ServerlessCacheName: string;
  Description?: string;
  Engine: string;
  MajorEngineVersion?: string;
  CacheUsageLimits?: CacheUsageLimits;
  KmsKeyId?: string;
  SecurityGroupIds?: Array<string>;
  SnapshotArnsToRestore?: Array<string>;
  Tags?: Array<Tag>;
  UserGroupId?: string;
  SubnetIds?: Array<string>;
  SnapshotRetentionLimit?: number;
  DailySnapshotTime?: string;
}
export interface CreateServerlessCacheResponse {
  ServerlessCache?: ServerlessCache;
}
export interface CreateServerlessCacheSnapshotRequest {
  ServerlessCacheSnapshotName: string;
  ServerlessCacheName: string;
  KmsKeyId?: string;
  Tags?: Array<Tag>;
}
export interface CreateServerlessCacheSnapshotResponse {
  ServerlessCacheSnapshot?: ServerlessCacheSnapshot;
}
export interface CreateSnapshotMessage {
  ReplicationGroupId?: string;
  CacheClusterId?: string;
  SnapshotName: string;
  KmsKeyId?: string;
  Tags?: Array<Tag>;
}
export interface CreateSnapshotResult {
  Snapshot?: Snapshot;
}
export interface CreateUserGroupMessage {
  UserGroupId: string;
  Engine: string;
  UserIds?: Array<string>;
  Tags?: Array<Tag>;
}
export interface CreateUserMessage {
  UserId: string;
  UserName: string;
  Engine: string;
  Passwords?: Array<string>;
  AccessString: string;
  NoPasswordRequired?: boolean;
  Tags?: Array<Tag>;
  AuthenticationMode?: AuthenticationMode;
}
export interface CustomerNodeEndpoint {
  Address?: string;
  Port?: number;
}
export type CustomerNodeEndpointList = Array<CustomerNodeEndpoint>;
export interface DataStorage {
  Maximum?: number;
  Minimum?: number;
  Unit: DataStorageUnit;
}
export type DataStorageUnit = "GB";
export type DataTieringStatus = "ENABLED" | "DISABLED";
export interface DecreaseNodeGroupsInGlobalReplicationGroupMessage {
  GlobalReplicationGroupId: string;
  NodeGroupCount: number;
  GlobalNodeGroupsToRemove?: Array<string>;
  GlobalNodeGroupsToRetain?: Array<string>;
  ApplyImmediately: boolean;
}
export interface DecreaseNodeGroupsInGlobalReplicationGroupResult {
  GlobalReplicationGroup?: GlobalReplicationGroup;
}
export interface DecreaseReplicaCountMessage {
  ReplicationGroupId: string;
  NewReplicaCount?: number;
  ReplicaConfiguration?: Array<ConfigureShard>;
  ReplicasToRemove?: Array<string>;
  ApplyImmediately: boolean;
}
export interface DecreaseReplicaCountResult {
  ReplicationGroup?: ReplicationGroup;
}
export declare class DefaultUserAssociatedToUserGroupFault extends EffectData.TaggedError(
  "DefaultUserAssociatedToUserGroupFault",
)<{
  readonly message?: string;
}> {}
export declare class DefaultUserRequired extends EffectData.TaggedError(
  "DefaultUserRequired",
)<{
  readonly message?: string;
}> {}
export interface DeleteCacheClusterMessage {
  CacheClusterId: string;
  FinalSnapshotIdentifier?: string;
}
export interface DeleteCacheClusterResult {
  CacheCluster?: CacheCluster;
}
export interface DeleteCacheParameterGroupMessage {
  CacheParameterGroupName: string;
}
export interface DeleteCacheSecurityGroupMessage {
  CacheSecurityGroupName: string;
}
export interface DeleteCacheSubnetGroupMessage {
  CacheSubnetGroupName: string;
}
export interface DeleteGlobalReplicationGroupMessage {
  GlobalReplicationGroupId: string;
  RetainPrimaryReplicationGroup: boolean;
}
export interface DeleteGlobalReplicationGroupResult {
  GlobalReplicationGroup?: GlobalReplicationGroup;
}
export interface DeleteReplicationGroupMessage {
  ReplicationGroupId: string;
  RetainPrimaryCluster?: boolean;
  FinalSnapshotIdentifier?: string;
}
export interface DeleteReplicationGroupResult {
  ReplicationGroup?: ReplicationGroup;
}
export interface DeleteServerlessCacheRequest {
  ServerlessCacheName: string;
  FinalSnapshotName?: string;
}
export interface DeleteServerlessCacheResponse {
  ServerlessCache?: ServerlessCache;
}
export interface DeleteServerlessCacheSnapshotRequest {
  ServerlessCacheSnapshotName: string;
}
export interface DeleteServerlessCacheSnapshotResponse {
  ServerlessCacheSnapshot?: ServerlessCacheSnapshot;
}
export interface DeleteSnapshotMessage {
  SnapshotName: string;
}
export interface DeleteSnapshotResult {
  Snapshot?: Snapshot;
}
export interface DeleteUserGroupMessage {
  UserGroupId: string;
}
export interface DeleteUserMessage {
  UserId: string;
}
export interface DescribeCacheClustersMessage {
  CacheClusterId?: string;
  MaxRecords?: number;
  Marker?: string;
  ShowCacheNodeInfo?: boolean;
  ShowCacheClustersNotInReplicationGroups?: boolean;
}
export interface DescribeCacheEngineVersionsMessage {
  Engine?: string;
  EngineVersion?: string;
  CacheParameterGroupFamily?: string;
  MaxRecords?: number;
  Marker?: string;
  DefaultOnly?: boolean;
}
export interface DescribeCacheParameterGroupsMessage {
  CacheParameterGroupName?: string;
  MaxRecords?: number;
  Marker?: string;
}
export interface DescribeCacheParametersMessage {
  CacheParameterGroupName: string;
  Source?: string;
  MaxRecords?: number;
  Marker?: string;
}
export interface DescribeCacheSecurityGroupsMessage {
  CacheSecurityGroupName?: string;
  MaxRecords?: number;
  Marker?: string;
}
export interface DescribeCacheSubnetGroupsMessage {
  CacheSubnetGroupName?: string;
  MaxRecords?: number;
  Marker?: string;
}
export interface DescribeEngineDefaultParametersMessage {
  CacheParameterGroupFamily: string;
  MaxRecords?: number;
  Marker?: string;
}
export interface DescribeEngineDefaultParametersResult {
  EngineDefaults?: EngineDefaults;
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
export interface DescribeGlobalReplicationGroupsMessage {
  GlobalReplicationGroupId?: string;
  MaxRecords?: number;
  Marker?: string;
  ShowMemberInfo?: boolean;
}
export interface DescribeGlobalReplicationGroupsResult {
  Marker?: string;
  GlobalReplicationGroups?: Array<GlobalReplicationGroup>;
}
export interface DescribeReplicationGroupsMessage {
  ReplicationGroupId?: string;
  MaxRecords?: number;
  Marker?: string;
}
export interface DescribeReservedCacheNodesMessage {
  ReservedCacheNodeId?: string;
  ReservedCacheNodesOfferingId?: string;
  CacheNodeType?: string;
  Duration?: string;
  ProductDescription?: string;
  OfferingType?: string;
  MaxRecords?: number;
  Marker?: string;
}
export interface DescribeReservedCacheNodesOfferingsMessage {
  ReservedCacheNodesOfferingId?: string;
  CacheNodeType?: string;
  Duration?: string;
  ProductDescription?: string;
  OfferingType?: string;
  MaxRecords?: number;
  Marker?: string;
}
export interface DescribeServerlessCacheSnapshotsRequest {
  ServerlessCacheName?: string;
  ServerlessCacheSnapshotName?: string;
  SnapshotType?: string;
  NextToken?: string;
  MaxResults?: number;
}
export interface DescribeServerlessCacheSnapshotsResponse {
  NextToken?: string;
  ServerlessCacheSnapshots?: Array<ServerlessCacheSnapshot>;
}
export interface DescribeServerlessCachesRequest {
  ServerlessCacheName?: string;
  MaxResults?: number;
  NextToken?: string;
}
export interface DescribeServerlessCachesResponse {
  NextToken?: string;
  ServerlessCaches?: Array<ServerlessCache>;
}
export interface DescribeServiceUpdatesMessage {
  ServiceUpdateName?: string;
  ServiceUpdateStatus?: Array<ServiceUpdateStatus>;
  MaxRecords?: number;
  Marker?: string;
}
export interface DescribeSnapshotsListMessage {
  Marker?: string;
  Snapshots?: Array<Snapshot>;
}
export interface DescribeSnapshotsMessage {
  ReplicationGroupId?: string;
  CacheClusterId?: string;
  SnapshotName?: string;
  SnapshotSource?: string;
  Marker?: string;
  MaxRecords?: number;
  ShowNodeGroupConfig?: boolean;
}
export interface DescribeUpdateActionsMessage {
  ServiceUpdateName?: string;
  ReplicationGroupIds?: Array<string>;
  CacheClusterIds?: Array<string>;
  Engine?: string;
  ServiceUpdateStatus?: Array<ServiceUpdateStatus>;
  ServiceUpdateTimeRange?: TimeRangeFilter;
  UpdateActionStatus?: Array<UpdateActionStatus>;
  ShowNodeLevelUpdateStatus?: boolean;
  MaxRecords?: number;
  Marker?: string;
}
export interface DescribeUserGroupsMessage {
  UserGroupId?: string;
  MaxRecords?: number;
  Marker?: string;
}
export interface DescribeUserGroupsResult {
  UserGroups?: Array<UserGroup>;
  Marker?: string;
}
export interface DescribeUsersMessage {
  Engine?: string;
  UserId?: string;
  Filters?: Array<Filter>;
  MaxRecords?: number;
  Marker?: string;
}
export interface DescribeUsersResult {
  Users?: Array<User>;
  Marker?: string;
}
export interface DestinationDetails {
  CloudWatchLogsDetails?: CloudWatchLogsDestinationDetails;
  KinesisFirehoseDetails?: KinesisFirehoseDestinationDetails;
}
export type DestinationType = "CloudWatchLogs" | "KinesisFirehose";
export interface DisassociateGlobalReplicationGroupMessage {
  GlobalReplicationGroupId: string;
  ReplicationGroupId: string;
  ReplicationGroupRegion: string;
}
export interface DisassociateGlobalReplicationGroupResult {
  GlobalReplicationGroup?: GlobalReplicationGroup;
}
export type Double = number;

export declare class DuplicateUserNameFault extends EffectData.TaggedError(
  "DuplicateUserNameFault",
)<{
  readonly message?: string;
}> {}
export interface EC2SecurityGroup {
  Status?: string;
  EC2SecurityGroupName?: string;
  EC2SecurityGroupOwnerId?: string;
}
export type EC2SecurityGroupList = Array<EC2SecurityGroup>;
export interface ECPUPerSecond {
  Maximum?: number;
  Minimum?: number;
}
export interface Endpoint {
  Address?: string;
  Port?: number;
}
export interface EngineDefaults {
  CacheParameterGroupFamily?: string;
  Marker?: string;
  Parameters?: Array<Parameter>;
  CacheNodeTypeSpecificParameters?: Array<CacheNodeTypeSpecificParameter>;
}
export type EngineType = string;

export interface Event {
  SourceIdentifier?: string;
  SourceType?: SourceType;
  Message?: string;
  Date?: Date | string;
}
export type EventList = Array<Event>;
export interface EventsMessage {
  Marker?: string;
  Events?: Array<Event>;
}
export type ExceptionMessage = string;

export interface ExportServerlessCacheSnapshotRequest {
  ServerlessCacheSnapshotName: string;
  S3BucketName: string;
}
export interface ExportServerlessCacheSnapshotResponse {
  ServerlessCacheSnapshot?: ServerlessCacheSnapshot;
}
export interface FailoverGlobalReplicationGroupMessage {
  GlobalReplicationGroupId: string;
  PrimaryRegion: string;
  PrimaryReplicationGroupId: string;
}
export interface FailoverGlobalReplicationGroupResult {
  GlobalReplicationGroup?: GlobalReplicationGroup;
}
export interface Filter {
  Name: string;
  Values: Array<string>;
}
export type FilterList = Array<Filter>;
export type FilterName = string;

export type FilterValue = string;

export type FilterValueList = Array<string>;
export interface GlobalNodeGroup {
  GlobalNodeGroupId?: string;
  Slots?: string;
}
export type GlobalNodeGroupIdList = Array<string>;
export type GlobalNodeGroupList = Array<GlobalNodeGroup>;
export interface GlobalReplicationGroup {
  GlobalReplicationGroupId?: string;
  GlobalReplicationGroupDescription?: string;
  Status?: string;
  CacheNodeType?: string;
  Engine?: string;
  EngineVersion?: string;
  Members?: Array<GlobalReplicationGroupMember>;
  ClusterEnabled?: boolean;
  GlobalNodeGroups?: Array<GlobalNodeGroup>;
  AuthTokenEnabled?: boolean;
  TransitEncryptionEnabled?: boolean;
  AtRestEncryptionEnabled?: boolean;
  ARN?: string;
}
export declare class GlobalReplicationGroupAlreadyExistsFault extends EffectData.TaggedError(
  "GlobalReplicationGroupAlreadyExistsFault",
)<{
  readonly message?: string;
}> {}
export interface GlobalReplicationGroupInfo {
  GlobalReplicationGroupId?: string;
  GlobalReplicationGroupMemberRole?: string;
}
export type GlobalReplicationGroupList = Array<GlobalReplicationGroup>;
export interface GlobalReplicationGroupMember {
  ReplicationGroupId?: string;
  ReplicationGroupRegion?: string;
  Role?: string;
  AutomaticFailover?: AutomaticFailoverStatus;
  Status?: string;
}
export type GlobalReplicationGroupMemberList =
  Array<GlobalReplicationGroupMember>;
export declare class GlobalReplicationGroupNotFoundFault extends EffectData.TaggedError(
  "GlobalReplicationGroupNotFoundFault",
)<{
  readonly message?: string;
}> {}
export interface IncreaseNodeGroupsInGlobalReplicationGroupMessage {
  GlobalReplicationGroupId: string;
  NodeGroupCount: number;
  RegionalConfigurations?: Array<RegionalConfiguration>;
  ApplyImmediately: boolean;
}
export interface IncreaseNodeGroupsInGlobalReplicationGroupResult {
  GlobalReplicationGroup?: GlobalReplicationGroup;
}
export interface IncreaseReplicaCountMessage {
  ReplicationGroupId: string;
  NewReplicaCount?: number;
  ReplicaConfiguration?: Array<ConfigureShard>;
  ApplyImmediately: boolean;
}
export interface IncreaseReplicaCountResult {
  ReplicationGroup?: ReplicationGroup;
}
export type InputAuthenticationType = "PASSWORD" | "NO_PASSWORD" | "IAM";
export declare class InsufficientCacheClusterCapacityFault extends EffectData.TaggedError(
  "InsufficientCacheClusterCapacityFault",
)<{
  readonly message?: string;
}> {}
export type Integer = number;

export type IntegerOptional = number;

export declare class InvalidARNFault extends EffectData.TaggedError(
  "InvalidARNFault",
)<{
  readonly message?: string;
}> {}
export declare class InvalidCacheClusterStateFault extends EffectData.TaggedError(
  "InvalidCacheClusterStateFault",
)<{
  readonly message?: string;
}> {}
export declare class InvalidCacheParameterGroupStateFault extends EffectData.TaggedError(
  "InvalidCacheParameterGroupStateFault",
)<{
  readonly message?: string;
}> {}
export declare class InvalidCacheSecurityGroupStateFault extends EffectData.TaggedError(
  "InvalidCacheSecurityGroupStateFault",
)<{
  readonly message?: string;
}> {}
export declare class InvalidCredentialsException extends EffectData.TaggedError(
  "InvalidCredentialsException",
)<{
  readonly message?: string;
}> {}
export declare class InvalidGlobalReplicationGroupStateFault extends EffectData.TaggedError(
  "InvalidGlobalReplicationGroupStateFault",
)<{
  readonly message?: string;
}> {}
export declare class InvalidKMSKeyFault extends EffectData.TaggedError(
  "InvalidKMSKeyFault",
)<{
  readonly message?: string;
}> {}
export declare class InvalidParameterCombinationException extends EffectData.TaggedError(
  "InvalidParameterCombinationException",
)<{
  readonly message?: string;
}> {}
export declare class InvalidParameterValueException extends EffectData.TaggedError(
  "InvalidParameterValueException",
)<{
  readonly message?: string;
}> {}
export declare class InvalidReplicationGroupStateFault extends EffectData.TaggedError(
  "InvalidReplicationGroupStateFault",
)<{
  readonly message?: string;
}> {}
export declare class InvalidServerlessCacheSnapshotStateFault extends EffectData.TaggedError(
  "InvalidServerlessCacheSnapshotStateFault",
)<{
  readonly message?: string;
}> {}
export declare class InvalidServerlessCacheStateFault extends EffectData.TaggedError(
  "InvalidServerlessCacheStateFault",
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
export declare class InvalidUserGroupStateFault extends EffectData.TaggedError(
  "InvalidUserGroupStateFault",
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
export interface KinesisFirehoseDestinationDetails {
  DeliveryStream?: string;
}
export interface ListAllowedNodeTypeModificationsMessage {
  CacheClusterId?: string;
  ReplicationGroupId?: string;
}
export interface ListTagsForResourceMessage {
  ResourceName: string;
}
export interface LogDeliveryConfiguration {
  LogType?: LogType;
  DestinationType?: DestinationType;
  DestinationDetails?: DestinationDetails;
  LogFormat?: LogFormat;
  Status?: LogDeliveryConfigurationStatus;
  Message?: string;
}
export type LogDeliveryConfigurationList = Array<LogDeliveryConfiguration>;
export interface LogDeliveryConfigurationRequest {
  LogType?: LogType;
  DestinationType?: DestinationType;
  DestinationDetails?: DestinationDetails;
  LogFormat?: LogFormat;
  Enabled?: boolean;
}
export type LogDeliveryConfigurationRequestList =
  Array<LogDeliveryConfigurationRequest>;
export type LogDeliveryConfigurationStatus =
  | "ACTIVE"
  | "ENABLING"
  | "MODIFYING"
  | "DISABLING"
  | "ERROR";
export type LogFormat = "TEXT" | "JSON";
export type LogType = "SLOW_LOG" | "ENGINE_LOG";
export interface ModifyCacheClusterMessage {
  CacheClusterId: string;
  NumCacheNodes?: number;
  CacheNodeIdsToRemove?: Array<string>;
  AZMode?: AZMode;
  NewAvailabilityZones?: Array<string>;
  CacheSecurityGroupNames?: Array<string>;
  SecurityGroupIds?: Array<string>;
  PreferredMaintenanceWindow?: string;
  NotificationTopicArn?: string;
  CacheParameterGroupName?: string;
  NotificationTopicStatus?: string;
  ApplyImmediately?: boolean;
  Engine?: string;
  EngineVersion?: string;
  AutoMinorVersionUpgrade?: boolean;
  SnapshotRetentionLimit?: number;
  SnapshotWindow?: string;
  CacheNodeType?: string;
  AuthToken?: string;
  AuthTokenUpdateStrategy?: AuthTokenUpdateStrategyType;
  LogDeliveryConfigurations?: Array<LogDeliveryConfigurationRequest>;
  IpDiscovery?: IpDiscovery;
  ScaleConfig?: ScaleConfig;
}
export interface ModifyCacheClusterResult {
  CacheCluster?: CacheCluster;
}
export interface ModifyCacheParameterGroupMessage {
  CacheParameterGroupName: string;
  ParameterNameValues: Array<ParameterNameValue>;
}
export interface ModifyCacheSubnetGroupMessage {
  CacheSubnetGroupName: string;
  CacheSubnetGroupDescription?: string;
  SubnetIds?: Array<string>;
}
export interface ModifyCacheSubnetGroupResult {
  CacheSubnetGroup?: CacheSubnetGroup;
}
export interface ModifyGlobalReplicationGroupMessage {
  GlobalReplicationGroupId: string;
  ApplyImmediately: boolean;
  CacheNodeType?: string;
  Engine?: string;
  EngineVersion?: string;
  CacheParameterGroupName?: string;
  GlobalReplicationGroupDescription?: string;
  AutomaticFailoverEnabled?: boolean;
}
export interface ModifyGlobalReplicationGroupResult {
  GlobalReplicationGroup?: GlobalReplicationGroup;
}
export interface ModifyReplicationGroupMessage {
  ReplicationGroupId: string;
  ReplicationGroupDescription?: string;
  PrimaryClusterId?: string;
  SnapshottingClusterId?: string;
  AutomaticFailoverEnabled?: boolean;
  MultiAZEnabled?: boolean;
  NodeGroupId?: string;
  CacheSecurityGroupNames?: Array<string>;
  SecurityGroupIds?: Array<string>;
  PreferredMaintenanceWindow?: string;
  NotificationTopicArn?: string;
  CacheParameterGroupName?: string;
  NotificationTopicStatus?: string;
  ApplyImmediately?: boolean;
  Engine?: string;
  EngineVersion?: string;
  AutoMinorVersionUpgrade?: boolean;
  SnapshotRetentionLimit?: number;
  SnapshotWindow?: string;
  CacheNodeType?: string;
  AuthToken?: string;
  AuthTokenUpdateStrategy?: AuthTokenUpdateStrategyType;
  UserGroupIdsToAdd?: Array<string>;
  UserGroupIdsToRemove?: Array<string>;
  RemoveUserGroups?: boolean;
  LogDeliveryConfigurations?: Array<LogDeliveryConfigurationRequest>;
  IpDiscovery?: IpDiscovery;
  TransitEncryptionEnabled?: boolean;
  TransitEncryptionMode?: TransitEncryptionMode;
  ClusterMode?: ClusterMode;
}
export interface ModifyReplicationGroupResult {
  ReplicationGroup?: ReplicationGroup;
}
export interface ModifyReplicationGroupShardConfigurationMessage {
  ReplicationGroupId: string;
  NodeGroupCount: number;
  ApplyImmediately: boolean;
  ReshardingConfiguration?: Array<ReshardingConfiguration>;
  NodeGroupsToRemove?: Array<string>;
  NodeGroupsToRetain?: Array<string>;
}
export interface ModifyReplicationGroupShardConfigurationResult {
  ReplicationGroup?: ReplicationGroup;
}
export interface ModifyServerlessCacheRequest {
  ServerlessCacheName: string;
  Description?: string;
  CacheUsageLimits?: CacheUsageLimits;
  RemoveUserGroup?: boolean;
  UserGroupId?: string;
  SecurityGroupIds?: Array<string>;
  SnapshotRetentionLimit?: number;
  DailySnapshotTime?: string;
  Engine?: string;
  MajorEngineVersion?: string;
}
export interface ModifyServerlessCacheResponse {
  ServerlessCache?: ServerlessCache;
}
export interface ModifyUserGroupMessage {
  UserGroupId: string;
  UserIdsToAdd?: Array<string>;
  UserIdsToRemove?: Array<string>;
  Engine?: string;
}
export interface ModifyUserMessage {
  UserId: string;
  AccessString?: string;
  AppendAccessString?: string;
  Passwords?: Array<string>;
  NoPasswordRequired?: boolean;
  AuthenticationMode?: AuthenticationMode;
  Engine?: string;
}
export type MultiAZStatus = "ENABLED" | "DISABLED";
export type NetworkType = "IPV4" | "IPV6" | "DUAL_STACK";
export type NetworkTypeList = Array<NetworkType>;
export interface NodeGroup {
  NodeGroupId?: string;
  Status?: string;
  PrimaryEndpoint?: Endpoint;
  ReaderEndpoint?: Endpoint;
  Slots?: string;
  NodeGroupMembers?: Array<NodeGroupMember>;
}
export interface NodeGroupConfiguration {
  NodeGroupId?: string;
  Slots?: string;
  ReplicaCount?: number;
  PrimaryAvailabilityZone?: string;
  ReplicaAvailabilityZones?: Array<string>;
  PrimaryOutpostArn?: string;
  ReplicaOutpostArns?: Array<string>;
}
export type NodeGroupConfigurationList = Array<NodeGroupConfiguration>;
export type NodeGroupList = Array<NodeGroup>;
export interface NodeGroupMember {
  CacheClusterId?: string;
  CacheNodeId?: string;
  ReadEndpoint?: Endpoint;
  PreferredAvailabilityZone?: string;
  PreferredOutpostArn?: string;
  CurrentRole?: string;
}
export type NodeGroupMemberList = Array<NodeGroupMember>;
export interface NodeGroupMemberUpdateStatus {
  CacheClusterId?: string;
  CacheNodeId?: string;
  NodeUpdateStatus?: NodeUpdateStatus;
  NodeDeletionDate?: Date | string;
  NodeUpdateStartDate?: Date | string;
  NodeUpdateEndDate?: Date | string;
  NodeUpdateInitiatedBy?: NodeUpdateInitiatedBy;
  NodeUpdateInitiatedDate?: Date | string;
  NodeUpdateStatusModifiedDate?: Date | string;
}
export type NodeGroupMemberUpdateStatusList =
  Array<NodeGroupMemberUpdateStatus>;
export declare class NodeGroupNotFoundFault extends EffectData.TaggedError(
  "NodeGroupNotFoundFault",
)<{
  readonly message?: string;
}> {}
export declare class NodeGroupsPerReplicationGroupQuotaExceededFault extends EffectData.TaggedError(
  "NodeGroupsPerReplicationGroupQuotaExceededFault",
)<{
  readonly message?: string;
}> {}
export type NodeGroupsToRemoveList = Array<string>;
export type NodeGroupsToRetainList = Array<string>;
export interface NodeGroupUpdateStatus {
  NodeGroupId?: string;
  NodeGroupMemberUpdateStatus?: Array<NodeGroupMemberUpdateStatus>;
}
export type NodeGroupUpdateStatusList = Array<NodeGroupUpdateStatus>;
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
export interface NodeSnapshot {
  CacheClusterId?: string;
  NodeGroupId?: string;
  CacheNodeId?: string;
  NodeGroupConfiguration?: NodeGroupConfiguration;
  CacheSize?: string;
  CacheNodeCreateTime?: Date | string;
  SnapshotCreateTime?: Date | string;
}
export type NodeSnapshotList = Array<NodeSnapshot>;
export type NodeTypeList = Array<string>;
export type NodeUpdateInitiatedBy = "SYSTEM" | "CUSTOMER";
export type NodeUpdateStatus =
  | "NOT_APPLIED"
  | "WAITING_TO_START"
  | "IN_PROGRESS"
  | "STOPPING"
  | "STOPPED"
  | "COMPLETE";
export declare class NoOperationFault extends EffectData.TaggedError(
  "NoOperationFault",
)<{
  readonly message?: string;
}> {}
export interface NotificationConfiguration {
  TopicArn?: string;
  TopicStatus?: string;
}
export type OutpostArnsList = Array<string>;
export type OutpostMode = "SINGLE_OUTPOST" | "CROSS_OUTPOST";
export interface Parameter {
  ParameterName?: string;
  ParameterValue?: string;
  Description?: string;
  Source?: string;
  DataType?: string;
  AllowedValues?: string;
  IsModifiable?: boolean;
  MinimumEngineVersion?: string;
  ChangeType?: ChangeType;
}
export interface ParameterNameValue {
  ParameterName?: string;
  ParameterValue?: string;
}
export type ParameterNameValueList = Array<ParameterNameValue>;
export type ParametersList = Array<Parameter>;
export type PasswordListInput = Array<string>;
export type PendingAutomaticFailoverStatus = "ENABLED" | "DISABLED";
export interface PendingLogDeliveryConfiguration {
  LogType?: LogType;
  DestinationType?: DestinationType;
  DestinationDetails?: DestinationDetails;
  LogFormat?: LogFormat;
}
export type PendingLogDeliveryConfigurationList =
  Array<PendingLogDeliveryConfiguration>;
export interface PendingModifiedValues {
  NumCacheNodes?: number;
  CacheNodeIdsToRemove?: Array<string>;
  EngineVersion?: string;
  CacheNodeType?: string;
  AuthTokenStatus?: AuthTokenUpdateStatus;
  LogDeliveryConfigurations?: Array<PendingLogDeliveryConfiguration>;
  TransitEncryptionEnabled?: boolean;
  TransitEncryptionMode?: TransitEncryptionMode;
  ScaleConfig?: ScaleConfig;
}
export type PreferredAvailabilityZoneList = Array<string>;
export type PreferredOutpostArnList = Array<string>;
export interface ProcessedUpdateAction {
  ReplicationGroupId?: string;
  CacheClusterId?: string;
  ServiceUpdateName?: string;
  UpdateActionStatus?: UpdateActionStatus;
}
export type ProcessedUpdateActionList = Array<ProcessedUpdateAction>;
export interface PurchaseReservedCacheNodesOfferingMessage {
  ReservedCacheNodesOfferingId: string;
  ReservedCacheNodeId?: string;
  CacheNodeCount?: number;
  Tags?: Array<Tag>;
}
export interface PurchaseReservedCacheNodesOfferingResult {
  ReservedCacheNode?: ReservedCacheNode;
}
export interface RebalanceSlotsInGlobalReplicationGroupMessage {
  GlobalReplicationGroupId: string;
  ApplyImmediately: boolean;
}
export interface RebalanceSlotsInGlobalReplicationGroupResult {
  GlobalReplicationGroup?: GlobalReplicationGroup;
}
export interface RebootCacheClusterMessage {
  CacheClusterId: string;
  CacheNodeIdsToReboot: Array<string>;
}
export interface RebootCacheClusterResult {
  CacheCluster?: CacheCluster;
}
export interface RecurringCharge {
  RecurringChargeAmount?: number;
  RecurringChargeFrequency?: string;
}
export type RecurringChargeList = Array<RecurringCharge>;
export interface RegionalConfiguration {
  ReplicationGroupId: string;
  ReplicationGroupRegion: string;
  ReshardingConfiguration: Array<ReshardingConfiguration>;
}
export type RegionalConfigurationList = Array<RegionalConfiguration>;
export type RemoveReplicasList = Array<string>;
export interface RemoveTagsFromResourceMessage {
  ResourceName: string;
  TagKeys: Array<string>;
}
export type ReplicaConfigurationList = Array<ConfigureShard>;
export interface ReplicationGroup {
  ReplicationGroupId?: string;
  Description?: string;
  GlobalReplicationGroupInfo?: GlobalReplicationGroupInfo;
  Status?: string;
  PendingModifiedValues?: ReplicationGroupPendingModifiedValues;
  MemberClusters?: Array<string>;
  NodeGroups?: Array<NodeGroup>;
  SnapshottingClusterId?: string;
  AutomaticFailover?: AutomaticFailoverStatus;
  MultiAZ?: MultiAZStatus;
  ConfigurationEndpoint?: Endpoint;
  SnapshotRetentionLimit?: number;
  SnapshotWindow?: string;
  ClusterEnabled?: boolean;
  CacheNodeType?: string;
  AuthTokenEnabled?: boolean;
  AuthTokenLastModifiedDate?: Date | string;
  TransitEncryptionEnabled?: boolean;
  AtRestEncryptionEnabled?: boolean;
  MemberClustersOutpostArns?: Array<string>;
  KmsKeyId?: string;
  ARN?: string;
  UserGroupIds?: Array<string>;
  LogDeliveryConfigurations?: Array<LogDeliveryConfiguration>;
  ReplicationGroupCreateTime?: Date | string;
  DataTiering?: DataTieringStatus;
  AutoMinorVersionUpgrade?: boolean;
  NetworkType?: NetworkType;
  IpDiscovery?: IpDiscovery;
  TransitEncryptionMode?: TransitEncryptionMode;
  ClusterMode?: ClusterMode;
  Engine?: string;
}
export declare class ReplicationGroupAlreadyExistsFault extends EffectData.TaggedError(
  "ReplicationGroupAlreadyExistsFault",
)<{
  readonly message?: string;
}> {}
export declare class ReplicationGroupAlreadyUnderMigrationFault extends EffectData.TaggedError(
  "ReplicationGroupAlreadyUnderMigrationFault",
)<{
  readonly message?: string;
}> {}
export type ReplicationGroupIdList = Array<string>;
export type ReplicationGroupList = Array<ReplicationGroup>;
export interface ReplicationGroupMessage {
  Marker?: string;
  ReplicationGroups?: Array<ReplicationGroup>;
}
export declare class ReplicationGroupNotFoundFault extends EffectData.TaggedError(
  "ReplicationGroupNotFoundFault",
)<{
  readonly message?: string;
}> {}
export declare class ReplicationGroupNotUnderMigrationFault extends EffectData.TaggedError(
  "ReplicationGroupNotUnderMigrationFault",
)<{
  readonly message?: string;
}> {}
export type ReplicationGroupOutpostArnList = Array<string>;
export interface ReplicationGroupPendingModifiedValues {
  PrimaryClusterId?: string;
  AutomaticFailoverStatus?: PendingAutomaticFailoverStatus;
  Resharding?: ReshardingStatus;
  AuthTokenStatus?: AuthTokenUpdateStatus;
  UserGroups?: UserGroupsUpdateStatus;
  LogDeliveryConfigurations?: Array<PendingLogDeliveryConfiguration>;
  TransitEncryptionEnabled?: boolean;
  TransitEncryptionMode?: TransitEncryptionMode;
  ClusterMode?: ClusterMode;
}
export interface ReservedCacheNode {
  ReservedCacheNodeId?: string;
  ReservedCacheNodesOfferingId?: string;
  CacheNodeType?: string;
  StartTime?: Date | string;
  Duration?: number;
  FixedPrice?: number;
  UsagePrice?: number;
  CacheNodeCount?: number;
  ProductDescription?: string;
  OfferingType?: string;
  State?: string;
  RecurringCharges?: Array<RecurringCharge>;
  ReservationARN?: string;
}
export declare class ReservedCacheNodeAlreadyExistsFault extends EffectData.TaggedError(
  "ReservedCacheNodeAlreadyExistsFault",
)<{
  readonly message?: string;
}> {}
export type ReservedCacheNodeList = Array<ReservedCacheNode>;
export interface ReservedCacheNodeMessage {
  Marker?: string;
  ReservedCacheNodes?: Array<ReservedCacheNode>;
}
export declare class ReservedCacheNodeNotFoundFault extends EffectData.TaggedError(
  "ReservedCacheNodeNotFoundFault",
)<{
  readonly message?: string;
}> {}
export declare class ReservedCacheNodeQuotaExceededFault extends EffectData.TaggedError(
  "ReservedCacheNodeQuotaExceededFault",
)<{
  readonly message?: string;
}> {}
export interface ReservedCacheNodesOffering {
  ReservedCacheNodesOfferingId?: string;
  CacheNodeType?: string;
  Duration?: number;
  FixedPrice?: number;
  UsagePrice?: number;
  ProductDescription?: string;
  OfferingType?: string;
  RecurringCharges?: Array<RecurringCharge>;
}
export type ReservedCacheNodesOfferingList = Array<ReservedCacheNodesOffering>;
export interface ReservedCacheNodesOfferingMessage {
  Marker?: string;
  ReservedCacheNodesOfferings?: Array<ReservedCacheNodesOffering>;
}
export declare class ReservedCacheNodesOfferingNotFoundFault extends EffectData.TaggedError(
  "ReservedCacheNodesOfferingNotFoundFault",
)<{
  readonly message?: string;
}> {}
export interface ResetCacheParameterGroupMessage {
  CacheParameterGroupName: string;
  ResetAllParameters?: boolean;
  ParameterNameValues?: Array<ParameterNameValue>;
}
export interface ReshardingConfiguration {
  NodeGroupId?: string;
  PreferredAvailabilityZones?: Array<string>;
}
export type ReshardingConfigurationList = Array<ReshardingConfiguration>;
export interface ReshardingStatus {
  SlotMigration?: SlotMigration;
}
export interface RevokeCacheSecurityGroupIngressMessage {
  CacheSecurityGroupName: string;
  EC2SecurityGroupName: string;
  EC2SecurityGroupOwnerId: string;
}
export interface RevokeCacheSecurityGroupIngressResult {
  CacheSecurityGroup?: CacheSecurityGroup;
}
export interface ScaleConfig {
  ScalePercentage?: number;
  ScaleIntervalMinutes?: number;
}
export type SecurityGroupIdsList = Array<string>;
export interface SecurityGroupMembership {
  SecurityGroupId?: string;
  Status?: string;
}
export type SecurityGroupMembershipList = Array<SecurityGroupMembership>;
export interface ServerlessCache {
  ServerlessCacheName?: string;
  Description?: string;
  CreateTime?: Date | string;
  Status?: string;
  Engine?: string;
  MajorEngineVersion?: string;
  FullEngineVersion?: string;
  CacheUsageLimits?: CacheUsageLimits;
  KmsKeyId?: string;
  SecurityGroupIds?: Array<string>;
  Endpoint?: Endpoint;
  ReaderEndpoint?: Endpoint;
  ARN?: string;
  UserGroupId?: string;
  SubnetIds?: Array<string>;
  SnapshotRetentionLimit?: number;
  DailySnapshotTime?: string;
}
export declare class ServerlessCacheAlreadyExistsFault extends EffectData.TaggedError(
  "ServerlessCacheAlreadyExistsFault",
)<{
  readonly message?: string;
}> {}
export interface ServerlessCacheConfiguration {
  ServerlessCacheName?: string;
  Engine?: string;
  MajorEngineVersion?: string;
}
export type ServerlessCacheList = Array<ServerlessCache>;
export declare class ServerlessCacheNotFoundFault extends EffectData.TaggedError(
  "ServerlessCacheNotFoundFault",
)<{
  readonly message?: string;
}> {}
export declare class ServerlessCacheQuotaForCustomerExceededFault extends EffectData.TaggedError(
  "ServerlessCacheQuotaForCustomerExceededFault",
)<{
  readonly message?: string;
}> {}
export interface ServerlessCacheSnapshot {
  ServerlessCacheSnapshotName?: string;
  ARN?: string;
  KmsKeyId?: string;
  SnapshotType?: string;
  Status?: string;
  CreateTime?: Date | string;
  ExpiryTime?: Date | string;
  BytesUsedForCache?: string;
  ServerlessCacheConfiguration?: ServerlessCacheConfiguration;
}
export declare class ServerlessCacheSnapshotAlreadyExistsFault extends EffectData.TaggedError(
  "ServerlessCacheSnapshotAlreadyExistsFault",
)<{
  readonly message?: string;
}> {}
export type ServerlessCacheSnapshotList = Array<ServerlessCacheSnapshot>;
export declare class ServerlessCacheSnapshotNotFoundFault extends EffectData.TaggedError(
  "ServerlessCacheSnapshotNotFoundFault",
)<{
  readonly message?: string;
}> {}
export declare class ServerlessCacheSnapshotQuotaExceededFault extends EffectData.TaggedError(
  "ServerlessCacheSnapshotQuotaExceededFault",
)<{
  readonly message?: string;
}> {}
export declare class ServiceLinkedRoleNotFoundFault extends EffectData.TaggedError(
  "ServiceLinkedRoleNotFoundFault",
)<{
  readonly message?: string;
}> {}
export interface ServiceUpdate {
  ServiceUpdateName?: string;
  ServiceUpdateReleaseDate?: Date | string;
  ServiceUpdateEndDate?: Date | string;
  ServiceUpdateSeverity?: ServiceUpdateSeverity;
  ServiceUpdateRecommendedApplyByDate?: Date | string;
  ServiceUpdateStatus?: ServiceUpdateStatus;
  ServiceUpdateDescription?: string;
  ServiceUpdateType?: ServiceUpdateType;
  Engine?: string;
  EngineVersion?: string;
  AutoUpdateAfterRecommendedApplyByDate?: boolean;
  EstimatedUpdateTime?: string;
}
export type ServiceUpdateList = Array<ServiceUpdate>;
export declare class ServiceUpdateNotFoundFault extends EffectData.TaggedError(
  "ServiceUpdateNotFoundFault",
)<{
  readonly message?: string;
}> {}
export type ServiceUpdateSeverity = "CRITICAL" | "IMPORTANT" | "MEDIUM" | "LOW";
export interface ServiceUpdatesMessage {
  Marker?: string;
  ServiceUpdates?: Array<ServiceUpdate>;
}
export type ServiceUpdateStatus = "AVAILABLE" | "CANCELLED" | "EXPIRED";
export type ServiceUpdateStatusList = Array<ServiceUpdateStatus>;
export type ServiceUpdateType = "SECURITY_UPDATE";
export type SlaMet = "YES" | "NO" | "NA";
export interface SlotMigration {
  ProgressPercentage?: number;
}
export interface Snapshot {
  SnapshotName?: string;
  ReplicationGroupId?: string;
  ReplicationGroupDescription?: string;
  CacheClusterId?: string;
  SnapshotStatus?: string;
  SnapshotSource?: string;
  CacheNodeType?: string;
  Engine?: string;
  EngineVersion?: string;
  NumCacheNodes?: number;
  PreferredAvailabilityZone?: string;
  PreferredOutpostArn?: string;
  CacheClusterCreateTime?: Date | string;
  PreferredMaintenanceWindow?: string;
  TopicArn?: string;
  Port?: number;
  CacheParameterGroupName?: string;
  CacheSubnetGroupName?: string;
  VpcId?: string;
  AutoMinorVersionUpgrade?: boolean;
  SnapshotRetentionLimit?: number;
  SnapshotWindow?: string;
  NumNodeGroups?: number;
  AutomaticFailover?: AutomaticFailoverStatus;
  NodeSnapshots?: Array<NodeSnapshot>;
  KmsKeyId?: string;
  ARN?: string;
  DataTiering?: DataTieringStatus;
}
export declare class SnapshotAlreadyExistsFault extends EffectData.TaggedError(
  "SnapshotAlreadyExistsFault",
)<{
  readonly message?: string;
}> {}
export type SnapshotArnsList = Array<string>;
export declare class SnapshotFeatureNotSupportedFault extends EffectData.TaggedError(
  "SnapshotFeatureNotSupportedFault",
)<{
  readonly message?: string;
}> {}
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
  | "cache_cluster"
  | "cache_parameter_group"
  | "cache_security_group"
  | "cache_subnet_group"
  | "replication_group"
  | "serverless_cache"
  | "serverless_cache_snapshot"
  | "user"
  | "user_group";
export interface StartMigrationMessage {
  ReplicationGroupId: string;
  CustomerNodeEndpointList: Array<CustomerNodeEndpoint>;
}
export interface StartMigrationResponse {
  ReplicationGroup?: ReplicationGroup;
}
export type ElasticacheString = string;

export interface Subnet {
  SubnetIdentifier?: string;
  SubnetAvailabilityZone?: AvailabilityZone;
  SubnetOutpost?: SubnetOutpost;
  SupportedNetworkTypes?: Array<NetworkType>;
}
export type SubnetIdentifierList = Array<string>;
export type SubnetIdsList = Array<string>;
export declare class SubnetInUse extends EffectData.TaggedError("SubnetInUse")<{
  readonly message?: string;
}> {}
export type SubnetList = Array<Subnet>;
export declare class SubnetNotAllowedFault extends EffectData.TaggedError(
  "SubnetNotAllowedFault",
)<{
  readonly message?: string;
}> {}
export interface SubnetOutpost {
  SubnetOutpostArn?: string;
}
export interface Tag {
  Key?: string;
  Value?: string;
}
export type TagList = Array<Tag>;
export interface TagListMessage {
  TagList?: Array<Tag>;
}
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
export interface TestFailoverMessage {
  ReplicationGroupId: string;
  NodeGroupId: string;
}
export declare class TestFailoverNotAvailableFault extends EffectData.TaggedError(
  "TestFailoverNotAvailableFault",
)<{
  readonly message?: string;
}> {}
export interface TestFailoverResult {
  ReplicationGroup?: ReplicationGroup;
}
export interface TestMigrationMessage {
  ReplicationGroupId: string;
  CustomerNodeEndpointList: Array<CustomerNodeEndpoint>;
}
export interface TestMigrationResponse {
  ReplicationGroup?: ReplicationGroup;
}
export interface TimeRangeFilter {
  StartTime?: Date | string;
  EndTime?: Date | string;
}
export type TransitEncryptionMode = "PREFERRED" | "REQUIRED";
export type TStamp = Date | string;

export type UGReplicationGroupIdList = Array<string>;
export type UGServerlessCacheIdList = Array<string>;
export interface UnprocessedUpdateAction {
  ReplicationGroupId?: string;
  CacheClusterId?: string;
  ServiceUpdateName?: string;
  ErrorType?: string;
  ErrorMessage?: string;
}
export type UnprocessedUpdateActionList = Array<UnprocessedUpdateAction>;
export interface UpdateAction {
  ReplicationGroupId?: string;
  CacheClusterId?: string;
  ServiceUpdateName?: string;
  ServiceUpdateReleaseDate?: Date | string;
  ServiceUpdateSeverity?: ServiceUpdateSeverity;
  ServiceUpdateStatus?: ServiceUpdateStatus;
  ServiceUpdateRecommendedApplyByDate?: Date | string;
  ServiceUpdateType?: ServiceUpdateType;
  UpdateActionAvailableDate?: Date | string;
  UpdateActionStatus?: UpdateActionStatus;
  NodesUpdated?: string;
  UpdateActionStatusModifiedDate?: Date | string;
  SlaMet?: SlaMet;
  NodeGroupUpdateStatus?: Array<NodeGroupUpdateStatus>;
  CacheNodeUpdateStatus?: Array<CacheNodeUpdateStatus>;
  EstimatedUpdateTime?: string;
  Engine?: string;
}
export type UpdateActionList = Array<UpdateAction>;
export interface UpdateActionResultsMessage {
  ProcessedUpdateActions?: Array<ProcessedUpdateAction>;
  UnprocessedUpdateActions?: Array<UnprocessedUpdateAction>;
}
export interface UpdateActionsMessage {
  Marker?: string;
  UpdateActions?: Array<UpdateAction>;
}
export type UpdateActionStatus =
  | "NOT_APPLIED"
  | "WAITING_TO_START"
  | "IN_PROGRESS"
  | "STOPPING"
  | "STOPPED"
  | "COMPLETE"
  | "SCHEDULING"
  | "SCHEDULED"
  | "NOT_APPLICABLE";
export type UpdateActionStatusList = Array<UpdateActionStatus>;
export interface User {
  UserId?: string;
  UserName?: string;
  Status?: string;
  Engine?: string;
  MinimumEngineVersion?: string;
  AccessString?: string;
  UserGroupIds?: Array<string>;
  Authentication?: Authentication;
  ARN?: string;
}
export declare class UserAlreadyExistsFault extends EffectData.TaggedError(
  "UserAlreadyExistsFault",
)<{
  readonly message?: string;
}> {}
export interface UserGroup {
  UserGroupId?: string;
  Status?: string;
  Engine?: string;
  UserIds?: Array<string>;
  MinimumEngineVersion?: string;
  PendingChanges?: UserGroupPendingChanges;
  ReplicationGroups?: Array<string>;
  ServerlessCaches?: Array<string>;
  ARN?: string;
}
export declare class UserGroupAlreadyExistsFault extends EffectData.TaggedError(
  "UserGroupAlreadyExistsFault",
)<{
  readonly message?: string;
}> {}
export type UserGroupId = string;

export type UserGroupIdList = Array<string>;
export type UserGroupIdListInput = Array<string>;
export type UserGroupList = Array<UserGroup>;
export declare class UserGroupNotFoundFault extends EffectData.TaggedError(
  "UserGroupNotFoundFault",
)<{
  readonly message?: string;
}> {}
export interface UserGroupPendingChanges {
  UserIdsToRemove?: Array<string>;
  UserIdsToAdd?: Array<string>;
}
export declare class UserGroupQuotaExceededFault extends EffectData.TaggedError(
  "UserGroupQuotaExceededFault",
)<{
  readonly message?: string;
}> {}
export interface UserGroupsUpdateStatus {
  UserGroupIdsToAdd?: Array<string>;
  UserGroupIdsToRemove?: Array<string>;
}
export type UserId = string;

export type UserIdList = Array<string>;
export type UserIdListInput = Array<string>;
export type UserList = Array<User>;
export type UserName = string;

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
export declare namespace AddTagsToResource {
  export type Input = AddTagsToResourceMessage;
  export type Output = TagListMessage;
  export type Error =
    | CacheClusterNotFoundFault
    | CacheParameterGroupNotFoundFault
    | CacheSecurityGroupNotFoundFault
    | CacheSubnetGroupNotFoundFault
    | InvalidARNFault
    | InvalidReplicationGroupStateFault
    | InvalidServerlessCacheSnapshotStateFault
    | InvalidServerlessCacheStateFault
    | ReplicationGroupNotFoundFault
    | ReservedCacheNodeNotFoundFault
    | ServerlessCacheNotFoundFault
    | ServerlessCacheSnapshotNotFoundFault
    | SnapshotNotFoundFault
    | TagQuotaPerResourceExceeded
    | UserGroupNotFoundFault
    | UserNotFoundFault
    | CommonAwsError;
}

export declare namespace AuthorizeCacheSecurityGroupIngress {
  export type Input = AuthorizeCacheSecurityGroupIngressMessage;
  export type Output = AuthorizeCacheSecurityGroupIngressResult;
  export type Error =
    | AuthorizationAlreadyExistsFault
    | CacheSecurityGroupNotFoundFault
    | InvalidCacheSecurityGroupStateFault
    | InvalidParameterCombinationException
    | InvalidParameterValueException
    | CommonAwsError;
}

export declare namespace BatchApplyUpdateAction {
  export type Input = BatchApplyUpdateActionMessage;
  export type Output = UpdateActionResultsMessage;
  export type Error =
    | InvalidParameterValueException
    | ServiceUpdateNotFoundFault
    | CommonAwsError;
}

export declare namespace BatchStopUpdateAction {
  export type Input = BatchStopUpdateActionMessage;
  export type Output = UpdateActionResultsMessage;
  export type Error =
    | InvalidParameterValueException
    | ServiceUpdateNotFoundFault
    | CommonAwsError;
}

export declare namespace CompleteMigration {
  export type Input = CompleteMigrationMessage;
  export type Output = CompleteMigrationResponse;
  export type Error =
    | InvalidReplicationGroupStateFault
    | ReplicationGroupNotFoundFault
    | ReplicationGroupNotUnderMigrationFault
    | CommonAwsError;
}

export declare namespace CopyServerlessCacheSnapshot {
  export type Input = CopyServerlessCacheSnapshotRequest;
  export type Output = CopyServerlessCacheSnapshotResponse;
  export type Error =
    | InvalidParameterCombinationException
    | InvalidParameterValueException
    | InvalidServerlessCacheSnapshotStateFault
    | ServerlessCacheSnapshotAlreadyExistsFault
    | ServerlessCacheSnapshotNotFoundFault
    | ServerlessCacheSnapshotQuotaExceededFault
    | ServiceLinkedRoleNotFoundFault
    | TagQuotaPerResourceExceeded
    | CommonAwsError;
}

export declare namespace CopySnapshot {
  export type Input = CopySnapshotMessage;
  export type Output = CopySnapshotResult;
  export type Error =
    | InvalidParameterCombinationException
    | InvalidParameterValueException
    | InvalidSnapshotStateFault
    | SnapshotAlreadyExistsFault
    | SnapshotNotFoundFault
    | SnapshotQuotaExceededFault
    | TagQuotaPerResourceExceeded
    | CommonAwsError;
}

export declare namespace CreateCacheCluster {
  export type Input = CreateCacheClusterMessage;
  export type Output = CreateCacheClusterResult;
  export type Error =
    | CacheClusterAlreadyExistsFault
    | CacheParameterGroupNotFoundFault
    | CacheSecurityGroupNotFoundFault
    | CacheSubnetGroupNotFoundFault
    | ClusterQuotaForCustomerExceededFault
    | InsufficientCacheClusterCapacityFault
    | InvalidParameterCombinationException
    | InvalidParameterValueException
    | InvalidReplicationGroupStateFault
    | InvalidVPCNetworkStateFault
    | NodeQuotaForClusterExceededFault
    | NodeQuotaForCustomerExceededFault
    | ReplicationGroupNotFoundFault
    | TagQuotaPerResourceExceeded
    | CommonAwsError;
}

export declare namespace CreateCacheParameterGroup {
  export type Input = CreateCacheParameterGroupMessage;
  export type Output = CreateCacheParameterGroupResult;
  export type Error =
    | CacheParameterGroupAlreadyExistsFault
    | CacheParameterGroupQuotaExceededFault
    | InvalidCacheParameterGroupStateFault
    | InvalidParameterCombinationException
    | InvalidParameterValueException
    | TagQuotaPerResourceExceeded
    | CommonAwsError;
}

export declare namespace CreateCacheSecurityGroup {
  export type Input = CreateCacheSecurityGroupMessage;
  export type Output = CreateCacheSecurityGroupResult;
  export type Error =
    | CacheSecurityGroupAlreadyExistsFault
    | CacheSecurityGroupQuotaExceededFault
    | InvalidParameterCombinationException
    | InvalidParameterValueException
    | TagQuotaPerResourceExceeded
    | CommonAwsError;
}

export declare namespace CreateCacheSubnetGroup {
  export type Input = CreateCacheSubnetGroupMessage;
  export type Output = CreateCacheSubnetGroupResult;
  export type Error =
    | CacheSubnetGroupAlreadyExistsFault
    | CacheSubnetGroupQuotaExceededFault
    | CacheSubnetQuotaExceededFault
    | InvalidSubnet
    | SubnetNotAllowedFault
    | TagQuotaPerResourceExceeded
    | CommonAwsError;
}

export declare namespace CreateGlobalReplicationGroup {
  export type Input = CreateGlobalReplicationGroupMessage;
  export type Output = CreateGlobalReplicationGroupResult;
  export type Error =
    | GlobalReplicationGroupAlreadyExistsFault
    | InvalidParameterValueException
    | InvalidReplicationGroupStateFault
    | ReplicationGroupNotFoundFault
    | ServiceLinkedRoleNotFoundFault
    | CommonAwsError;
}

export declare namespace CreateReplicationGroup {
  export type Input = CreateReplicationGroupMessage;
  export type Output = CreateReplicationGroupResult;
  export type Error =
    | CacheClusterNotFoundFault
    | CacheParameterGroupNotFoundFault
    | CacheSecurityGroupNotFoundFault
    | CacheSubnetGroupNotFoundFault
    | ClusterQuotaForCustomerExceededFault
    | GlobalReplicationGroupNotFoundFault
    | InsufficientCacheClusterCapacityFault
    | InvalidCacheClusterStateFault
    | InvalidGlobalReplicationGroupStateFault
    | InvalidParameterCombinationException
    | InvalidParameterValueException
    | InvalidUserGroupStateFault
    | InvalidVPCNetworkStateFault
    | NodeGroupsPerReplicationGroupQuotaExceededFault
    | NodeQuotaForClusterExceededFault
    | NodeQuotaForCustomerExceededFault
    | ReplicationGroupAlreadyExistsFault
    | TagQuotaPerResourceExceeded
    | UserGroupNotFoundFault
    | CommonAwsError;
}

export declare namespace CreateServerlessCache {
  export type Input = CreateServerlessCacheRequest;
  export type Output = CreateServerlessCacheResponse;
  export type Error =
    | InvalidCredentialsException
    | InvalidParameterCombinationException
    | InvalidParameterValueException
    | InvalidServerlessCacheStateFault
    | InvalidUserGroupStateFault
    | ServerlessCacheAlreadyExistsFault
    | ServerlessCacheNotFoundFault
    | ServerlessCacheQuotaForCustomerExceededFault
    | ServiceLinkedRoleNotFoundFault
    | TagQuotaPerResourceExceeded
    | UserGroupNotFoundFault
    | CommonAwsError;
}

export declare namespace CreateServerlessCacheSnapshot {
  export type Input = CreateServerlessCacheSnapshotRequest;
  export type Output = CreateServerlessCacheSnapshotResponse;
  export type Error =
    | InvalidParameterCombinationException
    | InvalidParameterValueException
    | InvalidServerlessCacheStateFault
    | ServerlessCacheNotFoundFault
    | ServerlessCacheSnapshotAlreadyExistsFault
    | ServerlessCacheSnapshotQuotaExceededFault
    | ServiceLinkedRoleNotFoundFault
    | TagQuotaPerResourceExceeded
    | CommonAwsError;
}

export declare namespace CreateSnapshot {
  export type Input = CreateSnapshotMessage;
  export type Output = CreateSnapshotResult;
  export type Error =
    | CacheClusterNotFoundFault
    | InvalidCacheClusterStateFault
    | InvalidParameterCombinationException
    | InvalidParameterValueException
    | InvalidReplicationGroupStateFault
    | ReplicationGroupNotFoundFault
    | SnapshotAlreadyExistsFault
    | SnapshotFeatureNotSupportedFault
    | SnapshotQuotaExceededFault
    | TagQuotaPerResourceExceeded
    | CommonAwsError;
}

export declare namespace CreateUser {
  export type Input = CreateUserMessage;
  export type Output = User;
  export type Error =
    | DuplicateUserNameFault
    | InvalidParameterCombinationException
    | InvalidParameterValueException
    | ServiceLinkedRoleNotFoundFault
    | TagQuotaPerResourceExceeded
    | UserAlreadyExistsFault
    | UserQuotaExceededFault
    | CommonAwsError;
}

export declare namespace CreateUserGroup {
  export type Input = CreateUserGroupMessage;
  export type Output = UserGroup;
  export type Error =
    | DefaultUserRequired
    | DuplicateUserNameFault
    | InvalidParameterValueException
    | ServiceLinkedRoleNotFoundFault
    | TagQuotaPerResourceExceeded
    | UserGroupAlreadyExistsFault
    | UserGroupQuotaExceededFault
    | UserNotFoundFault
    | CommonAwsError;
}

export declare namespace DecreaseNodeGroupsInGlobalReplicationGroup {
  export type Input = DecreaseNodeGroupsInGlobalReplicationGroupMessage;
  export type Output = DecreaseNodeGroupsInGlobalReplicationGroupResult;
  export type Error =
    | GlobalReplicationGroupNotFoundFault
    | InvalidGlobalReplicationGroupStateFault
    | InvalidParameterCombinationException
    | InvalidParameterValueException
    | CommonAwsError;
}

export declare namespace DecreaseReplicaCount {
  export type Input = DecreaseReplicaCountMessage;
  export type Output = DecreaseReplicaCountResult;
  export type Error =
    | ClusterQuotaForCustomerExceededFault
    | InsufficientCacheClusterCapacityFault
    | InvalidCacheClusterStateFault
    | InvalidParameterCombinationException
    | InvalidParameterValueException
    | InvalidReplicationGroupStateFault
    | InvalidVPCNetworkStateFault
    | NodeGroupsPerReplicationGroupQuotaExceededFault
    | NodeQuotaForCustomerExceededFault
    | NoOperationFault
    | ReplicationGroupNotFoundFault
    | ServiceLinkedRoleNotFoundFault
    | CommonAwsError;
}

export declare namespace DeleteCacheCluster {
  export type Input = DeleteCacheClusterMessage;
  export type Output = DeleteCacheClusterResult;
  export type Error =
    | CacheClusterNotFoundFault
    | InvalidCacheClusterStateFault
    | InvalidParameterCombinationException
    | InvalidParameterValueException
    | SnapshotAlreadyExistsFault
    | SnapshotFeatureNotSupportedFault
    | SnapshotQuotaExceededFault
    | CommonAwsError;
}

export declare namespace DeleteCacheParameterGroup {
  export type Input = DeleteCacheParameterGroupMessage;
  export type Output = {};
  export type Error =
    | CacheParameterGroupNotFoundFault
    | InvalidCacheParameterGroupStateFault
    | InvalidParameterCombinationException
    | InvalidParameterValueException
    | CommonAwsError;
}

export declare namespace DeleteCacheSecurityGroup {
  export type Input = DeleteCacheSecurityGroupMessage;
  export type Output = {};
  export type Error =
    | CacheSecurityGroupNotFoundFault
    | InvalidCacheSecurityGroupStateFault
    | InvalidParameterCombinationException
    | InvalidParameterValueException
    | CommonAwsError;
}

export declare namespace DeleteCacheSubnetGroup {
  export type Input = DeleteCacheSubnetGroupMessage;
  export type Output = {};
  export type Error =
    | CacheSubnetGroupInUse
    | CacheSubnetGroupNotFoundFault
    | CommonAwsError;
}

export declare namespace DeleteGlobalReplicationGroup {
  export type Input = DeleteGlobalReplicationGroupMessage;
  export type Output = DeleteGlobalReplicationGroupResult;
  export type Error =
    | GlobalReplicationGroupNotFoundFault
    | InvalidGlobalReplicationGroupStateFault
    | InvalidParameterValueException
    | CommonAwsError;
}

export declare namespace DeleteReplicationGroup {
  export type Input = DeleteReplicationGroupMessage;
  export type Output = DeleteReplicationGroupResult;
  export type Error =
    | InvalidParameterCombinationException
    | InvalidParameterValueException
    | InvalidReplicationGroupStateFault
    | ReplicationGroupNotFoundFault
    | SnapshotAlreadyExistsFault
    | SnapshotFeatureNotSupportedFault
    | SnapshotQuotaExceededFault
    | CommonAwsError;
}

export declare namespace DeleteServerlessCache {
  export type Input = DeleteServerlessCacheRequest;
  export type Output = DeleteServerlessCacheResponse;
  export type Error =
    | InvalidCredentialsException
    | InvalidParameterCombinationException
    | InvalidParameterValueException
    | InvalidServerlessCacheStateFault
    | ServerlessCacheNotFoundFault
    | ServerlessCacheSnapshotAlreadyExistsFault
    | ServiceLinkedRoleNotFoundFault
    | CommonAwsError;
}

export declare namespace DeleteServerlessCacheSnapshot {
  export type Input = DeleteServerlessCacheSnapshotRequest;
  export type Output = DeleteServerlessCacheSnapshotResponse;
  export type Error =
    | InvalidParameterValueException
    | InvalidServerlessCacheSnapshotStateFault
    | ServerlessCacheSnapshotNotFoundFault
    | ServiceLinkedRoleNotFoundFault
    | CommonAwsError;
}

export declare namespace DeleteSnapshot {
  export type Input = DeleteSnapshotMessage;
  export type Output = DeleteSnapshotResult;
  export type Error =
    | InvalidParameterCombinationException
    | InvalidParameterValueException
    | InvalidSnapshotStateFault
    | SnapshotNotFoundFault
    | CommonAwsError;
}

export declare namespace DeleteUser {
  export type Input = DeleteUserMessage;
  export type Output = User;
  export type Error =
    | DefaultUserAssociatedToUserGroupFault
    | InvalidParameterValueException
    | InvalidUserStateFault
    | ServiceLinkedRoleNotFoundFault
    | UserNotFoundFault
    | CommonAwsError;
}

export declare namespace DeleteUserGroup {
  export type Input = DeleteUserGroupMessage;
  export type Output = UserGroup;
  export type Error =
    | InvalidParameterValueException
    | InvalidUserGroupStateFault
    | ServiceLinkedRoleNotFoundFault
    | UserGroupNotFoundFault
    | CommonAwsError;
}

export declare namespace DescribeCacheClusters {
  export type Input = DescribeCacheClustersMessage;
  export type Output = CacheClusterMessage;
  export type Error =
    | CacheClusterNotFoundFault
    | InvalidParameterCombinationException
    | InvalidParameterValueException
    | CommonAwsError;
}

export declare namespace DescribeCacheEngineVersions {
  export type Input = DescribeCacheEngineVersionsMessage;
  export type Output = CacheEngineVersionMessage;
  export type Error = CommonAwsError;
}

export declare namespace DescribeCacheParameterGroups {
  export type Input = DescribeCacheParameterGroupsMessage;
  export type Output = CacheParameterGroupsMessage;
  export type Error =
    | CacheParameterGroupNotFoundFault
    | InvalidParameterCombinationException
    | InvalidParameterValueException
    | CommonAwsError;
}

export declare namespace DescribeCacheParameters {
  export type Input = DescribeCacheParametersMessage;
  export type Output = CacheParameterGroupDetails;
  export type Error =
    | CacheParameterGroupNotFoundFault
    | InvalidParameterCombinationException
    | InvalidParameterValueException
    | CommonAwsError;
}

export declare namespace DescribeCacheSecurityGroups {
  export type Input = DescribeCacheSecurityGroupsMessage;
  export type Output = CacheSecurityGroupMessage;
  export type Error =
    | CacheSecurityGroupNotFoundFault
    | InvalidParameterCombinationException
    | InvalidParameterValueException
    | CommonAwsError;
}

export declare namespace DescribeCacheSubnetGroups {
  export type Input = DescribeCacheSubnetGroupsMessage;
  export type Output = CacheSubnetGroupMessage;
  export type Error = CacheSubnetGroupNotFoundFault | CommonAwsError;
}

export declare namespace DescribeEngineDefaultParameters {
  export type Input = DescribeEngineDefaultParametersMessage;
  export type Output = DescribeEngineDefaultParametersResult;
  export type Error =
    | InvalidParameterCombinationException
    | InvalidParameterValueException
    | CommonAwsError;
}

export declare namespace DescribeEvents {
  export type Input = DescribeEventsMessage;
  export type Output = EventsMessage;
  export type Error =
    | InvalidParameterCombinationException
    | InvalidParameterValueException
    | CommonAwsError;
}

export declare namespace DescribeGlobalReplicationGroups {
  export type Input = DescribeGlobalReplicationGroupsMessage;
  export type Output = DescribeGlobalReplicationGroupsResult;
  export type Error =
    | GlobalReplicationGroupNotFoundFault
    | InvalidParameterCombinationException
    | InvalidParameterValueException
    | CommonAwsError;
}

export declare namespace DescribeReplicationGroups {
  export type Input = DescribeReplicationGroupsMessage;
  export type Output = ReplicationGroupMessage;
  export type Error =
    | InvalidParameterCombinationException
    | InvalidParameterValueException
    | ReplicationGroupNotFoundFault
    | CommonAwsError;
}

export declare namespace DescribeReservedCacheNodes {
  export type Input = DescribeReservedCacheNodesMessage;
  export type Output = ReservedCacheNodeMessage;
  export type Error =
    | InvalidParameterCombinationException
    | InvalidParameterValueException
    | ReservedCacheNodeNotFoundFault
    | CommonAwsError;
}

export declare namespace DescribeReservedCacheNodesOfferings {
  export type Input = DescribeReservedCacheNodesOfferingsMessage;
  export type Output = ReservedCacheNodesOfferingMessage;
  export type Error =
    | InvalidParameterCombinationException
    | InvalidParameterValueException
    | ReservedCacheNodesOfferingNotFoundFault
    | CommonAwsError;
}

export declare namespace DescribeServerlessCaches {
  export type Input = DescribeServerlessCachesRequest;
  export type Output = DescribeServerlessCachesResponse;
  export type Error =
    | InvalidParameterCombinationException
    | InvalidParameterValueException
    | ServerlessCacheNotFoundFault
    | CommonAwsError;
}

export declare namespace DescribeServerlessCacheSnapshots {
  export type Input = DescribeServerlessCacheSnapshotsRequest;
  export type Output = DescribeServerlessCacheSnapshotsResponse;
  export type Error =
    | InvalidParameterCombinationException
    | InvalidParameterValueException
    | ServerlessCacheNotFoundFault
    | ServerlessCacheSnapshotNotFoundFault
    | CommonAwsError;
}

export declare namespace DescribeServiceUpdates {
  export type Input = DescribeServiceUpdatesMessage;
  export type Output = ServiceUpdatesMessage;
  export type Error =
    | InvalidParameterCombinationException
    | InvalidParameterValueException
    | ServiceUpdateNotFoundFault
    | CommonAwsError;
}

export declare namespace DescribeSnapshots {
  export type Input = DescribeSnapshotsMessage;
  export type Output = DescribeSnapshotsListMessage;
  export type Error =
    | CacheClusterNotFoundFault
    | InvalidParameterCombinationException
    | InvalidParameterValueException
    | SnapshotNotFoundFault
    | CommonAwsError;
}

export declare namespace DescribeUpdateActions {
  export type Input = DescribeUpdateActionsMessage;
  export type Output = UpdateActionsMessage;
  export type Error =
    | InvalidParameterCombinationException
    | InvalidParameterValueException
    | CommonAwsError;
}

export declare namespace DescribeUserGroups {
  export type Input = DescribeUserGroupsMessage;
  export type Output = DescribeUserGroupsResult;
  export type Error =
    | InvalidParameterCombinationException
    | ServiceLinkedRoleNotFoundFault
    | UserGroupNotFoundFault
    | CommonAwsError;
}

export declare namespace DescribeUsers {
  export type Input = DescribeUsersMessage;
  export type Output = DescribeUsersResult;
  export type Error =
    | InvalidParameterCombinationException
    | ServiceLinkedRoleNotFoundFault
    | UserNotFoundFault
    | CommonAwsError;
}

export declare namespace DisassociateGlobalReplicationGroup {
  export type Input = DisassociateGlobalReplicationGroupMessage;
  export type Output = DisassociateGlobalReplicationGroupResult;
  export type Error =
    | GlobalReplicationGroupNotFoundFault
    | InvalidGlobalReplicationGroupStateFault
    | InvalidParameterCombinationException
    | InvalidParameterValueException
    | CommonAwsError;
}

export declare namespace ExportServerlessCacheSnapshot {
  export type Input = ExportServerlessCacheSnapshotRequest;
  export type Output = ExportServerlessCacheSnapshotResponse;
  export type Error =
    | InvalidParameterValueException
    | InvalidServerlessCacheSnapshotStateFault
    | ServerlessCacheSnapshotNotFoundFault
    | ServiceLinkedRoleNotFoundFault
    | CommonAwsError;
}

export declare namespace FailoverGlobalReplicationGroup {
  export type Input = FailoverGlobalReplicationGroupMessage;
  export type Output = FailoverGlobalReplicationGroupResult;
  export type Error =
    | GlobalReplicationGroupNotFoundFault
    | InvalidGlobalReplicationGroupStateFault
    | InvalidParameterCombinationException
    | InvalidParameterValueException
    | CommonAwsError;
}

export declare namespace IncreaseNodeGroupsInGlobalReplicationGroup {
  export type Input = IncreaseNodeGroupsInGlobalReplicationGroupMessage;
  export type Output = IncreaseNodeGroupsInGlobalReplicationGroupResult;
  export type Error =
    | GlobalReplicationGroupNotFoundFault
    | InvalidGlobalReplicationGroupStateFault
    | InvalidParameterValueException
    | CommonAwsError;
}

export declare namespace IncreaseReplicaCount {
  export type Input = IncreaseReplicaCountMessage;
  export type Output = IncreaseReplicaCountResult;
  export type Error =
    | ClusterQuotaForCustomerExceededFault
    | InsufficientCacheClusterCapacityFault
    | InvalidCacheClusterStateFault
    | InvalidKMSKeyFault
    | InvalidParameterCombinationException
    | InvalidParameterValueException
    | InvalidReplicationGroupStateFault
    | InvalidVPCNetworkStateFault
    | NodeGroupsPerReplicationGroupQuotaExceededFault
    | NodeQuotaForCustomerExceededFault
    | NoOperationFault
    | ReplicationGroupNotFoundFault
    | CommonAwsError;
}

export declare namespace ListAllowedNodeTypeModifications {
  export type Input = ListAllowedNodeTypeModificationsMessage;
  export type Output = AllowedNodeTypeModificationsMessage;
  export type Error =
    | CacheClusterNotFoundFault
    | InvalidParameterCombinationException
    | InvalidParameterValueException
    | ReplicationGroupNotFoundFault
    | CommonAwsError;
}

export declare namespace ListTagsForResource {
  export type Input = ListTagsForResourceMessage;
  export type Output = TagListMessage;
  export type Error =
    | CacheClusterNotFoundFault
    | CacheParameterGroupNotFoundFault
    | CacheSecurityGroupNotFoundFault
    | CacheSubnetGroupNotFoundFault
    | InvalidARNFault
    | InvalidReplicationGroupStateFault
    | InvalidServerlessCacheSnapshotStateFault
    | InvalidServerlessCacheStateFault
    | ReplicationGroupNotFoundFault
    | ReservedCacheNodeNotFoundFault
    | ServerlessCacheNotFoundFault
    | ServerlessCacheSnapshotNotFoundFault
    | SnapshotNotFoundFault
    | UserGroupNotFoundFault
    | UserNotFoundFault
    | CommonAwsError;
}

export declare namespace ModifyCacheCluster {
  export type Input = ModifyCacheClusterMessage;
  export type Output = ModifyCacheClusterResult;
  export type Error =
    | CacheClusterNotFoundFault
    | CacheParameterGroupNotFoundFault
    | CacheSecurityGroupNotFoundFault
    | InsufficientCacheClusterCapacityFault
    | InvalidCacheClusterStateFault
    | InvalidCacheSecurityGroupStateFault
    | InvalidParameterCombinationException
    | InvalidParameterValueException
    | InvalidVPCNetworkStateFault
    | NodeQuotaForClusterExceededFault
    | NodeQuotaForCustomerExceededFault
    | CommonAwsError;
}

export declare namespace ModifyCacheParameterGroup {
  export type Input = ModifyCacheParameterGroupMessage;
  export type Output = CacheParameterGroupNameMessage;
  export type Error =
    | CacheParameterGroupNotFoundFault
    | InvalidCacheParameterGroupStateFault
    | InvalidGlobalReplicationGroupStateFault
    | InvalidParameterCombinationException
    | InvalidParameterValueException
    | CommonAwsError;
}

export declare namespace ModifyCacheSubnetGroup {
  export type Input = ModifyCacheSubnetGroupMessage;
  export type Output = ModifyCacheSubnetGroupResult;
  export type Error =
    | CacheSubnetGroupNotFoundFault
    | CacheSubnetQuotaExceededFault
    | InvalidSubnet
    | SubnetInUse
    | SubnetNotAllowedFault
    | CommonAwsError;
}

export declare namespace ModifyGlobalReplicationGroup {
  export type Input = ModifyGlobalReplicationGroupMessage;
  export type Output = ModifyGlobalReplicationGroupResult;
  export type Error =
    | GlobalReplicationGroupNotFoundFault
    | InvalidGlobalReplicationGroupStateFault
    | InvalidParameterValueException
    | CommonAwsError;
}

export declare namespace ModifyReplicationGroup {
  export type Input = ModifyReplicationGroupMessage;
  export type Output = ModifyReplicationGroupResult;
  export type Error =
    | CacheClusterNotFoundFault
    | CacheParameterGroupNotFoundFault
    | CacheSecurityGroupNotFoundFault
    | InsufficientCacheClusterCapacityFault
    | InvalidCacheClusterStateFault
    | InvalidCacheSecurityGroupStateFault
    | InvalidKMSKeyFault
    | InvalidParameterCombinationException
    | InvalidParameterValueException
    | InvalidReplicationGroupStateFault
    | InvalidUserGroupStateFault
    | InvalidVPCNetworkStateFault
    | NodeQuotaForClusterExceededFault
    | NodeQuotaForCustomerExceededFault
    | ReplicationGroupNotFoundFault
    | UserGroupNotFoundFault
    | CommonAwsError;
}

export declare namespace ModifyReplicationGroupShardConfiguration {
  export type Input = ModifyReplicationGroupShardConfigurationMessage;
  export type Output = ModifyReplicationGroupShardConfigurationResult;
  export type Error =
    | InsufficientCacheClusterCapacityFault
    | InvalidCacheClusterStateFault
    | InvalidKMSKeyFault
    | InvalidParameterCombinationException
    | InvalidParameterValueException
    | InvalidReplicationGroupStateFault
    | InvalidVPCNetworkStateFault
    | NodeGroupsPerReplicationGroupQuotaExceededFault
    | NodeQuotaForCustomerExceededFault
    | ReplicationGroupNotFoundFault
    | CommonAwsError;
}

export declare namespace ModifyServerlessCache {
  export type Input = ModifyServerlessCacheRequest;
  export type Output = ModifyServerlessCacheResponse;
  export type Error =
    | InvalidCredentialsException
    | InvalidParameterCombinationException
    | InvalidParameterValueException
    | InvalidServerlessCacheStateFault
    | InvalidUserGroupStateFault
    | ServerlessCacheNotFoundFault
    | ServiceLinkedRoleNotFoundFault
    | UserGroupNotFoundFault
    | CommonAwsError;
}

export declare namespace ModifyUser {
  export type Input = ModifyUserMessage;
  export type Output = User;
  export type Error =
    | InvalidParameterCombinationException
    | InvalidParameterValueException
    | InvalidUserStateFault
    | ServiceLinkedRoleNotFoundFault
    | UserNotFoundFault
    | CommonAwsError;
}

export declare namespace ModifyUserGroup {
  export type Input = ModifyUserGroupMessage;
  export type Output = UserGroup;
  export type Error =
    | DefaultUserRequired
    | DuplicateUserNameFault
    | InvalidParameterCombinationException
    | InvalidParameterValueException
    | InvalidUserGroupStateFault
    | ServiceLinkedRoleNotFoundFault
    | UserGroupNotFoundFault
    | UserNotFoundFault
    | CommonAwsError;
}

export declare namespace PurchaseReservedCacheNodesOffering {
  export type Input = PurchaseReservedCacheNodesOfferingMessage;
  export type Output = PurchaseReservedCacheNodesOfferingResult;
  export type Error =
    | InvalidParameterCombinationException
    | InvalidParameterValueException
    | ReservedCacheNodeAlreadyExistsFault
    | ReservedCacheNodeQuotaExceededFault
    | ReservedCacheNodesOfferingNotFoundFault
    | TagQuotaPerResourceExceeded
    | CommonAwsError;
}

export declare namespace RebalanceSlotsInGlobalReplicationGroup {
  export type Input = RebalanceSlotsInGlobalReplicationGroupMessage;
  export type Output = RebalanceSlotsInGlobalReplicationGroupResult;
  export type Error =
    | GlobalReplicationGroupNotFoundFault
    | InvalidGlobalReplicationGroupStateFault
    | InvalidParameterValueException
    | CommonAwsError;
}

export declare namespace RebootCacheCluster {
  export type Input = RebootCacheClusterMessage;
  export type Output = RebootCacheClusterResult;
  export type Error =
    | CacheClusterNotFoundFault
    | InvalidCacheClusterStateFault
    | CommonAwsError;
}

export declare namespace RemoveTagsFromResource {
  export type Input = RemoveTagsFromResourceMessage;
  export type Output = TagListMessage;
  export type Error =
    | CacheClusterNotFoundFault
    | CacheParameterGroupNotFoundFault
    | CacheSecurityGroupNotFoundFault
    | CacheSubnetGroupNotFoundFault
    | InvalidARNFault
    | InvalidReplicationGroupStateFault
    | InvalidServerlessCacheSnapshotStateFault
    | InvalidServerlessCacheStateFault
    | ReplicationGroupNotFoundFault
    | ReservedCacheNodeNotFoundFault
    | ServerlessCacheNotFoundFault
    | ServerlessCacheSnapshotNotFoundFault
    | SnapshotNotFoundFault
    | TagNotFoundFault
    | UserGroupNotFoundFault
    | UserNotFoundFault
    | CommonAwsError;
}

export declare namespace ResetCacheParameterGroup {
  export type Input = ResetCacheParameterGroupMessage;
  export type Output = CacheParameterGroupNameMessage;
  export type Error =
    | CacheParameterGroupNotFoundFault
    | InvalidCacheParameterGroupStateFault
    | InvalidGlobalReplicationGroupStateFault
    | InvalidParameterCombinationException
    | InvalidParameterValueException
    | CommonAwsError;
}

export declare namespace RevokeCacheSecurityGroupIngress {
  export type Input = RevokeCacheSecurityGroupIngressMessage;
  export type Output = RevokeCacheSecurityGroupIngressResult;
  export type Error =
    | AuthorizationNotFoundFault
    | CacheSecurityGroupNotFoundFault
    | InvalidCacheSecurityGroupStateFault
    | InvalidParameterCombinationException
    | InvalidParameterValueException
    | CommonAwsError;
}

export declare namespace StartMigration {
  export type Input = StartMigrationMessage;
  export type Output = StartMigrationResponse;
  export type Error =
    | InvalidParameterValueException
    | InvalidReplicationGroupStateFault
    | ReplicationGroupAlreadyUnderMigrationFault
    | ReplicationGroupNotFoundFault
    | CommonAwsError;
}

export declare namespace TestFailover {
  export type Input = TestFailoverMessage;
  export type Output = TestFailoverResult;
  export type Error =
    | APICallRateForCustomerExceededFault
    | InvalidCacheClusterStateFault
    | InvalidKMSKeyFault
    | InvalidParameterCombinationException
    | InvalidParameterValueException
    | InvalidReplicationGroupStateFault
    | NodeGroupNotFoundFault
    | ReplicationGroupNotFoundFault
    | TestFailoverNotAvailableFault
    | CommonAwsError;
}

export declare namespace TestMigration {
  export type Input = TestMigrationMessage;
  export type Output = TestMigrationResponse;
  export type Error =
    | InvalidParameterValueException
    | InvalidReplicationGroupStateFault
    | ReplicationGroupAlreadyUnderMigrationFault
    | ReplicationGroupNotFoundFault
    | CommonAwsError;
}
