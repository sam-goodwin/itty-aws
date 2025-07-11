import type { Effect, Data } from "effect";
import type { CommonAwsError } from "../client.ts";

export interface AWSHabaneroManagementService {
  createEnvironment(
    input: CreateEnvironmentRequest,
  ): Effect.Effect<
    CreateEnvironmentResponse,
    AccessDeniedException | InternalServerException | LimitExceededException | ServiceQuotaExceededException | ThrottlingException | ValidationException | CommonAwsError
  >;
  createKxChangeset(
    input: CreateKxChangesetRequest,
  ): Effect.Effect<
    CreateKxChangesetResponse,
    AccessDeniedException | ConflictException | InternalServerException | LimitExceededException | ResourceNotFoundException | ThrottlingException | ValidationException | CommonAwsError
  >;
  createKxCluster(
    input: CreateKxClusterRequest,
  ): Effect.Effect<
    CreateKxClusterResponse,
    AccessDeniedException | ConflictException | InternalServerException | LimitExceededException | ResourceNotFoundException | ThrottlingException | ValidationException | CommonAwsError
  >;
  createKxDatabase(
    input: CreateKxDatabaseRequest,
  ): Effect.Effect<
    CreateKxDatabaseResponse,
    AccessDeniedException | ConflictException | InternalServerException | LimitExceededException | ResourceAlreadyExistsException | ResourceNotFoundException | ThrottlingException | ValidationException | CommonAwsError
  >;
  createKxDataview(
    input: CreateKxDataviewRequest,
  ): Effect.Effect<
    CreateKxDataviewResponse,
    AccessDeniedException | ConflictException | InternalServerException | LimitExceededException | ResourceAlreadyExistsException | ResourceNotFoundException | ThrottlingException | ValidationException | CommonAwsError
  >;
  createKxEnvironment(
    input: CreateKxEnvironmentRequest,
  ): Effect.Effect<
    CreateKxEnvironmentResponse,
    AccessDeniedException | ConflictException | InternalServerException | LimitExceededException | ServiceQuotaExceededException | ThrottlingException | ValidationException | CommonAwsError
  >;
  createKxScalingGroup(
    input: CreateKxScalingGroupRequest,
  ): Effect.Effect<
    CreateKxScalingGroupResponse,
    AccessDeniedException | ConflictException | InternalServerException | LimitExceededException | ResourceNotFoundException | ThrottlingException | ValidationException | CommonAwsError
  >;
  createKxUser(
    input: CreateKxUserRequest,
  ): Effect.Effect<
    CreateKxUserResponse,
    AccessDeniedException | ConflictException | InternalServerException | LimitExceededException | ResourceAlreadyExistsException | ResourceNotFoundException | ThrottlingException | ValidationException | CommonAwsError
  >;
  createKxVolume(
    input: CreateKxVolumeRequest,
  ): Effect.Effect<
    CreateKxVolumeResponse,
    AccessDeniedException | ConflictException | InternalServerException | LimitExceededException | ResourceAlreadyExistsException | ResourceNotFoundException | ThrottlingException | ValidationException | CommonAwsError
  >;
  deleteEnvironment(
    input: DeleteEnvironmentRequest,
  ): Effect.Effect<
    DeleteEnvironmentResponse,
    AccessDeniedException | InternalServerException | ResourceNotFoundException | ThrottlingException | ValidationException | CommonAwsError
  >;
  deleteKxCluster(
    input: DeleteKxClusterRequest,
  ): Effect.Effect<
    DeleteKxClusterResponse,
    AccessDeniedException | ConflictException | InternalServerException | LimitExceededException | ResourceNotFoundException | ThrottlingException | ValidationException | CommonAwsError
  >;
  deleteKxClusterNode(
    input: DeleteKxClusterNodeRequest,
  ): Effect.Effect<
    DeleteKxClusterNodeResponse,
    AccessDeniedException | InternalServerException | ResourceNotFoundException | ThrottlingException | ValidationException | CommonAwsError
  >;
  deleteKxDatabase(
    input: DeleteKxDatabaseRequest,
  ): Effect.Effect<
    DeleteKxDatabaseResponse,
    AccessDeniedException | ConflictException | InternalServerException | ResourceNotFoundException | ThrottlingException | ValidationException | CommonAwsError
  >;
  deleteKxDataview(
    input: DeleteKxDataviewRequest,
  ): Effect.Effect<
    DeleteKxDataviewResponse,
    AccessDeniedException | ConflictException | InternalServerException | ResourceNotFoundException | ThrottlingException | ValidationException | CommonAwsError
  >;
  deleteKxEnvironment(
    input: DeleteKxEnvironmentRequest,
  ): Effect.Effect<
    DeleteKxEnvironmentResponse,
    AccessDeniedException | ConflictException | InternalServerException | ResourceNotFoundException | ThrottlingException | ValidationException | CommonAwsError
  >;
  deleteKxScalingGroup(
    input: DeleteKxScalingGroupRequest,
  ): Effect.Effect<
    DeleteKxScalingGroupResponse,
    AccessDeniedException | ConflictException | InternalServerException | LimitExceededException | ResourceNotFoundException | ThrottlingException | ValidationException | CommonAwsError
  >;
  deleteKxUser(
    input: DeleteKxUserRequest,
  ): Effect.Effect<
    DeleteKxUserResponse,
    AccessDeniedException | ConflictException | InternalServerException | ResourceNotFoundException | ThrottlingException | ValidationException | CommonAwsError
  >;
  deleteKxVolume(
    input: DeleteKxVolumeRequest,
  ): Effect.Effect<
    DeleteKxVolumeResponse,
    AccessDeniedException | ConflictException | InternalServerException | LimitExceededException | ResourceNotFoundException | ThrottlingException | ValidationException | CommonAwsError
  >;
  getEnvironment(
    input: GetEnvironmentRequest,
  ): Effect.Effect<
    GetEnvironmentResponse,
    AccessDeniedException | InternalServerException | ResourceNotFoundException | ValidationException | CommonAwsError
  >;
  getKxChangeset(
    input: GetKxChangesetRequest,
  ): Effect.Effect<
    GetKxChangesetResponse,
    AccessDeniedException | InternalServerException | ResourceNotFoundException | ThrottlingException | ValidationException | CommonAwsError
  >;
  getKxCluster(
    input: GetKxClusterRequest,
  ): Effect.Effect<
    GetKxClusterResponse,
    AccessDeniedException | ConflictException | InternalServerException | LimitExceededException | ResourceNotFoundException | ThrottlingException | ValidationException | CommonAwsError
  >;
  getKxConnectionString(
    input: GetKxConnectionStringRequest,
  ): Effect.Effect<
    GetKxConnectionStringResponse,
    AccessDeniedException | InternalServerException | ResourceNotFoundException | ThrottlingException | ValidationException | CommonAwsError
  >;
  getKxDatabase(
    input: GetKxDatabaseRequest,
  ): Effect.Effect<
    GetKxDatabaseResponse,
    AccessDeniedException | InternalServerException | ResourceNotFoundException | ThrottlingException | ValidationException | CommonAwsError
  >;
  getKxDataview(
    input: GetKxDataviewRequest,
  ): Effect.Effect<
    GetKxDataviewResponse,
    AccessDeniedException | InternalServerException | ResourceNotFoundException | ThrottlingException | ValidationException | CommonAwsError
  >;
  getKxEnvironment(
    input: GetKxEnvironmentRequest,
  ): Effect.Effect<
    GetKxEnvironmentResponse,
    AccessDeniedException | ConflictException | InternalServerException | ResourceNotFoundException | ValidationException | CommonAwsError
  >;
  getKxScalingGroup(
    input: GetKxScalingGroupRequest,
  ): Effect.Effect<
    GetKxScalingGroupResponse,
    AccessDeniedException | ConflictException | InternalServerException | LimitExceededException | ResourceNotFoundException | ThrottlingException | ValidationException | CommonAwsError
  >;
  getKxUser(
    input: GetKxUserRequest,
  ): Effect.Effect<
    GetKxUserResponse,
    AccessDeniedException | InternalServerException | ResourceNotFoundException | ThrottlingException | ValidationException | CommonAwsError
  >;
  getKxVolume(
    input: GetKxVolumeRequest,
  ): Effect.Effect<
    GetKxVolumeResponse,
    AccessDeniedException | ConflictException | InternalServerException | LimitExceededException | ResourceNotFoundException | ThrottlingException | ValidationException | CommonAwsError
  >;
  listEnvironments(
    input: ListEnvironmentsRequest,
  ): Effect.Effect<
    ListEnvironmentsResponse,
    AccessDeniedException | InternalServerException | ValidationException | CommonAwsError
  >;
  listKxChangesets(
    input: ListKxChangesetsRequest,
  ): Effect.Effect<
    ListKxChangesetsResponse,
    AccessDeniedException | InternalServerException | ResourceNotFoundException | ThrottlingException | ValidationException | CommonAwsError
  >;
  listKxClusterNodes(
    input: ListKxClusterNodesRequest,
  ): Effect.Effect<
    ListKxClusterNodesResponse,
    AccessDeniedException | InternalServerException | LimitExceededException | ResourceNotFoundException | ThrottlingException | ValidationException | CommonAwsError
  >;
  listKxClusters(
    input: ListKxClustersRequest,
  ): Effect.Effect<
    ListKxClustersResponse,
    AccessDeniedException | ConflictException | InternalServerException | LimitExceededException | ResourceNotFoundException | ThrottlingException | ValidationException | CommonAwsError
  >;
  listKxDatabases(
    input: ListKxDatabasesRequest,
  ): Effect.Effect<
    ListKxDatabasesResponse,
    AccessDeniedException | InternalServerException | ResourceNotFoundException | ThrottlingException | ValidationException | CommonAwsError
  >;
  listKxDataviews(
    input: ListKxDataviewsRequest,
  ): Effect.Effect<
    ListKxDataviewsResponse,
    AccessDeniedException | InternalServerException | ResourceNotFoundException | ThrottlingException | ValidationException | CommonAwsError
  >;
  listKxEnvironments(
    input: ListKxEnvironmentsRequest,
  ): Effect.Effect<
    ListKxEnvironmentsResponse,
    AccessDeniedException | InternalServerException | ValidationException | CommonAwsError
  >;
  listKxScalingGroups(
    input: ListKxScalingGroupsRequest,
  ): Effect.Effect<
    ListKxScalingGroupsResponse,
    AccessDeniedException | ConflictException | InternalServerException | LimitExceededException | ResourceNotFoundException | ThrottlingException | ValidationException | CommonAwsError
  >;
  listKxUsers(
    input: ListKxUsersRequest,
  ): Effect.Effect<
    ListKxUsersResponse,
    AccessDeniedException | InternalServerException | ResourceNotFoundException | ThrottlingException | ValidationException | CommonAwsError
  >;
  listKxVolumes(
    input: ListKxVolumesRequest,
  ): Effect.Effect<
    ListKxVolumesResponse,
    AccessDeniedException | ConflictException | InternalServerException | LimitExceededException | ResourceNotFoundException | ThrottlingException | ValidationException | CommonAwsError
  >;
  listTagsForResource(
    input: ListTagsForResourceRequest,
  ): Effect.Effect<
    ListTagsForResourceResponse,
    InternalServerException | InvalidRequestException | ResourceNotFoundException | CommonAwsError
  >;
  tagResource(
    input: TagResourceRequest,
  ): Effect.Effect<
    TagResourceResponse,
    InternalServerException | InvalidRequestException | ResourceNotFoundException | CommonAwsError
  >;
  untagResource(
    input: UntagResourceRequest,
  ): Effect.Effect<
    UntagResourceResponse,
    InternalServerException | InvalidRequestException | ResourceNotFoundException | CommonAwsError
  >;
  updateEnvironment(
    input: UpdateEnvironmentRequest,
  ): Effect.Effect<
    UpdateEnvironmentResponse,
    AccessDeniedException | InternalServerException | ResourceNotFoundException | ThrottlingException | ValidationException | CommonAwsError
  >;
  updateKxClusterCodeConfiguration(
    input: UpdateKxClusterCodeConfigurationRequest,
  ): Effect.Effect<
    UpdateKxClusterCodeConfigurationResponse,
    AccessDeniedException | ConflictException | InternalServerException | LimitExceededException | ResourceNotFoundException | ThrottlingException | ValidationException | CommonAwsError
  >;
  updateKxClusterDatabases(
    input: UpdateKxClusterDatabasesRequest,
  ): Effect.Effect<
    UpdateKxClusterDatabasesResponse,
    AccessDeniedException | ConflictException | InternalServerException | LimitExceededException | ResourceNotFoundException | ThrottlingException | ValidationException | CommonAwsError
  >;
  updateKxDatabase(
    input: UpdateKxDatabaseRequest,
  ): Effect.Effect<
    UpdateKxDatabaseResponse,
    AccessDeniedException | ConflictException | InternalServerException | ResourceNotFoundException | ThrottlingException | ValidationException | CommonAwsError
  >;
  updateKxDataview(
    input: UpdateKxDataviewRequest,
  ): Effect.Effect<
    UpdateKxDataviewResponse,
    AccessDeniedException | ConflictException | InternalServerException | ResourceAlreadyExistsException | ResourceNotFoundException | ThrottlingException | ValidationException | CommonAwsError
  >;
  updateKxEnvironment(
    input: UpdateKxEnvironmentRequest,
  ): Effect.Effect<
    UpdateKxEnvironmentResponse,
    AccessDeniedException | ConflictException | InternalServerException | ResourceNotFoundException | ThrottlingException | ValidationException | CommonAwsError
  >;
  updateKxEnvironmentNetwork(
    input: UpdateKxEnvironmentNetworkRequest,
  ): Effect.Effect<
    UpdateKxEnvironmentNetworkResponse,
    AccessDeniedException | ConflictException | InternalServerException | ResourceNotFoundException | ThrottlingException | ValidationException | CommonAwsError
  >;
  updateKxUser(
    input: UpdateKxUserRequest,
  ): Effect.Effect<
    UpdateKxUserResponse,
    AccessDeniedException | ConflictException | InternalServerException | LimitExceededException | ResourceNotFoundException | ThrottlingException | ValidationException | CommonAwsError
  >;
  updateKxVolume(
    input: UpdateKxVolumeRequest,
  ): Effect.Effect<
    UpdateKxVolumeResponse,
    AccessDeniedException | ConflictException | InternalServerException | LimitExceededException | ResourceNotFoundException | ThrottlingException | ValidationException | CommonAwsError
  >;
}

export type Finspace = AWSHabaneroManagementService;

export declare class AccessDeniedException extends Data.TaggedError(
  "AccessDeniedException",
)<{
  readonly message?: string;
}> {}
export type arn = string;

export type AttachedClusterList = Array<string>;
export type AttributeMap = Record<string, string>;
export interface AutoScalingConfiguration {
  minNodeCount?: number;
  maxNodeCount?: number;
  autoScalingMetric?: AutoScalingMetric;
  metricTarget?: number;
  scaleInCooldownSeconds?: number;
  scaleOutCooldownSeconds?: number;
}
export type AutoScalingMetric = "CPU_UTILIZATION_PERCENTAGE";
export type AutoScalingMetricTarget = number;

export type AvailabilityZoneId = string;

export type AvailabilityZoneIds = Array<string>;
export type booleanValue = boolean;

export type BoxedInteger = number;

export interface CapacityConfiguration {
  nodeType?: string;
  nodeCount?: number;
}
export interface ChangeRequest {
  changeType: ChangeType;
  s3Path?: string;
  dbPath: string;
}
export type ChangeRequests = Array<ChangeRequest>;
export type ChangesetId = string;

export type ChangesetStatus = "PENDING" | "PROCESSING" | "FAILED" | "COMPLETED";
export type ChangeType = "PUT" | "DELETE";
export type ClientToken = string;

export type ClientTokenString = string;

export type ClusterNodeCount = number;

export interface CodeConfiguration {
  s3Bucket?: string;
  s3Key?: string;
  s3ObjectVersion?: string;
}
export declare class ConflictException extends Data.TaggedError(
  "ConflictException",
)<{
  readonly message?: string;
  readonly reason?: string;
}> {}
export type CooldownTime = number;

export type CpuCount = number;

export interface CreateEnvironmentRequest {
  name: string;
  description?: string;
  kmsKeyId?: string;
  tags?: Record<string, string>;
  federationMode?: FederationMode;
  federationParameters?: FederationParameters;
  superuserParameters?: SuperuserParameters;
  dataBundles?: Array<string>;
}
export interface CreateEnvironmentResponse {
  environmentId?: string;
  environmentArn?: string;
  environmentUrl?: string;
}
export interface CreateKxChangesetRequest {
  environmentId: string;
  databaseName: string;
  changeRequests: Array<ChangeRequest>;
  clientToken: string;
}
export interface CreateKxChangesetResponse {
  changesetId?: string;
  databaseName?: string;
  environmentId?: string;
  changeRequests?: Array<ChangeRequest>;
  createdTimestamp?: Date | string;
  lastModifiedTimestamp?: Date | string;
  status?: ChangesetStatus;
  errorInfo?: ErrorInfo;
}
export interface CreateKxClusterRequest {
  clientToken?: string;
  environmentId: string;
  clusterName: string;
  clusterType: KxClusterType;
  tickerplantLogConfiguration?: TickerplantLogConfiguration;
  databases?: Array<KxDatabaseConfiguration>;
  cacheStorageConfigurations?: Array<KxCacheStorageConfiguration>;
  autoScalingConfiguration?: AutoScalingConfiguration;
  clusterDescription?: string;
  capacityConfiguration?: CapacityConfiguration;
  releaseLabel: string;
  vpcConfiguration: VpcConfiguration;
  initializationScript?: string;
  commandLineArguments?: Array<KxCommandLineArgument>;
  code?: CodeConfiguration;
  executionRole?: string;
  savedownStorageConfiguration?: KxSavedownStorageConfiguration;
  azMode: KxAzMode;
  availabilityZoneId?: string;
  tags?: Record<string, string>;
  scalingGroupConfiguration?: KxScalingGroupConfiguration;
}
export interface CreateKxClusterResponse {
  environmentId?: string;
  status?: KxClusterStatus;
  statusReason?: string;
  clusterName?: string;
  clusterType?: KxClusterType;
  tickerplantLogConfiguration?: TickerplantLogConfiguration;
  volumes?: Array<Volume>;
  databases?: Array<KxDatabaseConfiguration>;
  cacheStorageConfigurations?: Array<KxCacheStorageConfiguration>;
  autoScalingConfiguration?: AutoScalingConfiguration;
  clusterDescription?: string;
  capacityConfiguration?: CapacityConfiguration;
  releaseLabel?: string;
  vpcConfiguration?: VpcConfiguration;
  initializationScript?: string;
  commandLineArguments?: Array<KxCommandLineArgument>;
  code?: CodeConfiguration;
  executionRole?: string;
  lastModifiedTimestamp?: Date | string;
  savedownStorageConfiguration?: KxSavedownStorageConfiguration;
  azMode?: KxAzMode;
  availabilityZoneId?: string;
  createdTimestamp?: Date | string;
  scalingGroupConfiguration?: KxScalingGroupConfiguration;
}
export interface CreateKxDatabaseRequest {
  environmentId: string;
  databaseName: string;
  description?: string;
  tags?: Record<string, string>;
  clientToken: string;
}
export interface CreateKxDatabaseResponse {
  databaseName?: string;
  databaseArn?: string;
  environmentId?: string;
  description?: string;
  createdTimestamp?: Date | string;
  lastModifiedTimestamp?: Date | string;
}
export interface CreateKxDataviewRequest {
  environmentId: string;
  databaseName: string;
  dataviewName: string;
  azMode: KxAzMode;
  availabilityZoneId?: string;
  changesetId?: string;
  segmentConfigurations?: Array<KxDataviewSegmentConfiguration>;
  autoUpdate?: boolean;
  readWrite?: boolean;
  description?: string;
  tags?: Record<string, string>;
  clientToken: string;
}
export interface CreateKxDataviewResponse {
  dataviewName?: string;
  databaseName?: string;
  environmentId?: string;
  azMode?: KxAzMode;
  availabilityZoneId?: string;
  changesetId?: string;
  segmentConfigurations?: Array<KxDataviewSegmentConfiguration>;
  description?: string;
  autoUpdate?: boolean;
  readWrite?: boolean;
  createdTimestamp?: Date | string;
  lastModifiedTimestamp?: Date | string;
  status?: KxDataviewStatus;
}
export interface CreateKxEnvironmentRequest {
  name: string;
  description?: string;
  kmsKeyId: string;
  tags?: Record<string, string>;
  clientToken?: string;
}
export interface CreateKxEnvironmentResponse {
  name?: string;
  status?: EnvironmentStatus;
  environmentId?: string;
  description?: string;
  environmentArn?: string;
  kmsKeyId?: string;
  creationTimestamp?: Date | string;
}
export interface CreateKxScalingGroupRequest {
  clientToken: string;
  environmentId: string;
  scalingGroupName: string;
  hostType: string;
  availabilityZoneId: string;
  tags?: Record<string, string>;
}
export interface CreateKxScalingGroupResponse {
  environmentId?: string;
  scalingGroupName?: string;
  hostType?: string;
  availabilityZoneId?: string;
  status?: KxScalingGroupStatus;
  lastModifiedTimestamp?: Date | string;
  createdTimestamp?: Date | string;
}
export interface CreateKxUserRequest {
  environmentId: string;
  userName: string;
  iamRole: string;
  tags?: Record<string, string>;
  clientToken?: string;
}
export interface CreateKxUserResponse {
  userName?: string;
  userArn?: string;
  environmentId?: string;
  iamRole?: string;
}
export interface CreateKxVolumeRequest {
  clientToken?: string;
  environmentId: string;
  volumeType: KxVolumeType;
  volumeName: string;
  description?: string;
  nas1Configuration?: KxNAS1Configuration;
  azMode: KxAzMode;
  availabilityZoneIds: Array<string>;
  tags?: Record<string, string>;
}
export interface CreateKxVolumeResponse {
  environmentId?: string;
  volumeName?: string;
  volumeType?: KxVolumeType;
  volumeArn?: string;
  nas1Configuration?: KxNAS1Configuration;
  status?: KxVolumeStatus;
  statusReason?: string;
  azMode?: KxAzMode;
  description?: string;
  availabilityZoneIds?: Array<string>;
  createdTimestamp?: Date | string;
}
export type CustomDNSConfiguration = Array<CustomDNSServer>;
export interface CustomDNSServer {
  customDNSServerName: string;
  customDNSServerIP: string;
}
export type DatabaseArn = string;

export type DatabaseName = string;

export type DataBundleArn = string;

export type DataBundleArns = Array<string>;
export type DbPath = string;

export type DbPaths = Array<string>;
export interface DeleteEnvironmentRequest {
  environmentId: string;
}
export interface DeleteEnvironmentResponse {
}
export interface DeleteKxClusterNodeRequest {
  environmentId: string;
  clusterName: string;
  nodeId: string;
}
export interface DeleteKxClusterNodeResponse {
}
export interface DeleteKxClusterRequest {
  environmentId: string;
  clusterName: string;
  clientToken?: string;
}
export interface DeleteKxClusterResponse {
}
export interface DeleteKxDatabaseRequest {
  environmentId: string;
  databaseName: string;
  clientToken: string;
}
export interface DeleteKxDatabaseResponse {
}
export interface DeleteKxDataviewRequest {
  environmentId: string;
  databaseName: string;
  dataviewName: string;
  clientToken: string;
}
export interface DeleteKxDataviewResponse {
}
export interface DeleteKxEnvironmentRequest {
  environmentId: string;
  clientToken?: string;
}
export interface DeleteKxEnvironmentResponse {
}
export interface DeleteKxScalingGroupRequest {
  environmentId: string;
  scalingGroupName: string;
  clientToken?: string;
}
export interface DeleteKxScalingGroupResponse {
}
export interface DeleteKxUserRequest {
  userName: string;
  environmentId: string;
  clientToken?: string;
}
export interface DeleteKxUserResponse {
}
export interface DeleteKxVolumeRequest {
  environmentId: string;
  volumeName: string;
  clientToken?: string;
}
export interface DeleteKxVolumeResponse {
}
export type Description = string;

export type dnsStatus = "NONE" | "UPDATE_REQUESTED" | "UPDATING" | "FAILED_UPDATE" | "SUCCESSFULLY_UPDATED";
export type EmailId = string;

export interface Environment {
  name?: string;
  environmentId?: string;
  awsAccountId?: string;
  status?: EnvironmentStatus;
  environmentUrl?: string;
  description?: string;
  environmentArn?: string;
  sageMakerStudioDomainUrl?: string;
  kmsKeyId?: string;
  dedicatedServiceAccountId?: string;
  federationMode?: FederationMode;
  federationParameters?: FederationParameters;
}
export type EnvironmentArn = string;

export type EnvironmentErrorMessage = string;

export type EnvironmentId = string;

export type EnvironmentList = Array<Environment>;
export type EnvironmentName = string;

export type EnvironmentStatus = "CREATE_REQUESTED" | "CREATING" | "CREATED" | "DELETE_REQUESTED" | "DELETING" | "DELETED" | "FAILED_CREATION" | "RETRY_DELETION" | "FAILED_DELETION" | "UPDATE_NETWORK_REQUESTED" | "UPDATING_NETWORK" | "FAILED_UPDATING_NETWORK" | "SUSPENDED";
export type ErrorDetails = "VALIDATION" | "SERVICE_QUOTA_EXCEEDED" | "ACCESS_DENIED" | "RESOURCE_NOT_FOUND" | "THROTTLING" | "INTERNAL_SERVICE_EXCEPTION" | "CANCELLED" | "USER_RECOVERABLE";
export interface ErrorInfo {
  errorMessage?: string;
  errorType?: ErrorDetails;
}
export type ErrorMessage = string;

export type ErrorMessage2 = string;

export type ExecutionRoleArn = string;

export type FederationAttributeKey = string;

export type FederationAttributeValue = string;

export type FederationMode = "FEDERATED" | "LOCAL";
export interface FederationParameters {
  samlMetadataDocument?: string;
  samlMetadataURL?: string;
  applicationCallBackURL?: string;
  federationURN?: string;
  federationProviderName?: string;
  attributeMap?: Record<string, string>;
}
export type FederationProviderName = string;

export type FinSpaceTaggableArn = string;

export interface GetEnvironmentRequest {
  environmentId: string;
}
export interface GetEnvironmentResponse {
  environment?: Environment;
}
export interface GetKxChangesetRequest {
  environmentId: string;
  databaseName: string;
  changesetId: string;
}
export interface GetKxChangesetResponse {
  changesetId?: string;
  databaseName?: string;
  environmentId?: string;
  changeRequests?: Array<ChangeRequest>;
  createdTimestamp?: Date | string;
  activeFromTimestamp?: Date | string;
  lastModifiedTimestamp?: Date | string;
  status?: ChangesetStatus;
  errorInfo?: ErrorInfo;
}
export interface GetKxClusterRequest {
  environmentId: string;
  clusterName: string;
}
export interface GetKxClusterResponse {
  status?: KxClusterStatus;
  statusReason?: string;
  clusterName?: string;
  clusterType?: KxClusterType;
  tickerplantLogConfiguration?: TickerplantLogConfiguration;
  volumes?: Array<Volume>;
  databases?: Array<KxDatabaseConfiguration>;
  cacheStorageConfigurations?: Array<KxCacheStorageConfiguration>;
  autoScalingConfiguration?: AutoScalingConfiguration;
  clusterDescription?: string;
  capacityConfiguration?: CapacityConfiguration;
  releaseLabel?: string;
  vpcConfiguration?: VpcConfiguration;
  initializationScript?: string;
  commandLineArguments?: Array<KxCommandLineArgument>;
  code?: CodeConfiguration;
  executionRole?: string;
  lastModifiedTimestamp?: Date | string;
  savedownStorageConfiguration?: KxSavedownStorageConfiguration;
  azMode?: KxAzMode;
  availabilityZoneId?: string;
  createdTimestamp?: Date | string;
  scalingGroupConfiguration?: KxScalingGroupConfiguration;
}
export interface GetKxConnectionStringRequest {
  userArn: string;
  environmentId: string;
  clusterName: string;
}
export interface GetKxConnectionStringResponse {
  signedConnectionString?: string;
}
export interface GetKxDatabaseRequest {
  environmentId: string;
  databaseName: string;
}
export interface GetKxDatabaseResponse {
  databaseName?: string;
  databaseArn?: string;
  environmentId?: string;
  description?: string;
  createdTimestamp?: Date | string;
  lastModifiedTimestamp?: Date | string;
  lastCompletedChangesetId?: string;
  numBytes?: number;
  numChangesets?: number;
  numFiles?: number;
}
export interface GetKxDataviewRequest {
  environmentId: string;
  databaseName: string;
  dataviewName: string;
}
export interface GetKxDataviewResponse {
  databaseName?: string;
  dataviewName?: string;
  azMode?: KxAzMode;
  availabilityZoneId?: string;
  changesetId?: string;
  segmentConfigurations?: Array<KxDataviewSegmentConfiguration>;
  activeVersions?: Array<KxDataviewActiveVersion>;
  description?: string;
  autoUpdate?: boolean;
  readWrite?: boolean;
  environmentId?: string;
  createdTimestamp?: Date | string;
  lastModifiedTimestamp?: Date | string;
  status?: KxDataviewStatus;
  statusReason?: string;
}
export interface GetKxEnvironmentRequest {
  environmentId: string;
}
export interface GetKxEnvironmentResponse {
  name?: string;
  environmentId?: string;
  awsAccountId?: string;
  status?: EnvironmentStatus;
  tgwStatus?: tgwStatus;
  dnsStatus?: dnsStatus;
  errorMessage?: string;
  description?: string;
  environmentArn?: string;
  kmsKeyId?: string;
  dedicatedServiceAccountId?: string;
  transitGatewayConfiguration?: TransitGatewayConfiguration;
  customDNSConfiguration?: Array<CustomDNSServer>;
  creationTimestamp?: Date | string;
  updateTimestamp?: Date | string;
  availabilityZoneIds?: Array<string>;
  certificateAuthorityArn?: string;
}
export interface GetKxScalingGroupRequest {
  environmentId: string;
  scalingGroupName: string;
}
export interface GetKxScalingGroupResponse {
  scalingGroupName?: string;
  scalingGroupArn?: string;
  hostType?: string;
  clusters?: Array<string>;
  availabilityZoneId?: string;
  status?: KxScalingGroupStatus;
  statusReason?: string;
  lastModifiedTimestamp?: Date | string;
  createdTimestamp?: Date | string;
}
export interface GetKxUserRequest {
  userName: string;
  environmentId: string;
}
export interface GetKxUserResponse {
  userName?: string;
  userArn?: string;
  environmentId?: string;
  iamRole?: string;
}
export interface GetKxVolumeRequest {
  environmentId: string;
  volumeName: string;
}
export interface GetKxVolumeResponse {
  environmentId?: string;
  volumeName?: string;
  volumeType?: KxVolumeType;
  volumeArn?: string;
  nas1Configuration?: KxNAS1Configuration;
  status?: KxVolumeStatus;
  statusReason?: string;
  createdTimestamp?: Date | string;
  description?: string;
  azMode?: KxAzMode;
  availabilityZoneIds?: Array<string>;
  lastModifiedTimestamp?: Date | string;
  attachedClusters?: Array<KxAttachedCluster>;
}
export interface IcmpTypeCode {
  type: number;
  code: number;
}
export type IcmpTypeOrCode = number;

export type IdType = string;

export type InitializationScriptFilePath = string;

export declare class InternalServerException extends Data.TaggedError(
  "InternalServerException",
)<{
  readonly message?: string;
}> {}
export declare class InvalidRequestException extends Data.TaggedError(
  "InvalidRequestException",
)<{
  readonly message?: string;
}> {}
export type IPAddressType = "IP_V4";
export type KmsKeyARN = string;

export type KmsKeyId = string;

export interface KxAttachedCluster {
  clusterName?: string;
  clusterType?: KxClusterType;
  clusterStatus?: KxClusterStatus;
}
export type KxAttachedClusters = Array<KxAttachedCluster>;
export type KxAzMode = "SINGLE" | "MULTI";
export interface KxCacheStorageConfiguration {
  type: string;
  size: number;
}
export type KxCacheStorageConfigurations = Array<KxCacheStorageConfiguration>;
export type KxCacheStorageSize = number;

export type KxCacheStorageType = string;

export interface KxChangesetListEntry {
  changesetId?: string;
  createdTimestamp?: Date | string;
  activeFromTimestamp?: Date | string;
  lastModifiedTimestamp?: Date | string;
  status?: ChangesetStatus;
}
export type KxChangesets = Array<KxChangesetListEntry>;
export interface KxCluster {
  status?: KxClusterStatus;
  statusReason?: string;
  clusterName?: string;
  clusterType?: KxClusterType;
  clusterDescription?: string;
  releaseLabel?: string;
  volumes?: Array<Volume>;
  initializationScript?: string;
  executionRole?: string;
  azMode?: KxAzMode;
  availabilityZoneId?: string;
  lastModifiedTimestamp?: Date | string;
  createdTimestamp?: Date | string;
}
export interface KxClusterCodeDeploymentConfiguration {
  deploymentStrategy: KxClusterCodeDeploymentStrategy;
}
export type KxClusterCodeDeploymentStrategy = "NO_RESTART" | "ROLLING" | "FORCE";
export type KxClusterDescription = string;

export type KxClusterName = string;

export type KxClusterNameList = Array<string>;
export type KxClusterNodeIdString = string;

export type KxClusters = Array<KxCluster>;
export type KxClusterStatus = "PENDING" | "CREATING" | "CREATE_FAILED" | "RUNNING" | "UPDATING" | "DELETING" | "DELETED" | "DELETE_FAILED";
export type KxClusterStatusReason = string;

export type KxClusterType = "HDB" | "RDB" | "GATEWAY" | "GP" | "TICKERPLANT";
export interface KxCommandLineArgument {
  key?: string;
  value?: string;
}
export type KxCommandLineArgumentKey = string;

export type KxCommandLineArguments = Array<KxCommandLineArgument>;
export type KxCommandLineArgumentValue = string;

export interface KxDatabaseCacheConfiguration {
  cacheType: string;
  dbPaths: Array<string>;
  dataviewName?: string;
}
export type KxDatabaseCacheConfigurations = Array<KxDatabaseCacheConfiguration>;
export interface KxDatabaseConfiguration {
  databaseName: string;
  cacheConfigurations?: Array<KxDatabaseCacheConfiguration>;
  changesetId?: string;
  dataviewName?: string;
  dataviewConfiguration?: KxDataviewConfiguration;
}
export type KxDatabaseConfigurations = Array<KxDatabaseConfiguration>;
export interface KxDatabaseListEntry {
  databaseName?: string;
  createdTimestamp?: Date | string;
  lastModifiedTimestamp?: Date | string;
}
export type KxDatabases = Array<KxDatabaseListEntry>;
export interface KxDataviewActiveVersion {
  changesetId?: string;
  segmentConfigurations?: Array<KxDataviewSegmentConfiguration>;
  attachedClusters?: Array<string>;
  createdTimestamp?: Date | string;
  versionId?: string;
}
export type KxDataviewActiveVersionList = Array<KxDataviewActiveVersion>;
export interface KxDataviewConfiguration {
  dataviewName?: string;
  dataviewVersionId?: string;
  changesetId?: string;
  segmentConfigurations?: Array<KxDataviewSegmentConfiguration>;
}
export interface KxDataviewListEntry {
  environmentId?: string;
  databaseName?: string;
  dataviewName?: string;
  azMode?: KxAzMode;
  availabilityZoneId?: string;
  changesetId?: string;
  segmentConfigurations?: Array<KxDataviewSegmentConfiguration>;
  activeVersions?: Array<KxDataviewActiveVersion>;
  status?: KxDataviewStatus;
  description?: string;
  autoUpdate?: boolean;
  readWrite?: boolean;
  createdTimestamp?: Date | string;
  lastModifiedTimestamp?: Date | string;
  statusReason?: string;
}
export type KxDataviewName = string;

export type KxDataviews = Array<KxDataviewListEntry>;
export interface KxDataviewSegmentConfiguration {
  dbPaths: Array<string>;
  volumeName: string;
  onDemand?: boolean;
}
export type KxDataviewSegmentConfigurationList = Array<KxDataviewSegmentConfiguration>;
export type KxDataviewStatus = "CREATING" | "ACTIVE" | "UPDATING" | "FAILED" | "DELETING";
export type KxDataviewStatusReason = string;

export interface KxDeploymentConfiguration {
  deploymentStrategy: KxDeploymentStrategy;
}
export type KxDeploymentStrategy = "NO_RESTART" | "ROLLING";
export interface KxEnvironment {
  name?: string;
  environmentId?: string;
  awsAccountId?: string;
  status?: EnvironmentStatus;
  tgwStatus?: tgwStatus;
  dnsStatus?: dnsStatus;
  errorMessage?: string;
  description?: string;
  environmentArn?: string;
  kmsKeyId?: string;
  dedicatedServiceAccountId?: string;
  transitGatewayConfiguration?: TransitGatewayConfiguration;
  customDNSConfiguration?: Array<CustomDNSServer>;
  creationTimestamp?: Date | string;
  updateTimestamp?: Date | string;
  availabilityZoneIds?: Array<string>;
  certificateAuthorityArn?: string;
}
export type KxEnvironmentId = string;

export type KxEnvironmentList = Array<KxEnvironment>;
export type KxEnvironmentName = string;

export type KxHostType = string;

export interface KxNAS1Configuration {
  type?: KxNAS1Type;
  size?: number;
}
export type KxNAS1Size = number;

export type KxNAS1Type = "SSD_1000" | "SSD_250" | "HDD_12";
export interface KxNode {
  nodeId?: string;
  availabilityZoneId?: string;
  launchTime?: Date | string;
  status?: KxNodeStatus;
}
export type KxNodeStatus = "RUNNING" | "PROVISIONING";
export type KxNodeSummaries = Array<KxNode>;
export interface KxSavedownStorageConfiguration {
  type?: KxSavedownStorageType;
  size?: number;
  volumeName?: string;
}
export type KxSavedownStorageSize = number;

export type KxSavedownStorageType = "SDS01";
export interface KxScalingGroup {
  scalingGroupName?: string;
  hostType?: string;
  clusters?: Array<string>;
  availabilityZoneId?: string;
  status?: KxScalingGroupStatus;
  statusReason?: string;
  lastModifiedTimestamp?: Date | string;
  createdTimestamp?: Date | string;
}
export interface KxScalingGroupConfiguration {
  scalingGroupName: string;
  memoryLimit?: number;
  memoryReservation: number;
  nodeCount: number;
  cpu?: number;
}
export type KxScalingGroupList = Array<KxScalingGroup>;
export type KxScalingGroupName = string;

export type KxScalingGroupStatus = "CREATING" | "CREATE_FAILED" | "ACTIVE" | "DELETING" | "DELETED" | "DELETE_FAILED";
export interface KxUser {
  userArn?: string;
  userName?: string;
  iamRole?: string;
  createTimestamp?: Date | string;
  updateTimestamp?: Date | string;
}
export type KxUserArn = string;

export type KxUserList = Array<KxUser>;
export type KxUserNameString = string;

export interface KxVolume {
  volumeName?: string;
  volumeType?: KxVolumeType;
  status?: KxVolumeStatus;
  description?: string;
  statusReason?: string;
  azMode?: KxAzMode;
  availabilityZoneIds?: Array<string>;
  createdTimestamp?: Date | string;
  lastModifiedTimestamp?: Date | string;
}
export type KxVolumeArn = string;

export type KxVolumeName = string;

export type KxVolumes = Array<KxVolume>;
export type KxVolumeStatus = "CREATING" | "CREATE_FAILED" | "ACTIVE" | "UPDATING" | "UPDATED" | "UPDATE_FAILED" | "DELETING" | "DELETED" | "DELETE_FAILED";
export type KxVolumeStatusReason = string;

export type KxVolumeType = "NAS_1";
export declare class LimitExceededException extends Data.TaggedError(
  "LimitExceededException",
)<{
  readonly message?: string;
}> {}
export interface ListEnvironmentsRequest {
  nextToken?: string;
  maxResults?: number;
}
export interface ListEnvironmentsResponse {
  environments?: Array<Environment>;
  nextToken?: string;
}
export interface ListKxChangesetsRequest {
  environmentId: string;
  databaseName: string;
  nextToken?: string;
  maxResults?: number;
}
export interface ListKxChangesetsResponse {
  kxChangesets?: Array<KxChangesetListEntry>;
  nextToken?: string;
}
export interface ListKxClusterNodesRequest {
  environmentId: string;
  clusterName: string;
  nextToken?: string;
  maxResults?: number;
}
export interface ListKxClusterNodesResponse {
  nodes?: Array<KxNode>;
  nextToken?: string;
}
export interface ListKxClustersRequest {
  environmentId: string;
  clusterType?: KxClusterType;
  maxResults?: number;
  nextToken?: string;
}
export interface ListKxClustersResponse {
  kxClusterSummaries?: Array<KxCluster>;
  nextToken?: string;
}
export interface ListKxDatabasesRequest {
  environmentId: string;
  nextToken?: string;
  maxResults?: number;
}
export interface ListKxDatabasesResponse {
  kxDatabases?: Array<KxDatabaseListEntry>;
  nextToken?: string;
}
export interface ListKxDataviewsRequest {
  environmentId: string;
  databaseName: string;
  nextToken?: string;
  maxResults?: number;
}
export interface ListKxDataviewsResponse {
  kxDataviews?: Array<KxDataviewListEntry>;
  nextToken?: string;
}
export interface ListKxEnvironmentsRequest {
  nextToken?: string;
  maxResults?: number;
}
export interface ListKxEnvironmentsResponse {
  environments?: Array<KxEnvironment>;
  nextToken?: string;
}
export interface ListKxScalingGroupsRequest {
  environmentId: string;
  maxResults?: number;
  nextToken?: string;
}
export interface ListKxScalingGroupsResponse {
  scalingGroups?: Array<KxScalingGroup>;
  nextToken?: string;
}
export interface ListKxUsersRequest {
  environmentId: string;
  nextToken?: string;
  maxResults?: number;
}
export interface ListKxUsersResponse {
  users?: Array<KxUser>;
  nextToken?: string;
}
export interface ListKxVolumesRequest {
  environmentId: string;
  maxResults?: number;
  nextToken?: string;
  volumeType?: KxVolumeType;
}
export interface ListKxVolumesResponse {
  kxVolumeSummaries?: Array<KxVolume>;
  nextToken?: string;
}
export interface ListTagsForResourceRequest {
  resourceArn: string;
}
export interface ListTagsForResourceResponse {
  tags?: Record<string, string>;
}
export type MaxResults = number;

export type MemoryMib = number;

export type NameString = string;

export type NetworkACLConfiguration = Array<NetworkACLEntry>;
export interface NetworkACLEntry {
  ruleNumber: number;
  protocol: string;
  ruleAction: RuleAction;
  portRange?: PortRange;
  icmpTypeCode?: IcmpTypeCode;
  cidrBlock: string;
}
export type NodeCount = number;

export type NodeType = string;

export type numBytes = number;

export type numChangesets = number;

export type numFiles = number;

export type PaginationToken = string;

export type Port = number;

export interface PortRange {
  from: number;
  to: number;
}
export type Protocol = string;

export type ReleaseLabel = string;

export declare class ResourceAlreadyExistsException extends Data.TaggedError(
  "ResourceAlreadyExistsException",
)<{
  readonly message?: string;
}> {}
export declare class ResourceNotFoundException extends Data.TaggedError(
  "ResourceNotFoundException",
)<{
  readonly message?: string;
}> {}
export type ResultLimit = number;

export type RoleArn = string;

export type RuleAction = "ALLOW" | "DENY";
export type RuleNumber = number;

export type S3Bucket = string;

export type S3Key = string;

export type S3ObjectVersion = string;

export type S3Path = string;

export type SamlMetadataDocument = string;

export type SecurityGroupIdList = Array<string>;
export type SecurityGroupIdString = string;

export type SegmentConfigurationDbPathList = Array<string>;
export declare class ServiceQuotaExceededException extends Data.TaggedError(
  "ServiceQuotaExceededException",
)<{
  readonly message?: string;
}> {}
export type SignedKxConnectionString = string;

export type SmsDomainUrl = string;

export type stringValueLength1to255 = string;

export type SubnetIdList = Array<string>;
export type SubnetIdString = string;

export interface SuperuserParameters {
  emailAddress: string;
  firstName: string;
  lastName: string;
}
export type TagKey = string;

export type TagKeyList = Array<string>;
export type TagMap = Record<string, string>;
export interface TagResourceRequest {
  resourceArn: string;
  tags: Record<string, string>;
}
export interface TagResourceResponse {
}
export type TagValue = string;

export type tgwStatus = "NONE" | "UPDATE_REQUESTED" | "UPDATING" | "FAILED_UPDATE" | "SUCCESSFULLY_UPDATED";
export declare class ThrottlingException extends Data.TaggedError(
  "ThrottlingException",
)<{
  readonly message?: string;
}> {}
export interface TickerplantLogConfiguration {
  tickerplantLogVolumes?: Array<string>;
}
export type TickerplantLogVolumes = Array<string>;
export type Timestamp = Date | string;

export interface TransitGatewayConfiguration {
  transitGatewayID: string;
  routableCIDRSpace: string;
  attachmentNetworkAclConfiguration?: Array<NetworkACLEntry>;
}
export type TransitGatewayID = string;

export interface UntagResourceRequest {
  resourceArn: string;
  tagKeys: Array<string>;
}
export interface UntagResourceResponse {
}
export interface UpdateEnvironmentRequest {
  environmentId: string;
  name?: string;
  description?: string;
  federationMode?: FederationMode;
  federationParameters?: FederationParameters;
}
export interface UpdateEnvironmentResponse {
  environment?: Environment;
}
export interface UpdateKxClusterCodeConfigurationRequest {
  environmentId: string;
  clusterName: string;
  clientToken?: string;
  code: CodeConfiguration;
  initializationScript?: string;
  commandLineArguments?: Array<KxCommandLineArgument>;
  deploymentConfiguration?: KxClusterCodeDeploymentConfiguration;
}
export interface UpdateKxClusterCodeConfigurationResponse {
}
export interface UpdateKxClusterDatabasesRequest {
  environmentId: string;
  clusterName: string;
  clientToken?: string;
  databases: Array<KxDatabaseConfiguration>;
  deploymentConfiguration?: KxDeploymentConfiguration;
}
export interface UpdateKxClusterDatabasesResponse {
}
export interface UpdateKxDatabaseRequest {
  environmentId: string;
  databaseName: string;
  description?: string;
  clientToken: string;
}
export interface UpdateKxDatabaseResponse {
  databaseName?: string;
  environmentId?: string;
  description?: string;
  lastModifiedTimestamp?: Date | string;
}
export interface UpdateKxDataviewRequest {
  environmentId: string;
  databaseName: string;
  dataviewName: string;
  description?: string;
  changesetId?: string;
  segmentConfigurations?: Array<KxDataviewSegmentConfiguration>;
  clientToken: string;
}
export interface UpdateKxDataviewResponse {
  environmentId?: string;
  databaseName?: string;
  dataviewName?: string;
  azMode?: KxAzMode;
  availabilityZoneId?: string;
  changesetId?: string;
  segmentConfigurations?: Array<KxDataviewSegmentConfiguration>;
  activeVersions?: Array<KxDataviewActiveVersion>;
  status?: KxDataviewStatus;
  autoUpdate?: boolean;
  readWrite?: boolean;
  description?: string;
  createdTimestamp?: Date | string;
  lastModifiedTimestamp?: Date | string;
}
export interface UpdateKxEnvironmentNetworkRequest {
  environmentId: string;
  transitGatewayConfiguration?: TransitGatewayConfiguration;
  customDNSConfiguration?: Array<CustomDNSServer>;
  clientToken?: string;
}
export interface UpdateKxEnvironmentNetworkResponse {
  name?: string;
  environmentId?: string;
  awsAccountId?: string;
  status?: EnvironmentStatus;
  tgwStatus?: tgwStatus;
  dnsStatus?: dnsStatus;
  errorMessage?: string;
  description?: string;
  environmentArn?: string;
  kmsKeyId?: string;
  dedicatedServiceAccountId?: string;
  transitGatewayConfiguration?: TransitGatewayConfiguration;
  customDNSConfiguration?: Array<CustomDNSServer>;
  creationTimestamp?: Date | string;
  updateTimestamp?: Date | string;
  availabilityZoneIds?: Array<string>;
}
export interface UpdateKxEnvironmentRequest {
  environmentId: string;
  name?: string;
  description?: string;
  clientToken?: string;
}
export interface UpdateKxEnvironmentResponse {
  name?: string;
  environmentId?: string;
  awsAccountId?: string;
  status?: EnvironmentStatus;
  tgwStatus?: tgwStatus;
  dnsStatus?: dnsStatus;
  errorMessage?: string;
  description?: string;
  environmentArn?: string;
  kmsKeyId?: string;
  dedicatedServiceAccountId?: string;
  transitGatewayConfiguration?: TransitGatewayConfiguration;
  customDNSConfiguration?: Array<CustomDNSServer>;
  creationTimestamp?: Date | string;
  updateTimestamp?: Date | string;
  availabilityZoneIds?: Array<string>;
}
export interface UpdateKxUserRequest {
  environmentId: string;
  userName: string;
  iamRole: string;
  clientToken?: string;
}
export interface UpdateKxUserResponse {
  userName?: string;
  userArn?: string;
  environmentId?: string;
  iamRole?: string;
}
export interface UpdateKxVolumeRequest {
  environmentId: string;
  volumeName: string;
  description?: string;
  clientToken?: string;
  nas1Configuration?: KxNAS1Configuration;
}
export interface UpdateKxVolumeResponse {
  environmentId?: string;
  volumeName?: string;
  volumeType?: KxVolumeType;
  volumeArn?: string;
  nas1Configuration?: KxNAS1Configuration;
  status?: KxVolumeStatus;
  description?: string;
  statusReason?: string;
  createdTimestamp?: Date | string;
  azMode?: KxAzMode;
  availabilityZoneIds?: Array<string>;
  lastModifiedTimestamp?: Date | string;
  attachedClusters?: Array<KxAttachedCluster>;
}
export type url = string;

export type urn = string;

export declare class ValidationException extends Data.TaggedError(
  "ValidationException",
)<{
  readonly message?: string;
}> {}
export type ValidCIDRBlock = string;

export type ValidCIDRSpace = string;

export type ValidHostname = string;

export type ValidIPAddress = string;

export type VersionId = string;

export interface Volume {
  volumeName?: string;
  volumeType?: VolumeType;
}
export type VolumeName = string;

export type Volumes = Array<Volume>;
export type VolumeType = "NAS_1";
export interface VpcConfiguration {
  vpcId?: string;
  securityGroupIds?: Array<string>;
  subnetIds?: Array<string>;
  ipAddressType?: IPAddressType;
}
export type VpcIdString = string;

export declare namespace CreateEnvironment {
  export type Input = CreateEnvironmentRequest;
  export type Output = CreateEnvironmentResponse;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | LimitExceededException
    | ServiceQuotaExceededException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace CreateKxChangeset {
  export type Input = CreateKxChangesetRequest;
  export type Output = CreateKxChangesetResponse;
  export type Error =
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | LimitExceededException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace CreateKxCluster {
  export type Input = CreateKxClusterRequest;
  export type Output = CreateKxClusterResponse;
  export type Error =
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | LimitExceededException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace CreateKxDatabase {
  export type Input = CreateKxDatabaseRequest;
  export type Output = CreateKxDatabaseResponse;
  export type Error =
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | LimitExceededException
    | ResourceAlreadyExistsException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace CreateKxDataview {
  export type Input = CreateKxDataviewRequest;
  export type Output = CreateKxDataviewResponse;
  export type Error =
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | LimitExceededException
    | ResourceAlreadyExistsException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace CreateKxEnvironment {
  export type Input = CreateKxEnvironmentRequest;
  export type Output = CreateKxEnvironmentResponse;
  export type Error =
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | LimitExceededException
    | ServiceQuotaExceededException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace CreateKxScalingGroup {
  export type Input = CreateKxScalingGroupRequest;
  export type Output = CreateKxScalingGroupResponse;
  export type Error =
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | LimitExceededException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace CreateKxUser {
  export type Input = CreateKxUserRequest;
  export type Output = CreateKxUserResponse;
  export type Error =
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | LimitExceededException
    | ResourceAlreadyExistsException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace CreateKxVolume {
  export type Input = CreateKxVolumeRequest;
  export type Output = CreateKxVolumeResponse;
  export type Error =
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | LimitExceededException
    | ResourceAlreadyExistsException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace DeleteEnvironment {
  export type Input = DeleteEnvironmentRequest;
  export type Output = DeleteEnvironmentResponse;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace DeleteKxCluster {
  export type Input = DeleteKxClusterRequest;
  export type Output = DeleteKxClusterResponse;
  export type Error =
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | LimitExceededException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace DeleteKxClusterNode {
  export type Input = DeleteKxClusterNodeRequest;
  export type Output = DeleteKxClusterNodeResponse;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace DeleteKxDatabase {
  export type Input = DeleteKxDatabaseRequest;
  export type Output = DeleteKxDatabaseResponse;
  export type Error =
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace DeleteKxDataview {
  export type Input = DeleteKxDataviewRequest;
  export type Output = DeleteKxDataviewResponse;
  export type Error =
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace DeleteKxEnvironment {
  export type Input = DeleteKxEnvironmentRequest;
  export type Output = DeleteKxEnvironmentResponse;
  export type Error =
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace DeleteKxScalingGroup {
  export type Input = DeleteKxScalingGroupRequest;
  export type Output = DeleteKxScalingGroupResponse;
  export type Error =
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | LimitExceededException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace DeleteKxUser {
  export type Input = DeleteKxUserRequest;
  export type Output = DeleteKxUserResponse;
  export type Error =
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace DeleteKxVolume {
  export type Input = DeleteKxVolumeRequest;
  export type Output = DeleteKxVolumeResponse;
  export type Error =
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | LimitExceededException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace GetEnvironment {
  export type Input = GetEnvironmentRequest;
  export type Output = GetEnvironmentResponse;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ValidationException
    | CommonAwsError;
}

export declare namespace GetKxChangeset {
  export type Input = GetKxChangesetRequest;
  export type Output = GetKxChangesetResponse;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace GetKxCluster {
  export type Input = GetKxClusterRequest;
  export type Output = GetKxClusterResponse;
  export type Error =
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | LimitExceededException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace GetKxConnectionString {
  export type Input = GetKxConnectionStringRequest;
  export type Output = GetKxConnectionStringResponse;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace GetKxDatabase {
  export type Input = GetKxDatabaseRequest;
  export type Output = GetKxDatabaseResponse;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace GetKxDataview {
  export type Input = GetKxDataviewRequest;
  export type Output = GetKxDataviewResponse;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace GetKxEnvironment {
  export type Input = GetKxEnvironmentRequest;
  export type Output = GetKxEnvironmentResponse;
  export type Error =
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ValidationException
    | CommonAwsError;
}

export declare namespace GetKxScalingGroup {
  export type Input = GetKxScalingGroupRequest;
  export type Output = GetKxScalingGroupResponse;
  export type Error =
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | LimitExceededException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace GetKxUser {
  export type Input = GetKxUserRequest;
  export type Output = GetKxUserResponse;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace GetKxVolume {
  export type Input = GetKxVolumeRequest;
  export type Output = GetKxVolumeResponse;
  export type Error =
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | LimitExceededException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace ListEnvironments {
  export type Input = ListEnvironmentsRequest;
  export type Output = ListEnvironmentsResponse;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ValidationException
    | CommonAwsError;
}

export declare namespace ListKxChangesets {
  export type Input = ListKxChangesetsRequest;
  export type Output = ListKxChangesetsResponse;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace ListKxClusterNodes {
  export type Input = ListKxClusterNodesRequest;
  export type Output = ListKxClusterNodesResponse;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | LimitExceededException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace ListKxClusters {
  export type Input = ListKxClustersRequest;
  export type Output = ListKxClustersResponse;
  export type Error =
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | LimitExceededException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace ListKxDatabases {
  export type Input = ListKxDatabasesRequest;
  export type Output = ListKxDatabasesResponse;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace ListKxDataviews {
  export type Input = ListKxDataviewsRequest;
  export type Output = ListKxDataviewsResponse;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace ListKxEnvironments {
  export type Input = ListKxEnvironmentsRequest;
  export type Output = ListKxEnvironmentsResponse;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ValidationException
    | CommonAwsError;
}

export declare namespace ListKxScalingGroups {
  export type Input = ListKxScalingGroupsRequest;
  export type Output = ListKxScalingGroupsResponse;
  export type Error =
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | LimitExceededException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace ListKxUsers {
  export type Input = ListKxUsersRequest;
  export type Output = ListKxUsersResponse;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace ListKxVolumes {
  export type Input = ListKxVolumesRequest;
  export type Output = ListKxVolumesResponse;
  export type Error =
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | LimitExceededException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace ListTagsForResource {
  export type Input = ListTagsForResourceRequest;
  export type Output = ListTagsForResourceResponse;
  export type Error =
    | InternalServerException
    | InvalidRequestException
    | ResourceNotFoundException
    | CommonAwsError;
}

export declare namespace TagResource {
  export type Input = TagResourceRequest;
  export type Output = TagResourceResponse;
  export type Error =
    | InternalServerException
    | InvalidRequestException
    | ResourceNotFoundException
    | CommonAwsError;
}

export declare namespace UntagResource {
  export type Input = UntagResourceRequest;
  export type Output = UntagResourceResponse;
  export type Error =
    | InternalServerException
    | InvalidRequestException
    | ResourceNotFoundException
    | CommonAwsError;
}

export declare namespace UpdateEnvironment {
  export type Input = UpdateEnvironmentRequest;
  export type Output = UpdateEnvironmentResponse;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace UpdateKxClusterCodeConfiguration {
  export type Input = UpdateKxClusterCodeConfigurationRequest;
  export type Output = UpdateKxClusterCodeConfigurationResponse;
  export type Error =
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | LimitExceededException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace UpdateKxClusterDatabases {
  export type Input = UpdateKxClusterDatabasesRequest;
  export type Output = UpdateKxClusterDatabasesResponse;
  export type Error =
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | LimitExceededException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace UpdateKxDatabase {
  export type Input = UpdateKxDatabaseRequest;
  export type Output = UpdateKxDatabaseResponse;
  export type Error =
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace UpdateKxDataview {
  export type Input = UpdateKxDataviewRequest;
  export type Output = UpdateKxDataviewResponse;
  export type Error =
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceAlreadyExistsException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace UpdateKxEnvironment {
  export type Input = UpdateKxEnvironmentRequest;
  export type Output = UpdateKxEnvironmentResponse;
  export type Error =
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace UpdateKxEnvironmentNetwork {
  export type Input = UpdateKxEnvironmentNetworkRequest;
  export type Output = UpdateKxEnvironmentNetworkResponse;
  export type Error =
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace UpdateKxUser {
  export type Input = UpdateKxUserRequest;
  export type Output = UpdateKxUserResponse;
  export type Error =
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | LimitExceededException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace UpdateKxVolume {
  export type Input = UpdateKxVolumeRequest;
  export type Output = UpdateKxVolumeResponse;
  export type Error =
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | LimitExceededException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

