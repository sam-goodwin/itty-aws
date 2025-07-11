import type { Effect, Data } from "effect";
import type { CommonAwsError } from "../client.ts";

export interface AWSGirApiService {
  addLayerVersionPermission(
    input: AddLayerVersionPermissionRequest,
  ): Effect.Effect<
    {},
    InvalidParameterValueException | PolicyLengthExceededException | PreconditionFailedException | ResourceConflictException | ResourceNotFoundException | ServiceException | TooManyRequestsException | CommonAwsError
  >;
  addPermission(
    input: AddPermissionRequest,
  ): Effect.Effect<
    {},
    InvalidParameterValueException | PolicyLengthExceededException | PreconditionFailedException | ResourceConflictException | ResourceNotFoundException | ServiceException | TooManyRequestsException | CommonAwsError
  >;
  createAlias(
    input: CreateAliasRequest,
  ): Effect.Effect<
    {},
    InvalidParameterValueException | ResourceConflictException | ResourceNotFoundException | ServiceException | TooManyRequestsException | CommonAwsError
  >;
  createCodeSigningConfig(
    input: CreateCodeSigningConfigRequest,
  ): Effect.Effect<
    {},
    InvalidParameterValueException | ServiceException | CommonAwsError
  >;
  createEventSourceMapping(
    input: CreateEventSourceMappingRequest,
  ): Effect.Effect<
    {},
    InvalidParameterValueException | ResourceConflictException | ResourceNotFoundException | ServiceException | TooManyRequestsException | CommonAwsError
  >;
  createFunction(
    input: CreateFunctionRequest,
  ): Effect.Effect<
    {},
    CodeSigningConfigNotFoundException | CodeStorageExceededException | CodeVerificationFailedException | InvalidCodeSignatureException | InvalidParameterValueException | ResourceConflictException | ResourceNotFoundException | ServiceException | TooManyRequestsException | CommonAwsError
  >;
  createFunctionUrlConfig(
    input: CreateFunctionUrlConfigRequest,
  ): Effect.Effect<
    {},
    InvalidParameterValueException | ResourceConflictException | ResourceNotFoundException | ServiceException | TooManyRequestsException | CommonAwsError
  >;
  deleteAlias(
    input: DeleteAliasRequest,
  ): Effect.Effect<
    {},
    InvalidParameterValueException | ResourceConflictException | ServiceException | TooManyRequestsException | CommonAwsError
  >;
  deleteCodeSigningConfig(
    input: DeleteCodeSigningConfigRequest,
  ): Effect.Effect<
    {},
    InvalidParameterValueException | ResourceConflictException | ResourceNotFoundException | ServiceException | CommonAwsError
  >;
  deleteEventSourceMapping(
    input: DeleteEventSourceMappingRequest,
  ): Effect.Effect<
    {},
    InvalidParameterValueException | ResourceConflictException | ResourceInUseException | ResourceNotFoundException | ServiceException | TooManyRequestsException | CommonAwsError
  >;
  deleteFunction(
    input: DeleteFunctionRequest,
  ): Effect.Effect<
    {},
    InvalidParameterValueException | ResourceConflictException | ResourceNotFoundException | ServiceException | TooManyRequestsException | CommonAwsError
  >;
  deleteFunctionCodeSigningConfig(
    input: DeleteFunctionCodeSigningConfigRequest,
  ): Effect.Effect<
    {},
    CodeSigningConfigNotFoundException | InvalidParameterValueException | ResourceConflictException | ResourceNotFoundException | ServiceException | TooManyRequestsException | CommonAwsError
  >;
  deleteFunctionConcurrency(
    input: DeleteFunctionConcurrencyRequest,
  ): Effect.Effect<
    {},
    InvalidParameterValueException | ResourceConflictException | ResourceNotFoundException | ServiceException | TooManyRequestsException | CommonAwsError
  >;
  deleteFunctionEventInvokeConfig(
    input: DeleteFunctionEventInvokeConfigRequest,
  ): Effect.Effect<
    {},
    InvalidParameterValueException | ResourceConflictException | ResourceNotFoundException | ServiceException | TooManyRequestsException | CommonAwsError
  >;
  deleteFunctionUrlConfig(
    input: DeleteFunctionUrlConfigRequest,
  ): Effect.Effect<
    {},
    ResourceConflictException | ResourceNotFoundException | ServiceException | TooManyRequestsException | CommonAwsError
  >;
  deleteLayerVersion(
    input: DeleteLayerVersionRequest,
  ): Effect.Effect<
    {},
    ServiceException | TooManyRequestsException | CommonAwsError
  >;
  deleteProvisionedConcurrencyConfig(
    input: DeleteProvisionedConcurrencyConfigRequest,
  ): Effect.Effect<
    {},
    InvalidParameterValueException | ResourceConflictException | ResourceNotFoundException | ServiceException | TooManyRequestsException | CommonAwsError
  >;
  getAccountSettings(
    input: GetAccountSettingsRequest,
  ): Effect.Effect<
    {},
    ServiceException | TooManyRequestsException | CommonAwsError
  >;
  getAlias(
    input: GetAliasRequest,
  ): Effect.Effect<
    {},
    InvalidParameterValueException | ResourceNotFoundException | ServiceException | TooManyRequestsException | CommonAwsError
  >;
  getCodeSigningConfig(
    input: GetCodeSigningConfigRequest,
  ): Effect.Effect<
    {},
    InvalidParameterValueException | ResourceNotFoundException | ServiceException | CommonAwsError
  >;
  getEventSourceMapping(
    input: GetEventSourceMappingRequest,
  ): Effect.Effect<
    {},
    InvalidParameterValueException | ResourceNotFoundException | ServiceException | TooManyRequestsException | CommonAwsError
  >;
  getFunction(
    input: GetFunctionRequest,
  ): Effect.Effect<
    {},
    InvalidParameterValueException | ResourceNotFoundException | ServiceException | TooManyRequestsException | CommonAwsError
  >;
  getFunctionCodeSigningConfig(
    input: GetFunctionCodeSigningConfigRequest,
  ): Effect.Effect<
    {},
    InvalidParameterValueException | ResourceNotFoundException | ServiceException | TooManyRequestsException | CommonAwsError
  >;
  getFunctionConcurrency(
    input: GetFunctionConcurrencyRequest,
  ): Effect.Effect<
    {},
    InvalidParameterValueException | ResourceNotFoundException | ServiceException | TooManyRequestsException | CommonAwsError
  >;
  getFunctionConfiguration(
    input: GetFunctionConfigurationRequest,
  ): Effect.Effect<
    {},
    InvalidParameterValueException | ResourceNotFoundException | ServiceException | TooManyRequestsException | CommonAwsError
  >;
  getFunctionEventInvokeConfig(
    input: GetFunctionEventInvokeConfigRequest,
  ): Effect.Effect<
    {},
    InvalidParameterValueException | ResourceNotFoundException | ServiceException | TooManyRequestsException | CommonAwsError
  >;
  getFunctionRecursionConfig(
    input: GetFunctionRecursionConfigRequest,
  ): Effect.Effect<
    {},
    InvalidParameterValueException | ResourceNotFoundException | ServiceException | TooManyRequestsException | CommonAwsError
  >;
  getFunctionUrlConfig(
    input: GetFunctionUrlConfigRequest,
  ): Effect.Effect<
    {},
    InvalidParameterValueException | ResourceNotFoundException | ServiceException | TooManyRequestsException | CommonAwsError
  >;
  getLayerVersion(
    input: GetLayerVersionRequest,
  ): Effect.Effect<
    {},
    InvalidParameterValueException | ResourceNotFoundException | ServiceException | TooManyRequestsException | CommonAwsError
  >;
  getLayerVersionByArn(
    input: GetLayerVersionByArnRequest,
  ): Effect.Effect<
    {},
    InvalidParameterValueException | ResourceNotFoundException | ServiceException | TooManyRequestsException | CommonAwsError
  >;
  getLayerVersionPolicy(
    input: GetLayerVersionPolicyRequest,
  ): Effect.Effect<
    {},
    InvalidParameterValueException | ResourceNotFoundException | ServiceException | TooManyRequestsException | CommonAwsError
  >;
  getPolicy(
    input: GetPolicyRequest,
  ): Effect.Effect<
    {},
    InvalidParameterValueException | ResourceNotFoundException | ServiceException | TooManyRequestsException | CommonAwsError
  >;
  getProvisionedConcurrencyConfig(
    input: GetProvisionedConcurrencyConfigRequest,
  ): Effect.Effect<
    {},
    InvalidParameterValueException | ProvisionedConcurrencyConfigNotFoundException | ResourceNotFoundException | ServiceException | TooManyRequestsException | CommonAwsError
  >;
  getRuntimeManagementConfig(
    input: GetRuntimeManagementConfigRequest,
  ): Effect.Effect<
    {},
    InvalidParameterValueException | ResourceNotFoundException | ServiceException | TooManyRequestsException | CommonAwsError
  >;
  invoke(
    input: InvocationRequest,
  ): Effect.Effect<
    {},
    EC2AccessDeniedException | EC2ThrottledException | EC2UnexpectedException | EFSIOException | EFSMountConnectivityException | EFSMountFailureException | EFSMountTimeoutException | ENILimitReachedException | InvalidParameterValueException | InvalidRequestContentException | InvalidRuntimeException | InvalidSecurityGroupIDException | InvalidSubnetIDException | InvalidZipFileException | KMSAccessDeniedException | KMSDisabledException | KMSInvalidStateException | KMSNotFoundException | RecursiveInvocationException | RequestTooLargeException | ResourceConflictException | ResourceNotFoundException | ResourceNotReadyException | ServiceException | SnapStartException | SnapStartNotReadyException | SnapStartTimeoutException | SubnetIPAddressLimitReachedException | TooManyRequestsException | UnsupportedMediaTypeException | CommonAwsError
  >;
  invokeAsync(
    input: InvokeAsyncRequest,
  ): Effect.Effect<
    {},
    InvalidRequestContentException | InvalidRuntimeException | ResourceConflictException | ResourceNotFoundException | ServiceException | CommonAwsError
  >;
  invokeWithResponseStream(
    input: InvokeWithResponseStreamRequest,
  ): Effect.Effect<
    {},
    EC2AccessDeniedException | EC2ThrottledException | EC2UnexpectedException | EFSIOException | EFSMountConnectivityException | EFSMountFailureException | EFSMountTimeoutException | ENILimitReachedException | InvalidParameterValueException | InvalidRequestContentException | InvalidRuntimeException | InvalidSecurityGroupIDException | InvalidSubnetIDException | InvalidZipFileException | KMSAccessDeniedException | KMSDisabledException | KMSInvalidStateException | KMSNotFoundException | RecursiveInvocationException | RequestTooLargeException | ResourceConflictException | ResourceNotFoundException | ResourceNotReadyException | ServiceException | SnapStartException | SnapStartNotReadyException | SnapStartTimeoutException | SubnetIPAddressLimitReachedException | TooManyRequestsException | UnsupportedMediaTypeException | CommonAwsError
  >;
  listAliases(
    input: ListAliasesRequest,
  ): Effect.Effect<
    {},
    InvalidParameterValueException | ResourceNotFoundException | ServiceException | TooManyRequestsException | CommonAwsError
  >;
  listCodeSigningConfigs(
    input: ListCodeSigningConfigsRequest,
  ): Effect.Effect<
    {},
    InvalidParameterValueException | ServiceException | CommonAwsError
  >;
  listEventSourceMappings(
    input: ListEventSourceMappingsRequest,
  ): Effect.Effect<
    {},
    InvalidParameterValueException | ResourceNotFoundException | ServiceException | TooManyRequestsException | CommonAwsError
  >;
  listFunctionEventInvokeConfigs(
    input: ListFunctionEventInvokeConfigsRequest,
  ): Effect.Effect<
    {},
    InvalidParameterValueException | ResourceNotFoundException | ServiceException | TooManyRequestsException | CommonAwsError
  >;
  listFunctionUrlConfigs(
    input: ListFunctionUrlConfigsRequest,
  ): Effect.Effect<
    {},
    InvalidParameterValueException | ResourceNotFoundException | ServiceException | TooManyRequestsException | CommonAwsError
  >;
  listFunctions(
    input: ListFunctionsRequest,
  ): Effect.Effect<
    {},
    InvalidParameterValueException | ServiceException | TooManyRequestsException | CommonAwsError
  >;
  listFunctionsByCodeSigningConfig(
    input: ListFunctionsByCodeSigningConfigRequest,
  ): Effect.Effect<
    {},
    InvalidParameterValueException | ResourceNotFoundException | ServiceException | CommonAwsError
  >;
  listLayerVersions(
    input: ListLayerVersionsRequest,
  ): Effect.Effect<
    {},
    InvalidParameterValueException | ResourceNotFoundException | ServiceException | TooManyRequestsException | CommonAwsError
  >;
  listLayers(
    input: ListLayersRequest,
  ): Effect.Effect<
    {},
    InvalidParameterValueException | ServiceException | TooManyRequestsException | CommonAwsError
  >;
  listProvisionedConcurrencyConfigs(
    input: ListProvisionedConcurrencyConfigsRequest,
  ): Effect.Effect<
    {},
    InvalidParameterValueException | ResourceNotFoundException | ServiceException | TooManyRequestsException | CommonAwsError
  >;
  listTags(
    input: ListTagsRequest,
  ): Effect.Effect<
    {},
    InvalidParameterValueException | ResourceNotFoundException | ServiceException | TooManyRequestsException | CommonAwsError
  >;
  listVersionsByFunction(
    input: ListVersionsByFunctionRequest,
  ): Effect.Effect<
    {},
    InvalidParameterValueException | ResourceNotFoundException | ServiceException | TooManyRequestsException | CommonAwsError
  >;
  publishLayerVersion(
    input: PublishLayerVersionRequest,
  ): Effect.Effect<
    {},
    CodeStorageExceededException | InvalidParameterValueException | ResourceNotFoundException | ServiceException | TooManyRequestsException | CommonAwsError
  >;
  publishVersion(
    input: PublishVersionRequest,
  ): Effect.Effect<
    {},
    CodeStorageExceededException | InvalidParameterValueException | PreconditionFailedException | ResourceConflictException | ResourceNotFoundException | ServiceException | TooManyRequestsException | CommonAwsError
  >;
  putFunctionCodeSigningConfig(
    input: PutFunctionCodeSigningConfigRequest,
  ): Effect.Effect<
    {},
    CodeSigningConfigNotFoundException | InvalidParameterValueException | ResourceConflictException | ResourceNotFoundException | ServiceException | TooManyRequestsException | CommonAwsError
  >;
  putFunctionConcurrency(
    input: PutFunctionConcurrencyRequest,
  ): Effect.Effect<
    {},
    InvalidParameterValueException | ResourceConflictException | ResourceNotFoundException | ServiceException | TooManyRequestsException | CommonAwsError
  >;
  putFunctionEventInvokeConfig(
    input: PutFunctionEventInvokeConfigRequest,
  ): Effect.Effect<
    {},
    InvalidParameterValueException | ResourceConflictException | ResourceNotFoundException | ServiceException | TooManyRequestsException | CommonAwsError
  >;
  putFunctionRecursionConfig(
    input: PutFunctionRecursionConfigRequest,
  ): Effect.Effect<
    {},
    InvalidParameterValueException | ResourceConflictException | ResourceNotFoundException | ServiceException | TooManyRequestsException | CommonAwsError
  >;
  putProvisionedConcurrencyConfig(
    input: PutProvisionedConcurrencyConfigRequest,
  ): Effect.Effect<
    {},
    InvalidParameterValueException | ResourceConflictException | ResourceNotFoundException | ServiceException | TooManyRequestsException | CommonAwsError
  >;
  putRuntimeManagementConfig(
    input: PutRuntimeManagementConfigRequest,
  ): Effect.Effect<
    {},
    InvalidParameterValueException | ResourceConflictException | ResourceNotFoundException | ServiceException | TooManyRequestsException | CommonAwsError
  >;
  removeLayerVersionPermission(
    input: RemoveLayerVersionPermissionRequest,
  ): Effect.Effect<
    {},
    InvalidParameterValueException | PreconditionFailedException | ResourceNotFoundException | ServiceException | TooManyRequestsException | CommonAwsError
  >;
  removePermission(
    input: RemovePermissionRequest,
  ): Effect.Effect<
    {},
    InvalidParameterValueException | PreconditionFailedException | ResourceNotFoundException | ServiceException | TooManyRequestsException | CommonAwsError
  >;
  tagResource(
    input: TagResourceRequest,
  ): Effect.Effect<
    {},
    InvalidParameterValueException | ResourceConflictException | ResourceNotFoundException | ServiceException | TooManyRequestsException | CommonAwsError
  >;
  untagResource(
    input: UntagResourceRequest,
  ): Effect.Effect<
    {},
    InvalidParameterValueException | ResourceConflictException | ResourceNotFoundException | ServiceException | TooManyRequestsException | CommonAwsError
  >;
  updateAlias(
    input: UpdateAliasRequest,
  ): Effect.Effect<
    {},
    InvalidParameterValueException | PreconditionFailedException | ResourceConflictException | ResourceNotFoundException | ServiceException | TooManyRequestsException | CommonAwsError
  >;
  updateCodeSigningConfig(
    input: UpdateCodeSigningConfigRequest,
  ): Effect.Effect<
    {},
    InvalidParameterValueException | ResourceNotFoundException | ServiceException | CommonAwsError
  >;
  updateEventSourceMapping(
    input: UpdateEventSourceMappingRequest,
  ): Effect.Effect<
    {},
    InvalidParameterValueException | ResourceConflictException | ResourceInUseException | ResourceNotFoundException | ServiceException | TooManyRequestsException | CommonAwsError
  >;
  updateFunctionCode(
    input: UpdateFunctionCodeRequest,
  ): Effect.Effect<
    {},
    CodeSigningConfigNotFoundException | CodeStorageExceededException | CodeVerificationFailedException | InvalidCodeSignatureException | InvalidParameterValueException | PreconditionFailedException | ResourceConflictException | ResourceNotFoundException | ServiceException | TooManyRequestsException | CommonAwsError
  >;
  updateFunctionConfiguration(
    input: UpdateFunctionConfigurationRequest,
  ): Effect.Effect<
    {},
    CodeSigningConfigNotFoundException | CodeVerificationFailedException | InvalidCodeSignatureException | InvalidParameterValueException | PreconditionFailedException | ResourceConflictException | ResourceNotFoundException | ServiceException | TooManyRequestsException | CommonAwsError
  >;
  updateFunctionEventInvokeConfig(
    input: UpdateFunctionEventInvokeConfigRequest,
  ): Effect.Effect<
    {},
    InvalidParameterValueException | ResourceConflictException | ResourceNotFoundException | ServiceException | TooManyRequestsException | CommonAwsError
  >;
  updateFunctionUrlConfig(
    input: UpdateFunctionUrlConfigRequest,
  ): Effect.Effect<
    {},
    InvalidParameterValueException | ResourceConflictException | ResourceNotFoundException | ServiceException | TooManyRequestsException | CommonAwsError
  >;
}

export type Lambda = AWSGirApiService;

export interface AccountLimit {
}
export interface AccountUsage {
}
export type Action = string;

export type AdditionalVersion = string;

export type AdditionalVersionWeights = Record<string, unknown>;
export interface AddLayerVersionPermissionRequest {
}
export interface AddLayerVersionPermissionResponse {
}
export interface AddPermissionRequest {
}
export interface AddPermissionResponse {
}
export type Alias = string;

export interface AliasConfiguration {
}
export type AliasList = Array<unknown>;
export interface AliasRoutingConfiguration {
}
export type AllowCredentials = boolean;

export interface AllowedPublishers {
}
export type AllowMethodsList = Array<unknown>;
export type AllowOriginsList = Array<unknown>;
export interface AmazonManagedKafkaEventSourceConfig {
}
export type ApplicationLogLevel = never;
export type Architecture = never;
export type ArchitecturesList = Array<unknown>;
export type Arn = string;

export type BatchSize = number;

export type BisectBatchOnFunctionError = boolean;

export type Blob = Uint8Array | string;

export type BlobStream = Uint8Array | string;

export interface CodeSigningConfig {
}
export type CodeSigningConfigArn = string;

export type CodeSigningConfigId = string;

export type CodeSigningConfigList = Array<unknown>;
export interface CodeSigningConfigNotFoundException {
}
export interface CodeSigningPolicies {
}
export type CodeSigningPolicy = never;
export interface CodeStorageExceededException {
}
export interface CodeVerificationFailedException {
}
export type CollectionName = string;

export type CompatibleArchitectures = Array<unknown>;
export type CompatibleRuntimes = Array<unknown>;
export interface Concurrency {
}
export interface Cors {
}
export interface CreateAliasRequest {
}
export interface CreateCodeSigningConfigRequest {
}
export interface CreateCodeSigningConfigResponse {
}
export interface CreateEventSourceMappingRequest {
}
export interface CreateFunctionRequest {
}
export interface CreateFunctionUrlConfigRequest {
}
export interface CreateFunctionUrlConfigResponse {
}
export type DatabaseName = string;

export interface DeadLetterConfig {
}
export interface DeleteAliasRequest {
}
export interface DeleteCodeSigningConfigRequest {
}
export interface DeleteCodeSigningConfigResponse {
}
export interface DeleteEventSourceMappingRequest {
}
export interface DeleteFunctionCodeSigningConfigRequest {
}
export interface DeleteFunctionConcurrencyRequest {
}
export interface DeleteFunctionEventInvokeConfigRequest {
}
export interface DeleteFunctionRequest {
}
export interface DeleteFunctionUrlConfigRequest {
}
export interface DeleteLayerVersionRequest {
}
export interface DeleteProvisionedConcurrencyConfigRequest {
}
export type Description = string;

export type DestinationArn = string;

export interface DestinationConfig {
}
export interface DocumentDBEventSourceConfig {
}
export interface EC2AccessDeniedException {
}
export interface EC2ThrottledException {
}
export interface EC2UnexpectedException {
}
export interface EFSIOException {
}
export interface EFSMountConnectivityException {
}
export interface EFSMountFailureException {
}
export interface EFSMountTimeoutException {
}
export type Enabled = boolean;

export type Endpoint = string;

export type EndpointLists = Array<unknown>;
export type Endpoints = Record<string, unknown>;
export type EndPointType = never;
export interface ENILimitReachedException {
}
export interface Environment {
}
export interface EnvironmentError {
}
export interface EnvironmentResponse {
}
export type EnvironmentVariableName = string;

export type EnvironmentVariables = Record<string, unknown>;
export type EnvironmentVariableValue = string;

export interface EphemeralStorage {
}
export type EphemeralStorageSize = number;

export type EventSourceMappingArn = string;

export interface EventSourceMappingConfiguration {
}
export type EventSourceMappingMetric = never;
export type EventSourceMappingMetricList = Array<unknown>;
export interface EventSourceMappingMetricsConfig {
}
export type EventSourceMappingsList = Array<unknown>;
export type EventSourcePosition = never;
export type EventSourceToken = string;

export type FileSystemArn = string;

export interface FileSystemConfig {
}
export type FileSystemConfigList = Array<unknown>;
export interface Filter {
}
export interface FilterCriteria {
}
export interface FilterCriteriaError {
}
export type FilterCriteriaErrorCode = string;

export type FilterCriteriaErrorMessage = string;

export type FilterList = Array<unknown>;
export type FullDocument = never;
export type FunctionArn = string;

export type FunctionArnList = Array<unknown>;
export interface FunctionCode {
}
export interface FunctionCodeLocation {
}
export interface FunctionConfiguration {
}
export interface FunctionEventInvokeConfig {
}
export type FunctionEventInvokeConfigList = Array<unknown>;
export type FunctionList = Array<unknown>;
export type FunctionName = string;

export type FunctionResponseType = never;
export type FunctionResponseTypeList = Array<unknown>;
export type FunctionUrl = string;

export type FunctionUrlAuthType = never;
export interface FunctionUrlConfig {
}
export type FunctionUrlConfigList = Array<unknown>;
export type FunctionUrlQualifier = string;

export type FunctionVersion = never;
export interface GetAccountSettingsRequest {
}
export interface GetAccountSettingsResponse {
}
export interface GetAliasRequest {
}
export interface GetCodeSigningConfigRequest {
}
export interface GetCodeSigningConfigResponse {
}
export interface GetEventSourceMappingRequest {
}
export interface GetFunctionCodeSigningConfigRequest {
}
export interface GetFunctionCodeSigningConfigResponse {
}
export interface GetFunctionConcurrencyRequest {
}
export interface GetFunctionConcurrencyResponse {
}
export interface GetFunctionConfigurationRequest {
}
export interface GetFunctionEventInvokeConfigRequest {
}
export interface GetFunctionRecursionConfigRequest {
}
export interface GetFunctionRecursionConfigResponse {
}
export interface GetFunctionRequest {
}
export interface GetFunctionResponse {
}
export interface GetFunctionUrlConfigRequest {
}
export interface GetFunctionUrlConfigResponse {
}
export interface GetLayerVersionByArnRequest {
}
export interface GetLayerVersionPolicyRequest {
}
export interface GetLayerVersionPolicyResponse {
}
export interface GetLayerVersionRequest {
}
export interface GetLayerVersionResponse {
}
export interface GetPolicyRequest {
}
export interface GetPolicyResponse {
}
export interface GetProvisionedConcurrencyConfigRequest {
}
export interface GetProvisionedConcurrencyConfigResponse {
}
export interface GetRuntimeManagementConfigRequest {
}
export interface GetRuntimeManagementConfigResponse {
}
export type Handler = string;

export type Header = string;

export type HeadersList = Array<unknown>;
export type HttpStatus = number;

export interface ImageConfig {
}
export interface ImageConfigError {
}
export interface ImageConfigResponse {
}
export type Integer = number;

export interface InvalidCodeSignatureException {
}
export interface InvalidParameterValueException {
}
export interface InvalidRequestContentException {
}
export interface InvalidRuntimeException {
}
export interface InvalidSecurityGroupIDException {
}
export interface InvalidSubnetIDException {
}
export interface InvalidZipFileException {
}
export interface InvocationRequest {
}
export interface InvocationResponse {
}
export type InvocationType = never;
export interface InvokeAsyncRequest {
}
export interface InvokeAsyncResponse {
}
export type InvokeMode = never;
export interface InvokeResponseStreamUpdate {
}
export interface InvokeWithResponseStreamCompleteEvent {
}
export interface InvokeWithResponseStreamRequest {
}
export interface InvokeWithResponseStreamResponse {
}
export type InvokeWithResponseStreamResponseEvent = never;
export interface KafkaSchemaRegistryAccessConfig {
}
export type KafkaSchemaRegistryAccessConfigList = Array<unknown>;
export type KafkaSchemaRegistryAuthType = never;
export interface KafkaSchemaRegistryConfig {
}
export type KafkaSchemaValidationAttribute = never;
export interface KafkaSchemaValidationConfig {
}
export type KafkaSchemaValidationConfigList = Array<unknown>;
export interface KMSAccessDeniedException {
}
export interface KMSDisabledException {
}
export interface KMSInvalidStateException {
}
export type KMSKeyArn = string;

export interface KMSNotFoundException {
}
export type LastUpdateStatus = never;
export type LastUpdateStatusReason = string;

export type LastUpdateStatusReasonCode = never;
export interface Layer {
}
export type LayerArn = string;

export type LayerList = Array<unknown>;
export type LayerName = string;

export type LayerPermissionAllowedAction = string;

export type LayerPermissionAllowedPrincipal = string;

export type LayersList = Array<unknown>;
export interface LayersListItem {
}
export type LayersReferenceList = Array<unknown>;
export type LayerVersionArn = string;

export interface LayerVersionContentInput {
}
export interface LayerVersionContentOutput {
}
export type LayerVersionNumber = number;

export type LayerVersionsList = Array<unknown>;
export interface LayerVersionsListItem {
}
export type LicenseInfo = string;

export interface ListAliasesRequest {
}
export interface ListAliasesResponse {
}
export interface ListCodeSigningConfigsRequest {
}
export interface ListCodeSigningConfigsResponse {
}
export interface ListEventSourceMappingsRequest {
}
export interface ListEventSourceMappingsResponse {
}
export interface ListFunctionEventInvokeConfigsRequest {
}
export interface ListFunctionEventInvokeConfigsResponse {
}
export interface ListFunctionsByCodeSigningConfigRequest {
}
export interface ListFunctionsByCodeSigningConfigResponse {
}
export interface ListFunctionsRequest {
}
export interface ListFunctionsResponse {
}
export interface ListFunctionUrlConfigsRequest {
}
export interface ListFunctionUrlConfigsResponse {
}
export interface ListLayersRequest {
}
export interface ListLayersResponse {
}
export interface ListLayerVersionsRequest {
}
export interface ListLayerVersionsResponse {
}
export interface ListProvisionedConcurrencyConfigsRequest {
}
export interface ListProvisionedConcurrencyConfigsResponse {
}
export interface ListTagsRequest {
}
export interface ListTagsResponse {
}
export interface ListVersionsByFunctionRequest {
}
export interface ListVersionsByFunctionResponse {
}
export type LocalMountPath = string;

export type LogFormat = never;
export interface LoggingConfig {
}
export type LogGroup = string;

export type LogType = never;
export type Long = number;

export type MasterRegion = string;

export type MaxAge = number;

export type MaxFunctionEventInvokeConfigListItems = number;

export type MaximumBatchingWindowInSeconds = number;

export type MaximumConcurrency = number;

export type MaximumEventAgeInSeconds = number;

export type MaximumNumberOfPollers = number;

export type MaximumRecordAgeInSeconds = number;

export type MaximumRetryAttempts = number;

export type MaximumRetryAttemptsEventSourceMapping = number;

export type MaxItems = number;

export type MaxLayerListItems = number;

export type MaxListItems = number;

export type MaxProvisionedConcurrencyConfigListItems = number;

export type MemorySize = number;

export type Method = string;

export type MinimumNumberOfPollers = number;

export type NameSpacedFunctionArn = string;

export type NamespacedFunctionName = string;

export type NamespacedStatementId = string;

export type NonNegativeInteger = number;

export type NullableBoolean = boolean;

export interface OnFailure {
}
export interface OnSuccess {
}
export type OrganizationId = string;

export type Origin = string;

export type PackageType = never;
export type ParallelizationFactor = number;

export type Pattern = string;

export interface PolicyLengthExceededException {
}
export type PositiveInteger = number;

export interface PreconditionFailedException {
}
export type Principal = string;

export type PrincipalOrgID = string;

export type ProvisionedConcurrencyConfigList = Array<unknown>;
export interface ProvisionedConcurrencyConfigListItem {
}
export interface ProvisionedConcurrencyConfigNotFoundException {
}
export type ProvisionedConcurrencyStatusEnum = never;
export interface ProvisionedPollerConfig {
}
export interface PublishLayerVersionRequest {
}
export interface PublishLayerVersionResponse {
}
export interface PublishVersionRequest {
}
export interface PutFunctionCodeSigningConfigRequest {
}
export interface PutFunctionCodeSigningConfigResponse {
}
export interface PutFunctionConcurrencyRequest {
}
export interface PutFunctionEventInvokeConfigRequest {
}
export interface PutFunctionRecursionConfigRequest {
}
export interface PutFunctionRecursionConfigResponse {
}
export interface PutProvisionedConcurrencyConfigRequest {
}
export interface PutProvisionedConcurrencyConfigResponse {
}
export interface PutRuntimeManagementConfigRequest {
}
export interface PutRuntimeManagementConfigResponse {
}
export type Qualifier = string;

export type Queue = string;

export type Queues = Array<unknown>;
export interface RecursiveInvocationException {
}
export type RecursiveLoop = never;
export interface RemoveLayerVersionPermissionRequest {
}
export interface RemovePermissionRequest {
}
export interface RequestTooLargeException {
}
export type ReservedConcurrentExecutions = number;

export type ResourceArn = string;

export interface ResourceConflictException {
}
export interface ResourceInUseException {
}
export interface ResourceNotFoundException {
}
export interface ResourceNotReadyException {
}
export type ResponseStreamingInvocationType = never;
export type RoleArn = string;

export type Runtime = never;
export type RuntimeVersionArn = string;

export interface RuntimeVersionConfig {
}
export interface RuntimeVersionError {
}
export type S3Bucket = string;

export type S3Key = string;

export type S3ObjectVersion = string;

export interface ScalingConfig {
}
export type SchemaRegistryEventRecordFormat = never;
export type SchemaRegistryUri = string;

export type SecurityGroupId = string;

export type SecurityGroupIds = Array<unknown>;
export interface SelfManagedEventSource {
}
export interface SelfManagedKafkaEventSourceConfig {
}
export type SensitiveString = string;

export interface ServiceException {
}
export type SigningProfileVersionArns = Array<unknown>;
export interface SnapStart {
}
export type SnapStartApplyOn = never;
export interface SnapStartException {
}
export interface SnapStartNotReadyException {
}
export type SnapStartOptimizationStatus = never;
export interface SnapStartResponse {
}
export interface SnapStartTimeoutException {
}
export interface SourceAccessConfiguration {
}
export type SourceAccessConfigurations = Array<unknown>;
export type SourceAccessType = never;
export type SourceOwner = string;

export type State = never;
export type StatementId = string;

export type StateReason = string;

export type StateReasonCode = never;
export type StringList = Array<unknown>;
export type SubnetId = string;

export type SubnetIds = Array<unknown>;
export interface SubnetIPAddressLimitReachedException {
}
export type SystemLogLevel = never;
export type TaggableResource = string;

export type TagKey = string;

export type TagKeyList = Array<unknown>;
export interface TagResourceRequest {
}
export type Tags = Record<string, unknown>;
export interface TagsError {
}
export type TagsErrorCode = string;

export type TagsErrorMessage = string;

export type TagValue = string;

export type ThrottleReason = never;
export type Timeout = number;

export type Timestamp = string;

export interface TooManyRequestsException {
}
export type Topic = string;

export type Topics = Array<unknown>;
export interface TracingConfig {
}
export interface TracingConfigResponse {
}
export type TracingMode = never;
export type TumblingWindowInSeconds = number;

export type UnqualifiedFunctionName = string;

export type UnreservedConcurrentExecutions = number;

export interface UnsupportedMediaTypeException {
}
export interface UntagResourceRequest {
}
export interface UpdateAliasRequest {
}
export interface UpdateCodeSigningConfigRequest {
}
export interface UpdateCodeSigningConfigResponse {
}
export interface UpdateEventSourceMappingRequest {
}
export interface UpdateFunctionCodeRequest {
}
export interface UpdateFunctionConfigurationRequest {
}
export interface UpdateFunctionEventInvokeConfigRequest {
}
export interface UpdateFunctionUrlConfigRequest {
}
export interface UpdateFunctionUrlConfigResponse {
}
export type UpdateRuntimeOn = never;
export type URI = string;

export type Version = string;

export interface VpcConfig {
}
export interface VpcConfigResponse {
}
export type VpcId = string;

export type Weight = number;

export type WorkingDirectory = string;

export declare namespace AddLayerVersionPermission {
  export type Input = AddLayerVersionPermissionRequest;
  export type Output = {};
  export type Error =
    | InvalidParameterValueException
    | PolicyLengthExceededException
    | PreconditionFailedException
    | ResourceConflictException
    | ResourceNotFoundException
    | ServiceException
    | TooManyRequestsException
    | CommonAwsError;
}

export declare namespace AddPermission {
  export type Input = AddPermissionRequest;
  export type Output = {};
  export type Error =
    | InvalidParameterValueException
    | PolicyLengthExceededException
    | PreconditionFailedException
    | ResourceConflictException
    | ResourceNotFoundException
    | ServiceException
    | TooManyRequestsException
    | CommonAwsError;
}

export declare namespace CreateAlias {
  export type Input = CreateAliasRequest;
  export type Output = {};
  export type Error =
    | InvalidParameterValueException
    | ResourceConflictException
    | ResourceNotFoundException
    | ServiceException
    | TooManyRequestsException
    | CommonAwsError;
}

export declare namespace CreateCodeSigningConfig {
  export type Input = CreateCodeSigningConfigRequest;
  export type Output = {};
  export type Error =
    | InvalidParameterValueException
    | ServiceException
    | CommonAwsError;
}

export declare namespace CreateEventSourceMapping {
  export type Input = CreateEventSourceMappingRequest;
  export type Output = {};
  export type Error =
    | InvalidParameterValueException
    | ResourceConflictException
    | ResourceNotFoundException
    | ServiceException
    | TooManyRequestsException
    | CommonAwsError;
}

export declare namespace CreateFunction {
  export type Input = CreateFunctionRequest;
  export type Output = {};
  export type Error =
    | CodeSigningConfigNotFoundException
    | CodeStorageExceededException
    | CodeVerificationFailedException
    | InvalidCodeSignatureException
    | InvalidParameterValueException
    | ResourceConflictException
    | ResourceNotFoundException
    | ServiceException
    | TooManyRequestsException
    | CommonAwsError;
}

export declare namespace CreateFunctionUrlConfig {
  export type Input = CreateFunctionUrlConfigRequest;
  export type Output = {};
  export type Error =
    | InvalidParameterValueException
    | ResourceConflictException
    | ResourceNotFoundException
    | ServiceException
    | TooManyRequestsException
    | CommonAwsError;
}

export declare namespace DeleteAlias {
  export type Input = DeleteAliasRequest;
  export type Output = {};
  export type Error =
    | InvalidParameterValueException
    | ResourceConflictException
    | ServiceException
    | TooManyRequestsException
    | CommonAwsError;
}

export declare namespace DeleteCodeSigningConfig {
  export type Input = DeleteCodeSigningConfigRequest;
  export type Output = {};
  export type Error =
    | InvalidParameterValueException
    | ResourceConflictException
    | ResourceNotFoundException
    | ServiceException
    | CommonAwsError;
}

export declare namespace DeleteEventSourceMapping {
  export type Input = DeleteEventSourceMappingRequest;
  export type Output = {};
  export type Error =
    | InvalidParameterValueException
    | ResourceConflictException
    | ResourceInUseException
    | ResourceNotFoundException
    | ServiceException
    | TooManyRequestsException
    | CommonAwsError;
}

export declare namespace DeleteFunction {
  export type Input = DeleteFunctionRequest;
  export type Output = {};
  export type Error =
    | InvalidParameterValueException
    | ResourceConflictException
    | ResourceNotFoundException
    | ServiceException
    | TooManyRequestsException
    | CommonAwsError;
}

export declare namespace DeleteFunctionCodeSigningConfig {
  export type Input = DeleteFunctionCodeSigningConfigRequest;
  export type Output = {};
  export type Error =
    | CodeSigningConfigNotFoundException
    | InvalidParameterValueException
    | ResourceConflictException
    | ResourceNotFoundException
    | ServiceException
    | TooManyRequestsException
    | CommonAwsError;
}

export declare namespace DeleteFunctionConcurrency {
  export type Input = DeleteFunctionConcurrencyRequest;
  export type Output = {};
  export type Error =
    | InvalidParameterValueException
    | ResourceConflictException
    | ResourceNotFoundException
    | ServiceException
    | TooManyRequestsException
    | CommonAwsError;
}

export declare namespace DeleteFunctionEventInvokeConfig {
  export type Input = DeleteFunctionEventInvokeConfigRequest;
  export type Output = {};
  export type Error =
    | InvalidParameterValueException
    | ResourceConflictException
    | ResourceNotFoundException
    | ServiceException
    | TooManyRequestsException
    | CommonAwsError;
}

export declare namespace DeleteFunctionUrlConfig {
  export type Input = DeleteFunctionUrlConfigRequest;
  export type Output = {};
  export type Error =
    | ResourceConflictException
    | ResourceNotFoundException
    | ServiceException
    | TooManyRequestsException
    | CommonAwsError;
}

export declare namespace DeleteLayerVersion {
  export type Input = DeleteLayerVersionRequest;
  export type Output = {};
  export type Error =
    | ServiceException
    | TooManyRequestsException
    | CommonAwsError;
}

export declare namespace DeleteProvisionedConcurrencyConfig {
  export type Input = DeleteProvisionedConcurrencyConfigRequest;
  export type Output = {};
  export type Error =
    | InvalidParameterValueException
    | ResourceConflictException
    | ResourceNotFoundException
    | ServiceException
    | TooManyRequestsException
    | CommonAwsError;
}

export declare namespace GetAccountSettings {
  export type Input = GetAccountSettingsRequest;
  export type Output = {};
  export type Error =
    | ServiceException
    | TooManyRequestsException
    | CommonAwsError;
}

export declare namespace GetAlias {
  export type Input = GetAliasRequest;
  export type Output = {};
  export type Error =
    | InvalidParameterValueException
    | ResourceNotFoundException
    | ServiceException
    | TooManyRequestsException
    | CommonAwsError;
}

export declare namespace GetCodeSigningConfig {
  export type Input = GetCodeSigningConfigRequest;
  export type Output = {};
  export type Error =
    | InvalidParameterValueException
    | ResourceNotFoundException
    | ServiceException
    | CommonAwsError;
}

export declare namespace GetEventSourceMapping {
  export type Input = GetEventSourceMappingRequest;
  export type Output = {};
  export type Error =
    | InvalidParameterValueException
    | ResourceNotFoundException
    | ServiceException
    | TooManyRequestsException
    | CommonAwsError;
}

export declare namespace GetFunction {
  export type Input = GetFunctionRequest;
  export type Output = {};
  export type Error =
    | InvalidParameterValueException
    | ResourceNotFoundException
    | ServiceException
    | TooManyRequestsException
    | CommonAwsError;
}

export declare namespace GetFunctionCodeSigningConfig {
  export type Input = GetFunctionCodeSigningConfigRequest;
  export type Output = {};
  export type Error =
    | InvalidParameterValueException
    | ResourceNotFoundException
    | ServiceException
    | TooManyRequestsException
    | CommonAwsError;
}

export declare namespace GetFunctionConcurrency {
  export type Input = GetFunctionConcurrencyRequest;
  export type Output = {};
  export type Error =
    | InvalidParameterValueException
    | ResourceNotFoundException
    | ServiceException
    | TooManyRequestsException
    | CommonAwsError;
}

export declare namespace GetFunctionConfiguration {
  export type Input = GetFunctionConfigurationRequest;
  export type Output = {};
  export type Error =
    | InvalidParameterValueException
    | ResourceNotFoundException
    | ServiceException
    | TooManyRequestsException
    | CommonAwsError;
}

export declare namespace GetFunctionEventInvokeConfig {
  export type Input = GetFunctionEventInvokeConfigRequest;
  export type Output = {};
  export type Error =
    | InvalidParameterValueException
    | ResourceNotFoundException
    | ServiceException
    | TooManyRequestsException
    | CommonAwsError;
}

export declare namespace GetFunctionRecursionConfig {
  export type Input = GetFunctionRecursionConfigRequest;
  export type Output = {};
  export type Error =
    | InvalidParameterValueException
    | ResourceNotFoundException
    | ServiceException
    | TooManyRequestsException
    | CommonAwsError;
}

export declare namespace GetFunctionUrlConfig {
  export type Input = GetFunctionUrlConfigRequest;
  export type Output = {};
  export type Error =
    | InvalidParameterValueException
    | ResourceNotFoundException
    | ServiceException
    | TooManyRequestsException
    | CommonAwsError;
}

export declare namespace GetLayerVersion {
  export type Input = GetLayerVersionRequest;
  export type Output = {};
  export type Error =
    | InvalidParameterValueException
    | ResourceNotFoundException
    | ServiceException
    | TooManyRequestsException
    | CommonAwsError;
}

export declare namespace GetLayerVersionByArn {
  export type Input = GetLayerVersionByArnRequest;
  export type Output = {};
  export type Error =
    | InvalidParameterValueException
    | ResourceNotFoundException
    | ServiceException
    | TooManyRequestsException
    | CommonAwsError;
}

export declare namespace GetLayerVersionPolicy {
  export type Input = GetLayerVersionPolicyRequest;
  export type Output = {};
  export type Error =
    | InvalidParameterValueException
    | ResourceNotFoundException
    | ServiceException
    | TooManyRequestsException
    | CommonAwsError;
}

export declare namespace GetPolicy {
  export type Input = GetPolicyRequest;
  export type Output = {};
  export type Error =
    | InvalidParameterValueException
    | ResourceNotFoundException
    | ServiceException
    | TooManyRequestsException
    | CommonAwsError;
}

export declare namespace GetProvisionedConcurrencyConfig {
  export type Input = GetProvisionedConcurrencyConfigRequest;
  export type Output = {};
  export type Error =
    | InvalidParameterValueException
    | ProvisionedConcurrencyConfigNotFoundException
    | ResourceNotFoundException
    | ServiceException
    | TooManyRequestsException
    | CommonAwsError;
}

export declare namespace GetRuntimeManagementConfig {
  export type Input = GetRuntimeManagementConfigRequest;
  export type Output = {};
  export type Error =
    | InvalidParameterValueException
    | ResourceNotFoundException
    | ServiceException
    | TooManyRequestsException
    | CommonAwsError;
}

export declare namespace Invoke {
  export type Input = InvocationRequest;
  export type Output = {};
  export type Error =
    | EC2AccessDeniedException
    | EC2ThrottledException
    | EC2UnexpectedException
    | EFSIOException
    | EFSMountConnectivityException
    | EFSMountFailureException
    | EFSMountTimeoutException
    | ENILimitReachedException
    | InvalidParameterValueException
    | InvalidRequestContentException
    | InvalidRuntimeException
    | InvalidSecurityGroupIDException
    | InvalidSubnetIDException
    | InvalidZipFileException
    | KMSAccessDeniedException
    | KMSDisabledException
    | KMSInvalidStateException
    | KMSNotFoundException
    | RecursiveInvocationException
    | RequestTooLargeException
    | ResourceConflictException
    | ResourceNotFoundException
    | ResourceNotReadyException
    | ServiceException
    | SnapStartException
    | SnapStartNotReadyException
    | SnapStartTimeoutException
    | SubnetIPAddressLimitReachedException
    | TooManyRequestsException
    | UnsupportedMediaTypeException
    | CommonAwsError;
}

export declare namespace InvokeAsync {
  export type Input = InvokeAsyncRequest;
  export type Output = {};
  export type Error =
    | InvalidRequestContentException
    | InvalidRuntimeException
    | ResourceConflictException
    | ResourceNotFoundException
    | ServiceException
    | CommonAwsError;
}

export declare namespace InvokeWithResponseStream {
  export type Input = InvokeWithResponseStreamRequest;
  export type Output = {};
  export type Error =
    | EC2AccessDeniedException
    | EC2ThrottledException
    | EC2UnexpectedException
    | EFSIOException
    | EFSMountConnectivityException
    | EFSMountFailureException
    | EFSMountTimeoutException
    | ENILimitReachedException
    | InvalidParameterValueException
    | InvalidRequestContentException
    | InvalidRuntimeException
    | InvalidSecurityGroupIDException
    | InvalidSubnetIDException
    | InvalidZipFileException
    | KMSAccessDeniedException
    | KMSDisabledException
    | KMSInvalidStateException
    | KMSNotFoundException
    | RecursiveInvocationException
    | RequestTooLargeException
    | ResourceConflictException
    | ResourceNotFoundException
    | ResourceNotReadyException
    | ServiceException
    | SnapStartException
    | SnapStartNotReadyException
    | SnapStartTimeoutException
    | SubnetIPAddressLimitReachedException
    | TooManyRequestsException
    | UnsupportedMediaTypeException
    | CommonAwsError;
}

export declare namespace ListAliases {
  export type Input = ListAliasesRequest;
  export type Output = {};
  export type Error =
    | InvalidParameterValueException
    | ResourceNotFoundException
    | ServiceException
    | TooManyRequestsException
    | CommonAwsError;
}

export declare namespace ListCodeSigningConfigs {
  export type Input = ListCodeSigningConfigsRequest;
  export type Output = {};
  export type Error =
    | InvalidParameterValueException
    | ServiceException
    | CommonAwsError;
}

export declare namespace ListEventSourceMappings {
  export type Input = ListEventSourceMappingsRequest;
  export type Output = {};
  export type Error =
    | InvalidParameterValueException
    | ResourceNotFoundException
    | ServiceException
    | TooManyRequestsException
    | CommonAwsError;
}

export declare namespace ListFunctionEventInvokeConfigs {
  export type Input = ListFunctionEventInvokeConfigsRequest;
  export type Output = {};
  export type Error =
    | InvalidParameterValueException
    | ResourceNotFoundException
    | ServiceException
    | TooManyRequestsException
    | CommonAwsError;
}

export declare namespace ListFunctionUrlConfigs {
  export type Input = ListFunctionUrlConfigsRequest;
  export type Output = {};
  export type Error =
    | InvalidParameterValueException
    | ResourceNotFoundException
    | ServiceException
    | TooManyRequestsException
    | CommonAwsError;
}

export declare namespace ListFunctions {
  export type Input = ListFunctionsRequest;
  export type Output = {};
  export type Error =
    | InvalidParameterValueException
    | ServiceException
    | TooManyRequestsException
    | CommonAwsError;
}

export declare namespace ListFunctionsByCodeSigningConfig {
  export type Input = ListFunctionsByCodeSigningConfigRequest;
  export type Output = {};
  export type Error =
    | InvalidParameterValueException
    | ResourceNotFoundException
    | ServiceException
    | CommonAwsError;
}

export declare namespace ListLayerVersions {
  export type Input = ListLayerVersionsRequest;
  export type Output = {};
  export type Error =
    | InvalidParameterValueException
    | ResourceNotFoundException
    | ServiceException
    | TooManyRequestsException
    | CommonAwsError;
}

export declare namespace ListLayers {
  export type Input = ListLayersRequest;
  export type Output = {};
  export type Error =
    | InvalidParameterValueException
    | ServiceException
    | TooManyRequestsException
    | CommonAwsError;
}

export declare namespace ListProvisionedConcurrencyConfigs {
  export type Input = ListProvisionedConcurrencyConfigsRequest;
  export type Output = {};
  export type Error =
    | InvalidParameterValueException
    | ResourceNotFoundException
    | ServiceException
    | TooManyRequestsException
    | CommonAwsError;
}

export declare namespace ListTags {
  export type Input = ListTagsRequest;
  export type Output = {};
  export type Error =
    | InvalidParameterValueException
    | ResourceNotFoundException
    | ServiceException
    | TooManyRequestsException
    | CommonAwsError;
}

export declare namespace ListVersionsByFunction {
  export type Input = ListVersionsByFunctionRequest;
  export type Output = {};
  export type Error =
    | InvalidParameterValueException
    | ResourceNotFoundException
    | ServiceException
    | TooManyRequestsException
    | CommonAwsError;
}

export declare namespace PublishLayerVersion {
  export type Input = PublishLayerVersionRequest;
  export type Output = {};
  export type Error =
    | CodeStorageExceededException
    | InvalidParameterValueException
    | ResourceNotFoundException
    | ServiceException
    | TooManyRequestsException
    | CommonAwsError;
}

export declare namespace PublishVersion {
  export type Input = PublishVersionRequest;
  export type Output = {};
  export type Error =
    | CodeStorageExceededException
    | InvalidParameterValueException
    | PreconditionFailedException
    | ResourceConflictException
    | ResourceNotFoundException
    | ServiceException
    | TooManyRequestsException
    | CommonAwsError;
}

export declare namespace PutFunctionCodeSigningConfig {
  export type Input = PutFunctionCodeSigningConfigRequest;
  export type Output = {};
  export type Error =
    | CodeSigningConfigNotFoundException
    | InvalidParameterValueException
    | ResourceConflictException
    | ResourceNotFoundException
    | ServiceException
    | TooManyRequestsException
    | CommonAwsError;
}

export declare namespace PutFunctionConcurrency {
  export type Input = PutFunctionConcurrencyRequest;
  export type Output = {};
  export type Error =
    | InvalidParameterValueException
    | ResourceConflictException
    | ResourceNotFoundException
    | ServiceException
    | TooManyRequestsException
    | CommonAwsError;
}

export declare namespace PutFunctionEventInvokeConfig {
  export type Input = PutFunctionEventInvokeConfigRequest;
  export type Output = {};
  export type Error =
    | InvalidParameterValueException
    | ResourceConflictException
    | ResourceNotFoundException
    | ServiceException
    | TooManyRequestsException
    | CommonAwsError;
}

export declare namespace PutFunctionRecursionConfig {
  export type Input = PutFunctionRecursionConfigRequest;
  export type Output = {};
  export type Error =
    | InvalidParameterValueException
    | ResourceConflictException
    | ResourceNotFoundException
    | ServiceException
    | TooManyRequestsException
    | CommonAwsError;
}

export declare namespace PutProvisionedConcurrencyConfig {
  export type Input = PutProvisionedConcurrencyConfigRequest;
  export type Output = {};
  export type Error =
    | InvalidParameterValueException
    | ResourceConflictException
    | ResourceNotFoundException
    | ServiceException
    | TooManyRequestsException
    | CommonAwsError;
}

export declare namespace PutRuntimeManagementConfig {
  export type Input = PutRuntimeManagementConfigRequest;
  export type Output = {};
  export type Error =
    | InvalidParameterValueException
    | ResourceConflictException
    | ResourceNotFoundException
    | ServiceException
    | TooManyRequestsException
    | CommonAwsError;
}

export declare namespace RemoveLayerVersionPermission {
  export type Input = RemoveLayerVersionPermissionRequest;
  export type Output = {};
  export type Error =
    | InvalidParameterValueException
    | PreconditionFailedException
    | ResourceNotFoundException
    | ServiceException
    | TooManyRequestsException
    | CommonAwsError;
}

export declare namespace RemovePermission {
  export type Input = RemovePermissionRequest;
  export type Output = {};
  export type Error =
    | InvalidParameterValueException
    | PreconditionFailedException
    | ResourceNotFoundException
    | ServiceException
    | TooManyRequestsException
    | CommonAwsError;
}

export declare namespace TagResource {
  export type Input = TagResourceRequest;
  export type Output = {};
  export type Error =
    | InvalidParameterValueException
    | ResourceConflictException
    | ResourceNotFoundException
    | ServiceException
    | TooManyRequestsException
    | CommonAwsError;
}

export declare namespace UntagResource {
  export type Input = UntagResourceRequest;
  export type Output = {};
  export type Error =
    | InvalidParameterValueException
    | ResourceConflictException
    | ResourceNotFoundException
    | ServiceException
    | TooManyRequestsException
    | CommonAwsError;
}

export declare namespace UpdateAlias {
  export type Input = UpdateAliasRequest;
  export type Output = {};
  export type Error =
    | InvalidParameterValueException
    | PreconditionFailedException
    | ResourceConflictException
    | ResourceNotFoundException
    | ServiceException
    | TooManyRequestsException
    | CommonAwsError;
}

export declare namespace UpdateCodeSigningConfig {
  export type Input = UpdateCodeSigningConfigRequest;
  export type Output = {};
  export type Error =
    | InvalidParameterValueException
    | ResourceNotFoundException
    | ServiceException
    | CommonAwsError;
}

export declare namespace UpdateEventSourceMapping {
  export type Input = UpdateEventSourceMappingRequest;
  export type Output = {};
  export type Error =
    | InvalidParameterValueException
    | ResourceConflictException
    | ResourceInUseException
    | ResourceNotFoundException
    | ServiceException
    | TooManyRequestsException
    | CommonAwsError;
}

export declare namespace UpdateFunctionCode {
  export type Input = UpdateFunctionCodeRequest;
  export type Output = {};
  export type Error =
    | CodeSigningConfigNotFoundException
    | CodeStorageExceededException
    | CodeVerificationFailedException
    | InvalidCodeSignatureException
    | InvalidParameterValueException
    | PreconditionFailedException
    | ResourceConflictException
    | ResourceNotFoundException
    | ServiceException
    | TooManyRequestsException
    | CommonAwsError;
}

export declare namespace UpdateFunctionConfiguration {
  export type Input = UpdateFunctionConfigurationRequest;
  export type Output = {};
  export type Error =
    | CodeSigningConfigNotFoundException
    | CodeVerificationFailedException
    | InvalidCodeSignatureException
    | InvalidParameterValueException
    | PreconditionFailedException
    | ResourceConflictException
    | ResourceNotFoundException
    | ServiceException
    | TooManyRequestsException
    | CommonAwsError;
}

export declare namespace UpdateFunctionEventInvokeConfig {
  export type Input = UpdateFunctionEventInvokeConfigRequest;
  export type Output = {};
  export type Error =
    | InvalidParameterValueException
    | ResourceConflictException
    | ResourceNotFoundException
    | ServiceException
    | TooManyRequestsException
    | CommonAwsError;
}

export declare namespace UpdateFunctionUrlConfig {
  export type Input = UpdateFunctionUrlConfigRequest;
  export type Output = {};
  export type Error =
    | InvalidParameterValueException
    | ResourceConflictException
    | ResourceNotFoundException
    | ServiceException
    | TooManyRequestsException
    | CommonAwsError;
}

