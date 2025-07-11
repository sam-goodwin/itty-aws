import type { Effect, Data as EffectData } from "effect";
import type { CommonAwsError } from "../error.ts";

export interface BedrockAssessmentManagerLambda {
  associateAssessmentReportEvidenceFolder(
    input: AssociateAssessmentReportEvidenceFolderRequest,
  ): Effect.Effect<
    AssociateAssessmentReportEvidenceFolderResponse,
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ValidationException
    | CommonAwsError
  >;
  batchAssociateAssessmentReportEvidence(
    input: BatchAssociateAssessmentReportEvidenceRequest,
  ): Effect.Effect<
    BatchAssociateAssessmentReportEvidenceResponse,
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ValidationException
    | CommonAwsError
  >;
  batchCreateDelegationByAssessment(
    input: BatchCreateDelegationByAssessmentRequest,
  ): Effect.Effect<
    BatchCreateDelegationByAssessmentResponse,
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ValidationException
    | CommonAwsError
  >;
  batchDeleteDelegationByAssessment(
    input: BatchDeleteDelegationByAssessmentRequest,
  ): Effect.Effect<
    BatchDeleteDelegationByAssessmentResponse,
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ValidationException
    | CommonAwsError
  >;
  batchDisassociateAssessmentReportEvidence(
    input: BatchDisassociateAssessmentReportEvidenceRequest,
  ): Effect.Effect<
    BatchDisassociateAssessmentReportEvidenceResponse,
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ValidationException
    | CommonAwsError
  >;
  batchImportEvidenceToAssessmentControl(
    input: BatchImportEvidenceToAssessmentControlRequest,
  ): Effect.Effect<
    BatchImportEvidenceToAssessmentControlResponse,
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  createAssessment(
    input: CreateAssessmentRequest,
  ): Effect.Effect<
    CreateAssessmentResponse,
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ServiceQuotaExceededException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  createAssessmentFramework(
    input: CreateAssessmentFrameworkRequest,
  ): Effect.Effect<
    CreateAssessmentFrameworkResponse,
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ServiceQuotaExceededException
    | ValidationException
    | CommonAwsError
  >;
  createAssessmentReport(
    input: CreateAssessmentReportRequest,
  ): Effect.Effect<
    CreateAssessmentReportResponse,
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ValidationException
    | CommonAwsError
  >;
  createControl(
    input: CreateControlRequest,
  ): Effect.Effect<
    CreateControlResponse,
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ServiceQuotaExceededException
    | ValidationException
    | CommonAwsError
  >;
  deleteAssessment(
    input: DeleteAssessmentRequest,
  ): Effect.Effect<
    DeleteAssessmentResponse,
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ValidationException
    | CommonAwsError
  >;
  deleteAssessmentFramework(
    input: DeleteAssessmentFrameworkRequest,
  ): Effect.Effect<
    DeleteAssessmentFrameworkResponse,
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ValidationException
    | CommonAwsError
  >;
  deleteAssessmentFrameworkShare(
    input: DeleteAssessmentFrameworkShareRequest,
  ): Effect.Effect<
    DeleteAssessmentFrameworkShareResponse,
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ValidationException
    | CommonAwsError
  >;
  deleteAssessmentReport(
    input: DeleteAssessmentReportRequest,
  ): Effect.Effect<
    DeleteAssessmentReportResponse,
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ValidationException
    | CommonAwsError
  >;
  deleteControl(
    input: DeleteControlRequest,
  ): Effect.Effect<
    DeleteControlResponse,
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ValidationException
    | CommonAwsError
  >;
  deregisterAccount(
    input: DeregisterAccountRequest,
  ): Effect.Effect<
    DeregisterAccountResponse,
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ValidationException
    | CommonAwsError
  >;
  deregisterOrganizationAdminAccount(
    input: DeregisterOrganizationAdminAccountRequest,
  ): Effect.Effect<
    DeregisterOrganizationAdminAccountResponse,
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ValidationException
    | CommonAwsError
  >;
  disassociateAssessmentReportEvidenceFolder(
    input: DisassociateAssessmentReportEvidenceFolderRequest,
  ): Effect.Effect<
    DisassociateAssessmentReportEvidenceFolderResponse,
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ValidationException
    | CommonAwsError
  >;
  getAccountStatus(
    input: GetAccountStatusRequest,
  ): Effect.Effect<
    GetAccountStatusResponse,
    InternalServerException | CommonAwsError
  >;
  getAssessment(
    input: GetAssessmentRequest,
  ): Effect.Effect<
    GetAssessmentResponse,
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ValidationException
    | CommonAwsError
  >;
  getAssessmentFramework(
    input: GetAssessmentFrameworkRequest,
  ): Effect.Effect<
    GetAssessmentFrameworkResponse,
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ValidationException
    | CommonAwsError
  >;
  getAssessmentReportUrl(
    input: GetAssessmentReportUrlRequest,
  ): Effect.Effect<
    GetAssessmentReportUrlResponse,
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ValidationException
    | CommonAwsError
  >;
  getChangeLogs(
    input: GetChangeLogsRequest,
  ): Effect.Effect<
    GetChangeLogsResponse,
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ValidationException
    | CommonAwsError
  >;
  getControl(
    input: GetControlRequest,
  ): Effect.Effect<
    GetControlResponse,
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ValidationException
    | CommonAwsError
  >;
  getDelegations(
    input: GetDelegationsRequest,
  ): Effect.Effect<
    GetDelegationsResponse,
    | AccessDeniedException
    | InternalServerException
    | ValidationException
    | CommonAwsError
  >;
  getEvidence(
    input: GetEvidenceRequest,
  ): Effect.Effect<
    GetEvidenceResponse,
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ValidationException
    | CommonAwsError
  >;
  getEvidenceByEvidenceFolder(
    input: GetEvidenceByEvidenceFolderRequest,
  ): Effect.Effect<
    GetEvidenceByEvidenceFolderResponse,
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ValidationException
    | CommonAwsError
  >;
  getEvidenceFileUploadUrl(
    input: GetEvidenceFileUploadUrlRequest,
  ): Effect.Effect<
    GetEvidenceFileUploadUrlResponse,
    | AccessDeniedException
    | InternalServerException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  getEvidenceFolder(
    input: GetEvidenceFolderRequest,
  ): Effect.Effect<
    GetEvidenceFolderResponse,
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ValidationException
    | CommonAwsError
  >;
  getEvidenceFoldersByAssessment(
    input: GetEvidenceFoldersByAssessmentRequest,
  ): Effect.Effect<
    GetEvidenceFoldersByAssessmentResponse,
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ValidationException
    | CommonAwsError
  >;
  getEvidenceFoldersByAssessmentControl(
    input: GetEvidenceFoldersByAssessmentControlRequest,
  ): Effect.Effect<
    GetEvidenceFoldersByAssessmentControlResponse,
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ValidationException
    | CommonAwsError
  >;
  getInsights(
    input: GetInsightsRequest,
  ): Effect.Effect<
    GetInsightsResponse,
    AccessDeniedException | InternalServerException | CommonAwsError
  >;
  getInsightsByAssessment(
    input: GetInsightsByAssessmentRequest,
  ): Effect.Effect<
    GetInsightsByAssessmentResponse,
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ValidationException
    | CommonAwsError
  >;
  getOrganizationAdminAccount(
    input: GetOrganizationAdminAccountRequest,
  ): Effect.Effect<
    GetOrganizationAdminAccountResponse,
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ValidationException
    | CommonAwsError
  >;
  getServicesInScope(
    input: GetServicesInScopeRequest,
  ): Effect.Effect<
    GetServicesInScopeResponse,
    | AccessDeniedException
    | InternalServerException
    | ValidationException
    | CommonAwsError
  >;
  getSettings(
    input: GetSettingsRequest,
  ): Effect.Effect<
    GetSettingsResponse,
    AccessDeniedException | InternalServerException | CommonAwsError
  >;
  listAssessmentControlInsightsByControlDomain(
    input: ListAssessmentControlInsightsByControlDomainRequest,
  ): Effect.Effect<
    ListAssessmentControlInsightsByControlDomainResponse,
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ValidationException
    | CommonAwsError
  >;
  listAssessmentFrameworks(
    input: ListAssessmentFrameworksRequest,
  ): Effect.Effect<
    ListAssessmentFrameworksResponse,
    | AccessDeniedException
    | InternalServerException
    | ValidationException
    | CommonAwsError
  >;
  listAssessmentFrameworkShareRequests(
    input: ListAssessmentFrameworkShareRequestsRequest,
  ): Effect.Effect<
    ListAssessmentFrameworkShareRequestsResponse,
    | AccessDeniedException
    | InternalServerException
    | ValidationException
    | CommonAwsError
  >;
  listAssessmentReports(
    input: ListAssessmentReportsRequest,
  ): Effect.Effect<
    ListAssessmentReportsResponse,
    | AccessDeniedException
    | InternalServerException
    | ValidationException
    | CommonAwsError
  >;
  listAssessments(
    input: ListAssessmentsRequest,
  ): Effect.Effect<
    ListAssessmentsResponse,
    | AccessDeniedException
    | InternalServerException
    | ValidationException
    | CommonAwsError
  >;
  listControlDomainInsights(
    input: ListControlDomainInsightsRequest,
  ): Effect.Effect<
    ListControlDomainInsightsResponse,
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ValidationException
    | CommonAwsError
  >;
  listControlDomainInsightsByAssessment(
    input: ListControlDomainInsightsByAssessmentRequest,
  ): Effect.Effect<
    ListControlDomainInsightsByAssessmentResponse,
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ValidationException
    | CommonAwsError
  >;
  listControlInsightsByControlDomain(
    input: ListControlInsightsByControlDomainRequest,
  ): Effect.Effect<
    ListControlInsightsByControlDomainResponse,
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ValidationException
    | CommonAwsError
  >;
  listControls(
    input: ListControlsRequest,
  ): Effect.Effect<
    ListControlsResponse,
    | AccessDeniedException
    | InternalServerException
    | ValidationException
    | CommonAwsError
  >;
  listKeywordsForDataSource(
    input: ListKeywordsForDataSourceRequest,
  ): Effect.Effect<
    ListKeywordsForDataSourceResponse,
    | AccessDeniedException
    | InternalServerException
    | ValidationException
    | CommonAwsError
  >;
  listNotifications(
    input: ListNotificationsRequest,
  ): Effect.Effect<
    ListNotificationsResponse,
    | AccessDeniedException
    | InternalServerException
    | ValidationException
    | CommonAwsError
  >;
  listTagsForResource(
    input: ListTagsForResourceRequest,
  ): Effect.Effect<
    ListTagsForResourceResponse,
    | InternalServerException
    | ResourceNotFoundException
    | ValidationException
    | CommonAwsError
  >;
  registerAccount(
    input: RegisterAccountRequest,
  ): Effect.Effect<
    RegisterAccountResponse,
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  registerOrganizationAdminAccount(
    input: RegisterOrganizationAdminAccountRequest,
  ): Effect.Effect<
    RegisterOrganizationAdminAccountResponse,
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ValidationException
    | CommonAwsError
  >;
  startAssessmentFrameworkShare(
    input: StartAssessmentFrameworkShareRequest,
  ): Effect.Effect<
    StartAssessmentFrameworkShareResponse,
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ValidationException
    | CommonAwsError
  >;
  tagResource(
    input: TagResourceRequest,
  ): Effect.Effect<
    TagResourceResponse,
    | InternalServerException
    | ResourceNotFoundException
    | ValidationException
    | CommonAwsError
  >;
  untagResource(
    input: UntagResourceRequest,
  ): Effect.Effect<
    UntagResourceResponse,
    | InternalServerException
    | ResourceNotFoundException
    | ValidationException
    | CommonAwsError
  >;
  updateAssessment(
    input: UpdateAssessmentRequest,
  ): Effect.Effect<
    UpdateAssessmentResponse,
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ServiceQuotaExceededException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  updateAssessmentControl(
    input: UpdateAssessmentControlRequest,
  ): Effect.Effect<
    UpdateAssessmentControlResponse,
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ValidationException
    | CommonAwsError
  >;
  updateAssessmentControlSetStatus(
    input: UpdateAssessmentControlSetStatusRequest,
  ): Effect.Effect<
    UpdateAssessmentControlSetStatusResponse,
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ValidationException
    | CommonAwsError
  >;
  updateAssessmentFramework(
    input: UpdateAssessmentFrameworkRequest,
  ): Effect.Effect<
    UpdateAssessmentFrameworkResponse,
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ValidationException
    | CommonAwsError
  >;
  updateAssessmentFrameworkShare(
    input: UpdateAssessmentFrameworkShareRequest,
  ): Effect.Effect<
    UpdateAssessmentFrameworkShareResponse,
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ServiceQuotaExceededException
    | ValidationException
    | CommonAwsError
  >;
  updateAssessmentStatus(
    input: UpdateAssessmentStatusRequest,
  ): Effect.Effect<
    UpdateAssessmentStatusResponse,
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ServiceQuotaExceededException
    | ValidationException
    | CommonAwsError
  >;
  updateControl(
    input: UpdateControlRequest,
  ): Effect.Effect<
    UpdateControlResponse,
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ValidationException
    | CommonAwsError
  >;
  updateSettings(
    input: UpdateSettingsRequest,
  ): Effect.Effect<
    UpdateSettingsResponse,
    | AccessDeniedException
    | InternalServerException
    | ValidationException
    | CommonAwsError
  >;
  validateAssessmentReportIntegrity(
    input: ValidateAssessmentReportIntegrityRequest,
  ): Effect.Effect<
    ValidateAssessmentReportIntegrityResponse,
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ValidationException
    | CommonAwsError
  >;
}

export type Auditmanager = BedrockAssessmentManagerLambda;

export declare class AccessDeniedException extends EffectData.TaggedError(
  "AccessDeniedException",
)<{
  readonly message: string;
}> {}
export type AccountId = string;

export type AccountName = string;

export type AccountStatus = "ACTIVE" | "INACTIVE" | "PENDING_ACTIVATION";
export type ActionEnum =
  | "CREATE"
  | "UPDATE_METADATA"
  | "ACTIVE"
  | "INACTIVE"
  | "DELETE"
  | "UNDER_REVIEW"
  | "REVIEWED"
  | "IMPORT_EVIDENCE";
export type ActionPlanInstructions = string;

export type ActionPlanTitle = string;

export interface Assessment {
  arn?: string;
  awsAccount?: AWSAccount;
  metadata?: AssessmentMetadata;
  framework?: AssessmentFramework;
  tags?: Record<string, string>;
}
export interface AssessmentControl {
  id?: string;
  name?: string;
  description?: string;
  status?: ControlStatus;
  response?: ControlResponse;
  comments?: Array<ControlComment>;
  evidenceSources?: Array<string>;
  evidenceCount?: number;
  assessmentReportEvidenceCount?: number;
}
export type AssessmentControls = Array<AssessmentControl>;
export interface AssessmentControlSet {
  id?: string;
  description?: string;
  status?: ControlSetStatus;
  roles?: Array<Role>;
  controls?: Array<AssessmentControl>;
  delegations?: Array<Delegation>;
  systemEvidenceCount?: number;
  manualEvidenceCount?: number;
}
export type AssessmentControlSets = Array<AssessmentControlSet>;
export type AssessmentDescription = string;

export interface AssessmentEvidenceFolder {
  name?: string;
  date?: Date | string;
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
export type AssessmentEvidenceFolderName = string;

export type AssessmentEvidenceFolders = Array<AssessmentEvidenceFolder>;
export interface AssessmentFramework {
  id?: string;
  arn?: string;
  metadata?: FrameworkMetadata;
  controlSets?: Array<AssessmentControlSet>;
}
export type AssessmentFrameworkDescription = string;

export interface AssessmentFrameworkMetadata {
  arn?: string;
  id?: string;
  type?: FrameworkType;
  name?: string;
  description?: string;
  logo?: string;
  complianceType?: string;
  controlsCount?: number;
  controlSetsCount?: number;
  createdAt?: Date | string;
  lastUpdatedAt?: Date | string;
}
export interface AssessmentFrameworkShareRequest {
  id?: string;
  frameworkId?: string;
  frameworkName?: string;
  frameworkDescription?: string;
  status?: ShareRequestStatus;
  sourceAccount?: string;
  destinationAccount?: string;
  destinationRegion?: string;
  expirationTime?: Date | string;
  creationTime?: Date | string;
  lastUpdated?: Date | string;
  comment?: string;
  standardControlsCount?: number;
  customControlsCount?: number;
  complianceType?: string;
}
export type AssessmentFrameworkShareRequestList =
  Array<AssessmentFrameworkShareRequest>;
export interface AssessmentMetadata {
  name?: string;
  id?: string;
  description?: string;
  complianceType?: string;
  status?: AssessmentStatus;
  assessmentReportsDestination?: AssessmentReportsDestination;
  scope?: Scope;
  roles?: Array<Role>;
  delegations?: Array<Delegation>;
  creationTime?: Date | string;
  lastUpdated?: Date | string;
}
export interface AssessmentMetadataItem {
  name?: string;
  id?: string;
  complianceType?: string;
  status?: AssessmentStatus;
  roles?: Array<Role>;
  delegations?: Array<Delegation>;
  creationTime?: Date | string;
  lastUpdated?: Date | string;
}
export type AssessmentName = string;

export interface AssessmentReport {
  id?: string;
  name?: string;
  description?: string;
  awsAccountId?: string;
  assessmentId?: string;
  assessmentName?: string;
  author?: string;
  status?: AssessmentReportStatus;
  creationTime?: Date | string;
}
export type AssessmentReportDescription = string;

export type AssessmentReportDestinationType = "S3";
export interface AssessmentReportEvidenceError {
  evidenceId?: string;
  errorCode?: string;
  errorMessage?: string;
}
export type AssessmentReportEvidenceErrors =
  Array<AssessmentReportEvidenceError>;
export interface AssessmentReportMetadata {
  id?: string;
  name?: string;
  description?: string;
  assessmentId?: string;
  assessmentName?: string;
  author?: string;
  status?: AssessmentReportStatus;
  creationTime?: Date | string;
}
export type AssessmentReportName = string;

export interface AssessmentReportsDestination {
  destinationType?: AssessmentReportDestinationType;
  destination?: string;
}
export type AssessmentReportsMetadata = Array<AssessmentReportMetadata>;
export type AssessmentReportStatus = "COMPLETE" | "IN_PROGRESS" | "FAILED";
export type AssessmentStatus = "ACTIVE" | "INACTIVE";
export interface AssociateAssessmentReportEvidenceFolderRequest {
  assessmentId: string;
  evidenceFolderId: string;
}
export interface AssociateAssessmentReportEvidenceFolderResponse {}
export type AuditManagerArn = string;

export interface AWSAccount {
  id?: string;
  emailAddress?: string;
  name?: string;
}
export type AWSAccounts = Array<AWSAccount>;
export interface AWSService {
  serviceName?: string;
}
export type AWSServiceName = string;

export type AWSServices = Array<AWSService>;
export interface BatchAssociateAssessmentReportEvidenceRequest {
  assessmentId: string;
  evidenceFolderId: string;
  evidenceIds: Array<string>;
}
export interface BatchAssociateAssessmentReportEvidenceResponse {
  evidenceIds?: Array<string>;
  errors?: Array<AssessmentReportEvidenceError>;
}
export interface BatchCreateDelegationByAssessmentError {
  createDelegationRequest?: CreateDelegationRequest;
  errorCode?: string;
  errorMessage?: string;
}
export type BatchCreateDelegationByAssessmentErrors =
  Array<BatchCreateDelegationByAssessmentError>;
export interface BatchCreateDelegationByAssessmentRequest {
  createDelegationRequests: Array<CreateDelegationRequest>;
  assessmentId: string;
}
export interface BatchCreateDelegationByAssessmentResponse {
  delegations?: Array<Delegation>;
  errors?: Array<BatchCreateDelegationByAssessmentError>;
}
export interface BatchDeleteDelegationByAssessmentError {
  delegationId?: string;
  errorCode?: string;
  errorMessage?: string;
}
export type BatchDeleteDelegationByAssessmentErrors =
  Array<BatchDeleteDelegationByAssessmentError>;
export interface BatchDeleteDelegationByAssessmentRequest {
  delegationIds: Array<string>;
  assessmentId: string;
}
export interface BatchDeleteDelegationByAssessmentResponse {
  errors?: Array<BatchDeleteDelegationByAssessmentError>;
}
export interface BatchDisassociateAssessmentReportEvidenceRequest {
  assessmentId: string;
  evidenceFolderId: string;
  evidenceIds: Array<string>;
}
export interface BatchDisassociateAssessmentReportEvidenceResponse {
  evidenceIds?: Array<string>;
  errors?: Array<AssessmentReportEvidenceError>;
}
export interface BatchImportEvidenceToAssessmentControlError {
  manualEvidence?: ManualEvidence;
  errorCode?: string;
  errorMessage?: string;
}
export type BatchImportEvidenceToAssessmentControlErrors =
  Array<BatchImportEvidenceToAssessmentControlError>;
export interface BatchImportEvidenceToAssessmentControlRequest {
  assessmentId: string;
  controlSetId: string;
  controlId: string;
  manualEvidence: Array<ManualEvidence>;
}
export interface BatchImportEvidenceToAssessmentControlResponse {
  errors?: Array<BatchImportEvidenceToAssessmentControlError>;
}
export type AuditmanagerBoolean = boolean;

export interface ChangeLog {
  objectType?: ObjectTypeEnum;
  objectName?: string;
  action?: ActionEnum;
  createdAt?: Date | string;
  createdBy?: string;
}
export type ChangeLogs = Array<ChangeLog>;
export type CloudTrailArn = string;

export type ComplianceType = string;

export interface Control {
  arn?: string;
  id?: string;
  type?: ControlType;
  name?: string;
  description?: string;
  testingInformation?: string;
  actionPlanTitle?: string;
  actionPlanInstructions?: string;
  controlSources?: string;
  controlMappingSources?: Array<ControlMappingSource>;
  createdAt?: Date | string;
  lastUpdatedAt?: Date | string;
  createdBy?: string;
  lastUpdatedBy?: string;
  tags?: Record<string, string>;
  state?: ControlState;
}
export type ControlCatalogId = string;

export interface ControlComment {
  authorName?: string;
  commentBody?: string;
  postedDate?: Date | string;
}
export type ControlCommentBody = string;

export type ControlComments = Array<ControlComment>;
export type ControlDescription = string;

export type ControlDomainId = string;

export interface ControlDomainInsights {
  name?: string;
  id?: string;
  controlsCountByNoncompliantEvidence?: number;
  totalControlsCount?: number;
  evidenceInsights?: EvidenceInsights;
  lastUpdated?: Date | string;
}
export type ControlDomainInsightsList = Array<ControlDomainInsights>;
export type ControlInsightsMetadata = Array<ControlInsightsMetadataItem>;
export type ControlInsightsMetadataByAssessment =
  Array<ControlInsightsMetadataByAssessmentItem>;
export interface ControlInsightsMetadataByAssessmentItem {
  name?: string;
  id?: string;
  evidenceInsights?: EvidenceInsights;
  controlSetName?: string;
  lastUpdated?: Date | string;
}
export interface ControlInsightsMetadataItem {
  name?: string;
  id?: string;
  evidenceInsights?: EvidenceInsights;
  lastUpdated?: Date | string;
}
export interface ControlMappingSource {
  sourceId?: string;
  sourceName?: string;
  sourceDescription?: string;
  sourceSetUpOption?: SourceSetUpOption;
  sourceType?: SourceType;
  sourceKeyword?: SourceKeyword;
  sourceFrequency?: SourceFrequency;
  troubleshootingText?: string;
}
export type ControlMappingSources = Array<ControlMappingSource>;
export interface ControlMetadata {
  arn?: string;
  id?: string;
  name?: string;
  controlSources?: string;
  createdAt?: Date | string;
  lastUpdatedAt?: Date | string;
}
export type ControlMetadataList = Array<ControlMetadata>;
export type ControlName = string;

export type ControlResponse = "MANUAL" | "AUTOMATE" | "DEFER" | "IGNORE";
export type Controls = Array<Control>;
export type ControlsCount = number;

export interface ControlSet {
  id?: string;
  name?: string;
  controls?: Array<Control>;
}
export type ControlSetId = string;

export type ControlSetName = string;

export type ControlSets = Array<ControlSet>;
export type ControlSetsCount = number;

export type ControlSetStatus = "ACTIVE" | "UNDER_REVIEW" | "REVIEWED";
export type ControlSources = string;

export type ControlState = "ACTIVE" | "END_OF_SUPPORT";
export type ControlStatus = "UNDER_REVIEW" | "REVIEWED" | "INACTIVE";
export type ControlType = "STANDARD" | "CUSTOM" | "CORE";
export interface CreateAssessmentFrameworkControl {
  id: string;
}
export type CreateAssessmentFrameworkControls =
  Array<CreateAssessmentFrameworkControl>;
export interface CreateAssessmentFrameworkControlSet {
  name: string;
  controls?: Array<CreateAssessmentFrameworkControl>;
}
export type CreateAssessmentFrameworkControlSets =
  Array<CreateAssessmentFrameworkControlSet>;
export interface CreateAssessmentFrameworkRequest {
  name: string;
  description?: string;
  complianceType?: string;
  controlSets: Array<CreateAssessmentFrameworkControlSet>;
  tags?: Record<string, string>;
}
export interface CreateAssessmentFrameworkResponse {
  framework?: Framework;
}
export interface CreateAssessmentReportRequest {
  name: string;
  description?: string;
  assessmentId: string;
  queryStatement?: string;
}
export interface CreateAssessmentReportResponse {
  assessmentReport?: AssessmentReport;
}
export interface CreateAssessmentRequest {
  name: string;
  description?: string;
  assessmentReportsDestination: AssessmentReportsDestination;
  scope: Scope;
  roles: Array<Role>;
  frameworkId: string;
  tags?: Record<string, string>;
}
export interface CreateAssessmentResponse {
  assessment?: Assessment;
}
export interface CreateControlMappingSource {
  sourceName?: string;
  sourceDescription?: string;
  sourceSetUpOption?: SourceSetUpOption;
  sourceType?: SourceType;
  sourceKeyword?: SourceKeyword;
  sourceFrequency?: SourceFrequency;
  troubleshootingText?: string;
}
export type CreateControlMappingSources = Array<CreateControlMappingSource>;
export interface CreateControlRequest {
  name: string;
  description?: string;
  testingInformation?: string;
  actionPlanTitle?: string;
  actionPlanInstructions?: string;
  controlMappingSources: Array<CreateControlMappingSource>;
  tags?: Record<string, string>;
}
export interface CreateControlResponse {
  control?: Control;
}
export type CreatedBy = string;

export interface CreateDelegationRequest {
  comment?: string;
  controlSetId?: string;
  roleArn?: string;
  roleType?: RoleType;
}
export type CreateDelegationRequests = Array<CreateDelegationRequest>;
export type DataSourceType =
  | "AWS_CLOUDTRAIL"
  | "AWS_CONFIG"
  | "AWS_SECURITY_HUB"
  | "AWS_API_CALL"
  | "MANUAL";
export interface DefaultExportDestination {
  destinationType?: ExportDestinationType;
  destination?: string;
}
export interface Delegation {
  id?: string;
  assessmentName?: string;
  assessmentId?: string;
  status?: DelegationStatus;
  roleArn?: string;
  roleType?: RoleType;
  creationTime?: Date | string;
  lastUpdated?: Date | string;
  controlSetId?: string;
  comment?: string;
  createdBy?: string;
}
export type DelegationComment = string;

export type DelegationIds = Array<string>;
export interface DelegationMetadata {
  id?: string;
  assessmentName?: string;
  assessmentId?: string;
  status?: DelegationStatus;
  roleArn?: string;
  creationTime?: Date | string;
  controlSetName?: string;
}
export type DelegationMetadataList = Array<DelegationMetadata>;
export type Delegations = Array<Delegation>;
export type DelegationStatus = "IN_PROGRESS" | "UNDER_REVIEW" | "COMPLETE";
export interface DeleteAssessmentFrameworkRequest {
  frameworkId: string;
}
export interface DeleteAssessmentFrameworkResponse {}
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
export interface DeleteAssessmentRequest {
  assessmentId: string;
}
export interface DeleteAssessmentResponse {}
export interface DeleteControlRequest {
  controlId: string;
}
export interface DeleteControlResponse {}
export type DeleteResources = "ALL" | "DEFAULT";
export interface DeregisterAccountRequest {}
export interface DeregisterAccountResponse {
  status?: AccountStatus;
}
export interface DeregisterOrganizationAdminAccountRequest {
  adminAccountId?: string;
}
export interface DeregisterOrganizationAdminAccountResponse {}
export interface DeregistrationPolicy {
  deleteResources?: DeleteResources;
}
export interface DisassociateAssessmentReportEvidenceFolderRequest {
  assessmentId: string;
  evidenceFolderId: string;
}
export interface DisassociateAssessmentReportEvidenceFolderResponse {}
export type EmailAddress = string;

export type ErrorCode = string;

export type ErrorMessage = string;

export type EventName = string;

export interface Evidence {
  dataSource?: string;
  evidenceAwsAccountId?: string;
  time?: Date | string;
  eventSource?: string;
  eventName?: string;
  evidenceByType?: string;
  resourcesIncluded?: Array<Resource>;
  attributes?: Record<string, string>;
  iamId?: string;
  complianceCheck?: string;
  awsOrganization?: string;
  awsAccountId?: string;
  evidenceFolderId?: string;
  id?: string;
  assessmentReportSelection?: string;
}
export type EvidenceAttributeKey = string;

export type EvidenceAttributes = Record<string, string>;
export type EvidenceAttributeValue = string;

export type EvidenceFinderBackfillStatus =
  | "NOT_STARTED"
  | "IN_PROGRESS"
  | "COMPLETED";
export interface EvidenceFinderEnablement {
  eventDataStoreArn?: string;
  enablementStatus?: EvidenceFinderEnablementStatus;
  backfillStatus?: EvidenceFinderBackfillStatus;
  error?: string;
}
export type EvidenceFinderEnablementStatus =
  | "ENABLED"
  | "DISABLED"
  | "ENABLE_IN_PROGRESS"
  | "DISABLE_IN_PROGRESS";
export type EvidenceIds = Array<string>;
export interface EvidenceInsights {
  noncompliantEvidenceCount?: number;
  compliantEvidenceCount?: number;
  inconclusiveEvidenceCount?: number;
}
export type EvidenceList = Array<Evidence>;
export type EvidenceSources = Array<string>;
export type ExportDestinationType = "S3";
export type Filename = string;

export interface Framework {
  arn?: string;
  id?: string;
  name?: string;
  type?: FrameworkType;
  complianceType?: string;
  description?: string;
  logo?: string;
  controlSources?: string;
  controlSets?: Array<ControlSet>;
  createdAt?: Date | string;
  lastUpdatedAt?: Date | string;
  createdBy?: string;
  lastUpdatedBy?: string;
  tags?: Record<string, string>;
}
export type FrameworkDescription = string;

export interface FrameworkMetadata {
  name?: string;
  description?: string;
  logo?: string;
  complianceType?: string;
}
export type FrameworkMetadataList = Array<AssessmentFrameworkMetadata>;
export type FrameworkName = string;

export type FrameworkType = "STANDARD" | "CUSTOM";
export type GenericArn = string;

export interface GetAccountStatusRequest {}
export interface GetAccountStatusResponse {
  status?: AccountStatus;
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
export interface GetAssessmentReportUrlResponse {
  preSignedUrl?: URL;
}
export interface GetAssessmentRequest {
  assessmentId: string;
}
export interface GetAssessmentResponse {
  assessment?: Assessment;
  userRole?: Role;
}
export interface GetChangeLogsRequest {
  assessmentId: string;
  controlSetId?: string;
  controlId?: string;
  nextToken?: string;
  maxResults?: number;
}
export interface GetChangeLogsResponse {
  changeLogs?: Array<ChangeLog>;
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
export interface GetDelegationsResponse {
  delegations?: Array<DelegationMetadata>;
  nextToken?: string;
}
export interface GetEvidenceByEvidenceFolderRequest {
  assessmentId: string;
  controlSetId: string;
  evidenceFolderId: string;
  nextToken?: string;
  maxResults?: number;
}
export interface GetEvidenceByEvidenceFolderResponse {
  evidence?: Array<Evidence>;
  nextToken?: string;
}
export interface GetEvidenceFileUploadUrlRequest {
  fileName: string;
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
export interface GetEvidenceFolderResponse {
  evidenceFolder?: AssessmentEvidenceFolder;
}
export interface GetEvidenceFoldersByAssessmentControlRequest {
  assessmentId: string;
  controlSetId: string;
  controlId: string;
  nextToken?: string;
  maxResults?: number;
}
export interface GetEvidenceFoldersByAssessmentControlResponse {
  evidenceFolders?: Array<AssessmentEvidenceFolder>;
  nextToken?: string;
}
export interface GetEvidenceFoldersByAssessmentRequest {
  assessmentId: string;
  nextToken?: string;
  maxResults?: number;
}
export interface GetEvidenceFoldersByAssessmentResponse {
  evidenceFolders?: Array<AssessmentEvidenceFolder>;
  nextToken?: string;
}
export interface GetEvidenceRequest {
  assessmentId: string;
  controlSetId: string;
  evidenceFolderId: string;
  evidenceId: string;
}
export interface GetEvidenceResponse {
  evidence?: Evidence;
}
export interface GetInsightsByAssessmentRequest {
  assessmentId: string;
}
export interface GetInsightsByAssessmentResponse {
  insights?: InsightsByAssessment;
}
export interface GetInsightsRequest {}
export interface GetInsightsResponse {
  insights?: Insights;
}
export interface GetOrganizationAdminAccountRequest {}
export interface GetOrganizationAdminAccountResponse {
  adminAccountId?: string;
  organizationId?: string;
}
export interface GetServicesInScopeRequest {}
export interface GetServicesInScopeResponse {
  serviceMetadata?: Array<ServiceMetadata>;
}
export interface GetSettingsRequest {
  attribute: SettingAttribute;
}
export interface GetSettingsResponse {
  settings?: Settings;
}
export type HyperlinkName = string;

export type IamArn = string;

export interface Insights {
  activeAssessmentsCount?: number;
  noncompliantEvidenceCount?: number;
  compliantEvidenceCount?: number;
  inconclusiveEvidenceCount?: number;
  assessmentControlsCountByNoncompliantEvidence?: number;
  totalAssessmentControlsCount?: number;
  lastUpdated?: Date | string;
}
export interface InsightsByAssessment {
  noncompliantEvidenceCount?: number;
  compliantEvidenceCount?: number;
  inconclusiveEvidenceCount?: number;
  assessmentControlsCountByNoncompliantEvidence?: number;
  totalAssessmentControlsCount?: number;
  lastUpdated?: Date | string;
}
export type Integer = number;

export declare class InternalServerException extends EffectData.TaggedError(
  "InternalServerException",
)<{
  readonly message: string;
}> {}
export type KeywordInputType =
  | "SELECT_FROM_LIST"
  | "UPLOAD_FILE"
  | "INPUT_TEXT";
export type Keywords = Array<string>;
export type KeywordValue = string;

export type KmsKey = string;

export type LastUpdatedBy = string;

export interface ListAssessmentControlInsightsByControlDomainRequest {
  controlDomainId: string;
  assessmentId: string;
  nextToken?: string;
  maxResults?: number;
}
export interface ListAssessmentControlInsightsByControlDomainResponse {
  controlInsightsByAssessment?: Array<ControlInsightsMetadataByAssessmentItem>;
  nextToken?: string;
}
export interface ListAssessmentFrameworkShareRequestsRequest {
  requestType: ShareRequestType;
  nextToken?: string;
  maxResults?: number;
}
export interface ListAssessmentFrameworkShareRequestsResponse {
  assessmentFrameworkShareRequests?: Array<AssessmentFrameworkShareRequest>;
  nextToken?: string;
}
export interface ListAssessmentFrameworksRequest {
  frameworkType: FrameworkType;
  nextToken?: string;
  maxResults?: number;
}
export interface ListAssessmentFrameworksResponse {
  frameworkMetadataList?: Array<AssessmentFrameworkMetadata>;
  nextToken?: string;
}
export type ListAssessmentMetadata = Array<AssessmentMetadataItem>;
export interface ListAssessmentReportsRequest {
  nextToken?: string;
  maxResults?: number;
}
export interface ListAssessmentReportsResponse {
  assessmentReports?: Array<AssessmentReportMetadata>;
  nextToken?: string;
}
export interface ListAssessmentsRequest {
  status?: AssessmentStatus;
  nextToken?: string;
  maxResults?: number;
}
export interface ListAssessmentsResponse {
  assessmentMetadata?: Array<AssessmentMetadataItem>;
  nextToken?: string;
}
export interface ListControlDomainInsightsByAssessmentRequest {
  assessmentId: string;
  nextToken?: string;
  maxResults?: number;
}
export interface ListControlDomainInsightsByAssessmentResponse {
  controlDomainInsights?: Array<ControlDomainInsights>;
  nextToken?: string;
}
export interface ListControlDomainInsightsRequest {
  nextToken?: string;
  maxResults?: number;
}
export interface ListControlDomainInsightsResponse {
  controlDomainInsights?: Array<ControlDomainInsights>;
  nextToken?: string;
}
export interface ListControlInsightsByControlDomainRequest {
  controlDomainId: string;
  nextToken?: string;
  maxResults?: number;
}
export interface ListControlInsightsByControlDomainResponse {
  controlInsightsMetadata?: Array<ControlInsightsMetadataItem>;
  nextToken?: string;
}
export interface ListControlsRequest {
  controlType: ControlType;
  nextToken?: string;
  maxResults?: number;
  controlCatalogId?: string;
}
export interface ListControlsResponse {
  controlMetadataList?: Array<ControlMetadata>;
  nextToken?: string;
}
export interface ListKeywordsForDataSourceRequest {
  source: DataSourceType;
  nextToken?: string;
  maxResults?: number;
}
export interface ListKeywordsForDataSourceResponse {
  keywords?: Array<string>;
  nextToken?: string;
}
export interface ListNotificationsRequest {
  nextToken?: string;
  maxResults?: number;
}
export interface ListNotificationsResponse {
  notifications?: Array<Notification>;
  nextToken?: string;
}
export interface ListTagsForResourceRequest {
  resourceArn: string;
}
export interface ListTagsForResourceResponse {
  tags?: Record<string, string>;
}
export interface ManualEvidence {
  s3ResourcePath?: string;
  textResponse?: string;
  evidenceFileName?: string;
}
export type ManualEvidenceList = Array<ManualEvidence>;
export type ManualEvidenceLocalFileName = string;

export type ManualEvidenceTextResponse = string;

export type MaxResults = number;

export type NonEmptyString = string;

export interface Notification {
  id?: string;
  assessmentId?: string;
  assessmentName?: string;
  controlSetId?: string;
  controlSetName?: string;
  description?: string;
  eventTime?: Date | string;
  source?: string;
}
export type Notifications = Array<Notification>;
export type NullableInteger = number;

export type ObjectTypeEnum =
  | "ASSESSMENT"
  | "CONTROL_SET"
  | "CONTROL"
  | "DELEGATION"
  | "ASSESSMENT_REPORT";
export type organizationId = string;

export type QueryStatement = string;

export type Region = string;

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
export interface Resource {
  arn?: string;
  value?: string;
  complianceCheck?: string;
}
export declare class ResourceNotFoundException extends EffectData.TaggedError(
  "ResourceNotFoundException",
)<{
  readonly message: string;
  readonly resourceId: string;
  readonly resourceType: string;
}> {}
export type Resources = Array<Resource>;
export interface Role {
  roleType: RoleType;
  roleArn: string;
}
export type Roles = Array<Role>;
export type RoleType = "PROCESS_OWNER" | "RESOURCE_OWNER";
export type S3Url = string;

export interface Scope {
  awsAccounts?: Array<AWSAccount>;
  awsServices?: Array<AWSService>;
}
export interface ServiceMetadata {
  name?: string;
  displayName?: string;
  description?: string;
  category?: string;
}
export type ServiceMetadataList = Array<ServiceMetadata>;
export declare class ServiceQuotaExceededException extends EffectData.TaggedError(
  "ServiceQuotaExceededException",
)<{
  readonly message: string;
}> {}
export type SettingAttribute =
  | "ALL"
  | "IS_AWS_ORG_ENABLED"
  | "SNS_TOPIC"
  | "DEFAULT_ASSESSMENT_REPORTS_DESTINATION"
  | "DEFAULT_PROCESS_OWNERS"
  | "EVIDENCE_FINDER_ENABLEMENT"
  | "DEREGISTRATION_POLICY"
  | "DEFAULT_EXPORT_DESTINATION";
export interface Settings {
  isAwsOrgEnabled?: boolean;
  snsTopic?: string;
  defaultAssessmentReportsDestination?: AssessmentReportsDestination;
  defaultProcessOwners?: Array<Role>;
  kmsKey?: string;
  evidenceFinderEnablement?: EvidenceFinderEnablement;
  deregistrationPolicy?: DeregistrationPolicy;
  defaultExportDestination?: DefaultExportDestination;
}
export type ShareRequestAction = "ACCEPT" | "DECLINE" | "REVOKE";
export type ShareRequestComment = string;

export type ShareRequestStatus =
  | "ACTIVE"
  | "REPLICATING"
  | "SHARED"
  | "EXPIRING"
  | "FAILED"
  | "EXPIRED"
  | "DECLINED"
  | "REVOKED";
export type ShareRequestType = "SENT" | "RECEIVED";
export type SnsArn = string;

export type SNSTopic = string;

export type SourceDescription = string;

export type SourceFrequency = "DAILY" | "WEEKLY" | "MONTHLY";
export interface SourceKeyword {
  keywordInputType?: KeywordInputType;
  keywordValue?: string;
}
export type SourceName = string;

export type SourceSetUpOption =
  | "SYSTEM_CONTROLS_MAPPING"
  | "PROCEDURAL_CONTROLS_MAPPING";
export type SourceType =
  | "AWS_CLOUDTRAIL"
  | "AWS_CONFIG"
  | "AWS_SECURITY_HUB"
  | "AWS_API_CALL"
  | "MANUAL"
  | "COMMON_CONTROL"
  | "CORE_CONTROL";
export interface StartAssessmentFrameworkShareRequest {
  frameworkId: string;
  destinationAccount: string;
  destinationRegion: string;
  comment?: string;
}
export interface StartAssessmentFrameworkShareResponse {
  assessmentFrameworkShareRequest?: AssessmentFrameworkShareRequest;
}
export type AuditmanagerString = string;

export type TagKey = string;

export type TagKeyList = Array<string>;
export type TagMap = Record<string, string>;
export interface TagResourceRequest {
  resourceArn: string;
  tags: Record<string, string>;
}
export interface TagResourceResponse {}
export type TagValue = string;

export type TestingInformation = string;

export declare class ThrottlingException extends EffectData.TaggedError(
  "ThrottlingException",
)<{
  readonly message: string;
}> {}
export type Timestamp = Date | string;

export type TimestampUUID = string;

export type Token = string;

export type TroubleshootingText = string;

export interface UntagResourceRequest {
  resourceArn: string;
  tagKeys: Array<string>;
}
export interface UntagResourceResponse {}
export interface UpdateAssessmentControlRequest {
  assessmentId: string;
  controlSetId: string;
  controlId: string;
  controlStatus?: ControlStatus;
  commentBody?: string;
}
export interface UpdateAssessmentControlResponse {
  control?: AssessmentControl;
}
export interface UpdateAssessmentControlSetStatusRequest {
  assessmentId: string;
  controlSetId: string;
  status: ControlSetStatus;
  comment: string;
}
export interface UpdateAssessmentControlSetStatusResponse {
  controlSet?: AssessmentControlSet;
}
export interface UpdateAssessmentFrameworkControlSet {
  id?: string;
  name: string;
  controls: Array<CreateAssessmentFrameworkControl>;
}
export type UpdateAssessmentFrameworkControlSets =
  Array<UpdateAssessmentFrameworkControlSet>;
export interface UpdateAssessmentFrameworkRequest {
  frameworkId: string;
  name: string;
  description?: string;
  complianceType?: string;
  controlSets: Array<UpdateAssessmentFrameworkControlSet>;
}
export interface UpdateAssessmentFrameworkResponse {
  framework?: Framework;
}
export interface UpdateAssessmentFrameworkShareRequest {
  requestId: string;
  requestType: ShareRequestType;
  action: ShareRequestAction;
}
export interface UpdateAssessmentFrameworkShareResponse {
  assessmentFrameworkShareRequest?: AssessmentFrameworkShareRequest;
}
export interface UpdateAssessmentRequest {
  assessmentId: string;
  assessmentName?: string;
  assessmentDescription?: string;
  scope: Scope;
  assessmentReportsDestination?: AssessmentReportsDestination;
  roles?: Array<Role>;
}
export interface UpdateAssessmentResponse {
  assessment?: Assessment;
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
  description?: string;
  testingInformation?: string;
  actionPlanTitle?: string;
  actionPlanInstructions?: string;
  controlMappingSources: Array<ControlMappingSource>;
}
export interface UpdateControlResponse {
  control?: Control;
}
export interface UpdateSettingsRequest {
  snsTopic?: string;
  defaultAssessmentReportsDestination?: AssessmentReportsDestination;
  defaultProcessOwners?: Array<Role>;
  kmsKey?: string;
  evidenceFinderEnabled?: boolean;
  deregistrationPolicy?: DeregistrationPolicy;
  defaultExportDestination?: DefaultExportDestination;
}
export interface UpdateSettingsResponse {
  settings?: Settings;
}
export interface URL {
  hyperlinkName?: string;
  link?: string;
}
export type UrlLink = string;

export type Username = string;

export type UUID = string;

export interface ValidateAssessmentReportIntegrityRequest {
  s3RelativePath: string;
}
export interface ValidateAssessmentReportIntegrityResponse {
  signatureValid?: boolean;
  signatureAlgorithm?: string;
  signatureDateTime?: string;
  signatureKeyId?: string;
  validationErrors?: Array<string>;
}
export type ValidationErrors = Array<string>;
export declare class ValidationException extends EffectData.TaggedError(
  "ValidationException",
)<{
  readonly message: string;
  readonly reason?: ValidationExceptionReason;
  readonly fields?: Array<ValidationExceptionField>;
}> {}
export interface ValidationExceptionField {
  name: string;
  message: string;
}
export type ValidationExceptionFieldList = Array<ValidationExceptionField>;
export type ValidationExceptionReason =
  | "UNKNOWN_OPERATION"
  | "CANNOT_PARSE"
  | "FIELD_VALIDATION_FAILED"
  | "OTHER";
export declare namespace AssociateAssessmentReportEvidenceFolder {
  export type Input = AssociateAssessmentReportEvidenceFolderRequest;
  export type Output = AssociateAssessmentReportEvidenceFolderResponse;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ValidationException
    | CommonAwsError;
}

export declare namespace BatchAssociateAssessmentReportEvidence {
  export type Input = BatchAssociateAssessmentReportEvidenceRequest;
  export type Output = BatchAssociateAssessmentReportEvidenceResponse;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ValidationException
    | CommonAwsError;
}

export declare namespace BatchCreateDelegationByAssessment {
  export type Input = BatchCreateDelegationByAssessmentRequest;
  export type Output = BatchCreateDelegationByAssessmentResponse;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ValidationException
    | CommonAwsError;
}

export declare namespace BatchDeleteDelegationByAssessment {
  export type Input = BatchDeleteDelegationByAssessmentRequest;
  export type Output = BatchDeleteDelegationByAssessmentResponse;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ValidationException
    | CommonAwsError;
}

export declare namespace BatchDisassociateAssessmentReportEvidence {
  export type Input = BatchDisassociateAssessmentReportEvidenceRequest;
  export type Output = BatchDisassociateAssessmentReportEvidenceResponse;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ValidationException
    | CommonAwsError;
}

export declare namespace BatchImportEvidenceToAssessmentControl {
  export type Input = BatchImportEvidenceToAssessmentControlRequest;
  export type Output = BatchImportEvidenceToAssessmentControlResponse;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace CreateAssessment {
  export type Input = CreateAssessmentRequest;
  export type Output = CreateAssessmentResponse;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ServiceQuotaExceededException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace CreateAssessmentFramework {
  export type Input = CreateAssessmentFrameworkRequest;
  export type Output = CreateAssessmentFrameworkResponse;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ServiceQuotaExceededException
    | ValidationException
    | CommonAwsError;
}

export declare namespace CreateAssessmentReport {
  export type Input = CreateAssessmentReportRequest;
  export type Output = CreateAssessmentReportResponse;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ValidationException
    | CommonAwsError;
}

export declare namespace CreateControl {
  export type Input = CreateControlRequest;
  export type Output = CreateControlResponse;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ServiceQuotaExceededException
    | ValidationException
    | CommonAwsError;
}

export declare namespace DeleteAssessment {
  export type Input = DeleteAssessmentRequest;
  export type Output = DeleteAssessmentResponse;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ValidationException
    | CommonAwsError;
}

export declare namespace DeleteAssessmentFramework {
  export type Input = DeleteAssessmentFrameworkRequest;
  export type Output = DeleteAssessmentFrameworkResponse;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ValidationException
    | CommonAwsError;
}

export declare namespace DeleteAssessmentFrameworkShare {
  export type Input = DeleteAssessmentFrameworkShareRequest;
  export type Output = DeleteAssessmentFrameworkShareResponse;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ValidationException
    | CommonAwsError;
}

export declare namespace DeleteAssessmentReport {
  export type Input = DeleteAssessmentReportRequest;
  export type Output = DeleteAssessmentReportResponse;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ValidationException
    | CommonAwsError;
}

export declare namespace DeleteControl {
  export type Input = DeleteControlRequest;
  export type Output = DeleteControlResponse;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ValidationException
    | CommonAwsError;
}

export declare namespace DeregisterAccount {
  export type Input = DeregisterAccountRequest;
  export type Output = DeregisterAccountResponse;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ValidationException
    | CommonAwsError;
}

export declare namespace DeregisterOrganizationAdminAccount {
  export type Input = DeregisterOrganizationAdminAccountRequest;
  export type Output = DeregisterOrganizationAdminAccountResponse;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ValidationException
    | CommonAwsError;
}

export declare namespace DisassociateAssessmentReportEvidenceFolder {
  export type Input = DisassociateAssessmentReportEvidenceFolderRequest;
  export type Output = DisassociateAssessmentReportEvidenceFolderResponse;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ValidationException
    | CommonAwsError;
}

export declare namespace GetAccountStatus {
  export type Input = GetAccountStatusRequest;
  export type Output = GetAccountStatusResponse;
  export type Error = InternalServerException | CommonAwsError;
}

export declare namespace GetAssessment {
  export type Input = GetAssessmentRequest;
  export type Output = GetAssessmentResponse;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ValidationException
    | CommonAwsError;
}

export declare namespace GetAssessmentFramework {
  export type Input = GetAssessmentFrameworkRequest;
  export type Output = GetAssessmentFrameworkResponse;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ValidationException
    | CommonAwsError;
}

export declare namespace GetAssessmentReportUrl {
  export type Input = GetAssessmentReportUrlRequest;
  export type Output = GetAssessmentReportUrlResponse;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ValidationException
    | CommonAwsError;
}

export declare namespace GetChangeLogs {
  export type Input = GetChangeLogsRequest;
  export type Output = GetChangeLogsResponse;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ValidationException
    | CommonAwsError;
}

export declare namespace GetControl {
  export type Input = GetControlRequest;
  export type Output = GetControlResponse;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ValidationException
    | CommonAwsError;
}

export declare namespace GetDelegations {
  export type Input = GetDelegationsRequest;
  export type Output = GetDelegationsResponse;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ValidationException
    | CommonAwsError;
}

export declare namespace GetEvidence {
  export type Input = GetEvidenceRequest;
  export type Output = GetEvidenceResponse;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ValidationException
    | CommonAwsError;
}

export declare namespace GetEvidenceByEvidenceFolder {
  export type Input = GetEvidenceByEvidenceFolderRequest;
  export type Output = GetEvidenceByEvidenceFolderResponse;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ValidationException
    | CommonAwsError;
}

export declare namespace GetEvidenceFileUploadUrl {
  export type Input = GetEvidenceFileUploadUrlRequest;
  export type Output = GetEvidenceFileUploadUrlResponse;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace GetEvidenceFolder {
  export type Input = GetEvidenceFolderRequest;
  export type Output = GetEvidenceFolderResponse;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ValidationException
    | CommonAwsError;
}

export declare namespace GetEvidenceFoldersByAssessment {
  export type Input = GetEvidenceFoldersByAssessmentRequest;
  export type Output = GetEvidenceFoldersByAssessmentResponse;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ValidationException
    | CommonAwsError;
}

export declare namespace GetEvidenceFoldersByAssessmentControl {
  export type Input = GetEvidenceFoldersByAssessmentControlRequest;
  export type Output = GetEvidenceFoldersByAssessmentControlResponse;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ValidationException
    | CommonAwsError;
}

export declare namespace GetInsights {
  export type Input = GetInsightsRequest;
  export type Output = GetInsightsResponse;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | CommonAwsError;
}

export declare namespace GetInsightsByAssessment {
  export type Input = GetInsightsByAssessmentRequest;
  export type Output = GetInsightsByAssessmentResponse;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ValidationException
    | CommonAwsError;
}

export declare namespace GetOrganizationAdminAccount {
  export type Input = GetOrganizationAdminAccountRequest;
  export type Output = GetOrganizationAdminAccountResponse;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ValidationException
    | CommonAwsError;
}

export declare namespace GetServicesInScope {
  export type Input = GetServicesInScopeRequest;
  export type Output = GetServicesInScopeResponse;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ValidationException
    | CommonAwsError;
}

export declare namespace GetSettings {
  export type Input = GetSettingsRequest;
  export type Output = GetSettingsResponse;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | CommonAwsError;
}

export declare namespace ListAssessmentControlInsightsByControlDomain {
  export type Input = ListAssessmentControlInsightsByControlDomainRequest;
  export type Output = ListAssessmentControlInsightsByControlDomainResponse;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ValidationException
    | CommonAwsError;
}

export declare namespace ListAssessmentFrameworks {
  export type Input = ListAssessmentFrameworksRequest;
  export type Output = ListAssessmentFrameworksResponse;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ValidationException
    | CommonAwsError;
}

export declare namespace ListAssessmentFrameworkShareRequests {
  export type Input = ListAssessmentFrameworkShareRequestsRequest;
  export type Output = ListAssessmentFrameworkShareRequestsResponse;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ValidationException
    | CommonAwsError;
}

export declare namespace ListAssessmentReports {
  export type Input = ListAssessmentReportsRequest;
  export type Output = ListAssessmentReportsResponse;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ValidationException
    | CommonAwsError;
}

export declare namespace ListAssessments {
  export type Input = ListAssessmentsRequest;
  export type Output = ListAssessmentsResponse;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ValidationException
    | CommonAwsError;
}

export declare namespace ListControlDomainInsights {
  export type Input = ListControlDomainInsightsRequest;
  export type Output = ListControlDomainInsightsResponse;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ValidationException
    | CommonAwsError;
}

export declare namespace ListControlDomainInsightsByAssessment {
  export type Input = ListControlDomainInsightsByAssessmentRequest;
  export type Output = ListControlDomainInsightsByAssessmentResponse;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ValidationException
    | CommonAwsError;
}

export declare namespace ListControlInsightsByControlDomain {
  export type Input = ListControlInsightsByControlDomainRequest;
  export type Output = ListControlInsightsByControlDomainResponse;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ValidationException
    | CommonAwsError;
}

export declare namespace ListControls {
  export type Input = ListControlsRequest;
  export type Output = ListControlsResponse;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ValidationException
    | CommonAwsError;
}

export declare namespace ListKeywordsForDataSource {
  export type Input = ListKeywordsForDataSourceRequest;
  export type Output = ListKeywordsForDataSourceResponse;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ValidationException
    | CommonAwsError;
}

export declare namespace ListNotifications {
  export type Input = ListNotificationsRequest;
  export type Output = ListNotificationsResponse;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ValidationException
    | CommonAwsError;
}

export declare namespace ListTagsForResource {
  export type Input = ListTagsForResourceRequest;
  export type Output = ListTagsForResourceResponse;
  export type Error =
    | InternalServerException
    | ResourceNotFoundException
    | ValidationException
    | CommonAwsError;
}

export declare namespace RegisterAccount {
  export type Input = RegisterAccountRequest;
  export type Output = RegisterAccountResponse;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace RegisterOrganizationAdminAccount {
  export type Input = RegisterOrganizationAdminAccountRequest;
  export type Output = RegisterOrganizationAdminAccountResponse;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ValidationException
    | CommonAwsError;
}

export declare namespace StartAssessmentFrameworkShare {
  export type Input = StartAssessmentFrameworkShareRequest;
  export type Output = StartAssessmentFrameworkShareResponse;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ValidationException
    | CommonAwsError;
}

export declare namespace TagResource {
  export type Input = TagResourceRequest;
  export type Output = TagResourceResponse;
  export type Error =
    | InternalServerException
    | ResourceNotFoundException
    | ValidationException
    | CommonAwsError;
}

export declare namespace UntagResource {
  export type Input = UntagResourceRequest;
  export type Output = UntagResourceResponse;
  export type Error =
    | InternalServerException
    | ResourceNotFoundException
    | ValidationException
    | CommonAwsError;
}

export declare namespace UpdateAssessment {
  export type Input = UpdateAssessmentRequest;
  export type Output = UpdateAssessmentResponse;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ServiceQuotaExceededException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace UpdateAssessmentControl {
  export type Input = UpdateAssessmentControlRequest;
  export type Output = UpdateAssessmentControlResponse;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ValidationException
    | CommonAwsError;
}

export declare namespace UpdateAssessmentControlSetStatus {
  export type Input = UpdateAssessmentControlSetStatusRequest;
  export type Output = UpdateAssessmentControlSetStatusResponse;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ValidationException
    | CommonAwsError;
}

export declare namespace UpdateAssessmentFramework {
  export type Input = UpdateAssessmentFrameworkRequest;
  export type Output = UpdateAssessmentFrameworkResponse;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ValidationException
    | CommonAwsError;
}

export declare namespace UpdateAssessmentFrameworkShare {
  export type Input = UpdateAssessmentFrameworkShareRequest;
  export type Output = UpdateAssessmentFrameworkShareResponse;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ServiceQuotaExceededException
    | ValidationException
    | CommonAwsError;
}

export declare namespace UpdateAssessmentStatus {
  export type Input = UpdateAssessmentStatusRequest;
  export type Output = UpdateAssessmentStatusResponse;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ServiceQuotaExceededException
    | ValidationException
    | CommonAwsError;
}

export declare namespace UpdateControl {
  export type Input = UpdateControlRequest;
  export type Output = UpdateControlResponse;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ValidationException
    | CommonAwsError;
}

export declare namespace UpdateSettings {
  export type Input = UpdateSettingsRequest;
  export type Output = UpdateSettingsResponse;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ValidationException
    | CommonAwsError;
}

export declare namespace ValidateAssessmentReportIntegrity {
  export type Input = ValidateAssessmentReportIntegrityRequest;
  export type Output = ValidateAssessmentReportIntegrityResponse;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ValidationException
    | CommonAwsError;
}
