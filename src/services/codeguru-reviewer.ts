import type { Effect, Data as EffectData } from "effect";
import type { CommonAwsError } from "../error.ts";

export interface AWSGuruFrontendService {
  associateRepository(
    input: AssociateRepositoryRequest,
  ): Effect.Effect<
    AssociateRepositoryResponse,
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  createCodeReview(
    input: CreateCodeReviewRequest,
  ): Effect.Effect<
    CreateCodeReviewResponse,
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  describeCodeReview(
    input: DescribeCodeReviewRequest,
  ): Effect.Effect<
    DescribeCodeReviewResponse,
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  describeRecommendationFeedback(
    input: DescribeRecommendationFeedbackRequest,
  ): Effect.Effect<
    DescribeRecommendationFeedbackResponse,
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  describeRepositoryAssociation(
    input: DescribeRepositoryAssociationRequest,
  ): Effect.Effect<
    DescribeRepositoryAssociationResponse,
    | AccessDeniedException
    | InternalServerException
    | NotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  disassociateRepository(
    input: DisassociateRepositoryRequest,
  ): Effect.Effect<
    DisassociateRepositoryResponse,
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | NotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  listCodeReviews(
    input: ListCodeReviewsRequest,
  ): Effect.Effect<
    ListCodeReviewsResponse,
    | AccessDeniedException
    | InternalServerException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  listRecommendationFeedback(
    input: ListRecommendationFeedbackRequest,
  ): Effect.Effect<
    ListRecommendationFeedbackResponse,
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  listRecommendations(
    input: ListRecommendationsRequest,
  ): Effect.Effect<
    ListRecommendationsResponse,
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  listRepositoryAssociations(
    input: ListRepositoryAssociationsRequest,
  ): Effect.Effect<
    ListRepositoryAssociationsResponse,
    | InternalServerException
    | ThrottlingException
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
  putRecommendationFeedback(
    input: PutRecommendationFeedbackRequest,
  ): Effect.Effect<
    PutRecommendationFeedbackResponse,
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
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
}

export type CodeguruReviewer = AWSGuruFrontendService;

export declare class AccessDeniedException extends EffectData.TaggedError(
  "AccessDeniedException",
)<{
  readonly Message?: string;
}> {}
export type AnalysisType = "SECURITY" | "CODE_QUALITY";
export type AnalysisTypes = Array<AnalysisType>;
export type Arn = string;

export interface AssociateRepositoryRequest {
  Repository: Repository;
  ClientRequestToken?: string;
  Tags?: Record<string, string>;
  KMSKeyDetails?: KMSKeyDetails;
}
export interface AssociateRepositoryResponse {
  RepositoryAssociation?: RepositoryAssociation;
  Tags?: Record<string, string>;
}
export type AssociationArn = string;

export type AssociationId = string;

export interface BranchDiffSourceCodeType {
  SourceBranchName: string;
  DestinationBranchName: string;
}
export type BranchName = string;

export type BuildArtifactsObjectKey = string;

export type ClientRequestToken = string;

export interface CodeArtifacts {
  SourceCodeArtifactsObjectKey: string;
  BuildArtifactsObjectKey?: string;
}
export interface CodeCommitRepository {
  Name: string;
}
export interface CodeReview {
  Name?: string;
  CodeReviewArn?: string;
  RepositoryName?: string;
  Owner?: string;
  ProviderType?: ProviderType;
  State?: JobState;
  StateReason?: string;
  CreatedTimeStamp?: Date | string;
  LastUpdatedTimeStamp?: Date | string;
  Type?: Type;
  PullRequestId?: string;
  SourceCodeType?: SourceCodeType;
  AssociationArn?: string;
  Metrics?: Metrics;
  AnalysisTypes?: Array<AnalysisType>;
  ConfigFileState?: ConfigFileState;
}
export type CodeReviewName = string;

export type CodeReviewSummaries = Array<CodeReviewSummary>;
export interface CodeReviewSummary {
  Name?: string;
  CodeReviewArn?: string;
  RepositoryName?: string;
  Owner?: string;
  ProviderType?: ProviderType;
  State?: JobState;
  CreatedTimeStamp?: Date | string;
  LastUpdatedTimeStamp?: Date | string;
  Type?: Type;
  PullRequestId?: string;
  MetricsSummary?: MetricsSummary;
  SourceCodeType?: SourceCodeType;
}
export interface CodeReviewType {
  RepositoryAnalysis: RepositoryAnalysis;
  AnalysisTypes?: Array<AnalysisType>;
}
export interface CommitDiffSourceCodeType {
  SourceCommit?: string;
  DestinationCommit?: string;
  MergeBaseCommit?: string;
}
export type CommitId = string;

export type ConfigFileState = "PRESENT" | "ABSENT" | "PRESENT_WITH_ERRORS";
export declare class ConflictException extends EffectData.TaggedError(
  "ConflictException",
)<{
  readonly Message?: string;
}> {}
export type ConnectionArn = string;

export interface CreateCodeReviewRequest {
  Name: string;
  RepositoryAssociationArn: string;
  Type: CodeReviewType;
  ClientRequestToken?: string;
}
export interface CreateCodeReviewResponse {
  CodeReview?: CodeReview;
}
export interface DescribeCodeReviewRequest {
  CodeReviewArn: string;
}
export interface DescribeCodeReviewResponse {
  CodeReview?: CodeReview;
}
export interface DescribeRecommendationFeedbackRequest {
  CodeReviewArn: string;
  RecommendationId: string;
  UserId?: string;
}
export interface DescribeRecommendationFeedbackResponse {
  RecommendationFeedback?: RecommendationFeedback;
}
export interface DescribeRepositoryAssociationRequest {
  AssociationArn: string;
}
export interface DescribeRepositoryAssociationResponse {
  RepositoryAssociation?: RepositoryAssociation;
  Tags?: Record<string, string>;
}
export interface DisassociateRepositoryRequest {
  AssociationArn: string;
}
export interface DisassociateRepositoryResponse {
  RepositoryAssociation?: RepositoryAssociation;
  Tags?: Record<string, string>;
}
export type EncryptionOption = "AoCmk" | "CmCmk";
export type ErrorMessage = string;

export interface EventInfo {
  Name?: string;
  State?: string;
}
export type EventName = string;

export type EventState = string;

export type FilePath = string;

export type FindingsCount = number;

export declare class InternalServerException extends EffectData.TaggedError(
  "InternalServerException",
)<{
  readonly Message?: string;
}> {}
export type JobState = "COMPLETED" | "PENDING" | "FAILED" | "DELETING";
export type JobStates = Array<JobState>;
export interface KMSKeyDetails {
  KMSKeyId?: string;
  EncryptionOption?: EncryptionOption;
}
export type KMSKeyId = string;

export type LineNumber = number;

export type LinesOfCodeCount = number;

export type ListCodeReviewsMaxResults = number;

export interface ListCodeReviewsRequest {
  ProviderTypes?: Array<ProviderType>;
  States?: Array<JobState>;
  RepositoryNames?: Array<string>;
  Type: Type;
  MaxResults?: number;
  NextToken?: string;
}
export interface ListCodeReviewsResponse {
  CodeReviewSummaries?: Array<CodeReviewSummary>;
  NextToken?: string;
}
export interface ListRecommendationFeedbackRequest {
  NextToken?: string;
  MaxResults?: number;
  CodeReviewArn: string;
  UserIds?: Array<string>;
  RecommendationIds?: Array<string>;
}
export interface ListRecommendationFeedbackResponse {
  RecommendationFeedbackSummaries?: Array<RecommendationFeedbackSummary>;
  NextToken?: string;
}
export type ListRecommendationsMaxResults = number;

export interface ListRecommendationsRequest {
  NextToken?: string;
  MaxResults?: number;
  CodeReviewArn: string;
}
export interface ListRecommendationsResponse {
  RecommendationSummaries?: Array<RecommendationSummary>;
  NextToken?: string;
}
export interface ListRepositoryAssociationsRequest {
  ProviderTypes?: Array<ProviderType>;
  States?: Array<RepositoryAssociationState>;
  Names?: Array<string>;
  Owners?: Array<string>;
  MaxResults?: number;
  NextToken?: string;
}
export interface ListRepositoryAssociationsResponse {
  RepositoryAssociationSummaries?: Array<RepositoryAssociationSummary>;
  NextToken?: string;
}
export interface ListTagsForResourceRequest {
  resourceArn: string;
}
export interface ListTagsForResourceResponse {
  Tags?: Record<string, string>;
}
export type LongDescription = string;

export type MaxResults = number;

export interface Metrics {
  MeteredLinesOfCodeCount?: number;
  SuppressedLinesOfCodeCount?: number;
  FindingsCount?: number;
}
export interface MetricsSummary {
  MeteredLinesOfCodeCount?: number;
  SuppressedLinesOfCodeCount?: number;
  FindingsCount?: number;
}
export type Name = string;

export type Names = Array<string>;
export type NextToken = string;

export declare class NotFoundException extends EffectData.TaggedError(
  "NotFoundException",
)<{
  readonly Message?: string;
}> {}
export type Owner = string;

export type Owners = Array<string>;
export type ProviderType =
  | "CODE_COMMIT"
  | "GIT_HUB"
  | "BITBUCKET"
  | "GIT_HUB_ENTERPRISE_SERVER"
  | "S3_BUCKET";
export type ProviderTypes = Array<ProviderType>;
export type PullRequestId = string;

export interface PutRecommendationFeedbackRequest {
  CodeReviewArn: string;
  RecommendationId: string;
  Reactions: Array<Reaction>;
}
export interface PutRecommendationFeedbackResponse {}
export type Reaction = "THUMBS_UP" | "THUMBS_DOWN";
export type Reactions = Array<Reaction>;
export type RecommendationCategory =
  | "AWS_BEST_PRACTICES"
  | "AWS_CLOUDFORMATION_ISSUES"
  | "DUPLICATE_CODE"
  | "CODE_MAINTENANCE_ISSUES"
  | "CONCURRENCY_ISSUES"
  | "INPUT_VALIDATIONS"
  | "PYTHON_BEST_PRACTICES"
  | "JAVA_BEST_PRACTICES"
  | "RESOURCE_LEAKS"
  | "SECURITY_ISSUES"
  | "CODE_INCONSISTENCIES";
export interface RecommendationFeedback {
  CodeReviewArn?: string;
  RecommendationId?: string;
  Reactions?: Array<Reaction>;
  UserId?: string;
  CreatedTimeStamp?: Date | string;
  LastUpdatedTimeStamp?: Date | string;
}
export type RecommendationFeedbackSummaries =
  Array<RecommendationFeedbackSummary>;
export interface RecommendationFeedbackSummary {
  RecommendationId?: string;
  Reactions?: Array<Reaction>;
  UserId?: string;
}
export type RecommendationId = string;

export type RecommendationIds = Array<string>;
export type RecommendationSummaries = Array<RecommendationSummary>;
export interface RecommendationSummary {
  FilePath?: string;
  RecommendationId?: string;
  StartLine?: number;
  EndLine?: number;
  Description?: string;
  RecommendationCategory?: RecommendationCategory;
  RuleMetadata?: RuleMetadata;
  Severity?: Severity;
}
export interface Repository {
  CodeCommit?: CodeCommitRepository;
  Bitbucket?: ThirdPartySourceRepository;
  GitHubEnterpriseServer?: ThirdPartySourceRepository;
  S3Bucket?: S3Repository;
}
export interface RepositoryAnalysis {
  RepositoryHead?: RepositoryHeadSourceCodeType;
  SourceCodeType?: SourceCodeType;
}
export interface RepositoryAssociation {
  AssociationId?: string;
  AssociationArn?: string;
  ConnectionArn?: string;
  Name?: string;
  Owner?: string;
  ProviderType?: ProviderType;
  State?: RepositoryAssociationState;
  StateReason?: string;
  LastUpdatedTimeStamp?: Date | string;
  CreatedTimeStamp?: Date | string;
  KMSKeyDetails?: KMSKeyDetails;
  S3RepositoryDetails?: S3RepositoryDetails;
}
export type RepositoryAssociationState =
  | "ASSOCIATED"
  | "ASSOCIATING"
  | "FAILED"
  | "DISASSOCIATING"
  | "DISASSOCIATED";
export type RepositoryAssociationStates = Array<RepositoryAssociationState>;
export type RepositoryAssociationSummaries =
  Array<RepositoryAssociationSummary>;
export interface RepositoryAssociationSummary {
  AssociationArn?: string;
  ConnectionArn?: string;
  LastUpdatedTimeStamp?: Date | string;
  AssociationId?: string;
  Name?: string;
  Owner?: string;
  ProviderType?: ProviderType;
  State?: RepositoryAssociationState;
}
export interface RepositoryHeadSourceCodeType {
  BranchName: string;
}
export type RepositoryNames = Array<string>;
export type Requester = string;

export type RequestId = string;

export interface RequestMetadata {
  RequestId?: string;
  Requester?: string;
  EventInfo?: EventInfo;
  VendorName?: VendorName;
}
export declare class ResourceNotFoundException extends EffectData.TaggedError(
  "ResourceNotFoundException",
)<{
  readonly Message?: string;
}> {}
export type RuleId = string;

export interface RuleMetadata {
  RuleId?: string;
  RuleName?: string;
  ShortDescription?: string;
  LongDescription?: string;
  RuleTags?: Array<string>;
}
export type RuleName = string;

export type RuleTag = string;

export type RuleTags = Array<string>;
export type S3BucketName = string;

export interface S3BucketRepository {
  Name: string;
  Details?: S3RepositoryDetails;
}
export interface S3Repository {
  Name: string;
  BucketName: string;
}
export interface S3RepositoryDetails {
  BucketName?: string;
  CodeArtifacts?: CodeArtifacts;
}
export type Severity = "INFO" | "LOW" | "MEDIUM" | "HIGH" | "CRITICAL";
export type ShortDescription = string;

export type SourceCodeArtifactsObjectKey = string;

export interface SourceCodeType {
  CommitDiff?: CommitDiffSourceCodeType;
  RepositoryHead?: RepositoryHeadSourceCodeType;
  BranchDiff?: BranchDiffSourceCodeType;
  S3BucketRepository?: S3BucketRepository;
  RequestMetadata?: RequestMetadata;
}
export type StateReason = string;

export type TagKey = string;

export type TagKeyList = Array<string>;
export type TagMap = Record<string, string>;
export interface TagResourceRequest {
  resourceArn: string;
  Tags: Record<string, string>;
}
export interface TagResourceResponse {}
export type TagValue = string;

export type Text = string;

export interface ThirdPartySourceRepository {
  Name: string;
  ConnectionArn: string;
  Owner: string;
}
export declare class ThrottlingException extends EffectData.TaggedError(
  "ThrottlingException",
)<{
  readonly Message?: string;
}> {}
export type TimeStamp = Date | string;

export type Type = "PULL_REQUEST" | "REPOSITORY_ANALYSIS";
export interface UntagResourceRequest {
  resourceArn: string;
  TagKeys: Array<string>;
}
export interface UntagResourceResponse {}
export type UserId = string;

export type UserIds = Array<string>;
export declare class ValidationException extends EffectData.TaggedError(
  "ValidationException",
)<{
  readonly Message?: string;
}> {}
export type VendorName = "GITHUB" | "GITLAB" | "NATIVE_S3";
export declare namespace AssociateRepository {
  export type Input = AssociateRepositoryRequest;
  export type Output = AssociateRepositoryResponse;
  export type Error =
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace CreateCodeReview {
  export type Input = CreateCodeReviewRequest;
  export type Output = CreateCodeReviewResponse;
  export type Error =
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace DescribeCodeReview {
  export type Input = DescribeCodeReviewRequest;
  export type Output = DescribeCodeReviewResponse;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace DescribeRecommendationFeedback {
  export type Input = DescribeRecommendationFeedbackRequest;
  export type Output = DescribeRecommendationFeedbackResponse;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace DescribeRepositoryAssociation {
  export type Input = DescribeRepositoryAssociationRequest;
  export type Output = DescribeRepositoryAssociationResponse;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | NotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace DisassociateRepository {
  export type Input = DisassociateRepositoryRequest;
  export type Output = DisassociateRepositoryResponse;
  export type Error =
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | NotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace ListCodeReviews {
  export type Input = ListCodeReviewsRequest;
  export type Output = ListCodeReviewsResponse;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace ListRecommendationFeedback {
  export type Input = ListRecommendationFeedbackRequest;
  export type Output = ListRecommendationFeedbackResponse;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace ListRecommendations {
  export type Input = ListRecommendationsRequest;
  export type Output = ListRecommendationsResponse;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace ListRepositoryAssociations {
  export type Input = ListRepositoryAssociationsRequest;
  export type Output = ListRepositoryAssociationsResponse;
  export type Error =
    | InternalServerException
    | ThrottlingException
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

export declare namespace PutRecommendationFeedback {
  export type Input = PutRecommendationFeedbackRequest;
  export type Output = PutRecommendationFeedbackResponse;
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
