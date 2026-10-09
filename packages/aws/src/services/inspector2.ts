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
const svc = /*@__PURE__*/ T.AwsApiService({ sdkId: "Inspector2", serviceShapeName: "Inspector2" });
const auth = /*@__PURE__*/ T.AwsAuthSigv4({ name: "inspector2" });
const ver = /*@__PURE__*/ T.ServiceVersion("2020-06-08");
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
              `https://inspector2-fips.${Region}.${_.getAttr(PartitionResult, "dualStackDnsSuffix")}`,
            );
          }
          return err(
            "FIPS and DualStack are enabled, but this partition does not support one or both",
          );
        }
        if (UseFIPS === true) {
          if (_.getAttr(PartitionResult, "supportsFIPS") === true) {
            return e(
              `https://inspector2-fips.${Region}.${_.getAttr(PartitionResult, "dnsSuffix")}`,
            );
          }
          return err("FIPS is enabled but this partition does not support FIPS");
        }
        if (UseDualStack === true) {
          if (true === _.getAttr(PartitionResult, "supportsDualStack")) {
            return e(
              `https://inspector2.${Region}.${_.getAttr(PartitionResult, "dualStackDnsSuffix")}`,
            );
          }
          return err("DualStack is enabled but this partition does not support DualStack");
        }
        return e(`https://inspector2.${Region}.${_.getAttr(PartitionResult, "dnsSuffix")}`);
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
export class BadRequestException
  extends /*@__PURE__*/ S.TaggedError<BadRequestException>()(
    "BadRequestException",
    { message: /*@__PURE__*/ S.String.pipe(/*@__PURE__*/ T.ErrorMessage()) },
    /*@__PURE__*/ T.HttpError(400),
  ).pipe(C.withBadRequestError) {}
export class ConflictException
  extends /*@__PURE__*/ S.TaggedError<ConflictException>()(
    "ConflictException",
    {
      message: /*@__PURE__*/ S.String.pipe(/*@__PURE__*/ T.ErrorMessage()),
      resourceId: S.String,
      resourceType: S.String,
    },
    /*@__PURE__*/ T.HttpError(409),
  ).pipe(C.withConflictError) {}
export class InternalServerException
  extends /*@__PURE__*/ S.TaggedError<InternalServerException>()(
    "InternalServerException",
    {
      message: /*@__PURE__*/ S.String.pipe(/*@__PURE__*/ T.ErrorMessage()),
      retryAfterSeconds: /*@__PURE__*/ S.optional(S.Number).pipe(
        /*@__PURE__*/ T.HttpHeader("Retry-After"),
      ),
    },
    /*@__PURE__*/ T.all(/*@__PURE__*/ T.HttpError(500), /*@__PURE__*/ T.Retryable()),
  ).pipe(C.withServerError, C.withRetryableError) {}
export class ResourceNotFoundException
  extends /*@__PURE__*/ S.TaggedError<ResourceNotFoundException>()(
    "ResourceNotFoundException",
    { message: /*@__PURE__*/ S.String.pipe(/*@__PURE__*/ T.ErrorMessage()) },
    /*@__PURE__*/ T.HttpError(404),
  ).pipe(C.withBadRequestError) {}
export class ServiceQuotaExceededException
  extends /*@__PURE__*/ S.TaggedError<ServiceQuotaExceededException>()(
    "ServiceQuotaExceededException",
    { message: /*@__PURE__*/ S.String.pipe(/*@__PURE__*/ T.ErrorMessage()), resourceId: S.String },
    /*@__PURE__*/ T.HttpError(402),
  ).pipe(C.withQuotaError) {}
export class ThrottlingException
  extends /*@__PURE__*/ S.TaggedError<ThrottlingException>()(
    "ThrottlingException",
    {
      message: /*@__PURE__*/ S.String.pipe(/*@__PURE__*/ T.ErrorMessage()),
      retryAfterSeconds: /*@__PURE__*/ S.optional(S.Number).pipe(
        /*@__PURE__*/ T.HttpHeader("Retry-After"),
      ),
    },
    /*@__PURE__*/ T.all(
      /*@__PURE__*/ T.HttpError(429),
      /*@__PURE__*/ T.Retryable({ throttling: true }),
    ),
  ).pipe(C.withThrottlingError, C.withRetryableError) {}
export class ValidationException
  extends /*@__PURE__*/ S.TaggedError<ValidationException>()(
    "ValidationException",
    {
      message: /*@__PURE__*/ S.String.pipe(/*@__PURE__*/ T.ErrorMessage()),
      reason: S.String,
      fields: /*@__PURE__*/ S.optional(
        /*@__PURE__*/ S.suspend(() => __S(404, __c50, 4)).annotate({
          identifier: "ValidationExceptionFields",
        }),
      ),
    },
    /*@__PURE__*/ T.HttpError(400),
  ).pipe(C.withBadRequestError) {}
export type AccountId = string;
export interface AssociateMemberRequest {
  accountId: string;
}
export interface AssociateMemberResponse {
  accountId: string;
}
export type ScanConfigurationArn = string;
export type ProjectId = string;
export type CodeSecurityResource = { projectId: string };
export interface AssociateConfigurationRequest {
  scanConfigurationArn: string;
  resource: CodeSecurityResource;
}
export type AssociateConfigurationRequestList = AssociateConfigurationRequest[];
export interface BatchAssociateCodeSecurityScanConfigurationRequest {
  associateConfigurationRequests: AssociateConfigurationRequest[];
}
export type AssociationResultStatusCode =
  | "INTERNAL_ERROR"
  | "ACCESS_DENIED"
  | "SCAN_CONFIGURATION_NOT_FOUND"
  | "INVALID_INPUT"
  | "RESOURCE_NOT_FOUND"
  | "QUOTA_EXCEEDED"
  | (string & {});
export type AssociationResultStatusMessage = string;
export interface FailedAssociationResult {
  scanConfigurationArn?: string;
  resource?: CodeSecurityResource;
  statusCode?: AssociationResultStatusCode;
  statusMessage?: string;
}
export type FailedAssociationResultList = FailedAssociationResult[];
export interface SuccessfulAssociationResult {
  scanConfigurationArn?: string;
  resource?: CodeSecurityResource;
}
export type SuccessfulAssociationResultList = SuccessfulAssociationResult[];
export interface BatchAssociateCodeSecurityScanConfigurationResponse {
  failedAssociations?: FailedAssociationResult[];
  successfulAssociations?: SuccessfulAssociationResult[];
}
export interface DisassociateConfigurationRequest {
  scanConfigurationArn: string;
  resource: CodeSecurityResource;
}
export type DisassociateConfigurationRequestList = DisassociateConfigurationRequest[];
export interface BatchDisassociateCodeSecurityScanConfigurationRequest {
  disassociateConfigurationRequests: DisassociateConfigurationRequest[];
}
export interface BatchDisassociateCodeSecurityScanConfigurationResponse {
  failedAssociations?: FailedAssociationResult[];
  successfulAssociations?: SuccessfulAssociationResult[];
}
export type AccountIdSet = string[];
export interface BatchGetAccountStatusRequest {
  accountIds?: string[];
}
export type Status = string;
export type ErrorCode = string;
export type NonEmptyString = string;
export interface State {
  status: string;
  errorCode?: string;
  errorMessage?: string;
}
export interface ResourceState {
  ec2: State;
  ecr: State;
  lambda?: State;
  lambdaCode?: State;
  codeRepository?: State;
}
export interface AccountState {
  accountId: string;
  state: State;
  resourceState: ResourceState;
}
export type AccountStateList = AccountState[];
export interface ResourceStatus {
  ec2?: string;
  ecr?: string;
  lambda?: string;
  lambdaCode?: string;
  codeRepository?: string;
}
export interface FailedAccount {
  accountId: string;
  status?: string;
  resourceStatus?: ResourceStatus;
  errorCode?: string;
  errorMessage?: string;
}
export type FailedAccountList = FailedAccount[];
export interface BatchGetAccountStatusResponse {
  accounts: AccountState[];
  failedAccounts?: FailedAccount[];
}
export type FindingArn = string;
export type FindingArns = string[];
export interface BatchGetCodeSnippetRequest {
  findingArns: string[];
}
export interface CodeLine {
  content: string;
  lineNumber: number;
}
export type CodeLineList = CodeLine[];
export interface SuggestedFix {
  description?: string;
  code?: string;
}
export type SuggestedFixes = SuggestedFix[];
export interface CodeSnippetResult {
  findingArn?: string;
  startLine?: number;
  endLine?: number;
  codeSnippet?: CodeLine[];
  suggestedFixes?: SuggestedFix[];
}
export type CodeSnippetResultList = CodeSnippetResult[];
export type CodeSnippetErrorCode = string;
export interface CodeSnippetError {
  findingArn: string;
  errorCode: string;
  errorMessage: string;
}
export type CodeSnippetErrorList = CodeSnippetError[];
export interface BatchGetCodeSnippetResponse {
  codeSnippetResults?: CodeSnippetResult[];
  errors?: CodeSnippetError[];
}
export type FindingArnList = string[];
export interface BatchGetFindingDetailsRequest {
  findingArns: string[];
}
export type CisaDateAdded = Date;
export type CisaDateDue = Date;
export type CisaAction = string;
export interface CisaData {
  dateAdded?: Date;
  dateDue?: Date;
  action?: string;
}
export type RiskScore = number;
export type EvidenceRule = string;
export type EvidenceDetail = string;
export type EvidenceSeverity = string;
export interface Evidence {
  evidenceRule?: string;
  evidenceDetail?: string;
  severity?: string;
}
export type EvidenceList = Evidence[];
export type Ttp = string;
export type Ttps = string[];
export type Tool = string;
export type Tools = string[];
export type LastSeen = Date;
export type FirstSeen = Date;
export interface ExploitObserved {
  lastSeen?: Date;
  firstSeen?: Date;
}
export type VulnerabilityReferenceUrl = string;
export type VulnerabilityReferenceUrls = string[];
export type Cwe = string;
export type Cwes = string[];
export interface FindingDetail {
  findingArn?: string;
  cisaData?: CisaData;
  riskScore?: number;
  evidences?: Evidence[];
  ttps?: string[];
  tools?: string[];
  exploitObserved?: ExploitObserved;
  referenceUrls?: string[];
  cwes?: string[];
  epssScore?: number;
}
export type FindingDetails = FindingDetail[];
export type FindingDetailsErrorCode = string;
export interface FindingDetailsError {
  findingArn: string;
  errorCode: string;
  errorMessage: string;
}
export type FindingDetailsErrorList = FindingDetailsError[];
export interface BatchGetFindingDetailsResponse {
  findingDetails?: FindingDetail[];
  errors?: FindingDetailsError[];
}
export type MeteringAccountId = string;
export type MeteringAccountIdList = string[];
export interface BatchGetFreeTrialInfoRequest {
  accountIds: string[];
}
export type FreeTrialType = string;
export type FreeTrialStatus = string;
export type CloudProvider = string;
export interface FreeTrialInfo {
  type: string;
  start: Date;
  end: Date;
  status: string;
  cloudProvider?: string;
}
export type FreeTrialInfoList = FreeTrialInfo[];
export interface FreeTrialAccountInfo {
  accountId: string;
  freeTrialInfo: FreeTrialInfo[];
}
export type FreeTrialAccountInfoList = FreeTrialAccountInfo[];
export type FreeTrialInfoErrorCode = string;
export interface FreeTrialInfoError {
  accountId: string;
  code: string;
  message: string;
}
export type FreeTrialInfoErrorList = FreeTrialInfoError[];
export interface BatchGetFreeTrialInfoResponse {
  accounts: FreeTrialAccountInfo[];
  failedAccounts: FreeTrialInfoError[];
}
export interface BatchGetMemberEc2DeepInspectionStatusRequest {
  accountIds?: string[];
}
export type Ec2DeepInspectionStatus = string;
export interface MemberAccountEc2DeepInspectionStatusState {
  accountId: string;
  status?: string;
  errorMessage?: string;
}
export type MemberAccountEc2DeepInspectionStatusStateList =
  MemberAccountEc2DeepInspectionStatusState[];
export interface FailedMemberAccountEc2DeepInspectionStatusState {
  accountId: string;
  ec2ScanStatus?: string;
  errorMessage?: string;
}
export type FailedMemberAccountEc2DeepInspectionStatusStateList =
  FailedMemberAccountEc2DeepInspectionStatusState[];
export interface BatchGetMemberEc2DeepInspectionStatusResponse {
  accountIds?: MemberAccountEc2DeepInspectionStatusState[];
  failedAccountIds?: FailedMemberAccountEc2DeepInspectionStatusState[];
}
export interface MemberAccountEc2DeepInspectionStatus {
  accountId: string;
  activateDeepInspection: boolean;
}
export type MemberAccountEc2DeepInspectionStatusList = MemberAccountEc2DeepInspectionStatus[];
export interface BatchUpdateMemberEc2DeepInspectionStatusRequest {
  accountIds: MemberAccountEc2DeepInspectionStatus[];
}
export interface BatchUpdateMemberEc2DeepInspectionStatusResponse {
  accountIds?: MemberAccountEc2DeepInspectionStatusState[];
  failedAccountIds?: FailedMemberAccountEc2DeepInspectionStatusState[];
}
export type ReportId = string;
export interface CancelFindingsReportRequest {
  reportId: string;
}
export interface CancelFindingsReportResponse {
  reportId: string;
}
export interface CancelSbomExportRequest {
  reportId: string;
}
export interface CancelSbomExportResponse {
  reportId?: string;
}
export type CisScanName = string;
export type CisSecurityLevel = "LEVEL_1" | "LEVEL_2" | (string & {});
export interface OneTimeSchedule {}
export type TimeOfDay = string;
export type Timezone = string;
export interface Time {
  timeOfDay: string;
  timezone: string;
}
export interface DailySchedule {
  startTime: Time;
}
export type Day = "SUN" | "MON" | "TUE" | "WED" | "THU" | "FRI" | "SAT" | (string & {});
export type DaysList = Day[];
export interface WeeklySchedule {
  startTime: Time;
  days: Day[];
}
export interface MonthlySchedule {
  startTime: Time;
  day: Day;
}
export type Schedule =
  | { oneTime: OneTimeSchedule; daily?: never; weekly?: never; monthly?: never }
  | { oneTime?: never; daily: DailySchedule; weekly?: never; monthly?: never }
  | { oneTime?: never; daily?: never; weekly: WeeklySchedule; monthly?: never }
  | { oneTime?: never; daily?: never; weekly?: never; monthly: MonthlySchedule };
export type TargetAccount = string;
export type TargetAccountList = string[];
export type TargetResourceTagsKey = string;
export type TargetResourceTagsValue = string;
export type TagValueList = string[];
export type TargetResourceTags = { [key: string]: string[] | undefined };
export interface CreateCisTargets {
  accountIds: string[];
  targetResourceTags: { [key: string]: string[] | undefined };
}
export type MapKey = string;
export type MapValue = string;
export type CisTagMap = { [key: string]: string | undefined };
export interface CreateCisScanConfigurationRequest {
  scanName: string;
  securityLevel: CisSecurityLevel;
  schedule: Schedule;
  targets: CreateCisTargets;
  tags?: { [key: string]: string | undefined };
}
export type CisScanConfigurationArn = string;
export interface CreateCisScanConfigurationResponse {
  scanConfigurationArn?: string;
}
export type IntegrationName = string;
export type IntegrationType = "GITLAB_SELF_MANAGED" | "GITHUB" | (string & {});
export type InstanceUrl = string | redacted.Redacted<string>;
export type GitLabAccessToken = string | redacted.Redacted<string>;
export interface CreateGitLabSelfManagedIntegrationDetail {
  instanceUrl: string | redacted.Redacted<string>;
  accessToken: string | redacted.Redacted<string>;
}
export type CreateIntegrationDetail = {
  gitlabSelfManaged: CreateGitLabSelfManagedIntegrationDetail;
};
export type TagMap = { [key: string]: string | undefined };
export interface CreateCodeSecurityIntegrationRequest {
  name: string;
  type: IntegrationType;
  details?: CreateIntegrationDetail;
  tags?: { [key: string]: string | undefined };
}
export type CodeSecurityIntegrationArn = string;
export type IntegrationStatus =
  | "PENDING"
  | "IN_PROGRESS"
  | "ACTIVE"
  | "INACTIVE"
  | "DISABLING"
  | (string & {});
export type AuthorizationUrl = string | redacted.Redacted<string>;
export interface CreateCodeSecurityIntegrationResponse {
  integrationArn: string;
  status: IntegrationStatus;
  authorizationUrl?: string | redacted.Redacted<string>;
}
export type ScanConfigurationName = string;
export type ConfigurationLevel = "ORGANIZATION" | "ACCOUNT" | (string & {});
export type PeriodicScanFrequency = "WEEKLY" | "MONTHLY" | "NEVER" | (string & {});
export type FrequencyExpression = string;
export interface PeriodicScanConfiguration {
  frequency?: PeriodicScanFrequency;
  frequencyExpression?: string;
}
export type ContinuousIntegrationScanEvent = "PULL_REQUEST" | "PUSH" | (string & {});
export type ContinuousIntegrationScanSupportedEvents = ContinuousIntegrationScanEvent[];
export interface ContinuousIntegrationScanConfiguration {
  supportedEvents: ContinuousIntegrationScanEvent[];
}
export type RuleSetCategory = "SAST" | "IAC" | "SCA" | (string & {});
export type RuleSetCategories = RuleSetCategory[];
export interface CodeSecurityScanConfiguration {
  periodicScanConfiguration?: PeriodicScanConfiguration;
  continuousIntegrationScanConfiguration?: ContinuousIntegrationScanConfiguration;
  ruleSetCategories: RuleSetCategory[];
}
export type ProjectSelectionScope = "ALL" | (string & {});
export interface ScopeSettings {
  projectSelectionScope?: ProjectSelectionScope;
}
export interface CreateCodeSecurityScanConfigurationRequest {
  name: string;
  level: ConfigurationLevel;
  configuration: CodeSecurityScanConfiguration;
  scopeSettings?: ScopeSettings;
  tags?: { [key: string]: string | undefined };
}
export interface CreateCodeSecurityScanConfigurationResponse {
  scanConfigurationArn: string;
}
export type ConnectorName = string;
export type ConnectorCloudProvider = "AZURE" | (string & {});
export type ConnectorDescription = string;
export type AwsConfigConnectorArn = string;
export type ScopeType = "TENANT" | "SUBSCRIPTION" | (string & {});
export type ScopeValue = string;
export type ScopeValueList = string[];
export interface ScopeConfigurationInput {
  scopeType: ScopeType;
  scopeValues?: string[];
}
export interface AzureScopeConfigurationInput {
  vmScanning?: ScopeConfigurationInput;
  containerImageScanning?: ScopeConfigurationInput;
  serverlessScanning?: ScopeConfigurationInput;
}
export type AzureRegion = string;
export type AzureRegionList = string[];
export interface AzureProviderDetailCreate {
  awsConfigConnectorArn: string;
  scopeConfiguration: AzureScopeConfigurationInput;
  azureRegions: string[];
  autoInstallVMScanner?: boolean;
}
export type ProviderDetailCreate = { azure: AzureProviderDetailCreate };
export type ConnectorTagKey = string;
export type ConnectorTagValue = string;
export type ConnectorTagMap = { [key: string]: string | undefined };
export interface CreateConnectorRequest {
  clientToken?: string;
  name: string;
  provider: ConnectorCloudProvider;
  description?: string;
  providerDetail: ProviderDetailCreate;
  tags?: { [key: string]: string | undefined };
}
export type ConnectorArn = string;
export interface CreateConnectorResponse {
  connectorArn: string;
}
export type FilterAction = string;
export type FilterDescription = string;
export type StringComparison = string;
export type StringInput = string;
export interface StringFilter {
  comparison: string;
  value: string;
}
export type StringFilterList = StringFilter[];
export interface DateFilter {
  startInclusive?: Date;
  endInclusive?: Date;
}
export type DateFilterList = DateFilter[];
export interface NumberFilter {
  upperInclusive?: number;
  lowerInclusive?: number;
}
export type NumberFilterList = NumberFilter[];
export type MapComparison = string;
export interface MapFilter {
  comparison: string;
  key: string;
  value?: string;
}
export type MapFilterList = MapFilter[];
export type Port = number;
export interface PortRangeFilter {
  beginInclusive?: number;
  endInclusive?: number;
}
export type PortRangeFilterList = PortRangeFilter[];
export interface PackageFilter {
  name?: StringFilter;
  version?: StringFilter;
  epoch?: NumberFilter;
  release?: StringFilter;
  architecture?: StringFilter;
  sourceLayerHash?: StringFilter;
  sourceLambdaLayerArn?: StringFilter;
  filePath?: StringFilter;
}
export type PackageFilterList = PackageFilter[];
export interface FilterCriteria {
  findingArn?: StringFilter[];
  awsAccountId?: StringFilter[];
  findingType?: StringFilter[];
  severity?: StringFilter[];
  firstObservedAt?: DateFilter[];
  lastObservedAt?: DateFilter[];
  updatedAt?: DateFilter[];
  findingStatus?: StringFilter[];
  title?: StringFilter[];
  inspectorScore?: NumberFilter[];
  resourceType?: StringFilter[];
  resourceId?: StringFilter[];
  resourceTags?: MapFilter[];
  ec2InstanceImageId?: StringFilter[];
  ec2InstanceVpcId?: StringFilter[];
  ec2InstanceSubnetId?: StringFilter[];
  ecrImagePushedAt?: DateFilter[];
  ecrImageArchitecture?: StringFilter[];
  ecrImageRegistry?: StringFilter[];
  ecrImageRepositoryName?: StringFilter[];
  ecrImageTags?: StringFilter[];
  ecrImageHash?: StringFilter[];
  ecrImageLastInUseAt?: DateFilter[];
  ecrImageInUseCount?: NumberFilter[];
  portRange?: PortRangeFilter[];
  networkProtocol?: StringFilter[];
  componentId?: StringFilter[];
  componentType?: StringFilter[];
  vulnerabilityId?: StringFilter[];
  vulnerabilitySource?: StringFilter[];
  vendorSeverity?: StringFilter[];
  vulnerablePackages?: PackageFilter[];
  relatedVulnerabilities?: StringFilter[];
  fixAvailable?: StringFilter[];
  lambdaFunctionName?: StringFilter[];
  lambdaFunctionLayers?: StringFilter[];
  lambdaFunctionRuntime?: StringFilter[];
  lambdaFunctionLastModifiedAt?: DateFilter[];
  lambdaFunctionExecutionRoleArn?: StringFilter[];
  exploitAvailable?: StringFilter[];
  codeVulnerabilityDetectorName?: StringFilter[];
  codeVulnerabilityDetectorTags?: StringFilter[];
  codeVulnerabilityFilePath?: StringFilter[];
  epssScore?: NumberFilter[];
  codeRepositoryProjectName?: StringFilter[];
  codeRepositoryProviderType?: StringFilter[];
  cloudProvider?: StringFilter[];
  cloudProviderRegion?: StringFilter[];
  cloudProviderAccountId?: StringFilter[];
  cloudProviderOrgId?: StringFilter[];
  cloudVmImageReference?: StringFilter[];
  cloudVmNetworkId?: StringFilter[];
  cloudVmSubnetIds?: StringFilter[];
  cloudImageRepositoryName?: StringFilter[];
  cloudImageRegistry?: StringFilter[];
  cloudImageDigest?: StringFilter[];
  cloudImageTags?: StringFilter[];
  cloudImagePushedAt?: DateFilter[];
  cloudImageArchitecture?: StringFilter[];
  cloudImageLastInUseAt?: DateFilter[];
  cloudImageInUseCount?: NumberFilter[];
  cloudServerlessFunctionName?: StringFilter[];
  cloudServerlessFunctionRuntime?: StringFilter[];
  cloudServerlessFunctionLastModifiedAt?: DateFilter[];
  cloudServerlessFunctionExecutionRole?: StringFilter[];
}
export type FilterName = string;
export type FilterReason = string;
export interface CreateFilterRequest {
  action: string;
  description?: string;
  filterCriteria: FilterCriteria;
  name: string;
  tags?: { [key: string]: string | undefined };
  reason?: string;
}
export type FilterArn = string;
export interface CreateFilterResponse {
  arn: string;
}
export type ReportFormat = string;
export interface Destination {
  bucketName: string;
  keyPrefix?: string;
  kmsKeyArn: string;
}
export interface CreateFindingsReportRequest {
  filterCriteria?: FilterCriteria;
  reportFormat: string;
  s3Destination: Destination;
}
export interface CreateFindingsReportResponse {
  reportId?: string;
}
export type ResourceStringComparison = string;
export type ResourceStringInput = string;
export interface ResourceStringFilter {
  comparison: string;
  value: string;
}
export type ResourceStringFilterList = ResourceStringFilter[];
export type ResourceMapComparison = string;
export interface ResourceMapFilter {
  comparison: string;
  key: string;
  value?: string;
}
export type ResourceMapFilterList = ResourceMapFilter[];
export interface ResourceFilterCriteria {
  accountId?: ResourceStringFilter[];
  resourceId?: ResourceStringFilter[];
  resourceType?: ResourceStringFilter[];
  ecrRepositoryName?: ResourceStringFilter[];
  lambdaFunctionName?: ResourceStringFilter[];
  ecrImageTags?: ResourceStringFilter[];
  ec2InstanceTags?: ResourceMapFilter[];
  lambdaFunctionTags?: ResourceMapFilter[];
  cloudProvider?: ResourceStringFilter[];
  cloudProviderAccountId?: ResourceStringFilter[];
  cloudProviderOrgId?: ResourceStringFilter[];
  cloudProviderRegion?: ResourceStringFilter[];
  cloudVmInstanceTags?: ResourceMapFilter[];
  cloudContainerImageTags?: ResourceStringFilter[];
  cloudContainerRepositoryName?: ResourceStringFilter[];
  cloudContainerRegistryName?: ResourceStringFilter[];
  cloudServerlessFunctionName?: ResourceStringFilter[];
  cloudServerlessFunctionRuntime?: ResourceStringFilter[];
  cloudServerlessFunctionTags?: ResourceMapFilter[];
}
export type SbomReportFormat = string;
export interface CreateSbomExportRequest {
  resourceFilterCriteria?: ResourceFilterCriteria;
  reportFormat: string;
  s3Destination: Destination;
}
export interface CreateSbomExportResponse {
  reportId?: string;
}
export interface DeleteCisScanConfigurationRequest {
  scanConfigurationArn: string;
}
export interface DeleteCisScanConfigurationResponse {
  scanConfigurationArn: string;
}
export interface DeleteCodeSecurityIntegrationRequest {
  integrationArn: string;
}
export interface DeleteCodeSecurityIntegrationResponse {
  integrationArn?: string;
}
export interface DeleteCodeSecurityScanConfigurationRequest {
  scanConfigurationArn: string;
}
export interface DeleteCodeSecurityScanConfigurationResponse {
  scanConfigurationArn?: string;
}
export interface DeleteConnectorRequest {
  connectorArn: string;
}
export interface DeleteConnectorResponse {}
export interface DeleteFilterRequest {
  arn: string;
}
export interface DeleteFilterResponse {
  arn: string;
}
export interface DescribeOrganizationConfigurationRequest {}
export interface AutoEnable {
  ec2: boolean;
  ecr: boolean;
  lambda?: boolean;
  lambdaCode?: boolean;
  codeRepository?: boolean;
}
export interface DescribeOrganizationConfigurationResponse {
  autoEnable?: AutoEnable;
  maxAccountLimitReached?: boolean;
}
export type ResourceScanType = string;
export type DisableResourceTypeList = string[];
export interface DisableRequest {
  accountIds?: string[];
  resourceTypes?: string[];
}
export interface Account {
  accountId: string;
  status: string;
  resourceStatus: ResourceStatus;
}
export type AccountList = Account[];
export interface DisableResponse {
  accounts: Account[];
  failedAccounts?: FailedAccount[];
}
export interface DisableDelegatedAdminAccountRequest {
  delegatedAdminAccountId: string;
}
export interface DisableDelegatedAdminAccountResponse {
  delegatedAdminAccountId: string;
}
export interface DisassociateMemberRequest {
  accountId: string;
}
export interface DisassociateMemberResponse {
  accountId: string;
}
export type EnableResourceTypeList = string[];
export type ClientToken = string;
export interface EnableRequest {
  accountIds?: string[];
  resourceTypes: string[];
  clientToken?: string;
}
export interface EnableResponse {
  accounts: Account[];
  failedAccounts?: FailedAccount[];
}
export interface EnableDelegatedAdminAccountRequest {
  delegatedAdminAccountId: string;
  clientToken?: string;
}
export interface EnableDelegatedAdminAccountResponse {
  delegatedAdminAccountId: string;
}
export type CisScanArn = string;
export type ReportTargetAccounts = string[];
export type CisReportFormat = "PDF" | "CSV" | (string & {});
export interface GetCisScanReportRequest {
  scanArn: string;
  targetAccounts?: string[];
  reportFormat?: CisReportFormat;
}
export type CisReportStatus = "SUCCEEDED" | "FAILED" | "IN_PROGRESS" | (string & {});
export interface GetCisScanReportResponse {
  url?: string;
  status?: CisReportStatus;
}
export type ResourceId = string;
export type CisFindingStatusComparison = "EQUALS" | (string & {});
export type CisFindingStatus = "PASSED" | "FAILED" | "SKIPPED" | (string & {});
export interface CisFindingStatusFilter {
  comparison: CisFindingStatusComparison;
  value: CisFindingStatus;
}
export type CisFindingStatusFilterList = CisFindingStatusFilter[];
export type CisStringComparison = "EQUALS" | "PREFIX" | "NOT_EQUALS" | (string & {});
export interface CisStringFilter {
  comparison: CisStringComparison;
  value: string;
}
export type CheckIdFilterList = CisStringFilter[];
export type TitleFilterList = CisStringFilter[];
export type CisSecurityLevelComparison = "EQUALS" | (string & {});
export interface CisSecurityLevelFilter {
  comparison: CisSecurityLevelComparison;
  value: CisSecurityLevel;
}
export type CisSecurityLevelFilterList = CisSecurityLevelFilter[];
export type CisFindingArnFilterList = CisStringFilter[];
export interface CisScanResultDetailsFilterCriteria {
  findingStatusFilters?: CisFindingStatusFilter[];
  checkIdFilters?: CisStringFilter[];
  titleFilters?: CisStringFilter[];
  securityLevelFilters?: CisSecurityLevelFilter[];
  findingArnFilters?: CisStringFilter[];
}
export type CisScanResultDetailsSortBy = "CHECK_ID" | "STATUS" | (string & {});
export type CisSortOrder = "ASC" | "DESC" | (string & {});
export type NextToken = string;
export type GetCisScanResultDetailsMaxResults = number;
export interface GetCisScanResultDetailsRequest {
  scanArn: string;
  targetResourceId: string;
  accountId: string;
  filterCriteria?: CisScanResultDetailsFilterCriteria;
  sortBy?: CisScanResultDetailsSortBy;
  sortOrder?: CisSortOrder;
  nextToken?: string;
  maxResults?: number;
}
export type CisFindingArn = string;
export interface CisScanResultDetails {
  scanArn: string;
  accountId?: string;
  targetResourceId?: string;
  platform?: string;
  status?: CisFindingStatus;
  statusReason?: string;
  checkId?: string;
  title?: string;
  checkDescription?: string;
  remediation?: string;
  level?: CisSecurityLevel;
  findingArn?: string;
}
export type CisScanResultDetailsList = CisScanResultDetails[];
export interface GetCisScanResultDetailsResponse {
  scanResultDetails?: CisScanResultDetails[];
  nextToken?: string;
}
export interface ClusterForImageFilterCriteria {
  resourceId: string;
}
export type GetClustersForImageNextToken = string;
export interface GetClustersForImageRequest {
  filter: ClusterForImageFilterCriteria;
  maxResults?: number;
  nextToken?: string;
}
export interface AwsEcsMetadataDetails {
  detailsGroup: string;
  taskDefinitionArn: string;
}
export interface AwsEksWorkloadInfo {
  name: string;
  type: string;
}
export type AwsEksWorkloadInfoList = AwsEksWorkloadInfo[];
export interface AwsEksMetadataDetails {
  namespace?: string;
  workloadInfoList?: AwsEksWorkloadInfo[];
}
export type ClusterMetadata =
  | { awsEcsMetadataDetails: AwsEcsMetadataDetails; awsEksMetadataDetails?: never }
  | { awsEcsMetadataDetails?: never; awsEksMetadataDetails: AwsEksMetadataDetails };
export interface ClusterDetails {
  lastInUse: Date;
  runningUnitCount?: number;
  stoppedUnitCount?: number;
  clusterMetadata: ClusterMetadata;
}
export type ClusterDetailsList = ClusterDetails[];
export interface ClusterInformation {
  clusterArn: string;
  clusterDetails?: ClusterDetails[];
}
export type ClusterInformationList = ClusterInformation[];
export interface GetClustersForImageResponse {
  cluster: ClusterInformation[];
  nextToken?: string;
}
export interface GetCodeSecurityIntegrationRequest {
  integrationArn: string;
  tags?: { [key: string]: string | undefined };
}
export interface GetCodeSecurityIntegrationResponse {
  integrationArn: string;
  name: string;
  type: IntegrationType;
  status: IntegrationStatus;
  statusReason: string;
  createdOn: Date;
  lastUpdateOn: Date;
  authorizationUrl?: string | redacted.Redacted<string>;
  tags?: { [key: string]: string | undefined };
}
export type CodeSecurityUuid = string;
export interface GetCodeSecurityScanRequest {
  resource: CodeSecurityResource;
  scanId: string;
}
export type CodeScanStatus = "IN_PROGRESS" | "SUCCESSFUL" | "FAILED" | "SKIPPED" | (string & {});
export interface GetCodeSecurityScanResponse {
  scanId?: string;
  resource?: CodeSecurityResource;
  accountId?: string;
  status?: CodeScanStatus;
  statusReason?: string;
  createdAt?: Date;
  updatedAt?: Date;
  lastCommitId?: string;
}
export interface GetCodeSecurityScanConfigurationRequest {
  scanConfigurationArn: string;
}
export interface GetCodeSecurityScanConfigurationResponse {
  scanConfigurationArn?: string;
  name?: string;
  configuration?: CodeSecurityScanConfiguration;
  level?: ConfigurationLevel;
  scopeSettings?: ScopeSettings;
  createdAt?: Date;
  lastUpdatedAt?: Date;
  tags?: { [key: string]: string | undefined };
}
export interface GetConfigurationRequest {
  accountId?: string;
}
export type EcrRescanDuration = string;
export type EcrRescanDurationStatus = string;
export type DateTimeTimestamp = Date;
export type EcrPullDateRescanDuration = string;
export type EcrPullDateRescanMode = string;
export interface EcrRescanDurationState {
  rescanDuration?: string;
  status?: string;
  updatedAt?: Date;
  pullDateRescanDuration?: string;
  pullDateRescanMode?: string;
}
export interface EcrConfigurationState {
  rescanDurationState?: EcrRescanDurationState;
}
export type Ec2ScanMode = string;
export type Ec2ScanModeStatus = string;
export interface Ec2ScanModeState {
  scanMode?: string;
  scanModeStatus?: string;
}
export type VMScannerStatus = string;
export interface VMScannerState {
  activated?: boolean;
  activatedAt?: Date;
  status?: string;
}
export interface Ec2ConfigurationState {
  scanModeState?: Ec2ScanModeState;
  vmScannerState?: VMScannerState;
}
export interface GetConfigurationResponse {
  ecrConfiguration?: EcrConfigurationState;
  ec2Configuration?: Ec2ConfigurationState;
}
export interface GetDelegatedAdminAccountRequest {}
export type RelationshipStatus = string;
export interface DelegatedAdmin {
  accountId?: string;
  relationshipStatus?: string;
}
export interface GetDelegatedAdminAccountResponse {
  delegatedAdmin?: DelegatedAdmin;
}
export interface GetEc2DeepInspectionConfigurationRequest {}
export type Path = string;
export type PathList = string[];
export interface GetEc2DeepInspectionConfigurationResponse {
  packagePaths?: string[];
  orgPackagePaths?: string[];
  status?: string;
  errorMessage?: string;
}
export type ScanType = string;
export type ResourceType = string;
export interface GetEncryptionKeyRequest {
  scanType: string;
  resourceType: string;
}
export type KmsKeyArn = string;
export interface GetEncryptionKeyResponse {
  kmsKeyId: string;
}
export interface GetFindingsReportStatusRequest {
  reportId?: string;
}
export type ExternalReportStatus = string;
export type ReportingErrorCode = string;
export type ErrorMessage = string;
export interface GetFindingsReportStatusResponse {
  reportId?: string;
  status?: string;
  errorCode?: string;
  errorMessage?: string;
  destination?: Destination;
  filterCriteria?: FilterCriteria;
}
export interface GetMemberRequest {
  accountId: string;
}
export interface Member {
  accountId?: string;
  relationshipStatus?: string;
  delegatedAdminAccountId?: string;
  updatedAt?: Date;
}
export interface GetMemberResponse {
  member?: Member;
}
export interface GetSbomExportRequest {
  reportId: string;
}
export interface GetSbomExportResponse {
  reportId?: string;
  format?: string;
  status?: string;
  errorCode?: string;
  errorMessage?: string;
  s3Destination?: Destination;
  filterCriteria?: ResourceFilterCriteria;
}
export type Service = string;
export type ListAccountPermissionsMaxResults = number;
export interface ListAccountPermissionsRequest {
  service?: string;
  maxResults?: number;
  nextToken?: string;
}
export type Operation = string;
export interface Permission {
  service: string;
  operation: string;
}
export type Permissions = Permission[];
export interface ListAccountPermissionsResponse {
  permissions: Permission[];
  nextToken?: string;
}
export type CisScanNameFilterList = CisStringFilter[];
export type TagComparison = "EQUALS" | (string & {});
export interface TagFilter {
  comparison: TagComparison;
  key: string;
  value: string;
}
export type ResourceTagFilterList = TagFilter[];
export type CisScanConfigurationArnFilterList = CisStringFilter[];
export interface ListCisScanConfigurationsFilterCriteria {
  scanNameFilters?: CisStringFilter[];
  targetResourceTagFilters?: TagFilter[];
  scanConfigurationArnFilters?: CisStringFilter[];
}
export type CisScanConfigurationsSortBy = "SCAN_NAME" | "SCAN_CONFIGURATION_ARN" | (string & {});
export type ListCisScanConfigurationsMaxResults = number;
export interface ListCisScanConfigurationsRequest {
  filterCriteria?: ListCisScanConfigurationsFilterCriteria;
  sortBy?: CisScanConfigurationsSortBy;
  sortOrder?: CisSortOrder;
  nextToken?: string;
  maxResults?: number;
}
export type CisOwnerId = string;
export type CisAccountIdList = string[];
export interface CisTargets {
  accountIds?: string[];
  targetResourceTags?: { [key: string]: string[] | undefined };
}
export interface CisScanConfiguration {
  scanConfigurationArn: string;
  ownerId?: string;
  scanName?: string;
  securityLevel?: CisSecurityLevel;
  schedule?: Schedule;
  targets?: CisTargets;
  tags?: { [key: string]: string | undefined };
}
export type CisScanConfigurationList = CisScanConfiguration[];
export interface ListCisScanConfigurationsResponse {
  scanConfigurations?: CisScanConfiguration[];
  nextToken?: string;
}
export type OneAccountIdFilterList = CisStringFilter[];
export type PlatformFilterList = CisStringFilter[];
export interface CisNumberFilter {
  upperInclusive?: number;
  lowerInclusive?: number;
}
export type CisNumberFilterList = CisNumberFilter[];
export interface CisScanResultsAggregatedByChecksFilterCriteria {
  accountIdFilters?: CisStringFilter[];
  checkIdFilters?: CisStringFilter[];
  titleFilters?: CisStringFilter[];
  platformFilters?: CisStringFilter[];
  failedResourcesFilters?: CisNumberFilter[];
  securityLevelFilters?: CisSecurityLevelFilter[];
}
export type CisScanResultsAggregatedByChecksSortBy =
  | "CHECK_ID"
  | "TITLE"
  | "PLATFORM"
  | "FAILED_COUNTS"
  | "SECURITY_LEVEL"
  | (string & {});
export type CisScanResultsMaxResults = number;
export interface ListCisScanResultsAggregatedByChecksRequest {
  scanArn: string;
  filterCriteria?: CisScanResultsAggregatedByChecksFilterCriteria;
  sortBy?: CisScanResultsAggregatedByChecksSortBy;
  sortOrder?: CisSortOrder;
  nextToken?: string;
  maxResults?: number;
}
export interface StatusCounts {
  failed?: number;
  skipped?: number;
  passed?: number;
}
export interface CisCheckAggregation {
  scanArn: string;
  checkId?: string;
  title?: string;
  checkDescription?: string;
  level?: CisSecurityLevel;
  accountId?: string;
  statusCounts?: StatusCounts;
  platform?: string;
}
export type CisCheckAggregationList = CisCheckAggregation[];
export interface ListCisScanResultsAggregatedByChecksResponse {
  checkAggregations?: CisCheckAggregation[];
  nextToken?: string;
}
export type AccountIdFilterList = CisStringFilter[];
export type CisResultStatusComparison = "EQUALS" | (string & {});
export type CisResultStatus = "PASSED" | "FAILED" | "SKIPPED" | (string & {});
export interface CisResultStatusFilter {
  comparison: CisResultStatusComparison;
  value: CisResultStatus;
}
export type CisResultStatusFilterList = CisResultStatusFilter[];
export type ResourceIdFilterList = CisStringFilter[];
export type CisTargetStatusComparison = "EQUALS" | (string & {});
export type CisTargetStatus = "TIMED_OUT" | "CANCELLED" | "COMPLETED" | (string & {});
export interface CisTargetStatusFilter {
  comparison: CisTargetStatusComparison;
  value: CisTargetStatus;
}
export type TargetStatusFilterList = CisTargetStatusFilter[];
export type CisTargetStatusReason =
  | "SCAN_IN_PROGRESS"
  | "UNSUPPORTED_OS"
  | "SSM_UNMANAGED"
  | (string & {});
export interface CisTargetStatusReasonFilter {
  comparison: CisTargetStatusComparison;
  value: CisTargetStatusReason;
}
export type TargetStatusReasonFilterList = CisTargetStatusReasonFilter[];
export interface CisScanResultsAggregatedByTargetResourceFilterCriteria {
  accountIdFilters?: CisStringFilter[];
  statusFilters?: CisResultStatusFilter[];
  checkIdFilters?: CisStringFilter[];
  targetResourceIdFilters?: CisStringFilter[];
  targetResourceTagFilters?: TagFilter[];
  platformFilters?: CisStringFilter[];
  targetStatusFilters?: CisTargetStatusFilter[];
  targetStatusReasonFilters?: CisTargetStatusReasonFilter[];
  failedChecksFilters?: CisNumberFilter[];
}
export type CisScanResultsAggregatedByTargetResourceSortBy =
  | "RESOURCE_ID"
  | "FAILED_COUNTS"
  | "ACCOUNT_ID"
  | "PLATFORM"
  | "TARGET_STATUS"
  | "TARGET_STATUS_REASON"
  | (string & {});
export interface ListCisScanResultsAggregatedByTargetResourceRequest {
  scanArn: string;
  filterCriteria?: CisScanResultsAggregatedByTargetResourceFilterCriteria;
  sortBy?: CisScanResultsAggregatedByTargetResourceSortBy;
  sortOrder?: CisSortOrder;
  nextToken?: string;
  maxResults?: number;
}
export interface CisTargetResourceAggregation {
  scanArn: string;
  targetResourceId?: string;
  accountId?: string;
  targetResourceTags?: { [key: string]: string[] | undefined };
  statusCounts?: StatusCounts;
  platform?: string;
  targetStatus?: CisTargetStatus;
  targetStatusReason?: CisTargetStatusReason;
}
export type CisTargetResourceAggregationList = CisTargetResourceAggregation[];
export interface ListCisScanResultsAggregatedByTargetResourceResponse {
  targetResourceAggregations?: CisTargetResourceAggregation[];
  nextToken?: string;
}
export type CisScanStatusComparison = "EQUALS" | (string & {});
export type CisScanStatus = "FAILED" | "COMPLETED" | "CANCELLED" | "IN_PROGRESS" | (string & {});
export interface CisScanStatusFilter {
  comparison: CisScanStatusComparison;
  value: CisScanStatus;
}
export type CisScanStatusFilterList = CisScanStatusFilter[];
export interface CisDateFilter {
  earliestScanStartTime?: Date;
  latestScanStartTime?: Date;
}
export type CisScanDateFilterList = CisDateFilter[];
export type CisScanArnFilterList = CisStringFilter[];
export type CisScheduledByFilterList = CisStringFilter[];
export interface ListCisScansFilterCriteria {
  scanNameFilters?: CisStringFilter[];
  targetResourceTagFilters?: TagFilter[];
  targetResourceIdFilters?: CisStringFilter[];
  scanStatusFilters?: CisScanStatusFilter[];
  scanAtFilters?: CisDateFilter[];
  scanConfigurationArnFilters?: CisStringFilter[];
  scanArnFilters?: CisStringFilter[];
  scheduledByFilters?: CisStringFilter[];
  failedChecksFilters?: CisNumberFilter[];
  targetAccountIdFilters?: CisStringFilter[];
}
export type ListCisScansDetailLevel = "ORGANIZATION" | "MEMBER" | (string & {});
export type ListCisScansSortBy =
  | "STATUS"
  | "SCHEDULED_BY"
  | "SCAN_START_DATE"
  | "FAILED_CHECKS"
  | (string & {});
export type ListCisScansMaxResults = number;
export interface ListCisScansRequest {
  filterCriteria?: ListCisScansFilterCriteria;
  detailLevel?: ListCisScansDetailLevel;
  sortBy?: ListCisScansSortBy;
  sortOrder?: CisSortOrder;
  nextToken?: string;
  maxResults?: number;
}
export interface CisScan {
  scanArn: string;
  scanConfigurationArn: string;
  status?: CisScanStatus;
  scanName?: string;
  scanDate?: Date;
  failedChecks?: number;
  totalChecks?: number;
  targets?: CisTargets;
  scheduledBy?: string;
  securityLevel?: CisSecurityLevel;
}
export type CisScanList = CisScan[];
export interface ListCisScansResponse {
  scans?: CisScan[];
  nextToken?: string;
}
export interface ListCodeSecurityIntegrationsRequest {
  nextToken?: string;
  maxResults?: number;
}
export interface CodeSecurityIntegrationSummary {
  integrationArn: string;
  name: string;
  type: IntegrationType;
  status: IntegrationStatus;
  statusReason: string;
  createdOn: Date;
  lastUpdateOn: Date;
}
export type IntegrationSummaries = CodeSecurityIntegrationSummary[];
export interface ListCodeSecurityIntegrationsResponse {
  integrations?: CodeSecurityIntegrationSummary[];
  nextToken?: string;
}
export interface ListCodeSecurityScanConfigurationAssociationsRequest {
  scanConfigurationArn: string;
  nextToken?: string;
  maxResults?: number;
}
export interface CodeSecurityScanConfigurationAssociationSummary {
  resource?: CodeSecurityResource;
}
export type CodeSecurityScanConfigurationAssociationSummaries =
  CodeSecurityScanConfigurationAssociationSummary[];
export interface ListCodeSecurityScanConfigurationAssociationsResponse {
  associations?: CodeSecurityScanConfigurationAssociationSummary[];
  nextToken?: string;
}
export interface ListCodeSecurityScanConfigurationsRequest {
  nextToken?: string;
  maxResults?: number;
}
export type OwnerId = string;
export interface CodeSecurityScanConfigurationSummary {
  scanConfigurationArn: string;
  name: string;
  ownerAccountId: string;
  periodicScanFrequency?: PeriodicScanFrequency;
  frequencyExpression?: string;
  continuousIntegrationScanSupportedEvents?: ContinuousIntegrationScanEvent[];
  ruleSetCategories: RuleSetCategory[];
  scopeSettings?: ScopeSettings;
}
export type CodeSecurityScanConfigurationSummaries = CodeSecurityScanConfigurationSummary[];
export interface ListCodeSecurityScanConfigurationsResponse {
  configurations?: CodeSecurityScanConfigurationSummary[];
  nextToken?: string;
}
export type ConnectorNextToken = string | redacted.Redacted<string>;
export type ConnectorArnComparison = "EQUALS" | (string & {});
export interface ConnectorArnFilter {
  comparison: ConnectorArnComparison;
  value: string;
}
export type ConnectorArnFilterList = ConnectorArnFilter[];
export type AwsConfigConnectorArnComparison = "EQUALS" | (string & {});
export interface AwsConfigConnectorArnFilter {
  comparison: AwsConfigConnectorArnComparison;
  value: string;
}
export type AwsConfigConnectorArnFilterList = AwsConfigConnectorArnFilter[];
export type ConnectorTypeComparison = "EQUALS" | (string & {});
export type ConnectorType = "CUSTOMER_MANAGED" | "SERVICE_LINKED" | (string & {});
export interface ConnectorTypeFilter {
  comparison: ConnectorTypeComparison;
  value: ConnectorType;
}
export type ConnectorTypeFilterList = ConnectorTypeFilter[];
export type ProviderComparison = "EQUALS" | (string & {});
export interface ProviderFilter {
  comparison: ProviderComparison;
  value: ConnectorCloudProvider;
}
export type ProviderFilterList = ProviderFilter[];
export interface ConnectorFilterCriteria {
  connectorArns?: ConnectorArnFilter[];
  accounts?: StringFilter[];
  awsConfigConnectorArns?: AwsConfigConnectorArnFilter[];
  connectorType?: ConnectorTypeFilter[];
  provider?: ProviderFilter[];
}
export interface ListConnectorsRequest {
  maxResults?: number;
  nextToken?: string | redacted.Redacted<string>;
  filterCriteria?: ConnectorFilterCriteria;
}
export type EnablementStatus =
  | "ENABLED"
  | "PENDING_ENABLEMENT"
  | "FAILED_TO_ENABLE"
  | "PENDING_UPDATE"
  | "FAILED_TO_UPDATE"
  | "PENDING_DELETION"
  | "DELETED"
  | "FAILED_TO_DELETE"
  | (string & {});
export type ConnectorHealthStatus =
  | "CONNECTED"
  | "DEGRADED"
  | "FAILED_TO_CONNECT"
  | "PENDING_AUTHORIZATION"
  | "PENDING_CONFIGURATION"
  | "UNKNOWN"
  | (string & {});
export interface ConnectorHealth {
  connectorStatus: ConnectorHealthStatus;
  lastCheckedAt: Date;
  message?: string;
}
export type ScopeState = "ACTIVE" | "PENDING" | "ERROR" | "DISABLED" | (string & {});
export interface ScopeConfiguration {
  scopeType: ScopeType;
  scopeValues?: string[];
  state?: ScopeState;
  stateReason?: string;
}
export interface AzureScopeConfiguration {
  vmScanning?: ScopeConfiguration;
  containerImageScanning?: ScopeConfiguration;
  serverlessScanning?: ScopeConfiguration;
}
export interface Connector {
  connectorArn: string;
  name?: string;
  description?: string;
  provider: ConnectorCloudProvider;
  enablementStatus?: EnablementStatus;
  enablementStatusReason?: string;
  health?: ConnectorHealth;
  createdAt: Date;
  updatedAt: Date;
  azureRegions?: string[];
  awsConfigConnectorArn?: string;
  scopeConfiguration?: AzureScopeConfiguration;
  tags?: { [key: string]: string | undefined };
  autoInstallVMScanner?: boolean;
}
export type ConnectorList = Connector[];
export interface ListConnectorsResponse {
  items: Connector[];
  nextToken?: string | redacted.Redacted<string>;
}
export type AwsConfigConnectorArnList = string[];
export type ListConnectorScanConfigurationsMaxResults = number;
export interface ListConnectorScanConfigurationsRequest {
  awsConfigConnectorArns?: string[];
  maxResults?: number;
  nextToken?: string | redacted.Redacted<string>;
}
export type ConnectorArnList = string[];
export type ContainerImageRescanDuration = string;
export type ContainerImagePullDateRescanDuration = string;
export interface ConnectorContainerImageScanConfiguration {
  pushDuration?: string;
  pullDuration?: string;
}
export interface ConnectorScanConfiguration {
  containerImageScanning?: ConnectorContainerImageScanConfiguration;
}
export interface ConnectorScanConfigurationItem {
  awsConfigConnectorArn: string;
  connectorArns: string[];
  scanConfiguration: ConnectorScanConfiguration;
}
export type ConnectorScanConfigurationItemList = ConnectorScanConfigurationItem[];
export interface ListConnectorScanConfigurationsResponse {
  scanConfigurations: ConnectorScanConfigurationItem[];
  nextToken?: string | redacted.Redacted<string>;
}
export type ListCoverageMaxResults = number;
export type CoverageStringComparison = string;
export type CoverageStringInput = string;
export interface CoverageStringFilter {
  comparison: string;
  value: string;
}
export type CoverageStringFilterList = CoverageStringFilter[];
export type CoverageMapComparison = string;
export interface CoverageMapFilter {
  comparison: string;
  key: string;
  value?: string;
}
export type CoverageMapFilterList = CoverageMapFilter[];
export interface CoverageDateFilter {
  startInclusive?: Date;
  endInclusive?: Date;
}
export type CoverageDateFilterList = CoverageDateFilter[];
export interface CoverageNumberFilter {
  upperInclusive?: number;
  lowerInclusive?: number;
}
export type CoverageNumberFilterList = CoverageNumberFilter[];
export interface CoverageFilterCriteria {
  scanStatusCode?: CoverageStringFilter[];
  scanStatusReason?: CoverageStringFilter[];
  accountId?: CoverageStringFilter[];
  resourceId?: CoverageStringFilter[];
  resourceType?: CoverageStringFilter[];
  scanType?: CoverageStringFilter[];
  ecrRepositoryName?: CoverageStringFilter[];
  ecrImageTags?: CoverageStringFilter[];
  ec2InstanceTags?: CoverageMapFilter[];
  lambdaFunctionName?: CoverageStringFilter[];
  lambdaFunctionTags?: CoverageMapFilter[];
  lambdaFunctionRuntime?: CoverageStringFilter[];
  lastScannedAt?: CoverageDateFilter[];
  scanMode?: CoverageStringFilter[];
  imagePulledAt?: CoverageDateFilter[];
  ecrImageLastInUseAt?: CoverageDateFilter[];
  ecrImageInUseCount?: CoverageNumberFilter[];
  codeRepositoryProjectName?: CoverageStringFilter[];
  codeRepositoryProviderType?: CoverageStringFilter[];
  codeRepositoryProviderTypeVisibility?: CoverageStringFilter[];
  lastScannedCommitId?: CoverageStringFilter[];
  cloudProvider?: CoverageStringFilter[];
  cloudProviderAccountId?: CoverageStringFilter[];
  cloudProviderRegion?: CoverageStringFilter[];
  cloudVmInstanceTags?: CoverageMapFilter[];
  cloudContainerImageTags?: CoverageStringFilter[];
  cloudContainerRepositoryName?: CoverageStringFilter[];
  cloudContainerRegistryName?: CoverageStringFilter[];
  cloudServerlessFunctionName?: CoverageStringFilter[];
  cloudServerlessFunctionRuntime?: CoverageStringFilter[];
  cloudServerlessFunctionTags?: CoverageMapFilter[];
  cloudProviderOrgId?: CoverageStringFilter[];
}
export interface ListCoverageRequest {
  maxResults?: number;
  nextToken?: string;
  filterCriteria?: CoverageFilterCriteria;
}
export type CoverageResourceType = string;
export type ScanStatusCode = string;
export type ScanStatusReason = string;
export interface ScanStatus {
  statusCode: string;
  reason: string;
}
export type EcrScanFrequency = string;
export interface EcrRepositoryMetadata {
  name?: string;
  scanFrequency?: string;
}
export type TagList = string[];
export interface EcrContainerImageMetadata {
  tags?: string[];
  imagePulledAt?: Date;
  lastInUseAt?: Date;
  inUseCount?: number;
}
export type AmiId = string;
export type Ec2Platform = string;
export interface Ec2Metadata {
  tags?: { [key: string]: string | undefined };
  amiId?: string;
  platform?: string;
}
export type LambdaLayerList = string[];
export type Runtime = string;
export interface LambdaFunctionMetadata {
  functionTags?: { [key: string]: string | undefined };
  layers?: string[];
  functionName?: string;
  runtime?: string;
}
export type CodeRepositoryIntegrationArn = string;
export type CommitId = string;
export interface ProjectPeriodicScanConfiguration {
  frequencyExpression?: string;
  ruleSetCategories?: RuleSetCategory[];
}
export type ProjectPeriodicScanConfigurationList = ProjectPeriodicScanConfiguration[];
export interface ProjectContinuousIntegrationScanConfiguration {
  supportedEvent?: ContinuousIntegrationScanEvent;
  ruleSetCategories?: RuleSetCategory[];
}
export type ProjectContinuousIntegrationScanConfigurationList =
  ProjectContinuousIntegrationScanConfiguration[];
export interface ProjectCodeSecurityScanConfiguration {
  periodicScanConfigurations?: ProjectPeriodicScanConfiguration[];
  continuousIntegrationScanConfigurations?: ProjectContinuousIntegrationScanConfiguration[];
}
export interface CodeRepositoryOnDemandScan {
  lastScannedCommitId?: string;
  lastScanAt?: Date;
  scanStatus?: ScanStatus;
}
export interface CodeRepositoryMetadata {
  projectName: string;
  integrationArn?: string;
  providerType: string;
  providerTypeVisibility: string;
  lastScannedCommitId?: string;
  scanConfiguration?: ProjectCodeSecurityScanConfiguration;
  onDemandScan?: CodeRepositoryOnDemandScan;
}
export type VmPlatform = string;
export interface VmInstanceMetadata {
  tags?: { [key: string]: string | undefined };
  platform?: string;
  inventoryHash?: string;
  vmImageReference?: string;
}
export interface ContainerImageMetadata {
  imageTags?: string[];
  imagePulledAt?: Date;
  lastInUseAt?: Date;
  inUseCount?: number;
}
export interface ContainerRepositoryMetadata {
  name?: string;
  scanFrequency?: string;
}
export interface ContainerRegistryMetadata {
  name?: string;
}
export interface ServerlessFunctionMetadata {
  serverlessFunctionName?: string;
  runtime?: string;
  functionTags?: { [key: string]: string | undefined };
}
export interface ResourceScanMetadata {
  ecrRepository?: EcrRepositoryMetadata;
  ecrImage?: EcrContainerImageMetadata;
  ec2?: Ec2Metadata;
  lambdaFunction?: LambdaFunctionMetadata;
  codeRepository?: CodeRepositoryMetadata;
  vmInstance?: VmInstanceMetadata;
  containerImage?: ContainerImageMetadata;
  containerRepository?: ContainerRepositoryMetadata;
  containerRegistry?: ContainerRegistryMetadata;
  serverlessFunction?: ServerlessFunctionMetadata;
}
export type ScanMode = string;
export type Provider = string;
export type ProviderAccountId = string;
export type ProviderOrgId = string;
export type ProviderRegion = string;
export type ProviderPartition = string;
export interface CoveredResource {
  resourceType: string;
  resourceId: string;
  accountId: string;
  scanType: string;
  scanStatus?: ScanStatus;
  resourceMetadata?: ResourceScanMetadata;
  lastScannedAt?: Date;
  scanMode?: string;
  provider?: string;
  providerAccountId?: string;
  providerOrgId?: string;
  providerRegion?: string;
  providerPartition?: string;
}
export type CoveredResources = CoveredResource[];
export interface ListCoverageResponse {
  nextToken?: string;
  coveredResources?: CoveredResource[];
}
export type GroupKey = string;
export interface ListCoverageStatisticsRequest {
  filterCriteria?: CoverageFilterCriteria;
  groupBy?: string;
  nextToken?: string;
}
export type AggCounts = number;
export interface Counts {
  count?: number;
  groupKey?: string;
}
export type CountsList = Counts[];
export interface ListCoverageStatisticsResponse {
  countsByGroup?: Counts[];
  totalCounts: number;
  nextToken?: string;
}
export type ListDelegatedAdminMaxResults = number;
export interface ListDelegatedAdminAccountsRequest {
  maxResults?: number;
  nextToken?: string;
}
export type DelegatedAdminStatus = string;
export interface DelegatedAdminAccount {
  accountId?: string;
  status?: string;
}
export type DelegatedAdminAccountList = DelegatedAdminAccount[];
export interface ListDelegatedAdminAccountsResponse {
  delegatedAdminAccounts?: DelegatedAdminAccount[];
  nextToken?: string;
}
export type FilterArnList = string[];
export type ListFilterMaxResults = number;
export interface ListFiltersRequest {
  arns?: string[];
  action?: string;
  nextToken?: string;
  maxResults?: number;
}
export interface Filter {
  arn: string;
  ownerId: string;
  name: string;
  criteria: FilterCriteria;
  action: string;
  createdAt: Date;
  updatedAt: Date;
  description?: string;
  reason?: string;
  tags?: { [key: string]: string | undefined };
}
export type FilterList = Filter[];
export interface ListFiltersResponse {
  filters: Filter[];
  nextToken?: string;
}
export type AggregationType = string;
export type ListFindingAggregationsMaxResults = number;
export type AggregationFindingType = string;
export type AggregationResourceType = string;
export type SortOrder = string;
export type AccountSortBy = string;
export interface AccountAggregation {
  findingType?: string;
  resourceType?: string;
  sortOrder?: string;
  sortBy?: string;
}
export type AmiSortBy = string;
export interface AmiAggregation {
  amis?: StringFilter[];
  sortOrder?: string;
  sortBy?: string;
}
export type AwsEcrContainerSortBy = string;
export interface AwsEcrContainerAggregation {
  resourceIds?: StringFilter[];
  imageShas?: StringFilter[];
  repositories?: StringFilter[];
  architectures?: StringFilter[];
  imageTags?: StringFilter[];
  sortOrder?: string;
  sortBy?: string;
  lastInUseAt?: DateFilter[];
  inUseCount?: NumberFilter[];
}
export type Ec2InstanceSortBy = string;
export interface Ec2InstanceAggregation {
  amis?: StringFilter[];
  operatingSystems?: StringFilter[];
  instanceIds?: StringFilter[];
  instanceTags?: MapFilter[];
  sortOrder?: string;
  sortBy?: string;
}
export type FindingTypeSortBy = string;
export interface FindingTypeAggregation {
  findingType?: string;
  resourceType?: string;
  sortOrder?: string;
  sortBy?: string;
}
export type ImageLayerSortBy = string;
export interface ImageLayerAggregation {
  repositories?: StringFilter[];
  resourceIds?: StringFilter[];
  layerHashes?: StringFilter[];
  cloudProviders?: StringFilter[];
  cloudAccountIds?: StringFilter[];
  cloudOrgIds?: StringFilter[];
  cloudRegions?: StringFilter[];
  cloudPartitions?: StringFilter[];
  sortOrder?: string;
  sortBy?: string;
}
export type PackageSortBy = string;
export interface PackageAggregation {
  packageNames?: StringFilter[];
  sortOrder?: string;
  sortBy?: string;
}
export type RepositorySortBy = string;
export interface RepositoryAggregation {
  repositories?: StringFilter[];
  sortOrder?: string;
  sortBy?: string;
}
export type TitleSortBy = string;
export interface TitleAggregation {
  titles?: StringFilter[];
  vulnerabilityIds?: StringFilter[];
  resourceType?: string;
  findingType?: string;
  sortOrder?: string;
  sortBy?: string;
}
export type LambdaLayerSortBy = string;
export interface LambdaLayerAggregation {
  functionNames?: StringFilter[];
  resourceIds?: StringFilter[];
  layerArns?: StringFilter[];
  sortOrder?: string;
  sortBy?: string;
}
export type LambdaFunctionSortBy = string;
export interface LambdaFunctionAggregation {
  resourceIds?: StringFilter[];
  functionNames?: StringFilter[];
  runtimes?: StringFilter[];
  functionTags?: MapFilter[];
  sortOrder?: string;
  sortBy?: string;
}
export type CodeRepositorySortBy = string;
export interface CodeRepositoryAggregation {
  projectNames?: StringFilter[];
  providerTypes?: StringFilter[];
  sortOrder?: string;
  sortBy?: string;
  resourceIds?: StringFilter[];
}
export type VmInstanceSortBy = string;
export interface VmInstanceAggregation {
  resourceIds?: StringFilter[];
  operatingSystems?: StringFilter[];
  instanceTags?: MapFilter[];
  vmImageReferences?: StringFilter[];
  cloudProviders?: StringFilter[];
  cloudPartitions?: StringFilter[];
  cloudRegions?: StringFilter[];
  cloudOrgIds?: StringFilter[];
  cloudAccountIds?: StringFilter[];
  sortOrder?: string;
  sortBy?: string;
}
export type ContainerImageSortBy = string;
export interface ContainerImageAggregation {
  resourceIds?: StringFilter[];
  imageDigests?: StringFilter[];
  repositories?: StringFilter[];
  registries?: StringFilter[];
  architectures?: StringFilter[];
  imageTags?: StringFilter[];
  cloudProviders?: StringFilter[];
  cloudPartitions?: StringFilter[];
  cloudRegions?: StringFilter[];
  cloudOrgIds?: StringFilter[];
  cloudAccountIds?: StringFilter[];
  lastInUseAt?: DateFilter[];
  inUseCount?: NumberFilter[];
  sortOrder?: string;
  sortBy?: string;
}
export type ServerlessFunctionSortBy = string;
export interface ServerlessFunctionAggregation {
  resourceIds?: StringFilter[];
  functionNames?: StringFilter[];
  runtimes?: StringFilter[];
  functionTags?: MapFilter[];
  cloudProviders?: StringFilter[];
  cloudPartitions?: StringFilter[];
  cloudRegions?: StringFilter[];
  cloudOrgIds?: StringFilter[];
  cloudAccountIds?: StringFilter[];
  sortOrder?: string;
  sortBy?: string;
}
export type AggregationRequest =
  | {
      accountAggregation: AccountAggregation;
      amiAggregation?: never;
      awsEcrContainerAggregation?: never;
      ec2InstanceAggregation?: never;
      findingTypeAggregation?: never;
      imageLayerAggregation?: never;
      packageAggregation?: never;
      repositoryAggregation?: never;
      titleAggregation?: never;
      lambdaLayerAggregation?: never;
      lambdaFunctionAggregation?: never;
      codeRepositoryAggregation?: never;
      vmInstanceAggregation?: never;
      containerImageAggregation?: never;
      serverlessFunctionAggregation?: never;
    }
  | {
      accountAggregation?: never;
      amiAggregation: AmiAggregation;
      awsEcrContainerAggregation?: never;
      ec2InstanceAggregation?: never;
      findingTypeAggregation?: never;
      imageLayerAggregation?: never;
      packageAggregation?: never;
      repositoryAggregation?: never;
      titleAggregation?: never;
      lambdaLayerAggregation?: never;
      lambdaFunctionAggregation?: never;
      codeRepositoryAggregation?: never;
      vmInstanceAggregation?: never;
      containerImageAggregation?: never;
      serverlessFunctionAggregation?: never;
    }
  | {
      accountAggregation?: never;
      amiAggregation?: never;
      awsEcrContainerAggregation: AwsEcrContainerAggregation;
      ec2InstanceAggregation?: never;
      findingTypeAggregation?: never;
      imageLayerAggregation?: never;
      packageAggregation?: never;
      repositoryAggregation?: never;
      titleAggregation?: never;
      lambdaLayerAggregation?: never;
      lambdaFunctionAggregation?: never;
      codeRepositoryAggregation?: never;
      vmInstanceAggregation?: never;
      containerImageAggregation?: never;
      serverlessFunctionAggregation?: never;
    }
  | {
      accountAggregation?: never;
      amiAggregation?: never;
      awsEcrContainerAggregation?: never;
      ec2InstanceAggregation: Ec2InstanceAggregation;
      findingTypeAggregation?: never;
      imageLayerAggregation?: never;
      packageAggregation?: never;
      repositoryAggregation?: never;
      titleAggregation?: never;
      lambdaLayerAggregation?: never;
      lambdaFunctionAggregation?: never;
      codeRepositoryAggregation?: never;
      vmInstanceAggregation?: never;
      containerImageAggregation?: never;
      serverlessFunctionAggregation?: never;
    }
  | {
      accountAggregation?: never;
      amiAggregation?: never;
      awsEcrContainerAggregation?: never;
      ec2InstanceAggregation?: never;
      findingTypeAggregation: FindingTypeAggregation;
      imageLayerAggregation?: never;
      packageAggregation?: never;
      repositoryAggregation?: never;
      titleAggregation?: never;
      lambdaLayerAggregation?: never;
      lambdaFunctionAggregation?: never;
      codeRepositoryAggregation?: never;
      vmInstanceAggregation?: never;
      containerImageAggregation?: never;
      serverlessFunctionAggregation?: never;
    }
  | {
      accountAggregation?: never;
      amiAggregation?: never;
      awsEcrContainerAggregation?: never;
      ec2InstanceAggregation?: never;
      findingTypeAggregation?: never;
      imageLayerAggregation: ImageLayerAggregation;
      packageAggregation?: never;
      repositoryAggregation?: never;
      titleAggregation?: never;
      lambdaLayerAggregation?: never;
      lambdaFunctionAggregation?: never;
      codeRepositoryAggregation?: never;
      vmInstanceAggregation?: never;
      containerImageAggregation?: never;
      serverlessFunctionAggregation?: never;
    }
  | {
      accountAggregation?: never;
      amiAggregation?: never;
      awsEcrContainerAggregation?: never;
      ec2InstanceAggregation?: never;
      findingTypeAggregation?: never;
      imageLayerAggregation?: never;
      packageAggregation: PackageAggregation;
      repositoryAggregation?: never;
      titleAggregation?: never;
      lambdaLayerAggregation?: never;
      lambdaFunctionAggregation?: never;
      codeRepositoryAggregation?: never;
      vmInstanceAggregation?: never;
      containerImageAggregation?: never;
      serverlessFunctionAggregation?: never;
    }
  | {
      accountAggregation?: never;
      amiAggregation?: never;
      awsEcrContainerAggregation?: never;
      ec2InstanceAggregation?: never;
      findingTypeAggregation?: never;
      imageLayerAggregation?: never;
      packageAggregation?: never;
      repositoryAggregation: RepositoryAggregation;
      titleAggregation?: never;
      lambdaLayerAggregation?: never;
      lambdaFunctionAggregation?: never;
      codeRepositoryAggregation?: never;
      vmInstanceAggregation?: never;
      containerImageAggregation?: never;
      serverlessFunctionAggregation?: never;
    }
  | {
      accountAggregation?: never;
      amiAggregation?: never;
      awsEcrContainerAggregation?: never;
      ec2InstanceAggregation?: never;
      findingTypeAggregation?: never;
      imageLayerAggregation?: never;
      packageAggregation?: never;
      repositoryAggregation?: never;
      titleAggregation: TitleAggregation;
      lambdaLayerAggregation?: never;
      lambdaFunctionAggregation?: never;
      codeRepositoryAggregation?: never;
      vmInstanceAggregation?: never;
      containerImageAggregation?: never;
      serverlessFunctionAggregation?: never;
    }
  | {
      accountAggregation?: never;
      amiAggregation?: never;
      awsEcrContainerAggregation?: never;
      ec2InstanceAggregation?: never;
      findingTypeAggregation?: never;
      imageLayerAggregation?: never;
      packageAggregation?: never;
      repositoryAggregation?: never;
      titleAggregation?: never;
      lambdaLayerAggregation: LambdaLayerAggregation;
      lambdaFunctionAggregation?: never;
      codeRepositoryAggregation?: never;
      vmInstanceAggregation?: never;
      containerImageAggregation?: never;
      serverlessFunctionAggregation?: never;
    }
  | {
      accountAggregation?: never;
      amiAggregation?: never;
      awsEcrContainerAggregation?: never;
      ec2InstanceAggregation?: never;
      findingTypeAggregation?: never;
      imageLayerAggregation?: never;
      packageAggregation?: never;
      repositoryAggregation?: never;
      titleAggregation?: never;
      lambdaLayerAggregation?: never;
      lambdaFunctionAggregation: LambdaFunctionAggregation;
      codeRepositoryAggregation?: never;
      vmInstanceAggregation?: never;
      containerImageAggregation?: never;
      serverlessFunctionAggregation?: never;
    }
  | {
      accountAggregation?: never;
      amiAggregation?: never;
      awsEcrContainerAggregation?: never;
      ec2InstanceAggregation?: never;
      findingTypeAggregation?: never;
      imageLayerAggregation?: never;
      packageAggregation?: never;
      repositoryAggregation?: never;
      titleAggregation?: never;
      lambdaLayerAggregation?: never;
      lambdaFunctionAggregation?: never;
      codeRepositoryAggregation: CodeRepositoryAggregation;
      vmInstanceAggregation?: never;
      containerImageAggregation?: never;
      serverlessFunctionAggregation?: never;
    }
  | {
      accountAggregation?: never;
      amiAggregation?: never;
      awsEcrContainerAggregation?: never;
      ec2InstanceAggregation?: never;
      findingTypeAggregation?: never;
      imageLayerAggregation?: never;
      packageAggregation?: never;
      repositoryAggregation?: never;
      titleAggregation?: never;
      lambdaLayerAggregation?: never;
      lambdaFunctionAggregation?: never;
      codeRepositoryAggregation?: never;
      vmInstanceAggregation: VmInstanceAggregation;
      containerImageAggregation?: never;
      serverlessFunctionAggregation?: never;
    }
  | {
      accountAggregation?: never;
      amiAggregation?: never;
      awsEcrContainerAggregation?: never;
      ec2InstanceAggregation?: never;
      findingTypeAggregation?: never;
      imageLayerAggregation?: never;
      packageAggregation?: never;
      repositoryAggregation?: never;
      titleAggregation?: never;
      lambdaLayerAggregation?: never;
      lambdaFunctionAggregation?: never;
      codeRepositoryAggregation?: never;
      vmInstanceAggregation?: never;
      containerImageAggregation: ContainerImageAggregation;
      serverlessFunctionAggregation?: never;
    }
  | {
      accountAggregation?: never;
      amiAggregation?: never;
      awsEcrContainerAggregation?: never;
      ec2InstanceAggregation?: never;
      findingTypeAggregation?: never;
      imageLayerAggregation?: never;
      packageAggregation?: never;
      repositoryAggregation?: never;
      titleAggregation?: never;
      lambdaLayerAggregation?: never;
      lambdaFunctionAggregation?: never;
      codeRepositoryAggregation?: never;
      vmInstanceAggregation?: never;
      containerImageAggregation?: never;
      serverlessFunctionAggregation: ServerlessFunctionAggregation;
    };
export interface ListFindingAggregationsRequest {
  aggregationType: string;
  nextToken?: string;
  maxResults?: number;
  accountIds?: StringFilter[];
  aggregationRequest?: AggregationRequest;
}
export interface SeverityCounts {
  all?: number;
  medium?: number;
  high?: number;
  critical?: number;
  low?: number;
  informational?: number;
  untriaged?: number;
}
export interface AccountAggregationResponse {
  accountId?: string;
  severityCounts?: SeverityCounts;
  exploitAvailableCount?: number;
  fixAvailableCount?: number;
}
export interface AmiAggregationResponse {
  ami: string;
  accountId?: string;
  cloudProvider?: string;
  cloudPartition?: string;
  cloudRegion?: string;
  cloudOrgId?: string;
  cloudAccountId?: string;
  severityCounts?: SeverityCounts;
  affectedInstances?: number;
}
export type StringList = string[];
export interface AwsEcrContainerAggregationResponse {
  resourceId: string;
  imageSha?: string;
  repository?: string;
  architecture?: string;
  imageTags?: string[];
  accountId?: string;
  severityCounts?: SeverityCounts;
  lastInUseAt?: Date;
  inUseCount?: number;
}
export interface Ec2InstanceAggregationResponse {
  instanceId: string;
  ami?: string;
  operatingSystem?: string;
  instanceTags?: { [key: string]: string | undefined };
  accountId?: string;
  severityCounts?: SeverityCounts;
  networkFindings?: number;
}
export interface FindingTypeAggregationResponse {
  accountId?: string;
  severityCounts?: SeverityCounts;
  exploitAvailableCount?: number;
  fixAvailableCount?: number;
  cloudProvider?: string;
  cloudAccountId?: string;
  cloudOrgId?: string;
  cloudRegion?: string;
  cloudPartition?: string;
}
export interface ImageLayerAggregationResponse {
  repository: string;
  resourceId: string;
  layerHash: string;
  accountId: string;
  cloudProvider?: string;
  cloudAccountId?: string;
  cloudOrgId?: string;
  cloudRegion?: string;
  cloudPartition?: string;
  severityCounts?: SeverityCounts;
}
export interface PackageAggregationResponse {
  packageName: string;
  accountId?: string;
  severityCounts?: SeverityCounts;
}
export interface RepositoryAggregationResponse {
  repository: string;
  accountId?: string;
  cloudProvider?: string;
  cloudPartition?: string;
  cloudRegion?: string;
  cloudOrgId?: string;
  cloudAccountId?: string;
  severityCounts?: SeverityCounts;
  affectedImages?: number;
}
export interface TitleAggregationResponse {
  title: string;
  vulnerabilityId?: string;
  accountId?: string;
  severityCounts?: SeverityCounts;
}
export interface LambdaLayerAggregationResponse {
  functionName: string;
  resourceId: string;
  layerArn: string;
  accountId: string;
  severityCounts?: SeverityCounts;
}
export interface LambdaFunctionAggregationResponse {
  resourceId: string;
  functionName?: string;
  runtime?: string;
  lambdaTags?: { [key: string]: string | undefined };
  accountId?: string;
  severityCounts?: SeverityCounts;
  lastModifiedAt?: Date;
}
export interface CodeRepositoryAggregationResponse {
  projectNames: string;
  providerType?: string;
  severityCounts?: SeverityCounts;
  exploitAvailableActiveFindingsCount?: number;
  fixAvailableActiveFindingsCount?: number;
  accountId?: string;
  resourceId?: string;
}
export interface VmInstanceAggregationResponse {
  resourceId: string;
  cloudProvider?: string;
  cloudAccountId?: string;
  cloudPartition?: string;
  cloudRegion?: string;
  cloudOrgId?: string;
  vmImageReference?: string;
  operatingSystem?: string;
  tags?: { [key: string]: string | undefined };
  accountId?: string;
  severityCounts?: SeverityCounts;
  networkFindings?: number;
  exploitAvailableActiveFindingsCount?: number;
  fixAvailableActiveFindingsCount?: number;
}
export interface ContainerImageAggregationResponse {
  resourceId: string;
  cloudProvider?: string;
  cloudAccountId?: string;
  cloudPartition?: string;
  cloudRegion?: string;
  cloudOrgId?: string;
  imageDigest?: string;
  repository?: string;
  registry?: string;
  architecture?: string;
  imageTags?: string[];
  accountId?: string;
  severityCounts?: SeverityCounts;
  lastInUseAt?: Date;
  inUseCount?: number;
  exploitAvailableActiveFindingsCount?: number;
  fixAvailableActiveFindingsCount?: number;
}
export interface ServerlessFunctionAggregationResponse {
  resourceId: string;
  cloudProvider?: string;
  cloudAccountId?: string;
  cloudPartition?: string;
  cloudRegion?: string;
  cloudOrgId?: string;
  functionName?: string;
  runtime?: string;
  tags?: { [key: string]: string | undefined };
  accountId?: string;
  severityCounts?: SeverityCounts;
  lastModifiedAt?: Date;
  exploitAvailableActiveFindingsCount?: number;
  fixAvailableActiveFindingsCount?: number;
}
export type AggregationResponse =
  | {
      accountAggregation: AccountAggregationResponse;
      amiAggregation?: never;
      awsEcrContainerAggregation?: never;
      ec2InstanceAggregation?: never;
      findingTypeAggregation?: never;
      imageLayerAggregation?: never;
      packageAggregation?: never;
      repositoryAggregation?: never;
      titleAggregation?: never;
      lambdaLayerAggregation?: never;
      lambdaFunctionAggregation?: never;
      codeRepositoryAggregation?: never;
      vmInstanceAggregation?: never;
      containerImageAggregation?: never;
      serverlessFunctionAggregation?: never;
    }
  | {
      accountAggregation?: never;
      amiAggregation: AmiAggregationResponse;
      awsEcrContainerAggregation?: never;
      ec2InstanceAggregation?: never;
      findingTypeAggregation?: never;
      imageLayerAggregation?: never;
      packageAggregation?: never;
      repositoryAggregation?: never;
      titleAggregation?: never;
      lambdaLayerAggregation?: never;
      lambdaFunctionAggregation?: never;
      codeRepositoryAggregation?: never;
      vmInstanceAggregation?: never;
      containerImageAggregation?: never;
      serverlessFunctionAggregation?: never;
    }
  | {
      accountAggregation?: never;
      amiAggregation?: never;
      awsEcrContainerAggregation: AwsEcrContainerAggregationResponse;
      ec2InstanceAggregation?: never;
      findingTypeAggregation?: never;
      imageLayerAggregation?: never;
      packageAggregation?: never;
      repositoryAggregation?: never;
      titleAggregation?: never;
      lambdaLayerAggregation?: never;
      lambdaFunctionAggregation?: never;
      codeRepositoryAggregation?: never;
      vmInstanceAggregation?: never;
      containerImageAggregation?: never;
      serverlessFunctionAggregation?: never;
    }
  | {
      accountAggregation?: never;
      amiAggregation?: never;
      awsEcrContainerAggregation?: never;
      ec2InstanceAggregation: Ec2InstanceAggregationResponse;
      findingTypeAggregation?: never;
      imageLayerAggregation?: never;
      packageAggregation?: never;
      repositoryAggregation?: never;
      titleAggregation?: never;
      lambdaLayerAggregation?: never;
      lambdaFunctionAggregation?: never;
      codeRepositoryAggregation?: never;
      vmInstanceAggregation?: never;
      containerImageAggregation?: never;
      serverlessFunctionAggregation?: never;
    }
  | {
      accountAggregation?: never;
      amiAggregation?: never;
      awsEcrContainerAggregation?: never;
      ec2InstanceAggregation?: never;
      findingTypeAggregation: FindingTypeAggregationResponse;
      imageLayerAggregation?: never;
      packageAggregation?: never;
      repositoryAggregation?: never;
      titleAggregation?: never;
      lambdaLayerAggregation?: never;
      lambdaFunctionAggregation?: never;
      codeRepositoryAggregation?: never;
      vmInstanceAggregation?: never;
      containerImageAggregation?: never;
      serverlessFunctionAggregation?: never;
    }
  | {
      accountAggregation?: never;
      amiAggregation?: never;
      awsEcrContainerAggregation?: never;
      ec2InstanceAggregation?: never;
      findingTypeAggregation?: never;
      imageLayerAggregation: ImageLayerAggregationResponse;
      packageAggregation?: never;
      repositoryAggregation?: never;
      titleAggregation?: never;
      lambdaLayerAggregation?: never;
      lambdaFunctionAggregation?: never;
      codeRepositoryAggregation?: never;
      vmInstanceAggregation?: never;
      containerImageAggregation?: never;
      serverlessFunctionAggregation?: never;
    }
  | {
      accountAggregation?: never;
      amiAggregation?: never;
      awsEcrContainerAggregation?: never;
      ec2InstanceAggregation?: never;
      findingTypeAggregation?: never;
      imageLayerAggregation?: never;
      packageAggregation: PackageAggregationResponse;
      repositoryAggregation?: never;
      titleAggregation?: never;
      lambdaLayerAggregation?: never;
      lambdaFunctionAggregation?: never;
      codeRepositoryAggregation?: never;
      vmInstanceAggregation?: never;
      containerImageAggregation?: never;
      serverlessFunctionAggregation?: never;
    }
  | {
      accountAggregation?: never;
      amiAggregation?: never;
      awsEcrContainerAggregation?: never;
      ec2InstanceAggregation?: never;
      findingTypeAggregation?: never;
      imageLayerAggregation?: never;
      packageAggregation?: never;
      repositoryAggregation: RepositoryAggregationResponse;
      titleAggregation?: never;
      lambdaLayerAggregation?: never;
      lambdaFunctionAggregation?: never;
      codeRepositoryAggregation?: never;
      vmInstanceAggregation?: never;
      containerImageAggregation?: never;
      serverlessFunctionAggregation?: never;
    }
  | {
      accountAggregation?: never;
      amiAggregation?: never;
      awsEcrContainerAggregation?: never;
      ec2InstanceAggregation?: never;
      findingTypeAggregation?: never;
      imageLayerAggregation?: never;
      packageAggregation?: never;
      repositoryAggregation?: never;
      titleAggregation: TitleAggregationResponse;
      lambdaLayerAggregation?: never;
      lambdaFunctionAggregation?: never;
      codeRepositoryAggregation?: never;
      vmInstanceAggregation?: never;
      containerImageAggregation?: never;
      serverlessFunctionAggregation?: never;
    }
  | {
      accountAggregation?: never;
      amiAggregation?: never;
      awsEcrContainerAggregation?: never;
      ec2InstanceAggregation?: never;
      findingTypeAggregation?: never;
      imageLayerAggregation?: never;
      packageAggregation?: never;
      repositoryAggregation?: never;
      titleAggregation?: never;
      lambdaLayerAggregation: LambdaLayerAggregationResponse;
      lambdaFunctionAggregation?: never;
      codeRepositoryAggregation?: never;
      vmInstanceAggregation?: never;
      containerImageAggregation?: never;
      serverlessFunctionAggregation?: never;
    }
  | {
      accountAggregation?: never;
      amiAggregation?: never;
      awsEcrContainerAggregation?: never;
      ec2InstanceAggregation?: never;
      findingTypeAggregation?: never;
      imageLayerAggregation?: never;
      packageAggregation?: never;
      repositoryAggregation?: never;
      titleAggregation?: never;
      lambdaLayerAggregation?: never;
      lambdaFunctionAggregation: LambdaFunctionAggregationResponse;
      codeRepositoryAggregation?: never;
      vmInstanceAggregation?: never;
      containerImageAggregation?: never;
      serverlessFunctionAggregation?: never;
    }
  | {
      accountAggregation?: never;
      amiAggregation?: never;
      awsEcrContainerAggregation?: never;
      ec2InstanceAggregation?: never;
      findingTypeAggregation?: never;
      imageLayerAggregation?: never;
      packageAggregation?: never;
      repositoryAggregation?: never;
      titleAggregation?: never;
      lambdaLayerAggregation?: never;
      lambdaFunctionAggregation?: never;
      codeRepositoryAggregation: CodeRepositoryAggregationResponse;
      vmInstanceAggregation?: never;
      containerImageAggregation?: never;
      serverlessFunctionAggregation?: never;
    }
  | {
      accountAggregation?: never;
      amiAggregation?: never;
      awsEcrContainerAggregation?: never;
      ec2InstanceAggregation?: never;
      findingTypeAggregation?: never;
      imageLayerAggregation?: never;
      packageAggregation?: never;
      repositoryAggregation?: never;
      titleAggregation?: never;
      lambdaLayerAggregation?: never;
      lambdaFunctionAggregation?: never;
      codeRepositoryAggregation?: never;
      vmInstanceAggregation: VmInstanceAggregationResponse;
      containerImageAggregation?: never;
      serverlessFunctionAggregation?: never;
    }
  | {
      accountAggregation?: never;
      amiAggregation?: never;
      awsEcrContainerAggregation?: never;
      ec2InstanceAggregation?: never;
      findingTypeAggregation?: never;
      imageLayerAggregation?: never;
      packageAggregation?: never;
      repositoryAggregation?: never;
      titleAggregation?: never;
      lambdaLayerAggregation?: never;
      lambdaFunctionAggregation?: never;
      codeRepositoryAggregation?: never;
      vmInstanceAggregation?: never;
      containerImageAggregation: ContainerImageAggregationResponse;
      serverlessFunctionAggregation?: never;
    }
  | {
      accountAggregation?: never;
      amiAggregation?: never;
      awsEcrContainerAggregation?: never;
      ec2InstanceAggregation?: never;
      findingTypeAggregation?: never;
      imageLayerAggregation?: never;
      packageAggregation?: never;
      repositoryAggregation?: never;
      titleAggregation?: never;
      lambdaLayerAggregation?: never;
      lambdaFunctionAggregation?: never;
      codeRepositoryAggregation?: never;
      vmInstanceAggregation?: never;
      containerImageAggregation?: never;
      serverlessFunctionAggregation: ServerlessFunctionAggregationResponse;
    };
export type AggregationResponseList = AggregationResponse[];
export interface ListFindingAggregationsResponse {
  aggregationType: string;
  responses?: AggregationResponse[];
  nextToken?: string;
}
export type ListFindingsMaxResults = number;
export type SortField = string;
export interface SortCriteria {
  field: string;
  sortOrder: string;
}
export interface ListFindingsRequest {
  maxResults?: number;
  nextToken?: string;
  filterCriteria?: FilterCriteria;
  sortCriteria?: SortCriteria;
}
export type FindingType = string;
export type FindingDescription = string;
export type FindingTitle = string;
export interface Recommendation {
  text?: string;
  Url?: string;
}
export interface Remediation {
  recommendation?: Recommendation;
}
export type Severity = string;
export type FindingStatus = string;
export type IpV4Address = string;
export type IpV4AddressList = string[];
export type IpV6Address = string;
export type IpV6AddressList = string[];
export type Platform = string;
export interface AwsEc2InstanceDetails {
  type?: string;
  imageId?: string;
  ipV4Addresses?: string[];
  ipV6Addresses?: string[];
  keyName?: string;
  iamInstanceProfileArn?: string;
  vpcId?: string;
  subnetId?: string;
  launchedAt?: Date;
  platform?: string;
}
export type ImageTagList = string[];
export type ImageHash = string;
export interface AwsEcrContainerImageDetails {
  repositoryName: string;
  imageTags?: string[];
  pushedAt?: Date;
  author?: string;
  architecture?: string;
  imageHash: string;
  registry: string;
  platform?: string;
  lastInUseAt?: Date;
  inUseCount?: number;
}
export type FunctionName = string;
export type Version = string;
export type ExecutionRoleArn = string;
export type LambdaLayerArn = string;
export type LayerList = string[];
export type SubnetId = string;
export type SubnetIdList = string[];
export type SecurityGroupId = string;
export type SecurityGroupIdList = string[];
export type VpcId = string;
export interface LambdaVpcConfig {
  subnetIds?: string[];
  securityGroupIds?: string[];
  vpcId?: string;
}
export type PackageType = string;
export type Architecture = string;
export type ArchitectureList = string[];
export interface AwsLambdaFunctionDetails {
  functionName: string;
  runtime: string;
  codeSha256: string;
  version: string;
  executionRoleArn: string;
  layers?: string[];
  vpcConfig?: LambdaVpcConfig;
  packageType?: string;
  architectures?: string[];
  lastModifiedAt?: Date;
}
export type CodeRepositoryProjectName = string;
export type CodeRepositoryProviderType = string;
export interface CodeRepositoryDetails {
  projectName?: string;
  integrationArn?: string;
  providerType?: string;
}
export type CloudSubnetIdList = string[];
export type CloudSecurityGroupIdList = string[];
export interface Vm {
  type?: string;
  vmName?: string;
  vmImageReference?: string;
  ipV4Addresses?: string[];
  ipV6Addresses?: string[];
  networkId?: string;
  subnetIds?: string[];
  securityGroupIds?: string[];
  launchedAt?: Date;
  platform?: string;
  executionRole?: string;
  keyName?: string;
}
export interface Image {
  repositoryName?: string;
  registry?: string;
  imageTags?: string[];
  imageDigest?: string;
  pushedAt?: Date;
  architecture?: string;
  author?: string;
  inUseCount?: number;
  lastInUseAt?: Date;
  platform?: string;
}
export type ServerlessFunctionLayerUrn = string;
export type ServerlessFunctionLayerList = string[];
export interface ServerlessFunction {
  serverlessFunctionName?: string;
  runtime?: string;
  version?: string;
  codeDigest?: string;
  lastModifiedAt?: Date;
  networkId?: string;
  subnetIds?: string[];
  securityGroupIds?: string[];
  executionRole?: string;
  packageType?: string;
  architectures?: string[];
  layers?: string[];
}
export interface ResourceDetails {
  awsEc2Instance?: AwsEc2InstanceDetails;
  awsEcrContainerImage?: AwsEcrContainerImageDetails;
  awsLambdaFunction?: AwsLambdaFunctionDetails;
  codeRepository?: CodeRepositoryDetails;
  vm?: Vm;
  image?: Image;
  serverlessFunction?: ServerlessFunction;
}
export interface Resource {
  type: string;
  id: string;
  partition?: string;
  region?: string;
  tags?: { [key: string]: string | undefined };
  details?: ResourceDetails;
  provider?: string;
  providerAccountId?: string;
  providerOrgId?: string;
}
export type ResourceList = Resource[];
export interface CvssScoreAdjustment {
  metric: string;
  reason: string;
}
export type CvssScoreAdjustmentList = CvssScoreAdjustment[];
export interface CvssScoreDetails {
  scoreSource: string;
  cvssSource?: string;
  version: string;
  score: number;
  scoringVector: string;
  adjustments?: CvssScoreAdjustment[];
}
export interface InspectorScoreDetails {
  adjustedCvss?: CvssScoreDetails;
}
export interface PortRange {
  begin: number;
  end: number;
}
export type NetworkProtocol = string;
export type Component = string;
export type ComponentType = string;
export type ComponentArn = string;
export interface Step {
  componentId: string;
  componentType: string;
  componentArn?: string;
}
export type StepList = Step[];
export interface NetworkPath {
  steps?: Step[];
}
export interface NetworkReachabilityDetails {
  openPortRange: PortRange;
  protocol: string;
  networkPath: NetworkPath;
}
export type VulnerabilityId = string;
export type PackageName = string;
export type PackageVersion = string;
export type SourceLayerHash = string;
export type PackageEpoch = number;
export type PackageRelease = string;
export type PackageArchitecture = string;
export type PackageManager = string;
export type FilePath = string;
export type VulnerablePackageRemediation = string;
export interface VulnerablePackage {
  name: string;
  version: string;
  sourceLayerHash?: string;
  epoch?: number;
  release?: string;
  arch?: string;
  packageManager?: string;
  filePath?: string;
  fixedInVersion?: string;
  remediation?: string;
  sourceLambdaLayerArn?: string;
}
export type VulnerablePackageList = VulnerablePackage[];
export interface CvssScore {
  baseScore: number;
  scoringVector: string;
  version: string;
  source: string;
}
export type CvssScoreList = CvssScore[];
export type VulnerabilityIdList = string[];
export type NonEmptyStringList = string[];
export interface PackageVulnerabilityDetails {
  vulnerabilityId: string;
  vulnerablePackages?: VulnerablePackage[];
  source: string;
  cvss?: CvssScore[];
  relatedVulnerabilities?: string[];
  sourceUrl?: string;
  vendorSeverity?: string;
  vendorCreatedAt?: Date;
  vendorUpdatedAt?: Date;
  referenceUrls?: string[];
}
export type FixAvailable = string;
export type ExploitAvailable = string;
export interface ExploitabilityDetails {
  lastKnownExploitAt?: Date;
}
export interface CodeFilePath {
  fileName: string;
  filePath: string;
  startLine: number;
  endLine: number;
}
export type DetectorTagList = string[];
export type ReferenceUrls = string[];
export type CweList = string[];
export interface CodeVulnerabilityDetails {
  filePath: CodeFilePath;
  detectorTags?: string[];
  referenceUrls?: string[];
  ruleId?: string;
  sourceLambdaLayerArn?: string;
  detectorId: string;
  detectorName: string;
  cwes: string[];
}
export type EpssScoreValue = number;
export interface EpssDetails {
  score?: number;
}
export interface Finding {
  findingArn: string;
  awsAccountId: string;
  type: string;
  description: string;
  title?: string;
  remediation: Remediation;
  severity: string;
  firstObservedAt: Date;
  lastObservedAt: Date;
  updatedAt?: Date;
  status: string;
  resources: Resource[];
  inspectorScore?: number;
  inspectorScoreDetails?: InspectorScoreDetails;
  networkReachabilityDetails?: NetworkReachabilityDetails;
  packageVulnerabilityDetails?: PackageVulnerabilityDetails;
  fixAvailable?: string;
  exploitAvailable?: string;
  exploitabilityDetails?: ExploitabilityDetails;
  codeVulnerabilityDetails?: CodeVulnerabilityDetails;
  epss?: EpssDetails;
}
export type FindingList = Finding[];
export interface ListFindingsResponse {
  nextToken?: string;
  findings?: Finding[];
}
export type ListMembersMaxResults = number;
export interface ListMembersRequest {
  onlyAssociated?: boolean;
  maxResults?: number;
  nextToken?: string;
}
export type MemberList = Member[];
export interface ListMembersResponse {
  members?: Member[];
  nextToken?: string;
}
export type Arn = string;
export interface ListTagsForResourceRequest {
  resourceArn: string;
}
export interface ListTagsForResourceResponse {
  tags?: { [key: string]: string | undefined };
}
export type ListUsageTotalsMaxResults = number;
export type ListUsageTotalsNextToken = string;
export type UsageAccountId = string;
export type UsageAccountIdList = string[];
export interface ListUsageTotalsRequest {
  maxResults?: number;
  nextToken?: string;
  accountIds?: string[];
}
export type UsageType = string;
export type UsageValue = number;
export type MonthlyCostEstimate = number;
export type Currency = string;
export interface Usage {
  type?: string;
  total?: number;
  estimatedMonthlyCost?: number;
  currency?: string;
  cloudProvider?: string;
}
export type UsageList = Usage[];
export interface UsageTotal {
  accountId?: string;
  usage?: Usage[];
}
export type UsageTotalList = UsageTotal[];
export interface ListUsageTotalsResponse {
  nextToken?: string;
  totals?: UsageTotal[];
}
export interface ResetEncryptionKeyRequest {
  scanType: string;
  resourceType: string;
}
export interface ResetEncryptionKeyResponse {}
export type VulnId = string;
export type VulnIdList = string[];
export interface SearchVulnerabilitiesFilterCriteria {
  vulnerabilityIds: string[];
}
export interface SearchVulnerabilitiesRequest {
  filterCriteria: SearchVulnerabilitiesFilterCriteria;
  nextToken?: string;
}
export type VulnerabilitySource = string;
export type VulnerabilityDescription = string;
export type Target = string;
export type Targets = string[];
export interface AtigData {
  firstSeen?: Date;
  lastSeen?: Date;
  targets?: string[];
  ttps?: string[];
}
export type VendorSeverity = string;
export type CvssBaseScore = number;
export type CvssScoringVector = string;
export interface Cvss4 {
  baseScore?: number;
  scoringVector?: string;
}
export interface Cvss3 {
  baseScore?: number;
  scoringVector?: string;
}
export type RelatedVulnerability = string;
export type RelatedVulnerabilities = string[];
export interface Cvss2 {
  baseScore?: number;
  scoringVector?: string;
}
export type VendorCreatedAt = Date;
export type VendorUpdatedAt = Date;
export type VulnerabilitySourceUrl = string;
export type DetectionPlatforms = string[];
export type EpssScore = number;
export interface Epss {
  score?: number;
}
export interface Vulnerability {
  id: string;
  cwes?: string[];
  cisaData?: CisaData;
  source?: string;
  description?: string;
  atigData?: AtigData;
  vendorSeverity?: string;
  cvss4?: Cvss4;
  cvss3?: Cvss3;
  relatedVulnerabilities?: string[];
  cvss2?: Cvss2;
  vendorCreatedAt?: Date;
  vendorUpdatedAt?: Date;
  sourceUrl?: string;
  referenceUrls?: string[];
  exploitObserved?: ExploitObserved;
  detectionPlatforms?: string[];
  epss?: Epss;
}
export type Vulnerabilities = Vulnerability[];
export interface SearchVulnerabilitiesResponse {
  vulnerabilities: Vulnerability[];
  nextToken?: string;
}
export type UUID = string;
export interface SendCisSessionHealthRequest {
  scanJobId: string;
  sessionToken: string;
}
export interface SendCisSessionHealthResponse {}
export type RuleId = string;
export type CisRuleStatus =
  | "FAILED"
  | "PASSED"
  | "NOT_EVALUATED"
  | "INFORMATIONAL"
  | "UNKNOWN"
  | "NOT_APPLICABLE"
  | "ERROR"
  | (string & {});
export type CisRuleDetails = Uint8Array;
export interface CisSessionMessage {
  ruleId: string;
  status: CisRuleStatus;
  cisRuleDetails: Uint8Array;
}
export type CisSessionMessages = CisSessionMessage[];
export interface SendCisSessionTelemetryRequest {
  scanJobId: string;
  sessionToken: string;
  messages: CisSessionMessage[];
}
export interface SendCisSessionTelemetryResponse {}
export interface StartCisSessionMessage {
  sessionToken: string;
}
export interface StartCisSessionRequest {
  scanJobId: string;
  message: StartCisSessionMessage;
}
export interface StartCisSessionResponse {}
export type CodeSecurityClientToken = string;
export interface StartCodeSecurityScanRequest {
  clientToken?: string;
  resource: CodeSecurityResource;
}
export interface StartCodeSecurityScanResponse {
  scanId?: string;
  status?: CodeScanStatus;
}
export type StopCisSessionStatus =
  | "SUCCESS"
  | "FAILED"
  | "INTERRUPTED"
  | "UNSUPPORTED_OS"
  | (string & {});
export type Reason = string;
export type CheckCount = number;
export interface StopCisMessageProgress {
  totalChecks?: number;
  successfulChecks?: number;
  failedChecks?: number;
  notEvaluatedChecks?: number;
  unknownChecks?: number;
  notApplicableChecks?: number;
  informationalChecks?: number;
  errorChecks?: number;
}
export type Vendor = string;
export type Product = string;
export type PlatformVersion = string;
export interface ComputePlatform {
  vendor?: string;
  product?: string;
  version?: string;
}
export type BenchmarkVersion = string;
export type BenchmarkProfile = string;
export interface StopCisSessionMessage {
  status: StopCisSessionStatus;
  reason?: string;
  progress: StopCisMessageProgress;
  computePlatform?: ComputePlatform;
  benchmarkVersion?: string;
  benchmarkProfile?: string;
}
export interface StopCisSessionRequest {
  scanJobId: string;
  sessionToken: string;
  message: StopCisSessionMessage;
}
export interface StopCisSessionResponse {}
export interface TagResourceRequest {
  resourceArn: string;
  tags: { [key: string]: string | undefined };
}
export interface TagResourceResponse {}
export type TagKey = string;
export type TagKeyList = string[];
export interface UntagResourceRequest {
  resourceArn: string;
  tagKeys: string[];
}
export interface UntagResourceResponse {}
export interface UpdateCisTargets {
  accountIds?: string[];
  targetResourceTags?: { [key: string]: string[] | undefined };
}
export interface UpdateCisScanConfigurationRequest {
  scanConfigurationArn: string;
  scanName?: string;
  securityLevel?: CisSecurityLevel;
  schedule?: Schedule;
  targets?: UpdateCisTargets;
}
export interface UpdateCisScanConfigurationResponse {
  scanConfigurationArn: string;
}
export type GitLabAuthCode = string | redacted.Redacted<string>;
export interface UpdateGitLabSelfManagedIntegrationDetail {
  authCode: string | redacted.Redacted<string>;
}
export type GitHubAuthCode = string | redacted.Redacted<string>;
export type GitHubInstallationId = string;
export interface UpdateGitHubIntegrationDetail {
  code: string | redacted.Redacted<string>;
  installationId: string;
}
export type UpdateIntegrationDetails =
  | { gitlabSelfManaged: UpdateGitLabSelfManagedIntegrationDetail; github?: never }
  | { gitlabSelfManaged?: never; github: UpdateGitHubIntegrationDetail };
export interface UpdateCodeSecurityIntegrationRequest {
  integrationArn: string;
  details: UpdateIntegrationDetails;
}
export interface UpdateCodeSecurityIntegrationResponse {
  integrationArn: string;
  status: IntegrationStatus;
}
export interface UpdateCodeSecurityScanConfigurationRequest {
  scanConfigurationArn: string;
  configuration: CodeSecurityScanConfiguration;
}
export interface UpdateCodeSecurityScanConfigurationResponse {
  scanConfigurationArn?: string;
}
export interface EcrConfiguration {
  rescanDuration: string;
  pullDateRescanDuration?: string;
  pullDateRescanMode?: string;
}
export interface Ec2Configuration {
  scanMode: string;
  activateVMScanner?: boolean;
}
export type InheritanceMode = string;
export interface UpdateConfigurationInheritance {
  ec2Configuration?: string;
  ecrConfiguration?: string;
}
export interface UpdateConfigurationRequest {
  accountId?: string;
  ecrConfiguration?: EcrConfiguration;
  ec2Configuration?: Ec2Configuration;
  updateConfigurationInheritance?: UpdateConfigurationInheritance;
}
export interface UpdateConfigurationResponse {}
export interface AzureProviderDetailUpdate {
  azureRegions?: string[];
  scopeConfiguration?: AzureScopeConfigurationInput;
  autoInstallVMScanner?: boolean;
}
export type ProviderDetailUpdate = { azure: AzureProviderDetailUpdate };
export interface UpdateConnectorRequest {
  connectorArn: string;
  description?: string;
  providerDetail?: ProviderDetailUpdate;
}
export interface UpdateConnectorResponse {
  connectorArn?: string;
}
export interface UpdateConnectorScanConfigurationRequest {
  awsConfigConnectorArn: string;
  scanConfiguration: ConnectorScanConfiguration;
}
export interface UpdateConnectorScanConfigurationResponse {}
export interface UpdateEc2DeepInspectionConfigurationRequest {
  activateDeepInspection?: boolean;
  packagePaths?: string[];
}
export interface UpdateEc2DeepInspectionConfigurationResponse {
  packagePaths?: string[];
  orgPackagePaths?: string[];
  status?: string;
  errorMessage?: string;
}
export interface UpdateEncryptionKeyRequest {
  kmsKeyId: string;
  scanType: string;
  resourceType: string;
}
export interface UpdateEncryptionKeyResponse {}
export interface UpdateFilterRequest {
  action?: string;
  description?: string;
  filterCriteria?: FilterCriteria;
  name?: string;
  filterArn: string;
  reason?: string;
}
export interface UpdateFilterResponse {
  arn: string;
}
export interface UpdateOrganizationConfigurationRequest {
  autoEnable: AutoEnable;
}
export interface UpdateOrganizationConfigurationResponse {
  autoEnable: AutoEnable;
}
export interface UpdateOrgEc2DeepInspectionConfigurationRequest {
  orgPackagePaths: string[];
}
export interface UpdateOrgEc2DeepInspectionConfigurationResponse {}
export type ValidationExceptionReason = string;
export interface ValidationExceptionField {
  name: string;
  message: string;
}
export type ValidationExceptionFields = ValidationExceptionField[];
export type AssociateMemberError =
  | AccessDeniedException
  | InternalServerException
  | ServiceQuotaExceededException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Associates an Amazon Web Services account with an Amazon Inspector delegated administrator. An HTTP 200 response
 * indicates the association was successfully started, but doesn't indicate whether it was
 * completed. You can check if the association completed by using ListMembers for multiple
 * accounts or GetMembers for a single account.
 */
export const associateMember: API.OperationMethod<
  AssociateMemberRequest,
  AssociateMemberResponse,
  AssociateMemberError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(0, __c0, 0) as any as S.Schema<AssociateMemberRequest>,
  output: __S(1, __c0, 1) as any as S.Schema<AssociateMemberResponse>,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ServiceQuotaExceededException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "AssociateMember",
}));

export type BatchAssociateCodeSecurityScanConfigurationError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Associates multiple code repositories with an Amazon Inspector code security scan
 * configuration.
 */
export const batchAssociateCodeSecurityScanConfiguration: API.OperationMethod<
  BatchAssociateCodeSecurityScanConfigurationRequest,
  BatchAssociateCodeSecurityScanConfigurationResponse,
  BatchAssociateCodeSecurityScanConfigurationError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(5, __c0, 5) as any as S.Schema<BatchAssociateCodeSecurityScanConfigurationRequest>,
  output: __S(10, __c1, 2) as any as S.Schema<BatchAssociateCodeSecurityScanConfigurationResponse>,
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
  operationName: "BatchAssociateCodeSecurityScanConfiguration",
}));

export type BatchDisassociateCodeSecurityScanConfigurationError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Disassociates multiple code repositories from an Amazon Inspector code security scan
 * configuration.
 */
export const batchDisassociateCodeSecurityScanConfiguration: API.OperationMethod<
  BatchDisassociateCodeSecurityScanConfigurationRequest,
  BatchDisassociateCodeSecurityScanConfigurationResponse,
  BatchDisassociateCodeSecurityScanConfigurationError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(11, __c1, 3) as any as S.Schema<BatchDisassociateCodeSecurityScanConfigurationRequest>,
  output: __S(
    10,
    __c1,
    2,
  ) as any as S.Schema<BatchDisassociateCodeSecurityScanConfigurationResponse>,
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
  operationName: "BatchDisassociateCodeSecurityScanConfiguration",
}));

export type BatchGetAccountStatusError =
  | AccessDeniedException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Retrieves the Amazon Inspector status of multiple Amazon Web Services accounts within your environment.
 */
export const batchGetAccountStatus: API.OperationMethod<
  BatchGetAccountStatusRequest,
  BatchGetAccountStatusResponse,
  BatchGetAccountStatusError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(13, __c1, 5) as any as S.Schema<BatchGetAccountStatusRequest>,
  output: __S(21, __c2, 5) as any as S.Schema<BatchGetAccountStatusResponse>,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "BatchGetAccountStatus",
}));

export type BatchGetCodeSnippetError =
  | AccessDeniedException
  | InternalServerException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Retrieves code snippets from findings that Amazon Inspector detected code vulnerabilities
 * in.
 */
export const batchGetCodeSnippet: API.OperationMethod<
  BatchGetCodeSnippetRequest,
  BatchGetCodeSnippetResponse,
  BatchGetCodeSnippetError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(22, __c2, 6) as any as S.Schema<BatchGetCodeSnippetRequest>,
  output: __S(31, __c3, 7) as any as S.Schema<BatchGetCodeSnippetResponse>,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "BatchGetCodeSnippet",
}));

export type BatchGetFindingDetailsError =
  | AccessDeniedException
  | InternalServerException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Gets vulnerability details for findings.
 */
export const batchGetFindingDetails: API.OperationMethod<
  BatchGetFindingDetailsRequest,
  BatchGetFindingDetailsResponse,
  BatchGetFindingDetailsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(32, __c4, 0) as any as S.Schema<BatchGetFindingDetailsRequest>,
  output: __S(39, __c4, 7) as any as S.Schema<BatchGetFindingDetailsResponse>,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "BatchGetFindingDetails",
}));

export type BatchGetFreeTrialInfoError =
  | AccessDeniedException
  | InternalServerException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Gets free trial status for multiple Amazon Web Services accounts.
 */
export const batchGetFreeTrialInfo: API.OperationMethod<
  BatchGetFreeTrialInfoRequest,
  BatchGetFreeTrialInfoResponse,
  BatchGetFreeTrialInfoError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(40, __c5, 0) as any as S.Schema<BatchGetFreeTrialInfoRequest>,
  output: __S(47, __c5, 7) as any as S.Schema<BatchGetFreeTrialInfoResponse>,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "BatchGetFreeTrialInfo",
}));

export type BatchGetMemberEc2DeepInspectionStatusError =
  | AccessDeniedException
  | InternalServerException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Retrieves Amazon Inspector deep inspection activation status of multiple member accounts within
 * your organization. You must be the delegated administrator of an organization in Amazon Inspector to
 * use this API.
 */
export const batchGetMemberEc2DeepInspectionStatus: API.OperationMethod<
  BatchGetMemberEc2DeepInspectionStatusRequest,
  BatchGetMemberEc2DeepInspectionStatusResponse,
  BatchGetMemberEc2DeepInspectionStatusError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(48, __c6, 0) as any as S.Schema<BatchGetMemberEc2DeepInspectionStatusRequest>,
  output: __S(53, __c6, 5) as any as S.Schema<BatchGetMemberEc2DeepInspectionStatusResponse>,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "BatchGetMemberEc2DeepInspectionStatus",
}));

export type BatchUpdateMemberEc2DeepInspectionStatusError =
  | AccessDeniedException
  | InternalServerException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Activates or deactivates Amazon Inspector deep inspection for the provided member accounts in your
 * organization. You must be the delegated administrator of an organization in Amazon Inspector to use
 * this API.
 */
export const batchUpdateMemberEc2DeepInspectionStatus: API.OperationMethod<
  BatchUpdateMemberEc2DeepInspectionStatusRequest,
  BatchUpdateMemberEc2DeepInspectionStatusResponse,
  BatchUpdateMemberEc2DeepInspectionStatusError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(56, __c7, 0) as any as S.Schema<BatchUpdateMemberEc2DeepInspectionStatusRequest>,
  output: __S(53, __c6, 5) as any as S.Schema<BatchUpdateMemberEc2DeepInspectionStatusResponse>,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "BatchUpdateMemberEc2DeepInspectionStatus",
}));

export type CancelFindingsReportError =
  | AccessDeniedException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Cancels the given findings report.
 */
export const cancelFindingsReport: API.OperationMethod<
  CancelFindingsReportRequest,
  CancelFindingsReportResponse,
  CancelFindingsReportError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(57, __c7, 1) as any as S.Schema<CancelFindingsReportRequest>,
  output: __S(58, __c7, 2) as any as S.Schema<CancelFindingsReportResponse>,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "CancelFindingsReport",
}));

export type CancelSbomExportError =
  | AccessDeniedException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Cancels a software bill of materials (SBOM) report.
 */
export const cancelSbomExport: API.OperationMethod<
  CancelSbomExportRequest,
  CancelSbomExportResponse,
  CancelSbomExportError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(59, __c7, 3) as any as S.Schema<CancelSbomExportRequest>,
  output: __S(60, __c7, 4) as any as S.Schema<CancelSbomExportResponse>,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "CancelSbomExport",
}));

export type CreateCisScanConfigurationError =
  | AccessDeniedException
  | InternalServerException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Creates a CIS scan configuration.
 */
export const createCisScanConfiguration: API.OperationMethod<
  CreateCisScanConfigurationRequest,
  CreateCisScanConfigurationResponse,
  CreateCisScanConfigurationError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(71, __c8, 7) as any as S.Schema<CreateCisScanConfigurationRequest>,
  output: __S(72, __c9, 0) as any as S.Schema<CreateCisScanConfigurationResponse>,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "CreateCisScanConfiguration",
}));

export type CreateCodeSecurityIntegrationError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ServiceQuotaExceededException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Creates a code security integration with a source code repository provider.
 *
 * After calling the `CreateCodeSecurityIntegration` operation, you complete
 * authentication and authorization with your provider. Next you call the
 * `UpdateCodeSecurityIntegration` operation to provide the `details`
 * to complete the integration setup
 */
export const createCodeSecurityIntegration: API.OperationMethod<
  CreateCodeSecurityIntegrationRequest,
  CreateCodeSecurityIntegrationResponse,
  CreateCodeSecurityIntegrationError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(75, __c9, 3) as any as S.Schema<CreateCodeSecurityIntegrationRequest>,
  output: __S(76, __c9, 4) as any as S.Schema<CreateCodeSecurityIntegrationResponse>,
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
  operationName: "CreateCodeSecurityIntegration",
}));

export type CreateCodeSecurityScanConfigurationError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ServiceQuotaExceededException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Creates a scan configuration for code security scanning.
 */
export const createCodeSecurityScanConfiguration: API.OperationMethod<
  CreateCodeSecurityScanConfigurationRequest,
  CreateCodeSecurityScanConfigurationResponse,
  CreateCodeSecurityScanConfigurationError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(82, __c10, 2) as any as S.Schema<CreateCodeSecurityScanConfigurationRequest>,
  output: __S(83, __c10, 3) as any as S.Schema<CreateCodeSecurityScanConfigurationResponse>,
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
  operationName: "CreateCodeSecurityScanConfiguration",
}));

export type CreateConnectorError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ServiceQuotaExceededException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Creates a connector that links an external cloud provider to Amazon Inspector for vulnerability scanning.
 */
export const createConnector: API.OperationMethod<
  CreateConnectorRequest,
  CreateConnectorResponse,
  CreateConnectorError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(89, __c11, 1) as any as S.Schema<CreateConnectorRequest>,
  output: __S(90, __c11, 2) as any as S.Schema<CreateConnectorResponse>,
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
  operationName: "CreateConnector",
}));

export type CreateFilterError =
  | AccessDeniedException
  | BadRequestException
  | InternalServerException
  | ServiceQuotaExceededException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Creates a filter resource using specified filter criteria. When the filter action is set
 * to `SUPPRESS` this action creates a suppression rule.
 */
export const createFilter: API.OperationMethod<
  CreateFilterRequest,
  CreateFilterResponse,
  CreateFilterError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(104, __c13, 0) as any as S.Schema<CreateFilterRequest>,
  output: __S(105, __c13, 1) as any as S.Schema<CreateFilterResponse>,
  errors: [
    AccessDeniedException,
    BadRequestException,
    InternalServerException,
    ServiceQuotaExceededException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "CreateFilter",
}));

export type CreateFindingsReportError =
  | AccessDeniedException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Creates a finding report. By default only `ACTIVE` findings are returned in
 * the report. To see `SUPRESSED` or `CLOSED` findings you must specify
 * a value for the `findingStatus` filter criteria.
 */
export const createFindingsReport: API.OperationMethod<
  CreateFindingsReportRequest,
  CreateFindingsReportResponse,
  CreateFindingsReportError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(107, __c13, 3) as any as S.Schema<CreateFindingsReportRequest>,
  output: __S(108, __c13, 4) as any as S.Schema<CreateFindingsReportResponse>,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "CreateFindingsReport",
}));

export type CreateSbomExportError =
  | AccessDeniedException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Creates a software bill of materials (SBOM) report.
 */
export const createSbomExport: API.OperationMethod<
  CreateSbomExportRequest,
  CreateSbomExportResponse,
  CreateSbomExportError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(110, __c13, 6) as any as S.Schema<CreateSbomExportRequest>,
  output: __S(60, __c7, 4) as any as S.Schema<CreateSbomExportResponse>,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "CreateSbomExport",
}));

export type DeleteCisScanConfigurationError =
  | AccessDeniedException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Deletes a CIS scan configuration.
 */
export const deleteCisScanConfiguration: API.OperationMethod<
  DeleteCisScanConfigurationRequest,
  DeleteCisScanConfigurationResponse,
  DeleteCisScanConfigurationError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(111, __c13, 7) as any as S.Schema<DeleteCisScanConfigurationRequest>,
  output: __S(83, __c10, 3) as any as S.Schema<DeleteCisScanConfigurationResponse>,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DeleteCisScanConfiguration",
}));

export type DeleteCodeSecurityIntegrationError =
  | AccessDeniedException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Deletes a code security integration.
 */
export const deleteCodeSecurityIntegration: API.OperationMethod<
  DeleteCodeSecurityIntegrationRequest,
  DeleteCodeSecurityIntegrationResponse,
  DeleteCodeSecurityIntegrationError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(112, __c14, 0) as any as S.Schema<DeleteCodeSecurityIntegrationRequest>,
  output: __S(113, __c14, 1) as any as S.Schema<DeleteCodeSecurityIntegrationResponse>,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DeleteCodeSecurityIntegration",
}));

export type DeleteCodeSecurityScanConfigurationError =
  | AccessDeniedException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Deletes a code security scan configuration.
 */
export const deleteCodeSecurityScanConfiguration: API.OperationMethod<
  DeleteCodeSecurityScanConfigurationRequest,
  DeleteCodeSecurityScanConfigurationResponse,
  DeleteCodeSecurityScanConfigurationError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(114, __c14, 2) as any as S.Schema<DeleteCodeSecurityScanConfigurationRequest>,
  output: __S(72, __c9, 0) as any as S.Schema<DeleteCodeSecurityScanConfigurationResponse>,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DeleteCodeSecurityScanConfiguration",
}));

export type DeleteConnectorError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Deletes a connector from your account.
 */
export const deleteConnector: API.OperationMethod<
  DeleteConnectorRequest,
  DeleteConnectorResponse,
  DeleteConnectorError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(115, __c14, 3) as any as S.Schema<DeleteConnectorRequest>,
  output: __S(61, __c7, 5) as any as S.Schema<DeleteConnectorResponse>,
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
  operationName: "DeleteConnector",
}));

export type DeleteFilterError =
  | AccessDeniedException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Deletes a filter resource.
 */
export const deleteFilter: API.OperationMethod<
  DeleteFilterRequest,
  DeleteFilterResponse,
  DeleteFilterError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(116, __c14, 4) as any as S.Schema<DeleteFilterRequest>,
  output: __S(105, __c13, 1) as any as S.Schema<DeleteFilterResponse>,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DeleteFilter",
}));

export type DescribeOrganizationConfigurationError =
  | AccessDeniedException
  | InternalServerException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Describe Amazon Inspector configuration settings for an Amazon Web Services organization.
 */
export const describeOrganizationConfiguration: API.OperationMethod<
  DescribeOrganizationConfigurationRequest,
  DescribeOrganizationConfigurationResponse,
  DescribeOrganizationConfigurationError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(117, __c14, 5) as any as S.Schema<DescribeOrganizationConfigurationRequest>,
  output: __S(119, __c14, 7) as any as S.Schema<DescribeOrganizationConfigurationResponse>,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DescribeOrganizationConfiguration",
}));

export type DisableError =
  | AccessDeniedException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Disables Amazon Inspector scans for one or more Amazon Web Services accounts. Disabling all scan types in an
 * account disables the Amazon Inspector service.
 */
export const disable: API.OperationMethod<
  DisableRequest,
  DisableResponse,
  DisableError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(120, __c15, 0) as any as S.Schema<DisableRequest>,
  output: __S(123, __c15, 3) as any as S.Schema<DisableResponse>,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "Disable",
}));

export type DisableDelegatedAdminAccountError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Disables the Amazon Inspector delegated administrator for your organization.
 */
export const disableDelegatedAdminAccount: API.OperationMethod<
  DisableDelegatedAdminAccountRequest,
  DisableDelegatedAdminAccountResponse,
  DisableDelegatedAdminAccountError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(124, __c15, 4) as any as S.Schema<DisableDelegatedAdminAccountRequest>,
  output: __S(125, __c15, 5) as any as S.Schema<DisableDelegatedAdminAccountResponse>,
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
  operationName: "DisableDelegatedAdminAccount",
}));

export type DisassociateMemberError =
  | AccessDeniedException
  | InternalServerException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Disassociates a member account from an Amazon Inspector delegated administrator.
 */
export const disassociateMember: API.OperationMethod<
  DisassociateMemberRequest,
  DisassociateMemberResponse,
  DisassociateMemberError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(126, __c15, 6) as any as S.Schema<DisassociateMemberRequest>,
  output: __S(127, __c15, 7) as any as S.Schema<DisassociateMemberResponse>,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DisassociateMember",
}));

export type EnableError =
  | AccessDeniedException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Enables Amazon Inspector scans for one or more Amazon Web Services accounts.
 */
export const enable: API.OperationMethod<
  EnableRequest,
  EnableResponse,
  EnableError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(128, __c16, 0) as any as S.Schema<EnableRequest>,
  output: __S(123, __c15, 3) as any as S.Schema<EnableResponse>,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "Enable",
}));

export type EnableDelegatedAdminAccountError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Enables the Amazon Inspector delegated administrator for your Organizations organization.
 */
export const enableDelegatedAdminAccount: API.OperationMethod<
  EnableDelegatedAdminAccountRequest,
  EnableDelegatedAdminAccountResponse,
  EnableDelegatedAdminAccountError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(129, __c16, 1) as any as S.Schema<EnableDelegatedAdminAccountRequest>,
  output: __S(125, __c15, 5) as any as S.Schema<EnableDelegatedAdminAccountResponse>,
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
  operationName: "EnableDelegatedAdminAccount",
}));

export type GetCisScanReportError =
  | AccessDeniedException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Retrieves a CIS scan report.
 */
export const getCisScanReport: API.OperationMethod<
  GetCisScanReportRequest,
  GetCisScanReportResponse,
  GetCisScanReportError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(130, __c16, 2) as any as S.Schema<GetCisScanReportRequest>,
  output: __S(131, __c16, 3) as any as S.Schema<GetCisScanReportResponse>,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetCisScanReport",
}));

export type GetCisScanResultDetailsError =
  | AccessDeniedException
  | InternalServerException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Retrieves CIS scan result details.
 */
export const getCisScanResultDetails: API.PaginatedOperationMethod<
  GetCisScanResultDetailsRequest,
  GetCisScanResultDetailsResponse,
  GetCisScanResultDetailsError,
  Credentials | HttpClient.HttpClient,
  CisScanResultDetails
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: __S(137, __c17, 1) as any as S.Schema<GetCisScanResultDetailsRequest>,
  output: __S(140, __c17, 4) as any as S.Schema<GetCisScanResultDetailsResponse>,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetCisScanResultDetails",
  pagination: {
    inputToken: "nextToken",
    outputToken: "nextToken",
    items: "scanResultDetails",
    pageSize: "maxResults",
  } as const,
})) as any;

export type GetClustersForImageError =
  | AccessDeniedException
  | InternalServerException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Returns a list of clusters and metadata associated with an image.
 */
export const getClustersForImage: API.PaginatedOperationMethod<
  GetClustersForImageRequest,
  GetClustersForImageResponse,
  GetClustersForImageError,
  Credentials | HttpClient.HttpClient,
  ClusterInformation
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: __S(142, __c17, 6) as any as S.Schema<GetClustersForImageRequest>,
  output: __S(152, __c19, 0) as any as S.Schema<GetClustersForImageResponse>,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetClustersForImage",
  pagination: {
    inputToken: "nextToken",
    outputToken: "nextToken",
    items: "cluster",
    pageSize: "maxResults",
  } as const,
})) as any;

export type GetCodeSecurityIntegrationError =
  | AccessDeniedException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Retrieves information about a code security integration.
 */
export const getCodeSecurityIntegration: API.OperationMethod<
  GetCodeSecurityIntegrationRequest,
  GetCodeSecurityIntegrationResponse,
  GetCodeSecurityIntegrationError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(153, __c19, 1) as any as S.Schema<GetCodeSecurityIntegrationRequest>,
  output: __S(154, __c19, 2) as any as S.Schema<GetCodeSecurityIntegrationResponse>,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetCodeSecurityIntegration",
}));

export type GetCodeSecurityScanError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Retrieves information about a specific code security scan.
 */
export const getCodeSecurityScan: API.OperationMethod<
  GetCodeSecurityScanRequest,
  GetCodeSecurityScanResponse,
  GetCodeSecurityScanError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(155, __c19, 3) as any as S.Schema<GetCodeSecurityScanRequest>,
  output: __S(156, __c19, 4) as any as S.Schema<GetCodeSecurityScanResponse>,
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
  operationName: "GetCodeSecurityScan",
}));

export type GetCodeSecurityScanConfigurationError =
  | AccessDeniedException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Retrieves information about a code security scan configuration.
 */
export const getCodeSecurityScanConfiguration: API.OperationMethod<
  GetCodeSecurityScanConfigurationRequest,
  GetCodeSecurityScanConfigurationResponse,
  GetCodeSecurityScanConfigurationError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(157, __c19, 5) as any as S.Schema<GetCodeSecurityScanConfigurationRequest>,
  output: __S(158, __c19, 6) as any as S.Schema<GetCodeSecurityScanConfigurationResponse>,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetCodeSecurityScanConfiguration",
}));

export type GetConfigurationError =
  | AccessDeniedException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Retrieves setting configurations for Amazon Inspector scans. If you specify an
 * `accountId`, this operation returns the scan configuration for that member
 * account. You must be the delegated administrator for the specified member account.
 * If you do not specify an `accountId`, this operation returns your own
 * scan configuration.
 */
export const getConfiguration: API.OperationMethod<
  GetConfigurationRequest,
  GetConfigurationResponse,
  GetConfigurationError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(159, __c19, 7) as any as S.Schema<GetConfigurationRequest>,
  output: __S(165, __c20, 5) as any as S.Schema<GetConfigurationResponse>,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetConfiguration",
}));

export type GetDelegatedAdminAccountError =
  | AccessDeniedException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Retrieves information about the Amazon Inspector delegated administrator for your
 * organization.
 */
export const getDelegatedAdminAccount: API.OperationMethod<
  GetDelegatedAdminAccountRequest,
  GetDelegatedAdminAccountResponse,
  GetDelegatedAdminAccountError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(166, __c20, 6) as any as S.Schema<GetDelegatedAdminAccountRequest>,
  output: __S(168, __c21, 0) as any as S.Schema<GetDelegatedAdminAccountResponse>,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetDelegatedAdminAccount",
}));

export type GetEc2DeepInspectionConfigurationError =
  | AccessDeniedException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | CommonErrors;
/**
 * Retrieves the activation status of Amazon Inspector deep inspection and custom paths associated
 * with your account.
 */
export const getEc2DeepInspectionConfiguration: API.OperationMethod<
  GetEc2DeepInspectionConfigurationRequest,
  GetEc2DeepInspectionConfigurationResponse,
  GetEc2DeepInspectionConfigurationError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(169, __c21, 1) as any as S.Schema<GetEc2DeepInspectionConfigurationRequest>,
  output: __S(170, __c21, 2) as any as S.Schema<GetEc2DeepInspectionConfigurationResponse>,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetEc2DeepInspectionConfiguration",
}));

export type GetEncryptionKeyError =
  | AccessDeniedException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Gets an encryption key.
 */
export const getEncryptionKey: API.OperationMethod<
  GetEncryptionKeyRequest,
  GetEncryptionKeyResponse,
  GetEncryptionKeyError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(171, __c21, 3) as any as S.Schema<GetEncryptionKeyRequest>,
  output: __S(172, __c21, 4) as any as S.Schema<GetEncryptionKeyResponse>,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetEncryptionKey",
}));

export type GetFindingsReportStatusError =
  | AccessDeniedException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Gets the status of a findings report.
 */
export const getFindingsReportStatus: API.OperationMethod<
  GetFindingsReportStatusRequest,
  GetFindingsReportStatusResponse,
  GetFindingsReportStatusError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(173, __c21, 5) as any as S.Schema<GetFindingsReportStatusRequest>,
  output: __S(174, __c21, 6) as any as S.Schema<GetFindingsReportStatusResponse>,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetFindingsReportStatus",
}));

export type GetMemberError =
  | AccessDeniedException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Gets member information for your organization.
 */
export const getMember: API.OperationMethod<
  GetMemberRequest,
  GetMemberResponse,
  GetMemberError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(175, __c21, 7) as any as S.Schema<GetMemberRequest>,
  output: __S(177, __c22, 1) as any as S.Schema<GetMemberResponse>,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetMember",
}));

export type GetSbomExportError =
  | AccessDeniedException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Gets details of a software bill of materials (SBOM) report.
 */
export const getSbomExport: API.OperationMethod<
  GetSbomExportRequest,
  GetSbomExportResponse,
  GetSbomExportError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(178, __c22, 2) as any as S.Schema<GetSbomExportRequest>,
  output: __S(179, __c22, 3) as any as S.Schema<GetSbomExportResponse>,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetSbomExport",
}));

export type ListAccountPermissionsError =
  | AccessDeniedException
  | InternalServerException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Lists the permissions an account has to configure Amazon Inspector.
 * If the account is a member account or standalone account with resources managed by an Organizations policy, the operation returns fewer permissions.
 */
export const listAccountPermissions: API.PaginatedOperationMethod<
  ListAccountPermissionsRequest,
  ListAccountPermissionsResponse,
  ListAccountPermissionsError,
  Credentials | HttpClient.HttpClient,
  Permission
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: __S(180, __c22, 4) as any as S.Schema<ListAccountPermissionsRequest>,
  output: __S(183, __c22, 7) as any as S.Schema<ListAccountPermissionsResponse>,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListAccountPermissions",
  pagination: {
    inputToken: "nextToken",
    outputToken: "nextToken",
    items: "permissions",
    pageSize: "maxResults",
  } as const,
})) as any;

export type ListCisScanConfigurationsError =
  | AccessDeniedException
  | InternalServerException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Lists CIS scan configurations.
 */
export const listCisScanConfigurations: API.PaginatedOperationMethod<
  ListCisScanConfigurationsRequest,
  ListCisScanConfigurationsResponse,
  ListCisScanConfigurationsError,
  Credentials | HttpClient.HttpClient,
  CisScanConfiguration
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: __S(187, __c23, 3) as any as S.Schema<ListCisScanConfigurationsRequest>,
  output: __S(191, __c23, 7) as any as S.Schema<ListCisScanConfigurationsResponse>,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListCisScanConfigurations",
  pagination: {
    inputToken: "nextToken",
    outputToken: "nextToken",
    items: "scanConfigurations",
    pageSize: "maxResults",
  } as const,
})) as any;

export type ListCisScanResultsAggregatedByChecksError =
  | AccessDeniedException
  | InternalServerException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Lists scan results aggregated by checks.
 */
export const listCisScanResultsAggregatedByChecks: API.PaginatedOperationMethod<
  ListCisScanResultsAggregatedByChecksRequest,
  ListCisScanResultsAggregatedByChecksResponse,
  ListCisScanResultsAggregatedByChecksError,
  Credentials | HttpClient.HttpClient,
  CisCheckAggregation
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: __S(193, __c24, 1) as any as S.Schema<ListCisScanResultsAggregatedByChecksRequest>,
  output: __S(197, __c24, 5) as any as S.Schema<ListCisScanResultsAggregatedByChecksResponse>,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListCisScanResultsAggregatedByChecks",
  pagination: {
    inputToken: "nextToken",
    outputToken: "nextToken",
    items: "checkAggregations",
    pageSize: "maxResults",
  } as const,
})) as any;

export type ListCisScanResultsAggregatedByTargetResourceError =
  | AccessDeniedException
  | InternalServerException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Lists scan results aggregated by a target resource.
 */
export const listCisScanResultsAggregatedByTargetResource: API.PaginatedOperationMethod<
  ListCisScanResultsAggregatedByTargetResourceRequest,
  ListCisScanResultsAggregatedByTargetResourceResponse,
  ListCisScanResultsAggregatedByTargetResourceError,
  Credentials | HttpClient.HttpClient,
  CisTargetResourceAggregation
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: __S(201, __c25, 1) as any as S.Schema<ListCisScanResultsAggregatedByTargetResourceRequest>,
  output: __S(
    204,
    __c25,
    4,
  ) as any as S.Schema<ListCisScanResultsAggregatedByTargetResourceResponse>,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListCisScanResultsAggregatedByTargetResource",
  pagination: {
    inputToken: "nextToken",
    outputToken: "nextToken",
    items: "targetResourceAggregations",
    pageSize: "maxResults",
  } as const,
})) as any;

export type ListCisScansError =
  | AccessDeniedException
  | InternalServerException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Returns a CIS scan list.
 */
export const listCisScans: API.PaginatedOperationMethod<
  ListCisScansRequest,
  ListCisScansResponse,
  ListCisScansError,
  Credentials | HttpClient.HttpClient,
  CisScan
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: __S(208, __c26, 0) as any as S.Schema<ListCisScansRequest>,
  output: __S(211, __c26, 3) as any as S.Schema<ListCisScansResponse>,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListCisScans",
  pagination: {
    inputToken: "nextToken",
    outputToken: "nextToken",
    items: "scans",
    pageSize: "maxResults",
  } as const,
})) as any;

export type ListCodeSecurityIntegrationsError =
  | AccessDeniedException
  | InternalServerException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Lists all code security integrations in your account.
 */
export const listCodeSecurityIntegrations: API.OperationMethod<
  ListCodeSecurityIntegrationsRequest,
  ListCodeSecurityIntegrationsResponse,
  ListCodeSecurityIntegrationsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(212, __c26, 4) as any as S.Schema<ListCodeSecurityIntegrationsRequest>,
  output: __S(215, __c26, 7) as any as S.Schema<ListCodeSecurityIntegrationsResponse>,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListCodeSecurityIntegrations",
}));

export type ListCodeSecurityScanConfigurationAssociationsError =
  | AccessDeniedException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Lists the associations between code repositories and Amazon Inspector code security scan
 * configurations.
 */
export const listCodeSecurityScanConfigurationAssociations: API.OperationMethod<
  ListCodeSecurityScanConfigurationAssociationsRequest,
  ListCodeSecurityScanConfigurationAssociationsResponse,
  ListCodeSecurityScanConfigurationAssociationsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(
    216,
    __c27,
    0,
  ) as any as S.Schema<ListCodeSecurityScanConfigurationAssociationsRequest>,
  output: __S(
    219,
    __c27,
    3,
  ) as any as S.Schema<ListCodeSecurityScanConfigurationAssociationsResponse>,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListCodeSecurityScanConfigurationAssociations",
}));

export type ListCodeSecurityScanConfigurationsError =
  | AccessDeniedException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Lists all code security scan configurations in your account.
 */
export const listCodeSecurityScanConfigurations: API.OperationMethod<
  ListCodeSecurityScanConfigurationsRequest,
  ListCodeSecurityScanConfigurationsResponse,
  ListCodeSecurityScanConfigurationsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(220, __c27, 4) as any as S.Schema<ListCodeSecurityScanConfigurationsRequest>,
  output: __S(223, __c27, 7) as any as S.Schema<ListCodeSecurityScanConfigurationsResponse>,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListCodeSecurityScanConfigurations",
}));

export type ListConnectorsError =
  | AccessDeniedException
  | InternalServerException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Lists connectors in your account. Results are paginated. Use the `nextToken` parameter to retrieve the next page of results.
 */
export const listConnectors: API.PaginatedOperationMethod<
  ListConnectorsRequest,
  ListConnectorsResponse,
  ListConnectorsError,
  Credentials | HttpClient.HttpClient,
  Connector
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: __S(227, __c28, 3) as any as S.Schema<ListConnectorsRequest>,
  output: __S(233, __c29, 1) as any as S.Schema<ListConnectorsResponse>,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListConnectors",
  pagination: {
    inputToken: "nextToken",
    outputToken: "nextToken",
    items: "items",
    pageSize: "maxResults",
  } as const,
})) as any;

export type ListConnectorScanConfigurationsError =
  | AccessDeniedException
  | InternalServerException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Lists scan configurations for Amazon Web Services Config connectors. Results are paginated. Use the `nextToken` parameter to retrieve the next page of results.
 */
export const listConnectorScanConfigurations: API.PaginatedOperationMethod<
  ListConnectorScanConfigurationsRequest,
  ListConnectorScanConfigurationsResponse,
  ListConnectorScanConfigurationsError,
  Credentials | HttpClient.HttpClient,
  ConnectorScanConfigurationItem
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: __S(234, __c29, 2) as any as S.Schema<ListConnectorScanConfigurationsRequest>,
  output: __S(239, __c29, 7) as any as S.Schema<ListConnectorScanConfigurationsResponse>,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListConnectorScanConfigurations",
  pagination: {
    inputToken: "nextToken",
    outputToken: "nextToken",
    items: "scanConfigurations",
    pageSize: "maxResults",
  } as const,
})) as any;

export type ListCoverageError =
  | InternalServerException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Lists coverage details for your environment.
 */
export const listCoverage: API.PaginatedOperationMethod<
  ListCoverageRequest,
  ListCoverageResponse,
  ListCoverageError,
  Credentials | HttpClient.HttpClient,
  CoveredResource
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: __S(241, __c30, 1) as any as S.Schema<ListCoverageRequest>,
  output: __S(262, __c32, 6) as any as S.Schema<ListCoverageResponse>,
  errors: [InternalServerException, ThrottlingException, ValidationException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListCoverage",
  pagination: {
    inputToken: "nextToken",
    outputToken: "nextToken",
    items: "coveredResources",
    pageSize: "maxResults",
  } as const,
})) as any;

export type ListCoverageStatisticsError =
  | InternalServerException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Lists Amazon Inspector coverage statistics for your environment.
 */
export const listCoverageStatistics: API.PaginatedOperationMethod<
  ListCoverageStatisticsRequest,
  ListCoverageStatisticsResponse,
  ListCoverageStatisticsError,
  Credentials | HttpClient.HttpClient,
  Counts
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: __S(263, __c32, 7) as any as S.Schema<ListCoverageStatisticsRequest>,
  output: __S(266, __c33, 2) as any as S.Schema<ListCoverageStatisticsResponse>,
  errors: [InternalServerException, ThrottlingException, ValidationException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListCoverageStatistics",
  pagination: {
    inputToken: "nextToken",
    outputToken: "nextToken",
    items: "countsByGroup",
  } as const,
})) as any;

export type ListDelegatedAdminAccountsError =
  | AccessDeniedException
  | InternalServerException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Lists information about the Amazon Inspector delegated administrator of your organization.
 */
export const listDelegatedAdminAccounts: API.PaginatedOperationMethod<
  ListDelegatedAdminAccountsRequest,
  ListDelegatedAdminAccountsResponse,
  ListDelegatedAdminAccountsError,
  Credentials | HttpClient.HttpClient,
  DelegatedAdminAccount
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: __S(267, __c33, 3) as any as S.Schema<ListDelegatedAdminAccountsRequest>,
  output: __S(270, __c33, 6) as any as S.Schema<ListDelegatedAdminAccountsResponse>,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListDelegatedAdminAccounts",
  pagination: {
    inputToken: "nextToken",
    outputToken: "nextToken",
    items: "delegatedAdminAccounts",
    pageSize: "maxResults",
  } as const,
})) as any;

export type ListFiltersError =
  | AccessDeniedException
  | InternalServerException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Lists the filters associated with your account.
 */
export const listFilters: API.PaginatedOperationMethod<
  ListFiltersRequest,
  ListFiltersResponse,
  ListFiltersError,
  Credentials | HttpClient.HttpClient,
  Filter
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: __S(271, __c33, 7) as any as S.Schema<ListFiltersRequest>,
  output: __S(274, __c34, 2) as any as S.Schema<ListFiltersResponse>,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListFilters",
  pagination: {
    inputToken: "nextToken",
    outputToken: "nextToken",
    items: "filters",
    pageSize: "maxResults",
  } as const,
})) as any;

export type ListFindingAggregationsError =
  | InternalServerException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Lists aggregated finding data for your environment based on specific criteria.
 */
export const listFindingAggregations: API.PaginatedOperationMethod<
  ListFindingAggregationsRequest,
  ListFindingAggregationsResponse,
  ListFindingAggregationsError,
  Credentials | HttpClient.HttpClient,
  AggregationResponse
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: __S(290, __c36, 2) as any as S.Schema<ListFindingAggregationsRequest>,
  output: __S(309, __c38, 5) as any as S.Schema<ListFindingAggregationsResponse>,
  errors: [InternalServerException, ThrottlingException, ValidationException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListFindingAggregations",
  pagination: {
    inputToken: "nextToken",
    outputToken: "nextToken",
    items: "responses",
    pageSize: "maxResults",
  } as const,
})) as any;

export type ListFindingsError =
  | InternalServerException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Lists findings for your environment.
 */
export const listFindings: API.PaginatedOperationMethod<
  ListFindingsRequest,
  ListFindingsResponse,
  ListFindingsError,
  Credentials | HttpClient.HttpClient,
  Finding
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: __S(311, __c38, 7) as any as S.Schema<ListFindingsRequest>,
  output: __S(345, __c43, 1) as any as S.Schema<ListFindingsResponse>,
  errors: [InternalServerException, ThrottlingException, ValidationException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListFindings",
  pagination: {
    inputToken: "nextToken",
    outputToken: "nextToken",
    items: "findings",
    pageSize: "maxResults",
  } as const,
})) as any;

export type ListMembersError =
  | AccessDeniedException
  | InternalServerException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * List members associated with the Amazon Inspector delegated administrator for your
 * organization.
 */
export const listMembers: API.PaginatedOperationMethod<
  ListMembersRequest,
  ListMembersResponse,
  ListMembersError,
  Credentials | HttpClient.HttpClient,
  Member
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: __S(346, __c43, 2) as any as S.Schema<ListMembersRequest>,
  output: __S(348, __c43, 4) as any as S.Schema<ListMembersResponse>,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListMembers",
  pagination: {
    inputToken: "nextToken",
    outputToken: "nextToken",
    items: "members",
    pageSize: "maxResults",
  } as const,
})) as any;

export type ListTagsForResourceError =
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Lists all tags attached to a given resource.
 */
export const listTagsForResource: API.OperationMethod<
  ListTagsForResourceRequest,
  ListTagsForResourceResponse,
  ListTagsForResourceError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(349, __c43, 5) as any as S.Schema<ListTagsForResourceRequest>,
  output: __S(350, __c43, 6) as any as S.Schema<ListTagsForResourceResponse>,
  errors: [
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListTagsForResource",
}));

export type ListUsageTotalsError =
  | AccessDeniedException
  | InternalServerException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Lists the Amazon Inspector usage totals over the last 30 days.
 */
export const listUsageTotals: API.PaginatedOperationMethod<
  ListUsageTotalsRequest,
  ListUsageTotalsResponse,
  ListUsageTotalsError,
  Credentials | HttpClient.HttpClient,
  UsageTotal
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: __S(351, __c43, 7) as any as S.Schema<ListUsageTotalsRequest>,
  output: __S(356, __c44, 4) as any as S.Schema<ListUsageTotalsResponse>,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListUsageTotals",
  pagination: {
    inputToken: "nextToken",
    outputToken: "nextToken",
    items: "totals",
    pageSize: "maxResults",
  } as const,
})) as any;

export type ResetEncryptionKeyError =
  | AccessDeniedException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Resets an encryption key. After the key is reset your resources will be encrypted by an
 * Amazon Web Services owned key.
 */
export const resetEncryptionKey: API.OperationMethod<
  ResetEncryptionKeyRequest,
  ResetEncryptionKeyResponse,
  ResetEncryptionKeyError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(357, __c44, 5) as any as S.Schema<ResetEncryptionKeyRequest>,
  output: __S(61, __c7, 5) as any as S.Schema<ResetEncryptionKeyResponse>,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ResetEncryptionKey",
}));

export type SearchVulnerabilitiesError =
  | AccessDeniedException
  | InternalServerException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Lists Amazon Inspector coverage details for a specific vulnerability.
 */
export const searchVulnerabilities: API.PaginatedOperationMethod<
  SearchVulnerabilitiesRequest,
  SearchVulnerabilitiesResponse,
  SearchVulnerabilitiesError,
  Credentials | HttpClient.HttpClient,
  Vulnerability
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: __S(359, __c44, 7) as any as S.Schema<SearchVulnerabilitiesRequest>,
  output: __S(364, __c45, 4) as any as S.Schema<SearchVulnerabilitiesResponse>,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "SearchVulnerabilities",
  pagination: {
    inputToken: "nextToken",
    outputToken: "nextToken",
    items: "vulnerabilities",
  } as const,
})) as any;

export type SendCisSessionHealthError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Sends a CIS session health. This API is used by the Amazon Inspector SSM plugin to
 * communicate with the Amazon Inspector service. The Amazon Inspector SSM plugin calls
 * this API to start a CIS scan session for the scan ID supplied by the service.
 */
export const sendCisSessionHealth: API.OperationMethod<
  SendCisSessionHealthRequest,
  SendCisSessionHealthResponse,
  SendCisSessionHealthError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(365, __c45, 5) as any as S.Schema<SendCisSessionHealthRequest>,
  output: __S(61, __c7, 5) as any as S.Schema<SendCisSessionHealthResponse>,
  errors: [
    AccessDeniedException,
    ConflictException,
    InternalServerException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "SendCisSessionHealth",
}));

export type SendCisSessionTelemetryError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Sends a CIS session telemetry. This API is used by the Amazon Inspector SSM plugin to
 * communicate with the Amazon Inspector service. The Amazon Inspector SSM plugin calls
 * this API to start a CIS scan session for the scan ID supplied by the service.
 */
export const sendCisSessionTelemetry: API.OperationMethod<
  SendCisSessionTelemetryRequest,
  SendCisSessionTelemetryResponse,
  SendCisSessionTelemetryError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(368, __c46, 0) as any as S.Schema<SendCisSessionTelemetryRequest>,
  output: __S(369, __c46, 1) as any as S.Schema<SendCisSessionTelemetryResponse>,
  errors: [
    AccessDeniedException,
    ConflictException,
    InternalServerException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "SendCisSessionTelemetry",
}));

export type StartCisSessionError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Starts a CIS session. This API is used by the Amazon Inspector SSM plugin to
 * communicate with the Amazon Inspector service. The Amazon Inspector SSM plugin calls
 * this API to start a CIS scan session for the scan ID supplied by the service.
 */
export const startCisSession: API.OperationMethod<
  StartCisSessionRequest,
  StartCisSessionResponse,
  StartCisSessionError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(371, __c46, 3) as any as S.Schema<StartCisSessionRequest>,
  output: __S(61, __c7, 5) as any as S.Schema<StartCisSessionResponse>,
  errors: [
    AccessDeniedException,
    ConflictException,
    InternalServerException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "StartCisSession",
}));

export type StartCodeSecurityScanError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Initiates a code security scan on a specified repository.
 */
export const startCodeSecurityScan: API.OperationMethod<
  StartCodeSecurityScanRequest,
  StartCodeSecurityScanResponse,
  StartCodeSecurityScanError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(372, __c46, 4) as any as S.Schema<StartCodeSecurityScanRequest>,
  output: __S(373, __c46, 5) as any as S.Schema<StartCodeSecurityScanResponse>,
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
  operationName: "StartCodeSecurityScan",
}));

export type StopCisSessionError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Stops a CIS session. This API is used by the Amazon Inspector SSM plugin to
 * communicate with the Amazon Inspector service. The Amazon Inspector SSM plugin calls
 * this API to stop a CIS scan session for the scan ID supplied by the service.
 */
export const stopCisSession: API.OperationMethod<
  StopCisSessionRequest,
  StopCisSessionResponse,
  StopCisSessionError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(377, __c47, 1) as any as S.Schema<StopCisSessionRequest>,
  output: __S(61, __c7, 5) as any as S.Schema<StopCisSessionResponse>,
  errors: [
    AccessDeniedException,
    ConflictException,
    InternalServerException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "StopCisSession",
}));

export type TagResourceError =
  | BadRequestException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
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
  input: __S(378, __c47, 2) as any as S.Schema<TagResourceRequest>,
  output: __S(61, __c7, 5) as any as S.Schema<TagResourceResponse>,
  errors: [
    BadRequestException,
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
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Removes tags from a resource.
 */
export const untagResource: API.OperationMethod<
  UntagResourceRequest,
  UntagResourceResponse,
  UntagResourceError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(379, __c47, 3) as any as S.Schema<UntagResourceRequest>,
  output: __S(61, __c7, 5) as any as S.Schema<UntagResourceResponse>,
  errors: [
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "UntagResource",
}));

export type UpdateCisScanConfigurationError =
  | AccessDeniedException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Updates a CIS scan configuration.
 */
export const updateCisScanConfiguration: API.OperationMethod<
  UpdateCisScanConfigurationRequest,
  UpdateCisScanConfigurationResponse,
  UpdateCisScanConfigurationError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(380, __c47, 4) as any as S.Schema<UpdateCisScanConfigurationRequest>,
  output: __S(83, __c10, 3) as any as S.Schema<UpdateCisScanConfigurationResponse>,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "UpdateCisScanConfiguration",
}));

export type UpdateCodeSecurityIntegrationError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Updates an existing code security integration.
 *
 * After calling the `CreateCodeSecurityIntegration` operation, you complete
 * authentication and authorization with your provider. Next you call the
 * `UpdateCodeSecurityIntegration` operation to provide the `details`
 * to complete the integration setup
 */
export const updateCodeSecurityIntegration: API.OperationMethod<
  UpdateCodeSecurityIntegrationRequest,
  UpdateCodeSecurityIntegrationResponse,
  UpdateCodeSecurityIntegrationError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(384, __c48, 0) as any as S.Schema<UpdateCodeSecurityIntegrationRequest>,
  output: __S(385, __c48, 1) as any as S.Schema<UpdateCodeSecurityIntegrationResponse>,
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
  operationName: "UpdateCodeSecurityIntegration",
}));

export type UpdateCodeSecurityScanConfigurationError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Updates an existing code security scan configuration.
 */
export const updateCodeSecurityScanConfiguration: API.OperationMethod<
  UpdateCodeSecurityScanConfigurationRequest,
  UpdateCodeSecurityScanConfigurationResponse,
  UpdateCodeSecurityScanConfigurationError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(386, __c48, 2) as any as S.Schema<UpdateCodeSecurityScanConfigurationRequest>,
  output: __S(72, __c9, 0) as any as S.Schema<UpdateCodeSecurityScanConfigurationResponse>,
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
  operationName: "UpdateCodeSecurityScanConfiguration",
}));

export type UpdateConfigurationError =
  | AccessDeniedException
  | InternalServerException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Updates the scan configuration for your Amazon Inspector account. If you don't specify an
 * `accountId`, this operation updates the delegated administrator's configuration
 * and propagates it to member accounts that have not been individually configured. If you
 * specify an `accountId`, this operation updates that member account's
 * configuration. Only the delegated administrator can specify an `accountId`;
 * member accounts cannot call this operation.
 */
export const updateConfiguration: API.OperationMethod<
  UpdateConfigurationRequest,
  UpdateConfigurationResponse,
  UpdateConfigurationError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(390, __c48, 6) as any as S.Schema<UpdateConfigurationRequest>,
  output: __S(61, __c7, 5) as any as S.Schema<UpdateConfigurationResponse>,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "UpdateConfiguration",
}));

export type UpdateConnectorError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Updates the description or provider-specific configuration details of an existing connector.
 */
export const updateConnector: API.OperationMethod<
  UpdateConnectorRequest,
  UpdateConnectorResponse,
  UpdateConnectorError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(393, __c49, 1) as any as S.Schema<UpdateConnectorRequest>,
  output: __S(394, __c49, 2) as any as S.Schema<UpdateConnectorResponse>,
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
  operationName: "UpdateConnector",
}));

export type UpdateConnectorScanConfigurationError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Updates scan configuration settings for resources associated with an Amazon Web Services Config connector.
 */
export const updateConnectorScanConfiguration: API.OperationMethod<
  UpdateConnectorScanConfigurationRequest,
  UpdateConnectorScanConfigurationResponse,
  UpdateConnectorScanConfigurationError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(395, __c49, 3) as any as S.Schema<UpdateConnectorScanConfigurationRequest>,
  output: __S(396, __c49, 4) as any as S.Schema<UpdateConnectorScanConfigurationResponse>,
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
  operationName: "UpdateConnectorScanConfiguration",
}));

export type UpdateEc2DeepInspectionConfigurationError =
  | AccessDeniedException
  | InternalServerException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Activates, deactivates Amazon Inspector deep inspection, or updates custom paths for your account.
 */
export const updateEc2DeepInspectionConfiguration: API.OperationMethod<
  UpdateEc2DeepInspectionConfigurationRequest,
  UpdateEc2DeepInspectionConfigurationResponse,
  UpdateEc2DeepInspectionConfigurationError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(397, __c49, 5) as any as S.Schema<UpdateEc2DeepInspectionConfigurationRequest>,
  output: __S(170, __c21, 2) as any as S.Schema<UpdateEc2DeepInspectionConfigurationResponse>,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "UpdateEc2DeepInspectionConfiguration",
}));

export type UpdateEncryptionKeyError =
  | AccessDeniedException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Updates an encryption key. A `ResourceNotFoundException` means that an
 * Amazon Web Services owned key is being used for encryption.
 */
export const updateEncryptionKey: API.OperationMethod<
  UpdateEncryptionKeyRequest,
  UpdateEncryptionKeyResponse,
  UpdateEncryptionKeyError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(398, __c49, 6) as any as S.Schema<UpdateEncryptionKeyRequest>,
  output: __S(61, __c7, 5) as any as S.Schema<UpdateEncryptionKeyResponse>,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "UpdateEncryptionKey",
}));

export type UpdateFilterError =
  | AccessDeniedException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Specifies the action that is to be applied to the findings that match the filter.
 */
export const updateFilter: API.OperationMethod<
  UpdateFilterRequest,
  UpdateFilterResponse,
  UpdateFilterError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(399, __c49, 7) as any as S.Schema<UpdateFilterRequest>,
  output: __S(105, __c13, 1) as any as S.Schema<UpdateFilterResponse>,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "UpdateFilter",
}));

export type UpdateOrganizationConfigurationError =
  | AccessDeniedException
  | InternalServerException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Updates the configurations for your Amazon Inspector organization.
 */
export const updateOrganizationConfiguration: API.OperationMethod<
  UpdateOrganizationConfigurationRequest,
  UpdateOrganizationConfigurationResponse,
  UpdateOrganizationConfigurationError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(400, __c50, 0) as any as S.Schema<UpdateOrganizationConfigurationRequest>,
  output: __S(401, __c50, 1) as any as S.Schema<UpdateOrganizationConfigurationResponse>,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "UpdateOrganizationConfiguration",
}));

export type UpdateOrgEc2DeepInspectionConfigurationError =
  | AccessDeniedException
  | InternalServerException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Updates the Amazon Inspector deep inspection custom paths for your organization. You must be an
 * Amazon Inspector delegated administrator to use this API.
 */
export const updateOrgEc2DeepInspectionConfiguration: API.OperationMethod<
  UpdateOrgEc2DeepInspectionConfigurationRequest,
  UpdateOrgEc2DeepInspectionConfigurationResponse,
  UpdateOrgEc2DeepInspectionConfigurationError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(402, __c50, 2) as any as S.Schema<UpdateOrgEc2DeepInspectionConfigurationRequest>,
  output: __S(396, __c49, 4) as any as S.Schema<UpdateOrgEc2DeepInspectionConfigurationResponse>,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "UpdateOrgEc2DeepInspectionConfiguration",
}));

// Schema builders: each runs one schema initializer, on that schema's first use.
function __c0(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({ accountId: S.String }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/members/associate" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "AssociateMemberRequest" });
    case 1:
      return S.suspend(() => S.Struct({ accountId: S.String })).annotate({
        identifier: "AssociateMemberResponse",
      });
    case 2:
      return S.Union([/*@__PURE__*/ S.Struct({ projectId: S.String })]);
    case 3:
      return S.suspend(() =>
        S.Struct({ scanConfigurationArn: S.String, resource: __S(2, __c0, 2) }),
      ).annotate({
        identifier: "AssociateConfigurationRequest",
      });
    case 4:
      return S.Array(__S(3, __c0, 3));
    case 5:
      return S.suspend(() =>
        S.Struct({ associateConfigurationRequests: __S(4, __c0, 4) }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/codesecurity/scan-configuration/batch/associate" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "BatchAssociateCodeSecurityScanConfigurationRequest",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({
          scanConfigurationArn: S.optional(S.String),
          resource: S.optional(__S(2, __c0, 2)),
          statusCode: S.optional(S.String),
          statusMessage: S.optional(S.String),
        }),
      ).annotate({ identifier: "FailedAssociationResult" });
    case 7:
      return S.Array(__S(6, __c0, 6));
  }
}
function __c1(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          scanConfigurationArn: S.optional(S.String),
          resource: S.optional(__S(2, __c0, 2)),
        }),
      ).annotate({
        identifier: "SuccessfulAssociationResult",
      });
    case 1:
      return S.Array(__S(8, __c1, 0));
    case 2:
      return S.suspend(() =>
        S.Struct({
          failedAssociations: S.optional(__S(7, __c0, 7)),
          successfulAssociations: S.optional(__S(9, __c1, 1)),
        }),
      ).annotate({
        identifier: "BatchAssociateCodeSecurityScanConfigurationResponse",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({ disassociateConfigurationRequests: __S(4, __c0, 4) }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/codesecurity/scan-configuration/batch/disassociate" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "BatchDisassociateCodeSecurityScanConfigurationRequest",
      });
    case 4:
      return S.Array(S.String);
    case 5:
      return S.suspend(() =>
        S.Struct({ accountIds: S.optional(__S(12, __c1, 4)) }).pipe(
          T.all(T.Http({ method: "POST", uri: "/status/batch/get" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({
        identifier: "BatchGetAccountStatusRequest",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({
          status: S.String,
          errorCode: S.optional(S.String),
          errorMessage: S.optional(S.String),
        }),
      ).annotate({ identifier: "State" });
    case 7:
      return S.suspend(() =>
        S.Struct({
          ec2: __S(14, __c1, 6),
          ecr: __S(14, __c1, 6),
          lambda: S.optional(__S(14, __c1, 6)),
          lambdaCode: S.optional(__S(14, __c1, 6)),
          codeRepository: S.optional(__S(14, __c1, 6)),
        }),
      ).annotate({ identifier: "ResourceState" });
  }
}
function __c2(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({ accountId: S.String, state: __S(14, __c1, 6), resourceState: __S(15, __c1, 7) }),
      ).annotate({ identifier: "AccountState" });
    case 1:
      return S.Array(__S(16, __c2, 0));
    case 2:
      return S.suspend(() =>
        S.Struct({
          ec2: S.optional(S.String),
          ecr: S.optional(S.String),
          lambda: S.optional(S.String),
          lambdaCode: S.optional(S.String),
          codeRepository: S.optional(S.String),
        }),
      ).annotate({ identifier: "ResourceStatus" });
    case 3:
      return S.suspend(() =>
        S.Struct({
          accountId: S.String,
          status: S.optional(S.String),
          resourceStatus: S.optional(__S(18, __c2, 2)),
          errorCode: S.optional(S.String),
          errorMessage: S.optional(S.String),
        }),
      ).annotate({ identifier: "FailedAccount" });
    case 4:
      return S.Array(__S(19, __c2, 3));
    case 5:
      return S.suspend(() =>
        S.Struct({ accounts: __S(17, __c2, 1), failedAccounts: S.optional(__S(20, __c2, 4)) }),
      ).annotate({
        identifier: "BatchGetAccountStatusResponse",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({ findingArns: __S(12, __c1, 4) }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/codesnippet/batchget" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "BatchGetCodeSnippetRequest",
      });
    case 7:
      return S.suspend(() => S.Struct({ content: S.String, lineNumber: S.Number })).annotate({
        identifier: "CodeLine",
      });
  }
}
function __c3(j: number): any {
  switch (j) {
    case 0:
      return S.Array(__S(23, __c2, 7));
    case 1:
      return S.suspend(() =>
        S.Struct({ description: S.optional(S.String), code: S.optional(S.String) }),
      ).annotate({ identifier: "SuggestedFix" });
    case 2:
      return S.Array(__S(25, __c3, 1));
    case 3:
      return S.suspend(() =>
        S.Struct({
          findingArn: S.optional(S.String),
          startLine: S.optional(S.Number),
          endLine: S.optional(S.Number),
          codeSnippet: S.optional(__S(24, __c3, 0)),
          suggestedFixes: S.optional(__S(26, __c3, 2)),
        }),
      ).annotate({ identifier: "CodeSnippetResult" });
    case 4:
      return S.Array(__S(27, __c3, 3));
    case 5:
      return S.suspend(() =>
        S.Struct({ findingArn: S.String, errorCode: S.String, errorMessage: S.String }),
      ).annotate({ identifier: "CodeSnippetError" });
    case 6:
      return S.Array(__S(29, __c3, 5));
    case 7:
      return S.suspend(() =>
        S.Struct({
          codeSnippetResults: S.optional(__S(28, __c3, 4)),
          errors: S.optional(__S(30, __c3, 6)),
        }),
      ).annotate({
        identifier: "BatchGetCodeSnippetResponse",
      });
  }
}
function __c4(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({ findingArns: __S(12, __c1, 4) }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/findings/details/batch/get" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "BatchGetFindingDetailsRequest",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({
          dateAdded: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          dateDue: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          action: S.optional(S.String),
        }),
      ).annotate({ identifier: "CisaData" });
    case 2:
      return S.suspend(() =>
        S.Struct({
          evidenceRule: S.optional(S.String),
          evidenceDetail: S.optional(S.String),
          severity: S.optional(S.String),
        }),
      ).annotate({ identifier: "Evidence" });
    case 3:
      return S.Array(__S(34, __c4, 2));
    case 4:
      return S.suspend(() =>
        S.Struct({
          lastSeen: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          firstSeen: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
        }),
      ).annotate({ identifier: "ExploitObserved" });
    case 5:
      return S.suspend(() =>
        S.Struct({
          findingArn: S.optional(S.String),
          cisaData: S.optional(__S(33, __c4, 1)),
          riskScore: S.optional(S.Number),
          evidences: S.optional(__S(35, __c4, 3)),
          ttps: S.optional(__S(12, __c1, 4)),
          tools: S.optional(__S(12, __c1, 4)),
          exploitObserved: S.optional(__S(36, __c4, 4)),
          referenceUrls: S.optional(__S(12, __c1, 4)),
          cwes: S.optional(__S(12, __c1, 4)),
          epssScore: S.optional(S.Number),
        }),
      ).annotate({ identifier: "FindingDetail" });
    case 6:
      return S.Array(__S(37, __c4, 5));
    case 7:
      return S.suspend(() =>
        S.Struct({
          findingDetails: S.optional(__S(38, __c4, 6)),
          errors: S.optional(__S(30, __c3, 6)),
        }),
      ).annotate({
        identifier: "BatchGetFindingDetailsResponse",
      });
  }
}
function __c5(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({ accountIds: __S(12, __c1, 4) }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/freetrialinfo/batchget" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "BatchGetFreeTrialInfoRequest",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({
          type: S.String,
          start: S.Date.pipe(T.TimestampFormat("epoch-seconds")),
          end: S.Date.pipe(T.TimestampFormat("epoch-seconds")),
          status: S.String,
          cloudProvider: S.optional(S.String),
        }),
      ).annotate({ identifier: "FreeTrialInfo" });
    case 2:
      return S.Array(__S(41, __c5, 1));
    case 3:
      return S.suspend(() =>
        S.Struct({ accountId: S.String, freeTrialInfo: __S(42, __c5, 2) }),
      ).annotate({ identifier: "FreeTrialAccountInfo" });
    case 4:
      return S.Array(__S(43, __c5, 3));
    case 5:
      return S.suspend(() =>
        S.Struct({ accountId: S.String, code: S.String, message: S.String }),
      ).annotate({ identifier: "FreeTrialInfoError" });
    case 6:
      return S.Array(__S(45, __c5, 5));
    case 7:
      return S.suspend(() =>
        S.Struct({ accounts: __S(44, __c5, 4), failedAccounts: __S(46, __c5, 6) }),
      ).annotate({
        identifier: "BatchGetFreeTrialInfoResponse",
      });
  }
}
function __c6(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({ accountIds: S.optional(__S(12, __c1, 4)) }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/ec2deepinspectionstatus/member/batch/get" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "BatchGetMemberEc2DeepInspectionStatusRequest",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({
          accountId: S.String,
          status: S.optional(S.String),
          errorMessage: S.optional(S.String),
        }),
      ).annotate({
        identifier: "MemberAccountEc2DeepInspectionStatusState",
      });
    case 2:
      return S.Array(__S(49, __c6, 1));
    case 3:
      return S.suspend(() =>
        S.Struct({
          accountId: S.String,
          ec2ScanStatus: S.optional(S.String),
          errorMessage: S.optional(S.String),
        }),
      ).annotate({
        identifier: "FailedMemberAccountEc2DeepInspectionStatusState",
      });
    case 4:
      return S.Array(__S(51, __c6, 3));
    case 5:
      return S.suspend(() =>
        S.Struct({
          accountIds: S.optional(__S(50, __c6, 2)),
          failedAccountIds: S.optional(__S(52, __c6, 4)),
        }),
      ).annotate({
        identifier: "BatchGetMemberEc2DeepInspectionStatusResponse",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({ accountId: S.String, activateDeepInspection: S.Boolean }),
      ).annotate({
        identifier: "MemberAccountEc2DeepInspectionStatus",
      });
    case 7:
      return S.Array(__S(54, __c6, 6));
  }
}
function __c7(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({ accountIds: __S(55, __c6, 7) }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/ec2deepinspectionstatus/member/batch/update" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "BatchUpdateMemberEc2DeepInspectionStatusRequest",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({ reportId: S.String }).pipe(
          T.all(T.Http({ method: "POST", uri: "/reporting/cancel" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({
        identifier: "CancelFindingsReportRequest",
      });
    case 2:
      return S.suspend(() => S.Struct({ reportId: S.String })).annotate({
        identifier: "CancelFindingsReportResponse",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({ reportId: S.String }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/sbomexport/cancel" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "CancelSbomExportRequest" });
    case 4:
      return S.suspend(() => S.Struct({ reportId: S.optional(S.String) })).annotate({
        identifier: "CancelSbomExportResponse",
      });
    case 5:
      return S.suspend(() => S.Struct({})).annotate({
        identifier: "OneTimeSchedule",
      });
    case 6:
      return S.suspend(() => S.Struct({ timeOfDay: S.String, timezone: S.String })).annotate({
        identifier: "Time",
      });
    case 7:
      return S.suspend(() => S.Struct({ startTime: __S(62, __c7, 6) })).annotate({
        identifier: "DailySchedule",
      });
  }
}
function __c8(j: number): any {
  switch (j) {
    case 0:
      return S.Array(S.String);
    case 1:
      return S.suspend(() =>
        S.Struct({ startTime: __S(62, __c7, 6), days: __S(64, __c8, 0) }),
      ).annotate({
        identifier: "WeeklySchedule",
      });
    case 2:
      return S.suspend(() => S.Struct({ startTime: __S(62, __c7, 6), day: S.String })).annotate({
        identifier: "MonthlySchedule",
      });
    case 3:
      return S.Union([
        /*@__PURE__*/ S.Struct({ oneTime: __S(61, __c7, 5) }),
        /*@__PURE__*/ S.Struct({ daily: __S(63, __c7, 7) }),
        /*@__PURE__*/ S.Struct({ weekly: __S(65, __c8, 1) }),
        /*@__PURE__*/ S.Struct({ monthly: __S(66, __c8, 2) }),
      ]);
    case 4:
      return S.Record(S.String, /*@__PURE__*/ __S(12, __c1, 4).pipe(S.optional));
    case 5:
      return S.suspend(() =>
        S.Struct({ accountIds: __S(12, __c1, 4), targetResourceTags: __S(68, __c8, 4) }),
      ).annotate({ identifier: "CreateCisTargets" });
    case 6:
      return S.Record(S.String, /*@__PURE__*/ S.String.pipe(S.optional));
    case 7:
      return S.suspend(() =>
        S.Struct({
          scanName: S.String,
          securityLevel: S.String,
          schedule: __S(67, __c8, 3),
          targets: __S(69, __c8, 5),
          tags: S.optional(__S(70, __c8, 6)),
        }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/cis/scan-configuration/create" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "CreateCisScanConfigurationRequest",
      });
  }
}
function __c9(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() => S.Struct({ scanConfigurationArn: S.optional(S.String) })).annotate({
        identifier: "CreateCisScanConfigurationResponse",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({ instanceUrl: SensitiveString, accessToken: SensitiveString }),
      ).annotate({
        identifier: "CreateGitLabSelfManagedIntegrationDetail",
      });
    case 2:
      return S.Union([/*@__PURE__*/ S.Struct({ gitlabSelfManaged: __S(73, __c9, 1) })]);
    case 3:
      return S.suspend(() =>
        S.Struct({
          name: S.String,
          type: S.String,
          details: S.optional(__S(74, __c9, 2)),
          tags: S.optional(__S(70, __c8, 6)),
        }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/codesecurity/integration/create" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "CreateCodeSecurityIntegrationRequest",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({
          integrationArn: S.String,
          status: S.String,
          authorizationUrl: S.optional(SensitiveString),
        }),
      ).annotate({
        identifier: "CreateCodeSecurityIntegrationResponse",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({
          frequency: S.optional(S.String),
          frequencyExpression: S.optional(S.String),
        }),
      ).annotate({
        identifier: "PeriodicScanConfiguration",
      });
    case 6:
      return S.Array(S.String);
    case 7:
      return S.suspend(() => S.Struct({ supportedEvents: __S(78, __c9, 6) })).annotate({
        identifier: "ContinuousIntegrationScanConfiguration",
      });
  }
}
function __c10(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          periodicScanConfiguration: S.optional(__S(77, __c9, 5)),
          continuousIntegrationScanConfiguration: S.optional(__S(79, __c9, 7)),
          ruleSetCategories: __S(64, __c8, 0),
        }),
      ).annotate({
        identifier: "CodeSecurityScanConfiguration",
      });
    case 1:
      return S.suspend(() => S.Struct({ projectSelectionScope: S.optional(S.String) })).annotate({
        identifier: "ScopeSettings",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({
          name: S.String,
          level: S.String,
          configuration: __S(80, __c10, 0),
          scopeSettings: S.optional(__S(81, __c10, 1)),
          tags: S.optional(__S(70, __c8, 6)),
        }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/codesecurity/scan-configuration/create" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "CreateCodeSecurityScanConfigurationRequest",
      });
    case 3:
      return S.suspend(() => S.Struct({ scanConfigurationArn: S.String })).annotate({
        identifier: "CreateCodeSecurityScanConfigurationResponse",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({ scopeType: S.String, scopeValues: S.optional(__S(12, __c1, 4)) }),
      ).annotate({ identifier: "ScopeConfigurationInput" });
    case 5:
      return S.suspend(() =>
        S.Struct({
          vmScanning: S.optional(__S(84, __c10, 4)),
          containerImageScanning: S.optional(__S(84, __c10, 4)),
          serverlessScanning: S.optional(__S(84, __c10, 4)),
        }),
      ).annotate({
        identifier: "AzureScopeConfigurationInput",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({
          awsConfigConnectorArn: S.String,
          scopeConfiguration: __S(85, __c10, 5),
          azureRegions: __S(12, __c1, 4),
          autoInstallVMScanner: S.optional(S.Boolean),
        }),
      ).annotate({
        identifier: "AzureProviderDetailCreate",
      });
    case 7:
      return S.Union([/*@__PURE__*/ S.Struct({ azure: __S(86, __c10, 6) })]);
  }
}
function __c11(j: number): any {
  switch (j) {
    case 0:
      return S.Record(S.String, /*@__PURE__*/ S.String.pipe(S.optional));
    case 1:
      return S.suspend(() =>
        S.Struct({
          clientToken: S.optional(S.String).pipe(T.IdempotencyToken()),
          name: S.String,
          provider: S.String,
          description: S.optional(S.String),
          providerDetail: __S(87, __c10, 7),
          tags: S.optional(__S(88, __c11, 0)),
        }).pipe(
          T.all(T.Http({ method: "POST", uri: "/connector/create" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({ identifier: "CreateConnectorRequest" });
    case 2:
      return S.suspend(() => S.Struct({ connectorArn: S.String })).annotate({
        identifier: "CreateConnectorResponse",
      });
    case 3:
      return S.suspend(() => S.Struct({ comparison: S.String, value: S.String })).annotate({
        identifier: "StringFilter",
      });
    case 4:
      return S.Array(__S(91, __c11, 3));
    case 5:
      return S.suspend(() =>
        S.Struct({
          startInclusive: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          endInclusive: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
        }),
      ).annotate({ identifier: "DateFilter" });
    case 6:
      return S.Array(__S(93, __c11, 5));
    case 7:
      return S.suspend(() =>
        S.Struct({ upperInclusive: S.optional(S.Number), lowerInclusive: S.optional(S.Number) }),
      ).annotate({ identifier: "NumberFilter" });
  }
}
function __c12(j: number): any {
  switch (j) {
    case 0:
      return S.Array(__S(95, __c11, 7));
    case 1:
      return S.suspend(() =>
        S.Struct({ comparison: S.String, key: S.String, value: S.optional(S.String) }),
      ).annotate({ identifier: "MapFilter" });
    case 2:
      return S.Array(__S(97, __c12, 1));
    case 3:
      return S.suspend(() =>
        S.Struct({ beginInclusive: S.optional(S.Number), endInclusive: S.optional(S.Number) }),
      ).annotate({ identifier: "PortRangeFilter" });
    case 4:
      return S.Array(__S(99, __c12, 3));
    case 5:
      return S.suspend(() =>
        S.Struct({
          name: S.optional(__S(91, __c11, 3)),
          version: S.optional(__S(91, __c11, 3)),
          epoch: S.optional(__S(95, __c11, 7)),
          release: S.optional(__S(91, __c11, 3)),
          architecture: S.optional(__S(91, __c11, 3)),
          sourceLayerHash: S.optional(__S(91, __c11, 3)),
          sourceLambdaLayerArn: S.optional(__S(91, __c11, 3)),
          filePath: S.optional(__S(91, __c11, 3)),
        }),
      ).annotate({ identifier: "PackageFilter" });
    case 6:
      return S.Array(__S(101, __c12, 5));
    case 7:
      return S.suspend(() =>
        S.Struct({
          findingArn: S.optional(__S(92, __c11, 4)),
          awsAccountId: S.optional(__S(92, __c11, 4)),
          findingType: S.optional(__S(92, __c11, 4)),
          severity: S.optional(__S(92, __c11, 4)),
          firstObservedAt: S.optional(__S(94, __c11, 6)),
          lastObservedAt: S.optional(__S(94, __c11, 6)),
          updatedAt: S.optional(__S(94, __c11, 6)),
          findingStatus: S.optional(__S(92, __c11, 4)),
          title: S.optional(__S(92, __c11, 4)),
          inspectorScore: S.optional(__S(96, __c12, 0)),
          resourceType: S.optional(__S(92, __c11, 4)),
          resourceId: S.optional(__S(92, __c11, 4)),
          resourceTags: S.optional(__S(98, __c12, 2)),
          ec2InstanceImageId: S.optional(__S(92, __c11, 4)),
          ec2InstanceVpcId: S.optional(__S(92, __c11, 4)),
          ec2InstanceSubnetId: S.optional(__S(92, __c11, 4)),
          ecrImagePushedAt: S.optional(__S(94, __c11, 6)),
          ecrImageArchitecture: S.optional(__S(92, __c11, 4)),
          ecrImageRegistry: S.optional(__S(92, __c11, 4)),
          ecrImageRepositoryName: S.optional(__S(92, __c11, 4)),
          ecrImageTags: S.optional(__S(92, __c11, 4)),
          ecrImageHash: S.optional(__S(92, __c11, 4)),
          ecrImageLastInUseAt: S.optional(__S(94, __c11, 6)),
          ecrImageInUseCount: S.optional(__S(96, __c12, 0)),
          portRange: S.optional(__S(100, __c12, 4)),
          networkProtocol: S.optional(__S(92, __c11, 4)),
          componentId: S.optional(__S(92, __c11, 4)),
          componentType: S.optional(__S(92, __c11, 4)),
          vulnerabilityId: S.optional(__S(92, __c11, 4)),
          vulnerabilitySource: S.optional(__S(92, __c11, 4)),
          vendorSeverity: S.optional(__S(92, __c11, 4)),
          vulnerablePackages: S.optional(__S(102, __c12, 6)),
          relatedVulnerabilities: S.optional(__S(92, __c11, 4)),
          fixAvailable: S.optional(__S(92, __c11, 4)),
          lambdaFunctionName: S.optional(__S(92, __c11, 4)),
          lambdaFunctionLayers: S.optional(__S(92, __c11, 4)),
          lambdaFunctionRuntime: S.optional(__S(92, __c11, 4)),
          lambdaFunctionLastModifiedAt: S.optional(__S(94, __c11, 6)),
          lambdaFunctionExecutionRoleArn: S.optional(__S(92, __c11, 4)),
          exploitAvailable: S.optional(__S(92, __c11, 4)),
          codeVulnerabilityDetectorName: S.optional(__S(92, __c11, 4)),
          codeVulnerabilityDetectorTags: S.optional(__S(92, __c11, 4)),
          codeVulnerabilityFilePath: S.optional(__S(92, __c11, 4)),
          epssScore: S.optional(__S(96, __c12, 0)),
          codeRepositoryProjectName: S.optional(__S(92, __c11, 4)),
          codeRepositoryProviderType: S.optional(__S(92, __c11, 4)),
          cloudProvider: S.optional(__S(92, __c11, 4)),
          cloudProviderRegion: S.optional(__S(92, __c11, 4)),
          cloudProviderAccountId: S.optional(__S(92, __c11, 4)),
          cloudProviderOrgId: S.optional(__S(92, __c11, 4)),
          cloudVmImageReference: S.optional(__S(92, __c11, 4)),
          cloudVmNetworkId: S.optional(__S(92, __c11, 4)),
          cloudVmSubnetIds: S.optional(__S(92, __c11, 4)),
          cloudImageRepositoryName: S.optional(__S(92, __c11, 4)),
          cloudImageRegistry: S.optional(__S(92, __c11, 4)),
          cloudImageDigest: S.optional(__S(92, __c11, 4)),
          cloudImageTags: S.optional(__S(92, __c11, 4)),
          cloudImagePushedAt: S.optional(__S(94, __c11, 6)),
          cloudImageArchitecture: S.optional(__S(92, __c11, 4)),
          cloudImageLastInUseAt: S.optional(__S(94, __c11, 6)),
          cloudImageInUseCount: S.optional(__S(96, __c12, 0)),
          cloudServerlessFunctionName: S.optional(__S(92, __c11, 4)),
          cloudServerlessFunctionRuntime: S.optional(__S(92, __c11, 4)),
          cloudServerlessFunctionLastModifiedAt: S.optional(__S(94, __c11, 6)),
          cloudServerlessFunctionExecutionRole: S.optional(__S(92, __c11, 4)),
        }),
      ).annotate({ identifier: "FilterCriteria" });
  }
}
function __c13(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          action: S.String,
          description: S.optional(S.String),
          filterCriteria: __S(103, __c12, 7),
          name: S.String,
          tags: S.optional(__S(70, __c8, 6)),
          reason: S.optional(S.String),
        }).pipe(
          T.all(T.Http({ method: "POST", uri: "/filters/create" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({ identifier: "CreateFilterRequest" });
    case 1:
      return S.suspend(() => S.Struct({ arn: S.String })).annotate({
        identifier: "CreateFilterResponse",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({ bucketName: S.String, keyPrefix: S.optional(S.String), kmsKeyArn: S.String }),
      ).annotate({ identifier: "Destination" });
    case 3:
      return S.suspend(() =>
        S.Struct({
          filterCriteria: S.optional(__S(103, __c12, 7)),
          reportFormat: S.String,
          s3Destination: __S(106, __c13, 2),
        }).pipe(
          T.all(T.Http({ method: "POST", uri: "/reporting/create" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({
        identifier: "CreateFindingsReportRequest",
      });
    case 4:
      return S.suspend(() => S.Struct({ reportId: S.optional(S.String) })).annotate({
        identifier: "CreateFindingsReportResponse",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({
          accountId: S.optional(__S(92, __c11, 4)),
          resourceId: S.optional(__S(92, __c11, 4)),
          resourceType: S.optional(__S(92, __c11, 4)),
          ecrRepositoryName: S.optional(__S(92, __c11, 4)),
          lambdaFunctionName: S.optional(__S(92, __c11, 4)),
          ecrImageTags: S.optional(__S(92, __c11, 4)),
          ec2InstanceTags: S.optional(__S(98, __c12, 2)),
          lambdaFunctionTags: S.optional(__S(98, __c12, 2)),
          cloudProvider: S.optional(__S(92, __c11, 4)),
          cloudProviderAccountId: S.optional(__S(92, __c11, 4)),
          cloudProviderOrgId: S.optional(__S(92, __c11, 4)),
          cloudProviderRegion: S.optional(__S(92, __c11, 4)),
          cloudVmInstanceTags: S.optional(__S(98, __c12, 2)),
          cloudContainerImageTags: S.optional(__S(92, __c11, 4)),
          cloudContainerRepositoryName: S.optional(__S(92, __c11, 4)),
          cloudContainerRegistryName: S.optional(__S(92, __c11, 4)),
          cloudServerlessFunctionName: S.optional(__S(92, __c11, 4)),
          cloudServerlessFunctionRuntime: S.optional(__S(92, __c11, 4)),
          cloudServerlessFunctionTags: S.optional(__S(98, __c12, 2)),
        }),
      ).annotate({ identifier: "ResourceFilterCriteria" });
    case 6:
      return S.suspend(() =>
        S.Struct({
          resourceFilterCriteria: S.optional(__S(109, __c13, 5)),
          reportFormat: S.String,
          s3Destination: __S(106, __c13, 2),
        }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/sbomexport/create" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "CreateSbomExportRequest" });
    case 7:
      return S.suspend(() =>
        S.Struct({ scanConfigurationArn: S.String }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/cis/scan-configuration/delete" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "DeleteCisScanConfigurationRequest",
      });
  }
}
function __c14(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({ integrationArn: S.String }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/codesecurity/integration/delete" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "DeleteCodeSecurityIntegrationRequest",
      });
    case 1:
      return S.suspend(() => S.Struct({ integrationArn: S.optional(S.String) })).annotate({
        identifier: "DeleteCodeSecurityIntegrationResponse",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({ scanConfigurationArn: S.String }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/codesecurity/scan-configuration/delete" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "DeleteCodeSecurityScanConfigurationRequest",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({ connectorArn: S.String }).pipe(
          T.all(T.Http({ method: "POST", uri: "/connector/delete" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({ identifier: "DeleteConnectorRequest" });
    case 4:
      return S.suspend(() =>
        S.Struct({ arn: S.String }).pipe(
          T.all(T.Http({ method: "POST", uri: "/filters/delete" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({ identifier: "DeleteFilterRequest" });
    case 5:
      return S.suspend(() =>
        S.Struct({}).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/organizationconfiguration/describe" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "DescribeOrganizationConfigurationRequest",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({
          ec2: S.Boolean,
          ecr: S.Boolean,
          lambda: S.optional(S.Boolean),
          lambdaCode: S.optional(S.Boolean),
          codeRepository: S.optional(S.Boolean),
        }),
      ).annotate({ identifier: "AutoEnable" });
    case 7:
      return S.suspend(() =>
        S.Struct({
          autoEnable: S.optional(__S(118, __c14, 6)),
          maxAccountLimitReached: S.optional(S.Boolean),
        }),
      ).annotate({
        identifier: "DescribeOrganizationConfigurationResponse",
      });
  }
}
function __c15(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          accountIds: S.optional(__S(12, __c1, 4)),
          resourceTypes: S.optional(__S(12, __c1, 4)),
        }).pipe(T.all(T.Http({ method: "POST", uri: "/disable" }), svc, auth, proto, ver, rules)),
      ).annotate({ identifier: "DisableRequest" });
    case 1:
      return S.suspend(() =>
        S.Struct({ accountId: S.String, status: S.String, resourceStatus: __S(18, __c2, 2) }),
      ).annotate({ identifier: "Account" });
    case 2:
      return S.Array(__S(121, __c15, 1));
    case 3:
      return S.suspend(() =>
        S.Struct({ accounts: __S(122, __c15, 2), failedAccounts: S.optional(__S(20, __c2, 4)) }),
      ).annotate({ identifier: "DisableResponse" });
    case 4:
      return S.suspend(() =>
        S.Struct({ delegatedAdminAccountId: S.String }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/delegatedadminaccounts/disable" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "DisableDelegatedAdminAccountRequest",
      });
    case 5:
      return S.suspend(() => S.Struct({ delegatedAdminAccountId: S.String })).annotate({
        identifier: "DisableDelegatedAdminAccountResponse",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({ accountId: S.String }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/members/disassociate" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "DisassociateMemberRequest",
      });
    case 7:
      return S.suspend(() => S.Struct({ accountId: S.String })).annotate({
        identifier: "DisassociateMemberResponse",
      });
  }
}
function __c16(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          accountIds: S.optional(__S(12, __c1, 4)),
          resourceTypes: __S(12, __c1, 4),
          clientToken: S.optional(S.String).pipe(T.IdempotencyToken()),
        }).pipe(T.all(T.Http({ method: "POST", uri: "/enable" }), svc, auth, proto, ver, rules)),
      ).annotate({ identifier: "EnableRequest" });
    case 1:
      return S.suspend(() =>
        S.Struct({
          delegatedAdminAccountId: S.String,
          clientToken: S.optional(S.String).pipe(T.IdempotencyToken()),
        }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/delegatedadminaccounts/enable" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "EnableDelegatedAdminAccountRequest",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({
          scanArn: S.String,
          targetAccounts: S.optional(__S(12, __c1, 4)),
          reportFormat: S.optional(S.String),
        }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/cis/scan/report/get" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "GetCisScanReportRequest" });
    case 3:
      return S.suspend(() =>
        S.Struct({ url: S.optional(S.String), status: S.optional(S.String) }),
      ).annotate({ identifier: "GetCisScanReportResponse" });
    case 4:
      return S.suspend(() => S.Struct({ comparison: S.String, value: S.String })).annotate({
        identifier: "CisFindingStatusFilter",
      });
    case 5:
      return S.Array(__S(132, __c16, 4));
    case 6:
      return S.suspend(() => S.Struct({ comparison: S.String, value: S.String })).annotate({
        identifier: "CisStringFilter",
      });
    case 7:
      return S.Array(__S(134, __c16, 6));
  }
}
function __c17(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          findingStatusFilters: S.optional(__S(133, __c16, 5)),
          checkIdFilters: S.optional(__S(135, __c16, 7)),
          titleFilters: S.optional(__S(135, __c16, 7)),
          securityLevelFilters: S.optional(__S(133, __c16, 5)),
          findingArnFilters: S.optional(__S(135, __c16, 7)),
        }),
      ).annotate({
        identifier: "CisScanResultDetailsFilterCriteria",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({
          scanArn: S.String,
          targetResourceId: S.String,
          accountId: S.String,
          filterCriteria: S.optional(__S(136, __c17, 0)),
          sortBy: S.optional(S.String),
          sortOrder: S.optional(S.String),
          nextToken: S.optional(S.String),
          maxResults: S.optional(S.Number),
        }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/cis/scan-result/details/get" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "GetCisScanResultDetailsRequest",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({
          scanArn: S.String,
          accountId: S.optional(S.String),
          targetResourceId: S.optional(S.String),
          platform: S.optional(S.String),
          status: S.optional(S.String),
          statusReason: S.optional(S.String),
          checkId: S.optional(S.String),
          title: S.optional(S.String),
          checkDescription: S.optional(S.String),
          remediation: S.optional(S.String),
          level: S.optional(S.String),
          findingArn: S.optional(S.String),
        }),
      ).annotate({ identifier: "CisScanResultDetails" });
    case 3:
      return S.Array(__S(138, __c17, 2));
    case 4:
      return S.suspend(() =>
        S.Struct({
          scanResultDetails: S.optional(__S(139, __c17, 3)),
          nextToken: S.optional(S.String),
        }),
      ).annotate({
        identifier: "GetCisScanResultDetailsResponse",
      });
    case 5:
      return S.suspend(() => S.Struct({ resourceId: S.String })).annotate({
        identifier: "ClusterForImageFilterCriteria",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({
          filter: __S(141, __c17, 5),
          maxResults: S.optional(S.Number),
          nextToken: S.optional(S.String),
        }).pipe(
          T.all(T.Http({ method: "POST", uri: "/cluster/get" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({
        identifier: "GetClustersForImageRequest",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({ detailsGroup: S.String, taskDefinitionArn: S.String }),
      ).annotate({ identifier: "AwsEcsMetadataDetails" });
  }
}
function __c18(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() => S.Struct({ name: S.String, type: S.String })).annotate({
        identifier: "AwsEksWorkloadInfo",
      });
    case 1:
      return S.Array(__S(144, __c18, 0));
    case 2:
      return S.suspend(() =>
        S.Struct({
          namespace: S.optional(S.String),
          workloadInfoList: S.optional(__S(145, __c18, 1)),
        }),
      ).annotate({ identifier: "AwsEksMetadataDetails" });
    case 3:
      return S.Union([
        /*@__PURE__*/ S.Struct({ awsEcsMetadataDetails: __S(143, __c17, 7) }),
        /*@__PURE__*/ S.Struct({ awsEksMetadataDetails: __S(146, __c18, 2) }),
      ]);
    case 4:
      return S.suspend(() =>
        S.Struct({
          lastInUse: S.Date.pipe(T.TimestampFormat("epoch-seconds")),
          runningUnitCount: S.optional(S.Number),
          stoppedUnitCount: S.optional(S.Number),
          clusterMetadata: __S(147, __c18, 3),
        }),
      ).annotate({ identifier: "ClusterDetails" });
    case 5:
      return S.Array(__S(148, __c18, 4));
    case 6:
      return S.suspend(() =>
        S.Struct({ clusterArn: S.String, clusterDetails: S.optional(__S(149, __c18, 5)) }),
      ).annotate({ identifier: "ClusterInformation" });
    case 7:
      return S.Array(__S(150, __c18, 6));
  }
}
function __c19(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({ cluster: __S(151, __c18, 7), nextToken: S.optional(S.String) }),
      ).annotate({
        identifier: "GetClustersForImageResponse",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({ integrationArn: S.String, tags: S.optional(__S(70, __c8, 6)) }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/codesecurity/integration/get" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "GetCodeSecurityIntegrationRequest",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({
          integrationArn: S.String,
          name: S.String,
          type: S.String,
          status: S.String,
          statusReason: S.String,
          createdOn: S.Date.pipe(T.TimestampFormat("epoch-seconds")),
          lastUpdateOn: S.Date.pipe(T.TimestampFormat("epoch-seconds")),
          authorizationUrl: S.optional(SensitiveString),
          tags: S.optional(__S(70, __c8, 6)),
        }),
      ).annotate({
        identifier: "GetCodeSecurityIntegrationResponse",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({ resource: __S(2, __c0, 2), scanId: S.String }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/codesecurity/scan/get" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "GetCodeSecurityScanRequest",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({
          scanId: S.optional(S.String),
          resource: S.optional(__S(2, __c0, 2)),
          accountId: S.optional(S.String),
          status: S.optional(S.String),
          statusReason: S.optional(S.String),
          createdAt: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          updatedAt: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          lastCommitId: S.optional(S.String),
        }),
      ).annotate({
        identifier: "GetCodeSecurityScanResponse",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({ scanConfigurationArn: S.String }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/codesecurity/scan-configuration/get" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "GetCodeSecurityScanConfigurationRequest",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({
          scanConfigurationArn: S.optional(S.String),
          name: S.optional(S.String),
          configuration: S.optional(__S(80, __c10, 0)),
          level: S.optional(S.String),
          scopeSettings: S.optional(__S(81, __c10, 1)),
          createdAt: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          lastUpdatedAt: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          tags: S.optional(__S(70, __c8, 6)),
        }),
      ).annotate({
        identifier: "GetCodeSecurityScanConfigurationResponse",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({ accountId: S.optional(S.String) }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/configuration/get" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "GetConfigurationRequest" });
  }
}
function __c20(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          rescanDuration: S.optional(S.String),
          status: S.optional(S.String),
          updatedAt: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          pullDateRescanDuration: S.optional(S.String),
          pullDateRescanMode: S.optional(S.String),
        }),
      ).annotate({ identifier: "EcrRescanDurationState" });
    case 1:
      return S.suspend(() =>
        S.Struct({ rescanDurationState: S.optional(__S(160, __c20, 0)) }),
      ).annotate({ identifier: "EcrConfigurationState" });
    case 2:
      return S.suspend(() =>
        S.Struct({ scanMode: S.optional(S.String), scanModeStatus: S.optional(S.String) }),
      ).annotate({ identifier: "Ec2ScanModeState" });
    case 3:
      return S.suspend(() =>
        S.Struct({
          activated: S.optional(S.Boolean),
          activatedAt: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          status: S.optional(S.String),
        }),
      ).annotate({ identifier: "VMScannerState" });
    case 4:
      return S.suspend(() =>
        S.Struct({
          scanModeState: S.optional(__S(162, __c20, 2)),
          vmScannerState: S.optional(__S(163, __c20, 3)),
        }),
      ).annotate({ identifier: "Ec2ConfigurationState" });
    case 5:
      return S.suspend(() =>
        S.Struct({
          ecrConfiguration: S.optional(__S(161, __c20, 1)),
          ec2Configuration: S.optional(__S(164, __c20, 4)),
        }),
      ).annotate({ identifier: "GetConfigurationResponse" });
    case 6:
      return S.suspend(() =>
        S.Struct({}).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/delegatedadminaccounts/get" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "GetDelegatedAdminAccountRequest",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({ accountId: S.optional(S.String), relationshipStatus: S.optional(S.String) }),
      ).annotate({ identifier: "DelegatedAdmin" });
  }
}
function __c21(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() => S.Struct({ delegatedAdmin: S.optional(__S(167, __c20, 7)) })).annotate(
        {
          identifier: "GetDelegatedAdminAccountResponse",
        },
      );
    case 1:
      return S.suspend(() =>
        S.Struct({}).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/ec2deepinspectionconfiguration/get" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "GetEc2DeepInspectionConfigurationRequest",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({
          packagePaths: S.optional(__S(12, __c1, 4)),
          orgPackagePaths: S.optional(__S(12, __c1, 4)),
          status: S.optional(S.String),
          errorMessage: S.optional(S.String),
        }),
      ).annotate({
        identifier: "GetEc2DeepInspectionConfigurationResponse",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({
          scanType: S.String.pipe(T.HttpQuery("scanType")),
          resourceType: S.String.pipe(T.HttpQuery("resourceType")),
        }).pipe(
          T.all(T.Http({ method: "GET", uri: "/encryptionkey/get" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({ identifier: "GetEncryptionKeyRequest" });
    case 4:
      return S.suspend(() => S.Struct({ kmsKeyId: S.String })).annotate({
        identifier: "GetEncryptionKeyResponse",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({ reportId: S.optional(S.String) }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/reporting/status/get" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "GetFindingsReportStatusRequest",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({
          reportId: S.optional(S.String),
          status: S.optional(S.String),
          errorCode: S.optional(S.String),
          errorMessage: S.optional(S.String),
          destination: S.optional(__S(106, __c13, 2)),
          filterCriteria: S.optional(__S(103, __c12, 7)),
        }),
      ).annotate({
        identifier: "GetFindingsReportStatusResponse",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({ accountId: S.String }).pipe(
          T.all(T.Http({ method: "POST", uri: "/members/get" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({ identifier: "GetMemberRequest" });
  }
}
function __c22(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          accountId: S.optional(S.String),
          relationshipStatus: S.optional(S.String),
          delegatedAdminAccountId: S.optional(S.String),
          updatedAt: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
        }),
      ).annotate({ identifier: "Member" });
    case 1:
      return S.suspend(() => S.Struct({ member: S.optional(__S(176, __c22, 0)) })).annotate({
        identifier: "GetMemberResponse",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({ reportId: S.String }).pipe(
          T.all(T.Http({ method: "POST", uri: "/sbomexport/get" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({ identifier: "GetSbomExportRequest" });
    case 3:
      return S.suspend(() =>
        S.Struct({
          reportId: S.optional(S.String),
          format: S.optional(S.String),
          status: S.optional(S.String),
          errorCode: S.optional(S.String),
          errorMessage: S.optional(S.String),
          s3Destination: S.optional(__S(106, __c13, 2)),
          filterCriteria: S.optional(__S(109, __c13, 5)),
        }),
      ).annotate({ identifier: "GetSbomExportResponse" });
    case 4:
      return S.suspend(() =>
        S.Struct({
          service: S.optional(S.String),
          maxResults: S.optional(S.Number),
          nextToken: S.optional(S.String),
        }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/accountpermissions/list" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "ListAccountPermissionsRequest",
      });
    case 5:
      return S.suspend(() => S.Struct({ service: S.String, operation: S.String })).annotate({
        identifier: "Permission",
      });
    case 6:
      return S.Array(__S(181, __c22, 5));
    case 7:
      return S.suspend(() =>
        S.Struct({ permissions: __S(182, __c22, 6), nextToken: S.optional(S.String) }),
      ).annotate({
        identifier: "ListAccountPermissionsResponse",
      });
  }
}
function __c23(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({ comparison: S.String, key: S.String, value: S.String }),
      ).annotate({ identifier: "TagFilter" });
    case 1:
      return S.Array(__S(184, __c23, 0));
    case 2:
      return S.suspend(() =>
        S.Struct({
          scanNameFilters: S.optional(__S(135, __c16, 7)),
          targetResourceTagFilters: S.optional(__S(185, __c23, 1)),
          scanConfigurationArnFilters: S.optional(__S(135, __c16, 7)),
        }),
      ).annotate({
        identifier: "ListCisScanConfigurationsFilterCriteria",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({
          filterCriteria: S.optional(__S(186, __c23, 2)),
          sortBy: S.optional(S.String),
          sortOrder: S.optional(S.String),
          nextToken: S.optional(S.String),
          maxResults: S.optional(S.Number),
        }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/cis/scan-configuration/list" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "ListCisScanConfigurationsRequest",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({
          accountIds: S.optional(__S(12, __c1, 4)),
          targetResourceTags: S.optional(__S(68, __c8, 4)),
        }),
      ).annotate({ identifier: "CisTargets" });
    case 5:
      return S.suspend(() =>
        S.Struct({
          scanConfigurationArn: S.String,
          ownerId: S.optional(S.String),
          scanName: S.optional(S.String),
          securityLevel: S.optional(S.String),
          schedule: S.optional(__S(67, __c8, 3)),
          targets: S.optional(__S(188, __c23, 4)),
          tags: S.optional(__S(70, __c8, 6)),
        }),
      ).annotate({ identifier: "CisScanConfiguration" });
    case 6:
      return S.Array(__S(189, __c23, 5));
    case 7:
      return S.suspend(() =>
        S.Struct({
          scanConfigurations: S.optional(__S(190, __c23, 6)),
          nextToken: S.optional(S.String),
        }),
      ).annotate({
        identifier: "ListCisScanConfigurationsResponse",
      });
  }
}
function __c24(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          accountIdFilters: S.optional(__S(135, __c16, 7)),
          checkIdFilters: S.optional(__S(135, __c16, 7)),
          titleFilters: S.optional(__S(135, __c16, 7)),
          platformFilters: S.optional(__S(135, __c16, 7)),
          failedResourcesFilters: S.optional(__S(96, __c12, 0)),
          securityLevelFilters: S.optional(__S(133, __c16, 5)),
        }),
      ).annotate({
        identifier: "CisScanResultsAggregatedByChecksFilterCriteria",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({
          scanArn: S.String,
          filterCriteria: S.optional(__S(192, __c24, 0)),
          sortBy: S.optional(S.String),
          sortOrder: S.optional(S.String),
          nextToken: S.optional(S.String),
          maxResults: S.optional(S.Number),
        }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/cis/scan-result/check/list" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "ListCisScanResultsAggregatedByChecksRequest",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({
          failed: S.optional(S.Number),
          skipped: S.optional(S.Number),
          passed: S.optional(S.Number),
        }),
      ).annotate({ identifier: "StatusCounts" });
    case 3:
      return S.suspend(() =>
        S.Struct({
          scanArn: S.String,
          checkId: S.optional(S.String),
          title: S.optional(S.String),
          checkDescription: S.optional(S.String),
          level: S.optional(S.String),
          accountId: S.optional(S.String),
          statusCounts: S.optional(__S(194, __c24, 2)),
          platform: S.optional(S.String),
        }),
      ).annotate({ identifier: "CisCheckAggregation" });
    case 4:
      return S.Array(__S(195, __c24, 3));
    case 5:
      return S.suspend(() =>
        S.Struct({
          checkAggregations: S.optional(__S(196, __c24, 4)),
          nextToken: S.optional(S.String),
        }),
      ).annotate({
        identifier: "ListCisScanResultsAggregatedByChecksResponse",
      });
    case 6:
      return S.suspend(() => S.Struct({ comparison: S.String, value: S.String })).annotate({
        identifier: "CisTargetStatusReasonFilter",
      });
    case 7:
      return S.Array(__S(198, __c24, 6));
  }
}
function __c25(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          accountIdFilters: S.optional(__S(135, __c16, 7)),
          statusFilters: S.optional(__S(133, __c16, 5)),
          checkIdFilters: S.optional(__S(135, __c16, 7)),
          targetResourceIdFilters: S.optional(__S(135, __c16, 7)),
          targetResourceTagFilters: S.optional(__S(185, __c23, 1)),
          platformFilters: S.optional(__S(135, __c16, 7)),
          targetStatusFilters: S.optional(__S(133, __c16, 5)),
          targetStatusReasonFilters: S.optional(__S(199, __c24, 7)),
          failedChecksFilters: S.optional(__S(96, __c12, 0)),
        }),
      ).annotate({
        identifier: "CisScanResultsAggregatedByTargetResourceFilterCriteria",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({
          scanArn: S.String,
          filterCriteria: S.optional(__S(200, __c25, 0)),
          sortBy: S.optional(S.String),
          sortOrder: S.optional(S.String),
          nextToken: S.optional(S.String),
          maxResults: S.optional(S.Number),
        }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/cis/scan-result/resource/list" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "ListCisScanResultsAggregatedByTargetResourceRequest",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({
          scanArn: S.String,
          targetResourceId: S.optional(S.String),
          accountId: S.optional(S.String),
          targetResourceTags: S.optional(__S(68, __c8, 4)),
          statusCounts: S.optional(__S(194, __c24, 2)),
          platform: S.optional(S.String),
          targetStatus: S.optional(S.String),
          targetStatusReason: S.optional(S.String),
        }),
      ).annotate({
        identifier: "CisTargetResourceAggregation",
      });
    case 3:
      return S.Array(__S(202, __c25, 2));
    case 4:
      return S.suspend(() =>
        S.Struct({
          targetResourceAggregations: S.optional(__S(203, __c25, 3)),
          nextToken: S.optional(S.String),
        }),
      ).annotate({
        identifier: "ListCisScanResultsAggregatedByTargetResourceResponse",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({
          earliestScanStartTime: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          latestScanStartTime: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
        }),
      ).annotate({ identifier: "CisDateFilter" });
    case 6:
      return S.Array(__S(205, __c25, 5));
    case 7:
      return S.suspend(() =>
        S.Struct({
          scanNameFilters: S.optional(__S(135, __c16, 7)),
          targetResourceTagFilters: S.optional(__S(185, __c23, 1)),
          targetResourceIdFilters: S.optional(__S(135, __c16, 7)),
          scanStatusFilters: S.optional(__S(133, __c16, 5)),
          scanAtFilters: S.optional(__S(206, __c25, 6)),
          scanConfigurationArnFilters: S.optional(__S(135, __c16, 7)),
          scanArnFilters: S.optional(__S(135, __c16, 7)),
          scheduledByFilters: S.optional(__S(135, __c16, 7)),
          failedChecksFilters: S.optional(__S(96, __c12, 0)),
          targetAccountIdFilters: S.optional(__S(135, __c16, 7)),
        }),
      ).annotate({
        identifier: "ListCisScansFilterCriteria",
      });
  }
}
function __c26(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          filterCriteria: S.optional(__S(207, __c25, 7)),
          detailLevel: S.optional(S.String),
          sortBy: S.optional(S.String),
          sortOrder: S.optional(S.String),
          nextToken: S.optional(S.String),
          maxResults: S.optional(S.Number),
        }).pipe(
          T.all(T.Http({ method: "POST", uri: "/cis/scan/list" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({ identifier: "ListCisScansRequest" });
    case 1:
      return S.suspend(() =>
        S.Struct({
          scanArn: S.String,
          scanConfigurationArn: S.String,
          status: S.optional(S.String),
          scanName: S.optional(S.String),
          scanDate: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          failedChecks: S.optional(S.Number),
          totalChecks: S.optional(S.Number),
          targets: S.optional(__S(188, __c23, 4)),
          scheduledBy: S.optional(S.String),
          securityLevel: S.optional(S.String),
        }),
      ).annotate({ identifier: "CisScan" });
    case 2:
      return S.Array(__S(209, __c26, 1));
    case 3:
      return S.suspend(() =>
        S.Struct({ scans: S.optional(__S(210, __c26, 2)), nextToken: S.optional(S.String) }),
      ).annotate({ identifier: "ListCisScansResponse" });
    case 4:
      return S.suspend(() =>
        S.Struct({
          nextToken: S.optional(S.String).pipe(T.HttpQuery("nextToken")),
          maxResults: S.optional(S.Number).pipe(T.HttpQuery("maxResults")),
        }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/codesecurity/integration/list" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "ListCodeSecurityIntegrationsRequest",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({
          integrationArn: S.String,
          name: S.String,
          type: S.String,
          status: S.String,
          statusReason: S.String,
          createdOn: S.Date.pipe(T.TimestampFormat("epoch-seconds")),
          lastUpdateOn: S.Date.pipe(T.TimestampFormat("epoch-seconds")),
        }),
      ).annotate({
        identifier: "CodeSecurityIntegrationSummary",
      });
    case 6:
      return S.Array(__S(213, __c26, 5));
    case 7:
      return S.suspend(() =>
        S.Struct({
          integrations: S.optional(__S(214, __c26, 6)),
          nextToken: S.optional(S.String),
        }),
      ).annotate({
        identifier: "ListCodeSecurityIntegrationsResponse",
      });
  }
}
function __c27(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          scanConfigurationArn: S.String,
          nextToken: S.optional(S.String).pipe(T.HttpQuery("nextToken")),
          maxResults: S.optional(S.Number).pipe(T.HttpQuery("maxResults")),
        }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/codesecurity/scan-configuration/associations/list" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "ListCodeSecurityScanConfigurationAssociationsRequest",
      });
    case 1:
      return S.suspend(() => S.Struct({ resource: S.optional(__S(2, __c0, 2)) })).annotate({
        identifier: "CodeSecurityScanConfigurationAssociationSummary",
      });
    case 2:
      return S.Array(__S(217, __c27, 1));
    case 3:
      return S.suspend(() =>
        S.Struct({
          associations: S.optional(__S(218, __c27, 2)),
          nextToken: S.optional(S.String),
        }),
      ).annotate({
        identifier: "ListCodeSecurityScanConfigurationAssociationsResponse",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({
          nextToken: S.optional(S.String).pipe(T.HttpQuery("nextToken")),
          maxResults: S.optional(S.Number).pipe(T.HttpQuery("maxResults")),
        }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/codesecurity/scan-configuration/list" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "ListCodeSecurityScanConfigurationsRequest",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({
          scanConfigurationArn: S.String,
          name: S.String,
          ownerAccountId: S.String,
          periodicScanFrequency: S.optional(S.String),
          frequencyExpression: S.optional(S.String),
          continuousIntegrationScanSupportedEvents: S.optional(__S(78, __c9, 6)),
          ruleSetCategories: __S(64, __c8, 0),
          scopeSettings: S.optional(__S(81, __c10, 1)),
        }),
      ).annotate({
        identifier: "CodeSecurityScanConfigurationSummary",
      });
    case 6:
      return S.Array(__S(221, __c27, 5));
    case 7:
      return S.suspend(() =>
        S.Struct({
          configurations: S.optional(__S(222, __c27, 6)),
          nextToken: S.optional(S.String),
        }),
      ).annotate({
        identifier: "ListCodeSecurityScanConfigurationsResponse",
      });
  }
}
function __c28(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() => S.Struct({ comparison: S.String, value: S.String })).annotate({
        identifier: "AwsConfigConnectorArnFilter",
      });
    case 1:
      return S.Array(__S(224, __c28, 0));
    case 2:
      return S.suspend(() =>
        S.Struct({
          connectorArns: S.optional(__S(135, __c16, 7)),
          accounts: S.optional(__S(92, __c11, 4)),
          awsConfigConnectorArns: S.optional(__S(225, __c28, 1)),
          connectorType: S.optional(__S(133, __c16, 5)),
          provider: S.optional(__S(133, __c16, 5)),
        }),
      ).annotate({ identifier: "ConnectorFilterCriteria" });
    case 3:
      return S.suspend(() =>
        S.Struct({
          maxResults: S.optional(S.Number),
          nextToken: S.optional(SensitiveString),
          filterCriteria: S.optional(__S(226, __c28, 2)),
        }).pipe(
          T.all(T.Http({ method: "POST", uri: "/connector/list" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({ identifier: "ListConnectorsRequest" });
    case 4:
      return S.suspend(() =>
        S.Struct({
          connectorStatus: S.String,
          lastCheckedAt: T.DateFromString.pipe(T.TimestampFormat("date-time")),
          message: S.optional(S.String),
        }),
      ).annotate({ identifier: "ConnectorHealth" });
    case 5:
      return S.suspend(() =>
        S.Struct({
          scopeType: S.String,
          scopeValues: S.optional(__S(12, __c1, 4)),
          state: S.optional(S.String),
          stateReason: S.optional(S.String),
        }),
      ).annotate({ identifier: "ScopeConfiguration" });
    case 6:
      return S.suspend(() =>
        S.Struct({
          vmScanning: S.optional(__S(229, __c28, 5)),
          containerImageScanning: S.optional(__S(229, __c28, 5)),
          serverlessScanning: S.optional(__S(229, __c28, 5)),
        }),
      ).annotate({ identifier: "AzureScopeConfiguration" });
    case 7:
      return S.suspend(() =>
        S.Struct({
          connectorArn: S.String,
          name: S.optional(S.String),
          description: S.optional(S.String),
          provider: S.String,
          enablementStatus: S.optional(S.String),
          enablementStatusReason: S.optional(S.String),
          health: S.optional(__S(228, __c28, 4)),
          createdAt: T.DateFromString.pipe(T.TimestampFormat("date-time")),
          updatedAt: T.DateFromString.pipe(T.TimestampFormat("date-time")),
          azureRegions: S.optional(__S(12, __c1, 4)),
          awsConfigConnectorArn: S.optional(S.String),
          scopeConfiguration: S.optional(__S(230, __c28, 6)),
          tags: S.optional(__S(88, __c11, 0)),
          autoInstallVMScanner: S.optional(S.Boolean),
        }),
      ).annotate({ identifier: "Connector" });
  }
}
function __c29(j: number): any {
  switch (j) {
    case 0:
      return S.Array(__S(231, __c28, 7));
    case 1:
      return S.suspend(() =>
        S.Struct({ items: __S(232, __c29, 0), nextToken: S.optional(SensitiveString) }),
      ).annotate({ identifier: "ListConnectorsResponse" });
    case 2:
      return S.suspend(() =>
        S.Struct({
          awsConfigConnectorArns: S.optional(__S(12, __c1, 4)),
          maxResults: S.optional(S.Number),
          nextToken: S.optional(SensitiveString),
        }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/connectorscanconfigurations/list" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "ListConnectorScanConfigurationsRequest",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({ pushDuration: S.optional(S.String), pullDuration: S.optional(S.String) }),
      ).annotate({
        identifier: "ConnectorContainerImageScanConfiguration",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({ containerImageScanning: S.optional(__S(235, __c29, 3)) }),
      ).annotate({
        identifier: "ConnectorScanConfiguration",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({
          awsConfigConnectorArn: S.String,
          connectorArns: __S(12, __c1, 4),
          scanConfiguration: __S(236, __c29, 4),
        }),
      ).annotate({
        identifier: "ConnectorScanConfigurationItem",
      });
    case 6:
      return S.Array(__S(237, __c29, 5));
    case 7:
      return S.suspend(() =>
        S.Struct({
          scanConfigurations: __S(238, __c29, 6),
          nextToken: S.optional(SensitiveString),
        }),
      ).annotate({
        identifier: "ListConnectorScanConfigurationsResponse",
      });
  }
}
function __c30(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          scanStatusCode: S.optional(__S(92, __c11, 4)),
          scanStatusReason: S.optional(__S(92, __c11, 4)),
          accountId: S.optional(__S(92, __c11, 4)),
          resourceId: S.optional(__S(92, __c11, 4)),
          resourceType: S.optional(__S(92, __c11, 4)),
          scanType: S.optional(__S(92, __c11, 4)),
          ecrRepositoryName: S.optional(__S(92, __c11, 4)),
          ecrImageTags: S.optional(__S(92, __c11, 4)),
          ec2InstanceTags: S.optional(__S(98, __c12, 2)),
          lambdaFunctionName: S.optional(__S(92, __c11, 4)),
          lambdaFunctionTags: S.optional(__S(98, __c12, 2)),
          lambdaFunctionRuntime: S.optional(__S(92, __c11, 4)),
          lastScannedAt: S.optional(__S(94, __c11, 6)),
          scanMode: S.optional(__S(92, __c11, 4)),
          imagePulledAt: S.optional(__S(94, __c11, 6)),
          ecrImageLastInUseAt: S.optional(__S(94, __c11, 6)),
          ecrImageInUseCount: S.optional(__S(96, __c12, 0)),
          codeRepositoryProjectName: S.optional(__S(92, __c11, 4)),
          codeRepositoryProviderType: S.optional(__S(92, __c11, 4)),
          codeRepositoryProviderTypeVisibility: S.optional(__S(92, __c11, 4)),
          lastScannedCommitId: S.optional(__S(92, __c11, 4)),
          cloudProvider: S.optional(__S(92, __c11, 4)),
          cloudProviderAccountId: S.optional(__S(92, __c11, 4)),
          cloudProviderRegion: S.optional(__S(92, __c11, 4)),
          cloudVmInstanceTags: S.optional(__S(98, __c12, 2)),
          cloudContainerImageTags: S.optional(__S(92, __c11, 4)),
          cloudContainerRepositoryName: S.optional(__S(92, __c11, 4)),
          cloudContainerRegistryName: S.optional(__S(92, __c11, 4)),
          cloudServerlessFunctionName: S.optional(__S(92, __c11, 4)),
          cloudServerlessFunctionRuntime: S.optional(__S(92, __c11, 4)),
          cloudServerlessFunctionTags: S.optional(__S(98, __c12, 2)),
          cloudProviderOrgId: S.optional(__S(92, __c11, 4)),
        }),
      ).annotate({ identifier: "CoverageFilterCriteria" });
    case 1:
      return S.suspend(() =>
        S.Struct({
          maxResults: S.optional(S.Number),
          nextToken: S.optional(S.String),
          filterCriteria: S.optional(__S(240, __c30, 0)),
        }).pipe(
          T.all(T.Http({ method: "POST", uri: "/coverage/list" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({ identifier: "ListCoverageRequest" });
    case 2:
      return S.suspend(() => S.Struct({ statusCode: S.String, reason: S.String })).annotate({
        identifier: "ScanStatus",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({ name: S.optional(S.String), scanFrequency: S.optional(S.String) }),
      ).annotate({ identifier: "EcrRepositoryMetadata" });
    case 4:
      return S.suspend(() =>
        S.Struct({
          tags: S.optional(__S(12, __c1, 4)),
          imagePulledAt: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          lastInUseAt: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          inUseCount: S.optional(S.Number),
        }),
      ).annotate({
        identifier: "EcrContainerImageMetadata",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({
          tags: S.optional(__S(70, __c8, 6)),
          amiId: S.optional(S.String),
          platform: S.optional(S.String),
        }),
      ).annotate({ identifier: "Ec2Metadata" });
    case 6:
      return S.suspend(() =>
        S.Struct({
          functionTags: S.optional(__S(70, __c8, 6)),
          layers: S.optional(__S(12, __c1, 4)),
          functionName: S.optional(S.String),
          runtime: S.optional(S.String),
        }),
      ).annotate({ identifier: "LambdaFunctionMetadata" });
    case 7:
      return S.suspend(() =>
        S.Struct({
          frequencyExpression: S.optional(S.String),
          ruleSetCategories: S.optional(__S(64, __c8, 0)),
        }),
      ).annotate({
        identifier: "ProjectPeriodicScanConfiguration",
      });
  }
}
function __c31(j: number): any {
  switch (j) {
    case 0:
      return S.Array(__S(247, __c30, 7));
    case 1:
      return S.suspend(() =>
        S.Struct({
          supportedEvent: S.optional(S.String),
          ruleSetCategories: S.optional(__S(64, __c8, 0)),
        }),
      ).annotate({
        identifier: "ProjectContinuousIntegrationScanConfiguration",
      });
    case 2:
      return S.Array(__S(249, __c31, 1));
    case 3:
      return S.suspend(() =>
        S.Struct({
          periodicScanConfigurations: S.optional(__S(248, __c31, 0)),
          continuousIntegrationScanConfigurations: S.optional(__S(250, __c31, 2)),
        }),
      ).annotate({
        identifier: "ProjectCodeSecurityScanConfiguration",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({
          lastScannedCommitId: S.optional(S.String),
          lastScanAt: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          scanStatus: S.optional(__S(242, __c30, 2)),
        }),
      ).annotate({
        identifier: "CodeRepositoryOnDemandScan",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({
          projectName: S.String,
          integrationArn: S.optional(S.String),
          providerType: S.String,
          providerTypeVisibility: S.String,
          lastScannedCommitId: S.optional(S.String),
          scanConfiguration: S.optional(__S(251, __c31, 3)),
          onDemandScan: S.optional(__S(252, __c31, 4)),
        }),
      ).annotate({ identifier: "CodeRepositoryMetadata" });
    case 6:
      return S.suspend(() =>
        S.Struct({
          tags: S.optional(__S(70, __c8, 6)),
          platform: S.optional(S.String),
          inventoryHash: S.optional(S.String),
          vmImageReference: S.optional(S.String),
        }),
      ).annotate({ identifier: "VmInstanceMetadata" });
    case 7:
      return S.suspend(() =>
        S.Struct({
          imageTags: S.optional(__S(12, __c1, 4)),
          imagePulledAt: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          lastInUseAt: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          inUseCount: S.optional(S.Number),
        }),
      ).annotate({ identifier: "ContainerImageMetadata" });
  }
}
function __c32(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({ name: S.optional(S.String), scanFrequency: S.optional(S.String) }),
      ).annotate({
        identifier: "ContainerRepositoryMetadata",
      });
    case 1:
      return S.suspend(() => S.Struct({ name: S.optional(S.String) })).annotate({
        identifier: "ContainerRegistryMetadata",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({
          serverlessFunctionName: S.optional(S.String),
          runtime: S.optional(S.String),
          functionTags: S.optional(__S(70, __c8, 6)),
        }),
      ).annotate({
        identifier: "ServerlessFunctionMetadata",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({
          ecrRepository: S.optional(__S(243, __c30, 3)),
          ecrImage: S.optional(__S(244, __c30, 4)),
          ec2: S.optional(__S(245, __c30, 5)),
          lambdaFunction: S.optional(__S(246, __c30, 6)),
          codeRepository: S.optional(__S(253, __c31, 5)),
          vmInstance: S.optional(__S(254, __c31, 6)),
          containerImage: S.optional(__S(255, __c31, 7)),
          containerRepository: S.optional(__S(256, __c32, 0)),
          containerRegistry: S.optional(__S(257, __c32, 1)),
          serverlessFunction: S.optional(__S(258, __c32, 2)),
        }),
      ).annotate({ identifier: "ResourceScanMetadata" });
    case 4:
      return S.suspend(() =>
        S.Struct({
          resourceType: S.String,
          resourceId: S.String,
          accountId: S.String,
          scanType: S.String,
          scanStatus: S.optional(__S(242, __c30, 2)),
          resourceMetadata: S.optional(__S(259, __c32, 3)),
          lastScannedAt: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          scanMode: S.optional(S.String),
          provider: S.optional(S.String),
          providerAccountId: S.optional(S.String),
          providerOrgId: S.optional(S.String),
          providerRegion: S.optional(S.String),
          providerPartition: S.optional(S.String),
        }),
      ).annotate({ identifier: "CoveredResource" });
    case 5:
      return S.Array(__S(260, __c32, 4));
    case 6:
      return S.suspend(() =>
        S.Struct({
          nextToken: S.optional(S.String),
          coveredResources: S.optional(__S(261, __c32, 5)),
        }),
      ).annotate({ identifier: "ListCoverageResponse" });
    case 7:
      return S.suspend(() =>
        S.Struct({
          filterCriteria: S.optional(__S(240, __c30, 0)),
          groupBy: S.optional(S.String),
          nextToken: S.optional(S.String),
        }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/coverage/statistics/list" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "ListCoverageStatisticsRequest",
      });
  }
}
function __c33(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({ count: S.optional(S.Number), groupKey: S.optional(S.String) }),
      ).annotate({ identifier: "Counts" });
    case 1:
      return S.Array(__S(264, __c33, 0));
    case 2:
      return S.suspend(() =>
        S.Struct({
          countsByGroup: S.optional(__S(265, __c33, 1)),
          totalCounts: S.Number,
          nextToken: S.optional(S.String),
        }),
      ).annotate({
        identifier: "ListCoverageStatisticsResponse",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({ maxResults: S.optional(S.Number), nextToken: S.optional(S.String) }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/delegatedadminaccounts/list" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "ListDelegatedAdminAccountsRequest",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({ accountId: S.optional(S.String), status: S.optional(S.String) }),
      ).annotate({ identifier: "DelegatedAdminAccount" });
    case 5:
      return S.Array(__S(268, __c33, 4));
    case 6:
      return S.suspend(() =>
        S.Struct({
          delegatedAdminAccounts: S.optional(__S(269, __c33, 5)),
          nextToken: S.optional(S.String),
        }),
      ).annotate({
        identifier: "ListDelegatedAdminAccountsResponse",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({
          arns: S.optional(__S(12, __c1, 4)),
          action: S.optional(S.String),
          nextToken: S.optional(S.String),
          maxResults: S.optional(S.Number),
        }).pipe(
          T.all(T.Http({ method: "POST", uri: "/filters/list" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({ identifier: "ListFiltersRequest" });
  }
}
function __c34(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          arn: S.String,
          ownerId: S.String,
          name: S.String,
          criteria: __S(103, __c12, 7),
          action: S.String,
          createdAt: S.Date.pipe(T.TimestampFormat("epoch-seconds")),
          updatedAt: S.Date.pipe(T.TimestampFormat("epoch-seconds")),
          description: S.optional(S.String),
          reason: S.optional(S.String),
          tags: S.optional(__S(70, __c8, 6)),
        }),
      ).annotate({ identifier: "Filter" });
    case 1:
      return S.Array(__S(272, __c34, 0));
    case 2:
      return S.suspend(() =>
        S.Struct({ filters: __S(273, __c34, 1), nextToken: S.optional(S.String) }),
      ).annotate({ identifier: "ListFiltersResponse" });
    case 3:
      return S.suspend(() =>
        S.Struct({
          findingType: S.optional(S.String),
          resourceType: S.optional(S.String),
          sortOrder: S.optional(S.String),
          sortBy: S.optional(S.String),
        }),
      ).annotate({ identifier: "AccountAggregation" });
    case 4:
      return S.suspend(() =>
        S.Struct({
          amis: S.optional(__S(92, __c11, 4)),
          sortOrder: S.optional(S.String),
          sortBy: S.optional(S.String),
        }),
      ).annotate({ identifier: "AmiAggregation" });
    case 5:
      return S.suspend(() =>
        S.Struct({
          resourceIds: S.optional(__S(92, __c11, 4)),
          imageShas: S.optional(__S(92, __c11, 4)),
          repositories: S.optional(__S(92, __c11, 4)),
          architectures: S.optional(__S(92, __c11, 4)),
          imageTags: S.optional(__S(92, __c11, 4)),
          sortOrder: S.optional(S.String),
          sortBy: S.optional(S.String),
          lastInUseAt: S.optional(__S(94, __c11, 6)),
          inUseCount: S.optional(__S(96, __c12, 0)),
        }),
      ).annotate({
        identifier: "AwsEcrContainerAggregation",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({
          amis: S.optional(__S(92, __c11, 4)),
          operatingSystems: S.optional(__S(92, __c11, 4)),
          instanceIds: S.optional(__S(92, __c11, 4)),
          instanceTags: S.optional(__S(98, __c12, 2)),
          sortOrder: S.optional(S.String),
          sortBy: S.optional(S.String),
        }),
      ).annotate({ identifier: "Ec2InstanceAggregation" });
    case 7:
      return S.suspend(() =>
        S.Struct({
          repositories: S.optional(__S(92, __c11, 4)),
          resourceIds: S.optional(__S(92, __c11, 4)),
          layerHashes: S.optional(__S(92, __c11, 4)),
          cloudProviders: S.optional(__S(92, __c11, 4)),
          cloudAccountIds: S.optional(__S(92, __c11, 4)),
          cloudOrgIds: S.optional(__S(92, __c11, 4)),
          cloudRegions: S.optional(__S(92, __c11, 4)),
          cloudPartitions: S.optional(__S(92, __c11, 4)),
          sortOrder: S.optional(S.String),
          sortBy: S.optional(S.String),
        }),
      ).annotate({ identifier: "ImageLayerAggregation" });
  }
}
function __c35(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          packageNames: S.optional(__S(92, __c11, 4)),
          sortOrder: S.optional(S.String),
          sortBy: S.optional(S.String),
        }),
      ).annotate({ identifier: "PackageAggregation" });
    case 1:
      return S.suspend(() =>
        S.Struct({
          repositories: S.optional(__S(92, __c11, 4)),
          sortOrder: S.optional(S.String),
          sortBy: S.optional(S.String),
        }),
      ).annotate({ identifier: "RepositoryAggregation" });
    case 2:
      return S.suspend(() =>
        S.Struct({
          titles: S.optional(__S(92, __c11, 4)),
          vulnerabilityIds: S.optional(__S(92, __c11, 4)),
          resourceType: S.optional(S.String),
          findingType: S.optional(S.String),
          sortOrder: S.optional(S.String),
          sortBy: S.optional(S.String),
        }),
      ).annotate({ identifier: "TitleAggregation" });
    case 3:
      return S.suspend(() =>
        S.Struct({
          functionNames: S.optional(__S(92, __c11, 4)),
          resourceIds: S.optional(__S(92, __c11, 4)),
          layerArns: S.optional(__S(92, __c11, 4)),
          sortOrder: S.optional(S.String),
          sortBy: S.optional(S.String),
        }),
      ).annotate({ identifier: "LambdaLayerAggregation" });
    case 4:
      return S.suspend(() =>
        S.Struct({
          resourceIds: S.optional(__S(92, __c11, 4)),
          functionNames: S.optional(__S(92, __c11, 4)),
          runtimes: S.optional(__S(92, __c11, 4)),
          functionTags: S.optional(__S(98, __c12, 2)),
          sortOrder: S.optional(S.String),
          sortBy: S.optional(S.String),
        }),
      ).annotate({
        identifier: "LambdaFunctionAggregation",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({
          projectNames: S.optional(__S(92, __c11, 4)),
          providerTypes: S.optional(__S(92, __c11, 4)),
          sortOrder: S.optional(S.String),
          sortBy: S.optional(S.String),
          resourceIds: S.optional(__S(92, __c11, 4)),
        }),
      ).annotate({
        identifier: "CodeRepositoryAggregation",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({
          resourceIds: S.optional(__S(92, __c11, 4)),
          operatingSystems: S.optional(__S(92, __c11, 4)),
          instanceTags: S.optional(__S(98, __c12, 2)),
          vmImageReferences: S.optional(__S(92, __c11, 4)),
          cloudProviders: S.optional(__S(92, __c11, 4)),
          cloudPartitions: S.optional(__S(92, __c11, 4)),
          cloudRegions: S.optional(__S(92, __c11, 4)),
          cloudOrgIds: S.optional(__S(92, __c11, 4)),
          cloudAccountIds: S.optional(__S(92, __c11, 4)),
          sortOrder: S.optional(S.String),
          sortBy: S.optional(S.String),
        }),
      ).annotate({ identifier: "VmInstanceAggregation" });
    case 7:
      return S.suspend(() =>
        S.Struct({
          resourceIds: S.optional(__S(92, __c11, 4)),
          imageDigests: S.optional(__S(92, __c11, 4)),
          repositories: S.optional(__S(92, __c11, 4)),
          registries: S.optional(__S(92, __c11, 4)),
          architectures: S.optional(__S(92, __c11, 4)),
          imageTags: S.optional(__S(92, __c11, 4)),
          cloudProviders: S.optional(__S(92, __c11, 4)),
          cloudPartitions: S.optional(__S(92, __c11, 4)),
          cloudRegions: S.optional(__S(92, __c11, 4)),
          cloudOrgIds: S.optional(__S(92, __c11, 4)),
          cloudAccountIds: S.optional(__S(92, __c11, 4)),
          lastInUseAt: S.optional(__S(94, __c11, 6)),
          inUseCount: S.optional(__S(96, __c12, 0)),
          sortOrder: S.optional(S.String),
          sortBy: S.optional(S.String),
        }),
      ).annotate({
        identifier: "ContainerImageAggregation",
      });
  }
}
function __c36(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          resourceIds: S.optional(__S(92, __c11, 4)),
          functionNames: S.optional(__S(92, __c11, 4)),
          runtimes: S.optional(__S(92, __c11, 4)),
          functionTags: S.optional(__S(98, __c12, 2)),
          cloudProviders: S.optional(__S(92, __c11, 4)),
          cloudPartitions: S.optional(__S(92, __c11, 4)),
          cloudRegions: S.optional(__S(92, __c11, 4)),
          cloudOrgIds: S.optional(__S(92, __c11, 4)),
          cloudAccountIds: S.optional(__S(92, __c11, 4)),
          sortOrder: S.optional(S.String),
          sortBy: S.optional(S.String),
        }),
      ).annotate({
        identifier: "ServerlessFunctionAggregation",
      });
    case 1:
      return S.Union([
        /*@__PURE__*/ S.Struct({ accountAggregation: __S(275, __c34, 3) }),
        /*@__PURE__*/ S.Struct({ amiAggregation: __S(276, __c34, 4) }),
        /*@__PURE__*/ S.Struct({ awsEcrContainerAggregation: __S(277, __c34, 5) }),
        /*@__PURE__*/ S.Struct({ ec2InstanceAggregation: __S(278, __c34, 6) }),
        /*@__PURE__*/ S.Struct({ findingTypeAggregation: __S(275, __c34, 3) }),
        /*@__PURE__*/ S.Struct({ imageLayerAggregation: __S(279, __c34, 7) }),
        /*@__PURE__*/ S.Struct({ packageAggregation: __S(280, __c35, 0) }),
        /*@__PURE__*/ S.Struct({ repositoryAggregation: __S(281, __c35, 1) }),
        /*@__PURE__*/ S.Struct({ titleAggregation: __S(282, __c35, 2) }),
        /*@__PURE__*/ S.Struct({ lambdaLayerAggregation: __S(283, __c35, 3) }),
        /*@__PURE__*/ S.Struct({ lambdaFunctionAggregation: __S(284, __c35, 4) }),
        /*@__PURE__*/ S.Struct({ codeRepositoryAggregation: __S(285, __c35, 5) }),
        /*@__PURE__*/ S.Struct({ vmInstanceAggregation: __S(286, __c35, 6) }),
        /*@__PURE__*/ S.Struct({ containerImageAggregation: __S(287, __c35, 7) }),
        /*@__PURE__*/ S.Struct({ serverlessFunctionAggregation: __S(288, __c36, 0) }),
      ]);
    case 2:
      return S.suspend(() =>
        S.Struct({
          aggregationType: S.String,
          nextToken: S.optional(S.String),
          maxResults: S.optional(S.Number),
          accountIds: S.optional(__S(92, __c11, 4)),
          aggregationRequest: S.optional(__S(289, __c36, 1)),
        }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/findings/aggregation/list" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "ListFindingAggregationsRequest",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({
          all: S.optional(S.Number),
          medium: S.optional(S.Number),
          high: S.optional(S.Number),
          critical: S.optional(S.Number),
          low: S.optional(S.Number),
          informational: S.optional(S.Number),
          untriaged: S.optional(S.Number),
        }),
      ).annotate({ identifier: "SeverityCounts" });
    case 4:
      return S.suspend(() =>
        S.Struct({
          accountId: S.optional(S.String),
          severityCounts: S.optional(__S(291, __c36, 3)),
          exploitAvailableCount: S.optional(S.Number),
          fixAvailableCount: S.optional(S.Number),
        }),
      ).annotate({
        identifier: "AccountAggregationResponse",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({
          ami: S.String,
          accountId: S.optional(S.String),
          cloudProvider: S.optional(S.String),
          cloudPartition: S.optional(S.String),
          cloudRegion: S.optional(S.String),
          cloudOrgId: S.optional(S.String),
          cloudAccountId: S.optional(S.String),
          severityCounts: S.optional(__S(291, __c36, 3)),
          affectedInstances: S.optional(S.Number),
        }),
      ).annotate({ identifier: "AmiAggregationResponse" });
    case 6:
      return S.suspend(() =>
        S.Struct({
          resourceId: S.String,
          imageSha: S.optional(S.String),
          repository: S.optional(S.String),
          architecture: S.optional(S.String),
          imageTags: S.optional(__S(12, __c1, 4)),
          accountId: S.optional(S.String),
          severityCounts: S.optional(__S(291, __c36, 3)),
          lastInUseAt: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          inUseCount: S.optional(S.Number),
        }),
      ).annotate({
        identifier: "AwsEcrContainerAggregationResponse",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({
          instanceId: S.String,
          ami: S.optional(S.String),
          operatingSystem: S.optional(S.String),
          instanceTags: S.optional(__S(70, __c8, 6)),
          accountId: S.optional(S.String),
          severityCounts: S.optional(__S(291, __c36, 3)),
          networkFindings: S.optional(S.Number),
        }),
      ).annotate({
        identifier: "Ec2InstanceAggregationResponse",
      });
  }
}
function __c37(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          accountId: S.optional(S.String),
          severityCounts: S.optional(__S(291, __c36, 3)),
          exploitAvailableCount: S.optional(S.Number),
          fixAvailableCount: S.optional(S.Number),
          cloudProvider: S.optional(S.String),
          cloudAccountId: S.optional(S.String),
          cloudOrgId: S.optional(S.String),
          cloudRegion: S.optional(S.String),
          cloudPartition: S.optional(S.String),
        }),
      ).annotate({
        identifier: "FindingTypeAggregationResponse",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({
          repository: S.String,
          resourceId: S.String,
          layerHash: S.String,
          accountId: S.String,
          cloudProvider: S.optional(S.String),
          cloudAccountId: S.optional(S.String),
          cloudOrgId: S.optional(S.String),
          cloudRegion: S.optional(S.String),
          cloudPartition: S.optional(S.String),
          severityCounts: S.optional(__S(291, __c36, 3)),
        }),
      ).annotate({
        identifier: "ImageLayerAggregationResponse",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({
          packageName: S.String,
          accountId: S.optional(S.String),
          severityCounts: S.optional(__S(291, __c36, 3)),
        }),
      ).annotate({
        identifier: "PackageAggregationResponse",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({
          repository: S.String,
          accountId: S.optional(S.String),
          cloudProvider: S.optional(S.String),
          cloudPartition: S.optional(S.String),
          cloudRegion: S.optional(S.String),
          cloudOrgId: S.optional(S.String),
          cloudAccountId: S.optional(S.String),
          severityCounts: S.optional(__S(291, __c36, 3)),
          affectedImages: S.optional(S.Number),
        }),
      ).annotate({
        identifier: "RepositoryAggregationResponse",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({
          title: S.String,
          vulnerabilityId: S.optional(S.String),
          accountId: S.optional(S.String),
          severityCounts: S.optional(__S(291, __c36, 3)),
        }),
      ).annotate({ identifier: "TitleAggregationResponse" });
    case 5:
      return S.suspend(() =>
        S.Struct({
          functionName: S.String,
          resourceId: S.String,
          layerArn: S.String,
          accountId: S.String,
          severityCounts: S.optional(__S(291, __c36, 3)),
        }),
      ).annotate({
        identifier: "LambdaLayerAggregationResponse",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({
          resourceId: S.String,
          functionName: S.optional(S.String),
          runtime: S.optional(S.String),
          lambdaTags: S.optional(__S(70, __c8, 6)),
          accountId: S.optional(S.String),
          severityCounts: S.optional(__S(291, __c36, 3)),
          lastModifiedAt: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
        }),
      ).annotate({
        identifier: "LambdaFunctionAggregationResponse",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({
          projectNames: S.String,
          providerType: S.optional(S.String),
          severityCounts: S.optional(__S(291, __c36, 3)),
          exploitAvailableActiveFindingsCount: S.optional(S.Number),
          fixAvailableActiveFindingsCount: S.optional(S.Number),
          accountId: S.optional(S.String),
          resourceId: S.optional(S.String),
        }),
      ).annotate({
        identifier: "CodeRepositoryAggregationResponse",
      });
  }
}
function __c38(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          resourceId: S.String,
          cloudProvider: S.optional(S.String),
          cloudAccountId: S.optional(S.String),
          cloudPartition: S.optional(S.String),
          cloudRegion: S.optional(S.String),
          cloudOrgId: S.optional(S.String),
          vmImageReference: S.optional(S.String),
          operatingSystem: S.optional(S.String),
          tags: S.optional(__S(70, __c8, 6)),
          accountId: S.optional(S.String),
          severityCounts: S.optional(__S(291, __c36, 3)),
          networkFindings: S.optional(S.Number),
          exploitAvailableActiveFindingsCount: S.optional(S.Number),
          fixAvailableActiveFindingsCount: S.optional(S.Number),
        }),
      ).annotate({
        identifier: "VmInstanceAggregationResponse",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({
          resourceId: S.String,
          cloudProvider: S.optional(S.String),
          cloudAccountId: S.optional(S.String),
          cloudPartition: S.optional(S.String),
          cloudRegion: S.optional(S.String),
          cloudOrgId: S.optional(S.String),
          imageDigest: S.optional(S.String),
          repository: S.optional(S.String),
          registry: S.optional(S.String),
          architecture: S.optional(S.String),
          imageTags: S.optional(__S(12, __c1, 4)),
          accountId: S.optional(S.String),
          severityCounts: S.optional(__S(291, __c36, 3)),
          lastInUseAt: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          inUseCount: S.optional(S.Number),
          exploitAvailableActiveFindingsCount: S.optional(S.Number),
          fixAvailableActiveFindingsCount: S.optional(S.Number),
        }),
      ).annotate({
        identifier: "ContainerImageAggregationResponse",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({
          resourceId: S.String,
          cloudProvider: S.optional(S.String),
          cloudAccountId: S.optional(S.String),
          cloudPartition: S.optional(S.String),
          cloudRegion: S.optional(S.String),
          cloudOrgId: S.optional(S.String),
          functionName: S.optional(S.String),
          runtime: S.optional(S.String),
          tags: S.optional(__S(70, __c8, 6)),
          accountId: S.optional(S.String),
          severityCounts: S.optional(__S(291, __c36, 3)),
          lastModifiedAt: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          exploitAvailableActiveFindingsCount: S.optional(S.Number),
          fixAvailableActiveFindingsCount: S.optional(S.Number),
        }),
      ).annotate({
        identifier: "ServerlessFunctionAggregationResponse",
      });
    case 3:
      return S.Union([
        /*@__PURE__*/ S.Struct({ accountAggregation: __S(292, __c36, 4) }),
        /*@__PURE__*/ S.Struct({ amiAggregation: __S(293, __c36, 5) }),
        /*@__PURE__*/ S.Struct({ awsEcrContainerAggregation: __S(294, __c36, 6) }),
        /*@__PURE__*/ S.Struct({ ec2InstanceAggregation: __S(295, __c36, 7) }),
        /*@__PURE__*/ S.Struct({ findingTypeAggregation: __S(296, __c37, 0) }),
        /*@__PURE__*/ S.Struct({ imageLayerAggregation: __S(297, __c37, 1) }),
        /*@__PURE__*/ S.Struct({ packageAggregation: __S(298, __c37, 2) }),
        /*@__PURE__*/ S.Struct({ repositoryAggregation: __S(299, __c37, 3) }),
        /*@__PURE__*/ S.Struct({ titleAggregation: __S(300, __c37, 4) }),
        /*@__PURE__*/ S.Struct({ lambdaLayerAggregation: __S(301, __c37, 5) }),
        /*@__PURE__*/ S.Struct({ lambdaFunctionAggregation: __S(302, __c37, 6) }),
        /*@__PURE__*/ S.Struct({ codeRepositoryAggregation: __S(303, __c37, 7) }),
        /*@__PURE__*/ S.Struct({ vmInstanceAggregation: __S(304, __c38, 0) }),
        /*@__PURE__*/ S.Struct({ containerImageAggregation: __S(305, __c38, 1) }),
        /*@__PURE__*/ S.Struct({
          serverlessFunctionAggregation: __S(306, __c38, 2),
        }),
      ]);
    case 4:
      return S.Array(__S(307, __c38, 3));
    case 5:
      return S.suspend(() =>
        S.Struct({
          aggregationType: S.String,
          responses: S.optional(__S(308, __c38, 4)),
          nextToken: S.optional(S.String),
        }),
      ).annotate({
        identifier: "ListFindingAggregationsResponse",
      });
    case 6:
      return S.suspend(() => S.Struct({ field: S.String, sortOrder: S.String })).annotate({
        identifier: "SortCriteria",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({
          maxResults: S.optional(S.Number),
          nextToken: S.optional(S.String),
          filterCriteria: S.optional(__S(103, __c12, 7)),
          sortCriteria: S.optional(__S(310, __c38, 6)),
        }).pipe(
          T.all(T.Http({ method: "POST", uri: "/findings/list" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({ identifier: "ListFindingsRequest" });
  }
}
function __c39(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({ text: S.optional(S.String), Url: S.optional(S.String) }),
      ).annotate({ identifier: "Recommendation" });
    case 1:
      return S.suspend(() => S.Struct({ recommendation: S.optional(__S(312, __c39, 0)) })).annotate(
        {
          identifier: "Remediation",
        },
      );
    case 2:
      return S.suspend(() =>
        S.Struct({
          type: S.optional(S.String),
          imageId: S.optional(S.String),
          ipV4Addresses: S.optional(__S(12, __c1, 4)),
          ipV6Addresses: S.optional(__S(12, __c1, 4)),
          keyName: S.optional(S.String),
          iamInstanceProfileArn: S.optional(S.String),
          vpcId: S.optional(S.String),
          subnetId: S.optional(S.String),
          launchedAt: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          platform: S.optional(S.String),
        }),
      ).annotate({ identifier: "AwsEc2InstanceDetails" });
    case 3:
      return S.suspend(() =>
        S.Struct({
          repositoryName: S.String,
          imageTags: S.optional(__S(12, __c1, 4)),
          pushedAt: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          author: S.optional(S.String),
          architecture: S.optional(S.String),
          imageHash: S.String,
          registry: S.String,
          platform: S.optional(S.String),
          lastInUseAt: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          inUseCount: S.optional(S.Number),
        }),
      ).annotate({
        identifier: "AwsEcrContainerImageDetails",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({
          subnetIds: S.optional(__S(12, __c1, 4)),
          securityGroupIds: S.optional(__S(12, __c1, 4)),
          vpcId: S.optional(S.String),
        }),
      ).annotate({ identifier: "LambdaVpcConfig" });
    case 5:
      return S.suspend(() =>
        S.Struct({
          functionName: S.String,
          runtime: S.String,
          codeSha256: S.String,
          version: S.String,
          executionRoleArn: S.String,
          layers: S.optional(__S(12, __c1, 4)),
          vpcConfig: S.optional(__S(316, __c39, 4)),
          packageType: S.optional(S.String),
          architectures: S.optional(__S(12, __c1, 4)),
          lastModifiedAt: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
        }),
      ).annotate({ identifier: "AwsLambdaFunctionDetails" });
    case 6:
      return S.suspend(() =>
        S.Struct({
          projectName: S.optional(S.String),
          integrationArn: S.optional(S.String),
          providerType: S.optional(S.String),
        }),
      ).annotate({ identifier: "CodeRepositoryDetails" });
    case 7:
      return S.suspend(() =>
        S.Struct({
          type: S.optional(S.String),
          vmName: S.optional(S.String),
          vmImageReference: S.optional(S.String),
          ipV4Addresses: S.optional(__S(12, __c1, 4)),
          ipV6Addresses: S.optional(__S(12, __c1, 4)),
          networkId: S.optional(S.String),
          subnetIds: S.optional(__S(12, __c1, 4)),
          securityGroupIds: S.optional(__S(12, __c1, 4)),
          launchedAt: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          platform: S.optional(S.String),
          executionRole: S.optional(S.String),
          keyName: S.optional(S.String),
        }),
      ).annotate({ identifier: "Vm" });
  }
}
function __c40(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          repositoryName: S.optional(S.String),
          registry: S.optional(S.String),
          imageTags: S.optional(__S(12, __c1, 4)),
          imageDigest: S.optional(S.String),
          pushedAt: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          architecture: S.optional(S.String),
          author: S.optional(S.String),
          inUseCount: S.optional(S.Number),
          lastInUseAt: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          platform: S.optional(S.String),
        }),
      ).annotate({ identifier: "Image" });
    case 1:
      return S.suspend(() =>
        S.Struct({
          serverlessFunctionName: S.optional(S.String),
          runtime: S.optional(S.String),
          version: S.optional(S.String),
          codeDigest: S.optional(S.String),
          lastModifiedAt: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          networkId: S.optional(S.String),
          subnetIds: S.optional(__S(12, __c1, 4)),
          securityGroupIds: S.optional(__S(12, __c1, 4)),
          executionRole: S.optional(S.String),
          packageType: S.optional(S.String),
          architectures: S.optional(__S(12, __c1, 4)),
          layers: S.optional(__S(12, __c1, 4)),
        }),
      ).annotate({ identifier: "ServerlessFunction" });
    case 2:
      return S.suspend(() =>
        S.Struct({
          awsEc2Instance: S.optional(__S(314, __c39, 2)),
          awsEcrContainerImage: S.optional(__S(315, __c39, 3)),
          awsLambdaFunction: S.optional(__S(317, __c39, 5)),
          codeRepository: S.optional(__S(318, __c39, 6)),
          vm: S.optional(__S(319, __c39, 7)),
          image: S.optional(__S(320, __c40, 0)),
          serverlessFunction: S.optional(__S(321, __c40, 1)),
        }),
      ).annotate({ identifier: "ResourceDetails" });
    case 3:
      return S.suspend(() =>
        S.Struct({
          type: S.String,
          id: S.String,
          partition: S.optional(S.String),
          region: S.optional(S.String),
          tags: S.optional(__S(70, __c8, 6)),
          details: S.optional(__S(322, __c40, 2)),
          provider: S.optional(S.String),
          providerAccountId: S.optional(S.String),
          providerOrgId: S.optional(S.String),
        }),
      ).annotate({ identifier: "Resource" });
    case 4:
      return S.Array(__S(323, __c40, 3));
    case 5:
      return S.suspend(() => S.Struct({ metric: S.String, reason: S.String })).annotate({
        identifier: "CvssScoreAdjustment",
      });
    case 6:
      return S.Array(__S(325, __c40, 5));
    case 7:
      return S.suspend(() =>
        S.Struct({
          scoreSource: S.String,
          cvssSource: S.optional(S.String),
          version: S.String,
          score: S.Number,
          scoringVector: S.String,
          adjustments: S.optional(__S(326, __c40, 6)),
        }),
      ).annotate({ identifier: "CvssScoreDetails" });
  }
}
function __c41(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() => S.Struct({ adjustedCvss: S.optional(__S(327, __c40, 7)) })).annotate({
        identifier: "InspectorScoreDetails",
      });
    case 1:
      return S.suspend(() => S.Struct({ begin: S.Number, end: S.Number })).annotate({
        identifier: "PortRange",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({
          componentId: S.String,
          componentType: S.String,
          componentArn: S.optional(S.String),
        }),
      ).annotate({ identifier: "Step" });
    case 3:
      return S.Array(__S(330, __c41, 2));
    case 4:
      return S.suspend(() => S.Struct({ steps: S.optional(__S(331, __c41, 3)) })).annotate({
        identifier: "NetworkPath",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({
          openPortRange: __S(329, __c41, 1),
          protocol: S.String,
          networkPath: __S(332, __c41, 4),
        }),
      ).annotate({
        identifier: "NetworkReachabilityDetails",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({
          name: S.String,
          version: S.String,
          sourceLayerHash: S.optional(S.String),
          epoch: S.optional(S.Number),
          release: S.optional(S.String),
          arch: S.optional(S.String),
          packageManager: S.optional(S.String),
          filePath: S.optional(S.String),
          fixedInVersion: S.optional(S.String),
          remediation: S.optional(S.String),
          sourceLambdaLayerArn: S.optional(S.String),
        }),
      ).annotate({ identifier: "VulnerablePackage" });
    case 7:
      return S.Array(__S(334, __c41, 6));
  }
}
function __c42(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          baseScore: S.Number,
          scoringVector: S.String,
          version: S.String,
          source: S.String,
        }),
      ).annotate({ identifier: "CvssScore" });
    case 1:
      return S.Array(__S(336, __c42, 0));
    case 2:
      return S.suspend(() =>
        S.Struct({
          vulnerabilityId: S.String,
          vulnerablePackages: S.optional(__S(335, __c41, 7)),
          source: S.String,
          cvss: S.optional(__S(337, __c42, 1)),
          relatedVulnerabilities: S.optional(__S(12, __c1, 4)),
          sourceUrl: S.optional(S.String),
          vendorSeverity: S.optional(S.String),
          vendorCreatedAt: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          vendorUpdatedAt: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          referenceUrls: S.optional(__S(12, __c1, 4)),
        }),
      ).annotate({
        identifier: "PackageVulnerabilityDetails",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({
          lastKnownExploitAt: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
        }),
      ).annotate({ identifier: "ExploitabilityDetails" });
    case 4:
      return S.suspend(() =>
        S.Struct({
          fileName: S.String,
          filePath: S.String,
          startLine: S.Number,
          endLine: S.Number,
        }),
      ).annotate({ identifier: "CodeFilePath" });
    case 5:
      return S.suspend(() =>
        S.Struct({
          filePath: __S(340, __c42, 4),
          detectorTags: S.optional(__S(12, __c1, 4)),
          referenceUrls: S.optional(__S(12, __c1, 4)),
          ruleId: S.optional(S.String),
          sourceLambdaLayerArn: S.optional(S.String),
          detectorId: S.String,
          detectorName: S.String,
          cwes: __S(12, __c1, 4),
        }),
      ).annotate({ identifier: "CodeVulnerabilityDetails" });
    case 6:
      return S.suspend(() => S.Struct({ score: S.optional(S.Number) })).annotate({
        identifier: "EpssDetails",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({
          findingArn: S.String,
          awsAccountId: S.String,
          type: S.String,
          description: S.String,
          title: S.optional(S.String),
          remediation: __S(313, __c39, 1),
          severity: S.String,
          firstObservedAt: S.Date.pipe(T.TimestampFormat("epoch-seconds")),
          lastObservedAt: S.Date.pipe(T.TimestampFormat("epoch-seconds")),
          updatedAt: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          status: S.String,
          resources: __S(324, __c40, 4),
          inspectorScore: S.optional(S.Number),
          inspectorScoreDetails: S.optional(__S(328, __c41, 0)),
          networkReachabilityDetails: S.optional(__S(333, __c41, 5)),
          packageVulnerabilityDetails: S.optional(__S(338, __c42, 2)),
          fixAvailable: S.optional(S.String),
          exploitAvailable: S.optional(S.String),
          exploitabilityDetails: S.optional(__S(339, __c42, 3)),
          codeVulnerabilityDetails: S.optional(__S(341, __c42, 5)),
          epss: S.optional(__S(342, __c42, 6)),
        }),
      ).annotate({ identifier: "Finding" });
  }
}
function __c43(j: number): any {
  switch (j) {
    case 0:
      return S.Array(__S(343, __c42, 7));
    case 1:
      return S.suspend(() =>
        S.Struct({ nextToken: S.optional(S.String), findings: S.optional(__S(344, __c43, 0)) }),
      ).annotate({ identifier: "ListFindingsResponse" });
    case 2:
      return S.suspend(() =>
        S.Struct({
          onlyAssociated: S.optional(S.Boolean),
          maxResults: S.optional(S.Number),
          nextToken: S.optional(S.String),
        }).pipe(
          T.all(T.Http({ method: "POST", uri: "/members/list" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({ identifier: "ListMembersRequest" });
    case 3:
      return S.Array(__S(176, __c22, 0));
    case 4:
      return S.suspend(() =>
        S.Struct({ members: S.optional(__S(347, __c43, 3)), nextToken: S.optional(S.String) }),
      ).annotate({ identifier: "ListMembersResponse" });
    case 5:
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
    case 6:
      return S.suspend(() => S.Struct({ tags: S.optional(__S(70, __c8, 6)) })).annotate({
        identifier: "ListTagsForResourceResponse",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({
          maxResults: S.optional(S.Number),
          nextToken: S.optional(S.String),
          accountIds: S.optional(__S(12, __c1, 4)),
        }).pipe(
          T.all(T.Http({ method: "POST", uri: "/usage/list" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({ identifier: "ListUsageTotalsRequest" });
  }
}
function __c44(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          type: S.optional(S.String),
          total: S.optional(S.Number),
          estimatedMonthlyCost: S.optional(S.Number),
          currency: S.optional(S.String),
          cloudProvider: S.optional(S.String),
        }),
      ).annotate({ identifier: "Usage" });
    case 1:
      return S.Array(__S(352, __c44, 0));
    case 2:
      return S.suspend(() =>
        S.Struct({ accountId: S.optional(S.String), usage: S.optional(__S(353, __c44, 1)) }),
      ).annotate({ identifier: "UsageTotal" });
    case 3:
      return S.Array(__S(354, __c44, 2));
    case 4:
      return S.suspend(() =>
        S.Struct({ nextToken: S.optional(S.String), totals: S.optional(__S(355, __c44, 3)) }),
      ).annotate({ identifier: "ListUsageTotalsResponse" });
    case 5:
      return S.suspend(() =>
        S.Struct({ scanType: S.String, resourceType: S.String }).pipe(
          T.all(
            T.Http({ method: "PUT", uri: "/encryptionkey/reset" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "ResetEncryptionKeyRequest",
      });
    case 6:
      return S.suspend(() => S.Struct({ vulnerabilityIds: __S(12, __c1, 4) })).annotate({
        identifier: "SearchVulnerabilitiesFilterCriteria",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({
          filterCriteria: __S(358, __c44, 6),
          nextToken: S.optional(S.String),
        }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/vulnerabilities/search" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "SearchVulnerabilitiesRequest",
      });
  }
}
function __c45(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          firstSeen: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          lastSeen: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          targets: S.optional(__S(12, __c1, 4)),
          ttps: S.optional(__S(12, __c1, 4)),
        }),
      ).annotate({ identifier: "AtigData" });
    case 1:
      return S.suspend(() =>
        S.Struct({ baseScore: S.optional(S.Number), scoringVector: S.optional(S.String) }),
      ).annotate({ identifier: "Cvss4" });
    case 2:
      return S.suspend(() =>
        S.Struct({
          id: S.String,
          cwes: S.optional(__S(12, __c1, 4)),
          cisaData: S.optional(__S(33, __c4, 1)),
          source: S.optional(S.String),
          description: S.optional(S.String),
          atigData: S.optional(__S(360, __c45, 0)),
          vendorSeverity: S.optional(S.String),
          cvss4: S.optional(__S(361, __c45, 1)),
          cvss3: S.optional(__S(361, __c45, 1)),
          relatedVulnerabilities: S.optional(__S(12, __c1, 4)),
          cvss2: S.optional(__S(361, __c45, 1)),
          vendorCreatedAt: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          vendorUpdatedAt: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          sourceUrl: S.optional(S.String),
          referenceUrls: S.optional(__S(12, __c1, 4)),
          exploitObserved: S.optional(__S(36, __c4, 4)),
          detectionPlatforms: S.optional(__S(12, __c1, 4)),
          epss: S.optional(__S(342, __c42, 6)),
        }),
      ).annotate({ identifier: "Vulnerability" });
    case 3:
      return S.Array(__S(362, __c45, 2));
    case 4:
      return S.suspend(() =>
        S.Struct({ vulnerabilities: __S(363, __c45, 3), nextToken: S.optional(S.String) }),
      ).annotate({
        identifier: "SearchVulnerabilitiesResponse",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({ scanJobId: S.String, sessionToken: S.String }).pipe(
          T.all(
            T.Http({ method: "PUT", uri: "/cissession/health/send" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "SendCisSessionHealthRequest",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({ ruleId: S.String, status: S.String, cisRuleDetails: T.Blob }),
      ).annotate({ identifier: "CisSessionMessage" });
    case 7:
      return S.Array(__S(366, __c45, 6));
  }
}
function __c46(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          scanJobId: S.String,
          sessionToken: S.String,
          messages: __S(367, __c45, 7),
        }).pipe(
          T.all(
            T.Http({ method: "PUT", uri: "/cissession/telemetry/send" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "SendCisSessionTelemetryRequest",
      });
    case 1:
      return S.suspend(() => S.Struct({})).annotate({
        identifier: "SendCisSessionTelemetryResponse",
      });
    case 2:
      return S.suspend(() => S.Struct({ sessionToken: S.String })).annotate({
        identifier: "StartCisSessionMessage",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({ scanJobId: S.String, message: __S(370, __c46, 2) }).pipe(
          T.all(T.Http({ method: "PUT", uri: "/cissession/start" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({ identifier: "StartCisSessionRequest" });
    case 4:
      return S.suspend(() =>
        S.Struct({
          clientToken: S.optional(S.String).pipe(T.IdempotencyToken()),
          resource: __S(2, __c0, 2),
        }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/codesecurity/scan/start" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "StartCodeSecurityScanRequest",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({ scanId: S.optional(S.String), status: S.optional(S.String) }),
      ).annotate({
        identifier: "StartCodeSecurityScanResponse",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({
          totalChecks: S.optional(S.Number),
          successfulChecks: S.optional(S.Number),
          failedChecks: S.optional(S.Number),
          notEvaluatedChecks: S.optional(S.Number),
          unknownChecks: S.optional(S.Number),
          notApplicableChecks: S.optional(S.Number),
          informationalChecks: S.optional(S.Number),
          errorChecks: S.optional(S.Number),
        }),
      ).annotate({ identifier: "StopCisMessageProgress" });
    case 7:
      return S.suspend(() =>
        S.Struct({
          vendor: S.optional(S.String),
          product: S.optional(S.String),
          version: S.optional(S.String),
        }),
      ).annotate({ identifier: "ComputePlatform" });
  }
}
function __c47(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          status: S.String,
          reason: S.optional(S.String),
          progress: __S(374, __c46, 6),
          computePlatform: S.optional(__S(375, __c46, 7)),
          benchmarkVersion: S.optional(S.String),
          benchmarkProfile: S.optional(S.String),
        }),
      ).annotate({ identifier: "StopCisSessionMessage" });
    case 1:
      return S.suspend(() =>
        S.Struct({
          scanJobId: S.String,
          sessionToken: S.String,
          message: __S(376, __c47, 0),
        }).pipe(
          T.all(T.Http({ method: "PUT", uri: "/cissession/stop" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({ identifier: "StopCisSessionRequest" });
    case 2:
      return S.suspend(() =>
        S.Struct({
          resourceArn: S.String.pipe(T.HttpLabel("resourceArn")),
          tags: __S(70, __c8, 6),
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
      return S.suspend(() =>
        S.Struct({
          resourceArn: S.String.pipe(T.HttpLabel("resourceArn")),
          tagKeys: __S(12, __c1, 4).pipe(T.HttpQuery("tagKeys")),
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
    case 4:
      return S.suspend(() =>
        S.Struct({
          scanConfigurationArn: S.String,
          scanName: S.optional(S.String),
          securityLevel: S.optional(S.String),
          schedule: S.optional(__S(67, __c8, 3)),
          targets: S.optional(__S(188, __c23, 4)),
        }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/cis/scan-configuration/update" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "UpdateCisScanConfigurationRequest",
      });
    case 5:
      return S.suspend(() => S.Struct({ authCode: SensitiveString })).annotate({
        identifier: "UpdateGitLabSelfManagedIntegrationDetail",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({ code: SensitiveString, installationId: S.String }),
      ).annotate({
        identifier: "UpdateGitHubIntegrationDetail",
      });
    case 7:
      return S.Union([
        /*@__PURE__*/ S.Struct({ gitlabSelfManaged: __S(381, __c47, 5) }),
        /*@__PURE__*/ S.Struct({ github: __S(382, __c47, 6) }),
      ]);
  }
}
function __c48(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({ integrationArn: S.String, details: __S(383, __c47, 7) }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/codesecurity/integration/update" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "UpdateCodeSecurityIntegrationRequest",
      });
    case 1:
      return S.suspend(() => S.Struct({ integrationArn: S.String, status: S.String })).annotate({
        identifier: "UpdateCodeSecurityIntegrationResponse",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({
          scanConfigurationArn: S.String,
          configuration: __S(80, __c10, 0),
        }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/codesecurity/scan-configuration/update" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "UpdateCodeSecurityScanConfigurationRequest",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({
          rescanDuration: S.String,
          pullDateRescanDuration: S.optional(S.String),
          pullDateRescanMode: S.optional(S.String),
        }),
      ).annotate({ identifier: "EcrConfiguration" });
    case 4:
      return S.suspend(() =>
        S.Struct({ scanMode: S.String, activateVMScanner: S.optional(S.Boolean) }),
      ).annotate({ identifier: "Ec2Configuration" });
    case 5:
      return S.suspend(() =>
        S.Struct({
          ec2Configuration: S.optional(S.String),
          ecrConfiguration: S.optional(S.String),
        }),
      ).annotate({
        identifier: "UpdateConfigurationInheritance",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({
          accountId: S.optional(S.String),
          ecrConfiguration: S.optional(__S(387, __c48, 3)),
          ec2Configuration: S.optional(__S(388, __c48, 4)),
          updateConfigurationInheritance: S.optional(__S(389, __c48, 5)),
        }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/configuration/update" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "UpdateConfigurationRequest",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({
          azureRegions: S.optional(__S(12, __c1, 4)),
          scopeConfiguration: S.optional(__S(85, __c10, 5)),
          autoInstallVMScanner: S.optional(S.Boolean),
        }),
      ).annotate({
        identifier: "AzureProviderDetailUpdate",
      });
  }
}
function __c49(j: number): any {
  switch (j) {
    case 0:
      return S.Union([/*@__PURE__*/ S.Struct({ azure: __S(391, __c48, 7) })]);
    case 1:
      return S.suspend(() =>
        S.Struct({
          connectorArn: S.String,
          description: S.optional(S.String),
          providerDetail: S.optional(__S(392, __c49, 0)),
        }).pipe(
          T.all(T.Http({ method: "POST", uri: "/connector/update" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({ identifier: "UpdateConnectorRequest" });
    case 2:
      return S.suspend(() => S.Struct({ connectorArn: S.optional(S.String) })).annotate({
        identifier: "UpdateConnectorResponse",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({
          awsConfigConnectorArn: S.String,
          scanConfiguration: __S(236, __c29, 4),
        }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/connectorscanconfiguration/update" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "UpdateConnectorScanConfigurationRequest",
      });
    case 4:
      return S.suspend(() => S.Struct({})).annotate({
        identifier: "UpdateConnectorScanConfigurationResponse",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({
          activateDeepInspection: S.optional(S.Boolean),
          packagePaths: S.optional(__S(12, __c1, 4)),
        }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/ec2deepinspectionconfiguration/update" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "UpdateEc2DeepInspectionConfigurationRequest",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({ kmsKeyId: S.String, scanType: S.String, resourceType: S.String }).pipe(
          T.all(
            T.Http({ method: "PUT", uri: "/encryptionkey/update" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "UpdateEncryptionKeyRequest",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({
          action: S.optional(S.String),
          description: S.optional(S.String),
          filterCriteria: S.optional(__S(103, __c12, 7)),
          name: S.optional(S.String),
          filterArn: S.String,
          reason: S.optional(S.String),
        }).pipe(
          T.all(T.Http({ method: "POST", uri: "/filters/update" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({ identifier: "UpdateFilterRequest" });
  }
}
function __c50(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({ autoEnable: __S(118, __c14, 6) }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/organizationconfiguration/update" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "UpdateOrganizationConfigurationRequest",
      });
    case 1:
      return S.suspend(() => S.Struct({ autoEnable: __S(118, __c14, 6) })).annotate({
        identifier: "UpdateOrganizationConfigurationResponse",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({ orgPackagePaths: __S(12, __c1, 4) }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/ec2deepinspectionconfiguration/org/update" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "UpdateOrgEc2DeepInspectionConfigurationRequest",
      });
    case 3:
      return S.suspend(() => S.Struct({ name: S.String, message: S.String })).annotate({
        identifier: "ValidationExceptionField",
      });
    case 4:
      return S.Array(__S(403, __c50, 3));
  }
}

// Schema table: entry i is schema j of builder f, made on first reach.
function __S(i: number, f: (j: number) => unknown, j: number): any {
  return (__s[i] ??= __L.at(f, j));
}
