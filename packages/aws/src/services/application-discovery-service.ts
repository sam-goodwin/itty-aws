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
const ns = /*@__PURE__*/ T.XmlNamespace("http://ec2.amazon.com/awsposiedon/V2015_11_01/");
const svc = /*@__PURE__*/ T.AwsApiService({
  sdkId: "Application Discovery Service",
  serviceShapeName: "AWSPoseidonService_V2015_11_01",
});
const auth = /*@__PURE__*/ T.AwsAuthSigv4({ name: "discovery" });
const ver = /*@__PURE__*/ T.ServiceVersion("2015-11-01");
const proto = /*@__PURE__*/ T.AwsProtocolsAwsJson1_1();
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
              `https://discovery-fips.${Region}.${_.getAttr(PartitionResult, "dualStackDnsSuffix")}`,
            );
          }
          return err(
            "FIPS and DualStack are enabled, but this partition does not support one or both",
          );
        }
        if (UseFIPS === true) {
          if (_.getAttr(PartitionResult, "supportsFIPS") === true) {
            return e(`https://discovery-fips.${Region}.${_.getAttr(PartitionResult, "dnsSuffix")}`);
          }
          return err("FIPS is enabled but this partition does not support FIPS");
        }
        if (UseDualStack === true) {
          if (true === _.getAttr(PartitionResult, "supportsDualStack")) {
            return e(
              `https://discovery.${Region}.${_.getAttr(PartitionResult, "dualStackDnsSuffix")}`,
            );
          }
          return err("DualStack is enabled but this partition does not support DualStack");
        }
        return e(`https://discovery.${Region}.${_.getAttr(PartitionResult, "dnsSuffix")}`);
      }
    }
  }
  return err("Invalid Configuration: Missing Region");
});

export class AuthorizationErrorException
  extends /*@__PURE__*/ S.TaggedError<AuthorizationErrorException>()(
    "AuthorizationErrorException",
    { message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()) },
    /*@__PURE__*/ T.HttpError(403),
  ).pipe(C.withAuthError) {}
export class ConflictErrorException
  extends /*@__PURE__*/ S.TaggedError<ConflictErrorException>()(
    "ConflictErrorException",
    { message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()) },
    /*@__PURE__*/ T.HttpError(409),
  ).pipe(C.withConflictError) {}
export class HomeRegionNotSetException
  extends /*@__PURE__*/ S.TaggedError<HomeRegionNotSetException>()(
    "HomeRegionNotSetException",
    { message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()) },
    /*@__PURE__*/ T.HttpError(400),
  ).pipe(C.withBadRequestError) {}
export class InvalidParameterException
  extends /*@__PURE__*/ S.TaggedError<InvalidParameterException>()(
    "InvalidParameterException",
    { message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()) },
    /*@__PURE__*/ T.HttpError(400),
  ).pipe(C.withBadRequestError) {}
export class InvalidParameterValueException
  extends /*@__PURE__*/ S.TaggedError<InvalidParameterValueException>()(
    "InvalidParameterValueException",
    { message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()) },
    /*@__PURE__*/ T.HttpError(400),
  ).pipe(C.withBadRequestError) {}
export class LimitExceededException
  extends /*@__PURE__*/ S.TaggedError<LimitExceededException>()(
    "LimitExceededException",
    { message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()) },
    /*@__PURE__*/ T.HttpError(400),
  ).pipe(C.withBadRequestError) {}
export class OperationNotPermittedException
  extends /*@__PURE__*/ S.TaggedError<OperationNotPermittedException>()(
    "OperationNotPermittedException",
    { message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()) },
    /*@__PURE__*/ T.HttpError(429),
  ).pipe(C.withThrottlingError) {}
export class ResourceInUseException
  extends /*@__PURE__*/ S.TaggedError<ResourceInUseException>()(
    "ResourceInUseException",
    { message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()) },
    /*@__PURE__*/ T.HttpError(400),
  ).pipe(C.withBadRequestError) {}
export class ResourceNotFoundException
  extends /*@__PURE__*/ S.TaggedError<ResourceNotFoundException>()(
    "ResourceNotFoundException",
    { message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()) },
    /*@__PURE__*/ T.HttpError(400),
  ).pipe(C.withBadRequestError) {}
export class ServerInternalErrorException
  extends /*@__PURE__*/ S.TaggedError<ServerInternalErrorException>()(
    "ServerInternalErrorException",
    { message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()) },
    /*@__PURE__*/ T.HttpError(500),
  ).pipe(C.withServerError) {}
export type ApplicationId = string;
export type ConfigurationId = string;
export type ConfigurationIdList = string[];
export interface AssociateConfigurationItemsToApplicationRequest {
  applicationConfigurationId: string;
  configurationIds: string[];
}
export interface AssociateConfigurationItemsToApplicationResponse {}
export type AgentId = string;
export interface DeleteAgent {
  agentId: string;
  force?: boolean;
}
export type DeleteAgents = DeleteAgent[];
export interface BatchDeleteAgentsRequest {
  deleteAgents: DeleteAgent[];
}
export type DeleteAgentErrorCode =
  | "NOT_FOUND"
  | "INTERNAL_SERVER_ERROR"
  | "AGENT_IN_USE"
  | (string & {});
export interface BatchDeleteAgentError {
  agentId: string;
  errorMessage: string;
  errorCode: DeleteAgentErrorCode;
}
export type BatchDeleteAgentErrors = BatchDeleteAgentError[];
export interface BatchDeleteAgentsResponse {
  errors?: BatchDeleteAgentError[];
}
export type ImportTaskIdentifier = string;
export type ToDeleteIdentifierList = string[];
export interface BatchDeleteImportDataRequest {
  importTaskIds: string[];
  deleteHistory?: boolean;
}
export type BatchDeleteImportDataErrorCode =
  | "NOT_FOUND"
  | "INTERNAL_SERVER_ERROR"
  | "OVER_LIMIT"
  | (string & {});
export type BatchDeleteImportDataErrorDescription = string;
export interface BatchDeleteImportDataError_ {
  importTaskId?: string;
  errorCode?: BatchDeleteImportDataErrorCode;
  errorDescription?: string;
}
export type BatchDeleteImportDataErrorList = BatchDeleteImportDataError_[];
export interface BatchDeleteImportDataResponse {
  errors?: BatchDeleteImportDataError_[];
}
export type ApplicationName = string;
export type ApplicationDescription = string;
export type ApplicationWave = string;
export interface CreateApplicationRequest {
  name: string;
  description?: string;
  wave?: string;
}
export interface CreateApplicationResponse {
  configurationId?: string;
}
export type TagKey = string;
export type TagValue = string;
export interface Tag {
  key: string;
  value: string;
}
export type TagSet = Tag[];
export interface CreateTagsRequest {
  configurationIds: string[];
  tags: Tag[];
}
export interface CreateTagsResponse {}
export type ApplicationIdsList = string[];
export interface DeleteApplicationsRequest {
  configurationIds: string[];
}
export interface DeleteApplicationsResponse {}
export interface DeleteTagsRequest {
  configurationIds: string[];
  tags?: Tag[];
}
export interface DeleteTagsResponse {}
export type AgentIds = string[];
export type FilterValue = string;
export type FilterValues = string[];
export type Condition = string;
export interface Filter {
  name: string;
  values: string[];
  condition: string;
}
export type Filters = Filter[];
export type NextToken = string;
export interface DescribeAgentsRequest {
  agentIds?: string[];
  filters?: Filter[];
  maxResults?: number;
  nextToken?: string;
}
export interface AgentNetworkInfo {
  ipAddress?: string;
  macAddress?: string;
}
export type AgentNetworkInfoList = AgentNetworkInfo[];
export type AgentStatus =
  | "HEALTHY"
  | "UNHEALTHY"
  | "RUNNING"
  | "UNKNOWN"
  | "BLACKLISTED"
  | "SHUTDOWN"
  | (string & {});
export interface AgentInfo {
  agentId?: string;
  hostName?: string;
  agentNetworkInfoList?: AgentNetworkInfo[];
  connectorId?: string;
  version?: string;
  health?: AgentStatus;
  lastHealthPingTime?: string;
  collectionStatus?: string;
  agentType?: string;
  registeredTime?: string;
}
export type AgentsInfo = AgentInfo[];
export interface DescribeAgentsResponse {
  agentsInfo?: AgentInfo[];
  nextToken?: string;
}
export type UUID = string;
export interface DescribeBatchDeleteConfigurationTaskRequest {
  taskId: string;
}
export type BatchDeleteConfigurationTaskStatus =
  | "INITIALIZING"
  | "VALIDATING"
  | "DELETING"
  | "COMPLETED"
  | "FAILED"
  | (string & {});
export type DeletionConfigurationItemType = "SERVER" | (string & {});
export type ErrorStatusCode = number;
export type ErrorMessage = string;
export interface FailedConfiguration {
  configurationId?: string;
  errorStatusCode?: number;
  errorMessage?: string;
}
export type FailedConfigurationList = FailedConfiguration[];
export type WarningCode = number;
export type WarningText = string;
export interface DeletionWarning {
  configurationId?: string;
  warningCode?: number;
  warningText?: string;
}
export type DeletionWarningsList = DeletionWarning[];
export interface BatchDeleteConfigurationTask {
  taskId?: string;
  status?: BatchDeleteConfigurationTaskStatus;
  startTime?: Date;
  endTime?: Date;
  configurationType?: DeletionConfigurationItemType;
  requestedConfigurations?: string[];
  deletedConfigurations?: string[];
  failedConfigurations?: FailedConfiguration[];
  deletionWarnings?: DeletionWarning[];
}
export interface DescribeBatchDeleteConfigurationTaskResponse {
  task?: BatchDeleteConfigurationTask;
}
export interface DescribeConfigurationsRequest {
  configurationIds: string[];
}
export type DescribeConfigurationsAttribute = { [key: string]: string | undefined };
export type DescribeConfigurationsAttributes = { [key: string]: string | undefined }[];
export interface DescribeConfigurationsResponse {
  configurations?: { [key: string]: string | undefined }[];
}
export type ConfigurationsExportId = string;
export type ContinuousExportIds = string[];
export type DescribeContinuousExportsMaxResults = number;
export interface DescribeContinuousExportsRequest {
  exportIds?: string[];
  maxResults?: number;
  nextToken?: string;
}
export type ContinuousExportStatus =
  | "START_IN_PROGRESS"
  | "START_FAILED"
  | "ACTIVE"
  | "ERROR"
  | "STOP_IN_PROGRESS"
  | "STOP_FAILED"
  | "INACTIVE"
  | (string & {});
export type StringMax255 = string;
export type S3Bucket = string;
export type DataSource = "AGENT" | (string & {});
export type DatabaseName = string;
export type SchemaStorageConfig = { [key: string]: string | undefined };
export interface ContinuousExportDescription {
  exportId?: string;
  status?: ContinuousExportStatus;
  statusDetail?: string;
  s3Bucket?: string;
  startTime?: Date;
  stopTime?: Date;
  dataSource?: DataSource;
  schemaStorageConfig?: { [key: string]: string | undefined };
}
export type ContinuousExportDescriptions = ContinuousExportDescription[];
export interface DescribeContinuousExportsResponse {
  descriptions?: ContinuousExportDescription[];
  nextToken?: string;
}
export type ExportIds = string[];
export interface DescribeExportConfigurationsRequest {
  exportIds?: string[];
  maxResults?: number;
  nextToken?: string;
}
export type ExportStatus = "FAILED" | "SUCCEEDED" | "IN_PROGRESS" | (string & {});
export type ExportStatusMessage = string;
export type ConfigurationsDownloadUrl = string;
export type ExportRequestTime = Date;
export interface ExportInfo {
  exportId: string;
  exportStatus: ExportStatus;
  statusMessage: string;
  configurationsDownloadUrl?: string;
  exportRequestTime: Date;
  isTruncated?: boolean;
  requestedStartTime?: Date;
  requestedEndTime?: Date;
}
export type ExportsInfo = ExportInfo[];
export interface DescribeExportConfigurationsResponse {
  exportsInfo?: ExportInfo[];
  nextToken?: string;
}
export type FilterName = string;
export interface ExportFilter {
  name: string;
  values: string[];
  condition: string;
}
export type ExportFilters = ExportFilter[];
export interface DescribeExportTasksRequest {
  exportIds?: string[];
  filters?: ExportFilter[];
  maxResults?: number;
  nextToken?: string;
}
export interface DescribeExportTasksResponse {
  exportsInfo?: ExportInfo[];
  nextToken?: string;
}
export type ImportTaskFilterName =
  | "IMPORT_TASK_ID"
  | "STATUS"
  | "NAME"
  | "FILE_CLASSIFICATION"
  | (string & {});
export type ImportTaskFilterValue = string;
export type ImportTaskFilterValueList = string[];
export interface ImportTaskFilter {
  name?: ImportTaskFilterName;
  values?: string[];
}
export type DescribeImportTasksFilterList = ImportTaskFilter[];
export type DescribeImportTasksMaxResults = number;
export interface DescribeImportTasksRequest {
  filters?: ImportTaskFilter[];
  maxResults?: number;
  nextToken?: string;
}
export type ClientRequestToken = string;
export type ImportTaskName = string;
export type ImportURL = string;
export type ImportStatus =
  | "IMPORT_IN_PROGRESS"
  | "IMPORT_COMPLETE"
  | "IMPORT_COMPLETE_WITH_ERRORS"
  | "IMPORT_FAILED"
  | "IMPORT_FAILED_SERVER_LIMIT_EXCEEDED"
  | "IMPORT_FAILED_RECORD_LIMIT_EXCEEDED"
  | "IMPORT_FAILED_UNSUPPORTED_FILE_TYPE"
  | "DELETE_IN_PROGRESS"
  | "DELETE_COMPLETE"
  | "DELETE_FAILED"
  | "DELETE_FAILED_LIMIT_EXCEEDED"
  | "INTERNAL_ERROR"
  | (string & {});
export type FileClassification =
  | "MODELIZEIT_EXPORT"
  | "RVTOOLS_EXPORT"
  | "VMWARE_NSX_EXPORT"
  | "IMPORT_TEMPLATE"
  | (string & {});
export type S3PresignedUrl = string;
export interface ImportTask {
  importTaskId?: string;
  clientRequestToken?: string;
  name?: string;
  importUrl?: string;
  status?: ImportStatus;
  importRequestTime?: Date;
  importCompletionTime?: Date;
  importDeletedTime?: Date;
  fileClassification?: FileClassification;
  serverImportSuccess?: number;
  serverImportFailure?: number;
  applicationImportSuccess?: number;
  applicationImportFailure?: number;
  errorsAndFailedEntriesZip?: string;
}
export type ImportTaskList = ImportTask[];
export interface DescribeImportTasksResponse {
  nextToken?: string;
  tasks?: ImportTask[];
}
export interface TagFilter {
  name: string;
  values: string[];
}
export type TagFilters = TagFilter[];
export interface DescribeTagsRequest {
  filters?: TagFilter[];
  maxResults?: number;
  nextToken?: string;
}
export type ConfigurationItemType =
  | "SERVER"
  | "PROCESS"
  | "CONNECTION"
  | "APPLICATION"
  | (string & {});
export interface ConfigurationTag {
  configurationType?: ConfigurationItemType;
  configurationId?: string;
  key?: string;
  value?: string;
  timeOfCreation?: Date;
}
export type ConfigurationTagSet = ConfigurationTag[];
export interface DescribeTagsResponse {
  tags?: ConfigurationTag[];
  nextToken?: string;
}
export interface DisassociateConfigurationItemsFromApplicationRequest {
  applicationConfigurationId: string;
  configurationIds: string[];
}
export interface DisassociateConfigurationItemsFromApplicationResponse {}
export interface ExportConfigurationsRequest {}
export interface ExportConfigurationsResponse {
  exportId?: string;
}
export interface GetDiscoverySummaryRequest {}
export interface CustomerAgentInfo {
  activeAgents: number;
  healthyAgents: number;
  blackListedAgents: number;
  shutdownAgents: number;
  unhealthyAgents: number;
  totalAgents: number;
  unknownAgents: number;
}
export interface CustomerConnectorInfo {
  activeConnectors: number;
  healthyConnectors: number;
  blackListedConnectors: number;
  shutdownConnectors: number;
  unhealthyConnectors: number;
  totalConnectors: number;
  unknownConnectors: number;
}
export interface CustomerMeCollectorInfo {
  activeMeCollectors: number;
  healthyMeCollectors: number;
  denyListedMeCollectors: number;
  shutdownMeCollectors: number;
  unhealthyMeCollectors: number;
  totalMeCollectors: number;
  unknownMeCollectors: number;
}
export interface CustomerAgentlessCollectorInfo {
  activeAgentlessCollectors: number;
  healthyAgentlessCollectors: number;
  denyListedAgentlessCollectors: number;
  shutdownAgentlessCollectors: number;
  unhealthyAgentlessCollectors: number;
  totalAgentlessCollectors: number;
  unknownAgentlessCollectors: number;
}
export interface GetDiscoverySummaryResponse {
  servers?: number;
  applications?: number;
  serversMappedToApplications?: number;
  serversMappedtoTags?: number;
  agentSummary?: CustomerAgentInfo;
  connectorSummary?: CustomerConnectorInfo;
  meCollectorSummary?: CustomerMeCollectorInfo;
  agentlessCollectorSummary?: CustomerAgentlessCollectorInfo;
}
export type OrderByElementFieldName = string;
export type OrderString = "ASC" | "DESC" | (string & {});
export interface OrderByElement {
  fieldName: string;
  sortOrder?: OrderString;
}
export type OrderByList = OrderByElement[];
export interface ListConfigurationsRequest {
  configurationType: ConfigurationItemType;
  filters?: Filter[];
  maxResults?: number;
  nextToken?: string;
  orderBy?: OrderByElement[];
}
export type Configuration = { [key: string]: string | undefined };
export type Configurations = { [key: string]: string | undefined }[];
export interface ListConfigurationsResponse {
  configurations?: { [key: string]: string | undefined }[];
  nextToken?: string;
}
export interface ListServerNeighborsRequest {
  configurationId: string;
  portInformationNeeded?: boolean;
  neighborConfigurationIds?: string[];
  maxResults?: number;
  nextToken?: string;
}
export type BoxedInteger = number;
export interface NeighborConnectionDetail {
  sourceServerId: string;
  destinationServerId: string;
  destinationPort?: number;
  transportProtocol?: string;
  connectionsCount: number;
}
export type NeighborDetailsList = NeighborConnectionDetail[];
export interface ListServerNeighborsResponse {
  neighbors: NeighborConnectionDetail[];
  nextToken?: string;
  knownDependencyCount?: number;
}
export interface StartBatchDeleteConfigurationTaskRequest {
  configurationType: DeletionConfigurationItemType;
  configurationIds: string[];
}
export interface StartBatchDeleteConfigurationTaskResponse {
  taskId?: string;
}
export interface StartContinuousExportRequest {}
export interface StartContinuousExportResponse {
  exportId?: string;
  s3Bucket?: string;
  startTime?: Date;
  dataSource?: DataSource;
  schemaStorageConfig?: { [key: string]: string | undefined };
}
export interface StartDataCollectionByAgentIdsRequest {
  agentIds: string[];
}
export interface AgentConfigurationStatus {
  agentId?: string;
  operationSucceeded?: boolean;
  description?: string;
}
export type AgentConfigurationStatusList = AgentConfigurationStatus[];
export interface StartDataCollectionByAgentIdsResponse {
  agentsConfigurationStatus?: AgentConfigurationStatus[];
}
export type ExportDataFormat = "CSV" | (string & {});
export type ExportDataFormats = ExportDataFormat[];
export type ExportEnabled = boolean;
export type UsageMetricBasisName = string;
export type UsageMetricPercentageAdjust = number;
export interface UsageMetricBasis {
  name?: string;
  percentageAdjust?: number;
}
export type Tenancy = "DEDICATED" | "SHARED" | (string & {});
export type EC2InstanceType = string;
export type ExcludedInstanceTypes = string[];
export type UserPreferredRegion = string;
export type PurchasingOption = "ALL_UPFRONT" | "PARTIAL_UPFRONT" | "NO_UPFRONT" | (string & {});
export type OfferingClass = "STANDARD" | "CONVERTIBLE" | (string & {});
export type TermLength = "ONE_YEAR" | "THREE_YEAR" | (string & {});
export interface ReservedInstanceOptions {
  purchasingOption: PurchasingOption;
  offeringClass: OfferingClass;
  termLength: TermLength;
}
export interface Ec2RecommendationsExportPreferences {
  enabled?: boolean;
  cpuPerformanceMetricBasis?: UsageMetricBasis;
  ramPerformanceMetricBasis?: UsageMetricBasis;
  tenancy?: Tenancy;
  excludedInstanceTypes?: string[];
  preferredRegion?: string;
  reservedInstanceOptions?: ReservedInstanceOptions;
}
export type ExportPreferences = {
  ec2RecommendationsPreferences: Ec2RecommendationsExportPreferences;
};
export interface StartExportTaskRequest {
  exportDataFormat?: ExportDataFormat[];
  filters?: ExportFilter[];
  startTime?: Date;
  endTime?: Date;
  preferences?: ExportPreferences;
}
export interface StartExportTaskResponse {
  exportId?: string;
}
export interface StartImportTaskRequest {
  clientRequestToken?: string;
  name: string;
  importUrl: string;
}
export interface StartImportTaskResponse {
  task?: ImportTask;
}
export interface StopContinuousExportRequest {
  exportId: string;
}
export interface StopContinuousExportResponse {
  startTime?: Date;
  stopTime?: Date;
}
export interface StopDataCollectionByAgentIdsRequest {
  agentIds: string[];
}
export interface StopDataCollectionByAgentIdsResponse {
  agentsConfigurationStatus?: AgentConfigurationStatus[];
}
export interface UpdateApplicationRequest {
  configurationId: string;
  name?: string;
  description?: string;
  wave?: string;
}
export interface UpdateApplicationResponse {}
export type Message = string;
export type AssociateConfigurationItemsToApplicationError =
  | AuthorizationErrorException
  | HomeRegionNotSetException
  | InvalidParameterException
  | InvalidParameterValueException
  | ServerInternalErrorException
  | CommonErrors;
/**
 * Associates one or more configuration items with an application.
 */
export const associateConfigurationItemsToApplication: API.OperationMethod<
  AssociateConfigurationItemsToApplicationRequest,
  AssociateConfigurationItemsToApplicationResponse,
  AssociateConfigurationItemsToApplicationError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(1) as any as S.Schema<AssociateConfigurationItemsToApplicationRequest>,
  output: __S(2) as any as S.Schema<AssociateConfigurationItemsToApplicationResponse>,
  errors: [
    AuthorizationErrorException,
    HomeRegionNotSetException,
    InvalidParameterException,
    InvalidParameterValueException,
    ServerInternalErrorException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "AssociateConfigurationItemsToApplication",
}));

export type BatchDeleteAgentsError =
  | AuthorizationErrorException
  | InvalidParameterException
  | InvalidParameterValueException
  | ServerInternalErrorException
  | CommonErrors;
/**
 * Deletes one or more agents or collectors as specified by ID. Deleting an agent or collector does not
 * delete the previously discovered data.
 * To delete the data collected, use `StartBatchDeleteConfigurationTask`.
 */
export const batchDeleteAgents: API.OperationMethod<
  BatchDeleteAgentsRequest,
  BatchDeleteAgentsResponse,
  BatchDeleteAgentsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(5) as any as S.Schema<BatchDeleteAgentsRequest>,
  output: __S(8) as any as S.Schema<BatchDeleteAgentsResponse>,
  errors: [
    AuthorizationErrorException,
    InvalidParameterException,
    InvalidParameterValueException,
    ServerInternalErrorException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "BatchDeleteAgents",
}));

export type BatchDeleteImportDataError =
  | AuthorizationErrorException
  | HomeRegionNotSetException
  | InvalidParameterException
  | InvalidParameterValueException
  | ServerInternalErrorException
  | CommonErrors;
/**
 * Deletes one or more import tasks, each identified by their import ID. Each import task has
 * a number of records that can identify servers or applications.
 *
 * Amazon Web Services Application Discovery Service has built-in matching logic that will identify when
 * discovered servers match existing entries that you've previously discovered, the information
 * for the already-existing discovered server is updated. When you delete an import task that
 * contains records that were used to match, the information in those matched records that comes
 * from the deleted records will also be deleted.
 */
export const batchDeleteImportData: API.OperationMethod<
  BatchDeleteImportDataRequest,
  BatchDeleteImportDataResponse,
  BatchDeleteImportDataError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(9) as any as S.Schema<BatchDeleteImportDataRequest>,
  output: __S(12) as any as S.Schema<BatchDeleteImportDataResponse>,
  errors: [
    AuthorizationErrorException,
    HomeRegionNotSetException,
    InvalidParameterException,
    InvalidParameterValueException,
    ServerInternalErrorException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "BatchDeleteImportData",
}));

export type CreateApplicationError =
  | AuthorizationErrorException
  | HomeRegionNotSetException
  | InvalidParameterException
  | InvalidParameterValueException
  | ServerInternalErrorException
  | CommonErrors;
/**
 * Creates an application with the given name and description.
 */
export const createApplication: API.OperationMethod<
  CreateApplicationRequest,
  CreateApplicationResponse,
  CreateApplicationError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(13) as any as S.Schema<CreateApplicationRequest>,
  output: __S(14) as any as S.Schema<CreateApplicationResponse>,
  errors: [
    AuthorizationErrorException,
    HomeRegionNotSetException,
    InvalidParameterException,
    InvalidParameterValueException,
    ServerInternalErrorException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "CreateApplication",
}));

export type CreateTagsError =
  | AuthorizationErrorException
  | HomeRegionNotSetException
  | InvalidParameterException
  | InvalidParameterValueException
  | ResourceNotFoundException
  | ServerInternalErrorException
  | CommonErrors;
/**
 * Creates one or more tags for configuration items. Tags are metadata that help you
 * categorize IT assets. This API accepts a list of multiple configuration items.
 *
 * Do not store sensitive information (like personal data) in tags.
 */
export const createTags: API.OperationMethod<
  CreateTagsRequest,
  CreateTagsResponse,
  CreateTagsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(17) as any as S.Schema<CreateTagsRequest>,
  output: __S(18) as any as S.Schema<CreateTagsResponse>,
  errors: [
    AuthorizationErrorException,
    HomeRegionNotSetException,
    InvalidParameterException,
    InvalidParameterValueException,
    ResourceNotFoundException,
    ServerInternalErrorException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "CreateTags",
}));

export type DeleteApplicationsError =
  | AuthorizationErrorException
  | HomeRegionNotSetException
  | InvalidParameterException
  | InvalidParameterValueException
  | ServerInternalErrorException
  | CommonErrors;
/**
 * Deletes a list of applications and their associations with configuration
 * items.
 */
export const deleteApplications: API.OperationMethod<
  DeleteApplicationsRequest,
  DeleteApplicationsResponse,
  DeleteApplicationsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(19) as any as S.Schema<DeleteApplicationsRequest>,
  output: __S(2) as any as S.Schema<DeleteApplicationsResponse>,
  errors: [
    AuthorizationErrorException,
    HomeRegionNotSetException,
    InvalidParameterException,
    InvalidParameterValueException,
    ServerInternalErrorException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DeleteApplications",
}));

export type DeleteTagsError =
  | AuthorizationErrorException
  | HomeRegionNotSetException
  | InvalidParameterException
  | InvalidParameterValueException
  | ResourceNotFoundException
  | ServerInternalErrorException
  | CommonErrors;
/**
 * Deletes the association between configuration items and one or more tags. This API
 * accepts a list of multiple configuration items.
 */
export const deleteTags: API.OperationMethod<
  DeleteTagsRequest,
  DeleteTagsResponse,
  DeleteTagsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(20) as any as S.Schema<DeleteTagsRequest>,
  output: __S(18) as any as S.Schema<DeleteTagsResponse>,
  errors: [
    AuthorizationErrorException,
    HomeRegionNotSetException,
    InvalidParameterException,
    InvalidParameterValueException,
    ResourceNotFoundException,
    ServerInternalErrorException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DeleteTags",
}));

export type DescribeAgentsError =
  | AuthorizationErrorException
  | HomeRegionNotSetException
  | InvalidParameterException
  | InvalidParameterValueException
  | ServerInternalErrorException
  | CommonErrors;
/**
 * Lists agents or collectors as specified by ID or other filters. All agents/collectors
 * associated with your user can be listed if you call `DescribeAgents` as is
 * without passing any parameters.
 */
export const describeAgents: API.PaginatedOperationMethod<
  DescribeAgentsRequest,
  DescribeAgentsResponse,
  DescribeAgentsError,
  Credentials | HttpClient.HttpClient,
  AgentInfo
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: __S(24) as any as S.Schema<DescribeAgentsRequest>,
  output: __S(29) as any as S.Schema<DescribeAgentsResponse>,
  errors: [
    AuthorizationErrorException,
    HomeRegionNotSetException,
    InvalidParameterException,
    InvalidParameterValueException,
    ServerInternalErrorException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DescribeAgents",
  pagination: {
    inputToken: "nextToken",
    outputToken: "nextToken",
    items: "agentsInfo",
    pageSize: "maxResults",
  } as const,
})) as any;

export type DescribeBatchDeleteConfigurationTaskError =
  | AuthorizationErrorException
  | HomeRegionNotSetException
  | InvalidParameterValueException
  | ServerInternalErrorException
  | CommonErrors;
/**
 * Takes a unique deletion task identifier as input and returns metadata about a configuration deletion task.
 */
export const describeBatchDeleteConfigurationTask: API.OperationMethod<
  DescribeBatchDeleteConfigurationTaskRequest,
  DescribeBatchDeleteConfigurationTaskResponse,
  DescribeBatchDeleteConfigurationTaskError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(30) as any as S.Schema<DescribeBatchDeleteConfigurationTaskRequest>,
  output: __S(36) as any as S.Schema<DescribeBatchDeleteConfigurationTaskResponse>,
  errors: [
    AuthorizationErrorException,
    HomeRegionNotSetException,
    InvalidParameterValueException,
    ServerInternalErrorException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DescribeBatchDeleteConfigurationTask",
}));

export type DescribeConfigurationsError =
  | AuthorizationErrorException
  | HomeRegionNotSetException
  | InvalidParameterException
  | InvalidParameterValueException
  | ServerInternalErrorException
  | CommonErrors;
/**
 * Retrieves attributes for a list of configuration item IDs.
 *
 * All of the supplied IDs must be for the same asset type from one of the
 * following:
 *
 * - server
 *
 * - application
 *
 * - process
 *
 * - connection
 *
 * Output fields are specific to the asset type specified. For example, the output for a
 * *server* configuration item includes a list of attributes about the
 * server, such as host name, operating system, number of network cards, etc.
 *
 * For a complete list of outputs for each asset type, see Using the DescribeConfigurations Action in the Amazon Web Services Application
 * Discovery Service User Guide.
 */
export const describeConfigurations: API.OperationMethod<
  DescribeConfigurationsRequest,
  DescribeConfigurationsResponse,
  DescribeConfigurationsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(37) as any as S.Schema<DescribeConfigurationsRequest>,
  output: __S(40) as any as S.Schema<DescribeConfigurationsResponse>,
  errors: [
    AuthorizationErrorException,
    HomeRegionNotSetException,
    InvalidParameterException,
    InvalidParameterValueException,
    ServerInternalErrorException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DescribeConfigurations",
}));

export type DescribeContinuousExportsError =
  | AuthorizationErrorException
  | HomeRegionNotSetException
  | InvalidParameterException
  | InvalidParameterValueException
  | OperationNotPermittedException
  | ResourceNotFoundException
  | ServerInternalErrorException
  | CommonErrors;
/**
 * Lists exports as specified by ID. All continuous exports associated with your user
 * can be listed if you call `DescribeContinuousExports` as is without passing
 * any parameters.
 */
export const describeContinuousExports: API.PaginatedOperationMethod<
  DescribeContinuousExportsRequest,
  DescribeContinuousExportsResponse,
  DescribeContinuousExportsError,
  Credentials | HttpClient.HttpClient,
  ContinuousExportDescription
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: __S(41) as any as S.Schema<DescribeContinuousExportsRequest>,
  output: __S(44) as any as S.Schema<DescribeContinuousExportsResponse>,
  errors: [
    AuthorizationErrorException,
    HomeRegionNotSetException,
    InvalidParameterException,
    InvalidParameterValueException,
    OperationNotPermittedException,
    ResourceNotFoundException,
    ServerInternalErrorException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DescribeContinuousExports",
  pagination: {
    inputToken: "nextToken",
    outputToken: "nextToken",
    items: "descriptions",
    pageSize: "maxResults",
  } as const,
})) as any;

export type DescribeExportConfigurationsError =
  | AuthorizationErrorException
  | HomeRegionNotSetException
  | InvalidParameterException
  | InvalidParameterValueException
  | ResourceNotFoundException
  | ServerInternalErrorException
  | CommonErrors;
/**
 * `DescribeExportConfigurations` is deprecated. Use DescribeExportTasks, instead.
 */
export const describeExportConfigurations: API.PaginatedOperationMethod<
  DescribeExportConfigurationsRequest,
  DescribeExportConfigurationsResponse,
  DescribeExportConfigurationsError,
  Credentials | HttpClient.HttpClient,
  ExportInfo
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: __S(45) as any as S.Schema<DescribeExportConfigurationsRequest>,
  output: __S(48) as any as S.Schema<DescribeExportConfigurationsResponse>,
  errors: [
    AuthorizationErrorException,
    HomeRegionNotSetException,
    InvalidParameterException,
    InvalidParameterValueException,
    ResourceNotFoundException,
    ServerInternalErrorException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DescribeExportConfigurations",
  pagination: {
    inputToken: "nextToken",
    outputToken: "nextToken",
    items: "exportsInfo",
    pageSize: "maxResults",
  } as const,
})) as any;

export type DescribeExportTasksError =
  | AuthorizationErrorException
  | HomeRegionNotSetException
  | InvalidParameterException
  | InvalidParameterValueException
  | ServerInternalErrorException
  | CommonErrors;
/**
 * Retrieve status of one or more export tasks. You can retrieve the status of up to 100
 * export tasks.
 */
export const describeExportTasks: API.PaginatedOperationMethod<
  DescribeExportTasksRequest,
  DescribeExportTasksResponse,
  DescribeExportTasksError,
  Credentials | HttpClient.HttpClient,
  ExportInfo
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: __S(49) as any as S.Schema<DescribeExportTasksRequest>,
  output: __S(48) as any as S.Schema<DescribeExportTasksResponse>,
  errors: [
    AuthorizationErrorException,
    HomeRegionNotSetException,
    InvalidParameterException,
    InvalidParameterValueException,
    ServerInternalErrorException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DescribeExportTasks",
  pagination: {
    inputToken: "nextToken",
    outputToken: "nextToken",
    items: "exportsInfo",
    pageSize: "maxResults",
  } as const,
})) as any;

export type DescribeImportTasksError =
  | AuthorizationErrorException
  | HomeRegionNotSetException
  | InvalidParameterException
  | InvalidParameterValueException
  | ServerInternalErrorException
  | CommonErrors;
/**
 * Returns an array of import tasks for your account, including status information, times,
 * IDs, the Amazon S3 Object URL for the import file, and more.
 */
export const describeImportTasks: API.PaginatedOperationMethod<
  DescribeImportTasksRequest,
  DescribeImportTasksResponse,
  DescribeImportTasksError,
  Credentials | HttpClient.HttpClient,
  ImportTask
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: __S(52) as any as S.Schema<DescribeImportTasksRequest>,
  output: __S(55) as any as S.Schema<DescribeImportTasksResponse>,
  errors: [
    AuthorizationErrorException,
    HomeRegionNotSetException,
    InvalidParameterException,
    InvalidParameterValueException,
    ServerInternalErrorException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DescribeImportTasks",
  pagination: {
    inputToken: "nextToken",
    outputToken: "nextToken",
    items: "tasks",
    pageSize: "maxResults",
  } as const,
})) as any;

export type DescribeTagsError =
  | AuthorizationErrorException
  | HomeRegionNotSetException
  | InvalidParameterException
  | InvalidParameterValueException
  | ResourceNotFoundException
  | ServerInternalErrorException
  | CommonErrors;
/**
 * Retrieves a list of configuration items that have tags as specified by the key-value
 * pairs, name and value, passed to the optional parameter `filters`.
 *
 * There are three valid tag filter names:
 *
 * - tagKey
 *
 * - tagValue
 *
 * - configurationId
 *
 * Also, all configuration items associated with your user that have tags can be
 * listed if you call `DescribeTags` as is without passing any parameters.
 */
export const describeTags: API.PaginatedOperationMethod<
  DescribeTagsRequest,
  DescribeTagsResponse,
  DescribeTagsError,
  Credentials | HttpClient.HttpClient,
  ConfigurationTag
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: __S(58) as any as S.Schema<DescribeTagsRequest>,
  output: __S(61) as any as S.Schema<DescribeTagsResponse>,
  errors: [
    AuthorizationErrorException,
    HomeRegionNotSetException,
    InvalidParameterException,
    InvalidParameterValueException,
    ResourceNotFoundException,
    ServerInternalErrorException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DescribeTags",
  pagination: {
    inputToken: "nextToken",
    outputToken: "nextToken",
    items: "tags",
    pageSize: "maxResults",
  } as const,
})) as any;

export type DisassociateConfigurationItemsFromApplicationError =
  | AuthorizationErrorException
  | HomeRegionNotSetException
  | InvalidParameterException
  | InvalidParameterValueException
  | ServerInternalErrorException
  | CommonErrors;
/**
 * Disassociates one or more configuration items from an application.
 */
export const disassociateConfigurationItemsFromApplication: API.OperationMethod<
  DisassociateConfigurationItemsFromApplicationRequest,
  DisassociateConfigurationItemsFromApplicationResponse,
  DisassociateConfigurationItemsFromApplicationError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(62) as any as S.Schema<DisassociateConfigurationItemsFromApplicationRequest>,
  output: __S(2) as any as S.Schema<DisassociateConfigurationItemsFromApplicationResponse>,
  errors: [
    AuthorizationErrorException,
    HomeRegionNotSetException,
    InvalidParameterException,
    InvalidParameterValueException,
    ServerInternalErrorException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DisassociateConfigurationItemsFromApplication",
}));

export type ExportConfigurationsError =
  | AuthorizationErrorException
  | HomeRegionNotSetException
  | InvalidParameterException
  | InvalidParameterValueException
  | OperationNotPermittedException
  | ServerInternalErrorException
  | CommonErrors;
/**
 * Deprecated. Use `StartExportTask` instead.
 *
 * Exports all discovered configuration data to an Amazon S3 bucket or an application that
 * enables you to view and evaluate the data. Data includes tags and tag associations, processes,
 * connections, servers, and system performance. This API returns an export ID that you can query
 * using the *DescribeExportConfigurations* API. The system imposes a limit of
 * two configuration exports in six hours.
 */
export const exportConfigurations: API.OperationMethod<
  ExportConfigurationsRequest,
  ExportConfigurationsResponse,
  ExportConfigurationsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(63) as any as S.Schema<ExportConfigurationsRequest>,
  output: __S(64) as any as S.Schema<ExportConfigurationsResponse>,
  errors: [
    AuthorizationErrorException,
    HomeRegionNotSetException,
    InvalidParameterException,
    InvalidParameterValueException,
    OperationNotPermittedException,
    ServerInternalErrorException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ExportConfigurations",
}));

export type GetDiscoverySummaryError =
  | AuthorizationErrorException
  | HomeRegionNotSetException
  | InvalidParameterException
  | InvalidParameterValueException
  | ServerInternalErrorException
  | CommonErrors;
/**
 * Retrieves a short summary of discovered assets.
 *
 * This API operation takes no request parameters and is called as is at the command
 * prompt as shown in the example.
 */
export const getDiscoverySummary: API.OperationMethod<
  GetDiscoverySummaryRequest,
  GetDiscoverySummaryResponse,
  GetDiscoverySummaryError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(65) as any as S.Schema<GetDiscoverySummaryRequest>,
  output: __S(70) as any as S.Schema<GetDiscoverySummaryResponse>,
  errors: [
    AuthorizationErrorException,
    HomeRegionNotSetException,
    InvalidParameterException,
    InvalidParameterValueException,
    ServerInternalErrorException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetDiscoverySummary",
}));

export type ListConfigurationsError =
  | AuthorizationErrorException
  | HomeRegionNotSetException
  | InvalidParameterException
  | InvalidParameterValueException
  | ResourceNotFoundException
  | ServerInternalErrorException
  | CommonErrors;
/**
 * Retrieves a list of configuration items as specified by the value passed to the
 * required parameter `configurationType`. Optional filtering may be applied to refine
 * search results.
 */
export const listConfigurations: API.PaginatedOperationMethod<
  ListConfigurationsRequest,
  ListConfigurationsResponse,
  ListConfigurationsError,
  Credentials | HttpClient.HttpClient,
  { [key: string]: string | undefined }
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: __S(73) as any as S.Schema<ListConfigurationsRequest>,
  output: __S(75) as any as S.Schema<ListConfigurationsResponse>,
  errors: [
    AuthorizationErrorException,
    HomeRegionNotSetException,
    InvalidParameterException,
    InvalidParameterValueException,
    ResourceNotFoundException,
    ServerInternalErrorException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListConfigurations",
  pagination: {
    inputToken: "nextToken",
    outputToken: "nextToken",
    items: "configurations",
    pageSize: "maxResults",
  } as const,
})) as any;

export type ListServerNeighborsError =
  | AuthorizationErrorException
  | HomeRegionNotSetException
  | InvalidParameterException
  | InvalidParameterValueException
  | ServerInternalErrorException
  | CommonErrors;
/**
 * Retrieves a list of servers that are one network hop away from a specified
 * server.
 */
export const listServerNeighbors: API.OperationMethod<
  ListServerNeighborsRequest,
  ListServerNeighborsResponse,
  ListServerNeighborsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(76) as any as S.Schema<ListServerNeighborsRequest>,
  output: __S(79) as any as S.Schema<ListServerNeighborsResponse>,
  errors: [
    AuthorizationErrorException,
    HomeRegionNotSetException,
    InvalidParameterException,
    InvalidParameterValueException,
    ServerInternalErrorException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListServerNeighbors",
}));

export type StartBatchDeleteConfigurationTaskError =
  | AuthorizationErrorException
  | HomeRegionNotSetException
  | InvalidParameterException
  | InvalidParameterValueException
  | LimitExceededException
  | OperationNotPermittedException
  | ServerInternalErrorException
  | CommonErrors;
/**
 * Takes a list of configurationId as input and starts an asynchronous deletion
 * task to remove the configurationItems. Returns a unique deletion task identifier.
 */
export const startBatchDeleteConfigurationTask: API.OperationMethod<
  StartBatchDeleteConfigurationTaskRequest,
  StartBatchDeleteConfigurationTaskResponse,
  StartBatchDeleteConfigurationTaskError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(80) as any as S.Schema<StartBatchDeleteConfigurationTaskRequest>,
  output: __S(81) as any as S.Schema<StartBatchDeleteConfigurationTaskResponse>,
  errors: [
    AuthorizationErrorException,
    HomeRegionNotSetException,
    InvalidParameterException,
    InvalidParameterValueException,
    LimitExceededException,
    OperationNotPermittedException,
    ServerInternalErrorException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "StartBatchDeleteConfigurationTask",
}));

export type StartContinuousExportError =
  | AuthorizationErrorException
  | ConflictErrorException
  | HomeRegionNotSetException
  | InvalidParameterException
  | InvalidParameterValueException
  | OperationNotPermittedException
  | ResourceInUseException
  | ServerInternalErrorException
  | CommonErrors;
/**
 * Start the continuous flow of agent's discovered data into Amazon Athena.
 */
export const startContinuousExport: API.OperationMethod<
  StartContinuousExportRequest,
  StartContinuousExportResponse,
  StartContinuousExportError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(82) as any as S.Schema<StartContinuousExportRequest>,
  output: __S(83) as any as S.Schema<StartContinuousExportResponse>,
  errors: [
    AuthorizationErrorException,
    ConflictErrorException,
    HomeRegionNotSetException,
    InvalidParameterException,
    InvalidParameterValueException,
    OperationNotPermittedException,
    ResourceInUseException,
    ServerInternalErrorException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "StartContinuousExport",
}));

export type StartDataCollectionByAgentIdsError =
  | AuthorizationErrorException
  | HomeRegionNotSetException
  | InvalidParameterException
  | InvalidParameterValueException
  | ServerInternalErrorException
  | CommonErrors;
/**
 * Instructs the specified agents to start collecting data.
 */
export const startDataCollectionByAgentIds: API.OperationMethod<
  StartDataCollectionByAgentIdsRequest,
  StartDataCollectionByAgentIdsResponse,
  StartDataCollectionByAgentIdsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(84) as any as S.Schema<StartDataCollectionByAgentIdsRequest>,
  output: __S(87) as any as S.Schema<StartDataCollectionByAgentIdsResponse>,
  errors: [
    AuthorizationErrorException,
    HomeRegionNotSetException,
    InvalidParameterException,
    InvalidParameterValueException,
    ServerInternalErrorException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "StartDataCollectionByAgentIds",
}));

export type StartExportTaskError =
  | AuthorizationErrorException
  | HomeRegionNotSetException
  | InvalidParameterException
  | InvalidParameterValueException
  | OperationNotPermittedException
  | ServerInternalErrorException
  | CommonErrors;
/**
 * Begins the export of a discovered data report to an Amazon S3 bucket managed by Amazon Web Services.
 *
 * Exports might provide an estimate of fees and savings based on certain information
 * that you provide. Fee estimates do not include any taxes that might apply.
 * Your actual fees and savings depend on a variety of factors, including your actual usage of Amazon Web Services
 * services, which might vary from the estimates provided in this report.
 *
 * If you do not specify `preferences` or `agentIds` in the filter, a
 * summary of all servers, applications, tags, and performance is generated. This data is an
 * aggregation of all server data collected through on-premises tooling, file import, application
 * grouping and applying tags.
 *
 * If you specify `agentIds` in a filter, the task exports up to 72 hours of
 * detailed data collected by the identified Application Discovery Agent, including network,
 * process, and performance details. A time range for exported agent data may be set by using
 * `startTime` and `endTime`. Export of detailed agent data is limited to
 * five concurrently running exports.
 * Export of detailed agent data is limited to two exports per day.
 *
 * If you enable `ec2RecommendationsPreferences` in `preferences`
 * , an
 * Amazon EC2 instance matching the characteristics of each server in Application Discovery Service is generated.
 * Changing the attributes of the `ec2RecommendationsPreferences` changes the
 * criteria of the recommendation.
 */
export const startExportTask: API.OperationMethod<
  StartExportTaskRequest,
  StartExportTaskResponse,
  StartExportTaskError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(93) as any as S.Schema<StartExportTaskRequest>,
  output: __S(94) as any as S.Schema<StartExportTaskResponse>,
  errors: [
    AuthorizationErrorException,
    HomeRegionNotSetException,
    InvalidParameterException,
    InvalidParameterValueException,
    OperationNotPermittedException,
    ServerInternalErrorException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "StartExportTask",
}));

export type StartImportTaskError =
  | AuthorizationErrorException
  | HomeRegionNotSetException
  | InvalidParameterException
  | InvalidParameterValueException
  | ResourceInUseException
  | ServerInternalErrorException
  | CommonErrors;
/**
 * Starts an import task, which allows you to import details of your on-premises environment
 * directly into Amazon Web Services Migration Hub without having to use the Amazon Web Services Application Discovery
 * Service (Application Discovery Service) tools such as the Amazon Web Services Application Discovery Service Agentless Collector
 * or Application Discovery Agent. This gives you the option to
 * perform migration assessment and planning directly from your imported data, including the
 * ability to group your devices as applications and track their migration status.
 *
 * To start an import request, do this:
 *
 * - Download the specially formatted comma separated value (CSV) import template, which
 * you can find here: https://s3.us-west-2.amazonaws.com/templates-7cffcf56-bd96-4b1c-b45b-a5b42f282e46/import_template.csv.
 *
 * - Fill out the template with your server and application data.
 *
 * - Upload your import file to an Amazon S3 bucket, and make a note of it's Object URL.
 * Your import file must be in the CSV format.
 *
 * - Use the console or the `StartImportTask` command with the Amazon Web Services CLI or one
 * of the Amazon Web Services SDKs to import the records from your file.
 *
 * For more information, including step-by-step procedures, see Migration Hub
 * Import in the Amazon Web Services Application Discovery Service User
 * Guide.
 *
 * There are limits to the number of import tasks you can create (and delete) in an Amazon Web Services
 * account. For more information, see Amazon Web Services Application
 * Discovery Service Limits in the Amazon Web Services Application Discovery Service User
 * Guide.
 */
export const startImportTask: API.OperationMethod<
  StartImportTaskRequest,
  StartImportTaskResponse,
  StartImportTaskError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(95) as any as S.Schema<StartImportTaskRequest>,
  output: __S(96) as any as S.Schema<StartImportTaskResponse>,
  errors: [
    AuthorizationErrorException,
    HomeRegionNotSetException,
    InvalidParameterException,
    InvalidParameterValueException,
    ResourceInUseException,
    ServerInternalErrorException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "StartImportTask",
}));

export type StopContinuousExportError =
  | AuthorizationErrorException
  | HomeRegionNotSetException
  | InvalidParameterException
  | InvalidParameterValueException
  | OperationNotPermittedException
  | ResourceInUseException
  | ResourceNotFoundException
  | ServerInternalErrorException
  | CommonErrors;
/**
 * Stop the continuous flow of agent's discovered data into Amazon Athena.
 */
export const stopContinuousExport: API.OperationMethod<
  StopContinuousExportRequest,
  StopContinuousExportResponse,
  StopContinuousExportError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(97) as any as S.Schema<StopContinuousExportRequest>,
  output: __S(98) as any as S.Schema<StopContinuousExportResponse>,
  errors: [
    AuthorizationErrorException,
    HomeRegionNotSetException,
    InvalidParameterException,
    InvalidParameterValueException,
    OperationNotPermittedException,
    ResourceInUseException,
    ResourceNotFoundException,
    ServerInternalErrorException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "StopContinuousExport",
}));

export type StopDataCollectionByAgentIdsError =
  | AuthorizationErrorException
  | HomeRegionNotSetException
  | InvalidParameterException
  | InvalidParameterValueException
  | ServerInternalErrorException
  | CommonErrors;
/**
 * Instructs the specified agents to stop collecting data.
 */
export const stopDataCollectionByAgentIds: API.OperationMethod<
  StopDataCollectionByAgentIdsRequest,
  StopDataCollectionByAgentIdsResponse,
  StopDataCollectionByAgentIdsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(99) as any as S.Schema<StopDataCollectionByAgentIdsRequest>,
  output: __S(87) as any as S.Schema<StopDataCollectionByAgentIdsResponse>,
  errors: [
    AuthorizationErrorException,
    HomeRegionNotSetException,
    InvalidParameterException,
    InvalidParameterValueException,
    ServerInternalErrorException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "StopDataCollectionByAgentIds",
}));

export type UpdateApplicationError =
  | AuthorizationErrorException
  | HomeRegionNotSetException
  | InvalidParameterException
  | InvalidParameterValueException
  | ServerInternalErrorException
  | CommonErrors;
/**
 * Updates metadata about an application.
 */
export const updateApplication: API.OperationMethod<
  UpdateApplicationRequest,
  UpdateApplicationResponse,
  UpdateApplicationError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(100) as any as S.Schema<UpdateApplicationRequest>,
  output: __S(2) as any as S.Schema<UpdateApplicationResponse>,
  errors: [
    AuthorizationErrorException,
    HomeRegionNotSetException,
    InvalidParameterException,
    InvalidParameterValueException,
    ServerInternalErrorException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "UpdateApplication",
}));

// Schema builders: each runs one schema initializer, on that schema's first use.
function __c0(j: number): any {
  switch (j) {
    case 0:
      return S.Array(S.String);
    case 1:
      return S.suspend(() =>
        S.Struct({
          applicationConfigurationId: S.String,
          configurationIds: __S(0),
        }).pipe(T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({
        identifier: "AssociateConfigurationItemsToApplicationRequest",
      });
    case 2:
      return S.suspend(() => S.Struct({}).pipe(ns)).annotate({
        identifier: "AssociateConfigurationItemsToApplicationResponse",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({ agentId: S.String, force: S.optional(S.Boolean) }),
      ).annotate({ identifier: "DeleteAgent" });
    case 4:
      return S.Array(__S(3));
    case 5:
      return S.suspend(() =>
        S.Struct({ deleteAgents: __S(4) }).pipe(
          T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({ identifier: "BatchDeleteAgentsRequest" });
    case 6:
      return S.suspend(() =>
        S.Struct({ agentId: S.String, errorMessage: S.String, errorCode: S.String }),
      ).annotate({ identifier: "BatchDeleteAgentError" });
    case 7:
      return S.Array(__S(6));
  }
}
function __c1(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() => S.Struct({ errors: S.optional(__S(7)) }).pipe(ns)).annotate({
        identifier: "BatchDeleteAgentsResponse",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({
          importTaskIds: __S(0),
          deleteHistory: S.optional(S.Boolean),
        }).pipe(T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({
        identifier: "BatchDeleteImportDataRequest",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({
          importTaskId: S.optional(S.String),
          errorCode: S.optional(S.String),
          errorDescription: S.optional(S.String),
        }),
      ).annotate({
        identifier: "BatchDeleteImportDataError",
      });
    case 3:
      return S.Array(__S(10));
    case 4:
      return S.suspend(() => S.Struct({ errors: S.optional(__S(11)) }).pipe(ns)).annotate({
        identifier: "BatchDeleteImportDataResponse",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({
          name: S.String,
          description: S.optional(S.String),
          wave: S.optional(S.String),
        }).pipe(T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({ identifier: "CreateApplicationRequest" });
    case 6:
      return S.suspend(() => S.Struct({ configurationId: S.optional(S.String) }).pipe(ns)).annotate(
        {
          identifier: "CreateApplicationResponse",
        },
      );
    case 7:
      return S.suspend(() => S.Struct({ key: S.String, value: S.String })).annotate({
        identifier: "Tag",
      });
  }
}
function __c2(j: number): any {
  switch (j) {
    case 0:
      return S.Array(
        /*@__PURE__*/ __S(15).pipe(/*@__PURE__*/ T.XmlName("item")).annotate({ identifier: "Tag" }),
      );
    case 1:
      return S.suspend(() =>
        S.Struct({ configurationIds: __S(0), tags: __S(16) }).pipe(
          T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({ identifier: "CreateTagsRequest" });
    case 2:
      return S.suspend(() => S.Struct({}).pipe(ns)).annotate({
        identifier: "CreateTagsResponse",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({ configurationIds: __S(0) }).pipe(
          T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({
        identifier: "DeleteApplicationsRequest",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({ configurationIds: __S(0), tags: S.optional(__S(16)) }).pipe(
          T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({ identifier: "DeleteTagsRequest" });
    case 5:
      return S.Array(/*@__PURE__*/ S.String.pipe(/*@__PURE__*/ T.XmlName("item")));
    case 6:
      return S.suspend(() =>
        S.Struct({ name: S.String, values: __S(21), condition: S.String }),
      ).annotate({ identifier: "Filter" });
    case 7:
      return S.Array(__S(22));
  }
}
function __c3(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          agentIds: S.optional(__S(0)),
          filters: S.optional(__S(23)),
          maxResults: S.optional(S.Number),
          nextToken: S.optional(S.String),
        }).pipe(T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({ identifier: "DescribeAgentsRequest" });
    case 1:
      return S.suspend(() =>
        S.Struct({ ipAddress: S.optional(S.String), macAddress: S.optional(S.String) }),
      ).annotate({ identifier: "AgentNetworkInfo" });
    case 2:
      return S.Array(__S(25));
    case 3:
      return S.suspend(() =>
        S.Struct({
          agentId: S.optional(S.String),
          hostName: S.optional(S.String),
          agentNetworkInfoList: S.optional(__S(26)),
          connectorId: S.optional(S.String),
          version: S.optional(S.String),
          health: S.optional(S.String),
          lastHealthPingTime: S.optional(S.String),
          collectionStatus: S.optional(S.String),
          agentType: S.optional(S.String),
          registeredTime: S.optional(S.String),
        }),
      ).annotate({ identifier: "AgentInfo" });
    case 4:
      return S.Array(__S(27));
    case 5:
      return S.suspend(() =>
        S.Struct({ agentsInfo: S.optional(__S(28)), nextToken: S.optional(S.String) }).pipe(ns),
      ).annotate({ identifier: "DescribeAgentsResponse" });
    case 6:
      return S.suspend(() =>
        S.Struct({ taskId: S.String }).pipe(
          T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({
        identifier: "DescribeBatchDeleteConfigurationTaskRequest",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({
          configurationId: S.optional(S.String),
          errorStatusCode: S.optional(S.Number),
          errorMessage: S.optional(S.String),
        }),
      ).annotate({ identifier: "FailedConfiguration" });
  }
}
function __c4(j: number): any {
  switch (j) {
    case 0:
      return S.Array(__S(31));
    case 1:
      return S.suspend(() =>
        S.Struct({
          configurationId: S.optional(S.String),
          warningCode: S.optional(S.Number),
          warningText: S.optional(S.String),
        }),
      ).annotate({ identifier: "DeletionWarning" });
    case 2:
      return S.Array(__S(33));
    case 3:
      return S.suspend(() =>
        S.Struct({
          taskId: S.optional(S.String),
          status: S.optional(S.String),
          startTime: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          endTime: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          configurationType: S.optional(S.String),
          requestedConfigurations: S.optional(__S(0)),
          deletedConfigurations: S.optional(__S(0)),
          failedConfigurations: S.optional(__S(32)),
          deletionWarnings: S.optional(__S(34)),
        }),
      ).annotate({
        identifier: "BatchDeleteConfigurationTask",
      });
    case 4:
      return S.suspend(() => S.Struct({ task: S.optional(__S(35)) }).pipe(ns)).annotate({
        identifier: "DescribeBatchDeleteConfigurationTaskResponse",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({ configurationIds: __S(0) }).pipe(
          T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({
        identifier: "DescribeConfigurationsRequest",
      });
    case 6:
      return S.Record(S.String, /*@__PURE__*/ S.String.pipe(S.optional));
    case 7:
      return S.Array(__S(38));
  }
}
function __c5(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() => S.Struct({ configurations: S.optional(__S(39)) }).pipe(ns)).annotate({
        identifier: "DescribeConfigurationsResponse",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({
          exportIds: S.optional(__S(0)),
          maxResults: S.optional(S.Number),
          nextToken: S.optional(S.String),
        }).pipe(T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({
        identifier: "DescribeContinuousExportsRequest",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({
          exportId: S.optional(S.String),
          status: S.optional(S.String),
          statusDetail: S.optional(S.String),
          s3Bucket: S.optional(S.String),
          startTime: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          stopTime: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          dataSource: S.optional(S.String),
          schemaStorageConfig: S.optional(__S(38)),
        }),
      ).annotate({
        identifier: "ContinuousExportDescription",
      });
    case 3:
      return S.Array(__S(42));
    case 4:
      return S.suspend(() =>
        S.Struct({
          descriptions: S.optional(__S(43)),
          nextToken: S.optional(S.String),
        }).pipe(ns),
      ).annotate({
        identifier: "DescribeContinuousExportsResponse",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({
          exportIds: S.optional(__S(0)),
          maxResults: S.optional(S.Number),
          nextToken: S.optional(S.String),
        }).pipe(T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({
        identifier: "DescribeExportConfigurationsRequest",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({
          exportId: S.String,
          exportStatus: S.String,
          statusMessage: S.String,
          configurationsDownloadUrl: S.optional(S.String),
          exportRequestTime: S.Date.pipe(T.TimestampFormat("epoch-seconds")),
          isTruncated: S.optional(S.Boolean),
          requestedStartTime: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          requestedEndTime: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
        }),
      ).annotate({ identifier: "ExportInfo" });
    case 7:
      return S.Array(__S(46));
  }
}
function __c6(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({ exportsInfo: S.optional(__S(47)), nextToken: S.optional(S.String) }).pipe(ns),
      ).annotate({
        identifier: "DescribeExportConfigurationsResponse",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({
          exportIds: S.optional(__S(0)),
          filters: S.optional(__S(23)),
          maxResults: S.optional(S.Number),
          nextToken: S.optional(S.String),
        }).pipe(T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({
        identifier: "DescribeExportTasksRequest",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({
          name: S.optional(S.String),
          values: S.optional(__S(0)),
        }),
      ).annotate({ identifier: "ImportTaskFilter" });
    case 3:
      return S.Array(__S(50));
    case 4:
      return S.suspend(() =>
        S.Struct({
          filters: S.optional(__S(51)),
          maxResults: S.optional(S.Number),
          nextToken: S.optional(S.String),
        }).pipe(T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({
        identifier: "DescribeImportTasksRequest",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({
          importTaskId: S.optional(S.String),
          clientRequestToken: S.optional(S.String),
          name: S.optional(S.String),
          importUrl: S.optional(S.String),
          status: S.optional(S.String),
          importRequestTime: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          importCompletionTime: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          importDeletedTime: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          fileClassification: S.optional(S.String),
          serverImportSuccess: S.optional(S.Number),
          serverImportFailure: S.optional(S.Number),
          applicationImportSuccess: S.optional(S.Number),
          applicationImportFailure: S.optional(S.Number),
          errorsAndFailedEntriesZip: S.optional(S.String),
        }),
      ).annotate({ identifier: "ImportTask" });
    case 6:
      return S.Array(__S(53));
    case 7:
      return S.suspend(() =>
        S.Struct({ nextToken: S.optional(S.String), tasks: S.optional(__S(54)) }).pipe(ns),
      ).annotate({
        identifier: "DescribeImportTasksResponse",
      });
  }
}
function __c7(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() => S.Struct({ name: S.String, values: __S(21) })).annotate({
        identifier: "TagFilter",
      });
    case 1:
      return S.Array(__S(56));
    case 2:
      return S.suspend(() =>
        S.Struct({
          filters: S.optional(__S(57)),
          maxResults: S.optional(S.Number),
          nextToken: S.optional(S.String),
        }).pipe(T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({ identifier: "DescribeTagsRequest" });
    case 3:
      return S.suspend(() =>
        S.Struct({
          configurationType: S.optional(S.String),
          configurationId: S.optional(S.String),
          key: S.optional(S.String),
          value: S.optional(S.String),
          timeOfCreation: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
        }),
      ).annotate({ identifier: "ConfigurationTag" });
    case 4:
      return S.Array(
        /*@__PURE__*/ __S(59).pipe(/*@__PURE__*/ T.XmlName("item")).annotate({
          identifier: "ConfigurationTag",
        }),
      );
    case 5:
      return S.suspend(() =>
        S.Struct({ tags: S.optional(__S(60)), nextToken: S.optional(S.String) }).pipe(ns),
      ).annotate({ identifier: "DescribeTagsResponse" });
    case 6:
      return S.suspend(() =>
        S.Struct({
          applicationConfigurationId: S.String,
          configurationIds: __S(0),
        }).pipe(T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({
        identifier: "DisassociateConfigurationItemsFromApplicationRequest",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({}).pipe(
          T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({
        identifier: "ExportConfigurationsRequest",
      });
  }
}
function __c8(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() => S.Struct({ exportId: S.optional(S.String) }).pipe(ns)).annotate({
        identifier: "ExportConfigurationsResponse",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({}).pipe(
          T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({
        identifier: "GetDiscoverySummaryRequest",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({
          activeAgents: S.Number,
          healthyAgents: S.Number,
          blackListedAgents: S.Number,
          shutdownAgents: S.Number,
          unhealthyAgents: S.Number,
          totalAgents: S.Number,
          unknownAgents: S.Number,
        }),
      ).annotate({ identifier: "CustomerAgentInfo" });
    case 3:
      return S.suspend(() =>
        S.Struct({
          activeConnectors: S.Number,
          healthyConnectors: S.Number,
          blackListedConnectors: S.Number,
          shutdownConnectors: S.Number,
          unhealthyConnectors: S.Number,
          totalConnectors: S.Number,
          unknownConnectors: S.Number,
        }),
      ).annotate({ identifier: "CustomerConnectorInfo" });
    case 4:
      return S.suspend(() =>
        S.Struct({
          activeMeCollectors: S.Number,
          healthyMeCollectors: S.Number,
          denyListedMeCollectors: S.Number,
          shutdownMeCollectors: S.Number,
          unhealthyMeCollectors: S.Number,
          totalMeCollectors: S.Number,
          unknownMeCollectors: S.Number,
        }),
      ).annotate({ identifier: "CustomerMeCollectorInfo" });
    case 5:
      return S.suspend(() =>
        S.Struct({
          activeAgentlessCollectors: S.Number,
          healthyAgentlessCollectors: S.Number,
          denyListedAgentlessCollectors: S.Number,
          shutdownAgentlessCollectors: S.Number,
          unhealthyAgentlessCollectors: S.Number,
          totalAgentlessCollectors: S.Number,
          unknownAgentlessCollectors: S.Number,
        }),
      ).annotate({
        identifier: "CustomerAgentlessCollectorInfo",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({
          servers: S.optional(S.Number),
          applications: S.optional(S.Number),
          serversMappedToApplications: S.optional(S.Number),
          serversMappedtoTags: S.optional(S.Number),
          agentSummary: S.optional(__S(66)),
          connectorSummary: S.optional(__S(67)),
          meCollectorSummary: S.optional(__S(68)),
          agentlessCollectorSummary: S.optional(__S(69)),
        }).pipe(ns),
      ).annotate({
        identifier: "GetDiscoverySummaryResponse",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({ fieldName: S.String, sortOrder: S.optional(S.String) }),
      ).annotate({ identifier: "OrderByElement" });
  }
}
function __c9(j: number): any {
  switch (j) {
    case 0:
      return S.Array(__S(71));
    case 1:
      return S.suspend(() =>
        S.Struct({
          configurationType: S.String,
          filters: S.optional(__S(23)),
          maxResults: S.optional(S.Number),
          nextToken: S.optional(S.String),
          orderBy: S.optional(__S(72)),
        }).pipe(T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({
        identifier: "ListConfigurationsRequest",
      });
    case 2:
      return S.Array(__S(38));
    case 3:
      return S.suspend(() =>
        S.Struct({
          configurations: S.optional(__S(74)),
          nextToken: S.optional(S.String),
        }).pipe(ns),
      ).annotate({
        identifier: "ListConfigurationsResponse",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({
          configurationId: S.String,
          portInformationNeeded: S.optional(S.Boolean),
          neighborConfigurationIds: S.optional(__S(0)),
          maxResults: S.optional(S.Number),
          nextToken: S.optional(S.String),
        }).pipe(T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({
        identifier: "ListServerNeighborsRequest",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({
          sourceServerId: S.String,
          destinationServerId: S.String,
          destinationPort: S.optional(S.Number),
          transportProtocol: S.optional(S.String),
          connectionsCount: S.Number,
        }),
      ).annotate({ identifier: "NeighborConnectionDetail" });
    case 6:
      return S.Array(__S(77));
    case 7:
      return S.suspend(() =>
        S.Struct({
          neighbors: __S(78),
          nextToken: S.optional(S.String),
          knownDependencyCount: S.optional(S.Number),
        }).pipe(ns),
      ).annotate({
        identifier: "ListServerNeighborsResponse",
      });
  }
}
function __c10(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          configurationType: S.String,
          configurationIds: __S(0),
        }).pipe(T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({
        identifier: "StartBatchDeleteConfigurationTaskRequest",
      });
    case 1:
      return S.suspend(() => S.Struct({ taskId: S.optional(S.String) }).pipe(ns)).annotate({
        identifier: "StartBatchDeleteConfigurationTaskResponse",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({}).pipe(
          T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({
        identifier: "StartContinuousExportRequest",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({
          exportId: S.optional(S.String),
          s3Bucket: S.optional(S.String),
          startTime: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          dataSource: S.optional(S.String),
          schemaStorageConfig: S.optional(__S(38)),
        }).pipe(ns),
      ).annotate({
        identifier: "StartContinuousExportResponse",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({ agentIds: __S(0) }).pipe(
          T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({
        identifier: "StartDataCollectionByAgentIdsRequest",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({
          agentId: S.optional(S.String),
          operationSucceeded: S.optional(S.Boolean),
          description: S.optional(S.String),
        }),
      ).annotate({ identifier: "AgentConfigurationStatus" });
    case 6:
      return S.Array(__S(85));
    case 7:
      return S.suspend(() =>
        S.Struct({ agentsConfigurationStatus: S.optional(__S(86)) }).pipe(ns),
      ).annotate({
        identifier: "StartDataCollectionByAgentIdsResponse",
      });
  }
}
function __c11(j: number): any {
  switch (j) {
    case 0:
      return S.Array(S.String);
    case 1:
      return S.suspend(() =>
        S.Struct({ name: S.optional(S.String), percentageAdjust: S.optional(S.Number) }),
      ).annotate({ identifier: "UsageMetricBasis" });
    case 2:
      return S.suspend(() =>
        S.Struct({
          purchasingOption: S.String,
          offeringClass: S.String,
          termLength: S.String,
        }),
      ).annotate({ identifier: "ReservedInstanceOptions" });
    case 3:
      return S.suspend(() =>
        S.Struct({
          enabled: S.optional(S.Boolean),
          cpuPerformanceMetricBasis: S.optional(__S(89)),
          ramPerformanceMetricBasis: S.optional(__S(89)),
          tenancy: S.optional(S.String),
          excludedInstanceTypes: S.optional(__S(0)),
          preferredRegion: S.optional(S.String),
          reservedInstanceOptions: S.optional(__S(90)),
        }),
      ).annotate({
        identifier: "Ec2RecommendationsExportPreferences",
      });
    case 4:
      return S.Union([
        /*@__PURE__*/ S.Struct({
          ec2RecommendationsPreferences: __S(91),
        }),
      ]);
    case 5:
      return S.suspend(() =>
        S.Struct({
          exportDataFormat: S.optional(__S(88)),
          filters: S.optional(__S(23)),
          startTime: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          endTime: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          preferences: S.optional(__S(92)),
        }).pipe(T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({ identifier: "StartExportTaskRequest" });
    case 6:
      return S.suspend(() => S.Struct({ exportId: S.optional(S.String) }).pipe(ns)).annotate({
        identifier: "StartExportTaskResponse",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({
          clientRequestToken: S.optional(S.String).pipe(T.IdempotencyToken()),
          name: S.String,
          importUrl: S.String,
        }).pipe(T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({ identifier: "StartImportTaskRequest" });
  }
}
function __c12(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() => S.Struct({ task: S.optional(__S(53)) }).pipe(ns)).annotate({
        identifier: "StartImportTaskResponse",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({ exportId: S.String }).pipe(
          T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({
        identifier: "StopContinuousExportRequest",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({
          startTime: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          stopTime: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
        }).pipe(ns),
      ).annotate({
        identifier: "StopContinuousExportResponse",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({ agentIds: __S(0) }).pipe(
          T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({
        identifier: "StopDataCollectionByAgentIdsRequest",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({
          configurationId: S.String,
          name: S.optional(S.String),
          description: S.optional(S.String),
          wave: S.optional(S.String),
        }).pipe(T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({ identifier: "UpdateApplicationRequest" });
  }
}

// Schema table: entry i is built from builder (i >> shift), case (i & mask), on first reach.
function __S(i: number): any {
  return (__s[i] ??= __L.at(__b, i));
}
function __b(i: number): any {
  switch (i >> 3) {
    case 0:
      return __c0(i & 7);
    case 1:
      return __c1(i & 7);
    case 2:
      return __c2(i & 7);
    case 3:
      return __c3(i & 7);
    case 4:
      return __c4(i & 7);
    case 5:
      return __c5(i & 7);
    case 6:
      return __c6(i & 7);
    case 7:
      return __c7(i & 7);
    case 8:
      return __c8(i & 7);
    case 9:
      return __c9(i & 7);
    case 10:
      return __c10(i & 7);
    case 11:
      return __c11(i & 7);
    case 12:
      return __c12(i & 7);
  }
}
