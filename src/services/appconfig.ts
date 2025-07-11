import type { Effect, Data as EffectData } from "effect";
import type { CommonAwsError } from "../error.ts";
import { AWSServiceClient } from "../client.ts";

export declare class AppConfig extends AWSServiceClient {
  createApplication(
    input: CreateApplicationRequest,
  ): Effect.Effect<
    Application,
    | BadRequestException
    | InternalServerException
    | ServiceQuotaExceededException
    | CommonAwsError
  >;
  createConfigurationProfile(
    input: CreateConfigurationProfileRequest,
  ): Effect.Effect<
    ConfigurationProfile,
    | BadRequestException
    | InternalServerException
    | ResourceNotFoundException
    | ServiceQuotaExceededException
    | CommonAwsError
  >;
  createDeploymentStrategy(
    input: CreateDeploymentStrategyRequest,
  ): Effect.Effect<
    DeploymentStrategy,
    | BadRequestException
    | InternalServerException
    | ServiceQuotaExceededException
    | CommonAwsError
  >;
  createEnvironment(
    input: CreateEnvironmentRequest,
  ): Effect.Effect<
    Environment,
    | BadRequestException
    | InternalServerException
    | ResourceNotFoundException
    | ServiceQuotaExceededException
    | CommonAwsError
  >;
  createExtension(
    input: CreateExtensionRequest,
  ): Effect.Effect<
    Extension,
    | BadRequestException
    | ConflictException
    | InternalServerException
    | ServiceQuotaExceededException
    | CommonAwsError
  >;
  createExtensionAssociation(
    input: CreateExtensionAssociationRequest,
  ): Effect.Effect<
    ExtensionAssociation,
    | BadRequestException
    | InternalServerException
    | ResourceNotFoundException
    | ServiceQuotaExceededException
    | CommonAwsError
  >;
  createHostedConfigurationVersion(
    input: CreateHostedConfigurationVersionRequest,
  ): Effect.Effect<
    HostedConfigurationVersion,
    | BadRequestException
    | ConflictException
    | InternalServerException
    | PayloadTooLargeException
    | ResourceNotFoundException
    | ServiceQuotaExceededException
    | CommonAwsError
  >;
  deleteApplication(
    input: DeleteApplicationRequest,
  ): Effect.Effect<
    {},
    | BadRequestException
    | InternalServerException
    | ResourceNotFoundException
    | CommonAwsError
  >;
  deleteConfigurationProfile(
    input: DeleteConfigurationProfileRequest,
  ): Effect.Effect<
    {},
    | BadRequestException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | CommonAwsError
  >;
  deleteDeploymentStrategy(
    input: DeleteDeploymentStrategyRequest,
  ): Effect.Effect<
    {},
    | BadRequestException
    | InternalServerException
    | ResourceNotFoundException
    | CommonAwsError
  >;
  deleteEnvironment(
    input: DeleteEnvironmentRequest,
  ): Effect.Effect<
    {},
    | BadRequestException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | CommonAwsError
  >;
  deleteExtension(
    input: DeleteExtensionRequest,
  ): Effect.Effect<
    {},
    | BadRequestException
    | InternalServerException
    | ResourceNotFoundException
    | CommonAwsError
  >;
  deleteExtensionAssociation(
    input: DeleteExtensionAssociationRequest,
  ): Effect.Effect<
    {},
    | BadRequestException
    | InternalServerException
    | ResourceNotFoundException
    | CommonAwsError
  >;
  deleteHostedConfigurationVersion(
    input: DeleteHostedConfigurationVersionRequest,
  ): Effect.Effect<
    {},
    | BadRequestException
    | InternalServerException
    | ResourceNotFoundException
    | CommonAwsError
  >;
  getAccountSettings(input: {}): Effect.Effect<
    AccountSettings,
    BadRequestException | InternalServerException | CommonAwsError
  >;
  getApplication(
    input: GetApplicationRequest,
  ): Effect.Effect<
    Application,
    | BadRequestException
    | InternalServerException
    | ResourceNotFoundException
    | CommonAwsError
  >;
  getConfiguration(
    input: GetConfigurationRequest,
  ): Effect.Effect<
    Configuration,
    | BadRequestException
    | InternalServerException
    | ResourceNotFoundException
    | CommonAwsError
  >;
  getConfigurationProfile(
    input: GetConfigurationProfileRequest,
  ): Effect.Effect<
    ConfigurationProfile,
    | BadRequestException
    | InternalServerException
    | ResourceNotFoundException
    | CommonAwsError
  >;
  getDeployment(
    input: GetDeploymentRequest,
  ): Effect.Effect<
    Deployment,
    | BadRequestException
    | InternalServerException
    | ResourceNotFoundException
    | CommonAwsError
  >;
  getDeploymentStrategy(
    input: GetDeploymentStrategyRequest,
  ): Effect.Effect<
    DeploymentStrategy,
    | BadRequestException
    | InternalServerException
    | ResourceNotFoundException
    | CommonAwsError
  >;
  getEnvironment(
    input: GetEnvironmentRequest,
  ): Effect.Effect<
    Environment,
    | BadRequestException
    | InternalServerException
    | ResourceNotFoundException
    | CommonAwsError
  >;
  getExtension(
    input: GetExtensionRequest,
  ): Effect.Effect<
    Extension,
    | BadRequestException
    | InternalServerException
    | ResourceNotFoundException
    | CommonAwsError
  >;
  getExtensionAssociation(
    input: GetExtensionAssociationRequest,
  ): Effect.Effect<
    ExtensionAssociation,
    | BadRequestException
    | InternalServerException
    | ResourceNotFoundException
    | CommonAwsError
  >;
  getHostedConfigurationVersion(
    input: GetHostedConfigurationVersionRequest,
  ): Effect.Effect<
    HostedConfigurationVersion,
    | BadRequestException
    | InternalServerException
    | ResourceNotFoundException
    | CommonAwsError
  >;
  listApplications(
    input: ListApplicationsRequest,
  ): Effect.Effect<
    Applications,
    BadRequestException | InternalServerException | CommonAwsError
  >;
  listConfigurationProfiles(
    input: ListConfigurationProfilesRequest,
  ): Effect.Effect<
    ConfigurationProfiles,
    | BadRequestException
    | InternalServerException
    | ResourceNotFoundException
    | CommonAwsError
  >;
  listDeployments(
    input: ListDeploymentsRequest,
  ): Effect.Effect<
    Deployments,
    | BadRequestException
    | InternalServerException
    | ResourceNotFoundException
    | CommonAwsError
  >;
  listDeploymentStrategies(
    input: ListDeploymentStrategiesRequest,
  ): Effect.Effect<
    DeploymentStrategies,
    BadRequestException | InternalServerException | CommonAwsError
  >;
  listEnvironments(
    input: ListEnvironmentsRequest,
  ): Effect.Effect<
    Environments,
    | BadRequestException
    | InternalServerException
    | ResourceNotFoundException
    | CommonAwsError
  >;
  listExtensionAssociations(
    input: ListExtensionAssociationsRequest,
  ): Effect.Effect<
    ExtensionAssociations,
    BadRequestException | InternalServerException | CommonAwsError
  >;
  listExtensions(
    input: ListExtensionsRequest,
  ): Effect.Effect<
    Extensions,
    BadRequestException | InternalServerException | CommonAwsError
  >;
  listHostedConfigurationVersions(
    input: ListHostedConfigurationVersionsRequest,
  ): Effect.Effect<
    HostedConfigurationVersions,
    | BadRequestException
    | InternalServerException
    | ResourceNotFoundException
    | CommonAwsError
  >;
  listTagsForResource(
    input: ListTagsForResourceRequest,
  ): Effect.Effect<
    ResourceTags,
    | BadRequestException
    | InternalServerException
    | ResourceNotFoundException
    | CommonAwsError
  >;
  startDeployment(
    input: StartDeploymentRequest,
  ): Effect.Effect<
    Deployment,
    | BadRequestException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | CommonAwsError
  >;
  stopDeployment(
    input: StopDeploymentRequest,
  ): Effect.Effect<
    Deployment,
    | BadRequestException
    | InternalServerException
    | ResourceNotFoundException
    | CommonAwsError
  >;
  tagResource(
    input: TagResourceRequest,
  ): Effect.Effect<
    {},
    | BadRequestException
    | InternalServerException
    | ResourceNotFoundException
    | CommonAwsError
  >;
  untagResource(
    input: UntagResourceRequest,
  ): Effect.Effect<
    {},
    | BadRequestException
    | InternalServerException
    | ResourceNotFoundException
    | CommonAwsError
  >;
  updateAccountSettings(
    input: UpdateAccountSettingsRequest,
  ): Effect.Effect<
    AccountSettings,
    BadRequestException | InternalServerException | CommonAwsError
  >;
  updateApplication(
    input: UpdateApplicationRequest,
  ): Effect.Effect<
    Application,
    | BadRequestException
    | InternalServerException
    | ResourceNotFoundException
    | CommonAwsError
  >;
  updateConfigurationProfile(
    input: UpdateConfigurationProfileRequest,
  ): Effect.Effect<
    ConfigurationProfile,
    | BadRequestException
    | InternalServerException
    | ResourceNotFoundException
    | CommonAwsError
  >;
  updateDeploymentStrategy(
    input: UpdateDeploymentStrategyRequest,
  ): Effect.Effect<
    DeploymentStrategy,
    | BadRequestException
    | InternalServerException
    | ResourceNotFoundException
    | CommonAwsError
  >;
  updateEnvironment(
    input: UpdateEnvironmentRequest,
  ): Effect.Effect<
    Environment,
    | BadRequestException
    | InternalServerException
    | ResourceNotFoundException
    | CommonAwsError
  >;
  updateExtension(
    input: UpdateExtensionRequest,
  ): Effect.Effect<
    Extension,
    | BadRequestException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | CommonAwsError
  >;
  updateExtensionAssociation(
    input: UpdateExtensionAssociationRequest,
  ): Effect.Effect<
    ExtensionAssociation,
    | BadRequestException
    | InternalServerException
    | ResourceNotFoundException
    | CommonAwsError
  >;
  validateConfiguration(
    input: ValidateConfigurationRequest,
  ): Effect.Effect<
    {},
    | BadRequestException
    | InternalServerException
    | ResourceNotFoundException
    | CommonAwsError
  >;
}

export declare class Appconfig extends AppConfig {}

export interface AccountSettings {
  DeletionProtection?: DeletionProtectionSettings;
}
export interface Action {
  Name?: string;
  Description?: string;
  Uri?: string;
  RoleArn?: string;
}
export interface ActionInvocation {
  ExtensionIdentifier?: string;
  ActionName?: string;
  Uri?: string;
  RoleArn?: string;
  ErrorMessage?: string;
  ErrorCode?: string;
  InvocationId?: string;
}
export type ActionInvocations = Array<ActionInvocation>;
export type ActionList = Array<Action>;
export type ActionPoint =
  | "PRE_CREATE_HOSTED_CONFIGURATION_VERSION"
  | "PRE_START_DEPLOYMENT"
  | "AT_DEPLOYMENT_TICK"
  | "ON_DEPLOYMENT_START"
  | "ON_DEPLOYMENT_STEP"
  | "ON_DEPLOYMENT_BAKING"
  | "ON_DEPLOYMENT_COMPLETE"
  | "ON_DEPLOYMENT_ROLLED_BACK";
export type ActionsMap = Record<ActionPoint, Array<Action>>;
export interface Application {
  Id?: string;
  Name?: string;
  Description?: string;
}
export type ApplicationList = Array<Application>;
export interface Applications {
  Items?: Array<Application>;
  NextToken?: string;
}
export interface AppliedExtension {
  ExtensionId?: string;
  ExtensionAssociationId?: string;
  VersionNumber?: number;
  Parameters?: Record<string, string>;
}
export type AppliedExtensions = Array<AppliedExtension>;
export type Arn = string;

interface _BadRequestDetails {
  InvalidConfiguration?: Array<InvalidConfigurationDetail>;
}

export type BadRequestDetails = _BadRequestDetails & {
  InvalidConfiguration: Array<InvalidConfigurationDetail>;
};
export declare class BadRequestException extends EffectData.TaggedError(
  "BadRequestException",
)<{
  readonly Message?: string;
  readonly Reason?: BadRequestReason;
  readonly Details?: BadRequestDetails;
}> {}
export type BadRequestReason = "INVALID_CONFIGURATION";
export type Blob = Uint8Array | string;

export type AppconfigBoolean = boolean;

export type BytesMeasure = "KILOBYTES";
export interface Configuration {
  Content?: Uint8Array | string;
  ConfigurationVersion?: string;
  ContentType?: string;
}
export interface ConfigurationProfile {
  ApplicationId?: string;
  Id?: string;
  Name?: string;
  Description?: string;
  LocationUri?: string;
  RetrievalRoleArn?: string;
  Validators?: Array<Validator>;
  Type?: string;
  KmsKeyArn?: string;
  KmsKeyIdentifier?: string;
}
export interface ConfigurationProfiles {
  Items?: Array<ConfigurationProfileSummary>;
  NextToken?: string;
}
export interface ConfigurationProfileSummary {
  ApplicationId?: string;
  Id?: string;
  Name?: string;
  LocationUri?: string;
  ValidatorTypes?: Array<ValidatorType>;
  Type?: string;
}
export type ConfigurationProfileSummaryList =
  Array<ConfigurationProfileSummary>;
export type ConfigurationProfileType = string;

export declare class ConflictException extends EffectData.TaggedError(
  "ConflictException",
)<{
  readonly Message?: string;
}> {}
export interface CreateApplicationRequest {
  Name: string;
  Description?: string;
  Tags?: Record<string, string>;
}
export interface CreateConfigurationProfileRequest {
  ApplicationId: string;
  Name: string;
  Description?: string;
  LocationUri: string;
  RetrievalRoleArn?: string;
  Validators?: Array<Validator>;
  Tags?: Record<string, string>;
  Type?: string;
  KmsKeyIdentifier?: string;
}
export interface CreateDeploymentStrategyRequest {
  Name: string;
  Description?: string;
  DeploymentDurationInMinutes: number;
  FinalBakeTimeInMinutes?: number;
  GrowthFactor: number;
  GrowthType?: GrowthType;
  ReplicateTo?: ReplicateTo;
  Tags?: Record<string, string>;
}
export interface CreateEnvironmentRequest {
  ApplicationId: string;
  Name: string;
  Description?: string;
  Monitors?: Array<Monitor>;
  Tags?: Record<string, string>;
}
export interface CreateExtensionAssociationRequest {
  ExtensionIdentifier: string;
  ExtensionVersionNumber?: number;
  ResourceIdentifier: string;
  Parameters?: Record<string, string>;
  Tags?: Record<string, string>;
}
export interface CreateExtensionRequest {
  Name: string;
  Description?: string;
  Actions: Record<ActionPoint, Array<Action>>;
  Parameters?: Record<string, Parameter>;
  Tags?: Record<string, string>;
  LatestVersionNumber?: number;
}
export interface CreateHostedConfigurationVersionRequest {
  ApplicationId: string;
  ConfigurationProfileId: string;
  Description?: string;
  Content: Uint8Array | string;
  ContentType: string;
  LatestVersionNumber?: number;
  VersionLabel?: string;
}
export interface DeleteApplicationRequest {
  ApplicationId: string;
}
export interface DeleteConfigurationProfileRequest {
  ApplicationId: string;
  ConfigurationProfileId: string;
  DeletionProtectionCheck?: DeletionProtectionCheck;
}
export interface DeleteDeploymentStrategyRequest {
  DeploymentStrategyId: string;
}
export interface DeleteEnvironmentRequest {
  EnvironmentId: string;
  ApplicationId: string;
  DeletionProtectionCheck?: DeletionProtectionCheck;
}
export interface DeleteExtensionAssociationRequest {
  ExtensionAssociationId: string;
}
export interface DeleteExtensionRequest {
  ExtensionIdentifier: string;
  VersionNumber?: number;
}
export interface DeleteHostedConfigurationVersionRequest {
  ApplicationId: string;
  ConfigurationProfileId: string;
  VersionNumber: number;
}
export type DeletionProtectionCheck = "ACCOUNT_DEFAULT" | "APPLY" | "BYPASS";
export type DeletionProtectionDuration = number;

export interface DeletionProtectionSettings {
  Enabled?: boolean;
  ProtectionPeriodInMinutes?: number;
}
export interface Deployment {
  ApplicationId?: string;
  EnvironmentId?: string;
  DeploymentStrategyId?: string;
  ConfigurationProfileId?: string;
  DeploymentNumber?: number;
  ConfigurationName?: string;
  ConfigurationLocationUri?: string;
  ConfigurationVersion?: string;
  Description?: string;
  DeploymentDurationInMinutes?: number;
  GrowthType?: GrowthType;
  GrowthFactor?: number;
  FinalBakeTimeInMinutes?: number;
  State?: DeploymentState;
  EventLog?: Array<DeploymentEvent>;
  PercentageComplete?: number;
  StartedAt?: Date | string;
  CompletedAt?: Date | string;
  AppliedExtensions?: Array<AppliedExtension>;
  KmsKeyArn?: string;
  KmsKeyIdentifier?: string;
  VersionLabel?: string;
}
export interface DeploymentEvent {
  EventType?: DeploymentEventType;
  TriggeredBy?: TriggeredBy;
  Description?: string;
  ActionInvocations?: Array<ActionInvocation>;
  OccurredAt?: Date | string;
}
export type DeploymentEvents = Array<DeploymentEvent>;
export type DeploymentEventType =
  | "PERCENTAGE_UPDATED"
  | "ROLLBACK_STARTED"
  | "ROLLBACK_COMPLETED"
  | "BAKE_TIME_STARTED"
  | "DEPLOYMENT_STARTED"
  | "DEPLOYMENT_COMPLETED"
  | "REVERT_COMPLETED";
export type DeploymentList = Array<DeploymentSummary>;
export interface Deployments {
  Items?: Array<DeploymentSummary>;
  NextToken?: string;
}
export type DeploymentState =
  | "BAKING"
  | "VALIDATING"
  | "DEPLOYING"
  | "COMPLETE"
  | "ROLLING_BACK"
  | "ROLLED_BACK"
  | "REVERTED";
export interface DeploymentStrategies {
  Items?: Array<DeploymentStrategy>;
  NextToken?: string;
}
export interface DeploymentStrategy {
  Id?: string;
  Name?: string;
  Description?: string;
  DeploymentDurationInMinutes?: number;
  GrowthType?: GrowthType;
  GrowthFactor?: number;
  FinalBakeTimeInMinutes?: number;
  ReplicateTo?: ReplicateTo;
}
export type DeploymentStrategyId = string;

export type DeploymentStrategyList = Array<DeploymentStrategy>;
export interface DeploymentSummary {
  DeploymentNumber?: number;
  ConfigurationName?: string;
  ConfigurationVersion?: string;
  DeploymentDurationInMinutes?: number;
  GrowthType?: GrowthType;
  GrowthFactor?: number;
  FinalBakeTimeInMinutes?: number;
  State?: DeploymentState;
  PercentageComplete?: number;
  StartedAt?: Date | string;
  CompletedAt?: Date | string;
  VersionLabel?: string;
}
export type Description = string;

export type DynamicParameterKey = string;

export type DynamicParameterMap = Record<string, string>;
export interface Environment {
  ApplicationId?: string;
  Id?: string;
  Name?: string;
  Description?: string;
  State?: EnvironmentState;
  Monitors?: Array<Monitor>;
}
export type EnvironmentList = Array<Environment>;
export interface Environments {
  Items?: Array<Environment>;
  NextToken?: string;
}
export type EnvironmentState =
  | "READY_FOR_DEPLOYMENT"
  | "DEPLOYING"
  | "ROLLING_BACK"
  | "ROLLED_BACK"
  | "REVERTED";
export interface Extension {
  Id?: string;
  Name?: string;
  VersionNumber?: number;
  Arn?: string;
  Description?: string;
  Actions?: Record<ActionPoint, Array<Action>>;
  Parameters?: Record<string, Parameter>;
}
export interface ExtensionAssociation {
  Id?: string;
  ExtensionArn?: string;
  ResourceArn?: string;
  Arn?: string;
  Parameters?: Record<string, string>;
  ExtensionVersionNumber?: number;
}
export interface ExtensionAssociations {
  Items?: Array<ExtensionAssociationSummary>;
  NextToken?: string;
}
export type ExtensionAssociationSummaries = Array<ExtensionAssociationSummary>;
export interface ExtensionAssociationSummary {
  Id?: string;
  ExtensionArn?: string;
  ResourceArn?: string;
}
export type ExtensionOrParameterName = string;

export interface Extensions {
  Items?: Array<ExtensionSummary>;
  NextToken?: string;
}
export type ExtensionSummaries = Array<ExtensionSummary>;
export interface ExtensionSummary {
  Id?: string;
  Name?: string;
  VersionNumber?: number;
  Arn?: string;
  Description?: string;
}
export type Float = number;

export interface GetApplicationRequest {
  ApplicationId: string;
}
export interface GetConfigurationProfileRequest {
  ApplicationId: string;
  ConfigurationProfileId: string;
}
export interface GetConfigurationRequest {
  Application: string;
  Environment: string;
  Configuration: string;
  ClientId: string;
  ClientConfigurationVersion?: string;
}
export interface GetDeploymentRequest {
  ApplicationId: string;
  EnvironmentId: string;
  DeploymentNumber: number;
}
export interface GetDeploymentStrategyRequest {
  DeploymentStrategyId: string;
}
export interface GetEnvironmentRequest {
  ApplicationId: string;
  EnvironmentId: string;
}
export interface GetExtensionAssociationRequest {
  ExtensionAssociationId: string;
}
export interface GetExtensionRequest {
  ExtensionIdentifier: string;
  VersionNumber?: number;
}
export interface GetHostedConfigurationVersionRequest {
  ApplicationId: string;
  ConfigurationProfileId: string;
  VersionNumber: number;
}
export type GrowthFactor = number;

export type GrowthType = "LINEAR" | "EXPONENTIAL";
export interface HostedConfigurationVersion {
  ApplicationId?: string;
  ConfigurationProfileId?: string;
  VersionNumber?: number;
  Description?: string;
  Content?: Uint8Array | string;
  ContentType?: string;
  VersionLabel?: string;
  KmsKeyArn?: string;
}
export interface HostedConfigurationVersions {
  Items?: Array<HostedConfigurationVersionSummary>;
  NextToken?: string;
}
export interface HostedConfigurationVersionSummary {
  ApplicationId?: string;
  ConfigurationProfileId?: string;
  VersionNumber?: number;
  Description?: string;
  ContentType?: string;
  VersionLabel?: string;
  KmsKeyArn?: string;
}
export type HostedConfigurationVersionSummaryList =
  Array<HostedConfigurationVersionSummary>;
export type Id = string;

export type Identifier = string;

export type Integer = number;

export declare class InternalServerException extends EffectData.TaggedError(
  "InternalServerException",
)<{
  readonly Message?: string;
}> {}
export interface InvalidConfigurationDetail {
  Constraint?: string;
  Location?: string;
  Reason?: string;
  Type?: string;
  Value?: string;
}
export type InvalidConfigurationDetailList = Array<InvalidConfigurationDetail>;
export type Iso8601DateTime = Date | string;

export type KmsKeyIdentifier = string;

export type KmsKeyIdentifierOrEmpty = string;

export interface ListApplicationsRequest {
  MaxResults?: number;
  NextToken?: string;
}
export interface ListConfigurationProfilesRequest {
  ApplicationId: string;
  MaxResults?: number;
  NextToken?: string;
  Type?: string;
}
export interface ListDeploymentsRequest {
  ApplicationId: string;
  EnvironmentId: string;
  MaxResults?: number;
  NextToken?: string;
}
export interface ListDeploymentStrategiesRequest {
  MaxResults?: number;
  NextToken?: string;
}
export interface ListEnvironmentsRequest {
  ApplicationId: string;
  MaxResults?: number;
  NextToken?: string;
}
export interface ListExtensionAssociationsRequest {
  ResourceIdentifier?: string;
  ExtensionIdentifier?: string;
  ExtensionVersionNumber?: number;
  MaxResults?: number;
  NextToken?: string;
}
export interface ListExtensionsRequest {
  MaxResults?: number;
  NextToken?: string;
  Name?: string;
}
export interface ListHostedConfigurationVersionsRequest {
  ApplicationId: string;
  ConfigurationProfileId: string;
  MaxResults?: number;
  NextToken?: string;
  VersionLabel?: string;
}
export interface ListTagsForResourceRequest {
  ResourceArn: string;
}
export type LongName = string;

export type MaxResults = number;

export type MinutesBetween0And24Hours = number;

export interface Monitor {
  AlarmArn: string;
  AlarmRoleArn?: string;
}
export type MonitorList = Array<Monitor>;
export type Name = string;

export type NextToken = string;

export interface Parameter {
  Description?: string;
  Required?: boolean;
  Dynamic?: boolean;
}
export type ParameterMap = Record<string, Parameter>;
export type ParameterValueMap = Record<string, string>;
export declare class PayloadTooLargeException extends EffectData.TaggedError(
  "PayloadTooLargeException",
)<{
  readonly Message?: string;
  readonly Measure?: BytesMeasure;
  readonly Limit?: number;
  readonly Size?: number;
}> {}
export type Percentage = number;

export type QueryName = string;

export type ReplicateTo = "NONE" | "SSM_DOCUMENT";
export declare class ResourceNotFoundException extends EffectData.TaggedError(
  "ResourceNotFoundException",
)<{
  readonly Message?: string;
  readonly ResourceName?: string;
}> {}
export interface ResourceTags {
  Tags?: Record<string, string>;
}
export type RoleArn = string;

export declare class ServiceQuotaExceededException extends EffectData.TaggedError(
  "ServiceQuotaExceededException",
)<{
  readonly Message?: string;
}> {}
export interface StartDeploymentRequest {
  ApplicationId: string;
  EnvironmentId: string;
  DeploymentStrategyId: string;
  ConfigurationProfileId: string;
  ConfigurationVersion: string;
  Description?: string;
  Tags?: Record<string, string>;
  KmsKeyIdentifier?: string;
  DynamicExtensionParameters?: Record<string, string>;
}
export interface StopDeploymentRequest {
  ApplicationId: string;
  EnvironmentId: string;
  DeploymentNumber: number;
  AllowRevert?: boolean;
}
export type AppconfigString = string;

export type StringWithLengthBetween0And32768 = string;

export type StringWithLengthBetween1And2048 = string;

export type StringWithLengthBetween1And255 = string;

export type StringWithLengthBetween1And64 = string;

export type TagKey = string;

export type TagKeyList = Array<string>;
export type TagMap = Record<string, string>;
export interface TagResourceRequest {
  ResourceArn: string;
  Tags: Record<string, string>;
}
export type TagValue = string;

export type TriggeredBy =
  | "USER"
  | "APPCONFIG"
  | "CLOUDWATCH_ALARM"
  | "INTERNAL_ERROR";
export interface UntagResourceRequest {
  ResourceArn: string;
  TagKeys: Array<string>;
}
export interface UpdateAccountSettingsRequest {
  DeletionProtection?: DeletionProtectionSettings;
}
export interface UpdateApplicationRequest {
  ApplicationId: string;
  Name?: string;
  Description?: string;
}
export interface UpdateConfigurationProfileRequest {
  ApplicationId: string;
  ConfigurationProfileId: string;
  Name?: string;
  Description?: string;
  RetrievalRoleArn?: string;
  Validators?: Array<Validator>;
  KmsKeyIdentifier?: string;
}
export interface UpdateDeploymentStrategyRequest {
  DeploymentStrategyId: string;
  Description?: string;
  DeploymentDurationInMinutes?: number;
  FinalBakeTimeInMinutes?: number;
  GrowthFactor?: number;
  GrowthType?: GrowthType;
}
export interface UpdateEnvironmentRequest {
  ApplicationId: string;
  EnvironmentId: string;
  Name?: string;
  Description?: string;
  Monitors?: Array<Monitor>;
}
export interface UpdateExtensionAssociationRequest {
  ExtensionAssociationId: string;
  Parameters?: Record<string, string>;
}
export interface UpdateExtensionRequest {
  ExtensionIdentifier: string;
  Description?: string;
  Actions?: Record<ActionPoint, Array<Action>>;
  Parameters?: Record<string, Parameter>;
  VersionNumber?: number;
}
export type Uri = string;

export interface ValidateConfigurationRequest {
  ApplicationId: string;
  ConfigurationProfileId: string;
  ConfigurationVersion: string;
}
export interface Validator {
  Type: ValidatorType;
  Content: string;
}
export type ValidatorList = Array<Validator>;
export type ValidatorType = "JSON_SCHEMA" | "LAMBDA";
export type ValidatorTypeList = Array<ValidatorType>;
export type Version = string;

export type VersionLabel = string;

export declare namespace CreateApplication {
  export type Input = CreateApplicationRequest;
  export type Output = Application;
  export type Error =
    | BadRequestException
    | InternalServerException
    | ServiceQuotaExceededException
    | CommonAwsError;
}

export declare namespace CreateConfigurationProfile {
  export type Input = CreateConfigurationProfileRequest;
  export type Output = ConfigurationProfile;
  export type Error =
    | BadRequestException
    | InternalServerException
    | ResourceNotFoundException
    | ServiceQuotaExceededException
    | CommonAwsError;
}

export declare namespace CreateDeploymentStrategy {
  export type Input = CreateDeploymentStrategyRequest;
  export type Output = DeploymentStrategy;
  export type Error =
    | BadRequestException
    | InternalServerException
    | ServiceQuotaExceededException
    | CommonAwsError;
}

export declare namespace CreateEnvironment {
  export type Input = CreateEnvironmentRequest;
  export type Output = Environment;
  export type Error =
    | BadRequestException
    | InternalServerException
    | ResourceNotFoundException
    | ServiceQuotaExceededException
    | CommonAwsError;
}

export declare namespace CreateExtension {
  export type Input = CreateExtensionRequest;
  export type Output = Extension;
  export type Error =
    | BadRequestException
    | ConflictException
    | InternalServerException
    | ServiceQuotaExceededException
    | CommonAwsError;
}

export declare namespace CreateExtensionAssociation {
  export type Input = CreateExtensionAssociationRequest;
  export type Output = ExtensionAssociation;
  export type Error =
    | BadRequestException
    | InternalServerException
    | ResourceNotFoundException
    | ServiceQuotaExceededException
    | CommonAwsError;
}

export declare namespace CreateHostedConfigurationVersion {
  export type Input = CreateHostedConfigurationVersionRequest;
  export type Output = HostedConfigurationVersion;
  export type Error =
    | BadRequestException
    | ConflictException
    | InternalServerException
    | PayloadTooLargeException
    | ResourceNotFoundException
    | ServiceQuotaExceededException
    | CommonAwsError;
}

export declare namespace DeleteApplication {
  export type Input = DeleteApplicationRequest;
  export type Output = {};
  export type Error =
    | BadRequestException
    | InternalServerException
    | ResourceNotFoundException
    | CommonAwsError;
}

export declare namespace DeleteConfigurationProfile {
  export type Input = DeleteConfigurationProfileRequest;
  export type Output = {};
  export type Error =
    | BadRequestException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | CommonAwsError;
}

export declare namespace DeleteDeploymentStrategy {
  export type Input = DeleteDeploymentStrategyRequest;
  export type Output = {};
  export type Error =
    | BadRequestException
    | InternalServerException
    | ResourceNotFoundException
    | CommonAwsError;
}

export declare namespace DeleteEnvironment {
  export type Input = DeleteEnvironmentRequest;
  export type Output = {};
  export type Error =
    | BadRequestException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | CommonAwsError;
}

export declare namespace DeleteExtension {
  export type Input = DeleteExtensionRequest;
  export type Output = {};
  export type Error =
    | BadRequestException
    | InternalServerException
    | ResourceNotFoundException
    | CommonAwsError;
}

export declare namespace DeleteExtensionAssociation {
  export type Input = DeleteExtensionAssociationRequest;
  export type Output = {};
  export type Error =
    | BadRequestException
    | InternalServerException
    | ResourceNotFoundException
    | CommonAwsError;
}

export declare namespace DeleteHostedConfigurationVersion {
  export type Input = DeleteHostedConfigurationVersionRequest;
  export type Output = {};
  export type Error =
    | BadRequestException
    | InternalServerException
    | ResourceNotFoundException
    | CommonAwsError;
}

export declare namespace GetAccountSettings {
  export type Input = {};
  export type Output = AccountSettings;
  export type Error =
    | BadRequestException
    | InternalServerException
    | CommonAwsError;
}

export declare namespace GetApplication {
  export type Input = GetApplicationRequest;
  export type Output = Application;
  export type Error =
    | BadRequestException
    | InternalServerException
    | ResourceNotFoundException
    | CommonAwsError;
}

export declare namespace GetConfiguration {
  export type Input = GetConfigurationRequest;
  export type Output = Configuration;
  export type Error =
    | BadRequestException
    | InternalServerException
    | ResourceNotFoundException
    | CommonAwsError;
}

export declare namespace GetConfigurationProfile {
  export type Input = GetConfigurationProfileRequest;
  export type Output = ConfigurationProfile;
  export type Error =
    | BadRequestException
    | InternalServerException
    | ResourceNotFoundException
    | CommonAwsError;
}

export declare namespace GetDeployment {
  export type Input = GetDeploymentRequest;
  export type Output = Deployment;
  export type Error =
    | BadRequestException
    | InternalServerException
    | ResourceNotFoundException
    | CommonAwsError;
}

export declare namespace GetDeploymentStrategy {
  export type Input = GetDeploymentStrategyRequest;
  export type Output = DeploymentStrategy;
  export type Error =
    | BadRequestException
    | InternalServerException
    | ResourceNotFoundException
    | CommonAwsError;
}

export declare namespace GetEnvironment {
  export type Input = GetEnvironmentRequest;
  export type Output = Environment;
  export type Error =
    | BadRequestException
    | InternalServerException
    | ResourceNotFoundException
    | CommonAwsError;
}

export declare namespace GetExtension {
  export type Input = GetExtensionRequest;
  export type Output = Extension;
  export type Error =
    | BadRequestException
    | InternalServerException
    | ResourceNotFoundException
    | CommonAwsError;
}

export declare namespace GetExtensionAssociation {
  export type Input = GetExtensionAssociationRequest;
  export type Output = ExtensionAssociation;
  export type Error =
    | BadRequestException
    | InternalServerException
    | ResourceNotFoundException
    | CommonAwsError;
}

export declare namespace GetHostedConfigurationVersion {
  export type Input = GetHostedConfigurationVersionRequest;
  export type Output = HostedConfigurationVersion;
  export type Error =
    | BadRequestException
    | InternalServerException
    | ResourceNotFoundException
    | CommonAwsError;
}

export declare namespace ListApplications {
  export type Input = ListApplicationsRequest;
  export type Output = Applications;
  export type Error =
    | BadRequestException
    | InternalServerException
    | CommonAwsError;
}

export declare namespace ListConfigurationProfiles {
  export type Input = ListConfigurationProfilesRequest;
  export type Output = ConfigurationProfiles;
  export type Error =
    | BadRequestException
    | InternalServerException
    | ResourceNotFoundException
    | CommonAwsError;
}

export declare namespace ListDeployments {
  export type Input = ListDeploymentsRequest;
  export type Output = Deployments;
  export type Error =
    | BadRequestException
    | InternalServerException
    | ResourceNotFoundException
    | CommonAwsError;
}

export declare namespace ListDeploymentStrategies {
  export type Input = ListDeploymentStrategiesRequest;
  export type Output = DeploymentStrategies;
  export type Error =
    | BadRequestException
    | InternalServerException
    | CommonAwsError;
}

export declare namespace ListEnvironments {
  export type Input = ListEnvironmentsRequest;
  export type Output = Environments;
  export type Error =
    | BadRequestException
    | InternalServerException
    | ResourceNotFoundException
    | CommonAwsError;
}

export declare namespace ListExtensionAssociations {
  export type Input = ListExtensionAssociationsRequest;
  export type Output = ExtensionAssociations;
  export type Error =
    | BadRequestException
    | InternalServerException
    | CommonAwsError;
}

export declare namespace ListExtensions {
  export type Input = ListExtensionsRequest;
  export type Output = Extensions;
  export type Error =
    | BadRequestException
    | InternalServerException
    | CommonAwsError;
}

export declare namespace ListHostedConfigurationVersions {
  export type Input = ListHostedConfigurationVersionsRequest;
  export type Output = HostedConfigurationVersions;
  export type Error =
    | BadRequestException
    | InternalServerException
    | ResourceNotFoundException
    | CommonAwsError;
}

export declare namespace ListTagsForResource {
  export type Input = ListTagsForResourceRequest;
  export type Output = ResourceTags;
  export type Error =
    | BadRequestException
    | InternalServerException
    | ResourceNotFoundException
    | CommonAwsError;
}

export declare namespace StartDeployment {
  export type Input = StartDeploymentRequest;
  export type Output = Deployment;
  export type Error =
    | BadRequestException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | CommonAwsError;
}

export declare namespace StopDeployment {
  export type Input = StopDeploymentRequest;
  export type Output = Deployment;
  export type Error =
    | BadRequestException
    | InternalServerException
    | ResourceNotFoundException
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

export declare namespace UpdateAccountSettings {
  export type Input = UpdateAccountSettingsRequest;
  export type Output = AccountSettings;
  export type Error =
    | BadRequestException
    | InternalServerException
    | CommonAwsError;
}

export declare namespace UpdateApplication {
  export type Input = UpdateApplicationRequest;
  export type Output = Application;
  export type Error =
    | BadRequestException
    | InternalServerException
    | ResourceNotFoundException
    | CommonAwsError;
}

export declare namespace UpdateConfigurationProfile {
  export type Input = UpdateConfigurationProfileRequest;
  export type Output = ConfigurationProfile;
  export type Error =
    | BadRequestException
    | InternalServerException
    | ResourceNotFoundException
    | CommonAwsError;
}

export declare namespace UpdateDeploymentStrategy {
  export type Input = UpdateDeploymentStrategyRequest;
  export type Output = DeploymentStrategy;
  export type Error =
    | BadRequestException
    | InternalServerException
    | ResourceNotFoundException
    | CommonAwsError;
}

export declare namespace UpdateEnvironment {
  export type Input = UpdateEnvironmentRequest;
  export type Output = Environment;
  export type Error =
    | BadRequestException
    | InternalServerException
    | ResourceNotFoundException
    | CommonAwsError;
}

export declare namespace UpdateExtension {
  export type Input = UpdateExtensionRequest;
  export type Output = Extension;
  export type Error =
    | BadRequestException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | CommonAwsError;
}

export declare namespace UpdateExtensionAssociation {
  export type Input = UpdateExtensionAssociationRequest;
  export type Output = ExtensionAssociation;
  export type Error =
    | BadRequestException
    | InternalServerException
    | ResourceNotFoundException
    | CommonAwsError;
}

export declare namespace ValidateConfiguration {
  export type Input = ValidateConfigurationRequest;
  export type Output = {};
  export type Error =
    | BadRequestException
    | InternalServerException
    | ResourceNotFoundException
    | CommonAwsError;
}
