import type { Effect, Data } from "effect";
import type { CommonAwsError } from "../client.ts";

export interface AccessAnalyzer {
  applyArchiveRule(
    input: ApplyArchiveRuleRequest,
  ): Effect.Effect<
    {},
    AccessDeniedException | InternalServerException | ResourceNotFoundException | ThrottlingException | ValidationException | CommonAwsError
  >;
  cancelPolicyGeneration(
    input: CancelPolicyGenerationRequest,
  ): Effect.Effect<
    CancelPolicyGenerationResponse,
    AccessDeniedException | InternalServerException | ThrottlingException | ValidationException | CommonAwsError
  >;
  checkAccessNotGranted(
    input: CheckAccessNotGrantedRequest,
  ): Effect.Effect<
    CheckAccessNotGrantedResponse,
    AccessDeniedException | InternalServerException | InvalidParameterException | ThrottlingException | UnprocessableEntityException | ValidationException | CommonAwsError
  >;
  checkNoNewAccess(
    input: CheckNoNewAccessRequest,
  ): Effect.Effect<
    CheckNoNewAccessResponse,
    AccessDeniedException | InternalServerException | InvalidParameterException | ThrottlingException | UnprocessableEntityException | ValidationException | CommonAwsError
  >;
  checkNoPublicAccess(
    input: CheckNoPublicAccessRequest,
  ): Effect.Effect<
    CheckNoPublicAccessResponse,
    AccessDeniedException | InternalServerException | InvalidParameterException | ThrottlingException | UnprocessableEntityException | ValidationException | CommonAwsError
  >;
  createAccessPreview(
    input: CreateAccessPreviewRequest,
  ): Effect.Effect<
    CreateAccessPreviewResponse,
    AccessDeniedException | ConflictException | InternalServerException | ResourceNotFoundException | ServiceQuotaExceededException | ThrottlingException | ValidationException | CommonAwsError
  >;
  createAnalyzer(
    input: CreateAnalyzerRequest,
  ): Effect.Effect<
    CreateAnalyzerResponse,
    AccessDeniedException | ConflictException | InternalServerException | ServiceQuotaExceededException | ThrottlingException | ValidationException | CommonAwsError
  >;
  createArchiveRule(
    input: CreateArchiveRuleRequest,
  ): Effect.Effect<
    {},
    AccessDeniedException | ConflictException | InternalServerException | ResourceNotFoundException | ServiceQuotaExceededException | ThrottlingException | ValidationException | CommonAwsError
  >;
  deleteAnalyzer(
    input: DeleteAnalyzerRequest,
  ): Effect.Effect<
    {},
    AccessDeniedException | InternalServerException | ResourceNotFoundException | ThrottlingException | ValidationException | CommonAwsError
  >;
  deleteArchiveRule(
    input: DeleteArchiveRuleRequest,
  ): Effect.Effect<
    {},
    AccessDeniedException | InternalServerException | ResourceNotFoundException | ThrottlingException | ValidationException | CommonAwsError
  >;
  generateFindingRecommendation(
    input: GenerateFindingRecommendationRequest,
  ): Effect.Effect<
    {},
    AccessDeniedException | InternalServerException | ThrottlingException | ValidationException | CommonAwsError
  >;
  getAccessPreview(
    input: GetAccessPreviewRequest,
  ): Effect.Effect<
    GetAccessPreviewResponse,
    AccessDeniedException | InternalServerException | ResourceNotFoundException | ThrottlingException | ValidationException | CommonAwsError
  >;
  getAnalyzedResource(
    input: GetAnalyzedResourceRequest,
  ): Effect.Effect<
    GetAnalyzedResourceResponse,
    AccessDeniedException | InternalServerException | ResourceNotFoundException | ThrottlingException | ValidationException | CommonAwsError
  >;
  getAnalyzer(
    input: GetAnalyzerRequest,
  ): Effect.Effect<
    GetAnalyzerResponse,
    AccessDeniedException | InternalServerException | ResourceNotFoundException | ThrottlingException | ValidationException | CommonAwsError
  >;
  getArchiveRule(
    input: GetArchiveRuleRequest,
  ): Effect.Effect<
    GetArchiveRuleResponse,
    AccessDeniedException | InternalServerException | ResourceNotFoundException | ThrottlingException | ValidationException | CommonAwsError
  >;
  getFinding(
    input: GetFindingRequest,
  ): Effect.Effect<
    GetFindingResponse,
    AccessDeniedException | InternalServerException | ResourceNotFoundException | ThrottlingException | ValidationException | CommonAwsError
  >;
  getFindingRecommendation(
    input: GetFindingRecommendationRequest,
  ): Effect.Effect<
    GetFindingRecommendationResponse,
    AccessDeniedException | InternalServerException | ResourceNotFoundException | ThrottlingException | ValidationException | CommonAwsError
  >;
  getFindingV2(
    input: GetFindingV2Request,
  ): Effect.Effect<
    GetFindingV2Response,
    AccessDeniedException | InternalServerException | ResourceNotFoundException | ThrottlingException | ValidationException | CommonAwsError
  >;
  getFindingsStatistics(
    input: GetFindingsStatisticsRequest,
  ): Effect.Effect<
    GetFindingsStatisticsResponse,
    AccessDeniedException | InternalServerException | ResourceNotFoundException | ThrottlingException | ValidationException | CommonAwsError
  >;
  getGeneratedPolicy(
    input: GetGeneratedPolicyRequest,
  ): Effect.Effect<
    GetGeneratedPolicyResponse,
    AccessDeniedException | InternalServerException | ThrottlingException | ValidationException | CommonAwsError
  >;
  listAccessPreviewFindings(
    input: ListAccessPreviewFindingsRequest,
  ): Effect.Effect<
    ListAccessPreviewFindingsResponse,
    AccessDeniedException | ConflictException | InternalServerException | ResourceNotFoundException | ThrottlingException | ValidationException | CommonAwsError
  >;
  listAccessPreviews(
    input: ListAccessPreviewsRequest,
  ): Effect.Effect<
    ListAccessPreviewsResponse,
    AccessDeniedException | InternalServerException | ResourceNotFoundException | ThrottlingException | ValidationException | CommonAwsError
  >;
  listAnalyzedResources(
    input: ListAnalyzedResourcesRequest,
  ): Effect.Effect<
    ListAnalyzedResourcesResponse,
    AccessDeniedException | InternalServerException | ResourceNotFoundException | ThrottlingException | ValidationException | CommonAwsError
  >;
  listAnalyzers(
    input: ListAnalyzersRequest,
  ): Effect.Effect<
    ListAnalyzersResponse,
    AccessDeniedException | InternalServerException | ThrottlingException | ValidationException | CommonAwsError
  >;
  listArchiveRules(
    input: ListArchiveRulesRequest,
  ): Effect.Effect<
    ListArchiveRulesResponse,
    AccessDeniedException | InternalServerException | ThrottlingException | ValidationException | CommonAwsError
  >;
  listFindings(
    input: ListFindingsRequest,
  ): Effect.Effect<
    ListFindingsResponse,
    AccessDeniedException | InternalServerException | ResourceNotFoundException | ThrottlingException | ValidationException | CommonAwsError
  >;
  listFindingsV2(
    input: ListFindingsV2Request,
  ): Effect.Effect<
    ListFindingsV2Response,
    AccessDeniedException | InternalServerException | ResourceNotFoundException | ThrottlingException | ValidationException | CommonAwsError
  >;
  listPolicyGenerations(
    input: ListPolicyGenerationsRequest,
  ): Effect.Effect<
    ListPolicyGenerationsResponse,
    AccessDeniedException | InternalServerException | ThrottlingException | ValidationException | CommonAwsError
  >;
  listTagsForResource(
    input: ListTagsForResourceRequest,
  ): Effect.Effect<
    ListTagsForResourceResponse,
    AccessDeniedException | InternalServerException | ResourceNotFoundException | ThrottlingException | ValidationException | CommonAwsError
  >;
  startPolicyGeneration(
    input: StartPolicyGenerationRequest,
  ): Effect.Effect<
    StartPolicyGenerationResponse,
    AccessDeniedException | ConflictException | InternalServerException | ServiceQuotaExceededException | ThrottlingException | ValidationException | CommonAwsError
  >;
  startResourceScan(
    input: StartResourceScanRequest,
  ): Effect.Effect<
    {},
    AccessDeniedException | InternalServerException | ResourceNotFoundException | ThrottlingException | ValidationException | CommonAwsError
  >;
  tagResource(
    input: TagResourceRequest,
  ): Effect.Effect<
    TagResourceResponse,
    AccessDeniedException | InternalServerException | ResourceNotFoundException | ThrottlingException | ValidationException | CommonAwsError
  >;
  untagResource(
    input: UntagResourceRequest,
  ): Effect.Effect<
    UntagResourceResponse,
    AccessDeniedException | InternalServerException | ResourceNotFoundException | ThrottlingException | ValidationException | CommonAwsError
  >;
  updateAnalyzer(
    input: UpdateAnalyzerRequest,
  ): Effect.Effect<
    UpdateAnalyzerResponse,
    AccessDeniedException | ConflictException | InternalServerException | ResourceNotFoundException | ThrottlingException | ValidationException | CommonAwsError
  >;
  updateArchiveRule(
    input: UpdateArchiveRuleRequest,
  ): Effect.Effect<
    {},
    AccessDeniedException | InternalServerException | ResourceNotFoundException | ThrottlingException | ValidationException | CommonAwsError
  >;
  updateFindings(
    input: UpdateFindingsRequest,
  ): Effect.Effect<
    {},
    AccessDeniedException | InternalServerException | ResourceNotFoundException | ThrottlingException | ValidationException | CommonAwsError
  >;
  validatePolicy(
    input: ValidatePolicyRequest,
  ): Effect.Effect<
    ValidatePolicyResponse,
    AccessDeniedException | InternalServerException | ThrottlingException | ValidationException | CommonAwsError
  >;
}

export type Accessanalyzer = AccessAnalyzer;

export interface Access {
  actions?: Array<string>;
  resources?: Array<string>;
}
export type AccessCheckPolicyDocument = string;

export type AccessCheckPolicyType = string;

export type AccessCheckResourceType = string;

export declare class AccessDeniedException extends Data.TaggedError(
  "AccessDeniedException",
)<{
  readonly message: string;
}> {}
export type AccessList = Array<Access>;
export type AccessPointArn = string;

export type AccessPointPolicy = string;

export interface AccessPreview {
  id: string;
  analyzerArn: string;
  configurations: Record<string, Configuration>;
  createdAt: Date | string;
  status: string;
  statusReason?: AccessPreviewStatusReason;
}
export interface AccessPreviewFinding {
  id: string;
  existingFindingId?: string;
  existingFindingStatus?: string;
  principal?: Record<string, string>;
  action?: Array<string>;
  condition?: Record<string, string>;
  resource?: string;
  isPublic?: boolean;
  resourceType: string;
  createdAt: Date | string;
  changeType: string;
  status: string;
  resourceOwnerAccount: string;
  error?: string;
  sources?: Array<FindingSource>;
  resourceControlPolicyRestriction?: string;
}
export type AccessPreviewFindingId = string;

export type AccessPreviewFindingsList = Array<AccessPreviewFinding>;
export type AccessPreviewId = string;

export type AccessPreviewsList = Array<AccessPreviewSummary>;
export type AccessPreviewStatus = string;

export interface AccessPreviewStatusReason {
  code: string;
}
export type AccessPreviewStatusReasonCode = string;

export interface AccessPreviewSummary {
  id: string;
  analyzerArn: string;
  createdAt: Date | string;
  status: string;
  statusReason?: AccessPreviewStatusReason;
}
export type AccountAggregations = Array<FindingAggregationAccountDetails>;
export type AccountIdsList = Array<string>;
export type AclCanonicalId = string;

export type AclGrantee = { id: string } | { uri: string };
export type AclPermission = string;

export type AclUri = string;

export type Action = string;

export type ActionList = Array<string>;
export type ActionsList = Array<string>;
export interface AnalysisRule {
  exclusions?: Array<AnalysisRuleCriteria>;
}
export interface AnalysisRuleCriteria {
  accountIds?: Array<string>;
  resourceTags?: Array<Record<string, string>>;
}
export type AnalysisRuleCriteriaList = Array<AnalysisRuleCriteria>;
export interface AnalyzedResource {
  resourceArn: string;
  resourceType: string;
  createdAt: Date | string;
  analyzedAt: Date | string;
  updatedAt: Date | string;
  isPublic: boolean;
  actions?: Array<string>;
  sharedVia?: Array<string>;
  status?: string;
  resourceOwnerAccount: string;
  error?: string;
}
export type AnalyzedResourcesList = Array<AnalyzedResourceSummary>;
export interface AnalyzedResourceSummary {
  resourceArn: string;
  resourceOwnerAccount: string;
  resourceType: string;
}
export type AnalyzerArn = string;

export type AnalyzerConfiguration = { unusedAccess: UnusedAccessConfiguration } | { internalAccess: InternalAccessConfiguration };
export type AnalyzersList = Array<AnalyzerSummary>;
export type AnalyzerStatus = string;

export interface AnalyzerSummary {
  arn: string;
  name: string;
  type: string;
  createdAt: Date | string;
  lastResourceAnalyzed?: string;
  lastResourceAnalyzedAt?: Date | string;
  tags?: Record<string, string>;
  status: string;
  statusReason?: StatusReason;
  configuration?: AnalyzerConfiguration;
}
export interface ApplyArchiveRuleRequest {
  analyzerArn: string;
  ruleName: string;
  clientToken?: string;
}
export type ArchiveRulesList = Array<ArchiveRuleSummary>;
export interface ArchiveRuleSummary {
  ruleName: string;
  filter: Record<string, Criterion>;
  createdAt: Date | string;
  updatedAt: Date | string;
}
export interface CancelPolicyGenerationRequest {
  jobId: string;
}
export interface CancelPolicyGenerationResponse {
}
export interface CheckAccessNotGrantedRequest {
  policyDocument: string;
  access: Array<Access>;
  policyType: string;
}
export interface CheckAccessNotGrantedResponse {
  result?: string;
  message?: string;
  reasons?: Array<ReasonSummary>;
}
export type CheckAccessNotGrantedResult = string;

export interface CheckNoNewAccessRequest {
  newPolicyDocument: string;
  existingPolicyDocument: string;
  policyType: string;
}
export interface CheckNoNewAccessResponse {
  result?: string;
  message?: string;
  reasons?: Array<ReasonSummary>;
}
export type CheckNoNewAccessResult = string;

export interface CheckNoPublicAccessRequest {
  policyDocument: string;
  resourceType: string;
}
export interface CheckNoPublicAccessResponse {
  result?: string;
  message?: string;
  reasons?: Array<ReasonSummary>;
}
export type CheckNoPublicAccessResult = string;

export type CloudTrailArn = string;

export interface CloudTrailDetails {
  trails: Array<Trail>;
  accessRole: string;
  startTime: Date | string;
  endTime?: Date | string;
}
export interface CloudTrailProperties {
  trailProperties: Array<TrailProperties>;
  startTime: Date | string;
  endTime: Date | string;
}
export type ConditionKeyMap = Record<string, string>;
export type Configuration = { ebsSnapshot: EbsSnapshotConfiguration } | { ecrRepository: EcrRepositoryConfiguration } | { iamRole: IamRoleConfiguration } | { efsFileSystem: EfsFileSystemConfiguration } | { kmsKey: KmsKeyConfiguration } | { rdsDbClusterSnapshot: RdsDbClusterSnapshotConfiguration } | { rdsDbSnapshot: RdsDbSnapshotConfiguration } | { secretsManagerSecret: SecretsManagerSecretConfiguration } | { s3Bucket: S3BucketConfiguration } | { snsTopic: SnsTopicConfiguration } | { sqsQueue: SqsQueueConfiguration } | { s3ExpressDirectoryBucket: S3ExpressDirectoryBucketConfiguration } | { dynamodbStream: DynamodbStreamConfiguration } | { dynamodbTable: DynamodbTableConfiguration };
export type ConfigurationsMap = Record<string, Configuration>;
export type ConfigurationsMapKey = string;

export declare class ConflictException extends Data.TaggedError(
  "ConflictException",
)<{
  readonly message: string;
  readonly resourceId: string;
  readonly resourceType: string;
}> {}
export interface CreateAccessPreviewRequest {
  analyzerArn: string;
  configurations: Record<string, Configuration>;
  clientToken?: string;
}
export interface CreateAccessPreviewResponse {
  id: string;
}
export interface CreateAnalyzerRequest {
  analyzerName: string;
  type: string;
  archiveRules?: Array<InlineArchiveRule>;
  tags?: Record<string, string>;
  clientToken?: string;
  configuration?: AnalyzerConfiguration;
}
export interface CreateAnalyzerResponse {
  arn?: string;
}
export interface CreateArchiveRuleRequest {
  analyzerName: string;
  ruleName: string;
  filter: Record<string, Criterion>;
  clientToken?: string;
}
export interface Criterion {
  eq?: Array<string>;
  neq?: Array<string>;
  contains?: Array<string>;
  exists?: boolean;
}
export interface DeleteAnalyzerRequest {
  analyzerName: string;
  clientToken?: string;
}
export interface DeleteArchiveRuleRequest {
  analyzerName: string;
  ruleName: string;
  clientToken?: string;
}
export interface DynamodbStreamConfiguration {
  streamPolicy?: string;
}
export type DynamodbStreamPolicy = string;

export interface DynamodbTableConfiguration {
  tablePolicy?: string;
}
export type DynamodbTablePolicy = string;

export type EbsGroup = string;

export type EbsGroupList = Array<string>;
export interface EbsSnapshotConfiguration {
  userIds?: Array<string>;
  groups?: Array<string>;
  kmsKeyId?: string;
}
export type EbsSnapshotDataEncryptionKeyId = string;

export type EbsUserId = string;

export type EbsUserIdList = Array<string>;
export interface EcrRepositoryConfiguration {
  repositoryPolicy?: string;
}
export type EcrRepositoryPolicy = string;

export interface EfsFileSystemConfiguration {
  fileSystemPolicy?: string;
}
export type EfsFileSystemPolicy = string;

export interface ExternalAccessDetails {
  action?: Array<string>;
  condition: Record<string, string>;
  isPublic?: boolean;
  principal?: Record<string, string>;
  sources?: Array<FindingSource>;
  resourceControlPolicyRestriction?: string;
}
export interface ExternalAccessFindingsStatistics {
  resourceTypeStatistics?: Record<string, ResourceTypeDetails>;
  totalActiveFindings?: number;
  totalArchivedFindings?: number;
  totalResolvedFindings?: number;
}
export type FilterCriteriaMap = Record<string, Criterion>;
export interface Finding {
  id: string;
  principal?: Record<string, string>;
  action?: Array<string>;
  resource?: string;
  isPublic?: boolean;
  resourceType: string;
  condition: Record<string, string>;
  createdAt: Date | string;
  analyzedAt: Date | string;
  updatedAt: Date | string;
  status: string;
  resourceOwnerAccount: string;
  error?: string;
  sources?: Array<FindingSource>;
  resourceControlPolicyRestriction?: string;
}
export interface FindingAggregationAccountDetails {
  account?: string;
  numberOfActiveFindings?: number;
  details?: Record<string, number>;
}
export type FindingAggregationAccountDetailsMap = Record<string, number>;
export type FindingChangeType = string;

export type FindingDetails = { internalAccessDetails: InternalAccessDetails } | { externalAccessDetails: ExternalAccessDetails } | { unusedPermissionDetails: UnusedPermissionDetails } | { unusedIamUserAccessKeyDetails: UnusedIamUserAccessKeyDetails } | { unusedIamRoleDetails: UnusedIamRoleDetails } | { unusedIamUserPasswordDetails: UnusedIamUserPasswordDetails };
export type FindingDetailsList = Array<FindingDetails>;
export type FindingId = string;

export type FindingIdList = Array<string>;
export type FindingsList = Array<FindingSummary>;
export type FindingsListV2 = Array<FindingSummaryV2>;
export interface FindingSource {
  type: string;
  detail?: FindingSourceDetail;
}
export interface FindingSourceDetail {
  accessPointArn?: string;
  accessPointAccount?: string;
}
export type FindingSourceList = Array<FindingSource>;
export type FindingSourceType = string;

export type FindingsStatistics = { externalAccessFindingsStatistics: ExternalAccessFindingsStatistics } | { internalAccessFindingsStatistics: InternalAccessFindingsStatistics } | { unusedAccessFindingsStatistics: UnusedAccessFindingsStatistics };
export type FindingsStatisticsList = Array<FindingsStatistics>;
export type FindingStatus = string;

export type FindingStatusUpdate = string;

export interface FindingSummary {
  id: string;
  principal?: Record<string, string>;
  action?: Array<string>;
  resource?: string;
  isPublic?: boolean;
  resourceType: string;
  condition: Record<string, string>;
  createdAt: Date | string;
  analyzedAt: Date | string;
  updatedAt: Date | string;
  status: string;
  resourceOwnerAccount: string;
  error?: string;
  sources?: Array<FindingSource>;
  resourceControlPolicyRestriction?: string;
}
export interface FindingSummaryV2 {
  analyzedAt: Date | string;
  createdAt: Date | string;
  error?: string;
  id: string;
  resource?: string;
  resourceType: string;
  resourceOwnerAccount: string;
  status: string;
  updatedAt: Date | string;
  findingType?: string;
}
export type FindingType = string;

export interface GeneratedPolicy {
  policy: string;
}
export type GeneratedPolicyList = Array<GeneratedPolicy>;
export interface GeneratedPolicyProperties {
  isComplete?: boolean;
  principalArn: string;
  cloudTrailProperties?: CloudTrailProperties;
}
export interface GeneratedPolicyResult {
  properties: GeneratedPolicyProperties;
  generatedPolicies?: Array<GeneratedPolicy>;
}
export interface GenerateFindingRecommendationRequest {
  analyzerArn: string;
  id: string;
}
export interface GetAccessPreviewRequest {
  accessPreviewId: string;
  analyzerArn: string;
}
export interface GetAccessPreviewResponse {
  accessPreview: AccessPreview;
}
export interface GetAnalyzedResourceRequest {
  analyzerArn: string;
  resourceArn: string;
}
export interface GetAnalyzedResourceResponse {
  resource?: AnalyzedResource;
}
export interface GetAnalyzerRequest {
  analyzerName: string;
}
export interface GetAnalyzerResponse {
  analyzer: AnalyzerSummary;
}
export interface GetArchiveRuleRequest {
  analyzerName: string;
  ruleName: string;
}
export interface GetArchiveRuleResponse {
  archiveRule: ArchiveRuleSummary;
}
export interface GetFindingRecommendationRequest {
  analyzerArn: string;
  id: string;
  maxResults?: number;
  nextToken?: string;
}
export interface GetFindingRecommendationResponse {
  startedAt: Date | string;
  completedAt?: Date | string;
  nextToken?: string;
  error?: RecommendationError;
  resourceArn: string;
  recommendedSteps?: Array<RecommendedStep>;
  recommendationType: string;
  status: string;
}
export interface GetFindingRequest {
  analyzerArn: string;
  id: string;
}
export interface GetFindingResponse {
  finding?: Finding;
}
export interface GetFindingsStatisticsRequest {
  analyzerArn: string;
}
export interface GetFindingsStatisticsResponse {
  findingsStatistics?: Array<FindingsStatistics>;
  lastUpdatedAt?: Date | string;
}
export interface GetFindingV2Request {
  analyzerArn: string;
  id: string;
  maxResults?: number;
  nextToken?: string;
}
export interface GetFindingV2Response {
  analyzedAt: Date | string;
  createdAt: Date | string;
  error?: string;
  id: string;
  nextToken?: string;
  resource?: string;
  resourceType: string;
  resourceOwnerAccount: string;
  status: string;
  updatedAt: Date | string;
  findingDetails: Array<FindingDetails>;
  findingType?: string;
}
export interface GetGeneratedPolicyRequest {
  jobId: string;
  includeResourcePlaceholders?: boolean;
  includeServiceLevelTemplate?: boolean;
}
export interface GetGeneratedPolicyResponse {
  jobDetails: JobDetails;
  generatedPolicyResult: GeneratedPolicyResult;
}
export type GranteePrincipal = string;

export interface IamRoleConfiguration {
  trustPolicy?: string;
}
export type IamTrustPolicy = string;

export interface InlineArchiveRule {
  ruleName: string;
  filter: Record<string, Criterion>;
}
export type InlineArchiveRulesList = Array<InlineArchiveRule>;
export interface InternalAccessAnalysisRule {
  inclusions?: Array<InternalAccessAnalysisRuleCriteria>;
}
export interface InternalAccessAnalysisRuleCriteria {
  accountIds?: Array<string>;
  resourceTypes?: Array<string>;
  resourceArns?: Array<string>;
}
export type InternalAccessAnalysisRuleCriteriaList = Array<InternalAccessAnalysisRuleCriteria>;
export interface InternalAccessConfiguration {
  analysisRule?: InternalAccessAnalysisRule;
}
export interface InternalAccessDetails {
  action?: Array<string>;
  condition?: Record<string, string>;
  principal?: Record<string, string>;
  principalOwnerAccount?: string;
  accessType?: string;
  principalType?: string;
  sources?: Array<FindingSource>;
  resourceControlPolicyRestriction?: string;
  serviceControlPolicyRestriction?: string;
}
export interface InternalAccessFindingsStatistics {
  resourceTypeStatistics?: Record<string, InternalAccessResourceTypeDetails>;
  totalActiveFindings?: number;
  totalArchivedFindings?: number;
  totalResolvedFindings?: number;
}
export interface InternalAccessResourceTypeDetails {
  totalActiveFindings?: number;
  totalResolvedFindings?: number;
  totalArchivedFindings?: number;
}
export type InternalAccessResourceTypeStatisticsMap = Record<string, InternalAccessResourceTypeDetails>;
export type InternalAccessType = string;

export declare class InternalServerException extends Data.TaggedError(
  "InternalServerException",
)<{
  readonly message: string;
  readonly retryAfterSeconds?: number;
}> {}
export interface InternetConfiguration {
}
export declare class InvalidParameterException extends Data.TaggedError(
  "InvalidParameterException",
)<{
  readonly message: string;
}> {}
export type IssueCode = string;

export type IssuingAccount = string;

export interface JobDetails {
  jobId: string;
  status: string;
  startedOn: Date | string;
  completedOn?: Date | string;
  jobError?: JobError;
}
export interface JobError {
  code: string;
  message: string;
}
export type JobErrorCode = string;

export type JobId = string;

export type JobStatus = string;

export type KmsConstraintsKey = string;

export type KmsConstraintsMap = Record<string, string>;
export type KmsConstraintsValue = string;

export interface KmsGrantConfiguration {
  operations: Array<string>;
  granteePrincipal: string;
  retiringPrincipal?: string;
  constraints?: KmsGrantConstraints;
  issuingAccount: string;
}
export type KmsGrantConfigurationsList = Array<KmsGrantConfiguration>;
export interface KmsGrantConstraints {
  encryptionContextEquals?: Record<string, string>;
  encryptionContextSubset?: Record<string, string>;
}
export type KmsGrantOperation = string;

export type KmsGrantOperationsList = Array<string>;
export interface KmsKeyConfiguration {
  keyPolicies?: Record<string, string>;
  grants?: Array<KmsGrantConfiguration>;
}
export type KmsKeyPoliciesMap = Record<string, string>;
export type KmsKeyPolicy = string;

export type LearnMoreLink = string;

export interface ListAccessPreviewFindingsRequest {
  accessPreviewId: string;
  analyzerArn: string;
  filter?: Record<string, Criterion>;
  nextToken?: string;
  maxResults?: number;
}
export interface ListAccessPreviewFindingsResponse {
  findings: Array<AccessPreviewFinding>;
  nextToken?: string;
}
export interface ListAccessPreviewsRequest {
  analyzerArn: string;
  nextToken?: string;
  maxResults?: number;
}
export interface ListAccessPreviewsResponse {
  accessPreviews: Array<AccessPreviewSummary>;
  nextToken?: string;
}
export interface ListAnalyzedResourcesRequest {
  analyzerArn: string;
  resourceType?: string;
  nextToken?: string;
  maxResults?: number;
}
export interface ListAnalyzedResourcesResponse {
  analyzedResources: Array<AnalyzedResourceSummary>;
  nextToken?: string;
}
export interface ListAnalyzersRequest {
  nextToken?: string;
  maxResults?: number;
  type?: string;
}
export interface ListAnalyzersResponse {
  analyzers: Array<AnalyzerSummary>;
  nextToken?: string;
}
export interface ListArchiveRulesRequest {
  analyzerName: string;
  nextToken?: string;
  maxResults?: number;
}
export interface ListArchiveRulesResponse {
  archiveRules: Array<ArchiveRuleSummary>;
  nextToken?: string;
}
export interface ListFindingsRequest {
  analyzerArn: string;
  filter?: Record<string, Criterion>;
  sort?: SortCriteria;
  nextToken?: string;
  maxResults?: number;
}
export interface ListFindingsResponse {
  findings: Array<FindingSummary>;
  nextToken?: string;
}
export interface ListFindingsV2Request {
  analyzerArn: string;
  filter?: Record<string, Criterion>;
  maxResults?: number;
  nextToken?: string;
  sort?: SortCriteria;
}
export interface ListFindingsV2Response {
  findings: Array<FindingSummaryV2>;
  nextToken?: string;
}
export interface ListPolicyGenerationsRequest {
  principalArn?: string;
  maxResults?: number;
  nextToken?: string;
}
export interface ListPolicyGenerationsResponse {
  policyGenerations: Array<PolicyGeneration>;
  nextToken?: string;
}
export interface ListTagsForResourceRequest {
  resourceArn: string;
}
export interface ListTagsForResourceResponse {
  tags?: Record<string, string>;
}
export type Locale = string;

export interface Location {
  path: Array<PathElement>;
  span: Span;
}
export type LocationList = Array<Location>;
export type Name = string;

export type NetworkOriginConfiguration = { vpcConfiguration: VpcConfiguration } | { internetConfiguration: InternetConfiguration };
export type OrderBy = string;

export type PathElement = { index: number } | { key: string } | { substring: Substring } | { value: string };
export type PathElementList = Array<PathElement>;
export type PolicyDocument = string;

export interface PolicyGeneration {
  jobId: string;
  principalArn: string;
  status: string;
  startedOn: Date | string;
  completedOn?: Date | string;
}
export interface PolicyGenerationDetails {
  principalArn: string;
}
export type PolicyGenerationList = Array<PolicyGeneration>;
export type PolicyName = string;

export type PolicyType = string;

export interface Position {
  line: number;
  column: number;
  offset: number;
}
export type PrincipalArn = string;

export type PrincipalMap = Record<string, string>;
export type PrincipalType = string;

export type RdsDbClusterSnapshotAccountId = string;

export type RdsDbClusterSnapshotAccountIdsList = Array<string>;
export type RdsDbClusterSnapshotAttributeName = string;

export type RdsDbClusterSnapshotAttributesMap = Record<string, RdsDbClusterSnapshotAttributeValue>;
export type RdsDbClusterSnapshotAttributeValue = { accountIds: Array<string> };
export interface RdsDbClusterSnapshotConfiguration {
  attributes?: Record<string, RdsDbClusterSnapshotAttributeValue>;
  kmsKeyId?: string;
}
export type RdsDbClusterSnapshotKmsKeyId = string;

export type RdsDbSnapshotAccountId = string;

export type RdsDbSnapshotAccountIdsList = Array<string>;
export type RdsDbSnapshotAttributeName = string;

export type RdsDbSnapshotAttributesMap = Record<string, RdsDbSnapshotAttributeValue>;
export type RdsDbSnapshotAttributeValue = { accountIds: Array<string> };
export interface RdsDbSnapshotConfiguration {
  attributes?: Record<string, RdsDbSnapshotAttributeValue>;
  kmsKeyId?: string;
}
export type RdsDbSnapshotKmsKeyId = string;

export type ReasonCode = string;

export interface ReasonSummary {
  description?: string;
  statementIndex?: number;
  statementId?: string;
}
export type ReasonSummaryList = Array<ReasonSummary>;
export interface RecommendationError {
  code: string;
  message: string;
}
export type RecommendationType = string;

export type RecommendedRemediationAction = string;

export type RecommendedStep = { unusedPermissionsRecommendedStep: UnusedPermissionsRecommendedStep };
export type RecommendedStepList = Array<RecommendedStep>;
export type RegionList = Array<string>;
export type Resource = string;

export type ResourceArn = string;

export type ResourceArnsList = Array<string>;
export type ResourceControlPolicyRestriction = string;

export declare class ResourceNotFoundException extends Data.TaggedError(
  "ResourceNotFoundException",
)<{
  readonly message: string;
  readonly resourceId: string;
  readonly resourceType: string;
}> {}
export type ResourcesList = Array<string>;
export type ResourceType = string;

export interface ResourceTypeDetails {
  totalActivePublic?: number;
  totalActiveCrossAccount?: number;
}
export type ResourceTypeList = Array<string>;
export type ResourceTypeStatisticsMap = Record<string, ResourceTypeDetails>;
export type RetiringPrincipal = string;

export type RoleArn = string;

export interface S3AccessPointConfiguration {
  accessPointPolicy?: string;
  publicAccessBlock?: S3PublicAccessBlockConfiguration;
  networkOrigin?: NetworkOriginConfiguration;
}
export type S3AccessPointConfigurationsMap = Record<string, S3AccessPointConfiguration>;
export interface S3BucketAclGrantConfiguration {
  permission: string;
  grantee: AclGrantee;
}
export type S3BucketAclGrantConfigurationsList = Array<S3BucketAclGrantConfiguration>;
export interface S3BucketConfiguration {
  bucketPolicy?: string;
  bucketAclGrants?: Array<S3BucketAclGrantConfiguration>;
  bucketPublicAccessBlock?: S3PublicAccessBlockConfiguration;
  accessPoints?: Record<string, S3AccessPointConfiguration>;
}
export type S3BucketPolicy = string;

export type S3ExpressDirectoryAccessPointArn = string;

export interface S3ExpressDirectoryAccessPointConfiguration {
  accessPointPolicy?: string;
  networkOrigin?: NetworkOriginConfiguration;
}
export type S3ExpressDirectoryAccessPointConfigurationsMap = Record<string, S3ExpressDirectoryAccessPointConfiguration>;
export interface S3ExpressDirectoryBucketConfiguration {
  bucketPolicy?: string;
  accessPoints?: Record<string, S3ExpressDirectoryAccessPointConfiguration>;
}
export type S3ExpressDirectoryBucketPolicy = string;

export interface S3PublicAccessBlockConfiguration {
  ignorePublicAcls: boolean;
  restrictPublicBuckets: boolean;
}
export interface SecretsManagerSecretConfiguration {
  kmsKeyId?: string;
  secretPolicy?: string;
}
export type SecretsManagerSecretKmsId = string;

export type SecretsManagerSecretPolicy = string;

export type ServiceControlPolicyRestriction = string;

export declare class ServiceQuotaExceededException extends Data.TaggedError(
  "ServiceQuotaExceededException",
)<{
  readonly message: string;
  readonly resourceId: string;
  readonly resourceType: string;
}> {}
export type SharedViaList = Array<string>;
export interface SnsTopicConfiguration {
  topicPolicy?: string;
}
export type SnsTopicPolicy = string;

export interface SortCriteria {
  attributeName?: string;
  orderBy?: string;
}
export interface Span {
  start: Position;
  end: Position;
}
export interface SqsQueueConfiguration {
  queuePolicy?: string;
}
export type SqsQueuePolicy = string;

export interface StartPolicyGenerationRequest {
  policyGenerationDetails: PolicyGenerationDetails;
  cloudTrailDetails?: CloudTrailDetails;
  clientToken?: string;
}
export interface StartPolicyGenerationResponse {
  jobId: string;
}
export interface StartResourceScanRequest {
  analyzerArn: string;
  resourceArn: string;
  resourceOwnerAccount?: string;
}
export type Status = string;

export interface StatusReason {
  code: string;
}
export interface Substring {
  start: number;
  length: number;
}
export type TagKeys = Array<string>;
export interface TagResourceRequest {
  resourceArn: string;
  tags: Record<string, string>;
}
export interface TagResourceResponse {
}
export type TagsList = Array<Record<string, string>>;
export type TagsMap = Record<string, string>;
export declare class ThrottlingException extends Data.TaggedError(
  "ThrottlingException",
)<{
  readonly message: string;
  readonly retryAfterSeconds?: number;
}> {}
export type Timestamp = Date | string;

export type Token = string;

export interface Trail {
  cloudTrailArn: string;
  regions?: Array<string>;
  allRegions?: boolean;
}
export type TrailList = Array<Trail>;
export interface TrailProperties {
  cloudTrailArn: string;
  regions?: Array<string>;
  allRegions?: boolean;
}
export type TrailPropertiesList = Array<TrailProperties>;
export type Type = string;

export declare class UnprocessableEntityException extends Data.TaggedError(
  "UnprocessableEntityException",
)<{
  readonly message: string;
}> {}
export interface UntagResourceRequest {
  resourceArn: string;
  tagKeys: Array<string>;
}
export interface UntagResourceResponse {
}
export interface UnusedAccessConfiguration {
  unusedAccessAge?: number;
  analysisRule?: AnalysisRule;
}
export interface UnusedAccessFindingsStatistics {
  unusedAccessTypeStatistics?: Array<UnusedAccessTypeStatistics>;
  topAccounts?: Array<FindingAggregationAccountDetails>;
  totalActiveFindings?: number;
  totalArchivedFindings?: number;
  totalResolvedFindings?: number;
}
export interface UnusedAccessTypeStatistics {
  unusedAccessType?: string;
  total?: number;
}
export type UnusedAccessTypeStatisticsList = Array<UnusedAccessTypeStatistics>;
export interface UnusedAction {
  action: string;
  lastAccessed?: Date | string;
}
export type UnusedActionList = Array<UnusedAction>;
export interface UnusedIamRoleDetails {
  lastAccessed?: Date | string;
}
export interface UnusedIamUserAccessKeyDetails {
  accessKeyId: string;
  lastAccessed?: Date | string;
}
export interface UnusedIamUserPasswordDetails {
  lastAccessed?: Date | string;
}
export interface UnusedPermissionDetails {
  actions?: Array<UnusedAction>;
  serviceNamespace: string;
  lastAccessed?: Date | string;
}
export interface UnusedPermissionsRecommendedStep {
  policyUpdatedAt?: Date | string;
  recommendedAction: string;
  recommendedPolicy?: string;
  existingPolicyId?: string;
}
export interface UpdateAnalyzerRequest {
  analyzerName: string;
  configuration?: AnalyzerConfiguration;
}
export interface UpdateAnalyzerResponse {
  configuration?: AnalyzerConfiguration;
}
export interface UpdateArchiveRuleRequest {
  analyzerName: string;
  ruleName: string;
  filter: Record<string, Criterion>;
  clientToken?: string;
}
export interface UpdateFindingsRequest {
  analyzerArn: string;
  status: string;
  ids?: Array<string>;
  resourceArn?: string;
  clientToken?: string;
}
export interface ValidatePolicyFinding {
  findingDetails: string;
  findingType: string;
  issueCode: string;
  learnMoreLink: string;
  locations: Array<Location>;
}
export type ValidatePolicyFindingList = Array<ValidatePolicyFinding>;
export type ValidatePolicyFindingType = string;

export interface ValidatePolicyRequest {
  locale?: string;
  maxResults?: number;
  nextToken?: string;
  policyDocument: string;
  policyType: string;
  validatePolicyResourceType?: string;
}
export type ValidatePolicyResourceType = string;

export interface ValidatePolicyResponse {
  findings: Array<ValidatePolicyFinding>;
  nextToken?: string;
}
export declare class ValidationException extends Data.TaggedError(
  "ValidationException",
)<{
  readonly message: string;
  readonly reason: string;
  readonly fieldList?: Array<ValidationExceptionField>;
}> {}
export interface ValidationExceptionField {
  name: string;
  message: string;
}
export type ValidationExceptionFieldList = Array<ValidationExceptionField>;
export type ValidationExceptionReason = string;

export type ValueList = Array<string>;
export interface VpcConfiguration {
  vpcId: string;
}
export type VpcId = string;

export declare namespace ApplyArchiveRule {
  export type Input = ApplyArchiveRuleRequest;
  export type Output = {};
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace CancelPolicyGeneration {
  export type Input = CancelPolicyGenerationRequest;
  export type Output = CancelPolicyGenerationResponse;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace CheckAccessNotGranted {
  export type Input = CheckAccessNotGrantedRequest;
  export type Output = CheckAccessNotGrantedResponse;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | InvalidParameterException
    | ThrottlingException
    | UnprocessableEntityException
    | ValidationException
    | CommonAwsError;
}

export declare namespace CheckNoNewAccess {
  export type Input = CheckNoNewAccessRequest;
  export type Output = CheckNoNewAccessResponse;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | InvalidParameterException
    | ThrottlingException
    | UnprocessableEntityException
    | ValidationException
    | CommonAwsError;
}

export declare namespace CheckNoPublicAccess {
  export type Input = CheckNoPublicAccessRequest;
  export type Output = CheckNoPublicAccessResponse;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | InvalidParameterException
    | ThrottlingException
    | UnprocessableEntityException
    | ValidationException
    | CommonAwsError;
}

export declare namespace CreateAccessPreview {
  export type Input = CreateAccessPreviewRequest;
  export type Output = CreateAccessPreviewResponse;
  export type Error =
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ServiceQuotaExceededException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace CreateAnalyzer {
  export type Input = CreateAnalyzerRequest;
  export type Output = CreateAnalyzerResponse;
  export type Error =
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ServiceQuotaExceededException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace CreateArchiveRule {
  export type Input = CreateArchiveRuleRequest;
  export type Output = {};
  export type Error =
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ServiceQuotaExceededException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace DeleteAnalyzer {
  export type Input = DeleteAnalyzerRequest;
  export type Output = {};
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace DeleteArchiveRule {
  export type Input = DeleteArchiveRuleRequest;
  export type Output = {};
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace GenerateFindingRecommendation {
  export type Input = GenerateFindingRecommendationRequest;
  export type Output = {};
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace GetAccessPreview {
  export type Input = GetAccessPreviewRequest;
  export type Output = GetAccessPreviewResponse;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace GetAnalyzedResource {
  export type Input = GetAnalyzedResourceRequest;
  export type Output = GetAnalyzedResourceResponse;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace GetAnalyzer {
  export type Input = GetAnalyzerRequest;
  export type Output = GetAnalyzerResponse;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace GetArchiveRule {
  export type Input = GetArchiveRuleRequest;
  export type Output = GetArchiveRuleResponse;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace GetFinding {
  export type Input = GetFindingRequest;
  export type Output = GetFindingResponse;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace GetFindingRecommendation {
  export type Input = GetFindingRecommendationRequest;
  export type Output = GetFindingRecommendationResponse;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace GetFindingV2 {
  export type Input = GetFindingV2Request;
  export type Output = GetFindingV2Response;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace GetFindingsStatistics {
  export type Input = GetFindingsStatisticsRequest;
  export type Output = GetFindingsStatisticsResponse;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace GetGeneratedPolicy {
  export type Input = GetGeneratedPolicyRequest;
  export type Output = GetGeneratedPolicyResponse;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace ListAccessPreviewFindings {
  export type Input = ListAccessPreviewFindingsRequest;
  export type Output = ListAccessPreviewFindingsResponse;
  export type Error =
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace ListAccessPreviews {
  export type Input = ListAccessPreviewsRequest;
  export type Output = ListAccessPreviewsResponse;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace ListAnalyzedResources {
  export type Input = ListAnalyzedResourcesRequest;
  export type Output = ListAnalyzedResourcesResponse;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace ListAnalyzers {
  export type Input = ListAnalyzersRequest;
  export type Output = ListAnalyzersResponse;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace ListArchiveRules {
  export type Input = ListArchiveRulesRequest;
  export type Output = ListArchiveRulesResponse;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace ListFindings {
  export type Input = ListFindingsRequest;
  export type Output = ListFindingsResponse;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace ListFindingsV2 {
  export type Input = ListFindingsV2Request;
  export type Output = ListFindingsV2Response;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace ListPolicyGenerations {
  export type Input = ListPolicyGenerationsRequest;
  export type Output = ListPolicyGenerationsResponse;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace ListTagsForResource {
  export type Input = ListTagsForResourceRequest;
  export type Output = ListTagsForResourceResponse;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace StartPolicyGeneration {
  export type Input = StartPolicyGenerationRequest;
  export type Output = StartPolicyGenerationResponse;
  export type Error =
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ServiceQuotaExceededException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace StartResourceScan {
  export type Input = StartResourceScanRequest;
  export type Output = {};
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace TagResource {
  export type Input = TagResourceRequest;
  export type Output = TagResourceResponse;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace UntagResource {
  export type Input = UntagResourceRequest;
  export type Output = UntagResourceResponse;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace UpdateAnalyzer {
  export type Input = UpdateAnalyzerRequest;
  export type Output = UpdateAnalyzerResponse;
  export type Error =
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace UpdateArchiveRule {
  export type Input = UpdateArchiveRuleRequest;
  export type Output = {};
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace UpdateFindings {
  export type Input = UpdateFindingsRequest;
  export type Output = {};
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace ValidatePolicy {
  export type Input = ValidatePolicyRequest;
  export type Output = ValidatePolicyResponse;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

