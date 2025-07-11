import type { Effect, Data } from "effect";
import type { CommonAwsError } from "../error.ts";

export interface AWSKendraFrontendService {
  associateEntitiesToExperience(
    input: AssociateEntitiesToExperienceRequest,
  ): Effect.Effect<
    AssociateEntitiesToExperienceResponse,
    | AccessDeniedException
    | InternalServerException
    | ResourceAlreadyExistException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  associatePersonasToEntities(
    input: AssociatePersonasToEntitiesRequest,
  ): Effect.Effect<
    AssociatePersonasToEntitiesResponse,
    | AccessDeniedException
    | InternalServerException
    | ResourceAlreadyExistException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  batchDeleteDocument(
    input: BatchDeleteDocumentRequest,
  ): Effect.Effect<
    BatchDeleteDocumentResponse,
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  batchDeleteFeaturedResultsSet(
    input: BatchDeleteFeaturedResultsSetRequest,
  ): Effect.Effect<
    BatchDeleteFeaturedResultsSetResponse,
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  batchGetDocumentStatus(
    input: BatchGetDocumentStatusRequest,
  ): Effect.Effect<
    BatchGetDocumentStatusResponse,
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  batchPutDocument(
    input: BatchPutDocumentRequest,
  ): Effect.Effect<
    BatchPutDocumentResponse,
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ServiceQuotaExceededException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  clearQuerySuggestions(
    input: ClearQuerySuggestionsRequest,
  ): Effect.Effect<
    {},
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  createAccessControlConfiguration(
    input: CreateAccessControlConfigurationRequest,
  ): Effect.Effect<
    CreateAccessControlConfigurationResponse,
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ServiceQuotaExceededException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  createDataSource(
    input: CreateDataSourceRequest,
  ): Effect.Effect<
    CreateDataSourceResponse,
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceAlreadyExistException
    | ResourceNotFoundException
    | ServiceQuotaExceededException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  createExperience(
    input: CreateExperienceRequest,
  ): Effect.Effect<
    CreateExperienceResponse,
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ServiceQuotaExceededException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  createFaq(
    input: CreateFaqRequest,
  ): Effect.Effect<
    CreateFaqResponse,
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ServiceQuotaExceededException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  createFeaturedResultsSet(
    input: CreateFeaturedResultsSetRequest,
  ): Effect.Effect<
    CreateFeaturedResultsSetResponse,
    | AccessDeniedException
    | ConflictException
    | FeaturedResultsConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  createIndex(
    input: CreateIndexRequest,
  ): Effect.Effect<
    CreateIndexResponse,
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceAlreadyExistException
    | ServiceQuotaExceededException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  createQuerySuggestionsBlockList(
    input: CreateQuerySuggestionsBlockListRequest,
  ): Effect.Effect<
    CreateQuerySuggestionsBlockListResponse,
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ServiceQuotaExceededException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  createThesaurus(
    input: CreateThesaurusRequest,
  ): Effect.Effect<
    CreateThesaurusResponse,
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ServiceQuotaExceededException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  deleteAccessControlConfiguration(
    input: DeleteAccessControlConfigurationRequest,
  ): Effect.Effect<
    DeleteAccessControlConfigurationResponse,
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  deleteDataSource(
    input: DeleteDataSourceRequest,
  ): Effect.Effect<
    {},
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  deleteExperience(
    input: DeleteExperienceRequest,
  ): Effect.Effect<
    DeleteExperienceResponse,
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  deleteFaq(
    input: DeleteFaqRequest,
  ): Effect.Effect<
    {},
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  deleteIndex(
    input: DeleteIndexRequest,
  ): Effect.Effect<
    {},
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  deletePrincipalMapping(
    input: DeletePrincipalMappingRequest,
  ): Effect.Effect<
    {},
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  deleteQuerySuggestionsBlockList(
    input: DeleteQuerySuggestionsBlockListRequest,
  ): Effect.Effect<
    {},
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  deleteThesaurus(
    input: DeleteThesaurusRequest,
  ): Effect.Effect<
    {},
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  describeAccessControlConfiguration(
    input: DescribeAccessControlConfigurationRequest,
  ): Effect.Effect<
    DescribeAccessControlConfigurationResponse,
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  describeDataSource(
    input: DescribeDataSourceRequest,
  ): Effect.Effect<
    DescribeDataSourceResponse,
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  describeExperience(
    input: DescribeExperienceRequest,
  ): Effect.Effect<
    DescribeExperienceResponse,
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  describeFaq(
    input: DescribeFaqRequest,
  ): Effect.Effect<
    DescribeFaqResponse,
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  describeFeaturedResultsSet(
    input: DescribeFeaturedResultsSetRequest,
  ): Effect.Effect<
    DescribeFeaturedResultsSetResponse,
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  describeIndex(
    input: DescribeIndexRequest,
  ): Effect.Effect<
    DescribeIndexResponse,
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  describePrincipalMapping(
    input: DescribePrincipalMappingRequest,
  ): Effect.Effect<
    DescribePrincipalMappingResponse,
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  describeQuerySuggestionsBlockList(
    input: DescribeQuerySuggestionsBlockListRequest,
  ): Effect.Effect<
    DescribeQuerySuggestionsBlockListResponse,
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  describeQuerySuggestionsConfig(
    input: DescribeQuerySuggestionsConfigRequest,
  ): Effect.Effect<
    DescribeQuerySuggestionsConfigResponse,
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  describeThesaurus(
    input: DescribeThesaurusRequest,
  ): Effect.Effect<
    DescribeThesaurusResponse,
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  disassociateEntitiesFromExperience(
    input: DisassociateEntitiesFromExperienceRequest,
  ): Effect.Effect<
    DisassociateEntitiesFromExperienceResponse,
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  disassociatePersonasFromEntities(
    input: DisassociatePersonasFromEntitiesRequest,
  ): Effect.Effect<
    DisassociatePersonasFromEntitiesResponse,
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  getQuerySuggestions(
    input: GetQuerySuggestionsRequest,
  ): Effect.Effect<
    GetQuerySuggestionsResponse,
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ServiceQuotaExceededException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  getSnapshots(
    input: GetSnapshotsRequest,
  ): Effect.Effect<
    GetSnapshotsResponse,
    | AccessDeniedException
    | InternalServerException
    | InvalidRequestException
    | ResourceNotFoundException
    | CommonAwsError
  >;
  listAccessControlConfigurations(
    input: ListAccessControlConfigurationsRequest,
  ): Effect.Effect<
    ListAccessControlConfigurationsResponse,
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  listDataSources(
    input: ListDataSourcesRequest,
  ): Effect.Effect<
    ListDataSourcesResponse,
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  listDataSourceSyncJobs(
    input: ListDataSourceSyncJobsRequest,
  ): Effect.Effect<
    ListDataSourceSyncJobsResponse,
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  listEntityPersonas(
    input: ListEntityPersonasRequest,
  ): Effect.Effect<
    ListEntityPersonasResponse,
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  listExperienceEntities(
    input: ListExperienceEntitiesRequest,
  ): Effect.Effect<
    ListExperienceEntitiesResponse,
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  listExperiences(
    input: ListExperiencesRequest,
  ): Effect.Effect<
    ListExperiencesResponse,
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  listFaqs(
    input: ListFaqsRequest,
  ): Effect.Effect<
    ListFaqsResponse,
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  listFeaturedResultsSets(
    input: ListFeaturedResultsSetsRequest,
  ): Effect.Effect<
    ListFeaturedResultsSetsResponse,
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  listGroupsOlderThanOrderingId(
    input: ListGroupsOlderThanOrderingIdRequest,
  ): Effect.Effect<
    ListGroupsOlderThanOrderingIdResponse,
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  listIndices(
    input: ListIndicesRequest,
  ): Effect.Effect<
    ListIndicesResponse,
    | AccessDeniedException
    | InternalServerException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  listQuerySuggestionsBlockLists(
    input: ListQuerySuggestionsBlockListsRequest,
  ): Effect.Effect<
    ListQuerySuggestionsBlockListsResponse,
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  listTagsForResource(
    input: ListTagsForResourceRequest,
  ): Effect.Effect<
    ListTagsForResourceResponse,
    | AccessDeniedException
    | InternalServerException
    | ResourceUnavailableException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  listThesauri(
    input: ListThesauriRequest,
  ): Effect.Effect<
    ListThesauriResponse,
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  putPrincipalMapping(
    input: PutPrincipalMappingRequest,
  ): Effect.Effect<
    {},
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ServiceQuotaExceededException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  query(
    input: QueryRequest,
  ): Effect.Effect<
    QueryResult,
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ServiceQuotaExceededException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  retrieve(
    input: RetrieveRequest,
  ): Effect.Effect<
    RetrieveResult,
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ServiceQuotaExceededException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  startDataSourceSyncJob(
    input: StartDataSourceSyncJobRequest,
  ): Effect.Effect<
    StartDataSourceSyncJobResponse,
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceInUseException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  stopDataSourceSyncJob(
    input: StopDataSourceSyncJobRequest,
  ): Effect.Effect<
    {},
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  submitFeedback(
    input: SubmitFeedbackRequest,
  ): Effect.Effect<
    {},
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ResourceUnavailableException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  tagResource(
    input: TagResourceRequest,
  ): Effect.Effect<
    TagResourceResponse,
    | AccessDeniedException
    | InternalServerException
    | ResourceUnavailableException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  untagResource(
    input: UntagResourceRequest,
  ): Effect.Effect<
    UntagResourceResponse,
    | AccessDeniedException
    | InternalServerException
    | ResourceUnavailableException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  updateAccessControlConfiguration(
    input: UpdateAccessControlConfigurationRequest,
  ): Effect.Effect<
    UpdateAccessControlConfigurationResponse,
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ServiceQuotaExceededException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  updateDataSource(
    input: UpdateDataSourceRequest,
  ): Effect.Effect<
    {},
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  updateExperience(
    input: UpdateExperienceRequest,
  ): Effect.Effect<
    {},
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  updateFeaturedResultsSet(
    input: UpdateFeaturedResultsSetRequest,
  ): Effect.Effect<
    UpdateFeaturedResultsSetResponse,
    | AccessDeniedException
    | FeaturedResultsConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  updateIndex(
    input: UpdateIndexRequest,
  ): Effect.Effect<
    {},
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ServiceQuotaExceededException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  updateQuerySuggestionsBlockList(
    input: UpdateQuerySuggestionsBlockListRequest,
  ): Effect.Effect<
    {},
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  updateQuerySuggestionsConfig(
    input: UpdateQuerySuggestionsConfigRequest,
  ): Effect.Effect<
    {},
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  updateThesaurus(
    input: UpdateThesaurusRequest,
  ): Effect.Effect<
    {},
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
}

export type Kendra = AWSKendraFrontendService;

export type AccessControlConfigurationId = string;

export type AccessControlConfigurationName = string;

export interface AccessControlConfigurationSummary {
  Id: string;
}
export type AccessControlConfigurationSummaryList =
  Array<AccessControlConfigurationSummary>;
export interface AccessControlListConfiguration {
  KeyPath?: string;
}
export declare class AccessDeniedException extends Data.TaggedError(
  "AccessDeniedException",
)<{
  readonly Message?: string;
}> {}
export interface AclConfiguration {
  AllowedGroupsColumnName: string;
}
export interface AdditionalResultAttribute {
  Key: string;
  ValueType: AdditionalResultAttributeValueType;
  Value: AdditionalResultAttributeValue;
}
export type AdditionalResultAttributeList = Array<AdditionalResultAttribute>;
export interface AdditionalResultAttributeValue {
  TextWithHighlightsValue?: TextWithHighlights;
}
export type AdditionalResultAttributeValueType = "TEXT_WITH_HIGHLIGHTS_VALUE";
export interface AlfrescoConfiguration {
  SiteUrl: string;
  SiteId: string;
  SecretArn: string;
  SslCertificateS3Path: S3Path;
  CrawlSystemFolders?: boolean;
  CrawlComments?: boolean;
  EntityFilter?: Array<AlfrescoEntity>;
  DocumentLibraryFieldMappings?: Array<DataSourceToIndexFieldMapping>;
  BlogFieldMappings?: Array<DataSourceToIndexFieldMapping>;
  WikiFieldMappings?: Array<DataSourceToIndexFieldMapping>;
  InclusionPatterns?: Array<string>;
  ExclusionPatterns?: Array<string>;
  VpcConfiguration?: DataSourceVpcConfiguration;
}
export type AlfrescoEntity = "wiki" | "blog" | "documentLibrary";
export type AmazonResourceName = string;

export type AssociateEntitiesToExperienceFailedEntityList = Array<FailedEntity>;
export interface AssociateEntitiesToExperienceRequest {
  Id: string;
  IndexId: string;
  EntityList: Array<EntityConfiguration>;
}
export interface AssociateEntitiesToExperienceResponse {
  FailedEntityList?: Array<FailedEntity>;
}
export type AssociateEntityList = Array<EntityConfiguration>;
export interface AssociatePersonasToEntitiesRequest {
  Id: string;
  IndexId: string;
  Personas: Array<EntityPersonaConfiguration>;
}
export interface AssociatePersonasToEntitiesResponse {
  FailedEntityList?: Array<FailedEntity>;
}
export interface AttributeFilter {
  AndAllFilters?: Array<AttributeFilter>;
  OrAllFilters?: Array<AttributeFilter>;
  NotFilter?: AttributeFilter;
  EqualsTo?: DocumentAttribute;
  ContainsAll?: DocumentAttribute;
  ContainsAny?: DocumentAttribute;
  GreaterThan?: DocumentAttribute;
  GreaterThanOrEquals?: DocumentAttribute;
  LessThan?: DocumentAttribute;
  LessThanOrEquals?: DocumentAttribute;
}
export type AttributeFilterList = Array<AttributeFilter>;
export interface AttributeSuggestionsDescribeConfig {
  SuggestableConfigList?: Array<SuggestableConfig>;
  AttributeSuggestionsMode?: AttributeSuggestionsMode;
}
export interface AttributeSuggestionsGetConfig {
  SuggestionAttributes?: Array<string>;
  AdditionalResponseAttributes?: Array<string>;
  AttributeFilter?: AttributeFilter;
  UserContext?: UserContext;
}
export type AttributeSuggestionsMode = "ACTIVE" | "INACTIVE";
export interface AttributeSuggestionsUpdateConfig {
  SuggestableConfigList?: Array<SuggestableConfig>;
  AttributeSuggestionsMode?: AttributeSuggestionsMode;
}
export interface AuthenticationConfiguration {
  BasicAuthentication?: Array<BasicAuthenticationConfiguration>;
}
export interface BasicAuthenticationConfiguration {
  Host: string;
  Port: number;
  Credentials: string;
}
export type BasicAuthenticationConfigurationList =
  Array<BasicAuthenticationConfiguration>;
export interface BatchDeleteDocumentRequest {
  IndexId: string;
  DocumentIdList: Array<string>;
  DataSourceSyncJobMetricTarget?: DataSourceSyncJobMetricTarget;
}
export interface BatchDeleteDocumentResponse {
  FailedDocuments?: Array<BatchDeleteDocumentResponseFailedDocument>;
}
export interface BatchDeleteDocumentResponseFailedDocument {
  Id?: string;
  DataSourceId?: string;
  ErrorCode?: ErrorCode;
  ErrorMessage?: string;
}
export type BatchDeleteDocumentResponseFailedDocuments =
  Array<BatchDeleteDocumentResponseFailedDocument>;
export interface BatchDeleteFeaturedResultsSetError {
  Id: string;
  ErrorCode: ErrorCode;
  ErrorMessage: string;
}
export type BatchDeleteFeaturedResultsSetErrors =
  Array<BatchDeleteFeaturedResultsSetError>;
export interface BatchDeleteFeaturedResultsSetRequest {
  IndexId: string;
  FeaturedResultsSetIds: Array<string>;
}
export interface BatchDeleteFeaturedResultsSetResponse {
  Errors: Array<BatchDeleteFeaturedResultsSetError>;
}
export interface BatchGetDocumentStatusRequest {
  IndexId: string;
  DocumentInfoList: Array<DocumentInfo>;
}
export interface BatchGetDocumentStatusResponse {
  Errors?: Array<BatchGetDocumentStatusResponseError>;
  DocumentStatusList?: Array<Status>;
}
export interface BatchGetDocumentStatusResponseError {
  DocumentId?: string;
  DataSourceId?: string;
  ErrorCode?: ErrorCode;
  ErrorMessage?: string;
}
export type BatchGetDocumentStatusResponseErrors =
  Array<BatchGetDocumentStatusResponseError>;
export interface BatchPutDocumentRequest {
  IndexId: string;
  RoleArn?: string;
  Documents: Array<Document>;
  CustomDocumentEnrichmentConfiguration?: CustomDocumentEnrichmentConfiguration;
}
export interface BatchPutDocumentResponse {
  FailedDocuments?: Array<BatchPutDocumentResponseFailedDocument>;
}
export interface BatchPutDocumentResponseFailedDocument {
  Id?: string;
  DataSourceId?: string;
  ErrorCode?: ErrorCode;
  ErrorMessage?: string;
}
export type BatchPutDocumentResponseFailedDocuments =
  Array<BatchPutDocumentResponseFailedDocument>;
export type Blob = Uint8Array | string;

export interface BoxConfiguration {
  EnterpriseId: string;
  SecretArn: string;
  UseChangeLog?: boolean;
  CrawlComments?: boolean;
  CrawlTasks?: boolean;
  CrawlWebLinks?: boolean;
  FileFieldMappings?: Array<DataSourceToIndexFieldMapping>;
  TaskFieldMappings?: Array<DataSourceToIndexFieldMapping>;
  CommentFieldMappings?: Array<DataSourceToIndexFieldMapping>;
  WebLinkFieldMappings?: Array<DataSourceToIndexFieldMapping>;
  InclusionPatterns?: Array<string>;
  ExclusionPatterns?: Array<string>;
  VpcConfiguration?: DataSourceVpcConfiguration;
}
export interface CapacityUnitsConfiguration {
  StorageCapacityUnits: number;
  QueryCapacityUnits: number;
}
export type ChangeDetectingColumns = Array<string>;
export type ClaimRegex = string;

export interface ClearQuerySuggestionsRequest {
  IndexId: string;
}
export interface ClickFeedback {
  ResultId: string;
  ClickTime: Date | string;
}
export type ClickFeedbackList = Array<ClickFeedback>;
export type ClientTokenName = string;

export interface CollapseConfiguration {
  DocumentAttributeKey: string;
  SortingConfigurations?: Array<SortingConfiguration>;
  MissingAttributeKeyStrategy?: MissingAttributeKeyStrategy;
  Expand?: boolean;
  ExpandConfiguration?: ExpandConfiguration;
}
export interface CollapsedResultDetail {
  DocumentAttribute: DocumentAttribute;
  ExpandedResults?: Array<ExpandedResultItem>;
}
export interface ColumnConfiguration {
  DocumentIdColumnName: string;
  DocumentDataColumnName: string;
  DocumentTitleColumnName?: string;
  FieldMappings?: Array<DataSourceToIndexFieldMapping>;
  ChangeDetectingColumns: Array<string>;
}
export type ColumnName = string;

export type ConditionOperator =
  | "GreaterThan"
  | "GreaterThanOrEquals"
  | "LessThan"
  | "LessThanOrEquals"
  | "Equals"
  | "NotEquals"
  | "Contains"
  | "NotContains"
  | "Exists"
  | "NotExists"
  | "BeginsWith";
export declare class ConflictException extends Data.TaggedError(
  "ConflictException",
)<{
  readonly Message?: string;
}> {}
export interface ConflictingItem {
  QueryText?: string;
  SetName?: string;
  SetId?: string;
}
export type ConflictingItems = Array<ConflictingItem>;
export interface ConfluenceAttachmentConfiguration {
  CrawlAttachments?: boolean;
  AttachmentFieldMappings?: Array<ConfluenceAttachmentToIndexFieldMapping>;
}
export type ConfluenceAttachmentFieldMappingsList =
  Array<ConfluenceAttachmentToIndexFieldMapping>;
export type ConfluenceAttachmentFieldName =
  | "AUTHOR"
  | "CONTENT_TYPE"
  | "CREATED_DATE"
  | "DISPLAY_URL"
  | "FILE_SIZE"
  | "ITEM_TYPE"
  | "PARENT_ID"
  | "SPACE_KEY"
  | "SPACE_NAME"
  | "URL"
  | "VERSION";
export interface ConfluenceAttachmentToIndexFieldMapping {
  DataSourceFieldName?: ConfluenceAttachmentFieldName;
  DateFieldFormat?: string;
  IndexFieldName?: string;
}
export type ConfluenceAuthenticationType = "HTTP_BASIC" | "PAT";
export interface ConfluenceBlogConfiguration {
  BlogFieldMappings?: Array<ConfluenceBlogToIndexFieldMapping>;
}
export type ConfluenceBlogFieldMappingsList =
  Array<ConfluenceBlogToIndexFieldMapping>;
export type ConfluenceBlogFieldName =
  | "AUTHOR"
  | "DISPLAY_URL"
  | "ITEM_TYPE"
  | "LABELS"
  | "PUBLISH_DATE"
  | "SPACE_KEY"
  | "SPACE_NAME"
  | "URL"
  | "VERSION";
export interface ConfluenceBlogToIndexFieldMapping {
  DataSourceFieldName?: ConfluenceBlogFieldName;
  DateFieldFormat?: string;
  IndexFieldName?: string;
}
export interface ConfluenceConfiguration {
  ServerUrl: string;
  SecretArn: string;
  Version: ConfluenceVersion;
  SpaceConfiguration?: ConfluenceSpaceConfiguration;
  PageConfiguration?: ConfluencePageConfiguration;
  BlogConfiguration?: ConfluenceBlogConfiguration;
  AttachmentConfiguration?: ConfluenceAttachmentConfiguration;
  VpcConfiguration?: DataSourceVpcConfiguration;
  InclusionPatterns?: Array<string>;
  ExclusionPatterns?: Array<string>;
  ProxyConfiguration?: ProxyConfiguration;
  AuthenticationType?: ConfluenceAuthenticationType;
}
export interface ConfluencePageConfiguration {
  PageFieldMappings?: Array<ConfluencePageToIndexFieldMapping>;
}
export type ConfluencePageFieldMappingsList =
  Array<ConfluencePageToIndexFieldMapping>;
export type ConfluencePageFieldName =
  | "AUTHOR"
  | "CONTENT_STATUS"
  | "CREATED_DATE"
  | "DISPLAY_URL"
  | "ITEM_TYPE"
  | "LABELS"
  | "MODIFIED_DATE"
  | "PARENT_ID"
  | "SPACE_KEY"
  | "SPACE_NAME"
  | "URL"
  | "VERSION";
export interface ConfluencePageToIndexFieldMapping {
  DataSourceFieldName?: ConfluencePageFieldName;
  DateFieldFormat?: string;
  IndexFieldName?: string;
}
export interface ConfluenceSpaceConfiguration {
  CrawlPersonalSpaces?: boolean;
  CrawlArchivedSpaces?: boolean;
  IncludeSpaces?: Array<string>;
  ExcludeSpaces?: Array<string>;
  SpaceFieldMappings?: Array<ConfluenceSpaceToIndexFieldMapping>;
}
export type ConfluenceSpaceFieldMappingsList =
  Array<ConfluenceSpaceToIndexFieldMapping>;
export type ConfluenceSpaceFieldName =
  | "DISPLAY_URL"
  | "ITEM_TYPE"
  | "SPACE_KEY"
  | "URL";
export type ConfluenceSpaceIdentifier = string;

export type ConfluenceSpaceList = Array<string>;
export interface ConfluenceSpaceToIndexFieldMapping {
  DataSourceFieldName?: ConfluenceSpaceFieldName;
  DateFieldFormat?: string;
  IndexFieldName?: string;
}
export type ConfluenceVersion = "CLOUD" | "SERVER";
export interface ConnectionConfiguration {
  DatabaseHost: string;
  DatabasePort: number;
  DatabaseName: string;
  TableName: string;
  SecretArn: string;
}
export type Content = string;

export interface ContentSourceConfiguration {
  DataSourceIds?: Array<string>;
  FaqIds?: Array<string>;
  DirectPutContent?: boolean;
}
export type ContentType =
  | "PDF"
  | "HTML"
  | "MS_WORD"
  | "PLAIN_TEXT"
  | "PPT"
  | "RTF"
  | "XML"
  | "XSLT"
  | "MS_EXCEL"
  | "CSV"
  | "JSON"
  | "MD";
export interface Correction {
  BeginOffset?: number;
  EndOffset?: number;
  Term?: string;
  CorrectedTerm?: string;
}
export type CorrectionList = Array<Correction>;
export type CrawlDepth = number;

export interface CreateAccessControlConfigurationRequest {
  IndexId: string;
  Name: string;
  Description?: string;
  AccessControlList?: Array<Principal>;
  HierarchicalAccessControlList?: Array<HierarchicalPrincipal>;
  ClientToken?: string;
}
export interface CreateAccessControlConfigurationResponse {
  Id: string;
}
export interface CreateDataSourceRequest {
  Name: string;
  IndexId: string;
  Type: DataSourceType;
  Configuration?: DataSourceConfiguration;
  VpcConfiguration?: DataSourceVpcConfiguration;
  Description?: string;
  Schedule?: string;
  RoleArn?: string;
  Tags?: Array<Tag>;
  ClientToken?: string;
  LanguageCode?: string;
  CustomDocumentEnrichmentConfiguration?: CustomDocumentEnrichmentConfiguration;
}
export interface CreateDataSourceResponse {
  Id: string;
}
export interface CreateExperienceRequest {
  Name: string;
  IndexId: string;
  RoleArn?: string;
  Configuration?: ExperienceConfiguration;
  Description?: string;
  ClientToken?: string;
}
export interface CreateExperienceResponse {
  Id: string;
}
export interface CreateFaqRequest {
  IndexId: string;
  Name: string;
  Description?: string;
  S3Path: S3Path;
  RoleArn: string;
  Tags?: Array<Tag>;
  FileFormat?: FaqFileFormat;
  ClientToken?: string;
  LanguageCode?: string;
}
export interface CreateFaqResponse {
  Id?: string;
}
export interface CreateFeaturedResultsSetRequest {
  IndexId: string;
  FeaturedResultsSetName: string;
  Description?: string;
  ClientToken?: string;
  Status?: FeaturedResultsSetStatus;
  QueryTexts?: Array<string>;
  FeaturedDocuments?: Array<FeaturedDocument>;
  Tags?: Array<Tag>;
}
export interface CreateFeaturedResultsSetResponse {
  FeaturedResultsSet?: FeaturedResultsSet;
}
export interface CreateIndexRequest {
  Name: string;
  Edition?: IndexEdition;
  RoleArn: string;
  ServerSideEncryptionConfiguration?: ServerSideEncryptionConfiguration;
  Description?: string;
  ClientToken?: string;
  Tags?: Array<Tag>;
  UserTokenConfigurations?: Array<UserTokenConfiguration>;
  UserContextPolicy?: UserContextPolicy;
  UserGroupResolutionConfiguration?: UserGroupResolutionConfiguration;
}
export interface CreateIndexResponse {
  Id?: string;
}
export interface CreateQuerySuggestionsBlockListRequest {
  IndexId: string;
  Name: string;
  Description?: string;
  SourceS3Path: S3Path;
  ClientToken?: string;
  RoleArn: string;
  Tags?: Array<Tag>;
}
export interface CreateQuerySuggestionsBlockListResponse {
  Id?: string;
}
export interface CreateThesaurusRequest {
  IndexId: string;
  Name: string;
  Description?: string;
  RoleArn: string;
  Tags?: Array<Tag>;
  SourceS3Path: S3Path;
  ClientToken?: string;
}
export interface CreateThesaurusResponse {
  Id?: string;
}
export interface CustomDocumentEnrichmentConfiguration {
  InlineConfigurations?: Array<InlineCustomDocumentEnrichmentConfiguration>;
  PreExtractionHookConfiguration?: HookConfiguration;
  PostExtractionHookConfiguration?: HookConfiguration;
  RoleArn?: string;
}
export interface DatabaseConfiguration {
  DatabaseEngineType: DatabaseEngineType;
  ConnectionConfiguration: ConnectionConfiguration;
  VpcConfiguration?: DataSourceVpcConfiguration;
  ColumnConfiguration: ColumnConfiguration;
  AclConfiguration?: AclConfiguration;
  SqlConfiguration?: SqlConfiguration;
}
export type DatabaseEngineType =
  | "RDS_AURORA_MYSQL"
  | "RDS_AURORA_POSTGRESQL"
  | "RDS_MYSQL"
  | "RDS_POSTGRESQL";
export type DatabaseHost = string;

export type DatabaseName = string;

export type DatabasePort = number;

export interface DataSourceConfiguration {
  S3Configuration?: S3DataSourceConfiguration;
  SharePointConfiguration?: SharePointConfiguration;
  DatabaseConfiguration?: DatabaseConfiguration;
  SalesforceConfiguration?: SalesforceConfiguration;
  OneDriveConfiguration?: OneDriveConfiguration;
  ServiceNowConfiguration?: ServiceNowConfiguration;
  ConfluenceConfiguration?: ConfluenceConfiguration;
  GoogleDriveConfiguration?: GoogleDriveConfiguration;
  WebCrawlerConfiguration?: WebCrawlerConfiguration;
  WorkDocsConfiguration?: WorkDocsConfiguration;
  FsxConfiguration?: FsxConfiguration;
  SlackConfiguration?: SlackConfiguration;
  BoxConfiguration?: BoxConfiguration;
  QuipConfiguration?: QuipConfiguration;
  JiraConfiguration?: JiraConfiguration;
  GitHubConfiguration?: GitHubConfiguration;
  AlfrescoConfiguration?: AlfrescoConfiguration;
  TemplateConfiguration?: TemplateConfiguration;
}
export type DataSourceDateFieldFormat = string;

export type DataSourceFieldName = string;

export interface DataSourceGroup {
  GroupId: string;
  DataSourceId: string;
}
export type DataSourceGroups = Array<DataSourceGroup>;
export type DataSourceId = string;

export type DataSourceIdList = Array<string>;
export type DataSourceInclusionsExclusionsStrings = Array<string>;
export type DataSourceInclusionsExclusionsStringsMember = string;

export type DataSourceName = string;

export type DataSourceStatus =
  | "CREATING"
  | "DELETING"
  | "FAILED"
  | "UPDATING"
  | "ACTIVE";
export interface DataSourceSummary {
  Name?: string;
  Id?: string;
  Type?: DataSourceType;
  CreatedAt?: Date | string;
  UpdatedAt?: Date | string;
  Status?: DataSourceStatus;
  LanguageCode?: string;
}
export type DataSourceSummaryList = Array<DataSourceSummary>;
export interface DataSourceSyncJob {
  ExecutionId?: string;
  StartTime?: Date | string;
  EndTime?: Date | string;
  Status?: DataSourceSyncJobStatus;
  ErrorMessage?: string;
  ErrorCode?: ErrorCode;
  DataSourceErrorCode?: string;
  Metrics?: DataSourceSyncJobMetrics;
}
export type DataSourceSyncJobHistoryList = Array<DataSourceSyncJob>;
export type DataSourceSyncJobId = string;

export interface DataSourceSyncJobMetrics {
  DocumentsAdded?: string;
  DocumentsModified?: string;
  DocumentsDeleted?: string;
  DocumentsFailed?: string;
  DocumentsScanned?: string;
}
export interface DataSourceSyncJobMetricTarget {
  DataSourceId: string;
  DataSourceSyncJobId?: string;
}
export type DataSourceSyncJobStatus =
  | "FAILED"
  | "SUCCEEDED"
  | "SYNCING"
  | "INCOMPLETE"
  | "STOPPING"
  | "ABORTED"
  | "SYNCING_INDEXING";
export interface DataSourceToIndexFieldMapping {
  DataSourceFieldName: string;
  DateFieldFormat?: string;
  IndexFieldName: string;
}
export type DataSourceToIndexFieldMappingList =
  Array<DataSourceToIndexFieldMapping>;
export type DataSourceType =
  | "S3"
  | "SHAREPOINT"
  | "DATABASE"
  | "SALESFORCE"
  | "ONEDRIVE"
  | "SERVICENOW"
  | "CUSTOM"
  | "CONFLUENCE"
  | "GOOGLEDRIVE"
  | "WEBCRAWLER"
  | "WORKDOCS"
  | "FSX"
  | "SLACK"
  | "BOX"
  | "QUIP"
  | "JIRA"
  | "GITHUB"
  | "ALFRESCO"
  | "TEMPLATE";
export interface DataSourceVpcConfiguration {
  SubnetIds: Array<string>;
  SecurityGroupIds: Array<string>;
}
export interface DeleteAccessControlConfigurationRequest {
  IndexId: string;
  Id: string;
}
export interface DeleteAccessControlConfigurationResponse {}
export interface DeleteDataSourceRequest {
  Id: string;
  IndexId: string;
}
export interface DeleteExperienceRequest {
  Id: string;
  IndexId: string;
}
export interface DeleteExperienceResponse {}
export interface DeleteFaqRequest {
  Id: string;
  IndexId: string;
}
export interface DeleteIndexRequest {
  Id: string;
}
export interface DeletePrincipalMappingRequest {
  IndexId: string;
  DataSourceId?: string;
  GroupId: string;
  OrderingId?: number;
}
export interface DeleteQuerySuggestionsBlockListRequest {
  IndexId: string;
  Id: string;
}
export interface DeleteThesaurusRequest {
  Id: string;
  IndexId: string;
}
export interface DescribeAccessControlConfigurationRequest {
  IndexId: string;
  Id: string;
}
export interface DescribeAccessControlConfigurationResponse {
  Name: string;
  Description?: string;
  ErrorMessage?: string;
  AccessControlList?: Array<Principal>;
  HierarchicalAccessControlList?: Array<HierarchicalPrincipal>;
}
export interface DescribeDataSourceRequest {
  Id: string;
  IndexId: string;
}
export interface DescribeDataSourceResponse {
  Id?: string;
  IndexId?: string;
  Name?: string;
  Type?: DataSourceType;
  Configuration?: DataSourceConfiguration;
  VpcConfiguration?: DataSourceVpcConfiguration;
  CreatedAt?: Date | string;
  UpdatedAt?: Date | string;
  Description?: string;
  Status?: DataSourceStatus;
  Schedule?: string;
  RoleArn?: string;
  ErrorMessage?: string;
  LanguageCode?: string;
  CustomDocumentEnrichmentConfiguration?: CustomDocumentEnrichmentConfiguration;
}
export interface DescribeExperienceRequest {
  Id: string;
  IndexId: string;
}
export interface DescribeExperienceResponse {
  Id?: string;
  IndexId?: string;
  Name?: string;
  Endpoints?: Array<ExperienceEndpoint>;
  Configuration?: ExperienceConfiguration;
  CreatedAt?: Date | string;
  UpdatedAt?: Date | string;
  Description?: string;
  Status?: ExperienceStatus;
  RoleArn?: string;
  ErrorMessage?: string;
}
export interface DescribeFaqRequest {
  Id: string;
  IndexId: string;
}
export interface DescribeFaqResponse {
  Id?: string;
  IndexId?: string;
  Name?: string;
  Description?: string;
  CreatedAt?: Date | string;
  UpdatedAt?: Date | string;
  S3Path?: S3Path;
  Status?: FaqStatus;
  RoleArn?: string;
  ErrorMessage?: string;
  FileFormat?: FaqFileFormat;
  LanguageCode?: string;
}
export interface DescribeFeaturedResultsSetRequest {
  IndexId: string;
  FeaturedResultsSetId: string;
}
export interface DescribeFeaturedResultsSetResponse {
  FeaturedResultsSetId?: string;
  FeaturedResultsSetName?: string;
  Description?: string;
  Status?: FeaturedResultsSetStatus;
  QueryTexts?: Array<string>;
  FeaturedDocumentsWithMetadata?: Array<FeaturedDocumentWithMetadata>;
  FeaturedDocumentsMissing?: Array<FeaturedDocumentMissing>;
  LastUpdatedTimestamp?: number;
  CreationTimestamp?: number;
}
export interface DescribeIndexRequest {
  Id: string;
}
export interface DescribeIndexResponse {
  Name?: string;
  Id?: string;
  Edition?: IndexEdition;
  RoleArn?: string;
  ServerSideEncryptionConfiguration?: ServerSideEncryptionConfiguration;
  Status?: IndexStatus;
  Description?: string;
  CreatedAt?: Date | string;
  UpdatedAt?: Date | string;
  DocumentMetadataConfigurations?: Array<DocumentMetadataConfiguration>;
  IndexStatistics?: IndexStatistics;
  ErrorMessage?: string;
  CapacityUnits?: CapacityUnitsConfiguration;
  UserTokenConfigurations?: Array<UserTokenConfiguration>;
  UserContextPolicy?: UserContextPolicy;
  UserGroupResolutionConfiguration?: UserGroupResolutionConfiguration;
}
export interface DescribePrincipalMappingRequest {
  IndexId: string;
  DataSourceId?: string;
  GroupId: string;
}
export interface DescribePrincipalMappingResponse {
  IndexId?: string;
  DataSourceId?: string;
  GroupId?: string;
  GroupOrderingIdSummaries?: Array<GroupOrderingIdSummary>;
}
export interface DescribeQuerySuggestionsBlockListRequest {
  IndexId: string;
  Id: string;
}
export interface DescribeQuerySuggestionsBlockListResponse {
  IndexId?: string;
  Id?: string;
  Name?: string;
  Description?: string;
  Status?: QuerySuggestionsBlockListStatus;
  ErrorMessage?: string;
  CreatedAt?: Date | string;
  UpdatedAt?: Date | string;
  SourceS3Path?: S3Path;
  ItemCount?: number;
  FileSizeBytes?: number;
  RoleArn?: string;
}
export interface DescribeQuerySuggestionsConfigRequest {
  IndexId: string;
}
export interface DescribeQuerySuggestionsConfigResponse {
  Mode?: Mode;
  Status?: QuerySuggestionsStatus;
  QueryLogLookBackWindowInDays?: number;
  IncludeQueriesWithoutUserInformation?: boolean;
  MinimumNumberOfQueryingUsers?: number;
  MinimumQueryCount?: number;
  LastSuggestionsBuildTime?: Date | string;
  LastClearTime?: Date | string;
  TotalSuggestionsCount?: number;
  AttributeSuggestionsConfig?: AttributeSuggestionsDescribeConfig;
}
export interface DescribeThesaurusRequest {
  Id: string;
  IndexId: string;
}
export interface DescribeThesaurusResponse {
  Id?: string;
  IndexId?: string;
  Name?: string;
  Description?: string;
  Status?: ThesaurusStatus;
  ErrorMessage?: string;
  CreatedAt?: Date | string;
  UpdatedAt?: Date | string;
  RoleArn?: string;
  SourceS3Path?: S3Path;
  FileSizeBytes?: number;
  TermCount?: number;
  SynonymRuleCount?: number;
}
export type Description = string;

export interface DisassociateEntitiesFromExperienceRequest {
  Id: string;
  IndexId: string;
  EntityList: Array<EntityConfiguration>;
}
export interface DisassociateEntitiesFromExperienceResponse {
  FailedEntityList?: Array<FailedEntity>;
}
export type DisassociateEntityList = Array<EntityConfiguration>;
export interface DisassociatePersonasFromEntitiesRequest {
  Id: string;
  IndexId: string;
  EntityIds: Array<string>;
}
export interface DisassociatePersonasFromEntitiesResponse {
  FailedEntityList?: Array<FailedEntity>;
}
export interface Document {
  Id: string;
  Title?: string;
  Blob?: Uint8Array | string;
  S3Path?: S3Path;
  Attributes?: Array<DocumentAttribute>;
  AccessControlList?: Array<Principal>;
  HierarchicalAccessControlList?: Array<HierarchicalPrincipal>;
  ContentType?: ContentType;
  AccessControlConfigurationId?: string;
}
export interface DocumentAttribute {
  Key: string;
  Value: DocumentAttributeValue;
}
export interface DocumentAttributeCondition {
  ConditionDocumentAttributeKey: string;
  Operator: ConditionOperator;
  ConditionOnValue?: DocumentAttributeValue;
}
export type DocumentAttributeKey = string;

export type DocumentAttributeKeyList = Array<string>;
export type DocumentAttributeList = Array<DocumentAttribute>;
export type DocumentAttributeStringListValue = Array<string>;
export type DocumentAttributeStringValue = string;

export interface DocumentAttributeTarget {
  TargetDocumentAttributeKey?: string;
  TargetDocumentAttributeValueDeletion?: boolean;
  TargetDocumentAttributeValue?: DocumentAttributeValue;
}
export interface DocumentAttributeValue {
  StringValue?: string;
  StringListValue?: Array<string>;
  LongValue?: number;
  DateValue?: Date | string;
}
export interface DocumentAttributeValueCountPair {
  DocumentAttributeValue?: DocumentAttributeValue;
  Count?: number;
  FacetResults?: Array<FacetResult>;
}
export type DocumentAttributeValueCountPairList =
  Array<DocumentAttributeValueCountPair>;
export type DocumentAttributeValueType =
  | "STRING_VALUE"
  | "STRING_LIST_VALUE"
  | "LONG_VALUE"
  | "DATE_VALUE";
export type DocumentId = string;

export type DocumentIdList = Array<string>;
export interface DocumentInfo {
  DocumentId: string;
  Attributes?: Array<DocumentAttribute>;
}
export type DocumentInfoList = Array<DocumentInfo>;
export type DocumentList = Array<Document>;
export type DocumentMetadataBoolean = boolean;

export interface DocumentMetadataConfiguration {
  Name: string;
  Type: DocumentAttributeValueType;
  Relevance?: Relevance;
  Search?: Search;
}
export type DocumentMetadataConfigurationList =
  Array<DocumentMetadataConfiguration>;
export type DocumentMetadataConfigurationName = string;

export interface DocumentRelevanceConfiguration {
  Name: string;
  Relevance: Relevance;
}
export type DocumentRelevanceOverrideConfigurationList =
  Array<DocumentRelevanceConfiguration>;
export interface DocumentsMetadataConfiguration {
  S3Prefix?: string;
}
export type DocumentStatus =
  | "NOT_FOUND"
  | "PROCESSING"
  | "INDEXED"
  | "UPDATED"
  | "FAILED"
  | "UPDATE_FAILED";
export type DocumentStatusList = Array<Status>;
export type DocumentTitle = string;

export type Domain = string;

export type Duration = string;

export type Endpoint = string;

export type EndpointType = "HOME";
export type EnterpriseId = string;

export interface EntityConfiguration {
  EntityId: string;
  EntityType: EntityType;
}
export interface EntityDisplayData {
  UserName?: string;
  GroupName?: string;
  IdentifiedUserName?: string;
  FirstName?: string;
  LastName?: string;
}
export type EntityFilter = Array<AlfrescoEntity>;
export type EntityId = string;

export type EntityIdsList = Array<string>;
export interface EntityPersonaConfiguration {
  EntityId: string;
  Persona: Persona;
}
export type EntityPersonaConfigurationList = Array<EntityPersonaConfiguration>;
export type EntityType = "USER" | "GROUP";
export type ErrorCode = "INTERNAL_ERROR" | "INVALID_REQUEST";
export type ErrorMessage = string;

export type ExcludeMimeTypesList = Array<string>;
export type ExcludeSharedDrivesList = Array<string>;
export type ExcludeUserAccountsList = Array<string>;
export interface ExpandConfiguration {
  MaxResultItemsToExpand?: number;
  MaxExpandedResultsPerItem?: number;
}
export interface ExpandedResultItem {
  Id?: string;
  DocumentId?: string;
  DocumentTitle?: TextWithHighlights;
  DocumentExcerpt?: TextWithHighlights;
  DocumentURI?: string;
  DocumentAttributes?: Array<DocumentAttribute>;
}
export type ExpandedResultList = Array<ExpandedResultItem>;
export interface ExperienceConfiguration {
  ContentSourceConfiguration?: ContentSourceConfiguration;
  UserIdentityConfiguration?: UserIdentityConfiguration;
}
export interface ExperienceEndpoint {
  EndpointType?: EndpointType;
  Endpoint?: string;
}
export type ExperienceEndpoints = Array<ExperienceEndpoint>;
export interface ExperienceEntitiesSummary {
  EntityId?: string;
  EntityType?: EntityType;
  DisplayData?: EntityDisplayData;
}
export type ExperienceEntitiesSummaryList = Array<ExperienceEntitiesSummary>;
export type ExperienceId = string;

export type ExperienceName = string;

export interface ExperiencesSummary {
  Name?: string;
  Id?: string;
  CreatedAt?: Date | string;
  Status?: ExperienceStatus;
  Endpoints?: Array<ExperienceEndpoint>;
}
export type ExperiencesSummaryList = Array<ExperiencesSummary>;
export type ExperienceStatus = "CREATING" | "ACTIVE" | "DELETING" | "FAILED";
export interface Facet {
  DocumentAttributeKey?: string;
  Facets?: Array<Facet>;
  MaxResults?: number;
}
export type FacetList = Array<Facet>;
export interface FacetResult {
  DocumentAttributeKey?: string;
  DocumentAttributeValueType?: DocumentAttributeValueType;
  DocumentAttributeValueCountPairs?: Array<DocumentAttributeValueCountPair>;
}
export type FacetResultList = Array<FacetResult>;
export interface FailedEntity {
  EntityId?: string;
  ErrorMessage?: string;
}
export type FailedEntityList = Array<FailedEntity>;
export type FailureReason = string;

export type FaqFileFormat = "CSV" | "CSV_WITH_HEADER" | "JSON";
export type FaqId = string;

export type FaqIdsList = Array<string>;
export type FaqName = string;

export interface FaqStatistics {
  IndexedQuestionAnswersCount: number;
}
export type FaqStatus =
  | "CREATING"
  | "UPDATING"
  | "ACTIVE"
  | "DELETING"
  | "FAILED";
export interface FaqSummary {
  Id?: string;
  Name?: string;
  Status?: FaqStatus;
  CreatedAt?: Date | string;
  UpdatedAt?: Date | string;
  FileFormat?: FaqFileFormat;
  LanguageCode?: string;
}
export type FaqSummaryItems = Array<FaqSummary>;
export interface FeaturedDocument {
  Id?: string;
}
export type FeaturedDocumentList = Array<FeaturedDocument>;
export interface FeaturedDocumentMissing {
  Id?: string;
}
export type FeaturedDocumentMissingList = Array<FeaturedDocumentMissing>;
export interface FeaturedDocumentWithMetadata {
  Id?: string;
  Title?: string;
  URI?: string;
}
export type FeaturedDocumentWithMetadataList =
  Array<FeaturedDocumentWithMetadata>;
export declare class FeaturedResultsConflictException extends Data.TaggedError(
  "FeaturedResultsConflictException",
)<{
  readonly Message?: string;
  readonly ConflictingItems?: Array<ConflictingItem>;
}> {}
export interface FeaturedResultsItem {
  Id?: string;
  Type?: QueryResultType;
  AdditionalAttributes?: Array<AdditionalResultAttribute>;
  DocumentId?: string;
  DocumentTitle?: TextWithHighlights;
  DocumentExcerpt?: TextWithHighlights;
  DocumentURI?: string;
  DocumentAttributes?: Array<DocumentAttribute>;
  FeedbackToken?: string;
}
export type FeaturedResultsItemList = Array<FeaturedResultsItem>;
export interface FeaturedResultsSet {
  FeaturedResultsSetId?: string;
  FeaturedResultsSetName?: string;
  Description?: string;
  Status?: FeaturedResultsSetStatus;
  QueryTexts?: Array<string>;
  FeaturedDocuments?: Array<FeaturedDocument>;
  LastUpdatedTimestamp?: number;
  CreationTimestamp?: number;
}
export type FeaturedResultsSetDescription = string;

export type FeaturedResultsSetId = string;

export type FeaturedResultsSetIdList = Array<string>;
export type FeaturedResultsSetName = string;

export type FeaturedResultsSetStatus = "ACTIVE" | "INACTIVE";
export interface FeaturedResultsSetSummary {
  FeaturedResultsSetId?: string;
  FeaturedResultsSetName?: string;
  Status?: FeaturedResultsSetStatus;
  LastUpdatedTimestamp?: number;
  CreationTimestamp?: number;
}
export type FeaturedResultsSetSummaryItems = Array<FeaturedResultsSetSummary>;
export type FeedbackToken = string;

export type FileSystemId = string;

export type FolderId = string;

export type FolderIdList = Array<string>;
export interface FsxConfiguration {
  FileSystemId: string;
  FileSystemType: FsxFileSystemType;
  VpcConfiguration: DataSourceVpcConfiguration;
  SecretArn?: string;
  InclusionPatterns?: Array<string>;
  ExclusionPatterns?: Array<string>;
  FieldMappings?: Array<DataSourceToIndexFieldMapping>;
}
export type FsxFileSystemType = "WINDOWS";
export interface GetQuerySuggestionsRequest {
  IndexId: string;
  QueryText: string;
  MaxSuggestionsCount?: number;
  SuggestionTypes?: Array<SuggestionType>;
  AttributeSuggestionsConfig?: AttributeSuggestionsGetConfig;
}
export interface GetQuerySuggestionsResponse {
  QuerySuggestionsId?: string;
  Suggestions?: Array<Suggestion>;
}
export interface GetSnapshotsRequest {
  IndexId: string;
  Interval: Interval;
  MetricType: MetricType;
  NextToken?: string;
  MaxResults?: number;
}
export interface GetSnapshotsResponse {
  SnapShotTimeFilter?: TimeRange;
  SnapshotsDataHeader?: Array<string>;
  SnapshotsData?: Array<Array<string>>;
  NextToken?: string;
}
export interface GitHubConfiguration {
  SaaSConfiguration?: SaaSConfiguration;
  OnPremiseConfiguration?: OnPremiseConfiguration;
  Type?: Type;
  SecretArn: string;
  UseChangeLog?: boolean;
  GitHubDocumentCrawlProperties?: GitHubDocumentCrawlProperties;
  RepositoryFilter?: Array<string>;
  InclusionFolderNamePatterns?: Array<string>;
  InclusionFileTypePatterns?: Array<string>;
  InclusionFileNamePatterns?: Array<string>;
  ExclusionFolderNamePatterns?: Array<string>;
  ExclusionFileTypePatterns?: Array<string>;
  ExclusionFileNamePatterns?: Array<string>;
  VpcConfiguration?: DataSourceVpcConfiguration;
  GitHubRepositoryConfigurationFieldMappings?: Array<DataSourceToIndexFieldMapping>;
  GitHubCommitConfigurationFieldMappings?: Array<DataSourceToIndexFieldMapping>;
  GitHubIssueDocumentConfigurationFieldMappings?: Array<DataSourceToIndexFieldMapping>;
  GitHubIssueCommentConfigurationFieldMappings?: Array<DataSourceToIndexFieldMapping>;
  GitHubIssueAttachmentConfigurationFieldMappings?: Array<DataSourceToIndexFieldMapping>;
  GitHubPullRequestCommentConfigurationFieldMappings?: Array<DataSourceToIndexFieldMapping>;
  GitHubPullRequestDocumentConfigurationFieldMappings?: Array<DataSourceToIndexFieldMapping>;
  GitHubPullRequestDocumentAttachmentConfigurationFieldMappings?: Array<DataSourceToIndexFieldMapping>;
}
export interface GitHubDocumentCrawlProperties {
  CrawlRepositoryDocuments?: boolean;
  CrawlIssue?: boolean;
  CrawlIssueComment?: boolean;
  CrawlIssueCommentAttachment?: boolean;
  CrawlPullRequest?: boolean;
  CrawlPullRequestComment?: boolean;
  CrawlPullRequestCommentAttachment?: boolean;
}
export interface GoogleDriveConfiguration {
  SecretArn: string;
  InclusionPatterns?: Array<string>;
  ExclusionPatterns?: Array<string>;
  FieldMappings?: Array<DataSourceToIndexFieldMapping>;
  ExcludeMimeTypes?: Array<string>;
  ExcludeUserAccounts?: Array<string>;
  ExcludeSharedDrives?: Array<string>;
}
export type GroupAttributeField = string;

export type GroupId = string;

export interface GroupMembers {
  MemberGroups?: Array<MemberGroup>;
  MemberUsers?: Array<MemberUser>;
  S3PathforGroupMembers?: S3Path;
}
export type GroupOrderingIdSummaries = Array<GroupOrderingIdSummary>;
export interface GroupOrderingIdSummary {
  Status?: PrincipalMappingStatus;
  LastUpdatedAt?: Date | string;
  ReceivedAt?: Date | string;
  OrderingId?: number;
  FailureReason?: string;
}
export type Groups = Array<string>;
export interface GroupSummary {
  GroupId?: string;
  OrderingId?: number;
}
export interface HierarchicalPrincipal {
  PrincipalList: Array<Principal>;
}
export type HierarchicalPrincipalList = Array<HierarchicalPrincipal>;
export interface Highlight {
  BeginOffset: number;
  EndOffset: number;
  TopAnswer?: boolean;
  Type?: HighlightType;
}
export type HighlightList = Array<Highlight>;
export type HighlightType = "STANDARD" | "THESAURUS_SYNONYM";
export interface HookConfiguration {
  InvocationCondition?: DocumentAttributeCondition;
  LambdaArn: string;
  S3Bucket: string;
}
export type Host = string;

export type IdentityAttributeName = string;

export type Importance = number;

export interface IndexConfigurationSummary {
  Name?: string;
  Id?: string;
  Edition?: IndexEdition;
  CreatedAt: Date | string;
  UpdatedAt: Date | string;
  Status: IndexStatus;
}
export type IndexConfigurationSummaryList = Array<IndexConfigurationSummary>;
export type IndexEdition =
  | "DEVELOPER_EDITION"
  | "ENTERPRISE_EDITION"
  | "GEN_AI_ENTERPRISE_EDITION";
export type IndexedQuestionAnswersCount = number;

export type IndexedTextBytes = number;

export type IndexedTextDocumentsCount = number;

export type IndexFieldName = string;

export type IndexId = string;

export type IndexName = string;

export interface IndexStatistics {
  FaqStatistics: FaqStatistics;
  TextDocumentStatistics: TextDocumentStatistics;
}
export type IndexStatus =
  | "CREATING"
  | "ACTIVE"
  | "DELETING"
  | "FAILED"
  | "UPDATING"
  | "SYSTEM_UPDATING";
export interface InlineCustomDocumentEnrichmentConfiguration {
  Condition?: DocumentAttributeCondition;
  Target?: DocumentAttributeTarget;
  DocumentContentDeletion?: boolean;
}
export type InlineCustomDocumentEnrichmentConfigurationList =
  Array<InlineCustomDocumentEnrichmentConfiguration>;
export type Integer = number;

export declare class InternalServerException extends Data.TaggedError(
  "InternalServerException",
)<{
  readonly Message?: string;
}> {}
export type Interval =
  | "THIS_MONTH"
  | "THIS_WEEK"
  | "ONE_WEEK_AGO"
  | "TWO_WEEKS_AGO"
  | "ONE_MONTH_AGO"
  | "TWO_MONTHS_AGO";
export declare class InvalidRequestException extends Data.TaggedError(
  "InvalidRequestException",
)<{
  readonly Message?: string;
}> {}
export type Issuer = string;

export type IssueSubEntity = "COMMENTS" | "ATTACHMENTS" | "WORKLOGS";
export type IssueSubEntityFilter = Array<IssueSubEntity>;
export type IssueType = Array<string>;
export type JiraAccountUrl = string;

export interface JiraConfiguration {
  JiraAccountUrl: string;
  SecretArn: string;
  UseChangeLog?: boolean;
  Project?: Array<string>;
  IssueType?: Array<string>;
  Status?: Array<string>;
  IssueSubEntityFilter?: Array<IssueSubEntity>;
  AttachmentFieldMappings?: Array<DataSourceToIndexFieldMapping>;
  CommentFieldMappings?: Array<DataSourceToIndexFieldMapping>;
  IssueFieldMappings?: Array<DataSourceToIndexFieldMapping>;
  ProjectFieldMappings?: Array<DataSourceToIndexFieldMapping>;
  WorkLogFieldMappings?: Array<DataSourceToIndexFieldMapping>;
  InclusionPatterns?: Array<string>;
  ExclusionPatterns?: Array<string>;
  VpcConfiguration?: DataSourceVpcConfiguration;
}
export type JiraStatus = Array<string>;
export interface JsonTokenTypeConfiguration {
  UserNameAttributeField: string;
  GroupAttributeField: string;
}
export interface JwtTokenTypeConfiguration {
  KeyLocation: KeyLocation;
  URL?: string;
  SecretManagerArn?: string;
  UserNameAttributeField?: string;
  GroupAttributeField?: string;
  Issuer?: string;
  ClaimRegex?: string;
}
export type KeyLocation = "URL" | "SECRET_MANAGER";
export type KmsKeyId = string;

export type LambdaArn = string;

export type LanguageCode = string;

export interface ListAccessControlConfigurationsRequest {
  IndexId: string;
  NextToken?: string;
  MaxResults?: number;
}
export interface ListAccessControlConfigurationsResponse {
  NextToken?: string;
  AccessControlConfigurations: Array<AccessControlConfigurationSummary>;
}
export interface ListDataSourcesRequest {
  IndexId: string;
  NextToken?: string;
  MaxResults?: number;
}
export interface ListDataSourcesResponse {
  SummaryItems?: Array<DataSourceSummary>;
  NextToken?: string;
}
export interface ListDataSourceSyncJobsRequest {
  Id: string;
  IndexId: string;
  NextToken?: string;
  MaxResults?: number;
  StartTimeFilter?: TimeRange;
  StatusFilter?: DataSourceSyncJobStatus;
}
export interface ListDataSourceSyncJobsResponse {
  History?: Array<DataSourceSyncJob>;
  NextToken?: string;
}
export interface ListEntityPersonasRequest {
  Id: string;
  IndexId: string;
  NextToken?: string;
  MaxResults?: number;
}
export interface ListEntityPersonasResponse {
  SummaryItems?: Array<PersonasSummary>;
  NextToken?: string;
}
export interface ListExperienceEntitiesRequest {
  Id: string;
  IndexId: string;
  NextToken?: string;
}
export interface ListExperienceEntitiesResponse {
  SummaryItems?: Array<ExperienceEntitiesSummary>;
  NextToken?: string;
}
export interface ListExperiencesRequest {
  IndexId: string;
  NextToken?: string;
  MaxResults?: number;
}
export interface ListExperiencesResponse {
  SummaryItems?: Array<ExperiencesSummary>;
  NextToken?: string;
}
export interface ListFaqsRequest {
  IndexId: string;
  NextToken?: string;
  MaxResults?: number;
}
export interface ListFaqsResponse {
  NextToken?: string;
  FaqSummaryItems?: Array<FaqSummary>;
}
export interface ListFeaturedResultsSetsRequest {
  IndexId: string;
  NextToken?: string;
  MaxResults?: number;
}
export interface ListFeaturedResultsSetsResponse {
  FeaturedResultsSetSummaryItems?: Array<FeaturedResultsSetSummary>;
  NextToken?: string;
}
export interface ListGroupsOlderThanOrderingIdRequest {
  IndexId: string;
  DataSourceId?: string;
  OrderingId: number;
  NextToken?: string;
  MaxResults?: number;
}
export interface ListGroupsOlderThanOrderingIdResponse {
  GroupsSummaries?: Array<GroupSummary>;
  NextToken?: string;
}
export interface ListIndicesRequest {
  NextToken?: string;
  MaxResults?: number;
}
export interface ListIndicesResponse {
  IndexConfigurationSummaryItems?: Array<IndexConfigurationSummary>;
  NextToken?: string;
}
export type ListOfGroupSummaries = Array<GroupSummary>;
export interface ListQuerySuggestionsBlockListsRequest {
  IndexId: string;
  NextToken?: string;
  MaxResults?: number;
}
export interface ListQuerySuggestionsBlockListsResponse {
  BlockListSummaryItems?: Array<QuerySuggestionsBlockListSummary>;
  NextToken?: string;
}
export interface ListTagsForResourceRequest {
  ResourceARN: string;
}
export interface ListTagsForResourceResponse {
  Tags?: Array<Tag>;
}
export interface ListThesauriRequest {
  IndexId: string;
  NextToken?: string;
  MaxResults?: number;
}
export interface ListThesauriResponse {
  NextToken?: string;
  ThesaurusSummaryItems?: Array<ThesaurusSummary>;
}
export type Long = number;

export type LookBackPeriod = number;

export type MaxContentSizePerPageInMegaBytes = number;

export type MaxLinksPerPage = number;

export type MaxResultsIntegerForListAccessControlConfigurationsRequest = number;

export type MaxResultsIntegerForListDataSourcesRequest = number;

export type MaxResultsIntegerForListDataSourceSyncJobsRequest = number;

export type MaxResultsIntegerForListEntityPersonasRequest = number;

export type MaxResultsIntegerForListExperiencesRequest = number;

export type MaxResultsIntegerForListFaqsRequest = number;

export type MaxResultsIntegerForListFeaturedResultsSetsRequest = number;

export type MaxResultsIntegerForListIndicesRequest = number;

export type MaxResultsIntegerForListPrincipalsRequest = number;

export type MaxResultsIntegerForListQuerySuggestionsBlockLists = number;

export type MaxResultsIntegerForListThesauriRequest = number;

export type MaxUrlsPerMinuteCrawlRate = number;

export interface MemberGroup {
  GroupId: string;
  DataSourceId?: string;
}
export type MemberGroups = Array<MemberGroup>;
export interface MemberUser {
  UserId: string;
}
export type MemberUsers = Array<MemberUser>;
export type MetricType =
  | "QUERIES_BY_COUNT"
  | "QUERIES_BY_ZERO_CLICK_RATE"
  | "QUERIES_BY_ZERO_RESULT_RATE"
  | "DOCS_BY_CLICK_COUNT"
  | "AGG_QUERY_DOC_METRICS"
  | "TREND_QUERY_DOC_METRICS";
export type MetricValue = string;

export type MimeType = string;

export type MinimumNumberOfQueryingUsers = number;

export type MinimumQueryCount = number;

export type MissingAttributeKeyStrategy = "IGNORE" | "COLLAPSE" | "EXPAND";
export type Mode = "ENABLED" | "LEARN_ONLY";
export type NameType = string;

export type NextToken = string;

export type ObjectBoolean = boolean;

export interface OneDriveConfiguration {
  TenantDomain: string;
  SecretArn: string;
  OneDriveUsers: OneDriveUsers;
  InclusionPatterns?: Array<string>;
  ExclusionPatterns?: Array<string>;
  FieldMappings?: Array<DataSourceToIndexFieldMapping>;
  DisableLocalGroups?: boolean;
}
export type OneDriveUser = string;

export type OneDriveUserList = Array<string>;
export interface OneDriveUsers {
  OneDriveUserList?: Array<string>;
  OneDriveUserS3Path?: S3Path;
}
export interface OnPremiseConfiguration {
  HostUrl: string;
  OrganizationName: string;
  SslCertificateS3Path: S3Path;
}
export type Order = "ASCENDING" | "DESCENDING";
export type OrganizationId = string;

export type OrganizationName = string;

export type Persona = "OWNER" | "VIEWER";
export interface PersonasSummary {
  EntityId?: string;
  Persona?: Persona;
  CreatedAt?: Date | string;
  UpdatedAt?: Date | string;
}
export type PersonasSummaryList = Array<PersonasSummary>;
export type Port = number;

export interface Principal {
  Name: string;
  Type: PrincipalType;
  Access: ReadAccessType;
  DataSourceId?: string;
}
export type PrincipalList = Array<Principal>;
export type PrincipalMappingStatus =
  | "FAILED"
  | "SUCCEEDED"
  | "PROCESSING"
  | "DELETING"
  | "DELETED";
export type PrincipalName = string;

export type PrincipalOrderingId = number;

export type PrincipalType = "USER" | "GROUP";
export type PrivateChannelFilter = Array<string>;
export type Project = Array<string>;
export interface ProxyConfiguration {
  Host: string;
  Port: number;
  Credentials?: string;
}
export type PublicChannelFilter = Array<string>;
export interface PutPrincipalMappingRequest {
  IndexId: string;
  DataSourceId?: string;
  GroupId: string;
  GroupMembers: GroupMembers;
  OrderingId?: number;
  RoleArn?: string;
}
export type QueryCapacityUnit = number;

export type QueryId = string;

export type QueryIdentifiersEnclosingOption = "DOUBLE_QUOTES" | "NONE";
export interface QueryRequest {
  IndexId: string;
  QueryText?: string;
  AttributeFilter?: AttributeFilter;
  Facets?: Array<Facet>;
  RequestedDocumentAttributes?: Array<string>;
  QueryResultTypeFilter?: QueryResultType;
  DocumentRelevanceOverrideConfigurations?: Array<DocumentRelevanceConfiguration>;
  PageNumber?: number;
  PageSize?: number;
  SortingConfiguration?: SortingConfiguration;
  SortingConfigurations?: Array<SortingConfiguration>;
  UserContext?: UserContext;
  VisitorId?: string;
  SpellCorrectionConfiguration?: SpellCorrectionConfiguration;
  CollapseConfiguration?: CollapseConfiguration;
}
export interface QueryResult {
  QueryId?: string;
  ResultItems?: Array<QueryResultItem>;
  FacetResults?: Array<FacetResult>;
  TotalNumberOfResults?: number;
  Warnings?: Array<Warning>;
  SpellCorrectedQueries?: Array<SpellCorrectedQuery>;
  FeaturedResultsItems?: Array<FeaturedResultsItem>;
}
export type QueryResultFormat = "TABLE" | "TEXT";
export interface QueryResultItem {
  Id?: string;
  Type?: QueryResultType;
  Format?: QueryResultFormat;
  AdditionalAttributes?: Array<AdditionalResultAttribute>;
  DocumentId?: string;
  DocumentTitle?: TextWithHighlights;
  DocumentExcerpt?: TextWithHighlights;
  DocumentURI?: string;
  DocumentAttributes?: Array<DocumentAttribute>;
  ScoreAttributes?: ScoreAttributes;
  FeedbackToken?: string;
  TableExcerpt?: TableExcerpt;
  CollapsedResultDetail?: CollapsedResultDetail;
}
export type QueryResultItemList = Array<QueryResultItem>;
export type QueryResultType = "DOCUMENT" | "QUESTION_ANSWER" | "ANSWER";
export type QuerySuggestionsBlockListId = string;

export type QuerySuggestionsBlockListName = string;

export type QuerySuggestionsBlockListStatus =
  | "ACTIVE"
  | "CREATING"
  | "DELETING"
  | "UPDATING"
  | "ACTIVE_BUT_UPDATE_FAILED"
  | "FAILED";
export interface QuerySuggestionsBlockListSummary {
  Id?: string;
  Name?: string;
  Status?: QuerySuggestionsBlockListStatus;
  CreatedAt?: Date | string;
  UpdatedAt?: Date | string;
  ItemCount?: number;
}
export type QuerySuggestionsBlockListSummaryItems =
  Array<QuerySuggestionsBlockListSummary>;
export type QuerySuggestionsId = string;

export type QuerySuggestionsStatus = "ACTIVE" | "UPDATING";
export type QueryText = string;

export type QueryTextList = Array<string>;
export interface QuipConfiguration {
  Domain: string;
  SecretArn: string;
  CrawlFileComments?: boolean;
  CrawlChatRooms?: boolean;
  CrawlAttachments?: boolean;
  FolderIds?: Array<string>;
  ThreadFieldMappings?: Array<DataSourceToIndexFieldMapping>;
  MessageFieldMappings?: Array<DataSourceToIndexFieldMapping>;
  AttachmentFieldMappings?: Array<DataSourceToIndexFieldMapping>;
  InclusionPatterns?: Array<string>;
  ExclusionPatterns?: Array<string>;
  VpcConfiguration?: DataSourceVpcConfiguration;
}
export type ReadAccessType = "ALLOW" | "DENY";
export interface Relevance {
  Freshness?: boolean;
  Importance?: number;
  Duration?: string;
  RankOrder?: Order;
  ValueImportanceMap?: Record<string, number>;
}
export interface RelevanceFeedback {
  ResultId: string;
  RelevanceValue: RelevanceType;
}
export type RelevanceFeedbackList = Array<RelevanceFeedback>;
export type RelevanceType = "RELEVANT" | "NOT_RELEVANT";
export type RepositoryName = string;

export type RepositoryNames = Array<string>;
export declare class ResourceAlreadyExistException extends Data.TaggedError(
  "ResourceAlreadyExistException",
)<{
  readonly Message?: string;
}> {}
export declare class ResourceInUseException extends Data.TaggedError(
  "ResourceInUseException",
)<{
  readonly Message?: string;
}> {}
export declare class ResourceNotFoundException extends Data.TaggedError(
  "ResourceNotFoundException",
)<{
  readonly Message?: string;
}> {}
export declare class ResourceUnavailableException extends Data.TaggedError(
  "ResourceUnavailableException",
)<{
  readonly Message?: string;
}> {}
export type ResultId = string;

export interface RetrieveRequest {
  IndexId: string;
  QueryText: string;
  AttributeFilter?: AttributeFilter;
  RequestedDocumentAttributes?: Array<string>;
  DocumentRelevanceOverrideConfigurations?: Array<DocumentRelevanceConfiguration>;
  PageNumber?: number;
  PageSize?: number;
  UserContext?: UserContext;
}
export interface RetrieveResult {
  QueryId?: string;
  ResultItems?: Array<RetrieveResultItem>;
}
export interface RetrieveResultItem {
  Id?: string;
  DocumentId?: string;
  DocumentTitle?: string;
  Content?: string;
  DocumentURI?: string;
  DocumentAttributes?: Array<DocumentAttribute>;
  ScoreAttributes?: ScoreAttributes;
}
export type RetrieveResultItemList = Array<RetrieveResultItem>;
export type RoleArn = string;

export type S3BucketName = string;

export interface S3DataSourceConfiguration {
  BucketName: string;
  InclusionPrefixes?: Array<string>;
  InclusionPatterns?: Array<string>;
  ExclusionPatterns?: Array<string>;
  DocumentsMetadataConfiguration?: DocumentsMetadataConfiguration;
  AccessControlListConfiguration?: AccessControlListConfiguration;
}
export type S3ObjectKey = string;

export interface S3Path {
  Bucket: string;
  Key: string;
}
export interface SaaSConfiguration {
  OrganizationName: string;
  HostUrl: string;
}
export interface SalesforceChatterFeedConfiguration {
  DocumentDataFieldName: string;
  DocumentTitleFieldName?: string;
  FieldMappings?: Array<DataSourceToIndexFieldMapping>;
  IncludeFilterTypes?: Array<SalesforceChatterFeedIncludeFilterType>;
}
export type SalesforceChatterFeedIncludeFilterType =
  | "ACTIVE_USER"
  | "STANDARD_USER";
export type SalesforceChatterFeedIncludeFilterTypes =
  Array<SalesforceChatterFeedIncludeFilterType>;
export interface SalesforceConfiguration {
  ServerUrl: string;
  SecretArn: string;
  StandardObjectConfigurations?: Array<SalesforceStandardObjectConfiguration>;
  KnowledgeArticleConfiguration?: SalesforceKnowledgeArticleConfiguration;
  ChatterFeedConfiguration?: SalesforceChatterFeedConfiguration;
  CrawlAttachments?: boolean;
  StandardObjectAttachmentConfiguration?: SalesforceStandardObjectAttachmentConfiguration;
  IncludeAttachmentFilePatterns?: Array<string>;
  ExcludeAttachmentFilePatterns?: Array<string>;
}
export interface SalesforceCustomKnowledgeArticleTypeConfiguration {
  Name: string;
  DocumentDataFieldName: string;
  DocumentTitleFieldName?: string;
  FieldMappings?: Array<DataSourceToIndexFieldMapping>;
}
export type SalesforceCustomKnowledgeArticleTypeConfigurationList =
  Array<SalesforceCustomKnowledgeArticleTypeConfiguration>;
export type SalesforceCustomKnowledgeArticleTypeName = string;

export interface SalesforceKnowledgeArticleConfiguration {
  IncludedStates: Array<SalesforceKnowledgeArticleState>;
  StandardKnowledgeArticleTypeConfiguration?: SalesforceStandardKnowledgeArticleTypeConfiguration;
  CustomKnowledgeArticleTypeConfigurations?: Array<SalesforceCustomKnowledgeArticleTypeConfiguration>;
}
export type SalesforceKnowledgeArticleState =
  | "DRAFT"
  | "PUBLISHED"
  | "ARCHIVED";
export type SalesforceKnowledgeArticleStateList =
  Array<SalesforceKnowledgeArticleState>;
export interface SalesforceStandardKnowledgeArticleTypeConfiguration {
  DocumentDataFieldName: string;
  DocumentTitleFieldName?: string;
  FieldMappings?: Array<DataSourceToIndexFieldMapping>;
}
export interface SalesforceStandardObjectAttachmentConfiguration {
  DocumentTitleFieldName?: string;
  FieldMappings?: Array<DataSourceToIndexFieldMapping>;
}
export interface SalesforceStandardObjectConfiguration {
  Name: SalesforceStandardObjectName;
  DocumentDataFieldName: string;
  DocumentTitleFieldName?: string;
  FieldMappings?: Array<DataSourceToIndexFieldMapping>;
}
export type SalesforceStandardObjectConfigurationList =
  Array<SalesforceStandardObjectConfiguration>;
export type SalesforceStandardObjectName =
  | "ACCOUNT"
  | "CAMPAIGN"
  | "CASE"
  | "CONTACT"
  | "CONTRACT"
  | "DOCUMENT"
  | "GROUP"
  | "IDEA"
  | "LEAD"
  | "OPPORTUNITY"
  | "PARTNER"
  | "PRICEBOOK"
  | "PRODUCT"
  | "PROFILE"
  | "SOLUTION"
  | "TASK"
  | "USER";
export type ScanSchedule = string;

export interface ScoreAttributes {
  ScoreConfidence?: ScoreConfidence;
}
export type ScoreConfidence =
  | "VERY_HIGH"
  | "HIGH"
  | "MEDIUM"
  | "LOW"
  | "NOT_AVAILABLE";
export interface Search {
  Facetable?: boolean;
  Searchable?: boolean;
  Displayable?: boolean;
  Sortable?: boolean;
}
export type SecretArn = string;

export type SecurityGroupIdList = Array<string>;
export type SeedUrl = string;

export interface SeedUrlConfiguration {
  SeedUrls: Array<string>;
  WebCrawlerMode?: WebCrawlerMode;
}
export type SeedUrlList = Array<string>;
export interface ServerSideEncryptionConfiguration {
  KmsKeyId?: string;
}
export type ServiceNowAuthenticationType = "HTTP_BASIC" | "OAUTH2";
export type ServiceNowBuildVersionType = "LONDON" | "OTHERS";
export interface ServiceNowConfiguration {
  HostUrl: string;
  SecretArn: string;
  ServiceNowBuildVersion: ServiceNowBuildVersionType;
  KnowledgeArticleConfiguration?: ServiceNowKnowledgeArticleConfiguration;
  ServiceCatalogConfiguration?: ServiceNowServiceCatalogConfiguration;
  AuthenticationType?: ServiceNowAuthenticationType;
}
export type ServiceNowHostUrl = string;

export interface ServiceNowKnowledgeArticleConfiguration {
  CrawlAttachments?: boolean;
  IncludeAttachmentFilePatterns?: Array<string>;
  ExcludeAttachmentFilePatterns?: Array<string>;
  DocumentDataFieldName: string;
  DocumentTitleFieldName?: string;
  FieldMappings?: Array<DataSourceToIndexFieldMapping>;
  FilterQuery?: string;
}
export type ServiceNowKnowledgeArticleFilterQuery = string;

export interface ServiceNowServiceCatalogConfiguration {
  CrawlAttachments?: boolean;
  IncludeAttachmentFilePatterns?: Array<string>;
  ExcludeAttachmentFilePatterns?: Array<string>;
  DocumentDataFieldName: string;
  DocumentTitleFieldName?: string;
  FieldMappings?: Array<DataSourceToIndexFieldMapping>;
}
export declare class ServiceQuotaExceededException extends Data.TaggedError(
  "ServiceQuotaExceededException",
)<{
  readonly Message?: string;
}> {}
export type SharedDriveId = string;

export interface SharePointConfiguration {
  SharePointVersion: SharePointVersion;
  Urls: Array<string>;
  SecretArn: string;
  CrawlAttachments?: boolean;
  UseChangeLog?: boolean;
  InclusionPatterns?: Array<string>;
  ExclusionPatterns?: Array<string>;
  VpcConfiguration?: DataSourceVpcConfiguration;
  FieldMappings?: Array<DataSourceToIndexFieldMapping>;
  DocumentTitleFieldName?: string;
  DisableLocalGroups?: boolean;
  SslCertificateS3Path?: S3Path;
  AuthenticationType?: SharePointOnlineAuthenticationType;
  ProxyConfiguration?: ProxyConfiguration;
}
export type SharePointOnlineAuthenticationType = "HTTP_BASIC" | "OAUTH2";
export type SharePointUrlList = Array<string>;
export type SharePointVersion =
  | "SHAREPOINT_2013"
  | "SHAREPOINT_2016"
  | "SHAREPOINT_ONLINE"
  | "SHAREPOINT_2019";
export type SinceCrawlDate = string;

export type SiteId = string;

export type SiteMap = string;

export interface SiteMapsConfiguration {
  SiteMaps: Array<string>;
}
export type SiteMapsList = Array<string>;
export type SiteUrl = string;

export interface SlackConfiguration {
  TeamId: string;
  SecretArn: string;
  VpcConfiguration?: DataSourceVpcConfiguration;
  SlackEntityList: Array<SlackEntity>;
  UseChangeLog?: boolean;
  CrawlBotMessage?: boolean;
  ExcludeArchived?: boolean;
  SinceCrawlDate: string;
  LookBackPeriod?: number;
  PrivateChannelFilter?: Array<string>;
  PublicChannelFilter?: Array<string>;
  InclusionPatterns?: Array<string>;
  ExclusionPatterns?: Array<string>;
  FieldMappings?: Array<DataSourceToIndexFieldMapping>;
}
export type SlackEntity =
  | "PUBLIC_CHANNEL"
  | "PRIVATE_CHANNEL"
  | "GROUP_MESSAGE"
  | "DIRECT_MESSAGE";
export type SlackEntityList = Array<SlackEntity>;
export type SnapshotsDataHeaderFields = Array<string>;
export type SnapshotsDataRecord = Array<string>;
export type SnapshotsDataRecords = Array<Array<string>>;
export interface SortingConfiguration {
  DocumentAttributeKey: string;
  SortOrder: SortOrder;
}
export type SortingConfigurationList = Array<SortingConfiguration>;
export type SortOrder = "DESC" | "ASC";
export interface SourceDocument {
  DocumentId?: string;
  SuggestionAttributes?: Array<string>;
  AdditionalAttributes?: Array<DocumentAttribute>;
}
export type SourceDocuments = Array<SourceDocument>;
export interface SpellCorrectedQuery {
  SuggestedQueryText?: string;
  Corrections?: Array<Correction>;
}
export type SpellCorrectedQueryList = Array<SpellCorrectedQuery>;
export interface SpellCorrectionConfiguration {
  IncludeQuerySpellCheckSuggestions: boolean;
}
export interface SqlConfiguration {
  QueryIdentifiersEnclosingOption?: QueryIdentifiersEnclosingOption;
}
export interface StartDataSourceSyncJobRequest {
  Id: string;
  IndexId: string;
}
export interface StartDataSourceSyncJobResponse {
  ExecutionId?: string;
}
export interface Status {
  DocumentId?: string;
  DocumentStatus?: DocumentStatus;
  FailureCode?: string;
  FailureReason?: string;
}
export interface StopDataSourceSyncJobRequest {
  Id: string;
  IndexId: string;
}
export type StorageCapacityUnit = number;

export type StringList = Array<string>;
export interface SubmitFeedbackRequest {
  IndexId: string;
  QueryId: string;
  ClickFeedbackItems?: Array<ClickFeedback>;
  RelevanceFeedbackItems?: Array<RelevanceFeedback>;
}
export type SubnetId = string;

export type SubnetIdList = Array<string>;
export interface SuggestableConfig {
  AttributeName?: string;
  Suggestable?: boolean;
}
export type SuggestableConfigList = Array<SuggestableConfig>;
export type SuggestedQueryText = string;

export interface Suggestion {
  Id?: string;
  Value?: SuggestionValue;
  SourceDocuments?: Array<SourceDocument>;
}
export interface SuggestionHighlight {
  BeginOffset?: number;
  EndOffset?: number;
}
export type SuggestionHighlightList = Array<SuggestionHighlight>;
export type SuggestionList = Array<Suggestion>;
export type SuggestionQueryText = string;

export interface SuggestionTextWithHighlights {
  Text?: string;
  Highlights?: Array<SuggestionHighlight>;
}
export type SuggestionType = "QUERY" | "DOCUMENT_ATTRIBUTES";
export type SuggestionTypes = Array<SuggestionType>;
export interface SuggestionValue {
  Text?: SuggestionTextWithHighlights;
}
export interface TableCell {
  Value?: string;
  TopAnswer?: boolean;
  Highlighted?: boolean;
  Header?: boolean;
}
export type TableCellList = Array<TableCell>;
export interface TableExcerpt {
  Rows?: Array<TableRow>;
  TotalNumberOfRows?: number;
}
export type TableName = string;

export interface TableRow {
  Cells?: Array<TableCell>;
}
export type TableRowList = Array<TableRow>;
export interface Tag {
  Key: string;
  Value: string;
}
export type TagKey = string;

export type TagKeyList = Array<string>;
export type TagList = Array<Tag>;
export interface TagResourceRequest {
  ResourceARN: string;
  Tags: Array<Tag>;
}
export interface TagResourceResponse {}
export type TagValue = string;

export type TeamId = string;

export interface TemplateConfiguration {
  Template?: Template;
}
export type TenantDomain = string;

export interface TextDocumentStatistics {
  IndexedTextDocumentsCount: number;
  IndexedTextBytes: number;
}
export interface TextWithHighlights {
  Text?: string;
  Highlights?: Array<Highlight>;
}
export type ThesaurusId = string;

export type ThesaurusName = string;

export type ThesaurusStatus =
  | "CREATING"
  | "ACTIVE"
  | "DELETING"
  | "UPDATING"
  | "ACTIVE_BUT_UPDATE_FAILED"
  | "FAILED";
export interface ThesaurusSummary {
  Id?: string;
  Name?: string;
  Status?: ThesaurusStatus;
  CreatedAt?: Date | string;
  UpdatedAt?: Date | string;
}
export type ThesaurusSummaryItems = Array<ThesaurusSummary>;
export declare class ThrottlingException extends Data.TaggedError(
  "ThrottlingException",
)<{
  readonly Message?: string;
}> {}
export interface TimeRange {
  StartTime?: Date | string;
  EndTime?: Date | string;
}
export type Timestamp = Date | string;

export type Title = string;

export type Token = string;

export type TopDocumentAttributeValueCountPairsSize = number;

export type Type = "SAAS" | "ON_PREMISE";
export interface UntagResourceRequest {
  ResourceARN: string;
  TagKeys: Array<string>;
}
export interface UntagResourceResponse {}
export interface UpdateAccessControlConfigurationRequest {
  IndexId: string;
  Id: string;
  Name?: string;
  Description?: string;
  AccessControlList?: Array<Principal>;
  HierarchicalAccessControlList?: Array<HierarchicalPrincipal>;
}
export interface UpdateAccessControlConfigurationResponse {}
export interface UpdateDataSourceRequest {
  Id: string;
  Name?: string;
  IndexId: string;
  Configuration?: DataSourceConfiguration;
  VpcConfiguration?: DataSourceVpcConfiguration;
  Description?: string;
  Schedule?: string;
  RoleArn?: string;
  LanguageCode?: string;
  CustomDocumentEnrichmentConfiguration?: CustomDocumentEnrichmentConfiguration;
}
export interface UpdateExperienceRequest {
  Id: string;
  Name?: string;
  IndexId: string;
  RoleArn?: string;
  Configuration?: ExperienceConfiguration;
  Description?: string;
}
export interface UpdateFeaturedResultsSetRequest {
  IndexId: string;
  FeaturedResultsSetId: string;
  FeaturedResultsSetName?: string;
  Description?: string;
  Status?: FeaturedResultsSetStatus;
  QueryTexts?: Array<string>;
  FeaturedDocuments?: Array<FeaturedDocument>;
}
export interface UpdateFeaturedResultsSetResponse {
  FeaturedResultsSet?: FeaturedResultsSet;
}
export interface UpdateIndexRequest {
  Id: string;
  Name?: string;
  RoleArn?: string;
  Description?: string;
  DocumentMetadataConfigurationUpdates?: Array<DocumentMetadataConfiguration>;
  CapacityUnits?: CapacityUnitsConfiguration;
  UserTokenConfigurations?: Array<UserTokenConfiguration>;
  UserContextPolicy?: UserContextPolicy;
  UserGroupResolutionConfiguration?: UserGroupResolutionConfiguration;
}
export interface UpdateQuerySuggestionsBlockListRequest {
  IndexId: string;
  Id: string;
  Name?: string;
  Description?: string;
  SourceS3Path?: S3Path;
  RoleArn?: string;
}
export interface UpdateQuerySuggestionsConfigRequest {
  IndexId: string;
  Mode?: Mode;
  QueryLogLookBackWindowInDays?: number;
  IncludeQueriesWithoutUserInformation?: boolean;
  MinimumNumberOfQueryingUsers?: number;
  MinimumQueryCount?: number;
  AttributeSuggestionsConfig?: AttributeSuggestionsUpdateConfig;
}
export interface UpdateThesaurusRequest {
  Id: string;
  Name?: string;
  IndexId: string;
  Description?: string;
  RoleArn?: string;
  SourceS3Path?: S3Path;
}
export type Url = string;

export interface Urls {
  SeedUrlConfiguration?: SeedUrlConfiguration;
  SiteMapsConfiguration?: SiteMapsConfiguration;
}
export type UserAccount = string;

export interface UserContext {
  Token?: string;
  UserId?: string;
  Groups?: Array<string>;
  DataSourceGroups?: Array<DataSourceGroup>;
}
export type UserContextPolicy = "ATTRIBUTE_FILTER" | "USER_TOKEN";
export interface UserGroupResolutionConfiguration {
  UserGroupResolutionMode: UserGroupResolutionMode;
}
export type UserGroupResolutionMode = "AWS_SSO" | "NONE";
export type UserId = string;

export interface UserIdentityConfiguration {
  IdentityAttributeName?: string;
}
export type UserNameAttributeField = string;

export interface UserTokenConfiguration {
  JwtTokenTypeConfiguration?: JwtTokenTypeConfiguration;
  JsonTokenTypeConfiguration?: JsonTokenTypeConfiguration;
}
export type UserTokenConfigurationList = Array<UserTokenConfiguration>;
export declare class ValidationException extends Data.TaggedError(
  "ValidationException",
)<{
  readonly Message?: string;
}> {}
export type ValueImportanceMap = Record<string, number>;
export type ValueImportanceMapKey = string;

export type VisitorId = string;

export type VpcSecurityGroupId = string;

export interface Warning {
  Message?: string;
  Code?: WarningCode;
}
export type WarningCode = "QUERY_LANGUAGE_INVALID_SYNTAX";
export type WarningList = Array<Warning>;
export type WarningMessage = string;

export interface WebCrawlerConfiguration {
  Urls: Urls;
  CrawlDepth?: number;
  MaxLinksPerPage?: number;
  MaxContentSizePerPageInMegaBytes?: number;
  MaxUrlsPerMinuteCrawlRate?: number;
  UrlInclusionPatterns?: Array<string>;
  UrlExclusionPatterns?: Array<string>;
  ProxyConfiguration?: ProxyConfiguration;
  AuthenticationConfiguration?: AuthenticationConfiguration;
}
export type WebCrawlerMode = "HOST_ONLY" | "SUBDOMAINS" | "EVERYTHING";
export interface WorkDocsConfiguration {
  OrganizationId: string;
  CrawlComments?: boolean;
  UseChangeLog?: boolean;
  InclusionPatterns?: Array<string>;
  ExclusionPatterns?: Array<string>;
  FieldMappings?: Array<DataSourceToIndexFieldMapping>;
}
export declare namespace AssociateEntitiesToExperience {
  export type Input = AssociateEntitiesToExperienceRequest;
  export type Output = AssociateEntitiesToExperienceResponse;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ResourceAlreadyExistException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace AssociatePersonasToEntities {
  export type Input = AssociatePersonasToEntitiesRequest;
  export type Output = AssociatePersonasToEntitiesResponse;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ResourceAlreadyExistException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace BatchDeleteDocument {
  export type Input = BatchDeleteDocumentRequest;
  export type Output = BatchDeleteDocumentResponse;
  export type Error =
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace BatchDeleteFeaturedResultsSet {
  export type Input = BatchDeleteFeaturedResultsSetRequest;
  export type Output = BatchDeleteFeaturedResultsSetResponse;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace BatchGetDocumentStatus {
  export type Input = BatchGetDocumentStatusRequest;
  export type Output = BatchGetDocumentStatusResponse;
  export type Error =
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace BatchPutDocument {
  export type Input = BatchPutDocumentRequest;
  export type Output = BatchPutDocumentResponse;
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

export declare namespace ClearQuerySuggestions {
  export type Input = ClearQuerySuggestionsRequest;
  export type Output = {};
  export type Error =
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace CreateAccessControlConfiguration {
  export type Input = CreateAccessControlConfigurationRequest;
  export type Output = CreateAccessControlConfigurationResponse;
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

export declare namespace CreateDataSource {
  export type Input = CreateDataSourceRequest;
  export type Output = CreateDataSourceResponse;
  export type Error =
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceAlreadyExistException
    | ResourceNotFoundException
    | ServiceQuotaExceededException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace CreateExperience {
  export type Input = CreateExperienceRequest;
  export type Output = CreateExperienceResponse;
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

export declare namespace CreateFaq {
  export type Input = CreateFaqRequest;
  export type Output = CreateFaqResponse;
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

export declare namespace CreateFeaturedResultsSet {
  export type Input = CreateFeaturedResultsSetRequest;
  export type Output = CreateFeaturedResultsSetResponse;
  export type Error =
    | AccessDeniedException
    | ConflictException
    | FeaturedResultsConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace CreateIndex {
  export type Input = CreateIndexRequest;
  export type Output = CreateIndexResponse;
  export type Error =
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceAlreadyExistException
    | ServiceQuotaExceededException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace CreateQuerySuggestionsBlockList {
  export type Input = CreateQuerySuggestionsBlockListRequest;
  export type Output = CreateQuerySuggestionsBlockListResponse;
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

export declare namespace CreateThesaurus {
  export type Input = CreateThesaurusRequest;
  export type Output = CreateThesaurusResponse;
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

export declare namespace DeleteAccessControlConfiguration {
  export type Input = DeleteAccessControlConfigurationRequest;
  export type Output = DeleteAccessControlConfigurationResponse;
  export type Error =
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace DeleteDataSource {
  export type Input = DeleteDataSourceRequest;
  export type Output = {};
  export type Error =
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace DeleteExperience {
  export type Input = DeleteExperienceRequest;
  export type Output = DeleteExperienceResponse;
  export type Error =
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace DeleteFaq {
  export type Input = DeleteFaqRequest;
  export type Output = {};
  export type Error =
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace DeleteIndex {
  export type Input = DeleteIndexRequest;
  export type Output = {};
  export type Error =
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace DeletePrincipalMapping {
  export type Input = DeletePrincipalMappingRequest;
  export type Output = {};
  export type Error =
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace DeleteQuerySuggestionsBlockList {
  export type Input = DeleteQuerySuggestionsBlockListRequest;
  export type Output = {};
  export type Error =
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace DeleteThesaurus {
  export type Input = DeleteThesaurusRequest;
  export type Output = {};
  export type Error =
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace DescribeAccessControlConfiguration {
  export type Input = DescribeAccessControlConfigurationRequest;
  export type Output = DescribeAccessControlConfigurationResponse;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace DescribeDataSource {
  export type Input = DescribeDataSourceRequest;
  export type Output = DescribeDataSourceResponse;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace DescribeExperience {
  export type Input = DescribeExperienceRequest;
  export type Output = DescribeExperienceResponse;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace DescribeFaq {
  export type Input = DescribeFaqRequest;
  export type Output = DescribeFaqResponse;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace DescribeFeaturedResultsSet {
  export type Input = DescribeFeaturedResultsSetRequest;
  export type Output = DescribeFeaturedResultsSetResponse;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace DescribeIndex {
  export type Input = DescribeIndexRequest;
  export type Output = DescribeIndexResponse;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace DescribePrincipalMapping {
  export type Input = DescribePrincipalMappingRequest;
  export type Output = DescribePrincipalMappingResponse;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace DescribeQuerySuggestionsBlockList {
  export type Input = DescribeQuerySuggestionsBlockListRequest;
  export type Output = DescribeQuerySuggestionsBlockListResponse;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace DescribeQuerySuggestionsConfig {
  export type Input = DescribeQuerySuggestionsConfigRequest;
  export type Output = DescribeQuerySuggestionsConfigResponse;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace DescribeThesaurus {
  export type Input = DescribeThesaurusRequest;
  export type Output = DescribeThesaurusResponse;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace DisassociateEntitiesFromExperience {
  export type Input = DisassociateEntitiesFromExperienceRequest;
  export type Output = DisassociateEntitiesFromExperienceResponse;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace DisassociatePersonasFromEntities {
  export type Input = DisassociatePersonasFromEntitiesRequest;
  export type Output = DisassociatePersonasFromEntitiesResponse;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace GetQuerySuggestions {
  export type Input = GetQuerySuggestionsRequest;
  export type Output = GetQuerySuggestionsResponse;
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

export declare namespace GetSnapshots {
  export type Input = GetSnapshotsRequest;
  export type Output = GetSnapshotsResponse;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | InvalidRequestException
    | ResourceNotFoundException
    | CommonAwsError;
}

export declare namespace ListAccessControlConfigurations {
  export type Input = ListAccessControlConfigurationsRequest;
  export type Output = ListAccessControlConfigurationsResponse;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace ListDataSources {
  export type Input = ListDataSourcesRequest;
  export type Output = ListDataSourcesResponse;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace ListDataSourceSyncJobs {
  export type Input = ListDataSourceSyncJobsRequest;
  export type Output = ListDataSourceSyncJobsResponse;
  export type Error =
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace ListEntityPersonas {
  export type Input = ListEntityPersonasRequest;
  export type Output = ListEntityPersonasResponse;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace ListExperienceEntities {
  export type Input = ListExperienceEntitiesRequest;
  export type Output = ListExperienceEntitiesResponse;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace ListExperiences {
  export type Input = ListExperiencesRequest;
  export type Output = ListExperiencesResponse;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace ListFaqs {
  export type Input = ListFaqsRequest;
  export type Output = ListFaqsResponse;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace ListFeaturedResultsSets {
  export type Input = ListFeaturedResultsSetsRequest;
  export type Output = ListFeaturedResultsSetsResponse;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace ListGroupsOlderThanOrderingId {
  export type Input = ListGroupsOlderThanOrderingIdRequest;
  export type Output = ListGroupsOlderThanOrderingIdResponse;
  export type Error =
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace ListIndices {
  export type Input = ListIndicesRequest;
  export type Output = ListIndicesResponse;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace ListQuerySuggestionsBlockLists {
  export type Input = ListQuerySuggestionsBlockListsRequest;
  export type Output = ListQuerySuggestionsBlockListsResponse;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
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
    | ResourceUnavailableException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace ListThesauri {
  export type Input = ListThesauriRequest;
  export type Output = ListThesauriResponse;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace PutPrincipalMapping {
  export type Input = PutPrincipalMappingRequest;
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

export declare namespace Query {
  export type Input = QueryRequest;
  export type Output = QueryResult;
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

export declare namespace Retrieve {
  export type Input = RetrieveRequest;
  export type Output = RetrieveResult;
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

export declare namespace StartDataSourceSyncJob {
  export type Input = StartDataSourceSyncJobRequest;
  export type Output = StartDataSourceSyncJobResponse;
  export type Error =
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceInUseException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace StopDataSourceSyncJob {
  export type Input = StopDataSourceSyncJobRequest;
  export type Output = {};
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace SubmitFeedback {
  export type Input = SubmitFeedbackRequest;
  export type Output = {};
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ResourceUnavailableException
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
    | ResourceUnavailableException
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
    | ResourceUnavailableException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace UpdateAccessControlConfiguration {
  export type Input = UpdateAccessControlConfigurationRequest;
  export type Output = UpdateAccessControlConfigurationResponse;
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

export declare namespace UpdateDataSource {
  export type Input = UpdateDataSourceRequest;
  export type Output = {};
  export type Error =
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace UpdateExperience {
  export type Input = UpdateExperienceRequest;
  export type Output = {};
  export type Error =
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace UpdateFeaturedResultsSet {
  export type Input = UpdateFeaturedResultsSetRequest;
  export type Output = UpdateFeaturedResultsSetResponse;
  export type Error =
    | AccessDeniedException
    | FeaturedResultsConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace UpdateIndex {
  export type Input = UpdateIndexRequest;
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

export declare namespace UpdateQuerySuggestionsBlockList {
  export type Input = UpdateQuerySuggestionsBlockListRequest;
  export type Output = {};
  export type Error =
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace UpdateQuerySuggestionsConfig {
  export type Input = UpdateQuerySuggestionsConfigRequest;
  export type Output = {};
  export type Error =
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace UpdateThesaurus {
  export type Input = UpdateThesaurusRequest;
  export type Output = {};
  export type Error =
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}
