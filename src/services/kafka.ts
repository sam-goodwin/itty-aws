import type { Effect, Data as EffectData } from "effect";
import type { CommonAwsError } from "../error.ts";

export interface Kafka {
  batchAssociateScramSecret(
    input: BatchAssociateScramSecretRequest,
  ): Effect.Effect<
    BatchAssociateScramSecretResponse,
    | BadRequestException
    | ForbiddenException
    | InternalServerErrorException
    | NotFoundException
    | ServiceUnavailableException
    | TooManyRequestsException
    | UnauthorizedException
    | CommonAwsError
  >;
  batchDisassociateScramSecret(
    input: BatchDisassociateScramSecretRequest,
  ): Effect.Effect<
    BatchDisassociateScramSecretResponse,
    | BadRequestException
    | ForbiddenException
    | InternalServerErrorException
    | NotFoundException
    | ServiceUnavailableException
    | TooManyRequestsException
    | UnauthorizedException
    | CommonAwsError
  >;
  createCluster(
    input: CreateClusterRequest,
  ): Effect.Effect<
    CreateClusterResponse,
    | BadRequestException
    | ConflictException
    | ForbiddenException
    | InternalServerErrorException
    | ServiceUnavailableException
    | TooManyRequestsException
    | UnauthorizedException
    | CommonAwsError
  >;
  createClusterV2(
    input: CreateClusterV2Request,
  ): Effect.Effect<
    CreateClusterV2Response,
    | BadRequestException
    | ConflictException
    | ForbiddenException
    | InternalServerErrorException
    | ServiceUnavailableException
    | TooManyRequestsException
    | UnauthorizedException
    | CommonAwsError
  >;
  createConfiguration(
    input: CreateConfigurationRequest,
  ): Effect.Effect<
    CreateConfigurationResponse,
    | BadRequestException
    | ConflictException
    | ForbiddenException
    | InternalServerErrorException
    | ServiceUnavailableException
    | TooManyRequestsException
    | UnauthorizedException
    | CommonAwsError
  >;
  createReplicator(
    input: CreateReplicatorRequest,
  ): Effect.Effect<
    CreateReplicatorResponse,
    | BadRequestException
    | ConflictException
    | ForbiddenException
    | InternalServerErrorException
    | NotFoundException
    | ServiceUnavailableException
    | TooManyRequestsException
    | UnauthorizedException
    | CommonAwsError
  >;
  createVpcConnection(
    input: CreateVpcConnectionRequest,
  ): Effect.Effect<
    CreateVpcConnectionResponse,
    | BadRequestException
    | ForbiddenException
    | InternalServerErrorException
    | ServiceUnavailableException
    | TooManyRequestsException
    | UnauthorizedException
    | CommonAwsError
  >;
  deleteCluster(
    input: DeleteClusterRequest,
  ): Effect.Effect<
    DeleteClusterResponse,
    | BadRequestException
    | ForbiddenException
    | InternalServerErrorException
    | NotFoundException
    | CommonAwsError
  >;
  deleteClusterPolicy(
    input: DeleteClusterPolicyRequest,
  ): Effect.Effect<
    DeleteClusterPolicyResponse,
    | BadRequestException
    | ForbiddenException
    | InternalServerErrorException
    | NotFoundException
    | CommonAwsError
  >;
  deleteConfiguration(
    input: DeleteConfigurationRequest,
  ): Effect.Effect<
    DeleteConfigurationResponse,
    | BadRequestException
    | ForbiddenException
    | InternalServerErrorException
    | NotFoundException
    | CommonAwsError
  >;
  deleteReplicator(
    input: DeleteReplicatorRequest,
  ): Effect.Effect<
    DeleteReplicatorResponse,
    | BadRequestException
    | ForbiddenException
    | InternalServerErrorException
    | NotFoundException
    | ServiceUnavailableException
    | TooManyRequestsException
    | UnauthorizedException
    | CommonAwsError
  >;
  deleteVpcConnection(
    input: DeleteVpcConnectionRequest,
  ): Effect.Effect<
    DeleteVpcConnectionResponse,
    | BadRequestException
    | ForbiddenException
    | InternalServerErrorException
    | NotFoundException
    | CommonAwsError
  >;
  describeCluster(
    input: DescribeClusterRequest,
  ): Effect.Effect<
    DescribeClusterResponse,
    | BadRequestException
    | ForbiddenException
    | InternalServerErrorException
    | NotFoundException
    | UnauthorizedException
    | CommonAwsError
  >;
  describeClusterOperation(
    input: DescribeClusterOperationRequest,
  ): Effect.Effect<
    DescribeClusterOperationResponse,
    | BadRequestException
    | ForbiddenException
    | InternalServerErrorException
    | NotFoundException
    | UnauthorizedException
    | CommonAwsError
  >;
  describeClusterOperationV2(
    input: DescribeClusterOperationV2Request,
  ): Effect.Effect<
    DescribeClusterOperationV2Response,
    | BadRequestException
    | ForbiddenException
    | InternalServerErrorException
    | NotFoundException
    | ServiceUnavailableException
    | TooManyRequestsException
    | UnauthorizedException
    | CommonAwsError
  >;
  describeClusterV2(
    input: DescribeClusterV2Request,
  ): Effect.Effect<
    DescribeClusterV2Response,
    | BadRequestException
    | ForbiddenException
    | InternalServerErrorException
    | NotFoundException
    | UnauthorizedException
    | CommonAwsError
  >;
  describeConfiguration(
    input: DescribeConfigurationRequest,
  ): Effect.Effect<
    DescribeConfigurationResponse,
    | BadRequestException
    | ForbiddenException
    | InternalServerErrorException
    | NotFoundException
    | ServiceUnavailableException
    | UnauthorizedException
    | CommonAwsError
  >;
  describeConfigurationRevision(
    input: DescribeConfigurationRevisionRequest,
  ): Effect.Effect<
    DescribeConfigurationRevisionResponse,
    | BadRequestException
    | ForbiddenException
    | InternalServerErrorException
    | NotFoundException
    | ServiceUnavailableException
    | UnauthorizedException
    | CommonAwsError
  >;
  describeReplicator(
    input: DescribeReplicatorRequest,
  ): Effect.Effect<
    DescribeReplicatorResponse,
    | BadRequestException
    | ForbiddenException
    | InternalServerErrorException
    | NotFoundException
    | ServiceUnavailableException
    | TooManyRequestsException
    | UnauthorizedException
    | CommonAwsError
  >;
  describeVpcConnection(
    input: DescribeVpcConnectionRequest,
  ): Effect.Effect<
    DescribeVpcConnectionResponse,
    | BadRequestException
    | ForbiddenException
    | InternalServerErrorException
    | NotFoundException
    | ServiceUnavailableException
    | UnauthorizedException
    | CommonAwsError
  >;
  getBootstrapBrokers(
    input: GetBootstrapBrokersRequest,
  ): Effect.Effect<
    GetBootstrapBrokersResponse,
    | BadRequestException
    | ConflictException
    | ForbiddenException
    | InternalServerErrorException
    | UnauthorizedException
    | CommonAwsError
  >;
  getClusterPolicy(
    input: GetClusterPolicyRequest,
  ): Effect.Effect<
    GetClusterPolicyResponse,
    | BadRequestException
    | ForbiddenException
    | InternalServerErrorException
    | NotFoundException
    | CommonAwsError
  >;
  getCompatibleKafkaVersions(
    input: GetCompatibleKafkaVersionsRequest,
  ): Effect.Effect<
    GetCompatibleKafkaVersionsResponse,
    | BadRequestException
    | ForbiddenException
    | InternalServerErrorException
    | NotFoundException
    | ServiceUnavailableException
    | TooManyRequestsException
    | UnauthorizedException
    | CommonAwsError
  >;
  listClientVpcConnections(
    input: ListClientVpcConnectionsRequest,
  ): Effect.Effect<
    ListClientVpcConnectionsResponse,
    | BadRequestException
    | ForbiddenException
    | InternalServerErrorException
    | ServiceUnavailableException
    | UnauthorizedException
    | CommonAwsError
  >;
  listClusterOperations(
    input: ListClusterOperationsRequest,
  ): Effect.Effect<
    ListClusterOperationsResponse,
    | BadRequestException
    | ForbiddenException
    | InternalServerErrorException
    | UnauthorizedException
    | CommonAwsError
  >;
  listClusterOperationsV2(
    input: ListClusterOperationsV2Request,
  ): Effect.Effect<
    ListClusterOperationsV2Response,
    | BadRequestException
    | ForbiddenException
    | InternalServerErrorException
    | NotFoundException
    | ServiceUnavailableException
    | TooManyRequestsException
    | UnauthorizedException
    | CommonAwsError
  >;
  listClusters(
    input: ListClustersRequest,
  ): Effect.Effect<
    ListClustersResponse,
    | BadRequestException
    | ForbiddenException
    | InternalServerErrorException
    | UnauthorizedException
    | CommonAwsError
  >;
  listClustersV2(
    input: ListClustersV2Request,
  ): Effect.Effect<
    ListClustersV2Response,
    | BadRequestException
    | ForbiddenException
    | InternalServerErrorException
    | UnauthorizedException
    | CommonAwsError
  >;
  listConfigurationRevisions(
    input: ListConfigurationRevisionsRequest,
  ): Effect.Effect<
    ListConfigurationRevisionsResponse,
    | BadRequestException
    | ForbiddenException
    | InternalServerErrorException
    | NotFoundException
    | ServiceUnavailableException
    | UnauthorizedException
    | CommonAwsError
  >;
  listConfigurations(
    input: ListConfigurationsRequest,
  ): Effect.Effect<
    ListConfigurationsResponse,
    | BadRequestException
    | ForbiddenException
    | InternalServerErrorException
    | ServiceUnavailableException
    | UnauthorizedException
    | CommonAwsError
  >;
  listKafkaVersions(
    input: ListKafkaVersionsRequest,
  ): Effect.Effect<
    ListKafkaVersionsResponse,
    | BadRequestException
    | ForbiddenException
    | InternalServerErrorException
    | UnauthorizedException
    | CommonAwsError
  >;
  listNodes(
    input: ListNodesRequest,
  ): Effect.Effect<
    ListNodesResponse,
    | BadRequestException
    | ForbiddenException
    | InternalServerErrorException
    | NotFoundException
    | CommonAwsError
  >;
  listReplicators(
    input: ListReplicatorsRequest,
  ): Effect.Effect<
    ListReplicatorsResponse,
    | BadRequestException
    | ForbiddenException
    | InternalServerErrorException
    | NotFoundException
    | ServiceUnavailableException
    | TooManyRequestsException
    | UnauthorizedException
    | CommonAwsError
  >;
  listScramSecrets(
    input: ListScramSecretsRequest,
  ): Effect.Effect<
    ListScramSecretsResponse,
    | BadRequestException
    | ForbiddenException
    | InternalServerErrorException
    | NotFoundException
    | ServiceUnavailableException
    | TooManyRequestsException
    | UnauthorizedException
    | CommonAwsError
  >;
  listTagsForResource(
    input: ListTagsForResourceRequest,
  ): Effect.Effect<
    ListTagsForResourceResponse,
    | BadRequestException
    | InternalServerErrorException
    | NotFoundException
    | CommonAwsError
  >;
  listVpcConnections(
    input: ListVpcConnectionsRequest,
  ): Effect.Effect<
    ListVpcConnectionsResponse,
    | BadRequestException
    | ForbiddenException
    | InternalServerErrorException
    | ServiceUnavailableException
    | UnauthorizedException
    | CommonAwsError
  >;
  putClusterPolicy(
    input: PutClusterPolicyRequest,
  ): Effect.Effect<
    PutClusterPolicyResponse,
    | BadRequestException
    | ForbiddenException
    | InternalServerErrorException
    | CommonAwsError
  >;
  rebootBroker(
    input: RebootBrokerRequest,
  ): Effect.Effect<
    RebootBrokerResponse,
    | BadRequestException
    | ForbiddenException
    | InternalServerErrorException
    | NotFoundException
    | ServiceUnavailableException
    | TooManyRequestsException
    | UnauthorizedException
    | CommonAwsError
  >;
  rejectClientVpcConnection(
    input: RejectClientVpcConnectionRequest,
  ): Effect.Effect<
    RejectClientVpcConnectionResponse,
    | BadRequestException
    | ForbiddenException
    | InternalServerErrorException
    | ServiceUnavailableException
    | UnauthorizedException
    | CommonAwsError
  >;
  tagResource(
    input: TagResourceRequest,
  ): Effect.Effect<
    {},
    | BadRequestException
    | InternalServerErrorException
    | NotFoundException
    | CommonAwsError
  >;
  untagResource(
    input: UntagResourceRequest,
  ): Effect.Effect<
    {},
    | BadRequestException
    | InternalServerErrorException
    | NotFoundException
    | CommonAwsError
  >;
  updateBrokerCount(
    input: UpdateBrokerCountRequest,
  ): Effect.Effect<
    UpdateBrokerCountResponse,
    | BadRequestException
    | ForbiddenException
    | InternalServerErrorException
    | ServiceUnavailableException
    | UnauthorizedException
    | CommonAwsError
  >;
  updateBrokerStorage(
    input: UpdateBrokerStorageRequest,
  ): Effect.Effect<
    UpdateBrokerStorageResponse,
    | BadRequestException
    | ForbiddenException
    | InternalServerErrorException
    | ServiceUnavailableException
    | UnauthorizedException
    | CommonAwsError
  >;
  updateBrokerType(
    input: UpdateBrokerTypeRequest,
  ): Effect.Effect<
    UpdateBrokerTypeResponse,
    | BadRequestException
    | ForbiddenException
    | InternalServerErrorException
    | NotFoundException
    | ServiceUnavailableException
    | TooManyRequestsException
    | UnauthorizedException
    | CommonAwsError
  >;
  updateClusterConfiguration(
    input: UpdateClusterConfigurationRequest,
  ): Effect.Effect<
    UpdateClusterConfigurationResponse,
    | BadRequestException
    | ForbiddenException
    | InternalServerErrorException
    | NotFoundException
    | ServiceUnavailableException
    | UnauthorizedException
    | CommonAwsError
  >;
  updateClusterKafkaVersion(
    input: UpdateClusterKafkaVersionRequest,
  ): Effect.Effect<
    UpdateClusterKafkaVersionResponse,
    | BadRequestException
    | ForbiddenException
    | InternalServerErrorException
    | NotFoundException
    | ServiceUnavailableException
    | TooManyRequestsException
    | UnauthorizedException
    | CommonAwsError
  >;
  updateConfiguration(
    input: UpdateConfigurationRequest,
  ): Effect.Effect<
    UpdateConfigurationResponse,
    | BadRequestException
    | ForbiddenException
    | InternalServerErrorException
    | NotFoundException
    | ServiceUnavailableException
    | UnauthorizedException
    | CommonAwsError
  >;
  updateConnectivity(
    input: UpdateConnectivityRequest,
  ): Effect.Effect<
    UpdateConnectivityResponse,
    | BadRequestException
    | ForbiddenException
    | InternalServerErrorException
    | NotFoundException
    | ServiceUnavailableException
    | UnauthorizedException
    | CommonAwsError
  >;
  updateMonitoring(
    input: UpdateMonitoringRequest,
  ): Effect.Effect<
    UpdateMonitoringResponse,
    | BadRequestException
    | ForbiddenException
    | InternalServerErrorException
    | ServiceUnavailableException
    | UnauthorizedException
    | CommonAwsError
  >;
  updateReplicationInfo(
    input: UpdateReplicationInfoRequest,
  ): Effect.Effect<
    UpdateReplicationInfoResponse,
    | BadRequestException
    | ForbiddenException
    | InternalServerErrorException
    | NotFoundException
    | ServiceUnavailableException
    | TooManyRequestsException
    | UnauthorizedException
    | CommonAwsError
  >;
  updateSecurity(
    input: UpdateSecurityRequest,
  ): Effect.Effect<
    UpdateSecurityResponse,
    | BadRequestException
    | ForbiddenException
    | InternalServerErrorException
    | NotFoundException
    | ServiceUnavailableException
    | TooManyRequestsException
    | UnauthorizedException
    | CommonAwsError
  >;
  updateStorage(
    input: UpdateStorageRequest,
  ): Effect.Effect<
    UpdateStorageResponse,
    | BadRequestException
    | ForbiddenException
    | InternalServerErrorException
    | NotFoundException
    | ServiceUnavailableException
    | TooManyRequestsException
    | UnauthorizedException
    | CommonAwsError
  >;
}

export type __blob = Uint8Array | string;

export type __boolean = boolean;

export type __double = number;

export type __integer = number;

export type __integerMin1Max15 = number;

export type __integerMin1Max16384 = number;

export type __listOf__double = Array<number>;
export type __listOf__string = Array<string>;
export type __listOf__stringMax249 = Array<string>;
export type __listOf__stringMax256 = Array<string>;
export type __listOfBrokerEBSVolumeInfo = Array<BrokerEBSVolumeInfo>;
export type __listOfClientVpcConnection = Array<ClientVpcConnection>;
export type __listOfCluster = Array<Cluster>;
export type __listOfClusterInfo = Array<ClusterInfo>;
export type __listOfClusterOperationInfo = Array<ClusterOperationInfo>;
export type __listOfClusterOperationStep = Array<ClusterOperationStep>;
export type __listOfClusterOperationV2Summary =
  Array<ClusterOperationV2Summary>;
export type __listOfCompatibleKafkaVersion = Array<CompatibleKafkaVersion>;
export type __listOfConfiguration = Array<Configuration>;
export type __listOfConfigurationRevision = Array<ConfigurationRevision>;
export type __listOfKafkaCluster = Array<KafkaCluster>;
export type __listOfKafkaClusterDescription = Array<KafkaClusterDescription>;
export type __listOfKafkaClusterSummary = Array<KafkaClusterSummary>;
export type __listOfKafkaVersion = Array<KafkaVersion>;
export type __listOfNodeInfo = Array<NodeInfo>;
export type __listOfReplicationInfo = Array<ReplicationInfo>;
export type __listOfReplicationInfoDescription =
  Array<ReplicationInfoDescription>;
export type __listOfReplicationInfoSummary = Array<ReplicationInfoSummary>;
export type __listOfReplicatorSummary = Array<ReplicatorSummary>;
export type __listOfUnprocessedScramSecret = Array<UnprocessedScramSecret>;
export type __listOfVpcConfig = Array<VpcConfig>;
export type __listOfVpcConnection = Array<VpcConnection>;
export type __long = number;

export type __mapOf__string = Record<string, string>;
export type __string = string;

export type __stringMax1024 = string;

export type __stringMax249 = string;

export type __stringMax256 = string;

export type __stringMin1Max128 = string;

export type __stringMin1Max128Pattern09AZaZ09AZaZ0 = string;

export type __stringMin1Max64 = string;

export type __stringMin5Max32 = string;

export type __timestampIso8601 = Date | string;

export interface AmazonMskCluster {
  MskClusterArn: string;
}
export declare class BadRequestException extends EffectData.TaggedError(
  "BadRequestException",
)<{
  readonly InvalidParameter?: string;
  readonly Message?: string;
}> {}
export interface BatchAssociateScramSecretRequest {
  ClusterArn: string;
  SecretArnList: Array<string>;
}
export interface BatchAssociateScramSecretResponse {
  ClusterArn?: string;
  UnprocessedScramSecrets?: Array<UnprocessedScramSecret>;
}
export interface BatchDisassociateScramSecretRequest {
  ClusterArn: string;
  SecretArnList: Array<string>;
}
export interface BatchDisassociateScramSecretResponse {
  ClusterArn?: string;
  UnprocessedScramSecrets?: Array<UnprocessedScramSecret>;
}
export type BrokerAZDistribution = "DEFAULT";
export interface BrokerCountUpdateInfo {
  CreatedBrokerIds?: Array<number>;
  DeletedBrokerIds?: Array<number>;
}
export interface BrokerEBSVolumeInfo {
  KafkaBrokerNodeId: string;
  ProvisionedThroughput?: ProvisionedThroughput;
  VolumeSizeGB?: number;
}
export interface BrokerLogs {
  CloudWatchLogs?: CloudWatchLogs;
  Firehose?: Firehose;
  S3?: S3;
}
export interface BrokerNodeGroupInfo {
  BrokerAZDistribution?: BrokerAZDistribution;
  ClientSubnets: Array<string>;
  InstanceType: string;
  SecurityGroups?: Array<string>;
  StorageInfo?: StorageInfo;
  ConnectivityInfo?: ConnectivityInfo;
  ZoneIds?: Array<string>;
}
export interface BrokerNodeInfo {
  AttachedENIId?: string;
  BrokerId?: number;
  ClientSubnet?: string;
  ClientVpcIpAddress?: string;
  CurrentBrokerSoftwareInfo?: BrokerSoftwareInfo;
  Endpoints?: Array<string>;
}
export interface BrokerSoftwareInfo {
  ConfigurationArn?: string;
  ConfigurationRevision?: number;
  KafkaVersion?: string;
}
export interface ClientAuthentication {
  Sasl?: Sasl;
  Tls?: Tls;
  Unauthenticated?: Unauthenticated;
}
export type ClientBroker = "TLS" | "TLS_PLAINTEXT" | "PLAINTEXT";
export interface ClientVpcConnection {
  Authentication?: string;
  CreationTime?: Date | string;
  State?: VpcConnectionState;
  VpcConnectionArn: string;
  Owner?: string;
}
export interface CloudWatchLogs {
  Enabled: boolean;
  LogGroup?: string;
}
export interface Cluster {
  ActiveOperationArn?: string;
  ClusterType?: ClusterType;
  ClusterArn?: string;
  ClusterName?: string;
  CreationTime?: Date | string;
  CurrentVersion?: string;
  State?: ClusterState;
  StateInfo?: StateInfo;
  Tags?: Record<string, string>;
  Provisioned?: Provisioned;
  Serverless?: Serverless;
}
export interface ClusterInfo {
  ActiveOperationArn?: string;
  BrokerNodeGroupInfo?: BrokerNodeGroupInfo;
  ClientAuthentication?: ClientAuthentication;
  ClusterArn?: string;
  ClusterName?: string;
  CreationTime?: Date | string;
  CurrentBrokerSoftwareInfo?: BrokerSoftwareInfo;
  CurrentVersion?: string;
  EncryptionInfo?: EncryptionInfo;
  EnhancedMonitoring?: EnhancedMonitoring;
  OpenMonitoring?: OpenMonitoring;
  LoggingInfo?: LoggingInfo;
  NumberOfBrokerNodes?: number;
  State?: ClusterState;
  StateInfo?: StateInfo;
  Tags?: Record<string, string>;
  ZookeeperConnectString?: string;
  ZookeeperConnectStringTls?: string;
  StorageMode?: StorageMode;
  CustomerActionStatus?: CustomerActionStatus;
}
export interface ClusterOperationInfo {
  ClientRequestId?: string;
  ClusterArn?: string;
  CreationTime?: Date | string;
  EndTime?: Date | string;
  ErrorInfo?: ErrorInfo;
  OperationArn?: string;
  OperationState?: string;
  OperationSteps?: Array<ClusterOperationStep>;
  OperationType?: string;
  SourceClusterInfo?: MutableClusterInfo;
  TargetClusterInfo?: MutableClusterInfo;
  VpcConnectionInfo?: VpcConnectionInfo;
}
export interface ClusterOperationStep {
  StepInfo?: ClusterOperationStepInfo;
  StepName?: string;
}
export interface ClusterOperationStepInfo {
  StepStatus?: string;
}
export interface ClusterOperationV2 {
  ClusterArn?: string;
  ClusterType?: ClusterType;
  StartTime?: Date | string;
  EndTime?: Date | string;
  ErrorInfo?: ErrorInfo;
  OperationArn?: string;
  OperationState?: string;
  OperationType?: string;
  Provisioned?: ClusterOperationV2Provisioned;
  Serverless?: ClusterOperationV2Serverless;
}
export interface ClusterOperationV2Provisioned {
  OperationSteps?: Array<ClusterOperationStep>;
  SourceClusterInfo?: MutableClusterInfo;
  TargetClusterInfo?: MutableClusterInfo;
  VpcConnectionInfo?: VpcConnectionInfo;
}
export interface ClusterOperationV2Serverless {
  VpcConnectionInfo?: VpcConnectionInfoServerless;
}
export interface ClusterOperationV2Summary {
  ClusterArn?: string;
  ClusterType?: ClusterType;
  StartTime?: Date | string;
  EndTime?: Date | string;
  OperationArn?: string;
  OperationState?: string;
  OperationType?: string;
}
export type ClusterState =
  | "ACTIVE"
  | "CREATING"
  | "DELETING"
  | "FAILED"
  | "HEALING"
  | "MAINTENANCE"
  | "REBOOTING_BROKER"
  | "UPDATING";
export type ClusterType = "PROVISIONED" | "SERVERLESS";
export interface CompatibleKafkaVersion {
  SourceVersion?: string;
  TargetVersions?: Array<string>;
}
export interface Configuration {
  Arn: string;
  CreationTime: Date | string;
  Description: string;
  KafkaVersions: Array<string>;
  LatestRevision: ConfigurationRevision;
  Name: string;
  State: ConfigurationState;
}
export interface ConfigurationInfo {
  Arn: string;
  Revision: number;
}
export interface ConfigurationRevision {
  CreationTime: Date | string;
  Description?: string;
  Revision: number;
}
export type ConfigurationState = "ACTIVE" | "DELETING" | "DELETE_FAILED";
export declare class ConflictException extends EffectData.TaggedError(
  "ConflictException",
)<{
  readonly InvalidParameter?: string;
  readonly Message?: string;
}> {}
export interface ConnectivityInfo {
  PublicAccess?: PublicAccess;
  VpcConnectivity?: VpcConnectivity;
}
export interface ConsumerGroupReplication {
  ConsumerGroupsToExclude?: Array<string>;
  ConsumerGroupsToReplicate: Array<string>;
  DetectAndCopyNewConsumerGroups?: boolean;
  SynchroniseConsumerGroupOffsets?: boolean;
}
export interface ConsumerGroupReplicationUpdate {
  ConsumerGroupsToExclude: Array<string>;
  ConsumerGroupsToReplicate: Array<string>;
  DetectAndCopyNewConsumerGroups: boolean;
  SynchroniseConsumerGroupOffsets: boolean;
}
export interface ControllerNodeInfo {
  Endpoints?: Array<string>;
}
export interface CreateClusterRequest {
  BrokerNodeGroupInfo: BrokerNodeGroupInfo;
  ClientAuthentication?: ClientAuthentication;
  ClusterName: string;
  ConfigurationInfo?: ConfigurationInfo;
  EncryptionInfo?: EncryptionInfo;
  EnhancedMonitoring?: EnhancedMonitoring;
  OpenMonitoring?: OpenMonitoringInfo;
  KafkaVersion: string;
  LoggingInfo?: LoggingInfo;
  NumberOfBrokerNodes: number;
  Tags?: Record<string, string>;
  StorageMode?: StorageMode;
}
export interface CreateClusterResponse {
  ClusterArn?: string;
  ClusterName?: string;
  State?: ClusterState;
}
export interface CreateClusterV2Request {
  ClusterName: string;
  Tags?: Record<string, string>;
  Provisioned?: ProvisionedRequest;
  Serverless?: ServerlessRequest;
}
export interface CreateClusterV2Response {
  ClusterArn?: string;
  ClusterName?: string;
  State?: ClusterState;
  ClusterType?: ClusterType;
}
export interface CreateConfigurationRequest {
  Description?: string;
  KafkaVersions?: Array<string>;
  Name: string;
  ServerProperties: Uint8Array | string;
}
export interface CreateConfigurationResponse {
  Arn?: string;
  CreationTime?: Date | string;
  LatestRevision?: ConfigurationRevision;
  Name?: string;
  State?: ConfigurationState;
}
export interface CreateReplicatorRequest {
  Description?: string;
  KafkaClusters: Array<KafkaCluster>;
  ReplicationInfoList: Array<ReplicationInfo>;
  ReplicatorName: string;
  ServiceExecutionRoleArn: string;
  Tags?: Record<string, string>;
}
export interface CreateReplicatorResponse {
  ReplicatorArn?: string;
  ReplicatorName?: string;
  ReplicatorState?: ReplicatorState;
}
export interface CreateVpcConnectionRequest {
  TargetClusterArn: string;
  Authentication: string;
  VpcId: string;
  ClientSubnets: Array<string>;
  SecurityGroups: Array<string>;
  Tags?: Record<string, string>;
}
export interface CreateVpcConnectionResponse {
  VpcConnectionArn?: string;
  State?: VpcConnectionState;
  Authentication?: string;
  VpcId?: string;
  ClientSubnets?: Array<string>;
  SecurityGroups?: Array<string>;
  CreationTime?: Date | string;
  Tags?: Record<string, string>;
}
export type CustomerActionStatus =
  | "CRITICAL_ACTION_REQUIRED"
  | "ACTION_RECOMMENDED"
  | "NONE";
export interface DeleteClusterPolicyRequest {
  ClusterArn: string;
}
export interface DeleteClusterPolicyResponse {}
export interface DeleteClusterRequest {
  ClusterArn: string;
  CurrentVersion?: string;
}
export interface DeleteClusterResponse {
  ClusterArn?: string;
  State?: ClusterState;
}
export interface DeleteConfigurationRequest {
  Arn: string;
}
export interface DeleteConfigurationResponse {
  Arn?: string;
  State?: ConfigurationState;
}
export interface DeleteReplicatorRequest {
  CurrentVersion?: string;
  ReplicatorArn: string;
}
export interface DeleteReplicatorResponse {
  ReplicatorArn?: string;
  ReplicatorState?: ReplicatorState;
}
export interface DeleteVpcConnectionRequest {
  Arn: string;
}
export interface DeleteVpcConnectionResponse {
  VpcConnectionArn?: string;
  State?: VpcConnectionState;
}
export interface DescribeClusterOperationRequest {
  ClusterOperationArn: string;
}
export interface DescribeClusterOperationResponse {
  ClusterOperationInfo?: ClusterOperationInfo;
}
export interface DescribeClusterOperationV2Request {
  ClusterOperationArn: string;
}
export interface DescribeClusterOperationV2Response {
  ClusterOperationInfo?: ClusterOperationV2;
}
export interface DescribeClusterRequest {
  ClusterArn: string;
}
export interface DescribeClusterResponse {
  ClusterInfo?: ClusterInfo;
}
export interface DescribeClusterV2Request {
  ClusterArn: string;
}
export interface DescribeClusterV2Response {
  ClusterInfo?: Cluster;
}
export interface DescribeConfigurationRequest {
  Arn: string;
}
export interface DescribeConfigurationResponse {
  Arn?: string;
  CreationTime?: Date | string;
  Description?: string;
  KafkaVersions?: Array<string>;
  LatestRevision?: ConfigurationRevision;
  Name?: string;
  State?: ConfigurationState;
}
export interface DescribeConfigurationRevisionRequest {
  Arn: string;
  Revision: number;
}
export interface DescribeConfigurationRevisionResponse {
  Arn?: string;
  CreationTime?: Date | string;
  Description?: string;
  Revision?: number;
  ServerProperties?: Uint8Array | string;
}
export interface DescribeReplicatorRequest {
  ReplicatorArn: string;
}
export interface DescribeReplicatorResponse {
  CreationTime?: Date | string;
  CurrentVersion?: string;
  IsReplicatorReference?: boolean;
  KafkaClusters?: Array<KafkaClusterDescription>;
  ReplicationInfoList?: Array<ReplicationInfoDescription>;
  ReplicatorArn?: string;
  ReplicatorDescription?: string;
  ReplicatorName?: string;
  ReplicatorResourceArn?: string;
  ReplicatorState?: ReplicatorState;
  ServiceExecutionRoleArn?: string;
  StateInfo?: ReplicationStateInfo;
  Tags?: Record<string, string>;
}
export interface DescribeVpcConnectionRequest {
  Arn: string;
}
export interface DescribeVpcConnectionResponse {
  VpcConnectionArn?: string;
  TargetClusterArn?: string;
  State?: VpcConnectionState;
  Authentication?: string;
  VpcId?: string;
  Subnets?: Array<string>;
  SecurityGroups?: Array<string>;
  CreationTime?: Date | string;
  Tags?: Record<string, string>;
}
export interface EBSStorageInfo {
  ProvisionedThroughput?: ProvisionedThroughput;
  VolumeSize?: number;
}
export interface EncryptionAtRest {
  DataVolumeKMSKeyId: string;
}
export interface EncryptionInfo {
  EncryptionAtRest?: EncryptionAtRest;
  EncryptionInTransit?: EncryptionInTransit;
}
export interface EncryptionInTransit {
  ClientBroker?: ClientBroker;
  InCluster?: boolean;
}
export type EnhancedMonitoring =
  | "DEFAULT"
  | "PER_BROKER"
  | "PER_TOPIC_PER_BROKER"
  | "PER_TOPIC_PER_PARTITION";
export interface ErrorInfo {
  ErrorCode?: string;
  ErrorString?: string;
}
export interface Firehose {
  DeliveryStream?: string;
  Enabled: boolean;
}
export declare class ForbiddenException extends EffectData.TaggedError(
  "ForbiddenException",
)<{
  readonly InvalidParameter?: string;
  readonly Message?: string;
}> {}
export interface GetBootstrapBrokersRequest {
  ClusterArn: string;
}
export interface GetBootstrapBrokersResponse {
  BootstrapBrokerString?: string;
  BootstrapBrokerStringTls?: string;
  BootstrapBrokerStringSaslScram?: string;
  BootstrapBrokerStringSaslIam?: string;
  BootstrapBrokerStringPublicTls?: string;
  BootstrapBrokerStringPublicSaslScram?: string;
  BootstrapBrokerStringPublicSaslIam?: string;
  BootstrapBrokerStringVpcConnectivityTls?: string;
  BootstrapBrokerStringVpcConnectivitySaslScram?: string;
  BootstrapBrokerStringVpcConnectivitySaslIam?: string;
}
export interface GetClusterPolicyRequest {
  ClusterArn: string;
}
export interface GetClusterPolicyResponse {
  CurrentVersion?: string;
  Policy?: string;
}
export interface GetCompatibleKafkaVersionsRequest {
  ClusterArn?: string;
}
export interface GetCompatibleKafkaVersionsResponse {
  CompatibleKafkaVersions?: Array<CompatibleKafkaVersion>;
}
export interface Iam {
  Enabled?: boolean;
}
export declare class InternalServerErrorException extends EffectData.TaggedError(
  "InternalServerErrorException",
)<{
  readonly InvalidParameter?: string;
  readonly Message?: string;
}> {}
export interface JmxExporter {
  EnabledInBroker: boolean;
}
export interface JmxExporterInfo {
  EnabledInBroker: boolean;
}
export interface KafkaCluster {
  AmazonMskCluster: AmazonMskCluster;
  VpcConfig: KafkaClusterClientVpcConfig;
}
export interface KafkaClusterClientVpcConfig {
  SecurityGroupIds?: Array<string>;
  SubnetIds: Array<string>;
}
export interface KafkaClusterDescription {
  AmazonMskCluster?: AmazonMskCluster;
  KafkaClusterAlias?: string;
  VpcConfig?: KafkaClusterClientVpcConfig;
}
export interface KafkaClusterSummary {
  AmazonMskCluster?: AmazonMskCluster;
  KafkaClusterAlias?: string;
}
export interface KafkaVersion {
  Version?: string;
  Status?: KafkaVersionStatus;
}
export type KafkaVersionStatus = "ACTIVE" | "DEPRECATED";
export interface ListClientVpcConnectionsRequest {
  ClusterArn: string;
  MaxResults?: number;
  NextToken?: string;
}
export interface ListClientVpcConnectionsResponse {
  ClientVpcConnections?: Array<ClientVpcConnection>;
  NextToken?: string;
}
export interface ListClusterOperationsRequest {
  ClusterArn: string;
  MaxResults?: number;
  NextToken?: string;
}
export interface ListClusterOperationsResponse {
  ClusterOperationInfoList?: Array<ClusterOperationInfo>;
  NextToken?: string;
}
export interface ListClusterOperationsV2Request {
  ClusterArn: string;
  MaxResults?: number;
  NextToken?: string;
}
export interface ListClusterOperationsV2Response {
  ClusterOperationInfoList?: Array<ClusterOperationV2Summary>;
  NextToken?: string;
}
export interface ListClustersRequest {
  ClusterNameFilter?: string;
  MaxResults?: number;
  NextToken?: string;
}
export interface ListClustersResponse {
  ClusterInfoList?: Array<ClusterInfo>;
  NextToken?: string;
}
export interface ListClustersV2Request {
  ClusterNameFilter?: string;
  ClusterTypeFilter?: string;
  MaxResults?: number;
  NextToken?: string;
}
export interface ListClustersV2Response {
  ClusterInfoList?: Array<Cluster>;
  NextToken?: string;
}
export interface ListConfigurationRevisionsRequest {
  Arn: string;
  MaxResults?: number;
  NextToken?: string;
}
export interface ListConfigurationRevisionsResponse {
  NextToken?: string;
  Revisions?: Array<ConfigurationRevision>;
}
export interface ListConfigurationsRequest {
  MaxResults?: number;
  NextToken?: string;
}
export interface ListConfigurationsResponse {
  Configurations?: Array<Configuration>;
  NextToken?: string;
}
export interface ListKafkaVersionsRequest {
  MaxResults?: number;
  NextToken?: string;
}
export interface ListKafkaVersionsResponse {
  KafkaVersions?: Array<KafkaVersion>;
  NextToken?: string;
}
export interface ListNodesRequest {
  ClusterArn: string;
  MaxResults?: number;
  NextToken?: string;
}
export interface ListNodesResponse {
  NextToken?: string;
  NodeInfoList?: Array<NodeInfo>;
}
export interface ListReplicatorsRequest {
  MaxResults?: number;
  NextToken?: string;
  ReplicatorNameFilter?: string;
}
export interface ListReplicatorsResponse {
  NextToken?: string;
  Replicators?: Array<ReplicatorSummary>;
}
export interface ListScramSecretsRequest {
  ClusterArn: string;
  MaxResults?: number;
  NextToken?: string;
}
export interface ListScramSecretsResponse {
  NextToken?: string;
  SecretArnList?: Array<string>;
}
export interface ListTagsForResourceRequest {
  ResourceArn: string;
}
export interface ListTagsForResourceResponse {
  Tags?: Record<string, string>;
}
export interface ListVpcConnectionsRequest {
  MaxResults?: number;
  NextToken?: string;
}
export interface ListVpcConnectionsResponse {
  VpcConnections?: Array<VpcConnection>;
  NextToken?: string;
}
export interface LoggingInfo {
  BrokerLogs: BrokerLogs;
}
export type MaxResults = number;

export interface MutableClusterInfo {
  BrokerEBSVolumeInfo?: Array<BrokerEBSVolumeInfo>;
  ConfigurationInfo?: ConfigurationInfo;
  NumberOfBrokerNodes?: number;
  EnhancedMonitoring?: EnhancedMonitoring;
  OpenMonitoring?: OpenMonitoring;
  KafkaVersion?: string;
  LoggingInfo?: LoggingInfo;
  InstanceType?: string;
  ClientAuthentication?: ClientAuthentication;
  EncryptionInfo?: EncryptionInfo;
  ConnectivityInfo?: ConnectivityInfo;
  StorageMode?: StorageMode;
  BrokerCountUpdateInfo?: BrokerCountUpdateInfo;
}
export interface NodeExporter {
  EnabledInBroker: boolean;
}
export interface NodeExporterInfo {
  EnabledInBroker: boolean;
}
export interface NodeInfo {
  AddedToClusterTime?: string;
  BrokerNodeInfo?: BrokerNodeInfo;
  ControllerNodeInfo?: ControllerNodeInfo;
  InstanceType?: string;
  NodeARN?: string;
  NodeType?: NodeType;
  ZookeeperNodeInfo?: ZookeeperNodeInfo;
}
export type NodeType = "BROKER";
export declare class NotFoundException extends EffectData.TaggedError(
  "NotFoundException",
)<{
  readonly InvalidParameter?: string;
  readonly Message?: string;
}> {}
export interface OpenMonitoring {
  Prometheus: Prometheus;
}
export interface OpenMonitoringInfo {
  Prometheus: PrometheusInfo;
}
export interface Prometheus {
  JmxExporter?: JmxExporter;
  NodeExporter?: NodeExporter;
}
export interface PrometheusInfo {
  JmxExporter?: JmxExporterInfo;
  NodeExporter?: NodeExporterInfo;
}
export interface Provisioned {
  BrokerNodeGroupInfo: BrokerNodeGroupInfo;
  CurrentBrokerSoftwareInfo?: BrokerSoftwareInfo;
  ClientAuthentication?: ClientAuthentication;
  EncryptionInfo?: EncryptionInfo;
  EnhancedMonitoring?: EnhancedMonitoring;
  OpenMonitoring?: OpenMonitoringInfo;
  LoggingInfo?: LoggingInfo;
  NumberOfBrokerNodes: number;
  ZookeeperConnectString?: string;
  ZookeeperConnectStringTls?: string;
  StorageMode?: StorageMode;
  CustomerActionStatus?: CustomerActionStatus;
}
export interface ProvisionedRequest {
  BrokerNodeGroupInfo: BrokerNodeGroupInfo;
  ClientAuthentication?: ClientAuthentication;
  ConfigurationInfo?: ConfigurationInfo;
  EncryptionInfo?: EncryptionInfo;
  EnhancedMonitoring?: EnhancedMonitoring;
  OpenMonitoring?: OpenMonitoringInfo;
  KafkaVersion: string;
  LoggingInfo?: LoggingInfo;
  NumberOfBrokerNodes: number;
  StorageMode?: StorageMode;
}
export interface ProvisionedThroughput {
  Enabled?: boolean;
  VolumeThroughput?: number;
}
export interface PublicAccess {
  Type?: string;
}
export interface PutClusterPolicyRequest {
  ClusterArn: string;
  CurrentVersion?: string;
  Policy: string;
}
export interface PutClusterPolicyResponse {
  CurrentVersion?: string;
}
export interface RebootBrokerRequest {
  BrokerIds: Array<string>;
  ClusterArn: string;
}
export interface RebootBrokerResponse {
  ClusterArn?: string;
  ClusterOperationArn?: string;
}
export interface RejectClientVpcConnectionRequest {
  ClusterArn: string;
  VpcConnectionArn: string;
}
export interface RejectClientVpcConnectionResponse {}
export interface ReplicationInfo {
  ConsumerGroupReplication: ConsumerGroupReplication;
  SourceKafkaClusterArn: string;
  TargetCompressionType: TargetCompressionType;
  TargetKafkaClusterArn: string;
  TopicReplication: TopicReplication;
}
export interface ReplicationInfoDescription {
  ConsumerGroupReplication?: ConsumerGroupReplication;
  SourceKafkaClusterAlias?: string;
  TargetCompressionType?: TargetCompressionType;
  TargetKafkaClusterAlias?: string;
  TopicReplication?: TopicReplication;
}
export interface ReplicationInfoSummary {
  SourceKafkaClusterAlias?: string;
  TargetKafkaClusterAlias?: string;
}
export interface ReplicationStartingPosition {
  Type?: ReplicationStartingPositionType;
}
export type ReplicationStartingPositionType = "LATEST" | "EARLIEST";
export interface ReplicationStateInfo {
  Code?: string;
  Message?: string;
}
export interface ReplicationTopicNameConfiguration {
  Type?: ReplicationTopicNameConfigurationType;
}
export type ReplicationTopicNameConfigurationType =
  | "PREFIXED_WITH_SOURCE_CLUSTER_ALIAS"
  | "IDENTICAL";
export type ReplicatorState =
  | "RUNNING"
  | "CREATING"
  | "UPDATING"
  | "DELETING"
  | "FAILED";
export interface ReplicatorSummary {
  CreationTime?: Date | string;
  CurrentVersion?: string;
  IsReplicatorReference?: boolean;
  KafkaClustersSummary?: Array<KafkaClusterSummary>;
  ReplicationInfoSummaryList?: Array<ReplicationInfoSummary>;
  ReplicatorArn?: string;
  ReplicatorName?: string;
  ReplicatorResourceArn?: string;
  ReplicatorState?: ReplicatorState;
}
export interface S3 {
  Bucket?: string;
  Enabled: boolean;
  Prefix?: string;
}
export interface Sasl {
  Scram?: Scram;
  Iam?: Iam;
}
export interface Scram {
  Enabled?: boolean;
}
export interface Serverless {
  VpcConfigs: Array<VpcConfig>;
  ClientAuthentication?: ServerlessClientAuthentication;
}
export interface ServerlessClientAuthentication {
  Sasl?: ServerlessSasl;
}
export interface ServerlessRequest {
  VpcConfigs: Array<VpcConfig>;
  ClientAuthentication?: ServerlessClientAuthentication;
}
export interface ServerlessSasl {
  Iam?: Iam;
}
export declare class ServiceUnavailableException extends EffectData.TaggedError(
  "ServiceUnavailableException",
)<{
  readonly InvalidParameter?: string;
  readonly Message?: string;
}> {}
export interface StateInfo {
  Code?: string;
  Message?: string;
}
export interface StorageInfo {
  EbsStorageInfo?: EBSStorageInfo;
}
export type StorageMode = "LOCAL" | "TIERED";
export interface TagResourceRequest {
  ResourceArn: string;
  Tags: Record<string, string>;
}
export type TargetCompressionType = "NONE" | "GZIP" | "SNAPPY" | "LZ4" | "ZSTD";
export interface Tls {
  CertificateAuthorityArnList?: Array<string>;
  Enabled?: boolean;
}
export declare class TooManyRequestsException extends EffectData.TaggedError(
  "TooManyRequestsException",
)<{
  readonly InvalidParameter?: string;
  readonly Message?: string;
}> {}
export interface TopicReplication {
  CopyAccessControlListsForTopics?: boolean;
  CopyTopicConfigurations?: boolean;
  DetectAndCopyNewTopics?: boolean;
  StartingPosition?: ReplicationStartingPosition;
  TopicNameConfiguration?: ReplicationTopicNameConfiguration;
  TopicsToExclude?: Array<string>;
  TopicsToReplicate: Array<string>;
}
export interface TopicReplicationUpdate {
  CopyAccessControlListsForTopics: boolean;
  CopyTopicConfigurations: boolean;
  DetectAndCopyNewTopics: boolean;
  TopicsToExclude: Array<string>;
  TopicsToReplicate: Array<string>;
}
export interface Unauthenticated {
  Enabled?: boolean;
}
export declare class UnauthorizedException extends EffectData.TaggedError(
  "UnauthorizedException",
)<{
  readonly InvalidParameter?: string;
  readonly Message?: string;
}> {}
export interface UnprocessedScramSecret {
  ErrorCode?: string;
  ErrorMessage?: string;
  SecretArn?: string;
}
export interface UntagResourceRequest {
  ResourceArn: string;
  TagKeys: Array<string>;
}
export interface UpdateBrokerCountRequest {
  ClusterArn: string;
  CurrentVersion: string;
  TargetNumberOfBrokerNodes: number;
}
export interface UpdateBrokerCountResponse {
  ClusterArn?: string;
  ClusterOperationArn?: string;
}
export interface UpdateBrokerStorageRequest {
  ClusterArn: string;
  CurrentVersion: string;
  TargetBrokerEBSVolumeInfo: Array<BrokerEBSVolumeInfo>;
}
export interface UpdateBrokerStorageResponse {
  ClusterArn?: string;
  ClusterOperationArn?: string;
}
export interface UpdateBrokerTypeRequest {
  ClusterArn: string;
  CurrentVersion: string;
  TargetInstanceType: string;
}
export interface UpdateBrokerTypeResponse {
  ClusterArn?: string;
  ClusterOperationArn?: string;
}
export interface UpdateClusterConfigurationRequest {
  ClusterArn: string;
  ConfigurationInfo: ConfigurationInfo;
  CurrentVersion: string;
}
export interface UpdateClusterConfigurationResponse {
  ClusterArn?: string;
  ClusterOperationArn?: string;
}
export interface UpdateClusterKafkaVersionRequest {
  ClusterArn: string;
  ConfigurationInfo?: ConfigurationInfo;
  CurrentVersion: string;
  TargetKafkaVersion: string;
}
export interface UpdateClusterKafkaVersionResponse {
  ClusterArn?: string;
  ClusterOperationArn?: string;
}
export interface UpdateConfigurationRequest {
  Arn: string;
  Description?: string;
  ServerProperties: Uint8Array | string;
}
export interface UpdateConfigurationResponse {
  Arn?: string;
  LatestRevision?: ConfigurationRevision;
}
export interface UpdateConnectivityRequest {
  ClusterArn: string;
  ConnectivityInfo: ConnectivityInfo;
  CurrentVersion: string;
}
export interface UpdateConnectivityResponse {
  ClusterArn?: string;
  ClusterOperationArn?: string;
}
export interface UpdateMonitoringRequest {
  ClusterArn: string;
  CurrentVersion: string;
  EnhancedMonitoring?: EnhancedMonitoring;
  OpenMonitoring?: OpenMonitoringInfo;
  LoggingInfo?: LoggingInfo;
}
export interface UpdateMonitoringResponse {
  ClusterArn?: string;
  ClusterOperationArn?: string;
}
export interface UpdateReplicationInfoRequest {
  ConsumerGroupReplication?: ConsumerGroupReplicationUpdate;
  CurrentVersion: string;
  ReplicatorArn: string;
  SourceKafkaClusterArn: string;
  TargetKafkaClusterArn: string;
  TopicReplication?: TopicReplicationUpdate;
}
export interface UpdateReplicationInfoResponse {
  ReplicatorArn?: string;
  ReplicatorState?: ReplicatorState;
}
export interface UpdateSecurityRequest {
  ClientAuthentication?: ClientAuthentication;
  ClusterArn: string;
  CurrentVersion: string;
  EncryptionInfo?: EncryptionInfo;
}
export interface UpdateSecurityResponse {
  ClusterArn?: string;
  ClusterOperationArn?: string;
}
export interface UpdateStorageRequest {
  ClusterArn: string;
  CurrentVersion: string;
  ProvisionedThroughput?: ProvisionedThroughput;
  StorageMode?: StorageMode;
  VolumeSizeGB?: number;
}
export interface UpdateStorageResponse {
  ClusterArn?: string;
  ClusterOperationArn?: string;
}
export interface UserIdentity {
  Type?: UserIdentityType;
  PrincipalId?: string;
}
export type UserIdentityType = "AWSACCOUNT" | "AWSSERVICE";
export interface VpcConfig {
  SubnetIds: Array<string>;
  SecurityGroupIds?: Array<string>;
}
export interface VpcConnection {
  VpcConnectionArn: string;
  TargetClusterArn: string;
  CreationTime?: Date | string;
  Authentication?: string;
  VpcId?: string;
  State?: VpcConnectionState;
}
export interface VpcConnectionInfo {
  VpcConnectionArn?: string;
  Owner?: string;
  UserIdentity?: UserIdentity;
  CreationTime?: Date | string;
}
export interface VpcConnectionInfoServerless {
  CreationTime?: Date | string;
  Owner?: string;
  UserIdentity?: UserIdentity;
  VpcConnectionArn?: string;
}
export type VpcConnectionState =
  | "CREATING"
  | "AVAILABLE"
  | "INACTIVE"
  | "DEACTIVATING"
  | "DELETING"
  | "FAILED"
  | "REJECTED"
  | "REJECTING";
export interface VpcConnectivity {
  ClientAuthentication?: VpcConnectivityClientAuthentication;
}
export interface VpcConnectivityClientAuthentication {
  Sasl?: VpcConnectivitySasl;
  Tls?: VpcConnectivityTls;
}
export interface VpcConnectivityIam {
  Enabled?: boolean;
}
export interface VpcConnectivitySasl {
  Scram?: VpcConnectivityScram;
  Iam?: VpcConnectivityIam;
}
export interface VpcConnectivityScram {
  Enabled?: boolean;
}
export interface VpcConnectivityTls {
  Enabled?: boolean;
}
export interface ZookeeperNodeInfo {
  AttachedENIId?: string;
  ClientVpcIpAddress?: string;
  Endpoints?: Array<string>;
  ZookeeperId?: number;
  ZookeeperVersion?: string;
}
export declare namespace BatchAssociateScramSecret {
  export type Input = BatchAssociateScramSecretRequest;
  export type Output = BatchAssociateScramSecretResponse;
  export type Error =
    | BadRequestException
    | ForbiddenException
    | InternalServerErrorException
    | NotFoundException
    | ServiceUnavailableException
    | TooManyRequestsException
    | UnauthorizedException
    | CommonAwsError;
}

export declare namespace BatchDisassociateScramSecret {
  export type Input = BatchDisassociateScramSecretRequest;
  export type Output = BatchDisassociateScramSecretResponse;
  export type Error =
    | BadRequestException
    | ForbiddenException
    | InternalServerErrorException
    | NotFoundException
    | ServiceUnavailableException
    | TooManyRequestsException
    | UnauthorizedException
    | CommonAwsError;
}

export declare namespace CreateCluster {
  export type Input = CreateClusterRequest;
  export type Output = CreateClusterResponse;
  export type Error =
    | BadRequestException
    | ConflictException
    | ForbiddenException
    | InternalServerErrorException
    | ServiceUnavailableException
    | TooManyRequestsException
    | UnauthorizedException
    | CommonAwsError;
}

export declare namespace CreateClusterV2 {
  export type Input = CreateClusterV2Request;
  export type Output = CreateClusterV2Response;
  export type Error =
    | BadRequestException
    | ConflictException
    | ForbiddenException
    | InternalServerErrorException
    | ServiceUnavailableException
    | TooManyRequestsException
    | UnauthorizedException
    | CommonAwsError;
}

export declare namespace CreateConfiguration {
  export type Input = CreateConfigurationRequest;
  export type Output = CreateConfigurationResponse;
  export type Error =
    | BadRequestException
    | ConflictException
    | ForbiddenException
    | InternalServerErrorException
    | ServiceUnavailableException
    | TooManyRequestsException
    | UnauthorizedException
    | CommonAwsError;
}

export declare namespace CreateReplicator {
  export type Input = CreateReplicatorRequest;
  export type Output = CreateReplicatorResponse;
  export type Error =
    | BadRequestException
    | ConflictException
    | ForbiddenException
    | InternalServerErrorException
    | NotFoundException
    | ServiceUnavailableException
    | TooManyRequestsException
    | UnauthorizedException
    | CommonAwsError;
}

export declare namespace CreateVpcConnection {
  export type Input = CreateVpcConnectionRequest;
  export type Output = CreateVpcConnectionResponse;
  export type Error =
    | BadRequestException
    | ForbiddenException
    | InternalServerErrorException
    | ServiceUnavailableException
    | TooManyRequestsException
    | UnauthorizedException
    | CommonAwsError;
}

export declare namespace DeleteCluster {
  export type Input = DeleteClusterRequest;
  export type Output = DeleteClusterResponse;
  export type Error =
    | BadRequestException
    | ForbiddenException
    | InternalServerErrorException
    | NotFoundException
    | CommonAwsError;
}

export declare namespace DeleteClusterPolicy {
  export type Input = DeleteClusterPolicyRequest;
  export type Output = DeleteClusterPolicyResponse;
  export type Error =
    | BadRequestException
    | ForbiddenException
    | InternalServerErrorException
    | NotFoundException
    | CommonAwsError;
}

export declare namespace DeleteConfiguration {
  export type Input = DeleteConfigurationRequest;
  export type Output = DeleteConfigurationResponse;
  export type Error =
    | BadRequestException
    | ForbiddenException
    | InternalServerErrorException
    | NotFoundException
    | CommonAwsError;
}

export declare namespace DeleteReplicator {
  export type Input = DeleteReplicatorRequest;
  export type Output = DeleteReplicatorResponse;
  export type Error =
    | BadRequestException
    | ForbiddenException
    | InternalServerErrorException
    | NotFoundException
    | ServiceUnavailableException
    | TooManyRequestsException
    | UnauthorizedException
    | CommonAwsError;
}

export declare namespace DeleteVpcConnection {
  export type Input = DeleteVpcConnectionRequest;
  export type Output = DeleteVpcConnectionResponse;
  export type Error =
    | BadRequestException
    | ForbiddenException
    | InternalServerErrorException
    | NotFoundException
    | CommonAwsError;
}

export declare namespace DescribeCluster {
  export type Input = DescribeClusterRequest;
  export type Output = DescribeClusterResponse;
  export type Error =
    | BadRequestException
    | ForbiddenException
    | InternalServerErrorException
    | NotFoundException
    | UnauthorizedException
    | CommonAwsError;
}

export declare namespace DescribeClusterOperation {
  export type Input = DescribeClusterOperationRequest;
  export type Output = DescribeClusterOperationResponse;
  export type Error =
    | BadRequestException
    | ForbiddenException
    | InternalServerErrorException
    | NotFoundException
    | UnauthorizedException
    | CommonAwsError;
}

export declare namespace DescribeClusterOperationV2 {
  export type Input = DescribeClusterOperationV2Request;
  export type Output = DescribeClusterOperationV2Response;
  export type Error =
    | BadRequestException
    | ForbiddenException
    | InternalServerErrorException
    | NotFoundException
    | ServiceUnavailableException
    | TooManyRequestsException
    | UnauthorizedException
    | CommonAwsError;
}

export declare namespace DescribeClusterV2 {
  export type Input = DescribeClusterV2Request;
  export type Output = DescribeClusterV2Response;
  export type Error =
    | BadRequestException
    | ForbiddenException
    | InternalServerErrorException
    | NotFoundException
    | UnauthorizedException
    | CommonAwsError;
}

export declare namespace DescribeConfiguration {
  export type Input = DescribeConfigurationRequest;
  export type Output = DescribeConfigurationResponse;
  export type Error =
    | BadRequestException
    | ForbiddenException
    | InternalServerErrorException
    | NotFoundException
    | ServiceUnavailableException
    | UnauthorizedException
    | CommonAwsError;
}

export declare namespace DescribeConfigurationRevision {
  export type Input = DescribeConfigurationRevisionRequest;
  export type Output = DescribeConfigurationRevisionResponse;
  export type Error =
    | BadRequestException
    | ForbiddenException
    | InternalServerErrorException
    | NotFoundException
    | ServiceUnavailableException
    | UnauthorizedException
    | CommonAwsError;
}

export declare namespace DescribeReplicator {
  export type Input = DescribeReplicatorRequest;
  export type Output = DescribeReplicatorResponse;
  export type Error =
    | BadRequestException
    | ForbiddenException
    | InternalServerErrorException
    | NotFoundException
    | ServiceUnavailableException
    | TooManyRequestsException
    | UnauthorizedException
    | CommonAwsError;
}

export declare namespace DescribeVpcConnection {
  export type Input = DescribeVpcConnectionRequest;
  export type Output = DescribeVpcConnectionResponse;
  export type Error =
    | BadRequestException
    | ForbiddenException
    | InternalServerErrorException
    | NotFoundException
    | ServiceUnavailableException
    | UnauthorizedException
    | CommonAwsError;
}

export declare namespace GetBootstrapBrokers {
  export type Input = GetBootstrapBrokersRequest;
  export type Output = GetBootstrapBrokersResponse;
  export type Error =
    | BadRequestException
    | ConflictException
    | ForbiddenException
    | InternalServerErrorException
    | UnauthorizedException
    | CommonAwsError;
}

export declare namespace GetClusterPolicy {
  export type Input = GetClusterPolicyRequest;
  export type Output = GetClusterPolicyResponse;
  export type Error =
    | BadRequestException
    | ForbiddenException
    | InternalServerErrorException
    | NotFoundException
    | CommonAwsError;
}

export declare namespace GetCompatibleKafkaVersions {
  export type Input = GetCompatibleKafkaVersionsRequest;
  export type Output = GetCompatibleKafkaVersionsResponse;
  export type Error =
    | BadRequestException
    | ForbiddenException
    | InternalServerErrorException
    | NotFoundException
    | ServiceUnavailableException
    | TooManyRequestsException
    | UnauthorizedException
    | CommonAwsError;
}

export declare namespace ListClientVpcConnections {
  export type Input = ListClientVpcConnectionsRequest;
  export type Output = ListClientVpcConnectionsResponse;
  export type Error =
    | BadRequestException
    | ForbiddenException
    | InternalServerErrorException
    | ServiceUnavailableException
    | UnauthorizedException
    | CommonAwsError;
}

export declare namespace ListClusterOperations {
  export type Input = ListClusterOperationsRequest;
  export type Output = ListClusterOperationsResponse;
  export type Error =
    | BadRequestException
    | ForbiddenException
    | InternalServerErrorException
    | UnauthorizedException
    | CommonAwsError;
}

export declare namespace ListClusterOperationsV2 {
  export type Input = ListClusterOperationsV2Request;
  export type Output = ListClusterOperationsV2Response;
  export type Error =
    | BadRequestException
    | ForbiddenException
    | InternalServerErrorException
    | NotFoundException
    | ServiceUnavailableException
    | TooManyRequestsException
    | UnauthorizedException
    | CommonAwsError;
}

export declare namespace ListClusters {
  export type Input = ListClustersRequest;
  export type Output = ListClustersResponse;
  export type Error =
    | BadRequestException
    | ForbiddenException
    | InternalServerErrorException
    | UnauthorizedException
    | CommonAwsError;
}

export declare namespace ListClustersV2 {
  export type Input = ListClustersV2Request;
  export type Output = ListClustersV2Response;
  export type Error =
    | BadRequestException
    | ForbiddenException
    | InternalServerErrorException
    | UnauthorizedException
    | CommonAwsError;
}

export declare namespace ListConfigurationRevisions {
  export type Input = ListConfigurationRevisionsRequest;
  export type Output = ListConfigurationRevisionsResponse;
  export type Error =
    | BadRequestException
    | ForbiddenException
    | InternalServerErrorException
    | NotFoundException
    | ServiceUnavailableException
    | UnauthorizedException
    | CommonAwsError;
}

export declare namespace ListConfigurations {
  export type Input = ListConfigurationsRequest;
  export type Output = ListConfigurationsResponse;
  export type Error =
    | BadRequestException
    | ForbiddenException
    | InternalServerErrorException
    | ServiceUnavailableException
    | UnauthorizedException
    | CommonAwsError;
}

export declare namespace ListKafkaVersions {
  export type Input = ListKafkaVersionsRequest;
  export type Output = ListKafkaVersionsResponse;
  export type Error =
    | BadRequestException
    | ForbiddenException
    | InternalServerErrorException
    | UnauthorizedException
    | CommonAwsError;
}

export declare namespace ListNodes {
  export type Input = ListNodesRequest;
  export type Output = ListNodesResponse;
  export type Error =
    | BadRequestException
    | ForbiddenException
    | InternalServerErrorException
    | NotFoundException
    | CommonAwsError;
}

export declare namespace ListReplicators {
  export type Input = ListReplicatorsRequest;
  export type Output = ListReplicatorsResponse;
  export type Error =
    | BadRequestException
    | ForbiddenException
    | InternalServerErrorException
    | NotFoundException
    | ServiceUnavailableException
    | TooManyRequestsException
    | UnauthorizedException
    | CommonAwsError;
}

export declare namespace ListScramSecrets {
  export type Input = ListScramSecretsRequest;
  export type Output = ListScramSecretsResponse;
  export type Error =
    | BadRequestException
    | ForbiddenException
    | InternalServerErrorException
    | NotFoundException
    | ServiceUnavailableException
    | TooManyRequestsException
    | UnauthorizedException
    | CommonAwsError;
}

export declare namespace ListTagsForResource {
  export type Input = ListTagsForResourceRequest;
  export type Output = ListTagsForResourceResponse;
  export type Error =
    | BadRequestException
    | InternalServerErrorException
    | NotFoundException
    | CommonAwsError;
}

export declare namespace ListVpcConnections {
  export type Input = ListVpcConnectionsRequest;
  export type Output = ListVpcConnectionsResponse;
  export type Error =
    | BadRequestException
    | ForbiddenException
    | InternalServerErrorException
    | ServiceUnavailableException
    | UnauthorizedException
    | CommonAwsError;
}

export declare namespace PutClusterPolicy {
  export type Input = PutClusterPolicyRequest;
  export type Output = PutClusterPolicyResponse;
  export type Error =
    | BadRequestException
    | ForbiddenException
    | InternalServerErrorException
    | CommonAwsError;
}

export declare namespace RebootBroker {
  export type Input = RebootBrokerRequest;
  export type Output = RebootBrokerResponse;
  export type Error =
    | BadRequestException
    | ForbiddenException
    | InternalServerErrorException
    | NotFoundException
    | ServiceUnavailableException
    | TooManyRequestsException
    | UnauthorizedException
    | CommonAwsError;
}

export declare namespace RejectClientVpcConnection {
  export type Input = RejectClientVpcConnectionRequest;
  export type Output = RejectClientVpcConnectionResponse;
  export type Error =
    | BadRequestException
    | ForbiddenException
    | InternalServerErrorException
    | ServiceUnavailableException
    | UnauthorizedException
    | CommonAwsError;
}

export declare namespace TagResource {
  export type Input = TagResourceRequest;
  export type Output = {};
  export type Error =
    | BadRequestException
    | InternalServerErrorException
    | NotFoundException
    | CommonAwsError;
}

export declare namespace UntagResource {
  export type Input = UntagResourceRequest;
  export type Output = {};
  export type Error =
    | BadRequestException
    | InternalServerErrorException
    | NotFoundException
    | CommonAwsError;
}

export declare namespace UpdateBrokerCount {
  export type Input = UpdateBrokerCountRequest;
  export type Output = UpdateBrokerCountResponse;
  export type Error =
    | BadRequestException
    | ForbiddenException
    | InternalServerErrorException
    | ServiceUnavailableException
    | UnauthorizedException
    | CommonAwsError;
}

export declare namespace UpdateBrokerStorage {
  export type Input = UpdateBrokerStorageRequest;
  export type Output = UpdateBrokerStorageResponse;
  export type Error =
    | BadRequestException
    | ForbiddenException
    | InternalServerErrorException
    | ServiceUnavailableException
    | UnauthorizedException
    | CommonAwsError;
}

export declare namespace UpdateBrokerType {
  export type Input = UpdateBrokerTypeRequest;
  export type Output = UpdateBrokerTypeResponse;
  export type Error =
    | BadRequestException
    | ForbiddenException
    | InternalServerErrorException
    | NotFoundException
    | ServiceUnavailableException
    | TooManyRequestsException
    | UnauthorizedException
    | CommonAwsError;
}

export declare namespace UpdateClusterConfiguration {
  export type Input = UpdateClusterConfigurationRequest;
  export type Output = UpdateClusterConfigurationResponse;
  export type Error =
    | BadRequestException
    | ForbiddenException
    | InternalServerErrorException
    | NotFoundException
    | ServiceUnavailableException
    | UnauthorizedException
    | CommonAwsError;
}

export declare namespace UpdateClusterKafkaVersion {
  export type Input = UpdateClusterKafkaVersionRequest;
  export type Output = UpdateClusterKafkaVersionResponse;
  export type Error =
    | BadRequestException
    | ForbiddenException
    | InternalServerErrorException
    | NotFoundException
    | ServiceUnavailableException
    | TooManyRequestsException
    | UnauthorizedException
    | CommonAwsError;
}

export declare namespace UpdateConfiguration {
  export type Input = UpdateConfigurationRequest;
  export type Output = UpdateConfigurationResponse;
  export type Error =
    | BadRequestException
    | ForbiddenException
    | InternalServerErrorException
    | NotFoundException
    | ServiceUnavailableException
    | UnauthorizedException
    | CommonAwsError;
}

export declare namespace UpdateConnectivity {
  export type Input = UpdateConnectivityRequest;
  export type Output = UpdateConnectivityResponse;
  export type Error =
    | BadRequestException
    | ForbiddenException
    | InternalServerErrorException
    | NotFoundException
    | ServiceUnavailableException
    | UnauthorizedException
    | CommonAwsError;
}

export declare namespace UpdateMonitoring {
  export type Input = UpdateMonitoringRequest;
  export type Output = UpdateMonitoringResponse;
  export type Error =
    | BadRequestException
    | ForbiddenException
    | InternalServerErrorException
    | ServiceUnavailableException
    | UnauthorizedException
    | CommonAwsError;
}

export declare namespace UpdateReplicationInfo {
  export type Input = UpdateReplicationInfoRequest;
  export type Output = UpdateReplicationInfoResponse;
  export type Error =
    | BadRequestException
    | ForbiddenException
    | InternalServerErrorException
    | NotFoundException
    | ServiceUnavailableException
    | TooManyRequestsException
    | UnauthorizedException
    | CommonAwsError;
}

export declare namespace UpdateSecurity {
  export type Input = UpdateSecurityRequest;
  export type Output = UpdateSecurityResponse;
  export type Error =
    | BadRequestException
    | ForbiddenException
    | InternalServerErrorException
    | NotFoundException
    | ServiceUnavailableException
    | TooManyRequestsException
    | UnauthorizedException
    | CommonAwsError;
}

export declare namespace UpdateStorage {
  export type Input = UpdateStorageRequest;
  export type Output = UpdateStorageResponse;
  export type Error =
    | BadRequestException
    | ForbiddenException
    | InternalServerErrorException
    | NotFoundException
    | ServiceUnavailableException
    | TooManyRequestsException
    | UnauthorizedException
    | CommonAwsError;
}
