import type { Effect, Data } from "effect";
import type { CommonAwsError } from "../client.ts";

export interface AWSMigrationHubOrchestrator {
  createTemplate(
    input: CreateTemplateRequest,
  ): Effect.Effect<
    CreateTemplateResponse,
    AccessDeniedException | ConflictException | InternalServerException | ThrottlingException | ValidationException | CommonAwsError
  >;
  createWorkflow(
    input: CreateMigrationWorkflowRequest,
  ): Effect.Effect<
    CreateMigrationWorkflowResponse,
    AccessDeniedException | InternalServerException | ThrottlingException | ValidationException | CommonAwsError
  >;
  createWorkflowStep(
    input: CreateWorkflowStepRequest,
  ): Effect.Effect<
    CreateWorkflowStepResponse,
    AccessDeniedException | InternalServerException | ThrottlingException | ValidationException | CommonAwsError
  >;
  createWorkflowStepGroup(
    input: CreateWorkflowStepGroupRequest,
  ): Effect.Effect<
    CreateWorkflowStepGroupResponse,
    AccessDeniedException | InternalServerException | ThrottlingException | ValidationException | CommonAwsError
  >;
  deleteTemplate(
    input: DeleteTemplateRequest,
  ): Effect.Effect<
    DeleteTemplateResponse,
    AccessDeniedException | InternalServerException | ResourceNotFoundException | ThrottlingException | ValidationException | CommonAwsError
  >;
  deleteWorkflow(
    input: DeleteMigrationWorkflowRequest,
  ): Effect.Effect<
    DeleteMigrationWorkflowResponse,
    AccessDeniedException | InternalServerException | ResourceNotFoundException | ThrottlingException | ValidationException | CommonAwsError
  >;
  deleteWorkflowStep(
    input: DeleteWorkflowStepRequest,
  ): Effect.Effect<
    DeleteWorkflowStepResponse,
    AccessDeniedException | InternalServerException | ResourceNotFoundException | ThrottlingException | ValidationException | CommonAwsError
  >;
  deleteWorkflowStepGroup(
    input: DeleteWorkflowStepGroupRequest,
  ): Effect.Effect<
    DeleteWorkflowStepGroupResponse,
    AccessDeniedException | InternalServerException | ResourceNotFoundException | ThrottlingException | ValidationException | CommonAwsError
  >;
  getTemplate(
    input: GetMigrationWorkflowTemplateRequest,
  ): Effect.Effect<
    GetMigrationWorkflowTemplateResponse,
    AccessDeniedException | InternalServerException | ResourceNotFoundException | ThrottlingException | CommonAwsError
  >;
  getTemplateStep(
    input: GetTemplateStepRequest,
  ): Effect.Effect<
    GetTemplateStepResponse,
    AccessDeniedException | InternalServerException | ResourceNotFoundException | ThrottlingException | ValidationException | CommonAwsError
  >;
  getTemplateStepGroup(
    input: GetTemplateStepGroupRequest,
  ): Effect.Effect<
    GetTemplateStepGroupResponse,
    AccessDeniedException | InternalServerException | ResourceNotFoundException | ThrottlingException | ValidationException | CommonAwsError
  >;
  getWorkflow(
    input: GetMigrationWorkflowRequest,
  ): Effect.Effect<
    GetMigrationWorkflowResponse,
    AccessDeniedException | InternalServerException | ResourceNotFoundException | ThrottlingException | ValidationException | CommonAwsError
  >;
  getWorkflowStep(
    input: GetWorkflowStepRequest,
  ): Effect.Effect<
    GetWorkflowStepResponse,
    AccessDeniedException | InternalServerException | ResourceNotFoundException | ThrottlingException | CommonAwsError
  >;
  getWorkflowStepGroup(
    input: GetWorkflowStepGroupRequest,
  ): Effect.Effect<
    GetWorkflowStepGroupResponse,
    AccessDeniedException | InternalServerException | ResourceNotFoundException | ThrottlingException | ValidationException | CommonAwsError
  >;
  listPlugins(
    input: ListPluginsRequest,
  ): Effect.Effect<
    ListPluginsResponse,
    AccessDeniedException | InternalServerException | ValidationException | CommonAwsError
  >;
  listTagsForResource(
    input: ListTagsForResourceRequest,
  ): Effect.Effect<
    ListTagsForResourceResponse,
    ResourceNotFoundException | ValidationException | CommonAwsError
  >;
  listTemplateStepGroups(
    input: ListTemplateStepGroupsRequest,
  ): Effect.Effect<
    ListTemplateStepGroupsResponse,
    AccessDeniedException | InternalServerException | ResourceNotFoundException | ThrottlingException | CommonAwsError
  >;
  listTemplateSteps(
    input: ListTemplateStepsRequest,
  ): Effect.Effect<
    ListTemplateStepsResponse,
    AccessDeniedException | InternalServerException | ResourceNotFoundException | ThrottlingException | ValidationException | CommonAwsError
  >;
  listTemplates(
    input: ListMigrationWorkflowTemplatesRequest,
  ): Effect.Effect<
    ListMigrationWorkflowTemplatesResponse,
    AccessDeniedException | InternalServerException | ThrottlingException | CommonAwsError
  >;
  listWorkflowStepGroups(
    input: ListWorkflowStepGroupsRequest,
  ): Effect.Effect<
    ListWorkflowStepGroupsResponse,
    AccessDeniedException | InternalServerException | ResourceNotFoundException | ThrottlingException | ValidationException | CommonAwsError
  >;
  listWorkflowSteps(
    input: ListWorkflowStepsRequest,
  ): Effect.Effect<
    ListWorkflowStepsResponse,
    AccessDeniedException | InternalServerException | ThrottlingException | ValidationException | CommonAwsError
  >;
  listWorkflows(
    input: ListMigrationWorkflowsRequest,
  ): Effect.Effect<
    ListMigrationWorkflowsResponse,
    AccessDeniedException | InternalServerException | ResourceNotFoundException | ThrottlingException | ValidationException | CommonAwsError
  >;
  retryWorkflowStep(
    input: RetryWorkflowStepRequest,
  ): Effect.Effect<
    RetryWorkflowStepResponse,
    AccessDeniedException | InternalServerException | ResourceNotFoundException | ThrottlingException | CommonAwsError
  >;
  startWorkflow(
    input: StartMigrationWorkflowRequest,
  ): Effect.Effect<
    StartMigrationWorkflowResponse,
    AccessDeniedException | InternalServerException | ResourceNotFoundException | ThrottlingException | ValidationException | CommonAwsError
  >;
  stopWorkflow(
    input: StopMigrationWorkflowRequest,
  ): Effect.Effect<
    StopMigrationWorkflowResponse,
    AccessDeniedException | InternalServerException | ResourceNotFoundException | ThrottlingException | ValidationException | CommonAwsError
  >;
  tagResource(
    input: TagResourceRequest,
  ): Effect.Effect<
    TagResourceResponse,
    ResourceNotFoundException | ValidationException | CommonAwsError
  >;
  untagResource(
    input: UntagResourceRequest,
  ): Effect.Effect<
    UntagResourceResponse,
    ResourceNotFoundException | ValidationException | CommonAwsError
  >;
  updateTemplate(
    input: UpdateTemplateRequest,
  ): Effect.Effect<
    UpdateTemplateResponse,
    AccessDeniedException | InternalServerException | ResourceNotFoundException | ThrottlingException | ValidationException | CommonAwsError
  >;
  updateWorkflow(
    input: UpdateMigrationWorkflowRequest,
  ): Effect.Effect<
    UpdateMigrationWorkflowResponse,
    AccessDeniedException | InternalServerException | ResourceNotFoundException | ThrottlingException | ValidationException | CommonAwsError
  >;
  updateWorkflowStep(
    input: UpdateWorkflowStepRequest,
  ): Effect.Effect<
    UpdateWorkflowStepResponse,
    AccessDeniedException | InternalServerException | ThrottlingException | ValidationException | CommonAwsError
  >;
  updateWorkflowStepGroup(
    input: UpdateWorkflowStepGroupRequest,
  ): Effect.Effect<
    UpdateWorkflowStepGroupResponse,
    AccessDeniedException | InternalServerException | ResourceNotFoundException | ThrottlingException | ValidationException | CommonAwsError
  >;
}

export type Migrationhuborchestrator = AWSMigrationHubOrchestrator;

export declare class AccessDeniedException extends Data.TaggedError(
  "AccessDeniedException",
)<{
  readonly message: string;
}> {}
export type ApplicationConfigurationName = string;

export type ClientToken = string;

export declare class ConflictException extends Data.TaggedError(
  "ConflictException",
)<{
  readonly message: string;
}> {}
export interface CreateMigrationWorkflowRequest {
  name: string;
  description?: string;
  templateId: string;
  applicationConfigurationId?: string;
  inputParameters: Record<string, StepInput>;
  stepTargets?: Array<string>;
  tags?: Record<string, string>;
}
export interface CreateMigrationWorkflowResponse {
  id?: string;
  arn?: string;
  name?: string;
  description?: string;
  templateId?: string;
  adsApplicationConfigurationId?: string;
  workflowInputs?: Record<string, StepInput>;
  stepTargets?: Array<string>;
  status?: string;
  creationTime?: Date | string;
  tags?: Record<string, string>;
}
export interface CreateTemplateRequest {
  templateName: string;
  templateDescription?: string;
  templateSource: TemplateSource;
  clientToken?: string;
  tags?: Record<string, string>;
}
export interface CreateTemplateResponse {
  templateId?: string;
  templateArn?: string;
  tags?: Record<string, string>;
}
export interface CreateWorkflowStepGroupRequest {
  workflowId: string;
  name: string;
  description?: string;
  next?: Array<string>;
  previous?: Array<string>;
}
export interface CreateWorkflowStepGroupResponse {
  workflowId?: string;
  name?: string;
  id?: string;
  description?: string;
  tools?: Array<Tool>;
  next?: Array<string>;
  previous?: Array<string>;
  creationTime?: Date | string;
}
export interface CreateWorkflowStepRequest {
  name: string;
  stepGroupId: string;
  workflowId: string;
  stepActionType: string;
  description?: string;
  workflowStepAutomationConfiguration?: WorkflowStepAutomationConfiguration;
  stepTarget?: Array<string>;
  outputs?: Array<WorkflowStepOutput>;
  previous?: Array<string>;
  next?: Array<string>;
}
export interface CreateWorkflowStepResponse {
  id?: string;
  stepGroupId?: string;
  workflowId?: string;
  name?: string;
}
export type DataType = string;

export interface DeleteMigrationWorkflowRequest {
  id: string;
}
export interface DeleteMigrationWorkflowResponse {
  id?: string;
  arn?: string;
  status?: string;
}
export interface DeleteTemplateRequest {
  id: string;
}
export interface DeleteTemplateResponse {
}
export interface DeleteWorkflowStepGroupRequest {
  workflowId: string;
  id: string;
}
export interface DeleteWorkflowStepGroupResponse {
}
export interface DeleteWorkflowStepRequest {
  id: string;
  stepGroupId: string;
  workflowId: string;
}
export interface DeleteWorkflowStepResponse {
}
export interface GetMigrationWorkflowRequest {
  id: string;
}
export interface GetMigrationWorkflowResponse {
  id?: string;
  arn?: string;
  name?: string;
  description?: string;
  templateId?: string;
  adsApplicationConfigurationId?: string;
  adsApplicationName?: string;
  status?: string;
  statusMessage?: string;
  creationTime?: Date | string;
  lastStartTime?: Date | string;
  lastStopTime?: Date | string;
  lastModifiedTime?: Date | string;
  endTime?: Date | string;
  tools?: Array<Tool>;
  totalSteps?: number;
  completedSteps?: number;
  workflowInputs?: Record<string, StepInput>;
  tags?: Record<string, string>;
  workflowBucket?: string;
}
export interface GetMigrationWorkflowTemplateRequest {
  id: string;
}
export interface GetMigrationWorkflowTemplateResponse {
  id?: string;
  templateArn?: string;
  name?: string;
  description?: string;
  inputs?: Array<TemplateInput>;
  tools?: Array<Tool>;
  creationTime?: Date | string;
  owner?: string;
  status?: string;
  statusMessage?: string;
  templateClass?: string;
  tags?: Record<string, string>;
}
export interface GetTemplateStepGroupRequest {
  templateId: string;
  id: string;
}
export interface GetTemplateStepGroupResponse {
  templateId?: string;
  id?: string;
  name?: string;
  description?: string;
  status?: string;
  creationTime?: Date | string;
  lastModifiedTime?: Date | string;
  tools?: Array<Tool>;
  previous?: Array<string>;
  next?: Array<string>;
}
export interface GetTemplateStepRequest {
  id: string;
  templateId: string;
  stepGroupId: string;
}
export interface GetTemplateStepResponse {
  id?: string;
  stepGroupId?: string;
  templateId?: string;
  name?: string;
  description?: string;
  stepActionType?: string;
  creationTime?: string;
  previous?: Array<string>;
  next?: Array<string>;
  outputs?: Array<StepOutput>;
  stepAutomationConfiguration?: StepAutomationConfiguration;
}
export interface GetWorkflowStepGroupRequest {
  id: string;
  workflowId: string;
}
export interface GetWorkflowStepGroupResponse {
  id?: string;
  workflowId?: string;
  name?: string;
  description?: string;
  status?: string;
  owner?: string;
  creationTime?: Date | string;
  lastModifiedTime?: Date | string;
  endTime?: Date | string;
  tools?: Array<Tool>;
  previous?: Array<string>;
  next?: Array<string>;
}
export interface GetWorkflowStepRequest {
  workflowId: string;
  stepGroupId: string;
  id: string;
}
export interface GetWorkflowStepResponse {
  name?: string;
  stepGroupId?: string;
  workflowId?: string;
  stepId?: string;
  description?: string;
  stepActionType?: string;
  owner?: string;
  workflowStepAutomationConfiguration?: WorkflowStepAutomationConfiguration;
  stepTarget?: Array<string>;
  outputs?: Array<WorkflowStepOutput>;
  previous?: Array<string>;
  next?: Array<string>;
  status?: string;
  statusMessage?: string;
  scriptOutputLocation?: string;
  creationTime?: Date | string;
  lastStartTime?: Date | string;
  endTime?: Date | string;
  noOfSrvCompleted?: number;
  noOfSrvFailed?: number;
  totalNoOfSrv?: number;
}
export declare class InternalServerException extends Data.TaggedError(
  "InternalServerException",
)<{
  readonly message: string;
}> {}
export type IPAddress = string;

export interface ListMigrationWorkflowsRequest {
  maxResults?: number;
  nextToken?: string;
  templateId?: string;
  adsApplicationConfigurationName?: string;
  status?: string;
  name?: string;
}
export interface ListMigrationWorkflowsResponse {
  nextToken?: string;
  migrationWorkflowSummary: Array<MigrationWorkflowSummary>;
}
export interface ListMigrationWorkflowTemplatesRequest {
  maxResults?: number;
  nextToken?: string;
  name?: string;
}
export interface ListMigrationWorkflowTemplatesResponse {
  nextToken?: string;
  templateSummary: Array<TemplateSummary>;
}
export interface ListPluginsRequest {
  maxResults?: number;
  nextToken?: string;
}
export interface ListPluginsResponse {
  nextToken?: string;
  plugins?: Array<PluginSummary>;
}
export interface ListTagsForResourceRequest {
  resourceArn: string;
}
export interface ListTagsForResourceResponse {
  tags?: Record<string, string>;
}
export interface ListTemplateStepGroupsRequest {
  maxResults?: number;
  nextToken?: string;
  templateId: string;
}
export interface ListTemplateStepGroupsResponse {
  nextToken?: string;
  templateStepGroupSummary: Array<TemplateStepGroupSummary>;
}
export interface ListTemplateStepsRequest {
  maxResults?: number;
  nextToken?: string;
  templateId: string;
  stepGroupId: string;
}
export interface ListTemplateStepsResponse {
  nextToken?: string;
  templateStepSummaryList?: Array<TemplateStepSummary>;
}
export interface ListWorkflowStepGroupsRequest {
  nextToken?: string;
  maxResults?: number;
  workflowId: string;
}
export interface ListWorkflowStepGroupsResponse {
  nextToken?: string;
  workflowStepGroupsSummary: Array<WorkflowStepGroupSummary>;
}
export interface ListWorkflowStepsRequest {
  nextToken?: string;
  maxResults?: number;
  workflowId: string;
  stepGroupId: string;
}
export interface ListWorkflowStepsResponse {
  nextToken?: string;
  workflowStepsSummary: Array<WorkflowStepSummary>;
}
export type MaxResults = number;

export type MaxStringList = Array<string>;
export type MaxStringValue = string;

export type MigrationWorkflowDescription = string;

export type MigrationWorkflowId = string;

export type MigrationWorkflowName = string;

export type MigrationWorkflowStatusEnum = string;

export interface MigrationWorkflowSummary {
  id?: string;
  name?: string;
  templateId?: string;
  adsApplicationConfigurationName?: string;
  status?: string;
  creationTime?: Date | string;
  endTime?: Date | string;
  statusMessage?: string;
  completedSteps?: number;
  totalSteps?: number;
}
export type MigrationWorkflowSummaryList = Array<MigrationWorkflowSummary>;
export type NextToken = string;

export type Owner = string;

export interface PlatformCommand {
  linux?: string;
  windows?: string;
}
export interface PlatformScriptKey {
  linux?: string;
  windows?: string;
}
export type PluginHealth = string;

export type PluginId = string;

export type PluginSummaries = Array<PluginSummary>;
export interface PluginSummary {
  pluginId?: string;
  hostname?: string;
  status?: string;
  ipAddress?: string;
  version?: string;
  registeredTime?: string;
}
export type PluginVersion = string;

export type ResourceArn = string;

export declare class ResourceNotFoundException extends Data.TaggedError(
  "ResourceNotFoundException",
)<{
  readonly message: string;
}> {}
export interface RetryWorkflowStepRequest {
  workflowId: string;
  stepGroupId: string;
  id: string;
}
export interface RetryWorkflowStepResponse {
  stepGroupId?: string;
  workflowId?: string;
  id?: string;
  status?: string;
}
export type RunEnvironment = string;

export type S3Bucket = string;

export type S3Key = string;

export interface StartMigrationWorkflowRequest {
  id: string;
}
export interface StartMigrationWorkflowResponse {
  id?: string;
  arn?: string;
  status?: string;
  statusMessage?: string;
  lastStartTime?: Date | string;
}
export type StepActionType = string;

export interface StepAutomationConfiguration {
  scriptLocationS3Bucket?: string;
  scriptLocationS3Key?: PlatformScriptKey;
  command?: PlatformCommand;
  runEnvironment?: string;
  targetType?: string;
}
export type StepDescription = string;

export type StepGroupDescription = string;

export type StepGroupId = string;

export type StepGroupName = string;

export type StepGroupStatus = string;

export type StepId = string;

export type StepInput = { integerValue: number } | { stringValue: string } | { listOfStringsValue: Array<string> } | { mapOfStringValue: Record<string, string> };
export type StepInputParameters = Record<string, StepInput>;
export type StepInputParametersKey = string;

export type StepName = string;

export interface StepOutput {
  name?: string;
  dataType?: string;
  required?: boolean;
}
export type StepOutputList = Array<StepOutput>;
export type StepStatus = string;

export interface StopMigrationWorkflowRequest {
  id: string;
}
export interface StopMigrationWorkflowResponse {
  id?: string;
  arn?: string;
  status?: string;
  statusMessage?: string;
  lastStopTime?: Date | string;
}
export type StringList = Array<string>;
export type StringListMember = string;

export type StringMap = Record<string, string>;
export type StringMapKey = string;

export type StringMapValue = string;

export type StringValue = string;

export type TagKey = string;

export type TagKeyList = Array<string>;
export type TagMap = Record<string, string>;
export interface TagResourceRequest {
  resourceArn: string;
  tags: Record<string, string>;
}
export interface TagResourceResponse {
}
export type TagValue = string;

export type TargetType = string;

export type TemplateId = string;

export interface TemplateInput {
  inputName?: string;
  dataType?: string;
  required?: boolean;
}
export type TemplateInputList = Array<TemplateInput>;
export type TemplateInputName = string;

export type TemplateName = string;

export type TemplateSource = { workflowId: string };
export type TemplateStatus = string;

export interface TemplateStepGroupSummary {
  id?: string;
  name?: string;
  previous?: Array<string>;
  next?: Array<string>;
}
export type TemplateStepGroupSummaryList = Array<TemplateStepGroupSummary>;
export interface TemplateStepSummary {
  id?: string;
  stepGroupId?: string;
  templateId?: string;
  name?: string;
  stepActionType?: string;
  targetType?: string;
  owner?: string;
  previous?: Array<string>;
  next?: Array<string>;
}
export type TemplateStepSummaryList = Array<TemplateStepSummary>;
export interface TemplateSummary {
  id?: string;
  name?: string;
  arn?: string;
  description?: string;
}
export type TemplateSummaryList = Array<TemplateSummary>;
export declare class ThrottlingException extends Data.TaggedError(
  "ThrottlingException",
)<{
  readonly message: string;
}> {}
export interface Tool {
  name?: string;
  url?: string;
}
export type ToolsList = Array<Tool>;
export interface UntagResourceRequest {
  resourceArn: string;
  tagKeys: Array<string>;
}
export interface UntagResourceResponse {
}
export interface UpdateMigrationWorkflowRequest {
  id: string;
  name?: string;
  description?: string;
  inputParameters?: Record<string, StepInput>;
  stepTargets?: Array<string>;
}
export interface UpdateMigrationWorkflowResponse {
  id?: string;
  arn?: string;
  name?: string;
  description?: string;
  templateId?: string;
  adsApplicationConfigurationId?: string;
  workflowInputs?: Record<string, StepInput>;
  stepTargets?: Array<string>;
  status?: string;
  creationTime?: Date | string;
  lastModifiedTime?: Date | string;
  tags?: Record<string, string>;
}
export interface UpdateTemplateRequest {
  id: string;
  templateName?: string;
  templateDescription?: string;
  clientToken?: string;
}
export interface UpdateTemplateResponse {
  templateId?: string;
  templateArn?: string;
  tags?: Record<string, string>;
}
export interface UpdateWorkflowStepGroupRequest {
  workflowId: string;
  id: string;
  name?: string;
  description?: string;
  next?: Array<string>;
  previous?: Array<string>;
}
export interface UpdateWorkflowStepGroupResponse {
  workflowId?: string;
  name?: string;
  id?: string;
  description?: string;
  tools?: Array<Tool>;
  next?: Array<string>;
  previous?: Array<string>;
  lastModifiedTime?: Date | string;
}
export interface UpdateWorkflowStepRequest {
  id: string;
  stepGroupId: string;
  workflowId: string;
  name?: string;
  description?: string;
  stepActionType?: string;
  workflowStepAutomationConfiguration?: WorkflowStepAutomationConfiguration;
  stepTarget?: Array<string>;
  outputs?: Array<WorkflowStepOutput>;
  previous?: Array<string>;
  next?: Array<string>;
  status?: string;
}
export interface UpdateWorkflowStepResponse {
  id?: string;
  stepGroupId?: string;
  workflowId?: string;
  name?: string;
}
export declare class ValidationException extends Data.TaggedError(
  "ValidationException",
)<{
  readonly message: string;
}> {}
export interface WorkflowStepAutomationConfiguration {
  scriptLocationS3Bucket?: string;
  scriptLocationS3Key?: PlatformScriptKey;
  command?: PlatformCommand;
  runEnvironment?: string;
  targetType?: string;
}
export type WorkflowStepGroupsSummaryList = Array<WorkflowStepGroupSummary>;
export interface WorkflowStepGroupSummary {
  id?: string;
  name?: string;
  owner?: string;
  status?: string;
  previous?: Array<string>;
  next?: Array<string>;
}
export interface WorkflowStepOutput {
  name?: string;
  dataType?: string;
  required?: boolean;
  value?: WorkflowStepOutputUnion;
}
export type WorkflowStepOutputList = Array<WorkflowStepOutput>;
export type WorkflowStepOutputName = string;

export type WorkflowStepOutputUnion = { integerValue: number } | { stringValue: string } | { listOfStringValue: Array<string> };
export type WorkflowStepsSummaryList = Array<WorkflowStepSummary>;
export interface WorkflowStepSummary {
  stepId?: string;
  name?: string;
  stepActionType?: string;
  owner?: string;
  previous?: Array<string>;
  next?: Array<string>;
  status?: string;
  statusMessage?: string;
  noOfSrvCompleted?: number;
  noOfSrvFailed?: number;
  totalNoOfSrv?: number;
  description?: string;
  scriptLocation?: string;
}
export declare namespace CreateTemplate {
  export type Input = CreateTemplateRequest;
  export type Output = CreateTemplateResponse;
  export type Error =
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace CreateWorkflow {
  export type Input = CreateMigrationWorkflowRequest;
  export type Output = CreateMigrationWorkflowResponse;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace CreateWorkflowStep {
  export type Input = CreateWorkflowStepRequest;
  export type Output = CreateWorkflowStepResponse;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace CreateWorkflowStepGroup {
  export type Input = CreateWorkflowStepGroupRequest;
  export type Output = CreateWorkflowStepGroupResponse;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace DeleteTemplate {
  export type Input = DeleteTemplateRequest;
  export type Output = DeleteTemplateResponse;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace DeleteWorkflow {
  export type Input = DeleteMigrationWorkflowRequest;
  export type Output = DeleteMigrationWorkflowResponse;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace DeleteWorkflowStep {
  export type Input = DeleteWorkflowStepRequest;
  export type Output = DeleteWorkflowStepResponse;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace DeleteWorkflowStepGroup {
  export type Input = DeleteWorkflowStepGroupRequest;
  export type Output = DeleteWorkflowStepGroupResponse;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace GetTemplate {
  export type Input = GetMigrationWorkflowTemplateRequest;
  export type Output = GetMigrationWorkflowTemplateResponse;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError;
}

export declare namespace GetTemplateStep {
  export type Input = GetTemplateStepRequest;
  export type Output = GetTemplateStepResponse;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace GetTemplateStepGroup {
  export type Input = GetTemplateStepGroupRequest;
  export type Output = GetTemplateStepGroupResponse;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace GetWorkflow {
  export type Input = GetMigrationWorkflowRequest;
  export type Output = GetMigrationWorkflowResponse;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace GetWorkflowStep {
  export type Input = GetWorkflowStepRequest;
  export type Output = GetWorkflowStepResponse;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError;
}

export declare namespace GetWorkflowStepGroup {
  export type Input = GetWorkflowStepGroupRequest;
  export type Output = GetWorkflowStepGroupResponse;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace ListPlugins {
  export type Input = ListPluginsRequest;
  export type Output = ListPluginsResponse;
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
    | ResourceNotFoundException
    | ValidationException
    | CommonAwsError;
}

export declare namespace ListTemplateStepGroups {
  export type Input = ListTemplateStepGroupsRequest;
  export type Output = ListTemplateStepGroupsResponse;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError;
}

export declare namespace ListTemplateSteps {
  export type Input = ListTemplateStepsRequest;
  export type Output = ListTemplateStepsResponse;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace ListTemplates {
  export type Input = ListMigrationWorkflowTemplatesRequest;
  export type Output = ListMigrationWorkflowTemplatesResponse;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ThrottlingException
    | CommonAwsError;
}

export declare namespace ListWorkflowStepGroups {
  export type Input = ListWorkflowStepGroupsRequest;
  export type Output = ListWorkflowStepGroupsResponse;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace ListWorkflowSteps {
  export type Input = ListWorkflowStepsRequest;
  export type Output = ListWorkflowStepsResponse;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace ListWorkflows {
  export type Input = ListMigrationWorkflowsRequest;
  export type Output = ListMigrationWorkflowsResponse;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace RetryWorkflowStep {
  export type Input = RetryWorkflowStepRequest;
  export type Output = RetryWorkflowStepResponse;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError;
}

export declare namespace StartWorkflow {
  export type Input = StartMigrationWorkflowRequest;
  export type Output = StartMigrationWorkflowResponse;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace StopWorkflow {
  export type Input = StopMigrationWorkflowRequest;
  export type Output = StopMigrationWorkflowResponse;
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
    | ResourceNotFoundException
    | ValidationException
    | CommonAwsError;
}

export declare namespace UntagResource {
  export type Input = UntagResourceRequest;
  export type Output = UntagResourceResponse;
  export type Error =
    | ResourceNotFoundException
    | ValidationException
    | CommonAwsError;
}

export declare namespace UpdateTemplate {
  export type Input = UpdateTemplateRequest;
  export type Output = UpdateTemplateResponse;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace UpdateWorkflow {
  export type Input = UpdateMigrationWorkflowRequest;
  export type Output = UpdateMigrationWorkflowResponse;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace UpdateWorkflowStep {
  export type Input = UpdateWorkflowStepRequest;
  export type Output = UpdateWorkflowStepResponse;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace UpdateWorkflowStepGroup {
  export type Input = UpdateWorkflowStepGroupRequest;
  export type Output = UpdateWorkflowStepGroupResponse;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

