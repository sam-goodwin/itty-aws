import type { Effect, Data as EffectData } from "effect";
import type { CommonAwsError } from "../error.ts";

export interface AWSIoTTwinMaker {
  batchPutPropertyValues(
    input: BatchPutPropertyValuesRequest,
  ): Effect.Effect<
    BatchPutPropertyValuesResponse,
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  cancelMetadataTransferJob(
    input: CancelMetadataTransferJobRequest,
  ): Effect.Effect<
    CancelMetadataTransferJobResponse,
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  createComponentType(
    input: CreateComponentTypeRequest,
  ): Effect.Effect<
    CreateComponentTypeResponse,
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ServiceQuotaExceededException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  createEntity(
    input: CreateEntityRequest,
  ): Effect.Effect<
    CreateEntityResponse,
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ServiceQuotaExceededException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  createMetadataTransferJob(
    input: CreateMetadataTransferJobRequest,
  ): Effect.Effect<
    CreateMetadataTransferJobResponse,
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ServiceQuotaExceededException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  createScene(
    input: CreateSceneRequest,
  ): Effect.Effect<
    CreateSceneResponse,
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ServiceQuotaExceededException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  createSyncJob(
    input: CreateSyncJobRequest,
  ): Effect.Effect<
    CreateSyncJobResponse,
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ServiceQuotaExceededException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  createWorkspace(
    input: CreateWorkspaceRequest,
  ): Effect.Effect<
    CreateWorkspaceResponse,
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ServiceQuotaExceededException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  deleteComponentType(
    input: DeleteComponentTypeRequest,
  ): Effect.Effect<
    DeleteComponentTypeResponse,
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  deleteEntity(
    input: DeleteEntityRequest,
  ): Effect.Effect<
    DeleteEntityResponse,
    | InternalServerException
    | ResourceNotFoundException
    | ServiceQuotaExceededException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  deleteScene(
    input: DeleteSceneRequest,
  ): Effect.Effect<
    DeleteSceneResponse,
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  deleteSyncJob(
    input: DeleteSyncJobRequest,
  ): Effect.Effect<
    DeleteSyncJobResponse,
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ServiceQuotaExceededException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  deleteWorkspace(
    input: DeleteWorkspaceRequest,
  ): Effect.Effect<
    DeleteWorkspaceResponse,
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  executeQuery(
    input: ExecuteQueryRequest,
  ): Effect.Effect<
    ExecuteQueryResponse,
    | AccessDeniedException
    | InternalServerException
    | QueryTimeoutException
    | ServiceQuotaExceededException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  getComponentType(
    input: GetComponentTypeRequest,
  ): Effect.Effect<
    GetComponentTypeResponse,
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  getEntity(
    input: GetEntityRequest,
  ): Effect.Effect<
    GetEntityResponse,
    | InternalServerException
    | ResourceNotFoundException
    | ServiceQuotaExceededException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  getMetadataTransferJob(
    input: GetMetadataTransferJobRequest,
  ): Effect.Effect<
    GetMetadataTransferJobResponse,
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  getPricingPlan(
    input: GetPricingPlanRequest,
  ): Effect.Effect<
    GetPricingPlanResponse,
    | AccessDeniedException
    | InternalServerException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  getPropertyValue(
    input: GetPropertyValueRequest,
  ): Effect.Effect<
    GetPropertyValueResponse,
    | AccessDeniedException
    | ConnectorFailureException
    | ConnectorTimeoutException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  getPropertyValueHistory(
    input: GetPropertyValueHistoryRequest,
  ): Effect.Effect<
    GetPropertyValueHistoryResponse,
    | AccessDeniedException
    | ConnectorFailureException
    | ConnectorTimeoutException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  getScene(
    input: GetSceneRequest,
  ): Effect.Effect<
    GetSceneResponse,
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  getSyncJob(
    input: GetSyncJobRequest,
  ): Effect.Effect<
    GetSyncJobResponse,
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ServiceQuotaExceededException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  getWorkspace(
    input: GetWorkspaceRequest,
  ): Effect.Effect<
    GetWorkspaceResponse,
    | InternalServerException
    | ResourceNotFoundException
    | ServiceQuotaExceededException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  listComponents(
    input: ListComponentsRequest,
  ): Effect.Effect<
    ListComponentsResponse,
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  listComponentTypes(
    input: ListComponentTypesRequest,
  ): Effect.Effect<
    ListComponentTypesResponse,
    | AccessDeniedException
    | InternalServerException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  listEntities(
    input: ListEntitiesRequest,
  ): Effect.Effect<
    ListEntitiesResponse,
    | InternalServerException
    | ServiceQuotaExceededException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  listMetadataTransferJobs(
    input: ListMetadataTransferJobsRequest,
  ): Effect.Effect<
    ListMetadataTransferJobsResponse,
    | AccessDeniedException
    | InternalServerException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  listProperties(
    input: ListPropertiesRequest,
  ): Effect.Effect<
    ListPropertiesResponse,
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  listScenes(
    input: ListScenesRequest,
  ): Effect.Effect<
    ListScenesResponse,
    | AccessDeniedException
    | InternalServerException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  listSyncJobs(
    input: ListSyncJobsRequest,
  ): Effect.Effect<
    ListSyncJobsResponse,
    | AccessDeniedException
    | InternalServerException
    | ServiceQuotaExceededException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  listSyncResources(
    input: ListSyncResourcesRequest,
  ): Effect.Effect<
    ListSyncResourcesResponse,
    | AccessDeniedException
    | InternalServerException
    | ServiceQuotaExceededException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  listTagsForResource(
    input: ListTagsForResourceRequest,
  ): Effect.Effect<
    ListTagsForResourceResponse,
    AccessDeniedException | ResourceNotFoundException | CommonAwsError
  >;
  listWorkspaces(
    input: ListWorkspacesRequest,
  ): Effect.Effect<
    ListWorkspacesResponse,
    | InternalServerException
    | ServiceQuotaExceededException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  tagResource(
    input: TagResourceRequest,
  ): Effect.Effect<
    TagResourceResponse,
    | AccessDeniedException
    | ResourceNotFoundException
    | TooManyTagsException
    | CommonAwsError
  >;
  untagResource(
    input: UntagResourceRequest,
  ): Effect.Effect<
    UntagResourceResponse,
    AccessDeniedException | ResourceNotFoundException | CommonAwsError
  >;
  updateComponentType(
    input: UpdateComponentTypeRequest,
  ): Effect.Effect<
    UpdateComponentTypeResponse,
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ServiceQuotaExceededException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  updateEntity(
    input: UpdateEntityRequest,
  ): Effect.Effect<
    UpdateEntityResponse,
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ServiceQuotaExceededException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  updatePricingPlan(
    input: UpdatePricingPlanRequest,
  ): Effect.Effect<
    UpdatePricingPlanResponse,
    | AccessDeniedException
    | InternalServerException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  updateScene(
    input: UpdateSceneRequest,
  ): Effect.Effect<
    UpdateSceneResponse,
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  updateWorkspace(
    input: UpdateWorkspaceRequest,
  ): Effect.Effect<
    UpdateWorkspaceResponse,
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ServiceQuotaExceededException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
}

export type Iottwinmaker = AWSIoTTwinMaker;

export declare class AccessDeniedException extends EffectData.TaggedError(
  "AccessDeniedException",
)<{
  readonly message?: string;
}> {}
export interface BatchPutPropertyError {
  errorCode: string;
  errorMessage: string;
  entry: PropertyValueEntry;
}
export interface BatchPutPropertyErrorEntry {
  errors: Array<BatchPutPropertyError>;
}
export interface BatchPutPropertyValuesRequest {
  workspaceId: string;
  entries: Array<PropertyValueEntry>;
}
export interface BatchPutPropertyValuesResponse {
  errorEntries: Array<BatchPutPropertyErrorEntry>;
}
export interface BundleInformation {
  bundleNames: Array<string>;
  pricingTier?: string;
}
export type BundleName = string;

export interface CancelMetadataTransferJobRequest {
  metadataTransferJobId: string;
}
export interface CancelMetadataTransferJobResponse {
  metadataTransferJobId: string;
  arn: string;
  updateDateTime: Date | string;
  status: MetadataTransferJobStatus;
  progress?: MetadataTransferJobProgress;
}
export interface ColumnDescription {
  name?: string;
  type?: string;
}
export type ColumnDescriptions = Array<ColumnDescription>;
export type ColumnName = string;

export type ColumnType = string;

export type ComponentPath = string;

export interface ComponentPropertyGroupRequest {
  groupType?: string;
  propertyNames?: Array<string>;
  updateType?: string;
}
export type ComponentPropertyGroupRequests = Record<
  string,
  ComponentPropertyGroupRequest
>;
export interface ComponentPropertyGroupResponse {
  groupType: string;
  propertyNames: Array<string>;
  isInherited: boolean;
}
export type ComponentPropertyGroupResponses = Record<
  string,
  ComponentPropertyGroupResponse
>;
export interface ComponentRequest {
  description?: string;
  componentTypeId?: string;
  properties?: Record<string, PropertyRequest>;
  propertyGroups?: Record<string, ComponentPropertyGroupRequest>;
}
export interface ComponentResponse {
  componentName?: string;
  description?: string;
  componentTypeId?: string;
  status?: Status;
  definedIn?: string;
  properties?: Record<string, PropertyResponse>;
  propertyGroups?: Record<string, ComponentPropertyGroupResponse>;
  syncSource?: string;
  areAllPropertiesReturned?: boolean;
  compositeComponents?: Record<string, ComponentSummary>;
  areAllCompositeComponentsReturned?: boolean;
}
export type ComponentsMap = Record<string, ComponentResponse>;
export type ComponentsMapRequest = Record<string, ComponentRequest>;
export type ComponentSummaries = Array<ComponentSummary>;
export interface ComponentSummary {
  componentName: string;
  componentTypeId: string;
  definedIn?: string;
  description?: string;
  propertyGroups?: Record<string, ComponentPropertyGroupResponse>;
  status: Status;
  syncSource?: string;
  componentPath?: string;
}
export type ComponentTypeId = string;

export type ComponentTypeName = string;

export type ComponentTypeSummaries = Array<ComponentTypeSummary>;
export interface ComponentTypeSummary {
  arn: string;
  componentTypeId: string;
  creationDateTime: Date | string;
  updateDateTime: Date | string;
  description?: string;
  status?: Status;
  componentTypeName?: string;
}
export interface ComponentUpdateRequest {
  updateType?: string;
  description?: string;
  componentTypeId?: string;
  propertyUpdates?: Record<string, PropertyRequest>;
  propertyGroupUpdates?: Record<string, ComponentPropertyGroupRequest>;
}
export type ComponentUpdatesMapRequest = Record<string, ComponentUpdateRequest>;
export type ComponentUpdateType = string;

export interface CompositeComponentRequest {
  description?: string;
  properties?: Record<string, PropertyRequest>;
  propertyGroups?: Record<string, ComponentPropertyGroupRequest>;
}
export type CompositeComponentResponse = Record<string, ComponentSummary>;
export type CompositeComponentsMapRequest = Record<
  string,
  CompositeComponentRequest
>;
export interface CompositeComponentTypeRequest {
  componentTypeId?: string;
}
export interface CompositeComponentTypeResponse {
  componentTypeId?: string;
  isInherited?: boolean;
}
export type CompositeComponentTypesRequest = Record<
  string,
  CompositeComponentTypeRequest
>;
export type CompositeComponentTypesResponse = Record<
  string,
  CompositeComponentTypeResponse
>;
export interface CompositeComponentUpdateRequest {
  updateType?: string;
  description?: string;
  propertyUpdates?: Record<string, PropertyRequest>;
  propertyGroupUpdates?: Record<string, ComponentPropertyGroupRequest>;
}
export type CompositeComponentUpdatesMapRequest = Record<
  string,
  CompositeComponentUpdateRequest
>;
export type Configuration = Record<string, string>;
export declare class ConflictException extends EffectData.TaggedError(
  "ConflictException",
)<{
  readonly message?: string;
}> {}
export declare class ConnectorFailureException extends EffectData.TaggedError(
  "ConnectorFailureException",
)<{
  readonly message?: string;
}> {}
export declare class ConnectorTimeoutException extends EffectData.TaggedError(
  "ConnectorTimeoutException",
)<{
  readonly message?: string;
}> {}
export interface CreateComponentTypeRequest {
  workspaceId: string;
  isSingleton?: boolean;
  componentTypeId: string;
  description?: string;
  propertyDefinitions?: Record<string, PropertyDefinitionRequest>;
  extendsFrom?: Array<string>;
  functions?: Record<string, FunctionRequest>;
  tags?: Record<string, string>;
  propertyGroups?: Record<string, PropertyGroupRequest>;
  componentTypeName?: string;
  compositeComponentTypes?: Record<string, CompositeComponentTypeRequest>;
}
export interface CreateComponentTypeResponse {
  arn: string;
  creationDateTime: Date | string;
  state: string;
}
export interface CreateEntityRequest {
  workspaceId: string;
  entityId?: string;
  entityName: string;
  description?: string;
  components?: Record<string, ComponentRequest>;
  compositeComponents?: Record<string, CompositeComponentRequest>;
  parentEntityId?: string;
  tags?: Record<string, string>;
}
export interface CreateEntityResponse {
  entityId: string;
  arn: string;
  creationDateTime: Date | string;
  state: string;
}
export interface CreateMetadataTransferJobRequest {
  metadataTransferJobId?: string;
  description?: string;
  sources: Array<SourceConfiguration>;
  destination: DestinationConfiguration;
}
export interface CreateMetadataTransferJobResponse {
  metadataTransferJobId: string;
  arn: string;
  creationDateTime: Date | string;
  status: MetadataTransferJobStatus;
}
export interface CreateSceneRequest {
  workspaceId: string;
  sceneId: string;
  contentLocation: string;
  description?: string;
  capabilities?: Array<string>;
  tags?: Record<string, string>;
  sceneMetadata?: Record<string, string>;
}
export interface CreateSceneResponse {
  arn: string;
  creationDateTime: Date | string;
}
export interface CreateSyncJobRequest {
  workspaceId: string;
  syncSource: string;
  syncRole: string;
  tags?: Record<string, string>;
}
export interface CreateSyncJobResponse {
  arn: string;
  creationDateTime: Date | string;
  state: string;
}
export interface CreateWorkspaceRequest {
  workspaceId: string;
  description?: string;
  s3Location?: string;
  role?: string;
  tags?: Record<string, string>;
}
export interface CreateWorkspaceResponse {
  arn: string;
  creationDateTime: Date | string;
}
export interface DataConnector {
  lambda?: LambdaFunction;
  isNative?: boolean;
}
export interface DataType {
  type: string;
  nestedType?: DataType;
  allowedValues?: Array<DataValue>;
  unitOfMeasure?: string;
  relationship?: Relationship;
}
export interface DataValue {
  booleanValue?: boolean;
  doubleValue?: number;
  integerValue?: number;
  longValue?: number;
  stringValue?: string;
  listValue?: Array<DataValue>;
  mapValue?: Record<string, DataValue>;
  relationshipValue?: RelationshipValue;
  expression?: string;
}
export type DataValueList = Array<DataValue>;
export type DataValueMap = Record<string, DataValue>;
export interface DeleteComponentTypeRequest {
  workspaceId: string;
  componentTypeId: string;
}
export interface DeleteComponentTypeResponse {
  state: string;
}
export interface DeleteEntityRequest {
  workspaceId: string;
  entityId: string;
  isRecursive?: boolean;
}
export interface DeleteEntityResponse {
  state: string;
}
export interface DeleteSceneRequest {
  workspaceId: string;
  sceneId: string;
}
export interface DeleteSceneResponse {}
export interface DeleteSyncJobRequest {
  workspaceId: string;
  syncSource: string;
}
export interface DeleteSyncJobResponse {
  state: string;
}
export interface DeleteWorkspaceRequest {
  workspaceId: string;
}
export interface DeleteWorkspaceResponse {
  message?: string;
}
export type Description = string;

export interface DestinationConfiguration {
  type: string;
  s3Configuration?: S3DestinationConfiguration;
  iotTwinMakerConfiguration?: IotTwinMakerDestinationConfiguration;
}
export type DestinationType = string;

export type Double = number;

export type EntityId = string;

export type EntityName = string;

export interface EntityPropertyReference {
  componentName?: string;
  componentPath?: string;
  externalIdProperty?: Record<string, string>;
  entityId?: string;
  propertyName: string;
}
export type EntitySummaries = Array<EntitySummary>;
export interface EntitySummary {
  entityId: string;
  entityName: string;
  arn: string;
  parentEntityId?: string;
  status: Status;
  description?: string;
  hasChildEntities?: boolean;
  creationDateTime: Date | string;
  updateDateTime: Date | string;
}
export type Entries = Array<PropertyValueEntry>;
export type ErrorCode = string;

export interface ErrorDetails {
  code?: string;
  message?: string;
}
export type ErrorEntries = Array<BatchPutPropertyErrorEntry>;
export type ErrorMessage = string;

export type Errors = Array<BatchPutPropertyError>;
export type ExceptionMessage = string;

export interface ExecuteQueryRequest {
  workspaceId: string;
  queryStatement: string;
  maxResults?: number;
  nextToken?: string;
}
export interface ExecuteQueryResponse {
  columnDescriptions?: Array<ColumnDescription>;
  rows?: Array<Row>;
  nextToken?: string;
}
export type Expression = string;

export type ExtendsFrom = Array<string>;
export type ExternalIdProperty = Record<string, string>;
export interface FilterByAsset {
  assetId?: string;
  assetExternalId?: string;
  includeOffspring?: boolean;
  includeAssetModel?: boolean;
}
export interface FilterByAssetModel {
  assetModelId?: string;
  assetModelExternalId?: string;
  includeOffspring?: boolean;
  includeAssets?: boolean;
}
export interface FilterByComponentType {
  componentTypeId: string;
}
export interface FilterByEntity {
  entityId: string;
}
export interface FunctionRequest {
  requiredProperties?: Array<string>;
  scope?: string;
  implementedBy?: DataConnector;
}
export interface FunctionResponse {
  requiredProperties?: Array<string>;
  scope?: string;
  implementedBy?: DataConnector;
  isInherited?: boolean;
}
export type FunctionsRequest = Record<string, FunctionRequest>;
export type FunctionsResponse = Record<string, FunctionResponse>;
export type GeneratedSceneMetadataMap = Record<string, string>;
export interface GetComponentTypeRequest {
  workspaceId: string;
  componentTypeId: string;
}
export interface GetComponentTypeResponse {
  workspaceId: string;
  isSingleton?: boolean;
  componentTypeId: string;
  description?: string;
  propertyDefinitions?: Record<string, PropertyDefinitionResponse>;
  extendsFrom?: Array<string>;
  functions?: Record<string, FunctionResponse>;
  creationDateTime: Date | string;
  updateDateTime: Date | string;
  arn: string;
  isAbstract?: boolean;
  isSchemaInitialized?: boolean;
  status?: Status;
  propertyGroups?: Record<string, PropertyGroupResponse>;
  syncSource?: string;
  componentTypeName?: string;
  compositeComponentTypes?: Record<string, CompositeComponentTypeResponse>;
}
export interface GetEntityRequest {
  workspaceId: string;
  entityId: string;
}
export interface GetEntityResponse {
  entityId: string;
  entityName: string;
  arn: string;
  status: Status;
  workspaceId: string;
  description?: string;
  components?: Record<string, ComponentResponse>;
  parentEntityId: string;
  hasChildEntities: boolean;
  creationDateTime: Date | string;
  updateDateTime: Date | string;
  syncSource?: string;
  areAllComponentsReturned?: boolean;
}
export interface GetMetadataTransferJobRequest {
  metadataTransferJobId: string;
}
export interface GetMetadataTransferJobResponse {
  metadataTransferJobId: string;
  arn: string;
  description?: string;
  sources: Array<SourceConfiguration>;
  destination: DestinationConfiguration;
  metadataTransferJobRole: string;
  reportUrl?: string;
  creationDateTime: Date | string;
  updateDateTime: Date | string;
  status: MetadataTransferJobStatus;
  progress?: MetadataTransferJobProgress;
}
export interface GetPricingPlanRequest {}
export interface GetPricingPlanResponse {
  currentPricingPlan: PricingPlan;
  pendingPricingPlan?: PricingPlan;
}
export interface GetPropertyValueHistoryRequest {
  workspaceId: string;
  entityId?: string;
  componentName?: string;
  componentPath?: string;
  componentTypeId?: string;
  selectedProperties: Array<string>;
  propertyFilters?: Array<PropertyFilter>;
  startDateTime?: Date | string;
  endDateTime?: Date | string;
  interpolation?: InterpolationParameters;
  nextToken?: string;
  maxResults?: number;
  orderByTime?: string;
  startTime?: string;
  endTime?: string;
}
export interface GetPropertyValueHistoryResponse {
  propertyValues: Array<PropertyValueHistory>;
  nextToken?: string;
}
export interface GetPropertyValueRequest {
  componentName?: string;
  componentPath?: string;
  componentTypeId?: string;
  entityId?: string;
  selectedProperties: Array<string>;
  workspaceId: string;
  maxResults?: number;
  nextToken?: string;
  propertyGroupName?: string;
  tabularConditions?: TabularConditions;
}
export interface GetPropertyValueResponse {
  propertyValues?: Record<string, PropertyLatestValue>;
  nextToken?: string;
  tabularPropertyValues?: Array<Array<Record<string, DataValue>>>;
}
export interface GetSceneRequest {
  workspaceId: string;
  sceneId: string;
}
export interface GetSceneResponse {
  workspaceId: string;
  sceneId: string;
  contentLocation: string;
  arn: string;
  creationDateTime: Date | string;
  updateDateTime: Date | string;
  description?: string;
  capabilities?: Array<string>;
  sceneMetadata?: Record<string, string>;
  generatedSceneMetadata?: Record<string, string>;
  error?: SceneError;
}
export interface GetSyncJobRequest {
  syncSource: string;
  workspaceId?: string;
}
export interface GetSyncJobResponse {
  arn: string;
  workspaceId: string;
  syncSource: string;
  syncRole: string;
  status: SyncJobStatus;
  creationDateTime: Date | string;
  updateDateTime: Date | string;
}
export interface GetWorkspaceRequest {
  workspaceId: string;
}
export interface GetWorkspaceResponse {
  workspaceId: string;
  arn: string;
  description?: string;
  linkedServices?: Array<string>;
  s3Location?: string;
  role?: string;
  creationDateTime: Date | string;
  updateDateTime: Date | string;
}
export type GroupType = string;

export type Id = string;

export type IdOrArn = string;

export type Integer = number;

export declare class InternalServerException extends EffectData.TaggedError(
  "InternalServerException",
)<{
  readonly message?: string;
}> {}
export interface InterpolationParameters {
  interpolationType?: string;
  intervalInSeconds?: number;
}
export type InterpolationType = string;

export type IntervalInSeconds = number;

export interface IotSiteWiseSourceConfiguration {
  filters?: Array<IotSiteWiseSourceConfigurationFilter>;
}
export type IotSiteWiseSourceConfigurationFilter =
  | { filterByAssetModel: FilterByAssetModel }
  | { filterByAsset: FilterByAsset };
export type IotSiteWiseSourceConfigurationFilters =
  Array<IotSiteWiseSourceConfigurationFilter>;
export interface IotTwinMakerDestinationConfiguration {
  workspace: string;
}
export interface IotTwinMakerSourceConfiguration {
  workspace: string;
  filters?: Array<IotTwinMakerSourceConfigurationFilter>;
}
export type IotTwinMakerSourceConfigurationFilter =
  | { filterByComponentType: FilterByComponentType }
  | { filterByEntity: FilterByEntity };
export type IotTwinMakerSourceConfigurationFilters =
  Array<IotTwinMakerSourceConfigurationFilter>;
export type LambdaArn = string;

export interface LambdaFunction {
  arn: string;
}
export type LinkedService = string;

export type LinkedServices = Array<string>;
export interface ListComponentsRequest {
  workspaceId: string;
  entityId: string;
  componentPath?: string;
  maxResults?: number;
  nextToken?: string;
}
export interface ListComponentsResponse {
  componentSummaries: Array<ComponentSummary>;
  nextToken?: string;
}
export type ListComponentTypesFilter =
  | { extendsFrom: string }
  | { namespace: string }
  | { isAbstract: boolean };
export type ListComponentTypesFilters = Array<ListComponentTypesFilter>;
export interface ListComponentTypesRequest {
  workspaceId: string;
  filters?: Array<ListComponentTypesFilter>;
  nextToken?: string;
  maxResults?: number;
}
export interface ListComponentTypesResponse {
  workspaceId: string;
  componentTypeSummaries: Array<ComponentTypeSummary>;
  nextToken?: string;
  maxResults?: number;
}
export type ListEntitiesFilter =
  | { parentEntityId: string }
  | { componentTypeId: string }
  | { externalId: string };
export type ListEntitiesFilters = Array<ListEntitiesFilter>;
export interface ListEntitiesRequest {
  workspaceId: string;
  filters?: Array<ListEntitiesFilter>;
  maxResults?: number;
  nextToken?: string;
}
export interface ListEntitiesResponse {
  entitySummaries?: Array<EntitySummary>;
  nextToken?: string;
}
export type ListMetadataTransferJobsFilter =
  | { workspaceId: string }
  | { state: string };
export type ListMetadataTransferJobsFilters =
  Array<ListMetadataTransferJobsFilter>;
export interface ListMetadataTransferJobsRequest {
  sourceType: string;
  destinationType: string;
  filters?: Array<ListMetadataTransferJobsFilter>;
  nextToken?: string;
  maxResults?: number;
}
export interface ListMetadataTransferJobsResponse {
  metadataTransferJobSummaries: Array<MetadataTransferJobSummary>;
  nextToken?: string;
}
export interface ListPropertiesRequest {
  workspaceId: string;
  componentName?: string;
  componentPath?: string;
  entityId: string;
  maxResults?: number;
  nextToken?: string;
}
export interface ListPropertiesResponse {
  propertySummaries: Array<PropertySummary>;
  nextToken?: string;
}
export interface ListScenesRequest {
  workspaceId: string;
  maxResults?: number;
  nextToken?: string;
}
export interface ListScenesResponse {
  sceneSummaries?: Array<SceneSummary>;
  nextToken?: string;
}
export interface ListSyncJobsRequest {
  workspaceId: string;
  maxResults?: number;
  nextToken?: string;
}
export interface ListSyncJobsResponse {
  syncJobSummaries?: Array<SyncJobSummary>;
  nextToken?: string;
}
export interface ListSyncResourcesRequest {
  workspaceId: string;
  syncSource: string;
  filters?: Array<SyncResourceFilter>;
  maxResults?: number;
  nextToken?: string;
}
export interface ListSyncResourcesResponse {
  syncResources?: Array<SyncResourceSummary>;
  nextToken?: string;
}
export interface ListTagsForResourceRequest {
  resourceARN: string;
  maxResults?: number;
  nextToken?: string;
}
export interface ListTagsForResourceResponse {
  tags?: Record<string, string>;
  nextToken?: string;
}
export interface ListWorkspacesRequest {
  maxResults?: number;
  nextToken?: string;
}
export interface ListWorkspacesResponse {
  workspaceSummaries?: Array<WorkspaceSummary>;
  nextToken?: string;
}
export type Long = number;

export type MaxResults = number;

export interface MetadataTransferJobProgress {
  totalCount?: number;
  succeededCount?: number;
  skippedCount?: number;
  failedCount?: number;
}
export type MetadataTransferJobState = string;

export interface MetadataTransferJobStatus {
  state?: string;
  error?: ErrorDetails;
  queuedPosition?: number;
}
export type MetadataTransferJobSummaries = Array<MetadataTransferJobSummary>;
export interface MetadataTransferJobSummary {
  metadataTransferJobId: string;
  arn: string;
  creationDateTime: Date | string;
  updateDateTime: Date | string;
  status: MetadataTransferJobStatus;
  progress?: MetadataTransferJobProgress;
}
export type Name = string;

export type NextToken = string;

export type Order = string;

export interface OrderBy {
  order?: string;
  propertyName: string;
}
export type OrderByList = Array<OrderBy>;
export type OrderByTime = string;

export type ParentEntityId = string;

export interface ParentEntityUpdateRequest {
  updateType: string;
  parentEntityId?: string;
}
export type ParentEntityUpdateType = string;

export type PricingBundles = Array<string>;
export type PricingMode = string;

export interface PricingPlan {
  billableEntityCount?: number;
  bundleInformation?: BundleInformation;
  effectiveDateTime: Date | string;
  pricingMode: string;
  updateDateTime: Date | string;
  updateReason: string;
}
export type PricingTier = string;

export interface PropertyDefinitionRequest {
  dataType?: DataType;
  isRequiredInEntity?: boolean;
  isExternalId?: boolean;
  isStoredExternally?: boolean;
  isTimeSeries?: boolean;
  defaultValue?: DataValue;
  configuration?: Record<string, string>;
  displayName?: string;
}
export interface PropertyDefinitionResponse {
  dataType: DataType;
  isTimeSeries: boolean;
  isRequiredInEntity: boolean;
  isExternalId: boolean;
  isStoredExternally: boolean;
  isImported: boolean;
  isFinal: boolean;
  isInherited: boolean;
  defaultValue?: DataValue;
  configuration?: Record<string, string>;
  displayName?: string;
}
export type PropertyDefinitionsRequest = Record<
  string,
  PropertyDefinitionRequest
>;
export type PropertyDefinitionsResponse = Record<
  string,
  PropertyDefinitionResponse
>;
export type PropertyDisplayName = string;

export interface PropertyFilter {
  propertyName?: string;
  operator?: string;
  value?: DataValue;
}
export type PropertyFilters = Array<PropertyFilter>;
export interface PropertyGroupRequest {
  groupType?: string;
  propertyNames?: Array<string>;
}
export interface PropertyGroupResponse {
  groupType: string;
  propertyNames: Array<string>;
  isInherited: boolean;
}
export type PropertyGroupsRequest = Record<string, PropertyGroupRequest>;
export type PropertyGroupsResponse = Record<string, PropertyGroupResponse>;
export type PropertyGroupUpdateType = string;

export interface PropertyLatestValue {
  propertyReference: EntityPropertyReference;
  propertyValue?: DataValue;
}
export type PropertyLatestValueMap = Record<string, PropertyLatestValue>;
export type PropertyNames = Array<string>;
export interface PropertyRequest {
  definition?: PropertyDefinitionRequest;
  value?: DataValue;
  updateType?: string;
}
export type PropertyRequests = Record<string, PropertyRequest>;
export interface PropertyResponse {
  definition?: PropertyDefinitionResponse;
  value?: DataValue;
  areAllPropertyValuesReturned?: boolean;
}
export type PropertyResponses = Record<string, PropertyResponse>;
export type PropertySummaries = Array<PropertySummary>;
export interface PropertySummary {
  definition?: PropertyDefinitionResponse;
  propertyName: string;
  value?: DataValue;
  areAllPropertyValuesReturned?: boolean;
}
export type PropertyTableValue = Record<string, DataValue>;
export type PropertyUpdateType = string;

export interface PropertyValue {
  timestamp?: Date | string;
  value: DataValue;
  time?: string;
}
export interface PropertyValueEntry {
  entityPropertyReference: EntityPropertyReference;
  propertyValues?: Array<PropertyValue>;
}
export interface PropertyValueHistory {
  entityPropertyReference: EntityPropertyReference;
  values?: Array<PropertyValue>;
}
export type PropertyValueList = Array<PropertyValueHistory>;
export type PropertyValues = Array<PropertyValue>;
export type QueryServiceMaxResults = number;

export type QueryStatement = string;

export declare class QueryTimeoutException extends EffectData.TaggedError(
  "QueryTimeoutException",
)<{
  readonly message?: string;
}> {}
export interface Relationship {
  targetComponentTypeId?: string;
  relationshipType?: string;
}
export interface RelationshipValue {
  targetEntityId?: string;
  targetComponentName?: string;
}
export type RequiredProperties = Array<string>;
export declare class ResourceNotFoundException extends EffectData.TaggedError(
  "ResourceNotFoundException",
)<{
  readonly message?: string;
}> {}
export type RoleArn = string;

export interface Row {
  rowData?: Array<QueryResultValue>;
}
export type RowData = Array<QueryResultValue>;
export type Rows = Array<Row>;
export interface S3DestinationConfiguration {
  location: string;
}
export type S3DestinationLocation = string;

export type S3Location = string;

export interface S3SourceConfiguration {
  location: string;
}
export type S3SourceLocation = string;

export type S3Url = string;

export type SceneCapabilities = Array<string>;
export type SceneCapability = string;

export interface SceneError {
  code?: string;
  message?: string;
}
export type SceneErrorCode = string;

export type SceneMetadataMap = Record<string, string>;
export type SceneMetadataValue = string;

export type SceneSummaries = Array<SceneSummary>;
export interface SceneSummary {
  sceneId: string;
  contentLocation: string;
  arn: string;
  creationDateTime: Date | string;
  updateDateTime: Date | string;
  description?: string;
}
export type Scope = string;

export type SelectedPropertyList = Array<string>;
export declare class ServiceQuotaExceededException extends EffectData.TaggedError(
  "ServiceQuotaExceededException",
)<{
  readonly message?: string;
}> {}
export type SiteWiseExternalId = string;

export interface SourceConfiguration {
  type: string;
  s3Configuration?: S3SourceConfiguration;
  iotSiteWiseConfiguration?: IotSiteWiseSourceConfiguration;
  iotTwinMakerConfiguration?: IotTwinMakerSourceConfiguration;
}
export type SourceConfigurations = Array<SourceConfiguration>;
export type SourceType = string;

export type State = string;

export interface Status {
  state?: string;
  error?: ErrorDetails;
}
export type SyncJobState = string;

export interface SyncJobStatus {
  state?: string;
  error?: ErrorDetails;
}
export type SyncJobSummaries = Array<SyncJobSummary>;
export interface SyncJobSummary {
  arn?: string;
  workspaceId?: string;
  syncSource?: string;
  status?: SyncJobStatus;
  creationDateTime?: Date | string;
  updateDateTime?: Date | string;
}
export type SyncResourceFilter =
  | { state: string }
  | { resourceType: string }
  | { resourceId: string }
  | { externalId: string };
export type SyncResourceFilters = Array<SyncResourceFilter>;
export type SyncResourceState = string;

export interface SyncResourceStatus {
  state?: string;
  error?: ErrorDetails;
}
export type SyncResourceSummaries = Array<SyncResourceSummary>;
export interface SyncResourceSummary {
  resourceType?: string;
  externalId?: string;
  resourceId?: string;
  status?: SyncResourceStatus;
  updateDateTime?: Date | string;
}
export type SyncResourceType = string;

export type SyncSource = string;

export interface TabularConditions {
  orderBy?: Array<OrderBy>;
  propertyFilters?: Array<PropertyFilter>;
}
export type TabularPropertyValue = Array<Record<string, DataValue>>;
export type TabularPropertyValues = Array<Array<Record<string, DataValue>>>;
export type TagKey = string;

export type TagKeyList = Array<string>;
export type TagMap = Record<string, string>;
export interface TagResourceRequest {
  resourceARN: string;
  tags: Record<string, string>;
}
export interface TagResourceResponse {}
export type TagValue = string;

export declare class ThrottlingException extends EffectData.TaggedError(
  "ThrottlingException",
)<{
  readonly message?: string;
}> {}
export type Time = string;

export type Timestamp = Date | string;

export declare class TooManyTagsException extends EffectData.TaggedError(
  "TooManyTagsException",
)<{
  readonly message?: string;
}> {}
export type TwinMakerArn = string;

export type Type = string;

export interface UntagResourceRequest {
  resourceARN: string;
  tagKeys: Array<string>;
}
export interface UntagResourceResponse {}
export interface UpdateComponentTypeRequest {
  workspaceId: string;
  isSingleton?: boolean;
  componentTypeId: string;
  description?: string;
  propertyDefinitions?: Record<string, PropertyDefinitionRequest>;
  extendsFrom?: Array<string>;
  functions?: Record<string, FunctionRequest>;
  propertyGroups?: Record<string, PropertyGroupRequest>;
  componentTypeName?: string;
  compositeComponentTypes?: Record<string, CompositeComponentTypeRequest>;
}
export interface UpdateComponentTypeResponse {
  workspaceId: string;
  arn: string;
  componentTypeId: string;
  state: string;
}
export interface UpdateEntityRequest {
  workspaceId: string;
  entityId: string;
  entityName?: string;
  description?: string;
  componentUpdates?: Record<string, ComponentUpdateRequest>;
  compositeComponentUpdates?: Record<string, CompositeComponentUpdateRequest>;
  parentEntityUpdate?: ParentEntityUpdateRequest;
}
export interface UpdateEntityResponse {
  updateDateTime: Date | string;
  state: string;
}
export interface UpdatePricingPlanRequest {
  pricingMode: string;
  bundleNames?: Array<string>;
}
export interface UpdatePricingPlanResponse {
  currentPricingPlan: PricingPlan;
  pendingPricingPlan?: PricingPlan;
}
export type UpdateReason = string;

export interface UpdateSceneRequest {
  workspaceId: string;
  sceneId: string;
  contentLocation?: string;
  description?: string;
  capabilities?: Array<string>;
  sceneMetadata?: Record<string, string>;
}
export interface UpdateSceneResponse {
  updateDateTime: Date | string;
}
export interface UpdateWorkspaceRequest {
  workspaceId: string;
  description?: string;
  role?: string;
  s3Location?: string;
}
export interface UpdateWorkspaceResponse {
  updateDateTime: Date | string;
}
export type Uuid = string;

export declare class ValidationException extends EffectData.TaggedError(
  "ValidationException",
)<{
  readonly message?: string;
}> {}
export type Value = string;

export type Values = Array<PropertyValue>;
export type WorkspaceDeleteMessage = string;

export type WorkspaceSummaries = Array<WorkspaceSummary>;
export interface WorkspaceSummary {
  workspaceId: string;
  arn: string;
  description?: string;
  linkedServices?: Array<string>;
  creationDateTime: Date | string;
  updateDateTime: Date | string;
}
export declare namespace BatchPutPropertyValues {
  export type Input = BatchPutPropertyValuesRequest;
  export type Output = BatchPutPropertyValuesResponse;
  export type Error =
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace CancelMetadataTransferJob {
  export type Input = CancelMetadataTransferJobRequest;
  export type Output = CancelMetadataTransferJobResponse;
  export type Error =
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace CreateComponentType {
  export type Input = CreateComponentTypeRequest;
  export type Output = CreateComponentTypeResponse;
  export type Error =
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ServiceQuotaExceededException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace CreateEntity {
  export type Input = CreateEntityRequest;
  export type Output = CreateEntityResponse;
  export type Error =
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ServiceQuotaExceededException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace CreateMetadataTransferJob {
  export type Input = CreateMetadataTransferJobRequest;
  export type Output = CreateMetadataTransferJobResponse;
  export type Error =
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ServiceQuotaExceededException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace CreateScene {
  export type Input = CreateSceneRequest;
  export type Output = CreateSceneResponse;
  export type Error =
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ServiceQuotaExceededException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace CreateSyncJob {
  export type Input = CreateSyncJobRequest;
  export type Output = CreateSyncJobResponse;
  export type Error =
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ServiceQuotaExceededException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace CreateWorkspace {
  export type Input = CreateWorkspaceRequest;
  export type Output = CreateWorkspaceResponse;
  export type Error =
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ServiceQuotaExceededException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace DeleteComponentType {
  export type Input = DeleteComponentTypeRequest;
  export type Output = DeleteComponentTypeResponse;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace DeleteEntity {
  export type Input = DeleteEntityRequest;
  export type Output = DeleteEntityResponse;
  export type Error =
    | InternalServerException
    | ResourceNotFoundException
    | ServiceQuotaExceededException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace DeleteScene {
  export type Input = DeleteSceneRequest;
  export type Output = DeleteSceneResponse;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace DeleteSyncJob {
  export type Input = DeleteSyncJobRequest;
  export type Output = DeleteSyncJobResponse;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ServiceQuotaExceededException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace DeleteWorkspace {
  export type Input = DeleteWorkspaceRequest;
  export type Output = DeleteWorkspaceResponse;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace ExecuteQuery {
  export type Input = ExecuteQueryRequest;
  export type Output = ExecuteQueryResponse;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | QueryTimeoutException
    | ServiceQuotaExceededException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace GetComponentType {
  export type Input = GetComponentTypeRequest;
  export type Output = GetComponentTypeResponse;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace GetEntity {
  export type Input = GetEntityRequest;
  export type Output = GetEntityResponse;
  export type Error =
    | InternalServerException
    | ResourceNotFoundException
    | ServiceQuotaExceededException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace GetMetadataTransferJob {
  export type Input = GetMetadataTransferJobRequest;
  export type Output = GetMetadataTransferJobResponse;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace GetPricingPlan {
  export type Input = GetPricingPlanRequest;
  export type Output = GetPricingPlanResponse;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace GetPropertyValue {
  export type Input = GetPropertyValueRequest;
  export type Output = GetPropertyValueResponse;
  export type Error =
    | AccessDeniedException
    | ConnectorFailureException
    | ConnectorTimeoutException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace GetPropertyValueHistory {
  export type Input = GetPropertyValueHistoryRequest;
  export type Output = GetPropertyValueHistoryResponse;
  export type Error =
    | AccessDeniedException
    | ConnectorFailureException
    | ConnectorTimeoutException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace GetScene {
  export type Input = GetSceneRequest;
  export type Output = GetSceneResponse;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace GetSyncJob {
  export type Input = GetSyncJobRequest;
  export type Output = GetSyncJobResponse;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ServiceQuotaExceededException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace GetWorkspace {
  export type Input = GetWorkspaceRequest;
  export type Output = GetWorkspaceResponse;
  export type Error =
    | InternalServerException
    | ResourceNotFoundException
    | ServiceQuotaExceededException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace ListComponents {
  export type Input = ListComponentsRequest;
  export type Output = ListComponentsResponse;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace ListComponentTypes {
  export type Input = ListComponentTypesRequest;
  export type Output = ListComponentTypesResponse;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace ListEntities {
  export type Input = ListEntitiesRequest;
  export type Output = ListEntitiesResponse;
  export type Error =
    | InternalServerException
    | ServiceQuotaExceededException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace ListMetadataTransferJobs {
  export type Input = ListMetadataTransferJobsRequest;
  export type Output = ListMetadataTransferJobsResponse;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace ListProperties {
  export type Input = ListPropertiesRequest;
  export type Output = ListPropertiesResponse;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace ListScenes {
  export type Input = ListScenesRequest;
  export type Output = ListScenesResponse;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace ListSyncJobs {
  export type Input = ListSyncJobsRequest;
  export type Output = ListSyncJobsResponse;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ServiceQuotaExceededException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace ListSyncResources {
  export type Input = ListSyncResourcesRequest;
  export type Output = ListSyncResourcesResponse;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ServiceQuotaExceededException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace ListTagsForResource {
  export type Input = ListTagsForResourceRequest;
  export type Output = ListTagsForResourceResponse;
  export type Error =
    | AccessDeniedException
    | ResourceNotFoundException
    | CommonAwsError;
}

export declare namespace ListWorkspaces {
  export type Input = ListWorkspacesRequest;
  export type Output = ListWorkspacesResponse;
  export type Error =
    | InternalServerException
    | ServiceQuotaExceededException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace TagResource {
  export type Input = TagResourceRequest;
  export type Output = TagResourceResponse;
  export type Error =
    | AccessDeniedException
    | ResourceNotFoundException
    | TooManyTagsException
    | CommonAwsError;
}

export declare namespace UntagResource {
  export type Input = UntagResourceRequest;
  export type Output = UntagResourceResponse;
  export type Error =
    | AccessDeniedException
    | ResourceNotFoundException
    | CommonAwsError;
}

export declare namespace UpdateComponentType {
  export type Input = UpdateComponentTypeRequest;
  export type Output = UpdateComponentTypeResponse;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ServiceQuotaExceededException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace UpdateEntity {
  export type Input = UpdateEntityRequest;
  export type Output = UpdateEntityResponse;
  export type Error =
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ServiceQuotaExceededException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace UpdatePricingPlan {
  export type Input = UpdatePricingPlanRequest;
  export type Output = UpdatePricingPlanResponse;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace UpdateScene {
  export type Input = UpdateSceneRequest;
  export type Output = UpdateSceneResponse;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace UpdateWorkspace {
  export type Input = UpdateWorkspaceRequest;
  export type Output = UpdateWorkspaceResponse;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ServiceQuotaExceededException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}
