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
        /*@__PURE__*/ S.suspend(() => __S(404)).annotate({
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
  input: __S(0) as any as S.Schema<AssociateMemberRequest>,
  output: __S(1) as any as S.Schema<AssociateMemberResponse>,
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
  input: __S(5) as any as S.Schema<BatchAssociateCodeSecurityScanConfigurationRequest>,
  output: __S(10) as any as S.Schema<BatchAssociateCodeSecurityScanConfigurationResponse>,
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
  input: __S(11) as any as S.Schema<BatchDisassociateCodeSecurityScanConfigurationRequest>,
  output: __S(10) as any as S.Schema<BatchDisassociateCodeSecurityScanConfigurationResponse>,
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
  input: __S(13) as any as S.Schema<BatchGetAccountStatusRequest>,
  output: __S(21) as any as S.Schema<BatchGetAccountStatusResponse>,
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
  input: __S(22) as any as S.Schema<BatchGetCodeSnippetRequest>,
  output: __S(31) as any as S.Schema<BatchGetCodeSnippetResponse>,
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
  input: __S(32) as any as S.Schema<BatchGetFindingDetailsRequest>,
  output: __S(39) as any as S.Schema<BatchGetFindingDetailsResponse>,
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
  input: __S(40) as any as S.Schema<BatchGetFreeTrialInfoRequest>,
  output: __S(47) as any as S.Schema<BatchGetFreeTrialInfoResponse>,
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
  input: __S(48) as any as S.Schema<BatchGetMemberEc2DeepInspectionStatusRequest>,
  output: __S(53) as any as S.Schema<BatchGetMemberEc2DeepInspectionStatusResponse>,
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
  input: __S(56) as any as S.Schema<BatchUpdateMemberEc2DeepInspectionStatusRequest>,
  output: __S(53) as any as S.Schema<BatchUpdateMemberEc2DeepInspectionStatusResponse>,
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
  input: __S(57) as any as S.Schema<CancelFindingsReportRequest>,
  output: __S(58) as any as S.Schema<CancelFindingsReportResponse>,
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
  input: __S(59) as any as S.Schema<CancelSbomExportRequest>,
  output: __S(60) as any as S.Schema<CancelSbomExportResponse>,
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
  input: __S(71) as any as S.Schema<CreateCisScanConfigurationRequest>,
  output: __S(72) as any as S.Schema<CreateCisScanConfigurationResponse>,
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
  input: __S(75) as any as S.Schema<CreateCodeSecurityIntegrationRequest>,
  output: __S(76) as any as S.Schema<CreateCodeSecurityIntegrationResponse>,
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
  input: __S(82) as any as S.Schema<CreateCodeSecurityScanConfigurationRequest>,
  output: __S(83) as any as S.Schema<CreateCodeSecurityScanConfigurationResponse>,
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
  input: __S(89) as any as S.Schema<CreateConnectorRequest>,
  output: __S(90) as any as S.Schema<CreateConnectorResponse>,
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
  input: __S(104) as any as S.Schema<CreateFilterRequest>,
  output: __S(105) as any as S.Schema<CreateFilterResponse>,
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
  input: __S(107) as any as S.Schema<CreateFindingsReportRequest>,
  output: __S(108) as any as S.Schema<CreateFindingsReportResponse>,
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
  input: __S(110) as any as S.Schema<CreateSbomExportRequest>,
  output: __S(60) as any as S.Schema<CreateSbomExportResponse>,
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
  input: __S(111) as any as S.Schema<DeleteCisScanConfigurationRequest>,
  output: __S(83) as any as S.Schema<DeleteCisScanConfigurationResponse>,
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
  input: __S(112) as any as S.Schema<DeleteCodeSecurityIntegrationRequest>,
  output: __S(113) as any as S.Schema<DeleteCodeSecurityIntegrationResponse>,
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
  input: __S(114) as any as S.Schema<DeleteCodeSecurityScanConfigurationRequest>,
  output: __S(72) as any as S.Schema<DeleteCodeSecurityScanConfigurationResponse>,
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
  input: __S(115) as any as S.Schema<DeleteConnectorRequest>,
  output: __S(61) as any as S.Schema<DeleteConnectorResponse>,
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
  input: __S(116) as any as S.Schema<DeleteFilterRequest>,
  output: __S(105) as any as S.Schema<DeleteFilterResponse>,
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
  input: __S(117) as any as S.Schema<DescribeOrganizationConfigurationRequest>,
  output: __S(119) as any as S.Schema<DescribeOrganizationConfigurationResponse>,
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
  input: __S(120) as any as S.Schema<DisableRequest>,
  output: __S(123) as any as S.Schema<DisableResponse>,
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
  input: __S(124) as any as S.Schema<DisableDelegatedAdminAccountRequest>,
  output: __S(125) as any as S.Schema<DisableDelegatedAdminAccountResponse>,
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
  input: __S(126) as any as S.Schema<DisassociateMemberRequest>,
  output: __S(127) as any as S.Schema<DisassociateMemberResponse>,
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
  input: __S(128) as any as S.Schema<EnableRequest>,
  output: __S(123) as any as S.Schema<EnableResponse>,
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
  input: __S(129) as any as S.Schema<EnableDelegatedAdminAccountRequest>,
  output: __S(125) as any as S.Schema<EnableDelegatedAdminAccountResponse>,
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
  input: __S(130) as any as S.Schema<GetCisScanReportRequest>,
  output: __S(131) as any as S.Schema<GetCisScanReportResponse>,
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
  input: __S(137) as any as S.Schema<GetCisScanResultDetailsRequest>,
  output: __S(140) as any as S.Schema<GetCisScanResultDetailsResponse>,
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
  input: __S(142) as any as S.Schema<GetClustersForImageRequest>,
  output: __S(152) as any as S.Schema<GetClustersForImageResponse>,
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
  input: __S(153) as any as S.Schema<GetCodeSecurityIntegrationRequest>,
  output: __S(154) as any as S.Schema<GetCodeSecurityIntegrationResponse>,
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
  input: __S(155) as any as S.Schema<GetCodeSecurityScanRequest>,
  output: __S(156) as any as S.Schema<GetCodeSecurityScanResponse>,
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
  input: __S(157) as any as S.Schema<GetCodeSecurityScanConfigurationRequest>,
  output: __S(158) as any as S.Schema<GetCodeSecurityScanConfigurationResponse>,
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
  input: __S(159) as any as S.Schema<GetConfigurationRequest>,
  output: __S(165) as any as S.Schema<GetConfigurationResponse>,
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
  input: __S(166) as any as S.Schema<GetDelegatedAdminAccountRequest>,
  output: __S(168) as any as S.Schema<GetDelegatedAdminAccountResponse>,
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
  input: __S(169) as any as S.Schema<GetEc2DeepInspectionConfigurationRequest>,
  output: __S(170) as any as S.Schema<GetEc2DeepInspectionConfigurationResponse>,
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
  input: __S(171) as any as S.Schema<GetEncryptionKeyRequest>,
  output: __S(172) as any as S.Schema<GetEncryptionKeyResponse>,
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
  input: __S(173) as any as S.Schema<GetFindingsReportStatusRequest>,
  output: __S(174) as any as S.Schema<GetFindingsReportStatusResponse>,
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
  input: __S(175) as any as S.Schema<GetMemberRequest>,
  output: __S(177) as any as S.Schema<GetMemberResponse>,
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
  input: __S(178) as any as S.Schema<GetSbomExportRequest>,
  output: __S(179) as any as S.Schema<GetSbomExportResponse>,
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
  input: __S(180) as any as S.Schema<ListAccountPermissionsRequest>,
  output: __S(183) as any as S.Schema<ListAccountPermissionsResponse>,
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
  input: __S(187) as any as S.Schema<ListCisScanConfigurationsRequest>,
  output: __S(191) as any as S.Schema<ListCisScanConfigurationsResponse>,
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
  input: __S(193) as any as S.Schema<ListCisScanResultsAggregatedByChecksRequest>,
  output: __S(197) as any as S.Schema<ListCisScanResultsAggregatedByChecksResponse>,
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
  input: __S(201) as any as S.Schema<ListCisScanResultsAggregatedByTargetResourceRequest>,
  output: __S(204) as any as S.Schema<ListCisScanResultsAggregatedByTargetResourceResponse>,
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
  input: __S(208) as any as S.Schema<ListCisScansRequest>,
  output: __S(211) as any as S.Schema<ListCisScansResponse>,
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
  input: __S(212) as any as S.Schema<ListCodeSecurityIntegrationsRequest>,
  output: __S(215) as any as S.Schema<ListCodeSecurityIntegrationsResponse>,
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
  input: __S(216) as any as S.Schema<ListCodeSecurityScanConfigurationAssociationsRequest>,
  output: __S(219) as any as S.Schema<ListCodeSecurityScanConfigurationAssociationsResponse>,
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
  input: __S(220) as any as S.Schema<ListCodeSecurityScanConfigurationsRequest>,
  output: __S(223) as any as S.Schema<ListCodeSecurityScanConfigurationsResponse>,
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
  input: __S(227) as any as S.Schema<ListConnectorsRequest>,
  output: __S(233) as any as S.Schema<ListConnectorsResponse>,
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
  input: __S(234) as any as S.Schema<ListConnectorScanConfigurationsRequest>,
  output: __S(239) as any as S.Schema<ListConnectorScanConfigurationsResponse>,
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
  input: __S(241) as any as S.Schema<ListCoverageRequest>,
  output: __S(262) as any as S.Schema<ListCoverageResponse>,
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
  input: __S(263) as any as S.Schema<ListCoverageStatisticsRequest>,
  output: __S(266) as any as S.Schema<ListCoverageStatisticsResponse>,
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
  input: __S(267) as any as S.Schema<ListDelegatedAdminAccountsRequest>,
  output: __S(270) as any as S.Schema<ListDelegatedAdminAccountsResponse>,
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
  input: __S(271) as any as S.Schema<ListFiltersRequest>,
  output: __S(274) as any as S.Schema<ListFiltersResponse>,
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
  input: __S(290) as any as S.Schema<ListFindingAggregationsRequest>,
  output: __S(309) as any as S.Schema<ListFindingAggregationsResponse>,
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
  input: __S(311) as any as S.Schema<ListFindingsRequest>,
  output: __S(345) as any as S.Schema<ListFindingsResponse>,
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
  input: __S(346) as any as S.Schema<ListMembersRequest>,
  output: __S(348) as any as S.Schema<ListMembersResponse>,
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
  input: __S(349) as any as S.Schema<ListTagsForResourceRequest>,
  output: __S(350) as any as S.Schema<ListTagsForResourceResponse>,
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
  input: __S(351) as any as S.Schema<ListUsageTotalsRequest>,
  output: __S(356) as any as S.Schema<ListUsageTotalsResponse>,
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
  input: __S(357) as any as S.Schema<ResetEncryptionKeyRequest>,
  output: __S(61) as any as S.Schema<ResetEncryptionKeyResponse>,
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
  input: __S(359) as any as S.Schema<SearchVulnerabilitiesRequest>,
  output: __S(364) as any as S.Schema<SearchVulnerabilitiesResponse>,
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
  input: __S(365) as any as S.Schema<SendCisSessionHealthRequest>,
  output: __S(61) as any as S.Schema<SendCisSessionHealthResponse>,
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
  input: __S(368) as any as S.Schema<SendCisSessionTelemetryRequest>,
  output: __S(369) as any as S.Schema<SendCisSessionTelemetryResponse>,
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
  input: __S(371) as any as S.Schema<StartCisSessionRequest>,
  output: __S(61) as any as S.Schema<StartCisSessionResponse>,
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
  input: __S(372) as any as S.Schema<StartCodeSecurityScanRequest>,
  output: __S(373) as any as S.Schema<StartCodeSecurityScanResponse>,
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
  input: __S(377) as any as S.Schema<StopCisSessionRequest>,
  output: __S(61) as any as S.Schema<StopCisSessionResponse>,
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
  input: __S(378) as any as S.Schema<TagResourceRequest>,
  output: __S(61) as any as S.Schema<TagResourceResponse>,
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
  input: __S(379) as any as S.Schema<UntagResourceRequest>,
  output: __S(61) as any as S.Schema<UntagResourceResponse>,
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
  input: __S(380) as any as S.Schema<UpdateCisScanConfigurationRequest>,
  output: __S(83) as any as S.Schema<UpdateCisScanConfigurationResponse>,
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
  input: __S(384) as any as S.Schema<UpdateCodeSecurityIntegrationRequest>,
  output: __S(385) as any as S.Schema<UpdateCodeSecurityIntegrationResponse>,
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
  input: __S(386) as any as S.Schema<UpdateCodeSecurityScanConfigurationRequest>,
  output: __S(72) as any as S.Schema<UpdateCodeSecurityScanConfigurationResponse>,
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
  input: __S(390) as any as S.Schema<UpdateConfigurationRequest>,
  output: __S(61) as any as S.Schema<UpdateConfigurationResponse>,
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
  input: __S(393) as any as S.Schema<UpdateConnectorRequest>,
  output: __S(394) as any as S.Schema<UpdateConnectorResponse>,
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
  input: __S(395) as any as S.Schema<UpdateConnectorScanConfigurationRequest>,
  output: __S(396) as any as S.Schema<UpdateConnectorScanConfigurationResponse>,
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
  input: __S(397) as any as S.Schema<UpdateEc2DeepInspectionConfigurationRequest>,
  output: __S(170) as any as S.Schema<UpdateEc2DeepInspectionConfigurationResponse>,
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
  input: __S(398) as any as S.Schema<UpdateEncryptionKeyRequest>,
  output: __S(61) as any as S.Schema<UpdateEncryptionKeyResponse>,
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
  input: __S(399) as any as S.Schema<UpdateFilterRequest>,
  output: __S(105) as any as S.Schema<UpdateFilterResponse>,
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
  input: __S(400) as any as S.Schema<UpdateOrganizationConfigurationRequest>,
  output: __S(401) as any as S.Schema<UpdateOrganizationConfigurationResponse>,
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
  input: __S(402) as any as S.Schema<UpdateOrgEc2DeepInspectionConfigurationRequest>,
  output: __S(396) as any as S.Schema<UpdateOrgEc2DeepInspectionConfigurationResponse>,
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
        S.Struct({ scanConfigurationArn: S.String, resource: __S(2) }),
      ).annotate({
        identifier: "AssociateConfigurationRequest",
      });
    case 4:
      return S.Array(__S(3));
    case 5:
      return S.suspend(() =>
        S.Struct({ associateConfigurationRequests: __S(4) }).pipe(
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
          resource: S.optional(__S(2)),
          statusCode: S.optional(S.String),
          statusMessage: S.optional(S.String),
        }),
      ).annotate({ identifier: "FailedAssociationResult" });
    case 7:
      return S.Array(__S(6));
  }
}
function __c1(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          scanConfigurationArn: S.optional(S.String),
          resource: S.optional(__S(2)),
        }),
      ).annotate({
        identifier: "SuccessfulAssociationResult",
      });
    case 1:
      return S.Array(__S(8));
    case 2:
      return S.suspend(() =>
        S.Struct({
          failedAssociations: S.optional(__S(7)),
          successfulAssociations: S.optional(__S(9)),
        }),
      ).annotate({
        identifier: "BatchAssociateCodeSecurityScanConfigurationResponse",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({ disassociateConfigurationRequests: __S(4) }).pipe(
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
        S.Struct({ accountIds: S.optional(__S(12)) }).pipe(
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
          ec2: __S(14),
          ecr: __S(14),
          lambda: S.optional(__S(14)),
          lambdaCode: S.optional(__S(14)),
          codeRepository: S.optional(__S(14)),
        }),
      ).annotate({ identifier: "ResourceState" });
  }
}
function __c2(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({ accountId: S.String, state: __S(14), resourceState: __S(15) }),
      ).annotate({ identifier: "AccountState" });
    case 1:
      return S.Array(__S(16));
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
          resourceStatus: S.optional(__S(18)),
          errorCode: S.optional(S.String),
          errorMessage: S.optional(S.String),
        }),
      ).annotate({ identifier: "FailedAccount" });
    case 4:
      return S.Array(__S(19));
    case 5:
      return S.suspend(() =>
        S.Struct({ accounts: __S(17), failedAccounts: S.optional(__S(20)) }),
      ).annotate({
        identifier: "BatchGetAccountStatusResponse",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({ findingArns: __S(12) }).pipe(
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
      return S.Array(__S(23));
    case 1:
      return S.suspend(() =>
        S.Struct({ description: S.optional(S.String), code: S.optional(S.String) }),
      ).annotate({ identifier: "SuggestedFix" });
    case 2:
      return S.Array(__S(25));
    case 3:
      return S.suspend(() =>
        S.Struct({
          findingArn: S.optional(S.String),
          startLine: S.optional(S.Number),
          endLine: S.optional(S.Number),
          codeSnippet: S.optional(__S(24)),
          suggestedFixes: S.optional(__S(26)),
        }),
      ).annotate({ identifier: "CodeSnippetResult" });
    case 4:
      return S.Array(__S(27));
    case 5:
      return S.suspend(() =>
        S.Struct({ findingArn: S.String, errorCode: S.String, errorMessage: S.String }),
      ).annotate({ identifier: "CodeSnippetError" });
    case 6:
      return S.Array(__S(29));
    case 7:
      return S.suspend(() =>
        S.Struct({
          codeSnippetResults: S.optional(__S(28)),
          errors: S.optional(__S(30)),
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
        S.Struct({ findingArns: __S(12) }).pipe(
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
      return S.Array(__S(34));
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
          cisaData: S.optional(__S(33)),
          riskScore: S.optional(S.Number),
          evidences: S.optional(__S(35)),
          ttps: S.optional(__S(12)),
          tools: S.optional(__S(12)),
          exploitObserved: S.optional(__S(36)),
          referenceUrls: S.optional(__S(12)),
          cwes: S.optional(__S(12)),
          epssScore: S.optional(S.Number),
        }),
      ).annotate({ identifier: "FindingDetail" });
    case 6:
      return S.Array(__S(37));
    case 7:
      return S.suspend(() =>
        S.Struct({
          findingDetails: S.optional(__S(38)),
          errors: S.optional(__S(30)),
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
        S.Struct({ accountIds: __S(12) }).pipe(
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
      return S.Array(__S(41));
    case 3:
      return S.suspend(() => S.Struct({ accountId: S.String, freeTrialInfo: __S(42) })).annotate({
        identifier: "FreeTrialAccountInfo",
      });
    case 4:
      return S.Array(__S(43));
    case 5:
      return S.suspend(() =>
        S.Struct({ accountId: S.String, code: S.String, message: S.String }),
      ).annotate({ identifier: "FreeTrialInfoError" });
    case 6:
      return S.Array(__S(45));
    case 7:
      return S.suspend(() => S.Struct({ accounts: __S(44), failedAccounts: __S(46) })).annotate({
        identifier: "BatchGetFreeTrialInfoResponse",
      });
  }
}
function __c6(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({ accountIds: S.optional(__S(12)) }).pipe(
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
      return S.Array(__S(49));
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
      return S.Array(__S(51));
    case 5:
      return S.suspend(() =>
        S.Struct({
          accountIds: S.optional(__S(50)),
          failedAccountIds: S.optional(__S(52)),
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
      return S.Array(__S(54));
  }
}
function __c7(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({ accountIds: __S(55) }).pipe(
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
      return S.suspend(() => S.Struct({ startTime: __S(62) })).annotate({
        identifier: "DailySchedule",
      });
  }
}
function __c8(j: number): any {
  switch (j) {
    case 0:
      return S.Array(S.String);
    case 1:
      return S.suspend(() => S.Struct({ startTime: __S(62), days: __S(64) })).annotate({
        identifier: "WeeklySchedule",
      });
    case 2:
      return S.suspend(() => S.Struct({ startTime: __S(62), day: S.String })).annotate({
        identifier: "MonthlySchedule",
      });
    case 3:
      return S.Union([
        /*@__PURE__*/ S.Struct({ oneTime: __S(61) }),
        /*@__PURE__*/ S.Struct({ daily: __S(63) }),
        /*@__PURE__*/ S.Struct({ weekly: __S(65) }),
        /*@__PURE__*/ S.Struct({ monthly: __S(66) }),
      ]);
    case 4:
      return S.Record(S.String, /*@__PURE__*/ __S(12).pipe(S.optional));
    case 5:
      return S.suspend(() =>
        S.Struct({ accountIds: __S(12), targetResourceTags: __S(68) }),
      ).annotate({ identifier: "CreateCisTargets" });
    case 6:
      return S.Record(S.String, /*@__PURE__*/ S.String.pipe(S.optional));
    case 7:
      return S.suspend(() =>
        S.Struct({
          scanName: S.String,
          securityLevel: S.String,
          schedule: __S(67),
          targets: __S(69),
          tags: S.optional(__S(70)),
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
      return S.Union([/*@__PURE__*/ S.Struct({ gitlabSelfManaged: __S(73) })]);
    case 3:
      return S.suspend(() =>
        S.Struct({
          name: S.String,
          type: S.String,
          details: S.optional(__S(74)),
          tags: S.optional(__S(70)),
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
      return S.suspend(() => S.Struct({ supportedEvents: __S(78) })).annotate({
        identifier: "ContinuousIntegrationScanConfiguration",
      });
  }
}
function __c10(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          periodicScanConfiguration: S.optional(__S(77)),
          continuousIntegrationScanConfiguration: S.optional(__S(79)),
          ruleSetCategories: __S(64),
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
          configuration: __S(80),
          scopeSettings: S.optional(__S(81)),
          tags: S.optional(__S(70)),
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
        S.Struct({ scopeType: S.String, scopeValues: S.optional(__S(12)) }),
      ).annotate({ identifier: "ScopeConfigurationInput" });
    case 5:
      return S.suspend(() =>
        S.Struct({
          vmScanning: S.optional(__S(84)),
          containerImageScanning: S.optional(__S(84)),
          serverlessScanning: S.optional(__S(84)),
        }),
      ).annotate({
        identifier: "AzureScopeConfigurationInput",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({
          awsConfigConnectorArn: S.String,
          scopeConfiguration: __S(85),
          azureRegions: __S(12),
          autoInstallVMScanner: S.optional(S.Boolean),
        }),
      ).annotate({
        identifier: "AzureProviderDetailCreate",
      });
    case 7:
      return S.Union([/*@__PURE__*/ S.Struct({ azure: __S(86) })]);
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
          providerDetail: __S(87),
          tags: S.optional(__S(88)),
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
      return S.Array(__S(91));
    case 5:
      return S.suspend(() =>
        S.Struct({
          startInclusive: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          endInclusive: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
        }),
      ).annotate({ identifier: "DateFilter" });
    case 6:
      return S.Array(__S(93));
    case 7:
      return S.suspend(() =>
        S.Struct({ upperInclusive: S.optional(S.Number), lowerInclusive: S.optional(S.Number) }),
      ).annotate({ identifier: "NumberFilter" });
  }
}
function __c12(j: number): any {
  switch (j) {
    case 0:
      return S.Array(__S(95));
    case 1:
      return S.suspend(() =>
        S.Struct({ comparison: S.String, key: S.String, value: S.optional(S.String) }),
      ).annotate({ identifier: "MapFilter" });
    case 2:
      return S.Array(__S(97));
    case 3:
      return S.suspend(() =>
        S.Struct({ beginInclusive: S.optional(S.Number), endInclusive: S.optional(S.Number) }),
      ).annotate({ identifier: "PortRangeFilter" });
    case 4:
      return S.Array(__S(99));
    case 5:
      return S.suspend(() =>
        S.Struct({
          name: S.optional(__S(91)),
          version: S.optional(__S(91)),
          epoch: S.optional(__S(95)),
          release: S.optional(__S(91)),
          architecture: S.optional(__S(91)),
          sourceLayerHash: S.optional(__S(91)),
          sourceLambdaLayerArn: S.optional(__S(91)),
          filePath: S.optional(__S(91)),
        }),
      ).annotate({ identifier: "PackageFilter" });
    case 6:
      return S.Array(__S(101));
    case 7:
      return S.suspend(() =>
        S.Struct({
          findingArn: S.optional(__S(92)),
          awsAccountId: S.optional(__S(92)),
          findingType: S.optional(__S(92)),
          severity: S.optional(__S(92)),
          firstObservedAt: S.optional(__S(94)),
          lastObservedAt: S.optional(__S(94)),
          updatedAt: S.optional(__S(94)),
          findingStatus: S.optional(__S(92)),
          title: S.optional(__S(92)),
          inspectorScore: S.optional(__S(96)),
          resourceType: S.optional(__S(92)),
          resourceId: S.optional(__S(92)),
          resourceTags: S.optional(__S(98)),
          ec2InstanceImageId: S.optional(__S(92)),
          ec2InstanceVpcId: S.optional(__S(92)),
          ec2InstanceSubnetId: S.optional(__S(92)),
          ecrImagePushedAt: S.optional(__S(94)),
          ecrImageArchitecture: S.optional(__S(92)),
          ecrImageRegistry: S.optional(__S(92)),
          ecrImageRepositoryName: S.optional(__S(92)),
          ecrImageTags: S.optional(__S(92)),
          ecrImageHash: S.optional(__S(92)),
          ecrImageLastInUseAt: S.optional(__S(94)),
          ecrImageInUseCount: S.optional(__S(96)),
          portRange: S.optional(__S(100)),
          networkProtocol: S.optional(__S(92)),
          componentId: S.optional(__S(92)),
          componentType: S.optional(__S(92)),
          vulnerabilityId: S.optional(__S(92)),
          vulnerabilitySource: S.optional(__S(92)),
          vendorSeverity: S.optional(__S(92)),
          vulnerablePackages: S.optional(__S(102)),
          relatedVulnerabilities: S.optional(__S(92)),
          fixAvailable: S.optional(__S(92)),
          lambdaFunctionName: S.optional(__S(92)),
          lambdaFunctionLayers: S.optional(__S(92)),
          lambdaFunctionRuntime: S.optional(__S(92)),
          lambdaFunctionLastModifiedAt: S.optional(__S(94)),
          lambdaFunctionExecutionRoleArn: S.optional(__S(92)),
          exploitAvailable: S.optional(__S(92)),
          codeVulnerabilityDetectorName: S.optional(__S(92)),
          codeVulnerabilityDetectorTags: S.optional(__S(92)),
          codeVulnerabilityFilePath: S.optional(__S(92)),
          epssScore: S.optional(__S(96)),
          codeRepositoryProjectName: S.optional(__S(92)),
          codeRepositoryProviderType: S.optional(__S(92)),
          cloudProvider: S.optional(__S(92)),
          cloudProviderRegion: S.optional(__S(92)),
          cloudProviderAccountId: S.optional(__S(92)),
          cloudProviderOrgId: S.optional(__S(92)),
          cloudVmImageReference: S.optional(__S(92)),
          cloudVmNetworkId: S.optional(__S(92)),
          cloudVmSubnetIds: S.optional(__S(92)),
          cloudImageRepositoryName: S.optional(__S(92)),
          cloudImageRegistry: S.optional(__S(92)),
          cloudImageDigest: S.optional(__S(92)),
          cloudImageTags: S.optional(__S(92)),
          cloudImagePushedAt: S.optional(__S(94)),
          cloudImageArchitecture: S.optional(__S(92)),
          cloudImageLastInUseAt: S.optional(__S(94)),
          cloudImageInUseCount: S.optional(__S(96)),
          cloudServerlessFunctionName: S.optional(__S(92)),
          cloudServerlessFunctionRuntime: S.optional(__S(92)),
          cloudServerlessFunctionLastModifiedAt: S.optional(__S(94)),
          cloudServerlessFunctionExecutionRole: S.optional(__S(92)),
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
          filterCriteria: __S(103),
          name: S.String,
          tags: S.optional(__S(70)),
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
          filterCriteria: S.optional(__S(103)),
          reportFormat: S.String,
          s3Destination: __S(106),
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
          accountId: S.optional(__S(92)),
          resourceId: S.optional(__S(92)),
          resourceType: S.optional(__S(92)),
          ecrRepositoryName: S.optional(__S(92)),
          lambdaFunctionName: S.optional(__S(92)),
          ecrImageTags: S.optional(__S(92)),
          ec2InstanceTags: S.optional(__S(98)),
          lambdaFunctionTags: S.optional(__S(98)),
          cloudProvider: S.optional(__S(92)),
          cloudProviderAccountId: S.optional(__S(92)),
          cloudProviderOrgId: S.optional(__S(92)),
          cloudProviderRegion: S.optional(__S(92)),
          cloudVmInstanceTags: S.optional(__S(98)),
          cloudContainerImageTags: S.optional(__S(92)),
          cloudContainerRepositoryName: S.optional(__S(92)),
          cloudContainerRegistryName: S.optional(__S(92)),
          cloudServerlessFunctionName: S.optional(__S(92)),
          cloudServerlessFunctionRuntime: S.optional(__S(92)),
          cloudServerlessFunctionTags: S.optional(__S(98)),
        }),
      ).annotate({ identifier: "ResourceFilterCriteria" });
    case 6:
      return S.suspend(() =>
        S.Struct({
          resourceFilterCriteria: S.optional(__S(109)),
          reportFormat: S.String,
          s3Destination: __S(106),
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
          autoEnable: S.optional(__S(118)),
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
          accountIds: S.optional(__S(12)),
          resourceTypes: S.optional(__S(12)),
        }).pipe(T.all(T.Http({ method: "POST", uri: "/disable" }), svc, auth, proto, ver, rules)),
      ).annotate({ identifier: "DisableRequest" });
    case 1:
      return S.suspend(() =>
        S.Struct({ accountId: S.String, status: S.String, resourceStatus: __S(18) }),
      ).annotate({ identifier: "Account" });
    case 2:
      return S.Array(__S(121));
    case 3:
      return S.suspend(() =>
        S.Struct({ accounts: __S(122), failedAccounts: S.optional(__S(20)) }),
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
          accountIds: S.optional(__S(12)),
          resourceTypes: __S(12),
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
          targetAccounts: S.optional(__S(12)),
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
      return S.Array(__S(132));
    case 6:
      return S.suspend(() => S.Struct({ comparison: S.String, value: S.String })).annotate({
        identifier: "CisStringFilter",
      });
    case 7:
      return S.Array(__S(134));
  }
}
function __c17(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          findingStatusFilters: S.optional(__S(133)),
          checkIdFilters: S.optional(__S(135)),
          titleFilters: S.optional(__S(135)),
          securityLevelFilters: S.optional(__S(133)),
          findingArnFilters: S.optional(__S(135)),
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
          filterCriteria: S.optional(__S(136)),
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
      return S.Array(__S(138));
    case 4:
      return S.suspend(() =>
        S.Struct({
          scanResultDetails: S.optional(__S(139)),
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
          filter: __S(141),
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
      return S.Array(__S(144));
    case 2:
      return S.suspend(() =>
        S.Struct({
          namespace: S.optional(S.String),
          workloadInfoList: S.optional(__S(145)),
        }),
      ).annotate({ identifier: "AwsEksMetadataDetails" });
    case 3:
      return S.Union([
        /*@__PURE__*/ S.Struct({ awsEcsMetadataDetails: __S(143) }),
        /*@__PURE__*/ S.Struct({ awsEksMetadataDetails: __S(146) }),
      ]);
    case 4:
      return S.suspend(() =>
        S.Struct({
          lastInUse: S.Date.pipe(T.TimestampFormat("epoch-seconds")),
          runningUnitCount: S.optional(S.Number),
          stoppedUnitCount: S.optional(S.Number),
          clusterMetadata: __S(147),
        }),
      ).annotate({ identifier: "ClusterDetails" });
    case 5:
      return S.Array(__S(148));
    case 6:
      return S.suspend(() =>
        S.Struct({ clusterArn: S.String, clusterDetails: S.optional(__S(149)) }),
      ).annotate({ identifier: "ClusterInformation" });
    case 7:
      return S.Array(__S(150));
  }
}
function __c19(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({ cluster: __S(151), nextToken: S.optional(S.String) }),
      ).annotate({
        identifier: "GetClustersForImageResponse",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({ integrationArn: S.String, tags: S.optional(__S(70)) }).pipe(
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
          tags: S.optional(__S(70)),
        }),
      ).annotate({
        identifier: "GetCodeSecurityIntegrationResponse",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({ resource: __S(2), scanId: S.String }).pipe(
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
          resource: S.optional(__S(2)),
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
          configuration: S.optional(__S(80)),
          level: S.optional(S.String),
          scopeSettings: S.optional(__S(81)),
          createdAt: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          lastUpdatedAt: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          tags: S.optional(__S(70)),
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
      return S.suspend(() => S.Struct({ rescanDurationState: S.optional(__S(160)) })).annotate({
        identifier: "EcrConfigurationState",
      });
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
          scanModeState: S.optional(__S(162)),
          vmScannerState: S.optional(__S(163)),
        }),
      ).annotate({ identifier: "Ec2ConfigurationState" });
    case 5:
      return S.suspend(() =>
        S.Struct({
          ecrConfiguration: S.optional(__S(161)),
          ec2Configuration: S.optional(__S(164)),
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
      return S.suspend(() => S.Struct({ delegatedAdmin: S.optional(__S(167)) })).annotate({
        identifier: "GetDelegatedAdminAccountResponse",
      });
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
          packagePaths: S.optional(__S(12)),
          orgPackagePaths: S.optional(__S(12)),
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
          destination: S.optional(__S(106)),
          filterCriteria: S.optional(__S(103)),
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
      return S.suspend(() => S.Struct({ member: S.optional(__S(176)) })).annotate({
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
          s3Destination: S.optional(__S(106)),
          filterCriteria: S.optional(__S(109)),
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
      return S.Array(__S(181));
    case 7:
      return S.suspend(() =>
        S.Struct({ permissions: __S(182), nextToken: S.optional(S.String) }),
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
      return S.Array(__S(184));
    case 2:
      return S.suspend(() =>
        S.Struct({
          scanNameFilters: S.optional(__S(135)),
          targetResourceTagFilters: S.optional(__S(185)),
          scanConfigurationArnFilters: S.optional(__S(135)),
        }),
      ).annotate({
        identifier: "ListCisScanConfigurationsFilterCriteria",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({
          filterCriteria: S.optional(__S(186)),
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
          accountIds: S.optional(__S(12)),
          targetResourceTags: S.optional(__S(68)),
        }),
      ).annotate({ identifier: "CisTargets" });
    case 5:
      return S.suspend(() =>
        S.Struct({
          scanConfigurationArn: S.String,
          ownerId: S.optional(S.String),
          scanName: S.optional(S.String),
          securityLevel: S.optional(S.String),
          schedule: S.optional(__S(67)),
          targets: S.optional(__S(188)),
          tags: S.optional(__S(70)),
        }),
      ).annotate({ identifier: "CisScanConfiguration" });
    case 6:
      return S.Array(__S(189));
    case 7:
      return S.suspend(() =>
        S.Struct({
          scanConfigurations: S.optional(__S(190)),
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
          accountIdFilters: S.optional(__S(135)),
          checkIdFilters: S.optional(__S(135)),
          titleFilters: S.optional(__S(135)),
          platformFilters: S.optional(__S(135)),
          failedResourcesFilters: S.optional(__S(96)),
          securityLevelFilters: S.optional(__S(133)),
        }),
      ).annotate({
        identifier: "CisScanResultsAggregatedByChecksFilterCriteria",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({
          scanArn: S.String,
          filterCriteria: S.optional(__S(192)),
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
          statusCounts: S.optional(__S(194)),
          platform: S.optional(S.String),
        }),
      ).annotate({ identifier: "CisCheckAggregation" });
    case 4:
      return S.Array(__S(195));
    case 5:
      return S.suspend(() =>
        S.Struct({
          checkAggregations: S.optional(__S(196)),
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
      return S.Array(__S(198));
  }
}
function __c25(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          accountIdFilters: S.optional(__S(135)),
          statusFilters: S.optional(__S(133)),
          checkIdFilters: S.optional(__S(135)),
          targetResourceIdFilters: S.optional(__S(135)),
          targetResourceTagFilters: S.optional(__S(185)),
          platformFilters: S.optional(__S(135)),
          targetStatusFilters: S.optional(__S(133)),
          targetStatusReasonFilters: S.optional(__S(199)),
          failedChecksFilters: S.optional(__S(96)),
        }),
      ).annotate({
        identifier: "CisScanResultsAggregatedByTargetResourceFilterCriteria",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({
          scanArn: S.String,
          filterCriteria: S.optional(__S(200)),
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
          targetResourceTags: S.optional(__S(68)),
          statusCounts: S.optional(__S(194)),
          platform: S.optional(S.String),
          targetStatus: S.optional(S.String),
          targetStatusReason: S.optional(S.String),
        }),
      ).annotate({
        identifier: "CisTargetResourceAggregation",
      });
    case 3:
      return S.Array(__S(202));
    case 4:
      return S.suspend(() =>
        S.Struct({
          targetResourceAggregations: S.optional(__S(203)),
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
      return S.Array(__S(205));
    case 7:
      return S.suspend(() =>
        S.Struct({
          scanNameFilters: S.optional(__S(135)),
          targetResourceTagFilters: S.optional(__S(185)),
          targetResourceIdFilters: S.optional(__S(135)),
          scanStatusFilters: S.optional(__S(133)),
          scanAtFilters: S.optional(__S(206)),
          scanConfigurationArnFilters: S.optional(__S(135)),
          scanArnFilters: S.optional(__S(135)),
          scheduledByFilters: S.optional(__S(135)),
          failedChecksFilters: S.optional(__S(96)),
          targetAccountIdFilters: S.optional(__S(135)),
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
          filterCriteria: S.optional(__S(207)),
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
          targets: S.optional(__S(188)),
          scheduledBy: S.optional(S.String),
          securityLevel: S.optional(S.String),
        }),
      ).annotate({ identifier: "CisScan" });
    case 2:
      return S.Array(__S(209));
    case 3:
      return S.suspend(() =>
        S.Struct({ scans: S.optional(__S(210)), nextToken: S.optional(S.String) }),
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
      return S.Array(__S(213));
    case 7:
      return S.suspend(() =>
        S.Struct({
          integrations: S.optional(__S(214)),
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
      return S.suspend(() => S.Struct({ resource: S.optional(__S(2)) })).annotate({
        identifier: "CodeSecurityScanConfigurationAssociationSummary",
      });
    case 2:
      return S.Array(__S(217));
    case 3:
      return S.suspend(() =>
        S.Struct({
          associations: S.optional(__S(218)),
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
          continuousIntegrationScanSupportedEvents: S.optional(__S(78)),
          ruleSetCategories: __S(64),
          scopeSettings: S.optional(__S(81)),
        }),
      ).annotate({
        identifier: "CodeSecurityScanConfigurationSummary",
      });
    case 6:
      return S.Array(__S(221));
    case 7:
      return S.suspend(() =>
        S.Struct({
          configurations: S.optional(__S(222)),
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
      return S.Array(__S(224));
    case 2:
      return S.suspend(() =>
        S.Struct({
          connectorArns: S.optional(__S(135)),
          accounts: S.optional(__S(92)),
          awsConfigConnectorArns: S.optional(__S(225)),
          connectorType: S.optional(__S(133)),
          provider: S.optional(__S(133)),
        }),
      ).annotate({ identifier: "ConnectorFilterCriteria" });
    case 3:
      return S.suspend(() =>
        S.Struct({
          maxResults: S.optional(S.Number),
          nextToken: S.optional(SensitiveString),
          filterCriteria: S.optional(__S(226)),
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
          scopeValues: S.optional(__S(12)),
          state: S.optional(S.String),
          stateReason: S.optional(S.String),
        }),
      ).annotate({ identifier: "ScopeConfiguration" });
    case 6:
      return S.suspend(() =>
        S.Struct({
          vmScanning: S.optional(__S(229)),
          containerImageScanning: S.optional(__S(229)),
          serverlessScanning: S.optional(__S(229)),
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
          health: S.optional(__S(228)),
          createdAt: T.DateFromString.pipe(T.TimestampFormat("date-time")),
          updatedAt: T.DateFromString.pipe(T.TimestampFormat("date-time")),
          azureRegions: S.optional(__S(12)),
          awsConfigConnectorArn: S.optional(S.String),
          scopeConfiguration: S.optional(__S(230)),
          tags: S.optional(__S(88)),
          autoInstallVMScanner: S.optional(S.Boolean),
        }),
      ).annotate({ identifier: "Connector" });
  }
}
function __c29(j: number): any {
  switch (j) {
    case 0:
      return S.Array(__S(231));
    case 1:
      return S.suspend(() =>
        S.Struct({ items: __S(232), nextToken: S.optional(SensitiveString) }),
      ).annotate({ identifier: "ListConnectorsResponse" });
    case 2:
      return S.suspend(() =>
        S.Struct({
          awsConfigConnectorArns: S.optional(__S(12)),
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
      return S.suspend(() => S.Struct({ containerImageScanning: S.optional(__S(235)) })).annotate({
        identifier: "ConnectorScanConfiguration",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({
          awsConfigConnectorArn: S.String,
          connectorArns: __S(12),
          scanConfiguration: __S(236),
        }),
      ).annotate({
        identifier: "ConnectorScanConfigurationItem",
      });
    case 6:
      return S.Array(__S(237));
    case 7:
      return S.suspend(() =>
        S.Struct({
          scanConfigurations: __S(238),
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
          scanStatusCode: S.optional(__S(92)),
          scanStatusReason: S.optional(__S(92)),
          accountId: S.optional(__S(92)),
          resourceId: S.optional(__S(92)),
          resourceType: S.optional(__S(92)),
          scanType: S.optional(__S(92)),
          ecrRepositoryName: S.optional(__S(92)),
          ecrImageTags: S.optional(__S(92)),
          ec2InstanceTags: S.optional(__S(98)),
          lambdaFunctionName: S.optional(__S(92)),
          lambdaFunctionTags: S.optional(__S(98)),
          lambdaFunctionRuntime: S.optional(__S(92)),
          lastScannedAt: S.optional(__S(94)),
          scanMode: S.optional(__S(92)),
          imagePulledAt: S.optional(__S(94)),
          ecrImageLastInUseAt: S.optional(__S(94)),
          ecrImageInUseCount: S.optional(__S(96)),
          codeRepositoryProjectName: S.optional(__S(92)),
          codeRepositoryProviderType: S.optional(__S(92)),
          codeRepositoryProviderTypeVisibility: S.optional(__S(92)),
          lastScannedCommitId: S.optional(__S(92)),
          cloudProvider: S.optional(__S(92)),
          cloudProviderAccountId: S.optional(__S(92)),
          cloudProviderRegion: S.optional(__S(92)),
          cloudVmInstanceTags: S.optional(__S(98)),
          cloudContainerImageTags: S.optional(__S(92)),
          cloudContainerRepositoryName: S.optional(__S(92)),
          cloudContainerRegistryName: S.optional(__S(92)),
          cloudServerlessFunctionName: S.optional(__S(92)),
          cloudServerlessFunctionRuntime: S.optional(__S(92)),
          cloudServerlessFunctionTags: S.optional(__S(98)),
          cloudProviderOrgId: S.optional(__S(92)),
        }),
      ).annotate({ identifier: "CoverageFilterCriteria" });
    case 1:
      return S.suspend(() =>
        S.Struct({
          maxResults: S.optional(S.Number),
          nextToken: S.optional(S.String),
          filterCriteria: S.optional(__S(240)),
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
          tags: S.optional(__S(12)),
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
          tags: S.optional(__S(70)),
          amiId: S.optional(S.String),
          platform: S.optional(S.String),
        }),
      ).annotate({ identifier: "Ec2Metadata" });
    case 6:
      return S.suspend(() =>
        S.Struct({
          functionTags: S.optional(__S(70)),
          layers: S.optional(__S(12)),
          functionName: S.optional(S.String),
          runtime: S.optional(S.String),
        }),
      ).annotate({ identifier: "LambdaFunctionMetadata" });
    case 7:
      return S.suspend(() =>
        S.Struct({
          frequencyExpression: S.optional(S.String),
          ruleSetCategories: S.optional(__S(64)),
        }),
      ).annotate({
        identifier: "ProjectPeriodicScanConfiguration",
      });
  }
}
function __c31(j: number): any {
  switch (j) {
    case 0:
      return S.Array(__S(247));
    case 1:
      return S.suspend(() =>
        S.Struct({
          supportedEvent: S.optional(S.String),
          ruleSetCategories: S.optional(__S(64)),
        }),
      ).annotate({
        identifier: "ProjectContinuousIntegrationScanConfiguration",
      });
    case 2:
      return S.Array(__S(249));
    case 3:
      return S.suspend(() =>
        S.Struct({
          periodicScanConfigurations: S.optional(__S(248)),
          continuousIntegrationScanConfigurations: S.optional(__S(250)),
        }),
      ).annotate({
        identifier: "ProjectCodeSecurityScanConfiguration",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({
          lastScannedCommitId: S.optional(S.String),
          lastScanAt: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          scanStatus: S.optional(__S(242)),
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
          scanConfiguration: S.optional(__S(251)),
          onDemandScan: S.optional(__S(252)),
        }),
      ).annotate({ identifier: "CodeRepositoryMetadata" });
    case 6:
      return S.suspend(() =>
        S.Struct({
          tags: S.optional(__S(70)),
          platform: S.optional(S.String),
          inventoryHash: S.optional(S.String),
          vmImageReference: S.optional(S.String),
        }),
      ).annotate({ identifier: "VmInstanceMetadata" });
    case 7:
      return S.suspend(() =>
        S.Struct({
          imageTags: S.optional(__S(12)),
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
          functionTags: S.optional(__S(70)),
        }),
      ).annotate({
        identifier: "ServerlessFunctionMetadata",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({
          ecrRepository: S.optional(__S(243)),
          ecrImage: S.optional(__S(244)),
          ec2: S.optional(__S(245)),
          lambdaFunction: S.optional(__S(246)),
          codeRepository: S.optional(__S(253)),
          vmInstance: S.optional(__S(254)),
          containerImage: S.optional(__S(255)),
          containerRepository: S.optional(__S(256)),
          containerRegistry: S.optional(__S(257)),
          serverlessFunction: S.optional(__S(258)),
        }),
      ).annotate({ identifier: "ResourceScanMetadata" });
    case 4:
      return S.suspend(() =>
        S.Struct({
          resourceType: S.String,
          resourceId: S.String,
          accountId: S.String,
          scanType: S.String,
          scanStatus: S.optional(__S(242)),
          resourceMetadata: S.optional(__S(259)),
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
      return S.Array(__S(260));
    case 6:
      return S.suspend(() =>
        S.Struct({
          nextToken: S.optional(S.String),
          coveredResources: S.optional(__S(261)),
        }),
      ).annotate({ identifier: "ListCoverageResponse" });
    case 7:
      return S.suspend(() =>
        S.Struct({
          filterCriteria: S.optional(__S(240)),
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
      return S.Array(__S(264));
    case 2:
      return S.suspend(() =>
        S.Struct({
          countsByGroup: S.optional(__S(265)),
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
      return S.Array(__S(268));
    case 6:
      return S.suspend(() =>
        S.Struct({
          delegatedAdminAccounts: S.optional(__S(269)),
          nextToken: S.optional(S.String),
        }),
      ).annotate({
        identifier: "ListDelegatedAdminAccountsResponse",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({
          arns: S.optional(__S(12)),
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
          criteria: __S(103),
          action: S.String,
          createdAt: S.Date.pipe(T.TimestampFormat("epoch-seconds")),
          updatedAt: S.Date.pipe(T.TimestampFormat("epoch-seconds")),
          description: S.optional(S.String),
          reason: S.optional(S.String),
          tags: S.optional(__S(70)),
        }),
      ).annotate({ identifier: "Filter" });
    case 1:
      return S.Array(__S(272));
    case 2:
      return S.suspend(() =>
        S.Struct({ filters: __S(273), nextToken: S.optional(S.String) }),
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
          amis: S.optional(__S(92)),
          sortOrder: S.optional(S.String),
          sortBy: S.optional(S.String),
        }),
      ).annotate({ identifier: "AmiAggregation" });
    case 5:
      return S.suspend(() =>
        S.Struct({
          resourceIds: S.optional(__S(92)),
          imageShas: S.optional(__S(92)),
          repositories: S.optional(__S(92)),
          architectures: S.optional(__S(92)),
          imageTags: S.optional(__S(92)),
          sortOrder: S.optional(S.String),
          sortBy: S.optional(S.String),
          lastInUseAt: S.optional(__S(94)),
          inUseCount: S.optional(__S(96)),
        }),
      ).annotate({
        identifier: "AwsEcrContainerAggregation",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({
          amis: S.optional(__S(92)),
          operatingSystems: S.optional(__S(92)),
          instanceIds: S.optional(__S(92)),
          instanceTags: S.optional(__S(98)),
          sortOrder: S.optional(S.String),
          sortBy: S.optional(S.String),
        }),
      ).annotate({ identifier: "Ec2InstanceAggregation" });
    case 7:
      return S.suspend(() =>
        S.Struct({
          repositories: S.optional(__S(92)),
          resourceIds: S.optional(__S(92)),
          layerHashes: S.optional(__S(92)),
          cloudProviders: S.optional(__S(92)),
          cloudAccountIds: S.optional(__S(92)),
          cloudOrgIds: S.optional(__S(92)),
          cloudRegions: S.optional(__S(92)),
          cloudPartitions: S.optional(__S(92)),
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
          packageNames: S.optional(__S(92)),
          sortOrder: S.optional(S.String),
          sortBy: S.optional(S.String),
        }),
      ).annotate({ identifier: "PackageAggregation" });
    case 1:
      return S.suspend(() =>
        S.Struct({
          repositories: S.optional(__S(92)),
          sortOrder: S.optional(S.String),
          sortBy: S.optional(S.String),
        }),
      ).annotate({ identifier: "RepositoryAggregation" });
    case 2:
      return S.suspend(() =>
        S.Struct({
          titles: S.optional(__S(92)),
          vulnerabilityIds: S.optional(__S(92)),
          resourceType: S.optional(S.String),
          findingType: S.optional(S.String),
          sortOrder: S.optional(S.String),
          sortBy: S.optional(S.String),
        }),
      ).annotate({ identifier: "TitleAggregation" });
    case 3:
      return S.suspend(() =>
        S.Struct({
          functionNames: S.optional(__S(92)),
          resourceIds: S.optional(__S(92)),
          layerArns: S.optional(__S(92)),
          sortOrder: S.optional(S.String),
          sortBy: S.optional(S.String),
        }),
      ).annotate({ identifier: "LambdaLayerAggregation" });
    case 4:
      return S.suspend(() =>
        S.Struct({
          resourceIds: S.optional(__S(92)),
          functionNames: S.optional(__S(92)),
          runtimes: S.optional(__S(92)),
          functionTags: S.optional(__S(98)),
          sortOrder: S.optional(S.String),
          sortBy: S.optional(S.String),
        }),
      ).annotate({
        identifier: "LambdaFunctionAggregation",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({
          projectNames: S.optional(__S(92)),
          providerTypes: S.optional(__S(92)),
          sortOrder: S.optional(S.String),
          sortBy: S.optional(S.String),
          resourceIds: S.optional(__S(92)),
        }),
      ).annotate({
        identifier: "CodeRepositoryAggregation",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({
          resourceIds: S.optional(__S(92)),
          operatingSystems: S.optional(__S(92)),
          instanceTags: S.optional(__S(98)),
          vmImageReferences: S.optional(__S(92)),
          cloudProviders: S.optional(__S(92)),
          cloudPartitions: S.optional(__S(92)),
          cloudRegions: S.optional(__S(92)),
          cloudOrgIds: S.optional(__S(92)),
          cloudAccountIds: S.optional(__S(92)),
          sortOrder: S.optional(S.String),
          sortBy: S.optional(S.String),
        }),
      ).annotate({ identifier: "VmInstanceAggregation" });
    case 7:
      return S.suspend(() =>
        S.Struct({
          resourceIds: S.optional(__S(92)),
          imageDigests: S.optional(__S(92)),
          repositories: S.optional(__S(92)),
          registries: S.optional(__S(92)),
          architectures: S.optional(__S(92)),
          imageTags: S.optional(__S(92)),
          cloudProviders: S.optional(__S(92)),
          cloudPartitions: S.optional(__S(92)),
          cloudRegions: S.optional(__S(92)),
          cloudOrgIds: S.optional(__S(92)),
          cloudAccountIds: S.optional(__S(92)),
          lastInUseAt: S.optional(__S(94)),
          inUseCount: S.optional(__S(96)),
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
          resourceIds: S.optional(__S(92)),
          functionNames: S.optional(__S(92)),
          runtimes: S.optional(__S(92)),
          functionTags: S.optional(__S(98)),
          cloudProviders: S.optional(__S(92)),
          cloudPartitions: S.optional(__S(92)),
          cloudRegions: S.optional(__S(92)),
          cloudOrgIds: S.optional(__S(92)),
          cloudAccountIds: S.optional(__S(92)),
          sortOrder: S.optional(S.String),
          sortBy: S.optional(S.String),
        }),
      ).annotate({
        identifier: "ServerlessFunctionAggregation",
      });
    case 1:
      return S.Union([
        /*@__PURE__*/ S.Struct({ accountAggregation: __S(275) }),
        /*@__PURE__*/ S.Struct({ amiAggregation: __S(276) }),
        /*@__PURE__*/ S.Struct({ awsEcrContainerAggregation: __S(277) }),
        /*@__PURE__*/ S.Struct({ ec2InstanceAggregation: __S(278) }),
        /*@__PURE__*/ S.Struct({ findingTypeAggregation: __S(275) }),
        /*@__PURE__*/ S.Struct({ imageLayerAggregation: __S(279) }),
        /*@__PURE__*/ S.Struct({ packageAggregation: __S(280) }),
        /*@__PURE__*/ S.Struct({ repositoryAggregation: __S(281) }),
        /*@__PURE__*/ S.Struct({ titleAggregation: __S(282) }),
        /*@__PURE__*/ S.Struct({ lambdaLayerAggregation: __S(283) }),
        /*@__PURE__*/ S.Struct({ lambdaFunctionAggregation: __S(284) }),
        /*@__PURE__*/ S.Struct({ codeRepositoryAggregation: __S(285) }),
        /*@__PURE__*/ S.Struct({ vmInstanceAggregation: __S(286) }),
        /*@__PURE__*/ S.Struct({ containerImageAggregation: __S(287) }),
        /*@__PURE__*/ S.Struct({ serverlessFunctionAggregation: __S(288) }),
      ]);
    case 2:
      return S.suspend(() =>
        S.Struct({
          aggregationType: S.String,
          nextToken: S.optional(S.String),
          maxResults: S.optional(S.Number),
          accountIds: S.optional(__S(92)),
          aggregationRequest: S.optional(__S(289)),
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
          severityCounts: S.optional(__S(291)),
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
          severityCounts: S.optional(__S(291)),
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
          imageTags: S.optional(__S(12)),
          accountId: S.optional(S.String),
          severityCounts: S.optional(__S(291)),
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
          instanceTags: S.optional(__S(70)),
          accountId: S.optional(S.String),
          severityCounts: S.optional(__S(291)),
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
          severityCounts: S.optional(__S(291)),
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
          severityCounts: S.optional(__S(291)),
        }),
      ).annotate({
        identifier: "ImageLayerAggregationResponse",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({
          packageName: S.String,
          accountId: S.optional(S.String),
          severityCounts: S.optional(__S(291)),
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
          severityCounts: S.optional(__S(291)),
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
          severityCounts: S.optional(__S(291)),
        }),
      ).annotate({ identifier: "TitleAggregationResponse" });
    case 5:
      return S.suspend(() =>
        S.Struct({
          functionName: S.String,
          resourceId: S.String,
          layerArn: S.String,
          accountId: S.String,
          severityCounts: S.optional(__S(291)),
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
          lambdaTags: S.optional(__S(70)),
          accountId: S.optional(S.String),
          severityCounts: S.optional(__S(291)),
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
          severityCounts: S.optional(__S(291)),
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
          tags: S.optional(__S(70)),
          accountId: S.optional(S.String),
          severityCounts: S.optional(__S(291)),
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
          imageTags: S.optional(__S(12)),
          accountId: S.optional(S.String),
          severityCounts: S.optional(__S(291)),
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
          tags: S.optional(__S(70)),
          accountId: S.optional(S.String),
          severityCounts: S.optional(__S(291)),
          lastModifiedAt: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          exploitAvailableActiveFindingsCount: S.optional(S.Number),
          fixAvailableActiveFindingsCount: S.optional(S.Number),
        }),
      ).annotate({
        identifier: "ServerlessFunctionAggregationResponse",
      });
    case 3:
      return S.Union([
        /*@__PURE__*/ S.Struct({ accountAggregation: __S(292) }),
        /*@__PURE__*/ S.Struct({ amiAggregation: __S(293) }),
        /*@__PURE__*/ S.Struct({ awsEcrContainerAggregation: __S(294) }),
        /*@__PURE__*/ S.Struct({ ec2InstanceAggregation: __S(295) }),
        /*@__PURE__*/ S.Struct({ findingTypeAggregation: __S(296) }),
        /*@__PURE__*/ S.Struct({ imageLayerAggregation: __S(297) }),
        /*@__PURE__*/ S.Struct({ packageAggregation: __S(298) }),
        /*@__PURE__*/ S.Struct({ repositoryAggregation: __S(299) }),
        /*@__PURE__*/ S.Struct({ titleAggregation: __S(300) }),
        /*@__PURE__*/ S.Struct({ lambdaLayerAggregation: __S(301) }),
        /*@__PURE__*/ S.Struct({ lambdaFunctionAggregation: __S(302) }),
        /*@__PURE__*/ S.Struct({ codeRepositoryAggregation: __S(303) }),
        /*@__PURE__*/ S.Struct({ vmInstanceAggregation: __S(304) }),
        /*@__PURE__*/ S.Struct({ containerImageAggregation: __S(305) }),
        /*@__PURE__*/ S.Struct({
          serverlessFunctionAggregation: __S(306),
        }),
      ]);
    case 4:
      return S.Array(__S(307));
    case 5:
      return S.suspend(() =>
        S.Struct({
          aggregationType: S.String,
          responses: S.optional(__S(308)),
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
          filterCriteria: S.optional(__S(103)),
          sortCriteria: S.optional(__S(310)),
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
      return S.suspend(() => S.Struct({ recommendation: S.optional(__S(312)) })).annotate({
        identifier: "Remediation",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({
          type: S.optional(S.String),
          imageId: S.optional(S.String),
          ipV4Addresses: S.optional(__S(12)),
          ipV6Addresses: S.optional(__S(12)),
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
          imageTags: S.optional(__S(12)),
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
          subnetIds: S.optional(__S(12)),
          securityGroupIds: S.optional(__S(12)),
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
          layers: S.optional(__S(12)),
          vpcConfig: S.optional(__S(316)),
          packageType: S.optional(S.String),
          architectures: S.optional(__S(12)),
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
          ipV4Addresses: S.optional(__S(12)),
          ipV6Addresses: S.optional(__S(12)),
          networkId: S.optional(S.String),
          subnetIds: S.optional(__S(12)),
          securityGroupIds: S.optional(__S(12)),
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
          imageTags: S.optional(__S(12)),
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
          subnetIds: S.optional(__S(12)),
          securityGroupIds: S.optional(__S(12)),
          executionRole: S.optional(S.String),
          packageType: S.optional(S.String),
          architectures: S.optional(__S(12)),
          layers: S.optional(__S(12)),
        }),
      ).annotate({ identifier: "ServerlessFunction" });
    case 2:
      return S.suspend(() =>
        S.Struct({
          awsEc2Instance: S.optional(__S(314)),
          awsEcrContainerImage: S.optional(__S(315)),
          awsLambdaFunction: S.optional(__S(317)),
          codeRepository: S.optional(__S(318)),
          vm: S.optional(__S(319)),
          image: S.optional(__S(320)),
          serverlessFunction: S.optional(__S(321)),
        }),
      ).annotate({ identifier: "ResourceDetails" });
    case 3:
      return S.suspend(() =>
        S.Struct({
          type: S.String,
          id: S.String,
          partition: S.optional(S.String),
          region: S.optional(S.String),
          tags: S.optional(__S(70)),
          details: S.optional(__S(322)),
          provider: S.optional(S.String),
          providerAccountId: S.optional(S.String),
          providerOrgId: S.optional(S.String),
        }),
      ).annotate({ identifier: "Resource" });
    case 4:
      return S.Array(__S(323));
    case 5:
      return S.suspend(() => S.Struct({ metric: S.String, reason: S.String })).annotate({
        identifier: "CvssScoreAdjustment",
      });
    case 6:
      return S.Array(__S(325));
    case 7:
      return S.suspend(() =>
        S.Struct({
          scoreSource: S.String,
          cvssSource: S.optional(S.String),
          version: S.String,
          score: S.Number,
          scoringVector: S.String,
          adjustments: S.optional(__S(326)),
        }),
      ).annotate({ identifier: "CvssScoreDetails" });
  }
}
function __c41(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() => S.Struct({ adjustedCvss: S.optional(__S(327)) })).annotate({
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
      return S.Array(__S(330));
    case 4:
      return S.suspend(() => S.Struct({ steps: S.optional(__S(331)) })).annotate({
        identifier: "NetworkPath",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({ openPortRange: __S(329), protocol: S.String, networkPath: __S(332) }),
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
      return S.Array(__S(334));
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
      return S.Array(__S(336));
    case 2:
      return S.suspend(() =>
        S.Struct({
          vulnerabilityId: S.String,
          vulnerablePackages: S.optional(__S(335)),
          source: S.String,
          cvss: S.optional(__S(337)),
          relatedVulnerabilities: S.optional(__S(12)),
          sourceUrl: S.optional(S.String),
          vendorSeverity: S.optional(S.String),
          vendorCreatedAt: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          vendorUpdatedAt: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          referenceUrls: S.optional(__S(12)),
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
          filePath: __S(340),
          detectorTags: S.optional(__S(12)),
          referenceUrls: S.optional(__S(12)),
          ruleId: S.optional(S.String),
          sourceLambdaLayerArn: S.optional(S.String),
          detectorId: S.String,
          detectorName: S.String,
          cwes: __S(12),
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
          remediation: __S(313),
          severity: S.String,
          firstObservedAt: S.Date.pipe(T.TimestampFormat("epoch-seconds")),
          lastObservedAt: S.Date.pipe(T.TimestampFormat("epoch-seconds")),
          updatedAt: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          status: S.String,
          resources: __S(324),
          inspectorScore: S.optional(S.Number),
          inspectorScoreDetails: S.optional(__S(328)),
          networkReachabilityDetails: S.optional(__S(333)),
          packageVulnerabilityDetails: S.optional(__S(338)),
          fixAvailable: S.optional(S.String),
          exploitAvailable: S.optional(S.String),
          exploitabilityDetails: S.optional(__S(339)),
          codeVulnerabilityDetails: S.optional(__S(341)),
          epss: S.optional(__S(342)),
        }),
      ).annotate({ identifier: "Finding" });
  }
}
function __c43(j: number): any {
  switch (j) {
    case 0:
      return S.Array(__S(343));
    case 1:
      return S.suspend(() =>
        S.Struct({ nextToken: S.optional(S.String), findings: S.optional(__S(344)) }),
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
      return S.Array(__S(176));
    case 4:
      return S.suspend(() =>
        S.Struct({ members: S.optional(__S(347)), nextToken: S.optional(S.String) }),
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
      return S.suspend(() => S.Struct({ tags: S.optional(__S(70)) })).annotate({
        identifier: "ListTagsForResourceResponse",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({
          maxResults: S.optional(S.Number),
          nextToken: S.optional(S.String),
          accountIds: S.optional(__S(12)),
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
      return S.Array(__S(352));
    case 2:
      return S.suspend(() =>
        S.Struct({ accountId: S.optional(S.String), usage: S.optional(__S(353)) }),
      ).annotate({ identifier: "UsageTotal" });
    case 3:
      return S.Array(__S(354));
    case 4:
      return S.suspend(() =>
        S.Struct({ nextToken: S.optional(S.String), totals: S.optional(__S(355)) }),
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
      return S.suspend(() => S.Struct({ vulnerabilityIds: __S(12) })).annotate({
        identifier: "SearchVulnerabilitiesFilterCriteria",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({
          filterCriteria: __S(358),
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
          targets: S.optional(__S(12)),
          ttps: S.optional(__S(12)),
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
          cwes: S.optional(__S(12)),
          cisaData: S.optional(__S(33)),
          source: S.optional(S.String),
          description: S.optional(S.String),
          atigData: S.optional(__S(360)),
          vendorSeverity: S.optional(S.String),
          cvss4: S.optional(__S(361)),
          cvss3: S.optional(__S(361)),
          relatedVulnerabilities: S.optional(__S(12)),
          cvss2: S.optional(__S(361)),
          vendorCreatedAt: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          vendorUpdatedAt: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          sourceUrl: S.optional(S.String),
          referenceUrls: S.optional(__S(12)),
          exploitObserved: S.optional(__S(36)),
          detectionPlatforms: S.optional(__S(12)),
          epss: S.optional(__S(342)),
        }),
      ).annotate({ identifier: "Vulnerability" });
    case 3:
      return S.Array(__S(362));
    case 4:
      return S.suspend(() =>
        S.Struct({ vulnerabilities: __S(363), nextToken: S.optional(S.String) }),
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
      return S.Array(__S(366));
  }
}
function __c46(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          scanJobId: S.String,
          sessionToken: S.String,
          messages: __S(367),
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
        S.Struct({ scanJobId: S.String, message: __S(370) }).pipe(
          T.all(T.Http({ method: "PUT", uri: "/cissession/start" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({ identifier: "StartCisSessionRequest" });
    case 4:
      return S.suspend(() =>
        S.Struct({
          clientToken: S.optional(S.String).pipe(T.IdempotencyToken()),
          resource: __S(2),
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
          progress: __S(374),
          computePlatform: S.optional(__S(375)),
          benchmarkVersion: S.optional(S.String),
          benchmarkProfile: S.optional(S.String),
        }),
      ).annotate({ identifier: "StopCisSessionMessage" });
    case 1:
      return S.suspend(() =>
        S.Struct({
          scanJobId: S.String,
          sessionToken: S.String,
          message: __S(376),
        }).pipe(
          T.all(T.Http({ method: "PUT", uri: "/cissession/stop" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({ identifier: "StopCisSessionRequest" });
    case 2:
      return S.suspend(() =>
        S.Struct({ resourceArn: S.String.pipe(T.HttpLabel("resourceArn")), tags: __S(70) }).pipe(
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
          tagKeys: __S(12).pipe(T.HttpQuery("tagKeys")),
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
          schedule: S.optional(__S(67)),
          targets: S.optional(__S(188)),
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
        /*@__PURE__*/ S.Struct({ gitlabSelfManaged: __S(381) }),
        /*@__PURE__*/ S.Struct({ github: __S(382) }),
      ]);
  }
}
function __c48(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({ integrationArn: S.String, details: __S(383) }).pipe(
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
          configuration: __S(80),
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
          ecrConfiguration: S.optional(__S(387)),
          ec2Configuration: S.optional(__S(388)),
          updateConfigurationInheritance: S.optional(__S(389)),
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
          azureRegions: S.optional(__S(12)),
          scopeConfiguration: S.optional(__S(85)),
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
      return S.Union([/*@__PURE__*/ S.Struct({ azure: __S(391) })]);
    case 1:
      return S.suspend(() =>
        S.Struct({
          connectorArn: S.String,
          description: S.optional(S.String),
          providerDetail: S.optional(__S(392)),
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
          scanConfiguration: __S(236),
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
          packagePaths: S.optional(__S(12)),
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
          filterCriteria: S.optional(__S(103)),
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
        S.Struct({ autoEnable: __S(118) }).pipe(
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
      return S.suspend(() => S.Struct({ autoEnable: __S(118) })).annotate({
        identifier: "UpdateOrganizationConfigurationResponse",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({ orgPackagePaths: __S(12) }).pipe(
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
      return S.Array(__S(403));
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
    case 13:
      return __c13(i & 7);
    case 14:
      return __c14(i & 7);
    case 15:
      return __c15(i & 7);
    case 16:
      return __c16(i & 7);
    case 17:
      return __c17(i & 7);
    case 18:
      return __c18(i & 7);
    case 19:
      return __c19(i & 7);
    case 20:
      return __c20(i & 7);
    case 21:
      return __c21(i & 7);
    case 22:
      return __c22(i & 7);
    case 23:
      return __c23(i & 7);
    case 24:
      return __c24(i & 7);
    case 25:
      return __c25(i & 7);
    case 26:
      return __c26(i & 7);
    case 27:
      return __c27(i & 7);
    case 28:
      return __c28(i & 7);
    case 29:
      return __c29(i & 7);
    case 30:
      return __c30(i & 7);
    case 31:
      return __c31(i & 7);
    case 32:
      return __c32(i & 7);
    case 33:
      return __c33(i & 7);
    case 34:
      return __c34(i & 7);
    case 35:
      return __c35(i & 7);
    case 36:
      return __c36(i & 7);
    case 37:
      return __c37(i & 7);
    case 38:
      return __c38(i & 7);
    case 39:
      return __c39(i & 7);
    case 40:
      return __c40(i & 7);
    case 41:
      return __c41(i & 7);
    case 42:
      return __c42(i & 7);
    case 43:
      return __c43(i & 7);
    case 44:
      return __c44(i & 7);
    case 45:
      return __c45(i & 7);
    case 46:
      return __c46(i & 7);
    case 47:
      return __c47(i & 7);
    case 48:
      return __c48(i & 7);
    case 49:
      return __c49(i & 7);
    case 50:
      return __c50(i & 7);
  }
}
