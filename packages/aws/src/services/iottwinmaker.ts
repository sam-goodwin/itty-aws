import * as API from "@distilled.cloud/core/api";
import * as __L from "@distilled.cloud/core/chunks";
import * as S from "@distilled.cloud/core/schema";
import * as HttpClient from "effect/http/HttpClient";
import * as C from "../category.ts";
import type { Credentials } from "../credentials.ts";
import type { CommonErrors } from "../errors.ts";
import { AwsProtocol } from "../protocol.ts";
import { Retry } from "../retry.ts";
import * as T from "../traits.ts";
// Schema table, filled on first reach (see __S at the end).
const __s: any[] = [];
const svc = /*@__PURE__*/ T.AwsApiService({
  sdkId: "IoTTwinMaker",
  serviceShapeName: "AWSIoTTwinMaker",
});
const auth = /*@__PURE__*/ T.AwsAuthSigv4({ name: "iottwinmaker" });
const ver = /*@__PURE__*/ T.ServiceVersion("2021-11-29");
const proto = /*@__PURE__*/ T.AwsProtocolsRestJson1();
const rules = /*@__PURE__*/ T.EndpointResolver((p, _) => {
  const { Region, UseDualStack = false, UseFIPS = false, Endpoint } = p;
  const e = (u: unknown, p = {}, h = {}): T.EndpointResolverResult => ({
    type: "endpoint" as const,
    endpoint: { url: u as string, properties: p, headers: h },
  });
  const err = (m: unknown): T.EndpointResolverResult => ({
    type: "error" as const,
    message: m as string,
  });
  if (Endpoint != null) {
    if (UseFIPS === true) {
      return err("Invalid Configuration: FIPS and custom endpoint are not supported");
    }
    if (UseDualStack === true) {
      return err("Invalid Configuration: Dualstack and custom endpoint are not supported");
    }
    return e(Endpoint);
  }
  if (Region != null) {
    {
      const PartitionResult = _.partition(Region);
      if (PartitionResult != null && PartitionResult !== false) {
        if (UseFIPS === true && UseDualStack === true) {
          if (
            true === _.getAttr(PartitionResult, "supportsFIPS") &&
            true === _.getAttr(PartitionResult, "supportsDualStack")
          ) {
            return e(
              `https://iottwinmaker-fips.${Region}.${_.getAttr(PartitionResult, "dualStackDnsSuffix")}`,
            );
          }
          return err(
            "FIPS and DualStack are enabled, but this partition does not support one or both",
          );
        }
        if (UseFIPS === true) {
          if (_.getAttr(PartitionResult, "supportsFIPS") === true) {
            return e(
              `https://iottwinmaker-fips.${Region}.${_.getAttr(PartitionResult, "dnsSuffix")}`,
            );
          }
          return err("FIPS is enabled but this partition does not support FIPS");
        }
        if (UseDualStack === true) {
          if (true === _.getAttr(PartitionResult, "supportsDualStack")) {
            return e(
              `https://iottwinmaker.${Region}.${_.getAttr(PartitionResult, "dualStackDnsSuffix")}`,
            );
          }
          return err("DualStack is enabled but this partition does not support DualStack");
        }
        return e(`https://iottwinmaker.${Region}.${_.getAttr(PartitionResult, "dnsSuffix")}`);
      }
    }
  }
  return err("Invalid Configuration: Missing Region");
});

export class AccessDeniedException
  extends /*@__PURE__*/ S.TaggedError<AccessDeniedException>()(
    "AccessDeniedException",
    { message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()) },
    /*@__PURE__*/ T.HttpError(403),
  ).pipe(C.withAuthError) {}
export class ConflictException
  extends /*@__PURE__*/ S.TaggedError<ConflictException>()(
    "ConflictException",
    { message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()) },
    /*@__PURE__*/ T.HttpError(409),
  ).pipe(C.withConflictError) {}
export class ConnectorFailureException
  extends /*@__PURE__*/ S.TaggedError<ConnectorFailureException>()(
    "ConnectorFailureException",
    { message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()) },
    /*@__PURE__*/ T.HttpError(424),
  ) {}
export class ConnectorTimeoutException
  extends /*@__PURE__*/ S.TaggedError<ConnectorTimeoutException>()(
    "ConnectorTimeoutException",
    { message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()) },
    /*@__PURE__*/ T.HttpError(424),
  ) {}
export class InternalServerException
  extends /*@__PURE__*/ S.TaggedError<InternalServerException>()(
    "InternalServerException",
    { message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()) },
    /*@__PURE__*/ T.HttpError(500),
  ).pipe(C.withServerError) {}
export class QueryTimeoutException
  extends /*@__PURE__*/ S.TaggedError<QueryTimeoutException>()(
    "QueryTimeoutException",
    { message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()) },
    /*@__PURE__*/ T.all(/*@__PURE__*/ T.HttpError(400), /*@__PURE__*/ T.Retryable()),
  ).pipe(C.withBadRequestError, C.withRetryableError) {}
export class ResourceNotFoundException
  extends /*@__PURE__*/ S.TaggedError<ResourceNotFoundException>()(
    "ResourceNotFoundException",
    { message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()) },
    /*@__PURE__*/ T.HttpError(404),
  ).pipe(C.withBadRequestError) {}
export class ServiceQuotaExceededException
  extends /*@__PURE__*/ S.TaggedError<ServiceQuotaExceededException>()(
    "ServiceQuotaExceededException",
    { message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()) },
    /*@__PURE__*/ T.HttpError(402),
  ).pipe(C.withQuotaError) {}
export class ThrottlingException
  extends /*@__PURE__*/ S.TaggedError<ThrottlingException>()(
    "ThrottlingException",
    { message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()) },
    /*@__PURE__*/ T.HttpError(429),
  ).pipe(C.withThrottlingError) {}
export class TooManyTagsException
  extends /*@__PURE__*/ S.TaggedError<TooManyTagsException>()(
    "TooManyTagsException",
    { message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()) },
    /*@__PURE__*/ T.HttpError(400),
  ).pipe(C.withBadRequestError) {}
export class ValidationException
  extends /*@__PURE__*/ S.TaggedError<ValidationException>()(
    "ValidationException",
    { message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()) },
    /*@__PURE__*/ T.HttpError(400),
  ).pipe(C.withBadRequestError) {}
export type Id = string;
export type Name = string;
export type ComponentPath = string;
export type ExternalIdProperty = { [key: string]: string | undefined };
export type EntityId = string;
export interface EntityPropertyReference {
  componentName?: string;
  componentPath?: string;
  externalIdProperty?: { [key: string]: string | undefined };
  entityId?: string;
  propertyName: string;
}
export type DataValueList = DataValue[];
export type DataValueMap = { [key: string]: DataValue | undefined };
export interface RelationshipValue {
  targetEntityId?: string;
  targetComponentName?: string;
}
export type Expression = string;
export interface DataValue {
  booleanValue?: boolean;
  doubleValue?: number;
  integerValue?: number;
  longValue?: number;
  stringValue?: string;
  listValue?: DataValue[];
  mapValue?: { [key: string]: DataValue | undefined };
  relationshipValue?: RelationshipValue;
  expression?: string;
}
export interface PropertyValue {
  timestamp?: Date;
  value: DataValue;
  time?: string;
}
export type PropertyValues = PropertyValue[];
export interface PropertyValueEntry {
  entityPropertyReference: EntityPropertyReference;
  propertyValues?: PropertyValue[];
}
export type Entries = PropertyValueEntry[];
export interface BatchPutPropertyValuesRequest {
  workspaceId: string;
  entries: PropertyValueEntry[];
}
export interface BatchPutPropertyError {
  errorCode: string;
  errorMessage: string;
  entry: PropertyValueEntry;
}
export type Errors = BatchPutPropertyError[];
export interface BatchPutPropertyErrorEntry {
  errors: BatchPutPropertyError[];
}
export type ErrorEntries = BatchPutPropertyErrorEntry[];
export interface BatchPutPropertyValuesResponse {
  errorEntries: BatchPutPropertyErrorEntry[];
}
export interface CancelMetadataTransferJobRequest {
  metadataTransferJobId: string;
}
export type TwinMakerArn = string;
export type MetadataTransferJobState = string;
export type ErrorCode = string;
export type ErrorMessage = string;
export interface ErrorDetails {
  code?: string;
  message?: string;
}
export interface MetadataTransferJobStatus {
  state?: string;
  error?: ErrorDetails;
  queuedPosition?: number;
}
export interface MetadataTransferJobProgress {
  totalCount?: number;
  succeededCount?: number;
  skippedCount?: number;
  failedCount?: number;
}
export interface CancelMetadataTransferJobResponse {
  metadataTransferJobId: string;
  arn: string;
  updateDateTime: Date;
  status: MetadataTransferJobStatus;
  progress?: MetadataTransferJobProgress;
}
export type ComponentTypeId = string;
export type Description = string;
export type Type = string;
export interface Relationship {
  targetComponentTypeId?: string;
  relationshipType?: string;
}
export interface DataType {
  type: string;
  nestedType?: DataType;
  allowedValues?: DataValue[];
  unitOfMeasure?: string;
  relationship?: Relationship;
}
export type Value = string;
export type Configuration = { [key: string]: string | undefined };
export type PropertyDisplayName = string;
export interface PropertyDefinitionRequest {
  dataType?: DataType;
  isRequiredInEntity?: boolean;
  isExternalId?: boolean;
  isStoredExternally?: boolean;
  isTimeSeries?: boolean;
  defaultValue?: DataValue;
  configuration?: { [key: string]: string | undefined };
  displayName?: string;
}
export type PropertyDefinitionsRequest = { [key: string]: PropertyDefinitionRequest | undefined };
export type ExtendsFrom = string[];
export type RequiredProperties = string[];
export type Scope = string;
export type LambdaArn = string;
export interface LambdaFunction {
  arn: string;
}
export interface DataConnector {
  lambda?: LambdaFunction;
  isNative?: boolean;
}
export interface FunctionRequest {
  requiredProperties?: string[];
  scope?: string;
  implementedBy?: DataConnector;
}
export type FunctionsRequest = { [key: string]: FunctionRequest | undefined };
export type TagKey = string;
export type TagValue = string;
export type TagMap = { [key: string]: string | undefined };
export type GroupType = string;
export type PropertyNames = string[];
export interface PropertyGroupRequest {
  groupType?: string;
  propertyNames?: string[];
}
export type PropertyGroupsRequest = { [key: string]: PropertyGroupRequest | undefined };
export type ComponentTypeName = string;
export interface CompositeComponentTypeRequest {
  componentTypeId?: string;
}
export type CompositeComponentTypesRequest = {
  [key: string]: CompositeComponentTypeRequest | undefined;
};
export interface CreateComponentTypeRequest {
  workspaceId: string;
  isSingleton?: boolean;
  componentTypeId: string;
  description?: string;
  propertyDefinitions?: { [key: string]: PropertyDefinitionRequest | undefined };
  extendsFrom?: string[];
  functions?: { [key: string]: FunctionRequest | undefined };
  tags?: { [key: string]: string | undefined };
  propertyGroups?: { [key: string]: PropertyGroupRequest | undefined };
  componentTypeName?: string;
  compositeComponentTypes?: { [key: string]: CompositeComponentTypeRequest | undefined };
}
export type State = string;
export interface CreateComponentTypeResponse {
  arn: string;
  creationDateTime: Date;
  state: string;
}
export type EntityName = string;
export type PropertyUpdateType = string;
export interface PropertyRequest {
  definition?: PropertyDefinitionRequest;
  value?: DataValue;
  updateType?: string;
}
export type PropertyRequests = { [key: string]: PropertyRequest | undefined };
export type PropertyGroupUpdateType = string;
export interface ComponentPropertyGroupRequest {
  groupType?: string;
  propertyNames?: string[];
  updateType?: string;
}
export type ComponentPropertyGroupRequests = {
  [key: string]: ComponentPropertyGroupRequest | undefined;
};
export interface ComponentRequest {
  description?: string;
  componentTypeId?: string;
  properties?: { [key: string]: PropertyRequest | undefined };
  propertyGroups?: { [key: string]: ComponentPropertyGroupRequest | undefined };
}
export type ComponentsMapRequest = { [key: string]: ComponentRequest | undefined };
export interface CompositeComponentRequest {
  description?: string;
  properties?: { [key: string]: PropertyRequest | undefined };
  propertyGroups?: { [key: string]: ComponentPropertyGroupRequest | undefined };
}
export type CompositeComponentsMapRequest = {
  [key: string]: CompositeComponentRequest | undefined;
};
export type ParentEntityId = string;
export interface CreateEntityRequest {
  workspaceId: string;
  entityId?: string;
  entityName: string;
  description?: string;
  components?: { [key: string]: ComponentRequest | undefined };
  compositeComponents?: { [key: string]: CompositeComponentRequest | undefined };
  parentEntityId?: string;
  tags?: { [key: string]: string | undefined };
}
export interface CreateEntityResponse {
  entityId: string;
  arn: string;
  creationDateTime: Date;
  state: string;
}
export type SourceType = string;
export type S3SourceLocation = string;
export interface S3SourceConfiguration {
  location: string;
}
export type Uuid = string;
export type SiteWiseExternalId = string;
export interface FilterByAssetModel {
  assetModelId?: string;
  assetModelExternalId?: string;
  includeOffspring?: boolean;
  includeAssets?: boolean;
}
export interface FilterByAsset {
  assetId?: string;
  assetExternalId?: string;
  includeOffspring?: boolean;
  includeAssetModel?: boolean;
}
export type IotSiteWiseSourceConfigurationFilter =
  | { filterByAssetModel: FilterByAssetModel; filterByAsset?: never }
  | { filterByAssetModel?: never; filterByAsset: FilterByAsset };
export type IotSiteWiseSourceConfigurationFilters = IotSiteWiseSourceConfigurationFilter[];
export interface IotSiteWiseSourceConfiguration {
  filters?: IotSiteWiseSourceConfigurationFilter[];
}
export interface FilterByComponentType {
  componentTypeId: string;
}
export interface FilterByEntity {
  entityId: string;
}
export type IotTwinMakerSourceConfigurationFilter =
  | { filterByComponentType: FilterByComponentType; filterByEntity?: never }
  | { filterByComponentType?: never; filterByEntity: FilterByEntity };
export type IotTwinMakerSourceConfigurationFilters = IotTwinMakerSourceConfigurationFilter[];
export interface IotTwinMakerSourceConfiguration {
  workspace: string;
  filters?: IotTwinMakerSourceConfigurationFilter[];
}
export interface SourceConfiguration {
  type: string;
  s3Configuration?: S3SourceConfiguration;
  iotSiteWiseConfiguration?: IotSiteWiseSourceConfiguration;
  iotTwinMakerConfiguration?: IotTwinMakerSourceConfiguration;
}
export type SourceConfigurations = SourceConfiguration[];
export type DestinationType = string;
export type S3DestinationLocation = string;
export interface S3DestinationConfiguration {
  location: string;
}
export interface IotTwinMakerDestinationConfiguration {
  workspace: string;
}
export interface DestinationConfiguration {
  type: string;
  s3Configuration?: S3DestinationConfiguration;
  iotTwinMakerConfiguration?: IotTwinMakerDestinationConfiguration;
}
export interface CreateMetadataTransferJobRequest {
  metadataTransferJobId?: string;
  description?: string;
  sources: SourceConfiguration[];
  destination: DestinationConfiguration;
}
export interface CreateMetadataTransferJobResponse {
  metadataTransferJobId: string;
  arn: string;
  creationDateTime: Date;
  status: MetadataTransferJobStatus;
}
export type S3Url = string;
export type SceneCapability = string;
export type SceneCapabilities = string[];
export type SceneMetadataValue = string;
export type SceneMetadataMap = { [key: string]: string | undefined };
export interface CreateSceneRequest {
  workspaceId: string;
  sceneId: string;
  contentLocation: string;
  description?: string;
  capabilities?: string[];
  tags?: { [key: string]: string | undefined };
  sceneMetadata?: { [key: string]: string | undefined };
}
export interface CreateSceneResponse {
  arn: string;
  creationDateTime: Date;
}
export type SyncSource = string;
export type RoleArn = string;
export interface CreateSyncJobRequest {
  workspaceId: string;
  syncSource: string;
  syncRole: string;
  tags?: { [key: string]: string | undefined };
}
export type SyncJobState = string;
export interface CreateSyncJobResponse {
  arn: string;
  creationDateTime: Date;
  state: string;
}
export type S3Location = string;
export interface CreateWorkspaceRequest {
  workspaceId: string;
  description?: string;
  s3Location?: string;
  role?: string;
  tags?: { [key: string]: string | undefined };
}
export interface CreateWorkspaceResponse {
  arn: string;
  creationDateTime: Date;
}
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
export type WorkspaceDeleteMessage = string;
export interface DeleteWorkspaceResponse {
  message?: string;
}
export type QueryStatement = string;
export type QueryServiceMaxResults = number;
export type NextToken = string;
export interface ExecuteQueryRequest {
  workspaceId: string;
  queryStatement: string;
  maxResults?: number;
  nextToken?: string;
}
export type ColumnName = string;
export type ColumnType = string;
export interface ColumnDescription {
  name?: string;
  type?: string;
}
export type ColumnDescriptions = ColumnDescription[];
export type QueryResultValue = unknown;
export type RowData = any[];
export interface Row {
  rowData?: any[];
}
export type Rows = Row[];
export interface ExecuteQueryResponse {
  columnDescriptions?: ColumnDescription[];
  rows?: Row[];
  nextToken?: string;
}
export interface GetComponentTypeRequest {
  workspaceId: string;
  componentTypeId: string;
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
  configuration?: { [key: string]: string | undefined };
  displayName?: string;
}
export type PropertyDefinitionsResponse = { [key: string]: PropertyDefinitionResponse | undefined };
export interface FunctionResponse {
  requiredProperties?: string[];
  scope?: string;
  implementedBy?: DataConnector;
  isInherited?: boolean;
}
export type FunctionsResponse = { [key: string]: FunctionResponse | undefined };
export interface Status {
  state?: string;
  error?: ErrorDetails;
}
export interface PropertyGroupResponse {
  groupType: string;
  propertyNames: string[];
  isInherited: boolean;
}
export type PropertyGroupsResponse = { [key: string]: PropertyGroupResponse | undefined };
export interface CompositeComponentTypeResponse {
  componentTypeId?: string;
  isInherited?: boolean;
}
export type CompositeComponentTypesResponse = {
  [key: string]: CompositeComponentTypeResponse | undefined;
};
export interface GetComponentTypeResponse {
  workspaceId: string;
  isSingleton?: boolean;
  componentTypeId: string;
  description?: string;
  propertyDefinitions?: { [key: string]: PropertyDefinitionResponse | undefined };
  extendsFrom?: string[];
  functions?: { [key: string]: FunctionResponse | undefined };
  creationDateTime: Date;
  updateDateTime: Date;
  arn: string;
  isAbstract?: boolean;
  isSchemaInitialized?: boolean;
  status?: Status;
  propertyGroups?: { [key: string]: PropertyGroupResponse | undefined };
  syncSource?: string;
  componentTypeName?: string;
  compositeComponentTypes?: { [key: string]: CompositeComponentTypeResponse | undefined };
}
export interface GetEntityRequest {
  workspaceId: string;
  entityId: string;
}
export interface PropertyResponse {
  definition?: PropertyDefinitionResponse;
  value?: DataValue;
  areAllPropertyValuesReturned?: boolean;
}
export type PropertyResponses = { [key: string]: PropertyResponse | undefined };
export interface ComponentPropertyGroupResponse {
  groupType: string;
  propertyNames: string[];
  isInherited: boolean;
}
export type ComponentPropertyGroupResponses = {
  [key: string]: ComponentPropertyGroupResponse | undefined;
};
export interface ComponentSummary {
  componentName: string;
  componentTypeId: string;
  definedIn?: string;
  description?: string;
  propertyGroups?: { [key: string]: ComponentPropertyGroupResponse | undefined };
  status: Status;
  syncSource?: string;
  componentPath?: string;
}
export type CompositeComponentResponse = { [key: string]: ComponentSummary | undefined };
export interface ComponentResponse {
  componentName?: string;
  description?: string;
  componentTypeId?: string;
  status?: Status;
  definedIn?: string;
  properties?: { [key: string]: PropertyResponse | undefined };
  propertyGroups?: { [key: string]: ComponentPropertyGroupResponse | undefined };
  syncSource?: string;
  areAllPropertiesReturned?: boolean;
  compositeComponents?: { [key: string]: ComponentSummary | undefined };
  areAllCompositeComponentsReturned?: boolean;
}
export type ComponentsMap = { [key: string]: ComponentResponse | undefined };
export interface GetEntityResponse {
  entityId: string;
  entityName: string;
  arn: string;
  status: Status;
  workspaceId: string;
  description?: string;
  components?: { [key: string]: ComponentResponse | undefined };
  parentEntityId: string;
  hasChildEntities: boolean;
  creationDateTime: Date;
  updateDateTime: Date;
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
  sources: SourceConfiguration[];
  destination: DestinationConfiguration;
  metadataTransferJobRole: string;
  reportUrl?: string;
  creationDateTime: Date;
  updateDateTime: Date;
  status: MetadataTransferJobStatus;
  progress?: MetadataTransferJobProgress;
}
export interface GetPricingPlanRequest {}
export type BundleName = string;
export type PricingBundles = string[];
export type PricingTier = string;
export interface BundleInformation {
  bundleNames: string[];
  pricingTier?: string;
}
export type PricingMode = string;
export type UpdateReason = string;
export interface PricingPlan {
  billableEntityCount?: number;
  bundleInformation?: BundleInformation;
  effectiveDateTime: Date;
  pricingMode: string;
  updateDateTime: Date;
  updateReason: string;
}
export interface GetPricingPlanResponse {
  currentPricingPlan: PricingPlan;
  pendingPricingPlan?: PricingPlan;
}
export type SelectedPropertyList = string[];
export type MaxResults = number;
export type Order = string;
export interface OrderBy {
  order?: string;
  propertyName: string;
}
export type OrderByList = OrderBy[];
export interface PropertyFilter {
  propertyName?: string;
  operator?: string;
  value?: DataValue;
}
export type PropertyFilters = PropertyFilter[];
export interface TabularConditions {
  orderBy?: OrderBy[];
  propertyFilters?: PropertyFilter[];
}
export interface GetPropertyValueRequest {
  componentName?: string;
  componentPath?: string;
  componentTypeId?: string;
  entityId?: string;
  selectedProperties: string[];
  workspaceId: string;
  maxResults?: number;
  nextToken?: string;
  propertyGroupName?: string;
  tabularConditions?: TabularConditions;
}
export interface PropertyLatestValue {
  propertyReference: EntityPropertyReference;
  propertyValue?: DataValue;
}
export type PropertyLatestValueMap = { [key: string]: PropertyLatestValue | undefined };
export type PropertyTableValue = { [key: string]: DataValue | undefined };
export type TabularPropertyValue = { [key: string]: DataValue | undefined }[];
export type TabularPropertyValues = { [key: string]: DataValue | undefined }[][];
export interface GetPropertyValueResponse {
  propertyValues?: { [key: string]: PropertyLatestValue | undefined };
  nextToken?: string;
  tabularPropertyValues?: { [key: string]: DataValue | undefined }[][];
}
export type InterpolationType = string;
export type IntervalInSeconds = number;
export interface InterpolationParameters {
  interpolationType?: string;
  intervalInSeconds?: number;
}
export type OrderByTime = string;
export interface GetPropertyValueHistoryRequest {
  workspaceId: string;
  entityId?: string;
  componentName?: string;
  componentPath?: string;
  componentTypeId?: string;
  selectedProperties: string[];
  propertyFilters?: PropertyFilter[];
  startDateTime?: Date;
  endDateTime?: Date;
  interpolation?: InterpolationParameters;
  nextToken?: string;
  maxResults?: number;
  orderByTime?: string;
  startTime?: string;
  endTime?: string;
}
export type Values = PropertyValue[];
export interface PropertyValueHistory {
  entityPropertyReference: EntityPropertyReference;
  values?: PropertyValue[];
}
export type PropertyValueList = PropertyValueHistory[];
export interface GetPropertyValueHistoryResponse {
  propertyValues: PropertyValueHistory[];
  nextToken?: string;
}
export interface GetSceneRequest {
  workspaceId: string;
  sceneId: string;
}
export type GeneratedSceneMetadataMap = { [key: string]: string | undefined };
export type SceneErrorCode = string;
export interface SceneError {
  code?: string;
  message?: string;
}
export interface GetSceneResponse {
  workspaceId: string;
  sceneId: string;
  contentLocation: string;
  arn: string;
  creationDateTime: Date;
  updateDateTime: Date;
  description?: string;
  capabilities?: string[];
  sceneMetadata?: { [key: string]: string | undefined };
  generatedSceneMetadata?: { [key: string]: string | undefined };
  error?: SceneError;
}
export interface GetSyncJobRequest {
  syncSource: string;
  workspaceId?: string;
}
export interface SyncJobStatus {
  state?: string;
  error?: ErrorDetails;
}
export interface GetSyncJobResponse {
  arn: string;
  workspaceId: string;
  syncSource: string;
  syncRole: string;
  status: SyncJobStatus;
  creationDateTime: Date;
  updateDateTime: Date;
}
export type IdOrArn = string;
export interface GetWorkspaceRequest {
  workspaceId: string;
}
export type LinkedService = string;
export type LinkedServices = string[];
export interface GetWorkspaceResponse {
  workspaceId: string;
  arn: string;
  description?: string;
  linkedServices?: string[];
  s3Location?: string;
  role?: string;
  creationDateTime: Date;
  updateDateTime: Date;
}
export interface ListComponentsRequest {
  workspaceId: string;
  entityId: string;
  componentPath?: string;
  maxResults?: number;
  nextToken?: string;
}
export type ComponentSummaries = ComponentSummary[];
export interface ListComponentsResponse {
  componentSummaries: ComponentSummary[];
  nextToken?: string;
}
export type ListComponentTypesFilter =
  | { extendsFrom: string; namespace?: never; isAbstract?: never }
  | { extendsFrom?: never; namespace: string; isAbstract?: never }
  | { extendsFrom?: never; namespace?: never; isAbstract: boolean };
export type ListComponentTypesFilters = ListComponentTypesFilter[];
export interface ListComponentTypesRequest {
  workspaceId: string;
  filters?: ListComponentTypesFilter[];
  nextToken?: string;
  maxResults?: number;
}
export interface ComponentTypeSummary {
  arn: string;
  componentTypeId: string;
  creationDateTime: Date;
  updateDateTime: Date;
  description?: string;
  status?: Status;
  componentTypeName?: string;
}
export type ComponentTypeSummaries = ComponentTypeSummary[];
export interface ListComponentTypesResponse {
  workspaceId: string;
  componentTypeSummaries: ComponentTypeSummary[];
  nextToken?: string;
  maxResults?: number;
}
export type ListEntitiesFilter =
  | { parentEntityId: string; componentTypeId?: never; externalId?: never }
  | { parentEntityId?: never; componentTypeId: string; externalId?: never }
  | { parentEntityId?: never; componentTypeId?: never; externalId: string };
export type ListEntitiesFilters = ListEntitiesFilter[];
export interface ListEntitiesRequest {
  workspaceId: string;
  filters?: ListEntitiesFilter[];
  maxResults?: number;
  nextToken?: string;
}
export interface EntitySummary {
  entityId: string;
  entityName: string;
  arn: string;
  parentEntityId?: string;
  status: Status;
  description?: string;
  hasChildEntities?: boolean;
  creationDateTime: Date;
  updateDateTime: Date;
}
export type EntitySummaries = EntitySummary[];
export interface ListEntitiesResponse {
  entitySummaries?: EntitySummary[];
  nextToken?: string;
}
export type ListMetadataTransferJobsFilter =
  | { workspaceId: string; state?: never }
  | { workspaceId?: never; state: string };
export type ListMetadataTransferJobsFilters = ListMetadataTransferJobsFilter[];
export interface ListMetadataTransferJobsRequest {
  sourceType: string;
  destinationType: string;
  filters?: ListMetadataTransferJobsFilter[];
  nextToken?: string;
  maxResults?: number;
}
export interface MetadataTransferJobSummary {
  metadataTransferJobId: string;
  arn: string;
  creationDateTime: Date;
  updateDateTime: Date;
  status: MetadataTransferJobStatus;
  progress?: MetadataTransferJobProgress;
}
export type MetadataTransferJobSummaries = MetadataTransferJobSummary[];
export interface ListMetadataTransferJobsResponse {
  metadataTransferJobSummaries: MetadataTransferJobSummary[];
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
export interface PropertySummary {
  definition?: PropertyDefinitionResponse;
  propertyName: string;
  value?: DataValue;
  areAllPropertyValuesReturned?: boolean;
}
export type PropertySummaries = PropertySummary[];
export interface ListPropertiesResponse {
  propertySummaries: PropertySummary[];
  nextToken?: string;
}
export interface ListScenesRequest {
  workspaceId: string;
  maxResults?: number;
  nextToken?: string;
}
export interface SceneSummary {
  sceneId: string;
  contentLocation: string;
  arn: string;
  creationDateTime: Date;
  updateDateTime: Date;
  description?: string;
}
export type SceneSummaries = SceneSummary[];
export interface ListScenesResponse {
  sceneSummaries?: SceneSummary[];
  nextToken?: string;
}
export interface ListSyncJobsRequest {
  workspaceId: string;
  maxResults?: number;
  nextToken?: string;
}
export interface SyncJobSummary {
  arn?: string;
  workspaceId?: string;
  syncSource?: string;
  status?: SyncJobStatus;
  creationDateTime?: Date;
  updateDateTime?: Date;
}
export type SyncJobSummaries = SyncJobSummary[];
export interface ListSyncJobsResponse {
  syncJobSummaries?: SyncJobSummary[];
  nextToken?: string;
}
export type SyncResourceState = string;
export type SyncResourceType = string;
export type SyncResourceFilter =
  | { state: string; resourceType?: never; resourceId?: never; externalId?: never }
  | { state?: never; resourceType: string; resourceId?: never; externalId?: never }
  | { state?: never; resourceType?: never; resourceId: string; externalId?: never }
  | { state?: never; resourceType?: never; resourceId?: never; externalId: string };
export type SyncResourceFilters = SyncResourceFilter[];
export interface ListSyncResourcesRequest {
  workspaceId: string;
  syncSource: string;
  filters?: SyncResourceFilter[];
  maxResults?: number;
  nextToken?: string;
}
export interface SyncResourceStatus {
  state?: string;
  error?: ErrorDetails;
}
export interface SyncResourceSummary {
  resourceType?: string;
  externalId?: string;
  resourceId?: string;
  status?: SyncResourceStatus;
  updateDateTime?: Date;
}
export type SyncResourceSummaries = SyncResourceSummary[];
export interface ListSyncResourcesResponse {
  syncResources?: SyncResourceSummary[];
  nextToken?: string;
}
export interface ListTagsForResourceRequest {
  resourceARN: string;
  maxResults?: number;
  nextToken?: string;
}
export interface ListTagsForResourceResponse {
  tags?: { [key: string]: string | undefined };
  nextToken?: string;
}
export interface ListWorkspacesRequest {
  maxResults?: number;
  nextToken?: string;
}
export interface WorkspaceSummary {
  workspaceId: string;
  arn: string;
  description?: string;
  linkedServices?: string[];
  creationDateTime: Date;
  updateDateTime: Date;
}
export type WorkspaceSummaries = WorkspaceSummary[];
export interface ListWorkspacesResponse {
  workspaceSummaries?: WorkspaceSummary[];
  nextToken?: string;
}
export interface TagResourceRequest {
  resourceARN: string;
  tags: { [key: string]: string | undefined };
}
export interface TagResourceResponse {}
export type TagKeyList = string[];
export interface UntagResourceRequest {
  resourceARN: string;
  tagKeys: string[];
}
export interface UntagResourceResponse {}
export interface UpdateComponentTypeRequest {
  workspaceId: string;
  isSingleton?: boolean;
  componentTypeId: string;
  description?: string;
  propertyDefinitions?: { [key: string]: PropertyDefinitionRequest | undefined };
  extendsFrom?: string[];
  functions?: { [key: string]: FunctionRequest | undefined };
  propertyGroups?: { [key: string]: PropertyGroupRequest | undefined };
  componentTypeName?: string;
  compositeComponentTypes?: { [key: string]: CompositeComponentTypeRequest | undefined };
}
export interface UpdateComponentTypeResponse {
  workspaceId: string;
  arn: string;
  componentTypeId: string;
  state: string;
}
export type ComponentUpdateType = string;
export interface ComponentUpdateRequest {
  updateType?: string;
  description?: string;
  componentTypeId?: string;
  propertyUpdates?: { [key: string]: PropertyRequest | undefined };
  propertyGroupUpdates?: { [key: string]: ComponentPropertyGroupRequest | undefined };
}
export type ComponentUpdatesMapRequest = { [key: string]: ComponentUpdateRequest | undefined };
export interface CompositeComponentUpdateRequest {
  updateType?: string;
  description?: string;
  propertyUpdates?: { [key: string]: PropertyRequest | undefined };
  propertyGroupUpdates?: { [key: string]: ComponentPropertyGroupRequest | undefined };
}
export type CompositeComponentUpdatesMapRequest = {
  [key: string]: CompositeComponentUpdateRequest | undefined;
};
export type ParentEntityUpdateType = string;
export interface ParentEntityUpdateRequest {
  updateType: string;
  parentEntityId?: string;
}
export interface UpdateEntityRequest {
  workspaceId: string;
  entityId: string;
  entityName?: string;
  description?: string;
  componentUpdates?: { [key: string]: ComponentUpdateRequest | undefined };
  compositeComponentUpdates?: { [key: string]: CompositeComponentUpdateRequest | undefined };
  parentEntityUpdate?: ParentEntityUpdateRequest;
}
export interface UpdateEntityResponse {
  updateDateTime: Date;
  state: string;
}
export interface UpdatePricingPlanRequest {
  pricingMode: string;
  bundleNames?: string[];
}
export interface UpdatePricingPlanResponse {
  currentPricingPlan: PricingPlan;
  pendingPricingPlan?: PricingPlan;
}
export interface UpdateSceneRequest {
  workspaceId: string;
  sceneId: string;
  contentLocation?: string;
  description?: string;
  capabilities?: string[];
  sceneMetadata?: { [key: string]: string | undefined };
}
export interface UpdateSceneResponse {
  updateDateTime: Date;
}
export interface UpdateWorkspaceRequest {
  workspaceId: string;
  description?: string;
  role?: string;
  s3Location?: string;
}
export interface UpdateWorkspaceResponse {
  updateDateTime: Date;
}
export type ExceptionMessage = string;
export type BatchPutPropertyValuesError =
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Sets values for multiple time series properties.
 */
export const batchPutPropertyValues: API.OperationMethod<
  BatchPutPropertyValuesRequest,
  BatchPutPropertyValuesResponse,
  BatchPutPropertyValuesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(10, __c1, 2) as any as S.Schema<BatchPutPropertyValuesRequest>,
  output: __S(15, __c1, 7) as any as S.Schema<BatchPutPropertyValuesResponse>,
  errors: [
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "BatchPutPropertyValues",
  endpointHostPrefix: "data.",
}));

export type CancelMetadataTransferJobError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Cancels the metadata transfer job.
 */
export const cancelMetadataTransferJob: API.OperationMethod<
  CancelMetadataTransferJobRequest,
  CancelMetadataTransferJobResponse,
  CancelMetadataTransferJobError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(16, __c2, 0) as any as S.Schema<CancelMetadataTransferJobRequest>,
  output: __S(20, __c2, 4) as any as S.Schema<CancelMetadataTransferJobResponse>,
  errors: [
    AccessDeniedException,
    ConflictException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "CancelMetadataTransferJob",
  endpointHostPrefix: "api.",
}));

export type CreateComponentTypeError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ServiceQuotaExceededException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Creates a component type.
 */
export const createComponentType: API.OperationMethod<
  CreateComponentTypeRequest,
  CreateComponentTypeResponse,
  CreateComponentTypeError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(35, __c4, 3) as any as S.Schema<CreateComponentTypeRequest>,
  output: __S(36, __c4, 4) as any as S.Schema<CreateComponentTypeResponse>,
  errors: [
    AccessDeniedException,
    ConflictException,
    InternalServerException,
    ServiceQuotaExceededException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "CreateComponentType",
  endpointHostPrefix: "api.",
}));

export type CreateEntityError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ServiceQuotaExceededException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Creates an entity.
 */
export const createEntity: API.OperationMethod<
  CreateEntityRequest,
  CreateEntityResponse,
  CreateEntityError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(45, __c5, 5) as any as S.Schema<CreateEntityRequest>,
  output: __S(46, __c5, 6) as any as S.Schema<CreateEntityResponse>,
  errors: [
    AccessDeniedException,
    ConflictException,
    InternalServerException,
    ServiceQuotaExceededException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "CreateEntity",
  endpointHostPrefix: "api.",
}));

export type CreateMetadataTransferJobError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ResourceNotFoundException
  | ServiceQuotaExceededException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Creates a new metadata transfer job.
 */
export const createMetadataTransferJob: API.OperationMethod<
  CreateMetadataTransferJobRequest,
  CreateMetadataTransferJobResponse,
  CreateMetadataTransferJobError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(63, __c7, 7) as any as S.Schema<CreateMetadataTransferJobRequest>,
  output: __S(64, __c8, 0) as any as S.Schema<CreateMetadataTransferJobResponse>,
  errors: [
    AccessDeniedException,
    ConflictException,
    InternalServerException,
    ResourceNotFoundException,
    ServiceQuotaExceededException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "CreateMetadataTransferJob",
  endpointHostPrefix: "api.",
}));

export type CreateSceneError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ServiceQuotaExceededException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Creates a scene.
 */
export const createScene: API.OperationMethod<
  CreateSceneRequest,
  CreateSceneResponse,
  CreateSceneError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(65, __c8, 1) as any as S.Schema<CreateSceneRequest>,
  output: __S(66, __c8, 2) as any as S.Schema<CreateSceneResponse>,
  errors: [
    AccessDeniedException,
    ConflictException,
    InternalServerException,
    ServiceQuotaExceededException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "CreateScene",
  endpointHostPrefix: "api.",
}));

export type CreateSyncJobError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ServiceQuotaExceededException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * This action creates a SyncJob.
 */
export const createSyncJob: API.OperationMethod<
  CreateSyncJobRequest,
  CreateSyncJobResponse,
  CreateSyncJobError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(67, __c8, 3) as any as S.Schema<CreateSyncJobRequest>,
  output: __S(68, __c8, 4) as any as S.Schema<CreateSyncJobResponse>,
  errors: [
    AccessDeniedException,
    ConflictException,
    InternalServerException,
    ServiceQuotaExceededException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "CreateSyncJob",
  endpointHostPrefix: "api.",
}));

export type CreateWorkspaceError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ServiceQuotaExceededException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Creates a workplace.
 */
export const createWorkspace: API.OperationMethod<
  CreateWorkspaceRequest,
  CreateWorkspaceResponse,
  CreateWorkspaceError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(69, __c8, 5) as any as S.Schema<CreateWorkspaceRequest>,
  output: __S(66, __c8, 2) as any as S.Schema<CreateWorkspaceResponse>,
  errors: [
    AccessDeniedException,
    ConflictException,
    InternalServerException,
    ServiceQuotaExceededException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "CreateWorkspace",
  endpointHostPrefix: "api.",
}));

export type DeleteComponentTypeError =
  | AccessDeniedException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Deletes a component type.
 */
export const deleteComponentType: API.OperationMethod<
  DeleteComponentTypeRequest,
  DeleteComponentTypeResponse,
  DeleteComponentTypeError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(70, __c8, 6) as any as S.Schema<DeleteComponentTypeRequest>,
  output: __S(71, __c8, 7) as any as S.Schema<DeleteComponentTypeResponse>,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DeleteComponentType",
  endpointHostPrefix: "api.",
}));

export type DeleteEntityError =
  | InternalServerException
  | ResourceNotFoundException
  | ServiceQuotaExceededException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Deletes an entity.
 */
export const deleteEntity: API.OperationMethod<
  DeleteEntityRequest,
  DeleteEntityResponse,
  DeleteEntityError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(72, __c9, 0) as any as S.Schema<DeleteEntityRequest>,
  output: __S(73, __c9, 1) as any as S.Schema<DeleteEntityResponse>,
  errors: [
    InternalServerException,
    ResourceNotFoundException,
    ServiceQuotaExceededException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DeleteEntity",
  endpointHostPrefix: "api.",
}));

export type DeleteSceneError =
  | AccessDeniedException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Deletes a scene.
 */
export const deleteScene: API.OperationMethod<
  DeleteSceneRequest,
  DeleteSceneResponse,
  DeleteSceneError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(74, __c9, 2) as any as S.Schema<DeleteSceneRequest>,
  output: __S(75, __c9, 3) as any as S.Schema<DeleteSceneResponse>,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DeleteScene",
  endpointHostPrefix: "api.",
}));

export type DeleteSyncJobError =
  | AccessDeniedException
  | InternalServerException
  | ResourceNotFoundException
  | ServiceQuotaExceededException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Delete the SyncJob.
 */
export const deleteSyncJob: API.OperationMethod<
  DeleteSyncJobRequest,
  DeleteSyncJobResponse,
  DeleteSyncJobError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(76, __c9, 4) as any as S.Schema<DeleteSyncJobRequest>,
  output: __S(73, __c9, 1) as any as S.Schema<DeleteSyncJobResponse>,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ResourceNotFoundException,
    ServiceQuotaExceededException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DeleteSyncJob",
  endpointHostPrefix: "api.",
}));

export type DeleteWorkspaceError =
  | AccessDeniedException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Deletes a workspace.
 */
export const deleteWorkspace: API.OperationMethod<
  DeleteWorkspaceRequest,
  DeleteWorkspaceResponse,
  DeleteWorkspaceError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(77, __c9, 5) as any as S.Schema<DeleteWorkspaceRequest>,
  output: __S(78, __c9, 6) as any as S.Schema<DeleteWorkspaceResponse>,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DeleteWorkspace",
  endpointHostPrefix: "api.",
}));

export type ExecuteQueryError =
  | AccessDeniedException
  | InternalServerException
  | QueryTimeoutException
  | ServiceQuotaExceededException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Run queries to access information from your knowledge graph of entities within
 * individual workspaces.
 *
 * The ExecuteQuery action only works with Amazon Web Services Java SDK2.
 * ExecuteQuery will not work with any Amazon Web Services Java SDK version < 2.x.
 */
export const executeQuery: API.PaginatedOperationMethod<
  ExecuteQueryRequest,
  ExecuteQueryResponse,
  ExecuteQueryError,
  Credentials | HttpClient.HttpClient,
  unknown
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: __S(79, __c9, 7) as any as S.Schema<ExecuteQueryRequest>,
  output: __S(85, __c10, 5) as any as S.Schema<ExecuteQueryResponse>,
  errors: [
    AccessDeniedException,
    InternalServerException,
    QueryTimeoutException,
    ServiceQuotaExceededException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ExecuteQuery",
  endpointHostPrefix: "api.",
  pagination: {
    inputToken: "nextToken",
    outputToken: "nextToken",
    pageSize: "maxResults",
  } as const,
})) as any;

export type GetComponentTypeError =
  | AccessDeniedException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Retrieves information about a component type.
 */
export const getComponentType: API.OperationMethod<
  GetComponentTypeRequest,
  GetComponentTypeResponse,
  GetComponentTypeError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(86, __c10, 6) as any as S.Schema<GetComponentTypeRequest>,
  output: __S(96, __c12, 0) as any as S.Schema<GetComponentTypeResponse>,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetComponentType",
  endpointHostPrefix: "api.",
}));

export type GetEntityError =
  | InternalServerException
  | ResourceNotFoundException
  | ServiceQuotaExceededException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Retrieves information about an entity.
 */
export const getEntity: API.OperationMethod<
  GetEntityRequest,
  GetEntityResponse,
  GetEntityError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(97, __c12, 1) as any as S.Schema<GetEntityRequest>,
  output: __S(106, __c13, 2) as any as S.Schema<GetEntityResponse>,
  errors: [
    InternalServerException,
    ResourceNotFoundException,
    ServiceQuotaExceededException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetEntity",
  endpointHostPrefix: "api.",
}));

export type GetMetadataTransferJobError =
  | AccessDeniedException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Gets a nmetadata transfer job.
 */
export const getMetadataTransferJob: API.OperationMethod<
  GetMetadataTransferJobRequest,
  GetMetadataTransferJobResponse,
  GetMetadataTransferJobError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(107, __c13, 3) as any as S.Schema<GetMetadataTransferJobRequest>,
  output: __S(108, __c13, 4) as any as S.Schema<GetMetadataTransferJobResponse>,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetMetadataTransferJob",
  endpointHostPrefix: "api.",
}));

export type GetPricingPlanError =
  | AccessDeniedException
  | InternalServerException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Gets the pricing plan.
 */
export const getPricingPlan: API.OperationMethod<
  GetPricingPlanRequest,
  GetPricingPlanResponse,
  GetPricingPlanError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(109, __c13, 5) as any as S.Schema<GetPricingPlanRequest>,
  output: __S(112, __c14, 0) as any as S.Schema<GetPricingPlanResponse>,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetPricingPlan",
  endpointHostPrefix: "api.",
}));

export type GetPropertyValueError =
  | AccessDeniedException
  | ConnectorFailureException
  | ConnectorTimeoutException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Gets the property values for a component, component type, entity, or workspace.
 *
 * You must specify a value for either `componentName`,
 * `componentTypeId`, `entityId`, or `workspaceId`.
 */
export const getPropertyValue: API.PaginatedOperationMethod<
  GetPropertyValueRequest,
  GetPropertyValueResponse,
  GetPropertyValueError,
  Credentials | HttpClient.HttpClient,
  unknown
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: __S(118, __c14, 6) as any as S.Schema<GetPropertyValueRequest>,
  output: __S(124, __c15, 4) as any as S.Schema<GetPropertyValueResponse>,
  errors: [
    AccessDeniedException,
    ConnectorFailureException,
    ConnectorTimeoutException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetPropertyValue",
  endpointHostPrefix: "data.",
  pagination: {
    inputToken: "nextToken",
    outputToken: "nextToken",
    pageSize: "maxResults",
  } as const,
})) as any;

export type GetPropertyValueHistoryError =
  | AccessDeniedException
  | ConnectorFailureException
  | ConnectorTimeoutException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Retrieves information about the history of a time series property value for a component,
 * component type, entity, or workspace.
 *
 * You must specify a value for `workspaceId`. For entity-specific queries,
 * specify values for `componentName` and `entityId`. For cross-entity
 * quries, specify a value for `componentTypeId`.
 */
export const getPropertyValueHistory: API.PaginatedOperationMethod<
  GetPropertyValueHistoryRequest,
  GetPropertyValueHistoryResponse,
  GetPropertyValueHistoryError,
  Credentials | HttpClient.HttpClient,
  unknown
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: __S(126, __c15, 6) as any as S.Schema<GetPropertyValueHistoryRequest>,
  output: __S(129, __c16, 1) as any as S.Schema<GetPropertyValueHistoryResponse>,
  errors: [
    AccessDeniedException,
    ConnectorFailureException,
    ConnectorTimeoutException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetPropertyValueHistory",
  endpointHostPrefix: "data.",
  pagination: {
    inputToken: "nextToken",
    outputToken: "nextToken",
    pageSize: "maxResults",
  } as const,
})) as any;

export type GetSceneError =
  | AccessDeniedException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Retrieves information about a scene.
 */
export const getScene: API.OperationMethod<
  GetSceneRequest,
  GetSceneResponse,
  GetSceneError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(130, __c16, 2) as any as S.Schema<GetSceneRequest>,
  output: __S(131, __c16, 3) as any as S.Schema<GetSceneResponse>,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetScene",
  endpointHostPrefix: "api.",
}));

export type GetSyncJobError =
  | AccessDeniedException
  | InternalServerException
  | ResourceNotFoundException
  | ServiceQuotaExceededException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Gets the SyncJob.
 */
export const getSyncJob: API.OperationMethod<
  GetSyncJobRequest,
  GetSyncJobResponse,
  GetSyncJobError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(132, __c16, 4) as any as S.Schema<GetSyncJobRequest>,
  output: __S(133, __c16, 5) as any as S.Schema<GetSyncJobResponse>,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ResourceNotFoundException,
    ServiceQuotaExceededException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetSyncJob",
  endpointHostPrefix: "api.",
}));

export type GetWorkspaceError =
  | InternalServerException
  | ResourceNotFoundException
  | ServiceQuotaExceededException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Retrieves information about a workspace.
 */
export const getWorkspace: API.OperationMethod<
  GetWorkspaceRequest,
  GetWorkspaceResponse,
  GetWorkspaceError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(134, __c16, 6) as any as S.Schema<GetWorkspaceRequest>,
  output: __S(135, __c16, 7) as any as S.Schema<GetWorkspaceResponse>,
  errors: [
    InternalServerException,
    ResourceNotFoundException,
    ServiceQuotaExceededException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetWorkspace",
  endpointHostPrefix: "api.",
}));

export type ListComponentsError =
  | AccessDeniedException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * This API lists the components of an entity.
 */
export const listComponents: API.PaginatedOperationMethod<
  ListComponentsRequest,
  ListComponentsResponse,
  ListComponentsError,
  Credentials | HttpClient.HttpClient,
  unknown
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: __S(136, __c17, 0) as any as S.Schema<ListComponentsRequest>,
  output: __S(138, __c17, 2) as any as S.Schema<ListComponentsResponse>,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListComponents",
  endpointHostPrefix: "api.",
  pagination: {
    inputToken: "nextToken",
    outputToken: "nextToken",
    pageSize: "maxResults",
  } as const,
})) as any;

export type ListComponentTypesError =
  | AccessDeniedException
  | InternalServerException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Lists all component types in a workspace.
 */
export const listComponentTypes: API.PaginatedOperationMethod<
  ListComponentTypesRequest,
  ListComponentTypesResponse,
  ListComponentTypesError,
  Credentials | HttpClient.HttpClient,
  unknown
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: __S(141, __c17, 5) as any as S.Schema<ListComponentTypesRequest>,
  output: __S(144, __c18, 0) as any as S.Schema<ListComponentTypesResponse>,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListComponentTypes",
  endpointHostPrefix: "api.",
  pagination: {
    inputToken: "nextToken",
    outputToken: "nextToken",
    pageSize: "maxResults",
  } as const,
})) as any;

export type ListEntitiesError =
  | InternalServerException
  | ServiceQuotaExceededException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Lists all entities in a workspace.
 */
export const listEntities: API.PaginatedOperationMethod<
  ListEntitiesRequest,
  ListEntitiesResponse,
  ListEntitiesError,
  Credentials | HttpClient.HttpClient,
  unknown
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: __S(147, __c18, 3) as any as S.Schema<ListEntitiesRequest>,
  output: __S(150, __c18, 6) as any as S.Schema<ListEntitiesResponse>,
  errors: [
    InternalServerException,
    ServiceQuotaExceededException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListEntities",
  endpointHostPrefix: "api.",
  pagination: {
    inputToken: "nextToken",
    outputToken: "nextToken",
    pageSize: "maxResults",
  } as const,
})) as any;

export type ListMetadataTransferJobsError =
  | AccessDeniedException
  | InternalServerException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Lists the metadata transfer jobs.
 */
export const listMetadataTransferJobs: API.PaginatedOperationMethod<
  ListMetadataTransferJobsRequest,
  ListMetadataTransferJobsResponse,
  ListMetadataTransferJobsError,
  Credentials | HttpClient.HttpClient,
  unknown
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: __S(153, __c19, 1) as any as S.Schema<ListMetadataTransferJobsRequest>,
  output: __S(156, __c19, 4) as any as S.Schema<ListMetadataTransferJobsResponse>,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListMetadataTransferJobs",
  endpointHostPrefix: "api.",
  pagination: {
    inputToken: "nextToken",
    outputToken: "nextToken",
    pageSize: "maxResults",
  } as const,
})) as any;

export type ListPropertiesError =
  | AccessDeniedException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * This API lists the properties of a component.
 */
export const listProperties: API.PaginatedOperationMethod<
  ListPropertiesRequest,
  ListPropertiesResponse,
  ListPropertiesError,
  Credentials | HttpClient.HttpClient,
  unknown
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: __S(157, __c19, 5) as any as S.Schema<ListPropertiesRequest>,
  output: __S(160, __c20, 0) as any as S.Schema<ListPropertiesResponse>,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListProperties",
  endpointHostPrefix: "api.",
  pagination: {
    inputToken: "nextToken",
    outputToken: "nextToken",
    pageSize: "maxResults",
  } as const,
})) as any;

export type ListScenesError =
  | AccessDeniedException
  | InternalServerException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Lists all scenes in a workspace.
 */
export const listScenes: API.PaginatedOperationMethod<
  ListScenesRequest,
  ListScenesResponse,
  ListScenesError,
  Credentials | HttpClient.HttpClient,
  unknown
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: __S(161, __c20, 1) as any as S.Schema<ListScenesRequest>,
  output: __S(164, __c20, 4) as any as S.Schema<ListScenesResponse>,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListScenes",
  endpointHostPrefix: "api.",
  pagination: {
    inputToken: "nextToken",
    outputToken: "nextToken",
    pageSize: "maxResults",
  } as const,
})) as any;

export type ListSyncJobsError =
  | AccessDeniedException
  | InternalServerException
  | ServiceQuotaExceededException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * List all SyncJobs.
 */
export const listSyncJobs: API.PaginatedOperationMethod<
  ListSyncJobsRequest,
  ListSyncJobsResponse,
  ListSyncJobsError,
  Credentials | HttpClient.HttpClient,
  unknown
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: __S(165, __c20, 5) as any as S.Schema<ListSyncJobsRequest>,
  output: __S(168, __c21, 0) as any as S.Schema<ListSyncJobsResponse>,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ServiceQuotaExceededException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListSyncJobs",
  endpointHostPrefix: "api.",
  pagination: {
    inputToken: "nextToken",
    outputToken: "nextToken",
    pageSize: "maxResults",
  } as const,
})) as any;

export type ListSyncResourcesError =
  | AccessDeniedException
  | InternalServerException
  | ServiceQuotaExceededException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Lists the sync resources.
 */
export const listSyncResources: API.PaginatedOperationMethod<
  ListSyncResourcesRequest,
  ListSyncResourcesResponse,
  ListSyncResourcesError,
  Credentials | HttpClient.HttpClient,
  unknown
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: __S(171, __c21, 3) as any as S.Schema<ListSyncResourcesRequest>,
  output: __S(174, __c21, 6) as any as S.Schema<ListSyncResourcesResponse>,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ServiceQuotaExceededException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListSyncResources",
  endpointHostPrefix: "api.",
  pagination: {
    inputToken: "nextToken",
    outputToken: "nextToken",
    pageSize: "maxResults",
  } as const,
})) as any;

export type ListTagsForResourceError =
  | AccessDeniedException
  | ResourceNotFoundException
  | CommonErrors;
/**
 * Lists all tags associated with a resource.
 */
export const listTagsForResource: API.OperationMethod<
  ListTagsForResourceRequest,
  ListTagsForResourceResponse,
  ListTagsForResourceError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(175, __c21, 7) as any as S.Schema<ListTagsForResourceRequest>,
  output: __S(176, __c22, 0) as any as S.Schema<ListTagsForResourceResponse>,
  errors: [AccessDeniedException, ResourceNotFoundException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListTagsForResource",
  endpointHostPrefix: "api.",
}));

export type ListWorkspacesError =
  | InternalServerException
  | ServiceQuotaExceededException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Retrieves information about workspaces in the current account.
 */
export const listWorkspaces: API.PaginatedOperationMethod<
  ListWorkspacesRequest,
  ListWorkspacesResponse,
  ListWorkspacesError,
  Credentials | HttpClient.HttpClient,
  unknown
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: __S(177, __c22, 1) as any as S.Schema<ListWorkspacesRequest>,
  output: __S(180, __c22, 4) as any as S.Schema<ListWorkspacesResponse>,
  errors: [
    InternalServerException,
    ServiceQuotaExceededException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListWorkspaces",
  endpointHostPrefix: "api.",
  pagination: {
    inputToken: "nextToken",
    outputToken: "nextToken",
    pageSize: "maxResults",
  } as const,
})) as any;

export type TagResourceError =
  | AccessDeniedException
  | ResourceNotFoundException
  | TooManyTagsException
  | CommonErrors;
/**
 * Adds tags to a resource.
 */
export const tagResource: API.OperationMethod<
  TagResourceRequest,
  TagResourceResponse,
  TagResourceError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(181, __c22, 5) as any as S.Schema<TagResourceRequest>,
  output: __S(75, __c9, 3) as any as S.Schema<TagResourceResponse>,
  errors: [AccessDeniedException, ResourceNotFoundException, TooManyTagsException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "TagResource",
  endpointHostPrefix: "api.",
}));

export type UntagResourceError = AccessDeniedException | ResourceNotFoundException | CommonErrors;
/**
 * Removes tags from a resource.
 */
export const untagResource: API.OperationMethod<
  UntagResourceRequest,
  UntagResourceResponse,
  UntagResourceError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(182, __c22, 6) as any as S.Schema<UntagResourceRequest>,
  output: __S(75, __c9, 3) as any as S.Schema<UntagResourceResponse>,
  errors: [AccessDeniedException, ResourceNotFoundException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "UntagResource",
  endpointHostPrefix: "api.",
}));

export type UpdateComponentTypeError =
  | AccessDeniedException
  | InternalServerException
  | ResourceNotFoundException
  | ServiceQuotaExceededException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Updates information in a component type.
 */
export const updateComponentType: API.OperationMethod<
  UpdateComponentTypeRequest,
  UpdateComponentTypeResponse,
  UpdateComponentTypeError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(183, __c22, 7) as any as S.Schema<UpdateComponentTypeRequest>,
  output: __S(184, __c23, 0) as any as S.Schema<UpdateComponentTypeResponse>,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ResourceNotFoundException,
    ServiceQuotaExceededException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "UpdateComponentType",
  endpointHostPrefix: "api.",
}));

export type UpdateEntityError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ResourceNotFoundException
  | ServiceQuotaExceededException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Updates an entity.
 */
export const updateEntity: API.OperationMethod<
  UpdateEntityRequest,
  UpdateEntityResponse,
  UpdateEntityError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(190, __c23, 6) as any as S.Schema<UpdateEntityRequest>,
  output: __S(191, __c23, 7) as any as S.Schema<UpdateEntityResponse>,
  errors: [
    AccessDeniedException,
    ConflictException,
    InternalServerException,
    ResourceNotFoundException,
    ServiceQuotaExceededException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "UpdateEntity",
  endpointHostPrefix: "api.",
}));

export type UpdatePricingPlanError =
  | AccessDeniedException
  | InternalServerException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Update the pricing plan.
 */
export const updatePricingPlan: API.OperationMethod<
  UpdatePricingPlanRequest,
  UpdatePricingPlanResponse,
  UpdatePricingPlanError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(192, __c24, 0) as any as S.Schema<UpdatePricingPlanRequest>,
  output: __S(193, __c24, 1) as any as S.Schema<UpdatePricingPlanResponse>,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "UpdatePricingPlan",
  endpointHostPrefix: "api.",
}));

export type UpdateSceneError =
  | AccessDeniedException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Updates a scene.
 */
export const updateScene: API.OperationMethod<
  UpdateSceneRequest,
  UpdateSceneResponse,
  UpdateSceneError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(194, __c24, 2) as any as S.Schema<UpdateSceneRequest>,
  output: __S(195, __c24, 3) as any as S.Schema<UpdateSceneResponse>,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "UpdateScene",
  endpointHostPrefix: "api.",
}));

export type UpdateWorkspaceError =
  | AccessDeniedException
  | InternalServerException
  | ResourceNotFoundException
  | ServiceQuotaExceededException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Updates a workspace.
 */
export const updateWorkspace: API.OperationMethod<
  UpdateWorkspaceRequest,
  UpdateWorkspaceResponse,
  UpdateWorkspaceError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(196, __c24, 4) as any as S.Schema<UpdateWorkspaceRequest>,
  output: __S(195, __c24, 3) as any as S.Schema<UpdateWorkspaceResponse>,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ResourceNotFoundException,
    ServiceQuotaExceededException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "UpdateWorkspace",
  endpointHostPrefix: "api.",
}));

// Schema builders: each runs one schema initializer, on that schema's first use.
function __c0(j: number): any {
  switch (j) {
    case 0:
      return S.Record(S.String, /*@__PURE__*/ S.String.pipe(S.optional));
    case 1:
      return S.suspend(() =>
        S.Struct({
          componentName: S.optional(S.String),
          componentPath: S.optional(S.String),
          externalIdProperty: S.optional(__S(0, __c0, 0)),
          entityId: S.optional(S.String),
          propertyName: S.String,
        }),
      ).annotate({ identifier: "EntityPropertyReference" });
    case 2:
      return S.Array(
        /*@__PURE__*/ S.suspend((): S.Schema<DataValue> => __S(5, __c0, 5)).annotate({
          identifier: "DataValue",
        }),
      );
    case 3:
      return S.Record(
        S.String,
        /*@__PURE__*/ S.suspend((): S.Schema<DataValue> => __S(5, __c0, 5))
          .annotate({ identifier: "DataValue" })
          .pipe(S.optional),
      );
    case 4:
      return S.suspend(() =>
        S.Struct({
          targetEntityId: S.optional(S.String),
          targetComponentName: S.optional(S.String),
        }),
      ).annotate({ identifier: "RelationshipValue" });
    case 5:
      return S.suspend(() =>
        S.Struct({
          booleanValue: S.optional(S.Boolean),
          doubleValue: S.optional(S.Number),
          integerValue: S.optional(S.Number),
          longValue: S.optional(S.Number),
          stringValue: S.optional(S.String),
          listValue: S.optional(
            S.suspend(() => __S(2, __c0, 2)).annotate({ identifier: "DataValueList" }),
          ),
          mapValue: S.optional(
            S.suspend(() => __S(3, __c0, 3)).annotate({ identifier: "DataValueMap" }),
          ),
          relationshipValue: S.optional(__S(4, __c0, 4)),
          expression: S.optional(S.String),
        }),
      ).annotate({ identifier: "DataValue" });
    case 6:
      return S.suspend(() =>
        S.Struct({
          timestamp: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          value: __S(5, __c0, 5),
          time: S.optional(S.String),
        }),
      ).annotate({ identifier: "PropertyValue" });
    case 7:
      return S.Array(__S(6, __c0, 6));
  }
}
function __c1(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          entityPropertyReference: __S(1, __c0, 1),
          propertyValues: S.optional(__S(7, __c0, 7)),
        }),
      ).annotate({ identifier: "PropertyValueEntry" });
    case 1:
      return S.Array(__S(8, __c1, 0));
    case 2:
      return S.suspend(() =>
        S.Struct({
          workspaceId: S.String.pipe(T.HttpLabel("workspaceId")),
          entries: __S(9, __c1, 1),
        }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/workspaces/{workspaceId}/entity-properties" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "BatchPutPropertyValuesRequest",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({ errorCode: S.String, errorMessage: S.String, entry: __S(8, __c1, 0) }),
      ).annotate({ identifier: "BatchPutPropertyError" });
    case 4:
      return S.Array(__S(11, __c1, 3));
    case 5:
      return S.suspend(() => S.Struct({ errors: __S(12, __c1, 4) })).annotate({
        identifier: "BatchPutPropertyErrorEntry",
      });
    case 6:
      return S.Array(__S(13, __c1, 5));
    case 7:
      return S.suspend(() => S.Struct({ errorEntries: __S(14, __c1, 6) })).annotate({
        identifier: "BatchPutPropertyValuesResponse",
      });
  }
}
function __c2(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          metadataTransferJobId: S.String.pipe(T.HttpLabel("metadataTransferJobId")),
        }).pipe(
          T.all(
            T.Http({
              method: "PUT",
              uri: "/metadata-transfer-jobs/{metadataTransferJobId}/cancel",
            }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "CancelMetadataTransferJobRequest",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({ code: S.optional(S.String), message: S.optional(S.String) }),
      ).annotate({ identifier: "ErrorDetails" });
    case 2:
      return S.suspend(() =>
        S.Struct({
          state: S.optional(S.String),
          error: S.optional(__S(17, __c2, 1)),
          queuedPosition: S.optional(S.Number),
        }),
      ).annotate({
        identifier: "MetadataTransferJobStatus",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({
          totalCount: S.optional(S.Number),
          succeededCount: S.optional(S.Number),
          skippedCount: S.optional(S.Number),
          failedCount: S.optional(S.Number),
        }),
      ).annotate({
        identifier: "MetadataTransferJobProgress",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({
          metadataTransferJobId: S.String,
          arn: S.String,
          updateDateTime: S.Date.pipe(T.TimestampFormat("epoch-seconds")),
          status: __S(18, __c2, 2),
          progress: S.optional(__S(19, __c2, 3)),
        }),
      ).annotate({
        identifier: "CancelMetadataTransferJobResponse",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({
          targetComponentTypeId: S.optional(S.String),
          relationshipType: S.optional(S.String),
        }),
      ).annotate({ identifier: "Relationship" });
    case 6:
      return S.suspend(() =>
        S.Struct({
          type: S.String,
          nestedType: S.optional(
            S.suspend((): S.Schema<DataType> => __S(22, __c2, 6)).annotate({
              identifier: "DataType",
            }),
          ),
          allowedValues: S.optional(
            S.suspend(() => __S(2, __c0, 2)).annotate({ identifier: "DataValueList" }),
          ),
          unitOfMeasure: S.optional(S.String),
          relationship: S.optional(__S(21, __c2, 5)),
        }),
      ).annotate({ identifier: "DataType" });
    case 7:
      return S.suspend(() =>
        S.Struct({
          dataType: S.optional(__S(22, __c2, 6)),
          isRequiredInEntity: S.optional(S.Boolean),
          isExternalId: S.optional(S.Boolean),
          isStoredExternally: S.optional(S.Boolean),
          isTimeSeries: S.optional(S.Boolean),
          defaultValue: S.optional(__S(5, __c0, 5)),
          configuration: S.optional(__S(0, __c0, 0)),
          displayName: S.optional(S.String),
        }),
      ).annotate({
        identifier: "PropertyDefinitionRequest",
      });
  }
}
function __c3(j: number): any {
  switch (j) {
    case 0:
      return S.Record(S.String, /*@__PURE__*/ __S(23, __c2, 7).pipe(S.optional));
    case 1:
      return S.Array(S.String);
    case 2:
      return S.suspend(() => S.Struct({ arn: S.String })).annotate({
        identifier: "LambdaFunction",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({ lambda: S.optional(__S(26, __c3, 2)), isNative: S.optional(S.Boolean) }),
      ).annotate({ identifier: "DataConnector" });
    case 4:
      return S.suspend(() =>
        S.Struct({
          requiredProperties: S.optional(__S(25, __c3, 1)),
          scope: S.optional(S.String),
          implementedBy: S.optional(__S(27, __c3, 3)),
        }),
      ).annotate({ identifier: "FunctionRequest" });
    case 5:
      return S.Record(S.String, /*@__PURE__*/ __S(28, __c3, 4).pipe(S.optional));
    case 6:
      return S.Record(S.String, /*@__PURE__*/ S.String.pipe(S.optional));
    case 7:
      return S.suspend(() =>
        S.Struct({ groupType: S.optional(S.String), propertyNames: S.optional(__S(25, __c3, 1)) }),
      ).annotate({ identifier: "PropertyGroupRequest" });
  }
}
function __c4(j: number): any {
  switch (j) {
    case 0:
      return S.Record(S.String, /*@__PURE__*/ __S(31, __c3, 7).pipe(S.optional));
    case 1:
      return S.suspend(() => S.Struct({ componentTypeId: S.optional(S.String) })).annotate({
        identifier: "CompositeComponentTypeRequest",
      });
    case 2:
      return S.Record(S.String, /*@__PURE__*/ __S(33, __c4, 1).pipe(S.optional));
    case 3:
      return S.suspend(() =>
        S.Struct({
          workspaceId: S.String.pipe(T.HttpLabel("workspaceId")),
          isSingleton: S.optional(S.Boolean),
          componentTypeId: S.String.pipe(T.HttpLabel("componentTypeId")),
          description: S.optional(S.String),
          propertyDefinitions: S.optional(__S(24, __c3, 0)),
          extendsFrom: S.optional(__S(25, __c3, 1)),
          functions: S.optional(__S(29, __c3, 5)),
          tags: S.optional(__S(30, __c3, 6)),
          propertyGroups: S.optional(__S(32, __c4, 0)),
          componentTypeName: S.optional(S.String),
          compositeComponentTypes: S.optional(__S(34, __c4, 2)),
        }).pipe(
          T.all(
            T.Http({
              method: "POST",
              uri: "/workspaces/{workspaceId}/component-types/{componentTypeId}",
            }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "CreateComponentTypeRequest",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({
          arn: S.String,
          creationDateTime: S.Date.pipe(T.TimestampFormat("epoch-seconds")),
          state: S.String,
        }),
      ).annotate({
        identifier: "CreateComponentTypeResponse",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({
          definition: S.optional(__S(23, __c2, 7)),
          value: S.optional(__S(5, __c0, 5)),
          updateType: S.optional(S.String),
        }),
      ).annotate({ identifier: "PropertyRequest" });
    case 6:
      return S.Record(S.String, /*@__PURE__*/ __S(37, __c4, 5).pipe(S.optional));
    case 7:
      return S.suspend(() =>
        S.Struct({
          groupType: S.optional(S.String),
          propertyNames: S.optional(__S(25, __c3, 1)),
          updateType: S.optional(S.String),
        }),
      ).annotate({
        identifier: "ComponentPropertyGroupRequest",
      });
  }
}
function __c5(j: number): any {
  switch (j) {
    case 0:
      return S.Record(S.String, /*@__PURE__*/ __S(39, __c4, 7).pipe(S.optional));
    case 1:
      return S.suspend(() =>
        S.Struct({
          description: S.optional(S.String),
          componentTypeId: S.optional(S.String),
          properties: S.optional(__S(38, __c4, 6)),
          propertyGroups: S.optional(__S(40, __c5, 0)),
        }),
      ).annotate({ identifier: "ComponentRequest" });
    case 2:
      return S.Record(S.String, /*@__PURE__*/ __S(41, __c5, 1).pipe(S.optional));
    case 3:
      return S.suspend(() =>
        S.Struct({
          description: S.optional(S.String),
          properties: S.optional(__S(38, __c4, 6)),
          propertyGroups: S.optional(__S(40, __c5, 0)),
        }),
      ).annotate({
        identifier: "CompositeComponentRequest",
      });
    case 4:
      return S.Record(S.String, /*@__PURE__*/ __S(43, __c5, 3).pipe(S.optional));
    case 5:
      return S.suspend(() =>
        S.Struct({
          workspaceId: S.String.pipe(T.HttpLabel("workspaceId")),
          entityId: S.optional(S.String),
          entityName: S.String,
          description: S.optional(S.String),
          components: S.optional(__S(42, __c5, 2)),
          compositeComponents: S.optional(__S(44, __c5, 4)),
          parentEntityId: S.optional(S.String),
          tags: S.optional(__S(30, __c3, 6)),
        }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/workspaces/{workspaceId}/entities" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "CreateEntityRequest" });
    case 6:
      return S.suspend(() =>
        S.Struct({
          entityId: S.String,
          arn: S.String,
          creationDateTime: S.Date.pipe(T.TimestampFormat("epoch-seconds")),
          state: S.String,
        }),
      ).annotate({ identifier: "CreateEntityResponse" });
    case 7:
      return S.suspend(() => S.Struct({ location: S.String })).annotate({
        identifier: "S3SourceConfiguration",
      });
  }
}
function __c6(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          assetModelId: S.optional(S.String),
          assetModelExternalId: S.optional(S.String),
          includeOffspring: S.optional(S.Boolean),
          includeAssets: S.optional(S.Boolean),
        }),
      ).annotate({ identifier: "FilterByAssetModel" });
    case 1:
      return S.suspend(() =>
        S.Struct({
          assetId: S.optional(S.String),
          assetExternalId: S.optional(S.String),
          includeOffspring: S.optional(S.Boolean),
          includeAssetModel: S.optional(S.Boolean),
        }),
      ).annotate({ identifier: "FilterByAsset" });
    case 2:
      return S.Union([
        /*@__PURE__*/ S.Struct({ filterByAssetModel: __S(48, __c6, 0) }),
        /*@__PURE__*/ S.Struct({ filterByAsset: __S(49, __c6, 1) }),
      ]);
    case 3:
      return S.Array(__S(50, __c6, 2));
    case 4:
      return S.suspend(() => S.Struct({ filters: S.optional(__S(51, __c6, 3)) })).annotate({
        identifier: "IotSiteWiseSourceConfiguration",
      });
    case 5:
      return S.suspend(() => S.Struct({ componentTypeId: S.String })).annotate({
        identifier: "FilterByComponentType",
      });
    case 6:
      return S.suspend(() => S.Struct({ entityId: S.String })).annotate({
        identifier: "FilterByEntity",
      });
    case 7:
      return S.Union([
        /*@__PURE__*/ S.Struct({ filterByComponentType: __S(53, __c6, 5) }),
        /*@__PURE__*/ S.Struct({ filterByEntity: __S(54, __c6, 6) }),
      ]);
  }
}
function __c7(j: number): any {
  switch (j) {
    case 0:
      return S.Array(__S(55, __c6, 7));
    case 1:
      return S.suspend(() =>
        S.Struct({
          workspace: S.String,
          filters: S.optional(__S(56, __c7, 0)),
        }),
      ).annotate({
        identifier: "IotTwinMakerSourceConfiguration",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({
          type: S.String,
          s3Configuration: S.optional(__S(47, __c5, 7)),
          iotSiteWiseConfiguration: S.optional(__S(52, __c6, 4)),
          iotTwinMakerConfiguration: S.optional(__S(57, __c7, 1)),
        }),
      ).annotate({ identifier: "SourceConfiguration" });
    case 3:
      return S.Array(__S(58, __c7, 2));
    case 4:
      return S.suspend(() => S.Struct({ location: S.String })).annotate({
        identifier: "S3DestinationConfiguration",
      });
    case 5:
      return S.suspend(() => S.Struct({ workspace: S.String })).annotate({
        identifier: "IotTwinMakerDestinationConfiguration",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({
          type: S.String,
          s3Configuration: S.optional(__S(60, __c7, 4)),
          iotTwinMakerConfiguration: S.optional(__S(61, __c7, 5)),
        }),
      ).annotate({ identifier: "DestinationConfiguration" });
    case 7:
      return S.suspend(() =>
        S.Struct({
          metadataTransferJobId: S.optional(S.String),
          description: S.optional(S.String),
          sources: __S(59, __c7, 3),
          destination: __S(62, __c7, 6),
        }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/metadata-transfer-jobs" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "CreateMetadataTransferJobRequest",
      });
  }
}
function __c8(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          metadataTransferJobId: S.String,
          arn: S.String,
          creationDateTime: S.Date.pipe(T.TimestampFormat("epoch-seconds")),
          status: __S(18, __c2, 2),
        }),
      ).annotate({
        identifier: "CreateMetadataTransferJobResponse",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({
          workspaceId: S.String.pipe(T.HttpLabel("workspaceId")),
          sceneId: S.String,
          contentLocation: S.String,
          description: S.optional(S.String),
          capabilities: S.optional(__S(25, __c3, 1)),
          tags: S.optional(__S(30, __c3, 6)),
          sceneMetadata: S.optional(__S(0, __c0, 0)),
        }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/workspaces/{workspaceId}/scenes" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "CreateSceneRequest" });
    case 2:
      return S.suspend(() =>
        S.Struct({
          arn: S.String,
          creationDateTime: S.Date.pipe(T.TimestampFormat("epoch-seconds")),
        }),
      ).annotate({ identifier: "CreateSceneResponse" });
    case 3:
      return S.suspend(() =>
        S.Struct({
          workspaceId: S.String.pipe(T.HttpLabel("workspaceId")),
          syncSource: S.String.pipe(T.HttpLabel("syncSource")),
          syncRole: S.String,
          tags: S.optional(__S(30, __c3, 6)),
        }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/workspaces/{workspaceId}/sync-jobs/{syncSource}" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "CreateSyncJobRequest" });
    case 4:
      return S.suspend(() =>
        S.Struct({
          arn: S.String,
          creationDateTime: S.Date.pipe(T.TimestampFormat("epoch-seconds")),
          state: S.String,
        }),
      ).annotate({ identifier: "CreateSyncJobResponse" });
    case 5:
      return S.suspend(() =>
        S.Struct({
          workspaceId: S.String.pipe(T.HttpLabel("workspaceId")),
          description: S.optional(S.String),
          s3Location: S.optional(S.String),
          role: S.optional(S.String),
          tags: S.optional(__S(30, __c3, 6)),
        }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/workspaces/{workspaceId}" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "CreateWorkspaceRequest" });
    case 6:
      return S.suspend(() =>
        S.Struct({
          workspaceId: S.String.pipe(T.HttpLabel("workspaceId")),
          componentTypeId: S.String.pipe(T.HttpLabel("componentTypeId")),
        }).pipe(
          T.all(
            T.Http({
              method: "DELETE",
              uri: "/workspaces/{workspaceId}/component-types/{componentTypeId}",
            }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "DeleteComponentTypeRequest",
      });
    case 7:
      return S.suspend(() => S.Struct({ state: S.String })).annotate({
        identifier: "DeleteComponentTypeResponse",
      });
  }
}
function __c9(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          workspaceId: S.String.pipe(T.HttpLabel("workspaceId")),
          entityId: S.String.pipe(T.HttpLabel("entityId")),
          isRecursive: S.optional(S.Boolean).pipe(T.HttpQuery("isRecursive")),
        }).pipe(
          T.all(
            T.Http({ method: "DELETE", uri: "/workspaces/{workspaceId}/entities/{entityId}" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "DeleteEntityRequest" });
    case 1:
      return S.suspend(() => S.Struct({ state: S.String })).annotate({
        identifier: "DeleteEntityResponse",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({
          workspaceId: S.String.pipe(T.HttpLabel("workspaceId")),
          sceneId: S.String.pipe(T.HttpLabel("sceneId")),
        }).pipe(
          T.all(
            T.Http({ method: "DELETE", uri: "/workspaces/{workspaceId}/scenes/{sceneId}" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "DeleteSceneRequest" });
    case 3:
      return S.suspend(() => S.Struct({})).annotate({
        identifier: "DeleteSceneResponse",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({
          workspaceId: S.String.pipe(T.HttpLabel("workspaceId")),
          syncSource: S.String.pipe(T.HttpLabel("syncSource")),
        }).pipe(
          T.all(
            T.Http({ method: "DELETE", uri: "/workspaces/{workspaceId}/sync-jobs/{syncSource}" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "DeleteSyncJobRequest" });
    case 5:
      return S.suspend(() =>
        S.Struct({ workspaceId: S.String.pipe(T.HttpLabel("workspaceId")) }).pipe(
          T.all(
            T.Http({ method: "DELETE", uri: "/workspaces/{workspaceId}" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "DeleteWorkspaceRequest" });
    case 6:
      return S.suspend(() => S.Struct({ message: S.optional(S.String) })).annotate({
        identifier: "DeleteWorkspaceResponse",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({
          workspaceId: S.String,
          queryStatement: S.String,
          maxResults: S.optional(S.Number),
          nextToken: S.optional(S.String),
        }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/queries/execution" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "ExecuteQueryRequest" });
  }
}
function __c10(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({ name: S.optional(S.String), type: S.optional(S.String) }),
      ).annotate({ identifier: "ColumnDescription" });
    case 1:
      return S.Array(__S(80, __c10, 0));
    case 2:
      return S.Array(S.Any);
    case 3:
      return S.suspend(() => S.Struct({ rowData: S.optional(__S(82, __c10, 2)) })).annotate({
        identifier: "Row",
      });
    case 4:
      return S.Array(__S(83, __c10, 3));
    case 5:
      return S.suspend(() =>
        S.Struct({
          columnDescriptions: S.optional(__S(81, __c10, 1)),
          rows: S.optional(__S(84, __c10, 4)),
          nextToken: S.optional(S.String),
        }),
      ).annotate({ identifier: "ExecuteQueryResponse" });
    case 6:
      return S.suspend(() =>
        S.Struct({
          workspaceId: S.String.pipe(T.HttpLabel("workspaceId")),
          componentTypeId: S.String.pipe(T.HttpLabel("componentTypeId")),
        }).pipe(
          T.all(
            T.Http({
              method: "GET",
              uri: "/workspaces/{workspaceId}/component-types/{componentTypeId}",
            }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "GetComponentTypeRequest" });
    case 7:
      return S.suspend(() =>
        S.Struct({
          dataType: __S(22, __c2, 6),
          isTimeSeries: S.Boolean,
          isRequiredInEntity: S.Boolean,
          isExternalId: S.Boolean,
          isStoredExternally: S.Boolean,
          isImported: S.Boolean,
          isFinal: S.Boolean,
          isInherited: S.Boolean,
          defaultValue: S.optional(__S(5, __c0, 5)),
          configuration: S.optional(__S(0, __c0, 0)),
          displayName: S.optional(S.String),
        }),
      ).annotate({
        identifier: "PropertyDefinitionResponse",
      });
  }
}
function __c11(j: number): any {
  switch (j) {
    case 0:
      return S.Record(S.String, /*@__PURE__*/ __S(87, __c10, 7).pipe(S.optional));
    case 1:
      return S.suspend(() =>
        S.Struct({
          requiredProperties: S.optional(__S(25, __c3, 1)),
          scope: S.optional(S.String),
          implementedBy: S.optional(__S(27, __c3, 3)),
          isInherited: S.optional(S.Boolean),
        }),
      ).annotate({ identifier: "FunctionResponse" });
    case 2:
      return S.Record(S.String, /*@__PURE__*/ __S(89, __c11, 1).pipe(S.optional));
    case 3:
      return S.suspend(() =>
        S.Struct({ state: S.optional(S.String), error: S.optional(__S(17, __c2, 1)) }),
      ).annotate({ identifier: "Status" });
    case 4:
      return S.suspend(() =>
        S.Struct({ groupType: S.String, propertyNames: __S(25, __c3, 1), isInherited: S.Boolean }),
      ).annotate({ identifier: "PropertyGroupResponse" });
    case 5:
      return S.Record(S.String, /*@__PURE__*/ __S(92, __c11, 4).pipe(S.optional));
    case 6:
      return S.suspend(() =>
        S.Struct({ componentTypeId: S.optional(S.String), isInherited: S.optional(S.Boolean) }),
      ).annotate({
        identifier: "CompositeComponentTypeResponse",
      });
    case 7:
      return S.Record(S.String, /*@__PURE__*/ __S(94, __c11, 6).pipe(S.optional));
  }
}
function __c12(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          workspaceId: S.String,
          isSingleton: S.optional(S.Boolean),
          componentTypeId: S.String,
          description: S.optional(S.String),
          propertyDefinitions: S.optional(__S(88, __c11, 0)),
          extendsFrom: S.optional(__S(25, __c3, 1)),
          functions: S.optional(__S(90, __c11, 2)),
          creationDateTime: S.Date.pipe(T.TimestampFormat("epoch-seconds")),
          updateDateTime: S.Date.pipe(T.TimestampFormat("epoch-seconds")),
          arn: S.String,
          isAbstract: S.optional(S.Boolean),
          isSchemaInitialized: S.optional(S.Boolean),
          status: S.optional(__S(91, __c11, 3)),
          propertyGroups: S.optional(__S(93, __c11, 5)),
          syncSource: S.optional(S.String),
          componentTypeName: S.optional(S.String),
          compositeComponentTypes: S.optional(__S(95, __c11, 7)),
        }),
      ).annotate({ identifier: "GetComponentTypeResponse" });
    case 1:
      return S.suspend(() =>
        S.Struct({
          workspaceId: S.String.pipe(T.HttpLabel("workspaceId")),
          entityId: S.String.pipe(T.HttpLabel("entityId")),
        }).pipe(
          T.all(
            T.Http({ method: "GET", uri: "/workspaces/{workspaceId}/entities/{entityId}" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "GetEntityRequest" });
    case 2:
      return S.suspend(() =>
        S.Struct({
          definition: S.optional(__S(87, __c10, 7)),
          value: S.optional(__S(5, __c0, 5)),
          areAllPropertyValuesReturned: S.optional(S.Boolean),
        }),
      ).annotate({ identifier: "PropertyResponse" });
    case 3:
      return S.Record(S.String, /*@__PURE__*/ __S(98, __c12, 2).pipe(S.optional));
    case 4:
      return S.suspend(() =>
        S.Struct({ groupType: S.String, propertyNames: __S(25, __c3, 1), isInherited: S.Boolean }),
      ).annotate({
        identifier: "ComponentPropertyGroupResponse",
      });
    case 5:
      return S.Record(S.String, /*@__PURE__*/ __S(100, __c12, 4).pipe(S.optional));
    case 6:
      return S.suspend(() =>
        S.Struct({
          componentName: S.String,
          componentTypeId: S.String,
          definedIn: S.optional(S.String),
          description: S.optional(S.String),
          propertyGroups: S.optional(__S(101, __c12, 5)),
          status: __S(91, __c11, 3),
          syncSource: S.optional(S.String),
          componentPath: S.optional(S.String),
        }),
      ).annotate({ identifier: "ComponentSummary" });
    case 7:
      return S.Record(S.String, /*@__PURE__*/ __S(102, __c12, 6).pipe(S.optional));
  }
}
function __c13(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          componentName: S.optional(S.String),
          description: S.optional(S.String),
          componentTypeId: S.optional(S.String),
          status: S.optional(__S(91, __c11, 3)),
          definedIn: S.optional(S.String),
          properties: S.optional(__S(99, __c12, 3)),
          propertyGroups: S.optional(__S(101, __c12, 5)),
          syncSource: S.optional(S.String),
          areAllPropertiesReturned: S.optional(S.Boolean),
          compositeComponents: S.optional(__S(103, __c12, 7)),
          areAllCompositeComponentsReturned: S.optional(S.Boolean),
        }),
      ).annotate({ identifier: "ComponentResponse" });
    case 1:
      return S.Record(S.String, /*@__PURE__*/ __S(104, __c13, 0).pipe(S.optional));
    case 2:
      return S.suspend(() =>
        S.Struct({
          entityId: S.String,
          entityName: S.String,
          arn: S.String,
          status: __S(91, __c11, 3),
          workspaceId: S.String,
          description: S.optional(S.String),
          components: S.optional(__S(105, __c13, 1)),
          parentEntityId: S.String,
          hasChildEntities: S.Boolean,
          creationDateTime: S.Date.pipe(T.TimestampFormat("epoch-seconds")),
          updateDateTime: S.Date.pipe(T.TimestampFormat("epoch-seconds")),
          syncSource: S.optional(S.String),
          areAllComponentsReturned: S.optional(S.Boolean),
        }),
      ).annotate({ identifier: "GetEntityResponse" });
    case 3:
      return S.suspend(() =>
        S.Struct({
          metadataTransferJobId: S.String.pipe(T.HttpLabel("metadataTransferJobId")),
        }).pipe(
          T.all(
            T.Http({ method: "GET", uri: "/metadata-transfer-jobs/{metadataTransferJobId}" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "GetMetadataTransferJobRequest",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({
          metadataTransferJobId: S.String,
          arn: S.String,
          description: S.optional(S.String),
          sources: __S(59, __c7, 3),
          destination: __S(62, __c7, 6),
          metadataTransferJobRole: S.String,
          reportUrl: S.optional(S.String),
          creationDateTime: S.Date.pipe(T.TimestampFormat("epoch-seconds")),
          updateDateTime: S.Date.pipe(T.TimestampFormat("epoch-seconds")),
          status: __S(18, __c2, 2),
          progress: S.optional(__S(19, __c2, 3)),
        }),
      ).annotate({
        identifier: "GetMetadataTransferJobResponse",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({}).pipe(
          T.all(T.Http({ method: "GET", uri: "/pricingplan" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({ identifier: "GetPricingPlanRequest" });
    case 6:
      return S.suspend(() =>
        S.Struct({ bundleNames: __S(25, __c3, 1), pricingTier: S.optional(S.String) }),
      ).annotate({ identifier: "BundleInformation" });
    case 7:
      return S.suspend(() =>
        S.Struct({
          billableEntityCount: S.optional(S.Number),
          bundleInformation: S.optional(__S(110, __c13, 6)),
          effectiveDateTime: S.Date.pipe(T.TimestampFormat("epoch-seconds")),
          pricingMode: S.String,
          updateDateTime: S.Date.pipe(T.TimestampFormat("epoch-seconds")),
          updateReason: S.String,
        }),
      ).annotate({ identifier: "PricingPlan" });
  }
}
function __c14(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          currentPricingPlan: __S(111, __c13, 7),
          pendingPricingPlan: S.optional(__S(111, __c13, 7)),
        }),
      ).annotate({ identifier: "GetPricingPlanResponse" });
    case 1:
      return S.suspend(() =>
        S.Struct({ order: S.optional(S.String), propertyName: S.String }),
      ).annotate({ identifier: "OrderBy" });
    case 2:
      return S.Array(__S(113, __c14, 1));
    case 3:
      return S.suspend(() =>
        S.Struct({
          propertyName: S.optional(S.String),
          operator: S.optional(S.String),
          value: S.optional(__S(5, __c0, 5)),
        }),
      ).annotate({ identifier: "PropertyFilter" });
    case 4:
      return S.Array(__S(115, __c14, 3));
    case 5:
      return S.suspend(() =>
        S.Struct({
          orderBy: S.optional(__S(114, __c14, 2)),
          propertyFilters: S.optional(__S(116, __c14, 4)),
        }),
      ).annotate({ identifier: "TabularConditions" });
    case 6:
      return S.suspend(() =>
        S.Struct({
          componentName: S.optional(S.String),
          componentPath: S.optional(S.String),
          componentTypeId: S.optional(S.String),
          entityId: S.optional(S.String),
          selectedProperties: __S(25, __c3, 1),
          workspaceId: S.String.pipe(T.HttpLabel("workspaceId")),
          maxResults: S.optional(S.Number),
          nextToken: S.optional(S.String),
          propertyGroupName: S.optional(S.String),
          tabularConditions: S.optional(__S(117, __c14, 5)),
        }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/workspaces/{workspaceId}/entity-properties/value" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "GetPropertyValueRequest" });
    case 7:
      return S.suspend(() =>
        S.Struct({
          propertyReference: __S(1, __c0, 1),
          propertyValue: S.optional(__S(5, __c0, 5)),
        }),
      ).annotate({ identifier: "PropertyLatestValue" });
  }
}
function __c15(j: number): any {
  switch (j) {
    case 0:
      return S.Record(S.String, /*@__PURE__*/ __S(119, __c14, 7).pipe(S.optional));
    case 1:
      return S.Record(
        S.String,
        /*@__PURE__*/ S.suspend((): S.Schema<DataValue> => __S(5, __c0, 5))
          .annotate({ identifier: "DataValue" })
          .pipe(S.optional),
      );
    case 2:
      return S.Array(__S(121, __c15, 1));
    case 3:
      return S.Array(__S(122, __c15, 2));
    case 4:
      return S.suspend(() =>
        S.Struct({
          propertyValues: S.optional(__S(120, __c15, 0)),
          nextToken: S.optional(S.String),
          tabularPropertyValues: S.optional(__S(123, __c15, 3)),
        }),
      ).annotate({ identifier: "GetPropertyValueResponse" });
    case 5:
      return S.suspend(() =>
        S.Struct({
          interpolationType: S.optional(S.String),
          intervalInSeconds: S.optional(S.Number),
        }),
      ).annotate({ identifier: "InterpolationParameters" });
    case 6:
      return S.suspend(() =>
        S.Struct({
          workspaceId: S.String.pipe(T.HttpLabel("workspaceId")),
          entityId: S.optional(S.String),
          componentName: S.optional(S.String),
          componentPath: S.optional(S.String),
          componentTypeId: S.optional(S.String),
          selectedProperties: __S(25, __c3, 1),
          propertyFilters: S.optional(__S(116, __c14, 4)),
          startDateTime: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          endDateTime: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          interpolation: S.optional(__S(125, __c15, 5)),
          nextToken: S.optional(S.String),
          maxResults: S.optional(S.Number),
          orderByTime: S.optional(S.String),
          startTime: S.optional(S.String),
          endTime: S.optional(S.String),
        }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/workspaces/{workspaceId}/entity-properties/history" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "GetPropertyValueHistoryRequest",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({ entityPropertyReference: __S(1, __c0, 1), values: S.optional(__S(7, __c0, 7)) }),
      ).annotate({ identifier: "PropertyValueHistory" });
  }
}
function __c16(j: number): any {
  switch (j) {
    case 0:
      return S.Array(__S(127, __c15, 7));
    case 1:
      return S.suspend(() =>
        S.Struct({ propertyValues: __S(128, __c16, 0), nextToken: S.optional(S.String) }),
      ).annotate({
        identifier: "GetPropertyValueHistoryResponse",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({
          workspaceId: S.String.pipe(T.HttpLabel("workspaceId")),
          sceneId: S.String.pipe(T.HttpLabel("sceneId")),
        }).pipe(
          T.all(
            T.Http({ method: "GET", uri: "/workspaces/{workspaceId}/scenes/{sceneId}" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "GetSceneRequest" });
    case 3:
      return S.suspend(() =>
        S.Struct({
          workspaceId: S.String,
          sceneId: S.String,
          contentLocation: S.String,
          arn: S.String,
          creationDateTime: S.Date.pipe(T.TimestampFormat("epoch-seconds")),
          updateDateTime: S.Date.pipe(T.TimestampFormat("epoch-seconds")),
          description: S.optional(S.String),
          capabilities: S.optional(__S(25, __c3, 1)),
          sceneMetadata: S.optional(__S(0, __c0, 0)),
          generatedSceneMetadata: S.optional(__S(0, __c0, 0)),
          error: S.optional(__S(17, __c2, 1)),
        }),
      ).annotate({ identifier: "GetSceneResponse" });
    case 4:
      return S.suspend(() =>
        S.Struct({
          syncSource: S.String.pipe(T.HttpLabel("syncSource")),
          workspaceId: S.optional(S.String).pipe(T.HttpQuery("workspace")),
        }).pipe(
          T.all(
            T.Http({ method: "GET", uri: "/sync-jobs/{syncSource}" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "GetSyncJobRequest" });
    case 5:
      return S.suspend(() =>
        S.Struct({
          arn: S.String,
          workspaceId: S.String,
          syncSource: S.String,
          syncRole: S.String,
          status: __S(91, __c11, 3),
          creationDateTime: S.Date.pipe(T.TimestampFormat("epoch-seconds")),
          updateDateTime: S.Date.pipe(T.TimestampFormat("epoch-seconds")),
        }),
      ).annotate({ identifier: "GetSyncJobResponse" });
    case 6:
      return S.suspend(() =>
        S.Struct({ workspaceId: S.String.pipe(T.HttpLabel("workspaceId")) }).pipe(
          T.all(
            T.Http({ method: "GET", uri: "/workspaces/{workspaceId}" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "GetWorkspaceRequest" });
    case 7:
      return S.suspend(() =>
        S.Struct({
          workspaceId: S.String,
          arn: S.String,
          description: S.optional(S.String),
          linkedServices: S.optional(__S(25, __c3, 1)),
          s3Location: S.optional(S.String),
          role: S.optional(S.String),
          creationDateTime: S.Date.pipe(T.TimestampFormat("epoch-seconds")),
          updateDateTime: S.Date.pipe(T.TimestampFormat("epoch-seconds")),
        }),
      ).annotate({ identifier: "GetWorkspaceResponse" });
  }
}
function __c17(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          workspaceId: S.String.pipe(T.HttpLabel("workspaceId")),
          entityId: S.String.pipe(T.HttpLabel("entityId")),
          componentPath: S.optional(S.String),
          maxResults: S.optional(S.Number),
          nextToken: S.optional(S.String),
        }).pipe(
          T.all(
            T.Http({
              method: "POST",
              uri: "/workspaces/{workspaceId}/entities/{entityId}/components-list",
            }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "ListComponentsRequest" });
    case 1:
      return S.Array(__S(102, __c12, 6));
    case 2:
      return S.suspend(() =>
        S.Struct({ componentSummaries: __S(137, __c17, 1), nextToken: S.optional(S.String) }),
      ).annotate({ identifier: "ListComponentsResponse" });
    case 3:
      return S.Union([
        /*@__PURE__*/ S.Struct({ extendsFrom: S.String }),
        /*@__PURE__*/ S.Struct({ namespace: S.String }),
        /*@__PURE__*/ S.Struct({ isAbstract: S.Boolean }),
      ]);
    case 4:
      return S.Array(__S(139, __c17, 3));
    case 5:
      return S.suspend(() =>
        S.Struct({
          workspaceId: S.String.pipe(T.HttpLabel("workspaceId")),
          filters: S.optional(__S(140, __c17, 4)),
          nextToken: S.optional(S.String),
          maxResults: S.optional(S.Number),
        }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/workspaces/{workspaceId}/component-types-list" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "ListComponentTypesRequest",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({
          arn: S.String,
          componentTypeId: S.String,
          creationDateTime: S.Date.pipe(T.TimestampFormat("epoch-seconds")),
          updateDateTime: S.Date.pipe(T.TimestampFormat("epoch-seconds")),
          description: S.optional(S.String),
          status: S.optional(__S(91, __c11, 3)),
          componentTypeName: S.optional(S.String),
        }),
      ).annotate({ identifier: "ComponentTypeSummary" });
    case 7:
      return S.Array(__S(142, __c17, 6));
  }
}
function __c18(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          workspaceId: S.String,
          componentTypeSummaries: __S(143, __c17, 7),
          nextToken: S.optional(S.String),
          maxResults: S.optional(S.Number),
        }),
      ).annotate({
        identifier: "ListComponentTypesResponse",
      });
    case 1:
      return S.Union([
        /*@__PURE__*/ S.Struct({ parentEntityId: S.String }),
        /*@__PURE__*/ S.Struct({ componentTypeId: S.String }),
        /*@__PURE__*/ S.Struct({ externalId: S.String }),
      ]);
    case 2:
      return S.Array(__S(145, __c18, 1));
    case 3:
      return S.suspend(() =>
        S.Struct({
          workspaceId: S.String.pipe(T.HttpLabel("workspaceId")),
          filters: S.optional(__S(146, __c18, 2)),
          maxResults: S.optional(S.Number),
          nextToken: S.optional(S.String),
        }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/workspaces/{workspaceId}/entities-list" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "ListEntitiesRequest" });
    case 4:
      return S.suspend(() =>
        S.Struct({
          entityId: S.String,
          entityName: S.String,
          arn: S.String,
          parentEntityId: S.optional(S.String),
          status: __S(91, __c11, 3),
          description: S.optional(S.String),
          hasChildEntities: S.optional(S.Boolean),
          creationDateTime: S.Date.pipe(T.TimestampFormat("epoch-seconds")),
          updateDateTime: S.Date.pipe(T.TimestampFormat("epoch-seconds")),
        }),
      ).annotate({ identifier: "EntitySummary" });
    case 5:
      return S.Array(__S(148, __c18, 4));
    case 6:
      return S.suspend(() =>
        S.Struct({
          entitySummaries: S.optional(__S(149, __c18, 5)),
          nextToken: S.optional(S.String),
        }),
      ).annotate({ identifier: "ListEntitiesResponse" });
    case 7:
      return S.Union([
        /*@__PURE__*/ S.Struct({ workspaceId: S.String }),
        /*@__PURE__*/ S.Struct({ state: S.String }),
      ]);
  }
}
function __c19(j: number): any {
  switch (j) {
    case 0:
      return S.Array(__S(151, __c18, 7));
    case 1:
      return S.suspend(() =>
        S.Struct({
          sourceType: S.String,
          destinationType: S.String,
          filters: S.optional(__S(152, __c19, 0)),
          nextToken: S.optional(S.String),
          maxResults: S.optional(S.Number),
        }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/metadata-transfer-jobs-list" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "ListMetadataTransferJobsRequest",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({
          metadataTransferJobId: S.String,
          arn: S.String,
          creationDateTime: S.Date.pipe(T.TimestampFormat("epoch-seconds")),
          updateDateTime: S.Date.pipe(T.TimestampFormat("epoch-seconds")),
          status: __S(18, __c2, 2),
          progress: S.optional(__S(19, __c2, 3)),
        }),
      ).annotate({
        identifier: "MetadataTransferJobSummary",
      });
    case 3:
      return S.Array(__S(154, __c19, 2));
    case 4:
      return S.suspend(() =>
        S.Struct({
          metadataTransferJobSummaries: __S(155, __c19, 3),
          nextToken: S.optional(S.String),
        }),
      ).annotate({
        identifier: "ListMetadataTransferJobsResponse",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({
          workspaceId: S.String.pipe(T.HttpLabel("workspaceId")),
          componentName: S.optional(S.String),
          componentPath: S.optional(S.String),
          entityId: S.String,
          maxResults: S.optional(S.Number),
          nextToken: S.optional(S.String),
        }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/workspaces/{workspaceId}/properties-list" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "ListPropertiesRequest" });
    case 6:
      return S.suspend(() =>
        S.Struct({
          definition: S.optional(__S(87, __c10, 7)),
          propertyName: S.String,
          value: S.optional(__S(5, __c0, 5)),
          areAllPropertyValuesReturned: S.optional(S.Boolean),
        }),
      ).annotate({ identifier: "PropertySummary" });
    case 7:
      return S.Array(__S(158, __c19, 6));
  }
}
function __c20(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({ propertySummaries: __S(159, __c19, 7), nextToken: S.optional(S.String) }),
      ).annotate({ identifier: "ListPropertiesResponse" });
    case 1:
      return S.suspend(() =>
        S.Struct({
          workspaceId: S.String.pipe(T.HttpLabel("workspaceId")),
          maxResults: S.optional(S.Number),
          nextToken: S.optional(S.String),
        }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/workspaces/{workspaceId}/scenes-list" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "ListScenesRequest" });
    case 2:
      return S.suspend(() =>
        S.Struct({
          sceneId: S.String,
          contentLocation: S.String,
          arn: S.String,
          creationDateTime: S.Date.pipe(T.TimestampFormat("epoch-seconds")),
          updateDateTime: S.Date.pipe(T.TimestampFormat("epoch-seconds")),
          description: S.optional(S.String),
        }),
      ).annotate({ identifier: "SceneSummary" });
    case 3:
      return S.Array(__S(162, __c20, 2));
    case 4:
      return S.suspend(() =>
        S.Struct({
          sceneSummaries: S.optional(__S(163, __c20, 3)),
          nextToken: S.optional(S.String),
        }),
      ).annotate({ identifier: "ListScenesResponse" });
    case 5:
      return S.suspend(() =>
        S.Struct({
          workspaceId: S.String.pipe(T.HttpLabel("workspaceId")),
          maxResults: S.optional(S.Number),
          nextToken: S.optional(S.String),
        }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/workspaces/{workspaceId}/sync-jobs-list" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "ListSyncJobsRequest" });
    case 6:
      return S.suspend(() =>
        S.Struct({
          arn: S.optional(S.String),
          workspaceId: S.optional(S.String),
          syncSource: S.optional(S.String),
          status: S.optional(__S(91, __c11, 3)),
          creationDateTime: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          updateDateTime: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
        }),
      ).annotate({ identifier: "SyncJobSummary" });
    case 7:
      return S.Array(__S(166, __c20, 6));
  }
}
function __c21(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          syncJobSummaries: S.optional(__S(167, __c20, 7)),
          nextToken: S.optional(S.String),
        }),
      ).annotate({ identifier: "ListSyncJobsResponse" });
    case 1:
      return S.Union([
        /*@__PURE__*/ S.Struct({ state: S.String }),
        /*@__PURE__*/ S.Struct({ resourceType: S.String }),
        /*@__PURE__*/ S.Struct({ resourceId: S.String }),
        /*@__PURE__*/ S.Struct({ externalId: S.String }),
      ]);
    case 2:
      return S.Array(__S(169, __c21, 1));
    case 3:
      return S.suspend(() =>
        S.Struct({
          workspaceId: S.String.pipe(T.HttpLabel("workspaceId")),
          syncSource: S.String.pipe(T.HttpLabel("syncSource")),
          filters: S.optional(__S(170, __c21, 2)),
          maxResults: S.optional(S.Number),
          nextToken: S.optional(S.String),
        }).pipe(
          T.all(
            T.Http({
              method: "POST",
              uri: "/workspaces/{workspaceId}/sync-jobs/{syncSource}/resources-list",
            }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "ListSyncResourcesRequest" });
    case 4:
      return S.suspend(() =>
        S.Struct({
          resourceType: S.optional(S.String),
          externalId: S.optional(S.String),
          resourceId: S.optional(S.String),
          status: S.optional(__S(91, __c11, 3)),
          updateDateTime: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
        }),
      ).annotate({ identifier: "SyncResourceSummary" });
    case 5:
      return S.Array(__S(172, __c21, 4));
    case 6:
      return S.suspend(() =>
        S.Struct({
          syncResources: S.optional(__S(173, __c21, 5)),
          nextToken: S.optional(S.String),
        }),
      ).annotate({
        identifier: "ListSyncResourcesResponse",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({
          resourceARN: S.String,
          maxResults: S.optional(S.Number),
          nextToken: S.optional(S.String),
        }).pipe(T.all(T.Http({ method: "POST", uri: "/tags-list" }), svc, auth, proto, ver, rules)),
      ).annotate({
        identifier: "ListTagsForResourceRequest",
      });
  }
}
function __c22(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({ tags: S.optional(__S(30, __c3, 6)), nextToken: S.optional(S.String) }),
      ).annotate({
        identifier: "ListTagsForResourceResponse",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({ maxResults: S.optional(S.Number), nextToken: S.optional(S.String) }).pipe(
          T.all(T.Http({ method: "POST", uri: "/workspaces-list" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({ identifier: "ListWorkspacesRequest" });
    case 2:
      return S.suspend(() =>
        S.Struct({
          workspaceId: S.String,
          arn: S.String,
          description: S.optional(S.String),
          linkedServices: S.optional(__S(25, __c3, 1)),
          creationDateTime: S.Date.pipe(T.TimestampFormat("epoch-seconds")),
          updateDateTime: S.Date.pipe(T.TimestampFormat("epoch-seconds")),
        }),
      ).annotate({ identifier: "WorkspaceSummary" });
    case 3:
      return S.Array(__S(178, __c22, 2));
    case 4:
      return S.suspend(() =>
        S.Struct({
          workspaceSummaries: S.optional(__S(179, __c22, 3)),
          nextToken: S.optional(S.String),
        }),
      ).annotate({ identifier: "ListWorkspacesResponse" });
    case 5:
      return S.suspend(() =>
        S.Struct({ resourceARN: S.String, tags: __S(30, __c3, 6) }).pipe(
          T.all(T.Http({ method: "POST", uri: "/tags" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({ identifier: "TagResourceRequest" });
    case 6:
      return S.suspend(() =>
        S.Struct({
          resourceARN: S.String.pipe(T.HttpQuery("resourceARN")),
          tagKeys: __S(25, __c3, 1).pipe(T.HttpQuery("tagKeys")),
        }).pipe(T.all(T.Http({ method: "DELETE", uri: "/tags" }), svc, auth, proto, ver, rules)),
      ).annotate({ identifier: "UntagResourceRequest" });
    case 7:
      return S.suspend(() =>
        S.Struct({
          workspaceId: S.String.pipe(T.HttpLabel("workspaceId")),
          isSingleton: S.optional(S.Boolean),
          componentTypeId: S.String.pipe(T.HttpLabel("componentTypeId")),
          description: S.optional(S.String),
          propertyDefinitions: S.optional(__S(24, __c3, 0)),
          extendsFrom: S.optional(__S(25, __c3, 1)),
          functions: S.optional(__S(29, __c3, 5)),
          propertyGroups: S.optional(__S(32, __c4, 0)),
          componentTypeName: S.optional(S.String),
          compositeComponentTypes: S.optional(__S(34, __c4, 2)),
        }).pipe(
          T.all(
            T.Http({
              method: "PUT",
              uri: "/workspaces/{workspaceId}/component-types/{componentTypeId}",
            }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "UpdateComponentTypeRequest",
      });
  }
}
function __c23(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          workspaceId: S.String,
          arn: S.String,
          componentTypeId: S.String,
          state: S.String,
        }),
      ).annotate({
        identifier: "UpdateComponentTypeResponse",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({
          updateType: S.optional(S.String),
          description: S.optional(S.String),
          componentTypeId: S.optional(S.String),
          propertyUpdates: S.optional(__S(38, __c4, 6)),
          propertyGroupUpdates: S.optional(__S(40, __c5, 0)),
        }),
      ).annotate({ identifier: "ComponentUpdateRequest" });
    case 2:
      return S.Record(S.String, /*@__PURE__*/ __S(185, __c23, 1).pipe(S.optional));
    case 3:
      return S.suspend(() =>
        S.Struct({
          updateType: S.optional(S.String),
          description: S.optional(S.String),
          propertyUpdates: S.optional(__S(38, __c4, 6)),
          propertyGroupUpdates: S.optional(__S(40, __c5, 0)),
        }),
      ).annotate({
        identifier: "CompositeComponentUpdateRequest",
      });
    case 4:
      return S.Record(S.String, /*@__PURE__*/ __S(187, __c23, 3).pipe(S.optional));
    case 5:
      return S.suspend(() =>
        S.Struct({ updateType: S.String, parentEntityId: S.optional(S.String) }),
      ).annotate({
        identifier: "ParentEntityUpdateRequest",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({
          workspaceId: S.String.pipe(T.HttpLabel("workspaceId")),
          entityId: S.String.pipe(T.HttpLabel("entityId")),
          entityName: S.optional(S.String),
          description: S.optional(S.String),
          componentUpdates: S.optional(__S(186, __c23, 2)),
          compositeComponentUpdates: S.optional(__S(188, __c23, 4)),
          parentEntityUpdate: S.optional(__S(189, __c23, 5)),
        }).pipe(
          T.all(
            T.Http({ method: "PUT", uri: "/workspaces/{workspaceId}/entities/{entityId}" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "UpdateEntityRequest" });
    case 7:
      return S.suspend(() =>
        S.Struct({
          updateDateTime: S.Date.pipe(T.TimestampFormat("epoch-seconds")),
          state: S.String,
        }),
      ).annotate({ identifier: "UpdateEntityResponse" });
  }
}
function __c24(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({ pricingMode: S.String, bundleNames: S.optional(__S(25, __c3, 1)) }).pipe(
          T.all(T.Http({ method: "POST", uri: "/pricingplan" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({ identifier: "UpdatePricingPlanRequest" });
    case 1:
      return S.suspend(() =>
        S.Struct({
          currentPricingPlan: __S(111, __c13, 7),
          pendingPricingPlan: S.optional(__S(111, __c13, 7)),
        }),
      ).annotate({
        identifier: "UpdatePricingPlanResponse",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({
          workspaceId: S.String.pipe(T.HttpLabel("workspaceId")),
          sceneId: S.String.pipe(T.HttpLabel("sceneId")),
          contentLocation: S.optional(S.String),
          description: S.optional(S.String),
          capabilities: S.optional(__S(25, __c3, 1)),
          sceneMetadata: S.optional(__S(0, __c0, 0)),
        }).pipe(
          T.all(
            T.Http({ method: "PUT", uri: "/workspaces/{workspaceId}/scenes/{sceneId}" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "UpdateSceneRequest" });
    case 3:
      return S.suspend(() =>
        S.Struct({ updateDateTime: S.Date.pipe(T.TimestampFormat("epoch-seconds")) }),
      ).annotate({ identifier: "UpdateSceneResponse" });
    case 4:
      return S.suspend(() =>
        S.Struct({
          workspaceId: S.String.pipe(T.HttpLabel("workspaceId")),
          description: S.optional(S.String),
          role: S.optional(S.String),
          s3Location: S.optional(S.String),
        }).pipe(
          T.all(
            T.Http({ method: "PUT", uri: "/workspaces/{workspaceId}" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "UpdateWorkspaceRequest" });
  }
}

// Schema table: entry i is schema j of builder f, made on first reach.
function __S(i: number, f: (j: number) => unknown, j: number): any {
  return (__s[i] ??= __L.at(f, j));
}
