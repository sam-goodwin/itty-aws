import type { Effect, Data as EffectData } from "effect";
import type { CommonAwsError } from "../error.ts";

export interface AWSElasticBeanstalkService {
  abortEnvironmentUpdate(
    input: AbortEnvironmentUpdateMessage,
  ): Effect.Effect<{}, InsufficientPrivilegesException | CommonAwsError>;
  applyEnvironmentManagedAction(
    input: ApplyEnvironmentManagedActionRequest,
  ): Effect.Effect<
    ApplyEnvironmentManagedActionResult,
    | ElasticBeanstalkServiceException
    | ManagedActionInvalidStateException
    | CommonAwsError
  >;
  associateEnvironmentOperationsRole(
    input: AssociateEnvironmentOperationsRoleMessage,
  ): Effect.Effect<{}, InsufficientPrivilegesException | CommonAwsError>;
  checkDNSAvailability(
    input: CheckDNSAvailabilityMessage,
  ): Effect.Effect<CheckDNSAvailabilityResultMessage, CommonAwsError>;
  composeEnvironments(
    input: ComposeEnvironmentsMessage,
  ): Effect.Effect<
    EnvironmentDescriptionsMessage,
    | InsufficientPrivilegesException
    | TooManyEnvironmentsException
    | CommonAwsError
  >;
  createApplication(
    input: CreateApplicationMessage,
  ): Effect.Effect<
    ApplicationDescriptionMessage,
    TooManyApplicationsException | CommonAwsError
  >;
  createApplicationVersion(
    input: CreateApplicationVersionMessage,
  ): Effect.Effect<
    ApplicationVersionDescriptionMessage,
    | CodeBuildNotInServiceRegionException
    | InsufficientPrivilegesException
    | S3LocationNotInServiceRegionException
    | TooManyApplicationsException
    | TooManyApplicationVersionsException
    | CommonAwsError
  >;
  createConfigurationTemplate(
    input: CreateConfigurationTemplateMessage,
  ): Effect.Effect<
    ConfigurationSettingsDescription,
    | InsufficientPrivilegesException
    | TooManyBucketsException
    | TooManyConfigurationTemplatesException
    | CommonAwsError
  >;
  createEnvironment(
    input: CreateEnvironmentMessage,
  ): Effect.Effect<
    EnvironmentDescription,
    | InsufficientPrivilegesException
    | TooManyEnvironmentsException
    | CommonAwsError
  >;
  createPlatformVersion(
    input: CreatePlatformVersionRequest,
  ): Effect.Effect<
    CreatePlatformVersionResult,
    | ElasticBeanstalkServiceException
    | InsufficientPrivilegesException
    | TooManyPlatformsException
    | CommonAwsError
  >;
  createStorageLocation(input: {}): Effect.Effect<
    CreateStorageLocationResultMessage,
    | InsufficientPrivilegesException
    | S3SubscriptionRequiredException
    | TooManyBucketsException
    | CommonAwsError
  >;
  deleteApplication(
    input: DeleteApplicationMessage,
  ): Effect.Effect<{}, OperationInProgressException | CommonAwsError>;
  deleteApplicationVersion(
    input: DeleteApplicationVersionMessage,
  ): Effect.Effect<
    {},
    | InsufficientPrivilegesException
    | OperationInProgressException
    | S3LocationNotInServiceRegionException
    | SourceBundleDeletionException
    | CommonAwsError
  >;
  deleteConfigurationTemplate(
    input: DeleteConfigurationTemplateMessage,
  ): Effect.Effect<{}, OperationInProgressException | CommonAwsError>;
  deleteEnvironmentConfiguration(
    input: DeleteEnvironmentConfigurationMessage,
  ): Effect.Effect<{}, CommonAwsError>;
  deletePlatformVersion(
    input: DeletePlatformVersionRequest,
  ): Effect.Effect<
    DeletePlatformVersionResult,
    | ElasticBeanstalkServiceException
    | InsufficientPrivilegesException
    | OperationInProgressException
    | PlatformVersionStillReferencedException
    | CommonAwsError
  >;
  describeAccountAttributes(input: {}): Effect.Effect<
    DescribeAccountAttributesResult,
    InsufficientPrivilegesException | CommonAwsError
  >;
  describeApplications(
    input: DescribeApplicationsMessage,
  ): Effect.Effect<ApplicationDescriptionsMessage, CommonAwsError>;
  describeApplicationVersions(
    input: DescribeApplicationVersionsMessage,
  ): Effect.Effect<ApplicationVersionDescriptionsMessage, CommonAwsError>;
  describeConfigurationOptions(
    input: DescribeConfigurationOptionsMessage,
  ): Effect.Effect<
    ConfigurationOptionsDescription,
    TooManyBucketsException | CommonAwsError
  >;
  describeConfigurationSettings(
    input: DescribeConfigurationSettingsMessage,
  ): Effect.Effect<
    ConfigurationSettingsDescriptions,
    TooManyBucketsException | CommonAwsError
  >;
  describeEnvironmentHealth(
    input: DescribeEnvironmentHealthRequest,
  ): Effect.Effect<
    DescribeEnvironmentHealthResult,
    ElasticBeanstalkServiceException | InvalidRequestException | CommonAwsError
  >;
  describeEnvironmentManagedActionHistory(
    input: DescribeEnvironmentManagedActionHistoryRequest,
  ): Effect.Effect<
    DescribeEnvironmentManagedActionHistoryResult,
    ElasticBeanstalkServiceException | CommonAwsError
  >;
  describeEnvironmentManagedActions(
    input: DescribeEnvironmentManagedActionsRequest,
  ): Effect.Effect<
    DescribeEnvironmentManagedActionsResult,
    ElasticBeanstalkServiceException | CommonAwsError
  >;
  describeEnvironmentResources(
    input: DescribeEnvironmentResourcesMessage,
  ): Effect.Effect<
    EnvironmentResourceDescriptionsMessage,
    InsufficientPrivilegesException | CommonAwsError
  >;
  describeEnvironments(
    input: DescribeEnvironmentsMessage,
  ): Effect.Effect<EnvironmentDescriptionsMessage, CommonAwsError>;
  describeEvents(
    input: DescribeEventsMessage,
  ): Effect.Effect<EventDescriptionsMessage, CommonAwsError>;
  describeInstancesHealth(
    input: DescribeInstancesHealthRequest,
  ): Effect.Effect<
    DescribeInstancesHealthResult,
    ElasticBeanstalkServiceException | InvalidRequestException | CommonAwsError
  >;
  describePlatformVersion(
    input: DescribePlatformVersionRequest,
  ): Effect.Effect<
    DescribePlatformVersionResult,
    | ElasticBeanstalkServiceException
    | InsufficientPrivilegesException
    | CommonAwsError
  >;
  disassociateEnvironmentOperationsRole(
    input: DisassociateEnvironmentOperationsRoleMessage,
  ): Effect.Effect<{}, InsufficientPrivilegesException | CommonAwsError>;
  listAvailableSolutionStacks(input: {}): Effect.Effect<
    ListAvailableSolutionStacksResultMessage,
    CommonAwsError
  >;
  listPlatformBranches(
    input: ListPlatformBranchesRequest,
  ): Effect.Effect<ListPlatformBranchesResult, CommonAwsError>;
  listPlatformVersions(
    input: ListPlatformVersionsRequest,
  ): Effect.Effect<
    ListPlatformVersionsResult,
    | ElasticBeanstalkServiceException
    | InsufficientPrivilegesException
    | CommonAwsError
  >;
  listTagsForResource(
    input: ListTagsForResourceMessage,
  ): Effect.Effect<
    ResourceTagsDescriptionMessage,
    | InsufficientPrivilegesException
    | ResourceNotFoundException
    | ResourceTypeNotSupportedException
    | CommonAwsError
  >;
  rebuildEnvironment(
    input: RebuildEnvironmentMessage,
  ): Effect.Effect<{}, InsufficientPrivilegesException | CommonAwsError>;
  requestEnvironmentInfo(
    input: RequestEnvironmentInfoMessage,
  ): Effect.Effect<{}, CommonAwsError>;
  restartAppServer(
    input: RestartAppServerMessage,
  ): Effect.Effect<{}, CommonAwsError>;
  retrieveEnvironmentInfo(
    input: RetrieveEnvironmentInfoMessage,
  ): Effect.Effect<RetrieveEnvironmentInfoResultMessage, CommonAwsError>;
  swapEnvironmentCNAMEs(
    input: SwapEnvironmentCNAMEsMessage,
  ): Effect.Effect<{}, CommonAwsError>;
  terminateEnvironment(
    input: TerminateEnvironmentMessage,
  ): Effect.Effect<
    EnvironmentDescription,
    InsufficientPrivilegesException | CommonAwsError
  >;
  updateApplication(
    input: UpdateApplicationMessage,
  ): Effect.Effect<ApplicationDescriptionMessage, CommonAwsError>;
  updateApplicationResourceLifecycle(
    input: UpdateApplicationResourceLifecycleMessage,
  ): Effect.Effect<
    ApplicationResourceLifecycleDescriptionMessage,
    InsufficientPrivilegesException | CommonAwsError
  >;
  updateApplicationVersion(
    input: UpdateApplicationVersionMessage,
  ): Effect.Effect<ApplicationVersionDescriptionMessage, CommonAwsError>;
  updateConfigurationTemplate(
    input: UpdateConfigurationTemplateMessage,
  ): Effect.Effect<
    ConfigurationSettingsDescription,
    InsufficientPrivilegesException | TooManyBucketsException | CommonAwsError
  >;
  updateEnvironment(
    input: UpdateEnvironmentMessage,
  ): Effect.Effect<
    EnvironmentDescription,
    InsufficientPrivilegesException | TooManyBucketsException | CommonAwsError
  >;
  updateTagsForResource(
    input: UpdateTagsForResourceMessage,
  ): Effect.Effect<
    {},
    | InsufficientPrivilegesException
    | OperationInProgressException
    | ResourceNotFoundException
    | ResourceTypeNotSupportedException
    | TooManyTagsException
    | CommonAwsError
  >;
  validateConfigurationSettings(
    input: ValidateConfigurationSettingsMessage,
  ): Effect.Effect<
    ConfigurationSettingsValidationMessages,
    InsufficientPrivilegesException | TooManyBucketsException | CommonAwsError
  >;
}

export type ElasticBeanstalk = AWSElasticBeanstalkService;

export type AbortableOperationInProgress = boolean;

export interface AbortEnvironmentUpdateMessage {
  EnvironmentId?: string;
  EnvironmentName?: string;
}
export type ActionHistoryStatus = "Completed" | "Failed" | "Unknown";
export type ActionStatus = "Scheduled" | "Pending" | "Running" | "Unknown";
export type ActionType = "InstanceRefresh" | "PlatformUpdate" | "Unknown";
export type ApplicationArn = string;

export interface ApplicationDescription {
  ApplicationArn?: string;
  ApplicationName?: string;
  Description?: string;
  DateCreated?: Date | string;
  DateUpdated?: Date | string;
  Versions?: Array<string>;
  ConfigurationTemplates?: Array<string>;
  ResourceLifecycleConfig?: ApplicationResourceLifecycleConfig;
}
export type ApplicationDescriptionList = Array<ApplicationDescription>;
export interface ApplicationDescriptionMessage {
  Application?: ApplicationDescription;
}
export interface ApplicationDescriptionsMessage {
  Applications?: Array<ApplicationDescription>;
}
export interface ApplicationMetrics {
  Duration?: number;
  RequestCount?: number;
  StatusCodes?: StatusCodes;
  Latency?: Latency;
}
export type ApplicationName = string;

export type ApplicationNamesList = Array<string>;
export interface ApplicationResourceLifecycleConfig {
  ServiceRole?: string;
  VersionLifecycleConfig?: ApplicationVersionLifecycleConfig;
}
export interface ApplicationResourceLifecycleDescriptionMessage {
  ApplicationName?: string;
  ResourceLifecycleConfig?: ApplicationResourceLifecycleConfig;
}
export type ApplicationVersionArn = string;

export interface ApplicationVersionDescription {
  ApplicationVersionArn?: string;
  ApplicationName?: string;
  Description?: string;
  VersionLabel?: string;
  SourceBuildInformation?: SourceBuildInformation;
  BuildArn?: string;
  SourceBundle?: S3Location;
  DateCreated?: Date | string;
  DateUpdated?: Date | string;
  Status?: ApplicationVersionStatus;
}
export type ApplicationVersionDescriptionList =
  Array<ApplicationVersionDescription>;
export interface ApplicationVersionDescriptionMessage {
  ApplicationVersion?: ApplicationVersionDescription;
}
export interface ApplicationVersionDescriptionsMessage {
  ApplicationVersions?: Array<ApplicationVersionDescription>;
  NextToken?: string;
}
export interface ApplicationVersionLifecycleConfig {
  MaxCountRule?: MaxCountRule;
  MaxAgeRule?: MaxAgeRule;
}
export type ApplicationVersionProccess = boolean;

export type ApplicationVersionStatus =
  | "Processed"
  | "Unprocessed"
  | "Failed"
  | "Processing"
  | "Building";
export interface ApplyEnvironmentManagedActionRequest {
  EnvironmentName?: string;
  EnvironmentId?: string;
  ActionId: string;
}
export interface ApplyEnvironmentManagedActionResult {
  ActionId?: string;
  ActionDescription?: string;
  ActionType?: ActionType;
  Status?: string;
}
export type ARN = string;

export interface AssociateEnvironmentOperationsRoleMessage {
  EnvironmentName: string;
  OperationsRole: string;
}
export type AutoCreateApplication = boolean;

export interface AutoScalingGroup {
  Name?: string;
}
export type AutoScalingGroupList = Array<AutoScalingGroup>;
export type AvailableSolutionStackDetailsList = Array<SolutionStackDescription>;
export type AvailableSolutionStackNamesList = Array<string>;
export type BoxedBoolean = boolean;

export type BoxedInt = number;

export type BranchName = string;

export type BranchOrder = number;

export interface BuildConfiguration {
  ArtifactName?: string;
  CodeBuildServiceRole: string;
  ComputeType?: ComputeType;
  Image: string;
  TimeoutInMinutes?: number;
}
export interface Builder {
  ARN?: string;
}
export type Cause = string;

export type Causes = Array<string>;
export interface CheckDNSAvailabilityMessage {
  CNAMEPrefix: string;
}
export interface CheckDNSAvailabilityResultMessage {
  Available?: boolean;
  FullyQualifiedCNAME?: string;
}
export type CnameAvailability = boolean;

export declare class CodeBuildNotInServiceRegionException extends EffectData.TaggedError(
  "CodeBuildNotInServiceRegionException",
)<{
  readonly message?: string;
}> {}
export interface ComposeEnvironmentsMessage {
  ApplicationName?: string;
  GroupName?: string;
  VersionLabels?: Array<string>;
}
export type ComputeType =
  | "BUILD_GENERAL1_SMALL"
  | "BUILD_GENERAL1_MEDIUM"
  | "BUILD_GENERAL1_LARGE";
export type ConfigurationDeploymentStatus = "deployed" | "pending" | "failed";
export type ConfigurationOptionDefaultValue = string;

export interface ConfigurationOptionDescription {
  Namespace?: string;
  Name?: string;
  DefaultValue?: string;
  ChangeSeverity?: string;
  UserDefined?: boolean;
  ValueType?: ConfigurationOptionValueType;
  ValueOptions?: Array<string>;
  MinValue?: number;
  MaxValue?: number;
  MaxLength?: number;
  Regex?: OptionRestrictionRegex;
}
export type ConfigurationOptionDescriptionsList =
  Array<ConfigurationOptionDescription>;
export type ConfigurationOptionName = string;

export type ConfigurationOptionPossibleValue = string;

export type ConfigurationOptionPossibleValues = Array<string>;
export interface ConfigurationOptionsDescription {
  SolutionStackName?: string;
  PlatformArn?: string;
  Options?: Array<ConfigurationOptionDescription>;
}
export interface ConfigurationOptionSetting {
  ResourceName?: string;
  Namespace?: string;
  OptionName?: string;
  Value?: string;
}
export type ConfigurationOptionSettingsList = Array<ConfigurationOptionSetting>;
export type ConfigurationOptionSeverity = string;

export type ConfigurationOptionValue = string;

export type ConfigurationOptionValueType = "Scalar" | "List";
export interface ConfigurationSettingsDescription {
  SolutionStackName?: string;
  PlatformArn?: string;
  ApplicationName?: string;
  TemplateName?: string;
  Description?: string;
  EnvironmentName?: string;
  DeploymentStatus?: ConfigurationDeploymentStatus;
  DateCreated?: Date | string;
  DateUpdated?: Date | string;
  OptionSettings?: Array<ConfigurationOptionSetting>;
}
export type ConfigurationSettingsDescriptionList =
  Array<ConfigurationSettingsDescription>;
export interface ConfigurationSettingsDescriptions {
  ConfigurationSettings?: Array<ConfigurationSettingsDescription>;
}
export interface ConfigurationSettingsValidationMessages {
  Messages?: Array<ValidationMessage>;
}
export type ConfigurationTemplateName = string;

export type ConfigurationTemplateNamesList = Array<string>;
export interface CPUUtilization {
  User?: number;
  Nice?: number;
  System?: number;
  Idle?: number;
  IOWait?: number;
  IRQ?: number;
  SoftIRQ?: number;
  Privileged?: number;
}
export interface CreateApplicationMessage {
  ApplicationName: string;
  Description?: string;
  ResourceLifecycleConfig?: ApplicationResourceLifecycleConfig;
  Tags?: Array<Tag>;
}
export interface CreateApplicationVersionMessage {
  ApplicationName: string;
  VersionLabel: string;
  Description?: string;
  SourceBuildInformation?: SourceBuildInformation;
  SourceBundle?: S3Location;
  BuildConfiguration?: BuildConfiguration;
  AutoCreateApplication?: boolean;
  Process?: boolean;
  Tags?: Array<Tag>;
}
export interface CreateConfigurationTemplateMessage {
  ApplicationName: string;
  TemplateName: string;
  SolutionStackName?: string;
  PlatformArn?: string;
  SourceConfiguration?: SourceConfiguration;
  EnvironmentId?: string;
  Description?: string;
  OptionSettings?: Array<ConfigurationOptionSetting>;
  Tags?: Array<Tag>;
}
export interface CreateEnvironmentMessage {
  ApplicationName: string;
  EnvironmentName?: string;
  GroupName?: string;
  Description?: string;
  CNAMEPrefix?: string;
  Tier?: EnvironmentTier;
  Tags?: Array<Tag>;
  VersionLabel?: string;
  TemplateName?: string;
  SolutionStackName?: string;
  PlatformArn?: string;
  OptionSettings?: Array<ConfigurationOptionSetting>;
  OptionsToRemove?: Array<OptionSpecification>;
  OperationsRole?: string;
}
export interface CreatePlatformVersionRequest {
  PlatformName: string;
  PlatformVersion: string;
  PlatformDefinitionBundle: S3Location;
  EnvironmentName?: string;
  OptionSettings?: Array<ConfigurationOptionSetting>;
  Tags?: Array<Tag>;
}
export interface CreatePlatformVersionResult {
  PlatformSummary?: PlatformSummary;
  Builder?: Builder;
}
export interface CreateStorageLocationResultMessage {
  S3Bucket?: string;
}
export type CreationDate = Date | string;

export interface CustomAmi {
  VirtualizationType?: string;
  ImageId?: string;
}
export type CustomAmiList = Array<CustomAmi>;
export interface DeleteApplicationMessage {
  ApplicationName: string;
  TerminateEnvByForce?: boolean;
}
export interface DeleteApplicationVersionMessage {
  ApplicationName: string;
  VersionLabel: string;
  DeleteSourceBundle?: boolean;
}
export interface DeleteConfigurationTemplateMessage {
  ApplicationName: string;
  TemplateName: string;
}
export interface DeleteEnvironmentConfigurationMessage {
  ApplicationName: string;
  EnvironmentName: string;
}
export interface DeletePlatformVersionRequest {
  PlatformArn?: string;
}
export interface DeletePlatformVersionResult {
  PlatformSummary?: PlatformSummary;
}
export type DeleteSourceBundle = boolean;

export interface Deployment {
  VersionLabel?: string;
  DeploymentId?: number;
  Status?: string;
  DeploymentTime?: Date | string;
}
export type DeploymentTimestamp = Date | string;

export interface DescribeAccountAttributesResult {
  ResourceQuotas?: ResourceQuotas;
}
export interface DescribeApplicationsMessage {
  ApplicationNames?: Array<string>;
}
export interface DescribeApplicationVersionsMessage {
  ApplicationName?: string;
  VersionLabels?: Array<string>;
  MaxRecords?: number;
  NextToken?: string;
}
export interface DescribeConfigurationOptionsMessage {
  ApplicationName?: string;
  TemplateName?: string;
  EnvironmentName?: string;
  SolutionStackName?: string;
  PlatformArn?: string;
  Options?: Array<OptionSpecification>;
}
export interface DescribeConfigurationSettingsMessage {
  ApplicationName: string;
  TemplateName?: string;
  EnvironmentName?: string;
}
export interface DescribeEnvironmentHealthRequest {
  EnvironmentName?: string;
  EnvironmentId?: string;
  AttributeNames?: Array<EnvironmentHealthAttribute>;
}
export interface DescribeEnvironmentHealthResult {
  EnvironmentName?: string;
  HealthStatus?: string;
  Status?: EnvironmentHealth;
  Color?: string;
  Causes?: Array<string>;
  ApplicationMetrics?: ApplicationMetrics;
  InstancesHealth?: InstanceHealthSummary;
  RefreshedAt?: Date | string;
}
export interface DescribeEnvironmentManagedActionHistoryRequest {
  EnvironmentId?: string;
  EnvironmentName?: string;
  NextToken?: string;
  MaxItems?: number;
}
export interface DescribeEnvironmentManagedActionHistoryResult {
  ManagedActionHistoryItems?: Array<ManagedActionHistoryItem>;
  NextToken?: string;
}
export interface DescribeEnvironmentManagedActionsRequest {
  EnvironmentName?: string;
  EnvironmentId?: string;
  Status?: ActionStatus;
}
export interface DescribeEnvironmentManagedActionsResult {
  ManagedActions?: Array<ManagedAction>;
}
export interface DescribeEnvironmentResourcesMessage {
  EnvironmentId?: string;
  EnvironmentName?: string;
}
export interface DescribeEnvironmentsMessage {
  ApplicationName?: string;
  VersionLabel?: string;
  EnvironmentIds?: Array<string>;
  EnvironmentNames?: Array<string>;
  IncludeDeleted?: boolean;
  IncludedDeletedBackTo?: Date | string;
  MaxRecords?: number;
  NextToken?: string;
}
export interface DescribeEventsMessage {
  ApplicationName?: string;
  VersionLabel?: string;
  TemplateName?: string;
  EnvironmentId?: string;
  EnvironmentName?: string;
  PlatformArn?: string;
  RequestId?: string;
  Severity?: EventSeverity;
  StartTime?: Date | string;
  EndTime?: Date | string;
  MaxRecords?: number;
  NextToken?: string;
}
export interface DescribeInstancesHealthRequest {
  EnvironmentName?: string;
  EnvironmentId?: string;
  AttributeNames?: Array<InstancesHealthAttribute>;
  NextToken?: string;
}
export interface DescribeInstancesHealthResult {
  InstanceHealthList?: Array<SingleInstanceHealth>;
  RefreshedAt?: Date | string;
  NextToken?: string;
}
export interface DescribePlatformVersionRequest {
  PlatformArn?: string;
}
export interface DescribePlatformVersionResult {
  PlatformDescription?: PlatformDescription;
}
export type Description = string;

export interface DisassociateEnvironmentOperationsRoleMessage {
  EnvironmentName: string;
}
export type DNSCname = string;

export type DNSCnamePrefix = string;

export type Ec2InstanceId = string;

export declare class ElasticBeanstalkServiceException extends EffectData.TaggedError(
  "ElasticBeanstalkServiceException",
)<{
  readonly message?: string;
}> {}
export type EndpointURL = string;

export type EnvironmentArn = string;

export interface EnvironmentDescription {
  EnvironmentName?: string;
  EnvironmentId?: string;
  ApplicationName?: string;
  VersionLabel?: string;
  SolutionStackName?: string;
  PlatformArn?: string;
  TemplateName?: string;
  Description?: string;
  EndpointURL?: string;
  CNAME?: string;
  DateCreated?: Date | string;
  DateUpdated?: Date | string;
  Status?: EnvironmentStatus;
  AbortableOperationInProgress?: boolean;
  Health?: EnvironmentHealth;
  HealthStatus?: EnvironmentHealthStatus;
  Resources?: EnvironmentResourcesDescription;
  Tier?: EnvironmentTier;
  EnvironmentLinks?: Array<EnvironmentLink>;
  EnvironmentArn?: string;
  OperationsRole?: string;
}
export type EnvironmentDescriptionsList = Array<EnvironmentDescription>;
export interface EnvironmentDescriptionsMessage {
  Environments?: Array<EnvironmentDescription>;
  NextToken?: string;
}
export type EnvironmentHealth = "Green" | "Yellow" | "Red" | "Grey";
export type EnvironmentHealthAttribute =
  | "Status"
  | "Color"
  | "Causes"
  | "ApplicationMetrics"
  | "InstancesHealth"
  | "All"
  | "HealthStatus"
  | "RefreshedAt";
export type EnvironmentHealthAttributes = Array<EnvironmentHealthAttribute>;
export type EnvironmentHealthStatus =
  | "NoData"
  | "Unknown"
  | "Pending"
  | "Ok"
  | "Info"
  | "Warning"
  | "Degraded"
  | "Severe"
  | "Suspended";
export type EnvironmentId = string;

export type EnvironmentIdList = Array<string>;
export interface EnvironmentInfoDescription {
  InfoType?: EnvironmentInfoType;
  Ec2InstanceId?: string;
  SampleTimestamp?: Date | string;
  Message?: string;
}
export type EnvironmentInfoDescriptionList = Array<EnvironmentInfoDescription>;
export type EnvironmentInfoType = "tail" | "bundle";
export interface EnvironmentLink {
  LinkName?: string;
  EnvironmentName?: string;
}
export type EnvironmentLinks = Array<EnvironmentLink>;
export type EnvironmentName = string;

export type EnvironmentNamesList = Array<string>;
export interface EnvironmentResourceDescription {
  EnvironmentName?: string;
  AutoScalingGroups?: Array<AutoScalingGroup>;
  Instances?: Array<Instance>;
  LaunchConfigurations?: Array<LaunchConfiguration>;
  LaunchTemplates?: Array<LaunchTemplate>;
  LoadBalancers?: Array<LoadBalancer>;
  Triggers?: Array<Trigger>;
  Queues?: Array<Queue>;
}
export interface EnvironmentResourceDescriptionsMessage {
  EnvironmentResources?: EnvironmentResourceDescription;
}
export interface EnvironmentResourcesDescription {
  LoadBalancer?: LoadBalancerDescription;
}
export type EnvironmentStatus =
  | "Aborting"
  | "Launching"
  | "Updating"
  | "LinkingFrom"
  | "LinkingTo"
  | "Ready"
  | "Terminating"
  | "Terminated";
export interface EnvironmentTier {
  Name?: string;
  Type?: string;
  Version?: string;
}
export type EventDate = Date | string;

export interface EventDescription {
  EventDate?: Date | string;
  Message?: string;
  ApplicationName?: string;
  VersionLabel?: string;
  TemplateName?: string;
  EnvironmentName?: string;
  PlatformArn?: string;
  RequestId?: string;
  Severity?: EventSeverity;
}
export type EventDescriptionList = Array<EventDescription>;
export interface EventDescriptionsMessage {
  Events?: Array<EventDescription>;
  NextToken?: string;
}
export type EventMessage = string;

export type EventSeverity =
  | "TRACE"
  | "DEBUG"
  | "INFO"
  | "WARN"
  | "ERROR"
  | "FATAL";
export type ExceptionMessage = string;

export type FailureType =
  | "UpdateCancelled"
  | "CancellationFailed"
  | "RollbackFailed"
  | "RollbackSuccessful"
  | "InternalFailure"
  | "InvalidEnvironmentState"
  | "PermissionsError";
export type FileTypeExtension = string;

export type ForceTerminate = boolean;

export type GroupName = string;

export type ImageId = string;

export type IncludeDeleted = boolean;

export type IncludeDeletedBackTo = Date | string;

export interface Instance {
  Id?: string;
}
export type InstanceHealthList = Array<SingleInstanceHealth>;
export interface InstanceHealthSummary {
  NoData?: number;
  Unknown?: number;
  Pending?: number;
  Ok?: number;
  Info?: number;
  Warning?: number;
  Degraded?: number;
  Severe?: number;
}
export type InstanceId = string;

export type InstanceList = Array<Instance>;
export type InstancesHealthAttribute =
  | "HealthStatus"
  | "Color"
  | "Causes"
  | "ApplicationMetrics"
  | "RefreshedAt"
  | "LaunchedAt"
  | "System"
  | "Deployment"
  | "AvailabilityZone"
  | "InstanceType"
  | "All";
export type InstancesHealthAttributes = Array<InstancesHealthAttribute>;
export declare class InsufficientPrivilegesException extends EffectData.TaggedError(
  "InsufficientPrivilegesException",
)<{
  readonly message?: string;
}> {}
export type Integer = number;

export declare class InvalidRequestException extends EffectData.TaggedError(
  "InvalidRequestException",
)<{
  readonly message?: string;
}> {}
export interface Latency {
  P999?: number;
  P99?: number;
  P95?: number;
  P90?: number;
  P85?: number;
  P75?: number;
  P50?: number;
  P10?: number;
}
export interface LaunchConfiguration {
  Name?: string;
}
export type LaunchConfigurationList = Array<LaunchConfiguration>;
export type LaunchedAt = Date | string;

export interface LaunchTemplate {
  Id?: string;
}
export type LaunchTemplateList = Array<LaunchTemplate>;
export interface ListAvailableSolutionStacksResultMessage {
  SolutionStacks?: Array<string>;
  SolutionStackDetails?: Array<SolutionStackDescription>;
}
export interface Listener {
  Protocol?: string;
  Port?: number;
}
export interface ListPlatformBranchesRequest {
  Filters?: Array<SearchFilter>;
  MaxRecords?: number;
  NextToken?: string;
}
export interface ListPlatformBranchesResult {
  PlatformBranchSummaryList?: Array<PlatformBranchSummary>;
  NextToken?: string;
}
export interface ListPlatformVersionsRequest {
  Filters?: Array<PlatformFilter>;
  MaxRecords?: number;
  NextToken?: string;
}
export interface ListPlatformVersionsResult {
  PlatformSummaryList?: Array<PlatformSummary>;
  NextToken?: string;
}
export interface ListTagsForResourceMessage {
  ResourceArn: string;
}
export type LoadAverage = Array<number>;
export type LoadAverageValue = number;

export interface LoadBalancer {
  Name?: string;
}
export interface LoadBalancerDescription {
  LoadBalancerName?: string;
  Domain?: string;
  Listeners?: Array<Listener>;
}
export type LoadBalancerList = Array<LoadBalancer>;
export type LoadBalancerListenersDescription = Array<Listener>;
export type Maintainer = string;

export interface ManagedAction {
  ActionId?: string;
  ActionDescription?: string;
  ActionType?: ActionType;
  Status?: ActionStatus;
  WindowStartTime?: Date | string;
}
export interface ManagedActionHistoryItem {
  ActionId?: string;
  ActionType?: ActionType;
  ActionDescription?: string;
  FailureType?: FailureType;
  Status?: ActionHistoryStatus;
  FailureDescription?: string;
  ExecutedTime?: Date | string;
  FinishedTime?: Date | string;
}
export type ManagedActionHistoryItems = Array<ManagedActionHistoryItem>;
export type ManagedActionHistoryMaxItems = number;

export declare class ManagedActionInvalidStateException extends EffectData.TaggedError(
  "ManagedActionInvalidStateException",
)<{
  readonly message?: string;
}> {}
export type ManagedActions = Array<ManagedAction>;
export interface MaxAgeRule {
  Enabled: boolean;
  MaxAgeInDays?: number;
  DeleteSourceFromS3?: boolean;
}
export interface MaxCountRule {
  Enabled: boolean;
  MaxCount?: number;
  DeleteSourceFromS3?: boolean;
}
export type MaxRecords = number;

export type Message = string;

export type NextToken = string;

export type NonEmptyString = string;

export type NullableDouble = number;

export type NullableInteger = number;

export type NullableLong = number;

export type OperatingSystemName = string;

export type OperatingSystemVersion = string;

export declare class OperationInProgressException extends EffectData.TaggedError(
  "OperationInProgressException",
)<{
  readonly message?: string;
}> {}
export type OperationsRole = string;

export type OptionNamespace = string;

export type OptionRestrictionMaxLength = number;

export type OptionRestrictionMaxValue = number;

export type OptionRestrictionMinValue = number;

export interface OptionRestrictionRegex {
  Pattern?: string;
  Label?: string;
}
export interface OptionSpecification {
  ResourceName?: string;
  Namespace?: string;
  OptionName?: string;
}
export type OptionsSpecifierList = Array<OptionSpecification>;
export type PlatformArn = string;

export type PlatformBranchLifecycleState = string;

export type PlatformBranchMaxRecords = number;

export interface PlatformBranchSummary {
  PlatformName?: string;
  BranchName?: string;
  LifecycleState?: string;
  BranchOrder?: number;
  SupportedTierList?: Array<string>;
}
export type PlatformBranchSummaryList = Array<PlatformBranchSummary>;
export type PlatformCategory = string;

export interface PlatformDescription {
  PlatformArn?: string;
  PlatformOwner?: string;
  PlatformName?: string;
  PlatformVersion?: string;
  SolutionStackName?: string;
  PlatformStatus?: PlatformStatus;
  DateCreated?: Date | string;
  DateUpdated?: Date | string;
  PlatformCategory?: string;
  Description?: string;
  Maintainer?: string;
  OperatingSystemName?: string;
  OperatingSystemVersion?: string;
  ProgrammingLanguages?: Array<PlatformProgrammingLanguage>;
  Frameworks?: Array<PlatformFramework>;
  CustomAmiList?: Array<CustomAmi>;
  SupportedTierList?: Array<string>;
  SupportedAddonList?: Array<string>;
  PlatformLifecycleState?: string;
  PlatformBranchName?: string;
  PlatformBranchLifecycleState?: string;
}
export interface PlatformFilter {
  Type?: string;
  Operator?: string;
  Values?: Array<string>;
}
export type PlatformFilterOperator = string;

export type PlatformFilters = Array<PlatformFilter>;
export type PlatformFilterType = string;

export type PlatformFilterValue = string;

export type PlatformFilterValueList = Array<string>;
export interface PlatformFramework {
  Name?: string;
  Version?: string;
}
export type PlatformFrameworks = Array<PlatformFramework>;
export type PlatformLifecycleState = string;

export type PlatformMaxRecords = number;

export type PlatformName = string;

export type PlatformOwner = string;

export interface PlatformProgrammingLanguage {
  Name?: string;
  Version?: string;
}
export type PlatformProgrammingLanguages = Array<PlatformProgrammingLanguage>;
export type PlatformStatus =
  | "Creating"
  | "Failed"
  | "Ready"
  | "Deleting"
  | "Deleted";
export interface PlatformSummary {
  PlatformArn?: string;
  PlatformOwner?: string;
  PlatformStatus?: PlatformStatus;
  PlatformCategory?: string;
  OperatingSystemName?: string;
  OperatingSystemVersion?: string;
  SupportedTierList?: Array<string>;
  SupportedAddonList?: Array<string>;
  PlatformLifecycleState?: string;
  PlatformVersion?: string;
  PlatformBranchName?: string;
  PlatformBranchLifecycleState?: string;
}
export type PlatformSummaryList = Array<PlatformSummary>;
export type PlatformVersion = string;

export declare class PlatformVersionStillReferencedException extends EffectData.TaggedError(
  "PlatformVersionStillReferencedException",
)<{
  readonly message?: string;
}> {}
export interface Queue {
  Name?: string;
  URL?: string;
}
export type QueueList = Array<Queue>;
export interface RebuildEnvironmentMessage {
  EnvironmentId?: string;
  EnvironmentName?: string;
}
export type RefreshedAt = Date | string;

export type RegexLabel = string;

export type RegexPattern = string;

export type RequestCount = number;

export interface RequestEnvironmentInfoMessage {
  EnvironmentId?: string;
  EnvironmentName?: string;
  InfoType: EnvironmentInfoType;
}
export type RequestId = string;

export type ResourceArn = string;

export type ResourceId = string;

export type ResourceName = string;

export declare class ResourceNotFoundException extends EffectData.TaggedError(
  "ResourceNotFoundException",
)<{
  readonly message?: string;
}> {}
export interface ResourceQuota {
  Maximum?: number;
}
export interface ResourceQuotas {
  ApplicationQuota?: ResourceQuota;
  ApplicationVersionQuota?: ResourceQuota;
  EnvironmentQuota?: ResourceQuota;
  ConfigurationTemplateQuota?: ResourceQuota;
  CustomPlatformQuota?: ResourceQuota;
}
export interface ResourceTagsDescriptionMessage {
  ResourceArn?: string;
  ResourceTags?: Array<Tag>;
}
export declare class ResourceTypeNotSupportedException extends EffectData.TaggedError(
  "ResourceTypeNotSupportedException",
)<{
  readonly message?: string;
}> {}
export interface RestartAppServerMessage {
  EnvironmentId?: string;
  EnvironmentName?: string;
}
export interface RetrieveEnvironmentInfoMessage {
  EnvironmentId?: string;
  EnvironmentName?: string;
  InfoType: EnvironmentInfoType;
}
export interface RetrieveEnvironmentInfoResultMessage {
  EnvironmentInfo?: Array<EnvironmentInfoDescription>;
}
export type S3Bucket = string;

export type S3Key = string;

export interface S3Location {
  S3Bucket?: string;
  S3Key?: string;
}
export declare class S3LocationNotInServiceRegionException extends EffectData.TaggedError(
  "S3LocationNotInServiceRegionException",
)<{
  readonly message?: string;
}> {}
export declare class S3SubscriptionRequiredException extends EffectData.TaggedError(
  "S3SubscriptionRequiredException",
)<{
  readonly message?: string;
}> {}
export type SampleTimestamp = Date | string;

export interface SearchFilter {
  Attribute?: string;
  Operator?: string;
  Values?: Array<string>;
}
export type SearchFilterAttribute = string;

export type SearchFilterOperator = string;

export type SearchFilters = Array<SearchFilter>;
export type SearchFilterValue = string;

export type SearchFilterValues = Array<string>;
export interface SingleInstanceHealth {
  InstanceId?: string;
  HealthStatus?: string;
  Color?: string;
  Causes?: Array<string>;
  LaunchedAt?: Date | string;
  ApplicationMetrics?: ApplicationMetrics;
  System?: SystemStatus;
  Deployment?: Deployment;
  AvailabilityZone?: string;
  InstanceType?: string;
}
export interface SolutionStackDescription {
  SolutionStackName?: string;
  PermittedFileTypes?: Array<string>;
}
export type SolutionStackFileTypeList = Array<string>;
export type SolutionStackName = string;

export interface SourceBuildInformation {
  SourceType: SourceType;
  SourceRepository: SourceRepository;
  SourceLocation: string;
}
export declare class SourceBundleDeletionException extends EffectData.TaggedError(
  "SourceBundleDeletionException",
)<{
  readonly message?: string;
}> {}
export interface SourceConfiguration {
  ApplicationName?: string;
  TemplateName?: string;
}
export type SourceLocation = string;

export type SourceRepository = "CodeCommit" | "S3";
export type SourceType = "Git" | "Zip";
export interface StatusCodes {
  Status2xx?: number;
  Status3xx?: number;
  Status4xx?: number;
  Status5xx?: number;
}
export type ElasticBeanstalkString = string;

export type SupportedAddon = string;

export type SupportedAddonList = Array<string>;
export type SupportedTier = string;

export type SupportedTierList = Array<string>;
export interface SwapEnvironmentCNAMEsMessage {
  SourceEnvironmentId?: string;
  SourceEnvironmentName?: string;
  DestinationEnvironmentId?: string;
  DestinationEnvironmentName?: string;
}
export interface SystemStatus {
  CPUUtilization?: CPUUtilization;
  LoadAverage?: Array<number>;
}
export interface Tag {
  Key?: string;
  Value?: string;
}
export type TagKey = string;

export type TagKeyList = Array<string>;
export type TagList = Array<Tag>;
export type Tags = Array<Tag>;
export type TagValue = string;

export type TerminateEnvForce = boolean;

export interface TerminateEnvironmentMessage {
  EnvironmentId?: string;
  EnvironmentName?: string;
  TerminateResources?: boolean;
  ForceTerminate?: boolean;
}
export type TerminateEnvironmentResources = boolean;

export type TimeFilterEnd = Date | string;

export type TimeFilterStart = Date | string;

export type Timestamp = Date | string;

export type Token = string;

export declare class TooManyApplicationsException extends EffectData.TaggedError(
  "TooManyApplicationsException",
)<{
  readonly message?: string;
}> {}
export declare class TooManyApplicationVersionsException extends EffectData.TaggedError(
  "TooManyApplicationVersionsException",
)<{
  readonly message?: string;
}> {}
export declare class TooManyBucketsException extends EffectData.TaggedError(
  "TooManyBucketsException",
)<{
  readonly message?: string;
}> {}
export declare class TooManyConfigurationTemplatesException extends EffectData.TaggedError(
  "TooManyConfigurationTemplatesException",
)<{
  readonly message?: string;
}> {}
export declare class TooManyEnvironmentsException extends EffectData.TaggedError(
  "TooManyEnvironmentsException",
)<{
  readonly message?: string;
}> {}
export declare class TooManyPlatformsException extends EffectData.TaggedError(
  "TooManyPlatformsException",
)<{
  readonly message?: string;
}> {}
export declare class TooManyTagsException extends EffectData.TaggedError(
  "TooManyTagsException",
)<{
  readonly message?: string;
}> {}
export interface Trigger {
  Name?: string;
}
export type TriggerList = Array<Trigger>;
export interface UpdateApplicationMessage {
  ApplicationName: string;
  Description?: string;
}
export interface UpdateApplicationResourceLifecycleMessage {
  ApplicationName: string;
  ResourceLifecycleConfig: ApplicationResourceLifecycleConfig;
}
export interface UpdateApplicationVersionMessage {
  ApplicationName: string;
  VersionLabel: string;
  Description?: string;
}
export interface UpdateConfigurationTemplateMessage {
  ApplicationName: string;
  TemplateName: string;
  Description?: string;
  OptionSettings?: Array<ConfigurationOptionSetting>;
  OptionsToRemove?: Array<OptionSpecification>;
}
export type UpdateDate = Date | string;

export interface UpdateEnvironmentMessage {
  ApplicationName?: string;
  EnvironmentId?: string;
  EnvironmentName?: string;
  GroupName?: string;
  Description?: string;
  Tier?: EnvironmentTier;
  VersionLabel?: string;
  TemplateName?: string;
  SolutionStackName?: string;
  PlatformArn?: string;
  OptionSettings?: Array<ConfigurationOptionSetting>;
  OptionsToRemove?: Array<OptionSpecification>;
}
export interface UpdateTagsForResourceMessage {
  ResourceArn: string;
  TagsToAdd?: Array<Tag>;
  TagsToRemove?: Array<string>;
}
export type UserDefinedOption = boolean;

export interface ValidateConfigurationSettingsMessage {
  ApplicationName: string;
  TemplateName?: string;
  EnvironmentName?: string;
  OptionSettings: Array<ConfigurationOptionSetting>;
}
export interface ValidationMessage {
  Message?: string;
  Severity?: ValidationSeverity;
  Namespace?: string;
  OptionName?: string;
}
export type ValidationMessagesList = Array<ValidationMessage>;
export type ValidationMessageString = string;

export type ValidationSeverity = "error" | "warning";
export type VersionLabel = string;

export type VersionLabels = Array<string>;
export type VersionLabelsList = Array<string>;
export type VirtualizationType = string;

export declare namespace AbortEnvironmentUpdate {
  export type Input = AbortEnvironmentUpdateMessage;
  export type Output = {};
  export type Error = InsufficientPrivilegesException | CommonAwsError;
}

export declare namespace ApplyEnvironmentManagedAction {
  export type Input = ApplyEnvironmentManagedActionRequest;
  export type Output = ApplyEnvironmentManagedActionResult;
  export type Error =
    | ElasticBeanstalkServiceException
    | ManagedActionInvalidStateException
    | CommonAwsError;
}

export declare namespace AssociateEnvironmentOperationsRole {
  export type Input = AssociateEnvironmentOperationsRoleMessage;
  export type Output = {};
  export type Error = InsufficientPrivilegesException | CommonAwsError;
}

export declare namespace CheckDNSAvailability {
  export type Input = CheckDNSAvailabilityMessage;
  export type Output = CheckDNSAvailabilityResultMessage;
  export type Error = CommonAwsError;
}

export declare namespace ComposeEnvironments {
  export type Input = ComposeEnvironmentsMessage;
  export type Output = EnvironmentDescriptionsMessage;
  export type Error =
    | InsufficientPrivilegesException
    | TooManyEnvironmentsException
    | CommonAwsError;
}

export declare namespace CreateApplication {
  export type Input = CreateApplicationMessage;
  export type Output = ApplicationDescriptionMessage;
  export type Error = TooManyApplicationsException | CommonAwsError;
}

export declare namespace CreateApplicationVersion {
  export type Input = CreateApplicationVersionMessage;
  export type Output = ApplicationVersionDescriptionMessage;
  export type Error =
    | CodeBuildNotInServiceRegionException
    | InsufficientPrivilegesException
    | S3LocationNotInServiceRegionException
    | TooManyApplicationsException
    | TooManyApplicationVersionsException
    | CommonAwsError;
}

export declare namespace CreateConfigurationTemplate {
  export type Input = CreateConfigurationTemplateMessage;
  export type Output = ConfigurationSettingsDescription;
  export type Error =
    | InsufficientPrivilegesException
    | TooManyBucketsException
    | TooManyConfigurationTemplatesException
    | CommonAwsError;
}

export declare namespace CreateEnvironment {
  export type Input = CreateEnvironmentMessage;
  export type Output = EnvironmentDescription;
  export type Error =
    | InsufficientPrivilegesException
    | TooManyEnvironmentsException
    | CommonAwsError;
}

export declare namespace CreatePlatformVersion {
  export type Input = CreatePlatformVersionRequest;
  export type Output = CreatePlatformVersionResult;
  export type Error =
    | ElasticBeanstalkServiceException
    | InsufficientPrivilegesException
    | TooManyPlatformsException
    | CommonAwsError;
}

export declare namespace CreateStorageLocation {
  export type Input = {};
  export type Output = CreateStorageLocationResultMessage;
  export type Error =
    | InsufficientPrivilegesException
    | S3SubscriptionRequiredException
    | TooManyBucketsException
    | CommonAwsError;
}

export declare namespace DeleteApplication {
  export type Input = DeleteApplicationMessage;
  export type Output = {};
  export type Error = OperationInProgressException | CommonAwsError;
}

export declare namespace DeleteApplicationVersion {
  export type Input = DeleteApplicationVersionMessage;
  export type Output = {};
  export type Error =
    | InsufficientPrivilegesException
    | OperationInProgressException
    | S3LocationNotInServiceRegionException
    | SourceBundleDeletionException
    | CommonAwsError;
}

export declare namespace DeleteConfigurationTemplate {
  export type Input = DeleteConfigurationTemplateMessage;
  export type Output = {};
  export type Error = OperationInProgressException | CommonAwsError;
}

export declare namespace DeleteEnvironmentConfiguration {
  export type Input = DeleteEnvironmentConfigurationMessage;
  export type Output = {};
  export type Error = CommonAwsError;
}

export declare namespace DeletePlatformVersion {
  export type Input = DeletePlatformVersionRequest;
  export type Output = DeletePlatformVersionResult;
  export type Error =
    | ElasticBeanstalkServiceException
    | InsufficientPrivilegesException
    | OperationInProgressException
    | PlatformVersionStillReferencedException
    | CommonAwsError;
}

export declare namespace DescribeAccountAttributes {
  export type Input = {};
  export type Output = DescribeAccountAttributesResult;
  export type Error = InsufficientPrivilegesException | CommonAwsError;
}

export declare namespace DescribeApplications {
  export type Input = DescribeApplicationsMessage;
  export type Output = ApplicationDescriptionsMessage;
  export type Error = CommonAwsError;
}

export declare namespace DescribeApplicationVersions {
  export type Input = DescribeApplicationVersionsMessage;
  export type Output = ApplicationVersionDescriptionsMessage;
  export type Error = CommonAwsError;
}

export declare namespace DescribeConfigurationOptions {
  export type Input = DescribeConfigurationOptionsMessage;
  export type Output = ConfigurationOptionsDescription;
  export type Error = TooManyBucketsException | CommonAwsError;
}

export declare namespace DescribeConfigurationSettings {
  export type Input = DescribeConfigurationSettingsMessage;
  export type Output = ConfigurationSettingsDescriptions;
  export type Error = TooManyBucketsException | CommonAwsError;
}

export declare namespace DescribeEnvironmentHealth {
  export type Input = DescribeEnvironmentHealthRequest;
  export type Output = DescribeEnvironmentHealthResult;
  export type Error =
    | ElasticBeanstalkServiceException
    | InvalidRequestException
    | CommonAwsError;
}

export declare namespace DescribeEnvironmentManagedActionHistory {
  export type Input = DescribeEnvironmentManagedActionHistoryRequest;
  export type Output = DescribeEnvironmentManagedActionHistoryResult;
  export type Error = ElasticBeanstalkServiceException | CommonAwsError;
}

export declare namespace DescribeEnvironmentManagedActions {
  export type Input = DescribeEnvironmentManagedActionsRequest;
  export type Output = DescribeEnvironmentManagedActionsResult;
  export type Error = ElasticBeanstalkServiceException | CommonAwsError;
}

export declare namespace DescribeEnvironmentResources {
  export type Input = DescribeEnvironmentResourcesMessage;
  export type Output = EnvironmentResourceDescriptionsMessage;
  export type Error = InsufficientPrivilegesException | CommonAwsError;
}

export declare namespace DescribeEnvironments {
  export type Input = DescribeEnvironmentsMessage;
  export type Output = EnvironmentDescriptionsMessage;
  export type Error = CommonAwsError;
}

export declare namespace DescribeEvents {
  export type Input = DescribeEventsMessage;
  export type Output = EventDescriptionsMessage;
  export type Error = CommonAwsError;
}

export declare namespace DescribeInstancesHealth {
  export type Input = DescribeInstancesHealthRequest;
  export type Output = DescribeInstancesHealthResult;
  export type Error =
    | ElasticBeanstalkServiceException
    | InvalidRequestException
    | CommonAwsError;
}

export declare namespace DescribePlatformVersion {
  export type Input = DescribePlatformVersionRequest;
  export type Output = DescribePlatformVersionResult;
  export type Error =
    | ElasticBeanstalkServiceException
    | InsufficientPrivilegesException
    | CommonAwsError;
}

export declare namespace DisassociateEnvironmentOperationsRole {
  export type Input = DisassociateEnvironmentOperationsRoleMessage;
  export type Output = {};
  export type Error = InsufficientPrivilegesException | CommonAwsError;
}

export declare namespace ListAvailableSolutionStacks {
  export type Input = {};
  export type Output = ListAvailableSolutionStacksResultMessage;
  export type Error = CommonAwsError;
}

export declare namespace ListPlatformBranches {
  export type Input = ListPlatformBranchesRequest;
  export type Output = ListPlatformBranchesResult;
  export type Error = CommonAwsError;
}

export declare namespace ListPlatformVersions {
  export type Input = ListPlatformVersionsRequest;
  export type Output = ListPlatformVersionsResult;
  export type Error =
    | ElasticBeanstalkServiceException
    | InsufficientPrivilegesException
    | CommonAwsError;
}

export declare namespace ListTagsForResource {
  export type Input = ListTagsForResourceMessage;
  export type Output = ResourceTagsDescriptionMessage;
  export type Error =
    | InsufficientPrivilegesException
    | ResourceNotFoundException
    | ResourceTypeNotSupportedException
    | CommonAwsError;
}

export declare namespace RebuildEnvironment {
  export type Input = RebuildEnvironmentMessage;
  export type Output = {};
  export type Error = InsufficientPrivilegesException | CommonAwsError;
}

export declare namespace RequestEnvironmentInfo {
  export type Input = RequestEnvironmentInfoMessage;
  export type Output = {};
  export type Error = CommonAwsError;
}

export declare namespace RestartAppServer {
  export type Input = RestartAppServerMessage;
  export type Output = {};
  export type Error = CommonAwsError;
}

export declare namespace RetrieveEnvironmentInfo {
  export type Input = RetrieveEnvironmentInfoMessage;
  export type Output = RetrieveEnvironmentInfoResultMessage;
  export type Error = CommonAwsError;
}

export declare namespace SwapEnvironmentCNAMEs {
  export type Input = SwapEnvironmentCNAMEsMessage;
  export type Output = {};
  export type Error = CommonAwsError;
}

export declare namespace TerminateEnvironment {
  export type Input = TerminateEnvironmentMessage;
  export type Output = EnvironmentDescription;
  export type Error = InsufficientPrivilegesException | CommonAwsError;
}

export declare namespace UpdateApplication {
  export type Input = UpdateApplicationMessage;
  export type Output = ApplicationDescriptionMessage;
  export type Error = CommonAwsError;
}

export declare namespace UpdateApplicationResourceLifecycle {
  export type Input = UpdateApplicationResourceLifecycleMessage;
  export type Output = ApplicationResourceLifecycleDescriptionMessage;
  export type Error = InsufficientPrivilegesException | CommonAwsError;
}

export declare namespace UpdateApplicationVersion {
  export type Input = UpdateApplicationVersionMessage;
  export type Output = ApplicationVersionDescriptionMessage;
  export type Error = CommonAwsError;
}

export declare namespace UpdateConfigurationTemplate {
  export type Input = UpdateConfigurationTemplateMessage;
  export type Output = ConfigurationSettingsDescription;
  export type Error =
    | InsufficientPrivilegesException
    | TooManyBucketsException
    | CommonAwsError;
}

export declare namespace UpdateEnvironment {
  export type Input = UpdateEnvironmentMessage;
  export type Output = EnvironmentDescription;
  export type Error =
    | InsufficientPrivilegesException
    | TooManyBucketsException
    | CommonAwsError;
}

export declare namespace UpdateTagsForResource {
  export type Input = UpdateTagsForResourceMessage;
  export type Output = {};
  export type Error =
    | InsufficientPrivilegesException
    | OperationInProgressException
    | ResourceNotFoundException
    | ResourceTypeNotSupportedException
    | TooManyTagsException
    | CommonAwsError;
}

export declare namespace ValidateConfigurationSettings {
  export type Input = ValidateConfigurationSettingsMessage;
  export type Output = ConfigurationSettingsValidationMessages;
  export type Error =
    | InsufficientPrivilegesException
    | TooManyBucketsException
    | CommonAwsError;
}
