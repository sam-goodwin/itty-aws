import type { Effect, Data } from "effect";
import type { CommonAwsError } from "../client.ts";

export interface AWSDeepdishControlPlaneService {
  associateApi(
    input: AssociateApiRequest,
  ): Effect.Effect<
    AssociateApiResponse,
    AccessDeniedException | BadRequestException | InternalFailureException | NotFoundException | CommonAwsError
  >;
  associateMergedGraphqlApi(
    input: AssociateMergedGraphqlApiRequest,
  ): Effect.Effect<
    AssociateMergedGraphqlApiResponse,
    BadRequestException | ConcurrentModificationException | InternalFailureException | LimitExceededException | NotFoundException | UnauthorizedException | CommonAwsError
  >;
  associateSourceGraphqlApi(
    input: AssociateSourceGraphqlApiRequest,
  ): Effect.Effect<
    AssociateSourceGraphqlApiResponse,
    BadRequestException | ConcurrentModificationException | InternalFailureException | LimitExceededException | NotFoundException | UnauthorizedException | CommonAwsError
  >;
  createApi(
    input: CreateApiRequest,
  ): Effect.Effect<
    CreateApiResponse,
    BadRequestException | ConcurrentModificationException | InternalFailureException | ServiceQuotaExceededException | UnauthorizedException | CommonAwsError
  >;
  createApiCache(
    input: CreateApiCacheRequest,
  ): Effect.Effect<
    CreateApiCacheResponse,
    BadRequestException | ConcurrentModificationException | InternalFailureException | NotFoundException | UnauthorizedException | CommonAwsError
  >;
  createApiKey(
    input: CreateApiKeyRequest,
  ): Effect.Effect<
    CreateApiKeyResponse,
    ApiKeyLimitExceededException | ApiKeyValidityOutOfBoundsException | BadRequestException | InternalFailureException | LimitExceededException | NotFoundException | UnauthorizedException | CommonAwsError
  >;
  createChannelNamespace(
    input: CreateChannelNamespaceRequest,
  ): Effect.Effect<
    CreateChannelNamespaceResponse,
    BadRequestException | ConcurrentModificationException | ConflictException | InternalFailureException | NotFoundException | ServiceQuotaExceededException | UnauthorizedException | CommonAwsError
  >;
  createDataSource(
    input: CreateDataSourceRequest,
  ): Effect.Effect<
    CreateDataSourceResponse,
    BadRequestException | ConcurrentModificationException | InternalFailureException | NotFoundException | UnauthorizedException | CommonAwsError
  >;
  createDomainName(
    input: CreateDomainNameRequest,
  ): Effect.Effect<
    CreateDomainNameResponse,
    AccessDeniedException | BadRequestException | InternalFailureException | CommonAwsError
  >;
  createFunction(
    input: CreateFunctionRequest,
  ): Effect.Effect<
    CreateFunctionResponse,
    BadRequestException | ConcurrentModificationException | InternalFailureException | NotFoundException | UnauthorizedException | CommonAwsError
  >;
  createGraphqlApi(
    input: CreateGraphqlApiRequest,
  ): Effect.Effect<
    CreateGraphqlApiResponse,
    ApiLimitExceededException | BadRequestException | ConcurrentModificationException | InternalFailureException | LimitExceededException | UnauthorizedException | CommonAwsError
  >;
  createResolver(
    input: CreateResolverRequest,
  ): Effect.Effect<
    CreateResolverResponse,
    BadRequestException | ConcurrentModificationException | InternalFailureException | NotFoundException | UnauthorizedException | CommonAwsError
  >;
  createType(
    input: CreateTypeRequest,
  ): Effect.Effect<
    CreateTypeResponse,
    BadRequestException | ConcurrentModificationException | InternalFailureException | NotFoundException | UnauthorizedException | CommonAwsError
  >;
  deleteApi(
    input: DeleteApiRequest,
  ): Effect.Effect<
    DeleteApiResponse,
    AccessDeniedException | BadRequestException | ConcurrentModificationException | InternalFailureException | NotFoundException | UnauthorizedException | CommonAwsError
  >;
  deleteApiCache(
    input: DeleteApiCacheRequest,
  ): Effect.Effect<
    DeleteApiCacheResponse,
    BadRequestException | ConcurrentModificationException | InternalFailureException | NotFoundException | UnauthorizedException | CommonAwsError
  >;
  deleteApiKey(
    input: DeleteApiKeyRequest,
  ): Effect.Effect<
    DeleteApiKeyResponse,
    BadRequestException | InternalFailureException | NotFoundException | UnauthorizedException | CommonAwsError
  >;
  deleteChannelNamespace(
    input: DeleteChannelNamespaceRequest,
  ): Effect.Effect<
    DeleteChannelNamespaceResponse,
    AccessDeniedException | BadRequestException | ConcurrentModificationException | InternalFailureException | NotFoundException | UnauthorizedException | CommonAwsError
  >;
  deleteDataSource(
    input: DeleteDataSourceRequest,
  ): Effect.Effect<
    DeleteDataSourceResponse,
    BadRequestException | ConcurrentModificationException | InternalFailureException | NotFoundException | UnauthorizedException | CommonAwsError
  >;
  deleteDomainName(
    input: DeleteDomainNameRequest,
  ): Effect.Effect<
    DeleteDomainNameResponse,
    AccessDeniedException | BadRequestException | ConcurrentModificationException | InternalFailureException | NotFoundException | CommonAwsError
  >;
  deleteFunction(
    input: DeleteFunctionRequest,
  ): Effect.Effect<
    DeleteFunctionResponse,
    BadRequestException | ConcurrentModificationException | InternalFailureException | NotFoundException | UnauthorizedException | CommonAwsError
  >;
  deleteGraphqlApi(
    input: DeleteGraphqlApiRequest,
  ): Effect.Effect<
    DeleteGraphqlApiResponse,
    AccessDeniedException | BadRequestException | ConcurrentModificationException | InternalFailureException | NotFoundException | UnauthorizedException | CommonAwsError
  >;
  deleteResolver(
    input: DeleteResolverRequest,
  ): Effect.Effect<
    DeleteResolverResponse,
    BadRequestException | ConcurrentModificationException | InternalFailureException | NotFoundException | UnauthorizedException | CommonAwsError
  >;
  deleteType(
    input: DeleteTypeRequest,
  ): Effect.Effect<
    DeleteTypeResponse,
    BadRequestException | ConcurrentModificationException | InternalFailureException | NotFoundException | UnauthorizedException | CommonAwsError
  >;
  disassociateApi(
    input: DisassociateApiRequest,
  ): Effect.Effect<
    DisassociateApiResponse,
    AccessDeniedException | BadRequestException | ConcurrentModificationException | InternalFailureException | NotFoundException | CommonAwsError
  >;
  disassociateMergedGraphqlApi(
    input: DisassociateMergedGraphqlApiRequest,
  ): Effect.Effect<
    DisassociateMergedGraphqlApiResponse,
    BadRequestException | ConcurrentModificationException | InternalFailureException | NotFoundException | UnauthorizedException | CommonAwsError
  >;
  disassociateSourceGraphqlApi(
    input: DisassociateSourceGraphqlApiRequest,
  ): Effect.Effect<
    DisassociateSourceGraphqlApiResponse,
    BadRequestException | ConcurrentModificationException | InternalFailureException | NotFoundException | UnauthorizedException | CommonAwsError
  >;
  evaluateCode(
    input: EvaluateCodeRequest,
  ): Effect.Effect<
    EvaluateCodeResponse,
    AccessDeniedException | BadRequestException | InternalFailureException | CommonAwsError
  >;
  evaluateMappingTemplate(
    input: EvaluateMappingTemplateRequest,
  ): Effect.Effect<
    EvaluateMappingTemplateResponse,
    AccessDeniedException | BadRequestException | InternalFailureException | CommonAwsError
  >;
  flushApiCache(
    input: FlushApiCacheRequest,
  ): Effect.Effect<
    FlushApiCacheResponse,
    BadRequestException | ConcurrentModificationException | InternalFailureException | NotFoundException | UnauthorizedException | CommonAwsError
  >;
  getApi(
    input: GetApiRequest,
  ): Effect.Effect<
    GetApiResponse,
    AccessDeniedException | BadRequestException | InternalFailureException | NotFoundException | UnauthorizedException | CommonAwsError
  >;
  getApiAssociation(
    input: GetApiAssociationRequest,
  ): Effect.Effect<
    GetApiAssociationResponse,
    AccessDeniedException | BadRequestException | InternalFailureException | NotFoundException | CommonAwsError
  >;
  getApiCache(
    input: GetApiCacheRequest,
  ): Effect.Effect<
    GetApiCacheResponse,
    BadRequestException | ConcurrentModificationException | InternalFailureException | NotFoundException | UnauthorizedException | CommonAwsError
  >;
  getChannelNamespace(
    input: GetChannelNamespaceRequest,
  ): Effect.Effect<
    GetChannelNamespaceResponse,
    AccessDeniedException | BadRequestException | InternalFailureException | NotFoundException | UnauthorizedException | CommonAwsError
  >;
  getDataSource(
    input: GetDataSourceRequest,
  ): Effect.Effect<
    GetDataSourceResponse,
    BadRequestException | ConcurrentModificationException | InternalFailureException | NotFoundException | UnauthorizedException | CommonAwsError
  >;
  getDataSourceIntrospection(
    input: GetDataSourceIntrospectionRequest,
  ): Effect.Effect<
    GetDataSourceIntrospectionResponse,
    BadRequestException | InternalFailureException | NotFoundException | CommonAwsError
  >;
  getDomainName(
    input: GetDomainNameRequest,
  ): Effect.Effect<
    GetDomainNameResponse,
    AccessDeniedException | BadRequestException | InternalFailureException | NotFoundException | CommonAwsError
  >;
  getFunction(
    input: GetFunctionRequest,
  ): Effect.Effect<
    GetFunctionResponse,
    ConcurrentModificationException | NotFoundException | UnauthorizedException | CommonAwsError
  >;
  getGraphqlApi(
    input: GetGraphqlApiRequest,
  ): Effect.Effect<
    GetGraphqlApiResponse,
    AccessDeniedException | BadRequestException | InternalFailureException | NotFoundException | UnauthorizedException | CommonAwsError
  >;
  getGraphqlApiEnvironmentVariables(
    input: GetGraphqlApiEnvironmentVariablesRequest,
  ): Effect.Effect<
    GetGraphqlApiEnvironmentVariablesResponse,
    AccessDeniedException | BadRequestException | InternalFailureException | NotFoundException | UnauthorizedException | CommonAwsError
  >;
  getIntrospectionSchema(
    input: GetIntrospectionSchemaRequest,
  ): Effect.Effect<
    GetIntrospectionSchemaResponse,
    GraphQLSchemaException | InternalFailureException | NotFoundException | UnauthorizedException | CommonAwsError
  >;
  getResolver(
    input: GetResolverRequest,
  ): Effect.Effect<
    GetResolverResponse,
    ConcurrentModificationException | NotFoundException | UnauthorizedException | CommonAwsError
  >;
  getSchemaCreationStatus(
    input: GetSchemaCreationStatusRequest,
  ): Effect.Effect<
    GetSchemaCreationStatusResponse,
    BadRequestException | InternalFailureException | NotFoundException | UnauthorizedException | CommonAwsError
  >;
  getSourceApiAssociation(
    input: GetSourceApiAssociationRequest,
  ): Effect.Effect<
    GetSourceApiAssociationResponse,
    BadRequestException | InternalFailureException | NotFoundException | UnauthorizedException | CommonAwsError
  >;
  getType(
    input: GetTypeRequest,
  ): Effect.Effect<
    GetTypeResponse,
    BadRequestException | ConcurrentModificationException | InternalFailureException | NotFoundException | UnauthorizedException | CommonAwsError
  >;
  listApiKeys(
    input: ListApiKeysRequest,
  ): Effect.Effect<
    ListApiKeysResponse,
    BadRequestException | InternalFailureException | NotFoundException | UnauthorizedException | CommonAwsError
  >;
  listApis(
    input: ListApisRequest,
  ): Effect.Effect<
    ListApisResponse,
    BadRequestException | InternalFailureException | UnauthorizedException | CommonAwsError
  >;
  listChannelNamespaces(
    input: ListChannelNamespacesRequest,
  ): Effect.Effect<
    ListChannelNamespacesResponse,
    BadRequestException | InternalFailureException | NotFoundException | UnauthorizedException | CommonAwsError
  >;
  listDataSources(
    input: ListDataSourcesRequest,
  ): Effect.Effect<
    ListDataSourcesResponse,
    BadRequestException | InternalFailureException | NotFoundException | UnauthorizedException | CommonAwsError
  >;
  listDomainNames(
    input: ListDomainNamesRequest,
  ): Effect.Effect<
    ListDomainNamesResponse,
    AccessDeniedException | BadRequestException | InternalFailureException | CommonAwsError
  >;
  listFunctions(
    input: ListFunctionsRequest,
  ): Effect.Effect<
    ListFunctionsResponse,
    BadRequestException | InternalFailureException | NotFoundException | UnauthorizedException | CommonAwsError
  >;
  listGraphqlApis(
    input: ListGraphqlApisRequest,
  ): Effect.Effect<
    ListGraphqlApisResponse,
    BadRequestException | InternalFailureException | UnauthorizedException | CommonAwsError
  >;
  listResolvers(
    input: ListResolversRequest,
  ): Effect.Effect<
    ListResolversResponse,
    BadRequestException | InternalFailureException | NotFoundException | UnauthorizedException | CommonAwsError
  >;
  listResolversByFunction(
    input: ListResolversByFunctionRequest,
  ): Effect.Effect<
    ListResolversByFunctionResponse,
    BadRequestException | InternalFailureException | NotFoundException | UnauthorizedException | CommonAwsError
  >;
  listSourceApiAssociations(
    input: ListSourceApiAssociationsRequest,
  ): Effect.Effect<
    ListSourceApiAssociationsResponse,
    BadRequestException | InternalFailureException | NotFoundException | UnauthorizedException | CommonAwsError
  >;
  listTagsForResource(
    input: ListTagsForResourceRequest,
  ): Effect.Effect<
    ListTagsForResourceResponse,
    AccessDeniedException | BadRequestException | InternalFailureException | LimitExceededException | NotFoundException | UnauthorizedException | CommonAwsError
  >;
  listTypes(
    input: ListTypesRequest,
  ): Effect.Effect<
    ListTypesResponse,
    BadRequestException | ConcurrentModificationException | InternalFailureException | NotFoundException | UnauthorizedException | CommonAwsError
  >;
  listTypesByAssociation(
    input: ListTypesByAssociationRequest,
  ): Effect.Effect<
    ListTypesByAssociationResponse,
    BadRequestException | ConcurrentModificationException | InternalFailureException | NotFoundException | UnauthorizedException | CommonAwsError
  >;
  putGraphqlApiEnvironmentVariables(
    input: PutGraphqlApiEnvironmentVariablesRequest,
  ): Effect.Effect<
    PutGraphqlApiEnvironmentVariablesResponse,
    AccessDeniedException | BadRequestException | ConcurrentModificationException | InternalFailureException | NotFoundException | UnauthorizedException | CommonAwsError
  >;
  startDataSourceIntrospection(
    input: StartDataSourceIntrospectionRequest,
  ): Effect.Effect<
    StartDataSourceIntrospectionResponse,
    BadRequestException | InternalFailureException | NotFoundException | UnauthorizedException | CommonAwsError
  >;
  startSchemaCreation(
    input: StartSchemaCreationRequest,
  ): Effect.Effect<
    StartSchemaCreationResponse,
    BadRequestException | ConcurrentModificationException | InternalFailureException | NotFoundException | UnauthorizedException | CommonAwsError
  >;
  startSchemaMerge(
    input: StartSchemaMergeRequest,
  ): Effect.Effect<
    StartSchemaMergeResponse,
    BadRequestException | ConcurrentModificationException | InternalFailureException | NotFoundException | UnauthorizedException | CommonAwsError
  >;
  tagResource(
    input: TagResourceRequest,
  ): Effect.Effect<
    TagResourceResponse,
    AccessDeniedException | BadRequestException | InternalFailureException | LimitExceededException | NotFoundException | UnauthorizedException | CommonAwsError
  >;
  untagResource(
    input: UntagResourceRequest,
  ): Effect.Effect<
    UntagResourceResponse,
    AccessDeniedException | BadRequestException | InternalFailureException | LimitExceededException | NotFoundException | UnauthorizedException | CommonAwsError
  >;
  updateApi(
    input: UpdateApiRequest,
  ): Effect.Effect<
    UpdateApiResponse,
    AccessDeniedException | BadRequestException | ConcurrentModificationException | InternalFailureException | NotFoundException | UnauthorizedException | CommonAwsError
  >;
  updateApiCache(
    input: UpdateApiCacheRequest,
  ): Effect.Effect<
    UpdateApiCacheResponse,
    BadRequestException | ConcurrentModificationException | InternalFailureException | NotFoundException | UnauthorizedException | CommonAwsError
  >;
  updateApiKey(
    input: UpdateApiKeyRequest,
  ): Effect.Effect<
    UpdateApiKeyResponse,
    ApiKeyValidityOutOfBoundsException | BadRequestException | InternalFailureException | LimitExceededException | NotFoundException | UnauthorizedException | CommonAwsError
  >;
  updateChannelNamespace(
    input: UpdateChannelNamespaceRequest,
  ): Effect.Effect<
    UpdateChannelNamespaceResponse,
    AccessDeniedException | BadRequestException | ConcurrentModificationException | InternalFailureException | NotFoundException | UnauthorizedException | CommonAwsError
  >;
  updateDataSource(
    input: UpdateDataSourceRequest,
  ): Effect.Effect<
    UpdateDataSourceResponse,
    BadRequestException | ConcurrentModificationException | InternalFailureException | NotFoundException | UnauthorizedException | CommonAwsError
  >;
  updateDomainName(
    input: UpdateDomainNameRequest,
  ): Effect.Effect<
    UpdateDomainNameResponse,
    AccessDeniedException | BadRequestException | ConcurrentModificationException | InternalFailureException | NotFoundException | CommonAwsError
  >;
  updateFunction(
    input: UpdateFunctionRequest,
  ): Effect.Effect<
    UpdateFunctionResponse,
    BadRequestException | ConcurrentModificationException | InternalFailureException | NotFoundException | UnauthorizedException | CommonAwsError
  >;
  updateGraphqlApi(
    input: UpdateGraphqlApiRequest,
  ): Effect.Effect<
    UpdateGraphqlApiResponse,
    AccessDeniedException | BadRequestException | ConcurrentModificationException | InternalFailureException | NotFoundException | UnauthorizedException | CommonAwsError
  >;
  updateResolver(
    input: UpdateResolverRequest,
  ): Effect.Effect<
    UpdateResolverResponse,
    BadRequestException | ConcurrentModificationException | InternalFailureException | NotFoundException | UnauthorizedException | CommonAwsError
  >;
  updateSourceApiAssociation(
    input: UpdateSourceApiAssociationRequest,
  ): Effect.Effect<
    UpdateSourceApiAssociationResponse,
    BadRequestException | ConcurrentModificationException | InternalFailureException | NotFoundException | UnauthorizedException | CommonAwsError
  >;
  updateType(
    input: UpdateTypeRequest,
  ): Effect.Effect<
    UpdateTypeResponse,
    BadRequestException | ConcurrentModificationException | InternalFailureException | NotFoundException | UnauthorizedException | CommonAwsError
  >;
}

export type Appsync = AWSDeepdishControlPlaneService;

export declare class AccessDeniedException extends Data.TaggedError(
  "AccessDeniedException",
)<{
  readonly message?: string;
}> {}
export interface AdditionalAuthenticationProvider {
  authenticationType?: AuthenticationType;
  openIDConnectConfig?: OpenIDConnectConfig;
  userPoolConfig?: CognitoUserPoolConfig;
  lambdaAuthorizerConfig?: LambdaAuthorizerConfig;
}
export type AdditionalAuthenticationProviders = Array<AdditionalAuthenticationProvider>;
export interface Api {
  apiId?: string;
  name?: string;
  ownerContact?: string;
  tags?: Record<string, string>;
  dns?: Record<string, string>;
  apiArn?: string;
  created?: Date | string;
  xrayEnabled?: boolean;
  wafWebAclArn?: string;
  eventConfig?: EventConfig;
}
export interface ApiAssociation {
  domainName?: string;
  apiId?: string;
  associationStatus?: AssociationStatus;
  deploymentDetail?: string;
}
export interface ApiCache {
  ttl?: number;
  apiCachingBehavior?: ApiCachingBehavior;
  transitEncryptionEnabled?: boolean;
  atRestEncryptionEnabled?: boolean;
  type?: ApiCacheType;
  status?: ApiCacheStatus;
  healthMetricsConfig?: CacheHealthMetricsConfig;
}
export type ApiCacheStatus = "AVAILABLE" | "CREATING" | "DELETING" | "MODIFYING" | "FAILED";
export type ApiCacheType = "T2_SMALL" | "T2_MEDIUM" | "R4_LARGE" | "R4_XLARGE" | "R4_2XLARGE" | "R4_4XLARGE" | "R4_8XLARGE" | "SMALL" | "MEDIUM" | "LARGE" | "XLARGE" | "LARGE_2X" | "LARGE_4X" | "LARGE_8X" | "LARGE_12X";
export type ApiCachingBehavior = "FULL_REQUEST_CACHING" | "PER_RESOLVER_CACHING" | "OPERATION_LEVEL_CACHING";
export interface ApiKey {
  id?: string;
  description?: string;
  expires?: number;
  deletes?: number;
}
export declare class ApiKeyLimitExceededException extends Data.TaggedError(
  "ApiKeyLimitExceededException",
)<{
  readonly message?: string;
}> {}
export type ApiKeys = Array<ApiKey>;
export declare class ApiKeyValidityOutOfBoundsException extends Data.TaggedError(
  "ApiKeyValidityOutOfBoundsException",
)<{
  readonly message?: string;
}> {}
export declare class ApiLimitExceededException extends Data.TaggedError(
  "ApiLimitExceededException",
)<{
  readonly message?: string;
}> {}
export type ApiName = string;

export type Apis = Array<Api>;
export interface AppSyncRuntime {
  name: RuntimeName;
  runtimeVersion: string;
}
export interface AssociateApiRequest {
  domainName: string;
  apiId: string;
}
export interface AssociateApiResponse {
  apiAssociation?: ApiAssociation;
}
export interface AssociateMergedGraphqlApiRequest {
  sourceApiIdentifier: string;
  mergedApiIdentifier: string;
  description?: string;
  sourceApiAssociationConfig?: SourceApiAssociationConfig;
}
export interface AssociateMergedGraphqlApiResponse {
  sourceApiAssociation?: SourceApiAssociation;
}
export interface AssociateSourceGraphqlApiRequest {
  mergedApiIdentifier: string;
  sourceApiIdentifier: string;
  description?: string;
  sourceApiAssociationConfig?: SourceApiAssociationConfig;
}
export interface AssociateSourceGraphqlApiResponse {
  sourceApiAssociation?: SourceApiAssociation;
}
export type AssociationStatus = "Processing" | "Failed" | "Success";
export type AuthenticationType = "API_KEY" | "AWS_IAM" | "AMAZON_COGNITO_USER_POOLS" | "OPENID_CONNECT" | "AWS_LAMBDA";
export interface AuthMode {
  authType: AuthenticationType;
}
export type AuthModes = Array<AuthMode>;
export interface AuthorizationConfig {
  authorizationType: AuthorizationType;
  awsIamConfig?: AwsIamConfig;
}
export type AuthorizationType = "AWS_IAM";
export interface AuthProvider {
  authType: AuthenticationType;
  cognitoConfig?: CognitoConfig;
  openIDConnectConfig?: OpenIDConnectConfig;
  lambdaAuthorizerConfig?: LambdaAuthorizerConfig;
}
export type AuthProviders = Array<AuthProvider>;
export interface AwsIamConfig {
  signingRegion?: string;
  signingServiceName?: string;
}
export interface BadRequestDetail {
  codeErrors?: Array<CodeError>;
}
export declare class BadRequestException extends Data.TaggedError(
  "BadRequestException",
)<{
  readonly message?: string;
  readonly reason?: BadRequestReason;
  readonly detail?: BadRequestDetail;
}> {}
export type BadRequestReason = "CODE_ERROR";
export type Blob = Uint8Array | string;

export type BooleanValue = boolean;

export type CacheHealthMetricsConfig = "ENABLED" | "DISABLED";
export interface CachingConfig {
  ttl: number;
  cachingKeys?: Array<string>;
}
export type CachingKeys = Array<string>;
export type CertificateArn = string;

export interface ChannelNamespace {
  apiId?: string;
  name?: string;
  subscribeAuthModes?: Array<AuthMode>;
  publishAuthModes?: Array<AuthMode>;
  codeHandlers?: string;
  tags?: Record<string, string>;
  channelNamespaceArn?: string;
  created?: Date | string;
  lastModified?: Date | string;
  handlerConfigs?: HandlerConfigs;
}
export type ChannelNamespaces = Array<ChannelNamespace>;
export type Code = string;

export interface CodeError {
  errorType?: string;
  value?: string;
  location?: CodeErrorLocation;
}
export type CodeErrorColumn = number;

export type CodeErrorLine = number;

export interface CodeErrorLocation {
  line?: number;
  column?: number;
  span?: number;
}
export type CodeErrors = Array<CodeError>;
export type CodeErrorSpan = number;

export interface CognitoConfig {
  userPoolId: string;
  awsRegion: string;
  appIdClientRegex?: string;
}
export interface CognitoUserPoolConfig {
  userPoolId: string;
  awsRegion: string;
  appIdClientRegex?: string;
}
export declare class ConcurrentModificationException extends Data.TaggedError(
  "ConcurrentModificationException",
)<{
  readonly message?: string;
}> {}
export type ConflictDetectionType = "VERSION" | "NONE";
export declare class ConflictException extends Data.TaggedError(
  "ConflictException",
)<{
  readonly message?: string;
}> {}
export type ConflictHandlerType = "OPTIMISTIC_CONCURRENCY" | "LAMBDA" | "AUTOMERGE" | "NONE";
export type Context = string;

export interface CreateApiCacheRequest {
  apiId: string;
  ttl: number;
  transitEncryptionEnabled?: boolean;
  atRestEncryptionEnabled?: boolean;
  apiCachingBehavior: ApiCachingBehavior;
  type: ApiCacheType;
  healthMetricsConfig?: CacheHealthMetricsConfig;
}
export interface CreateApiCacheResponse {
  apiCache?: ApiCache;
}
export interface CreateApiKeyRequest {
  apiId: string;
  description?: string;
  expires?: number;
}
export interface CreateApiKeyResponse {
  apiKey?: ApiKey;
}
export interface CreateApiRequest {
  name: string;
  ownerContact?: string;
  tags?: Record<string, string>;
  eventConfig?: EventConfig;
}
export interface CreateApiResponse {
  api?: Api;
}
export interface CreateChannelNamespaceRequest {
  apiId: string;
  name: string;
  subscribeAuthModes?: Array<AuthMode>;
  publishAuthModes?: Array<AuthMode>;
  codeHandlers?: string;
  tags?: Record<string, string>;
  handlerConfigs?: HandlerConfigs;
}
export interface CreateChannelNamespaceResponse {
  channelNamespace?: ChannelNamespace;
}
export interface CreateDataSourceRequest {
  apiId: string;
  name: string;
  description?: string;
  type: DataSourceType;
  serviceRoleArn?: string;
  dynamodbConfig?: DynamodbDataSourceConfig;
  lambdaConfig?: LambdaDataSourceConfig;
  elasticsearchConfig?: ElasticsearchDataSourceConfig;
  openSearchServiceConfig?: OpenSearchServiceDataSourceConfig;
  httpConfig?: HttpDataSourceConfig;
  relationalDatabaseConfig?: RelationalDatabaseDataSourceConfig;
  eventBridgeConfig?: EventBridgeDataSourceConfig;
  metricsConfig?: DataSourceLevelMetricsConfig;
}
export interface CreateDataSourceResponse {
  dataSource?: DataSource;
}
export interface CreateDomainNameRequest {
  domainName: string;
  certificateArn: string;
  description?: string;
  tags?: Record<string, string>;
}
export interface CreateDomainNameResponse {
  domainNameConfig?: DomainNameConfig;
}
export interface CreateFunctionRequest {
  apiId: string;
  name: string;
  description?: string;
  dataSourceName: string;
  requestMappingTemplate?: string;
  responseMappingTemplate?: string;
  functionVersion?: string;
  syncConfig?: SyncConfig;
  maxBatchSize?: number;
  runtime?: AppSyncRuntime;
  code?: string;
}
export interface CreateFunctionResponse {
  functionConfiguration?: FunctionConfiguration;
}
export interface CreateGraphqlApiRequest {
  name: string;
  logConfig?: LogConfig;
  authenticationType: AuthenticationType;
  userPoolConfig?: UserPoolConfig;
  openIDConnectConfig?: OpenIDConnectConfig;
  tags?: Record<string, string>;
  additionalAuthenticationProviders?: Array<AdditionalAuthenticationProvider>;
  xrayEnabled?: boolean;
  lambdaAuthorizerConfig?: LambdaAuthorizerConfig;
  apiType?: GraphQLApiType;
  mergedApiExecutionRoleArn?: string;
  visibility?: GraphQLApiVisibility;
  ownerContact?: string;
  introspectionConfig?: GraphQLApiIntrospectionConfig;
  queryDepthLimit?: number;
  resolverCountLimit?: number;
  enhancedMetricsConfig?: EnhancedMetricsConfig;
}
export interface CreateGraphqlApiResponse {
  graphqlApi?: GraphqlApi;
}
export interface CreateResolverRequest {
  apiId: string;
  typeName: string;
  fieldName: string;
  dataSourceName?: string;
  requestMappingTemplate?: string;
  responseMappingTemplate?: string;
  kind?: ResolverKind;
  pipelineConfig?: PipelineConfig;
  syncConfig?: SyncConfig;
  cachingConfig?: CachingConfig;
  maxBatchSize?: number;
  runtime?: AppSyncRuntime;
  code?: string;
  metricsConfig?: ResolverLevelMetricsConfig;
}
export interface CreateResolverResponse {
  resolver?: Resolver;
}
export interface CreateTypeRequest {
  apiId: string;
  definition: string;
  format: TypeDefinitionFormat;
}
export interface CreateTypeResponse {
  type?: Type;
}
export interface DataSource {
  dataSourceArn?: string;
  name?: string;
  description?: string;
  type?: DataSourceType;
  serviceRoleArn?: string;
  dynamodbConfig?: DynamodbDataSourceConfig;
  lambdaConfig?: LambdaDataSourceConfig;
  elasticsearchConfig?: ElasticsearchDataSourceConfig;
  openSearchServiceConfig?: OpenSearchServiceDataSourceConfig;
  httpConfig?: HttpDataSourceConfig;
  relationalDatabaseConfig?: RelationalDatabaseDataSourceConfig;
  eventBridgeConfig?: EventBridgeDataSourceConfig;
  metricsConfig?: DataSourceLevelMetricsConfig;
}
export interface DataSourceIntrospectionModel {
  name?: string;
  fields?: Array<DataSourceIntrospectionModelField>;
  primaryKey?: DataSourceIntrospectionModelIndex;
  indexes?: Array<DataSourceIntrospectionModelIndex>;
  sdl?: string;
}
export interface DataSourceIntrospectionModelField {
  name?: string;
  type?: DataSourceIntrospectionModelFieldType;
  length?: number;
}
export type DataSourceIntrospectionModelFields = Array<DataSourceIntrospectionModelField>;
export interface DataSourceIntrospectionModelFieldType {
  kind?: string;
  name?: string;
  type?: DataSourceIntrospectionModelFieldType;
  values?: Array<string>;
}
export type DataSourceIntrospectionModelFieldTypeValues = Array<string>;
export interface DataSourceIntrospectionModelIndex {
  name?: string;
  fields?: Array<string>;
}
export type DataSourceIntrospectionModelIndexes = Array<DataSourceIntrospectionModelIndex>;
export type DataSourceIntrospectionModelIndexFields = Array<string>;
export type DataSourceIntrospectionModels = Array<DataSourceIntrospectionModel>;
export interface DataSourceIntrospectionResult {
  models?: Array<DataSourceIntrospectionModel>;
  nextToken?: string;
}
export type DataSourceIntrospectionStatus = "PROCESSING" | "FAILED" | "SUCCESS";
export type DataSourceLevelMetricsBehavior = "FULL_REQUEST_DATA_SOURCE_METRICS" | "PER_DATA_SOURCE_METRICS";
export type DataSourceLevelMetricsConfig = "ENABLED" | "DISABLED";
export type DataSources = Array<DataSource>;
export type DataSourceType = "AWS_LAMBDA" | "AMAZON_DYNAMODB" | "AMAZON_ELASTICSEARCH" | "NONE" | "HTTP" | "RELATIONAL_DATABASE" | "AMAZON_OPENSEARCH_SERVICE" | "AMAZON_EVENTBRIDGE" | "AMAZON_BEDROCK_RUNTIME";
export type DefaultAction = "ALLOW" | "DENY";
export interface DeleteApiCacheRequest {
  apiId: string;
}
export interface DeleteApiCacheResponse {
}
export interface DeleteApiKeyRequest {
  apiId: string;
  id: string;
}
export interface DeleteApiKeyResponse {
}
export interface DeleteApiRequest {
  apiId: string;
}
export interface DeleteApiResponse {
}
export interface DeleteChannelNamespaceRequest {
  apiId: string;
  name: string;
}
export interface DeleteChannelNamespaceResponse {
}
export interface DeleteDataSourceRequest {
  apiId: string;
  name: string;
}
export interface DeleteDataSourceResponse {
}
export interface DeleteDomainNameRequest {
  domainName: string;
}
export interface DeleteDomainNameResponse {
}
export interface DeleteFunctionRequest {
  apiId: string;
  functionId: string;
}
export interface DeleteFunctionResponse {
}
export interface DeleteGraphqlApiRequest {
  apiId: string;
}
export interface DeleteGraphqlApiResponse {
}
export interface DeleteResolverRequest {
  apiId: string;
  typeName: string;
  fieldName: string;
}
export interface DeleteResolverResponse {
}
export interface DeleteTypeRequest {
  apiId: string;
  typeName: string;
}
export interface DeleteTypeResponse {
}
export interface DeltaSyncConfig {
  baseTableTTL?: number;
  deltaSyncTableName?: string;
  deltaSyncTableTTL?: number;
}
export type Description = string;

export interface DisassociateApiRequest {
  domainName: string;
}
export interface DisassociateApiResponse {
}
export interface DisassociateMergedGraphqlApiRequest {
  sourceApiIdentifier: string;
  associationId: string;
}
export interface DisassociateMergedGraphqlApiResponse {
  sourceApiAssociationStatus?: SourceApiAssociationStatus;
}
export interface DisassociateSourceGraphqlApiRequest {
  mergedApiIdentifier: string;
  associationId: string;
}
export interface DisassociateSourceGraphqlApiResponse {
  sourceApiAssociationStatus?: SourceApiAssociationStatus;
}
export type DomainName = string;

export interface DomainNameConfig {
  domainName?: string;
  description?: string;
  certificateArn?: string;
  appsyncDomainName?: string;
  hostedZoneId?: string;
  tags?: Record<string, string>;
  domainNameArn?: string;
}
export type DomainNameConfigs = Array<DomainNameConfig>;
export interface DynamodbDataSourceConfig {
  tableName: string;
  awsRegion: string;
  useCallerCredentials?: boolean;
  deltaSyncConfig?: DeltaSyncConfig;
  versioned?: boolean;
}
export interface ElasticsearchDataSourceConfig {
  endpoint: string;
  awsRegion: string;
}
export interface EnhancedMetricsConfig {
  resolverLevelMetricsBehavior: ResolverLevelMetricsBehavior;
  dataSourceLevelMetricsBehavior: DataSourceLevelMetricsBehavior;
  operationLevelMetricsConfig: OperationLevelMetricsConfig;
}
export type EnvironmentVariableKey = string;

export type EnvironmentVariableMap = Record<string, string>;
export type EnvironmentVariableValue = string;

export interface ErrorDetail {
  message?: string;
}
export type ErrorMessage = string;

export interface EvaluateCodeErrorDetail {
  message?: string;
  codeErrors?: Array<CodeError>;
}
export interface EvaluateCodeRequest {
  runtime: AppSyncRuntime;
  code: string;
  context: string;
  function?: string;
}
export interface EvaluateCodeResponse {
  evaluationResult?: string;
  error?: EvaluateCodeErrorDetail;
  logs?: Array<string>;
  stash?: string;
  outErrors?: string;
}
export interface EvaluateMappingTemplateRequest {
  template: string;
  context: string;
}
export interface EvaluateMappingTemplateResponse {
  evaluationResult?: string;
  error?: ErrorDetail;
  logs?: Array<string>;
  stash?: string;
  outErrors?: string;
}
export type EvaluationResult = string;

export interface EventBridgeDataSourceConfig {
  eventBusArn: string;
}
export interface EventConfig {
  authProviders: Array<AuthProvider>;
  connectionAuthModes: Array<AuthMode>;
  defaultPublishAuthModes: Array<AuthMode>;
  defaultSubscribeAuthModes: Array<AuthMode>;
  logConfig?: EventLogConfig;
}
export interface EventLogConfig {
  logLevel: EventLogLevel;
  cloudWatchLogsRoleArn: string;
}
export type EventLogLevel = "NONE" | "ERROR" | "ALL" | "INFO" | "DEBUG";
export type FieldLogLevel = "NONE" | "ERROR" | "ALL" | "INFO" | "DEBUG";
export interface FlushApiCacheRequest {
  apiId: string;
}
export interface FlushApiCacheResponse {
}
export interface FunctionConfiguration {
  functionId?: string;
  functionArn?: string;
  name?: string;
  description?: string;
  dataSourceName?: string;
  requestMappingTemplate?: string;
  responseMappingTemplate?: string;
  functionVersion?: string;
  syncConfig?: SyncConfig;
  maxBatchSize?: number;
  runtime?: AppSyncRuntime;
  code?: string;
}
export type Functions = Array<FunctionConfiguration>;
export type FunctionsIds = Array<string>;
export interface GetApiAssociationRequest {
  domainName: string;
}
export interface GetApiAssociationResponse {
  apiAssociation?: ApiAssociation;
}
export interface GetApiCacheRequest {
  apiId: string;
}
export interface GetApiCacheResponse {
  apiCache?: ApiCache;
}
export interface GetApiRequest {
  apiId: string;
}
export interface GetApiResponse {
  api?: Api;
}
export interface GetChannelNamespaceRequest {
  apiId: string;
  name: string;
}
export interface GetChannelNamespaceResponse {
  channelNamespace?: ChannelNamespace;
}
export interface GetDataSourceIntrospectionRequest {
  introspectionId: string;
  includeModelsSDL?: boolean;
  nextToken?: string;
  maxResults?: number;
}
export interface GetDataSourceIntrospectionResponse {
  introspectionId?: string;
  introspectionStatus?: DataSourceIntrospectionStatus;
  introspectionStatusDetail?: string;
  introspectionResult?: DataSourceIntrospectionResult;
}
export interface GetDataSourceRequest {
  apiId: string;
  name: string;
}
export interface GetDataSourceResponse {
  dataSource?: DataSource;
}
export interface GetDomainNameRequest {
  domainName: string;
}
export interface GetDomainNameResponse {
  domainNameConfig?: DomainNameConfig;
}
export interface GetFunctionRequest {
  apiId: string;
  functionId: string;
}
export interface GetFunctionResponse {
  functionConfiguration?: FunctionConfiguration;
}
export interface GetGraphqlApiEnvironmentVariablesRequest {
  apiId: string;
}
export interface GetGraphqlApiEnvironmentVariablesResponse {
  environmentVariables?: Record<string, string>;
}
export interface GetGraphqlApiRequest {
  apiId: string;
}
export interface GetGraphqlApiResponse {
  graphqlApi?: GraphqlApi;
}
export interface GetIntrospectionSchemaRequest {
  apiId: string;
  format: OutputType;
  includeDirectives?: boolean;
}
export interface GetIntrospectionSchemaResponse {
  schema?: Uint8Array | string;
}
export interface GetResolverRequest {
  apiId: string;
  typeName: string;
  fieldName: string;
}
export interface GetResolverResponse {
  resolver?: Resolver;
}
export interface GetSchemaCreationStatusRequest {
  apiId: string;
}
export interface GetSchemaCreationStatusResponse {
  status?: SchemaStatus;
  details?: string;
}
export interface GetSourceApiAssociationRequest {
  mergedApiIdentifier: string;
  associationId: string;
}
export interface GetSourceApiAssociationResponse {
  sourceApiAssociation?: SourceApiAssociation;
}
export interface GetTypeRequest {
  apiId: string;
  typeName: string;
  format: TypeDefinitionFormat;
}
export interface GetTypeResponse {
  type?: Type;
}
export interface GraphqlApi {
  name?: string;
  apiId?: string;
  authenticationType?: AuthenticationType;
  logConfig?: LogConfig;
  userPoolConfig?: UserPoolConfig;
  openIDConnectConfig?: OpenIDConnectConfig;
  arn?: string;
  uris?: Record<string, string>;
  tags?: Record<string, string>;
  additionalAuthenticationProviders?: Array<AdditionalAuthenticationProvider>;
  xrayEnabled?: boolean;
  wafWebAclArn?: string;
  lambdaAuthorizerConfig?: LambdaAuthorizerConfig;
  dns?: Record<string, string>;
  visibility?: GraphQLApiVisibility;
  apiType?: GraphQLApiType;
  mergedApiExecutionRoleArn?: string;
  owner?: string;
  ownerContact?: string;
  introspectionConfig?: GraphQLApiIntrospectionConfig;
  queryDepthLimit?: number;
  resolverCountLimit?: number;
  enhancedMetricsConfig?: EnhancedMetricsConfig;
}
export type GraphQLApiIntrospectionConfig = "ENABLED" | "DISABLED";
export type GraphqlApis = Array<GraphqlApi>;
export type GraphQLApiType = "GRAPHQL" | "MERGED";
export type GraphQLApiVisibility = "GLOBAL" | "PRIVATE";
export declare class GraphQLSchemaException extends Data.TaggedError(
  "GraphQLSchemaException",
)<{
  readonly message?: string;
}> {}
export type HandlerBehavior = "CODE" | "DIRECT";
export interface HandlerConfig {
  behavior: HandlerBehavior;
  integration: Integration;
}
export interface HandlerConfigs {
  onPublish?: HandlerConfig;
  onSubscribe?: HandlerConfig;
}
export interface HttpDataSourceConfig {
  endpoint?: string;
  authorizationConfig?: AuthorizationConfig;
}
export interface Integration {
  dataSourceName: string;
  lambdaConfig?: LambdaConfig;
}
export declare class InternalFailureException extends Data.TaggedError(
  "InternalFailureException",
)<{
  readonly message?: string;
}> {}
export type InvokeType = "REQUEST_RESPONSE" | "EVENT";
export interface LambdaAuthorizerConfig {
  authorizerResultTtlInSeconds?: number;
  authorizerUri: string;
  identityValidationExpression?: string;
}
export interface LambdaConfig {
  invokeType?: InvokeType;
}
export interface LambdaConflictHandlerConfig {
  lambdaConflictHandlerArn?: string;
}
export interface LambdaDataSourceConfig {
  lambdaFunctionArn: string;
}
export declare class LimitExceededException extends Data.TaggedError(
  "LimitExceededException",
)<{
  readonly message?: string;
}> {}
export interface ListApiKeysRequest {
  apiId: string;
  nextToken?: string;
  maxResults?: number;
}
export interface ListApiKeysResponse {
  apiKeys?: Array<ApiKey>;
  nextToken?: string;
}
export interface ListApisRequest {
  nextToken?: string;
  maxResults?: number;
}
export interface ListApisResponse {
  apis?: Array<Api>;
  nextToken?: string;
}
export interface ListChannelNamespacesRequest {
  apiId: string;
  nextToken?: string;
  maxResults?: number;
}
export interface ListChannelNamespacesResponse {
  channelNamespaces?: Array<ChannelNamespace>;
  nextToken?: string;
}
export interface ListDataSourcesRequest {
  apiId: string;
  nextToken?: string;
  maxResults?: number;
}
export interface ListDataSourcesResponse {
  dataSources?: Array<DataSource>;
  nextToken?: string;
}
export interface ListDomainNamesRequest {
  nextToken?: string;
  maxResults?: number;
}
export interface ListDomainNamesResponse {
  domainNameConfigs?: Array<DomainNameConfig>;
  nextToken?: string;
}
export interface ListFunctionsRequest {
  apiId: string;
  nextToken?: string;
  maxResults?: number;
}
export interface ListFunctionsResponse {
  functions?: Array<FunctionConfiguration>;
  nextToken?: string;
}
export interface ListGraphqlApisRequest {
  nextToken?: string;
  maxResults?: number;
  apiType?: GraphQLApiType;
  owner?: Ownership;
}
export interface ListGraphqlApisResponse {
  graphqlApis?: Array<GraphqlApi>;
  nextToken?: string;
}
export interface ListResolversByFunctionRequest {
  apiId: string;
  functionId: string;
  nextToken?: string;
  maxResults?: number;
}
export interface ListResolversByFunctionResponse {
  resolvers?: Array<Resolver>;
  nextToken?: string;
}
export interface ListResolversRequest {
  apiId: string;
  typeName: string;
  nextToken?: string;
  maxResults?: number;
}
export interface ListResolversResponse {
  resolvers?: Array<Resolver>;
  nextToken?: string;
}
export interface ListSourceApiAssociationsRequest {
  apiId: string;
  nextToken?: string;
  maxResults?: number;
}
export interface ListSourceApiAssociationsResponse {
  sourceApiAssociationSummaries?: Array<SourceApiAssociationSummary>;
  nextToken?: string;
}
export interface ListTagsForResourceRequest {
  resourceArn: string;
}
export interface ListTagsForResourceResponse {
  tags?: Record<string, string>;
}
export interface ListTypesByAssociationRequest {
  mergedApiIdentifier: string;
  associationId: string;
  format: TypeDefinitionFormat;
  nextToken?: string;
  maxResults?: number;
}
export interface ListTypesByAssociationResponse {
  types?: Array<Type>;
  nextToken?: string;
}
export interface ListTypesRequest {
  apiId: string;
  format: TypeDefinitionFormat;
  nextToken?: string;
  maxResults?: number;
}
export interface ListTypesResponse {
  types?: Array<Type>;
  nextToken?: string;
}
export interface LogConfig {
  fieldLogLevel: FieldLogLevel;
  cloudWatchLogsRoleArn: string;
  excludeVerboseContent?: boolean;
}
export type Logs = Array<string>;
export type Long = number;

export type MapOfStringToString = Record<string, string>;
export type MappingTemplate = string;

export type MaxBatchSize = number;

export type MaxResults = number;

export type MergeType = "MANUAL_MERGE" | "AUTO_MERGE";
export type Namespace = string;

export declare class NotFoundException extends Data.TaggedError(
  "NotFoundException",
)<{
  readonly message?: string;
}> {}
export interface OpenIDConnectConfig {
  issuer: string;
  clientId?: string;
  iatTTL?: number;
  authTTL?: number;
}
export interface OpenSearchServiceDataSourceConfig {
  endpoint: string;
  awsRegion: string;
}
export type OperationLevelMetricsConfig = "ENABLED" | "DISABLED";
export type OutErrors = string;

export type OutputType = "SDL" | "JSON";
export type OwnerContact = string;

export type Ownership = "CURRENT_ACCOUNT" | "OTHER_ACCOUNTS";
export type PaginationToken = string;

export interface PipelineConfig {
  functions?: Array<string>;
}
export interface PutGraphqlApiEnvironmentVariablesRequest {
  apiId: string;
  environmentVariables: Record<string, string>;
}
export interface PutGraphqlApiEnvironmentVariablesResponse {
  environmentVariables?: Record<string, string>;
}
export type QueryDepthLimit = number;

export interface RdsDataApiConfig {
  resourceArn: string;
  secretArn: string;
  databaseName: string;
}
export type RdsDataApiConfigDatabaseName = string;

export type RdsDataApiConfigResourceArn = string;

export type RdsDataApiConfigSecretArn = string;

export interface RdsHttpEndpointConfig {
  awsRegion?: string;
  dbClusterIdentifier?: string;
  databaseName?: string;
  schema?: string;
  awsSecretStoreArn?: string;
}
export interface RelationalDatabaseDataSourceConfig {
  relationalDatabaseSourceType?: RelationalDatabaseSourceType;
  rdsHttpEndpointConfig?: RdsHttpEndpointConfig;
}
export type RelationalDatabaseSourceType = "RDS_HTTP_ENDPOINT";
export interface Resolver {
  typeName?: string;
  fieldName?: string;
  dataSourceName?: string;
  resolverArn?: string;
  requestMappingTemplate?: string;
  responseMappingTemplate?: string;
  kind?: ResolverKind;
  pipelineConfig?: PipelineConfig;
  syncConfig?: SyncConfig;
  cachingConfig?: CachingConfig;
  maxBatchSize?: number;
  runtime?: AppSyncRuntime;
  code?: string;
  metricsConfig?: ResolverLevelMetricsConfig;
}
export type ResolverCountLimit = number;

export type ResolverKind = "UNIT" | "PIPELINE";
export type ResolverLevelMetricsBehavior = "FULL_REQUEST_RESOLVER_METRICS" | "PER_RESOLVER_METRICS";
export type ResolverLevelMetricsConfig = "ENABLED" | "DISABLED";
export type Resolvers = Array<Resolver>;
export type ResourceArn = string;

export type ResourceName = string;

export type RuntimeName = "APPSYNC_JS";
export type SchemaStatus = "Processing" | "Active" | "Deleting" | "Failed" | "Success" | "NotApplicable";
export declare class ServiceQuotaExceededException extends Data.TaggedError(
  "ServiceQuotaExceededException",
)<{
  readonly message?: string;
}> {}
export interface SourceApiAssociation {
  associationId?: string;
  associationArn?: string;
  sourceApiId?: string;
  sourceApiArn?: string;
  mergedApiArn?: string;
  mergedApiId?: string;
  description?: string;
  sourceApiAssociationConfig?: SourceApiAssociationConfig;
  sourceApiAssociationStatus?: SourceApiAssociationStatus;
  sourceApiAssociationStatusDetail?: string;
  lastSuccessfulMergeDate?: Date | string;
}
export interface SourceApiAssociationConfig {
  mergeType?: MergeType;
}
export type SourceApiAssociationStatus = "MERGE_SCHEDULED" | "MERGE_FAILED" | "MERGE_SUCCESS" | "MERGE_IN_PROGRESS" | "AUTO_MERGE_SCHEDULE_FAILED" | "DELETION_SCHEDULED" | "DELETION_IN_PROGRESS" | "DELETION_FAILED";
export interface SourceApiAssociationSummary {
  associationId?: string;
  associationArn?: string;
  sourceApiId?: string;
  sourceApiArn?: string;
  mergedApiId?: string;
  mergedApiArn?: string;
  description?: string;
}
export type SourceApiAssociationSummaryList = Array<SourceApiAssociationSummary>;
export interface StartDataSourceIntrospectionRequest {
  rdsDataApiConfig?: RdsDataApiConfig;
}
export interface StartDataSourceIntrospectionResponse {
  introspectionId?: string;
  introspectionStatus?: DataSourceIntrospectionStatus;
  introspectionStatusDetail?: string;
}
export interface StartSchemaCreationRequest {
  apiId: string;
  definition: Uint8Array | string;
}
export interface StartSchemaCreationResponse {
  status?: SchemaStatus;
}
export interface StartSchemaMergeRequest {
  associationId: string;
  mergedApiIdentifier: string;
}
export interface StartSchemaMergeResponse {
  sourceApiAssociationStatus?: SourceApiAssociationStatus;
}
export type Stash = string;

export interface SyncConfig {
  conflictHandler?: ConflictHandlerType;
  conflictDetection?: ConflictDetectionType;
  lambdaConflictHandlerConfig?: LambdaConflictHandlerConfig;
}
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

export type Template = string;

export type Timestamp = Date | string;

export type TTL = number;

export interface Type {
  name?: string;
  description?: string;
  arn?: string;
  definition?: string;
  format?: TypeDefinitionFormat;
}
export type TypeDefinitionFormat = "SDL" | "JSON";
export type TypeList = Array<Type>;
export declare class UnauthorizedException extends Data.TaggedError(
  "UnauthorizedException",
)<{
  readonly message?: string;
}> {}
export interface UntagResourceRequest {
  resourceArn: string;
  tagKeys: Array<string>;
}
export interface UntagResourceResponse {
}
export interface UpdateApiCacheRequest {
  apiId: string;
  ttl: number;
  apiCachingBehavior: ApiCachingBehavior;
  type: ApiCacheType;
  healthMetricsConfig?: CacheHealthMetricsConfig;
}
export interface UpdateApiCacheResponse {
  apiCache?: ApiCache;
}
export interface UpdateApiKeyRequest {
  apiId: string;
  id: string;
  description?: string;
  expires?: number;
}
export interface UpdateApiKeyResponse {
  apiKey?: ApiKey;
}
export interface UpdateApiRequest {
  apiId: string;
  name: string;
  ownerContact?: string;
  eventConfig?: EventConfig;
}
export interface UpdateApiResponse {
  api?: Api;
}
export interface UpdateChannelNamespaceRequest {
  apiId: string;
  name: string;
  subscribeAuthModes?: Array<AuthMode>;
  publishAuthModes?: Array<AuthMode>;
  codeHandlers?: string;
  handlerConfigs?: HandlerConfigs;
}
export interface UpdateChannelNamespaceResponse {
  channelNamespace?: ChannelNamespace;
}
export interface UpdateDataSourceRequest {
  apiId: string;
  name: string;
  description?: string;
  type: DataSourceType;
  serviceRoleArn?: string;
  dynamodbConfig?: DynamodbDataSourceConfig;
  lambdaConfig?: LambdaDataSourceConfig;
  elasticsearchConfig?: ElasticsearchDataSourceConfig;
  openSearchServiceConfig?: OpenSearchServiceDataSourceConfig;
  httpConfig?: HttpDataSourceConfig;
  relationalDatabaseConfig?: RelationalDatabaseDataSourceConfig;
  eventBridgeConfig?: EventBridgeDataSourceConfig;
  metricsConfig?: DataSourceLevelMetricsConfig;
}
export interface UpdateDataSourceResponse {
  dataSource?: DataSource;
}
export interface UpdateDomainNameRequest {
  domainName: string;
  description?: string;
}
export interface UpdateDomainNameResponse {
  domainNameConfig?: DomainNameConfig;
}
export interface UpdateFunctionRequest {
  apiId: string;
  name: string;
  description?: string;
  functionId: string;
  dataSourceName: string;
  requestMappingTemplate?: string;
  responseMappingTemplate?: string;
  functionVersion?: string;
  syncConfig?: SyncConfig;
  maxBatchSize?: number;
  runtime?: AppSyncRuntime;
  code?: string;
}
export interface UpdateFunctionResponse {
  functionConfiguration?: FunctionConfiguration;
}
export interface UpdateGraphqlApiRequest {
  apiId: string;
  name: string;
  logConfig?: LogConfig;
  authenticationType: AuthenticationType;
  userPoolConfig?: UserPoolConfig;
  openIDConnectConfig?: OpenIDConnectConfig;
  additionalAuthenticationProviders?: Array<AdditionalAuthenticationProvider>;
  xrayEnabled?: boolean;
  lambdaAuthorizerConfig?: LambdaAuthorizerConfig;
  mergedApiExecutionRoleArn?: string;
  ownerContact?: string;
  introspectionConfig?: GraphQLApiIntrospectionConfig;
  queryDepthLimit?: number;
  resolverCountLimit?: number;
  enhancedMetricsConfig?: EnhancedMetricsConfig;
}
export interface UpdateGraphqlApiResponse {
  graphqlApi?: GraphqlApi;
}
export interface UpdateResolverRequest {
  apiId: string;
  typeName: string;
  fieldName: string;
  dataSourceName?: string;
  requestMappingTemplate?: string;
  responseMappingTemplate?: string;
  kind?: ResolverKind;
  pipelineConfig?: PipelineConfig;
  syncConfig?: SyncConfig;
  cachingConfig?: CachingConfig;
  maxBatchSize?: number;
  runtime?: AppSyncRuntime;
  code?: string;
  metricsConfig?: ResolverLevelMetricsConfig;
}
export interface UpdateResolverResponse {
  resolver?: Resolver;
}
export interface UpdateSourceApiAssociationRequest {
  associationId: string;
  mergedApiIdentifier: string;
  description?: string;
  sourceApiAssociationConfig?: SourceApiAssociationConfig;
}
export interface UpdateSourceApiAssociationResponse {
  sourceApiAssociation?: SourceApiAssociation;
}
export interface UpdateTypeRequest {
  apiId: string;
  typeName: string;
  definition?: string;
  format: TypeDefinitionFormat;
}
export interface UpdateTypeResponse {
  type?: Type;
}
export interface UserPoolConfig {
  userPoolId: string;
  awsRegion: string;
  defaultAction: DefaultAction;
  appIdClientRegex?: string;
}
export declare namespace AssociateApi {
  export type Input = AssociateApiRequest;
  export type Output = AssociateApiResponse;
  export type Error =
    | AccessDeniedException
    | BadRequestException
    | InternalFailureException
    | NotFoundException
    | CommonAwsError;
}

export declare namespace AssociateMergedGraphqlApi {
  export type Input = AssociateMergedGraphqlApiRequest;
  export type Output = AssociateMergedGraphqlApiResponse;
  export type Error =
    | BadRequestException
    | ConcurrentModificationException
    | InternalFailureException
    | LimitExceededException
    | NotFoundException
    | UnauthorizedException
    | CommonAwsError;
}

export declare namespace AssociateSourceGraphqlApi {
  export type Input = AssociateSourceGraphqlApiRequest;
  export type Output = AssociateSourceGraphqlApiResponse;
  export type Error =
    | BadRequestException
    | ConcurrentModificationException
    | InternalFailureException
    | LimitExceededException
    | NotFoundException
    | UnauthorizedException
    | CommonAwsError;
}

export declare namespace CreateApi {
  export type Input = CreateApiRequest;
  export type Output = CreateApiResponse;
  export type Error =
    | BadRequestException
    | ConcurrentModificationException
    | InternalFailureException
    | ServiceQuotaExceededException
    | UnauthorizedException
    | CommonAwsError;
}

export declare namespace CreateApiCache {
  export type Input = CreateApiCacheRequest;
  export type Output = CreateApiCacheResponse;
  export type Error =
    | BadRequestException
    | ConcurrentModificationException
    | InternalFailureException
    | NotFoundException
    | UnauthorizedException
    | CommonAwsError;
}

export declare namespace CreateApiKey {
  export type Input = CreateApiKeyRequest;
  export type Output = CreateApiKeyResponse;
  export type Error =
    | ApiKeyLimitExceededException
    | ApiKeyValidityOutOfBoundsException
    | BadRequestException
    | InternalFailureException
    | LimitExceededException
    | NotFoundException
    | UnauthorizedException
    | CommonAwsError;
}

export declare namespace CreateChannelNamespace {
  export type Input = CreateChannelNamespaceRequest;
  export type Output = CreateChannelNamespaceResponse;
  export type Error =
    | BadRequestException
    | ConcurrentModificationException
    | ConflictException
    | InternalFailureException
    | NotFoundException
    | ServiceQuotaExceededException
    | UnauthorizedException
    | CommonAwsError;
}

export declare namespace CreateDataSource {
  export type Input = CreateDataSourceRequest;
  export type Output = CreateDataSourceResponse;
  export type Error =
    | BadRequestException
    | ConcurrentModificationException
    | InternalFailureException
    | NotFoundException
    | UnauthorizedException
    | CommonAwsError;
}

export declare namespace CreateDomainName {
  export type Input = CreateDomainNameRequest;
  export type Output = CreateDomainNameResponse;
  export type Error =
    | AccessDeniedException
    | BadRequestException
    | InternalFailureException
    | CommonAwsError;
}

export declare namespace CreateFunction {
  export type Input = CreateFunctionRequest;
  export type Output = CreateFunctionResponse;
  export type Error =
    | BadRequestException
    | ConcurrentModificationException
    | InternalFailureException
    | NotFoundException
    | UnauthorizedException
    | CommonAwsError;
}

export declare namespace CreateGraphqlApi {
  export type Input = CreateGraphqlApiRequest;
  export type Output = CreateGraphqlApiResponse;
  export type Error =
    | ApiLimitExceededException
    | BadRequestException
    | ConcurrentModificationException
    | InternalFailureException
    | LimitExceededException
    | UnauthorizedException
    | CommonAwsError;
}

export declare namespace CreateResolver {
  export type Input = CreateResolverRequest;
  export type Output = CreateResolverResponse;
  export type Error =
    | BadRequestException
    | ConcurrentModificationException
    | InternalFailureException
    | NotFoundException
    | UnauthorizedException
    | CommonAwsError;
}

export declare namespace CreateType {
  export type Input = CreateTypeRequest;
  export type Output = CreateTypeResponse;
  export type Error =
    | BadRequestException
    | ConcurrentModificationException
    | InternalFailureException
    | NotFoundException
    | UnauthorizedException
    | CommonAwsError;
}

export declare namespace DeleteApi {
  export type Input = DeleteApiRequest;
  export type Output = DeleteApiResponse;
  export type Error =
    | AccessDeniedException
    | BadRequestException
    | ConcurrentModificationException
    | InternalFailureException
    | NotFoundException
    | UnauthorizedException
    | CommonAwsError;
}

export declare namespace DeleteApiCache {
  export type Input = DeleteApiCacheRequest;
  export type Output = DeleteApiCacheResponse;
  export type Error =
    | BadRequestException
    | ConcurrentModificationException
    | InternalFailureException
    | NotFoundException
    | UnauthorizedException
    | CommonAwsError;
}

export declare namespace DeleteApiKey {
  export type Input = DeleteApiKeyRequest;
  export type Output = DeleteApiKeyResponse;
  export type Error =
    | BadRequestException
    | InternalFailureException
    | NotFoundException
    | UnauthorizedException
    | CommonAwsError;
}

export declare namespace DeleteChannelNamespace {
  export type Input = DeleteChannelNamespaceRequest;
  export type Output = DeleteChannelNamespaceResponse;
  export type Error =
    | AccessDeniedException
    | BadRequestException
    | ConcurrentModificationException
    | InternalFailureException
    | NotFoundException
    | UnauthorizedException
    | CommonAwsError;
}

export declare namespace DeleteDataSource {
  export type Input = DeleteDataSourceRequest;
  export type Output = DeleteDataSourceResponse;
  export type Error =
    | BadRequestException
    | ConcurrentModificationException
    | InternalFailureException
    | NotFoundException
    | UnauthorizedException
    | CommonAwsError;
}

export declare namespace DeleteDomainName {
  export type Input = DeleteDomainNameRequest;
  export type Output = DeleteDomainNameResponse;
  export type Error =
    | AccessDeniedException
    | BadRequestException
    | ConcurrentModificationException
    | InternalFailureException
    | NotFoundException
    | CommonAwsError;
}

export declare namespace DeleteFunction {
  export type Input = DeleteFunctionRequest;
  export type Output = DeleteFunctionResponse;
  export type Error =
    | BadRequestException
    | ConcurrentModificationException
    | InternalFailureException
    | NotFoundException
    | UnauthorizedException
    | CommonAwsError;
}

export declare namespace DeleteGraphqlApi {
  export type Input = DeleteGraphqlApiRequest;
  export type Output = DeleteGraphqlApiResponse;
  export type Error =
    | AccessDeniedException
    | BadRequestException
    | ConcurrentModificationException
    | InternalFailureException
    | NotFoundException
    | UnauthorizedException
    | CommonAwsError;
}

export declare namespace DeleteResolver {
  export type Input = DeleteResolverRequest;
  export type Output = DeleteResolverResponse;
  export type Error =
    | BadRequestException
    | ConcurrentModificationException
    | InternalFailureException
    | NotFoundException
    | UnauthorizedException
    | CommonAwsError;
}

export declare namespace DeleteType {
  export type Input = DeleteTypeRequest;
  export type Output = DeleteTypeResponse;
  export type Error =
    | BadRequestException
    | ConcurrentModificationException
    | InternalFailureException
    | NotFoundException
    | UnauthorizedException
    | CommonAwsError;
}

export declare namespace DisassociateApi {
  export type Input = DisassociateApiRequest;
  export type Output = DisassociateApiResponse;
  export type Error =
    | AccessDeniedException
    | BadRequestException
    | ConcurrentModificationException
    | InternalFailureException
    | NotFoundException
    | CommonAwsError;
}

export declare namespace DisassociateMergedGraphqlApi {
  export type Input = DisassociateMergedGraphqlApiRequest;
  export type Output = DisassociateMergedGraphqlApiResponse;
  export type Error =
    | BadRequestException
    | ConcurrentModificationException
    | InternalFailureException
    | NotFoundException
    | UnauthorizedException
    | CommonAwsError;
}

export declare namespace DisassociateSourceGraphqlApi {
  export type Input = DisassociateSourceGraphqlApiRequest;
  export type Output = DisassociateSourceGraphqlApiResponse;
  export type Error =
    | BadRequestException
    | ConcurrentModificationException
    | InternalFailureException
    | NotFoundException
    | UnauthorizedException
    | CommonAwsError;
}

export declare namespace EvaluateCode {
  export type Input = EvaluateCodeRequest;
  export type Output = EvaluateCodeResponse;
  export type Error =
    | AccessDeniedException
    | BadRequestException
    | InternalFailureException
    | CommonAwsError;
}

export declare namespace EvaluateMappingTemplate {
  export type Input = EvaluateMappingTemplateRequest;
  export type Output = EvaluateMappingTemplateResponse;
  export type Error =
    | AccessDeniedException
    | BadRequestException
    | InternalFailureException
    | CommonAwsError;
}

export declare namespace FlushApiCache {
  export type Input = FlushApiCacheRequest;
  export type Output = FlushApiCacheResponse;
  export type Error =
    | BadRequestException
    | ConcurrentModificationException
    | InternalFailureException
    | NotFoundException
    | UnauthorizedException
    | CommonAwsError;
}

export declare namespace GetApi {
  export type Input = GetApiRequest;
  export type Output = GetApiResponse;
  export type Error =
    | AccessDeniedException
    | BadRequestException
    | InternalFailureException
    | NotFoundException
    | UnauthorizedException
    | CommonAwsError;
}

export declare namespace GetApiAssociation {
  export type Input = GetApiAssociationRequest;
  export type Output = GetApiAssociationResponse;
  export type Error =
    | AccessDeniedException
    | BadRequestException
    | InternalFailureException
    | NotFoundException
    | CommonAwsError;
}

export declare namespace GetApiCache {
  export type Input = GetApiCacheRequest;
  export type Output = GetApiCacheResponse;
  export type Error =
    | BadRequestException
    | ConcurrentModificationException
    | InternalFailureException
    | NotFoundException
    | UnauthorizedException
    | CommonAwsError;
}

export declare namespace GetChannelNamespace {
  export type Input = GetChannelNamespaceRequest;
  export type Output = GetChannelNamespaceResponse;
  export type Error =
    | AccessDeniedException
    | BadRequestException
    | InternalFailureException
    | NotFoundException
    | UnauthorizedException
    | CommonAwsError;
}

export declare namespace GetDataSource {
  export type Input = GetDataSourceRequest;
  export type Output = GetDataSourceResponse;
  export type Error =
    | BadRequestException
    | ConcurrentModificationException
    | InternalFailureException
    | NotFoundException
    | UnauthorizedException
    | CommonAwsError;
}

export declare namespace GetDataSourceIntrospection {
  export type Input = GetDataSourceIntrospectionRequest;
  export type Output = GetDataSourceIntrospectionResponse;
  export type Error =
    | BadRequestException
    | InternalFailureException
    | NotFoundException
    | CommonAwsError;
}

export declare namespace GetDomainName {
  export type Input = GetDomainNameRequest;
  export type Output = GetDomainNameResponse;
  export type Error =
    | AccessDeniedException
    | BadRequestException
    | InternalFailureException
    | NotFoundException
    | CommonAwsError;
}

export declare namespace GetFunction {
  export type Input = GetFunctionRequest;
  export type Output = GetFunctionResponse;
  export type Error =
    | ConcurrentModificationException
    | NotFoundException
    | UnauthorizedException
    | CommonAwsError;
}

export declare namespace GetGraphqlApi {
  export type Input = GetGraphqlApiRequest;
  export type Output = GetGraphqlApiResponse;
  export type Error =
    | AccessDeniedException
    | BadRequestException
    | InternalFailureException
    | NotFoundException
    | UnauthorizedException
    | CommonAwsError;
}

export declare namespace GetGraphqlApiEnvironmentVariables {
  export type Input = GetGraphqlApiEnvironmentVariablesRequest;
  export type Output = GetGraphqlApiEnvironmentVariablesResponse;
  export type Error =
    | AccessDeniedException
    | BadRequestException
    | InternalFailureException
    | NotFoundException
    | UnauthorizedException
    | CommonAwsError;
}

export declare namespace GetIntrospectionSchema {
  export type Input = GetIntrospectionSchemaRequest;
  export type Output = GetIntrospectionSchemaResponse;
  export type Error =
    | GraphQLSchemaException
    | InternalFailureException
    | NotFoundException
    | UnauthorizedException
    | CommonAwsError;
}

export declare namespace GetResolver {
  export type Input = GetResolverRequest;
  export type Output = GetResolverResponse;
  export type Error =
    | ConcurrentModificationException
    | NotFoundException
    | UnauthorizedException
    | CommonAwsError;
}

export declare namespace GetSchemaCreationStatus {
  export type Input = GetSchemaCreationStatusRequest;
  export type Output = GetSchemaCreationStatusResponse;
  export type Error =
    | BadRequestException
    | InternalFailureException
    | NotFoundException
    | UnauthorizedException
    | CommonAwsError;
}

export declare namespace GetSourceApiAssociation {
  export type Input = GetSourceApiAssociationRequest;
  export type Output = GetSourceApiAssociationResponse;
  export type Error =
    | BadRequestException
    | InternalFailureException
    | NotFoundException
    | UnauthorizedException
    | CommonAwsError;
}

export declare namespace GetType {
  export type Input = GetTypeRequest;
  export type Output = GetTypeResponse;
  export type Error =
    | BadRequestException
    | ConcurrentModificationException
    | InternalFailureException
    | NotFoundException
    | UnauthorizedException
    | CommonAwsError;
}

export declare namespace ListApiKeys {
  export type Input = ListApiKeysRequest;
  export type Output = ListApiKeysResponse;
  export type Error =
    | BadRequestException
    | InternalFailureException
    | NotFoundException
    | UnauthorizedException
    | CommonAwsError;
}

export declare namespace ListApis {
  export type Input = ListApisRequest;
  export type Output = ListApisResponse;
  export type Error =
    | BadRequestException
    | InternalFailureException
    | UnauthorizedException
    | CommonAwsError;
}

export declare namespace ListChannelNamespaces {
  export type Input = ListChannelNamespacesRequest;
  export type Output = ListChannelNamespacesResponse;
  export type Error =
    | BadRequestException
    | InternalFailureException
    | NotFoundException
    | UnauthorizedException
    | CommonAwsError;
}

export declare namespace ListDataSources {
  export type Input = ListDataSourcesRequest;
  export type Output = ListDataSourcesResponse;
  export type Error =
    | BadRequestException
    | InternalFailureException
    | NotFoundException
    | UnauthorizedException
    | CommonAwsError;
}

export declare namespace ListDomainNames {
  export type Input = ListDomainNamesRequest;
  export type Output = ListDomainNamesResponse;
  export type Error =
    | AccessDeniedException
    | BadRequestException
    | InternalFailureException
    | CommonAwsError;
}

export declare namespace ListFunctions {
  export type Input = ListFunctionsRequest;
  export type Output = ListFunctionsResponse;
  export type Error =
    | BadRequestException
    | InternalFailureException
    | NotFoundException
    | UnauthorizedException
    | CommonAwsError;
}

export declare namespace ListGraphqlApis {
  export type Input = ListGraphqlApisRequest;
  export type Output = ListGraphqlApisResponse;
  export type Error =
    | BadRequestException
    | InternalFailureException
    | UnauthorizedException
    | CommonAwsError;
}

export declare namespace ListResolvers {
  export type Input = ListResolversRequest;
  export type Output = ListResolversResponse;
  export type Error =
    | BadRequestException
    | InternalFailureException
    | NotFoundException
    | UnauthorizedException
    | CommonAwsError;
}

export declare namespace ListResolversByFunction {
  export type Input = ListResolversByFunctionRequest;
  export type Output = ListResolversByFunctionResponse;
  export type Error =
    | BadRequestException
    | InternalFailureException
    | NotFoundException
    | UnauthorizedException
    | CommonAwsError;
}

export declare namespace ListSourceApiAssociations {
  export type Input = ListSourceApiAssociationsRequest;
  export type Output = ListSourceApiAssociationsResponse;
  export type Error =
    | BadRequestException
    | InternalFailureException
    | NotFoundException
    | UnauthorizedException
    | CommonAwsError;
}

export declare namespace ListTagsForResource {
  export type Input = ListTagsForResourceRequest;
  export type Output = ListTagsForResourceResponse;
  export type Error =
    | AccessDeniedException
    | BadRequestException
    | InternalFailureException
    | LimitExceededException
    | NotFoundException
    | UnauthorizedException
    | CommonAwsError;
}

export declare namespace ListTypes {
  export type Input = ListTypesRequest;
  export type Output = ListTypesResponse;
  export type Error =
    | BadRequestException
    | ConcurrentModificationException
    | InternalFailureException
    | NotFoundException
    | UnauthorizedException
    | CommonAwsError;
}

export declare namespace ListTypesByAssociation {
  export type Input = ListTypesByAssociationRequest;
  export type Output = ListTypesByAssociationResponse;
  export type Error =
    | BadRequestException
    | ConcurrentModificationException
    | InternalFailureException
    | NotFoundException
    | UnauthorizedException
    | CommonAwsError;
}

export declare namespace PutGraphqlApiEnvironmentVariables {
  export type Input = PutGraphqlApiEnvironmentVariablesRequest;
  export type Output = PutGraphqlApiEnvironmentVariablesResponse;
  export type Error =
    | AccessDeniedException
    | BadRequestException
    | ConcurrentModificationException
    | InternalFailureException
    | NotFoundException
    | UnauthorizedException
    | CommonAwsError;
}

export declare namespace StartDataSourceIntrospection {
  export type Input = StartDataSourceIntrospectionRequest;
  export type Output = StartDataSourceIntrospectionResponse;
  export type Error =
    | BadRequestException
    | InternalFailureException
    | NotFoundException
    | UnauthorizedException
    | CommonAwsError;
}

export declare namespace StartSchemaCreation {
  export type Input = StartSchemaCreationRequest;
  export type Output = StartSchemaCreationResponse;
  export type Error =
    | BadRequestException
    | ConcurrentModificationException
    | InternalFailureException
    | NotFoundException
    | UnauthorizedException
    | CommonAwsError;
}

export declare namespace StartSchemaMerge {
  export type Input = StartSchemaMergeRequest;
  export type Output = StartSchemaMergeResponse;
  export type Error =
    | BadRequestException
    | ConcurrentModificationException
    | InternalFailureException
    | NotFoundException
    | UnauthorizedException
    | CommonAwsError;
}

export declare namespace TagResource {
  export type Input = TagResourceRequest;
  export type Output = TagResourceResponse;
  export type Error =
    | AccessDeniedException
    | BadRequestException
    | InternalFailureException
    | LimitExceededException
    | NotFoundException
    | UnauthorizedException
    | CommonAwsError;
}

export declare namespace UntagResource {
  export type Input = UntagResourceRequest;
  export type Output = UntagResourceResponse;
  export type Error =
    | AccessDeniedException
    | BadRequestException
    | InternalFailureException
    | LimitExceededException
    | NotFoundException
    | UnauthorizedException
    | CommonAwsError;
}

export declare namespace UpdateApi {
  export type Input = UpdateApiRequest;
  export type Output = UpdateApiResponse;
  export type Error =
    | AccessDeniedException
    | BadRequestException
    | ConcurrentModificationException
    | InternalFailureException
    | NotFoundException
    | UnauthorizedException
    | CommonAwsError;
}

export declare namespace UpdateApiCache {
  export type Input = UpdateApiCacheRequest;
  export type Output = UpdateApiCacheResponse;
  export type Error =
    | BadRequestException
    | ConcurrentModificationException
    | InternalFailureException
    | NotFoundException
    | UnauthorizedException
    | CommonAwsError;
}

export declare namespace UpdateApiKey {
  export type Input = UpdateApiKeyRequest;
  export type Output = UpdateApiKeyResponse;
  export type Error =
    | ApiKeyValidityOutOfBoundsException
    | BadRequestException
    | InternalFailureException
    | LimitExceededException
    | NotFoundException
    | UnauthorizedException
    | CommonAwsError;
}

export declare namespace UpdateChannelNamespace {
  export type Input = UpdateChannelNamespaceRequest;
  export type Output = UpdateChannelNamespaceResponse;
  export type Error =
    | AccessDeniedException
    | BadRequestException
    | ConcurrentModificationException
    | InternalFailureException
    | NotFoundException
    | UnauthorizedException
    | CommonAwsError;
}

export declare namespace UpdateDataSource {
  export type Input = UpdateDataSourceRequest;
  export type Output = UpdateDataSourceResponse;
  export type Error =
    | BadRequestException
    | ConcurrentModificationException
    | InternalFailureException
    | NotFoundException
    | UnauthorizedException
    | CommonAwsError;
}

export declare namespace UpdateDomainName {
  export type Input = UpdateDomainNameRequest;
  export type Output = UpdateDomainNameResponse;
  export type Error =
    | AccessDeniedException
    | BadRequestException
    | ConcurrentModificationException
    | InternalFailureException
    | NotFoundException
    | CommonAwsError;
}

export declare namespace UpdateFunction {
  export type Input = UpdateFunctionRequest;
  export type Output = UpdateFunctionResponse;
  export type Error =
    | BadRequestException
    | ConcurrentModificationException
    | InternalFailureException
    | NotFoundException
    | UnauthorizedException
    | CommonAwsError;
}

export declare namespace UpdateGraphqlApi {
  export type Input = UpdateGraphqlApiRequest;
  export type Output = UpdateGraphqlApiResponse;
  export type Error =
    | AccessDeniedException
    | BadRequestException
    | ConcurrentModificationException
    | InternalFailureException
    | NotFoundException
    | UnauthorizedException
    | CommonAwsError;
}

export declare namespace UpdateResolver {
  export type Input = UpdateResolverRequest;
  export type Output = UpdateResolverResponse;
  export type Error =
    | BadRequestException
    | ConcurrentModificationException
    | InternalFailureException
    | NotFoundException
    | UnauthorizedException
    | CommonAwsError;
}

export declare namespace UpdateSourceApiAssociation {
  export type Input = UpdateSourceApiAssociationRequest;
  export type Output = UpdateSourceApiAssociationResponse;
  export type Error =
    | BadRequestException
    | ConcurrentModificationException
    | InternalFailureException
    | NotFoundException
    | UnauthorizedException
    | CommonAwsError;
}

export declare namespace UpdateType {
  export type Input = UpdateTypeRequest;
  export type Output = UpdateTypeResponse;
  export type Error =
    | BadRequestException
    | ConcurrentModificationException
    | InternalFailureException
    | NotFoundException
    | UnauthorizedException
    | CommonAwsError;
}

