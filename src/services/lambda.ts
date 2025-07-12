import type { Effect, Stream, Data as EffectData } from "effect";
import type { ResponseError } from "@effect/platform/HttpClientError";
import type { Buffer } from "node:buffer";
import type { CommonAwsError } from "../error.ts";
import { AWSServiceClient } from "../client.ts";

export declare class Lambda extends AWSServiceClient {
  addLayerVersionPermission(
    input: AddLayerVersionPermissionRequest,
  ): Effect.Effect<
    AddLayerVersionPermissionResponse,
    | InvalidParameterValueException
    | PolicyLengthExceededException
    | PreconditionFailedException
    | ResourceConflictException
    | ResourceNotFoundException
    | ServiceException
    | TooManyRequestsException
    | CommonAwsError
  >;
  addPermission(
    input: AddPermissionRequest,
  ): Effect.Effect<
    AddPermissionResponse,
    | InvalidParameterValueException
    | PolicyLengthExceededException
    | PreconditionFailedException
    | ResourceConflictException
    | ResourceNotFoundException
    | ServiceException
    | TooManyRequestsException
    | CommonAwsError
  >;
  createAlias(
    input: CreateAliasRequest,
  ): Effect.Effect<
    AliasConfiguration,
    | InvalidParameterValueException
    | ResourceConflictException
    | ResourceNotFoundException
    | ServiceException
    | TooManyRequestsException
    | CommonAwsError
  >;
  createCodeSigningConfig(
    input: CreateCodeSigningConfigRequest,
  ): Effect.Effect<
    CreateCodeSigningConfigResponse,
    InvalidParameterValueException | ServiceException | CommonAwsError
  >;
  createEventSourceMapping(
    input: CreateEventSourceMappingRequest,
  ): Effect.Effect<
    EventSourceMappingConfiguration,
    | InvalidParameterValueException
    | ResourceConflictException
    | ResourceNotFoundException
    | ServiceException
    | TooManyRequestsException
    | CommonAwsError
  >;
  createFunction(
    input: CreateFunctionRequest,
  ): Effect.Effect<
    FunctionConfiguration,
    | CodeSigningConfigNotFoundException
    | CodeStorageExceededException
    | CodeVerificationFailedException
    | InvalidCodeSignatureException
    | InvalidParameterValueException
    | ResourceConflictException
    | ResourceNotFoundException
    | ServiceException
    | TooManyRequestsException
    | CommonAwsError
  >;
  createFunctionUrlConfig(
    input: CreateFunctionUrlConfigRequest,
  ): Effect.Effect<
    CreateFunctionUrlConfigResponse,
    | InvalidParameterValueException
    | ResourceConflictException
    | ResourceNotFoundException
    | ServiceException
    | TooManyRequestsException
    | CommonAwsError
  >;
  deleteAlias(
    input: DeleteAliasRequest,
  ): Effect.Effect<
    {},
    | InvalidParameterValueException
    | ResourceConflictException
    | ServiceException
    | TooManyRequestsException
    | CommonAwsError
  >;
  deleteCodeSigningConfig(
    input: DeleteCodeSigningConfigRequest,
  ): Effect.Effect<
    DeleteCodeSigningConfigResponse,
    | InvalidParameterValueException
    | ResourceConflictException
    | ResourceNotFoundException
    | ServiceException
    | CommonAwsError
  >;
  deleteEventSourceMapping(
    input: DeleteEventSourceMappingRequest,
  ): Effect.Effect<
    EventSourceMappingConfiguration,
    | InvalidParameterValueException
    | ResourceConflictException
    | ResourceInUseException
    | ResourceNotFoundException
    | ServiceException
    | TooManyRequestsException
    | CommonAwsError
  >;
  deleteFunction(
    input: DeleteFunctionRequest,
  ): Effect.Effect<
    {},
    | InvalidParameterValueException
    | ResourceConflictException
    | ResourceNotFoundException
    | ServiceException
    | TooManyRequestsException
    | CommonAwsError
  >;
  deleteFunctionCodeSigningConfig(
    input: DeleteFunctionCodeSigningConfigRequest,
  ): Effect.Effect<
    {},
    | CodeSigningConfigNotFoundException
    | InvalidParameterValueException
    | ResourceConflictException
    | ResourceNotFoundException
    | ServiceException
    | TooManyRequestsException
    | CommonAwsError
  >;
  deleteFunctionConcurrency(
    input: DeleteFunctionConcurrencyRequest,
  ): Effect.Effect<
    {},
    | InvalidParameterValueException
    | ResourceConflictException
    | ResourceNotFoundException
    | ServiceException
    | TooManyRequestsException
    | CommonAwsError
  >;
  deleteFunctionEventInvokeConfig(
    input: DeleteFunctionEventInvokeConfigRequest,
  ): Effect.Effect<
    {},
    | InvalidParameterValueException
    | ResourceConflictException
    | ResourceNotFoundException
    | ServiceException
    | TooManyRequestsException
    | CommonAwsError
  >;
  deleteFunctionUrlConfig(
    input: DeleteFunctionUrlConfigRequest,
  ): Effect.Effect<
    {},
    | ResourceConflictException
    | ResourceNotFoundException
    | ServiceException
    | TooManyRequestsException
    | CommonAwsError
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
    | InvalidParameterValueException
    | ResourceConflictException
    | ResourceNotFoundException
    | ServiceException
    | TooManyRequestsException
    | CommonAwsError
  >;
  getAccountSettings(
    input: GetAccountSettingsRequest,
  ): Effect.Effect<
    GetAccountSettingsResponse,
    ServiceException | TooManyRequestsException | CommonAwsError
  >;
  getAlias(
    input: GetAliasRequest,
  ): Effect.Effect<
    AliasConfiguration,
    | InvalidParameterValueException
    | ResourceNotFoundException
    | ServiceException
    | TooManyRequestsException
    | CommonAwsError
  >;
  getCodeSigningConfig(
    input: GetCodeSigningConfigRequest,
  ): Effect.Effect<
    GetCodeSigningConfigResponse,
    | InvalidParameterValueException
    | ResourceNotFoundException
    | ServiceException
    | CommonAwsError
  >;
  getEventSourceMapping(
    input: GetEventSourceMappingRequest,
  ): Effect.Effect<
    EventSourceMappingConfiguration,
    | InvalidParameterValueException
    | ResourceNotFoundException
    | ServiceException
    | TooManyRequestsException
    | CommonAwsError
  >;
  getFunction(
    input: GetFunctionRequest,
  ): Effect.Effect<
    GetFunctionResponse,
    | InvalidParameterValueException
    | ResourceNotFoundException
    | ServiceException
    | TooManyRequestsException
    | CommonAwsError
  >;
  getFunctionCodeSigningConfig(
    input: GetFunctionCodeSigningConfigRequest,
  ): Effect.Effect<
    GetFunctionCodeSigningConfigResponse,
    | InvalidParameterValueException
    | ResourceNotFoundException
    | ServiceException
    | TooManyRequestsException
    | CommonAwsError
  >;
  getFunctionConcurrency(
    input: GetFunctionConcurrencyRequest,
  ): Effect.Effect<
    GetFunctionConcurrencyResponse,
    | InvalidParameterValueException
    | ResourceNotFoundException
    | ServiceException
    | TooManyRequestsException
    | CommonAwsError
  >;
  getFunctionConfiguration(
    input: GetFunctionConfigurationRequest,
  ): Effect.Effect<
    FunctionConfiguration,
    | InvalidParameterValueException
    | ResourceNotFoundException
    | ServiceException
    | TooManyRequestsException
    | CommonAwsError
  >;
  getFunctionEventInvokeConfig(
    input: GetFunctionEventInvokeConfigRequest,
  ): Effect.Effect<
    FunctionEventInvokeConfig,
    | InvalidParameterValueException
    | ResourceNotFoundException
    | ServiceException
    | TooManyRequestsException
    | CommonAwsError
  >;
  getFunctionRecursionConfig(
    input: GetFunctionRecursionConfigRequest,
  ): Effect.Effect<
    GetFunctionRecursionConfigResponse,
    | InvalidParameterValueException
    | ResourceNotFoundException
    | ServiceException
    | TooManyRequestsException
    | CommonAwsError
  >;
  getFunctionUrlConfig(
    input: GetFunctionUrlConfigRequest,
  ): Effect.Effect<
    GetFunctionUrlConfigResponse,
    | InvalidParameterValueException
    | ResourceNotFoundException
    | ServiceException
    | TooManyRequestsException
    | CommonAwsError
  >;
  getLayerVersion(
    input: GetLayerVersionRequest,
  ): Effect.Effect<
    GetLayerVersionResponse,
    | InvalidParameterValueException
    | ResourceNotFoundException
    | ServiceException
    | TooManyRequestsException
    | CommonAwsError
  >;
  getLayerVersionByArn(
    input: GetLayerVersionByArnRequest,
  ): Effect.Effect<
    GetLayerVersionResponse,
    | InvalidParameterValueException
    | ResourceNotFoundException
    | ServiceException
    | TooManyRequestsException
    | CommonAwsError
  >;
  getLayerVersionPolicy(
    input: GetLayerVersionPolicyRequest,
  ): Effect.Effect<
    GetLayerVersionPolicyResponse,
    | InvalidParameterValueException
    | ResourceNotFoundException
    | ServiceException
    | TooManyRequestsException
    | CommonAwsError
  >;
  getPolicy(
    input: GetPolicyRequest,
  ): Effect.Effect<
    GetPolicyResponse,
    | InvalidParameterValueException
    | ResourceNotFoundException
    | ServiceException
    | TooManyRequestsException
    | CommonAwsError
  >;
  getProvisionedConcurrencyConfig(
    input: GetProvisionedConcurrencyConfigRequest,
  ): Effect.Effect<
    GetProvisionedConcurrencyConfigResponse,
    | InvalidParameterValueException
    | ProvisionedConcurrencyConfigNotFoundException
    | ResourceNotFoundException
    | ServiceException
    | TooManyRequestsException
    | CommonAwsError
  >;
  getRuntimeManagementConfig(
    input: GetRuntimeManagementConfigRequest,
  ): Effect.Effect<
    GetRuntimeManagementConfigResponse,
    | InvalidParameterValueException
    | ResourceNotFoundException
    | ServiceException
    | TooManyRequestsException
    | CommonAwsError
  >;
  invoke(
    input: InvocationRequest,
  ): Effect.Effect<
    InvocationResponse,
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
    | CommonAwsError
  >;
  invokeAsync(
    input: InvokeAsyncRequest,
  ): Effect.Effect<
    InvokeAsyncResponse,
    | InvalidRequestContentException
    | InvalidRuntimeException
    | ResourceConflictException
    | ResourceNotFoundException
    | ServiceException
    | CommonAwsError
  >;
  invokeWithResponseStream(
    input: InvokeWithResponseStreamRequest,
  ): Effect.Effect<
    InvokeWithResponseStreamResponse,
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
    | CommonAwsError
  >;
  listAliases(
    input: ListAliasesRequest,
  ): Effect.Effect<
    ListAliasesResponse,
    | InvalidParameterValueException
    | ResourceNotFoundException
    | ServiceException
    | TooManyRequestsException
    | CommonAwsError
  >;
  listCodeSigningConfigs(
    input: ListCodeSigningConfigsRequest,
  ): Effect.Effect<
    ListCodeSigningConfigsResponse,
    InvalidParameterValueException | ServiceException | CommonAwsError
  >;
  listEventSourceMappings(
    input: ListEventSourceMappingsRequest,
  ): Effect.Effect<
    ListEventSourceMappingsResponse,
    | InvalidParameterValueException
    | ResourceNotFoundException
    | ServiceException
    | TooManyRequestsException
    | CommonAwsError
  >;
  listFunctionEventInvokeConfigs(
    input: ListFunctionEventInvokeConfigsRequest,
  ): Effect.Effect<
    ListFunctionEventInvokeConfigsResponse,
    | InvalidParameterValueException
    | ResourceNotFoundException
    | ServiceException
    | TooManyRequestsException
    | CommonAwsError
  >;
  listFunctions(
    input: ListFunctionsRequest,
  ): Effect.Effect<
    ListFunctionsResponse,
    | InvalidParameterValueException
    | ServiceException
    | TooManyRequestsException
    | CommonAwsError
  >;
  listFunctionsByCodeSigningConfig(
    input: ListFunctionsByCodeSigningConfigRequest,
  ): Effect.Effect<
    ListFunctionsByCodeSigningConfigResponse,
    | InvalidParameterValueException
    | ResourceNotFoundException
    | ServiceException
    | CommonAwsError
  >;
  listFunctionUrlConfigs(
    input: ListFunctionUrlConfigsRequest,
  ): Effect.Effect<
    ListFunctionUrlConfigsResponse,
    | InvalidParameterValueException
    | ResourceNotFoundException
    | ServiceException
    | TooManyRequestsException
    | CommonAwsError
  >;
  listLayers(
    input: ListLayersRequest,
  ): Effect.Effect<
    ListLayersResponse,
    | InvalidParameterValueException
    | ServiceException
    | TooManyRequestsException
    | CommonAwsError
  >;
  listLayerVersions(
    input: ListLayerVersionsRequest,
  ): Effect.Effect<
    ListLayerVersionsResponse,
    | InvalidParameterValueException
    | ResourceNotFoundException
    | ServiceException
    | TooManyRequestsException
    | CommonAwsError
  >;
  listProvisionedConcurrencyConfigs(
    input: ListProvisionedConcurrencyConfigsRequest,
  ): Effect.Effect<
    ListProvisionedConcurrencyConfigsResponse,
    | InvalidParameterValueException
    | ResourceNotFoundException
    | ServiceException
    | TooManyRequestsException
    | CommonAwsError
  >;
  listTags(
    input: ListTagsRequest,
  ): Effect.Effect<
    ListTagsResponse,
    | InvalidParameterValueException
    | ResourceNotFoundException
    | ServiceException
    | TooManyRequestsException
    | CommonAwsError
  >;
  listVersionsByFunction(
    input: ListVersionsByFunctionRequest,
  ): Effect.Effect<
    ListVersionsByFunctionResponse,
    | InvalidParameterValueException
    | ResourceNotFoundException
    | ServiceException
    | TooManyRequestsException
    | CommonAwsError
  >;
  publishLayerVersion(
    input: PublishLayerVersionRequest,
  ): Effect.Effect<
    PublishLayerVersionResponse,
    | CodeStorageExceededException
    | InvalidParameterValueException
    | ResourceNotFoundException
    | ServiceException
    | TooManyRequestsException
    | CommonAwsError
  >;
  publishVersion(
    input: PublishVersionRequest,
  ): Effect.Effect<
    FunctionConfiguration,
    | CodeStorageExceededException
    | InvalidParameterValueException
    | PreconditionFailedException
    | ResourceConflictException
    | ResourceNotFoundException
    | ServiceException
    | TooManyRequestsException
    | CommonAwsError
  >;
  putFunctionCodeSigningConfig(
    input: PutFunctionCodeSigningConfigRequest,
  ): Effect.Effect<
    PutFunctionCodeSigningConfigResponse,
    | CodeSigningConfigNotFoundException
    | InvalidParameterValueException
    | ResourceConflictException
    | ResourceNotFoundException
    | ServiceException
    | TooManyRequestsException
    | CommonAwsError
  >;
  putFunctionConcurrency(
    input: PutFunctionConcurrencyRequest,
  ): Effect.Effect<
    Concurrency,
    | InvalidParameterValueException
    | ResourceConflictException
    | ResourceNotFoundException
    | ServiceException
    | TooManyRequestsException
    | CommonAwsError
  >;
  putFunctionEventInvokeConfig(
    input: PutFunctionEventInvokeConfigRequest,
  ): Effect.Effect<
    FunctionEventInvokeConfig,
    | InvalidParameterValueException
    | ResourceConflictException
    | ResourceNotFoundException
    | ServiceException
    | TooManyRequestsException
    | CommonAwsError
  >;
  putFunctionRecursionConfig(
    input: PutFunctionRecursionConfigRequest,
  ): Effect.Effect<
    PutFunctionRecursionConfigResponse,
    | InvalidParameterValueException
    | ResourceConflictException
    | ResourceNotFoundException
    | ServiceException
    | TooManyRequestsException
    | CommonAwsError
  >;
  putProvisionedConcurrencyConfig(
    input: PutProvisionedConcurrencyConfigRequest,
  ): Effect.Effect<
    PutProvisionedConcurrencyConfigResponse,
    | InvalidParameterValueException
    | ResourceConflictException
    | ResourceNotFoundException
    | ServiceException
    | TooManyRequestsException
    | CommonAwsError
  >;
  putRuntimeManagementConfig(
    input: PutRuntimeManagementConfigRequest,
  ): Effect.Effect<
    PutRuntimeManagementConfigResponse,
    | InvalidParameterValueException
    | ResourceConflictException
    | ResourceNotFoundException
    | ServiceException
    | TooManyRequestsException
    | CommonAwsError
  >;
  removeLayerVersionPermission(
    input: RemoveLayerVersionPermissionRequest,
  ): Effect.Effect<
    {},
    | InvalidParameterValueException
    | PreconditionFailedException
    | ResourceNotFoundException
    | ServiceException
    | TooManyRequestsException
    | CommonAwsError
  >;
  removePermission(
    input: RemovePermissionRequest,
  ): Effect.Effect<
    {},
    | InvalidParameterValueException
    | PreconditionFailedException
    | ResourceNotFoundException
    | ServiceException
    | TooManyRequestsException
    | CommonAwsError
  >;
  tagResource(
    input: TagResourceRequest,
  ): Effect.Effect<
    {},
    | InvalidParameterValueException
    | ResourceConflictException
    | ResourceNotFoundException
    | ServiceException
    | TooManyRequestsException
    | CommonAwsError
  >;
  untagResource(
    input: UntagResourceRequest,
  ): Effect.Effect<
    {},
    | InvalidParameterValueException
    | ResourceConflictException
    | ResourceNotFoundException
    | ServiceException
    | TooManyRequestsException
    | CommonAwsError
  >;
  updateAlias(
    input: UpdateAliasRequest,
  ): Effect.Effect<
    AliasConfiguration,
    | InvalidParameterValueException
    | PreconditionFailedException
    | ResourceConflictException
    | ResourceNotFoundException
    | ServiceException
    | TooManyRequestsException
    | CommonAwsError
  >;
  updateCodeSigningConfig(
    input: UpdateCodeSigningConfigRequest,
  ): Effect.Effect<
    UpdateCodeSigningConfigResponse,
    | InvalidParameterValueException
    | ResourceNotFoundException
    | ServiceException
    | CommonAwsError
  >;
  updateEventSourceMapping(
    input: UpdateEventSourceMappingRequest,
  ): Effect.Effect<
    EventSourceMappingConfiguration,
    | InvalidParameterValueException
    | ResourceConflictException
    | ResourceInUseException
    | ResourceNotFoundException
    | ServiceException
    | TooManyRequestsException
    | CommonAwsError
  >;
  updateFunctionCode(
    input: UpdateFunctionCodeRequest,
  ): Effect.Effect<
    FunctionConfiguration,
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
    | CommonAwsError
  >;
  updateFunctionConfiguration(
    input: UpdateFunctionConfigurationRequest,
  ): Effect.Effect<
    FunctionConfiguration,
    | CodeSigningConfigNotFoundException
    | CodeVerificationFailedException
    | InvalidCodeSignatureException
    | InvalidParameterValueException
    | PreconditionFailedException
    | ResourceConflictException
    | ResourceNotFoundException
    | ServiceException
    | TooManyRequestsException
    | CommonAwsError
  >;
  updateFunctionEventInvokeConfig(
    input: UpdateFunctionEventInvokeConfigRequest,
  ): Effect.Effect<
    FunctionEventInvokeConfig,
    | InvalidParameterValueException
    | ResourceConflictException
    | ResourceNotFoundException
    | ServiceException
    | TooManyRequestsException
    | CommonAwsError
  >;
  updateFunctionUrlConfig(
    input: UpdateFunctionUrlConfigRequest,
  ): Effect.Effect<
    UpdateFunctionUrlConfigResponse,
    | InvalidParameterValueException
    | ResourceConflictException
    | ResourceNotFoundException
    | ServiceException
    | TooManyRequestsException
    | CommonAwsError
  >;
}

export interface AccountLimit {
  TotalCodeSize?: number;
  CodeSizeUnzipped?: number;
  CodeSizeZipped?: number;
  ConcurrentExecutions?: number;
  UnreservedConcurrentExecutions?: number;
}
export interface AccountUsage {
  TotalCodeSize?: number;
  FunctionCount?: number;
}
export type Action = string;

export type AdditionalVersion = string;

export type AdditionalVersionWeights = Record<string, number>;
export interface AddLayerVersionPermissionRequest {
  LayerName: string;
  VersionNumber: number;
  StatementId: string;
  Action: string;
  Principal: string;
  OrganizationId?: string;
  RevisionId?: string;
}
export interface AddLayerVersionPermissionResponse {
  Statement?: string;
  RevisionId?: string;
}
export interface AddPermissionRequest {
  FunctionName: string;
  StatementId: string;
  Action: string;
  Principal: string;
  SourceArn?: string;
  SourceAccount?: string;
  EventSourceToken?: string;
  Qualifier?: string;
  RevisionId?: string;
  PrincipalOrgID?: string;
  FunctionUrlAuthType?: FunctionUrlAuthType;
}
export interface AddPermissionResponse {
  Statement?: string;
}
export type Alias = string;

export interface AliasConfiguration {
  AliasArn?: string;
  Name?: string;
  FunctionVersion?: string;
  Description?: string;
  RoutingConfig?: AliasRoutingConfiguration;
  RevisionId?: string;
}
export type AliasList = Array<AliasConfiguration>;
export interface AliasRoutingConfiguration {
  AdditionalVersionWeights?: Record<string, number>;
}
export type AllowCredentials = boolean;

export interface AllowedPublishers {
  SigningProfileVersionArns: Array<string>;
}
export type AllowMethodsList = Array<string>;
export type AllowOriginsList = Array<string>;
export interface AmazonManagedKafkaEventSourceConfig {
  ConsumerGroupId?: string;
  SchemaRegistryConfig?: KafkaSchemaRegistryConfig;
}
export type ApplicationLogLevel =
  | "Trace"
  | "Debug"
  | "Info"
  | "Warn"
  | "Error"
  | "Fatal";
export type Architecture = "x86_64" | "arm64";
export type ArchitecturesList = Array<Architecture>;
export type Arn = string;

export type BatchSize = number;

export type BisectBatchOnFunctionError = boolean;

export type Blob = Uint8Array | string;

export type BlobStream = Uint8Array | string;

export type LambdaBoolean = boolean;

export interface CodeSigningConfig {
  CodeSigningConfigId: string;
  CodeSigningConfigArn: string;
  Description?: string;
  AllowedPublishers: AllowedPublishers;
  CodeSigningPolicies: CodeSigningPolicies;
  LastModified: string;
}
export type CodeSigningConfigArn = string;

export type CodeSigningConfigId = string;

export type CodeSigningConfigList = Array<CodeSigningConfig>;
export declare class CodeSigningConfigNotFoundException extends EffectData.TaggedError(
  "CodeSigningConfigNotFoundException",
)<{
  readonly Type?: string;
  readonly Message?: string;
}> {}
export interface CodeSigningPolicies {
  UntrustedArtifactOnDeployment?: CodeSigningPolicy;
}
export type CodeSigningPolicy = "Warn" | "Enforce";
export declare class CodeStorageExceededException extends EffectData.TaggedError(
  "CodeStorageExceededException",
)<{
  readonly Type?: string;
  readonly message?: string;
}> {}
export declare class CodeVerificationFailedException extends EffectData.TaggedError(
  "CodeVerificationFailedException",
)<{
  readonly Type?: string;
  readonly Message?: string;
}> {}
export type CollectionName = string;

export type CompatibleArchitectures = Array<Architecture>;
export type CompatibleRuntimes = Array<Runtime>;
export interface Concurrency {
  ReservedConcurrentExecutions?: number;
}
export interface Cors {
  AllowCredentials?: boolean;
  AllowHeaders?: Array<string>;
  AllowMethods?: Array<string>;
  AllowOrigins?: Array<string>;
  ExposeHeaders?: Array<string>;
  MaxAge?: number;
}
export interface CreateAliasRequest {
  FunctionName: string;
  Name: string;
  FunctionVersion: string;
  Description?: string;
  RoutingConfig?: AliasRoutingConfiguration;
}
export interface CreateCodeSigningConfigRequest {
  Description?: string;
  AllowedPublishers: AllowedPublishers;
  CodeSigningPolicies?: CodeSigningPolicies;
  Tags?: Record<string, string>;
}
export interface CreateCodeSigningConfigResponse {
  CodeSigningConfig: CodeSigningConfig;
}
export interface CreateEventSourceMappingRequest {
  EventSourceArn?: string;
  FunctionName: string;
  Enabled?: boolean;
  BatchSize?: number;
  FilterCriteria?: FilterCriteria;
  MaximumBatchingWindowInSeconds?: number;
  ParallelizationFactor?: number;
  StartingPosition?: EventSourcePosition;
  StartingPositionTimestamp?: Date | string;
  DestinationConfig?: DestinationConfig;
  MaximumRecordAgeInSeconds?: number;
  BisectBatchOnFunctionError?: boolean;
  MaximumRetryAttempts?: number;
  Tags?: Record<string, string>;
  TumblingWindowInSeconds?: number;
  Topics?: Array<string>;
  Queues?: Array<string>;
  SourceAccessConfigurations?: Array<SourceAccessConfiguration>;
  SelfManagedEventSource?: SelfManagedEventSource;
  FunctionResponseTypes?: Array<FunctionResponseType>;
  AmazonManagedKafkaEventSourceConfig?: AmazonManagedKafkaEventSourceConfig;
  SelfManagedKafkaEventSourceConfig?: SelfManagedKafkaEventSourceConfig;
  ScalingConfig?: ScalingConfig;
  DocumentDBEventSourceConfig?: DocumentDBEventSourceConfig;
  KMSKeyArn?: string;
  MetricsConfig?: EventSourceMappingMetricsConfig;
  ProvisionedPollerConfig?: ProvisionedPollerConfig;
}
export interface CreateFunctionRequest {
  FunctionName: string;
  Runtime?: Runtime;
  Role: string;
  Handler?: string;
  Code: FunctionCode;
  Description?: string;
  Timeout?: number;
  MemorySize?: number;
  Publish?: boolean;
  VpcConfig?: VpcConfig;
  PackageType?: PackageType;
  DeadLetterConfig?: DeadLetterConfig;
  Environment?: Environment;
  KMSKeyArn?: string;
  TracingConfig?: TracingConfig;
  Tags?: Record<string, string>;
  Layers?: Array<string>;
  FileSystemConfigs?: Array<FileSystemConfig>;
  ImageConfig?: ImageConfig;
  CodeSigningConfigArn?: string;
  Architectures?: Array<Architecture>;
  EphemeralStorage?: EphemeralStorage;
  SnapStart?: SnapStart;
  LoggingConfig?: LoggingConfig;
}
export interface CreateFunctionUrlConfigRequest {
  FunctionName: string;
  Qualifier?: string;
  AuthType: FunctionUrlAuthType;
  Cors?: Cors;
  InvokeMode?: InvokeMode;
}
export interface CreateFunctionUrlConfigResponse {
  FunctionUrl: string;
  FunctionArn: string;
  AuthType: FunctionUrlAuthType;
  Cors?: Cors;
  CreationTime: string;
  InvokeMode?: InvokeMode;
}
export type DatabaseName = string;

export type LambdaDate = Date | string;

export interface DeadLetterConfig {
  TargetArn?: string;
}
export interface DeleteAliasRequest {
  FunctionName: string;
  Name: string;
}
export interface DeleteCodeSigningConfigRequest {
  CodeSigningConfigArn: string;
}
export interface DeleteCodeSigningConfigResponse {}
export interface DeleteEventSourceMappingRequest {
  UUID: string;
}
export interface DeleteFunctionCodeSigningConfigRequest {
  FunctionName: string;
}
export interface DeleteFunctionConcurrencyRequest {
  FunctionName: string;
}
export interface DeleteFunctionEventInvokeConfigRequest {
  FunctionName: string;
  Qualifier?: string;
}
export interface DeleteFunctionRequest {
  FunctionName: string;
  Qualifier?: string;
}
export interface DeleteFunctionUrlConfigRequest {
  FunctionName: string;
  Qualifier?: string;
}
export interface DeleteLayerVersionRequest {
  LayerName: string;
  VersionNumber: number;
}
export interface DeleteProvisionedConcurrencyConfigRequest {
  FunctionName: string;
  Qualifier: string;
}
export type Description = string;

export type DestinationArn = string;

export interface DestinationConfig {
  OnSuccess?: OnSuccess;
  OnFailure?: OnFailure;
}
export interface DocumentDBEventSourceConfig {
  DatabaseName?: string;
  CollectionName?: string;
  FullDocument?: FullDocument;
}
export declare class EC2AccessDeniedException extends EffectData.TaggedError(
  "EC2AccessDeniedException",
)<{
  readonly Type?: string;
  readonly Message?: string;
}> {}
export declare class EC2ThrottledException extends EffectData.TaggedError(
  "EC2ThrottledException",
)<{
  readonly Type?: string;
  readonly Message?: string;
}> {}
export declare class EC2UnexpectedException extends EffectData.TaggedError(
  "EC2UnexpectedException",
)<{
  readonly Type?: string;
  readonly Message?: string;
  readonly EC2ErrorCode?: string;
}> {}
export declare class EFSIOException extends EffectData.TaggedError(
  "EFSIOException",
)<{
  readonly Type?: string;
  readonly Message?: string;
}> {}
export declare class EFSMountConnectivityException extends EffectData.TaggedError(
  "EFSMountConnectivityException",
)<{
  readonly Type?: string;
  readonly Message?: string;
}> {}
export declare class EFSMountFailureException extends EffectData.TaggedError(
  "EFSMountFailureException",
)<{
  readonly Type?: string;
  readonly Message?: string;
}> {}
export declare class EFSMountTimeoutException extends EffectData.TaggedError(
  "EFSMountTimeoutException",
)<{
  readonly Type?: string;
  readonly Message?: string;
}> {}
export type Enabled = boolean;

export type Endpoint = string;

export type EndpointLists = Array<string>;
export type Endpoints = Record<EndPointType, Array<string>>;
export type EndPointType = "KAFKA_BOOTSTRAP_SERVERS";
export declare class ENILimitReachedException extends EffectData.TaggedError(
  "ENILimitReachedException",
)<{
  readonly Type?: string;
  readonly Message?: string;
}> {}
export interface Environment {
  Variables?: Record<string, string>;
}
export interface EnvironmentError {
  ErrorCode?: string;
  Message?: string;
}
export interface EnvironmentResponse {
  Variables?: Record<string, string>;
  Error?: EnvironmentError;
}
export type EnvironmentVariableName = string;

export type EnvironmentVariables = Record<string, string>;
export type EnvironmentVariableValue = string;

export interface EphemeralStorage {
  Size: number;
}
export type EphemeralStorageSize = number;

export type EventSourceMappingArn = string;

export interface EventSourceMappingConfiguration {
  UUID?: string;
  StartingPosition?: EventSourcePosition;
  StartingPositionTimestamp?: Date | string;
  BatchSize?: number;
  MaximumBatchingWindowInSeconds?: number;
  ParallelizationFactor?: number;
  EventSourceArn?: string;
  FilterCriteria?: FilterCriteria;
  FunctionArn?: string;
  LastModified?: Date | string;
  LastProcessingResult?: string;
  State?: string;
  StateTransitionReason?: string;
  DestinationConfig?: DestinationConfig;
  Topics?: Array<string>;
  Queues?: Array<string>;
  SourceAccessConfigurations?: Array<SourceAccessConfiguration>;
  SelfManagedEventSource?: SelfManagedEventSource;
  MaximumRecordAgeInSeconds?: number;
  BisectBatchOnFunctionError?: boolean;
  MaximumRetryAttempts?: number;
  TumblingWindowInSeconds?: number;
  FunctionResponseTypes?: Array<FunctionResponseType>;
  AmazonManagedKafkaEventSourceConfig?: AmazonManagedKafkaEventSourceConfig;
  SelfManagedKafkaEventSourceConfig?: SelfManagedKafkaEventSourceConfig;
  ScalingConfig?: ScalingConfig;
  DocumentDBEventSourceConfig?: DocumentDBEventSourceConfig;
  KMSKeyArn?: string;
  FilterCriteriaError?: FilterCriteriaError;
  EventSourceMappingArn?: string;
  MetricsConfig?: EventSourceMappingMetricsConfig;
  ProvisionedPollerConfig?: ProvisionedPollerConfig;
}
export type EventSourceMappingMetric = "EventCount";
export type EventSourceMappingMetricList = Array<EventSourceMappingMetric>;
export interface EventSourceMappingMetricsConfig {
  Metrics?: Array<EventSourceMappingMetric>;
}
export type EventSourceMappingsList = Array<EventSourceMappingConfiguration>;
export type EventSourcePosition = "TRIM_HORIZON" | "LATEST" | "AT_TIMESTAMP";
export type EventSourceToken = string;

export type FileSystemArn = string;

export interface FileSystemConfig {
  Arn: string;
  LocalMountPath: string;
}
export type FileSystemConfigList = Array<FileSystemConfig>;
export interface Filter {
  Pattern?: string;
}
export interface FilterCriteria {
  Filters?: Array<Filter>;
}
export interface FilterCriteriaError {
  ErrorCode?: string;
  Message?: string;
}
export type FilterCriteriaErrorCode = string;

export type FilterCriteriaErrorMessage = string;

export type FilterList = Array<Filter>;
export type FullDocument = "UpdateLookup" | "Default";
export type FunctionArn = string;

export type FunctionArnList = Array<string>;
export interface FunctionCode {
  ZipFile?: Uint8Array | string;
  S3Bucket?: string;
  S3Key?: string;
  S3ObjectVersion?: string;
  ImageUri?: string;
  SourceKMSKeyArn?: string;
}
export interface FunctionCodeLocation {
  RepositoryType?: string;
  Location?: string;
  ImageUri?: string;
  ResolvedImageUri?: string;
  SourceKMSKeyArn?: string;
}
export interface FunctionConfiguration {
  FunctionName?: string;
  FunctionArn?: string;
  Runtime?: Runtime;
  Role?: string;
  Handler?: string;
  CodeSize?: number;
  Description?: string;
  Timeout?: number;
  MemorySize?: number;
  LastModified?: string;
  CodeSha256?: string;
  Version?: string;
  VpcConfig?: VpcConfigResponse;
  DeadLetterConfig?: DeadLetterConfig;
  Environment?: EnvironmentResponse;
  KMSKeyArn?: string;
  TracingConfig?: TracingConfigResponse;
  MasterArn?: string;
  RevisionId?: string;
  Layers?: Array<Layer>;
  State?: State;
  StateReason?: string;
  StateReasonCode?: StateReasonCode;
  LastUpdateStatus?: LastUpdateStatus;
  LastUpdateStatusReason?: string;
  LastUpdateStatusReasonCode?: LastUpdateStatusReasonCode;
  FileSystemConfigs?: Array<FileSystemConfig>;
  PackageType?: PackageType;
  ImageConfigResponse?: ImageConfigResponse;
  SigningProfileVersionArn?: string;
  SigningJobArn?: string;
  Architectures?: Array<Architecture>;
  EphemeralStorage?: EphemeralStorage;
  SnapStart?: SnapStartResponse;
  RuntimeVersionConfig?: RuntimeVersionConfig;
  LoggingConfig?: LoggingConfig;
}
export interface FunctionEventInvokeConfig {
  LastModified?: Date | string;
  FunctionArn?: string;
  MaximumRetryAttempts?: number;
  MaximumEventAgeInSeconds?: number;
  DestinationConfig?: DestinationConfig;
}
export type FunctionEventInvokeConfigList = Array<FunctionEventInvokeConfig>;
export type FunctionList = Array<FunctionConfiguration>;
export type FunctionName = string;

export type FunctionResponseType = "ReportBatchItemFailures";
export type FunctionResponseTypeList = Array<FunctionResponseType>;
export type FunctionUrl = string;

export type FunctionUrlAuthType = "NONE" | "AWS_IAM";
export interface FunctionUrlConfig {
  FunctionUrl: string;
  FunctionArn: string;
  CreationTime: string;
  LastModifiedTime: string;
  Cors?: Cors;
  AuthType: FunctionUrlAuthType;
  InvokeMode?: InvokeMode;
}
export type FunctionUrlConfigList = Array<FunctionUrlConfig>;
export type FunctionUrlQualifier = string;

export type FunctionVersion = "ALL";
export interface GetAccountSettingsRequest {}
export interface GetAccountSettingsResponse {
  AccountLimit?: AccountLimit;
  AccountUsage?: AccountUsage;
}
export interface GetAliasRequest {
  FunctionName: string;
  Name: string;
}
export interface GetCodeSigningConfigRequest {
  CodeSigningConfigArn: string;
}
export interface GetCodeSigningConfigResponse {
  CodeSigningConfig: CodeSigningConfig;
}
export interface GetEventSourceMappingRequest {
  UUID: string;
}
export interface GetFunctionCodeSigningConfigRequest {
  FunctionName: string;
}
export interface GetFunctionCodeSigningConfigResponse {
  CodeSigningConfigArn: string;
  FunctionName: string;
}
export interface GetFunctionConcurrencyRequest {
  FunctionName: string;
}
export interface GetFunctionConcurrencyResponse {
  ReservedConcurrentExecutions?: number;
}
export interface GetFunctionConfigurationRequest {
  FunctionName: string;
  Qualifier?: string;
}
export interface GetFunctionEventInvokeConfigRequest {
  FunctionName: string;
  Qualifier?: string;
}
export interface GetFunctionRecursionConfigRequest {
  FunctionName: string;
}
export interface GetFunctionRecursionConfigResponse {
  RecursiveLoop?: RecursiveLoop;
}
export interface GetFunctionRequest {
  FunctionName: string;
  Qualifier?: string;
}
export interface GetFunctionResponse {
  Configuration?: FunctionConfiguration;
  Code?: FunctionCodeLocation;
  Tags?: Record<string, string>;
  TagsError?: TagsError;
  Concurrency?: Concurrency;
}
export interface GetFunctionUrlConfigRequest {
  FunctionName: string;
  Qualifier?: string;
}
export interface GetFunctionUrlConfigResponse {
  FunctionUrl: string;
  FunctionArn: string;
  AuthType: FunctionUrlAuthType;
  Cors?: Cors;
  CreationTime: string;
  LastModifiedTime: string;
  InvokeMode?: InvokeMode;
}
export interface GetLayerVersionByArnRequest {
  Arn: string;
}
export interface GetLayerVersionPolicyRequest {
  LayerName: string;
  VersionNumber: number;
}
export interface GetLayerVersionPolicyResponse {
  Policy?: string;
  RevisionId?: string;
}
export interface GetLayerVersionRequest {
  LayerName: string;
  VersionNumber: number;
}
export interface GetLayerVersionResponse {
  Content?: LayerVersionContentOutput;
  LayerArn?: string;
  LayerVersionArn?: string;
  Description?: string;
  CreatedDate?: string;
  Version?: number;
  CompatibleRuntimes?: Array<Runtime>;
  LicenseInfo?: string;
  CompatibleArchitectures?: Array<Architecture>;
}
export interface GetPolicyRequest {
  FunctionName: string;
  Qualifier?: string;
}
export interface GetPolicyResponse {
  Policy?: string;
  RevisionId?: string;
}
export interface GetProvisionedConcurrencyConfigRequest {
  FunctionName: string;
  Qualifier: string;
}
export interface GetProvisionedConcurrencyConfigResponse {
  RequestedProvisionedConcurrentExecutions?: number;
  AvailableProvisionedConcurrentExecutions?: number;
  AllocatedProvisionedConcurrentExecutions?: number;
  Status?: ProvisionedConcurrencyStatusEnum;
  StatusReason?: string;
  LastModified?: string;
}
export interface GetRuntimeManagementConfigRequest {
  FunctionName: string;
  Qualifier?: string;
}
export interface GetRuntimeManagementConfigResponse {
  UpdateRuntimeOn?: UpdateRuntimeOn;
  RuntimeVersionArn?: string;
  FunctionArn?: string;
}
export type Handler = string;

export type Header = string;

export type HeadersList = Array<string>;
export type HttpStatus = number;

export interface ImageConfig {
  EntryPoint?: Array<string>;
  Command?: Array<string>;
  WorkingDirectory?: string;
}
export interface ImageConfigError {
  ErrorCode?: string;
  Message?: string;
}
export interface ImageConfigResponse {
  ImageConfig?: ImageConfig;
  Error?: ImageConfigError;
}
export type Integer = number;

export declare class InvalidCodeSignatureException extends EffectData.TaggedError(
  "InvalidCodeSignatureException",
)<{
  readonly Type?: string;
  readonly Message?: string;
}> {}
export declare class InvalidParameterValueException extends EffectData.TaggedError(
  "InvalidParameterValueException",
)<{
  readonly Type?: string;
  readonly message?: string;
}> {}
export declare class InvalidRequestContentException extends EffectData.TaggedError(
  "InvalidRequestContentException",
)<{
  readonly Type?: string;
  readonly message?: string;
}> {}
export declare class InvalidRuntimeException extends EffectData.TaggedError(
  "InvalidRuntimeException",
)<{
  readonly Type?: string;
  readonly Message?: string;
}> {}
export declare class InvalidSecurityGroupIDException extends EffectData.TaggedError(
  "InvalidSecurityGroupIDException",
)<{
  readonly Type?: string;
  readonly Message?: string;
}> {}
export declare class InvalidSubnetIDException extends EffectData.TaggedError(
  "InvalidSubnetIDException",
)<{
  readonly Type?: string;
  readonly Message?: string;
}> {}
export declare class InvalidZipFileException extends EffectData.TaggedError(
  "InvalidZipFileException",
)<{
  readonly Type?: string;
  readonly Message?: string;
}> {}
export interface InvocationRequest {
  FunctionName: string;
  InvocationType?: InvocationType;
  LogType?: LogType;
  ClientContext?: string;
  Payload?: Uint8Array | string;
  Qualifier?: string;
}
export interface InvocationResponse {
  StatusCode?: number;
  FunctionError?: string;
  LogResult?: string;
  Payload?: Uint8Array | string;
  ExecutedVersion?: string;
}
export type InvocationType = "Event" | "RequestResponse" | "DryRun";
export interface InvokeAsyncRequest {
  FunctionName: string;
  InvokeArgs: Uint8Array | string | Buffer | Stream.Stream<Uint8Array>;
}
export interface InvokeAsyncResponse {
  Status?: number;
}
export type InvokeMode = "BUFFERED" | "RESPONSE_STREAM";
export interface InvokeResponseStreamUpdate {
  Payload?: Uint8Array | string;
}
export interface InvokeWithResponseStreamCompleteEvent {
  ErrorCode?: string;
  ErrorDetails?: string;
  LogResult?: string;
}
export interface InvokeWithResponseStreamRequest {
  FunctionName: string;
  InvocationType?: ResponseStreamingInvocationType;
  LogType?: LogType;
  ClientContext?: string;
  Qualifier?: string;
  Payload?: Uint8Array | string;
}
export interface InvokeWithResponseStreamResponse {
  StatusCode?: number;
  ExecutedVersion?: string;
  EventStream?: InvokeWithResponseStreamResponseEvent;
  ResponseStreamContentType?: string;
}
interface _InvokeWithResponseStreamResponseEvent {
  PayloadChunk?: InvokeResponseStreamUpdate;
  InvokeComplete?: InvokeWithResponseStreamCompleteEvent;
}

export type InvokeWithResponseStreamResponseEvent =
  | (_InvokeWithResponseStreamResponseEvent & {
      PayloadChunk: InvokeResponseStreamUpdate;
    })
  | (_InvokeWithResponseStreamResponseEvent & {
      InvokeComplete: InvokeWithResponseStreamCompleteEvent;
    });
export interface KafkaSchemaRegistryAccessConfig {
  Type?: KafkaSchemaRegistryAuthType;
  URI?: string;
}
export type KafkaSchemaRegistryAccessConfigList =
  Array<KafkaSchemaRegistryAccessConfig>;
export type KafkaSchemaRegistryAuthType =
  | "BASIC_AUTH"
  | "CLIENT_CERTIFICATE_TLS_AUTH"
  | "SERVER_ROOT_CA_CERTIFICATE";
export interface KafkaSchemaRegistryConfig {
  SchemaRegistryURI?: string;
  EventRecordFormat?: SchemaRegistryEventRecordFormat;
  AccessConfigs?: Array<KafkaSchemaRegistryAccessConfig>;
  SchemaValidationConfigs?: Array<KafkaSchemaValidationConfig>;
}
export type KafkaSchemaValidationAttribute = "KEY" | "VALUE";
export interface KafkaSchemaValidationConfig {
  Attribute?: KafkaSchemaValidationAttribute;
}
export type KafkaSchemaValidationConfigList =
  Array<KafkaSchemaValidationConfig>;
export declare class KMSAccessDeniedException extends EffectData.TaggedError(
  "KMSAccessDeniedException",
)<{
  readonly Type?: string;
  readonly Message?: string;
}> {}
export declare class KMSDisabledException extends EffectData.TaggedError(
  "KMSDisabledException",
)<{
  readonly Type?: string;
  readonly Message?: string;
}> {}
export declare class KMSInvalidStateException extends EffectData.TaggedError(
  "KMSInvalidStateException",
)<{
  readonly Type?: string;
  readonly Message?: string;
}> {}
export type KMSKeyArn = string;

export declare class KMSNotFoundException extends EffectData.TaggedError(
  "KMSNotFoundException",
)<{
  readonly Type?: string;
  readonly Message?: string;
}> {}
export type LastUpdateStatus = "Successful" | "Failed" | "InProgress";
export type LastUpdateStatusReason = string;

export type LastUpdateStatusReasonCode =
  | "EniLimitExceeded"
  | "InsufficientRolePermissions"
  | "InvalidConfiguration"
  | "InternalError"
  | "SubnetOutOfIPAddresses"
  | "InvalidSubnet"
  | "InvalidSecurityGroup"
  | "ImageDeleted"
  | "ImageAccessDenied"
  | "InvalidImage"
  | "KMSKeyAccessDenied"
  | "KMSKeyNotFound"
  | "InvalidStateKMSKey"
  | "DisabledKMSKey"
  | "EFSIOError"
  | "EFSMountConnectivityError"
  | "EFSMountFailure"
  | "EFSMountTimeout"
  | "InvalidRuntime"
  | "InvalidZipFileException"
  | "FunctionError";
export interface Layer {
  Arn?: string;
  CodeSize?: number;
  SigningProfileVersionArn?: string;
  SigningJobArn?: string;
}
export type LayerArn = string;

export type LayerList = Array<string>;
export type LayerName = string;

export type LayerPermissionAllowedAction = string;

export type LayerPermissionAllowedPrincipal = string;

export type LayersList = Array<LayersListItem>;
export interface LayersListItem {
  LayerName?: string;
  LayerArn?: string;
  LatestMatchingVersion?: LayerVersionsListItem;
}
export type LayersReferenceList = Array<Layer>;
export type LayerVersionArn = string;

export interface LayerVersionContentInput {
  S3Bucket?: string;
  S3Key?: string;
  S3ObjectVersion?: string;
  ZipFile?: Uint8Array | string;
}
export interface LayerVersionContentOutput {
  Location?: string;
  CodeSha256?: string;
  CodeSize?: number;
  SigningProfileVersionArn?: string;
  SigningJobArn?: string;
}
export type LayerVersionNumber = number;

export type LayerVersionsList = Array<LayerVersionsListItem>;
export interface LayerVersionsListItem {
  LayerVersionArn?: string;
  Version?: number;
  Description?: string;
  CreatedDate?: string;
  CompatibleRuntimes?: Array<Runtime>;
  LicenseInfo?: string;
  CompatibleArchitectures?: Array<Architecture>;
}
export type LicenseInfo = string;

export interface ListAliasesRequest {
  FunctionName: string;
  FunctionVersion?: string;
  Marker?: string;
  MaxItems?: number;
}
export interface ListAliasesResponse {
  NextMarker?: string;
  Aliases?: Array<AliasConfiguration>;
}
export interface ListCodeSigningConfigsRequest {
  Marker?: string;
  MaxItems?: number;
}
export interface ListCodeSigningConfigsResponse {
  NextMarker?: string;
  CodeSigningConfigs?: Array<CodeSigningConfig>;
}
export interface ListEventSourceMappingsRequest {
  EventSourceArn?: string;
  FunctionName?: string;
  Marker?: string;
  MaxItems?: number;
}
export interface ListEventSourceMappingsResponse {
  NextMarker?: string;
  EventSourceMappings?: Array<EventSourceMappingConfiguration>;
}
export interface ListFunctionEventInvokeConfigsRequest {
  FunctionName: string;
  Marker?: string;
  MaxItems?: number;
}
export interface ListFunctionEventInvokeConfigsResponse {
  FunctionEventInvokeConfigs?: Array<FunctionEventInvokeConfig>;
  NextMarker?: string;
}
export interface ListFunctionsByCodeSigningConfigRequest {
  CodeSigningConfigArn: string;
  Marker?: string;
  MaxItems?: number;
}
export interface ListFunctionsByCodeSigningConfigResponse {
  NextMarker?: string;
  FunctionArns?: Array<string>;
}
export interface ListFunctionsRequest {
  MasterRegion?: string;
  FunctionVersion?: FunctionVersion;
  Marker?: string;
  MaxItems?: number;
}
export interface ListFunctionsResponse {
  NextMarker?: string;
  Functions?: Array<FunctionConfiguration>;
}
export interface ListFunctionUrlConfigsRequest {
  FunctionName: string;
  Marker?: string;
  MaxItems?: number;
}
export interface ListFunctionUrlConfigsResponse {
  FunctionUrlConfigs: Array<FunctionUrlConfig>;
  NextMarker?: string;
}
export interface ListLayersRequest {
  CompatibleRuntime?: Runtime;
  Marker?: string;
  MaxItems?: number;
  CompatibleArchitecture?: Architecture;
}
export interface ListLayersResponse {
  NextMarker?: string;
  Layers?: Array<LayersListItem>;
}
export interface ListLayerVersionsRequest {
  CompatibleRuntime?: Runtime;
  LayerName: string;
  Marker?: string;
  MaxItems?: number;
  CompatibleArchitecture?: Architecture;
}
export interface ListLayerVersionsResponse {
  NextMarker?: string;
  LayerVersions?: Array<LayerVersionsListItem>;
}
export interface ListProvisionedConcurrencyConfigsRequest {
  FunctionName: string;
  Marker?: string;
  MaxItems?: number;
}
export interface ListProvisionedConcurrencyConfigsResponse {
  ProvisionedConcurrencyConfigs?: Array<ProvisionedConcurrencyConfigListItem>;
  NextMarker?: string;
}
export interface ListTagsRequest {
  Resource: string;
}
export interface ListTagsResponse {
  Tags?: Record<string, string>;
}
export interface ListVersionsByFunctionRequest {
  FunctionName: string;
  Marker?: string;
  MaxItems?: number;
}
export interface ListVersionsByFunctionResponse {
  NextMarker?: string;
  Versions?: Array<FunctionConfiguration>;
}
export type LocalMountPath = string;

export type LogFormat = "Json" | "Text";
export interface LoggingConfig {
  LogFormat?: LogFormat;
  ApplicationLogLevel?: ApplicationLogLevel;
  SystemLogLevel?: SystemLogLevel;
  LogGroup?: string;
}
export type LogGroup = string;

export type LogType = "None" | "Tail";
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
  Destination?: string;
}
export interface OnSuccess {
  Destination?: string;
}
export type OrganizationId = string;

export type Origin = string;

export type PackageType = "Zip" | "Image";
export type ParallelizationFactor = number;

export type Pattern = string;

export declare class PolicyLengthExceededException extends EffectData.TaggedError(
  "PolicyLengthExceededException",
)<{
  readonly Type?: string;
  readonly message?: string;
}> {}
export type PositiveInteger = number;

export declare class PreconditionFailedException extends EffectData.TaggedError(
  "PreconditionFailedException",
)<{
  readonly Type?: string;
  readonly message?: string;
}> {}
export type Principal = string;

export type PrincipalOrgID = string;

export type ProvisionedConcurrencyConfigList =
  Array<ProvisionedConcurrencyConfigListItem>;
export interface ProvisionedConcurrencyConfigListItem {
  FunctionArn?: string;
  RequestedProvisionedConcurrentExecutions?: number;
  AvailableProvisionedConcurrentExecutions?: number;
  AllocatedProvisionedConcurrentExecutions?: number;
  Status?: ProvisionedConcurrencyStatusEnum;
  StatusReason?: string;
  LastModified?: string;
}
export declare class ProvisionedConcurrencyConfigNotFoundException extends EffectData.TaggedError(
  "ProvisionedConcurrencyConfigNotFoundException",
)<{
  readonly Type?: string;
  readonly message?: string;
}> {}
export type ProvisionedConcurrencyStatusEnum =
  | "IN_PROGRESS"
  | "READY"
  | "FAILED";
export interface ProvisionedPollerConfig {
  MinimumPollers?: number;
  MaximumPollers?: number;
}
export interface PublishLayerVersionRequest {
  LayerName: string;
  Description?: string;
  Content: LayerVersionContentInput;
  CompatibleRuntimes?: Array<Runtime>;
  LicenseInfo?: string;
  CompatibleArchitectures?: Array<Architecture>;
}
export interface PublishLayerVersionResponse {
  Content?: LayerVersionContentOutput;
  LayerArn?: string;
  LayerVersionArn?: string;
  Description?: string;
  CreatedDate?: string;
  Version?: number;
  CompatibleRuntimes?: Array<Runtime>;
  LicenseInfo?: string;
  CompatibleArchitectures?: Array<Architecture>;
}
export interface PublishVersionRequest {
  FunctionName: string;
  CodeSha256?: string;
  Description?: string;
  RevisionId?: string;
}
export interface PutFunctionCodeSigningConfigRequest {
  CodeSigningConfigArn: string;
  FunctionName: string;
}
export interface PutFunctionCodeSigningConfigResponse {
  CodeSigningConfigArn: string;
  FunctionName: string;
}
export interface PutFunctionConcurrencyRequest {
  FunctionName: string;
  ReservedConcurrentExecutions: number;
}
export interface PutFunctionEventInvokeConfigRequest {
  FunctionName: string;
  Qualifier?: string;
  MaximumRetryAttempts?: number;
  MaximumEventAgeInSeconds?: number;
  DestinationConfig?: DestinationConfig;
}
export interface PutFunctionRecursionConfigRequest {
  FunctionName: string;
  RecursiveLoop: RecursiveLoop;
}
export interface PutFunctionRecursionConfigResponse {
  RecursiveLoop?: RecursiveLoop;
}
export interface PutProvisionedConcurrencyConfigRequest {
  FunctionName: string;
  Qualifier: string;
  ProvisionedConcurrentExecutions: number;
}
export interface PutProvisionedConcurrencyConfigResponse {
  RequestedProvisionedConcurrentExecutions?: number;
  AvailableProvisionedConcurrentExecutions?: number;
  AllocatedProvisionedConcurrentExecutions?: number;
  Status?: ProvisionedConcurrencyStatusEnum;
  StatusReason?: string;
  LastModified?: string;
}
export interface PutRuntimeManagementConfigRequest {
  FunctionName: string;
  Qualifier?: string;
  UpdateRuntimeOn: UpdateRuntimeOn;
  RuntimeVersionArn?: string;
}
export interface PutRuntimeManagementConfigResponse {
  UpdateRuntimeOn: UpdateRuntimeOn;
  FunctionArn: string;
  RuntimeVersionArn?: string;
}
export type Qualifier = string;

export type Queue = string;

export type Queues = Array<string>;
export declare class RecursiveInvocationException extends EffectData.TaggedError(
  "RecursiveInvocationException",
)<{
  readonly Type?: string;
  readonly Message?: string;
}> {}
export type RecursiveLoop = "Allow" | "Terminate";
export interface RemoveLayerVersionPermissionRequest {
  LayerName: string;
  VersionNumber: number;
  StatementId: string;
  RevisionId?: string;
}
export interface RemovePermissionRequest {
  FunctionName: string;
  StatementId: string;
  Qualifier?: string;
  RevisionId?: string;
}
export declare class RequestTooLargeException extends EffectData.TaggedError(
  "RequestTooLargeException",
)<{
  readonly Type?: string;
  readonly message?: string;
}> {}
export type ReservedConcurrentExecutions = number;

export type ResourceArn = string;

export declare class ResourceConflictException extends EffectData.TaggedError(
  "ResourceConflictException",
)<{
  readonly Type?: string;
  readonly message?: string;
}> {}
export declare class ResourceInUseException extends EffectData.TaggedError(
  "ResourceInUseException",
)<{
  readonly Type?: string;
  readonly Message?: string;
}> {}
export declare class ResourceNotFoundException extends EffectData.TaggedError(
  "ResourceNotFoundException",
)<{
  readonly Type?: string;
  readonly Message?: string;
}> {}
export declare class ResourceNotReadyException extends EffectData.TaggedError(
  "ResourceNotReadyException",
)<{
  readonly Type?: string;
  readonly message?: string;
}> {}
export type ResponseStreamingInvocationType = "RequestResponse" | "DryRun";
export type RoleArn = string;

export type Runtime =
  | "nodejs"
  | "nodejs43"
  | "nodejs610"
  | "nodejs810"
  | "nodejs10x"
  | "nodejs12x"
  | "nodejs14x"
  | "nodejs16x"
  | "java8"
  | "java8al2"
  | "java11"
  | "python27"
  | "python36"
  | "python37"
  | "python38"
  | "python39"
  | "dotnetcore10"
  | "dotnetcore20"
  | "dotnetcore21"
  | "dotnetcore31"
  | "dotnet6"
  | "dotnet8"
  | "nodejs43edge"
  | "go1x"
  | "ruby25"
  | "ruby27"
  | "provided"
  | "providedal2"
  | "nodejs18x"
  | "python310"
  | "java17"
  | "ruby32"
  | "ruby33"
  | "ruby34"
  | "python311"
  | "nodejs20x"
  | "providedal2023"
  | "python312"
  | "java21"
  | "python313"
  | "nodejs22x";
export type RuntimeVersionArn = string;

export interface RuntimeVersionConfig {
  RuntimeVersionArn?: string;
  Error?: RuntimeVersionError;
}
export interface RuntimeVersionError {
  ErrorCode?: string;
  Message?: string;
}
export type S3Bucket = string;

export type S3Key = string;

export type S3ObjectVersion = string;

export interface ScalingConfig {
  MaximumConcurrency?: number;
}
export type SchemaRegistryEventRecordFormat = "JSON" | "SOURCE";
export type SchemaRegistryUri = string;

export type SecurityGroupId = string;

export type SecurityGroupIds = Array<string>;
export interface SelfManagedEventSource {
  Endpoints?: Record<EndPointType, Array<string>>;
}
export interface SelfManagedKafkaEventSourceConfig {
  ConsumerGroupId?: string;
  SchemaRegistryConfig?: KafkaSchemaRegistryConfig;
}
export type SensitiveString = string;

export declare class ServiceException extends EffectData.TaggedError(
  "ServiceException",
)<{
  readonly Type?: string;
  readonly Message?: string;
}> {}
export type SigningProfileVersionArns = Array<string>;
export interface SnapStart {
  ApplyOn?: SnapStartApplyOn;
}
export type SnapStartApplyOn = "PublishedVersions" | "None";
export declare class SnapStartException extends EffectData.TaggedError(
  "SnapStartException",
)<{
  readonly Type?: string;
  readonly Message?: string;
}> {}
export declare class SnapStartNotReadyException extends EffectData.TaggedError(
  "SnapStartNotReadyException",
)<{
  readonly Type?: string;
  readonly Message?: string;
}> {}
export type SnapStartOptimizationStatus = "On" | "Off";
export interface SnapStartResponse {
  ApplyOn?: SnapStartApplyOn;
  OptimizationStatus?: SnapStartOptimizationStatus;
}
export declare class SnapStartTimeoutException extends EffectData.TaggedError(
  "SnapStartTimeoutException",
)<{
  readonly Type?: string;
  readonly Message?: string;
}> {}
export interface SourceAccessConfiguration {
  Type?: SourceAccessType;
  URI?: string;
}
export type SourceAccessConfigurations = Array<SourceAccessConfiguration>;
export type SourceAccessType =
  | "BASIC_AUTH"
  | "VPC_SUBNET"
  | "VPC_SECURITY_GROUP"
  | "SASL_SCRAM_512_AUTH"
  | "SASL_SCRAM_256_AUTH"
  | "VIRTUAL_HOST"
  | "CLIENT_CERTIFICATE_TLS_AUTH"
  | "SERVER_ROOT_CA_CERTIFICATE";
export type SourceOwner = string;

export type State = "Pending" | "Active" | "Inactive" | "Failed";
export type StatementId = string;

export type StateReason = string;

export type StateReasonCode =
  | "Idle"
  | "Creating"
  | "Restoring"
  | "EniLimitExceeded"
  | "InsufficientRolePermissions"
  | "InvalidConfiguration"
  | "InternalError"
  | "SubnetOutOfIPAddresses"
  | "InvalidSubnet"
  | "InvalidSecurityGroup"
  | "ImageDeleted"
  | "ImageAccessDenied"
  | "InvalidImage"
  | "KMSKeyAccessDenied"
  | "KMSKeyNotFound"
  | "InvalidStateKMSKey"
  | "DisabledKMSKey"
  | "EFSIOError"
  | "EFSMountConnectivityError"
  | "EFSMountFailure"
  | "EFSMountTimeout"
  | "InvalidRuntime"
  | "InvalidZipFileException"
  | "FunctionError";
export type LambdaString = string;

export type StringList = Array<string>;
export type SubnetId = string;

export type SubnetIds = Array<string>;
export declare class SubnetIPAddressLimitReachedException extends EffectData.TaggedError(
  "SubnetIPAddressLimitReachedException",
)<{
  readonly Type?: string;
  readonly Message?: string;
}> {}
export type SystemLogLevel = "Debug" | "Info" | "Warn";
export type TaggableResource = string;

export type TagKey = string;

export type TagKeyList = Array<string>;
export interface TagResourceRequest {
  Resource: string;
  Tags: Record<string, string>;
}
export type Tags = Record<string, string>;
export interface TagsError {
  ErrorCode: string;
  Message: string;
}
export type TagsErrorCode = string;

export type TagsErrorMessage = string;

export type TagValue = string;

export type ThrottleReason =
  | "ConcurrentInvocationLimitExceeded"
  | "FunctionInvocationRateLimitExceeded"
  | "ReservedFunctionConcurrentInvocationLimitExceeded"
  | "ReservedFunctionInvocationRateLimitExceeded"
  | "CallerRateLimitExceeded"
  | "ConcurrentSnapshotCreateLimitExceeded";
export type Timeout = number;

export type Timestamp = string;

export declare class TooManyRequestsException extends EffectData.TaggedError(
  "TooManyRequestsException",
)<{
  readonly retryAfterSeconds?: string;
  readonly Type?: string;
  readonly message?: string;
  readonly Reason?: ThrottleReason;
}> {}
export type Topic = string;

export type Topics = Array<string>;
export interface TracingConfig {
  Mode?: TracingMode;
}
export interface TracingConfigResponse {
  Mode?: TracingMode;
}
export type TracingMode = "Active" | "PassThrough";
export type TumblingWindowInSeconds = number;

export type UnqualifiedFunctionName = string;

export type UnreservedConcurrentExecutions = number;

export declare class UnsupportedMediaTypeException extends EffectData.TaggedError(
  "UnsupportedMediaTypeException",
)<{
  readonly Type?: string;
  readonly message?: string;
}> {}
export interface UntagResourceRequest {
  Resource: string;
  TagKeys: Array<string>;
}
export interface UpdateAliasRequest {
  FunctionName: string;
  Name: string;
  FunctionVersion?: string;
  Description?: string;
  RoutingConfig?: AliasRoutingConfiguration;
  RevisionId?: string;
}
export interface UpdateCodeSigningConfigRequest {
  CodeSigningConfigArn: string;
  Description?: string;
  AllowedPublishers?: AllowedPublishers;
  CodeSigningPolicies?: CodeSigningPolicies;
}
export interface UpdateCodeSigningConfigResponse {
  CodeSigningConfig: CodeSigningConfig;
}
export interface UpdateEventSourceMappingRequest {
  UUID: string;
  FunctionName?: string;
  Enabled?: boolean;
  BatchSize?: number;
  FilterCriteria?: FilterCriteria;
  MaximumBatchingWindowInSeconds?: number;
  DestinationConfig?: DestinationConfig;
  MaximumRecordAgeInSeconds?: number;
  BisectBatchOnFunctionError?: boolean;
  MaximumRetryAttempts?: number;
  ParallelizationFactor?: number;
  SourceAccessConfigurations?: Array<SourceAccessConfiguration>;
  TumblingWindowInSeconds?: number;
  FunctionResponseTypes?: Array<FunctionResponseType>;
  ScalingConfig?: ScalingConfig;
  AmazonManagedKafkaEventSourceConfig?: AmazonManagedKafkaEventSourceConfig;
  SelfManagedKafkaEventSourceConfig?: SelfManagedKafkaEventSourceConfig;
  DocumentDBEventSourceConfig?: DocumentDBEventSourceConfig;
  KMSKeyArn?: string;
  MetricsConfig?: EventSourceMappingMetricsConfig;
  ProvisionedPollerConfig?: ProvisionedPollerConfig;
}
export interface UpdateFunctionCodeRequest {
  FunctionName: string;
  ZipFile?: Uint8Array | string;
  S3Bucket?: string;
  S3Key?: string;
  S3ObjectVersion?: string;
  ImageUri?: string;
  Publish?: boolean;
  DryRun?: boolean;
  RevisionId?: string;
  Architectures?: Array<Architecture>;
  SourceKMSKeyArn?: string;
}
export interface UpdateFunctionConfigurationRequest {
  FunctionName: string;
  Role?: string;
  Handler?: string;
  Description?: string;
  Timeout?: number;
  MemorySize?: number;
  VpcConfig?: VpcConfig;
  Environment?: Environment;
  Runtime?: Runtime;
  DeadLetterConfig?: DeadLetterConfig;
  KMSKeyArn?: string;
  TracingConfig?: TracingConfig;
  RevisionId?: string;
  Layers?: Array<string>;
  FileSystemConfigs?: Array<FileSystemConfig>;
  ImageConfig?: ImageConfig;
  EphemeralStorage?: EphemeralStorage;
  SnapStart?: SnapStart;
  LoggingConfig?: LoggingConfig;
}
export interface UpdateFunctionEventInvokeConfigRequest {
  FunctionName: string;
  Qualifier?: string;
  MaximumRetryAttempts?: number;
  MaximumEventAgeInSeconds?: number;
  DestinationConfig?: DestinationConfig;
}
export interface UpdateFunctionUrlConfigRequest {
  FunctionName: string;
  Qualifier?: string;
  AuthType?: FunctionUrlAuthType;
  Cors?: Cors;
  InvokeMode?: InvokeMode;
}
export interface UpdateFunctionUrlConfigResponse {
  FunctionUrl: string;
  FunctionArn: string;
  AuthType: FunctionUrlAuthType;
  Cors?: Cors;
  CreationTime: string;
  LastModifiedTime: string;
  InvokeMode?: InvokeMode;
}
export type UpdateRuntimeOn = "Auto" | "Manual" | "FunctionUpdate";
export type URI = string;

export type Version = string;

export interface VpcConfig {
  SubnetIds?: Array<string>;
  SecurityGroupIds?: Array<string>;
  Ipv6AllowedForDualStack?: boolean;
}
export interface VpcConfigResponse {
  SubnetIds?: Array<string>;
  SecurityGroupIds?: Array<string>;
  VpcId?: string;
  Ipv6AllowedForDualStack?: boolean;
}
export type VpcId = string;

export type Weight = number;

export type WorkingDirectory = string;

export declare namespace AddLayerVersionPermission {
  export type Input = AddLayerVersionPermissionRequest;
  export type Output = AddLayerVersionPermissionResponse;
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
  export type Output = AddPermissionResponse;
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
  export type Output = AliasConfiguration;
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
  export type Output = CreateCodeSigningConfigResponse;
  export type Error =
    | InvalidParameterValueException
    | ServiceException
    | CommonAwsError;
}

export declare namespace CreateEventSourceMapping {
  export type Input = CreateEventSourceMappingRequest;
  export type Output = EventSourceMappingConfiguration;
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
  export type Output = FunctionConfiguration;
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
  export type Output = CreateFunctionUrlConfigResponse;
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
  export type Output = DeleteCodeSigningConfigResponse;
  export type Error =
    | InvalidParameterValueException
    | ResourceConflictException
    | ResourceNotFoundException
    | ServiceException
    | CommonAwsError;
}

export declare namespace DeleteEventSourceMapping {
  export type Input = DeleteEventSourceMappingRequest;
  export type Output = EventSourceMappingConfiguration;
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
  export type Output = GetAccountSettingsResponse;
  export type Error =
    | ServiceException
    | TooManyRequestsException
    | CommonAwsError;
}

export declare namespace GetAlias {
  export type Input = GetAliasRequest;
  export type Output = AliasConfiguration;
  export type Error =
    | InvalidParameterValueException
    | ResourceNotFoundException
    | ServiceException
    | TooManyRequestsException
    | CommonAwsError;
}

export declare namespace GetCodeSigningConfig {
  export type Input = GetCodeSigningConfigRequest;
  export type Output = GetCodeSigningConfigResponse;
  export type Error =
    | InvalidParameterValueException
    | ResourceNotFoundException
    | ServiceException
    | CommonAwsError;
}

export declare namespace GetEventSourceMapping {
  export type Input = GetEventSourceMappingRequest;
  export type Output = EventSourceMappingConfiguration;
  export type Error =
    | InvalidParameterValueException
    | ResourceNotFoundException
    | ServiceException
    | TooManyRequestsException
    | CommonAwsError;
}

export declare namespace GetFunction {
  export type Input = GetFunctionRequest;
  export type Output = GetFunctionResponse;
  export type Error =
    | InvalidParameterValueException
    | ResourceNotFoundException
    | ServiceException
    | TooManyRequestsException
    | CommonAwsError;
}

export declare namespace GetFunctionCodeSigningConfig {
  export type Input = GetFunctionCodeSigningConfigRequest;
  export type Output = GetFunctionCodeSigningConfigResponse;
  export type Error =
    | InvalidParameterValueException
    | ResourceNotFoundException
    | ServiceException
    | TooManyRequestsException
    | CommonAwsError;
}

export declare namespace GetFunctionConcurrency {
  export type Input = GetFunctionConcurrencyRequest;
  export type Output = GetFunctionConcurrencyResponse;
  export type Error =
    | InvalidParameterValueException
    | ResourceNotFoundException
    | ServiceException
    | TooManyRequestsException
    | CommonAwsError;
}

export declare namespace GetFunctionConfiguration {
  export type Input = GetFunctionConfigurationRequest;
  export type Output = FunctionConfiguration;
  export type Error =
    | InvalidParameterValueException
    | ResourceNotFoundException
    | ServiceException
    | TooManyRequestsException
    | CommonAwsError;
}

export declare namespace GetFunctionEventInvokeConfig {
  export type Input = GetFunctionEventInvokeConfigRequest;
  export type Output = FunctionEventInvokeConfig;
  export type Error =
    | InvalidParameterValueException
    | ResourceNotFoundException
    | ServiceException
    | TooManyRequestsException
    | CommonAwsError;
}

export declare namespace GetFunctionRecursionConfig {
  export type Input = GetFunctionRecursionConfigRequest;
  export type Output = GetFunctionRecursionConfigResponse;
  export type Error =
    | InvalidParameterValueException
    | ResourceNotFoundException
    | ServiceException
    | TooManyRequestsException
    | CommonAwsError;
}

export declare namespace GetFunctionUrlConfig {
  export type Input = GetFunctionUrlConfigRequest;
  export type Output = GetFunctionUrlConfigResponse;
  export type Error =
    | InvalidParameterValueException
    | ResourceNotFoundException
    | ServiceException
    | TooManyRequestsException
    | CommonAwsError;
}

export declare namespace GetLayerVersion {
  export type Input = GetLayerVersionRequest;
  export type Output = GetLayerVersionResponse;
  export type Error =
    | InvalidParameterValueException
    | ResourceNotFoundException
    | ServiceException
    | TooManyRequestsException
    | CommonAwsError;
}

export declare namespace GetLayerVersionByArn {
  export type Input = GetLayerVersionByArnRequest;
  export type Output = GetLayerVersionResponse;
  export type Error =
    | InvalidParameterValueException
    | ResourceNotFoundException
    | ServiceException
    | TooManyRequestsException
    | CommonAwsError;
}

export declare namespace GetLayerVersionPolicy {
  export type Input = GetLayerVersionPolicyRequest;
  export type Output = GetLayerVersionPolicyResponse;
  export type Error =
    | InvalidParameterValueException
    | ResourceNotFoundException
    | ServiceException
    | TooManyRequestsException
    | CommonAwsError;
}

export declare namespace GetPolicy {
  export type Input = GetPolicyRequest;
  export type Output = GetPolicyResponse;
  export type Error =
    | InvalidParameterValueException
    | ResourceNotFoundException
    | ServiceException
    | TooManyRequestsException
    | CommonAwsError;
}

export declare namespace GetProvisionedConcurrencyConfig {
  export type Input = GetProvisionedConcurrencyConfigRequest;
  export type Output = GetProvisionedConcurrencyConfigResponse;
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
  export type Output = GetRuntimeManagementConfigResponse;
  export type Error =
    | InvalidParameterValueException
    | ResourceNotFoundException
    | ServiceException
    | TooManyRequestsException
    | CommonAwsError;
}

export declare namespace Invoke {
  export type Input = InvocationRequest;
  export type Output = InvocationResponse;
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
  export type Output = InvokeAsyncResponse;
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
  export type Output = InvokeWithResponseStreamResponse;
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
  export type Output = ListAliasesResponse;
  export type Error =
    | InvalidParameterValueException
    | ResourceNotFoundException
    | ServiceException
    | TooManyRequestsException
    | CommonAwsError;
}

export declare namespace ListCodeSigningConfigs {
  export type Input = ListCodeSigningConfigsRequest;
  export type Output = ListCodeSigningConfigsResponse;
  export type Error =
    | InvalidParameterValueException
    | ServiceException
    | CommonAwsError;
}

export declare namespace ListEventSourceMappings {
  export type Input = ListEventSourceMappingsRequest;
  export type Output = ListEventSourceMappingsResponse;
  export type Error =
    | InvalidParameterValueException
    | ResourceNotFoundException
    | ServiceException
    | TooManyRequestsException
    | CommonAwsError;
}

export declare namespace ListFunctionEventInvokeConfigs {
  export type Input = ListFunctionEventInvokeConfigsRequest;
  export type Output = ListFunctionEventInvokeConfigsResponse;
  export type Error =
    | InvalidParameterValueException
    | ResourceNotFoundException
    | ServiceException
    | TooManyRequestsException
    | CommonAwsError;
}

export declare namespace ListFunctions {
  export type Input = ListFunctionsRequest;
  export type Output = ListFunctionsResponse;
  export type Error =
    | InvalidParameterValueException
    | ServiceException
    | TooManyRequestsException
    | CommonAwsError;
}

export declare namespace ListFunctionsByCodeSigningConfig {
  export type Input = ListFunctionsByCodeSigningConfigRequest;
  export type Output = ListFunctionsByCodeSigningConfigResponse;
  export type Error =
    | InvalidParameterValueException
    | ResourceNotFoundException
    | ServiceException
    | CommonAwsError;
}

export declare namespace ListFunctionUrlConfigs {
  export type Input = ListFunctionUrlConfigsRequest;
  export type Output = ListFunctionUrlConfigsResponse;
  export type Error =
    | InvalidParameterValueException
    | ResourceNotFoundException
    | ServiceException
    | TooManyRequestsException
    | CommonAwsError;
}

export declare namespace ListLayers {
  export type Input = ListLayersRequest;
  export type Output = ListLayersResponse;
  export type Error =
    | InvalidParameterValueException
    | ServiceException
    | TooManyRequestsException
    | CommonAwsError;
}

export declare namespace ListLayerVersions {
  export type Input = ListLayerVersionsRequest;
  export type Output = ListLayerVersionsResponse;
  export type Error =
    | InvalidParameterValueException
    | ResourceNotFoundException
    | ServiceException
    | TooManyRequestsException
    | CommonAwsError;
}

export declare namespace ListProvisionedConcurrencyConfigs {
  export type Input = ListProvisionedConcurrencyConfigsRequest;
  export type Output = ListProvisionedConcurrencyConfigsResponse;
  export type Error =
    | InvalidParameterValueException
    | ResourceNotFoundException
    | ServiceException
    | TooManyRequestsException
    | CommonAwsError;
}

export declare namespace ListTags {
  export type Input = ListTagsRequest;
  export type Output = ListTagsResponse;
  export type Error =
    | InvalidParameterValueException
    | ResourceNotFoundException
    | ServiceException
    | TooManyRequestsException
    | CommonAwsError;
}

export declare namespace ListVersionsByFunction {
  export type Input = ListVersionsByFunctionRequest;
  export type Output = ListVersionsByFunctionResponse;
  export type Error =
    | InvalidParameterValueException
    | ResourceNotFoundException
    | ServiceException
    | TooManyRequestsException
    | CommonAwsError;
}

export declare namespace PublishLayerVersion {
  export type Input = PublishLayerVersionRequest;
  export type Output = PublishLayerVersionResponse;
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
  export type Output = FunctionConfiguration;
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
  export type Output = PutFunctionCodeSigningConfigResponse;
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
  export type Output = Concurrency;
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
  export type Output = FunctionEventInvokeConfig;
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
  export type Output = PutFunctionRecursionConfigResponse;
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
  export type Output = PutProvisionedConcurrencyConfigResponse;
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
  export type Output = PutRuntimeManagementConfigResponse;
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
  export type Output = AliasConfiguration;
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
  export type Output = UpdateCodeSigningConfigResponse;
  export type Error =
    | InvalidParameterValueException
    | ResourceNotFoundException
    | ServiceException
    | CommonAwsError;
}

export declare namespace UpdateEventSourceMapping {
  export type Input = UpdateEventSourceMappingRequest;
  export type Output = EventSourceMappingConfiguration;
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
  export type Output = FunctionConfiguration;
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
  export type Output = FunctionConfiguration;
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
  export type Output = FunctionEventInvokeConfig;
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
  export type Output = UpdateFunctionUrlConfigResponse;
  export type Error =
    | InvalidParameterValueException
    | ResourceConflictException
    | ResourceNotFoundException
    | ServiceException
    | TooManyRequestsException
    | CommonAwsError;
}
