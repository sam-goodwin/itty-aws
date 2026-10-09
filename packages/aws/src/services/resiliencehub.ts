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
  sdkId: "resiliencehub",
  serviceShapeName: "AwsResilienceHub",
});
const auth = /*@__PURE__*/ T.AwsAuthSigv4({ name: "resiliencehub" });
const ver = /*@__PURE__*/ T.ServiceVersion("2020-04-30");
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
              `https://resiliencehub-fips.${Region}.${_.getAttr(PartitionResult, "dualStackDnsSuffix")}`,
            );
          }
          return err(
            "FIPS and DualStack are enabled, but this partition does not support one or both",
          );
        }
        if (UseFIPS === true) {
          if (_.getAttr(PartitionResult, "supportsFIPS") === true) {
            return e(
              `https://resiliencehub-fips.${Region}.${_.getAttr(PartitionResult, "dnsSuffix")}`,
            );
          }
          return err("FIPS is enabled but this partition does not support FIPS");
        }
        if (UseDualStack === true) {
          if (true === _.getAttr(PartitionResult, "supportsDualStack")) {
            return e(
              `https://resiliencehub.${Region}.${_.getAttr(PartitionResult, "dualStackDnsSuffix")}`,
            );
          }
          return err("DualStack is enabled but this partition does not support DualStack");
        }
        return e(`https://resiliencehub.${Region}.${_.getAttr(PartitionResult, "dnsSuffix")}`);
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
    {
      message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()),
      resourceId: /*@__PURE__*/ S.optional(S.String),
      resourceType: /*@__PURE__*/ S.optional(S.String),
    },
    /*@__PURE__*/ T.HttpError(409),
  ).pipe(C.withConflictError) {}
export class InternalServerException
  extends /*@__PURE__*/ S.TaggedError<InternalServerException>()(
    "InternalServerException",
    { message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()) },
    /*@__PURE__*/ T.HttpError(500),
  ).pipe(C.withServerError) {}
export class ResourceNotFoundException
  extends /*@__PURE__*/ S.TaggedError<ResourceNotFoundException>()(
    "ResourceNotFoundException",
    {
      message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()),
      resourceId: /*@__PURE__*/ S.optional(S.String),
      resourceType: /*@__PURE__*/ S.optional(S.String),
    },
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
    {
      message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()),
      retryAfterSeconds: /*@__PURE__*/ S.optional(S.Number),
    },
    /*@__PURE__*/ T.HttpError(429),
  ).pipe(C.withThrottlingError) {}
export class ValidationException
  extends /*@__PURE__*/ S.TaggedError<ValidationException>()(
    "ValidationException",
    { message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()) },
    /*@__PURE__*/ T.HttpError(400),
  ).pipe(C.withBadRequestError) {}
export type Arn = string;
export type String255 = string;
export interface AcceptGroupingRecommendationEntry {
  groupingRecommendationId: string;
}
export type AcceptGroupingRecommendationEntries = AcceptGroupingRecommendationEntry[];
export interface AcceptResourceGroupingRecommendationsRequest {
  appArn: string;
  entries: AcceptGroupingRecommendationEntry[];
}
export type ErrorMessage = string;
export interface FailedGroupingRecommendationEntry {
  groupingRecommendationId: string;
  errorMessage: string;
}
export type FailedGroupingRecommendationEntries = FailedGroupingRecommendationEntry[];
export interface AcceptResourceGroupingRecommendationsResponse {
  appArn: string;
  failedEntries: FailedGroupingRecommendationEntry[];
}
export type EntityName = string;
export type ResourceMappingType =
  | "CfnStack"
  | "Resource"
  | "AppRegistryApp"
  | "ResourceGroup"
  | "Terraform"
  | "EKS"
  | (string & {});
export type PhysicalIdentifierType = "Arn" | "Native" | (string & {});
export type AwsRegion = string;
export type CustomerId = string;
export interface PhysicalResourceId {
  identifier: string;
  type: PhysicalIdentifierType;
  awsRegion?: string;
  awsAccountId?: string;
}
export interface ResourceMapping {
  resourceName?: string;
  logicalStackName?: string;
  appRegistryAppName?: string;
  resourceGroupName?: string;
  mappingType: ResourceMappingType;
  physicalResourceId: PhysicalResourceId;
  terraformSourceName?: string;
  eksSourceName?: string;
}
export type ResourceMappingList = ResourceMapping[];
export interface AddDraftAppVersionResourceMappingsRequest {
  appArn: string;
  resourceMappings: ResourceMapping[];
}
export type EntityVersion = string;
export interface AddDraftAppVersionResourceMappingsResponse {
  appArn: string;
  appVersion: string;
  resourceMappings: ResourceMapping[];
}
export type SpecReferenceId = string;
export type String500 = string;
export interface UpdateRecommendationStatusItem {
  resourceId?: string;
  targetAccountId?: string;
  targetRegion?: string;
}
export type EntityName255 = string;
export type ExcludeRecommendationReason =
  | "AlreadyImplemented"
  | "NotRelevant"
  | "ComplexityOfImplementation"
  | (string & {});
export interface UpdateRecommendationStatusRequestEntry {
  entryId: string;
  referenceId: string;
  item?: UpdateRecommendationStatusItem;
  excluded: boolean;
  appComponentId?: string;
  excludeReason?: ExcludeRecommendationReason;
}
export type UpdateRecommendationStatusRequestEntries = UpdateRecommendationStatusRequestEntry[];
export interface BatchUpdateRecommendationStatusRequest {
  appArn: string;
  requestEntries: UpdateRecommendationStatusRequestEntry[];
}
export interface BatchUpdateRecommendationStatusSuccessfulEntry {
  entryId: string;
  referenceId: string;
  item?: UpdateRecommendationStatusItem;
  excluded: boolean;
  appComponentId?: string;
  excludeReason?: ExcludeRecommendationReason;
}
export type BatchUpdateRecommendationStatusSuccessfulEntries =
  BatchUpdateRecommendationStatusSuccessfulEntry[];
export interface BatchUpdateRecommendationStatusFailedEntry {
  entryId: string;
  errorMessage: string;
}
export type BatchUpdateRecommendationStatusFailedEntries =
  BatchUpdateRecommendationStatusFailedEntry[];
export interface BatchUpdateRecommendationStatusResponse {
  appArn: string;
  successfulEntries: BatchUpdateRecommendationStatusSuccessfulEntry[];
  failedEntries: BatchUpdateRecommendationStatusFailedEntry[];
}
export type EntityDescription = string;
export type TagKey = string;
export type TagValue = string;
export type TagMap = { [key: string]: string | undefined };
export type ClientToken = string;
export type AppAssessmentScheduleType = "Disabled" | "Daily" | (string & {});
export type PermissionModelType = "LegacyIAMUser" | "RoleBased" | (string & {});
export type IamRoleName = string;
export type IamRoleArn = string;
export type IamRoleArnList = string[];
export interface PermissionModel {
  type: PermissionModelType;
  invokerRoleName?: string;
  crossAccountRoleArns?: string[];
}
export type EventType = "ScheduledAssessmentFailure" | "DriftDetected" | (string & {});
export interface EventSubscription {
  name: string;
  eventType: EventType;
  snsTopicArn?: string;
}
export type EventSubscriptionList = EventSubscription[];
export interface CreateAppRequest {
  name: string;
  description?: string;
  policyArn?: string;
  tags?: { [key: string]: string | undefined };
  clientToken?: string;
  assessmentSchedule?: AppAssessmentScheduleType;
  permissionModel?: PermissionModel;
  eventSubscriptions?: EventSubscription[];
  awsApplicationArn?: string;
}
export type AppStatusType = "Active" | "Deleting" | (string & {});
export type AppComplianceStatusType =
  | "PolicyBreached"
  | "PolicyMet"
  | "NotAssessed"
  | "ChangesDetected"
  | "NotApplicable"
  | "MissingPolicy"
  | (string & {});
export type AppDriftStatusType = "NotChecked" | "NotDetected" | "Detected" | (string & {});
export interface App {
  appArn: string;
  name: string;
  description?: string;
  policyArn?: string;
  creationTime: Date;
  status?: AppStatusType;
  complianceStatus?: AppComplianceStatusType;
  lastAppComplianceEvaluationTime?: Date;
  resiliencyScore?: number;
  lastResiliencyScoreEvaluationTime?: Date;
  tags?: { [key: string]: string | undefined };
  assessmentSchedule?: AppAssessmentScheduleType;
  permissionModel?: PermissionModel;
  eventSubscriptions?: EventSubscription[];
  driftStatus?: AppDriftStatusType;
  lastDriftEvaluationTime?: Date;
  rtoInSecs?: number;
  rpoInSecs?: number;
  awsApplicationArn?: string;
}
export interface CreateAppResponse {
  app: App;
}
export type String128WithoutWhitespace = string;
export type String1024 = string;
export type AdditionalInfoValueList = string[];
export type AdditionalInfoMap = { [key: string]: string[] | undefined };
export interface CreateAppVersionAppComponentRequest {
  appArn: string;
  id?: string;
  name: string;
  type: string;
  additionalInfo?: { [key: string]: string[] | undefined };
  clientToken?: string;
}
export interface AppComponent {
  name: string;
  type: string;
  id?: string;
  additionalInfo?: { [key: string]: string[] | undefined };
}
export interface CreateAppVersionAppComponentResponse {
  appArn: string;
  appVersion: string;
  appComponent?: AppComponent;
}
export interface LogicalResourceId {
  identifier: string;
  logicalStackName?: string;
  resourceGroupName?: string;
  terraformSourceName?: string;
  eksSourceName?: string;
}
export type String2048 = string;
export type AppComponentNameList = string[];
export interface CreateAppVersionResourceRequest {
  appArn: string;
  resourceName?: string;
  logicalResourceId: LogicalResourceId;
  physicalResourceId: string;
  awsRegion?: string;
  awsAccountId?: string;
  resourceType: string;
  appComponents: string[];
  additionalInfo?: { [key: string]: string[] | undefined };
  clientToken?: string;
}
export type AppComponentList = AppComponent[];
export type ResourceSourceType = "AppTemplate" | "Discovered" | (string & {});
export interface PhysicalResource {
  resourceName?: string;
  logicalResourceId: LogicalResourceId;
  physicalResourceId: PhysicalResourceId;
  resourceType: string;
  appComponents?: AppComponent[];
  additionalInfo?: { [key: string]: string[] | undefined };
  excluded?: boolean;
  sourceType?: ResourceSourceType;
  parentResourceName?: string;
}
export interface CreateAppVersionResourceResponse {
  appArn: string;
  appVersion: string;
  physicalResource?: PhysicalResource;
}
export type Uuid = string;
export type RecommendationIdList = string[];
export type TemplateFormat = "CfnYaml" | "CfnJson" | (string & {});
export type RenderRecommendationType = "Alarm" | "Sop" | "Test" | (string & {});
export type RenderRecommendationTypeList = RenderRecommendationType[];
export interface CreateRecommendationTemplateRequest {
  recommendationIds?: string[];
  format?: TemplateFormat;
  recommendationTypes?: RenderRecommendationType[];
  assessmentArn: string;
  name: string;
  clientToken?: string;
  tags?: { [key: string]: string | undefined };
  bucketName?: string;
}
export interface S3Location {
  bucket?: string;
  prefix?: string;
}
export type RecommendationTemplateStatus =
  | "Pending"
  | "InProgress"
  | "Failed"
  | "Success"
  | (string & {});
export interface RecommendationTemplate {
  templatesLocation?: S3Location;
  assessmentArn: string;
  appArn?: string;
  recommendationIds?: string[];
  recommendationTypes: RenderRecommendationType[];
  format: TemplateFormat;
  recommendationTemplateArn: string;
  message?: string;
  status: RecommendationTemplateStatus;
  name: string;
  startTime?: Date;
  endTime?: Date;
  tags?: { [key: string]: string | undefined };
  needsReplacements?: boolean;
}
export interface CreateRecommendationTemplateResponse {
  recommendationTemplate?: RecommendationTemplate;
}
export type DataLocationConstraint =
  | "AnyLocation"
  | "SameContinent"
  | "SameCountry"
  | (string & {});
export type ResiliencyPolicyTier =
  | "MissionCritical"
  | "Critical"
  | "Important"
  | "CoreServices"
  | "NonCritical"
  | "NotApplicable"
  | (string & {});
export type DisruptionType = "Software" | "Hardware" | "AZ" | "Region" | (string & {});
export type Seconds = number;
export interface FailurePolicy {
  rtoInSecs: number;
  rpoInSecs: number;
}
export type DisruptionPolicy = { [key in DisruptionType]?: FailurePolicy };
export interface CreateResiliencyPolicyRequest {
  policyName: string;
  policyDescription?: string;
  dataLocationConstraint?: DataLocationConstraint;
  tier: ResiliencyPolicyTier;
  policy: { [key: string]: FailurePolicy | undefined };
  clientToken?: string;
  tags?: { [key: string]: string | undefined };
}
export type EstimatedCostTier = "L1" | "L2" | "L3" | "L4" | (string & {});
export interface ResiliencyPolicy {
  policyArn?: string;
  policyName?: string;
  policyDescription?: string;
  dataLocationConstraint?: DataLocationConstraint;
  tier?: ResiliencyPolicyTier;
  estimatedCostTier?: EstimatedCostTier;
  policy?: { [key: string]: FailurePolicy | undefined };
  creationTime?: Date;
  tags?: { [key: string]: string | undefined };
}
export interface CreateResiliencyPolicyResponse {
  policy: ResiliencyPolicy;
}
export interface DeleteAppRequest {
  appArn: string;
  forceDelete?: boolean;
  clientToken?: string;
}
export interface DeleteAppResponse {
  appArn: string;
}
export interface DeleteAppAssessmentRequest {
  assessmentArn: string;
  clientToken?: string;
}
export type AssessmentStatus = "Pending" | "InProgress" | "Failed" | "Success" | (string & {});
export interface DeleteAppAssessmentResponse {
  assessmentArn: string;
  assessmentStatus: AssessmentStatus;
}
export type S3Url = string;
export interface TerraformSource {
  s3StateFileUrl: string;
}
export type EksNamespace = string;
export interface EksSourceClusterNamespace {
  eksClusterArn: string;
  namespace: string;
}
export interface DeleteAppInputSourceRequest {
  appArn: string;
  sourceArn?: string;
  terraformSource?: TerraformSource;
  clientToken?: string;
  eksSourceClusterNamespace?: EksSourceClusterNamespace;
}
export interface AppInputSource {
  sourceName?: string;
  importType: ResourceMappingType;
  sourceArn?: string;
  terraformSource?: TerraformSource;
  resourceCount?: number;
  eksSourceClusterNamespace?: EksSourceClusterNamespace;
}
export interface DeleteAppInputSourceResponse {
  appArn?: string;
  appInputSource?: AppInputSource;
}
export interface DeleteAppVersionAppComponentRequest {
  appArn: string;
  id: string;
  clientToken?: string;
}
export interface DeleteAppVersionAppComponentResponse {
  appArn: string;
  appVersion: string;
  appComponent?: AppComponent;
}
export interface DeleteAppVersionResourceRequest {
  appArn: string;
  resourceName?: string;
  logicalResourceId?: LogicalResourceId;
  physicalResourceId?: string;
  awsRegion?: string;
  awsAccountId?: string;
  clientToken?: string;
}
export interface DeleteAppVersionResourceResponse {
  appArn: string;
  appVersion: string;
  physicalResource?: PhysicalResource;
}
export interface DeleteRecommendationTemplateRequest {
  recommendationTemplateArn: string;
  clientToken?: string;
}
export interface DeleteRecommendationTemplateResponse {
  recommendationTemplateArn: string;
  status: RecommendationTemplateStatus;
}
export interface DeleteResiliencyPolicyRequest {
  policyArn: string;
  clientToken?: string;
}
export interface DeleteResiliencyPolicyResponse {
  policyArn: string;
}
export interface DescribeAppRequest {
  appArn: string;
}
export interface DescribeAppResponse {
  app: App;
}
export interface DescribeAppAssessmentRequest {
  assessmentArn: string;
}
export type AssessmentInvoker = "User" | "System" | (string & {});
export type CurrencyCode = string;
export type CostFrequency = "Hourly" | "Daily" | "Monthly" | "Yearly" | (string & {});
export interface Cost {
  amount: number;
  currency: string;
  frequency: CostFrequency;
}
export type DisruptionResiliencyScore = { [key in DisruptionType]?: number };
export type ResiliencyScoreType = "Compliance" | "Test" | "Alarm" | "Sop" | (string & {});
export interface ScoringComponentResiliencyScore {
  score?: number;
  possibleScore?: number;
  outstandingCount?: number;
  excludedCount?: number;
}
export type ScoringComponentResiliencyScores = {
  [key in ResiliencyScoreType]?: ScoringComponentResiliencyScore;
};
export interface ResiliencyScore {
  score: number;
  disruptionScore: { [key: string]: number | undefined };
  componentScore?: { [key: string]: ScoringComponentResiliencyScore | undefined };
}
export type ComplianceStatus =
  | "PolicyBreached"
  | "PolicyMet"
  | "NotApplicable"
  | "MissingPolicy"
  | (string & {});
export interface DisruptionCompliance {
  achievableRtoInSecs?: number;
  currentRtoInSecs?: number;
  rtoReferenceId?: string;
  rtoDescription?: string;
  currentRpoInSecs?: number;
  rpoReferenceId?: string;
  rpoDescription?: string;
  complianceStatus: ComplianceStatus;
  achievableRpoInSecs?: number;
  message?: string;
}
export type AssessmentCompliance = { [key in DisruptionType]?: DisruptionCompliance };
export interface ResourceError {
  logicalResourceId?: string;
  physicalResourceId?: string;
  reason?: string;
}
export type ResourceErrorList = ResourceError[];
export interface ResourceErrorsDetails {
  resourceErrors?: ResourceError[];
  hasMoreErrors?: boolean;
}
export type DriftStatus = "NotChecked" | "NotDetected" | "Detected" | (string & {});
export interface AssessmentRiskRecommendation {
  risk?: string;
  recommendation?: string;
  appComponents?: string[];
}
export type AssessmentRiskRecommendationList = AssessmentRiskRecommendation[];
export interface AssessmentSummary {
  summary?: string;
  riskRecommendations?: AssessmentRiskRecommendation[];
}
export interface AppAssessment {
  appArn?: string;
  appVersion?: string;
  invoker: AssessmentInvoker;
  cost?: Cost;
  resiliencyScore?: ResiliencyScore;
  compliance?: { [key: string]: DisruptionCompliance | undefined };
  complianceStatus?: ComplianceStatus;
  assessmentStatus: AssessmentStatus;
  startTime?: Date;
  endTime?: Date;
  message?: string;
  assessmentName?: string;
  assessmentArn: string;
  policy?: ResiliencyPolicy;
  tags?: { [key: string]: string | undefined };
  resourceErrorsDetails?: ResourceErrorsDetails;
  versionName?: string;
  driftStatus?: DriftStatus;
  summary?: AssessmentSummary;
}
export interface DescribeAppAssessmentResponse {
  assessment: AppAssessment;
}
export interface DescribeAppVersionRequest {
  appArn: string;
  appVersion: string;
}
export interface DescribeAppVersionResponse {
  appArn: string;
  appVersion: string;
  additionalInfo?: { [key: string]: string[] | undefined };
}
export interface DescribeAppVersionAppComponentRequest {
  appArn: string;
  appVersion: string;
  id: string;
}
export interface DescribeAppVersionAppComponentResponse {
  appArn: string;
  appVersion: string;
  appComponent?: AppComponent;
}
export interface DescribeAppVersionResourceRequest {
  appArn: string;
  appVersion: string;
  resourceName?: string;
  logicalResourceId?: LogicalResourceId;
  physicalResourceId?: string;
  awsRegion?: string;
  awsAccountId?: string;
}
export interface DescribeAppVersionResourceResponse {
  appArn: string;
  appVersion: string;
  physicalResource?: PhysicalResource;
}
export interface DescribeAppVersionResourcesResolutionStatusRequest {
  appArn: string;
  appVersion: string;
  resolutionId?: string;
}
export type ResourceResolutionStatusType =
  | "Pending"
  | "InProgress"
  | "Failed"
  | "Success"
  | (string & {});
export interface DescribeAppVersionResourcesResolutionStatusResponse {
  appArn: string;
  appVersion: string;
  resolutionId: string;
  status: ResourceResolutionStatusType;
  errorMessage?: string;
}
export interface DescribeAppVersionTemplateRequest {
  appArn: string;
  appVersion: string;
}
export type AppTemplateBody = string;
export interface DescribeAppVersionTemplateResponse {
  appArn: string;
  appVersion: string;
  appTemplateBody: string;
}
export interface DescribeDraftAppVersionResourcesImportStatusRequest {
  appArn: string;
}
export type ResourceImportStatusType =
  | "Pending"
  | "InProgress"
  | "Failed"
  | "Success"
  | (string & {});
export interface ErrorDetail {
  errorMessage?: string;
}
export type ErrorDetailList = ErrorDetail[];
export interface DescribeDraftAppVersionResourcesImportStatusResponse {
  appArn: string;
  appVersion: string;
  status: ResourceImportStatusType;
  statusChangeTime: Date;
  errorMessage?: string;
  errorDetails?: ErrorDetail[];
}
export interface DescribeMetricsExportRequest {
  metricsExportId: string;
}
export type MetricsExportStatusType =
  | "Pending"
  | "InProgress"
  | "Failed"
  | "Success"
  | (string & {});
export interface DescribeMetricsExportResponse {
  metricsExportId: string;
  status: MetricsExportStatusType;
  exportLocation?: S3Location;
  errorMessage?: string;
}
export interface DescribeResiliencyPolicyRequest {
  policyArn: string;
}
export interface DescribeResiliencyPolicyResponse {
  policy: ResiliencyPolicy;
}
export interface DescribeResourceGroupingRecommendationTaskRequest {
  appArn: string;
  groupingId?: string;
}
export type ResourcesGroupingRecGenStatusType =
  | "Pending"
  | "InProgress"
  | "Failed"
  | "Success"
  | (string & {});
export interface DescribeResourceGroupingRecommendationTaskResponse {
  groupingId: string;
  status: ResourcesGroupingRecGenStatusType;
  errorMessage?: string;
}
export type ArnList = string[];
export type TerraformSourceList = TerraformSource[];
export type ResourceImportStrategyType = "AddOnly" | "ReplaceAll" | (string & {});
export type EksNamespaceList = string[];
export interface EksSource {
  eksClusterArn: string;
  namespaces: string[];
}
export type EksSourceList = EksSource[];
export interface ImportResourcesToDraftAppVersionRequest {
  appArn: string;
  sourceArns?: string[];
  terraformSources?: TerraformSource[];
  importStrategy?: ResourceImportStrategyType;
  eksSources?: EksSource[];
}
export interface ImportResourcesToDraftAppVersionResponse {
  appArn: string;
  appVersion: string;
  sourceArns?: string[];
  status: ResourceImportStatusType;
  terraformSources?: TerraformSource[];
  eksSources?: EksSource[];
}
export type NextToken = string;
export type MaxResults = number;
export interface ListAlarmRecommendationsRequest {
  assessmentArn: string;
  nextToken?: string;
  maxResults?: number;
}
export type AlarmType = "Metric" | "Composite" | "Canary" | "Logs" | "Event" | (string & {});
export type EntityId = string;
export interface Experiment {
  experimentArn?: string;
  experimentTemplateId?: string;
}
export interface Alarm {
  alarmArn?: string;
  source?: string;
}
export interface RecommendationItem {
  resourceId?: string;
  targetAccountId?: string;
  targetRegion?: string;
  alreadyImplemented?: boolean;
  excluded?: boolean;
  excludeReason?: ExcludeRecommendationReason;
  latestDiscoveredExperiment?: Experiment;
  discoveredAlarm?: Alarm;
}
export type RecommendationItemList = RecommendationItem[];
export type RecommendationStatus =
  | "Implemented"
  | "Inactive"
  | "NotImplemented"
  | "Excluded"
  | (string & {});
export interface AlarmRecommendation {
  recommendationId: string;
  referenceId: string;
  name: string;
  description?: string;
  type: AlarmType;
  appComponentName?: string;
  items?: RecommendationItem[];
  prerequisite?: string;
  appComponentNames?: string[];
  recommendationStatus?: RecommendationStatus;
}
export type AlarmRecommendationList = AlarmRecommendation[];
export interface ListAlarmRecommendationsResponse {
  alarmRecommendations: AlarmRecommendation[];
  nextToken?: string;
}
export interface ListAppAssessmentComplianceDriftsRequest {
  assessmentArn: string;
  nextToken?: string;
  maxResults?: number;
}
export type DriftType =
  | "ApplicationCompliance"
  | "AppComponentResiliencyComplianceStatus"
  | (string & {});
export type DifferenceType = "NotEqual" | "Added" | "Removed" | (string & {});
export interface ComplianceDrift {
  entityId?: string;
  entityType?: string;
  driftType?: DriftType;
  appId?: string;
  appVersion?: string;
  expectedReferenceId?: string;
  expectedValue?: { [key: string]: DisruptionCompliance | undefined };
  actualReferenceId?: string;
  actualValue?: { [key: string]: DisruptionCompliance | undefined };
  diffType?: DifferenceType;
}
export type ComplianceDriftList = ComplianceDrift[];
export interface ListAppAssessmentComplianceDriftsResponse {
  complianceDrifts: ComplianceDrift[];
  nextToken?: string;
}
export interface ListAppAssessmentResourceDriftsRequest {
  assessmentArn: string;
  nextToken?: string;
  maxResults?: number;
}
export interface ResourceIdentifier {
  logicalResourceId?: LogicalResourceId;
  resourceType?: string;
}
export interface ResourceDrift {
  appArn?: string;
  appVersion?: string;
  referenceId?: string;
  resourceIdentifier?: ResourceIdentifier;
  diffType?: DifferenceType;
}
export type ResourceDriftList = ResourceDrift[];
export interface ListAppAssessmentResourceDriftsResponse {
  resourceDrifts: ResourceDrift[];
  nextToken?: string;
}
export type AssessmentStatusList = AssessmentStatus[];
export interface ListAppAssessmentsRequest {
  appArn?: string;
  assessmentName?: string;
  assessmentStatus?: AssessmentStatus[];
  complianceStatus?: ComplianceStatus;
  invoker?: AssessmentInvoker;
  reverseOrder?: boolean;
  nextToken?: string;
  maxResults?: number;
}
export interface AppAssessmentSummary {
  appArn?: string;
  appVersion?: string;
  assessmentStatus: AssessmentStatus;
  invoker?: AssessmentInvoker;
  startTime?: Date;
  endTime?: Date;
  message?: string;
  assessmentName?: string;
  assessmentArn: string;
  complianceStatus?: ComplianceStatus;
  cost?: Cost;
  resiliencyScore?: number;
  versionName?: string;
  driftStatus?: DriftStatus;
}
export type AppAssessmentSummaryList = AppAssessmentSummary[];
export interface ListAppAssessmentsResponse {
  nextToken?: string;
  assessmentSummaries: AppAssessmentSummary[];
}
export interface ListAppComponentCompliancesRequest {
  nextToken?: string;
  maxResults?: number;
  assessmentArn: string;
}
export interface AppComponentCompliance {
  cost?: Cost;
  appComponentName?: string;
  compliance?: { [key: string]: DisruptionCompliance | undefined };
  message?: string;
  status?: ComplianceStatus;
  resiliencyScore?: ResiliencyScore;
}
export type ComponentCompliancesList = AppComponentCompliance[];
export interface ListAppComponentCompliancesResponse {
  componentCompliances: AppComponentCompliance[];
  nextToken?: string;
}
export interface ListAppComponentRecommendationsRequest {
  assessmentArn: string;
  nextToken?: string;
  maxResults?: number;
}
export type RecommendationComplianceStatus =
  | "BreachedUnattainable"
  | "BreachedCanMeet"
  | "MetCanImprove"
  | "MissingPolicy"
  | (string & {});
export interface RecommendationDisruptionCompliance {
  expectedComplianceStatus: ComplianceStatus;
  expectedRtoInSecs?: number;
  expectedRtoDescription?: string;
  expectedRpoInSecs?: number;
  expectedRpoDescription?: string;
}
export type RecommendationCompliance = {
  [key in DisruptionType]?: RecommendationDisruptionCompliance;
};
export type ConfigRecommendationOptimizationType =
  | "LeastCost"
  | "LeastChange"
  | "BestAZRecovery"
  | "LeastErrors"
  | "BestAttainable"
  | "BestRegionRecovery"
  | (string & {});
export type SuggestedChangesList = string[];
export type HaArchitecture =
  | "MultiSite"
  | "WarmStandby"
  | "PilotLight"
  | "BackupAndRestore"
  | "NoRecoveryPlan"
  | (string & {});
export interface ConfigRecommendation {
  cost?: Cost;
  appComponentName?: string;
  compliance?: { [key: string]: DisruptionCompliance | undefined };
  recommendationCompliance?: { [key: string]: RecommendationDisruptionCompliance | undefined };
  optimizationType: ConfigRecommendationOptimizationType;
  name: string;
  description?: string;
  suggestedChanges?: string[];
  haArchitecture?: HaArchitecture;
  referenceId: string;
}
export type ConfigRecommendationList = ConfigRecommendation[];
export interface ComponentRecommendation {
  appComponentName: string;
  recommendationStatus: RecommendationComplianceStatus;
  configRecommendations: ConfigRecommendation[];
}
export type ComponentRecommendationList = ComponentRecommendation[];
export interface ListAppComponentRecommendationsResponse {
  componentRecommendations: ComponentRecommendation[];
  nextToken?: string;
}
export interface ListAppInputSourcesRequest {
  appArn: string;
  appVersion: string;
  nextToken?: string;
  maxResults?: number;
}
export type AppInputSourceList = AppInputSource[];
export interface ListAppInputSourcesResponse {
  appInputSources: AppInputSource[];
  nextToken?: string;
}
export interface ListAppsRequest {
  nextToken?: string;
  maxResults?: number;
  name?: string;
  appArn?: string;
  fromLastAssessmentTime?: Date;
  toLastAssessmentTime?: Date;
  reverseOrder?: boolean;
  awsApplicationArn?: string;
}
export interface AppSummary {
  appArn: string;
  name: string;
  description?: string;
  creationTime: Date;
  complianceStatus?: AppComplianceStatusType;
  resiliencyScore?: number;
  assessmentSchedule?: AppAssessmentScheduleType;
  status?: AppStatusType;
  driftStatus?: AppDriftStatusType;
  lastAppComplianceEvaluationTime?: Date;
  rtoInSecs?: number;
  rpoInSecs?: number;
  awsApplicationArn?: string;
}
export type AppSummaryList = AppSummary[];
export interface ListAppsResponse {
  appSummaries: AppSummary[];
  nextToken?: string;
}
export interface ListAppVersionAppComponentsRequest {
  appArn: string;
  appVersion: string;
  nextToken?: string;
  maxResults?: number;
}
export interface ListAppVersionAppComponentsResponse {
  appArn: string;
  appVersion: string;
  appComponents?: AppComponent[];
  nextToken?: string;
}
export interface ListAppVersionResourceMappingsRequest {
  appArn: string;
  appVersion: string;
  nextToken?: string;
  maxResults?: number;
}
export interface ListAppVersionResourceMappingsResponse {
  resourceMappings: ResourceMapping[];
  nextToken?: string;
}
export interface ListAppVersionResourcesRequest {
  appArn: string;
  appVersion: string;
  resolutionId?: string;
  nextToken?: string;
  maxResults?: number;
}
export type PhysicalResourceList = PhysicalResource[];
export interface ListAppVersionResourcesResponse {
  physicalResources: PhysicalResource[];
  resolutionId: string;
  nextToken?: string;
}
export interface ListAppVersionsRequest {
  appArn: string;
  nextToken?: string;
  maxResults?: number;
  startTime?: Date;
  endTime?: Date;
}
export interface AppVersionSummary {
  appVersion: string;
  identifier?: number;
  creationTime?: Date;
  versionName?: string;
}
export type AppVersionList = AppVersionSummary[];
export interface ListAppVersionsResponse {
  appVersions: AppVersionSummary[];
  nextToken?: string;
}
export type FieldAggregationType = "Min" | "Max" | "Sum" | "Avg" | "Count" | (string & {});
export interface Field {
  name: string;
  aggregation?: FieldAggregationType;
}
export type FieldList = Field[];
export type ConditionOperatorType =
  | "Equals"
  | "NotEquals"
  | "GreaterThen"
  | "GreaterOrEquals"
  | "LessThen"
  | "LessOrEquals"
  | (string & {});
export interface Condition {
  field: string;
  operator: ConditionOperatorType;
  value?: string;
}
export type ConditionList = Condition[];
export interface Sort {
  field: string;
  ascending?: boolean;
}
export type SortList = Sort[];
export interface ListMetricsRequest {
  nextToken?: string;
  maxResults?: number;
  fields?: Field[];
  dataSource?: string;
  conditions?: Condition[];
  sorts?: Sort[];
}
export type Row = string[];
export type RowList = string[][];
export interface ListMetricsResponse {
  rows: string[][];
  nextToken?: string;
}
export type RecommendationTemplateStatusList = RecommendationTemplateStatus[];
export interface ListRecommendationTemplatesRequest {
  assessmentArn?: string;
  reverseOrder?: boolean;
  status?: RecommendationTemplateStatus[];
  recommendationTemplateArn?: string;
  name?: string;
  nextToken?: string;
  maxResults?: number;
}
export type RecommendationTemplateList = RecommendationTemplate[];
export interface ListRecommendationTemplatesResponse {
  nextToken?: string;
  recommendationTemplates?: RecommendationTemplate[];
}
export interface ListResiliencyPoliciesRequest {
  policyName?: string;
  nextToken?: string;
  maxResults?: number;
}
export type ResiliencyPolicies = ResiliencyPolicy[];
export interface ListResiliencyPoliciesResponse {
  resiliencyPolicies: ResiliencyPolicy[];
  nextToken?: string;
}
export interface ListResourceGroupingRecommendationsRequest {
  appArn?: string;
  nextToken?: string;
  maxResults?: number;
}
export interface GroupingAppComponent {
  appComponentId: string;
  appComponentType: string;
  appComponentName: string;
}
export type String255List = string[];
export interface GroupingResource {
  resourceName: string;
  resourceType: string;
  physicalResourceId: PhysicalResourceId;
  logicalResourceId: LogicalResourceId;
  sourceAppComponentIds: string[];
}
export type GroupingResourceList = GroupingResource[];
export type GroupingRecommendationStatusType =
  | "Accepted"
  | "Rejected"
  | "PendingDecision"
  | (string & {});
export type GroupingRecommendationConfidenceLevel = "High" | "Medium" | (string & {});
export type GroupingRecommendationRejectionReason =
  | "DistinctBusinessPurpose"
  | "SeparateDataConcern"
  | "DistinctUserGroupHandling"
  | "Other"
  | (string & {});
export interface GroupingRecommendation {
  groupingRecommendationId: string;
  groupingAppComponent: GroupingAppComponent;
  resources: GroupingResource[];
  score: number;
  recommendationReasons: string[];
  status: GroupingRecommendationStatusType;
  confidenceLevel: GroupingRecommendationConfidenceLevel;
  creationTime: Date;
  rejectionReason?: GroupingRecommendationRejectionReason;
}
export type GroupingRecommendationList = GroupingRecommendation[];
export interface ListResourceGroupingRecommendationsResponse {
  groupingRecommendations: GroupingRecommendation[];
  nextToken?: string;
}
export interface ListSopRecommendationsRequest {
  nextToken?: string;
  maxResults?: number;
  assessmentArn: string;
}
export type SopServiceType = "SSM" | (string & {});
export type DocumentName = string;
export interface SopRecommendation {
  serviceType: SopServiceType;
  appComponentName?: string;
  description?: string;
  recommendationId: string;
  name?: string;
  items?: RecommendationItem[];
  referenceId: string;
  prerequisite?: string;
  recommendationStatus?: RecommendationStatus;
}
export type SopRecommendationList = SopRecommendation[];
export interface ListSopRecommendationsResponse {
  nextToken?: string;
  sopRecommendations: SopRecommendation[];
}
export interface ListSuggestedResiliencyPoliciesRequest {
  nextToken?: string;
  maxResults?: number;
}
export interface ListSuggestedResiliencyPoliciesResponse {
  resiliencyPolicies: ResiliencyPolicy[];
  nextToken?: string;
}
export interface ListTagsForResourceRequest {
  resourceArn: string;
}
export interface ListTagsForResourceResponse {
  tags?: { [key: string]: string | undefined };
}
export interface ListTestRecommendationsRequest {
  nextToken?: string;
  maxResults?: number;
  assessmentArn: string;
}
export type TestRisk = "Small" | "Medium" | "High" | (string & {});
export type TestType = "Software" | "Hardware" | "AZ" | "Region" | (string & {});
export type AlarmReferenceIdList = string[];
export interface TestRecommendation {
  recommendationId?: string;
  referenceId: string;
  appComponentId?: string;
  appComponentName?: string;
  name?: string;
  intent?: string;
  risk?: TestRisk;
  type?: TestType;
  description?: string;
  items?: RecommendationItem[];
  prerequisite?: string;
  dependsOnAlarms?: string[];
  recommendationStatus?: RecommendationStatus;
}
export type TestRecommendationList = TestRecommendation[];
export interface ListTestRecommendationsResponse {
  nextToken?: string;
  testRecommendations: TestRecommendation[];
}
export interface ListUnsupportedAppVersionResourcesRequest {
  appArn: string;
  appVersion: string;
  resolutionId?: string;
  nextToken?: string;
  maxResults?: number;
}
export interface UnsupportedResource {
  logicalResourceId: LogicalResourceId;
  physicalResourceId: PhysicalResourceId;
  resourceType: string;
  unsupportedResourceStatus?: string;
}
export type UnsupportedResourceList = UnsupportedResource[];
export interface ListUnsupportedAppVersionResourcesResponse {
  unsupportedResources: UnsupportedResource[];
  resolutionId: string;
  nextToken?: string;
}
export interface PublishAppVersionRequest {
  appArn: string;
  versionName?: string;
}
export interface PublishAppVersionResponse {
  appArn: string;
  appVersion?: string;
  identifier?: number;
  versionName?: string;
}
export interface PutDraftAppVersionTemplateRequest {
  appArn: string;
  appTemplateBody: string;
}
export interface PutDraftAppVersionTemplateResponse {
  appArn?: string;
  appVersion?: string;
}
export interface RejectGroupingRecommendationEntry {
  groupingRecommendationId: string;
  rejectionReason?: GroupingRecommendationRejectionReason;
}
export type RejectGroupingRecommendationEntries = RejectGroupingRecommendationEntry[];
export interface RejectResourceGroupingRecommendationsRequest {
  appArn: string;
  entries: RejectGroupingRecommendationEntry[];
}
export interface RejectResourceGroupingRecommendationsResponse {
  appArn: string;
  failedEntries: FailedGroupingRecommendationEntry[];
}
export type EntityNameList = string[];
export interface RemoveDraftAppVersionResourceMappingsRequest {
  appArn: string;
  resourceNames?: string[];
  logicalStackNames?: string[];
  appRegistryAppNames?: string[];
  resourceGroupNames?: string[];
  terraformSourceNames?: string[];
  eksSourceNames?: string[];
}
export interface RemoveDraftAppVersionResourceMappingsResponse {
  appArn?: string;
  appVersion?: string;
}
export interface ResolveAppVersionResourcesRequest {
  appArn: string;
  appVersion: string;
}
export interface ResolveAppVersionResourcesResponse {
  appArn: string;
  appVersion: string;
  resolutionId: string;
  status: ResourceResolutionStatusType;
}
export interface StartAppAssessmentRequest {
  appArn: string;
  appVersion: string;
  assessmentName: string;
  clientToken?: string;
  tags?: { [key: string]: string | undefined };
}
export interface StartAppAssessmentResponse {
  assessment: AppAssessment;
}
export interface StartMetricsExportRequest {
  bucketName?: string;
  clientToken?: string;
}
export interface StartMetricsExportResponse {
  metricsExportId: string;
  status: MetricsExportStatusType;
}
export interface StartResourceGroupingRecommendationTaskRequest {
  appArn: string;
}
export interface StartResourceGroupingRecommendationTaskResponse {
  appArn: string;
  groupingId: string;
  status: ResourcesGroupingRecGenStatusType;
  errorMessage?: string;
}
export interface TagResourceRequest {
  resourceArn: string;
  tags: { [key: string]: string | undefined };
}
export interface TagResourceResponse {}
export type TagKeyList = string[];
export interface UntagResourceRequest {
  resourceArn: string;
  tagKeys: string[];
}
export interface UntagResourceResponse {}
export interface UpdateAppRequest {
  appArn: string;
  description?: string;
  policyArn?: string;
  clearResiliencyPolicyArn?: boolean;
  assessmentSchedule?: AppAssessmentScheduleType;
  permissionModel?: PermissionModel;
  eventSubscriptions?: EventSubscription[];
}
export interface UpdateAppResponse {
  app: App;
}
export interface UpdateAppVersionRequest {
  appArn: string;
  additionalInfo?: { [key: string]: string[] | undefined };
}
export interface UpdateAppVersionResponse {
  appArn: string;
  appVersion: string;
  additionalInfo?: { [key: string]: string[] | undefined };
}
export interface UpdateAppVersionAppComponentRequest {
  appArn: string;
  id: string;
  name?: string;
  type?: string;
  additionalInfo?: { [key: string]: string[] | undefined };
}
export interface UpdateAppVersionAppComponentResponse {
  appArn: string;
  appVersion: string;
  appComponent?: AppComponent;
}
export interface UpdateAppVersionResourceRequest {
  appArn: string;
  resourceName?: string;
  logicalResourceId?: LogicalResourceId;
  physicalResourceId?: string;
  awsRegion?: string;
  awsAccountId?: string;
  resourceType?: string;
  appComponents?: string[];
  additionalInfo?: { [key: string]: string[] | undefined };
  excluded?: boolean;
}
export interface UpdateAppVersionResourceResponse {
  appArn: string;
  appVersion: string;
  physicalResource?: PhysicalResource;
}
export interface UpdateResiliencyPolicyRequest {
  policyArn: string;
  policyName?: string;
  policyDescription?: string;
  dataLocationConstraint?: DataLocationConstraint;
  tier?: ResiliencyPolicyTier;
  policy?: { [key: string]: FailurePolicy | undefined };
}
export interface UpdateResiliencyPolicyResponse {
  policy: ResiliencyPolicy;
}
export type ResourceId = string;
export type ResourceType = string;
export type RetryAfterSeconds = number;
export type AcceptResourceGroupingRecommendationsError =
  | AccessDeniedException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Accepts the resource grouping recommendations suggested by Resilience Hub for your application.
 */
export const acceptResourceGroupingRecommendations: API.OperationMethod<
  AcceptResourceGroupingRecommendationsRequest,
  AcceptResourceGroupingRecommendationsResponse,
  AcceptResourceGroupingRecommendationsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(2, __c0, 2) as any as S.Schema<AcceptResourceGroupingRecommendationsRequest>,
  output: __S(5, __c0, 5) as any as S.Schema<AcceptResourceGroupingRecommendationsResponse>,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "AcceptResourceGroupingRecommendations",
}));

export type AddDraftAppVersionResourceMappingsError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ResourceNotFoundException
  | ServiceQuotaExceededException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Adds the source of resource-maps to the draft version of an application. During
 * assessment, Resilience Hub will use these resource-maps to resolve the latest physical
 * ID for each resource in the application template. For more information about different types
 * of resources supported by Resilience Hub and how to add them in your application, see
 * Step
 * 2: How is your application managed? in the Resilience Hub User Guide.
 */
export const addDraftAppVersionResourceMappings: API.OperationMethod<
  AddDraftAppVersionResourceMappingsRequest,
  AddDraftAppVersionResourceMappingsResponse,
  AddDraftAppVersionResourceMappingsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(9, __c1, 1) as any as S.Schema<AddDraftAppVersionResourceMappingsRequest>,
  output: __S(10, __c1, 2) as any as S.Schema<AddDraftAppVersionResourceMappingsResponse>,
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
  operationName: "AddDraftAppVersionResourceMappings",
}));

export type BatchUpdateRecommendationStatusError =
  | AccessDeniedException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Enables you to include or exclude one or more operational recommendations.
 */
export const batchUpdateRecommendationStatus: API.OperationMethod<
  BatchUpdateRecommendationStatusRequest,
  BatchUpdateRecommendationStatusResponse,
  BatchUpdateRecommendationStatusError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(14, __c1, 6) as any as S.Schema<BatchUpdateRecommendationStatusRequest>,
  output: __S(17, __c2, 1) as any as S.Schema<BatchUpdateRecommendationStatusResponse>,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "BatchUpdateRecommendationStatus",
}));

export type CreateAppError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ResourceNotFoundException
  | ServiceQuotaExceededException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Creates an Resilience Hub application. An Resilience Hub application is a
 * collection of Amazon Web Services resources structured to prevent and recover Amazon Web Services application disruptions. To describe a Resilience Hub application, you provide an
 * application name, resources from one or more CloudFormation stacks, Resource Groups, Terraform state files, AppRegistry applications, and an appropriate
 * resiliency policy. In addition, you can also add resources that are located on Amazon Elastic Kubernetes Service (Amazon EKS) clusters as optional resources. For more information
 * about the number of resources supported per application, see Service
 * quotas.
 *
 * After you create an Resilience Hub application, you publish it so that you can run
 * a resiliency assessment on it. You can then use recommendations from the assessment to improve
 * resiliency by running another assessment, comparing results, and then iterating the process
 * until you achieve your goals for recovery time objective (RTO) and recovery point objective
 * (RPO).
 */
export const createApp: API.OperationMethod<
  CreateAppRequest,
  CreateAppResponse,
  CreateAppError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(23, __c2, 7) as any as S.Schema<CreateAppRequest>,
  output: __S(25, __c3, 1) as any as S.Schema<CreateAppResponse>,
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
  operationName: "CreateApp",
}));

export type CreateAppVersionAppComponentError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ResourceNotFoundException
  | ServiceQuotaExceededException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Creates a new Application Component in the Resilience Hub application.
 *
 * This API updates the Resilience Hub application draft version. To use this
 * Application Component for running assessments, you must publish the Resilience Hub
 * application using the `PublishAppVersion` API.
 */
export const createAppVersionAppComponent: API.OperationMethod<
  CreateAppVersionAppComponentRequest,
  CreateAppVersionAppComponentResponse,
  CreateAppVersionAppComponentError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(27, __c3, 3) as any as S.Schema<CreateAppVersionAppComponentRequest>,
  output: __S(29, __c3, 5) as any as S.Schema<CreateAppVersionAppComponentResponse>,
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
  operationName: "CreateAppVersionAppComponent",
}));

export type CreateAppVersionResourceError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ResourceNotFoundException
  | ServiceQuotaExceededException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Adds a resource to the Resilience Hub application and assigns it to the specified
 * Application Components. If you specify a new Application Component, Resilience Hub will
 * automatically create the Application Component.
 *
 * - This action has no effect outside Resilience Hub.
 *
 * - This API updates the Resilience Hub application draft version. To use this
 * resource for running resiliency assessments, you must publish the Resilience Hub
 * application using the `PublishAppVersion` API.
 *
 * - To update application version with new `physicalResourceID`, you must
 * call `ResolveAppVersionResources` API.
 */
export const createAppVersionResource: API.OperationMethod<
  CreateAppVersionResourceRequest,
  CreateAppVersionResourceResponse,
  CreateAppVersionResourceError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(31, __c3, 7) as any as S.Schema<CreateAppVersionResourceRequest>,
  output: __S(34, __c4, 2) as any as S.Schema<CreateAppVersionResourceResponse>,
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
  operationName: "CreateAppVersionResource",
}));

export type CreateRecommendationTemplateError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ResourceNotFoundException
  | ServiceQuotaExceededException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Creates a new recommendation template for the Resilience Hub application.
 */
export const createRecommendationTemplate: API.OperationMethod<
  CreateRecommendationTemplateRequest,
  CreateRecommendationTemplateResponse,
  CreateRecommendationTemplateError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(36, __c4, 4) as any as S.Schema<CreateRecommendationTemplateRequest>,
  output: __S(39, __c4, 7) as any as S.Schema<CreateRecommendationTemplateResponse>,
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
  operationName: "CreateRecommendationTemplate",
}));

export type CreateResiliencyPolicyError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ServiceQuotaExceededException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Creates a resiliency policy for an application.
 *
 * Resilience Hub allows you to provide a value of zero for `rtoInSecs`
 * and `rpoInSecs` of your resiliency policy. But, while assessing your application,
 * the lowest possible assessment result is near zero. Hence, if you provide value zero for
 * `rtoInSecs` and `rpoInSecs`, the estimated workload RTO and
 * estimated workload RPO result will be near zero and the Compliance
 * status for your application will be set to Policy
 * breached.
 */
export const createResiliencyPolicy: API.OperationMethod<
  CreateResiliencyPolicyRequest,
  CreateResiliencyPolicyResponse,
  CreateResiliencyPolicyError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(42, __c5, 2) as any as S.Schema<CreateResiliencyPolicyRequest>,
  output: __S(44, __c5, 4) as any as S.Schema<CreateResiliencyPolicyResponse>,
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
  operationName: "CreateResiliencyPolicy",
}));

export type DeleteAppError =
  | ConflictException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Deletes an Resilience Hub application. This is a destructive action that can't be
 * undone.
 */
export const deleteApp: API.OperationMethod<
  DeleteAppRequest,
  DeleteAppResponse,
  DeleteAppError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(45, __c5, 5) as any as S.Schema<DeleteAppRequest>,
  output: __S(46, __c5, 6) as any as S.Schema<DeleteAppResponse>,
  errors: [
    ConflictException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DeleteApp",
}));

export type DeleteAppAssessmentError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Deletes an Resilience Hub application assessment. This is a destructive action
 * that can't be undone.
 */
export const deleteAppAssessment: API.OperationMethod<
  DeleteAppAssessmentRequest,
  DeleteAppAssessmentResponse,
  DeleteAppAssessmentError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(47, __c5, 7) as any as S.Schema<DeleteAppAssessmentRequest>,
  output: __S(48, __c6, 0) as any as S.Schema<DeleteAppAssessmentResponse>,
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
  operationName: "DeleteAppAssessment",
}));

export type DeleteAppInputSourceError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Deletes the input source and all of its imported resources from the Resilience Hub
 * application.
 */
export const deleteAppInputSource: API.OperationMethod<
  DeleteAppInputSourceRequest,
  DeleteAppInputSourceResponse,
  DeleteAppInputSourceError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(51, __c6, 3) as any as S.Schema<DeleteAppInputSourceRequest>,
  output: __S(53, __c6, 5) as any as S.Schema<DeleteAppInputSourceResponse>,
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
  operationName: "DeleteAppInputSource",
}));

export type DeleteAppVersionAppComponentError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Deletes an Application Component from the Resilience Hub application.
 *
 * - This API updates the Resilience Hub application draft version. To use this
 * Application Component for running assessments, you must publish the Resilience Hub
 * application using the `PublishAppVersion` API.
 *
 * - You will not be able to delete an Application Component if it has resources associated
 * with it.
 */
export const deleteAppVersionAppComponent: API.OperationMethod<
  DeleteAppVersionAppComponentRequest,
  DeleteAppVersionAppComponentResponse,
  DeleteAppVersionAppComponentError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(54, __c6, 6) as any as S.Schema<DeleteAppVersionAppComponentRequest>,
  output: __S(29, __c3, 5) as any as S.Schema<DeleteAppVersionAppComponentResponse>,
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
  operationName: "DeleteAppVersionAppComponent",
}));

export type DeleteAppVersionResourceError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Deletes a resource from the Resilience Hub application.
 *
 * - You can only delete a manually added resource. To exclude non-manually added
 * resources, use the `UpdateAppVersionResource` API.
 *
 * - This action has no effect outside Resilience Hub.
 *
 * - This API updates the Resilience Hub application draft version. To use this
 * resource for running resiliency assessments, you must publish the Resilience Hub
 * application using the `PublishAppVersion` API.
 */
export const deleteAppVersionResource: API.OperationMethod<
  DeleteAppVersionResourceRequest,
  DeleteAppVersionResourceResponse,
  DeleteAppVersionResourceError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(55, __c6, 7) as any as S.Schema<DeleteAppVersionResourceRequest>,
  output: __S(34, __c4, 2) as any as S.Schema<DeleteAppVersionResourceResponse>,
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
  operationName: "DeleteAppVersionResource",
}));

export type DeleteRecommendationTemplateError =
  | AccessDeniedException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Deletes a recommendation template. This is a destructive action that can't be
 * undone.
 */
export const deleteRecommendationTemplate: API.OperationMethod<
  DeleteRecommendationTemplateRequest,
  DeleteRecommendationTemplateResponse,
  DeleteRecommendationTemplateError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(56, __c7, 0) as any as S.Schema<DeleteRecommendationTemplateRequest>,
  output: __S(57, __c7, 1) as any as S.Schema<DeleteRecommendationTemplateResponse>,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DeleteRecommendationTemplate",
}));

export type DeleteResiliencyPolicyError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Deletes a resiliency policy. This is a destructive action that can't be undone.
 */
export const deleteResiliencyPolicy: API.OperationMethod<
  DeleteResiliencyPolicyRequest,
  DeleteResiliencyPolicyResponse,
  DeleteResiliencyPolicyError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(58, __c7, 2) as any as S.Schema<DeleteResiliencyPolicyRequest>,
  output: __S(59, __c7, 3) as any as S.Schema<DeleteResiliencyPolicyResponse>,
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
  operationName: "DeleteResiliencyPolicy",
}));

export type DescribeAppError =
  | AccessDeniedException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Describes an Resilience Hub application.
 */
export const describeApp: API.OperationMethod<
  DescribeAppRequest,
  DescribeAppResponse,
  DescribeAppError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(60, __c7, 4) as any as S.Schema<DescribeAppRequest>,
  output: __S(25, __c3, 1) as any as S.Schema<DescribeAppResponse>,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DescribeApp",
}));

export type DescribeAppAssessmentError =
  | AccessDeniedException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Describes an assessment for an Resilience Hub application.
 */
export const describeAppAssessment: API.OperationMethod<
  DescribeAppAssessmentRequest,
  DescribeAppAssessmentResponse,
  DescribeAppAssessmentError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(61, __c7, 5) as any as S.Schema<DescribeAppAssessmentRequest>,
  output: __S(76, __c9, 4) as any as S.Schema<DescribeAppAssessmentResponse>,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DescribeAppAssessment",
}));

export type DescribeAppVersionError =
  | AccessDeniedException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Describes the Resilience Hub application version.
 */
export const describeAppVersion: API.OperationMethod<
  DescribeAppVersionRequest,
  DescribeAppVersionResponse,
  DescribeAppVersionError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(77, __c9, 5) as any as S.Schema<DescribeAppVersionRequest>,
  output: __S(78, __c9, 6) as any as S.Schema<DescribeAppVersionResponse>,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DescribeAppVersion",
}));

export type DescribeAppVersionAppComponentError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Describes an Application Component in the Resilience Hub application.
 */
export const describeAppVersionAppComponent: API.OperationMethod<
  DescribeAppVersionAppComponentRequest,
  DescribeAppVersionAppComponentResponse,
  DescribeAppVersionAppComponentError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(79, __c9, 7) as any as S.Schema<DescribeAppVersionAppComponentRequest>,
  output: __S(29, __c3, 5) as any as S.Schema<DescribeAppVersionAppComponentResponse>,
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
  operationName: "DescribeAppVersionAppComponent",
}));

export type DescribeAppVersionResourceError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Describes a resource of the Resilience Hub application.
 *
 * This API accepts only one of the following parameters to describe the resource:
 *
 * - `resourceName`
 *
 * - `logicalResourceId`
 *
 * - `physicalResourceId` (Along with `physicalResourceId`, you can
 * also provide `awsAccountId`, and `awsRegion`)
 */
export const describeAppVersionResource: API.OperationMethod<
  DescribeAppVersionResourceRequest,
  DescribeAppVersionResourceResponse,
  DescribeAppVersionResourceError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(80, __c10, 0) as any as S.Schema<DescribeAppVersionResourceRequest>,
  output: __S(34, __c4, 2) as any as S.Schema<DescribeAppVersionResourceResponse>,
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
  operationName: "DescribeAppVersionResource",
}));

export type DescribeAppVersionResourcesResolutionStatusError =
  | AccessDeniedException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Returns the resolution status for the specified resolution identifier for an application
 * version. If `resolutionId` is not specified, the current resolution status is
 * returned.
 */
export const describeAppVersionResourcesResolutionStatus: API.OperationMethod<
  DescribeAppVersionResourcesResolutionStatusRequest,
  DescribeAppVersionResourcesResolutionStatusResponse,
  DescribeAppVersionResourcesResolutionStatusError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(81, __c10, 1) as any as S.Schema<DescribeAppVersionResourcesResolutionStatusRequest>,
  output: __S(82, __c10, 2) as any as S.Schema<DescribeAppVersionResourcesResolutionStatusResponse>,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DescribeAppVersionResourcesResolutionStatus",
}));

export type DescribeAppVersionTemplateError =
  | AccessDeniedException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Describes details about an Resilience Hub application.
 */
export const describeAppVersionTemplate: API.OperationMethod<
  DescribeAppVersionTemplateRequest,
  DescribeAppVersionTemplateResponse,
  DescribeAppVersionTemplateError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(83, __c10, 3) as any as S.Schema<DescribeAppVersionTemplateRequest>,
  output: __S(84, __c10, 4) as any as S.Schema<DescribeAppVersionTemplateResponse>,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DescribeAppVersionTemplate",
}));

export type DescribeDraftAppVersionResourcesImportStatusError =
  | AccessDeniedException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Describes the status of importing resources to an application version.
 *
 * If you get a 404 error with
 * `ResourceImportStatusNotFoundAppMetadataException`, you must call
 * `importResourcesToDraftAppVersion` after creating the application and before
 * calling `describeDraftAppVersionResourcesImportStatus` to obtain the
 * status.
 */
export const describeDraftAppVersionResourcesImportStatus: API.OperationMethod<
  DescribeDraftAppVersionResourcesImportStatusRequest,
  DescribeDraftAppVersionResourcesImportStatusResponse,
  DescribeDraftAppVersionResourcesImportStatusError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(85, __c10, 5) as any as S.Schema<DescribeDraftAppVersionResourcesImportStatusRequest>,
  output: __S(
    88,
    __c11,
    0,
  ) as any as S.Schema<DescribeDraftAppVersionResourcesImportStatusResponse>,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DescribeDraftAppVersionResourcesImportStatus",
}));

export type DescribeMetricsExportError =
  | AccessDeniedException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Describes the metrics of the application configuration being exported.
 */
export const describeMetricsExport: API.OperationMethod<
  DescribeMetricsExportRequest,
  DescribeMetricsExportResponse,
  DescribeMetricsExportError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(89, __c11, 1) as any as S.Schema<DescribeMetricsExportRequest>,
  output: __S(90, __c11, 2) as any as S.Schema<DescribeMetricsExportResponse>,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DescribeMetricsExport",
}));

export type DescribeResiliencyPolicyError =
  | AccessDeniedException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Describes a specified resiliency policy for an Resilience Hub application. The
 * returned policy object includes creation time, data location constraints, the Amazon Resource
 * Name (ARN) for the policy, tags, tier, and more.
 */
export const describeResiliencyPolicy: API.OperationMethod<
  DescribeResiliencyPolicyRequest,
  DescribeResiliencyPolicyResponse,
  DescribeResiliencyPolicyError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(91, __c11, 3) as any as S.Schema<DescribeResiliencyPolicyRequest>,
  output: __S(44, __c5, 4) as any as S.Schema<DescribeResiliencyPolicyResponse>,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DescribeResiliencyPolicy",
}));

export type DescribeResourceGroupingRecommendationTaskError =
  | AccessDeniedException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Describes the resource grouping recommendation tasks run by Resilience Hub for your application.
 */
export const describeResourceGroupingRecommendationTask: API.OperationMethod<
  DescribeResourceGroupingRecommendationTaskRequest,
  DescribeResourceGroupingRecommendationTaskResponse,
  DescribeResourceGroupingRecommendationTaskError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(92, __c11, 4) as any as S.Schema<DescribeResourceGroupingRecommendationTaskRequest>,
  output: __S(93, __c11, 5) as any as S.Schema<DescribeResourceGroupingRecommendationTaskResponse>,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DescribeResourceGroupingRecommendationTask",
}));

export type ImportResourcesToDraftAppVersionError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ResourceNotFoundException
  | ServiceQuotaExceededException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Imports resources to Resilience Hub application draft version from different input
 * sources. For more information about the input sources supported by Resilience Hub, see
 * Discover the structure and describe your Resilience Hub application.
 */
export const importResourcesToDraftAppVersion: API.OperationMethod<
  ImportResourcesToDraftAppVersionRequest,
  ImportResourcesToDraftAppVersionResponse,
  ImportResourcesToDraftAppVersionError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(97, __c12, 1) as any as S.Schema<ImportResourcesToDraftAppVersionRequest>,
  output: __S(98, __c12, 2) as any as S.Schema<ImportResourcesToDraftAppVersionResponse>,
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
  operationName: "ImportResourcesToDraftAppVersion",
}));

export type ListAlarmRecommendationsError =
  | AccessDeniedException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Lists the alarm recommendations for an Resilience Hub application.
 */
export const listAlarmRecommendations: API.PaginatedOperationMethod<
  ListAlarmRecommendationsRequest,
  ListAlarmRecommendationsResponse,
  ListAlarmRecommendationsError,
  Credentials | HttpClient.HttpClient,
  unknown
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: __S(99, __c12, 3) as any as S.Schema<ListAlarmRecommendationsRequest>,
  output: __S(106, __c13, 2) as any as S.Schema<ListAlarmRecommendationsResponse>,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListAlarmRecommendations",
  pagination: {
    inputToken: "nextToken",
    outputToken: "nextToken",
    pageSize: "maxResults",
  } as const,
})) as any;

export type ListAppAssessmentComplianceDriftsError =
  | AccessDeniedException
  | InternalServerException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * List of compliance drifts that were detected while running an
 * assessment.
 */
export const listAppAssessmentComplianceDrifts: API.PaginatedOperationMethod<
  ListAppAssessmentComplianceDriftsRequest,
  ListAppAssessmentComplianceDriftsResponse,
  ListAppAssessmentComplianceDriftsError,
  Credentials | HttpClient.HttpClient,
  unknown
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: __S(107, __c13, 3) as any as S.Schema<ListAppAssessmentComplianceDriftsRequest>,
  output: __S(110, __c13, 6) as any as S.Schema<ListAppAssessmentComplianceDriftsResponse>,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListAppAssessmentComplianceDrifts",
  pagination: {
    inputToken: "nextToken",
    outputToken: "nextToken",
    pageSize: "maxResults",
  } as const,
})) as any;

export type ListAppAssessmentResourceDriftsError =
  | AccessDeniedException
  | InternalServerException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * List of resource drifts that were detected while running an
 * assessment.
 */
export const listAppAssessmentResourceDrifts: API.PaginatedOperationMethod<
  ListAppAssessmentResourceDriftsRequest,
  ListAppAssessmentResourceDriftsResponse,
  ListAppAssessmentResourceDriftsError,
  Credentials | HttpClient.HttpClient,
  ResourceDrift
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: __S(111, __c13, 7) as any as S.Schema<ListAppAssessmentResourceDriftsRequest>,
  output: __S(115, __c14, 3) as any as S.Schema<ListAppAssessmentResourceDriftsResponse>,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListAppAssessmentResourceDrifts",
  pagination: {
    inputToken: "nextToken",
    outputToken: "nextToken",
    items: "resourceDrifts",
    pageSize: "maxResults",
  } as const,
})) as any;

export type ListAppAssessmentsError =
  | AccessDeniedException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Lists the assessments for an Resilience Hub application. You can use request
 * parameters to refine the results for the response object.
 */
export const listAppAssessments: API.PaginatedOperationMethod<
  ListAppAssessmentsRequest,
  ListAppAssessmentsResponse,
  ListAppAssessmentsError,
  Credentials | HttpClient.HttpClient,
  unknown
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: __S(116, __c14, 4) as any as S.Schema<ListAppAssessmentsRequest>,
  output: __S(119, __c14, 7) as any as S.Schema<ListAppAssessmentsResponse>,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListAppAssessments",
  pagination: {
    inputToken: "nextToken",
    outputToken: "nextToken",
    pageSize: "maxResults",
  } as const,
})) as any;

export type ListAppComponentCompliancesError =
  | AccessDeniedException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Lists the compliances for an Resilience Hub Application Component.
 */
export const listAppComponentCompliances: API.PaginatedOperationMethod<
  ListAppComponentCompliancesRequest,
  ListAppComponentCompliancesResponse,
  ListAppComponentCompliancesError,
  Credentials | HttpClient.HttpClient,
  unknown
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: __S(120, __c15, 0) as any as S.Schema<ListAppComponentCompliancesRequest>,
  output: __S(123, __c15, 3) as any as S.Schema<ListAppComponentCompliancesResponse>,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListAppComponentCompliances",
  pagination: {
    inputToken: "nextToken",
    outputToken: "nextToken",
    pageSize: "maxResults",
  } as const,
})) as any;

export type ListAppComponentRecommendationsError =
  | AccessDeniedException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Lists the recommendations for an Resilience Hub Application Component.
 */
export const listAppComponentRecommendations: API.PaginatedOperationMethod<
  ListAppComponentRecommendationsRequest,
  ListAppComponentRecommendationsResponse,
  ListAppComponentRecommendationsError,
  Credentials | HttpClient.HttpClient,
  unknown
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: __S(124, __c15, 4) as any as S.Schema<ListAppComponentRecommendationsRequest>,
  output: __S(131, __c16, 3) as any as S.Schema<ListAppComponentRecommendationsResponse>,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListAppComponentRecommendations",
  pagination: {
    inputToken: "nextToken",
    outputToken: "nextToken",
    pageSize: "maxResults",
  } as const,
})) as any;

export type ListAppInputSourcesError =
  | AccessDeniedException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Lists all the input sources of the Resilience Hub application. For more
 * information about the input sources supported by Resilience Hub, see Discover
 * the structure and describe your Resilience Hub application.
 */
export const listAppInputSources: API.PaginatedOperationMethod<
  ListAppInputSourcesRequest,
  ListAppInputSourcesResponse,
  ListAppInputSourcesError,
  Credentials | HttpClient.HttpClient,
  unknown
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: __S(132, __c16, 4) as any as S.Schema<ListAppInputSourcesRequest>,
  output: __S(134, __c16, 6) as any as S.Schema<ListAppInputSourcesResponse>,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListAppInputSources",
  pagination: {
    inputToken: "nextToken",
    outputToken: "nextToken",
    pageSize: "maxResults",
  } as const,
})) as any;

export type ListAppsError =
  | AccessDeniedException
  | InternalServerException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Lists your Resilience Hub applications.
 *
 * You can filter applications using only one filter at a time or without using any filter.
 * If you try to filter applications using multiple filters, you will get the following
 * error:
 *
 * An error occurred (ValidationException) when calling the ListApps operation: Only
 * one filter is supported for this operation.
 */
export const listApps: API.PaginatedOperationMethod<
  ListAppsRequest,
  ListAppsResponse,
  ListAppsError,
  Credentials | HttpClient.HttpClient,
  unknown
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: __S(135, __c16, 7) as any as S.Schema<ListAppsRequest>,
  output: __S(138, __c17, 2) as any as S.Schema<ListAppsResponse>,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListApps",
  pagination: {
    inputToken: "nextToken",
    outputToken: "nextToken",
    pageSize: "maxResults",
  } as const,
})) as any;

export type ListAppVersionAppComponentsError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Lists all the Application Components in the Resilience Hub application.
 */
export const listAppVersionAppComponents: API.PaginatedOperationMethod<
  ListAppVersionAppComponentsRequest,
  ListAppVersionAppComponentsResponse,
  ListAppVersionAppComponentsError,
  Credentials | HttpClient.HttpClient,
  unknown
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: __S(139, __c17, 3) as any as S.Schema<ListAppVersionAppComponentsRequest>,
  output: __S(140, __c17, 4) as any as S.Schema<ListAppVersionAppComponentsResponse>,
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
  operationName: "ListAppVersionAppComponents",
  pagination: {
    inputToken: "nextToken",
    outputToken: "nextToken",
    pageSize: "maxResults",
  } as const,
})) as any;

export type ListAppVersionResourceMappingsError =
  | AccessDeniedException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Lists how the resources in an application version are mapped/sourced from. Mappings can be
 * physical resource identifiers, CloudFormation stacks, resource-groups, or an application registry
 * app.
 */
export const listAppVersionResourceMappings: API.PaginatedOperationMethod<
  ListAppVersionResourceMappingsRequest,
  ListAppVersionResourceMappingsResponse,
  ListAppVersionResourceMappingsError,
  Credentials | HttpClient.HttpClient,
  unknown
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: __S(141, __c17, 5) as any as S.Schema<ListAppVersionResourceMappingsRequest>,
  output: __S(142, __c17, 6) as any as S.Schema<ListAppVersionResourceMappingsResponse>,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListAppVersionResourceMappings",
  pagination: {
    inputToken: "nextToken",
    outputToken: "nextToken",
    pageSize: "maxResults",
  } as const,
})) as any;

export type ListAppVersionResourcesError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Lists all the resources in an Resilience Hub application.
 */
export const listAppVersionResources: API.PaginatedOperationMethod<
  ListAppVersionResourcesRequest,
  ListAppVersionResourcesResponse,
  ListAppVersionResourcesError,
  Credentials | HttpClient.HttpClient,
  unknown
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: __S(143, __c17, 7) as any as S.Schema<ListAppVersionResourcesRequest>,
  output: __S(145, __c18, 1) as any as S.Schema<ListAppVersionResourcesResponse>,
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
  operationName: "ListAppVersionResources",
  pagination: {
    inputToken: "nextToken",
    outputToken: "nextToken",
    pageSize: "maxResults",
  } as const,
})) as any;

export type ListAppVersionsError =
  | AccessDeniedException
  | InternalServerException
  | ResourceNotFoundException
  | ValidationException
  | CommonErrors;
/**
 * Lists the different versions for the Resilience Hub applications.
 */
export const listAppVersions: API.PaginatedOperationMethod<
  ListAppVersionsRequest,
  ListAppVersionsResponse,
  ListAppVersionsError,
  Credentials | HttpClient.HttpClient,
  unknown
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: __S(146, __c18, 2) as any as S.Schema<ListAppVersionsRequest>,
  output: __S(149, __c18, 5) as any as S.Schema<ListAppVersionsResponse>,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ResourceNotFoundException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListAppVersions",
  pagination: {
    inputToken: "nextToken",
    outputToken: "nextToken",
    pageSize: "maxResults",
  } as const,
})) as any;

export type ListMetricsError =
  | AccessDeniedException
  | InternalServerException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Lists the metrics that can be exported.
 */
export const listMetrics: API.PaginatedOperationMethod<
  ListMetricsRequest,
  ListMetricsResponse,
  ListMetricsError,
  Credentials | HttpClient.HttpClient,
  String255[]
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: __S(156, __c19, 4) as any as S.Schema<ListMetricsRequest>,
  output: __S(158, __c19, 6) as any as S.Schema<ListMetricsResponse>,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListMetrics",
  pagination: {
    inputToken: "nextToken",
    outputToken: "nextToken",
    items: "rows",
    pageSize: "maxResults",
  } as const,
})) as any;

export type ListRecommendationTemplatesError =
  | AccessDeniedException
  | InternalServerException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Lists the recommendation templates for the Resilience Hub applications.
 */
export const listRecommendationTemplates: API.PaginatedOperationMethod<
  ListRecommendationTemplatesRequest,
  ListRecommendationTemplatesResponse,
  ListRecommendationTemplatesError,
  Credentials | HttpClient.HttpClient,
  unknown
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: __S(159, __c19, 7) as any as S.Schema<ListRecommendationTemplatesRequest>,
  output: __S(161, __c20, 1) as any as S.Schema<ListRecommendationTemplatesResponse>,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListRecommendationTemplates",
  pagination: {
    inputToken: "nextToken",
    outputToken: "nextToken",
    pageSize: "maxResults",
  } as const,
})) as any;

export type ListResiliencyPoliciesError =
  | AccessDeniedException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Lists the resiliency policies for the Resilience Hub applications.
 */
export const listResiliencyPolicies: API.PaginatedOperationMethod<
  ListResiliencyPoliciesRequest,
  ListResiliencyPoliciesResponse,
  ListResiliencyPoliciesError,
  Credentials | HttpClient.HttpClient,
  unknown
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: __S(162, __c20, 2) as any as S.Schema<ListResiliencyPoliciesRequest>,
  output: __S(164, __c20, 4) as any as S.Schema<ListResiliencyPoliciesResponse>,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListResiliencyPolicies",
  pagination: {
    inputToken: "nextToken",
    outputToken: "nextToken",
    pageSize: "maxResults",
  } as const,
})) as any;

export type ListResourceGroupingRecommendationsError =
  | AccessDeniedException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Lists the resource grouping recommendations suggested by Resilience Hub for your application.
 */
export const listResourceGroupingRecommendations: API.PaginatedOperationMethod<
  ListResourceGroupingRecommendationsRequest,
  ListResourceGroupingRecommendationsResponse,
  ListResourceGroupingRecommendationsError,
  Credentials | HttpClient.HttpClient,
  GroupingRecommendation
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: __S(165, __c20, 5) as any as S.Schema<ListResourceGroupingRecommendationsRequest>,
  output: __S(171, __c21, 3) as any as S.Schema<ListResourceGroupingRecommendationsResponse>,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListResourceGroupingRecommendations",
  pagination: {
    inputToken: "nextToken",
    outputToken: "nextToken",
    items: "groupingRecommendations",
    pageSize: "maxResults",
  } as const,
})) as any;

export type ListSopRecommendationsError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Lists the standard operating procedure (SOP) recommendations for the Resilience Hub applications.
 */
export const listSopRecommendations: API.PaginatedOperationMethod<
  ListSopRecommendationsRequest,
  ListSopRecommendationsResponse,
  ListSopRecommendationsError,
  Credentials | HttpClient.HttpClient,
  unknown
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: __S(172, __c21, 4) as any as S.Schema<ListSopRecommendationsRequest>,
  output: __S(175, __c21, 7) as any as S.Schema<ListSopRecommendationsResponse>,
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
  operationName: "ListSopRecommendations",
  pagination: {
    inputToken: "nextToken",
    outputToken: "nextToken",
    pageSize: "maxResults",
  } as const,
})) as any;

export type ListSuggestedResiliencyPoliciesError =
  | AccessDeniedException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Lists the suggested resiliency policies for the Resilience Hub
 * applications.
 */
export const listSuggestedResiliencyPolicies: API.PaginatedOperationMethod<
  ListSuggestedResiliencyPoliciesRequest,
  ListSuggestedResiliencyPoliciesResponse,
  ListSuggestedResiliencyPoliciesError,
  Credentials | HttpClient.HttpClient,
  unknown
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: __S(176, __c22, 0) as any as S.Schema<ListSuggestedResiliencyPoliciesRequest>,
  output: __S(164, __c20, 4) as any as S.Schema<ListSuggestedResiliencyPoliciesResponse>,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListSuggestedResiliencyPolicies",
  pagination: {
    inputToken: "nextToken",
    outputToken: "nextToken",
    pageSize: "maxResults",
  } as const,
})) as any;

export type ListTagsForResourceError =
  | AccessDeniedException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Lists the tags for your resources in your Resilience Hub applications.
 */
export const listTagsForResource: API.OperationMethod<
  ListTagsForResourceRequest,
  ListTagsForResourceResponse,
  ListTagsForResourceError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(177, __c22, 1) as any as S.Schema<ListTagsForResourceRequest>,
  output: __S(178, __c22, 2) as any as S.Schema<ListTagsForResourceResponse>,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListTagsForResource",
}));

export type ListTestRecommendationsError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Lists the test recommendations for the Resilience Hub application.
 */
export const listTestRecommendations: API.PaginatedOperationMethod<
  ListTestRecommendationsRequest,
  ListTestRecommendationsResponse,
  ListTestRecommendationsError,
  Credentials | HttpClient.HttpClient,
  unknown
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: __S(179, __c22, 3) as any as S.Schema<ListTestRecommendationsRequest>,
  output: __S(182, __c22, 6) as any as S.Schema<ListTestRecommendationsResponse>,
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
  operationName: "ListTestRecommendations",
  pagination: {
    inputToken: "nextToken",
    outputToken: "nextToken",
    pageSize: "maxResults",
  } as const,
})) as any;

export type ListUnsupportedAppVersionResourcesError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Lists the resources that are not currently supported in Resilience Hub. An
 * unsupported resource is a resource that exists in the object that was used to create an app,
 * but is not supported by Resilience Hub.
 */
export const listUnsupportedAppVersionResources: API.PaginatedOperationMethod<
  ListUnsupportedAppVersionResourcesRequest,
  ListUnsupportedAppVersionResourcesResponse,
  ListUnsupportedAppVersionResourcesError,
  Credentials | HttpClient.HttpClient,
  unknown
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: __S(183, __c22, 7) as any as S.Schema<ListUnsupportedAppVersionResourcesRequest>,
  output: __S(186, __c23, 2) as any as S.Schema<ListUnsupportedAppVersionResourcesResponse>,
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
  operationName: "ListUnsupportedAppVersionResources",
  pagination: {
    inputToken: "nextToken",
    outputToken: "nextToken",
    pageSize: "maxResults",
  } as const,
})) as any;

export type PublishAppVersionError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Publishes a new version of a specific Resilience Hub application.
 */
export const publishAppVersion: API.OperationMethod<
  PublishAppVersionRequest,
  PublishAppVersionResponse,
  PublishAppVersionError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(187, __c23, 3) as any as S.Schema<PublishAppVersionRequest>,
  output: __S(188, __c23, 4) as any as S.Schema<PublishAppVersionResponse>,
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
  operationName: "PublishAppVersion",
}));

export type PutDraftAppVersionTemplateError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Adds or updates the app template for an Resilience Hub application draft
 * version.
 */
export const putDraftAppVersionTemplate: API.OperationMethod<
  PutDraftAppVersionTemplateRequest,
  PutDraftAppVersionTemplateResponse,
  PutDraftAppVersionTemplateError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(189, __c23, 5) as any as S.Schema<PutDraftAppVersionTemplateRequest>,
  output: __S(190, __c23, 6) as any as S.Schema<PutDraftAppVersionTemplateResponse>,
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
  operationName: "PutDraftAppVersionTemplate",
}));

export type RejectResourceGroupingRecommendationsError =
  | AccessDeniedException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Rejects resource grouping recommendations.
 */
export const rejectResourceGroupingRecommendations: API.OperationMethod<
  RejectResourceGroupingRecommendationsRequest,
  RejectResourceGroupingRecommendationsResponse,
  RejectResourceGroupingRecommendationsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(193, __c24, 1) as any as S.Schema<RejectResourceGroupingRecommendationsRequest>,
  output: __S(5, __c0, 5) as any as S.Schema<RejectResourceGroupingRecommendationsResponse>,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "RejectResourceGroupingRecommendations",
}));

export type RemoveDraftAppVersionResourceMappingsError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Removes resource mappings from a draft application version.
 */
export const removeDraftAppVersionResourceMappings: API.OperationMethod<
  RemoveDraftAppVersionResourceMappingsRequest,
  RemoveDraftAppVersionResourceMappingsResponse,
  RemoveDraftAppVersionResourceMappingsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(194, __c24, 2) as any as S.Schema<RemoveDraftAppVersionResourceMappingsRequest>,
  output: __S(190, __c23, 6) as any as S.Schema<RemoveDraftAppVersionResourceMappingsResponse>,
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
  operationName: "RemoveDraftAppVersionResourceMappings",
}));

export type ResolveAppVersionResourcesError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Resolves the resources for an application version.
 */
export const resolveAppVersionResources: API.OperationMethod<
  ResolveAppVersionResourcesRequest,
  ResolveAppVersionResourcesResponse,
  ResolveAppVersionResourcesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(195, __c24, 3) as any as S.Schema<ResolveAppVersionResourcesRequest>,
  output: __S(196, __c24, 4) as any as S.Schema<ResolveAppVersionResourcesResponse>,
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
  operationName: "ResolveAppVersionResources",
}));

export type StartAppAssessmentError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ResourceNotFoundException
  | ServiceQuotaExceededException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Creates a new application assessment for an application.
 */
export const startAppAssessment: API.OperationMethod<
  StartAppAssessmentRequest,
  StartAppAssessmentResponse,
  StartAppAssessmentError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(197, __c24, 5) as any as S.Schema<StartAppAssessmentRequest>,
  output: __S(76, __c9, 4) as any as S.Schema<StartAppAssessmentResponse>,
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
  operationName: "StartAppAssessment",
}));

export type StartMetricsExportError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ServiceQuotaExceededException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Initiates the export task of metrics.
 */
export const startMetricsExport: API.OperationMethod<
  StartMetricsExportRequest,
  StartMetricsExportResponse,
  StartMetricsExportError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(198, __c24, 6) as any as S.Schema<StartMetricsExportRequest>,
  output: __S(199, __c24, 7) as any as S.Schema<StartMetricsExportResponse>,
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
  operationName: "StartMetricsExport",
}));

export type StartResourceGroupingRecommendationTaskError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Starts grouping recommendation task.
 */
export const startResourceGroupingRecommendationTask: API.OperationMethod<
  StartResourceGroupingRecommendationTaskRequest,
  StartResourceGroupingRecommendationTaskResponse,
  StartResourceGroupingRecommendationTaskError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(200, __c25, 0) as any as S.Schema<StartResourceGroupingRecommendationTaskRequest>,
  output: __S(201, __c25, 1) as any as S.Schema<StartResourceGroupingRecommendationTaskResponse>,
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
  operationName: "StartResourceGroupingRecommendationTask",
}));

export type TagResourceError =
  | AccessDeniedException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Applies one or more tags to a resource.
 */
export const tagResource: API.OperationMethod<
  TagResourceRequest,
  TagResourceResponse,
  TagResourceError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(202, __c25, 2) as any as S.Schema<TagResourceRequest>,
  output: __S(203, __c25, 3) as any as S.Schema<TagResourceResponse>,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "TagResource",
}));

export type UntagResourceError =
  | AccessDeniedException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Removes one or more tags from a resource.
 */
export const untagResource: API.OperationMethod<
  UntagResourceRequest,
  UntagResourceResponse,
  UntagResourceError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(204, __c25, 4) as any as S.Schema<UntagResourceRequest>,
  output: __S(203, __c25, 3) as any as S.Schema<UntagResourceResponse>,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "UntagResource",
}));

export type UpdateAppError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Updates an application.
 */
export const updateApp: API.OperationMethod<
  UpdateAppRequest,
  UpdateAppResponse,
  UpdateAppError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(205, __c25, 5) as any as S.Schema<UpdateAppRequest>,
  output: __S(25, __c3, 1) as any as S.Schema<UpdateAppResponse>,
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
  operationName: "UpdateApp",
}));

export type UpdateAppVersionError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Updates the Resilience Hub application version.
 *
 * This API updates the Resilience Hub application draft version. To use this
 * information for running resiliency assessments, you must publish the Resilience Hub
 * application using the `PublishAppVersion` API.
 */
export const updateAppVersion: API.OperationMethod<
  UpdateAppVersionRequest,
  UpdateAppVersionResponse,
  UpdateAppVersionError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(206, __c25, 6) as any as S.Schema<UpdateAppVersionRequest>,
  output: __S(207, __c25, 7) as any as S.Schema<UpdateAppVersionResponse>,
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
  operationName: "UpdateAppVersion",
}));

export type UpdateAppVersionAppComponentError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Updates an existing Application Component in the Resilience Hub application.
 *
 * This API updates the Resilience Hub application draft version. To use this
 * Application Component for running assessments, you must publish the Resilience Hub
 * application using the `PublishAppVersion` API.
 */
export const updateAppVersionAppComponent: API.OperationMethod<
  UpdateAppVersionAppComponentRequest,
  UpdateAppVersionAppComponentResponse,
  UpdateAppVersionAppComponentError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(208, __c26, 0) as any as S.Schema<UpdateAppVersionAppComponentRequest>,
  output: __S(29, __c3, 5) as any as S.Schema<UpdateAppVersionAppComponentResponse>,
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
  operationName: "UpdateAppVersionAppComponent",
}));

export type UpdateAppVersionResourceError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ResourceNotFoundException
  | ServiceQuotaExceededException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Updates the resource details in the Resilience Hub application.
 *
 * - This action has no effect outside Resilience Hub.
 *
 * - This API updates the Resilience Hub application draft version. To use this
 * resource for running resiliency assessments, you must publish the Resilience Hub
 * application using the `PublishAppVersion` API.
 *
 * - To update application version with new `physicalResourceID`, you must
 * call `ResolveAppVersionResources` API.
 */
export const updateAppVersionResource: API.OperationMethod<
  UpdateAppVersionResourceRequest,
  UpdateAppVersionResourceResponse,
  UpdateAppVersionResourceError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(209, __c26, 1) as any as S.Schema<UpdateAppVersionResourceRequest>,
  output: __S(34, __c4, 2) as any as S.Schema<UpdateAppVersionResourceResponse>,
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
  operationName: "UpdateAppVersionResource",
}));

export type UpdateResiliencyPolicyError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Updates a resiliency policy.
 *
 * Resilience Hub allows you to provide a value of zero for `rtoInSecs`
 * and `rpoInSecs` of your resiliency policy. But, while assessing your application,
 * the lowest possible assessment result is near zero. Hence, if you provide value zero for
 * `rtoInSecs` and `rpoInSecs`, the estimated workload RTO and
 * estimated workload RPO result will be near zero and the Compliance
 * status for your application will be set to Policy
 * breached.
 */
export const updateResiliencyPolicy: API.OperationMethod<
  UpdateResiliencyPolicyRequest,
  UpdateResiliencyPolicyResponse,
  UpdateResiliencyPolicyError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(210, __c26, 2) as any as S.Schema<UpdateResiliencyPolicyRequest>,
  output: __S(44, __c5, 4) as any as S.Schema<UpdateResiliencyPolicyResponse>,
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
  operationName: "UpdateResiliencyPolicy",
}));

// Schema builders: each runs one schema initializer, on that schema's first use.
function __c0(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() => S.Struct({ groupingRecommendationId: S.String })).annotate({
        identifier: "AcceptGroupingRecommendationEntry",
      });
    case 1:
      return S.Array(__S(0, __c0, 0));
    case 2:
      return S.suspend(() =>
        S.Struct({ appArn: S.String, entries: __S(1, __c0, 1) }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/accept-resource-grouping-recommendations" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "AcceptResourceGroupingRecommendationsRequest",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({ groupingRecommendationId: S.String, errorMessage: S.String }),
      ).annotate({
        identifier: "FailedGroupingRecommendationEntry",
      });
    case 4:
      return S.Array(__S(3, __c0, 3));
    case 5:
      return S.suspend(() =>
        S.Struct({ appArn: S.String, failedEntries: __S(4, __c0, 4) }),
      ).annotate({
        identifier: "AcceptResourceGroupingRecommendationsResponse",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({
          identifier: S.String,
          type: S.String,
          awsRegion: S.optional(S.String),
          awsAccountId: S.optional(S.String),
        }),
      ).annotate({ identifier: "PhysicalResourceId" });
    case 7:
      return S.suspend(() =>
        S.Struct({
          resourceName: S.optional(S.String),
          logicalStackName: S.optional(S.String),
          appRegistryAppName: S.optional(S.String),
          resourceGroupName: S.optional(S.String),
          mappingType: S.String,
          physicalResourceId: __S(6, __c0, 6),
          terraformSourceName: S.optional(S.String),
          eksSourceName: S.optional(S.String),
        }),
      ).annotate({ identifier: "ResourceMapping" });
  }
}
function __c1(j: number): any {
  switch (j) {
    case 0:
      return S.Array(__S(7, __c0, 7));
    case 1:
      return S.suspend(() =>
        S.Struct({ appArn: S.String, resourceMappings: __S(8, __c1, 0) }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/add-draft-app-version-resource-mappings" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "AddDraftAppVersionResourceMappingsRequest",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({ appArn: S.String, appVersion: S.String, resourceMappings: __S(8, __c1, 0) }),
      ).annotate({
        identifier: "AddDraftAppVersionResourceMappingsResponse",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({
          resourceId: S.optional(S.String),
          targetAccountId: S.optional(S.String),
          targetRegion: S.optional(S.String),
        }),
      ).annotate({
        identifier: "UpdateRecommendationStatusItem",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({
          entryId: S.String,
          referenceId: S.String,
          item: S.optional(__S(11, __c1, 3)),
          excluded: S.Boolean,
          appComponentId: S.optional(S.String),
          excludeReason: S.optional(S.String),
        }),
      ).annotate({
        identifier: "UpdateRecommendationStatusRequestEntry",
      });
    case 5:
      return S.Array(__S(12, __c1, 4));
    case 6:
      return S.suspend(() =>
        S.Struct({
          appArn: S.String,
          requestEntries: __S(13, __c1, 5),
        }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/batch-update-recommendation-status" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "BatchUpdateRecommendationStatusRequest",
      });
    case 7:
      return S.suspend(() => S.Struct({ entryId: S.String, errorMessage: S.String })).annotate({
        identifier: "BatchUpdateRecommendationStatusFailedEntry",
      });
  }
}
function __c2(j: number): any {
  switch (j) {
    case 0:
      return S.Array(__S(15, __c1, 7));
    case 1:
      return S.suspend(() =>
        S.Struct({
          appArn: S.String,
          successfulEntries: __S(13, __c1, 5),
          failedEntries: __S(16, __c2, 0),
        }),
      ).annotate({
        identifier: "BatchUpdateRecommendationStatusResponse",
      });
    case 2:
      return S.Record(S.String, /*@__PURE__*/ S.String.pipe(S.optional));
    case 3:
      return S.Array(S.String);
    case 4:
      return S.suspend(() =>
        S.Struct({
          type: S.String,
          invokerRoleName: S.optional(S.String),
          crossAccountRoleArns: S.optional(__S(19, __c2, 3)),
        }),
      ).annotate({ identifier: "PermissionModel" });
    case 5:
      return S.suspend(() =>
        S.Struct({ name: S.String, eventType: S.String, snsTopicArn: S.optional(S.String) }),
      ).annotate({ identifier: "EventSubscription" });
    case 6:
      return S.Array(__S(21, __c2, 5));
    case 7:
      return S.suspend(() =>
        S.Struct({
          name: S.String,
          description: S.optional(S.String),
          policyArn: S.optional(S.String),
          tags: S.optional(__S(18, __c2, 2)),
          clientToken: S.optional(S.String).pipe(T.IdempotencyToken()),
          assessmentSchedule: S.optional(S.String),
          permissionModel: S.optional(__S(20, __c2, 4)),
          eventSubscriptions: S.optional(__S(22, __c2, 6)),
          awsApplicationArn: S.optional(S.String),
        }).pipe(
          T.all(T.Http({ method: "POST", uri: "/create-app" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({ identifier: "CreateAppRequest" });
  }
}
function __c3(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          appArn: S.String,
          name: S.String,
          description: S.optional(S.String),
          policyArn: S.optional(S.String),
          creationTime: S.Date.pipe(T.TimestampFormat("epoch-seconds")),
          status: S.optional(S.String),
          complianceStatus: S.optional(S.String),
          lastAppComplianceEvaluationTime: S.optional(
            S.Date.pipe(T.TimestampFormat("epoch-seconds")),
          ),
          resiliencyScore: S.optional(S.Number),
          lastResiliencyScoreEvaluationTime: S.optional(
            S.Date.pipe(T.TimestampFormat("epoch-seconds")),
          ),
          tags: S.optional(__S(18, __c2, 2)),
          assessmentSchedule: S.optional(S.String),
          permissionModel: S.optional(__S(20, __c2, 4)),
          eventSubscriptions: S.optional(__S(22, __c2, 6)),
          driftStatus: S.optional(S.String),
          lastDriftEvaluationTime: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          rtoInSecs: S.optional(S.Number),
          rpoInSecs: S.optional(S.Number),
          awsApplicationArn: S.optional(S.String),
        }),
      ).annotate({ identifier: "App" });
    case 1:
      return S.suspend(() => S.Struct({ app: __S(24, __c3, 0) })).annotate({
        identifier: "CreateAppResponse",
      });
    case 2:
      return S.Record(S.String, /*@__PURE__*/ __S(19, __c2, 3).pipe(S.optional));
    case 3:
      return S.suspend(() =>
        S.Struct({
          appArn: S.String,
          id: S.optional(S.String),
          name: S.String,
          type: S.String,
          additionalInfo: S.optional(__S(26, __c3, 2)),
          clientToken: S.optional(S.String).pipe(T.IdempotencyToken()),
        }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/create-app-version-app-component" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "CreateAppVersionAppComponentRequest",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({
          name: S.String,
          type: S.String,
          id: S.optional(S.String),
          additionalInfo: S.optional(__S(26, __c3, 2)),
        }),
      ).annotate({ identifier: "AppComponent" });
    case 5:
      return S.suspend(() =>
        S.Struct({
          appArn: S.String,
          appVersion: S.String,
          appComponent: S.optional(__S(28, __c3, 4)),
        }),
      ).annotate({
        identifier: "CreateAppVersionAppComponentResponse",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({
          identifier: S.String,
          logicalStackName: S.optional(S.String),
          resourceGroupName: S.optional(S.String),
          terraformSourceName: S.optional(S.String),
          eksSourceName: S.optional(S.String),
        }),
      ).annotate({ identifier: "LogicalResourceId" });
    case 7:
      return S.suspend(() =>
        S.Struct({
          appArn: S.String,
          resourceName: S.optional(S.String),
          logicalResourceId: __S(30, __c3, 6),
          physicalResourceId: S.String,
          awsRegion: S.optional(S.String),
          awsAccountId: S.optional(S.String),
          resourceType: S.String,
          appComponents: __S(19, __c2, 3),
          additionalInfo: S.optional(__S(26, __c3, 2)),
          clientToken: S.optional(S.String).pipe(T.IdempotencyToken()),
        }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/create-app-version-resource" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "CreateAppVersionResourceRequest",
      });
  }
}
function __c4(j: number): any {
  switch (j) {
    case 0:
      return S.Array(__S(28, __c3, 4));
    case 1:
      return S.suspend(() =>
        S.Struct({
          resourceName: S.optional(S.String),
          logicalResourceId: __S(30, __c3, 6),
          physicalResourceId: __S(6, __c0, 6),
          resourceType: S.String,
          appComponents: S.optional(__S(32, __c4, 0)),
          additionalInfo: S.optional(__S(26, __c3, 2)),
          excluded: S.optional(S.Boolean),
          sourceType: S.optional(S.String),
          parentResourceName: S.optional(S.String),
        }),
      ).annotate({ identifier: "PhysicalResource" });
    case 2:
      return S.suspend(() =>
        S.Struct({
          appArn: S.String,
          appVersion: S.String,
          physicalResource: S.optional(__S(33, __c4, 1)),
        }),
      ).annotate({
        identifier: "CreateAppVersionResourceResponse",
      });
    case 3:
      return S.Array(S.String);
    case 4:
      return S.suspend(() =>
        S.Struct({
          recommendationIds: S.optional(__S(19, __c2, 3)),
          format: S.optional(S.String),
          recommendationTypes: S.optional(__S(35, __c4, 3)),
          assessmentArn: S.String,
          name: S.String,
          clientToken: S.optional(S.String).pipe(T.IdempotencyToken()),
          tags: S.optional(__S(18, __c2, 2)),
          bucketName: S.optional(S.String),
        }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/create-recommendation-template" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "CreateRecommendationTemplateRequest",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({ bucket: S.optional(S.String), prefix: S.optional(S.String) }),
      ).annotate({ identifier: "S3Location" });
    case 6:
      return S.suspend(() =>
        S.Struct({
          templatesLocation: S.optional(__S(37, __c4, 5)),
          assessmentArn: S.String,
          appArn: S.optional(S.String),
          recommendationIds: S.optional(__S(19, __c2, 3)),
          recommendationTypes: __S(35, __c4, 3),
          format: S.String,
          recommendationTemplateArn: S.String,
          message: S.optional(S.String),
          status: S.String,
          name: S.String,
          startTime: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          endTime: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          tags: S.optional(__S(18, __c2, 2)),
          needsReplacements: S.optional(S.Boolean),
        }),
      ).annotate({ identifier: "RecommendationTemplate" });
    case 7:
      return S.suspend(() =>
        S.Struct({ recommendationTemplate: S.optional(__S(38, __c4, 6)) }),
      ).annotate({
        identifier: "CreateRecommendationTemplateResponse",
      });
  }
}
function __c5(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() => S.Struct({ rtoInSecs: S.Number, rpoInSecs: S.Number })).annotate({
        identifier: "FailurePolicy",
      });
    case 1:
      return S.Record(S.String, /*@__PURE__*/ __S(40, __c5, 0).pipe(S.optional));
    case 2:
      return S.suspend(() =>
        S.Struct({
          policyName: S.String,
          policyDescription: S.optional(S.String),
          dataLocationConstraint: S.optional(S.String),
          tier: S.String,
          policy: __S(41, __c5, 1),
          clientToken: S.optional(S.String).pipe(T.IdempotencyToken()),
          tags: S.optional(__S(18, __c2, 2)),
        }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/create-resiliency-policy" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "CreateResiliencyPolicyRequest",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({
          policyArn: S.optional(S.String),
          policyName: S.optional(S.String),
          policyDescription: S.optional(S.String),
          dataLocationConstraint: S.optional(S.String),
          tier: S.optional(S.String),
          estimatedCostTier: S.optional(S.String),
          policy: S.optional(__S(41, __c5, 1)),
          creationTime: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          tags: S.optional(__S(18, __c2, 2)),
        }),
      ).annotate({ identifier: "ResiliencyPolicy" });
    case 4:
      return S.suspend(() => S.Struct({ policy: __S(43, __c5, 3) })).annotate({
        identifier: "CreateResiliencyPolicyResponse",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({
          appArn: S.String,
          forceDelete: S.optional(S.Boolean),
          clientToken: S.optional(S.String).pipe(T.IdempotencyToken()),
        }).pipe(
          T.all(T.Http({ method: "POST", uri: "/delete-app" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({ identifier: "DeleteAppRequest" });
    case 6:
      return S.suspend(() => S.Struct({ appArn: S.String })).annotate({
        identifier: "DeleteAppResponse",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({
          assessmentArn: S.String,
          clientToken: S.optional(S.String).pipe(T.IdempotencyToken()),
        }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/delete-app-assessment" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "DeleteAppAssessmentRequest",
      });
  }
}
function __c6(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({ assessmentArn: S.String, assessmentStatus: S.String }),
      ).annotate({
        identifier: "DeleteAppAssessmentResponse",
      });
    case 1:
      return S.suspend(() => S.Struct({ s3StateFileUrl: S.String })).annotate({
        identifier: "TerraformSource",
      });
    case 2:
      return S.suspend(() => S.Struct({ eksClusterArn: S.String, namespace: S.String })).annotate({
        identifier: "EksSourceClusterNamespace",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({
          appArn: S.String,
          sourceArn: S.optional(S.String),
          terraformSource: S.optional(__S(49, __c6, 1)),
          clientToken: S.optional(S.String).pipe(T.IdempotencyToken()),
          eksSourceClusterNamespace: S.optional(__S(50, __c6, 2)),
        }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/delete-app-input-source" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "DeleteAppInputSourceRequest",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({
          sourceName: S.optional(S.String),
          importType: S.String,
          sourceArn: S.optional(S.String),
          terraformSource: S.optional(__S(49, __c6, 1)),
          resourceCount: S.optional(S.Number),
          eksSourceClusterNamespace: S.optional(__S(50, __c6, 2)),
        }),
      ).annotate({ identifier: "AppInputSource" });
    case 5:
      return S.suspend(() =>
        S.Struct({ appArn: S.optional(S.String), appInputSource: S.optional(__S(52, __c6, 4)) }),
      ).annotate({
        identifier: "DeleteAppInputSourceResponse",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({
          appArn: S.String,
          id: S.String,
          clientToken: S.optional(S.String).pipe(T.IdempotencyToken()),
        }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/delete-app-version-app-component" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "DeleteAppVersionAppComponentRequest",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({
          appArn: S.String,
          resourceName: S.optional(S.String),
          logicalResourceId: S.optional(__S(30, __c3, 6)),
          physicalResourceId: S.optional(S.String),
          awsRegion: S.optional(S.String),
          awsAccountId: S.optional(S.String),
          clientToken: S.optional(S.String).pipe(T.IdempotencyToken()),
        }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/delete-app-version-resource" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "DeleteAppVersionResourceRequest",
      });
  }
}
function __c7(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          recommendationTemplateArn: S.String,
          clientToken: S.optional(S.String).pipe(T.IdempotencyToken()),
        }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/delete-recommendation-template" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "DeleteRecommendationTemplateRequest",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({ recommendationTemplateArn: S.String, status: S.String }),
      ).annotate({
        identifier: "DeleteRecommendationTemplateResponse",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({
          policyArn: S.String,
          clientToken: S.optional(S.String).pipe(T.IdempotencyToken()),
        }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/delete-resiliency-policy" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "DeleteResiliencyPolicyRequest",
      });
    case 3:
      return S.suspend(() => S.Struct({ policyArn: S.String })).annotate({
        identifier: "DeleteResiliencyPolicyResponse",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({ appArn: S.String }).pipe(
          T.all(T.Http({ method: "POST", uri: "/describe-app" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({ identifier: "DescribeAppRequest" });
    case 5:
      return S.suspend(() =>
        S.Struct({ assessmentArn: S.String }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/describe-app-assessment" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "DescribeAppAssessmentRequest",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({ amount: S.Number, currency: S.String, frequency: S.String }),
      ).annotate({ identifier: "Cost" });
    case 7:
      return S.Record(S.String, /*@__PURE__*/ S.Number.pipe(S.optional));
  }
}
function __c8(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          score: S.optional(S.Number),
          possibleScore: S.optional(S.Number),
          outstandingCount: S.optional(S.Number),
          excludedCount: S.optional(S.Number),
        }),
      ).annotate({
        identifier: "ScoringComponentResiliencyScore",
      });
    case 1:
      return S.Record(S.String, /*@__PURE__*/ __S(64, __c8, 0).pipe(S.optional));
    case 2:
      return S.suspend(() =>
        S.Struct({
          score: S.Number,
          disruptionScore: __S(63, __c7, 7),
          componentScore: S.optional(__S(65, __c8, 1)),
        }),
      ).annotate({ identifier: "ResiliencyScore" });
    case 3:
      return S.suspend(() =>
        S.Struct({
          achievableRtoInSecs: S.optional(S.Number),
          currentRtoInSecs: S.optional(S.Number),
          rtoReferenceId: S.optional(S.String),
          rtoDescription: S.optional(S.String),
          currentRpoInSecs: S.optional(S.Number),
          rpoReferenceId: S.optional(S.String),
          rpoDescription: S.optional(S.String),
          complianceStatus: S.String,
          achievableRpoInSecs: S.optional(S.Number),
          message: S.optional(S.String),
        }),
      ).annotate({ identifier: "DisruptionCompliance" });
    case 4:
      return S.Record(S.String, /*@__PURE__*/ __S(67, __c8, 3).pipe(S.optional));
    case 5:
      return S.suspend(() =>
        S.Struct({
          logicalResourceId: S.optional(S.String),
          physicalResourceId: S.optional(S.String),
          reason: S.optional(S.String),
        }),
      ).annotate({ identifier: "ResourceError" });
    case 6:
      return S.Array(__S(69, __c8, 5));
    case 7:
      return S.suspend(() =>
        S.Struct({
          resourceErrors: S.optional(__S(70, __c8, 6)),
          hasMoreErrors: S.optional(S.Boolean),
        }),
      ).annotate({ identifier: "ResourceErrorsDetails" });
  }
}
function __c9(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          risk: S.optional(S.String),
          recommendation: S.optional(S.String),
          appComponents: S.optional(__S(19, __c2, 3)),
        }),
      ).annotate({
        identifier: "AssessmentRiskRecommendation",
      });
    case 1:
      return S.Array(__S(72, __c9, 0));
    case 2:
      return S.suspend(() =>
        S.Struct({
          summary: S.optional(S.String),
          riskRecommendations: S.optional(__S(73, __c9, 1)),
        }),
      ).annotate({ identifier: "AssessmentSummary" });
    case 3:
      return S.suspend(() =>
        S.Struct({
          appArn: S.optional(S.String),
          appVersion: S.optional(S.String),
          invoker: S.String,
          cost: S.optional(__S(62, __c7, 6)),
          resiliencyScore: S.optional(__S(66, __c8, 2)),
          compliance: S.optional(__S(68, __c8, 4)),
          complianceStatus: S.optional(S.String),
          assessmentStatus: S.String,
          startTime: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          endTime: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          message: S.optional(S.String),
          assessmentName: S.optional(S.String),
          assessmentArn: S.String,
          policy: S.optional(__S(43, __c5, 3)),
          tags: S.optional(__S(18, __c2, 2)),
          resourceErrorsDetails: S.optional(__S(71, __c8, 7)),
          versionName: S.optional(S.String),
          driftStatus: S.optional(S.String),
          summary: S.optional(__S(74, __c9, 2)),
        }),
      ).annotate({ identifier: "AppAssessment" });
    case 4:
      return S.suspend(() => S.Struct({ assessment: __S(75, __c9, 3) })).annotate({
        identifier: "DescribeAppAssessmentResponse",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({ appArn: S.String, appVersion: S.String }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/describe-app-version" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "DescribeAppVersionRequest",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({
          appArn: S.String,
          appVersion: S.String,
          additionalInfo: S.optional(__S(26, __c3, 2)),
        }),
      ).annotate({
        identifier: "DescribeAppVersionResponse",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({ appArn: S.String, appVersion: S.String, id: S.String }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/describe-app-version-app-component" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "DescribeAppVersionAppComponentRequest",
      });
  }
}
function __c10(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          appArn: S.String,
          appVersion: S.String,
          resourceName: S.optional(S.String),
          logicalResourceId: S.optional(__S(30, __c3, 6)),
          physicalResourceId: S.optional(S.String),
          awsRegion: S.optional(S.String),
          awsAccountId: S.optional(S.String),
        }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/describe-app-version-resource" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "DescribeAppVersionResourceRequest",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({
          appArn: S.String,
          appVersion: S.String,
          resolutionId: S.optional(S.String),
        }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/describe-app-version-resources-resolution-status" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "DescribeAppVersionResourcesResolutionStatusRequest",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({
          appArn: S.String,
          appVersion: S.String,
          resolutionId: S.String,
          status: S.String,
          errorMessage: S.optional(S.String),
        }),
      ).annotate({
        identifier: "DescribeAppVersionResourcesResolutionStatusResponse",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({ appArn: S.String, appVersion: S.String }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/describe-app-version-template" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "DescribeAppVersionTemplateRequest",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({ appArn: S.String, appVersion: S.String, appTemplateBody: S.String }),
      ).annotate({
        identifier: "DescribeAppVersionTemplateResponse",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({ appArn: S.String }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/describe-draft-app-version-resources-import-status" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "DescribeDraftAppVersionResourcesImportStatusRequest",
      });
    case 6:
      return S.suspend(() => S.Struct({ errorMessage: S.optional(S.String) })).annotate({
        identifier: "ErrorDetail",
      });
    case 7:
      return S.Array(__S(86, __c10, 6));
  }
}
function __c11(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          appArn: S.String,
          appVersion: S.String,
          status: S.String,
          statusChangeTime: S.Date.pipe(T.TimestampFormat("epoch-seconds")),
          errorMessage: S.optional(S.String),
          errorDetails: S.optional(__S(87, __c10, 7)),
        }),
      ).annotate({
        identifier: "DescribeDraftAppVersionResourcesImportStatusResponse",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({ metricsExportId: S.String }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/describe-metrics-export" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "DescribeMetricsExportRequest",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({
          metricsExportId: S.String,
          status: S.String,
          exportLocation: S.optional(__S(37, __c4, 5)),
          errorMessage: S.optional(S.String),
        }),
      ).annotate({
        identifier: "DescribeMetricsExportResponse",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({ policyArn: S.String }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/describe-resiliency-policy" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "DescribeResiliencyPolicyRequest",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({ appArn: S.String, groupingId: S.optional(S.String) }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/describe-resource-grouping-recommendation-task" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "DescribeResourceGroupingRecommendationTaskRequest",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({
          groupingId: S.String,
          status: S.String,
          errorMessage: S.optional(S.String),
        }),
      ).annotate({
        identifier: "DescribeResourceGroupingRecommendationTaskResponse",
      });
    case 6:
      return S.Array(__S(49, __c6, 1));
    case 7:
      return S.suspend(() =>
        S.Struct({ eksClusterArn: S.String, namespaces: __S(19, __c2, 3) }),
      ).annotate({ identifier: "EksSource" });
  }
}
function __c12(j: number): any {
  switch (j) {
    case 0:
      return S.Array(__S(95, __c11, 7));
    case 1:
      return S.suspend(() =>
        S.Struct({
          appArn: S.String,
          sourceArns: S.optional(__S(19, __c2, 3)),
          terraformSources: S.optional(__S(94, __c11, 6)),
          importStrategy: S.optional(S.String),
          eksSources: S.optional(__S(96, __c12, 0)),
        }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/import-resources-to-draft-app-version" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "ImportResourcesToDraftAppVersionRequest",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({
          appArn: S.String,
          appVersion: S.String,
          sourceArns: S.optional(__S(19, __c2, 3)),
          status: S.String,
          terraformSources: S.optional(__S(94, __c11, 6)),
          eksSources: S.optional(__S(96, __c12, 0)),
        }),
      ).annotate({
        identifier: "ImportResourcesToDraftAppVersionResponse",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({
          assessmentArn: S.String,
          nextToken: S.optional(S.String),
          maxResults: S.optional(S.Number),
        }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/list-alarm-recommendations" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "ListAlarmRecommendationsRequest",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({
          experimentArn: S.optional(S.String),
          experimentTemplateId: S.optional(S.String),
        }),
      ).annotate({ identifier: "Experiment" });
    case 5:
      return S.suspend(() =>
        S.Struct({ alarmArn: S.optional(S.String), source: S.optional(S.String) }),
      ).annotate({ identifier: "Alarm" });
    case 6:
      return S.suspend(() =>
        S.Struct({
          resourceId: S.optional(S.String),
          targetAccountId: S.optional(S.String),
          targetRegion: S.optional(S.String),
          alreadyImplemented: S.optional(S.Boolean),
          excluded: S.optional(S.Boolean),
          excludeReason: S.optional(S.String),
          latestDiscoveredExperiment: S.optional(__S(100, __c12, 4)),
          discoveredAlarm: S.optional(__S(101, __c12, 5)),
        }),
      ).annotate({ identifier: "RecommendationItem" });
    case 7:
      return S.Array(__S(102, __c12, 6));
  }
}
function __c13(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          recommendationId: S.String,
          referenceId: S.String,
          name: S.String,
          description: S.optional(S.String),
          type: S.String,
          appComponentName: S.optional(S.String),
          items: S.optional(__S(103, __c12, 7)),
          prerequisite: S.optional(S.String),
          appComponentNames: S.optional(__S(19, __c2, 3)),
          recommendationStatus: S.optional(S.String),
        }),
      ).annotate({ identifier: "AlarmRecommendation" });
    case 1:
      return S.Array(__S(104, __c13, 0));
    case 2:
      return S.suspend(() =>
        S.Struct({
          alarmRecommendations: __S(105, __c13, 1),
          nextToken: S.optional(S.String),
        }),
      ).annotate({
        identifier: "ListAlarmRecommendationsResponse",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({
          assessmentArn: S.String,
          nextToken: S.optional(S.String),
          maxResults: S.optional(S.Number),
        }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/list-app-assessment-compliance-drifts" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "ListAppAssessmentComplianceDriftsRequest",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({
          entityId: S.optional(S.String),
          entityType: S.optional(S.String),
          driftType: S.optional(S.String),
          appId: S.optional(S.String),
          appVersion: S.optional(S.String),
          expectedReferenceId: S.optional(S.String),
          expectedValue: S.optional(__S(68, __c8, 4)),
          actualReferenceId: S.optional(S.String),
          actualValue: S.optional(__S(68, __c8, 4)),
          diffType: S.optional(S.String),
        }),
      ).annotate({ identifier: "ComplianceDrift" });
    case 5:
      return S.Array(__S(108, __c13, 4));
    case 6:
      return S.suspend(() =>
        S.Struct({ complianceDrifts: __S(109, __c13, 5), nextToken: S.optional(S.String) }),
      ).annotate({
        identifier: "ListAppAssessmentComplianceDriftsResponse",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({
          assessmentArn: S.String,
          nextToken: S.optional(S.String),
          maxResults: S.optional(S.Number),
        }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/list-app-assessment-resource-drifts" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "ListAppAssessmentResourceDriftsRequest",
      });
  }
}
function __c14(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          logicalResourceId: S.optional(__S(30, __c3, 6)),
          resourceType: S.optional(S.String),
        }),
      ).annotate({ identifier: "ResourceIdentifier" });
    case 1:
      return S.suspend(() =>
        S.Struct({
          appArn: S.optional(S.String),
          appVersion: S.optional(S.String),
          referenceId: S.optional(S.String),
          resourceIdentifier: S.optional(__S(112, __c14, 0)),
          diffType: S.optional(S.String),
        }),
      ).annotate({ identifier: "ResourceDrift" });
    case 2:
      return S.Array(__S(113, __c14, 1));
    case 3:
      return S.suspend(() =>
        S.Struct({ resourceDrifts: __S(114, __c14, 2), nextToken: S.optional(S.String) }),
      ).annotate({
        identifier: "ListAppAssessmentResourceDriftsResponse",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({
          appArn: S.optional(S.String).pipe(T.HttpQuery("appArn")),
          assessmentName: S.optional(S.String).pipe(T.HttpQuery("assessmentName")),
          assessmentStatus: S.optional(__S(35, __c4, 3)).pipe(T.HttpQuery("assessmentStatus")),
          complianceStatus: S.optional(S.String).pipe(T.HttpQuery("complianceStatus")),
          invoker: S.optional(S.String).pipe(T.HttpQuery("invoker")),
          reverseOrder: S.optional(S.Boolean).pipe(T.HttpQuery("reverseOrder")),
          nextToken: S.optional(S.String).pipe(T.HttpQuery("nextToken")),
          maxResults: S.optional(S.Number).pipe(T.HttpQuery("maxResults")),
        }).pipe(
          T.all(
            T.Http({ method: "GET", uri: "/list-app-assessments" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "ListAppAssessmentsRequest",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({
          appArn: S.optional(S.String),
          appVersion: S.optional(S.String),
          assessmentStatus: S.String,
          invoker: S.optional(S.String),
          startTime: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          endTime: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          message: S.optional(S.String),
          assessmentName: S.optional(S.String),
          assessmentArn: S.String,
          complianceStatus: S.optional(S.String),
          cost: S.optional(__S(62, __c7, 6)),
          resiliencyScore: S.optional(S.Number),
          versionName: S.optional(S.String),
          driftStatus: S.optional(S.String),
        }),
      ).annotate({ identifier: "AppAssessmentSummary" });
    case 6:
      return S.Array(__S(117, __c14, 5));
    case 7:
      return S.suspend(() =>
        S.Struct({
          nextToken: S.optional(S.String),
          assessmentSummaries: __S(118, __c14, 6),
        }),
      ).annotate({
        identifier: "ListAppAssessmentsResponse",
      });
  }
}
function __c15(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          nextToken: S.optional(S.String),
          maxResults: S.optional(S.Number),
          assessmentArn: S.String,
        }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/list-app-component-compliances" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "ListAppComponentCompliancesRequest",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({
          cost: S.optional(__S(62, __c7, 6)),
          appComponentName: S.optional(S.String),
          compliance: S.optional(__S(68, __c8, 4)),
          message: S.optional(S.String),
          status: S.optional(S.String),
          resiliencyScore: S.optional(__S(66, __c8, 2)),
        }),
      ).annotate({ identifier: "AppComponentCompliance" });
    case 2:
      return S.Array(__S(121, __c15, 1));
    case 3:
      return S.suspend(() =>
        S.Struct({
          componentCompliances: __S(122, __c15, 2),
          nextToken: S.optional(S.String),
        }),
      ).annotate({
        identifier: "ListAppComponentCompliancesResponse",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({
          assessmentArn: S.String,
          nextToken: S.optional(S.String),
          maxResults: S.optional(S.Number),
        }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/list-app-component-recommendations" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "ListAppComponentRecommendationsRequest",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({
          expectedComplianceStatus: S.String,
          expectedRtoInSecs: S.optional(S.Number),
          expectedRtoDescription: S.optional(S.String),
          expectedRpoInSecs: S.optional(S.Number),
          expectedRpoDescription: S.optional(S.String),
        }),
      ).annotate({
        identifier: "RecommendationDisruptionCompliance",
      });
    case 6:
      return S.Record(S.String, /*@__PURE__*/ __S(125, __c15, 5).pipe(S.optional));
    case 7:
      return S.suspend(() =>
        S.Struct({
          cost: S.optional(__S(62, __c7, 6)),
          appComponentName: S.optional(S.String),
          compliance: S.optional(__S(68, __c8, 4)),
          recommendationCompliance: S.optional(__S(126, __c15, 6)),
          optimizationType: S.String,
          name: S.String,
          description: S.optional(S.String),
          suggestedChanges: S.optional(__S(19, __c2, 3)),
          haArchitecture: S.optional(S.String),
          referenceId: S.String,
        }),
      ).annotate({ identifier: "ConfigRecommendation" });
  }
}
function __c16(j: number): any {
  switch (j) {
    case 0:
      return S.Array(__S(127, __c15, 7));
    case 1:
      return S.suspend(() =>
        S.Struct({
          appComponentName: S.String,
          recommendationStatus: S.String,
          configRecommendations: __S(128, __c16, 0),
        }),
      ).annotate({ identifier: "ComponentRecommendation" });
    case 2:
      return S.Array(__S(129, __c16, 1));
    case 3:
      return S.suspend(() =>
        S.Struct({
          componentRecommendations: __S(130, __c16, 2),
          nextToken: S.optional(S.String),
        }),
      ).annotate({
        identifier: "ListAppComponentRecommendationsResponse",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({
          appArn: S.String,
          appVersion: S.String,
          nextToken: S.optional(S.String),
          maxResults: S.optional(S.Number),
        }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/list-app-input-sources" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "ListAppInputSourcesRequest",
      });
    case 5:
      return S.Array(__S(52, __c6, 4));
    case 6:
      return S.suspend(() =>
        S.Struct({ appInputSources: __S(133, __c16, 5), nextToken: S.optional(S.String) }),
      ).annotate({
        identifier: "ListAppInputSourcesResponse",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({
          nextToken: S.optional(S.String).pipe(T.HttpQuery("nextToken")),
          maxResults: S.optional(S.Number).pipe(T.HttpQuery("maxResults")),
          name: S.optional(S.String).pipe(T.HttpQuery("name")),
          appArn: S.optional(S.String).pipe(T.HttpQuery("appArn")),
          fromLastAssessmentTime: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))).pipe(
            T.HttpQuery("fromLastAssessmentTime"),
          ),
          toLastAssessmentTime: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))).pipe(
            T.HttpQuery("toLastAssessmentTime"),
          ),
          reverseOrder: S.optional(S.Boolean).pipe(T.HttpQuery("reverseOrder")),
          awsApplicationArn: S.optional(S.String).pipe(T.HttpQuery("awsApplicationArn")),
        }).pipe(T.all(T.Http({ method: "GET", uri: "/list-apps" }), svc, auth, proto, ver, rules)),
      ).annotate({ identifier: "ListAppsRequest" });
  }
}
function __c17(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          appArn: S.String,
          name: S.String,
          description: S.optional(S.String),
          creationTime: S.Date.pipe(T.TimestampFormat("epoch-seconds")),
          complianceStatus: S.optional(S.String),
          resiliencyScore: S.optional(S.Number),
          assessmentSchedule: S.optional(S.String),
          status: S.optional(S.String),
          driftStatus: S.optional(S.String),
          lastAppComplianceEvaluationTime: S.optional(
            S.Date.pipe(T.TimestampFormat("epoch-seconds")),
          ),
          rtoInSecs: S.optional(S.Number),
          rpoInSecs: S.optional(S.Number),
          awsApplicationArn: S.optional(S.String),
        }),
      ).annotate({ identifier: "AppSummary" });
    case 1:
      return S.Array(__S(136, __c17, 0));
    case 2:
      return S.suspend(() =>
        S.Struct({ appSummaries: __S(137, __c17, 1), nextToken: S.optional(S.String) }),
      ).annotate({ identifier: "ListAppsResponse" });
    case 3:
      return S.suspend(() =>
        S.Struct({
          appArn: S.String,
          appVersion: S.String,
          nextToken: S.optional(S.String),
          maxResults: S.optional(S.Number),
        }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/list-app-version-app-components" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "ListAppVersionAppComponentsRequest",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({
          appArn: S.String,
          appVersion: S.String,
          appComponents: S.optional(__S(32, __c4, 0)),
          nextToken: S.optional(S.String),
        }),
      ).annotate({
        identifier: "ListAppVersionAppComponentsResponse",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({
          appArn: S.String,
          appVersion: S.String,
          nextToken: S.optional(S.String),
          maxResults: S.optional(S.Number),
        }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/list-app-version-resource-mappings" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "ListAppVersionResourceMappingsRequest",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({ resourceMappings: __S(8, __c1, 0), nextToken: S.optional(S.String) }),
      ).annotate({
        identifier: "ListAppVersionResourceMappingsResponse",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({
          appArn: S.String,
          appVersion: S.String,
          resolutionId: S.optional(S.String),
          nextToken: S.optional(S.String),
          maxResults: S.optional(S.Number),
        }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/list-app-version-resources" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "ListAppVersionResourcesRequest",
      });
  }
}
function __c18(j: number): any {
  switch (j) {
    case 0:
      return S.Array(__S(33, __c4, 1));
    case 1:
      return S.suspend(() =>
        S.Struct({
          physicalResources: __S(144, __c18, 0),
          resolutionId: S.String,
          nextToken: S.optional(S.String),
        }),
      ).annotate({
        identifier: "ListAppVersionResourcesResponse",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({
          appArn: S.String,
          nextToken: S.optional(S.String),
          maxResults: S.optional(S.Number),
          startTime: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          endTime: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
        }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/list-app-versions" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "ListAppVersionsRequest" });
    case 3:
      return S.suspend(() =>
        S.Struct({
          appVersion: S.String,
          identifier: S.optional(S.Number),
          creationTime: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          versionName: S.optional(S.String),
        }),
      ).annotate({ identifier: "AppVersionSummary" });
    case 4:
      return S.Array(__S(147, __c18, 3));
    case 5:
      return S.suspend(() =>
        S.Struct({ appVersions: __S(148, __c18, 4), nextToken: S.optional(S.String) }),
      ).annotate({ identifier: "ListAppVersionsResponse" });
    case 6:
      return S.suspend(() =>
        S.Struct({ name: S.String, aggregation: S.optional(S.String) }),
      ).annotate({ identifier: "Field" });
    case 7:
      return S.Array(__S(150, __c18, 6));
  }
}
function __c19(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({ field: S.String, operator: S.String, value: S.optional(S.String) }),
      ).annotate({ identifier: "Condition" });
    case 1:
      return S.Array(__S(152, __c19, 0));
    case 2:
      return S.suspend(() =>
        S.Struct({ field: S.String, ascending: S.optional(S.Boolean) }),
      ).annotate({ identifier: "Sort" });
    case 3:
      return S.Array(__S(154, __c19, 2));
    case 4:
      return S.suspend(() =>
        S.Struct({
          nextToken: S.optional(S.String),
          maxResults: S.optional(S.Number),
          fields: S.optional(__S(151, __c18, 7)),
          dataSource: S.optional(S.String),
          conditions: S.optional(__S(153, __c19, 1)),
          sorts: S.optional(__S(155, __c19, 3)),
        }).pipe(
          T.all(T.Http({ method: "POST", uri: "/list-metrics" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({ identifier: "ListMetricsRequest" });
    case 5:
      return S.Array(__S(19, __c2, 3));
    case 6:
      return S.suspend(() =>
        S.Struct({ rows: __S(157, __c19, 5), nextToken: S.optional(S.String) }),
      ).annotate({ identifier: "ListMetricsResponse" });
    case 7:
      return S.suspend(() =>
        S.Struct({
          assessmentArn: S.optional(S.String).pipe(T.HttpQuery("assessmentArn")),
          reverseOrder: S.optional(S.Boolean).pipe(T.HttpQuery("reverseOrder")),
          status: S.optional(__S(35, __c4, 3)).pipe(T.HttpQuery("status")),
          recommendationTemplateArn: S.optional(S.String).pipe(
            T.HttpQuery("recommendationTemplateArn"),
          ),
          name: S.optional(S.String).pipe(T.HttpQuery("name")),
          nextToken: S.optional(S.String).pipe(T.HttpQuery("nextToken")),
          maxResults: S.optional(S.Number).pipe(T.HttpQuery("maxResults")),
        }).pipe(
          T.all(
            T.Http({ method: "GET", uri: "/list-recommendation-templates" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "ListRecommendationTemplatesRequest",
      });
  }
}
function __c20(j: number): any {
  switch (j) {
    case 0:
      return S.Array(__S(38, __c4, 6));
    case 1:
      return S.suspend(() =>
        S.Struct({
          nextToken: S.optional(S.String),
          recommendationTemplates: S.optional(__S(160, __c20, 0)),
        }),
      ).annotate({
        identifier: "ListRecommendationTemplatesResponse",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({
          policyName: S.optional(S.String).pipe(T.HttpQuery("policyName")),
          nextToken: S.optional(S.String).pipe(T.HttpQuery("nextToken")),
          maxResults: S.optional(S.Number).pipe(T.HttpQuery("maxResults")),
        }).pipe(
          T.all(
            T.Http({ method: "GET", uri: "/list-resiliency-policies" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "ListResiliencyPoliciesRequest",
      });
    case 3:
      return S.Array(__S(43, __c5, 3));
    case 4:
      return S.suspend(() =>
        S.Struct({ resiliencyPolicies: __S(163, __c20, 3), nextToken: S.optional(S.String) }),
      ).annotate({
        identifier: "ListResiliencyPoliciesResponse",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({
          appArn: S.optional(S.String).pipe(T.HttpQuery("appArn")),
          nextToken: S.optional(S.String).pipe(T.HttpQuery("nextToken")),
          maxResults: S.optional(S.Number).pipe(T.HttpQuery("maxResults")),
        }).pipe(
          T.all(
            T.Http({ method: "GET", uri: "/list-resource-grouping-recommendations" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "ListResourceGroupingRecommendationsRequest",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({
          appComponentId: S.String,
          appComponentType: S.String,
          appComponentName: S.String,
        }),
      ).annotate({ identifier: "GroupingAppComponent" });
    case 7:
      return S.suspend(() =>
        S.Struct({
          resourceName: S.String,
          resourceType: S.String,
          physicalResourceId: __S(6, __c0, 6),
          logicalResourceId: __S(30, __c3, 6),
          sourceAppComponentIds: __S(19, __c2, 3),
        }),
      ).annotate({ identifier: "GroupingResource" });
  }
}
function __c21(j: number): any {
  switch (j) {
    case 0:
      return S.Array(__S(167, __c20, 7));
    case 1:
      return S.suspend(() =>
        S.Struct({
          groupingRecommendationId: S.String,
          groupingAppComponent: __S(166, __c20, 6),
          resources: __S(168, __c21, 0),
          score: S.Number,
          recommendationReasons: __S(19, __c2, 3),
          status: S.String,
          confidenceLevel: S.String,
          creationTime: S.Date.pipe(T.TimestampFormat("epoch-seconds")),
          rejectionReason: S.optional(S.String),
        }),
      ).annotate({ identifier: "GroupingRecommendation" });
    case 2:
      return S.Array(__S(169, __c21, 1));
    case 3:
      return S.suspend(() =>
        S.Struct({
          groupingRecommendations: __S(170, __c21, 2),
          nextToken: S.optional(S.String),
        }),
      ).annotate({
        identifier: "ListResourceGroupingRecommendationsResponse",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({
          nextToken: S.optional(S.String),
          maxResults: S.optional(S.Number),
          assessmentArn: S.String,
        }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/list-sop-recommendations" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "ListSopRecommendationsRequest",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({
          serviceType: S.String,
          appComponentName: S.optional(S.String),
          description: S.optional(S.String),
          recommendationId: S.String,
          name: S.optional(S.String),
          items: S.optional(__S(103, __c12, 7)),
          referenceId: S.String,
          prerequisite: S.optional(S.String),
          recommendationStatus: S.optional(S.String),
        }),
      ).annotate({ identifier: "SopRecommendation" });
    case 6:
      return S.Array(__S(173, __c21, 5));
    case 7:
      return S.suspend(() =>
        S.Struct({ nextToken: S.optional(S.String), sopRecommendations: __S(174, __c21, 6) }),
      ).annotate({
        identifier: "ListSopRecommendationsResponse",
      });
  }
}
function __c22(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          nextToken: S.optional(S.String).pipe(T.HttpQuery("nextToken")),
          maxResults: S.optional(S.Number).pipe(T.HttpQuery("maxResults")),
        }).pipe(
          T.all(
            T.Http({ method: "GET", uri: "/list-suggested-resiliency-policies" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "ListSuggestedResiliencyPoliciesRequest",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({ resourceArn: S.String.pipe(T.HttpLabel("resourceArn")) }).pipe(
          T.all(
            T.Http({ method: "GET", uri: "/tags/{resourceArn}" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "ListTagsForResourceRequest",
      });
    case 2:
      return S.suspend(() => S.Struct({ tags: S.optional(__S(18, __c2, 2)) })).annotate({
        identifier: "ListTagsForResourceResponse",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({
          nextToken: S.optional(S.String),
          maxResults: S.optional(S.Number),
          assessmentArn: S.String,
        }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/list-test-recommendations" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "ListTestRecommendationsRequest",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({
          recommendationId: S.optional(S.String),
          referenceId: S.String,
          appComponentId: S.optional(S.String),
          appComponentName: S.optional(S.String),
          name: S.optional(S.String),
          intent: S.optional(S.String),
          risk: S.optional(S.String),
          type: S.optional(S.String),
          description: S.optional(S.String),
          items: S.optional(__S(103, __c12, 7)),
          prerequisite: S.optional(S.String),
          dependsOnAlarms: S.optional(__S(19, __c2, 3)),
          recommendationStatus: S.optional(S.String),
        }),
      ).annotate({ identifier: "TestRecommendation" });
    case 5:
      return S.Array(__S(180, __c22, 4));
    case 6:
      return S.suspend(() =>
        S.Struct({ nextToken: S.optional(S.String), testRecommendations: __S(181, __c22, 5) }),
      ).annotate({
        identifier: "ListTestRecommendationsResponse",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({
          appArn: S.String,
          appVersion: S.String,
          resolutionId: S.optional(S.String),
          nextToken: S.optional(S.String),
          maxResults: S.optional(S.Number),
        }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/list-unsupported-app-version-resources" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "ListUnsupportedAppVersionResourcesRequest",
      });
  }
}
function __c23(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          logicalResourceId: __S(30, __c3, 6),
          physicalResourceId: __S(6, __c0, 6),
          resourceType: S.String,
          unsupportedResourceStatus: S.optional(S.String),
        }),
      ).annotate({ identifier: "UnsupportedResource" });
    case 1:
      return S.Array(__S(184, __c23, 0));
    case 2:
      return S.suspend(() =>
        S.Struct({
          unsupportedResources: __S(185, __c23, 1),
          resolutionId: S.String,
          nextToken: S.optional(S.String),
        }),
      ).annotate({
        identifier: "ListUnsupportedAppVersionResourcesResponse",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({ appArn: S.String, versionName: S.optional(S.String) }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/publish-app-version" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "PublishAppVersionRequest" });
    case 4:
      return S.suspend(() =>
        S.Struct({
          appArn: S.String,
          appVersion: S.optional(S.String),
          identifier: S.optional(S.Number),
          versionName: S.optional(S.String),
        }),
      ).annotate({
        identifier: "PublishAppVersionResponse",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({ appArn: S.String, appTemplateBody: S.String }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/put-draft-app-version-template" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "PutDraftAppVersionTemplateRequest",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({ appArn: S.optional(S.String), appVersion: S.optional(S.String) }),
      ).annotate({
        identifier: "PutDraftAppVersionTemplateResponse",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({
          groupingRecommendationId: S.String,
          rejectionReason: S.optional(S.String),
        }),
      ).annotate({
        identifier: "RejectGroupingRecommendationEntry",
      });
  }
}
function __c24(j: number): any {
  switch (j) {
    case 0:
      return S.Array(__S(191, __c23, 7));
    case 1:
      return S.suspend(() =>
        S.Struct({ appArn: S.String, entries: __S(192, __c24, 0) }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/reject-resource-grouping-recommendations" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "RejectResourceGroupingRecommendationsRequest",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({
          appArn: S.String,
          resourceNames: S.optional(__S(19, __c2, 3)),
          logicalStackNames: S.optional(__S(19, __c2, 3)),
          appRegistryAppNames: S.optional(__S(19, __c2, 3)),
          resourceGroupNames: S.optional(__S(19, __c2, 3)),
          terraformSourceNames: S.optional(__S(19, __c2, 3)),
          eksSourceNames: S.optional(__S(19, __c2, 3)),
        }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/remove-draft-app-version-resource-mappings" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "RemoveDraftAppVersionResourceMappingsRequest",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({ appArn: S.String, appVersion: S.String }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/resolve-app-version-resources" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "ResolveAppVersionResourcesRequest",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({
          appArn: S.String,
          appVersion: S.String,
          resolutionId: S.String,
          status: S.String,
        }),
      ).annotate({
        identifier: "ResolveAppVersionResourcesResponse",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({
          appArn: S.String,
          appVersion: S.String,
          assessmentName: S.String,
          clientToken: S.optional(S.String).pipe(T.IdempotencyToken()),
          tags: S.optional(__S(18, __c2, 2)),
        }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/start-app-assessment" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "StartAppAssessmentRequest",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({
          bucketName: S.optional(S.String),
          clientToken: S.optional(S.String).pipe(T.IdempotencyToken()),
        }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/start-metrics-export" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "StartMetricsExportRequest",
      });
    case 7:
      return S.suspend(() => S.Struct({ metricsExportId: S.String, status: S.String })).annotate({
        identifier: "StartMetricsExportResponse",
      });
  }
}
function __c25(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({ appArn: S.String }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/start-resource-grouping-recommendation-task" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "StartResourceGroupingRecommendationTaskRequest",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({
          appArn: S.String,
          groupingId: S.String,
          status: S.String,
          errorMessage: S.optional(S.String),
        }),
      ).annotate({
        identifier: "StartResourceGroupingRecommendationTaskResponse",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({
          resourceArn: S.String.pipe(T.HttpLabel("resourceArn")),
          tags: __S(18, __c2, 2),
        }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/tags/{resourceArn}" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "TagResourceRequest" });
    case 3:
      return S.suspend(() => S.Struct({})).annotate({
        identifier: "TagResourceResponse",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({
          resourceArn: S.String.pipe(T.HttpLabel("resourceArn")),
          tagKeys: __S(19, __c2, 3).pipe(T.HttpQuery("tagKeys")),
        }).pipe(
          T.all(
            T.Http({ method: "DELETE", uri: "/tags/{resourceArn}" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "UntagResourceRequest" });
    case 5:
      return S.suspend(() =>
        S.Struct({
          appArn: S.String,
          description: S.optional(S.String),
          policyArn: S.optional(S.String),
          clearResiliencyPolicyArn: S.optional(S.Boolean),
          assessmentSchedule: S.optional(S.String),
          permissionModel: S.optional(__S(20, __c2, 4)),
          eventSubscriptions: S.optional(__S(22, __c2, 6)),
        }).pipe(
          T.all(T.Http({ method: "POST", uri: "/update-app" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({ identifier: "UpdateAppRequest" });
    case 6:
      return S.suspend(() =>
        S.Struct({ appArn: S.String, additionalInfo: S.optional(__S(26, __c3, 2)) }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/update-app-version" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "UpdateAppVersionRequest" });
    case 7:
      return S.suspend(() =>
        S.Struct({
          appArn: S.String,
          appVersion: S.String,
          additionalInfo: S.optional(__S(26, __c3, 2)),
        }),
      ).annotate({ identifier: "UpdateAppVersionResponse" });
  }
}
function __c26(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          appArn: S.String,
          id: S.String,
          name: S.optional(S.String),
          type: S.optional(S.String),
          additionalInfo: S.optional(__S(26, __c3, 2)),
        }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/update-app-version-app-component" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "UpdateAppVersionAppComponentRequest",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({
          appArn: S.String,
          resourceName: S.optional(S.String),
          logicalResourceId: S.optional(__S(30, __c3, 6)),
          physicalResourceId: S.optional(S.String),
          awsRegion: S.optional(S.String),
          awsAccountId: S.optional(S.String),
          resourceType: S.optional(S.String),
          appComponents: S.optional(__S(19, __c2, 3)),
          additionalInfo: S.optional(__S(26, __c3, 2)),
          excluded: S.optional(S.Boolean),
        }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/update-app-version-resource" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "UpdateAppVersionResourceRequest",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({
          policyArn: S.String,
          policyName: S.optional(S.String),
          policyDescription: S.optional(S.String),
          dataLocationConstraint: S.optional(S.String),
          tier: S.optional(S.String),
          policy: S.optional(__S(41, __c5, 1)),
        }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/update-resiliency-policy" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "UpdateResiliencyPolicyRequest",
      });
  }
}

// Schema table: entry i is schema j of builder f, made on first reach.
function __S(i: number, f: (j: number) => unknown, j: number): any {
  return (__s[i] ??= __L.at(f, j));
}
