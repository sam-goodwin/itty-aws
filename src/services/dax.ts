import type { Effect, Data } from "effect";
import type { CommonAwsError } from "../error.ts";

export interface AmazonDAXV3 {
  createCluster(
    input: CreateClusterRequest,
  ): Effect.Effect<
    CreateClusterResponse,
    | ClusterAlreadyExistsFault
    | ClusterQuotaForCustomerExceededFault
    | InsufficientClusterCapacityFault
    | InvalidClusterStateFault
    | InvalidParameterCombinationException
    | InvalidParameterGroupStateFault
    | InvalidParameterValueException
    | InvalidVPCNetworkStateFault
    | NodeQuotaForClusterExceededFault
    | NodeQuotaForCustomerExceededFault
    | ParameterGroupNotFoundFault
    | ServiceLinkedRoleNotFoundFault
    | ServiceQuotaExceededException
    | SubnetGroupNotFoundFault
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
    | SubnetQuotaExceededFault
    | CommonAwsError
  >;
  decreaseReplicationFactor(
    input: DecreaseReplicationFactorRequest,
  ): Effect.Effect<
    DecreaseReplicationFactorResponse,
    | ClusterNotFoundFault
    | InvalidClusterStateFault
    | InvalidParameterCombinationException
    | InvalidParameterValueException
    | NodeNotFoundFault
    | ServiceLinkedRoleNotFoundFault
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
  deleteSubnetGroup(
    input: DeleteSubnetGroupRequest,
  ): Effect.Effect<
    DeleteSubnetGroupResponse,
    | ServiceLinkedRoleNotFoundFault
    | SubnetGroupInUseFault
    | SubnetGroupNotFoundFault
    | CommonAwsError
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
  describeDefaultParameters(
    input: DescribeDefaultParametersRequest,
  ): Effect.Effect<
    DescribeDefaultParametersResponse,
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
  describeSubnetGroups(
    input: DescribeSubnetGroupsRequest,
  ): Effect.Effect<
    DescribeSubnetGroupsResponse,
    ServiceLinkedRoleNotFoundFault | SubnetGroupNotFoundFault | CommonAwsError
  >;
  increaseReplicationFactor(
    input: IncreaseReplicationFactorRequest,
  ): Effect.Effect<
    IncreaseReplicationFactorResponse,
    | ClusterNotFoundFault
    | InsufficientClusterCapacityFault
    | InvalidClusterStateFault
    | InvalidParameterCombinationException
    | InvalidParameterValueException
    | InvalidVPCNetworkStateFault
    | NodeQuotaForClusterExceededFault
    | NodeQuotaForCustomerExceededFault
    | ServiceLinkedRoleNotFoundFault
    | CommonAwsError
  >;
  listTags(
    input: ListTagsRequest,
  ): Effect.Effect<
    ListTagsResponse,
    | ClusterNotFoundFault
    | InvalidARNFault
    | InvalidClusterStateFault
    | InvalidParameterCombinationException
    | InvalidParameterValueException
    | ServiceLinkedRoleNotFoundFault
    | CommonAwsError
  >;
  rebootNode(
    input: RebootNodeRequest,
  ): Effect.Effect<
    RebootNodeResponse,
    | ClusterNotFoundFault
    | InvalidClusterStateFault
    | InvalidParameterCombinationException
    | InvalidParameterValueException
    | NodeNotFoundFault
    | ServiceLinkedRoleNotFoundFault
    | CommonAwsError
  >;
  tagResource(
    input: TagResourceRequest,
  ): Effect.Effect<
    TagResourceResponse,
    | ClusterNotFoundFault
    | InvalidARNFault
    | InvalidClusterStateFault
    | InvalidParameterCombinationException
    | InvalidParameterValueException
    | ServiceLinkedRoleNotFoundFault
    | TagQuotaPerResourceExceeded
    | CommonAwsError
  >;
  untagResource(
    input: UntagResourceRequest,
  ): Effect.Effect<
    UntagResourceResponse,
    | ClusterNotFoundFault
    | InvalidARNFault
    | InvalidClusterStateFault
    | InvalidParameterCombinationException
    | InvalidParameterValueException
    | ServiceLinkedRoleNotFoundFault
    | TagNotFoundFault
    | CommonAwsError
  >;
  updateCluster(
    input: UpdateClusterRequest,
  ): Effect.Effect<
    UpdateClusterResponse,
    | ClusterNotFoundFault
    | InvalidClusterStateFault
    | InvalidParameterCombinationException
    | InvalidParameterGroupStateFault
    | InvalidParameterValueException
    | ParameterGroupNotFoundFault
    | ServiceLinkedRoleNotFoundFault
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
    | SubnetQuotaExceededFault
    | CommonAwsError
  >;
}

export type Dax = AmazonDAXV3;

export type AvailabilityZoneList = Array<string>;
export type AwsQueryErrorMessage = string;

export type ChangeType = "IMMEDIATE" | "REQUIRES_REBOOT";
export interface Cluster {
  ClusterName?: string;
  Description?: string;
  ClusterArn?: string;
  TotalNodes?: number;
  ActiveNodes?: number;
  NodeType?: string;
  Status?: string;
  ClusterDiscoveryEndpoint?: Endpoint;
  NodeIdsToRemove?: Array<string>;
  Nodes?: Array<Node>;
  PreferredMaintenanceWindow?: string;
  NotificationConfiguration?: NotificationConfiguration;
  SubnetGroup?: string;
  SecurityGroups?: Array<SecurityGroupMembership>;
  IamRoleArn?: string;
  ParameterGroup?: ParameterGroupStatus;
  SSEDescription?: SSEDescription;
  ClusterEndpointEncryptionType?: ClusterEndpointEncryptionType;
}
export declare class ClusterAlreadyExistsFault extends Data.TaggedError(
  "ClusterAlreadyExistsFault",
)<{
  readonly message?: string;
}> {}
export type ClusterEndpointEncryptionType = "NONE" | "TLS";
export type ClusterList = Array<Cluster>;
export type ClusterNameList = Array<string>;
export declare class ClusterNotFoundFault extends Data.TaggedError(
  "ClusterNotFoundFault",
)<{
  readonly message?: string;
}> {}
export declare class ClusterQuotaForCustomerExceededFault extends Data.TaggedError(
  "ClusterQuotaForCustomerExceededFault",
)<{
  readonly message?: string;
}> {}
export interface CreateClusterRequest {
  ClusterName: string;
  NodeType: string;
  Description?: string;
  ReplicationFactor: number;
  AvailabilityZones?: Array<string>;
  SubnetGroupName?: string;
  SecurityGroupIds?: Array<string>;
  PreferredMaintenanceWindow?: string;
  NotificationTopicArn?: string;
  IamRoleArn: string;
  ParameterGroupName?: string;
  Tags?: Array<Tag>;
  SSESpecification?: SSESpecification;
  ClusterEndpointEncryptionType?: ClusterEndpointEncryptionType;
}
export interface CreateClusterResponse {
  Cluster?: Cluster;
}
export interface CreateParameterGroupRequest {
  ParameterGroupName: string;
  Description?: string;
}
export interface CreateParameterGroupResponse {
  ParameterGroup?: ParameterGroup;
}
export interface CreateSubnetGroupRequest {
  SubnetGroupName: string;
  Description?: string;
  SubnetIds: Array<string>;
}
export interface CreateSubnetGroupResponse {
  SubnetGroup?: SubnetGroup;
}
export interface DecreaseReplicationFactorRequest {
  ClusterName: string;
  NewReplicationFactor: number;
  AvailabilityZones?: Array<string>;
  NodeIdsToRemove?: Array<string>;
}
export interface DecreaseReplicationFactorResponse {
  Cluster?: Cluster;
}
export interface DeleteClusterRequest {
  ClusterName: string;
}
export interface DeleteClusterResponse {
  Cluster?: Cluster;
}
export interface DeleteParameterGroupRequest {
  ParameterGroupName: string;
}
export interface DeleteParameterGroupResponse {
  DeletionMessage?: string;
}
export interface DeleteSubnetGroupRequest {
  SubnetGroupName: string;
}
export interface DeleteSubnetGroupResponse {
  DeletionMessage?: string;
}
export interface DescribeClustersRequest {
  ClusterNames?: Array<string>;
  MaxResults?: number;
  NextToken?: string;
}
export interface DescribeClustersResponse {
  NextToken?: string;
  Clusters?: Array<Cluster>;
}
export interface DescribeDefaultParametersRequest {
  MaxResults?: number;
  NextToken?: string;
}
export interface DescribeDefaultParametersResponse {
  NextToken?: string;
  Parameters?: Array<Parameter>;
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
export interface DescribeParameterGroupsRequest {
  ParameterGroupNames?: Array<string>;
  MaxResults?: number;
  NextToken?: string;
}
export interface DescribeParameterGroupsResponse {
  NextToken?: string;
  ParameterGroups?: Array<ParameterGroup>;
}
export interface DescribeParametersRequest {
  ParameterGroupName: string;
  Source?: string;
  MaxResults?: number;
  NextToken?: string;
}
export interface DescribeParametersResponse {
  NextToken?: string;
  Parameters?: Array<Parameter>;
}
export interface DescribeSubnetGroupsRequest {
  SubnetGroupNames?: Array<string>;
  MaxResults?: number;
  NextToken?: string;
}
export interface DescribeSubnetGroupsResponse {
  NextToken?: string;
  SubnetGroups?: Array<SubnetGroup>;
}
export interface Endpoint {
  Address?: string;
  Port?: number;
  URL?: string;
}
export interface Event {
  SourceName?: string;
  SourceType?: SourceType;
  Message?: string;
  Date?: Date | string;
}
export type EventList = Array<Event>;
export type ExceptionMessage = string;

export interface IncreaseReplicationFactorRequest {
  ClusterName: string;
  NewReplicationFactor: number;
  AvailabilityZones?: Array<string>;
}
export interface IncreaseReplicationFactorResponse {
  Cluster?: Cluster;
}
export declare class InsufficientClusterCapacityFault extends Data.TaggedError(
  "InsufficientClusterCapacityFault",
)<{
  readonly message?: string;
}> {}
export type Integer = number;

export type IntegerOptional = number;

export declare class InvalidARNFault extends Data.TaggedError(
  "InvalidARNFault",
)<{
  readonly message?: string;
}> {}
export declare class InvalidClusterStateFault extends Data.TaggedError(
  "InvalidClusterStateFault",
)<{
  readonly message?: string;
}> {}
export declare class InvalidParameterCombinationException extends Data.TaggedError(
  "InvalidParameterCombinationException",
)<{
  readonly message?: string;
}> {}
export declare class InvalidParameterGroupStateFault extends Data.TaggedError(
  "InvalidParameterGroupStateFault",
)<{
  readonly message?: string;
}> {}
export declare class InvalidParameterValueException extends Data.TaggedError(
  "InvalidParameterValueException",
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
export type IsModifiable = "TRUE" | "FALSE" | "CONDITIONAL";
export type KeyList = Array<string>;
export interface ListTagsRequest {
  ResourceName: string;
  NextToken?: string;
}
export interface ListTagsResponse {
  Tags?: Array<Tag>;
  NextToken?: string;
}
export interface Node {
  NodeId?: string;
  Endpoint?: Endpoint;
  NodeCreateTime?: Date | string;
  AvailabilityZone?: string;
  NodeStatus?: string;
  ParameterGroupStatus?: string;
}
export type NodeIdentifierList = Array<string>;
export type NodeList = Array<Node>;
export declare class NodeNotFoundFault extends Data.TaggedError(
  "NodeNotFoundFault",
)<{
  readonly message?: string;
}> {}
export declare class NodeQuotaForClusterExceededFault extends Data.TaggedError(
  "NodeQuotaForClusterExceededFault",
)<{
  readonly message?: string;
}> {}
export declare class NodeQuotaForCustomerExceededFault extends Data.TaggedError(
  "NodeQuotaForCustomerExceededFault",
)<{
  readonly message?: string;
}> {}
export interface NodeTypeSpecificValue {
  NodeType?: string;
  Value?: string;
}
export type NodeTypeSpecificValueList = Array<NodeTypeSpecificValue>;
export interface NotificationConfiguration {
  TopicArn?: string;
  TopicStatus?: string;
}
export interface Parameter {
  ParameterName?: string;
  ParameterType?: ParameterType;
  ParameterValue?: string;
  NodeTypeSpecificValues?: Array<NodeTypeSpecificValue>;
  Description?: string;
  Source?: string;
  DataType?: string;
  AllowedValues?: string;
  IsModifiable?: IsModifiable;
  ChangeType?: ChangeType;
}
export interface ParameterGroup {
  ParameterGroupName?: string;
  Description?: string;
}
export declare class ParameterGroupAlreadyExistsFault extends Data.TaggedError(
  "ParameterGroupAlreadyExistsFault",
)<{
  readonly message?: string;
}> {}
export type ParameterGroupList = Array<ParameterGroup>;
export type ParameterGroupNameList = Array<string>;
export declare class ParameterGroupNotFoundFault extends Data.TaggedError(
  "ParameterGroupNotFoundFault",
)<{
  readonly message?: string;
}> {}
export declare class ParameterGroupQuotaExceededFault extends Data.TaggedError(
  "ParameterGroupQuotaExceededFault",
)<{
  readonly message?: string;
}> {}
export interface ParameterGroupStatus {
  ParameterGroupName?: string;
  ParameterApplyStatus?: string;
  NodeIdsToReboot?: Array<string>;
}
export type ParameterList = Array<Parameter>;
export interface ParameterNameValue {
  ParameterName?: string;
  ParameterValue?: string;
}
export type ParameterNameValueList = Array<ParameterNameValue>;
export type ParameterType = "DEFAULT" | "NODE_TYPE_SPECIFIC";
export interface RebootNodeRequest {
  ClusterName: string;
  NodeId: string;
}
export interface RebootNodeResponse {
  Cluster?: Cluster;
}
export type SecurityGroupIdentifierList = Array<string>;
export interface SecurityGroupMembership {
  SecurityGroupIdentifier?: string;
  Status?: string;
}
export type SecurityGroupMembershipList = Array<SecurityGroupMembership>;
export declare class ServiceLinkedRoleNotFoundFault extends Data.TaggedError(
  "ServiceLinkedRoleNotFoundFault",
)<{
  readonly message?: string;
}> {}
export declare class ServiceQuotaExceededException extends Data.TaggedError(
  "ServiceQuotaExceededException",
)<{}> {}
export type SourceType = "CLUSTER" | "PARAMETER_GROUP" | "SUBNET_GROUP";
export interface SSEDescription {
  Status?: SSEStatus;
}
export type SSEEnabled = boolean;

export interface SSESpecification {
  Enabled: boolean;
}
export type SSEStatus = "ENABLING" | "ENABLED" | "DISABLING" | "DISABLED";
export interface Subnet {
  SubnetIdentifier?: string;
  SubnetAvailabilityZone?: string;
}
export interface SubnetGroup {
  SubnetGroupName?: string;
  Description?: string;
  VpcId?: string;
  Subnets?: Array<Subnet>;
}
export declare class SubnetGroupAlreadyExistsFault extends Data.TaggedError(
  "SubnetGroupAlreadyExistsFault",
)<{
  readonly message?: string;
}> {}
export declare class SubnetGroupInUseFault extends Data.TaggedError(
  "SubnetGroupInUseFault",
)<{
  readonly message?: string;
}> {}
export type SubnetGroupList = Array<SubnetGroup>;
export type SubnetGroupNameList = Array<string>;
export declare class SubnetGroupNotFoundFault extends Data.TaggedError(
  "SubnetGroupNotFoundFault",
)<{
  readonly message?: string;
}> {}
export declare class SubnetGroupQuotaExceededFault extends Data.TaggedError(
  "SubnetGroupQuotaExceededFault",
)<{
  readonly message?: string;
}> {}
export type SubnetIdentifierList = Array<string>;
export declare class SubnetInUse extends Data.TaggedError("SubnetInUse")<{
  readonly message?: string;
}> {}
export type SubnetList = Array<Subnet>;
export declare class SubnetQuotaExceededFault extends Data.TaggedError(
  "SubnetQuotaExceededFault",
)<{
  readonly message?: string;
}> {}
export interface Tag {
  Key?: string;
  Value?: string;
}
export type TagList = Array<Tag>;
export declare class TagNotFoundFault extends Data.TaggedError(
  "TagNotFoundFault",
)<{
  readonly message?: string;
}> {}
export declare class TagQuotaPerResourceExceeded extends Data.TaggedError(
  "TagQuotaPerResourceExceeded",
)<{
  readonly message?: string;
}> {}
export interface TagResourceRequest {
  ResourceName: string;
  Tags: Array<Tag>;
}
export interface TagResourceResponse {
  Tags?: Array<Tag>;
}
export type TStamp = Date | string;

export interface UntagResourceRequest {
  ResourceName: string;
  TagKeys: Array<string>;
}
export interface UntagResourceResponse {
  Tags?: Array<Tag>;
}
export interface UpdateClusterRequest {
  ClusterName: string;
  Description?: string;
  PreferredMaintenanceWindow?: string;
  NotificationTopicArn?: string;
  NotificationTopicStatus?: string;
  ParameterGroupName?: string;
  SecurityGroupIds?: Array<string>;
}
export interface UpdateClusterResponse {
  Cluster?: Cluster;
}
export interface UpdateParameterGroupRequest {
  ParameterGroupName: string;
  ParameterNameValues: Array<ParameterNameValue>;
}
export interface UpdateParameterGroupResponse {
  ParameterGroup?: ParameterGroup;
}
export interface UpdateSubnetGroupRequest {
  SubnetGroupName: string;
  Description?: string;
  SubnetIds?: Array<string>;
}
export interface UpdateSubnetGroupResponse {
  SubnetGroup?: SubnetGroup;
}
export declare namespace CreateCluster {
  export type Input = CreateClusterRequest;
  export type Output = CreateClusterResponse;
  export type Error =
    | ClusterAlreadyExistsFault
    | ClusterQuotaForCustomerExceededFault
    | InsufficientClusterCapacityFault
    | InvalidClusterStateFault
    | InvalidParameterCombinationException
    | InvalidParameterGroupStateFault
    | InvalidParameterValueException
    | InvalidVPCNetworkStateFault
    | NodeQuotaForClusterExceededFault
    | NodeQuotaForCustomerExceededFault
    | ParameterGroupNotFoundFault
    | ServiceLinkedRoleNotFoundFault
    | ServiceQuotaExceededException
    | SubnetGroupNotFoundFault
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
    | SubnetQuotaExceededFault
    | CommonAwsError;
}

export declare namespace DecreaseReplicationFactor {
  export type Input = DecreaseReplicationFactorRequest;
  export type Output = DecreaseReplicationFactorResponse;
  export type Error =
    | ClusterNotFoundFault
    | InvalidClusterStateFault
    | InvalidParameterCombinationException
    | InvalidParameterValueException
    | NodeNotFoundFault
    | ServiceLinkedRoleNotFoundFault
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

export declare namespace DeleteSubnetGroup {
  export type Input = DeleteSubnetGroupRequest;
  export type Output = DeleteSubnetGroupResponse;
  export type Error =
    | ServiceLinkedRoleNotFoundFault
    | SubnetGroupInUseFault
    | SubnetGroupNotFoundFault
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

export declare namespace DescribeDefaultParameters {
  export type Input = DescribeDefaultParametersRequest;
  export type Output = DescribeDefaultParametersResponse;
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

export declare namespace DescribeSubnetGroups {
  export type Input = DescribeSubnetGroupsRequest;
  export type Output = DescribeSubnetGroupsResponse;
  export type Error =
    | ServiceLinkedRoleNotFoundFault
    | SubnetGroupNotFoundFault
    | CommonAwsError;
}

export declare namespace IncreaseReplicationFactor {
  export type Input = IncreaseReplicationFactorRequest;
  export type Output = IncreaseReplicationFactorResponse;
  export type Error =
    | ClusterNotFoundFault
    | InsufficientClusterCapacityFault
    | InvalidClusterStateFault
    | InvalidParameterCombinationException
    | InvalidParameterValueException
    | InvalidVPCNetworkStateFault
    | NodeQuotaForClusterExceededFault
    | NodeQuotaForCustomerExceededFault
    | ServiceLinkedRoleNotFoundFault
    | CommonAwsError;
}

export declare namespace ListTags {
  export type Input = ListTagsRequest;
  export type Output = ListTagsResponse;
  export type Error =
    | ClusterNotFoundFault
    | InvalidARNFault
    | InvalidClusterStateFault
    | InvalidParameterCombinationException
    | InvalidParameterValueException
    | ServiceLinkedRoleNotFoundFault
    | CommonAwsError;
}

export declare namespace RebootNode {
  export type Input = RebootNodeRequest;
  export type Output = RebootNodeResponse;
  export type Error =
    | ClusterNotFoundFault
    | InvalidClusterStateFault
    | InvalidParameterCombinationException
    | InvalidParameterValueException
    | NodeNotFoundFault
    | ServiceLinkedRoleNotFoundFault
    | CommonAwsError;
}

export declare namespace TagResource {
  export type Input = TagResourceRequest;
  export type Output = TagResourceResponse;
  export type Error =
    | ClusterNotFoundFault
    | InvalidARNFault
    | InvalidClusterStateFault
    | InvalidParameterCombinationException
    | InvalidParameterValueException
    | ServiceLinkedRoleNotFoundFault
    | TagQuotaPerResourceExceeded
    | CommonAwsError;
}

export declare namespace UntagResource {
  export type Input = UntagResourceRequest;
  export type Output = UntagResourceResponse;
  export type Error =
    | ClusterNotFoundFault
    | InvalidARNFault
    | InvalidClusterStateFault
    | InvalidParameterCombinationException
    | InvalidParameterValueException
    | ServiceLinkedRoleNotFoundFault
    | TagNotFoundFault
    | CommonAwsError;
}

export declare namespace UpdateCluster {
  export type Input = UpdateClusterRequest;
  export type Output = UpdateClusterResponse;
  export type Error =
    | ClusterNotFoundFault
    | InvalidClusterStateFault
    | InvalidParameterCombinationException
    | InvalidParameterGroupStateFault
    | InvalidParameterValueException
    | ParameterGroupNotFoundFault
    | ServiceLinkedRoleNotFoundFault
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
    | SubnetQuotaExceededFault
    | CommonAwsError;
}
