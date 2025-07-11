import type { Effect, Data } from "effect";
import type { CommonAwsError } from "../client.ts";

export interface AmazonAppConfig {
  createApplication(
    input: CreateApplicationRequest,
  ): Effect.Effect<
    {},
    BadRequestException | InternalServerException | ServiceQuotaExceededException | CommonAwsError
  >;
  createConfigurationProfile(
    input: CreateConfigurationProfileRequest,
  ): Effect.Effect<
    {},
    BadRequestException | InternalServerException | ResourceNotFoundException | ServiceQuotaExceededException | CommonAwsError
  >;
  createDeploymentStrategy(
    input: CreateDeploymentStrategyRequest,
  ): Effect.Effect<
    {},
    BadRequestException | InternalServerException | ServiceQuotaExceededException | CommonAwsError
  >;
  createEnvironment(
    input: CreateEnvironmentRequest,
  ): Effect.Effect<
    {},
    BadRequestException | InternalServerException | ResourceNotFoundException | ServiceQuotaExceededException | CommonAwsError
  >;
  createExtension(
    input: CreateExtensionRequest,
  ): Effect.Effect<
    {},
    BadRequestException | ConflictException | InternalServerException | ServiceQuotaExceededException | CommonAwsError
  >;
  createExtensionAssociation(
    input: CreateExtensionAssociationRequest,
  ): Effect.Effect<
    {},
    BadRequestException | InternalServerException | ResourceNotFoundException | ServiceQuotaExceededException | CommonAwsError
  >;
  createHostedConfigurationVersion(
    input: CreateHostedConfigurationVersionRequest,
  ): Effect.Effect<
    {},
    BadRequestException | ConflictException | InternalServerException | PayloadTooLargeException | ResourceNotFoundException | ServiceQuotaExceededException | CommonAwsError
  >;
  deleteApplication(
    input: DeleteApplicationRequest,
  ): Effect.Effect<
    {},
    BadRequestException | InternalServerException | ResourceNotFoundException | CommonAwsError
  >;
  deleteConfigurationProfile(
    input: DeleteConfigurationProfileRequest,
  ): Effect.Effect<
    {},
    BadRequestException | ConflictException | InternalServerException | ResourceNotFoundException | CommonAwsError
  >;
  deleteDeploymentStrategy(
    input: DeleteDeploymentStrategyRequest,
  ): Effect.Effect<
    {},
    BadRequestException | InternalServerException | ResourceNotFoundException | CommonAwsError
  >;
  deleteEnvironment(
    input: DeleteEnvironmentRequest,
  ): Effect.Effect<
    {},
    BadRequestException | ConflictException | InternalServerException | ResourceNotFoundException | CommonAwsError
  >;
  deleteExtension(
    input: DeleteExtensionRequest,
  ): Effect.Effect<
    {},
    BadRequestException | InternalServerException | ResourceNotFoundException | CommonAwsError
  >;
  deleteExtensionAssociation(
    input: DeleteExtensionAssociationRequest,
  ): Effect.Effect<
    {},
    BadRequestException | InternalServerException | ResourceNotFoundException | CommonAwsError
  >;
  deleteHostedConfigurationVersion(
    input: DeleteHostedConfigurationVersionRequest,
  ): Effect.Effect<
    {},
    BadRequestException | InternalServerException | ResourceNotFoundException | CommonAwsError
  >;
  getAccountSettings(
    input: {},
  ): Effect.Effect<
    {},
    BadRequestException | InternalServerException | CommonAwsError
  >;
  getApplication(
    input: GetApplicationRequest,
  ): Effect.Effect<
    {},
    BadRequestException | InternalServerException | ResourceNotFoundException | CommonAwsError
  >;
  getConfiguration(
    input: GetConfigurationRequest,
  ): Effect.Effect<
    {},
    BadRequestException | InternalServerException | ResourceNotFoundException | CommonAwsError
  >;
  getConfigurationProfile(
    input: GetConfigurationProfileRequest,
  ): Effect.Effect<
    {},
    BadRequestException | InternalServerException | ResourceNotFoundException | CommonAwsError
  >;
  getDeployment(
    input: GetDeploymentRequest,
  ): Effect.Effect<
    {},
    BadRequestException | InternalServerException | ResourceNotFoundException | CommonAwsError
  >;
  getDeploymentStrategy(
    input: GetDeploymentStrategyRequest,
  ): Effect.Effect<
    {},
    BadRequestException | InternalServerException | ResourceNotFoundException | CommonAwsError
  >;
  getEnvironment(
    input: GetEnvironmentRequest,
  ): Effect.Effect<
    {},
    BadRequestException | InternalServerException | ResourceNotFoundException | CommonAwsError
  >;
  getExtension(
    input: GetExtensionRequest,
  ): Effect.Effect<
    {},
    BadRequestException | InternalServerException | ResourceNotFoundException | CommonAwsError
  >;
  getExtensionAssociation(
    input: GetExtensionAssociationRequest,
  ): Effect.Effect<
    {},
    BadRequestException | InternalServerException | ResourceNotFoundException | CommonAwsError
  >;
  getHostedConfigurationVersion(
    input: GetHostedConfigurationVersionRequest,
  ): Effect.Effect<
    {},
    BadRequestException | InternalServerException | ResourceNotFoundException | CommonAwsError
  >;
  listApplications(
    input: ListApplicationsRequest,
  ): Effect.Effect<
    {},
    BadRequestException | InternalServerException | CommonAwsError
  >;
  listConfigurationProfiles(
    input: ListConfigurationProfilesRequest,
  ): Effect.Effect<
    {},
    BadRequestException | InternalServerException | ResourceNotFoundException | CommonAwsError
  >;
  listDeploymentStrategies(
    input: ListDeploymentStrategiesRequest,
  ): Effect.Effect<
    {},
    BadRequestException | InternalServerException | CommonAwsError
  >;
  listDeployments(
    input: ListDeploymentsRequest,
  ): Effect.Effect<
    {},
    BadRequestException | InternalServerException | ResourceNotFoundException | CommonAwsError
  >;
  listEnvironments(
    input: ListEnvironmentsRequest,
  ): Effect.Effect<
    {},
    BadRequestException | InternalServerException | ResourceNotFoundException | CommonAwsError
  >;
  listExtensionAssociations(
    input: ListExtensionAssociationsRequest,
  ): Effect.Effect<
    {},
    BadRequestException | InternalServerException | CommonAwsError
  >;
  listExtensions(
    input: ListExtensionsRequest,
  ): Effect.Effect<
    {},
    BadRequestException | InternalServerException | CommonAwsError
  >;
  listHostedConfigurationVersions(
    input: ListHostedConfigurationVersionsRequest,
  ): Effect.Effect<
    {},
    BadRequestException | InternalServerException | ResourceNotFoundException | CommonAwsError
  >;
  listTagsForResource(
    input: ListTagsForResourceRequest,
  ): Effect.Effect<
    {},
    BadRequestException | InternalServerException | ResourceNotFoundException | CommonAwsError
  >;
  startDeployment(
    input: StartDeploymentRequest,
  ): Effect.Effect<
    {},
    BadRequestException | ConflictException | InternalServerException | ResourceNotFoundException | CommonAwsError
  >;
  stopDeployment(
    input: StopDeploymentRequest,
  ): Effect.Effect<
    {},
    BadRequestException | InternalServerException | ResourceNotFoundException | CommonAwsError
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
  updateAccountSettings(
    input: UpdateAccountSettingsRequest,
  ): Effect.Effect<
    {},
    BadRequestException | InternalServerException | CommonAwsError
  >;
  updateApplication(
    input: UpdateApplicationRequest,
  ): Effect.Effect<
    {},
    BadRequestException | InternalServerException | ResourceNotFoundException | CommonAwsError
  >;
  updateConfigurationProfile(
    input: UpdateConfigurationProfileRequest,
  ): Effect.Effect<
    {},
    BadRequestException | InternalServerException | ResourceNotFoundException | CommonAwsError
  >;
  updateDeploymentStrategy(
    input: UpdateDeploymentStrategyRequest,
  ): Effect.Effect<
    {},
    BadRequestException | InternalServerException | ResourceNotFoundException | CommonAwsError
  >;
  updateEnvironment(
    input: UpdateEnvironmentRequest,
  ): Effect.Effect<
    {},
    BadRequestException | InternalServerException | ResourceNotFoundException | CommonAwsError
  >;
  updateExtension(
    input: UpdateExtensionRequest,
  ): Effect.Effect<
    {},
    BadRequestException | ConflictException | InternalServerException | ResourceNotFoundException | CommonAwsError
  >;
  updateExtensionAssociation(
    input: UpdateExtensionAssociationRequest,
  ): Effect.Effect<
    {},
    BadRequestException | InternalServerException | ResourceNotFoundException | CommonAwsError
  >;
  validateConfiguration(
    input: ValidateConfigurationRequest,
  ): Effect.Effect<
    {},
    BadRequestException | InternalServerException | ResourceNotFoundException | CommonAwsError
  >;
}

export type Appconfig = AmazonAppConfig;

export interface AccountSettings {
}
export interface Action {
}
export interface ActionInvocation {
}
export type ActionInvocations = Array<unknown>;
export type ActionList = Array<unknown>;
export type ActionPoint = never;
export type ActionsMap = Record<string, unknown>;
export interface Application {
}
export type ApplicationList = Array<unknown>;
export interface Applications {
}
export interface AppliedExtension {
}
export type AppliedExtensions = Array<unknown>;
export type Arn = string;

export type BadRequestDetails = never;
export interface BadRequestException {
}
export type BadRequestReason = never;
export type Blob = Uint8Array | string;

export type BytesMeasure = never;
export interface Configuration {
}
export interface ConfigurationProfile {
}
export interface ConfigurationProfiles {
}
export interface ConfigurationProfileSummary {
}
export type ConfigurationProfileSummaryList = Array<unknown>;
export type ConfigurationProfileType = string;

export interface ConflictException {
}
export interface CreateApplicationRequest {
}
export interface CreateConfigurationProfileRequest {
}
export interface CreateDeploymentStrategyRequest {
}
export interface CreateEnvironmentRequest {
}
export interface CreateExtensionAssociationRequest {
}
export interface CreateExtensionRequest {
}
export interface CreateHostedConfigurationVersionRequest {
}
export interface DeleteApplicationRequest {
}
export interface DeleteConfigurationProfileRequest {
}
export interface DeleteDeploymentStrategyRequest {
}
export interface DeleteEnvironmentRequest {
}
export interface DeleteExtensionAssociationRequest {
}
export interface DeleteExtensionRequest {
}
export interface DeleteHostedConfigurationVersionRequest {
}
export type DeletionProtectionCheck = never;
export type DeletionProtectionDuration = number;

export interface DeletionProtectionSettings {
}
export interface Deployment {
}
export interface DeploymentEvent {
}
export type DeploymentEvents = Array<unknown>;
export type DeploymentEventType = never;
export type DeploymentList = Array<unknown>;
export interface Deployments {
}
export type DeploymentState = never;
export interface DeploymentStrategies {
}
export interface DeploymentStrategy {
}
export type DeploymentStrategyId = string;

export type DeploymentStrategyList = Array<unknown>;
export interface DeploymentSummary {
}
export type Description = string;

export type DynamicParameterKey = string;

export type DynamicParameterMap = Record<string, unknown>;
export interface Environment {
}
export type EnvironmentList = Array<unknown>;
export interface Environments {
}
export type EnvironmentState = never;
export interface Extension {
}
export interface ExtensionAssociation {
}
export interface ExtensionAssociations {
}
export type ExtensionAssociationSummaries = Array<unknown>;
export interface ExtensionAssociationSummary {
}
export type ExtensionOrParameterName = string;

export interface Extensions {
}
export type ExtensionSummaries = Array<unknown>;
export interface ExtensionSummary {
}
export type Float = number;

export interface GetApplicationRequest {
}
export interface GetConfigurationProfileRequest {
}
export interface GetConfigurationRequest {
}
export interface GetDeploymentRequest {
}
export interface GetDeploymentStrategyRequest {
}
export interface GetEnvironmentRequest {
}
export interface GetExtensionAssociationRequest {
}
export interface GetExtensionRequest {
}
export interface GetHostedConfigurationVersionRequest {
}
export type GrowthFactor = number;

export type GrowthType = never;
export interface HostedConfigurationVersion {
}
export interface HostedConfigurationVersions {
}
export interface HostedConfigurationVersionSummary {
}
export type HostedConfigurationVersionSummaryList = Array<unknown>;
export type Id = string;

export type Identifier = string;

export type Integer = number;

export interface InternalServerException {
}
export interface InvalidConfigurationDetail {
}
export type InvalidConfigurationDetailList = Array<unknown>;
export type Iso8601DateTime = Date | string;

export type KmsKeyIdentifier = string;

export type KmsKeyIdentifierOrEmpty = string;

export interface ListApplicationsRequest {
}
export interface ListConfigurationProfilesRequest {
}
export interface ListDeploymentsRequest {
}
export interface ListDeploymentStrategiesRequest {
}
export interface ListEnvironmentsRequest {
}
export interface ListExtensionAssociationsRequest {
}
export interface ListExtensionsRequest {
}
export interface ListHostedConfigurationVersionsRequest {
}
export interface ListTagsForResourceRequest {
}
export type LongName = string;

export type MaxResults = number;

export type MinutesBetween0And24Hours = number;

export interface Monitor {
}
export type MonitorList = Array<unknown>;
export type Name = string;

export type NextToken = string;

export interface Parameter {
}
export type ParameterMap = Record<string, unknown>;
export type ParameterValueMap = Record<string, unknown>;
export interface PayloadTooLargeException {
}
export type Percentage = number;

export type QueryName = string;

export type ReplicateTo = never;
export interface ResourceNotFoundException {
}
export interface ResourceTags {
}
export type RoleArn = string;

export interface ServiceQuotaExceededException {
}
export interface StartDeploymentRequest {
}
export interface StopDeploymentRequest {
}
export type StringWithLengthBetween0And32768 = string;

export type StringWithLengthBetween1And2048 = string;

export type StringWithLengthBetween1And255 = string;

export type StringWithLengthBetween1And64 = string;

export type TagKey = string;

export type TagKeyList = Array<unknown>;
export type TagMap = Record<string, unknown>;
export interface TagResourceRequest {
}
export type TagValue = string;

export type TriggeredBy = never;
export interface UntagResourceRequest {
}
export interface UpdateAccountSettingsRequest {
}
export interface UpdateApplicationRequest {
}
export interface UpdateConfigurationProfileRequest {
}
export interface UpdateDeploymentStrategyRequest {
}
export interface UpdateEnvironmentRequest {
}
export interface UpdateExtensionAssociationRequest {
}
export interface UpdateExtensionRequest {
}
export type Uri = string;

export interface ValidateConfigurationRequest {
}
export interface Validator {
}
export type ValidatorList = Array<unknown>;
export type ValidatorType = never;
export type ValidatorTypeList = Array<unknown>;
export type Version = string;

export type VersionLabel = string;

export declare namespace CreateApplication {
  export type Input = CreateApplicationRequest;
  export type Output = {};
  export type Error =
    | BadRequestException
    | InternalServerException
    | ServiceQuotaExceededException
    | CommonAwsError;
}

export declare namespace CreateConfigurationProfile {
  export type Input = CreateConfigurationProfileRequest;
  export type Output = {};
  export type Error =
    | BadRequestException
    | InternalServerException
    | ResourceNotFoundException
    | ServiceQuotaExceededException
    | CommonAwsError;
}

export declare namespace CreateDeploymentStrategy {
  export type Input = CreateDeploymentStrategyRequest;
  export type Output = {};
  export type Error =
    | BadRequestException
    | InternalServerException
    | ServiceQuotaExceededException
    | CommonAwsError;
}

export declare namespace CreateEnvironment {
  export type Input = CreateEnvironmentRequest;
  export type Output = {};
  export type Error =
    | BadRequestException
    | InternalServerException
    | ResourceNotFoundException
    | ServiceQuotaExceededException
    | CommonAwsError;
}

export declare namespace CreateExtension {
  export type Input = CreateExtensionRequest;
  export type Output = {};
  export type Error =
    | BadRequestException
    | ConflictException
    | InternalServerException
    | ServiceQuotaExceededException
    | CommonAwsError;
}

export declare namespace CreateExtensionAssociation {
  export type Input = CreateExtensionAssociationRequest;
  export type Output = {};
  export type Error =
    | BadRequestException
    | InternalServerException
    | ResourceNotFoundException
    | ServiceQuotaExceededException
    | CommonAwsError;
}

export declare namespace CreateHostedConfigurationVersion {
  export type Input = CreateHostedConfigurationVersionRequest;
  export type Output = {};
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
  export type Output = {};
  export type Error =
    | BadRequestException
    | InternalServerException
    | CommonAwsError;
}

export declare namespace GetApplication {
  export type Input = GetApplicationRequest;
  export type Output = {};
  export type Error =
    | BadRequestException
    | InternalServerException
    | ResourceNotFoundException
    | CommonAwsError;
}

export declare namespace GetConfiguration {
  export type Input = GetConfigurationRequest;
  export type Output = {};
  export type Error =
    | BadRequestException
    | InternalServerException
    | ResourceNotFoundException
    | CommonAwsError;
}

export declare namespace GetConfigurationProfile {
  export type Input = GetConfigurationProfileRequest;
  export type Output = {};
  export type Error =
    | BadRequestException
    | InternalServerException
    | ResourceNotFoundException
    | CommonAwsError;
}

export declare namespace GetDeployment {
  export type Input = GetDeploymentRequest;
  export type Output = {};
  export type Error =
    | BadRequestException
    | InternalServerException
    | ResourceNotFoundException
    | CommonAwsError;
}

export declare namespace GetDeploymentStrategy {
  export type Input = GetDeploymentStrategyRequest;
  export type Output = {};
  export type Error =
    | BadRequestException
    | InternalServerException
    | ResourceNotFoundException
    | CommonAwsError;
}

export declare namespace GetEnvironment {
  export type Input = GetEnvironmentRequest;
  export type Output = {};
  export type Error =
    | BadRequestException
    | InternalServerException
    | ResourceNotFoundException
    | CommonAwsError;
}

export declare namespace GetExtension {
  export type Input = GetExtensionRequest;
  export type Output = {};
  export type Error =
    | BadRequestException
    | InternalServerException
    | ResourceNotFoundException
    | CommonAwsError;
}

export declare namespace GetExtensionAssociation {
  export type Input = GetExtensionAssociationRequest;
  export type Output = {};
  export type Error =
    | BadRequestException
    | InternalServerException
    | ResourceNotFoundException
    | CommonAwsError;
}

export declare namespace GetHostedConfigurationVersion {
  export type Input = GetHostedConfigurationVersionRequest;
  export type Output = {};
  export type Error =
    | BadRequestException
    | InternalServerException
    | ResourceNotFoundException
    | CommonAwsError;
}

export declare namespace ListApplications {
  export type Input = ListApplicationsRequest;
  export type Output = {};
  export type Error =
    | BadRequestException
    | InternalServerException
    | CommonAwsError;
}

export declare namespace ListConfigurationProfiles {
  export type Input = ListConfigurationProfilesRequest;
  export type Output = {};
  export type Error =
    | BadRequestException
    | InternalServerException
    | ResourceNotFoundException
    | CommonAwsError;
}

export declare namespace ListDeploymentStrategies {
  export type Input = ListDeploymentStrategiesRequest;
  export type Output = {};
  export type Error =
    | BadRequestException
    | InternalServerException
    | CommonAwsError;
}

export declare namespace ListDeployments {
  export type Input = ListDeploymentsRequest;
  export type Output = {};
  export type Error =
    | BadRequestException
    | InternalServerException
    | ResourceNotFoundException
    | CommonAwsError;
}

export declare namespace ListEnvironments {
  export type Input = ListEnvironmentsRequest;
  export type Output = {};
  export type Error =
    | BadRequestException
    | InternalServerException
    | ResourceNotFoundException
    | CommonAwsError;
}

export declare namespace ListExtensionAssociations {
  export type Input = ListExtensionAssociationsRequest;
  export type Output = {};
  export type Error =
    | BadRequestException
    | InternalServerException
    | CommonAwsError;
}

export declare namespace ListExtensions {
  export type Input = ListExtensionsRequest;
  export type Output = {};
  export type Error =
    | BadRequestException
    | InternalServerException
    | CommonAwsError;
}

export declare namespace ListHostedConfigurationVersions {
  export type Input = ListHostedConfigurationVersionsRequest;
  export type Output = {};
  export type Error =
    | BadRequestException
    | InternalServerException
    | ResourceNotFoundException
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

export declare namespace StartDeployment {
  export type Input = StartDeploymentRequest;
  export type Output = {};
  export type Error =
    | BadRequestException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | CommonAwsError;
}

export declare namespace StopDeployment {
  export type Input = StopDeploymentRequest;
  export type Output = {};
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
  export type Output = {};
  export type Error =
    | BadRequestException
    | InternalServerException
    | CommonAwsError;
}

export declare namespace UpdateApplication {
  export type Input = UpdateApplicationRequest;
  export type Output = {};
  export type Error =
    | BadRequestException
    | InternalServerException
    | ResourceNotFoundException
    | CommonAwsError;
}

export declare namespace UpdateConfigurationProfile {
  export type Input = UpdateConfigurationProfileRequest;
  export type Output = {};
  export type Error =
    | BadRequestException
    | InternalServerException
    | ResourceNotFoundException
    | CommonAwsError;
}

export declare namespace UpdateDeploymentStrategy {
  export type Input = UpdateDeploymentStrategyRequest;
  export type Output = {};
  export type Error =
    | BadRequestException
    | InternalServerException
    | ResourceNotFoundException
    | CommonAwsError;
}

export declare namespace UpdateEnvironment {
  export type Input = UpdateEnvironmentRequest;
  export type Output = {};
  export type Error =
    | BadRequestException
    | InternalServerException
    | ResourceNotFoundException
    | CommonAwsError;
}

export declare namespace UpdateExtension {
  export type Input = UpdateExtensionRequest;
  export type Output = {};
  export type Error =
    | BadRequestException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | CommonAwsError;
}

export declare namespace UpdateExtensionAssociation {
  export type Input = UpdateExtensionAssociationRequest;
  export type Output = {};
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

