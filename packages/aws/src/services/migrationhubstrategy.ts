import * as API from "@distilled.cloud/core/api";
import * as __L from "@distilled.cloud/core/chunks";
import * as S from "@distilled.cloud/core/schema";
import * as HttpClient from "effect/http/HttpClient";
import * as redacted from "effect/Redacted";
import * as C from "../category.ts";
import type { Credentials } from "../credentials.ts";
import type { CommonErrors } from "../errors.ts";
import { AwsProtocol } from "../protocol.ts";
import { Retry } from "../retry.ts";
import { SensitiveString } from "../sensitive.ts";
import * as T from "../traits.ts";
// Schema table, filled on first reach (see __S at the end).
const __s: any[] = [];
const svc = /*@__PURE__*/ T.AwsApiService({
  sdkId: "MigrationHubStrategy",
  serviceShapeName: "AWSMigrationHubStrategyRecommendation",
});
const auth = /*@__PURE__*/ T.AwsAuthSigv4({ name: "migrationhub-strategy" });
const ver = /*@__PURE__*/ T.ServiceVersion("2020-02-19");
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
              `https://migrationhub-strategy-fips.${Region}.${_.getAttr(PartitionResult, "dualStackDnsSuffix")}`,
            );
          }
          return err(
            "FIPS and DualStack are enabled, but this partition does not support one or both",
          );
        }
        if (UseFIPS === true) {
          if (_.getAttr(PartitionResult, "supportsFIPS") === true) {
            return e(
              `https://migrationhub-strategy-fips.${Region}.${_.getAttr(PartitionResult, "dnsSuffix")}`,
            );
          }
          return err("FIPS is enabled but this partition does not support FIPS");
        }
        if (UseDualStack === true) {
          if (true === _.getAttr(PartitionResult, "supportsDualStack")) {
            return e(
              `https://migrationhub-strategy.${Region}.${_.getAttr(PartitionResult, "dualStackDnsSuffix")}`,
            );
          }
          return err("DualStack is enabled but this partition does not support DualStack");
        }
        return e(
          `https://migrationhub-strategy.${Region}.${_.getAttr(PartitionResult, "dnsSuffix")}`,
        );
      }
    }
  }
  return err("Invalid Configuration: Missing Region");
});

export class AccessDeniedException
  extends /*@__PURE__*/ S.TaggedError<AccessDeniedException>()(
    "AccessDeniedException",
    { message: /*@__PURE__*/ S.String.pipe(/*@__PURE__*/ T.ErrorMessage()) },
    /*@__PURE__*/ T.HttpError(403),
  ).pipe(C.withAuthError) {}
export class ConflictException
  extends /*@__PURE__*/ S.TaggedError<ConflictException>()(
    "ConflictException",
    { message: /*@__PURE__*/ S.String.pipe(/*@__PURE__*/ T.ErrorMessage()) },
    /*@__PURE__*/ T.HttpError(409),
  ).pipe(C.withConflictError) {}
export class DependencyException
  extends /*@__PURE__*/ S.TaggedError<DependencyException>()(
    "DependencyException",
    { message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()) },
    /*@__PURE__*/ T.HttpError(500),
  ).pipe(C.withServerError) {}
export class InternalServerException
  extends /*@__PURE__*/ S.TaggedError<InternalServerException>()(
    "InternalServerException",
    { message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()) },
    /*@__PURE__*/ T.HttpError(500),
  ).pipe(C.withServerError) {}
export class ResourceNotFoundException
  extends /*@__PURE__*/ S.TaggedError<ResourceNotFoundException>()(
    "ResourceNotFoundException",
    { message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()) },
    /*@__PURE__*/ T.HttpError(404),
  ).pipe(C.withBadRequestError) {}
export class ServiceLinkedRoleLockClientException
  extends /*@__PURE__*/ S.TaggedError<ServiceLinkedRoleLockClientException>()(
    "ServiceLinkedRoleLockClientException",
    { message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()) },
    /*@__PURE__*/ T.HttpError(400),
  ).pipe(C.withBadRequestError) {}
export class ServiceQuotaExceededException
  extends /*@__PURE__*/ S.TaggedError<ServiceQuotaExceededException>()(
    "ServiceQuotaExceededException",
    { message: /*@__PURE__*/ S.String.pipe(/*@__PURE__*/ T.ErrorMessage()) },
    /*@__PURE__*/ T.HttpError(402),
  ).pipe(C.withQuotaError) {}
export class ThrottlingException
  extends /*@__PURE__*/ S.TaggedError<ThrottlingException>()(
    "ThrottlingException",
    { message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()) },
    /*@__PURE__*/ T.HttpError(429),
  ).pipe(C.withThrottlingError) {}
export class ValidationException
  extends /*@__PURE__*/ S.TaggedError<ValidationException>()(
    "ValidationException",
    { message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()) },
    /*@__PURE__*/ T.HttpError(400),
  ).pipe(C.withBadRequestError) {}
export type ApplicationComponentId = string;
export interface GetApplicationComponentDetailsRequest {
  applicationComponentId: string;
}
export type ResourceId = string;
export type ResourceName = string;
export type TransformationToolName = string;
export type TranformationToolDescription = string;
export type TranformationToolInstallationLink = string;
export interface TransformationTool {
  name?: string;
  description?: string;
  tranformationToolInstallationLink?: string;
}
export type TargetDestination = string;
export type Strategy = string;
export interface RecommendationSet {
  transformationTool?: TransformationTool;
  targetDestination?: string;
  strategy?: string;
}
export type SrcCodeOrDbAnalysisStatus = string;
export type StatusMessage = string;
export type Severity = string;
export interface AntipatternSeveritySummary {
  severity?: string;
  count?: number;
}
export type ListAntipatternSeveritySummary = AntipatternSeveritySummary[];
export interface DatabaseConfigDetail {
  secretName?: string;
}
export interface SourceCodeRepository {
  repository?: string;
  branch?: string;
  versionControlType?: string;
  projectName?: string;
}
export type SourceCodeRepositories = SourceCodeRepository[];
export type AppType = string;
export type ResourceSubType = string;
export type InclusionStatus = string;
export type S3Bucket = string;
export type S3Key = string;
export interface S3Object {
  s3Bucket?: string;
  s3key?: string;
}
export type AntipatternReportStatus = string;
export type ServerId = string;
export type RuntimeAnalysisStatus = string;
export type AppUnitErrorCategory = string;
export interface AppUnitError {
  appUnitErrorCategory?: string;
}
export type AnalysisType = string;
export type AnalysisStatusUnion =
  | { runtimeAnalysisStatus: string; srcCodeOrDbAnalysisStatus?: never }
  | { runtimeAnalysisStatus?: never; srcCodeOrDbAnalysisStatus: string };
export type BinaryAnalyzerName = string;
export type RunTimeAnalyzerName = string;
export type SourceCodeAnalyzerName = string;
export type AnalyzerNameUnion =
  | { binaryAnalyzerName: string; runTimeAnalyzerName?: never; sourceCodeAnalyzerName?: never }
  | { binaryAnalyzerName?: never; runTimeAnalyzerName: string; sourceCodeAnalyzerName?: never }
  | { binaryAnalyzerName?: never; runTimeAnalyzerName?: never; sourceCodeAnalyzerName: string };
export interface AntipatternReportResult {
  analyzerName?: AnalyzerNameUnion;
  antiPatternReportS3Object?: S3Object;
  antipatternReportStatus?: string;
  antipatternReportStatusMessage?: string;
}
export type AntipatternReportResultList = AntipatternReportResult[];
export interface Result {
  analysisType?: string;
  analysisStatus?: AnalysisStatusUnion;
  statusMessage?: string;
  antipatternReportResultList?: AntipatternReportResult[];
}
export type ResultList = Result[];
export interface ApplicationComponentDetail {
  id?: string;
  name?: string;
  recommendationSet?: RecommendationSet;
  analysisStatus?: string;
  statusMessage?: string;
  listAntipatternSeveritySummary?: AntipatternSeveritySummary[];
  databaseConfigDetail?: DatabaseConfigDetail;
  sourceCodeRepositories?: SourceCodeRepository[];
  appType?: string;
  resourceSubType?: string;
  inclusionStatus?: string;
  antipatternReportS3Object?: S3Object;
  antipatternReportStatus?: string;
  antipatternReportStatusMessage?: string;
  osVersion?: string;
  osDriver?: string;
  lastAnalyzedTimestamp?: Date;
  associatedServerId?: string;
  moreServerAssociationExists?: boolean;
  runtimeStatus?: string;
  runtimeStatusMessage?: string;
  appUnitError?: AppUnitError;
  resultList?: Result[];
}
export interface AssociatedApplication {
  name?: string;
  id?: string;
}
export type AssociatedApplications = AssociatedApplication[];
export type AssociatedServerIDs = string[];
export interface GetApplicationComponentDetailsResponse {
  applicationComponentDetail?: ApplicationComponentDetail;
  associatedApplications?: AssociatedApplication[];
  moreApplicationResource?: boolean;
  associatedServerIds?: string[];
}
export interface GetApplicationComponentStrategiesRequest {
  applicationComponentId: string;
}
export type StrategyRecommendation = string;
export interface ApplicationComponentStrategy {
  recommendation?: RecommendationSet;
  status?: string;
  isPreferred?: boolean;
}
export type ApplicationComponentStrategies = ApplicationComponentStrategy[];
export interface GetApplicationComponentStrategiesResponse {
  applicationComponentStrategies?: ApplicationComponentStrategy[];
}
export type AsyncTaskId = string;
export interface GetAssessmentRequest {
  id: string;
}
export type AssessmentStatus = string;
export type AssessmentStatusMessage = string;
export interface DataCollectionDetails {
  status?: string;
  servers?: number;
  failed?: number;
  success?: number;
  inProgress?: number;
  startTime?: Date;
  completionTime?: Date;
  statusMessage?: string;
}
export type Condition = string;
export type AssessmentTargetValues = string[];
export interface AssessmentTarget {
  condition: string;
  name: string;
  values: string[];
}
export type AssessmentTargets = AssessmentTarget[];
export interface GetAssessmentResponse {
  id?: string;
  dataCollectionDetails?: DataCollectionDetails;
  assessmentTargets?: AssessmentTarget[];
}
export interface GetImportFileTaskRequest {
  id: string;
}
export type ImportFileTaskStatus = string;
export type ImportS3Bucket = string;
export type ImportS3Key = string;
export interface GetImportFileTaskResponse {
  id?: string;
  status?: string;
  startTime?: Date;
  inputS3Bucket?: string;
  inputS3Key?: string;
  statusReportS3Bucket?: string;
  statusReportS3Key?: string;
  completionTime?: Date;
  numberOfRecordsSuccess?: number;
  numberOfRecordsFailed?: number;
  importName?: string;
}
export interface GetLatestAssessmentIdRequest {}
export interface GetLatestAssessmentIdResponse {
  id?: string;
}
export interface GetPortfolioPreferencesRequest {}
export type BusinessGoalsInteger = number;
export interface BusinessGoals {
  speedOfMigration?: number;
  reduceOperationalOverheadWithManagedServices?: number;
  modernizeInfrastructureWithCloudNativeTechnologies?: number;
  licenseCostReduction?: number;
}
export interface PrioritizeBusinessGoals {
  businessGoals?: BusinessGoals;
}
export type AwsManagedTargetDestination = string;
export type AwsManagedTargetDestinations = string[];
export interface AwsManagedResources {
  targetDestination: string[];
}
export type SelfManageTargetDestination = string;
export type SelfManageTargetDestinations = string[];
export interface SelfManageResources {
  targetDestination: string[];
}
export type NoPreferenceTargetDestination = string;
export type NoPreferenceTargetDestinations = string[];
export interface NoManagementPreference {
  targetDestination: string[];
}
export type ManagementPreference =
  | { awsManagedResources: AwsManagedResources; selfManageResources?: never; noPreference?: never }
  | { awsManagedResources?: never; selfManageResources: SelfManageResources; noPreference?: never }
  | {
      awsManagedResources?: never;
      selfManageResources?: never;
      noPreference: NoManagementPreference;
    };
export interface ApplicationPreferences {
  managementPreference?: ManagementPreference;
}
export type DatabaseManagementPreference = string;
export type HeterogeneousTargetDatabaseEngine = string;
export type HeterogeneousTargetDatabaseEngines = string[];
export interface Heterogeneous {
  targetDatabaseEngine: string[];
}
export type HomogeneousTargetDatabaseEngine = string;
export type HomogeneousTargetDatabaseEngines = string[];
export interface Homogeneous {
  targetDatabaseEngine?: string[];
}
export type TargetDatabaseEngine = string;
export type TargetDatabaseEngines = string[];
export interface NoDatabaseMigrationPreference {
  targetDatabaseEngine: string[];
}
export type DatabaseMigrationPreference =
  | { heterogeneous: Heterogeneous; homogeneous?: never; noPreference?: never }
  | { heterogeneous?: never; homogeneous: Homogeneous; noPreference?: never }
  | { heterogeneous?: never; homogeneous?: never; noPreference: NoDatabaseMigrationPreference };
export interface DatabasePreferences {
  databaseManagementPreference?: string;
  databaseMigrationPreference?: DatabaseMigrationPreference;
}
export type ApplicationMode = string;
export interface GetPortfolioPreferencesResponse {
  prioritizeBusinessGoals?: PrioritizeBusinessGoals;
  applicationPreferences?: ApplicationPreferences;
  databasePreferences?: DatabasePreferences;
  applicationMode?: string;
}
export interface GetPortfolioSummaryRequest {}
export interface StrategySummary {
  strategy?: string;
  count?: number;
}
export type ListStrategySummary = StrategySummary[];
export interface ApplicationComponentSummary {
  appType?: string;
  count?: number;
}
export type ListApplicationComponentSummary = ApplicationComponentSummary[];
export type ServerOsType = string;
export interface ServerSummary {
  ServerOsType?: string;
  count?: number;
}
export type ListServerSummary = ServerSummary[];
export interface ApplicationComponentStatusSummary {
  srcCodeOrDbAnalysisStatus?: string;
  count?: number;
}
export type ListApplicationComponentStatusSummary = ApplicationComponentStatusSummary[];
export type RunTimeAssessmentStatus = string;
export interface ServerStatusSummary {
  runTimeAssessmentStatus?: string;
  count?: number;
}
export type ListServerStatusSummary = ServerStatusSummary[];
export interface AssessmentSummary {
  listServerStrategySummary?: StrategySummary[];
  listApplicationComponentStrategySummary?: StrategySummary[];
  listAntipatternSeveritySummary?: AntipatternSeveritySummary[];
  listApplicationComponentSummary?: ApplicationComponentSummary[];
  listServerSummary?: ServerSummary[];
  antipatternReportS3Object?: S3Object;
  antipatternReportStatus?: string;
  antipatternReportStatusMessage?: string;
  lastAnalyzedTimestamp?: Date;
  listApplicationComponentStatusSummary?: ApplicationComponentStatusSummary[];
  listServerStatusSummary?: ServerStatusSummary[];
}
export interface GetPortfolioSummaryResponse {
  assessmentSummary?: AssessmentSummary;
}
export type RecommendationTaskId = string;
export interface GetRecommendationReportDetailsRequest {
  id: string;
}
export type RecommendationReportStatus = string;
export type RecommendationReportStatusMessage = string;
export type RecommendationReportTimeStamp = Date;
export type S3Keys = string[];
export interface RecommendationReportDetails {
  status?: string;
  statusMessage?: string;
  startTime?: Date;
  completionTime?: Date;
  s3Bucket?: string;
  s3Keys?: string[];
}
export interface GetRecommendationReportDetailsResponse {
  id?: string;
  recommendationReportDetails?: RecommendationReportDetails;
}
export type NextToken = string;
export type MaxResult = number;
export interface GetServerDetailsRequest {
  serverId: string;
  nextToken?: string;
  maxResults?: number;
}
export type OSType = string;
export type OSVersion = string;
export interface OSInfo {
  type?: string;
  version?: string;
}
export type InterfaceName = string;
export type IPAddress = string;
export type MacAddress = string;
export type NetMask = string;
export interface NetworkInfo {
  interfaceName: string;
  ipAddress: string;
  macAddress: string;
  netMask: string;
}
export type NetworkInfoList = NetworkInfo[];
export interface SystemInfo {
  osInfo?: OSInfo;
  fileSystemType?: string;
  networkInfoList?: NetworkInfo[];
  cpuArchitecture?: string;
}
export type ServerErrorCategory = string;
export interface ServerError {
  serverErrorCategory?: string;
}
export interface ServerDetail {
  id?: string;
  name?: string;
  recommendationSet?: RecommendationSet;
  dataCollectionStatus?: string;
  statusMessage?: string;
  listAntipatternSeveritySummary?: AntipatternSeveritySummary[];
  systemInfo?: SystemInfo;
  applicationComponentStrategySummary?: StrategySummary[];
  antipatternReportS3Object?: S3Object;
  antipatternReportStatus?: string;
  antipatternReportStatusMessage?: string;
  serverType?: string;
  lastAnalyzedTimestamp?: Date;
  serverError?: ServerError;
}
export interface GetServerDetailsResponse {
  nextToken?: string;
  serverDetail?: ServerDetail;
  associatedApplications?: AssociatedApplication[];
}
export interface GetServerStrategiesRequest {
  serverId: string;
}
export interface ServerStrategy {
  recommendation?: RecommendationSet;
  status?: string;
  numberOfApplicationComponents?: number;
  isPreferred?: boolean;
}
export type ServerStrategies = ServerStrategy[];
export interface GetServerStrategiesResponse {
  serverStrategies?: ServerStrategy[];
}
export type SortOrder = string;
export interface ListAnalyzableServersRequest {
  sort?: string;
  nextToken?: string;
  maxResults?: number;
}
export interface AnalyzableServerSummary {
  hostname?: string;
  ipAddress?: string;
  source?: string;
  vmId?: string;
}
export type AnalyzableServerSummaryList = AnalyzableServerSummary[];
export interface ListAnalyzableServersResponse {
  analyzableServers?: AnalyzableServerSummary[];
  nextToken?: string;
}
export type ApplicationComponentCriteria = string;
export type GroupName = string;
export interface Group {
  name?: string;
  value?: string;
}
export type GroupIds = Group[];
export interface ListApplicationComponentsRequest {
  applicationComponentCriteria?: string;
  filterValue?: string;
  sort?: string;
  groupIdFilter?: Group[];
  nextToken?: string;
  maxResults?: number;
}
export type ApplicationComponentDetails = ApplicationComponentDetail[];
export interface ListApplicationComponentsResponse {
  applicationComponentInfos?: ApplicationComponentDetail[];
  nextToken?: string;
}
export interface ListCollectorsRequest {
  nextToken?: string;
  maxResults?: number;
}
export type CollectorHealth = string;
export interface VcenterBasedRemoteInfo {
  vcenterConfigurationTimeStamp?: string;
  osType?: string;
}
export type VcenterBasedRemoteInfoList = VcenterBasedRemoteInfo[];
export type AuthType = string;
export interface IPAddressBasedRemoteInfo {
  ipAddressConfigurationTimeStamp?: string;
  authType?: string;
  osType?: string;
}
export type IPAddressBasedRemoteInfoList = IPAddressBasedRemoteInfo[];
export type VersionControlType = string;
export interface VersionControlInfo {
  versionControlType?: string;
  versionControlConfigurationTimeStamp?: string;
}
export type VersionControlInfoList = VersionControlInfo[];
export type PipelineType = string;
export interface PipelineInfo {
  pipelineType?: string;
  pipelineConfigurationTimeStamp?: string;
}
export type PipelineInfoList = PipelineInfo[];
export interface RemoteSourceCodeAnalysisServerInfo {
  remoteSourceCodeAnalysisServerConfigurationTimestamp?: string;
}
export interface ConfigurationSummary {
  vcenterBasedRemoteInfoList?: VcenterBasedRemoteInfo[];
  ipAddressBasedRemoteInfoList?: IPAddressBasedRemoteInfo[];
  versionControlInfoList?: VersionControlInfo[];
  pipelineInfoList?: PipelineInfo[];
  remoteSourceCodeAnalysisServerInfo?: RemoteSourceCodeAnalysisServerInfo;
}
export interface Collector {
  collectorId?: string;
  ipAddress?: string;
  hostName?: string;
  collectorHealth?: string;
  collectorVersion?: string;
  registeredTimeStamp?: string;
  lastActivityTimeStamp?: string;
  configurationSummary?: ConfigurationSummary;
}
export type Collectors = Collector[];
export interface ListCollectorsResponse {
  Collectors?: Collector[];
  nextToken?: string;
}
export interface ListImportFileTaskRequest {
  nextToken?: string;
  maxResults?: number;
}
export interface ImportFileTaskInformation {
  id?: string;
  status?: string;
  startTime?: Date;
  inputS3Bucket?: string;
  inputS3Key?: string;
  statusReportS3Bucket?: string;
  statusReportS3Key?: string;
  completionTime?: Date;
  numberOfRecordsSuccess?: number;
  numberOfRecordsFailed?: number;
  importName?: string;
}
export type ListImportFileTaskInformation = ImportFileTaskInformation[];
export interface ListImportFileTaskResponse {
  taskInfos?: ImportFileTaskInformation[];
  nextToken?: string;
}
export type ServerCriteria = string;
export interface ListServersRequest {
  serverCriteria?: string;
  filterValue?: string;
  sort?: string;
  groupIdFilter?: Group[];
  nextToken?: string;
  maxResults?: number;
}
export type ServerDetails = ServerDetail[];
export interface ListServersResponse {
  serverInfos?: ServerDetail[];
  nextToken?: string;
}
export interface PutPortfolioPreferencesRequest {
  prioritizeBusinessGoals?: PrioritizeBusinessGoals;
  applicationPreferences?: ApplicationPreferences;
  databasePreferences?: DatabasePreferences;
  applicationMode?: string;
}
export interface PutPortfolioPreferencesResponse {}
export type AssessmentDataSourceType = string;
export interface StartAssessmentRequest {
  s3bucketForAnalysisData?: string;
  s3bucketForReportData?: string;
  assessmentTargets?: AssessmentTarget[];
  assessmentDataSourceType?: string;
}
export interface StartAssessmentResponse {
  assessmentId?: string;
}
export type DataSourceType = string;
export interface StartImportFileTaskRequest {
  name: string;
  S3Bucket: string;
  s3key: string;
  dataSourceType?: string;
  groupId?: Group[];
  s3bucketForReportData?: string;
}
export interface StartImportFileTaskResponse {
  id?: string;
}
export type OutputFormat = string;
export interface StartRecommendationReportGenerationRequest {
  outputFormat?: string;
  groupIdFilter?: Group[];
}
export interface StartRecommendationReportGenerationResponse {
  id?: string;
}
export interface StopAssessmentRequest {
  assessmentId: string;
}
export interface StopAssessmentResponse {}
export interface StrategyOption {
  strategy?: string;
  toolName?: string;
  targetDestination?: string;
  isPreferred?: boolean;
}
export type VersionControl = string;
export type SourceVersion = string;
export type Location = string;
export type ProjectName = string;
export interface SourceCode {
  versionControl?: string;
  sourceVersion?: string;
  location?: string;
  projectName?: string;
}
export type SourceCodeList = SourceCode[];
export type SecretsManagerKey = string | redacted.Redacted<string>;
export interface UpdateApplicationComponentConfigRequest {
  applicationComponentId: string;
  inclusionStatus?: string;
  strategyOption?: StrategyOption;
  sourceCodeList?: SourceCode[];
  secretsManagerKey?: string | redacted.Redacted<string>;
  configureOnly?: boolean;
  appType?: string;
}
export interface UpdateApplicationComponentConfigResponse {}
export interface UpdateServerConfigRequest {
  serverId: string;
  strategyOption?: StrategyOption;
}
export interface UpdateServerConfigResponse {}
export type ErrorMessage = string;
export type GetApplicationComponentDetailsError =
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | CommonErrors;
/**
 * Retrieves details about an application component.
 */
export const getApplicationComponentDetails: API.OperationMethod<
  GetApplicationComponentDetailsRequest,
  GetApplicationComponentDetailsResponse,
  GetApplicationComponentDetailsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(0, __c0, 0) as any as S.Schema<GetApplicationComponentDetailsRequest>,
  output: __S(20, __c2, 4) as any as S.Schema<GetApplicationComponentDetailsResponse>,
  errors: [InternalServerException, ResourceNotFoundException, ThrottlingException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetApplicationComponentDetails",
}));

export type GetApplicationComponentStrategiesError =
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | CommonErrors;
/**
 * Retrieves a list of all the recommended strategies and tools for an application component
 * running on a server.
 */
export const getApplicationComponentStrategies: API.OperationMethod<
  GetApplicationComponentStrategiesRequest,
  GetApplicationComponentStrategiesResponse,
  GetApplicationComponentStrategiesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(21, __c2, 5) as any as S.Schema<GetApplicationComponentStrategiesRequest>,
  output: __S(24, __c3, 0) as any as S.Schema<GetApplicationComponentStrategiesResponse>,
  errors: [InternalServerException, ResourceNotFoundException, ThrottlingException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetApplicationComponentStrategies",
}));

export type GetAssessmentError =
  | AccessDeniedException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | CommonErrors;
/**
 * Retrieves the status of an on-going assessment.
 */
export const getAssessment: API.OperationMethod<
  GetAssessmentRequest,
  GetAssessmentResponse,
  GetAssessmentError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(25, __c3, 1) as any as S.Schema<GetAssessmentRequest>,
  output: __S(29, __c3, 5) as any as S.Schema<GetAssessmentResponse>,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetAssessment",
}));

export type GetImportFileTaskError =
  | AccessDeniedException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Retrieves the details about a specific import task.
 */
export const getImportFileTask: API.OperationMethod<
  GetImportFileTaskRequest,
  GetImportFileTaskResponse,
  GetImportFileTaskError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(30, __c3, 6) as any as S.Schema<GetImportFileTaskRequest>,
  output: __S(31, __c3, 7) as any as S.Schema<GetImportFileTaskResponse>,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetImportFileTask",
}));

export type GetLatestAssessmentIdError =
  | AccessDeniedException
  | DependencyException
  | InternalServerException
  | ValidationException
  | CommonErrors;
/**
 * Retrieve the latest ID of a specific assessment task.
 */
export const getLatestAssessmentId: API.OperationMethod<
  GetLatestAssessmentIdRequest,
  GetLatestAssessmentIdResponse,
  GetLatestAssessmentIdError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(32, __c4, 0) as any as S.Schema<GetLatestAssessmentIdRequest>,
  output: __S(33, __c4, 1) as any as S.Schema<GetLatestAssessmentIdResponse>,
  errors: [
    AccessDeniedException,
    DependencyException,
    InternalServerException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetLatestAssessmentId",
}));

export type GetPortfolioPreferencesError =
  | AccessDeniedException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | CommonErrors;
/**
 * Retrieves your migration and modernization preferences.
 */
export const getPortfolioPreferences: API.OperationMethod<
  GetPortfolioPreferencesRequest,
  GetPortfolioPreferencesResponse,
  GetPortfolioPreferencesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(34, __c4, 2) as any as S.Schema<GetPortfolioPreferencesRequest>,
  output: __S(45, __c5, 5) as any as S.Schema<GetPortfolioPreferencesResponse>,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetPortfolioPreferences",
}));

export type GetPortfolioSummaryError =
  | AccessDeniedException
  | InternalServerException
  | ThrottlingException
  | CommonErrors;
/**
 * Retrieves overall summary including the number of servers to rehost and the overall
 * number of anti-patterns.
 */
export const getPortfolioSummary: API.OperationMethod<
  GetPortfolioSummaryRequest,
  GetPortfolioSummaryResponse,
  GetPortfolioSummaryError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(46, __c5, 6) as any as S.Schema<GetPortfolioSummaryRequest>,
  output: __S(58, __c7, 2) as any as S.Schema<GetPortfolioSummaryResponse>,
  errors: [AccessDeniedException, InternalServerException, ThrottlingException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetPortfolioSummary",
}));

export type GetRecommendationReportDetailsError =
  | AccessDeniedException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Retrieves detailed information about the specified recommendation report.
 */
export const getRecommendationReportDetails: API.OperationMethod<
  GetRecommendationReportDetailsRequest,
  GetRecommendationReportDetailsResponse,
  GetRecommendationReportDetailsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(59, __c7, 3) as any as S.Schema<GetRecommendationReportDetailsRequest>,
  output: __S(61, __c7, 5) as any as S.Schema<GetRecommendationReportDetailsResponse>,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetRecommendationReportDetails",
}));

export type GetServerDetailsError =
  | AccessDeniedException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Retrieves detailed information about a specified server.
 */
export const getServerDetails: API.PaginatedOperationMethod<
  GetServerDetailsRequest,
  GetServerDetailsResponse,
  GetServerDetailsError,
  Credentials | HttpClient.HttpClient,
  AssociatedApplication
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: __S(62, __c7, 6) as any as S.Schema<GetServerDetailsRequest>,
  output: __S(69, __c8, 5) as any as S.Schema<GetServerDetailsResponse>,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetServerDetails",
  pagination: {
    inputToken: "nextToken",
    outputToken: "nextToken",
    items: "associatedApplications",
    pageSize: "maxResults",
  } as const,
})) as any;

export type GetServerStrategiesError =
  | AccessDeniedException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Retrieves recommended strategies and tools for the specified server.
 */
export const getServerStrategies: API.OperationMethod<
  GetServerStrategiesRequest,
  GetServerStrategiesResponse,
  GetServerStrategiesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(70, __c8, 6) as any as S.Schema<GetServerStrategiesRequest>,
  output: __S(73, __c9, 1) as any as S.Schema<GetServerStrategiesResponse>,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetServerStrategies",
}));

export type ListAnalyzableServersError =
  | AccessDeniedException
  | InternalServerException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Retrieves a list of all the servers fetched from customer vCenter using Strategy Recommendation Collector.
 */
export const listAnalyzableServers: API.PaginatedOperationMethod<
  ListAnalyzableServersRequest,
  ListAnalyzableServersResponse,
  ListAnalyzableServersError,
  Credentials | HttpClient.HttpClient,
  AnalyzableServerSummary
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: __S(74, __c9, 2) as any as S.Schema<ListAnalyzableServersRequest>,
  output: __S(77, __c9, 5) as any as S.Schema<ListAnalyzableServersResponse>,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListAnalyzableServers",
  pagination: {
    inputToken: "nextToken",
    outputToken: "nextToken",
    items: "analyzableServers",
    pageSize: "maxResults",
  } as const,
})) as any;

export type ListApplicationComponentsError =
  | AccessDeniedException
  | InternalServerException
  | ServiceLinkedRoleLockClientException
  | ValidationException
  | CommonErrors;
/**
 * Retrieves a list of all the application components (processes).
 */
export const listApplicationComponents: API.PaginatedOperationMethod<
  ListApplicationComponentsRequest,
  ListApplicationComponentsResponse,
  ListApplicationComponentsError,
  Credentials | HttpClient.HttpClient,
  ApplicationComponentDetail
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: __S(80, __c10, 0) as any as S.Schema<ListApplicationComponentsRequest>,
  output: __S(82, __c10, 2) as any as S.Schema<ListApplicationComponentsResponse>,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ServiceLinkedRoleLockClientException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListApplicationComponents",
  pagination: {
    inputToken: "nextToken",
    outputToken: "nextToken",
    items: "applicationComponentInfos",
    pageSize: "maxResults",
  } as const,
})) as any;

export type ListCollectorsError =
  | AccessDeniedException
  | InternalServerException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Retrieves a list of all the installed collectors.
 */
export const listCollectors: API.PaginatedOperationMethod<
  ListCollectorsRequest,
  ListCollectorsResponse,
  ListCollectorsError,
  Credentials | HttpClient.HttpClient,
  Collector
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: __S(83, __c10, 3) as any as S.Schema<ListCollectorsRequest>,
  output: __S(96, __c12, 0) as any as S.Schema<ListCollectorsResponse>,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListCollectors",
  pagination: {
    inputToken: "nextToken",
    outputToken: "nextToken",
    items: "Collectors",
    pageSize: "maxResults",
  } as const,
})) as any;

export type ListImportFileTaskError =
  | AccessDeniedException
  | InternalServerException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Retrieves a list of all the imports performed.
 */
export const listImportFileTask: API.PaginatedOperationMethod<
  ListImportFileTaskRequest,
  ListImportFileTaskResponse,
  ListImportFileTaskError,
  Credentials | HttpClient.HttpClient,
  ImportFileTaskInformation
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: __S(97, __c12, 1) as any as S.Schema<ListImportFileTaskRequest>,
  output: __S(99, __c12, 3) as any as S.Schema<ListImportFileTaskResponse>,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListImportFileTask",
  pagination: {
    inputToken: "nextToken",
    outputToken: "nextToken",
    items: "taskInfos",
    pageSize: "maxResults",
  } as const,
})) as any;

export type ListServersError =
  | AccessDeniedException
  | InternalServerException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Returns a list of all the servers.
 */
export const listServers: API.PaginatedOperationMethod<
  ListServersRequest,
  ListServersResponse,
  ListServersError,
  Credentials | HttpClient.HttpClient,
  ServerDetail
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: __S(100, __c12, 4) as any as S.Schema<ListServersRequest>,
  output: __S(102, __c12, 6) as any as S.Schema<ListServersResponse>,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListServers",
  pagination: {
    inputToken: "nextToken",
    outputToken: "nextToken",
    items: "serverInfos",
    pageSize: "maxResults",
  } as const,
})) as any;

export type PutPortfolioPreferencesError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Saves the specified migration and modernization preferences.
 */
export const putPortfolioPreferences: API.OperationMethod<
  PutPortfolioPreferencesRequest,
  PutPortfolioPreferencesResponse,
  PutPortfolioPreferencesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(103, __c12, 7) as any as S.Schema<PutPortfolioPreferencesRequest>,
  output: __S(104, __c13, 0) as any as S.Schema<PutPortfolioPreferencesResponse>,
  errors: [
    AccessDeniedException,
    ConflictException,
    InternalServerException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "PutPortfolioPreferences",
}));

export type StartAssessmentError =
  | AccessDeniedException
  | InternalServerException
  | ServiceQuotaExceededException
  | ThrottlingException
  | CommonErrors;
/**
 * Starts the assessment of an on-premises environment.
 */
export const startAssessment: API.OperationMethod<
  StartAssessmentRequest,
  StartAssessmentResponse,
  StartAssessmentError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(105, __c13, 1) as any as S.Schema<StartAssessmentRequest>,
  output: __S(106, __c13, 2) as any as S.Schema<StartAssessmentResponse>,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ServiceQuotaExceededException,
    ThrottlingException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "StartAssessment",
}));

export type StartImportFileTaskError =
  | AccessDeniedException
  | InternalServerException
  | ServiceQuotaExceededException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Starts a file import.
 */
export const startImportFileTask: API.OperationMethod<
  StartImportFileTaskRequest,
  StartImportFileTaskResponse,
  StartImportFileTaskError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(107, __c13, 3) as any as S.Schema<StartImportFileTaskRequest>,
  output: __S(33, __c4, 1) as any as S.Schema<StartImportFileTaskResponse>,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ServiceQuotaExceededException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "StartImportFileTask",
}));

export type StartRecommendationReportGenerationError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Starts generating a recommendation report.
 */
export const startRecommendationReportGeneration: API.OperationMethod<
  StartRecommendationReportGenerationRequest,
  StartRecommendationReportGenerationResponse,
  StartRecommendationReportGenerationError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(108, __c13, 4) as any as S.Schema<StartRecommendationReportGenerationRequest>,
  output: __S(33, __c4, 1) as any as S.Schema<StartRecommendationReportGenerationResponse>,
  errors: [
    AccessDeniedException,
    ConflictException,
    InternalServerException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "StartRecommendationReportGeneration",
}));

export type StopAssessmentError =
  | AccessDeniedException
  | InternalServerException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Stops the assessment of an on-premises environment.
 */
export const stopAssessment: API.OperationMethod<
  StopAssessmentRequest,
  StopAssessmentResponse,
  StopAssessmentError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(109, __c13, 5) as any as S.Schema<StopAssessmentRequest>,
  output: __S(110, __c13, 6) as any as S.Schema<StopAssessmentResponse>,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "StopAssessment",
}));

export type UpdateApplicationComponentConfigError =
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Updates the configuration of an application component.
 */
export const updateApplicationComponentConfig: API.OperationMethod<
  UpdateApplicationComponentConfigRequest,
  UpdateApplicationComponentConfigResponse,
  UpdateApplicationComponentConfigError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(114, __c14, 2) as any as S.Schema<UpdateApplicationComponentConfigRequest>,
  output: __S(115, __c14, 3) as any as S.Schema<UpdateApplicationComponentConfigResponse>,
  errors: [
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "UpdateApplicationComponentConfig",
}));

export type UpdateServerConfigError =
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Updates the configuration of the specified server.
 */
export const updateServerConfig: API.OperationMethod<
  UpdateServerConfigRequest,
  UpdateServerConfigResponse,
  UpdateServerConfigError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(116, __c14, 4) as any as S.Schema<UpdateServerConfigRequest>,
  output: __S(110, __c13, 6) as any as S.Schema<UpdateServerConfigResponse>,
  errors: [
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "UpdateServerConfig",
}));

// Schema builders: each runs one schema initializer, on that schema's first use.
function __c0(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          applicationComponentId: S.String.pipe(T.HttpLabel("applicationComponentId")),
        }).pipe(
          T.all(
            T.Http({
              method: "GET",
              uri: "/get-applicationcomponent-details/{applicationComponentId}",
            }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "GetApplicationComponentDetailsRequest",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({
          name: S.optional(S.String),
          description: S.optional(S.String),
          tranformationToolInstallationLink: S.optional(S.String),
        }),
      ).annotate({ identifier: "TransformationTool" });
    case 2:
      return S.suspend(() =>
        S.Struct({
          transformationTool: S.optional(__S(1, __c0, 1)),
          targetDestination: S.optional(S.String),
          strategy: S.optional(S.String),
        }),
      ).annotate({ identifier: "RecommendationSet" });
    case 3:
      return S.suspend(() =>
        S.Struct({ severity: S.optional(S.String), count: S.optional(S.Number) }),
      ).annotate({
        identifier: "AntipatternSeveritySummary",
      });
    case 4:
      return S.Array(__S(3, __c0, 3));
    case 5:
      return S.suspend(() => S.Struct({ secretName: S.optional(S.String) })).annotate({
        identifier: "DatabaseConfigDetail",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({
          repository: S.optional(S.String),
          branch: S.optional(S.String),
          versionControlType: S.optional(S.String),
          projectName: S.optional(S.String),
        }),
      ).annotate({ identifier: "SourceCodeRepository" });
    case 7:
      return S.Array(__S(6, __c0, 6));
  }
}
function __c1(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({ s3Bucket: S.optional(S.String), s3key: S.optional(S.String) }),
      ).annotate({ identifier: "S3Object" });
    case 1:
      return S.suspend(() => S.Struct({ appUnitErrorCategory: S.optional(S.String) })).annotate({
        identifier: "AppUnitError",
      });
    case 2:
      return S.Union([
        /*@__PURE__*/ S.Struct({ runtimeAnalysisStatus: S.String }),
        /*@__PURE__*/ S.Struct({ srcCodeOrDbAnalysisStatus: S.String }),
      ]);
    case 3:
      return S.Union([
        /*@__PURE__*/ S.Struct({ binaryAnalyzerName: S.String }),
        /*@__PURE__*/ S.Struct({ runTimeAnalyzerName: S.String }),
        /*@__PURE__*/ S.Struct({ sourceCodeAnalyzerName: S.String }),
      ]);
    case 4:
      return S.suspend(() =>
        S.Struct({
          analyzerName: S.optional(__S(11, __c1, 3)),
          antiPatternReportS3Object: S.optional(__S(8, __c1, 0)),
          antipatternReportStatus: S.optional(S.String),
          antipatternReportStatusMessage: S.optional(S.String),
        }),
      ).annotate({ identifier: "AntipatternReportResult" });
    case 5:
      return S.Array(__S(12, __c1, 4));
    case 6:
      return S.suspend(() =>
        S.Struct({
          analysisType: S.optional(S.String),
          analysisStatus: S.optional(__S(10, __c1, 2)),
          statusMessage: S.optional(S.String),
          antipatternReportResultList: S.optional(__S(13, __c1, 5)),
        }),
      ).annotate({ identifier: "Result" });
    case 7:
      return S.Array(__S(14, __c1, 6));
  }
}
function __c2(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          id: S.optional(S.String),
          name: S.optional(S.String),
          recommendationSet: S.optional(__S(2, __c0, 2)),
          analysisStatus: S.optional(S.String),
          statusMessage: S.optional(S.String),
          listAntipatternSeveritySummary: S.optional(__S(4, __c0, 4)),
          databaseConfigDetail: S.optional(__S(5, __c0, 5)),
          sourceCodeRepositories: S.optional(__S(7, __c0, 7)),
          appType: S.optional(S.String),
          resourceSubType: S.optional(S.String),
          inclusionStatus: S.optional(S.String),
          antipatternReportS3Object: S.optional(__S(8, __c1, 0)),
          antipatternReportStatus: S.optional(S.String),
          antipatternReportStatusMessage: S.optional(S.String),
          osVersion: S.optional(S.String),
          osDriver: S.optional(S.String),
          lastAnalyzedTimestamp: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          associatedServerId: S.optional(S.String),
          moreServerAssociationExists: S.optional(S.Boolean),
          runtimeStatus: S.optional(S.String),
          runtimeStatusMessage: S.optional(S.String),
          appUnitError: S.optional(__S(9, __c1, 1)),
          resultList: S.optional(__S(15, __c1, 7)),
        }),
      ).annotate({
        identifier: "ApplicationComponentDetail",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({ name: S.optional(S.String), id: S.optional(S.String) }),
      ).annotate({ identifier: "AssociatedApplication" });
    case 2:
      return S.Array(__S(17, __c2, 1));
    case 3:
      return S.Array(S.String);
    case 4:
      return S.suspend(() =>
        S.Struct({
          applicationComponentDetail: S.optional(__S(16, __c2, 0)),
          associatedApplications: S.optional(__S(18, __c2, 2)),
          moreApplicationResource: S.optional(S.Boolean),
          associatedServerIds: S.optional(__S(19, __c2, 3)),
        }),
      ).annotate({
        identifier: "GetApplicationComponentDetailsResponse",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({
          applicationComponentId: S.String.pipe(T.HttpLabel("applicationComponentId")),
        }).pipe(
          T.all(
            T.Http({
              method: "GET",
              uri: "/get-applicationcomponent-strategies/{applicationComponentId}",
            }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "GetApplicationComponentStrategiesRequest",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({
          recommendation: S.optional(__S(2, __c0, 2)),
          status: S.optional(S.String),
          isPreferred: S.optional(S.Boolean),
        }),
      ).annotate({
        identifier: "ApplicationComponentStrategy",
      });
    case 7:
      return S.Array(__S(22, __c2, 6));
  }
}
function __c3(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({ applicationComponentStrategies: S.optional(__S(23, __c2, 7)) }),
      ).annotate({
        identifier: "GetApplicationComponentStrategiesResponse",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({ id: S.String.pipe(T.HttpLabel("id")) }).pipe(
          T.all(
            T.Http({ method: "GET", uri: "/get-assessment/{id}" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "GetAssessmentRequest" });
    case 2:
      return S.suspend(() =>
        S.Struct({
          status: S.optional(S.String),
          servers: S.optional(S.Number),
          failed: S.optional(S.Number),
          success: S.optional(S.Number),
          inProgress: S.optional(S.Number),
          startTime: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          completionTime: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          statusMessage: S.optional(S.String),
        }),
      ).annotate({ identifier: "DataCollectionDetails" });
    case 3:
      return S.suspend(() =>
        S.Struct({ condition: S.String, name: S.String, values: __S(19, __c2, 3) }),
      ).annotate({ identifier: "AssessmentTarget" });
    case 4:
      return S.Array(__S(27, __c3, 3));
    case 5:
      return S.suspend(() =>
        S.Struct({
          id: S.optional(S.String),
          dataCollectionDetails: S.optional(__S(26, __c3, 2)),
          assessmentTargets: S.optional(__S(28, __c3, 4)),
        }),
      ).annotate({ identifier: "GetAssessmentResponse" });
    case 6:
      return S.suspend(() =>
        S.Struct({ id: S.String.pipe(T.HttpLabel("id")) }).pipe(
          T.all(
            T.Http({ method: "GET", uri: "/get-import-file-task/{id}" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "GetImportFileTaskRequest" });
    case 7:
      return S.suspend(() =>
        S.Struct({
          id: S.optional(S.String),
          status: S.optional(S.String),
          startTime: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          inputS3Bucket: S.optional(S.String),
          inputS3Key: S.optional(S.String),
          statusReportS3Bucket: S.optional(S.String),
          statusReportS3Key: S.optional(S.String),
          completionTime: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          numberOfRecordsSuccess: S.optional(S.Number),
          numberOfRecordsFailed: S.optional(S.Number),
          importName: S.optional(S.String),
        }),
      ).annotate({
        identifier: "GetImportFileTaskResponse",
      });
  }
}
function __c4(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({}).pipe(
          T.all(
            T.Http({ method: "GET", uri: "/get-latest-assessment-id" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "GetLatestAssessmentIdRequest",
      });
    case 1:
      return S.suspend(() => S.Struct({ id: S.optional(S.String) })).annotate({
        identifier: "GetLatestAssessmentIdResponse",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({}).pipe(
          T.all(
            T.Http({ method: "GET", uri: "/get-portfolio-preferences" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "GetPortfolioPreferencesRequest",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({
          speedOfMigration: S.optional(S.Number),
          reduceOperationalOverheadWithManagedServices: S.optional(S.Number),
          modernizeInfrastructureWithCloudNativeTechnologies: S.optional(S.Number),
          licenseCostReduction: S.optional(S.Number),
        }),
      ).annotate({ identifier: "BusinessGoals" });
    case 4:
      return S.suspend(() => S.Struct({ businessGoals: S.optional(__S(35, __c4, 3)) })).annotate({
        identifier: "PrioritizeBusinessGoals",
      });
    case 5:
      return S.suspend(() => S.Struct({ targetDestination: __S(19, __c2, 3) })).annotate({
        identifier: "AwsManagedResources",
      });
    case 6:
      return S.Union([
        /*@__PURE__*/ S.Struct({ awsManagedResources: __S(37, __c4, 5) }),
        /*@__PURE__*/ S.Struct({ selfManageResources: __S(37, __c4, 5) }),
        /*@__PURE__*/ S.Struct({ noPreference: __S(37, __c4, 5) }),
      ]);
    case 7:
      return S.suspend(() =>
        S.Struct({ managementPreference: S.optional(__S(38, __c4, 6)) }),
      ).annotate({ identifier: "ApplicationPreferences" });
  }
}
function __c5(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() => S.Struct({ targetDatabaseEngine: __S(19, __c2, 3) })).annotate({
        identifier: "Heterogeneous",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({ targetDatabaseEngine: S.optional(__S(19, __c2, 3)) }),
      ).annotate({ identifier: "Homogeneous" });
    case 2:
      return S.suspend(() => S.Struct({ targetDatabaseEngine: __S(19, __c2, 3) })).annotate({
        identifier: "NoDatabaseMigrationPreference",
      });
    case 3:
      return S.Union([
        /*@__PURE__*/ S.Struct({ heterogeneous: __S(40, __c5, 0) }),
        /*@__PURE__*/ S.Struct({ homogeneous: __S(41, __c5, 1) }),
        /*@__PURE__*/ S.Struct({ noPreference: __S(42, __c5, 2) }),
      ]);
    case 4:
      return S.suspend(() =>
        S.Struct({
          databaseManagementPreference: S.optional(S.String),
          databaseMigrationPreference: S.optional(__S(43, __c5, 3)),
        }),
      ).annotate({ identifier: "DatabasePreferences" });
    case 5:
      return S.suspend(() =>
        S.Struct({
          prioritizeBusinessGoals: S.optional(__S(36, __c4, 4)),
          applicationPreferences: S.optional(__S(39, __c4, 7)),
          databasePreferences: S.optional(__S(44, __c5, 4)),
          applicationMode: S.optional(S.String),
        }),
      ).annotate({
        identifier: "GetPortfolioPreferencesResponse",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({}).pipe(
          T.all(
            T.Http({ method: "GET", uri: "/get-portfolio-summary" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "GetPortfolioSummaryRequest",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({ strategy: S.optional(S.String), count: S.optional(S.Number) }),
      ).annotate({ identifier: "StrategySummary" });
  }
}
function __c6(j: number): any {
  switch (j) {
    case 0:
      return S.Array(__S(47, __c5, 7));
    case 1:
      return S.suspend(() =>
        S.Struct({ appType: S.optional(S.String), count: S.optional(S.Number) }),
      ).annotate({
        identifier: "ApplicationComponentSummary",
      });
    case 2:
      return S.Array(__S(49, __c6, 1));
    case 3:
      return S.suspend(() =>
        S.Struct({ ServerOsType: S.optional(S.String), count: S.optional(S.Number) }),
      ).annotate({ identifier: "ServerSummary" });
    case 4:
      return S.Array(__S(51, __c6, 3));
    case 5:
      return S.suspend(() =>
        S.Struct({ srcCodeOrDbAnalysisStatus: S.optional(S.String), count: S.optional(S.Number) }),
      ).annotate({
        identifier: "ApplicationComponentStatusSummary",
      });
    case 6:
      return S.Array(__S(53, __c6, 5));
    case 7:
      return S.suspend(() =>
        S.Struct({ runTimeAssessmentStatus: S.optional(S.String), count: S.optional(S.Number) }),
      ).annotate({ identifier: "ServerStatusSummary" });
  }
}
function __c7(j: number): any {
  switch (j) {
    case 0:
      return S.Array(__S(55, __c6, 7));
    case 1:
      return S.suspend(() =>
        S.Struct({
          listServerStrategySummary: S.optional(__S(48, __c6, 0)),
          listApplicationComponentStrategySummary: S.optional(__S(48, __c6, 0)),
          listAntipatternSeveritySummary: S.optional(__S(4, __c0, 4)),
          listApplicationComponentSummary: S.optional(__S(50, __c6, 2)),
          listServerSummary: S.optional(__S(52, __c6, 4)),
          antipatternReportS3Object: S.optional(__S(8, __c1, 0)),
          antipatternReportStatus: S.optional(S.String),
          antipatternReportStatusMessage: S.optional(S.String),
          lastAnalyzedTimestamp: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          listApplicationComponentStatusSummary: S.optional(__S(54, __c6, 6)),
          listServerStatusSummary: S.optional(__S(56, __c7, 0)),
        }),
      ).annotate({ identifier: "AssessmentSummary" });
    case 2:
      return S.suspend(() =>
        S.Struct({ assessmentSummary: S.optional(__S(57, __c7, 1)) }),
      ).annotate({
        identifier: "GetPortfolioSummaryResponse",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({ id: S.String.pipe(T.HttpLabel("id")) }).pipe(
          T.all(
            T.Http({ method: "GET", uri: "/get-recommendation-report-details/{id}" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "GetRecommendationReportDetailsRequest",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({
          status: S.optional(S.String),
          statusMessage: S.optional(S.String),
          startTime: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          completionTime: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          s3Bucket: S.optional(S.String),
          s3Keys: S.optional(__S(19, __c2, 3)),
        }),
      ).annotate({
        identifier: "RecommendationReportDetails",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({
          id: S.optional(S.String),
          recommendationReportDetails: S.optional(__S(60, __c7, 4)),
        }),
      ).annotate({
        identifier: "GetRecommendationReportDetailsResponse",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({
          serverId: S.String.pipe(T.HttpLabel("serverId")),
          nextToken: S.optional(S.String).pipe(T.HttpQuery("nextToken")),
          maxResults: S.optional(S.Number).pipe(T.HttpQuery("maxResults")),
        }).pipe(
          T.all(
            T.Http({ method: "GET", uri: "/get-server-details/{serverId}" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "GetServerDetailsRequest" });
    case 7:
      return S.suspend(() =>
        S.Struct({ type: S.optional(S.String), version: S.optional(S.String) }),
      ).annotate({ identifier: "OSInfo" });
  }
}
function __c8(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          interfaceName: S.String,
          ipAddress: S.String,
          macAddress: S.String,
          netMask: S.String,
        }),
      ).annotate({ identifier: "NetworkInfo" });
    case 1:
      return S.Array(__S(64, __c8, 0));
    case 2:
      return S.suspend(() =>
        S.Struct({
          osInfo: S.optional(__S(63, __c7, 7)),
          fileSystemType: S.optional(S.String),
          networkInfoList: S.optional(__S(65, __c8, 1)),
          cpuArchitecture: S.optional(S.String),
        }),
      ).annotate({ identifier: "SystemInfo" });
    case 3:
      return S.suspend(() => S.Struct({ serverErrorCategory: S.optional(S.String) })).annotate({
        identifier: "ServerError",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({
          id: S.optional(S.String),
          name: S.optional(S.String),
          recommendationSet: S.optional(__S(2, __c0, 2)),
          dataCollectionStatus: S.optional(S.String),
          statusMessage: S.optional(S.String),
          listAntipatternSeveritySummary: S.optional(__S(4, __c0, 4)),
          systemInfo: S.optional(__S(66, __c8, 2)),
          applicationComponentStrategySummary: S.optional(__S(48, __c6, 0)),
          antipatternReportS3Object: S.optional(__S(8, __c1, 0)),
          antipatternReportStatus: S.optional(S.String),
          antipatternReportStatusMessage: S.optional(S.String),
          serverType: S.optional(S.String),
          lastAnalyzedTimestamp: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          serverError: S.optional(__S(67, __c8, 3)),
        }),
      ).annotate({ identifier: "ServerDetail" });
    case 5:
      return S.suspend(() =>
        S.Struct({
          nextToken: S.optional(S.String),
          serverDetail: S.optional(__S(68, __c8, 4)),
          associatedApplications: S.optional(__S(18, __c2, 2)),
        }),
      ).annotate({ identifier: "GetServerDetailsResponse" });
    case 6:
      return S.suspend(() =>
        S.Struct({ serverId: S.String.pipe(T.HttpLabel("serverId")) }).pipe(
          T.all(
            T.Http({ method: "GET", uri: "/get-server-strategies/{serverId}" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "GetServerStrategiesRequest",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({
          recommendation: S.optional(__S(2, __c0, 2)),
          status: S.optional(S.String),
          numberOfApplicationComponents: S.optional(S.Number),
          isPreferred: S.optional(S.Boolean),
        }),
      ).annotate({ identifier: "ServerStrategy" });
  }
}
function __c9(j: number): any {
  switch (j) {
    case 0:
      return S.Array(__S(71, __c8, 7));
    case 1:
      return S.suspend(() => S.Struct({ serverStrategies: S.optional(__S(72, __c9, 0)) })).annotate(
        {
          identifier: "GetServerStrategiesResponse",
        },
      );
    case 2:
      return S.suspend(() =>
        S.Struct({
          sort: S.optional(S.String),
          nextToken: S.optional(S.String),
          maxResults: S.optional(S.Number),
        }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/list-analyzable-servers" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "ListAnalyzableServersRequest",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({
          hostname: S.optional(S.String),
          ipAddress: S.optional(S.String),
          source: S.optional(S.String),
          vmId: S.optional(S.String),
        }),
      ).annotate({ identifier: "AnalyzableServerSummary" });
    case 4:
      return S.Array(__S(75, __c9, 3));
    case 5:
      return S.suspend(() =>
        S.Struct({
          analyzableServers: S.optional(__S(76, __c9, 4)),
          nextToken: S.optional(S.String),
        }),
      ).annotate({
        identifier: "ListAnalyzableServersResponse",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({ name: S.optional(S.String), value: S.optional(S.String) }),
      ).annotate({ identifier: "Group" });
    case 7:
      return S.Array(__S(78, __c9, 6));
  }
}
function __c10(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          applicationComponentCriteria: S.optional(S.String),
          filterValue: S.optional(S.String),
          sort: S.optional(S.String),
          groupIdFilter: S.optional(__S(79, __c9, 7)),
          nextToken: S.optional(S.String),
          maxResults: S.optional(S.Number),
        }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/list-applicationcomponents" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "ListApplicationComponentsRequest",
      });
    case 1:
      return S.Array(__S(16, __c2, 0));
    case 2:
      return S.suspend(() =>
        S.Struct({
          applicationComponentInfos: S.optional(__S(81, __c10, 1)),
          nextToken: S.optional(S.String),
        }),
      ).annotate({
        identifier: "ListApplicationComponentsResponse",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({
          nextToken: S.optional(S.String).pipe(T.HttpQuery("nextToken")),
          maxResults: S.optional(S.Number).pipe(T.HttpQuery("maxResults")),
        }).pipe(
          T.all(T.Http({ method: "GET", uri: "/list-collectors" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({ identifier: "ListCollectorsRequest" });
    case 4:
      return S.suspend(() =>
        S.Struct({
          vcenterConfigurationTimeStamp: S.optional(S.String),
          osType: S.optional(S.String),
        }),
      ).annotate({ identifier: "VcenterBasedRemoteInfo" });
    case 5:
      return S.Array(__S(84, __c10, 4));
    case 6:
      return S.suspend(() =>
        S.Struct({
          ipAddressConfigurationTimeStamp: S.optional(S.String),
          authType: S.optional(S.String),
          osType: S.optional(S.String),
        }),
      ).annotate({ identifier: "IPAddressBasedRemoteInfo" });
    case 7:
      return S.Array(__S(86, __c10, 6));
  }
}
function __c11(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          versionControlType: S.optional(S.String),
          versionControlConfigurationTimeStamp: S.optional(S.String),
        }),
      ).annotate({ identifier: "VersionControlInfo" });
    case 1:
      return S.Array(__S(88, __c11, 0));
    case 2:
      return S.suspend(() =>
        S.Struct({
          pipelineType: S.optional(S.String),
          pipelineConfigurationTimeStamp: S.optional(S.String),
        }),
      ).annotate({ identifier: "PipelineInfo" });
    case 3:
      return S.Array(__S(90, __c11, 2));
    case 4:
      return S.suspend(() =>
        S.Struct({ remoteSourceCodeAnalysisServerConfigurationTimestamp: S.optional(S.String) }),
      ).annotate({
        identifier: "RemoteSourceCodeAnalysisServerInfo",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({
          vcenterBasedRemoteInfoList: S.optional(__S(85, __c10, 5)),
          ipAddressBasedRemoteInfoList: S.optional(__S(87, __c10, 7)),
          versionControlInfoList: S.optional(__S(89, __c11, 1)),
          pipelineInfoList: S.optional(__S(91, __c11, 3)),
          remoteSourceCodeAnalysisServerInfo: S.optional(__S(92, __c11, 4)),
        }),
      ).annotate({ identifier: "ConfigurationSummary" });
    case 6:
      return S.suspend(() =>
        S.Struct({
          collectorId: S.optional(S.String),
          ipAddress: S.optional(S.String),
          hostName: S.optional(S.String),
          collectorHealth: S.optional(S.String),
          collectorVersion: S.optional(S.String),
          registeredTimeStamp: S.optional(S.String),
          lastActivityTimeStamp: S.optional(S.String),
          configurationSummary: S.optional(__S(93, __c11, 5)),
        }),
      ).annotate({ identifier: "Collector" });
    case 7:
      return S.Array(__S(94, __c11, 6));
  }
}
function __c12(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({ Collectors: S.optional(__S(95, __c11, 7)), nextToken: S.optional(S.String) }),
      ).annotate({ identifier: "ListCollectorsResponse" });
    case 1:
      return S.suspend(() =>
        S.Struct({
          nextToken: S.optional(S.String).pipe(T.HttpQuery("nextToken")),
          maxResults: S.optional(S.Number).pipe(T.HttpQuery("maxResults")),
        }).pipe(
          T.all(
            T.Http({ method: "GET", uri: "/list-import-file-task" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "ListImportFileTaskRequest",
      });
    case 2:
      return S.Array(__S(31, __c3, 7));
    case 3:
      return S.suspend(() =>
        S.Struct({
          taskInfos: S.optional(__S(98, __c12, 2)),
          nextToken: S.optional(S.String),
        }),
      ).annotate({
        identifier: "ListImportFileTaskResponse",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({
          serverCriteria: S.optional(S.String),
          filterValue: S.optional(S.String),
          sort: S.optional(S.String),
          groupIdFilter: S.optional(__S(79, __c9, 7)),
          nextToken: S.optional(S.String),
          maxResults: S.optional(S.Number),
        }).pipe(
          T.all(T.Http({ method: "POST", uri: "/list-servers" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({ identifier: "ListServersRequest" });
    case 5:
      return S.Array(__S(68, __c8, 4));
    case 6:
      return S.suspend(() =>
        S.Struct({ serverInfos: S.optional(__S(101, __c12, 5)), nextToken: S.optional(S.String) }),
      ).annotate({ identifier: "ListServersResponse" });
    case 7:
      return S.suspend(() =>
        S.Struct({
          prioritizeBusinessGoals: S.optional(__S(36, __c4, 4)),
          applicationPreferences: S.optional(__S(39, __c4, 7)),
          databasePreferences: S.optional(__S(44, __c5, 4)),
          applicationMode: S.optional(S.String),
        }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/put-portfolio-preferences" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "PutPortfolioPreferencesRequest",
      });
  }
}
function __c13(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() => S.Struct({})).annotate({
        identifier: "PutPortfolioPreferencesResponse",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({
          s3bucketForAnalysisData: S.optional(S.String),
          s3bucketForReportData: S.optional(S.String),
          assessmentTargets: S.optional(__S(28, __c3, 4)),
          assessmentDataSourceType: S.optional(S.String),
        }).pipe(
          T.all(T.Http({ method: "POST", uri: "/start-assessment" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({ identifier: "StartAssessmentRequest" });
    case 2:
      return S.suspend(() => S.Struct({ assessmentId: S.optional(S.String) })).annotate({
        identifier: "StartAssessmentResponse",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({
          name: S.String,
          S3Bucket: S.String,
          s3key: S.String,
          dataSourceType: S.optional(S.String),
          groupId: S.optional(__S(79, __c9, 7)),
          s3bucketForReportData: S.optional(S.String),
        }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/start-import-file-task" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "StartImportFileTaskRequest",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({
          outputFormat: S.optional(S.String),
          groupIdFilter: S.optional(__S(79, __c9, 7)),
        }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/start-recommendation-report-generation" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "StartRecommendationReportGenerationRequest",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({ assessmentId: S.String }).pipe(
          T.all(T.Http({ method: "POST", uri: "/stop-assessment" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({ identifier: "StopAssessmentRequest" });
    case 6:
      return S.suspend(() => S.Struct({})).annotate({
        identifier: "StopAssessmentResponse",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({
          strategy: S.optional(S.String),
          toolName: S.optional(S.String),
          targetDestination: S.optional(S.String),
          isPreferred: S.optional(S.Boolean),
        }),
      ).annotate({ identifier: "StrategyOption" });
  }
}
function __c14(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          versionControl: S.optional(S.String),
          sourceVersion: S.optional(S.String),
          location: S.optional(S.String),
          projectName: S.optional(S.String),
        }),
      ).annotate({ identifier: "SourceCode" });
    case 1:
      return S.Array(__S(112, __c14, 0));
    case 2:
      return S.suspend(() =>
        S.Struct({
          applicationComponentId: S.String,
          inclusionStatus: S.optional(S.String),
          strategyOption: S.optional(__S(111, __c13, 7)),
          sourceCodeList: S.optional(__S(113, __c14, 1)),
          secretsManagerKey: S.optional(SensitiveString),
          configureOnly: S.optional(S.Boolean),
          appType: S.optional(S.String),
        }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/update-applicationcomponent-config/" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "UpdateApplicationComponentConfigRequest",
      });
    case 3:
      return S.suspend(() => S.Struct({})).annotate({
        identifier: "UpdateApplicationComponentConfigResponse",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({ serverId: S.String, strategyOption: S.optional(__S(111, __c13, 7)) }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/update-server-config/" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "UpdateServerConfigRequest",
      });
  }
}

// Schema table: entry i is schema j of builder f, made on first reach.
function __S(i: number, f: (j: number) => unknown, j: number): any {
  return (__s[i] ??= __L.at(f, j));
}
