import type { Effect, Data } from "effect";
import type { CommonAwsError } from "../client.ts";

export interface CustomerProfiles_20200815 {
  addProfileKey(
    input: AddProfileKeyRequest,
  ): Effect.Effect<
    {},
    AccessDeniedException | BadRequestException | InternalServerException | ResourceNotFoundException | ThrottlingException | CommonAwsError
  >;
  batchGetCalculatedAttributeForProfile(
    input: BatchGetCalculatedAttributeForProfileRequest,
  ): Effect.Effect<
    {},
    AccessDeniedException | BadRequestException | InternalServerException | ResourceNotFoundException | ThrottlingException | CommonAwsError
  >;
  batchGetProfile(
    input: BatchGetProfileRequest,
  ): Effect.Effect<
    {},
    AccessDeniedException | BadRequestException | InternalServerException | ResourceNotFoundException | ThrottlingException | CommonAwsError
  >;
  createCalculatedAttributeDefinition(
    input: CreateCalculatedAttributeDefinitionRequest,
  ): Effect.Effect<
    {},
    AccessDeniedException | BadRequestException | InternalServerException | ResourceNotFoundException | ThrottlingException | CommonAwsError
  >;
  createDomain(
    input: CreateDomainRequest,
  ): Effect.Effect<
    {},
    AccessDeniedException | BadRequestException | InternalServerException | ResourceNotFoundException | ThrottlingException | CommonAwsError
  >;
  createDomainLayout(
    input: CreateDomainLayoutRequest,
  ): Effect.Effect<
    {},
    AccessDeniedException | BadRequestException | InternalServerException | ResourceNotFoundException | ThrottlingException | CommonAwsError
  >;
  createEventStream(
    input: CreateEventStreamRequest,
  ): Effect.Effect<
    {},
    AccessDeniedException | BadRequestException | InternalServerException | ResourceNotFoundException | ThrottlingException | CommonAwsError
  >;
  createEventTrigger(
    input: CreateEventTriggerRequest,
  ): Effect.Effect<
    {},
    AccessDeniedException | BadRequestException | InternalServerException | ResourceNotFoundException | ThrottlingException | CommonAwsError
  >;
  createIntegrationWorkflow(
    input: CreateIntegrationWorkflowRequest,
  ): Effect.Effect<
    {},
    AccessDeniedException | BadRequestException | InternalServerException | ResourceNotFoundException | ThrottlingException | CommonAwsError
  >;
  createProfile(
    input: CreateProfileRequest,
  ): Effect.Effect<
    {},
    AccessDeniedException | BadRequestException | InternalServerException | ResourceNotFoundException | ThrottlingException | CommonAwsError
  >;
  createSegmentDefinition(
    input: CreateSegmentDefinitionRequest,
  ): Effect.Effect<
    {},
    AccessDeniedException | BadRequestException | InternalServerException | ResourceNotFoundException | ThrottlingException | CommonAwsError
  >;
  createSegmentEstimate(
    input: CreateSegmentEstimateRequest,
  ): Effect.Effect<
    {},
    AccessDeniedException | BadRequestException | InternalServerException | ResourceNotFoundException | ThrottlingException | CommonAwsError
  >;
  createSegmentSnapshot(
    input: CreateSegmentSnapshotRequest,
  ): Effect.Effect<
    {},
    AccessDeniedException | BadRequestException | InternalServerException | ResourceNotFoundException | ThrottlingException | CommonAwsError
  >;
  createUploadJob(
    input: CreateUploadJobRequest,
  ): Effect.Effect<
    {},
    AccessDeniedException | BadRequestException | InternalServerException | ResourceNotFoundException | ThrottlingException | CommonAwsError
  >;
  deleteCalculatedAttributeDefinition(
    input: DeleteCalculatedAttributeDefinitionRequest,
  ): Effect.Effect<
    {},
    AccessDeniedException | BadRequestException | InternalServerException | ResourceNotFoundException | ThrottlingException | CommonAwsError
  >;
  deleteDomain(
    input: DeleteDomainRequest,
  ): Effect.Effect<
    {},
    AccessDeniedException | BadRequestException | InternalServerException | ResourceNotFoundException | ThrottlingException | CommonAwsError
  >;
  deleteDomainLayout(
    input: DeleteDomainLayoutRequest,
  ): Effect.Effect<
    {},
    AccessDeniedException | BadRequestException | InternalServerException | ResourceNotFoundException | ThrottlingException | CommonAwsError
  >;
  deleteEventStream(
    input: DeleteEventStreamRequest,
  ): Effect.Effect<
    {},
    AccessDeniedException | BadRequestException | InternalServerException | ResourceNotFoundException | ThrottlingException | CommonAwsError
  >;
  deleteEventTrigger(
    input: DeleteEventTriggerRequest,
  ): Effect.Effect<
    {},
    AccessDeniedException | BadRequestException | InternalServerException | ResourceNotFoundException | ThrottlingException | CommonAwsError
  >;
  deleteIntegration(
    input: DeleteIntegrationRequest,
  ): Effect.Effect<
    {},
    AccessDeniedException | BadRequestException | InternalServerException | ResourceNotFoundException | ThrottlingException | CommonAwsError
  >;
  deleteProfile(
    input: DeleteProfileRequest,
  ): Effect.Effect<
    {},
    AccessDeniedException | BadRequestException | InternalServerException | ResourceNotFoundException | ThrottlingException | CommonAwsError
  >;
  deleteProfileKey(
    input: DeleteProfileKeyRequest,
  ): Effect.Effect<
    {},
    AccessDeniedException | BadRequestException | InternalServerException | ResourceNotFoundException | ThrottlingException | CommonAwsError
  >;
  deleteProfileObject(
    input: DeleteProfileObjectRequest,
  ): Effect.Effect<
    {},
    AccessDeniedException | BadRequestException | InternalServerException | ResourceNotFoundException | ThrottlingException | CommonAwsError
  >;
  deleteProfileObjectType(
    input: DeleteProfileObjectTypeRequest,
  ): Effect.Effect<
    {},
    AccessDeniedException | BadRequestException | InternalServerException | ResourceNotFoundException | ThrottlingException | CommonAwsError
  >;
  deleteSegmentDefinition(
    input: DeleteSegmentDefinitionRequest,
  ): Effect.Effect<
    {},
    AccessDeniedException | BadRequestException | InternalServerException | ResourceNotFoundException | ThrottlingException | CommonAwsError
  >;
  deleteWorkflow(
    input: DeleteWorkflowRequest,
  ): Effect.Effect<
    {},
    AccessDeniedException | BadRequestException | InternalServerException | ResourceNotFoundException | ThrottlingException | CommonAwsError
  >;
  detectProfileObjectType(
    input: DetectProfileObjectTypeRequest,
  ): Effect.Effect<
    {},
    AccessDeniedException | BadRequestException | InternalServerException | ResourceNotFoundException | ThrottlingException | CommonAwsError
  >;
  getAutoMergingPreview(
    input: GetAutoMergingPreviewRequest,
  ): Effect.Effect<
    {},
    AccessDeniedException | BadRequestException | InternalServerException | ResourceNotFoundException | ThrottlingException | CommonAwsError
  >;
  getCalculatedAttributeDefinition(
    input: GetCalculatedAttributeDefinitionRequest,
  ): Effect.Effect<
    {},
    AccessDeniedException | BadRequestException | InternalServerException | ResourceNotFoundException | ThrottlingException | CommonAwsError
  >;
  getCalculatedAttributeForProfile(
    input: GetCalculatedAttributeForProfileRequest,
  ): Effect.Effect<
    {},
    AccessDeniedException | BadRequestException | InternalServerException | ResourceNotFoundException | ThrottlingException | CommonAwsError
  >;
  getDomain(
    input: GetDomainRequest,
  ): Effect.Effect<
    {},
    AccessDeniedException | BadRequestException | InternalServerException | ResourceNotFoundException | ThrottlingException | CommonAwsError
  >;
  getDomainLayout(
    input: GetDomainLayoutRequest,
  ): Effect.Effect<
    {},
    AccessDeniedException | BadRequestException | InternalServerException | ResourceNotFoundException | ThrottlingException | CommonAwsError
  >;
  getEventStream(
    input: GetEventStreamRequest,
  ): Effect.Effect<
    {},
    AccessDeniedException | BadRequestException | InternalServerException | ResourceNotFoundException | ThrottlingException | CommonAwsError
  >;
  getEventTrigger(
    input: GetEventTriggerRequest,
  ): Effect.Effect<
    {},
    AccessDeniedException | BadRequestException | InternalServerException | ResourceNotFoundException | ThrottlingException | CommonAwsError
  >;
  getIdentityResolutionJob(
    input: GetIdentityResolutionJobRequest,
  ): Effect.Effect<
    {},
    AccessDeniedException | BadRequestException | InternalServerException | ResourceNotFoundException | ThrottlingException | CommonAwsError
  >;
  getIntegration(
    input: GetIntegrationRequest,
  ): Effect.Effect<
    {},
    AccessDeniedException | BadRequestException | InternalServerException | ResourceNotFoundException | ThrottlingException | CommonAwsError
  >;
  getMatches(
    input: GetMatchesRequest,
  ): Effect.Effect<
    {},
    AccessDeniedException | BadRequestException | InternalServerException | ResourceNotFoundException | ThrottlingException | CommonAwsError
  >;
  getProfileObjectType(
    input: GetProfileObjectTypeRequest,
  ): Effect.Effect<
    {},
    AccessDeniedException | BadRequestException | InternalServerException | ResourceNotFoundException | ThrottlingException | CommonAwsError
  >;
  getProfileObjectTypeTemplate(
    input: GetProfileObjectTypeTemplateRequest,
  ): Effect.Effect<
    {},
    AccessDeniedException | BadRequestException | InternalServerException | ResourceNotFoundException | ThrottlingException | CommonAwsError
  >;
  getSegmentDefinition(
    input: GetSegmentDefinitionRequest,
  ): Effect.Effect<
    {},
    AccessDeniedException | BadRequestException | InternalServerException | ResourceNotFoundException | ThrottlingException | CommonAwsError
  >;
  getSegmentEstimate(
    input: GetSegmentEstimateRequest,
  ): Effect.Effect<
    {},
    AccessDeniedException | BadRequestException | InternalServerException | ResourceNotFoundException | ThrottlingException | CommonAwsError
  >;
  getSegmentMembership(
    input: GetSegmentMembershipRequest,
  ): Effect.Effect<
    {},
    AccessDeniedException | BadRequestException | InternalServerException | ResourceNotFoundException | ThrottlingException | CommonAwsError
  >;
  getSegmentSnapshot(
    input: GetSegmentSnapshotRequest,
  ): Effect.Effect<
    {},
    AccessDeniedException | BadRequestException | InternalServerException | ResourceNotFoundException | ThrottlingException | CommonAwsError
  >;
  getSimilarProfiles(
    input: GetSimilarProfilesRequest,
  ): Effect.Effect<
    {},
    AccessDeniedException | BadRequestException | InternalServerException | ResourceNotFoundException | ThrottlingException | CommonAwsError
  >;
  getUploadJob(
    input: GetUploadJobRequest,
  ): Effect.Effect<
    {},
    AccessDeniedException | BadRequestException | InternalServerException | ResourceNotFoundException | ThrottlingException | CommonAwsError
  >;
  getUploadJobPath(
    input: GetUploadJobPathRequest,
  ): Effect.Effect<
    {},
    AccessDeniedException | BadRequestException | InternalServerException | ResourceNotFoundException | ThrottlingException | CommonAwsError
  >;
  getWorkflow(
    input: GetWorkflowRequest,
  ): Effect.Effect<
    {},
    AccessDeniedException | BadRequestException | InternalServerException | ResourceNotFoundException | ThrottlingException | CommonAwsError
  >;
  getWorkflowSteps(
    input: GetWorkflowStepsRequest,
  ): Effect.Effect<
    {},
    AccessDeniedException | BadRequestException | InternalServerException | ResourceNotFoundException | ThrottlingException | CommonAwsError
  >;
  listAccountIntegrations(
    input: ListAccountIntegrationsRequest,
  ): Effect.Effect<
    {},
    AccessDeniedException | BadRequestException | InternalServerException | ResourceNotFoundException | ThrottlingException | CommonAwsError
  >;
  listCalculatedAttributeDefinitions(
    input: ListCalculatedAttributeDefinitionsRequest,
  ): Effect.Effect<
    {},
    AccessDeniedException | BadRequestException | InternalServerException | ResourceNotFoundException | ThrottlingException | CommonAwsError
  >;
  listCalculatedAttributesForProfile(
    input: ListCalculatedAttributesForProfileRequest,
  ): Effect.Effect<
    {},
    AccessDeniedException | BadRequestException | InternalServerException | ResourceNotFoundException | ThrottlingException | CommonAwsError
  >;
  listDomainLayouts(
    input: ListDomainLayoutsRequest,
  ): Effect.Effect<
    {},
    AccessDeniedException | BadRequestException | InternalServerException | ResourceNotFoundException | ThrottlingException | CommonAwsError
  >;
  listDomains(
    input: ListDomainsRequest,
  ): Effect.Effect<
    {},
    AccessDeniedException | BadRequestException | InternalServerException | ResourceNotFoundException | ThrottlingException | CommonAwsError
  >;
  listEventStreams(
    input: ListEventStreamsRequest,
  ): Effect.Effect<
    {},
    AccessDeniedException | BadRequestException | InternalServerException | ResourceNotFoundException | ThrottlingException | CommonAwsError
  >;
  listEventTriggers(
    input: ListEventTriggersRequest,
  ): Effect.Effect<
    {},
    AccessDeniedException | BadRequestException | InternalServerException | ResourceNotFoundException | ThrottlingException | CommonAwsError
  >;
  listIdentityResolutionJobs(
    input: ListIdentityResolutionJobsRequest,
  ): Effect.Effect<
    {},
    AccessDeniedException | BadRequestException | InternalServerException | ResourceNotFoundException | ThrottlingException | CommonAwsError
  >;
  listIntegrations(
    input: ListIntegrationsRequest,
  ): Effect.Effect<
    {},
    AccessDeniedException | BadRequestException | InternalServerException | ResourceNotFoundException | ThrottlingException | CommonAwsError
  >;
  listObjectTypeAttributes(
    input: ListObjectTypeAttributesRequest,
  ): Effect.Effect<
    {},
    AccessDeniedException | BadRequestException | InternalServerException | ResourceNotFoundException | ThrottlingException | CommonAwsError
  >;
  listProfileAttributeValues(
    input: ProfileAttributeValuesRequest,
  ): Effect.Effect<
    {},
    AccessDeniedException | BadRequestException | InternalServerException | ResourceNotFoundException | ThrottlingException | CommonAwsError
  >;
  listProfileObjectTypeTemplates(
    input: ListProfileObjectTypeTemplatesRequest,
  ): Effect.Effect<
    {},
    AccessDeniedException | BadRequestException | InternalServerException | ResourceNotFoundException | ThrottlingException | CommonAwsError
  >;
  listProfileObjectTypes(
    input: ListProfileObjectTypesRequest,
  ): Effect.Effect<
    {},
    AccessDeniedException | BadRequestException | InternalServerException | ResourceNotFoundException | ThrottlingException | CommonAwsError
  >;
  listProfileObjects(
    input: ListProfileObjectsRequest,
  ): Effect.Effect<
    {},
    AccessDeniedException | BadRequestException | InternalServerException | ResourceNotFoundException | ThrottlingException | CommonAwsError
  >;
  listRuleBasedMatches(
    input: ListRuleBasedMatchesRequest,
  ): Effect.Effect<
    {},
    AccessDeniedException | BadRequestException | InternalServerException | ResourceNotFoundException | ThrottlingException | CommonAwsError
  >;
  listSegmentDefinitions(
    input: ListSegmentDefinitionsRequest,
  ): Effect.Effect<
    {},
    AccessDeniedException | BadRequestException | InternalServerException | ResourceNotFoundException | ThrottlingException | CommonAwsError
  >;
  listTagsForResource(
    input: ListTagsForResourceRequest,
  ): Effect.Effect<
    {},
    BadRequestException | InternalServerException | ResourceNotFoundException | CommonAwsError
  >;
  listUploadJobs(
    input: ListUploadJobsRequest,
  ): Effect.Effect<
    {},
    AccessDeniedException | BadRequestException | InternalServerException | ResourceNotFoundException | ThrottlingException | CommonAwsError
  >;
  listWorkflows(
    input: ListWorkflowsRequest,
  ): Effect.Effect<
    {},
    AccessDeniedException | BadRequestException | InternalServerException | ResourceNotFoundException | ThrottlingException | CommonAwsError
  >;
  mergeProfiles(
    input: MergeProfilesRequest,
  ): Effect.Effect<
    {},
    BadRequestException | InternalServerException | ResourceNotFoundException | ThrottlingException | CommonAwsError
  >;
  putIntegration(
    input: PutIntegrationRequest,
  ): Effect.Effect<
    {},
    AccessDeniedException | BadRequestException | InternalServerException | ResourceNotFoundException | ThrottlingException | CommonAwsError
  >;
  putProfileObject(
    input: PutProfileObjectRequest,
  ): Effect.Effect<
    {},
    AccessDeniedException | BadRequestException | InternalServerException | ResourceNotFoundException | ThrottlingException | CommonAwsError
  >;
  putProfileObjectType(
    input: PutProfileObjectTypeRequest,
  ): Effect.Effect<
    {},
    AccessDeniedException | BadRequestException | InternalServerException | ResourceNotFoundException | ThrottlingException | CommonAwsError
  >;
  searchProfiles(
    input: SearchProfilesRequest,
  ): Effect.Effect<
    {},
    AccessDeniedException | BadRequestException | InternalServerException | ResourceNotFoundException | ThrottlingException | CommonAwsError
  >;
  startUploadJob(
    input: StartUploadJobRequest,
  ): Effect.Effect<
    {},
    AccessDeniedException | BadRequestException | InternalServerException | ResourceNotFoundException | ThrottlingException | CommonAwsError
  >;
  stopUploadJob(
    input: StopUploadJobRequest,
  ): Effect.Effect<
    {},
    AccessDeniedException | BadRequestException | InternalServerException | ResourceNotFoundException | ThrottlingException | CommonAwsError
  >;
  tagResource(
    input: TagResourceRequest,
  ): Effect.Effect<
    {},
    BadRequestException | InternalServerException | ResourceNotFoundException | CommonAwsError
  >;
  untagResource(
    input: UntagResourceRequest,
  ): Effect.Effect<
    {},
    BadRequestException | InternalServerException | ResourceNotFoundException | CommonAwsError
  >;
  updateCalculatedAttributeDefinition(
    input: UpdateCalculatedAttributeDefinitionRequest,
  ): Effect.Effect<
    {},
    AccessDeniedException | BadRequestException | InternalServerException | ResourceNotFoundException | ThrottlingException | CommonAwsError
  >;
  updateDomain(
    input: UpdateDomainRequest,
  ): Effect.Effect<
    {},
    AccessDeniedException | BadRequestException | InternalServerException | ResourceNotFoundException | ThrottlingException | CommonAwsError
  >;
  updateDomainLayout(
    input: UpdateDomainLayoutRequest,
  ): Effect.Effect<
    {},
    AccessDeniedException | BadRequestException | InternalServerException | ResourceNotFoundException | ThrottlingException | CommonAwsError
  >;
  updateEventTrigger(
    input: UpdateEventTriggerRequest,
  ): Effect.Effect<
    {},
    AccessDeniedException | BadRequestException | InternalServerException | ResourceNotFoundException | ThrottlingException | CommonAwsError
  >;
  updateProfile(
    input: UpdateProfileRequest,
  ): Effect.Effect<
    {},
    AccessDeniedException | BadRequestException | InternalServerException | ResourceNotFoundException | ThrottlingException | CommonAwsError
  >;
}

export type CustomerProfiles = CustomerProfiles_20200815;

export interface AccessDeniedException {
}
export interface AdditionalSearchKey {
}
export type additionalSearchKeysList = Array<unknown>;
export interface AddProfileKeyRequest {
}
export interface AddProfileKeyResponse {
}
export interface Address {
}
export interface AddressDimension {
}
export type AddressList = Array<unknown>;
export interface AppflowIntegration {
}
export interface AppflowIntegrationWorkflowAttributes {
}
export interface AppflowIntegrationWorkflowMetrics {
}
export interface AppflowIntegrationWorkflowStep {
}
export interface AttributeDetails {
}
export interface AttributeDimension {
}
export type AttributeDimensionType = never;
export interface AttributeItem {
}
export type AttributeList = Array<unknown>;
export type AttributeMap = Record<string, unknown>;
export type AttributeMatchingModel = never;
export type attributeName = string;

export type Attributes = Record<string, unknown>;
export type AttributeSourceIdMap = Record<string, unknown>;
export interface AttributeTypesSelector {
}
export interface AttributeValueItem {
}
export type AttributeValueItemList = Array<unknown>;
export interface AutoMerging {
}
export interface BadRequestException {
}
export interface Batch {
}
export type Batches = Array<unknown>;
export interface BatchGetCalculatedAttributeForProfileError {
}
export type BatchGetCalculatedAttributeForProfileErrorList = Array<unknown>;
export type BatchGetCalculatedAttributeForProfileIdList = Array<unknown>;
export interface BatchGetCalculatedAttributeForProfileRequest {
}
export interface BatchGetCalculatedAttributeForProfileResponse {
}
export interface BatchGetProfileError {
}
export type BatchGetProfileErrorList = Array<unknown>;
export type BatchGetProfileIdList = Array<unknown>;
export interface BatchGetProfileRequest {
}
export interface BatchGetProfileResponse {
}
export type boolean = boolean;

export type BucketName = string;

export type BucketPrefix = string;

export type CalculatedAttributeDefinitionsList = Array<unknown>;
export interface CalculatedAttributeDimension {
}
export type CalculatedAttributesForProfileList = Array<unknown>;
export interface CalculatedAttributeValue {
}
export type CalculatedAttributeValueList = Array<unknown>;
export type CalculatedCustomAttributes = Record<string, unknown>;
export type ComparisonOperator = never;
export interface ConditionOverrides {
}
export interface Conditions {
}
export interface ConflictResolution {
}
export type ConflictResolvingModel = never;
export interface ConnectorOperator {
}
export type ConnectorProfileName = string;

export interface Consolidation {
}
export interface CreateCalculatedAttributeDefinitionRequest {
}
export interface CreateCalculatedAttributeDefinitionResponse {
}
export interface CreateDomainLayoutRequest {
}
export interface CreateDomainLayoutResponse {
}
export interface CreateDomainRequest {
}
export interface CreateDomainResponse {
}
export interface CreateEventStreamRequest {
}
export interface CreateEventStreamResponse {
}
export interface CreateEventTriggerRequest {
}
export interface CreateEventTriggerResponse {
}
export interface CreateIntegrationWorkflowRequest {
}
export interface CreateIntegrationWorkflowResponse {
}
export interface CreateProfileRequest {
}
export interface CreateProfileResponse {
}
export interface CreateSegmentDefinitionRequest {
}
export interface CreateSegmentDefinitionResponse {
}
export interface CreateSegmentEstimateRequest {
}
export interface CreateSegmentEstimateResponse {
}
export interface CreateSegmentSnapshotRequest {
}
export interface CreateSegmentSnapshotResponse {
}
export interface CreateUploadJobRequest {
}
export interface CreateUploadJobResponse {
}
export type CustomAttributes = Record<string, unknown>;
export type DataFormat = never;
export type DataPullMode = never;
export interface DateDimension {
}
export type DateDimensionType = never;
export type DatetimeTypeFieldName = string;

export type DateValues = Array<unknown>;
export interface DeleteCalculatedAttributeDefinitionRequest {
}
export interface DeleteCalculatedAttributeDefinitionResponse {
}
export interface DeleteDomainLayoutRequest {
}
export interface DeleteDomainLayoutResponse {
}
export interface DeleteDomainRequest {
}
export interface DeleteDomainResponse {
}
export interface DeleteEventStreamRequest {
}
export interface DeleteEventStreamResponse {
}
export interface DeleteEventTriggerRequest {
}
export interface DeleteEventTriggerResponse {
}
export interface DeleteIntegrationRequest {
}
export interface DeleteIntegrationResponse {
}
export interface DeleteProfileKeyRequest {
}
export interface DeleteProfileKeyResponse {
}
export interface DeleteProfileObjectRequest {
}
export interface DeleteProfileObjectResponse {
}
export interface DeleteProfileObjectTypeRequest {
}
export interface DeleteProfileObjectTypeResponse {
}
export interface DeleteProfileRequest {
}
export interface DeleteProfileResponse {
}
export interface DeleteSegmentDefinitionRequest {
}
export interface DeleteSegmentDefinitionResponse {
}
export interface DeleteWorkflowRequest {
}
export interface DeleteWorkflowResponse {
}
export type DestinationField = string;

export interface DestinationSummary {
}
export interface DetectedProfileObjectType {
}
export type DetectedProfileObjectTypes = Array<unknown>;
export interface DetectProfileObjectTypeRequest {
}
export interface DetectProfileObjectTypeResponse {
}
export type Dimension = never;
export type DimensionList = Array<unknown>;
export type displayName = string;

export type DomainList = Array<unknown>;
export interface DomainStats {
}
export type Double = number;

export type Double0To1 = number;

export type EmailList = Array<unknown>;
export type encryptionKey = string;

export type End = number;

export type EstimateStatus = never;
export interface EventStreamDestinationDetails {
}
export type EventStreamDestinationStatus = never;
export type EventStreamState = never;
export interface EventStreamSummary {
}
export type EventStreamSummaryList = Array<unknown>;
export interface EventTriggerCondition {
}
export type EventTriggerConditions = Array<unknown>;
export interface EventTriggerDimension {
}
export type EventTriggerDimensions = Array<unknown>;
export interface EventTriggerLimits {
}
export type EventTriggerLogicalOperator = never;
export type EventTriggerNames = Array<unknown>;
export interface EventTriggerSummaryItem {
}
export type EventTriggerSummaryList = Array<unknown>;
export type EventTriggerValues = Array<unknown>;
export type expirationDaysInteger = number;

export interface ExportingConfig {
}
export interface ExportingLocation {
}
export interface ExtraLengthValueProfileDimension {
}
export type ExtraLengthValues = Array<unknown>;
export type Failures = Array<unknown>;
export type FieldContentType = never;
export type FieldMap = Record<string, unknown>;
export type fieldName = string;

export type FieldNameList = Array<unknown>;
export interface FieldSourceProfileIds {
}
export interface Filter {
}
export interface FilterAttributeDimension {
}
export interface FilterDimension {
}
export type FilterDimensionList = Array<unknown>;
export type FilterDimensionType = never;
export interface FilterGroup {
}
export interface FlowDefinition {
}
export type FlowDescription = string;

export type FlowName = string;

export interface FoundByKeyValue {
}
export type foundByList = Array<unknown>;
export type Gender = never;
export interface GetAutoMergingPreviewRequest {
}
export interface GetAutoMergingPreviewResponse {
}
export interface GetCalculatedAttributeDefinitionRequest {
}
export interface GetCalculatedAttributeDefinitionResponse {
}
export interface GetCalculatedAttributeForProfileRequest {
}
export interface GetCalculatedAttributeForProfileResponse {
}
export interface GetDomainLayoutRequest {
}
export interface GetDomainLayoutResponse {
}
export interface GetDomainRequest {
}
export interface GetDomainResponse {
}
export interface GetEventStreamRequest {
}
export interface GetEventStreamResponse {
}
export interface GetEventTriggerRequest {
}
export interface GetEventTriggerResponse {
}
export interface GetIdentityResolutionJobRequest {
}
export interface GetIdentityResolutionJobResponse {
}
export interface GetIntegrationRequest {
}
export interface GetIntegrationResponse {
}
export interface GetMatchesRequest {
}
export interface GetMatchesResponse {
}
export interface GetProfileObjectTypeRequest {
}
export interface GetProfileObjectTypeResponse {
}
export interface GetProfileObjectTypeTemplateRequest {
}
export interface GetProfileObjectTypeTemplateResponse {
}
export interface GetSegmentDefinitionRequest {
}
export interface GetSegmentDefinitionResponse {
}
export interface GetSegmentEstimateRequest {
}
export interface GetSegmentEstimateResponse {
}
export type GetSegmentMembershipMessage = string;

export interface GetSegmentMembershipRequest {
}
export interface GetSegmentMembershipResponse {
}
export type GetSegmentMembershipStatus = number;

export interface GetSegmentSnapshotRequest {
}
export interface GetSegmentSnapshotResponse {
}
export interface GetSimilarProfilesRequest {
}
export interface GetSimilarProfilesResponse {
}
export interface GetUploadJobPathRequest {
}
export interface GetUploadJobPathResponse {
}
export interface GetUploadJobRequest {
}
export interface GetUploadJobResponse {
}
export interface GetWorkflowRequest {
}
export interface GetWorkflowResponse {
}
export interface GetWorkflowStepsRequest {
}
export interface GetWorkflowStepsResponse {
}
export interface Group {
}
export type GroupList = Array<unknown>;
export interface IdentityResolutionJob {
}
export type IdentityResolutionJobsList = Array<unknown>;
export type IdentityResolutionJobStatus = never;
export type Include = never;
export type IncludeOptions = never;
export interface IncrementalPullConfig {
}
export interface IntegrationConfig {
}
export type IntegrationList = Array<unknown>;
export interface InternalServerException {
}
export interface JobSchedule {
}
export type JobScheduleDayOfTheWeek = never;
export type JobScheduleTime = string;

export interface JobStats {
}
export type KeyMap = Record<string, unknown>;
export type KmsArn = string;

export interface LayoutItem {
}
export type LayoutList = Array<unknown>;
export type LayoutType = never;
export interface ListAccountIntegrationsRequest {
}
export interface ListAccountIntegrationsResponse {
}
export interface ListCalculatedAttributeDefinitionItem {
}
export interface ListCalculatedAttributeDefinitionsRequest {
}
export interface ListCalculatedAttributeDefinitionsResponse {
}
export interface ListCalculatedAttributeForProfileItem {
}
export interface ListCalculatedAttributesForProfileRequest {
}
export interface ListCalculatedAttributesForProfileResponse {
}
export interface ListDomainItem {
}
export interface ListDomainLayoutsRequest {
}
export interface ListDomainLayoutsResponse {
}
export interface ListDomainsRequest {
}
export interface ListDomainsResponse {
}
export interface ListEventStreamsRequest {
}
export interface ListEventStreamsResponse {
}
export interface ListEventTriggersRequest {
}
export interface ListEventTriggersResponse {
}
export interface ListIdentityResolutionJobsRequest {
}
export interface ListIdentityResolutionJobsResponse {
}
export interface ListIntegrationItem {
}
export interface ListIntegrationsRequest {
}
export interface ListIntegrationsResponse {
}
export interface ListObjectTypeAttributeItem {
}
export type ListObjectTypeAttributesList = Array<unknown>;
export interface ListObjectTypeAttributesRequest {
}
export interface ListObjectTypeAttributesResponse {
}
export interface ListProfileObjectsItem {
}
export interface ListProfileObjectsRequest {
}
export interface ListProfileObjectsResponse {
}
export interface ListProfileObjectTypeItem {
}
export interface ListProfileObjectTypesRequest {
}
export interface ListProfileObjectTypesResponse {
}
export interface ListProfileObjectTypeTemplateItem {
}
export interface ListProfileObjectTypeTemplatesRequest {
}
export interface ListProfileObjectTypeTemplatesResponse {
}
export interface ListRuleBasedMatchesRequest {
}
export interface ListRuleBasedMatchesResponse {
}
export interface ListSegmentDefinitionsRequest {
}
export interface ListSegmentDefinitionsResponse {
}
export interface ListTagsForResourceRequest {
}
export interface ListTagsForResourceResponse {
}
export interface ListUploadJobsRequest {
}
export interface ListUploadJobsResponse {
}
export interface ListWorkflowsItem {
}
export interface ListWorkflowsRequest {
}
export interface ListWorkflowsResponse {
}
export type logicalOperator = never;
export type long = number;

export type MarketoConnectorOperator = never;
export interface MarketoSourceProperties {
}
export type MatchesList = Array<unknown>;
export type matchesNumber = number;

export type MatchIdList = Array<unknown>;
export type MatchingAttributes = Array<unknown>;
export type MatchingAttributesList = Array<unknown>;
export interface MatchingRequest {
}
export interface MatchingResponse {
}
export interface MatchingRule {
}
export type MatchingRuleAttributeList = Array<unknown>;
export type MatchingRules = Array<unknown>;
export interface MatchItem {
}
export type MatchType = never;
export type MaxAllowedRuleLevelForMatching = number;

export type MaxAllowedRuleLevelForMerging = number;

export type maxSize100 = number;

export type maxSize1000 = number;

export type maxSize24 = number;

export type MaxSize500 = number;

export interface MergeProfilesRequest {
}
export interface MergeProfilesResponse {
}
export type message = string;

export type minSize0 = number;

export type minSize1 = number;

export type name = string;

export type Object = string;

export interface ObjectAttribute {
}
export type ObjectAttributes = Array<unknown>;
export type ObjectCount = number;

export interface ObjectFilter {
}
export type Objects = Array<unknown>;
export interface ObjectTypeField {
}
export interface ObjectTypeKey {
}
export type ObjectTypeKeyList = Array<unknown>;
export type ObjectTypeNames = Record<string, unknown>;
export type Operator = never;
export type OperatorPropertiesKeys = never;
export type optionalBoolean = boolean;

export type optionalLong = number;

export type PartyType = never;
export type percentageInteger = number;

export interface Period {
}
export type Periods = Array<unknown>;
export type PeriodUnit = never;
export type PhoneNumberList = Array<unknown>;
export interface Profile {
}
export interface ProfileAttributes {
}
export interface ProfileAttributeValuesRequest {
}
export interface ProfileAttributeValuesResponse {
}
export interface ProfileDimension {
}
export type ProfileId = string;

export type ProfileIdList = Array<unknown>;
export type ProfileIds = Array<unknown>;
export type ProfileIdToBeMergedList = Array<unknown>;
export type ProfileList = Array<unknown>;
export type ProfileObjectList = Array<unknown>;
export type ProfileObjectTypeList = Array<unknown>;
export type ProfileObjectTypeTemplateList = Array<unknown>;
export interface ProfileQueryFailures {
}
export interface ProfileQueryResult {
}
export type Profiles = Array<unknown>;
export type Property = string;

export interface PutIntegrationRequest {
}
export interface PutIntegrationResponse {
}
export interface PutProfileObjectRequest {
}
export interface PutProfileObjectResponse {
}
export interface PutProfileObjectTypeRequest {
}
export interface PutProfileObjectTypeResponse {
}
export type QueryResult = never;
export interface Range {
}
export interface RangeOverride {
}
export type RangeUnit = never;
export interface Readiness {
}
export type ReadinessStatus = never;
export type requestValueList = Array<unknown>;
export interface ResourceNotFoundException {
}
export interface ResultsSummary {
}
export type RoleArn = string;

export interface RuleBasedMatchingRequest {
}
export interface RuleBasedMatchingResponse {
}
export type RuleBasedMatchingStatus = never;
export type RuleLevel = number;

export type s3BucketName = string;

export type S3ConnectorOperator = never;
export interface S3ExportingConfig {
}
export interface S3ExportingLocation {
}
export type s3KeyName = string;

export type s3KeyNameCustomerOutputConfig = string;

export interface S3SourceProperties {
}
export type SalesforceConnectorOperator = never;
export interface SalesforceSourceProperties {
}
export interface ScheduledTriggerProperties {
}
export type ScheduleExpression = string;

export type ScheduleOffset = number;

export interface SearchProfilesRequest {
}
export interface SearchProfilesResponse {
}
export type SegmentDefinitionArn = string;

export interface SegmentDefinitionItem {
}
export type SegmentDefinitionsList = Array<unknown>;
export interface SegmentGroup {
}
export type SegmentGroupList = Array<unknown>;
export interface SegmentGroupStructure {
}
export type SegmentSnapshotStatus = never;
export type sensitiveString0To1000 = string;

export type sensitiveString0To255 = string;

export type sensitiveString1To1000 = string;

export type sensitiveString1To2000000 = string;

export type sensitiveString1To255 = string;

export type sensitiveText = string;

export type ServiceNowConnectorOperator = never;
export interface ServiceNowSourceProperties {
}
export interface SourceConnectorProperties {
}
export type SourceConnectorType = never;
export type SourceFields = Array<unknown>;
export interface SourceFlowConfig {
}
export interface SourceSegment {
}
export type SourceSegmentList = Array<unknown>;
export type sqsQueueUrl = string;

export type StandardIdentifier = never;
export type StandardIdentifierList = Array<unknown>;
export type Start = number;

export interface StartUploadJobRequest {
}
export interface StartUploadJobResponse {
}
export type Statistic = never;
export type Status = never;
export type StatusCode = number;

export type StatusReason = never;
export interface StopUploadJobRequest {
}
export interface StopUploadJobResponse {
}
export type string0To255 = string;

export type string1To1000 = string;

export type string1To255 = string;

export type StringDimensionType = never;
export type stringifiedJson = string;

export type stringTo2048 = string;

export type TagArn = string;

export type TagKey = string;

export type TagKeyList = Array<unknown>;
export type TagMap = Record<string, unknown>;
export interface TagResourceRequest {
}
export interface TagResourceResponse {
}
export type TagValue = string;

export interface Task {
}
export type TaskPropertiesMap = Record<string, unknown>;
export type Tasks = Array<unknown>;
export type TaskType = never;
export type text = string;

export interface Threshold {
}
export interface ThrottlingException {
}
export type timestamp = Date | string;

export type Timezone = string;

export type token = string;

export interface TriggerConfig {
}
export interface TriggerProperties {
}
export type TriggerType = never;
export type Type = never;
export type typeName = string;

export interface UntagResourceRequest {
}
export interface UntagResourceResponse {
}
export interface UpdateAddress {
}
export type UpdateAttributes = Record<string, unknown>;
export interface UpdateCalculatedAttributeDefinitionRequest {
}
export interface UpdateCalculatedAttributeDefinitionResponse {
}
export interface UpdateDomainLayoutRequest {
}
export interface UpdateDomainLayoutResponse {
}
export interface UpdateDomainRequest {
}
export interface UpdateDomainResponse {
}
export interface UpdateEventTriggerRequest {
}
export interface UpdateEventTriggerResponse {
}
export interface UpdateProfileRequest {
}
export interface UpdateProfileResponse {
}
export interface UploadJobItem {
}
export type UploadJobsList = Array<unknown>;
export type UploadJobStatus = never;
export type uuid = string;

export type Value = number;

export type ValueList = Array<unknown>;
export interface ValueRange {
}
export type ValueRangeEnd = number;

export type ValueRangeStart = number;

export type Values = Array<unknown>;
export interface WorkflowAttributes {
}
export type WorkflowList = Array<unknown>;
export interface WorkflowMetrics {
}
export interface WorkflowStepItem {
}
export type WorkflowStepsList = Array<unknown>;
export type WorkflowType = never;
export type ZendeskConnectorOperator = never;
export interface ZendeskSourceProperties {
}
export declare namespace AddProfileKey {
  export type Input = AddProfileKeyRequest;
  export type Output = {};
  export type Error =
    | AccessDeniedException
    | BadRequestException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError;
}

export declare namespace BatchGetCalculatedAttributeForProfile {
  export type Input = BatchGetCalculatedAttributeForProfileRequest;
  export type Output = {};
  export type Error =
    | AccessDeniedException
    | BadRequestException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError;
}

export declare namespace BatchGetProfile {
  export type Input = BatchGetProfileRequest;
  export type Output = {};
  export type Error =
    | AccessDeniedException
    | BadRequestException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError;
}

export declare namespace CreateCalculatedAttributeDefinition {
  export type Input = CreateCalculatedAttributeDefinitionRequest;
  export type Output = {};
  export type Error =
    | AccessDeniedException
    | BadRequestException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError;
}

export declare namespace CreateDomain {
  export type Input = CreateDomainRequest;
  export type Output = {};
  export type Error =
    | AccessDeniedException
    | BadRequestException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError;
}

export declare namespace CreateDomainLayout {
  export type Input = CreateDomainLayoutRequest;
  export type Output = {};
  export type Error =
    | AccessDeniedException
    | BadRequestException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError;
}

export declare namespace CreateEventStream {
  export type Input = CreateEventStreamRequest;
  export type Output = {};
  export type Error =
    | AccessDeniedException
    | BadRequestException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError;
}

export declare namespace CreateEventTrigger {
  export type Input = CreateEventTriggerRequest;
  export type Output = {};
  export type Error =
    | AccessDeniedException
    | BadRequestException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError;
}

export declare namespace CreateIntegrationWorkflow {
  export type Input = CreateIntegrationWorkflowRequest;
  export type Output = {};
  export type Error =
    | AccessDeniedException
    | BadRequestException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError;
}

export declare namespace CreateProfile {
  export type Input = CreateProfileRequest;
  export type Output = {};
  export type Error =
    | AccessDeniedException
    | BadRequestException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError;
}

export declare namespace CreateSegmentDefinition {
  export type Input = CreateSegmentDefinitionRequest;
  export type Output = {};
  export type Error =
    | AccessDeniedException
    | BadRequestException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError;
}

export declare namespace CreateSegmentEstimate {
  export type Input = CreateSegmentEstimateRequest;
  export type Output = {};
  export type Error =
    | AccessDeniedException
    | BadRequestException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError;
}

export declare namespace CreateSegmentSnapshot {
  export type Input = CreateSegmentSnapshotRequest;
  export type Output = {};
  export type Error =
    | AccessDeniedException
    | BadRequestException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError;
}

export declare namespace CreateUploadJob {
  export type Input = CreateUploadJobRequest;
  export type Output = {};
  export type Error =
    | AccessDeniedException
    | BadRequestException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError;
}

export declare namespace DeleteCalculatedAttributeDefinition {
  export type Input = DeleteCalculatedAttributeDefinitionRequest;
  export type Output = {};
  export type Error =
    | AccessDeniedException
    | BadRequestException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError;
}

export declare namespace DeleteDomain {
  export type Input = DeleteDomainRequest;
  export type Output = {};
  export type Error =
    | AccessDeniedException
    | BadRequestException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError;
}

export declare namespace DeleteDomainLayout {
  export type Input = DeleteDomainLayoutRequest;
  export type Output = {};
  export type Error =
    | AccessDeniedException
    | BadRequestException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError;
}

export declare namespace DeleteEventStream {
  export type Input = DeleteEventStreamRequest;
  export type Output = {};
  export type Error =
    | AccessDeniedException
    | BadRequestException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError;
}

export declare namespace DeleteEventTrigger {
  export type Input = DeleteEventTriggerRequest;
  export type Output = {};
  export type Error =
    | AccessDeniedException
    | BadRequestException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError;
}

export declare namespace DeleteIntegration {
  export type Input = DeleteIntegrationRequest;
  export type Output = {};
  export type Error =
    | AccessDeniedException
    | BadRequestException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError;
}

export declare namespace DeleteProfile {
  export type Input = DeleteProfileRequest;
  export type Output = {};
  export type Error =
    | AccessDeniedException
    | BadRequestException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError;
}

export declare namespace DeleteProfileKey {
  export type Input = DeleteProfileKeyRequest;
  export type Output = {};
  export type Error =
    | AccessDeniedException
    | BadRequestException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError;
}

export declare namespace DeleteProfileObject {
  export type Input = DeleteProfileObjectRequest;
  export type Output = {};
  export type Error =
    | AccessDeniedException
    | BadRequestException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError;
}

export declare namespace DeleteProfileObjectType {
  export type Input = DeleteProfileObjectTypeRequest;
  export type Output = {};
  export type Error =
    | AccessDeniedException
    | BadRequestException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError;
}

export declare namespace DeleteSegmentDefinition {
  export type Input = DeleteSegmentDefinitionRequest;
  export type Output = {};
  export type Error =
    | AccessDeniedException
    | BadRequestException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError;
}

export declare namespace DeleteWorkflow {
  export type Input = DeleteWorkflowRequest;
  export type Output = {};
  export type Error =
    | AccessDeniedException
    | BadRequestException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError;
}

export declare namespace DetectProfileObjectType {
  export type Input = DetectProfileObjectTypeRequest;
  export type Output = {};
  export type Error =
    | AccessDeniedException
    | BadRequestException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError;
}

export declare namespace GetAutoMergingPreview {
  export type Input = GetAutoMergingPreviewRequest;
  export type Output = {};
  export type Error =
    | AccessDeniedException
    | BadRequestException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError;
}

export declare namespace GetCalculatedAttributeDefinition {
  export type Input = GetCalculatedAttributeDefinitionRequest;
  export type Output = {};
  export type Error =
    | AccessDeniedException
    | BadRequestException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError;
}

export declare namespace GetCalculatedAttributeForProfile {
  export type Input = GetCalculatedAttributeForProfileRequest;
  export type Output = {};
  export type Error =
    | AccessDeniedException
    | BadRequestException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError;
}

export declare namespace GetDomain {
  export type Input = GetDomainRequest;
  export type Output = {};
  export type Error =
    | AccessDeniedException
    | BadRequestException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError;
}

export declare namespace GetDomainLayout {
  export type Input = GetDomainLayoutRequest;
  export type Output = {};
  export type Error =
    | AccessDeniedException
    | BadRequestException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError;
}

export declare namespace GetEventStream {
  export type Input = GetEventStreamRequest;
  export type Output = {};
  export type Error =
    | AccessDeniedException
    | BadRequestException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError;
}

export declare namespace GetEventTrigger {
  export type Input = GetEventTriggerRequest;
  export type Output = {};
  export type Error =
    | AccessDeniedException
    | BadRequestException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError;
}

export declare namespace GetIdentityResolutionJob {
  export type Input = GetIdentityResolutionJobRequest;
  export type Output = {};
  export type Error =
    | AccessDeniedException
    | BadRequestException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError;
}

export declare namespace GetIntegration {
  export type Input = GetIntegrationRequest;
  export type Output = {};
  export type Error =
    | AccessDeniedException
    | BadRequestException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError;
}

export declare namespace GetMatches {
  export type Input = GetMatchesRequest;
  export type Output = {};
  export type Error =
    | AccessDeniedException
    | BadRequestException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError;
}

export declare namespace GetProfileObjectType {
  export type Input = GetProfileObjectTypeRequest;
  export type Output = {};
  export type Error =
    | AccessDeniedException
    | BadRequestException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError;
}

export declare namespace GetProfileObjectTypeTemplate {
  export type Input = GetProfileObjectTypeTemplateRequest;
  export type Output = {};
  export type Error =
    | AccessDeniedException
    | BadRequestException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError;
}

export declare namespace GetSegmentDefinition {
  export type Input = GetSegmentDefinitionRequest;
  export type Output = {};
  export type Error =
    | AccessDeniedException
    | BadRequestException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError;
}

export declare namespace GetSegmentEstimate {
  export type Input = GetSegmentEstimateRequest;
  export type Output = {};
  export type Error =
    | AccessDeniedException
    | BadRequestException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError;
}

export declare namespace GetSegmentMembership {
  export type Input = GetSegmentMembershipRequest;
  export type Output = {};
  export type Error =
    | AccessDeniedException
    | BadRequestException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError;
}

export declare namespace GetSegmentSnapshot {
  export type Input = GetSegmentSnapshotRequest;
  export type Output = {};
  export type Error =
    | AccessDeniedException
    | BadRequestException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError;
}

export declare namespace GetSimilarProfiles {
  export type Input = GetSimilarProfilesRequest;
  export type Output = {};
  export type Error =
    | AccessDeniedException
    | BadRequestException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError;
}

export declare namespace GetUploadJob {
  export type Input = GetUploadJobRequest;
  export type Output = {};
  export type Error =
    | AccessDeniedException
    | BadRequestException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError;
}

export declare namespace GetUploadJobPath {
  export type Input = GetUploadJobPathRequest;
  export type Output = {};
  export type Error =
    | AccessDeniedException
    | BadRequestException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError;
}

export declare namespace GetWorkflow {
  export type Input = GetWorkflowRequest;
  export type Output = {};
  export type Error =
    | AccessDeniedException
    | BadRequestException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError;
}

export declare namespace GetWorkflowSteps {
  export type Input = GetWorkflowStepsRequest;
  export type Output = {};
  export type Error =
    | AccessDeniedException
    | BadRequestException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError;
}

export declare namespace ListAccountIntegrations {
  export type Input = ListAccountIntegrationsRequest;
  export type Output = {};
  export type Error =
    | AccessDeniedException
    | BadRequestException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError;
}

export declare namespace ListCalculatedAttributeDefinitions {
  export type Input = ListCalculatedAttributeDefinitionsRequest;
  export type Output = {};
  export type Error =
    | AccessDeniedException
    | BadRequestException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError;
}

export declare namespace ListCalculatedAttributesForProfile {
  export type Input = ListCalculatedAttributesForProfileRequest;
  export type Output = {};
  export type Error =
    | AccessDeniedException
    | BadRequestException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError;
}

export declare namespace ListDomainLayouts {
  export type Input = ListDomainLayoutsRequest;
  export type Output = {};
  export type Error =
    | AccessDeniedException
    | BadRequestException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError;
}

export declare namespace ListDomains {
  export type Input = ListDomainsRequest;
  export type Output = {};
  export type Error =
    | AccessDeniedException
    | BadRequestException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError;
}

export declare namespace ListEventStreams {
  export type Input = ListEventStreamsRequest;
  export type Output = {};
  export type Error =
    | AccessDeniedException
    | BadRequestException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError;
}

export declare namespace ListEventTriggers {
  export type Input = ListEventTriggersRequest;
  export type Output = {};
  export type Error =
    | AccessDeniedException
    | BadRequestException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError;
}

export declare namespace ListIdentityResolutionJobs {
  export type Input = ListIdentityResolutionJobsRequest;
  export type Output = {};
  export type Error =
    | AccessDeniedException
    | BadRequestException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError;
}

export declare namespace ListIntegrations {
  export type Input = ListIntegrationsRequest;
  export type Output = {};
  export type Error =
    | AccessDeniedException
    | BadRequestException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError;
}

export declare namespace ListObjectTypeAttributes {
  export type Input = ListObjectTypeAttributesRequest;
  export type Output = {};
  export type Error =
    | AccessDeniedException
    | BadRequestException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError;
}

export declare namespace ListProfileAttributeValues {
  export type Input = ProfileAttributeValuesRequest;
  export type Output = {};
  export type Error =
    | AccessDeniedException
    | BadRequestException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError;
}

export declare namespace ListProfileObjectTypeTemplates {
  export type Input = ListProfileObjectTypeTemplatesRequest;
  export type Output = {};
  export type Error =
    | AccessDeniedException
    | BadRequestException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError;
}

export declare namespace ListProfileObjectTypes {
  export type Input = ListProfileObjectTypesRequest;
  export type Output = {};
  export type Error =
    | AccessDeniedException
    | BadRequestException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError;
}

export declare namespace ListProfileObjects {
  export type Input = ListProfileObjectsRequest;
  export type Output = {};
  export type Error =
    | AccessDeniedException
    | BadRequestException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError;
}

export declare namespace ListRuleBasedMatches {
  export type Input = ListRuleBasedMatchesRequest;
  export type Output = {};
  export type Error =
    | AccessDeniedException
    | BadRequestException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError;
}

export declare namespace ListSegmentDefinitions {
  export type Input = ListSegmentDefinitionsRequest;
  export type Output = {};
  export type Error =
    | AccessDeniedException
    | BadRequestException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError;
}

export declare namespace ListTagsForResource {
  export type Input = ListTagsForResourceRequest;
  export type Output = {};
  export type Error =
    | BadRequestException
    | InternalServerException
    | ResourceNotFoundException
    | CommonAwsError;
}

export declare namespace ListUploadJobs {
  export type Input = ListUploadJobsRequest;
  export type Output = {};
  export type Error =
    | AccessDeniedException
    | BadRequestException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError;
}

export declare namespace ListWorkflows {
  export type Input = ListWorkflowsRequest;
  export type Output = {};
  export type Error =
    | AccessDeniedException
    | BadRequestException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError;
}

export declare namespace MergeProfiles {
  export type Input = MergeProfilesRequest;
  export type Output = {};
  export type Error =
    | BadRequestException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError;
}

export declare namespace PutIntegration {
  export type Input = PutIntegrationRequest;
  export type Output = {};
  export type Error =
    | AccessDeniedException
    | BadRequestException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError;
}

export declare namespace PutProfileObject {
  export type Input = PutProfileObjectRequest;
  export type Output = {};
  export type Error =
    | AccessDeniedException
    | BadRequestException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError;
}

export declare namespace PutProfileObjectType {
  export type Input = PutProfileObjectTypeRequest;
  export type Output = {};
  export type Error =
    | AccessDeniedException
    | BadRequestException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError;
}

export declare namespace SearchProfiles {
  export type Input = SearchProfilesRequest;
  export type Output = {};
  export type Error =
    | AccessDeniedException
    | BadRequestException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError;
}

export declare namespace StartUploadJob {
  export type Input = StartUploadJobRequest;
  export type Output = {};
  export type Error =
    | AccessDeniedException
    | BadRequestException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError;
}

export declare namespace StopUploadJob {
  export type Input = StopUploadJobRequest;
  export type Output = {};
  export type Error =
    | AccessDeniedException
    | BadRequestException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError;
}

export declare namespace TagResource {
  export type Input = TagResourceRequest;
  export type Output = {};
  export type Error =
    | BadRequestException
    | InternalServerException
    | ResourceNotFoundException
    | CommonAwsError;
}

export declare namespace UntagResource {
  export type Input = UntagResourceRequest;
  export type Output = {};
  export type Error =
    | BadRequestException
    | InternalServerException
    | ResourceNotFoundException
    | CommonAwsError;
}

export declare namespace UpdateCalculatedAttributeDefinition {
  export type Input = UpdateCalculatedAttributeDefinitionRequest;
  export type Output = {};
  export type Error =
    | AccessDeniedException
    | BadRequestException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError;
}

export declare namespace UpdateDomain {
  export type Input = UpdateDomainRequest;
  export type Output = {};
  export type Error =
    | AccessDeniedException
    | BadRequestException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError;
}

export declare namespace UpdateDomainLayout {
  export type Input = UpdateDomainLayoutRequest;
  export type Output = {};
  export type Error =
    | AccessDeniedException
    | BadRequestException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError;
}

export declare namespace UpdateEventTrigger {
  export type Input = UpdateEventTriggerRequest;
  export type Output = {};
  export type Error =
    | AccessDeniedException
    | BadRequestException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError;
}

export declare namespace UpdateProfile {
  export type Input = UpdateProfileRequest;
  export type Output = {};
  export type Error =
    | AccessDeniedException
    | BadRequestException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError;
}

