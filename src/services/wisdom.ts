import type { Effect, Data } from "effect";
import type { CommonAwsError } from "../error.ts";

export interface WisdomService {
  listTagsForResource(
    input: ListTagsForResourceRequest,
  ): Effect.Effect<
    ListTagsForResourceResponse,
    ResourceNotFoundException | CommonAwsError
  >;
  tagResource(
    input: TagResourceRequest,
  ): Effect.Effect<
    TagResourceResponse,
    ResourceNotFoundException | TooManyTagsException | CommonAwsError
  >;
  untagResource(
    input: UntagResourceRequest,
  ): Effect.Effect<
    UntagResourceResponse,
    ResourceNotFoundException | CommonAwsError
  >;
}

export type Wisdom = WisdomService;

export declare class AccessDeniedException extends Data.TaggedError(
  "AccessDeniedException",
)<{
  readonly message?: string;
}> {}
export interface AppIntegrationsConfiguration {
  appIntegrationArn: string;
  objectFields?: Array<string>;
}
export type Arn = string;

export interface AssistantAssociationData {
  assistantAssociationId: string;
  assistantAssociationArn: string;
  assistantId: string;
  assistantArn: string;
  associationType: string;
  associationData: AssistantAssociationOutputData;
  tags?: Record<string, string>;
}
export type AssistantAssociationInputData = { knowledgeBaseId: string };
export type AssistantAssociationOutputData = {
  knowledgeBaseAssociation: KnowledgeBaseAssociationData;
};
export interface AssistantAssociationSummary {
  assistantAssociationId: string;
  assistantAssociationArn: string;
  assistantId: string;
  assistantArn: string;
  associationType: string;
  associationData: AssistantAssociationOutputData;
  tags?: Record<string, string>;
}
export type AssistantAssociationSummaryList =
  Array<AssistantAssociationSummary>;
export interface AssistantData {
  assistantId: string;
  assistantArn: string;
  name: string;
  type: string;
  status: string;
  description?: string;
  tags?: Record<string, string>;
  serverSideEncryptionConfiguration?: ServerSideEncryptionConfiguration;
  integrationConfiguration?: AssistantIntegrationConfiguration;
}
export interface AssistantIntegrationConfiguration {
  topicIntegrationArn?: string;
}
export type AssistantList = Array<AssistantSummary>;
export type AssistantStatus = string;

export interface AssistantSummary {
  assistantId: string;
  assistantArn: string;
  name: string;
  type: string;
  status: string;
  description?: string;
  tags?: Record<string, string>;
  serverSideEncryptionConfiguration?: ServerSideEncryptionConfiguration;
  integrationConfiguration?: AssistantIntegrationConfiguration;
}
export type AssistantType = string;

export type AssociationType = string;

export type Channel = string;

export type Channels = Array<string>;
export type ClientToken = string;

export type Configuration = { connectConfiguration: ConnectConfiguration };
export declare class ConflictException extends Data.TaggedError(
  "ConflictException",
)<{
  readonly message?: string;
}> {}
export interface ConnectConfiguration {
  instanceId?: string;
}
export type ContactAttributeKey = string;

export type ContactAttributeKeys = Array<string>;
export type ContactAttributes = Record<string, string>;
export type ContactAttributeValue = string;

export interface ContentData {
  contentArn: string;
  contentId: string;
  knowledgeBaseArn: string;
  knowledgeBaseId: string;
  name: string;
  revisionId: string;
  title: string;
  contentType: string;
  status: string;
  metadata: Record<string, string>;
  tags?: Record<string, string>;
  linkOutUri?: string;
  url: string;
  urlExpiry: Date | string;
}
export type ContentMetadata = Record<string, string>;
export interface ContentReference {
  knowledgeBaseArn?: string;
  knowledgeBaseId?: string;
  contentArn?: string;
  contentId?: string;
}
export type ContentStatus = string;

export interface ContentSummary {
  contentArn: string;
  contentId: string;
  knowledgeBaseArn: string;
  knowledgeBaseId: string;
  name: string;
  revisionId: string;
  title: string;
  contentType: string;
  status: string;
  metadata: Record<string, string>;
  tags?: Record<string, string>;
}
export type ContentSummaryList = Array<ContentSummary>;
export type ContentTitle = string;

export type ContentType = string;

export interface CreateAssistantAssociationRequest {
  assistantId: string;
  associationType: string;
  association: AssistantAssociationInputData;
  clientToken?: string;
  tags?: Record<string, string>;
}
export interface CreateAssistantAssociationResponse {
  assistantAssociation?: AssistantAssociationData;
}
export interface CreateAssistantRequest {
  clientToken?: string;
  name: string;
  type: string;
  description?: string;
  tags?: Record<string, string>;
  serverSideEncryptionConfiguration?: ServerSideEncryptionConfiguration;
}
export interface CreateAssistantResponse {
  assistant?: AssistantData;
}
export interface CreateContentRequest {
  knowledgeBaseId: string;
  name: string;
  title?: string;
  overrideLinkOutUri?: string;
  metadata?: Record<string, string>;
  uploadId: string;
  clientToken?: string;
  tags?: Record<string, string>;
}
export interface CreateContentResponse {
  content?: ContentData;
}
export interface CreateKnowledgeBaseRequest {
  clientToken?: string;
  name: string;
  knowledgeBaseType: string;
  sourceConfiguration?: SourceConfiguration;
  renderingConfiguration?: RenderingConfiguration;
  serverSideEncryptionConfiguration?: ServerSideEncryptionConfiguration;
  description?: string;
  tags?: Record<string, string>;
}
export interface CreateKnowledgeBaseResponse {
  knowledgeBase?: KnowledgeBaseData;
}
export interface CreateQuickResponseRequest {
  knowledgeBaseId: string;
  name: string;
  content: QuickResponseDataProvider;
  contentType?: string;
  groupingConfiguration?: GroupingConfiguration;
  description?: string;
  shortcutKey?: string;
  isActive?: boolean;
  channels?: Array<string>;
  language?: string;
  clientToken?: string;
  tags?: Record<string, string>;
}
export interface CreateQuickResponseResponse {
  quickResponse?: QuickResponseData;
}
export interface CreateSessionRequest {
  clientToken?: string;
  assistantId: string;
  name: string;
  description?: string;
  tags?: Record<string, string>;
}
export interface CreateSessionResponse {
  session?: SessionData;
}
export interface DeleteAssistantAssociationRequest {
  assistantAssociationId: string;
  assistantId: string;
}
export interface DeleteAssistantAssociationResponse {}
export interface DeleteAssistantRequest {
  assistantId: string;
}
export interface DeleteAssistantResponse {}
export interface DeleteContentRequest {
  knowledgeBaseId: string;
  contentId: string;
}
export interface DeleteContentResponse {}
export interface DeleteImportJobRequest {
  knowledgeBaseId: string;
  importJobId: string;
}
export interface DeleteImportJobResponse {}
export interface DeleteKnowledgeBaseRequest {
  knowledgeBaseId: string;
}
export interface DeleteKnowledgeBaseResponse {}
export interface DeleteQuickResponseRequest {
  knowledgeBaseId: string;
  quickResponseId: string;
}
export interface DeleteQuickResponseResponse {}
export type Description = string;

export interface Document {
  contentReference: ContentReference;
  title?: DocumentText;
  excerpt?: DocumentText;
}
export interface DocumentText {
  text?: string;
  highlights?: Array<Highlight>;
}
export type ExternalSource = string;

export interface ExternalSourceConfiguration {
  source: string;
  configuration: Configuration;
}
export interface Filter {
  field: string;
  operator: string;
  value: string;
}
export type FilterField = string;

export type FilterList = Array<Filter>;
export type FilterOperator = string;

export type GenericArn = string;

export interface GetAssistantAssociationRequest {
  assistantAssociationId: string;
  assistantId: string;
}
export interface GetAssistantAssociationResponse {
  assistantAssociation?: AssistantAssociationData;
}
export interface GetAssistantRequest {
  assistantId: string;
}
export interface GetAssistantResponse {
  assistant?: AssistantData;
}
export interface GetContentRequest {
  contentId: string;
  knowledgeBaseId: string;
}
export interface GetContentResponse {
  content?: ContentData;
}
export interface GetContentSummaryRequest {
  contentId: string;
  knowledgeBaseId: string;
}
export interface GetContentSummaryResponse {
  contentSummary?: ContentSummary;
}
export interface GetImportJobRequest {
  importJobId: string;
  knowledgeBaseId: string;
}
export interface GetImportJobResponse {
  importJob?: ImportJobData;
}
export interface GetKnowledgeBaseRequest {
  knowledgeBaseId: string;
}
export interface GetKnowledgeBaseResponse {
  knowledgeBase?: KnowledgeBaseData;
}
export interface GetQuickResponseRequest {
  quickResponseId: string;
  knowledgeBaseId: string;
}
export interface GetQuickResponseResponse {
  quickResponse?: QuickResponseData;
}
export interface GetRecommendationsRequest {
  assistantId: string;
  sessionId: string;
  maxResults?: number;
  waitTimeSeconds?: number;
}
export interface GetRecommendationsResponse {
  recommendations: Array<RecommendationData>;
  triggers?: Array<RecommendationTrigger>;
}
export interface GetSessionRequest {
  assistantId: string;
  sessionId: string;
}
export interface GetSessionResponse {
  session?: SessionData;
}
export interface GroupingConfiguration {
  criteria?: string;
  values?: Array<string>;
}
export type GroupingCriteria = string;

export type GroupingValue = string;

export type GroupingValues = Array<string>;
export type Headers = Record<string, string>;
export interface Highlight {
  beginOffsetInclusive?: number;
  endOffsetExclusive?: number;
}
export type HighlightOffset = number;

export type Highlights = Array<Highlight>;
export interface ImportJobData {
  importJobId: string;
  knowledgeBaseId: string;
  uploadId: string;
  knowledgeBaseArn: string;
  importJobType: string;
  status: string;
  url: string;
  failedRecordReport?: string;
  urlExpiry: Date | string;
  createdTime: Date | string;
  lastModifiedTime: Date | string;
  metadata?: Record<string, string>;
  externalSourceConfiguration?: ExternalSourceConfiguration;
}
export type ImportJobList = Array<ImportJobSummary>;
export type ImportJobStatus = string;

export interface ImportJobSummary {
  importJobId: string;
  knowledgeBaseId: string;
  uploadId: string;
  knowledgeBaseArn: string;
  importJobType: string;
  status: string;
  createdTime: Date | string;
  lastModifiedTime: Date | string;
  metadata?: Record<string, string>;
  externalSourceConfiguration?: ExternalSourceConfiguration;
}
export type ImportJobType = string;

export interface KnowledgeBaseAssociationData {
  knowledgeBaseId?: string;
  knowledgeBaseArn?: string;
}
export interface KnowledgeBaseData {
  knowledgeBaseId: string;
  knowledgeBaseArn: string;
  name: string;
  knowledgeBaseType: string;
  status: string;
  lastContentModificationTime?: Date | string;
  sourceConfiguration?: SourceConfiguration;
  renderingConfiguration?: RenderingConfiguration;
  serverSideEncryptionConfiguration?: ServerSideEncryptionConfiguration;
  description?: string;
  tags?: Record<string, string>;
}
export type KnowledgeBaseList = Array<KnowledgeBaseSummary>;
export type KnowledgeBaseStatus = string;

export interface KnowledgeBaseSummary {
  knowledgeBaseId: string;
  knowledgeBaseArn: string;
  name: string;
  knowledgeBaseType: string;
  status: string;
  sourceConfiguration?: SourceConfiguration;
  renderingConfiguration?: RenderingConfiguration;
  serverSideEncryptionConfiguration?: ServerSideEncryptionConfiguration;
  description?: string;
  tags?: Record<string, string>;
}
export type KnowledgeBaseType = string;

export type LanguageCode = string;

export interface ListAssistantAssociationsRequest {
  nextToken?: string;
  maxResults?: number;
  assistantId: string;
}
export interface ListAssistantAssociationsResponse {
  assistantAssociationSummaries: Array<AssistantAssociationSummary>;
  nextToken?: string;
}
export interface ListAssistantsRequest {
  nextToken?: string;
  maxResults?: number;
}
export interface ListAssistantsResponse {
  assistantSummaries: Array<AssistantSummary>;
  nextToken?: string;
}
export interface ListContentsRequest {
  nextToken?: string;
  maxResults?: number;
  knowledgeBaseId: string;
}
export interface ListContentsResponse {
  contentSummaries: Array<ContentSummary>;
  nextToken?: string;
}
export interface ListImportJobsRequest {
  nextToken?: string;
  maxResults?: number;
  knowledgeBaseId: string;
}
export interface ListImportJobsResponse {
  importJobSummaries: Array<ImportJobSummary>;
  nextToken?: string;
}
export interface ListKnowledgeBasesRequest {
  nextToken?: string;
  maxResults?: number;
}
export interface ListKnowledgeBasesResponse {
  knowledgeBaseSummaries: Array<KnowledgeBaseSummary>;
  nextToken?: string;
}
export interface ListQuickResponsesRequest {
  nextToken?: string;
  maxResults?: number;
  knowledgeBaseId: string;
}
export interface ListQuickResponsesResponse {
  quickResponseSummaries: Array<QuickResponseSummary>;
  nextToken?: string;
}
export interface ListTagsForResourceRequest {
  resourceArn: string;
}
export interface ListTagsForResourceResponse {
  tags?: Record<string, string>;
}
export type MaxResults = number;

export type Name = string;

export type NextToken = string;

export type NonEmptyString = string;

export interface NotifyRecommendationsReceivedError {
  recommendationId?: string;
  message?: string;
}
export type NotifyRecommendationsReceivedErrorList =
  Array<NotifyRecommendationsReceivedError>;
export type NotifyRecommendationsReceivedErrorMessage = string;

export interface NotifyRecommendationsReceivedRequest {
  assistantId: string;
  sessionId: string;
  recommendationIds: Array<string>;
}
export interface NotifyRecommendationsReceivedResponse {
  recommendationIds?: Array<string>;
  errors?: Array<NotifyRecommendationsReceivedError>;
}
export type ObjectFieldsList = Array<string>;
export type Order = string;

export declare class PreconditionFailedException extends Data.TaggedError(
  "PreconditionFailedException",
)<{
  readonly message?: string;
}> {}
export type Priority = string;

export interface QueryAssistantRequest {
  assistantId: string;
  queryText: string;
  nextToken?: string;
  maxResults?: number;
}
export interface QueryAssistantResponse {
  results: Array<ResultData>;
  nextToken?: string;
}
export interface QueryRecommendationTriggerData {
  text?: string;
}
export type QueryResultsList = Array<ResultData>;
export type QueryText = string;

export type QuickResponseContent = string;

export type QuickResponseContentProvider = { content: string };
export interface QuickResponseContents {
  plainText?: QuickResponseContentProvider;
  markdown?: QuickResponseContentProvider;
}
export interface QuickResponseData {
  quickResponseArn: string;
  quickResponseId: string;
  knowledgeBaseArn: string;
  knowledgeBaseId: string;
  name: string;
  contentType: string;
  status: string;
  createdTime: Date | string;
  lastModifiedTime: Date | string;
  contents?: QuickResponseContents;
  description?: string;
  groupingConfiguration?: GroupingConfiguration;
  shortcutKey?: string;
  lastModifiedBy?: string;
  isActive?: boolean;
  channels?: Array<string>;
  language?: string;
  tags?: Record<string, string>;
}
export type QuickResponseDataProvider = { content: string };
export type QuickResponseDescription = string;

export interface QuickResponseFilterField {
  name: string;
  values?: Array<string>;
  operator: string;
  includeNoExistence?: boolean;
}
export type QuickResponseFilterFieldList = Array<QuickResponseFilterField>;
export type QuickResponseFilterOperator = string;

export type QuickResponseFilterValue = string;

export type QuickResponseFilterValueList = Array<string>;
export type QuickResponseName = string;

export interface QuickResponseOrderField {
  name: string;
  order?: string;
}
export interface QuickResponseQueryField {
  name: string;
  values: Array<string>;
  operator: string;
  allowFuzziness?: boolean;
  priority?: string;
}
export type QuickResponseQueryFieldList = Array<QuickResponseQueryField>;
export type QuickResponseQueryOperator = string;

export type QuickResponseQueryValue = string;

export type QuickResponseQueryValueList = Array<string>;
export interface QuickResponseSearchExpression {
  queries?: Array<QuickResponseQueryField>;
  filters?: Array<QuickResponseFilterField>;
  orderOnField?: QuickResponseOrderField;
}
export interface QuickResponseSearchResultData {
  quickResponseArn: string;
  quickResponseId: string;
  knowledgeBaseArn: string;
  knowledgeBaseId: string;
  name: string;
  contentType: string;
  status: string;
  contents: QuickResponseContents;
  createdTime: Date | string;
  lastModifiedTime: Date | string;
  isActive: boolean;
  description?: string;
  groupingConfiguration?: GroupingConfiguration;
  shortcutKey?: string;
  lastModifiedBy?: string;
  channels?: Array<string>;
  language?: string;
  attributesNotInterpolated?: Array<string>;
  attributesInterpolated?: Array<string>;
  tags?: Record<string, string>;
}
export type QuickResponseSearchResultsList =
  Array<QuickResponseSearchResultData>;
export type QuickResponseStatus = string;

export interface QuickResponseSummary {
  quickResponseArn: string;
  quickResponseId: string;
  knowledgeBaseArn: string;
  knowledgeBaseId: string;
  name: string;
  contentType: string;
  status: string;
  createdTime: Date | string;
  lastModifiedTime: Date | string;
  description?: string;
  lastModifiedBy?: string;
  isActive?: boolean;
  channels?: Array<string>;
  tags?: Record<string, string>;
}
export type QuickResponseSummaryList = Array<QuickResponseSummary>;
export type QuickResponseType = string;

export interface RecommendationData {
  recommendationId: string;
  document: Document;
  relevanceScore?: number;
  relevanceLevel?: string;
  type?: string;
}
export type RecommendationIdList = Array<string>;
export type RecommendationList = Array<RecommendationData>;
export type RecommendationSourceType = string;

export interface RecommendationTrigger {
  id: string;
  type: string;
  source: string;
  data: RecommendationTriggerData;
  recommendationIds: Array<string>;
}
export type RecommendationTriggerData = {
  query: QueryRecommendationTriggerData;
};
export type RecommendationTriggerList = Array<RecommendationTrigger>;
export type RecommendationTriggerType = string;

export type RecommendationType = string;

export type RelevanceLevel = string;

export type RelevanceScore = number;

export interface RemoveKnowledgeBaseTemplateUriRequest {
  knowledgeBaseId: string;
}
export interface RemoveKnowledgeBaseTemplateUriResponse {}
export interface RenderingConfiguration {
  templateUri?: string;
}
export declare class RequestTimeoutException extends Data.TaggedError(
  "RequestTimeoutException",
)<{
  readonly message?: string;
}> {}
export declare class ResourceNotFoundException extends Data.TaggedError(
  "ResourceNotFoundException",
)<{
  readonly message?: string;
  readonly resourceName?: string;
}> {}
export interface ResultData {
  resultId: string;
  document: Document;
  relevanceScore?: number;
}
export interface SearchContentRequest {
  nextToken?: string;
  maxResults?: number;
  knowledgeBaseId: string;
  searchExpression: SearchExpression;
}
export interface SearchContentResponse {
  contentSummaries: Array<ContentSummary>;
  nextToken?: string;
}
export interface SearchExpression {
  filters: Array<Filter>;
}
export interface SearchQuickResponsesRequest {
  knowledgeBaseId: string;
  searchExpression: QuickResponseSearchExpression;
  nextToken?: string;
  maxResults?: number;
  attributes?: Record<string, string>;
}
export interface SearchQuickResponsesResponse {
  results: Array<QuickResponseSearchResultData>;
  nextToken?: string;
}
export interface SearchSessionsRequest {
  nextToken?: string;
  maxResults?: number;
  assistantId: string;
  searchExpression: SearchExpression;
}
export interface SearchSessionsResponse {
  sessionSummaries: Array<SessionSummary>;
  nextToken?: string;
}
export type SensitiveString = string;

export interface ServerSideEncryptionConfiguration {
  kmsKeyId?: string;
}
export declare class ServiceQuotaExceededException extends Data.TaggedError(
  "ServiceQuotaExceededException",
)<{
  readonly message?: string;
}> {}
export interface SessionData {
  sessionArn: string;
  sessionId: string;
  name: string;
  description?: string;
  tags?: Record<string, string>;
  integrationConfiguration?: SessionIntegrationConfiguration;
}
export interface SessionIntegrationConfiguration {
  topicIntegrationArn?: string;
}
export type SessionSummaries = Array<SessionSummary>;
export interface SessionSummary {
  sessionId: string;
  sessionArn: string;
  assistantId: string;
  assistantArn: string;
}
export type ShortCutKey = string;

export type SourceConfiguration = {
  appIntegrations: AppIntegrationsConfiguration;
};
export interface StartContentUploadRequest {
  knowledgeBaseId: string;
  contentType: string;
  presignedUrlTimeToLive?: number;
}
export interface StartContentUploadResponse {
  uploadId: string;
  url: string;
  urlExpiry: Date | string;
  headersToInclude: Record<string, string>;
}
export interface StartImportJobRequest {
  knowledgeBaseId: string;
  importJobType: string;
  uploadId: string;
  clientToken?: string;
  metadata?: Record<string, string>;
  externalSourceConfiguration?: ExternalSourceConfiguration;
}
export interface StartImportJobResponse {
  importJob?: ImportJobData;
}
export type TagKey = string;

export type TagKeyList = Array<string>;
export interface TagResourceRequest {
  resourceArn: string;
  tags: Record<string, string>;
}
export interface TagResourceResponse {}
export type Tags = Record<string, string>;
export type TagValue = string;

export type TimeToLive = number;

export declare class TooManyTagsException extends Data.TaggedError(
  "TooManyTagsException",
)<{
  readonly message?: string;
  readonly resourceName?: string;
}> {}
export interface UntagResourceRequest {
  resourceArn: string;
  tagKeys: Array<string>;
}
export interface UntagResourceResponse {}
export interface UpdateContentRequest {
  knowledgeBaseId: string;
  contentId: string;
  revisionId?: string;
  title?: string;
  overrideLinkOutUri?: string;
  removeOverrideLinkOutUri?: boolean;
  metadata?: Record<string, string>;
  uploadId?: string;
}
export interface UpdateContentResponse {
  content?: ContentData;
}
export interface UpdateKnowledgeBaseTemplateUriRequest {
  knowledgeBaseId: string;
  templateUri: string;
}
export interface UpdateKnowledgeBaseTemplateUriResponse {
  knowledgeBase?: KnowledgeBaseData;
}
export interface UpdateQuickResponseRequest {
  knowledgeBaseId: string;
  quickResponseId: string;
  name?: string;
  content?: QuickResponseDataProvider;
  contentType?: string;
  groupingConfiguration?: GroupingConfiguration;
  removeGroupingConfiguration?: boolean;
  description?: string;
  removeDescription?: boolean;
  shortcutKey?: string;
  removeShortcutKey?: boolean;
  isActive?: boolean;
  channels?: Array<string>;
  language?: string;
}
export interface UpdateQuickResponseResponse {
  quickResponse?: QuickResponseData;
}
export type UploadId = string;

export type Uri = string;

export type Url = string;

export type Uuid = string;

export type UuidOrArn = string;

export declare class ValidationException extends Data.TaggedError(
  "ValidationException",
)<{
  readonly message?: string;
}> {}
export type WaitTimeSeconds = number;

export declare namespace ListTagsForResource {
  export type Input = ListTagsForResourceRequest;
  export type Output = ListTagsForResourceResponse;
  export type Error = ResourceNotFoundException | CommonAwsError;
}

export declare namespace TagResource {
  export type Input = TagResourceRequest;
  export type Output = TagResourceResponse;
  export type Error =
    | ResourceNotFoundException
    | TooManyTagsException
    | CommonAwsError;
}

export declare namespace UntagResource {
  export type Input = UntagResourceRequest;
  export type Output = UntagResourceResponse;
  export type Error = ResourceNotFoundException | CommonAwsError;
}
