import type { Effect, Data as EffectData } from "effect";
import type { CommonAwsError } from "../error.ts";

export interface CloudFormation {
  activateOrganizationsAccess(
    input: ActivateOrganizationsAccessInput,
  ): Effect.Effect<
    ActivateOrganizationsAccessOutput,
    InvalidOperationException | OperationNotFoundException | CommonAwsError
  >;
  activateType(
    input: ActivateTypeInput,
  ): Effect.Effect<
    ActivateTypeOutput,
    CFNRegistryException | TypeNotFoundException | CommonAwsError
  >;
  batchDescribeTypeConfigurations(
    input: BatchDescribeTypeConfigurationsInput,
  ): Effect.Effect<
    BatchDescribeTypeConfigurationsOutput,
    CFNRegistryException | TypeConfigurationNotFoundException | CommonAwsError
  >;
  cancelUpdateStack(
    input: CancelUpdateStackInput,
  ): Effect.Effect<{}, TokenAlreadyExistsException | CommonAwsError>;
  continueUpdateRollback(
    input: ContinueUpdateRollbackInput,
  ): Effect.Effect<
    ContinueUpdateRollbackOutput,
    TokenAlreadyExistsException | CommonAwsError
  >;
  createChangeSet(
    input: CreateChangeSetInput,
  ): Effect.Effect<
    CreateChangeSetOutput,
    | AlreadyExistsException
    | InsufficientCapabilitiesException
    | LimitExceededException
    | CommonAwsError
  >;
  createGeneratedTemplate(
    input: CreateGeneratedTemplateInput,
  ): Effect.Effect<
    CreateGeneratedTemplateOutput,
    | AlreadyExistsException
    | ConcurrentResourcesLimitExceededException
    | LimitExceededException
    | CommonAwsError
  >;
  createStack(
    input: CreateStackInput,
  ): Effect.Effect<
    CreateStackOutput,
    | AlreadyExistsException
    | InsufficientCapabilitiesException
    | LimitExceededException
    | TokenAlreadyExistsException
    | CommonAwsError
  >;
  createStackInstances(
    input: CreateStackInstancesInput,
  ): Effect.Effect<
    CreateStackInstancesOutput,
    | InvalidOperationException
    | LimitExceededException
    | OperationIdAlreadyExistsException
    | OperationInProgressException
    | StackSetNotFoundException
    | StaleRequestException
    | CommonAwsError
  >;
  createStackRefactor(
    input: CreateStackRefactorInput,
  ): Effect.Effect<CreateStackRefactorOutput, CommonAwsError>;
  createStackSet(
    input: CreateStackSetInput,
  ): Effect.Effect<
    CreateStackSetOutput,
    | CreatedButModifiedException
    | LimitExceededException
    | NameAlreadyExistsException
    | CommonAwsError
  >;
  deactivateOrganizationsAccess(
    input: DeactivateOrganizationsAccessInput,
  ): Effect.Effect<
    DeactivateOrganizationsAccessOutput,
    InvalidOperationException | OperationNotFoundException | CommonAwsError
  >;
  deactivateType(
    input: DeactivateTypeInput,
  ): Effect.Effect<
    DeactivateTypeOutput,
    CFNRegistryException | TypeNotFoundException | CommonAwsError
  >;
  deleteChangeSet(
    input: DeleteChangeSetInput,
  ): Effect.Effect<
    DeleteChangeSetOutput,
    InvalidChangeSetStatusException | CommonAwsError
  >;
  deleteGeneratedTemplate(
    input: DeleteGeneratedTemplateInput,
  ): Effect.Effect<
    {},
    | ConcurrentResourcesLimitExceededException
    | GeneratedTemplateNotFoundException
    | CommonAwsError
  >;
  deleteStack(
    input: DeleteStackInput,
  ): Effect.Effect<{}, TokenAlreadyExistsException | CommonAwsError>;
  deleteStackInstances(
    input: DeleteStackInstancesInput,
  ): Effect.Effect<
    DeleteStackInstancesOutput,
    | InvalidOperationException
    | OperationIdAlreadyExistsException
    | OperationInProgressException
    | StackSetNotFoundException
    | StaleRequestException
    | CommonAwsError
  >;
  deleteStackSet(
    input: DeleteStackSetInput,
  ): Effect.Effect<
    DeleteStackSetOutput,
    OperationInProgressException | StackSetNotEmptyException | CommonAwsError
  >;
  deregisterType(
    input: DeregisterTypeInput,
  ): Effect.Effect<
    DeregisterTypeOutput,
    CFNRegistryException | TypeNotFoundException | CommonAwsError
  >;
  describeAccountLimits(
    input: DescribeAccountLimitsInput,
  ): Effect.Effect<DescribeAccountLimitsOutput, CommonAwsError>;
  describeChangeSet(
    input: DescribeChangeSetInput,
  ): Effect.Effect<
    DescribeChangeSetOutput,
    ChangeSetNotFoundException | CommonAwsError
  >;
  describeChangeSetHooks(
    input: DescribeChangeSetHooksInput,
  ): Effect.Effect<
    DescribeChangeSetHooksOutput,
    ChangeSetNotFoundException | CommonAwsError
  >;
  describeGeneratedTemplate(
    input: DescribeGeneratedTemplateInput,
  ): Effect.Effect<
    DescribeGeneratedTemplateOutput,
    GeneratedTemplateNotFoundException | CommonAwsError
  >;
  describeOrganizationsAccess(
    input: DescribeOrganizationsAccessInput,
  ): Effect.Effect<
    DescribeOrganizationsAccessOutput,
    InvalidOperationException | OperationNotFoundException | CommonAwsError
  >;
  describePublisher(
    input: DescribePublisherInput,
  ): Effect.Effect<
    DescribePublisherOutput,
    CFNRegistryException | CommonAwsError
  >;
  describeResourceScan(
    input: DescribeResourceScanInput,
  ): Effect.Effect<
    DescribeResourceScanOutput,
    ResourceScanNotFoundException | CommonAwsError
  >;
  describeStackDriftDetectionStatus(
    input: DescribeStackDriftDetectionStatusInput,
  ): Effect.Effect<DescribeStackDriftDetectionStatusOutput, CommonAwsError>;
  describeStackEvents(
    input: DescribeStackEventsInput,
  ): Effect.Effect<DescribeStackEventsOutput, CommonAwsError>;
  describeStackInstance(
    input: DescribeStackInstanceInput,
  ): Effect.Effect<
    DescribeStackInstanceOutput,
    StackInstanceNotFoundException | StackSetNotFoundException | CommonAwsError
  >;
  describeStackRefactor(
    input: DescribeStackRefactorInput,
  ): Effect.Effect<
    DescribeStackRefactorOutput,
    StackRefactorNotFoundException | CommonAwsError
  >;
  describeStackResource(
    input: DescribeStackResourceInput,
  ): Effect.Effect<DescribeStackResourceOutput, CommonAwsError>;
  describeStackResourceDrifts(
    input: DescribeStackResourceDriftsInput,
  ): Effect.Effect<DescribeStackResourceDriftsOutput, CommonAwsError>;
  describeStackResources(
    input: DescribeStackResourcesInput,
  ): Effect.Effect<DescribeStackResourcesOutput, CommonAwsError>;
  describeStacks(
    input: DescribeStacksInput,
  ): Effect.Effect<DescribeStacksOutput, CommonAwsError>;
  describeStackSet(
    input: DescribeStackSetInput,
  ): Effect.Effect<
    DescribeStackSetOutput,
    StackSetNotFoundException | CommonAwsError
  >;
  describeStackSetOperation(
    input: DescribeStackSetOperationInput,
  ): Effect.Effect<
    DescribeStackSetOperationOutput,
    OperationNotFoundException | StackSetNotFoundException | CommonAwsError
  >;
  describeType(
    input: DescribeTypeInput,
  ): Effect.Effect<
    DescribeTypeOutput,
    CFNRegistryException | TypeNotFoundException | CommonAwsError
  >;
  describeTypeRegistration(
    input: DescribeTypeRegistrationInput,
  ): Effect.Effect<
    DescribeTypeRegistrationOutput,
    CFNRegistryException | CommonAwsError
  >;
  detectStackDrift(
    input: DetectStackDriftInput,
  ): Effect.Effect<DetectStackDriftOutput, CommonAwsError>;
  detectStackResourceDrift(
    input: DetectStackResourceDriftInput,
  ): Effect.Effect<DetectStackResourceDriftOutput, CommonAwsError>;
  detectStackSetDrift(
    input: DetectStackSetDriftInput,
  ): Effect.Effect<
    DetectStackSetDriftOutput,
    | InvalidOperationException
    | OperationInProgressException
    | StackSetNotFoundException
    | CommonAwsError
  >;
  estimateTemplateCost(
    input: EstimateTemplateCostInput,
  ): Effect.Effect<EstimateTemplateCostOutput, CommonAwsError>;
  executeChangeSet(
    input: ExecuteChangeSetInput,
  ): Effect.Effect<
    ExecuteChangeSetOutput,
    | ChangeSetNotFoundException
    | InsufficientCapabilitiesException
    | InvalidChangeSetStatusException
    | TokenAlreadyExistsException
    | CommonAwsError
  >;
  executeStackRefactor(
    input: ExecuteStackRefactorInput,
  ): Effect.Effect<{}, CommonAwsError>;
  getGeneratedTemplate(
    input: GetGeneratedTemplateInput,
  ): Effect.Effect<
    GetGeneratedTemplateOutput,
    GeneratedTemplateNotFoundException | CommonAwsError
  >;
  getStackPolicy(
    input: GetStackPolicyInput,
  ): Effect.Effect<GetStackPolicyOutput, CommonAwsError>;
  getTemplate(
    input: GetTemplateInput,
  ): Effect.Effect<
    GetTemplateOutput,
    ChangeSetNotFoundException | CommonAwsError
  >;
  getTemplateSummary(
    input: GetTemplateSummaryInput,
  ): Effect.Effect<
    GetTemplateSummaryOutput,
    StackSetNotFoundException | CommonAwsError
  >;
  importStacksToStackSet(
    input: ImportStacksToStackSetInput,
  ): Effect.Effect<
    ImportStacksToStackSetOutput,
    | InvalidOperationException
    | LimitExceededException
    | OperationIdAlreadyExistsException
    | OperationInProgressException
    | StackNotFoundException
    | StackSetNotFoundException
    | StaleRequestException
    | CommonAwsError
  >;
  listChangeSets(
    input: ListChangeSetsInput,
  ): Effect.Effect<ListChangeSetsOutput, CommonAwsError>;
  listExports(
    input: ListExportsInput,
  ): Effect.Effect<ListExportsOutput, CommonAwsError>;
  listGeneratedTemplates(
    input: ListGeneratedTemplatesInput,
  ): Effect.Effect<ListGeneratedTemplatesOutput, CommonAwsError>;
  listHookResults(
    input: ListHookResultsInput,
  ): Effect.Effect<
    ListHookResultsOutput,
    HookResultNotFoundException | CommonAwsError
  >;
  listImports(
    input: ListImportsInput,
  ): Effect.Effect<ListImportsOutput, CommonAwsError>;
  listResourceScanRelatedResources(
    input: ListResourceScanRelatedResourcesInput,
  ): Effect.Effect<
    ListResourceScanRelatedResourcesOutput,
    | ResourceScanInProgressException
    | ResourceScanNotFoundException
    | CommonAwsError
  >;
  listResourceScanResources(
    input: ListResourceScanResourcesInput,
  ): Effect.Effect<
    ListResourceScanResourcesOutput,
    | ResourceScanInProgressException
    | ResourceScanNotFoundException
    | CommonAwsError
  >;
  listResourceScans(
    input: ListResourceScansInput,
  ): Effect.Effect<ListResourceScansOutput, CommonAwsError>;
  listStackInstanceResourceDrifts(
    input: ListStackInstanceResourceDriftsInput,
  ): Effect.Effect<
    ListStackInstanceResourceDriftsOutput,
    | OperationNotFoundException
    | StackInstanceNotFoundException
    | StackSetNotFoundException
    | CommonAwsError
  >;
  listStackInstances(
    input: ListStackInstancesInput,
  ): Effect.Effect<
    ListStackInstancesOutput,
    StackSetNotFoundException | CommonAwsError
  >;
  listStackRefactorActions(
    input: ListStackRefactorActionsInput,
  ): Effect.Effect<ListStackRefactorActionsOutput, CommonAwsError>;
  listStackRefactors(
    input: ListStackRefactorsInput,
  ): Effect.Effect<ListStackRefactorsOutput, CommonAwsError>;
  listStackResources(
    input: ListStackResourcesInput,
  ): Effect.Effect<ListStackResourcesOutput, CommonAwsError>;
  listStacks(
    input: ListStacksInput,
  ): Effect.Effect<ListStacksOutput, CommonAwsError>;
  listStackSetAutoDeploymentTargets(
    input: ListStackSetAutoDeploymentTargetsInput,
  ): Effect.Effect<
    ListStackSetAutoDeploymentTargetsOutput,
    StackSetNotFoundException | CommonAwsError
  >;
  listStackSetOperationResults(
    input: ListStackSetOperationResultsInput,
  ): Effect.Effect<
    ListStackSetOperationResultsOutput,
    OperationNotFoundException | StackSetNotFoundException | CommonAwsError
  >;
  listStackSetOperations(
    input: ListStackSetOperationsInput,
  ): Effect.Effect<
    ListStackSetOperationsOutput,
    StackSetNotFoundException | CommonAwsError
  >;
  listStackSets(
    input: ListStackSetsInput,
  ): Effect.Effect<ListStackSetsOutput, CommonAwsError>;
  listTypeRegistrations(
    input: ListTypeRegistrationsInput,
  ): Effect.Effect<
    ListTypeRegistrationsOutput,
    CFNRegistryException | CommonAwsError
  >;
  listTypes(
    input: ListTypesInput,
  ): Effect.Effect<ListTypesOutput, CFNRegistryException | CommonAwsError>;
  listTypeVersions(
    input: ListTypeVersionsInput,
  ): Effect.Effect<
    ListTypeVersionsOutput,
    CFNRegistryException | CommonAwsError
  >;
  publishType(
    input: PublishTypeInput,
  ): Effect.Effect<
    PublishTypeOutput,
    CFNRegistryException | TypeNotFoundException | CommonAwsError
  >;
  recordHandlerProgress(
    input: RecordHandlerProgressInput,
  ): Effect.Effect<
    RecordHandlerProgressOutput,
    | InvalidStateTransitionException
    | OperationStatusCheckFailedException
    | CommonAwsError
  >;
  registerPublisher(
    input: RegisterPublisherInput,
  ): Effect.Effect<
    RegisterPublisherOutput,
    CFNRegistryException | CommonAwsError
  >;
  registerType(
    input: RegisterTypeInput,
  ): Effect.Effect<RegisterTypeOutput, CFNRegistryException | CommonAwsError>;
  rollbackStack(
    input: RollbackStackInput,
  ): Effect.Effect<
    RollbackStackOutput,
    TokenAlreadyExistsException | CommonAwsError
  >;
  setStackPolicy(input: SetStackPolicyInput): Effect.Effect<{}, CommonAwsError>;
  setTypeConfiguration(
    input: SetTypeConfigurationInput,
  ): Effect.Effect<
    SetTypeConfigurationOutput,
    CFNRegistryException | TypeNotFoundException | CommonAwsError
  >;
  setTypeDefaultVersion(
    input: SetTypeDefaultVersionInput,
  ): Effect.Effect<
    SetTypeDefaultVersionOutput,
    CFNRegistryException | TypeNotFoundException | CommonAwsError
  >;
  signalResource(input: SignalResourceInput): Effect.Effect<{}, CommonAwsError>;
  startResourceScan(
    input: StartResourceScanInput,
  ): Effect.Effect<
    StartResourceScanOutput,
    | ResourceScanInProgressException
    | ResourceScanLimitExceededException
    | CommonAwsError
  >;
  stopStackSetOperation(
    input: StopStackSetOperationInput,
  ): Effect.Effect<
    StopStackSetOperationOutput,
    | InvalidOperationException
    | OperationNotFoundException
    | StackSetNotFoundException
    | CommonAwsError
  >;
  testType(
    input: TestTypeInput,
  ): Effect.Effect<
    TestTypeOutput,
    CFNRegistryException | TypeNotFoundException | CommonAwsError
  >;
  updateGeneratedTemplate(
    input: UpdateGeneratedTemplateInput,
  ): Effect.Effect<
    UpdateGeneratedTemplateOutput,
    | AlreadyExistsException
    | GeneratedTemplateNotFoundException
    | LimitExceededException
    | CommonAwsError
  >;
  updateStack(
    input: UpdateStackInput,
  ): Effect.Effect<
    UpdateStackOutput,
    | InsufficientCapabilitiesException
    | TokenAlreadyExistsException
    | CommonAwsError
  >;
  updateStackInstances(
    input: UpdateStackInstancesInput,
  ): Effect.Effect<
    UpdateStackInstancesOutput,
    | InvalidOperationException
    | OperationIdAlreadyExistsException
    | OperationInProgressException
    | StackInstanceNotFoundException
    | StackSetNotFoundException
    | StaleRequestException
    | CommonAwsError
  >;
  updateStackSet(
    input: UpdateStackSetInput,
  ): Effect.Effect<
    UpdateStackSetOutput,
    | InvalidOperationException
    | OperationIdAlreadyExistsException
    | OperationInProgressException
    | StackInstanceNotFoundException
    | StackSetNotFoundException
    | StaleRequestException
    | CommonAwsError
  >;
  updateTerminationProtection(
    input: UpdateTerminationProtectionInput,
  ): Effect.Effect<UpdateTerminationProtectionOutput, CommonAwsError>;
  validateTemplate(
    input: ValidateTemplateInput,
  ): Effect.Effect<ValidateTemplateOutput, CommonAwsError>;
}

export type Cloudformation = CloudFormation;

export type AcceptTermsAndConditions = boolean;

export type Account = string;

export type AccountFilterType =
  | "NONE"
  | "INTERSECTION"
  | "DIFFERENCE"
  | "UNION";
export interface AccountGateResult {
  Status?: AccountGateStatus;
  StatusReason?: string;
}
export type AccountGateStatus = "SUCCEEDED" | "FAILED" | "SKIPPED";
export type AccountGateStatusReason = string;

export interface AccountLimit {
  Name?: string;
  Value?: number;
}
export type AccountLimitList = Array<AccountLimit>;
export type AccountList = Array<string>;
export type AccountsUrl = string;

export interface ActivateOrganizationsAccessInput {}
export interface ActivateOrganizationsAccessOutput {}
export interface ActivateTypeInput {
  Type?: ThirdPartyType;
  PublicTypeArn?: string;
  PublisherId?: string;
  TypeName?: string;
  TypeNameAlias?: string;
  AutoUpdate?: boolean;
  LoggingConfig?: LoggingConfig;
  ExecutionRoleArn?: string;
  VersionBump?: VersionBump;
  MajorVersion?: number;
}
export interface ActivateTypeOutput {
  Arn?: string;
}
export type AfterContext = string;

export type AfterValue = string;

export type AllowedValue = string;

export type AllowedValues = Array<string>;
export declare class AlreadyExistsException extends EffectData.TaggedError(
  "AlreadyExistsException",
)<{
  readonly Message?: string;
}> {}
export type Arn = string;

export type AttributeChangeType = "Add" | "Remove" | "Modify";
export interface AutoDeployment {
  Enabled?: boolean;
  RetainStacksOnAccountRemoval?: boolean;
}
export type AutoDeploymentNullable = boolean;

export type AutoUpdate = boolean;

export interface BatchDescribeTypeConfigurationsError {
  ErrorCode?: string;
  ErrorMessage?: string;
  TypeConfigurationIdentifier?: TypeConfigurationIdentifier;
}
export type BatchDescribeTypeConfigurationsErrors =
  Array<BatchDescribeTypeConfigurationsError>;
export interface BatchDescribeTypeConfigurationsInput {
  TypeConfigurationIdentifiers: Array<TypeConfigurationIdentifier>;
}
export interface BatchDescribeTypeConfigurationsOutput {
  Errors?: Array<BatchDescribeTypeConfigurationsError>;
  UnprocessedTypeConfigurations?: Array<TypeConfigurationIdentifier>;
  TypeConfigurations?: Array<TypeConfigurationDetails>;
}
export type BeforeContext = string;

export type BeforeValue = string;

export type BoxedInteger = number;

export type BoxedMaxResults = number;

export type CallAs = "SELF" | "DELEGATED_ADMIN";
export interface CancelUpdateStackInput {
  StackName: string;
  ClientRequestToken?: string;
}
export type Capabilities = Array<Capability>;
export type CapabilitiesReason = string;

export type Capability =
  | "CAPABILITY_IAM"
  | "CAPABILITY_NAMED_IAM"
  | "CAPABILITY_AUTO_EXPAND";
export type Category = "REGISTERED" | "ACTIVATED" | "THIRD_PARTY" | "AWS_TYPES";
export type CausingEntity = string;

export declare class CFNRegistryException extends EffectData.TaggedError(
  "CFNRegistryException",
)<{
  readonly Message?: string;
}> {}
export interface Change {
  Type?: ChangeType;
  HookInvocationCount?: number;
  ResourceChange?: ResourceChange;
}
export type ChangeAction = "Add" | "Modify" | "Remove" | "Import" | "Dynamic";
export type Changes = Array<Change>;
export interface ChangeSetHook {
  InvocationPoint?: HookInvocationPoint;
  FailureMode?: HookFailureMode;
  TypeName?: string;
  TypeVersionId?: string;
  TypeConfigurationVersionId?: string;
  TargetDetails?: ChangeSetHookTargetDetails;
}
export interface ChangeSetHookResourceTargetDetails {
  LogicalResourceId?: string;
  ResourceType?: string;
  ResourceAction?: ChangeAction;
}
export type ChangeSetHooks = Array<ChangeSetHook>;
export type ChangeSetHooksStatus = "PLANNING" | "PLANNED" | "UNAVAILABLE";
export interface ChangeSetHookTargetDetails {
  TargetType?: HookTargetType;
  ResourceTargetDetails?: ChangeSetHookResourceTargetDetails;
}
export type ChangeSetId = string;

export type ChangeSetName = string;

export type ChangeSetNameOrId = string;

export declare class ChangeSetNotFoundException extends EffectData.TaggedError(
  "ChangeSetNotFoundException",
)<{
  readonly Message?: string;
}> {}
export type ChangeSetStatus =
  | "CREATE_PENDING"
  | "CREATE_IN_PROGRESS"
  | "CREATE_COMPLETE"
  | "DELETE_PENDING"
  | "DELETE_IN_PROGRESS"
  | "DELETE_COMPLETE"
  | "DELETE_FAILED"
  | "FAILED";
export type ChangeSetStatusReason = string;

export type ChangeSetSummaries = Array<ChangeSetSummary>;
export interface ChangeSetSummary {
  StackId?: string;
  StackName?: string;
  ChangeSetId?: string;
  ChangeSetName?: string;
  ExecutionStatus?: ExecutionStatus;
  Status?: ChangeSetStatus;
  StatusReason?: string;
  CreationTime?: Date | string;
  Description?: string;
  IncludeNestedStacks?: boolean;
  ParentChangeSetId?: string;
  RootChangeSetId?: string;
  ImportExistingResources?: boolean;
}
export type ChangeSetType = "CREATE" | "UPDATE" | "IMPORT";
export type ChangeSource =
  | "ResourceReference"
  | "ParameterReference"
  | "ResourceAttribute"
  | "DirectModification"
  | "Automatic";
export type ChangeType = "Resource";
export type ClientRequestToken = string;

export type ClientToken = string;

export type ConcurrencyMode =
  | "STRICT_FAILURE_TOLERANCE"
  | "SOFT_FAILURE_TOLERANCE";
export declare class ConcurrentResourcesLimitExceededException extends EffectData.TaggedError(
  "ConcurrentResourcesLimitExceededException",
)<{
  readonly Message?: string;
}> {}
export type ConfigurationSchema = string;

export type ConnectionArn = string;

export interface ContinueUpdateRollbackInput {
  StackName: string;
  RoleARN?: string;
  ResourcesToSkip?: Array<string>;
  ClientRequestToken?: string;
}
export interface ContinueUpdateRollbackOutput {}
export interface CreateChangeSetInput {
  StackName: string;
  TemplateBody?: string;
  TemplateURL?: string;
  UsePreviousTemplate?: boolean;
  Parameters?: Array<Parameter>;
  Capabilities?: Array<Capability>;
  ResourceTypes?: Array<string>;
  RoleARN?: string;
  RollbackConfiguration?: RollbackConfiguration;
  NotificationARNs?: Array<string>;
  Tags?: Array<Tag>;
  ChangeSetName: string;
  ClientToken?: string;
  Description?: string;
  ChangeSetType?: ChangeSetType;
  ResourcesToImport?: Array<ResourceToImport>;
  IncludeNestedStacks?: boolean;
  OnStackFailure?: OnStackFailure;
  ImportExistingResources?: boolean;
}
export interface CreateChangeSetOutput {
  Id?: string;
  StackId?: string;
}
export declare class CreatedButModifiedException extends EffectData.TaggedError(
  "CreatedButModifiedException",
)<{
  readonly Message?: string;
}> {}
export interface CreateGeneratedTemplateInput {
  Resources?: Array<ResourceDefinition>;
  GeneratedTemplateName: string;
  StackName?: string;
  TemplateConfiguration?: TemplateConfiguration;
}
export interface CreateGeneratedTemplateOutput {
  GeneratedTemplateId?: string;
}
export interface CreateStackInput {
  StackName: string;
  TemplateBody?: string;
  TemplateURL?: string;
  Parameters?: Array<Parameter>;
  DisableRollback?: boolean;
  RollbackConfiguration?: RollbackConfiguration;
  TimeoutInMinutes?: number;
  NotificationARNs?: Array<string>;
  Capabilities?: Array<Capability>;
  ResourceTypes?: Array<string>;
  RoleARN?: string;
  OnFailure?: OnFailure;
  StackPolicyBody?: string;
  StackPolicyURL?: string;
  Tags?: Array<Tag>;
  ClientRequestToken?: string;
  EnableTerminationProtection?: boolean;
  RetainExceptOnCreate?: boolean;
}
export interface CreateStackInstancesInput {
  StackSetName: string;
  Accounts?: Array<string>;
  DeploymentTargets?: DeploymentTargets;
  Regions: Array<string>;
  ParameterOverrides?: Array<Parameter>;
  OperationPreferences?: StackSetOperationPreferences;
  OperationId?: string;
  CallAs?: CallAs;
}
export interface CreateStackInstancesOutput {
  OperationId?: string;
}
export interface CreateStackOutput {
  StackId?: string;
}
export interface CreateStackRefactorInput {
  Description?: string;
  EnableStackCreation?: boolean;
  ResourceMappings?: Array<ResourceMapping>;
  StackDefinitions: Array<StackDefinition>;
}
export interface CreateStackRefactorOutput {
  StackRefactorId: string;
}
export interface CreateStackSetInput {
  StackSetName: string;
  Description?: string;
  TemplateBody?: string;
  TemplateURL?: string;
  StackId?: string;
  Parameters?: Array<Parameter>;
  Capabilities?: Array<Capability>;
  Tags?: Array<Tag>;
  AdministrationRoleARN?: string;
  ExecutionRoleName?: string;
  PermissionModel?: PermissionModels;
  AutoDeployment?: AutoDeployment;
  CallAs?: CallAs;
  ClientRequestToken?: string;
  ManagedExecution?: ManagedExecution;
}
export interface CreateStackSetOutput {
  StackSetId?: string;
}
export type CreationTime = Date | string;

export interface DeactivateOrganizationsAccessInput {}
export interface DeactivateOrganizationsAccessOutput {}
export interface DeactivateTypeInput {
  TypeName?: string;
  Type?: ThirdPartyType;
  Arn?: string;
}
export interface DeactivateTypeOutput {}
export interface DeleteChangeSetInput {
  ChangeSetName: string;
  StackName?: string;
}
export interface DeleteChangeSetOutput {}
export interface DeleteGeneratedTemplateInput {
  GeneratedTemplateName: string;
}
export interface DeleteStackInput {
  StackName: string;
  RetainResources?: Array<string>;
  RoleARN?: string;
  ClientRequestToken?: string;
  DeletionMode?: DeletionMode;
}
export interface DeleteStackInstancesInput {
  StackSetName: string;
  Accounts?: Array<string>;
  DeploymentTargets?: DeploymentTargets;
  Regions: Array<string>;
  OperationPreferences?: StackSetOperationPreferences;
  RetainStacks: boolean;
  OperationId?: string;
  CallAs?: CallAs;
}
export interface DeleteStackInstancesOutput {
  OperationId?: string;
}
export interface DeleteStackSetInput {
  StackSetName: string;
  CallAs?: CallAs;
}
export interface DeleteStackSetOutput {}
export type DeletionMode = "STANDARD" | "FORCE_DELETE_STACK";
export type DeletionTime = Date | string;

export interface DeploymentTargets {
  Accounts?: Array<string>;
  AccountsUrl?: string;
  OrganizationalUnitIds?: Array<string>;
  AccountFilterType?: AccountFilterType;
}
export type DeprecatedStatus = "LIVE" | "DEPRECATED";
export interface DeregisterTypeInput {
  Arn?: string;
  Type?: RegistryType;
  TypeName?: string;
  VersionId?: string;
}
export interface DeregisterTypeOutput {}
export interface DescribeAccountLimitsInput {
  NextToken?: string;
}
export interface DescribeAccountLimitsOutput {
  AccountLimits?: Array<AccountLimit>;
  NextToken?: string;
}
export interface DescribeChangeSetHooksInput {
  ChangeSetName: string;
  StackName?: string;
  NextToken?: string;
  LogicalResourceId?: string;
}
export interface DescribeChangeSetHooksOutput {
  ChangeSetId?: string;
  ChangeSetName?: string;
  Hooks?: Array<ChangeSetHook>;
  Status?: ChangeSetHooksStatus;
  NextToken?: string;
  StackId?: string;
  StackName?: string;
}
export interface DescribeChangeSetInput {
  ChangeSetName: string;
  StackName?: string;
  NextToken?: string;
  IncludePropertyValues?: boolean;
}
export interface DescribeChangeSetOutput {
  ChangeSetName?: string;
  ChangeSetId?: string;
  StackId?: string;
  StackName?: string;
  Description?: string;
  Parameters?: Array<Parameter>;
  CreationTime?: Date | string;
  ExecutionStatus?: ExecutionStatus;
  Status?: ChangeSetStatus;
  StatusReason?: string;
  NotificationARNs?: Array<string>;
  RollbackConfiguration?: RollbackConfiguration;
  Capabilities?: Array<Capability>;
  Tags?: Array<Tag>;
  Changes?: Array<Change>;
  NextToken?: string;
  IncludeNestedStacks?: boolean;
  ParentChangeSetId?: string;
  RootChangeSetId?: string;
  OnStackFailure?: OnStackFailure;
  ImportExistingResources?: boolean;
}
export interface DescribeGeneratedTemplateInput {
  GeneratedTemplateName: string;
}
export interface DescribeGeneratedTemplateOutput {
  GeneratedTemplateId?: string;
  GeneratedTemplateName?: string;
  Resources?: Array<ResourceDetail>;
  Status?: GeneratedTemplateStatus;
  StatusReason?: string;
  CreationTime?: Date | string;
  LastUpdatedTime?: Date | string;
  Progress?: TemplateProgress;
  StackId?: string;
  TemplateConfiguration?: TemplateConfiguration;
  TotalWarnings?: number;
}
export interface DescribeOrganizationsAccessInput {
  CallAs?: CallAs;
}
export interface DescribeOrganizationsAccessOutput {
  Status?: OrganizationStatus;
}
export interface DescribePublisherInput {
  PublisherId?: string;
}
export interface DescribePublisherOutput {
  PublisherId?: string;
  PublisherStatus?: PublisherStatus;
  IdentityProvider?: IdentityProvider;
  PublisherProfile?: string;
}
export interface DescribeResourceScanInput {
  ResourceScanId: string;
}
export interface DescribeResourceScanOutput {
  ResourceScanId?: string;
  Status?: ResourceScanStatus;
  StatusReason?: string;
  StartTime?: Date | string;
  EndTime?: Date | string;
  PercentageCompleted?: number;
  ResourceTypes?: Array<string>;
  ResourcesScanned?: number;
  ResourcesRead?: number;
  ScanFilters?: Array<ScanFilter>;
}
export interface DescribeStackDriftDetectionStatusInput {
  StackDriftDetectionId: string;
}
export interface DescribeStackDriftDetectionStatusOutput {
  StackId: string;
  StackDriftDetectionId: string;
  StackDriftStatus?: StackDriftStatus;
  DetectionStatus: StackDriftDetectionStatus;
  DetectionStatusReason?: string;
  DriftedStackResourceCount?: number;
  Timestamp: Date | string;
}
export interface DescribeStackEventsInput {
  StackName?: string;
  NextToken?: string;
}
export interface DescribeStackEventsOutput {
  StackEvents?: Array<StackEvent>;
  NextToken?: string;
}
export interface DescribeStackInstanceInput {
  StackSetName: string;
  StackInstanceAccount: string;
  StackInstanceRegion: string;
  CallAs?: CallAs;
}
export interface DescribeStackInstanceOutput {
  StackInstance?: StackInstance;
}
export interface DescribeStackRefactorInput {
  StackRefactorId: string;
}
export interface DescribeStackRefactorOutput {
  Description?: string;
  StackRefactorId?: string;
  StackIds?: Array<string>;
  ExecutionStatus?: StackRefactorExecutionStatus;
  ExecutionStatusReason?: string;
  Status?: StackRefactorStatus;
  StatusReason?: string;
}
export interface DescribeStackResourceDriftsInput {
  StackName: string;
  StackResourceDriftStatusFilters?: Array<StackResourceDriftStatus>;
  NextToken?: string;
  MaxResults?: number;
}
export interface DescribeStackResourceDriftsOutput {
  StackResourceDrifts: Array<StackResourceDrift>;
  NextToken?: string;
}
export interface DescribeStackResourceInput {
  StackName: string;
  LogicalResourceId: string;
}
export interface DescribeStackResourceOutput {
  StackResourceDetail?: StackResourceDetail;
}
export interface DescribeStackResourcesInput {
  StackName?: string;
  LogicalResourceId?: string;
  PhysicalResourceId?: string;
}
export interface DescribeStackResourcesOutput {
  StackResources?: Array<StackResource>;
}
export interface DescribeStackSetInput {
  StackSetName: string;
  CallAs?: CallAs;
}
export interface DescribeStackSetOperationInput {
  StackSetName: string;
  OperationId: string;
  CallAs?: CallAs;
}
export interface DescribeStackSetOperationOutput {
  StackSetOperation?: StackSetOperation;
}
export interface DescribeStackSetOutput {
  StackSet?: StackSet;
}
export interface DescribeStacksInput {
  StackName?: string;
  NextToken?: string;
}
export interface DescribeStacksOutput {
  Stacks?: Array<Stack>;
  NextToken?: string;
}
export interface DescribeTypeInput {
  Type?: RegistryType;
  TypeName?: string;
  Arn?: string;
  VersionId?: string;
  PublisherId?: string;
  PublicVersionNumber?: string;
}
export interface DescribeTypeOutput {
  Arn?: string;
  Type?: RegistryType;
  TypeName?: string;
  DefaultVersionId?: string;
  IsDefaultVersion?: boolean;
  TypeTestsStatus?: TypeTestsStatus;
  TypeTestsStatusDescription?: string;
  Description?: string;
  Schema?: string;
  ProvisioningType?: ProvisioningType;
  DeprecatedStatus?: DeprecatedStatus;
  LoggingConfig?: LoggingConfig;
  RequiredActivatedTypes?: Array<RequiredActivatedType>;
  ExecutionRoleArn?: string;
  Visibility?: Visibility;
  SourceUrl?: string;
  DocumentationUrl?: string;
  LastUpdated?: Date | string;
  TimeCreated?: Date | string;
  ConfigurationSchema?: string;
  PublisherId?: string;
  OriginalTypeName?: string;
  OriginalTypeArn?: string;
  PublicVersionNumber?: string;
  LatestPublicVersion?: string;
  IsActivated?: boolean;
  AutoUpdate?: boolean;
}
export interface DescribeTypeRegistrationInput {
  RegistrationToken: string;
}
export interface DescribeTypeRegistrationOutput {
  ProgressStatus?: RegistrationStatus;
  Description?: string;
  TypeArn?: string;
  TypeVersionArn?: string;
}
export type Description = string;

export type DetailedStatus = "CONFIGURATION_COMPLETE" | "VALIDATION_FAILED";
export type DetectionReason = string;

export interface DetectStackDriftInput {
  StackName: string;
  LogicalResourceIds?: Array<string>;
}
export interface DetectStackDriftOutput {
  StackDriftDetectionId: string;
}
export interface DetectStackResourceDriftInput {
  StackName: string;
  LogicalResourceId: string;
}
export interface DetectStackResourceDriftOutput {
  StackResourceDrift: StackResourceDrift;
}
export interface DetectStackSetDriftInput {
  StackSetName: string;
  OperationPreferences?: StackSetOperationPreferences;
  OperationId?: string;
  CallAs?: CallAs;
}
export interface DetectStackSetDriftOutput {
  OperationId?: string;
}
export type DifferenceType = "ADD" | "REMOVE" | "NOT_EQUAL";
export type DisableRollback = boolean;

export type DriftedStackInstancesCount = number;

export type EnableStackCreation = boolean;

export type EnableTerminationProtection = boolean;

export type ErrorCode = string;

export type ErrorMessage = string;

export interface EstimateTemplateCostInput {
  TemplateBody?: string;
  TemplateURL?: string;
  Parameters?: Array<Parameter>;
}
export interface EstimateTemplateCostOutput {
  Url?: string;
}
export type EvaluationType = "Static" | "Dynamic";
export type EventId = string;

export interface ExecuteChangeSetInput {
  ChangeSetName: string;
  StackName?: string;
  ClientRequestToken?: string;
  DisableRollback?: boolean;
  RetainExceptOnCreate?: boolean;
}
export interface ExecuteChangeSetOutput {}
export interface ExecuteStackRefactorInput {
  StackRefactorId: string;
}
export type ExecutionRoleName = string;

export type ExecutionStatus =
  | "UNAVAILABLE"
  | "AVAILABLE"
  | "EXECUTE_IN_PROGRESS"
  | "EXECUTE_COMPLETE"
  | "EXECUTE_FAILED"
  | "OBSOLETE";
export type ExecutionStatusReason = string;

export interface Export {
  ExportingStackId?: string;
  Name?: string;
  Value?: string;
}
export type ExportName = string;

export type Exports = Array<Export>;
export type ExportValue = string;

export type FailedStackInstancesCount = number;

export type FailureToleranceCount = number;

export type FailureTolerancePercentage = number;

export type GeneratedTemplateDeletionPolicy = "DELETE" | "RETAIN";
export type GeneratedTemplateId = string;

export type GeneratedTemplateName = string;

export declare class GeneratedTemplateNotFoundException extends EffectData.TaggedError(
  "GeneratedTemplateNotFoundException",
)<{
  readonly Message?: string;
}> {}
export type GeneratedTemplateResourceStatus =
  | "PENDING"
  | "IN_PROGRESS"
  | "FAILED"
  | "COMPLETE";
export type GeneratedTemplateStatus =
  | "CREATE_PENDING"
  | "UPDATE_PENDING"
  | "DELETE_PENDING"
  | "CREATE_IN_PROGRESS"
  | "UPDATE_IN_PROGRESS"
  | "DELETE_IN_PROGRESS"
  | "FAILED"
  | "COMPLETE";
export type GeneratedTemplateUpdateReplacePolicy = "DELETE" | "RETAIN";
export interface GetGeneratedTemplateInput {
  Format?: TemplateFormat;
  GeneratedTemplateName: string;
}
export interface GetGeneratedTemplateOutput {
  Status?: GeneratedTemplateStatus;
  TemplateBody?: string;
}
export interface GetStackPolicyInput {
  StackName: string;
}
export interface GetStackPolicyOutput {
  StackPolicyBody?: string;
}
export interface GetTemplateInput {
  StackName?: string;
  ChangeSetName?: string;
  TemplateStage?: TemplateStage;
}
export interface GetTemplateOutput {
  TemplateBody?: string;
  StagesAvailable?: Array<TemplateStage>;
}
export interface GetTemplateSummaryInput {
  TemplateBody?: string;
  TemplateURL?: string;
  StackName?: string;
  StackSetName?: string;
  CallAs?: CallAs;
  TemplateSummaryConfig?: TemplateSummaryConfig;
}
export interface GetTemplateSummaryOutput {
  Parameters?: Array<ParameterDeclaration>;
  Description?: string;
  Capabilities?: Array<Capability>;
  CapabilitiesReason?: string;
  ResourceTypes?: Array<string>;
  Version?: string;
  Metadata?: string;
  DeclaredTransforms?: Array<string>;
  ResourceIdentifierSummaries?: Array<ResourceIdentifierSummary>;
  Warnings?: Warnings;
}
export type HandlerErrorCode =
  | "NotUpdatable"
  | "InvalidRequest"
  | "AccessDenied"
  | "InvalidCredentials"
  | "AlreadyExists"
  | "NotFound"
  | "ResourceConflict"
  | "Throttling"
  | "ServiceLimitExceeded"
  | "ServiceTimeout"
  | "GeneralServiceException"
  | "ServiceInternalError"
  | "NetworkFailure"
  | "InternalFailure"
  | "InvalidTypeConfiguration"
  | "HandlerInternalFailure"
  | "NonCompliant"
  | "Unknown"
  | "UnsupportedTarget";
export type HookFailureMode = "FAIL" | "WARN";
export type HookInvocationCount = number;

export type HookInvocationPoint = "PRE_PROVISION";
export type HookResultId = string;

export declare class HookResultNotFoundException extends EffectData.TaggedError(
  "HookResultNotFoundException",
)<{
  readonly Message?: string;
}> {}
export type HookResultSummaries = Array<HookResultSummary>;
export interface HookResultSummary {
  InvocationPoint?: HookInvocationPoint;
  FailureMode?: HookFailureMode;
  TypeName?: string;
  TypeVersionId?: string;
  TypeConfigurationVersionId?: string;
  Status?: HookStatus;
  HookStatusReason?: string;
}
export type HookStatus =
  | "HOOK_IN_PROGRESS"
  | "HOOK_COMPLETE_SUCCEEDED"
  | "HOOK_COMPLETE_FAILED"
  | "HOOK_FAILED";
export type HookStatusReason = string;

export type HookTargetType = "RESOURCE";
export type HookTargetTypeName = string;

export type HookType = string;

export type HookTypeConfigurationVersionId = string;

export type HookTypeName = string;

export type HookTypeVersionId = string;

export type IdentityProvider = "AWS_Marketplace" | "GitHub" | "Bitbucket";
export type ImportExistingResources = boolean;

export type Imports = Array<string>;
export interface ImportStacksToStackSetInput {
  StackSetName: string;
  StackIds?: Array<string>;
  StackIdsUrl?: string;
  OrganizationalUnitIds?: Array<string>;
  OperationPreferences?: StackSetOperationPreferences;
  OperationId?: string;
  CallAs?: CallAs;
}
export interface ImportStacksToStackSetOutput {
  OperationId?: string;
}
export type IncludeNestedStacks = boolean;

export type IncludePropertyValues = boolean;

export type InProgressStackInstancesCount = number;

export declare class InsufficientCapabilitiesException extends EffectData.TaggedError(
  "InsufficientCapabilitiesException",
)<{
  readonly Message?: string;
}> {}
export type InSyncStackInstancesCount = number;

export declare class InvalidChangeSetStatusException extends EffectData.TaggedError(
  "InvalidChangeSetStatusException",
)<{
  readonly Message?: string;
}> {}
export declare class InvalidOperationException extends EffectData.TaggedError(
  "InvalidOperationException",
)<{
  readonly Message?: string;
}> {}
export declare class InvalidStateTransitionException extends EffectData.TaggedError(
  "InvalidStateTransitionException",
)<{
  readonly Message?: string;
}> {}
export type IsActivated = boolean;

export type IsDefaultConfiguration = boolean;

export type IsDefaultVersion = boolean;

export type JazzLogicalResourceIds = Array<string>;
export type JazzResourceIdentifierProperties = Record<string, string>;
export type JazzResourceIdentifierPropertyKey = string;

export type JazzResourceIdentifierPropertyValue = string;

export type Key = string;

export type LastUpdatedTime = Date | string;

export declare class LimitExceededException extends EffectData.TaggedError(
  "LimitExceededException",
)<{
  readonly Message?: string;
}> {}
export type LimitName = string;

export type LimitValue = number;

export interface ListChangeSetsInput {
  StackName: string;
  NextToken?: string;
}
export interface ListChangeSetsOutput {
  Summaries?: Array<ChangeSetSummary>;
  NextToken?: string;
}
export interface ListExportsInput {
  NextToken?: string;
}
export interface ListExportsOutput {
  Exports?: Array<Export>;
  NextToken?: string;
}
export interface ListGeneratedTemplatesInput {
  NextToken?: string;
  MaxResults?: number;
}
export interface ListGeneratedTemplatesOutput {
  Summaries?: Array<TemplateSummary>;
  NextToken?: string;
}
export interface ListHookResultsInput {
  TargetType: ListHookResultsTargetType;
  TargetId: string;
  NextToken?: string;
}
export interface ListHookResultsOutput {
  TargetType?: ListHookResultsTargetType;
  TargetId?: string;
  HookResults?: Array<HookResultSummary>;
  NextToken?: string;
}
export type ListHookResultsTargetType =
  | "CHANGE_SET"
  | "STACK"
  | "RESOURCE"
  | "CLOUD_CONTROL";
export interface ListImportsInput {
  ExportName: string;
  NextToken?: string;
}
export interface ListImportsOutput {
  Imports?: Array<string>;
  NextToken?: string;
}
export interface ListResourceScanRelatedResourcesInput {
  ResourceScanId: string;
  Resources: Array<ScannedResourceIdentifier>;
  NextToken?: string;
  MaxResults?: number;
}
export interface ListResourceScanRelatedResourcesOutput {
  RelatedResources?: Array<ScannedResource>;
  NextToken?: string;
}
export interface ListResourceScanResourcesInput {
  ResourceScanId: string;
  ResourceIdentifier?: string;
  ResourceTypePrefix?: string;
  TagKey?: string;
  TagValue?: string;
  NextToken?: string;
  MaxResults?: number;
}
export interface ListResourceScanResourcesOutput {
  Resources?: Array<ScannedResource>;
  NextToken?: string;
}
export interface ListResourceScansInput {
  NextToken?: string;
  MaxResults?: number;
  ScanTypeFilter?: ScanType;
}
export interface ListResourceScansOutput {
  ResourceScanSummaries?: Array<ResourceScanSummary>;
  NextToken?: string;
}
export interface ListStackInstanceResourceDriftsInput {
  StackSetName: string;
  NextToken?: string;
  MaxResults?: number;
  StackInstanceResourceDriftStatuses?: Array<StackResourceDriftStatus>;
  StackInstanceAccount: string;
  StackInstanceRegion: string;
  OperationId: string;
  CallAs?: CallAs;
}
export interface ListStackInstanceResourceDriftsOutput {
  Summaries?: Array<StackInstanceResourceDriftsSummary>;
  NextToken?: string;
}
export interface ListStackInstancesInput {
  StackSetName: string;
  NextToken?: string;
  MaxResults?: number;
  Filters?: Array<StackInstanceFilter>;
  StackInstanceAccount?: string;
  StackInstanceRegion?: string;
  CallAs?: CallAs;
}
export interface ListStackInstancesOutput {
  Summaries?: Array<StackInstanceSummary>;
  NextToken?: string;
}
export interface ListStackRefactorActionsInput {
  StackRefactorId: string;
  NextToken?: string;
  MaxResults?: number;
}
export interface ListStackRefactorActionsOutput {
  StackRefactorActions: Array<StackRefactorAction>;
  NextToken?: string;
}
export interface ListStackRefactorsInput {
  ExecutionStatusFilter?: Array<StackRefactorExecutionStatus>;
  NextToken?: string;
  MaxResults?: number;
}
export interface ListStackRefactorsOutput {
  StackRefactorSummaries: Array<StackRefactorSummary>;
  NextToken?: string;
}
export interface ListStackResourcesInput {
  StackName: string;
  NextToken?: string;
}
export interface ListStackResourcesOutput {
  StackResourceSummaries?: Array<StackResourceSummary>;
  NextToken?: string;
}
export interface ListStackSetAutoDeploymentTargetsInput {
  StackSetName: string;
  NextToken?: string;
  MaxResults?: number;
  CallAs?: CallAs;
}
export interface ListStackSetAutoDeploymentTargetsOutput {
  Summaries?: Array<StackSetAutoDeploymentTargetSummary>;
  NextToken?: string;
}
export interface ListStackSetOperationResultsInput {
  StackSetName: string;
  OperationId: string;
  NextToken?: string;
  MaxResults?: number;
  CallAs?: CallAs;
  Filters?: Array<OperationResultFilter>;
}
export interface ListStackSetOperationResultsOutput {
  Summaries?: Array<StackSetOperationResultSummary>;
  NextToken?: string;
}
export interface ListStackSetOperationsInput {
  StackSetName: string;
  NextToken?: string;
  MaxResults?: number;
  CallAs?: CallAs;
}
export interface ListStackSetOperationsOutput {
  Summaries?: Array<StackSetOperationSummary>;
  NextToken?: string;
}
export interface ListStackSetsInput {
  NextToken?: string;
  MaxResults?: number;
  Status?: StackSetStatus;
  CallAs?: CallAs;
}
export interface ListStackSetsOutput {
  Summaries?: Array<StackSetSummary>;
  NextToken?: string;
}
export interface ListStacksInput {
  NextToken?: string;
  StackStatusFilter?: Array<StackStatus>;
}
export interface ListStacksOutput {
  StackSummaries?: Array<StackSummary>;
  NextToken?: string;
}
export interface ListTypeRegistrationsInput {
  Type?: RegistryType;
  TypeName?: string;
  TypeArn?: string;
  RegistrationStatusFilter?: RegistrationStatus;
  MaxResults?: number;
  NextToken?: string;
}
export interface ListTypeRegistrationsOutput {
  RegistrationTokenList?: Array<string>;
  NextToken?: string;
}
export interface ListTypesInput {
  Visibility?: Visibility;
  ProvisioningType?: ProvisioningType;
  DeprecatedStatus?: DeprecatedStatus;
  Type?: RegistryType;
  Filters?: TypeFilters;
  MaxResults?: number;
  NextToken?: string;
}
export interface ListTypesOutput {
  TypeSummaries?: Array<TypeSummary>;
  NextToken?: string;
}
export interface ListTypeVersionsInput {
  Type?: RegistryType;
  TypeName?: string;
  Arn?: string;
  MaxResults?: number;
  NextToken?: string;
  DeprecatedStatus?: DeprecatedStatus;
  PublisherId?: string;
}
export interface ListTypeVersionsOutput {
  TypeVersionSummaries?: Array<TypeVersionSummary>;
  NextToken?: string;
}
export interface LoggingConfig {
  LogRoleArn: string;
  LogGroupName: string;
}
export type LogGroupName = string;

export type LogicalIdHierarchy = string;

export type LogicalResourceId = string;

export type LogicalResourceIds = Array<string>;
export type MajorVersion = number;

export type ManagedByStack = boolean;

export interface ManagedExecution {
  Active?: boolean;
}
export type ManagedExecutionNullable = boolean;

export type MaxConcurrentCount = number;

export type MaxConcurrentPercentage = number;

export type MaxResults = number;

export type Metadata = string;

export interface ModuleInfo {
  TypeHierarchy?: string;
  LogicalIdHierarchy?: string;
}
export type MonitoringTimeInMinutes = number;

export declare class NameAlreadyExistsException extends EffectData.TaggedError(
  "NameAlreadyExistsException",
)<{
  readonly Message?: string;
}> {}
export type NextToken = string;

export type NoEcho = boolean;

export type NotificationARN = string;

export type NotificationARNs = Array<string>;
export type NumberOfResources = number;

export type OnFailure = "DO_NOTHING" | "ROLLBACK" | "DELETE";
export type OnStackFailure = "DO_NOTHING" | "ROLLBACK" | "DELETE";
export declare class OperationIdAlreadyExistsException extends EffectData.TaggedError(
  "OperationIdAlreadyExistsException",
)<{
  readonly Message?: string;
}> {}
export declare class OperationInProgressException extends EffectData.TaggedError(
  "OperationInProgressException",
)<{
  readonly Message?: string;
}> {}
export declare class OperationNotFoundException extends EffectData.TaggedError(
  "OperationNotFoundException",
)<{
  readonly Message?: string;
}> {}
export interface OperationResultFilter {
  Name?: OperationResultFilterName;
  Values?: string;
}
export type OperationResultFilterName = "OPERATION_RESULT_STATUS";
export type OperationResultFilters = Array<OperationResultFilter>;
export type OperationResultFilterValues = string;

export type OperationStatus = "PENDING" | "IN_PROGRESS" | "SUCCESS" | "FAILED";
export declare class OperationStatusCheckFailedException extends EffectData.TaggedError(
  "OperationStatusCheckFailedException",
)<{
  readonly Message?: string;
}> {}
export type OptionalSecureUrl = string;

export type OrganizationalUnitId = string;

export type OrganizationalUnitIdList = Array<string>;
export type OrganizationStatus =
  | "ENABLED"
  | "DISABLED"
  | "DISABLED_PERMANENTLY";
export interface Output {
  OutputKey?: string;
  OutputValue?: string;
  Description?: string;
  ExportName?: string;
}
export type OutputKey = string;

export type Outputs = Array<Output>;
export type OutputValue = string;

export interface Parameter {
  ParameterKey?: string;
  ParameterValue?: string;
  UsePreviousValue?: boolean;
  ResolvedValue?: string;
}
export interface ParameterConstraints {
  AllowedValues?: Array<string>;
}
export interface ParameterDeclaration {
  ParameterKey?: string;
  DefaultValue?: string;
  ParameterType?: string;
  NoEcho?: boolean;
  Description?: string;
  ParameterConstraints?: ParameterConstraints;
}
export type ParameterDeclarations = Array<ParameterDeclaration>;
export type ParameterKey = string;

export type Parameters = Array<Parameter>;
export type ParameterType = string;

export type ParameterValue = string;

export type PercentageCompleted = number;

export type PermissionModels = "SERVICE_MANAGED" | "SELF_MANAGED";
export type PhysicalResourceId = string;

export type PhysicalResourceIdContext =
  Array<PhysicalResourceIdContextKeyValuePair>;
export interface PhysicalResourceIdContextKeyValuePair {
  Key: string;
  Value: string;
}
export type PolicyAction =
  | "Delete"
  | "Retain"
  | "Snapshot"
  | "ReplaceAndDelete"
  | "ReplaceAndRetain"
  | "ReplaceAndSnapshot";
export type PrivateTypeArn = string;

export type Properties = string;

export type PropertyDescription = string;

export interface PropertyDifference {
  PropertyPath: string;
  ExpectedValue: string;
  ActualValue: string;
  DifferenceType: DifferenceType;
}
export type PropertyDifferences = Array<PropertyDifference>;
export type PropertyName = string;

export type PropertyPath = string;

export type PropertyValue = string;

export type ProvisioningType =
  | "NON_PROVISIONABLE"
  | "IMMUTABLE"
  | "FULLY_MUTABLE";
export type PublicVersionNumber = string;

export type PublisherId = string;

export type PublisherName = string;

export type PublisherProfile = string;

export type PublisherStatus = "VERIFIED" | "UNVERIFIED";
export interface PublishTypeInput {
  Type?: ThirdPartyType;
  Arn?: string;
  TypeName?: string;
  PublicVersionNumber?: string;
}
export interface PublishTypeOutput {
  PublicTypeArn?: string;
}
export type Reason = string;

export interface RecordHandlerProgressInput {
  BearerToken: string;
  OperationStatus: OperationStatus;
  CurrentOperationStatus?: OperationStatus;
  StatusMessage?: string;
  ErrorCode?: HandlerErrorCode;
  ResourceModel?: string;
  ClientRequestToken?: string;
}
export interface RecordHandlerProgressOutput {}
export type RefreshAllResources = boolean;

export type Region = string;

export type RegionConcurrencyType = "SEQUENTIAL" | "PARALLEL";
export type RegionList = Array<string>;
export interface RegisterPublisherInput {
  AcceptTermsAndConditions?: boolean;
  ConnectionArn?: string;
}
export interface RegisterPublisherOutput {
  PublisherId?: string;
}
export interface RegisterTypeInput {
  Type?: RegistryType;
  TypeName: string;
  SchemaHandlerPackage: string;
  LoggingConfig?: LoggingConfig;
  ExecutionRoleArn?: string;
  ClientRequestToken?: string;
}
export interface RegisterTypeOutput {
  RegistrationToken?: string;
}
export type RegistrationStatus = "COMPLETE" | "IN_PROGRESS" | "FAILED";
export type RegistrationToken = string;

export type RegistrationTokenList = Array<string>;
export type RegistryType = "RESOURCE" | "MODULE" | "HOOK";
export type RelatedResources = Array<ScannedResource>;
export type Replacement = "True" | "False" | "Conditional";
export type RequestToken = string;

export interface RequiredActivatedType {
  TypeNameAlias?: string;
  OriginalTypeName?: string;
  PublisherId?: string;
  SupportedMajorVersions?: Array<number>;
}
export type RequiredActivatedTypes = Array<RequiredActivatedType>;
export type RequiredProperty = boolean;

export type RequiresRecreation = "Never" | "Conditionally" | "Always";
export type ResourceAttribute =
  | "Properties"
  | "Metadata"
  | "CreationPolicy"
  | "UpdatePolicy"
  | "DeletionPolicy"
  | "UpdateReplacePolicy"
  | "Tags";
export interface ResourceChange {
  PolicyAction?: PolicyAction;
  Action?: ChangeAction;
  LogicalResourceId?: string;
  PhysicalResourceId?: string;
  ResourceType?: string;
  Replacement?: Replacement;
  Scope?: Array<ResourceAttribute>;
  Details?: Array<ResourceChangeDetail>;
  ChangeSetId?: string;
  ModuleInfo?: ModuleInfo;
  BeforeContext?: string;
  AfterContext?: string;
}
export interface ResourceChangeDetail {
  Target?: ResourceTargetDefinition;
  Evaluation?: EvaluationType;
  ChangeSource?: ChangeSource;
  CausingEntity?: string;
}
export type ResourceChangeDetails = Array<ResourceChangeDetail>;
export interface ResourceDefinition {
  ResourceType: string;
  LogicalResourceId?: string;
  ResourceIdentifier: Record<string, string>;
}
export type ResourceDefinitions = Array<ResourceDefinition>;
export interface ResourceDetail {
  ResourceType?: string;
  LogicalResourceId?: string;
  ResourceIdentifier?: Record<string, string>;
  ResourceStatus?: GeneratedTemplateResourceStatus;
  ResourceStatusReason?: string;
  Warnings?: Array<WarningDetail>;
}
export type ResourceDetails = Array<ResourceDetail>;
export type ResourceIdentifier = string;

export type ResourceIdentifierProperties = Record<string, string>;
export type ResourceIdentifierPropertyKey = string;

export type ResourceIdentifierPropertyValue = string;

export type ResourceIdentifiers = Array<string>;
export type ResourceIdentifierSummaries = Array<ResourceIdentifierSummary>;
export interface ResourceIdentifierSummary {
  ResourceType?: string;
  LogicalResourceIds?: Array<string>;
  ResourceIdentifiers?: Array<string>;
}
export interface ResourceLocation {
  StackName: string;
  LogicalResourceId: string;
}
export interface ResourceMapping {
  Source: ResourceLocation;
  Destination: ResourceLocation;
}
export type ResourceMappings = Array<ResourceMapping>;
export type ResourceModel = string;

export type ResourceProperties = string;

export type ResourcePropertyPath = string;

export type ResourceScanId = string;

export declare class ResourceScanInProgressException extends EffectData.TaggedError(
  "ResourceScanInProgressException",
)<{
  readonly Message?: string;
}> {}
export declare class ResourceScanLimitExceededException extends EffectData.TaggedError(
  "ResourceScanLimitExceededException",
)<{
  readonly Message?: string;
}> {}
export type ResourceScannerMaxResults = number;

export declare class ResourceScanNotFoundException extends EffectData.TaggedError(
  "ResourceScanNotFoundException",
)<{
  readonly Message?: string;
}> {}
export type ResourceScanStatus =
  | "IN_PROGRESS"
  | "FAILED"
  | "COMPLETE"
  | "EXPIRED";
export type ResourceScanStatusReason = string;

export type ResourceScanSummaries = Array<ResourceScanSummary>;
export interface ResourceScanSummary {
  ResourceScanId?: string;
  Status?: ResourceScanStatus;
  StatusReason?: string;
  StartTime?: Date | string;
  EndTime?: Date | string;
  PercentageCompleted?: number;
  ScanType?: ScanType;
}
export type ResourcesFailed = number;

export type ResourceSignalStatus = "SUCCESS" | "FAILURE";
export type ResourceSignalUniqueId = string;

export type ResourcesPending = number;

export type ResourcesProcessing = number;

export type ResourcesRead = number;

export type ResourcesScanned = number;

export type ResourcesSucceeded = number;

export type ResourceStatus =
  | "CREATE_IN_PROGRESS"
  | "CREATE_FAILED"
  | "CREATE_COMPLETE"
  | "DELETE_IN_PROGRESS"
  | "DELETE_FAILED"
  | "DELETE_COMPLETE"
  | "DELETE_SKIPPED"
  | "UPDATE_IN_PROGRESS"
  | "UPDATE_FAILED"
  | "UPDATE_COMPLETE"
  | "IMPORT_FAILED"
  | "IMPORT_COMPLETE"
  | "IMPORT_IN_PROGRESS"
  | "IMPORT_ROLLBACK_IN_PROGRESS"
  | "IMPORT_ROLLBACK_FAILED"
  | "IMPORT_ROLLBACK_COMPLETE"
  | "EXPORT_FAILED"
  | "EXPORT_COMPLETE"
  | "EXPORT_IN_PROGRESS"
  | "EXPORT_ROLLBACK_IN_PROGRESS"
  | "EXPORT_ROLLBACK_FAILED"
  | "EXPORT_ROLLBACK_COMPLETE"
  | "UPDATE_ROLLBACK_IN_PROGRESS"
  | "UPDATE_ROLLBACK_COMPLETE"
  | "UPDATE_ROLLBACK_FAILED"
  | "ROLLBACK_IN_PROGRESS"
  | "ROLLBACK_COMPLETE"
  | "ROLLBACK_FAILED";
export type ResourceStatusReason = string;

export type ResourcesToImport = Array<ResourceToImport>;
export type ResourcesToSkip = Array<string>;
export interface ResourceTargetDefinition {
  Attribute?: ResourceAttribute;
  Name?: string;
  RequiresRecreation?: RequiresRecreation;
  Path?: string;
  BeforeValue?: string;
  AfterValue?: string;
  AttributeChangeType?: AttributeChangeType;
}
export interface ResourceToImport {
  ResourceType: string;
  LogicalResourceId: string;
  ResourceIdentifier: Record<string, string>;
}
export type ResourceToSkip = string;

export type ResourceType = string;

export type ResourceTypeFilter = string;

export type ResourceTypeFilters = Array<string>;
export type ResourceTypePrefix = string;

export type ResourceTypes = Array<string>;
export type RetainExceptOnCreate = boolean;

export type RetainResources = Array<string>;
export type RetainStacks = boolean;

export type RetainStacksNullable = boolean;

export type RetainStacksOnAccountRemovalNullable = boolean;

export type RoleARN = string;

export type RoleARN2 = string;

export interface RollbackConfiguration {
  RollbackTriggers?: Array<RollbackTrigger>;
  MonitoringTimeInMinutes?: number;
}
export interface RollbackStackInput {
  StackName: string;
  RoleARN?: string;
  ClientRequestToken?: string;
  RetainExceptOnCreate?: boolean;
}
export interface RollbackStackOutput {
  StackId?: string;
}
export interface RollbackTrigger {
  Arn: string;
  Type: string;
}
export type RollbackTriggers = Array<RollbackTrigger>;
export type S3Bucket = string;

export type S3Url = string;

export interface ScanFilter {
  Types?: Array<string>;
}
export type ScanFilters = Array<ScanFilter>;
export interface ScannedResource {
  ResourceType?: string;
  ResourceIdentifier?: Record<string, string>;
  ManagedByStack?: boolean;
}
export interface ScannedResourceIdentifier {
  ResourceType: string;
  ResourceIdentifier: Record<string, string>;
}
export type ScannedResourceIdentifiers = Array<ScannedResourceIdentifier>;
export type ScannedResources = Array<ScannedResource>;
export type ScanType = "FULL" | "PARTIAL";
export type Scope = Array<ResourceAttribute>;
export interface SetStackPolicyInput {
  StackName: string;
  StackPolicyBody?: string;
  StackPolicyURL?: string;
}
export interface SetTypeConfigurationInput {
  TypeArn?: string;
  Configuration: string;
  ConfigurationAlias?: string;
  TypeName?: string;
  Type?: ThirdPartyType;
}
export interface SetTypeConfigurationOutput {
  ConfigurationArn?: string;
}
export interface SetTypeDefaultVersionInput {
  Arn?: string;
  Type?: RegistryType;
  TypeName?: string;
  VersionId?: string;
}
export interface SetTypeDefaultVersionOutput {}
export interface SignalResourceInput {
  StackName: string;
  LogicalResourceId: string;
  UniqueId: string;
  Status: ResourceSignalStatus;
}
export interface Stack {
  StackId?: string;
  StackName: string;
  ChangeSetId?: string;
  Description?: string;
  Parameters?: Array<Parameter>;
  CreationTime: Date | string;
  DeletionTime?: Date | string;
  LastUpdatedTime?: Date | string;
  RollbackConfiguration?: RollbackConfiguration;
  StackStatus: StackStatus;
  StackStatusReason?: string;
  DisableRollback?: boolean;
  NotificationARNs?: Array<string>;
  TimeoutInMinutes?: number;
  Capabilities?: Array<Capability>;
  Outputs?: Array<Output>;
  RoleARN?: string;
  Tags?: Array<Tag>;
  EnableTerminationProtection?: boolean;
  ParentId?: string;
  RootId?: string;
  DriftInformation?: StackDriftInformation;
  RetainExceptOnCreate?: boolean;
  DeletionMode?: DeletionMode;
  DetailedStatus?: DetailedStatus;
}
export interface StackDefinition {
  StackName?: string;
  TemplateBody?: string;
  TemplateURL?: string;
}
export type StackDefinitions = Array<StackDefinition>;
export type StackDriftDetectionId = string;

export type StackDriftDetectionStatus =
  | "DETECTION_IN_PROGRESS"
  | "DETECTION_FAILED"
  | "DETECTION_COMPLETE";
export type StackDriftDetectionStatusReason = string;

export interface StackDriftInformation {
  StackDriftStatus: StackDriftStatus;
  LastCheckTimestamp?: Date | string;
}
export interface StackDriftInformationSummary {
  StackDriftStatus: StackDriftStatus;
  LastCheckTimestamp?: Date | string;
}
export type StackDriftStatus =
  | "DRIFTED"
  | "IN_SYNC"
  | "UNKNOWN"
  | "NOT_CHECKED";
export interface StackEvent {
  StackId: string;
  EventId: string;
  StackName: string;
  LogicalResourceId?: string;
  PhysicalResourceId?: string;
  ResourceType?: string;
  Timestamp: Date | string;
  ResourceStatus?: ResourceStatus;
  ResourceStatusReason?: string;
  ResourceProperties?: string;
  ClientRequestToken?: string;
  HookType?: string;
  HookStatus?: HookStatus;
  HookStatusReason?: string;
  HookInvocationPoint?: HookInvocationPoint;
  HookFailureMode?: HookFailureMode;
  DetailedStatus?: DetailedStatus;
}
export type StackEvents = Array<StackEvent>;
export type StackId = string;

export type StackIdList = Array<string>;
export type StackIds = Array<string>;
export type StackIdsUrl = string;

export interface StackInstance {
  StackSetId?: string;
  Region?: string;
  Account?: string;
  StackId?: string;
  ParameterOverrides?: Array<Parameter>;
  Status?: StackInstanceStatus;
  StackInstanceStatus?: StackInstanceComprehensiveStatus;
  StatusReason?: string;
  OrganizationalUnitId?: string;
  DriftStatus?: StackDriftStatus;
  LastDriftCheckTimestamp?: Date | string;
  LastOperationId?: string;
}
export interface StackInstanceComprehensiveStatus {
  DetailedStatus?: StackInstanceDetailedStatus;
}
export type StackInstanceDetailedStatus =
  | "PENDING"
  | "RUNNING"
  | "SUCCEEDED"
  | "FAILED"
  | "CANCELLED"
  | "INOPERABLE"
  | "SKIPPED_SUSPENDED_ACCOUNT"
  | "FAILED_IMPORT";
export interface StackInstanceFilter {
  Name?: StackInstanceFilterName;
  Values?: string;
}
export type StackInstanceFilterName =
  | "DETAILED_STATUS"
  | "LAST_OPERATION_ID"
  | "DRIFT_STATUS";
export type StackInstanceFilters = Array<StackInstanceFilter>;
export type StackInstanceFilterValues = string;

export declare class StackInstanceNotFoundException extends EffectData.TaggedError(
  "StackInstanceNotFoundException",
)<{
  readonly Message?: string;
}> {}
export type StackInstanceResourceDriftsSummaries =
  Array<StackInstanceResourceDriftsSummary>;
export interface StackInstanceResourceDriftsSummary {
  StackId: string;
  LogicalResourceId: string;
  PhysicalResourceId?: string;
  PhysicalResourceIdContext?: Array<PhysicalResourceIdContextKeyValuePair>;
  ResourceType: string;
  PropertyDifferences?: Array<PropertyDifference>;
  StackResourceDriftStatus: StackResourceDriftStatus;
  Timestamp: Date | string;
}
export type StackInstanceStatus = "CURRENT" | "OUTDATED" | "INOPERABLE";
export type StackInstanceSummaries = Array<StackInstanceSummary>;
export interface StackInstanceSummary {
  StackSetId?: string;
  Region?: string;
  Account?: string;
  StackId?: string;
  Status?: StackInstanceStatus;
  StatusReason?: string;
  StackInstanceStatus?: StackInstanceComprehensiveStatus;
  OrganizationalUnitId?: string;
  DriftStatus?: StackDriftStatus;
  LastDriftCheckTimestamp?: Date | string;
  LastOperationId?: string;
}
export type StackName = string;

export type StackNameOrId = string;

export declare class StackNotFoundException extends EffectData.TaggedError(
  "StackNotFoundException",
)<{
  readonly Message?: string;
}> {}
export type StackPolicyBody = string;

export type StackPolicyDuringUpdateBody = string;

export type StackPolicyDuringUpdateURL = string;

export type StackPolicyURL = string;

export interface StackRefactorAction {
  Action?: StackRefactorActionType;
  Entity?: StackRefactorActionEntity;
  PhysicalResourceId?: string;
  ResourceIdentifier?: string;
  Description?: string;
  Detection?: StackRefactorDetection;
  DetectionReason?: string;
  TagResources?: Array<Tag>;
  UntagResources?: Array<string>;
  ResourceMapping?: ResourceMapping;
}
export type StackRefactorActionEntity = "RESOURCE" | "STACK";
export type StackRefactorActions = Array<StackRefactorAction>;
export type StackRefactorActionType = "MOVE" | "CREATE";
export type StackRefactorDetection = "AUTO" | "MANUAL";
export type StackRefactorExecutionStatus =
  | "UNAVAILABLE"
  | "AVAILABLE"
  | "OBSOLETE"
  | "EXECUTE_IN_PROGRESS"
  | "EXECUTE_COMPLETE"
  | "EXECUTE_FAILED"
  | "ROLLBACK_IN_PROGRESS"
  | "ROLLBACK_COMPLETE"
  | "ROLLBACK_FAILED";
export type StackRefactorExecutionStatusFilter =
  Array<StackRefactorExecutionStatus>;
export type StackRefactorId = string;

export declare class StackRefactorNotFoundException extends EffectData.TaggedError(
  "StackRefactorNotFoundException",
)<{
  readonly Message?: string;
}> {}
export type StackRefactorResourceIdentifier = string;

export type StackRefactorStatus =
  | "CREATE_IN_PROGRESS"
  | "CREATE_COMPLETE"
  | "CREATE_FAILED"
  | "DELETE_IN_PROGRESS"
  | "DELETE_COMPLETE"
  | "DELETE_FAILED";
export type StackRefactorStatusReason = string;

export type StackRefactorSummaries = Array<StackRefactorSummary>;
export interface StackRefactorSummary {
  StackRefactorId?: string;
  Description?: string;
  ExecutionStatus?: StackRefactorExecutionStatus;
  ExecutionStatusReason?: string;
  Status?: StackRefactorStatus;
  StatusReason?: string;
}
export type StackRefactorTagResources = Array<Tag>;
export type StackRefactorUntagResources = Array<string>;
export interface StackResource {
  StackName?: string;
  StackId?: string;
  LogicalResourceId: string;
  PhysicalResourceId?: string;
  ResourceType: string;
  Timestamp: Date | string;
  ResourceStatus: ResourceStatus;
  ResourceStatusReason?: string;
  Description?: string;
  DriftInformation?: StackResourceDriftInformation;
  ModuleInfo?: ModuleInfo;
}
export interface StackResourceDetail {
  StackName?: string;
  StackId?: string;
  LogicalResourceId: string;
  PhysicalResourceId?: string;
  ResourceType: string;
  LastUpdatedTimestamp: Date | string;
  ResourceStatus: ResourceStatus;
  ResourceStatusReason?: string;
  Description?: string;
  Metadata?: string;
  DriftInformation?: StackResourceDriftInformation;
  ModuleInfo?: ModuleInfo;
}
export interface StackResourceDrift {
  StackId: string;
  LogicalResourceId: string;
  PhysicalResourceId?: string;
  PhysicalResourceIdContext?: Array<PhysicalResourceIdContextKeyValuePair>;
  ResourceType: string;
  ExpectedProperties?: string;
  ActualProperties?: string;
  PropertyDifferences?: Array<PropertyDifference>;
  StackResourceDriftStatus: StackResourceDriftStatus;
  Timestamp: Date | string;
  ModuleInfo?: ModuleInfo;
  DriftStatusReason?: string;
}
export interface StackResourceDriftInformation {
  StackResourceDriftStatus: StackResourceDriftStatus;
  LastCheckTimestamp?: Date | string;
}
export interface StackResourceDriftInformationSummary {
  StackResourceDriftStatus: StackResourceDriftStatus;
  LastCheckTimestamp?: Date | string;
}
export type StackResourceDrifts = Array<StackResourceDrift>;
export type StackResourceDriftStatus =
  | "IN_SYNC"
  | "MODIFIED"
  | "DELETED"
  | "NOT_CHECKED"
  | "UNKNOWN";
export type StackResourceDriftStatusFilters = Array<StackResourceDriftStatus>;
export type StackResourceDriftStatusReason = string;

export type StackResources = Array<StackResource>;
export type StackResourceSummaries = Array<StackResourceSummary>;
export interface StackResourceSummary {
  LogicalResourceId: string;
  PhysicalResourceId?: string;
  ResourceType: string;
  LastUpdatedTimestamp: Date | string;
  ResourceStatus: ResourceStatus;
  ResourceStatusReason?: string;
  DriftInformation?: StackResourceDriftInformationSummary;
  ModuleInfo?: ModuleInfo;
}
export type Stacks = Array<Stack>;
export interface StackSet {
  StackSetName?: string;
  StackSetId?: string;
  Description?: string;
  Status?: StackSetStatus;
  TemplateBody?: string;
  Parameters?: Array<Parameter>;
  Capabilities?: Array<Capability>;
  Tags?: Array<Tag>;
  StackSetARN?: string;
  AdministrationRoleARN?: string;
  ExecutionRoleName?: string;
  StackSetDriftDetectionDetails?: StackSetDriftDetectionDetails;
  AutoDeployment?: AutoDeployment;
  PermissionModel?: PermissionModels;
  OrganizationalUnitIds?: Array<string>;
  ManagedExecution?: ManagedExecution;
  Regions?: Array<string>;
}
export type StackSetARN = string;

export type StackSetAutoDeploymentTargetSummaries =
  Array<StackSetAutoDeploymentTargetSummary>;
export interface StackSetAutoDeploymentTargetSummary {
  OrganizationalUnitId?: string;
  Regions?: Array<string>;
}
export interface StackSetDriftDetectionDetails {
  DriftStatus?: StackSetDriftStatus;
  DriftDetectionStatus?: StackSetDriftDetectionStatus;
  LastDriftCheckTimestamp?: Date | string;
  TotalStackInstancesCount?: number;
  DriftedStackInstancesCount?: number;
  InSyncStackInstancesCount?: number;
  InProgressStackInstancesCount?: number;
  FailedStackInstancesCount?: number;
}
export type StackSetDriftDetectionStatus =
  | "COMPLETED"
  | "FAILED"
  | "PARTIAL_SUCCESS"
  | "IN_PROGRESS"
  | "STOPPED";
export type StackSetDriftStatus = "DRIFTED" | "IN_SYNC" | "NOT_CHECKED";
export type StackSetId = string;

export type StackSetName = string;

export type StackSetNameOrId = string;

export declare class StackSetNotEmptyException extends EffectData.TaggedError(
  "StackSetNotEmptyException",
)<{
  readonly Message?: string;
}> {}
export declare class StackSetNotFoundException extends EffectData.TaggedError(
  "StackSetNotFoundException",
)<{
  readonly Message?: string;
}> {}
export interface StackSetOperation {
  OperationId?: string;
  StackSetId?: string;
  Action?: StackSetOperationAction;
  Status?: StackSetOperationStatus;
  OperationPreferences?: StackSetOperationPreferences;
  RetainStacks?: boolean;
  AdministrationRoleARN?: string;
  ExecutionRoleName?: string;
  CreationTimestamp?: Date | string;
  EndTimestamp?: Date | string;
  DeploymentTargets?: DeploymentTargets;
  StackSetDriftDetectionDetails?: StackSetDriftDetectionDetails;
  StatusReason?: string;
  StatusDetails?: StackSetOperationStatusDetails;
}
export type StackSetOperationAction =
  | "CREATE"
  | "UPDATE"
  | "DELETE"
  | "DETECT_DRIFT";
export interface StackSetOperationPreferences {
  RegionConcurrencyType?: RegionConcurrencyType;
  RegionOrder?: Array<string>;
  FailureToleranceCount?: number;
  FailureTolerancePercentage?: number;
  MaxConcurrentCount?: number;
  MaxConcurrentPercentage?: number;
  ConcurrencyMode?: ConcurrencyMode;
}
export type StackSetOperationResultStatus =
  | "PENDING"
  | "RUNNING"
  | "SUCCEEDED"
  | "FAILED"
  | "CANCELLED";
export type StackSetOperationResultSummaries =
  Array<StackSetOperationResultSummary>;
export interface StackSetOperationResultSummary {
  Account?: string;
  Region?: string;
  Status?: StackSetOperationResultStatus;
  StatusReason?: string;
  AccountGateResult?: AccountGateResult;
  OrganizationalUnitId?: string;
}
export type StackSetOperationStatus =
  | "RUNNING"
  | "SUCCEEDED"
  | "FAILED"
  | "STOPPING"
  | "STOPPED"
  | "QUEUED";
export interface StackSetOperationStatusDetails {
  FailedStackInstancesCount?: number;
}
export type StackSetOperationStatusReason = string;

export type StackSetOperationSummaries = Array<StackSetOperationSummary>;
export interface StackSetOperationSummary {
  OperationId?: string;
  Action?: StackSetOperationAction;
  Status?: StackSetOperationStatus;
  CreationTimestamp?: Date | string;
  EndTimestamp?: Date | string;
  StatusReason?: string;
  StatusDetails?: StackSetOperationStatusDetails;
  OperationPreferences?: StackSetOperationPreferences;
}
export type StackSetStatus = "ACTIVE" | "DELETED";
export type StackSetSummaries = Array<StackSetSummary>;
export interface StackSetSummary {
  StackSetName?: string;
  StackSetId?: string;
  Description?: string;
  Status?: StackSetStatus;
  AutoDeployment?: AutoDeployment;
  PermissionModel?: PermissionModels;
  DriftStatus?: StackDriftStatus;
  LastDriftCheckTimestamp?: Date | string;
  ManagedExecution?: ManagedExecution;
}
export type StackStatus =
  | "CREATE_IN_PROGRESS"
  | "CREATE_FAILED"
  | "CREATE_COMPLETE"
  | "ROLLBACK_IN_PROGRESS"
  | "ROLLBACK_FAILED"
  | "ROLLBACK_COMPLETE"
  | "DELETE_IN_PROGRESS"
  | "DELETE_FAILED"
  | "DELETE_COMPLETE"
  | "UPDATE_IN_PROGRESS"
  | "UPDATE_COMPLETE_CLEANUP_IN_PROGRESS"
  | "UPDATE_COMPLETE"
  | "UPDATE_FAILED"
  | "UPDATE_ROLLBACK_IN_PROGRESS"
  | "UPDATE_ROLLBACK_FAILED"
  | "UPDATE_ROLLBACK_COMPLETE_CLEANUP_IN_PROGRESS"
  | "UPDATE_ROLLBACK_COMPLETE"
  | "REVIEW_IN_PROGRESS"
  | "IMPORT_IN_PROGRESS"
  | "IMPORT_COMPLETE"
  | "IMPORT_ROLLBACK_IN_PROGRESS"
  | "IMPORT_ROLLBACK_FAILED"
  | "IMPORT_ROLLBACK_COMPLETE";
export type StackStatusFilter = Array<StackStatus>;
export type StackStatusReason = string;

export type StackSummaries = Array<StackSummary>;
export interface StackSummary {
  StackId?: string;
  StackName: string;
  TemplateDescription?: string;
  CreationTime: Date | string;
  LastUpdatedTime?: Date | string;
  DeletionTime?: Date | string;
  StackStatus: StackStatus;
  StackStatusReason?: string;
  ParentId?: string;
  RootId?: string;
  DriftInformation?: StackDriftInformationSummary;
}
export type StageList = Array<TemplateStage>;
export declare class StaleRequestException extends EffectData.TaggedError(
  "StaleRequestException",
)<{
  readonly Message?: string;
}> {}
export interface StartResourceScanInput {
  ClientRequestToken?: string;
  ScanFilters?: Array<ScanFilter>;
}
export interface StartResourceScanOutput {
  ResourceScanId?: string;
}
export type StatusMessage = string;

export interface StopStackSetOperationInput {
  StackSetName: string;
  OperationId: string;
  CallAs?: CallAs;
}
export interface StopStackSetOperationOutput {}
export type SupportedMajorVersion = number;

export type SupportedMajorVersions = Array<number>;
export interface Tag {
  Key: string;
  Value: string;
}
export type TagKey = string;

export type Tags = Array<Tag>;
export type TagValue = string;

export type TemplateBody = string;

export interface TemplateConfiguration {
  DeletionPolicy?: GeneratedTemplateDeletionPolicy;
  UpdateReplacePolicy?: GeneratedTemplateUpdateReplacePolicy;
}
export type TemplateDescription = string;

export type TemplateFormat = "JSON" | "YAML";
export interface TemplateParameter {
  ParameterKey?: string;
  DefaultValue?: string;
  NoEcho?: boolean;
  Description?: string;
}
export type TemplateParameters = Array<TemplateParameter>;
export interface TemplateProgress {
  ResourcesSucceeded?: number;
  ResourcesFailed?: number;
  ResourcesProcessing?: number;
  ResourcesPending?: number;
}
export type TemplateStage = "Original" | "Processed";
export type TemplateStatusReason = string;

export type TemplateSummaries = Array<TemplateSummary>;
export interface TemplateSummary {
  GeneratedTemplateId?: string;
  GeneratedTemplateName?: string;
  Status?: GeneratedTemplateStatus;
  StatusReason?: string;
  CreationTime?: Date | string;
  LastUpdatedTime?: Date | string;
  NumberOfResources?: number;
}
export interface TemplateSummaryConfig {
  TreatUnrecognizedResourceTypesAsWarnings?: boolean;
}
export type TemplateURL = string;

export interface TestTypeInput {
  Arn?: string;
  Type?: ThirdPartyType;
  TypeName?: string;
  VersionId?: string;
  LogDeliveryBucket?: string;
}
export interface TestTypeOutput {
  TypeVersionArn?: string;
}
export type ThirdPartyType = "RESOURCE" | "MODULE" | "HOOK";
export type ThirdPartyTypeArn = string;

export type TimeoutMinutes = number;

export type Timestamp = Date | string;

export declare class TokenAlreadyExistsException extends EffectData.TaggedError(
  "TokenAlreadyExistsException",
)<{
  readonly Message?: string;
}> {}
export type TotalStackInstancesCount = number;

export type TotalWarnings = number;

export type TransformName = string;

export type TransformsList = Array<string>;
export type TreatUnrecognizedResourceTypesAsWarnings = boolean;

export type Type = string;

export type TypeArn = string;

export type TypeConfiguration = string;

export type TypeConfigurationAlias = string;

export type TypeConfigurationArn = string;

export interface TypeConfigurationDetails {
  Arn?: string;
  Alias?: string;
  Configuration?: string;
  LastUpdated?: Date | string;
  TypeArn?: string;
  TypeName?: string;
  IsDefaultConfiguration?: boolean;
}
export type TypeConfigurationDetailsList = Array<TypeConfigurationDetails>;
export interface TypeConfigurationIdentifier {
  TypeArn?: string;
  TypeConfigurationAlias?: string;
  TypeConfigurationArn?: string;
  Type?: ThirdPartyType;
  TypeName?: string;
}
export type TypeConfigurationIdentifiers = Array<TypeConfigurationIdentifier>;
export declare class TypeConfigurationNotFoundException extends EffectData.TaggedError(
  "TypeConfigurationNotFoundException",
)<{
  readonly Message?: string;
}> {}
export interface TypeFilters {
  Category?: Category;
  PublisherId?: string;
  TypeNamePrefix?: string;
}
export type TypeHierarchy = string;

export type TypeName = string;

export type TypeNamePrefix = string;

export declare class TypeNotFoundException extends EffectData.TaggedError(
  "TypeNotFoundException",
)<{
  readonly Message?: string;
}> {}
export type TypeSchema = string;

export type TypeSummaries = Array<TypeSummary>;
export interface TypeSummary {
  Type?: RegistryType;
  TypeName?: string;
  DefaultVersionId?: string;
  TypeArn?: string;
  LastUpdated?: Date | string;
  Description?: string;
  PublisherId?: string;
  OriginalTypeName?: string;
  PublicVersionNumber?: string;
  LatestPublicVersion?: string;
  PublisherIdentity?: IdentityProvider;
  PublisherName?: string;
  IsActivated?: boolean;
}
export type TypeTestsStatus =
  | "PASSED"
  | "FAILED"
  | "IN_PROGRESS"
  | "NOT_TESTED";
export type TypeTestsStatusDescription = string;

export type TypeVersionId = string;

export type TypeVersionSummaries = Array<TypeVersionSummary>;
export interface TypeVersionSummary {
  Type?: RegistryType;
  TypeName?: string;
  VersionId?: string;
  IsDefaultVersion?: boolean;
  Arn?: string;
  TimeCreated?: Date | string;
  Description?: string;
  PublicVersionNumber?: string;
}
export type UnprocessedTypeConfigurations = Array<TypeConfigurationIdentifier>;
export interface UpdateGeneratedTemplateInput {
  GeneratedTemplateName: string;
  NewGeneratedTemplateName?: string;
  AddResources?: Array<ResourceDefinition>;
  RemoveResources?: Array<string>;
  RefreshAllResources?: boolean;
  TemplateConfiguration?: TemplateConfiguration;
}
export interface UpdateGeneratedTemplateOutput {
  GeneratedTemplateId?: string;
}
export interface UpdateStackInput {
  StackName: string;
  TemplateBody?: string;
  TemplateURL?: string;
  UsePreviousTemplate?: boolean;
  StackPolicyDuringUpdateBody?: string;
  StackPolicyDuringUpdateURL?: string;
  Parameters?: Array<Parameter>;
  Capabilities?: Array<Capability>;
  ResourceTypes?: Array<string>;
  RoleARN?: string;
  RollbackConfiguration?: RollbackConfiguration;
  StackPolicyBody?: string;
  StackPolicyURL?: string;
  NotificationARNs?: Array<string>;
  Tags?: Array<Tag>;
  DisableRollback?: boolean;
  ClientRequestToken?: string;
  RetainExceptOnCreate?: boolean;
}
export interface UpdateStackInstancesInput {
  StackSetName: string;
  Accounts?: Array<string>;
  DeploymentTargets?: DeploymentTargets;
  Regions: Array<string>;
  ParameterOverrides?: Array<Parameter>;
  OperationPreferences?: StackSetOperationPreferences;
  OperationId?: string;
  CallAs?: CallAs;
}
export interface UpdateStackInstancesOutput {
  OperationId?: string;
}
export interface UpdateStackOutput {
  StackId?: string;
}
export interface UpdateStackSetInput {
  StackSetName: string;
  Description?: string;
  TemplateBody?: string;
  TemplateURL?: string;
  UsePreviousTemplate?: boolean;
  Parameters?: Array<Parameter>;
  Capabilities?: Array<Capability>;
  Tags?: Array<Tag>;
  OperationPreferences?: StackSetOperationPreferences;
  AdministrationRoleARN?: string;
  ExecutionRoleName?: string;
  DeploymentTargets?: DeploymentTargets;
  PermissionModel?: PermissionModels;
  AutoDeployment?: AutoDeployment;
  OperationId?: string;
  Accounts?: Array<string>;
  Regions?: Array<string>;
  CallAs?: CallAs;
  ManagedExecution?: ManagedExecution;
}
export interface UpdateStackSetOutput {
  OperationId?: string;
}
export interface UpdateTerminationProtectionInput {
  EnableTerminationProtection: boolean;
  StackName: string;
}
export interface UpdateTerminationProtectionOutput {
  StackId?: string;
}
export type Url = string;

export type UsePreviousTemplate = boolean;

export type UsePreviousValue = boolean;

export interface ValidateTemplateInput {
  TemplateBody?: string;
  TemplateURL?: string;
}
export interface ValidateTemplateOutput {
  Parameters?: Array<TemplateParameter>;
  Description?: string;
  Capabilities?: Array<Capability>;
  CapabilitiesReason?: string;
  DeclaredTransforms?: Array<string>;
}
export type Value = string;

export type Version = string;

export type VersionBump = "MAJOR" | "MINOR";
export type Visibility = "PUBLIC" | "PRIVATE";
export interface WarningDetail {
  Type?: WarningType;
  Properties?: Array<WarningProperty>;
}
export type WarningDetails = Array<WarningDetail>;
export type WarningProperties = Array<WarningProperty>;
export interface WarningProperty {
  PropertyPath?: string;
  Required?: boolean;
  Description?: string;
}
export interface Warnings {
  UnrecognizedResourceTypes?: Array<string>;
}
export type WarningType =
  | "MUTUALLY_EXCLUSIVE_PROPERTIES"
  | "UNSUPPORTED_PROPERTIES"
  | "MUTUALLY_EXCLUSIVE_TYPES"
  | "EXCLUDED_PROPERTIES";
export declare namespace ActivateOrganizationsAccess {
  export type Input = ActivateOrganizationsAccessInput;
  export type Output = ActivateOrganizationsAccessOutput;
  export type Error =
    | InvalidOperationException
    | OperationNotFoundException
    | CommonAwsError;
}

export declare namespace ActivateType {
  export type Input = ActivateTypeInput;
  export type Output = ActivateTypeOutput;
  export type Error =
    | CFNRegistryException
    | TypeNotFoundException
    | CommonAwsError;
}

export declare namespace BatchDescribeTypeConfigurations {
  export type Input = BatchDescribeTypeConfigurationsInput;
  export type Output = BatchDescribeTypeConfigurationsOutput;
  export type Error =
    | CFNRegistryException
    | TypeConfigurationNotFoundException
    | CommonAwsError;
}

export declare namespace CancelUpdateStack {
  export type Input = CancelUpdateStackInput;
  export type Output = {};
  export type Error = TokenAlreadyExistsException | CommonAwsError;
}

export declare namespace ContinueUpdateRollback {
  export type Input = ContinueUpdateRollbackInput;
  export type Output = ContinueUpdateRollbackOutput;
  export type Error = TokenAlreadyExistsException | CommonAwsError;
}

export declare namespace CreateChangeSet {
  export type Input = CreateChangeSetInput;
  export type Output = CreateChangeSetOutput;
  export type Error =
    | AlreadyExistsException
    | InsufficientCapabilitiesException
    | LimitExceededException
    | CommonAwsError;
}

export declare namespace CreateGeneratedTemplate {
  export type Input = CreateGeneratedTemplateInput;
  export type Output = CreateGeneratedTemplateOutput;
  export type Error =
    | AlreadyExistsException
    | ConcurrentResourcesLimitExceededException
    | LimitExceededException
    | CommonAwsError;
}

export declare namespace CreateStack {
  export type Input = CreateStackInput;
  export type Output = CreateStackOutput;
  export type Error =
    | AlreadyExistsException
    | InsufficientCapabilitiesException
    | LimitExceededException
    | TokenAlreadyExistsException
    | CommonAwsError;
}

export declare namespace CreateStackInstances {
  export type Input = CreateStackInstancesInput;
  export type Output = CreateStackInstancesOutput;
  export type Error =
    | InvalidOperationException
    | LimitExceededException
    | OperationIdAlreadyExistsException
    | OperationInProgressException
    | StackSetNotFoundException
    | StaleRequestException
    | CommonAwsError;
}

export declare namespace CreateStackRefactor {
  export type Input = CreateStackRefactorInput;
  export type Output = CreateStackRefactorOutput;
  export type Error = CommonAwsError;
}

export declare namespace CreateStackSet {
  export type Input = CreateStackSetInput;
  export type Output = CreateStackSetOutput;
  export type Error =
    | CreatedButModifiedException
    | LimitExceededException
    | NameAlreadyExistsException
    | CommonAwsError;
}

export declare namespace DeactivateOrganizationsAccess {
  export type Input = DeactivateOrganizationsAccessInput;
  export type Output = DeactivateOrganizationsAccessOutput;
  export type Error =
    | InvalidOperationException
    | OperationNotFoundException
    | CommonAwsError;
}

export declare namespace DeactivateType {
  export type Input = DeactivateTypeInput;
  export type Output = DeactivateTypeOutput;
  export type Error =
    | CFNRegistryException
    | TypeNotFoundException
    | CommonAwsError;
}

export declare namespace DeleteChangeSet {
  export type Input = DeleteChangeSetInput;
  export type Output = DeleteChangeSetOutput;
  export type Error = InvalidChangeSetStatusException | CommonAwsError;
}

export declare namespace DeleteGeneratedTemplate {
  export type Input = DeleteGeneratedTemplateInput;
  export type Output = {};
  export type Error =
    | ConcurrentResourcesLimitExceededException
    | GeneratedTemplateNotFoundException
    | CommonAwsError;
}

export declare namespace DeleteStack {
  export type Input = DeleteStackInput;
  export type Output = {};
  export type Error = TokenAlreadyExistsException | CommonAwsError;
}

export declare namespace DeleteStackInstances {
  export type Input = DeleteStackInstancesInput;
  export type Output = DeleteStackInstancesOutput;
  export type Error =
    | InvalidOperationException
    | OperationIdAlreadyExistsException
    | OperationInProgressException
    | StackSetNotFoundException
    | StaleRequestException
    | CommonAwsError;
}

export declare namespace DeleteStackSet {
  export type Input = DeleteStackSetInput;
  export type Output = DeleteStackSetOutput;
  export type Error =
    | OperationInProgressException
    | StackSetNotEmptyException
    | CommonAwsError;
}

export declare namespace DeregisterType {
  export type Input = DeregisterTypeInput;
  export type Output = DeregisterTypeOutput;
  export type Error =
    | CFNRegistryException
    | TypeNotFoundException
    | CommonAwsError;
}

export declare namespace DescribeAccountLimits {
  export type Input = DescribeAccountLimitsInput;
  export type Output = DescribeAccountLimitsOutput;
  export type Error = CommonAwsError;
}

export declare namespace DescribeChangeSet {
  export type Input = DescribeChangeSetInput;
  export type Output = DescribeChangeSetOutput;
  export type Error = ChangeSetNotFoundException | CommonAwsError;
}

export declare namespace DescribeChangeSetHooks {
  export type Input = DescribeChangeSetHooksInput;
  export type Output = DescribeChangeSetHooksOutput;
  export type Error = ChangeSetNotFoundException | CommonAwsError;
}

export declare namespace DescribeGeneratedTemplate {
  export type Input = DescribeGeneratedTemplateInput;
  export type Output = DescribeGeneratedTemplateOutput;
  export type Error = GeneratedTemplateNotFoundException | CommonAwsError;
}

export declare namespace DescribeOrganizationsAccess {
  export type Input = DescribeOrganizationsAccessInput;
  export type Output = DescribeOrganizationsAccessOutput;
  export type Error =
    | InvalidOperationException
    | OperationNotFoundException
    | CommonAwsError;
}

export declare namespace DescribePublisher {
  export type Input = DescribePublisherInput;
  export type Output = DescribePublisherOutput;
  export type Error = CFNRegistryException | CommonAwsError;
}

export declare namespace DescribeResourceScan {
  export type Input = DescribeResourceScanInput;
  export type Output = DescribeResourceScanOutput;
  export type Error = ResourceScanNotFoundException | CommonAwsError;
}

export declare namespace DescribeStackDriftDetectionStatus {
  export type Input = DescribeStackDriftDetectionStatusInput;
  export type Output = DescribeStackDriftDetectionStatusOutput;
  export type Error = CommonAwsError;
}

export declare namespace DescribeStackEvents {
  export type Input = DescribeStackEventsInput;
  export type Output = DescribeStackEventsOutput;
  export type Error = CommonAwsError;
}

export declare namespace DescribeStackInstance {
  export type Input = DescribeStackInstanceInput;
  export type Output = DescribeStackInstanceOutput;
  export type Error =
    | StackInstanceNotFoundException
    | StackSetNotFoundException
    | CommonAwsError;
}

export declare namespace DescribeStackRefactor {
  export type Input = DescribeStackRefactorInput;
  export type Output = DescribeStackRefactorOutput;
  export type Error = StackRefactorNotFoundException | CommonAwsError;
}

export declare namespace DescribeStackResource {
  export type Input = DescribeStackResourceInput;
  export type Output = DescribeStackResourceOutput;
  export type Error = CommonAwsError;
}

export declare namespace DescribeStackResourceDrifts {
  export type Input = DescribeStackResourceDriftsInput;
  export type Output = DescribeStackResourceDriftsOutput;
  export type Error = CommonAwsError;
}

export declare namespace DescribeStackResources {
  export type Input = DescribeStackResourcesInput;
  export type Output = DescribeStackResourcesOutput;
  export type Error = CommonAwsError;
}

export declare namespace DescribeStacks {
  export type Input = DescribeStacksInput;
  export type Output = DescribeStacksOutput;
  export type Error = CommonAwsError;
}

export declare namespace DescribeStackSet {
  export type Input = DescribeStackSetInput;
  export type Output = DescribeStackSetOutput;
  export type Error = StackSetNotFoundException | CommonAwsError;
}

export declare namespace DescribeStackSetOperation {
  export type Input = DescribeStackSetOperationInput;
  export type Output = DescribeStackSetOperationOutput;
  export type Error =
    | OperationNotFoundException
    | StackSetNotFoundException
    | CommonAwsError;
}

export declare namespace DescribeType {
  export type Input = DescribeTypeInput;
  export type Output = DescribeTypeOutput;
  export type Error =
    | CFNRegistryException
    | TypeNotFoundException
    | CommonAwsError;
}

export declare namespace DescribeTypeRegistration {
  export type Input = DescribeTypeRegistrationInput;
  export type Output = DescribeTypeRegistrationOutput;
  export type Error = CFNRegistryException | CommonAwsError;
}

export declare namespace DetectStackDrift {
  export type Input = DetectStackDriftInput;
  export type Output = DetectStackDriftOutput;
  export type Error = CommonAwsError;
}

export declare namespace DetectStackResourceDrift {
  export type Input = DetectStackResourceDriftInput;
  export type Output = DetectStackResourceDriftOutput;
  export type Error = CommonAwsError;
}

export declare namespace DetectStackSetDrift {
  export type Input = DetectStackSetDriftInput;
  export type Output = DetectStackSetDriftOutput;
  export type Error =
    | InvalidOperationException
    | OperationInProgressException
    | StackSetNotFoundException
    | CommonAwsError;
}

export declare namespace EstimateTemplateCost {
  export type Input = EstimateTemplateCostInput;
  export type Output = EstimateTemplateCostOutput;
  export type Error = CommonAwsError;
}

export declare namespace ExecuteChangeSet {
  export type Input = ExecuteChangeSetInput;
  export type Output = ExecuteChangeSetOutput;
  export type Error =
    | ChangeSetNotFoundException
    | InsufficientCapabilitiesException
    | InvalidChangeSetStatusException
    | TokenAlreadyExistsException
    | CommonAwsError;
}

export declare namespace ExecuteStackRefactor {
  export type Input = ExecuteStackRefactorInput;
  export type Output = {};
  export type Error = CommonAwsError;
}

export declare namespace GetGeneratedTemplate {
  export type Input = GetGeneratedTemplateInput;
  export type Output = GetGeneratedTemplateOutput;
  export type Error = GeneratedTemplateNotFoundException | CommonAwsError;
}

export declare namespace GetStackPolicy {
  export type Input = GetStackPolicyInput;
  export type Output = GetStackPolicyOutput;
  export type Error = CommonAwsError;
}

export declare namespace GetTemplate {
  export type Input = GetTemplateInput;
  export type Output = GetTemplateOutput;
  export type Error = ChangeSetNotFoundException | CommonAwsError;
}

export declare namespace GetTemplateSummary {
  export type Input = GetTemplateSummaryInput;
  export type Output = GetTemplateSummaryOutput;
  export type Error = StackSetNotFoundException | CommonAwsError;
}

export declare namespace ImportStacksToStackSet {
  export type Input = ImportStacksToStackSetInput;
  export type Output = ImportStacksToStackSetOutput;
  export type Error =
    | InvalidOperationException
    | LimitExceededException
    | OperationIdAlreadyExistsException
    | OperationInProgressException
    | StackNotFoundException
    | StackSetNotFoundException
    | StaleRequestException
    | CommonAwsError;
}

export declare namespace ListChangeSets {
  export type Input = ListChangeSetsInput;
  export type Output = ListChangeSetsOutput;
  export type Error = CommonAwsError;
}

export declare namespace ListExports {
  export type Input = ListExportsInput;
  export type Output = ListExportsOutput;
  export type Error = CommonAwsError;
}

export declare namespace ListGeneratedTemplates {
  export type Input = ListGeneratedTemplatesInput;
  export type Output = ListGeneratedTemplatesOutput;
  export type Error = CommonAwsError;
}

export declare namespace ListHookResults {
  export type Input = ListHookResultsInput;
  export type Output = ListHookResultsOutput;
  export type Error = HookResultNotFoundException | CommonAwsError;
}

export declare namespace ListImports {
  export type Input = ListImportsInput;
  export type Output = ListImportsOutput;
  export type Error = CommonAwsError;
}

export declare namespace ListResourceScanRelatedResources {
  export type Input = ListResourceScanRelatedResourcesInput;
  export type Output = ListResourceScanRelatedResourcesOutput;
  export type Error =
    | ResourceScanInProgressException
    | ResourceScanNotFoundException
    | CommonAwsError;
}

export declare namespace ListResourceScanResources {
  export type Input = ListResourceScanResourcesInput;
  export type Output = ListResourceScanResourcesOutput;
  export type Error =
    | ResourceScanInProgressException
    | ResourceScanNotFoundException
    | CommonAwsError;
}

export declare namespace ListResourceScans {
  export type Input = ListResourceScansInput;
  export type Output = ListResourceScansOutput;
  export type Error = CommonAwsError;
}

export declare namespace ListStackInstanceResourceDrifts {
  export type Input = ListStackInstanceResourceDriftsInput;
  export type Output = ListStackInstanceResourceDriftsOutput;
  export type Error =
    | OperationNotFoundException
    | StackInstanceNotFoundException
    | StackSetNotFoundException
    | CommonAwsError;
}

export declare namespace ListStackInstances {
  export type Input = ListStackInstancesInput;
  export type Output = ListStackInstancesOutput;
  export type Error = StackSetNotFoundException | CommonAwsError;
}

export declare namespace ListStackRefactorActions {
  export type Input = ListStackRefactorActionsInput;
  export type Output = ListStackRefactorActionsOutput;
  export type Error = CommonAwsError;
}

export declare namespace ListStackRefactors {
  export type Input = ListStackRefactorsInput;
  export type Output = ListStackRefactorsOutput;
  export type Error = CommonAwsError;
}

export declare namespace ListStackResources {
  export type Input = ListStackResourcesInput;
  export type Output = ListStackResourcesOutput;
  export type Error = CommonAwsError;
}

export declare namespace ListStacks {
  export type Input = ListStacksInput;
  export type Output = ListStacksOutput;
  export type Error = CommonAwsError;
}

export declare namespace ListStackSetAutoDeploymentTargets {
  export type Input = ListStackSetAutoDeploymentTargetsInput;
  export type Output = ListStackSetAutoDeploymentTargetsOutput;
  export type Error = StackSetNotFoundException | CommonAwsError;
}

export declare namespace ListStackSetOperationResults {
  export type Input = ListStackSetOperationResultsInput;
  export type Output = ListStackSetOperationResultsOutput;
  export type Error =
    | OperationNotFoundException
    | StackSetNotFoundException
    | CommonAwsError;
}

export declare namespace ListStackSetOperations {
  export type Input = ListStackSetOperationsInput;
  export type Output = ListStackSetOperationsOutput;
  export type Error = StackSetNotFoundException | CommonAwsError;
}

export declare namespace ListStackSets {
  export type Input = ListStackSetsInput;
  export type Output = ListStackSetsOutput;
  export type Error = CommonAwsError;
}

export declare namespace ListTypeRegistrations {
  export type Input = ListTypeRegistrationsInput;
  export type Output = ListTypeRegistrationsOutput;
  export type Error = CFNRegistryException | CommonAwsError;
}

export declare namespace ListTypes {
  export type Input = ListTypesInput;
  export type Output = ListTypesOutput;
  export type Error = CFNRegistryException | CommonAwsError;
}

export declare namespace ListTypeVersions {
  export type Input = ListTypeVersionsInput;
  export type Output = ListTypeVersionsOutput;
  export type Error = CFNRegistryException | CommonAwsError;
}

export declare namespace PublishType {
  export type Input = PublishTypeInput;
  export type Output = PublishTypeOutput;
  export type Error =
    | CFNRegistryException
    | TypeNotFoundException
    | CommonAwsError;
}

export declare namespace RecordHandlerProgress {
  export type Input = RecordHandlerProgressInput;
  export type Output = RecordHandlerProgressOutput;
  export type Error =
    | InvalidStateTransitionException
    | OperationStatusCheckFailedException
    | CommonAwsError;
}

export declare namespace RegisterPublisher {
  export type Input = RegisterPublisherInput;
  export type Output = RegisterPublisherOutput;
  export type Error = CFNRegistryException | CommonAwsError;
}

export declare namespace RegisterType {
  export type Input = RegisterTypeInput;
  export type Output = RegisterTypeOutput;
  export type Error = CFNRegistryException | CommonAwsError;
}

export declare namespace RollbackStack {
  export type Input = RollbackStackInput;
  export type Output = RollbackStackOutput;
  export type Error = TokenAlreadyExistsException | CommonAwsError;
}

export declare namespace SetStackPolicy {
  export type Input = SetStackPolicyInput;
  export type Output = {};
  export type Error = CommonAwsError;
}

export declare namespace SetTypeConfiguration {
  export type Input = SetTypeConfigurationInput;
  export type Output = SetTypeConfigurationOutput;
  export type Error =
    | CFNRegistryException
    | TypeNotFoundException
    | CommonAwsError;
}

export declare namespace SetTypeDefaultVersion {
  export type Input = SetTypeDefaultVersionInput;
  export type Output = SetTypeDefaultVersionOutput;
  export type Error =
    | CFNRegistryException
    | TypeNotFoundException
    | CommonAwsError;
}

export declare namespace SignalResource {
  export type Input = SignalResourceInput;
  export type Output = {};
  export type Error = CommonAwsError;
}

export declare namespace StartResourceScan {
  export type Input = StartResourceScanInput;
  export type Output = StartResourceScanOutput;
  export type Error =
    | ResourceScanInProgressException
    | ResourceScanLimitExceededException
    | CommonAwsError;
}

export declare namespace StopStackSetOperation {
  export type Input = StopStackSetOperationInput;
  export type Output = StopStackSetOperationOutput;
  export type Error =
    | InvalidOperationException
    | OperationNotFoundException
    | StackSetNotFoundException
    | CommonAwsError;
}

export declare namespace TestType {
  export type Input = TestTypeInput;
  export type Output = TestTypeOutput;
  export type Error =
    | CFNRegistryException
    | TypeNotFoundException
    | CommonAwsError;
}

export declare namespace UpdateGeneratedTemplate {
  export type Input = UpdateGeneratedTemplateInput;
  export type Output = UpdateGeneratedTemplateOutput;
  export type Error =
    | AlreadyExistsException
    | GeneratedTemplateNotFoundException
    | LimitExceededException
    | CommonAwsError;
}

export declare namespace UpdateStack {
  export type Input = UpdateStackInput;
  export type Output = UpdateStackOutput;
  export type Error =
    | InsufficientCapabilitiesException
    | TokenAlreadyExistsException
    | CommonAwsError;
}

export declare namespace UpdateStackInstances {
  export type Input = UpdateStackInstancesInput;
  export type Output = UpdateStackInstancesOutput;
  export type Error =
    | InvalidOperationException
    | OperationIdAlreadyExistsException
    | OperationInProgressException
    | StackInstanceNotFoundException
    | StackSetNotFoundException
    | StaleRequestException
    | CommonAwsError;
}

export declare namespace UpdateStackSet {
  export type Input = UpdateStackSetInput;
  export type Output = UpdateStackSetOutput;
  export type Error =
    | InvalidOperationException
    | OperationIdAlreadyExistsException
    | OperationInProgressException
    | StackInstanceNotFoundException
    | StackSetNotFoundException
    | StaleRequestException
    | CommonAwsError;
}

export declare namespace UpdateTerminationProtection {
  export type Input = UpdateTerminationProtectionInput;
  export type Output = UpdateTerminationProtectionOutput;
  export type Error = CommonAwsError;
}

export declare namespace ValidateTemplate {
  export type Input = ValidateTemplateInput;
  export type Output = ValidateTemplateOutput;
  export type Error = CommonAwsError;
}
