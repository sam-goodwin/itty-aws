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
  sdkId: "AuditManager",
  serviceShapeName: "BedrockAssessmentManagerLambda",
});
const auth = /*@__PURE__*/ T.AwsAuthSigv4({ name: "auditmanager" });
const ver = /*@__PURE__*/ T.ServiceVersion("2017-07-25");
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
              `https://auditmanager-fips.${Region}.${_.getAttr(PartitionResult, "dualStackDnsSuffix")}`,
            );
          }
          return err(
            "FIPS and DualStack are enabled, but this partition does not support one or both",
          );
        }
        if (UseFIPS === true) {
          if (_.getAttr(PartitionResult, "supportsFIPS") === true) {
            return e(
              `https://auditmanager-fips.${Region}.${_.getAttr(PartitionResult, "dnsSuffix")}`,
            );
          }
          return err("FIPS is enabled but this partition does not support FIPS");
        }
        if (UseDualStack === true) {
          if (true === _.getAttr(PartitionResult, "supportsDualStack")) {
            return e(
              `https://auditmanager.${Region}.${_.getAttr(PartitionResult, "dualStackDnsSuffix")}`,
            );
          }
          return err("DualStack is enabled but this partition does not support DualStack");
        }
        return e(`https://auditmanager.${Region}.${_.getAttr(PartitionResult, "dnsSuffix")}`);
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
export class AuditManagerMaintenanceMode
  extends /*@__PURE__*/ S.TaggedError<AuditManagerMaintenanceMode>()(
    "AuditManagerMaintenanceMode",
    {
      message: /*@__PURE__*/ S.String.pipe(/*@__PURE__*/ T.ErrorMessage()),
      reason: /*@__PURE__*/ S.optional(
        /*@__PURE__*/ S.suspend(() => S.String).annotate({
          identifier: "ValidationExceptionReason",
        }),
      ),
      fields: /*@__PURE__*/ S.optional(
        /*@__PURE__*/ S.suspend(() => __S(195)).annotate({
          identifier: "ValidationExceptionFieldList",
        }),
      ),
    },
    /*@__PURE__*/ T.SyntheticError({
      from: "ValidationException",
      message: { includes: "maintenance mode" },
    }),
  ).pipe(C.withBadRequestError) {}
export class InternalServerException
  extends /*@__PURE__*/ S.TaggedError<InternalServerException>()(
    "InternalServerException",
    { message: /*@__PURE__*/ S.String.pipe(/*@__PURE__*/ T.ErrorMessage()) },
    /*@__PURE__*/ T.HttpError(500),
  ).pipe(C.withServerError) {}
export class ResourceNotFoundException
  extends /*@__PURE__*/ S.TaggedError<ResourceNotFoundException>()(
    "ResourceNotFoundException",
    {
      message: /*@__PURE__*/ S.String.pipe(/*@__PURE__*/ T.ErrorMessage()),
      resourceId: S.String,
      resourceType: S.String,
    },
    /*@__PURE__*/ T.HttpError(404),
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
    { message: /*@__PURE__*/ S.String.pipe(/*@__PURE__*/ T.ErrorMessage()) },
    /*@__PURE__*/ T.HttpError(429),
  ).pipe(C.withThrottlingError) {}
export class ValidationException
  extends /*@__PURE__*/ S.TaggedError<ValidationException>()(
    "ValidationException",
    {
      message: /*@__PURE__*/ S.String.pipe(/*@__PURE__*/ T.ErrorMessage()),
      reason: /*@__PURE__*/ S.optional(
        /*@__PURE__*/ S.suspend(() => S.String).annotate({
          identifier: "ValidationExceptionReason",
        }),
      ),
      fields: /*@__PURE__*/ S.optional(
        /*@__PURE__*/ S.suspend(() => __S(195)).annotate({
          identifier: "ValidationExceptionFieldList",
        }),
      ),
    },
    /*@__PURE__*/ T.HttpError(400),
  ).pipe(C.withBadRequestError) {}
export type UUID = string;
export interface AssociateAssessmentReportEvidenceFolderRequest {
  assessmentId: string;
  evidenceFolderId: string;
}
export interface AssociateAssessmentReportEvidenceFolderResponse {}
export type EvidenceIds = string[];
export interface BatchAssociateAssessmentReportEvidenceRequest {
  assessmentId: string;
  evidenceFolderId: string;
  evidenceIds: string[];
}
export type ErrorCode = string;
export type ErrorMessage = string;
export interface AssessmentReportEvidenceError {
  evidenceId?: string;
  errorCode?: string;
  errorMessage?: string;
}
export type AssessmentReportEvidenceErrors = AssessmentReportEvidenceError[];
export interface BatchAssociateAssessmentReportEvidenceResponse {
  evidenceIds?: string[];
  errors?: AssessmentReportEvidenceError[];
}
export type DelegationComment = string | redacted.Redacted<string>;
export type ControlSetId = string;
export type IamArn = string;
export type RoleType = "PROCESS_OWNER" | "RESOURCE_OWNER" | (string & {});
export interface CreateDelegationRequest {
  comment?: string | redacted.Redacted<string>;
  controlSetId?: string;
  roleArn?: string;
  roleType?: RoleType;
}
export type CreateDelegationRequests = CreateDelegationRequest[];
export interface BatchCreateDelegationByAssessmentRequest {
  createDelegationRequests: CreateDelegationRequest[];
  assessmentId: string;
}
export type AssessmentName = string | redacted.Redacted<string>;
export type DelegationStatus = "IN_PROGRESS" | "UNDER_REVIEW" | "COMPLETE" | (string & {});
export type CreatedBy = string | redacted.Redacted<string>;
export interface Delegation {
  id?: string;
  assessmentName?: string | redacted.Redacted<string>;
  assessmentId?: string;
  status?: DelegationStatus;
  roleArn?: string;
  roleType?: RoleType;
  creationTime?: Date;
  lastUpdated?: Date;
  controlSetId?: string;
  comment?: string | redacted.Redacted<string>;
  createdBy?: string | redacted.Redacted<string>;
}
export type Delegations = Delegation[];
export interface BatchCreateDelegationByAssessmentError_ {
  createDelegationRequest?: CreateDelegationRequest;
  errorCode?: string;
  errorMessage?: string;
}
export type BatchCreateDelegationByAssessmentErrors = BatchCreateDelegationByAssessmentError_[];
export interface BatchCreateDelegationByAssessmentResponse {
  delegations?: Delegation[];
  errors?: BatchCreateDelegationByAssessmentError_[];
}
export type DelegationIds = string[];
export interface BatchDeleteDelegationByAssessmentRequest {
  delegationIds: string[];
  assessmentId: string;
}
export interface BatchDeleteDelegationByAssessmentError_ {
  delegationId?: string;
  errorCode?: string;
  errorMessage?: string;
}
export type BatchDeleteDelegationByAssessmentErrors = BatchDeleteDelegationByAssessmentError_[];
export interface BatchDeleteDelegationByAssessmentResponse {
  errors?: BatchDeleteDelegationByAssessmentError_[];
}
export interface BatchDisassociateAssessmentReportEvidenceRequest {
  assessmentId: string;
  evidenceFolderId: string;
  evidenceIds: string[];
}
export interface BatchDisassociateAssessmentReportEvidenceResponse {
  evidenceIds?: string[];
  errors?: AssessmentReportEvidenceError[];
}
export type S3Url = string;
export type ManualEvidenceTextResponse = string | redacted.Redacted<string>;
export type ManualEvidenceLocalFileName = string | redacted.Redacted<string>;
export interface ManualEvidence {
  s3ResourcePath?: string;
  textResponse?: string | redacted.Redacted<string>;
  evidenceFileName?: string | redacted.Redacted<string>;
}
export type ManualEvidenceList = ManualEvidence[];
export interface BatchImportEvidenceToAssessmentControlRequest {
  assessmentId: string;
  controlSetId: string;
  controlId: string;
  manualEvidence: ManualEvidence[];
}
export interface BatchImportEvidenceToAssessmentControlError_ {
  manualEvidence?: ManualEvidence;
  errorCode?: string;
  errorMessage?: string;
}
export type BatchImportEvidenceToAssessmentControlErrors =
  BatchImportEvidenceToAssessmentControlError_[];
export interface BatchImportEvidenceToAssessmentControlResponse {
  errors?: BatchImportEvidenceToAssessmentControlError_[];
}
export type AssessmentDescription = string | redacted.Redacted<string>;
export type AssessmentReportDestinationType = "S3" | (string & {});
export interface AssessmentReportsDestination {
  destinationType?: AssessmentReportDestinationType;
  destination?: string;
}
export type AccountId = string;
export type EmailAddress = string | redacted.Redacted<string>;
export type AccountName = string;
export interface AWSAccount {
  id?: string;
  emailAddress?: string | redacted.Redacted<string>;
  name?: string;
}
export type AWSAccounts = AWSAccount[];
export type AWSServiceName = string;
export interface AWSService {
  serviceName?: string;
}
export type AWSServices = AWSService[];
export interface Scope {
  awsAccounts?: AWSAccount[];
  awsServices?: AWSService[];
}
export interface Role {
  roleType: RoleType;
  roleArn: string;
}
export type Roles = Role[];
export type TagKey = string;
export type TagValue = string;
export type TagMap = { [key: string]: string | undefined };
export interface CreateAssessmentRequest {
  name: string | redacted.Redacted<string>;
  description?: string | redacted.Redacted<string>;
  assessmentReportsDestination: AssessmentReportsDestination;
  scope: Scope;
  roles: Role[];
  frameworkId: string;
  tags?: { [key: string]: string | undefined };
}
export type AuditManagerArn = string;
export type ComplianceType = string | redacted.Redacted<string>;
export type AssessmentStatus = "ACTIVE" | "INACTIVE" | (string & {});
export interface AssessmentMetadata {
  name?: string | redacted.Redacted<string>;
  id?: string;
  description?: string | redacted.Redacted<string>;
  complianceType?: string | redacted.Redacted<string>;
  status?: AssessmentStatus;
  assessmentReportsDestination?: AssessmentReportsDestination;
  scope?: Scope;
  roles?: Role[];
  delegations?: Delegation[];
  creationTime?: Date;
  lastUpdated?: Date;
}
export type AssessmentFrameworkDescription = string;
export type Filename = string;
export interface FrameworkMetadata {
  name?: string | redacted.Redacted<string>;
  description?: string;
  logo?: string;
  complianceType?: string | redacted.Redacted<string>;
}
export type NonEmptyString = string;
export type ControlSetStatus = "ACTIVE" | "UNDER_REVIEW" | "REVIEWED" | (string & {});
export type ControlName = string;
export type ControlDescription = string | redacted.Redacted<string>;
export type ControlStatus = "UNDER_REVIEW" | "REVIEWED" | "INACTIVE" | (string & {});
export type ControlResponse = "MANUAL" | "AUTOMATE" | "DEFER" | "IGNORE" | (string & {});
export type Username = string | redacted.Redacted<string>;
export type ControlCommentBody = string | redacted.Redacted<string>;
export interface ControlComment {
  authorName?: string | redacted.Redacted<string>;
  commentBody?: string | redacted.Redacted<string>;
  postedDate?: Date;
}
export type ControlComments = ControlComment[];
export type EvidenceSources = string[];
export interface AssessmentControl {
  id?: string;
  name?: string;
  description?: string | redacted.Redacted<string>;
  status?: ControlStatus;
  response?: ControlResponse;
  comments?: ControlComment[];
  evidenceSources?: string[];
  evidenceCount?: number;
  assessmentReportEvidenceCount?: number;
}
export type AssessmentControls = AssessmentControl[];
export interface AssessmentControlSet {
  id?: string;
  description?: string;
  status?: ControlSetStatus;
  roles?: Role[];
  controls?: AssessmentControl[];
  delegations?: Delegation[];
  systemEvidenceCount?: number;
  manualEvidenceCount?: number;
}
export type AssessmentControlSets = AssessmentControlSet[];
export interface AssessmentFramework {
  id?: string;
  arn?: string;
  metadata?: FrameworkMetadata;
  controlSets?: AssessmentControlSet[];
}
export interface Assessment {
  arn?: string;
  awsAccount?: AWSAccount;
  metadata?: AssessmentMetadata;
  framework?: AssessmentFramework;
  tags?: { [key: string]: string | undefined };
}
export interface CreateAssessmentResponse {
  assessment?: Assessment;
}
export type FrameworkName = string;
export type FrameworkDescription = string;
export type ControlSetName = string;
export interface CreateAssessmentFrameworkControl {
  id: string;
}
export type CreateAssessmentFrameworkControls = CreateAssessmentFrameworkControl[];
export interface CreateAssessmentFrameworkControlSet {
  name: string;
  controls?: CreateAssessmentFrameworkControl[];
}
export type CreateAssessmentFrameworkControlSets = CreateAssessmentFrameworkControlSet[];
export interface CreateAssessmentFrameworkRequest {
  name: string;
  description?: string;
  complianceType?: string | redacted.Redacted<string>;
  controlSets: CreateAssessmentFrameworkControlSet[];
  tags?: { [key: string]: string | undefined };
}
export type FrameworkType = "Standard" | "Custom" | (string & {});
export type ControlSources = string;
export type ControlType = "Standard" | "Custom" | "Core" | (string & {});
export type TestingInformation = string | redacted.Redacted<string>;
export type ActionPlanTitle = string | redacted.Redacted<string>;
export type ActionPlanInstructions = string | redacted.Redacted<string>;
export type SourceName = string;
export type SourceDescription = string;
export type SourceSetUpOption =
  | "System_Controls_Mapping"
  | "Procedural_Controls_Mapping"
  | (string & {});
export type SourceType =
  | "AWS_Cloudtrail"
  | "AWS_Config"
  | "AWS_Security_Hub"
  | "AWS_API_Call"
  | "MANUAL"
  | "Common_Control"
  | "Core_Control"
  | (string & {});
export type KeywordInputType = "SELECT_FROM_LIST" | "UPLOAD_FILE" | "INPUT_TEXT" | (string & {});
export type KeywordValue = string;
export interface SourceKeyword {
  keywordInputType?: KeywordInputType;
  keywordValue?: string;
}
export type SourceFrequency = "DAILY" | "WEEKLY" | "MONTHLY" | (string & {});
export type TroubleshootingText = string | redacted.Redacted<string>;
export interface ControlMappingSource {
  sourceId?: string;
  sourceName?: string;
  sourceDescription?: string;
  sourceSetUpOption?: SourceSetUpOption;
  sourceType?: SourceType;
  sourceKeyword?: SourceKeyword;
  sourceFrequency?: SourceFrequency;
  troubleshootingText?: string | redacted.Redacted<string>;
}
export type ControlMappingSources = ControlMappingSource[];
export type LastUpdatedBy = string | redacted.Redacted<string>;
export type ControlState = "ACTIVE" | "END_OF_SUPPORT" | (string & {});
export interface Control {
  arn?: string;
  id?: string;
  type?: ControlType;
  name?: string;
  description?: string | redacted.Redacted<string>;
  testingInformation?: string | redacted.Redacted<string>;
  actionPlanTitle?: string | redacted.Redacted<string>;
  actionPlanInstructions?: string | redacted.Redacted<string>;
  controlSources?: string;
  controlMappingSources?: ControlMappingSource[];
  createdAt?: Date;
  lastUpdatedAt?: Date;
  createdBy?: string | redacted.Redacted<string>;
  lastUpdatedBy?: string | redacted.Redacted<string>;
  tags?: { [key: string]: string | undefined };
  state?: ControlState;
}
export type Controls = Control[];
export interface ControlSet {
  id?: string;
  name?: string;
  controls?: Control[];
}
export type ControlSets = ControlSet[];
export interface Framework {
  arn?: string;
  id?: string;
  name?: string;
  type?: FrameworkType;
  complianceType?: string | redacted.Redacted<string>;
  description?: string;
  logo?: string;
  controlSources?: string;
  controlSets?: ControlSet[];
  createdAt?: Date;
  lastUpdatedAt?: Date;
  createdBy?: string | redacted.Redacted<string>;
  lastUpdatedBy?: string | redacted.Redacted<string>;
  tags?: { [key: string]: string | undefined };
}
export interface CreateAssessmentFrameworkResponse {
  framework?: Framework;
}
export type AssessmentReportName = string;
export type AssessmentReportDescription = string | redacted.Redacted<string>;
export type QueryStatement = string;
export interface CreateAssessmentReportRequest {
  name: string;
  description?: string | redacted.Redacted<string>;
  assessmentId: string;
  queryStatement?: string;
}
export type AssessmentReportStatus = "COMPLETE" | "IN_PROGRESS" | "FAILED" | (string & {});
export interface AssessmentReport {
  id?: string;
  name?: string;
  description?: string | redacted.Redacted<string>;
  awsAccountId?: string;
  assessmentId?: string;
  assessmentName?: string | redacted.Redacted<string>;
  author?: string | redacted.Redacted<string>;
  status?: AssessmentReportStatus;
  creationTime?: Date;
}
export interface CreateAssessmentReportResponse {
  assessmentReport?: AssessmentReport;
}
export interface CreateControlMappingSource {
  sourceName?: string;
  sourceDescription?: string;
  sourceSetUpOption?: SourceSetUpOption;
  sourceType?: SourceType;
  sourceKeyword?: SourceKeyword;
  sourceFrequency?: SourceFrequency;
  troubleshootingText?: string | redacted.Redacted<string>;
}
export type CreateControlMappingSources = CreateControlMappingSource[];
export interface CreateControlRequest {
  name: string;
  description?: string | redacted.Redacted<string>;
  testingInformation?: string | redacted.Redacted<string>;
  actionPlanTitle?: string | redacted.Redacted<string>;
  actionPlanInstructions?: string | redacted.Redacted<string>;
  controlMappingSources: CreateControlMappingSource[];
  tags?: { [key: string]: string | undefined };
}
export interface CreateControlResponse {
  control?: Control;
}
export interface DeleteAssessmentRequest {
  assessmentId: string;
}
export interface DeleteAssessmentResponse {}
export interface DeleteAssessmentFrameworkRequest {
  frameworkId: string;
}
export interface DeleteAssessmentFrameworkResponse {}
export type ShareRequestType = "SENT" | "RECEIVED" | (string & {});
export interface DeleteAssessmentFrameworkShareRequest {
  requestId: string;
  requestType: ShareRequestType;
}
export interface DeleteAssessmentFrameworkShareResponse {}
export interface DeleteAssessmentReportRequest {
  assessmentId: string;
  assessmentReportId: string;
}
export interface DeleteAssessmentReportResponse {}
export interface DeleteControlRequest {
  controlId: string;
}
export interface DeleteControlResponse {}
export interface DeregisterAccountRequest {}
export type AccountStatus = "ACTIVE" | "INACTIVE" | "PENDING_ACTIVATION" | (string & {});
export interface DeregisterAccountResponse {
  status?: AccountStatus;
}
export interface DeregisterOrganizationAdminAccountRequest {
  adminAccountId?: string;
}
export interface DeregisterOrganizationAdminAccountResponse {}
export interface DisassociateAssessmentReportEvidenceFolderRequest {
  assessmentId: string;
  evidenceFolderId: string;
}
export interface DisassociateAssessmentReportEvidenceFolderResponse {}
export interface GetAccountStatusRequest {}
export interface GetAccountStatusResponse {
  status?: AccountStatus;
}
export interface GetAssessmentRequest {
  assessmentId: string;
}
export interface GetAssessmentResponse {
  assessment?: Assessment;
  userRole?: Role;
}
export interface GetAssessmentFrameworkRequest {
  frameworkId: string;
}
export interface GetAssessmentFrameworkResponse {
  framework?: Framework;
}
export interface GetAssessmentReportUrlRequest {
  assessmentReportId: string;
  assessmentId: string;
}
export type HyperlinkName = string;
export type UrlLink = string;
export interface URL {
  hyperlinkName?: string;
  link?: string;
}
export interface GetAssessmentReportUrlResponse {
  preSignedUrl?: URL;
}
export type Token = string;
export type MaxResults = number;
export interface GetChangeLogsRequest {
  assessmentId: string;
  controlSetId?: string;
  controlId?: string;
  nextToken?: string;
  maxResults?: number;
}
export type ObjectTypeEnum =
  | "ASSESSMENT"
  | "CONTROL_SET"
  | "CONTROL"
  | "DELEGATION"
  | "ASSESSMENT_REPORT"
  | (string & {});
export type ActionEnum =
  | "CREATE"
  | "UPDATE_METADATA"
  | "ACTIVE"
  | "INACTIVE"
  | "DELETE"
  | "UNDER_REVIEW"
  | "REVIEWED"
  | "IMPORT_EVIDENCE"
  | (string & {});
export interface ChangeLog {
  objectType?: ObjectTypeEnum;
  objectName?: string;
  action?: ActionEnum;
  createdAt?: Date;
  createdBy?: string;
}
export type ChangeLogs = ChangeLog[];
export interface GetChangeLogsResponse {
  changeLogs?: ChangeLog[];
  nextToken?: string;
}
export interface GetControlRequest {
  controlId: string;
}
export interface GetControlResponse {
  control?: Control;
}
export interface GetDelegationsRequest {
  nextToken?: string;
  maxResults?: number;
}
export interface DelegationMetadata {
  id?: string;
  assessmentName?: string | redacted.Redacted<string>;
  assessmentId?: string;
  status?: DelegationStatus;
  roleArn?: string;
  creationTime?: Date;
  controlSetName?: string;
}
export type DelegationMetadataList = DelegationMetadata[];
export interface GetDelegationsResponse {
  delegations?: DelegationMetadata[];
  nextToken?: string;
}
export interface GetEvidenceRequest {
  assessmentId: string;
  controlSetId: string;
  evidenceFolderId: string;
  evidenceId: string;
}
export type EventName = string;
export type GenericArn = string;
export interface Resource {
  arn?: string;
  value?: string;
  complianceCheck?: string;
}
export type Resources = Resource[];
export type EvidenceAttributeKey = string;
export type EvidenceAttributeValue = string;
export type EvidenceAttributes = { [key: string]: string | undefined };
export interface Evidence {
  dataSource?: string;
  evidenceAwsAccountId?: string;
  time?: Date;
  eventSource?: string;
  eventName?: string;
  evidenceByType?: string;
  resourcesIncluded?: Resource[];
  attributes?: { [key: string]: string | undefined };
  iamId?: string;
  complianceCheck?: string;
  awsOrganization?: string;
  awsAccountId?: string;
  evidenceFolderId?: string;
  id?: string;
  assessmentReportSelection?: string;
}
export interface GetEvidenceResponse {
  evidence?: Evidence;
}
export interface GetEvidenceByEvidenceFolderRequest {
  assessmentId: string;
  controlSetId: string;
  evidenceFolderId: string;
  nextToken?: string;
  maxResults?: number;
}
export type EvidenceList = Evidence[];
export interface GetEvidenceByEvidenceFolderResponse {
  evidence?: Evidence[];
  nextToken?: string;
}
export interface GetEvidenceFileUploadUrlRequest {
  fileName: string | redacted.Redacted<string>;
}
export interface GetEvidenceFileUploadUrlResponse {
  evidenceFileName?: string;
  uploadUrl?: string;
}
export interface GetEvidenceFolderRequest {
  assessmentId: string;
  controlSetId: string;
  evidenceFolderId: string;
}
export type AssessmentEvidenceFolderName = string;
export interface AssessmentEvidenceFolder {
  name?: string;
  date?: Date;
  assessmentId?: string;
  controlSetId?: string;
  controlId?: string;
  id?: string;
  dataSource?: string;
  author?: string;
  totalEvidence?: number;
  assessmentReportSelectionCount?: number;
  controlName?: string;
  evidenceResourcesIncludedCount?: number;
  evidenceByTypeConfigurationDataCount?: number;
  evidenceByTypeManualCount?: number;
  evidenceByTypeComplianceCheckCount?: number;
  evidenceByTypeComplianceCheckIssuesCount?: number;
  evidenceByTypeUserActivityCount?: number;
  evidenceAwsServiceSourceCount?: number;
}
export interface GetEvidenceFolderResponse {
  evidenceFolder?: AssessmentEvidenceFolder;
}
export interface GetEvidenceFoldersByAssessmentRequest {
  assessmentId: string;
  nextToken?: string;
  maxResults?: number;
}
export type AssessmentEvidenceFolders = AssessmentEvidenceFolder[];
export interface GetEvidenceFoldersByAssessmentResponse {
  evidenceFolders?: AssessmentEvidenceFolder[];
  nextToken?: string;
}
export interface GetEvidenceFoldersByAssessmentControlRequest {
  assessmentId: string;
  controlSetId: string;
  controlId: string;
  nextToken?: string;
  maxResults?: number;
}
export interface GetEvidenceFoldersByAssessmentControlResponse {
  evidenceFolders?: AssessmentEvidenceFolder[];
  nextToken?: string;
}
export interface GetInsightsRequest {}
export interface Insights {
  activeAssessmentsCount?: number;
  noncompliantEvidenceCount?: number;
  compliantEvidenceCount?: number;
  inconclusiveEvidenceCount?: number;
  assessmentControlsCountByNoncompliantEvidence?: number;
  totalAssessmentControlsCount?: number;
  lastUpdated?: Date;
}
export interface GetInsightsResponse {
  insights?: Insights;
}
export interface GetInsightsByAssessmentRequest {
  assessmentId: string;
}
export interface InsightsByAssessment {
  noncompliantEvidenceCount?: number;
  compliantEvidenceCount?: number;
  inconclusiveEvidenceCount?: number;
  assessmentControlsCountByNoncompliantEvidence?: number;
  totalAssessmentControlsCount?: number;
  lastUpdated?: Date;
}
export interface GetInsightsByAssessmentResponse {
  insights?: InsightsByAssessment;
}
export interface GetOrganizationAdminAccountRequest {}
export type OrganizationId = string;
export interface GetOrganizationAdminAccountResponse {
  adminAccountId?: string;
  organizationId?: string;
}
export interface GetServicesInScopeRequest {}
export interface ServiceMetadata {
  name?: string;
  displayName?: string;
  description?: string;
  category?: string;
}
export type ServiceMetadataList = ServiceMetadata[];
export interface GetServicesInScopeResponse {
  serviceMetadata?: ServiceMetadata[];
}
export type SettingAttribute =
  | "ALL"
  | "IS_AWS_ORG_ENABLED"
  | "SNS_TOPIC"
  | "DEFAULT_ASSESSMENT_REPORTS_DESTINATION"
  | "DEFAULT_PROCESS_OWNERS"
  | "EVIDENCE_FINDER_ENABLEMENT"
  | "DEREGISTRATION_POLICY"
  | "DEFAULT_EXPORT_DESTINATION"
  | (string & {});
export interface GetSettingsRequest {
  attribute: SettingAttribute;
}
export type SNSTopic = string | redacted.Redacted<string>;
export type KmsKey = string;
export type CloudTrailArn = string;
export type EvidenceFinderEnablementStatus =
  | "ENABLED"
  | "DISABLED"
  | "ENABLE_IN_PROGRESS"
  | "DISABLE_IN_PROGRESS"
  | (string & {});
export type EvidenceFinderBackfillStatus =
  | "NOT_STARTED"
  | "IN_PROGRESS"
  | "COMPLETED"
  | (string & {});
export interface EvidenceFinderEnablement {
  eventDataStoreArn?: string;
  enablementStatus?: EvidenceFinderEnablementStatus;
  backfillStatus?: EvidenceFinderBackfillStatus;
  error?: string;
}
export type DeleteResources = "ALL" | "DEFAULT" | (string & {});
export interface DeregistrationPolicy {
  deleteResources?: DeleteResources;
}
export type ExportDestinationType = "S3" | (string & {});
export interface DefaultExportDestination {
  destinationType?: ExportDestinationType;
  destination?: string;
}
export interface Settings {
  isAwsOrgEnabled?: boolean;
  snsTopic?: string | redacted.Redacted<string>;
  defaultAssessmentReportsDestination?: AssessmentReportsDestination;
  defaultProcessOwners?: Role[];
  kmsKey?: string;
  evidenceFinderEnablement?: EvidenceFinderEnablement;
  deregistrationPolicy?: DeregistrationPolicy;
  defaultExportDestination?: DefaultExportDestination;
}
export interface GetSettingsResponse {
  settings?: Settings;
}
export type ControlDomainId = string;
export interface ListAssessmentControlInsightsByControlDomainRequest {
  controlDomainId: string;
  assessmentId: string;
  nextToken?: string;
  maxResults?: number;
}
export interface EvidenceInsights {
  noncompliantEvidenceCount?: number;
  compliantEvidenceCount?: number;
  inconclusiveEvidenceCount?: number;
}
export interface ControlInsightsMetadataByAssessmentItem {
  name?: string;
  id?: string;
  evidenceInsights?: EvidenceInsights;
  controlSetName?: string;
  lastUpdated?: Date;
}
export type ControlInsightsMetadataByAssessment = ControlInsightsMetadataByAssessmentItem[];
export interface ListAssessmentControlInsightsByControlDomainResponse {
  controlInsightsByAssessment?: ControlInsightsMetadataByAssessmentItem[];
  nextToken?: string;
}
export interface ListAssessmentFrameworksRequest {
  frameworkType: FrameworkType;
  nextToken?: string;
  maxResults?: number;
}
export type ControlsCount = number;
export type ControlSetsCount = number;
export interface AssessmentFrameworkMetadata {
  arn?: string;
  id?: string;
  type?: FrameworkType;
  name?: string;
  description?: string;
  logo?: string;
  complianceType?: string | redacted.Redacted<string>;
  controlsCount?: number;
  controlSetsCount?: number;
  createdAt?: Date;
  lastUpdatedAt?: Date;
}
export type FrameworkMetadataList = AssessmentFrameworkMetadata[];
export interface ListAssessmentFrameworksResponse {
  frameworkMetadataList?: AssessmentFrameworkMetadata[];
  nextToken?: string;
}
export interface ListAssessmentFrameworkShareRequestsRequest {
  requestType: ShareRequestType;
  nextToken?: string;
  maxResults?: number;
}
export type ShareRequestStatus =
  | "ACTIVE"
  | "REPLICATING"
  | "SHARED"
  | "EXPIRING"
  | "FAILED"
  | "EXPIRED"
  | "DECLINED"
  | "REVOKED"
  | (string & {});
export type Region = string;
export type ShareRequestComment = string;
export interface AssessmentFrameworkShareRequest {
  id?: string;
  frameworkId?: string;
  frameworkName?: string;
  frameworkDescription?: string;
  status?: ShareRequestStatus;
  sourceAccount?: string;
  destinationAccount?: string;
  destinationRegion?: string;
  expirationTime?: Date;
  creationTime?: Date;
  lastUpdated?: Date;
  comment?: string;
  standardControlsCount?: number;
  customControlsCount?: number;
  complianceType?: string | redacted.Redacted<string>;
}
export type AssessmentFrameworkShareRequestList = AssessmentFrameworkShareRequest[];
export interface ListAssessmentFrameworkShareRequestsResponse {
  assessmentFrameworkShareRequests?: AssessmentFrameworkShareRequest[];
  nextToken?: string;
}
export interface ListAssessmentReportsRequest {
  nextToken?: string;
  maxResults?: number;
}
export interface AssessmentReportMetadata {
  id?: string;
  name?: string;
  description?: string | redacted.Redacted<string>;
  assessmentId?: string;
  assessmentName?: string | redacted.Redacted<string>;
  author?: string | redacted.Redacted<string>;
  status?: AssessmentReportStatus;
  creationTime?: Date;
}
export type AssessmentReportsMetadata = AssessmentReportMetadata[];
export interface ListAssessmentReportsResponse {
  assessmentReports?: AssessmentReportMetadata[];
  nextToken?: string;
}
export interface ListAssessmentsRequest {
  status?: AssessmentStatus;
  nextToken?: string;
  maxResults?: number;
}
export interface AssessmentMetadataItem {
  name?: string | redacted.Redacted<string>;
  id?: string;
  complianceType?: string | redacted.Redacted<string>;
  status?: AssessmentStatus;
  roles?: Role[];
  delegations?: Delegation[];
  creationTime?: Date;
  lastUpdated?: Date;
}
export type ListAssessmentMetadata = AssessmentMetadataItem[];
export interface ListAssessmentsResponse {
  assessmentMetadata?: AssessmentMetadataItem[];
  nextToken?: string;
}
export interface ListControlDomainInsightsRequest {
  nextToken?: string;
  maxResults?: number;
}
export interface ControlDomainInsights {
  name?: string;
  id?: string;
  controlsCountByNoncompliantEvidence?: number;
  totalControlsCount?: number;
  evidenceInsights?: EvidenceInsights;
  lastUpdated?: Date;
}
export type ControlDomainInsightsList = ControlDomainInsights[];
export interface ListControlDomainInsightsResponse {
  controlDomainInsights?: ControlDomainInsights[];
  nextToken?: string;
}
export interface ListControlDomainInsightsByAssessmentRequest {
  assessmentId: string;
  nextToken?: string;
  maxResults?: number;
}
export interface ListControlDomainInsightsByAssessmentResponse {
  controlDomainInsights?: ControlDomainInsights[];
  nextToken?: string;
}
export interface ListControlInsightsByControlDomainRequest {
  controlDomainId: string;
  nextToken?: string;
  maxResults?: number;
}
export interface ControlInsightsMetadataItem {
  name?: string;
  id?: string;
  evidenceInsights?: EvidenceInsights;
  lastUpdated?: Date;
}
export type ControlInsightsMetadata = ControlInsightsMetadataItem[];
export interface ListControlInsightsByControlDomainResponse {
  controlInsightsMetadata?: ControlInsightsMetadataItem[];
  nextToken?: string;
}
export type ControlCatalogId = string;
export interface ListControlsRequest {
  controlType: ControlType;
  nextToken?: string;
  maxResults?: number;
  controlCatalogId?: string;
}
export interface ControlMetadata {
  arn?: string;
  id?: string;
  name?: string;
  controlSources?: string;
  createdAt?: Date;
  lastUpdatedAt?: Date;
}
export type ControlMetadataList = ControlMetadata[];
export interface ListControlsResponse {
  controlMetadataList?: ControlMetadata[];
  nextToken?: string;
}
export type DataSourceType =
  | "AWS_Cloudtrail"
  | "AWS_Config"
  | "AWS_Security_Hub"
  | "AWS_API_Call"
  | "MANUAL"
  | (string & {});
export interface ListKeywordsForDataSourceRequest {
  source: DataSourceType;
  nextToken?: string;
  maxResults?: number;
}
export type Keywords = string[];
export interface ListKeywordsForDataSourceResponse {
  keywords?: string[];
  nextToken?: string;
}
export interface ListNotificationsRequest {
  nextToken?: string;
  maxResults?: number;
}
export type TimestampUUID = string;
export interface Notification {
  id?: string;
  assessmentId?: string;
  assessmentName?: string | redacted.Redacted<string>;
  controlSetId?: string;
  controlSetName?: string;
  description?: string;
  eventTime?: Date;
  source?: string;
}
export type Notifications = Notification[];
export interface ListNotificationsResponse {
  notifications?: Notification[];
  nextToken?: string;
}
export interface ListTagsForResourceRequest {
  resourceArn: string;
}
export interface ListTagsForResourceResponse {
  tags?: { [key: string]: string | undefined };
}
export interface RegisterAccountRequest {
  kmsKey?: string;
  delegatedAdminAccount?: string;
}
export interface RegisterAccountResponse {
  status?: AccountStatus;
}
export interface RegisterOrganizationAdminAccountRequest {
  adminAccountId: string;
}
export interface RegisterOrganizationAdminAccountResponse {
  adminAccountId?: string;
  organizationId?: string;
}
export interface StartAssessmentFrameworkShareRequest {
  frameworkId: string;
  destinationAccount: string;
  destinationRegion: string;
  comment?: string;
}
export interface StartAssessmentFrameworkShareResponse {
  assessmentFrameworkShareRequest?: AssessmentFrameworkShareRequest;
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
export interface UpdateAssessmentRequest {
  assessmentId: string;
  assessmentName?: string | redacted.Redacted<string>;
  assessmentDescription?: string | redacted.Redacted<string>;
  scope: Scope;
  assessmentReportsDestination?: AssessmentReportsDestination;
  roles?: Role[];
}
export interface UpdateAssessmentResponse {
  assessment?: Assessment;
}
export interface UpdateAssessmentControlRequest {
  assessmentId: string;
  controlSetId: string;
  controlId: string;
  controlStatus?: ControlStatus;
  commentBody?: string | redacted.Redacted<string>;
}
export interface UpdateAssessmentControlResponse {
  control?: AssessmentControl;
}
export interface UpdateAssessmentControlSetStatusRequest {
  assessmentId: string;
  controlSetId: string;
  status: ControlSetStatus;
  comment: string | redacted.Redacted<string>;
}
export interface UpdateAssessmentControlSetStatusResponse {
  controlSet?: AssessmentControlSet;
}
export interface UpdateAssessmentFrameworkControlSet {
  id?: string;
  name: string;
  controls: CreateAssessmentFrameworkControl[];
}
export type UpdateAssessmentFrameworkControlSets = UpdateAssessmentFrameworkControlSet[];
export interface UpdateAssessmentFrameworkRequest {
  frameworkId: string;
  name: string;
  description?: string;
  complianceType?: string | redacted.Redacted<string>;
  controlSets: UpdateAssessmentFrameworkControlSet[];
}
export interface UpdateAssessmentFrameworkResponse {
  framework?: Framework;
}
export type ShareRequestAction = "ACCEPT" | "DECLINE" | "REVOKE" | (string & {});
export interface UpdateAssessmentFrameworkShareRequest {
  requestId: string;
  requestType: ShareRequestType;
  action: ShareRequestAction;
}
export interface UpdateAssessmentFrameworkShareResponse {
  assessmentFrameworkShareRequest?: AssessmentFrameworkShareRequest;
}
export interface UpdateAssessmentStatusRequest {
  assessmentId: string;
  status: AssessmentStatus;
}
export interface UpdateAssessmentStatusResponse {
  assessment?: Assessment;
}
export interface UpdateControlRequest {
  controlId: string;
  name: string;
  description?: string | redacted.Redacted<string>;
  testingInformation?: string | redacted.Redacted<string>;
  actionPlanTitle?: string | redacted.Redacted<string>;
  actionPlanInstructions?: string | redacted.Redacted<string>;
  controlMappingSources: ControlMappingSource[];
}
export interface UpdateControlResponse {
  control?: Control;
}
export type SnsArn = string;
export interface UpdateSettingsRequest {
  snsTopic?: string;
  defaultAssessmentReportsDestination?: AssessmentReportsDestination;
  defaultProcessOwners?: Role[];
  kmsKey?: string;
  evidenceFinderEnabled?: boolean;
  deregistrationPolicy?: DeregistrationPolicy;
  defaultExportDestination?: DefaultExportDestination;
}
export interface UpdateSettingsResponse {
  settings?: Settings;
}
export interface ValidateAssessmentReportIntegrityRequest {
  s3RelativePath: string;
}
export type ValidationErrors = string[];
export interface ValidateAssessmentReportIntegrityResponse {
  signatureValid?: boolean;
  signatureAlgorithm?: string;
  signatureDateTime?: string;
  signatureKeyId?: string;
  validationErrors?: string[];
}
export type ValidationExceptionReason =
  | "unknownOperation"
  | "cannotParse"
  | "fieldValidationFailed"
  | "other"
  | (string & {});
export interface ValidationExceptionField {
  name: string;
  message: string;
}
export type ValidationExceptionFieldList = ValidationExceptionField[];
export type AssociateAssessmentReportEvidenceFolderError =
  | AccessDeniedException
  | InternalServerException
  | ResourceNotFoundException
  | ValidationException
  | CommonErrors;
/**
 * Associates an evidence folder to an assessment report in an Audit Manager
 * assessment.
 */
export const associateAssessmentReportEvidenceFolder: API.OperationMethod<
  AssociateAssessmentReportEvidenceFolderRequest,
  AssociateAssessmentReportEvidenceFolderResponse,
  AssociateAssessmentReportEvidenceFolderError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(0) as any as S.Schema<AssociateAssessmentReportEvidenceFolderRequest>,
  output: __S(1) as any as S.Schema<AssociateAssessmentReportEvidenceFolderResponse>,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ResourceNotFoundException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "AssociateAssessmentReportEvidenceFolder",
}));

export type BatchAssociateAssessmentReportEvidenceError =
  | AccessDeniedException
  | InternalServerException
  | ResourceNotFoundException
  | ValidationException
  | CommonErrors;
/**
 * Associates a list of evidence to an assessment report in an Audit Manager
 * assessment.
 */
export const batchAssociateAssessmentReportEvidence: API.OperationMethod<
  BatchAssociateAssessmentReportEvidenceRequest,
  BatchAssociateAssessmentReportEvidenceResponse,
  BatchAssociateAssessmentReportEvidenceError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(3) as any as S.Schema<BatchAssociateAssessmentReportEvidenceRequest>,
  output: __S(6) as any as S.Schema<BatchAssociateAssessmentReportEvidenceResponse>,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ResourceNotFoundException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "BatchAssociateAssessmentReportEvidence",
}));

export type BatchCreateDelegationByAssessmentError =
  | AccessDeniedException
  | InternalServerException
  | ResourceNotFoundException
  | ValidationException
  | CommonErrors;
/**
 * Creates a batch of delegations for an assessment in Audit Manager.
 */
export const batchCreateDelegationByAssessment: API.OperationMethod<
  BatchCreateDelegationByAssessmentRequest,
  BatchCreateDelegationByAssessmentResponse,
  BatchCreateDelegationByAssessmentError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(9) as any as S.Schema<BatchCreateDelegationByAssessmentRequest>,
  output: __S(14) as any as S.Schema<BatchCreateDelegationByAssessmentResponse>,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ResourceNotFoundException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "BatchCreateDelegationByAssessment",
}));

export type BatchDeleteDelegationByAssessmentError =
  | AccessDeniedException
  | InternalServerException
  | ResourceNotFoundException
  | ValidationException
  | CommonErrors;
/**
 * Deletes a batch of delegations for an assessment in Audit Manager.
 */
export const batchDeleteDelegationByAssessment: API.OperationMethod<
  BatchDeleteDelegationByAssessmentRequest,
  BatchDeleteDelegationByAssessmentResponse,
  BatchDeleteDelegationByAssessmentError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(15) as any as S.Schema<BatchDeleteDelegationByAssessmentRequest>,
  output: __S(18) as any as S.Schema<BatchDeleteDelegationByAssessmentResponse>,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ResourceNotFoundException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "BatchDeleteDelegationByAssessment",
}));

export type BatchDisassociateAssessmentReportEvidenceError =
  | AccessDeniedException
  | InternalServerException
  | ResourceNotFoundException
  | ValidationException
  | CommonErrors;
/**
 * Disassociates a list of evidence from an assessment report in Audit Manager.
 */
export const batchDisassociateAssessmentReportEvidence: API.OperationMethod<
  BatchDisassociateAssessmentReportEvidenceRequest,
  BatchDisassociateAssessmentReportEvidenceResponse,
  BatchDisassociateAssessmentReportEvidenceError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(19) as any as S.Schema<BatchDisassociateAssessmentReportEvidenceRequest>,
  output: __S(6) as any as S.Schema<BatchDisassociateAssessmentReportEvidenceResponse>,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ResourceNotFoundException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "BatchDisassociateAssessmentReportEvidence",
}));

export type BatchImportEvidenceToAssessmentControlError =
  | AccessDeniedException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Adds one or more pieces of evidence to a control in an Audit Manager assessment.
 *
 * You can import manual evidence from any S3 bucket by specifying the S3 URI of the
 * object. You can also upload a file from your browser, or enter plain text in response to a
 * risk assessment question.
 *
 * The following restrictions apply to this action:
 *
 * - `manualEvidence` can be only one of the following:
 * `evidenceFileName`, `s3ResourcePath`, or
 * `textResponse`
 *
 * - Maximum size of an individual evidence file: 100 MB
 *
 * - Number of daily manual evidence uploads per control: 100
 *
 * - Supported file formats: See Supported file types for manual evidence in the *Audit Manager User Guide*
 *
 * For more information about Audit Manager service restrictions, see Quotas and
 * restrictions for Audit Manager.
 */
export const batchImportEvidenceToAssessmentControl: API.OperationMethod<
  BatchImportEvidenceToAssessmentControlRequest,
  BatchImportEvidenceToAssessmentControlResponse,
  BatchImportEvidenceToAssessmentControlError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(22) as any as S.Schema<BatchImportEvidenceToAssessmentControlRequest>,
  output: __S(25) as any as S.Schema<BatchImportEvidenceToAssessmentControlResponse>,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "BatchImportEvidenceToAssessmentControl",
}));

export type CreateAssessmentError =
  | AccessDeniedException
  | InternalServerException
  | ResourceNotFoundException
  | ServiceQuotaExceededException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Creates an assessment in Audit Manager.
 */
export const createAssessment: API.OperationMethod<
  CreateAssessmentRequest,
  CreateAssessmentResponse,
  CreateAssessmentError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(35) as any as S.Schema<CreateAssessmentRequest>,
  output: __S(46) as any as S.Schema<CreateAssessmentResponse>,
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
  operationName: "CreateAssessment",
}));

export type CreateAssessmentFrameworkError =
  | AccessDeniedException
  | InternalServerException
  | ResourceNotFoundException
  | ServiceQuotaExceededException
  | ValidationException
  | CommonErrors;
/**
 * Creates a custom framework in Audit Manager.
 */
export const createAssessmentFramework: API.OperationMethod<
  CreateAssessmentFrameworkRequest,
  CreateAssessmentFrameworkResponse,
  CreateAssessmentFrameworkError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(51) as any as S.Schema<CreateAssessmentFrameworkRequest>,
  output: __S(60) as any as S.Schema<CreateAssessmentFrameworkResponse>,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ResourceNotFoundException,
    ServiceQuotaExceededException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "CreateAssessmentFramework",
}));

export type CreateAssessmentReportError =
  | AccessDeniedException
  | InternalServerException
  | ResourceNotFoundException
  | ValidationException
  | CommonErrors;
/**
 * Creates an assessment report for the specified assessment.
 */
export const createAssessmentReport: API.OperationMethod<
  CreateAssessmentReportRequest,
  CreateAssessmentReportResponse,
  CreateAssessmentReportError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(61) as any as S.Schema<CreateAssessmentReportRequest>,
  output: __S(63) as any as S.Schema<CreateAssessmentReportResponse>,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ResourceNotFoundException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "CreateAssessmentReport",
}));

export type CreateControlError =
  | AccessDeniedException
  | InternalServerException
  | ResourceNotFoundException
  | ServiceQuotaExceededException
  | ValidationException
  | CommonErrors;
/**
 * Creates a new custom control in Audit Manager.
 */
export const createControl: API.OperationMethod<
  CreateControlRequest,
  CreateControlResponse,
  CreateControlError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(66) as any as S.Schema<CreateControlRequest>,
  output: __S(67) as any as S.Schema<CreateControlResponse>,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ResourceNotFoundException,
    ServiceQuotaExceededException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "CreateControl",
}));

export type DeleteAssessmentError =
  | AccessDeniedException
  | InternalServerException
  | ResourceNotFoundException
  | ValidationException
  | CommonErrors;
/**
 * Deletes an assessment in Audit Manager.
 */
export const deleteAssessment: API.OperationMethod<
  DeleteAssessmentRequest,
  DeleteAssessmentResponse,
  DeleteAssessmentError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(68) as any as S.Schema<DeleteAssessmentRequest>,
  output: __S(69) as any as S.Schema<DeleteAssessmentResponse>,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ResourceNotFoundException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DeleteAssessment",
}));

export type DeleteAssessmentFrameworkError =
  | AccessDeniedException
  | InternalServerException
  | ResourceNotFoundException
  | ValidationException
  | CommonErrors;
/**
 * Deletes a custom framework in Audit Manager.
 */
export const deleteAssessmentFramework: API.OperationMethod<
  DeleteAssessmentFrameworkRequest,
  DeleteAssessmentFrameworkResponse,
  DeleteAssessmentFrameworkError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(70) as any as S.Schema<DeleteAssessmentFrameworkRequest>,
  output: __S(1) as any as S.Schema<DeleteAssessmentFrameworkResponse>,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ResourceNotFoundException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DeleteAssessmentFramework",
}));

export type DeleteAssessmentFrameworkShareError =
  | AccessDeniedException
  | InternalServerException
  | ResourceNotFoundException
  | ValidationException
  | CommonErrors;
/**
 * Deletes a share request for a custom framework in Audit Manager.
 */
export const deleteAssessmentFrameworkShare: API.OperationMethod<
  DeleteAssessmentFrameworkShareRequest,
  DeleteAssessmentFrameworkShareResponse,
  DeleteAssessmentFrameworkShareError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(71) as any as S.Schema<DeleteAssessmentFrameworkShareRequest>,
  output: __S(1) as any as S.Schema<DeleteAssessmentFrameworkShareResponse>,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ResourceNotFoundException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DeleteAssessmentFrameworkShare",
}));

export type DeleteAssessmentReportError =
  | AccessDeniedException
  | InternalServerException
  | ResourceNotFoundException
  | ValidationException
  | CommonErrors;
/**
 * Deletes an assessment report in Audit Manager.
 *
 * When you run the `DeleteAssessmentReport` operation, Audit Manager
 * attempts to delete the following data:
 *
 * - The specified assessment report that's stored in your S3 bucket
 *
 * - The associated metadata that's stored in Audit Manager
 *
 * If Audit Manager can't access the assessment report in your S3 bucket, the report
 * isn't deleted. In this event, the `DeleteAssessmentReport` operation doesn't
 * fail. Instead, it proceeds to delete the associated metadata only. You must then delete the
 * assessment report from the S3 bucket yourself.
 *
 * This scenario happens when Audit Manager receives a `403 (Forbidden)` or
 * `404 (Not Found)` error from Amazon S3. To avoid this, make sure that
 * your S3 bucket is available, and that you configured the correct permissions for Audit Manager to delete resources in your S3 bucket. For an example permissions policy that
 * you can use, see Assessment report destination permissions in the *Audit Manager User Guide*. For information about the issues that could cause a 403
 * (Forbidden) or `404 (Not Found`) error from Amazon S3, see
 * List of Error Codes in the Amazon Simple Storage Service API
 * Reference.
 */
export const deleteAssessmentReport: API.OperationMethod<
  DeleteAssessmentReportRequest,
  DeleteAssessmentReportResponse,
  DeleteAssessmentReportError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(72) as any as S.Schema<DeleteAssessmentReportRequest>,
  output: __S(69) as any as S.Schema<DeleteAssessmentReportResponse>,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ResourceNotFoundException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DeleteAssessmentReport",
}));

export type DeleteControlError =
  | AccessDeniedException
  | InternalServerException
  | ResourceNotFoundException
  | ValidationException
  | CommonErrors;
/**
 * Deletes a custom control in Audit Manager.
 *
 * When you invoke this operation, the custom control is deleted from any frameworks or
 * assessments that it's currently part of. As a result, Audit Manager will stop
 * collecting evidence for that custom control in all of your assessments. This includes
 * assessments that you previously created before you deleted the custom control.
 */
export const deleteControl: API.OperationMethod<
  DeleteControlRequest,
  DeleteControlResponse,
  DeleteControlError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(73) as any as S.Schema<DeleteControlRequest>,
  output: __S(69) as any as S.Schema<DeleteControlResponse>,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ResourceNotFoundException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DeleteControl",
}));

export type DeregisterAccountError =
  | AccessDeniedException
  | InternalServerException
  | ResourceNotFoundException
  | ValidationException
  | CommonErrors;
/**
 * Deregisters an account in Audit Manager.
 *
 * Before you deregister, you can use the UpdateSettings API operation to set your preferred data retention policy. By
 * default, Audit Manager retains your data. If you want to delete your data, you can
 * use the `DeregistrationPolicy` attribute to request the deletion of your
 * data.
 *
 * For more information about data retention, see Data
 * Protection in the *Audit Manager User Guide*.
 */
export const deregisterAccount: API.OperationMethod<
  DeregisterAccountRequest,
  DeregisterAccountResponse,
  DeregisterAccountError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(74) as any as S.Schema<DeregisterAccountRequest>,
  output: __S(75) as any as S.Schema<DeregisterAccountResponse>,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ResourceNotFoundException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DeregisterAccount",
}));

export type DeregisterOrganizationAdminAccountError =
  | AccessDeniedException
  | InternalServerException
  | ResourceNotFoundException
  | ValidationException
  | CommonErrors;
/**
 * Removes the specified Amazon Web Services account as a delegated administrator for
 * Audit Manager.
 *
 * When you remove a delegated administrator from your Audit Manager settings, you
 * continue to have access to the evidence that you previously collected under that account.
 * This is also the case when you deregister a delegated administrator from Organizations. However, Audit Manager stops collecting and attaching evidence to
 * that delegated administrator account moving forward.
 *
 * Keep in mind the following cleanup task if you use evidence finder:
 *
 * Before you use your management account to remove a delegated administrator, make sure
 * that the current delegated administrator account signs in to Audit Manager and
 * disables evidence finder first. Disabling evidence finder automatically deletes the
 * event data store that was created in their account when they enabled evidence finder. If
 * this task isn't completed, the event data store remains in their account. In this case,
 * we recommend that the original delegated administrator goes to CloudTrail Lake
 * and manually deletes the
 * event data store.
 *
 * This cleanup task is necessary to ensure that you don't end up with multiple event
 * data stores. Audit Manager ignores an unused event data store after you remove or
 * change a delegated administrator account. However, the unused event data store continues
 * to incur storage costs from CloudTrail Lake if you don't delete it.
 *
 * When you deregister a delegated administrator account for Audit Manager, the data
 * for that account isn't deleted. If you want to delete resource data for a delegated
 * administrator account, you must perform that task separately before you deregister the
 * account. Either, you can do this in the Audit Manager console. Or, you can use one of
 * the delete API operations that are provided by Audit Manager.
 *
 * To delete your Audit Manager resource data, see the following instructions:
 *
 * - DeleteAssessment (see also: Deleting an
 * assessment in the Audit Manager User
 * Guide)
 *
 * - DeleteAssessmentFramework (see also: Deleting a
 * custom framework in the Audit Manager User
 * Guide)
 *
 * - DeleteAssessmentFrameworkShare (see also: Deleting a share request in the Audit Manager User
 * Guide)
 *
 * - DeleteAssessmentReport (see also: Deleting an assessment report in the Audit Manager User
 * Guide)
 *
 * - DeleteControl (see also: Deleting a custom
 * control in the Audit Manager User
 * Guide)
 *
 * At this time, Audit Manager doesn't provide an option to delete evidence for a
 * specific delegated administrator. Instead, when your management account deregisters Audit Manager, we perform a cleanup for the current delegated administrator account at the
 * time of deregistration.
 */
export const deregisterOrganizationAdminAccount: API.OperationMethod<
  DeregisterOrganizationAdminAccountRequest,
  DeregisterOrganizationAdminAccountResponse,
  DeregisterOrganizationAdminAccountError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(76) as any as S.Schema<DeregisterOrganizationAdminAccountRequest>,
  output: __S(1) as any as S.Schema<DeregisterOrganizationAdminAccountResponse>,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ResourceNotFoundException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DeregisterOrganizationAdminAccount",
}));

export type DisassociateAssessmentReportEvidenceFolderError =
  | AccessDeniedException
  | InternalServerException
  | ResourceNotFoundException
  | ValidationException
  | CommonErrors;
/**
 * Disassociates an evidence folder from the specified assessment report in Audit Manager.
 */
export const disassociateAssessmentReportEvidenceFolder: API.OperationMethod<
  DisassociateAssessmentReportEvidenceFolderRequest,
  DisassociateAssessmentReportEvidenceFolderResponse,
  DisassociateAssessmentReportEvidenceFolderError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(77) as any as S.Schema<DisassociateAssessmentReportEvidenceFolderRequest>,
  output: __S(1) as any as S.Schema<DisassociateAssessmentReportEvidenceFolderResponse>,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ResourceNotFoundException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DisassociateAssessmentReportEvidenceFolder",
}));

export type GetAccountStatusError = InternalServerException | CommonErrors;
/**
 * Gets the registration status of an account in Audit Manager.
 */
export const getAccountStatus: API.OperationMethod<
  GetAccountStatusRequest,
  GetAccountStatusResponse,
  GetAccountStatusError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(78) as any as S.Schema<GetAccountStatusRequest>,
  output: __S(79) as any as S.Schema<GetAccountStatusResponse>,
  errors: [InternalServerException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetAccountStatus",
}));

export type GetAssessmentError =
  | AccessDeniedException
  | InternalServerException
  | ResourceNotFoundException
  | ValidationException
  | CommonErrors;
/**
 * Gets information about a specified assessment.
 */
export const getAssessment: API.OperationMethod<
  GetAssessmentRequest,
  GetAssessmentResponse,
  GetAssessmentError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(80) as any as S.Schema<GetAssessmentRequest>,
  output: __S(81) as any as S.Schema<GetAssessmentResponse>,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ResourceNotFoundException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetAssessment",
}));

export type GetAssessmentFrameworkError =
  | AccessDeniedException
  | InternalServerException
  | ResourceNotFoundException
  | ValidationException
  | CommonErrors;
/**
 * Gets information about a specified framework.
 */
export const getAssessmentFramework: API.OperationMethod<
  GetAssessmentFrameworkRequest,
  GetAssessmentFrameworkResponse,
  GetAssessmentFrameworkError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(82) as any as S.Schema<GetAssessmentFrameworkRequest>,
  output: __S(60) as any as S.Schema<GetAssessmentFrameworkResponse>,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ResourceNotFoundException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetAssessmentFramework",
}));

export type GetAssessmentReportUrlError =
  | AccessDeniedException
  | InternalServerException
  | ResourceNotFoundException
  | ValidationException
  | CommonErrors;
/**
 * Gets the URL of an assessment report in Audit Manager.
 */
export const getAssessmentReportUrl: API.OperationMethod<
  GetAssessmentReportUrlRequest,
  GetAssessmentReportUrlResponse,
  GetAssessmentReportUrlError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(83) as any as S.Schema<GetAssessmentReportUrlRequest>,
  output: __S(85) as any as S.Schema<GetAssessmentReportUrlResponse>,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ResourceNotFoundException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetAssessmentReportUrl",
}));

export type GetChangeLogsError =
  | AccessDeniedException
  | InternalServerException
  | ResourceNotFoundException
  | ValidationException
  | CommonErrors;
/**
 * Gets a list of changelogs from Audit Manager.
 */
export const getChangeLogs: API.PaginatedOperationMethod<
  GetChangeLogsRequest,
  GetChangeLogsResponse,
  GetChangeLogsError,
  Credentials | HttpClient.HttpClient,
  unknown
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: __S(86) as any as S.Schema<GetChangeLogsRequest>,
  output: __S(89) as any as S.Schema<GetChangeLogsResponse>,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ResourceNotFoundException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetChangeLogs",
  pagination: {
    inputToken: "nextToken",
    outputToken: "nextToken",
    pageSize: "maxResults",
  } as const,
})) as any;

export type GetControlError =
  | AccessDeniedException
  | InternalServerException
  | ResourceNotFoundException
  | ValidationException
  | CommonErrors;
/**
 * Gets information about a specified control.
 */
export const getControl: API.OperationMethod<
  GetControlRequest,
  GetControlResponse,
  GetControlError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(90) as any as S.Schema<GetControlRequest>,
  output: __S(67) as any as S.Schema<GetControlResponse>,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ResourceNotFoundException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetControl",
}));

export type GetDelegationsError =
  | AccessDeniedException
  | InternalServerException
  | ValidationException
  | CommonErrors;
/**
 * Gets a list of delegations from an audit owner to a delegate.
 */
export const getDelegations: API.PaginatedOperationMethod<
  GetDelegationsRequest,
  GetDelegationsResponse,
  GetDelegationsError,
  Credentials | HttpClient.HttpClient,
  unknown
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: __S(91) as any as S.Schema<GetDelegationsRequest>,
  output: __S(94) as any as S.Schema<GetDelegationsResponse>,
  errors: [AccessDeniedException, InternalServerException, ValidationException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetDelegations",
  pagination: {
    inputToken: "nextToken",
    outputToken: "nextToken",
    pageSize: "maxResults",
  } as const,
})) as any;

export type GetEvidenceError =
  | AccessDeniedException
  | InternalServerException
  | ResourceNotFoundException
  | ValidationException
  | CommonErrors;
/**
 * Gets information about a specified evidence item.
 */
export const getEvidence: API.OperationMethod<
  GetEvidenceRequest,
  GetEvidenceResponse,
  GetEvidenceError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(95) as any as S.Schema<GetEvidenceRequest>,
  output: __S(100) as any as S.Schema<GetEvidenceResponse>,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ResourceNotFoundException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetEvidence",
}));

export type GetEvidenceByEvidenceFolderError =
  | AccessDeniedException
  | InternalServerException
  | ResourceNotFoundException
  | ValidationException
  | CommonErrors;
/**
 * Gets all evidence from a specified evidence folder in Audit Manager.
 */
export const getEvidenceByEvidenceFolder: API.PaginatedOperationMethod<
  GetEvidenceByEvidenceFolderRequest,
  GetEvidenceByEvidenceFolderResponse,
  GetEvidenceByEvidenceFolderError,
  Credentials | HttpClient.HttpClient,
  unknown
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: __S(101) as any as S.Schema<GetEvidenceByEvidenceFolderRequest>,
  output: __S(103) as any as S.Schema<GetEvidenceByEvidenceFolderResponse>,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ResourceNotFoundException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetEvidenceByEvidenceFolder",
  pagination: {
    inputToken: "nextToken",
    outputToken: "nextToken",
    pageSize: "maxResults",
  } as const,
})) as any;

export type GetEvidenceFileUploadUrlError =
  | AccessDeniedException
  | InternalServerException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Creates a presigned Amazon S3 URL that can be used to upload a file as manual
 * evidence. For instructions on how to use this operation, see Upload a file from your browser in the Audit Manager User
 * Guide.
 *
 * The following restrictions apply to this operation:
 *
 * - Maximum size of an individual evidence file: 100 MB
 *
 * - Number of daily manual evidence uploads per control: 100
 *
 * - Supported file formats: See Supported file types for manual evidence in the *Audit Manager User Guide*
 *
 * For more information about Audit Manager service restrictions, see Quotas and
 * restrictions for Audit Manager.
 */
export const getEvidenceFileUploadUrl: API.OperationMethod<
  GetEvidenceFileUploadUrlRequest,
  GetEvidenceFileUploadUrlResponse,
  GetEvidenceFileUploadUrlError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(104) as any as S.Schema<GetEvidenceFileUploadUrlRequest>,
  output: __S(105) as any as S.Schema<GetEvidenceFileUploadUrlResponse>,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetEvidenceFileUploadUrl",
}));

export type GetEvidenceFolderError =
  | AccessDeniedException
  | InternalServerException
  | ResourceNotFoundException
  | ValidationException
  | CommonErrors;
/**
 * Gets an evidence folder from a specified assessment in Audit Manager.
 */
export const getEvidenceFolder: API.OperationMethod<
  GetEvidenceFolderRequest,
  GetEvidenceFolderResponse,
  GetEvidenceFolderError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(106) as any as S.Schema<GetEvidenceFolderRequest>,
  output: __S(108) as any as S.Schema<GetEvidenceFolderResponse>,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ResourceNotFoundException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetEvidenceFolder",
}));

export type GetEvidenceFoldersByAssessmentError =
  | AccessDeniedException
  | InternalServerException
  | ResourceNotFoundException
  | ValidationException
  | CommonErrors;
/**
 * Gets the evidence folders from a specified assessment in Audit Manager.
 */
export const getEvidenceFoldersByAssessment: API.PaginatedOperationMethod<
  GetEvidenceFoldersByAssessmentRequest,
  GetEvidenceFoldersByAssessmentResponse,
  GetEvidenceFoldersByAssessmentError,
  Credentials | HttpClient.HttpClient,
  unknown
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: __S(109) as any as S.Schema<GetEvidenceFoldersByAssessmentRequest>,
  output: __S(111) as any as S.Schema<GetEvidenceFoldersByAssessmentResponse>,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ResourceNotFoundException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetEvidenceFoldersByAssessment",
  pagination: {
    inputToken: "nextToken",
    outputToken: "nextToken",
    pageSize: "maxResults",
  } as const,
})) as any;

export type GetEvidenceFoldersByAssessmentControlError =
  | AccessDeniedException
  | InternalServerException
  | ResourceNotFoundException
  | ValidationException
  | CommonErrors;
/**
 * Gets a list of evidence folders that are associated with a specified control in an
 * Audit Manager assessment.
 */
export const getEvidenceFoldersByAssessmentControl: API.PaginatedOperationMethod<
  GetEvidenceFoldersByAssessmentControlRequest,
  GetEvidenceFoldersByAssessmentControlResponse,
  GetEvidenceFoldersByAssessmentControlError,
  Credentials | HttpClient.HttpClient,
  unknown
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: __S(112) as any as S.Schema<GetEvidenceFoldersByAssessmentControlRequest>,
  output: __S(111) as any as S.Schema<GetEvidenceFoldersByAssessmentControlResponse>,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ResourceNotFoundException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetEvidenceFoldersByAssessmentControl",
  pagination: {
    inputToken: "nextToken",
    outputToken: "nextToken",
    pageSize: "maxResults",
  } as const,
})) as any;

export type GetInsightsError = AccessDeniedException | InternalServerException | CommonErrors;
/**
 * Gets the latest analytics data for all your current active assessments.
 */
export const getInsights: API.OperationMethod<
  GetInsightsRequest,
  GetInsightsResponse,
  GetInsightsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(113) as any as S.Schema<GetInsightsRequest>,
  output: __S(115) as any as S.Schema<GetInsightsResponse>,
  errors: [AccessDeniedException, InternalServerException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetInsights",
}));

export type GetInsightsByAssessmentError =
  | AccessDeniedException
  | InternalServerException
  | ResourceNotFoundException
  | ValidationException
  | CommonErrors;
/**
 * Gets the latest analytics data for a specific active assessment.
 */
export const getInsightsByAssessment: API.OperationMethod<
  GetInsightsByAssessmentRequest,
  GetInsightsByAssessmentResponse,
  GetInsightsByAssessmentError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(116) as any as S.Schema<GetInsightsByAssessmentRequest>,
  output: __S(118) as any as S.Schema<GetInsightsByAssessmentResponse>,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ResourceNotFoundException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetInsightsByAssessment",
}));

export type GetOrganizationAdminAccountError =
  | AccessDeniedException
  | InternalServerException
  | ResourceNotFoundException
  | ValidationException
  | CommonErrors;
/**
 * Gets the name of the delegated Amazon Web Services administrator account for a specified
 * organization.
 */
export const getOrganizationAdminAccount: API.OperationMethod<
  GetOrganizationAdminAccountRequest,
  GetOrganizationAdminAccountResponse,
  GetOrganizationAdminAccountError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(119) as any as S.Schema<GetOrganizationAdminAccountRequest>,
  output: __S(120) as any as S.Schema<GetOrganizationAdminAccountResponse>,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ResourceNotFoundException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetOrganizationAdminAccount",
}));

export type GetServicesInScopeError =
  | AccessDeniedException
  | InternalServerException
  | ValidationException
  | CommonErrors;
/**
 * Gets a list of the Amazon Web Services services from which Audit Manager can collect
 * evidence.
 *
 * Audit Manager defines which Amazon Web Services services are in scope for an
 * assessment. Audit Manager infers this scope by examining the assessment's controls and
 * their data sources, and then mapping this information to one or more of the corresponding
 * Amazon Web Services services that are in this list.
 *
 * For information about why it's no longer possible to specify services in scope manually, see
 * I can't edit the services in scope for my assessment in
 * the *Troubleshooting* section of the Audit Manager user
 * guide.
 */
export const getServicesInScope: API.OperationMethod<
  GetServicesInScopeRequest,
  GetServicesInScopeResponse,
  GetServicesInScopeError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(121) as any as S.Schema<GetServicesInScopeRequest>,
  output: __S(124) as any as S.Schema<GetServicesInScopeResponse>,
  errors: [AccessDeniedException, InternalServerException, ValidationException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetServicesInScope",
}));

export type GetSettingsError = AccessDeniedException | InternalServerException | CommonErrors;
/**
 * Gets the settings for a specified Amazon Web Services account.
 */
export const getSettings: API.OperationMethod<
  GetSettingsRequest,
  GetSettingsResponse,
  GetSettingsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(125) as any as S.Schema<GetSettingsRequest>,
  output: __S(130) as any as S.Schema<GetSettingsResponse>,
  errors: [AccessDeniedException, InternalServerException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetSettings",
}));

export type ListAssessmentControlInsightsByControlDomainError =
  | AccessDeniedException
  | InternalServerException
  | ResourceNotFoundException
  | ValidationException
  | CommonErrors;
/**
 * Lists the latest analytics data for controls within a specific control domain and a
 * specific active assessment.
 *
 * Control insights are listed only if the control belongs to the control domain and
 * assessment that was specified. Moreover, the control must have collected evidence on the
 * `lastUpdated` date of `controlInsightsByAssessment`. If neither
 * of these conditions are met, no data is listed for that control.
 */
export const listAssessmentControlInsightsByControlDomain: API.PaginatedOperationMethod<
  ListAssessmentControlInsightsByControlDomainRequest,
  ListAssessmentControlInsightsByControlDomainResponse,
  ListAssessmentControlInsightsByControlDomainError,
  Credentials | HttpClient.HttpClient,
  unknown
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: __S(131) as any as S.Schema<ListAssessmentControlInsightsByControlDomainRequest>,
  output: __S(135) as any as S.Schema<ListAssessmentControlInsightsByControlDomainResponse>,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ResourceNotFoundException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListAssessmentControlInsightsByControlDomain",
  pagination: {
    inputToken: "nextToken",
    outputToken: "nextToken",
    pageSize: "maxResults",
  } as const,
})) as any;

export type ListAssessmentFrameworksError =
  | AccessDeniedException
  | InternalServerException
  | ValidationException
  | CommonErrors;
/**
 * Returns a list of the frameworks that are available in the Audit Manager framework
 * library.
 */
export const listAssessmentFrameworks: API.PaginatedOperationMethod<
  ListAssessmentFrameworksRequest,
  ListAssessmentFrameworksResponse,
  ListAssessmentFrameworksError,
  Credentials | HttpClient.HttpClient,
  unknown
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: __S(136) as any as S.Schema<ListAssessmentFrameworksRequest>,
  output: __S(139) as any as S.Schema<ListAssessmentFrameworksResponse>,
  errors: [AccessDeniedException, InternalServerException, ValidationException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListAssessmentFrameworks",
  pagination: {
    inputToken: "nextToken",
    outputToken: "nextToken",
    pageSize: "maxResults",
  } as const,
})) as any;

export type ListAssessmentFrameworkShareRequestsError =
  | AccessDeniedException
  | InternalServerException
  | ValidationException
  | CommonErrors;
/**
 * Returns a list of sent or received share requests for custom frameworks in Audit Manager.
 */
export const listAssessmentFrameworkShareRequests: API.PaginatedOperationMethod<
  ListAssessmentFrameworkShareRequestsRequest,
  ListAssessmentFrameworkShareRequestsResponse,
  ListAssessmentFrameworkShareRequestsError,
  Credentials | HttpClient.HttpClient,
  unknown
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: __S(140) as any as S.Schema<ListAssessmentFrameworkShareRequestsRequest>,
  output: __S(143) as any as S.Schema<ListAssessmentFrameworkShareRequestsResponse>,
  errors: [AccessDeniedException, InternalServerException, ValidationException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListAssessmentFrameworkShareRequests",
  pagination: {
    inputToken: "nextToken",
    outputToken: "nextToken",
    pageSize: "maxResults",
  } as const,
})) as any;

export type ListAssessmentReportsError =
  | AccessDeniedException
  | InternalServerException
  | ValidationException
  | CommonErrors;
/**
 * Returns a list of assessment reports created in Audit Manager.
 */
export const listAssessmentReports: API.PaginatedOperationMethod<
  ListAssessmentReportsRequest,
  ListAssessmentReportsResponse,
  ListAssessmentReportsError,
  Credentials | HttpClient.HttpClient,
  unknown
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: __S(144) as any as S.Schema<ListAssessmentReportsRequest>,
  output: __S(147) as any as S.Schema<ListAssessmentReportsResponse>,
  errors: [AccessDeniedException, InternalServerException, ValidationException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListAssessmentReports",
  pagination: {
    inputToken: "nextToken",
    outputToken: "nextToken",
    pageSize: "maxResults",
  } as const,
})) as any;

export type ListAssessmentsError =
  | AccessDeniedException
  | InternalServerException
  | ValidationException
  | CommonErrors;
/**
 * Returns a list of current and past assessments from Audit Manager.
 */
export const listAssessments: API.PaginatedOperationMethod<
  ListAssessmentsRequest,
  ListAssessmentsResponse,
  ListAssessmentsError,
  Credentials | HttpClient.HttpClient,
  unknown
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: __S(148) as any as S.Schema<ListAssessmentsRequest>,
  output: __S(151) as any as S.Schema<ListAssessmentsResponse>,
  errors: [AccessDeniedException, InternalServerException, ValidationException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListAssessments",
  pagination: {
    inputToken: "nextToken",
    outputToken: "nextToken",
    pageSize: "maxResults",
  } as const,
})) as any;

export type ListControlDomainInsightsError =
  | AccessDeniedException
  | InternalServerException
  | ResourceNotFoundException
  | ValidationException
  | CommonErrors;
/**
 * Lists the latest analytics data for control domains across all of your active
 * assessments.
 *
 * Audit Manager supports the control domains that are provided by Amazon Web Services
 * Control Catalog. For information about how to find a list of available control domains, see
 *
 * `ListDomains`
 * in the Amazon Web Services Control
 * Catalog API Reference.
 *
 * A control domain is listed only if at least one of the controls within that domain
 * collected evidence on the `lastUpdated` date of
 * `controlDomainInsights`. If this condition isn't met, no data is listed
 * for that control domain.
 */
export const listControlDomainInsights: API.PaginatedOperationMethod<
  ListControlDomainInsightsRequest,
  ListControlDomainInsightsResponse,
  ListControlDomainInsightsError,
  Credentials | HttpClient.HttpClient,
  unknown
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: __S(152) as any as S.Schema<ListControlDomainInsightsRequest>,
  output: __S(155) as any as S.Schema<ListControlDomainInsightsResponse>,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ResourceNotFoundException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListControlDomainInsights",
  pagination: {
    inputToken: "nextToken",
    outputToken: "nextToken",
    pageSize: "maxResults",
  } as const,
})) as any;

export type ListControlDomainInsightsByAssessmentError =
  | AccessDeniedException
  | InternalServerException
  | ResourceNotFoundException
  | ValidationException
  | CommonErrors;
/**
 * Lists analytics data for control domains within a specified active assessment.
 *
 * Audit Manager supports the control domains that are provided by Amazon Web Services
 * Control Catalog. For information about how to find a list of available control domains, see
 *
 * `ListDomains`
 * in the Amazon Web Services Control
 * Catalog API Reference.
 *
 * A control domain is listed only if at least one of the controls within that domain
 * collected evidence on the `lastUpdated` date of
 * `controlDomainInsights`. If this condition isn't met, no data is listed
 * for that domain.
 */
export const listControlDomainInsightsByAssessment: API.PaginatedOperationMethod<
  ListControlDomainInsightsByAssessmentRequest,
  ListControlDomainInsightsByAssessmentResponse,
  ListControlDomainInsightsByAssessmentError,
  Credentials | HttpClient.HttpClient,
  unknown
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: __S(156) as any as S.Schema<ListControlDomainInsightsByAssessmentRequest>,
  output: __S(155) as any as S.Schema<ListControlDomainInsightsByAssessmentResponse>,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ResourceNotFoundException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListControlDomainInsightsByAssessment",
  pagination: {
    inputToken: "nextToken",
    outputToken: "nextToken",
    pageSize: "maxResults",
  } as const,
})) as any;

export type ListControlInsightsByControlDomainError =
  | AccessDeniedException
  | InternalServerException
  | ResourceNotFoundException
  | ValidationException
  | CommonErrors;
/**
 * Lists the latest analytics data for controls within a specific control domain across all
 * active assessments.
 *
 * Control insights are listed only if the control belongs to the control domain that
 * was specified and the control collected evidence on the `lastUpdated` date of
 * `controlInsightsMetadata`. If neither of these conditions are met, no data
 * is listed for that control.
 */
export const listControlInsightsByControlDomain: API.PaginatedOperationMethod<
  ListControlInsightsByControlDomainRequest,
  ListControlInsightsByControlDomainResponse,
  ListControlInsightsByControlDomainError,
  Credentials | HttpClient.HttpClient,
  unknown
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: __S(157) as any as S.Schema<ListControlInsightsByControlDomainRequest>,
  output: __S(160) as any as S.Schema<ListControlInsightsByControlDomainResponse>,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ResourceNotFoundException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListControlInsightsByControlDomain",
  pagination: {
    inputToken: "nextToken",
    outputToken: "nextToken",
    pageSize: "maxResults",
  } as const,
})) as any;

export type ListControlsError =
  | AccessDeniedException
  | InternalServerException
  | ValidationException
  | CommonErrors;
/**
 * Returns a list of controls from Audit Manager.
 */
export const listControls: API.PaginatedOperationMethod<
  ListControlsRequest,
  ListControlsResponse,
  ListControlsError,
  Credentials | HttpClient.HttpClient,
  unknown
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: __S(161) as any as S.Schema<ListControlsRequest>,
  output: __S(164) as any as S.Schema<ListControlsResponse>,
  errors: [AccessDeniedException, InternalServerException, ValidationException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListControls",
  pagination: {
    inputToken: "nextToken",
    outputToken: "nextToken",
    pageSize: "maxResults",
  } as const,
})) as any;

export type ListKeywordsForDataSourceError =
  | AccessDeniedException
  | InternalServerException
  | ValidationException
  | CommonErrors;
/**
 * Returns a list of keywords that are pre-mapped to the specified control data
 * source.
 */
export const listKeywordsForDataSource: API.PaginatedOperationMethod<
  ListKeywordsForDataSourceRequest,
  ListKeywordsForDataSourceResponse,
  ListKeywordsForDataSourceError,
  Credentials | HttpClient.HttpClient,
  unknown
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: __S(165) as any as S.Schema<ListKeywordsForDataSourceRequest>,
  output: __S(166) as any as S.Schema<ListKeywordsForDataSourceResponse>,
  errors: [AccessDeniedException, InternalServerException, ValidationException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListKeywordsForDataSource",
  pagination: {
    inputToken: "nextToken",
    outputToken: "nextToken",
    pageSize: "maxResults",
  } as const,
})) as any;

export type ListNotificationsError =
  | AccessDeniedException
  | InternalServerException
  | ValidationException
  | CommonErrors;
/**
 * Returns a list of all Audit Manager notifications.
 */
export const listNotifications: API.PaginatedOperationMethod<
  ListNotificationsRequest,
  ListNotificationsResponse,
  ListNotificationsError,
  Credentials | HttpClient.HttpClient,
  unknown
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: __S(167) as any as S.Schema<ListNotificationsRequest>,
  output: __S(170) as any as S.Schema<ListNotificationsResponse>,
  errors: [AccessDeniedException, InternalServerException, ValidationException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListNotifications",
  pagination: {
    inputToken: "nextToken",
    outputToken: "nextToken",
    pageSize: "maxResults",
  } as const,
})) as any;

export type ListTagsForResourceError =
  | InternalServerException
  | ResourceNotFoundException
  | ValidationException
  | CommonErrors;
/**
 * Returns a list of tags for the specified resource in Audit Manager.
 */
export const listTagsForResource: API.OperationMethod<
  ListTagsForResourceRequest,
  ListTagsForResourceResponse,
  ListTagsForResourceError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(171) as any as S.Schema<ListTagsForResourceRequest>,
  output: __S(172) as any as S.Schema<ListTagsForResourceResponse>,
  errors: [InternalServerException, ResourceNotFoundException, ValidationException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListTagsForResource",
}));

export type RegisterAccountError =
  | AccessDeniedException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | AuditManagerMaintenanceMode
  | CommonErrors;
/**
 * Enables Audit Manager for the specified Amazon Web Services account.
 */
export const registerAccount: API.OperationMethod<
  RegisterAccountRequest,
  RegisterAccountResponse,
  RegisterAccountError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(173) as any as S.Schema<RegisterAccountRequest>,
  output: __S(79) as any as S.Schema<RegisterAccountResponse>,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
    AuditManagerMaintenanceMode,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "RegisterAccount",
}));

export type RegisterOrganizationAdminAccountError =
  | AccessDeniedException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Enables an Amazon Web Services account within the organization as the delegated
 * administrator for Audit Manager.
 */
export const registerOrganizationAdminAccount: API.OperationMethod<
  RegisterOrganizationAdminAccountRequest,
  RegisterOrganizationAdminAccountResponse,
  RegisterOrganizationAdminAccountError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(174) as any as S.Schema<RegisterOrganizationAdminAccountRequest>,
  output: __S(120) as any as S.Schema<RegisterOrganizationAdminAccountResponse>,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "RegisterOrganizationAdminAccount",
}));

export type StartAssessmentFrameworkShareError =
  | AccessDeniedException
  | InternalServerException
  | ResourceNotFoundException
  | ValidationException
  | CommonErrors;
/**
 * Creates a share request for a custom framework in Audit Manager.
 *
 * The share request specifies a recipient and notifies them that a custom framework is
 * available. Recipients have 120 days to accept or decline the request. If no action is
 * taken, the share request expires.
 *
 * When you create a share request, Audit Manager stores a snapshot of your custom
 * framework in the US East (N. Virginia) Amazon Web Services Region. Audit Manager also
 * stores a backup of the same snapshot in the US West (Oregon) Amazon Web Services Region.
 *
 * Audit Manager deletes the snapshot and the backup snapshot when one of the following
 * events occurs:
 *
 * - The sender revokes the share request.
 *
 * - The recipient declines the share request.
 *
 * - The recipient encounters an error and doesn't successfully accept the share
 * request.
 *
 * - The share request expires before the recipient responds to the request.
 *
 * When a sender resends a share request, the snapshot is replaced with an updated version that
 * corresponds with the latest version of the custom framework.
 *
 * When a recipient accepts a share request, the snapshot is replicated into their Amazon Web Services account under the Amazon Web Services Region that was specified in the share
 * request.
 *
 * When you invoke the `StartAssessmentFrameworkShare` API, you are about to
 * share a custom framework with another Amazon Web Services account. You may not share a
 * custom framework that is derived from a standard framework if the standard framework is
 * designated as not eligible for sharing by Amazon Web Services, unless you have obtained
 * permission to do so from the owner of the standard framework. To learn more about which
 * standard frameworks are eligible for sharing, see Framework sharing eligibility in the Audit Manager User
 * Guide.
 */
export const startAssessmentFrameworkShare: API.OperationMethod<
  StartAssessmentFrameworkShareRequest,
  StartAssessmentFrameworkShareResponse,
  StartAssessmentFrameworkShareError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(175) as any as S.Schema<StartAssessmentFrameworkShareRequest>,
  output: __S(176) as any as S.Schema<StartAssessmentFrameworkShareResponse>,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ResourceNotFoundException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "StartAssessmentFrameworkShare",
}));

export type TagResourceError =
  | InternalServerException
  | ResourceNotFoundException
  | ValidationException
  | CommonErrors;
/**
 * Tags the specified resource in Audit Manager.
 */
export const tagResource: API.OperationMethod<
  TagResourceRequest,
  TagResourceResponse,
  TagResourceError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(177) as any as S.Schema<TagResourceRequest>,
  output: __S(69) as any as S.Schema<TagResourceResponse>,
  errors: [InternalServerException, ResourceNotFoundException, ValidationException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "TagResource",
}));

export type UntagResourceError =
  | InternalServerException
  | ResourceNotFoundException
  | ValidationException
  | CommonErrors;
/**
 * Removes a tag from a resource in Audit Manager.
 */
export const untagResource: API.OperationMethod<
  UntagResourceRequest,
  UntagResourceResponse,
  UntagResourceError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(178) as any as S.Schema<UntagResourceRequest>,
  output: __S(69) as any as S.Schema<UntagResourceResponse>,
  errors: [InternalServerException, ResourceNotFoundException, ValidationException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "UntagResource",
}));

export type UpdateAssessmentError =
  | AccessDeniedException
  | InternalServerException
  | ResourceNotFoundException
  | ServiceQuotaExceededException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Edits an Audit Manager assessment.
 */
export const updateAssessment: API.OperationMethod<
  UpdateAssessmentRequest,
  UpdateAssessmentResponse,
  UpdateAssessmentError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(179) as any as S.Schema<UpdateAssessmentRequest>,
  output: __S(46) as any as S.Schema<UpdateAssessmentResponse>,
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
  operationName: "UpdateAssessment",
}));

export type UpdateAssessmentControlError =
  | AccessDeniedException
  | InternalServerException
  | ResourceNotFoundException
  | ValidationException
  | CommonErrors;
/**
 * Updates a control within an assessment in Audit Manager.
 */
export const updateAssessmentControl: API.OperationMethod<
  UpdateAssessmentControlRequest,
  UpdateAssessmentControlResponse,
  UpdateAssessmentControlError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(180) as any as S.Schema<UpdateAssessmentControlRequest>,
  output: __S(181) as any as S.Schema<UpdateAssessmentControlResponse>,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ResourceNotFoundException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "UpdateAssessmentControl",
}));

export type UpdateAssessmentControlSetStatusError =
  | AccessDeniedException
  | InternalServerException
  | ResourceNotFoundException
  | ValidationException
  | CommonErrors;
/**
 * Updates the status of a control set in an Audit Manager assessment.
 */
export const updateAssessmentControlSetStatus: API.OperationMethod<
  UpdateAssessmentControlSetStatusRequest,
  UpdateAssessmentControlSetStatusResponse,
  UpdateAssessmentControlSetStatusError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(182) as any as S.Schema<UpdateAssessmentControlSetStatusRequest>,
  output: __S(183) as any as S.Schema<UpdateAssessmentControlSetStatusResponse>,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ResourceNotFoundException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "UpdateAssessmentControlSetStatus",
}));

export type UpdateAssessmentFrameworkError =
  | AccessDeniedException
  | InternalServerException
  | ResourceNotFoundException
  | ServiceQuotaExceededException
  | ValidationException
  | CommonErrors;
/**
 * Updates a custom framework in Audit Manager.
 */
export const updateAssessmentFramework: API.OperationMethod<
  UpdateAssessmentFrameworkRequest,
  UpdateAssessmentFrameworkResponse,
  UpdateAssessmentFrameworkError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(186) as any as S.Schema<UpdateAssessmentFrameworkRequest>,
  output: __S(60) as any as S.Schema<UpdateAssessmentFrameworkResponse>,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ResourceNotFoundException,
    ServiceQuotaExceededException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "UpdateAssessmentFramework",
}));

export type UpdateAssessmentFrameworkShareError =
  | AccessDeniedException
  | InternalServerException
  | ResourceNotFoundException
  | ServiceQuotaExceededException
  | ValidationException
  | CommonErrors;
/**
 * Updates a share request for a custom framework in Audit Manager.
 */
export const updateAssessmentFrameworkShare: API.OperationMethod<
  UpdateAssessmentFrameworkShareRequest,
  UpdateAssessmentFrameworkShareResponse,
  UpdateAssessmentFrameworkShareError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(187) as any as S.Schema<UpdateAssessmentFrameworkShareRequest>,
  output: __S(176) as any as S.Schema<UpdateAssessmentFrameworkShareResponse>,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ResourceNotFoundException,
    ServiceQuotaExceededException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "UpdateAssessmentFrameworkShare",
}));

export type UpdateAssessmentStatusError =
  | AccessDeniedException
  | InternalServerException
  | ResourceNotFoundException
  | ServiceQuotaExceededException
  | ValidationException
  | CommonErrors;
/**
 * Updates the status of an assessment in Audit Manager.
 */
export const updateAssessmentStatus: API.OperationMethod<
  UpdateAssessmentStatusRequest,
  UpdateAssessmentStatusResponse,
  UpdateAssessmentStatusError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(188) as any as S.Schema<UpdateAssessmentStatusRequest>,
  output: __S(189) as any as S.Schema<UpdateAssessmentStatusResponse>,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ResourceNotFoundException,
    ServiceQuotaExceededException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "UpdateAssessmentStatus",
}));

export type UpdateControlError =
  | AccessDeniedException
  | InternalServerException
  | ResourceNotFoundException
  | ValidationException
  | CommonErrors;
/**
 * Updates a custom control in Audit Manager.
 */
export const updateControl: API.OperationMethod<
  UpdateControlRequest,
  UpdateControlResponse,
  UpdateControlError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(190) as any as S.Schema<UpdateControlRequest>,
  output: __S(67) as any as S.Schema<UpdateControlResponse>,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ResourceNotFoundException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "UpdateControl",
}));

export type UpdateSettingsError =
  | AccessDeniedException
  | InternalServerException
  | ValidationException
  | CommonErrors;
/**
 * Updates Audit Manager settings for the current account.
 */
export const updateSettings: API.OperationMethod<
  UpdateSettingsRequest,
  UpdateSettingsResponse,
  UpdateSettingsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(191) as any as S.Schema<UpdateSettingsRequest>,
  output: __S(130) as any as S.Schema<UpdateSettingsResponse>,
  errors: [AccessDeniedException, InternalServerException, ValidationException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "UpdateSettings",
}));

export type ValidateAssessmentReportIntegrityError =
  | AccessDeniedException
  | InternalServerException
  | ResourceNotFoundException
  | ValidationException
  | CommonErrors;
/**
 * Validates the integrity of an assessment report in Audit Manager.
 */
export const validateAssessmentReportIntegrity: API.OperationMethod<
  ValidateAssessmentReportIntegrityRequest,
  ValidateAssessmentReportIntegrityResponse,
  ValidateAssessmentReportIntegrityError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(192) as any as S.Schema<ValidateAssessmentReportIntegrityRequest>,
  output: __S(193) as any as S.Schema<ValidateAssessmentReportIntegrityResponse>,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ResourceNotFoundException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ValidateAssessmentReportIntegrity",
}));

// Schema builders: each runs one schema initializer, on that schema's first use.
function __c0(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          assessmentId: S.String.pipe(T.HttpLabel("assessmentId")),
          evidenceFolderId: S.String,
        }).pipe(
          T.all(
            T.Http({
              method: "PUT",
              uri: "/assessments/{assessmentId}/associateToAssessmentReport",
            }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "AssociateAssessmentReportEvidenceFolderRequest",
      });
    case 1:
      return S.suspend(() => S.Struct({})).annotate({
        identifier: "AssociateAssessmentReportEvidenceFolderResponse",
      });
    case 2:
      return S.Array(S.String);
    case 3:
      return S.suspend(() =>
        S.Struct({
          assessmentId: S.String.pipe(T.HttpLabel("assessmentId")),
          evidenceFolderId: S.String,
          evidenceIds: __S(2),
        }).pipe(
          T.all(
            T.Http({
              method: "PUT",
              uri: "/assessments/{assessmentId}/batchAssociateToAssessmentReport",
            }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "BatchAssociateAssessmentReportEvidenceRequest",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({
          evidenceId: S.optional(S.String),
          errorCode: S.optional(S.String),
          errorMessage: S.optional(S.String),
        }),
      ).annotate({
        identifier: "AssessmentReportEvidenceError",
      });
    case 5:
      return S.Array(__S(4));
    case 6:
      return S.suspend(() =>
        S.Struct({
          evidenceIds: S.optional(__S(2)),
          errors: S.optional(__S(5)),
        }),
      ).annotate({
        identifier: "BatchAssociateAssessmentReportEvidenceResponse",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({
          comment: S.optional(SensitiveString),
          controlSetId: S.optional(S.String),
          roleArn: S.optional(S.String),
          roleType: S.optional(S.String),
        }),
      ).annotate({ identifier: "CreateDelegationRequest" });
  }
}
function __c1(j: number): any {
  switch (j) {
    case 0:
      return S.Array(__S(7));
    case 1:
      return S.suspend(() =>
        S.Struct({
          createDelegationRequests: __S(8),
          assessmentId: S.String.pipe(T.HttpLabel("assessmentId")),
        }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/assessments/{assessmentId}/delegations" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "BatchCreateDelegationByAssessmentRequest",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({
          id: S.optional(S.String),
          assessmentName: S.optional(SensitiveString),
          assessmentId: S.optional(S.String),
          status: S.optional(S.String),
          roleArn: S.optional(S.String),
          roleType: S.optional(S.String),
          creationTime: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          lastUpdated: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          controlSetId: S.optional(S.String),
          comment: S.optional(SensitiveString),
          createdBy: S.optional(SensitiveString),
        }),
      ).annotate({ identifier: "Delegation" });
    case 3:
      return S.Array(__S(10));
    case 4:
      return S.suspend(() =>
        S.Struct({
          createDelegationRequest: S.optional(__S(7)),
          errorCode: S.optional(S.String),
          errorMessage: S.optional(S.String),
        }),
      ).annotate({
        identifier: "BatchCreateDelegationByAssessmentError",
      });
    case 5:
      return S.Array(__S(12));
    case 6:
      return S.suspend(() =>
        S.Struct({
          delegations: S.optional(__S(11)),
          errors: S.optional(__S(13)),
        }),
      ).annotate({
        identifier: "BatchCreateDelegationByAssessmentResponse",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({
          delegationIds: __S(2),
          assessmentId: S.String.pipe(T.HttpLabel("assessmentId")),
        }).pipe(
          T.all(
            T.Http({ method: "PUT", uri: "/assessments/{assessmentId}/delegations" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "BatchDeleteDelegationByAssessmentRequest",
      });
  }
}
function __c2(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          delegationId: S.optional(S.String),
          errorCode: S.optional(S.String),
          errorMessage: S.optional(S.String),
        }),
      ).annotate({
        identifier: "BatchDeleteDelegationByAssessmentError",
      });
    case 1:
      return S.Array(__S(16));
    case 2:
      return S.suspend(() => S.Struct({ errors: S.optional(__S(17)) })).annotate({
        identifier: "BatchDeleteDelegationByAssessmentResponse",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({
          assessmentId: S.String.pipe(T.HttpLabel("assessmentId")),
          evidenceFolderId: S.String,
          evidenceIds: __S(2),
        }).pipe(
          T.all(
            T.Http({
              method: "PUT",
              uri: "/assessments/{assessmentId}/batchDisassociateFromAssessmentReport",
            }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "BatchDisassociateAssessmentReportEvidenceRequest",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({
          s3ResourcePath: S.optional(S.String),
          textResponse: S.optional(SensitiveString),
          evidenceFileName: S.optional(SensitiveString),
        }),
      ).annotate({ identifier: "ManualEvidence" });
    case 5:
      return S.Array(__S(20));
    case 6:
      return S.suspend(() =>
        S.Struct({
          assessmentId: S.String.pipe(T.HttpLabel("assessmentId")),
          controlSetId: S.String.pipe(T.HttpLabel("controlSetId")),
          controlId: S.String.pipe(T.HttpLabel("controlId")),
          manualEvidence: __S(21),
        }).pipe(
          T.all(
            T.Http({
              method: "POST",
              uri: "/assessments/{assessmentId}/controlSets/{controlSetId}/controls/{controlId}/evidence",
            }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "BatchImportEvidenceToAssessmentControlRequest",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({
          manualEvidence: S.optional(__S(20)),
          errorCode: S.optional(S.String),
          errorMessage: S.optional(S.String),
        }),
      ).annotate({
        identifier: "BatchImportEvidenceToAssessmentControlError",
      });
  }
}
function __c3(j: number): any {
  switch (j) {
    case 0:
      return S.Array(__S(23));
    case 1:
      return S.suspend(() => S.Struct({ errors: S.optional(__S(24)) })).annotate({
        identifier: "BatchImportEvidenceToAssessmentControlResponse",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({
          destinationType: S.optional(S.String),
          destination: S.optional(S.String),
        }),
      ).annotate({
        identifier: "AssessmentReportsDestination",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({
          id: S.optional(S.String),
          emailAddress: S.optional(SensitiveString),
          name: S.optional(S.String),
        }),
      ).annotate({ identifier: "AWSAccount" });
    case 4:
      return S.Array(__S(27));
    case 5:
      return S.suspend(() => S.Struct({ serviceName: S.optional(S.String) })).annotate({
        identifier: "AWSService",
      });
    case 6:
      return S.Array(__S(29));
    case 7:
      return S.suspend(() =>
        S.Struct({ awsAccounts: S.optional(__S(28)), awsServices: S.optional(__S(30)) }),
      ).annotate({ identifier: "Scope" });
  }
}
function __c4(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() => S.Struct({ roleType: S.String, roleArn: S.String })).annotate({
        identifier: "Role",
      });
    case 1:
      return S.Array(__S(32));
    case 2:
      return S.Record(S.String, /*@__PURE__*/ S.String.pipe(S.optional));
    case 3:
      return S.suspend(() =>
        S.Struct({
          name: SensitiveString,
          description: S.optional(SensitiveString),
          assessmentReportsDestination: __S(26),
          scope: __S(31),
          roles: __S(33),
          frameworkId: S.String,
          tags: S.optional(__S(34)),
        }).pipe(
          T.all(T.Http({ method: "POST", uri: "/assessments" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({ identifier: "CreateAssessmentRequest" });
    case 4:
      return S.suspend(() =>
        S.Struct({
          name: S.optional(SensitiveString),
          id: S.optional(S.String),
          description: S.optional(SensitiveString),
          complianceType: S.optional(SensitiveString),
          status: S.optional(S.String),
          assessmentReportsDestination: S.optional(__S(26)),
          scope: S.optional(__S(31)),
          roles: S.optional(__S(33)),
          delegations: S.optional(__S(11)),
          creationTime: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          lastUpdated: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
        }),
      ).annotate({ identifier: "AssessmentMetadata" });
    case 5:
      return S.suspend(() =>
        S.Struct({
          name: S.optional(SensitiveString),
          description: S.optional(S.String),
          logo: S.optional(S.String),
          complianceType: S.optional(SensitiveString),
        }),
      ).annotate({ identifier: "FrameworkMetadata" });
    case 6:
      return S.suspend(() =>
        S.Struct({
          authorName: S.optional(SensitiveString),
          commentBody: S.optional(SensitiveString),
          postedDate: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
        }),
      ).annotate({ identifier: "ControlComment" });
    case 7:
      return S.Array(__S(38));
  }
}
function __c5(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          id: S.optional(S.String),
          name: S.optional(S.String),
          description: S.optional(SensitiveString),
          status: S.optional(S.String),
          response: S.optional(S.String),
          comments: S.optional(__S(39)),
          evidenceSources: S.optional(__S(2)),
          evidenceCount: S.optional(S.Number),
          assessmentReportEvidenceCount: S.optional(S.Number),
        }),
      ).annotate({ identifier: "AssessmentControl" });
    case 1:
      return S.Array(__S(40));
    case 2:
      return S.suspend(() =>
        S.Struct({
          id: S.optional(S.String),
          description: S.optional(S.String),
          status: S.optional(S.String),
          roles: S.optional(__S(33)),
          controls: S.optional(__S(41)),
          delegations: S.optional(__S(11)),
          systemEvidenceCount: S.optional(S.Number),
          manualEvidenceCount: S.optional(S.Number),
        }),
      ).annotate({ identifier: "AssessmentControlSet" });
    case 3:
      return S.Array(__S(42));
    case 4:
      return S.suspend(() =>
        S.Struct({
          id: S.optional(S.String),
          arn: S.optional(S.String),
          metadata: S.optional(__S(37)),
          controlSets: S.optional(__S(43)),
        }),
      ).annotate({ identifier: "AssessmentFramework" });
    case 5:
      return S.suspend(() =>
        S.Struct({
          arn: S.optional(S.String),
          awsAccount: S.optional(__S(27)),
          metadata: S.optional(__S(36)),
          framework: S.optional(__S(44)),
          tags: S.optional(__S(34)),
        }),
      ).annotate({ identifier: "Assessment" });
    case 6:
      return S.suspend(() => S.Struct({ assessment: S.optional(__S(45)) })).annotate({
        identifier: "CreateAssessmentResponse",
      });
    case 7:
      return S.suspend(() => S.Struct({ id: S.String })).annotate({
        identifier: "CreateAssessmentFrameworkControl",
      });
  }
}
function __c6(j: number): any {
  switch (j) {
    case 0:
      return S.Array(__S(47));
    case 1:
      return S.suspend(() => S.Struct({ name: S.String, controls: S.optional(__S(48)) })).annotate({
        identifier: "CreateAssessmentFrameworkControlSet",
      });
    case 2:
      return S.Array(__S(49));
    case 3:
      return S.suspend(() =>
        S.Struct({
          name: S.String,
          description: S.optional(S.String),
          complianceType: S.optional(SensitiveString),
          controlSets: __S(50),
          tags: S.optional(__S(34)),
        }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/assessmentFrameworks" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "CreateAssessmentFrameworkRequest",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({
          keywordInputType: S.optional(S.String),
          keywordValue: S.optional(S.String),
        }),
      ).annotate({ identifier: "SourceKeyword" });
    case 5:
      return S.suspend(() =>
        S.Struct({
          sourceId: S.optional(S.String),
          sourceName: S.optional(S.String),
          sourceDescription: S.optional(S.String),
          sourceSetUpOption: S.optional(S.String),
          sourceType: S.optional(S.String),
          sourceKeyword: S.optional(__S(52)),
          sourceFrequency: S.optional(S.String),
          troubleshootingText: S.optional(SensitiveString),
        }),
      ).annotate({ identifier: "ControlMappingSource" });
    case 6:
      return S.Array(__S(53));
    case 7:
      return S.suspend(() =>
        S.Struct({
          arn: S.optional(S.String),
          id: S.optional(S.String),
          type: S.optional(S.String),
          name: S.optional(S.String),
          description: S.optional(SensitiveString),
          testingInformation: S.optional(SensitiveString),
          actionPlanTitle: S.optional(SensitiveString),
          actionPlanInstructions: S.optional(SensitiveString),
          controlSources: S.optional(S.String),
          controlMappingSources: S.optional(__S(54)),
          createdAt: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          lastUpdatedAt: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          createdBy: S.optional(SensitiveString),
          lastUpdatedBy: S.optional(SensitiveString),
          tags: S.optional(__S(34)),
          state: S.optional(S.String),
        }),
      ).annotate({ identifier: "Control" });
  }
}
function __c7(j: number): any {
  switch (j) {
    case 0:
      return S.Array(__S(55));
    case 1:
      return S.suspend(() =>
        S.Struct({
          id: S.optional(S.String),
          name: S.optional(S.String),
          controls: S.optional(__S(56)),
        }),
      ).annotate({ identifier: "ControlSet" });
    case 2:
      return S.Array(__S(57));
    case 3:
      return S.suspend(() =>
        S.Struct({
          arn: S.optional(S.String),
          id: S.optional(S.String),
          name: S.optional(S.String),
          type: S.optional(S.String),
          complianceType: S.optional(SensitiveString),
          description: S.optional(S.String),
          logo: S.optional(S.String),
          controlSources: S.optional(S.String),
          controlSets: S.optional(__S(58)),
          createdAt: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          lastUpdatedAt: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          createdBy: S.optional(SensitiveString),
          lastUpdatedBy: S.optional(SensitiveString),
          tags: S.optional(__S(34)),
        }),
      ).annotate({ identifier: "Framework" });
    case 4:
      return S.suspend(() => S.Struct({ framework: S.optional(__S(59)) })).annotate({
        identifier: "CreateAssessmentFrameworkResponse",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({
          name: S.String,
          description: S.optional(SensitiveString),
          assessmentId: S.String.pipe(T.HttpLabel("assessmentId")),
          queryStatement: S.optional(S.String),
        }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/assessments/{assessmentId}/reports" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "CreateAssessmentReportRequest",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({
          id: S.optional(S.String),
          name: S.optional(S.String),
          description: S.optional(SensitiveString),
          awsAccountId: S.optional(S.String),
          assessmentId: S.optional(S.String),
          assessmentName: S.optional(SensitiveString),
          author: S.optional(SensitiveString),
          status: S.optional(S.String),
          creationTime: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
        }),
      ).annotate({ identifier: "AssessmentReport" });
    case 7:
      return S.suspend(() => S.Struct({ assessmentReport: S.optional(__S(62)) })).annotate({
        identifier: "CreateAssessmentReportResponse",
      });
  }
}
function __c8(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          sourceName: S.optional(S.String),
          sourceDescription: S.optional(S.String),
          sourceSetUpOption: S.optional(S.String),
          sourceType: S.optional(S.String),
          sourceKeyword: S.optional(__S(52)),
          sourceFrequency: S.optional(S.String),
          troubleshootingText: S.optional(SensitiveString),
        }),
      ).annotate({
        identifier: "CreateControlMappingSource",
      });
    case 1:
      return S.Array(__S(64));
    case 2:
      return S.suspend(() =>
        S.Struct({
          name: S.String,
          description: S.optional(SensitiveString),
          testingInformation: S.optional(SensitiveString),
          actionPlanTitle: S.optional(SensitiveString),
          actionPlanInstructions: S.optional(SensitiveString),
          controlMappingSources: __S(65),
          tags: S.optional(__S(34)),
        }).pipe(T.all(T.Http({ method: "POST", uri: "/controls" }), svc, auth, proto, ver, rules)),
      ).annotate({ identifier: "CreateControlRequest" });
    case 3:
      return S.suspend(() => S.Struct({ control: S.optional(__S(55)) })).annotate({
        identifier: "CreateControlResponse",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({ assessmentId: S.String.pipe(T.HttpLabel("assessmentId")) }).pipe(
          T.all(
            T.Http({ method: "DELETE", uri: "/assessments/{assessmentId}" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "DeleteAssessmentRequest" });
    case 5:
      return S.suspend(() => S.Struct({})).annotate({
        identifier: "DeleteAssessmentResponse",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({ frameworkId: S.String.pipe(T.HttpLabel("frameworkId")) }).pipe(
          T.all(
            T.Http({ method: "DELETE", uri: "/assessmentFrameworks/{frameworkId}" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "DeleteAssessmentFrameworkRequest",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({
          requestId: S.String.pipe(T.HttpLabel("requestId")),
          requestType: S.String.pipe(T.HttpQuery("requestType")),
        }).pipe(
          T.all(
            T.Http({ method: "DELETE", uri: "/assessmentFrameworkShareRequests/{requestId}" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "DeleteAssessmentFrameworkShareRequest",
      });
  }
}
function __c9(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          assessmentId: S.String.pipe(T.HttpLabel("assessmentId")),
          assessmentReportId: S.String.pipe(T.HttpLabel("assessmentReportId")),
        }).pipe(
          T.all(
            T.Http({
              method: "DELETE",
              uri: "/assessments/{assessmentId}/reports/{assessmentReportId}",
            }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "DeleteAssessmentReportRequest",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({ controlId: S.String.pipe(T.HttpLabel("controlId")) }).pipe(
          T.all(
            T.Http({ method: "DELETE", uri: "/controls/{controlId}" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "DeleteControlRequest" });
    case 2:
      return S.suspend(() =>
        S.Struct({}).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/account/deregisterAccount" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "DeregisterAccountRequest" });
    case 3:
      return S.suspend(() => S.Struct({ status: S.optional(S.String) })).annotate({
        identifier: "DeregisterAccountResponse",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({ adminAccountId: S.optional(S.String) }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/account/deregisterOrganizationAdminAccount" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "DeregisterOrganizationAdminAccountRequest",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({
          assessmentId: S.String.pipe(T.HttpLabel("assessmentId")),
          evidenceFolderId: S.String,
        }).pipe(
          T.all(
            T.Http({
              method: "PUT",
              uri: "/assessments/{assessmentId}/disassociateFromAssessmentReport",
            }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "DisassociateAssessmentReportEvidenceFolderRequest",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({}).pipe(
          T.all(T.Http({ method: "GET", uri: "/account/status" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({ identifier: "GetAccountStatusRequest" });
    case 7:
      return S.suspend(() => S.Struct({ status: S.optional(S.String) })).annotate({
        identifier: "GetAccountStatusResponse",
      });
  }
}
function __c10(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({ assessmentId: S.String.pipe(T.HttpLabel("assessmentId")) }).pipe(
          T.all(
            T.Http({ method: "GET", uri: "/assessments/{assessmentId}" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "GetAssessmentRequest" });
    case 1:
      return S.suspend(() =>
        S.Struct({ assessment: S.optional(__S(45)), userRole: S.optional(__S(32)) }),
      ).annotate({ identifier: "GetAssessmentResponse" });
    case 2:
      return S.suspend(() =>
        S.Struct({ frameworkId: S.String.pipe(T.HttpLabel("frameworkId")) }).pipe(
          T.all(
            T.Http({ method: "GET", uri: "/assessmentFrameworks/{frameworkId}" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "GetAssessmentFrameworkRequest",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({
          assessmentReportId: S.String.pipe(T.HttpLabel("assessmentReportId")),
          assessmentId: S.String.pipe(T.HttpLabel("assessmentId")),
        }).pipe(
          T.all(
            T.Http({
              method: "GET",
              uri: "/assessments/{assessmentId}/reports/{assessmentReportId}/url",
            }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "GetAssessmentReportUrlRequest",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({ hyperlinkName: S.optional(S.String), link: S.optional(S.String) }),
      ).annotate({ identifier: "URL" });
    case 5:
      return S.suspend(() => S.Struct({ preSignedUrl: S.optional(__S(84)) })).annotate({
        identifier: "GetAssessmentReportUrlResponse",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({
          assessmentId: S.String.pipe(T.HttpLabel("assessmentId")),
          controlSetId: S.optional(S.String).pipe(T.HttpQuery("controlSetId")),
          controlId: S.optional(S.String).pipe(T.HttpQuery("controlId")),
          nextToken: S.optional(S.String).pipe(T.HttpQuery("nextToken")),
          maxResults: S.optional(S.Number).pipe(T.HttpQuery("maxResults")),
        }).pipe(
          T.all(
            T.Http({ method: "GET", uri: "/assessments/{assessmentId}/changelogs" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "GetChangeLogsRequest" });
    case 7:
      return S.suspend(() =>
        S.Struct({
          objectType: S.optional(S.String),
          objectName: S.optional(S.String),
          action: S.optional(S.String),
          createdAt: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          createdBy: S.optional(S.String),
        }),
      ).annotate({ identifier: "ChangeLog" });
  }
}
function __c11(j: number): any {
  switch (j) {
    case 0:
      return S.Array(__S(87));
    case 1:
      return S.suspend(() =>
        S.Struct({ changeLogs: S.optional(__S(88)), nextToken: S.optional(S.String) }),
      ).annotate({ identifier: "GetChangeLogsResponse" });
    case 2:
      return S.suspend(() =>
        S.Struct({ controlId: S.String.pipe(T.HttpLabel("controlId")) }).pipe(
          T.all(
            T.Http({ method: "GET", uri: "/controls/{controlId}" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "GetControlRequest" });
    case 3:
      return S.suspend(() =>
        S.Struct({
          nextToken: S.optional(S.String).pipe(T.HttpQuery("nextToken")),
          maxResults: S.optional(S.Number).pipe(T.HttpQuery("maxResults")),
        }).pipe(
          T.all(T.Http({ method: "GET", uri: "/delegations" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({ identifier: "GetDelegationsRequest" });
    case 4:
      return S.suspend(() =>
        S.Struct({
          id: S.optional(S.String),
          assessmentName: S.optional(SensitiveString),
          assessmentId: S.optional(S.String),
          status: S.optional(S.String),
          roleArn: S.optional(S.String),
          creationTime: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          controlSetName: S.optional(S.String),
        }),
      ).annotate({ identifier: "DelegationMetadata" });
    case 5:
      return S.Array(__S(92));
    case 6:
      return S.suspend(() =>
        S.Struct({
          delegations: S.optional(__S(93)),
          nextToken: S.optional(S.String),
        }),
      ).annotate({ identifier: "GetDelegationsResponse" });
    case 7:
      return S.suspend(() =>
        S.Struct({
          assessmentId: S.String.pipe(T.HttpLabel("assessmentId")),
          controlSetId: S.String.pipe(T.HttpLabel("controlSetId")),
          evidenceFolderId: S.String.pipe(T.HttpLabel("evidenceFolderId")),
          evidenceId: S.String.pipe(T.HttpLabel("evidenceId")),
        }).pipe(
          T.all(
            T.Http({
              method: "GET",
              uri: "/assessments/{assessmentId}/controlSets/{controlSetId}/evidenceFolders/{evidenceFolderId}/evidence/{evidenceId}",
            }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "GetEvidenceRequest" });
  }
}
function __c12(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          arn: S.optional(S.String),
          value: S.optional(S.String),
          complianceCheck: S.optional(S.String),
        }),
      ).annotate({ identifier: "Resource" });
    case 1:
      return S.Array(__S(96));
    case 2:
      return S.Record(S.String, /*@__PURE__*/ S.String.pipe(S.optional));
    case 3:
      return S.suspend(() =>
        S.Struct({
          dataSource: S.optional(S.String),
          evidenceAwsAccountId: S.optional(S.String),
          time: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          eventSource: S.optional(S.String),
          eventName: S.optional(S.String),
          evidenceByType: S.optional(S.String),
          resourcesIncluded: S.optional(__S(97)),
          attributes: S.optional(__S(98)),
          iamId: S.optional(S.String),
          complianceCheck: S.optional(S.String),
          awsOrganization: S.optional(S.String),
          awsAccountId: S.optional(S.String),
          evidenceFolderId: S.optional(S.String),
          id: S.optional(S.String),
          assessmentReportSelection: S.optional(S.String),
        }),
      ).annotate({ identifier: "Evidence" });
    case 4:
      return S.suspend(() => S.Struct({ evidence: S.optional(__S(99)) })).annotate({
        identifier: "GetEvidenceResponse",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({
          assessmentId: S.String.pipe(T.HttpLabel("assessmentId")),
          controlSetId: S.String.pipe(T.HttpLabel("controlSetId")),
          evidenceFolderId: S.String.pipe(T.HttpLabel("evidenceFolderId")),
          nextToken: S.optional(S.String).pipe(T.HttpQuery("nextToken")),
          maxResults: S.optional(S.Number).pipe(T.HttpQuery("maxResults")),
        }).pipe(
          T.all(
            T.Http({
              method: "GET",
              uri: "/assessments/{assessmentId}/controlSets/{controlSetId}/evidenceFolders/{evidenceFolderId}/evidence",
            }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "GetEvidenceByEvidenceFolderRequest",
      });
    case 6:
      return S.Array(__S(99));
    case 7:
      return S.suspend(() =>
        S.Struct({ evidence: S.optional(__S(102)), nextToken: S.optional(S.String) }),
      ).annotate({
        identifier: "GetEvidenceByEvidenceFolderResponse",
      });
  }
}
function __c13(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({ fileName: SensitiveString.pipe(T.HttpQuery("fileName")) }).pipe(
          T.all(
            T.Http({ method: "GET", uri: "/evidenceFileUploadUrl" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "GetEvidenceFileUploadUrlRequest",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({ evidenceFileName: S.optional(S.String), uploadUrl: S.optional(S.String) }),
      ).annotate({
        identifier: "GetEvidenceFileUploadUrlResponse",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({
          assessmentId: S.String.pipe(T.HttpLabel("assessmentId")),
          controlSetId: S.String.pipe(T.HttpLabel("controlSetId")),
          evidenceFolderId: S.String.pipe(T.HttpLabel("evidenceFolderId")),
        }).pipe(
          T.all(
            T.Http({
              method: "GET",
              uri: "/assessments/{assessmentId}/controlSets/{controlSetId}/evidenceFolders/{evidenceFolderId}",
            }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "GetEvidenceFolderRequest" });
    case 3:
      return S.suspend(() =>
        S.Struct({
          name: S.optional(S.String),
          date: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          assessmentId: S.optional(S.String),
          controlSetId: S.optional(S.String),
          controlId: S.optional(S.String),
          id: S.optional(S.String),
          dataSource: S.optional(S.String),
          author: S.optional(S.String),
          totalEvidence: S.optional(S.Number),
          assessmentReportSelectionCount: S.optional(S.Number),
          controlName: S.optional(S.String),
          evidenceResourcesIncludedCount: S.optional(S.Number),
          evidenceByTypeConfigurationDataCount: S.optional(S.Number),
          evidenceByTypeManualCount: S.optional(S.Number),
          evidenceByTypeComplianceCheckCount: S.optional(S.Number),
          evidenceByTypeComplianceCheckIssuesCount: S.optional(S.Number),
          evidenceByTypeUserActivityCount: S.optional(S.Number),
          evidenceAwsServiceSourceCount: S.optional(S.Number),
        }),
      ).annotate({ identifier: "AssessmentEvidenceFolder" });
    case 4:
      return S.suspend(() => S.Struct({ evidenceFolder: S.optional(__S(107)) })).annotate({
        identifier: "GetEvidenceFolderResponse",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({
          assessmentId: S.String.pipe(T.HttpLabel("assessmentId")),
          nextToken: S.optional(S.String).pipe(T.HttpQuery("nextToken")),
          maxResults: S.optional(S.Number).pipe(T.HttpQuery("maxResults")),
        }).pipe(
          T.all(
            T.Http({ method: "GET", uri: "/assessments/{assessmentId}/evidenceFolders" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "GetEvidenceFoldersByAssessmentRequest",
      });
    case 6:
      return S.Array(__S(107));
    case 7:
      return S.suspend(() =>
        S.Struct({
          evidenceFolders: S.optional(__S(110)),
          nextToken: S.optional(S.String),
        }),
      ).annotate({
        identifier: "GetEvidenceFoldersByAssessmentResponse",
      });
  }
}
function __c14(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          assessmentId: S.String.pipe(T.HttpLabel("assessmentId")),
          controlSetId: S.String.pipe(T.HttpLabel("controlSetId")),
          controlId: S.String.pipe(T.HttpLabel("controlId")),
          nextToken: S.optional(S.String).pipe(T.HttpQuery("nextToken")),
          maxResults: S.optional(S.Number).pipe(T.HttpQuery("maxResults")),
        }).pipe(
          T.all(
            T.Http({
              method: "GET",
              uri: "/assessments/{assessmentId}/evidenceFolders-by-assessment-control/{controlSetId}/{controlId}",
            }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "GetEvidenceFoldersByAssessmentControlRequest",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({}).pipe(
          T.all(T.Http({ method: "GET", uri: "/insights" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({ identifier: "GetInsightsRequest" });
    case 2:
      return S.suspend(() =>
        S.Struct({
          activeAssessmentsCount: S.optional(S.Number),
          noncompliantEvidenceCount: S.optional(S.Number),
          compliantEvidenceCount: S.optional(S.Number),
          inconclusiveEvidenceCount: S.optional(S.Number),
          assessmentControlsCountByNoncompliantEvidence: S.optional(S.Number),
          totalAssessmentControlsCount: S.optional(S.Number),
          lastUpdated: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
        }),
      ).annotate({ identifier: "Insights" });
    case 3:
      return S.suspend(() => S.Struct({ insights: S.optional(__S(114)) })).annotate({
        identifier: "GetInsightsResponse",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({ assessmentId: S.String.pipe(T.HttpLabel("assessmentId")) }).pipe(
          T.all(
            T.Http({ method: "GET", uri: "/insights/assessments/{assessmentId}" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "GetInsightsByAssessmentRequest",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({
          noncompliantEvidenceCount: S.optional(S.Number),
          compliantEvidenceCount: S.optional(S.Number),
          inconclusiveEvidenceCount: S.optional(S.Number),
          assessmentControlsCountByNoncompliantEvidence: S.optional(S.Number),
          totalAssessmentControlsCount: S.optional(S.Number),
          lastUpdated: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
        }),
      ).annotate({ identifier: "InsightsByAssessment" });
    case 6:
      return S.suspend(() => S.Struct({ insights: S.optional(__S(117)) })).annotate({
        identifier: "GetInsightsByAssessmentResponse",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({}).pipe(
          T.all(
            T.Http({ method: "GET", uri: "/account/organizationAdminAccount" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "GetOrganizationAdminAccountRequest",
      });
  }
}
function __c15(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({ adminAccountId: S.optional(S.String), organizationId: S.optional(S.String) }),
      ).annotate({
        identifier: "GetOrganizationAdminAccountResponse",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({}).pipe(
          T.all(T.Http({ method: "GET", uri: "/services" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({
        identifier: "GetServicesInScopeRequest",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({
          name: S.optional(S.String),
          displayName: S.optional(S.String),
          description: S.optional(S.String),
          category: S.optional(S.String),
        }),
      ).annotate({ identifier: "ServiceMetadata" });
    case 3:
      return S.Array(__S(122));
    case 4:
      return S.suspend(() => S.Struct({ serviceMetadata: S.optional(__S(123)) })).annotate({
        identifier: "GetServicesInScopeResponse",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({ attribute: S.String.pipe(T.HttpLabel("attribute")) }).pipe(
          T.all(
            T.Http({ method: "GET", uri: "/settings/{attribute}" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "GetSettingsRequest" });
    case 6:
      return S.suspend(() =>
        S.Struct({
          eventDataStoreArn: S.optional(S.String),
          enablementStatus: S.optional(S.String),
          backfillStatus: S.optional(S.String),
          error: S.optional(S.String),
        }),
      ).annotate({ identifier: "EvidenceFinderEnablement" });
    case 7:
      return S.suspend(() => S.Struct({ deleteResources: S.optional(S.String) })).annotate({
        identifier: "DeregistrationPolicy",
      });
  }
}
function __c16(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          destinationType: S.optional(S.String),
          destination: S.optional(S.String),
        }),
      ).annotate({ identifier: "DefaultExportDestination" });
    case 1:
      return S.suspend(() =>
        S.Struct({
          isAwsOrgEnabled: S.optional(S.Boolean),
          snsTopic: S.optional(SensitiveString),
          defaultAssessmentReportsDestination: S.optional(__S(26)),
          defaultProcessOwners: S.optional(__S(33)),
          kmsKey: S.optional(S.String),
          evidenceFinderEnablement: S.optional(__S(126)),
          deregistrationPolicy: S.optional(__S(127)),
          defaultExportDestination: S.optional(__S(128)),
        }),
      ).annotate({ identifier: "Settings" });
    case 2:
      return S.suspend(() => S.Struct({ settings: S.optional(__S(129)) })).annotate({
        identifier: "GetSettingsResponse",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({
          controlDomainId: S.String.pipe(T.HttpQuery("controlDomainId")),
          assessmentId: S.String.pipe(T.HttpQuery("assessmentId")),
          nextToken: S.optional(S.String).pipe(T.HttpQuery("nextToken")),
          maxResults: S.optional(S.Number).pipe(T.HttpQuery("maxResults")),
        }).pipe(
          T.all(
            T.Http({ method: "GET", uri: "/insights/controls-by-assessment" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "ListAssessmentControlInsightsByControlDomainRequest",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({
          noncompliantEvidenceCount: S.optional(S.Number),
          compliantEvidenceCount: S.optional(S.Number),
          inconclusiveEvidenceCount: S.optional(S.Number),
        }),
      ).annotate({ identifier: "EvidenceInsights" });
    case 5:
      return S.suspend(() =>
        S.Struct({
          name: S.optional(S.String),
          id: S.optional(S.String),
          evidenceInsights: S.optional(__S(132)),
          controlSetName: S.optional(S.String),
          lastUpdated: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
        }),
      ).annotate({
        identifier: "ControlInsightsMetadataByAssessmentItem",
      });
    case 6:
      return S.Array(__S(133));
    case 7:
      return S.suspend(() =>
        S.Struct({
          controlInsightsByAssessment: S.optional(__S(134)),
          nextToken: S.optional(S.String),
        }),
      ).annotate({
        identifier: "ListAssessmentControlInsightsByControlDomainResponse",
      });
  }
}
function __c17(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          frameworkType: S.String.pipe(T.HttpQuery("frameworkType")),
          nextToken: S.optional(S.String).pipe(T.HttpQuery("nextToken")),
          maxResults: S.optional(S.Number).pipe(T.HttpQuery("maxResults")),
        }).pipe(
          T.all(
            T.Http({ method: "GET", uri: "/assessmentFrameworks" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "ListAssessmentFrameworksRequest",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({
          arn: S.optional(S.String),
          id: S.optional(S.String),
          type: S.optional(S.String),
          name: S.optional(S.String),
          description: S.optional(S.String),
          logo: S.optional(S.String),
          complianceType: S.optional(SensitiveString),
          controlsCount: S.optional(S.Number),
          controlSetsCount: S.optional(S.Number),
          createdAt: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          lastUpdatedAt: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
        }),
      ).annotate({
        identifier: "AssessmentFrameworkMetadata",
      });
    case 2:
      return S.Array(__S(137));
    case 3:
      return S.suspend(() =>
        S.Struct({
          frameworkMetadataList: S.optional(__S(138)),
          nextToken: S.optional(S.String),
        }),
      ).annotate({
        identifier: "ListAssessmentFrameworksResponse",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({
          requestType: S.String.pipe(T.HttpQuery("requestType")),
          nextToken: S.optional(S.String).pipe(T.HttpQuery("nextToken")),
          maxResults: S.optional(S.Number).pipe(T.HttpQuery("maxResults")),
        }).pipe(
          T.all(
            T.Http({ method: "GET", uri: "/assessmentFrameworkShareRequests" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "ListAssessmentFrameworkShareRequestsRequest",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({
          id: S.optional(S.String),
          frameworkId: S.optional(S.String),
          frameworkName: S.optional(S.String),
          frameworkDescription: S.optional(S.String),
          status: S.optional(S.String),
          sourceAccount: S.optional(S.String),
          destinationAccount: S.optional(S.String),
          destinationRegion: S.optional(S.String),
          expirationTime: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          creationTime: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          lastUpdated: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          comment: S.optional(S.String),
          standardControlsCount: S.optional(S.Number),
          customControlsCount: S.optional(S.Number),
          complianceType: S.optional(SensitiveString),
        }),
      ).annotate({
        identifier: "AssessmentFrameworkShareRequest",
      });
    case 6:
      return S.Array(__S(141));
    case 7:
      return S.suspend(() =>
        S.Struct({
          assessmentFrameworkShareRequests: S.optional(__S(142)),
          nextToken: S.optional(S.String),
        }),
      ).annotate({
        identifier: "ListAssessmentFrameworkShareRequestsResponse",
      });
  }
}
function __c18(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          nextToken: S.optional(S.String).pipe(T.HttpQuery("nextToken")),
          maxResults: S.optional(S.Number).pipe(T.HttpQuery("maxResults")),
        }).pipe(
          T.all(T.Http({ method: "GET", uri: "/assessmentReports" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({
        identifier: "ListAssessmentReportsRequest",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({
          id: S.optional(S.String),
          name: S.optional(S.String),
          description: S.optional(SensitiveString),
          assessmentId: S.optional(S.String),
          assessmentName: S.optional(SensitiveString),
          author: S.optional(SensitiveString),
          status: S.optional(S.String),
          creationTime: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
        }),
      ).annotate({ identifier: "AssessmentReportMetadata" });
    case 2:
      return S.Array(__S(145));
    case 3:
      return S.suspend(() =>
        S.Struct({
          assessmentReports: S.optional(__S(146)),
          nextToken: S.optional(S.String),
        }),
      ).annotate({
        identifier: "ListAssessmentReportsResponse",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({
          status: S.optional(S.String).pipe(T.HttpQuery("status")),
          nextToken: S.optional(S.String).pipe(T.HttpQuery("nextToken")),
          maxResults: S.optional(S.Number).pipe(T.HttpQuery("maxResults")),
        }).pipe(
          T.all(T.Http({ method: "GET", uri: "/assessments" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({ identifier: "ListAssessmentsRequest" });
    case 5:
      return S.suspend(() =>
        S.Struct({
          name: S.optional(SensitiveString),
          id: S.optional(S.String),
          complianceType: S.optional(SensitiveString),
          status: S.optional(S.String),
          roles: S.optional(__S(33)),
          delegations: S.optional(__S(11)),
          creationTime: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          lastUpdated: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
        }),
      ).annotate({ identifier: "AssessmentMetadataItem" });
    case 6:
      return S.Array(__S(149));
    case 7:
      return S.suspend(() =>
        S.Struct({
          assessmentMetadata: S.optional(__S(150)),
          nextToken: S.optional(S.String),
        }),
      ).annotate({ identifier: "ListAssessmentsResponse" });
  }
}
function __c19(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          nextToken: S.optional(S.String).pipe(T.HttpQuery("nextToken")),
          maxResults: S.optional(S.Number).pipe(T.HttpQuery("maxResults")),
        }).pipe(
          T.all(
            T.Http({ method: "GET", uri: "/insights/control-domains" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "ListControlDomainInsightsRequest",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({
          name: S.optional(S.String),
          id: S.optional(S.String),
          controlsCountByNoncompliantEvidence: S.optional(S.Number),
          totalControlsCount: S.optional(S.Number),
          evidenceInsights: S.optional(__S(132)),
          lastUpdated: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
        }),
      ).annotate({ identifier: "ControlDomainInsights" });
    case 2:
      return S.Array(__S(153));
    case 3:
      return S.suspend(() =>
        S.Struct({
          controlDomainInsights: S.optional(__S(154)),
          nextToken: S.optional(S.String),
        }),
      ).annotate({
        identifier: "ListControlDomainInsightsResponse",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({
          assessmentId: S.String.pipe(T.HttpQuery("assessmentId")),
          nextToken: S.optional(S.String).pipe(T.HttpQuery("nextToken")),
          maxResults: S.optional(S.Number).pipe(T.HttpQuery("maxResults")),
        }).pipe(
          T.all(
            T.Http({ method: "GET", uri: "/insights/control-domains-by-assessment" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "ListControlDomainInsightsByAssessmentRequest",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({
          controlDomainId: S.String.pipe(T.HttpQuery("controlDomainId")),
          nextToken: S.optional(S.String).pipe(T.HttpQuery("nextToken")),
          maxResults: S.optional(S.Number).pipe(T.HttpQuery("maxResults")),
        }).pipe(
          T.all(T.Http({ method: "GET", uri: "/insights/controls" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({
        identifier: "ListControlInsightsByControlDomainRequest",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({
          name: S.optional(S.String),
          id: S.optional(S.String),
          evidenceInsights: S.optional(__S(132)),
          lastUpdated: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
        }),
      ).annotate({
        identifier: "ControlInsightsMetadataItem",
      });
    case 7:
      return S.Array(__S(158));
  }
}
function __c20(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          controlInsightsMetadata: S.optional(__S(159)),
          nextToken: S.optional(S.String),
        }),
      ).annotate({
        identifier: "ListControlInsightsByControlDomainResponse",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({
          controlType: S.String.pipe(T.HttpQuery("controlType")),
          nextToken: S.optional(S.String).pipe(T.HttpQuery("nextToken")),
          maxResults: S.optional(S.Number).pipe(T.HttpQuery("maxResults")),
          controlCatalogId: S.optional(S.String).pipe(T.HttpQuery("controlCatalogId")),
        }).pipe(T.all(T.Http({ method: "GET", uri: "/controls" }), svc, auth, proto, ver, rules)),
      ).annotate({ identifier: "ListControlsRequest" });
    case 2:
      return S.suspend(() =>
        S.Struct({
          arn: S.optional(S.String),
          id: S.optional(S.String),
          name: S.optional(S.String),
          controlSources: S.optional(S.String),
          createdAt: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          lastUpdatedAt: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
        }),
      ).annotate({ identifier: "ControlMetadata" });
    case 3:
      return S.Array(__S(162));
    case 4:
      return S.suspend(() =>
        S.Struct({
          controlMetadataList: S.optional(__S(163)),
          nextToken: S.optional(S.String),
        }),
      ).annotate({ identifier: "ListControlsResponse" });
    case 5:
      return S.suspend(() =>
        S.Struct({
          source: S.String.pipe(T.HttpQuery("source")),
          nextToken: S.optional(S.String).pipe(T.HttpQuery("nextToken")),
          maxResults: S.optional(S.Number).pipe(T.HttpQuery("maxResults")),
        }).pipe(
          T.all(
            T.Http({ method: "GET", uri: "/dataSourceKeywords" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "ListKeywordsForDataSourceRequest",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({ keywords: S.optional(__S(2)), nextToken: S.optional(S.String) }),
      ).annotate({
        identifier: "ListKeywordsForDataSourceResponse",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({
          nextToken: S.optional(S.String).pipe(T.HttpQuery("nextToken")),
          maxResults: S.optional(S.Number).pipe(T.HttpQuery("maxResults")),
        }).pipe(
          T.all(T.Http({ method: "GET", uri: "/notifications" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({ identifier: "ListNotificationsRequest" });
  }
}
function __c21(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          id: S.optional(S.String),
          assessmentId: S.optional(S.String),
          assessmentName: S.optional(SensitiveString),
          controlSetId: S.optional(S.String),
          controlSetName: S.optional(S.String),
          description: S.optional(S.String),
          eventTime: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          source: S.optional(S.String),
        }),
      ).annotate({ identifier: "Notification" });
    case 1:
      return S.Array(__S(168));
    case 2:
      return S.suspend(() =>
        S.Struct({ notifications: S.optional(__S(169)), nextToken: S.optional(S.String) }),
      ).annotate({
        identifier: "ListNotificationsResponse",
      });
    case 3:
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
    case 4:
      return S.suspend(() => S.Struct({ tags: S.optional(__S(34)) })).annotate({
        identifier: "ListTagsForResourceResponse",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({
          kmsKey: S.optional(S.String),
          delegatedAdminAccount: S.optional(S.String),
        }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/account/registerAccount" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "RegisterAccountRequest" });
    case 6:
      return S.suspend(() =>
        S.Struct({ adminAccountId: S.String }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/account/registerOrganizationAdminAccount" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "RegisterOrganizationAdminAccountRequest",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({
          frameworkId: S.String.pipe(T.HttpLabel("frameworkId")),
          destinationAccount: S.String,
          destinationRegion: S.String,
          comment: S.optional(S.String),
        }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/assessmentFrameworks/{frameworkId}/shareRequests" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "StartAssessmentFrameworkShareRequest",
      });
  }
}
function __c22(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({ assessmentFrameworkShareRequest: S.optional(__S(141)) }),
      ).annotate({
        identifier: "StartAssessmentFrameworkShareResponse",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({ resourceArn: S.String.pipe(T.HttpLabel("resourceArn")), tags: __S(34) }).pipe(
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
    case 2:
      return S.suspend(() =>
        S.Struct({
          resourceArn: S.String.pipe(T.HttpLabel("resourceArn")),
          tagKeys: __S(2).pipe(T.HttpQuery("tagKeys")),
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
    case 3:
      return S.suspend(() =>
        S.Struct({
          assessmentId: S.String.pipe(T.HttpLabel("assessmentId")),
          assessmentName: S.optional(SensitiveString),
          assessmentDescription: S.optional(SensitiveString),
          scope: __S(31),
          assessmentReportsDestination: S.optional(__S(26)),
          roles: S.optional(__S(33)),
        }).pipe(
          T.all(
            T.Http({ method: "PUT", uri: "/assessments/{assessmentId}" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "UpdateAssessmentRequest" });
    case 4:
      return S.suspend(() =>
        S.Struct({
          assessmentId: S.String.pipe(T.HttpLabel("assessmentId")),
          controlSetId: S.String.pipe(T.HttpLabel("controlSetId")),
          controlId: S.String.pipe(T.HttpLabel("controlId")),
          controlStatus: S.optional(S.String),
          commentBody: S.optional(SensitiveString),
        }).pipe(
          T.all(
            T.Http({
              method: "PUT",
              uri: "/assessments/{assessmentId}/controlSets/{controlSetId}/controls/{controlId}",
            }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "UpdateAssessmentControlRequest",
      });
    case 5:
      return S.suspend(() => S.Struct({ control: S.optional(__S(40)) })).annotate({
        identifier: "UpdateAssessmentControlResponse",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({
          assessmentId: S.String.pipe(T.HttpLabel("assessmentId")),
          controlSetId: S.String.pipe(T.HttpLabel("controlSetId")),
          status: S.String,
          comment: SensitiveString,
        }).pipe(
          T.all(
            T.Http({
              method: "PUT",
              uri: "/assessments/{assessmentId}/controlSets/{controlSetId}/status",
            }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "UpdateAssessmentControlSetStatusRequest",
      });
    case 7:
      return S.suspend(() => S.Struct({ controlSet: S.optional(__S(42)) })).annotate({
        identifier: "UpdateAssessmentControlSetStatusResponse",
      });
  }
}
function __c23(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          id: S.optional(S.String),
          name: S.String,
          controls: __S(48),
        }),
      ).annotate({
        identifier: "UpdateAssessmentFrameworkControlSet",
      });
    case 1:
      return S.Array(__S(184));
    case 2:
      return S.suspend(() =>
        S.Struct({
          frameworkId: S.String.pipe(T.HttpLabel("frameworkId")),
          name: S.String,
          description: S.optional(S.String),
          complianceType: S.optional(SensitiveString),
          controlSets: __S(185),
        }).pipe(
          T.all(
            T.Http({ method: "PUT", uri: "/assessmentFrameworks/{frameworkId}" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "UpdateAssessmentFrameworkRequest",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({
          requestId: S.String.pipe(T.HttpLabel("requestId")),
          requestType: S.String,
          action: S.String,
        }).pipe(
          T.all(
            T.Http({ method: "PUT", uri: "/assessmentFrameworkShareRequests/{requestId}" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "UpdateAssessmentFrameworkShareRequest",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({
          assessmentId: S.String.pipe(T.HttpLabel("assessmentId")),
          status: S.String,
        }).pipe(
          T.all(
            T.Http({ method: "PUT", uri: "/assessments/{assessmentId}/status" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "UpdateAssessmentStatusRequest",
      });
    case 5:
      return S.suspend(() => S.Struct({ assessment: S.optional(__S(45)) })).annotate({
        identifier: "UpdateAssessmentStatusResponse",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({
          controlId: S.String.pipe(T.HttpLabel("controlId")),
          name: S.String,
          description: S.optional(SensitiveString),
          testingInformation: S.optional(SensitiveString),
          actionPlanTitle: S.optional(SensitiveString),
          actionPlanInstructions: S.optional(SensitiveString),
          controlMappingSources: __S(54),
        }).pipe(
          T.all(
            T.Http({ method: "PUT", uri: "/controls/{controlId}" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "UpdateControlRequest" });
    case 7:
      return S.suspend(() =>
        S.Struct({
          snsTopic: S.optional(S.String),
          defaultAssessmentReportsDestination: S.optional(__S(26)),
          defaultProcessOwners: S.optional(__S(33)),
          kmsKey: S.optional(S.String),
          evidenceFinderEnabled: S.optional(S.Boolean),
          deregistrationPolicy: S.optional(__S(127)),
          defaultExportDestination: S.optional(__S(128)),
        }).pipe(T.all(T.Http({ method: "PUT", uri: "/settings" }), svc, auth, proto, ver, rules)),
      ).annotate({ identifier: "UpdateSettingsRequest" });
  }
}
function __c24(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({ s3RelativePath: S.String }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/assessmentReports/integrity" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "ValidateAssessmentReportIntegrityRequest",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({
          signatureValid: S.optional(S.Boolean),
          signatureAlgorithm: S.optional(S.String),
          signatureDateTime: S.optional(S.String),
          signatureKeyId: S.optional(S.String),
          validationErrors: S.optional(__S(2)),
        }),
      ).annotate({
        identifier: "ValidateAssessmentReportIntegrityResponse",
      });
    case 2:
      return S.suspend(() => S.Struct({ name: S.String, message: S.String })).annotate({
        identifier: "ValidationExceptionField",
      });
    case 3:
      return S.Array(__S(194));
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
  }
}
