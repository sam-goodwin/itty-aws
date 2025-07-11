import type { Effect, Data as EffectData } from "effect";
import type { CommonAwsError } from "../error.ts";

export interface CustomerProfiles_20200815 {
  addProfileKey(
    input: AddProfileKeyRequest,
  ): Effect.Effect<
    AddProfileKeyResponse,
    | AccessDeniedException
    | BadRequestException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError
  >;
  batchGetCalculatedAttributeForProfile(
    input: BatchGetCalculatedAttributeForProfileRequest,
  ): Effect.Effect<
    BatchGetCalculatedAttributeForProfileResponse,
    | AccessDeniedException
    | BadRequestException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError
  >;
  batchGetProfile(
    input: BatchGetProfileRequest,
  ): Effect.Effect<
    BatchGetProfileResponse,
    | AccessDeniedException
    | BadRequestException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError
  >;
  createCalculatedAttributeDefinition(
    input: CreateCalculatedAttributeDefinitionRequest,
  ): Effect.Effect<
    CreateCalculatedAttributeDefinitionResponse,
    | AccessDeniedException
    | BadRequestException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError
  >;
  createDomain(
    input: CreateDomainRequest,
  ): Effect.Effect<
    CreateDomainResponse,
    | AccessDeniedException
    | BadRequestException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError
  >;
  createDomainLayout(
    input: CreateDomainLayoutRequest,
  ): Effect.Effect<
    CreateDomainLayoutResponse,
    | AccessDeniedException
    | BadRequestException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError
  >;
  createEventStream(
    input: CreateEventStreamRequest,
  ): Effect.Effect<
    CreateEventStreamResponse,
    | AccessDeniedException
    | BadRequestException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError
  >;
  createEventTrigger(
    input: CreateEventTriggerRequest,
  ): Effect.Effect<
    CreateEventTriggerResponse,
    | AccessDeniedException
    | BadRequestException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError
  >;
  createIntegrationWorkflow(
    input: CreateIntegrationWorkflowRequest,
  ): Effect.Effect<
    CreateIntegrationWorkflowResponse,
    | AccessDeniedException
    | BadRequestException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError
  >;
  createProfile(
    input: CreateProfileRequest,
  ): Effect.Effect<
    CreateProfileResponse,
    | AccessDeniedException
    | BadRequestException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError
  >;
  createSegmentDefinition(
    input: CreateSegmentDefinitionRequest,
  ): Effect.Effect<
    CreateSegmentDefinitionResponse,
    | AccessDeniedException
    | BadRequestException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError
  >;
  createSegmentEstimate(
    input: CreateSegmentEstimateRequest,
  ): Effect.Effect<
    CreateSegmentEstimateResponse,
    | AccessDeniedException
    | BadRequestException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError
  >;
  createSegmentSnapshot(
    input: CreateSegmentSnapshotRequest,
  ): Effect.Effect<
    CreateSegmentSnapshotResponse,
    | AccessDeniedException
    | BadRequestException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError
  >;
  createUploadJob(
    input: CreateUploadJobRequest,
  ): Effect.Effect<
    CreateUploadJobResponse,
    | AccessDeniedException
    | BadRequestException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError
  >;
  deleteCalculatedAttributeDefinition(
    input: DeleteCalculatedAttributeDefinitionRequest,
  ): Effect.Effect<
    DeleteCalculatedAttributeDefinitionResponse,
    | AccessDeniedException
    | BadRequestException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError
  >;
  deleteDomain(
    input: DeleteDomainRequest,
  ): Effect.Effect<
    DeleteDomainResponse,
    | AccessDeniedException
    | BadRequestException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError
  >;
  deleteDomainLayout(
    input: DeleteDomainLayoutRequest,
  ): Effect.Effect<
    DeleteDomainLayoutResponse,
    | AccessDeniedException
    | BadRequestException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError
  >;
  deleteEventStream(
    input: DeleteEventStreamRequest,
  ): Effect.Effect<
    DeleteEventStreamResponse,
    | AccessDeniedException
    | BadRequestException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError
  >;
  deleteEventTrigger(
    input: DeleteEventTriggerRequest,
  ): Effect.Effect<
    DeleteEventTriggerResponse,
    | AccessDeniedException
    | BadRequestException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError
  >;
  deleteIntegration(
    input: DeleteIntegrationRequest,
  ): Effect.Effect<
    DeleteIntegrationResponse,
    | AccessDeniedException
    | BadRequestException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError
  >;
  deleteProfile(
    input: DeleteProfileRequest,
  ): Effect.Effect<
    DeleteProfileResponse,
    | AccessDeniedException
    | BadRequestException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError
  >;
  deleteProfileKey(
    input: DeleteProfileKeyRequest,
  ): Effect.Effect<
    DeleteProfileKeyResponse,
    | AccessDeniedException
    | BadRequestException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError
  >;
  deleteProfileObject(
    input: DeleteProfileObjectRequest,
  ): Effect.Effect<
    DeleteProfileObjectResponse,
    | AccessDeniedException
    | BadRequestException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError
  >;
  deleteProfileObjectType(
    input: DeleteProfileObjectTypeRequest,
  ): Effect.Effect<
    DeleteProfileObjectTypeResponse,
    | AccessDeniedException
    | BadRequestException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError
  >;
  deleteSegmentDefinition(
    input: DeleteSegmentDefinitionRequest,
  ): Effect.Effect<
    DeleteSegmentDefinitionResponse,
    | AccessDeniedException
    | BadRequestException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError
  >;
  deleteWorkflow(
    input: DeleteWorkflowRequest,
  ): Effect.Effect<
    DeleteWorkflowResponse,
    | AccessDeniedException
    | BadRequestException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError
  >;
  detectProfileObjectType(
    input: DetectProfileObjectTypeRequest,
  ): Effect.Effect<
    DetectProfileObjectTypeResponse,
    | AccessDeniedException
    | BadRequestException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError
  >;
  getAutoMergingPreview(
    input: GetAutoMergingPreviewRequest,
  ): Effect.Effect<
    GetAutoMergingPreviewResponse,
    | AccessDeniedException
    | BadRequestException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError
  >;
  getCalculatedAttributeDefinition(
    input: GetCalculatedAttributeDefinitionRequest,
  ): Effect.Effect<
    GetCalculatedAttributeDefinitionResponse,
    | AccessDeniedException
    | BadRequestException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError
  >;
  getCalculatedAttributeForProfile(
    input: GetCalculatedAttributeForProfileRequest,
  ): Effect.Effect<
    GetCalculatedAttributeForProfileResponse,
    | AccessDeniedException
    | BadRequestException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError
  >;
  getDomain(
    input: GetDomainRequest,
  ): Effect.Effect<
    GetDomainResponse,
    | AccessDeniedException
    | BadRequestException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError
  >;
  getDomainLayout(
    input: GetDomainLayoutRequest,
  ): Effect.Effect<
    GetDomainLayoutResponse,
    | AccessDeniedException
    | BadRequestException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError
  >;
  getEventStream(
    input: GetEventStreamRequest,
  ): Effect.Effect<
    GetEventStreamResponse,
    | AccessDeniedException
    | BadRequestException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError
  >;
  getEventTrigger(
    input: GetEventTriggerRequest,
  ): Effect.Effect<
    GetEventTriggerResponse,
    | AccessDeniedException
    | BadRequestException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError
  >;
  getIdentityResolutionJob(
    input: GetIdentityResolutionJobRequest,
  ): Effect.Effect<
    GetIdentityResolutionJobResponse,
    | AccessDeniedException
    | BadRequestException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError
  >;
  getIntegration(
    input: GetIntegrationRequest,
  ): Effect.Effect<
    GetIntegrationResponse,
    | AccessDeniedException
    | BadRequestException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError
  >;
  getMatches(
    input: GetMatchesRequest,
  ): Effect.Effect<
    GetMatchesResponse,
    | AccessDeniedException
    | BadRequestException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError
  >;
  getProfileObjectType(
    input: GetProfileObjectTypeRequest,
  ): Effect.Effect<
    GetProfileObjectTypeResponse,
    | AccessDeniedException
    | BadRequestException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError
  >;
  getProfileObjectTypeTemplate(
    input: GetProfileObjectTypeTemplateRequest,
  ): Effect.Effect<
    GetProfileObjectTypeTemplateResponse,
    | AccessDeniedException
    | BadRequestException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError
  >;
  getSegmentDefinition(
    input: GetSegmentDefinitionRequest,
  ): Effect.Effect<
    GetSegmentDefinitionResponse,
    | AccessDeniedException
    | BadRequestException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError
  >;
  getSegmentEstimate(
    input: GetSegmentEstimateRequest,
  ): Effect.Effect<
    GetSegmentEstimateResponse,
    | AccessDeniedException
    | BadRequestException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError
  >;
  getSegmentMembership(
    input: GetSegmentMembershipRequest,
  ): Effect.Effect<
    GetSegmentMembershipResponse,
    | AccessDeniedException
    | BadRequestException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError
  >;
  getSegmentSnapshot(
    input: GetSegmentSnapshotRequest,
  ): Effect.Effect<
    GetSegmentSnapshotResponse,
    | AccessDeniedException
    | BadRequestException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError
  >;
  getSimilarProfiles(
    input: GetSimilarProfilesRequest,
  ): Effect.Effect<
    GetSimilarProfilesResponse,
    | AccessDeniedException
    | BadRequestException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError
  >;
  getUploadJob(
    input: GetUploadJobRequest,
  ): Effect.Effect<
    GetUploadJobResponse,
    | AccessDeniedException
    | BadRequestException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError
  >;
  getUploadJobPath(
    input: GetUploadJobPathRequest,
  ): Effect.Effect<
    GetUploadJobPathResponse,
    | AccessDeniedException
    | BadRequestException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError
  >;
  getWorkflow(
    input: GetWorkflowRequest,
  ): Effect.Effect<
    GetWorkflowResponse,
    | AccessDeniedException
    | BadRequestException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError
  >;
  getWorkflowSteps(
    input: GetWorkflowStepsRequest,
  ): Effect.Effect<
    GetWorkflowStepsResponse,
    | AccessDeniedException
    | BadRequestException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError
  >;
  listAccountIntegrations(
    input: ListAccountIntegrationsRequest,
  ): Effect.Effect<
    ListAccountIntegrationsResponse,
    | AccessDeniedException
    | BadRequestException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError
  >;
  listCalculatedAttributeDefinitions(
    input: ListCalculatedAttributeDefinitionsRequest,
  ): Effect.Effect<
    ListCalculatedAttributeDefinitionsResponse,
    | AccessDeniedException
    | BadRequestException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError
  >;
  listCalculatedAttributesForProfile(
    input: ListCalculatedAttributesForProfileRequest,
  ): Effect.Effect<
    ListCalculatedAttributesForProfileResponse,
    | AccessDeniedException
    | BadRequestException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError
  >;
  listDomainLayouts(
    input: ListDomainLayoutsRequest,
  ): Effect.Effect<
    ListDomainLayoutsResponse,
    | AccessDeniedException
    | BadRequestException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError
  >;
  listDomains(
    input: ListDomainsRequest,
  ): Effect.Effect<
    ListDomainsResponse,
    | AccessDeniedException
    | BadRequestException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError
  >;
  listEventStreams(
    input: ListEventStreamsRequest,
  ): Effect.Effect<
    ListEventStreamsResponse,
    | AccessDeniedException
    | BadRequestException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError
  >;
  listEventTriggers(
    input: ListEventTriggersRequest,
  ): Effect.Effect<
    ListEventTriggersResponse,
    | AccessDeniedException
    | BadRequestException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError
  >;
  listIdentityResolutionJobs(
    input: ListIdentityResolutionJobsRequest,
  ): Effect.Effect<
    ListIdentityResolutionJobsResponse,
    | AccessDeniedException
    | BadRequestException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError
  >;
  listIntegrations(
    input: ListIntegrationsRequest,
  ): Effect.Effect<
    ListIntegrationsResponse,
    | AccessDeniedException
    | BadRequestException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError
  >;
  listObjectTypeAttributes(
    input: ListObjectTypeAttributesRequest,
  ): Effect.Effect<
    ListObjectTypeAttributesResponse,
    | AccessDeniedException
    | BadRequestException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError
  >;
  listProfileAttributeValues(
    input: ProfileAttributeValuesRequest,
  ): Effect.Effect<
    ProfileAttributeValuesResponse,
    | AccessDeniedException
    | BadRequestException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError
  >;
  listProfileObjects(
    input: ListProfileObjectsRequest,
  ): Effect.Effect<
    ListProfileObjectsResponse,
    | AccessDeniedException
    | BadRequestException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError
  >;
  listProfileObjectTypes(
    input: ListProfileObjectTypesRequest,
  ): Effect.Effect<
    ListProfileObjectTypesResponse,
    | AccessDeniedException
    | BadRequestException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError
  >;
  listProfileObjectTypeTemplates(
    input: ListProfileObjectTypeTemplatesRequest,
  ): Effect.Effect<
    ListProfileObjectTypeTemplatesResponse,
    | AccessDeniedException
    | BadRequestException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError
  >;
  listRuleBasedMatches(
    input: ListRuleBasedMatchesRequest,
  ): Effect.Effect<
    ListRuleBasedMatchesResponse,
    | AccessDeniedException
    | BadRequestException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError
  >;
  listSegmentDefinitions(
    input: ListSegmentDefinitionsRequest,
  ): Effect.Effect<
    ListSegmentDefinitionsResponse,
    | AccessDeniedException
    | BadRequestException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError
  >;
  listTagsForResource(
    input: ListTagsForResourceRequest,
  ): Effect.Effect<
    ListTagsForResourceResponse,
    | BadRequestException
    | InternalServerException
    | ResourceNotFoundException
    | CommonAwsError
  >;
  listUploadJobs(
    input: ListUploadJobsRequest,
  ): Effect.Effect<
    ListUploadJobsResponse,
    | AccessDeniedException
    | BadRequestException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError
  >;
  listWorkflows(
    input: ListWorkflowsRequest,
  ): Effect.Effect<
    ListWorkflowsResponse,
    | AccessDeniedException
    | BadRequestException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError
  >;
  mergeProfiles(
    input: MergeProfilesRequest,
  ): Effect.Effect<
    MergeProfilesResponse,
    | BadRequestException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError
  >;
  putIntegration(
    input: PutIntegrationRequest,
  ): Effect.Effect<
    PutIntegrationResponse,
    | AccessDeniedException
    | BadRequestException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError
  >;
  putProfileObject(
    input: PutProfileObjectRequest,
  ): Effect.Effect<
    PutProfileObjectResponse,
    | AccessDeniedException
    | BadRequestException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError
  >;
  putProfileObjectType(
    input: PutProfileObjectTypeRequest,
  ): Effect.Effect<
    PutProfileObjectTypeResponse,
    | AccessDeniedException
    | BadRequestException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError
  >;
  searchProfiles(
    input: SearchProfilesRequest,
  ): Effect.Effect<
    SearchProfilesResponse,
    | AccessDeniedException
    | BadRequestException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError
  >;
  startUploadJob(
    input: StartUploadJobRequest,
  ): Effect.Effect<
    StartUploadJobResponse,
    | AccessDeniedException
    | BadRequestException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError
  >;
  stopUploadJob(
    input: StopUploadJobRequest,
  ): Effect.Effect<
    StopUploadJobResponse,
    | AccessDeniedException
    | BadRequestException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError
  >;
  tagResource(
    input: TagResourceRequest,
  ): Effect.Effect<
    TagResourceResponse,
    | BadRequestException
    | InternalServerException
    | ResourceNotFoundException
    | CommonAwsError
  >;
  untagResource(
    input: UntagResourceRequest,
  ): Effect.Effect<
    UntagResourceResponse,
    | BadRequestException
    | InternalServerException
    | ResourceNotFoundException
    | CommonAwsError
  >;
  updateCalculatedAttributeDefinition(
    input: UpdateCalculatedAttributeDefinitionRequest,
  ): Effect.Effect<
    UpdateCalculatedAttributeDefinitionResponse,
    | AccessDeniedException
    | BadRequestException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError
  >;
  updateDomain(
    input: UpdateDomainRequest,
  ): Effect.Effect<
    UpdateDomainResponse,
    | AccessDeniedException
    | BadRequestException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError
  >;
  updateDomainLayout(
    input: UpdateDomainLayoutRequest,
  ): Effect.Effect<
    UpdateDomainLayoutResponse,
    | AccessDeniedException
    | BadRequestException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError
  >;
  updateEventTrigger(
    input: UpdateEventTriggerRequest,
  ): Effect.Effect<
    UpdateEventTriggerResponse,
    | AccessDeniedException
    | BadRequestException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError
  >;
  updateProfile(
    input: UpdateProfileRequest,
  ): Effect.Effect<
    UpdateProfileResponse,
    | AccessDeniedException
    | BadRequestException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError
  >;
}

export type CustomerProfiles = CustomerProfiles_20200815;

export declare class AccessDeniedException extends EffectData.TaggedError(
  "AccessDeniedException",
)<{
  readonly Message?: string;
}> {}
export interface AdditionalSearchKey {
  KeyName: string;
  Values: Array<string>;
}
export type additionalSearchKeysList = Array<AdditionalSearchKey>;
export interface AddProfileKeyRequest {
  ProfileId: string;
  KeyName: string;
  Values: Array<string>;
  DomainName: string;
}
export interface AddProfileKeyResponse {
  KeyName?: string;
  Values?: Array<string>;
}
export interface Address {
  Address1?: string;
  Address2?: string;
  Address3?: string;
  Address4?: string;
  City?: string;
  County?: string;
  State?: string;
  Province?: string;
  Country?: string;
  PostalCode?: string;
}
export interface AddressDimension {
  City?: ProfileDimension;
  Country?: ProfileDimension;
  County?: ProfileDimension;
  PostalCode?: ProfileDimension;
  Province?: ProfileDimension;
  State?: ProfileDimension;
}
export type AddressList = Array<string>;
export interface AppflowIntegration {
  FlowDefinition: FlowDefinition;
  Batches?: Array<Batch>;
}
export interface AppflowIntegrationWorkflowAttributes {
  SourceConnectorType: SourceConnectorType;
  ConnectorProfileName: string;
  RoleArn?: string;
}
export interface AppflowIntegrationWorkflowMetrics {
  RecordsProcessed: number;
  StepsCompleted: number;
  TotalSteps: number;
}
export interface AppflowIntegrationWorkflowStep {
  FlowName: string;
  Status: Status;
  ExecutionMessage: string;
  RecordsProcessed: number;
  BatchRecordsStartTime: string;
  BatchRecordsEndTime: string;
  CreatedAt: Date | string;
  LastUpdatedAt: Date | string;
}
export interface AttributeDetails {
  Attributes: Array<AttributeItem>;
  Expression: string;
}
export interface AttributeDimension {
  DimensionType: AttributeDimensionType;
  Values: Array<string>;
}
export type AttributeDimensionType =
  | "INCLUSIVE"
  | "EXCLUSIVE"
  | "CONTAINS"
  | "BEGINS_WITH"
  | "ENDS_WITH"
  | "BEFORE"
  | "AFTER"
  | "BETWEEN"
  | "NOT_BETWEEN"
  | "ON"
  | "GREATER_THAN"
  | "LESS_THAN"
  | "GREATER_THAN_OR_EQUAL"
  | "LESS_THAN_OR_EQUAL"
  | "EQUAL";
export interface AttributeItem {
  Name: string;
}
export type AttributeList = Array<AttributeItem>;
export type AttributeMap = Record<string, FilterAttributeDimension>;
export type AttributeMatchingModel = "ONE_TO_ONE" | "MANY_TO_MANY";
export type attributeName = string;

export type Attributes = Record<string, string>;
export type AttributeSourceIdMap = Record<string, string>;
export interface AttributeTypesSelector {
  AttributeMatchingModel: AttributeMatchingModel;
  Address?: Array<string>;
  PhoneNumber?: Array<string>;
  EmailAddress?: Array<string>;
}
export interface AttributeValueItem {
  Value?: string;
}
export type AttributeValueItemList = Array<AttributeValueItem>;
export interface AutoMerging {
  Enabled: boolean;
  Consolidation?: Consolidation;
  ConflictResolution?: ConflictResolution;
  MinAllowedConfidenceScoreForMerging?: number;
}
export declare class BadRequestException extends EffectData.TaggedError(
  "BadRequestException",
)<{
  readonly Message?: string;
}> {}
export interface Batch {
  StartTime: Date | string;
  EndTime: Date | string;
}
export type Batches = Array<Batch>;
export interface BatchGetCalculatedAttributeForProfileError {
  Code: string;
  Message: string;
  ProfileId: string;
}
export type BatchGetCalculatedAttributeForProfileErrorList =
  Array<BatchGetCalculatedAttributeForProfileError>;
export type BatchGetCalculatedAttributeForProfileIdList = Array<string>;
export interface BatchGetCalculatedAttributeForProfileRequest {
  CalculatedAttributeName: string;
  DomainName: string;
  ProfileIds: Array<string>;
  ConditionOverrides?: ConditionOverrides;
}
export interface BatchGetCalculatedAttributeForProfileResponse {
  Errors?: Array<BatchGetCalculatedAttributeForProfileError>;
  CalculatedAttributeValues?: Array<CalculatedAttributeValue>;
  ConditionOverrides?: ConditionOverrides;
}
export interface BatchGetProfileError {
  Code: string;
  Message: string;
  ProfileId: string;
}
export type BatchGetProfileErrorList = Array<BatchGetProfileError>;
export type BatchGetProfileIdList = Array<string>;
export interface BatchGetProfileRequest {
  DomainName: string;
  ProfileIds: Array<string>;
}
export interface BatchGetProfileResponse {
  Errors?: Array<BatchGetProfileError>;
  Profiles?: Array<Profile>;
}
export type BucketName = string;

export type BucketPrefix = string;

export type CalculatedAttributeDefinitionsList =
  Array<ListCalculatedAttributeDefinitionItem>;
export interface CalculatedAttributeDimension {
  DimensionType: AttributeDimensionType;
  Values: Array<string>;
  ConditionOverrides?: ConditionOverrides;
}
export type CalculatedAttributesForProfileList =
  Array<ListCalculatedAttributeForProfileItem>;
export interface CalculatedAttributeValue {
  CalculatedAttributeName?: string;
  DisplayName?: string;
  IsDataPartial?: string;
  ProfileId?: string;
  Value?: string;
  LastObjectTimestamp?: Date | string;
}
export type CalculatedAttributeValueList = Array<CalculatedAttributeValue>;
export type CalculatedCustomAttributes = Record<
  string,
  CalculatedAttributeDimension
>;
export type ComparisonOperator =
  | "INCLUSIVE"
  | "EXCLUSIVE"
  | "CONTAINS"
  | "BEGINS_WITH"
  | "ENDS_WITH"
  | "GREATER_THAN"
  | "LESS_THAN"
  | "GREATER_THAN_OR_EQUAL"
  | "LESS_THAN_OR_EQUAL"
  | "EQUAL"
  | "BEFORE"
  | "AFTER"
  | "ON"
  | "BETWEEN"
  | "NOT_BETWEEN";
export interface ConditionOverrides {
  Range?: RangeOverride;
}
export interface Conditions {
  Range?: Range;
  ObjectCount?: number;
  Threshold?: Threshold;
}
export interface ConflictResolution {
  ConflictResolvingModel: ConflictResolvingModel;
  SourceName?: string;
}
export type ConflictResolvingModel = "RECENCY" | "SOURCE";
export interface ConnectorOperator {
  Marketo?: MarketoConnectorOperator;
  S3?: S3ConnectorOperator;
  Salesforce?: SalesforceConnectorOperator;
  ServiceNow?: ServiceNowConnectorOperator;
  Zendesk?: ZendeskConnectorOperator;
}
export type ConnectorProfileName = string;

export interface Consolidation {
  MatchingAttributesList: Array<Array<string>>;
}
export interface CreateCalculatedAttributeDefinitionRequest {
  DomainName: string;
  CalculatedAttributeName: string;
  DisplayName?: string;
  Description?: string;
  AttributeDetails: AttributeDetails;
  Conditions?: Conditions;
  Filter?: Filter;
  Statistic: Statistic;
  UseHistoricalData?: boolean;
  Tags?: Record<string, string>;
}
export interface CreateCalculatedAttributeDefinitionResponse {
  CalculatedAttributeName?: string;
  DisplayName?: string;
  Description?: string;
  AttributeDetails?: AttributeDetails;
  Conditions?: Conditions;
  Filter?: Filter;
  Statistic?: Statistic;
  CreatedAt?: Date | string;
  LastUpdatedAt?: Date | string;
  UseHistoricalData?: boolean;
  Status?: ReadinessStatus;
  Readiness?: Readiness;
  Tags?: Record<string, string>;
}
export interface CreateDomainLayoutRequest {
  DomainName: string;
  LayoutDefinitionName: string;
  Description: string;
  DisplayName: string;
  IsDefault?: boolean;
  LayoutType: LayoutType;
  Layout: string;
  Tags?: Record<string, string>;
}
export interface CreateDomainLayoutResponse {
  LayoutDefinitionName: string;
  Description: string;
  DisplayName: string;
  IsDefault?: boolean;
  LayoutType: LayoutType;
  Layout: string;
  Version: string;
  Tags?: Record<string, string>;
  CreatedAt: Date | string;
  LastUpdatedAt?: Date | string;
}
export interface CreateDomainRequest {
  DomainName: string;
  DefaultExpirationDays: number;
  DefaultEncryptionKey?: string;
  DeadLetterQueueUrl?: string;
  Matching?: MatchingRequest;
  RuleBasedMatching?: RuleBasedMatchingRequest;
  Tags?: Record<string, string>;
}
export interface CreateDomainResponse {
  DomainName: string;
  DefaultExpirationDays: number;
  DefaultEncryptionKey?: string;
  DeadLetterQueueUrl?: string;
  Matching?: MatchingResponse;
  RuleBasedMatching?: RuleBasedMatchingResponse;
  CreatedAt: Date | string;
  LastUpdatedAt: Date | string;
  Tags?: Record<string, string>;
}
export interface CreateEventStreamRequest {
  DomainName: string;
  Uri: string;
  EventStreamName: string;
  Tags?: Record<string, string>;
}
export interface CreateEventStreamResponse {
  EventStreamArn: string;
  Tags?: Record<string, string>;
}
export interface CreateEventTriggerRequest {
  DomainName: string;
  EventTriggerName: string;
  ObjectTypeName: string;
  Description?: string;
  EventTriggerConditions: Array<EventTriggerCondition>;
  SegmentFilter?: string;
  EventTriggerLimits?: EventTriggerLimits;
  Tags?: Record<string, string>;
}
export interface CreateEventTriggerResponse {
  EventTriggerName?: string;
  ObjectTypeName?: string;
  Description?: string;
  EventTriggerConditions?: Array<EventTriggerCondition>;
  SegmentFilter?: string;
  EventTriggerLimits?: EventTriggerLimits;
  CreatedAt?: Date | string;
  LastUpdatedAt?: Date | string;
  Tags?: Record<string, string>;
}
export interface CreateIntegrationWorkflowRequest {
  DomainName: string;
  WorkflowType: WorkflowType;
  IntegrationConfig: IntegrationConfig;
  ObjectTypeName: string;
  RoleArn: string;
  Tags?: Record<string, string>;
}
export interface CreateIntegrationWorkflowResponse {
  WorkflowId: string;
  Message: string;
}
export interface CreateProfileRequest {
  DomainName: string;
  AccountNumber?: string;
  AdditionalInformation?: string;
  PartyType?: PartyType;
  BusinessName?: string;
  FirstName?: string;
  MiddleName?: string;
  LastName?: string;
  BirthDate?: string;
  Gender?: Gender;
  PhoneNumber?: string;
  MobilePhoneNumber?: string;
  HomePhoneNumber?: string;
  BusinessPhoneNumber?: string;
  EmailAddress?: string;
  PersonalEmailAddress?: string;
  BusinessEmailAddress?: string;
  Address?: Address;
  ShippingAddress?: Address;
  MailingAddress?: Address;
  BillingAddress?: Address;
  Attributes?: Record<string, string>;
  PartyTypeString?: string;
  GenderString?: string;
}
export interface CreateProfileResponse {
  ProfileId: string;
}
export interface CreateSegmentDefinitionRequest {
  DomainName: string;
  SegmentDefinitionName: string;
  DisplayName: string;
  Description?: string;
  SegmentGroups: SegmentGroup;
  Tags?: Record<string, string>;
}
export interface CreateSegmentDefinitionResponse {
  SegmentDefinitionName: string;
  DisplayName?: string;
  Description?: string;
  CreatedAt?: Date | string;
  SegmentDefinitionArn?: string;
  Tags?: Record<string, string>;
}
export interface CreateSegmentEstimateRequest {
  DomainName: string;
  SegmentQuery: SegmentGroupStructure;
}
export interface CreateSegmentEstimateResponse {
  DomainName?: string;
  EstimateId?: string;
  StatusCode?: number;
}
export interface CreateSegmentSnapshotRequest {
  DomainName: string;
  SegmentDefinitionName: string;
  DataFormat: DataFormat;
  EncryptionKey?: string;
  RoleArn?: string;
  DestinationUri?: string;
}
export interface CreateSegmentSnapshotResponse {
  SnapshotId: string;
}
export interface CreateUploadJobRequest {
  DomainName: string;
  DisplayName: string;
  Fields: Record<string, ObjectTypeField>;
  UniqueKey: string;
  DataExpiry?: number;
}
export interface CreateUploadJobResponse {
  JobId: string;
}
export type CustomAttributes = Record<string, AttributeDimension>;
export type DataFormat = "CSV" | "JSONL" | "ORC";
export type DataPullMode = "INCREMENTAL" | "COMPLETE";
export interface DateDimension {
  DimensionType: DateDimensionType;
  Values: Array<string>;
}
export type DateDimensionType =
  | "BEFORE"
  | "AFTER"
  | "BETWEEN"
  | "NOT_BETWEEN"
  | "ON";
export type DatetimeTypeFieldName = string;

export type DateValues = Array<string>;
export interface DeleteCalculatedAttributeDefinitionRequest {
  DomainName: string;
  CalculatedAttributeName: string;
}
export interface DeleteCalculatedAttributeDefinitionResponse {}
export interface DeleteDomainLayoutRequest {
  DomainName: string;
  LayoutDefinitionName: string;
}
export interface DeleteDomainLayoutResponse {
  Message: string;
}
export interface DeleteDomainRequest {
  DomainName: string;
}
export interface DeleteDomainResponse {
  Message: string;
}
export interface DeleteEventStreamRequest {
  DomainName: string;
  EventStreamName: string;
}
export interface DeleteEventStreamResponse {}
export interface DeleteEventTriggerRequest {
  DomainName: string;
  EventTriggerName: string;
}
export interface DeleteEventTriggerResponse {
  Message: string;
}
export interface DeleteIntegrationRequest {
  DomainName: string;
  Uri: string;
}
export interface DeleteIntegrationResponse {
  Message: string;
}
export interface DeleteProfileKeyRequest {
  ProfileId: string;
  KeyName: string;
  Values: Array<string>;
  DomainName: string;
}
export interface DeleteProfileKeyResponse {
  Message?: string;
}
export interface DeleteProfileObjectRequest {
  ProfileId: string;
  ProfileObjectUniqueKey: string;
  ObjectTypeName: string;
  DomainName: string;
}
export interface DeleteProfileObjectResponse {
  Message?: string;
}
export interface DeleteProfileObjectTypeRequest {
  DomainName: string;
  ObjectTypeName: string;
}
export interface DeleteProfileObjectTypeResponse {
  Message: string;
}
export interface DeleteProfileRequest {
  ProfileId: string;
  DomainName: string;
}
export interface DeleteProfileResponse {
  Message?: string;
}
export interface DeleteSegmentDefinitionRequest {
  DomainName: string;
  SegmentDefinitionName: string;
}
export interface DeleteSegmentDefinitionResponse {
  Message?: string;
}
export interface DeleteWorkflowRequest {
  DomainName: string;
  WorkflowId: string;
}
export interface DeleteWorkflowResponse {}
export type DestinationField = string;

export interface DestinationSummary {
  Uri: string;
  Status: EventStreamDestinationStatus;
  UnhealthySince?: Date | string;
}
export interface DetectedProfileObjectType {
  SourceLastUpdatedTimestampFormat?: string;
  Fields?: Record<string, ObjectTypeField>;
  Keys?: Record<string, Array<ObjectTypeKey>>;
}
export type DetectedProfileObjectTypes = Array<DetectedProfileObjectType>;
export interface DetectProfileObjectTypeRequest {
  Objects: Array<string>;
  DomainName: string;
}
export interface DetectProfileObjectTypeResponse {
  DetectedProfileObjectTypes?: Array<DetectedProfileObjectType>;
}
export type Dimension =
  | { ProfileAttributes: ProfileAttributes }
  | { CalculatedAttributes: Record<string, CalculatedAttributeDimension> };
export type DimensionList = Array<Dimension>;
export type displayName = string;

export type DomainList = Array<ListDomainItem>;
export interface DomainStats {
  ProfileCount?: number;
  MeteringProfileCount?: number;
  ObjectCount?: number;
  TotalSize?: number;
}
export type Double = number;

export type Double0To1 = number;

export type EmailList = Array<string>;
export type encryptionKey = string;

export type End = number;

export type EstimateStatus = "RUNNING" | "SUCCEEDED" | "FAILED";
export interface EventStreamDestinationDetails {
  Uri: string;
  Status: EventStreamDestinationStatus;
  UnhealthySince?: Date | string;
  Message?: string;
}
export type EventStreamDestinationStatus = "HEALTHY" | "UNHEALTHY";
export type EventStreamState = "RUNNING" | "STOPPED";
export interface EventStreamSummary {
  DomainName: string;
  EventStreamName: string;
  EventStreamArn: string;
  State: EventStreamState;
  StoppedSince?: Date | string;
  DestinationSummary?: DestinationSummary;
  Tags?: Record<string, string>;
}
export type EventStreamSummaryList = Array<EventStreamSummary>;
export interface EventTriggerCondition {
  EventTriggerDimensions: Array<EventTriggerDimension>;
  LogicalOperator: EventTriggerLogicalOperator;
}
export type EventTriggerConditions = Array<EventTriggerCondition>;
export interface EventTriggerDimension {
  ObjectAttributes: Array<ObjectAttribute>;
}
export type EventTriggerDimensions = Array<EventTriggerDimension>;
export interface EventTriggerLimits {
  EventExpiration?: number;
  Periods?: Array<Period>;
}
export type EventTriggerLogicalOperator = "ANY" | "ALL" | "NONE";
export type EventTriggerNames = Array<string>;
export interface EventTriggerSummaryItem {
  ObjectTypeName?: string;
  EventTriggerName?: string;
  Description?: string;
  CreatedAt?: Date | string;
  LastUpdatedAt?: Date | string;
  Tags?: Record<string, string>;
}
export type EventTriggerSummaryList = Array<EventTriggerSummaryItem>;
export type EventTriggerValues = Array<string>;
export type expirationDaysInteger = number;

export interface ExportingConfig {
  S3Exporting?: S3ExportingConfig;
}
export interface ExportingLocation {
  S3Exporting?: S3ExportingLocation;
}
export interface ExtraLengthValueProfileDimension {
  DimensionType: StringDimensionType;
  Values: Array<string>;
}
export type ExtraLengthValues = Array<string>;
export type Failures = Array<ProfileQueryFailures>;
export type FieldContentType =
  | "STRING"
  | "NUMBER"
  | "PHONE_NUMBER"
  | "EMAIL_ADDRESS"
  | "NAME";
export type FieldMap = Record<string, ObjectTypeField>;
export type fieldName = string;

export type FieldNameList = Array<string>;
export interface FieldSourceProfileIds {
  AccountNumber?: string;
  AdditionalInformation?: string;
  PartyType?: string;
  BusinessName?: string;
  FirstName?: string;
  MiddleName?: string;
  LastName?: string;
  BirthDate?: string;
  Gender?: string;
  PhoneNumber?: string;
  MobilePhoneNumber?: string;
  HomePhoneNumber?: string;
  BusinessPhoneNumber?: string;
  EmailAddress?: string;
  PersonalEmailAddress?: string;
  BusinessEmailAddress?: string;
  Address?: string;
  ShippingAddress?: string;
  MailingAddress?: string;
  BillingAddress?: string;
  Attributes?: Record<string, string>;
}
export interface Filter {
  Include: Include;
  Groups: Array<FilterGroup>;
}
export interface FilterAttributeDimension {
  DimensionType: FilterDimensionType;
  Values: Array<string>;
}
export interface FilterDimension {
  Attributes: Record<string, FilterAttributeDimension>;
}
export type FilterDimensionList = Array<FilterDimension>;
export type FilterDimensionType =
  | "INCLUSIVE"
  | "EXCLUSIVE"
  | "CONTAINS"
  | "BEGINS_WITH"
  | "ENDS_WITH"
  | "BEFORE"
  | "AFTER"
  | "BETWEEN"
  | "NOT_BETWEEN"
  | "ON"
  | "GREATER_THAN"
  | "LESS_THAN"
  | "GREATER_THAN_OR_EQUAL"
  | "LESS_THAN_OR_EQUAL"
  | "EQUAL";
export interface FilterGroup {
  Type: Type;
  Dimensions: Array<FilterDimension>;
}
export interface FlowDefinition {
  Description?: string;
  FlowName: string;
  KmsArn: string;
  SourceFlowConfig: SourceFlowConfig;
  Tasks: Array<Task>;
  TriggerConfig: TriggerConfig;
}
export type FlowDescription = string;

export type FlowName = string;

export interface FoundByKeyValue {
  KeyName?: string;
  Values?: Array<string>;
}
export type foundByList = Array<FoundByKeyValue>;
export type Gender = "MALE" | "FEMALE" | "UNSPECIFIED";
export interface GetAutoMergingPreviewRequest {
  DomainName: string;
  Consolidation: Consolidation;
  ConflictResolution: ConflictResolution;
  MinAllowedConfidenceScoreForMerging?: number;
}
export interface GetAutoMergingPreviewResponse {
  DomainName: string;
  NumberOfMatchesInSample?: number;
  NumberOfProfilesInSample?: number;
  NumberOfProfilesWillBeMerged?: number;
}
export interface GetCalculatedAttributeDefinitionRequest {
  DomainName: string;
  CalculatedAttributeName: string;
}
export interface GetCalculatedAttributeDefinitionResponse {
  CalculatedAttributeName?: string;
  DisplayName?: string;
  Description?: string;
  CreatedAt?: Date | string;
  LastUpdatedAt?: Date | string;
  Statistic?: Statistic;
  Filter?: Filter;
  Conditions?: Conditions;
  AttributeDetails?: AttributeDetails;
  UseHistoricalData?: boolean;
  Status?: ReadinessStatus;
  Readiness?: Readiness;
  Tags?: Record<string, string>;
}
export interface GetCalculatedAttributeForProfileRequest {
  DomainName: string;
  ProfileId: string;
  CalculatedAttributeName: string;
}
export interface GetCalculatedAttributeForProfileResponse {
  CalculatedAttributeName?: string;
  DisplayName?: string;
  IsDataPartial?: string;
  Value?: string;
  LastObjectTimestamp?: Date | string;
}
export interface GetDomainLayoutRequest {
  DomainName: string;
  LayoutDefinitionName: string;
}
export interface GetDomainLayoutResponse {
  LayoutDefinitionName: string;
  Description: string;
  DisplayName: string;
  IsDefault?: boolean;
  LayoutType: LayoutType;
  Layout: string;
  Version: string;
  CreatedAt: Date | string;
  LastUpdatedAt: Date | string;
  Tags?: Record<string, string>;
}
export interface GetDomainRequest {
  DomainName: string;
}
export interface GetDomainResponse {
  DomainName: string;
  DefaultExpirationDays?: number;
  DefaultEncryptionKey?: string;
  DeadLetterQueueUrl?: string;
  Stats?: DomainStats;
  Matching?: MatchingResponse;
  RuleBasedMatching?: RuleBasedMatchingResponse;
  CreatedAt: Date | string;
  LastUpdatedAt: Date | string;
  Tags?: Record<string, string>;
}
export interface GetEventStreamRequest {
  DomainName: string;
  EventStreamName: string;
}
export interface GetEventStreamResponse {
  DomainName: string;
  EventStreamArn: string;
  CreatedAt: Date | string;
  State: EventStreamState;
  StoppedSince?: Date | string;
  DestinationDetails: EventStreamDestinationDetails;
  Tags?: Record<string, string>;
}
export interface GetEventTriggerRequest {
  DomainName: string;
  EventTriggerName: string;
}
export interface GetEventTriggerResponse {
  EventTriggerName?: string;
  ObjectTypeName?: string;
  Description?: string;
  EventTriggerConditions?: Array<EventTriggerCondition>;
  SegmentFilter?: string;
  EventTriggerLimits?: EventTriggerLimits;
  CreatedAt?: Date | string;
  LastUpdatedAt?: Date | string;
  Tags?: Record<string, string>;
}
export interface GetIdentityResolutionJobRequest {
  DomainName: string;
  JobId: string;
}
export interface GetIdentityResolutionJobResponse {
  DomainName?: string;
  JobId?: string;
  Status?: IdentityResolutionJobStatus;
  Message?: string;
  JobStartTime?: Date | string;
  JobEndTime?: Date | string;
  LastUpdatedAt?: Date | string;
  JobExpirationTime?: Date | string;
  AutoMerging?: AutoMerging;
  ExportingLocation?: ExportingLocation;
  JobStats?: JobStats;
}
export interface GetIntegrationRequest {
  DomainName: string;
  Uri: string;
}
export interface GetIntegrationResponse {
  DomainName: string;
  Uri: string;
  ObjectTypeName?: string;
  CreatedAt: Date | string;
  LastUpdatedAt: Date | string;
  Tags?: Record<string, string>;
  ObjectTypeNames?: Record<string, string>;
  WorkflowId?: string;
  IsUnstructured?: boolean;
  RoleArn?: string;
  EventTriggerNames?: Array<string>;
}
export interface GetMatchesRequest {
  NextToken?: string;
  MaxResults?: number;
  DomainName: string;
}
export interface GetMatchesResponse {
  NextToken?: string;
  MatchGenerationDate?: Date | string;
  PotentialMatches?: number;
  Matches?: Array<MatchItem>;
}
export interface GetProfileObjectTypeRequest {
  DomainName: string;
  ObjectTypeName: string;
}
export interface GetProfileObjectTypeResponse {
  ObjectTypeName: string;
  Description: string;
  TemplateId?: string;
  ExpirationDays?: number;
  EncryptionKey?: string;
  AllowProfileCreation?: boolean;
  SourceLastUpdatedTimestampFormat?: string;
  MaxAvailableProfileObjectCount?: number;
  MaxProfileObjectCount?: number;
  Fields?: Record<string, ObjectTypeField>;
  Keys?: Record<string, Array<ObjectTypeKey>>;
  CreatedAt?: Date | string;
  LastUpdatedAt?: Date | string;
  Tags?: Record<string, string>;
}
export interface GetProfileObjectTypeTemplateRequest {
  TemplateId: string;
}
export interface GetProfileObjectTypeTemplateResponse {
  TemplateId?: string;
  SourceName?: string;
  SourceObject?: string;
  AllowProfileCreation?: boolean;
  SourceLastUpdatedTimestampFormat?: string;
  Fields?: Record<string, ObjectTypeField>;
  Keys?: Record<string, Array<ObjectTypeKey>>;
}
export interface GetSegmentDefinitionRequest {
  DomainName: string;
  SegmentDefinitionName: string;
}
export interface GetSegmentDefinitionResponse {
  SegmentDefinitionName?: string;
  DisplayName?: string;
  Description?: string;
  SegmentGroups?: SegmentGroup;
  SegmentDefinitionArn: string;
  CreatedAt?: Date | string;
  Tags?: Record<string, string>;
}
export interface GetSegmentEstimateRequest {
  DomainName: string;
  EstimateId: string;
}
export interface GetSegmentEstimateResponse {
  DomainName?: string;
  EstimateId?: string;
  Status?: EstimateStatus;
  Estimate?: string;
  Message?: string;
  StatusCode?: number;
}
export type GetSegmentMembershipMessage = string;

export interface GetSegmentMembershipRequest {
  DomainName: string;
  SegmentDefinitionName: string;
  ProfileIds: Array<string>;
}
export interface GetSegmentMembershipResponse {
  SegmentDefinitionName?: string;
  Profiles?: Array<ProfileQueryResult>;
  Failures?: Array<ProfileQueryFailures>;
}
export type GetSegmentMembershipStatus = number;

export interface GetSegmentSnapshotRequest {
  DomainName: string;
  SegmentDefinitionName: string;
  SnapshotId: string;
}
export interface GetSegmentSnapshotResponse {
  SnapshotId: string;
  Status: SegmentSnapshotStatus;
  StatusMessage?: string;
  DataFormat: DataFormat;
  EncryptionKey?: string;
  RoleArn?: string;
  DestinationUri?: string;
}
export interface GetSimilarProfilesRequest {
  NextToken?: string;
  MaxResults?: number;
  DomainName: string;
  MatchType: MatchType;
  SearchKey: string;
  SearchValue: string;
}
export interface GetSimilarProfilesResponse {
  ProfileIds?: Array<string>;
  MatchId?: string;
  MatchType?: MatchType;
  RuleLevel?: number;
  ConfidenceScore?: number;
  NextToken?: string;
}
export interface GetUploadJobPathRequest {
  DomainName: string;
  JobId: string;
}
export interface GetUploadJobPathResponse {
  Url: string;
  ClientToken?: string;
  ValidUntil?: Date | string;
}
export interface GetUploadJobRequest {
  DomainName: string;
  JobId: string;
}
export interface GetUploadJobResponse {
  JobId?: string;
  DisplayName?: string;
  Status?: UploadJobStatus;
  StatusReason?: StatusReason;
  CreatedAt?: Date | string;
  CompletedAt?: Date | string;
  Fields?: Record<string, ObjectTypeField>;
  UniqueKey?: string;
  ResultsSummary?: ResultsSummary;
  DataExpiry?: number;
}
export interface GetWorkflowRequest {
  DomainName: string;
  WorkflowId: string;
}
export interface GetWorkflowResponse {
  WorkflowId?: string;
  WorkflowType?: WorkflowType;
  Status?: Status;
  ErrorDescription?: string;
  StartDate?: Date | string;
  LastUpdatedAt?: Date | string;
  Attributes?: WorkflowAttributes;
  Metrics?: WorkflowMetrics;
}
export interface GetWorkflowStepsRequest {
  DomainName: string;
  WorkflowId: string;
  NextToken?: string;
  MaxResults?: number;
}
export interface GetWorkflowStepsResponse {
  WorkflowId?: string;
  WorkflowType?: WorkflowType;
  Items?: Array<WorkflowStepItem>;
  NextToken?: string;
}
export interface Group {
  Dimensions?: Array<Dimension>;
  SourceSegments?: Array<SourceSegment>;
  SourceType?: IncludeOptions;
  Type?: IncludeOptions;
}
export type GroupList = Array<FilterGroup>;
export interface IdentityResolutionJob {
  DomainName?: string;
  JobId?: string;
  Status?: IdentityResolutionJobStatus;
  JobStartTime?: Date | string;
  JobEndTime?: Date | string;
  JobStats?: JobStats;
  ExportingLocation?: ExportingLocation;
  Message?: string;
}
export type IdentityResolutionJobsList = Array<IdentityResolutionJob>;
export type IdentityResolutionJobStatus =
  | "PENDING"
  | "PREPROCESSING"
  | "FIND_MATCHING"
  | "MERGING"
  | "COMPLETED"
  | "PARTIAL_SUCCESS"
  | "FAILED";
export type Include = "ALL" | "ANY" | "NONE";
export type IncludeOptions = "ALL" | "ANY" | "NONE";
export interface IncrementalPullConfig {
  DatetimeTypeFieldName?: string;
}
export interface IntegrationConfig {
  AppflowIntegration?: AppflowIntegration;
}
export type IntegrationList = Array<ListIntegrationItem>;
export declare class InternalServerException extends EffectData.TaggedError(
  "InternalServerException",
)<{
  readonly Message?: string;
}> {}
export interface JobSchedule {
  DayOfTheWeek: JobScheduleDayOfTheWeek;
  Time: string;
}
export type JobScheduleDayOfTheWeek =
  | "SUNDAY"
  | "MONDAY"
  | "TUESDAY"
  | "WEDNESDAY"
  | "THURSDAY"
  | "FRIDAY"
  | "SATURDAY";
export type JobScheduleTime = string;

export interface JobStats {
  NumberOfProfilesReviewed?: number;
  NumberOfMatchesFound?: number;
  NumberOfMergesDone?: number;
}
export type KeyMap = Record<string, Array<ObjectTypeKey>>;
export type KmsArn = string;

export interface LayoutItem {
  LayoutDefinitionName: string;
  Description: string;
  DisplayName: string;
  IsDefault?: boolean;
  LayoutType: LayoutType;
  Tags?: Record<string, string>;
  CreatedAt: Date | string;
  LastUpdatedAt: Date | string;
}
export type LayoutList = Array<LayoutItem>;
export type LayoutType = "PROFILE_EXPLORER";
export interface ListAccountIntegrationsRequest {
  Uri: string;
  NextToken?: string;
  MaxResults?: number;
  IncludeHidden?: boolean;
}
export interface ListAccountIntegrationsResponse {
  Items?: Array<ListIntegrationItem>;
  NextToken?: string;
}
export interface ListCalculatedAttributeDefinitionItem {
  CalculatedAttributeName?: string;
  DisplayName?: string;
  Description?: string;
  CreatedAt?: Date | string;
  LastUpdatedAt?: Date | string;
  UseHistoricalData?: boolean;
  Status?: ReadinessStatus;
  Tags?: Record<string, string>;
}
export interface ListCalculatedAttributeDefinitionsRequest {
  DomainName: string;
  NextToken?: string;
  MaxResults?: number;
}
export interface ListCalculatedAttributeDefinitionsResponse {
  Items?: Array<ListCalculatedAttributeDefinitionItem>;
  NextToken?: string;
}
export interface ListCalculatedAttributeForProfileItem {
  CalculatedAttributeName?: string;
  DisplayName?: string;
  IsDataPartial?: string;
  Value?: string;
  LastObjectTimestamp?: Date | string;
}
export interface ListCalculatedAttributesForProfileRequest {
  NextToken?: string;
  MaxResults?: number;
  DomainName: string;
  ProfileId: string;
}
export interface ListCalculatedAttributesForProfileResponse {
  Items?: Array<ListCalculatedAttributeForProfileItem>;
  NextToken?: string;
}
export interface ListDomainItem {
  DomainName: string;
  CreatedAt: Date | string;
  LastUpdatedAt: Date | string;
  Tags?: Record<string, string>;
}
export interface ListDomainLayoutsRequest {
  DomainName: string;
  NextToken?: string;
  MaxResults?: number;
}
export interface ListDomainLayoutsResponse {
  Items?: Array<LayoutItem>;
  NextToken?: string;
}
export interface ListDomainsRequest {
  NextToken?: string;
  MaxResults?: number;
}
export interface ListDomainsResponse {
  Items?: Array<ListDomainItem>;
  NextToken?: string;
}
export interface ListEventStreamsRequest {
  DomainName: string;
  NextToken?: string;
  MaxResults?: number;
}
export interface ListEventStreamsResponse {
  Items?: Array<EventStreamSummary>;
  NextToken?: string;
}
export interface ListEventTriggersRequest {
  DomainName: string;
  NextToken?: string;
  MaxResults?: number;
}
export interface ListEventTriggersResponse {
  Items?: Array<EventTriggerSummaryItem>;
  NextToken?: string;
}
export interface ListIdentityResolutionJobsRequest {
  DomainName: string;
  NextToken?: string;
  MaxResults?: number;
}
export interface ListIdentityResolutionJobsResponse {
  IdentityResolutionJobsList?: Array<IdentityResolutionJob>;
  NextToken?: string;
}
export interface ListIntegrationItem {
  DomainName: string;
  Uri: string;
  ObjectTypeName?: string;
  CreatedAt: Date | string;
  LastUpdatedAt: Date | string;
  Tags?: Record<string, string>;
  ObjectTypeNames?: Record<string, string>;
  WorkflowId?: string;
  IsUnstructured?: boolean;
  RoleArn?: string;
  EventTriggerNames?: Array<string>;
}
export interface ListIntegrationsRequest {
  DomainName: string;
  NextToken?: string;
  MaxResults?: number;
  IncludeHidden?: boolean;
}
export interface ListIntegrationsResponse {
  Items?: Array<ListIntegrationItem>;
  NextToken?: string;
}
export interface ListObjectTypeAttributeItem {
  AttributeName: string;
  LastUpdatedAt: Date | string;
}
export type ListObjectTypeAttributesList = Array<ListObjectTypeAttributeItem>;
export interface ListObjectTypeAttributesRequest {
  NextToken?: string;
  MaxResults?: number;
  DomainName: string;
  ObjectTypeName: string;
}
export interface ListObjectTypeAttributesResponse {
  Items?: Array<ListObjectTypeAttributeItem>;
  NextToken?: string;
}
export interface ListProfileObjectsItem {
  ObjectTypeName?: string;
  ProfileObjectUniqueKey?: string;
  Object?: string;
}
export interface ListProfileObjectsRequest {
  NextToken?: string;
  MaxResults?: number;
  DomainName: string;
  ObjectTypeName: string;
  ProfileId: string;
  ObjectFilter?: ObjectFilter;
}
export interface ListProfileObjectsResponse {
  Items?: Array<ListProfileObjectsItem>;
  NextToken?: string;
}
export interface ListProfileObjectTypeItem {
  ObjectTypeName: string;
  Description: string;
  CreatedAt?: Date | string;
  LastUpdatedAt?: Date | string;
  MaxProfileObjectCount?: number;
  MaxAvailableProfileObjectCount?: number;
  Tags?: Record<string, string>;
}
export interface ListProfileObjectTypesRequest {
  DomainName: string;
  NextToken?: string;
  MaxResults?: number;
}
export interface ListProfileObjectTypesResponse {
  Items?: Array<ListProfileObjectTypeItem>;
  NextToken?: string;
}
export interface ListProfileObjectTypeTemplateItem {
  TemplateId?: string;
  SourceName?: string;
  SourceObject?: string;
}
export interface ListProfileObjectTypeTemplatesRequest {
  NextToken?: string;
  MaxResults?: number;
}
export interface ListProfileObjectTypeTemplatesResponse {
  Items?: Array<ListProfileObjectTypeTemplateItem>;
  NextToken?: string;
}
export interface ListRuleBasedMatchesRequest {
  NextToken?: string;
  MaxResults?: number;
  DomainName: string;
}
export interface ListRuleBasedMatchesResponse {
  MatchIds?: Array<string>;
  NextToken?: string;
}
export interface ListSegmentDefinitionsRequest {
  DomainName: string;
  MaxResults?: number;
  NextToken?: string;
}
export interface ListSegmentDefinitionsResponse {
  NextToken?: string;
  Items?: Array<SegmentDefinitionItem>;
}
export interface ListTagsForResourceRequest {
  resourceArn: string;
}
export interface ListTagsForResourceResponse {
  tags?: Record<string, string>;
}
export interface ListUploadJobsRequest {
  DomainName: string;
  MaxResults?: number;
  NextToken?: string;
}
export interface ListUploadJobsResponse {
  NextToken?: string;
  Items?: Array<UploadJobItem>;
}
export interface ListWorkflowsItem {
  WorkflowType: WorkflowType;
  WorkflowId: string;
  Status: Status;
  StatusDescription: string;
  CreatedAt: Date | string;
  LastUpdatedAt: Date | string;
}
export interface ListWorkflowsRequest {
  DomainName: string;
  WorkflowType?: WorkflowType;
  Status?: Status;
  QueryStartDate?: Date | string;
  QueryEndDate?: Date | string;
  NextToken?: string;
  MaxResults?: number;
}
export interface ListWorkflowsResponse {
  Items?: Array<ListWorkflowsItem>;
  NextToken?: string;
}
export type logicalOperator = "AND" | "OR";
export type long = number;

export type MarketoConnectorOperator =
  | "PROJECTION"
  | "LESS_THAN"
  | "GREATER_THAN"
  | "BETWEEN"
  | "ADDITION"
  | "MULTIPLICATION"
  | "DIVISION"
  | "SUBTRACTION"
  | "MASK_ALL"
  | "MASK_FIRST_N"
  | "MASK_LAST_N"
  | "VALIDATE_NON_NULL"
  | "VALIDATE_NON_ZERO"
  | "VALIDATE_NON_NEGATIVE"
  | "VALIDATE_NUMERIC"
  | "NO_OP";
export interface MarketoSourceProperties {
  Object: string;
}
export type MatchesList = Array<MatchItem>;
export type matchesNumber = number;

export type MatchIdList = Array<string>;
export type MatchingAttributes = Array<string>;
export type MatchingAttributesList = Array<Array<string>>;
export interface MatchingRequest {
  Enabled: boolean;
  JobSchedule?: JobSchedule;
  AutoMerging?: AutoMerging;
  ExportingConfig?: ExportingConfig;
}
export interface MatchingResponse {
  Enabled?: boolean;
  JobSchedule?: JobSchedule;
  AutoMerging?: AutoMerging;
  ExportingConfig?: ExportingConfig;
}
export interface MatchingRule {
  Rule: Array<string>;
}
export type MatchingRuleAttributeList = Array<string>;
export type MatchingRules = Array<MatchingRule>;
export interface MatchItem {
  MatchId?: string;
  ProfileIds?: Array<string>;
  ConfidenceScore?: number;
}
export type MatchType = "RULE_BASED_MATCHING" | "ML_BASED_MATCHING";
export type MaxAllowedRuleLevelForMatching = number;

export type MaxAllowedRuleLevelForMerging = number;

export type maxSize100 = number;

export type maxSize1000 = number;

export type maxSize24 = number;

export type MaxSize500 = number;

export interface MergeProfilesRequest {
  DomainName: string;
  MainProfileId: string;
  ProfileIdsToBeMerged: Array<string>;
  FieldSourceProfileIds?: FieldSourceProfileIds;
}
export interface MergeProfilesResponse {
  Message?: string;
}
export type message = string;

export type minSize0 = number;

export type minSize1 = number;

export type name = string;

export type Object = string;

export interface ObjectAttribute {
  Source?: string;
  FieldName?: string;
  ComparisonOperator: ComparisonOperator;
  Values: Array<string>;
}
export type ObjectAttributes = Array<ObjectAttribute>;
export type ObjectCount = number;

export interface ObjectFilter {
  KeyName: string;
  Values: Array<string>;
}
export type Objects = Array<string>;
export interface ObjectTypeField {
  Source?: string;
  Target?: string;
  ContentType?: FieldContentType;
}
export interface ObjectTypeKey {
  StandardIdentifiers?: Array<StandardIdentifier>;
  FieldNames?: Array<string>;
}
export type ObjectTypeKeyList = Array<ObjectTypeKey>;
export type ObjectTypeNames = Record<string, string>;
export type Operator =
  | "EQUAL_TO"
  | "GREATER_THAN"
  | "LESS_THAN"
  | "NOT_EQUAL_TO";
export type OperatorPropertiesKeys =
  | "VALUE"
  | "VALUES"
  | "DATA_TYPE"
  | "UPPER_BOUND"
  | "LOWER_BOUND"
  | "SOURCE_DATA_TYPE"
  | "DESTINATION_DATA_TYPE"
  | "VALIDATION_ACTION"
  | "MASK_VALUE"
  | "MASK_LENGTH"
  | "TRUNCATE_LENGTH"
  | "MATH_OPERATION_FIELDS_ORDER"
  | "CONCAT_FORMAT"
  | "SUBFIELD_CATEGORY_MAP";
export type optionalBoolean = boolean;

export type optionalLong = number;

export type PartyType = "INDIVIDUAL" | "BUSINESS" | "OTHER";
export type percentageInteger = number;

export interface Period {
  Unit: PeriodUnit;
  Value: number;
  MaxInvocationsPerProfile?: number;
  Unlimited?: boolean;
}
export type Periods = Array<Period>;
export type PeriodUnit = "HOURS" | "DAYS" | "WEEKS" | "MONTHS";
export type PhoneNumberList = Array<string>;
export interface Profile {
  ProfileId?: string;
  AccountNumber?: string;
  AdditionalInformation?: string;
  PartyType?: PartyType;
  BusinessName?: string;
  FirstName?: string;
  MiddleName?: string;
  LastName?: string;
  BirthDate?: string;
  Gender?: Gender;
  PhoneNumber?: string;
  MobilePhoneNumber?: string;
  HomePhoneNumber?: string;
  BusinessPhoneNumber?: string;
  EmailAddress?: string;
  PersonalEmailAddress?: string;
  BusinessEmailAddress?: string;
  Address?: Address;
  ShippingAddress?: Address;
  MailingAddress?: Address;
  BillingAddress?: Address;
  Attributes?: Record<string, string>;
  FoundByItems?: Array<FoundByKeyValue>;
  PartyTypeString?: string;
  GenderString?: string;
}
export interface ProfileAttributes {
  AccountNumber?: ProfileDimension;
  AdditionalInformation?: ExtraLengthValueProfileDimension;
  FirstName?: ProfileDimension;
  LastName?: ProfileDimension;
  MiddleName?: ProfileDimension;
  GenderString?: ProfileDimension;
  PartyTypeString?: ProfileDimension;
  BirthDate?: DateDimension;
  PhoneNumber?: ProfileDimension;
  BusinessName?: ProfileDimension;
  BusinessPhoneNumber?: ProfileDimension;
  HomePhoneNumber?: ProfileDimension;
  MobilePhoneNumber?: ProfileDimension;
  EmailAddress?: ProfileDimension;
  PersonalEmailAddress?: ProfileDimension;
  BusinessEmailAddress?: ProfileDimension;
  Address?: AddressDimension;
  ShippingAddress?: AddressDimension;
  MailingAddress?: AddressDimension;
  BillingAddress?: AddressDimension;
  Attributes?: Record<string, AttributeDimension>;
}
export interface ProfileAttributeValuesRequest {
  DomainName: string;
  AttributeName: string;
}
export interface ProfileAttributeValuesResponse {
  DomainName?: string;
  AttributeName?: string;
  Items?: Array<AttributeValueItem>;
  StatusCode?: number;
}
export interface ProfileDimension {
  DimensionType: StringDimensionType;
  Values: Array<string>;
}
export type ProfileId = string;

export type ProfileIdList = Array<string>;
export type ProfileIds = Array<string>;
export type ProfileIdToBeMergedList = Array<string>;
export type ProfileList = Array<Profile>;
export type ProfileObjectList = Array<ListProfileObjectsItem>;
export type ProfileObjectTypeList = Array<ListProfileObjectTypeItem>;
export type ProfileObjectTypeTemplateList =
  Array<ListProfileObjectTypeTemplateItem>;
export interface ProfileQueryFailures {
  ProfileId: string;
  Message: string;
  Status?: number;
}
export interface ProfileQueryResult {
  ProfileId: string;
  QueryResult: QueryResult;
  Profile?: Profile;
}
export type Profiles = Array<ProfileQueryResult>;
export type Property = string;

export interface PutIntegrationRequest {
  DomainName: string;
  Uri?: string;
  ObjectTypeName?: string;
  Tags?: Record<string, string>;
  FlowDefinition?: FlowDefinition;
  ObjectTypeNames?: Record<string, string>;
  RoleArn?: string;
  EventTriggerNames?: Array<string>;
}
export interface PutIntegrationResponse {
  DomainName: string;
  Uri: string;
  ObjectTypeName?: string;
  CreatedAt: Date | string;
  LastUpdatedAt: Date | string;
  Tags?: Record<string, string>;
  ObjectTypeNames?: Record<string, string>;
  WorkflowId?: string;
  IsUnstructured?: boolean;
  RoleArn?: string;
  EventTriggerNames?: Array<string>;
}
export interface PutProfileObjectRequest {
  ObjectTypeName: string;
  Object: string;
  DomainName: string;
}
export interface PutProfileObjectResponse {
  ProfileObjectUniqueKey?: string;
}
export interface PutProfileObjectTypeRequest {
  DomainName: string;
  ObjectTypeName: string;
  Description: string;
  TemplateId?: string;
  ExpirationDays?: number;
  EncryptionKey?: string;
  AllowProfileCreation?: boolean;
  SourceLastUpdatedTimestampFormat?: string;
  MaxProfileObjectCount?: number;
  Fields?: Record<string, ObjectTypeField>;
  Keys?: Record<string, Array<ObjectTypeKey>>;
  Tags?: Record<string, string>;
}
export interface PutProfileObjectTypeResponse {
  ObjectTypeName: string;
  Description: string;
  TemplateId?: string;
  ExpirationDays?: number;
  EncryptionKey?: string;
  AllowProfileCreation?: boolean;
  SourceLastUpdatedTimestampFormat?: string;
  MaxProfileObjectCount?: number;
  MaxAvailableProfileObjectCount?: number;
  Fields?: Record<string, ObjectTypeField>;
  Keys?: Record<string, Array<ObjectTypeKey>>;
  CreatedAt?: Date | string;
  LastUpdatedAt?: Date | string;
  Tags?: Record<string, string>;
}
export type QueryResult = "PRESENT" | "ABSENT";
export interface Range {
  Value?: number;
  Unit?: Unit;
  ValueRange?: ValueRange;
  TimestampSource?: string;
  TimestampFormat?: string;
}
export interface RangeOverride {
  Start: number;
  End?: number;
  Unit: RangeUnit;
}
export type RangeUnit = "DAYS";
export interface Readiness {
  ProgressPercentage?: number;
  Message?: string;
}
export type ReadinessStatus =
  | "PREPARING"
  | "IN_PROGRESS"
  | "COMPLETED"
  | "FAILED";
export type requestValueList = Array<string>;
export declare class ResourceNotFoundException extends EffectData.TaggedError(
  "ResourceNotFoundException",
)<{
  readonly Message?: string;
}> {}
export interface ResultsSummary {
  UpdatedRecords?: number;
  CreatedRecords?: number;
  FailedRecords?: number;
}
export type RoleArn = string;

export interface RuleBasedMatchingRequest {
  Enabled: boolean;
  MatchingRules?: Array<MatchingRule>;
  MaxAllowedRuleLevelForMerging?: number;
  MaxAllowedRuleLevelForMatching?: number;
  AttributeTypesSelector?: AttributeTypesSelector;
  ConflictResolution?: ConflictResolution;
  ExportingConfig?: ExportingConfig;
}
export interface RuleBasedMatchingResponse {
  Enabled?: boolean;
  MatchingRules?: Array<MatchingRule>;
  Status?: RuleBasedMatchingStatus;
  MaxAllowedRuleLevelForMerging?: number;
  MaxAllowedRuleLevelForMatching?: number;
  AttributeTypesSelector?: AttributeTypesSelector;
  ConflictResolution?: ConflictResolution;
  ExportingConfig?: ExportingConfig;
}
export type RuleBasedMatchingStatus = "PENDING" | "IN_PROGRESS" | "ACTIVE";
export type RuleLevel = number;

export type s3BucketName = string;

export type S3ConnectorOperator =
  | "PROJECTION"
  | "LESS_THAN"
  | "GREATER_THAN"
  | "BETWEEN"
  | "LESS_THAN_OR_EQUAL_TO"
  | "GREATER_THAN_OR_EQUAL_TO"
  | "EQUAL_TO"
  | "NOT_EQUAL_TO"
  | "ADDITION"
  | "MULTIPLICATION"
  | "DIVISION"
  | "SUBTRACTION"
  | "MASK_ALL"
  | "MASK_FIRST_N"
  | "MASK_LAST_N"
  | "VALIDATE_NON_NULL"
  | "VALIDATE_NON_ZERO"
  | "VALIDATE_NON_NEGATIVE"
  | "VALIDATE_NUMERIC"
  | "NO_OP";
export interface S3ExportingConfig {
  S3BucketName: string;
  S3KeyName?: string;
}
export interface S3ExportingLocation {
  S3BucketName?: string;
  S3KeyName?: string;
}
export type s3KeyName = string;

export type s3KeyNameCustomerOutputConfig = string;

export interface S3SourceProperties {
  BucketName: string;
  BucketPrefix?: string;
}
export type SalesforceConnectorOperator =
  | "PROJECTION"
  | "LESS_THAN"
  | "CONTAINS"
  | "GREATER_THAN"
  | "BETWEEN"
  | "LESS_THAN_OR_EQUAL_TO"
  | "GREATER_THAN_OR_EQUAL_TO"
  | "EQUAL_TO"
  | "NOT_EQUAL_TO"
  | "ADDITION"
  | "MULTIPLICATION"
  | "DIVISION"
  | "SUBTRACTION"
  | "MASK_ALL"
  | "MASK_FIRST_N"
  | "MASK_LAST_N"
  | "VALIDATE_NON_NULL"
  | "VALIDATE_NON_ZERO"
  | "VALIDATE_NON_NEGATIVE"
  | "VALIDATE_NUMERIC"
  | "NO_OP";
export interface SalesforceSourceProperties {
  Object: string;
  EnableDynamicFieldUpdate?: boolean;
  IncludeDeletedRecords?: boolean;
}
export interface ScheduledTriggerProperties {
  ScheduleExpression: string;
  DataPullMode?: DataPullMode;
  ScheduleStartTime?: Date | string;
  ScheduleEndTime?: Date | string;
  Timezone?: string;
  ScheduleOffset?: number;
  FirstExecutionFrom?: Date | string;
}
export type ScheduleExpression = string;

export type ScheduleOffset = number;

export interface SearchProfilesRequest {
  NextToken?: string;
  MaxResults?: number;
  DomainName: string;
  KeyName: string;
  Values: Array<string>;
  AdditionalSearchKeys?: Array<AdditionalSearchKey>;
  LogicalOperator?: logicalOperator;
}
export interface SearchProfilesResponse {
  Items?: Array<Profile>;
  NextToken?: string;
}
export type SegmentDefinitionArn = string;

export interface SegmentDefinitionItem {
  SegmentDefinitionName?: string;
  DisplayName?: string;
  Description?: string;
  SegmentDefinitionArn?: string;
  CreatedAt?: Date | string;
  Tags?: Record<string, string>;
}
export type SegmentDefinitionsList = Array<SegmentDefinitionItem>;
export interface SegmentGroup {
  Groups?: Array<Group>;
  Include?: IncludeOptions;
}
export type SegmentGroupList = Array<Group>;
export interface SegmentGroupStructure {
  Groups?: Array<Group>;
  Include?: IncludeOptions;
}
export type SegmentSnapshotStatus = "COMPLETED" | "IN_PROGRESS" | "FAILED";
export type sensitiveString0To1000 = string;

export type sensitiveString0To255 = string;

export type sensitiveString1To1000 = string;

export type sensitiveString1To2000000 = string;

export type sensitiveString1To255 = string;

export type sensitiveText = string;

export type ServiceNowConnectorOperator =
  | "PROJECTION"
  | "CONTAINS"
  | "LESS_THAN"
  | "GREATER_THAN"
  | "BETWEEN"
  | "LESS_THAN_OR_EQUAL_TO"
  | "GREATER_THAN_OR_EQUAL_TO"
  | "EQUAL_TO"
  | "NOT_EQUAL_TO"
  | "ADDITION"
  | "MULTIPLICATION"
  | "DIVISION"
  | "SUBTRACTION"
  | "MASK_ALL"
  | "MASK_FIRST_N"
  | "MASK_LAST_N"
  | "VALIDATE_NON_NULL"
  | "VALIDATE_NON_ZERO"
  | "VALIDATE_NON_NEGATIVE"
  | "VALIDATE_NUMERIC"
  | "NO_OP";
export interface ServiceNowSourceProperties {
  Object: string;
}
export interface SourceConnectorProperties {
  Marketo?: MarketoSourceProperties;
  S3?: S3SourceProperties;
  Salesforce?: SalesforceSourceProperties;
  ServiceNow?: ServiceNowSourceProperties;
  Zendesk?: ZendeskSourceProperties;
}
export type SourceConnectorType =
  | "SALESFORCE"
  | "MARKETO"
  | "ZENDESK"
  | "SERVICENOW"
  | "S3";
export type SourceFields = Array<string>;
export interface SourceFlowConfig {
  ConnectorProfileName?: string;
  ConnectorType: SourceConnectorType;
  IncrementalPullConfig?: IncrementalPullConfig;
  SourceConnectorProperties: SourceConnectorProperties;
}
export interface SourceSegment {
  SegmentDefinitionName?: string;
}
export type SourceSegmentList = Array<SourceSegment>;
export type sqsQueueUrl = string;

export type StandardIdentifier =
  | "PROFILE"
  | "ASSET"
  | "CASE"
  | "ORDER"
  | "COMMUNICATION_RECORD"
  | "AIR_PREFERENCE"
  | "HOTEL_PREFERENCE"
  | "AIR_BOOKING"
  | "AIR_SEGMENT"
  | "HOTEL_RESERVATION"
  | "HOTEL_STAY_REVENUE"
  | "LOYALTY"
  | "LOYALTY_TRANSACTION"
  | "LOYALTY_PROMOTION"
  | "UNIQUE"
  | "SECONDARY"
  | "LOOKUP_ONLY"
  | "NEW_ONLY";
export type StandardIdentifierList = Array<StandardIdentifier>;
export type Start = number;

export interface StartUploadJobRequest {
  DomainName: string;
  JobId: string;
}
export interface StartUploadJobResponse {}
export type Statistic =
  | "FIRST_OCCURRENCE"
  | "LAST_OCCURRENCE"
  | "COUNT"
  | "SUM"
  | "MINIMUM"
  | "MAXIMUM"
  | "AVERAGE"
  | "MAX_OCCURRENCE";
export type Status =
  | "NOT_STARTED"
  | "IN_PROGRESS"
  | "COMPLETE"
  | "FAILED"
  | "SPLIT"
  | "RETRY"
  | "CANCELLED";
export type StatusCode = number;

export type StatusReason = "VALIDATION_FAILURE" | "INTERNAL_FAILURE";
export interface StopUploadJobRequest {
  DomainName: string;
  JobId: string;
}
export interface StopUploadJobResponse {}
export type string0To255 = string;

export type string1To1000 = string;

export type string1To255 = string;

export type StringDimensionType =
  | "INCLUSIVE"
  | "EXCLUSIVE"
  | "CONTAINS"
  | "BEGINS_WITH"
  | "ENDS_WITH";
export type stringifiedJson = string;

export type stringTo2048 = string;

export type TagArn = string;

export type TagKey = string;

export type TagKeyList = Array<string>;
export type TagMap = Record<string, string>;
export interface TagResourceRequest {
  resourceArn: string;
  tags: Record<string, string>;
}
export interface TagResourceResponse {}
export type TagValue = string;

export interface Task {
  ConnectorOperator?: ConnectorOperator;
  DestinationField?: string;
  SourceFields: Array<string>;
  TaskProperties?: Record<OperatorPropertiesKeys, string>;
  TaskType: TaskType;
}
export type TaskPropertiesMap = Record<OperatorPropertiesKeys, string>;
export type Tasks = Array<Task>;
export type TaskType =
  | "ARITHMETIC"
  | "FILTER"
  | "MAP"
  | "MASK"
  | "MERGE"
  | "TRUNCATE"
  | "VALIDATE";
export type text = string;

export interface Threshold {
  Value: string;
  Operator: Operator;
}
export declare class ThrottlingException extends EffectData.TaggedError(
  "ThrottlingException",
)<{
  readonly Message?: string;
}> {}
export type timestamp = Date | string;

export type Timezone = string;

export type token = string;

export interface TriggerConfig {
  TriggerType: TriggerType;
  TriggerProperties?: TriggerProperties;
}
export interface TriggerProperties {
  Scheduled?: ScheduledTriggerProperties;
}
export type TriggerType = "SCHEDULED" | "EVENT" | "ONDEMAND";
export type Type = "ALL" | "ANY" | "NONE";
export type typeName = string;

export interface UntagResourceRequest {
  resourceArn: string;
  tagKeys: Array<string>;
}
export interface UntagResourceResponse {}
export interface UpdateAddress {
  Address1?: string;
  Address2?: string;
  Address3?: string;
  Address4?: string;
  City?: string;
  County?: string;
  State?: string;
  Province?: string;
  Country?: string;
  PostalCode?: string;
}
export type UpdateAttributes = Record<string, string>;
export interface UpdateCalculatedAttributeDefinitionRequest {
  DomainName: string;
  CalculatedAttributeName: string;
  DisplayName?: string;
  Description?: string;
  Conditions?: Conditions;
}
export interface UpdateCalculatedAttributeDefinitionResponse {
  CalculatedAttributeName?: string;
  DisplayName?: string;
  Description?: string;
  CreatedAt?: Date | string;
  LastUpdatedAt?: Date | string;
  Statistic?: Statistic;
  Conditions?: Conditions;
  AttributeDetails?: AttributeDetails;
  UseHistoricalData?: boolean;
  Status?: ReadinessStatus;
  Readiness?: Readiness;
  Tags?: Record<string, string>;
}
export interface UpdateDomainLayoutRequest {
  DomainName: string;
  LayoutDefinitionName: string;
  Description?: string;
  DisplayName?: string;
  IsDefault?: boolean;
  LayoutType?: LayoutType;
  Layout?: string;
}
export interface UpdateDomainLayoutResponse {
  LayoutDefinitionName?: string;
  Description?: string;
  DisplayName?: string;
  IsDefault?: boolean;
  LayoutType?: LayoutType;
  Layout?: string;
  Version?: string;
  CreatedAt?: Date | string;
  LastUpdatedAt?: Date | string;
  Tags?: Record<string, string>;
}
export interface UpdateDomainRequest {
  DomainName: string;
  DefaultExpirationDays?: number;
  DefaultEncryptionKey?: string;
  DeadLetterQueueUrl?: string;
  Matching?: MatchingRequest;
  RuleBasedMatching?: RuleBasedMatchingRequest;
  Tags?: Record<string, string>;
}
export interface UpdateDomainResponse {
  DomainName: string;
  DefaultExpirationDays?: number;
  DefaultEncryptionKey?: string;
  DeadLetterQueueUrl?: string;
  Matching?: MatchingResponse;
  RuleBasedMatching?: RuleBasedMatchingResponse;
  CreatedAt: Date | string;
  LastUpdatedAt: Date | string;
  Tags?: Record<string, string>;
}
export interface UpdateEventTriggerRequest {
  DomainName: string;
  EventTriggerName: string;
  ObjectTypeName?: string;
  Description?: string;
  EventTriggerConditions?: Array<EventTriggerCondition>;
  SegmentFilter?: string;
  EventTriggerLimits?: EventTriggerLimits;
}
export interface UpdateEventTriggerResponse {
  EventTriggerName?: string;
  ObjectTypeName?: string;
  Description?: string;
  EventTriggerConditions?: Array<EventTriggerCondition>;
  SegmentFilter?: string;
  EventTriggerLimits?: EventTriggerLimits;
  CreatedAt?: Date | string;
  LastUpdatedAt?: Date | string;
  Tags?: Record<string, string>;
}
export interface UpdateProfileRequest {
  DomainName: string;
  ProfileId: string;
  AdditionalInformation?: string;
  AccountNumber?: string;
  PartyType?: PartyType;
  BusinessName?: string;
  FirstName?: string;
  MiddleName?: string;
  LastName?: string;
  BirthDate?: string;
  Gender?: Gender;
  PhoneNumber?: string;
  MobilePhoneNumber?: string;
  HomePhoneNumber?: string;
  BusinessPhoneNumber?: string;
  EmailAddress?: string;
  PersonalEmailAddress?: string;
  BusinessEmailAddress?: string;
  Address?: UpdateAddress;
  ShippingAddress?: UpdateAddress;
  MailingAddress?: UpdateAddress;
  BillingAddress?: UpdateAddress;
  Attributes?: Record<string, string>;
  PartyTypeString?: string;
  GenderString?: string;
}
export interface UpdateProfileResponse {
  ProfileId: string;
}
export interface UploadJobItem {
  JobId?: string;
  DisplayName?: string;
  Status?: UploadJobStatus;
  StatusReason?: StatusReason;
  CreatedAt?: Date | string;
  CompletedAt?: Date | string;
  DataExpiry?: number;
}
export type UploadJobsList = Array<UploadJobItem>;
export type UploadJobStatus =
  | "CREATED"
  | "IN_PROGRESS"
  | "PARTIALLY_SUCCEEDED"
  | "SUCCEEDED"
  | "FAILED"
  | "STOPPED";
export type uuid = string;

export type Value = number;

export type ValueList = Array<string>;
export interface ValueRange {
  Start: number;
  End: number;
}
export type ValueRangeEnd = number;

export type ValueRangeStart = number;

export type Values = Array<string>;
export interface WorkflowAttributes {
  AppflowIntegration?: AppflowIntegrationWorkflowAttributes;
}
export type WorkflowList = Array<ListWorkflowsItem>;
export interface WorkflowMetrics {
  AppflowIntegration?: AppflowIntegrationWorkflowMetrics;
}
export interface WorkflowStepItem {
  AppflowIntegration?: AppflowIntegrationWorkflowStep;
}
export type WorkflowStepsList = Array<WorkflowStepItem>;
export type WorkflowType = "APPFLOW_INTEGRATION";
export type ZendeskConnectorOperator =
  | "PROJECTION"
  | "GREATER_THAN"
  | "ADDITION"
  | "MULTIPLICATION"
  | "DIVISION"
  | "SUBTRACTION"
  | "MASK_ALL"
  | "MASK_FIRST_N"
  | "MASK_LAST_N"
  | "VALIDATE_NON_NULL"
  | "VALIDATE_NON_ZERO"
  | "VALIDATE_NON_NEGATIVE"
  | "VALIDATE_NUMERIC"
  | "NO_OP";
export interface ZendeskSourceProperties {
  Object: string;
}
export declare namespace AddProfileKey {
  export type Input = AddProfileKeyRequest;
  export type Output = AddProfileKeyResponse;
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
  export type Output = BatchGetCalculatedAttributeForProfileResponse;
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
  export type Output = BatchGetProfileResponse;
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
  export type Output = CreateCalculatedAttributeDefinitionResponse;
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
  export type Output = CreateDomainResponse;
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
  export type Output = CreateDomainLayoutResponse;
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
  export type Output = CreateEventStreamResponse;
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
  export type Output = CreateEventTriggerResponse;
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
  export type Output = CreateIntegrationWorkflowResponse;
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
  export type Output = CreateProfileResponse;
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
  export type Output = CreateSegmentDefinitionResponse;
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
  export type Output = CreateSegmentEstimateResponse;
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
  export type Output = CreateSegmentSnapshotResponse;
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
  export type Output = CreateUploadJobResponse;
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
  export type Output = DeleteCalculatedAttributeDefinitionResponse;
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
  export type Output = DeleteDomainResponse;
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
  export type Output = DeleteDomainLayoutResponse;
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
  export type Output = DeleteEventStreamResponse;
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
  export type Output = DeleteEventTriggerResponse;
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
  export type Output = DeleteIntegrationResponse;
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
  export type Output = DeleteProfileResponse;
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
  export type Output = DeleteProfileKeyResponse;
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
  export type Output = DeleteProfileObjectResponse;
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
  export type Output = DeleteProfileObjectTypeResponse;
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
  export type Output = DeleteSegmentDefinitionResponse;
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
  export type Output = DeleteWorkflowResponse;
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
  export type Output = DetectProfileObjectTypeResponse;
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
  export type Output = GetAutoMergingPreviewResponse;
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
  export type Output = GetCalculatedAttributeDefinitionResponse;
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
  export type Output = GetCalculatedAttributeForProfileResponse;
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
  export type Output = GetDomainResponse;
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
  export type Output = GetDomainLayoutResponse;
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
  export type Output = GetEventStreamResponse;
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
  export type Output = GetEventTriggerResponse;
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
  export type Output = GetIdentityResolutionJobResponse;
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
  export type Output = GetIntegrationResponse;
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
  export type Output = GetMatchesResponse;
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
  export type Output = GetProfileObjectTypeResponse;
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
  export type Output = GetProfileObjectTypeTemplateResponse;
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
  export type Output = GetSegmentDefinitionResponse;
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
  export type Output = GetSegmentEstimateResponse;
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
  export type Output = GetSegmentMembershipResponse;
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
  export type Output = GetSegmentSnapshotResponse;
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
  export type Output = GetSimilarProfilesResponse;
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
  export type Output = GetUploadJobResponse;
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
  export type Output = GetUploadJobPathResponse;
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
  export type Output = GetWorkflowResponse;
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
  export type Output = GetWorkflowStepsResponse;
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
  export type Output = ListAccountIntegrationsResponse;
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
  export type Output = ListCalculatedAttributeDefinitionsResponse;
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
  export type Output = ListCalculatedAttributesForProfileResponse;
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
  export type Output = ListDomainLayoutsResponse;
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
  export type Output = ListDomainsResponse;
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
  export type Output = ListEventStreamsResponse;
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
  export type Output = ListEventTriggersResponse;
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
  export type Output = ListIdentityResolutionJobsResponse;
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
  export type Output = ListIntegrationsResponse;
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
  export type Output = ListObjectTypeAttributesResponse;
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
  export type Output = ProfileAttributeValuesResponse;
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
  export type Output = ListProfileObjectsResponse;
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
  export type Output = ListProfileObjectTypesResponse;
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
  export type Output = ListProfileObjectTypeTemplatesResponse;
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
  export type Output = ListRuleBasedMatchesResponse;
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
  export type Output = ListSegmentDefinitionsResponse;
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
  export type Output = ListTagsForResourceResponse;
  export type Error =
    | BadRequestException
    | InternalServerException
    | ResourceNotFoundException
    | CommonAwsError;
}

export declare namespace ListUploadJobs {
  export type Input = ListUploadJobsRequest;
  export type Output = ListUploadJobsResponse;
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
  export type Output = ListWorkflowsResponse;
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
  export type Output = MergeProfilesResponse;
  export type Error =
    | BadRequestException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError;
}

export declare namespace PutIntegration {
  export type Input = PutIntegrationRequest;
  export type Output = PutIntegrationResponse;
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
  export type Output = PutProfileObjectResponse;
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
  export type Output = PutProfileObjectTypeResponse;
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
  export type Output = SearchProfilesResponse;
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
  export type Output = StartUploadJobResponse;
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
  export type Output = StopUploadJobResponse;
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
  export type Output = TagResourceResponse;
  export type Error =
    | BadRequestException
    | InternalServerException
    | ResourceNotFoundException
    | CommonAwsError;
}

export declare namespace UntagResource {
  export type Input = UntagResourceRequest;
  export type Output = UntagResourceResponse;
  export type Error =
    | BadRequestException
    | InternalServerException
    | ResourceNotFoundException
    | CommonAwsError;
}

export declare namespace UpdateCalculatedAttributeDefinition {
  export type Input = UpdateCalculatedAttributeDefinitionRequest;
  export type Output = UpdateCalculatedAttributeDefinitionResponse;
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
  export type Output = UpdateDomainResponse;
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
  export type Output = UpdateDomainLayoutResponse;
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
  export type Output = UpdateEventTriggerResponse;
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
  export type Output = UpdateProfileResponse;
  export type Error =
    | AccessDeniedException
    | BadRequestException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError;
}
