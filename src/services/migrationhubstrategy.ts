import type { Effect, Data as EffectData } from "effect";
import type { CommonAwsError } from "../error.ts";
import { AWSServiceClient } from "../client.ts";

export declare class MigrationHubStrategy extends AWSServiceClient {
  getApplicationComponentDetails(
    input: GetApplicationComponentDetailsRequest,
  ): Effect.Effect<
    GetApplicationComponentDetailsResponse,
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError
  >;
  getApplicationComponentStrategies(
    input: GetApplicationComponentStrategiesRequest,
  ): Effect.Effect<
    GetApplicationComponentStrategiesResponse,
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError
  >;
  getAssessment(
    input: GetAssessmentRequest,
  ): Effect.Effect<
    GetAssessmentResponse,
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError
  >;
  getImportFileTask(
    input: GetImportFileTaskRequest,
  ): Effect.Effect<
    GetImportFileTaskResponse,
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  getLatestAssessmentId(
    input: GetLatestAssessmentIdRequest,
  ): Effect.Effect<
    GetLatestAssessmentIdResponse,
    | AccessDeniedException
    | DependencyException
    | InternalServerException
    | ValidationException
    | CommonAwsError
  >;
  getPortfolioPreferences(
    input: GetPortfolioPreferencesRequest,
  ): Effect.Effect<
    GetPortfolioPreferencesResponse,
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError
  >;
  getPortfolioSummary(
    input: GetPortfolioSummaryRequest,
  ): Effect.Effect<
    GetPortfolioSummaryResponse,
    | AccessDeniedException
    | InternalServerException
    | ThrottlingException
    | CommonAwsError
  >;
  getRecommendationReportDetails(
    input: GetRecommendationReportDetailsRequest,
  ): Effect.Effect<
    GetRecommendationReportDetailsResponse,
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  getServerDetails(
    input: GetServerDetailsRequest,
  ): Effect.Effect<
    GetServerDetailsResponse,
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  getServerStrategies(
    input: GetServerStrategiesRequest,
  ): Effect.Effect<
    GetServerStrategiesResponse,
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  listAnalyzableServers(
    input: ListAnalyzableServersRequest,
  ): Effect.Effect<
    ListAnalyzableServersResponse,
    | AccessDeniedException
    | InternalServerException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  listApplicationComponents(
    input: ListApplicationComponentsRequest,
  ): Effect.Effect<
    ListApplicationComponentsResponse,
    | AccessDeniedException
    | InternalServerException
    | ServiceLinkedRoleLockClientException
    | ValidationException
    | CommonAwsError
  >;
  listCollectors(
    input: ListCollectorsRequest,
  ): Effect.Effect<
    ListCollectorsResponse,
    | AccessDeniedException
    | InternalServerException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  listImportFileTask(
    input: ListImportFileTaskRequest,
  ): Effect.Effect<
    ListImportFileTaskResponse,
    | AccessDeniedException
    | InternalServerException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  listServers(
    input: ListServersRequest,
  ): Effect.Effect<
    ListServersResponse,
    | AccessDeniedException
    | InternalServerException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  putPortfolioPreferences(
    input: PutPortfolioPreferencesRequest,
  ): Effect.Effect<
    PutPortfolioPreferencesResponse,
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  startAssessment(
    input: StartAssessmentRequest,
  ): Effect.Effect<
    StartAssessmentResponse,
    | AccessDeniedException
    | InternalServerException
    | ServiceQuotaExceededException
    | ThrottlingException
    | CommonAwsError
  >;
  startImportFileTask(
    input: StartImportFileTaskRequest,
  ): Effect.Effect<
    StartImportFileTaskResponse,
    | AccessDeniedException
    | InternalServerException
    | ServiceQuotaExceededException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  startRecommendationReportGeneration(
    input: StartRecommendationReportGenerationRequest,
  ): Effect.Effect<
    StartRecommendationReportGenerationResponse,
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  stopAssessment(
    input: StopAssessmentRequest,
  ): Effect.Effect<
    StopAssessmentResponse,
    | AccessDeniedException
    | InternalServerException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  updateApplicationComponentConfig(
    input: UpdateApplicationComponentConfigRequest,
  ): Effect.Effect<
    UpdateApplicationComponentConfigResponse,
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  updateServerConfig(
    input: UpdateServerConfigRequest,
  ): Effect.Effect<
    UpdateServerConfigResponse,
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
}

export declare class Migrationhubstrategy extends MigrationHubStrategy {}

export declare class AccessDeniedException extends EffectData.TaggedError(
  "AccessDeniedException",
)<{
  readonly message: string;
}> {}
interface _AnalysisStatusUnion {
  runtimeAnalysisStatus?: string;
  srcCodeOrDbAnalysisStatus?: string;
}

export type AnalysisStatusUnion =
  | (_AnalysisStatusUnion & { runtimeAnalysisStatus: string })
  | (_AnalysisStatusUnion & { srcCodeOrDbAnalysisStatus: string });
export type AnalysisType = string;

export interface AnalyzableServerSummary {
  hostname?: string;
  ipAddress?: string;
  source?: string;
  vmId?: string;
}
export type AnalyzableServerSummaryList = Array<AnalyzableServerSummary>;
interface _AnalyzerNameUnion {
  binaryAnalyzerName?: string;
  runTimeAnalyzerName?: string;
  sourceCodeAnalyzerName?: string;
}

export type AnalyzerNameUnion =
  | (_AnalyzerNameUnion & { binaryAnalyzerName: string })
  | (_AnalyzerNameUnion & { runTimeAnalyzerName: string })
  | (_AnalyzerNameUnion & { sourceCodeAnalyzerName: string });
export interface AntipatternReportResult {
  analyzerName?: AnalyzerNameUnion;
  antiPatternReportS3Object?: S3Object;
  antipatternReportStatus?: string;
  antipatternReportStatusMessage?: string;
}
export type AntipatternReportResultList = Array<AntipatternReportResult>;
export type AntipatternReportStatus = string;

export interface AntipatternSeveritySummary {
  severity?: string;
  count?: number;
}
export type ApplicationComponentCriteria = string;

export interface ApplicationComponentDetail {
  id?: string;
  name?: string;
  recommendationSet?: RecommendationSet;
  analysisStatus?: string;
  statusMessage?: string;
  listAntipatternSeveritySummary?: Array<AntipatternSeveritySummary>;
  databaseConfigDetail?: DatabaseConfigDetail;
  sourceCodeRepositories?: Array<SourceCodeRepository>;
  appType?: string;
  resourceSubType?: string;
  inclusionStatus?: string;
  antipatternReportS3Object?: S3Object;
  antipatternReportStatus?: string;
  antipatternReportStatusMessage?: string;
  osVersion?: string;
  osDriver?: string;
  lastAnalyzedTimestamp?: Date | string;
  associatedServerId?: string;
  moreServerAssociationExists?: boolean;
  runtimeStatus?: string;
  runtimeStatusMessage?: string;
  appUnitError?: AppUnitError;
  resultList?: Array<Result>;
}
export type ApplicationComponentDetails = Array<ApplicationComponentDetail>;
export type ApplicationComponentId = string;

export interface ApplicationComponentStatusSummary {
  srcCodeOrDbAnalysisStatus?: string;
  count?: number;
}
export type ApplicationComponentStrategies =
  Array<ApplicationComponentStrategy>;
export interface ApplicationComponentStrategy {
  recommendation?: RecommendationSet;
  status?: string;
  isPreferred?: boolean;
}
export interface ApplicationComponentSummary {
  appType?: string;
  count?: number;
}
export type ApplicationMode = string;

export interface ApplicationPreferences {
  managementPreference?: ManagementPreference;
}
export type AppType = string;

export interface AppUnitError {
  appUnitErrorCategory?: string;
}
export type AppUnitErrorCategory = string;

export type AssessmentDataSourceType = string;

export type AssessmentStatus = string;

export type AssessmentStatusMessage = string;

export interface AssessmentSummary {
  listServerStrategySummary?: Array<StrategySummary>;
  listApplicationComponentStrategySummary?: Array<StrategySummary>;
  listAntipatternSeveritySummary?: Array<AntipatternSeveritySummary>;
  listApplicationComponentSummary?: Array<ApplicationComponentSummary>;
  listServerSummary?: Array<ServerSummary>;
  antipatternReportS3Object?: S3Object;
  antipatternReportStatus?: string;
  antipatternReportStatusMessage?: string;
  lastAnalyzedTimestamp?: Date | string;
  listApplicationComponentStatusSummary?: Array<ApplicationComponentStatusSummary>;
  listServerStatusSummary?: Array<ServerStatusSummary>;
}
export interface AssessmentTarget {
  condition: string;
  name: string;
  values: Array<string>;
}
export type AssessmentTargets = Array<AssessmentTarget>;
export type AssessmentTargetValues = Array<string>;
export interface AssociatedApplication {
  name?: string;
  id?: string;
}
export type AssociatedApplications = Array<AssociatedApplication>;
export type AssociatedServerIDs = Array<string>;
export type AsyncTaskId = string;

export type AuthType = string;

export interface AwsManagedResources {
  targetDestination: Array<string>;
}
export type AwsManagedTargetDestination = string;

export type AwsManagedTargetDestinations = Array<string>;
export type BinaryAnalyzerName = string;

export type MigrationhubstrategyBoolean = boolean;

export interface BusinessGoals {
  speedOfMigration?: number;
  reduceOperationalOverheadWithManagedServices?: number;
  modernizeInfrastructureWithCloudNativeTechnologies?: number;
  licenseCostReduction?: number;
}
export type BusinessGoalsInteger = number;

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
export type CollectorHealth = string;

export type Collectors = Array<Collector>;
export type Condition = string;

export interface ConfigurationSummary {
  vcenterBasedRemoteInfoList?: Array<VcenterBasedRemoteInfo>;
  ipAddressBasedRemoteInfoList?: Array<IPAddressBasedRemoteInfo>;
  versionControlInfoList?: Array<VersionControlInfo>;
  pipelineInfoList?: Array<PipelineInfo>;
  remoteSourceCodeAnalysisServerInfo?: RemoteSourceCodeAnalysisServerInfo;
}
export declare class ConflictException extends EffectData.TaggedError(
  "ConflictException",
)<{
  readonly message: string;
}> {}
export interface DatabaseConfigDetail {
  secretName?: string;
}
export type DatabaseManagementPreference = string;

interface _DatabaseMigrationPreference {
  heterogeneous?: Heterogeneous;
  homogeneous?: Homogeneous;
  noPreference?: NoDatabaseMigrationPreference;
}

export type DatabaseMigrationPreference =
  | (_DatabaseMigrationPreference & { heterogeneous: Heterogeneous })
  | (_DatabaseMigrationPreference & { homogeneous: Homogeneous })
  | (_DatabaseMigrationPreference & {
      noPreference: NoDatabaseMigrationPreference;
    });
export interface DatabasePreferences {
  databaseManagementPreference?: string;
  databaseMigrationPreference?: DatabaseMigrationPreference;
}
export interface DataCollectionDetails {
  status?: string;
  servers?: number;
  failed?: number;
  success?: number;
  inProgress?: number;
  startTime?: Date | string;
  completionTime?: Date | string;
  statusMessage?: string;
}
export type DataSourceType = string;

export declare class DependencyException extends EffectData.TaggedError(
  "DependencyException",
)<{
  readonly message?: string;
}> {}
export type errorMessage = string;

export interface GetApplicationComponentDetailsRequest {
  applicationComponentId: string;
}
export interface GetApplicationComponentDetailsResponse {
  applicationComponentDetail?: ApplicationComponentDetail;
  associatedApplications?: Array<AssociatedApplication>;
  moreApplicationResource?: boolean;
  associatedServerIds?: Array<string>;
}
export interface GetApplicationComponentStrategiesRequest {
  applicationComponentId: string;
}
export interface GetApplicationComponentStrategiesResponse {
  applicationComponentStrategies?: Array<ApplicationComponentStrategy>;
}
export interface GetAssessmentRequest {
  id: string;
}
export interface GetAssessmentResponse {
  id?: string;
  dataCollectionDetails?: DataCollectionDetails;
  assessmentTargets?: Array<AssessmentTarget>;
}
export interface GetImportFileTaskRequest {
  id: string;
}
export interface GetImportFileTaskResponse {
  id?: string;
  status?: string;
  startTime?: Date | string;
  inputS3Bucket?: string;
  inputS3Key?: string;
  statusReportS3Bucket?: string;
  statusReportS3Key?: string;
  completionTime?: Date | string;
  numberOfRecordsSuccess?: number;
  numberOfRecordsFailed?: number;
  importName?: string;
}
export interface GetLatestAssessmentIdRequest {}
export interface GetLatestAssessmentIdResponse {
  id?: string;
}
export interface GetPortfolioPreferencesRequest {}
export interface GetPortfolioPreferencesResponse {
  prioritizeBusinessGoals?: PrioritizeBusinessGoals;
  applicationPreferences?: ApplicationPreferences;
  databasePreferences?: DatabasePreferences;
  applicationMode?: string;
}
export interface GetPortfolioSummaryRequest {}
export interface GetPortfolioSummaryResponse {
  assessmentSummary?: AssessmentSummary;
}
export interface GetRecommendationReportDetailsRequest {
  id: string;
}
export interface GetRecommendationReportDetailsResponse {
  id?: string;
  recommendationReportDetails?: RecommendationReportDetails;
}
export interface GetServerDetailsRequest {
  serverId: string;
  nextToken?: string;
  maxResults?: number;
}
export interface GetServerDetailsResponse {
  nextToken?: string;
  serverDetail?: ServerDetail;
  associatedApplications?: Array<AssociatedApplication>;
}
export interface GetServerStrategiesRequest {
  serverId: string;
}
export interface GetServerStrategiesResponse {
  serverStrategies?: Array<ServerStrategy>;
}
export interface Group {
  name?: string;
  value?: string;
}
export type GroupIds = Array<Group>;
export type GroupName = string;

export interface Heterogeneous {
  targetDatabaseEngine: Array<string>;
}
export type HeterogeneousTargetDatabaseEngine = string;

export type HeterogeneousTargetDatabaseEngines = Array<string>;
export interface Homogeneous {
  targetDatabaseEngine?: Array<string>;
}
export type HomogeneousTargetDatabaseEngine = string;

export type HomogeneousTargetDatabaseEngines = Array<string>;
export interface ImportFileTaskInformation {
  id?: string;
  status?: string;
  startTime?: Date | string;
  inputS3Bucket?: string;
  inputS3Key?: string;
  statusReportS3Bucket?: string;
  statusReportS3Key?: string;
  completionTime?: Date | string;
  numberOfRecordsSuccess?: number;
  numberOfRecordsFailed?: number;
  importName?: string;
}
export type ImportFileTaskStatus = string;

export type importS3Bucket = string;

export type importS3Key = string;

export type InclusionStatus = string;

export type Integer = number;

export type InterfaceName = string;

export declare class InternalServerException extends EffectData.TaggedError(
  "InternalServerException",
)<{
  readonly message?: string;
}> {}
export type IPAddress = string;

export interface IPAddressBasedRemoteInfo {
  ipAddressConfigurationTimeStamp?: string;
  authType?: string;
  osType?: string;
}
export type IPAddressBasedRemoteInfoList = Array<IPAddressBasedRemoteInfo>;
export interface ListAnalyzableServersRequest {
  sort?: string;
  nextToken?: string;
  maxResults?: number;
}
export interface ListAnalyzableServersResponse {
  analyzableServers?: Array<AnalyzableServerSummary>;
  nextToken?: string;
}
export type ListAntipatternSeveritySummary = Array<AntipatternSeveritySummary>;
export interface ListApplicationComponentsRequest {
  applicationComponentCriteria?: string;
  filterValue?: string;
  sort?: string;
  groupIdFilter?: Array<Group>;
  nextToken?: string;
  maxResults?: number;
}
export interface ListApplicationComponentsResponse {
  applicationComponentInfos?: Array<ApplicationComponentDetail>;
  nextToken?: string;
}
export type ListApplicationComponentStatusSummary =
  Array<ApplicationComponentStatusSummary>;
export type ListApplicationComponentSummary =
  Array<ApplicationComponentSummary>;
export interface ListCollectorsRequest {
  nextToken?: string;
  maxResults?: number;
}
export interface ListCollectorsResponse {
  Collectors?: Array<Collector>;
  nextToken?: string;
}
export type ListImportFileTaskInformation = Array<ImportFileTaskInformation>;
export interface ListImportFileTaskRequest {
  nextToken?: string;
  maxResults?: number;
}
export interface ListImportFileTaskResponse {
  taskInfos?: Array<ImportFileTaskInformation>;
  nextToken?: string;
}
export interface ListServersRequest {
  serverCriteria?: string;
  filterValue?: string;
  sort?: string;
  groupIdFilter?: Array<Group>;
  nextToken?: string;
  maxResults?: number;
}
export interface ListServersResponse {
  serverInfos?: Array<ServerDetail>;
  nextToken?: string;
}
export type ListServerStatusSummary = Array<ServerStatusSummary>;
export type ListServerSummary = Array<ServerSummary>;
export type ListStrategySummary = Array<StrategySummary>;
export type Location = string;

export type MacAddress = string;

interface _ManagementPreference {
  awsManagedResources?: AwsManagedResources;
  selfManageResources?: SelfManageResources;
  noPreference?: NoManagementPreference;
}

export type ManagementPreference =
  | (_ManagementPreference & { awsManagedResources: AwsManagedResources })
  | (_ManagementPreference & { selfManageResources: SelfManageResources })
  | (_ManagementPreference & { noPreference: NoManagementPreference });
export type MaxResult = number;

export type NetMask = string;

export interface NetworkInfo {
  interfaceName: string;
  ipAddress: string;
  macAddress: string;
  netMask: string;
}
export type NetworkInfoList = Array<NetworkInfo>;
export type NextToken = string;

export interface NoDatabaseMigrationPreference {
  targetDatabaseEngine: Array<string>;
}
export interface NoManagementPreference {
  targetDestination: Array<string>;
}
export type NoPreferenceTargetDestination = string;

export type NoPreferenceTargetDestinations = Array<string>;
export interface OSInfo {
  type?: string;
  version?: string;
}
export type OSType = string;

export type OSVersion = string;

export type OutputFormat = string;

export interface PipelineInfo {
  pipelineType?: string;
  pipelineConfigurationTimeStamp?: string;
}
export type PipelineInfoList = Array<PipelineInfo>;
export type PipelineType = string;

export interface PrioritizeBusinessGoals {
  businessGoals?: BusinessGoals;
}
export type ProjectName = string;

export interface PutPortfolioPreferencesRequest {
  prioritizeBusinessGoals?: PrioritizeBusinessGoals;
  applicationPreferences?: ApplicationPreferences;
  databasePreferences?: DatabasePreferences;
  applicationMode?: string;
}
export interface PutPortfolioPreferencesResponse {}
export interface RecommendationReportDetails {
  status?: string;
  statusMessage?: string;
  startTime?: Date | string;
  completionTime?: Date | string;
  s3Bucket?: string;
  s3Keys?: Array<string>;
}
export type RecommendationReportStatus = string;

export type RecommendationReportStatusMessage = string;

export type RecommendationReportTimeStamp = Date | string;

export interface RecommendationSet {
  transformationTool?: TransformationTool;
  targetDestination?: string;
  strategy?: string;
}
export type RecommendationTaskId = string;

export interface RemoteSourceCodeAnalysisServerInfo {
  remoteSourceCodeAnalysisServerConfigurationTimestamp?: string;
}
export type ResourceId = string;

export type ResourceName = string;

export declare class ResourceNotFoundException extends EffectData.TaggedError(
  "ResourceNotFoundException",
)<{
  readonly message?: string;
}> {}
export type ResourceSubType = string;

export interface Result {
  analysisType?: string;
  analysisStatus?: AnalysisStatusUnion;
  statusMessage?: string;
  antipatternReportResultList?: Array<AntipatternReportResult>;
}
export type ResultList = Array<Result>;
export type RuntimeAnalysisStatus = string;

export type RunTimeAnalyzerName = string;

export type RunTimeAssessmentStatus = string;

export type S3Bucket = string;

export type S3Key = string;

export type S3Keys = Array<string>;
export interface S3Object {
  s3Bucket?: string;
  s3key?: string;
}
export type SecretsManagerKey = string;

export interface SelfManageResources {
  targetDestination: Array<string>;
}
export type SelfManageTargetDestination = string;

export type SelfManageTargetDestinations = Array<string>;
export type ServerCriteria = string;

export interface ServerDetail {
  id?: string;
  name?: string;
  recommendationSet?: RecommendationSet;
  dataCollectionStatus?: string;
  statusMessage?: string;
  listAntipatternSeveritySummary?: Array<AntipatternSeveritySummary>;
  systemInfo?: SystemInfo;
  applicationComponentStrategySummary?: Array<StrategySummary>;
  antipatternReportS3Object?: S3Object;
  antipatternReportStatus?: string;
  antipatternReportStatusMessage?: string;
  serverType?: string;
  lastAnalyzedTimestamp?: Date | string;
  serverError?: ServerError;
}
export type ServerDetails = Array<ServerDetail>;
export interface ServerError {
  serverErrorCategory?: string;
}
export type ServerErrorCategory = string;

export type ServerId = string;

export type ServerOsType = string;

export interface ServerStatusSummary {
  runTimeAssessmentStatus?: string;
  count?: number;
}
export type ServerStrategies = Array<ServerStrategy>;
export interface ServerStrategy {
  recommendation?: RecommendationSet;
  status?: string;
  numberOfApplicationComponents?: number;
  isPreferred?: boolean;
}
export interface ServerSummary {
  ServerOsType?: string;
  count?: number;
}
export declare class ServiceLinkedRoleLockClientException extends EffectData.TaggedError(
  "ServiceLinkedRoleLockClientException",
)<{
  readonly message?: string;
}> {}
export declare class ServiceQuotaExceededException extends EffectData.TaggedError(
  "ServiceQuotaExceededException",
)<{
  readonly message: string;
}> {}
export type Severity = string;

export type SortOrder = string;

export interface SourceCode {
  versionControl?: string;
  sourceVersion?: string;
  location?: string;
  projectName?: string;
}
export type SourceCodeAnalyzerName = string;

export type SourceCodeList = Array<SourceCode>;
export type SourceCodeRepositories = Array<SourceCodeRepository>;
export interface SourceCodeRepository {
  repository?: string;
  branch?: string;
  versionControlType?: string;
  projectName?: string;
}
export type SourceVersion = string;

export type SrcCodeOrDbAnalysisStatus = string;

export interface StartAssessmentRequest {
  s3bucketForAnalysisData?: string;
  s3bucketForReportData?: string;
  assessmentTargets?: Array<AssessmentTarget>;
  assessmentDataSourceType?: string;
}
export interface StartAssessmentResponse {
  assessmentId?: string;
}
export interface StartImportFileTaskRequest {
  name: string;
  S3Bucket: string;
  s3key: string;
  dataSourceType?: string;
  groupId?: Array<Group>;
  s3bucketForReportData?: string;
}
export interface StartImportFileTaskResponse {
  id?: string;
}
export interface StartRecommendationReportGenerationRequest {
  outputFormat?: string;
  groupIdFilter?: Array<Group>;
}
export interface StartRecommendationReportGenerationResponse {
  id?: string;
}
export type StatusMessage = string;

export interface StopAssessmentRequest {
  assessmentId: string;
}
export interface StopAssessmentResponse {}
export type Strategy = string;

export interface StrategyOption {
  strategy?: string;
  toolName?: string;
  targetDestination?: string;
  isPreferred?: boolean;
}
export type StrategyRecommendation = string;

export interface StrategySummary {
  strategy?: string;
  count?: number;
}
export type MigrationhubstrategyString = string;

export interface SystemInfo {
  osInfo?: OSInfo;
  fileSystemType?: string;
  networkInfoList?: Array<NetworkInfo>;
  cpuArchitecture?: string;
}
export type TargetDatabaseEngine = string;

export type TargetDatabaseEngines = Array<string>;
export type TargetDestination = string;

export declare class ThrottlingException extends EffectData.TaggedError(
  "ThrottlingException",
)<{
  readonly message?: string;
}> {}
export type TimeStamp = Date | string;

export type TranformationToolDescription = string;

export type TranformationToolInstallationLink = string;

export interface TransformationTool {
  name?: string;
  description?: string;
  tranformationToolInstallationLink?: string;
}
export type TransformationToolName = string;

export interface UpdateApplicationComponentConfigRequest {
  applicationComponentId: string;
  inclusionStatus?: string;
  strategyOption?: StrategyOption;
  sourceCodeList?: Array<SourceCode>;
  secretsManagerKey?: string;
  configureOnly?: boolean;
  appType?: string;
}
export interface UpdateApplicationComponentConfigResponse {}
export interface UpdateServerConfigRequest {
  serverId: string;
  strategyOption?: StrategyOption;
}
export interface UpdateServerConfigResponse {}
export declare class ValidationException extends EffectData.TaggedError(
  "ValidationException",
)<{
  readonly message?: string;
}> {}
export interface VcenterBasedRemoteInfo {
  vcenterConfigurationTimeStamp?: string;
  osType?: string;
}
export type VcenterBasedRemoteInfoList = Array<VcenterBasedRemoteInfo>;
export type VersionControl = string;

export interface VersionControlInfo {
  versionControlType?: string;
  versionControlConfigurationTimeStamp?: string;
}
export type VersionControlInfoList = Array<VersionControlInfo>;
export type VersionControlType = string;

export declare namespace GetApplicationComponentDetails {
  export type Input = GetApplicationComponentDetailsRequest;
  export type Output = GetApplicationComponentDetailsResponse;
  export type Error =
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError;
}

export declare namespace GetApplicationComponentStrategies {
  export type Input = GetApplicationComponentStrategiesRequest;
  export type Output = GetApplicationComponentStrategiesResponse;
  export type Error =
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError;
}

export declare namespace GetAssessment {
  export type Input = GetAssessmentRequest;
  export type Output = GetAssessmentResponse;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError;
}

export declare namespace GetImportFileTask {
  export type Input = GetImportFileTaskRequest;
  export type Output = GetImportFileTaskResponse;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace GetLatestAssessmentId {
  export type Input = GetLatestAssessmentIdRequest;
  export type Output = GetLatestAssessmentIdResponse;
  export type Error =
    | AccessDeniedException
    | DependencyException
    | InternalServerException
    | ValidationException
    | CommonAwsError;
}

export declare namespace GetPortfolioPreferences {
  export type Input = GetPortfolioPreferencesRequest;
  export type Output = GetPortfolioPreferencesResponse;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError;
}

export declare namespace GetPortfolioSummary {
  export type Input = GetPortfolioSummaryRequest;
  export type Output = GetPortfolioSummaryResponse;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ThrottlingException
    | CommonAwsError;
}

export declare namespace GetRecommendationReportDetails {
  export type Input = GetRecommendationReportDetailsRequest;
  export type Output = GetRecommendationReportDetailsResponse;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace GetServerDetails {
  export type Input = GetServerDetailsRequest;
  export type Output = GetServerDetailsResponse;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace GetServerStrategies {
  export type Input = GetServerStrategiesRequest;
  export type Output = GetServerStrategiesResponse;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace ListAnalyzableServers {
  export type Input = ListAnalyzableServersRequest;
  export type Output = ListAnalyzableServersResponse;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace ListApplicationComponents {
  export type Input = ListApplicationComponentsRequest;
  export type Output = ListApplicationComponentsResponse;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ServiceLinkedRoleLockClientException
    | ValidationException
    | CommonAwsError;
}

export declare namespace ListCollectors {
  export type Input = ListCollectorsRequest;
  export type Output = ListCollectorsResponse;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace ListImportFileTask {
  export type Input = ListImportFileTaskRequest;
  export type Output = ListImportFileTaskResponse;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace ListServers {
  export type Input = ListServersRequest;
  export type Output = ListServersResponse;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace PutPortfolioPreferences {
  export type Input = PutPortfolioPreferencesRequest;
  export type Output = PutPortfolioPreferencesResponse;
  export type Error =
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace StartAssessment {
  export type Input = StartAssessmentRequest;
  export type Output = StartAssessmentResponse;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ServiceQuotaExceededException
    | ThrottlingException
    | CommonAwsError;
}

export declare namespace StartImportFileTask {
  export type Input = StartImportFileTaskRequest;
  export type Output = StartImportFileTaskResponse;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ServiceQuotaExceededException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace StartRecommendationReportGeneration {
  export type Input = StartRecommendationReportGenerationRequest;
  export type Output = StartRecommendationReportGenerationResponse;
  export type Error =
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace StopAssessment {
  export type Input = StopAssessmentRequest;
  export type Output = StopAssessmentResponse;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace UpdateApplicationComponentConfig {
  export type Input = UpdateApplicationComponentConfigRequest;
  export type Output = UpdateApplicationComponentConfigResponse;
  export type Error =
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace UpdateServerConfig {
  export type Input = UpdateServerConfigRequest;
  export type Output = UpdateServerConfigResponse;
  export type Error =
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}
