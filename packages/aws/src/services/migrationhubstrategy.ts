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
const GetApplicationComponentDetailsRequest = /*@__PURE__*/ __L.at(
  __c0,
  0,
) as any as S.Schema<GetApplicationComponentDetailsRequest>;
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
const TransformationTool = /*@__PURE__*/ __L.at(__c0, 1) as any as S.Schema<TransformationTool>;
export type TargetDestination = string;
export type Strategy = string;
export interface RecommendationSet {
  transformationTool?: TransformationTool;
  targetDestination?: string;
  strategy?: string;
}
const RecommendationSet = /*@__PURE__*/ __L.at(__c0, 2) as any as S.Schema<RecommendationSet>;
export type SrcCodeOrDbAnalysisStatus = string;
export type StatusMessage = string;
export type Severity = string;
export interface AntipatternSeveritySummary {
  severity?: string;
  count?: number;
}
const AntipatternSeveritySummary = /*@__PURE__*/ __L.at(
  __c0,
  3,
) as any as S.Schema<AntipatternSeveritySummary>;
export type ListAntipatternSeveritySummary = AntipatternSeveritySummary[];
const ListAntipatternSeveritySummary = /*@__PURE__*/ __L.at(__c0, 4);
export interface DatabaseConfigDetail {
  secretName?: string;
}
const DatabaseConfigDetail = /*@__PURE__*/ __L.at(__c0, 5) as any as S.Schema<DatabaseConfigDetail>;
export interface SourceCodeRepository {
  repository?: string;
  branch?: string;
  versionControlType?: string;
  projectName?: string;
}
const SourceCodeRepository = /*@__PURE__*/ __L.at(__c0, 6) as any as S.Schema<SourceCodeRepository>;
export type SourceCodeRepositories = SourceCodeRepository[];
const SourceCodeRepositories = /*@__PURE__*/ __L.at(__c0, 7);
export type AppType = string;
export type ResourceSubType = string;
export type InclusionStatus = string;
export type S3Bucket = string;
export type S3Key = string;
export interface S3Object {
  s3Bucket?: string;
  s3key?: string;
}
const S3Object = /*@__PURE__*/ __L.at(__c1, 0) as any as S.Schema<S3Object>;
export type AntipatternReportStatus = string;
export type ServerId = string;
export type RuntimeAnalysisStatus = string;
export type AppUnitErrorCategory = string;
export interface AppUnitError {
  appUnitErrorCategory?: string;
}
const AppUnitError = /*@__PURE__*/ __L.at(__c1, 1) as any as S.Schema<AppUnitError>;
export type AnalysisType = string;
export type AnalysisStatusUnion =
  | { runtimeAnalysisStatus: string; srcCodeOrDbAnalysisStatus?: never }
  | { runtimeAnalysisStatus?: never; srcCodeOrDbAnalysisStatus: string };
const AnalysisStatusUnion = /*@__PURE__*/ __L.at(__c1, 2);
export type BinaryAnalyzerName = string;
export type RunTimeAnalyzerName = string;
export type SourceCodeAnalyzerName = string;
export type AnalyzerNameUnion =
  | { binaryAnalyzerName: string; runTimeAnalyzerName?: never; sourceCodeAnalyzerName?: never }
  | { binaryAnalyzerName?: never; runTimeAnalyzerName: string; sourceCodeAnalyzerName?: never }
  | { binaryAnalyzerName?: never; runTimeAnalyzerName?: never; sourceCodeAnalyzerName: string };
const AnalyzerNameUnion = /*@__PURE__*/ __L.at(__c1, 3);
export interface AntipatternReportResult {
  analyzerName?: AnalyzerNameUnion;
  antiPatternReportS3Object?: S3Object;
  antipatternReportStatus?: string;
  antipatternReportStatusMessage?: string;
}
const AntipatternReportResult = /*@__PURE__*/ __L.at(
  __c1,
  4,
) as any as S.Schema<AntipatternReportResult>;
export type AntipatternReportResultList = AntipatternReportResult[];
const AntipatternReportResultList = /*@__PURE__*/ __L.at(__c1, 5);
export interface Result {
  analysisType?: string;
  analysisStatus?: AnalysisStatusUnion;
  statusMessage?: string;
  antipatternReportResultList?: AntipatternReportResult[];
}
const Result = /*@__PURE__*/ __L.at(__c1, 6) as any as S.Schema<Result>;
export type ResultList = Result[];
const ResultList = /*@__PURE__*/ __L.at(__c1, 7);
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
const ApplicationComponentDetail = /*@__PURE__*/ __L.at(
  __c2,
  0,
) as any as S.Schema<ApplicationComponentDetail>;
export interface AssociatedApplication {
  name?: string;
  id?: string;
}
const AssociatedApplication = /*@__PURE__*/ __L.at(
  __c2,
  1,
) as any as S.Schema<AssociatedApplication>;
export type AssociatedApplications = AssociatedApplication[];
const AssociatedApplications = /*@__PURE__*/ __L.at(__c2, 2);
export type AssociatedServerIDs = string[];
const AssociatedServerIDs = /*@__PURE__*/ __L.at(__c2, 3);
export interface GetApplicationComponentDetailsResponse {
  applicationComponentDetail?: ApplicationComponentDetail;
  associatedApplications?: AssociatedApplication[];
  moreApplicationResource?: boolean;
  associatedServerIds?: string[];
}
const GetApplicationComponentDetailsResponse = /*@__PURE__*/ __L.at(
  __c2,
  4,
) as any as S.Schema<GetApplicationComponentDetailsResponse>;
export interface GetApplicationComponentStrategiesRequest {
  applicationComponentId: string;
}
const GetApplicationComponentStrategiesRequest = /*@__PURE__*/ __L.at(
  __c2,
  5,
) as any as S.Schema<GetApplicationComponentStrategiesRequest>;
export type StrategyRecommendation = string;
export interface ApplicationComponentStrategy {
  recommendation?: RecommendationSet;
  status?: string;
  isPreferred?: boolean;
}
const ApplicationComponentStrategy = /*@__PURE__*/ __L.at(
  __c2,
  6,
) as any as S.Schema<ApplicationComponentStrategy>;
export type ApplicationComponentStrategies = ApplicationComponentStrategy[];
const ApplicationComponentStrategies = /*@__PURE__*/ __L.at(__c2, 7);
export interface GetApplicationComponentStrategiesResponse {
  applicationComponentStrategies?: ApplicationComponentStrategy[];
}
const GetApplicationComponentStrategiesResponse = /*@__PURE__*/ __L.at(
  __c3,
  0,
) as any as S.Schema<GetApplicationComponentStrategiesResponse>;
export type AsyncTaskId = string;
export interface GetAssessmentRequest {
  id: string;
}
const GetAssessmentRequest = /*@__PURE__*/ __L.at(__c3, 1) as any as S.Schema<GetAssessmentRequest>;
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
const DataCollectionDetails = /*@__PURE__*/ __L.at(
  __c3,
  2,
) as any as S.Schema<DataCollectionDetails>;
export type Condition = string;
export type AssessmentTargetValues = string[];
const AssessmentTargetValues = AssociatedServerIDs as any as S.Schema<AssessmentTargetValues>;
export interface AssessmentTarget {
  condition: string;
  name: string;
  values: string[];
}
const AssessmentTarget = /*@__PURE__*/ __L.at(__c3, 3) as any as S.Schema<AssessmentTarget>;
export type AssessmentTargets = AssessmentTarget[];
const AssessmentTargets = /*@__PURE__*/ __L.at(__c3, 4);
export interface GetAssessmentResponse {
  id?: string;
  dataCollectionDetails?: DataCollectionDetails;
  assessmentTargets?: AssessmentTarget[];
}
const GetAssessmentResponse = /*@__PURE__*/ __L.at(
  __c3,
  5,
) as any as S.Schema<GetAssessmentResponse>;
export interface GetImportFileTaskRequest {
  id: string;
}
const GetImportFileTaskRequest = /*@__PURE__*/ __L.at(
  __c3,
  6,
) as any as S.Schema<GetImportFileTaskRequest>;
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
const GetImportFileTaskResponse = /*@__PURE__*/ __L.at(
  __c3,
  7,
) as any as S.Schema<GetImportFileTaskResponse>;
export interface GetLatestAssessmentIdRequest {}
const GetLatestAssessmentIdRequest = /*@__PURE__*/ __L.at(
  __c4,
  0,
) as any as S.Schema<GetLatestAssessmentIdRequest>;
export interface GetLatestAssessmentIdResponse {
  id?: string;
}
const GetLatestAssessmentIdResponse = /*@__PURE__*/ __L.at(
  __c4,
  1,
) as any as S.Schema<GetLatestAssessmentIdResponse>;
export interface GetPortfolioPreferencesRequest {}
const GetPortfolioPreferencesRequest = /*@__PURE__*/ __L.at(
  __c4,
  2,
) as any as S.Schema<GetPortfolioPreferencesRequest>;
export type BusinessGoalsInteger = number;
export interface BusinessGoals {
  speedOfMigration?: number;
  reduceOperationalOverheadWithManagedServices?: number;
  modernizeInfrastructureWithCloudNativeTechnologies?: number;
  licenseCostReduction?: number;
}
const BusinessGoals = /*@__PURE__*/ __L.at(__c4, 3) as any as S.Schema<BusinessGoals>;
export interface PrioritizeBusinessGoals {
  businessGoals?: BusinessGoals;
}
const PrioritizeBusinessGoals = /*@__PURE__*/ __L.at(
  __c4,
  4,
) as any as S.Schema<PrioritizeBusinessGoals>;
export type AwsManagedTargetDestination = string;
export type AwsManagedTargetDestinations = string[];
const AwsManagedTargetDestinations =
  AssociatedServerIDs as any as S.Schema<AwsManagedTargetDestinations>;
export interface AwsManagedResources {
  targetDestination: string[];
}
const AwsManagedResources = /*@__PURE__*/ __L.at(__c4, 5) as any as S.Schema<AwsManagedResources>;
export type SelfManageTargetDestination = string;
export type SelfManageTargetDestinations = string[];
export interface SelfManageResources {
  targetDestination: string[];
}
const SelfManageResources = AwsManagedResources as any as S.Schema<SelfManageResources>;
export type NoPreferenceTargetDestination = string;
export type NoPreferenceTargetDestinations = string[];
export interface NoManagementPreference {
  targetDestination: string[];
}
const NoManagementPreference = AwsManagedResources as any as S.Schema<NoManagementPreference>;
export type ManagementPreference =
  | { awsManagedResources: AwsManagedResources; selfManageResources?: never; noPreference?: never }
  | { awsManagedResources?: never; selfManageResources: SelfManageResources; noPreference?: never }
  | {
      awsManagedResources?: never;
      selfManageResources?: never;
      noPreference: NoManagementPreference;
    };
const ManagementPreference = /*@__PURE__*/ __L.at(__c4, 6);
export interface ApplicationPreferences {
  managementPreference?: ManagementPreference;
}
const ApplicationPreferences = /*@__PURE__*/ __L.at(
  __c4,
  7,
) as any as S.Schema<ApplicationPreferences>;
export type DatabaseManagementPreference = string;
export type HeterogeneousTargetDatabaseEngine = string;
export type HeterogeneousTargetDatabaseEngines = string[];
const HeterogeneousTargetDatabaseEngines =
  AssociatedServerIDs as any as S.Schema<HeterogeneousTargetDatabaseEngines>;
export interface Heterogeneous {
  targetDatabaseEngine: string[];
}
const Heterogeneous = /*@__PURE__*/ __L.at(__c5, 0) as any as S.Schema<Heterogeneous>;
export type HomogeneousTargetDatabaseEngine = string;
export type HomogeneousTargetDatabaseEngines = string[];
const HomogeneousTargetDatabaseEngines =
  AssociatedServerIDs as any as S.Schema<HomogeneousTargetDatabaseEngines>;
export interface Homogeneous {
  targetDatabaseEngine?: string[];
}
const Homogeneous = /*@__PURE__*/ __L.at(__c5, 1) as any as S.Schema<Homogeneous>;
export type TargetDatabaseEngine = string;
export type TargetDatabaseEngines = string[];
const TargetDatabaseEngines = AssociatedServerIDs as any as S.Schema<TargetDatabaseEngines>;
export interface NoDatabaseMigrationPreference {
  targetDatabaseEngine: string[];
}
const NoDatabaseMigrationPreference = /*@__PURE__*/ __L.at(
  __c5,
  2,
) as any as S.Schema<NoDatabaseMigrationPreference>;
export type DatabaseMigrationPreference =
  | { heterogeneous: Heterogeneous; homogeneous?: never; noPreference?: never }
  | { heterogeneous?: never; homogeneous: Homogeneous; noPreference?: never }
  | { heterogeneous?: never; homogeneous?: never; noPreference: NoDatabaseMigrationPreference };
const DatabaseMigrationPreference = /*@__PURE__*/ __L.at(__c5, 3);
export interface DatabasePreferences {
  databaseManagementPreference?: string;
  databaseMigrationPreference?: DatabaseMigrationPreference;
}
const DatabasePreferences = /*@__PURE__*/ __L.at(__c5, 4) as any as S.Schema<DatabasePreferences>;
export type ApplicationMode = string;
export interface GetPortfolioPreferencesResponse {
  prioritizeBusinessGoals?: PrioritizeBusinessGoals;
  applicationPreferences?: ApplicationPreferences;
  databasePreferences?: DatabasePreferences;
  applicationMode?: string;
}
const GetPortfolioPreferencesResponse = /*@__PURE__*/ __L.at(
  __c5,
  5,
) as any as S.Schema<GetPortfolioPreferencesResponse>;
export interface GetPortfolioSummaryRequest {}
const GetPortfolioSummaryRequest = /*@__PURE__*/ __L.at(
  __c5,
  6,
) as any as S.Schema<GetPortfolioSummaryRequest>;
export interface StrategySummary {
  strategy?: string;
  count?: number;
}
const StrategySummary = /*@__PURE__*/ __L.at(__c5, 7) as any as S.Schema<StrategySummary>;
export type ListStrategySummary = StrategySummary[];
const ListStrategySummary = /*@__PURE__*/ __L.at(__c6, 0);
export interface ApplicationComponentSummary {
  appType?: string;
  count?: number;
}
const ApplicationComponentSummary = /*@__PURE__*/ __L.at(
  __c6,
  1,
) as any as S.Schema<ApplicationComponentSummary>;
export type ListApplicationComponentSummary = ApplicationComponentSummary[];
const ListApplicationComponentSummary = /*@__PURE__*/ __L.at(__c6, 2);
export type ServerOsType = string;
export interface ServerSummary {
  ServerOsType?: string;
  count?: number;
}
const ServerSummary = /*@__PURE__*/ __L.at(__c6, 3) as any as S.Schema<ServerSummary>;
export type ListServerSummary = ServerSummary[];
const ListServerSummary = /*@__PURE__*/ __L.at(__c6, 4);
export interface ApplicationComponentStatusSummary {
  srcCodeOrDbAnalysisStatus?: string;
  count?: number;
}
const ApplicationComponentStatusSummary = /*@__PURE__*/ __L.at(
  __c6,
  5,
) as any as S.Schema<ApplicationComponentStatusSummary>;
export type ListApplicationComponentStatusSummary = ApplicationComponentStatusSummary[];
const ListApplicationComponentStatusSummary = /*@__PURE__*/ __L.at(__c6, 6);
export type RunTimeAssessmentStatus = string;
export interface ServerStatusSummary {
  runTimeAssessmentStatus?: string;
  count?: number;
}
const ServerStatusSummary = /*@__PURE__*/ __L.at(__c6, 7) as any as S.Schema<ServerStatusSummary>;
export type ListServerStatusSummary = ServerStatusSummary[];
const ListServerStatusSummary = /*@__PURE__*/ __L.at(__c7, 0);
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
const AssessmentSummary = /*@__PURE__*/ __L.at(__c7, 1) as any as S.Schema<AssessmentSummary>;
export interface GetPortfolioSummaryResponse {
  assessmentSummary?: AssessmentSummary;
}
const GetPortfolioSummaryResponse = /*@__PURE__*/ __L.at(
  __c7,
  2,
) as any as S.Schema<GetPortfolioSummaryResponse>;
export type RecommendationTaskId = string;
export interface GetRecommendationReportDetailsRequest {
  id: string;
}
const GetRecommendationReportDetailsRequest = /*@__PURE__*/ __L.at(
  __c7,
  3,
) as any as S.Schema<GetRecommendationReportDetailsRequest>;
export type RecommendationReportStatus = string;
export type RecommendationReportStatusMessage = string;
export type RecommendationReportTimeStamp = Date;
export type S3Keys = string[];
const S3Keys = AssociatedServerIDs as any as S.Schema<S3Keys>;
export interface RecommendationReportDetails {
  status?: string;
  statusMessage?: string;
  startTime?: Date;
  completionTime?: Date;
  s3Bucket?: string;
  s3Keys?: string[];
}
const RecommendationReportDetails = /*@__PURE__*/ __L.at(
  __c7,
  4,
) as any as S.Schema<RecommendationReportDetails>;
export interface GetRecommendationReportDetailsResponse {
  id?: string;
  recommendationReportDetails?: RecommendationReportDetails;
}
const GetRecommendationReportDetailsResponse = /*@__PURE__*/ __L.at(
  __c7,
  5,
) as any as S.Schema<GetRecommendationReportDetailsResponse>;
export type NextToken = string;
export type MaxResult = number;
export interface GetServerDetailsRequest {
  serverId: string;
  nextToken?: string;
  maxResults?: number;
}
const GetServerDetailsRequest = /*@__PURE__*/ __L.at(
  __c7,
  6,
) as any as S.Schema<GetServerDetailsRequest>;
export type OSType = string;
export type OSVersion = string;
export interface OSInfo {
  type?: string;
  version?: string;
}
const OSInfo = /*@__PURE__*/ __L.at(__c7, 7) as any as S.Schema<OSInfo>;
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
const NetworkInfo = /*@__PURE__*/ __L.at(__c8, 0) as any as S.Schema<NetworkInfo>;
export type NetworkInfoList = NetworkInfo[];
const NetworkInfoList = /*@__PURE__*/ __L.at(__c8, 1);
export interface SystemInfo {
  osInfo?: OSInfo;
  fileSystemType?: string;
  networkInfoList?: NetworkInfo[];
  cpuArchitecture?: string;
}
const SystemInfo = /*@__PURE__*/ __L.at(__c8, 2) as any as S.Schema<SystemInfo>;
export type ServerErrorCategory = string;
export interface ServerError {
  serverErrorCategory?: string;
}
const ServerError = /*@__PURE__*/ __L.at(__c8, 3) as any as S.Schema<ServerError>;
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
const ServerDetail = /*@__PURE__*/ __L.at(__c8, 4) as any as S.Schema<ServerDetail>;
export interface GetServerDetailsResponse {
  nextToken?: string;
  serverDetail?: ServerDetail;
  associatedApplications?: AssociatedApplication[];
}
const GetServerDetailsResponse = /*@__PURE__*/ __L.at(
  __c8,
  5,
) as any as S.Schema<GetServerDetailsResponse>;
export interface GetServerStrategiesRequest {
  serverId: string;
}
const GetServerStrategiesRequest = /*@__PURE__*/ __L.at(
  __c8,
  6,
) as any as S.Schema<GetServerStrategiesRequest>;
export interface ServerStrategy {
  recommendation?: RecommendationSet;
  status?: string;
  numberOfApplicationComponents?: number;
  isPreferred?: boolean;
}
const ServerStrategy = /*@__PURE__*/ __L.at(__c8, 7) as any as S.Schema<ServerStrategy>;
export type ServerStrategies = ServerStrategy[];
const ServerStrategies = /*@__PURE__*/ __L.at(__c9, 0);
export interface GetServerStrategiesResponse {
  serverStrategies?: ServerStrategy[];
}
const GetServerStrategiesResponse = /*@__PURE__*/ __L.at(
  __c9,
  1,
) as any as S.Schema<GetServerStrategiesResponse>;
export type SortOrder = string;
export interface ListAnalyzableServersRequest {
  sort?: string;
  nextToken?: string;
  maxResults?: number;
}
const ListAnalyzableServersRequest = /*@__PURE__*/ __L.at(
  __c9,
  2,
) as any as S.Schema<ListAnalyzableServersRequest>;
export interface AnalyzableServerSummary {
  hostname?: string;
  ipAddress?: string;
  source?: string;
  vmId?: string;
}
const AnalyzableServerSummary = /*@__PURE__*/ __L.at(
  __c9,
  3,
) as any as S.Schema<AnalyzableServerSummary>;
export type AnalyzableServerSummaryList = AnalyzableServerSummary[];
const AnalyzableServerSummaryList = /*@__PURE__*/ __L.at(__c9, 4);
export interface ListAnalyzableServersResponse {
  analyzableServers?: AnalyzableServerSummary[];
  nextToken?: string;
}
const ListAnalyzableServersResponse = /*@__PURE__*/ __L.at(
  __c9,
  5,
) as any as S.Schema<ListAnalyzableServersResponse>;
export type ApplicationComponentCriteria = string;
export type GroupName = string;
export interface Group {
  name?: string;
  value?: string;
}
const Group = /*@__PURE__*/ __L.at(__c9, 6) as any as S.Schema<Group>;
export type GroupIds = Group[];
const GroupIds = /*@__PURE__*/ __L.at(__c9, 7);
export interface ListApplicationComponentsRequest {
  applicationComponentCriteria?: string;
  filterValue?: string;
  sort?: string;
  groupIdFilter?: Group[];
  nextToken?: string;
  maxResults?: number;
}
const ListApplicationComponentsRequest = /*@__PURE__*/ __L.at(
  __c10,
  0,
) as any as S.Schema<ListApplicationComponentsRequest>;
export type ApplicationComponentDetails = ApplicationComponentDetail[];
const ApplicationComponentDetails = /*@__PURE__*/ __L.at(__c10, 1);
export interface ListApplicationComponentsResponse {
  applicationComponentInfos?: ApplicationComponentDetail[];
  nextToken?: string;
}
const ListApplicationComponentsResponse = /*@__PURE__*/ __L.at(
  __c10,
  2,
) as any as S.Schema<ListApplicationComponentsResponse>;
export interface ListCollectorsRequest {
  nextToken?: string;
  maxResults?: number;
}
const ListCollectorsRequest = /*@__PURE__*/ __L.at(
  __c10,
  3,
) as any as S.Schema<ListCollectorsRequest>;
export type CollectorHealth = string;
export interface VcenterBasedRemoteInfo {
  vcenterConfigurationTimeStamp?: string;
  osType?: string;
}
const VcenterBasedRemoteInfo = /*@__PURE__*/ __L.at(
  __c10,
  4,
) as any as S.Schema<VcenterBasedRemoteInfo>;
export type VcenterBasedRemoteInfoList = VcenterBasedRemoteInfo[];
const VcenterBasedRemoteInfoList = /*@__PURE__*/ __L.at(__c10, 5);
export type AuthType = string;
export interface IPAddressBasedRemoteInfo {
  ipAddressConfigurationTimeStamp?: string;
  authType?: string;
  osType?: string;
}
const IPAddressBasedRemoteInfo = /*@__PURE__*/ __L.at(
  __c10,
  6,
) as any as S.Schema<IPAddressBasedRemoteInfo>;
export type IPAddressBasedRemoteInfoList = IPAddressBasedRemoteInfo[];
const IPAddressBasedRemoteInfoList = /*@__PURE__*/ __L.at(__c10, 7);
export type VersionControlType = string;
export interface VersionControlInfo {
  versionControlType?: string;
  versionControlConfigurationTimeStamp?: string;
}
const VersionControlInfo = /*@__PURE__*/ __L.at(__c11, 0) as any as S.Schema<VersionControlInfo>;
export type VersionControlInfoList = VersionControlInfo[];
const VersionControlInfoList = /*@__PURE__*/ __L.at(__c11, 1);
export type PipelineType = string;
export interface PipelineInfo {
  pipelineType?: string;
  pipelineConfigurationTimeStamp?: string;
}
const PipelineInfo = /*@__PURE__*/ __L.at(__c11, 2) as any as S.Schema<PipelineInfo>;
export type PipelineInfoList = PipelineInfo[];
const PipelineInfoList = /*@__PURE__*/ __L.at(__c11, 3);
export interface RemoteSourceCodeAnalysisServerInfo {
  remoteSourceCodeAnalysisServerConfigurationTimestamp?: string;
}
const RemoteSourceCodeAnalysisServerInfo = /*@__PURE__*/ __L.at(
  __c11,
  4,
) as any as S.Schema<RemoteSourceCodeAnalysisServerInfo>;
export interface ConfigurationSummary {
  vcenterBasedRemoteInfoList?: VcenterBasedRemoteInfo[];
  ipAddressBasedRemoteInfoList?: IPAddressBasedRemoteInfo[];
  versionControlInfoList?: VersionControlInfo[];
  pipelineInfoList?: PipelineInfo[];
  remoteSourceCodeAnalysisServerInfo?: RemoteSourceCodeAnalysisServerInfo;
}
const ConfigurationSummary = /*@__PURE__*/ __L.at(
  __c11,
  5,
) as any as S.Schema<ConfigurationSummary>;
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
const Collector = /*@__PURE__*/ __L.at(__c11, 6) as any as S.Schema<Collector>;
export type Collectors = Collector[];
const Collectors = /*@__PURE__*/ __L.at(__c11, 7);
export interface ListCollectorsResponse {
  Collectors?: Collector[];
  nextToken?: string;
}
const ListCollectorsResponse = /*@__PURE__*/ __L.at(
  __c12,
  0,
) as any as S.Schema<ListCollectorsResponse>;
export interface ListImportFileTaskRequest {
  nextToken?: string;
  maxResults?: number;
}
const ListImportFileTaskRequest = /*@__PURE__*/ __L.at(
  __c12,
  1,
) as any as S.Schema<ListImportFileTaskRequest>;
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
const ImportFileTaskInformation =
  GetImportFileTaskResponse as any as S.Schema<ImportFileTaskInformation>;
export type ListImportFileTaskInformation = ImportFileTaskInformation[];
const ListImportFileTaskInformation = /*@__PURE__*/ __L.at(__c12, 2);
export interface ListImportFileTaskResponse {
  taskInfos?: ImportFileTaskInformation[];
  nextToken?: string;
}
const ListImportFileTaskResponse = /*@__PURE__*/ __L.at(
  __c12,
  3,
) as any as S.Schema<ListImportFileTaskResponse>;
export type ServerCriteria = string;
export interface ListServersRequest {
  serverCriteria?: string;
  filterValue?: string;
  sort?: string;
  groupIdFilter?: Group[];
  nextToken?: string;
  maxResults?: number;
}
const ListServersRequest = /*@__PURE__*/ __L.at(__c12, 4) as any as S.Schema<ListServersRequest>;
export type ServerDetails = ServerDetail[];
const ServerDetails = /*@__PURE__*/ __L.at(__c12, 5);
export interface ListServersResponse {
  serverInfos?: ServerDetail[];
  nextToken?: string;
}
const ListServersResponse = /*@__PURE__*/ __L.at(__c12, 6) as any as S.Schema<ListServersResponse>;
export interface PutPortfolioPreferencesRequest {
  prioritizeBusinessGoals?: PrioritizeBusinessGoals;
  applicationPreferences?: ApplicationPreferences;
  databasePreferences?: DatabasePreferences;
  applicationMode?: string;
}
const PutPortfolioPreferencesRequest = /*@__PURE__*/ __L.at(
  __c12,
  7,
) as any as S.Schema<PutPortfolioPreferencesRequest>;
export interface PutPortfolioPreferencesResponse {}
const PutPortfolioPreferencesResponse = /*@__PURE__*/ __L.at(
  __c13,
  0,
) as any as S.Schema<PutPortfolioPreferencesResponse>;
export type AssessmentDataSourceType = string;
export interface StartAssessmentRequest {
  s3bucketForAnalysisData?: string;
  s3bucketForReportData?: string;
  assessmentTargets?: AssessmentTarget[];
  assessmentDataSourceType?: string;
}
const StartAssessmentRequest = /*@__PURE__*/ __L.at(
  __c13,
  1,
) as any as S.Schema<StartAssessmentRequest>;
export interface StartAssessmentResponse {
  assessmentId?: string;
}
const StartAssessmentResponse = /*@__PURE__*/ __L.at(
  __c13,
  2,
) as any as S.Schema<StartAssessmentResponse>;
export type DataSourceType = string;
export interface StartImportFileTaskRequest {
  name: string;
  S3Bucket: string;
  s3key: string;
  dataSourceType?: string;
  groupId?: Group[];
  s3bucketForReportData?: string;
}
const StartImportFileTaskRequest = /*@__PURE__*/ __L.at(
  __c13,
  3,
) as any as S.Schema<StartImportFileTaskRequest>;
export interface StartImportFileTaskResponse {
  id?: string;
}
const StartImportFileTaskResponse =
  GetLatestAssessmentIdResponse as any as S.Schema<StartImportFileTaskResponse>;
export type OutputFormat = string;
export interface StartRecommendationReportGenerationRequest {
  outputFormat?: string;
  groupIdFilter?: Group[];
}
const StartRecommendationReportGenerationRequest = /*@__PURE__*/ __L.at(
  __c13,
  4,
) as any as S.Schema<StartRecommendationReportGenerationRequest>;
export interface StartRecommendationReportGenerationResponse {
  id?: string;
}
const StartRecommendationReportGenerationResponse =
  GetLatestAssessmentIdResponse as any as S.Schema<StartRecommendationReportGenerationResponse>;
export interface StopAssessmentRequest {
  assessmentId: string;
}
const StopAssessmentRequest = /*@__PURE__*/ __L.at(
  __c13,
  5,
) as any as S.Schema<StopAssessmentRequest>;
export interface StopAssessmentResponse {}
const StopAssessmentResponse = /*@__PURE__*/ __L.at(
  __c13,
  6,
) as any as S.Schema<StopAssessmentResponse>;
export interface StrategyOption {
  strategy?: string;
  toolName?: string;
  targetDestination?: string;
  isPreferred?: boolean;
}
const StrategyOption = /*@__PURE__*/ __L.at(__c13, 7) as any as S.Schema<StrategyOption>;
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
const SourceCode = /*@__PURE__*/ __L.at(__c14, 0) as any as S.Schema<SourceCode>;
export type SourceCodeList = SourceCode[];
const SourceCodeList = /*@__PURE__*/ __L.at(__c14, 1);
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
const UpdateApplicationComponentConfigRequest = /*@__PURE__*/ __L.at(
  __c14,
  2,
) as any as S.Schema<UpdateApplicationComponentConfigRequest>;
export interface UpdateApplicationComponentConfigResponse {}
const UpdateApplicationComponentConfigResponse = /*@__PURE__*/ __L.at(
  __c14,
  3,
) as any as S.Schema<UpdateApplicationComponentConfigResponse>;
export interface UpdateServerConfigRequest {
  serverId: string;
  strategyOption?: StrategyOption;
}
const UpdateServerConfigRequest = /*@__PURE__*/ __L.at(
  __c14,
  4,
) as any as S.Schema<UpdateServerConfigRequest>;
export interface UpdateServerConfigResponse {}
const UpdateServerConfigResponse =
  StopAssessmentResponse as any as S.Schema<UpdateServerConfigResponse>;
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
  input: GetApplicationComponentDetailsRequest,
  output: GetApplicationComponentDetailsResponse,
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
  input: GetApplicationComponentStrategiesRequest,
  output: GetApplicationComponentStrategiesResponse,
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
  input: GetAssessmentRequest,
  output: GetAssessmentResponse,
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
  input: GetImportFileTaskRequest,
  output: GetImportFileTaskResponse,
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
  input: GetLatestAssessmentIdRequest,
  output: GetLatestAssessmentIdResponse,
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
  input: GetPortfolioPreferencesRequest,
  output: GetPortfolioPreferencesResponse,
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
  input: GetPortfolioSummaryRequest,
  output: GetPortfolioSummaryResponse,
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
  input: GetRecommendationReportDetailsRequest,
  output: GetRecommendationReportDetailsResponse,
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
  input: GetServerDetailsRequest,
  output: GetServerDetailsResponse,
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
  input: GetServerStrategiesRequest,
  output: GetServerStrategiesResponse,
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
  input: ListAnalyzableServersRequest,
  output: ListAnalyzableServersResponse,
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
  input: ListApplicationComponentsRequest,
  output: ListApplicationComponentsResponse,
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
  input: ListCollectorsRequest,
  output: ListCollectorsResponse,
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
  input: ListImportFileTaskRequest,
  output: ListImportFileTaskResponse,
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
  input: ListServersRequest,
  output: ListServersResponse,
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
  input: PutPortfolioPreferencesRequest,
  output: PutPortfolioPreferencesResponse,
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
  input: StartAssessmentRequest,
  output: StartAssessmentResponse,
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
  input: StartImportFileTaskRequest,
  output: StartImportFileTaskResponse,
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
  input: StartRecommendationReportGenerationRequest,
  output: StartRecommendationReportGenerationResponse,
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
  input: StopAssessmentRequest,
  output: StopAssessmentResponse,
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
  input: UpdateApplicationComponentConfigRequest,
  output: UpdateApplicationComponentConfigResponse,
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
  input: UpdateServerConfigRequest,
  output: UpdateServerConfigResponse,
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
          transformationTool: S.optional(TransformationTool),
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
      return S.Array(AntipatternSeveritySummary);
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
      return S.Array(SourceCodeRepository);
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
          analyzerName: S.optional(AnalyzerNameUnion),
          antiPatternReportS3Object: S.optional(S3Object),
          antipatternReportStatus: S.optional(S.String),
          antipatternReportStatusMessage: S.optional(S.String),
        }),
      ).annotate({ identifier: "AntipatternReportResult" });
    case 5:
      return S.Array(AntipatternReportResult);
    case 6:
      return S.suspend(() =>
        S.Struct({
          analysisType: S.optional(S.String),
          analysisStatus: S.optional(AnalysisStatusUnion),
          statusMessage: S.optional(S.String),
          antipatternReportResultList: S.optional(AntipatternReportResultList),
        }),
      ).annotate({ identifier: "Result" });
    case 7:
      return S.Array(Result);
  }
}
function __c2(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          id: S.optional(S.String),
          name: S.optional(S.String),
          recommendationSet: S.optional(RecommendationSet),
          analysisStatus: S.optional(S.String),
          statusMessage: S.optional(S.String),
          listAntipatternSeveritySummary: S.optional(ListAntipatternSeveritySummary),
          databaseConfigDetail: S.optional(DatabaseConfigDetail),
          sourceCodeRepositories: S.optional(SourceCodeRepositories),
          appType: S.optional(S.String),
          resourceSubType: S.optional(S.String),
          inclusionStatus: S.optional(S.String),
          antipatternReportS3Object: S.optional(S3Object),
          antipatternReportStatus: S.optional(S.String),
          antipatternReportStatusMessage: S.optional(S.String),
          osVersion: S.optional(S.String),
          osDriver: S.optional(S.String),
          lastAnalyzedTimestamp: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          associatedServerId: S.optional(S.String),
          moreServerAssociationExists: S.optional(S.Boolean),
          runtimeStatus: S.optional(S.String),
          runtimeStatusMessage: S.optional(S.String),
          appUnitError: S.optional(AppUnitError),
          resultList: S.optional(ResultList),
        }),
      ).annotate({
        identifier: "ApplicationComponentDetail",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({ name: S.optional(S.String), id: S.optional(S.String) }),
      ).annotate({ identifier: "AssociatedApplication" });
    case 2:
      return S.Array(AssociatedApplication);
    case 3:
      return S.Array(S.String);
    case 4:
      return S.suspend(() =>
        S.Struct({
          applicationComponentDetail: S.optional(ApplicationComponentDetail),
          associatedApplications: S.optional(AssociatedApplications),
          moreApplicationResource: S.optional(S.Boolean),
          associatedServerIds: S.optional(AssociatedServerIDs),
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
          recommendation: S.optional(RecommendationSet),
          status: S.optional(S.String),
          isPreferred: S.optional(S.Boolean),
        }),
      ).annotate({
        identifier: "ApplicationComponentStrategy",
      });
    case 7:
      return S.Array(ApplicationComponentStrategy);
  }
}
function __c3(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({ applicationComponentStrategies: S.optional(ApplicationComponentStrategies) }),
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
        S.Struct({ condition: S.String, name: S.String, values: AssessmentTargetValues }),
      ).annotate({ identifier: "AssessmentTarget" });
    case 4:
      return S.Array(AssessmentTarget);
    case 5:
      return S.suspend(() =>
        S.Struct({
          id: S.optional(S.String),
          dataCollectionDetails: S.optional(DataCollectionDetails),
          assessmentTargets: S.optional(AssessmentTargets),
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
      return S.suspend(() => S.Struct({ businessGoals: S.optional(BusinessGoals) })).annotate({
        identifier: "PrioritizeBusinessGoals",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({ targetDestination: AwsManagedTargetDestinations }),
      ).annotate({ identifier: "AwsManagedResources" });
    case 6:
      return S.Union([
        /*@__PURE__*/ S.Struct({ awsManagedResources: AwsManagedResources }),
        /*@__PURE__*/ S.Struct({ selfManageResources: SelfManageResources }),
        /*@__PURE__*/ S.Struct({ noPreference: NoManagementPreference }),
      ]);
    case 7:
      return S.suspend(() =>
        S.Struct({ managementPreference: S.optional(ManagementPreference) }),
      ).annotate({ identifier: "ApplicationPreferences" });
  }
}
function __c5(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({ targetDatabaseEngine: HeterogeneousTargetDatabaseEngines }),
      ).annotate({ identifier: "Heterogeneous" });
    case 1:
      return S.suspend(() =>
        S.Struct({ targetDatabaseEngine: S.optional(HomogeneousTargetDatabaseEngines) }),
      ).annotate({ identifier: "Homogeneous" });
    case 2:
      return S.suspend(() => S.Struct({ targetDatabaseEngine: TargetDatabaseEngines })).annotate({
        identifier: "NoDatabaseMigrationPreference",
      });
    case 3:
      return S.Union([
        /*@__PURE__*/ S.Struct({ heterogeneous: Heterogeneous }),
        /*@__PURE__*/ S.Struct({ homogeneous: Homogeneous }),
        /*@__PURE__*/ S.Struct({ noPreference: NoDatabaseMigrationPreference }),
      ]);
    case 4:
      return S.suspend(() =>
        S.Struct({
          databaseManagementPreference: S.optional(S.String),
          databaseMigrationPreference: S.optional(DatabaseMigrationPreference),
        }),
      ).annotate({ identifier: "DatabasePreferences" });
    case 5:
      return S.suspend(() =>
        S.Struct({
          prioritizeBusinessGoals: S.optional(PrioritizeBusinessGoals),
          applicationPreferences: S.optional(ApplicationPreferences),
          databasePreferences: S.optional(DatabasePreferences),
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
      return S.Array(StrategySummary);
    case 1:
      return S.suspend(() =>
        S.Struct({ appType: S.optional(S.String), count: S.optional(S.Number) }),
      ).annotate({
        identifier: "ApplicationComponentSummary",
      });
    case 2:
      return S.Array(ApplicationComponentSummary);
    case 3:
      return S.suspend(() =>
        S.Struct({ ServerOsType: S.optional(S.String), count: S.optional(S.Number) }),
      ).annotate({ identifier: "ServerSummary" });
    case 4:
      return S.Array(ServerSummary);
    case 5:
      return S.suspend(() =>
        S.Struct({ srcCodeOrDbAnalysisStatus: S.optional(S.String), count: S.optional(S.Number) }),
      ).annotate({
        identifier: "ApplicationComponentStatusSummary",
      });
    case 6:
      return S.Array(ApplicationComponentStatusSummary);
    case 7:
      return S.suspend(() =>
        S.Struct({ runTimeAssessmentStatus: S.optional(S.String), count: S.optional(S.Number) }),
      ).annotate({ identifier: "ServerStatusSummary" });
  }
}
function __c7(j: number): any {
  switch (j) {
    case 0:
      return S.Array(ServerStatusSummary);
    case 1:
      return S.suspend(() =>
        S.Struct({
          listServerStrategySummary: S.optional(ListStrategySummary),
          listApplicationComponentStrategySummary: S.optional(ListStrategySummary),
          listAntipatternSeveritySummary: S.optional(ListAntipatternSeveritySummary),
          listApplicationComponentSummary: S.optional(ListApplicationComponentSummary),
          listServerSummary: S.optional(ListServerSummary),
          antipatternReportS3Object: S.optional(S3Object),
          antipatternReportStatus: S.optional(S.String),
          antipatternReportStatusMessage: S.optional(S.String),
          lastAnalyzedTimestamp: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          listApplicationComponentStatusSummary: S.optional(ListApplicationComponentStatusSummary),
          listServerStatusSummary: S.optional(ListServerStatusSummary),
        }),
      ).annotate({ identifier: "AssessmentSummary" });
    case 2:
      return S.suspend(() =>
        S.Struct({ assessmentSummary: S.optional(AssessmentSummary) }),
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
          s3Keys: S.optional(S3Keys),
        }),
      ).annotate({
        identifier: "RecommendationReportDetails",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({
          id: S.optional(S.String),
          recommendationReportDetails: S.optional(RecommendationReportDetails),
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
      return S.Array(NetworkInfo);
    case 2:
      return S.suspend(() =>
        S.Struct({
          osInfo: S.optional(OSInfo),
          fileSystemType: S.optional(S.String),
          networkInfoList: S.optional(NetworkInfoList),
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
          recommendationSet: S.optional(RecommendationSet),
          dataCollectionStatus: S.optional(S.String),
          statusMessage: S.optional(S.String),
          listAntipatternSeveritySummary: S.optional(ListAntipatternSeveritySummary),
          systemInfo: S.optional(SystemInfo),
          applicationComponentStrategySummary: S.optional(ListStrategySummary),
          antipatternReportS3Object: S.optional(S3Object),
          antipatternReportStatus: S.optional(S.String),
          antipatternReportStatusMessage: S.optional(S.String),
          serverType: S.optional(S.String),
          lastAnalyzedTimestamp: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          serverError: S.optional(ServerError),
        }),
      ).annotate({ identifier: "ServerDetail" });
    case 5:
      return S.suspend(() =>
        S.Struct({
          nextToken: S.optional(S.String),
          serverDetail: S.optional(ServerDetail),
          associatedApplications: S.optional(AssociatedApplications),
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
          recommendation: S.optional(RecommendationSet),
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
      return S.Array(ServerStrategy);
    case 1:
      return S.suspend(() => S.Struct({ serverStrategies: S.optional(ServerStrategies) })).annotate(
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
      return S.Array(AnalyzableServerSummary);
    case 5:
      return S.suspend(() =>
        S.Struct({
          analyzableServers: S.optional(AnalyzableServerSummaryList),
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
      return S.Array(Group);
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
          groupIdFilter: S.optional(GroupIds),
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
      return S.Array(ApplicationComponentDetail);
    case 2:
      return S.suspend(() =>
        S.Struct({
          applicationComponentInfos: S.optional(ApplicationComponentDetails),
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
      return S.Array(VcenterBasedRemoteInfo);
    case 6:
      return S.suspend(() =>
        S.Struct({
          ipAddressConfigurationTimeStamp: S.optional(S.String),
          authType: S.optional(S.String),
          osType: S.optional(S.String),
        }),
      ).annotate({ identifier: "IPAddressBasedRemoteInfo" });
    case 7:
      return S.Array(IPAddressBasedRemoteInfo);
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
      return S.Array(VersionControlInfo);
    case 2:
      return S.suspend(() =>
        S.Struct({
          pipelineType: S.optional(S.String),
          pipelineConfigurationTimeStamp: S.optional(S.String),
        }),
      ).annotate({ identifier: "PipelineInfo" });
    case 3:
      return S.Array(PipelineInfo);
    case 4:
      return S.suspend(() =>
        S.Struct({ remoteSourceCodeAnalysisServerConfigurationTimestamp: S.optional(S.String) }),
      ).annotate({
        identifier: "RemoteSourceCodeAnalysisServerInfo",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({
          vcenterBasedRemoteInfoList: S.optional(VcenterBasedRemoteInfoList),
          ipAddressBasedRemoteInfoList: S.optional(IPAddressBasedRemoteInfoList),
          versionControlInfoList: S.optional(VersionControlInfoList),
          pipelineInfoList: S.optional(PipelineInfoList),
          remoteSourceCodeAnalysisServerInfo: S.optional(RemoteSourceCodeAnalysisServerInfo),
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
          configurationSummary: S.optional(ConfigurationSummary),
        }),
      ).annotate({ identifier: "Collector" });
    case 7:
      return S.Array(Collector);
  }
}
function __c12(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({ Collectors: S.optional(Collectors), nextToken: S.optional(S.String) }),
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
      return S.Array(ImportFileTaskInformation);
    case 3:
      return S.suspend(() =>
        S.Struct({
          taskInfos: S.optional(ListImportFileTaskInformation),
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
          groupIdFilter: S.optional(GroupIds),
          nextToken: S.optional(S.String),
          maxResults: S.optional(S.Number),
        }).pipe(
          T.all(T.Http({ method: "POST", uri: "/list-servers" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({ identifier: "ListServersRequest" });
    case 5:
      return S.Array(ServerDetail);
    case 6:
      return S.suspend(() =>
        S.Struct({ serverInfos: S.optional(ServerDetails), nextToken: S.optional(S.String) }),
      ).annotate({ identifier: "ListServersResponse" });
    case 7:
      return S.suspend(() =>
        S.Struct({
          prioritizeBusinessGoals: S.optional(PrioritizeBusinessGoals),
          applicationPreferences: S.optional(ApplicationPreferences),
          databasePreferences: S.optional(DatabasePreferences),
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
          assessmentTargets: S.optional(AssessmentTargets),
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
          groupId: S.optional(GroupIds),
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
        S.Struct({ outputFormat: S.optional(S.String), groupIdFilter: S.optional(GroupIds) }).pipe(
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
      return S.Array(SourceCode);
    case 2:
      return S.suspend(() =>
        S.Struct({
          applicationComponentId: S.String,
          inclusionStatus: S.optional(S.String),
          strategyOption: S.optional(StrategyOption),
          sourceCodeList: S.optional(SourceCodeList),
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
        S.Struct({ serverId: S.String, strategyOption: S.optional(StrategyOption) }).pipe(
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
