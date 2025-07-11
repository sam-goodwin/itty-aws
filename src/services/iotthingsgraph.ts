import type { Effect, Data } from "effect";
import type { CommonAwsError } from "../client.ts";

export interface IotThingsGraphFrontEndService {
  associateEntityToThing(
    input: AssociateEntityToThingRequest,
  ): Effect.Effect<
    AssociateEntityToThingResponse,
    InternalFailureException | InvalidRequestException | ResourceNotFoundException | ThrottlingException | CommonAwsError
  >;
  createFlowTemplate(
    input: CreateFlowTemplateRequest,
  ): Effect.Effect<
    CreateFlowTemplateResponse,
    InternalFailureException | InvalidRequestException | LimitExceededException | ResourceAlreadyExistsException | ThrottlingException | CommonAwsError
  >;
  createSystemInstance(
    input: CreateSystemInstanceRequest,
  ): Effect.Effect<
    CreateSystemInstanceResponse,
    InternalFailureException | InvalidRequestException | LimitExceededException | ResourceAlreadyExistsException | ThrottlingException | CommonAwsError
  >;
  createSystemTemplate(
    input: CreateSystemTemplateRequest,
  ): Effect.Effect<
    CreateSystemTemplateResponse,
    InternalFailureException | InvalidRequestException | ResourceAlreadyExistsException | ThrottlingException | CommonAwsError
  >;
  deleteFlowTemplate(
    input: DeleteFlowTemplateRequest,
  ): Effect.Effect<
    DeleteFlowTemplateResponse,
    InternalFailureException | InvalidRequestException | ResourceInUseException | ThrottlingException | CommonAwsError
  >;
  deleteNamespace(
    input: DeleteNamespaceRequest,
  ): Effect.Effect<
    DeleteNamespaceResponse,
    InternalFailureException | ThrottlingException | CommonAwsError
  >;
  deleteSystemInstance(
    input: DeleteSystemInstanceRequest,
  ): Effect.Effect<
    DeleteSystemInstanceResponse,
    InternalFailureException | InvalidRequestException | ResourceInUseException | ThrottlingException | CommonAwsError
  >;
  deleteSystemTemplate(
    input: DeleteSystemTemplateRequest,
  ): Effect.Effect<
    DeleteSystemTemplateResponse,
    InternalFailureException | InvalidRequestException | ResourceInUseException | ThrottlingException | CommonAwsError
  >;
  deploySystemInstance(
    input: DeploySystemInstanceRequest,
  ): Effect.Effect<
    DeploySystemInstanceResponse,
    InternalFailureException | InvalidRequestException | ResourceInUseException | ResourceNotFoundException | ThrottlingException | CommonAwsError
  >;
  deprecateFlowTemplate(
    input: DeprecateFlowTemplateRequest,
  ): Effect.Effect<
    DeprecateFlowTemplateResponse,
    InternalFailureException | InvalidRequestException | ResourceNotFoundException | ThrottlingException | CommonAwsError
  >;
  deprecateSystemTemplate(
    input: DeprecateSystemTemplateRequest,
  ): Effect.Effect<
    DeprecateSystemTemplateResponse,
    InternalFailureException | InvalidRequestException | ResourceNotFoundException | ThrottlingException | CommonAwsError
  >;
  describeNamespace(
    input: DescribeNamespaceRequest,
  ): Effect.Effect<
    DescribeNamespaceResponse,
    InternalFailureException | InvalidRequestException | ResourceNotFoundException | ThrottlingException | CommonAwsError
  >;
  dissociateEntityFromThing(
    input: DissociateEntityFromThingRequest,
  ): Effect.Effect<
    DissociateEntityFromThingResponse,
    InternalFailureException | InvalidRequestException | ResourceNotFoundException | ThrottlingException | CommonAwsError
  >;
  getEntities(
    input: GetEntitiesRequest,
  ): Effect.Effect<
    GetEntitiesResponse,
    InternalFailureException | InvalidRequestException | ResourceNotFoundException | ThrottlingException | CommonAwsError
  >;
  getFlowTemplate(
    input: GetFlowTemplateRequest,
  ): Effect.Effect<
    GetFlowTemplateResponse,
    InternalFailureException | InvalidRequestException | ResourceNotFoundException | ThrottlingException | CommonAwsError
  >;
  getFlowTemplateRevisions(
    input: GetFlowTemplateRevisionsRequest,
  ): Effect.Effect<
    GetFlowTemplateRevisionsResponse,
    InternalFailureException | InvalidRequestException | ResourceNotFoundException | ThrottlingException | CommonAwsError
  >;
  getNamespaceDeletionStatus(
    input: GetNamespaceDeletionStatusRequest,
  ): Effect.Effect<
    GetNamespaceDeletionStatusResponse,
    InternalFailureException | InvalidRequestException | ThrottlingException | CommonAwsError
  >;
  getSystemInstance(
    input: GetSystemInstanceRequest,
  ): Effect.Effect<
    GetSystemInstanceResponse,
    InternalFailureException | InvalidRequestException | ResourceNotFoundException | ThrottlingException | CommonAwsError
  >;
  getSystemTemplate(
    input: GetSystemTemplateRequest,
  ): Effect.Effect<
    GetSystemTemplateResponse,
    InternalFailureException | InvalidRequestException | ResourceNotFoundException | ThrottlingException | CommonAwsError
  >;
  getSystemTemplateRevisions(
    input: GetSystemTemplateRevisionsRequest,
  ): Effect.Effect<
    GetSystemTemplateRevisionsResponse,
    InternalFailureException | InvalidRequestException | ResourceNotFoundException | ThrottlingException | CommonAwsError
  >;
  getUploadStatus(
    input: GetUploadStatusRequest,
  ): Effect.Effect<
    GetUploadStatusResponse,
    InternalFailureException | InvalidRequestException | ResourceNotFoundException | ThrottlingException | CommonAwsError
  >;
  listFlowExecutionMessages(
    input: ListFlowExecutionMessagesRequest,
  ): Effect.Effect<
    ListFlowExecutionMessagesResponse,
    InternalFailureException | InvalidRequestException | ResourceNotFoundException | ThrottlingException | CommonAwsError
  >;
  listTagsForResource(
    input: ListTagsForResourceRequest,
  ): Effect.Effect<
    ListTagsForResourceResponse,
    InternalFailureException | InvalidRequestException | ResourceAlreadyExistsException | ThrottlingException | CommonAwsError
  >;
  searchEntities(
    input: SearchEntitiesRequest,
  ): Effect.Effect<
    SearchEntitiesResponse,
    InternalFailureException | InvalidRequestException | ThrottlingException | CommonAwsError
  >;
  searchFlowExecutions(
    input: SearchFlowExecutionsRequest,
  ): Effect.Effect<
    SearchFlowExecutionsResponse,
    InternalFailureException | InvalidRequestException | ResourceNotFoundException | ThrottlingException | CommonAwsError
  >;
  searchFlowTemplates(
    input: SearchFlowTemplatesRequest,
  ): Effect.Effect<
    SearchFlowTemplatesResponse,
    InternalFailureException | InvalidRequestException | ThrottlingException | CommonAwsError
  >;
  searchSystemInstances(
    input: SearchSystemInstancesRequest,
  ): Effect.Effect<
    SearchSystemInstancesResponse,
    InternalFailureException | InvalidRequestException | ThrottlingException | CommonAwsError
  >;
  searchSystemTemplates(
    input: SearchSystemTemplatesRequest,
  ): Effect.Effect<
    SearchSystemTemplatesResponse,
    InternalFailureException | InvalidRequestException | ThrottlingException | CommonAwsError
  >;
  searchThings(
    input: SearchThingsRequest,
  ): Effect.Effect<
    SearchThingsResponse,
    InternalFailureException | InvalidRequestException | ResourceNotFoundException | ThrottlingException | CommonAwsError
  >;
  tagResource(
    input: TagResourceRequest,
  ): Effect.Effect<
    TagResourceResponse,
    InternalFailureException | InvalidRequestException | ResourceAlreadyExistsException | ThrottlingException | CommonAwsError
  >;
  undeploySystemInstance(
    input: UndeploySystemInstanceRequest,
  ): Effect.Effect<
    UndeploySystemInstanceResponse,
    InternalFailureException | InvalidRequestException | ResourceInUseException | ResourceNotFoundException | ThrottlingException | CommonAwsError
  >;
  untagResource(
    input: UntagResourceRequest,
  ): Effect.Effect<
    UntagResourceResponse,
    InternalFailureException | InvalidRequestException | ResourceAlreadyExistsException | ThrottlingException | CommonAwsError
  >;
  updateFlowTemplate(
    input: UpdateFlowTemplateRequest,
  ): Effect.Effect<
    UpdateFlowTemplateResponse,
    InternalFailureException | InvalidRequestException | ResourceNotFoundException | ThrottlingException | CommonAwsError
  >;
  updateSystemTemplate(
    input: UpdateSystemTemplateRequest,
  ): Effect.Effect<
    UpdateSystemTemplateResponse,
    InternalFailureException | InvalidRequestException | ResourceNotFoundException | ThrottlingException | CommonAwsError
  >;
  uploadEntityDefinitions(
    input: UploadEntityDefinitionsRequest,
  ): Effect.Effect<
    UploadEntityDefinitionsResponse,
    InternalFailureException | InvalidRequestException | ThrottlingException | CommonAwsError
  >;
}

export type Iotthingsgraph = IotThingsGraphFrontEndService;

export type Arn = string;

export interface AssociateEntityToThingRequest {
  thingName: string;
  entityId: string;
  namespaceVersion?: number;
}
export interface AssociateEntityToThingResponse {
}
export interface CreateFlowTemplateRequest {
  definition: DefinitionDocument;
  compatibleNamespaceVersion?: number;
}
export interface CreateFlowTemplateResponse {
  summary?: FlowTemplateSummary;
}
export interface CreateSystemInstanceRequest {
  tags?: Array<Tag>;
  definition: DefinitionDocument;
  target: DeploymentTarget;
  greengrassGroupName?: string;
  s3BucketName?: string;
  metricsConfiguration?: MetricsConfiguration;
  flowActionsRoleArn?: string;
}
export interface CreateSystemInstanceResponse {
  summary?: SystemInstanceSummary;
}
export interface CreateSystemTemplateRequest {
  definition: DefinitionDocument;
  compatibleNamespaceVersion?: number;
}
export interface CreateSystemTemplateResponse {
  summary?: SystemTemplateSummary;
}
export interface DefinitionDocument {
  language: DefinitionLanguage;
  text: string;
}
export type DefinitionLanguage = "GRAPHQL";
export type DefinitionText = string;

export interface DeleteFlowTemplateRequest {
  id: string;
}
export interface DeleteFlowTemplateResponse {
}
export interface DeleteNamespaceRequest {
}
export interface DeleteNamespaceResponse {
  namespaceArn?: string;
  namespaceName?: string;
}
export interface DeleteSystemInstanceRequest {
  id?: string;
}
export interface DeleteSystemInstanceResponse {
}
export interface DeleteSystemTemplateRequest {
  id: string;
}
export interface DeleteSystemTemplateResponse {
}
export interface DependencyRevision {
  id?: string;
  revisionNumber?: number;
}
export type DependencyRevisions = Array<DependencyRevision>;
export type DeploymentTarget = "GREENGRASS" | "CLOUD";
export interface DeploySystemInstanceRequest {
  id?: string;
}
export interface DeploySystemInstanceResponse {
  summary: SystemInstanceSummary;
  greengrassDeploymentId?: string;
}
export type DeprecateExistingEntities = boolean;

export interface DeprecateFlowTemplateRequest {
  id: string;
}
export interface DeprecateFlowTemplateResponse {
}
export interface DeprecateSystemTemplateRequest {
  id: string;
}
export interface DeprecateSystemTemplateResponse {
}
export interface DescribeNamespaceRequest {
  namespaceName?: string;
}
export interface DescribeNamespaceResponse {
  namespaceArn?: string;
  namespaceName?: string;
  trackingNamespaceName?: string;
  trackingNamespaceVersion?: number;
  namespaceVersion?: number;
}
export interface DissociateEntityFromThingRequest {
  thingName: string;
  entityType: EntityType;
}
export interface DissociateEntityFromThingResponse {
}
export type Enabled = boolean;

export interface EntityDescription {
  id?: string;
  arn?: string;
  type?: EntityType;
  createdAt?: Date | string;
  definition?: DefinitionDocument;
}
export type EntityDescriptions = Array<EntityDescription>;
export interface EntityFilter {
  name?: EntityFilterName;
  value?: Array<string>;
}
export type EntityFilterName = "NAME" | "NAMESPACE" | "SEMANTIC_TYPE_PATH" | "REFERENCED_ENTITY_ID";
export type EntityFilters = Array<EntityFilter>;
export type EntityFilterValue = string;

export type EntityFilterValues = Array<string>;
export type EntityType = "DEVICE" | "SERVICE" | "DEVICE_MODEL" | "CAPABILITY" | "STATE" | "ACTION" | "EVENT" | "PROPERTY" | "MAPPING" | "ENUM";
export type EntityTypes = Array<EntityType>;
export type ErrorMessage = string;

export type FlowExecutionEventType = "EXECUTION_STARTED" | "EXECUTION_FAILED" | "EXECUTION_ABORTED" | "EXECUTION_SUCCEEDED" | "STEP_STARTED" | "STEP_FAILED" | "STEP_SUCCEEDED" | "ACTIVITY_SCHEDULED" | "ACTIVITY_STARTED" | "ACTIVITY_FAILED" | "ACTIVITY_SUCCEEDED" | "START_FLOW_EXECUTION_TASK" | "SCHEDULE_NEXT_READY_STEPS_TASK" | "THING_ACTION_TASK" | "THING_ACTION_TASK_FAILED" | "THING_ACTION_TASK_SUCCEEDED" | "ACKNOWLEDGE_TASK_MESSAGE";
export type FlowExecutionId = string;

export interface FlowExecutionMessage {
  messageId?: string;
  eventType?: FlowExecutionEventType;
  timestamp?: Date | string;
  payload?: string;
}
export type FlowExecutionMessageId = string;

export type FlowExecutionMessagePayload = string;

export type FlowExecutionMessages = Array<FlowExecutionMessage>;
export type FlowExecutionStatus = "RUNNING" | "ABORTED" | "SUCCEEDED" | "FAILED";
export type FlowExecutionSummaries = Array<FlowExecutionSummary>;
export interface FlowExecutionSummary {
  flowExecutionId?: string;
  status?: FlowExecutionStatus;
  systemInstanceId?: string;
  flowTemplateId?: string;
  createdAt?: Date | string;
  updatedAt?: Date | string;
}
export interface FlowTemplateDescription {
  summary?: FlowTemplateSummary;
  definition?: DefinitionDocument;
  validatedNamespaceVersion?: number;
}
export interface FlowTemplateFilter {
  name: FlowTemplateFilterName;
  value: Array<string>;
}
export type FlowTemplateFilterName = "DEVICE_MODEL_ID";
export type FlowTemplateFilters = Array<FlowTemplateFilter>;
export type FlowTemplateFilterValue = string;

export type FlowTemplateFilterValues = Array<string>;
export type FlowTemplateSummaries = Array<FlowTemplateSummary>;
export interface FlowTemplateSummary {
  id?: string;
  arn?: string;
  revisionNumber?: number;
  createdAt?: Date | string;
}
export interface GetEntitiesRequest {
  ids: Array<string>;
  namespaceVersion?: number;
}
export interface GetEntitiesResponse {
  descriptions?: Array<EntityDescription>;
}
export interface GetFlowTemplateRequest {
  id: string;
  revisionNumber?: number;
}
export interface GetFlowTemplateResponse {
  description?: FlowTemplateDescription;
}
export interface GetFlowTemplateRevisionsRequest {
  id: string;
  nextToken?: string;
  maxResults?: number;
}
export interface GetFlowTemplateRevisionsResponse {
  summaries?: Array<FlowTemplateSummary>;
  nextToken?: string;
}
export interface GetNamespaceDeletionStatusRequest {
}
export interface GetNamespaceDeletionStatusResponse {
  namespaceArn?: string;
  namespaceName?: string;
  status?: NamespaceDeletionStatus;
  errorCode?: NamespaceDeletionStatusErrorCodes;
  errorMessage?: string;
}
export interface GetSystemInstanceRequest {
  id: string;
}
export interface GetSystemInstanceResponse {
  description?: SystemInstanceDescription;
}
export interface GetSystemTemplateRequest {
  id: string;
  revisionNumber?: number;
}
export interface GetSystemTemplateResponse {
  description?: SystemTemplateDescription;
}
export interface GetSystemTemplateRevisionsRequest {
  id: string;
  nextToken?: string;
  maxResults?: number;
}
export interface GetSystemTemplateRevisionsResponse {
  summaries?: Array<SystemTemplateSummary>;
  nextToken?: string;
}
export interface GetUploadStatusRequest {
  uploadId: string;
}
export interface GetUploadStatusResponse {
  uploadId: string;
  uploadStatus: UploadStatus;
  namespaceArn?: string;
  namespaceName?: string;
  namespaceVersion?: number;
  failureReason?: Array<string>;
  createdDate: Date | string;
}
export type GreengrassDeploymentId = string;

export type GreengrassGroupId = string;

export type GreengrassGroupVersionId = string;

export type GroupName = string;

export declare class InternalFailureException extends Data.TaggedError(
  "InternalFailureException",
)<{
  readonly message?: string;
}> {}
export declare class InvalidRequestException extends Data.TaggedError(
  "InvalidRequestException",
)<{
  readonly message?: string;
}> {}
export declare class LimitExceededException extends Data.TaggedError(
  "LimitExceededException",
)<{
  readonly message?: string;
}> {}
export interface ListFlowExecutionMessagesRequest {
  flowExecutionId: string;
  nextToken?: string;
  maxResults?: number;
}
export interface ListFlowExecutionMessagesResponse {
  messages?: Array<FlowExecutionMessage>;
  nextToken?: string;
}
export interface ListTagsForResourceRequest {
  maxResults?: number;
  resourceArn: string;
  nextToken?: string;
}
export interface ListTagsForResourceResponse {
  tags?: Array<Tag>;
  nextToken?: string;
}
export type MaxResults = number;

export interface MetricsConfiguration {
  cloudMetricEnabled?: boolean;
  metricRuleRoleArn?: string;
}
export type NamespaceDeletionStatus = "IN_PROGRESS" | "SUCCEEDED" | "FAILED";
export type NamespaceDeletionStatusErrorCodes = "VALIDATION_FAILED";
export type NamespaceName = string;

export type NextToken = string;

export declare class ResourceAlreadyExistsException extends Data.TaggedError(
  "ResourceAlreadyExistsException",
)<{
  readonly message?: string;
}> {}
export type ResourceArn = string;

export declare class ResourceInUseException extends Data.TaggedError(
  "ResourceInUseException",
)<{
  readonly message?: string;
}> {}
export declare class ResourceNotFoundException extends Data.TaggedError(
  "ResourceNotFoundException",
)<{
  readonly message?: string;
}> {}
export type RoleArn = string;

export type S3BucketName = string;

export interface SearchEntitiesRequest {
  entityTypes: Array<EntityType>;
  filters?: Array<EntityFilter>;
  nextToken?: string;
  maxResults?: number;
  namespaceVersion?: number;
}
export interface SearchEntitiesResponse {
  descriptions?: Array<EntityDescription>;
  nextToken?: string;
}
export interface SearchFlowExecutionsRequest {
  systemInstanceId: string;
  flowExecutionId?: string;
  startTime?: Date | string;
  endTime?: Date | string;
  nextToken?: string;
  maxResults?: number;
}
export interface SearchFlowExecutionsResponse {
  summaries?: Array<FlowExecutionSummary>;
  nextToken?: string;
}
export interface SearchFlowTemplatesRequest {
  filters?: Array<FlowTemplateFilter>;
  nextToken?: string;
  maxResults?: number;
}
export interface SearchFlowTemplatesResponse {
  summaries?: Array<FlowTemplateSummary>;
  nextToken?: string;
}
export interface SearchSystemInstancesRequest {
  filters?: Array<SystemInstanceFilter>;
  nextToken?: string;
  maxResults?: number;
}
export interface SearchSystemInstancesResponse {
  summaries?: Array<SystemInstanceSummary>;
  nextToken?: string;
}
export interface SearchSystemTemplatesRequest {
  filters?: Array<SystemTemplateFilter>;
  nextToken?: string;
  maxResults?: number;
}
export interface SearchSystemTemplatesResponse {
  summaries?: Array<SystemTemplateSummary>;
  nextToken?: string;
}
export interface SearchThingsRequest {
  entityId: string;
  nextToken?: string;
  maxResults?: number;
  namespaceVersion?: number;
}
export interface SearchThingsResponse {
  things?: Array<Thing>;
  nextToken?: string;
}
export type StringList = Array<string>;
export type SyncWithPublicNamespace = boolean;

export type SystemInstanceDeploymentStatus = "NOT_DEPLOYED" | "BOOTSTRAP" | "DEPLOY_IN_PROGRESS" | "DEPLOYED_IN_TARGET" | "UNDEPLOY_IN_PROGRESS" | "FAILED" | "PENDING_DELETE" | "DELETED_IN_TARGET";
export interface SystemInstanceDescription {
  summary?: SystemInstanceSummary;
  definition?: DefinitionDocument;
  s3BucketName?: string;
  metricsConfiguration?: MetricsConfiguration;
  validatedNamespaceVersion?: number;
  validatedDependencyRevisions?: Array<DependencyRevision>;
  flowActionsRoleArn?: string;
}
export interface SystemInstanceFilter {
  name?: SystemInstanceFilterName;
  value?: Array<string>;
}
export type SystemInstanceFilterName = "SYSTEM_TEMPLATE_ID" | "STATUS" | "GREENGRASS_GROUP_NAME";
export type SystemInstanceFilters = Array<SystemInstanceFilter>;
export type SystemInstanceFilterValue = string;

export type SystemInstanceFilterValues = Array<string>;
export type SystemInstanceSummaries = Array<SystemInstanceSummary>;
export interface SystemInstanceSummary {
  id?: string;
  arn?: string;
  status?: SystemInstanceDeploymentStatus;
  target?: DeploymentTarget;
  greengrassGroupName?: string;
  createdAt?: Date | string;
  updatedAt?: Date | string;
  greengrassGroupId?: string;
  greengrassGroupVersionId?: string;
}
export interface SystemTemplateDescription {
  summary?: SystemTemplateSummary;
  definition?: DefinitionDocument;
  validatedNamespaceVersion?: number;
}
export interface SystemTemplateFilter {
  name: SystemTemplateFilterName;
  value: Array<string>;
}
export type SystemTemplateFilterName = "FLOW_TEMPLATE_ID";
export type SystemTemplateFilters = Array<SystemTemplateFilter>;
export type SystemTemplateFilterValue = string;

export type SystemTemplateFilterValues = Array<string>;
export type SystemTemplateSummaries = Array<SystemTemplateSummary>;
export interface SystemTemplateSummary {
  id?: string;
  arn?: string;
  revisionNumber?: number;
  createdAt?: Date | string;
}
export interface Tag {
  key: string;
  value: string;
}
export type TagKey = string;

export type TagKeyList = Array<string>;
export type TagList = Array<Tag>;
export interface TagResourceRequest {
  resourceArn: string;
  tags: Array<Tag>;
}
export interface TagResourceResponse {
}
export type TagValue = string;

export interface Thing {
  thingArn?: string;
  thingName?: string;
}
export type ThingArn = string;

export type ThingName = string;

export type Things = Array<Thing>;
export declare class ThrottlingException extends Data.TaggedError(
  "ThrottlingException",
)<{
  readonly message?: string;
}> {}
export type Timestamp = Date | string;

export interface UndeploySystemInstanceRequest {
  id?: string;
}
export interface UndeploySystemInstanceResponse {
  summary?: SystemInstanceSummary;
}
export interface UntagResourceRequest {
  resourceArn: string;
  tagKeys: Array<string>;
}
export interface UntagResourceResponse {
}
export interface UpdateFlowTemplateRequest {
  id: string;
  definition: DefinitionDocument;
  compatibleNamespaceVersion?: number;
}
export interface UpdateFlowTemplateResponse {
  summary?: FlowTemplateSummary;
}
export interface UpdateSystemTemplateRequest {
  id: string;
  definition: DefinitionDocument;
  compatibleNamespaceVersion?: number;
}
export interface UpdateSystemTemplateResponse {
  summary?: SystemTemplateSummary;
}
export interface UploadEntityDefinitionsRequest {
  document?: DefinitionDocument;
  syncWithPublicNamespace?: boolean;
  deprecateExistingEntities?: boolean;
}
export interface UploadEntityDefinitionsResponse {
  uploadId: string;
}
export type UploadId = string;

export type UploadStatus = "IN_PROGRESS" | "SUCCEEDED" | "FAILED";
export type Urn = string;

export type Urns = Array<string>;
export type Version = number;

export declare namespace AssociateEntityToThing {
  export type Input = AssociateEntityToThingRequest;
  export type Output = AssociateEntityToThingResponse;
  export type Error =
    | InternalFailureException
    | InvalidRequestException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError;
}

export declare namespace CreateFlowTemplate {
  export type Input = CreateFlowTemplateRequest;
  export type Output = CreateFlowTemplateResponse;
  export type Error =
    | InternalFailureException
    | InvalidRequestException
    | LimitExceededException
    | ResourceAlreadyExistsException
    | ThrottlingException
    | CommonAwsError;
}

export declare namespace CreateSystemInstance {
  export type Input = CreateSystemInstanceRequest;
  export type Output = CreateSystemInstanceResponse;
  export type Error =
    | InternalFailureException
    | InvalidRequestException
    | LimitExceededException
    | ResourceAlreadyExistsException
    | ThrottlingException
    | CommonAwsError;
}

export declare namespace CreateSystemTemplate {
  export type Input = CreateSystemTemplateRequest;
  export type Output = CreateSystemTemplateResponse;
  export type Error =
    | InternalFailureException
    | InvalidRequestException
    | ResourceAlreadyExistsException
    | ThrottlingException
    | CommonAwsError;
}

export declare namespace DeleteFlowTemplate {
  export type Input = DeleteFlowTemplateRequest;
  export type Output = DeleteFlowTemplateResponse;
  export type Error =
    | InternalFailureException
    | InvalidRequestException
    | ResourceInUseException
    | ThrottlingException
    | CommonAwsError;
}

export declare namespace DeleteNamespace {
  export type Input = DeleteNamespaceRequest;
  export type Output = DeleteNamespaceResponse;
  export type Error =
    | InternalFailureException
    | ThrottlingException
    | CommonAwsError;
}

export declare namespace DeleteSystemInstance {
  export type Input = DeleteSystemInstanceRequest;
  export type Output = DeleteSystemInstanceResponse;
  export type Error =
    | InternalFailureException
    | InvalidRequestException
    | ResourceInUseException
    | ThrottlingException
    | CommonAwsError;
}

export declare namespace DeleteSystemTemplate {
  export type Input = DeleteSystemTemplateRequest;
  export type Output = DeleteSystemTemplateResponse;
  export type Error =
    | InternalFailureException
    | InvalidRequestException
    | ResourceInUseException
    | ThrottlingException
    | CommonAwsError;
}

export declare namespace DeploySystemInstance {
  export type Input = DeploySystemInstanceRequest;
  export type Output = DeploySystemInstanceResponse;
  export type Error =
    | InternalFailureException
    | InvalidRequestException
    | ResourceInUseException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError;
}

export declare namespace DeprecateFlowTemplate {
  export type Input = DeprecateFlowTemplateRequest;
  export type Output = DeprecateFlowTemplateResponse;
  export type Error =
    | InternalFailureException
    | InvalidRequestException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError;
}

export declare namespace DeprecateSystemTemplate {
  export type Input = DeprecateSystemTemplateRequest;
  export type Output = DeprecateSystemTemplateResponse;
  export type Error =
    | InternalFailureException
    | InvalidRequestException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError;
}

export declare namespace DescribeNamespace {
  export type Input = DescribeNamespaceRequest;
  export type Output = DescribeNamespaceResponse;
  export type Error =
    | InternalFailureException
    | InvalidRequestException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError;
}

export declare namespace DissociateEntityFromThing {
  export type Input = DissociateEntityFromThingRequest;
  export type Output = DissociateEntityFromThingResponse;
  export type Error =
    | InternalFailureException
    | InvalidRequestException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError;
}

export declare namespace GetEntities {
  export type Input = GetEntitiesRequest;
  export type Output = GetEntitiesResponse;
  export type Error =
    | InternalFailureException
    | InvalidRequestException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError;
}

export declare namespace GetFlowTemplate {
  export type Input = GetFlowTemplateRequest;
  export type Output = GetFlowTemplateResponse;
  export type Error =
    | InternalFailureException
    | InvalidRequestException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError;
}

export declare namespace GetFlowTemplateRevisions {
  export type Input = GetFlowTemplateRevisionsRequest;
  export type Output = GetFlowTemplateRevisionsResponse;
  export type Error =
    | InternalFailureException
    | InvalidRequestException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError;
}

export declare namespace GetNamespaceDeletionStatus {
  export type Input = GetNamespaceDeletionStatusRequest;
  export type Output = GetNamespaceDeletionStatusResponse;
  export type Error =
    | InternalFailureException
    | InvalidRequestException
    | ThrottlingException
    | CommonAwsError;
}

export declare namespace GetSystemInstance {
  export type Input = GetSystemInstanceRequest;
  export type Output = GetSystemInstanceResponse;
  export type Error =
    | InternalFailureException
    | InvalidRequestException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError;
}

export declare namespace GetSystemTemplate {
  export type Input = GetSystemTemplateRequest;
  export type Output = GetSystemTemplateResponse;
  export type Error =
    | InternalFailureException
    | InvalidRequestException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError;
}

export declare namespace GetSystemTemplateRevisions {
  export type Input = GetSystemTemplateRevisionsRequest;
  export type Output = GetSystemTemplateRevisionsResponse;
  export type Error =
    | InternalFailureException
    | InvalidRequestException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError;
}

export declare namespace GetUploadStatus {
  export type Input = GetUploadStatusRequest;
  export type Output = GetUploadStatusResponse;
  export type Error =
    | InternalFailureException
    | InvalidRequestException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError;
}

export declare namespace ListFlowExecutionMessages {
  export type Input = ListFlowExecutionMessagesRequest;
  export type Output = ListFlowExecutionMessagesResponse;
  export type Error =
    | InternalFailureException
    | InvalidRequestException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError;
}

export declare namespace ListTagsForResource {
  export type Input = ListTagsForResourceRequest;
  export type Output = ListTagsForResourceResponse;
  export type Error =
    | InternalFailureException
    | InvalidRequestException
    | ResourceAlreadyExistsException
    | ThrottlingException
    | CommonAwsError;
}

export declare namespace SearchEntities {
  export type Input = SearchEntitiesRequest;
  export type Output = SearchEntitiesResponse;
  export type Error =
    | InternalFailureException
    | InvalidRequestException
    | ThrottlingException
    | CommonAwsError;
}

export declare namespace SearchFlowExecutions {
  export type Input = SearchFlowExecutionsRequest;
  export type Output = SearchFlowExecutionsResponse;
  export type Error =
    | InternalFailureException
    | InvalidRequestException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError;
}

export declare namespace SearchFlowTemplates {
  export type Input = SearchFlowTemplatesRequest;
  export type Output = SearchFlowTemplatesResponse;
  export type Error =
    | InternalFailureException
    | InvalidRequestException
    | ThrottlingException
    | CommonAwsError;
}

export declare namespace SearchSystemInstances {
  export type Input = SearchSystemInstancesRequest;
  export type Output = SearchSystemInstancesResponse;
  export type Error =
    | InternalFailureException
    | InvalidRequestException
    | ThrottlingException
    | CommonAwsError;
}

export declare namespace SearchSystemTemplates {
  export type Input = SearchSystemTemplatesRequest;
  export type Output = SearchSystemTemplatesResponse;
  export type Error =
    | InternalFailureException
    | InvalidRequestException
    | ThrottlingException
    | CommonAwsError;
}

export declare namespace SearchThings {
  export type Input = SearchThingsRequest;
  export type Output = SearchThingsResponse;
  export type Error =
    | InternalFailureException
    | InvalidRequestException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError;
}

export declare namespace TagResource {
  export type Input = TagResourceRequest;
  export type Output = TagResourceResponse;
  export type Error =
    | InternalFailureException
    | InvalidRequestException
    | ResourceAlreadyExistsException
    | ThrottlingException
    | CommonAwsError;
}

export declare namespace UndeploySystemInstance {
  export type Input = UndeploySystemInstanceRequest;
  export type Output = UndeploySystemInstanceResponse;
  export type Error =
    | InternalFailureException
    | InvalidRequestException
    | ResourceInUseException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError;
}

export declare namespace UntagResource {
  export type Input = UntagResourceRequest;
  export type Output = UntagResourceResponse;
  export type Error =
    | InternalFailureException
    | InvalidRequestException
    | ResourceAlreadyExistsException
    | ThrottlingException
    | CommonAwsError;
}

export declare namespace UpdateFlowTemplate {
  export type Input = UpdateFlowTemplateRequest;
  export type Output = UpdateFlowTemplateResponse;
  export type Error =
    | InternalFailureException
    | InvalidRequestException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError;
}

export declare namespace UpdateSystemTemplate {
  export type Input = UpdateSystemTemplateRequest;
  export type Output = UpdateSystemTemplateResponse;
  export type Error =
    | InternalFailureException
    | InvalidRequestException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError;
}

export declare namespace UploadEntityDefinitions {
  export type Input = UploadEntityDefinitionsRequest;
  export type Output = UploadEntityDefinitionsResponse;
  export type Error =
    | InternalFailureException
    | InvalidRequestException
    | ThrottlingException
    | CommonAwsError;
}

