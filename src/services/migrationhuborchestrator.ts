import type { Effect, Data as EffectData } from "effect";
import type { CommonAwsError } from "../error.ts";
import { AWSServiceClient } from "../client.ts";

export declare class MigrationHubOrchestrator extends AWSServiceClient {
  listTagsForResource(
    input: ListTagsForResourceRequest,
  ): Effect.Effect<
    ListTagsForResourceResponse,
    ResourceNotFoundException | ValidationException | CommonAwsError
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
}

export declare class Migrationhuborchestrator extends MigrationHubOrchestrator {}

export declare class AccessDeniedException extends EffectData.TaggedError(
  "AccessDeniedException",
)<{
  readonly message: string;
}> {}
export type ApplicationConfigurationName = string;

export type ClientToken = string;

export declare class ConflictException extends EffectData.TaggedError(
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
export interface DeleteTemplateResponse {}
export interface DeleteWorkflowStepGroupRequest {
  workflowId: string;
  id: string;
}
export interface DeleteWorkflowStepGroupResponse {}
export interface DeleteWorkflowStepRequest {
  id: string;
  stepGroupId: string;
  workflowId: string;
}
export interface DeleteWorkflowStepResponse {}
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
export declare class InternalServerException extends EffectData.TaggedError(
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

export declare class ResourceNotFoundException extends EffectData.TaggedError(
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

interface _StepInput {
  integerValue?: number;
  stringValue?: string;
  listOfStringsValue?: Array<string>;
  mapOfStringValue?: Record<string, string>;
}

export type StepInput =
  | (_StepInput & { integerValue: number })
  | (_StepInput & { stringValue: string })
  | (_StepInput & { listOfStringsValue: Array<string> })
  | (_StepInput & { mapOfStringValue: Record<string, string> });
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
export interface TagResourceResponse {}
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

interface _TemplateSource {
  workflowId?: string;
}

export type TemplateSource = _TemplateSource & { workflowId: string };
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
export declare class ThrottlingException extends EffectData.TaggedError(
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
export interface UntagResourceResponse {}
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
export declare class ValidationException extends EffectData.TaggedError(
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

interface _WorkflowStepOutputUnion {
  integerValue?: number;
  stringValue?: string;
  listOfStringValue?: Array<string>;
}

export type WorkflowStepOutputUnion =
  | (_WorkflowStepOutputUnion & { integerValue: number })
  | (_WorkflowStepOutputUnion & { stringValue: string })
  | (_WorkflowStepOutputUnion & { listOfStringValue: Array<string> });
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
export declare namespace ListTagsForResource {
  export type Input = ListTagsForResourceRequest;
  export type Output = ListTagsForResourceResponse;
  export type Error =
    | ResourceNotFoundException
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
