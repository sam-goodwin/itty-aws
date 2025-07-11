import type { Effect, Data } from "effect";
import type { CommonAwsError } from "../error.ts";

export interface AWSIoTSiteWise {
  associateAssets(
    input: AssociateAssetsRequest,
  ): Effect.Effect<
    {},
    | ConflictingOperationException
    | InternalFailureException
    | InvalidRequestException
    | LimitExceededException
    | ResourceAlreadyExistsException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError
  >;
  associateTimeSeriesToAssetProperty(
    input: AssociateTimeSeriesToAssetPropertyRequest,
  ): Effect.Effect<
    {},
    | ConflictingOperationException
    | InternalFailureException
    | InvalidRequestException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError
  >;
  batchAssociateProjectAssets(
    input: BatchAssociateProjectAssetsRequest,
  ): Effect.Effect<
    BatchAssociateProjectAssetsResponse,
    | InternalFailureException
    | InvalidRequestException
    | LimitExceededException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError
  >;
  batchDisassociateProjectAssets(
    input: BatchDisassociateProjectAssetsRequest,
  ): Effect.Effect<
    BatchDisassociateProjectAssetsResponse,
    | InternalFailureException
    | InvalidRequestException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError
  >;
  batchGetAssetPropertyAggregates(
    input: BatchGetAssetPropertyAggregatesRequest,
  ): Effect.Effect<
    BatchGetAssetPropertyAggregatesResponse,
    | InternalFailureException
    | InvalidRequestException
    | ServiceUnavailableException
    | ThrottlingException
    | CommonAwsError
  >;
  batchGetAssetPropertyValue(
    input: BatchGetAssetPropertyValueRequest,
  ): Effect.Effect<
    BatchGetAssetPropertyValueResponse,
    | InternalFailureException
    | InvalidRequestException
    | ServiceUnavailableException
    | ThrottlingException
    | CommonAwsError
  >;
  batchGetAssetPropertyValueHistory(
    input: BatchGetAssetPropertyValueHistoryRequest,
  ): Effect.Effect<
    BatchGetAssetPropertyValueHistoryResponse,
    | InternalFailureException
    | InvalidRequestException
    | ServiceUnavailableException
    | ThrottlingException
    | CommonAwsError
  >;
  batchPutAssetPropertyValue(
    input: BatchPutAssetPropertyValueRequest,
  ): Effect.Effect<
    BatchPutAssetPropertyValueResponse,
    | ConflictingOperationException
    | InternalFailureException
    | InvalidRequestException
    | LimitExceededException
    | ResourceNotFoundException
    | ServiceUnavailableException
    | ThrottlingException
    | CommonAwsError
  >;
  createAccessPolicy(
    input: CreateAccessPolicyRequest,
  ): Effect.Effect<
    CreateAccessPolicyResponse,
    | InternalFailureException
    | InvalidRequestException
    | LimitExceededException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError
  >;
  createAsset(
    input: CreateAssetRequest,
  ): Effect.Effect<
    CreateAssetResponse,
    | ConflictingOperationException
    | InternalFailureException
    | InvalidRequestException
    | LimitExceededException
    | ResourceAlreadyExistsException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError
  >;
  createAssetModel(
    input: CreateAssetModelRequest,
  ): Effect.Effect<
    CreateAssetModelResponse,
    | ConflictingOperationException
    | InternalFailureException
    | InvalidRequestException
    | LimitExceededException
    | ResourceAlreadyExistsException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError
  >;
  createAssetModelCompositeModel(
    input: CreateAssetModelCompositeModelRequest,
  ): Effect.Effect<
    CreateAssetModelCompositeModelResponse,
    | ConflictingOperationException
    | InternalFailureException
    | InvalidRequestException
    | LimitExceededException
    | PreconditionFailedException
    | ResourceAlreadyExistsException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError
  >;
  createBulkImportJob(
    input: CreateBulkImportJobRequest,
  ): Effect.Effect<
    CreateBulkImportJobResponse,
    | ConflictingOperationException
    | InternalFailureException
    | InvalidRequestException
    | LimitExceededException
    | ResourceAlreadyExistsException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError
  >;
  createDashboard(
    input: CreateDashboardRequest,
  ): Effect.Effect<
    CreateDashboardResponse,
    | InternalFailureException
    | InvalidRequestException
    | LimitExceededException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError
  >;
  createDataset(
    input: CreateDatasetRequest,
  ): Effect.Effect<
    CreateDatasetResponse,
    | ConflictingOperationException
    | InternalFailureException
    | InvalidRequestException
    | LimitExceededException
    | ResourceAlreadyExistsException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError
  >;
  createGateway(
    input: CreateGatewayRequest,
  ): Effect.Effect<
    CreateGatewayResponse,
    | InternalFailureException
    | InvalidRequestException
    | LimitExceededException
    | ResourceAlreadyExistsException
    | ThrottlingException
    | CommonAwsError
  >;
  createPortal(
    input: CreatePortalRequest,
  ): Effect.Effect<
    CreatePortalResponse,
    | InternalFailureException
    | InvalidRequestException
    | LimitExceededException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError
  >;
  createProject(
    input: CreateProjectRequest,
  ): Effect.Effect<
    CreateProjectResponse,
    | InternalFailureException
    | InvalidRequestException
    | LimitExceededException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError
  >;
  deleteAccessPolicy(
    input: DeleteAccessPolicyRequest,
  ): Effect.Effect<
    DeleteAccessPolicyResponse,
    | InternalFailureException
    | InvalidRequestException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError
  >;
  deleteAsset(
    input: DeleteAssetRequest,
  ): Effect.Effect<
    DeleteAssetResponse,
    | ConflictingOperationException
    | InternalFailureException
    | InvalidRequestException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError
  >;
  deleteAssetModel(
    input: DeleteAssetModelRequest,
  ): Effect.Effect<
    DeleteAssetModelResponse,
    | ConflictingOperationException
    | InternalFailureException
    | InvalidRequestException
    | PreconditionFailedException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError
  >;
  deleteAssetModelCompositeModel(
    input: DeleteAssetModelCompositeModelRequest,
  ): Effect.Effect<
    DeleteAssetModelCompositeModelResponse,
    | ConflictingOperationException
    | InternalFailureException
    | InvalidRequestException
    | PreconditionFailedException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError
  >;
  deleteDashboard(
    input: DeleteDashboardRequest,
  ): Effect.Effect<
    DeleteDashboardResponse,
    | InternalFailureException
    | InvalidRequestException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError
  >;
  deleteDataset(
    input: DeleteDatasetRequest,
  ): Effect.Effect<
    DeleteDatasetResponse,
    | ConflictingOperationException
    | InternalFailureException
    | InvalidRequestException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError
  >;
  deleteGateway(
    input: DeleteGatewayRequest,
  ): Effect.Effect<
    {},
    | ConflictingOperationException
    | InternalFailureException
    | InvalidRequestException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError
  >;
  deletePortal(
    input: DeletePortalRequest,
  ): Effect.Effect<
    DeletePortalResponse,
    | ConflictingOperationException
    | InternalFailureException
    | InvalidRequestException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError
  >;
  deleteProject(
    input: DeleteProjectRequest,
  ): Effect.Effect<
    DeleteProjectResponse,
    | InternalFailureException
    | InvalidRequestException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError
  >;
  deleteTimeSeries(
    input: DeleteTimeSeriesRequest,
  ): Effect.Effect<
    {},
    | ConflictingOperationException
    | InternalFailureException
    | InvalidRequestException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError
  >;
  describeAccessPolicy(
    input: DescribeAccessPolicyRequest,
  ): Effect.Effect<
    DescribeAccessPolicyResponse,
    | InternalFailureException
    | InvalidRequestException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError
  >;
  describeAction(
    input: DescribeActionRequest,
  ): Effect.Effect<
    DescribeActionResponse,
    | InternalFailureException
    | InvalidRequestException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError
  >;
  describeAsset(
    input: DescribeAssetRequest,
  ): Effect.Effect<
    DescribeAssetResponse,
    | InternalFailureException
    | InvalidRequestException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError
  >;
  describeAssetCompositeModel(
    input: DescribeAssetCompositeModelRequest,
  ): Effect.Effect<
    DescribeAssetCompositeModelResponse,
    | InternalFailureException
    | InvalidRequestException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError
  >;
  describeAssetModel(
    input: DescribeAssetModelRequest,
  ): Effect.Effect<
    DescribeAssetModelResponse,
    | InternalFailureException
    | InvalidRequestException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError
  >;
  describeAssetModelCompositeModel(
    input: DescribeAssetModelCompositeModelRequest,
  ): Effect.Effect<
    DescribeAssetModelCompositeModelResponse,
    | InternalFailureException
    | InvalidRequestException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError
  >;
  describeAssetProperty(
    input: DescribeAssetPropertyRequest,
  ): Effect.Effect<
    DescribeAssetPropertyResponse,
    | InternalFailureException
    | InvalidRequestException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError
  >;
  describeBulkImportJob(
    input: DescribeBulkImportJobRequest,
  ): Effect.Effect<
    DescribeBulkImportJobResponse,
    | InternalFailureException
    | InvalidRequestException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError
  >;
  describeDashboard(
    input: DescribeDashboardRequest,
  ): Effect.Effect<
    DescribeDashboardResponse,
    | InternalFailureException
    | InvalidRequestException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError
  >;
  describeDataset(
    input: DescribeDatasetRequest,
  ): Effect.Effect<
    DescribeDatasetResponse,
    | InternalFailureException
    | InvalidRequestException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError
  >;
  describeDefaultEncryptionConfiguration(
    input: DescribeDefaultEncryptionConfigurationRequest,
  ): Effect.Effect<
    DescribeDefaultEncryptionConfigurationResponse,
    | InternalFailureException
    | InvalidRequestException
    | ThrottlingException
    | CommonAwsError
  >;
  describeGateway(
    input: DescribeGatewayRequest,
  ): Effect.Effect<
    DescribeGatewayResponse,
    | InternalFailureException
    | InvalidRequestException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError
  >;
  describeGatewayCapabilityConfiguration(
    input: DescribeGatewayCapabilityConfigurationRequest,
  ): Effect.Effect<
    DescribeGatewayCapabilityConfigurationResponse,
    | InternalFailureException
    | InvalidRequestException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError
  >;
  describeLoggingOptions(
    input: DescribeLoggingOptionsRequest,
  ): Effect.Effect<
    DescribeLoggingOptionsResponse,
    | InternalFailureException
    | InvalidRequestException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError
  >;
  describePortal(
    input: DescribePortalRequest,
  ): Effect.Effect<
    DescribePortalResponse,
    | InternalFailureException
    | InvalidRequestException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError
  >;
  describeProject(
    input: DescribeProjectRequest,
  ): Effect.Effect<
    DescribeProjectResponse,
    | InternalFailureException
    | InvalidRequestException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError
  >;
  describeStorageConfiguration(
    input: DescribeStorageConfigurationRequest,
  ): Effect.Effect<
    DescribeStorageConfigurationResponse,
    | ConflictingOperationException
    | InternalFailureException
    | InvalidRequestException
    | LimitExceededException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError
  >;
  describeTimeSeries(
    input: DescribeTimeSeriesRequest,
  ): Effect.Effect<
    DescribeTimeSeriesResponse,
    | InternalFailureException
    | InvalidRequestException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError
  >;
  disassociateAssets(
    input: DisassociateAssetsRequest,
  ): Effect.Effect<
    {},
    | ConflictingOperationException
    | InternalFailureException
    | InvalidRequestException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError
  >;
  disassociateTimeSeriesFromAssetProperty(
    input: DisassociateTimeSeriesFromAssetPropertyRequest,
  ): Effect.Effect<
    {},
    | ConflictingOperationException
    | InternalFailureException
    | InvalidRequestException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError
  >;
  executeAction(
    input: ExecuteActionRequest,
  ): Effect.Effect<
    ExecuteActionResponse,
    | ConflictingOperationException
    | InternalFailureException
    | InvalidRequestException
    | LimitExceededException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError
  >;
  executeQuery(
    input: ExecuteQueryRequest,
  ): Effect.Effect<
    ExecuteQueryResponse,
    | AccessDeniedException
    | InternalFailureException
    | InvalidRequestException
    | QueryTimeoutException
    | ServiceUnavailableException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  getAssetPropertyAggregates(
    input: GetAssetPropertyAggregatesRequest,
  ): Effect.Effect<
    GetAssetPropertyAggregatesResponse,
    | InternalFailureException
    | InvalidRequestException
    | ResourceNotFoundException
    | ServiceUnavailableException
    | ThrottlingException
    | CommonAwsError
  >;
  getAssetPropertyValue(
    input: GetAssetPropertyValueRequest,
  ): Effect.Effect<
    GetAssetPropertyValueResponse,
    | InternalFailureException
    | InvalidRequestException
    | ResourceNotFoundException
    | ServiceUnavailableException
    | ThrottlingException
    | CommonAwsError
  >;
  getAssetPropertyValueHistory(
    input: GetAssetPropertyValueHistoryRequest,
  ): Effect.Effect<
    GetAssetPropertyValueHistoryResponse,
    | InternalFailureException
    | InvalidRequestException
    | ResourceNotFoundException
    | ServiceUnavailableException
    | ThrottlingException
    | CommonAwsError
  >;
  getInterpolatedAssetPropertyValues(
    input: GetInterpolatedAssetPropertyValuesRequest,
  ): Effect.Effect<
    GetInterpolatedAssetPropertyValuesResponse,
    | InternalFailureException
    | InvalidRequestException
    | ResourceNotFoundException
    | ServiceUnavailableException
    | ThrottlingException
    | CommonAwsError
  >;
  invokeAssistant(
    input: InvokeAssistantRequest,
  ): Effect.Effect<
    InvokeAssistantResponse,
    | AccessDeniedException
    | ConflictingOperationException
    | InternalFailureException
    | InvalidRequestException
    | LimitExceededException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError
  >;
  listAccessPolicies(
    input: ListAccessPoliciesRequest,
  ): Effect.Effect<
    ListAccessPoliciesResponse,
    | InternalFailureException
    | InvalidRequestException
    | ThrottlingException
    | CommonAwsError
  >;
  listActions(
    input: ListActionsRequest,
  ): Effect.Effect<
    ListActionsResponse,
    | InternalFailureException
    | InvalidRequestException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError
  >;
  listAssetModelCompositeModels(
    input: ListAssetModelCompositeModelsRequest,
  ): Effect.Effect<
    ListAssetModelCompositeModelsResponse,
    | InternalFailureException
    | InvalidRequestException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError
  >;
  listAssetModelProperties(
    input: ListAssetModelPropertiesRequest,
  ): Effect.Effect<
    ListAssetModelPropertiesResponse,
    | InternalFailureException
    | InvalidRequestException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError
  >;
  listAssetModels(
    input: ListAssetModelsRequest,
  ): Effect.Effect<
    ListAssetModelsResponse,
    | InternalFailureException
    | InvalidRequestException
    | ThrottlingException
    | CommonAwsError
  >;
  listAssetProperties(
    input: ListAssetPropertiesRequest,
  ): Effect.Effect<
    ListAssetPropertiesResponse,
    | InternalFailureException
    | InvalidRequestException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError
  >;
  listAssetRelationships(
    input: ListAssetRelationshipsRequest,
  ): Effect.Effect<
    ListAssetRelationshipsResponse,
    | InternalFailureException
    | InvalidRequestException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError
  >;
  listAssets(
    input: ListAssetsRequest,
  ): Effect.Effect<
    ListAssetsResponse,
    | InternalFailureException
    | InvalidRequestException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError
  >;
  listAssociatedAssets(
    input: ListAssociatedAssetsRequest,
  ): Effect.Effect<
    ListAssociatedAssetsResponse,
    | InternalFailureException
    | InvalidRequestException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError
  >;
  listBulkImportJobs(
    input: ListBulkImportJobsRequest,
  ): Effect.Effect<
    ListBulkImportJobsResponse,
    | InternalFailureException
    | InvalidRequestException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError
  >;
  listCompositionRelationships(
    input: ListCompositionRelationshipsRequest,
  ): Effect.Effect<
    ListCompositionRelationshipsResponse,
    | InternalFailureException
    | InvalidRequestException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError
  >;
  listDashboards(
    input: ListDashboardsRequest,
  ): Effect.Effect<
    ListDashboardsResponse,
    | InternalFailureException
    | InvalidRequestException
    | ThrottlingException
    | CommonAwsError
  >;
  listDatasets(
    input: ListDatasetsRequest,
  ): Effect.Effect<
    ListDatasetsResponse,
    | InternalFailureException
    | InvalidRequestException
    | ThrottlingException
    | CommonAwsError
  >;
  listGateways(
    input: ListGatewaysRequest,
  ): Effect.Effect<
    ListGatewaysResponse,
    | InternalFailureException
    | InvalidRequestException
    | ThrottlingException
    | CommonAwsError
  >;
  listPortals(
    input: ListPortalsRequest,
  ): Effect.Effect<
    ListPortalsResponse,
    | InternalFailureException
    | InvalidRequestException
    | ThrottlingException
    | CommonAwsError
  >;
  listProjectAssets(
    input: ListProjectAssetsRequest,
  ): Effect.Effect<
    ListProjectAssetsResponse,
    | InternalFailureException
    | InvalidRequestException
    | ThrottlingException
    | CommonAwsError
  >;
  listProjects(
    input: ListProjectsRequest,
  ): Effect.Effect<
    ListProjectsResponse,
    | InternalFailureException
    | InvalidRequestException
    | ThrottlingException
    | CommonAwsError
  >;
  listTagsForResource(
    input: ListTagsForResourceRequest,
  ): Effect.Effect<
    ListTagsForResourceResponse,
    | ConflictingOperationException
    | InternalFailureException
    | InvalidRequestException
    | LimitExceededException
    | ResourceNotFoundException
    | ThrottlingException
    | UnauthorizedException
    | CommonAwsError
  >;
  listTimeSeries(
    input: ListTimeSeriesRequest,
  ): Effect.Effect<
    ListTimeSeriesResponse,
    | InternalFailureException
    | InvalidRequestException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError
  >;
  putDefaultEncryptionConfiguration(
    input: PutDefaultEncryptionConfigurationRequest,
  ): Effect.Effect<
    PutDefaultEncryptionConfigurationResponse,
    | ConflictingOperationException
    | InternalFailureException
    | InvalidRequestException
    | LimitExceededException
    | ThrottlingException
    | CommonAwsError
  >;
  putLoggingOptions(
    input: PutLoggingOptionsRequest,
  ): Effect.Effect<
    PutLoggingOptionsResponse,
    | ConflictingOperationException
    | InternalFailureException
    | InvalidRequestException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError
  >;
  putStorageConfiguration(
    input: PutStorageConfigurationRequest,
  ): Effect.Effect<
    PutStorageConfigurationResponse,
    | ConflictingOperationException
    | InternalFailureException
    | InvalidRequestException
    | LimitExceededException
    | ResourceAlreadyExistsException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError
  >;
  tagResource(
    input: TagResourceRequest,
  ): Effect.Effect<
    TagResourceResponse,
    | ConflictingOperationException
    | InternalFailureException
    | InvalidRequestException
    | LimitExceededException
    | ResourceNotFoundException
    | ThrottlingException
    | TooManyTagsException
    | UnauthorizedException
    | CommonAwsError
  >;
  untagResource(
    input: UntagResourceRequest,
  ): Effect.Effect<
    UntagResourceResponse,
    | ConflictingOperationException
    | InternalFailureException
    | InvalidRequestException
    | LimitExceededException
    | ResourceNotFoundException
    | ThrottlingException
    | UnauthorizedException
    | CommonAwsError
  >;
  updateAccessPolicy(
    input: UpdateAccessPolicyRequest,
  ): Effect.Effect<
    UpdateAccessPolicyResponse,
    | InternalFailureException
    | InvalidRequestException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError
  >;
  updateAsset(
    input: UpdateAssetRequest,
  ): Effect.Effect<
    UpdateAssetResponse,
    | ConflictingOperationException
    | InternalFailureException
    | InvalidRequestException
    | ResourceAlreadyExistsException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError
  >;
  updateAssetModel(
    input: UpdateAssetModelRequest,
  ): Effect.Effect<
    UpdateAssetModelResponse,
    | ConflictingOperationException
    | InternalFailureException
    | InvalidRequestException
    | LimitExceededException
    | PreconditionFailedException
    | ResourceAlreadyExistsException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError
  >;
  updateAssetModelCompositeModel(
    input: UpdateAssetModelCompositeModelRequest,
  ): Effect.Effect<
    UpdateAssetModelCompositeModelResponse,
    | ConflictingOperationException
    | InternalFailureException
    | InvalidRequestException
    | LimitExceededException
    | PreconditionFailedException
    | ResourceAlreadyExistsException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError
  >;
  updateAssetProperty(
    input: UpdateAssetPropertyRequest,
  ): Effect.Effect<
    {},
    | ConflictingOperationException
    | InternalFailureException
    | InvalidRequestException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError
  >;
  updateDashboard(
    input: UpdateDashboardRequest,
  ): Effect.Effect<
    UpdateDashboardResponse,
    | InternalFailureException
    | InvalidRequestException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError
  >;
  updateDataset(
    input: UpdateDatasetRequest,
  ): Effect.Effect<
    UpdateDatasetResponse,
    | ConflictingOperationException
    | InternalFailureException
    | InvalidRequestException
    | LimitExceededException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError
  >;
  updateGateway(
    input: UpdateGatewayRequest,
  ): Effect.Effect<
    {},
    | ConflictingOperationException
    | InternalFailureException
    | InvalidRequestException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError
  >;
  updateGatewayCapabilityConfiguration(
    input: UpdateGatewayCapabilityConfigurationRequest,
  ): Effect.Effect<
    UpdateGatewayCapabilityConfigurationResponse,
    | ConflictingOperationException
    | InternalFailureException
    | InvalidRequestException
    | LimitExceededException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError
  >;
  updatePortal(
    input: UpdatePortalRequest,
  ): Effect.Effect<
    UpdatePortalResponse,
    | ConflictingOperationException
    | InternalFailureException
    | InvalidRequestException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError
  >;
  updateProject(
    input: UpdateProjectRequest,
  ): Effect.Effect<
    UpdateProjectResponse,
    | InternalFailureException
    | InvalidRequestException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError
  >;
}

export type Iotsitewise = AWSIoTSiteWise;

export declare class AccessDeniedException extends Data.TaggedError(
  "AccessDeniedException",
)<{
  readonly message?: string;
}> {}
export type AccessPolicySummaries = Array<AccessPolicySummary>;
export interface AccessPolicySummary {
  id: string;
  identity: Identity;
  resource: Resource;
  permission: Permission;
  creationDate?: Date | string;
  lastUpdateDate?: Date | string;
}
export interface ActionDefinition {
  actionDefinitionId: string;
  actionName: string;
  actionType: string;
}
export type ActionDefinitions = Array<ActionDefinition>;
export interface ActionPayload {
  stringValue: string;
}
export type ActionPayloadString = string;

export type ActionSummaries = Array<ActionSummary>;
export interface ActionSummary {
  actionId?: string;
  actionDefinitionId?: string;
  targetResource?: TargetResource;
}
export type AdaptiveIngestion = boolean;

export type AggregatedDoubleValue = number;

export interface AggregatedValue {
  timestamp: Date | string;
  quality?: Quality;
  value: Aggregates;
}
export type AggregatedValues = Array<AggregatedValue>;
export interface Aggregates {
  average?: number;
  count?: number;
  maximum?: number;
  minimum?: number;
  sum?: number;
  standardDeviation?: number;
}
export type AggregateType =
  | "AVERAGE"
  | "COUNT"
  | "MAXIMUM"
  | "MINIMUM"
  | "SUM"
  | "STANDARD_DEVIATION";
export type AggregateTypes = Array<AggregateType>;
export interface Alarms {
  alarmRoleArn: string;
  notificationLambdaArn?: string;
}
export type AmazonResourceName = string;

export type ARN = string;

export interface AssetCompositeModel {
  name: string;
  description?: string;
  type: string;
  properties: Array<AssetProperty>;
  id?: string;
  externalId?: string;
}
export type AssetCompositeModelPath = Array<AssetCompositeModelPathSegment>;
export interface AssetCompositeModelPathSegment {
  id?: string;
  name?: string;
}
export type AssetCompositeModels = Array<AssetCompositeModel>;
export type AssetCompositeModelSummaries = Array<AssetCompositeModelSummary>;
export interface AssetCompositeModelSummary {
  id: string;
  externalId?: string;
  name: string;
  type: string;
  description: string;
  path: Array<AssetCompositeModelPathSegment>;
}
export type AssetErrorCode = "INTERNAL_FAILURE";
export interface AssetErrorDetails {
  assetId: string;
  code: AssetErrorCode;
  message: string;
}
export type AssetErrorMessage = string;

export type AssetHierarchies = Array<AssetHierarchy>;
export interface AssetHierarchy {
  id?: string;
  name: string;
  externalId?: string;
}
export interface AssetHierarchyInfo {
  parentAssetId?: string;
  childAssetId?: string;
}
export type AssetIDs = Array<string>;
export interface AssetModelCompositeModel {
  name: string;
  description?: string;
  type: string;
  properties?: Array<AssetModelProperty>;
  id?: string;
  externalId?: string;
}
export interface AssetModelCompositeModelDefinition {
  id?: string;
  externalId?: string;
  name: string;
  description?: string;
  type: string;
  properties?: Array<AssetModelPropertyDefinition>;
}
export type AssetModelCompositeModelDefinitions =
  Array<AssetModelCompositeModelDefinition>;
export type AssetModelCompositeModelPath =
  Array<AssetModelCompositeModelPathSegment>;
export interface AssetModelCompositeModelPathSegment {
  id?: string;
  name?: string;
}
export type AssetModelCompositeModels = Array<AssetModelCompositeModel>;
export type AssetModelCompositeModelSummaries =
  Array<AssetModelCompositeModelSummary>;
export interface AssetModelCompositeModelSummary {
  id: string;
  externalId?: string;
  name: string;
  type: string;
  description?: string;
  path?: Array<AssetModelCompositeModelPathSegment>;
}
export type AssetModelHierarchies = Array<AssetModelHierarchy>;
export interface AssetModelHierarchy {
  id?: string;
  externalId?: string;
  name: string;
  childAssetModelId: string;
}
export interface AssetModelHierarchyDefinition {
  id?: string;
  externalId?: string;
  name: string;
  childAssetModelId: string;
}
export type AssetModelHierarchyDefinitions =
  Array<AssetModelHierarchyDefinition>;
export type AssetModelProperties = Array<AssetModelProperty>;
export interface AssetModelProperty {
  id?: string;
  externalId?: string;
  name: string;
  dataType: PropertyDataType;
  dataTypeSpec?: string;
  unit?: string;
  type: PropertyType;
  path?: Array<AssetModelPropertyPathSegment>;
}
export interface AssetModelPropertyDefinition {
  id?: string;
  externalId?: string;
  name: string;
  dataType: PropertyDataType;
  dataTypeSpec?: string;
  unit?: string;
  type: PropertyType;
}
export type AssetModelPropertyDefinitions = Array<AssetModelPropertyDefinition>;
export type AssetModelPropertyPath = Array<AssetModelPropertyPathSegment>;
export interface AssetModelPropertyPathSegment {
  id?: string;
  name?: string;
}
export type AssetModelPropertySummaries = Array<AssetModelPropertySummary>;
export interface AssetModelPropertySummary {
  id?: string;
  externalId?: string;
  name: string;
  dataType: PropertyDataType;
  dataTypeSpec?: string;
  unit?: string;
  type: PropertyType;
  assetModelCompositeModelId?: string;
  path?: Array<AssetModelPropertyPathSegment>;
}
export type AssetModelState =
  | "CREATING"
  | "ACTIVE"
  | "UPDATING"
  | "PROPAGATING"
  | "DELETING"
  | "FAILED";
export interface AssetModelStatus {
  state: AssetModelState;
  error?: ErrorDetails;
}
export type AssetModelSummaries = Array<AssetModelSummary>;
export interface AssetModelSummary {
  id: string;
  externalId?: string;
  arn: string;
  name: string;
  assetModelType?: AssetModelType;
  description: string;
  creationDate: Date | string;
  lastUpdateDate: Date | string;
  status: AssetModelStatus;
  version?: string;
}
export type AssetModelType = "ASSET_MODEL" | "COMPONENT_MODEL";
export type AssetModelVersionFilter = string;

export type AssetModelVersionType = "LATEST" | "ACTIVE";
export type AssetProperties = Array<AssetProperty>;
export interface AssetProperty {
  id: string;
  name: string;
  alias?: string;
  notification?: PropertyNotification;
  dataType: PropertyDataType;
  dataTypeSpec?: string;
  unit?: string;
  path?: Array<AssetPropertyPathSegment>;
  externalId?: string;
}
export type AssetPropertyAlias = string;

export type AssetPropertyPath = Array<AssetPropertyPathSegment>;
export interface AssetPropertyPathSegment {
  id?: string;
  name?: string;
}
export type AssetPropertySummaries = Array<AssetPropertySummary>;
export interface AssetPropertySummary {
  id: string;
  alias?: string;
  unit?: string;
  notification?: PropertyNotification;
  assetCompositeModelId?: string;
  path?: Array<AssetPropertyPathSegment>;
  externalId?: string;
}
export interface AssetPropertyValue {
  value: Variant;
  timestamp: TimeInNanos;
  quality?: Quality;
}
export type AssetPropertyValueHistory = Array<AssetPropertyValue>;
export type AssetPropertyValues = Array<AssetPropertyValue>;
export type AssetRelationshipSummaries = Array<AssetRelationshipSummary>;
export interface AssetRelationshipSummary {
  hierarchyInfo?: AssetHierarchyInfo;
  relationshipType: AssetRelationshipType;
}
export type AssetRelationshipType = "HIERARCHY";
export type AssetState =
  | "CREATING"
  | "ACTIVE"
  | "UPDATING"
  | "DELETING"
  | "FAILED";
export interface AssetStatus {
  state: AssetState;
  error?: ErrorDetails;
}
export type AssetSummaries = Array<AssetSummary>;
export interface AssetSummary {
  id: string;
  arn: string;
  name: string;
  assetModelId: string;
  creationDate: Date | string;
  lastUpdateDate: Date | string;
  status: AssetStatus;
  hierarchies: Array<AssetHierarchy>;
  description?: string;
  externalId?: string;
}
export interface AssociateAssetsRequest {
  assetId: string;
  hierarchyId: string;
  childAssetId: string;
  clientToken?: string;
}
export type AssociatedAssetsSummaries = Array<AssociatedAssetsSummary>;
export interface AssociatedAssetsSummary {
  id: string;
  arn: string;
  name: string;
  assetModelId: string;
  creationDate: Date | string;
  lastUpdateDate: Date | string;
  status: AssetStatus;
  hierarchies: Array<AssetHierarchy>;
  description?: string;
  externalId?: string;
}
export interface AssociateTimeSeriesToAssetPropertyRequest {
  alias: string;
  assetId: string;
  propertyId: string;
  clientToken?: string;
}
export interface Attribute {
  defaultValue?: string;
}
export type AuthMode = "IAM" | "SSO";
export type BatchAssociateProjectAssetsErrors = Array<AssetErrorDetails>;
export interface BatchAssociateProjectAssetsRequest {
  projectId: string;
  assetIds: Array<string>;
  clientToken?: string;
}
export interface BatchAssociateProjectAssetsResponse {
  errors?: Array<AssetErrorDetails>;
}
export type BatchDisassociateProjectAssetsErrors = Array<AssetErrorDetails>;
export interface BatchDisassociateProjectAssetsRequest {
  projectId: string;
  assetIds: Array<string>;
  clientToken?: string;
}
export interface BatchDisassociateProjectAssetsResponse {
  errors?: Array<AssetErrorDetails>;
}
export type BatchEntryCompletionStatus = "SUCCESS" | "ERROR";
export type BatchGetAssetPropertyAggregatesEntries =
  Array<BatchGetAssetPropertyAggregatesEntry>;
export interface BatchGetAssetPropertyAggregatesEntry {
  entryId: string;
  assetId?: string;
  propertyId?: string;
  propertyAlias?: string;
  aggregateTypes: Array<AggregateType>;
  resolution: string;
  startDate: Date | string;
  endDate: Date | string;
  qualities?: Array<Quality>;
  timeOrdering?: TimeOrdering;
}
export type BatchGetAssetPropertyAggregatesErrorCode =
  | "ResourceNotFoundException"
  | "InvalidRequestException"
  | "AccessDeniedException";
export type BatchGetAssetPropertyAggregatesErrorEntries =
  Array<BatchGetAssetPropertyAggregatesErrorEntry>;
export interface BatchGetAssetPropertyAggregatesErrorEntry {
  errorCode: BatchGetAssetPropertyAggregatesErrorCode;
  errorMessage: string;
  entryId: string;
}
export interface BatchGetAssetPropertyAggregatesErrorInfo {
  errorCode: BatchGetAssetPropertyAggregatesErrorCode;
  errorTimestamp: Date | string;
}
export type BatchGetAssetPropertyAggregatesMaxResults = number;

export interface BatchGetAssetPropertyAggregatesRequest {
  entries: Array<BatchGetAssetPropertyAggregatesEntry>;
  nextToken?: string;
  maxResults?: number;
}
export interface BatchGetAssetPropertyAggregatesResponse {
  errorEntries: Array<BatchGetAssetPropertyAggregatesErrorEntry>;
  successEntries: Array<BatchGetAssetPropertyAggregatesSuccessEntry>;
  skippedEntries: Array<BatchGetAssetPropertyAggregatesSkippedEntry>;
  nextToken?: string;
}
export type BatchGetAssetPropertyAggregatesSkippedEntries =
  Array<BatchGetAssetPropertyAggregatesSkippedEntry>;
export interface BatchGetAssetPropertyAggregatesSkippedEntry {
  entryId: string;
  completionStatus: BatchEntryCompletionStatus;
  errorInfo?: BatchGetAssetPropertyAggregatesErrorInfo;
}
export type BatchGetAssetPropertyAggregatesSuccessEntries =
  Array<BatchGetAssetPropertyAggregatesSuccessEntry>;
export interface BatchGetAssetPropertyAggregatesSuccessEntry {
  entryId: string;
  aggregatedValues: Array<AggregatedValue>;
}
export type BatchGetAssetPropertyValueEntries =
  Array<BatchGetAssetPropertyValueEntry>;
export interface BatchGetAssetPropertyValueEntry {
  entryId: string;
  assetId?: string;
  propertyId?: string;
  propertyAlias?: string;
}
export type BatchGetAssetPropertyValueErrorCode =
  | "ResourceNotFoundException"
  | "InvalidRequestException"
  | "AccessDeniedException";
export type BatchGetAssetPropertyValueErrorEntries =
  Array<BatchGetAssetPropertyValueErrorEntry>;
export interface BatchGetAssetPropertyValueErrorEntry {
  errorCode: BatchGetAssetPropertyValueErrorCode;
  errorMessage: string;
  entryId: string;
}
export interface BatchGetAssetPropertyValueErrorInfo {
  errorCode: BatchGetAssetPropertyValueErrorCode;
  errorTimestamp: Date | string;
}
export type BatchGetAssetPropertyValueHistoryEntries =
  Array<BatchGetAssetPropertyValueHistoryEntry>;
export interface BatchGetAssetPropertyValueHistoryEntry {
  entryId: string;
  assetId?: string;
  propertyId?: string;
  propertyAlias?: string;
  startDate?: Date | string;
  endDate?: Date | string;
  qualities?: Array<Quality>;
  timeOrdering?: TimeOrdering;
}
export type BatchGetAssetPropertyValueHistoryErrorCode =
  | "ResourceNotFoundException"
  | "InvalidRequestException"
  | "AccessDeniedException";
export type BatchGetAssetPropertyValueHistoryErrorEntries =
  Array<BatchGetAssetPropertyValueHistoryErrorEntry>;
export interface BatchGetAssetPropertyValueHistoryErrorEntry {
  errorCode: BatchGetAssetPropertyValueHistoryErrorCode;
  errorMessage: string;
  entryId: string;
}
export interface BatchGetAssetPropertyValueHistoryErrorInfo {
  errorCode: BatchGetAssetPropertyValueHistoryErrorCode;
  errorTimestamp: Date | string;
}
export type BatchGetAssetPropertyValueHistoryMaxResults = number;

export interface BatchGetAssetPropertyValueHistoryRequest {
  entries: Array<BatchGetAssetPropertyValueHistoryEntry>;
  nextToken?: string;
  maxResults?: number;
}
export interface BatchGetAssetPropertyValueHistoryResponse {
  errorEntries: Array<BatchGetAssetPropertyValueHistoryErrorEntry>;
  successEntries: Array<BatchGetAssetPropertyValueHistorySuccessEntry>;
  skippedEntries: Array<BatchGetAssetPropertyValueHistorySkippedEntry>;
  nextToken?: string;
}
export type BatchGetAssetPropertyValueHistorySkippedEntries =
  Array<BatchGetAssetPropertyValueHistorySkippedEntry>;
export interface BatchGetAssetPropertyValueHistorySkippedEntry {
  entryId: string;
  completionStatus: BatchEntryCompletionStatus;
  errorInfo?: BatchGetAssetPropertyValueHistoryErrorInfo;
}
export type BatchGetAssetPropertyValueHistorySuccessEntries =
  Array<BatchGetAssetPropertyValueHistorySuccessEntry>;
export interface BatchGetAssetPropertyValueHistorySuccessEntry {
  entryId: string;
  assetPropertyValueHistory: Array<AssetPropertyValue>;
}
export interface BatchGetAssetPropertyValueRequest {
  entries: Array<BatchGetAssetPropertyValueEntry>;
  nextToken?: string;
}
export interface BatchGetAssetPropertyValueResponse {
  errorEntries: Array<BatchGetAssetPropertyValueErrorEntry>;
  successEntries: Array<BatchGetAssetPropertyValueSuccessEntry>;
  skippedEntries: Array<BatchGetAssetPropertyValueSkippedEntry>;
  nextToken?: string;
}
export type BatchGetAssetPropertyValueSkippedEntries =
  Array<BatchGetAssetPropertyValueSkippedEntry>;
export interface BatchGetAssetPropertyValueSkippedEntry {
  entryId: string;
  completionStatus: BatchEntryCompletionStatus;
  errorInfo?: BatchGetAssetPropertyValueErrorInfo;
}
export type BatchGetAssetPropertyValueSuccessEntries =
  Array<BatchGetAssetPropertyValueSuccessEntry>;
export interface BatchGetAssetPropertyValueSuccessEntry {
  entryId: string;
  assetPropertyValue?: AssetPropertyValue;
}
export interface BatchPutAssetPropertyError {
  errorCode: BatchPutAssetPropertyValueErrorCode;
  errorMessage: string;
  timestamps: Array<TimeInNanos>;
}
export type BatchPutAssetPropertyErrorEntries =
  Array<BatchPutAssetPropertyErrorEntry>;
export interface BatchPutAssetPropertyErrorEntry {
  entryId: string;
  errors: Array<BatchPutAssetPropertyError>;
}
export type BatchPutAssetPropertyErrors = Array<BatchPutAssetPropertyError>;
export type BatchPutAssetPropertyValueErrorCode =
  | "ResourceNotFoundException"
  | "InvalidRequestException"
  | "InternalFailureException"
  | "ServiceUnavailableException"
  | "ThrottlingException"
  | "LimitExceededException"
  | "ConflictingOperationException"
  | "TimestampOutOfRangeException"
  | "AccessDeniedException";
export interface BatchPutAssetPropertyValueRequest {
  enablePartialEntryProcessing?: boolean;
  entries: Array<PutAssetPropertyValueEntry>;
}
export interface BatchPutAssetPropertyValueResponse {
  errorEntries: Array<BatchPutAssetPropertyErrorEntry>;
}
export type BooleanValue = boolean;

export type Bucket = string;

export type CapabilityConfiguration = string;

export type CapabilityNamespace = string;

export type CapabilitySyncStatus =
  | "IN_SYNC"
  | "OUT_OF_SYNC"
  | "SYNC_FAILED"
  | "UNKNOWN"
  | "NOT_APPLICABLE";
export interface Citation {
  reference?: Reference;
  content?: Content;
}
export type Citations = Array<Citation>;
export type ClientToken = string;

export interface ColumnInfo {
  name?: string;
  type?: ColumnType;
}
export type ColumnName =
  | "ALIAS"
  | "ASSET_ID"
  | "PROPERTY_ID"
  | "DATA_TYPE"
  | "TIMESTAMP_SECONDS"
  | "TIMESTAMP_NANO_OFFSET"
  | "QUALITY"
  | "VALUE";
export type ColumnNames = Array<ColumnName>;
export type ColumnsList = Array<ColumnInfo>;
export interface ColumnType {
  scalarType?: ScalarType;
}
export interface CompositeModelProperty {
  name: string;
  type: string;
  assetProperty: Property;
  id?: string;
  externalId?: string;
}
export interface CompositionDetails {
  compositionRelationship?: Array<CompositionRelationshipItem>;
}
export type CompositionRelationship = Array<CompositionRelationshipItem>;
export interface CompositionRelationshipItem {
  id?: string;
}
export type CompositionRelationshipSummaries =
  Array<CompositionRelationshipSummary>;
export interface CompositionRelationshipSummary {
  assetModelId: string;
  assetModelCompositeModelId: string;
  assetModelCompositeModelType: string;
}
export type ComputeLocation = "EDGE" | "CLOUD";
export interface ConfigurationErrorDetails {
  code: ErrorCode;
  message: string;
}
export type ConfigurationState =
  | "ACTIVE"
  | "UPDATE_IN_PROGRESS"
  | "UPDATE_FAILED";
export interface ConfigurationStatus {
  state: ConfigurationState;
  error?: ConfigurationErrorDetails;
}
export declare class ConflictingOperationException extends Data.TaggedError(
  "ConflictingOperationException",
)<{
  readonly message: string;
  readonly resourceId: string;
  readonly resourceArn: string;
}> {}
export interface Content {
  text?: string;
}
export type ConversationId = string;

export type CoreDeviceOperatingSystem =
  | "LINUX_AARCH64"
  | "LINUX_AMD64"
  | "WINDOWS_AMD64";
export type CoreDeviceThingName = string;

export interface CreateAccessPolicyRequest {
  accessPolicyIdentity: Identity;
  accessPolicyResource: Resource;
  accessPolicyPermission: Permission;
  clientToken?: string;
  tags?: Record<string, string>;
}
export interface CreateAccessPolicyResponse {
  accessPolicyId: string;
  accessPolicyArn: string;
}
export interface CreateAssetModelCompositeModelRequest {
  assetModelId: string;
  assetModelCompositeModelExternalId?: string;
  parentAssetModelCompositeModelId?: string;
  assetModelCompositeModelId?: string;
  assetModelCompositeModelDescription?: string;
  assetModelCompositeModelName: string;
  assetModelCompositeModelType: string;
  clientToken?: string;
  composedAssetModelId?: string;
  assetModelCompositeModelProperties?: Array<AssetModelPropertyDefinition>;
  ifMatch?: string;
  ifNoneMatch?: string;
  matchForVersionType?: AssetModelVersionType;
}
export interface CreateAssetModelCompositeModelResponse {
  assetModelCompositeModelId: string;
  assetModelCompositeModelPath: Array<AssetModelCompositeModelPathSegment>;
  assetModelStatus: AssetModelStatus;
}
export interface CreateAssetModelRequest {
  assetModelName: string;
  assetModelType?: AssetModelType;
  assetModelId?: string;
  assetModelExternalId?: string;
  assetModelDescription?: string;
  assetModelProperties?: Array<AssetModelPropertyDefinition>;
  assetModelHierarchies?: Array<AssetModelHierarchyDefinition>;
  assetModelCompositeModels?: Array<AssetModelCompositeModelDefinition>;
  clientToken?: string;
  tags?: Record<string, string>;
}
export interface CreateAssetModelResponse {
  assetModelId: string;
  assetModelArn: string;
  assetModelStatus: AssetModelStatus;
}
export interface CreateAssetRequest {
  assetName: string;
  assetModelId: string;
  clientToken?: string;
  tags?: Record<string, string>;
  assetDescription?: string;
  assetId?: string;
  assetExternalId?: string;
}
export interface CreateAssetResponse {
  assetId: string;
  assetArn: string;
  assetStatus: AssetStatus;
}
export interface CreateBulkImportJobRequest {
  jobName: string;
  jobRoleArn: string;
  files: Array<File>;
  errorReportLocation: ErrorReportLocation;
  jobConfiguration: JobConfiguration;
  adaptiveIngestion?: boolean;
  deleteFilesAfterImport?: boolean;
}
export interface CreateBulkImportJobResponse {
  jobId: string;
  jobName: string;
  jobStatus: JobStatus;
}
export interface CreateDashboardRequest {
  projectId: string;
  dashboardName: string;
  dashboardDescription?: string;
  dashboardDefinition: string;
  clientToken?: string;
  tags?: Record<string, string>;
}
export interface CreateDashboardResponse {
  dashboardId: string;
  dashboardArn: string;
}
export interface CreateDatasetRequest {
  datasetId?: string;
  datasetName: string;
  datasetDescription?: string;
  datasetSource: DatasetSource;
  clientToken?: string;
  tags?: Record<string, string>;
}
export interface CreateDatasetResponse {
  datasetId: string;
  datasetArn: string;
  datasetStatus: DatasetStatus;
}
export interface CreateGatewayRequest {
  gatewayName: string;
  gatewayPlatform: GatewayPlatform;
  gatewayVersion?: string;
  tags?: Record<string, string>;
}
export interface CreateGatewayResponse {
  gatewayId: string;
  gatewayArn: string;
}
export interface CreatePortalRequest {
  portalName: string;
  portalDescription?: string;
  portalContactEmail: string;
  clientToken?: string;
  portalLogoImageFile?: ImageFile;
  roleArn: string;
  tags?: Record<string, string>;
  portalAuthMode?: AuthMode;
  notificationSenderEmail?: string;
  alarms?: Alarms;
  portalType?: PortalType;
  portalTypeConfiguration?: Record<string, PortalTypeEntry>;
}
export interface CreatePortalResponse {
  portalId: string;
  portalArn: string;
  portalStartUrl: string;
  portalStatus: PortalStatus;
  ssoApplicationId: string;
}
export interface CreateProjectRequest {
  portalId: string;
  projectName: string;
  projectDescription?: string;
  clientToken?: string;
  tags?: Record<string, string>;
}
export interface CreateProjectResponse {
  projectId: string;
  projectArn: string;
}
export interface Csv {
  columnNames: Array<ColumnName>;
}
export interface CustomerManagedS3Storage {
  s3ResourceArn: string;
  roleArn: string;
}
export type CustomID = string;

export type DashboardDefinition = string;

export type DashboardSummaries = Array<DashboardSummary>;
export interface DashboardSummary {
  id: string;
  name: string;
  description?: string;
  creationDate?: Date | string;
  lastUpdateDate?: Date | string;
}
export interface DataSetReference {
  datasetArn?: string;
  source?: Source;
}
export interface DatasetSource {
  sourceType: DatasetSourceType;
  sourceFormat: DatasetSourceFormat;
  sourceDetail?: SourceDetail;
}
export type DatasetSourceFormat = "KNOWLEDGE_BASE";
export type DatasetSourceType = "KENDRA";
export type DatasetState =
  | "CREATING"
  | "ACTIVE"
  | "UPDATING"
  | "DELETING"
  | "FAILED";
export interface DatasetStatus {
  state: DatasetState;
  error?: ErrorDetails;
}
export type DatasetSummaries = Array<DatasetSummary>;
export interface DatasetSummary {
  id: string;
  arn: string;
  name: string;
  description: string;
  creationDate: Date | string;
  lastUpdateDate: Date | string;
  status: DatasetStatus;
}
export interface Datum {
  scalarValue?: string;
  arrayValue?: Array<Datum>;
  rowValue?: Row;
  nullValue?: boolean;
}
export type DatumList = Array<Datum>;
export type DefaultValue = string;

export interface DeleteAccessPolicyRequest {
  accessPolicyId: string;
  clientToken?: string;
}
export interface DeleteAccessPolicyResponse {}
export interface DeleteAssetModelCompositeModelRequest {
  assetModelId: string;
  assetModelCompositeModelId: string;
  clientToken?: string;
  ifMatch?: string;
  ifNoneMatch?: string;
  matchForVersionType?: AssetModelVersionType;
}
export interface DeleteAssetModelCompositeModelResponse {
  assetModelStatus: AssetModelStatus;
}
export interface DeleteAssetModelRequest {
  assetModelId: string;
  clientToken?: string;
  ifMatch?: string;
  ifNoneMatch?: string;
  matchForVersionType?: AssetModelVersionType;
}
export interface DeleteAssetModelResponse {
  assetModelStatus: AssetModelStatus;
}
export interface DeleteAssetRequest {
  assetId: string;
  clientToken?: string;
}
export interface DeleteAssetResponse {
  assetStatus: AssetStatus;
}
export interface DeleteDashboardRequest {
  dashboardId: string;
  clientToken?: string;
}
export interface DeleteDashboardResponse {}
export interface DeleteDatasetRequest {
  datasetId: string;
  clientToken?: string;
}
export interface DeleteDatasetResponse {
  datasetStatus: DatasetStatus;
}
export type DeleteFilesAfterImport = boolean;

export interface DeleteGatewayRequest {
  gatewayId: string;
}
export interface DeletePortalRequest {
  portalId: string;
  clientToken?: string;
}
export interface DeletePortalResponse {
  portalStatus: PortalStatus;
}
export interface DeleteProjectRequest {
  projectId: string;
  clientToken?: string;
}
export interface DeleteProjectResponse {}
export interface DeleteTimeSeriesRequest {
  alias?: string;
  assetId?: string;
  propertyId?: string;
  clientToken?: string;
}
export interface DescribeAccessPolicyRequest {
  accessPolicyId: string;
}
export interface DescribeAccessPolicyResponse {
  accessPolicyId: string;
  accessPolicyArn: string;
  accessPolicyIdentity: Identity;
  accessPolicyResource: Resource;
  accessPolicyPermission: Permission;
  accessPolicyCreationDate: Date | string;
  accessPolicyLastUpdateDate: Date | string;
}
export interface DescribeActionRequest {
  actionId: string;
}
export interface DescribeActionResponse {
  actionId: string;
  targetResource: TargetResource;
  actionDefinitionId: string;
  actionPayload: ActionPayload;
  executionTime: Date | string;
}
export interface DescribeAssetCompositeModelRequest {
  assetId: string;
  assetCompositeModelId: string;
}
export interface DescribeAssetCompositeModelResponse {
  assetId: string;
  assetCompositeModelId: string;
  assetCompositeModelExternalId?: string;
  assetCompositeModelPath: Array<AssetCompositeModelPathSegment>;
  assetCompositeModelName: string;
  assetCompositeModelDescription: string;
  assetCompositeModelType: string;
  assetCompositeModelProperties: Array<AssetProperty>;
  assetCompositeModelSummaries: Array<AssetCompositeModelSummary>;
  actionDefinitions?: Array<ActionDefinition>;
}
export interface DescribeAssetModelCompositeModelRequest {
  assetModelId: string;
  assetModelCompositeModelId: string;
  assetModelVersion?: string;
}
export interface DescribeAssetModelCompositeModelResponse {
  assetModelId: string;
  assetModelCompositeModelId: string;
  assetModelCompositeModelExternalId?: string;
  assetModelCompositeModelPath: Array<AssetModelCompositeModelPathSegment>;
  assetModelCompositeModelName: string;
  assetModelCompositeModelDescription: string;
  assetModelCompositeModelType: string;
  assetModelCompositeModelProperties: Array<AssetModelProperty>;
  compositionDetails?: CompositionDetails;
  assetModelCompositeModelSummaries: Array<AssetModelCompositeModelSummary>;
  actionDefinitions?: Array<ActionDefinition>;
}
export interface DescribeAssetModelRequest {
  assetModelId: string;
  excludeProperties?: boolean;
  assetModelVersion?: string;
}
export interface DescribeAssetModelResponse {
  assetModelId: string;
  assetModelExternalId?: string;
  assetModelArn: string;
  assetModelName: string;
  assetModelType?: AssetModelType;
  assetModelDescription: string;
  assetModelProperties: Array<AssetModelProperty>;
  assetModelHierarchies: Array<AssetModelHierarchy>;
  assetModelCompositeModels?: Array<AssetModelCompositeModel>;
  assetModelCompositeModelSummaries?: Array<AssetModelCompositeModelSummary>;
  assetModelCreationDate: Date | string;
  assetModelLastUpdateDate: Date | string;
  assetModelStatus: AssetModelStatus;
  assetModelVersion?: string;
  eTag?: string;
}
export interface DescribeAssetPropertyRequest {
  assetId: string;
  propertyId: string;
}
export interface DescribeAssetPropertyResponse {
  assetId: string;
  assetName: string;
  assetModelId: string;
  assetProperty?: Property;
  compositeModel?: CompositeModelProperty;
  assetExternalId?: string;
}
export interface DescribeAssetRequest {
  assetId: string;
  excludeProperties?: boolean;
}
export interface DescribeAssetResponse {
  assetId: string;
  assetArn: string;
  assetName: string;
  assetModelId: string;
  assetProperties: Array<AssetProperty>;
  assetHierarchies: Array<AssetHierarchy>;
  assetCompositeModels?: Array<AssetCompositeModel>;
  assetCreationDate: Date | string;
  assetLastUpdateDate: Date | string;
  assetStatus: AssetStatus;
  assetDescription?: string;
  assetCompositeModelSummaries?: Array<AssetCompositeModelSummary>;
  assetExternalId?: string;
}
export interface DescribeBulkImportJobRequest {
  jobId: string;
}
export interface DescribeBulkImportJobResponse {
  jobId: string;
  jobName: string;
  jobStatus: JobStatus;
  jobRoleArn: string;
  files: Array<File>;
  errorReportLocation: ErrorReportLocation;
  jobConfiguration: JobConfiguration;
  jobCreationDate: Date | string;
  jobLastUpdateDate: Date | string;
  adaptiveIngestion?: boolean;
  deleteFilesAfterImport?: boolean;
}
export interface DescribeDashboardRequest {
  dashboardId: string;
}
export interface DescribeDashboardResponse {
  dashboardId: string;
  dashboardArn: string;
  dashboardName: string;
  projectId: string;
  dashboardDescription?: string;
  dashboardDefinition: string;
  dashboardCreationDate: Date | string;
  dashboardLastUpdateDate: Date | string;
}
export interface DescribeDatasetRequest {
  datasetId: string;
}
export interface DescribeDatasetResponse {
  datasetId: string;
  datasetArn: string;
  datasetName: string;
  datasetDescription: string;
  datasetSource: DatasetSource;
  datasetStatus: DatasetStatus;
  datasetCreationDate: Date | string;
  datasetLastUpdateDate: Date | string;
  datasetVersion?: string;
}
export interface DescribeDefaultEncryptionConfigurationRequest {}
export interface DescribeDefaultEncryptionConfigurationResponse {
  encryptionType: EncryptionType;
  kmsKeyArn?: string;
  configurationStatus: ConfigurationStatus;
}
export interface DescribeGatewayCapabilityConfigurationRequest {
  gatewayId: string;
  capabilityNamespace: string;
}
export interface DescribeGatewayCapabilityConfigurationResponse {
  gatewayId: string;
  capabilityNamespace: string;
  capabilityConfiguration: string;
  capabilitySyncStatus: CapabilitySyncStatus;
}
export interface DescribeGatewayRequest {
  gatewayId: string;
}
export interface DescribeGatewayResponse {
  gatewayId: string;
  gatewayName: string;
  gatewayArn: string;
  gatewayPlatform?: GatewayPlatform;
  gatewayVersion?: string;
  gatewayCapabilitySummaries: Array<GatewayCapabilitySummary>;
  creationDate: Date | string;
  lastUpdateDate: Date | string;
}
export interface DescribeLoggingOptionsRequest {}
export interface DescribeLoggingOptionsResponse {
  loggingOptions: LoggingOptions;
}
export interface DescribePortalRequest {
  portalId: string;
}
export interface DescribePortalResponse {
  portalId: string;
  portalArn: string;
  portalName: string;
  portalDescription?: string;
  portalClientId: string;
  portalStartUrl: string;
  portalContactEmail: string;
  portalStatus: PortalStatus;
  portalCreationDate: Date | string;
  portalLastUpdateDate: Date | string;
  portalLogoImageLocation?: ImageLocation;
  roleArn?: string;
  portalAuthMode?: AuthMode;
  notificationSenderEmail?: string;
  alarms?: Alarms;
  portalType?: PortalType;
  portalTypeConfiguration?: Record<string, PortalTypeEntry>;
}
export interface DescribeProjectRequest {
  projectId: string;
}
export interface DescribeProjectResponse {
  projectId: string;
  projectArn: string;
  projectName: string;
  portalId: string;
  projectDescription?: string;
  projectCreationDate: Date | string;
  projectLastUpdateDate: Date | string;
}
export interface DescribeStorageConfigurationRequest {}
export interface DescribeStorageConfigurationResponse {
  storageType: StorageType;
  multiLayerStorage?: MultiLayerStorage;
  disassociatedDataStorage?: DisassociatedDataStorageState;
  retentionPeriod?: RetentionPeriod;
  configurationStatus: ConfigurationStatus;
  lastUpdateDate?: Date | string;
  warmTier?: WarmTierState;
  warmTierRetentionPeriod?: WarmTierRetentionPeriod;
  disallowIngestNullNaN?: boolean;
}
export interface DescribeTimeSeriesRequest {
  alias?: string;
  assetId?: string;
  propertyId?: string;
}
export interface DescribeTimeSeriesResponse {
  assetId?: string;
  propertyId?: string;
  alias?: string;
  timeSeriesId: string;
  dataType: PropertyDataType;
  dataTypeSpec?: string;
  timeSeriesCreationDate: Date | string;
  timeSeriesLastUpdateDate: Date | string;
  timeSeriesArn: string;
}
export type Description = string;

export interface DetailedError {
  code: DetailedErrorCode;
  message: string;
}
export type DetailedErrorCode =
  | "INCOMPATIBLE_COMPUTE_LOCATION"
  | "INCOMPATIBLE_FORWARDING_CONFIGURATION";
export type DetailedErrorMessage = string;

export type DetailedErrors = Array<DetailedError>;
export type DisallowIngestNullNaN = boolean;

export interface DisassociateAssetsRequest {
  assetId: string;
  hierarchyId: string;
  childAssetId: string;
  clientToken?: string;
}
export type DisassociatedDataStorageState = "ENABLED" | "DISABLED";
export interface DisassociateTimeSeriesFromAssetPropertyRequest {
  alias: string;
  assetId: string;
  propertyId: string;
  clientToken?: string;
}
export type Email = string;

export type EncryptionType =
  | "SITEWISE_DEFAULT_ENCRYPTION"
  | "KMS_BASED_ENCRYPTION";
export type EntryId = string;

export type ErrorCode = "VALIDATION_ERROR" | "INTERNAL_FAILURE";
export interface ErrorDetails {
  code: ErrorCode;
  message: string;
  details?: Array<DetailedError>;
}
export type ErrorMessage = string;

export interface ErrorReportLocation {
  bucket: string;
  prefix: string;
}
export type ETag = string;

export type ExceptionMessage = string;

export type ExcludeProperties = boolean;

export interface ExecuteActionRequest {
  targetResource: TargetResource;
  actionDefinitionId: string;
  actionPayload: ActionPayload;
  clientToken?: string;
}
export interface ExecuteActionResponse {
  actionId: string;
}
export type ExecuteQueryMaxResults = number;

export type ExecuteQueryNextToken = string;

export interface ExecuteQueryRequest {
  queryStatement: string;
  nextToken?: string;
  maxResults?: number;
  clientToken?: string;
}
export interface ExecuteQueryResponse {
  columns?: Array<ColumnInfo>;
  rows?: Array<Row>;
  nextToken?: string;
}
export type Expression = string;

export interface ExpressionVariable {
  name: string;
  value: VariableValue;
}
export type ExpressionVariables = Array<ExpressionVariable>;
export type ExternalId = string;

export interface File {
  bucket: string;
  key: string;
  versionId?: string;
}
export interface FileFormat {
  csv?: Csv;
  parquet?: Parquet;
}
export type Files = Array<File>;
export interface ForwardingConfig {
  state: ForwardingConfigState;
}
export type ForwardingConfigState = "DISABLED" | "ENABLED";
export type GatewayCapabilitySummaries = Array<GatewayCapabilitySummary>;
export interface GatewayCapabilitySummary {
  capabilityNamespace: string;
  capabilitySyncStatus: CapabilitySyncStatus;
}
export type GatewayName = string;

export interface GatewayPlatform {
  greengrass?: Greengrass;
  greengrassV2?: GreengrassV2;
  siemensIE?: SiemensIE;
}
export type GatewaySummaries = Array<GatewaySummary>;
export interface GatewaySummary {
  gatewayId: string;
  gatewayName: string;
  gatewayPlatform?: GatewayPlatform;
  gatewayVersion?: string;
  gatewayCapabilitySummaries?: Array<GatewayCapabilitySummary>;
  creationDate: Date | string;
  lastUpdateDate: Date | string;
}
export type GatewayVersion = string;

export interface GetAssetPropertyAggregatesRequest {
  assetId?: string;
  propertyId?: string;
  propertyAlias?: string;
  aggregateTypes: Array<AggregateType>;
  resolution: string;
  qualities?: Array<Quality>;
  startDate: Date | string;
  endDate: Date | string;
  timeOrdering?: TimeOrdering;
  nextToken?: string;
  maxResults?: number;
}
export interface GetAssetPropertyAggregatesResponse {
  aggregatedValues: Array<AggregatedValue>;
  nextToken?: string;
}
export type GetAssetPropertyValueAggregatesMaxResults = number;

export type GetAssetPropertyValueHistoryMaxResults = number;

export interface GetAssetPropertyValueHistoryRequest {
  assetId?: string;
  propertyId?: string;
  propertyAlias?: string;
  startDate?: Date | string;
  endDate?: Date | string;
  qualities?: Array<Quality>;
  timeOrdering?: TimeOrdering;
  nextToken?: string;
  maxResults?: number;
}
export interface GetAssetPropertyValueHistoryResponse {
  assetPropertyValueHistory: Array<AssetPropertyValue>;
  nextToken?: string;
}
export interface GetAssetPropertyValueRequest {
  assetId?: string;
  propertyId?: string;
  propertyAlias?: string;
}
export interface GetAssetPropertyValueResponse {
  propertyValue?: AssetPropertyValue;
}
export interface GetInterpolatedAssetPropertyValuesRequest {
  assetId?: string;
  propertyId?: string;
  propertyAlias?: string;
  startTimeInSeconds: number;
  startTimeOffsetInNanos?: number;
  endTimeInSeconds: number;
  endTimeOffsetInNanos?: number;
  quality: Quality;
  intervalInSeconds: number;
  nextToken?: string;
  maxResults?: number;
  type: string;
  intervalWindowInSeconds?: number;
}
export interface GetInterpolatedAssetPropertyValuesResponse {
  interpolatedAssetPropertyValues: Array<InterpolatedAssetPropertyValue>;
  nextToken?: string;
}
export interface Greengrass {
  groupArn: string;
}
export interface GreengrassV2 {
  coreDeviceThingName: string;
  coreDeviceOperatingSystem?: CoreDeviceOperatingSystem;
}
export interface GroupIdentity {
  id: string;
}
export type IamArn = string;

export interface IAMRoleIdentity {
  arn: string;
}
export interface IAMUserIdentity {
  arn: string;
}
export type ID = string;

export interface Identity {
  user?: UserIdentity;
  group?: GroupIdentity;
  iamUser?: IAMUserIdentity;
  iamRole?: IAMRoleIdentity;
}
export type IdentityId = string;

export type IdentityType = "USER" | "GROUP" | "IAM";
export type IDs = Array<string>;
export interface Image {
  id?: string;
  file?: ImageFile;
}
export interface ImageFile {
  data: Uint8Array | string;
  type: ImageFileType;
}
export type ImageFileData = Uint8Array | string;

export type ImageFileType = "PNG";
export interface ImageLocation {
  id: string;
  url: string;
}
export declare class InternalFailureException extends Data.TaggedError(
  "InternalFailureException",
)<{
  readonly message: string;
}> {}
export interface InterpolatedAssetPropertyValue {
  timestamp: TimeInNanos;
  value: Variant;
}
export type InterpolatedAssetPropertyValues =
  Array<InterpolatedAssetPropertyValue>;
export type InterpolationType = string;

export type Interval = string;

export type IntervalInSeconds = number;

export type IntervalWindowInSeconds = number;

export declare class InvalidRequestException extends Data.TaggedError(
  "InvalidRequestException",
)<{
  readonly message: string;
}> {}
export interface InvocationOutput {
  message?: string;
  citations?: Array<Citation>;
}
export interface InvokeAssistantRequest {
  conversationId?: string;
  message: string;
  enableTrace?: _opaque_PrimitiveBoolean;
}
export interface InvokeAssistantResponse {
  body: ResponseStream;
  conversationId: string;
}
export type IotCoreThingName = string;

export interface JobConfiguration {
  fileFormat: FileFormat;
}
export type JobStatus =
  | "PENDING"
  | "CANCELLED"
  | "RUNNING"
  | "COMPLETED"
  | "FAILED"
  | "COMPLETED_WITH_FAILURES";
export type JobSummaries = Array<JobSummary>;
export interface JobSummary {
  id: string;
  name: string;
  status: JobStatus;
}
export interface KendraSourceDetail {
  knowledgeBaseArn: string;
  roleArn: string;
}
export type KmsKeyId = string;

export declare class LimitExceededException extends Data.TaggedError(
  "LimitExceededException",
)<{
  readonly message: string;
}> {}
export interface ListAccessPoliciesRequest {
  identityType?: IdentityType;
  identityId?: string;
  resourceType?: ResourceType;
  resourceId?: string;
  iamArn?: string;
  nextToken?: string;
  maxResults?: number;
}
export interface ListAccessPoliciesResponse {
  accessPolicySummaries: Array<AccessPolicySummary>;
  nextToken?: string;
}
export interface ListActionsRequest {
  targetResourceType: TargetResourceType;
  targetResourceId: string;
  nextToken?: string;
  maxResults?: number;
}
export interface ListActionsResponse {
  actionSummaries: Array<ActionSummary>;
  nextToken: string;
}
export interface ListAssetModelCompositeModelsRequest {
  assetModelId: string;
  nextToken?: string;
  maxResults?: number;
  assetModelVersion?: string;
}
export interface ListAssetModelCompositeModelsResponse {
  assetModelCompositeModelSummaries: Array<AssetModelCompositeModelSummary>;
  nextToken?: string;
}
export type ListAssetModelPropertiesFilter = "ALL" | "BASE";
export interface ListAssetModelPropertiesRequest {
  assetModelId: string;
  nextToken?: string;
  maxResults?: number;
  filter?: ListAssetModelPropertiesFilter;
  assetModelVersion?: string;
}
export interface ListAssetModelPropertiesResponse {
  assetModelPropertySummaries: Array<AssetModelPropertySummary>;
  nextToken?: string;
}
export interface ListAssetModelsRequest {
  assetModelTypes?: Array<AssetModelType>;
  nextToken?: string;
  maxResults?: number;
  assetModelVersion?: string;
}
export interface ListAssetModelsResponse {
  assetModelSummaries: Array<AssetModelSummary>;
  nextToken?: string;
}
export type ListAssetModelsTypeFilter = Array<AssetModelType>;
export type ListAssetPropertiesFilter = "ALL" | "BASE";
export interface ListAssetPropertiesRequest {
  assetId: string;
  nextToken?: string;
  maxResults?: number;
  filter?: ListAssetPropertiesFilter;
}
export interface ListAssetPropertiesResponse {
  assetPropertySummaries: Array<AssetPropertySummary>;
  nextToken?: string;
}
export interface ListAssetRelationshipsRequest {
  assetId: string;
  traversalType: TraversalType;
  nextToken?: string;
  maxResults?: number;
}
export interface ListAssetRelationshipsResponse {
  assetRelationshipSummaries: Array<AssetRelationshipSummary>;
  nextToken?: string;
}
export type ListAssetsFilter = "ALL" | "TOP_LEVEL";
export interface ListAssetsRequest {
  nextToken?: string;
  maxResults?: number;
  assetModelId?: string;
  filter?: ListAssetsFilter;
}
export interface ListAssetsResponse {
  assetSummaries: Array<AssetSummary>;
  nextToken?: string;
}
export interface ListAssociatedAssetsRequest {
  assetId: string;
  hierarchyId?: string;
  traversalDirection?: TraversalDirection;
  nextToken?: string;
  maxResults?: number;
}
export interface ListAssociatedAssetsResponse {
  assetSummaries: Array<AssociatedAssetsSummary>;
  nextToken?: string;
}
export type ListBulkImportJobsFilter =
  | "ALL"
  | "PENDING"
  | "RUNNING"
  | "CANCELLED"
  | "FAILED"
  | "COMPLETED_WITH_FAILURES"
  | "COMPLETED";
export interface ListBulkImportJobsRequest {
  nextToken?: string;
  maxResults?: number;
  filter?: ListBulkImportJobsFilter;
}
export interface ListBulkImportJobsResponse {
  jobSummaries: Array<JobSummary>;
  nextToken?: string;
}
export interface ListCompositionRelationshipsRequest {
  assetModelId: string;
  nextToken?: string;
  maxResults?: number;
}
export interface ListCompositionRelationshipsResponse {
  compositionRelationshipSummaries: Array<CompositionRelationshipSummary>;
  nextToken?: string;
}
export interface ListDashboardsRequest {
  projectId: string;
  nextToken?: string;
  maxResults?: number;
}
export interface ListDashboardsResponse {
  dashboardSummaries: Array<DashboardSummary>;
  nextToken?: string;
}
export interface ListDatasetsRequest {
  sourceType: DatasetSourceType;
  nextToken?: string;
  maxResults?: number;
}
export interface ListDatasetsResponse {
  datasetSummaries: Array<DatasetSummary>;
  nextToken?: string;
}
export interface ListGatewaysRequest {
  nextToken?: string;
  maxResults?: number;
}
export interface ListGatewaysResponse {
  gatewaySummaries: Array<GatewaySummary>;
  nextToken?: string;
}
export interface ListPortalsRequest {
  nextToken?: string;
  maxResults?: number;
}
export interface ListPortalsResponse {
  portalSummaries?: Array<PortalSummary>;
  nextToken?: string;
}
export interface ListProjectAssetsRequest {
  projectId: string;
  nextToken?: string;
  maxResults?: number;
}
export interface ListProjectAssetsResponse {
  assetIds: Array<string>;
  nextToken?: string;
}
export interface ListProjectsRequest {
  portalId: string;
  nextToken?: string;
  maxResults?: number;
}
export interface ListProjectsResponse {
  projectSummaries: Array<ProjectSummary>;
  nextToken?: string;
}
export interface ListTagsForResourceRequest {
  resourceArn: string;
}
export interface ListTagsForResourceResponse {
  tags?: Record<string, string>;
}
export interface ListTimeSeriesRequest {
  nextToken?: string;
  maxResults?: number;
  assetId?: string;
  aliasPrefix?: string;
  timeSeriesType?: ListTimeSeriesType;
}
export interface ListTimeSeriesResponse {
  TimeSeriesSummaries: Array<TimeSeriesSummary>;
  nextToken?: string;
}
export type ListTimeSeriesType = "ASSOCIATED" | "DISASSOCIATED";
export interface Location {
  uri?: string;
}
export type LoggingLevel = "ERROR" | "INFO" | "OFF";
export interface LoggingOptions {
  level: LoggingLevel;
}
export type Macro = string;

export type MaxInterpolatedResults = number;

export type MaxResults = number;

export interface Measurement {
  processingConfig?: MeasurementProcessingConfig;
}
export interface MeasurementProcessingConfig {
  forwardingConfig: ForwardingConfig;
}
export type MessageInput = string;

export interface Metric {
  expression: string;
  variables: Array<ExpressionVariable>;
  window: MetricWindow;
  processingConfig?: MetricProcessingConfig;
}
export interface MetricProcessingConfig {
  computeLocation: ComputeLocation;
}
export interface MetricWindow {
  tumbling?: TumblingWindow;
}
export type MonitorErrorCode =
  | "INTERNAL_FAILURE"
  | "VALIDATION_ERROR"
  | "LIMIT_EXCEEDED";
export interface MonitorErrorDetails {
  code?: MonitorErrorCode;
  message?: string;
}
export type MonitorErrorMessage = string;

export interface MultiLayerStorage {
  customerManagedS3Storage: CustomerManagedS3Storage;
}
export type Name = string;

export type NextToken = string;

export type NullableBoolean = boolean;

export type NumberOfDays = number;

export type Offset = string;

export type OffsetInNanos = number;

export interface Parquet {}
export type Permission = "ADMINISTRATOR" | "VIEWER";
export type PortalClientId = string;

export interface PortalResource {
  id: string;
}
export type PortalState =
  | "CREATING"
  | "PENDING"
  | "UPDATING"
  | "DELETING"
  | "ACTIVE"
  | "FAILED";
export interface PortalStatus {
  state: PortalState;
  error?: MonitorErrorDetails;
}
export type PortalSummaries = Array<PortalSummary>;
export interface PortalSummary {
  id: string;
  name: string;
  description?: string;
  startUrl: string;
  creationDate?: Date | string;
  lastUpdateDate?: Date | string;
  roleArn?: string;
  status: PortalStatus;
  portalType?: PortalType;
}
export type PortalTools = Array<string>;
export type PortalType = "SITEWISE_PORTAL_V1" | "SITEWISE_PORTAL_V2";
export type PortalTypeConfiguration = Record<string, PortalTypeEntry>;
export interface PortalTypeEntry {
  portalTools?: Array<string>;
}
export type PortalTypeKey = string;

export declare class PreconditionFailedException extends Data.TaggedError(
  "PreconditionFailedException",
)<{
  readonly message: string;
  readonly resourceId: string;
  readonly resourceArn: string;
}> {}
export interface ProjectResource {
  id: string;
}
export type ProjectSummaries = Array<ProjectSummary>;
export interface ProjectSummary {
  id: string;
  name: string;
  description?: string;
  creationDate?: Date | string;
  lastUpdateDate?: Date | string;
}
export interface Property {
  id: string;
  name: string;
  alias?: string;
  notification?: PropertyNotification;
  dataType: PropertyDataType;
  unit?: string;
  type?: PropertyType;
  path?: Array<AssetPropertyPathSegment>;
  externalId?: string;
}
export type PropertyAlias = string;

export type PropertyDataType =
  | "STRING"
  | "INTEGER"
  | "DOUBLE"
  | "BOOLEAN"
  | "STRUCT";
export interface PropertyNotification {
  topic: string;
  state: PropertyNotificationState;
}
export type PropertyNotificationState = "ENABLED" | "DISABLED";
export type PropertyNotificationTopic = string;

export interface PropertyType {
  attribute?: Attribute;
  measurement?: Measurement;
  transform?: Transform;
  metric?: Metric;
}
export type PropertyUnit = string;

export type PropertyValueBooleanValue = boolean;

export type PropertyValueDoubleValue = number;

export type PropertyValueIntegerValue = number;

export interface PropertyValueNullValue {
  valueType: RawValueType;
}
export type PropertyValueStringValue = string;

export type PutAssetPropertyValueEntries = Array<PutAssetPropertyValueEntry>;
export interface PutAssetPropertyValueEntry {
  entryId: string;
  assetId?: string;
  propertyId?: string;
  propertyAlias?: string;
  propertyValues: Array<AssetPropertyValue>;
}
export interface PutDefaultEncryptionConfigurationRequest {
  encryptionType: EncryptionType;
  kmsKeyId?: string;
}
export interface PutDefaultEncryptionConfigurationResponse {
  encryptionType: EncryptionType;
  kmsKeyArn?: string;
  configurationStatus: ConfigurationStatus;
}
export interface PutLoggingOptionsRequest {
  loggingOptions: LoggingOptions;
}
export interface PutLoggingOptionsResponse {}
export interface PutStorageConfigurationRequest {
  storageType: StorageType;
  multiLayerStorage?: MultiLayerStorage;
  disassociatedDataStorage?: DisassociatedDataStorageState;
  retentionPeriod?: RetentionPeriod;
  warmTier?: WarmTierState;
  warmTierRetentionPeriod?: WarmTierRetentionPeriod;
  disallowIngestNullNaN?: boolean;
}
export interface PutStorageConfigurationResponse {
  storageType: StorageType;
  multiLayerStorage?: MultiLayerStorage;
  disassociatedDataStorage?: DisassociatedDataStorageState;
  retentionPeriod?: RetentionPeriod;
  configurationStatus: ConfigurationStatus;
  warmTier?: WarmTierState;
  warmTierRetentionPeriod?: WarmTierRetentionPeriod;
  disallowIngestNullNaN?: boolean;
}
export type Qualities = Array<Quality>;
export type Quality = "GOOD" | "BAD" | "UNCERTAIN";
export type QueryStatement = string;

export declare class QueryTimeoutException extends Data.TaggedError(
  "QueryTimeoutException",
)<{
  readonly message?: string;
}> {}
export type RawValueType =
  | "DOUBLE"
  | "BOOLEAN"
  | "STRING"
  | "INTEGER"
  | "UNKNOWN";
export interface Reference {
  dataset?: DataSetReference;
}
export type Resolution = string;

export interface Resource {
  portal?: PortalResource;
  project?: ProjectResource;
}
export declare class ResourceAlreadyExistsException extends Data.TaggedError(
  "ResourceAlreadyExistsException",
)<{
  readonly message: string;
  readonly resourceId: string;
  readonly resourceArn: string;
}> {}
export type ResourceArn = string;

export type ResourceId = string;

export declare class ResourceNotFoundException extends Data.TaggedError(
  "ResourceNotFoundException",
)<{
  readonly message: string;
}> {}
export type ResourceType = "PORTAL" | "PROJECT";
export type ResponseStream =
  | { trace: Trace }
  | { output: InvocationOutput }
  | { accessDeniedException: AccessDeniedException }
  | { conflictingOperationException: ConflictingOperationException }
  | { internalFailureException: InternalFailureException }
  | { invalidRequestException: InvalidRequestException }
  | { limitExceededException: LimitExceededException }
  | { resourceNotFoundException: ResourceNotFoundException }
  | { throttlingException: ThrottlingException };
export type RestrictedDescription = string;

export type RestrictedName = string;

export interface RetentionPeriod {
  numberOfDays?: number;
  unlimited?: boolean;
}
export interface Row {
  data: Array<Datum>;
}
export type Rows = Array<Row>;
export type ScalarType = "BOOLEAN" | "INT" | "DOUBLE" | "TIMESTAMP" | "STRING";
export type ScalarValue = string;

export type SelectAll = string;

export declare class ServiceUnavailableException extends Data.TaggedError(
  "ServiceUnavailableException",
)<{
  readonly message: string;
}> {}
export interface SiemensIE {
  iotCoreThingName: string;
}
export interface Source {
  arn?: string;
  location?: Location;
}
export interface SourceDetail {
  kendra?: KendraSourceDetail;
}
export type SSOApplicationId = string;

export type StorageType = "SITEWISE_DEFAULT_STORAGE" | "MULTI_LAYER_STORAGE";
export type TagKey = string;

export type TagKeyList = Array<string>;
export type TagMap = Record<string, string>;
export interface TagResourceRequest {
  resourceArn: string;
  tags: Record<string, string>;
}
export interface TagResourceResponse {}
export type TagValue = string;

export interface TargetResource {
  assetId: string;
}
export type TargetResourceType = "ASSET";
export declare class ThrottlingException extends Data.TaggedError(
  "ThrottlingException",
)<{
  readonly message: string;
}> {}
export interface TimeInNanos {
  timeInSeconds: number;
  offsetInNanos?: number;
}
export type TimeInSeconds = number;

export type TimeOrdering = "ASCENDING" | "DESCENDING";
export type TimeSeriesId = string;

export type TimeSeriesSummaries = Array<TimeSeriesSummary>;
export interface TimeSeriesSummary {
  assetId?: string;
  propertyId?: string;
  alias?: string;
  timeSeriesId: string;
  dataType: PropertyDataType;
  dataTypeSpec?: string;
  timeSeriesCreationDate: Date | string;
  timeSeriesLastUpdateDate: Date | string;
  timeSeriesArn: string;
}
export type Timestamp = Date | string;

export type Timestamps = Array<TimeInNanos>;
export declare class TooManyTagsException extends Data.TaggedError(
  "TooManyTagsException",
)<{
  readonly message?: string;
  readonly resourceName?: string;
}> {}
export interface Trace {
  text?: string;
}
export interface Transform {
  expression: string;
  variables: Array<ExpressionVariable>;
  processingConfig?: TransformProcessingConfig;
}
export interface TransformProcessingConfig {
  computeLocation: ComputeLocation;
  forwardingConfig?: ForwardingConfig;
}
export type TraversalDirection = "PARENT" | "CHILD";
export type TraversalType = "PATH_TO_ROOT";
export interface TumblingWindow {
  interval: string;
  offset?: string;
}
export declare class UnauthorizedException extends Data.TaggedError(
  "UnauthorizedException",
)<{
  readonly message: string;
}> {}
export type Unlimited = boolean;

export interface UntagResourceRequest {
  resourceArn: string;
  tagKeys: Array<string>;
}
export interface UntagResourceResponse {}
export interface UpdateAccessPolicyRequest {
  accessPolicyId: string;
  accessPolicyIdentity: Identity;
  accessPolicyResource: Resource;
  accessPolicyPermission: Permission;
  clientToken?: string;
}
export interface UpdateAccessPolicyResponse {}
export interface UpdateAssetModelCompositeModelRequest {
  assetModelId: string;
  assetModelCompositeModelId: string;
  assetModelCompositeModelExternalId?: string;
  assetModelCompositeModelDescription?: string;
  assetModelCompositeModelName: string;
  clientToken?: string;
  assetModelCompositeModelProperties?: Array<AssetModelProperty>;
  ifMatch?: string;
  ifNoneMatch?: string;
  matchForVersionType?: AssetModelVersionType;
}
export interface UpdateAssetModelCompositeModelResponse {
  assetModelCompositeModelPath: Array<AssetModelCompositeModelPathSegment>;
  assetModelStatus: AssetModelStatus;
}
export interface UpdateAssetModelRequest {
  assetModelId: string;
  assetModelExternalId?: string;
  assetModelName: string;
  assetModelDescription?: string;
  assetModelProperties?: Array<AssetModelProperty>;
  assetModelHierarchies?: Array<AssetModelHierarchy>;
  assetModelCompositeModels?: Array<AssetModelCompositeModel>;
  clientToken?: string;
  ifMatch?: string;
  ifNoneMatch?: string;
  matchForVersionType?: AssetModelVersionType;
}
export interface UpdateAssetModelResponse {
  assetModelStatus: AssetModelStatus;
}
export interface UpdateAssetPropertyRequest {
  assetId: string;
  propertyId: string;
  propertyAlias?: string;
  propertyNotificationState?: PropertyNotificationState;
  clientToken?: string;
  propertyUnit?: string;
}
export interface UpdateAssetRequest {
  assetId: string;
  assetName: string;
  clientToken?: string;
  assetDescription?: string;
  assetExternalId?: string;
}
export interface UpdateAssetResponse {
  assetStatus: AssetStatus;
}
export interface UpdateDashboardRequest {
  dashboardId: string;
  dashboardName: string;
  dashboardDescription?: string;
  dashboardDefinition: string;
  clientToken?: string;
}
export interface UpdateDashboardResponse {}
export interface UpdateDatasetRequest {
  datasetId: string;
  datasetName: string;
  datasetDescription?: string;
  datasetSource: DatasetSource;
  clientToken?: string;
}
export interface UpdateDatasetResponse {
  datasetId?: string;
  datasetArn?: string;
  datasetStatus?: DatasetStatus;
}
export interface UpdateGatewayCapabilityConfigurationRequest {
  gatewayId: string;
  capabilityNamespace: string;
  capabilityConfiguration: string;
}
export interface UpdateGatewayCapabilityConfigurationResponse {
  capabilityNamespace: string;
  capabilitySyncStatus: CapabilitySyncStatus;
}
export interface UpdateGatewayRequest {
  gatewayId: string;
  gatewayName: string;
}
export interface UpdatePortalRequest {
  portalId: string;
  portalName: string;
  portalDescription?: string;
  portalContactEmail: string;
  portalLogoImage?: Image;
  roleArn: string;
  clientToken?: string;
  notificationSenderEmail?: string;
  alarms?: Alarms;
  portalType?: PortalType;
  portalTypeConfiguration?: Record<string, PortalTypeEntry>;
}
export interface UpdatePortalResponse {
  portalStatus: PortalStatus;
}
export interface UpdateProjectRequest {
  projectId: string;
  projectName: string;
  projectDescription?: string;
  clientToken?: string;
}
export interface UpdateProjectResponse {}
export type Url = string;

export interface UserIdentity {
  id: string;
}
export declare class ValidationException extends Data.TaggedError(
  "ValidationException",
)<{
  readonly message?: string;
}> {}
export type VariableName = string;

export interface VariableValue {
  propertyId?: string;
  hierarchyId?: string;
  propertyPath?: Array<AssetModelPropertyPathSegment>;
}
export interface Variant {
  stringValue?: string;
  integerValue?: number;
  doubleValue?: number;
  booleanValue?: boolean;
  nullValue?: PropertyValueNullValue;
}
export type Version = string;

export interface WarmTierRetentionPeriod {
  numberOfDays?: number;
  unlimited?: boolean;
}
export type WarmTierState = "ENABLED" | "DISABLED";
export declare namespace AssociateAssets {
  export type Input = AssociateAssetsRequest;
  export type Output = {};
  export type Error =
    | ConflictingOperationException
    | InternalFailureException
    | InvalidRequestException
    | LimitExceededException
    | ResourceAlreadyExistsException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError;
}

export declare namespace AssociateTimeSeriesToAssetProperty {
  export type Input = AssociateTimeSeriesToAssetPropertyRequest;
  export type Output = {};
  export type Error =
    | ConflictingOperationException
    | InternalFailureException
    | InvalidRequestException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError;
}

export declare namespace BatchAssociateProjectAssets {
  export type Input = BatchAssociateProjectAssetsRequest;
  export type Output = BatchAssociateProjectAssetsResponse;
  export type Error =
    | InternalFailureException
    | InvalidRequestException
    | LimitExceededException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError;
}

export declare namespace BatchDisassociateProjectAssets {
  export type Input = BatchDisassociateProjectAssetsRequest;
  export type Output = BatchDisassociateProjectAssetsResponse;
  export type Error =
    | InternalFailureException
    | InvalidRequestException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError;
}

export declare namespace BatchGetAssetPropertyAggregates {
  export type Input = BatchGetAssetPropertyAggregatesRequest;
  export type Output = BatchGetAssetPropertyAggregatesResponse;
  export type Error =
    | InternalFailureException
    | InvalidRequestException
    | ServiceUnavailableException
    | ThrottlingException
    | CommonAwsError;
}

export declare namespace BatchGetAssetPropertyValue {
  export type Input = BatchGetAssetPropertyValueRequest;
  export type Output = BatchGetAssetPropertyValueResponse;
  export type Error =
    | InternalFailureException
    | InvalidRequestException
    | ServiceUnavailableException
    | ThrottlingException
    | CommonAwsError;
}

export declare namespace BatchGetAssetPropertyValueHistory {
  export type Input = BatchGetAssetPropertyValueHistoryRequest;
  export type Output = BatchGetAssetPropertyValueHistoryResponse;
  export type Error =
    | InternalFailureException
    | InvalidRequestException
    | ServiceUnavailableException
    | ThrottlingException
    | CommonAwsError;
}

export declare namespace BatchPutAssetPropertyValue {
  export type Input = BatchPutAssetPropertyValueRequest;
  export type Output = BatchPutAssetPropertyValueResponse;
  export type Error =
    | ConflictingOperationException
    | InternalFailureException
    | InvalidRequestException
    | LimitExceededException
    | ResourceNotFoundException
    | ServiceUnavailableException
    | ThrottlingException
    | CommonAwsError;
}

export declare namespace CreateAccessPolicy {
  export type Input = CreateAccessPolicyRequest;
  export type Output = CreateAccessPolicyResponse;
  export type Error =
    | InternalFailureException
    | InvalidRequestException
    | LimitExceededException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError;
}

export declare namespace CreateAsset {
  export type Input = CreateAssetRequest;
  export type Output = CreateAssetResponse;
  export type Error =
    | ConflictingOperationException
    | InternalFailureException
    | InvalidRequestException
    | LimitExceededException
    | ResourceAlreadyExistsException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError;
}

export declare namespace CreateAssetModel {
  export type Input = CreateAssetModelRequest;
  export type Output = CreateAssetModelResponse;
  export type Error =
    | ConflictingOperationException
    | InternalFailureException
    | InvalidRequestException
    | LimitExceededException
    | ResourceAlreadyExistsException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError;
}

export declare namespace CreateAssetModelCompositeModel {
  export type Input = CreateAssetModelCompositeModelRequest;
  export type Output = CreateAssetModelCompositeModelResponse;
  export type Error =
    | ConflictingOperationException
    | InternalFailureException
    | InvalidRequestException
    | LimitExceededException
    | PreconditionFailedException
    | ResourceAlreadyExistsException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError;
}

export declare namespace CreateBulkImportJob {
  export type Input = CreateBulkImportJobRequest;
  export type Output = CreateBulkImportJobResponse;
  export type Error =
    | ConflictingOperationException
    | InternalFailureException
    | InvalidRequestException
    | LimitExceededException
    | ResourceAlreadyExistsException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError;
}

export declare namespace CreateDashboard {
  export type Input = CreateDashboardRequest;
  export type Output = CreateDashboardResponse;
  export type Error =
    | InternalFailureException
    | InvalidRequestException
    | LimitExceededException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError;
}

export declare namespace CreateDataset {
  export type Input = CreateDatasetRequest;
  export type Output = CreateDatasetResponse;
  export type Error =
    | ConflictingOperationException
    | InternalFailureException
    | InvalidRequestException
    | LimitExceededException
    | ResourceAlreadyExistsException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError;
}

export declare namespace CreateGateway {
  export type Input = CreateGatewayRequest;
  export type Output = CreateGatewayResponse;
  export type Error =
    | InternalFailureException
    | InvalidRequestException
    | LimitExceededException
    | ResourceAlreadyExistsException
    | ThrottlingException
    | CommonAwsError;
}

export declare namespace CreatePortal {
  export type Input = CreatePortalRequest;
  export type Output = CreatePortalResponse;
  export type Error =
    | InternalFailureException
    | InvalidRequestException
    | LimitExceededException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError;
}

export declare namespace CreateProject {
  export type Input = CreateProjectRequest;
  export type Output = CreateProjectResponse;
  export type Error =
    | InternalFailureException
    | InvalidRequestException
    | LimitExceededException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError;
}

export declare namespace DeleteAccessPolicy {
  export type Input = DeleteAccessPolicyRequest;
  export type Output = DeleteAccessPolicyResponse;
  export type Error =
    | InternalFailureException
    | InvalidRequestException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError;
}

export declare namespace DeleteAsset {
  export type Input = DeleteAssetRequest;
  export type Output = DeleteAssetResponse;
  export type Error =
    | ConflictingOperationException
    | InternalFailureException
    | InvalidRequestException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError;
}

export declare namespace DeleteAssetModel {
  export type Input = DeleteAssetModelRequest;
  export type Output = DeleteAssetModelResponse;
  export type Error =
    | ConflictingOperationException
    | InternalFailureException
    | InvalidRequestException
    | PreconditionFailedException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError;
}

export declare namespace DeleteAssetModelCompositeModel {
  export type Input = DeleteAssetModelCompositeModelRequest;
  export type Output = DeleteAssetModelCompositeModelResponse;
  export type Error =
    | ConflictingOperationException
    | InternalFailureException
    | InvalidRequestException
    | PreconditionFailedException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError;
}

export declare namespace DeleteDashboard {
  export type Input = DeleteDashboardRequest;
  export type Output = DeleteDashboardResponse;
  export type Error =
    | InternalFailureException
    | InvalidRequestException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError;
}

export declare namespace DeleteDataset {
  export type Input = DeleteDatasetRequest;
  export type Output = DeleteDatasetResponse;
  export type Error =
    | ConflictingOperationException
    | InternalFailureException
    | InvalidRequestException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError;
}

export declare namespace DeleteGateway {
  export type Input = DeleteGatewayRequest;
  export type Output = {};
  export type Error =
    | ConflictingOperationException
    | InternalFailureException
    | InvalidRequestException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError;
}

export declare namespace DeletePortal {
  export type Input = DeletePortalRequest;
  export type Output = DeletePortalResponse;
  export type Error =
    | ConflictingOperationException
    | InternalFailureException
    | InvalidRequestException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError;
}

export declare namespace DeleteProject {
  export type Input = DeleteProjectRequest;
  export type Output = DeleteProjectResponse;
  export type Error =
    | InternalFailureException
    | InvalidRequestException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError;
}

export declare namespace DeleteTimeSeries {
  export type Input = DeleteTimeSeriesRequest;
  export type Output = {};
  export type Error =
    | ConflictingOperationException
    | InternalFailureException
    | InvalidRequestException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError;
}

export declare namespace DescribeAccessPolicy {
  export type Input = DescribeAccessPolicyRequest;
  export type Output = DescribeAccessPolicyResponse;
  export type Error =
    | InternalFailureException
    | InvalidRequestException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError;
}

export declare namespace DescribeAction {
  export type Input = DescribeActionRequest;
  export type Output = DescribeActionResponse;
  export type Error =
    | InternalFailureException
    | InvalidRequestException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError;
}

export declare namespace DescribeAsset {
  export type Input = DescribeAssetRequest;
  export type Output = DescribeAssetResponse;
  export type Error =
    | InternalFailureException
    | InvalidRequestException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError;
}

export declare namespace DescribeAssetCompositeModel {
  export type Input = DescribeAssetCompositeModelRequest;
  export type Output = DescribeAssetCompositeModelResponse;
  export type Error =
    | InternalFailureException
    | InvalidRequestException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError;
}

export declare namespace DescribeAssetModel {
  export type Input = DescribeAssetModelRequest;
  export type Output = DescribeAssetModelResponse;
  export type Error =
    | InternalFailureException
    | InvalidRequestException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError;
}

export declare namespace DescribeAssetModelCompositeModel {
  export type Input = DescribeAssetModelCompositeModelRequest;
  export type Output = DescribeAssetModelCompositeModelResponse;
  export type Error =
    | InternalFailureException
    | InvalidRequestException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError;
}

export declare namespace DescribeAssetProperty {
  export type Input = DescribeAssetPropertyRequest;
  export type Output = DescribeAssetPropertyResponse;
  export type Error =
    | InternalFailureException
    | InvalidRequestException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError;
}

export declare namespace DescribeBulkImportJob {
  export type Input = DescribeBulkImportJobRequest;
  export type Output = DescribeBulkImportJobResponse;
  export type Error =
    | InternalFailureException
    | InvalidRequestException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError;
}

export declare namespace DescribeDashboard {
  export type Input = DescribeDashboardRequest;
  export type Output = DescribeDashboardResponse;
  export type Error =
    | InternalFailureException
    | InvalidRequestException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError;
}

export declare namespace DescribeDataset {
  export type Input = DescribeDatasetRequest;
  export type Output = DescribeDatasetResponse;
  export type Error =
    | InternalFailureException
    | InvalidRequestException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError;
}

export declare namespace DescribeDefaultEncryptionConfiguration {
  export type Input = DescribeDefaultEncryptionConfigurationRequest;
  export type Output = DescribeDefaultEncryptionConfigurationResponse;
  export type Error =
    | InternalFailureException
    | InvalidRequestException
    | ThrottlingException
    | CommonAwsError;
}

export declare namespace DescribeGateway {
  export type Input = DescribeGatewayRequest;
  export type Output = DescribeGatewayResponse;
  export type Error =
    | InternalFailureException
    | InvalidRequestException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError;
}

export declare namespace DescribeGatewayCapabilityConfiguration {
  export type Input = DescribeGatewayCapabilityConfigurationRequest;
  export type Output = DescribeGatewayCapabilityConfigurationResponse;
  export type Error =
    | InternalFailureException
    | InvalidRequestException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError;
}

export declare namespace DescribeLoggingOptions {
  export type Input = DescribeLoggingOptionsRequest;
  export type Output = DescribeLoggingOptionsResponse;
  export type Error =
    | InternalFailureException
    | InvalidRequestException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError;
}

export declare namespace DescribePortal {
  export type Input = DescribePortalRequest;
  export type Output = DescribePortalResponse;
  export type Error =
    | InternalFailureException
    | InvalidRequestException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError;
}

export declare namespace DescribeProject {
  export type Input = DescribeProjectRequest;
  export type Output = DescribeProjectResponse;
  export type Error =
    | InternalFailureException
    | InvalidRequestException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError;
}

export declare namespace DescribeStorageConfiguration {
  export type Input = DescribeStorageConfigurationRequest;
  export type Output = DescribeStorageConfigurationResponse;
  export type Error =
    | ConflictingOperationException
    | InternalFailureException
    | InvalidRequestException
    | LimitExceededException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError;
}

export declare namespace DescribeTimeSeries {
  export type Input = DescribeTimeSeriesRequest;
  export type Output = DescribeTimeSeriesResponse;
  export type Error =
    | InternalFailureException
    | InvalidRequestException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError;
}

export declare namespace DisassociateAssets {
  export type Input = DisassociateAssetsRequest;
  export type Output = {};
  export type Error =
    | ConflictingOperationException
    | InternalFailureException
    | InvalidRequestException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError;
}

export declare namespace DisassociateTimeSeriesFromAssetProperty {
  export type Input = DisassociateTimeSeriesFromAssetPropertyRequest;
  export type Output = {};
  export type Error =
    | ConflictingOperationException
    | InternalFailureException
    | InvalidRequestException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError;
}

export declare namespace ExecuteAction {
  export type Input = ExecuteActionRequest;
  export type Output = ExecuteActionResponse;
  export type Error =
    | ConflictingOperationException
    | InternalFailureException
    | InvalidRequestException
    | LimitExceededException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError;
}

export declare namespace ExecuteQuery {
  export type Input = ExecuteQueryRequest;
  export type Output = ExecuteQueryResponse;
  export type Error =
    | AccessDeniedException
    | InternalFailureException
    | InvalidRequestException
    | QueryTimeoutException
    | ServiceUnavailableException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace GetAssetPropertyAggregates {
  export type Input = GetAssetPropertyAggregatesRequest;
  export type Output = GetAssetPropertyAggregatesResponse;
  export type Error =
    | InternalFailureException
    | InvalidRequestException
    | ResourceNotFoundException
    | ServiceUnavailableException
    | ThrottlingException
    | CommonAwsError;
}

export declare namespace GetAssetPropertyValue {
  export type Input = GetAssetPropertyValueRequest;
  export type Output = GetAssetPropertyValueResponse;
  export type Error =
    | InternalFailureException
    | InvalidRequestException
    | ResourceNotFoundException
    | ServiceUnavailableException
    | ThrottlingException
    | CommonAwsError;
}

export declare namespace GetAssetPropertyValueHistory {
  export type Input = GetAssetPropertyValueHistoryRequest;
  export type Output = GetAssetPropertyValueHistoryResponse;
  export type Error =
    | InternalFailureException
    | InvalidRequestException
    | ResourceNotFoundException
    | ServiceUnavailableException
    | ThrottlingException
    | CommonAwsError;
}

export declare namespace GetInterpolatedAssetPropertyValues {
  export type Input = GetInterpolatedAssetPropertyValuesRequest;
  export type Output = GetInterpolatedAssetPropertyValuesResponse;
  export type Error =
    | InternalFailureException
    | InvalidRequestException
    | ResourceNotFoundException
    | ServiceUnavailableException
    | ThrottlingException
    | CommonAwsError;
}

export declare namespace InvokeAssistant {
  export type Input = InvokeAssistantRequest;
  export type Output = InvokeAssistantResponse;
  export type Error =
    | AccessDeniedException
    | ConflictingOperationException
    | InternalFailureException
    | InvalidRequestException
    | LimitExceededException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError;
}

export declare namespace ListAccessPolicies {
  export type Input = ListAccessPoliciesRequest;
  export type Output = ListAccessPoliciesResponse;
  export type Error =
    | InternalFailureException
    | InvalidRequestException
    | ThrottlingException
    | CommonAwsError;
}

export declare namespace ListActions {
  export type Input = ListActionsRequest;
  export type Output = ListActionsResponse;
  export type Error =
    | InternalFailureException
    | InvalidRequestException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError;
}

export declare namespace ListAssetModelCompositeModels {
  export type Input = ListAssetModelCompositeModelsRequest;
  export type Output = ListAssetModelCompositeModelsResponse;
  export type Error =
    | InternalFailureException
    | InvalidRequestException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError;
}

export declare namespace ListAssetModelProperties {
  export type Input = ListAssetModelPropertiesRequest;
  export type Output = ListAssetModelPropertiesResponse;
  export type Error =
    | InternalFailureException
    | InvalidRequestException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError;
}

export declare namespace ListAssetModels {
  export type Input = ListAssetModelsRequest;
  export type Output = ListAssetModelsResponse;
  export type Error =
    | InternalFailureException
    | InvalidRequestException
    | ThrottlingException
    | CommonAwsError;
}

export declare namespace ListAssetProperties {
  export type Input = ListAssetPropertiesRequest;
  export type Output = ListAssetPropertiesResponse;
  export type Error =
    | InternalFailureException
    | InvalidRequestException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError;
}

export declare namespace ListAssetRelationships {
  export type Input = ListAssetRelationshipsRequest;
  export type Output = ListAssetRelationshipsResponse;
  export type Error =
    | InternalFailureException
    | InvalidRequestException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError;
}

export declare namespace ListAssets {
  export type Input = ListAssetsRequest;
  export type Output = ListAssetsResponse;
  export type Error =
    | InternalFailureException
    | InvalidRequestException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError;
}

export declare namespace ListAssociatedAssets {
  export type Input = ListAssociatedAssetsRequest;
  export type Output = ListAssociatedAssetsResponse;
  export type Error =
    | InternalFailureException
    | InvalidRequestException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError;
}

export declare namespace ListBulkImportJobs {
  export type Input = ListBulkImportJobsRequest;
  export type Output = ListBulkImportJobsResponse;
  export type Error =
    | InternalFailureException
    | InvalidRequestException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError;
}

export declare namespace ListCompositionRelationships {
  export type Input = ListCompositionRelationshipsRequest;
  export type Output = ListCompositionRelationshipsResponse;
  export type Error =
    | InternalFailureException
    | InvalidRequestException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError;
}

export declare namespace ListDashboards {
  export type Input = ListDashboardsRequest;
  export type Output = ListDashboardsResponse;
  export type Error =
    | InternalFailureException
    | InvalidRequestException
    | ThrottlingException
    | CommonAwsError;
}

export declare namespace ListDatasets {
  export type Input = ListDatasetsRequest;
  export type Output = ListDatasetsResponse;
  export type Error =
    | InternalFailureException
    | InvalidRequestException
    | ThrottlingException
    | CommonAwsError;
}

export declare namespace ListGateways {
  export type Input = ListGatewaysRequest;
  export type Output = ListGatewaysResponse;
  export type Error =
    | InternalFailureException
    | InvalidRequestException
    | ThrottlingException
    | CommonAwsError;
}

export declare namespace ListPortals {
  export type Input = ListPortalsRequest;
  export type Output = ListPortalsResponse;
  export type Error =
    | InternalFailureException
    | InvalidRequestException
    | ThrottlingException
    | CommonAwsError;
}

export declare namespace ListProjectAssets {
  export type Input = ListProjectAssetsRequest;
  export type Output = ListProjectAssetsResponse;
  export type Error =
    | InternalFailureException
    | InvalidRequestException
    | ThrottlingException
    | CommonAwsError;
}

export declare namespace ListProjects {
  export type Input = ListProjectsRequest;
  export type Output = ListProjectsResponse;
  export type Error =
    | InternalFailureException
    | InvalidRequestException
    | ThrottlingException
    | CommonAwsError;
}

export declare namespace ListTagsForResource {
  export type Input = ListTagsForResourceRequest;
  export type Output = ListTagsForResourceResponse;
  export type Error =
    | ConflictingOperationException
    | InternalFailureException
    | InvalidRequestException
    | LimitExceededException
    | ResourceNotFoundException
    | ThrottlingException
    | UnauthorizedException
    | CommonAwsError;
}

export declare namespace ListTimeSeries {
  export type Input = ListTimeSeriesRequest;
  export type Output = ListTimeSeriesResponse;
  export type Error =
    | InternalFailureException
    | InvalidRequestException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError;
}

export declare namespace PutDefaultEncryptionConfiguration {
  export type Input = PutDefaultEncryptionConfigurationRequest;
  export type Output = PutDefaultEncryptionConfigurationResponse;
  export type Error =
    | ConflictingOperationException
    | InternalFailureException
    | InvalidRequestException
    | LimitExceededException
    | ThrottlingException
    | CommonAwsError;
}

export declare namespace PutLoggingOptions {
  export type Input = PutLoggingOptionsRequest;
  export type Output = PutLoggingOptionsResponse;
  export type Error =
    | ConflictingOperationException
    | InternalFailureException
    | InvalidRequestException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError;
}

export declare namespace PutStorageConfiguration {
  export type Input = PutStorageConfigurationRequest;
  export type Output = PutStorageConfigurationResponse;
  export type Error =
    | ConflictingOperationException
    | InternalFailureException
    | InvalidRequestException
    | LimitExceededException
    | ResourceAlreadyExistsException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError;
}

export declare namespace TagResource {
  export type Input = TagResourceRequest;
  export type Output = TagResourceResponse;
  export type Error =
    | ConflictingOperationException
    | InternalFailureException
    | InvalidRequestException
    | LimitExceededException
    | ResourceNotFoundException
    | ThrottlingException
    | TooManyTagsException
    | UnauthorizedException
    | CommonAwsError;
}

export declare namespace UntagResource {
  export type Input = UntagResourceRequest;
  export type Output = UntagResourceResponse;
  export type Error =
    | ConflictingOperationException
    | InternalFailureException
    | InvalidRequestException
    | LimitExceededException
    | ResourceNotFoundException
    | ThrottlingException
    | UnauthorizedException
    | CommonAwsError;
}

export declare namespace UpdateAccessPolicy {
  export type Input = UpdateAccessPolicyRequest;
  export type Output = UpdateAccessPolicyResponse;
  export type Error =
    | InternalFailureException
    | InvalidRequestException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError;
}

export declare namespace UpdateAsset {
  export type Input = UpdateAssetRequest;
  export type Output = UpdateAssetResponse;
  export type Error =
    | ConflictingOperationException
    | InternalFailureException
    | InvalidRequestException
    | ResourceAlreadyExistsException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError;
}

export declare namespace UpdateAssetModel {
  export type Input = UpdateAssetModelRequest;
  export type Output = UpdateAssetModelResponse;
  export type Error =
    | ConflictingOperationException
    | InternalFailureException
    | InvalidRequestException
    | LimitExceededException
    | PreconditionFailedException
    | ResourceAlreadyExistsException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError;
}

export declare namespace UpdateAssetModelCompositeModel {
  export type Input = UpdateAssetModelCompositeModelRequest;
  export type Output = UpdateAssetModelCompositeModelResponse;
  export type Error =
    | ConflictingOperationException
    | InternalFailureException
    | InvalidRequestException
    | LimitExceededException
    | PreconditionFailedException
    | ResourceAlreadyExistsException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError;
}

export declare namespace UpdateAssetProperty {
  export type Input = UpdateAssetPropertyRequest;
  export type Output = {};
  export type Error =
    | ConflictingOperationException
    | InternalFailureException
    | InvalidRequestException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError;
}

export declare namespace UpdateDashboard {
  export type Input = UpdateDashboardRequest;
  export type Output = UpdateDashboardResponse;
  export type Error =
    | InternalFailureException
    | InvalidRequestException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError;
}

export declare namespace UpdateDataset {
  export type Input = UpdateDatasetRequest;
  export type Output = UpdateDatasetResponse;
  export type Error =
    | ConflictingOperationException
    | InternalFailureException
    | InvalidRequestException
    | LimitExceededException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError;
}

export declare namespace UpdateGateway {
  export type Input = UpdateGatewayRequest;
  export type Output = {};
  export type Error =
    | ConflictingOperationException
    | InternalFailureException
    | InvalidRequestException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError;
}

export declare namespace UpdateGatewayCapabilityConfiguration {
  export type Input = UpdateGatewayCapabilityConfigurationRequest;
  export type Output = UpdateGatewayCapabilityConfigurationResponse;
  export type Error =
    | ConflictingOperationException
    | InternalFailureException
    | InvalidRequestException
    | LimitExceededException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError;
}

export declare namespace UpdatePortal {
  export type Input = UpdatePortalRequest;
  export type Output = UpdatePortalResponse;
  export type Error =
    | ConflictingOperationException
    | InternalFailureException
    | InvalidRequestException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError;
}

export declare namespace UpdateProject {
  export type Input = UpdateProjectRequest;
  export type Output = UpdateProjectResponse;
  export type Error =
    | InternalFailureException
    | InvalidRequestException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError;
}
