import type { Effect, Data as EffectData } from "effect";
import type { CommonAwsError } from "../error.ts";
import { AWSServiceClient } from "../client.ts";

export declare class GreengrassV2 extends AWSServiceClient {
  associateServiceRoleToAccount(
    input: AssociateServiceRoleToAccountRequest,
  ): Effect.Effect<
    AssociateServiceRoleToAccountResponse,
    InternalServerException | ValidationException | CommonAwsError
  >;
  batchAssociateClientDeviceWithCoreDevice(
    input: BatchAssociateClientDeviceWithCoreDeviceRequest,
  ): Effect.Effect<
    BatchAssociateClientDeviceWithCoreDeviceResponse,
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  batchDisassociateClientDeviceFromCoreDevice(
    input: BatchDisassociateClientDeviceFromCoreDeviceRequest,
  ): Effect.Effect<
    BatchDisassociateClientDeviceFromCoreDeviceResponse,
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  cancelDeployment(
    input: CancelDeploymentRequest,
  ): Effect.Effect<
    CancelDeploymentResponse,
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  createComponentVersion(
    input: CreateComponentVersionRequest,
  ): Effect.Effect<
    CreateComponentVersionResponse,
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | RequestAlreadyInProgressException
    | ServiceQuotaExceededException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  createDeployment(
    input: CreateDeploymentRequest,
  ): Effect.Effect<
    CreateDeploymentResponse,
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | RequestAlreadyInProgressException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  deleteComponent(
    input: DeleteComponentRequest,
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
  deleteCoreDevice(
    input: DeleteCoreDeviceRequest,
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
  deleteDeployment(
    input: DeleteDeploymentRequest,
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
  describeComponent(
    input: DescribeComponentRequest,
  ): Effect.Effect<
    DescribeComponentResponse,
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  disassociateServiceRoleFromAccount(
    input: DisassociateServiceRoleFromAccountRequest,
  ): Effect.Effect<
    DisassociateServiceRoleFromAccountResponse,
    InternalServerException | CommonAwsError
  >;
  getComponent(
    input: GetComponentRequest,
  ): Effect.Effect<
    GetComponentResponse,
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  getComponentVersionArtifact(
    input: GetComponentVersionArtifactRequest,
  ): Effect.Effect<
    GetComponentVersionArtifactResponse,
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  getConnectivityInfo(
    input: GetConnectivityInfoRequest,
  ): Effect.Effect<
    GetConnectivityInfoResponse,
    InternalServerException | ValidationException | CommonAwsError
  >;
  getCoreDevice(
    input: GetCoreDeviceRequest,
  ): Effect.Effect<
    GetCoreDeviceResponse,
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  getDeployment(
    input: GetDeploymentRequest,
  ): Effect.Effect<
    GetDeploymentResponse,
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  getServiceRoleForAccount(
    input: GetServiceRoleForAccountRequest,
  ): Effect.Effect<
    GetServiceRoleForAccountResponse,
    InternalServerException | CommonAwsError
  >;
  listClientDevicesAssociatedWithCoreDevice(
    input: ListClientDevicesAssociatedWithCoreDeviceRequest,
  ): Effect.Effect<
    ListClientDevicesAssociatedWithCoreDeviceResponse,
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  listComponents(
    input: ListComponentsRequest,
  ): Effect.Effect<
    ListComponentsResponse,
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  listComponentVersions(
    input: ListComponentVersionsRequest,
  ): Effect.Effect<
    ListComponentVersionsResponse,
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  listCoreDevices(
    input: ListCoreDevicesRequest,
  ): Effect.Effect<
    ListCoreDevicesResponse,
    | AccessDeniedException
    | InternalServerException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  listDeployments(
    input: ListDeploymentsRequest,
  ): Effect.Effect<
    ListDeploymentsResponse,
    | AccessDeniedException
    | InternalServerException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  listEffectiveDeployments(
    input: ListEffectiveDeploymentsRequest,
  ): Effect.Effect<
    ListEffectiveDeploymentsResponse,
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  listInstalledComponents(
    input: ListInstalledComponentsRequest,
  ): Effect.Effect<
    ListInstalledComponentsResponse,
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
    | InternalServerException
    | ResourceNotFoundException
    | ValidationException
    | CommonAwsError
  >;
  resolveComponentCandidates(
    input: ResolveComponentCandidatesRequest,
  ): Effect.Effect<
    ResolveComponentCandidatesResponse,
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  tagResource(
    input: TagResourceRequest,
  ): Effect.Effect<
    TagResourceResponse,
    | InternalServerException
    | ResourceNotFoundException
    | ValidationException
    | CommonAwsError
  >;
  untagResource(
    input: UntagResourceRequest,
  ): Effect.Effect<
    UntagResourceResponse,
    | InternalServerException
    | ResourceNotFoundException
    | ValidationException
    | CommonAwsError
  >;
  updateConnectivityInfo(
    input: UpdateConnectivityInfoRequest,
  ): Effect.Effect<
    UpdateConnectivityInfoResponse,
    InternalServerException | ValidationException | CommonAwsError
  >;
}

export declare class Greengrassv2 extends GreengrassV2 {}

export declare class AccessDeniedException extends EffectData.TaggedError(
  "AccessDeniedException",
)<{
  readonly message: string;
}> {}
export interface AssociateClientDeviceWithCoreDeviceEntry {
  thingName: string;
}
export type AssociateClientDeviceWithCoreDeviceEntryList =
  Array<AssociateClientDeviceWithCoreDeviceEntry>;
export interface AssociateClientDeviceWithCoreDeviceErrorEntry {
  thingName?: string;
  code?: string;
  message?: string;
}
export type AssociateClientDeviceWithCoreDeviceErrorList =
  Array<AssociateClientDeviceWithCoreDeviceErrorEntry>;
export interface AssociatedClientDevice {
  thingName?: string;
  associationTimestamp?: Date | string;
}
export type AssociatedClientDeviceList = Array<AssociatedClientDevice>;
export interface AssociateServiceRoleToAccountRequest {
  roleArn: string;
}
export interface AssociateServiceRoleToAccountResponse {
  associatedAt?: string;
}
export interface BatchAssociateClientDeviceWithCoreDeviceRequest {
  entries?: Array<AssociateClientDeviceWithCoreDeviceEntry>;
  coreDeviceThingName: string;
}
export interface BatchAssociateClientDeviceWithCoreDeviceResponse {
  errorEntries?: Array<AssociateClientDeviceWithCoreDeviceErrorEntry>;
}
export interface BatchDisassociateClientDeviceFromCoreDeviceRequest {
  entries?: Array<DisassociateClientDeviceFromCoreDeviceEntry>;
  coreDeviceThingName: string;
}
export interface BatchDisassociateClientDeviceFromCoreDeviceResponse {
  errorEntries?: Array<DisassociateClientDeviceFromCoreDeviceErrorEntry>;
}
export interface CancelDeploymentRequest {
  deploymentId: string;
}
export interface CancelDeploymentResponse {
  message?: string;
}
export type ClientTokenString = string;

export type CloudComponentState =
  | "REQUESTED"
  | "INITIATED"
  | "DEPLOYABLE"
  | "FAILED"
  | "DEPRECATED";
export interface CloudComponentStatus {
  componentState?: CloudComponentState;
  message?: string;
  errors?: Record<string, string>;
  vendorGuidance?: VendorGuidance;
  vendorGuidanceMessage?: string;
}
export interface Component {
  arn?: string;
  componentName?: string;
  latestVersion?: ComponentLatestVersion;
}
export type ComponentARN = string;

export interface ComponentCandidate {
  componentName?: string;
  componentVersion?: string;
  versionRequirements?: Record<string, string>;
}
export type ComponentCandidateList = Array<ComponentCandidate>;
export type ComponentConfigurationPath = string;

export type ComponentConfigurationPathList = Array<string>;
export type ComponentConfigurationString = string;

export interface ComponentConfigurationUpdate {
  merge?: string;
  reset?: Array<string>;
}
export type ComponentDependencyMap = Record<
  string,
  ComponentDependencyRequirement
>;
export interface ComponentDependencyRequirement {
  versionRequirement?: string;
  dependencyType?: ComponentDependencyType;
}
export type ComponentDependencyType = "HARD" | "SOFT";
export interface ComponentDeploymentSpecification {
  componentVersion: string;
  configurationUpdate?: ComponentConfigurationUpdate;
  runWith?: ComponentRunWith;
}
export type ComponentDeploymentSpecifications = Record<
  string,
  ComponentDeploymentSpecification
>;
export interface ComponentLatestVersion {
  arn?: string;
  componentVersion?: string;
  creationTimestamp?: Date | string;
  description?: string;
  publisher?: string;
  platforms?: Array<ComponentPlatform>;
}
export type ComponentList = Array<Component>;
export type ComponentNameString = string;

export interface ComponentPlatform {
  name?: string;
  attributes?: Record<string, string>;
}
export type ComponentPlatformList = Array<ComponentPlatform>;
export interface ComponentRunWith {
  posixUser?: string;
  systemResourceLimits?: SystemResourceLimits;
  windowsUser?: string;
}
export type ComponentVersionARN = string;

export type ComponentVersionList = Array<ComponentVersionListItem>;
export interface ComponentVersionListItem {
  componentName?: string;
  componentVersion?: string;
  arn?: string;
}
export type ComponentVersionRequirementMap = Record<string, string>;
export type ComponentVersionString = string;

export type ComponentVisibilityScope = "PRIVATE" | "PUBLIC";
export declare class ConflictException extends EffectData.TaggedError(
  "ConflictException",
)<{
  readonly message: string;
  readonly resourceId: string;
  readonly resourceType: string;
}> {}
export interface ConnectivityInfo {
  id?: string;
  hostAddress?: string;
  portNumber?: number;
  metadata?: string;
}
export type connectivityInfoList = Array<ConnectivityInfo>;
export interface CoreDevice {
  coreDeviceThingName?: string;
  status?: CoreDeviceStatus;
  lastStatusUpdateTimestamp?: Date | string;
  platform?: string;
  architecture?: string;
  runtime?: string;
}
export type CoreDeviceArchitectureString = string;

export type CoreDevicePlatformString = string;

export type CoreDeviceRuntimeString = string;

export type CoreDevicesList = Array<CoreDevice>;
export type CoreDeviceStatus = "HEALTHY" | "UNHEALTHY";
export type CoreDeviceThingName = string;

export type CPU = number;

export interface CreateComponentVersionRequest {
  inlineRecipe?: Uint8Array | string;
  lambdaFunction?: LambdaFunctionRecipeSource;
  tags?: Record<string, string>;
  clientToken?: string;
}
export interface CreateComponentVersionResponse {
  arn?: string;
  componentName: string;
  componentVersion: string;
  creationTimestamp: Date | string;
  status: CloudComponentStatus;
}
export interface CreateDeploymentRequest {
  targetArn: string;
  deploymentName?: string;
  components?: Record<string, ComponentDeploymentSpecification>;
  iotJobConfiguration?: DeploymentIoTJobConfiguration;
  deploymentPolicies?: DeploymentPolicies;
  parentTargetArn?: string;
  tags?: Record<string, string>;
  clientToken?: string;
}
export interface CreateDeploymentResponse {
  deploymentId?: string;
  iotJobId?: string;
  iotJobArn?: string;
}
export type DefaultMaxResults = number;

export interface DeleteComponentRequest {
  arn: string;
}
export interface DeleteCoreDeviceRequest {
  coreDeviceThingName: string;
}
export interface DeleteDeploymentRequest {
  deploymentId: string;
}
export interface Deployment {
  targetArn?: string;
  revisionId?: string;
  deploymentId?: string;
  deploymentName?: string;
  creationTimestamp?: Date | string;
  deploymentStatus?: DeploymentStatus;
  isLatestForTarget?: boolean;
  parentTargetArn?: string;
}
export interface DeploymentComponentUpdatePolicy {
  timeoutInSeconds?: number;
  action?: DeploymentComponentUpdatePolicyAction;
}
export type DeploymentComponentUpdatePolicyAction =
  | "NOTIFY_COMPONENTS"
  | "SKIP_NOTIFY_COMPONENTS";
export interface DeploymentConfigurationValidationPolicy {
  timeoutInSeconds?: number;
}
export type DeploymentFailureHandlingPolicy = "ROLLBACK" | "DO_NOTHING";
export type DeploymentHistoryFilter = "ALL" | "LATEST_ONLY";
export type DeploymentID = string;

export interface DeploymentIoTJobConfiguration {
  jobExecutionsRolloutConfig?: IoTJobExecutionsRolloutConfig;
  abortConfig?: IoTJobAbortConfig;
  timeoutConfig?: IoTJobTimeoutConfig;
}
export type DeploymentList = Array<Deployment>;
export type DeploymentName = string;

export type DeploymentNameString = string;

export interface DeploymentPolicies {
  failureHandlingPolicy?: DeploymentFailureHandlingPolicy;
  componentUpdatePolicy?: DeploymentComponentUpdatePolicy;
  configurationValidationPolicy?: DeploymentConfigurationValidationPolicy;
}
export type DeploymentStatus =
  | "ACTIVE"
  | "COMPLETED"
  | "CANCELED"
  | "FAILED"
  | "INACTIVE";
export interface DescribeComponentRequest {
  arn: string;
}
export interface DescribeComponentResponse {
  arn?: string;
  componentName?: string;
  componentVersion?: string;
  creationTimestamp?: Date | string;
  publisher?: string;
  description?: string;
  status?: CloudComponentStatus;
  platforms?: Array<ComponentPlatform>;
  tags?: Record<string, string>;
}
export type Description = string;

export type DescriptionString = string;

export interface DisassociateClientDeviceFromCoreDeviceEntry {
  thingName: string;
}
export type DisassociateClientDeviceFromCoreDeviceEntryList =
  Array<DisassociateClientDeviceFromCoreDeviceEntry>;
export interface DisassociateClientDeviceFromCoreDeviceErrorEntry {
  thingName?: string;
  code?: string;
  message?: string;
}
export type DisassociateClientDeviceFromCoreDeviceErrorList =
  Array<DisassociateClientDeviceFromCoreDeviceErrorEntry>;
export interface DisassociateServiceRoleFromAccountRequest {}
export interface DisassociateServiceRoleFromAccountResponse {
  disassociatedAt?: string;
}
export interface EffectiveDeployment {
  deploymentId: string;
  deploymentName: string;
  iotJobId?: string;
  iotJobArn?: string;
  description?: string;
  targetArn: string;
  coreDeviceExecutionStatus: EffectiveDeploymentExecutionStatus;
  reason?: string;
  creationTimestamp: Date | string;
  modifiedTimestamp: Date | string;
  statusDetails?: EffectiveDeploymentStatusDetails;
}
export type EffectiveDeploymentErrorCode = string;

export type EffectiveDeploymentErrorStack = Array<string>;
export type EffectiveDeploymentErrorType = string;

export type EffectiveDeploymentErrorTypeList = Array<string>;
export type EffectiveDeploymentExecutionStatus =
  | "IN_PROGRESS"
  | "QUEUED"
  | "FAILED"
  | "COMPLETED"
  | "TIMED_OUT"
  | "CANCELED"
  | "REJECTED"
  | "SUCCEEDED";
export type EffectiveDeploymentsList = Array<EffectiveDeployment>;
export interface EffectiveDeploymentStatusDetails {
  errorStack?: Array<string>;
  errorTypes?: Array<string>;
}
export type FileSystemPath = string;

export type GenericV2ARN = string;

export interface GetComponentRequest {
  recipeOutputFormat?: RecipeOutputFormat;
  arn: string;
}
export interface GetComponentResponse {
  recipeOutputFormat: RecipeOutputFormat;
  recipe: Uint8Array | string;
  tags?: Record<string, string>;
}
export interface GetComponentVersionArtifactRequest {
  arn: string;
  artifactName: string;
  s3EndpointType?: S3EndpointType;
  iotEndpointType?: IotEndpointType;
}
export interface GetComponentVersionArtifactResponse {
  preSignedUrl: string;
}
export interface GetConnectivityInfoRequest {
  thingName: string;
}
export interface GetConnectivityInfoResponse {
  connectivityInfo?: Array<ConnectivityInfo>;
  message?: string;
}
export interface GetCoreDeviceRequest {
  coreDeviceThingName: string;
}
export interface GetCoreDeviceResponse {
  coreDeviceThingName?: string;
  coreVersion?: string;
  platform?: string;
  architecture?: string;
  runtime?: string;
  status?: CoreDeviceStatus;
  lastStatusUpdateTimestamp?: Date | string;
  tags?: Record<string, string>;
}
export interface GetDeploymentRequest {
  deploymentId: string;
}
export interface GetDeploymentResponse {
  targetArn?: string;
  revisionId?: string;
  deploymentId?: string;
  deploymentName?: string;
  deploymentStatus?: DeploymentStatus;
  iotJobId?: string;
  iotJobArn?: string;
  components?: Record<string, ComponentDeploymentSpecification>;
  deploymentPolicies?: DeploymentPolicies;
  iotJobConfiguration?: DeploymentIoTJobConfiguration;
  creationTimestamp?: Date | string;
  isLatestForTarget?: boolean;
  parentTargetArn?: string;
  tags?: Record<string, string>;
}
export interface GetServiceRoleForAccountRequest {}
export interface GetServiceRoleForAccountResponse {
  associatedAt?: string;
  roleArn?: string;
}
export type GGCVersion = string;

export interface InstalledComponent {
  componentName?: string;
  componentVersion?: string;
  lifecycleState?: InstalledComponentLifecycleState;
  lifecycleStateDetails?: string;
  isRoot?: boolean;
  lastStatusChangeTimestamp?: Date | string;
  lastReportedTimestamp?: Date | string;
  lastInstallationSource?: string;
  lifecycleStatusCodes?: Array<string>;
}
export type InstalledComponentLifecycleState =
  | "NEW"
  | "INSTALLED"
  | "STARTING"
  | "RUNNING"
  | "STOPPING"
  | "ERRORED"
  | "BROKEN"
  | "FINISHED";
export type InstalledComponentLifecycleStatusCode = string;

export type InstalledComponentLifecycleStatusCodeList = Array<string>;
export type InstalledComponentList = Array<InstalledComponent>;
export type InstalledComponentTopologyFilter = "ALL" | "ROOT";
export declare class InternalServerException extends EffectData.TaggedError(
  "InternalServerException",
)<{
  readonly message: string;
  readonly retryAfterSeconds?: number;
}> {}
export type IotEndpointType = "fips" | "standard";
export type IoTJobAbortAction = "CANCEL";
export interface IoTJobAbortConfig {
  criteriaList: Array<IoTJobAbortCriteria>;
}
export interface IoTJobAbortCriteria {
  failureType: IoTJobExecutionFailureType;
  action: IoTJobAbortAction;
  thresholdPercentage: number;
  minNumberOfExecutedThings: number;
}
export type IoTJobAbortCriteriaList = Array<IoTJobAbortCriteria>;
export type IoTJobAbortThresholdPercentage = number;

export type IoTJobARN = string;

export type IoTJobExecutionFailureType =
  | "FAILED"
  | "REJECTED"
  | "TIMED_OUT"
  | "ALL";
export interface IoTJobExecutionsRolloutConfig {
  exponentialRate?: IoTJobExponentialRolloutRate;
  maximumPerMinute?: number;
}
export interface IoTJobExponentialRolloutRate {
  baseRatePerMinute: number;
  incrementFactor: number;
  rateIncreaseCriteria: IoTJobRateIncreaseCriteria;
}
export type IoTJobId = string;

export type IoTJobInProgressTimeoutInMinutes = number;

export type IoTJobMaxExecutionsPerMin = number;

export type IoTJobMinimumNumberOfExecutedThings = number;

export type IoTJobNumberOfThings = number;

export interface IoTJobRateIncreaseCriteria {
  numberOfNotifiedThings?: number;
  numberOfSucceededThings?: number;
}
export type IoTJobRolloutBaseRatePerMinute = number;

export type IoTJobRolloutIncrementFactor = number;

export interface IoTJobTimeoutConfig {
  inProgressTimeoutInMinutes?: number;
}
export type IoTThingName = string;

export type IsLatestForTarget = boolean;

export type IsRoot = boolean;

export interface LambdaContainerParams {
  memorySizeInKB?: number;
  mountROSysfs?: boolean;
  volumes?: Array<LambdaVolumeMount>;
  devices?: Array<LambdaDeviceMount>;
}
export type LambdaDeviceList = Array<LambdaDeviceMount>;
export interface LambdaDeviceMount {
  path: string;
  permission?: LambdaFilesystemPermission;
  addGroupOwner?: boolean;
}
export type LambdaEnvironmentVariables = Record<string, string>;
export interface LambdaEventSource {
  topic: string;
  type: LambdaEventSourceType;
}
export type LambdaEventSourceList = Array<LambdaEventSource>;
export type LambdaEventSourceType = "PUB_SUB" | "IOT_CORE";
export type LambdaExecArg = string;

export type LambdaExecArgsList = Array<string>;
export interface LambdaExecutionParameters {
  eventSources?: Array<LambdaEventSource>;
  maxQueueSize?: number;
  maxInstancesCount?: number;
  maxIdleTimeInSeconds?: number;
  timeoutInSeconds?: number;
  statusTimeoutInSeconds?: number;
  pinned?: boolean;
  inputPayloadEncodingType?: LambdaInputPayloadEncodingType;
  execArgs?: Array<string>;
  environmentVariables?: Record<string, string>;
  linuxProcessParams?: LambdaLinuxProcessParams;
}
export type LambdaFilesystemPermission = "RO" | "RW";
export interface LambdaFunctionRecipeSource {
  lambdaArn: string;
  componentName?: string;
  componentVersion?: string;
  componentPlatforms?: Array<ComponentPlatform>;
  componentDependencies?: Record<string, ComponentDependencyRequirement>;
  componentLambdaParameters?: LambdaExecutionParameters;
}
export type LambdaInputPayloadEncodingType = "JSON" | "BINARY";
export type LambdaIsolationMode = "GREENGRASS_CONTAINER" | "NO_CONTAINER";
export interface LambdaLinuxProcessParams {
  isolationMode?: LambdaIsolationMode;
  containerParams?: LambdaContainerParams;
}
export type LambdaVolumeList = Array<LambdaVolumeMount>;
export interface LambdaVolumeMount {
  sourcePath: string;
  destinationPath: string;
  permission?: LambdaFilesystemPermission;
  addGroupOwner?: boolean;
}
export type LifecycleStateDetails = string;

export interface ListClientDevicesAssociatedWithCoreDeviceRequest {
  coreDeviceThingName: string;
  maxResults?: number;
  nextToken?: string;
}
export interface ListClientDevicesAssociatedWithCoreDeviceResponse {
  associatedClientDevices?: Array<AssociatedClientDevice>;
  nextToken?: string;
}
export interface ListComponentsRequest {
  scope?: ComponentVisibilityScope;
  maxResults?: number;
  nextToken?: string;
}
export interface ListComponentsResponse {
  components?: Array<Component>;
  nextToken?: string;
}
export interface ListComponentVersionsRequest {
  arn: string;
  maxResults?: number;
  nextToken?: string;
}
export interface ListComponentVersionsResponse {
  componentVersions?: Array<ComponentVersionListItem>;
  nextToken?: string;
}
export interface ListCoreDevicesRequest {
  thingGroupArn?: string;
  status?: CoreDeviceStatus;
  maxResults?: number;
  nextToken?: string;
  runtime?: string;
}
export interface ListCoreDevicesResponse {
  coreDevices?: Array<CoreDevice>;
  nextToken?: string;
}
export interface ListDeploymentsRequest {
  targetArn?: string;
  historyFilter?: DeploymentHistoryFilter;
  parentTargetArn?: string;
  maxResults?: number;
  nextToken?: string;
}
export interface ListDeploymentsResponse {
  deployments?: Array<Deployment>;
  nextToken?: string;
}
export interface ListEffectiveDeploymentsRequest {
  coreDeviceThingName: string;
  maxResults?: number;
  nextToken?: string;
}
export interface ListEffectiveDeploymentsResponse {
  effectiveDeployments?: Array<EffectiveDeployment>;
  nextToken?: string;
}
export interface ListInstalledComponentsRequest {
  coreDeviceThingName: string;
  maxResults?: number;
  nextToken?: string;
  topologyFilter?: InstalledComponentTopologyFilter;
}
export interface ListInstalledComponentsResponse {
  installedComponents?: Array<InstalledComponent>;
  nextToken?: string;
}
export interface ListTagsForResourceRequest {
  resourceArn: string;
}
export interface ListTagsForResourceResponse {
  tags?: Record<string, string>;
}
export type Memory = number;

export type NextTokenString = string;

export type NonEmptyString = string;

export type NullableString = string;

export type OptionalBoolean = boolean;

export type OptionalInteger = number;

export type PlatformAttributesMap = Record<string, string>;
export type PortNumberInt = number;

export type PublisherString = string;

export type Reason = string;

export type RecipeBlob = Uint8Array | string;

export type RecipeOutputFormat = "JSON" | "YAML";
export declare class RequestAlreadyInProgressException extends EffectData.TaggedError(
  "RequestAlreadyInProgressException",
)<{
  readonly message: string;
}> {}
export interface ResolveComponentCandidatesRequest {
  platform?: ComponentPlatform;
  componentCandidates?: Array<ComponentCandidate>;
}
export interface ResolveComponentCandidatesResponse {
  resolvedComponentVersions?: Array<ResolvedComponentVersion>;
}
export interface ResolvedComponentVersion {
  arn?: string;
  componentName?: string;
  componentVersion?: string;
  recipe?: Uint8Array | string;
  vendorGuidance?: VendorGuidance;
  message?: string;
}
export type ResolvedComponentVersionsList = Array<ResolvedComponentVersion>;
export declare class ResourceNotFoundException extends EffectData.TaggedError(
  "ResourceNotFoundException",
)<{
  readonly message: string;
  readonly resourceId: string;
  readonly resourceType: string;
}> {}
export type RetryAfterSeconds = number;

export type S3EndpointType = "REGIONAL" | "GLOBAL";
export declare class ServiceQuotaExceededException extends EffectData.TaggedError(
  "ServiceQuotaExceededException",
)<{
  readonly message: string;
  readonly resourceId?: string;
  readonly resourceType?: string;
  readonly quotaCode: string;
  readonly serviceCode: string;
}> {}
export type Greengrassv2String = string;

export type StringMap = Record<string, string>;
export interface SystemResourceLimits {
  memory?: number;
  cpus?: number;
}
export type TagKey = string;

export type TagKeyList = Array<string>;
export type TagMap = Record<string, string>;
export interface TagResourceRequest {
  resourceArn: string;
  tags: Record<string, string>;
}
export interface TagResourceResponse {}
export type TagValue = string;

export type TargetARN = string;

export type ThingGroupARN = string;

export declare class ThrottlingException extends EffectData.TaggedError(
  "ThrottlingException",
)<{
  readonly message: string;
  readonly quotaCode?: string;
  readonly serviceCode?: string;
  readonly retryAfterSeconds?: number;
}> {}
export type Timestamp = Date | string;

export type TopicString = string;

export interface UntagResourceRequest {
  resourceArn: string;
  tagKeys: Array<string>;
}
export interface UntagResourceResponse {}
export interface UpdateConnectivityInfoRequest {
  thingName: string;
  connectivityInfo: Array<ConnectivityInfo>;
}
export interface UpdateConnectivityInfoResponse {
  version?: string;
  message?: string;
}
export declare class ValidationException extends EffectData.TaggedError(
  "ValidationException",
)<{
  readonly message: string;
  readonly reason?: ValidationExceptionReason;
  readonly fields?: Array<ValidationExceptionField>;
}> {}
export interface ValidationExceptionField {
  name: string;
  message: string;
}
export type ValidationExceptionFieldList = Array<ValidationExceptionField>;
export type ValidationExceptionReason =
  | "UNKNOWN_OPERATION"
  | "CANNOT_PARSE"
  | "FIELD_VALIDATION_FAILED"
  | "OTHER";
export type VendorGuidance = "ACTIVE" | "DISCONTINUED" | "DELETED";
export declare namespace AssociateServiceRoleToAccount {
  export type Input = AssociateServiceRoleToAccountRequest;
  export type Output = AssociateServiceRoleToAccountResponse;
  export type Error =
    | InternalServerException
    | ValidationException
    | CommonAwsError;
}

export declare namespace BatchAssociateClientDeviceWithCoreDevice {
  export type Input = BatchAssociateClientDeviceWithCoreDeviceRequest;
  export type Output = BatchAssociateClientDeviceWithCoreDeviceResponse;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace BatchDisassociateClientDeviceFromCoreDevice {
  export type Input = BatchDisassociateClientDeviceFromCoreDeviceRequest;
  export type Output = BatchDisassociateClientDeviceFromCoreDeviceResponse;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace CancelDeployment {
  export type Input = CancelDeploymentRequest;
  export type Output = CancelDeploymentResponse;
  export type Error =
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace CreateComponentVersion {
  export type Input = CreateComponentVersionRequest;
  export type Output = CreateComponentVersionResponse;
  export type Error =
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | RequestAlreadyInProgressException
    | ServiceQuotaExceededException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace CreateDeployment {
  export type Input = CreateDeploymentRequest;
  export type Output = CreateDeploymentResponse;
  export type Error =
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | RequestAlreadyInProgressException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace DeleteComponent {
  export type Input = DeleteComponentRequest;
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

export declare namespace DeleteCoreDevice {
  export type Input = DeleteCoreDeviceRequest;
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

export declare namespace DeleteDeployment {
  export type Input = DeleteDeploymentRequest;
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

export declare namespace DescribeComponent {
  export type Input = DescribeComponentRequest;
  export type Output = DescribeComponentResponse;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace DisassociateServiceRoleFromAccount {
  export type Input = DisassociateServiceRoleFromAccountRequest;
  export type Output = DisassociateServiceRoleFromAccountResponse;
  export type Error = InternalServerException | CommonAwsError;
}

export declare namespace GetComponent {
  export type Input = GetComponentRequest;
  export type Output = GetComponentResponse;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace GetComponentVersionArtifact {
  export type Input = GetComponentVersionArtifactRequest;
  export type Output = GetComponentVersionArtifactResponse;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace GetConnectivityInfo {
  export type Input = GetConnectivityInfoRequest;
  export type Output = GetConnectivityInfoResponse;
  export type Error =
    | InternalServerException
    | ValidationException
    | CommonAwsError;
}

export declare namespace GetCoreDevice {
  export type Input = GetCoreDeviceRequest;
  export type Output = GetCoreDeviceResponse;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace GetDeployment {
  export type Input = GetDeploymentRequest;
  export type Output = GetDeploymentResponse;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace GetServiceRoleForAccount {
  export type Input = GetServiceRoleForAccountRequest;
  export type Output = GetServiceRoleForAccountResponse;
  export type Error = InternalServerException | CommonAwsError;
}

export declare namespace ListClientDevicesAssociatedWithCoreDevice {
  export type Input = ListClientDevicesAssociatedWithCoreDeviceRequest;
  export type Output = ListClientDevicesAssociatedWithCoreDeviceResponse;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace ListComponents {
  export type Input = ListComponentsRequest;
  export type Output = ListComponentsResponse;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace ListComponentVersions {
  export type Input = ListComponentVersionsRequest;
  export type Output = ListComponentVersionsResponse;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace ListCoreDevices {
  export type Input = ListCoreDevicesRequest;
  export type Output = ListCoreDevicesResponse;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace ListDeployments {
  export type Input = ListDeploymentsRequest;
  export type Output = ListDeploymentsResponse;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace ListEffectiveDeployments {
  export type Input = ListEffectiveDeploymentsRequest;
  export type Output = ListEffectiveDeploymentsResponse;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace ListInstalledComponents {
  export type Input = ListInstalledComponentsRequest;
  export type Output = ListInstalledComponentsResponse;
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
    | InternalServerException
    | ResourceNotFoundException
    | ValidationException
    | CommonAwsError;
}

export declare namespace ResolveComponentCandidates {
  export type Input = ResolveComponentCandidatesRequest;
  export type Output = ResolveComponentCandidatesResponse;
  export type Error =
    | AccessDeniedException
    | ConflictException
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
    | InternalServerException
    | ResourceNotFoundException
    | ValidationException
    | CommonAwsError;
}

export declare namespace UntagResource {
  export type Input = UntagResourceRequest;
  export type Output = UntagResourceResponse;
  export type Error =
    | InternalServerException
    | ResourceNotFoundException
    | ValidationException
    | CommonAwsError;
}

export declare namespace UpdateConnectivityInfo {
  export type Input = UpdateConnectivityInfoRequest;
  export type Output = UpdateConnectivityInfoResponse;
  export type Error =
    | InternalServerException
    | ValidationException
    | CommonAwsError;
}
