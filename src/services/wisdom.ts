import type { Effect, Data } from "effect";
import type { CommonAwsError } from "../client.ts";

export interface WisdomService {
  createAssistant(
    input: CreateAssistantRequest,
  ): Effect.Effect<
    CreateAssistantResponse,
    AccessDeniedException | ConflictException | ServiceQuotaExceededException | ValidationException | CommonAwsError
  >;
  createAssistantAssociation(
    input: CreateAssistantAssociationRequest,
  ): Effect.Effect<
    CreateAssistantAssociationResponse,
    AccessDeniedException | ConflictException | ResourceNotFoundException | ServiceQuotaExceededException | ValidationException | CommonAwsError
  >;
  createContent(
    input: CreateContentRequest,
  ): Effect.Effect<
    CreateContentResponse,
    AccessDeniedException | ConflictException | ResourceNotFoundException | ServiceQuotaExceededException | ValidationException | CommonAwsError
  >;
  createKnowledgeBase(
    input: CreateKnowledgeBaseRequest,
  ): Effect.Effect<
    CreateKnowledgeBaseResponse,
    AccessDeniedException | ConflictException | ServiceQuotaExceededException | ValidationException | CommonAwsError
  >;
  createQuickResponse(
    input: CreateQuickResponseRequest,
  ): Effect.Effect<
    CreateQuickResponseResponse,
    AccessDeniedException | ConflictException | ResourceNotFoundException | ServiceQuotaExceededException | ValidationException | CommonAwsError
  >;
  createSession(
    input: CreateSessionRequest,
  ): Effect.Effect<
    CreateSessionResponse,
    ConflictException | ResourceNotFoundException | ValidationException | CommonAwsError
  >;
  deleteAssistant(
    input: DeleteAssistantRequest,
  ): Effect.Effect<
    DeleteAssistantResponse,
    AccessDeniedException | ResourceNotFoundException | ValidationException | CommonAwsError
  >;
  deleteAssistantAssociation(
    input: DeleteAssistantAssociationRequest,
  ): Effect.Effect<
    DeleteAssistantAssociationResponse,
    AccessDeniedException | ResourceNotFoundException | ValidationException | CommonAwsError
  >;
  deleteContent(
    input: DeleteContentRequest,
  ): Effect.Effect<
    DeleteContentResponse,
    AccessDeniedException | ResourceNotFoundException | ValidationException | CommonAwsError
  >;
  deleteImportJob(
    input: DeleteImportJobRequest,
  ): Effect.Effect<
    DeleteImportJobResponse,
    AccessDeniedException | ConflictException | ResourceNotFoundException | ValidationException | CommonAwsError
  >;
  deleteKnowledgeBase(
    input: DeleteKnowledgeBaseRequest,
  ): Effect.Effect<
    DeleteKnowledgeBaseResponse,
    AccessDeniedException | ConflictException | ResourceNotFoundException | ValidationException | CommonAwsError
  >;
  deleteQuickResponse(
    input: DeleteQuickResponseRequest,
  ): Effect.Effect<
    DeleteQuickResponseResponse,
    AccessDeniedException | ResourceNotFoundException | ValidationException | CommonAwsError
  >;
  getAssistant(
    input: GetAssistantRequest,
  ): Effect.Effect<
    GetAssistantResponse,
    AccessDeniedException | ResourceNotFoundException | ValidationException | CommonAwsError
  >;
  getAssistantAssociation(
    input: GetAssistantAssociationRequest,
  ): Effect.Effect<
    GetAssistantAssociationResponse,
    AccessDeniedException | ResourceNotFoundException | ValidationException | CommonAwsError
  >;
  getContent(
    input: GetContentRequest,
  ): Effect.Effect<
    GetContentResponse,
    AccessDeniedException | ResourceNotFoundException | ValidationException | CommonAwsError
  >;
  getContentSummary(
    input: GetContentSummaryRequest,
  ): Effect.Effect<
    GetContentSummaryResponse,
    AccessDeniedException | ResourceNotFoundException | ValidationException | CommonAwsError
  >;
  getImportJob(
    input: GetImportJobRequest,
  ): Effect.Effect<
    GetImportJobResponse,
    AccessDeniedException | ResourceNotFoundException | ValidationException | CommonAwsError
  >;
  getKnowledgeBase(
    input: GetKnowledgeBaseRequest,
  ): Effect.Effect<
    GetKnowledgeBaseResponse,
    AccessDeniedException | ResourceNotFoundException | ValidationException | CommonAwsError
  >;
  getQuickResponse(
    input: GetQuickResponseRequest,
  ): Effect.Effect<
    GetQuickResponseResponse,
    AccessDeniedException | ResourceNotFoundException | ValidationException | CommonAwsError
  >;
  getRecommendations(
    input: GetRecommendationsRequest,
  ): Effect.Effect<
    GetRecommendationsResponse,
    AccessDeniedException | ResourceNotFoundException | ValidationException | CommonAwsError
  >;
  getSession(
    input: GetSessionRequest,
  ): Effect.Effect<
    GetSessionResponse,
    AccessDeniedException | ResourceNotFoundException | ValidationException | CommonAwsError
  >;
  listAssistantAssociations(
    input: ListAssistantAssociationsRequest,
  ): Effect.Effect<
    ListAssistantAssociationsResponse,
    AccessDeniedException | ResourceNotFoundException | ValidationException | CommonAwsError
  >;
  listAssistants(
    input: ListAssistantsRequest,
  ): Effect.Effect<
    ListAssistantsResponse,
    AccessDeniedException | ValidationException | CommonAwsError
  >;
  listContents(
    input: ListContentsRequest,
  ): Effect.Effect<
    ListContentsResponse,
    AccessDeniedException | ResourceNotFoundException | ValidationException | CommonAwsError
  >;
  listImportJobs(
    input: ListImportJobsRequest,
  ): Effect.Effect<
    ListImportJobsResponse,
    AccessDeniedException | ValidationException | CommonAwsError
  >;
  listKnowledgeBases(
    input: ListKnowledgeBasesRequest,
  ): Effect.Effect<
    ListKnowledgeBasesResponse,
    AccessDeniedException | ValidationException | CommonAwsError
  >;
  listQuickResponses(
    input: ListQuickResponsesRequest,
  ): Effect.Effect<
    ListQuickResponsesResponse,
    AccessDeniedException | ResourceNotFoundException | ValidationException | CommonAwsError
  >;
  listTagsForResource(
    input: ListTagsForResourceRequest,
  ): Effect.Effect<
    ListTagsForResourceResponse,
    ResourceNotFoundException | CommonAwsError
  >;
  notifyRecommendationsReceived(
    input: NotifyRecommendationsReceivedRequest,
  ): Effect.Effect<
    NotifyRecommendationsReceivedResponse,
    AccessDeniedException | ResourceNotFoundException | ValidationException | CommonAwsError
  >;
  queryAssistant(
    input: QueryAssistantRequest,
  ): Effect.Effect<
    QueryAssistantResponse,
    AccessDeniedException | RequestTimeoutException | ResourceNotFoundException | ValidationException | CommonAwsError
  >;
  removeKnowledgeBaseTemplateUri(
    input: RemoveKnowledgeBaseTemplateUriRequest,
  ): Effect.Effect<
    RemoveKnowledgeBaseTemplateUriResponse,
    AccessDeniedException | ResourceNotFoundException | ValidationException | CommonAwsError
  >;
  searchContent(
    input: SearchContentRequest,
  ): Effect.Effect<
    SearchContentResponse,
    AccessDeniedException | ResourceNotFoundException | ValidationException | CommonAwsError
  >;
  searchQuickResponses(
    input: SearchQuickResponsesRequest,
  ): Effect.Effect<
    SearchQuickResponsesResponse,
    AccessDeniedException | RequestTimeoutException | ResourceNotFoundException | ValidationException | CommonAwsError
  >;
  searchSessions(
    input: SearchSessionsRequest,
  ): Effect.Effect<
    SearchSessionsResponse,
    AccessDeniedException | ResourceNotFoundException | ValidationException | CommonAwsError
  >;
  startContentUpload(
    input: StartContentUploadRequest,
  ): Effect.Effect<
    StartContentUploadResponse,
    AccessDeniedException | ResourceNotFoundException | ValidationException | CommonAwsError
  >;
  startImportJob(
    input: StartImportJobRequest,
  ): Effect.Effect<
    StartImportJobResponse,
    AccessDeniedException | ConflictException | ResourceNotFoundException | ServiceQuotaExceededException | ValidationException | CommonAwsError
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
  updateContent(
    input: UpdateContentRequest,
  ): Effect.Effect<
    UpdateContentResponse,
    AccessDeniedException | PreconditionFailedException | ResourceNotFoundException | ValidationException | CommonAwsError
  >;
  updateKnowledgeBaseTemplateUri(
    input: UpdateKnowledgeBaseTemplateUriRequest,
  ): Effect.Effect<
    UpdateKnowledgeBaseTemplateUriResponse,
    AccessDeniedException | ResourceNotFoundException | ValidationException | CommonAwsError
  >;
  updateQuickResponse(
    input: UpdateQuickResponseRequest,
  ): Effect.Effect<
    UpdateQuickResponseResponse,
    AccessDeniedException | ConflictException | PreconditionFailedException | ResourceNotFoundException | ValidationException | CommonAwsError
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
export type AssistantAssociationOutputData = { knowledgeBaseAssociation: KnowledgeBaseAssociationData };
export interface AssistantAssociationSummary {
  assistantAssociationId: string;
  assistantAssociationArn: string;
  assistantId: string;
  assistantArn: string;
  associationType: string;
  associationData: AssistantAssociationOutputData;
  tags?: Record<string, string>;
}
export type AssistantAssociationSummaryList = Array<AssistantAssociationSummary>;
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
export interface DeleteAssistantAssociationResponse {
}
export interface DeleteAssistantRequest {
  assistantId: string;
}
export interface DeleteAssistantResponse {
}
export interface DeleteContentRequest {
  knowledgeBaseId: string;
  contentId: string;
}
export interface DeleteContentResponse {
}
export interface DeleteImportJobRequest {
  knowledgeBaseId: string;
  importJobId: string;
}
export interface DeleteImportJobResponse {
}
export interface DeleteKnowledgeBaseRequest {
  knowledgeBaseId: string;
}
export interface DeleteKnowledgeBaseResponse {
}
export interface DeleteQuickResponseRequest {
  knowledgeBaseId: string;
  quickResponseId: string;
}
export interface DeleteQuickResponseResponse {
}
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
export type NotifyRecommendationsReceivedErrorList = Array<NotifyRecommendationsReceivedError>;
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
export type QuickResponseSearchResultsList = Array<QuickResponseSearchResultData>;
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
export type RecommendationTriggerData = { query: QueryRecommendationTriggerData };
export type RecommendationTriggerList = Array<RecommendationTrigger>;
export type RecommendationTriggerType = string;

export type RecommendationType = string;

export type RelevanceLevel = string;

export type RelevanceScore = number;

export interface RemoveKnowledgeBaseTemplateUriRequest {
  knowledgeBaseId: string;
}
export interface RemoveKnowledgeBaseTemplateUriResponse {
}
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

export type SourceConfiguration = { appIntegrations: AppIntegrationsConfiguration };
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
export interface TagResourceResponse {
}
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
export interface UntagResourceResponse {
}
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

export declare namespace CreateAssistant {
  export type Input = CreateAssistantRequest;
  export type Output = CreateAssistantResponse;
  export type Error =
    | AccessDeniedException
    | ConflictException
    | ServiceQuotaExceededException
    | ValidationException
    | CommonAwsError;
}

export declare namespace CreateAssistantAssociation {
  export type Input = CreateAssistantAssociationRequest;
  export type Output = CreateAssistantAssociationResponse;
  export type Error =
    | AccessDeniedException
    | ConflictException
    | ResourceNotFoundException
    | ServiceQuotaExceededException
    | ValidationException
    | CommonAwsError;
}

export declare namespace CreateContent {
  export type Input = CreateContentRequest;
  export type Output = CreateContentResponse;
  export type Error =
    | AccessDeniedException
    | ConflictException
    | ResourceNotFoundException
    | ServiceQuotaExceededException
    | ValidationException
    | CommonAwsError;
}

export declare namespace CreateKnowledgeBase {
  export type Input = CreateKnowledgeBaseRequest;
  export type Output = CreateKnowledgeBaseResponse;
  export type Error =
    | AccessDeniedException
    | ConflictException
    | ServiceQuotaExceededException
    | ValidationException
    | CommonAwsError;
}

export declare namespace CreateQuickResponse {
  export type Input = CreateQuickResponseRequest;
  export type Output = CreateQuickResponseResponse;
  export type Error =
    | AccessDeniedException
    | ConflictException
    | ResourceNotFoundException
    | ServiceQuotaExceededException
    | ValidationException
    | CommonAwsError;
}

export declare namespace CreateSession {
  export type Input = CreateSessionRequest;
  export type Output = CreateSessionResponse;
  export type Error =
    | ConflictException
    | ResourceNotFoundException
    | ValidationException
    | CommonAwsError;
}

export declare namespace DeleteAssistant {
  export type Input = DeleteAssistantRequest;
  export type Output = DeleteAssistantResponse;
  export type Error =
    | AccessDeniedException
    | ResourceNotFoundException
    | ValidationException
    | CommonAwsError;
}

export declare namespace DeleteAssistantAssociation {
  export type Input = DeleteAssistantAssociationRequest;
  export type Output = DeleteAssistantAssociationResponse;
  export type Error =
    | AccessDeniedException
    | ResourceNotFoundException
    | ValidationException
    | CommonAwsError;
}

export declare namespace DeleteContent {
  export type Input = DeleteContentRequest;
  export type Output = DeleteContentResponse;
  export type Error =
    | AccessDeniedException
    | ResourceNotFoundException
    | ValidationException
    | CommonAwsError;
}

export declare namespace DeleteImportJob {
  export type Input = DeleteImportJobRequest;
  export type Output = DeleteImportJobResponse;
  export type Error =
    | AccessDeniedException
    | ConflictException
    | ResourceNotFoundException
    | ValidationException
    | CommonAwsError;
}

export declare namespace DeleteKnowledgeBase {
  export type Input = DeleteKnowledgeBaseRequest;
  export type Output = DeleteKnowledgeBaseResponse;
  export type Error =
    | AccessDeniedException
    | ConflictException
    | ResourceNotFoundException
    | ValidationException
    | CommonAwsError;
}

export declare namespace DeleteQuickResponse {
  export type Input = DeleteQuickResponseRequest;
  export type Output = DeleteQuickResponseResponse;
  export type Error =
    | AccessDeniedException
    | ResourceNotFoundException
    | ValidationException
    | CommonAwsError;
}

export declare namespace GetAssistant {
  export type Input = GetAssistantRequest;
  export type Output = GetAssistantResponse;
  export type Error =
    | AccessDeniedException
    | ResourceNotFoundException
    | ValidationException
    | CommonAwsError;
}

export declare namespace GetAssistantAssociation {
  export type Input = GetAssistantAssociationRequest;
  export type Output = GetAssistantAssociationResponse;
  export type Error =
    | AccessDeniedException
    | ResourceNotFoundException
    | ValidationException
    | CommonAwsError;
}

export declare namespace GetContent {
  export type Input = GetContentRequest;
  export type Output = GetContentResponse;
  export type Error =
    | AccessDeniedException
    | ResourceNotFoundException
    | ValidationException
    | CommonAwsError;
}

export declare namespace GetContentSummary {
  export type Input = GetContentSummaryRequest;
  export type Output = GetContentSummaryResponse;
  export type Error =
    | AccessDeniedException
    | ResourceNotFoundException
    | ValidationException
    | CommonAwsError;
}

export declare namespace GetImportJob {
  export type Input = GetImportJobRequest;
  export type Output = GetImportJobResponse;
  export type Error =
    | AccessDeniedException
    | ResourceNotFoundException
    | ValidationException
    | CommonAwsError;
}

export declare namespace GetKnowledgeBase {
  export type Input = GetKnowledgeBaseRequest;
  export type Output = GetKnowledgeBaseResponse;
  export type Error =
    | AccessDeniedException
    | ResourceNotFoundException
    | ValidationException
    | CommonAwsError;
}

export declare namespace GetQuickResponse {
  export type Input = GetQuickResponseRequest;
  export type Output = GetQuickResponseResponse;
  export type Error =
    | AccessDeniedException
    | ResourceNotFoundException
    | ValidationException
    | CommonAwsError;
}

export declare namespace GetRecommendations {
  export type Input = GetRecommendationsRequest;
  export type Output = GetRecommendationsResponse;
  export type Error =
    | AccessDeniedException
    | ResourceNotFoundException
    | ValidationException
    | CommonAwsError;
}

export declare namespace GetSession {
  export type Input = GetSessionRequest;
  export type Output = GetSessionResponse;
  export type Error =
    | AccessDeniedException
    | ResourceNotFoundException
    | ValidationException
    | CommonAwsError;
}

export declare namespace ListAssistantAssociations {
  export type Input = ListAssistantAssociationsRequest;
  export type Output = ListAssistantAssociationsResponse;
  export type Error =
    | AccessDeniedException
    | ResourceNotFoundException
    | ValidationException
    | CommonAwsError;
}

export declare namespace ListAssistants {
  export type Input = ListAssistantsRequest;
  export type Output = ListAssistantsResponse;
  export type Error =
    | AccessDeniedException
    | ValidationException
    | CommonAwsError;
}

export declare namespace ListContents {
  export type Input = ListContentsRequest;
  export type Output = ListContentsResponse;
  export type Error =
    | AccessDeniedException
    | ResourceNotFoundException
    | ValidationException
    | CommonAwsError;
}

export declare namespace ListImportJobs {
  export type Input = ListImportJobsRequest;
  export type Output = ListImportJobsResponse;
  export type Error =
    | AccessDeniedException
    | ValidationException
    | CommonAwsError;
}

export declare namespace ListKnowledgeBases {
  export type Input = ListKnowledgeBasesRequest;
  export type Output = ListKnowledgeBasesResponse;
  export type Error =
    | AccessDeniedException
    | ValidationException
    | CommonAwsError;
}

export declare namespace ListQuickResponses {
  export type Input = ListQuickResponsesRequest;
  export type Output = ListQuickResponsesResponse;
  export type Error =
    | AccessDeniedException
    | ResourceNotFoundException
    | ValidationException
    | CommonAwsError;
}

export declare namespace ListTagsForResource {
  export type Input = ListTagsForResourceRequest;
  export type Output = ListTagsForResourceResponse;
  export type Error =
    | ResourceNotFoundException
    | CommonAwsError;
}

export declare namespace NotifyRecommendationsReceived {
  export type Input = NotifyRecommendationsReceivedRequest;
  export type Output = NotifyRecommendationsReceivedResponse;
  export type Error =
    | AccessDeniedException
    | ResourceNotFoundException
    | ValidationException
    | CommonAwsError;
}

export declare namespace QueryAssistant {
  export type Input = QueryAssistantRequest;
  export type Output = QueryAssistantResponse;
  export type Error =
    | AccessDeniedException
    | RequestTimeoutException
    | ResourceNotFoundException
    | ValidationException
    | CommonAwsError;
}

export declare namespace RemoveKnowledgeBaseTemplateUri {
  export type Input = RemoveKnowledgeBaseTemplateUriRequest;
  export type Output = RemoveKnowledgeBaseTemplateUriResponse;
  export type Error =
    | AccessDeniedException
    | ResourceNotFoundException
    | ValidationException
    | CommonAwsError;
}

export declare namespace SearchContent {
  export type Input = SearchContentRequest;
  export type Output = SearchContentResponse;
  export type Error =
    | AccessDeniedException
    | ResourceNotFoundException
    | ValidationException
    | CommonAwsError;
}

export declare namespace SearchQuickResponses {
  export type Input = SearchQuickResponsesRequest;
  export type Output = SearchQuickResponsesResponse;
  export type Error =
    | AccessDeniedException
    | RequestTimeoutException
    | ResourceNotFoundException
    | ValidationException
    | CommonAwsError;
}

export declare namespace SearchSessions {
  export type Input = SearchSessionsRequest;
  export type Output = SearchSessionsResponse;
  export type Error =
    | AccessDeniedException
    | ResourceNotFoundException
    | ValidationException
    | CommonAwsError;
}

export declare namespace StartContentUpload {
  export type Input = StartContentUploadRequest;
  export type Output = StartContentUploadResponse;
  export type Error =
    | AccessDeniedException
    | ResourceNotFoundException
    | ValidationException
    | CommonAwsError;
}

export declare namespace StartImportJob {
  export type Input = StartImportJobRequest;
  export type Output = StartImportJobResponse;
  export type Error =
    | AccessDeniedException
    | ConflictException
    | ResourceNotFoundException
    | ServiceQuotaExceededException
    | ValidationException
    | CommonAwsError;
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
  export type Error =
    | ResourceNotFoundException
    | CommonAwsError;
}

export declare namespace UpdateContent {
  export type Input = UpdateContentRequest;
  export type Output = UpdateContentResponse;
  export type Error =
    | AccessDeniedException
    | PreconditionFailedException
    | ResourceNotFoundException
    | ValidationException
    | CommonAwsError;
}

export declare namespace UpdateKnowledgeBaseTemplateUri {
  export type Input = UpdateKnowledgeBaseTemplateUriRequest;
  export type Output = UpdateKnowledgeBaseTemplateUriResponse;
  export type Error =
    | AccessDeniedException
    | ResourceNotFoundException
    | ValidationException
    | CommonAwsError;
}

export declare namespace UpdateQuickResponse {
  export type Input = UpdateQuickResponseRequest;
  export type Output = UpdateQuickResponseResponse;
  export type Error =
    | AccessDeniedException
    | ConflictException
    | PreconditionFailedException
    | ResourceNotFoundException
    | ValidationException
    | CommonAwsError;
}

