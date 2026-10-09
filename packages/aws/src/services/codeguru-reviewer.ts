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
const svc = /*@__PURE__*/ T.AwsApiService({
  sdkId: "CodeGuru Reviewer",
  serviceShapeName: "AWSGuruFrontendService",
});
const auth = /*@__PURE__*/ T.AwsAuthSigv4({ name: "codeguru-reviewer" });
const ver = /*@__PURE__*/ T.ServiceVersion("2019-09-19");
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
              `https://codeguru-reviewer-fips.${Region}.${_.getAttr(PartitionResult, "dualStackDnsSuffix")}`,
            );
          }
          return err(
            "FIPS and DualStack are enabled, but this partition does not support one or both",
          );
        }
        if (UseFIPS === true) {
          if (_.getAttr(PartitionResult, "supportsFIPS") === true) {
            return e(
              `https://codeguru-reviewer-fips.${Region}.${_.getAttr(PartitionResult, "dnsSuffix")}`,
            );
          }
          return err("FIPS is enabled but this partition does not support FIPS");
        }
        if (UseDualStack === true) {
          if (true === _.getAttr(PartitionResult, "supportsDualStack")) {
            return e(
              `https://codeguru-reviewer.${Region}.${_.getAttr(PartitionResult, "dualStackDnsSuffix")}`,
            );
          }
          return err("DualStack is enabled but this partition does not support DualStack");
        }
        return e(`https://codeguru-reviewer.${Region}.${_.getAttr(PartitionResult, "dnsSuffix")}`);
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
    { message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()) },
    /*@__PURE__*/ T.HttpError(409),
  ).pipe(C.withConflictError) {}
export class InternalServerException
  extends /*@__PURE__*/ S.TaggedError<InternalServerException>()(
    "InternalServerException",
    { message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()) },
    /*@__PURE__*/ T.HttpError(500),
  ).pipe(C.withServerError) {}
export class NotFoundException
  extends /*@__PURE__*/ S.TaggedError<NotFoundException>()(
    "NotFoundException",
    { message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()) },
    /*@__PURE__*/ T.HttpError(404),
  ).pipe(C.withBadRequestError) {}
export class ResourceNotFoundException
  extends /*@__PURE__*/ S.TaggedError<ResourceNotFoundException>()(
    "ResourceNotFoundException",
    { message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()) },
    /*@__PURE__*/ T.HttpError(404),
  ).pipe(C.withBadRequestError) {}
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
export type Name = string;
export interface CodeCommitRepository {
  Name: string;
}
const CodeCommitRepository = /*@__PURE__*/ __L.at(__c0, 0) as any as S.Schema<CodeCommitRepository>;
export type ConnectionArn = string;
export type Owner = string;
export interface ThirdPartySourceRepository {
  Name: string;
  ConnectionArn: string;
  Owner: string;
}
const ThirdPartySourceRepository = /*@__PURE__*/ __L.at(
  __c0,
  1,
) as any as S.Schema<ThirdPartySourceRepository>;
export type S3BucketName = string;
export interface S3Repository {
  Name: string;
  BucketName: string;
}
const S3Repository = /*@__PURE__*/ __L.at(__c0, 2) as any as S.Schema<S3Repository>;
export interface Repository {
  CodeCommit?: CodeCommitRepository;
  Bitbucket?: ThirdPartySourceRepository;
  GitHubEnterpriseServer?: ThirdPartySourceRepository;
  S3Bucket?: S3Repository;
}
const Repository = /*@__PURE__*/ __L.at(__c0, 3) as any as S.Schema<Repository>;
export type ClientRequestToken = string;
export type TagKey = string;
export type TagValue = string;
export type TagMap = { [key: string]: string | undefined };
const TagMap = /*@__PURE__*/ __L.at(__c0, 4);
export type KMSKeyId = string;
export type EncryptionOption = "AWS_OWNED_CMK" | "CUSTOMER_MANAGED_CMK" | (string & {});
const EncryptionOption = S.String;

export interface KMSKeyDetails {
  KMSKeyId?: string;
  EncryptionOption?: EncryptionOption;
}
const KMSKeyDetails = /*@__PURE__*/ __L.at(__c0, 5) as any as S.Schema<KMSKeyDetails>;
export interface AssociateRepositoryRequest {
  Repository: Repository;
  ClientRequestToken?: string;
  Tags?: { [key: string]: string | undefined };
  KMSKeyDetails?: KMSKeyDetails;
}
const AssociateRepositoryRequest = /*@__PURE__*/ __L.at(
  __c0,
  6,
) as any as S.Schema<AssociateRepositoryRequest>;
export type AssociationId = string;
export type Arn = string;
export type ProviderType =
  | "CodeCommit"
  | "GitHub"
  | "Bitbucket"
  | "GitHubEnterpriseServer"
  | "S3Bucket"
  | (string & {});
const ProviderType = S.String;

export type RepositoryAssociationState =
  | "Associated"
  | "Associating"
  | "Failed"
  | "Disassociating"
  | "Disassociated"
  | (string & {});
const RepositoryAssociationState = S.String;

export type StateReason = string;
export type SourceCodeArtifactsObjectKey = string;
export type BuildArtifactsObjectKey = string;
export interface CodeArtifacts {
  SourceCodeArtifactsObjectKey: string;
  BuildArtifactsObjectKey?: string;
}
const CodeArtifacts = /*@__PURE__*/ __L.at(__c0, 7) as any as S.Schema<CodeArtifacts>;
export interface S3RepositoryDetails {
  BucketName?: string;
  CodeArtifacts?: CodeArtifacts;
}
const S3RepositoryDetails = /*@__PURE__*/ __L.at(__c1, 0) as any as S.Schema<S3RepositoryDetails>;
export interface RepositoryAssociation {
  AssociationId?: string;
  AssociationArn?: string;
  ConnectionArn?: string;
  Name?: string;
  Owner?: string;
  ProviderType?: ProviderType;
  State?: RepositoryAssociationState;
  StateReason?: string;
  LastUpdatedTimeStamp?: Date;
  CreatedTimeStamp?: Date;
  KMSKeyDetails?: KMSKeyDetails;
  S3RepositoryDetails?: S3RepositoryDetails;
}
const RepositoryAssociation = /*@__PURE__*/ __L.at(
  __c1,
  1,
) as any as S.Schema<RepositoryAssociation>;
export interface AssociateRepositoryResponse {
  RepositoryAssociation?: RepositoryAssociation;
  Tags?: { [key: string]: string | undefined };
}
const AssociateRepositoryResponse = /*@__PURE__*/ __L.at(
  __c1,
  2,
) as any as S.Schema<AssociateRepositoryResponse>;
export type CodeReviewName = string;
export type AssociationArn = string;
export type BranchName = string;
export interface RepositoryHeadSourceCodeType {
  BranchName: string;
}
const RepositoryHeadSourceCodeType = /*@__PURE__*/ __L.at(
  __c1,
  3,
) as any as S.Schema<RepositoryHeadSourceCodeType>;
export type CommitId = string;
export interface CommitDiffSourceCodeType {
  SourceCommit?: string;
  DestinationCommit?: string;
  MergeBaseCommit?: string;
}
const CommitDiffSourceCodeType = /*@__PURE__*/ __L.at(
  __c1,
  4,
) as any as S.Schema<CommitDiffSourceCodeType>;
export interface BranchDiffSourceCodeType {
  SourceBranchName: string;
  DestinationBranchName: string;
}
const BranchDiffSourceCodeType = /*@__PURE__*/ __L.at(
  __c1,
  5,
) as any as S.Schema<BranchDiffSourceCodeType>;
export interface S3BucketRepository {
  Name: string;
  Details?: S3RepositoryDetails;
}
const S3BucketRepository = /*@__PURE__*/ __L.at(__c1, 6) as any as S.Schema<S3BucketRepository>;
export type RequestId = string;
export type Requester = string;
export type EventName = string;
export type EventState = string;
export interface EventInfo {
  Name?: string;
  State?: string;
}
const EventInfo = /*@__PURE__*/ __L.at(__c1, 7) as any as S.Schema<EventInfo>;
export type VendorName = "GitHub" | "GitLab" | "NativeS3" | (string & {});
const VendorName = S.String;

export interface RequestMetadata {
  RequestId?: string;
  Requester?: string;
  EventInfo?: EventInfo;
  VendorName?: VendorName;
}
const RequestMetadata = /*@__PURE__*/ __L.at(__c2, 0) as any as S.Schema<RequestMetadata>;
export interface SourceCodeType {
  CommitDiff?: CommitDiffSourceCodeType;
  RepositoryHead?: RepositoryHeadSourceCodeType;
  BranchDiff?: BranchDiffSourceCodeType;
  S3BucketRepository?: S3BucketRepository;
  RequestMetadata?: RequestMetadata;
}
const SourceCodeType = /*@__PURE__*/ __L.at(__c2, 1) as any as S.Schema<SourceCodeType>;
export interface RepositoryAnalysis {
  RepositoryHead?: RepositoryHeadSourceCodeType;
  SourceCodeType?: SourceCodeType;
}
const RepositoryAnalysis = /*@__PURE__*/ __L.at(__c2, 2) as any as S.Schema<RepositoryAnalysis>;
export type AnalysisType = "Security" | "CodeQuality" | (string & {});
const AnalysisType = S.String;

export type AnalysisTypes = AnalysisType[];
const AnalysisTypes = /*@__PURE__*/ __L.at(__c2, 3);
export interface CodeReviewType {
  RepositoryAnalysis: RepositoryAnalysis;
  AnalysisTypes?: AnalysisType[];
}
const CodeReviewType = /*@__PURE__*/ __L.at(__c2, 4) as any as S.Schema<CodeReviewType>;
export interface CreateCodeReviewRequest {
  Name: string;
  RepositoryAssociationArn: string;
  Type: CodeReviewType;
  ClientRequestToken?: string;
}
const CreateCodeReviewRequest = /*@__PURE__*/ __L.at(
  __c2,
  5,
) as any as S.Schema<CreateCodeReviewRequest>;
export type JobState = "Completed" | "Pending" | "Failed" | "Deleting" | (string & {});
const JobState = S.String;

export type Type = "PullRequest" | "RepositoryAnalysis" | (string & {});
const Type = S.String;

export type PullRequestId = string;
export type LinesOfCodeCount = number;
export type FindingsCount = number;
export interface Metrics {
  MeteredLinesOfCodeCount?: number;
  SuppressedLinesOfCodeCount?: number;
  FindingsCount?: number;
}
const Metrics = /*@__PURE__*/ __L.at(__c2, 6) as any as S.Schema<Metrics>;
export type ConfigFileState = "Present" | "Absent" | "PresentWithErrors" | (string & {});
const ConfigFileState = S.String;

export interface CodeReview {
  Name?: string;
  CodeReviewArn?: string;
  RepositoryName?: string;
  Owner?: string;
  ProviderType?: ProviderType;
  State?: JobState;
  StateReason?: string;
  CreatedTimeStamp?: Date;
  LastUpdatedTimeStamp?: Date;
  Type?: Type;
  PullRequestId?: string;
  SourceCodeType?: SourceCodeType;
  AssociationArn?: string;
  Metrics?: Metrics;
  AnalysisTypes?: AnalysisType[];
  ConfigFileState?: ConfigFileState;
}
const CodeReview = /*@__PURE__*/ __L.at(__c2, 7) as any as S.Schema<CodeReview>;
export interface CreateCodeReviewResponse {
  CodeReview?: CodeReview;
}
const CreateCodeReviewResponse = /*@__PURE__*/ __L.at(
  __c3,
  0,
) as any as S.Schema<CreateCodeReviewResponse>;
export interface DescribeCodeReviewRequest {
  CodeReviewArn: string;
}
const DescribeCodeReviewRequest = /*@__PURE__*/ __L.at(
  __c3,
  1,
) as any as S.Schema<DescribeCodeReviewRequest>;
export interface DescribeCodeReviewResponse {
  CodeReview?: CodeReview;
}
const DescribeCodeReviewResponse = /*@__PURE__*/ __L.at(
  __c3,
  2,
) as any as S.Schema<DescribeCodeReviewResponse>;
export type RecommendationId = string;
export type UserId = string;
export interface DescribeRecommendationFeedbackRequest {
  CodeReviewArn: string;
  RecommendationId: string;
  UserId?: string;
}
const DescribeRecommendationFeedbackRequest = /*@__PURE__*/ __L.at(
  __c3,
  3,
) as any as S.Schema<DescribeRecommendationFeedbackRequest>;
export type Reaction = "ThumbsUp" | "ThumbsDown" | (string & {});
export type Reactions = Reaction[];
const Reactions = AnalysisTypes as any as S.Schema<Reactions>;
export interface RecommendationFeedback {
  CodeReviewArn?: string;
  RecommendationId?: string;
  Reactions?: Reaction[];
  UserId?: string;
  CreatedTimeStamp?: Date;
  LastUpdatedTimeStamp?: Date;
}
const RecommendationFeedback = /*@__PURE__*/ __L.at(
  __c3,
  4,
) as any as S.Schema<RecommendationFeedback>;
export interface DescribeRecommendationFeedbackResponse {
  RecommendationFeedback?: RecommendationFeedback;
}
const DescribeRecommendationFeedbackResponse = /*@__PURE__*/ __L.at(
  __c3,
  5,
) as any as S.Schema<DescribeRecommendationFeedbackResponse>;
export interface DescribeRepositoryAssociationRequest {
  AssociationArn: string;
}
const DescribeRepositoryAssociationRequest = /*@__PURE__*/ __L.at(
  __c3,
  6,
) as any as S.Schema<DescribeRepositoryAssociationRequest>;
export interface DescribeRepositoryAssociationResponse {
  RepositoryAssociation?: RepositoryAssociation;
  Tags?: { [key: string]: string | undefined };
}
const DescribeRepositoryAssociationResponse =
  AssociateRepositoryResponse as any as S.Schema<DescribeRepositoryAssociationResponse>;
export interface DisassociateRepositoryRequest {
  AssociationArn: string;
}
const DisassociateRepositoryRequest = /*@__PURE__*/ __L.at(
  __c3,
  7,
) as any as S.Schema<DisassociateRepositoryRequest>;
export interface DisassociateRepositoryResponse {
  RepositoryAssociation?: RepositoryAssociation;
  Tags?: { [key: string]: string | undefined };
}
const DisassociateRepositoryResponse =
  AssociateRepositoryResponse as any as S.Schema<DisassociateRepositoryResponse>;
export type ProviderTypes = ProviderType[];
const ProviderTypes = AnalysisTypes as any as S.Schema<ProviderTypes>;
export type JobStates = JobState[];
const JobStates = AnalysisTypes as any as S.Schema<JobStates>;
export type RepositoryNames = string[];
const RepositoryNames = /*@__PURE__*/ __L.at(__c4, 0);
export type ListCodeReviewsMaxResults = number;
export type NextToken = string;
export interface ListCodeReviewsRequest {
  ProviderTypes?: ProviderType[];
  States?: JobState[];
  RepositoryNames?: string[];
  Type: Type;
  MaxResults?: number;
  NextToken?: string;
}
const ListCodeReviewsRequest = /*@__PURE__*/ __L.at(
  __c4,
  1,
) as any as S.Schema<ListCodeReviewsRequest>;
export interface MetricsSummary {
  MeteredLinesOfCodeCount?: number;
  SuppressedLinesOfCodeCount?: number;
  FindingsCount?: number;
}
const MetricsSummary = Metrics as any as S.Schema<MetricsSummary>;
export interface CodeReviewSummary {
  Name?: string;
  CodeReviewArn?: string;
  RepositoryName?: string;
  Owner?: string;
  ProviderType?: ProviderType;
  State?: JobState;
  CreatedTimeStamp?: Date;
  LastUpdatedTimeStamp?: Date;
  Type?: Type;
  PullRequestId?: string;
  MetricsSummary?: MetricsSummary;
  SourceCodeType?: SourceCodeType;
}
const CodeReviewSummary = /*@__PURE__*/ __L.at(__c4, 2) as any as S.Schema<CodeReviewSummary>;
export type CodeReviewSummaries = CodeReviewSummary[];
const CodeReviewSummaries = /*@__PURE__*/ __L.at(__c4, 3);
export interface ListCodeReviewsResponse {
  CodeReviewSummaries?: CodeReviewSummary[];
  NextToken?: string;
}
const ListCodeReviewsResponse = /*@__PURE__*/ __L.at(
  __c4,
  4,
) as any as S.Schema<ListCodeReviewsResponse>;
export type MaxResults = number;
export type UserIds = string[];
const UserIds = RepositoryNames as any as S.Schema<UserIds>;
export type RecommendationIds = string[];
const RecommendationIds = RepositoryNames as any as S.Schema<RecommendationIds>;
export interface ListRecommendationFeedbackRequest {
  NextToken?: string;
  MaxResults?: number;
  CodeReviewArn: string;
  UserIds?: string[];
  RecommendationIds?: string[];
}
const ListRecommendationFeedbackRequest = /*@__PURE__*/ __L.at(
  __c4,
  5,
) as any as S.Schema<ListRecommendationFeedbackRequest>;
export interface RecommendationFeedbackSummary {
  RecommendationId?: string;
  Reactions?: Reaction[];
  UserId?: string;
}
const RecommendationFeedbackSummary = /*@__PURE__*/ __L.at(
  __c4,
  6,
) as any as S.Schema<RecommendationFeedbackSummary>;
export type RecommendationFeedbackSummaries = RecommendationFeedbackSummary[];
const RecommendationFeedbackSummaries = /*@__PURE__*/ __L.at(__c4, 7);
export interface ListRecommendationFeedbackResponse {
  RecommendationFeedbackSummaries?: RecommendationFeedbackSummary[];
  NextToken?: string;
}
const ListRecommendationFeedbackResponse = /*@__PURE__*/ __L.at(
  __c5,
  0,
) as any as S.Schema<ListRecommendationFeedbackResponse>;
export type ListRecommendationsMaxResults = number;
export interface ListRecommendationsRequest {
  NextToken?: string;
  MaxResults?: number;
  CodeReviewArn: string;
}
const ListRecommendationsRequest = /*@__PURE__*/ __L.at(
  __c5,
  1,
) as any as S.Schema<ListRecommendationsRequest>;
export type FilePath = string;
export type LineNumber = number;
export type Text = string;
export type RecommendationCategory =
  | "AWSBestPractices"
  | "AWSCloudFormationIssues"
  | "DuplicateCode"
  | "CodeMaintenanceIssues"
  | "ConcurrencyIssues"
  | "InputValidations"
  | "PythonBestPractices"
  | "JavaBestPractices"
  | "ResourceLeaks"
  | "SecurityIssues"
  | "CodeInconsistencies"
  | (string & {});
const RecommendationCategory = S.String;

export type RuleId = string;
export type RuleName = string;
export type ShortDescription = string;
export type LongDescription = string;
export type RuleTag = string;
export type RuleTags = string[];
const RuleTags = RepositoryNames as any as S.Schema<RuleTags>;
export interface RuleMetadata {
  RuleId?: string;
  RuleName?: string;
  ShortDescription?: string;
  LongDescription?: string;
  RuleTags?: string[];
}
const RuleMetadata = /*@__PURE__*/ __L.at(__c5, 2) as any as S.Schema<RuleMetadata>;
export type Severity = "Info" | "Low" | "Medium" | "High" | "Critical" | (string & {});
const Severity = S.String;

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
const RecommendationSummary = /*@__PURE__*/ __L.at(
  __c5,
  3,
) as any as S.Schema<RecommendationSummary>;
export type RecommendationSummaries = RecommendationSummary[];
const RecommendationSummaries = /*@__PURE__*/ __L.at(__c5, 4);
export interface ListRecommendationsResponse {
  RecommendationSummaries?: RecommendationSummary[];
  NextToken?: string;
}
const ListRecommendationsResponse = /*@__PURE__*/ __L.at(
  __c5,
  5,
) as any as S.Schema<ListRecommendationsResponse>;
export type RepositoryAssociationStates = RepositoryAssociationState[];
const RepositoryAssociationStates = AnalysisTypes as any as S.Schema<RepositoryAssociationStates>;
export type Names = string[];
const Names = RepositoryNames as any as S.Schema<Names>;
export type Owners = string[];
const Owners = RepositoryNames as any as S.Schema<Owners>;
export interface ListRepositoryAssociationsRequest {
  ProviderTypes?: ProviderType[];
  States?: RepositoryAssociationState[];
  Names?: string[];
  Owners?: string[];
  MaxResults?: number;
  NextToken?: string;
}
const ListRepositoryAssociationsRequest = /*@__PURE__*/ __L.at(
  __c5,
  6,
) as any as S.Schema<ListRepositoryAssociationsRequest>;
export interface RepositoryAssociationSummary {
  AssociationArn?: string;
  ConnectionArn?: string;
  LastUpdatedTimeStamp?: Date;
  AssociationId?: string;
  Name?: string;
  Owner?: string;
  ProviderType?: ProviderType;
  State?: RepositoryAssociationState;
}
const RepositoryAssociationSummary = /*@__PURE__*/ __L.at(
  __c5,
  7,
) as any as S.Schema<RepositoryAssociationSummary>;
export type RepositoryAssociationSummaries = RepositoryAssociationSummary[];
const RepositoryAssociationSummaries = /*@__PURE__*/ __L.at(__c6, 0);
export interface ListRepositoryAssociationsResponse {
  RepositoryAssociationSummaries?: RepositoryAssociationSummary[];
  NextToken?: string;
}
const ListRepositoryAssociationsResponse = /*@__PURE__*/ __L.at(
  __c6,
  1,
) as any as S.Schema<ListRepositoryAssociationsResponse>;
export interface ListTagsForResourceRequest {
  resourceArn: string;
}
const ListTagsForResourceRequest = /*@__PURE__*/ __L.at(
  __c6,
  2,
) as any as S.Schema<ListTagsForResourceRequest>;
export interface ListTagsForResourceResponse {
  Tags?: { [key: string]: string | undefined };
}
const ListTagsForResourceResponse = /*@__PURE__*/ __L.at(
  __c6,
  3,
) as any as S.Schema<ListTagsForResourceResponse>;
export interface PutRecommendationFeedbackRequest {
  CodeReviewArn: string;
  RecommendationId: string;
  Reactions: Reaction[];
}
const PutRecommendationFeedbackRequest = /*@__PURE__*/ __L.at(
  __c6,
  4,
) as any as S.Schema<PutRecommendationFeedbackRequest>;
export interface PutRecommendationFeedbackResponse {}
const PutRecommendationFeedbackResponse = /*@__PURE__*/ __L.at(
  __c6,
  5,
) as any as S.Schema<PutRecommendationFeedbackResponse>;
export interface TagResourceRequest {
  resourceArn: string;
  Tags: { [key: string]: string | undefined };
}
const TagResourceRequest = /*@__PURE__*/ __L.at(__c6, 6) as any as S.Schema<TagResourceRequest>;
export interface TagResourceResponse {}
const TagResourceResponse = /*@__PURE__*/ __L.at(__c6, 7) as any as S.Schema<TagResourceResponse>;
export type TagKeyList = string[];
const TagKeyList = RepositoryNames as any as S.Schema<TagKeyList>;
export interface UntagResourceRequest {
  resourceArn: string;
  TagKeys: string[];
}
const UntagResourceRequest = /*@__PURE__*/ __L.at(__c7, 0) as any as S.Schema<UntagResourceRequest>;
export interface UntagResourceResponse {}
const UntagResourceResponse = TagResourceResponse as any as S.Schema<UntagResourceResponse>;
export type ErrorMessage = string;
export type AssociateRepositoryError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Use to associate an Amazon Web Services CodeCommit repository or a repository managed by Amazon Web Services
 * CodeStar Connections with Amazon CodeGuru Reviewer. When you associate a repository, CodeGuru Reviewer reviews
 * source code changes in the repository's pull requests and provides automatic
 * recommendations. You can view recommendations using the CodeGuru Reviewer console. For more
 * information, see Recommendations in
 * Amazon CodeGuru Reviewer in the *Amazon CodeGuru Reviewer User Guide.*
 *
 * If you associate a CodeCommit or S3 repository, it must be in the same Amazon Web Services Region and
 * Amazon Web Services account where its CodeGuru Reviewer code reviews are configured.
 *
 * Bitbucket and GitHub Enterprise Server repositories are managed by Amazon Web Services CodeStar
 * Connections to connect to CodeGuru Reviewer. For more information, see Associate a
 * repository in the *Amazon CodeGuru Reviewer User Guide.*
 *
 * You cannot use the CodeGuru Reviewer SDK or the Amazon Web Services CLI to associate a GitHub repository with
 * Amazon CodeGuru Reviewer. To associate a GitHub repository, use the console. For more information, see
 * Getting started with
 * CodeGuru Reviewer in the *CodeGuru Reviewer User Guide.*
 */
export const associateRepository: API.OperationMethod<
  AssociateRepositoryRequest,
  AssociateRepositoryResponse,
  AssociateRepositoryError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: AssociateRepositoryRequest,
  output: AssociateRepositoryResponse,
  errors: [
    AccessDeniedException,
    ConflictException,
    InternalServerException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "AssociateRepository",
}));

export type CreateCodeReviewError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Use to create a code review with a CodeReviewType of
 * `RepositoryAnalysis`. This type of code review analyzes all code under a
 * specified branch in an associated repository. `PullRequest` code reviews are
 * automatically triggered by a pull request.
 */
export const createCodeReview: API.OperationMethod<
  CreateCodeReviewRequest,
  CreateCodeReviewResponse,
  CreateCodeReviewError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: CreateCodeReviewRequest,
  output: CreateCodeReviewResponse,
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
  operationName: "CreateCodeReview",
}));

export type DescribeCodeReviewError =
  | AccessDeniedException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Returns the metadata associated with the code review along with its status.
 */
export const describeCodeReview: API.OperationMethod<
  DescribeCodeReviewRequest,
  DescribeCodeReviewResponse,
  DescribeCodeReviewError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: DescribeCodeReviewRequest,
  output: DescribeCodeReviewResponse,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DescribeCodeReview",
}));

export type DescribeRecommendationFeedbackError =
  | AccessDeniedException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Describes the customer feedback for a CodeGuru Reviewer recommendation.
 */
export const describeRecommendationFeedback: API.OperationMethod<
  DescribeRecommendationFeedbackRequest,
  DescribeRecommendationFeedbackResponse,
  DescribeRecommendationFeedbackError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: DescribeRecommendationFeedbackRequest,
  output: DescribeRecommendationFeedbackResponse,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DescribeRecommendationFeedback",
}));

export type DescribeRepositoryAssociationError =
  | AccessDeniedException
  | InternalServerException
  | NotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Returns a RepositoryAssociation object that contains information about the requested
 * repository association.
 */
export const describeRepositoryAssociation: API.OperationMethod<
  DescribeRepositoryAssociationRequest,
  DescribeRepositoryAssociationResponse,
  DescribeRepositoryAssociationError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: DescribeRepositoryAssociationRequest,
  output: DescribeRepositoryAssociationResponse,
  errors: [
    AccessDeniedException,
    InternalServerException,
    NotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DescribeRepositoryAssociation",
}));

export type DisassociateRepositoryError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | NotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Removes the association between Amazon CodeGuru Reviewer and a repository.
 */
export const disassociateRepository: API.OperationMethod<
  DisassociateRepositoryRequest,
  DisassociateRepositoryResponse,
  DisassociateRepositoryError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: DisassociateRepositoryRequest,
  output: DisassociateRepositoryResponse,
  errors: [
    AccessDeniedException,
    ConflictException,
    InternalServerException,
    NotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DisassociateRepository",
}));

export type ListCodeReviewsError =
  | AccessDeniedException
  | InternalServerException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Lists all the code reviews that the customer has created in the past 90 days.
 */
export const listCodeReviews: API.PaginatedOperationMethod<
  ListCodeReviewsRequest,
  ListCodeReviewsResponse,
  ListCodeReviewsError,
  Credentials | HttpClient.HttpClient,
  unknown
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: ListCodeReviewsRequest,
  output: ListCodeReviewsResponse,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListCodeReviews",
  pagination: {
    inputToken: "NextToken",
    outputToken: "NextToken",
    pageSize: "MaxResults",
  } as const,
})) as any;

export type ListRecommendationFeedbackError =
  | AccessDeniedException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Returns a list of RecommendationFeedbackSummary objects that contain customer recommendation
 * feedback for all CodeGuru Reviewer users.
 */
export const listRecommendationFeedback: API.PaginatedOperationMethod<
  ListRecommendationFeedbackRequest,
  ListRecommendationFeedbackResponse,
  ListRecommendationFeedbackError,
  Credentials | HttpClient.HttpClient,
  unknown
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: ListRecommendationFeedbackRequest,
  output: ListRecommendationFeedbackResponse,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListRecommendationFeedback",
  pagination: {
    inputToken: "NextToken",
    outputToken: "NextToken",
    pageSize: "MaxResults",
  } as const,
})) as any;

export type ListRecommendationsError =
  | AccessDeniedException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Returns the list of all recommendations for a completed code review.
 */
export const listRecommendations: API.PaginatedOperationMethod<
  ListRecommendationsRequest,
  ListRecommendationsResponse,
  ListRecommendationsError,
  Credentials | HttpClient.HttpClient,
  unknown
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: ListRecommendationsRequest,
  output: ListRecommendationsResponse,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListRecommendations",
  pagination: {
    inputToken: "NextToken",
    outputToken: "NextToken",
    pageSize: "MaxResults",
  } as const,
})) as any;

export type ListRepositoryAssociationsError =
  | InternalServerException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Returns a list of RepositoryAssociationSummary objects that contain summary information about a
 * repository association. You can filter the returned list by ProviderType, Name, State, and Owner.
 */
export const listRepositoryAssociations: API.PaginatedOperationMethod<
  ListRepositoryAssociationsRequest,
  ListRepositoryAssociationsResponse,
  ListRepositoryAssociationsError,
  Credentials | HttpClient.HttpClient,
  RepositoryAssociationSummary
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: ListRepositoryAssociationsRequest,
  output: ListRepositoryAssociationsResponse,
  errors: [InternalServerException, ThrottlingException, ValidationException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListRepositoryAssociations",
  pagination: {
    inputToken: "NextToken",
    outputToken: "NextToken",
    items: "RepositoryAssociationSummaries",
    pageSize: "MaxResults",
  } as const,
})) as any;

export type ListTagsForResourceError =
  | InternalServerException
  | ResourceNotFoundException
  | ValidationException
  | CommonErrors;
/**
 * Returns the list of tags associated with an associated repository resource.
 */
export const listTagsForResource: API.OperationMethod<
  ListTagsForResourceRequest,
  ListTagsForResourceResponse,
  ListTagsForResourceError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: ListTagsForResourceRequest,
  output: ListTagsForResourceResponse,
  errors: [InternalServerException, ResourceNotFoundException, ValidationException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListTagsForResource",
}));

export type PutRecommendationFeedbackError =
  | AccessDeniedException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Stores customer feedback for a CodeGuru Reviewer recommendation. When this API is called again with
 * different reactions the previous feedback is overwritten.
 */
export const putRecommendationFeedback: API.OperationMethod<
  PutRecommendationFeedbackRequest,
  PutRecommendationFeedbackResponse,
  PutRecommendationFeedbackError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: PutRecommendationFeedbackRequest,
  output: PutRecommendationFeedbackResponse,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "PutRecommendationFeedback",
}));

export type TagResourceError =
  | InternalServerException
  | ResourceNotFoundException
  | ValidationException
  | CommonErrors;
/**
 * Adds one or more tags to an associated repository.
 */
export const tagResource: API.OperationMethod<
  TagResourceRequest,
  TagResourceResponse,
  TagResourceError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: TagResourceRequest,
  output: TagResourceResponse,
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
 * Removes a tag from an associated repository.
 */
export const untagResource: API.OperationMethod<
  UntagResourceRequest,
  UntagResourceResponse,
  UntagResourceError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: UntagResourceRequest,
  output: UntagResourceResponse,
  errors: [InternalServerException, ResourceNotFoundException, ValidationException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "UntagResource",
}));

// Schema builders: each runs one schema initializer, on that schema's first use.
function __c0(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() => S.Struct({ Name: S.String })).annotate({
        identifier: "CodeCommitRepository",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({ Name: S.String, ConnectionArn: S.String, Owner: S.String }),
      ).annotate({
        identifier: "ThirdPartySourceRepository",
      });
    case 2:
      return S.suspend(() => S.Struct({ Name: S.String, BucketName: S.String })).annotate({
        identifier: "S3Repository",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({
          CodeCommit: S.optional(CodeCommitRepository),
          Bitbucket: S.optional(ThirdPartySourceRepository),
          GitHubEnterpriseServer: S.optional(ThirdPartySourceRepository),
          S3Bucket: S.optional(S3Repository),
        }),
      ).annotate({ identifier: "Repository" });
    case 4:
      return S.Record(S.String, /*@__PURE__*/ S.String.pipe(S.optional));
    case 5:
      return S.suspend(() =>
        S.Struct({
          KMSKeyId: S.optional(S.String),
          EncryptionOption: S.optional(EncryptionOption),
        }),
      ).annotate({ identifier: "KMSKeyDetails" });
    case 6:
      return S.suspend(() =>
        S.Struct({
          Repository: Repository,
          ClientRequestToken: S.optional(S.String).pipe(T.IdempotencyToken()),
          Tags: S.optional(TagMap),
          KMSKeyDetails: S.optional(KMSKeyDetails),
        }).pipe(
          T.all(T.Http({ method: "POST", uri: "/associations" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({
        identifier: "AssociateRepositoryRequest",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({
          SourceCodeArtifactsObjectKey: S.String,
          BuildArtifactsObjectKey: S.optional(S.String),
        }),
      ).annotate({ identifier: "CodeArtifacts" });
  }
}
function __c1(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({ BucketName: S.optional(S.String), CodeArtifacts: S.optional(CodeArtifacts) }),
      ).annotate({ identifier: "S3RepositoryDetails" });
    case 1:
      return S.suspend(() =>
        S.Struct({
          AssociationId: S.optional(S.String),
          AssociationArn: S.optional(S.String),
          ConnectionArn: S.optional(S.String),
          Name: S.optional(S.String),
          Owner: S.optional(S.String),
          ProviderType: S.optional(ProviderType),
          State: S.optional(RepositoryAssociationState),
          StateReason: S.optional(S.String),
          LastUpdatedTimeStamp: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          CreatedTimeStamp: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          KMSKeyDetails: S.optional(KMSKeyDetails),
          S3RepositoryDetails: S.optional(S3RepositoryDetails),
        }),
      ).annotate({ identifier: "RepositoryAssociation" });
    case 2:
      return S.suspend(() =>
        S.Struct({
          RepositoryAssociation: S.optional(RepositoryAssociation),
          Tags: S.optional(TagMap),
        }),
      ).annotate({
        identifier: "AssociateRepositoryResponse",
      });
    case 3:
      return S.suspend(() => S.Struct({ BranchName: S.String })).annotate({
        identifier: "RepositoryHeadSourceCodeType",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({
          SourceCommit: S.optional(S.String),
          DestinationCommit: S.optional(S.String),
          MergeBaseCommit: S.optional(S.String),
        }),
      ).annotate({ identifier: "CommitDiffSourceCodeType" });
    case 5:
      return S.suspend(() =>
        S.Struct({ SourceBranchName: S.String, DestinationBranchName: S.String }),
      ).annotate({ identifier: "BranchDiffSourceCodeType" });
    case 6:
      return S.suspend(() =>
        S.Struct({ Name: S.String, Details: S.optional(S3RepositoryDetails) }),
      ).annotate({ identifier: "S3BucketRepository" });
    case 7:
      return S.suspend(() =>
        S.Struct({ Name: S.optional(S.String), State: S.optional(S.String) }),
      ).annotate({ identifier: "EventInfo" });
  }
}
function __c2(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          RequestId: S.optional(S.String),
          Requester: S.optional(S.String),
          EventInfo: S.optional(EventInfo),
          VendorName: S.optional(VendorName),
        }),
      ).annotate({ identifier: "RequestMetadata" });
    case 1:
      return S.suspend(() =>
        S.Struct({
          CommitDiff: S.optional(CommitDiffSourceCodeType),
          RepositoryHead: S.optional(RepositoryHeadSourceCodeType),
          BranchDiff: S.optional(BranchDiffSourceCodeType),
          S3BucketRepository: S.optional(S3BucketRepository),
          RequestMetadata: S.optional(RequestMetadata),
        }),
      ).annotate({ identifier: "SourceCodeType" });
    case 2:
      return S.suspend(() =>
        S.Struct({
          RepositoryHead: S.optional(RepositoryHeadSourceCodeType),
          SourceCodeType: S.optional(SourceCodeType),
        }),
      ).annotate({ identifier: "RepositoryAnalysis" });
    case 3:
      return S.Array(AnalysisType);
    case 4:
      return S.suspend(() =>
        S.Struct({
          RepositoryAnalysis: RepositoryAnalysis,
          AnalysisTypes: S.optional(AnalysisTypes),
        }),
      ).annotate({ identifier: "CodeReviewType" });
    case 5:
      return S.suspend(() =>
        S.Struct({
          Name: S.String,
          RepositoryAssociationArn: S.String,
          Type: CodeReviewType,
          ClientRequestToken: S.optional(S.String).pipe(T.IdempotencyToken()),
        }).pipe(
          T.all(T.Http({ method: "POST", uri: "/codereviews" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({ identifier: "CreateCodeReviewRequest" });
    case 6:
      return S.suspend(() =>
        S.Struct({
          MeteredLinesOfCodeCount: S.optional(S.Number),
          SuppressedLinesOfCodeCount: S.optional(S.Number),
          FindingsCount: S.optional(S.Number),
        }),
      ).annotate({ identifier: "Metrics" });
    case 7:
      return S.suspend(() =>
        S.Struct({
          Name: S.optional(S.String),
          CodeReviewArn: S.optional(S.String),
          RepositoryName: S.optional(S.String),
          Owner: S.optional(S.String),
          ProviderType: S.optional(ProviderType),
          State: S.optional(JobState),
          StateReason: S.optional(S.String),
          CreatedTimeStamp: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          LastUpdatedTimeStamp: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          Type: S.optional(Type),
          PullRequestId: S.optional(S.String),
          SourceCodeType: S.optional(SourceCodeType),
          AssociationArn: S.optional(S.String),
          Metrics: S.optional(Metrics),
          AnalysisTypes: S.optional(AnalysisTypes),
          ConfigFileState: S.optional(ConfigFileState),
        }),
      ).annotate({ identifier: "CodeReview" });
  }
}
function __c3(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() => S.Struct({ CodeReview: S.optional(CodeReview) })).annotate({
        identifier: "CreateCodeReviewResponse",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({ CodeReviewArn: S.String.pipe(T.HttpLabel("CodeReviewArn")) }).pipe(
          T.all(
            T.Http({ method: "GET", uri: "/codereviews/{CodeReviewArn}" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "DescribeCodeReviewRequest",
      });
    case 2:
      return S.suspend(() => S.Struct({ CodeReview: S.optional(CodeReview) })).annotate({
        identifier: "DescribeCodeReviewResponse",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({
          CodeReviewArn: S.String.pipe(T.HttpLabel("CodeReviewArn")),
          RecommendationId: S.String.pipe(T.HttpQuery("RecommendationId")),
          UserId: S.optional(S.String).pipe(T.HttpQuery("UserId")),
        }).pipe(
          T.all(
            T.Http({ method: "GET", uri: "/feedback/{CodeReviewArn}" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "DescribeRecommendationFeedbackRequest",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({
          CodeReviewArn: S.optional(S.String),
          RecommendationId: S.optional(S.String),
          Reactions: S.optional(Reactions),
          UserId: S.optional(S.String),
          CreatedTimeStamp: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          LastUpdatedTimeStamp: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
        }),
      ).annotate({ identifier: "RecommendationFeedback" });
    case 5:
      return S.suspend(() =>
        S.Struct({ RecommendationFeedback: S.optional(RecommendationFeedback) }),
      ).annotate({
        identifier: "DescribeRecommendationFeedbackResponse",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({ AssociationArn: S.String.pipe(T.HttpLabel("AssociationArn")) }).pipe(
          T.all(
            T.Http({ method: "GET", uri: "/associations/{AssociationArn}" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "DescribeRepositoryAssociationRequest",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({ AssociationArn: S.String.pipe(T.HttpLabel("AssociationArn")) }).pipe(
          T.all(
            T.Http({ method: "DELETE", uri: "/associations/{AssociationArn}" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "DisassociateRepositoryRequest",
      });
  }
}
function __c4(j: number): any {
  switch (j) {
    case 0:
      return S.Array(S.String);
    case 1:
      return S.suspend(() =>
        S.Struct({
          ProviderTypes: S.optional(ProviderTypes).pipe(T.HttpQuery("ProviderTypes")),
          States: S.optional(JobStates).pipe(T.HttpQuery("States")),
          RepositoryNames: S.optional(RepositoryNames).pipe(T.HttpQuery("RepositoryNames")),
          Type: Type.pipe(T.HttpQuery("Type")),
          MaxResults: S.optional(S.Number).pipe(T.HttpQuery("MaxResults")),
          NextToken: S.optional(S.String).pipe(T.HttpQuery("NextToken")),
        }).pipe(
          T.all(T.Http({ method: "GET", uri: "/codereviews" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({ identifier: "ListCodeReviewsRequest" });
    case 2:
      return S.suspend(() =>
        S.Struct({
          Name: S.optional(S.String),
          CodeReviewArn: S.optional(S.String),
          RepositoryName: S.optional(S.String),
          Owner: S.optional(S.String),
          ProviderType: S.optional(ProviderType),
          State: S.optional(JobState),
          CreatedTimeStamp: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          LastUpdatedTimeStamp: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          Type: S.optional(Type),
          PullRequestId: S.optional(S.String),
          MetricsSummary: S.optional(MetricsSummary),
          SourceCodeType: S.optional(SourceCodeType),
        }),
      ).annotate({ identifier: "CodeReviewSummary" });
    case 3:
      return S.Array(CodeReviewSummary);
    case 4:
      return S.suspend(() =>
        S.Struct({
          CodeReviewSummaries: S.optional(CodeReviewSummaries),
          NextToken: S.optional(S.String),
        }),
      ).annotate({ identifier: "ListCodeReviewsResponse" });
    case 5:
      return S.suspend(() =>
        S.Struct({
          NextToken: S.optional(S.String).pipe(T.HttpQuery("NextToken")),
          MaxResults: S.optional(S.Number).pipe(T.HttpQuery("MaxResults")),
          CodeReviewArn: S.String.pipe(T.HttpLabel("CodeReviewArn")),
          UserIds: S.optional(UserIds).pipe(T.HttpQuery("UserIds")),
          RecommendationIds: S.optional(RecommendationIds).pipe(T.HttpQuery("RecommendationIds")),
        }).pipe(
          T.all(
            T.Http({ method: "GET", uri: "/feedback/{CodeReviewArn}/RecommendationFeedback" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "ListRecommendationFeedbackRequest",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({
          RecommendationId: S.optional(S.String),
          Reactions: S.optional(Reactions),
          UserId: S.optional(S.String),
        }),
      ).annotate({
        identifier: "RecommendationFeedbackSummary",
      });
    case 7:
      return S.Array(RecommendationFeedbackSummary);
  }
}
function __c5(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          RecommendationFeedbackSummaries: S.optional(RecommendationFeedbackSummaries),
          NextToken: S.optional(S.String),
        }),
      ).annotate({
        identifier: "ListRecommendationFeedbackResponse",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({
          NextToken: S.optional(S.String).pipe(T.HttpQuery("NextToken")),
          MaxResults: S.optional(S.Number).pipe(T.HttpQuery("MaxResults")),
          CodeReviewArn: S.String.pipe(T.HttpLabel("CodeReviewArn")),
        }).pipe(
          T.all(
            T.Http({ method: "GET", uri: "/codereviews/{CodeReviewArn}/Recommendations" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "ListRecommendationsRequest",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({
          RuleId: S.optional(S.String),
          RuleName: S.optional(S.String),
          ShortDescription: S.optional(S.String),
          LongDescription: S.optional(S.String),
          RuleTags: S.optional(RuleTags),
        }),
      ).annotate({ identifier: "RuleMetadata" });
    case 3:
      return S.suspend(() =>
        S.Struct({
          FilePath: S.optional(S.String),
          RecommendationId: S.optional(S.String),
          StartLine: S.optional(S.Number),
          EndLine: S.optional(S.Number),
          Description: S.optional(S.String),
          RecommendationCategory: S.optional(RecommendationCategory),
          RuleMetadata: S.optional(RuleMetadata),
          Severity: S.optional(Severity),
        }),
      ).annotate({ identifier: "RecommendationSummary" });
    case 4:
      return S.Array(RecommendationSummary);
    case 5:
      return S.suspend(() =>
        S.Struct({
          RecommendationSummaries: S.optional(RecommendationSummaries),
          NextToken: S.optional(S.String),
        }),
      ).annotate({
        identifier: "ListRecommendationsResponse",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({
          ProviderTypes: S.optional(ProviderTypes).pipe(T.HttpQuery("ProviderType")),
          States: S.optional(RepositoryAssociationStates).pipe(T.HttpQuery("State")),
          Names: S.optional(Names).pipe(T.HttpQuery("Name")),
          Owners: S.optional(Owners).pipe(T.HttpQuery("Owner")),
          MaxResults: S.optional(S.Number).pipe(T.HttpQuery("MaxResults")),
          NextToken: S.optional(S.String).pipe(T.HttpQuery("NextToken")),
        }).pipe(
          T.all(T.Http({ method: "GET", uri: "/associations" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({
        identifier: "ListRepositoryAssociationsRequest",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({
          AssociationArn: S.optional(S.String),
          ConnectionArn: S.optional(S.String),
          LastUpdatedTimeStamp: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          AssociationId: S.optional(S.String),
          Name: S.optional(S.String),
          Owner: S.optional(S.String),
          ProviderType: S.optional(ProviderType),
          State: S.optional(RepositoryAssociationState),
        }),
      ).annotate({
        identifier: "RepositoryAssociationSummary",
      });
  }
}
function __c6(j: number): any {
  switch (j) {
    case 0:
      return S.Array(RepositoryAssociationSummary);
    case 1:
      return S.suspend(() =>
        S.Struct({
          RepositoryAssociationSummaries: S.optional(RepositoryAssociationSummaries),
          NextToken: S.optional(S.String),
        }),
      ).annotate({
        identifier: "ListRepositoryAssociationsResponse",
      });
    case 2:
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
    case 3:
      return S.suspend(() => S.Struct({ Tags: S.optional(TagMap) })).annotate({
        identifier: "ListTagsForResourceResponse",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({
          CodeReviewArn: S.String,
          RecommendationId: S.String,
          Reactions: Reactions,
        }).pipe(T.all(T.Http({ method: "PUT", uri: "/feedback" }), svc, auth, proto, ver, rules)),
      ).annotate({
        identifier: "PutRecommendationFeedbackRequest",
      });
    case 5:
      return S.suspend(() => S.Struct({})).annotate({
        identifier: "PutRecommendationFeedbackResponse",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({ resourceArn: S.String.pipe(T.HttpLabel("resourceArn")), Tags: TagMap }).pipe(
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
    case 7:
      return S.suspend(() => S.Struct({})).annotate({
        identifier: "TagResourceResponse",
      });
  }
}
function __c7(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          resourceArn: S.String.pipe(T.HttpLabel("resourceArn")),
          TagKeys: TagKeyList.pipe(T.HttpQuery("tagKeys")),
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
  }
}
