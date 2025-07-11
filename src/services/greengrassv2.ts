import type { Effect, Data } from "effect";
import type { CommonAwsError } from "../client.ts";

export interface GreengrassV2 {
  associateServiceRoleToAccount(
    input: AssociateServiceRoleToAccountRequest,
  ): Effect.Effect<
    {},
    InternalServerException | ValidationException | CommonAwsError
  >;
  batchAssociateClientDeviceWithCoreDevice(
    input: BatchAssociateClientDeviceWithCoreDeviceRequest,
  ): Effect.Effect<
    {},
    AccessDeniedException | InternalServerException | ResourceNotFoundException | ThrottlingException | ValidationException | CommonAwsError
  >;
  batchDisassociateClientDeviceFromCoreDevice(
    input: BatchDisassociateClientDeviceFromCoreDeviceRequest,
  ): Effect.Effect<
    {},
    AccessDeniedException | InternalServerException | ResourceNotFoundException | ThrottlingException | ValidationException | CommonAwsError
  >;
  cancelDeployment(
    input: CancelDeploymentRequest,
  ): Effect.Effect<
    {},
    AccessDeniedException | ConflictException | InternalServerException | ResourceNotFoundException | ThrottlingException | ValidationException | CommonAwsError
  >;
  createComponentVersion(
    input: CreateComponentVersionRequest,
  ): Effect.Effect<
    {},
    AccessDeniedException | ConflictException | InternalServerException | RequestAlreadyInProgressException | ServiceQuotaExceededException | ThrottlingException | ValidationException | CommonAwsError
  >;
  createDeployment(
    input: CreateDeploymentRequest,
  ): Effect.Effect<
    {},
    AccessDeniedException | ConflictException | InternalServerException | RequestAlreadyInProgressException | ResourceNotFoundException | ThrottlingException | ValidationException | CommonAwsError
  >;
  deleteComponent(
    input: DeleteComponentRequest,
  ): Effect.Effect<
    {},
    AccessDeniedException | ConflictException | InternalServerException | ResourceNotFoundException | ThrottlingException | ValidationException | CommonAwsError
  >;
  deleteCoreDevice(
    input: DeleteCoreDeviceRequest,
  ): Effect.Effect<
    {},
    AccessDeniedException | ConflictException | InternalServerException | ResourceNotFoundException | ThrottlingException | ValidationException | CommonAwsError
  >;
  deleteDeployment(
    input: DeleteDeploymentRequest,
  ): Effect.Effect<
    {},
    AccessDeniedException | ConflictException | InternalServerException | ResourceNotFoundException | ThrottlingException | ValidationException | CommonAwsError
  >;
  describeComponent(
    input: DescribeComponentRequest,
  ): Effect.Effect<
    {},
    AccessDeniedException | InternalServerException | ResourceNotFoundException | ThrottlingException | ValidationException | CommonAwsError
  >;
  disassociateServiceRoleFromAccount(
    input: DisassociateServiceRoleFromAccountRequest,
  ): Effect.Effect<
    {},
    InternalServerException | CommonAwsError
  >;
  getComponent(
    input: GetComponentRequest,
  ): Effect.Effect<
    {},
    AccessDeniedException | InternalServerException | ResourceNotFoundException | ThrottlingException | ValidationException | CommonAwsError
  >;
  getComponentVersionArtifact(
    input: GetComponentVersionArtifactRequest,
  ): Effect.Effect<
    {},
    AccessDeniedException | InternalServerException | ResourceNotFoundException | ThrottlingException | ValidationException | CommonAwsError
  >;
  getConnectivityInfo(
    input: GetConnectivityInfoRequest,
  ): Effect.Effect<
    {},
    InternalServerException | ValidationException | CommonAwsError
  >;
  getCoreDevice(
    input: GetCoreDeviceRequest,
  ): Effect.Effect<
    {},
    AccessDeniedException | InternalServerException | ResourceNotFoundException | ThrottlingException | ValidationException | CommonAwsError
  >;
  getDeployment(
    input: GetDeploymentRequest,
  ): Effect.Effect<
    {},
    AccessDeniedException | InternalServerException | ResourceNotFoundException | ThrottlingException | ValidationException | CommonAwsError
  >;
  getServiceRoleForAccount(
    input: GetServiceRoleForAccountRequest,
  ): Effect.Effect<
    {},
    InternalServerException | CommonAwsError
  >;
  listClientDevicesAssociatedWithCoreDevice(
    input: ListClientDevicesAssociatedWithCoreDeviceRequest,
  ): Effect.Effect<
    {},
    AccessDeniedException | InternalServerException | ResourceNotFoundException | ThrottlingException | ValidationException | CommonAwsError
  >;
  listComponentVersions(
    input: ListComponentVersionsRequest,
  ): Effect.Effect<
    {},
    AccessDeniedException | InternalServerException | ResourceNotFoundException | ThrottlingException | ValidationException | CommonAwsError
  >;
  listComponents(
    input: ListComponentsRequest,
  ): Effect.Effect<
    {},
    AccessDeniedException | InternalServerException | ResourceNotFoundException | ThrottlingException | ValidationException | CommonAwsError
  >;
  listCoreDevices(
    input: ListCoreDevicesRequest,
  ): Effect.Effect<
    {},
    AccessDeniedException | InternalServerException | ThrottlingException | ValidationException | CommonAwsError
  >;
  listDeployments(
    input: ListDeploymentsRequest,
  ): Effect.Effect<
    {},
    AccessDeniedException | InternalServerException | ThrottlingException | ValidationException | CommonAwsError
  >;
  listEffectiveDeployments(
    input: ListEffectiveDeploymentsRequest,
  ): Effect.Effect<
    {},
    AccessDeniedException | InternalServerException | ResourceNotFoundException | ThrottlingException | ValidationException | CommonAwsError
  >;
  listInstalledComponents(
    input: ListInstalledComponentsRequest,
  ): Effect.Effect<
    {},
    AccessDeniedException | InternalServerException | ResourceNotFoundException | ThrottlingException | ValidationException | CommonAwsError
  >;
  listTagsForResource(
    input: ListTagsForResourceRequest,
  ): Effect.Effect<
    {},
    InternalServerException | ResourceNotFoundException | ValidationException | CommonAwsError
  >;
  resolveComponentCandidates(
    input: ResolveComponentCandidatesRequest,
  ): Effect.Effect<
    {},
    AccessDeniedException | ConflictException | InternalServerException | ResourceNotFoundException | ThrottlingException | ValidationException | CommonAwsError
  >;
  tagResource(
    input: TagResourceRequest,
  ): Effect.Effect<
    {},
    InternalServerException | ResourceNotFoundException | ValidationException | CommonAwsError
  >;
  untagResource(
    input: UntagResourceRequest,
  ): Effect.Effect<
    {},
    InternalServerException | ResourceNotFoundException | ValidationException | CommonAwsError
  >;
  updateConnectivityInfo(
    input: UpdateConnectivityInfoRequest,
  ): Effect.Effect<
    {},
    InternalServerException | ValidationException | CommonAwsError
  >;
}

export type Greengrassv2 = GreengrassV2;

export interface AccessDeniedException {
}
export interface AssociateClientDeviceWithCoreDeviceEntry {
}
export type AssociateClientDeviceWithCoreDeviceEntryList = Array<unknown>;
export interface AssociateClientDeviceWithCoreDeviceErrorEntry {
}
export type AssociateClientDeviceWithCoreDeviceErrorList = Array<unknown>;
export interface AssociatedClientDevice {
}
export type AssociatedClientDeviceList = Array<unknown>;
export interface AssociateServiceRoleToAccountRequest {
}
export interface AssociateServiceRoleToAccountResponse {
}
export interface BatchAssociateClientDeviceWithCoreDeviceRequest {
}
export interface BatchAssociateClientDeviceWithCoreDeviceResponse {
}
export interface BatchDisassociateClientDeviceFromCoreDeviceRequest {
}
export interface BatchDisassociateClientDeviceFromCoreDeviceResponse {
}
export interface CancelDeploymentRequest {
}
export interface CancelDeploymentResponse {
}
export type ClientTokenString = string;

export type CloudComponentState = never;
export interface CloudComponentStatus {
}
export interface Component {
}
export type ComponentARN = string;

export interface ComponentCandidate {
}
export type ComponentCandidateList = Array<unknown>;
export type ComponentConfigurationPath = string;

export type ComponentConfigurationPathList = Array<unknown>;
export type ComponentConfigurationString = string;

export interface ComponentConfigurationUpdate {
}
export type ComponentDependencyMap = Record<string, unknown>;
export interface ComponentDependencyRequirement {
}
export type ComponentDependencyType = never;
export interface ComponentDeploymentSpecification {
}
export type ComponentDeploymentSpecifications = Record<string, unknown>;
export interface ComponentLatestVersion {
}
export type ComponentList = Array<unknown>;
export type ComponentNameString = string;

export interface ComponentPlatform {
}
export type ComponentPlatformList = Array<unknown>;
export interface ComponentRunWith {
}
export type ComponentVersionARN = string;

export type ComponentVersionList = Array<unknown>;
export interface ComponentVersionListItem {
}
export type ComponentVersionRequirementMap = Record<string, unknown>;
export type ComponentVersionString = string;

export type ComponentVisibilityScope = never;
export interface ConflictException {
}
export interface ConnectivityInfo {
}
export type connectivityInfoList = Array<unknown>;
export interface CoreDevice {
}
export type CoreDeviceArchitectureString = string;

export type CoreDevicePlatformString = string;

export type CoreDeviceRuntimeString = string;

export type CoreDevicesList = Array<unknown>;
export type CoreDeviceStatus = never;
export type CoreDeviceThingName = string;

export type CPU = number;

export interface CreateComponentVersionRequest {
}
export interface CreateComponentVersionResponse {
}
export interface CreateDeploymentRequest {
}
export interface CreateDeploymentResponse {
}
export type DefaultMaxResults = number;

export interface DeleteComponentRequest {
}
export interface DeleteCoreDeviceRequest {
}
export interface DeleteDeploymentRequest {
}
export interface Deployment {
}
export interface DeploymentComponentUpdatePolicy {
}
export type DeploymentComponentUpdatePolicyAction = never;
export interface DeploymentConfigurationValidationPolicy {
}
export type DeploymentFailureHandlingPolicy = never;
export type DeploymentHistoryFilter = never;
export type DeploymentID = string;

export interface DeploymentIoTJobConfiguration {
}
export type DeploymentList = Array<unknown>;
export type DeploymentName = string;

export type DeploymentNameString = string;

export interface DeploymentPolicies {
}
export type DeploymentStatus = never;
export interface DescribeComponentRequest {
}
export interface DescribeComponentResponse {
}
export type Description = string;

export type DescriptionString = string;

export interface DisassociateClientDeviceFromCoreDeviceEntry {
}
export type DisassociateClientDeviceFromCoreDeviceEntryList = Array<unknown>;
export interface DisassociateClientDeviceFromCoreDeviceErrorEntry {
}
export type DisassociateClientDeviceFromCoreDeviceErrorList = Array<unknown>;
export interface DisassociateServiceRoleFromAccountRequest {
}
export interface DisassociateServiceRoleFromAccountResponse {
}
export interface EffectiveDeployment {
}
export type EffectiveDeploymentErrorCode = string;

export type EffectiveDeploymentErrorStack = Array<unknown>;
export type EffectiveDeploymentErrorType = string;

export type EffectiveDeploymentErrorTypeList = Array<unknown>;
export type EffectiveDeploymentExecutionStatus = never;
export type EffectiveDeploymentsList = Array<unknown>;
export interface EffectiveDeploymentStatusDetails {
}
export type FileSystemPath = string;

export type GenericV2ARN = string;

export interface GetComponentRequest {
}
export interface GetComponentResponse {
}
export interface GetComponentVersionArtifactRequest {
}
export interface GetComponentVersionArtifactResponse {
}
export interface GetConnectivityInfoRequest {
}
export interface GetConnectivityInfoResponse {
}
export interface GetCoreDeviceRequest {
}
export interface GetCoreDeviceResponse {
}
export interface GetDeploymentRequest {
}
export interface GetDeploymentResponse {
}
export interface GetServiceRoleForAccountRequest {
}
export interface GetServiceRoleForAccountResponse {
}
export type GGCVersion = string;

export interface InstalledComponent {
}
export type InstalledComponentLifecycleState = never;
export type InstalledComponentLifecycleStatusCode = string;

export type InstalledComponentLifecycleStatusCodeList = Array<unknown>;
export type InstalledComponentList = Array<unknown>;
export type InstalledComponentTopologyFilter = never;
export interface InternalServerException {
}
export type IotEndpointType = never;
export type IoTJobAbortAction = never;
export interface IoTJobAbortConfig {
}
export interface IoTJobAbortCriteria {
}
export type IoTJobAbortCriteriaList = Array<unknown>;
export type IoTJobAbortThresholdPercentage = number;

export type IoTJobARN = string;

export type IoTJobExecutionFailureType = never;
export interface IoTJobExecutionsRolloutConfig {
}
export interface IoTJobExponentialRolloutRate {
}
export type IoTJobId = string;

export type IoTJobInProgressTimeoutInMinutes = number;

export type IoTJobMaxExecutionsPerMin = number;

export type IoTJobMinimumNumberOfExecutedThings = number;

export type IoTJobNumberOfThings = number;

export interface IoTJobRateIncreaseCriteria {
}
export type IoTJobRolloutBaseRatePerMinute = number;

export type IoTJobRolloutIncrementFactor = number;

export interface IoTJobTimeoutConfig {
}
export type IoTThingName = string;

export type IsLatestForTarget = boolean;

export type IsRoot = boolean;

export interface LambdaContainerParams {
}
export type LambdaDeviceList = Array<unknown>;
export interface LambdaDeviceMount {
}
export type LambdaEnvironmentVariables = Record<string, unknown>;
export interface LambdaEventSource {
}
export type LambdaEventSourceList = Array<unknown>;
export type LambdaEventSourceType = never;
export type LambdaExecArg = string;

export type LambdaExecArgsList = Array<unknown>;
export interface LambdaExecutionParameters {
}
export type LambdaFilesystemPermission = never;
export interface LambdaFunctionRecipeSource {
}
export type LambdaInputPayloadEncodingType = never;
export type LambdaIsolationMode = never;
export interface LambdaLinuxProcessParams {
}
export type LambdaVolumeList = Array<unknown>;
export interface LambdaVolumeMount {
}
export type LifecycleStateDetails = string;

export interface ListClientDevicesAssociatedWithCoreDeviceRequest {
}
export interface ListClientDevicesAssociatedWithCoreDeviceResponse {
}
export interface ListComponentsRequest {
}
export interface ListComponentsResponse {
}
export interface ListComponentVersionsRequest {
}
export interface ListComponentVersionsResponse {
}
export interface ListCoreDevicesRequest {
}
export interface ListCoreDevicesResponse {
}
export interface ListDeploymentsRequest {
}
export interface ListDeploymentsResponse {
}
export interface ListEffectiveDeploymentsRequest {
}
export interface ListEffectiveDeploymentsResponse {
}
export interface ListInstalledComponentsRequest {
}
export interface ListInstalledComponentsResponse {
}
export interface ListTagsForResourceRequest {
}
export interface ListTagsForResourceResponse {
}
export type Memory = number;

export type NextTokenString = string;

export type NonEmptyString = string;

export type NullableString = string;

export type OptionalBoolean = boolean;

export type OptionalInteger = number;

export type PlatformAttributesMap = Record<string, unknown>;
export type PortNumberInt = number;

export type PublisherString = string;

export type Reason = string;

export type RecipeBlob = Uint8Array | string;

export type RecipeOutputFormat = never;
export interface RequestAlreadyInProgressException {
}
export interface ResolveComponentCandidatesRequest {
}
export interface ResolveComponentCandidatesResponse {
}
export interface ResolvedComponentVersion {
}
export type ResolvedComponentVersionsList = Array<unknown>;
export interface ResourceNotFoundException {
}
export type RetryAfterSeconds = number;

export type S3EndpointType = never;
export interface ServiceQuotaExceededException {
}
export type StringMap = Record<string, unknown>;
export interface SystemResourceLimits {
}
export type TagKey = string;

export type TagKeyList = Array<unknown>;
export type TagMap = Record<string, unknown>;
export interface TagResourceRequest {
}
export interface TagResourceResponse {
}
export type TagValue = string;

export type TargetARN = string;

export type ThingGroupARN = string;

export interface ThrottlingException {
}
export type Timestamp = Date | string;

export type TopicString = string;

export interface UntagResourceRequest {
}
export interface UntagResourceResponse {
}
export interface UpdateConnectivityInfoRequest {
}
export interface UpdateConnectivityInfoResponse {
}
export interface ValidationException {
}
export interface ValidationExceptionField {
}
export type ValidationExceptionFieldList = Array<unknown>;
export type ValidationExceptionReason = never;
export type VendorGuidance = never;
export declare namespace AssociateServiceRoleToAccount {
  export type Input = AssociateServiceRoleToAccountRequest;
  export type Output = {};
  export type Error =
    | InternalServerException
    | ValidationException
    | CommonAwsError;
}

export declare namespace BatchAssociateClientDeviceWithCoreDevice {
  export type Input = BatchAssociateClientDeviceWithCoreDeviceRequest;
  export type Output = {};
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
  export type Output = {};
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

export declare namespace CreateComponentVersion {
  export type Input = CreateComponentVersionRequest;
  export type Output = {};
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
  export type Output = {};
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
  export type Output = {};
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
  export type Output = {};
  export type Error =
    | InternalServerException
    | CommonAwsError;
}

export declare namespace GetComponent {
  export type Input = GetComponentRequest;
  export type Output = {};
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
  export type Output = {};
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
  export type Output = {};
  export type Error =
    | InternalServerException
    | ValidationException
    | CommonAwsError;
}

export declare namespace GetCoreDevice {
  export type Input = GetCoreDeviceRequest;
  export type Output = {};
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
  export type Output = {};
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
  export type Output = {};
  export type Error =
    | InternalServerException
    | CommonAwsError;
}

export declare namespace ListClientDevicesAssociatedWithCoreDevice {
  export type Input = ListClientDevicesAssociatedWithCoreDeviceRequest;
  export type Output = {};
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
  export type Output = {};
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
  export type Output = {};
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
  export type Output = {};
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace ListDeployments {
  export type Input = ListDeploymentsRequest;
  export type Output = {};
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace ListEffectiveDeployments {
  export type Input = ListEffectiveDeploymentsRequest;
  export type Output = {};
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
  export type Output = {};
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
  export type Output = {};
  export type Error =
    | InternalServerException
    | ResourceNotFoundException
    | ValidationException
    | CommonAwsError;
}

export declare namespace ResolveComponentCandidates {
  export type Input = ResolveComponentCandidatesRequest;
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

export declare namespace TagResource {
  export type Input = TagResourceRequest;
  export type Output = {};
  export type Error =
    | InternalServerException
    | ResourceNotFoundException
    | ValidationException
    | CommonAwsError;
}

export declare namespace UntagResource {
  export type Input = UntagResourceRequest;
  export type Output = {};
  export type Error =
    | InternalServerException
    | ResourceNotFoundException
    | ValidationException
    | CommonAwsError;
}

export declare namespace UpdateConnectivityInfo {
  export type Input = UpdateConnectivityInfoRequest;
  export type Output = {};
  export type Error =
    | InternalServerException
    | ValidationException
    | CommonAwsError;
}

